-- Le compte famille (08/10/2026). À passer UNE fois sur une base créée avant cette date :
--   npx wrangler d1 execute cahier-du-soir --remote --file=db/migrations/2026-10-08-familles.sql
-- (une base neuve n'en a pas besoin : db/schema.sql contient déjà tout).
ALTER TABLE comptes ADD COLUMN famille_id INTEGER REFERENCES familles(id);
