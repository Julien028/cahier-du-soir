// Petits outils communs aux pages.
export const $ = (s, racine = document) => racine.querySelector(s);
export const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
export const dateFr = (d) => (d ? d.slice(0, 10).split("-").reverse().join("/") : "");
export const avatar = (prenom, couleur, grand = false) =>
  `<span class="avatar${grand ? " grand" : ""}" style="background:${esc(couleur || "#1E3A6E")}">${esc((prenom || "?").slice(0, 1).toUpperCase())}</span>`;
export const pluriel = (n, mot, motPluriel = mot + "s") => `${n} ${n > 1 ? motPluriel : mot}`;

// Une pluie de confettis, pour un sans-faute ou un nouveau grade.
export function confettis(n = 80) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const couleurs = ["#C62828", "#1E3A6E", "#E0A100", "#2C7A52", "#8E3B8E", "#2E7D9A"];
  for (let i = 0; i < n; i++) {
    const c = document.createElement("i");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = couleurs[i % couleurs.length];
    c.style.animationDuration = 1.8 + Math.random() * 1.8 + "s";
    c.style.animationDelay = Math.random() * 0.5 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4500);
  }
}

// Une annonce au milieu de l'écran (nouveau badge, nouveau grade). Rend une promesse
// résolue quand l'enfant a touché « Super ! ».
export function annonce({ icone = "🎉", titre, texte = "" }) {
  return new Promise((ok) => {
    const d = document.createElement("div");
    d.className = "annonce";
    d.innerHTML = `<div class="carte"><div class="ico">${icone}</div><h2 style="margin-top:8px">${esc(titre)}</h2>
      <p class="notion">${esc(texte)}</p><button class="cta">Super !</button></div>`;
    document.body.appendChild(d);
    d.querySelector("button").onclick = () => { d.remove(); ok(); };
    d.querySelector("button").focus();
  });
}
