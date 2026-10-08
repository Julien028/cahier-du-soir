// Outils communs aux routes de functions/api/.
// Ce fichier est hors de functions/ expres : tout ce qui s'y trouve devient une route.

export function json(donnees, { status = 200 } = {}) {
  return new Response(JSON.stringify(donnees), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });
}

export const erreur = (status, message) => json({ erreur: message }, { status });

// --- Dates. Toujours au format AAAA-MM-JJ, calculees sans fuseau (midi UTC) pour qu'un
// changement d'heure ne decale jamais un jour.
export const dateValide = (s) => /^\d{4}-\d{2}-\d{2}$/.test(s) && !isNaN(Date.parse(s + "T12:00:00Z"))
  && new Date(s + "T12:00:00Z").toISOString().slice(0, 10) === s;

// Le jour qu'il est a Paris : les Workers tournent en UTC.
export const aujourdhui = (instant = new Date()) =>
  new Intl.DateTimeFormat("fr-CA", { timeZone: "Europe/Paris", year: "numeric", month: "2-digit", day: "2-digit" }).format(instant);

export const ajouterJours = (date, n) => {
  const d = new Date(date + "T12:00:00Z");
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
};

// Lundi de la semaine qui contient la date.
export const lundiDe = (date) => ajouterJours(date, -((new Date(date + "T12:00:00Z").getUTCDay() + 6) % 7));

// Numero de semaine ISO, celui des calendriers francais.
export function numeroSemaine(date) {
  const jeudi = ajouterJours(lundiDe(date), 3);
  const premierJanvier = jeudi.slice(0, 4) + "-01-01";
  return Math.floor((Date.parse(jeudi) - Date.parse(premierJanvier)) / (7 * 86400000)) + 1;
}

export const corpsJson = (request) => request.json().catch(() => null);
