import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { rubriquesASeances } from "../public/js/regles.js";

// Chaque programme branché sur le site (classes prêtes et Maths in English) doit passer
// le contrôle qualité complet de tests/verifier-programme.mjs.
const verifier = fileURLToPath(new URL("./verifier-programme.mjs", import.meta.url));
for (const code of rubriquesASeances()) {
  test(`programme ${code} : contrôle qualité`, () => {
    let sortie;
    try { sortie = execFileSync(process.execPath, [verifier, code], { encoding: "utf8" }); }
    catch (e) { assert.fail(`${code} :\n${e.stdout || ""}${e.stderr || ""}`); }
    assert.match(sortie, /\nOK\s*$/);
  });
}
