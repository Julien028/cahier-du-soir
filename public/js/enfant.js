// L'espace de l'enfant : la séance du soir, ses étoiles, son grade, ses badges.
// Tout est fait pour une séance courte qui se termine : une séance par soir et par rubrique,
// les erreurs à revoir, une mission sans écran, puis « c'est fini pour ce soir ».
import { api } from "./api.js";
import { $, esc, avatar, pluriel, confettis, annonce } from "./outils.js";
import { derouler } from "./seance.js";
import { THEMES, PALIERS, classe, nomRubrique } from "./regles.js";
import { onglets, qui, deconnecter } from "./app.js";
import { vuePeche } from "./peche.js";

const programmes = {};
async function programme(code) {
  if (code === "peche") return null; // la pêche n'est pas un programme de classe (voir peche.js)
  if (!(code in programmes)) programmes[code] = (await import(`/programmes/${code}.js`).catch(() => null))?.programme || null;
  return programmes[code];
}

export async function espaceEnfant(app, moi) {
  let T = null;          // le tableau de bord, rechargé après chaque gain
  let vue = "soir";

  const charger = async () => {
    T = await api(`enfants/${moi.id}`);
    for (const r of T.rubriques) await programme(r.code);
  };
  const entete = () => {
    qui.innerHTML = `${avatar(T.enfant.prenom, T.enfant.couleur)}<span><b>${esc(T.enfant.prenom)}</b>${T.enfant.classe ? " · " + esc(classe(T.enfant.classe)?.nom || "") : ""}</span>
      <button class="lien" id="sortir">Changer d'enfant</button>`;
    $("#sortir").onclick = deconnecter;
    onglets.innerHTML = [["soir", "Ce soir"], ...(T.enfant.rubriques.includes("peche") ? [["peche", "La pêche"]] : []), ["badges", "Mes badges"], ["programme", "Mon programme"]]
      .map(([v, nom]) => `<button class="onglet" role="tab" aria-selected="${v === vue}" data-vue="${v}">${nom}</button>`).join("");
    onglets.querySelectorAll(".onglet").forEach((b) => (b.onclick = async () => { vue = b.dataset.vue; await charger().catch(() => {}); afficher(); }));
  };
  const afficher = () => {
    entete();
    window.scrollTo(0, 0);
    if (vue === "badges") return vueBadges();
    if (vue === "programme") return vueProgramme();
    if (vue === "peche") return vuePeche(app, moi, feter);
    return vueSoir();
  };

  // --- Le bandeau : grade, étoiles, et ce qui manque pour monter.
  const bandeau = () => {
    const g = T.grade;
    return `<div class="carte">
      <div class="bandeau">${avatar(T.enfant.prenom, T.enfant.couleur, true)}
        <div style="flex:1">
          <div class="muet">Bonjour ${esc(T.enfant.prenom)}, tu es</div>
          <div class="grade">${g.icone || ""} ${esc(g.nom)}</div>
          <div class="jauge"><i style="width:${Math.round(g.avancee * 100)}%"></i></div>
          <div class="muet petit" style="margin-top:4px"><span class="etoiles">⭐ ${T.etoiles}</span>
            ${g.suivantNom ? ` · encore ${g.manque} ⭐ pour devenir <b>${esc(g.suivantNom)}</b>` : " · le plus haut grade !"}</div>
        </div></div></div>`;
  };

  // --- Ce soir.
  function vueSoir() {
    const nonLus = T.mots.filter((m) => !m.lu_le);
    const toutFait = T.rubriques.every((r) => r.code === "peche" || r.faiteAujourdhui || !programmes[r.code]);
    const finDuSoir = toutFait && T.erreurs.aRevoir === 0;
    const cartes = T.rubriques.map((r) => {
      const p = programmes[r.code];
      if (r.code === "peche") return `<div class="carte"><h2>🎣 La pêche</h2>
        <p class="notion">${T.peche.chapitres} chapitre${T.peche.chapitres > 1 ? "s" : ""} validé${T.peche.chapitres > 1 ? "s" : ""} sur 7 · ${T.peche.prises} prise${T.peche.prises > 1 ? "s" : ""} dans ton carnet.</p>
        <p class="muet">Quand tu veux, pas forcément ce soir. Chaque chapitre validé : +5 ⭐.</p>
        <button class="cta sec" id="ouvrir-peche">Ouvrir le carnet de pêche</button></div>`;
      if (!p) return `<div class="carte"><h2>${esc(nomRubrique(r.code))}</h2><p class="muet">Bientôt dans ton cahier.</p></div>`;
      if (r.faiteAujourdhui) return `<div class="carte vert"><h2>${esc(p.nom)}</h2>
        <p class="notion fait">✅ Séance du soir faite : ${r.faiteAujourdhui.score} sur ${r.faiteAujourdhui.total}.</p>
        <p class="muet">La prochaine t'attend demain.</p></div>`;
      const mat = p.matiereDuJour(r.semaine, r.jour), sem = p.SEMAINES[r.semaine - 1], j = p.JOURS[r.jour];
      const rev = mat === "rev";
      return `<div class="carte${rev ? " defi" : ""}">
        <div class="jour-ligne"><span class="pastille${rev ? " orange" : ""}">${esc(p.nom)} · semaine ${r.semaine} sur 36</span>
          <span>${esc(j.nom)} · ${j.min} minutes</span></div>
        <h2 style="margin-top:14px">${esc(p.NOM_MAT[mat] || "")}</h2>
        <p class="notion">${rev ? "Des questions qui reprennent tout ce que tu as travaillé cette semaine." : esc(sem[mat] || "")}</p>
        <p class="rituel">${esc(p.rituel || "")} Chaque bonne réponse : +1 ⭐, sans faute : +3 ⭐ en plus.</p>
        ${sem.lecon ? `<details class="bloc"><summary>📖 La leçon de la semaine</summary><div class="corps lecon">${sem.lecon}</div></details>` : ""}
        <button class="cta" data-seance="${esc(r.code)}">Commencer</button></div>`;
    }).join("");
    const r = T.recompense;
    app.innerHTML = `<div class="pile">
      ${bandeau()}
      ${nonLus.map((m) => `<div class="carte mot"><div class="muet">Un mot de ${esc(m.auteur)}</div>
        <p class="notion">${esc(m.texte)}</p></div>`).join("")}
      ${nonLus.length ? `<button class="cta sec" id="lu" style="margin-top:8px">Merci !</button>` : ""}
      ${finDuSoir ? `<div class="carte or" style="text-align:center"><div style="font-size:44px">🌙</div>
        <h2>C'est fini pour ce soir, bravo !</h2>
        <p class="notion">${T.mission.faite ? "Tu as tout fait. Tu peux fermer le cahier." : "Ferme le cahier et va faire ta mission sans écran."}</p></div>` : ""}
      ${cartes}
      ${T.erreurs.aRevoir ? `<div class="carte"><h2>🔍 Carnet des erreurs</h2>
        <p class="notion">${pluriel(T.erreurs.aRevoir, "question ratée revient", "questions ratées reviennent")} aujourd'hui. Chaque erreur corrigée : +2 ⭐.</p>
        <button class="cta sec" id="erreurs">Revoir mes erreurs</button></div>` : ""}
      <div class="carte${T.mission.faite ? " vert" : ""}"><h2>🌳 Mission sans écran</h2>
        <p class="notion">${esc(T.mission.texte)}</p>
        ${T.mission.faite ? `<p class="fait">✅ Mission faite. Bravo !</p>`
        : `<p class="muet">À faire après tes devoirs, loin de l'écran. Quand c'est fait : +2 ⭐.</p><button class="cta sec" id="mission">Je l'ai fait !</button>`}</div>
      ${r ? `<div class="carte or"><h2>🎁 ${esc(r.libelle)}</h2>
        <div class="jauge"><i style="width:${Math.min(100, Math.round(r.gagnees / r.objectif * 100))}%"></i></div>
        <p class="muet" style="margin-top:6px">${r.gagnees >= r.objectif ? "🎉 Objectif atteint ! Va le montrer à tes parents." : `${Math.min(r.gagnees, r.objectif)} ⭐ sur ${r.objectif}. Encore ${r.objectif - r.gagnees} ⭐ !`}</p></div>` : ""}
      <div class="stats">
        <div class="stat"><b>⭐ ${T.etoiles}</b><span>étoiles</span></div>
        <div class="stat"><b>🔥 ${T.serie}</b><span>${T.serie > 1 ? "soirs d'affilée" : "soir d'affilée"}</span></div>
        <div class="stat"><b>${T.seances}</b><span>séances faites</span></div>
        <div class="stat"><b>${T.badges.filter((b) => b.gagne).length}/${T.badges.length}</b><span>badges</span></div>
      </div></div>`;
    app.querySelectorAll("[data-seance]").forEach((b) => (b.onclick = () => seance(b.dataset.seance)));
    if ($("#erreurs")) $("#erreurs").onclick = revoirErreurs;
    if ($("#ouvrir-peche")) $("#ouvrir-peche").onclick = () => { vue = "peche"; afficher(); };
    if ($("#mission")) $("#mission").onclick = async () => {
      const g = await api(`enfants/${moi.id}/mission`, { methode: "POST", corps: {} }).catch((e) => alert(e.message));
      if (g) await feter(g);
      await charger(); afficher();
    };
    if ($("#lu")) $("#lu").onclick = async () => {
      await api(`enfants/${moi.id}/mots/lus`, { methode: "POST", corps: {} }).catch(() => {});
      await charger(); afficher();
    };
  }

  // --- La séance du soir.
  async function seance(code) {
    const r = T.rubriques.find((x) => x.code === code), p = programmes[code];
    const mat = p.matiereDuJour(r.semaine, r.jour);
    onglets.innerHTML = "";
    const res = await derouler(app, p.seanceHorsLigne(mat, r.semaine), { titre: p.NOM_MAT[mat], accord: !String(code).startsWith("maths-en") });
    app.innerHTML = `<div class="chargement"><p>J'enregistre…</p><span class="point"></span><span class="point"></span><span class="point"></span></div>`;
    let g;
    for (let essai = 0; essai < 3 && !g; essai++) {
      g = await api(`enfants/${moi.id}/seances`, { methode: "POST", corps: { rubrique: code, matiere: mat, score: res.score, total: res.total, erreurs: res.ratees } })
        .catch((e) => (e.statut === 409 || essai === 2 ? (alert(e.message), { erreur: true }) : null));
    }
    await charger();
    const sansFaute = res.score === res.total;
    if (sansFaute) confettis();
    app.innerHTML = `<div class="carte" style="text-align:center">
      <div style="font-size:52px">${sansFaute ? "🏆" : res.score >= res.total / 2 ? "👍" : "💪"}</div>
      <h2>${res.score} sur ${res.total}</h2>
      <p class="notion">${sansFaute ? "Sans faute ! Magnifique." : res.score >= res.total - 1 ? "Très bien joué." : res.score >= res.total / 2 ? "C'est correct. Les questions ratées reviendront dans ton carnet des erreurs." : "C'était difficile ce soir. Relis ta leçon : les questions ratées reviendront bientôt."}</p>
      ${g && !g.erreur ? `<p class="etoiles" style="font-size:24px;margin-top:10px">+${g.gain} ⭐</p>` : ""}
      <button class="cta" id="fin">Continuer</button></div>`;
    if (g && !g.erreur) await feter(g, true);
    $("#fin").onclick = () => { vue = "soir"; afficher(); };
  }

  // --- Le carnet des erreurs : les questions ratées il y a quelques jours.
  async function revoirErreurs() {
    const liste = await api(`enfants/${moi.id}/erreurs`);
    if (!liste.length) { await charger(); return afficher(); }
    onglets.innerHTML = "";
    const res = await derouler(app, liste.map((e) => ({ ...e.question, accord: !e.rubrique.startsWith("maths-en") })), { titre: "Carnet des erreurs" });
    let gain = 0, dernier = null;
    for (let k = 0; k < liste.length; k++) {
      const g = await api(`enfants/${moi.id}/erreurs/${liste[k].id}`, { methode: "POST", corps: { reussie: res.resultats[k] } }).catch(() => null);
      if (g?.gain) { gain += g.gain; dernier = g; }
    }
    await charger();
    if (res.score === res.total) confettis(50);
    app.innerHTML = `<div class="carte" style="text-align:center"><div style="font-size:52px">🔍</div>
      <h2>${res.score} sur ${res.total} corrigées</h2>
      <p class="notion">${res.score === res.total ? "Tout est corrigé, bravo !" : "Celles que tu as encore ratées reviendront dans quelques jours."}</p>
      ${gain ? `<p class="etoiles" style="font-size:24px">+${gain} ⭐</p>` : ""}
      <button class="cta" id="fin">Continuer</button></div>`;
    if (dernier) await feter({ ...dernier, gain }, true);
    $("#fin").onclick = () => { vue = "soir"; afficher(); };
  }

  // Les annonces après un gain : nouveau grade, puis chaque nouveau badge.
  async function feter(g) {
    if (g.nouveauGrade) { confettis(120); await annonce({ icone: g.nouveauGradeIcone || "🎖️", titre: `Tu deviens ${g.nouveauGrade} !`, texte: "Tu montes en grade. Continue comme ça !" }); }
    for (const code of g.nouveauxBadges || []) {
      const b = (T?.badges || []).find((x) => x.code === code);
      await annonce({ icone: b?.icone || "🏅", titre: `Nouveau badge : ${b?.nom || code}`, texte: b?.texte || "" });
    }
  }

  // --- Mes badges, mon univers et l'échelle des grades.
  function vueBadges() {
    const theme = THEMES[T.grade.theme];
    app.innerHTML = `<div class="pile">
      ${bandeau()}
      <div class="carte"><h2>Mon univers</h2>
        <p class="muet">Choisis ton univers : tes grades changent avec lui. Tes étoiles, elles, restent les mêmes.</p>
        <div class="tuiles">${Object.entries(THEMES).map(([code, t]) => `<button class="tuile${code === T.grade.theme ? " choisi" : ""}" data-theme="${code}">
          <span style="font-size:38px">${t.icone}</span>${esc(t.nom)}${code === T.grade.theme ? "<small>✓ mon univers</small>" : ""}</button>`).join("")}</div></div>
      <h2>Mes badges</h2>
      <div class="badges">${T.badges.map((b) => `<div class="badge${b.gagne ? "" : " non"}"><div class="ico">${b.icone}</div><b>${esc(b.nom)}</b><span>${esc(b.texte)}</span></div>`).join("")}</div>
      <h2>Les grades</h2>
      <div class="carte">${theme.grades.map(([n, ico], i) => `<div class="sem" style="display:flex;justify-content:space-between;${i + 1 === T.grade.niveau ? "font-weight:700;color:var(--marge)" : i + 1 > T.grade.niveau ? "opacity:.55" : ""}">
        <span>${i + 1 < T.grade.niveau ? "✅" : i + 1 === T.grade.niveau ? "👉" : "🔒"} ${ico} ${esc(n)}</span><span>${PALIERS[i]} ⭐</span></div>`).join("")}</div>
    </div>`;
    app.querySelectorAll("[data-theme]").forEach((b) => (b.onclick = async () => {
      if (b.dataset.theme === T.grade.theme) return;
      try { await api(`enfants/${moi.id}/theme`, { methode: "PUT", corps: { theme: b.dataset.theme } }); await charger(); vueBadges(); }
      catch (e) { alert(e.message); }
    }));
  }

  // --- Mon programme : l'année de chaque rubrique, la semaine en cours en évidence.
  function vueProgramme() {
    app.innerHTML = T.rubriques.map((r) => {
      const p = programmes[r.code];
      if (!p) return "";
      return `<h2>Programme de ${esc(p.nom)}</h2>` + p.PERIODES.map((titre, k) => `<div class="periode"><h3>${esc(titre)}</h3>` +
        p.SEMAINES.filter((s) => s.p === k + 1).map((s) => `<div class="sem"${s.n === r.semaine ? ' style="background:var(--or-clair);border-radius:8px;padding:12px 8px"' : ""}>
          <span class="sem-num">Semaine ${s.n}${s.n === r.semaine ? " — tu es ici 👈" : s.n < r.semaine ? " ✅" : ""}</span>
          <ul>${Object.keys(p.NOM_MAT).filter((m) => m !== "rev" && s[m]).map((m) => `<li><b>${esc(p.NOM_MAT[m])}</b> — ${esc(s[m])}</li>`).join("")}</ul></div>`).join("") + `</div>`).join("");
    }).join("") || `<p class="muet">Pas encore de programme.</p>`;
  }

  try { await charger(); afficher(); }
  catch (e) { app.innerHTML = `<div class="carte"><p class="notion">${esc(e.message)}</p><button class="cta" onclick="location.reload()">Réessayer</button></div>`; }
}

export { nomRubrique };
