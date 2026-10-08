// La pêche, dans l'espace de l'enfant : apprendre (chapitres et quiz), les poissons,
// le grand quiz, le carnet des prises et le sac. Repris du carnet de pêche, avec un carnet
// par enfant et des étoiles pour chaque chapitre validé.
import { api } from "./api.js";
import { $, esc, dateFr, confettis } from "./outils.js";
import { derouler } from "./seance.js";

let P = null;
async function contenu() {
  if (!P) P = (await import("/programmes/peche.js")).peche;
  return P;
}
const melange = (t) => { const c = t.slice(); for (let i = c.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [c[i], c[j]] = [c[j], c[i]]; } return c; };
// Les questions du carnet ({q, b, f, e}) au format des séances.
const enQcm = (q) => { const choix = melange([q.b, ...q.f]); return { type: "qcm", enonce: esc(q.q), choix, reponse: choix.indexOf(q.b), explication: esc(q.e) }; };

// app : la zone d'affichage. feter : annonce des étoiles et badges gagnés (vient de enfant.js).
export async function vuePeche(app, moi, feter, sousVue = "apprendre") {
  const p = await contenu();
  const D = await api(`enfants/${moi.id}/peche`);
  const valide = (i) => D.chapitres.find((c) => c.chapitre === i)?.reussi;
  const meilleur = (i) => D.chapitres.find((c) => c.chapitre === i)?.meilleur;
  const nav = [["apprendre", "Apprendre"], ["poissons", "Les poissons"], ["prises", "Mes prises"], ["sac", "Le sac"]];
  const barre = `<div class="ligne" style="margin-bottom:14px">${nav.map(([v, n]) => `<button class="onglet" aria-selected="${v === sousVue}" data-p="${v}">${n}</button>`).join("")}</div>`;
  const aller = (v) => vuePeche(app, moi, feter, v);
  const brancher = () => app.querySelectorAll("[data-p]").forEach((b) => (b.onclick = () => aller(b.dataset.p)));
  window.scrollTo(0, 0);

  if (sousVue === "apprendre") {
    const faits = p.CHAPITRES.filter((_, i) => valide(i)).length;
    app.innerHTML = `${barre}<div class="carte"><h2>🎣 Apprendre à pêcher</h2>
      <p class="muet">${p.CHAPITRES.length} chapitres à lire quand tu veux. Chacun finit par un petit quiz : 4 bonnes réponses sur 5 et le chapitre est validé (+5 ⭐ la première fois).</p>
      <div class="stats"><div class="stat"><b>${faits}/${p.CHAPITRES.length}</b><span>chapitres validés</span></div>
        <div class="stat"><b>${D.prises.length}</b><span>prises notées</span></div></div>
      <button class="cta sec" id="grand">Le grand quiz — 10 questions</button></div>
      <div class="liste-chap">${p.CHAPITRES.map((c, i) => `<button class="chap" data-i="${i}">
        <span class="num${valide(i) ? " fini" : ""}">${valide(i) ? "✓" : i + 1}</span>
        <span><b>${c.titre}</b><small>${c.resume}${meilleur(i) !== undefined ? ` · meilleur quiz : ${meilleur(i)}/${c.quiz.length}` : ""}</small></span></button>`).join("")}</div>`;
    brancher();
    app.querySelectorAll(".chap").forEach((b) => (b.onclick = () => chapitre(Number(b.dataset.i))));
    $("#grand").onclick = () => quiz(melange(p.CHAPITRES.flatMap((c) => c.quiz)).slice(0, 10), null, "Le grand quiz");
    return;
  }

  if (sousVue === "poissons") {
    app.innerHTML = `${barre}<div class="carte"><h2>Les poissons de chez nous</h2>
      <p class="muet">Ce que tu as des chances de croiser dans les rivières et les étangs du coin.</p></div>
      ${p.POISSONS.map((x) => `<div class="carte"><div class="poisson">${p.poissonSVG(x.forme, x.couleur, x.ventre)}<div>
        <h3>${x.nom}</h3><p style="margin:6px 0">${x.texte}</p>
        <p class="muet petit"><b>Appâts :</b> ${x.appat} · <b>Taille courante :</b> ${x.taille}</p>
        <div class="astuce" style="margin-top:10px">${x.astuce}</div></div></div></div>`).join("")}`;
    return brancher();
  }

  if (sousVue === "prises") {
    const plusGros = D.prises.filter((x) => x.taille).sort((a, b) => b.taille - a.taille)[0];
    app.innerHTML = `${barre}<div class="carte"><h2>Mes prises</h2>
      <div class="stats"><div class="stat"><b>${D.prises.length}</b><span>poissons notés</span></div>
        <div class="stat"><b>${new Set(D.prises.map((x) => x.espece)).size}</b><span>espèces différentes</span></div>
        <div class="stat"><b>${plusGros ? plusGros.taille + " cm" : "—"}</b><span>le plus gros</span></div></div></div>
      <div class="carte"><h3>Noter une prise</h3>
        <label class="titre" for="esp">Le poisson</label>
        <select id="esp" class="champ">${p.POISSONS.map((x) => `<option>${x.nom}</option>`).join("")}<option>Autre</option></select>
        <div class="ligne2"><div><label class="titre" for="tai">Taille en cm</label><input id="tai" type="number" min="1" max="300" inputmode="numeric"></div>
          <div><label class="titre" for="dat">Date</label><input id="dat" type="date"></div></div>
        <label class="titre" for="lieu">Où ?</label><input id="lieu" type="text" class="champ" maxlength="80" placeholder="l'étang, la rivière…">
        <label class="titre" style="display:flex;gap:8px;align-items:center"><input type="checkbox" id="remis" checked style="width:auto"> Remis à l'eau</label>
        <button class="cta" id="ajouter">Ajouter au carnet</button><p class="erreur" id="err"></p></div>
      <div class="carte"><h3>Le carnet</h3>${D.prises.length ? D.prises.map((x) => `<div class="prise">
        <div><b>${esc(x.espece)}</b> ${x.taille ? x.taille + " cm" : ""}<br><span>${dateFr(x.date)}${x.lieu ? " · " + esc(x.lieu) : ""}${x.remis ? " · remis à l'eau" : ""}</span></div>
        <button class="lien" data-sup="${x.id}">effacer</button></div>`).join("") : `<p class="muet">Rien pour l'instant. La première prise arrive bientôt.</p>`}</div>`;
    brancher();
    $("#dat").value = new Date().toLocaleDateString("fr-CA");
    $("#ajouter").onclick = async () => {
      try {
        const g = await api(`enfants/${moi.id}/peche/prises`, { methode: "POST", corps: { espece: $("#esp").value, taille: $("#tai").value, date: $("#dat").value, lieu: $("#lieu").value, remis: $("#remis").checked } });
        await feter(g);
        aller("prises");
      } catch (e) { $("#err").textContent = e.message; }
    };
    app.querySelectorAll("[data-sup]").forEach((b) => (b.onclick = async () => {
      if (!confirm("Effacer cette prise du carnet ?")) return;
      await api(`enfants/${moi.id}/peche/prises/${b.dataset.sup}`, { methode: "DELETE", corps: {} }).catch((e) => alert(e.message));
      aller("prises");
    }));
    return;
  }

  // Le sac.
  app.innerHTML = `${barre}<div class="carte"><h2>Le sac est prêt ?</h2>
    <p class="muet">À cocher avant de partir. La liste se garde d'une fois sur l'autre : on la décoche au retour.</p>
    ${p.SAC.map((s, i) => `<label class="check${D.sac.includes(i) ? " ok" : ""}"><input type="checkbox" data-s="${i}"${D.sac.includes(i) ? " checked" : ""}><span>${s}</span></label>`).join("")}
    <button class="cta sec" id="vider">Tout décocher</button></div>
    <div class="carte"><h3>Avant la première sortie de l'année</h3>
    <p>On regarde ensemble l'arrêté de pêche du département : les dates, les tailles et les endroits autorisés changent chaque année.</p></div>`;
  brancher();
  const enregistrer = async (coches) => { await api(`enfants/${moi.id}/peche/sac`, { methode: "PUT", corps: { coches } }).catch((e) => alert(e.message)); aller("sac"); };
  app.querySelectorAll("[data-s]").forEach((c) => (c.onchange = () => enregistrer(c.checked ? [...D.sac, Number(c.dataset.s)] : D.sac.filter((x) => x !== Number(c.dataset.s)))));
  $("#vider").onclick = () => enregistrer([]);

  function chapitre(i) {
    const c = p.CHAPITRES[i];
    window.scrollTo(0, 0);
    app.innerHTML = `<button class="lien" id="retour">‹ Tous les chapitres</button>
      <div class="carte"><h2>${c.titre}</h2><div class="corps">
        ${c.figure ? `<figure>${p.DESSINS[c.figure]}<figcaption>${c.legende || ""}</figcaption></figure>` : ""}${c.corps}</div>
        <button class="cta" id="quiz">Faire le quiz du chapitre</button></div>`;
    $("#retour").onclick = () => aller("apprendre");
    $("#quiz").onclick = () => quiz(c.quiz, i, c.titre);
  }

  async function quiz(questions, i, titre) {
    const res = await derouler(app, questions.map(enQcm), { titre });
    let g = null;
    if (i !== null) g = await api(`enfants/${moi.id}/peche/quiz`, { methode: "POST", corps: { chapitre: i, score: res.score, total: res.total } }).catch(() => null);
    const reussi = res.score >= Math.ceil(res.total * 0.8);
    if (reussi) confettis(60);
    app.innerHTML = `<div class="carte" style="text-align:center"><div style="font-size:52px">${reussi ? "🐟" : "🎣"}</div>
      <h2>${res.score} sur ${res.total}</h2>
      <p class="notion">${i === null ? (reussi ? "Beau score au grand quiz." : "Pas mal. Retente quand tu veux.") : reussi ? "Chapitre validé. Tu peux passer au suivant." : "Presque. Relis le chapitre et retente, ça rentrera vite."}</p>
      ${g?.gain ? `<p class="etoiles" style="font-size:24px">+${g.gain} ⭐</p>` : ""}
      <button class="cta" id="fin">Revenir aux chapitres</button></div>`;
    if (g?.gain || g?.nouveauxBadges?.length) await feter(g);
    $("#fin").onclick = () => aller("apprendre");
  }
}
