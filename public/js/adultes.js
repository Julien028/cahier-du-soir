// L'espace des adultes. Un parent suit ses enfants ; l'administrateur suit tous les enfants
// et gère les comptes (création, codes, liens parents-enfants, reprise des anciens cahiers).
import { api } from "./api.js";
import { $, esc, avatar, dateFr, pluriel } from "./outils.js";
import { CLASSES, RUBRIQUES_PRETES, classe } from "./regles.js";
import { onglets, qui, deconnecter } from "./app.js";
import { nomRubrique } from "./enfant.js";

const programmes = {};
async function programme(code) {
  if (code === "peche") return null;
  if (!(code in programmes)) programmes[code] = (await import(`/programmes/${code}.js`).catch(() => null))?.programme || null;
  return programmes[code];
}

export function espaceAdulte(app, moi) {
  const admin = moi.role === "administrateur";
  let vue = "enfants";

  const entete = () => {
    qui.innerHTML = `${avatar(moi.prenom, moi.couleur)}<span><b>${esc(moi.prenom)}</b> · ${admin ? "administrateur" : "parent"}</span>
      <button class="lien" id="sortir">Se déconnecter</button>`;
    $("#sortir").onclick = deconnecter;
    const liste = [["enfants", admin ? "Les enfants" : "Mes enfants"], ...(admin ? [["comptes", "Comptes"]] : []), ["moi", "Mon compte"]];
    onglets.innerHTML = liste.map(([v, nom]) => `<button class="onglet" role="tab" aria-selected="${v === vue || (vue === "fiche" && v === "enfants")}" data-vue="${v}">${nom}</button>`).join("");
    onglets.querySelectorAll(".onglet").forEach((b) => (b.onclick = () => { vue = b.dataset.vue; afficher(); }));
  };
  const afficher = async (arg) => {
    entete();
    window.scrollTo(0, 0);
    app.innerHTML = `<div class="chargement"><span class="point"></span><span class="point"></span><span class="point"></span></div>`;
    try {
      if (vue === "comptes") return await vueComptes();
      if (vue === "moi") return vueMoi();
      if (vue === "fiche") return await vueFiche(arg);
      return await vueEnfants();
    } catch (e) {
      app.innerHTML = `<div class="carte"><p class="notion">${esc(e.message)}</p></div>`;
    }
  };

  // --- La liste des enfants, avec l'essentiel de ce soir.
  async function vueEnfants() {
    const m = await api("moi");
    if (!m.enfants.length) {
      app.innerHTML = `<div class="carte"><p class="notion">${admin ? "Aucun enfant pour l'instant. Créez-en un dans l'onglet Comptes." : "Aucun enfant n'est encore relié à votre compte. Demandez à l'administrateur."}</p></div>`;
      return;
    }
    const tableaux = await Promise.all(m.enfants.map((e) => api(`enfants/${e.id}`)));
    app.innerHTML = `<div class="liste-enfants">${tableaux.map((T) => {
      const classes = T.rubriques.filter((r) => r.code !== "peche");
      const faites = classes.filter((r) => r.faiteAujourdhui).length;
      return `<button class="enfant-ligne" data-id="${T.enfant.id}">${avatar(T.enfant.prenom, T.enfant.couleur, true)}
        <span class="grow"><b style="font-size:19px">${esc(T.enfant.prenom)}</b> <span class="muet">${esc(classe(T.enfant.classe)?.nom || "")}${T.enfant.age ? " · " + T.enfant.age + " ans" : ""}</span><br>
        <span class="petit">${esc(T.grade.nom)} · ⭐ ${T.etoiles} · 🔥 ${T.serie}</span><br>
        <span class="petit ${faites === classes.length ? "fait" : "muet"}">Ce soir : ${!classes.length ? "pas de séance du soir" : faites === classes.length ? "✅ séance faite" : faites ? `${faites} séance sur ${classes.length}` : "pas encore fait"}${T.mission.faite ? " · 🌳 mission faite" : ""}</span></span>
        <span aria-hidden="true">›</span></button>`;
    }).join("")}</div>`;
    app.querySelectorAll(".enfant-ligne").forEach((b) => (b.onclick = () => { vue = "fiche"; afficher(Number(b.dataset.id)); }));
  }

  // --- La fiche d'un enfant.
  async function vueFiche(id) {
    const T = await api(`enfants/${id}`);
    for (const r of T.rubriques) await programme(r.code);
    const nomMat = (rub, m) => programmes[rub]?.NOM_MAT[m] || m;
    const r = T.recompense;
    app.innerHTML = `<div class="pile">
      <button class="lien" id="retour">‹ Retour à la liste</button>
      <div class="carte"><div class="bandeau">${avatar(T.enfant.prenom, T.enfant.couleur, true)}<div>
        <h2>${esc(T.enfant.prenom)} ${esc(T.enfant.nom || "")}</h2>
        <div class="muet">${esc(classe(T.enfant.classe)?.nom || "")}${T.enfant.age ? " · " + T.enfant.age + " ans" : ""} · ${esc(T.grade.nom)}</div></div></div>
        <div class="stats">
          <div class="stat"><b>⭐ ${T.etoiles}</b><span>étoiles</span></div>
          <div class="stat"><b>🔥 ${T.serie}</b><span>soirs d'affilée (record ${T.meilleureSerie})</span></div>
          <div class="stat"><b>${T.seances}</b><span>séances (${T.sansFautes} sans faute)</span></div>
          <div class="stat"><b>${T.badges.filter((b) => b.gagne).length}/${T.badges.length}</b><span>badges</span></div>
        </div></div>

      <div class="carte"><h3>Ce soir</h3>
        ${T.rubriques.filter((x) => x.code !== "peche").map((x) => `<p class="${x.faiteAujourdhui ? "fait" : "muet"}">${esc(nomRubrique(x.code))} :
          ${x.faiteAujourdhui ? `✅ séance du soir faite (${x.faiteAujourdhui.score}/${x.faiteAujourdhui.total}). Prochaine :` : "séance du soir pas encore faite :"}
          semaine ${x.semaine}, ${esc(programmes[x.code]?.JOURS[x.jour]?.nom || "")}.</p>`).join("")}
        ${T.peche ? `<p class="muet">🎣 Pêche : ${T.peche.chapitres} chapitre(s) validé(s) sur 7, ${T.peche.prises} prise(s) dans le carnet.</p>` : ""}
        <p class="${T.mission.faite ? "fait" : "muet"}">🌳 Mission : ${esc(T.mission.texte)} ${T.mission.faite ? "— ✅ faite" : ""}</p>
        <p class="muet">🔍 Carnet des erreurs : ${pluriel(T.erreurs.aRevoir, "à revoir aujourd'hui", "à revoir aujourd'hui")}, ${T.erreurs.enAttente} en attente, ${T.erreurs.corrigees} corrigées.</p></div>

      <div class="carte"><h3>🎁 Récompense</h3>
        ${r ? `<p class="notion">${esc(r.libelle)}</p><div class="jauge"><i style="width:${Math.min(100, Math.round(r.gagnees / r.objectif * 100))}%"></i></div>
          <p class="muet">${Math.min(r.gagnees, r.objectif)} ⭐ sur ${r.objectif}${r.gagnees >= r.objectif ? " — 🎉 objectif atteint !" : ""} · fixée par ${esc(r.fixee_par)}</p>
          <button class="cta sec petit" id="donnee">La récompense a été donnée</button>`
        : `<p class="muet">Aucune récompense en cours. Fixez un objectif : ${esc(T.enfant.prenom)} verra sa jauge avancer chaque soir.</p>`}
        <details class="bloc"><summary>${r ? "Changer la récompense" : "Fixer une récompense"}</summary>
          <label class="titre" for="rl">La récompense</label><input type="text" id="rl" class="champ" placeholder="ex. une sortie au cinéma" maxlength="120">
          <label class="titre" for="ro">Nombre d'étoiles à gagner (à partir d'aujourd'hui)</label><input type="number" id="ro" min="5" max="5000" value="100">
          <p class="muet petit">Repère : une séance réussie rapporte 5 à 9 étoiles, soit environ 40 étoiles par semaine.</p>
          <button class="cta petit" id="fixer">Enregistrer</button></details></div>

      <div class="carte"><h3>💬 Un petit mot</h3>
        <p class="muet">${esc(T.enfant.prenom)} le lira en ouvrant son cahier.</p>
        <textarea id="mot" rows="2" maxlength="500" placeholder="ex. Bravo pour ta semaine, on est fiers de toi !"></textarea>
        <button class="cta petit" id="envoyer">Envoyer</button>
        ${T.mots.length ? `<ul class="petit muet">${T.mots.slice(0, 5).map((m) => `<li>${dateFr(m.cree_le)} — ${esc(m.auteur)} : « ${esc(m.texte)} » ${m.lu_le ? "✓ lu" : "(pas encore lu)"}</li>`).join("")}</ul>` : ""}</div>

      <div class="carte"><h3>Réussite par matière</h3>
        <table class="tableau"><tr><th>Matière</th><th>Séances</th><th>Réussite</th></tr>
        ${T.parMatiere.map((x) => `<tr><td>${esc(nomMat(x.rubrique, x.matiere))}${T.rubriques.length > 1 ? ` (${esc(nomRubrique(x.rubrique))})` : ""}</td><td>${x.n}</td><td>${x.reussite} %</td></tr>`).join("") || `<tr><td colspan="3">Aucune séance pour l'instant.</td></tr>`}</table>
        <h3 style="margin-top:20px">Dernières séances</h3>
        <table class="tableau"><tr><th>Date</th><th>Matière</th><th>Score</th></tr>
        ${T.dernieres.map((x) => `<tr><td>${dateFr(x.date)}${x.importe ? " *" : ""}</td><td>${esc(nomMat(x.rubrique, x.matiere))}</td><td>${x.score}/${x.total}</td></tr>`).join("") || `<tr><td colspan="3">—</td></tr>`}</table>
        ${T.dernieres.some((x) => x.importe) ? `<p class="muet petit">* reprise de l'ancien cahier</p>` : ""}</div>

      <div class="carte"><h3>Badges</h3><p class="petit">${T.badges.map((b) => `<span title="${esc(b.texte)}" style="${b.gagne ? "" : "opacity:.35"}">${b.icone} ${esc(b.nom)}</span>`).join(" · ")}</p></div>

      <div class="carte"><h3>Où en est-il dans le programme ?</h3>
        ${T.rubriques.filter((x) => programmes[x.code]).map((x) => `<div class="reglage"><label class="titre">${esc(nomRubrique(x.code))}</label>
          <select class="mini" data-sem="${esc(x.code)}">${Array.from({ length: 36 }, (_, i) => `<option value="${i + 1}"${i + 1 === x.semaine ? " selected" : ""}>Semaine ${i + 1}</option>`).join("")}</select>
          <select class="mini" data-jour="${esc(x.code)}">${programmes[x.code].JOURS.map((j, i) => `<option value="${i}"${i === x.jour ? " selected" : ""}>${esc(j.nom)}</option>`).join("")}</select>
          <button class="cta sec petit" data-pos="${esc(x.code)}">Enregistrer</button></div>`).join("")}
        <p class="muet petit">À ajuster si une semaine est à reprendre, ou pour avancer plus vite.</p></div>

      ${admin ? `<div class="carte"><h3>Reprendre un ancien cahier</h3>
        <p class="muet">Sur la tablette de l'enfant, dans l'ancien cahier : onglet <b>Suivi</b>, bouton <b>Enregistrer une sauvegarde</b>. Choisissez ici le fichier obtenu : ses séances, ses étoiles et l'endroit où il en est sont recopiés.</p>
        <select class="mini" id="rep-rub">${T.rubriques.filter((x) => programmes[x.code]).map((x) => `<option value="${esc(x.code)}">${esc(nomRubrique(x.code))}</option>`).join("")}</select>
        <input type="file" id="rep-fichier" accept="application/json,.json" style="margin-top:10px">
        <p class="erreur" id="rep-msg"></p></div>` : ""}
    </div>`;

    const recharger = () => afficher(id);
    const agir = async (chemin, corps, methode = "POST") => {
      try { await api(`enfants/${id}/${chemin}`, { methode, corps }); recharger(); } catch (e) { alert(e.message); }
    };
    $("#retour").onclick = () => { vue = "enfants"; afficher(); };
    if ($("#donnee")) $("#donnee").onclick = () => confirm("Marquer la récompense comme donnée ? La jauge repartira à zéro quand vous en fixerez une nouvelle.") && agir("recompense/donnee", {});
    $("#fixer").onclick = () => agir("recompense", { libelle: $("#rl").value, objectif: Number($("#ro").value) });
    $("#envoyer").onclick = () => agir("mots", { texte: $("#mot").value });
    app.querySelectorAll("[data-pos]").forEach((b) => (b.onclick = () => {
      const c = b.dataset.pos;
      agir("progression", { rubrique: c, semaine: Number(app.querySelector(`[data-sem="${c}"]`).value), jour: Number(app.querySelector(`[data-jour="${c}"]`).value) }, "PATCH");
    }));
    if ($("#rep-fichier")) $("#rep-fichier").onchange = async (e) => {
      const f = e.target.files[0];
      if (!f) return;
      try {
        const sauvegarde = JSON.parse(await f.text());
        const res = await api(`enfants/${id}/reprise`, { methode: "POST", corps: { rubrique: $("#rep-rub").value, sauvegarde } });
        alert(`Reprise faite : ${res.seances} séances, ${res.etoiles} étoiles, il en est à la semaine ${res.semaine}.`);
        recharger();
      } catch (x) { $("#rep-msg").textContent = x instanceof SyntaxError ? "Ce fichier n'est pas lisible." : x.message; }
    };
  }

  // --- Les comptes (administrateur).
  async function vueComptes() {
    const comptes = await api("comptes");
    const enfants = comptes.filter((c) => c.role === "enfant"), parents = comptes.filter((c) => c.role === "parent");
    const nomDe = (id) => comptes.find((c) => c.id === id)?.prenom || "?";
    const casesRubriques = (choisies = []) => `<div class="cases">${RUBRIQUES_PRETES.map((r) => `<label><input type="checkbox" name="rub" value="${r}"${choisies.includes(r) ? " checked" : ""}> ${esc(nomRubrique(r))}</label>`).join("")}
      <label><input type="checkbox" name="rub" value="peche"${choisies.includes("peche") ? " checked" : ""}> La pêche</label></div>`;
    const choixClasse = (sel) => `<select class="mini" name="classe">${CLASSES.map((c) => `<option value="${c.code}"${c.code === sel ? " selected" : ""}>${c.nom}</option>`).join("")}</select>`;
    const cases = (liste, nom, choisis = []) => liste.length ? `<div class="cases">${liste.map((c) => `<label><input type="checkbox" name="${nom}" value="${c.id}"${choisis.includes(c.id) ? " checked" : ""}> ${esc(c.prenom)} ${esc(c.nom)}</label>`).join("")}</div>` : `<p class="muet petit">Aucun pour l'instant.</p>`;
    const coches = (form, nom) => [...form.querySelectorAll(`input[name="${nom}"]:checked`)].map((x) => (nom === "rub" ? x.value : Number(x.value)));

    app.innerHTML = `<div class="pile">
      <div id="secret"></div>
      <details class="bloc carte"><summary>➕ Nouvel enfant</summary><form id="f-enfant">
        <label class="titre">Prénom</label><input type="text" class="champ" name="prenom" required maxlength="40">
        <label class="titre">Nom (facultatif)</label><input type="text" class="champ" name="nom" maxlength="60">
        <label class="titre">Année de naissance (pour son âge)</label><input type="number" name="annee" min="2005" max="2030" placeholder="ex. 2015">
        <label class="titre">Classe</label>${choixClasse("ce2")}
        <label class="titre">Rubriques ouvertes</label>${casesRubriques()}
        <p class="muet petit">Seules les classes déjà prêtes sont proposées. Cochez aussi la classe suivante pour lui permettre d'avancer.</p>
        <label class="titre">Parents qui le suivent</label>${cases(parents, "par")}
        <button class="cta" type="submit">Créer l'enfant</button></form></details>
      <details class="bloc carte"><summary>➕ Nouveau parent</summary><form id="f-parent">
        <label class="titre">Prénom</label><input type="text" class="champ" name="prenom" required maxlength="40">
        <label class="titre">Nom</label><input type="text" class="champ" name="nom" maxlength="60">
        <label class="titre">Identifiant (facultatif, sinon tiré du prénom)</label><input type="text" class="champ" name="identifiant" autocapitalize="off" spellcheck="false" placeholder="ex. claire.pichot">
        <label class="titre">Enfants qu'il ou elle suit</label>${cases(enfants, "enf")}
        <button class="cta" type="submit">Créer le parent</button></form></details>
      <h2>Tous les comptes</h2>
      ${comptes.map((c) => `<details class="bloc carte"${c.actif ? "" : ' style="opacity:.6"'}><summary>${avatar(c.prenom, c.couleur)} ${esc(c.prenom)} ${esc(c.nom)}
          <span class="muet petit">— ${c.role}${c.classe ? " · " + esc(classe(c.classe)?.nom || c.classe) : ""} · identifiant <b>${esc(c.identifiant)}</b>${c.actif ? "" : " · désactivé"}</span></summary>
        <p class="muet petit">Créé le ${dateFr(c.cree_le)}${c.derniere_connexion ? " · dernière connexion le " + dateFr(c.derniere_connexion) : " · jamais connecté"}
          ${c.role === "enfant" ? ` · rubriques : ${c.rubriques.map(nomRubrique).join(", ") || "aucune"} · parents : ${c.parents.map(nomDe).join(", ") || "aucun"}` : ""}
          ${c.role === "parent" ? ` · enfants : ${c.enfants.map(nomDe).join(", ") || "aucun"}` : ""}</p>
        ${c.role === "administrateur" ? "" : `<form data-modif="${c.id}">
          <label class="titre">Prénom</label><input type="text" class="champ" name="prenom" value="${esc(c.prenom)}" maxlength="40">
          <label class="titre">Nom</label><input type="text" class="champ" name="nom" value="${esc(c.nom)}" maxlength="60">
          ${c.role === "enfant" ? `<label class="titre">Année de naissance</label><input type="number" name="annee" value="${c.annee_naissance || ""}" min="2005" max="2030">
            <label class="titre">Classe</label>${choixClasse(c.classe)}<label class="titre">Rubriques</label>${casesRubriques(c.rubriques)}
            <label class="titre">Parents</label>${cases(parents, "par", c.parents)}`
          : `<label class="titre">Enfants suivis</label>${cases(enfants, "enf", c.enfants)}`}
          <button class="cta petit" type="submit">Enregistrer</button></form>
          <div class="ligne"><button class="cta sec petit" data-secret="${c.id}">${c.role === "enfant" ? "Nouveau code" : "Nouveau mot de passe"}</button>
          <button class="cta sec petit" data-actif="${c.id}" data-val="${c.actif ? 0 : 1}">${c.actif ? "Désactiver" : "Réactiver"}</button></div>`}
      </details>`).join("")}
    </div>`;

    const montrerSecret = (prenom, identifiant, r) => {
      $("#secret").innerHTML = `<div class="secret">${r.code
        ? `<p>Le code de <b>${esc(prenom)}</b> (identifiant <b>${esc(identifiant)}</b>) :</p><div class="code-montre">${esc(r.code)}</div>`
        : `<p>Le mot de passe provisoire de <b>${esc(prenom)}</b> (identifiant <b>${esc(identifiant)}</b>) :</p><div class="code-montre" style="font-size:22px;letter-spacing:1px">${esc(r.mot_de_passe_provisoire)}</div>
           <p class="petit">Il pourra le changer dans « Mon compte ».</p>`}
        <p class="petit">Notez-le maintenant : il ne sera plus affiché. En cas d'oubli, on en refait un.</p></div>`;
      window.scrollTo(0, 0);
    };
    const lire = (f) => Object.fromEntries(new FormData(f));
    $("#f-enfant").onsubmit = async (e) => {
      e.preventDefault();
      const v = lire(e.target);
      try {
        const r = await api("comptes", { methode: "POST", corps: { role: "enfant", prenom: v.prenom, nom: v.nom, annee_naissance: v.annee || null, classe: v.classe, rubriques: coches(e.target, "rub"), parents: coches(e.target, "par") } });
        await vueComptes(); montrerSecret(r.prenom, r.identifiant, r);
      } catch (x) { alert(x.message); }
    };
    $("#f-parent").onsubmit = async (e) => {
      e.preventDefault();
      const v = lire(e.target);
      try {
        const r = await api("comptes", { methode: "POST", corps: { role: "parent", prenom: v.prenom, nom: v.nom, identifiant: v.identifiant, enfants: coches(e.target, "enf") } });
        await vueComptes(); montrerSecret(r.prenom, r.identifiant, r);
      } catch (x) { alert(x.message); }
    };
    app.querySelectorAll("[data-modif]").forEach((f) => (f.onsubmit = async (e) => {
      e.preventDefault();
      const c = comptes.find((x) => x.id === Number(f.dataset.modif)), v = lire(f);
      const corps = c.role === "enfant"
        ? { prenom: v.prenom, nom: v.nom, annee_naissance: v.annee || null, classe: v.classe, rubriques: coches(f, "rub"), parents: coches(f, "par") }
        : { prenom: v.prenom, nom: v.nom, enfants: coches(f, "enf") };
      try { await api(`comptes/${c.id}`, { methode: "PATCH", corps }); await vueComptes(); } catch (x) { alert(x.message); }
    }));
    app.querySelectorAll("[data-secret]").forEach((b) => (b.onclick = async () => {
      const c = comptes.find((x) => x.id === Number(b.dataset.secret));
      if (!confirm(`Faire un nouveau ${c.role === "enfant" ? "code" : "mot de passe"} pour ${c.prenom} ? L'ancien ne marchera plus.`)) return;
      try { const r = await api(`comptes/${c.id}`, { methode: "PATCH", corps: { nouveau_secret: true } }); await vueComptes(); montrerSecret(c.prenom, c.identifiant, r); } catch (x) { alert(x.message); }
    }));
    app.querySelectorAll("[data-actif]").forEach((b) => (b.onclick = async () => {
      try { await api(`comptes/${b.dataset.actif}`, { methode: "PATCH", corps: { actif: b.dataset.val === "1" } }); await vueComptes(); } catch (x) { alert(x.message); }
    }));
  }

  // --- Mon compte : changer son mot de passe.
  function vueMoi() {
    app.innerHTML = `<div class="carte"><h2>Mon compte</h2>
      <p class="muet">Identifiant : <b>${esc(moi.identifiant)}</b></p>
      <label class="titre" for="a">Mot de passe actuel</label><input type="password" id="a" autocomplete="current-password">
      <label class="titre" for="n">Nouveau mot de passe (10 caractères au moins)</label><input type="password" id="n" autocomplete="new-password">
      <button class="cta" id="ok">Changer le mot de passe</button><p class="erreur" id="err"></p></div>`;
    $("#ok").onclick = async () => {
      try { await api("moi", { methode: "PATCH", corps: { mot_de_passe_actuel: $("#a").value, mot_de_passe: $("#n").value } }); $("#err").textContent = "C'est fait."; $("#err").style.color = "var(--juste)"; }
      catch (e) { $("#err").textContent = e.message; }
    };
  }

  afficher();
}
