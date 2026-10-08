// Programme « Maths in English · 5e-3e » (12 à 14 ans), créé le 08/10/2026.
// Les maths du cycle 4, entièrement en anglais (anglais britannique).

/* =========================================================
   1. LE PROGRAMME — 36 SEMAINES
   t = étiquettes : maths | mots (vocabulaire)
   ========================================================= */
const SEMAINES=[
{n:1,p:1,m:"Order of operations and brackets (priorités opératoires)",v:"brackets, order of operations, calculate, product, quotient (parenthèses, priorités, calculer, produit, quotient)",t:"order|ops"},
{n:2,p:1,m:"Negative numbers: adding and subtracting (nombres relatifs : addition et soustraction)",v:"negative, positive, below zero, opposite (négatif, positif, en dessous de zéro, opposé)",t:"negadd|negative"},
{n:3,p:1,m:"Negative numbers: multiplying and dividing (nombres relatifs : multiplication et division)",v:"sign, negative, positive, rule of signs (signe, négatif, positif, règle des signes)",t:"negmult|negative"},
{n:4,p:1,m:"Fractions: simplifying and comparing (simplifier et comparer des fractions)",v:"simplest form, numerator, denominator, equivalent (forme irréductible, numérateur, dénominateur, égale)",t:"fracsimp|fractions"},
{n:5,p:1,m:"Adding and subtracting fractions (additionner et soustraire des fractions)",v:"common denominator, mixed number, improper fraction (dénominateur commun, nombre mixte, fraction impropre)",t:"fracadd|fractions"},
{n:6,p:1,m:"Multiplying and dividing fractions (multiplier et diviser des fractions)",v:"reciprocal, multiply, divide, of (inverse, multiplier, diviser, de)",t:"fracmult|fractions"},
{n:7,p:1,m:"Review of term 1 (bilan de la période 1)",v:"number words (le vocabulaire des nombres)",t:"rev1|ops"},
{n:8,p:2,m:"Powers and square roots (puissances et racines carrées)",v:"power, index, squared, cubed, square root (puissance, exposant, au carré, au cube, racine carrée)",t:"powers|powers"},
{n:9,p:2,m:"Powers of ten and standard form (puissances de dix, notation scientifique)",v:"standard form, power of ten, billion (notation scientifique, puissance de dix, milliard)",t:"standard|powers"},
{n:10,p:2,m:"Primes, factors and prime factorisation (nombres premiers, diviseurs, décomposition)",v:"prime number, factor, multiple, highest common factor (nombre premier, diviseur, multiple, PGCD)",t:"primes|primes"},
{n:11,p:2,m:"Algebra: expressions and substitution (expressions littérales)",v:"expression, term, variable, substitute (expression, terme, variable, remplacer)",t:"expr|algebra"},
{n:12,p:2,m:"Expanding and simplifying expressions (développer et réduire)",v:"expand, simplify, like terms, coefficient (développer, réduire, termes semblables, coefficient)",t:"expand|algebra"},
{n:13,p:2,m:"Solving equations (résoudre des équations)",v:"equation, solve, unknown, solution, both sides (équation, résoudre, inconnue, solution, les deux membres)",t:"equations|equations"},
{n:14,p:2,m:"Review of term 2 (bilan de la période 2)",v:"algebra words (le vocabulaire du calcul littéral)",t:"rev2|algebra"},
{n:15,p:3,m:"Percentages (les pourcentages)",v:"percentage, per cent, out of, decimal (pourcentage, pour cent, sur, décimal)",t:"percent|percent"},
{n:16,p:3,m:"Percentage increase and decrease (hausses et baisses en pourcentage)",v:"increase, decrease, discount, multiplier, VAT (augmentation, diminution, réduction, coefficient multiplicateur, TVA)",t:"perchange|percent"},
{n:17,p:3,m:"Ratio (les ratios)",v:"ratio, share, proportion, part (ratio, partager, proportion, part)",t:"ratio|ratio"},
{n:18,p:3,m:"Proportionality and speed (proportionnalité et vitesse)",v:"speed, distance, time, per hour, proportional (vitesse, distance, durée, par heure, proportionnel)",t:"speed|ratio"},
{n:19,p:3,m:"Angles in triangles and parallel lines (angles, triangles et parallèles)",v:"alternate angles, corresponding angles, interior angle, straight line (angles alternes-internes, correspondants, angle intérieur, ligne droite)",t:"angles|angles"},
{n:20,p:3,m:"Pythagoras' theorem (le théorème de Pythagore)",v:"hypotenuse, right-angled triangle, theorem, converse (hypoténuse, triangle rectangle, théorème, réciproque)",t:"pythagoras|pythagoras"},
{n:21,p:3,m:"Review of term 3 (bilan de la période 3)",v:"geometry words (le vocabulaire de la géométrie)",t:"rev3|pythagoras"},
{n:22,p:4,m:"Area: triangles, parallelograms and circles (aires)",v:"area, base, height, circumference, pi (aire, base, hauteur, périmètre du cercle, pi)",t:"area|area"},
{n:23,p:4,m:"Volume: prisms, cylinders, pyramids and cones (volumes)",v:"volume, prism, cylinder, pyramid, cone (volume, prisme, cylindre, pyramide, cône)",t:"volume|volume"},
{n:24,p:4,m:"Coordinates and graphs (repérage et graphiques)",v:"axis, coordinates, origin, graph (axe, coordonnées, origine, graphique)",t:"coords|graphs"},
{n:25,p:4,m:"Linear functions (fonctions linéaires et affines)",v:"function, linear, gradient, y-intercept (fonction, linéaire, coefficient directeur, ordonnée à l'origine)",t:"functions|graphs"},
{n:26,p:4,m:"Statistics: mean, median, range (statistiques : moyenne, médiane, étendue)",v:"mean, median, mode, range, frequency (moyenne, médiane, mode, étendue, effectif)",t:"stats|stats"},
{n:27,p:4,m:"Probability (les probabilités)",v:"probability, likely, certain, impossible, outcome (probabilité, probable, certain, impossible, issue)",t:"proba|proba"},
{n:28,p:4,m:"Review of term 4 (bilan de la période 4)",v:"data and probability words (le vocabulaire des statistiques et des probabilités)",t:"rev4|stats"},
{n:29,p:5,m:"Transformations: reflection, rotation, translation, enlargement (transformations)",v:"reflection, rotation, translation, enlargement, scale factor (symétrie axiale, rotation, translation, agrandissement, coefficient)",t:"transform|transform"},
{n:30,p:5,m:"Trigonometry in a right-angled triangle (trigonométrie)",v:"sine, cosine, tangent, opposite, adjacent (sinus, cosinus, tangente, côté opposé, côté adjacent)",t:"trig|trig"},
{n:31,p:5,m:"Solving problems with equations (mettre un problème en équation)",v:"equation, unknown, let x be, check (équation, inconnue, soit x, vérifier)",t:"eqproblems|equations"},
{n:32,p:5,m:"Sequences and formulas (suites et formules)",v:"sequence, term, nth term, formula (suite, terme, terme de rang n, formule)",t:"sequences|algebra"},
{n:33,p:5,m:"Mixed problems (problèmes variés)",v:"estimate, round, significant, approximately (estimer, arrondir, significatif, environ)",t:"problems|ops"},
{n:34,p:5,m:"Review: algebra and functions (bilan : calcul littéral et fonctions)",v:"algebra and graph words (le vocabulaire de l'algèbre et des graphiques)",t:"rev5|algebra"},
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
const PRENOMS=["Tom","Emma","Lucas","Chloé","Oliver","Léa","Amelia","Hugo","Jack","Manon","Harry","Inès","Lily","Jules","Noah","Camille","Sophie","Théo","Grace","Louis","Mia","Nathan","Ella","Arthur","Zoe","Raphaël"];
/* Nombres relatifs : signe moins typographique à l'affichage ; « -5 » et « −5 » acceptés */
const fN=x=>x<0?"−"+(-x):String(x);
const pN=x=>x<0?"("+fN(x)+")":String(x);
const dec=x=>String(+(+x).toFixed(4));
function repN(x){const s=dec(x),r=[s];if(s.includes("."))r.push(s.replace(".",","));if(x<0)r.push(...r.map(v=>v.replace("-","−")));return r;}
const pgcd=(a,b)=>b?pgcd(b,a%b):Math.abs(a);
/* un numérateur n < d premier avec d (fraction déjà irréductible) */
const premierAvec=d=>pioche(Array.from({length:d-1},(_,i)=>i+1).filter(n=>pgcd(n,d)===1));
function frac(n,d){if(d<0){n=-n;d=-d;}const g=pgcd(Math.abs(n),d)||1;n/=g;d/=g;return d===1?fN(n):`${fN(n)}/${d}`;}
const SUP={"0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹","-":"⁻"};
const exp=n=>String(n).split("").map(c=>SUP[c]).join("");
const maj=s=>s[0].toUpperCase()+s.slice(1);
/* x avec coefficient : 1x → x, −1x → −x */
const cx=(k,v="x")=>k===1?v:k===-1?"−"+v:fN(k)+v;
/* terme constant à la suite d'une expression : + 3 / − 3 */
const plus=k=>k<0?` − ${-k}`:` + ${k}`;
/* expression an + b */
const lin=(a,b)=>`${cx(a,"n")}${b?plus(b):""}`;

/* =========================================================
   3. MATHS IN ENGLISH
   ========================================================= */
const BANQUE_ANGLES=[
 {q:"Alternate angles between parallel lines are…",b:"equal",f:["supplementary","always 90°","always acute"],e:"Alternate angles (angles alternes-internes) are equal when the lines are parallel."},
 {q:"Corresponding angles between parallel lines are…",b:"equal",f:["different","always 180°","always obtuse"],e:"Corresponding angles (angles correspondants) are equal when the lines are parallel."},
 {q:"Vertically opposite angles are…",b:"equal",f:["supplementary","complementary","always right angles"],e:"Vertically opposite angles (angles opposés par le sommet) are always equal."},
 {q:"The angles in a triangle add up to…",b:"180°",f:["360°","90°","270°"],e:"In any triangle, the three angles add up to 180°."},
 {q:"The angles in a quadrilateral add up to…",b:"360°",f:["180°","540°","400°"],e:"A quadrilateral can be cut into 2 triangles: 2 × 180° = 360°."},
 {q:"Each angle of an equilateral triangle measures…",b:"60°",f:["90°","45°","30°"],e:"180° ÷ 3 = 60°."},
 {q:"The angles of a pentagon add up to…",b:"540°",f:["360°","500°","720°"],e:"A pentagon can be cut into 3 triangles: 3 × 180° = 540°."},
 {q:"Angles on a straight line add up to…",b:"180°",f:["90°","360°","100°"],e:"A straight line is a half turn: 180°."}
];
const BANQUE_TRANSFORM=[
 {q:"A transformation that slides a shape without turning it is a…",b:"translation",f:["rotation","reflection","enlargement"],e:"A translation (une translation) moves every point the same way."},
 {q:"A transformation that turns a shape around a point is a…",b:"rotation",f:["translation","reflection","enlargement"],e:"A rotation (une rotation) has a centre and an angle."},
 {q:"A transformation that flips a shape over a line is a…",b:"reflection",f:["rotation","translation","enlargement"],e:"A reflection (une symétrie axiale) uses a mirror line."},
 {q:"A shape is enlarged with scale factor 3. Its lengths are…",b:"multiplied by 3",f:["increased by 3","divided by 3","the same"],e:"An enlargement multiplies all lengths by the scale factor."},
 {q:"A shape is enlarged with scale factor 2. Its area is…",b:"multiplied by 4",f:["multiplied by 2","multiplied by 8","the same"],e:"Lengths × 2, so area × 2² = 4."},
 {q:"A cube is enlarged with scale factor 2. Its volume is…",b:"multiplied by 8",f:["multiplied by 2","multiplied by 4","multiplied by 6"],e:"Lengths × 2, so volume × 2³ = 8."},
 {q:"Which transformation keeps the shape exactly the same size?",b:"a rotation",f:["an enlargement with scale factor 3","an enlargement with scale factor 0.5","none of them"],e:"Rotations, reflections and translations do not change size."},
 {q:"The point (3, 5) is reflected in the x-axis. Where does it go?",b:"(3, −5)",f:["(−3, 5)","(5, 3)","(−3, −5)"],e:"In the x-axis, x stays the same and y changes sign."},
 {q:"The point (3, 5) is reflected in the y-axis. Where does it go?",b:"(−3, 5)",f:["(3, −5)","(5, 3)","(−3, −5)"],e:"In the y-axis, y stays the same and x changes sign."},
 {q:"The point (2, 4) is rotated 180° about the origin. Where does it go?",b:"(−2, −4)",f:["(4, 2)","(−2, 4)","(2, −4)"],e:"A half turn about the origin changes both signs."},
 {q:"The new shape after a transformation is called the…",b:"image",f:["object","net","vertex"],e:"The object (la figure de départ) becomes the image (l'image)."},
 {q:"An enlargement with scale factor 0.5 makes a shape…",b:"smaller",f:["bigger","the same size","upside down"],e:"A scale factor between 0 and 1 is a reduction (une réduction)."}
];
const TRIPLES=[[3,4,5],[6,8,10],[5,12,13],[8,15,17],[9,12,15],[7,24,25],[12,16,20],[15,20,25],[20,21,29],[10,24,26]];

const GM={
  order(){const t=alea(1,4),a=alea(2,9),b=alea(2,9),c=alea(2,9);
    if(t===1)return saisie(`Calculate: ${a} + ${b} × ${c}`,[String(a+b*c)],`Multiplication first: ${b} × ${c} = ${b*c}, then ${a} + ${b*c} = ${a+b*c}.`);
    if(t===2)return saisie(`Calculate: (${a} + ${b}) × ${c}`,[String((a+b)*c)],`Brackets first: ${a} + ${b} = ${a+b}, then ${a+b} × ${c} = ${(a+b)*c}.`);
    if(t===3){const d=alea(2,6),q=alea(2,9);return saisie(`Calculate: ${a*c+q} − ${d*q} ÷ ${d}`,[String(a*c)],`Division first: ${d*q} ÷ ${d} = ${q}, then ${a*c+q} − ${q} = ${a*c}.`);}
    return saisie(`Calculate: ${a}² + ${b} × ${c}`,[String(a*a+b*c)],`Powers first: ${a}² = ${a*a}. Then ${b} × ${c} = ${b*c}. Finally ${a*a} + ${b*c} = ${a*a+b*c}.`);},
  negadd(){const t=alea(1,4);
    if(t===1){const a=-alea(2,15),b=alea(2,20);return saisie(`Calculate: ${fN(a)} + ${b}`,repN(a+b),`${fN(a)} + ${b} = ${fN(a+b)}.`);}
    if(t===2){const a=alea(2,12),b=a+alea(2,12);return saisie(`Calculate: ${a} − ${b}`,repN(a-b),`${a} − ${b} = ${fN(a-b)}: we go below zero.`);}
    if(t===3){const a=-alea(2,12),b=-alea(2,12);return saisie(`Calculate: ${fN(a)} − ${pN(b)}`,repN(a-b),`Subtracting a negative number is adding its opposite: ${fN(a)} − ${pN(b)} = ${fN(a)} + ${-b} = ${fN(a-b)}.`);}
    const m=-alea(2,9),r=alea(3,15);return saisie(`At 6 a.m. the temperature is ${fN(m)} °C. By midday it has risen by ${r} degrees. What is the temperature at midday? (in °C)`,repN(m+r),`${fN(m)} + ${r} = ${fN(m+r)} °C.`);},
  negmult(){const t=alea(1,3),a=alea(2,12),b=alea(2,12);
    if(t===1){const x=pioche([-a,a]),y=x>0?-b:pioche([-b,b]);return saisie(`Calculate: ${pN(x)} × ${pN(y)}`,repN(x*y),`${x*y>0?"Same signs: the answer is positive":"Different signs: the answer is negative"}. ${pN(x)} × ${pN(y)} = ${fN(x*y)}.`);}
    if(t===2){const x=-a*b,y=pioche([-a,a]);return saisie(`Calculate: ${pN(x)} ÷ ${pN(y)}`,repN(x/y),`${x/y>0?"Same signs: positive":"Different signs: negative"}. ${pN(x)} ÷ ${pN(y)} = ${fN(x/y)}.`);}
    const n=alea(2,5),s=n%2===0?"positive":"negative";return qcm(`If you multiply ${n} negative numbers together, the answer is…`,s,[s==="positive"?"negative":"positive","zero"],`Each pair of negatives gives a positive. With ${n} negatives the result is ${s}.`);},
  fracsimp(){const t=alea(1,2);
    if(t===1){const d=alea(3,9),n=alea(1,d-1);if(pgcd(n,d)>1)return GM.fracsimp();const k=alea(2,6);
      return saisie(`Write ${n*k}/${d*k} in its simplest form.`,[`${n}/${d}`],`Divide the top and the bottom by ${k}: ${n*k}/${d*k} = ${n}/${d}.`);}
    const p=[[2,3],[3,4],[3,5],[4,5],[5,6],[5,8],[7,10],[2,5],[3,8],[5,12]];let x=pioche(p),y=pioche(p);if(x[0]*y[1]===y[0]*x[1])return GM.fracsimp();
    const big=x[0]/x[1]>y[0]/y[1]?x:y,sml=big===x?y:x,D=x[1]*y[1]/pgcd(x[1],y[1]);
    return qcm(`Which is greater: ${x[0]}/${x[1]} or ${y[0]}/${y[1]}?`,`${big[0]}/${big[1]}`,[`${sml[0]}/${sml[1]}`,"they are equal"],`Use a common denominator, ${D}: ${big[0]}/${big[1]} = ${big[0]*D/big[1]}/${D} and ${sml[0]}/${sml[1]} = ${sml[0]*D/sml[1]}/${D}.`);},
  fracadd(){const b=pioche([2,3,4,5,6]),d=pioche([3,4,5,6,8].filter(x=>x!==b)),a=premierAvec(b),c=premierAvec(d);
    const D=b*d/pgcd(b,d),A=a*D/b,C=c*D/d,moins=alea(0,1)&&A>C;
    const N=moins?A-C:A+C;
    return saisie(`Calculate: ${a}/${b} ${moins?"−":"+"} ${c}/${d} (write it like 3/4)`,[...new Set([frac(N,D),`${N}/${D}`])],`Common denominator ${D}: ${A}/${D} ${moins?"−":"+"} ${C}/${D} = ${N}/${D}${frac(N,D)!==`${N}/${D}`?" = "+frac(N,D):""}.`);},
  fracmult(){const b=alea(2,9),d=alea(2,9),a=premierAvec(b),c=premierAvec(d);
    if(alea(0,1))return saisie(`Calculate: ${a}/${b} × ${c}/${d} (write it like 3/4)`,[...new Set([frac(a*c,b*d),`${a*c}/${b*d}`])],`Multiply the tops and the bottoms: ${a*c}/${b*d}${frac(a*c,b*d)!==`${a*c}/${b*d}`?" = "+frac(a*c,b*d):""}.`);
    return saisie(`Calculate: ${a}/${b} ÷ ${c}/${d} (write it like 3/4)`,[...new Set([frac(a*d,b*c),`${a*d}/${b*c}`,(a*d)%(b*c)===0?`${a*d/(b*c)}/1`:`${a*d}/${b*c}`])],`Dividing by ${c}/${d} is multiplying by its reciprocal (inverse) ${d}/${c}: ${a}/${b} × ${d}/${c} = ${a*d}/${b*c}${frac(a*d,b*c)!==`${a*d}/${b*c}`?" = "+frac(a*d,b*c):""}.`);},
  powers(){const t=alea(1,4);
    if(t===1){const a=alea(2,5),n=alea(2,a===2?6:4);return saisie(`What is ${a}${exp(n)} (${a} to the power of ${n})?`,[String(a**n)],`${a}${exp(n)} = ${Array(n).fill(a).join(" × ")} = ${a**n}.`);}
    if(t===2){const a=alea(2,15);return saisie(`What is the square root of ${a*a}?`,[String(a)],`${a} × ${a} = ${a*a}, so √${a*a} = ${a}.`);}
    if(t===3){const a=alea(2,6),m=alea(2,5),n=alea(2,5);return qcm(`Simplify ${a}${exp(m)} × ${a}${exp(n)}`,`${a}${exp(m+n)}`,[`${a}${exp(m*n)}`,`${a*a}${exp(m+n)}`,`${a}${exp(Math.abs(m-n)||1)}`],`When you multiply powers of the same number, add the indices: ${m} + ${n} = ${m+n}.`);}
    const a=alea(4,15);return saisie(`What is ${a} squared?`,[String(a*a)],`${a} squared = ${a}² = ${a} × ${a} = ${a*a}.`);},
  standard(){const t=alea(1,4);
    if(t===1){const n=alea(2,6);return qcm(`What is 10${exp(n)}?`,"1"+"0".repeat(n),["1"+"0".repeat(n-1),"1"+"0".repeat(n+1),String(10*n)],`10${exp(n)} is 1 followed by ${n} zeros.`);}
    if(t===2){const m=alea(11,99)/10,n=alea(3,6),v=Math.round(m*10)*10**(n-1);return qcm(`Write ${String(v).replace(/\B(?=(\d{3})+(?!\d))/g," ")} in standard form.`,`${dec(m)} × 10${exp(n)}`,[`${dec(m)} × 10${exp(n-1)}`,`${Math.round(m*10)} × 10${exp(n)}`,`${dec(m)} × 10${exp(n+1)}`],`Standard form (notation scientifique): a number between 1 and 10 times a power of 10. ${dec(m)} × 10${exp(n)}.`);}
    if(t===3){const m=alea(11,99)/10,n=alea(1,3);return saisie(`Write ${dec(m)} × 10${exp(n)} as an ordinary number.`,repN(Math.round(m*10)*10**n/10),`× 10${exp(n)} moves the digits ${n} place(s) to the left: ${dec(Math.round(m*10)*10**n/10)}.`);}
    const n=alea(1,3);return qcm(`What is 10${exp(-n)}?`,dec(10**-n),[String(10**n),dec(10**-(n+1)),fN(-10*n)],`10${exp(-n)} = 1 ÷ 10${exp(n)} = ${dec(10**-n)}.`);},
  primes(){const t=alea(1,3);
    if(t===1){const p=pioche([[12,"2² × 3"],[18,"2 × 3²"],[20,"2² × 5"],[24,"2³ × 3"],[30,"2 × 3 × 5"],[36,"2² × 3²"],[40,"2³ × 5"],[45,"3² × 5"],[60,"2² × 3 × 5"],[72,"2³ × 3²"],[84,"2² × 3 × 7"],[90,"2 × 3² × 5"]]);
      const fa=["2 × 3 × 5","2² × 3","2³ × 3","2² × 3²","2² × 5","3² × 5","2 × 3²","2³ × 5","2² × 3 × 5","2³ × 3²","2² × 3 × 7","2 × 3² × 5"].filter(x=>x!==p[1]);
      return qcm(`What is the prime factorisation of ${p[0]}?`,p[1],melange(fa).slice(0,3),`${p[0]} = ${p[1]}: only prime numbers (nombres premiers) are used.`);}
    if(t===2){const g=pioche([2,3,4,5,6,7,8]),m=pioche([[2,3],[3,4],[2,5],[3,5],[4,5],[5,6]]),a=g*m[0],b=g*m[1];
      return saisie(`What is the highest common factor (HCF) of ${a} and ${b}?`,[String(g)],`${a} = ${g} × ${m[0]} and ${b} = ${g} × ${m[1]}. The HCF (PGCD) is ${g}.`);}
    const pr=pioche([23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]);const fa=melange([21,27,33,39,49,51,57,63,69,77,81,87,91,93]).slice(0,3);
    return qcm(`Which of these is a prime number?`,String(pr),fa.map(String),`${pr} has exactly two factors: 1 and ${pr}. (${fa.map(x=>{for(let i=3;i<x;i++)if(x%i===0)return x+" = "+i+" × "+x/i;return x;}).join(", ")})`);},
  expr(){const t=alea(1,3);
    if(t===1){const a=alea(2,9),b=alea(1,12),x=alea(2,10);return saisie(`If x = ${x}, what is ${a}x + ${b}?`,[String(a*x+b)],`${a} × ${x} + ${b} = ${a*x} + ${b} = ${a*x+b}.`);}
    if(t===2){const a=alea(2,6),x=-alea(1,6),b=alea(1,9);return saisie(`If x = ${fN(x)}, what is ${a}x − ${b}?`,repN(a*x-b),`${a} × ${pN(x)} − ${b} = ${fN(a*x)} − ${b} = ${fN(a*x-b)}.`);}
    const k=alea(2,9),m=pioche([2,3]);const b=pioche([
      [`Add ${k} to a number n, then multiply by ${m}.`,`${m}(n + ${k})`,[`${m}n + ${k}`,`n + ${k*m}`,`${m} + n + ${k}`]],
      [`Multiply a number n by ${m}, then add ${k}.`,`${m}n + ${k}`,[`${m}(n + ${k})`,`n + ${m+k}`,`${k}n + ${m}`]],
      [`Take ${k} away from a number n, then square the result.`,`(n − ${k})²`,[`n² − ${k}`,`n − ${k}²`,`${k} − n²`]]]);
    return qcm(`Which expression means: ${b[0]}`,b[1],b[2],`Read the steps in order: the brackets show what is done first.`);},
  expand(){const t=alea(1,3);
    if(t===1){const a=alea(2,9),b=pioche([-1,1])*alea(1,9);return qcm(`Expand ${a}(x${plus(b)})`,`${a}x${plus(a*b)}`,[`${a}x${plus(b)}`,`${a+1}x${plus(a*b)}`,`x${plus(a*b)}`],`Multiply each term inside the brackets by ${a}: ${a} × x = ${a}x and ${a} × ${pN(b)} = ${fN(a*b)}.`);}
    if(t===2){const a=alea(2,9),b=alea(1,9),c=alea(1,Math.min(a+b-1,9));return qcm(`Simplify ${a}x + ${b}x − ${c}x`,cx(a+b-c),[cx(a+b+c),`${a+b-c}x²`,`${a+b}x − ${c}`],`Collect like terms: ${a} + ${b} − ${c} = ${a+b-c}, so ${cx(a+b-c)}.`);}
    const a=alea(2,7),b=alea(2,7),c=alea(1,6),d=alea(1,6);return qcm(`Simplify ${a}a + ${b}b + ${c}a + ${d}b`,`${a+c}a + ${b+d}b`,[`${a+b+c+d}ab`,`${a+b}a + ${c+d}b`,`${a+c}a${exp(2)} + ${b+d}b`],`Only like terms can be added: ${a}a + ${c}a = ${a+c}a and ${b}b + ${d}b = ${b+d}b.`);},
  equations(){const t=alea(1,3),x=alea(-6,12)||3;
    if(t===1){const a=alea(2,9),b=alea(1,20);return saisie(`Solve: ${a}x + ${b} = ${fN(a*x+b)}`,repN(x),`Subtract ${b} from both sides: ${a}x = ${fN(a*x)}. Divide by ${a}: x = ${fN(x)}.`);}
    if(t===2){const a=alea(2,9),b=alea(1,20);return saisie(`Solve: ${a}x − ${b} = ${fN(a*x-b)}`,repN(x),`Add ${b} to both sides: ${a}x = ${fN(a*x)}. Divide by ${a}: x = ${fN(x)}.`);}
    const c=alea(2,5),a=c+alea(1,4),b=alea(1,15),r=(a-c)*x+b;return saisie(`Solve: ${a}x + ${b} = ${c}x${plus(r)}`.replace(/ \+ 0$/,""),repN(x),`Subtract ${c}x from both sides: ${cx(a-c)} + ${b} = ${fN(r)}. Subtract ${b}: ${cx(a-c)} = ${fN(r-b)}.${a-c===1?"":` Divide by ${a-c}: x = ${fN(x)}.`}`);},
  percent(){const t=alea(1,3);
    if(t===1){const p=pioche([5,15,20,30,40,60,35]),v=alea(2,30)*20;return saisie(`What is ${p}% of ${v}?`,repN(v*p/100),`${p}% of ${v} = ${p}/100 × ${v} = ${dec(v*p/100)}.`);}
    if(t===2){const d=pioche([20,25,40,50]),n=alea(1,d-1),p=n*100/d;if(p!==Math.round(p))return GM.percent();return saisie(`${pioche(PRENOMS)} scores ${n} out of ${d} in a test. What percentage is that?`,[String(p),`${p}%`,`${p} %`],`${n} ÷ ${d} = ${dec(n/d)} = ${p}%.`);}
    const v=alea(1,99);return qcm(`Write ${dec(v/100)} as a percentage.`,`${v}%`,[`${dec(v/10)}%`,`${v*10}%`,`${dec(v/100)}%`],`Multiply by 100: ${dec(v/100)} × 100 = ${v}%.`);},
  perchange(){const t=alea(1,3);
    if(t===1){const p=pioche([10,20,25,50]),v=alea(2,20)*20;return saisie(`A price of £${v} increases by ${p}%. What is the new price? (in pounds)`,repN(v*(100+p)/100).concat([`£${dec(v*(100+p)/100)}`]),`${p}% of ${v} = ${dec(v*p/100)}. New price: ${v} + ${dec(v*p/100)} = £${dec(v*(100+p)/100)}. (Or ${v} × ${dec(1+p/100)}.)`);}
    if(t===2){const p=pioche([10,15,20,30]),v=alea(2,20)*20;return saisie(`A £${v} coat is reduced by ${p}%. What is the sale price? (in pounds)`,repN(v*(100-p)/100).concat([`£${dec(v*(100-p)/100)}`]),`${p}% of ${v} = ${dec(v*p/100)}. Sale price: ${v} − ${dec(v*p/100)} = £${dec(v*(100-p)/100)}.`);}
    const p=pioche([5,10,15,20,30]),up=alea(0,1);return qcm(`Which number do you multiply by to ${up?"increase":"decrease"} an amount by ${p}%?`,dec(up?1+p/100:1-p/100),[dec(up?1-p/100:1+p/100),dec(p/100),String(p)],`${up?"Increase":"Decrease"} by ${p}%: 100% ${up?"+":"−"} ${p}% = ${up?100+p:100-p}% = ${dec(up?1+p/100:1-p/100)}.`);},
  ratio(){const t=alea(1,3);
    if(t===1){const a=alea(1,5),b=alea(1,6);if(a===b||pgcd(a,b)>1)return GM.ratio();const k=alea(3,12),tot=(a+b)*k;
      return saisie(`Share £${tot} in the ratio ${a}:${b}. How much is the bigger share? (in pounds)`,[String(Math.max(a,b)*k),`£${Math.max(a,b)*k}`],`${a} + ${b} = ${a+b} parts. One part = ${tot} ÷ ${a+b} = ${k}. Bigger share = ${Math.max(a,b)} × ${k} = £${Math.max(a,b)*k}.`);}
    if(t===2){const a=alea(1,5),b=alea(1,6);if(a===b||pgcd(a,b)>1)return GM.ratio();const k=alea(2,8);
      return qcm(`Simplify the ratio ${a*k}:${b*k}`,`${a}:${b}`,[`${b}:${a}`,`${a*k/2}:${b*k/2}`.includes(".")?`${a+1}:${b+1}`:`${a*k/2}:${b*k/2}`,`${a*k}:${b}`],`Divide both parts by ${k}: ${a*k}:${b*k} = ${a}:${b}.`);}
    const g=alea(2,6),b=pioche([1,2,3,4,5,6,7].filter(x=>x!==g&&pgcd(x,g)===1)),k=alea(2,5);return saisie(`In a class the ratio of girls to boys is ${g}:${b}. There are ${g*k} girls. How many boys are there?`,[String(b*k)],`${g*k} ÷ ${g} = ${k}, so boys = ${b} × ${k} = ${b*k}.`);},
  speed(){const t=alea(1,3);
    if(t===1){const v=alea(4,24)*5,h=alea(2,4);return saisie(`A car travels ${v*h} km in ${h} hours. What is its average speed? (in km/h)`,[String(v),`${v} km/h`],`Speed = distance ÷ time = ${v*h} ÷ ${h} = ${v} km/h.`);}
    if(t===2){const v=alea(4,24)*5,h=alea(2,5);return saisie(`A train goes at ${v} km/h for ${h} hours. How far does it travel? (in km)`,[String(v*h),`${v*h} km`],`Distance = speed × time = ${v} × ${h} = ${v*h} km.`);}
    const v=pioche([40,60,80,90,120]);return saisie(`A bus travels at ${v} km/h. How far does it go in 30 minutes? (in km)`,[String(v/2),`${v/2} km`],`30 minutes = half an hour, so ${v} ÷ 2 = ${v/2} km.`);},
  angles(){const t=alea(1,4);
    if(t===1){const a=alea(25,90),b=alea(20,160-a);return saisie(`Two angles of a triangle are ${a}° and ${b}°. What is the third angle? (in degrees)`,[String(180-a-b),`${180-a-b}°`],`180 − ${a} − ${b} = ${180-a-b}°.`);}
    if(t===2){const a=alea(20,160);return saisie(`Two angles lie on a straight line. One is ${a}°. What is the other? (in degrees)`,[String(180-a),`${180-a}°`],`Angles on a straight line add up to 180°: 180 − ${a} = ${180-a}°.`);}
    if(t===3){const a=alea(30,80);return saisie(`An isosceles triangle has a top angle of ${180-2*a}°. What is each of the two equal base angles? (in degrees)`,[String(a),`${a}°`],`(180 − ${180-2*a}) ÷ 2 = ${a}°.`);}
    return parTag(BANQUE_ANGLES.map(x=>({...x,t:"s"})),"s");},
  pythagoras(){const t=alea(1,3),p=pioche(TRIPLES);
    if(t===1)return saisie(`A right-angled triangle has shorter sides ${p[0]} cm and ${p[1]} cm. How long is the hypotenuse? (in cm)`,[String(p[2]),`${p[2]} cm`],`${p[0]}² + ${p[1]}² = ${p[0]**2} + ${p[1]**2} = ${p[2]**2} and √${p[2]**2} = ${p[2]} cm.`);
    if(t===2)return saisie(`A right-angled triangle has a hypotenuse of ${p[2]} cm and one side of ${p[0]} cm. How long is the third side? (in cm)`,[String(p[1]),`${p[1]} cm`],`${p[2]}² − ${p[0]}² = ${p[2]**2} − ${p[0]**2} = ${p[1]**2} and √${p[1]**2} = ${p[1]} cm.`);
    const ok=alea(0,1),c=ok?p[2]:p[2]+1;return qcm(`A triangle has sides ${p[0]} cm, ${p[1]} cm and ${c} cm. Is it right-angled?`,ok?"yes":"no",[ok?"no":"yes"],`${p[0]}² + ${p[1]}² = ${p[0]**2+p[1]**2} and ${c}² = ${c*c}. ${ok?"They are equal, so by the converse of Pythagoras' theorem it is right-angled.":"They are not equal, so it is not right-angled."}`);},
  area(){const t=alea(1,4);
    if(t===1){const b=alea(3,16),h=alea(2,12)*2;return saisie(`What is the area of a triangle with base ${b} cm and height ${h} cm? (in cm²)`,[String(b*h/2),`${b*h/2} cm²`],`Area = base × height ÷ 2 = ${b} × ${h} ÷ 2 = ${b*h/2} cm².`);}
    if(t===2){const b=alea(3,15),h=alea(2,12);return saisie(`What is the area of a parallelogram with base ${b} cm and height ${h} cm? (in cm²)`,[String(b*h),`${b*h} cm²`],`Area = base × height = ${b} × ${h} = ${b*h} cm².`);}
    if(t===3){const r=alea(2,10);return qcm(`What is the area of a circle of radius ${r} cm?`,`${r*r}π cm²`,[`${2*r}π cm²`,`${r}π cm²`,`${4*r*r}π cm²`],`Area = π × r² = π × ${r}² = ${r*r}π cm² (about ${dec(3.14*r*r)} cm²).`);}
    const r=alea(2,10);return saisie(`Using π ≈ 3.14, what is the circumference of a circle of radius ${r} cm? (in cm)`,repN(2*3.14*r).concat([`${dec(2*3.14*r)} cm`]),`Circumference = 2 × π × r ≈ 2 × 3.14 × ${r} = ${dec(2*3.14*r)} cm.`);},
  volume(){const t=alea(1,4);
    if(t===1){const a=alea(2,10),b=alea(2,10),c=alea(2,10);return saisie(`What is the volume of a cuboid ${a} cm × ${b} cm × ${c} cm? (in cm³)`,[String(a*b*c),`${a*b*c} cm³`],`Volume = ${a} × ${b} × ${c} = ${a*b*c} cm³.`);}
    if(t===2){const A=alea(5,40),h=alea(2,12);return saisie(`A prism has a cross-section of area ${A} cm² and a length of ${h} cm. What is its volume? (in cm³)`,[String(A*h),`${A*h} cm³`],`Volume of a prism = area of cross-section × length = ${A} × ${h} = ${A*h} cm³.`);}
    if(t===3){const r=alea(2,6),h=alea(2,10);return qcm(`What is the volume of a cylinder with radius ${r} cm and height ${h} cm?`,`${r*r*h}π cm³`,[`${2*r*h}π cm³`,`${r*h}π cm³`,`${r*r*h*2}π cm³`],`Volume = π × r² × h = π × ${r*r} × ${h} = ${r*r*h}π cm³.`);}
    const s=alea(2,6)*3,h=alea(2,10);return saisie(`A pyramid has a square base of side ${s} cm and a height of ${h} cm. What is its volume? (in cm³)`,[String(s*s*h/3),`${s*s*h/3} cm³`],`Volume = (base area × height) ÷ 3 = ${s*s} × ${h} ÷ 3 = ${s*s*h/3} cm³.`);},
  coords(){const t=alea(1,4);
    if(t===1){const x1=alea(-6,6),y1=alea(-6,6),x2=x1+2*alea(-4,4),y2=y1+2*alea(1,4);return qcm(`What is the midpoint of (${fN(x1)}, ${fN(y1)}) and (${fN(x2)}, ${fN(y2)})?`,`(${fN((x1+x2)/2)}, ${fN((y1+y2)/2)})`,[`(${fN(x2-x1)}, ${fN(y2-y1)})`,`(${fN((y1+y2)/2)}, ${fN((x1+x2)/2)})`,`(${fN(x1+x2)}, ${fN(y1+y2)})`],`Midpoint = (average of the x's, average of the y's) = (${fN((x1+x2)/2)}, ${fN((y1+y2)/2)}).`);}
    if(t===2){const k=alea(1,9)*pioche([-1,1]);const ok=pioche([`(${fN(k)}, 0)`,`(0, ${fN(k)})`]);const onX=ok.endsWith(", 0)");
      return qcm(`Which point lies on the ${onX?"x":"y"}-axis?`,ok,onX?[`(0, ${fN(k)})`,`(${fN(k)}, ${fN(k)})`,`(1, ${fN(k)})`]:[`(${fN(k)}, 0)`,`(${fN(k)}, ${fN(k)})`,`(${fN(k)}, 1)`],`On the ${onX?"x-axis, y = 0":"y-axis, x = 0"}.`);}
    if(t===3)return qcm(`What are the coordinates of the origin?`,"(0, 0)",["(1, 1)","(0, 1)","(1, 0)"],`The origin (l'origine) is where the axes cross: (0, 0).`);
    const x=alea(1,9),y=alea(1,9);if(x===y)return GM.coords();return qcm(`In the point (${x}, ${y}), which number is the x-coordinate?`,String(x),[String(y),String(x+y)],`Coordinates are written (x, y): x first (abscisse), then y (ordonnée).`);},
  functions(){const t=alea(1,4),a=pioche([-1,1])*alea(2,6),b=alea(-9,9);
    const fx=`${cx(a)}${b?plus(b):""}`;
    if(t===1){const x=alea(-4,6);return saisie(`f(x) = ${fx}. What is f(${fN(x)})?`,repN(a*x+b),`f(${fN(x)}) = ${fN(a)} × ${pN(x)}${b?plus(b):""} = ${fN(a*x+b)}.`);}
    if(t===2)return qcm(`What is the gradient of the line y = ${fx}?`,fN(a),[fN(b===a?a+1:b),fN(-a),fN(a+b===a?a+2:a+b)],`In y = mx + c, the gradient (coefficient directeur) is m = ${fN(a)}.`);
    if(t===3){const x=alea(-3,5),y=a*x+b;const fa=[[x,y+1],[y,x],[x+1,y-1],[x,y-2],[x-1,y]].filter(p=>a*p[0]+b!==p[1]).slice(0,3).map(p=>`(${fN(p[0])}, ${fN(p[1])})`);return qcm(`Which point lies on the line y = ${fx}?`,`(${fN(x)}, ${fN(y)})`,fa,`Check: ${fN(a)} × ${pN(x)}${b?plus(b):""} = ${fN(y)}.`);}
    const k=alea(2,9);return qcm(`Which function is linear (its graph is a straight line through the origin)?`,`f(x) = ${k}x`,[`f(x) = ${k}x + ${alea(1,9)}`,`f(x) = x² + ${k}`,`f(x) = ${k}/x`],`A linear function (fonction linéaire) is f(x) = ax.`);},
  stats(){const t=alea(1,3);
    if(t===1){const v=Array.from({length:5},()=>alea(2,20));const s=v.reduce((x,y)=>x+y,0),r=s%5;v[4]+=r?5-r:0;const tot=s+(r?5-r:0);
      return saisie(`Find the mean of: ${v.join(", ")}`,[String(tot/5)],`Mean (la moyenne) = total ÷ 5 = ${tot} ÷ 5 = ${tot/5}.`);}
    if(t===2){const n=pioche([5,7]);const v=Array.from({length:n},()=>alea(1,30));const s=[...v].sort((x,y)=>x-y);
      return saisie(`Find the median of: ${v.join(", ")}`,[String(s[(n-1)/2])],`Put them in order: ${s.join(", ")}. The middle value is the median (la médiane): ${s[(n-1)/2]}.`);}
    const v=Array.from({length:6},()=>alea(1,40));const mx=Math.max(...v),mn=Math.min(...v);return saisie(`Find the range of: ${v.join(", ")}`,[String(mx-mn)],`Range (l'étendue) = biggest − smallest = ${mx} − ${mn} = ${mx-mn}.`);},
  proba(){const t=alea(1,3);
    if(t===1){const r=alea(2,7),b=alea(2,7),g=alea(2,7),tot=r+b+g,c=pioche([["red",r],["blue",b],["green",g]]);
      const bon=frac(c[1],tot);const fa=[`${tot}/${c[1]}`,frac(c[1],tot+1),frac(tot-c[1],tot),`1/${c[1]+1}`].filter(x=>x!==bon);
      return qcm(`A bag has ${r} red, ${b} blue and ${g} green balls. You pick one at random. What is the probability that it is ${c[0]}?`,bon,fa.slice(0,3),`${c[1]} ${c[0]} balls out of ${tot}: P = ${c[1]}/${tot}${bon!==`${c[1]}/${tot}`?" = "+bon:""}.`);}
    if(t===2){const e=pioche([["an even number","1/2","2, 4 and 6: 3 outcomes out of 6 = 1/2"],["a 6","1/6","one outcome out of 6"],["a number bigger than 4","1/3","5 and 6: 2 outcomes out of 6 = 1/3"],["a 7","0","there is no 7 on a dice: it is impossible"],["a number less than 7","1","every number on a dice is less than 7: it is certain"],["a multiple of 3","1/3","3 and 6: 2 outcomes out of 6 = 1/3"]]);
      return qcm(`You roll a fair dice. What is the probability of getting ${e[0]}?`,e[1],["0","1","1/2","1/6","1/3","2/3"].filter(x=>x!==e[1]).slice(0,3),`${maj(e[2])}.`);}
    const p=pioche([["0.3","0.7"],["0.25","0.75"],["0.6","0.4"],["0.15","0.85"],["0.9","0.1"]]);
    return qcm(`The probability that it rains tomorrow is ${p[0]}. What is the probability that it does not rain?`,p[1],[p[0],"1",dec(1+ +p[0])],`The probabilities add up to 1: 1 − ${p[0]} = ${p[1]}.`);},
  transform(){return parTag(BANQUE_TRANSFORM.map(x=>({...x,t:"s"})),"s");},
  trig(){const t=alea(1,3);
    if(t===1){const p=pioche(TRIPLES),f=pioche(["sin","cos","tan"]);const v={sin:[p[0],p[2]],cos:[p[1],p[2]],tan:[p[0],p[1]]}[f];
      return qcm(`In a right-angled triangle, the hypotenuse is ${p[2]} cm. For angle A, the opposite side is ${p[0]} cm and the adjacent side is ${p[1]} cm. What is ${f} A?`,frac(v[0],v[1]),[frac(p[0],p[2]),frac(p[1],p[2]),frac(p[0],p[1]),frac(p[1],p[0])].filter(x=>x!==frac(v[0],v[1])),`SOH CAH TOA: ${f} = ${({sin:"opposite ÷ hypotenuse",cos:"adjacent ÷ hypotenuse",tan:"opposite ÷ adjacent"})[f]} = ${v[0]}/${v[1]}${frac(v[0],v[1])!==`${v[0]}/${v[1]}`?" = "+frac(v[0],v[1]):""}.`);}
    if(t===2){const b=pioche([["cos 60°","0.5"],["sin 30°","0.5"],["tan 45°","1"],["cos 0°","1"],["sin 90°","1"],["sin 0°","0"]]);return qcm(`What is ${b[0]}?`,b[1],["0","0.5","1","2"].filter(x=>x!==b[1]),`${b[0]} = ${b[1]}.`);}
    return pioche([
      ()=>qcm(`In a right-angled triangle, cosine = …`,"adjacent ÷ hypotenuse",["opposite ÷ hypotenuse","opposite ÷ adjacent","hypotenuse ÷ adjacent"],`CAH: Cos = Adjacent ÷ Hypotenuse.`),
      ()=>qcm(`In a right-angled triangle, sine = …`,"opposite ÷ hypotenuse",["adjacent ÷ hypotenuse","opposite ÷ adjacent","adjacent ÷ opposite"],`SOH: Sin = Opposite ÷ Hypotenuse.`),
      ()=>qcm(`In a right-angled triangle, tangent = …`,"opposite ÷ adjacent",["adjacent ÷ opposite","opposite ÷ hypotenuse","adjacent ÷ hypotenuse"],`TOA: Tan = Opposite ÷ Adjacent.`),
      ()=>qcm(`The cosine of an acute angle is always…`,"between 0 and 1",["bigger than 1","negative","equal to 1"],`The adjacent side is shorter than the hypotenuse, so 0 < cos < 1.`)])();},
  eqproblems(){const t=alea(1,3);
    if(t===1){const n=alea(2,15),a=alea(2,6),b=alea(1,20);return saisie(`I think of a number, multiply it by ${a} and add ${b}. The answer is ${a*n+b}. What is my number?`,[String(n)],`${a}n + ${b} = ${a*n+b}, so ${a}n = ${a*n}, so n = ${n}.`);}
    if(t===2){const x=alea(5,20),d=alea(2,9),p=pioche(PRENOMS),q=pioche(PRENOMS.filter(z=>z!==p));return saisie(`${p} and ${q} have ${2*x+d} stickers altogether. ${q} has ${d} more than ${p}. How many stickers does ${p} have?`,[String(x)],`Let x be ${p}'s stickers: x + (x + ${d}) = ${2*x+d}, so 2x = ${2*x}, x = ${x}.`);}
    const w=alea(2,12),l=w+alea(1,10);return saisie(`A rectangle is ${l-w} cm longer than it is wide. Its perimeter is ${2*(l+w)} cm. What is its width? (in cm)`,[String(w),`${w} cm`],`Let w be the width: 2(w + w + ${l-w}) = ${2*(l+w)}, so 4w + ${2*(l-w)} = ${2*(l+w)}, 4w = ${4*w}, w = ${w} cm.`);},
  sequences(){const t=alea(1,3),a=alea(2,9),b=alea(-5,9);
    if(t===1){const u=[1,2,3,4].map(n=>a*n+b);return saisie(`What is the next term? ${u.map(fN).join(", ")}, …`,repN(5*a+b),`The terms go up by ${a} each time: ${fN(u[3])} + ${a} = ${fN(5*a+b)}.`);}
    if(t===2){const n=pioche([10,20,50,100]);return saisie(`The nth term of a sequence is ${lin(a,b)}. What is the ${n}th term?`,repN(a*n+b),`Replace n by ${n}: ${a} × ${n}${b?plus(b):""} = ${fN(a*n+b)}.`);}
    const u=[1,2,3,4].map(n=>a*n+b);return qcm(`What is the nth term of the sequence ${u.map(fN).join(", ")}, …?`,lin(a,b),[lin(a,b+a),lin(1,a),lin(a+1,b-1)],`The terms go up by ${a}, so it starts with ${a}n. Check with n = 1: ${a}${b?plus(b):""} = ${fN(a+b)}.`);},
  problems(){const t=alea(1,4),p=pioche(PRENOMS);
    if(t===1){const l=alea(3,9),pr=alea(140,199)/100;return saisie(`Petrol costs £${pr.toFixed(2)} per litre. ${p} buys ${l*5} litres. How much does that cost? (in pounds)`,repN(Math.round(pr*100)*l*5/100).concat([`£${dec(Math.round(pr*100)*l*5/100)}`,`£${(Math.round(pr*100)*l*5/100).toFixed(2)}`]),`${l*5} × ${pr.toFixed(2)} = £${(Math.round(pr*100)*l*5/100).toFixed(2)}.`);}
    if(t===2){const a=alea(31,89),b=alea(21,69);const e=Math.round(a/10)*10*Math.round(b/10)*10;return qcm(`Estimate ${a} × ${b} by rounding each number to the nearest 10.`,String(e),[String(e*10),String(Math.round(e/10)),String(e+1000)],`${a} ≈ ${Math.round(a/10)*10} and ${b} ≈ ${Math.round(b/10)*10}, so about ${e}. (Exact: ${a*b}.)`);}
    if(t===3){const v=alea(3,9)*1000,p2=pioche([2,3,4,5]);return saisie(`£${v} is put in a savings account at ${p2}% simple interest per year. How much interest is earned after 1 year? (in pounds)`,[String(v*p2/100),`£${v*p2/100}`],`${p2}% of ${v} = ${v} × ${p2} ÷ 100 = £${v*p2/100}.`);}
    const c=alea(301,1299);if(c%10===0)return GM.problems();const x=(c/100).toFixed(2),r=(Math.round(c/10)/10).toFixed(1);return qcm(`Round ${x} to 1 decimal place.`,r,[(Math.floor(c/10)/10).toFixed(1),(Math.ceil(c/10)/10).toFixed(1),(Math.round(c/10)/10+0.1).toFixed(1),String(Math.round(c/100))],`Look at the second decimal digit, ${c%10}: ${c%10>=5?"5 or more, so round up":"less than 5, so round down"}. ${x} ≈ ${r}.`);}
};
const REVUES={
  rev1:["order","negadd","negmult","fracsimp","fracadd","fracmult"],
  rev2:["powers","standard","primes","expr","expand","equations"],
  rev3:["percent","perchange","ratio","speed","angles","pythagoras"],
  rev4:["area","volume","coords","functions","stats","proba"],
  rev5:["expr","expand","equations","functions","sequences","eqproblems"],
  rev6:["order","negmult","fracadd","powers","equations","percent","pythagoras","area"],
  rev7:["fracmult","standard","primes","perchange","ratio","volume","stats","proba","trig","transform"]
};
function exoMaths(tag){
  if(REVUES[tag])tag=pioche(REVUES[tag]);
  const f=GM[tag]||GM[pioche(Object.keys(GM))];return f();
}

/* Le petit calcul du début (mental maths) */
function mental(semaine){
  const types=["x","neg","sq","pc","x01"];if(semaine>=8)types.push("root");if(semaine>=4)types.push("fr");
  const t=pioche(types);
  if(t==="x"){const a=alea(6,15),b=alea(3,12);return saisie(`Mental maths: what is ${a} × ${b}?`,[String(a*b)],`${a} × ${b} = ${a*b}.`);}
  if(t==="neg"){const a=pioche([-1,1])*alea(1,12),b=a>0?-alea(1,12):pioche([-1,1])*alea(1,12);return saisie(`Mental maths: what is ${fN(a)} + ${pN(b)}?`,repN(a+b),`${fN(a)} + ${pN(b)} = ${fN(a+b)}.`);}
  if(t==="sq"){const a=alea(3,15);return saisie(`Mental maths: what is ${a} squared?`,[String(a*a)],`${a}² = ${a*a}.`);}
  if(t==="pc"){const p=pioche([10,20,25,50]),v=alea(2,30)*20;return saisie(`Mental maths: what is ${p}% of ${v}?`,[String(v*p/100)],`${p}% of ${v} = ${v*p/100}.`);}
  if(t==="x01"){const a=alea(12,999);return saisie(`Mental maths: what is ${a} × 0.1?`,repN(a/10),`× 0.1 is the same as ÷ 10: ${dec(a/10)}.`);}
  if(t==="root"){const a=alea(2,13);return saisie(`Mental maths: what is the square root of ${a*a}?`,[String(a)],`${a} × ${a} = ${a*a}, so √${a*a} = ${a}.`);}
  const d=pioche([3,4,5,8]),n=pioche([1,2,3,4,5,6,7].filter(x=>x<d&&pgcd(x,d)===1)),q=d*alea(2,12);return saisie(`Mental maths: what is ${n}/${d} of ${q}?`,[String(q*n/d)],`${q} ÷ ${d} × ${n} = ${q*n/d}.`);
}

/* =========================================================
   4. MATHS WORDS (vocabulaire)
   ========================================================= */
const MOTS=[
 ["ops","brackets","les parenthèses"],["ops","order of operations","les priorités opératoires"],["ops","calculate","calculer"],["ops","product","le produit"],["ops","quotient","le quotient"],["ops","sum","la somme"],["ops","difference","la différence"],["ops","estimate","estimer"],["ops","approximately","environ"],["ops","decimal place","une décimale"],
 ["negative","negative number","un nombre négatif"],["negative","positive number","un nombre positif"],["negative","below zero","en dessous de zéro"],["negative","opposite","l'opposé"],["negative","sign","un signe"],["negative","temperature","la température"],
 ["fractions","numerator","le numérateur"],["fractions","denominator","le dénominateur"],["fractions","simplest form","la forme irréductible"],["fractions","common denominator","un dénominateur commun"],["fractions","reciprocal","l'inverse"],["fractions","mixed number","un nombre mixte"],["fractions","improper fraction","une fraction supérieure à 1"],
 ["powers","power","une puissance"],["powers","index","un exposant"],["powers","squared","au carré"],["powers","cubed","au cube"],["powers","square root","une racine carrée"],["powers","standard form","la notation scientifique"],["powers","billion","un milliard"],
 ["primes","prime number","un nombre premier"],["primes","factor","un diviseur"],["primes","multiple","un multiple"],["primes","highest common factor","le plus grand diviseur commun (PGCD)"],["primes","prime factorisation","la décomposition en facteurs premiers"],["primes","divisible","divisible"],
 ["algebra","expression","une expression"],["algebra","term","un terme"],["algebra","variable","une variable"],["algebra","substitute","remplacer (substituer)"],["algebra","expand","développer"],["algebra","simplify","réduire (simplifier)"],["algebra","like terms","des termes semblables"],["algebra","coefficient","un coefficient"],["algebra","formula","une formule"],["algebra","sequence","une suite"],["algebra","nth term","le terme de rang n"],["algebra","factorise","factoriser"],
 ["equations","equation","une équation"],["equations","solve","résoudre"],["equations","unknown","une inconnue"],["equations","solution","une solution"],["equations","both sides","les deux membres"],["equations","inequality","une inéquation"],
 ["percent","percentage","un pourcentage"],["percent","increase","une augmentation"],["percent","decrease","une diminution"],["percent","discount","une réduction"],["percent","multiplier","un coefficient multiplicateur"],["percent","VAT","la TVA"],["percent","interest","les intérêts"],
 ["ratio","ratio","un ratio"],["ratio","proportion","une proportion"],["ratio","share","partager"],["ratio","speed","la vitesse"],["ratio","distance","la distance"],["ratio","per hour","par heure"],["ratio","proportional","proportionnel"],
 ["angles","alternate angles","des angles alternes-internes"],["angles","corresponding angles","des angles correspondants"],["angles","vertically opposite angles","des angles opposés par le sommet"],["angles","interior angle","un angle intérieur"],["angles","parallel lines","des droites parallèles"],["angles","straight line","une ligne droite"],
 ["pythagoras","hypotenuse","l'hypoténuse"],["pythagoras","right-angled triangle","un triangle rectangle"],["pythagoras","theorem","un théorème"],["pythagoras","converse","la réciproque"],["pythagoras","proof","une démonstration"],
 ["area","area","l'aire"],["area","base","la base"],["area","height","la hauteur"],["area","circumference","le périmètre du cercle"],["area","radius","le rayon"],["area","diameter","le diamètre"],["area","parallelogram","un parallélogramme"],["area","trapezium","un trapèze"],
 ["volume","volume","le volume"],["volume","prism","un prisme"],["volume","cylinder","un cylindre"],["volume","pyramid","une pyramide"],["volume","cone","un cône"],["volume","sphere","une sphère"],["volume","cross-section","la section"],["volume","cuboid","un pavé droit"],
 ["graphs","axis","un axe"],["graphs","coordinates","les coordonnées"],["graphs","origin","l'origine"],["graphs","graph","un graphique (une courbe)"],["graphs","function","une fonction"],["graphs","linear","linéaire"],["graphs","gradient","le coefficient directeur"],["graphs","y-intercept","l'ordonnée à l'origine"],
 ["stats","mean","la moyenne"],["stats","median","la médiane"],["stats","mode","le mode (la valeur la plus fréquente)"],["stats","range","l'étendue"],["stats","frequency","l'effectif"],["stats","data","les données"],
 ["proba","probability","une probabilité"],["proba","likely","probable"],["proba","unlikely","peu probable"],["proba","certain","certain"],["proba","impossible","impossible"],["proba","outcome","une issue"],["proba","event","un événement"],["proba","at random","au hasard"],["proba","fair dice","un dé équilibré"],
 ["transform","reflection","une symétrie axiale"],["transform","rotation","une rotation"],["transform","translation","une translation"],["transform","enlargement","un agrandissement"],["transform","scale factor","le coefficient d'agrandissement"],["transform","image","l'image"],
 ["trig","sine","le sinus"],["trig","cosine","le cosinus"],["trig","tangent","la tangente"],["trig","opposite side","le côté opposé"],["trig","adjacent side","le côté adjacent"]
].map(([t,en,fr])=>({t,en,fr}));
const PHRASES=[
 {t:"ops",s:"In 3 + 4 × 2, you do the multiplication first because of the order of ___.",b:"operations",f:["fractions","angles","equations"],e:"The order of operations (les priorités opératoires)."},
 {t:"ops",s:"In (5 + 3) × 2, you work out the ___ first.",b:"brackets",f:["powers","angles","remainders"],e:"Brackets (les parenthèses) come first."},
 {t:"ops",s:"The ___ of 6 and 8 is 48.",b:"product",f:["sum","difference","quotient"],e:"The product (le produit) is the result of a multiplication."},
 {t:"ops",s:"Round 3.476 to one decimal ___: 3.5.",b:"place",f:["point","digit","number"],e:"One decimal place (une décimale)."},
 {t:"negative",s:"−7 is a ___ number.",b:"negative",f:["positive","prime","square"],e:"Negative (négatif): less than zero."},
 {t:"negative",s:"The ___ of 5 is −5.",b:"opposite",f:["reciprocal","square","factor"],e:"The opposite (l'opposé) of 5 is −5."},
 {t:"negative",s:"In winter the temperature can fall ___ zero.",b:"below",f:["above","over","between"],e:"Below zero (en dessous de zéro): −3 °C."},
 {t:"fractions",s:"The ___ of 2/3 is 3/2.",b:"reciprocal",f:["opposite","square","numerator"],e:"The reciprocal (l'inverse) of 2/3 is 3/2."},
 {t:"fractions",s:"6/8 in its simplest ___ is 3/4.",b:"form",f:["shape","term","angle"],e:"Simplest form (forme irréductible)."},
 {t:"fractions",s:"To add 1/3 and 1/4, use the common ___ 12.",b:"denominator",f:["numerator","factor","multiplier"],e:"A common denominator (dénominateur commun)."},
 {t:"powers",s:"5 × 5 can be written 5², « five ___ ».",b:"squared",f:["cubed","doubled","halved"],e:"5² = five squared (cinq au carré)."},
 {t:"powers",s:"2 × 2 × 2 = 2³, « two ___ ».",b:"cubed",f:["squared","tripled","times"],e:"2³ = two cubed (deux au cube)."},
 {t:"powers",s:"The square ___ of 49 is 7.",b:"root",f:["power","index","factor"],e:"The square root (la racine carrée): √49 = 7."},
 {t:"powers",s:"3 × 10⁸ is written in ___ form.",b:"standard",f:["simplest","expanded","linear"],e:"Standard form (notation scientifique)."},
 {t:"primes",s:"13 is a ___ number: it has exactly two factors.",b:"prime",f:["square","even","negative"],e:"A prime number (nombre premier)."},
 {t:"primes",s:"The highest common ___ of 12 and 18 is 6.",b:"factor",f:["multiple","product","term"],e:"Highest common factor (PGCD)."},
 {t:"algebra",s:"In 3x + 5, the number 3 is the ___ of x.",b:"coefficient",f:["index","variable","solution"],e:"The coefficient (le coefficient)."},
 {t:"algebra",s:"To ___ 2(x + 3) means to write 2x + 6.",b:"expand",f:["factorise","solve","substitute"],e:"To expand (développer)."},
 {t:"algebra",s:"3x and 5x are like ___: you can add them.",b:"terms",f:["angles","factors","sides"],e:"Like terms (termes semblables)."},
 {t:"algebra",s:"To ___ x = 2 into 4x means to calculate 4 × 2.",b:"substitute",f:["expand","simplify","factorise"],e:"To substitute (remplacer)."},
 {t:"algebra",s:"3, 7, 11, 15 is a ___: each term is 4 more than the last.",b:"sequence",f:["equation","fraction","ratio"],e:"A sequence (une suite)."},
 {t:"equations",s:"Do the same thing to both ___ of an equation.",b:"sides",f:["angles","faces","terms"],e:"Both sides (les deux membres)."},
 {t:"equations",s:"x = 4 is the ___ of the equation 2x = 8.",b:"solution",f:["question","coefficient","formula"],e:"The solution (la solution)."},
 {t:"equations",s:"In 2x + 1 = 9, the letter x is the ___.",b:"unknown",f:["answer","power","coefficient"],e:"The unknown (l'inconnue)."},
 {t:"percent",s:"Prices went up: there was a 10% ___.",b:"increase",f:["decrease","discount","ratio"],e:"An increase (une augmentation)."},
 {t:"percent",s:"In the sales there is a 30% ___ on all shoes.",b:"discount",f:["increase","interest","multiplier"],e:"A discount (une réduction)."},
 {t:"percent",s:"To increase by 20%, multiply by 1.2: 1.2 is the ___.",b:"multiplier",f:["divisor","remainder","index"],e:"The multiplier (coefficient multiplicateur)."},
 {t:"percent",s:"The bank pays 2% ___ on your savings each year.",b:"interest",f:["discount","VAT","ratio"],e:"Interest (les intérêts)."},
 {t:"ratio",s:"There are 2 boys for every 3 girls: the ___ is 2:3.",b:"ratio",f:["percentage","product","gradient"],e:"A ratio (un ratio) compares two quantities."},
 {t:"ratio",s:"Speed = distance ÷ ___.",b:"time",f:["mass","area","volume"],e:"Speed (vitesse) = distance ÷ time."},
 {t:"ratio",s:"A car at 60 km ___ hour goes 60 km in one hour.",b:"per",f:["by","of","in"],e:"km per hour (km/h)."},
 {t:"angles",s:"Angles on a straight ___ add up to 180°.",b:"line",f:["circle","square","point"],e:"A straight line (une ligne droite)."},
 {t:"angles",s:"___ angles make a Z shape between parallel lines.",b:"Alternate",f:["Corresponding","Right","Reflex"],e:"Alternate angles (alternes-internes): the Z shape."},
 {t:"angles",s:"___ angles make an F shape between parallel lines.",b:"Corresponding",f:["Alternate","Straight","Interior"],e:"Corresponding angles (correspondants): the F shape."},
 {t:"pythagoras",s:"The longest side of a right-angled triangle is the ___.",b:"hypotenuse",f:["diameter","radius","diagonal"],e:"The hypotenuse (l'hypoténuse) is opposite the right angle."},
 {t:"pythagoras",s:"We use the ___ of Pythagoras' theorem to show a triangle is right-angled.",b:"converse",f:["opposite","reciprocal","inverse"],e:"The converse (la réciproque)."},
 {t:"area",s:"The ___ of a circle is 2 × π × r.",b:"circumference",f:["area","volume","diameter"],e:"Circumference (le périmètre du cercle)."},
 {t:"area",s:"Area of a triangle = base × ___ ÷ 2.",b:"height",f:["width","radius","volume"],e:"The height (la hauteur)."},
 {t:"area",s:"The ___ of a circle is twice its radius.",b:"diameter",f:["circumference","area","centre"],e:"The diameter (le diamètre)."},
 {t:"volume",s:"A tin of soup is a ___.",b:"cylinder",f:["cone","prism","pyramid"],e:"A cylinder (un cylindre)."},
 {t:"volume",s:"Volume of a prism = area of the cross-___ × length.",b:"section",f:["side","face","point"],e:"The cross-section (la section)."},
 {t:"volume",s:"An ice-cream ___ has a circular base and a point.",b:"cone",f:["cylinder","cube","prism"],e:"A cone (un cône)."},
 {t:"graphs",s:"The point (0, 0) is called the ___.",b:"origin",f:["centre","axis","gradient"],e:"The origin (l'origine)."},
 {t:"graphs",s:"In y = 3x + 2, the ___ is 3.",b:"gradient",f:["origin","intercept","axis"],e:"The gradient (coefficient directeur)."},
 {t:"graphs",s:"The horizontal ___ is the x-axis.",b:"axis",f:["origin","gradient","line of symmetry"],e:"An axis (un axe); plural: axes."},
 {t:"stats",s:"The ___ is the middle value when the data is in order.",b:"median",f:["mean","range","mode"],e:"The median (la médiane)."},
 {t:"stats",s:"The ___ is the biggest value minus the smallest value.",b:"range",f:["median","mean","mode"],e:"The range (l'étendue)."},
 {t:"stats",s:"The ___ is the value that appears most often.",b:"mode",f:["median","range","mean"],e:"The mode (la valeur la plus fréquente)."},
 {t:"stats",s:"To find the ___, add all the values and divide by how many there are.",b:"mean",f:["median","mode","range"],e:"The mean (la moyenne)."},
 {t:"proba",s:"Getting a 7 on a normal dice is ___.",b:"impossible",f:["certain","likely","even"],e:"Impossible: probability 0."},
 {t:"proba",s:"The sun rising tomorrow is ___.",b:"certain",f:["impossible","unlikely","random"],e:"Certain: probability 1."},
 {t:"proba",s:"Rolling a dice has six possible ___.",b:"outcomes",f:["angles","faces of a cube","answers"],e:"An outcome (une issue)."},
 {t:"proba",s:"Pick a card at ___ without looking.",b:"random",f:["chance","luck","rate"],e:"At random (au hasard)."},
 {t:"transform",s:"A ___ slides a shape without turning it.",b:"translation",f:["rotation","reflection","enlargement"],e:"A translation (une translation)."},
 {t:"transform",s:"An enlargement with scale ___ 2 doubles all lengths.",b:"factor",f:["number","ratio","term"],e:"The scale factor (le coefficient d'agrandissement)."},
 {t:"trig",s:"Cosine = ___ ÷ hypotenuse.",b:"adjacent",f:["opposite","radius","base"],e:"CAH: Cos = Adjacent ÷ Hypotenuse."},
 {t:"trig",s:"Tangent = opposite ÷ ___.",b:"adjacent",f:["hypotenuse","diameter","height"],e:"TOA: Tan = Opposite ÷ Adjacent."},
 {t:"trig",s:"___ = opposite ÷ hypotenuse.",b:"Sine",f:["Cosine","Tangent","Gradient"],e:"SOH: Sin = Opposite ÷ Hypotenuse."}
];
const UNITES_EN=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
const DIZAINES_EN=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
function enLettres(n){
  if(n<20)return UNITES_EN[n];
  if(n<100)return DIZAINES_EN[Math.floor(n/10)]+(n%10?"-"+UNITES_EN[n%10]:"");
  if(n<1000){const h=Math.floor(n/100),r=n%100;return UNITES_EN[h]+" hundred"+(r?" and "+enLettres(r):"");}
  if(n<1000000){const m=Math.floor(n/1000),r=n%1000;return enLettres(m)+" thousand"+(r?(r<100?" and ":" ")+enLettres(r):"");}
  const m=Math.floor(n/1000000),r=n%1000000;return enLettres(m)+" million"+(r?(r<100?" and ":" ")+enLettres(r):"");
}
/* Lire des nombres en anglais : relatifs, décimaux, fractions, puissances */
function exoLecture(){
  const t=alea(1,4);
  if(t===1){const n=alea(2,99);return saisie(`Write in figures: minus ${enLettres(n)}`,repN(-n),`« minus ${enLettres(n)} » = −${n}. We also say « negative ${enLettres(n)} ».`);}
  if(t===2){const n=alea(101,9999)/100;const s=dec(n),[e,d]=s.split(".");if(!d)return exoLecture();const lu=`${enLettres(+e)} point ${d.split("").map(c=>UNITES_EN[+c]).join(" ")}`;
    return saisie(`Write in figures: ${lu}`,repN(n),`« ${lu} » = ${s}. « Point » is the decimal point (la virgule).`);}
  if(t===3){const b=pioche([["three quarters","3/4"],["two thirds","2/3"],["three fifths","3/5"],["seven tenths","7/10"],["five eighths","5/8"],["one sixth","1/6"],["four ninths","4/9"],["eleven twelfths","11/12"]]);
    return qcm(`Which fraction is « ${b[0]} »?`,b[1],melange(["3/4","2/3","3/5","7/10","5/8","1/6","4/9","11/12","4/3","1/4"].filter(x=>x!==b[1])).slice(0,3),`« ${b[0]} » = ${b[1]}.`);}
  const b=pioche([["two to the power of five","2⁵"],["five squared","5²"],["ten cubed","10³"],["three to the power of four","3⁴"],["seven squared","7²"],["four cubed","4³"],["ten to the power of minus two","10⁻²"]]);
  return qcm(`How do you write « ${b[0]} »?`,b[1],melange(["2⁵","5²","10³","3⁴","7²","4³","10⁻²","5²","2³"].filter(x=>x!==b[1])).slice(0,3),`« ${b[0]} » = ${b[1]}.`);
}
function autresMots(m){return melange(MOTS.filter(x=>x.t!==m.t&&x.fr!==m.fr&&x.en!==m.en));}
function exoMots(tag){
  const liste=tag==="all"?MOTS:MOTS.filter(x=>x.t===tag);
  const t=alea(1,4);
  if(t===4)return (tag==="negative"||tag==="powers"||tag==="fractions"||alea(0,1))?exoLecture():exoMots(tag);
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

export const programme = { code: "maths-en-c4", nom: "Maths in English · 5e-3e", rituel: "Toute la séance est en anglais ! On commence par un petit calcul (mental maths). Décimaux avec un point (2.5, la virgule est acceptée) ; nombres négatifs avec un tiret (-5).", SEMAINES, JOURS, NOM_MAT, PERIODES, matiereDuJour, seanceHorsLigne };
