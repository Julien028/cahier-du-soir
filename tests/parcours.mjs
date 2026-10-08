// Parcours complet contre le site lancé sur le poste (npm run dev), base LOCALE uniquement :
//   MOT_DE_PASSE=… node tests/parcours.mjs
// Crée des comptes d'essai, fait une séance, vérifie les droits de chacun.
import assert from "node:assert/strict";

const BASE = process.env.BASE || "http://localhost:8795";
const ADMIN = { identifiant: process.env.ADMIN || "julien", mot_de_passe: process.env.MOT_DE_PASSE };
if (!ADMIN.mot_de_passe) { console.error("MOT_DE_PASSE manquant."); process.exit(1); }

// Un « navigateur » minimal : garde son cookie de session.
function client() {
  let cookie = "";
  const appel = async (chemin, methode = "GET", corps) => {
    const r = await fetch(BASE + "/api/" + chemin, {
      method: methode,
      headers: { ...(cookie ? { cookie } : {}), ...(corps === undefined ? {} : { "content-type": "application/json", origin: BASE }) },
      body: corps === undefined ? undefined : JSON.stringify(corps),
    });
    const sc = r.headers.get("set-cookie");
    if (sc) cookie = sc.split(";")[0];
    return { statut: r.status, corps: await r.json().catch(() => null) };
  };
  return { appel, connexion: (identifiant, mot_de_passe) => appel("connexion", "POST", { identifiant, mot_de_passe }) };
}
const ok = (r, msg) => { assert.ok(r.statut < 300, `${msg} : ${r.statut} ${JSON.stringify(r.corps)}`); return r.corps; };

const suffixe = Date.now().toString(36).slice(-4);
const admin = client();
ok(await admin.connexion(ADMIN.identifiant, ADMIN.mot_de_passe), "connexion admin");

// Comptes : deux enfants (CE2, 6e), un parent relié au premier seulement.
const a = ok(await admin.appel("comptes", "POST", { role: "enfant", prenom: `Andre${suffixe}`, annee_naissance: 2018, classe: "ce2", rubriques: ["ce2"] }), "création enfant CE2");
const s = ok(await admin.appel("comptes", "POST", { role: "enfant", prenom: `Simon${suffixe}`, annee_naissance: 2015, classe: "6e", rubriques: ["6e"] }), "création enfant 6e");
assert.match(a.code, /^\d{4}$/);
const p = ok(await admin.appel("comptes", "POST", { role: "parent", prenom: `Parent${suffixe}`, enfants: [a.id] }), "création parent");
assert.ok(p.mot_de_passe_provisoire.length >= 10);
const refus = await admin.appel("comptes", "POST", { role: "enfant", prenom: "X", classe: "ce2", rubriques: [] });
assert.equal(refus.statut, 400, "un enfant sans rubrique est refusé");

// L'enfant se connecte avec son code.
const enfantA = client();
assert.equal((await enfantA.connexion(a.identifiant, "0000")).statut, 401, "mauvais code refusé");
const ca = ok(await enfantA.connexion(a.identifiant, a.code), "connexion enfant");
assert.equal(ca.role, "enfant");
let T = ok(await enfantA.appel(`enfants/${a.id}`), "tableau enfant");
assert.equal(T.etoiles, 0); assert.equal(T.grade.nom, "Moussaillon"); assert.equal(T.rubriques[0].semaine, 1);

// Il ne voit ni l'autre enfant ni les comptes.
assert.equal((await enfantA.appel(`enfants/${s.id}`)).statut, 404, "un enfant ne voit pas un autre enfant");
assert.equal((await enfantA.appel("comptes")).statut, 403, "un enfant ne voit pas les comptes");

// Séance du soir : 4 sur 6, deux erreurs envoyées au carnet.
const q = { type: "saisie", enonce: "Calcule : 6 × 7", reponse: ["42"], explication: "6 × 7 = 42." };
const g = ok(await enfantA.appel(`enfants/${a.id}/seances`, "POST", { rubrique: "ce2", matiere: "m", score: 4, total: 6, erreurs: [q, q] }), "séance");
assert.equal(g.gain, 4); assert.equal(g.etoiles, 4); assert.ok(g.nouveauxBadges.includes("premiere"));
assert.equal((await enfantA.appel(`enfants/${a.id}/seances`, "POST", { rubrique: "ce2", matiere: "f", score: 6, total: 6 })).statut, 409, "une seule séance par soir");
T = ok(await enfantA.appel(`enfants/${a.id}`), "tableau après séance");
assert.equal(T.rubriques[0].jour, 1, "on passe à la séance suivante");
assert.ok(T.rubriques[0].faiteAujourdhui); assert.equal(T.erreurs.enAttente, 2); assert.equal(T.erreurs.aRevoir, 0, "les erreurs reviennent dans 2 jours");

// Mission sans écran : +2, une fois par jour.
const m = ok(await enfantA.appel(`enfants/${a.id}/mission`, "POST", {}), "mission");
assert.equal(m.etoiles, 6);
assert.equal((await enfantA.appel(`enfants/${a.id}/mission`, "POST", {})).statut, 409);

// Le parent : voit son enfant, pas l'autre ; fixe une récompense, écrit un mot, déplace la position.
const parent = client();
ok(await parent.connexion(p.identifiant, p.mot_de_passe_provisoire), "connexion parent");
const mp = ok(await parent.appel("moi"), "moi parent");
assert.deepEqual(mp.enfants.map((e) => e.id), [a.id]);
assert.equal((await parent.appel(`enfants/${s.id}`)).statut, 404, "un parent ne voit pas un enfant qui n'est pas le sien");
assert.equal((await parent.appel("comptes")).statut, 403);
ok(await parent.appel(`enfants/${a.id}/recompense`, "POST", { libelle: "Sortie au cinéma", objectif: 50 }), "récompense");
ok(await parent.appel(`enfants/${a.id}/mots`, "POST", { texte: "Bravo !" }), "mot");
ok(await parent.appel(`enfants/${a.id}/progression`, "PATCH", { rubrique: "ce2", semaine: 6, jour: 2 }), "progression");
assert.equal((await parent.appel(`enfants/${a.id}/seances`, "POST", { rubrique: "ce2", matiere: "m", score: 1, total: 1 })).statut, 403, "le parent ne fait pas la séance");
T = ok(await enfantA.appel(`enfants/${a.id}`), "tableau vu par l'enfant");
assert.equal(T.recompense.libelle, "Sortie au cinéma"); assert.equal(T.recompense.gagnees, 0);
assert.equal(T.mots[0].texte, "Bravo !"); assert.equal(T.rubriques[0].semaine, 6);
ok(await enfantA.appel(`enfants/${a.id}/mots/lus`, "POST", {}), "mots lus");

// Reprise d'un ancien cahier pour le 6e.
const sauvegarde = { semaine: 6, jour: 3, modeIA: true, historique: [
  { date: "2026-09-02", semaine: 1, jour: 0, mat: "m", score: 5, total: 5 },
  { date: "2026-09-03", semaine: 1, jour: 1, mat: "f", score: 3, total: 5 },
  { date: "pas une date", score: 1, total: 1 },
] };
const rep = ok(await admin.appel(`enfants/${s.id}/reprise`, "POST", { rubrique: "6e", sauvegarde }), "reprise");
assert.equal(rep.seances, 2); assert.equal(rep.ignorees, 1); assert.equal(rep.etoiles, 5 + 3 + 3);
assert.equal((await admin.appel(`enfants/${s.id}/reprise`, "POST", { rubrique: "6e", sauvegarde })).statut, 409, "pas de reprise en double");
const TS = ok(await admin.appel(`enfants/${s.id}`), "tableau 6e");
assert.equal(TS.rubriques[0].semaine, 6); assert.equal(TS.grade.nom, "Apprenti scribe"); assert.equal(TS.etoiles, 11);

// Nouveau code : l'ancien ne marche plus, la session de l'enfant est fermée.
const nc = ok(await admin.appel(`comptes/${a.id}`, "PATCH", { nouveau_secret: true }), "nouveau code");
assert.equal((await enfantA.appel(`enfants/${a.id}`)).statut, 401, "session fermée après nouveau code");
assert.equal((await client().connexion(a.identifiant, a.code)).statut, 401);
ok(await client().connexion(a.identifiant, nc.code), "connexion avec le nouveau code");

// Désactivation.
ok(await admin.appel(`comptes/${s.id}`, "PATCH", { actif: false }), "désactivation");
assert.equal((await client().connexion(s.identifiant, s.code)).statut, 401, "compte désactivé");

console.log("Parcours complet : tout est bon.");

// --- La pêche : rubrique ouverte à un enfant, quiz validé (+5), prise, sac ; fermée à un autre.
const pe = ok(await admin.appel("comptes", "POST", { role: "enfant", prenom: `Peche${suffixe}`, classe: "6e", rubriques: ["6e", "peche"] }), "enfant pêcheur");
const pecheur = client();
ok(await pecheur.connexion(pe.identifiant, pe.code), "connexion pêcheur");
const q1 = ok(await pecheur.appel(`enfants/${pe.id}/peche/quiz`, "POST", { chapitre: 0, score: 3, total: 5 }), "quiz raté");
assert.equal(q1.gain, 0);
const q2 = ok(await pecheur.appel(`enfants/${pe.id}/peche/quiz`, "POST", { chapitre: 0, score: 4, total: 5 }), "quiz réussi");
assert.equal(q2.gain, 5);
const q3 = ok(await pecheur.appel(`enfants/${pe.id}/peche/quiz`, "POST", { chapitre: 0, score: 5, total: 5 }), "quiz refait");
assert.equal(q3.gain, 0, "pas d'étoiles deux fois pour le même chapitre");
const pr = ok(await pecheur.appel(`enfants/${pe.id}/peche/prises`, "POST", { espece: "Le gardon", taille: 18, lieu: "l'étang", remis: true }), "prise");
assert.ok(pr.nouveauxBadges.includes("prise1"));
ok(await pecheur.appel(`enfants/${pe.id}/peche/sac`, "PUT", { coches: [0, 2, 2] }), "sac");
let PD = ok(await pecheur.appel(`enfants/${pe.id}/peche`), "carnet");
assert.equal(PD.prises.length, 1); assert.deepEqual(PD.sac, [0, 2]); assert.equal(PD.chapitres[0].meilleur, 5);
ok(await pecheur.appel(`enfants/${pe.id}/peche/prises/${PD.prises[0].id}`, "DELETE", {}), "effacer prise");
PD = ok(await pecheur.appel(`enfants/${pe.id}/peche`), "carnet vide");
assert.equal(PD.prises.length, 0);
assert.equal((await pecheur.appel(`enfants/${pe.id}/seances`, "POST", { rubrique: "peche", matiere: "m", score: 1, total: 1 })).statut, 400);
const TP = ok(await pecheur.appel(`enfants/${pe.id}`), "tableau pêcheur");
assert.equal(TP.peche.chapitres, 1); assert.equal(TP.etoiles, 5);
const nc2 = ok(await admin.appel(`comptes/${a.id}`, "PATCH", { code: "4826" }), "code choisi");
const enfantA2 = client(); ok(await enfantA2.connexion(a.identifiant, "4826"), "connexion code choisi");
assert.equal((await enfantA2.appel(`enfants/${a.id}/peche/quiz`, "POST", { chapitre: 0, score: 5, total: 5 })).statut, 400, "pêche fermée");
console.log("Pêche : tout est bon.");

// --- Le compte famille : invitation, inscription, enfants gérés par les parents, cloisonnement.
const inv = ok(await admin.appel("invitations", "POST", { nom_famille: `Famille ${suffixe}` }), "invitation nouvelle famille");
assert.match(inv.code, /^[A-Z2-9]{4}-[A-Z2-9]{4}$/);
const mdpParent = `essai-${suffixe}-parent`;
const p1 = client();
assert.equal((await p1.appel("inscription", "POST", { code: "AAAA-BBBB", prenom: "X", identifiant: `x${suffixe}`, mot_de_passe: mdpParent })).statut, 400, "code faux refusé");
const ins = ok(await p1.appel("inscription", "POST", { code: inv.code.toLowerCase().replace("-", " "), prenom: "Claire", nom: "Test", identifiant: `claire.${suffixe}`, mot_de_passe: mdpParent }), "inscription");
assert.equal(ins.role, "parent");
assert.equal((await client().appel("inscription", "POST", { code: inv.code, prenom: "Y", identifiant: `y${suffixe}`, mot_de_passe: mdpParent })).statut, 400, "code déjà utilisé");
let F1 = ok(await p1.appel("famille"), "ma famille");
assert.equal(F1.famille.nom, `Famille ${suffixe}`); assert.equal(F1.parents.length, 1);
const e1 = ok(await p1.appel("famille/enfants", "POST", { prenom: "Léa", annee_naissance: 2017, classe: "ce2", rubriques: ["ce2", "peche"], code: "1357" }), "parent crée un enfant");
assert.equal(e1.code, "1357"); assert.match(e1.identifiant, /^lea/);
const lea = client(); ok(await lea.connexion(e1.identifiant, "1357"), "l'enfant se connecte");
assert.deepEqual(ok(await p1.appel("moi"), "moi").enfants.map((e) => e.id), [e1.id]);
ok(await p1.appel(`enfants/${e1.id}`), "le parent voit le tableau");
ok(await p1.appel(`famille/enfants/${e1.id}`, "PATCH", { rubriques: ["ce2"] }), "le parent change les rubriques");
const nc3 = ok(await p1.appel(`famille/enfants/${e1.id}`, "PATCH", { nouveau_code: true }), "nouveau code par le parent");
assert.equal((await lea.appel(`enfants/${e1.id}`)).statut, 401, "ancienne session fermée");
ok(await client().connexion(e1.identifiant, nc3.code), "connexion avec le nouveau code");
assert.equal((await p1.appel(`enfants/${a.id}`)).statut, 404, "un parent ne voit pas un enfant d'une autre famille");
assert.equal((await p1.appel(`famille/enfants/${a.id}`, "PATCH", { rubriques: ["ce2"] })).statut, 404, "ni ne le modifie");
assert.equal((await p1.appel("comptes")).statut, 403);
assert.equal((await p1.appel("familles")).statut, 403);

// L'autre parent rejoint la famille avec un code donné par le premier.
const inv2 = ok(await p1.appel("invitations", "POST", {}), "invitation de l'autre parent");
const p2 = client();
ok(await p2.appel("inscription", "POST", { code: inv2.code, prenom: "Marc", nom: "Test", identifiant: `marc.${suffixe}`, mot_de_passe: mdpParent }), "inscription de l'autre parent");
F1 = ok(await p2.appel("famille"), "famille vue par l'autre parent");
assert.equal(F1.parents.length, 2); assert.deepEqual(F1.enfants.map((e) => e.id), [e1.id]);

// L'administrateur voit la famille ; un parent supprime son enfant.
assert.ok(ok(await admin.appel("familles"), "familles").some((f) => f.id === F1.famille.id));
ok(await admin.appel(`famille?famille=${F1.famille.id}`), "l'administrateur ouvre la famille");
ok(await p2.appel(`famille/enfants/${e1.id}`, "DELETE", {}), "suppression de l'enfant");
assert.equal((await client().connexion(e1.identifiant, nc3.code)).statut, 401, "l'enfant supprimé ne se connecte plus");
assert.equal(ok(await p1.appel("famille"), "famille après suppression").enfants.length, 0);
console.log("Compte famille : tout est bon.");

// --- L'univers des grades : l'enfant le choisit, un parent peut aussi.
const th = ok(await admin.appel("comptes", "POST", { role: "enfant", prenom: `Theo${suffixe}`, classe: "ce2", rubriques: ["ce2"] }), "enfant pour l'univers");
const theo = client(); ok(await theo.connexion(th.identifiant, th.code), "connexion");
assert.equal(ok(await theo.appel(`enfants/${th.id}`), "tableau").grade.nom, "Moussaillon");
const gt = ok(await theo.appel(`enfants/${th.id}/theme`, "PUT", { theme: "ferme" }), "choix de l'univers");
assert.equal(gt.grade.nom, "Apprenti fermier");
assert.equal(ok(await theo.appel(`enfants/${th.id}`), "tableau").enfant.theme, "ferme");
assert.equal((await theo.appel(`enfants/${th.id}/theme`, "PUT", { theme: "pirates" })).statut, 400, "univers inconnu refusé");
assert.equal((await theo.appel(`enfants/${a.id}/theme`, "PUT", { theme: "espace" })).statut, 404, "pas l'univers d'un autre");
console.log("Univers : tout est bon.");

// --- Suppression d'un parent par l'administrateur (les enfants de la famille restent).
const pSup = ok(await admin.appel("comptes", "POST", { role: "parent", prenom: `ASupprimer${suffixe}` }), "parent à supprimer");
const cSup = client(); ok(await cSup.connexion(pSup.identifiant, pSup.mot_de_passe_provisoire), "connexion du parent");
ok(await admin.appel(`comptes/${pSup.id}`, "DELETE", {}), "suppression du parent");
assert.equal((await cSup.appel("moi")).statut, 401, "sa session est fermée");
assert.equal((await client().connexion(pSup.identifiant, pSup.mot_de_passe_provisoire)).statut, 401, "il ne se connecte plus");
assert.equal((await admin.appel("comptes/1", "DELETE", {})).statut, 400, "l'administrateur ne se supprime pas");
console.log("Suppression d'un parent : tout est bon.");
