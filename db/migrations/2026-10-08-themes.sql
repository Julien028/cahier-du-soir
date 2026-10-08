-- L'univers choisi par l'enfant (ferme, marin, espace…) pour ses grades (08/10/2026).
-- À passer UNE fois sur une base créée avant cette date :
--   npx wrangler d1 execute cahier-du-soir --remote --file=db/migrations/2026-10-08-themes.sql
ALTER TABLE comptes ADD COLUMN theme TEXT;
