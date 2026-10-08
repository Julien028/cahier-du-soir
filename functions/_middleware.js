// Pour toutes les pages : le site contient des données d'enfants.
// Pas de moteur de recherche, pas d'affichage dans le cadre d'un autre site.
export async function onRequest({ next }) {
  const reponse = await next();
  const r = new Response(reponse.body, reponse);
  r.headers.set("x-robots-tag", "noindex, nofollow");
  r.headers.set("x-frame-options", "DENY");
  r.headers.set("referrer-policy", "same-origin");
  r.headers.set("x-content-type-options", "nosniff");
  return r;
}
