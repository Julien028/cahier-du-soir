import { json } from "../../src/outils.js";
import { lireSession, cookieSession } from "../../src/session.js";

// POST /api/deconnexion -> efface la session.
export async function onRequestPost({ request, env }) {
  const session = await lireSession(request, env);
  if (session) await env.DB.prepare("DELETE FROM sessions WHERE jeton = ?").bind(session.jeton).run();
  const reponse = json({ ok: true });
  reponse.headers.set("set-cookie", cookieSession(""));
  return reponse;
}
