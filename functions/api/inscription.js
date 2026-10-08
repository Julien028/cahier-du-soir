import { json, erreur, corpsJson } from "../../src/outils.js";
import { hacher, nouveauJeton, cookieSession, expiration, journal } from "../../src/session.js";
import { identifiantValide, MOT_DE_PASSE_MIN, normaliserInvitation } from "../../src/comptes.js";

// POST /api/inscription { code, prenom, nom, identifiant, mot_de_passe, nom_famille }
// Un parent crée lui-même son espace avec un code d'invitation :
//   - donné par l'administrateur : une nouvelle famille est créée ;
//   - donné par un autre parent : il rejoint la famille de celui-ci.
// Le code sert une seule fois. Pas d'invitation valable : pas d'inscription.
const ESSAIS_HEURE = 10;   // codes faux tolérés par adresse internet et par heure

export async function onRequestPost({ request, env }) {
  const ip = request.headers.get("cf-connecting-ip") || "local";
  const { n } = await env.DB.prepare(
    "SELECT COUNT(*) AS n FROM journal WHERE quoi = 'inscription.echec' AND cible = ? AND quand > datetime('now', '-1 hour')"
  ).bind(ip).first();
  if (n >= ESSAIS_HEURE) return erreur(429, "Trop d'essais. Réessayez dans une heure.");

  const corps = (await corpsJson(request)) || {};
  const code = normaliserInvitation(corps.code);
  const inv = await env.DB.prepare(
    "SELECT code, famille_id, nom_famille FROM invitations WHERE code = ? AND utilisee_le IS NULL AND expire_le > datetime('now')"
  ).bind(code).first();
  if (!inv) {
    await journal(env, "inscription", "inscription.echec", ip).run();
    return erreur(400, "Ce code d'invitation n'est pas valable (déjà utilisé, expiré ou mal recopié).");
  }

  const prenom = String(corps.prenom || "").trim().slice(0, 40);
  const nom = String(corps.nom || "").trim().slice(0, 60);
  const identifiant = String(corps.identifiant || "").trim().toLowerCase();
  const motDePasse = String(corps.mot_de_passe || "");
  if (!prenom) return erreur(400, "Il faut votre prénom.");
  if (!identifiantValide(identifiant)) return erreur(400, "L'identifiant : lettres minuscules, chiffres, point ou tiret, sans espace ni accent (ex. claire.pichot).");
  if (motDePasse.length < MOT_DE_PASSE_MIN) return erreur(400, `Le mot de passe doit faire ${MOT_DE_PASSE_MIN} caractères au moins.`);
  if (await env.DB.prepare("SELECT 1 FROM comptes WHERE identifiant = ?").bind(identifiant).first()) return erreur(409, "Cet identifiant est déjà pris. Choisissez-en un autre.");

  // Le code est pris tout de suite : deux inscriptions en même temps ne peuvent pas l'utiliser.
  const pris = await env.DB.prepare("UPDATE invitations SET utilisee_le = datetime('now'), utilisee_par = ? WHERE code = ? AND utilisee_le IS NULL")
    .bind(identifiant, code).run();
  if (!pris.meta?.changes) return erreur(400, "Ce code d'invitation vient d'être utilisé.");

  let familleId = inv.famille_id;
  if (!familleId) {
    const nomFamille = String(corps.nom_famille || inv.nom_famille || `Famille ${nom || prenom}`).trim().slice(0, 60);
    familleId = (await env.DB.prepare("INSERT INTO familles (nom) VALUES (?) RETURNING id").bind(nomFamille).first()).id;
  }
  const c = await env.DB.prepare(
    "INSERT INTO comptes (identifiant, prenom, nom, role, mot_de_passe, famille_id, cree_par) VALUES (?,?,?,'parent',?,?,'inscription') RETURNING id"
  ).bind(identifiant, prenom, nom, await hacher(motDePasse), familleId).first();

  const jeton = nouveauJeton();
  await env.DB.batch([
    env.DB.prepare("INSERT INTO sessions (jeton, compte_id, expire_le) VALUES (?, ?, datetime('now', ?))").bind(jeton, c.id, expiration()),
    journal(env, `${prenom} ${nom}`.trim(), "inscription", identifiant, { famille_id: familleId, invitation: code }),
  ]);
  const reponse = json({ id: c.id, identifiant, prenom, role: "parent", famille_id: familleId }, { status: 201 });
  reponse.headers.set("set-cookie", cookieSession(jeton));
  return reponse;
}
