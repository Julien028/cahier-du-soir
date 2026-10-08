// Les règles de la motivation : étoiles, grades, badges, missions sans écran.
// Un seul fichier, lu à la fois par les pages (navigateur) et par le serveur (functions/).

// --- Les classes connues. « cycle » choisit les grades et les missions.
export const CLASSES = [
  { code: "cp", nom: "CP", cycle: "primaire" },
  { code: "ce1", nom: "CE1", cycle: "primaire" },
  { code: "ce2", nom: "CE2", cycle: "primaire" },
  { code: "cm1", nom: "CM1", cycle: "primaire" },
  { code: "cm2", nom: "CM2", cycle: "primaire" },
  { code: "6e", nom: "6e", cycle: "college" },
  { code: "5e", nom: "5e", cycle: "college" },
  { code: "4e", nom: "4e", cycle: "college" },
  { code: "3e", nom: "3e", cycle: "college" },
];
// Les rubriques dont le programme existe déjà sur le site.
export const RUBRIQUES_PRETES = ["cp", "ce1", "ce2", "cm1", "cm2", "6e", "5e", "4e", "3e"];
// Les rubriques à séances qui ne sont pas une classe : les maths en anglais, une par cycle.
// Elles se cochent en plus de la classe et fonctionnent comme elle (une séance par soir).
export const RUBRIQUES_EN = [
  { code: "maths-en-c2", nom: "Maths in English · CP-CE2" },
  { code: "maths-en-c3", nom: "Maths in English · CM1-6e" },
  { code: "maths-en-c4", nom: "Maths in English · 5e-3e" },
];
// Les cours d'anglais, par niveau (mêmes séances que les classes, plus une leçon par semaine).
export const RUBRIQUES_ANGLAIS = [];
// Les rubriques qui ne sont pas une classe : lues quand on veut, sans séance du soir.
export const RUBRIQUES_LIBRES = [{ code: "peche", nom: "La pêche" }];
// Toutes les rubriques qui ont un programme à séances (public/programmes/<code>.js).
export const rubriquesASeances = () => [...RUBRIQUES_PRETES, ...RUBRIQUES_EN.map((r) => r.code), ...RUBRIQUES_ANGLAIS.map((r) => r.code)];
export const nomRubrique = (code) =>
  RUBRIQUES_LIBRES.find((r) => r.code === code)?.nom || RUBRIQUES_EN.find((r) => r.code === code)?.nom || RUBRIQUES_ANGLAIS.find((r) => r.code === code)?.nom || classe(code)?.nom || code;
export const classe = (code) => CLASSES.find((c) => c.code === code);
export const cycleDe = (code) => classe(code)?.cycle || "primaire";

// --- Les étoiles.
export const GAINS = {
  bonneReponse: 1,     // par bonne réponse dans la séance du soir
  sansFaute: 3,        // bonus si tout est juste
  erreurCorrigee: 2,   // une question du carnet des erreurs enfin réussie
  mission: 2,          // la mission sans écran du jour, faite
  chapitrePeche: 5,    // un chapitre de pêche validé (quiz réussi), la première fois
};
export const etoilesSeance = (score, total) =>
  score * GAINS.bonneReponse + (total > 0 && score === total ? GAINS.sansFaute : 0);

// --- Les grades. Le collège monte dans la mythologie grecque, qu'il étudie en 6e ;
// le primaire monte à bord d'un bateau.
export const GRADES = {
  primaire: ["Moussaillon", "Matelot", "Timonier", "Navigateur", "Capitaine", "Explorateur", "Amiral"],
  college: ["Apprenti scribe", "Messager", "Hoplite", "Héros", "Demi-dieu", "Sage de l'Olympe", "Olympien"],
};
// Étoiles nécessaires pour chaque grade. Une séance réussie rapporte 5 à 9 étoiles :
// on change de grade toutes les deux à six semaines environ.
export const PALIERS = [0, 40, 120, 250, 450, 700, 1000];

export function grade(etoiles, cycle = "primaire") {
  const noms = GRADES[cycle] || GRADES.primaire;
  let n = 0;
  while (n + 1 < PALIERS.length && etoiles >= PALIERS[n + 1]) n++;
  const suivant = n + 1 < PALIERS.length ? PALIERS[n + 1] : null;
  return {
    niveau: n + 1,
    nom: noms[n],
    suivantNom: suivant === null ? null : noms[n + 1],
    manque: suivant === null ? 0 : suivant - etoiles,
    // Avancée vers le grade suivant, de 0 à 1.
    avancee: suivant === null ? 1 : (etoiles - PALIERS[n]) / (suivant - PALIERS[n]),
  };
}

// --- Jours d'affilée : jours consécutifs avec au moins une séance, jusqu'à aujourd'hui
// (ou hier : la série n'est pas perdue tant que la soirée n'est pas finie).
export function serie(dates, aujourdhui) {
  const jours = new Set(dates);
  const veille = (d) => {
    const x = new Date(d + "T12:00:00Z");
    x.setUTCDate(x.getUTCDate() - 1);
    return x.toISOString().slice(0, 10);
  };
  let d = jours.has(aujourdhui) ? aujourdhui : veille(aujourdhui);
  let n = 0;
  while (jours.has(d)) { n++; d = veille(d); }
  return n;
}

// La plus longue série jamais faite (pour les badges, qui ne se perdent pas).
export function meilleureSerie(dates) {
  const tri = [...new Set(dates)].sort();
  let best = 0, cur = 0, prec = null;
  for (const d of tri) {
    const suite = prec && Date.parse(d + "T12:00:00Z") - Date.parse(prec + "T12:00:00Z") === 86400000;
    cur = suite ? cur + 1 : 1;
    best = Math.max(best, cur);
    prec = d;
  }
  return best;
}

// --- Les badges. Calculés à partir des faits, jamais stockés : ils ne peuvent pas se perdre
// ni se contredire. « f » reçoit le bilan de l'enfant (voir faitsEnfant côté serveur).
export const BADGES = [
  { code: "premiere", nom: "Premier pas", texte: "Faire sa première séance", icone: "✏️", f: (b) => b.seances >= 1 },
  { code: "serie3", nom: "Bien parti", texte: "3 soirs d'affilée", icone: "🔥", f: (b) => b.meilleureSerie >= 3 },
  { code: "serie7", nom: "Une semaine entière", texte: "7 soirs d'affilée", icone: "🔥", f: (b) => b.meilleureSerie >= 7 },
  { code: "serie20", nom: "Inarrêtable", texte: "20 soirs d'affilée", icone: "🌋", f: (b) => b.meilleureSerie >= 20 },
  { code: "sansfaute", nom: "Sans faute", texte: "Une séance sans aucune erreur", icone: "🎯", f: (b) => b.sansFautes >= 1 },
  { code: "sansfaute10", nom: "Tireur d'élite", texte: "10 séances sans faute", icone: "🏹", f: (b) => b.sansFautes >= 10 },
  { code: "erreurs5", nom: "Rien ne m'échappe", texte: "Corriger 5 erreurs du carnet", icone: "🔍", f: (b) => b.erreursCorrigees >= 5 },
  { code: "erreurs25", nom: "Détective", texte: "Corriger 25 erreurs du carnet", icone: "🕵️", f: (b) => b.erreursCorrigees >= 25 },
  { code: "mission1", nom: "Loin de l'écran", texte: "Faire une mission sans écran", icone: "🌳", f: (b) => b.missions >= 1 },
  { code: "mission10", nom: "Aventurier", texte: "Faire 10 missions sans écran", icone: "🧭", f: (b) => b.missions >= 10 },
  { code: "semaine", nom: "Semaine complète", texte: "Finir les 6 séances d'une semaine", icone: "📅", f: (b) => b.semainesCompletes >= 1 },
  { code: "periode", nom: "Une période de faite", texte: "Atteindre la semaine 8", icone: "🏁", f: (b) => b.semaineMax >= 8 },
  { code: "prise1", nom: "Première prise", texte: "Noter un poisson dans son carnet de pêche", icone: "🎣", f: (b) => b.prises >= 1 },
  { code: "peche3", nom: "Apprenti pêcheur", texte: "Valider 3 chapitres de pêche", icone: "🐟", f: (b) => b.chapitresPeche >= 3 },
  { code: "peche7", nom: "Pêcheur confirmé", texte: "Valider les 7 chapitres de pêche", icone: "🐋", f: (b) => b.chapitresPeche >= 7 },
  { code: "etoiles100", nom: "100 étoiles", texte: "Gagner 100 étoiles", icone: "⭐", f: (b) => b.etoiles >= 100 },
  { code: "etoiles500", nom: "500 étoiles", texte: "Gagner 500 étoiles", icone: "🌟", f: (b) => b.etoiles >= 500 },
  { code: "annee", nom: "L'année entière", texte: "Atteindre la semaine 36", icone: "🏆", f: (b) => b.semaineMax >= 36 },
];
export const badgesGagnes = (bilan) => BADGES.filter((x) => x.f(bilan)).map((x) => x.code);

// --- Les missions sans écran : une par jour, tirée selon le jour (même mission toute la
// soirée, même si on recharge la page). Courtes, faisables à la maison.
const MISSIONS = {
  commun: [
    "Lis 10 pages d'un livre que tu aimes.",
    "Explique à quelqu'un de la maison ce que tu as appris ce soir.",
    "Prépare ton cartable pour demain, sans qu'on te le demande.",
    "Aide à mettre la table ou à débarrasser.",
    "Va dehors 15 minutes : marche, vélo, ballon, comme tu veux.",
    "Dessine quelque chose que tu as vu aujourd'hui.",
    "Joue à un jeu de société avec quelqu'un de la maison.",
    "Range ta chambre pendant 10 minutes.",
    "Regarde le ciel ce soir : vois-tu la Lune ? Est-elle ronde ou en croissant ?",
    "Écris trois choses qui t'ont fait plaisir aujourd'hui, sur une feuille.",
    "Aide pour une tâche à la ferme ou au jardin.",
    "Pose une question sur leur enfance à tes parents ou tes grands-parents.",
  ],
  primaire: [
    "Récite une table de multiplication à quelqu'un, sans te tromper.",
    "Compte la monnaie d'un porte-monnaie avec un adulte.",
    "Trouve 5 objets ronds et 5 objets carrés dans la maison.",
    "Lis à voix haute une page de ton livre à quelqu'un.",
    "Pèse trois fruits ou légumes à la cuisine et range-les du plus léger au plus lourd.",
  ],
  college: [
    "Récite ta table de 7 et ta table de 8 à quelqu'un, dans le désordre.",
    "Raconte à quelqu'un un mythe grec que tu connais.",
    "Prépare une recette simple avec un adulte en mesurant toi-même les quantités.",
    "Trouve sur une carte papier ou un atlas trois pays que tu ne connais pas.",
    "Calcule de tête le prix de trois articles pendant les courses.",
  ],
};
export function missionDuJour(date, cycle = "primaire", graine = 0) {
  const liste = [...MISSIONS.commun, ...(MISSIONS[cycle] || [])];
  const n = Math.floor(Date.parse(date + "T12:00:00Z") / 86400000) + graine * 7;
  return liste[((n % liste.length) + liste.length) % liste.length];
}

// --- Calendrier du carnet des erreurs : une erreur revient 2 jours plus tard,
// puis 3 jours plus tard si elle est encore ratée.
export const DELAI_ERREUR = [2, 3, 4];
