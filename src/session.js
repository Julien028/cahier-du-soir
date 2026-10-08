// Connexion : identifiant et mot de passe (ou code à 4 chiffres pour un enfant), cookie de session.
// Reprise du site des heures (lui-même repris du site de vente de la ferme). Tout repose sur l'API Web Crypto standard,
// disponible partout (Workers, Node, navigateurs) : rien a reecrire si on change d'hebergeur.
import { erreur } from "./outils.js";

export const COOKIE = "cahier_session";
// On reste connecté sur sa tablette : un an, prolongé à chaque usage.
const DUREE_JOURS = 365;
// 100 000 tours : le plafond accepte par les Workers pour PBKDF2.
const TOURS = 100000;

const b64 = (octets) => btoa(String.fromCharCode(...new Uint8Array(octets)));
const deB64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

async function deriver(motDePasse, sel, tours) {
  const cle = await crypto.subtle.importKey("raw", new TextEncoder().encode(motDePasse), "PBKDF2", false, ["deriveBits"]);
  return crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: sel, iterations: tours }, cle, 256);
}

// Forme stockee : pbkdf2$tours$sel$empreinte. Le mot de passe n'est jamais garde en clair.
export async function hacher(motDePasse) {
  const sel = crypto.getRandomValues(new Uint8Array(16));
  return `pbkdf2$${TOURS}$${b64(sel)}$${b64(await deriver(motDePasse, sel, TOURS))}`;
}

export async function verifier(motDePasse, stocke) {
  const [algo, tours, sel, attendu] = String(stocke).split("$");
  if (algo !== "pbkdf2" || !attendu) return false;
  const obtenu = b64(await deriver(motDePasse, deB64(sel), Number(tours)));
  // Comparaison a temps constant : on ne sort pas au premier caractere different.
  let diff = obtenu.length ^ attendu.length;
  for (let i = 0; i < obtenu.length; i++) diff |= obtenu.charCodeAt(i) ^ attendu.charCodeAt(i % attendu.length);
  return diff === 0;
}

export function nouveauJeton() {
  return [...crypto.getRandomValues(new Uint8Array(32))].map((n) => n.toString(16).padStart(2, "0")).join("");
}

export const cookieSession = (jeton) =>
  `${COOKIE}=${jeton}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${jeton ? DUREE_JOURS * 86400 : 0}`;
export const expiration = () => `+${DUREE_JOURS} days`;

function lireCookie(request) {
  const brut = request.headers.get("cookie") || "";
  const trouve = brut.split(/;\s*/).find((c) => c.startsWith(COOKIE + "="));
  return trouve ? trouve.slice(COOKIE.length + 1) : "";
}

export async function lireSession(request, env) {
  const jeton = lireCookie(request);
  if (!/^[0-9a-f]{64}$/.test(jeton)) return null;
  const compte = await env.DB.prepare(
    `SELECT c.id, c.identifiant, c.prenom, c.nom, c.role, c.classe, c.rubriques, c.couleur, c.annee_naissance, c.famille_id, s.expire_le
       FROM sessions s JOIN comptes c ON c.id = s.compte_id
      WHERE s.jeton = ? AND s.expire_le > datetime('now') AND c.actif = 1`
  ).bind(jeton).first();
  if (!compte) return null;
  // Prolongation, au plus une fois par mois, pour ne pas ecrire a chaque clic.
  const { prolonger } = await env.DB.prepare(
    "SELECT ? < datetime('now', '+335 days') AS prolonger").bind(compte.expire_le).first();
  if (prolonger) await env.DB.prepare("UPDATE sessions SET expire_le = datetime('now', ?) WHERE jeton = ?").bind(expiration(), jeton).run();
  // « signe » : le nom qui signe les actions dans le journal.
  return { ...compte, jeton, signe: `${compte.prenom} ${compte.nom}`.trim() };
}

// A appeler en tete de chaque route. Rend { session } ou { refus } (une reponse prete).
// role : un niveau, une liste de niveaux, ou rien (toute personne connectée).
export async function exiger({ request, env }, role = null) {
  // Une ecriture doit venir de nos propres pages : meme origine, et du JSON.
  if (request.method !== "GET") {
    const origine = request.headers.get("origin");
    if (origine && origine !== new URL(request.url).origin) return { refus: erreur(403, "Origine refusée.") };
    if (!(request.headers.get("content-type") || "").includes("application/json")) return { refus: erreur(415, "JSON attendu.") };
  }
  const session = await lireSession(request, env);
  if (!session) return { refus: erreur(401, "Connexion nécessaire.") };
  const permis = role === null ? null : [].concat(role);
  if (permis && !permis.includes(session.role)) return { refus: erreur(403, "Accès réservé.") };
  return { session };
}

export const journal = (env, qui, quoi, cible, detail) =>
  env.DB.prepare("INSERT INTO journal (qui, quoi, cible, detail) VALUES (?,?,?,?)")
    .bind(qui, quoi, String(cible ?? ""), detail === undefined ? null : JSON.stringify(detail));
