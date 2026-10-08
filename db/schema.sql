-- Le cahier du soir — base D1 (SQLite).
-- Dates en AAAA-MM-JJ, heure de Paris. Peut être rejoué sans risque (IF NOT EXISTS).

PRAGMA foreign_keys = ON;

-- Trois niveaux : administrateur (Julien), parent, enfant.
-- Un enfant se connecte avec son identifiant (son prénom, en minuscules) et un code de
-- 4 chiffres ; un adulte avec identifiant et mot de passe. Les deux sont gardés hachés.
-- Un compte ne se supprime pas, il se désactive : son historique reste.
CREATE TABLE IF NOT EXISTS comptes (
  id               INTEGER PRIMARY KEY,
  identifiant      TEXT NOT NULL UNIQUE,
  prenom           TEXT NOT NULL,
  nom              TEXT NOT NULL DEFAULT '',
  role             TEXT NOT NULL CHECK (role IN ('administrateur', 'parent', 'enfant')),
  mot_de_passe     TEXT NOT NULL,
  annee_naissance  INTEGER,                 -- enfant : pour afficher son âge
  classe           TEXT,                    -- enfant : 'ce2', '6e'…
  rubriques        TEXT NOT NULL DEFAULT '[]', -- enfant : JSON, ex. ["ce2","cm1"]
  couleur          TEXT NOT NULL DEFAULT '#1E3A6E',
  actif            INTEGER NOT NULL DEFAULT 1,
  cree_le          TEXT NOT NULL DEFAULT (datetime('now')),
  cree_par         TEXT
);

-- Quels enfants chaque parent peut suivre.
CREATE TABLE IF NOT EXISTS liens_parents (
  parent_id INTEGER NOT NULL REFERENCES comptes(id),
  enfant_id INTEGER NOT NULL REFERENCES comptes(id),
  PRIMARY KEY (parent_id, enfant_id)
);

CREATE TABLE IF NOT EXISTS sessions (
  jeton     TEXT PRIMARY KEY,
  compte_id INTEGER NOT NULL REFERENCES comptes(id),
  cree_le   TEXT NOT NULL DEFAULT (datetime('now')),
  expire_le TEXT NOT NULL
);

-- Toute action notable : qui, quand, quoi.
CREATE TABLE IF NOT EXISTS journal (
  id     INTEGER PRIMARY KEY,
  quand  TEXT NOT NULL DEFAULT (datetime('now')),
  qui    TEXT NOT NULL,
  quoi   TEXT NOT NULL,
  cible  TEXT,
  detail TEXT
);
CREATE INDEX IF NOT EXISTS journal_quoi ON journal (quoi, cible, quand);

-- Où en est l'enfant dans chaque rubrique (semaine 1 à 36, séance 0 à 5 de la semaine).
CREATE TABLE IF NOT EXISTS progression (
  enfant_id INTEGER NOT NULL REFERENCES comptes(id),
  rubrique  TEXT NOT NULL,
  semaine   INTEGER NOT NULL DEFAULT 1,
  jour      INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (enfant_id, rubrique)
);

-- Chaque séance faite. « importe » = reprise d'un ancien cahier (andre-ce2, simon-6eme).
CREATE TABLE IF NOT EXISTS seances (
  id        INTEGER PRIMARY KEY,
  enfant_id INTEGER NOT NULL REFERENCES comptes(id),
  rubrique  TEXT NOT NULL,
  date      TEXT NOT NULL,
  semaine   INTEGER NOT NULL,
  jour      INTEGER NOT NULL,
  matiere   TEXT NOT NULL,
  score     INTEGER NOT NULL,
  total     INTEGER NOT NULL,
  importe   INTEGER NOT NULL DEFAULT 0,
  cree_le   TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS seances_enfant ON seances (enfant_id, date);

-- Le carnet des erreurs : la question ratée, telle quelle, revient quelques jours plus tard.
CREATE TABLE IF NOT EXISTS erreurs (
  id        INTEGER PRIMARY KEY,
  enfant_id INTEGER NOT NULL REFERENCES comptes(id),
  rubrique  TEXT NOT NULL,
  matiere   TEXT NOT NULL,
  question  TEXT NOT NULL,           -- JSON de la question
  revoir_le TEXT NOT NULL,
  essais    INTEGER NOT NULL DEFAULT 0,
  corrigee  INTEGER NOT NULL DEFAULT 0,
  cree_le   TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS erreurs_enfant ON erreurs (enfant_id, corrigee, revoir_le);

-- Les étoiles gagnées : une ligne par gain, le total est la somme.
CREATE TABLE IF NOT EXISTS etoiles (
  id        INTEGER PRIMARY KEY,
  enfant_id INTEGER NOT NULL REFERENCES comptes(id),
  date      TEXT NOT NULL,
  nombre    INTEGER NOT NULL,
  raison    TEXT NOT NULL          -- seance, sans_faute, erreur_corrigee, mission, reprise
);
CREATE INDEX IF NOT EXISTS etoiles_enfant ON etoiles (enfant_id);

-- La mission sans écran du jour, cochée par l'enfant.
CREATE TABLE IF NOT EXISTS missions (
  enfant_id INTEGER NOT NULL REFERENCES comptes(id),
  date      TEXT NOT NULL,
  texte     TEXT NOT NULL,
  PRIMARY KEY (enfant_id, date)
);

-- La récompense réelle : « 100 étoiles = une sortie au cinéma ». Une seule en cours par enfant.
CREATE TABLE IF NOT EXISTS recompenses (
  id         INTEGER PRIMARY KEY,
  enfant_id  INTEGER NOT NULL REFERENCES comptes(id),
  libelle    TEXT NOT NULL,
  objectif   INTEGER NOT NULL,
  depart     INTEGER NOT NULL,       -- étoiles déjà gagnées au moment où on la fixe
  fixee_par  TEXT NOT NULL,
  fixee_le   TEXT NOT NULL DEFAULT (datetime('now')),
  donnee_le  TEXT                    -- rempli quand l'adulte l'a donnée
);

-- Les petits mots des parents, lus par l'enfant en ouvrant son cahier.
CREATE TABLE IF NOT EXISTS mots (
  id        INTEGER PRIMARY KEY,
  enfant_id INTEGER NOT NULL REFERENCES comptes(id),
  auteur    TEXT NOT NULL,
  texte     TEXT NOT NULL,
  cree_le   TEXT NOT NULL DEFAULT (datetime('now')),
  lu_le     TEXT
);

-- La pêche, propre à chaque enfant (ajouté le 08/10/2026).
-- Les chapitres lus et leur quiz : validé à 4 bonnes réponses sur 5.
CREATE TABLE IF NOT EXISTS peche_chapitres (
  enfant_id INTEGER NOT NULL REFERENCES comptes(id),
  chapitre  INTEGER NOT NULL,          -- rang dans CHAPITRES (public/programmes/peche.js)
  meilleur  INTEGER NOT NULL DEFAULT 0,
  reussi    INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (enfant_id, chapitre)
);
-- Le carnet des prises.
CREATE TABLE IF NOT EXISTS peche_prises (
  id        INTEGER PRIMARY KEY,
  enfant_id INTEGER NOT NULL REFERENCES comptes(id),
  espece    TEXT NOT NULL,
  taille    INTEGER,                  -- en cm
  date      TEXT NOT NULL,
  lieu      TEXT NOT NULL DEFAULT '',
  remis     INTEGER NOT NULL DEFAULT 1,
  cree_le   TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS peche_prises_enfant ON peche_prises (enfant_id, date);
-- Le sac : les objets déjà cochés avant de partir (rangs dans SAC).
CREATE TABLE IF NOT EXISTS peche_sac (
  enfant_id INTEGER PRIMARY KEY REFERENCES comptes(id),
  coches    TEXT NOT NULL DEFAULT '[]'
);
