// Contrôle qualité d'un programme (public/programmes/<code>.js), avant de le brancher sur le site :
//   node tests/verifier-programme.mjs cm1
// Tire chaque séance de chaque semaine 40 fois et vérifie que tout est bien formé.
// Rend la liste des problèmes trouvés ; « OK » si tout va bien.
import { egal } from "../public/js/seance.js";

const code = process.argv[2];
if (!code) { console.error("Usage : node tests/verifier-programme.mjs <code>"); process.exit(2); }
const problemes = [];
const pb = (m) => { if (problemes.length < 40 && !problemes.includes(m)) problemes.push(m); };

let p;
try { p = (await import(`../public/programmes/${code}.js`)).programme; }
catch (e) { console.error("Le module ne se charge pas :", e.message); process.exit(1); }
if (!p) { console.error("Pas d'export « programme »."); process.exit(1); }

for (const k of ["code", "nom", "rituel", "SEMAINES", "JOURS", "NOM_MAT", "PERIODES", "matiereDuJour", "seanceHorsLigne"]) if (!(k in p)) pb(`champ manquant : ${k}`);
if (p.code !== code) pb(`code « ${p.code} » au lieu de « ${code} »`);
if (!Array.isArray(p.SEMAINES) || p.SEMAINES.length !== 36) pb("il faut exactement 36 semaines");
if (!Array.isArray(p.JOURS) || p.JOURS.length !== 6) pb("il faut exactement 6 séances par semaine (JOURS)");
if (!Array.isArray(p.PERIODES) || p.PERIODES.length !== 5) pb("il faut 5 périodes");
if (!p.NOM_MAT?.rev) pb("NOM_MAT doit avoir « rev » (révision de la semaine)");
const matieres = Object.keys(p.NOM_MAT || {}).filter((m) => m !== "rev");

(p.SEMAINES || []).forEach((s, i) => {
  if (s.n !== i + 1) pb(`semaine ${i + 1} : n = ${s.n}`);
  if (!(s.p >= 1 && s.p <= 5)) pb(`semaine ${i + 1} : période ${s.p}`);
  for (const m of matieres) if (!s[m] || typeof s[m] !== "string") pb(`semaine ${i + 1} : pas de notion pour « ${m} »`);
});
for (let k = 1; k < (p.SEMAINES || []).length; k++) if (p.SEMAINES[k].p < p.SEMAINES[k - 1].p) pb("les périodes doivent aller croissant");

let n = 0;
const vus = {};
for (let tirage = 0; tirage < 40; tirage++) for (let s = 1; s <= 36; s++) for (let j = 0; j < 6; j++) {
  let mat, qs;
  try { mat = p.matiereDuJour(s, j); qs = p.seanceHorsLigne(mat, s); }
  catch (e) { pb(`semaine ${s}, séance ${j} : plantage — ${e.message}`); continue; }
  if (!p.NOM_MAT[mat]) pb(`semaine ${s}, séance ${j} : matière inconnue « ${mat} »`);
  if (!Array.isArray(qs) || qs.length < 4 || qs.length > 10) { pb(`semaine ${s}, séance ${j} : ${qs?.length} questions (4 à 10 attendues)`); continue; }
  for (const q of qs) {
    n++;
    const t = JSON.stringify(q);
    vus[q.enonce] = (vus[q.enonce] || 0) + 1;
    if (/\bundefined\b|\bNaN\b|Infinity|\[object|\bnull\b/.test(t)) pb(`valeur cassée : ${t.slice(0, 200)}`);
    if (!q.enonce || typeof q.enonce !== "string") pb(`énoncé vide : ${t.slice(0, 200)}`);
    if (!q.explication) pb(`pas d'explication : ${t.slice(0, 200)}`);
    if (q.type === "qcm") {
      if (!Array.isArray(q.choix) || q.choix.length < 2 || q.choix.length > 6) pb(`qcm : ${q.choix?.length} choix — ${t.slice(0, 200)}`);
      else {
        if (!(Number.isInteger(q.reponse) && q.reponse >= 0 && q.reponse < q.choix.length)) pb(`qcm : mauvais index de réponse — ${t.slice(0, 200)}`);
        if (new Set(q.choix.map(String)).size !== q.choix.length) pb(`qcm : choix en double — ${t.slice(0, 200)}`);
      }
    } else if (q.type === "saisie") {
      if (!Array.isArray(q.reponse) || !q.reponse.length || q.reponse.some((r) => typeof r !== "string" || !r.trim())) pb(`saisie : réponses mal formées — ${t.slice(0, 200)}`);
      else if (!egal(q.reponse[0], q.reponse[0])) pb(`saisie : réponse non reconnue par la correction — ${t.slice(0, 200)}`);
    } else pb(`type inconnu « ${q.type} »`);
  }
}
const differents = Object.keys(vus).length;
console.log(`${p.nom} : ${n} questions tirées, ${differents} énoncés différents.`);
if (differents < 300) pb(`trop peu de variété : ${differents} énoncés différents (300 au moins attendus)`);
if (problemes.length) { console.log("PROBLÈMES :\n- " + problemes.join("\n- ")); process.exit(1); }
console.log("OK");
