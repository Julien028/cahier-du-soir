// Règles communes aux comptes.
import { CLASSES, RUBRIQUES_PRETES } from "../public/js/regles.js";

export const ROLES = ["administrateur", "parent", "enfant"];
export const identifiantValide = (v) => /^[a-z0-9._-]{2,60}$/.test(v);
export const MOT_DE_PASSE_MIN = 10;
export const codeValide = (v) => /^\d{4}$/.test(v);

// « Amélie-Rose » -> « amelie-rose » : l'identifiant d'un enfant vient de son prénom.
export const identifiantDepuis = (prenom) =>
  String(prenom).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40) || "enfant";

// Un code à 4 chiffres, sans suite trop facile (0000, 1234…).
export function codeProvisoire() {
  for (;;) {
    const c = String(crypto.getRandomValues(new Uint32Array(1))[0] % 10000).padStart(4, "0");
    if (!/^(\d)\1{3}$/.test(c) && !["0123", "1234", "2345", "3456", "4567", "5678", "6789", "9876", "4321"].includes(c)) return c;
  }
}

// Un mot de passe provisoire lisible et dictable, pour un adulte : trois mots et un nombre.
const MOTS = ["cahier", "crayon", "gomme", "regle", "compas", "trousse", "livre", "carte", "globe", "plume",
  "etoile", "lune", "soleil", "riviere", "brochet", "gardon", "canne", "bouchon", "foret", "colline"];
export function motDePasseProvisoire() {
  const a = crypto.getRandomValues(new Uint32Array(4));
  return `${MOTS[a[0] % MOTS.length]}-${MOTS[a[1] % MOTS.length]}-${MOTS[a[2] % MOTS.length]}-${10 + (a[3] % 90)}`;
}

const COULEURS = ["#1E3A6E", "#C2703A", "#2C7A52", "#8E3B8E", "#B23A48", "#2E7D9A", "#6B5B2E"];

// Les champs qu'un administrateur peut donner ou changer. Rend { fiche } ou { erreur }.
export function lireFiche(corps, avant = {}) {
  const pris = (k) => (k in corps ? corps[k] : avant[k]);
  const role = pris("role") || "enfant";
  const fiche = {
    prenom: String(pris("prenom") ?? "").trim().slice(0, 40),
    nom: String(pris("nom") ?? "").trim().slice(0, 60),
    role,
    couleur: String(pris("couleur") || COULEURS[Math.floor(Math.random() * COULEURS.length)]),
    annee_naissance: null, classe: null, rubriques: [],
  };
  if (!fiche.prenom) return { erreur: "Il faut le prénom." };
  if (!ROLES.includes(role)) return { erreur: "Niveau inconnu." };
  if (!/^#[0-9a-fA-F]{6}$/.test(fiche.couleur)) return { erreur: "Couleur illisible." };
  if (role === "enfant") {
    const annee = pris("annee_naissance");
    if (annee !== null && annee !== undefined && annee !== "") {
      const n = Number(annee);
      if (!Number.isInteger(n) || n < 2005 || n > 2030) return { erreur: "Année de naissance illisible." };
      fiche.annee_naissance = n;
    }
    fiche.classe = pris("classe") || null;
    if (!CLASSES.some((c) => c.code === fiche.classe)) return { erreur: "Il faut choisir la classe." };
    let rub = pris("rubriques");
    if (typeof rub === "string") { try { rub = JSON.parse(rub); } catch { rub = []; } }
    fiche.rubriques = [...new Set((Array.isArray(rub) ? rub : []).map(String))]
      .filter((r) => RUBRIQUES_PRETES.includes(r) || r === "peche");
    if (!fiche.rubriques.length) return { erreur: "Il faut au moins une rubrique (sa classe, si elle est prête)." };
  }
  return { fiche };
}

export async function listeComptes(env) {
  const { results } = await env.DB.prepare(
    `SELECT c.id, c.identifiant, c.prenom, c.nom, c.role, c.annee_naissance, c.classe, c.rubriques, c.couleur,
            c.actif, c.cree_le, c.cree_par,
            (SELECT MAX(s.cree_le) FROM sessions s WHERE s.compte_id = c.id) AS derniere_connexion
       FROM comptes c ORDER BY c.actif DESC, CASE c.role WHEN 'administrateur' THEN 0 WHEN 'parent' THEN 1 ELSE 2 END, c.prenom`
  ).all();
  const { results: liens } = await env.DB.prepare("SELECT parent_id, enfant_id FROM liens_parents").all();
  return results.map((c) => ({
    ...c, actif: !!c.actif, rubriques: JSON.parse(c.rubriques || "[]"),
    enfants: liens.filter((l) => l.parent_id === c.id).map((l) => l.enfant_id),
    parents: liens.filter((l) => l.enfant_id === c.id).map((l) => l.parent_id),
  }));
}

// Les liens d'un parent vers ses enfants, remplacés en une fois.
export function remplacerLiens(env, parentId, enfants) {
  const ids = [...new Set((Array.isArray(enfants) ? enfants : []).map(Number).filter(Number.isInteger))];
  return [
    env.DB.prepare("DELETE FROM liens_parents WHERE parent_id = ?").bind(parentId),
    ...ids.map((e) => env.DB.prepare(
      "INSERT INTO liens_parents (parent_id, enfant_id) SELECT ?, id FROM comptes WHERE id = ? AND role = 'enfant'").bind(parentId, e)),
  ];
}
