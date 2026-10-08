// Le déroulé d'une série de questions : une à la fois, la correction tout de suite,
// puis le résultat. Repris des anciens cahiers, avec des réponses chiffrées plus tolérantes.
import { esc } from "./outils.js";

function normalise(x) {
  return String(x).toLowerCase().replace(/[’`]/g, "'").trim().replace(/\s+/g, " ").replace(",", ".")
    .replace(/[.!?]$/, "").trim().replace(/^(l'|le |la |les |un |une |des |du )/, "");
}
// 2,5 = 2.5 = 2,50 ; « 12 € » = 12 ; « 1 000 » = 1000.
function enNombre(x) {
  // Le signe moins s'écrit « - », « − » ou « – » ; on accepte aussi les unités courantes.
  const s = String(x).replace(/\s/g, "").replace(/^[−–]/, "-").replace(",", ".")
    .replace(/(€|cm²|m²|cm³|dm³|m³|km\/h|m\/s|km|cm|mm|kg|cl|ml|°c|°|%|min|ohms?|Ω|ma|kw|w|v|a|s|h|m|g|l)$/i, "");
  return /^-?\d+(\.\d+)?$/.test(s) ? Number(s) : null;
}
export function egal(a, b) {
  const na = enNombre(a), nb = enNombre(b);
  if (na !== null && nb !== null) return Math.abs(na - nb) < 1e-9;
  return normalise(a) === normalise(b);
}

// « 1 billes » -> « 1 bille » : les questions tirées au hasard peuvent tomber sur 1. Pour les
// textes en français seulement (en anglais, « 1 times 5 » doit rester tel quel).
const SINGULIERS = /^(fois|souris|bras|pas|gros|repas|tapis|radis|ours|corps|temps|mois|jus|dos|prix|poids|bus|autobus|cours|choix|pays|bois|puits|héros|avis|os|tas|lilas|matelas|frais|fils|lis|plus|moins|ananas|cassis|dessus|dessous|virus|cactus|vis|anglais|français|gaz|mars|jamais|toujours|alors|après|très)$/i;
export const accorder = (s) => String(s).replace(/(?<![\d,./])1 ([a-zéèêàùûôîçœ-]+?)s\b/gi, (m, mot) => (SINGULIERS.test(mot + "s") ? m : `1 ${mot}`));

// La tablette lit à voix haute, en anglais, le texte « audio » d'une question (voix du navigateur,
// sans rien installer). Si aucune voix anglaise n'existe, on prend la voix par défaut.
export const peutParler = typeof window !== "undefined" && "speechSynthesis" in window;
export function parler(texte, lent = false) {
  if (!peutParler || !texte) return;
  const voix = speechSynthesis.getVoices();
  const u = new SpeechSynthesisUtterance(texte);
  u.lang = "en-GB";
  u.voice = voix.find((v) => v.lang === "en-GB") || voix.find((v) => v.lang?.startsWith("en")) || null;
  u.rate = lent ? 0.6 : 0.85;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}
if (peutParler) speechSynthesis.getVoices(); // certaines tablettes chargent les voix au premier appel

// zone : l'élément où afficher. Rend une promesse { score, total, ratees }.
// accord : corriger « 1 billes » (textes en français). Une question peut l'empêcher avec accord: false.
export function derouler(zone, questions, { titre = "", accord = true } = {}) {
  return new Promise((fin) => {
    const res = [];
    let i = 0;
    const afficher = () => {
      const q = questions[i];
      const txt = (s) => (accord && q.accord !== false ? accorder(s) : s);
      const barre = questions.map((_, k) => k < res.length ? `<i class="${res[k] ? "ok" : "ko"}"></i>` : `<i class="${k === i ? "en" : ""}"></i>`).join("");
      zone.innerHTML = `
        <div class="carte">
          <div class="chrono">${esc(titre)}${titre ? " · " : ""}Question ${i + 1} sur ${questions.length}</div>
          <div class="barre">${barre}</div>
          <p class="enonce">${txt(q.enonce)}</p>
          ${q.audio ? (peutParler ? `<div class="ligne" style="margin-bottom:14px"><button class="cta sec petit" id="ecouter" style="width:auto;margin:0">🔊 Écouter</button>
            <button class="cta sec petit" id="lent" style="width:auto;margin:0">🐢 Plus lentement</button></div>`
            : `<p class="muet petit">Cette tablette ne sait pas lire à voix haute : demande à un adulte de lire « ${esc(q.audio)} ».</p>`) : ""}
          <div id="zone-rep"></div><div id="verdict"></div>
          <button class="cta cache" id="suivant">Question suivante</button>
        </div>`;
      if (q.audio && peutParler) {
        zone.querySelector("#ecouter").onclick = () => parler(q.audio);
        zone.querySelector("#lent").onclick = () => parler(q.audio, true);
        setTimeout(() => parler(q.audio), 300);
      }
      const z = zone.querySelector("#zone-rep");
      if (q.type === "qcm") {
        z.className = "choix";
        q.choix.forEach((c, k) => {
          const b = document.createElement("button");
          b.textContent = txt(c);
          b.onclick = () => { b.classList.add("sel"); valider(k); };
          z.appendChild(b);
        });
      } else {
        z.innerHTML = `<input type="text" id="rep" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Ta réponse"><button class="cta" id="verif">Vérifier</button>`;
        const champ = z.querySelector("#rep");
        z.querySelector("#verif").onclick = () => valider(champ.value);
        champ.addEventListener("keydown", (e) => { if (e.key === "Enter") valider(champ.value); });
        champ.focus();
      }
    };
    const valider = (rep) => {
      const q = questions[i];
      let juste;
      if (q.type === "qcm") {
        juste = Number(rep) === Number(q.reponse);
        const btns = [...zone.querySelectorAll("#zone-rep button")];
        btns.forEach((b) => (b.disabled = true));
        btns[Number(q.reponse)].classList.add("bon");
        if (!juste) btns[Number(rep)].classList.add("mauvais");
      } else {
        if (!String(rep).trim()) return;
        const acc = Array.isArray(q.reponse) ? q.reponse : [q.reponse];
        juste = acc.some((a) => egal(a, rep));
        zone.querySelector("#rep").disabled = true;
        zone.querySelector("#verif").classList.add("cache");
      }
      res.push(juste);
      const bonne = q.type === "qcm" ? q.choix[Number(q.reponse)] : (Array.isArray(q.reponse) ? q.reponse[0] : q.reponse);
      const ac = (s) => (accord && q.accord !== false ? accorder(s) : s);
      if (q.audio && peutParler) speechSynthesis.cancel();
      zone.querySelector("#verdict").innerHTML = `<div class="verdict ${juste ? "ok" : "ko"}"><b>${juste ? "Bravo, c'est juste. +1 ⭐" : "La réponse était : " + esc(ac(bonne))}</b>${ac(q.explication || "")}${q.audio ? `<br><i>On entendait : « ${esc(q.audio)} »</i>` : ""}</div>`;
      const suiv = zone.querySelector("#suivant");
      suiv.classList.remove("cache");
      suiv.textContent = i === questions.length - 1 ? "Voir le résultat" : "Question suivante";
      suiv.onclick = () => {
        i++;
        if (i < questions.length) afficher();
        else fin({ score: res.filter(Boolean).length, total: res.length, resultats: res, ratees: questions.filter((_, k) => !res[k]) });
      };
      suiv.focus();
    };
    afficher();
  });
}
