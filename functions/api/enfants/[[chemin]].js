import { json, erreur, corpsJson, aujourdhui, ajouterJours } from "../../../src/outils.js";
import { exiger, journal } from "../../../src/session.js";
import { peutVoir, tableau, bilanBadges, totalEtoiles } from "../../../src/enfants.js";
import { etoilesSeance, GAINS, badgesGagnes, grade, cycleDe, missionDuJour, DELAI_ERREUR } from "../../../public/js/regles.js";

// Tout ce qui concerne un enfant, sous /api/enfants/:id/…
//   GET   :id                       tableau de bord (enfant, ses parents, l'administrateur)
//   POST  :id/seances               l'enfant enregistre sa séance du soir
//   GET   :id/erreurs               les erreurs à revoir aujourd'hui
//   POST  :id/erreurs/:eid          { reussie } l'enfant retente une erreur
//   POST  :id/mission               l'enfant a fait sa mission sans écran
//   POST  :id/mots/lus              l'enfant a lu ses mots
//   PATCH :id/progression           { rubrique, semaine, jour } (parent, administrateur)
//   POST  :id/recompense            { libelle, objectif }       (parent, administrateur)
//   POST  :id/recompense/donnee                                  (parent, administrateur)
//   POST  :id/mots                  { texte }                   (parent, administrateur)
//   POST  :id/reprise               { rubrique, sauvegarde }    (administrateur) ancien cahier
export async function onRequest(contexte) {
  const { session, refus } = await exiger(contexte);
  if (refus) return refus;
  const { request, env, params } = contexte;
  const chemin = [].concat(params.chemin || []);
  const enfant = await peutVoir(env, session, Number(chemin[0]));
  if (!enfant) return erreur(404, "Enfant introuvable.");
  const route = `${request.method} ${chemin.slice(1).map((p) => (/^\d+$/.test(p) ? ":n" : p)).join("/")}`;
  const jour = aujourdhui();
  const corps = request.method === "GET" ? null : (await corpsJson(request)) || {};
  const lui = session.role === "enfant";
  const adulte = !lui;
  const rubriques = JSON.parse(enfant.rubriques || "[]");

  switch (route) {
    case "GET ":
      return json(await tableau(env, enfant, jour));

    case "POST seances": {
      if (!lui) return erreur(403, "Seul l'enfant fait sa séance.");
      const rubrique = String(corps.rubrique || "");
      if (!rubriques.includes(rubrique)) return erreur(400, "Rubrique inconnue.");
      const score = Number(corps.score), total = Number(corps.total);
      if (!Number.isInteger(score) || !Number.isInteger(total) || total < 1 || total > 20 || score < 0 || score > total) return erreur(400, "Résultat illisible.");
      const deja = await env.DB.prepare("SELECT 1 FROM seances WHERE enfant_id = ? AND rubrique = ? AND date = ? AND importe = 0")
        .bind(enfant.id, rubrique, jour).first();
      if (deja) return erreur(409, "La séance de ce soir est déjà faite. À demain !");
      const p = (await env.DB.prepare("SELECT semaine, jour FROM progression WHERE enfant_id = ? AND rubrique = ?").bind(enfant.id, rubrique).first()) || { semaine: 1, jour: 0 };
      const matiere = String(corps.matiere || "").slice(0, 10) || "?";
      const avant = badgesGagnes(await bilanBadges(env, enfant.id));
      const totalAvant = await totalEtoiles(env, enfant.id);
      const gain = etoilesSeance(score, total);
      const suivant = p.jour >= 5 ? { semaine: Math.min(36, p.semaine + 1), jour: 0 } : { semaine: p.semaine, jour: p.jour + 1 };
      const erreurs = (Array.isArray(corps.erreurs) ? corps.erreurs : []).slice(0, 10)
        .map((q) => JSON.stringify(q)).filter((q) => q.length < 4000);
      await env.DB.batch([
        env.DB.prepare("INSERT INTO seances (enfant_id, rubrique, date, semaine, jour, matiere, score, total) VALUES (?,?,?,?,?,?,?,?)")
          .bind(enfant.id, rubrique, jour, p.semaine, p.jour, matiere, score, total),
        env.DB.prepare("INSERT INTO etoiles (enfant_id, date, nombre, raison) VALUES (?,?,?,?)")
          .bind(enfant.id, jour, gain, score === total ? "sans_faute" : "seance"),
        env.DB.prepare(`INSERT INTO progression (enfant_id, rubrique, semaine, jour) VALUES (?,?,?,?)
                        ON CONFLICT(enfant_id, rubrique) DO UPDATE SET semaine = excluded.semaine, jour = excluded.jour`)
          .bind(enfant.id, rubrique, suivant.semaine, suivant.jour),
        ...erreurs.map((q) => env.DB.prepare("INSERT INTO erreurs (enfant_id, rubrique, matiere, question, revoir_le) VALUES (?,?,?,?,?)")
          .bind(enfant.id, rubrique, matiere, q, ajouterJours(jour, DELAI_ERREUR[0]))),
      ]);
      return json(await apresGain(env, enfant, avant, totalAvant, gain));
    }

    case "GET erreurs": {
      const { results } = await env.DB.prepare(
        "SELECT id, rubrique, matiere, question FROM erreurs WHERE enfant_id = ? AND corrigee = 0 AND revoir_le <= ? ORDER BY revoir_le, id LIMIT 5"
      ).bind(enfant.id, jour).all();
      return json(results.map((e) => ({ ...e, question: JSON.parse(e.question) })));
    }

    case "POST erreurs/:n": {
      if (!lui) return erreur(403, "Seul l'enfant revoit ses erreurs.");
      const e = await env.DB.prepare("SELECT id, essais FROM erreurs WHERE id = ? AND enfant_id = ? AND corrigee = 0 AND revoir_le <= ?")
        .bind(Number(chemin[2]), enfant.id, jour).first();
      if (!e) return erreur(404, "Cette erreur n'est pas à revoir aujourd'hui.");
      if (!corps.reussie) {
        const delai = DELAI_ERREUR[Math.min(e.essais + 1, DELAI_ERREUR.length - 1)];
        await env.DB.prepare("UPDATE erreurs SET essais = essais + 1, revoir_le = ? WHERE id = ?").bind(ajouterJours(jour, delai), e.id).run();
        return json({ gain: 0, revoirDans: delai });
      }
      const avant = badgesGagnes(await bilanBadges(env, enfant.id));
      const totalAvant = await totalEtoiles(env, enfant.id);
      await env.DB.batch([
        env.DB.prepare("UPDATE erreurs SET essais = essais + 1, corrigee = 1 WHERE id = ?").bind(e.id),
        env.DB.prepare("INSERT INTO etoiles (enfant_id, date, nombre, raison) VALUES (?,?,?,?)").bind(enfant.id, jour, GAINS.erreurCorrigee, "erreur_corrigee"),
      ]);
      return json(await apresGain(env, enfant, avant, totalAvant, GAINS.erreurCorrigee));
    }

    case "POST mission": {
      if (!lui) return erreur(403, "Seul l'enfant coche sa mission.");
      const fait = await env.DB.prepare("SELECT 1 FROM missions WHERE enfant_id = ? AND date = ?").bind(enfant.id, jour).first();
      if (fait) return erreur(409, "Mission déjà cochée aujourd'hui.");
      const avant = badgesGagnes(await bilanBadges(env, enfant.id));
      const totalAvant = await totalEtoiles(env, enfant.id);
      await env.DB.batch([
        env.DB.prepare("INSERT INTO missions (enfant_id, date, texte) VALUES (?,?,?)").bind(enfant.id, jour, missionDuJour(jour, cycleDe(enfant.classe), enfant.id)),
        env.DB.prepare("INSERT INTO etoiles (enfant_id, date, nombre, raison) VALUES (?,?,?,?)").bind(enfant.id, jour, GAINS.mission, "mission"),
      ]);
      return json(await apresGain(env, enfant, avant, totalAvant, GAINS.mission));
    }

    case "POST mots/lus": {
      if (!lui) return erreur(403, "Seul l'enfant lit ses mots.");
      await env.DB.prepare("UPDATE mots SET lu_le = datetime('now') WHERE enfant_id = ? AND lu_le IS NULL").bind(enfant.id).run();
      return json({ ok: true });
    }

    case "PATCH progression": {
      if (!adulte) return erreur(403, "Réservé aux parents.");
      const rubrique = String(corps.rubrique || "");
      const semaine = Number(corps.semaine), j = Number(corps.jour);
      if (!rubriques.includes(rubrique)) return erreur(400, "Rubrique inconnue.");
      if (!Number.isInteger(semaine) || semaine < 1 || semaine > 36 || !Number.isInteger(j) || j < 0 || j > 5) return erreur(400, "Semaine ou séance illisible.");
      await env.DB.batch([
        env.DB.prepare(`INSERT INTO progression (enfant_id, rubrique, semaine, jour) VALUES (?,?,?,?)
                        ON CONFLICT(enfant_id, rubrique) DO UPDATE SET semaine = excluded.semaine, jour = excluded.jour`).bind(enfant.id, rubrique, semaine, j),
        journal(env, session.signe, "progression", enfant.identifiant, { rubrique, semaine, jour: j }),
      ]);
      return json({ ok: true });
    }

    case "POST recompense": {
      if (!adulte) return erreur(403, "Réservé aux parents.");
      const libelle = String(corps.libelle || "").trim().slice(0, 120);
      const objectif = Number(corps.objectif);
      if (!libelle) return erreur(400, "Il faut dire quelle est la récompense.");
      if (!Number.isInteger(objectif) || objectif < 5 || objectif > 5000) return erreur(400, "L'objectif : entre 5 et 5000 étoiles.");
      const depart = await totalEtoiles(env, enfant.id);
      await env.DB.batch([
        env.DB.prepare("DELETE FROM recompenses WHERE enfant_id = ? AND donnee_le IS NULL").bind(enfant.id),
        env.DB.prepare("INSERT INTO recompenses (enfant_id, libelle, objectif, depart, fixee_par) VALUES (?,?,?,?,?)").bind(enfant.id, libelle, objectif, depart, session.signe),
        journal(env, session.signe, "recompense.fixee", enfant.identifiant, { libelle, objectif }),
      ]);
      return json({ ok: true });
    }

    case "POST recompense/donnee": {
      if (!adulte) return erreur(403, "Réservé aux parents.");
      await env.DB.batch([
        env.DB.prepare("UPDATE recompenses SET donnee_le = datetime('now') WHERE enfant_id = ? AND donnee_le IS NULL").bind(enfant.id),
        journal(env, session.signe, "recompense.donnee", enfant.identifiant),
      ]);
      return json({ ok: true });
    }

    case "POST mots": {
      if (!adulte) return erreur(403, "Réservé aux parents.");
      const texte = String(corps.texte || "").trim().slice(0, 500);
      if (!texte) return erreur(400, "Le mot est vide.");
      await env.DB.prepare("INSERT INTO mots (enfant_id, auteur, texte) VALUES (?,?,?)").bind(enfant.id, session.prenom, texte).run();
      return json({ ok: true });
    }

    case "POST reprise":
      if (session.role !== "administrateur") return erreur(403, "Réservé à l'administrateur.");
      return reprise(env, session, enfant, rubriques, corps);
  }
  return erreur(404, "Route inconnue.");
}

// Après un gain d'étoiles : le nouveau total, le grade, et ce qui vient d'être débloqué.
async function apresGain(env, enfant, badgesAvant, totalAvant, gain) {
  const bilan = await bilanBadges(env, enfant.id);
  const apres = badgesGagnes(bilan);
  const cycle = cycleDe(enfant.classe);
  const g0 = grade(totalAvant, cycle), g1 = grade(bilan.etoiles, cycle);
  return {
    gain,
    etoiles: bilan.etoiles,
    grade: g1,
    nouveauGrade: g1.niveau > g0.niveau ? g1.nom : null,
    nouveauxBadges: apres.filter((b) => !badgesAvant.includes(b)),
  };
}

// Reprise d'un ancien cahier (andre-ce2, simon-6eme) : le fichier de « Enregistrer une
// sauvegarde », { semaine, jour, historique:[{date, semaine, jour, mat, score, total}] }.
// Chaque séance devient une séance « reprise », avec ses étoiles ; la position est recopiée.
// Rejouer la même reprise ne crée pas de doublon.
async function reprise(env, session, enfant, rubriques, corps) {
  const rubrique = String(corps.rubrique || "");
  if (!rubriques.includes(rubrique)) return erreur(400, "Cette rubrique n'est pas ouverte pour cet enfant.");
  const s = corps.sauvegarde;
  if (!s || !Array.isArray(s.historique)) return erreur(400, "Ce fichier n'est pas une sauvegarde de cahier du soir.");
  const deja = await env.DB.prepare("SELECT 1 FROM seances WHERE enfant_id = ? AND rubrique = ? AND importe = 1 LIMIT 1").bind(enfant.id, rubrique).first();
  if (deja) return erreur(409, "Une reprise a déjà été faite pour cet enfant et cette rubrique.");
  const valides = s.historique.filter((h) => /^\d{4}-\d{2}-\d{2}$/.test(h?.date) && Number.isInteger(h.score) && Number.isInteger(h.total)
    && h.total > 0 && h.score >= 0 && h.score <= h.total).slice(0, 2000);
  const semaine = Math.min(36, Math.max(1, Number(s.semaine) || 1)), jour = Math.min(5, Math.max(0, Number(s.jour) || 0));
  const ordres = [];
  let etoiles = 0;
  for (const h of valides) {
    ordres.push(env.DB.prepare("INSERT INTO seances (enfant_id, rubrique, date, semaine, jour, matiere, score, total, importe) VALUES (?,?,?,?,?,?,?,?,1)")
      .bind(enfant.id, rubrique, h.date, Number(h.semaine) || 1, Number(h.jour) || 0, String(h.mat || "?").slice(0, 10), h.score, h.total));
    etoiles += etoilesSeance(h.score, h.total);
  }
  if (etoiles) ordres.push(env.DB.prepare("INSERT INTO etoiles (enfant_id, date, nombre, raison) VALUES (?,?,?,?)").bind(enfant.id, aujourdhui(), etoiles, "reprise"));
  ordres.push(env.DB.prepare(`INSERT INTO progression (enfant_id, rubrique, semaine, jour) VALUES (?,?,?,?)
                              ON CONFLICT(enfant_id, rubrique) DO UPDATE SET semaine = excluded.semaine, jour = excluded.jour`).bind(enfant.id, rubrique, semaine, jour));
  ordres.push(journal(env, session.signe, "reprise", enfant.identifiant, { rubrique, seances: valides.length, etoiles, semaine, jour }));
  await env.DB.batch(ordres);
  return json({ seances: valides.length, ignorees: s.historique.length - valides.length, etoiles, semaine, jour });
}
