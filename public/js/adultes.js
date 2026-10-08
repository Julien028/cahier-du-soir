// L'espace des adultes. Un parent suit ses enfants ; l'administrateur suit tous les enfants
// et gère les comptes (création, codes, liens parents-enfants, reprise des anciens cahiers).
import { api } from "./api.js";
import { $, esc, avatar, dateFr, pluriel } from "./outils.js";
import { CLASSES, RUBRIQUES_PRETES, rubriquesASeances, classe } from "./regles.js";
import { onglets, qui, deconnecter } from "./app.js";
import { nomRubrique } from "./enfant.js";
import { vueRubriques } from "./rubriques.js";

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
    // Ordre voulu par Julien : Mon compte, Comptes, Familles, Les enfants, Rubriques.
    const liste = admin
      ? [["moi", "Mon compte"], ["comptes", "Comptes"], ["familles", "Familles"], ["enfants", "Les enfants"], ["rubriques", "Rubriques"]]
      : [["moi", "Mon compte"], ["famille", "Ma famille"], ["enfants", "Mes enfants"]];
    onglets.innerHTML = liste.map(([v, nom]) => `<button class="onglet" role="tab" aria-selected="${v === vue || (vue === "fiche" && v === "enfants") || (admin && vue === "famille" && v === "familles")}" data-vue="${v}">${nom}</button>`).join("");
    onglets.querySelectorAll(".onglet").forEach((b) => (b.onclick = () => { vue = b.dataset.vue; afficher(); }));
  };
  const afficher = async (arg) => {
    entete();
    window.scrollTo(0, 0);
    app.innerHTML = `<div class="chargement"><span class="point"></span><span class="point"></span><span class="point"></span></div>`;
    try {
      if (vue === "comptes") return await vueComptes();
      if (vue === "familles") return await vueFamilles();
      if (vue === "rubriques" && admin) return vueRubriques(app);
      if (vue === "famille") return await vueFamille(arg);
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
      app.innerHTML = `<div class="carte"><p class="notion">${admin ? "Aucun enfant pour l'instant. Créez-en un dans l'onglet Comptes." : "Aucun enfant pour l'instant. Ajoutez vos enfants dans l'onglet « Ma famille »."}</p></div>`;
      return;
    }
    const tableaux = await Promise.all(m.enfants.map((e) => api(`enfants/${e.id}`)));
    app.innerHTML = `<div class="liste-enfants">${tableaux.map((T) => {
      const classes = T.rubriques.filter((r) => r.code !== "peche");
      const faites = classes.filter((r) => r.faiteAujourdhui).length;
      return `<button class="enfant-ligne" data-id="${T.enfant.id}">${avatar(T.enfant.prenom, T.enfant.couleur, true)}
        <span class="grow"><b style="font-size:19px">${esc(T.enfant.prenom)}</b> <span class="muet">${esc(classe(T.enfant.classe)?.nom || "")}${T.enfant.age ? " · " + T.enfant.age + " ans" : ""}</span><br>
        <span class="petit">${T.grade.icone || ""} ${esc(T.grade.nom)} · ⭐ ${T.etoiles} · 🔥 ${T.serie}</span><br>
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
        <div class="muet">${esc(classe(T.enfant.classe)?.nom || "")}${T.enfant.age ? " · " + T.enfant.age + " ans" : ""} · ${T.grade.icone || ""} ${esc(T.grade.nom)}</div></div></div>
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
    const casesRubriques = (choisies = []) => `<div class="cases">${rubriquesASeances().map((r) => `<label><input type="checkbox" name="rub" value="${r}"${choisies.includes(r) ? " checked" : ""}> ${esc(nomRubrique(r))}</label>`).join("")}
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

  // --- Les familles (administrateur) : la liste, et les invitations pour une nouvelle famille.
  async function vueFamilles() {
    const [familles, invitations] = await Promise.all([api("familles"), api("invitations")]);
    app.innerHTML = `<div class="pile">
      <div class="carte"><h2>Inviter une nouvelle famille</h2>
        <p class="muet">Le parent crée lui-même son espace avec ce code (lien « Espace parents », puis « J'ai un code d'invitation »). Le code sert une fois et dure 30 jours.</p>
        <label class="titre" for="nf">Nom de la famille (facultatif, le parent pourra le choisir)</label>
        <input type="text" id="nf" class="champ" maxlength="60" placeholder="ex. Famille Martin">
        <button class="cta" id="inviter">Créer un code d'invitation</button><div id="code-inv"></div></div>
      ${invitations.length ? `<div class="carte"><h3>Codes pas encore utilisés</h3>${invitations.map((i) => `<p class="petit"><b>${esc(i.code)}</b> — ${i.famille ? "rejoindre " + esc(i.famille) : "nouvelle famille" + (i.nom_famille ? " « " + esc(i.nom_famille) + " »" : "")} · par ${esc(i.cree_par)} · jusqu'au ${dateFr(i.expire_le)}</p>`).join("")}</div>` : ""}
      <h2>Les familles</h2>
      ${familles.length ? familles.map((f) => `<button class="enfant-ligne" data-f="${f.id}"><span class="grow"><b>${esc(f.nom)}</b> <span class="muet petit">n° ${f.id}</span><br>
        <span class="petit muet">Parents : ${f.parents.map((p) => esc(p.prenom)).join(", ") || "aucun"} · Enfants : ${f.enfants.map((e) => esc(e.prenom)).join(", ") || "aucun"}</span></span><span>›</span></button>`).join("")
        : `<p class="muet">Aucune famille pour l'instant.</p>`}
    </div>`;
    $("#inviter").onclick = async () => {
      try {
        const r = await api("invitations", { methode: "POST", corps: { nom_famille: $("#nf").value } });
        $("#code-inv").innerHTML = `<div class="secret"><p>Code d'invitation à donner à la famille :</p><div class="code-montre" style="font-size:28px;letter-spacing:3px">${esc(r.code)}</div>
          <p class="petit">Valable ${r.jours} jours, pour une seule inscription.</p></div>`;
      } catch (e) { alert(e.message); }
    };
    app.querySelectorAll("[data-f]").forEach((b) => (b.onclick = () => { vue = "famille"; afficher(Number(b.dataset.f)); }));
  }

  // --- Une famille : ses parents, ses enfants, et leur gestion. Pour un parent, la sienne ;
  // pour l'administrateur, celle qu'il a ouverte (fid).
  async function vueFamille(fid) {
    const q = admin ? `?famille=${fid}` : "";
    const F = await api("famille" + q);
    const choixClasse = (sel) => `<select class="mini" name="classe">${CLASSES.map((c) => `<option value="${c.code}"${c.code === sel ? " selected" : ""}>${c.nom}${RUBRIQUES_PRETES.includes(c.code) ? "" : " (programme pas encore prêt)"}</option>`).join("")}</select>`;
    const cases = (choisies = []) => `<div class="cases">${rubriquesASeances().map((r) => `<label><input type="checkbox" name="rub" value="${r}"${choisies.includes(r) ? " checked" : ""}> ${esc(nomRubrique(r))}</label>`).join("")}
      <label><input type="checkbox" name="rub" value="peche"${choisies.includes("peche") ? " checked" : ""}> La pêche</label></div>`;
    const formEnfant = (e = {}) => `
      <label class="titre">Prénom</label><input type="text" class="champ" name="prenom" required maxlength="40" value="${esc(e.prenom || "")}">
      <label class="titre">Année de naissance (pour son âge)</label><input type="number" name="annee" min="2005" max="2030" value="${e.annee_naissance || ""}" placeholder="ex. 2016">
      <label class="titre">Classe</label>${choixClasse(e.classe || "ce2")}
      <label class="titre">Ce qu'il ou elle travaille</label>${cases(e.rubriques || [])}
      <p class="muet petit">Cochez sa classe (et la suivante s'il est à l'aise), « Maths in English » pour faire des maths en anglais, et la pêche s'il le souhaite.</p>`;
    const lire = (f) => { const v = Object.fromEntries(new FormData(f)); return { prenom: v.prenom, annee_naissance: v.annee || null, classe: v.classe, rubriques: [...f.querySelectorAll('input[name="rub"]:checked')].map((x) => x.value) }; };
    const montrerCode = (prenom, identifiant, code) => {
      $("#secret").innerHTML = `<div class="secret"><p>Pour se connecter, <b>${esc(prenom)}</b> touche son prénom (ou tape <b>${esc(identifiant)}</b>), puis son code secret :</p>
        <div class="code-montre">${esc(code)}</div><p class="petit">Notez-le : il ne sera plus affiché. En cas d'oubli, faites-en un nouveau ici.</p></div>`;
      window.scrollTo(0, 0);
    };

    app.innerHTML = `<div class="pile">
      ${admin ? `<button class="lien" id="retour">‹ Toutes les familles</button>` : ""}
      <div id="secret"></div>
      <div class="carte"><h2>${esc(F.famille.nom)}</h2>${admin ? `<p class="muet petit">Famille n° ${F.famille.id}</p>` : ""}
        <p class="muet">Parents : ${F.parents.map((p) => `${esc(p.prenom)} ${esc(p.nom)} (${esc(p.identifiant)})`).join(", ") || "aucun"}</p>
        <details class="bloc"><summary>Changer le nom de la famille</summary>
          <input type="text" id="nomf" class="champ" maxlength="60" value="${esc(F.famille.nom)}"><button class="cta petit" id="renommer">Enregistrer</button></details>
        <details class="bloc"><summary>Inviter l'autre parent</summary>
          <p class="muet petit">Il ou elle crée son propre accès avec ce code, et suit les mêmes enfants.</p>
          <button class="cta sec petit" id="inviter">Créer un code d'invitation</button><div id="code-inv"></div>
          ${F.invitations.length ? `<p class="muet petit">Codes en attente : ${F.invitations.map((i) => esc(i.code)).join(", ")}</p>` : ""}</details></div>

      <h2>Les enfants</h2>
      ${F.enfants.map((e) => `<details class="bloc carte"${e.actif ? "" : ' style="opacity:.6"'}><summary>${avatar(e.prenom, e.couleur)} ${esc(e.prenom)}
          <span class="muet petit">— ${esc(classe(e.classe)?.nom || "")} · ${e.rubriques.map(nomRubrique).join(", ") || "rien de coché"} · identifiant <b>${esc(e.identifiant)}</b>${e.actif ? "" : " · en pause"}</span></summary>
        <p class="muet petit">${e.derniere_connexion ? "Dernière connexion le " + dateFr(e.derniere_connexion) : "Jamais connecté"}</p>
        <form data-modif="${e.id}">${formEnfant(e)}<button class="cta petit" type="submit">Enregistrer</button></form>
        <div class="reglage"><label class="titre">Code secret</label>
          <div class="ligne"><input type="text" inputmode="numeric" maxlength="4" class="champ" style="max-width:120px" placeholder="4 chiffres" data-code-champ="${e.id}">
          <button class="cta sec petit" data-code="${e.id}" style="width:auto;margin:0">Mettre ce code</button>
          <button class="cta sec petit" data-hasard="${e.id}" style="width:auto;margin:0">Code au hasard</button></div></div>
        <div class="ligne" style="margin-top:12px"><button class="cta sec petit" data-actif="${e.id}" data-val="${e.actif ? 0 : 1}" style="width:auto">${e.actif ? "Mettre en pause" : "Réactiver"}</button>
          <button class="cta sec petit" data-sup="${e.id}" style="width:auto;color:var(--marge);border-color:var(--marge)">Supprimer</button></div>
      </details>`).join("") || `<p class="muet">Pas encore d'enfant.</p>`}

      <details class="bloc carte" ${F.enfants.length ? "" : "open"}><summary>➕ Ajouter un enfant</summary><form id="ajout">
        ${formEnfant()}
        <label class="titre">Code secret (4 chiffres, facultatif : sinon il est tiré au hasard)</label>
        <input type="text" inputmode="numeric" maxlength="4" class="champ" name="code" placeholder="ex. 2580">
        <button class="cta" type="submit">Ajouter l'enfant</button></form></details>
    </div>`;

    const base = (chemin = "") => "famille" + chemin + q;
    const recharger = () => vueFamille(fid);
    if ($("#retour")) $("#retour").onclick = () => { vue = "familles"; afficher(); };
    $("#renommer").onclick = async () => { try { await api(base(), { methode: "PATCH", corps: { nom: $("#nomf").value } }); recharger(); } catch (e) { alert(e.message); } };
    $("#inviter").onclick = async () => {
      try {
        const r = await api("invitations", { methode: "POST", corps: admin ? { famille_id: fid } : {} });
        $("#code-inv").innerHTML = `<div class="secret"><p>Code à donner à l'autre parent :</p><div class="code-montre" style="font-size:28px;letter-spacing:3px">${esc(r.code)}</div>
          <p class="petit">Sur le site : « Espace parents », puis « J'ai un code d'invitation ». Valable ${r.jours} jours.</p></div>`;
      } catch (e) { alert(e.message); }
    };
    $("#ajout").onsubmit = async (ev) => {
      ev.preventDefault();
      const code = new FormData(ev.target).get("code");
      try { const r = await api(base("/enfants"), { methode: "POST", corps: { ...lire(ev.target), ...(code ? { code } : {}) } }); await recharger(); montrerCode(r.prenom, r.identifiant, r.code); }
      catch (e) { alert(e.message); }
    };
    app.querySelectorAll("[data-modif]").forEach((f) => (f.onsubmit = async (ev) => {
      ev.preventDefault();
      try { await api(base("/enfants/" + f.dataset.modif), { methode: "PATCH", corps: lire(f) }); recharger(); } catch (e) { alert(e.message); }
    }));
    const changerCode = async (id, corps) => {
      const e = F.enfants.find((x) => x.id === Number(id));
      try { const r = await api(base("/enfants/" + id), { methode: "PATCH", corps }); await recharger(); montrerCode(e.prenom, e.identifiant, r.code); } catch (x) { alert(x.message); }
    };
    app.querySelectorAll("[data-code]").forEach((b) => (b.onclick = () => changerCode(b.dataset.code, { code: app.querySelector(`[data-code-champ="${b.dataset.code}"]`).value.trim() })));
    app.querySelectorAll("[data-hasard]").forEach((b) => (b.onclick = () => changerCode(b.dataset.hasard, { nouveau_code: true })));
    app.querySelectorAll("[data-actif]").forEach((b) => (b.onclick = async () => {
      try { await api(base("/enfants/" + b.dataset.actif), { methode: "PATCH", corps: { actif: b.dataset.val === "1" } }); recharger(); } catch (e) { alert(e.message); }
    }));
    app.querySelectorAll("[data-sup]").forEach((b) => (b.onclick = async () => {
      const e = F.enfants.find((x) => x.id === Number(b.dataset.sup));
      if (!confirm(`Supprimer ${e.prenom} ? Toutes ses séances, ses étoiles et son carnet de pêche seront effacés, sans retour possible.`)) return;
      if (prompt(`Pour confirmer, tapez le prénom : ${e.prenom}`)?.trim().toLowerCase() !== e.prenom.toLowerCase()) return alert("Suppression annulée.");
      try { await api(base("/enfants/" + e.id), { methode: "DELETE", corps: {} }); recharger(); } catch (x) { alert(x.message); }
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
