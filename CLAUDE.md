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
  - **administrateur** (Julien) : voit et modifie tout ; invite les nouvelles familles.
  - **enfant** : prénom, âge, classe, rubriques choisies (sa classe, pêche…). Connexion
    en touchant son prénom puis un **code de 4 chiffres** ; la tablette s'en souvient.
    Ne voit que ses propres résultats.
  - **parent** : suit la progression de ses enfants, et seulement des siens.
  - **Compte famille** (décidé le 08/10/2026) : une famille = ses parents et ses enfants. Un parent
    crée lui-même son espace avec un **code d'invitation** (donné par l'administrateur pour une
    nouvelle famille, ou par l'autre parent pour rejoindre la sienne ; usage unique, 30 jours).
    Les parents créent, modifient, mettent en pause et **suppriment** les enfants de leur famille,
    et choisissent leur code. Pas d'inscription libre.
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

- Les anciens sites (dossiers supprimés le 08/10/2026, copies dans `docs/anciens-sites/`, historique
  sur GitHub) :
- Cahier d'André (CE2) : `docs/anciens-sites/andre-ce2.html`, clé `cahierCE2:andre`.
- Cahier de Simon (6e, version 4) : `docs/anciens-sites/simon-6eme.html`, clé `cahier6e:simon`.
  Les deux : `etat={semaine, jour, historique:[{date,semaine,jour,mat,score,total}], modeIA}`,
  bouton « Enregistrer une sauvegarde » (fichier JSON) → à importer dans le nouveau site.
- Carnet de pêche : `docs/anciens-sites/carnet-de-peche.html`, clé `peche:carnet`,
  `etat={quiz:{}, prises:[{espece,taille,date,lieu,remis}], sac:[]}`, sans sauvegarde :
  prévoir une reprise des prises. Le carnet devient personnel à chaque enfant.
- Les anciens sites restent en ligne tant que la reprise n'est pas faite et vérifiée.

## En ligne

- Adresse : https://cahier-du-soir.pages.dev (Cloudflare Pages `cahier-du-soir`, créé par dépôt direct
  le 08/10/2026 : il ne peut pas être relié à GitHub, comme le site des heures).
- Base : D1 `cahier-du-soir` (WEUR), id dans `wrangler.toml`.
- Code : GitHub privé `Julien028/cahier-du-soir`, branche `master`.
- Après chaque modification : `npm test`, vérifier sur le poste (`npm run dev`), commit, `git push`,
  puis **`npm run deploy`** (la publication n'est pas automatique).
- Changement de la base : l'ajouter à `db/schema.sql` (rejouable) et, si c'est une colonne sur une
  table existante, écrire aussi `db/migrations/AAAA-MM-JJ-quoi.sql` ; passer `npm run db:schema`
  puis la migration. Migration `2026-10-08-familles.sql` passée en ligne le 08/10/2026.
- Sur ce poste, `curl` peut échouer (erreur 35, contrôle de révocation Windows hors ligne) :
  ajouter `--ssl-no-revoke`.
- Premier administrateur : `npm run compte -- --enligne` (Julien tape lui-même son mot de passe).
  Dans le terminal de Julien, wrangler n'est pas connecté : ajouter `--preparer`, puis passer
  `essais/compte-admin.sql` à la base depuis le terminal de Claude, et effacer le fichier.
  Compte `julien` créé ainsi le 08/10/2026.

## Où est quoi

| Élément | Contenu |
|---|---|
| `public/` | Les pages. `js/app.js` (connexion), `js/enfant.js` (espace enfant), `js/adultes.js` (parents, administrateur), `js/seance.js` (déroulé des questions), `js/regles.js` (étoiles, grades, badges, missions : lu aussi par le serveur). |
| `public/programmes/` | Un module par rubrique : `ce2.js`, `6e.js` (programme de l'année et banque d'exercices), `peche.js` (chapitres, poissons, quiz, sac). Seule source de ce contenu. |
| `public/js/peche.js` | L'écran de la pêche (aussi en aperçu, sans enregistrer). |
| `public/js/rubriques.js` | Onglet « Rubriques » de l'administrateur : toutes les classes et la pêche, à parcourir et essayer sans rien enregistrer. |
| `docs/anciens-sites/` | Les pages des anciens sites, pour mémoire. |
| `functions/api/` | Le serveur : `connexion`, `deconnexion`, `moi`, `inscription` (code d'invitation), `invitations`, `famille/[[chemin]].js` (un parent gère sa famille ; l'administrateur avec `?famille=ID`), `familles` et `comptes` (administrateur), `enfants/[[chemin]].js` (tout ce qui concerne un enfant). |
| `src/` | Outils du serveur : sessions et mots de passe (repris du site des heures), comptes, tableau de bord d'un enfant. |
| `db/schema.sql` | La base (complète, rejouable). `db/migrations/` : changements à passer une fois sur une base plus ancienne. |
| `tests/` | `npm test` (règles, programmes) ; `tests/parcours.mjs` : parcours complet contre le site lancé sur le poste. |
| `essais/` | Comptes et journal de la base **locale** de test. Pas sur GitHub. |

Sur le poste : `npm run dev` (port **8795** : le 8790 est déjà pris par un autre site), base locale
créée par `npm run db:schema:local`, administrateur local par `npm run compte`.

## Règles du jeu (voir `public/js/regles.js`)

- Une séance par soir et par rubrique ; la position (semaine, séance) avance après chaque séance.
- +1 ⭐ par bonne réponse, +3 si sans faute, +2 par erreur corrigée, +2 pour la mission sans écran.
- Les questions ratées reviennent 2 jours plus tard (5 au plus à la fois), puis 3, puis 4 jours.
- Grades : 0, 40, 120, 250, 450, 700, 1000 étoiles. Badges calculés, jamais stockés.

## Ajouter une rubrique

Une nouvelle classe : écrire `public/programmes/<code>.js` sur le modèle de `ce2.js` (même `export const programme`),
puis ajouter son code à `RUBRIQUES_PRETES` dans `public/js/regles.js`. Elle apparaît alors partout :
choix des rubriques d'un enfant, onglet Rubriques de l'administrateur, tests (`tests/programmes.test.mjs`
à compléter). Une rubrique hors classe : l'ajouter à `RUBRIQUES_LIBRES` et lui faire son écran (comme la pêche).

## Étapes

1. Comptes + CE2 et 6e (avec la motivation) + reprise des progressions d'André et Simon. **En ligne depuis le 08/10/2026.**
2. Pêche, avec un carnet de prises par enfant. **En ligne depuis le 08/10/2026.**
3. Toutes les classes du CP à la 3e, et « Maths in English » (3 niveaux : CP-CE2, CM1-6e, 5e-3e).
   **En ligne depuis le 08/10/2026.** Écrites par des assistants en parallèle, chacune contrôlée par
   `tests/verifier-programme.mjs` (forme, exactitude des réponses, au moins 300 énoncés différents).
4. Cours d'anglais en 4 niveaux (`anglais-1` à `anglais-4`) : leçon de la semaine (`lecon`) et questions
   à écouter (`audio`, lues par la voix du navigateur). **En ligne depuis le 08/10/2026.**
