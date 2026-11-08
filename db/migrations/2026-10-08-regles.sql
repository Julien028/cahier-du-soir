-- Les règles fixées par les parents pour chaque enfant (08/10/2026) :
-- {"defi": true, "mission": true, "repos": [0, 3]}  (repos : jours de la semaine, 0 = dimanche).
-- À passer UNE fois sur une base créée avant cette date :
--   npx wrangler d1 execute cahier-du-soir --remote --file=db/migrations/2026-10-08-regles.sql
ALTER TABLE comptes ADD COLUMN regles TEXT NOT NULL DEFAULT '{}';
