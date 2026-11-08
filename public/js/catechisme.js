// Le catéchisme, dans l'espace de l'enfant : les étapes (chapitres et quiz), « Mes prières »
// (les lire, puis retrouver les mots manquants), et l'année liturgique (le temps où l'on est,
// les fêtes qui arrivent). À son rythme, sans séance du soir ; chaque chapitre validé ou
// chaque prière sue rapporte des étoiles la première fois.
import { api } from "./api.js";
import { $, esc, dateFr, confettis } from "./outils.js";
import { derouler } from "./seance.js";
import { TEMPS, tempsDe, fetesAVenir } from "./liturgie.js";

let C = null;
async function contenu() {
  if (!C) C = (await import("/programmes/catechisme.js")).catechisme;
  return C;
}
const melange = (t) => { const c = t.slice(); for (let i = c.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [c[i], c[j]] = [c[j], c[i]]; } return c; };
const enQcm = (q) => { const choix = melange([q.b, ...q.f]); return { type: "qcm", enonce: esc(q.q), choix, reponse: choix.indexOf(q.b), explication: esc(q.e) }; };
const aujourdhui = () => new Date().toLocaleDateString("fr-CA");

// Apprendre une prière par cœur : une ligne de la prière avec un mot caché, à retrouver parmi
// d'autres mots de la prière. Cinq questions, sur des lignes différentes si possible.
export function quizPriere(p) {
  const lignes = p.texte.split("\n").map((l) => l.trim()).filter((l) => l.split(/\s+/).length >= 3);
  const mots = [...new Set(p.texte.toLowerCase().replace(/[.,;:!?«»"]/g, " ").split(/\s+/).filter((m) => m.length >= 4))];
  const questions = [];
  for (const ligne of melange(lignes)) {
    const candidats = ligne.split(/\s+/).map((m, i) => ({ m: m.replace(/[.,;:!?]+$/, ""), i })).filter((x) => x.m.length >= 4);
    if (!candidats.length) continue;
    const { m, i } = candidats[Math.floor(Math.random() * candidats.length)];
    const trou = ligne.split(/\s+/).map((w, k) => (k === i ? w.replace(m, "_____") : w)).join(" ");
    const faux = melange(mots.filter((x) => x !== m.toLowerCase())).slice(0, 3);
    if (faux.length < 2) continue;
    questions.push({ type: "qcm", enonce: `Complète : « ${esc(trou)} »`, choix: melange([m, ...faux]).map(String), reponse: 0, explication: `« ${esc(ligne)} »`, _bonne: m });
    if (questions.length === 5) break;
  }
  return questions.map((q) => ({ ...q, reponse: q.choix.indexOf(q._bonne) }));
}

// app : zone d'affichage ; moi = null pour l'aperçu de l'administrateur (rien n'est enregistré) ;
// feter : annonces d'étoiles et de badges ; classe : la classe de l'enfant (pour son étape).
export async function vueCatechisme(app, moi, feter, { sousVue = "etapes", retour = null, classe = null, etape = null } = {}) {
  const K = await contenu();
  const apercu = !moi;
  const faits = apercu ? [] : await api(`enfants/${moi.id}/parcours/catechisme`);
  const valide = (cle) => faits.find((x) => x.cle === cle)?.reussi;
  const meilleur = (cle) => faits.find((x) => x.cle === cle)?.meilleur;
  const sienne = K.ETAPES.find((e) => e.classes?.includes(classe));
  const aller = (v, plus = {}) => vueCatechisme(app, moi, feter, { sousVue: v, retour, classe, ...plus });
  const temps = tempsDe(aujourdhui()), T = TEMPS[temps];
  const nav = [["etapes", "Les étapes"], ["prieres", "Mes prières"], ["annee", "L'année liturgique"]];
  const barre = (retour ? `<button class="lien" id="retour-rub">‹ Toutes les rubriques</button>` : "")
    + (apercu ? `<p class="muet petit">👀 Aperçu administrateur : tout se lit et se joue, rien n'est enregistré.</p>` : "")
    + `<div class="ligne" style="margin-bottom:14px">${nav.map(([v, n]) => `<button class="onglet" aria-selected="${v === sousVue}" data-c="${v}">${n}</button>`).join("")}</div>`;
  const brancher = () => {
    app.querySelectorAll("[data-c]").forEach((b) => (b.onclick = () => aller(b.dataset.c)));
    if (retour && $("#retour-rub")) $("#retour-rub").onclick = retour;
  };
  const bandeauTemps = `<div class="carte" style="border-color:${T.teinte};box-shadow:0 2px 0 ${T.teinte}">
    <div class="muet petit">En ce moment · couleur ${T.couleur}</div><h2 style="color:${T.teinte}">${T.nom}</h2><p class="notion">${T.texte}</p></div>`;
  window.scrollTo(0, 0);

  // --- Une étape : ses chapitres.
  if (sousVue === "etape") {
    const e = K.ETAPES.find((x) => x.code === etape);
    const n = e.chapitres.filter((c) => valide(c.cle)).length;
    app.innerHTML = `${barre}<button class="lien" id="etapes">‹ Toutes les étapes</button>
      <div class="carte"><h2>${esc(e.nom)}</h2><div class="muet">${esc(e.pour)} · ${n}/${e.chapitres.length} chapitres validés</div>${e.intro || ""}</div>
      <div class="liste-chap">${e.chapitres.map((c, i) => `<button class="chap" data-ch="${i}">
        <span class="num${valide(c.cle) ? " fini" : ""}">${valide(c.cle) ? "✓" : i + 1}</span>
        <span><b>${esc(c.titre)}</b>${c.temps === temps && temps !== "ordinaire" ? ` <span class="pastille" style="background:${T.teinte};font-size:12px">de saison</span>` : ""}
        <small>${esc(c.resume)}${meilleur(c.cle) !== undefined ? ` · meilleur quiz : ${meilleur(c.cle)}/${c.quiz.length}` : ""}</small></span></button>`).join("")}</div>`;
    brancher();
    $("#etapes").onclick = () => aller("etapes");
    app.querySelectorAll("[data-ch]").forEach((b) => (b.onclick = () => chapitre(e, e.chapitres[Number(b.dataset.ch)])));
    return;
  }

  // --- Les étapes, avec celle de l'enfant en premier et les chapitres de saison.
  if (sousVue === "etapes") {
    const saison = K.ETAPES.flatMap((e) => e.chapitres.filter((c) => c.temps === temps).map((c) => ({ e, c })))
      .sort((x, y) => (y.e === sienne) - (x.e === sienne)).slice(0, 4);
    app.innerHTML = `${barre}${bandeauTemps}
      ${temps !== "ordinaire" && saison.length ? `<div class="carte"><h3>Pour ce temps-ci</h3>${saison.map(({ e, c }) => `<button class="chap" data-saison="${esc(c.cle)}" style="margin-top:10px">
        <span class="num${valide(c.cle) ? " fini" : ""}">${valide(c.cle) ? "✓" : "✝"}</span><span><b>${esc(c.titre)}</b><small>${esc(e.nom)}</small></span></button>`).join("")}</div>` : ""}
      <div class="liste-chap">${[...K.ETAPES].sort((a, b) => (b === sienne) - (a === sienne)).map((e) => {
        const n = e.chapitres.filter((c) => valide(c.cle)).length;
        return `<button class="chap" data-etape="${e.code}"><span class="num${n === e.chapitres.length ? " fini" : ""}">${K.ETAPES.indexOf(e) + 1}</span>
          <span><b>${esc(e.nom)}</b>${e === sienne ? ` <span class="pastille orange" style="font-size:12px">ton étape</span>` : ""}<small>${esc(e.pour)} · ${n}/${e.chapitres.length} chapitres</small></span></button>`;
      }).join("")}</div>`;
    brancher();
    app.querySelectorAll("[data-etape]").forEach((b) => (b.onclick = () => aller("etape", { etape: b.dataset.etape })));
    app.querySelectorAll("[data-saison]").forEach((b) => (b.onclick = () => {
      const e = K.ETAPES.find((x) => x.chapitres.some((c) => c.cle === b.dataset.saison));
      chapitre(e, e.chapitres.find((c) => c.cle === b.dataset.saison));
    }));
    return;
  }

  // --- Mes prières.
  if (sousVue === "prieres") {
    const ordre = [...K.PRIERES].sort((a, b) => (b.etape === sienne?.code) - (a.etape === sienne?.code));
    app.innerHTML = `${barre}<div class="carte"><h2>🙏 Mes prières</h2>
      <p class="muet">Lis une prière, puis entraîne-toi à la dire par cœur en retrouvant les mots qui manquent. Une prière sue : +5 ⭐ la première fois.</p>
      <div class="stats"><div class="stat"><b>${K.PRIERES.filter((p) => valide("priere:" + p.cle)).length}/${K.PRIERES.length}</b><span>prières sues</span></div></div></div>
      <div class="liste-chap">${ordre.map((p) => `<button class="chap" data-pr="${esc(p.cle)}"><span class="num${valide("priere:" + p.cle) ? " fini" : ""}">${valide("priere:" + p.cle) ? "✓" : "🙏"}</span>
        <span><b>${esc(p.titre)}</b><small>${esc(p.quand || "")}</small></span></button>`).join("")}</div>`;
    brancher();
    app.querySelectorAll("[data-pr]").forEach((b) => (b.onclick = () => priere(K.PRIERES.find((p) => p.cle === b.dataset.pr))));
    return;
  }

  // --- L'année liturgique.
  const fetes = fetesAVenir(K.FETES || [], aujourdhui(), 8);
  app.innerHTML = `${barre}${bandeauTemps}
    <div class="carte"><h3>Les fêtes qui arrivent</h3>${fetes.map((f) => `<div class="sem" style="display:flex;justify-content:space-between;gap:10px">
      <span><b>${esc(f.nom)}</b><br><span class="muet petit">${esc(f.texte || "")}</span></span>
      <span class="muet" style="white-space:nowrap">${f.dans === 0 ? "aujourd'hui" : f.dans === 1 ? "demain" : dateFr(f.jour)}</span></div>`).join("") || `<p class="muet">—</p>`}</div>
    <div class="carte"><h3>Les couleurs de l'année</h3>${Object.values(TEMPS).map((t) => `<p><b style="color:${t.teinte}">● ${esc(t.nom)}</b> — ${esc(t.couleur)}. <span class="muet">${esc(t.texte)}</span></p>`).join("")}
      <p class="muet petit">Le rouge sert aussi pour la Pentecôte, le Vendredi saint et les fêtes des martyrs.</p></div>`;
  brancher();

  function chapitre(e, c) {
    window.scrollTo(0, 0);
    app.innerHTML = `<button class="lien" id="retour-ch">‹ ${esc(e.nom)}</button>
      <div class="carte"><h2>${esc(c.titre)}</h2><div class="corps">${c.corps}</div>
      <button class="cta" id="quiz">Faire le quiz du chapitre</button></div>`;
    $("#retour-ch").onclick = () => aller("etape", { etape: e.code });
    $("#quiz").onclick = () => quiz(c.quiz.map(enQcm), c.cle, c.titre, () => aller("etape", { etape: e.code }));
  }

  function priere(p) {
    window.scrollTo(0, 0);
    app.innerHTML = `<button class="lien" id="retour-pr">‹ Mes prières</button>
      <div class="carte"><h2>${esc(p.titre)}</h2><p class="muet">${esc(p.quand || "")}</p>
      <blockquote class="priere">${esc(p.texte).replace(/\n/g, "<br>")}</blockquote>
      <button class="cta" id="apprendre">Je m'entraîne à la dire par cœur</button></div>`;
    $("#retour-pr").onclick = () => aller("prieres");
    $("#apprendre").onclick = () => quiz(quizPriere(p), "priere:" + p.cle, p.titre, () => aller("prieres"));
  }

  async function quiz(questions, cle, titre, ensuite) {
    if (!questions.length) return ensuite();
    const res = await derouler(app, questions, { titre, accord: false });
    let g = null;
    if (!apercu) g = await api(`enfants/${moi.id}/parcours/catechisme`, { methode: "POST", corps: { cle, score: res.score, total: res.total } }).catch(() => null);
    const reussi = res.score >= Math.ceil(res.total * 0.8);
    if (reussi) confettis(50);
    app.innerHTML = `<div class="carte" style="text-align:center"><div style="font-size:52px">${reussi ? "🕊️" : "📖"}</div>
      <h2>${res.score} sur ${res.total}</h2>
      <p class="notion">${reussi ? (cle.startsWith("priere:") ? "Tu la sais par cœur, bravo !" : "Chapitre validé. Bravo !") : "Presque ! Relis et réessaie, ça viendra vite."}</p>
      ${g?.gain ? `<p class="etoiles" style="font-size:24px">+${g.gain} ⭐</p>` : ""}
      <button class="cta" id="fin">Continuer</button></div>`;
    if (feter && (g?.gain || g?.nouveauxBadges?.length)) await feter(g);
    $("#fin").onclick = ensuite;
  }
}
