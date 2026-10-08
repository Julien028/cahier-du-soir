// Programme « Maths in English · CM1-6e » (9 à 11 ans), créé le 08/10/2026.
// Les maths du cycle 3, entièrement en anglais (anglais britannique simple).

/* =========================================================
   1. LE PROGRAMME — 36 SEMAINES
   t = étiquettes : maths | mots (vocabulaire)
   ========================================================= */
const SEMAINES=[
{n:1,p:1,m:"Place value: numbers up to a million (les grands nombres jusqu'au million)",v:"digit, place value, thousand, million (chiffre, valeur du chiffre, mille, million)",t:"placevalue|place"},
{n:2,p:1,m:"Comparing, ordering and rounding numbers (comparer, ranger, arrondir)",v:"greater than, less than, round, nearest, ascending order (supérieur à, inférieur à, arrondir, le plus proche, ordre croissant)",t:"round|compare"},
{n:3,p:1,m:"Adding and subtracting: the column method (addition et soustraction posées)",v:"sum, difference, carry, column, total (somme, différence, retenue, colonne, total)",t:"addsub|addsub"},
{n:4,p:1,m:"Times tables and multiples (tables de multiplication et multiples)",v:"times table, multiple, product, multiply (table, multiple, produit, multiplier)",t:"tables|mult"},
{n:5,p:1,m:"Multiplying by 10, 100, 1000 and long multiplication (multiplication posée)",v:"product, multiply, times, digit (produit, multiplier, fois, chiffre)",t:"mult|mult"},
{n:6,p:1,m:"Lines: parallel and perpendicular (droites parallèles et perpendiculaires)",v:"line, parallel, perpendicular, set square, ruler (droite, parallèle, perpendiculaire, équerre, règle)",t:"lines|lines"},
{n:7,p:1,m:"Review of term 1 (bilan de la période 1)",v:"place value words (les mots de la numération)",t:"rev1|place"},
{n:8,p:2,m:"Division: quotient and remainder (division euclidienne)",v:"divide, quotient, remainder, divisible by (diviser, quotient, reste, divisible par)",t:"division|division"},
{n:9,p:2,m:"Factors, multiples and divisibility (diviseurs, multiples, critères de divisibilité)",v:"factor, multiple, divisible, prime number (diviseur, multiple, divisible, nombre premier)",t:"factors|division"},
{n:10,p:2,m:"Fractions: numerator and denominator (les fractions)",v:"fraction, numerator, denominator, half, third, quarter (fraction, numérateur, dénominateur, demi, tiers, quart)",t:"fractions|fractions"},
{n:11,p:2,m:"Fractions of an amount (fraction d'une quantité)",v:"of, equal parts, whole, share (de, parts égales, entier, partager)",t:"fracof|fractions"},
{n:12,p:2,m:"Equivalent fractions and comparing fractions (fractions égales, comparer des fractions)",v:"equivalent, simplify, greater, smaller (équivalent, simplifier, plus grand, plus petit)",t:"fraceq|fractions"},
{n:13,p:2,m:"Decimals: tenths and hundredths (les nombres décimaux : dixièmes et centièmes)",v:"decimal point, tenth, hundredth, decimal (virgule, dixième, centième, décimal)",t:"decimals|decimals"},
{n:14,p:2,m:"Review of term 2 (bilan de la période 2)",v:"fraction and decimal words (les mots des fractions et des décimaux)",t:"rev2|decimals"},
{n:15,p:3,m:"Adding and subtracting decimals (additionner et soustraire des décimaux)",v:"decimal point, line up, tenths, hundredths (virgule, aligner, dixièmes, centièmes)",t:"adddec|decimals"},
{n:16,p:3,m:"Multiplying and dividing decimals by 10, 100 and by a whole number (multiplier des décimaux)",v:"multiply, divide, decimal point, move (multiplier, diviser, virgule, décaler)",t:"multdec|decimals"},
{n:17,p:3,m:"Measures: length, mass and capacity (longueurs, masses, contenances)",v:"kilometre, millimetre, gram, millilitre, convert (kilomètre, millimètre, gramme, millilitre, convertir)",t:"measures|measures"},
{n:18,p:3,m:"Time: the 24-hour clock and durations (l'heure et les durées)",v:"second, duration, a.m., p.m., midday, midnight (seconde, durée, matin, après-midi, midi, minuit)",t:"time|time"},
{n:19,p:3,m:"Perimeter (le périmètre)",v:"perimeter, length, width, side (périmètre, longueur, largeur, côté)",t:"perimeter|area"},
{n:20,p:3,m:"Area: squares and rectangles (l'aire du carré et du rectangle)",v:"area, square centimetre, square metre, width (aire, centimètre carré, mètre carré, largeur)",t:"area|area"},
{n:21,p:3,m:"Review of term 3 (bilan de la période 3)",v:"measure words (les mots des mesures)",t:"rev3|measures"},
{n:22,p:4,m:"Angles: acute, right, obtuse (les angles)",v:"angle, right angle, acute, obtuse, degree, protractor (angle, angle droit, aigu, obtus, degré, rapporteur)",t:"angles|angles"},
{n:23,p:4,m:"Triangles and quadrilaterals (triangles et quadrilatères)",v:"polygon, quadrilateral, isosceles, equilateral, vertex (polygone, quadrilatère, isocèle, équilatéral, sommet)",t:"polygons|polygons"},
{n:24,p:4,m:"Circles: centre, radius, diameter (le cercle)",v:"circle, centre, radius, diameter, compass (cercle, centre, rayon, diamètre, compas)",t:"circle|circle"},
{n:25,p:4,m:"Proportionality (la proportionnalité)",v:"proportional, scale, recipe, per (proportionnel, échelle, recette, par)",t:"proportion|proportion"},
{n:26,p:4,m:"Percentages (les pourcentages)",v:"percent, percentage, discount, out of (pour cent, pourcentage, réduction, sur)",t:"percent|proportion"},
{n:27,p:4,m:"Word problems in several steps (problèmes à étapes)",v:"step, solve, estimate, data (étape, résoudre, estimer, données)",t:"problems|problems"},
{n:28,p:4,m:"Review of term 4 (bilan de la période 4)",v:"geometry words (les mots de la géométrie)",t:"rev4|angles"},
{n:29,p:5,m:"Solids and volume: cubes and cuboids (solides et volume)",v:"cube, cuboid, face, edge, volume (cube, pavé droit, face, arête, volume)",t:"volume|solids"},
{n:30,p:5,m:"Symmetry (la symétrie)",v:"line of symmetry, mirror, reflection, symmetrical (axe de symétrie, miroir, reflet, symétrique)",t:"symmetry|symmetry"},
{n:31,p:5,m:"Data: tables, charts and the mean (tableaux, graphiques, moyenne)",v:"table, bar chart, pie chart, mean, total (tableau, diagramme en barres, diagramme circulaire, moyenne, total)",t:"data|data"},
{n:32,p:5,m:"Money and best buys (la monnaie, le meilleur prix)",v:"price, cost, change, discount, cheaper (prix, coûter, monnaie rendue, réduction, moins cher)",t:"money|money"},
{n:33,p:5,m:"Mental maths strategies (stratégies de calcul mental)",v:"estimate, round, double, halve (estimer, arrondir, doubler, diviser par deux)",t:"mentalw|compare"},
{n:34,p:5,m:"Review: fractions and decimals (bilan : fractions et décimaux)",v:"fraction and decimal words (les mots des fractions et des décimaux)",t:"rev5|fractions"},
{n:35,p:5,m:"End-of-year review 1 (bilan de l'année 1)",v:"all the maths words of the year (tous les mots de l'année)",t:"rev6|all"},
{n:36,p:5,m:"End-of-year review 2 and challenges (bilan de l'année 2 et défis)",v:"all the maths words of the year (tous les mots de l'année)",t:"rev7|all"}
];
SEMAINES.forEach(s=>{const t=s.t.split("|");s.tm=t[0];s.tv=t[1];});

const JOURS=[
 {nom:"Lundi",mat:"m",min:10},
 {nom:"Mardi",mat:"m",min:10},
 {nom:"Mercredi",mat:"v",min:10},
 {nom:"Jeudi",mat:"m",min:10},
 {nom:"Vendredi",mat:"m",min:10},
 {nom:"Week-end",mat:"rev",min:10}
];
const NOM_MAT={m:"Maths in English",v:"Maths words",rev:"Weekly review"};
const PERIODES=["Term 1 — September to October (période 1)","Term 2 — November to December (période 2)","Term 3 — January to February (période 3)","Term 4 — March to April (période 4)","Term 5 — May to July (période 5)"];
function matiereDuJour(sem,jour){return JOURS[jour].mat;}

/* =========================================================
   2. OUTILS
   ========================================================= */
const alea=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const pioche=t=>t[Math.floor(Math.random()*t.length)];
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
const pgcdC=(a,b)=>b?pgcdC(b,a%b):a;
const PRENOMS=["Tom","Emma","Lucas","Chloé","Oliver","Léa","Amelia","Hugo","Jack","Manon","Harry","Inès","Lily","Jules","Noah","Camille","Sophie","Théo","Grace","Louis","Mia","Nathan","Ella","Arthur","Zoe","Raphaël"];
/* Nombres : séparateur des milliers en espace dès 10 000 (pas de virgule, pour ne pas confondre avec la virgule française) */
function fmt(n){const s=String(n);return n>=10000?s.replace(/\B(?=(\d{3})+(?!\d))/g," "):s;}
/* Réponses entières acceptées : 47315, 47 315, 47,315 */
function rep(n){const s=String(n),r=[s];if(n>=1000){r.push(s.replace(/\B(?=(\d{3})+(?!\d))/g," "));r.push(s.replace(/\B(?=(\d{3})+(?!\d))/g,","));}return r;}
/* Décimaux : point anglais, et la virgule acceptée */
const dec=x=>String(+(+x).toFixed(3));
function repDec(x){const s=dec(x);return s.includes(".")?[s,s.replace(".",",")]:[s];}

/* Les nombres en lettres (anglais britannique) */
const UNITES_EN=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
const DIZAINES_EN=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
function enLettres(n){
  if(n<20)return UNITES_EN[n];
  if(n<100)return DIZAINES_EN[Math.floor(n/10)]+(n%10?"-"+UNITES_EN[n%10]:"");
  if(n<1000){const h=Math.floor(n/100),r=n%100;return UNITES_EN[h]+" hundred"+(r?" and "+enLettres(r):"");}
  if(n<1000000){const m=Math.floor(n/1000),r=n%1000;return enLettres(m)+" thousand"+(r?(r<100?" and ":" ")+enLettres(r):"");}
  const m=Math.floor(n/1000000),r=n%1000000;return enLettres(m)+" million"+(r?(r<100?" and ":" ")+enLettres(r):"");
}
const maj=s=>s[0].toUpperCase()+s.slice(1);

/* =========================================================
   3. MATHS IN ENGLISH
   ========================================================= */
const BANQUE_LINES=[
 {q:"Two lines that never meet are…",b:"parallel",f:["perpendicular","curved","equal"],e:"Parallel lines (droites parallèles) never meet, like railway tracks."},
 {q:"Two lines that meet at a right angle are…",b:"perpendicular",f:["parallel","straight","curved"],e:"Perpendicular lines (droites perpendiculaires) make a right angle."},
 {q:"Which tool do you use to check a right angle?",b:"a set square",f:["a compass","a protractor","a calculator"],e:"A set square (une équerre) has a right angle."},
 {q:"A line segment has…",b:"two end points",f:["no end points","one end point","three end points"],e:"A segment (un segment) [AB] goes from A to B."},
 {q:"How many right angles are there where two perpendicular lines cross?",b:"4",f:["1","2","3"],e:"They make 4 right angles."},
 {q:"The opposite sides of a rectangle are…",b:"parallel",f:["perpendicular","curved","different lengths"],e:"Opposite sides of a rectangle are parallel and equal."},
 {q:"Two sides of a rectangle that meet at a corner are…",b:"perpendicular",f:["parallel","equal","curved"],e:"Every corner of a rectangle is a right angle."},
 {q:"The point exactly in the middle of a segment is called its…",b:"midpoint",f:["vertex","centre line","edge"],e:"The midpoint (le milieu) cuts the segment into two equal parts."},
 {q:"Which of these letters has two parallel lines?",b:"H",f:["L","V","O"],e:"The two sides of H are parallel."},
 {q:"Which of these letters has a right angle?",b:"L",f:["O","S","C"],e:"The two lines of L are perpendicular."}
];
const BANQUE_ANGLES=[
 {q:"How many degrees are there in a right angle?",b:"90°",f:["180°","45°","360°"],e:"A right angle (un angle droit) is 90°."},
 {q:"How many degrees are there in a full turn?",b:"360°",f:["180°","90°","100°"],e:"A full turn is 360°."},
 {q:"How many degrees are there in a straight angle (half a turn)?",b:"180°",f:["90°","360°","100°"],e:"A straight angle (un angle plat) is 180°."},
 {q:"An angle smaller than a right angle is…",b:"acute",f:["obtuse","straight","reflex"],e:"Acute (aigu): less than 90°."},
 {q:"An angle between 90° and 180° is…",b:"obtuse",f:["acute","right","full"],e:"Obtuse (obtus): more than 90° and less than 180°."},
 {q:"Which tool measures an angle?",b:"a protractor",f:["a ruler","a compass","a set square"],e:"A protractor (un rapporteur) measures angles in degrees."},
 {q:"What is half of a right angle?",b:"45°",f:["90°","30°","60°"],e:"90 ÷ 2 = 45°."},
 {q:"How many right angles make a full turn?",b:"4",f:["2","3","6"],e:"4 × 90° = 360°."},
 {q:"At 3 o'clock, the hands of a clock make…",b:"a right angle",f:["an obtuse angle","a straight angle","an acute angle"],e:"From 12 to 3 is a quarter turn: 90°."},
 {q:"At 6 o'clock, the hands of a clock make…",b:"a straight angle",f:["a right angle","an acute angle","no angle"],e:"From 12 to 6 is half a turn: 180°."}
];
const BANQUE_POLYGONS=[
 {q:"A polygon with 4 sides is called a…",b:"quadrilateral",f:["pentagon","hexagon","triangle"],e:"Quadri = 4: a quadrilateral (un quadrilatère)."},
 {q:"A triangle with 3 equal sides is…",b:"equilateral",f:["isosceles","right-angled","scalene"],e:"Equilateral (équilatéral): 3 equal sides and 3 equal angles."},
 {q:"A triangle with 2 equal sides is…",b:"isosceles",f:["equilateral","scalene","square"],e:"Isosceles (isocèle): 2 equal sides."},
 {q:"A triangle with a right angle is…",b:"right-angled",f:["equilateral","obtuse","round"],e:"A right-angled triangle (triangle rectangle) has one 90° angle."},
 {q:"A quadrilateral with 4 equal sides and 4 right angles is a…",b:"square",f:["rhombus","rectangle","kite"],e:"A square has 4 equal sides AND 4 right angles."},
 {q:"A quadrilateral with 4 equal sides but no right angle is a…",b:"rhombus",f:["square","rectangle","trapezium"],e:"A rhombus (un losange) has 4 equal sides."},
 {q:"How many sides does an octagon have?",b:"8",f:["6","7","10"],e:"Octo = 8, like an octopus with 8 legs."},
 {q:"How many sides does a hexagon have?",b:"6",f:["5","7","8"],e:"A hexagon (un hexagone) has 6 sides."},
 {q:"How many sides does a pentagon have?",b:"5",f:["4","6","8"],e:"A pentagon (un pentagone) has 5 sides."},
 {q:"The corner of a polygon is called a…",b:"vertex",f:["face","edge","radius"],e:"A vertex (un sommet); the plural is vertices."},
 {q:"A line joining two opposite corners of a quadrilateral is a…",b:"diagonal",f:["radius","side","perimeter"],e:"A diagonal (une diagonale)."},
 {q:"How many diagonals does a rectangle have?",b:"2",f:["1","4","0"],e:"A rectangle has 2 diagonals of the same length."},
 {q:"A quadrilateral with two pairs of parallel sides is a…",b:"parallelogram",f:["triangle","trapezium","kite"],e:"A parallelogram (un parallélogramme) has 2 pairs of parallel sides."}
];
const BANQUE_CIRCLE=[
 {q:"Which tool do you use to draw a circle?",b:"a compass",f:["a set square","a protractor","a ruler"],e:"A compass (un compas) draws circles."},
 {q:"The point in the middle of a circle is the…",b:"centre",f:["radius","diameter","edge"],e:"Every point of the circle is the same distance from the centre (le centre)."},
 {q:"The distance from the centre to the circle is the…",b:"radius",f:["diameter","perimeter","area"],e:"The radius (le rayon)."},
 {q:"A segment across a circle through its centre is a…",b:"diameter",f:["radius","side","vertex"],e:"The diameter (le diamètre) = 2 × radius."},
 {q:"The diameter of a circle is…",b:"twice the radius",f:["half the radius","the same as the radius","three times the radius"],e:"d = 2 × r."},
 {q:"The perimeter of a circle is also called its…",b:"circumference",f:["diameter","radius","area"],e:"The circumference is the length all around the circle."}
];
const BANQUE_SOLIDS=[
 {q:"How many faces does a cuboid have?",b:"6",f:["4","8","12"],e:"A cuboid (un pavé droit) has 6 rectangular faces."},
 {q:"How many edges does a cube have?",b:"12",f:["6","8","10"],e:"A cube has 12 edges (arêtes)."},
 {q:"How many vertices does a cube have?",b:"8",f:["6","12","4"],e:"A cube has 8 vertices (sommets)."},
 {q:"What shape are the faces of a cube?",b:"squares",f:["triangles","circles","pentagons"],e:"A cube has 6 square faces."},
 {q:"A flat pattern that folds into a solid is called a…",b:"net",f:["face","map","plan"],e:"A net (un patron) folds into a 3D shape."},
 {q:"Which solid has one round face and one vertex?",b:"a cone",f:["a cylinder","a sphere","a cube"],e:"A cone (un cône)."},
 {q:"Which solid has two round faces?",b:"a cylinder",f:["a cone","a cube","a pyramid"],e:"A cylinder (un cylindre) has 2 circular faces."},
 {q:"A square-based pyramid has how many faces?",b:"5",f:["4","6","8"],e:"1 square base + 4 triangles = 5 faces."}
];
const BANQUE_SYM=[
 {q:"How many lines of symmetry does a square have?",b:"4",f:["2","1","0"],e:"2 diagonals and 2 lines through the middles of the sides."},
 {q:"How many lines of symmetry does a rectangle (not a square) have?",b:"2",f:["4","1","0"],e:"Only the 2 lines through the middles of the sides."},
 {q:"How many lines of symmetry does an equilateral triangle have?",b:"3",f:["1","2","0"],e:"One through each vertex."},
 {q:"How many lines of symmetry does an isosceles triangle (not equilateral) have?",b:"1",f:["2","3","0"],e:"Just one, through the top vertex."},
 {q:"How many lines of symmetry does a circle have?",b:"infinitely many",f:["1","2","4"],e:"Every diameter is a line of symmetry."},
 {q:"How many lines of symmetry does the capital letter A have?",b:"1",f:["0","2","4"],e:"A vertical line down the middle."},
 {q:"How many lines of symmetry does the capital letter H have?",b:"2",f:["0","1","4"],e:"A vertical line and a horizontal line."},
 {q:"How many lines of symmetry does the capital letter F have?",b:"0",f:["1","2","3"],e:"F looks different whichever way you fold it."},
 {q:"Which capital letter has a horizontal line of symmetry?",b:"E",f:["A","F","L"],e:"The top and bottom halves of E match."},
 {q:"A line of symmetry is like a…",b:"mirror",f:["ruler","clock","compass"],e:"Each half is the reflection (le reflet) of the other."},
 {q:"How many lines of symmetry does a regular hexagon have?",b:"6",f:["3","4","8"],e:"A regular polygon with n sides has n lines of symmetry."}
];
const CHOSES=["sweets","stickers","marbles","cards","books","pencils","apples","eggs"];

const GM={
  placevalue(){const t=alea(1,4);
    if(t===1){const n=alea(100000,999999);const pos=pioche([["thousands",1000],["ten thousands",10000],["hundreds",100],["hundred thousands",100000]]);
      return qcmChiffres(`In ${fmt(n)}, which digit is in the ${pos[0]} place?`,Math.floor(n/pos[1])%10,`${fmt(n)}: the ${pos[0]} digit is ${Math.floor(n/pos[1])%10}.`);}
    if(t===2){const m=alea(1,99),c=alea(1,9),d=alea(0,9),u=alea(1,9),n=m*1000+c*100+d*10+u;
      return saisie(`Write in figures: ${m} thousand, ${c} hundreds, ${d} tens and ${u} ones`,rep(n),`${m} × 1000 + ${c} × 100 + ${d} × 10 + ${u} = ${fmt(n)}.`);}
    if(t===3){const n=alea(10000,99999),k=pioche([1,10,100,1000]),dg=Math.floor(n/k)%10;
      if(dg===0)return GM.placevalue();
      return qcm(`What is the value of the digit ${dg} in ${fmt(n)}? (the digit at the ${({1:"ones",10:"tens",100:"hundreds",1000:"thousands"})[k]} place)`,fmt(dg*k),[1,10,100,1000,10000].filter(x=>x!==k).map(x=>fmt(dg*x)).slice(0,3),`It is in the ${({1:"ones",10:"tens",100:"hundreds",1000:"thousands"})[k]} place, so it is worth ${fmt(dg*k)}.`);}
    const n=alea(1000,99999),k=pioche([1000,10000]);return saisie(`What is ${fmt(n)} + ${fmt(k)}?`,rep(n+k),`Add 1 to the ${k===1000?"thousands":"ten thousands"} digit: ${fmt(n+k)}.`);},
  round(){const t=alea(1,3);
    if(t===1){const n=alea(1001,9999),k=pioche([10,100,1000]),r=Math.round(n/k)*k;
      return saisie(`Round ${n} to the nearest ${k}.`,rep(r),`Look at the digit after the ${({10:"tens",100:"hundreds",1000:"thousands"})[k]}: 5 or more, round up; less than 5, round down. ${n} → ${r}.`);}
    if(t===2){let a=alea(10000,99999),b=alea(10000,99999);if(a===b)b++;
      return qcm(`Which number is greater: ${fmt(a)} or ${fmt(b)}?`,fmt(Math.max(a,b)),[fmt(Math.min(a,b))],`Compare digit by digit from the left: ${fmt(Math.max(a,b))} > ${fmt(Math.min(a,b))}.`);}
    const l=melange([alea(1000,9999),alea(1000,9999),alea(1000,9999)]);if(new Set(l).size<3)return GM.round();
    const asc=[...l].sort((x,y)=>x-y);
    return qcm(`Put in ascending order (smallest first): ${l.join(", ")}`,asc.join(" ; "),[[...asc].reverse().join(" ; "),[asc[1],asc[0],asc[2]].join(" ; "),[asc[0],asc[2],asc[1]].join(" ; ")],`Ascending order (ordre croissant) starts with the smallest: ${asc.join(" < ")}.`);},
  addsub(){
    if(alea(0,1)){const a=alea(1200,8800),b=alea(150,999+Math.min(9999-a-1000,4000));return saisie(`What is ${a} + ${b}?`,rep(a+b),`${a} + ${b} = ${a+b}. Line up the digits and carry when you need to.`);}
    const a=alea(3000,9800),b=alea(400,2900);return saisie(`What is ${a} − ${b}?`,rep(a-b),`${a} − ${b} = ${a-b}. Check: ${a-b} + ${b} = ${a}.`);},
  tables(){const t=alea(1,3);
    if(t===1){const a=alea(3,12),b=alea(3,12);return saisie(`What is ${a} × ${b}?`,rep(a*b),`${a} × ${b} = ${a*b}.`);}
    if(t===2){const k=alea(3,9),m=k*alea(3,10);const fa=[];while(fa.length<3){const x=alea(10,90);if(x%k&&!fa.includes(x))fa.push(x);}
      return qcm(`Which number is a multiple of ${k}?`,String(m),fa.map(String),`${m} = ${k} × ${m/k}, so ${m} is in the ${k} times table.`);}
    const a=alea(3,12),b=alea(3,12);return saisie(`${a} × ? = ${a*b}`,[String(b)],`${a} × ${b} = ${a*b}.`);},
  mult(){const t=alea(1,3);
    if(t===1){const a=alea(12,999),m=pioche([10,100,1000]);return saisie(`What is ${a} × ${m}?`,rep(a*m),`Multiplying by ${m}: each digit moves ${String(m).length-1} place(s) to the left: ${fmt(a*m)}.`);}
    if(t===2){const a=alea(12,99),b=alea(12,49);return saisie(`What is ${a} × ${b}?`,rep(a*b),`${a} × ${b} = ${a} × ${Math.floor(b/10)*10} + ${a} × ${b%10} = ${a*Math.floor(b/10)*10} + ${a*(b%10)} = ${a*b}.`);}
    const a=alea(105,899),b=alea(3,9);return saisie(`What is ${a} × ${b}?`,rep(a*b),`${a} × ${b} = ${a*b}.`);},
  lines(){return parTag(BANQUE_LINES.map(x=>({...x,t:"s"})),"s");},
  division(){const b=alea(3,9),q=alea(11,60),r=alea(0,b-1),a=b*q+r;const t=alea(1,3);
    if(t===1)return saisie(`Divide ${a} by ${b}. What is the quotient?`,[String(q)],`${a} = ${b} × ${q} + ${r}. The quotient (le quotient) is ${q}.`);
    if(t===2)return saisie(`Divide ${a} by ${b}. What is the remainder?`,[String(r)],`${a} = ${b} × ${q} + ${r}. The remainder (le reste) is ${r}, smaller than ${b}.`);
    const k=alea(3,8),n=alea(5,15),p=pioche(PRENOMS);
    return saisie(`${p} shares ${k*n} ${pioche(CHOSES)} equally between ${k} friends. How many does each friend get?`,[String(n)],`${k*n} ÷ ${k} = ${n}.`);},
  factors(){const t=alea(1,3);
    if(t===1){const n=pioche([12,18,20,24,30,36,40,42,48,56,60,72]);const fs=[];for(let i=2;i<n;i++)if(n%i===0)fs.push(i);
      const ok=pioche(fs);const fa=[];for(let i=2;i<n&&fa.length<10;i++)if(n%i)fa.push(i);
      return qcm(`Which number is a factor of ${n}?`,String(ok),melange(fa).slice(0,3).map(String),`${n} ÷ ${ok} = ${n/ok}, so ${ok} is a factor (un diviseur) of ${n}.`);}
    if(t===2){const k=pioche([2,5,10,3]),n=alea(101,999);const yes=n%k===0;
      const rule={2:"its last digit is even (0, 2, 4, 6, 8)",5:"its last digit is 0 or 5",10:"its last digit is 0",3:"the sum of its digits is a multiple of 3"}[k];
      return qcm(`Is ${n} divisible by ${k}?`,yes?"yes":"no",[yes?"no":"yes"],`A number is divisible by ${k} if ${rule}. ${n} ÷ ${k} ${yes?"= "+n/k:"leaves a remainder of "+n%k}.`);}
    const pr=pioche([2,3,5,7,11,13,17,19,23,29,31,37]);const fa=melange([4,6,8,9,10,12,14,15,16,18,20,21,22,25,27]).slice(0,3);
    return qcm(`Which of these is a prime number?`,String(pr),fa.map(String),`A prime number (nombre premier) has exactly two factors: 1 and itself. ${pr} is prime.`);},
  fractions(){const t=alea(1,4);
    if(t===1){const d=alea(3,9),n=alea(1,d-1);return qcmChiffres(`In the fraction ${n}/${d}, what is the denominator?`,d,`The denominator (le dénominateur) is the bottom number: ${d}. The numerator is ${n}.`);}
    if(t===2){const d=alea(3,9),n=alea(1,d-1);return qcmChiffres(`In the fraction ${n}/${d}, what is the numerator?`,n,`The numerator (le numérateur) is the top number: ${n}.`);}
    if(t===3){const d=pioche([4,6,8,10,12]),n=alea(1,d-1),p=pioche(PRENOMS);
      return saisie(`A pizza is cut into ${d} equal slices. ${p} eats ${n} slices. What fraction of the pizza does ${p} eat? (write it like 2/5)`,[`${n}/${d}`],`${n} slices out of ${d}: ${n}/${d}.`);}
    const k=pioche([["one half","1/2"],["one third","1/3"],["one quarter","1/4"],["three quarters","3/4"],["two thirds","2/3"],["one tenth","1/10"]]);
    return qcm(`Which fraction is ${k[0]}?`,k[1],["1/2","1/3","1/4","3/4","2/3","1/10"].filter(x=>x!==k[1]).slice(0,3),`${maj(k[0])} = ${k[1]}.`);},
  fracof(){const d=pioche([2,3,4,5,10]),n=pioche([1,2,3,4,5,6,7,8,9].filter(x=>x<d&&pgcdC(x,d)===1)),q=d*alea(2,12);
    if(alea(0,1))return saisie(`What is ${n}/${d} of ${q}?`,[String(q*n/d)],`Divide by ${d}: ${q} ÷ ${d} = ${q/d}. Then multiply by ${n}: ${q/d} × ${n} = ${q*n/d}.`);
    const p=pioche(PRENOMS);return saisie(`There are ${q} children in a club. ${n}/${d} of them are girls. How many girls are there?`,[String(q*n/d)],`${q} ÷ ${d} = ${q/d}, then × ${n} = ${q*n/d} girls.`);},
  fraceq(){const t=alea(1,3);
    if(t===1){const n=alea(1,4),d=n+alea(1,5),k=alea(2,5);return saisie(`Complete: ${n}/${d} = ?/${d*k}`,[String(n*k)],`${d} × ${k} = ${d*k}, so multiply the top by ${k} too: ${n} × ${k} = ${n*k}.`);}
    if(t===2){const b=pioche([["1/2",["2/4","3/6","5/10","4/8"],["1/3","2/5","3/4","2/3"]],["1/3",["2/6","3/9","4/12"],["1/2","2/3","3/6","1/4"]],["1/4",["2/8","3/12","5/20"],["2/4","1/3","4/1","1/8"]],["3/4",["6/8","9/12","15/20"],["3/8","4/3","2/4","1/4"]]]);
      return qcm(`Which fraction is equivalent to ${b[0]}?`,pioche(b[1]),melange(b[2]).slice(0,3),`Equivalent fractions (fractions égales): multiply the top and the bottom by the same number.`);}
    const d=pioche([5,6,7,8,9,10]);let a=alea(1,d-1),b=alea(1,d-1);if(a===b)b=a===1?2:a-1;
    return qcm(`Which is greater: ${a}/${d} or ${b}/${d}?`,`${Math.max(a,b)}/${d}`,[`${Math.min(a,b)}/${d}`,"they are equal"],`Same denominator: compare the numerators. ${Math.max(a,b)} > ${Math.min(a,b)}.`);},
  decimals(){const t=alea(1,4);
    if(t===1){const n=+(alea(100,999)/100).toFixed(2);const pl=pioche(["tenths","hundredths"]);const dg=pl==="tenths"?Math.floor(Math.round(n*100)/10)%10:Math.round(n*100)%10;
      return qcmChiffres(`In ${dec(n)}, which digit is in the ${pl} place?`,dg,`${dec(n)}: the first digit after the decimal point is the tenths (dixièmes), the second is the hundredths (centièmes).`);}
    if(t===2){const n=alea(1,9);return saisie(`Write ${n}/10 as a decimal.`,repDec(n/10),`${n} tenths = 0.${n}. In English we write a decimal point: 0.${n} (« zéro virgule ${n} »).`);}
    if(t===3){const n=alea(11,99);return saisie(`Write ${n}/100 as a decimal.`,repDec(n/100),`${n} hundredths = ${dec(n/100)}.`);}
    const a=alea(1,9)/10,b=alea(11,99)/100;if(Math.abs(a-b)<1e-9)return GM.decimals();
    return qcm(`Which is greater: ${dec(a)} or ${dec(b)}?`,dec(Math.max(a,b)),[dec(Math.min(a,b))],`Compare the tenths first. ${dec(a)} = ${Math.round(a*100)} hundredths and ${dec(b)} = ${Math.round(b*100)} hundredths. More digits does not mean bigger!`);},
  adddec(){const a=alea(15,900)/10,b=alea(15,900)/100;
    if(alea(0,1))return saisie(`What is ${dec(a)} + ${dec(b)}?`,repDec(a+b),`Line up the decimal points: ${dec(a)} + ${dec(b)} = ${dec(a+b)}.`);
    const x=alea(500,999)/10,y=alea(15,450)/100;return saisie(`What is ${dec(x)} − ${dec(y)}?`,repDec(x-y),`Line up the decimal points (add a 0 if needed): ${dec(x)} − ${dec(y)} = ${dec(x-y)}.`);},
  multdec(){const t=alea(1,3);
    if(t===1){const a=alea(11,999)/10,m=pioche([10,100]);return saisie(`What is ${dec(a)} × ${m}?`,repDec(a*m),`× ${m}: the digits move ${m===10?"1 place":"2 places"} to the left: ${dec(a*m)}.`);}
    if(t===2){const a=alea(11,999),m=pioche([10,100]);return saisie(`What is ${a} ÷ ${m}?`,repDec(a/m),`÷ ${m}: the digits move ${m===10?"1 place":"2 places"} to the right: ${dec(a/m)}.`);}
    let a=alea(11,99)/10;if(Math.round(a*10)%10===0)a+=0.3;const b=alea(3,9);return saisie(`What is ${dec(a)} × ${b}?`,repDec(a*b),`${Math.round(a*10)} × ${b} = ${Math.round(a*10)*b}, then divide by 10: ${dec(a*b)}.`);},
  measures(){const t=alea(1,5);
    if(t===1){const k=alea(2,9),m=alea(1,9)*100;return saisie(`How many metres are there in ${k} km ${m} m?`,rep(k*1000+m),`1 km = 1000 m, so ${k} km ${m} m = ${k*1000+m} m.`);}
    if(t===2){const k=alea(11,95)/10;return saisie(`How many grams are there in ${dec(k)} kg?`,rep(Math.round(k*1000)),`1 kg = 1000 g, so ${dec(k)} kg = ${Math.round(k*1000)} g.`);}
    if(t===3){const l=alea(2,9);return saisie(`How many millilitres are there in ${l} litres?`,rep(l*1000),`1 litre = 1000 ml, so ${l} l = ${l*1000} ml.`);}
    if(t===4){const c=alea(3,95);return saisie(`How many millimetres are there in ${c} cm?`,rep(c*10),`1 cm = 10 mm, so ${c} cm = ${c*10} mm.`);}
    const m=alea(150,950);return saisie(`Convert ${m} cm into metres.`,repDec(m/100),`100 cm = 1 m, so ${m} cm = ${dec(m/100)} m.`);},
  time(){const t=alea(1,4);
    if(t===1){const h=alea(1,11);return qcm(`What is ${h} p.m. on the 24-hour clock?`,`${h+12}:00`,[`${h}:00`,`${h+10}:00`,`${h+2}:00`].filter(x=>x!==`${h+12}:00`),`p.m. means after midday: add 12. ${h} + 12 = ${h+12}.`);}
    if(t===2){const h=alea(8,18),m=pioche([5,10,15,20,25,35,40,45,50]),d=alea(25,110);const tot=h*60+m+d,fh=Math.floor(tot/60),fm=String(tot%60).padStart(2,"0");
      return saisie(`A film starts at ${h}:${String(m).padStart(2,"0")} and lasts ${d} minutes. What time does it end? (write it like 14:30)`,[`${fh}:${fm}`,`${fh}h${fm}`,`${fh} h ${fm}`,`${fh}.${fm}`,`0${fh}:${fm}`],`${d} minutes = ${Math.floor(d/60)} h ${d%60} min. ${h}:${String(m).padStart(2,"0")} + ${d} min = ${fh}:${fm}.`);}
    if(t===3){const h=alea(2,5);return saisie(`How many minutes are there in ${h} and a half hours?`,[String(h*60+30)],`${h} × 60 = ${h*60}, plus 30 = ${h*60+30} minutes.`);}
    return pioche([
      ()=>qcm(`How many seconds are there in one minute?`,"60",["100","30","24"],`1 minute = 60 seconds (secondes).`),
      ()=>qcm(`How many hours are there in one day?`,"24",["12","60","100"],`1 day = 24 hours.`),
      ()=>qcm(`What time is midnight on the 24-hour clock?`,"00:00",["12:00","24:30","06:00"],`Midnight (minuit) is 00:00; midday (midi) is 12:00.`),
      ()=>qcm(`Which is the same as 18:45?`,"quarter to seven in the evening",["quarter past six in the evening","quarter to six in the morning","quarter past seven in the evening"],`18:45 = 6:45 p.m. = quarter to seven.`)])();},
  perimeter(){const t=alea(1,3);
    if(t===1){const L=alea(5,25),l=alea(3,L-1);return saisie(`A rectangle is ${L} cm long and ${l} cm wide. What is its perimeter? (in cm)`,[String(2*(L+l)),`${2*(L+l)} cm`],`Perimeter = 2 × (${L} + ${l}) = ${2*(L+l)} cm.`);}
    if(t===2){const c=alea(3,25);return saisie(`A square has sides of ${c} cm. What is its perimeter? (in cm)`,[String(4*c),`${4*c} cm`],`Perimeter = 4 × ${c} = ${4*c} cm.`);}
    const k=pioche([[5,"pentagon"],[6,"hexagon"],[8,"octagon"],[3,"equilateral triangle"]]),c=alea(2,12);
    return saisie(`A regular ${k[1]} has sides of ${c} cm. What is its perimeter? (in cm)`,[String(k[0]*c),`${k[0]*c} cm`],`A ${k[1]} has ${k[0]} equal sides: ${k[0]} × ${c} = ${k[0]*c} cm.`);},
  area(){const t=alea(1,3);
    if(t===1){const L=alea(4,15),l=alea(2,L);return saisie(`What is the area of a rectangle ${L} cm long and ${l} cm wide? (in cm²)`,[String(L*l),`${L*l} cm²`],`Area = length × width = ${L} × ${l} = ${L*l} cm².`);}
    if(t===2){const c=alea(2,12);return saisie(`What is the area of a square with sides of ${c} m? (in m²)`,[String(c*c),`${c*c} m²`],`Area = side × side = ${c} × ${c} = ${c*c} m².`);}
    const L=alea(4,12),l=alea(2,9);return saisie(`A rectangle has an area of ${L*l} cm². Its length is ${L} cm. What is its width? (in cm)`,[String(l),`${l} cm`],`${L} × ? = ${L*l}, so the width is ${L*l} ÷ ${L} = ${l} cm.`);},
  angles(){if(alea(0,2))return parTag(BANQUE_ANGLES.map(x=>({...x,t:"s"})),"s");
    const a=pioche([alea(10,85),alea(95,175),90,180]);const k=a<90?"acute":a===90?"right":a<180?"obtuse":"straight";
    return qcm(`An angle of ${a}° is…`,k,["acute","right","obtuse","straight"].filter(x=>x!==k),`Acute < 90°, right = 90°, obtuse between 90° and 180°, straight = 180°.`);},
  polygons(){return parTag(BANQUE_POLYGONS.map(x=>({...x,t:"s"})),"s");},
  circle(){if(alea(0,1))return parTag(BANQUE_CIRCLE.map(x=>({...x,t:"s"})),"s");
    const r=alea(2,25);return alea(0,1)?saisie(`A circle has a radius of ${r} cm. What is its diameter? (in cm)`,[String(2*r),`${2*r} cm`],`Diameter = 2 × radius = 2 × ${r} = ${2*r} cm.`)
                                       :saisie(`A circle has a diameter of ${2*r} cm. What is its radius? (in cm)`,[String(r),`${r} cm`],`Radius = diameter ÷ 2 = ${2*r} ÷ 2 = ${r} cm.`);},
  proportion(){const t=alea(1,3);
    if(t===1){const p=alea(2,9),q=alea(2,6),n=alea(3,10);if(n===q)return GM.proportion();return saisie(`${q} pens cost £${q*p}. How much do ${n} pens cost? (in pounds)`,[String(n*p),`£${n*p}`],`One pen costs £${q*p} ÷ ${q} = £${p}. So ${n} pens cost ${n} × £${p} = £${n*p}.`);}
    if(t===2){const g=pioche([100,150,200,250]),n=pioche([2,3]);return saisie(`A recipe for 4 people uses ${g} g of flour. How much flour do you need for ${4*n} people? (in g)`,[String(g*n),`${g*n} g`],`${4*n} people is ${n} times as many, so ${n} × ${g} = ${g*n} g.`);}
    const s=pioche([2,3,4,5]),d=alea(2,9);return saisie(`On a map, 1 cm stands for ${s} km. Two towns are ${d} cm apart on the map. How far apart are they really? (in km)`,[String(s*d),`${s*d} km`],`${d} × ${s} = ${s*d} km.`);},
  percent(){const t=alea(1,3);
    if(t===1){const p=pioche([10,25,50,75]),v=alea(2,25)*4;return saisie(`What is ${p}% of ${v}?`,repDec(v*p/100),`${p}% means ${p} out of 100. ${p}% of ${v} = ${v} × ${p} ÷ 100 = ${dec(v*p/100)}.`);}
    if(t===2){const k=pioche([["50%","1/2"],["25%","1/4"],["75%","3/4"],["10%","1/10"]]);return qcm(`${k[0]} is the same as which fraction?`,k[1],["1/2","1/4","3/4","1/10","1/5"].filter(x=>x!==k[1]).slice(0,3),`${k[0]} = ${parseInt(k[0])}/100 = ${k[1]}.`);}
    const pr=alea(2,12)*10;return saisie(`A jumper costs £${pr}. There is a 10% discount. How much is the discount? (in pounds)`,[String(pr/10),`£${pr/10}`],`10% of £${pr} = £${pr} ÷ 10 = £${pr/10}.`);},
  problems(){const t=alea(1,4),p=pioche(PRENOMS);
    if(t===1){const n=alea(3,8),pr=alea(3,15),c=pioche([50,100]);if(n*pr>=c)return GM.problems();return saisie(`${p} buys ${n} books at £${pr} each and pays with £${c}. How much change does ${p} get? (in pounds)`,[String(c-n*pr),`£${c-n*pr}`],`${n} × £${pr} = £${n*pr}, then £${c} − £${n*pr} = £${c-n*pr}.`);}
    if(t===2){const b=alea(4,9),r=alea(12,30);return saisie(`A school has ${b} buses. Each bus carries ${r} children. ${alea(5,11)} children walk. How many children ride on the buses?`,rep(b*r),`Only the buses count here: ${b} × ${r} = ${b*r} children.`);}
    if(t===3){const k=alea(3,8),q=alea(5,12),r=alea(1,k-1),n=k*q+r;return saisie(`${n} children need tents. Each tent sleeps ${k} children. How many tents are needed?`,[String(q+1)],`${n} ÷ ${k} = ${q} remainder ${r}: ${q} tents are full, and 1 more tent is needed for the last ${r===1?"child":r+" children"}. Answer: ${q+1}.`);}
    const a=alea(120,480),b=alea(60,200),c=alea(30,100);return saisie(`A farmer has ${a} hens. She buys ${b} more and then sells ${c}. How many hens does she have now?`,rep(a+b-c),`${a} + ${b} = ${a+b}, then ${a+b} − ${c} = ${a+b-c}.`);},
  volume(){if(alea(0,1))return parTag(BANQUE_SOLIDS.map(x=>({...x,t:"s"})),"s");
    const a=alea(2,8),b=alea(2,8),c=alea(2,6);return saisie(`A cuboid is ${a} cm long, ${b} cm wide and ${c} cm high. What is its volume? (in cm³)`,[String(a*b*c),`${a*b*c} cm³`],`Volume = length × width × height = ${a} × ${b} × ${c} = ${a*b*c} cm³.`);},
  symmetry(){return parTag(BANQUE_SYM.map(x=>({...x,t:"s"})),"s");},
  data(){const t=alea(1,3),j=["Monday","Tuesday","Wednesday","Thursday"];
    if(t===1){let v=[alea(2,15),alea(2,15),alea(2,15)];const s=v[0]+v[1]+v[2];v.push(4*Math.ceil((s+2)/4)-s);
      if(v[3]<1)v[3]+=4;const tot=v.reduce((x,y)=>x+y,0);
      return saisie(`${pioche(PRENOMS)} scores ${v.join(", ")} in four games. What is the mean (average) score?`,[String(tot/4)],`Mean (la moyenne) = total ÷ number of values = ${tot} ÷ 4 = ${tot/4}.`);}
    if(t===2){const v=j.map(()=>alea(5,30));return saisie(`Books borrowed: ${j.map((d,i)=>d+" "+v[i]).join(", ")}. What is the total?`,[String(v.reduce((x,y)=>x+y,0))],`${v.join(" + ")} = ${v.reduce((x,y)=>x+y,0)}.`);}
    const v=j.map(()=>alea(5,30));const mx=Math.max(...v);if(v.filter(x=>x===mx).length>1)return GM.data();
    return qcm(`Ice creams sold: ${j.map((d,i)=>d+" "+v[i]).join(", ")}. On which day were the most ice creams sold?`,j[v.indexOf(mx)],j.filter((d,i)=>v[i]!==mx),`The biggest number is ${mx}, on ${j[v.indexOf(mx)]}.`);},
  money(){const t=alea(1,3);
    if(t===1){const c=pioche([5,10,20]),pc=alea(105,c*100-5),pr=pc/100,ch=(c*100-pc)/100;return saisie(`You pay for a £${pr.toFixed(2)} cake with a £${c} note. How much change do you get? (in pounds)`,[...new Set(repDec(ch).concat(repDec(ch).map(x=>"£"+x),[ch.toFixed(2),"£"+ch.toFixed(2)]))],`£${c}.00 − £${pr.toFixed(2)} = £${ch.toFixed(2)}.`);}
    if(t===2){const a=alea(2,5),b=a*2,ua=alea(15,40),ub=ua+pioche([-3,-2,-1,1,2,3]),pa=a*ua,pb=b*ub;return qcm(`Pack A: ${a} yoghurts for ${pa}p. Pack B: ${b} yoghurts for ${pb}p. Which is the better buy?`,ua<ub?"Pack A":"Pack B",[ua<ub?"Pack B":"Pack A","they are the same"],`One yoghurt costs ${pa} ÷ ${a} = ${ua}p in pack A and ${pb} ÷ ${b} = ${ub}p in pack B. The cheaper (moins cher) one is the better buy.`);}
    const n=alea(3,9),pr=alea(15,95);return saisie(`One pencil costs ${pr}p. How much do ${n} pencils cost? (in pence)`,[String(n*pr),`${n*pr}p`,`${n*pr} p`],`${n} × ${pr} = ${n*pr}p${n*pr>=100?` = £${(n*pr/100).toFixed(2)}`:""}.`);},
  mentalw(){const t=alea(1,4);
    if(t===1){const a=alea(12,89);return saisie(`What is ${a} × 9? (tip: × 10, then take away ${a})`,rep(a*9),`${a} × 10 = ${a*10}, then ${a*10} − ${a} = ${a*9}.`);}
    if(t===2){const a=alea(12,48)*2;return saisie(`What is ${a} × 5? (tip: × 10, then halve)`,rep(a*5),`${a} × 10 = ${a*10}, half of ${a*10} is ${a*5}.`);}
    if(t===3){const a=alea(4,40)*4;return saisie(`What is ${a} × 25? (tip: × 100, then divide by 4)`,rep(a*25),`${a} × 100 = ${a*100}, ÷ 4 = ${a*25}.`);}
    const a=alea(21,79),b=alea(21,79),ea=Math.round(a/10)*10,eb=Math.round(b/10)*10;
    return qcm(`Estimate ${a} + ${b} by rounding each number to the nearest 10.`,String(ea+eb),[String(ea+eb+10),String(ea+eb-10),String(ea+eb+20)],`${a} ≈ ${ea} and ${b} ≈ ${eb}, so about ${ea+eb}. (Exact answer: ${a+b}.)`);}
};
const REVUES={
  rev1:["placevalue","round","addsub","tables","mult","lines"],
  rev2:["division","factors","fractions","fracof","fraceq","decimals"],
  rev3:["adddec","multdec","measures","time","perimeter","area"],
  rev4:["angles","polygons","circle","proportion","percent","problems"],
  rev5:["fractions","fracof","fraceq","decimals","adddec","multdec","percent"],
  rev6:["placevalue","mult","division","fracof","adddec","measures","area","problems"],
  rev7:["round","factors","fraceq","multdec","time","angles","proportion","volume","data","money"]
};
function exoMaths(tag){
  if(REVUES[tag])tag=pioche(REVUES[tag]);
  const f=GM[tag]||GM[pioche(Object.keys(GM))];return f();
}

const dixiemes=x=>{const k=Math.round(x*10);return `${k} tenth${k>1?"s":""}`;};
/* Le petit calcul du début (mental maths) */
function mental(semaine){
  const types=["x","x","comp","add9","div"];if(semaine>=13)types.push("dec");if(semaine>=10)types.push("half");if(semaine>=5)types.push("x10");
  const t=pioche(types);
  if(t==="x"){const a=alea(3,12),b=alea(3,12);return saisie(`Mental maths: what is ${a} times ${b}?`,[String(a*b)],`${a} × ${b} = ${a*b}.`);}
  if(t==="comp"){const n=alea(11,89);return saisie(`Mental maths: what must you add to ${n} to make 100?`,[String(100-n)],`${n} + ${100-n} = 100.`);}
  if(t==="add9"){const a=alea(25,190);return alea(0,1)?saisie(`Mental maths: what is ${a} + 9?`,[String(a+9)],`Add 10, then take away 1: ${a+10} − 1 = ${a+9}.`)
                                            :saisie(`Mental maths: what is ${a} − 11?`,[String(a-11)],`Take away 10, then 1 more: ${a-10} − 1 = ${a-11}.`);}
  if(t==="div"){const b=alea(3,9),q=alea(3,12);return saisie(`Mental maths: what is ${b*q} divided by ${b}?`,[String(q)],`${b*q} ÷ ${b} = ${q}, because ${b} × ${q} = ${b*q}.`);}
  if(t==="dec"){const a=alea(1,9)/10,b=alea(1,9)/10;return saisie(`Mental maths: what is ${dec(a)} + ${dec(b)}?`,repDec(a+b),`${dixiemes(a)} + ${dixiemes(b)} = ${dixiemes(a+b)} = ${dec(a+b)}.`);}
  if(t==="half"){const a=alea(11,99)*2;return saisie(`Mental maths: what is half of ${a}?`,[String(a/2)],`Half of ${a} is ${a/2}.`);}
  const a=alea(3,99),m=pioche([10,100]);return saisie(`Mental maths: what is ${a} × ${m}?`,rep(a*m),`${a} × ${m} = ${a*m}.`);
}

/* =========================================================
   4. MATHS WORDS (vocabulaire)
   ========================================================= */
const MOTS=[
 ["place","digit","un chiffre"],["place","number","un nombre"],["place","place value","la valeur d'un chiffre"],["place","thousand","mille"],["place","million","un million"],["place","ones","les unités"],["place","tens","les dizaines"],["place","hundreds","les centaines"],
 ["compare","greater than","supérieur à"],["compare","less than","inférieur à"],["compare","round","arrondir"],["compare","nearest","le plus proche"],["compare","estimate","estimer"],["compare","ascending order","l'ordre croissant"],["compare","descending order","l'ordre décroissant"],["compare","halve","diviser par deux"],
 ["addsub","sum","la somme"],["addsub","difference","la différence"],["addsub","carry","la retenue"],["addsub","column","une colonne"],["addsub","total","le total"],["addsub","subtract","soustraire"],
 ["mult","product","le produit"],["mult","multiple","un multiple"],["mult","times table","une table de multiplication"],["mult","multiply","multiplier"],["mult","square number","un nombre carré"],
 ["lines","straight line","une droite"],["lines","parallel","parallèle"],["lines","perpendicular","perpendiculaire"],["lines","set square","une équerre"],["lines","ruler","une règle"],["lines","segment","un segment"],["lines","midpoint","le milieu"],
 ["division","divide","diviser"],["division","quotient","le quotient"],["division","remainder","le reste"],["division","divisible by","divisible par"],["division","factor","un diviseur"],["division","prime number","un nombre premier"],
 ["fractions","fraction","une fraction"],["fractions","numerator","le numérateur"],["fractions","denominator","le dénominateur"],["fractions","half","une moitié"],["fractions","third","un tiers"],["fractions","quarter","un quart"],["fractions","equivalent","équivalent"],["fractions","simplify","simplifier"],
 ["decimals","decimal point","la virgule"],["decimals","tenth","un dixième"],["decimals","hundredth","un centième"],["decimals","decimal number","un nombre décimal"],["decimals","whole number","un nombre entier"],
 ["measures","length","la longueur"],["measures","mass","la masse"],["measures","capacity","la contenance"],["measures","kilometre","un kilomètre"],["measures","millimetre","un millimètre"],["measures","gram","un gramme"],["measures","millilitre","un millilitre"],["measures","convert","convertir"],["measures","weigh","peser"],
 ["time","second","une seconde"],["time","duration","une durée"],["time","midday","midi"],["time","midnight","minuit"],["time","a.m.","du matin (avant midi)"],["time","p.m.","de l'après-midi (après midi)"],["time","century","un siècle"],
 ["area","area","l'aire"],["area","perimeter","le périmètre"],["area","width","la largeur"],["area","square centimetre","un centimètre carré"],["area","square metre","un mètre carré"],["area","side","un côté"],
 ["angles","angle","un angle"],["angles","right angle","un angle droit"],["angles","acute","aigu"],["angles","obtuse","obtus"],["angles","degree","un degré"],["angles","protractor","un rapporteur"],["angles","straight angle","un angle plat"],
 ["polygons","polygon","un polygone"],["polygons","quadrilateral","un quadrilatère"],["polygons","isosceles","isocèle"],["polygons","equilateral","équilatéral"],["polygons","vertex","un sommet"],["polygons","diagonal","une diagonale"],["polygons","rhombus","un losange"],["polygons","right-angled triangle","un triangle rectangle"],
 ["circle","circle","un cercle"],["circle","centre","le centre"],["circle","radius","le rayon"],["circle","diameter","le diamètre"],["circle","compass","un compas"],
 ["proportion","percent","pour cent"],["proportion","percentage","un pourcentage"],["proportion","discount","une réduction"],["proportion","scale","une échelle"],["proportion","recipe","une recette"],["proportion","proportional","proportionnel"],
 ["problems","step","une étape"],["problems","solve","résoudre"],["problems","data","les données"],["problems","answer","la réponse"],["problems","check","vérifier"],
 ["solids","cube","un cube"],["solids","cuboid","un pavé droit"],["solids","face","une face"],["solids","edge","une arête"],["solids","volume","le volume"],["solids","net","un patron"],["solids","cylinder","un cylindre"],["solids","sphere","une boule (sphère)"],
 ["symmetry","line of symmetry","un axe de symétrie"],["symmetry","mirror","un miroir"],["symmetry","reflection","le reflet"],["symmetry","symmetrical","symétrique"],
 ["data","table","un tableau"],["data","bar chart","un diagramme en barres"],["data","pie chart","un diagramme circulaire"],["data","mean","la moyenne"],["data","graph","un graphique"],
 ["money","price","le prix"],["money","cost","coûter"],["money","change","la monnaie rendue"],["money","cheaper","moins cher"],["money","pound","une livre (£)"],["money","penny","un penny (centime anglais)"]
].map(([t,en,fr])=>({t,en,fr}));
const PHRASES=[
 {t:"place",s:"In 5 382, the ___ 3 is worth 300.",b:"digit",f:["number","angle","total"],e:"A digit (un chiffre) is one of 0 to 9."},
 {t:"place",s:"One thousand thousands make one ___.",b:"million",f:["hundred","thousand","billion"],e:"1000 × 1000 = 1 000 000: one million."},
 {t:"compare",s:"47 is ___ 74, so we write 47 < 74.",b:"less than",f:["greater than","equal to","the same as"],e:"< means less than (inférieur à)."},
 {t:"compare",s:"3 487 ___ to the nearest hundred is 3 500.",b:"rounded",f:["divided","multiplied","measured"],e:"To round (arrondir)."},
 {t:"compare",s:"2, 5, 9, 14 are in ___ order.",b:"ascending",f:["descending","random","alphabetical"],e:"Ascending (croissant): from smallest to biggest."},
 {t:"addsub",s:"The ___ of 6 and 4 is 10.",b:"sum",f:["difference","product","quotient"],e:"The sum (la somme) is the answer to an addition."},
 {t:"addsub",s:"The ___ between 9 and 4 is 5.",b:"difference",f:["sum","product","total"],e:"The difference (la différence) is the answer to a subtraction."},
 {t:"addsub",s:"8 + 5 = 13: write 3 and ___ the 1.",b:"carry",f:["divide","round","share"],e:"To carry (retenir): la retenue."},
 {t:"mult",s:"The ___ of 6 and 7 is 42.",b:"product",f:["sum","difference","remainder"],e:"The product (le produit) is the answer to a multiplication."},
 {t:"mult",s:"24 is a ___ of 6 because 6 × 4 = 24.",b:"multiple",f:["factor","fraction","remainder"],e:"24 is in the 6 times table: it is a multiple of 6."},
 {t:"mult",s:"25 is a ___ number because 5 × 5 = 25.",b:"square",f:["prime","odd one","decimal"],e:"5 × 5 = 25: a square number (un nombre carré)."},
 {t:"lines",s:"Railway tracks are ___ lines: they never meet.",b:"parallel",f:["perpendicular","curved","broken"],e:"Parallel lines (droites parallèles) never meet."},
 {t:"lines",s:"I check a right angle with a set ___.",b:"square",f:["circle","ruler","compass"],e:"A set square is « une équerre »."},
 {t:"lines",s:"The ___ of a segment cuts it into two equal parts.",b:"midpoint",f:["vertex","radius","angle"],e:"The midpoint (le milieu)."},
 {t:"division",s:"17 ÷ 5 = 3, ___ 2.",b:"remainder",f:["product","sum","total"],e:"17 = 5 × 3 + 2: the remainder (le reste) is 2."},
 {t:"division",s:"In 20 ÷ 4 = 5, the number 5 is the ___.",b:"quotient",f:["remainder","product","sum"],e:"The quotient (le quotient) is the answer to a division."},
 {t:"division",s:"7 is a ___ number: its only factors are 1 and 7.",b:"prime",f:["square","even","decimal"],e:"A prime number (nombre premier)."},
 {t:"division",s:"3 is a ___ of 12, because 12 ÷ 3 = 4.",b:"factor",f:["multiple","remainder","product"],e:"A factor (un diviseur) divides exactly."},
 {t:"fractions",s:"In 3/4, the number 4 is the ___.",b:"denominator",f:["numerator","remainder","product"],e:"The denominator (dénominateur) is at the bottom."},
 {t:"fractions",s:"In 3/4, the number 3 is the ___.",b:"numerator",f:["denominator","quotient","digit"],e:"The numerator (numérateur) is at the top."},
 {t:"fractions",s:"1/2 and 2/4 are ___ fractions.",b:"equivalent",f:["different","prime","decimal"],e:"Equivalent fractions (fractions égales) have the same value."},
 {t:"fractions",s:"If you cut a cake into 3 equal parts, each part is one ___.",b:"third",f:["quarter","half","tenth"],e:"One third (un tiers) = 1/3."},
 {t:"decimals",s:"In 4.7, the 7 is in the ___ place.",b:"tenths",f:["hundredths","tens","ones"],e:"The first digit after the decimal point is the tenths."},
 {t:"decimals",s:"In English, 2.5 is read « two ___ five ».",b:"point",f:["comma","and","dot"],e:"We say « point » (virgule): two point five."},
 {t:"decimals",s:"In 3.25, the 5 is in the ___ place.",b:"hundredths",f:["tenths","hundreds","ones"],e:"The second digit after the decimal point is the hundredths."},
 {t:"measures",s:"There are 1000 metres in a ___.",b:"kilometre",f:["millimetre","centimetre","kilogram"],e:"1 km = 1000 m."},
 {t:"measures",s:"We ___ an apple on the scales.",b:"weigh",f:["measure out","count","draw"],e:"To weigh (peser)."},
 {t:"measures",s:"There are 1000 ___ in a litre.",b:"millilitres",f:["grams","metres","centilitres"],e:"1 l = 1000 ml."},
 {t:"time",s:"12:00 is ___, the middle of the day.",b:"midday",f:["midnight","morning","evening"],e:"Midday (midi) = 12:00."},
 {t:"time",s:"There are 60 ___ in a minute.",b:"seconds",f:["hours","days","weeks"],e:"1 minute = 60 seconds."},
 {t:"time",s:"A hundred years is a ___.",b:"century",f:["decade","month","minute"],e:"A century (un siècle) = 100 years."},
 {t:"area",s:"The ___ is the distance all the way around a shape.",b:"perimeter",f:["area","volume","angle"],e:"The perimeter (le périmètre)."},
 {t:"area",s:"The ___ is the space inside a flat shape.",b:"area",f:["perimeter","radius","edge"],e:"The area (l'aire), in cm² or m²."},
 {t:"area",s:"Area of a rectangle = length × ___.",b:"width",f:["height of a person","perimeter","radius"],e:"The width (la largeur)."},
 {t:"angles",s:"A right angle measures 90 ___.",b:"degrees",f:["metres","grams","minutes"],e:"Angles are measured in degrees (degrés)."},
 {t:"angles",s:"An angle of 30° is ___.",b:"acute",f:["obtuse","right","straight"],e:"Acute (aigu): less than 90°."},
 {t:"angles",s:"An angle of 120° is ___.",b:"obtuse",f:["acute","right","straight"],e:"Obtuse (obtus): between 90° and 180°."},
 {t:"polygons",s:"A triangle with three equal sides is ___.",b:"equilateral",f:["isosceles","right-angled","square"],e:"Equilateral (équilatéral)."},
 {t:"polygons",s:"A square is a ___ because it has four sides.",b:"quadrilateral",f:["pentagon","triangle","circle"],e:"Quadrilateral (quadrilatère): 4 sides."},
 {t:"polygons",s:"The corners of a polygon are called vertices; one corner is a ___.",b:"vertex",f:["face","radius","diagonal"],e:"A vertex (un sommet)."},
 {t:"circle",s:"The ___ is twice as long as the radius.",b:"diameter",f:["centre","angle","area"],e:"Diameter (diamètre) = 2 × radius (rayon)."},
 {t:"circle",s:"I draw a circle with a ___.",b:"compass",f:["protractor","set square","calculator"],e:"A compass is « un compas »."},
 {t:"proportion",s:"50 ___ means 50 out of 100.",b:"percent",f:["degrees","metres","times"],e:"Percent (pour cent): out of 100."},
 {t:"proportion",s:"The shop gives a 20% ___ : the price goes down.",b:"discount",f:["remainder","angle","volume"],e:"A discount (une réduction)."},
 {t:"proportion",s:"On this map, the ___ is 1 cm for 1 km.",b:"scale",f:["recipe","price","angle"],e:"The scale (l'échelle) of a map."},
 {t:"problems",s:"Read the question carefully, then ___ the problem.",b:"solve",f:["weigh","draw","fold"],e:"To solve (résoudre)."},
 {t:"problems",s:"This problem has two ___: first add, then multiply.",b:"steps",f:["angles","faces","digits"],e:"A step (une étape)."},
 {t:"solids",s:"A shoebox is the shape of a ___.",b:"cuboid",f:["cube","sphere","cone"],e:"A cuboid (un pavé droit)."},
 {t:"solids",s:"A cube has 6 ___ and 12 edges.",b:"faces",f:["sides","angles","radii"],e:"A cube has 6 faces."},
 {t:"solids",s:"The space inside a box is its ___.",b:"volume",f:["area","perimeter","angle"],e:"Volume (le volume), in cm³."},
 {t:"symmetry",s:"A butterfly is ___: both halves are the same.",b:"symmetrical",f:["obtuse","parallel","prime"],e:"Symmetrical (symétrique)."},
 {t:"symmetry",s:"Fold the shape along the line of ___.",b:"symmetry",f:["parallel","perimeter","division"],e:"A line of symmetry (axe de symétrie)."},
 {t:"data",s:"The ___ of 2, 4 and 6 is 4.",b:"mean",f:["total","product","remainder"],e:"Mean (moyenne): (2 + 4 + 6) ÷ 3 = 4."},
 {t:"data",s:"A ___ chart is a circle cut into slices.",b:"pie",f:["bar","line","table"],e:"A pie chart (diagramme circulaire)."},
 {t:"data",s:"A ___ chart uses bars of different heights.",b:"bar",f:["pie","round","circle"],e:"A bar chart (diagramme en barres)."},
 {t:"money",s:"This pen costs 80p and that one costs 95p: the first pen is ___.",b:"cheaper",f:["dearer","heavier","longer"],e:"Cheaper (moins cher)."},
 {t:"money",s:"I pay £10 for a £7 book, so I get £3 ___.",b:"change",f:["price","discount","coin"],e:"The change (la monnaie rendue)."}
];
function exoNombreEnLettres(){
  const t=alea(1,3);
  if(t===3){const n=alea(11,999)/100;const s=dec(n);const [e,d]=s.split(".");const lu=`${enLettres(+e)} point ${d?d.split("").map(c=>UNITES_EN[+c]).join(" "):""}`.trim();
    if(!d)return exoNombreEnLettres();
    return saisie(`Write in figures: ${lu}`,repDec(n),`« ${lu} » = ${s}. In English, « point » is the decimal point (la virgule).`);}
  const n=pioche([alea(100,999),alea(1000,9999),alea(10000,999999),alea(1000000,9000000)]);
  if(t===1)return saisie(`Write in figures: ${enLettres(n)}`,rep(n),`${maj(enLettres(n))} = ${fmt(n)}.`);
  const sw=String(n).split("");const i=alea(0,sw.length-2);[sw[i],sw[i+1]]=[sw[i+1],sw[i]];
  const f=new Set([+sw.join(""),n+1000,n-100,n*10].filter(x=>x!==n&&x>0));
  return qcm(`How do you write ${fmt(n)} in words?`,enLettres(n),[...f].slice(0,3).map(enLettres),`${fmt(n)} is written "${enLettres(n)}".`);
}
function autresMots(m){return melange(MOTS.filter(x=>x.t!==m.t&&x.fr!==m.fr&&x.en!==m.en));}
function exoMots(tag){
  const liste=tag==="all"?MOTS:MOTS.filter(x=>x.t===tag);
  const t=alea(1,(tag==="place"||tag==="decimals")?5:4);
  if(t>=4)return (tag==="place"||tag==="decimals"||alea(0,1))?exoNombreEnLettres():exoMots(tag);
  if(t===3){const f=PHRASES.filter(x=>tag==="all"||x.t===tag);const x=pioche(f.length?f:PHRASES);
    return qcm(`Choose the right word: ${x.s}`,x.b,x.f,x.e);}
  const m=pioche(liste.length?liste:MOTS);
  if(t===1)return qcm(`What does "${m.en}" mean in French?`,m.fr,autresMots(m).slice(0,3).map(x=>x.fr),`"${m.en}" means « ${m.fr} ».`);
  return qcm(`How do you say « ${m.fr} » in English?`,m.en,autresMots(m).slice(0,3).map(x=>x.en),`« ${m.fr} » is "${m.en}" in English.`);
}

/* =========================================================
   5. LES SÉANCES
   ========================================================= */
function seanceHorsLigne(mat,semaine){
  const sem=SEMAINES[semaine-1];
  if(mat==="rev"){
    const avant=SEMAINES[alea(0,semaine-1)];
    return [mental(semaine),exoMaths(sem.tm),exoMots(sem.tv),exoMaths(sem.tm),exoMaths(avant.tm),exoMots(avant.tv),exoMaths(sem.tm)];
  }
  const q=[mental(semaine)];
  for(let i=0;i<4;i++)q.push(mat==="v"?exoMots(sem.tv):exoMaths(sem.tm));
  return q;
}

export const programme = { code: "maths-en-c3", nom: "Maths in English · CM1-6e", rituel: "Toute la séance est en anglais ! On commence par un petit calcul (mental maths). Les nombres décimaux s'écrivent avec un point (2.5) ; la virgule est acceptée aussi.", SEMAINES, JOURS, NOM_MAT, PERIODES, matiereDuJour, seanceHorsLigne };
