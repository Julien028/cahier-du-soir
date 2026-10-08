import { json, erreur, corpsJson, aujourdhui } from "../../src/outils.js";
import { exiger, verifier, hacher, journal } from "../../src/session.js";
import { MOT_DE_PASSE_MIN } from "../../src/comptes.js";

// GET /api/moi -> la personne connectée, la date du jour à Paris, et pour un parent la liste
// de ses enfants (pour l'administrateur : tous les enfants).
export async function onRequestGet(contexte) {
  const { session, refus } = await exiger(contexte);
  if (refus) return refus;
  const env = contexte.env;
  let enfants = [];
  if (session.role === "administrateur") {
    enfants = (await env.DB.prepare("SELECT id, prenom, nom, classe, couleur FROM comptes WHERE role = 'enfant' AND actif = 1 ORDER BY prenom").all()).results;
  } else if (session.role === "parent") {
    enfants = (await env.DB.prepare(
      `SELECT c.id, c.prenom, c.nom, c.classe, c.couleur FROM liens_parents l JOIN comptes c ON c.id = l.enfant_id
        WHERE l.parent_id = ? AND c.actif = 1 ORDER BY c.prenom`).bind(session.id).all()).results;
  }
  return json({
    id: session.id, identifiant: session.identifiant, prenom: session.prenom, nom: session.nom,
    role: session.role, couleur: session.couleur, aujourdhui: aujourdhui(), enfants,
  });
}

// PATCH /api/moi { mot_de_passe_actuel, mot_de_passe } -> un adulte change son mot de passe.
// (Le code d'un enfant se change par l'administrateur.)
export async function onRequestPatch(contexte) {
  const { session, refus } = await exiger(contexte, ["administrateur", "parent"]);
  if (refus) return refus;
  const corps = await corpsJson(contexte.request);
  const actuel = String(corps?.mot_de_passe_actuel ?? ""), nouveau = String(corps?.mot_de_passe ?? "");
  if (nouveau.length < MOT_DE_PASSE_MIN) return erreur(400, `Le nouveau mot de passe doit faire ${MOT_DE_PASSE_MIN} caractères au moins.`);
  const c = await contexte.env.DB.prepare("SELECT mot_de_passe FROM comptes WHERE id = ?").bind(session.id).first();
  if (!c || !(await verifier(actuel, c.mot_de_passe))) return erreur(401, "Le mot de passe actuel n'est pas le bon.");
  await contexte.env.DB.batch([
    contexte.env.DB.prepare("UPDATE comptes SET mot_de_passe = ? WHERE id = ?").bind(await hacher(nouveau), session.id),
    contexte.env.DB.prepare("DELETE FROM sessions WHERE compte_id = ? AND jeton <> ?").bind(session.id, session.jeton),
    journal(contexte.env, session.signe, "compte.mot_de_passe", session.identifiant),
  ]);
  return json({ ok: true });
}
