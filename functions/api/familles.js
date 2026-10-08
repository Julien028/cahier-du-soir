import { json } from "../../src/outils.js";
import { exiger } from "../../src/session.js";

// GET /api/familles (administrateur) -> toutes les familles, avec leurs parents et enfants.
export async function onRequestGet(contexte) {
  const { refus } = await exiger(contexte, "administrateur");
  if (refus) return refus;
  const env = contexte.env;
  const [{ results: familles }, { results: comptes }] = await Promise.all([
    env.DB.prepare("SELECT id, nom, cree_le FROM familles ORDER BY nom").all(),
    env.DB.prepare("SELECT id, identifiant, prenom, nom, role, classe, couleur, actif, famille_id FROM comptes WHERE famille_id IS NOT NULL ORDER BY prenom").all(),
  ]);
  return json(familles.map((f) => ({
    ...f,
    parents: comptes.filter((c) => c.famille_id === f.id && c.role === "parent"),
    enfants: comptes.filter((c) => c.famille_id === f.id && c.role === "enfant"),
  })));
}
