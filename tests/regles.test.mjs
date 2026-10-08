import { test } from "node:test";
import assert from "node:assert/strict";
import { grade, serie, meilleureSerie, etoilesSeance, badgesGagnes, missionDuJour, PALIERS } from "../public/js/regles.js";

test("étoiles d'une séance", () => {
  assert.equal(etoilesSeance(4, 6), 4);
  assert.equal(etoilesSeance(6, 6), 9);
  assert.equal(etoilesSeance(0, 6), 0);
});

test("grades et paliers", () => {
  assert.equal(grade(0, "college").nom, "Apprenti scribe");
  assert.equal(grade(39, "college").manque, 1);
  assert.equal(grade(40, "college").nom, "Messager");
  assert.equal(grade(0).nom, "Moussaillon");
  const haut = grade(PALIERS.at(-1) + 50, "college");
  assert.equal(haut.nom, "Olympien"); assert.equal(haut.suivantNom, null); assert.equal(haut.avancee, 1);
  assert.ok(grade(80).avancee > 0 && grade(80).avancee < 1);
});

test("jours d'affilée", () => {
  assert.equal(serie(["2026-10-06", "2026-10-07", "2026-10-08"], "2026-10-08"), 3);
  assert.equal(serie(["2026-10-06", "2026-10-07"], "2026-10-08"), 2, "pas encore fait ce soir : la série tient");
  assert.equal(serie(["2026-10-05"], "2026-10-08"), 0);
  assert.equal(serie([], "2026-10-08"), 0);
  assert.equal(meilleureSerie(["2026-09-01", "2026-09-02", "2026-09-03", "2026-09-10", "2026-09-30", "2026-10-01"]), 3);
  assert.equal(meilleureSerie(["2026-10-31", "2026-11-01"]), 2, "changement de mois");
});

test("badges", () => {
  const vide = { seances: 0, sansFautes: 0, meilleureSerie: 0, erreursCorrigees: 0, missions: 0, etoiles: 0, semainesCompletes: 0, semaineMax: 1 };
  assert.deepEqual(badgesGagnes(vide), []);
  assert.deepEqual(badgesGagnes({ ...vide, seances: 1, missions: 1 }).sort(), ["mission1", "premiere"]);
  assert.ok(badgesGagnes({ ...vide, meilleureSerie: 7 }).includes("serie7"));
});

test("mission du jour : la même toute la journée, change d'un jour à l'autre", () => {
  assert.equal(missionDuJour("2026-10-08", "college", 3), missionDuJour("2026-10-08", "college", 3));
  const semaine = new Set(["01", "02", "03", "04", "05", "06", "07"].map((j) => missionDuJour(`2026-10-${j}`, "primaire", 1)));
  assert.ok(semaine.size >= 6);
});
