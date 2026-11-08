// L'année liturgique : la date de Pâques, le premier dimanche de l'Avent, le temps où l'on est,
// et les fêtes à venir. Tout se calcule : rien à mettre à jour d'une année sur l'autre.

const jourUTC = (a, m, j) => new Date(Date.UTC(a, m - 1, j, 12));
const iso = (d) => d.toISOString().slice(0, 10);
const plus = (d, n) => new Date(d.getTime() + n * 86400000);

// Pâques (calendrier grégorien, méthode de Meeus/Jones/Butcher).
export function paques(annee) {
  const a = annee % 19, b = Math.floor(annee / 100), c = annee % 100, d = Math.floor(b / 4), e = b % 4;
  const f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451);
  const mois = Math.floor((h + l - 7 * m + 114) / 31), jour = ((h + l - 7 * m + 114) % 31) + 1;
  return jourUTC(annee, mois, jour);
}

// Premier dimanche de l'Avent : le quatrième dimanche avant Noël (entre le 27 novembre et le 3 décembre).
export function avent(annee) {
  const noel = jourUTC(annee, 12, 25);
  const dimancheAvantNoel = plus(noel, -(noel.getUTCDay() || 7));
  return plus(dimancheAvantNoel, -21);
}

// Baptême du Seigneur : en France, le dimanche après l'Épiphanie (dimanche entre le 2 et le 8 janvier),
// ou le lundi si l'Épiphanie tombe le 7 ou le 8.
function baptemeDuSeigneur(annee) {
  let epi = jourUTC(annee, 1, 2);
  while (epi.getUTCDay() !== 0) epi = plus(epi, 1);
  return epi.getUTCDate() >= 7 ? plus(epi, 1) : plus(epi, 7);
}

export const TEMPS = {
  avent: { nom: "Le temps de l'Avent", couleur: "violet", teinte: "#6B3FA0", texte: "On prépare Noël : on attend la venue de Jésus." },
  noel: { nom: "Le temps de Noël", couleur: "blanc", teinte: "#C9A227", texte: "On fête la naissance de Jésus, Dieu qui vient parmi nous." },
  careme: { nom: "Le Carême", couleur: "violet", teinte: "#6B3FA0", texte: "Quarante jours pour se préparer à Pâques : prière, partage, effort." },
  paques: { nom: "Le temps pascal", couleur: "blanc", teinte: "#C9A227", texte: "Jésus est ressuscité ! Cinquante jours de fête jusqu'à la Pentecôte." },
  ordinaire: { nom: "Le temps ordinaire", couleur: "vert", teinte: "#2C7A52", texte: "On suit Jésus au fil des jours, et la foi grandit comme une plante." },
};

// Le temps liturgique d'une date « AAAA-MM-JJ ».
export function tempsDe(date) {
  const d = new Date(date + "T12:00:00Z"), a = d.getUTCFullYear();
  const p = paques(a), cendres = plus(p, -46), pentecote = plus(p, 49);
  if (d >= avent(a) && d < jourUTC(a, 12, 25)) return "avent";
  if (d >= jourUTC(a, 12, 25) || d <= baptemeDuSeigneur(a)) return "noel";
  if (d >= cendres && d < p) return "careme";
  if (d >= p && d <= pentecote) return "paques";
  return "ordinaire";
}

// La date (AAAA-MM-JJ) d'une fête pour une année : « MM-JJ », « paques±N » ou « avent ».
export function dateFete(regle, annee) {
  if (regle === "avent") return iso(avent(annee));
  const m = /^paques([+-]\d+)?$/.exec(regle);
  if (m) return iso(plus(paques(annee), Number(m[1] || 0)));
  const [mo, j] = regle.split("-").map(Number);
  return iso(jourUTC(annee, mo, j));
}

// Les prochaines fêtes à partir d'une date, avec le nombre de jours qui restent.
export function fetesAVenir(fetes, date, combien = 6) {
  const a = Number(date.slice(0, 4));
  const toutes = [];
  for (const f of fetes) for (const an of [a, a + 1]) {
    const jour = dateFete(f.date, an);
    if (jour >= date) toutes.push({ ...f, jour, dans: Math.round((Date.parse(jour) - Date.parse(date)) / 86400000) });
  }
  const vues = new Set();
  return toutes.sort((x, y) => x.jour.localeCompare(y.jour)).filter((f) => !vues.has(f.nom) && vues.add(f.nom)).slice(0, combien);
}
