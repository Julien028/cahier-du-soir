// Les échanges avec le serveur. Toujours du JSON ; une erreur remonte avec son message.
export async function api(chemin, { methode = "GET", corps } = {}) {
  const r = await fetch("/api/" + chemin, {
    method: methode,
    headers: corps === undefined ? {} : { "content-type": "application/json" },
    body: corps === undefined ? undefined : JSON.stringify(corps),
    credentials: "same-origin",
  });
  const donnees = await r.json().catch(() => ({}));
  if (!r.ok) {
    const e = new Error(donnees.erreur || "Le serveur ne répond pas. Vérifie la connexion internet.");
    e.statut = r.status;
    throw e;
  }
  return donnees;
}

// Les enfants qui se sont déjà connectés sur cette tablette : leur prénom s'affiche en grand
// sur l'écran d'accueil. Rien d'autre n'est gardé (ni code, ni résultat).
const CLE = "cahier:enfants";
export function enfantsDeLaTablette() {
  try { return JSON.parse(localStorage.getItem(CLE) || "[]"); } catch { return []; }
}
export function retenirEnfant(e) {
  try {
    const liste = enfantsDeLaTablette().filter((x) => x.identifiant !== e.identifiant);
    liste.unshift({ identifiant: e.identifiant, prenom: e.prenom, couleur: e.couleur });
    localStorage.setItem(CLE, JSON.stringify(liste.slice(0, 8)));
  } catch { /* navigateur sans mémoire : on retapera le prénom */ }
}
export function oublierEnfant(identifiant) {
  try { localStorage.setItem(CLE, JSON.stringify(enfantsDeLaTablette().filter((x) => x.identifiant !== identifiant))); } catch { }
}
