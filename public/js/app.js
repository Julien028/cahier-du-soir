// Point d'entrée : qui est connecté ? Sinon, l'écran de connexion.
import { api, enfantsDeLaTablette, retenirEnfant, oublierEnfant } from "./api.js";
import { $, esc, avatar } from "./outils.js";

const app = $("#app");
export const onglets = $("#onglets");
export const qui = $("#qui");

export async function deconnecter() {
  await api("deconnexion", { methode: "POST", corps: {} }).catch(() => {});
  location.reload();
}

async function demarrer() {
  let moi;
  try {
    moi = await api("moi");
  } catch (e) {
    if (e.statut === 401) return ecranConnexion();
    app.innerHTML = `<div class="carte"><p class="notion">${esc(e.message)}</p><button class="cta" onclick="location.reload()">Réessayer</button></div>`;
    return;
  }
  if (moi.role === "enfant") {
    retenirEnfant(moi);
    (await import("./enfant.js")).espaceEnfant(app, moi);
  } else {
    (await import("./adultes.js")).espaceAdulte(app, moi);
  }
}

// --- Connexion. Les enfants déjà venus sur cette tablette : leur prénom en grand, puis
// le code. Les autres tapent leur prénom. Les adultes passent par « Espace parents ».
function ecranConnexion() {
  onglets.innerHTML = "";
  qui.innerHTML = `<p>Qui fait ses devoirs ce soir ?</p>`;
  const connus = enfantsDeLaTablette();
  app.innerHTML = `
    <div class="pile">
      ${connus.length ? `<div class="tuiles">${connus.map((e, i) => `
        <button class="tuile" data-i="${i}">${avatar(e.prenom, e.couleur, true)}${esc(e.prenom)}</button>`).join("")}</div>` : ""}
      <div class="carte">
        <h2>${connus.length ? "Un autre enfant ?" : "Bonjour !"}</h2>
        <label class="titre" for="prenom">Ton prénom</label>
        <input type="text" id="prenom" class="champ" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="ex. simon">
        <button class="cta" id="suite">Continuer</button>
      </div>
      <p style="text-align:center"><button class="lien" id="parents">Espace parents</button></p>
    </div>`;
  app.querySelectorAll(".tuile").forEach((b) => (b.onclick = () => ecranCode(connus[Number(b.dataset.i)])));
  const suite = () => {
    const v = $("#prenom").value.trim();
    if (v) ecranCode({ identifiant: v.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/\s+/g, "-"), prenom: v.charAt(0).toUpperCase() + v.slice(1) });
  };
  $("#suite").onclick = suite;
  $("#prenom").addEventListener("keydown", (e) => { if (e.key === "Enter") suite(); });
  $("#parents").onclick = ecranAdulte;
}

function ecranCode(enfant) {
  let code = "";
  app.innerHTML = `
    <div class="carte" style="text-align:center">
      ${avatar(enfant.prenom, enfant.couleur, true)}
      <h2 style="margin-top:10px">Bonjour ${esc(enfant.prenom)} !</h2>
      <p class="muet">Tape ton code secret</p>
      <div class="points-code">${"<i></i>".repeat(4)}</div>
      <div class="pave">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => `<button data-n="${n}">${n}</button>`).join("")}
        <button data-n="efface" aria-label="Effacer">⌫</button><button data-n="0">0</button><span></span></div>
      <p class="erreur" id="err"></p>
      <button class="lien" id="retour">Ce n'est pas moi</button>
    </div>`;
  const points = [...app.querySelectorAll(".points-code i")];
  const montrer = () => points.forEach((p, i) => p.classList.toggle("plein", i < code.length));
  const envoyer = async () => {
    try {
      const r = await api("connexion", { methode: "POST", corps: { identifiant: enfant.identifiant, mot_de_passe: code } });
      if (r.role !== "enfant") { await api("deconnexion", { methode: "POST", corps: {} }); throw new Error("Ce compte n'est pas un compte d'enfant."); }
      retenirEnfant(r);
      location.reload();
    } catch (e) {
      $("#err").textContent = e.message;
      code = ""; montrer();
    }
  };
  const touche = (n) => {
    if (n === "efface") code = code.slice(0, -1);
    else if (code.length < 4) code += n;
    montrer();
    if (code.length === 4) envoyer();
  };
  app.querySelectorAll(".pave button").forEach((b) => (b.onclick = () => touche(b.dataset.n)));
  const clavier = (e) => {
    if (!document.body.contains(points[0])) return document.removeEventListener("keydown", clavier);
    if (/^\d$/.test(e.key)) touche(e.key);
    if (e.key === "Backspace") touche("efface");
  };
  document.addEventListener("keydown", clavier);
  $("#retour").onclick = () => { oublierEnfant(enfant.identifiant); ecranConnexion(); };
}

function ecranAdulte() {
  qui.innerHTML = `<p>Espace parents</p>`;
  app.innerHTML = `
    <div class="carte">
      <h2>Espace parents</h2>
      <label class="titre" for="ident">Identifiant</label>
      <input type="text" id="ident" class="champ" autocomplete="username" autocapitalize="off" spellcheck="false">
      <label class="titre" for="mdp">Mot de passe</label>
      <input type="password" id="mdp" autocomplete="current-password">
      <button class="cta" id="go">Se connecter</button>
      <p class="erreur" id="err"></p>
      <button class="lien" id="retour">Retour</button>
    </div>`;
  const go = async () => {
    try {
      await api("connexion", { methode: "POST", corps: { identifiant: $("#ident").value, mot_de_passe: $("#mdp").value } });
      location.reload();
    } catch (e) { $("#err").textContent = e.message; }
  };
  $("#go").onclick = go;
  $("#mdp").addEventListener("keydown", (e) => { if (e.key === "Enter") go(); });
  $("#retour").onclick = ecranConnexion;
}

demarrer();
