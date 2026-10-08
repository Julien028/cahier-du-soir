import { json, erreur, corpsJson } from "../../../src/outils.js";
import { exiger, journal, hacher } from "../../../src/session.js";
import {
  identifiantValide, identifiantDepuis, codeProvisoire, motDePasseProvisoire, listeComptes, lireFiche, remplacerLiens, identifiantLibre,
} from "../../../src/comptes.js";

// GET  /api/comptes (administrateur) -> tous les comptes, sans jamais les mots de passe.
// POST /api/comptes (administrateur)
//   enfant : { role:"enfant", prenom, nom, annee_naissance, classe, rubriques, parents:[id] }
//            -> identifiant tiré du prénom, code à 4 chiffres montré une seule fois.
//   parent : { role:"parent", prenom, nom, identifiant?, enfants:[id] }
//            -> mot de passe provisoire montré une seule fois ; le parent le change ensuite.
export async function onRequestGet(contexte) {
  const { refus } = await exiger(contexte, "administrateur");
  return refus || json(await listeComptes(contexte.env));
}

export async function onRequestPost(contexte) {
  const { session, refus } = await exiger(contexte, "administrateur");
  if (refus) return refus;
  const env = contexte.env;
  const corps = (await corpsJson(contexte.request)) || {};
  const { fiche, erreur: probleme } = lireFiche(corps);
  if (probleme) return erreur(400, probleme);
  if (fiche.role === "administrateur") return erreur(400, "Un administrateur se crée avec « npm run compte ».");

  // L'identifiant : choisi pour un parent, sinon tiré du prénom ; « simon-2 » si « simon » est pris.
  let identifiant = String(corps.identifiant ?? "").trim().toLowerCase();
  if (identifiant && !identifiantValide(identifiant)) return erreur(400, "L'identifiant : lettres minuscules, chiffres, point ou tiret, sans espace ni accent.");
  if (identifiant) {
    if (await env.DB.prepare("SELECT 1 FROM comptes WHERE identifiant = ?").bind(identifiant).first()) return erreur(409, "Cet identifiant existe déjà.");
  } else {
    identifiant = await identifiantLibre(env, identifiantDepuis(fiche.prenom));
  }

  const familleId = corps.famille_id ? Number(corps.famille_id) : null;
  if (familleId && !(await env.DB.prepare("SELECT 1 FROM familles WHERE id = ?").bind(familleId).first())) return erreur(400, "Famille inconnue.");
  const secret = fiche.role === "enfant" ? codeProvisoire() : motDePasseProvisoire();
  const c = await env.DB.prepare(
    `INSERT INTO comptes (identifiant, prenom, nom, role, mot_de_passe, annee_naissance, classe, rubriques, couleur, cree_par, famille_id)
     VALUES (?,?,?,?,?,?,?,?,?,?,?) RETURNING id`
  ).bind(identifiant, fiche.prenom, fiche.nom, fiche.role, await hacher(secret), fiche.annee_naissance, fiche.classe,
    JSON.stringify(fiche.rubriques), fiche.couleur, session.signe, familleId).first();

  const liens = fiche.role === "parent"
    ? remplacerLiens(env, c.id, corps.enfants)
    : (Array.isArray(corps.parents) ? corps.parents : []).map((p) => env.DB.prepare(
      "INSERT OR IGNORE INTO liens_parents (parent_id, enfant_id) SELECT id, ? FROM comptes WHERE id = ? AND role = 'parent'").bind(c.id, Number(p)));
  await env.DB.batch([...liens, journal(env, session.signe, "compte.cree", identifiant, { ...fiche })]);
  return json({
    id: c.id, identifiant, ...fiche, actif: true,
    [fiche.role === "enfant" ? "code" : "mot_de_passe_provisoire"]: secret,
  }, { status: 201 });
}
