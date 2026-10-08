import { test } from "node:test";
import assert from "node:assert/strict";

// Chaque séance de chaque semaine, tirée plusieurs fois : des questions bien formées.
for (const code of ["ce2", "6e"]) {
  test(`programme ${code} : 36 semaines de questions valides`, async () => {
    const { programme: p } = await import(`../public/programmes/${code}.js`);
    assert.equal(p.SEMAINES.length, 36);
    for (let tirage = 0; tirage < 5; tirage++) for (let s = 1; s <= 36; s++) for (let j = 0; j < 6; j++) {
      const mat = p.matiereDuJour(s, j);
      assert.ok(p.NOM_MAT[mat], `matière ${mat}`);
      const qs = p.seanceHorsLigne(mat, s);
      assert.ok(qs.length >= 5);
      for (const q of qs) {
        assert.doesNotMatch(JSON.stringify(q), /undefined|NaN|\[object/);
        if (q.type === "qcm") assert.ok(q.reponse >= 0 && q.reponse < q.choix.length);
        else assert.ok(Array.isArray(q.reponse) && q.reponse.length);
      }
    }
  });
}
