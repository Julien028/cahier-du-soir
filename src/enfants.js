// Ce qu'on sait d'un enfant : qui peut le voir, et son tableau de bord.
import {
  grade, serie, meilleureSerie, BADGES, badgesGagnes, missionDuJour, cycleDe, PALIERS,
} from "../public/js/regles.js";

// Qui peut voir un enfant : l'administrateur, ses parents, et lui-même.
export async function peutVoir(env, session, enfantId) {
  if (!Number.isInteger(enfantId)) return null;
  const enfant = await env.DB.prepare(
    "SELECT id, identifiant, prenom, nom, annee_naissance, classe, rubriques, couleur, actif FROM comptes WHERE id = ? AND role = 'enfant'"
  ).bind(enfantId).first();
  if (!enfant) return null;
  if (session.role === "administrateur") return enfant;
  if (session.role === "enfant") return session.id === enfantId ? enfant : null;
  const lien = await env.DB.prepare("SELECT 1 FROM liens_parents WHERE parent_id = ? AND enfant_id = ?")
    .bind(session.id, enfantId).first();
  return lien ? enfant : null;
}

export const totalEtoiles = async (env, enfantId) =>
  (await env.DB.prepare("SELECT COALESCE(SUM(nombre),0) AS n FROM etoiles WHERE enfant_id = ?").bind(enfantId).first()).n;

// Le bilan qui sert aux badges (voir BADGES dans regles.js).
export async function bilanBadges(env, enfantId) {
  const [s, e, m, et, sc, pr] = await Promise.all([
    env.DB.prepare("SELECT date, score, total FROM seances WHERE enfant_id = ?").bind(enfantId).all(),
    env.DB.prepare("SELECT COUNT(*) AS n FROM erreurs WHERE enfant_id = ? AND corrigee = 1").bind(enfantId).first(),
    env.DB.prepare("SELECT COUNT(*) AS n FROM missions WHERE enfant_id = ?").bind(enfantId).first(),
    totalEtoiles(env, enfantId),
    env.DB.prepare(
      "SELECT COUNT(*) AS n FROM (SELECT rubrique, semaine FROM seances WHERE enfant_id = ? GROUP BY rubrique, semaine HAVING COUNT(*) >= 6)"
    ).bind(enfantId).first(),
    env.DB.prepare("SELECT COALESCE(MAX(semaine),1) AS n FROM progression WHERE enfant_id = ?").bind(enfantId).first(),
  ]);
  const seances = s.results;
  return {
    seances: seances.length,
    sansFautes: seances.filter((x) => x.total > 0 && x.score === x.total).length,
    meilleureSerie: meilleureSerie(seances.map((x) => x.date)),
    erreursCorrigees: e.n,
    missions: m.n,
    etoiles: et,
    semainesCompletes: sc.n,
    semaineMax: pr.n,
    dates: seances.map((x) => x.date),
  };
}

// Le tableau de bord complet d'un enfant, pour lui comme pour ses parents.
export async function tableau(env, enfant, aujourdhui) {
  const id = enfant.id;
  const rubriques = JSON.parse(enfant.rubriques || "[]");
  const cycle = cycleDe(enfant.classe);
  const [prog, faitesAujourdhui, bilan, dues, attente, mission, recompense, mots, dernieres, parMatiere] = await Promise.all([
    env.DB.prepare("SELECT rubrique, semaine, jour FROM progression WHERE enfant_id = ?").bind(id).all(),
    env.DB.prepare("SELECT rubrique, score, total FROM seances WHERE enfant_id = ? AND date = ? AND importe = 0").bind(id, aujourdhui).all(),
    bilanBadges(env, id),
    env.DB.prepare("SELECT COUNT(*) AS n FROM erreurs WHERE enfant_id = ? AND corrigee = 0 AND revoir_le <= ?").bind(id, aujourdhui).first(),
    env.DB.prepare("SELECT COUNT(*) AS n FROM erreurs WHERE enfant_id = ? AND corrigee = 0").bind(id).first(),
    env.DB.prepare("SELECT texte FROM missions WHERE enfant_id = ? AND date = ?").bind(id, aujourdhui).first(),
    env.DB.prepare("SELECT id, libelle, objectif, depart, fixee_par, fixee_le FROM recompenses WHERE enfant_id = ? AND donnee_le IS NULL ORDER BY id DESC LIMIT 1").bind(id).first(),
    env.DB.prepare("SELECT id, auteur, texte, cree_le, lu_le FROM mots WHERE enfant_id = ? ORDER BY id DESC LIMIT 10").bind(id).all(),
    env.DB.prepare("SELECT date, rubrique, matiere, score, total, importe FROM seances WHERE enfant_id = ? ORDER BY date DESC, id DESC LIMIT 12").bind(id).all(),
    env.DB.prepare("SELECT rubrique, matiere, COUNT(*) AS n, AVG(CAST(score AS REAL) / total) AS reussite FROM seances WHERE enfant_id = ? AND total > 0 GROUP BY rubrique, matiere").bind(id).all(),
  ]);
  const etoiles = bilan.etoiles;
  const gagnes = badgesGagnes(bilan);
  return {
    enfant: {
      id, prenom: enfant.prenom, nom: enfant.nom, classe: enfant.classe, couleur: enfant.couleur,
      age: enfant.annee_naissance ? Number(aujourdhui.slice(0, 4)) - enfant.annee_naissance : null,
      annee_naissance: enfant.annee_naissance, rubriques, cycle,
    },
    aujourdhui,
    rubriques: rubriques.map((r) => {
      const p = prog.results.find((x) => x.rubrique === r) || { semaine: 1, jour: 0 };
      const faite = faitesAujourdhui.results.find((x) => x.rubrique === r) || null;
      return { code: r, semaine: p.semaine, jour: p.jour, faiteAujourdhui: faite };
    }),
    etoiles,
    grade: grade(etoiles, cycle),
    paliers: PALIERS,
    serie: serie(bilan.dates, aujourdhui),
    meilleureSerie: bilan.meilleureSerie,
    seances: bilan.seances,
    sansFautes: bilan.sansFautes,
    badges: BADGES.map((b) => ({ code: b.code, nom: b.nom, texte: b.texte, icone: b.icone, gagne: gagnes.includes(b.code) })),
    erreurs: { aRevoir: dues.n, enAttente: attente.n, corrigees: bilan.erreursCorrigees },
    mission: { texte: missionDuJour(aujourdhui, cycle, id), faite: !!mission },
    missions: bilan.missions,
    recompense: recompense ? { ...recompense, gagnees: Math.max(0, etoiles - recompense.depart) } : null,
    mots: mots.results,
    dernieres: dernieres.results,
    parMatiere: parMatiere.results.map((x) => ({ ...x, reussite: Math.round(x.reussite * 100) })),
  };
}
