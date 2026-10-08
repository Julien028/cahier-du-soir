# Le cahier du soir — site commun des enfants

Un seul site pour les devoirs du soir et la pêche, avec des comptes : Julien (administrateur),
les enfants, les parents. Il remplace à terme `andre-ce2`, `simon-6eme` et `carnet-de-peche`.

Julien Pichot n'est pas développeur. Réponds en français, explique ce que tu fais en
mots simples, et évite le jargon quand un mot courant suffit.

## Décisions (Julien, 08/10/2026)

- Nom et adresse : **cahier-du-soir** → https://cahier-du-soir.pages.dev (à ne plus changer
  une fois installé sur les tablettes).
- Construit **comme le site des heures** (`../Site heures et Pluviométrie/site`) :
  Cloudflare Pages + Functions, base D1, sessions par cookie, mots de passe hachés (PBKDF2),
  journal des actions. Compte Cloudflare `bretonvilliers28@gmail.com`, GitHub `Julien028`,
  dépôt privé `Julien028/cahier-du-soir`, branche `master`.
- Comptes :
  - **administrateur** (Julien) : crée tous les comptes, voit tout. Seul à créer des comptes.
  - **enfant** : prénom, âge, classe, rubriques choisies (sa classe, pêche…). Connexion
    en touchant son prénom puis un **code de 4 chiffres** ; la tablette s'en souvient.
    Ne voit que ses propres résultats.
  - **parent** : suit la progression de ses enfants, et seulement des siens.
- Rubriques : une par classe (programme de l'année), plus la pêche. Un enfant peut ouvrir
  le programme de la classe suivante.
- Première version : **CE2, CM1 et 6e**, plus la pêche. Les autres classes (CP → 3e)
  s'ajoutent ensuite une par une.
- Motivation, dès le départ : étoiles, grades (mythologie grecque pour le collège), badges,
  carnet des erreurs (questions ratées qui reviennent), récompense réelle fixée par
  l'administrateur ou le parent (jauge d'étoiles), mission sans écran en fin de séance,
  message « c'est fini pour ce soir », mot d'encouragement des parents.
  But : un écran court et utile, qui se termine — pas un jeu sans fin.

## Reprise de l'existant

- Cahier d'André (CE2) : `../andre-ce2/public/index.html`, clé `cahierCE2:andre`.
- Cahier de Simon (6e, version 4) : `../simon-6eme/public/index.html`, clé `cahier6e:simon`.
  Les deux : `etat={semaine, jour, historique:[{date,semaine,jour,mat,score,total}], modeIA}`,
  bouton « Enregistrer une sauvegarde » (fichier JSON) → à importer dans le nouveau site.
- Carnet de pêche : `../carnet-de-peche/public/index.html`, clé `peche:carnet`,
  `etat={quiz:{}, prises:[{espece,taille,date,lieu,remis}], sac:[]}`, sans sauvegarde :
  prévoir une reprise des prises. Le carnet devient personnel à chaque enfant.
- Les anciens sites restent en ligne tant que la reprise n'est pas faite et vérifiée.

## Où est quoi

| Élément | Contenu |
|---|---|
| `public/` | Les pages. `js/app.js` (connexion), `js/enfant.js` (espace enfant), `js/adultes.js` (parents, administrateur), `js/seance.js` (déroulé des questions), `js/regles.js` (étoiles, grades, badges, missions : lu aussi par le serveur). |
| `public/programmes/` | Un module par classe. `ce2.js` et `6e.js` sont **recopiés** des anciens cahiers par `npm run programmes` : les modifier là-bas, puis relancer. |
| `functions/api/` | Le serveur : `connexion`, `deconnexion`, `moi`, `comptes` (administrateur), `enfants/[[chemin]].js` (tout ce qui concerne un enfant). |
| `src/` | Outils du serveur : sessions et mots de passe (repris du site des heures), comptes, tableau de bord d'un enfant. |
| `db/schema.sql` | La base. |
| `tests/` | `npm test` (règles, programmes) ; `tests/parcours.mjs` : parcours complet contre le site lancé sur le poste. |
| `essais/` | Comptes et journal de la base **locale** de test. Pas sur GitHub. |

Sur le poste : `npm run dev` (port **8795** : le 8790 est déjà pris par un autre site), base locale
créée par `npm run db:schema:local`, administrateur local par `npm run compte`.

## Règles du jeu (voir `public/js/regles.js`)

- Une séance par soir et par rubrique ; la position (semaine, séance) avance après chaque séance.
- +1 ⭐ par bonne réponse, +3 si sans faute, +2 par erreur corrigée, +2 pour la mission sans écran.
- Les questions ratées reviennent 2 jours plus tard (5 au plus à la fois), puis 3, puis 4 jours.
- Grades : 0, 40, 120, 250, 450, 700, 1000 étoiles. Badges calculés, jamais stockés.

## Étapes

1. Comptes + CE2 et 6e (avec la motivation) + reprise des progressions d'André et Simon. **Construite et testée sur le poste le 08/10/2026, pas encore en ligne.**
2. Pêche, avec un carnet de prises par enfant.
3. CM1, puis les autres classes.
