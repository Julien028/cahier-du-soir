// Programme de CM2 : écrit le 08/10/2026 (cycle 3, programmes en vigueur à la rentrée 2026).
// C'est la seule source : on le modifie ici. Même architecture que 6e.js.

/* =========================================================
   1. LE PROGRAMME DE CM2 — 36 SEMAINES
   t = étiquettes de sélection des exercices :
       maths | français | anglais | sciences | histoire-géo
   ========================================================= */
const SEMAINES = [
{n:1,p:1,m:"Les grands nombres jusqu'au milliard : lire, écrire, décomposer",f:"Les classes de mots",a:"Se présenter : name, age, country — le verbe to be",s:"Les états de la matière",h:"Se repérer dans le temps : siècles et frise chronologique",t:"grandsnombres|classes|tobe|matiere|reperes"},
{n:2,p:1,m:"Comparer, ranger, encadrer les grands nombres",f:"Types et formes de phrases",a:"La famille — have got",s:"Les changements d'état de l'eau",h:"Se déplacer au quotidien",t:"grandsnombres|phrase|family|matiere|deplacer"},
{n:3,p:1,m:"Addition et soustraction posées, ordre de grandeur",f:"Le sujet et l'accord du verbe",a:"Les nombres jusqu'à 100 et la date",s:"Les mélanges et les solutions",h:"1848 : la IIe République et le suffrage universel masculin",t:"addsub|accordsv|numbers|melanges|r1848"},
{n:4,p:1,m:"La multiplication posée par un nombre à 2 ou 3 chiffres",f:"Le présent de l'indicatif",a:"L'école : objets et matières",s:"Séparer les constituants d'un mélange",h:"Se déplacer en France et en Europe",t:"mult|present|school|melanges|deplacer"},
{n:5,p:1,m:"Les fractions : lire, écrire, comparer à 1",f:"Les compléments d'objet : COD et COI",a:"Dire l'heure",s:"Les sources d'énergie",h:"1870 : la IIIe République s'installe",t:"fractions|cod|time|energie|troisieme"},
{n:6,p:1,m:"Droites perpendiculaires, parallèles et angles",f:"L'imparfait de l'indicatif",a:"La nourriture : I like / I don't like",s:"Énergies renouvelables et économies d'énergie",h:"EMC : droits et devoirs de l'enfant",t:"angles|imparfait|food|energie|emc"},
{n:7,p:1,m:"Bilan de la période 1",f:"Bilan : homophones a/à, et/est, son/sont, on/ont",a:"Halloween et la culture britannique",s:"Le circuit électrique",h:"Bilan : la République au XIXe siècle",t:"bilan1|homophones|culture|circuits|r1848"},
{n:8,p:2,m:"La division euclidienne : quotient et reste",f:"Le futur simple",a:"La routine : le present simple",s:"Conducteurs, isolants, circuits en série et en dérivation",h:"L'école de Jules Ferry",t:"division|futur|routine|circuits|ecole"},
{n:9,p:2,m:"Comparer et encadrer des fractions",f:"L'attribut du sujet et les verbes d'état",a:"La maison et les prépositions de lieu",s:"La digestion",h:"Se déplacer d'un continent à l'autre",t:"fraccompare|attribut|house|nutrition|deplacer"},
{n:10,p:2,m:"Fractions décimales et nombres décimaux jusqu'aux millièmes",f:"Le passé simple (3e personne)",a:"Les animaux",s:"Bien se nourrir",h:"La laïcité et la loi de 1905",t:"decimaux|passesimple|animals|nutrition|laicite"},
{n:11,p:2,m:"Comparer, ranger, encadrer et arrondir des décimaux",f:"Les compléments circonstanciels : lieu, temps, manière",a:"Les vêtements et les couleurs",s:"Respiration et circulation sanguine",h:"Le droit de vote, des hommes aux femmes",t:"compdec|cc|clothes|corps|vote"},
{n:12,p:2,m:"Les triangles particuliers",f:"Les accords dans le groupe nominal",a:"Can / can't : ce que je sais faire",s:"Les mouvements du corps : os, muscles, articulations",h:"EMC : les symboles de la République",t:"triangles|accordsgn|can|corps|emc"},
{n:13,p:2,m:"Longueurs : conversions et périmètres",f:"Vocabulaire : familles de mots, préfixes, suffixes",a:"Christmas",s:"La reproduction des animaux",h:"Communiquer grâce à Internet : un monde de réseaux",t:"perimetre|vocab|culture|reproduction|internet"},
{n:14,p:2,m:"Bilan de la période 2",f:"Bilan : les temps de l'indicatif",a:"Bilan de la période 2",s:"La reproduction des plantes et la puberté",h:"Bilan : le temps de la République",t:"bilan2|conjug|routine|reproduction|ecole"},
{n:15,p:3,m:"Additionner et soustraire des décimaux",f:"Le passé composé",a:"Le corps",s:"Les chaînes alimentaires",h:"L'âge industriel : machines et énergies",t:"adddec|passecompose|body|ecosysteme|industrie"},
{n:16,p:3,m:"Multiplier un décimal par un entier, par 10, 100, 1000",f:"L'accord du participe passé avec être",a:"Le temps qu'il fait, les saisons et les mois",s:"Les écosystèmes",h:"Usines, mines et ouvriers au XIXe siècle",t:"multdec|ppetre|weather|ecosysteme|industrie"},
{n:17,p:3,m:"Les quadrilatères : carré, rectangle, losange",f:"Le plus-que-parfait",a:"Sports et loisirs",s:"Le système solaire",h:"Communiquer d'un bout à l'autre du monde",t:"quadrilateres|plusqueparfait|hobbies|terre|internet"},
{n:18,p:3,m:"Fraction d'une quantité et sommes de fractions",f:"Homophones : ces/ses, c'est/s'est, ou/où, la/l'a/là",a:"Present continuous : what are you doing ?",s:"Jour, nuit et saisons",h:"La ville industrielle et le chemin de fer",t:"fracquantite|homophones|continuous|terre|industrie"},
{n:19,p:3,m:"Aires du carré et du rectangle",f:"Phrase simple et phrase complexe",a:"En ville : lieux et directions",s:"Les séismes",h:"Tous connectés ? Les inégalités d'accès à Internet",t:"aire|phrasecomplexe|town|seismes|internet"},
{n:20,p:3,m:"Le cercle : centre, rayon, diamètre",f:"Sens propre, sens figuré, synonymes et contraires",a:"Faire les courses : quantités et prix",s:"Les volcans",h:"EMC : bien se comporter sur Internet",t:"cercle|sens|food|volcans|emc"},
{n:21,p:3,m:"Bilan de la période 3",f:"Bilan : temps composés et accords",a:"Bilan de la période 3",s:"Bilan : la planète Terre",h:"Bilan : l'âge industriel",t:"bilan3|conjug|continuous|terre|industrie"},
{n:22,p:4,m:"Diviser un décimal par un entier ; division décimale",f:"L'impératif présent",a:"Le passé : was / were",s:"Les objets techniques : besoins et fonctions",h:"La Première Guerre mondiale (1914-1918)",t:"divdec|imperatif|past|technique|grandeguerre"},
{n:23,p:4,m:"La proportionnalité : tableaux, recettes, prix",f:"Le conditionnel présent (découverte)",a:"Le passé : verbes réguliers et irréguliers",s:"L'évolution des objets techniques",h:"La vie des poilus et l'arrière",t:"proportionnalite|conditionnel|past|technique|grandeguerre"},
{n:24,p:4,m:"Les pourcentages simples",f:"Les figures de style : comparaison, métaphore, personnification",a:"Le Royaume-Uni et ses pays",s:"Les matériaux",h:"La Seconde Guerre mondiale (1939-1945)",t:"pourcentage|figures|culture|materiaux|ww2"},
{n:25,p:4,m:"Échelles, plans et cartes",f:"Les pronoms personnels",a:"Comparer : bigger, the biggest",s:"Classer les êtres vivants",h:"Occupation, Résistance et Libération",t:"echelle|pronoms|compare|classification|ww2"},
{n:26,p:4,m:"La symétrie axiale",f:"Accord sujet-verbe : les cas difficiles",a:"Ma maison idéale",s:"Les déchets et le recyclage",h:"Mieux habiter : la ville durable",t:"symetrie|accordsv|house|environnement|habiter"},
{n:27,p:4,m:"Les durées : calculer, convertir",f:"Homophones : mes/mais, ce/se, leur/leurs",a:"Mes loisirs préférés",s:"L'eau, une ressource à protéger",h:"Mieux habiter : recycler et réduire ses déchets",t:"duree|homophones|hobbies|environnement|habiter"},
{n:28,p:4,m:"Bilan de la période 4",f:"Bilan : imparfait et passé simple dans le récit",a:"Bilan de la période 4",s:"Bilan : objets et matériaux",h:"Bilan : les guerres mondiales",t:"bilan4|recit|compare|materiaux|grandeguerre"},
{n:29,p:5,m:"Volumes : compter des cubes ; contenances",f:"Révision : les fonctions dans la phrase",a:"Révision : la famille et les présentations",s:"Révision : la matière et les mélanges",h:"La construction européenne",t:"volume|fonctions|family|melanges|europe"},
{n:30,p:5,m:"Masses et contenances : conversions",f:"Révision : tous les temps de l'indicatif",a:"Révision : jours, mois et heure",s:"Révision : l'énergie et l'électricité",h:"L'Union européenne aujourd'hui",t:"conversions|conjug|time|circuits|europe"},
{n:31,p:5,m:"Programmes de construction",f:"Révision : les accords",a:"Révision : la ville",s:"Révision : le corps humain",h:"Mieux habiter : la nature en ville",t:"construction|accords|town|corps|habiter"},
{n:32,p:5,m:"Problèmes à plusieurs étapes",f:"Révision : vocabulaire et sens des mots",a:"Révision : can et les animaux",s:"Révision : le vivant et son environnement",h:"EMC : les institutions de la République",t:"problemes|sens|can|ecosysteme|emc"},
{n:33,p:5,m:"Calcul mental : les automatismes",f:"Révision : phrase simple et phrase complexe",a:"Les États-Unis",s:"Révision : séismes et volcans",h:"Révision : les droits des citoyens",t:"calcmental|phrasecomplexe|culture|volcans|vote"},
{n:34,p:5,m:"Révision : fractions et décimaux",f:"Révision : homophones",a:"Raconter ses vacances au passé",s:"La démarche scientifique",h:"Révision : du XIXe au XXe siècle",t:"revfrac|homophones|past|demarche|reperes"},
{n:35,p:5,m:"Bilan général du CM2 (1) : nombres et calculs",f:"Bilan général du CM2 (1) : conjugaison",a:"Bilan général : to be, have got, present simple",s:"Bilan général de sciences",h:"Révision de géographie",t:"bilanA|conjug|tobe|reproduction|deplacer"},
{n:36,p:5,m:"Bilan général du CM2 (2) : mesures et géométrie",f:"Bilan général du CM2 (2) : grammaire et orthographe",a:"Jeux et défis en anglais",s:"Défis sciences",h:"Défis histoire-géographie",t:"bilanB|bilanfr|animals|classification|europe"}
];
SEMAINES.forEach(s=>{const t=s.t.split("|");s.tm=t[0];s.tf=t[1];s.ta=t[2];s.ts=t[3];s.th=t[4];});

const JOURS=[
 {nom:"Lundi",mat:"m",min:15},
 {nom:"Mardi",mat:"f",min:15},
 {nom:"Mercredi",mat:"a",min:15},
 {nom:"Jeudi",mat:"m",min:15},
 {nom:"Vendredi",mat:"sh",min:15},
 {nom:"Week-end",mat:"rev",min:20}
];
const NOM_MAT={m:"Mathématiques",f:"Français",a:"Anglais",s:"Sciences et technologie",h:"Histoire-géographie et EMC",rev:"Révision de la semaine"};
const PERIODES=["Période 1 — septembre à octobre","Période 2 — novembre à décembre","Période 3 — janvier à février","Période 4 — mars à avril","Période 5 — mai à juillet"];
/* Le vendredi alterne : sciences les semaines impaires, histoire-géographie les semaines paires */
function matiereDuJour(sem,jour){const j=JOURS[jour];if(j.mat==="sh")return (sem%2===1)?"s":"h";return j.mat;}

/* =========================================================
   3. LA BANQUE D'EXERCICES (fonctionne sans connexion)
   ========================================================= */
const alea=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const pioche=t=>t[Math.floor(Math.random()*t.length)];
const vg=x=>String(x).replace(".",",");
function melange(t){const c=t.slice();for(let i=c.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[c[i],c[j]]=[c[j],c[i]];}return c;}
function qcm(enonce,bonne,fausses,expl){
  bonne=String(bonne);
  const vus=new Set([bonne]),gardees=[];
  for(const x of fausses){const c=String(x);if(!vus.has(c)){vus.add(c);gardees.push(c);}}
  const choix=melange([bonne,...gardees.slice(0,4)]);
  return {type:"qcm",enonce,choix,reponse:choix.indexOf(bonne),explication:expl};
}
function saisie(enonce,reponses,expl){return {type:"saisie",enonce,reponse:[...new Set(reponses.map(String))],explication:expl};}
function qcmChiffres(enonce,bonne,expl){
  const b=Number(bonne),f=[];
  while(f.length<3){const x=alea(0,9);if(x!==b&&!f.includes(x))f.push(x);}
  return qcm(enonce,String(b),f.map(String),expl);
}
function parTag(banque,tag){const f=banque.filter(x=>x.t===tag);const b=pioche(f.length?f:banque);return qcm(b.q,b.b,b.f,b.e);}

/* Écriture des nombres : espaces entre les classes, virgule décimale */
const ESP=" ";
function esp(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,ESP);}
function nb(x){const s=String(+(+x).toFixed(6));const [e,d]=s.split(".");return esp(e)+(d?","+d:"");}
function rep(x){const s=String(+(+x).toFixed(6));return [nb(x),s,vg(s)];}            // réponses acceptées pour un nombre
function euros(c){return (c/100).toFixed(2).replace(".",",")+" €";}                   // c en centimes
function repEuros(c){const v=c/100;return [...rep(v),(c/100).toFixed(2).replace(".",","),(c/100).toFixed(2)];}
const h2=(h,m)=>`${h} h ${String(m).padStart(2,"0")}`;
const pgcd=(a,b)=>b?pgcd(b,a%b):a;

/* Les nombres en lettres (orthographe traditionnelle) */
const UNITES=["zéro","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf"];
const DIZ=["","dix","vingt","trente","quarante","cinquante","soixante"];
function lettres99(n,final){
  if(n<20)return UNITES[n];
  const d=Math.floor(n/10),u=n%10;
  if(d===7)return u===1?"soixante et onze":"soixante-"+UNITES[10+u];
  if(d===9)return "quatre-vingt-"+UNITES[10+u];
  if(d===8)return u===0?(final?"quatre-vingts":"quatre-vingt"):"quatre-vingt-"+UNITES[u];
  if(u===0)return DIZ[d];
  if(u===1)return DIZ[d]+" et un";
  return DIZ[d]+"-"+UNITES[u];
}
function lettres999(n,final){
  const c=Math.floor(n/100),r=n%100;
  if(c===0)return lettres99(r,final);
  const cent=c===1?"cent":UNITES[c]+" cent"+(r===0&&final?"s":"");
  return r?cent+" "+lettres99(r,final):cent;
}
function lettres(n){
  if(n===0)return "zéro";
  if(n===1000000000)return "un milliard";
  const m=Math.floor(n/1e6),k=Math.floor(n/1000)%1000,r=n%1000,p=[];
  if(m)p.push(m===1?"un million":lettres999(m,true)+" millions");
  if(k)p.push(k===1?"mille":lettres999(k,false)+" mille");
  if(r)p.push(lettres999(r,true));
  return p.join(" ");
}
const FRN={2:["demi","demis"],3:["tiers","tiers"],4:["quart","quarts"],5:["cinquième","cinquièmes"],6:["sixième","sixièmes"],7:["septième","septièmes"],8:["huitième","huitièmes"],9:["neuvième","neuvièmes"],10:["dixième","dixièmes"],100:["centième","centièmes"]};
const lireFrac=(n,d)=>`${lettres(n)} ${n>1?FRN[d][1]:FRN[d][0]}`;

const PRENOMS=["Léa","Hugo","Inès","Malik","Chloé","Yanis","Jade","Noah","Aïcha","Lucas","Emma","Sacha","Camille","Nathan","Lina","Ethan","Zoé","Rayan","Manon","Adam","Louise","Ibrahim","Sofia","Théo","Nora","Gabriel","Maëlle","Kenzo"];
const prenom=()=>pioche(PRENOMS);
function deux(){const a=prenom();let b=prenom();while(b===a)b=prenom();return [a,b];}

/* ---------- MATHÉMATIQUES ---------- */
const RANGS=["unités","dizaines","centaines","unités de mille","dizaines de mille","centaines de mille","unités de millions","dizaines de millions","centaines de millions"];
const BANQUE_GEOM=[
 {t:"angles",q:"Deux droites perpendiculaires forment :",b:"quatre angles droits",f:["quatre angles aigus","deux angles plats","aucun angle"],e:"Perpendiculaires veut dire qui se coupent à angle droit. On le vérifie avec l'équerre."},
 {t:"angles",q:"Deux droites parallèles :",b:"ne se coupent jamais",f:["se coupent à angle droit","se coupent en un point","forment un angle aigu"],e:"Elles gardent toujours le même écart, comme les rails d'un train."},
 {t:"angles",q:"Quel instrument permet de vérifier qu'un angle est droit ?",b:"l'équerre",f:["le compas","la règle graduée","le rapporteur de vitesse"],e:"On place l'angle droit de l'équerre contre l'angle à vérifier."},
 {t:"angles",q:"À 3 h pile, les aiguilles d'une horloge forment un angle :",b:"droit",f:["aigu","obtus","plat"],e:"Un quart de tour sépare le 12 et le 3 : c'est un angle droit (90°)."},
 {t:"angles",q:"À 6 h pile, les aiguilles d'une horloge forment un angle :",b:"plat",f:["droit","aigu","obtus"],e:"Le 12 et le 6 sont opposés : les aiguilles sont alignées, c'est un angle plat (180°)."},
 {t:"angles",q:"À 1 h pile, les aiguilles d'une horloge forment un angle :",b:"aigu",f:["droit","obtus","plat"],e:"Entre le 12 et le 1, l'angle est plus petit qu'un angle droit : il est aigu."},
 {t:"angles",q:"À 5 h pile, les aiguilles d'une horloge forment un angle :",b:"obtus",f:["aigu","droit","plat"],e:"Entre le 12 et le 5, l'angle est plus grand qu'un angle droit mais plus petit qu'un angle plat : il est obtus."},
 {t:"angles",q:"Combien d'angles droits a un rectangle ?",b:"4",f:["2","1","0"],e:"Un rectangle a quatre angles droits."},
 {t:"angles",q:"Que signifie le symbole ⊥ entre deux droites ?",b:"elles sont perpendiculaires",f:["elles sont parallèles","elles sont égales","elles sont sécantes sans angle droit"],e:"(d1) ⊥ (d2) se lit « d1 est perpendiculaire à d2 »."},
 {t:"triangles",q:"Un triangle qui a un angle droit s'appelle :",b:"un triangle rectangle",f:["un triangle équilatéral","un triangle isocèle","un carré"],e:"On vérifie l'angle droit avec l'équerre."},
 {t:"triangles",q:"Un triangle équilatéral a :",b:"trois côtés de même longueur",f:["deux côtés de même longueur seulement","un angle droit","quatre côtés"],e:"Équi- veut dire égal : ses trois côtés sont égaux."},
 {t:"triangles",q:"Un triangle isocèle a :",b:"deux côtés de même longueur",f:["trois côtés de longueurs différentes","quatre angles droits","aucun côté égal"],e:"Les deux côtés égaux partent du même sommet, appelé sommet principal."},
 {t:"triangles",q:"Un triangle rectangle isocèle a :",b:"un angle droit et deux côtés égaux",f:["trois côtés égaux","deux angles droits","quatre côtés égaux"],e:"Il est à la fois rectangle (angle droit) et isocèle (deux côtés égaux)."},
 {t:"triangles",q:"Combien d'axes de symétrie a un triangle équilatéral ?",b:"3",f:["1","0","4"],e:"Chaque axe passe par un sommet et le milieu du côté opposé."},
 {t:"triangles",q:"Avec quels instruments construit-on un triangle dont on connaît les trois côtés ?",b:"la règle et le compas",f:["l'équerre seulement","le rapporteur seulement","la calculatrice"],e:"On trace un côté à la règle, puis on reporte les deux autres longueurs avec le compas."},
 {t:"quadrilateres",q:"Quel quadrilatère a quatre côtés égaux et quatre angles droits ?",b:"le carré",f:["le losange quelconque","le rectangle quelconque","le trapèze"],e:"Le carré est à la fois un rectangle et un losange."},
 {t:"quadrilateres",q:"Un losange a toujours :",b:"quatre côtés de même longueur",f:["quatre angles droits","deux côtés seulement","des diagonales de même longueur"],e:"Ses diagonales sont perpendiculaires et se coupent en leur milieu."},
 {t:"quadrilateres",q:"Les diagonales d'un rectangle :",b:"ont la même longueur et se coupent en leur milieu",f:["sont toujours perpendiculaires","n'ont jamais la même longueur","ne se coupent pas"],e:"C'est une propriété du rectangle ; elles ne sont perpendiculaires que si c'est un carré."},
 {t:"quadrilateres",q:"Les diagonales d'un losange :",b:"sont perpendiculaires et se coupent en leur milieu",f:["ont toujours la même longueur","sont parallèles","ne se coupent pas"],e:"On peut le vérifier avec l'équerre."},
 {t:"quadrilateres",q:"Un carré est aussi :",b:"un rectangle et un losange",f:["un triangle","un cercle","un pentagone"],e:"Il a quatre angles droits (rectangle) et quatre côtés égaux (losange)."},
 {t:"quadrilateres",q:"Un rectangle a :",b:"quatre angles droits et ses côtés opposés de même longueur",f:["quatre côtés égaux obligatoirement","trois angles droits","cinq côtés"],e:"Longueur et largeur : les côtés opposés sont égaux deux à deux."},
 {t:"quadrilateres",q:"Quel quadrilatère a des diagonales perpendiculaires et de même longueur ?",b:"le carré",f:["le rectangle non carré","le losange non carré","le parallélogramme quelconque"],e:"Le carré réunit les propriétés du rectangle et du losange."},
 {t:"quadrilateres",q:"Un parallélogramme a :",b:"ses côtés opposés parallèles",f:["trois côtés","quatre angles droits obligatoirement","un seul côté"],e:"Rectangle, losange et carré sont des parallélogrammes particuliers."},
 {t:"cercle",q:"Tous les points d'un cercle sont :",b:"à la même distance du centre",f:["à des distances différentes du centre","sur une ligne droite","au centre"],e:"Cette distance, c'est le rayon."},
 {t:"cercle",q:"Un segment qui relie le centre à un point du cercle s'appelle :",b:"un rayon",f:["un diamètre","une corde","un côté"],e:"Le diamètre, lui, relie deux points du cercle en passant par le centre."},
 {t:"cercle",q:"Le diamètre d'un cercle passe toujours par :",b:"le centre",f:["l'extérieur du cercle","un seul point du cercle","aucun point"],e:"Diamètre = 2 × rayon."},
 {t:"cercle",q:"Le disque, c'est :",b:"la surface délimitée par le cercle",f:["le bord seulement","le centre","le rayon"],e:"Le cercle est la ligne ; le disque est la surface à l'intérieur."},
 {t:"cercle",q:"Combien de rayons peut-on tracer dans un cercle ?",b:"une infinité",f:["un seul","deux","quatre"],e:"On peut relier le centre à n'importe quel point du cercle."},
 {t:"cercle",q:"Avec quel instrument trace-t-on un cercle ?",b:"le compas",f:["l'équerre","le rapporteur","la règle"],e:"On écarte le compas de la longueur du rayon et on pique la pointe sur le centre."},
 {t:"symetrie",q:"Combien d'axes de symétrie a un carré ?",b:"4",f:["2","1","0"],e:"Les deux médianes et les deux diagonales."},
 {t:"symetrie",q:"Combien d'axes de symétrie a un rectangle qui n'est pas un carré ?",b:"2",f:["4","1","0"],e:"Seulement les deux médianes : les diagonales ne sont pas des axes."},
 {t:"symetrie",q:"Combien d'axes de symétrie a un cercle ?",b:"une infinité",f:["1","2","4"],e:"Toute droite qui passe par le centre est un axe de symétrie."},
 {t:"symetrie",q:"Combien d'axes de symétrie a un triangle isocèle qui n'est pas équilatéral ?",b:"1",f:["3","2","0"],e:"L'axe passe par le sommet principal et le milieu du côté opposé."},
 {t:"symetrie",q:"Laquelle de ces lettres majuscules n'a aucun axe de symétrie ?",b:"F",f:["A","H","E"],e:"A a un axe vertical, E un axe horizontal, H en a deux ; F n'en a aucun."},
 {t:"symetrie",q:"Le symétrique d'une figure par rapport à un axe :",b:"se superpose à elle quand on plie le long de l'axe",f:["est toujours plus grand","est toujours plus petit","est tourné d'un quart de tour"],e:"La symétrie axiale fonctionne comme un pliage."},
 {t:"symetrie",q:"Une symétrie axiale conserve :",b:"les longueurs et les angles",f:["seulement les couleurs","rien du tout","seulement les angles"],e:"La figure symétrique a les mêmes mesures que la figure de départ."},
 {t:"symetrie",q:"Le symétrique d'un point situé sur l'axe de symétrie est :",b:"le point lui-même",f:["un point très éloigné","le centre de la feuille","un point au hasard"],e:"Quand on plie le long de l'axe, ce point ne bouge pas."},
 {t:"construction",q:"Pour tracer la perpendiculaire à une droite passant par un point, on utilise :",b:"l'équerre",f:["le compas seul","le rapporteur","rien"],e:"On place un côté de l'angle droit sur la droite et on fait glisser jusqu'au point."},
 {t:"construction",q:"Pour reporter une longueur sans la mesurer, on utilise :",b:"le compas",f:["l'équerre","la gomme","le rapporteur"],e:"On prend l'écartement du compas puis on le reporte."},
 {t:"construction",q:"Dans un programme de construction, « [AB] » désigne :",b:"le segment d'extrémités A et B",f:["la droite qui passe par A et B","la demi-droite d'origine A","la longueur AB en cm"],e:"[AB] : segment ; (AB) : droite ; [AB) : demi-droite d'origine A."},
 {t:"construction",q:"Dans un programme de construction, « (AB) » désigne :",b:"la droite qui passe par A et B",f:["le segment d'extrémités A et B","le cercle de centre A","le milieu de [AB]"],e:"Une droite est illimitée des deux côtés."},
 {t:"construction",q:"Dans un programme de construction, « [AB) » désigne :",b:"la demi-droite d'origine A passant par B",f:["le segment d'extrémités A et B","la droite (AB)","la demi-droite d'origine B"],e:"Le crochet indique l'origine : A."},
 {t:"construction",q:"Pour tracer un triangle ABC avec AB = 6 cm, AC = 5 cm et BC = 4 cm, après avoir tracé [AB], on trace :",b:"un arc de centre A de rayon 5 cm et un arc de centre B de rayon 4 cm",f:["un arc de centre A de rayon 4 cm et un arc de centre B de rayon 5 cm","un cercle de centre C","une perpendiculaire à (AB)"],e:"C est à 5 cm de A et à 4 cm de B : il se trouve à l'intersection des deux arcs."}
];
const geom=tag=>parTag(BANQUE_GEOM,tag);

const BILANS={
  bilan1:["grandsnombres","addsub","mult","fractions","angles"],
  bilan2:["division","fraccompare","decimaux","compdec","triangles","perimetre"],
  bilan3:["adddec","multdec","quadrilateres","fracquantite","aire","cercle"],
  bilan4:["divdec","proportionnalite","pourcentage","echelle","symetrie","duree"],
  revfrac:["fractions","fraccompare","fracquantite","decimaux","compdec","adddec","multdec","divdec"],
  bilanA:["grandsnombres","addsub","mult","division","decimaux","compdec","adddec","multdec","divdec","proportionnalite","pourcentage","problemes"],
  bilanB:["perimetre","aire","volume","conversions","duree","echelle","angles","triangles","quadrilateres","cercle","symetrie","construction"]
};

function conversion(liste){
  const [u1,u2,k,mult]=pioche(liste);
  if(mult){ // grande unité → petite unité : on multiplie
    const x=alea(0,1)?alea(2,15):alea(11,99)/10;
    const r=+(x*k).toFixed(6);
    return saisie(`Convertis : ${nb(x)} ${u1} = … ${u2}`,rep(r),`1 ${u1} = ${esp(k)} ${u2}, donc ${nb(x)} ${u1} = ${nb(x)} × ${esp(k)} = ${nb(r)} ${u2}.`);
  }
  const x=alea(0,1)?alea(1,9)*k/(k>=100?pioche([1,2,4,5,10]):1)*alea(1,3):alea(15,k*9);
  const r=+(x/k).toFixed(6);
  return saisie(`Convertis : ${nb(x)} ${u1} = … ${u2}`,rep(r),`1 ${u2} = ${esp(k)} ${u1}, donc on divise par ${esp(k)} : ${nb(x)} ${u1} = ${nb(r)} ${u2}.`);
}
const CONV_LONG=[["km","m",1000,true],["m","cm",100,true],["cm","mm",10,true],["m","km",1000,false],["cm","m",100,false],["mm","cm",10,false]];
const CONV_MASSE=[["kg","g",1000,true],["t","kg",1000,true],["g","kg",1000,false],["kg","t",1000,false],["L","cL",100,true],["L","mL",1000,true],["cL","mL",10,true],["cL","L",100,false],["mL","L",1000,false],["mL","cL",10,false]];

const GM={
  grandsnombres(){
    const t=alea(1,7);
    if(t===1){
      const a=alea(1,999),b=pioche([0,alea(1,999)]),c=pioche([0,alea(1,999),alea(1,99)]);
      const n=a*1e6+b*1e3+c;
      const f=[a*1e6+c*1e3+b,a*1e5+b*1e3+c,a*1e6+b*1e4+c,a*1e6+b*1e3+c*10,a*1e3+b];
      return qcm(`Comment s'écrit en chiffres « ${lettres(n)} » ?`,esp(n),f.filter(x=>x!==n).map(esp),`On écrit chaque classe avec trois chiffres : millions, mille, unités. On complète avec des zéros si besoin : ${esp(n)}.`);
    }
    if(t===2){
      const n=alea(100000000,999999999),k=alea(0,8),d=Math.floor(n/10**k)%10;
      return qcmChiffres(`Quel est le chiffre des ${RANGS[k]} dans ${esp(n)} ?`,d,`On lit de droite à gauche : classe des unités, classe des mille, classe des millions. Le chiffre des ${RANGS[k]} est ${d}.`);
    }
    if(t===3){
      const n=alea(1000000,999999999);
      if(alea(0,1)){const r=Math.floor(n/1000);return saisie(`Combien y a-t-il de milliers en tout dans ${esp(n)} ?`,[String(r),esp(r)],`On garde tous les chiffres jusqu'à celui des unités de mille : ${esp(r)} milliers.`);}
      const r=Math.floor(n/1e6);return saisie(`Combien y a-t-il de millions en tout dans ${esp(n)} ?`,[String(r)],`On garde tous les chiffres jusqu'à celui des unités de millions : ${r} millions.`);
    }
    if(t===4){
      const a=alea(1000000,999000000),s=new Set([a]);
      while(s.size<3){const b=a+pioche([1,-1])*alea(1,9)*10**alea(2,7);if(b>0)s.add(b);}
      const l=[...s],plusGrand=alea(0,1),bon=plusGrand?Math.max(...l):Math.min(...l);
      return qcm(`Quel est le plus ${plusGrand?"grand":"petit"} de ces nombres ?`,esp(bon),l.filter(x=>x!==bon).map(esp),`On compare d'abord le nombre de chiffres, puis les chiffres un par un en partant de la gauche.`);
    }
    if(t===5){
      const a=alea(1,9),b=alea(1,9),c=alea(1,9),d=alea(1,9),n=a*1e6+b*1e5+c*1e3+d*10;
      return saisie(`Quel nombre est égal à ${a} millions + ${b} centaines de mille + ${c} milliers + ${d} dizaines ?`,[String(n),esp(n)],`${esp(a*1e6)} + ${esp(b*1e5)} + ${esp(c*1e3)} + ${d*10} = ${esp(n)}. Attention aux zéros des rangs vides.`);
    }
    if(t===6){
      let n=alea(1000001,998999999);if(n%1e6===0)n++;
      const m=Math.floor(n/1e6),enc=(x,y)=>`entre ${esp(x)} et ${esp(y)}`;
      return qcm(`Entre quels millions consécutifs se trouve ${esp(n)} ?`,enc(m*1e6,(m+1)*1e6),[enc((m+1)*1e6,(m+2)*1e6),m>1?enc((m-1)*1e6,m*1e6):enc((m+2)*1e6,(m+3)*1e6),enc(m*1e5,(m+1)*1e5)],`${esp(n)} contient ${m} millions entiers : il est entre ${esp(m*1e6)} et ${esp((m+1)*1e6)}.`);
    }
    if(alea(0,1))return qcm("Combien y a-t-il de millions dans un milliard ?",esp(1000),["100","10",esp(1000000)],`1 milliard = 1${ESP}000 millions = 1${ESP}000${ESP}000${ESP}000.`);
    const x=pioche([999999999,99999999,9999999]);
    return saisie(`Quel nombre vient juste après ${esp(x)} ?`,[String(x+1),esp(x+1)],`${esp(x)} + 1 = ${esp(x+1)}${x===999999999?" : c'est un milliard":""}.`);
  },
  addsub(){
    const t=alea(1,4);
    if(t===1){const a=alea(100000,899999),b=alea(10000,99999);return saisie(`Calcule : ${esp(a)} + ${esp(b)}`,[String(a+b),esp(a+b)],`On pose l'addition en alignant les unités et on n'oublie pas les retenues : ${esp(a+b)}.`);}
    if(t===2){const a=alea(200000,999999),b=alea(10000,199999);return saisie(`Calcule : ${esp(a)} − ${esp(b)}`,[String(a-b),esp(a-b)],`${esp(a)} − ${esp(b)} = ${esp(a-b)}. On vérifie avec l'addition : ${esp(a-b)} + ${esp(b)} = ${esp(a)}.`);}
    if(t===3){const A=alea(2,9),B=alea(2,9),a=A*1000+alea(-60,60),b=B*1000+alea(-60,60),o=(A+B)*1000;
      return qcm(`Quel est l'ordre de grandeur de ${esp(a)} + ${esp(b)} ?`,esp(o),[esp(o/10),esp(o*10),esp(o+2000)],`On arrondit au millier : ${esp(A*1000)} + ${esp(B*1000)} = ${esp(o)}.`);}
    const x=alea(20000,90000),y=x+alea(1500,9999);
    return saisie(`Une ville comptait ${esp(x)} habitants en 2000 et ${esp(y)} habitants en 2020. De combien la population a-t-elle augmenté ?`,[String(y-x),esp(y-x)],`On cherche l'écart : ${esp(y)} − ${esp(x)} = ${esp(y-x)} habitants.`);
  },
  mult(){
    const t=alea(1,4);
    if(t===1){const a=alea(23,98),b=alea(12,99),d=Math.floor(b/10)*10,u=b%10;
      return saisie(`Calcule : ${a} × ${b}`,[String(a*b),esp(a*b)],`${a} × ${b} = ${a} × ${d} + ${a} × ${u} = ${esp(a*d)} + ${esp(a*u)} = ${esp(a*b)}.`);}
    if(t===2){const a=alea(102,989),b=alea(12,49),d=Math.floor(b/10)*10,u=b%10;
      return saisie(`Calcule : ${a} × ${b}`,[String(a*b),esp(a*b)],`On pose la multiplication : ${a} × ${u} = ${esp(a*u)}, puis ${a} × ${d} = ${esp(a*d)}. Total : ${esp(a*b)}.`);}
    if(t===3){const a=alea(12,999),m=pioche([10,100,1000]);
      return saisie(`Calcule : ${a} × ${esp(m)}`,[String(a*m),esp(a*m)],`Multiplier un entier par ${esp(m)}, c'est écrire ${String(m).length-1} zéro(s) à sa droite : ${esp(a*m)}.`);}
    const n=alea(42,58),m=alea(12,35);
    return saisie(`Un car transporte ${n} passagers. ${m} cars pleins partent en excursion. Combien de passagers en tout ?`,[String(n*m),esp(n*m)],`${n} × ${m} = ${esp(n*m)} passagers.`);
  },
  division(){
    const t=alea(1,3);
    if(t<=2){
      const b=t===1?alea(3,9):alea(12,25),q=t===1?alea(102,999):alea(11,60),r=alea(0,b-1),a=b*q+r;
      return alea(0,1)?saisie(`Division euclidienne de ${esp(a)} par ${b} : quel est le quotient ?`,[String(q)],`${esp(a)} = ${b} × ${q} + ${r}. Le quotient est ${q}.`)
                      :saisie(`Division euclidienne de ${esp(a)} par ${b} : quel est le reste ?`,[String(r)],`${esp(a)} = ${b} × ${q} + ${r}. Le reste (${r}) est toujours plus petit que le diviseur (${b}).`);
    }
    const b=pioche([6,12]),q=alea(11,40),r=alea(1,b-1),a=b*q+r;
    if(alea(0,1))return saisie(`On range ${a} œufs dans des boîtes de ${b}. Combien de boîtes peut-on remplir entièrement ?`,[String(q)],`${a} = ${b} × ${q} + ${r} : on remplit ${q} boîtes et il reste ${r} œufs.`);
    return saisie(`On range ${a} œufs dans des boîtes de ${b}. Combien de boîtes faut-il pour ranger tous les œufs ?`,[String(q+1)],`${a} = ${b} × ${q} + ${r} : ${q} boîtes pleines, plus une boîte pour les ${r} œufs restants, soit ${q+1} boîtes.`);
  },
  fractions(){
    const t=alea(1,5),D=[2,3,4,5,6,8,10];
    if(t===1){const d=pioche(D),n=alea(1,Math.min(2*d,20)),autres=melange(D.filter(x=>x!==d)).slice(0,3);
      const f=autres.map(x=>lireFrac(n,x));if(FRN[n]&&n!==d)f.unshift(lireFrac(d,n));
      return qcm(`Comment se lit la fraction ${n}/${d} ?`,lireFrac(n,d),f,`Le dénominateur ${d} donne le nom des parts (${FRN[d][1]}) ; le numérateur ${n} dit combien on en prend.`);}
    if(t===2){const d=pioche(D),n=pioche([alea(1,d-1),d,alea(d+1,3*d)]);
      const b=n<d?"plus petite que 1":n===d?"égale à 1":"plus grande que 1";
      return qcm(`La fraction ${n}/${d} est :`,b,["plus petite que 1","égale à 1","plus grande que 1"],`On compare le numérateur (${n}) et le dénominateur (${d}). S'ils sont égaux, la fraction vaut 1.`);}
    if(t===3){const d=pioche([2,3,4,5,10]),e=alea(1,5),r=alea(1,d-1),n=e*d+r;
      return saisie(`Combien d'unités entières y a-t-il dans ${n}/${d} ?`,[String(e)],`${n} = ${e} × ${d} + ${r}, donc ${n}/${d} = ${e} + ${r}/${d} : il y a ${e} unité(s) entière(s).`);}
    if(t===4){const d=pioche(D),n=alea(1,d-1);
      return saisie(`Écris en chiffres la fraction « ${lireFrac(n,d)} ».`,[`${n}/${d}`,`${n} / ${d}`],`On écrit le numérateur ${n} au-dessus de la barre et le dénominateur ${d} en dessous : ${n}/${d}.`);}
    const d=pioche(D),e=alea(1,4);
    return saisie(`Combien de ${FRN[d][1]} y a-t-il dans ${e} unité${e>1?"s":""} ?`,[String(e*d)],`Une unité contient ${d} ${FRN[d][1]}, donc ${e} unité(s) en contiennent ${e} × ${d} = ${e*d}.`);
  },
  fraccompare(){
    const t=alea(1,5);
    if(t===1){const d=pioche([5,6,7,8,9,10,12]),s=new Set();while(s.size<3)s.add(alea(1,2*d));const l=[...s],g=alea(0,1),b=g?Math.max(...l):Math.min(...l);
      return qcm(`Quelle est la plus ${g?"grande":"petite"} de ces fractions ?`,`${b}/${d}`,l.filter(x=>x!==b).map(x=>`${x}/${d}`),`Elles ont le même dénominateur : on compare les numérateurs.`);}
    if(t===2){const n=alea(1,5),s=new Set();while(s.size<3)s.add(alea(n+1,12));const l=[...s],b=Math.min(...l);
      return qcm(`Quelle est la plus grande de ces fractions ?`,`${n}/${b}`,l.filter(x=>x!==b).map(x=>`${n}/${x}`),`Même numérateur : plus on partage en beaucoup de parts, plus chaque part est petite. La plus grande a le plus petit dénominateur.`);}
    if(t===3){const d=pioche([2,3,4,5,10]),e=alea(0,6),r=alea(1,d-1),n=e*d+r,enc=(x,y)=>`entre ${x} et ${y}`;
      return qcm(`Entre quels entiers consécutifs se trouve la fraction ${n}/${d} ?`,enc(e,e+1),[enc(e+1,e+2),e>0?enc(e-1,e):enc(e+2,e+3),enc(n,n+1)],`${n} = ${e} × ${d} + ${r}, donc ${n}/${d} = ${e} + ${r}/${d} : c'est entre ${e} et ${e+1}.`);}
    if(t===4){const d=pioche([4,6,8,10,12]);let n=alea(1,d-1);if(2*n===d)n++;
      return qcm(`La fraction ${n}/${d} est-elle plus petite ou plus grande que 1/2 ?`,2*n<d?"plus petite que 1/2":"plus grande que 1/2",["plus petite que 1/2","plus grande que 1/2","égale à 1/2"],`1/2 = ${d/2}/${d}. On compare ${n} et ${d/2}.`);}
    const d=pioche([2,4,5]),n=alea(1,d-1),k=pioche(d===2?[2,4,5,50]:d===4?[2,25]:[2,20]);
    return saisie(`Complète l'égalité : ${n}/${d} = …/${d*k}`,[String(n*k)],`On multiplie le numérateur et le dénominateur par le même nombre (${k}) : ${n}/${d} = ${n*k}/${d*k}.`);
  },
  fracquantite(){
    const t=alea(1,4);
    if(t===1){const d=pioche([2,3,4,5,6,8,10]),n=alea(1,d-1),q=d*alea(2,12),p=prenom();
      return saisie(`${p} a ${q} billes ; ${n}/${d} de ses billes sont bleues. Combien de billes bleues a ${p} ?`,[String(q*n/d)],n===1?`Prendre 1/${d}, c'est diviser par ${d} : ${q} ÷ ${d} = ${q/d}.`:`On divise par ${d} : ${q} ÷ ${d} = ${q/d}, puis on multiplie par ${n} : ${q/d} × ${n} = ${q*n/d}.`);}
    if(t===2){const d=pioche([4,5,6,8,10]),a=alea(1,d-1),b=alea(1,d-1),s=a+b,g=pgcd(s,d),acc=[`${s}/${d}`];
      if(g>1&&d/g>1)acc.push(`${s/g}/${d/g}`);if(s===d)acc.push("1");
      return saisie(`Calcule : ${a}/${d} + ${b}/${d}`,acc,`Même dénominateur : on ajoute les numérateurs, ${a} + ${b} = ${s}, et on garde ${d} : ${s}/${d}.`);}
    if(t===3){const [d1,d2]=pioche([[2,4],[2,8],[2,10],[4,8],[5,10],[10,100],[3,6]]),k=d2/d1,n1=alea(1,d1-1),n2=alea(1,d2-1),N=n1*k+n2;
      return qcm(`Calcule : ${n1}/${d1} + ${n2}/${d2}`,`${N}/${d2}`,[`${n1+n2}/${d1+d2}`,`${n1+n2}/${d2}`,`${N}/${d1}`],`On écrit ${n1}/${d1} avec le dénominateur ${d2} : ${n1}/${d1} = ${n1*k}/${d2}. Puis ${n1*k}/${d2} + ${n2}/${d2} = ${N}/${d2}.`);}
    const [n,d]=pioche([[1,2],[1,4],[3,4],[1,3],[2,3],[1,6],[5,6],[1,10],[3,10],[1,12],[5,12]]);
    return saisie(`Combien de minutes y a-t-il dans ${n}/${d} d'heure ?`,[String(60*n/d)],`1 h = 60 min. 60 ÷ ${d} = ${60/d}, puis × ${n} : ${60*n/d} min.`);
  },
  decimaux(){
    const t=alea(1,6);
    if(t===1){const d=pioche([10,100,1000]);let n=alea(11,d===10?999:9999);if(n%10===0)n++;
      return saisie(`Écris ${n}/${esp(d)} sous la forme d'un nombre décimal.`,rep(n/d),`Diviser par ${esp(d)}, c'est avoir ${String(d).length-1} chiffre(s) après la virgule : ${n}/${esp(d)} = ${nb(n/d)}.`);}
    if(t===2){let k=alea(10001,99999);if(k%10===0)k++;const x=k/1000,R=[["dixièmes",100],["centièmes",10],["millièmes",1],["unités",1000],["dizaines",10000]],[nom,pos]=pioche(R),dg=Math.floor(k/pos)%10;
      return qcmChiffres(`Quel est le chiffre des ${nom} dans ${nb(x)} ?`,dg,`Après la virgule : dixièmes, centièmes, millièmes. Avant : unités, dizaines. Ici le chiffre des ${nom} est ${dg}.`);}
    if(t===3){const u=alea(1,99),a=alea(1,9),b=alea(0,9),c=alea(1,9),k=u*1000+a*100+b*10+c,termes=[String(u),`${a}/10`];if(b)termes.push(`${b}/100`);termes.push(`${c}/1000`);
      return saisie(`Écris sous la forme d'un nombre décimal : ${termes.join(" + ")}`,rep(k/1000),`Les dixièmes vont au 1er rang après la virgule, les centièmes au 2e, les millièmes au 3e${b?"":" (ici 0 centième)"} : ${nb(k/1000)}.`);}
    if(t===4){let k=alea(101,999);if(k%10===0)k++;
      return saisie(`Écris ${nb(k/100)} sous la forme d'une fraction décimale.`,[`${k}/100`,`${k} / 100`,`${k*10}/1000`],`Deux chiffres après la virgule, ce sont des centièmes : ${nb(k/100)} = ${k}/100.`);}
    if(t===5){const u=alea(1,30);
      if(alea(0,1)){const c=alea(1,9),x=u+c/100;return qcm(`Comment lit-on ${nb(x)} ?`,`${u} unité${u>1?"s":""} et ${c} centième${c>1?"s":""}`,[`${u} unité${u>1?"s":""} et ${c} dixième${c>1?"s":""}`,`${u} unité${u>1?"s":""} et ${c} millième${c>1?"s":""}`,`${u*100+c} dixièmes`],`Le 0 est au rang des dixièmes ; ${c} est au rang des centièmes.`);}
      const m=alea(1,9),x=u+m/1000;return qcm(`Comment lit-on ${nb(x)} ?`,`${u} unité${u>1?"s":""} et ${m} millième${m>1?"s":""}`,[`${u} unité${u>1?"s":""} et ${m} centième${m>1?"s":""}`,`${u} unité${u>1?"s":""} et ${m} dixième${m>1?"s":""}`,`${u}${m} millièmes`],`Le chiffre ${m} est au 3e rang après la virgule : ce sont des millièmes.`);}
    return pioche([
      ()=>qcm("Combien de millièmes y a-t-il dans un centième ?","10",["100","1000","1"],"1 centième = 10 millièmes, car 1/100 = 10/1000."),
      ()=>qcm("Combien de millièmes y a-t-il dans un dixième ?","100",["10","1000","1"],"1 dixième = 100 millièmes, car 1/10 = 100/1000."),
      ()=>qcm("Combien de centièmes y a-t-il dans une unité ?","100",["10","1000","1"],"1 unité = 100 centièmes = 100/100."),
      ()=>qcm("Quel nombre est égal à 0,5 ?","5/10",["5/100","1/5","50/10"],"0,5 = 5 dixièmes = 5/10 (c'est aussi un demi).")
    ])();
  },
  compdec(){
    const t=alea(1,6);
    if(t===1){const u=alea(0,20),a=u*1000+alea(1,8)*100;let b=u*1000+alea(11,99)*10;if(b===a)b+=10;
      return qcm(`Quel nombre est le plus grand : ${nb(a/1000)} ou ${nb(b/1000)} ?`,nb(Math.max(a,b)/1000),[nb(Math.min(a,b)/1000)],`On compare la partie entière, puis les dixièmes, puis les centièmes. Avoir plus de chiffres ne rend pas un nombre plus grand.`);}
    if(t===2){const u=alea(1,15),s=new Set();while(s.size<4)s.add(u*1000+pioche([alea(1,9)*100,alea(1,99)*10,alea(1,999)]));const l=[...s],b=Math.min(...l);
      return qcm("Quel est le plus petit de ces nombres ?",nb(b/1000),l.filter(x=>x!==b).map(x=>nb(x/1000)),`Même partie entière : on compare les dixièmes, puis les centièmes, puis les millièmes (on peut ajouter des zéros : 0,5 = 0,500).`);}
    if(t===3){let k=alea(1001,99999);if(k%1000===0)k++;const u=Math.floor(k/1000),enc=(x,y)=>`entre ${x} et ${y}`;
      return qcm(`Entre quels entiers consécutifs se trouve ${nb(k/1000)} ?`,enc(u,u+1),[enc(u+1,u+2),enc(u-1,u),enc(u*10,u*10+1)],`La partie entière de ${nb(k/1000)} est ${u} : le nombre est entre ${u} et ${u+1}.`);}
    if(t===4){let k=alea(1001,99999);if(k%1000===500)k++;const r=Math.floor((k+500)/1000);
      return saisie(`Arrondis ${nb(k/1000)} à l'unité.`,[String(r)],`On regarde le chiffre des dixièmes (${Math.floor(k/100)%10}) : ${Math.floor(k/100)%10>=5?"5 ou plus, on arrondit à l'unité supérieure":"moins de 5, on garde la partie entière"}. Résultat : ${r}.`);}
    if(t===5){let k=alea(1001,99999);if(k%100===50)k++;if(k%100===0)k+=3;const r=Math.floor((k+50)/100);
      return saisie(`Arrondis ${nb(k/1000)} au dixième.`,rep(r/10),`On regarde le chiffre des centièmes (${Math.floor(k/10)%10}) : ${Math.floor(k/10)%10>=5?"5 ou plus, on augmente le chiffre des dixièmes de 1":"moins de 5, on garde le chiffre des dixièmes"}. Résultat : ${nb(r/10)}.`);}
    const a=alea(11,199),c=alea(1,9),bon=a*10+c;
    return qcm(`Quel nombre est compris entre ${nb(a/10)} et ${nb((a+1)/10)} ?`,nb(bon/100),[nb((a*10-alea(1,9))/100),nb(((a+1)*10+alea(1,9))/100),nb((Math.floor(a/10)*100+a%10)/100)],`Entre ${nb(a/10)} = ${nb(a/10)}0 et ${nb((a+1)/10)} = ${nb((a+1)/10)}0, on trouve les nombres de ${nb(a/10)}1 à ${nb(a/10)}9.`);
  },
  adddec(){
    const t=alea(1,4);
    if(t===1){const a=alea(11,999),b=alea(101,9999),r=(a*10+b)/100;
      return saisie(`Calcule : ${nb(a/10)} + ${nb(b/100)}`,rep(r),`On aligne les virgules (on peut écrire ${nb(a/10)} = ${(a/10).toFixed(2).replace(".",",")}) : ${nb(a/10)} + ${nb(b/100)} = ${nb(r)}.`);}
    if(t===2){const a=alea(200,999),A=a*10,b=alea(101,A-1),r=(A-b)/100;
      return saisie(`Calcule : ${nb(a/10)} − ${nb(b/100)}`,rep(r),`On aligne les virgules et on complète avec un zéro : ${(a/10).toFixed(2).replace(".",",")} − ${nb(b/100)} = ${nb(r)}.`);}
    if(t===3){const x=alea(1,99),cible=pioche([1,10]),r=cible*100-x;
      return saisie(`Complète : ${nb(x/100)} + … = ${cible}`,rep(r/100),`On cherche le complément : ${cible} − ${nb(x/100)} = ${nb(r/100)}.`);}
    const p=prenom(),a=alea(450,1290),b=alea(105,595),tot=a+b;
    return saisie(`${p} achète un livre à ${euros(a)} et un stylo à ${euros(b)}. ${p} paie avec un billet de 20 €. Combien doit-on rendre à ${p} ?`,repEuros(2000-tot),`Total : ${euros(a)} + ${euros(b)} = ${euros(tot)}. Puis 20 € − ${euros(tot)} = ${euros(2000-tot)}.`);
  },
  multdec(){
    const t=alea(1,4);
    if(t===1){const a=alea(101,999),b=alea(2,9);
      return saisie(`Calcule : ${nb(a/100)} × ${b}`,rep(a*b/100),`On calcule ${a} × ${b} = ${a*b} sans la virgule, puis on remet 2 chiffres après la virgule : ${nb(a*b/100)}.`);}
    if(t===2){const a=alea(11,99),b=alea(3,12);
      return saisie(`Calcule : ${nb(a/10)} × ${b}`,rep(a*b/10),`On calcule ${a} × ${b} = ${a*b} sans la virgule, puis on remet 1 chiffre après la virgule : ${nb(a*b/10)}.`);}
    if(t===3){let x=alea(1001,99999);if(x%10===0)x++;const m=pioche([10,100,1000]),r=x*m/1000;
      return saisie(`Calcule : ${nb(x/1000)} × ${esp(m)}`,rep(r),`Multiplier par ${esp(m)}, c'est rendre chaque chiffre ${esp(m)} fois plus grand : la virgule se décale de ${String(m).length-1} rang(s) vers la droite. ${nb(r)}.`);}
    const c=alea(105,495),n=alea(2,9),obj=pioche(["cahier","classeur","stylo","carnet"]);
    return saisie(`Un ${obj} coûte ${euros(c)}. Combien coûtent ${n} ${obj}s ?`,repEuros(c*n),`${euros(c)} × ${n} = ${euros(c*n)}.`);
  },
  divdec(){
    const t=alea(1,4);
    if(t===1){const b=alea(2,9),q=alea(101,999),a=q*b;
      return saisie(`Calcule : ${nb(a/100)} ÷ ${b}`,rep(q/100),`On divise comme des entiers et on place la virgule au quotient en abaissant le chiffre des dixièmes : ${nb(q/100)}. Vérification : ${nb(q/100)} × ${b} = ${nb(a/100)}.`);}
    if(t===2){const b=pioche([2,4,5,8]);let a=alea(11,99);if(a%b===0)a++;
      return saisie(`Calcule : ${a} ÷ ${b} (donne le quotient décimal exact)`,rep(a/b),`On continue la division après la virgule en ajoutant des zéros (${a} = ${a},000) : ${a} ÷ ${b} = ${nb(a/b)}.`);}
    if(t===3){const x=alea(12,9999),m=pioche([10,100,1000]);
      return saisie(`Calcule : ${esp(x)} ÷ ${esp(m)}`,rep(x/m),`Diviser par ${esp(m)}, c'est rendre chaque chiffre ${esp(m)} fois plus petit : la virgule se décale de ${String(m).length-1} rang(s) vers la gauche. ${nb(x/m)}.`);}
    const n=alea(3,6),c=alea(150,990)*n;
    return saisie(`${n} amis se partagent équitablement ${euros(c)}. Combien chacun reçoit-il ?`,repEuros(c/n),`${euros(c)} ÷ ${n} = ${euros(c/n)}. Vérification : ${euros(c/n)} × ${n} = ${euros(c)}.`);
  },
  proportionnalite(){
    const t=alea(1,4);
    if(t===1){const u=alea(3,30)*5,p2=pioche([2,6,8,10,12]);
      return saisie(`Pour 4 personnes, il faut ${u*4} g de farine. Combien de grammes faut-il pour ${p2} personnes ?`,[String(u*p2)],`Pour 1 personne : ${u*4} ÷ 4 = ${u} g. Pour ${p2} personnes : ${u} × ${p2} = ${esp(u*p2)} g.`);}
    if(t===2){const q=alea(2,5),u=alea(4,30)*10,n=alea(6,12),obj=pioche(["stylos","gommes","crayons","cahiers"]);
      return saisie(`${q} ${obj} coûtent ${euros(q*u)}. Combien coûtent ${n} ${obj} ?`,repEuros(n*u),`Un seul coûte ${euros(q*u)} ÷ ${q} = ${euros(u)}. Donc ${n} coûtent ${euros(u)} × ${n} = ${euros(n*u)}.`);}
    if(t===3){const k=alea(2,9),xs=melange([2,3,4,5,6,7,10]).slice(0,3).sort((a,b)=>a-b),ys=xs.map(x=>x*k),oui=alea(0,1);
      if(!oui){const i=alea(0,2);ys[i]+=alea(1,3);}
      return qcm(`Ce tableau est-il un tableau de proportionnalité ? ${xs.map((x,i)=>`${x} → ${ys[i]}`).join(" ; ")}`,oui?"oui":"non",["oui","non"],oui?`On passe toujours de la 1re ligne à la 2e en multipliant par ${k} : c'est proportionnel.`:`On ne multiplie pas toujours par le même nombre (${xs.map((x,i)=>`${ys[i]} ÷ ${x}`).join(", ")} ne donnent pas tous le même résultat) : ce n'est pas proportionnel.`);}
    const v=pioche([60,80,90,100,120]),h=pioche([2,3,4]);
    if(alea(0,1))return saisie(`Une voiture roule toujours à la même vitesse : ${v} km en 1 heure. Quelle distance parcourt-elle en ${h} heures ?`,[String(v*h)],`En ${h} heures, elle parcourt ${h} fois plus : ${v} × ${h} = ${v*h} km.`);
    return saisie(`Une voiture roule toujours à la même vitesse : ${v} km en 1 heure. Quelle distance parcourt-elle en 30 minutes ?`,[String(v/2)],`30 minutes, c'est la moitié d'une heure : ${v} ÷ 2 = ${v/2} km.`);
  },
  pourcentage(){
    const t=alea(1,4);
    if(t===1){const p=pioche([10,20,25,50,75]),v=alea(1,25)*20;
      return saisie(`Combien font ${p} % de ${v} ?`,[String(v*p/100)],`${p} % de ${v}, c'est ${v} × ${p} ÷ 100 = ${v*p/100}.`);}
    if(t===2){const p=pioche([10,20,25,50]),v=alea(2,20)*20,r=v-v*p/100;
      return saisie(`Un jeu coûte ${v} €. Il est soldé à −${p} %. Quel est son nouveau prix, en euros ?`,[String(r),r+" €"],`La réduction est de ${p} % de ${v}, soit ${v*p/100} €. Nouveau prix : ${v} − ${v*p/100} = ${r} €.`);}
    if(t===3){const [p,n]=pioche([[25,20],[25,24],[25,28],[75,24],[75,28],[50,26],[50,30],[10,30],[20,25],[20,30]]);
      return saisie(`Dans une classe de ${n} élèves, ${p} % des élèves viennent à vélo. Combien d'élèves viennent à vélo ?`,[String(n*p/100)],`${p} % de ${n} = ${n} × ${p} ÷ 100 = ${n*p/100} élèves.`);}
    const [p,b,f]=pioche([["50 %","la moitié",["le quart","le dixième","le tiers"]],["25 %","le quart",["la moitié","le cinquième","le dixième"]],["75 %","les trois quarts",["la moitié","le quart","le tiers"]],["10 %","le dixième",["la moitié","le quart","le centième"]],["100 %","la totalité",["la moitié","le dixième","rien"]],["20 %","le cinquième",["le quart","la moitié","le dixième"]]]);
    return qcm(`Prendre ${p} d'une quantité, c'est prendre :`,b,f,`${p} = ${p.replace(" %","")}/100. Par exemple, 25 % = 25/100 = 1/4.`);
  },
  echelle(){
    const t=alea(1,4),d=alea(2,15);
    if(t===1)return saisie(`Sur un plan à l'échelle 1/100, une pièce mesure ${d} cm de long. Quelle est sa longueur réelle, en mètres ?`,[String(d)],`1 cm sur le plan représente 100 cm, soit 1 m en réalité. Donc ${d} cm représentent ${d} m.`);
    if(t===2)return saisie(`Sur une carte à l'échelle 1/100${ESP}000, deux villages sont à ${d} cm l'un de l'autre. Quelle est la distance réelle, en km ?`,[String(d)],`1 cm représente 100${ESP}000 cm = 1 km. Donc ${d} cm représentent ${d} km.`);
    if(t===3){if(alea(0,1))return saisie(`Sur une carte à l'échelle 1/25${ESP}000, un chemin mesure ${d} cm. Quelle est sa longueur réelle, en mètres ?`,[String(250*d),esp(250*d)],`1 cm représente 25${ESP}000 cm = 250 m. Donc ${d} cm représentent ${d} × 250 = ${esp(250*d)} m.`);
      const k=pioche([2,5,10]);return saisie(`Sur une carte, 1 cm représente ${k} km. Deux villes sont à ${d} cm sur la carte. Quelle est la distance réelle, en km ?`,[String(k*d)],`C'est une situation de proportionnalité : ${d} × ${k} = ${k*d} km.`);}
    const L=alea(2,30)*10;
    return saisie(`À l'échelle 1/1${ESP}000, un terrain de ${L} m de long mesure combien de centimètres sur le plan ?`,[String(L/10)],`1 cm sur le plan représente 1${ESP}000 cm = 10 m. Donc ${L} m sont représentés par ${L} ÷ 10 = ${L/10} cm.`);
  },
  perimetre(){
    const t=alea(1,6);
    if(t===1){const L=alea(6,40),l=alea(3,L-1);return saisie(`Quel est le périmètre d'un rectangle de ${L} cm sur ${l} cm, en cm ?`,[String(2*(L+l))],`Périmètre = 2 × (longueur + largeur) = 2 × (${L} + ${l}) = ${2*(L+l)} cm.`);}
    if(t===2){const c=alea(3,30);return saisie(`Quel est le périmètre d'un carré de ${c} cm de côté, en cm ?`,[String(4*c)],`Périmètre = 4 × côté = 4 × ${c} = ${4*c} cm.`);}
    if(t===3){const c=alea(3,25);return saisie(`Un carré a un périmètre de ${4*c} cm. Combien mesure son côté, en cm ?`,[String(c)],`Les 4 côtés sont égaux : ${4*c} ÷ 4 = ${c} cm.`);}
    if(t===4)return conversion(CONV_LONG);
    if(t===5){const a=alea(4,15),b=alea(4,15),c=alea(Math.abs(a-b)+1,a+b-1);return saisie(`Un triangle a des côtés de ${a} cm, ${b} cm et ${c} cm. Quel est son périmètre, en cm ?`,[String(a+b+c)],`On ajoute les longueurs des côtés : ${a} + ${b} + ${c} = ${a+b+c} cm.`);}
    const L=alea(8,30),l=alea(3,L-1),P=2*(L+l);
    return saisie(`Un rectangle a un périmètre de ${P} cm et une longueur de ${L} cm. Quelle est sa largeur, en cm ?`,[String(l)],`Le demi-périmètre vaut ${P} ÷ 2 = ${L+l} cm. Largeur = ${L+l} − ${L} = ${l} cm.`);
  },
  aire(){
    const t=alea(1,6);
    if(t===1){const L=alea(4,25),l=alea(2,L-1);return saisie(`Quelle est l'aire d'un rectangle de ${L} cm sur ${l} cm, en cm² ?`,[String(L*l)],`Aire du rectangle = longueur × largeur = ${L} × ${l} = ${L*l} cm².`);}
    if(t===2){const c=alea(2,15);return saisie(`Quelle est l'aire d'un carré de ${c} cm de côté, en cm² ?`,[String(c*c)],`Aire du carré = côté × côté = ${c} × ${c} = ${c*c} cm².`);}
    if(t===3){const L=alea(8,16),l=alea(5,L-1),c=alea(2,l-2);return saisie(`On découpe un carré de ${c} cm de côté dans un rectangle de ${L} cm sur ${l} cm. Quelle est l'aire de la figure qui reste, en cm² ?`,[String(L*l-c*c)],`Aire du rectangle : ${L} × ${l} = ${L*l} cm². Aire du carré : ${c} × ${c} = ${c*c} cm². Il reste ${L*l} − ${c*c} = ${L*l-c*c} cm².`);}
    if(t===4){const c=alea(2,12);return saisie(`Un carré a une aire de ${c*c} cm². Combien mesure son côté, en cm ?`,[String(c)],`On cherche le nombre qui, multiplié par lui-même, donne ${c*c} : ${c} × ${c} = ${c*c}. Le côté mesure ${c} cm.`);}
    if(t===5){const L=alea(5,15),l=alea(2,L-1);return saisie(`Un rectangle a une aire de ${L*l} m² et une longueur de ${L} m. Quelle est sa largeur, en m ?`,[String(l)],`Aire = longueur × largeur, donc largeur = ${L*l} ÷ ${L} = ${l} m.`);}
    return pioche([
      ()=>qcm("1 m² est égal à :",`10${ESP}000 cm²`,["100 cm²",`1${ESP}000 cm²`,"10 cm²"],`1 m² est un carré de 100 cm de côté : 100 × 100 = 10${ESP}000 cm².`),
      ()=>qcm("Un rectangle de 6 cm sur 4 cm et un rectangle de 8 cm sur 3 cm ont :","la même aire mais pas le même périmètre",["le même périmètre mais pas la même aire","la même aire et le même périmètre","ni la même aire ni le même périmètre"],"Aires : 6 × 4 = 24 cm² et 8 × 3 = 24 cm². Périmètres : 20 cm et 22 cm."),
      ()=>qcm("Quelle unité convient pour l'aire d'une chambre ?","le m²",["le km²","le mm²","le m"],"Une chambre fait par exemple 12 m². Le m mesure une longueur, pas une aire."),
      ()=>qcm("L'aire d'une figure, c'est :","la mesure de sa surface",["la longueur de son contour","sa hauteur","son nombre de côtés"],"La longueur du contour, c'est le périmètre.")
    ])();
  },
  volume(){
    const t=alea(1,4);
    if(t===1){const a=alea(2,8),b=alea(2,6),c=alea(2,5);return saisie(`Un pavé droit est construit avec des cubes : ${a} cubes en longueur, ${b} en largeur et ${c} étages. Combien de cubes y a-t-il ?`,[String(a*b*c)],`Un étage contient ${a} × ${b} = ${a*b} cubes ; ${c} étages : ${a*b} × ${c} = ${a*b*c} cubes.`);}
    if(t===2){const a=alea(2,6);return saisie(`Un grand cube est fait de petits cubes de 1 cm de côté : ${a} cubes sur chaque arête. Quel est son volume, en cm³ ?`,[String(a*a*a)],`${a} × ${a} × ${a} = ${a*a*a} petits cubes de 1 cm³, donc ${a*a*a} cm³.`);}
    if(t===3){const [L,v]=pioche([[1,20],[1,25],[1,50],[1.5,25],[1.5,50],[2,25],[2,50],[2,20],[3,50],[3,25]]),n=L*100/v;
      return saisie(`Une bouteille contient ${nb(L)} L. Combien de verres de ${v} cL peut-on remplir ?`,[String(n)],`${nb(L)} L = ${L*100} cL. ${L*100} ÷ ${v} = ${n} verres.`);}
    return pioche([
      ()=>qcm("1 litre est égal à :",`1${ESP}000 cm³`,["100 cm³","10 cm³",`10${ESP}000 cm³`],`1 L = 1 dm³ = 1${ESP}000 cm³.`),
      ()=>qcm("Combien de cubes de 1 cm de côté faut-il pour remplir un cube de 1 dm de côté ?",esp(1000),["100","10",esp(10000)],`1 dm = 10 cm : 10 × 10 × 10 = 1${ESP}000 cubes.`),
      ()=>qcm("Le volume d'un objet, c'est :","la place qu'il occupe dans l'espace",["la longueur de son contour","sa masse","la surface d'une de ses faces"],"On le mesure en cm³, dm³ ou m³ ; la contenance se mesure en litres."),
      ()=>qcm("Quelle unité convient pour la contenance d'une baignoire ?","le litre",["le centilitre","le millilitre","le kilomètre"],"Une baignoire contient environ 150 à 200 litres.")
    ])();
  },
  conversions(){
    if(alea(0,4)===0)return pioche([
      ()=>qcm("Quelle unité convient pour la masse d'un éléphant ?","la tonne",["le gramme","le litre","le centimètre"],"Un éléphant pèse plusieurs tonnes ; 1 t = 1 000 kg."),
      ()=>qcm("Quelle unité convient pour la contenance d'une cuillère à café ?","le millilitre",["le litre","le kilogramme","le mètre"],"Une cuillère à café contient environ 5 mL."),
      ()=>qcm("Quelle unité convient pour la masse d'une pomme ?","le gramme",["la tonne","le litre","le kilomètre"],"Une pomme pèse environ 150 g.")
    ])();
    return conversion(CONV_MASSE);
  },
  duree(){
    const t=alea(1,5);
    if(t===1){const h=alea(1,5),m=alea(5,55);return saisie(`Combien de minutes y a-t-il dans ${h} h ${m} min ?`,[String(h*60+m)],`1 h = 60 min, donc ${h} h = ${h*60} min ; ${h*60} + ${m} = ${h*60+m} min.`);}
    if(t===2){const h=alea(1,4),m=alea(1,59),tot=h*60+m,mm=String(m).padStart(2,"0");
      return saisie(`Convertis ${tot} minutes en heures et minutes (écris comme 2 h 15 min).`,[`${h} h ${m} min`,`${h}h${m}min`,`${h} h ${m}`,`${h}h${m}`,`${h} h ${mm} min`,`${h}h${mm}`,`${h} h ${mm}`],`${tot} = ${h} × 60 + ${m} : cela fait ${h} h ${m} min.`);}
    if(t===3){const h=alea(8,18),m=alea(0,11)*5,d=alea(25,150),fin=h*60+m+d,fh=Math.floor(fin/60),fm=fin%60,mm=String(fm).padStart(2,"0");
      return saisie(`Un film commence à ${h2(h,m)} et dure ${d} minutes. À quelle heure se termine-t-il ? (écris comme 20 h 15)`,[`${fh} h ${mm}`,`${fh}h${mm}`,`${fh} h ${mm} min`,`${fh}:${mm}`],`${d} min = ${Math.floor(d/60)} h ${d%60} min. ${h2(h,m)} + ${Math.floor(d/60)} h ${d%60} min = ${h2(fh,fm)}.`);}
    if(t===4){const h=alea(8,16),m=alea(0,11)*5,d=alea(30,170),fin=h*60+m+d;
      return saisie(`Un match commence à ${h2(h,m)} et finit à ${h2(Math.floor(fin/60),fin%60)}. Combien de minutes dure-t-il ?`,[String(d),d+" min"],`On compte de ${h2(h,m)} jusqu'à ${h2(Math.floor(fin/60),fin%60)} : cela fait ${Math.floor(d/60)} h ${d%60} min, soit ${d} minutes.`);}
    return pioche([
      ()=>qcm("Combien de secondes y a-t-il dans une heure ?",esp(3600),["60",esp(1000),"360"],`1 h = 60 min et 1 min = 60 s : 60 × 60 = 3${ESP}600 s.`),
      ()=>qcm("Combien de jours compte une année bissextile ?","366",["365","360","364"],"Une année bissextile a un 29 février en plus."),
      ()=>qcm("Combien d'heures y a-t-il dans 3 jours ?","72",["36","48","300"],"1 jour = 24 h, donc 3 × 24 = 72 h."),
      ()=>qcm("Combien de minutes y a-t-il dans un quart d'heure ?","15",["25","45","4"],"60 ÷ 4 = 15 minutes."),
      ()=>qcm("Combien d'années y a-t-il dans un siècle ?","100",["10",esp(1000),"50"],"Un siècle = 100 ans ; un millénaire = 1 000 ans.")
    ])();
  },
  angles(){
    if(alea(0,1)){let m=alea(5,175);if(m===90)m=91;
      return qcm(`Un angle mesure ${m}°. C'est un angle :`,m<90?"aigu":"obtus",["aigu","droit","obtus","plat"],`Un angle droit mesure 90° et un angle plat 180°. Plus petit qu'un angle droit : aigu ; entre droit et plat : obtus.`);}
    return geom("angles");
  },
  triangles(){
    const t=alea(1,3);
    if(t===1){let a,b,c,type;const k=alea(1,3);
      if(k===1){a=b=c=alea(3,12);type="équilatéral";}
      else if(k===2){a=b=alea(3,12);do{c=alea(2,2*a-1);}while(c===a);type="isocèle";}
      else{do{a=alea(3,12);b=alea(3,12);c=alea(3,12);const s=[a,b,c].sort((x,y)=>x-y);var ok=a!==b&&b!==c&&a!==c&&s[0]+s[1]>s[2]&&s[0]*s[0]+s[1]*s[1]!==s[2]*s[2];}while(!ok);type="quelconque";}
      const l=melange([a,b,c]);
      return qcm(`Un triangle a des côtés de ${l[0]} cm, ${l[1]} cm et ${l[2]} cm. Ce triangle est :`,type,["équilatéral","isocèle","quelconque"],`Trois côtés égaux : équilatéral. Deux côtés égaux : isocèle. Aucun côté égal : quelconque.`);}
    if(t===2){const c=alea(3,15);return saisie(`Quel est le périmètre d'un triangle équilatéral de ${c} cm de côté, en cm ?`,[String(3*c)],`Ses trois côtés sont égaux : 3 × ${c} = ${3*c} cm.`);}
    return geom("triangles");
  },
  quadrilateres(){
    if(alea(0,2)===0){const c=alea(3,15);return saisie(`Un losange a des côtés de ${c} cm. Quel est son périmètre, en cm ?`,[String(4*c)],`Un losange a quatre côtés égaux : 4 × ${c} = ${4*c} cm.`);}
    return geom("quadrilateres");
  },
  cercle(){
    const t=alea(1,3);
    if(t===1){const r=alea(2,15);return saisie(`Un cercle a un rayon de ${r} cm. Quel est son diamètre, en cm ?`,[String(2*r)],`Le diamètre vaut deux fois le rayon : 2 × ${r} = ${2*r} cm.`);}
    if(t===2){const d=alea(3,24);return saisie(`Un cercle a un diamètre de ${d} cm. Quel est son rayon, en cm ?`,rep(d/2),`Le rayon est la moitié du diamètre : ${d} ÷ 2 = ${nb(d/2)} cm.`);}
    return geom("cercle");
  },
  symetrie(){
    if(alea(0,2)===0){const x=alea(2,9);
      if(alea(0,1))return saisie(`Le point A est à ${x} cm de l'axe de symétrie. À quelle distance de l'axe se trouve son symétrique A' (en cm) ?`,[String(x)],`Un point et son symétrique sont à la même distance de l'axe, de part et d'autre : ${x} cm.`);
      return saisie(`Le point A est à ${x} cm de l'axe de symétrie. Quelle est la longueur du segment [AA'], en cm ?`,[String(2*x)],`A et A' sont chacun à ${x} cm de l'axe, de chaque côté : AA' = 2 × ${x} = ${2*x} cm.`);}
    return geom("symetrie");
  },
  construction(){
    const t=alea(1,4);
    if(t===1){const a=alea(3,12);return saisie(`Trace un segment [AB] de ${a} cm, puis le cercle de centre A qui passe par B. Quel est le rayon de ce cercle, en cm ?`,[String(a)],`B est sur le cercle et A est le centre : le rayon est AB = ${a} cm.`);}
    if(t===2){const d=alea(4,16);return saisie(`Tu dois tracer un cercle de ${d} cm de diamètre. De combien de cm écartes-tu ton compas ?`,rep(d/2),`On écarte le compas de la longueur du rayon, la moitié du diamètre : ${nb(d/2)} cm.`);}
    if(t===3){const a=alea(3,15);return saisie(`Trace un segment [AB] de ${a} cm et place son milieu M. Combien mesure [AM], en cm ?`,rep(a/2),`Le milieu partage le segment en deux longueurs égales : ${a} ÷ 2 = ${nb(a/2)} cm.`);}
    return geom("construction");
  },
  problemes(){
    const t=alea(1,7),p=prenom();
    if(t===1){const n=alea(2,6),q=alea(3,9),tot=n*q,b=tot<20?20:tot<50?50:100;
      return saisie(`${p} achète ${n} livres à ${q} € l'un et paie avec un billet de ${b} €. Combien doit-on rendre à ${p} ?`,[String(b-tot),(b-tot)+" €"],`Étape 1 : ${n} × ${q} = ${tot} €. Étape 2 : ${b} − ${tot} = ${b-tot} €.`);}
    if(t===2){const c=alea(4,9),e=alea(22,29),tot=c*e,bus=Math.ceil(tot/50);
      return saisie(`Une école emmène ses ${c} classes de ${e} élèves en sortie. Un car a 50 places. Combien de cars faut-il au minimum pour les élèves ?`,[String(bus)],`Étape 1 : ${c} × ${e} = ${tot} élèves. Étape 2 : ${tot} = 50 × ${Math.floor(tot/50)} + ${tot%50}${tot%50?` : il faut un car de plus pour les ${tot%50} derniers, soit ${bus} cars`:` : ${bus} cars suffisent`}.`);}
    if(t===3){const a=alea(20,80),b=alea(5,30),c=alea(10,a+b-1);
      return saisie(`${p} a ${a} € dans sa tirelire. Sa grand-mère lui donne ${b} €, puis ${p} dépense ${c} € pour un jeu. Combien reste-t-il à ${p} ?`,[String(a+b-c),(a+b-c)+" €"],`Étape 1 : ${a} + ${b} = ${a+b} €. Étape 2 : ${a+b} − ${c} = ${a+b-c} €.`);}
    if(t===4){const k=pioche([12,15,20,25]),q=alea(8,20),r=alea(1,k-1),kg=k*q+r;
      if(alea(0,1))return saisie(`Un fermier récolte ${kg} kg de pommes et les range dans des caisses de ${k} kg. Combien de caisses peut-il remplir entièrement ?`,[String(q)],`${kg} = ${k} × ${q} + ${r} : ${q} caisses pleines.`);
      return saisie(`Un fermier récolte ${kg} kg de pommes et remplit le plus possible de caisses de ${k} kg. Combien de kilos de pommes restent hors des caisses ?`,[String(r)],`${kg} = ${k} × ${q} + ${r} : il reste ${r} kg.`);}
    if(t===5){const d1=alea(6,14),d2=alea(4,12),j=alea(2,6);
      return saisie(`Pendant ${j} jours, ${p} marche ${d1} km le matin et ${d2} km l'après-midi. Combien de kilomètres parcourt ${p} en tout ?`,[String((d1+d2)*j)],`Par jour : ${d1} + ${d2} = ${d1+d2} km. En ${j} jours : ${d1+d2} × ${j} = ${(d1+d2)*j} km.`);}
    if(t===6){const n=alea(2,5),bg=pioche([95,105,110,115,120]),g=alea(6,15)*50,tot=n*bg+g;
      return saisie(`${p} achète ${n} baguettes à ${euros(bg)} l'une et un gâteau à ${euros(g)}. Combien ${p} paie-t-il en tout ?`,repEuros(tot),`Étape 1 : ${n} × ${euros(bg)} = ${euros(n*bg)}. Étape 2 : ${euros(n*bg)} + ${euros(g)} = ${euros(tot)}.`);}
    const s=pioche([5,10,15,20]),k=alea(3,12),e=alea(4,20)*5,v=e+s*k;
    return saisie(`Un vélo coûte ${v} €. ${p} a déjà économisé ${e} € et met ${s} € de côté chaque semaine. Combien de semaines faut-il encore attendre ?`,[String(k)],`Il manque ${v} − ${e} = ${v-e} €. ${v-e} ÷ ${s} = ${k} semaines.`);
  },
  calcmental(){
    const t=alea(1,10);
    if(t===1){const a=alea(6,12),b=alea(6,12);return saisie(`Calcule : ${a} × ${b}`,[String(a*b)],`${a} × ${b} = ${a*b}. Les tables doivent être sues par cœur.`);}
    if(t===2){const x=alea(11,999)/10,m=pioche([10,100,1000]),r=+(x*m).toFixed(6);return saisie(`Calcule : ${nb(x)} × ${esp(m)}`,rep(r),`× ${esp(m)} : chaque chiffre devient ${esp(m)} fois plus grand, la virgule se décale de ${String(m).length-1} rang(s) vers la droite. ${nb(r)}.`);}
    if(t===3){if(alea(0,1)){const n=alea(51,499)*2;return saisie(`Quelle est la moitié de ${n} ?`,[String(n/2)],`On partage en deux : ${n} ÷ 2 = ${n/2}.`);}
      const x=alea(11,99)/10;return saisie(`Quel est le double de ${nb(x)} ?`,rep(2*x),`${nb(x)} + ${nb(x)} = ${nb(2*x)}.`);}
    if(t===4){if(alea(0,1)){const x=alea(1,99);return saisie(`Complète : ${x} + … = 100`,[String(100-x)],`100 − ${x} = ${100-x}.`);}
      const x=alea(1,99)*10;return saisie(`Complète : ${x} + … = 1${ESP}000`,[String(1000-x)],`1${ESP}000 − ${x} = ${1000-x}.`);}
    if(t===5){const a=alea(25,480),k=pioche([99,199,999]);return saisie(`Calcule : ${a} + ${k}`,[String(a+k),esp(a+k)],`Ajouter ${k}, c'est ajouter ${k+1} puis enlever 1 : ${a} + ${k+1} − 1 = ${esp(a+k)}.`);}
    if(t===6){const a=alea(2,20),b=alea(2,9),c=alea(2,9);return qcm(`Calcule : ${a} + ${b} × ${c}`,String(a+b*c),[String((a+b)*c),String(a+b+c),String(a*b+c)],`La multiplication passe avant l'addition : ${b} × ${c} = ${b*c}, puis ${a} + ${b*c} = ${a+b*c}.`);}
    if(t===7){const k=alea(2,16);return saisie(`Calcule : 25 × ${4*k}`,[String(100*k),esp(100*k)],`25 × 4 = 100, donc 25 × ${4*k} = 100 × ${k} = ${esp(100*k)}.`);}
    if(t===8){const a=alea(12,60),b=alea(3,9);return saisie(`Calcule : ${a*b} ÷ ${b}`,[String(a)],`${a*b} ÷ ${b} = ${a}, car ${a} × ${b} = ${a*b}.`);}
    if(t===9){const a=alea(1,9),b=alea(1,9);return saisie(`Calcule : ${nb(a/10)} + ${nb(b/10)}`,rep((a+b)/10),`${a} dixième${a>1?"s":""} + ${b} dixième${b>1?"s":""} = ${a+b} dixièmes = ${nb((a+b)/10)}.`);}
    const [q,d]=pioche([["la moitié",2],["le quart",4],["le tiers",3],["le dixième",10]]),n=d*alea(3,30);
    return saisie(`Combien vaut ${q} de ${n} ?`,[String(n/d)],`${q.replace("la ","").replace("le ","")} : on divise par ${d}. ${n} ÷ ${d} = ${n/d}.`);
  }
};
function exoMaths(tag){
  if(BILANS[tag])tag=pioche(BILANS[tag]);
  const f=GM[tag]||GM[pioche(Object.keys(GM))];return f();
}

/* ---------- FRANÇAIS ---------- */
/* Verbes : présent complet, radical de l'imparfait, radical du futur, passé simple (il / ils), participe passé, auxiliaire, impératif */
const VERBES=[
 {inf:"chanter",g:1,pres:["chante","chantes","chante","chantons","chantez","chantent"],imp:"chant",fut:"chanter",ps:["chanta","chantèrent"],pp:"chanté",aux:"avoir",ipf:["chante","chantons","chantez"]},
 {inf:"jouer",g:1,pres:["joue","joues","joue","jouons","jouez","jouent"],imp:"jou",fut:"jouer",ps:["joua","jouèrent"],pp:"joué",aux:"avoir",ipf:["joue","jouons","jouez"]},
 {inf:"arriver",g:1,pres:["arrive","arrives","arrive","arrivons","arrivez","arrivent"],imp:"arriv",fut:"arriver",ps:["arriva","arrivèrent"],pp:"arrivé",aux:"être",ipf:["arrive","arrivons","arrivez"]},
 {inf:"finir",g:2,pres:["finis","finis","finit","finissons","finissez","finissent"],imp:"finiss",fut:"finir",ps:["finit","finirent"],pp:"fini",aux:"avoir",ipf:["finis","finissons","finissez"]},
 {inf:"grandir",g:2,pres:["grandis","grandis","grandit","grandissons","grandissez","grandissent"],imp:"grandiss",fut:"grandir",ps:["grandit","grandirent"],pp:"grandi",aux:"avoir",ipf:["grandis","grandissons","grandissez"]},
 {inf:"être",g:3,pres:["suis","es","est","sommes","êtes","sont"],imp:"ét",fut:"ser",ps:["fut","furent"],pp:"été",aux:"avoir",ipf:["sois","soyons","soyez"]},
 {inf:"avoir",g:3,pres:["ai","as","a","avons","avez","ont"],imp:"av",fut:"aur",ps:["eut","eurent"],pp:"eu",aux:"avoir",ipf:["aie","ayons","ayez"]},
 {inf:"aller",g:3,pres:["vais","vas","va","allons","allez","vont"],imp:"all",fut:"ir",ps:["alla","allèrent"],pp:"allé",aux:"être",ipf:["va","allons","allez"]},
 {inf:"faire",g:3,pres:["fais","fais","fait","faisons","faites","font"],imp:"fais",fut:"fer",ps:["fit","firent"],pp:"fait",aux:"avoir",ipf:["fais","faisons","faites"]},
 {inf:"prendre",g:3,pres:["prends","prends","prend","prenons","prenez","prennent"],imp:"pren",fut:"prendr",ps:["prit","prirent"],pp:"pris",aux:"avoir",ipf:["prends","prenons","prenez"]},
 {inf:"venir",g:3,pres:["viens","viens","vient","venons","venez","viennent"],imp:"ven",fut:"viendr",ps:["vint","vinrent"],pp:"venu",aux:"être",ipf:["viens","venons","venez"]},
 {inf:"partir",g:3,pres:["pars","pars","part","partons","partez","partent"],imp:"part",fut:"partir",ps:["partit","partirent"],pp:"parti",aux:"être",ipf:["pars","partons","partez"]},
 {inf:"dire",g:3,pres:["dis","dis","dit","disons","dites","disent"],imp:"dis",fut:"dir",ps:["dit","dirent"],pp:"dit",aux:"avoir",ipf:["dis","disons","dites"]},
 {inf:"pouvoir",g:3,pres:["peux","peux","peut","pouvons","pouvez","peuvent"],imp:"pouv",fut:"pourr",ps:["put","purent"],pp:"pu",aux:"avoir",ipf:null},
 {inf:"voir",g:3,pres:["vois","vois","voit","voyons","voyez","voient"],imp:"voy",fut:"verr",ps:["vit","virent"],pp:"vu",aux:"avoir",ipf:["vois","voyons","voyez"]},
 {inf:"mettre",g:3,pres:["mets","mets","met","mettons","mettez","mettent"],imp:"mett",fut:"mettr",ps:["mit","mirent"],pp:"mis",aux:"avoir",ipf:["mets","mettons","mettez"]},
 {inf:"lire",g:3,pres:["lis","lis","lit","lisons","lisez","lisent"],imp:"lis",fut:"lir",ps:["lut","lurent"],pp:"lu",aux:"avoir",ipf:["lis","lisons","lisez"]}
];
const PRON=["je","tu","il","elle","nous","vous","ils","elles"],PERS=[0,1,2,2,3,4,5,5];
const T_IMP=["ais","ais","ait","ions","iez","aient"],T_FUT=["ai","as","a","ons","ez","ont"];
const AUX={avoir:{pres:["ai","as","a","avons","avez","ont"],imp:["avais","avais","avait","avions","aviez","avaient"]},
           être:{pres:["suis","es","est","sommes","êtes","sont"],imp:["étais","étais","était","étions","étiez","étaient"]}};
const avecPron=(p,f)=>(p==="je"&&/^[aeéèêiouyh]/i.test(f))?"j'"+f:p+" "+f;
const groupe=v=>v.g===1?"1er groupe":v.g===2?"2e groupe":"3e groupe";
function accordsPP(v,k){ // participes acceptés selon le pronom (k = indice dans PRON)
  if(v.aux!=="être")return [v.pp];
  return [[v.pp,v.pp+"e"],[v.pp,v.pp+"e"],[v.pp],[v.pp+"e"],[v.pp+"s",v.pp+"es"],[v.pp,v.pp+"e",v.pp+"s",v.pp+"es"],[v.pp+"s"],[v.pp+"es"]][k];
}
const AU_TEMPS=tp=>(tp==="imp"||tp==="ipf"?"à l'":"au ")+NOM_TEMPS[tp];
const NOM_TEMPS={pres:"présent",imp:"imparfait",fut:"futur simple",ps:"passé simple",pc:"passé composé",pqp:"plus-que-parfait",cond:"conditionnel présent",ipf:"impératif présent"};
function conjuguer(tp){
  let v=pioche(VERBES);
  if(tp==="ipf"){while(!v.ipf)v=pioche(VERBES);
    const i=alea(0,2),noms=["2e personne du singulier","1re personne du pluriel","2e personne du pluriel"];
    return saisie(`Conjugue « ${v.inf} » à l'impératif présent, ${noms[i]}.`,[v.ipf[i]],`${v.ipf[i]} ! L'impératif n'a que trois personnes et pas de sujet.${v.g===1&&i===0?" Pour les verbes en -er, pas de -s à la 2e personne du singulier.":""}`);}
  if(tp==="ps"){const k=pioche([2,3,6,7]),f=v.ps[k>=6?1:0],p=PRON[k];
    return saisie(`Conjugue « ${v.inf} » au passé simple : ${p} …`,[f,`${p} ${f}`],`${p} ${f}. Au passé simple, les verbes en -er font -a / -èrent ; les autres font souvent -it / -irent ou -ut / -urent (venir : vint / vinrent).`);}
  const k=alea(0,7),p=PRON[k],i=PERS[k];
  if(tp==="pc"||tp==="pqp"){
    const aux=AUX[v.aux][tp==="pc"?"pres":"imp"][i],pps=accordsPP(v,k),acc=[];
    for(const pp of pps){acc.push(`${aux} ${pp}`,avecPron(p,`${aux} ${pp}`));}
    const regle=v.aux==="être"?"Avec être, le participe passé s'accorde avec le sujet.":"Avec avoir, le participe passé ne s'accorde pas avec le sujet.";
    return saisie(`Conjugue « ${v.inf} » ${AU_TEMPS(tp)} : ${p} …`,acc,`${avecPron(p,`${aux} ${pps[0]}`)}. ${NOM_TEMPS[tp]==="passé composé"?"Passé composé":"Plus-que-parfait"} = auxiliaire ${v.aux} ${tp==="pc"?"au présent":"à l'imparfait"} + participe passé. ${regle}`);}
  let f,expl;
  if(tp==="pres"){f=v.pres[i];expl=v.g===1?"Au présent, les verbes en -er prennent -e, -es, -e, -ons, -ez, -ent.":v.g===2?"Au présent, les verbes du 2e groupe prennent -is, -is, -it, -issons, -issez, -issent.":"C'est un verbe du 3e groupe : son présent s'apprend par cœur.";}
  else if(tp==="imp"){f=v.imp+T_IMP[i];expl="À l'imparfait, les terminaisons sont toujours -ais, -ais, -ait, -ions, -iez, -aient.";}
  else if(tp==="fut"){f=v.fut+T_FUT[i];expl=`Au futur, on ajoute -ai, -as, -a, -ons, -ez, -ont au radical du futur (${v.fut}-).`;}
  else {f=v.fut+T_IMP[i];expl=`Conditionnel présent = radical du futur (${v.fut}-) + terminaisons de l'imparfait (-ais, -ais, -ait, -ions, -iez, -aient).`;}
  return saisie(`Conjugue « ${v.inf} » ${AU_TEMPS(tp)} : ${p} …`,[f,avecPron(p,f)],`${avecPron(p,f)}. ${expl}`);
}
const BANQUE_F=[
 /* types et formes de phrases */
 {t:"phrase",q:"« Ferme la fenêtre. » Quel est le type de cette phrase ?",b:"injonctive",f:["déclarative","interrogative","exclamative"],e:"Elle donne un ordre ; le verbe est souvent à l'impératif."},
 {t:"phrase",q:"« Quelle belle vue ! » Quel est le type de cette phrase ?",b:"exclamative",f:["déclarative","interrogative","injonctive"],e:"Elle exprime un sentiment et se termine par un point d'exclamation."},
 {t:"phrase",q:"« Viendras-tu demain ? » Quel est le type de cette phrase ?",b:"interrogative",f:["déclarative","exclamative","injonctive"],e:"Elle pose une question et se termine par un point d'interrogation."},
 {t:"phrase",q:"« Le train part à huit heures. » Quel est le type de cette phrase ?",b:"déclarative",f:["interrogative","exclamative","injonctive"],e:"Elle donne une information et se termine par un point."},
 {t:"phrase",q:"Quelle est la forme négative de « Il pleut encore » ?",b:"Il ne pleut plus.",f:["Il ne pleut pas encore.","Il pleut pas encore.","Il ne pleut jamais encore."],e:"Le contraire de « encore » est « ne… plus »."},
 {t:"phrase",q:"Laquelle de ces phrases est à la forme négative ?",b:"Personne n'est venu.",f:["Tout le monde est venu.","Quelqu'un est venu.","Paul est venu."],e:"La négation est formée de deux mots : ne… personne."},
 {t:"phrase",q:"Comment transformer « Tu viens au parc. » en question avec inversion du sujet ?",b:"Viens-tu au parc ?",f:["Tu viens-tu au parc ?","Viens tu au parc.","Est-ce tu viens au parc ?"],e:"On place le pronom sujet après le verbe, avec un trait d'union."},
 /* accord sujet-verbe */
 {t:"accordsv",q:"Complète : « Les enfants de ma voisine ___ dans le jardin. »",b:"jouent",f:["joue","joues","jouer"],e:"Le sujet est « les enfants » (pluriel), pas « ma voisine » : -ent."},
 {t:"accordsv",q:"Complète : « Toi et moi ___ partir. »",b:"allons",f:["vont","va","allez"],e:"« Toi et moi », c'est « nous » : nous allons."},
 {t:"accordsv",q:"Complète : « Dans la forêt ___ des loups. »",b:"vivent",f:["vit","vis","vivre"],e:"Le sujet « des loups » est placé après le verbe : il est au pluriel."},
 {t:"accordsv",q:"Complète : « Le chien de mes cousins ___ très fort. »",b:"aboie",f:["aboient","aboies","aboyer"],e:"Qui est-ce qui aboie ? Le chien (singulier) ; « de mes cousins » complète le nom."},
 {t:"accordsv",q:"Complète : « Mes amis les ___ chaque matin. »",b:"regardent",f:["regarde","regardes","regarder"],e:"« les » est un pronom complément, pas le sujet. Le sujet est « mes amis » : -ent."},
 {t:"accordsv",q:"Complète : « Vous ___ vos devoirs. »",b:"faites",f:["faisez","faisons","font"],e:"faire au présent : vous faites (forme irrégulière)."},
 {t:"accordsv",q:"Complète : « Chaque élève ___ son cahier. »",b:"range",f:["rangent","ranges","ranger"],e:"« Chaque élève » est au singulier."},
 {t:"accordsv",q:"Complète : « Léa et Tom ___ au cinéma. »",b:"vont",f:["va","allons","vas"],e:"Deux sujets au singulier forment un sujet pluriel : ils vont."},
 /* homophones */
 {t:"homophones",q:"Complète : « Il ___ parti à l'école. »",b:"est",f:["et"],e:"On peut dire « il était parti » : c'est le verbe être."},
 {t:"homophones",q:"Complète : « Léa ___ Sacha jouent dehors. »",b:"et",f:["est"],e:"On peut dire « et puis » : c'est le mot qui relie."},
 {t:"homophones",q:"Complète : « Nora va ___ la piscine. »",b:"à",f:["a"],e:"On ne peut pas dire « avait » : c'est la préposition à."},
 {t:"homophones",q:"Complète : « Il ___ pris son cartable. »",b:"a",f:["à"],e:"On peut dire « il avait pris » : c'est le verbe avoir."},
 {t:"homophones",q:"Complète : « Les élèves ___ terminé leur exercice. »",b:"ont",f:["on"],e:"On peut dire « avaient terminé » : c'est le verbe avoir."},
 {t:"homophones",q:"Complète : « ___ range ses affaires avant de partir. »",b:"On",f:["Ont"],e:"On peut remplacer par « il » : c'est le pronom on."},
 {t:"homophones",q:"Complète : « Ces livres ___ à moi. »",b:"sont",f:["son"],e:"On peut dire « étaient » : c'est le verbe être."},
 {t:"homophones",q:"Complète : « Il a oublié ___ cahier. »",b:"son",f:["sont"],e:"On peut dire « mon cahier » : c'est un déterminant possessif."},
 {t:"homophones",q:"Complète : « Kenzo range ___ affaires de sport. »",b:"ses",f:["ces","c'est"],e:"Ce sont les siennes : « ses » marque la possession."},
 {t:"homophones",q:"Complète : « Regarde ___ nuages, l'orage arrive. »",b:"ces",f:["ses","s'est"],e:"On montre : on peut dire « ces nuages-là »."},
 {t:"homophones",q:"Complète : « Il ___ trompé de chemin. »",b:"s'est",f:["c'est","ces"],e:"Verbe se tromper : il s'est trompé (on peut dire « je me suis trompé »)."},
 {t:"homophones",q:"Complète : « ___ le plus beau jour de l'année. »",b:"C'est",f:["S'est","Ses"],e:"On peut dire « cela est » : c'est."},
 {t:"homophones",q:"Complète : « Veux-tu du jus ___ de l'eau ? »",b:"ou",f:["où"],e:"On peut dire « ou bien » : c'est un choix, sans accent."},
 {t:"homophones",q:"Complète : « ___ habites-tu ? »",b:"Où",f:["Ou"],e:"Il s'agit du lieu : où prend un accent."},
 {t:"homophones",q:"Complète : « Le chat ___ griffé. »",b:"l'a",f:["la","là"],e:"On peut dire « l'avait griffé » : c'est le pronom l' + le verbe avoir."},
 {t:"homophones",q:"Complète : « Pose ton sac ___, près de la porte. »",b:"là",f:["la","l'a"],e:"Il indique un lieu : là prend un accent."},
 {t:"homophones",q:"Complète : « Je voulais venir, ___ il pleuvait. »",b:"mais",f:["mes","met"],e:"On peut dire « pourtant » : c'est la conjonction mais."},
 {t:"homophones",q:"Complète : « Range ___ chaussures. »",b:"mes",f:["mais","met"],e:"Ce sont les miennes : déterminant possessif mes."},
 {t:"homophones",q:"Complète : « Il ___ lave les mains. »",b:"se",f:["ce"],e:"Verbe se laver : on peut dire « je me lave »."},
 {t:"homophones",q:"Complète : « ___ livre est passionnant. »",b:"Ce",f:["Se"],e:"On montre le livre : on peut dire « ce livre-là »."},
 {t:"homophones",q:"Complète : « Les enfants rangent ___ affaires. »",b:"leurs",f:["leur"],e:"Devant un nom pluriel, le déterminant leurs prend un -s."},
 {t:"homophones",q:"Complète : « Je ___ donne un conseil. » (à eux)",b:"leur",f:["leurs"],e:"Devant un verbe, leur est un pronom : il ne prend jamais de -s."},
 /* accords dans le groupe nominal */
 {t:"accordsgn",q:"Complète : « des fleurs ___ » (blanc)",b:"blanches",f:["blancs","blanche","blanc"],e:"Fleurs est féminin pluriel : blanc → blanches."},
 {t:"accordsgn",q:"Complète : « un ___ arbre » (beau)",b:"bel",f:["beau","belle","beaux"],e:"Devant un nom masculin qui commence par une voyelle, beau devient bel."},
 {t:"accordsgn",q:"Complète : « les ___ maisons » (vieux)",b:"vieilles",f:["vieux","vieille","vieils"],e:"Maisons est féminin pluriel : vieux → vieilles."},
 {t:"accordsgn",q:"Complète : « des journaux ___ » (local)",b:"locaux",f:["locals","locales","local"],e:"Les adjectifs en -al font souvent -aux au masculin pluriel."},
 {t:"accordsgn",q:"Complète : « une jupe et une robe ___ » (noir)",b:"noires",f:["noirs","noire","noir"],e:"Deux noms féminins : l'adjectif est au féminin pluriel."},
 {t:"accordsgn",q:"Complète : « un garçon et une fille ___ » (gentil)",b:"gentils",f:["gentilles","gentil","gentille"],e:"Masculin + féminin : l'adjectif se met au masculin pluriel."},
 {t:"accordsgn",q:"Complète : « une histoire ___ » (merveilleux)",b:"merveilleuse",f:["merveilleux","merveilleuses","merveilleuxe"],e:"Les adjectifs en -eux font -euse au féminin."},
 {t:"accordsgn",q:"Complète : « des gâteaux ___ » (délicieux)",b:"délicieux",f:["délicieuxs","délicieuses","délicieuse"],e:"Un adjectif terminé par -x ne change pas au masculin pluriel."},
 {t:"accordsgn",q:"Quel est le pluriel de « un bijou précieux » ?",b:"des bijoux précieux",f:["des bijous précieux","des bijoux précieuxs","des bijou précieux"],e:"Bijou fait partie des sept noms en -ou qui prennent un -x au pluriel."},
 /* phrase simple et complexe */
 {t:"phrasecomplexe",q:"Combien de propositions y a-t-il dans « Le soleil brille et les oiseaux chantent. » ?",b:"2",f:["1","3","4"],e:"Il y a deux verbes conjugués (brille, chantent), donc deux propositions."},
 {t:"phrasecomplexe",q:"Une phrase simple contient :",b:"un seul verbe conjugué",f:["deux verbes conjugués","aucun nom","toujours une virgule"],e:"Une phrase complexe contient au moins deux verbes conjugués."},
 {t:"phrasecomplexe",q:"Quelle phrase est complexe ?",b:"Je pense que tu as raison.",f:["Le chat dort sur le canapé.","Quelle belle journée !","Les enfants jouent au ballon dans la cour."],e:"Elle contient deux verbes conjugués : pense et as."},
 {t:"phrasecomplexe",q:"Dans « Je mange, je bois, je dors. », les propositions sont :",b:"juxtaposées",f:["coordonnées","subordonnées","absentes"],e:"Elles sont séparées par des virgules, sans mot de liaison."},
 {t:"phrasecomplexe",q:"Dans « Il pleut mais nous sortons. », les propositions sont :",b:"coordonnées",f:["juxtaposées","subordonnées","impossibles à trouver"],e:"Elles sont reliées par la conjonction de coordination « mais »."},
 {t:"phrasecomplexe",q:"Combien de verbes conjugués y a-t-il dans « Quand la cloche sonne, les élèves rentrent. » ?",b:"2",f:["1","3","0"],e:"sonne et rentrent : deux verbes conjugués, deux propositions."},
 {t:"phrasecomplexe",q:"Complète avec une conjonction de coordination : « J'ai froid, ___ j'ai oublié mon manteau. »",b:"car",f:["donc","ni","or"],e:"car introduit une explication : j'ai froid parce que j'ai oublié mon manteau."},
 {t:"phrasecomplexe",q:"Dans « Je sais que tu viendras. », « que tu viendras » est :",b:"une proposition subordonnée",f:["une proposition juxtaposée","un nom","un adjectif"],e:"Elle dépend de la proposition principale « je sais » et commence par « que »."},
 /* vocabulaire */
 {t:"vocab",q:"Quel mot est de la même famille que « dent » ?",b:"dentiste",f:["danse","dense","dans"],e:"Dentiste contient le radical dent- et parle des dents."},
 {t:"vocab",q:"Quel est le contraire de « possible » ?",b:"impossible",f:["dépossible","impossiblement","possiblement"],e:"Le préfixe im- (ou in-) donne le contraire."},
 {t:"vocab",q:"Que signifie le préfixe « pré- » dans « préhistoire » ?",b:"avant",f:["après","contre","pendant"],e:"La préhistoire est la période avant l'invention de l'écriture."},
 {t:"vocab",q:"Que signifie le suffixe « -able » dans « lavable » ?",b:"qui peut être",f:["qui ne peut pas être","celui qui fait","petit"],e:"Lavable = qui peut être lavé."},
 {t:"vocab",q:"Le suffixe « -eur » dans « chanteur » désigne :",b:"celui qui fait l'action",f:["un lieu","un petit objet","une qualité"],e:"Le chanteur est celui qui chante ; le nageur, celui qui nage."},
 {t:"vocab",q:"Quel mot contient un préfixe ?",b:"défaire",f:["dauphin","décembre","dent"],e:"dé- + faire : le préfixe dé- indique le contraire."},
 {t:"vocab",q:"Quel est le mot générique de « pomme, poire, cerise » ?",b:"fruit",f:["légume","arbre","dessert"],e:"Le mot générique désigne toute la catégorie."},
 {t:"vocab",q:"Quel mot est un synonyme de « effrayé » ?",b:"apeuré",f:["courageux","joyeux","calme"],e:"Un synonyme a un sens proche."},
 /* sens des mots */
 {t:"sens",q:"Dans « Il a un cœur de pierre », le mot « pierre » est employé au sens :",b:"figuré",f:["propre"],e:"Son cœur n'est pas vraiment en pierre : cela veut dire qu'il est insensible."},
 {t:"sens",q:"Dans « Le maçon pose une pierre », le mot « pierre » est employé au sens :",b:"propre",f:["figuré"],e:"C'est le sens premier, concret, du mot."},
 {t:"sens",q:"Que veut dire « avoir la tête dans les nuages » ?",b:"être distrait, rêveur",f:["être très grand","avoir froid à la tête","être en avion"],e:"C'est une expression au sens figuré."},
 {t:"sens",q:"Que signifie « poser un lapin à quelqu'un » ?",b:"ne pas venir à un rendez-vous",f:["lui offrir un animal","lui faire peur","courir très vite"],e:"Expression familière au sens figuré."},
 {t:"sens",q:"Que signifie « coûter les yeux de la tête » ?",b:"coûter très cher",f:["faire mal aux yeux","être gratuit","être très beau"],e:"Expression au sens figuré."},
 {t:"sens",q:"Un mot qui a plusieurs sens (comme « carte » ou « souris ») est un mot :",b:"polysémique",f:["synonyme","contraire","inventé"],e:"Le contexte de la phrase permet de trouver le bon sens."},
 {t:"sens",q:"Quel est le contraire de « léger » ?",b:"lourd",f:["fin","doux","rapide"],e:"Un antonyme a un sens opposé."},
 {t:"sens",q:"Quel est un synonyme de « commencer » ?",b:"débuter",f:["terminer","arrêter","finir"],e:"Débuter et commencer ont le même sens."},
 /* figures de style */
 {t:"figures",q:"« Ses yeux brillent comme des étoiles. » Quelle figure de style ?",b:"une comparaison",f:["une métaphore","une personnification"],e:"Il y a un outil de comparaison : « comme »."},
 {t:"figures",q:"« La lune est une lanterne dans la nuit. » Quelle figure de style ?",b:"une métaphore",f:["une comparaison","une personnification"],e:"On rapproche la lune et une lanterne sans outil de comparaison."},
 {t:"figures",q:"« Le vent hurle dans la cheminée. » Quelle figure de style ?",b:"une personnification",f:["une comparaison","une métaphore"],e:"On prête au vent une action humaine : hurler."},
 {t:"figures",q:"Quel mot introduit souvent une comparaison ?",b:"comme",f:["mais","donc","car"],e:"Autres outils : tel, pareil à, ressembler à."},
 {t:"figures",q:"« Il est fort comme un bœuf. » À quoi compare-t-on l'homme ?",b:"à un bœuf",f:["à un arbre","à un mur","à rien"],e:"Le comparé est l'homme, le comparant est le bœuf, l'outil est « comme »."},
 {t:"figures",q:"« Les arbres dansent sous le vent. » Quelle figure de style ?",b:"une personnification",f:["une comparaison","une métaphore"],e:"Danser est une action humaine prêtée aux arbres."},
 {t:"figures",q:"« La mer est un miroir. » Quelle figure de style ?",b:"une métaphore",f:["une comparaison","une personnification"],e:"Pas d'outil de comparaison : c'est une métaphore."},
 /* pronoms */
 {t:"pronoms",q:"« Léa range ses livres. » Par quel pronom remplacer « ses livres » ? Léa ___ range.",b:"les",f:["leur","lui","la"],e:"« ses livres » est COD, au pluriel : on le remplace par les."},
 {t:"pronoms",q:"« Tom parle à sa mère. » Par quel pronom remplacer « à sa mère » ? Tom ___ parle.",b:"lui",f:["la","le","leur"],e:"« à sa mère » est COI, au singulier : on le remplace par lui."},
 {t:"pronoms",q:"« Les enfants parlent à leurs amis. » Les enfants ___ parlent.",b:"leur",f:["leurs","les","lui"],e:"« à leurs amis » est COI au pluriel : on le remplace par leur (sans -s)."},
 {t:"pronoms",q:"Quel pronom remplace « Hugo et moi » ?",b:"nous",f:["vous","ils","eux"],e:"Quand « moi » fait partie du groupe, on utilise nous."},
 {t:"pronoms",q:"Quel pronom remplace « Inès et toi » ?",b:"vous",f:["nous","elles","ils"],e:"Quand « toi » fait partie du groupe (sans moi), on utilise vous."},
 {t:"pronoms",q:"Dans « Nous la regardons », le mot « la » est :",b:"un pronom personnel complément",f:["un déterminant","un nom","un pronom sujet"],e:"Il est devant un verbe et remplace un COD féminin singulier."},
 {t:"pronoms",q:"« J'ai deux stylos : le tien est bleu. » « Le tien » est un pronom :",b:"possessif",f:["personnel sujet","démonstratif","interrogatif"],e:"Le tien = ton stylo : il indique à qui appartient l'objet."},
 /* questions sur les temps */
 {t:"imparfait",q:"Dans un récit au passé, l'imparfait sert surtout à :",b:"décrire le décor et les habitudes",f:["raconter les actions soudaines","donner un ordre","parler du futur"],e:"Les actions soudaines de premier plan sont au passé simple."},
 {t:"imparfait",q:"Quel verbe est à l'imparfait ?",b:"nous chantions",f:["nous chantons","nous chanterons","nous chanterions"],e:"Terminaisons de l'imparfait : -ais, -ais, -ait, -ions, -iez, -aient."},
 {t:"futur",q:"Quel verbe est au futur simple ?",b:"ils prendront",f:["ils prenaient","ils prennent","ils prendraient"],e:"Le futur se termine par -ai, -as, -a, -ons, -ez, -ont."},
 {t:"futur",q:"Quel est le radical du futur du verbe « voir » ?",b:"verr-",f:["voir-","voy-","vois-"],e:"je verrai, tu verras… Ce radical est irrégulier."},
 {t:"passesimple",q:"Dans un récit, quel temps exprime les actions brèves de premier plan ?",b:"le passé simple",f:["l'imparfait","le présent","le futur"],e:"« Soudain, le loup surgit. » L'imparfait plante le décor."},
 {t:"passesimple",q:"Quel verbe est au passé simple ?",b:"ils partirent",f:["ils partaient","ils partiront","ils partent"],e:"Au passé simple, partir fait il partit, ils partirent."},
 {t:"passecompose",q:"Le passé composé se forme avec :",b:"l'auxiliaire être ou avoir au présent + le participe passé",f:["l'auxiliaire à l'imparfait + le participe passé","le radical du futur + -ais","le verbe à l'infinitif"],e:"Exemple : j'ai mangé, elle est partie."},
 {t:"passecompose",q:"Quel verbe est au passé composé ?",b:"tu as fini",f:["tu avais fini","tu finis","tu finiras"],e:"as (avoir au présent) + fini (participe passé)."},
 {t:"plusqueparfait",q:"Le plus-que-parfait se forme avec :",b:"l'auxiliaire être ou avoir à l'imparfait + le participe passé",f:["l'auxiliaire au présent + le participe passé","le radical du futur + -ais","l'infinitif + -ait"],e:"Exemple : j'avais mangé, elle était partie."},
 {t:"plusqueparfait",q:"Complète : « Quand nous sommes arrivés, le film ___ commencé. »",b:"avait",f:["aura","avais","a eu"],e:"Le plus-que-parfait exprime une action passée qui a eu lieu avant une autre action passée."},
 {t:"imperatif",q:"Quelle phrase est à l'impératif ?",b:"Range ta chambre.",f:["Tu ranges ta chambre.","Tu rangeras ta chambre.","Il range sa chambre."],e:"À l'impératif, il n'y a pas de sujet exprimé."},
 {t:"imperatif",q:"À combien de personnes conjugue-t-on l'impératif ?",b:"3",f:["6","1","2"],e:"2e personne du singulier, 1re et 2e personnes du pluriel."},
 {t:"imperatif",q:"Quelle est la bonne orthographe ?",b:"Mange ta soupe !",f:["Manges ta soupe !","Mangent ta soupe !","Mangez ta soupe, toi !"],e:"Verbes en -er : pas de -s à la 2e personne du singulier de l'impératif."},
 {t:"conditionnel",q:"Quelle phrase est au conditionnel présent ?",b:"Je voudrais un verre d'eau.",f:["Je voulais un verre d'eau.","Je voudrai un verre d'eau.","Je veux un verre d'eau."],e:"Le conditionnel se termine par -ais, -ait, -ions… avec le radical du futur (voudr-)."},
 {t:"conditionnel",q:"Complète : « Si j'avais des ailes, je ___. »",b:"volerais",f:["volerai","volais","vole"],e:"Après « si + imparfait », on emploie le conditionnel présent."},
 {t:"conditionnel",q:"Le conditionnel présent sert notamment à :",b:"exprimer un souhait, une demande polie ou une action soumise à une condition",f:["raconter une action passée certaine","donner un ordre","décrire une habitude passée"],e:"« Pourrais-tu m'aider ? » est plus poli que « Peux-tu m'aider ? »."},
 {t:"recit",q:"« Nous dînions tranquillement. Soudain, le téléphone ___. »",b:"sonna",f:["sonnait","sonnera","sonnerait"],e:"Action brève et soudaine dans un récit au passé : passé simple."},
 {t:"recit",q:"« Avant, mon grand-père ___ à la campagne. »",b:"habitait",f:["habita","habitera","habiterait"],e:"Une situation qui dure dans le passé s'écrit à l'imparfait."},
 {t:"recit",q:"« Le vent soufflait fort quand le bateau chavira. » Quel verbe est à l'imparfait ?",b:"soufflait",f:["chavira","le vent","quand"],e:"soufflait : terminaison -ait de l'imparfait. chavira est au passé simple."},
 {t:"recit",q:"« Il faisait nuit. Soudain, un cri éclata. » Quel verbe est au passé simple ?",b:"éclata",f:["faisait","nuit","soudain"],e:"éclata : verbe en -er au passé simple, terminaison -a."}
];
const FONCTIONS=[
 {ph:"Le boulanger prépare le pain.",g:"le pain",f:"COD"},
 {ph:"Le chat attrape une souris.",g:"une souris",f:"COD"},
 {ph:"Les pompiers éteignent l'incendie.",g:"l'incendie",f:"COD"},
 {ph:"Malik lit un roman passionnant.",g:"un roman passionnant",f:"COD"},
 {ph:"Ma cousine adore les chevaux.",g:"les chevaux",f:"COD"},
 {ph:"Nous parlons de nos vacances.",g:"de nos vacances",f:"COI"},
 {ph:"Elle téléphone à sa grand-mère.",g:"à sa grand-mère",f:"COI"},
 {ph:"Les élèves obéissent au règlement.",g:"au règlement",f:"COI"},
 {ph:"Inès pense à son match.",g:"à son match",f:"COI"},
 {ph:"Adam ressemble à son père.",g:"à son père",f:"COI"},
 {ph:"Ce gâteau semble délicieux.",g:"délicieux",f:"attribut du sujet",v:"semble"},
 {ph:"Ma tante est infirmière.",g:"infirmière",f:"attribut du sujet",v:"est"},
 {ph:"Les enfants deviennent impatients.",g:"impatients",f:"attribut du sujet",v:"deviennent"},
 {ph:"Le lac reste calme.",g:"calme",f:"attribut du sujet",v:"reste"},
 {ph:"Ces fleurs paraissent fanées.",g:"fanées",f:"attribut du sujet",v:"paraissent"},
 {ph:"Mon frère a l'air fatigué.",g:"fatigué",f:"attribut du sujet",v:"a l'air"},
 {ph:"Ce matin, Hugo a raté le bus.",g:"Ce matin",f:"complément circonstanciel",c:"le temps"},
 {ph:"Les oiseaux chantent dans les arbres.",g:"dans les arbres",f:"complément circonstanciel",c:"le lieu"},
 {ph:"Lina marche lentement.",g:"lentement",f:"complément circonstanciel",c:"la manière"},
 {ph:"Pendant les vacances, nous irons à la mer.",g:"Pendant les vacances",f:"complément circonstanciel",c:"le temps"},
 {ph:"Le chien dort sous la table.",g:"sous la table",f:"complément circonstanciel",c:"le lieu"},
 {ph:"Théo répond avec politesse.",g:"avec politesse",f:"complément circonstanciel",c:"la manière"},
 {ph:"Chaque soir, Zoé lit une histoire.",g:"Chaque soir",f:"complément circonstanciel",c:"le temps"},
 {ph:"Au loin, le tonnerre gronde.",g:"Au loin",f:"complément circonstanciel",c:"le lieu"},
 {ph:"Les coureurs avancent en silence.",g:"en silence",f:"complément circonstanciel",c:"la manière"},
 {ph:"Dans le pré broutent les vaches.",g:"les vaches",f:"sujet"},
 {ph:"Mon frère et ma sœur regardent un film.",g:"Mon frère et ma sœur",f:"sujet"},
 {ph:"Le vieux phare éclaire la côte.",g:"Le vieux phare",f:"sujet"}
];
const EXPL_FONC={
  "COD":"Le COD répond à « quoi ? » ou « qui ? » posé après le verbe, sans préposition. On peut le remplacer par le, la, les.",
  "COI":"Le COI est relié au verbe par une préposition (à, de) : il répond à « à qui ? à quoi ? de quoi ? ».",
  "attribut du sujet":"Après un verbe d'état (être, sembler, paraître, devenir, rester, avoir l'air…), le mot qui donne une qualité au sujet est l'attribut du sujet.",
  "complément circonstanciel":"Le complément circonstanciel peut souvent être déplacé ou supprimé : il indique le lieu, le temps ou la manière.",
  "sujet":"Le sujet répond à « qui est-ce qui ? » posé avant le verbe ; il peut être placé après le verbe."
};
function exoFonction(filtre){
  const l=FONCTIONS.filter(filtre||(()=>true)),x=pioche(l);
  if(x.f==="complément circonstanciel"&&alea(0,1))
    return qcm(`Dans « ${x.ph} », que précise le complément circonstanciel « ${x.g} » ?`,x.c,["le lieu","le temps","la manière"],`On se demande : où ? (lieu), quand ? (temps), comment ? (manière). Ici : ${x.c}.`);
  if(x.f==="COD"&&alea(0,2)===0)return saisie(`Quel est le COD dans la phrase « ${x.ph} » ?`,[x.g],`${EXPL_FONC.COD} Ici : « ${x.g} ».`);
  if(x.v&&alea(0,2)===0)return saisie(`Quel est le verbe d'état dans la phrase « ${x.ph} » ?`,[x.v],`${x.v} est un verbe d'état : il relie le sujet à son attribut « ${x.g} ».`);
  return qcm(`Dans « ${x.ph} », quelle est la fonction de « ${x.g} » ?`,x.f,["sujet","COD","COI","attribut du sujet","complément circonstanciel"],EXPL_FONC[x.f]);
}
const SUJ_PP=[{s:"Léa",g:"fs"},{s:"Paul",g:"ms"},{s:"Les filles",g:"fp"},{s:"Mes cousins",g:"mp"},{s:"Nina et Zoé",g:"fp"},{s:"Tom et Inès",g:"mp"},{s:"Ma grand-mère",g:"fs"},{s:"Mon oncle",g:"ms"},{s:"Les infirmières",g:"fp"},{s:"Les joueurs",g:"mp"}];
const VERB_PP=[["partir","parti","en vacances"],["arriver","arrivé","en retard"],["tomber","tombé","dans l'escalier"],["venir","venu","à la fête"],["rester","resté","à la maison"],["sortir","sorti","dans le jardin"],["entrer","entré","dans la classe"],["monter","monté","au grenier"],["descendre","descendu","à la cave"],["rentrer","rentré","de l'école"]];
const GENRES={ms:["masculin singulier",""],fs:["féminin singulier","e"],mp:["masculin pluriel","s"],fp:["féminin pluriel","es"]};
function exoPPetre(){
  const s=pioche(SUJ_PP),[inf,pp,cpl]=pioche(VERB_PP),[nom,fin]=GENRES[s.g],aux=s.g.endsWith("p")?"sont":"est";
  return qcm(`Complète : « ${s.s} ${aux} ___ ${cpl}. » (${inf})`,pp+fin,[pp,pp+"e",pp+"s",pp+"es"],`Avec l'auxiliaire être, le participe passé s'accorde avec le sujet « ${s.s} » (${nom}) : ${pp+fin}.`);
}
const MOTS_CLASSES=[
 {mot:"rapidement",cl:"un adverbe",f:["un adjectif","un nom","un verbe"],e:"Il se termine par -ment et précise le verbe : c'est un adverbe."},
 {mot:"courageux",cl:"un adjectif",f:["un nom","un adverbe","un verbe"],e:"Il qualifie un nom : un enfant courageux."},
 {mot:"grandir",cl:"un verbe",f:["un nom","un adjectif","un adverbe"],e:"C'est un infinitif du 2e groupe : il se conjugue."},
 {mot:"pendant",cl:"une préposition",f:["un adverbe","un déterminant","un nom"],e:"Il introduit un complément : pendant la nuit."},
 {mot:"nous",cl:"un pronom",f:["un déterminant","un nom","un adjectif"],e:"Il remplace un nom ou désigne les personnes qui parlent."},
 {mot:"ou",cl:"une conjonction de coordination",f:["une préposition","un adverbe","un pronom"],e:"Mais, ou, et, donc, or, ni, car sont les conjonctions de coordination."},
 {mot:"bonheur",cl:"un nom",f:["un verbe","un adjectif","un adverbe"],e:"On peut mettre un déterminant devant : le bonheur."},
 {mot:"souvent",cl:"un adverbe",f:["un adjectif","un nom","un verbe"],e:"Il est invariable et précise le verbe : je lis souvent."},
 {mot:"cette",cl:"un déterminant",f:["un pronom","un nom","un adjectif"],e:"C'est un déterminant démonstratif : cette maison."},
 {mot:"avec",cl:"une préposition",f:["une conjonction de coordination","un adverbe","un nom"],e:"Il introduit un complément : avec mes amis."},
 {mot:"car",cl:"une conjonction de coordination",f:["un nom","une préposition","un adverbe"],e:"Il relie deux propositions en donnant une explication."},
 {mot:"chanteront",cl:"un verbe",f:["un nom","un adjectif","un adverbe"],e:"C'est le verbe chanter conjugué au futur."},
 {mot:"notre",cl:"un déterminant",f:["un pronom","un adjectif","un nom"],e:"C'est un déterminant possessif : notre classe."},
 {mot:"jolie",cl:"un adjectif",f:["un nom","un verbe","un adverbe"],e:"Il qualifie un nom féminin : une jolie fleur."}
];
function exoClasses(){
  if(alea(0,3)===0)return pioche([
    ()=>qcm("Dans « Les petits chats dorment », quelle est la classe de « petits » ?","un adjectif",["un nom","un déterminant","un verbe"],"Il qualifie le nom « chats » et s'accorde avec lui."),
    ()=>qcm("Dans « Elle le regarde », quelle est la classe de « le » ?","un pronom",["un déterminant","un nom","un adverbe"],"Devant un verbe, « le » remplace un nom : c'est un pronom."),
    ()=>qcm("Dans « Le chien aboie », quelle est la classe de « le » ?","un déterminant",["un pronom","un nom","un adverbe"],"Devant un nom, « le » est un déterminant (article défini).")
  ])();
  const m=pioche(MOTS_CLASSES);return qcm(`Quelle est la classe grammaticale du mot « ${m.mot} » ?`,m.cl,m.f,m.e);
}
function exoFrancais(tag){
  const tq=t=>()=>BANQUE_F.some(x=>x.t===t)&&alea(0,2)===0?parTag(BANQUE_F,t):null;
  const conj=(tp,t)=>()=>tq(t)()||conjuguer(tp);
  const map={
    classes:exoClasses,
    phrase:()=>parTag(BANQUE_F,"phrase"),
    accordsv:()=>parTag(BANQUE_F,"accordsv"),
    homophones:()=>parTag(BANQUE_F,"homophones"),
    accordsgn:()=>parTag(BANQUE_F,"accordsgn"),
    phrasecomplexe:()=>parTag(BANQUE_F,"phrasecomplexe"),
    vocab:()=>parTag(BANQUE_F,"vocab"),
    sens:()=>parTag(BANQUE_F,"sens"),
    figures:()=>parTag(BANQUE_F,"figures"),
    pronoms:()=>parTag(BANQUE_F,"pronoms"),
    cod:()=>exoFonction(x=>x.f==="COD"||x.f==="COI"),
    attribut:()=>exoFonction(x=>x.f==="attribut du sujet"||(x.f==="COD"&&alea(0,2)===0)),
    cc:()=>exoFonction(x=>x.f==="complément circonstanciel"),
    fonctions:()=>exoFonction(),
    ppetre:exoPPetre,
    present:conj("pres","present"),
    imparfait:conj("imp","imparfait"),
    futur:conj("fut","futur"),
    passesimple:conj("ps","passesimple"),
    passecompose:conj("pc","passecompose"),
    plusqueparfait:conj("pqp","plusqueparfait"),
    imperatif:conj("ipf","imperatif"),
    conditionnel:conj("cond","conditionnel"),
    recit:()=>alea(0,1)?parTag(BANQUE_F,"recit"):conjuguer(pioche(["imp","ps"])),
    conjug:()=>conjuguer(pioche(["pres","imp","fut","ps","pc","pqp","cond","ipf"])),
    accords:()=>pioche([()=>parTag(BANQUE_F,"accordsgn"),()=>parTag(BANQUE_F,"accordsv"),exoPPetre])()
  };
  map.bilanfr=()=>pioche([map.classes,map.fonctions,map.accords,map.homophones,map.phrasecomplexe,map.pronoms,map.figures])();
  const f=map[tag]||pioche(Object.values(map));return f();
}

/* ---------- ANGLAIS ---------- */
const VOC_EN=[
 {t:"family",en:"mother",fr:"la mère"},{t:"family",en:"father",fr:"le père"},{t:"family",en:"brother",fr:"le frère"},{t:"family",en:"sister",fr:"la sœur"},{t:"family",en:"grandmother",fr:"la grand-mère"},{t:"family",en:"uncle",fr:"l'oncle"},{t:"family",en:"aunt",fr:"la tante"},
 {t:"school",en:"a ruler",fr:"une règle"},{t:"school",en:"a pencil case",fr:"une trousse"},{t:"school",en:"a rubber",fr:"une gomme"},{t:"school",en:"scissors",fr:"des ciseaux"},{t:"school",en:"a schoolbag",fr:"un cartable"},{t:"school",en:"the playground",fr:"la cour de récréation"},{t:"school",en:"a book",fr:"un livre"},
 {t:"food",en:"an apple",fr:"une pomme"},{t:"food",en:"bread",fr:"du pain"},{t:"food",en:"cheese",fr:"du fromage"},{t:"food",en:"chicken",fr:"du poulet"},{t:"food",en:"fish",fr:"du poisson"},{t:"food",en:"vegetables",fr:"des légumes"},{t:"food",en:"strawberries",fr:"des fraises"},{t:"food",en:"an egg",fr:"un œuf"},
 {t:"house",en:"a bedroom",fr:"une chambre"},{t:"house",en:"the kitchen",fr:"la cuisine"},{t:"house",en:"the bathroom",fr:"la salle de bains"},{t:"house",en:"the living room",fr:"le salon"},{t:"house",en:"a garden",fr:"un jardin"},{t:"house",en:"the stairs",fr:"l'escalier"},{t:"house",en:"a window",fr:"une fenêtre"},
 {t:"animals",en:"a horse",fr:"un cheval"},{t:"animals",en:"a sheep",fr:"un mouton"},{t:"animals",en:"a cow",fr:"une vache"},{t:"animals",en:"a mouse",fr:"une souris"},{t:"animals",en:"a rabbit",fr:"un lapin"},{t:"animals",en:"a bird",fr:"un oiseau"},{t:"animals",en:"a snake",fr:"un serpent"},{t:"animals",en:"a duck",fr:"un canard"},
 {t:"clothes",en:"a skirt",fr:"une jupe"},{t:"clothes",en:"trousers",fr:"un pantalon"},{t:"clothes",en:"shoes",fr:"des chaussures"},{t:"clothes",en:"a hat",fr:"un chapeau"},{t:"clothes",en:"a coat",fr:"un manteau"},{t:"clothes",en:"a dress",fr:"une robe"},{t:"clothes",en:"socks",fr:"des chaussettes"},{t:"clothes",en:"a jumper",fr:"un pull"},
 {t:"body",en:"the head",fr:"la tête"},{t:"body",en:"an arm",fr:"un bras"},{t:"body",en:"a leg",fr:"une jambe"},{t:"body",en:"a hand",fr:"une main"},{t:"body",en:"a foot",fr:"un pied"},{t:"body",en:"the eyes",fr:"les yeux"},{t:"body",en:"the ears",fr:"les oreilles"},{t:"body",en:"the nose",fr:"le nez"},
 {t:"weather",en:"sunny",fr:"ensoleillé"},{t:"weather",en:"rainy",fr:"pluvieux"},{t:"weather",en:"cloudy",fr:"nuageux"},{t:"weather",en:"snowy",fr:"neigeux"},{t:"weather",en:"winter",fr:"l'hiver"},{t:"weather",en:"summer",fr:"l'été"},{t:"weather",en:"spring",fr:"le printemps"},{t:"weather",en:"autumn",fr:"l'automne"},
 {t:"hobbies",en:"swimming",fr:"la natation"},{t:"hobbies",en:"reading",fr:"la lecture"},{t:"hobbies",en:"drawing",fr:"le dessin"},{t:"hobbies",en:"dancing",fr:"la danse"},{t:"hobbies",en:"cooking",fr:"la cuisine (préparer les repas)"},{t:"hobbies",en:"singing",fr:"le chant"},
 {t:"town",en:"a bakery",fr:"une boulangerie"},{t:"town",en:"a library",fr:"une bibliothèque"},{t:"town",en:"the post office",fr:"la poste"},{t:"town",en:"a hospital",fr:"un hôpital"},{t:"town",en:"a museum",fr:"un musée"},{t:"town",en:"the train station",fr:"la gare"},{t:"town",en:"a swimming pool",fr:"une piscine"},{t:"town",en:"a supermarket",fr:"un supermarché"}
];
const GRAM_EN=[
 {t:"tobe",q:"Complète : I ___ ten years old.",b:"am",f:["is","are","be"],e:"Avec I, to be se conjugue am : I am (I'm)."},
 {t:"tobe",q:"Complète : She ___ my best friend.",b:"is",f:["am","are","be"],e:"He, she, it → is."},
 {t:"tobe",q:"Complète : We ___ in the same class.",b:"are",f:["is","am","be"],e:"We, you, they → are."},
 {t:"tobe",q:"Complète : ___ you French ?",b:"Are",f:["Is","Am","Do"],e:"Pour poser la question, on place to be avant le sujet : Are you… ?"},
 {t:"tobe",q:"Comment dit-on « je m'appelle Léa » ?",b:"My name is Léa.",f:["I name Léa.","Me is Léa.","I called Léa."],e:"On dit My name is… ou I'm…"},
 {t:"tobe",q:"Que répond-on à « How old are you ? »",b:"I'm ten.",f:["I'm fine, thank you.","My name is Tom.","I'm from France."],e:"How old… ? demande l'âge : on répond I'm + l'âge."},
 {t:"tobe",q:"Que veut dire « Where are you from ? »",b:"D'où viens-tu ?",f:["Quel âge as-tu ?","Où vas-tu ?","Comment vas-tu ?"],e:"Where = où ; from = de. On répond : I'm from France."},
 {t:"tobe",q:"Complète : They ___ not at school today.",b:"are",f:["is","am","be"],e:"They → are ; la négation se place après : they are not (aren't)."},
 {t:"family",q:"Complète : She ___ got two brothers.",b:"has",f:["have","is","haves"],e:"He, she, it → has got."},
 {t:"family",q:"Complète : ___ you got a sister ?",b:"Have",f:["Has","Are","Do"],e:"Question : Have you got… ? (avec he ou she : Has she got… ?)."},
 {t:"family",q:"The father of my father is my…",b:"grandfather",f:["uncle","brother","cousin"],e:"grandfather = grand-père ; grandmother = grand-mère."},
 {t:"family",q:"My mother's sister is my…",b:"aunt",f:["uncle","niece","grandmother"],e:"aunt = tante ; uncle = oncle."},
 {t:"family",q:"Complète : I haven't ___ a dog.",b:"got",f:["get","have","has"],e:"Forme négative : I haven't got…"},
 {t:"family",q:"Que veut dire « Tom is my brother's son » ?",b:"Tom est le fils de mon frère.",f:["Tom est mon frère.","Tom est le père de mon frère.","Tom est mon oncle."],e:"my brother's son = le fils de mon frère : c'est mon neveu (nephew)."},
 {t:"numbers",q:"Comment écrit-on 15 en anglais ?",b:"fifteen",f:["fifty","fiveteen","five-teen"],e:"De 13 à 19, les nombres se terminent par -teen ; 50 se dit fifty."},
 {t:"numbers",q:"Que veut dire « forty » ?",b:"40",f:["14","4","44"],e:"forty = 40 (sans u) ; fourteen = 14."},
 {t:"numbers",q:"Comment écrit-on 13 en anglais ?",b:"thirteen",f:["thirty","threeteen","three-teen"],e:"thirteen = 13 ; thirty = 30."},
 {t:"numbers",q:"Comment dit-on 100 en anglais ?",b:"one hundred",f:["one thousand","ten","one million"],e:"hundred = cent ; thousand = mille."},
 {t:"numbers",q:"Comment écrit-on 72 en anglais ?",b:"seventy-two",f:["sixty-twelve","seven-two","twenty-seven"],e:"En anglais, on dit la dizaine puis l'unité : seventy-two."},
 {t:"numbers",q:"Comment dit-on « le 3 mai » en anglais ?",b:"the third of May",f:["the three of May","the third of March","the thirteenth of May"],e:"Pour la date, on utilise first, second, third, fourth…"},
 {t:"numbers",q:"Que veut dire « twenty » ?",b:"20",f:["12","2","200"],e:"twelve = 12 ; twenty = 20."},
 {t:"school",q:"Que veut dire « Open your books » ?",b:"Ouvrez vos livres.",f:["Fermez vos livres.","Rangez vos livres.","Prenez vos cahiers."],e:"open = ouvrir ; close = fermer."},
 {t:"school",q:"Comment dit-on « je ne comprends pas » ?",b:"I don't understand.",f:["I am not understand.","I no understand.","I don't understanding."],e:"Négation au présent : I don't + verbe."},
 {t:"school",q:"À l'école anglaise, « PE », c'est :",b:"le sport",f:["la peinture","la physique","la musique"],e:"PE = Physical Education, l'éducation physique."},
 {t:"school",q:"Complète : My favourite subject is ___ : I love numbers.",b:"maths",f:["art","music","history"],e:"maths = les mathématiques."},
 {t:"school",q:"Comment demande-t-on poliment pour aller aux toilettes ?",b:"May I go to the toilet, please ?",f:["I go toilet.","Where you toilet ?","Toilet now, teacher."],e:"May I…, please ? est une demande polie."},
 {t:"school",q:"Que veut dire « Can you repeat, please ? »",b:"Peux-tu répéter, s'il te plaît ?",f:["Peux-tu écrire, s'il te plaît ?","Peux-tu sortir ?","Peux-tu te taire ?"],e:"repeat = répéter ; please = s'il te plaît."},
 {t:"time",q:"Quel jour vient après Thursday ?",b:"Friday",f:["Wednesday","Tuesday","Sunday"],e:"Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday."},
 {t:"time",q:"Quel mois vient après June ?",b:"July",f:["January","May","August"],e:"… May, June, July, August …"},
 {t:"time",q:"Comment demande-t-on l'heure ?",b:"What time is it ?",f:["How old is it ?","Where is the time ?","What is your time ?"],e:"On répond : It's … o'clock."},
 {t:"time",q:"Que veut dire « on Monday » ?",b:"lundi",f:["mardi","dimanche","mercredi"],e:"Les jours prennent une majuscule en anglais : Monday."},
 {t:"time",q:"Combien de jours y a-t-il dans « a week » ?",b:"7",f:["5","10","30"],e:"a week = une semaine ; a month = un mois."},
 {t:"time",q:"Que veut dire « It's half past eight » ?",b:"Il est 8 h 30.",f:["Il est 8 h 15.","Il est 7 h 30.","Il est 8 h 45."],e:"half past = et demie."},
 {t:"food",q:"Complète : I like apples but I ___ like bananas.",b:"don't",f:["doesn't","not","am not"],e:"Négation avec I : I don't like…"},
 {t:"food",q:"Complète : ___ you like pizza ?",b:"Do",f:["Does","Are","Is"],e:"Question avec you : Do you like… ?"},
 {t:"food",q:"Complète : She ___ chocolate.",b:"likes",f:["like","liking","is like"],e:"Avec he, she, it, on ajoute -s : she likes."},
 {t:"food",q:"Que veut dire « I'm hungry » ?",b:"J'ai faim.",f:["J'ai soif.","Je suis fatigué.","J'ai froid."],e:"hungry = affamé ; thirsty = assoiffé."},
 {t:"food",q:"Que veut dire « How much is it ? »",b:"Combien ça coûte ?",f:["Combien y en a-t-il ?","Quelle heure est-il ?","Comment ça va ?"],e:"On répond par un prix : It's two pounds."},
 {t:"food",q:"Comment demande-t-on poliment de l'eau ?",b:"Can I have some water, please ?",f:["Give me water !","I want water now.","Water is you ?"],e:"Can I have…, please ? est la formule polie."},
 {t:"food",q:"Complète : Would you like ___ apple ?",b:"an",f:["a","two","these"],e:"an devant un son voyelle : an apple, an egg."},
 {t:"culture",q:"Quelle est la capitale du Royaume-Uni ?",b:"London",f:["Edinburgh","Dublin","New York"],e:"Londres (London) est traversée par la Tamise."},
 {t:"culture",q:"Quelle fête anglo-saxonne a lieu le 31 octobre ?",b:"Halloween",f:["Christmas","Thanksgiving","Easter"],e:"Les enfants se déguisent et disent « Trick or treat ! »."},
 {t:"culture",q:"Que disent les enfants à Halloween en sonnant aux portes ?",b:"Trick or treat !",f:["Merry Christmas !","Happy birthday !","Good night !"],e:"Cela veut dire : « Une farce ou une friandise ! »"},
 {t:"culture",q:"Quel jour fête-t-on Christmas ?",b:"le 25 décembre",f:["le 31 octobre","le 1er janvier","le 14 juillet"],e:"Le 26 décembre, c'est Boxing Day au Royaume-Uni."},
 {t:"culture",q:"Quels pays forment le Royaume-Uni ?",b:"l'Angleterre, l'Écosse, le pays de Galles et l'Irlande du Nord",f:["l'Angleterre et l'Irlande seulement","l'Angleterre, la France et l'Écosse","l'Angleterre seulement"],e:"Le Royaume-Uni (United Kingdom) réunit quatre nations."},
 {t:"culture",q:"Comment s'appelle le drapeau du Royaume-Uni ?",b:"l'Union Jack",f:["la Bannière étoilée","le drapeau tricolore","la feuille d'érable"],e:"La Bannière étoilée est le drapeau des États-Unis."},
 {t:"culture",q:"Quelle est la capitale des États-Unis ?",b:"Washington",f:["New York","Los Angeles","London"],e:"New York est la plus grande ville, mais la capitale est Washington D.C."},
 {t:"culture",q:"Quelle est la monnaie du Royaume-Uni ?",b:"la livre sterling",f:["l'euro","le dollar","le franc"],e:"pound = livre ; les États-Unis utilisent le dollar."},
 {t:"culture",q:"Que fête-t-on aux États-Unis le 4 juillet ?",b:"l'Indépendance (Independence Day)",f:["Noël","Halloween","le Nouvel An"],e:"Les États-Unis ont déclaré leur indépendance le 4 juillet 1776."},
 {t:"culture",q:"Quel monument célèbre se trouve à New York ?",b:"la statue de la Liberté",f:["Big Ben","la tour Eiffel","le Colisée"],e:"Elle a été offerte par la France et inaugurée en 1886."},
 {t:"culture",q:"Big Ben est la cloche d'une tour située à :",b:"Londres",f:["New York","Édimbourg","Sydney"],e:"La tour se trouve au palais de Westminster, au bord de la Tamise."},
 {t:"culture",q:"Quelle est la capitale de l'Écosse ?",b:"Edinburgh",f:["London","Cardiff","Belfast"],e:"Cardiff : pays de Galles ; Belfast : Irlande du Nord."},
 {t:"routine",q:"Complète : He ___ up at seven o'clock.",b:"gets",f:["get","getting","is get"],e:"Present simple : on ajoute -s à la 3e personne du singulier."},
 {t:"routine",q:"Complète : She ___ her teeth every morning.",b:"brushes",f:["brush","brushs","brushing"],e:"Après -sh, on ajoute -es : she brushes."},
 {t:"routine",q:"Complète : ___ he play football on Saturdays ?",b:"Does",f:["Do","Is","Has"],e:"Question à la 3e personne : Does he play… ?"},
 {t:"routine",q:"Complète : They ___ not watch TV in the morning.",b:"do",f:["does","are","is"],e:"Négation avec they : they do not (don't)."},
 {t:"routine",q:"Que veut dire « I have a shower » ?",b:"Je prends une douche.",f:["J'ai une douche.","Je chante sous la pluie.","Je lave la voiture."],e:"have a shower = prendre une douche ; have breakfast = prendre le petit-déjeuner."},
 {t:"routine",q:"Complète : I ___ to school by bus.",b:"go",f:["goes","going","am go"],e:"Avec I, pas de -s : I go."},
 {t:"routine",q:"Que veut dire « I go to bed at nine » ?",b:"Je me couche à neuf heures.",f:["Je me lève à neuf heures.","Je mange à neuf heures.","Je pars à l'école à neuf heures."],e:"go to bed = aller se coucher ; get up = se lever."},
 {t:"house",q:"Complète : There ___ two bedrooms in my house.",b:"are",f:["is","am","be"],e:"Pluriel : there are ; singulier : there is."},
 {t:"house",q:"Complète : There ___ a big garden.",b:"is",f:["are","am","have"],e:"Singulier : there is."},
 {t:"house",q:"« The cat is under the bed. » Où est le chat ?",b:"sous le lit",f:["sur le lit","à côté du lit","derrière le lit"],e:"under = sous ; on = sur."},
 {t:"house",q:"Comment dit-on « à côté de » ?",b:"next to",f:["behind","between","in front of"],e:"behind = derrière ; between = entre ; in front of = devant."},
 {t:"house",q:"« The ball is behind the sofa. » Où est le ballon ?",b:"derrière le canapé",f:["sur le canapé","devant le canapé","dans le canapé"],e:"behind = derrière."},
 {t:"house",q:"Complète : My books are ___ my schoolbag (dans).",b:"in",f:["on","under","next to"],e:"in = dans ; on = sur."},
 {t:"animals",q:"Quel est le pluriel de « mouse » ?",b:"mice",f:["mouses","mousees","mices"],e:"Pluriel irrégulier : a mouse, two mice."},
 {t:"animals",q:"Complète : A bird ___ got two wings.",b:"has",f:["have","is","haves"],e:"A bird = it → has got."},
 {t:"animals",q:"Que veut dire « wings » ?",b:"des ailes",f:["des pattes","des plumes","des griffes"],e:"wings = ailes ; legs = pattes ; feathers = plumes."},
 {t:"animals",q:"Quel est le pluriel de « sheep » ?",b:"sheep",f:["sheeps","sheepes","shoop"],e:"sheep ne change pas au pluriel : one sheep, two sheep."},
 {t:"animals",q:"Quel animal dit « moo » ?",b:"a cow",f:["a duck","a dog","a cat"],e:"a cow = une vache ; le canard fait « quack »."},
 {t:"animals",q:"« It's a big grey animal with a long trunk. » De quel animal s'agit-il ?",b:"un éléphant",f:["une souris","un cheval","un lapin"],e:"trunk = trompe ; grey = gris."},
 {t:"clothes",q:"Comment dit-on « une robe bleue » ?",b:"a blue dress",f:["a dress blue","a blues dress","blue a dress"],e:"En anglais, l'adjectif se place avant le nom et ne s'accorde pas."},
 {t:"clothes",q:"Complète : My trousers ___ black.",b:"are",f:["is","am","be"],e:"trousers est toujours au pluriel : they are."},
 {t:"clothes",q:"Que veut dire « I'm wearing a coat » ?",b:"Je porte un manteau.",f:["J'achète un manteau.","Je lave un manteau.","Je cherche un manteau."],e:"wear = porter (un vêtement)."},
 {t:"clothes",q:"Comment dit-on « des chaussures rouges » ?",b:"red shoes",f:["shoes reds","reds shoes","shoes red"],e:"L'adjectif reste invariable et se place avant le nom."},
 {t:"clothes",q:"Quelle couleur obtient-on avec « blue + yellow » ?",b:"green",f:["purple","orange","pink"],e:"Bleu + jaune = vert (green)."},
 {t:"clothes",q:"Que veut dire « It's cold, put on your scarf ! » ?",b:"Il fait froid, mets ton écharpe !",f:["Il fait chaud, enlève ton pull !","Il pleut, prends ton parapluie !","Il fait froid, ferme la porte !"],e:"put on = mettre ; scarf = écharpe."},
 {t:"can",q:"Complète : ___ you swim ?",b:"Can",f:["Do","Are","Have"],e:"Avec can, pas besoin de do pour poser la question."},
 {t:"can",q:"Complète : He ___ ride a bike.",b:"can",f:["cans","can to","is can"],e:"can est invariable et suivi du verbe sans to."},
 {t:"can",q:"Complète : I ___ fly : I'm not a bird !",b:"can't",f:["can","cans","don't can"],e:"can't = cannot : je ne peux pas, je ne sais pas."},
 {t:"can",q:"« Can she play the piano ? » Quelle est la réponse courte positive ?",b:"Yes, she can.",f:["Yes, she does.","Yes, she is.","Yes, she cans."],e:"On reprend can dans la réponse courte."},
 {t:"can",q:"Comment dit-on « je sais nager » ?",b:"I can swim.",f:["I can to swim.","I know swim.","I swimming."],e:"can + verbe exprime une capacité."},
 {t:"can",q:"Complète : Penguins can't ___ but they can swim.",b:"fly",f:["flies","flying","to fly"],e:"Après can't, le verbe reste à la base verbale."},
 {t:"body",q:"Quel est le pluriel de « foot » ?",b:"feet",f:["foots","feets","footes"],e:"Pluriel irrégulier : one foot, two feet."},
 {t:"body",q:"Quel est le pluriel de « tooth » ?",b:"teeth",f:["tooths","teeths","toothes"],e:"Pluriel irrégulier : one tooth, two teeth."},
 {t:"body",q:"Que veut dire « I've got a headache » ?",b:"J'ai mal à la tête.",f:["J'ai mal au ventre.","J'ai mal aux dents.","J'ai mal au dos."],e:"head = tête ; headache = mal de tête."},
 {t:"body",q:"Que veut dire « She has got long hair » ?",b:"Elle a les cheveux longs.",f:["Elle a les cheveux courts.","Elle a de grandes jambes.","Elle a les yeux bleus."],e:"hair = cheveux (toujours au singulier en anglais)."},
 {t:"body",q:"Complète : I see with my ___.",b:"eyes",f:["ears","nose","feet"],e:"eyes = yeux ; ears = oreilles."},
 {t:"body",q:"Complète : I hear with my ___.",b:"ears",f:["eyes","nose","hands"],e:"ears = oreilles ; hear = entendre."},
 {t:"weather",q:"Que veut dire « What's the weather like ? »",b:"Quel temps fait-il ?",f:["Quelle heure est-il ?","Quel jour sommes-nous ?","Qu'est-ce que tu aimes ?"],e:"On répond : It's sunny, it's raining…"},
 {t:"weather",q:"Complète : Take your umbrella, it's ___.",b:"raining",f:["sunny","hot","dry"],e:"umbrella = parapluie ; it's raining = il pleut."},
 {t:"weather",q:"En quel mois est Christmas ?",b:"December",f:["November","January","October"],e:"Christmas : the 25th of December."},
 {t:"weather",q:"Quelle saison vient après « winter » ?",b:"spring",f:["summer","autumn"],e:"winter, spring, summer, autumn."},
 {t:"weather",q:"Que veut dire « It's hot » ?",b:"Il fait chaud.",f:["Il fait froid.","Il neige.","Il y a du vent."],e:"hot = chaud ; cold = froid."},
 {t:"weather",q:"Que veut dire « It's windy » ?",b:"Il y a du vent.",f:["Il pleut.","Il neige.","Il fait beau."],e:"wind = le vent ; windy = venteux."},
 {t:"hobbies",q:"Complète : I like ___ books.",b:"reading",f:["read","reads","to reading"],e:"Après like, on met souvent le verbe en -ing : I like reading."},
 {t:"hobbies",q:"Complète : I play ___ guitar.",b:"the",f:["a","an","to"],e:"Pour les instruments de musique : play the guitar, play the piano."},
 {t:"hobbies",q:"Complète : She plays tennis ___ Saturdays.",b:"on",f:["in","at","to"],e:"on + jour : on Monday, on Saturdays."},
 {t:"hobbies",q:"Comment dit-on « je fais du vélo » ?",b:"I ride a bike.",f:["I make bike.","I do a bike.","I play bike."],e:"ride a bike = faire du vélo ; ride a horse = monter à cheval."},
 {t:"hobbies",q:"Que veut dire « What's your favourite sport ? »",b:"Quel est ton sport préféré ?",f:["Fais-tu du sport ?","Où fais-tu du sport ?","Quand fais-tu du sport ?"],e:"favourite = préféré."},
 {t:"hobbies",q:"Que veut dire « I'm good at drawing » ?",b:"Je suis doué en dessin.",f:["Je n'aime pas dessiner.","Je dessine un bateau.","Je déteste le dessin."],e:"be good at = être doué pour."},
 {t:"continuous",q:"Complète : Look ! The dog ___ running.",b:"is",f:["are","am","does"],e:"Present continuous : be + verbe en -ing."},
 {t:"continuous",q:"Complète : They ___ playing football now.",b:"are",f:["is","am","do"],e:"They → are + -ing."},
 {t:"continuous",q:"Complète : I ___ reading a book.",b:"am",f:["is","are","do"],e:"I → am + -ing."},
 {t:"continuous",q:"Complète : What ___ you doing ?",b:"are",f:["do","is","does"],e:"What are you doing ? = Qu'es-tu en train de faire ?"},
 {t:"continuous",q:"Complète : She is ___ in the pool.",b:"swimming",f:["swiming","swim","swims"],e:"swim → swimming : on double le m."},
 {t:"continuous",q:"Complète : He is ___ a letter.",b:"writing",f:["writeing","write","writes"],e:"write → writing : le e final disparaît."},
 {t:"continuous",q:"Que veut dire « I'm eating » ?",b:"Je suis en train de manger.",f:["Je mange tous les jours.","J'ai mangé.","Je mangerai."],e:"Le present continuous décrit une action en cours."},
 {t:"town",q:"Comment dit-on « tourne à gauche » ?",b:"Turn left.",f:["Turn right.","Go straight on.","Stop here."],e:"left = gauche ; right = droite."},
 {t:"town",q:"Que veut dire « Go straight on » ?",b:"Va tout droit.",f:["Tourne à droite.","Fais demi-tour.","Arrête-toi."],e:"straight on = tout droit."},
 {t:"town",q:"« A library », c'est :",b:"une bibliothèque",f:["une librairie","un laboratoire","une boulangerie"],e:"Attention, faux ami ! Une librairie se dit a bookshop."},
 {t:"town",q:"Complète : The bank is ___ the bakery and the museum (entre).",b:"between",f:["behind","next to","under"],e:"between = entre."},
 {t:"town",q:"Comment demande-t-on son chemin pour aller à la gare ?",b:"Where is the station, please ?",f:["What is the station ?","How old is the station ?","Who is the station ?"],e:"Where = où."},
 {t:"town",q:"Que veut dire « Turn right » ?",b:"Tourne à droite.",f:["Tourne à gauche.","Va tout droit.","Traverse la rue."],e:"right = droite."},
 {t:"past",q:"Complète : Yesterday I ___ at home.",b:"was",f:["were","am","is"],e:"Prétérit de to be : I, he, she, it was ; we, you, they were."},
 {t:"past",q:"Complète : We ___ in London last summer.",b:"were",f:["was","are","be"],e:"We → were."},
 {t:"past",q:"Complète : She ___ tennis yesterday.",b:"played",f:["play","plays","playing"],e:"Verbe régulier au prétérit : on ajoute -ed."},
 {t:"past",q:"Complète : Last week he ___ to the zoo.",b:"went",f:["goed","go","goes"],e:"go est irrégulier : went."},
 {t:"past",q:"Complète : ___ you happy yesterday ?",b:"Were",f:["Was","Are","Did"],e:"Question au prétérit de to be avec you : Were you… ?"},
 {t:"past",q:"Complète : I ___ a film last night.",b:"watched",f:["watch","watches","watching"],e:"last night = hier soir : prétérit en -ed."},
 {t:"past",q:"Complète : They ___ the museum on Monday.",b:"visited",f:["visit","visits","visiting"],e:"visit → visited."},
 {t:"compare",q:"Complète : A car is ___ than a bike.",b:"faster",f:["more fast","fastest","fast"],e:"Adjectif court : on ajoute -er, puis than."},
 {t:"compare",q:"Complète : My sister is ___ than me.",b:"taller",f:["more tall","tallest","tall"],e:"tall → taller than."},
 {t:"compare",q:"Complète : An elephant is ___ than a cat.",b:"bigger",f:["biger","more big","biggest"],e:"big → bigger : on double le g."},
 {t:"compare",q:"Complète : It's the ___ day of my life !",b:"best",f:["goodest","better","most good"],e:"good → better → the best (irrégulier)."},
 {t:"compare",q:"Complète : Mount Everest is the ___ mountain in the world.",b:"highest",f:["higher","most high","highter"],e:"Superlatif d'un adjectif court : the + adjectif + -est."},
 {t:"compare",q:"Complète : A dog is smaller ___ a horse.",b:"than",f:["that","then","as"],e:"Comparatif : adjectif en -er + than."},
 {t:"compare",q:"Complète : This film is ___ interesting than the book.",b:"more",f:["most","very","the"],e:"Adjectif long : more + adjectif + than."}
];
const IRREG=[["go","went"],["see","saw"],["eat","ate"],["have","had"],["buy","bought"],["swim","swam"],["take","took"],["come","came"],["make","made"],["drink","drank"],["write","wrote"],["get","got"],["give","gave"],["sing","sang"],["sleep","slept"],["run","ran"],["do","did"]];
const EN_N=["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];
const EN_D=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
function heureEn(){
  const k=alea(1,3);let txt,h,m;
  if(k===1){h=alea(1,11);m=pioche([5,10,15,20,25,30]);txt=`It's ${m===15?"quarter":m===30?"half":EN_N[m]||"twenty-five"} past ${EN_N[h]}`;}
  else if(k===2){const H=alea(2,12),mm=pioche([5,10,15,20,25]);h=H-1;m=60-mm;txt=`It's ${mm===15?"quarter":mm===25?"twenty-five":mm===20?"twenty":EN_N[mm]} to ${EN_N[H]}`;}
  else{h=alea(1,12);m=0;txt=`It's ${EN_N[h]} o'clock`;}
  if(k===1&&m===20)txt=`It's twenty past ${EN_N[h]}`;
  const bon=h2(h,m),f=new Set();
  f.add(h2(h,(60-m)%60));f.add(h2(h===1?12:h-1,(60-m)%60));f.add(h2(h+1,m));f.add(h2(h,(m+15)%60));f.delete(bon);
  return qcm(`Que veut dire « ${txt} » ?`,`Il est ${bon}.`,[...f].map(x=>`Il est ${x}.`),`past = après l'heure ; to = avant l'heure ; quarter = un quart d'heure ; half = une demi-heure.`);
}
function exoAnglais(tag){
  if(tag==="time"&&alea(0,1))return heureEn();
  if(tag==="past"&&alea(0,2)===0){const p=pioche(IRREG);return saisie(`Quel est le prétérit (past simple) du verbe irrégulier « to ${p[0]} » ?`,[p[1]],`to ${p[0]} → ${p[1]} : verbe irrégulier, à apprendre par cœur.`);}
  if(tag==="numbers"&&alea(0,2)===0){const d=alea(2,9),u=alea(1,9),w=`${EN_D[d]}-${EN_N[u]}`;
    return saisie(`Écris en lettres, en anglais : ${d*10+u}`,[w,w.replace("-"," ")],`On écrit la dizaine (${EN_D[d]}), un trait d'union, puis l'unité (${EN_N[u]}) : ${w}.`);}
  const voc=VOC_EN.filter(x=>x.t===tag);
  if(voc.length&&alea(0,2)===0){
    const m=pioche(voc),autres=melange(voc.filter(x=>x!==m)).slice(0,3);
    if(alea(0,1))return qcm(`Que veut dire « ${m.en} » ?`,m.fr,autres.map(x=>x.fr),`« ${m.en} » veut dire « ${m.fr} ».`);
    return qcm(`Comment dit-on « ${m.fr} » en anglais ?`,m.en,autres.map(x=>x.en),`« ${m.fr} » se dit « ${m.en} ».`);
  }
  return parTag(GRAM_EN,tag);
}

/* ---------- SCIENCES ET TECHNOLOGIE ---------- */
const BANQUE_S=[
 {t:"matiere",q:"Dans quel état se trouve l'eau d'un glaçon ?",b:"solide",f:["liquide","gazeux"],e:"La glace est de l'eau à l'état solide ; elle garde sa forme."},
 {t:"matiere",q:"Comment appelle-t-on le passage de l'état solide à l'état liquide ?",b:"la fusion",f:["la solidification","la condensation","la vaporisation"],e:"Un glaçon qui fond subit une fusion. L'inverse est la solidification."},
 {t:"matiere",q:"À quelle température l'eau pure bout-elle, au niveau de la mer ?",b:"100 °C",f:["0 °C","50 °C","37 °C"],e:"Elle bout à 100 °C et gèle à 0 °C."},
 {t:"matiere",q:"Au repos, la surface d'un liquide est :",b:"plane et horizontale",f:["toujours penchée","en forme de bosse","verticale"],e:"Un liquide prend la forme du récipient et sa surface libre reste horizontale."},
 {t:"matiere",q:"Quand un glaçon fond complètement, sa masse :",b:"reste la même",f:["augmente","diminue","devient nulle"],e:"La matière ne disparaît pas : la masse se conserve lors d'un changement d'état."},
 {t:"matiere",q:"La buée sur le miroir de la salle de bains vient :",b:"de la condensation de la vapeur d'eau",f:["de la fusion de la glace","de la peinture","de la poussière"],e:"La vapeur d'eau invisible devient liquide au contact du miroir froid."},
 {t:"matiere",q:"L'air est-il de la matière ?",b:"oui : il a une masse et occupe de l'espace",f:["non, c'est du vide","seulement quand il y a du vent","seulement en hiver"],e:"Un ballon gonflé est plus lourd qu'un ballon dégonflé."},
 {t:"matiere",q:"Contrairement à un liquide, un gaz peut :",b:"être comprimé",f:["avoir une forme propre","être coupé en morceaux","être saisi avec les doigts"],e:"On peut écraser l'air dans une seringue bouchée, pas l'eau."},
 {t:"melanges",q:"Un mélange dans lequel on ne distingue pas les constituants à l'œil nu est :",b:"homogène",f:["hétérogène","solide","vide"],e:"Exemple : l'eau sucrée. L'eau avec du sable est hétérogène."},
 {t:"melanges",q:"Quand on verse de l'huile dans l'eau :",b:"l'huile reste au-dessus : les deux liquides ne se mélangent pas",f:["l'huile disparaît","l'eau devient de l'huile","l'huile tombe au fond"],e:"L'eau et l'huile ne sont pas miscibles : on obtient un mélange hétérogène."},
 {t:"melanges",q:"Quand on met du sel dans l'eau et qu'on remue, le sel :",b:"se dissout",f:["fond comme un glaçon","s'évapore","se transforme en sable"],e:"Le sel est soluble dans l'eau : on obtient une solution."},
 {t:"melanges",q:"Comment récupérer le sel dissous dans de l'eau salée ?",b:"en faisant évaporer l'eau",f:["en filtrant","en laissant reposer","en ajoutant du sable"],e:"C'est ce qui se passe dans les marais salants."},
 {t:"melanges",q:"Comment rendre limpide une eau boueuse ?",b:"par décantation puis filtration",f:["en la congelant","en la chauffant","en ajoutant du sel"],e:"On laisse les particules se déposer (décantation), puis on filtre."},
 {t:"melanges",q:"On dissout 10 g de sucre dans 200 g d'eau. Quelle est la masse de l'eau sucrée ?",b:"210 g",f:["200 g","190 g","10 g"],e:"Le sucre ne disparaît pas : les masses s'additionnent, 200 + 10 = 210 g."},
 {t:"melanges",q:"Le sable mélangé à l'eau :",b:"ne se dissout pas",f:["se dissout","s'évapore","devient liquide"],e:"Le sable est insoluble dans l'eau ; on peut le séparer par filtration."},
 {t:"melanges",q:"Le filtre d'une cafetière sépare :",b:"le café en poudre (solide) du café liquide",f:["l'eau du sucre","la chaleur de l'eau","le lait du café"],e:"La filtration retient les particules solides."},
 {t:"energie",q:"Quelle source d'énergie est renouvelable ?",b:"le Soleil",f:["le pétrole","le charbon","le gaz naturel"],e:"Soleil, vent, eau, bois sont renouvelables ; le pétrole, le charbon et le gaz s'épuisent."},
 {t:"energie",q:"Quelle source d'énergie n'est pas renouvelable ?",b:"le pétrole",f:["le vent","le Soleil","l'eau d'une rivière"],e:"Le pétrole s'est formé en des millions d'années : les réserves s'épuisent."},
 {t:"energie",q:"Une éolienne produit de l'électricité grâce :",b:"au vent",f:["au charbon","au soleil","à la pluie"],e:"Le vent fait tourner les pales, qui entraînent un alternateur."},
 {t:"energie",q:"Un barrage hydroélectrique utilise l'énergie :",b:"de l'eau qui coule",f:["du vent","du pétrole","du soleil directement"],e:"L'eau fait tourner des turbines qui produisent de l'électricité."},
 {t:"energie",q:"D'où notre corps tire-t-il son énergie ?",b:"des aliments",f:["de l'électricité","de l'air seulement","du soleil directement"],e:"Les aliments apportent l'énergie nécessaire pour bouger, grandir et garder la température du corps."},
 {t:"energie",q:"Un panneau solaire photovoltaïque transforme :",b:"la lumière en électricité",f:["l'électricité en lumière","le vent en chaleur","l'eau en électricité"],e:"Les cellules du panneau captent la lumière du Soleil."},
 {t:"energie",q:"Quel geste économise l'énergie ?",b:"éteindre la lumière en quittant une pièce",f:["laisser la télévision en veille","ouvrir la fenêtre avec le chauffage allumé","laisser le chargeur branché"],e:"Moins on consomme, moins on utilise de ressources."},
 {t:"circuits",q:"Pour qu'une lampe brille, le circuit doit être :",b:"fermé",f:["ouvert","coupé","sans pile"],e:"Le courant circule seulement dans une boucle fermée, sans interruption."},
 {t:"circuits",q:"Quel matériau conduit l'électricité ?",b:"le cuivre",f:["le plastique","le bois sec","le verre"],e:"Les métaux sont conducteurs ; le plastique, le bois sec et le verre sont isolants."},
 {t:"circuits",q:"Pourquoi les fils électriques sont-ils entourés de plastique ?",b:"parce que le plastique est isolant et protège",f:["pour faire joli","pour conduire mieux le courant","pour les rendre plus lourds"],e:"Le plastique isolant évite de toucher le métal qui conduit le courant."},
 {t:"circuits",q:"Deux lampes sont branchées en série. L'une grille. Que fait l'autre ?",b:"elle s'éteint",f:["elle brille plus fort","elle reste allumée","elle change de couleur"],e:"En série, il n'y a qu'une boucle : si elle est coupée, plus rien ne fonctionne."},
 {t:"circuits",q:"Deux lampes sont branchées en dérivation. L'une grille. Que fait l'autre ?",b:"elle reste allumée",f:["elle s'éteint","elle explose","elle clignote"],e:"En dérivation, chaque lampe a sa propre boucle avec la pile."},
 {t:"circuits",q:"Si l'interrupteur est ouvert, la lampe :",b:"est éteinte",f:["brille","brille plus fort","clignote"],e:"Interrupteur ouvert = circuit ouvert = pas de courant."},
 {t:"circuits",q:"Pourquoi ne faut-il jamais jouer avec une prise électrique de la maison ?",b:"parce que le courant du secteur (230 V) est dangereux",f:["parce qu'elle est fragile","parce que ça use la pile","il n'y a aucun danger"],e:"Les expériences se font uniquement avec des piles de faible tension."},
 {t:"circuits",q:"Que se passe-t-il si on relie directement les deux bornes d'une pile avec un fil ?",b:"un court-circuit : la pile chauffe et s'use",f:["la lampe brille plus fort","rien du tout","la pile se recharge"],e:"Il ne faut jamais court-circuiter une pile."},
 {t:"nutrition",q:"Dans quel ordre les aliments traversent-ils le tube digestif ?",b:"bouche, œsophage, estomac, intestin grêle, gros intestin",f:["bouche, estomac, œsophage, gros intestin, intestin grêle","bouche, poumons, estomac, intestin","estomac, bouche, intestin, œsophage"],e:"C'est le trajet des aliments pendant la digestion."},
 {t:"nutrition",q:"Où les nutriments passent-ils dans le sang ?",b:"dans l'intestin grêle",f:["dans la bouche","dans l'œsophage","dans les poumons"],e:"La paroi de l'intestin grêle laisse passer les nutriments vers le sang."},
 {t:"nutrition",q:"Les dents servent à :",b:"couper, déchirer et broyer les aliments",f:["digérer les aliments complètement","respirer","faire circuler le sang"],e:"Incisives, canines et molaires ont des rôles différents."},
 {t:"nutrition",q:"Les nutriments sont transportés dans tout le corps par :",b:"le sang",f:["l'air","les os","la salive"],e:"Le sang apporte aux organes les nutriments et le dioxygène."},
 {t:"nutrition",q:"La digestion commence :",b:"dans la bouche, avec la mastication et la salive",f:["dans l'intestin","dans les poumons","dans le cœur"],e:"La salive commence à transformer certains aliments."},
 {t:"nutrition",q:"Un repas équilibré contient :",b:"des aliments variés, dont des fruits et des légumes",f:["uniquement des sucreries","seulement de la viande","toujours des frites"],e:"On mange de tout, en quantités raisonnables, et on boit de l'eau."},
 {t:"nutrition",q:"Les produits laitiers apportent du calcium, utile pour :",b:"les os et les dents",f:["les cheveux seulement","la vue","la respiration"],e:"Lait, yaourts et fromages sont riches en calcium."},
 {t:"corps",q:"Quel organe pompe le sang dans tout le corps ?",b:"le cœur",f:["les poumons","l'estomac","le cerveau"],e:"Le cœur est un muscle qui se contracte sans arrêt."},
 {t:"corps",q:"Quand on inspire, l'air entre dans :",b:"les poumons",f:["l'estomac","le cœur","l'intestin"],e:"Il passe par le nez ou la bouche, la trachée puis les bronches."},
 {t:"corps",q:"Dans les poumons, le sang se charge :",b:"en dioxygène",f:["en nutriments","en sucre","en calcium"],e:"Le dioxygène passe de l'air au sang ; le dioxyde de carbone fait le chemin inverse."},
 {t:"corps",q:"L'air que nous expirons contient plus :",b:"de dioxyde de carbone",f:["de dioxygène","de sucre","d'eau salée"],e:"Les organes rejettent du dioxyde de carbone que le sang ramène aux poumons."},
 {t:"corps",q:"Pendant un effort, le cœur bat :",b:"plus vite",f:["moins vite","pas du tout","de la même façon"],e:"Les muscles ont besoin de plus de dioxygène et de nutriments."},
 {t:"corps",q:"Pour plier le bras, le muscle du biceps :",b:"se contracte",f:["se casse","disparaît","devient un os"],e:"Un muscle qui se contracte raccourcit et tire sur l'os."},
 {t:"corps",q:"Le genou et le coude sont :",b:"des articulations",f:["des muscles","des organes de la digestion","des poumons"],e:"Une articulation relie deux os et permet le mouvement."},
 {t:"reproduction",q:"Chez les mammifères, le petit se développe :",b:"dans le ventre de sa mère",f:["dans un œuf pondu","dans la terre","dans une graine"],e:"Ce sont des animaux vivipares."},
 {t:"reproduction",q:"Un animal ovipare :",b:"pond des œufs",f:["donne naissance à des petits déjà formés","n'a pas de petits","vit seulement dans l'eau"],e:"Les oiseaux, la plupart des poissons et des reptiles sont ovipares."},
 {t:"reproduction",q:"Lequel de ces animaux est vivipare ?",b:"la chienne",f:["la poule","la tortue","la grenouille"],e:"La chienne est un mammifère : ses petits se développent dans son ventre."},
 {t:"reproduction",q:"La fécondation, c'est :",b:"la rencontre d'une cellule reproductrice mâle et d'une cellule femelle",f:["la naissance du petit","la ponte des œufs","la croissance d'un enfant"],e:"Chez l'humain, un spermatozoïde rencontre un ovule."},
 {t:"reproduction",q:"Après la fécondation, la fleur se transforme en :",b:"fruit contenant des graines",f:["racine","feuille","tige"],e:"Chaque graine peut donner une nouvelle plante."},
 {t:"reproduction",q:"Le pollen est souvent transporté d'une fleur à l'autre par :",b:"les insectes et le vent",f:["les racines","la pluie seulement","les pierres"],e:"Les abeilles, en butinant, transportent le pollen."},
 {t:"reproduction",q:"La puberté, c'est la période où :",b:"le corps de l'enfant se transforme et devient capable de se reproduire",f:["on perd ses dents de lait","on arrête de grandir","on apprend à marcher"],e:"Elle commence en général entre 10 et 14 ans, à des âges différents selon chacun."},
 {t:"reproduction",q:"Le têtard est :",b:"la larve de la grenouille",f:["un petit poisson","un insecte","un oiseau"],e:"Le têtard se transforme en grenouille : c'est la métamorphose."},
 {t:"ecosysteme",q:"Dans « herbe → lapin → renard », que signifie la flèche ?",b:"« est mangé par »",f:["« mange »","« est plus grand que »","« habite avec »"],e:"La flèche va de l'être vivant mangé vers celui qui le mange."},
 {t:"ecosysteme",q:"Le premier maillon d'une chaîne alimentaire est presque toujours :",b:"un végétal",f:["un carnivore","un champignon","un rocher"],e:"Les végétaux fabriquent leur propre matière : ce sont des producteurs."},
 {t:"ecosysteme",q:"Les vers de terre et les champignons qui transforment les feuilles mortes sont :",b:"des décomposeurs",f:["des prédateurs","des producteurs","des herbivores"],e:"Ils recyclent la matière morte en éléments minéraux utiles aux plantes."},
 {t:"ecosysteme",q:"Dans « herbe → lapin → renard », le renard est :",b:"un carnivore",f:["un herbivore","un producteur","un décomposeur"],e:"Il mange d'autres animaux : c'est un consommateur carnivore."},
 {t:"ecosysteme",q:"Si les lapins disparaissent d'une forêt, les renards :",b:"manquent de nourriture et deviennent moins nombreux",f:["deviennent plus nombreux","ne sont pas concernés","mangent de l'herbe"],e:"Dans un écosystème, les êtres vivants dépendent les uns des autres."},
 {t:"ecosysteme",q:"Un écosystème, c'est :",b:"un milieu de vie et l'ensemble des êtres vivants qui y vivent",f:["un seul animal","une espèce de plante","un appareil de mesure"],e:"Une mare, une forêt, une haie sont des écosystèmes."},
 {t:"ecosysteme",q:"Pour fabriquer leur matière, les plantes vertes ont besoin de :",b:"lumière, eau, sels minéraux et dioxyde de carbone",f:["viande et lumière","sucre et obscurité","sable seulement"],e:"Elles n'ont pas besoin de manger d'autres êtres vivants."},
 {t:"terre",q:"En combien de temps la Terre fait-elle un tour sur elle-même ?",b:"environ 24 heures",f:["environ 365 jours","environ 1 mois","environ 1 heure"],e:"Cette rotation explique l'alternance du jour et de la nuit."},
 {t:"terre",q:"En combien de temps la Terre fait-elle le tour du Soleil ?",b:"environ 365 jours",f:["24 heures","environ 1 mois","environ 10 ans"],e:"C'est la durée d'une année."},
 {t:"terre",q:"Qu'est-ce qui explique les saisons ?",b:"l'inclinaison de l'axe de rotation de la Terre",f:["la distance à la Lune","les nuages","la vitesse du vent"],e:"Selon la période, un hémisphère reçoit les rayons du Soleil plus ou moins directement."},
 {t:"terre",q:"En France, en été, les journées sont :",b:"plus longues que les nuits",f:["plus courtes que les nuits","toujours égales aux nuits","sans soleil"],e:"Le Soleil monte plus haut dans le ciel et reste visible plus longtemps."},
 {t:"terre",q:"Combien de planètes compte le système solaire ?",b:"8",f:["9","5","12"],e:"Mercure, Vénus, la Terre, Mars, Jupiter, Saturne, Uranus, Neptune."},
 {t:"terre",q:"Quelle est la plus grande planète du système solaire ?",b:"Jupiter",f:["la Terre","Mars","Mercure"],e:"Jupiter est une planète géante gazeuse."},
 {t:"terre",q:"Le Soleil est :",b:"une étoile",f:["une planète","un satellite","une comète"],e:"C'est l'étoile autour de laquelle tournent les planètes du système solaire."},
 {t:"terre",q:"Quand c'est l'été dans l'hémisphère Nord, dans l'hémisphère Sud c'est :",b:"l'hiver",f:["aussi l'été","le printemps","toujours l'automne"],e:"Les deux hémisphères ont des saisons inversées."},
 {t:"terre",q:"La Lune tourne autour de la Terre en environ :",b:"un mois",f:["un jour","une heure","dix ans"],e:"C'est le satellite naturel de la Terre."},
 {t:"seismes",q:"Un séisme est provoqué par :",b:"la rupture brutale de roches en profondeur",f:["la pluie","le vent","la marée"],e:"Les ondes partent du foyer et secouent le sol."},
 {t:"seismes",q:"L'épicentre d'un séisme, c'est :",b:"le point de la surface situé juste au-dessus du foyer",f:["le point le plus profond","le centre de la Terre","un volcan"],e:"Le foyer est en profondeur ; c'est souvent près de l'épicentre que les secousses sont les plus fortes."},
 {t:"seismes",q:"Quel appareil enregistre les secousses d'un séisme ?",b:"le sismographe",f:["le thermomètre","le baromètre","la boussole"],e:"Il trace les vibrations du sol."},
 {t:"seismes",q:"Pendant un séisme, à l'intérieur, il faut :",b:"s'abriter sous une table solide, loin des fenêtres",f:["prendre l'ascenseur","courir dans l'escalier","se mettre près des vitres"],e:"Ensuite, on sort calmement quand les secousses s'arrêtent."},
 {t:"seismes",q:"Un tsunami est :",b:"une série de vagues géantes provoquée par un séisme sous la mer",f:["un vent très fort","une éruption de volcan sur terre","une forte pluie"],e:"Il peut ravager les côtes à des milliers de kilomètres."},
 {t:"seismes",q:"En France, quelles régions sont les plus exposées aux séismes ?",b:"les Antilles, les Pyrénées et les Alpes",f:["la Bretagne et la Normandie","la Beauce","aucune"],e:"Ces régions sont situées près de zones actives."},
 {t:"seismes",q:"Peut-on prévoir le jour exact d'un séisme ?",b:"non, mais on peut s'y préparer",f:["oui, toujours","oui, avec une boussole","oui, grâce à la météo"],e:"On construit des bâtiments parasismiques et on fait des exercices."},
 {t:"volcans",q:"Comment appelle-t-on le magma quand il sort du volcan ?",b:"la lave",f:["la cendre","le cratère","le foyer"],e:"Le magma est de la roche fondue sous la surface."},
 {t:"volcans",q:"Un volcan effusif produit surtout :",b:"des coulées de lave fluide",f:["des explosions violentes","de la neige","de l'eau salée"],e:"Le Piton de la Fournaise, à La Réunion, est un volcan effusif."},
 {t:"volcans",q:"Un volcan explosif projette surtout :",b:"des cendres, des blocs et des nuées brûlantes",f:["des coulées de lave très fluide seulement","de l'eau douce","rien"],e:"La lave est pâteuse et les gaz s'échappent violemment."},
 {t:"volcans",q:"L'ouverture au sommet d'un volcan s'appelle :",b:"le cratère",f:["l'épicentre","la cheminée de la maison","la vallée"],e:"Le magma monte par la cheminée et sort par le cratère."},
 {t:"volcans",q:"Quel volcan français est très actif ?",b:"le Piton de la Fournaise",f:["le mont Blanc","le puy de Dôme","le mont Ventoux"],e:"Il se trouve à La Réunion et entre souvent en éruption."},
 {t:"volcans",q:"Qui surveille les volcans pour prévenir les habitants ?",b:"les volcanologues",f:["les pompiers seulement","les boulangers","les astronautes"],e:"Ils mesurent les secousses, les gaz et le gonflement du volcan."},
 {t:"volcans",q:"La roche fondue située sous le volcan s'appelle :",b:"le magma",f:["la lave refroidie","le sable","le granite"],e:"Il remonte par la cheminée lors d'une éruption."},
 {t:"technique",q:"Un objet technique est :",b:"fabriqué par l'être humain pour répondre à un besoin",f:["trouvé tel quel dans la nature","toujours électrique","toujours en bois"],e:"Une paire de ciseaux, un vélo, un ordinateur sont des objets techniques."},
 {t:"technique",q:"La fonction d'usage d'un objet, c'est :",b:"le service qu'il rend",f:["son prix","sa couleur","son poids"],e:"La fonction d'usage d'un parapluie : protéger de la pluie."},
 {t:"technique",q:"Sur un vélo, ce qui transmet le mouvement des pédales à la roue arrière est :",b:"la chaîne",f:["le guidon","la selle","le phare"],e:"La chaîne relie le plateau (pédalier) au pignon de la roue."},
 {t:"technique",q:"Un robot reçoit des informations sur son environnement grâce à :",b:"ses capteurs",f:["sa peinture","ses roues","son emballage"],e:"Les capteurs informent, les actionneurs (moteurs) agissent."},
 {t:"technique",q:"Dans l'ordre, quels objets montrent l'évolution du téléphone ?",b:"téléphone fixe, téléphone portable, smartphone",f:["smartphone, téléphone fixe, téléphone portable","téléphone portable, téléphone fixe, smartphone","smartphone, télégraphe, téléphone fixe"],e:"Les objets techniques évoluent avec les découvertes et les besoins."},
 {t:"technique",q:"Une notice de montage sert à :",b:"expliquer les étapes pour assembler un objet",f:["décorer l'objet","donner le prix","remplacer l'objet"],e:"Elle montre l'ordre des étapes et les pièces à utiliser."},
 {t:"technique",q:"Quelle énergie fait fonctionner une lampe de poche ?",b:"l'électricité d'une pile",f:["l'essence","le vent","le charbon"],e:"La pile fournit l'énergie électrique au circuit."},
 {t:"materiaux",q:"Le plastique est fabriqué principalement à partir :",b:"du pétrole",f:["du bois","du sable","de la laine"],e:"Beaucoup de plastiques viennent du pétrole, une ressource non renouvelable."},
 {t:"materiaux",q:"Le verre est fabriqué à partir :",b:"de sable chauffé à très haute température",f:["de pétrole","de bois","de métal"],e:"Le verre se recycle très bien."},
 {t:"materiaux",q:"Le papier est fabriqué à partir :",b:"du bois",f:["du sable","du pétrole","du fer"],e:"On utilise les fibres du bois ou du papier recyclé."},
 {t:"materiaux",q:"Quel matériau est attiré par un aimant ?",b:"le fer",f:["le bois","le plastique","le verre"],e:"Le fer et l'acier sont attirés par les aimants ; pas l'aluminium."},
 {t:"materiaux",q:"Pourquoi fabrique-t-on les casseroles en métal ?",b:"parce que le métal conduit bien la chaleur",f:["parce que le métal est isolant","parce qu'il est transparent","parce qu'il flotte"],e:"Le manche, lui, est souvent isolant pour ne pas se brûler."},
 {t:"materiaux",q:"Pour des bottes de pluie, il faut un matériau :",b:"imperméable, comme le caoutchouc",f:["absorbant, comme le coton","fragile, comme le verre","lourd, comme la pierre"],e:"Un matériau imperméable ne laisse pas passer l'eau."},
 {t:"materiaux",q:"Pour garder une boisson chaude, on choisit un matériau :",b:"isolant thermique",f:["bon conducteur de chaleur","transparent","magnétique"],e:"Un isolant thermique limite les échanges de chaleur."},
 {t:"classification",q:"Un vertébré possède :",b:"une colonne vertébrale",f:["une coquille","six pattes","des antennes"],e:"Poissons, amphibiens, reptiles, oiseaux et mammifères sont des vertébrés."},
 {t:"classification",q:"Quels animaux ont des poils et des mamelles ?",b:"les mammifères",f:["les oiseaux","les poissons","les insectes"],e:"Les femelles allaitent leurs petits."},
 {t:"classification",q:"Seuls les oiseaux ont :",b:"des plumes",f:["des yeux","une bouche","un squelette"],e:"Les plumes sont l'attribut qui caractérise les oiseaux."},
 {t:"classification",q:"Le dauphin est :",b:"un mammifère",f:["un poisson","un oiseau","un reptile"],e:"Il respire de l'air avec des poumons et allaite ses petits."},
 {t:"classification",q:"La chauve-souris est :",b:"un mammifère",f:["un oiseau","un insecte","un reptile"],e:"Elle a des poils et allaite ses petits, même si elle vole."},
 {t:"classification",q:"L'araignée n'est pas un insecte car elle a :",b:"huit pattes",f:["six pattes","des plumes","des poils"],e:"Les insectes ont six pattes ; les araignées en ont huit."},
 {t:"classification",q:"Combien de pattes ont les insectes ?",b:"6",f:["8","4","10"],e:"Fourmis, abeilles, papillons ont six pattes."},
 {t:"environnement",q:"Quel geste réduit le plus la quantité de déchets ?",b:"éviter d'acheter des emballages inutiles",f:["brûler ses déchets dans le jardin","jeter tout dans la même poubelle","acheter plus d'objets jetables"],e:"Le meilleur déchet est celui qu'on ne produit pas : réduire, réutiliser, recycler."},
 {t:"environnement",q:"Dans le cycle de l'eau, l'évaporation, c'est :",b:"l'eau qui passe à l'état de vapeur",f:["la pluie qui tombe","l'eau qui gèle","l'eau qui s'infiltre dans le sol"],e:"Évaporation, condensation en nuages, précipitations, ruissellement et infiltration."},
 {t:"environnement",q:"Où doit-on déposer une pile usagée ?",b:"dans un point de collecte spécial",f:["dans la poubelle ordinaire","dans la nature","dans les toilettes"],e:"Les piles contiennent des produits dangereux qui doivent être recyclés."},
 {t:"environnement",q:"Que met-on dans un composteur ?",b:"les épluchures de fruits et de légumes",f:["les bouteilles en verre","les piles","les canettes"],e:"Les déchets végétaux se transforment en terreau."},
 {t:"environnement",q:"Avant d'arriver au robinet, l'eau potable est :",b:"captée puis traitée pour être propre à la consommation",f:["prise directement dans la mer","jamais contrôlée","fabriquée en usine à partir de rien"],e:"Après usage, les eaux usées sont nettoyées en station d'épuration."},
 {t:"environnement",q:"Combien de temps une bouteille en plastique met-elle à se dégrader dans la nature ?",b:"plusieurs centaines d'années",f:["quelques jours","quelques semaines","un an"],e:"C'est pourquoi il ne faut jamais jeter de plastique dans la nature."},
 {t:"environnement",q:"Quel geste économise l'eau ?",b:"fermer le robinet pendant qu'on se brosse les dents",f:["prendre un bain chaque jour","laisser couler l'eau","arroser en plein soleil"],e:"L'eau douce est une ressource précieuse."},
 {t:"demarche",q:"Dans une démarche scientifique, que fait-on avant l'expérience ?",b:"on formule une hypothèse",f:["on écrit la conclusion","on range le matériel","on donne le résultat"],e:"Question → hypothèse → expérience → observation → conclusion."},
 {t:"demarche",q:"Une hypothèse, c'est :",b:"une réponse possible que l'on va vérifier",f:["une réponse toujours juste","le matériel de l'expérience","le titre de l'expérience"],e:"L'expérience permet de la confirmer ou de la rejeter."},
 {t:"demarche",q:"Pour savoir si une plante a besoin de lumière, on compare :",b:"deux plantes identiques, l'une à la lumière, l'autre dans le noir",f:["deux plantes différentes dans des lieux différents","une plante arrosée et une plante non arrosée","une seule plante"],e:"On ne change qu'un seul facteur à la fois : ici, la lumière."},
 {t:"demarche",q:"Dans une expérience, pourquoi ne change-t-on qu'un seul facteur à la fois ?",b:"pour savoir ce qui cause le résultat",f:["pour aller plus vite","pour utiliser moins de matériel","pour que ce soit plus joli"],e:"Si on change deux choses, on ne sait plus laquelle agit."},
 {t:"demarche",q:"Quel instrument mesure une température ?",b:"le thermomètre",f:["la balance","l'éprouvette","le chronomètre"],e:"La balance mesure une masse, l'éprouvette graduée un volume."},
 {t:"demarche",q:"Une expérience témoin sert à :",b:"comparer, car on n'y change pas le facteur étudié",f:["remplacer une expérience ratée","faire plus joli","prouver que l'on a raison sans tester"],e:"On compare le résultat avec celui de l'expérience où l'on a changé un facteur."},
 {t:"demarche",q:"Après l'expérience, on écrit :",b:"une conclusion qui répond à la question de départ",f:["une nouvelle question sans rapport","seulement le titre","rien du tout"],e:"La conclusion dit si l'hypothèse est validée ou non."},
 {t:"demarche",q:"Quel instrument mesure le volume d'un liquide ?",b:"l'éprouvette graduée",f:["la balance","le thermomètre","la règle"],e:"On lit le volume en mL au niveau de la surface du liquide."}
];

/* ---------- HISTOIRE-GÉOGRAPHIE ET EMC ---------- */
const BANQUE_H=[
 {t:"reperes",q:"En quel siècle se situe l'année 1848 ?",b:"au XIXe siècle",f:["au XVIIIe siècle","au XXe siècle","au XVIe siècle"],e:"Les années 1801 à 1900 forment le XIXe siècle."},
 {t:"reperes",q:"En quel siècle se situe l'année 1914 ?",b:"au XXe siècle",f:["au XIXe siècle","au XXIe siècle","au XVIIIe siècle"],e:"Les années 1901 à 2000 forment le XXe siècle."},
 {t:"reperes",q:"Le XXIe siècle a commencé :",b:"le 1er janvier 2001",f:["le 1er janvier 1901","le 1er janvier 2100","le 1er janvier 1789"],e:"Un siècle commence par une année en 01 : 2001 à 2100."},
 {t:"reperes",q:"Combien d'années y a-t-il dans un siècle ?",b:"100",f:["10","1000","50"],e:"Un siècle = 100 ans ; un millénaire = 1 000 ans."},
 {t:"reperes",q:"L'époque contemporaine, étudiée au CM2, commence avec :",b:"la Révolution française de 1789",f:["la Première Guerre mondiale","la naissance de Jésus-Christ","l'invention de l'écriture"],e:"Préhistoire, Antiquité, Moyen Âge, Temps modernes, puis époque contemporaine."},
 {t:"reperes",q:"Quelles dates sont rangées de la plus ancienne à la plus récente ?",b:"1848, 1882, 1914, 1945",f:["1882, 1848, 1945, 1914","1914, 1848, 1882, 1945","1945, 1914, 1882, 1848"],e:"Sur une frise, on range les dates de gauche (ancien) à droite (récent)."},
 {t:"reperes",q:"Combien d'années séparent 1870 et 1914 ?",b:"44",f:["34","54","40"],e:"1914 − 1870 = 44 ans."},
 {t:"deplacer",q:"Quel moyen de transport pollue le moins ?",b:"le vélo",f:["la voiture","l'avion","le camion"],e:"Le vélo et la marche sont des mobilités douces, sans moteur."},
 {t:"deplacer",q:"Pour voyager d'un continent à l'autre rapidement, on utilise surtout :",b:"l'avion",f:["le vélo","la trottinette","le tramway"],e:"Les grands aéroports relient les métropoles du monde entier."},
 {t:"deplacer",q:"Le tunnel sous la Manche relie la France :",b:"au Royaume-Uni",f:["à l'Espagne","à l'Italie","à l'Allemagne"],e:"Il a été ouvert en 1994 ; des trains y circulent."},
 {t:"deplacer",q:"Quel train à grande vitesse relie les grandes villes de France ?",b:"le TGV",f:["le tramway","le métro","le funiculaire"],e:"Le premier TGV a circulé entre Paris et Lyon en 1981."},
 {t:"deplacer",q:"Le covoiturage, c'est :",b:"partager une voiture à plusieurs pour faire le même trajet",f:["conduire seul","prendre l'avion","louer un vélo"],e:"Il réduit le nombre de voitures, la pollution et le coût du trajet."},
 {t:"deplacer",q:"La plupart des marchandises traversent les océans :",b:"par bateau, dans des porte-conteneurs",f:["en camion","à vélo","en train sous la mer"],e:"Les grands ports sont des carrefours du commerce mondial."},
 {t:"deplacer",q:"En ville, quelle solution réduit les embouteillages ?",b:"développer les transports en commun",f:["construire plus de parkings au centre","utiliser chacun sa voiture","supprimer les bus"],e:"Bus, tramway et métro transportent beaucoup de personnes à la fois."},
 {t:"deplacer",q:"Quel déplacement est un déplacement du quotidien ?",b:"aller à l'école",f:["partir en vacances au Japon","déménager dans un autre pays","faire le tour du monde"],e:"On fait les déplacements quotidiens presque tous les jours : école, travail, courses."},
 {t:"r1848",q:"En 1848, quel régime est proclamé en France ?",b:"la IIe République",f:["l'Empire","la monarchie","la Ve République"],e:"La révolution de février 1848 renverse le roi Louis-Philippe."},
 {t:"r1848",q:"Qui obtient le droit de vote en 1848 ?",b:"tous les hommes de 21 ans et plus",f:["les hommes et les femmes","seulement les hommes riches","les enfants"],e:"C'est le suffrage universel masculin : les femmes ne votent pas encore."},
 {t:"r1848",q:"Qui fait abolir l'esclavage dans les colonies françaises en 1848 ?",b:"Victor Schœlcher",f:["Jules Ferry","Napoléon III","Charles de Gaulle"],e:"Le décret d'abolition est signé le 27 avril 1848."},
 {t:"r1848",q:"Qui est élu président de la République en décembre 1848 ?",b:"Louis-Napoléon Bonaparte",f:["Jules Ferry","Louis XVI","Victor Hugo"],e:"C'est le premier président élu au suffrage universel masculin."},
 {t:"r1848",q:"Comment finit la IIe République ?",b:"Louis-Napoléon Bonaparte fait un coup d'État et devient l'empereur Napoléon III",f:["par une victoire militaire","par l'élection d'une femme","elle existe toujours"],e:"Coup d'État en 1851, Second Empire à partir de 1852."},
 {t:"r1848",q:"Quel roi est renversé en février 1848 ?",b:"Louis-Philippe",f:["Louis XIV","Louis XVI","Charlemagne"],e:"Il abdique et la République est proclamée."},
 {t:"troisieme",q:"En quelle année la IIIe République est-elle proclamée ?",b:"1870",f:["1789","1848","1945"],e:"Elle est proclamée le 4 septembre 1870."},
 {t:"troisieme",q:"La IIIe République naît après :",b:"la défaite de Napoléon III contre la Prusse",f:["la victoire de 1918","la Révolution de 1789","la construction européenne"],e:"L'empereur est fait prisonnier à Sedan en septembre 1870."},
 {t:"troisieme",q:"En quelle année La Marseillaise devient-elle l'hymne national ?",b:"1879",f:["1789","1914","1945"],e:"La IIIe République adopte les symboles nés de la Révolution."},
 {t:"troisieme",q:"Depuis 1880, quelle est la fête nationale française ?",b:"le 14 juillet",f:["le 11 novembre","le 1er mai","le 8 mai"],e:"Elle rappelle la prise de la Bastille (1789) et la fête de la Fédération (1790)."},
 {t:"troisieme",q:"Quelle est la devise de la République française ?",b:"Liberté, Égalité, Fraternité",f:["Travail, Famille, Patrie","Paix, Amour, Joie","Un pour tous, tous pour un"],e:"On la lit sur les mairies et les écoles."},
 {t:"troisieme",q:"Marianne représente :",b:"la République française",f:["une reine de France","une impératrice","l'Union européenne"],e:"Son buste se trouve dans les mairies."},
 {t:"troisieme",q:"Jusqu'à quand dure la IIIe République ?",b:"jusqu'en 1940",f:["jusqu'en 1871","jusqu'en 2000","elle dure encore"],e:"Elle disparaît après la défaite de 1940. Aujourd'hui, nous sommes sous la Ve République."},
 {t:"ecole",q:"Quelles lois rendent l'école primaire gratuite, obligatoire et laïque ?",b:"les lois Jules Ferry",f:["les lois de Napoléon","la loi de 1905","les lois de Louis XIV"],e:"Ce sont les lois de 1881 et 1882."},
 {t:"ecole",q:"En quelles années les lois Jules Ferry sont-elles votées ?",b:"1881 et 1882",f:["1789 et 1790","1914 et 1918","1944 et 1945"],e:"1881 : gratuité ; 1882 : obligation et laïcité."},
 {t:"ecole",q:"Avec les lois Jules Ferry, l'instruction est obligatoire :",b:"de 6 à 13 ans",f:["de 3 à 18 ans","de 10 à 20 ans","seulement pour les garçons"],e:"Filles et garçons doivent être instruits."},
 {t:"ecole",q:"Quel diplôme passaient les élèves à la fin de l'école primaire ?",b:"le certificat d'études",f:["le baccalauréat","le permis de conduire","le brevet de pilote"],e:"Le « certif » était une grande fierté pour les familles."},
 {t:"ecole",q:"Dans l'école laïque de Jules Ferry :",b:"il n'y a plus d'enseignement religieux en classe",f:["on apprend une seule religion","les prêtres font la classe","on prie avant chaque leçon"],e:"L'instruction morale et civique remplace le catéchisme à l'école."},
 {t:"ecole",q:"Pourquoi la République veut-elle instruire tous les enfants ?",b:"pour former des citoyens capables de lire, de s'informer et de voter",f:["pour recruter des rois","pour fermer les usines","pour supprimer les élections"],e:"La République a besoin de citoyens éclairés."},
 {t:"ecole",q:"Comment surnommait-on les instituteurs de la IIIe République ?",b:"les hussards noirs de la République",f:["les mousquetaires","les poilus","les sans-culottes"],e:"À cause de leur uniforme sombre et de leur mission au service de la République."},
 {t:"ecole",q:"Aujourd'hui en France, l'instruction est obligatoire :",b:"de 3 à 16 ans",f:["de 6 à 13 ans","de 8 à 12 ans","de 5 à 10 ans"],e:"Depuis 2019, elle commence dès 3 ans."},
 {t:"laicite",q:"En quelle année est votée la loi de séparation des Églises et de l'État ?",b:"1905",f:["1789","1882","1958"],e:"Elle est votée le 9 décembre 1905."},
 {t:"laicite",q:"Dans un État laïque :",b:"l'État ne favorise aucune religion et garantit la liberté de croire ou de ne pas croire",f:["une seule religion est autorisée","toutes les religions sont interdites","l'État choisit la religion de chacun"],e:"La laïcité protège la liberté de conscience de chacun."},
 {t:"laicite",q:"Depuis la loi de 1905, l'État :",b:"ne paie plus les responsables religieux",f:["paie tous les prêtres","choisit les évêques","ferme toutes les églises"],e:"La République ne reconnaît et ne salarie aucun culte."},
 {t:"laicite",q:"À l'école publique, la laïcité signifie que :",b:"l'école est neutre et respecte toutes les croyances",f:["on ne parle jamais des religions","une religion est enseignée","les élèves doivent croire en un dieu"],e:"On peut étudier les faits religieux en histoire, sans enseigner une croyance."},
 {t:"laicite",q:"Selon la Constitution, la France est une République :",b:"indivisible, laïque, démocratique et sociale",f:["royale et religieuse","impériale","militaire"],e:"C'est l'article premier de la Constitution de 1958."},
 {t:"laicite",q:"Croire ou ne pas croire en une religion est :",b:"un choix personnel protégé par la loi",f:["obligatoire","interdit","décidé par le maire"],e:"C'est la liberté de conscience."},
 {t:"vote",q:"En quelle année les femmes obtiennent-elles le droit de vote en France ?",b:"1944",f:["1848","1789","1981"],e:"Le droit est accordé en 1944 ; elles votent pour la première fois en 1945."},
 {t:"vote",q:"En quelle année les Françaises votent-elles pour la première fois ?",b:"1945",f:["1848","1918","1968"],e:"Aux élections municipales d'avril 1945."},
 {t:"vote",q:"Aujourd'hui en France, à partir de quel âge peut-on voter ?",b:"18 ans",f:["16 ans","21 ans","25 ans"],e:"La majorité et le droit de vote sont passés de 21 à 18 ans en 1974."},
 {t:"vote",q:"À quoi sert l'isoloir dans un bureau de vote ?",b:"à voter en secret",f:["à compter les voix","à ranger les urnes","à se reposer"],e:"Le vote est secret : personne ne doit savoir pour qui l'on vote."},
 {t:"vote",q:"Le suffrage universel masculin est établi en :",b:"1848",f:["1789","1905","1944"],e:"Tous les hommes de 21 ans et plus peuvent alors voter."},
 {t:"vote",q:"Les suffragettes étaient :",b:"des femmes qui se battaient pour obtenir le droit de vote",f:["des soldates","des institutrices","des reines"],e:"Ce mouvement est très actif au Royaume-Uni au début du XXe siècle."},
 {t:"vote",q:"Le « suffrage universel » signifie que :",b:"tous les citoyens majeurs ont le droit de vote",f:["seuls les riches votent","seuls les hommes votent","personne ne vote"],e:"Aujourd'hui en France, il concerne les femmes et les hommes de 18 ans et plus."},
 {t:"industrie",q:"Quelle machine est au cœur de la révolution industrielle ?",b:"la machine à vapeur",f:["l'ordinateur","le moulin à vent","le smartphone"],e:"Elle fait tourner les usines, les locomotives et les bateaux."},
 {t:"industrie",q:"Quelle source d'énergie alimente les machines à vapeur ?",b:"le charbon",f:["le soleil","le vent","l'uranium"],e:"On brûle du charbon pour chauffer l'eau et produire de la vapeur."},
 {t:"industrie",q:"Que faisaient les mineurs au XIXe siècle ?",b:"ils extrayaient le charbon dans les mines",f:["ils cultivaient le blé","ils fabriquaient des avions","ils enseignaient"],e:"Le travail dans les mines était dur et dangereux."},
 {t:"industrie",q:"Au XIXe siècle, beaucoup de paysans quittent la campagne pour travailler en ville : c'est :",b:"l'exode rural",f:["la Révolution","la colonisation","l'armistice"],e:"Les villes industrielles grandissent très vite."},
 {t:"industrie",q:"Au début de l'âge industriel, les enfants qui travaillaient en usine :",b:"faisaient souvent de très longues journées",f:["ne travaillaient qu'une heure par jour","étaient tous à l'école","étaient bien protégés par la loi"],e:"Une loi de 1841 interdit le travail en usine avant 8 ans ; l'école obligatoire viendra en 1882."},
 {t:"industrie",q:"Au XIXe siècle, quel nouveau moyen de transport se développe en France ?",b:"le chemin de fer",f:["l'avion","la fusée","le TGV"],e:"Les locomotives à vapeur relient les villes et transportent les marchandises."},
 {t:"industrie",q:"Pour défendre leurs droits, les ouvriers s'organisent dans :",b:"des syndicats",f:["des châteaux","des monastères","des clubs de sport"],e:"Les syndicats sont autorisés en France en 1884."},
 {t:"industrie",q:"À la fin du XIXe siècle, quelle nouvelle énergie se répand ?",b:"l'électricité",f:["l'énergie solaire","le nucléaire","la vapeur d'eau seule"],e:"Elle éclaire les villes et fait fonctionner de nouvelles machines."},
 {t:"industrie",q:"Quel roman d'Émile Zola raconte la vie des mineurs ?",b:"Germinal",f:["Les Misérables","Le Petit Prince","Le Tour du monde en 80 jours"],e:"Germinal est publié en 1885."},
 {t:"grandeguerre",q:"Quelles sont les dates de la Première Guerre mondiale ?",b:"1914-1918",f:["1939-1945","1870-1871","1789-1799"],e:"Elle oppose notamment la France, le Royaume-Uni et la Russie à l'Allemagne et à l'Autriche-Hongrie."},
 {t:"grandeguerre",q:"Quel jour l'armistice de la Première Guerre mondiale est-il signé ?",b:"le 11 novembre 1918",f:["le 8 mai 1945","le 14 juillet 1789","le 6 juin 1944"],e:"Le 11 novembre est un jour férié en souvenir des morts de la guerre."},
 {t:"grandeguerre",q:"Comment surnommait-on les soldats français de 14-18 ?",b:"les poilus",f:["les hussards noirs","les sans-culottes","les grognards"],e:"Ils vivaient de longs mois dans les tranchées, sans pouvoir se raser."},
 {t:"grandeguerre",q:"Les soldats de 14-18 se protégeaient dans :",b:"des tranchées",f:["des châteaux forts","des gratte-ciel","des grottes préhistoriques"],e:"Ce sont des fossés creusés dans la terre, souvent remplis de boue."},
 {t:"grandeguerre",q:"Quelle grande bataille a lieu à Verdun ?",b:"une bataille de 1916, très meurtrière",f:["la dernière bataille de 1945","une bataille de la Révolution","une bataille de Napoléon"],e:"Elle dure de février à décembre 1916."},
 {t:"grandeguerre",q:"Pendant la guerre, à l'arrière du front, les femmes :",b:"remplacent les hommes dans les usines et les champs",f:["restent sans rien faire","partent toutes au combat","votent pour la première fois"],e:"Leur travail est essentiel pour nourrir le pays et fabriquer les armes."},
 {t:"grandeguerre",q:"Environ combien de soldats français sont morts pendant la Première Guerre mondiale ?",b:"environ 1,4 million",f:["environ 1 000","environ 10 000","environ 100 millions"],e:"Presque chaque commune a élevé un monument aux morts."},
 {t:"grandeguerre",q:"Pourquoi trouve-t-on un monument aux morts dans presque toutes les communes ?",b:"pour honorer les soldats morts pendant la guerre",f:["pour décorer la place","pour indiquer la mairie","pour célébrer un roi"],e:"Les noms des soldats morts de la commune y sont gravés."},
 {t:"ww2",q:"Quelles sont les dates de la Seconde Guerre mondiale ?",b:"1939-1945",f:["1914-1918","1870-1871","1954-1962"],e:"Elle oppose les Alliés à l'Allemagne nazie et à ses alliés."},
 {t:"ww2",q:"Qui lance un appel à la résistance depuis Londres le 18 juin 1940 ?",b:"le général de Gaulle",f:["le maréchal Pétain","Jules Ferry","Napoléon III"],e:"Il refuse la défaite et appelle les Français à continuer le combat."},
 {t:"ww2",q:"Qui dirige le régime de Vichy, qui collabore avec l'Allemagne nazie ?",b:"le maréchal Pétain",f:["le général de Gaulle","Jean Moulin","Victor Schœlcher"],e:"Ce régime remplace la République de 1940 à 1944."},
 {t:"ww2",q:"Qui a unifié les mouvements de la Résistance intérieure ?",b:"Jean Moulin",f:["Jules Ferry","Louis-Philippe","Émile Zola"],e:"Arrêté en 1943, il meurt après avoir été torturé. Il repose au Panthéon."},
 {t:"ww2",q:"Le 6 juin 1944, les Alliés débarquent :",b:"en Normandie",f:["en Bretagne","à Marseille","à Paris"],e:"C'est le début de la libération de la France."},
 {t:"ww2",q:"Quel jour la guerre se termine-t-elle en Europe ?",b:"le 8 mai 1945",f:["le 11 novembre 1918","le 14 juillet 1945","le 6 juin 1944"],e:"L'Allemagne nazie capitule ; le 8 mai est un jour férié."},
 {t:"ww2",q:"La Shoah, c'est :",b:"le génocide des Juifs d'Europe par les nazis",f:["une bataille de 1916","un traité de paix","une loi sur l'école"],e:"Environ 6 millions de Juifs ont été assassinés."},
 {t:"ww2",q:"Qui dirige l'Allemagne nazie ?",b:"Adolf Hitler",f:["Napoléon III","Guillaume Ier","Charles de Gaulle"],e:"Il impose une dictature fondée sur le racisme et la violence."},
 {t:"europe",q:"En quelle année le traité de Rome crée-t-il la Communauté économique européenne ?",b:"1957",f:["1789","1918","2002"],e:"Six pays fondateurs, dont la France."},
 {t:"europe",q:"Combien de pays ont fondé la Communauté européenne en 1957 ?",b:"6",f:["27","12","2"],e:"France, Allemagne de l'Ouest, Italie, Belgique, Pays-Bas et Luxembourg."},
 {t:"europe",q:"Combien de pays compte l'Union européenne aujourd'hui ?",b:"27",f:["6","12","50"],e:"Depuis la sortie du Royaume-Uni en 2020, l'Union européenne compte 27 pays."},
 {t:"europe",q:"Depuis quand les pièces et billets en euros sont-ils utilisés en France ?",b:"2002",f:["1957","1992","2020"],e:"L'euro a remplacé le franc le 1er janvier 2002."},
 {t:"europe",q:"Comment est le drapeau européen ?",b:"12 étoiles jaunes en cercle sur fond bleu",f:["bleu, blanc, rouge","une étoile rouge sur fond blanc","27 étoiles sur fond vert"],e:"Le nombre d'étoiles ne correspond pas au nombre de pays : il symbolise l'unité."},
 {t:"europe",q:"Dans quelle ville française siège le Parlement européen ?",b:"Strasbourg",f:["Paris","Lyon","Marseille"],e:"Les députés européens sont élus par les citoyens de l'Union."},
 {t:"europe",q:"Après la Seconde Guerre mondiale, la construction européenne a d'abord pour but :",b:"de garantir la paix entre les pays européens",f:["de conquérir d'autres continents","de supprimer les pays","de créer un roi d'Europe"],e:"Les anciens ennemis décident de coopérer."},
 {t:"europe",q:"Quel jour est la Journée de l'Europe ?",b:"le 9 mai",f:["le 14 juillet","le 25 décembre","le 11 novembre"],e:"En souvenir de la déclaration de Robert Schuman, le 9 mai 1950."},
 {t:"internet",q:"Comment les données d'Internet traversent-elles surtout les océans ?",b:"par des câbles sous-marins",f:["par des pigeons voyageurs","par bateau, sur des clés USB","par les nuages de pluie"],e:"La grande majorité des échanges entre continents passent par ces câbles."},
 {t:"internet",q:"Un centre de données (data center), c'est :",b:"un bâtiment rempli d'ordinateurs qui stockent des données",f:["une école d'informatique","un magasin de téléphones","une antenne de radio"],e:"Ces serveurs consomment beaucoup d'électricité, notamment pour être refroidis."},
 {t:"internet",q:"La fracture numérique, c'est :",b:"l'inégalité d'accès à Internet entre les personnes ou les territoires",f:["un écran cassé","une panne d'électricité","un virus informatique"],e:"Certaines régions du monde ou zones rurales sont mal connectées."},
 {t:"internet",q:"Quel continent compte la plus grande part d'habitants sans accès à Internet ?",b:"l'Afrique",f:["l'Europe","l'Amérique du Nord","l'Océanie"],e:"Beaucoup de régions africaines manquent encore de réseaux."},
 {t:"internet",q:"La fibre optique transporte les données sous forme :",b:"de lumière",f:["d'eau","de son","de papier"],e:"Elle permet un Internet très rapide."},
 {t:"internet",q:"Envoyer un message en un instant à l'autre bout du monde est possible grâce :",b:"aux réseaux qui forment Internet",f:["au courrier postal","aux pigeons voyageurs","au télégraphe à vapeur"],e:"Câbles, antennes, satellites et serveurs relient le monde entier."},
 {t:"internet",q:"Internet a-t-il un impact sur l'environnement ?",b:"oui, les appareils, les réseaux et les serveurs consomment beaucoup d'énergie",f:["non, il ne consomme rien","seulement quand il pleut","seulement la nuit"],e:"On peut limiter cet impact : garder plus longtemps ses appareils, éviter les vidéos inutiles."},
 {t:"habiter",q:"Une ville durable cherche à :",b:"bien vivre ensemble tout en respectant l'environnement",f:["construire le plus de routes possible","supprimer les parcs","utiliser plus de voitures"],e:"Transports en commun, espaces verts, économies d'énergie, tri des déchets."},
 {t:"habiter",q:"Un écoquartier est un quartier conçu pour :",b:"économiser l'énergie et l'eau et favoriser la nature et les déplacements doux",f:["accueillir des usines polluantes","remplacer tous les arbres par du béton","interdire les piétons"],e:"On y trouve souvent des bâtiments bien isolés et des pistes cyclables."},
 {t:"habiter",q:"Le tri des déchets permet surtout :",b:"de recycler les matériaux",f:["de jeter plus","de polluer les rivières","de chauffer la maison"],e:"Le verre, le papier, le carton et certains plastiques sont recyclés."},
 {t:"habiter",q:"Une maison bien isolée :",b:"consomme moins d'énergie pour se chauffer",f:["consomme plus d'énergie","est toujours froide","n'a pas besoin de toit"],e:"L'isolation garde la chaleur à l'intérieur en hiver."},
 {t:"habiter",q:"Pourquoi planter des arbres en ville ?",b:"pour rafraîchir la ville et accueillir la biodiversité",f:["pour gêner les piétons","pour cacher les panneaux","pour remplacer les écoles"],e:"Les arbres font de l'ombre, absorbent du dioxyde de carbone et abritent des animaux."},
 {t:"habiter",q:"Quelle action réduit la pollution de l'air en ville ?",b:"créer des pistes cyclables et des transports en commun",f:["construire plus d'autoroutes en ville","laisser les moteurs allumés","brûler les déchets"],e:"Moins de voitures, c'est moins de gaz polluants."},
 {t:"habiter",q:"Réutiliser un objet au lieu de le jeter, c'est :",b:"lui donner une seconde vie",f:["le polluer","l'abîmer","le recycler en usine obligatoirement"],e:"Réparer, donner ou transformer évite de produire un déchet."},
 {t:"emc",q:"Quel texte international protège les droits des enfants ?",b:"la Convention internationale des droits de l'enfant",f:["le Code de la route","le règlement de la cantine","la Constitution américaine"],e:"Adoptée par l'ONU le 20 novembre 1989."},
 {t:"emc",q:"Que faire si un camarade est harcelé ?",b:"en parler à un adulte de confiance",f:["ne rien dire","se moquer aussi","filmer la scène"],e:"Le 3018 est le numéro national gratuit contre le harcèlement."},
 {t:"emc",q:"Pour combien d'années le président de la République est-il élu ?",b:"5 ans",f:["7 ans","2 ans","à vie"],e:"Il est élu au suffrage universel direct pour un mandat de 5 ans."},
 {t:"emc",q:"En France, qui vote les lois ?",b:"le Parlement (Assemblée nationale et Sénat)",f:["le maire","le président seul","les préfets"],e:"Les députés et les sénateurs représentent les citoyens."},
 {t:"emc",q:"Qui dirige la commune ?",b:"le maire, avec le conseil municipal",f:["le président de la République","le directeur de l'école","le préfet seul"],e:"Les conseillers municipaux sont élus par les habitants, puis ils élisent le maire."},
 {t:"emc",q:"Le délégué de classe :",b:"représente les élèves et porte leurs idées",f:["punit les autres élèves","remplace l'enseignant","décide seul de tout"],e:"Il est élu par ses camarades."},
 {t:"emc",q:"Avant de publier la photo d'un camarade sur Internet, il faut :",b:"lui demander son accord",f:["la publier sans rien dire","la modifier pour rire","la partager à tout le monde"],e:"C'est le droit à l'image : chacun décide de l'usage de sa photo."},
 {t:"emc",q:"Une fausse information diffusée sur Internet s'appelle :",b:"une infox (fake news)",f:["un tutoriel","une encyclopédie","un mot de passe"],e:"On vérifie la source et on compare plusieurs sites avant de croire une information."},
 {t:"emc",q:"Quel numéro appelle-t-on pour joindre les pompiers ?",b:"18",f:["15","17","3018"],e:"15 : SAMU ; 17 : police ; 18 : pompiers ; 112 : numéro d'urgence européen."},
 {t:"emc",q:"Son mot de passe, on le confie :",b:"à personne, sauf à ses parents",f:["à tous ses amis","sur un réseau social","à un inconnu qui le demande"],e:"Un mot de passe protège ses données personnelles."},
 {t:"emc",q:"L'égalité entre les filles et les garçons signifie :",b:"qu'ils ont les mêmes droits",f:["que les garçons décident","que les filles décident","qu'ils doivent aimer les mêmes choses"],e:"C'est un principe de la République."},
 {t:"emc",q:"Lequel est un symbole de la République française ?",b:"le drapeau bleu, blanc, rouge",f:["la couronne","le sceptre","la fleur de lys"],e:"Les autres symboles : Marianne, la devise, La Marseillaise, le 14 juillet."}
];

function exoMatiere(mat,sem){
  if(mat==="m")return exoMaths(sem.tm);
  if(mat==="f")return exoFrancais(sem.tf);
  if(mat==="a")return exoAnglais(sem.ta);
  if(mat==="s")return parTag(BANQUE_S,sem.ts);
  return parTag(BANQUE_H,sem.th);
}
/* Tire n questions sans répéter un énoncé déjà vu */
function serie(gen,n,vus){
  const out=[];let essais=0;
  while(out.length<n&&essais<60){essais++;const q=gen();if(vus.has(q.enonce))continue;vus.add(q.enonce);out.push(q);}
  while(out.length<n)out.push(gen());
  return out;
}
function seanceHorsLigne(mat,semaine){
  const sem=SEMAINES[Math.min(Math.max(semaine|0,1),36)-1];
  const cm=exoMaths("calcmental"),vus=new Set([cm.enonce]); // rituel de calcul mental
  if(mat==="rev"){
    const q=[cm];
    for(const m of ["m","f","a","s","h","m","f"])q.push(...serie(()=>exoMatiere(m,sem),1,vus));
    return q;
  }
  return [cm,...serie(()=>exoMatiere(mat,sem),5,vus)];
}


export const programme = { code: "cm2", nom: "CM2", rituel: "On commence par une question de calcul mental.", SEMAINES, JOURS, NOM_MAT, PERIODES, matiereDuJour, seanceHorsLigne };
