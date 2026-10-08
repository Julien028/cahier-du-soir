import { json, erreur, corpsJson } from "../../src/outils.js";
import { verifier, hacher, nouveauJeton, cookieSession, expiration, journal } from "../../src/session.js";

// POST /api/connexion { identifiant, mot_de_passe } -> pose le cookie de session.
// Pour un enfant, le « mot de passe » est son code à 4 chiffres. Un code se devine plus vite
// qu'un mot de passe : en plus des 5 essais par quart d'heure, 15 essais ratés par jour au plus.
const ESSAIS_QUART = 5;
const ESSAIS_JOUR = 15;

export async function onRequestPost({ request, env }) {
  const corps = await corpsJson(request);
  const identifiant = String(corps?.identifiant ?? "").trim().toLowerCase().slice(0, 60);
  const motDePasse = String(corps?.mot_de_passe ?? "").slice(0, 200);
  if (!identifiant || !motDePasse) return erreur(400, "Identifiant et code (ou mot de passe) nécessaires.");

  const echecs = await env.DB.prepare(
    `SELECT SUM(quand > datetime('now', '-15 minutes')) AS quart, COUNT(*) AS jour FROM journal
      WHERE quoi = 'connexion.echec' AND cible = ? AND quand > datetime('now', '-1 day')`
  ).bind(identifiant).first();
  if ((echecs.quart || 0) >= ESSAIS_QUART) return erreur(429, "Trop d'essais. Réessaie dans un quart d'heure.");
  if ((echecs.jour || 0) >= ESSAIS_JOUR) return erreur(429, "Trop d'essais aujourd'hui. Demande à un adulte.");

  const compte = await env.DB.prepare(
    "SELECT id, prenom, nom, role, mot_de_passe, couleur FROM comptes WHERE identifiant = ? AND actif = 1"
  ).bind(identifiant).first();
  // Même travail et même message que le compte existe ou non : on ne renseigne pas un curieux.
  const bon = await verifier(motDePasse, compte?.mot_de_passe ?? (await hacher("leurre")));
  if (!compte || !bon) {
    await journal(env, identifiant, "connexion.echec", identifiant).run();
    return erreur(401, "Ce n'est pas le bon code (ou le bon mot de passe).");
  }

  const jeton = nouveauJeton();
  await env.DB.batch([
    env.DB.prepare("DELETE FROM sessions WHERE expire_le <= datetime('now')"),
    env.DB.prepare("INSERT INTO sessions (jeton, compte_id, expire_le) VALUES (?, ?, datetime('now', ?))")
      .bind(jeton, compte.id, expiration()),
    journal(env, `${compte.prenom} ${compte.nom}`.trim(), "connexion", identifiant),
  ]);
  const reponse = json({ id: compte.id, identifiant, prenom: compte.prenom, role: compte.role, couleur: compte.couleur });
  reponse.headers.set("set-cookie", cookieSession(jeton));
  return reponse;
}
