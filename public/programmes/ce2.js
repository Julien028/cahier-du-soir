// Programme de CE2. FICHIER RECOPIÉ par « npm run programmes » depuis andre-ce2/public/index.html :
// ne pas le modifier ici, mais dans l'ancien cahier, puis relancer la recopie.

/* =========================================================
   1. LE PROGRAMME DE CE2 — 36 SEMAINES
   t = étiquettes : maths | français | anglais | questionner le monde
   ========================================================= */
const SEMAINES=[
{n:1,p:1,m:"Les nombres jusqu'à 1000 : lire, écrire, décomposer",f:"La phrase : majuscule, point, sens",a:"Dire bonjour et son prénom",q:"Vivant ou non vivant ?",t:"nombres|phrase|greetings|vivant"},
{n:2,p:1,m:"Comparer et ranger les nombres jusqu'à 1000",f:"Le nom et le déterminant",a:"Les couleurs",q:"Les besoins des animaux",t:"comparer|nom|couleurs|vivant"},
{n:3,p:1,m:"L'addition posée avec retenue",f:"Le verbe et son infinitif",a:"Les nombres de 1 à 12",q:"Ce que mangent les animaux",t:"addition|verbe|nombres|vivant"},
{n:4,p:1,m:"La soustraction posée",f:"Trouver le sujet du verbe",a:"La famille",q:"Les parties d'une plante",t:"soustraction|sujet|famille|plantes"},
{n:5,p:1,m:"Les tables de 2, 3, 4 et 5",f:"Le présent : être et avoir",a:"Les animaux",q:"Comment pousse une plante",t:"tables|present|animaux|plantes"},
{n:6,p:1,m:"Les nombres jusqu'à 10 000",f:"Le présent des verbes en -er",a:"Les jours de la semaine",q:"Bien manger, bien dormir",t:"nombres4|presenter|jours|sante"},
{n:7,p:1,m:"Mesurer des longueurs : m, cm, mm",f:"Bilan : a ou à, et ou est",a:"Bilan de la période 1",q:"Bilan : le vivant",t:"longueurs|homophones|greetings|vivant"},
{n:8,p:2,m:"La multiplication posée par un chiffre",f:"L'adjectif qualificatif",a:"Le temps qu'il fait",q:"L'eau : glace, liquide, vapeur",t:"multiplication|adjectif|meteo|matiere"},
{n:9,p:2,m:"Calcul mental : doubles et moitiés",f:"Le pluriel des noms",a:"Les vêtements",q:"Solide ou liquide ?",t:"doubles|pluriel|vetements|matiere"},
{n:10,p:2,m:"Les masses : g et kg",f:"Le féminin des noms et des adjectifs",a:"Les fruits",q:"L'air existe : on peut le sentir",t:"masses|feminin|fruits|matiere"},
{n:11,p:2,m:"Les polygones : carré, rectangle, triangle",f:"Le futur simple",a:"Christmas",q:"Les objets techniques de la maison",t:"polygones|futur|noel|objets"},
{n:12,p:2,m:"L'angle droit et l'équerre",f:"L'imparfait",a:"La maison",q:"Se repérer : le plan, la boussole",t:"angledroit|imparfait|maison|espace"},
{n:13,p:2,m:"Problèmes : addition et soustraction",f:"Le passé composé avec avoir",a:"Les nombres de 13 à 20",q:"Le calendrier et les mois",t:"problemes|passecompose|nombres|temps"},
{n:14,p:2,m:"Bilan : les quatre opérations",f:"Bilan de la période 2",a:"Bilan de la période 2",q:"Bilan : la matière",t:"calcmental|conjug|couleurs|matiere"},
{n:15,p:3,m:"Multiplier par 10 et par 100",f:"Les mots de la même famille",a:"Les parties du corps",q:"Les saisons",t:"mult10|famille|corps|temps"},
{n:16,p:3,m:"La multiplication par un nombre à deux chiffres",f:"Le passé composé avec être",a:"I like / I don't like",q:"La météo et le climat",t:"mult2|passecompose|gouts|matiere"},
{n:17,p:3,m:"La division : partager en parts égales",f:"Les synonymes",a:"À l'école",q:"Les matériaux : bois, métal, plastique",t:"division|synonymes|ecole|objets"},
{n:18,p:3,m:"Les contenances : L et cL",f:"Les contraires",a:"Les repas",q:"La France sur la carte",t:"contenances|contraires|repas|espace"},
{n:19,p:3,m:"Les fractions simples : un demi, un quart",f:"L'accord du sujet et du verbe",a:"Les sports",q:"Le jour et la nuit",t:"fractions|accord|sports|espace"},
{n:20,p:3,m:"La monnaie : payer et rendre la monnaie",f:"Le dictionnaire et l'ordre alphabétique",a:"Les transports",q:"Se déplacer hier et aujourd'hui",t:"monnaie|alphabet|transports|temps"},
{n:21,p:3,m:"Bilan : multiplication et partages",f:"Bilan de la période 3",a:"Bilan de la période 3",q:"Bilan : espace et temps",t:"calcmental|conjug|animaux|espace"},
{n:22,p:4,m:"Lire l'heure sur une horloge",f:"Les homophones on et ont",a:"Les animaux de la ferme",q:"Les cultures et les élevages",t:"heure|homophones|ferme|vivant"},
{n:23,p:4,m:"Les durées : heures et minutes",f:"Les homophones son et sont",a:"La nourriture",q:"Qui mange qui : la chaîne alimentaire",t:"durees|homophones|nourriture|vivant"},
{n:24,p:4,m:"La symétrie : plier et retrouver la figure",f:"Les homophones ou et où",a:"Les jouets",q:"Les déchets et le tri",t:"symetrie|homophones|jouets|environnement"},
{n:25,p:4,m:"Le cercle et le compas",f:"Les mots invariables",a:"Les couleurs et les formes",q:"L'eau dans la nature",t:"cercle|invariables|couleurs|matiere"},
{n:26,p:4,m:"Problèmes en deux étapes",f:"La phrase négative",a:"Dire son âge",q:"La frise du temps : hier, aujourd'hui, demain",t:"problemes|negative|age|temps"},
{n:27,p:4,m:"Le périmètre du carré et du rectangle",f:"m devant m, b, p",a:"Bilan de la période 4",q:"De quoi une plante a-t-elle besoin ?",t:"perimetre|mbp|ecole|plantes"},
{n:28,p:4,m:"Bilan : mesures et géométrie",f:"Bilan de la période 4",a:"Le Royaume-Uni",q:"Bilan : objets et matériaux",t:"calcmental|conjug|culture|objets"},
{n:29,p:5,m:"Révision : les nombres jusqu'à 10 000",f:"Révision : nom, verbe, adjectif",a:"Révision du vocabulaire",q:"Révision : le vivant",t:"nombres4|nom|animaux|vivant"},
{n:30,p:5,m:"Révision : les quatre opérations",f:"Révision : le présent",a:"Se présenter",q:"Révision : la matière",t:"calcmental|present|greetings|matiere"},
{n:31,p:5,m:"Révision : longueurs, masses, contenances",f:"Révision : futur et imparfait",a:"Les animaux sauvages",q:"Révision : l'espace",t:"masses|conjug|animaux|espace"},
{n:32,p:5,m:"Révision : géométrie et symétrie",f:"Révision : les accords",a:"Comptines et chansons",q:"Révision : le temps",t:"polygones|accord|couleurs|temps"},
{n:33,p:5,m:"Révision : les problèmes",f:"Révision : orthographe",a:"Révision de la grammaire",q:"La sécurité sur la route",t:"problemes|homophones|ecole|securite"},
{n:34,p:5,m:"Bilan : calcul mental",f:"Bilan : vocabulaire",a:"Bilan de la période 5",q:"Bilan : questionner le monde",t:"calcmental|synonymes|nourriture|objets"},
{n:35,p:5,m:"Bilan général du CE2 (1)",f:"Bilan général du CE2 (1)",a:"Bilan général",q:"Bilan général",t:"tables|conjug|famille|vivant"},
{n:36,p:5,m:"Bilan général du CE2 (2) et défis",f:"Bilan général du CE2 (2)",a:"Jeux en anglais",q:"Défis : questionner le monde",t:"problemes|nom|animaux|espace"}
];
SEMAINES.forEach(s=>{const t=s.t.split("|");s.tm=t[0];s.tf=t[1];s.ta=t[2];s.tq=t[3];});

const JOURS=[
 {nom:"Lundi",mat:"m",min:10},
 {nom:"Mardi",mat:"f",min:10},
 {nom:"Mercredi",mat:"m",min:10},
 {nom:"Jeudi",mat:"f",min:10},
 {nom:"Vendredi",mat:"aq",min:10},
 {nom:"Week-end",mat:"rev",min:15}
];
const NOM_MAT={m:"Mathématiques",f:"Français",a:"Anglais",q:"Questionner le monde",rev:"Révision de la semaine"};
const PERIODES=["Période 1 — septembre à octobre","Période 2 — novembre à décembre","Période 3 — janvier à février","Période 4 — mars à avril","Période 5 — mai à juillet"];
/* Le vendredi alterne : questionner le monde les semaines impaires, anglais les semaines paires */
function matiereDuJour(sem,jour){const j=JOURS[jour];if(j.mat==="aq")return (sem%2===1)?"q":"a";return j.mat;}

/* =========================================================
   3. LA BANQUE D'EXERCICES (fonctionne sans connexion)
   ========================================================= */
const alea=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const pioche=t=>t[Math.floor(Math.random()*t.length)];
const vg=x=>String(x).replace(".",",");
function melange(t){const c=t.slice();for(let i=c.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[c[i],c[j]]=[c[j],c[i]];}return c;}
function qcm(enonce,bonne,fausses,expl){
  const vus=new Set([String(bonne)]),gardees=[];
  for(const x of fausses){const c=String(x);if(!vus.has(c)){vus.add(c);gardees.push(x);}}
  const choix=melange([bonne,...gardees]);
  return {type:"qcm",enonce,choix,reponse:choix.indexOf(bonne),explication:expl};
}
function saisie(enonce,reponses,expl){return {type:"saisie",enonce,reponse:reponses,explication:expl};}
function qcmChiffres(enonce,bonne,expl){
  const b=Number(bonne),f=[];
  while(f.length<3){const x=alea(0,9);if(x!==b&&!f.includes(x))f.push(x);}
  return qcm(enonce,String(b),f.map(String),expl);
}
function parTag(banque,tag){const f=banque.filter(x=>x.t===tag);const b=pioche(f.length?f:banque);return qcm(b.q,b.b,b.f,b.e);}

/* ---------- MATHÉMATIQUES ---------- */
const GM={
  nombres(){
    if(alea(0,1)){const n=alea(101,999);
      return qcmChiffres(`Dans le nombre ${n}, quel est le chiffre des dizaines ?`,Math.floor(n/10)%10,`Dans ${n} : ${Math.floor(n/100)} centaines, ${Math.floor(n/10)%10} dizaines et ${n%10} unités.`);}
    const c=alea(1,9),d=alea(0,9),u=alea(0,9);
    return saisie(`Écris en chiffres : ${c} centaines, ${d} dizaines et ${u} unités`,[String(c*100+d*10+u)],`${c} × 100 + ${d} × 10 + ${u} = ${c*100+d*10+u}.`);
  },
  comparer(){const a=alea(100,999),b=alea(100,999);if(a===b)return GM.comparer();
    return qcm(`Quel nombre est le plus grand ?`,String(Math.max(a,b)),[String(Math.min(a,b))],`On compare d'abord les centaines, puis les dizaines, puis les unités.`);},
  nombres4(){const n=alea(1001,9999);
    if(alea(0,1))return qcmChiffres(`Dans ${n}, quel est le chiffre des centaines ?`,Math.floor(n/100)%10,`${n} = ${Math.floor(n/1000)} milliers, ${Math.floor(n/100)%10} centaines, ${Math.floor(n/10)%10} dizaines, ${n%10} unités.`);
    return saisie(`Quel nombre vient juste après ${n} ?`,[String(n+1)],`Juste après ${n}, il y a ${n+1}.`);},
  addition(){const a=alea(125,899),b=alea(115,499);
    return saisie(`Calcule : ${a} + ${b}`,[String(a+b)],`${a} + ${b} = ${a+b}. Pose l'opération en alignant les unités.`);},
  soustraction(){const a=alea(400,980),b=alea(105,390);
    return saisie(`Calcule : ${a} − ${b}`,[String(a-b)],`${a} − ${b} = ${a-b}. Vérifie : ${a-b} + ${b} = ${a}.`);},
  tables(){const a=alea(2,9),b=alea(2,10);
    return saisie(`Calcule : ${a} × ${b}`,[String(a*b)],`${a} × ${b} = ${a*b}. Récite la table de ${a}.`);},
  multiplication(){const a=alea(23,98),b=alea(3,9);
    return saisie(`Calcule : ${a} × ${b}`,[String(a*b)],`${a} × ${b} = ${a*b}. Décompose : ${Math.floor(a/10)*10} × ${b} + ${a%10} × ${b}.`);},
  mult10(){const a=alea(12,99),m=pioche([10,100]);
    return saisie(`Calcule : ${a} × ${m}`,[String(a*m)],`Multiplier par ${m}, c'est ajouter ${String(m).length-1} zéro(s) : ${a*m}.`);},
  mult2(){const a=alea(12,45),b=alea(12,25);
    return saisie(`Calcule : ${a} × ${b}`,[String(a*b)],`${a} × ${b} = ${a*b}. Calcule ${a} × ${Math.floor(b/10)*10} puis ${a} × ${b%10}, et additionne.`);},
  doubles(){
    if(alea(0,1)){const n=alea(12,250);return saisie(`Quel est le double de ${n} ?`,[String(n*2)],`Le double de ${n}, c'est ${n} + ${n} = ${n*2}.`);}
    const n=alea(6,120)*2;return saisie(`Quelle est la moitié de ${n} ?`,[String(n/2)],`La moitié de ${n}, c'est ${n} ÷ 2 = ${n/2}.`);},
  division(){const b=alea(2,9),q=alea(3,12);
    return saisie(`On partage ${b*q} billes entre ${b} enfants, à parts égales. Combien chacun en a-t-il ?`,[String(q)],`${b*q} ÷ ${b} = ${q}, car ${b} × ${q} = ${b*q}.`);},
  fractions(){const n=alea(4,20)*4;
    if(alea(0,1))return saisie(`Quelle est la moitié de ${n} ?`,[String(n/2)],`La moitié, c'est partager en 2 : ${n} ÷ 2 = ${n/2}.`);
    return saisie(`Quel est le quart de ${n} ?`,[String(n/4)],`Le quart, c'est partager en 4 : ${n} ÷ 4 = ${n/4}.`);},
  longueurs(){
    if(alea(0,1)){const m=alea(2,9),cm=alea(10,99);return saisie(`Combien y a-t-il de centimètres dans ${m} m ${cm} cm ?`,[String(m*100+cm)],`1 m = 100 cm, donc ${m} m ${cm} cm = ${m*100+cm} cm.`);}
    const cm=alea(3,60);return saisie(`Combien y a-t-il de millimètres dans ${cm} cm ?`,[String(cm*10)],`1 cm = 10 mm, donc ${cm} cm = ${cm*10} mm.`);},
  masses(){
    if(alea(0,1)){const kg=alea(2,9),g=alea(100,900);return saisie(`Combien y a-t-il de grammes dans ${kg} kg ${g} g ?`,[String(kg*1000+g)],`1 kg = 1000 g, donc ${kg} kg ${g} g = ${kg*1000+g} g.`);}
    const kg=alea(2,15);return saisie(`Combien y a-t-il de grammes dans ${kg} kg ?`,[String(kg*1000)],`1 kg = 1000 g, donc ${kg} kg = ${kg*1000} g.`);},
  contenances(){const l=alea(2,12);
    return saisie(`Combien y a-t-il de centilitres dans ${l} litres ?`,[String(l*100)],`1 L = 100 cL, donc ${l} L = ${l*100} cL.`);},
  monnaie(){const p=alea(3,19),c=pioche([20,50]);
    return saisie(`J'achète un jouet à ${p} € et je paie avec un billet de ${c} €. Combien me rend-on ?`,[String(c-p),String(c-p)+" €"],`${c} − ${p} = ${c-p} €.`);},
  heure(){const h=alea(1,11),m=pioche([0,15,30,45]);
    const txt={0:"pile",15:"et quart",30:"et demie",45:"moins le quart"}[m];
    const rep=m===45?`${h+1}h${45}`:`${h}h${String(m).padStart(2,"0")}`;
    return saisie(`Il est ${h} heures ${txt}. Écris cette heure comme ${h}h00`,[rep,rep.replace("h"," h ")],`« ${txt} » correspond à ${rep}.`);},
  durees(){const d=alea(20,90),h=alea(9,16),m=pioche([0,10,15,30]);
    const fin=h+Math.floor((m+d)/60),reste=String((m+d)%60).padStart(2,"0");
    return saisie(`Le film commence à ${h}h${String(m).padStart(2,"0")} et dure ${d} minutes. À quelle heure finit-il ? (réponds comme 14h30)`,[`${fin}h${reste}`],`${m} + ${d} = ${m+d} min, soit ${Math.floor((m+d)/60)} h ${(m+d)%60} min à ajouter : ${fin}h${reste}.`);},
  perimetre(){
    if(alea(0,1)){const c=alea(3,20);return saisie(`Quel est le périmètre d'un carré de ${c} cm de côté ?`,[String(4*c)],`Périmètre = 4 × ${c} = ${4*c} cm.`);}
    const L=alea(5,20),l=alea(3,L);return saisie(`Quel est le périmètre d'un rectangle de ${L} cm sur ${l} cm ?`,[String(2*(L+l))],`Périmètre = ${L} + ${l} + ${L} + ${l} = ${2*(L+l)} cm.`);},
  problemes(){
    const t=alea(1,4);
    if(t===1){const n=alea(4,9),p=alea(6,15);return saisie(`Papa achète ${n} paquets de ${p} gâteaux. Combien de gâteaux en tout ?`,[String(n*p)],`${n} × ${p} = ${n*p} gâteaux.`);}
    if(t===2){const a=alea(120,450),b=alea(50,110);return saisie(`Dans la ferme il y a ${a} poules. Le fermier en vend ${b}. Combien lui en reste-t-il ?`,[String(a-b)],`${a} − ${b} = ${a-b} poules.`);}
    if(t===3){const b=alea(3,8),q=alea(4,12);return saisie(`On range ${b*q} œufs dans des boîtes de ${b}. Combien de boîtes remplit-on ?`,[String(q)],`${b*q} ÷ ${b} = ${q} boîtes.`);}
    const a=alea(3,9),p=alea(4,12),d=alea(2,9);
    return saisie(`André achète ${a} cahiers à ${p} € et un stylo à ${d} €. Combien paie-t-il en tout ?`,[String(a*p+d),String(a*p+d)+" €"],`${a} × ${p} = ${a*p}, puis ${a*p} + ${d} = ${a*p+d} €.`);},
  polygones(){const b=[
      {q:"Combien de côtés a un rectangle ?",b:"4",f:["3","5","6"],e:"Le rectangle a 4 côtés et 4 angles droits."},
      {q:"Combien de côtés a un triangle ?",b:"3",f:["4","5","2"],e:"Trois côtés et trois sommets."},
      {q:"Un carré est un rectangle qui a :",b:"tous ses côtés égaux",f:["deux côtés égaux","aucun angle droit","trois côtés"],e:"Le carré est un rectangle particulier."},
      {q:"Combien de sommets a un carré ?",b:"4",f:["3","2","6"],e:"Autant que de côtés : 4."},
      {q:"Un cube a combien de faces ?",b:"6",f:["4","8","12"],e:"6 faces carrées, 12 arêtes, 8 sommets."},
      {q:"Quelle figure n'a aucun côté droit ?",b:"le cercle",f:["le carré","le triangle","le rectangle"],e:"Le cercle est une ligne courbe fermée."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);},
  angledroit(){const b=[
      {q:"Avec quel instrument vérifie-t-on un angle droit ?",b:"l'équerre",f:["la règle","le compas","le double décimètre"],e:"On place le coin de l'équerre dans l'angle."},
      {q:"Combien d'angles droits a un rectangle ?",b:"4",f:["2","1","0"],e:"Les quatre coins sont des angles droits."},
      {q:"Deux droites qui forment un angle droit sont :",b:"perpendiculaires",f:["parallèles","obliques","courbes"],e:"On le vérifie avec l'équerre."},
      {q:"Combien d'angles droits a un triangle rectangle ?",b:"1",f:["2","3","0"],e:"Un seul, d'où son nom."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);},
  symetrie(){const b=[
      {q:"Combien d'axes de symétrie a un carré ?",b:"4",f:["2","1","0"],e:"Les deux médianes et les deux diagonales."},
      {q:"Un axe de symétrie, c'est la ligne où l'on peut :",b:"plier la figure en deux parties qui se superposent",f:["couper la figure en deux morceaux différents","mesurer la figure","tracer un cercle"],e:"Les deux moitiés se recouvrent exactement."},
      {q:"Combien d'axes de symétrie a un rectangle non carré ?",b:"2",f:["4","1","0"],e:"Seulement les deux médianes."},
      {q:"Un cercle a combien d'axes de symétrie ?",b:"une infinité",f:["1","2","4"],e:"Toute droite passant par le centre est un axe."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);},
  cercle(){const b=[
      {q:"Avec quel instrument trace-t-on un cercle ?",b:"le compas",f:["l'équerre","la règle","le rapporteur"],e:"On écarte le compas de la longueur du rayon."},
      {q:"Le point au milieu du cercle s'appelle :",b:"le centre",f:["le rayon","le sommet","le diamètre"],e:"Tous les points du cercle sont à la même distance du centre."},
      {q:"La distance du centre au cercle s'appelle :",b:"le rayon",f:["le diamètre","le périmètre","le côté"],e:"Le diamètre, lui, traverse tout le cercle."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);},
  calcmental(){
    const t=alea(1,4);
    if(t===1){const n=alea(11,89);return saisie(`Combien faut-il ajouter à ${n} pour arriver à 100 ?`,[String(100-n)],`${n} + ${100-n} = 100.`);}
    if(t===2){const a=alea(2,9),b=alea(2,10);return saisie(`Calcule : ${a} × ${b}`,[String(a*b)],`${a} × ${b} = ${a*b}.`);}
    if(t===3){const a=alea(25,90);return saisie(`Calcule : ${a} + 9`,[String(a+9)],`Ajoute 10 puis enlève 1 : ${a} + 10 = ${a+10}, moins 1 = ${a+9}.`);}
    const a=alea(30,95);return saisie(`Calcule : ${a} − 11`,[String(a-11)],`Enlève 10 puis encore 1 : ${a} − 10 = ${a-10}, moins 1 = ${a-11}.`);}
};
function exoMaths(tag){const f=GM[tag]||GM[pioche(Object.keys(GM))];return f();}

/* ---------- FRANÇAIS ---------- */
const VERBES=[
 {inf:"chanter",pres:["chante","chantes","chante","chantons","chantez","chantent"],imp:["chantais","chantais","chantait","chantions","chantiez","chantaient"],fut:["chanterai","chanteras","chantera","chanterons","chanterez","chanteront"],pp:"chanté",aux:"avoir"},
 {inf:"jouer",pres:["joue","joues","joue","jouons","jouez","jouent"],imp:["jouais","jouais","jouait","jouions","jouiez","jouaient"],fut:["jouerai","joueras","jouera","jouerons","jouerez","joueront"],pp:"joué",aux:"avoir"},
 {inf:"finir",pres:["finis","finis","finit","finissons","finissez","finissent"],imp:["finissais","finissais","finissait","finissions","finissiez","finissaient"],fut:["finirai","finiras","finira","finirons","finirez","finiront"],pp:"fini",aux:"avoir"},
 {inf:"aller",pres:["vais","vas","va","allons","allez","vont"],imp:["allais","allais","allait","allions","alliez","allaient"],fut:["irai","iras","ira","irons","irez","iront"],pp:"allé",aux:"être"},
 {inf:"faire",pres:["fais","fais","fait","faisons","faites","font"],imp:["faisais","faisais","faisait","faisions","faisiez","faisaient"],fut:["ferai","feras","fera","ferons","ferez","feront"],pp:"fait",aux:"avoir"},
 {inf:"être",pres:["suis","es","est","sommes","êtes","sont"],imp:["étais","étais","était","étions","étiez","étaient"],fut:["serai","seras","sera","serons","serez","seront"],pp:"été",aux:"avoir"},
 {inf:"avoir",pres:["ai","as","a","avons","avez","ont"],imp:["avais","avais","avait","avions","aviez","avaient"],fut:["aurai","auras","aura","aurons","aurez","auront"],pp:"eu",aux:"avoir"},
 {inf:"venir",pres:["viens","viens","vient","venons","venez","viennent"],imp:["venais","venais","venait","venions","veniez","venaient"],fut:["viendrai","viendras","viendra","viendrons","viendrez","viendront"],pp:"venu",aux:"être"}
];
const PRON=["je","tu","il","nous","vous","ils"];
const HOMO=[
 {ph:"Il ___ parti à l'école.",bon:"est",faux:["et"],expl:"« est » est le verbe être : on peut dire « était »."},
 {ph:"André ___ Simon jouent dehors.",bon:"et",faux:["est"],expl:"« et » relie deux mots : on peut dire « et puis »."},
 {ph:"André va ___ la piscine.",bon:"à",faux:["a"],expl:"« à » ne se remplace pas par « avait »."},
 {ph:"Il ___ pris son goûter.",bon:"a",faux:["à"],expl:"« a » est le verbe avoir : on peut dire « avait »."},
 {ph:"Les enfants ___ fini leur exercice.",bon:"ont",faux:["on"],expl:"« ont » est le verbe avoir : on peut dire « avaient »."},
 {ph:"___ mange à midi.",bon:"On",faux:["Ont"],expl:"« on » est un pronom : on peut dire « il »."},
 {ph:"Ces jouets ___ à moi.",bon:"sont",faux:["son"],expl:"« sont » est le verbe être : on peut dire « étaient »."},
 {ph:"Il a oublié ___ cartable.",bon:"son",faux:["sont"],expl:"« son » est un déterminant : on peut dire « mon »."},
 {ph:"___ vas-tu ce soir ?",bon:"Où",faux:["Ou"],expl:"« où » avec un accent indique le lieu."},
 {ph:"Tu veux du lait ___ du jus ?",bon:"ou",faux:["où"],expl:"« ou » sans accent propose un choix : on peut dire « ou bien »."}
];
const PHRASES_F=[
 {ph:"Le fermier trait les vaches.",sujet:"Le fermier",verbe:"trait"},
 {ph:"Les enfants jouent dans la cour.",sujet:"Les enfants",verbe:"jouent"},
 {ph:"Ma sœur prépare le goûter.",sujet:"Ma sœur",verbe:"prépare"},
 {ph:"Le tracteur laboure le champ.",sujet:"Le tracteur",verbe:"laboure"},
 {ph:"André range sa chambre.",sujet:"André",verbe:"range"}
];
const GF={
  phrase(){const b=[
      {q:"Par quoi commence toujours une phrase ?",b:"une majuscule",f:["une virgule","un tiret","un point"],e:"Et elle se termine par un point."},
      {q:"« le chat dort sur le lit » : que manque-t-il ?",b:"la majuscule et le point",f:["une virgule","un point d'interrogation","rien"],e:"Une phrase commence par une majuscule et finit par un point."},
      {q:"Quel signe termine une question ?",b:"le point d'interrogation",f:["le point","la virgule","les deux points"],e:"« Où vas-tu ? »"},
      {q:"Combien de phrases : « Il pleut. Je reste à la maison. » ?",b:"2",f:["1","3","4"],e:"Deux majuscules et deux points : deux phrases."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);},
  nom(){const b=[
      {q:"Dans « le tracteur rouge », quel est le nom ?",b:"tracteur",f:["le","rouge","aucun"],e:"Le nom désigne une chose ; « le » est le déterminant et « rouge » l'adjectif."},
      {q:"Dans « une belle maison », quel est le déterminant ?",b:"une",f:["belle","maison","aucun"],e:"Le déterminant se place devant le nom."},
      {q:"Quel mot est un nom propre ?",b:"André",f:["chien","maison","école"],e:"Un nom propre prend toujours une majuscule."},
      {q:"Dans « mes chaussures neuves », quel est l'adjectif ?",b:"neuves",f:["mes","chaussures","aucun"],e:"L'adjectif dit comment est le nom."},
      {q:"Quel mot est un nom commun ?",b:"vélo",f:["courir","joli","vite"],e:"Le nom commun désigne une chose ou un être, avec un déterminant."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);},
  verbe(){const v=pioche(VERBES);
    return qcm(`Quel est l'infinitif du verbe dans « il ${v.pres[2]} » ?`,v.inf,melange(VERBES.filter(x=>x.inf!==v.inf)).slice(0,3).map(x=>x.inf),`« il ${v.pres[2]} » vient du verbe ${v.inf}.`);},
  sujet(){const p=pioche(PHRASES_F);
    return saisie(`Quel est le sujet dans : « ${p.ph} » ?`,[p.sujet],`On demande « qui est-ce qui ${p.verbe} ? » → ${p.sujet}.`);},
  conjug(temps){return function(){
      const v=pioche(VERBES),i=alea(0,5),tp=temps||pioche(["pres","imp","fut","pc"]);
      const nom={pres:"présent",imp:"imparfait",fut:"futur",pc:"passé composé"}[tp];
      if(tp==="pc"){
        const aux=v.aux==="être"?["suis","es","est","sommes","êtes","sont"][i]:["ai","as","a","avons","avez","ont"][i];
        const pp=v.aux==="être"?(i>=3?v.pp+"s":v.pp):v.pp;
        return saisie(`Conjugue « ${v.inf} » au passé composé : ${PRON[i]} ...`,[aux+" "+pp,PRON[i]+" "+aux+" "+pp],`${PRON[i]} ${aux} ${pp}. L'auxiliaire est ${v.aux}.`);}
      return saisie(`Conjugue « ${v.inf} » au ${nom} : ${PRON[i]} ...`,[v[tp][i],PRON[i]+" "+v[tp][i]],`${PRON[i]} ${v[tp][i]}.`);};},
  presenter(){const v=pioche(VERBES.filter(x=>x.inf.endsWith("er")));const i=alea(0,5);
    return saisie(`Conjugue « ${v.inf} » au présent : ${PRON[i]} ...`,[v.pres[i],PRON[i]+" "+v.pres[i]],`${PRON[i]} ${v.pres[i]}. Terminaisons : -e, -es, -e, -ons, -ez, -ent.`);},
  homophones(){const h=pioche(HOMO);return qcm(`Complète : ${h.ph}`,h.bon,h.faux,h.expl);},
  adjectif(){const b=[
      {q:"Dans « un grand chien noir », combien y a-t-il d'adjectifs ?",b:"2",f:["1","3","0"],e:"« grand » et « noir » disent comment est le chien."},
      {q:"Complète : « une jolie ___ »",b:"fleur",f:["fleurs","jardin","arbres"],e:"« jolie » est au féminin singulier : le nom aussi."},
      {q:"L'adjectif sert à :",b:"décrire le nom",f:["remplacer le nom","conjuguer le verbe","poser une question"],e:"Il s'accorde en genre et en nombre avec le nom."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);},
  pluriel(){const mots=[["un cheval","des chevaux","Les mots en -al font -aux au pluriel."],["un journal","des journaux","Les mots en -al font -aux."],["un bateau","des bateaux","Les mots en -eau prennent un x."],["un genou","des genoux","Bijou, caillou, chou, genou, hibou, joujou, pou prennent un x."],["un nez","des nez","Les mots en -z ne changent pas."],["une souris","des souris","Les mots en -s ne changent pas."],["un tapis","des tapis","Les mots en -s ne changent pas."],["un gâteau","des gâteaux","Les mots en -eau prennent un x."]];
    const m=pioche(mots);return saisie(`Écris au pluriel : « ${m[0]} »`,[m[1]],m[2]);},
  feminin(){const mots=[["un boulanger","une boulangère","-er devient -ère."],["un chien","une chienne","On double le n."],["un lion","une lionne","On double le n."],["heureux","heureuse","-eux devient -euse."],["un acteur","une actrice","-teur devient -trice."],["grand","grande","On ajoute un e."],["un maître","une maîtresse","-tre devient -tresse."]];
    const m=pioche(mots);return saisie(`Écris au féminin : « ${m[0]} »`,[m[1]],m[2]);},
  accord(){const b=[
      {q:"Complète : « Les enfants ___ dans la cour. »",b:"jouent",f:["joue","joues","jouez"],e:"Sujet pluriel, 3e personne : terminaison -ent."},
      {q:"Complète : « Le chien ___ dans le jardin. »",b:"court",f:["courent","cours","courez"],e:"Sujet singulier : pas de -ent."},
      {q:"Complète : « Nous ___ à l'école. »",b:"allons",f:["allez","vont","va"],e:"Avec nous, la terminaison est -ons."},
      {q:"Complète : « Vous ___ du pain. »",b:"mangez",f:["mangeons","mangent","mange"],e:"Avec vous, la terminaison est -ez."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);},
  famille(){const b=[
      {q:"Quel mot est de la même famille que « terre » ?",b:"terrain",f:["ternir","terminer","terrible"],e:"Terre, terrain, terrestre, enterrer : même radical."},
      {q:"Quel mot est de la même famille que « dent » ?",b:"dentiste",f:["dedans","dedan","danser"],e:"Dent, dentiste, dentifrice."},
      {q:"Quel mot est de la même famille que « lait » ?",b:"laitier",f:["laid","lit","laisse"],e:"Lait, laitier, laiterie, laitage."},
      {q:"Quel mot est de la même famille que « chant » ?",b:"chanteur",f:["champ","chance","chantier"],e:"Chant, chanteur, chanson, chantonner."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);},
  synonymes(){const b=[
      {q:"Quel mot veut dire la même chose que « joyeux » ?",b:"content",f:["triste","fatigué","méchant"],e:"Deux mots de sens proche sont des synonymes."},
      {q:"Quel mot veut dire la même chose que « rapide » ?",b:"vif",f:["lent","lourd","calme"],e:"Rapide et vif sont synonymes."},
      {q:"Quel mot veut dire la même chose que « maison » ?",b:"habitation",f:["voiture","jardin","route"],e:"Maison, habitation, demeure, logis."},
      {q:"Quel mot veut dire la même chose que « peur » ?",b:"crainte",f:["joie","colère","courage"],e:"Peur, crainte, frayeur."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);},
  contraires(){const mots=[["grand","petit"],["chaud","froid"],["jour","nuit"],["monter","descendre"],["propre","sale"],["ouvert","fermé"],["rapide","lent"],["content","triste"]];
    const m=pioche(mots);return saisie(`Quel est le contraire de « ${m[0]} » ?`,[m[1]],`Le contraire de ${m[0]}, c'est ${m[1]}.`);},
  alphabet(){const l=melange(["banane","cerise","abricot","datte","fraise","kiwi","mangue","orange","poire","raisin"]).slice(0,3).sort();
    return saisie(`Range ces mots dans l'ordre alphabétique, séparés par une virgule : ${melange(l).join(", ")}`,[l.join(", "),l.join(",")],`Dans l'ordre du dictionnaire : ${l.join(", ")}.`);},
  invariables(){const b=[
      {q:"Un mot invariable est un mot qui :",b:"ne change jamais d'orthographe",f:["prend un s au pluriel","se conjugue","change au féminin"],e:"Toujours, jamais, beaucoup, parfois : ils ne changent pas."},
      {q:"Quel mot est invariable ?",b:"toujours",f:["cheval","joli","chanter"],e:"Il s'écrit toujours pareil, avec un s."},
      {q:"Comment s'écrit le contraire de « jamais » ?",b:"toujours",f:["toujour","toujourt","tousjours"],e:"« toujours » se termine par un s."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);},
  negative(){const b=[
      {q:"Mets à la forme négative : « Je mange du pain. »",b:"Je ne mange pas de pain.",f:["Je mange pas du pain.","Je ne mange du pain.","Je mange non du pain."],e:"La négation encadre le verbe : ne … pas."},
      {q:"Quels sont les deux mots de la négation dans « Il ne dort pas » ?",b:"ne et pas",f:["il et ne","dort et pas","ne et dort"],e:"Ils encadrent le verbe."},
      {q:"Mets à la forme négative : « Elle joue dehors. »",b:"Elle ne joue pas dehors.",f:["Elle joue pas dehors.","Elle ne joue dehors.","Elle non joue dehors."],e:"À l'écrit, on n'oublie jamais le « ne »."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);},
  mbp(){const mots=[["ta_bour","tambour"],["po_pe","pompe"],["ja_be","jambe"],["cha_bre","chambre"],["e_porter","emporter"],["gri_per","grimper"]];
    const m=pioche(mots);return saisie(`Complète avec n ou m, puis écris le mot entier : ${m[0]}`,[m[1]],`Devant m, b et p, on écrit m : ${m[1]}.`);}
};
function exoFrancais(tag){
  const map={phrase:GF.phrase,nom:GF.nom,verbe:GF.verbe,sujet:GF.sujet,homophones:GF.homophones,adjectif:GF.adjectif,
    pluriel:GF.pluriel,feminin:GF.feminin,accord:GF.accord,famille:GF.famille,synonymes:GF.synonymes,
    contraires:GF.contraires,alphabet:GF.alphabet,invariables:GF.invariables,negative:GF.negative,mbp:GF.mbp,
    present:GF.conjug("pres"),presenter:GF.presenter,imparfait:GF.conjug("imp"),futur:GF.conjug("fut"),
    passecompose:GF.conjug("pc"),conjug:GF.conjug(null)};
  const f=map[tag]||pioche(Object.values(map));return f();
}

/* ---------- ANGLAIS (initiation) ---------- */
const VOC_EN=[
 {t:"couleurs",en:"red",fr:"rouge"},{t:"couleurs",en:"blue",fr:"bleu"},{t:"couleurs",en:"green",fr:"vert"},{t:"couleurs",en:"yellow",fr:"jaune"},{t:"couleurs",en:"black",fr:"noir"},
 {t:"animaux",en:"a dog",fr:"un chien"},{t:"animaux",en:"a cat",fr:"un chat"},{t:"animaux",en:"a bird",fr:"un oiseau"},{t:"animaux",en:"a horse",fr:"un cheval"},{t:"animaux",en:"a rabbit",fr:"un lapin"},
 {t:"ferme",en:"a cow",fr:"une vache"},{t:"ferme",en:"a sheep",fr:"un mouton"},{t:"ferme",en:"a pig",fr:"un cochon"},{t:"ferme",en:"a hen",fr:"une poule"},{t:"ferme",en:"a tractor",fr:"un tracteur"},
 {t:"famille",en:"a mother",fr:"une mère"},{t:"famille",en:"a father",fr:"un père"},{t:"famille",en:"a brother",fr:"un frère"},{t:"famille",en:"a sister",fr:"une sœur"},
 {t:"jours",en:"Monday",fr:"lundi"},{t:"jours",en:"Sunday",fr:"dimanche"},{t:"jours",en:"Wednesday",fr:"mercredi"},
 {t:"meteo",en:"it is sunny",fr:"il y a du soleil"},{t:"meteo",en:"it is raining",fr:"il pleut"},{t:"meteo",en:"it is cold",fr:"il fait froid"},
 {t:"vetements",en:"a hat",fr:"un chapeau"},{t:"vetements",en:"shoes",fr:"des chaussures"},{t:"vetements",en:"a coat",fr:"un manteau"},
 {t:"fruits",en:"an apple",fr:"une pomme"},{t:"fruits",en:"a banana",fr:"une banane"},{t:"fruits",en:"a strawberry",fr:"une fraise"},
 {t:"corps",en:"a hand",fr:"une main"},{t:"corps",en:"a head",fr:"une tête"},{t:"corps",en:"a foot",fr:"un pied"},
 {t:"ecole",en:"a pen",fr:"un stylo"},{t:"ecole",en:"a book",fr:"un livre"},{t:"ecole",en:"a school bag",fr:"un cartable"},
 {t:"maison",en:"a bedroom",fr:"une chambre"},{t:"maison",en:"the kitchen",fr:"la cuisine"},{t:"maison",en:"a garden",fr:"un jardin"},
 {t:"nourriture",en:"bread",fr:"du pain"},{t:"nourriture",en:"milk",fr:"du lait"},{t:"nourriture",en:"cheese",fr:"du fromage"},
 {t:"repas",en:"breakfast",fr:"le petit-déjeuner"},{t:"repas",en:"lunch",fr:"le déjeuner"},
 {t:"sports",en:"football",fr:"le football"},{t:"sports",en:"swimming",fr:"la natation"},
 {t:"transports",en:"a car",fr:"une voiture"},{t:"transports",en:"a bike",fr:"un vélo"},{t:"transports",en:"a plane",fr:"un avion"},
 {t:"jouets",en:"a ball",fr:"un ballon"},{t:"jouets",en:"a doll",fr:"une poupée"},
 {t:"noel",en:"a Christmas tree",fr:"un sapin de Noël"},{t:"noel",en:"a gift",fr:"un cadeau"}
];
const GRAM_EN=[
 {t:"greetings",q:"Comment dit-on « bonjour » en anglais ?",b:"hello",f:["goodbye","please","thank you"],e:"Hello, ou hi entre copains."},
 {t:"greetings",q:"Que répond-on à « How are you ? »",b:"I'm fine, thank you",f:["My name is Tom","I am seven","Goodbye"],e:"On répond comment on va."},
 {t:"greetings",q:"Comment dit-on « je m'appelle André » ?",b:"My name is André",f:["I am name André","Me André","I called André"],e:"My name is… ou I'm André."},
 {t:"nombres",q:"Comment dit-on « sept » en anglais ?",b:"seven",f:["six","eight","nine"],e:"six, seven, eight, nine, ten."},
 {t:"nombres",q:"Comment dit-on « douze » en anglais ?",b:"twelve",f:["twenty","two","ten"],e:"eleven, twelve, thirteen."},
 {t:"nombres",q:"Que veut dire « fifteen » ?",b:"quinze",f:["cinquante","cinq","quatorze"],e:"fifteen = 15 ; fifty = 50."},
 {t:"age",q:"Comment dit-on « j'ai huit ans » ?",b:"I am eight",f:["I have eight","I am eight years","I have eight years"],e:"En anglais on dit « je suis huit »."},
 {t:"gouts",q:"Comment dit-on « j'aime les pommes » ?",b:"I like apples",f:["I am apples","I love to apples","I like apple's"],e:"I like + le nom au pluriel."},
 {t:"gouts",q:"Que veut dire « I don't like fish » ?",b:"je n'aime pas le poisson",f:["j'aime le poisson","je mange du poisson","je veux du poisson"],e:"don't = négation."},
 {t:"couleurs",q:"De quelle couleur est « the sky » par beau temps ?",b:"blue",f:["green","brown","black"],e:"the sky = le ciel."},
 {t:"culture",q:"Quelle est la capitale du Royaume-Uni ?",b:"London",f:["Paris","New York","Dublin"],e:"London, sur la Tamise."},
 {t:"culture",q:"Quel animal représente souvent le Royaume-Uni ?",b:"le lion",f:["le coq","l'aigle","l'ours"],e:"Le coq représente la France."},
 {t:"ecole",q:"Que veut dire « Sit down, please » ?",b:"assieds-toi, s'il te plaît",f:["lève-toi","écoute","sors"],e:"Sit down : s'asseoir ; stand up : se lever."},
 {t:"meteo",q:"Que veut dire « It is windy » ?",b:"il y a du vent",f:["il neige","il fait chaud","il pleut"],e:"windy = venteux."}
];
function exoAnglais(tag){
  if(alea(1,3)<=2){
    const f=VOC_EN.filter(x=>x.t===tag);const m=pioche(f.length?f:VOC_EN);
    if(alea(0,1))return qcm(`Que veut dire « ${m.en} » ?`,m.fr,melange(VOC_EN.filter(x=>x.fr!==m.fr)).slice(0,3).map(x=>x.fr),`« ${m.en} » veut dire « ${m.fr} ».`);
    return qcm(`Comment dit-on « ${m.fr} » en anglais ?`,m.en,melange(VOC_EN.filter(x=>x.en!==m.en)).slice(0,3).map(x=>x.en),`« ${m.fr} » se dit « ${m.en} ».`);
  }
  const f=GRAM_EN.filter(x=>x.t===tag);const x=pioche(f.length?f:GRAM_EN);
  return qcm(x.q,x.b,x.f,x.e);
}

/* ---------- QUESTIONNER LE MONDE ---------- */
const BANQUE_Q=[
 {t:"vivant",q:"Qu'est-ce qui n'est pas vivant ?",b:"un caillou",f:["un arbre","un escargot","une fleur"],e:"Un être vivant naît, se nourrit, grandit, se reproduit et meurt."},
 {t:"vivant",q:"De quoi tous les animaux ont-ils besoin ?",b:"d'eau, de nourriture et d'air",f:["de jouets","de lumière seulement","de sable"],e:"Ce sont leurs besoins vitaux."},
 {t:"vivant",q:"Un animal qui ne mange que de l'herbe est :",b:"herbivore",f:["carnivore","omnivore","insectivore"],e:"La vache et le mouton sont herbivores."},
 {t:"vivant",q:"Que mange un renard ?",b:"des petits animaux",f:["seulement de l'herbe","des cailloux","de l'eau seulement"],e:"C'est un carnivore."},
 {t:"vivant",q:"Qui mange qui : herbe → lapin → renard. Que mange le renard ?",b:"le lapin",f:["l'herbe","le blé","rien"],e:"La flèche va du mangé vers le mangeur."},
 {t:"vivant",q:"Quel animal de la ferme donne du lait ?",b:"la vache",f:["la poule","le mouton mâle","le canard"],e:"On fabrique ensuite du beurre et du fromage."},
 {t:"plantes",q:"Quelle partie de la plante puise l'eau dans le sol ?",b:"les racines",f:["les feuilles","la fleur","le fruit"],e:"Racines, tige, feuilles, fleur, fruit."},
 {t:"plantes",q:"De quoi une plante a-t-elle besoin pour pousser ?",b:"d'eau, de lumière et de terre",f:["d'obscurité","de sel","de vent seulement"],e:"Sans lumière, elle jaunit et meurt."},
 {t:"plantes",q:"Que devient la fleur après la floraison ?",b:"un fruit avec des graines",f:["une racine","une feuille","une tige"],e:"La graine donnera une nouvelle plante."},
 {t:"plantes",q:"Que trouve-t-on à l'intérieur d'un fruit ?",b:"des graines ou des pépins",f:["des racines","des feuilles","de la terre"],e:"Ils permettent à la plante de se reproduire."},
 {t:"sante",q:"Combien de repas par jour recommande-t-on aux enfants ?",b:"quatre",f:["un","deux","six"],e:"Petit-déjeuner, déjeuner, goûter et dîner."},
 {t:"sante",q:"Que faut-il faire après avoir mangé ?",b:"se brosser les dents",f:["courir vite","dormir aussitôt","boire du soda"],e:"Deux fois par jour au minimum."},
 {t:"sante",q:"Quelle boisson est la meilleure pour la santé ?",b:"l'eau",f:["le soda","le sirop","le jus sucré"],e:"C'est la seule boisson indispensable."},
 {t:"matiere",q:"Quand l'eau gèle, elle devient :",b:"solide",f:["liquide","gazeuse","invisible"],e:"L'eau gèle à 0 °C et devient de la glace."},
 {t:"matiere",q:"Quand l'eau bout, elle se transforme en :",b:"vapeur",f:["glace","neige","sable"],e:"L'eau bout à 100 °C."},
 {t:"matiere",q:"Lequel est un liquide ?",b:"le lait",f:["le bois","le sable","la pierre"],e:"Un liquide prend la forme de son récipient."},
 {t:"matiere",q:"L'air, c'est :",b:"de la matière invisible",f:["du vide","de l'eau","du gaz coloré"],e:"On le sent quand le vent souffle ou quand on gonfle un ballon."},
 {t:"matiere",q:"Où trouve-t-on de l'eau dans la nature ?",b:"dans les rivières, la pluie et les nuages",f:["seulement au robinet","seulement en bouteille","nulle part"],e:"L'eau circule sans arrêt : c'est le cycle de l'eau."},
 {t:"objets",q:"Avec quel matériau fabrique-t-on une fenêtre transparente ?",b:"le verre",f:["le bois","le fer","le tissu"],e:"Le verre est transparent et se casse facilement."},
 {t:"objets",q:"Quel matériau vient des arbres ?",b:"le bois",f:["le plastique","le fer","le verre"],e:"On l'utilise pour les meubles et les charpentes."},
 {t:"objets",q:"À quoi sert une balance ?",b:"à mesurer une masse",f:["à mesurer une longueur","à mesurer le temps","à voir de loin"],e:"On l'utilise en grammes et en kilogrammes."},
 {t:"objets",q:"Quel objet sert à mesurer le temps ?",b:"l'horloge",f:["la règle","la balance","le thermomètre"],e:"Le thermomètre mesure la température."},
 {t:"espace",q:"Sur une carte, où se trouve le nord ?",b:"en haut",f:["en bas","à droite","à gauche"],e:"L'aiguille de la boussole indique toujours le nord."},
 {t:"espace",q:"À quoi sert une boussole ?",b:"à trouver la direction du nord",f:["à mesurer la pluie","à peser","à lire l'heure"],e:"Elle aide à se repérer dans l'espace."},
 {t:"espace",q:"Quel est le pays où tu habites ?",b:"la France",f:["l'Espagne","l'Italie","le Canada"],e:"La France se situe en Europe."},
 {t:"espace",q:"Pourquoi fait-il jour puis nuit ?",b:"parce que la Terre tourne sur elle-même",f:["parce que le Soleil s'éteint","parce que la Lune se cache","parce qu'il fait froid"],e:"Un tour complet dure 24 heures."},
 {t:"temps",q:"Combien y a-t-il de mois dans une année ?",b:"12",f:["10","7","365"],e:"Janvier, février… décembre."},
 {t:"temps",q:"Quelle saison vient après l'hiver ?",b:"le printemps",f:["l'été","l'automne","rien"],e:"Printemps, été, automne, hiver."},
 {t:"temps",q:"Combien y a-t-il de jours dans une semaine ?",b:"7",f:["5","12","30"],e:"Du lundi au dimanche."},
 {t:"temps",q:"Comment se déplaçait-on avant l'invention de la voiture ?",b:"à pied, à cheval ou en calèche",f:["en avion","en train à grande vitesse","en métro"],e:"Les moyens de transport ont beaucoup changé."},
 {t:"environnement",q:"Où jette-t-on une bouteille en plastique ?",b:"dans le bac de tri",f:["dans la nature","dans l'évier","dans le jardin"],e:"Le tri permet de recycler et de fabriquer de nouveaux objets."},
 {t:"environnement",q:"Que devient un déchet recyclé ?",b:"un nouvel objet",f:["de la terre","de l'eau","rien du tout"],e:"Le verre, le papier et le plastique se recyclent."},
 {t:"environnement",q:"Quel geste économise l'eau ?",b:"fermer le robinet en se brossant les dents",f:["laisser couler l'eau","prendre des bains très longs","arroser à midi"],e:"L'eau potable est une ressource précieuse."},
 {t:"securite",q:"Où traverse-t-on la route ?",b:"sur le passage piéton",f:["n'importe où","entre deux voitures","en courant"],e:"On regarde à gauche, à droite, puis encore à gauche."},
 {t:"securite",q:"À vélo, que faut-il porter ?",b:"un casque",f:["des lunettes de soleil","un chapeau","rien"],e:"Le casque protège la tête en cas de chute."},
 {t:"securite",q:"Que signifie un feu rouge pour les voitures ?",b:"il faut s'arrêter",f:["il faut avancer","il faut klaxonner","il faut tourner"],e:"Vert : on avance ; orange : on ralentit ; rouge : on s'arrête."}
];

function exoMatiere(mat,sem){
  if(mat==="m")return exoMaths(sem.tm);
  if(mat==="f")return exoFrancais(sem.tf);
  if(mat==="a")return exoAnglais(sem.ta);
  return parTag(BANQUE_Q,sem.tq);
}
function seanceHorsLigne(mat,semaine){
  const sem=SEMAINES[semaine-1];
  if(mat==="rev")return [exoMaths("calcmental"),exoMatiere("m",sem),exoMatiere("f",sem),exoMatiere("m",sem),
                         exoMatiere("f",sem),exoMatiere("a",sem),exoMatiere("q",sem)];
  const q=[exoMaths("calcmental")]; // rituel de calcul mental
  for(let i=0;i<4;i++)q.push(exoMatiere(mat,sem));
  return q;
}


export const programme = { code: "ce2", nom: "CE2", rituel: "On commence par une question de calcul mental.", SEMAINES, JOURS, NOM_MAT, PERIODES, matiereDuJour, seanceHorsLigne };
