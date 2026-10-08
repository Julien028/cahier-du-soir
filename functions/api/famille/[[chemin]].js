import { json, erreur, corpsJson } from "../../../src/outils.js";
import { exiger, journal, hacher } from "../../../src/session.js";
import {
  lireFiche, codeProvisoire, codeValide, identifiantDepuis, identifiantLibre, ordresSuppressionEnfant,
} from "../../../src/comptes.js";

// La famille d'un parent, gérée par lui-même. L'administrateur peut tout faire sur n'importe
// quelle famille en ajoutant ?famille=ID.
//   GET    /api/famille                  la famille : parents, enfants (avec identifiant), invitations
//   PATCH  /api/famille                  { nom }
//   POST   /api/famille/enfants          { prenom, nom, annee_naissance, classe, rubriques, code? }
//   PATCH  /api/famille/enfants/:id      { prenom, …, rubriques, code?, nouveau_code?, actif? }
//   DELETE /api/famille/enfants/:id      efface l'enfant et tous ses résultats
export async function onRequest(contexte) {
  const { session, refus } = await exiger(contexte, ["administrateur", "parent"]);
  if (refus) return refus;
  const { request, env, params } = contexte;
  const familleId = session.role === "administrateur" ? Number(new URL(request.url).searchParams.get("famille")) : session.famille_id;
  if (!familleId) return erreur(400, session.role === "administrateur" ? "Quelle famille ?" : "Votre compte n'est rattaché à aucune famille. Demandez à l'administrateur.");
  const famille = await env.DB.prepare("SELECT id, nom, cree_le FROM familles WHERE id = ?").bind(familleId).first();
  if (!famille) return erreur(404, "Famille introuvable.");
  const chemin = [].concat(params.chemin || []);
  const route = `${request.method} ${chemin.map((p) => (/^\d+$/.test(p) ? ":n" : p)).join("/")}`;
  const corps = request.method === "GET" || request.method === "DELETE" ? {} : (await corpsJson(request)) || {};

  // L'enfant visé doit être de cette famille.
  const enfantDeLaFamille = async () => {
    const e = await env.DB.prepare("SELECT * FROM comptes WHERE id = ? AND role = 'enfant' AND famille_id = ?").bind(Number(chemin[1]), familleId).first();
    return e || null;
  };

  switch (route) {
    case "GET ": {
      const { results } = await env.DB.prepare(
        `SELECT id, identifiant, prenom, nom, role, annee_naissance, classe, rubriques, couleur, actif,
                (SELECT MAX(s.cree_le) FROM sessions s WHERE s.compte_id = c.id) AS derniere_connexion
           FROM comptes c WHERE famille_id = ? ORDER BY role DESC, prenom`).bind(familleId).all();
      const comptes = results.map((c) => ({ ...c, actif: !!c.actif, rubriques: JSON.parse(c.rubriques || "[]") }));
      const { results: invitations } = await env.DB.prepare(
        "SELECT code, cree_par, cree_le, expire_le FROM invitations WHERE famille_id = ? AND utilisee_le IS NULL AND expire_le > datetime('now') ORDER BY cree_le DESC"
      ).bind(familleId).all();
      return json({ famille, parents: comptes.filter((c) => c.role === "parent"), enfants: comptes.filter((c) => c.role === "enfant"), invitations });
    }

    case "PATCH ": {
      const nom = String(corps.nom || "").trim().slice(0, 60);
      if (!nom) return erreur(400, "Il faut un nom de famille.");
      await env.DB.batch([
        env.DB.prepare("UPDATE familles SET nom = ? WHERE id = ?").bind(nom, familleId),
        journal(env, session.signe, "famille.nom", String(familleId), { nom }),
      ]);
      return json({ ok: true });
    }

    case "POST enfants": {
      const { fiche, erreur: probleme } = lireFiche({ ...corps, role: "enfant" });
      if (probleme) return erreur(400, probleme);
      const code = corps.code ? String(corps.code) : codeProvisoire();
      if (!codeValide(code)) return erreur(400, "Le code fait 4 chiffres.");
      const identifiant = await identifiantLibre(env, identifiantDepuis(fiche.prenom));
      const c = await env.DB.prepare(
        `INSERT INTO comptes (identifiant, prenom, nom, role, mot_de_passe, annee_naissance, classe, rubriques, couleur, cree_par, famille_id)
         VALUES (?,?,?,'enfant',?,?,?,?,?,?,?) RETURNING id`
      ).bind(identifiant, fiche.prenom, fiche.nom, await hacher(code), fiche.annee_naissance, fiche.classe,
        JSON.stringify(fiche.rubriques), fiche.couleur, session.signe, familleId).first();
      await journal(env, session.signe, "enfant.cree", identifiant, { ...fiche, famille_id: familleId }).run();
      return json({ id: c.id, identifiant, ...fiche, code }, { status: 201 });
    }

    case "PATCH enfants/:n": {
      const avant = await enfantDeLaFamille();
      if (!avant) return erreur(404, "Cet enfant n'est pas dans la famille.");
      const ordres = [];
      if (["prenom", "nom", "annee_naissance", "classe", "rubriques", "couleur"].some((k) => k in corps)) {
        const { fiche, erreur: probleme } = lireFiche({ ...corps, role: "enfant" }, { ...avant, rubriques: JSON.parse(avant.rubriques || "[]") });
        if (probleme) return erreur(400, probleme);
        ordres.push(env.DB.prepare("UPDATE comptes SET prenom=?, nom=?, annee_naissance=?, classe=?, rubriques=?, couleur=? WHERE id=?")
          .bind(fiche.prenom, fiche.nom, fiche.annee_naissance, fiche.classe, JSON.stringify(fiche.rubriques), fiche.couleur, avant.id));
      }
      if ("actif" in corps) {
        ordres.push(env.DB.prepare("UPDATE comptes SET actif = ? WHERE id = ?").bind(corps.actif ? 1 : 0, avant.id));
        if (!corps.actif) ordres.push(env.DB.prepare("DELETE FROM sessions WHERE compte_id = ?").bind(avant.id));
      }
      let code = null;
      if (corps.code !== undefined) {
        if (!codeValide(String(corps.code))) return erreur(400, "Le code fait 4 chiffres.");
        code = String(corps.code);
      } else if (corps.nouveau_code) code = codeProvisoire();
      if (code) {
        ordres.push(env.DB.prepare("UPDATE comptes SET mot_de_passe = ? WHERE id = ?").bind(await hacher(code), avant.id));
        ordres.push(env.DB.prepare("DELETE FROM sessions WHERE compte_id = ?").bind(avant.id));
      }
      if (!ordres.length) return erreur(400, "Rien à changer.");
      const { code: _c, ...trace } = corps;
      ordres.push(journal(env, session.signe, "enfant.modifie", avant.identifiant, trace));
      await env.DB.batch(ordres);
      return json({ ok: true, ...(code ? { code } : {}) });
    }

    case "DELETE enfants/:n": {
      const avant = await enfantDeLaFamille();
      if (!avant) return erreur(404, "Cet enfant n'est pas dans la famille.");
      await env.DB.batch([
        ...ordresSuppressionEnfant(env, avant.id),
        journal(env, session.signe, "enfant.supprime", avant.identifiant, { prenom: avant.prenom, famille_id: familleId }),
      ]);
      return json({ ok: true });
    }
  }
  return erreur(404, "Route inconnue.");
}
