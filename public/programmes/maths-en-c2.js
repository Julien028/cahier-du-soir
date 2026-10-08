// Programme « Maths in English · CP-CE2 » (6 à 8 ans, débutants en anglais), créé le 08/10/2026.
// Les maths du cycle 2, entièrement en anglais (anglais britannique simple).

/* =========================================================
   1. LE PROGRAMME — 36 SEMAINES
   t = étiquettes : maths | mots (vocabulaire)
   ========================================================= */
const SEMAINES=[
{n:1,p:1,m:"Counting up to 10 (compter jusqu'à 10)",v:"number, count, first, last, next, how many (nombre, compter, premier, dernier, suivant, combien)",t:"n10|count"},
{n:2,p:1,m:"Numbers from 11 to 20 (les nombres de 11 à 20)",v:"eleven, twelve, thirteen, fifteen, twenty (onze, douze, treize, quinze, vingt)",t:"n20|numbers"},
{n:3,p:1,m:"Adding numbers up to 20 (additionner jusqu'à 20)",v:"add, plus, equals, total, altogether (ajouter, plus, égale, total, en tout)",t:"add20|add"},
{n:4,p:1,m:"Taking away up to 20 (soustraire jusqu'à 20)",v:"take away, minus, subtract, difference (enlever, moins, soustraire, différence)",t:"sub20|sub"},
{n:5,p:1,m:"Comparing numbers: more or less (comparer les nombres)",v:"bigger, smaller, the same, greater than, less than (plus grand, plus petit, pareil, supérieur à, inférieur à)",t:"compare|compare"},
{n:6,p:1,m:"Flat shapes: circle, square, triangle, rectangle (les figures planes)",v:"circle, square, triangle, rectangle, side, corner (cercle, carré, triangle, rectangle, côté, coin)",t:"shapes|shapes"},
{n:7,p:1,m:"Review of term 1 (bilan de la période 1)",v:"numbers and adding words (les nombres et les mots de l'addition)",t:"rev1|add"},
{n:8,p:2,m:"Tens and ones up to 100 (dizaines et unités jusqu'à 100)",v:"tens, ones, digit, hundred (dizaines, unités, chiffre, cent)",t:"tens|place"},
{n:9,p:2,m:"Counting in 2s, 5s and 10s (compter de 2 en 2, de 5 en 5, de 10 en 10)",v:"twenty, thirty, forty … one hundred (vingt, trente, quarante … cent)",t:"skip|tensnum"},
{n:10,p:2,m:"Odd and even numbers (nombres pairs et impairs)",v:"odd, even, before, after (impair, pair, avant, après)",t:"oddeven|oddeven"},
{n:11,p:2,m:"Doubles and halves (doubles et moitiés)",v:"double, half, twice (double, moitié, deux fois)",t:"doubles|doubles"},
{n:12,p:2,m:"Adding numbers up to 100 (additionner jusqu'à 100)",v:"add, plus, sum, addition (ajouter, plus, somme, addition)",t:"add100|add"},
{n:13,p:2,m:"Subtracting numbers up to 100 (soustraire jusqu'à 100)",v:"minus, subtract, subtraction, difference (moins, soustraire, soustraction, différence)",t:"sub100|sub"},
{n:14,p:2,m:"Review of term 2 (bilan de la période 2)",v:"place value words (dizaines, unités, pair, impair)",t:"rev2|place"},
{n:15,p:3,m:"Money: pounds, pence and euros (la monnaie)",v:"coin, note, price, change, buy, cost (pièce, billet, prix, monnaie rendue, acheter, coûter)",t:"money|money"},
{n:16,p:3,m:"Telling the time: o'clock and half past (lire l'heure : heure pile et demie)",v:"clock, hour, minute, o'clock, half past (horloge, heure, minute, heure pile, et demie)",t:"time|time"},
{n:17,p:3,m:"Days of the week and months (les jours et les mois)",v:"Monday … Sunday, week, month, year (lundi … dimanche, semaine, mois, année)",t:"calendar|days"},
{n:18,p:3,m:"The 2 times table (la table de 2)",v:"times, multiply, groups of (fois, multiplier, des groupes de)",t:"x2|mult"},
{n:19,p:3,m:"The 5 and 10 times tables (les tables de 5 et de 10)",v:"times, multiply, times table (fois, multiplier, table de multiplication)",t:"x510|mult"},
{n:20,p:3,m:"Sharing equally (partager en parts égales)",v:"share, each, divide, equal groups (partager, chacun, diviser, groupes égaux)",t:"share|share"},
{n:21,p:3,m:"Review of term 3 (bilan de la période 3)",v:"money and time words (les mots de la monnaie et de l'heure)",t:"rev3|time"},
{n:22,p:4,m:"Numbers up to 1000 (les nombres jusqu'à 1000)",v:"hundred, thousand, hundreds, tens, ones (cent, mille, centaines, dizaines, unités)",t:"n1000|hundreds"},
{n:23,p:4,m:"Length: centimetres and metres (les longueurs : cm et m)",v:"long, short, tall, ruler, metre, centimetre (long, court, grand, règle, mètre, centimètre)",t:"length|measure"},
{n:24,p:4,m:"Mass and capacity: kilograms and litres (masses et contenances)",v:"heavy, light, full, empty, kilogram, litre (lourd, léger, plein, vide, kilogramme, litre)",t:"mass|measure"},
{n:25,p:4,m:"Solid shapes: cube, sphere, cone, cylinder (les solides)",v:"cube, sphere, cone, cylinder, face, edge (cube, boule, cône, cylindre, face, arête)",t:"solids|solids"},
{n:26,p:4,m:"Telling the time: quarter past and quarter to (et quart, moins le quart)",v:"quarter past, quarter to, morning, afternoon (et quart, moins le quart, matin, après-midi)",t:"time2|time"},
{n:27,p:4,m:"Word problems (les problèmes)",v:"problem, answer, how many, altogether, each (problème, réponse, combien, en tout, chacun)",t:"problems|problems"},
{n:28,p:4,m:"Review of term 4 (bilan de la période 4)",v:"measure and shape words (les mots des mesures et des formes)",t:"rev4|measure"},
{n:29,p:5,m:"The 3 and 4 times tables (les tables de 3 et de 4)",v:"times, multiply, groups of (fois, multiplier, des groupes de)",t:"x34|mult"},
{n:30,p:5,m:"Fractions: a half and a quarter (fractions : un demi, un quart)",v:"half, quarter, third, whole, equal parts (moitié, quart, tiers, entier, parts égales)",t:"fractions|fractions"},
{n:31,p:5,m:"Position and direction (se repérer dans l'espace)",v:"on the left, on the right, above, below, next to, between (à gauche, à droite, au-dessus, en dessous, à côté de, entre)",t:"position|position"},
{n:32,p:5,m:"Money problems (problèmes de monnaie)",v:"price, change, cheap, expensive (prix, monnaie rendue, pas cher, cher)",t:"money2|money"},
{n:33,p:5,m:"Adding and subtracting bigger numbers (additions et soustractions posées)",v:"add, subtract, total, difference (ajouter, soustraire, total, différence)",t:"column|sub"},
{n:34,p:5,m:"Review: the times tables (bilan : les tables)",v:"multiplication and sharing words (les mots de la multiplication et du partage)",t:"tables|share"},
{n:35,p:5,m:"End-of-year review 1 (bilan de l'année 1)",v:"numbers up to 1000 (les nombres jusqu'à 1000)",t:"rev5|hundreds"},
{n:36,p:5,m:"End-of-year review 2 and challenges (bilan de l'année 2 et défis)",v:"all the maths words of the year (tous les mots de l'année)",t:"rev6|all"}
];
SEMAINES.forEach(s=>{const t=s.t.split("|");s.tm=t[0];s.tv=t[1];});

const JOURS=[
 {nom:"Lundi",mat:"m",min:8},
 {nom:"Mardi",mat:"m",min:8},
 {nom:"Mercredi",mat:"v",min:8},
 {nom:"Jeudi",mat:"m",min:8},
 {nom:"Vendredi",mat:"m",min:8},
 {nom:"Week-end",mat:"rev",min:8}
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
const nb=x=>[String(x)];
const PRENOMS=["Tom","Emma","Lucas","Chloé","Oliver","Léa","Amelia","Hugo","Jack","Manon","Harry","Inès","Lily","Jules","Noah","Camille","Sophie","Théo","Grace","Louis","Mia","Nathan","Ella","Arthur"];

/* Les nombres en lettres (anglais britannique) */
const UNITES_EN=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
const DIZAINES_EN=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
function enLettres(n){
  if(n<20)return UNITES_EN[n];
  if(n<100)return DIZAINES_EN[Math.floor(n/10)]+(n%10?"-"+UNITES_EN[n%10]:"");
  if(n<1000){const h=Math.floor(n/100),r=n%100;return UNITES_EN[h]+" hundred"+(r?" and "+enLettres(r):"");}
  const m=Math.floor(n/1000),r=n%1000;
  return enLettres(m)+" thousand"+(r?(r<100?" and ":" ")+enLettres(r):"");
}

/* =========================================================
   3. MATHS IN ENGLISH
   ========================================================= */
const BANQUE_SHAPES=[
 {q:"How many sides does a triangle have?",b:"3",f:["4","5","2"],e:"A triangle has 3 sides and 3 corners (coins)."},
 {q:"How many sides does a square have?",b:"4",f:["3","5","6"],e:"A square has 4 equal sides."},
 {q:"How many corners does a rectangle have?",b:"4",f:["3","2","6"],e:"A rectangle has 4 corners (coins) and 4 sides."},
 {q:"Which shape is round?",b:"a circle",f:["a square","a triangle","a rectangle"],e:"A circle (un cercle) is round: it has no corners."},
 {q:"Which shape has 3 sides?",b:"a triangle",f:["a square","a circle","a rectangle"],e:"Tri means three: a triangle has 3 sides."},
 {q:"Which shape has 4 equal sides?",b:"a square",f:["a triangle","a circle","a pentagon"],e:"All the sides of a square (un carré) are the same length."},
 {q:"How many corners does a circle have?",b:"0",f:["1","2","4"],e:"A circle is round: it has no corners."},
 {q:"A door is usually the shape of a…",b:"rectangle",f:["circle","triangle","star"],e:"A door has 2 long sides and 2 short sides: it is a rectangle."},
 {q:"How many sides does a pentagon have?",b:"5",f:["4","6","3"],e:"Penta means five: a pentagon has 5 sides."},
 {q:"How many sides does a hexagon have?",b:"6",f:["5","8","4"],e:"A hexagon has 6 sides, like a honeycomb cell."},
 {q:"A coin is usually the shape of a…",b:"circle",f:["square","triangle","rectangle"],e:"Most coins are round, like a circle."},
 {q:"A rectangle has 2 long sides and 2 … sides.",b:"short",f:["round","curved","tall"],e:"A rectangle has 2 long sides and 2 short sides."}
];
const BANQUE_SOLIDS=[
 {q:"How many faces does a cube have?",b:"6",f:["4","8","12"],e:"A cube has 6 square faces (faces)."},
 {q:"Which solid looks like a ball?",b:"a sphere",f:["a cube","a cone","a cylinder"],e:"A ball is a sphere (une boule)."},
 {q:"Which solid looks like a dice?",b:"a cube",f:["a sphere","a cone","a pyramid"],e:"A dice is a cube (un cube): 6 square faces."},
 {q:"Which solid looks like an ice-cream cone?",b:"a cone",f:["a cube","a sphere","a cylinder"],e:"It is a cone (un cône): a round base and a point."},
 {q:"Which solid looks like a tin of beans?",b:"a cylinder",f:["a cone","a cube","a pyramid"],e:"A tin is a cylinder (un cylindre): 2 round faces."},
 {q:"How many edges does a cube have?",b:"12",f:["6","8","4"],e:"A cube has 12 edges (arêtes), 6 faces and 8 corners."},
 {q:"How many corners does a cube have?",b:"8",f:["6","12","4"],e:"A cube has 8 corners (sommets)."},
 {q:"Which solid can roll and has no flat face?",b:"a sphere",f:["a cube","a cylinder","a pyramid"],e:"A sphere is round all over: no flat faces."},
 {q:"What shape is each face of a cube?",b:"a square",f:["a triangle","a circle","a rectangle"],e:"All 6 faces of a cube are squares."},
 {q:"The Egyptians built big…",b:"pyramids",f:["cubes","spheres","cylinders"],e:"The pyramids of Egypt have triangle faces."}
];
const BANQUE_POSITION=[
 {q:"The bird is above the tree. So the tree is … the bird.",b:"below",f:["above","behind","next to"],e:"Above (au-dessus) is the opposite of below (en dessous)."},
 {q:"Tom is between Emma and Léa. Who is in the middle?",b:"Tom",f:["Emma","Léa","nobody"],e:"Between (entre) means in the middle."},
 {q:"You write with your right hand. Your other hand is your … hand.",b:"left",f:["right","top","front"],e:"Left (gauche) and right (droite)."},
 {q:"The cat is in front of the box. So the box is … the cat.",b:"behind",f:["in front of","above","between"],e:"In front of (devant) is the opposite of behind (derrière)."},
 {q:"The sun is … the clouds.",b:"above",f:["below","under","inside"],e:"The sun is high in the sky: above (au-dessus de) the clouds."},
 {q:"Your shoes are … your feet.",b:"on",f:["above","between","behind"],e:"You wear your shoes on your feet."},
 {q:"The fish is in the water. The fish is … the water.",b:"inside",f:["above","on top of","behind"],e:"Inside (à l'intérieur) means in."},
 {q:"What is the opposite of up?",b:"down",f:["left","right","next"],e:"Up (en haut) and down (en bas)."},
 {q:"What is the opposite of left?",b:"right",f:["down","up","behind"],e:"Left (gauche) and right (droite)."},
 {q:"In the word CAT, which letter is between C and T?",b:"A",f:["C","T","S"],e:"A is in the middle: between (entre) C and T."},
 {q:"In the row 3, 7, 9, which number is on the left?",b:"3",f:["7","9","none"],e:"We read from left (gauche) to right (droite): 3 is on the left."},
 {q:"Turn a quarter turn to the right, then a quarter turn to the left. Which way are you facing?",b:"the same way as at the start",f:["the opposite way","to the right","to the left"],e:"The two turns cancel out."}
];
const JOURS_EN=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const MOIS_EN=["January","February","March","April","May","June","July","August","September","October","November","December"];
const HEURES_EN=UNITES_EN.slice(0,13);

const GM={
  n10(){const t=alea(1,3);
    if(t===1){const n=alea(0,9);return saisie(`What number comes after ${n}?`,nb(n+1),`After ${n} comes ${n+1}: ${n}, ${n+1}.`);}
    if(t===2){const n=alea(1,10);return saisie(`What number comes before ${n}?`,nb(n-1),`Before ${n} comes ${n-1}: ${n-1}, ${n}.`);}
    const n=alea(1,7);return saisie(`Count on: ${n}, ${n+1}, ${n+2}, …`,nb(n+3),`We count one more each time: ${n}, ${n+1}, ${n+2}, ${n+3}.`);},
  n20(){const t=alea(1,3);
    if(t===1){const u=alea(1,9);return saisie(`Ten and ${UNITES_EN[u]} make…`,nb(10+u),`10 + ${u} = ${10+u}.`);}
    if(t===2){const n=alea(10,19);return saisie(`What number comes after ${n}?`,nb(n+1),`After ${n} comes ${n+1}.`);}
    const n=alea(11,20);return qcm(`Which number is ${enLettres(n)}?`,String(n),[String(n<20?n+1:n-1),String(n-1>10?n-2:n+2),String(n>=13&&n<=19?(n-10)*10:n+3)],`${enLettres(n)[0].toUpperCase()+enLettres(n).slice(1)} is ${n}.`);},
  add20(){const t=alea(1,2),a=alea(2,12),b=alea(1,20-a);
    if(t===1)return saisie(`What is ${a} plus ${b}?`,nb(a+b),`${a} + ${b} = ${a+b}.`);
    const p=pioche(PRENOMS),o=pioche(["sweets","marbles","stickers","apples","cars","books"]);
    return saisie(`${p} has ${a} ${o}. ${p} gets ${b} more. How many ${o} does ${p} have now?`,nb(a+b),`${a} + ${b} = ${a+b} ${o}.`);},
  sub20(){const t=alea(1,2),a=alea(6,20),b=alea(1,a-1);
    if(t===1)return saisie(`What is ${a} minus ${b}?`,nb(a-b),`${a} − ${b} = ${a-b}. Check: ${a-b} + ${b} = ${a}.`);
    const p=pioche(PRENOMS),o=pioche(["sweets","balloons","cakes","pencils","biscuits"]);
    return saisie(`${p} has ${a} ${o} and gives away ${b}. How many ${o} are left?`,nb(a-b),`${a} take away ${b} is ${a-b}.`);},
  compare(){const t=alea(1,3);let a=alea(10,99),b=alea(10,99);if(a===b)b=a<99?a+1:a-1;
    if(t===1)return qcm(`Which number is bigger: ${a} or ${b}?`,String(Math.max(a,b)),[String(Math.min(a,b))],`${Math.max(a,b)} is bigger than ${Math.min(a,b)}. Look at the tens (dizaines) first.`);
    if(t===2)return qcm(`Which number is smaller: ${a} or ${b}?`,String(Math.min(a,b)),[String(Math.max(a,b))],`${Math.min(a,b)} is smaller than ${Math.max(a,b)}.`);
    const s=a<b?"<":">";return qcm(`Choose the right sign: ${a} … ${b}`,s,["<",">","="].filter(x=>x!==s),`${a} is ${a<b?"less than":"greater than"} ${b}, so ${a} ${s} ${b}.`);},
  shapes(){return parTag(BANQUE_SHAPES.map(x=>({...x,t:"s"})),"s");},
  tens(){const t=alea(1,3),n=alea(21,99);
    if(t===1)return qcmChiffres(`How many tens are there in ${n}?`,Math.floor(n/10),`${n} = ${Math.floor(n/10)} tens (dizaines) and ${n%10} ones (unités).`);
    if(t===2)return qcmChiffres(`How many ones are there in ${n}?`,n%10,`${n} = ${Math.floor(n/10)} tens and ${n%10} ones (unités).`);
    const d=alea(1,9),u=alea(0,9);return saisie(`${d} tens and ${u} ones make…`,nb(d*10+u),`${d} tens = ${d*10}, plus ${u} ones = ${d*10+u}.`);},
  skip(){const s=pioche([2,5,10]),k=alea(1,8),a=s*k;
    return saisie(`Count in ${s}s: ${a}, ${a+s}, ${a+2*s}, …`,nb(a+3*s),`We add ${s} each time: ${a+2*s} + ${s} = ${a+3*s}.`);},
  oddeven(){const t=alea(1,2);
    if(t===1){const n=alea(11,99);return qcm(`Is ${n} odd or even?`,n%2?"odd":"even",[n%2?"even":"odd"],`Look at the last digit, ${n%10}: ${n%2?"1, 3, 5, 7, 9 are odd (impair)":"0, 2, 4, 6, 8 are even (pair)"}.`);}
    const ev=alea(5,49)*2;const fa=[];while(fa.length<3){const x=alea(5,49)*2+1;if(!fa.includes(x))fa.push(x);}
    return qcm(`Which number is even?`,String(ev),fa.map(String),`${ev} ends in ${ev%10}, so it is even (pair).`);},
  doubles(){
    if(alea(0,1)){const n=alea(2,25);return saisie(`What is double ${n}?`,nb(2*n),`Double ${n} is ${n} + ${n} = ${2*n}.`);}
    const n=alea(2,25)*2;return saisie(`What is half of ${n}?`,nb(n/2),`Half (la moitié) of ${n} is ${n/2}, because ${n/2} + ${n/2} = ${n}.`);},
  add100(){const a=alea(12,68),b=alea(11,99-a);
    if(alea(0,1))return saisie(`What is ${a} + ${b}?`,nb(a+b),`${a} + ${b} = ${a+b}. Add the tens, then the ones.`);
    const p=pioche(PRENOMS);return saisie(`${p} reads ${a} pages on Monday and ${b} pages on Tuesday. How many pages altogether?`,nb(a+b),`${a} + ${b} = ${a+b} pages.`);},
  sub100(){const a=alea(35,99),b=alea(11,a-10);
    if(alea(0,1))return saisie(`What is ${a} − ${b}?`,nb(a-b),`${a} − ${b} = ${a-b}. Check: ${a-b} + ${b} = ${a}.`);
    const p=pioche(PRENOMS);return saisie(`There are ${a} children in the playground. ${b} go inside. How many children are left?`,nb(a-b),`${a} − ${b} = ${a-b} children.`);},
  money(){const t=alea(1,4);
    if(t===1)return qcm(`How many pence are there in one pound (£1)?`,"100",["10","50","1000"],`£1 = 100p, like 1 € = 100 cents.`);
    if(t===2){const a=alea(10,45),b=alea(10,45);return saisie(`A pencil costs ${a}p and a rubber costs ${b}p. How much do they cost altogether? (in pence)`,[String(a+b),`${a+b}p`,`${a+b} p`],`${a}p + ${b}p = ${a+b}p.`);}
    if(t===3){const a=alea(2,9),b=alea(1,9);return saisie(`A book costs ${a} € and a pen costs ${b} €. How much is that altogether? (in euros)`,[String(a+b),`${a+b} €`,`${a+b}€`],`${a} € + ${b} € = ${a+b} €.`);}
    const c=pioche([5,10,20]),k=alea(1,c-1);return saisie(`You have a £${c} note. You spend £${k}. How much change do you get? (in pounds)`,[String(c-k),`£${c-k}`],`£${c} − £${k} = £${c-k}. The change (la monnaie) is £${c-k}.`);},
  time(){const t=alea(1,4),h=alea(1,12);
    if(t===1){const half=alea(0,1);const bonne=half?`half past ${HEURES_EN[h]}`:`${HEURES_EN[h]} o'clock`;
      return qcm(`The clock shows ${h}:${half?"30":"00"}. What time is it?`,bonne,[half?`${HEURES_EN[h]} o'clock`:`half past ${HEURES_EN[h]}`,`half past ${HEURES_EN[h===12?1:h+1]}`,`${HEURES_EN[h===1?12:h-1]} o'clock`],half?`:30 is half past (et demie).`:`:00 is o'clock (heure pile).`);}
    if(t===2)return qcm(`How many minutes are there in one hour?`,"60",["100","30","24"],`One hour (une heure) = 60 minutes.`);
    if(t===3){const n=h===12?1:h+1;return qcm(`It is ${HEURES_EN[h]} o'clock. What time will it be in one hour?`,`${HEURES_EN[n]} o'clock`,[`${HEURES_EN[h===1?12:h-1]} o'clock`,`half past ${HEURES_EN[h]}`,`${HEURES_EN[n===12?1:n+1]} o'clock`],`One hour after ${h} o'clock is ${n} o'clock.`);}
    return qcm(`Half past ${HEURES_EN[h]}: which clock is right?`,`${h}:30`,[`${h}:00`,`${h===12?1:h+1}:30`,`${h}:15`],`Half past ${h} is 30 minutes after ${h} o'clock: ${h}:30.`);},
  calendar(){const t=alea(1,4);
    if(t===1){const i=alea(0,6);return qcm(`What day comes after ${JOURS_EN[i]}?`,JOURS_EN[(i+1)%7],[JOURS_EN[(i+6)%7],JOURS_EN[(i+2)%7],JOURS_EN[(i+4)%7]],`${JOURS_EN[i]}, then ${JOURS_EN[(i+1)%7]}.`);}
    if(t===2){const i=alea(0,6);return qcm(`What day comes before ${JOURS_EN[i]}?`,JOURS_EN[(i+6)%7],[JOURS_EN[(i+1)%7],JOURS_EN[(i+5)%7],JOURS_EN[(i+3)%7]],`${JOURS_EN[(i+6)%7]}, then ${JOURS_EN[i]}.`);}
    if(t===3){const i=alea(0,11);return qcm(`What month comes after ${MOIS_EN[i]}?`,MOIS_EN[(i+1)%12],[MOIS_EN[(i+11)%12],MOIS_EN[(i+2)%12],MOIS_EN[(i+6)%12]],`${MOIS_EN[i]}, then ${MOIS_EN[(i+1)%12]}.`);}
    return pioche([
      ()=>qcm(`How many days are there in a week?`,"7",["5","10","12"],`Monday to Sunday: 7 days (jours).`),
      ()=>qcm(`How many months are there in a year?`,"12",["10","7","52"],`January to December: 12 months (mois).`),
      ()=>qcm(`Which two days are the weekend?`,"Saturday and Sunday",["Monday and Tuesday","Friday and Monday","Wednesday and Thursday"],`The weekend (le week-end) is Saturday and Sunday.`),
      ()=>qcm(`Which month is Christmas in?`,"December",["January","October","June"],`Christmas Day is on 25th December.`)])();},
  x2(){const n=alea(2,12);
    if(alea(0,1))return saisie(`What is 2 times ${n}?`,nb(2*n),`2 × ${n} = ${2*n}.`);
    return saisie(`A bird has 2 legs. How many legs do ${n} birds have?`,nb(2*n),`${n} × 2 = ${2*n} legs.`);},
  x510(){const n=alea(2,12),k=pioche([5,10]);
    if(alea(0,1))return saisie(`What is ${n} times ${k}?`,nb(n*k),`${n} × ${k} = ${n*k}.`);
    return k===5?saisie(`A hand has 5 fingers. How many fingers are there on ${n} hands?`,nb(5*n),`${n} × 5 = ${5*n} fingers.`)
               :saisie(`A box has 10 pencils. How many pencils are there in ${n} boxes?`,nb(10*n),`${n} × 10 = ${10*n} pencils.`);},
  share(){const k=alea(2,5),q=alea(2,10),p=pioche(["sweets","cards","stickers","biscuits","marbles"]);
    return saisie(`Share ${k*q} ${p} equally between ${k} children. How many ${p} does each child get?`,nb(q),`${k*q} shared between ${k} is ${q}, because ${k} × ${q} = ${k*q}.`);},
  n1000(){const t=alea(1,4),n=alea(101,999);
    if(t===1)return qcmChiffres(`How many hundreds are there in ${n}?`,Math.floor(n/100),`${n} = ${Math.floor(n/100)} hundreds (centaines), ${Math.floor(n/10)%10} tens and ${n%10} ones.`);
    if(t===2){const c=alea(1,9),d=alea(0,9),u=alea(0,9);return saisie(`${c} hundreds, ${d} tens and ${u} ones make…`,nb(c*100+d*10+u),`${c*100} + ${d*10} + ${u} = ${c*100+d*10+u}.`);}
    if(t===3){const m=alea(101,899);return saisie(`What is 100 more than ${m}?`,nb(m+100),`Add 1 to the hundreds digit: ${m} + 100 = ${m+100}.`);}
    let a=alea(100,999),b=alea(100,999);if(a===b)b=a-1;return qcm(`Which number is greater: ${a} or ${b}?`,String(Math.max(a,b)),[String(Math.min(a,b))],`Compare the hundreds first, then the tens, then the ones.`);},
  length(){const t=alea(1,4);
    if(t===1)return qcm(`How many centimetres are there in 1 metre?`,"100",["10","1000","60"],`1 m = 100 cm.`);
    if(t===2){const a=alea(8,20),b=alea(a+2,30);return saisie(`A pencil is ${a} cm long. A ruler is ${b} cm long. How much longer is the ruler? (in cm)`,[String(b-a),`${b-a} cm`],`${b} − ${a} = ${b-a} cm.`);}
    if(t===3){const m=alea(2,5),c=pioche([150,250,350,450]);const bonne=m*100>c?`${m} m`:`${c} cm`;
      return qcm(`Which is longer: ${m} m or ${c} cm?`,bonne,[m*100>c?`${c} cm`:`${m} m`],`${m} m = ${m*100} cm, and ${m*100} ${m*100>c?">":"<"} ${c}.`);}
    return qcm(`What do we use to measure a line?`,"a ruler",["a clock","a scale","a jug"],`We measure length with a ruler (une règle).`);},
  mass(){const t=alea(1,4);
    if(t===1)return qcm(`How many grams are there in 1 kilogram?`,"1000",["100","10","60"],`1 kg = 1000 g.`);
    if(t===2){const a=alea(1,5),b=alea(1,5);return saisie(`A bag of potatoes weighs ${a} kg and a bag of apples weighs ${b} kg. How many kilograms altogether?`,[String(a+b),`${a+b} kg`],`${a} kg + ${b} kg = ${a+b} kg.`);}
    if(t===3){const j=alea(2,5),l=alea(2,5);return saisie(`A jug holds ${l} litres. How many litres do ${j} jugs hold?`,[String(j*l),`${j*l} l`],`${j} × ${l} = ${j*l} litres.`);}
    return pioche([
      ()=>qcm(`Which is heavier?`,"an elephant",["a mouse","a feather","a pencil"],`An elephant is very heavy (lourd).`),
      ()=>qcm(`Which is lighter?`,"a feather",["a car","a horse","a table"],`A feather is very light (léger).`),
      ()=>qcm(`We measure milk in…`,"litres",["metres","kilograms","hours"],`Liquids are measured in litres (litres).`),
      ()=>qcm(`We weigh flour in…`,"grams",["litres","metres","minutes"],`We weigh (peser) with grams and kilograms.`)])();},
  solids(){return parTag(BANQUE_SOLIDS.map(x=>({...x,t:"s"})),"s");},
  time2(){const t=alea(1,3),h=alea(1,11);
    if(t===1)return qcm(`Quarter past ${HEURES_EN[h]}: which clock is right?`,`${h}:15`,[`${h}:45`,`${h}:30`,`${h-1===0?12:h-1}:45`],`Quarter past ${h} is 15 minutes after ${h} o'clock: ${h}:15.`);
    if(t===2)return qcm(`Quarter to ${HEURES_EN[h+1]}: which clock is right?`,`${h}:45`,[`${h+1}:15`,`${h+1}:45`,`${h}:15`],`Quarter to ${h+1} is 15 minutes before ${h+1} o'clock: ${h}:45.`);
    return pioche([
      ()=>qcm(`How many minutes are there in a quarter of an hour?`,"15",["25","30","45"],`60 ÷ 4 = 15 minutes.`),
      ()=>qcm(`How many minutes are there in half an hour?`,"30",["50","15","20"],`Half (la moitié) of 60 is 30.`),
      ()=>qcm(`The clock shows ${h}:45. What time is it?`,`quarter to ${HEURES_EN[h+1]}`,[`quarter past ${HEURES_EN[h]}`,`quarter to ${HEURES_EN[h]}`,`half past ${HEURES_EN[h]}`],`${h}:45 is 15 minutes before ${h+1} o'clock.`)])();},
  problems(){const t=alea(1,4),p=pioche(PRENOMS);
    if(t===1){const a=alea(12,40),b=alea(5,30);return saisie(`${p} has ${a} stickers. ${p}'s friend gives ${b} more. How many stickers does ${p} have now?`,nb(a+b),`${a} + ${b} = ${a+b} stickers.`);}
    if(t===2){const a=alea(30,60),b=alea(5,25);return saisie(`There are ${a} sheep in a field. ${b} sheep run away. How many sheep are left?`,nb(a-b),`${a} − ${b} = ${a-b} sheep.`);}
    if(t===3){const k=alea(2,5),n=alea(2,9);return saisie(`${p} buys ${k} boxes of eggs. There are ${n} eggs in each box. How many eggs are there altogether?`,nb(k*n),`${k} × ${n} = ${k*n} eggs.`);}
    const a=alea(3,9),b=alea(3,9),c=alea(1,a+b-1);return saisie(`${p} has ${a} red balloons and ${b} blue balloons. ${c} balloons pop. How many balloons are left?`,nb(a+b-c),`${a} + ${b} = ${a+b}, then ${a+b} − ${c} = ${a+b-c}.`);},
  x34(){const k=pioche([3,4]),n=alea(2,12);
    if(alea(0,1))return saisie(`What is ${k} times ${n}?`,nb(k*n),`${k} × ${n} = ${k*n}.`);
    return k===3?saisie(`A tricycle has 3 wheels. How many wheels do ${n} tricycles have?`,nb(3*n),`${n} × 3 = ${3*n} wheels.`)
               :saisie(`A dog has 4 legs. How many legs do ${n} dogs have?`,nb(4*n),`${n} × 4 = ${4*n} legs.`);},
  fractions(){const t=alea(1,3);
    if(t===1){const n=alea(2,15)*2;return saisie(`What is half of ${n}?`,nb(n/2),`Half (la moitié) of ${n} is ${n/2}: ${n} ÷ 2 = ${n/2}.`);}
    if(t===2){const n=alea(2,10)*4;return saisie(`What is a quarter of ${n}?`,nb(n/4),`A quarter (un quart) means 4 equal parts: ${n} ÷ 4 = ${n/4}.`);}
    const k=pioche([[2,"a half"],[4,"a quarter"],[3,"a third"]]);
    return qcm(`A cake is cut into ${k[0]} equal parts. What is one part called?`,k[1],["a half","a quarter","a third","a whole"].filter(x=>x!==k[1]),`${k[0]} equal parts: each part is ${k[1]}.`);},
  position(){return parTag(BANQUE_POSITION.map(x=>({...x,t:"s"})),"s");},
  money2(){const t=alea(1,3),p=pioche(PRENOMS);
    if(t===1){const pr=alea(5,18),c=pioche([20,50]);return saisie(`${p} buys a toy for ${pr} € and pays with a ${c} € note. How much change does ${p} get? (in euros)`,[String(c-pr),`${c-pr} €`,`${c-pr}€`],`${c} − ${pr} = ${c-pr} €. The change (la monnaie) is ${c-pr} €.`);}
    if(t===2){const k=alea(2,6),pr=alea(2,9);return saisie(`One ice cream costs £${pr}. How much do ${k} ice creams cost? (in pounds)`,[String(k*pr),`£${k*pr}`],`${k} × £${pr} = £${k*pr}.`);}
    const b=alea(15,39),a=alea(b+5,70);return saisie(`An apple costs ${a}p and a banana costs ${b}p. How much more does the apple cost? (in pence)`,[String(a-b),`${a-b}p`,`${a-b} p`],`${a} − ${b} = ${a-b}p.`);},
  column(){
    if(alea(0,1)){const a=alea(125,599),b=alea(115,399);return saisie(`What is ${a} + ${b}?`,nb(a+b),`${a} + ${b} = ${a+b}. Line up the ones, the tens and the hundreds.`);}
    const a=alea(400,980),b=alea(105,390);return saisie(`What is ${a} − ${b}?`,nb(a-b),`${a} − ${b} = ${a-b}. Check: ${a-b} + ${b} = ${a}.`);},
  tables(){const k=pioche([2,3,4,5,10]),n=alea(2,10);
    if(alea(0,1))return saisie(`What is ${k} × ${n}?`,nb(k*n),`${k} × ${n} = ${k*n}.`);
    return saisie(`How many groups of ${k} make ${k*n}?`,nb(n),`${n} × ${k} = ${k*n}, so there are ${n} groups of ${k}.`);}
};
const REVUES={
  rev1:["n20","add20","sub20","compare","shapes"],
  rev2:["tens","skip","oddeven","doubles","add100","sub100"],
  rev3:["money","time","calendar","x2","x510","share"],
  rev4:["n1000","length","mass","solids","time2","problems"],
  rev5:["n1000","column","tables","fractions","money2","time2"],
  rev6:["problems","money2","position","doubles","tables","length","oddeven"]
};
function exoMaths(tag){
  if(REVUES[tag])tag=pioche(REVUES[tag]);
  const f=GM[tag]||GM[pioche(Object.keys(GM))];return f();
}

/* Le petit calcul du début (mental maths), selon la semaine */
function mental(semaine){
  const lim=semaine<=7?10:semaine<=14?20:semaine<=21?50:100;
  const types=["add","sub"];if(semaine>=8)types.push("ten");if(semaine>=11)types.push("dbl");if(semaine>=18)types.push("x");
  const t=pioche(types);
  if(t==="add"){const a=alea(1,lim-1),b=alea(1,lim-a);return saisie(`Mental maths: what is ${a} plus ${b}?`,nb(a+b),`${a} + ${b} = ${a+b}.`);}
  if(t==="sub"){const a=alea(2,lim),b=alea(1,a-1);return saisie(`Mental maths: what is ${a} minus ${b}?`,nb(a-b),`${a} − ${b} = ${a-b}.`);}
  if(t==="ten"){const a=alea(1,lim-10);if(alea(0,1))return saisie(`Mental maths: what is 10 more than ${a}?`,nb(a+10),`${a} + 10 = ${a+10}.`);
    const b=alea(11,lim);return saisie(`Mental maths: what is 10 less than ${b}?`,nb(b-10),`${b} − 10 = ${b-10}.`);}
  if(t==="dbl"){const a=alea(2,Math.min(25,lim/2));return alea(0,1)?saisie(`Mental maths: what is double ${a}?`,nb(2*a),`Double ${a} = ${a} + ${a} = ${2*a}.`)
                                                   :saisie(`Mental maths: what is half of ${2*a}?`,nb(a),`Half of ${2*a} is ${a}.`);}
  const k=pioche(semaine>=29?[2,3,4,5,10]:[2,5,10]),n=alea(2,10);return saisie(`Mental maths: what is ${k} times ${n}?`,nb(k*n),`${k} × ${n} = ${k*n}.`);
}

/* =========================================================
   4. MATHS WORDS (vocabulaire)
   ========================================================= */
const MOTS=[
 ["count","number","un nombre"],["count","count","compter"],["count","first","premier"],["count","last","dernier"],["count","next","suivant"],["count","how many","combien"],
 ["numbers","eleven","onze"],["numbers","twelve","douze"],["numbers","thirteen","treize"],["numbers","fifteen","quinze"],["numbers","eighteen","dix-huit"],["numbers","twenty","vingt"],
 ["tensnum","thirty","trente"],["tensnum","forty","quarante"],["tensnum","fifty","cinquante"],["tensnum","sixty","soixante"],["tensnum","seventy","soixante-dix"],["tensnum","eighty","quatre-vingts"],["tensnum","ninety","quatre-vingt-dix"],
 ["add","add","ajouter"],["add","plus","plus"],["add","equals","est égal à"],["add","total","le total"],["add","altogether","en tout"],["add","sum","la somme"],["add","addition","une addition"],
 ["sub","take away","enlever"],["sub","minus","moins"],["sub","subtract","soustraire"],["sub","difference","la différence"],["sub","subtraction","une soustraction"],
 ["compare","bigger","plus grand"],["compare","smaller","plus petit"],["compare","the same","pareil"],["compare","greater than","supérieur à"],["compare","less than","inférieur à"],
 ["shapes","circle","un cercle"],["shapes","square","un carré"],["shapes","triangle","un triangle"],["shapes","rectangle","un rectangle"],["shapes","side","un côté"],["shapes","corner","un coin"],["shapes","straight line","une ligne droite"],["shapes","shape","une forme"],
 ["place","tens","les dizaines"],["place","ones","les unités"],["place","digit","un chiffre"],["place","hundred","cent"],
 ["hundreds","hundreds","les centaines"],["hundreds","thousand","mille"],
 ["oddeven","odd","impair"],["oddeven","even","pair"],["oddeven","before","avant"],["oddeven","after","après"],
 ["doubles","double","le double"],["doubles","half","la moitié"],["doubles","twice","deux fois"],
 ["money","coin","une pièce"],["money","note","un billet"],["money","price","le prix"],["money","change","la monnaie rendue"],["money","pound","une livre (£)"],["money","buy","acheter"],["money","cost","coûter"],["money","cheap","pas cher"],["money","expensive","cher"],["money","pay","payer"],
 ["time","clock","une horloge"],["time","hour","une heure"],["time","minute","une minute"],["time","o'clock","heure pile"],["time","half past","et demie"],["time","quarter past","et quart"],["time","quarter to","moins le quart"],["time","morning","le matin"],["time","afternoon","l'après-midi"],["time","evening","le soir"],
 ["days","Monday","lundi"],["days","Tuesday","mardi"],["days","Wednesday","mercredi"],["days","Thursday","jeudi"],["days","Friday","vendredi"],["days","Saturday","samedi"],["days","Sunday","dimanche"],["days","week","une semaine"],["days","month","un mois"],["days","year","une année"],["days","today","aujourd'hui"],["days","tomorrow","demain"],["days","yesterday","hier"],
 ["mult","times","fois"],["mult","multiply","multiplier"],["mult","groups of","des groupes de"],["mult","times table","une table de multiplication"],
 ["share","share","partager"],["share","each","chacun"],["share","divide","diviser"],["share","equal groups","des groupes égaux"],
 ["measure","long","long"],["measure","short","court"],["measure","tall","grand (de taille)"],["measure","heavy","lourd"],["measure","light","léger"],["measure","full","plein"],["measure","empty","vide"],["measure","ruler","une règle"],["measure","metre","un mètre"],["measure","centimetre","un centimètre"],["measure","kilogram","un kilogramme"],["measure","litre","un litre"],["measure","weigh","peser"],["measure","measure","mesurer"],
 ["solids","cube","un cube"],["solids","sphere","une boule (sphère)"],["solids","cone","un cône"],["solids","cylinder","un cylindre"],["solids","pyramid","une pyramide"],["solids","face","une face"],["solids","edge","une arête"],
 ["fractions","quarter","un quart"],["fractions","third","un tiers"],["fractions","whole","entier"],["fractions","equal parts","des parts égales"],
 ["position","on the left","à gauche"],["position","on the right","à droite"],["position","above","au-dessus de"],["position","below","en dessous de"],["position","next to","à côté de"],["position","between","entre"],["position","in front of","devant"],["position","behind","derrière"],
 ["problems","problem","un problème"],["problems","answer","la réponse"],["problems","question","une question"],["problems","check","vérifier"],["problems","calculate","calculer"]
].map(([t,en,fr])=>({t,en,fr}));
const PHRASES=[
 {t:"count",s:"1, 2, 3, 4, 5: I can ___ to five!",b:"count",f:["share","weigh","buy"],e:"To count (compter): 1, 2, 3…"},
 {t:"count",s:"___ apples are there? There are 3.",b:"How many",f:["How old","What time","Where"],e:"How many (combien) asks for a number."},
 {t:"count",s:"A, B, C: A is the ___ letter.",b:"first",f:["last","next","half"],e:"First (premier) is number 1."},
 {t:"add",s:"5 ___ 3 equals 8.",b:"plus",f:["minus","times","half"],e:"5 plus 3 equals 8: 5 + 3 = 8."},
 {t:"add",s:"4 plus 4 ___ 8.",b:"equals",f:["minus","takes","shares"],e:"Equals (égale) is the sign =."},
 {t:"add",s:"2 cats and 3 dogs: there are 5 animals ___.",b:"altogether",f:["behind","yesterday","below"],e:"Altogether (en tout) means all together."},
 {t:"sub",s:"9 ___ 4 equals 5.",b:"minus",f:["plus","times","double"],e:"9 minus 4 equals 5: 9 − 4 = 5."},
 {t:"sub",s:"7 take ___ 2 is 5.",b:"away",f:["plus","times","half"],e:"Take away (enlever) means subtract."},
 {t:"sub",s:"The ___ between 10 and 7 is 3.",b:"difference",f:["total","price","corner"],e:"The difference (la différence): 10 − 7 = 3."},
 {t:"compare",s:"10 is ___ than 3.",b:"bigger",f:["smaller","the same","empty"],e:"10 > 3: 10 is bigger (plus grand)."},
 {t:"compare",s:"2 is ___ than 9.",b:"smaller",f:["bigger","heavier","longer"],e:"2 < 9: 2 is smaller (plus petit)."},
 {t:"compare",s:"5 + 5 and 10 are ___.",b:"the same",f:["different","odd","heavy"],e:"5 + 5 = 10: they are the same (pareil)."},
 {t:"shapes",s:"A ___ has 3 sides.",b:"triangle",f:["square","circle","rectangle"],e:"Tri = 3: a triangle (un triangle)."},
 {t:"shapes",s:"A ___ is round.",b:"circle",f:["square","triangle","rectangle"],e:"A circle (un cercle) is round."},
 {t:"shapes",s:"A square has 4 equal ___.",b:"sides",f:["circles","coins","hours"],e:"A square has 4 equal sides (côtés)."},
 {t:"place",s:"In 47, the digit 4 means 4 ___.",b:"tens",f:["ones","hundreds","halves"],e:"47 = 4 tens (dizaines) and 7 ones."},
 {t:"place",s:"In 47, the digit 7 means 7 ___.",b:"ones",f:["tens","hundreds","pounds"],e:"47 = 4 tens and 7 ones (unités)."},
 {t:"hundreds",s:"In 352, the digit 3 means 3 ___.",b:"hundreds",f:["tens","ones","thousands"],e:"352 = 3 hundreds (centaines), 5 tens, 2 ones."},
 {t:"hundreds",s:"Ten hundreds make one ___.",b:"thousand",f:["hundred","million","ten"],e:"10 × 100 = 1000: one thousand (mille)."},
 {t:"tensnum",s:"10, 20, 30, ___, 50.",b:"forty",f:["fourteen","four","sixty"],e:"40 is forty (quarante)."},
 {t:"tensnum",s:"Five tens make ___.",b:"fifty",f:["fifteen","five","sixty"],e:"5 × 10 = 50: fifty (cinquante)."},
 {t:"numbers",s:"10 + 2 is ___.",b:"twelve",f:["twenty","eleven","two"],e:"12 is twelve (douze)."},
 {t:"numbers",s:"10 + 5 is ___.",b:"fifteen",f:["fifty","five","fourteen"],e:"15 is fifteen (quinze); 50 is fifty."},
 {t:"oddeven",s:"2, 4, 6 and 8 are ___ numbers.",b:"even",f:["odd","big","heavy"],e:"Even numbers (nombres pairs) end in 0, 2, 4, 6 or 8."},
 {t:"oddeven",s:"1, 3, 5 and 7 are ___ numbers.",b:"odd",f:["even","long","full"],e:"Odd numbers (nombres impairs) end in 1, 3, 5, 7 or 9."},
 {t:"oddeven",s:"6 comes ___ 7.",b:"before",f:["after","behind","above"],e:"6, then 7: 6 comes before (avant) 7."},
 {t:"doubles",s:"Double 5 is 10, and ___ of 10 is 5.",b:"half",f:["double","twice","total"],e:"Half (la moitié) of 10 is 5."},
 {t:"doubles",s:"___ 4 is 8.",b:"Double",f:["Half","Minus","Quarter"],e:"Double (le double) 4 is 4 + 4 = 8."},
 {t:"money",s:"I pay with a £5 ___.",b:"note",f:["coin","clock","ruler"],e:"A note (un billet) is made of paper."},
 {t:"money",s:"A 10p ___ is small and round.",b:"coin",f:["note","price","cube"],e:"A coin (une pièce) is made of metal."},
 {t:"money",s:"The ___ of this book is £4.",b:"price",f:["change","coin","hour"],e:"The price (le prix) is how much it costs."},
 {t:"money",s:"I give £10 and the book is £7, so I get £3 ___.",b:"change",f:["price","note","cheap"],e:"The change (la monnaie rendue): 10 − 7 = 3."},
 {t:"time",s:"There are 60 minutes in an ___.",b:"hour",f:["week","day","year"],e:"One hour (une heure) = 60 minutes."},
 {t:"time",s:"At 7:30 it is half ___ seven.",b:"past",f:["to","after","from"],e:"7:30 is half past seven (sept heures et demie)."},
 {t:"time",s:"At 8 o'clock in the ___ I eat breakfast.",b:"morning",f:["evening","night","week"],e:"Breakfast is in the morning (le matin)."},
 {t:"days",s:"The day after Monday is ___.",b:"Tuesday",f:["Sunday","Thursday","Friday"],e:"Monday, then Tuesday (mardi)."},
 {t:"days",s:"Saturday and ___ are the weekend.",b:"Sunday",f:["Monday","Wednesday","Friday"],e:"The weekend is Saturday and Sunday (dimanche)."},
 {t:"days",s:"There are 7 days in a ___.",b:"week",f:["month","year","minute"],e:"A week (une semaine) has 7 days."},
 {t:"mult",s:"3 ___ 4 equals 12.",b:"times",f:["plus","minus","half"],e:"3 times 4 = 3 × 4 = 12."},
 {t:"mult",s:"3 groups ___ 2 make 6.",b:"of",f:["in","at","to"],e:"3 groups of 2 = 3 × 2 = 6."},
 {t:"share",s:"Share 10 sweets between 2 children: ___ child gets 5.",b:"each",f:["all","both","half"],e:"Each (chacun) child gets the same."},
 {t:"share",s:"We ___ the cake so that everybody gets a piece.",b:"share",f:["weigh","count","add"],e:"To share (partager) means to give equal parts."},
 {t:"measure",s:"An elephant is very ___.",b:"heavy",f:["light","short","empty"],e:"Heavy (lourd): it weighs a lot."},
 {t:"measure",s:"A feather is very ___.",b:"light",f:["heavy","long","full"],e:"Light (léger): it weighs very little."},
 {t:"measure",s:"I measure a line with a ___.",b:"ruler",f:["clock","coin","jug"],e:"A ruler (une règle) measures length."},
 {t:"measure",s:"A glass with no water in it is ___.",b:"empty",f:["full","heavy","tall"],e:"Empty (vide) is the opposite of full (plein)."},
 {t:"measure",s:"A giraffe is very ___.",b:"tall",f:["short","light","empty"],e:"Tall (grand) is the opposite of short (petit)."},
 {t:"solids",s:"A ball is a ___.",b:"sphere",f:["cube","cone","square"],e:"A ball is a sphere (une boule)."},
 {t:"solids",s:"A dice is a ___.",b:"cube",f:["sphere","cylinder","circle"],e:"A dice is a cube (un cube)."},
 {t:"fractions",s:"Cut a cake into 4 equal parts: each part is a ___.",b:"quarter",f:["half","third","whole"],e:"4 equal parts: each is a quarter (un quart)."},
 {t:"fractions",s:"Cut an apple into 2 equal parts: each part is a ___.",b:"half",f:["quarter","third","whole"],e:"2 equal parts: each is a half (une moitié)."},
 {t:"position",s:"The sky is ___ us.",b:"above",f:["below","behind","between"],e:"The sky is above (au-dessus de) us."},
 {t:"position",s:"The floor is ___ our feet.",b:"below",f:["above","on top of","between"],e:"The floor is below (en dessous de) our feet."},
 {t:"position",s:"The letter B is ___ A and C.",b:"between",f:["above","behind","after"],e:"A, B, C: B is between (entre) A and C."},
 {t:"problems",s:"Read the problem, then write the ___.",b:"answer",f:["question","clock","coin"],e:"The answer (la réponse)."},
 {t:"problems",s:"When you finish, ___ your answer.",b:"check",f:["eat","weigh","share"],e:"Check (vérifier) your answer."}
];
const NOMBRES_TAG={count:[0,10],numbers:[11,20],tensnum:[20,99],place:[20,99],hundreds:[100,999]};
function exoNombreEnLettres(tag){
  const [a,b]=NOMBRES_TAG[tag]||[11,100];const n=alea(a,b);
  if(alea(0,1))return saisie(`Write in figures: ${enLettres(n)}`,nb(n),`${enLettres(n)[0].toUpperCase()+enLettres(n).slice(1)} = ${n}.`);
  const f=new Set();
  const cand=[n+1,n-1,n+10,n-10,(n%10)*10+Math.floor(n/10)%10+Math.floor(n/100)*100,n+2,n+100,n-100];
  if(n>=13&&n<=19)cand.unshift((n-10)*10);if(n%10===0&&n>=30&&n<=90)cand.unshift(n/10+10);
  for(const c of cand){if(c!==n&&c>=0&&c<1000&&f.size<3)f.add(c);}
  return qcm(`How do you write ${n} in words?`,enLettres(n),[...f].map(enLettres),`${n} is written "${enLettres(n)}".`);
}
function autresMots(m){return melange(MOTS.filter(x=>x.t!==m.t&&x.fr!==m.fr&&x.en!==m.en));}
function exoMots(tag){
  const liste=tag==="all"?MOTS:MOTS.filter(x=>x.t===tag);
  const t=alea(1,NOMBRES_TAG[tag]?5:4);
  if(t>=4)return NOMBRES_TAG[tag]||alea(0,1)?exoNombreEnLettres(tag):exoMots(tag);
  if(t===3){const f=PHRASES.filter(x=>x.t===tag);const x=pioche(f.length?f:PHRASES);
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
    return [mental(semaine),exoMaths(sem.tm),exoMots(sem.tv),exoMaths(sem.tm),exoMaths(avant.tm),exoMots(avant.tv)];
  }
  const q=[mental(semaine)];
  for(let i=0;i<3;i++)q.push(mat==="v"?exoMots(sem.tv):exoMaths(sem.tm));
  return q;
}

export const programme = { code: "maths-en-c2", nom: "Maths in English · CP-CE2", rituel: "Toute la séance est en anglais ! On commence par un petit calcul (mental maths). Lisez l'énoncé à voix haute avec l'enfant si besoin.", SEMAINES, JOURS, NOM_MAT, PERIODES, matiereDuJour, seanceHorsLigne };
