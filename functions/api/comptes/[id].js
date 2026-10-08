import { json, erreur, corpsJson } from "../../../src/outils.js";
import { exiger, journal, hacher } from "../../../src/session.js";
import { lireFiche, codeProvisoire, motDePasseProvisoire, remplacerLiens, codeValide } from "../../../src/comptes.js";

// PATCH /api/comptes/:id (administrateur)
//   { prenom, nom, annee_naissance, classe, rubriques, couleur } -> change la fiche
//   { actif: false|true }                                         -> désactive ou réactive
//   { nouveau_secret: true }  -> nouveau code (enfant) ou mot de passe provisoire (parent),
//                                montré une seule fois ; ses sessions sont fermées
//   { code: "1234" }          -> un enfant : code choisi par l'administrateur
//   { enfants: [id] }         -> un parent : les enfants qu'il suit
//   { parents: [id] }         -> un enfant : les parents qui le suivent
export async function onRequestPatch(contexte) {
  const { session, refus } = await exiger(contexte, "administrateur");
  if (refus) return refus;
  const env = contexte.env;
  const id = Number(contexte.params.id);
  const avant = await env.DB.prepare("SELECT * FROM comptes WHERE id = ?").bind(id).first();
  if (!avant) return erreur(404, "Compte introuvable.");
  const corps = (await corpsJson(contexte.request)) || {};
  const ordres = [];
  const rendu = { id };

  const champs = ["prenom", "nom", "annee_naissance", "classe", "rubriques", "couleur"];
  if (avant.role !== "administrateur" && champs.some((k) => k in corps)) {
    const { fiche, erreur: probleme } = lireFiche({ ...corps, role: avant.role },
      { ...avant, rubriques: JSON.parse(avant.rubriques || "[]") });
    if (probleme) return erreur(400, probleme);
    ordres.push(env.DB.prepare(
      "UPDATE comptes SET prenom=?, nom=?, annee_naissance=?, classe=?, rubriques=?, couleur=? WHERE id=?"
    ).bind(fiche.prenom, fiche.nom, fiche.annee_naissance, fiche.classe, JSON.stringify(fiche.rubriques), fiche.couleur, id));
  }
  if ("actif" in corps) {
    if (id === session.id && !corps.actif) return erreur(400, "Vous ne pouvez pas désactiver votre propre compte.");
    ordres.push(env.DB.prepare("UPDATE comptes SET actif = ? WHERE id = ?").bind(corps.actif ? 1 : 0, id));
    if (!corps.actif) ordres.push(env.DB.prepare("DELETE FROM sessions WHERE compte_id = ?").bind(id));
  }
  let secret = null;
  if (corps.code !== undefined) {
    if (avant.role !== "enfant") return erreur(400, "Seul un enfant a un code.");
    if (!codeValide(String(corps.code))) return erreur(400, "Le code fait 4 chiffres.");
    secret = String(corps.code);
  } else if (corps.nouveau_secret) {
    if (avant.role === "administrateur") return erreur(400, "Un administrateur change son mot de passe lui-même.");
    secret = avant.role === "enfant" ? codeProvisoire() : motDePasseProvisoire();
  }
  if (secret) {
    ordres.push(env.DB.prepare("UPDATE comptes SET mot_de_passe = ? WHERE id = ?").bind(await hacher(secret), id));
    ordres.push(env.DB.prepare("DELETE FROM sessions WHERE compte_id = ?").bind(id));
    rendu[avant.role === "enfant" ? "code" : "mot_de_passe_provisoire"] = secret;
  }
  if ("enfants" in corps && avant.role === "parent") ordres.push(...remplacerLiens(env, id, corps.enfants));
  if ("parents" in corps && avant.role === "enfant") {
    ordres.push(env.DB.prepare("DELETE FROM liens_parents WHERE enfant_id = ?").bind(id));
    for (const p of (Array.isArray(corps.parents) ? corps.parents : [])) ordres.push(env.DB.prepare(
      "INSERT OR IGNORE INTO liens_parents (parent_id, enfant_id) SELECT id, ? FROM comptes WHERE id = ? AND role = 'parent'").bind(id, Number(p)));
  }
  if (!ordres.length) return erreur(400, "Rien à changer.");
  // Le journal ne garde jamais le code ni le mot de passe.
  const { code, ...trace } = corps;
  ordres.push(journal(env, session.signe, "compte.modifie", avant.identifiant, trace));
  await env.DB.batch(ordres);
  return json({ ok: true, ...rendu });
}
