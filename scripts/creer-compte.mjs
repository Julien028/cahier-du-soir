// Crée le compte administrateur (ou change son mot de passe s'il existe déjà).
//   npm run compte              -> sur la base locale du poste
//   npm run compte -- --enligne -> sur la vraie base, chez Cloudflare
//   npm run compte -- --enligne --preparer -> si wrangler n'est pas connecté dans ce terminal (voir plus bas)
// Le mot de passe se tape ici, ne s'affiche pas, et n'est garde nulle part en clair :
// seule son empreinte part en base. Les comptes des parents et des enfants se créent
// ensuite depuis l'onglet Comptes du site.
import { createInterface } from "node:readline";
import { writeFileSync, rmSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { hacher } from "../src/session.js";

const racine = join(dirname(fileURLToPath(import.meta.url)), "..");
const enLigne = process.argv.includes("--enligne");
const q = (v) => "'" + String(v).replace(/'/g, "''") + "'";

const rl = createInterface({ input: process.stdin, output: process.stdout, terminal: true });
let muet = false;
const ecrire = rl._writeToOutput.bind(rl);
rl._writeToOutput = (s) => { if (!muet) ecrire(s); };
// Lecture ligne a ligne : marche au clavier comme avec des reponses envoyees d'un bloc.
const lignes = rl[Symbol.asyncIterator]();
async function demander(question, cache = false) {
  process.stdout.write(question);
  muet = cache;
  const { value } = await lignes.next();
  muet = false;
  if (cache) process.stdout.write("\n");
  return String(value ?? "").replace(/^﻿/, "").trim();
}

console.log(`Création d'un compte sur la base ${enLigne ? "EN LIGNE" : "locale"}.\n`);
const identifiant = (await demander("Identifiant (sans espace, ex. julien) : ")).toLowerCase();
const prenom = await demander("Prénom (ex. Julien) : ");
const nom = await demander("Nom (ex. Pichot) : ");
const role = "administrateur";
// MOT_DE_PASSE ne sert qu'aux essais automatiques ; en usage normal on le tape.
const motDePasse = process.env.MOT_DE_PASSE ?? await demander("Mot de passe (10 caractères au moins) : ", true);
const encore = process.env.MOT_DE_PASSE ?? await demander("Encore une fois : ", true);
rl.close();

if (!/^[a-z0-9._-]{2,60}$/.test(identifiant)) { console.error("Identifiant : lettres, chiffres, point ou tiret, sans espace."); process.exit(1); }
if (!prenom) { console.error("Il faut un prénom."); process.exit(1); }
if (motDePasse !== encore) { console.error("Les deux mots de passe ne sont pas les mêmes."); process.exit(1); }
if (motDePasse.length < 10) { console.error("Mot de passe trop court : 10 caractères au moins."); process.exit(1); }

// --preparer : quand wrangler n'est pas connecté dans ce terminal, on écrit seulement le
// fichier (il ne contient que l'empreinte du mot de passe), à passer ensuite à la base avec
//   npx wrangler d1 execute cahier-du-soir --remote --file=essais/compte-admin.sql
const preparer = process.argv.includes("--preparer");
const dossier = preparer ? join(racine, "essais") : mkdtempSync(join(tmpdir(), "cahier-compte-"));
const fichier = join(dossier, preparer ? "compte-admin.sql" : "compte.sql");
writeFileSync(fichier,
  `INSERT INTO comptes (identifiant, prenom, nom, role, mot_de_passe, cree_par) VALUES (${q(identifiant)}, ${q(prenom)}, ${q(nom)}, ${q(role)}, ${q(await hacher(motDePasse))}, 'script')\n` +
  `ON CONFLICT(identifiant) DO UPDATE SET prenom = excluded.prenom, nom = excluded.nom, role = excluded.role, mot_de_passe = excluded.mot_de_passe, actif = 1;\n` +
  `DELETE FROM sessions WHERE compte_id = (SELECT id FROM comptes WHERE identifiant = ${q(identifiant)});\n` +
  `INSERT INTO journal (qui, quoi, cible) VALUES ('script', 'compte.cree', ${q(identifiant)});\n`, "utf8");
if (preparer) {
  console.log(`\nC'est prêt (fichier essais/compte-admin.sql). Vous pouvez dire à Claude : « c'est fait ».`);
  process.exit(0);
}
const r = spawnSync(`npx wrangler d1 execute cahier-du-soir ${enLigne ? "--remote" : "--local"} --yes --file="${fichier}"`,
  { cwd: racine, shell: true, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
rmSync(dossier, { recursive: true, force: true });
if (r.status !== 0) {
  // On montre ce que Cloudflare a repondu : sans ca, impossible de savoir pourquoi.
  console.error(`${r.stdout || ""}\n${r.stderr || ""}`.trim().split("\n").slice(-15).join("\n"));
  console.error("\nLa base a refusé l'écriture (détail ci-dessus).");
  process.exit(1);
}
console.log(`Compte « ${identifiant} » (${role}) prêt.`);
