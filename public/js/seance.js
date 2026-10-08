// Le déroulé d'une série de questions : une à la fois, la correction tout de suite,
// puis le résultat. Repris des anciens cahiers, avec des réponses chiffrées plus tolérantes.
import { esc } from "./outils.js";

function normalise(x) {
  return String(x).toLowerCase().replace(/[’`]/g, "'").trim().replace(/\s+/g, " ").replace(",", ".")
    .replace(/[.!?]$/, "").trim().replace(/^(l'|le |la |les |un |une |des |du )/, "");
}
// 2,5 = 2.5 = 2,50 ; « 12 € » = 12 ; « 1 000 » = 1000.
function enNombre(x) {
  const s = String(x).replace(/\s/g, "").replace(",", ".").replace(/(€|cm²|m²|cm³|dm³|m³|km\/h|km|cm|mm|kg|cl|ml|°c|°|%|min|m|g|l)$/i, "");
  return /^-?\d+(\.\d+)?$/.test(s) ? Number(s) : null;
}
export function egal(a, b) {
  const na = enNombre(a), nb = enNombre(b);
  if (na !== null && nb !== null) return Math.abs(na - nb) < 1e-9;
  return normalise(a) === normalise(b);
}

// zone : l'élément où afficher. Rend une promesse { score, total, ratees }.
export function derouler(zone, questions, { titre = "" } = {}) {
  return new Promise((fin) => {
    const res = [];
    let i = 0;
    const afficher = () => {
      const q = questions[i];
      const barre = questions.map((_, k) => k < res.length ? `<i class="${res[k] ? "ok" : "ko"}"></i>` : `<i class="${k === i ? "en" : ""}"></i>`).join("");
      zone.innerHTML = `
        <div class="carte">
          <div class="chrono">${esc(titre)}${titre ? " · " : ""}Question ${i + 1} sur ${questions.length}</div>
          <div class="barre">${barre}</div>
          <p class="enonce">${q.enonce}</p>
          <div id="zone-rep"></div><div id="verdict"></div>
          <button class="cta cache" id="suivant">Question suivante</button>
        </div>`;
      const z = zone.querySelector("#zone-rep");
      if (q.type === "qcm") {
        z.className = "choix";
        q.choix.forEach((c, k) => {
          const b = document.createElement("button");
          b.textContent = c;
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
      zone.querySelector("#verdict").innerHTML = `<div class="verdict ${juste ? "ok" : "ko"}"><b>${juste ? "Bravo, c'est juste. +1 ⭐" : "La réponse était : " + esc(bonne)}</b>${q.explication || ""}</div>`;
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
