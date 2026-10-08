// Programme de 6e. FICHIER RECOPIÉ par « npm run programmes » depuis simon-6eme/public/index.html :
// ne pas le modifier ici, mais dans l'ancien cahier, puis relancer la recopie.

/* =========================================================
   1. LE PROGRAMME DE SIXIÈME — 36 SEMAINES
   t = étiquettes de sélection des exercices :
       maths | français | anglais | sciences | histoire-géo
   ========================================================= */
const SEMAINES = [
{n:1,p:1,m:"Nombres entiers : lire, écrire, décomposer, comparer jusqu'au milliard",f:"Les classes de mots : nom, déterminant, adjectif, verbe",a:"Se présenter : name, age, country — le verbe to be",s:"Les états de la matière : solide, liquide, gaz",h:"Se repérer dans le temps : siècle, millénaire, avant et après J.-C.",t:"entiers|classes|tobe|matiere|reperes"},
{n:2,p:1,m:"Addition et soustraction : technique posée, calcul mental, ordre de grandeur",f:"La phrase : ponctuation, types et formes de phrases",a:"To have got — la famille",s:"Mélanges et solutions : miscible, soluble, décantation",h:"Les débuts de l'humanité : Paléolithique, premiers outils",t:"addsub|phrase|havegot|matiere|prehistoire"},
{n:3,p:1,m:"Nombres décimaux : lire, écrire, placer sur une demi-droite graduée",f:"Le verbe : infinitif, groupes, radical et terminaison",a:"Articles a/an/the et pluriels — le collège",s:"Les besoins des êtres vivants",h:"La révolution néolithique : agriculture et sédentarisation",t:"decimaux|verbe|articles|vivant|prehistoire"},
{n:4,p:1,m:"Comparer, ranger, encadrer et arrondir des décimaux",f:"Sujet et verbe : trouver le sujet, accorder",a:"Present simple affirmatif — la routine quotidienne",s:"Classer le vivant : les grands groupes",h:"Habiter une métropole : qu'est-ce qu'une métropole ?",t:"decimaux|fonctions|presentsimple|vivant|metropole"},
{n:5,p:1,m:"Multiplication posée, multiplier par 10, 100, 1000",f:"Le présent de l'indicatif : 1er et 2e groupes",a:"Present simple : questions et négation avec do/does",s:"Les régimes alimentaires des animaux",h:"Métropoles des pays riches, métropoles des pays pauvres",t:"mult|present|presentsimple|vivant|metropole"},
{n:6,p:1,m:"Points, droites, segments, milieu — tracés à la règle et à l'équerre",f:"Le présent : être, avoir, aller, faire et 3e groupe",a:"L'heure et l'emploi du temps",s:"La Terre dans le système solaire",h:"EMC : à quoi servent les règles ? Le règlement intérieur",t:"geom|present|vocab|terre|emc"},
{n:7,p:1,m:"Périmètre et longueurs : conversions km, m, cm, mm",f:"Bilan : homophones a/à, et/est — dictée",a:"Bilan : to be, have got, present simple",s:"Rotation et révolution : jour, nuit, saisons",h:"Bilan de la période 1",t:"perimetre|homophones|tobe|terre|reperes"},
{n:8,p:2,m:"Division euclidienne : quotient et reste, sens de la division",f:"Les compléments du verbe : COD et COI",a:"There is / there are — la maison",s:"Les planètes du système solaire",h:"Premiers États, premières écritures : Mésopotamie et Égypte",t:"division|fonctions|thereis|terre|premiersetats"},
{n:9,p:2,m:"Additionner et soustraire des nombres décimaux",f:"Déterminants et pronoms personnels",a:"Les prépositions de lieu",s:"Masse et volume : mesurer, unités",h:"Habiter un espace de faible densité : montagne, désert",t:"adddec|classes|prepositions|mesures|faibledensite"},
{n:10,p:2,m:"Multiplier un décimal, multiplier par 0,1 et 0,01",f:"L'imparfait de l'indicatif",a:"Can / can't — savoir faire",s:"Les matériaux et leurs propriétés",h:"L'invention de l'écriture et les premières cités",t:"multdec|imparfait|can|technique|premiersetats"},
{n:11,p:2,m:"Le cercle : rayon, diamètre, compas, programme de construction",f:"Le passé simple (3e personne) dans le récit",a:"Pluriels irréguliers — décrire quelqu'un",s:"Objets techniques : besoin, fonction d'usage",h:"Habiter un espace agricole de faible densité",t:"geom|passesimple|plural|technique|faibledensite"},
{n:12,p:2,m:"Les angles : reconnaître, comparer, mesurer au rapporteur",f:"Imparfait et passé simple : les valeurs dans le récit",a:"Adjectifs, couleurs, description physique",s:"Circuits électriques simples",h:"EMC : l'intérêt général et la vie du collège",t:"geom|imparfait|adjectifs|energie|emc"},
{n:13,p:2,m:"La symétrie axiale : axes, figures symétriques, tracés",f:"Vocabulaire : familles de mots, préfixes et suffixes",a:"Christmas et culture britannique",s:"L'énergie : formes, sources, conversions",h:"Le monde des cités grecques",t:"geom|vocab|vocab|energie|grece"},
{n:14,p:2,m:"Bilan : problèmes à plusieurs étapes",f:"Bilan : dictée et conjugaison",a:"Bilan de la période 2",s:"Bilan sciences et technologie",h:"Bilan histoire-géographie",t:"calcmental|conjug|grammar|matiere|grece"},
{n:15,p:3,m:"Division décimale, quotient approché",f:"Les accords dans le groupe nominal",a:"Past simple de to be : was / were",s:"Mouvements : trajectoire et vitesse",h:"Récits fondateurs : l'Iliade et l'Odyssée",t:"division|accords|past|mouvement|grece"},
{n:16,p:3,m:"Les fractions : partager, lire, représenter",f:"Le futur simple",a:"Past simple des verbes réguliers",s:"Les séismes : origine et effets",h:"Rome, du mythe à l'histoire",t:"fractions|futur|past|terre|rome"},
{n:17,p:3,m:"Fractions décimales et écriture décimale",f:"Attribut du sujet et verbes d'état",a:"Past simple : verbes irréguliers",s:"Les volcans : éruptions et paysages",h:"Habiter un littoral touristique",t:"fractions|fonctions|past|terre|littoral"},
{n:18,p:3,m:"Comparer et additionner des fractions simples",f:"Le passé composé et l'accord avec être",a:"Past simple : questions et négation",s:"Risques naturels et prévention",h:"Habiter un littoral industrialo-portuaire",t:"fractions|passecompose|past|terre|littoral"},
{n:19,p:3,m:"La proportionnalité : reconnaître, tableau, coefficient",f:"Les images : comparaison et métaphore",a:"La nourriture, some et any",s:"La reproduction des êtres vivants",h:"La naissance du monothéisme juif",t:"proportionnalite|litt|vocab|vivant|judaisme"},
{n:20,p:3,m:"Les aires : carré, rectangle, unités cm², m², ha",f:"La poésie : vers, strophes, rimes",a:"Le corps et la santé",s:"Les besoins des plantes vertes",h:"EMC : la laïcité à l'École",t:"aire|litt|vocab|vivant|emc"},
{n:21,p:3,m:"Bilan : fractions, aires, proportionnalité",f:"Bilan de la période 3",a:"Bilan de la période 3",s:"Bilan sciences et technologie",h:"Bilan histoire-géographie",t:"calcmental|conjug|grammar|vivant|judaisme"},
{n:22,p:4,m:"Les pourcentages simples : 10 %, 25 %, 50 %, 75 %",f:"Phrase simple et phrase complexe",a:"Present continuous : what are you doing ?",s:"Photosynthèse et chaînes alimentaires",h:"Conquêtes romaines et paix romaine",t:"pourcentage|phrase|continuous|vivant|rome"},
{n:23,p:4,m:"Échelles, plans et cartes",f:"Le dialogue : discours direct et ponctuation",a:"Les comparatifs",s:"Écosystèmes et biodiversité",h:"La romanisation : villes et monuments romains",t:"echelle|litt|comparatif|vivant|rome"},
{n:24,p:4,m:"Les durées : calculs et conversions",f:"Décrire un lieu : vocabulaire des sensations",a:"Les superlatifs",s:"Objets programmés : capteurs et actionneurs",h:"Les chrétiens dans l'Empire romain",t:"duree|vocab|comparatif|technique|rome"},
{n:25,p:4,m:"Solides : cube, pavé droit, patrons, faces et arêtes",f:"Les temps du récit : révision d'ensemble",a:"Be going to : parler de ses projets",s:"Signal et information",h:"Le monde habité : répartition de la population",t:"geom|conjug|going|technique|peuplement"},
{n:26,p:4,m:"Volumes et contenances : cm³, dm³, litres",f:"Écrire un récit : plan, cohérence, relecture",a:"Vêtements, achats et prix",s:"Développement durable : déchets et recyclage",h:"Les grands foyers de peuplement",t:"volume|vocab|vocab|environnement|peuplement"},
{n:27,p:4,m:"Pensée informatique : algorithmes, déplacements, Scratch",f:"Orthographe : ses/ces, on/ont, son/sont",a:"Bilan de la période 4",s:"L'eau : cycle et ressource",h:"EMC : vie privée et internet",t:"algo|homophones|grammar|environnement|emc"},
{n:28,p:4,m:"Bilan : pourcentages, volumes, algorithmes",f:"Bilan de la période 4",a:"Culture : Royaume-Uni et États-Unis",s:"Bilan sciences et technologie",h:"Bilan histoire-géographie",t:"pourcentage|conjug|vocab|environnement|peuplement"},
{n:29,p:5,m:"Statistiques : tableaux et diagrammes",f:"Révision : classes de mots et fonctions",a:"Révision : présent et passé",s:"Révision : le vivant",h:"L'Empire romain et les autres mondes anciens",t:"stats|classes|grammar|vivant|rome"},
{n:30,p:5,m:"Problèmes à plusieurs étapes : méthode et schéma",f:"Révision : les cinq temps de conjugaison",a:"Raconter ses vacances au past simple",s:"Révision : matière et énergie",h:"Révision : humanité et premiers États",t:"calcmental|conjug|past|matiere|prehistoire"},
{n:31,p:5,m:"Proportionnalité : vitesse, recettes, quatrième proportionnelle",f:"Révision : tous les accords",a:"Le futur avec will",s:"Révision : la planète Terre",h:"Révision : Grèce et Rome",t:"proportionnalite|accords|will|terre|grece"},
{n:32,p:5,m:"Géométrie : programmes de construction complexes",f:"Lecture : comprendre un texte long",a:"Dialogues du quotidien",s:"Révision : objets techniques",h:"Révision : habiter la Terre",t:"geom|litt|grammar|technique|metropole"},
{n:33,p:5,m:"Calcul mental : les automatismes de fin d'année",f:"Rédaction : la description",a:"Révision du vocabulaire thématique",s:"Santé et hygiène de vie",h:"EMC : vivre dans une société démocratique",t:"calcmental|vocab|vocab|vivant|emc"},
{n:34,p:5,m:"Bilan : fractions et décimaux",f:"Dictée bilan de fin d'année",a:"Bilan niveau A2",s:"La démarche scientifique : expérimenter",h:"Bilan d'histoire",t:"fractions|homophones|grammar|matiere|premiersetats"},
{n:35,p:5,m:"Bilan général de sixième (1)",f:"Bilan général de sixième (1)",a:"Bilan général de sixième",s:"Bilan général de sixième",h:"Bilan de géographie",t:"calcmental|conjug|grammar|vivant|littoral"},
{n:36,p:5,m:"Bilan général de sixième (2) et défis",f:"Bilan général de sixième (2)",a:"Jeux et défis en anglais",s:"Défis sciences",h:"Défis histoire-géographie",t:"calcmental|litt|vocab|technique|reperes"}
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
const NOM_MAT={m:"Mathématiques",f:"Français",a:"Anglais",s:"Sciences et technologie",h:"Histoire-géo et EMC",rev:"Révision de la semaine"};
const PERIODES=["Période 1 — septembre à octobre","Période 2 — novembre à décembre","Période 3 — janvier à février","Période 4 — mars à avril","Période 5 — mai à juillet"];
function matiereDuJour(sem,jour){const j=JOURS[jour];if(j.mat==="sh")return (sem%2===1)?"s":"h";return j.mat;}

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
  entiers(){
    const a=alea(10000,999999),b=alea(10000,999999);
    if(a===b)return GM.entiers();
    return qcm("Quel est le plus grand nombre ?",String(Math.max(a,b)),[String(Math.min(a,b))],"On compare le nombre de chiffres, puis chiffre par chiffre en partant de la gauche.");
  },
  addsub(){
    if(alea(0,1)){const a=alea(1200,9800),b=alea(200,1100);return saisie(`Calcule : ${a} + ${b}`,[String(a+b)],`${a} + ${b} = ${a+b}. Pense à aligner les unités.`);}
    const a=alea(3000,9800),b=alea(400,2900);return saisie(`Calcule : ${a} − ${b}`,[String(a-b)],`${a} − ${b} = ${a-b}. Vérifie avec l'addition : ${a-b} + ${b} = ${a}.`);
  },
  decimaux(){
    const t=alea(1,3);
    if(t===1){const n=+(alea(10,99)+alea(1,9)/10).toFixed(1);return qcmChiffres(`Quel est le chiffre des dixièmes dans ${vg(n)} ?`,Math.round(n*10)%10,"Le premier chiffre après la virgule est celui des dixièmes.");}
    if(t===2){const n=+(alea(100,9999)/100).toFixed(2);return saisie(`Arrondis ${vg(n)} à l'unité`,[String(Math.round(n))],`On regarde les dixièmes : 5 ou plus, on arrondit au-dessus. ${vg(n)} → ${Math.round(n)}.`);}
    const a=+(alea(10,99)/10).toFixed(1),b=+(alea(10,99)/100).toFixed(2);
    return qcm(`Quel nombre est le plus grand : ${vg(a)} ou ${vg(b)} ?`,vg(Math.max(a,b)),[vg(Math.min(a,b))],"On compare la partie entière, puis les dixièmes, puis les centièmes. Avoir plus de chiffres ne rend pas un nombre plus grand.");
  },
  mult(){
    if(alea(0,1)){const a=alea(12,99),b=alea(12,99);return saisie(`Calcule : ${a} × ${b}`,[String(a*b)],`${a} × ${b} = ${a*b}. Décompose : ${a} × ${Math.floor(b/10)*10} + ${a} × ${b%10}.`);}
    const a=+(alea(15,995)/10).toFixed(1),m=pioche([10,100,1000]),r=+(a*m).toFixed(2);
    return saisie(`Calcule : ${vg(a)} × ${m}`,[vg(r),String(r)],`Multiplier par ${m}, c'est décaler la virgule de ${String(m).length-1} rang(s) vers la droite : ${vg(r)}.`);
  },
  adddec(){const a=+(alea(15,900)/10).toFixed(1),b=+(alea(15,900)/100).toFixed(2),r=+(a+b).toFixed(2);
    return saisie(`Calcule : ${vg(a)} + ${vg(b)}`,[vg(r),String(r)],`On aligne les virgules : ${vg(a)} + ${vg(b)} = ${vg(r)}.`);},
  multdec(){const a=+(alea(11,99)/10).toFixed(1),b=alea(3,9),r=+(a*b).toFixed(2);
    return saisie(`Calcule : ${vg(a)} × ${b}`,[vg(r),String(r)],`On calcule ${a*10} × ${b} = ${+(a*10*b).toFixed(0)}, puis on divise par 10 : ${vg(r)}.`);},
  division(){const b=alea(3,9),q=alea(11,60),r=alea(0,b-1),a=b*q+r;
    return alea(0,1)?saisie(`Division euclidienne de ${a} par ${b} : quel est le quotient ?`,[String(q)],`${a} = ${b} × ${q} + ${r}.`)
                    :saisie(`Division euclidienne de ${a} par ${b} : quel est le reste ?`,[String(r)],`${a} = ${b} × ${q} + ${r}. Le reste est toujours plus petit que ${b}.`);},
  fractions(){
    const t=alea(1,3);
    if(t===1){const d=pioche([2,3,4,5,10]),n=alea(1,d-1),q=d*alea(2,12);
      return saisie(`Combien font ${n}/${d} de ${q} ?`,[String(q*n/d)],`On divise par ${d} : ${q} ÷ ${d} = ${q/d}, puis on multiplie par ${n} : ${q*n/d}.`);}
    if(t===2){const n=alea(1,9);return qcm(`Quelle fraction est égale à ${vg(n/10)} ?`,`${n}/10`,[`${n}/100`,`10/${n}`,`${n}/2`],`Un chiffre après la virgule, ce sont des dixièmes : ${vg(n/10)} = ${n}/10.`);}
    const d=pioche([4,5,8,10]),a=alea(1,d-1),b=alea(1,d-1);
    return saisie(`Calcule : ${a}/${d} + ${b}/${d}`,[`${a+b}/${d}`],`Même dénominateur : on ajoute les numérateurs, ${a} + ${b} = ${a+b}, donc ${a+b}/${d}.`);
  },
  perimetre(){
    if(alea(0,1)){const L=alea(5,25),l=alea(3,L);return saisie(`Un rectangle mesure ${L} cm sur ${l} cm. Quel est son périmètre en cm ?`,[String(2*(L+l))],`Périmètre = 2 × (${L} + ${l}) = ${2*(L+l)} cm.`);}
    const m=alea(2,9),cm=alea(10,99);return saisie(`Convertis ${m} m ${cm} cm en centimètres`,[String(m*100+cm)],`1 m = 100 cm, donc ${m} m ${cm} cm = ${m*100+cm} cm.`);
  },
  aire(){
    if(alea(0,1)){const L=alea(4,20),l=alea(3,L);return saisie(`Quelle est l'aire d'un rectangle de ${L} cm sur ${l} cm, en cm² ?`,[String(L*l)],`Aire = longueur × largeur = ${L} × ${l} = ${L*l} cm².`);}
    const c=alea(3,15);return saisie(`Quelle est l'aire d'un carré de ${c} cm de côté, en cm² ?`,[String(c*c)],`Aire = côté × côté = ${c} × ${c} = ${c*c} cm².`);
  },
  proportionnalite(){const p=alea(2,9),q=alea(2,12),n=alea(3,9);
    return saisie(`${q} kg de pommes coûtent ${q*p} €. Combien coûtent ${n} kg ?`,[String(n*p),String(n*p)+" €"],`Un kilo coûte ${q*p} ÷ ${q} = ${p} €. Donc ${n} kg coûtent ${n} × ${p} = ${n*p} €.`);},
  pourcentage(){const p=pioche([10,25,50,75]),v=alea(4,25)*4;
    return saisie(`Combien font ${p} % de ${v} ?`,[String(v*p/100),vg(v*p/100)],`${p} % de ${v} = ${v} × ${p} ÷ 100 = ${v*p/100}.`);},
  echelle(){const e=pioche([100,1000,25000]),d=alea(2,9);
    return saisie(`Sur un plan à l'échelle 1/${e}, un segment mesure ${d} cm. Quelle distance réelle cela représente-t-il, en mètres ?`,[String(d*e/100),vg(d*e/100)],`${d} × ${e} = ${d*e} cm en réalité, soit ${d*e/100} m.`);},
  duree(){const h=alea(1,3),mn=alea(10,55),d=alea(20,90);
    const fin=8+h+Math.floor((mn+d)/60),reste=String((mn+d)%60).padStart(2,"0");
    return saisie(`Un film commence à ${8+h} h ${mn} et dure ${d} minutes. À quelle heure se termine-t-il ? (réponds comme 20h15)`,[`${fin}h${reste}`,`${fin} h ${reste}`],`${mn} + ${d} = ${mn+d} minutes, soit ${Math.floor((mn+d)/60)} h ${(mn+d)%60} min à ajouter. Fin à ${fin}h${reste}.`);},
  volume(){
    if(alea(0,1)){const a=alea(2,9),b=alea(2,9),c=alea(2,9);return saisie(`Quel est le volume d'un pavé droit de ${a} cm × ${b} cm × ${c} cm, en cm³ ?`,[String(a*b*c)],`Volume = ${a} × ${b} × ${c} = ${a*b*c} cm³.`);}
    const l=alea(2,20);return saisie(`Combien de centilitres y a-t-il dans ${l} litres ?`,[String(l*100)],`1 L = 100 cL, donc ${l} L = ${l*100} cL.`);},
  stats(){const a=alea(3,12),b=alea(3,12),c=alea(3,12),d=alea(3,12);
    return saisie(`Livres empruntés : lundi ${a}, mardi ${b}, jeudi ${c}, vendredi ${d}. Quel est le total de la semaine ?`,[String(a+b+c+d)],`${a} + ${b} + ${c} + ${d} = ${a+b+c+d} livres.`);},
  algo(){const b=[
      {q:"Dans Scratch, « avancer de 50 pas » puis « tourner de 90° », répété 4 fois, trace :",b:"un carré",f:["un triangle","un cercle","une ligne droite"],e:"Quatre côtés égaux et quatre angles droits."},
      {q:"Dans un algorithme, une boucle sert à :",b:"répéter des instructions",f:["arrêter le programme","changer la couleur","effacer l'écran"],e:"Elle évite d'écrire plusieurs fois la même instruction."},
      {q:"Pour tracer un triangle équilatéral, de combien tourne-t-on à chaque sommet ?",b:"120°",f:["60°","90°","45°"],e:"Un tour complet en 3 fois : 360 ÷ 3 = 120°."},
      {q:"Que signifie « si … alors … » dans un programme ?",b:"une instruction conditionnelle",f:["une boucle","une variable","un commentaire"],e:"L'instruction ne s'exécute que si la condition est vraie."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);},
  geom(){const b=[
      {q:"Deux droites qui se coupent en formant un angle droit sont :",b:"perpendiculaires",f:["parallèles","confondues","obliques"],e:"On le vérifie à l'équerre. Symbole : ⊥."},
      {q:"Le milieu d'un segment [AB] :",b:"partage [AB] en deux segments de même longueur",f:["est une extrémité","est en dehors du segment","forme un angle droit"],e:"Il est sur [AB], à égale distance de A et de B."},
      {q:"Le diamètre d'un cercle vaut :",b:"deux fois le rayon",f:["la moitié du rayon","le rayon","trois fois le rayon"],e:"d = 2 × r, et il passe par le centre."},
      {q:"Un angle de 90° est un angle :",b:"droit",f:["aigu","obtus","plat"],e:"Aigu < 90° < obtus < 180° = angle plat."},
      {q:"Un angle de 130° est un angle :",b:"obtus",f:["aigu","droit","plat"],e:"Plus grand que 90°, plus petit que 180°."},
      {q:"Combien d'axes de symétrie a un carré ?",b:"4",f:["2","1","0"],e:"Les deux médianes et les deux diagonales."},
      {q:"Combien d'axes de symétrie a un rectangle non carré ?",b:"2",f:["4","1","0"],e:"Seulement les médianes : les diagonales n'en sont pas."},
      {q:"Combien de faces a un pavé droit ?",b:"6",f:["4","8","12"],e:"6 faces, 12 arêtes, 8 sommets."},
      {q:"Combien d'arêtes a un cube ?",b:"12",f:["6","8","4"],e:"6 faces carrées, 12 arêtes, 8 sommets."},
      {q:"Avec quel instrument trace-t-on un cercle ?",b:"le compas",f:["l'équerre","le rapporteur","la règle graduée"],e:"On écarte le compas de la longueur du rayon."},
      {q:"Avec quel instrument mesure-t-on un angle ?",b:"le rapporteur",f:["le compas","la règle","l'équerre"],e:"On place son centre sur le sommet de l'angle."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);},
  calcmental(){
    const t=alea(1,3);
    if(t===1){const a=alea(2,9),b=alea(2,9);let c=alea(2,9);if(a===2&&b===2&&c===2)c=3;return qcm(`Calcule : ${a} + ${b} × ${c}`,String(a+b*c),[String((a+b)*c),String(a*b+c),String(a+b+c),String(a*b*c),String(a+b*c+c)],`La multiplication passe avant : ${b} × ${c} = ${b*c}, puis ${a} + ${b*c} = ${a+b*c}.`);}
    if(t===2){const a=alea(4,15),b=alea(4,15);return saisie(`Calcule : ${a} × ${b}`,[String(a*b)],`${a} × ${b} = ${a*b}.`);}
    const a=alea(20,90),b=alea(5,19);return saisie(`Calcule : ${a*b} ÷ ${b}`,[String(a)],`${a*b} ÷ ${b} = ${a}, car ${a} × ${b} = ${a*b}.`);
  }
};
function exoMaths(tag){const f=GM[tag]||GM[pioche(Object.keys(GM))];return f();}

/* ---------- FRANÇAIS ---------- */
const VERBES=[
 {inf:"chanter",pres:["chante","chantes","chante","chantons","chantez","chantent"],imp:["chantais","chantais","chantait","chantions","chantiez","chantaient"],fut:["chanterai","chanteras","chantera","chanterons","chanterez","chanteront"],ps:"chanta",pp:"chanté",aux:"avoir"},
 {inf:"finir",pres:["finis","finis","finit","finissons","finissez","finissent"],imp:["finissais","finissais","finissait","finissions","finissiez","finissaient"],fut:["finirai","finiras","finira","finirons","finirez","finiront"],ps:"finit",pp:"fini",aux:"avoir"},
 {inf:"prendre",pres:["prends","prends","prend","prenons","prenez","prennent"],imp:["prenais","prenais","prenait","prenions","preniez","prenaient"],fut:["prendrai","prendras","prendra","prendrons","prendrez","prendront"],ps:"prit",pp:"pris",aux:"avoir"},
 {inf:"aller",pres:["vais","vas","va","allons","allez","vont"],imp:["allais","allais","allait","allions","alliez","allaient"],fut:["irai","iras","ira","irons","irez","iront"],ps:"alla",pp:"allé",aux:"être"},
 {inf:"faire",pres:["fais","fais","fait","faisons","faites","font"],imp:["faisais","faisais","faisait","faisions","faisiez","faisaient"],fut:["ferai","feras","fera","ferons","ferez","feront"],ps:"fit",pp:"fait",aux:"avoir"},
 {inf:"être",pres:["suis","es","est","sommes","êtes","sont"],imp:["étais","étais","était","étions","étiez","étaient"],fut:["serai","seras","sera","serons","serez","seront"],ps:"fut",pp:"été",aux:"avoir"},
 {inf:"avoir",pres:["ai","as","a","avons","avez","ont"],imp:["avais","avais","avait","avions","aviez","avaient"],fut:["aurai","auras","aura","aurons","aurez","auront"],ps:"eut",pp:"eu",aux:"avoir"},
 {inf:"venir",pres:["viens","viens","vient","venons","venez","viennent"],imp:["venais","venais","venait","venions","veniez","venaient"],fut:["viendrai","viendras","viendra","viendrons","viendrez","viendront"],ps:"vint",pp:"venu",aux:"être"},
 {inf:"partir",pres:["pars","pars","part","partons","partez","partent"],imp:["partais","partais","partait","partions","partiez","partaient"],fut:["partirai","partiras","partira","partirons","partirez","partiront"],ps:"partit",pp:"parti",aux:"être"}
];
const PRON=["je","tu","il","nous","vous","ils"];
const HOMO=[
 {ph:"Il ___ parti à l'école.",bon:"est",faux:["et"],expl:"« est » est le verbe être : remplaçable par « était »."},
 {ph:"Léa ___ Simon jouent dehors.",bon:"et",faux:["est"],expl:"« et » relie deux mots : remplaçable par « et puis »."},
 {ph:"Simon va ___ la piscine.",bon:"à",faux:["a"],expl:"« à » est une préposition : impossible de dire « avait »."},
 {ph:"Il ___ pris son cartable.",bon:"a",faux:["à"],expl:"« a » est le verbe avoir : remplaçable par « avait »."},
 {ph:"Les élèves ___ terminé leur exercice.",bon:"ont",faux:["on"],expl:"« ont » est le verbe avoir : remplaçable par « avaient »."},
 {ph:"___ range ses affaires avant de partir.",bon:"On",faux:["Ont"],expl:"« on » est un pronom : remplaçable par « il »."},
 {ph:"Ces livres ___ à moi.",bon:"sont",faux:["son"],expl:"« sont » est le verbe être : remplaçable par « étaient »."},
 {ph:"Il a oublié ___ cahier.",bon:"son",faux:["sont"],expl:"« son » est un déterminant : remplaçable par « mon »."},
 {ph:"Simon range ___ affaires de sport.",bon:"ses",faux:["ces"],expl:"« ses » marque la possession : ce sont les siennes."},
 {ph:"Regarde ___ nuages, l'orage arrive.",bon:"ces",faux:["ses"],expl:"« ces » montre : on peut dire « ces nuages-là »."},
 {ph:"Le chat dort ___ le lit.",bon:"sur",faux:["sûr"],expl:"« sur » indique le lieu ; « sûr » veut dire certain."}
];
const PHRASES_F=[
 {ph:"Le facteur apporte une lettre.",sujet:"Le facteur",cod:"une lettre",verbe:"apporte"},
 {ph:"Les enfants regardent un film.",sujet:"Les enfants",cod:"un film",verbe:"regardent"},
 {ph:"Ma sœur prépare le repas.",sujet:"Ma sœur",cod:"le repas",verbe:"prépare"},
 {ph:"Le tracteur laboure le champ.",sujet:"Le tracteur",cod:"le champ",verbe:"laboure"},
 {ph:"Simon écrit une lettre à son cousin.",sujet:"Simon",cod:"une lettre",verbe:"écrit"}
];
const GF={
  classes(){const mots=[
      {mot:"rapidement",cl:"un adverbe",f:["un adjectif","un nom","un verbe"],e:"Il se termine par -ment et modifie le verbe."},
      {mot:"le",cl:"un déterminant",f:["un pronom","un adjectif","une préposition"],e:"Devant un nom, « le » est un article défini."},
      {mot:"courageux",cl:"un adjectif",f:["un nom","un adverbe","un verbe"],e:"Il qualifie un nom."},
      {mot:"grandir",cl:"un verbe",f:["un nom","un adjectif","un adverbe"],e:"C'est un infinitif, du 2e groupe."},
      {mot:"sous",cl:"une préposition",f:["un adverbe","un déterminant","une conjonction"],e:"Il introduit un complément."},
      {mot:"elle",cl:"un pronom",f:["un déterminant","un nom","un adjectif"],e:"Il remplace un nom."},
      {mot:"mais",cl:"une conjonction",f:["une préposition","un adverbe","un pronom"],e:"Mais, ou, et, donc, or, ni, car."},
      {mot:"tracteur",cl:"un nom",f:["un verbe","un adjectif","un adverbe"],e:"Il désigne une chose et s'emploie avec un déterminant."}];
    const m=pioche(mots);return qcm(`Quelle est la classe grammaticale du mot « ${m.mot} » ?`,m.cl,m.f,m.e);},
  verbe(){const v=pioche(VERBES);
    const gr=(v.inf.endsWith("er")&&v.inf!=="aller")?"1er groupe":(v.inf==="finir"?"2e groupe":"3e groupe");
    return qcm(`À quel groupe appartient le verbe « ${v.inf} » ?`,gr,["1er groupe","2e groupe","3e groupe"].filter(x=>x!==gr),"1er groupe : -er sauf aller. 2e groupe : -ir avec -issons. 3e groupe : les autres.");},
  conjug(temps){return function(){
      const v=pioche(VERBES),i=alea(0,5),tp=temps||pioche(["pres","imp","fut","ps","pc"]);
      const nom={pres:"présent",imp:"imparfait",fut:"futur simple",ps:"passé simple",pc:"passé composé"}[tp];
      if(tp==="ps")return saisie(`Conjugue « ${v.inf} » au passé simple, 3e personne du singulier : il ...`,[v.ps,"il "+v.ps],`il ${v.ps}. Le passé simple est le temps du récit écrit.`);
      if(tp==="pc"){
        const aux=v.aux==="être"?["suis","es","est","sommes","êtes","sont"][i]:["ai","as","a","avons","avez","ont"][i];
        const pp=v.aux==="être"?(i>=3?v.pp+"s":v.pp):v.pp;
        return saisie(`Conjugue « ${v.inf} » au passé composé : ${PRON[i]} ...`,[aux+" "+pp,PRON[i]+" "+aux+" "+pp],`${PRON[i]} ${aux} ${pp}. Avec ${v.aux}, le participe ${v.aux==="être"?"s'accorde avec le sujet":"ne s'accorde pas avec le sujet"}.`);}
      return saisie(`Conjugue « ${v.inf} » au ${nom} : ${PRON[i]} ...`,[v[tp][i],PRON[i]+" "+v[tp][i]],`${PRON[i]} ${v[tp][i]}. Retiens la terminaison du ${nom}.`);};},
  homophones(){const h=pioche(HOMO);return qcm(`Complète : ${h.ph}`,h.bon,h.faux,h.expl);},
  fonctions(){const p=pioche(PHRASES_F);
    if(alea(0,1))return saisie(`Quel est le sujet dans : « ${p.ph} » ?`,[p.sujet],`On demande « qui est-ce qui ${p.verbe} ? » → ${p.sujet}.`);
    return saisie(`Quel est le COD dans : « ${p.ph} » ?`,[p.cod],`On demande « ${p.verbe} quoi ? » → ${p.cod}. Le COD suit le verbe sans préposition.`);},
  accords(){const b=[
      {q:"Complète : « des chevaux ___ »",b:"noirs",f:["noir","noire","noires"],e:"Masculin pluriel → noirs."},
      {q:"Complète : « les vaches sont ___ »",b:"sorties",f:["sorti","sortis","sortie"],e:"Avec être, le participe s'accorde : féminin pluriel."},
      {q:"Complète : « ces belles ___ »",b:"maisons",f:["maison","maisonnes","maisonne"],e:"Déterminant et adjectif au pluriel : le nom aussi."},
      {q:"Complète : « une longue ___ »",b:"journée",f:["journées","journé","journees"],e:"Déterminant singulier → nom singulier."},
      {q:"Complète : « les élèves ___ leurs cahiers »",b:"rangent",f:["range","rangeent","rangez"],e:"Sujet pluriel, 3e personne → terminaison -ent."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);},
  vocab(){const b=[
      {q:"Que signifie le préfixe « re- » dans « refaire » ?",b:"à nouveau",f:["contre","avant","sans"],e:"re- indique la répétition : refaire, relire."},
      {q:"Quel mot appartient à la famille de « terre » ?",b:"terrain",f:["ternir","terminer","terrible"],e:"Même radical et même sens : terrestre, enterrer."},
      {q:"Que signifie le préfixe « in- » dans « invisible » ?",b:"le contraire",f:["dans","très","après"],e:"in- ou im- marque la négation."},
      {q:"« Chronomètre » vient du grec chronos, qui signifie :",b:"le temps",f:["l'eau","la lumière","la terre"],e:"chronos = temps ; mètre = mesurer."},
      {q:"« Aquatique » vient du latin aqua, qui signifie :",b:"l'eau",f:["l'air","le feu","la terre"],e:"aqua : aquarium, aqueduc."},
      {q:"Quel mot est un synonyme de « rapide » ?",b:"véloce",f:["lent","lourd","calme"],e:"Un synonyme a un sens proche."},
      {q:"Quel mot est le contraire de « courageux » ?",b:"peureux",f:["brave","vaillant","fort"],e:"Les autres sont des synonymes de courageux."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);},
  phrase(){const b=[
      {q:"« Ferme la porte. » Quel est le type de cette phrase ?",b:"injonctive",f:["déclarative","interrogative","exclamative"],e:"Elle donne un ordre."},
      {q:"« Quelle belle journée ! » Quel est le type de cette phrase ?",b:"exclamative",f:["déclarative","interrogative","injonctive"],e:"Elle exprime un sentiment."},
      {q:"Combien de propositions dans « Il pleut, donc nous restons à la maison. » ?",b:"2",f:["1","3","4"],e:"Deux verbes conjugués = deux propositions."},
      {q:"Quel signe termine une phrase interrogative ?",b:"le point d'interrogation",f:["le point","le point d'exclamation","la virgule"],e:"« Viens-tu ce soir ? »"},
      {q:"Dans un dialogue, qu'indique le tiret en début de ligne ?",b:"un changement d'interlocuteur",f:["une pause","une citation","la fin du texte"],e:"Chaque réplique commence par un tiret."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);},
  litt(){const b=[
      {q:"« Il est rusé comme un renard » : quelle figure de style ?",b:"une comparaison",f:["une métaphore","une répétition","une personnification"],e:"Il y a un outil de comparaison : « comme »."},
      {q:"« Cet homme est un lion » : quelle figure de style ?",b:"une métaphore",f:["une comparaison","une énumération","une antithèse"],e:"Comparaison sans outil de comparaison."},
      {q:"Un vers de douze syllabes s'appelle :",b:"un alexandrin",f:["un octosyllabe","un décasyllabe","une strophe"],e:"8 : octosyllabe ; 10 : décasyllabe ; 12 : alexandrin."},
      {q:"Un ensemble de vers séparé par un blanc s'appelle :",b:"une strophe",f:["une rime","un vers","un paragraphe"],e:"Quatre vers forment un quatrain."},
      {q:"Dans l'Odyssée, qui cherche à rentrer à Ithaque ?",b:"Ulysse",f:["Achille","Hector","Zeus"],e:"Il met dix ans à rentrer après la guerre de Troie."},
      {q:"« Le vent murmure dans les arbres » : quelle figure ?",b:"une personnification",f:["une comparaison","une hyperbole","une métaphore"],e:"On prête au vent une action humaine."},
      {q:"Quel temps porte les actions de premier plan dans un récit au passé ?",b:"le passé simple",f:["l'imparfait","le présent","le futur"],e:"L'imparfait plante le décor, le passé simple raconte l'action."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);}
};
function exoFrancais(tag){
  const map={classes:GF.classes,verbe:GF.verbe,phrase:GF.phrase,homophones:GF.homophones,fonctions:GF.fonctions,
    accords:GF.accords,vocab:GF.vocab,litt:GF.litt,present:GF.conjug("pres"),imparfait:GF.conjug("imp"),
    futur:GF.conjug("fut"),passesimple:GF.conjug("ps"),passecompose:GF.conjug("pc"),conjug:GF.conjug(null)};
  const f=map[tag]||pioche(Object.values(map));return f();
}

/* ---------- ANGLAIS ---------- */
const VOC_EN=[["a school bag","un cartable"],["the classroom","la salle de classe"],["breakfast","le petit-déjeuner"],["a bedroom","une chambre"],["a cousin","un cousin"],["homework","les devoirs"],["a playground","une cour de récréation"],["cheese","le fromage"],["a shirt","une chemise"],["the kitchen","la cuisine"],["a horse","un cheval"],["Wednesday","mercredi"],["autumn","l'automne"],["a spoon","une cuillère"],["a farm","une ferme"],["a sheep","un mouton"],["the weather","le temps"],["a shop","un magasin"],["a nurse","une infirmière"],["a river","une rivière"],["bread","le pain"],["a tooth","une dent"],["shoes","des chaussures"],["a birthday","un anniversaire"],["a mistake","une erreur"],["a friend","un ami"],["a train station","une gare"],["a field","un champ"]];
const IRREG=[["go","went"],["eat","ate"],["see","saw"],["take","took"],["make","made"],["write","wrote"],["drink","drank"],["run","ran"],["buy","bought"],["come","came"],["give","gave"],["speak","spoke"],["sleep","slept"],["find","found"],["think","thought"],["swim","swam"],["begin","began"]];
const GRAM_EN=[
 {t:"tobe",q:"I ___ eleven years old.",b:"am",f:["is","are","be"],e:"I am, you are, he/she/it is."},
 {t:"tobe",q:"They ___ in the classroom.",b:"are",f:["is","am","be"],e:"Pluriel → are."},
 {t:"havegot",q:"She ___ got two brothers.",b:"has",f:["have","haves","is"],e:"3e personne du singulier : has got."},
 {t:"havegot",q:"___ you got a pet ?",b:"Have",f:["Has","Do","Are"],e:"Have you got …? est la forme interrogative."},
 {t:"presentsimple",q:"He ___ to school every day.",b:"goes",f:["go","going","gone"],e:"3e personne du singulier : -es après -o."},
 {t:"presentsimple",q:"___ you like football ?",b:"Do",f:["Does","Are","Is"],e:"Avec you, la question se forme avec Do."},
 {t:"presentsimple",q:"She ___ not like fish.",b:"does",f:["do","is","has"],e:"3e personne : does not (doesn't)."},
 {t:"articles",q:"I have ___ apple in my bag.",b:"an",f:["a","the","some"],e:"an devant un son de voyelle."},
 {t:"plural",q:"Quel est le pluriel de « child » ?",b:"children",f:["childs","childrens","childes"],e:"Pluriel irrégulier."},
 {t:"plural",q:"Quel est le pluriel de « foot » ?",b:"feet",f:["foots","feets","footes"],e:"Pluriel irrégulier."},
 {t:"thereis",q:"___ three books on the table.",b:"There are",f:["There is","It is","They is"],e:"Pluriel → there are."},
 {t:"thereis",q:"___ a cat in the garden.",b:"There is",f:["There are","They are","It have"],e:"Singulier → there is."},
 {t:"prepositions",q:"The book is ___ the table.",b:"on",f:["in","at","between"],e:"on = posé sur une surface."},
 {t:"prepositions",q:"My pen is ___ my bag.",b:"in",f:["on","at","under"],e:"in = à l'intérieur."},
 {t:"can",q:"___ you swim ?",b:"Can",f:["Do","Are","Have"],e:"Can exprime la capacité, sans do."},
 {t:"can",q:"He ___ play the guitar.",b:"can",f:["cans","can to","is can"],e:"Can est invariable, suivi de la base verbale."},
 {t:"adjectifs",q:"She has ___ hair.",b:"long brown",f:["brown long","hair long","long hairs"],e:"L'adjectif précède le nom : taille puis couleur."},
 {t:"past",q:"I ___ born in France.",b:"was",f:["were","am","is"],e:"Past simple de to be : I was."},
 {t:"past",q:"We ___ at the cinema yesterday.",b:"were",f:["was","are","be"],e:"We/you/they → were."},
 {t:"past",q:"He ___ football last Sunday.",b:"played",f:["play","plaied","playing"],e:"Verbe régulier : -ed."},
 {t:"past",q:"___ you go to school yesterday ?",b:"Did",f:["Do","Does","Was"],e:"did + base verbale."},
 {t:"continuous",q:"Look ! She ___ running.",b:"is",f:["are","am","does"],e:"Present continuous : be + verbe-ing."},
 {t:"continuous",q:"They ___ watching TV now.",b:"are",f:["is","am","do"],e:"Pluriel → are + -ing."},
 {t:"comparatif",q:"My bag is ___ than yours.",b:"bigger",f:["more big","biggest","big"],e:"Adjectif court : -er + than."},
 {t:"comparatif",q:"This is the ___ film of the year.",b:"best",f:["better","goodest","more good"],e:"good → better → the best."},
 {t:"going",q:"I ___ going to visit my cousin.",b:"am",f:["is","are","do"],e:"be going to : un projet décidé."},
 {t:"will",q:"Tomorrow it ___ rain.",b:"will",f:["wills","is will","does"],e:"will + base verbale."},
 {t:"vocab",q:"Quel jour vient après Tuesday ?",b:"Wednesday",f:["Thursday","Monday","Saturday"],e:"Monday, Tuesday, Wednesday, Thursday, Friday."},
 {t:"vocab",q:"Comment dit-on « il est huit heures et demie » ?",b:"It's half past eight",f:["It's eight and half","It's eight half","It's half to eight"],e:"half past = et demie ; quarter past = et quart."},
 {t:"vocab",q:"Quelle est la capitale du Royaume-Uni ?",b:"London",f:["Washington","Dublin","Sydney"],e:"Washington D.C. est celle des États-Unis."}
];
function exoAnglais(tag){
  const t=alea(1,3);
  if(tag==="vocab"||t===1){const p=pioche(VOC_EN);return saisie(`Traduis en français : « ${p[0]} »`,[p[1],p[1].replace(/^(un |une |le |la |les |l'|des )/,"")],`« ${p[0]} » se traduit par « ${p[1]} ».`);}
  if(t===2&&(tag==="past"||alea(0,1))){const p=pioche(IRREG);return saisie(`Donne le prétérit de « to ${p[0]} »`,[p[1]],`to ${p[0]} → ${p[1]} : verbe irrégulier, à apprendre par cœur.`);}
  const f=GRAM_EN.filter(x=>x.t===tag);const x=pioche(f.length?f:GRAM_EN);
  return qcm(x.q.startsWith("Quel")||x.q.startsWith("Comment")?x.q:`Complète : ${x.q}`,x.b,x.f,x.e);
}

/* ---------- SCIENCES ET TECHNOLOGIE ---------- */
const BANQUE_S=[
 {t:"matiere",q:"Quel est le changement d'état de l'eau liquide vers la vapeur ?",b:"la vaporisation",f:["la fusion","la solidification","la condensation"],e:"Liquide → gaz : vaporisation. L'inverse est la condensation."},
 {t:"matiere",q:"À quelle température l'eau pure gèle-t-elle ?",b:"0 °C",f:["100 °C","10 °C","−10 °C"],e:"Elle se solidifie à 0 °C et bout à 100 °C."},
 {t:"matiere",q:"Un mélange dont on ne distingue pas les constituants est :",b:"homogène",f:["hétérogène","décanté","filtré"],e:"Une seule phase visible, comme l'eau salée."},
 {t:"matiere",q:"Comment sépare-t-on l'eau boueuse ?",b:"par décantation puis filtration",f:["par évaporation","par congélation","par chauffage"],e:"On laisse déposer, puis on filtre."},
 {t:"matiere",q:"Que devient la masse de l'eau quand elle gèle ?",b:"elle reste la même",f:["elle augmente","elle diminue","elle double"],e:"La masse se conserve ; c'est le volume qui augmente."},
 {t:"mesures",q:"Que mesure-t-on avec une balance ?",b:"une masse, en grammes",f:["un volume, en litres","une longueur","une durée"],e:"Le volume se mesure avec une éprouvette graduée."},
 {t:"mesures",q:"1 litre correspond à :",b:"1 dm³",f:["1 cm³","1 m³","10 dm³"],e:"1 L = 1 dm³ = 1000 cm³."},
 {t:"mesures",q:"Quelle unité convient pour la masse d'un tracteur ?",b:"la tonne",f:["le gramme","le litre","le mètre"],e:"1 tonne = 1000 kg."},
 {t:"vivant",q:"Un animal qui ne mange que des végétaux est :",b:"herbivore",f:["carnivore","omnivore","décomposeur"],e:"Carnivore : animaux ; omnivore : les deux."},
 {t:"vivant",q:"De quoi une plante verte a-t-elle besoin pour fabriquer sa matière ?",b:"de lumière, d'eau et de dioxyde de carbone",f:["de lumière seulement","d'engrais seulement","de chaleur seulement"],e:"C'est la photosynthèse ; elle rejette du dioxygène."},
 {t:"vivant",q:"Que représente une chaîne alimentaire ?",b:"qui mange qui dans un milieu",f:["le trajet de l'eau","la météo","la croissance des plantes"],e:"Les flèches vont du mangé vers le mangeur."},
 {t:"vivant",q:"Les êtres vivants sont classés selon :",b:"leurs attributs communs",f:["leur taille","leur couleur","leur lieu de vie"],e:"On regroupe ceux qui partagent des caractères, comme les vertébrés."},
 {t:"vivant",q:"Chez les mammifères, la reproduction est :",b:"sexuée, avec un mâle et une femelle",f:["asexuée","par bouturage","par division"],e:"La fécondation réunit une cellule mâle et une cellule femelle."},
 {t:"vivant",q:"Que devient une fleur après la fécondation ?",b:"un fruit contenant des graines",f:["une racine","une feuille","une tige"],e:"La graine donnera une nouvelle plante."},
 {t:"terre",q:"Quel astre est au centre du système solaire ?",b:"le Soleil",f:["la Terre","la Lune","Jupiter"],e:"C'est une étoile ; les planètes tournent autour."},
 {t:"terre",q:"Combien de temps la Terre met-elle à tourner sur elle-même ?",b:"24 heures",f:["365 jours","12 heures","1 mois"],e:"La rotation explique le jour et la nuit."},
 {t:"terre",q:"Qu'est-ce qui explique les saisons ?",b:"l'inclinaison de l'axe de la Terre",f:["la distance au Soleil","la rotation","la Lune"],e:"L'axe incliné change la hauteur du Soleil selon la période."},
 {t:"terre",q:"Un séisme est provoqué par :",b:"une rupture des roches en profondeur",f:["la pluie","le vent","la marée"],e:"Les ondes partent du foyer jusqu'à la surface."},
 {t:"terre",q:"Que produit un volcan effusif ?",b:"de la lave fluide",f:["des cendres explosives","de l'eau","du sable"],e:"Le volcan explosif projette cendres et blocs."},
 {t:"terre",q:"Quelle planète est la plus proche du Soleil ?",b:"Mercure",f:["Vénus","Mars","la Terre"],e:"Mercure, Vénus, la Terre, Mars, puis les géantes gazeuses."},
 {t:"terre",q:"Comment se protéger du risque sismique ?",b:"construire des bâtiments adaptés et s'entraîner",f:["ne rien faire","arroser le sol","planter des arbres"],e:"Construction parasismique, alerte et exercices."},
 {t:"mouvement",q:"La trajectoire d'un objet, c'est :",b:"le chemin qu'il suit",f:["sa vitesse","sa masse","sa durée"],e:"Elle peut être rectiligne, circulaire ou quelconque."},
 {t:"mouvement",q:"Un cycliste parcourt 30 km en 2 h. Quelle est sa vitesse moyenne ?",b:"15 km/h",f:["60 km/h","30 km/h","10 km/h"],e:"Vitesse = distance ÷ durée."},
 {t:"mouvement",q:"Un objet est en mouvement si :",b:"sa position change par rapport à un repère",f:["il est lourd","il est grand","il fait du bruit"],e:"Le mouvement dépend du référentiel choisi."},
 {t:"energie",q:"D'où provient l'énergie d'un panneau solaire ?",b:"de la lumière du Soleil",f:["du vent","de l'eau","du charbon"],e:"Le panneau photovoltaïque convertit la lumière en électricité."},
 {t:"energie",q:"Quelle source d'énergie est renouvelable ?",b:"le vent",f:["le pétrole","le charbon","le gaz naturel"],e:"Vent, soleil, eau, biomasse, géothermie."},
 {t:"energie",q:"Dans un circuit simple, la lampe brille si :",b:"le circuit est fermé",f:["le circuit est ouvert","l'interrupteur est ouvert","la pile est débranchée"],e:"Le courant ne circule que dans une boucle fermée."},
 {t:"energie",q:"Deux lampes sont en série et l'une grille. Que se passe-t-il ?",b:"l'autre s'éteint aussi",f:["elle brille plus fort","rien ne change","elle clignote"],e:"En série, le circuit est coupé pour tout le monde."},
 {t:"technique",q:"Quel est le point de départ de la conception d'un objet technique ?",b:"le besoin à satisfaire",f:["le matériau","la couleur","le prix"],e:"Besoin, puis fonctions, puis solutions techniques."},
 {t:"technique",q:"Un capteur sert à :",b:"mesurer une grandeur et transmettre une information",f:["produire du mouvement","fabriquer de l'énergie","éclairer"],e:"Le capteur informe, l'actionneur agit."},
 {t:"technique",q:"Quel matériau est isolant électrique ?",b:"le plastique",f:["le cuivre","l'aluminium","le fer"],e:"Les métaux conduisent, les plastiques isolent."},
 {t:"technique",q:"La fonction d'usage d'un objet, c'est :",b:"le service qu'il rend",f:["son prix","son style","sa matière"],e:"La fonction d'estime concerne l'aspect."},
 {t:"environnement",q:"Quel geste réduit le plus la quantité de déchets ?",b:"réduire ce que l'on consomme",f:["brûler ses déchets","tout jeter au tout-venant","acheter plus d'emballages"],e:"Réduire, réutiliser, recycler, dans cet ordre."},
 {t:"environnement",q:"Dans le cycle de l'eau, l'évaporation se produit :",b:"quand l'eau passe à l'état de vapeur",f:["quand il pleut","quand l'eau gèle","quand l'eau s'infiltre"],e:"Évaporation, condensation, précipitations, ruissellement, infiltration."},
 {t:"environnement",q:"La biodiversité désigne :",b:"la diversité des êtres vivants d'un milieu",f:["le nombre d'habitants","la quantité d'eau","la surface d'un champ"],e:"Elle diminue quand les milieux sont détruits."},
 {t:"environnement",q:"Que devient l'eau usée d'une maison ?",b:"elle est traitée en station d'épuration",f:["elle va directement à la rivière","elle disparaît","elle est bue"],e:"L'épuration élimine les polluants avant le rejet."}
];
/* ---------- HISTOIRE-GÉOGRAPHIE ET EMC ---------- */
const BANQUE_H=[
 {t:"reperes",q:"L'année −52 se situe :",b:"au Ier siècle avant J.-C.",f:["au Ve siècle avant J.-C.","au Ier siècle après J.-C.","au IIe siècle avant J.-C."],e:"On divise par 100 et on arrondit au siècle supérieur."},
 {t:"reperes",q:"Combien d'années compte un millénaire ?",b:"1000",f:["100","10","500"],e:"Un siècle : 100 ans ; un millénaire : 1000 ans."},
 {t:"reperes",q:"L'année 1789 appartient au :",b:"XVIIIe siècle",f:["XVIIe siècle","XIXe siècle","XVIe siècle"],e:"17 centaines révolues + 1 = XVIIIe siècle."},
 {t:"prehistoire",q:"Le Néolithique correspond à l'apparition de :",b:"l'agriculture et de l'élevage",f:["l'écriture","l'imprimerie","la métallurgie du fer"],e:"Vers −10000, l'homme se sédentarise."},
 {t:"prehistoire",q:"Au Paléolithique, les hommes vivaient :",b:"de la chasse, de la pêche et de la cueillette",f:["de l'agriculture","du commerce","de l'élevage"],e:"Ils étaient nomades et suivaient le gibier."},
 {t:"prehistoire",q:"La grotte de Lascaux est célèbre pour :",b:"ses peintures rupestres",f:["ses tombeaux","ses écrits","ses temples"],e:"Elles datent d'environ 17 000 ans."},
 {t:"premiersetats",q:"Où est née l'écriture, vers −3300 ?",b:"en Mésopotamie",f:["en Grèce","à Rome","en Gaule"],e:"L'écriture cunéiforme apparaît chez les Sumériens."},
 {t:"premiersetats",q:"Qui dirigeait l'Égypte ancienne ?",b:"le pharaon",f:["le consul","l'empereur","l'archonte"],e:"Il était considéré comme un dieu vivant."},
 {t:"premiersetats",q:"À quoi servait d'abord l'écriture ?",b:"à compter et gérer les récoltes et les échanges",f:["à écrire des romans","à envoyer des lettres","à dessiner"],e:"Les premières tablettes sont des comptes."},
 {t:"grece",q:"Quelle cité grecque a inventé la démocratie ?",b:"Athènes",f:["Sparte","Troie","Corinthe"],e:"Les citoyens votent à l'Ecclésia."},
 {t:"grece",q:"Que raconte l'Odyssée ?",b:"le retour d'Ulysse à Ithaque",f:["la fondation de Rome","la guerre des Gaules","la vie de Jésus"],e:"Poème attribué à Homère."},
 {t:"grece",q:"Qui pouvait voter à Athènes au Ve siècle av. J.-C. ?",b:"les citoyens, hommes libres nés de parents athéniens",f:["tout le monde","les femmes aussi","les esclaves"],e:"Environ un habitant sur dix."},
 {t:"grece",q:"Où les Grecs honoraient-ils Zeus par des concours sportifs ?",b:"à Olympie",f:["à Delphes","à Sparte","à Athènes"],e:"Les Jeux avaient lieu tous les quatre ans."},
 {t:"rome",q:"Qui aurait fondé Rome selon la légende ?",b:"Romulus",f:["Ulysse","César","Auguste"],e:"Le mythe date la fondation de −753."},
 {t:"rome",q:"Qui fut le premier empereur romain ?",b:"Auguste",f:["Jules César","Néron","Romulus"],e:"Il devient empereur en −27."},
 {t:"rome",q:"La romanisation, c'est :",b:"la diffusion du mode de vie romain dans l'Empire",f:["la chute de Rome","la conquête de la Grèce","la fondation d'Athènes"],e:"Langue latine, villes, thermes, routes, citoyenneté."},
 {t:"rome",q:"Quel monument accueillait les combats de gladiateurs ?",b:"l'amphithéâtre",f:["le théâtre","les thermes","le forum"],e:"Le Colisée en est le plus célèbre."},
 {t:"rome",q:"Quand le christianisme devient-il religion officielle de l'Empire ?",b:"à la fin du IVe siècle",f:["au Ier siècle","au Xe siècle","avant Jésus-Christ"],e:"Toléré en 313, officiel en 380."},
 {t:"judaisme",q:"Le premier monothéisme étudié en sixième est :",b:"le judaïsme",f:["le christianisme","l'islam","le polythéisme grec"],e:"Il naît au Ier millénaire av. J.-C."},
 {t:"judaisme",q:"Quel est le livre sacré des juifs ?",b:"la Bible hébraïque",f:["le Coran","l'Iliade","les Évangiles"],e:"Elle comprend notamment la Torah."},
 {t:"judaisme",q:"Que signifie « monothéisme » ?",b:"la croyance en un seul dieu",f:["la croyance en plusieurs dieux","l'absence de croyance","le culte des ancêtres"],e:"Le polythéisme honore plusieurs dieux."},
 {t:"metropole",q:"Une métropole est :",b:"une grande ville qui concentre pouvoirs et activités",f:["un village","une région agricole","un littoral"],e:"Elle attire par ses emplois et ses fonctions de commandement."},
 {t:"metropole",q:"Qu'appelle-t-on l'étalement urbain ?",b:"l'extension de la ville sur les campagnes voisines",f:["la densification du centre","le départ des habitants","la construction de tours"],e:"Il allonge les déplacements et consomme des terres agricoles."},
 {t:"metropole",q:"Dans les métropoles des pays pauvres, les bidonvilles sont :",b:"des quartiers d'habitat précaire",f:["des quartiers d'affaires","des zones industrielles","des espaces verts"],e:"Ils manquent d'eau, d'électricité et d'assainissement."},
 {t:"faibledensite",q:"Un espace de faible densité, c'est :",b:"un espace où vivent peu d'habitants au km²",f:["une grande ville","un port","une capitale"],e:"Montagnes, déserts et campagnes isolées."},
 {t:"faibledensite",q:"Quelle contrainte marque un espace désertique ?",b:"le manque d'eau",f:["le froid extrême","l'altitude","les marées"],e:"L'aridité limite l'agriculture et le peuplement."},
 {t:"faibledensite",q:"Dans un espace agricole de faible densité, l'activité principale est :",b:"l'agriculture",f:["l'industrie lourde","le tourisme d'affaires","la finance"],e:"Les exploitations y sont souvent grandes et mécanisées."},
 {t:"littoral",q:"Qu'est-ce qu'un littoral industrialo-portuaire ?",b:"un littoral aménagé pour le commerce et l'industrie",f:["une plage touristique","une réserve naturelle","une montagne"],e:"Terminaux, entrepôts et usines, comme au Havre."},
 {t:"littoral",q:"Quel aménagement caractérise un littoral touristique ?",b:"hôtels, marinas et plages aménagées",f:["terminaux à conteneurs","raffineries","mines"],e:"Le tourisme transforme fortement la côte."},
 {t:"littoral",q:"Quel risque menace particulièrement les littoraux ?",b:"la montée du niveau de la mer et l'érosion",f:["les séismes uniquement","les avalanches","les tornades de montagne"],e:"L'urbanisation du trait de côte aggrave la vulnérabilité."},
 {t:"peuplement",q:"Les grands foyers de peuplement se situent surtout :",b:"en Asie de l'Est et du Sud",f:["au Sahara","en Antarctique","en Amazonie"],e:"Chine, Inde, Europe et nord-est des États-Unis."},
 {t:"peuplement",q:"Un espace très peu peuplé s'appelle :",b:"un désert humain",f:["une métropole","une mégapole","une conurbation"],e:"Déserts, forêts denses, hautes montagnes, zones polaires."},
 {t:"peuplement",q:"La densité de population se mesure en :",b:"habitants par km²",f:["km² par habitant","habitants par an","km par heure"],e:"On divise la population par la superficie."},
 {t:"emc",q:"À quoi sert le règlement intérieur d'un collège ?",b:"à fixer des règles communes pour bien vivre ensemble",f:["à punir les élèves","à noter les élèves","à choisir les cours"],e:"Les règles protègent chacun et organisent la vie collective."},
 {t:"emc",q:"L'intérêt général, c'est :",b:"ce qui est utile à tous plutôt qu'à quelques-uns",f:["l'intérêt d'une seule personne","le profit d'une entreprise","le règlement d'un club"],e:"Un maire décide au nom de l'intérêt général."},
 {t:"emc",q:"En France, la laïcité à l'École signifie que :",b:"l'École est neutre et respecte toutes les croyances",f:["les religions sont interdites partout","une seule religion est enseignée","on ne parle jamais des religions"],e:"On étudie les faits religieux en histoire ; l'École reste neutre."},
 {t:"emc",q:"Sur internet, une donnée personnelle est :",b:"une information qui permet de t'identifier",f:["une publicité","un jeu en ligne","une image libre de droits"],e:"Nom, adresse, photo, âge : protégés par le droit à la vie privée."},
 {t:"emc",q:"Que faire si quelqu'un est harcelé au collège ?",b:"en parler à un adulte de confiance",f:["ne rien dire","répondre par la violence","filmer la scène"],e:"Le 3018 est le numéro national contre le harcèlement."},
 {t:"emc",q:"Dans une société démocratique, la loi est votée par :",b:"les représentants élus",f:["le roi","une seule personne","les entreprises"],e:"En France, les députés et les sénateurs."}
];

function exoMatiere(mat,sem){
  if(mat==="m")return exoMaths(sem.tm);
  if(mat==="f")return exoFrancais(sem.tf);
  if(mat==="a")return exoAnglais(sem.ta);
  if(mat==="s")return parTag(BANQUE_S,sem.ts);
  return parTag(BANQUE_H,sem.th);
}
function seanceHorsLigne(mat,semaine){
  const sem=SEMAINES[semaine-1];
  if(mat==="rev")return [exoMatiere("m",sem),exoMatiere("f",sem),exoMatiere("a",sem),exoMatiere("s",sem),
                         exoMatiere("h",sem),exoMatiere("m",sem),exoMatiere("f",sem),exoMaths("calcmental")];
  const q=[exoMaths(sem.tm),exoFrancais(sem.tf)];
  for(let i=0;i<4;i++)q.push(exoMatiere(mat,sem));
  return q;
}


export const programme = { code: "6e", nom: "6e", rituel: "Deux questions de rituel pour commencer : calcul mental et français.", SEMAINES, JOURS, NOM_MAT, PERIODES, matiereDuJour, seanceHorsLigne };
