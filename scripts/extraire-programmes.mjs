// Recopie le programme de l'année et la banque d'exercices des anciens cahiers
// (andre-ce2 pour le CE2, simon-6eme pour la 6e) dans public/programmes/, sous forme de
// modules. Les anciens cahiers restent la source tant qu'ils sont en service :
//   npm run programmes
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const racine = join(dirname(fileURLToPath(import.meta.url)), "..");
const SOURCES = [
  { code: "ce2", nom: "CE2", fichier: "../andre-ce2/public/index.html", rituel: "On commence par une question de calcul mental." },
  { code: "6e", nom: "6e", fichier: "../simon-6eme/public/index.html", rituel: "Deux questions de rituel pour commencer : calcul mental et français." },
];

// Le bloc qui commence au commentaire « N. TITRE » et s'arrête au commentaire suivant.
function section(html, debut, fin) {
  const a = html.lastIndexOf("/* ====", html.indexOf(debut));
  const b = html.lastIndexOf("/* ====", html.indexOf(fin));
  if (html.indexOf(debut) < 0 || html.indexOf(fin) < 0 || a < 0 || b <= a) throw new Error(`section introuvable : ${debut}`);
  return html.slice(a, b);
}

for (const s of SOURCES) {
  const html = readFileSync(join(racine, s.fichier), "utf8");
  const code = section(html, "   1. LE PROGRAMME", "   2. SAUVEGARDE") + section(html, "   3. LA BANQUE", "   4. EXERCICES");
  const module = `// Programme de ${s.nom}. FICHIER RECOPIÉ par « npm run programmes » depuis ${s.fichier.replace("../", "")} :
// ne pas le modifier ici, mais dans l'ancien cahier, puis relancer la recopie.

${code}
export const programme = { code: ${JSON.stringify(s.code)}, nom: ${JSON.stringify(s.nom)}, rituel: ${JSON.stringify(s.rituel)}, SEMAINES, JOURS, NOM_MAT, PERIODES, matiereDuJour, seanceHorsLigne };
`;
  writeFileSync(join(racine, "public/programmes", `${s.code}.js`), module);
  console.log(`${s.nom} : ${Math.round(module.length / 1024)} Ko`);
}
