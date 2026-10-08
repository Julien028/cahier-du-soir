// L'onglet « Rubriques » de l'administrateur : toutes les classes et la pêche, à parcourir
// et à essayer comme un enfant, sans rien enregistrer. Une rubrique ajoutée au site
// (RUBRIQUES_PRETES, RUBRIQUES_LIBRES dans regles.js) apparaît ici d'elle-même.
import { $, esc } from "./outils.js";
import { derouler } from "./seance.js";
import { CLASSES, RUBRIQUES_PRETES, RUBRIQUES_LIBRES } from "./regles.js";
import { vuePeche } from "./peche.js";

const programmes = {};
async function programme(code) {
  if (!(code in programmes)) programmes[code] = (await import(`/programmes/${code}.js`).catch(() => null))?.programme || null;
  return programmes[code];
}

export function vueRubriques(app) {
  window.scrollTo(0, 0);
  app.innerHTML = `<div class="pile">
    <div class="carte"><h2>Toutes les rubriques</h2>
      <p class="muet">Parcourez le programme de chaque classe, essayez n'importe quelle séance, lisez la pêche. C'est un aperçu : rien n'est enregistré, aucune étoile n'est donnée.</p></div>
    <h3>Les classes</h3>
    <div class="liste-enfants">${CLASSES.map((c) => RUBRIQUES_PRETES.includes(c.code)
      ? `<button class="enfant-ligne" data-r="${c.code}"><span class="grow"><b style="font-size:19px">${esc(c.nom)}</b><br><span class="petit muet">Programme de l'année · ${c.cycle === "college" ? "collège" : "primaire"}</span></span><span>›</span></button>`
      : `<div class="enfant-ligne" style="opacity:.5"><span class="grow"><b style="font-size:19px">${esc(c.nom)}</b><br><span class="petit muet">Pas encore prêt</span></span></div>`).join("")}</div>
    <h3>Les autres rubriques</h3>
    <div class="liste-enfants">${RUBRIQUES_LIBRES.map((r) => `<button class="enfant-ligne" data-l="${r.code}"><span class="grow"><b style="font-size:19px">${esc(r.nom)}</b><br><span class="petit muet">Leçons, quiz et carnet</span></span><span>›</span></button>`).join("")}</div>
  </div>`;
  app.querySelectorAll("[data-r]").forEach((b) => (b.onclick = () => vueClasse(app, b.dataset.r)));
  app.querySelectorAll("[data-l]").forEach((b) => (b.onclick = () => vueLibre(app, b.dataset.l)));
}

// Une rubrique hors classe : pour l'instant la pêche, en aperçu.
async function vueLibre(app, code) {
  if (code === "peche") await vuePeche(app, null, null, "apprendre", () => vueRubriques(app));
}

// Une classe : choisir une semaine et une séance, l'essayer ; voir tout le programme.
async function vueClasse(app, code, choix = { semaine: 1, jour: 0 }) {
  const p = await programme(code);
  window.scrollTo(0, 0);
  if (!p) { app.innerHTML = `<p class="muet">Programme introuvable.</p>`; return; }
  const sem = p.SEMAINES[choix.semaine - 1];
  const mat = p.matiereDuJour(choix.semaine, choix.jour);
  app.innerHTML = `<div class="pile">
    <button class="lien" id="retour">‹ Toutes les rubriques</button>
    <div class="carte"><h2>${esc(p.nom)} — essayer une séance</h2>
      <div class="reglage"><label class="titre">Semaine et séance</label>
        <select class="mini" id="sem">${p.SEMAINES.map((s) => `<option value="${s.n}"${s.n === choix.semaine ? " selected" : ""}>Semaine ${s.n}</option>`).join("")}</select>
        <select class="mini" id="jour">${p.JOURS.map((j, i) => `<option value="${i}"${i === choix.jour ? " selected" : ""}>${esc(j.nom)}</option>`).join("")}</select></div>
      <h3 style="margin-top:6px">${esc(p.NOM_MAT[mat] || "")}</h3>
      <p class="notion">${mat === "rev" ? "Révision de toute la semaine." : esc(sem[mat] || "")}</p>
      <p class="rituel">${esc(p.rituel || "")} ${p.JOURS[choix.jour].min} minutes.</p>
      <button class="cta" id="essayer">Essayer cette séance</button>
      <p class="muet petit">Les questions sont tirées au hasard à chaque essai, comme pour les enfants.</p></div>
    <h2>Le programme de l'année</h2>
    ${p.PERIODES.map((titre, k) => `<div class="periode"><h3>${esc(titre)}</h3>` + p.SEMAINES.filter((s) => s.p === k + 1).map((s) => `<div class="sem">
      <span class="sem-num">Semaine ${s.n}</span>
      <ul>${Object.keys(p.NOM_MAT).filter((m) => m !== "rev" && s[m]).map((m) => `<li><b>${esc(p.NOM_MAT[m])}</b> — ${esc(s[m])}</li>`).join("")}</ul></div>`).join("") + `</div>`).join("")}
  </div>`;
  $("#retour").onclick = () => vueRubriques(app);
  const lire = () => ({ semaine: Number($("#sem").value), jour: Number($("#jour").value) });
  $("#sem").onchange = () => vueClasse(app, code, lire());
  $("#jour").onchange = () => vueClasse(app, code, lire());
  $("#essayer").onclick = async () => {
    const res = await derouler(app, p.seanceHorsLigne(mat, choix.semaine), { titre: `Aperçu ${p.nom} · ${p.NOM_MAT[mat]}` });
    app.innerHTML = `<div class="carte" style="text-align:center"><h2>${res.score} sur ${res.total}</h2>
      <p class="muet">Aperçu : rien n'a été enregistré.</p>
      <button class="cta" id="encore">Une autre séance</button><button class="cta sec" id="fin">Retour à ${esc(p.nom)}</button></div>`;
    $("#encore").onclick = () => $("#essayer") || vueClasse(app, code, choix).then(() => $("#essayer").click());
    $("#fin").onclick = () => vueClasse(app, code, choix);
  };
}
