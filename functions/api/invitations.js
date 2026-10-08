import { json, erreur, corpsJson } from "../../src/outils.js";
import { exiger, journal } from "../../src/session.js";
import { codeInvitation, DUREE_INVITATION_JOURS } from "../../src/comptes.js";

// GET  /api/invitations -> les invitations en cours (toutes pour l'administrateur,
//                          celles de sa famille pour un parent).
// POST /api/invitations
//   administrateur : { nom_famille? }  -> invitation pour une NOUVELLE famille
//                    { famille_id }    -> invitation pour rejoindre cette famille
//   parent         : {}                -> invitation pour que l'autre parent rejoigne sa famille
export async function onRequestGet(contexte) {
  const { session, refus } = await exiger(contexte, ["administrateur", "parent"]);
  if (refus) return refus;
  const admin = session.role === "administrateur";
  const { results } = await contexte.env.DB.prepare(
    `SELECT i.code, i.famille_id, i.nom_famille, i.cree_par, i.cree_le, i.expire_le, i.utilisee_le, i.utilisee_par,
            (SELECT nom FROM familles f WHERE f.id = i.famille_id) AS famille
       FROM invitations i
      WHERE ${admin ? "1 = 1" : "i.famille_id = ?"} AND (i.utilisee_le IS NULL AND i.expire_le > datetime('now'))
      ORDER BY i.cree_le DESC LIMIT 50`
  ).bind(...(admin ? [] : [session.famille_id ?? -1])).all();
  return json(results);
}

export async function onRequestPost(contexte) {
  const { session, refus } = await exiger(contexte, ["administrateur", "parent"]);
  if (refus) return refus;
  const env = contexte.env;
  const corps = (await corpsJson(contexte.request)) || {};
  let familleId = null, nomFamille = null;
  if (session.role === "parent") {
    if (!session.famille_id) return erreur(400, "Votre compte n'est rattaché à aucune famille. Demandez à l'administrateur.");
    familleId = session.famille_id;
  } else if (corps.famille_id) {
    familleId = Number(corps.famille_id);
    if (!(await env.DB.prepare("SELECT 1 FROM familles WHERE id = ?").bind(familleId).first())) return erreur(400, "Famille inconnue.");
  } else {
    nomFamille = String(corps.nom_famille || "").trim().slice(0, 60) || null;
  }
  const code = codeInvitation();
  await env.DB.batch([
    env.DB.prepare("INSERT INTO invitations (code, famille_id, nom_famille, cree_par, expire_le) VALUES (?,?,?,?, datetime('now', ?))")
      .bind(code, familleId, nomFamille, session.signe, `+${DUREE_INVITATION_JOURS} days`),
    journal(env, session.signe, "invitation.creee", code, { famille_id: familleId, nom_famille: nomFamille }),
  ]);
  return json({ code, famille_id: familleId, nom_famille: nomFamille, jours: DUREE_INVITATION_JOURS }, { status: 201 });
}
