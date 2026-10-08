// Programme de CE1 (cycle 2), écrit le 08/10/2026 sur le modèle de ce2.js.
// C'est la seule source : on le modifie ici.

/* =========================================================
   1. LE PROGRAMME DE CE1 — 36 SEMAINES
   t = étiquettes : maths | français | anglais | questionner le monde
   ========================================================= */
const SEMAINES=[
{n:1,p:1,m:"Les nombres jusqu'à 100 : dizaines et unités",f:"La phrase : majuscule et point",a:"Dire bonjour",q:"Vivant ou non vivant ?",t:"nombres100|phrase|greetings|vivant"},
{n:2,p:1,m:"Comparer et ranger les nombres jusqu'à 100",f:"Les sons « ou » et « on »",a:"Les couleurs",q:"Les êtres vivants grandissent",t:"comparer100|ouon|couleurs|vivant"},
{n:3,p:1,m:"L'addition sans retenue",f:"L'ordre alphabétique",a:"Les nombres de 1 à 10",q:"Les besoins des animaux",t:"addition1|alphabet|nombres|animaux"},
{n:4,p:1,m:"Les compléments à 10 et à 100",f:"Les sons « an » et « en »",a:"Les nombres de 1 à 20",q:"Comment vivent les animaux",t:"complement|anen|nombres|animaux"},
{n:5,p:1,m:"Les nombres jusqu'à 1000 : centaines, dizaines, unités",f:"Le nom et le déterminant",a:"La famille",q:"Ce que mangent les animaux",t:"nombres|nom|famille|alimentation"},
{n:6,p:1,m:"L'addition posée avec retenue",f:"Le son « in » : in, ain, ein",a:"La famille",q:"Herbivore, carnivore, omnivore",t:"addition|in|famille|alimentation"},
{n:7,p:1,m:"Bilan : nombres et additions",f:"Bilan : les sons",a:"Bilan : se présenter",q:"Bilan : le vivant",t:"calcmental|sons|greetings|vivant"},
{n:8,p:2,m:"Comparer et ranger les nombres jusqu'à 1000",f:"Le verbe et son infinitif",a:"Les animaux",q:"Les parties d'une plante",t:"comparer|verbe|animaux|plantes"},
{n:9,p:2,m:"Les doubles et les moitiés",f:"Le son « oi »",a:"Les animaux",q:"De la graine à la plante",t:"doubles|oi|animaux|plantes"},
{n:10,p:2,m:"La soustraction sans retenue",f:"Trouver le sujet du verbe",a:"Les jours de la semaine",q:"Le cycle de vie des animaux",t:"soustraction1|sujet|jours|cycle"},
{n:11,p:2,m:"Mesurer des longueurs : m et cm",f:"Le présent des verbes en -er",a:"Les fruits",q:"L'eau : glace, liquide, vapeur",t:"longueurs|presenter|fruits|eau"},
{n:12,p:2,m:"La soustraction posée",f:"Les sons « au » et « eau »",a:"Les fruits",q:"L'eau gèle, la glace fond",t:"soustraction|eau|fruits|eau"},
{n:13,p:2,m:"Le sens de la multiplication",f:"Le présent : être et avoir",a:"Le corps",q:"Solide ou liquide ?",t:"multiplication|etreavoir|corps|matiere"},
{n:14,p:2,m:"Les tables de 2 et de 5",f:"Bilan : le présent",a:"Christmas",q:"Bilan : la matière",t:"tables25|conjugpres|noel|matiere"},
{n:15,p:3,m:"La monnaie : billets et pièces en euros",f:"Les sons « ill » et « gn »",a:"Les vêtements",q:"Les objets techniques",t:"monnaie|illgn|vetements|objets"},
{n:16,p:3,m:"Les tables de 3 et de 4",f:"Le présent du verbe aller",a:"Le temps qu'il fait",q:"Les matériaux : bois, verre, métal",t:"tables34|aller|meteo|objets"},
{n:17,p:3,m:"Carré, rectangle, triangle",f:"s ou ss",a:"À l'école",q:"Les objets et l'électricité",t:"polygones|sss|ecole|objets"},
{n:18,p:3,m:"L'angle droit et l'équerre",f:"Le pluriel des noms",a:"À l'école",q:"Les jours et les mois",t:"angledroit|pluriel|ecole|temps"},
{n:19,p:3,m:"Lire l'heure : heures pleines et demies",f:"Le féminin",a:"La maison",q:"Les saisons",t:"heure|feminin|maison|temps"},
{n:20,p:3,m:"La table de 10",f:"Les homophones a et à",a:"La maison",q:"Se repérer : devant, derrière, gauche, droite",t:"tables10|homoaa|maison|espace"},
{n:21,p:3,m:"Bilan : problèmes pour ajouter et retirer",f:"c ou ç",a:"Les animaux de la ferme",q:"Bilan : se repérer dans l'espace",t:"problemes|cc|ferme|espace"},
{n:22,p:4,m:"Les masses : g et kg",f:"Le futur",a:"Les animaux de la ferme",q:"Hier, aujourd'hui, demain",t:"masses|futur|ferme|temps"},
{n:23,p:4,m:"Problèmes de multiplication",f:"Les homophones et et est",a:"Dire son âge",q:"Le plan et la carte",t:"problemesx|homoet|age|espace"},
{n:24,p:4,m:"Les points alignés et la règle",f:"Le passé composé (découverte)",a:"Dire son âge",q:"Animaux et végétaux",t:"alignement|passecompose|age|vivant"},
{n:25,p:4,m:"Les compléments à la dizaine et à 100",f:"Les homophones son et sont",a:"La nourriture",q:"Planter une graine",t:"complement|homoson|nourriture|plantes"},
{n:26,p:4,m:"Révision des tables de 2, 3, 4, 5 et 10",f:"g, gu ou ge",a:"La nourriture",q:"L'eau dans la nature",t:"tables|gge|nourriture|eau"},
{n:27,p:4,m:"Payer et rendre la monnaie",f:"Les accords dans le groupe nominal",a:"Les jouets",q:"Fabriquer et utiliser des objets",t:"monnaie|accordgn|jouets|objets"},
{n:28,p:4,m:"Bilan : longueurs, masses, heure, monnaie",f:"Vocabulaire : les contraires",a:"Les jouets",q:"Bilan : la matière",t:"mesures|contraires|jouets|matiere"},
{n:29,p:5,m:"Révision : les nombres jusqu'à 1000",f:"Vocabulaire : les synonymes",a:"Révision : les couleurs",q:"Révision : le vivant",t:"nombres|synonymes|couleurs|vivant"},
{n:30,p:5,m:"Révision : l'addition",f:"Les familles de mots",a:"Révision : les animaux",q:"Révision : le cycle de vie",t:"addition|famillemots|animaux|cycle"},
{n:31,p:5,m:"Révision : la soustraction",f:"Révision : les homophones",a:"Révision : la famille",q:"Révision : l'eau",t:"soustraction|homophones|famille|eau"},
{n:32,p:5,m:"Révision : l'heure",f:"Révision : présent, futur, passé composé",a:"Révision : le corps",q:"Révision : les objets",t:"heure|conjug|corps|objets"},
{n:33,p:5,m:"Révision : la géométrie",f:"Révision : les accords",a:"Révision : les fruits",q:"Révision : le temps qui passe",t:"geometrie|accordgn|fruits|temps"},
{n:34,p:5,m:"Révision : les problèmes",f:"Révision : les sons",a:"Révision : les jours",q:"Révision : se repérer",t:"problemes|sons|jours|espace"},
{n:35,p:5,m:"Bilan : calcul mental",f:"Bilan : nom, verbe, sujet",a:"Bilan : se présenter",q:"Bilan : l'alimentation des animaux",t:"calcmental|grammaire|greetings|alimentation"},
{n:36,p:5,m:"Bilan général du CE1 et défis",f:"Bilan général du CE1",a:"Bilan : les nombres",q:"Défis : questionner le monde",t:"defis|bilan|nombres|vivant"}
];
SEMAINES.forEach(s=>{const t=s.t.split("|");s.tm=t[0];s.tf=t[1];s.ta=t[2];s.tq=t[3];});

const JOURS=[
 {nom:"Lundi",mat:"m",min:10},
 {nom:"Mardi",mat:"f",min:10},
 {nom:"Mercredi",mat:"m",min:10},
 {nom:"Jeudi",mat:"f",min:10},
 {nom:"Vendredi",mat:"aq",min:10},
 {nom:"Week-end",mat:"rev",min:10}
];
const NOM_MAT={m:"Mathématiques",f:"Français",a:"Anglais",q:"Questionner le monde",rev:"Révision de la semaine"};
const PERIODES=["Période 1 — septembre à octobre","Période 2 — novembre à décembre","Période 3 — janvier à février","Période 4 — mars à avril","Période 5 — mai à juillet"];
/* Le vendredi alterne : questionner le monde les semaines impaires, anglais les semaines paires */
function matiereDuJour(sem,jour){const j=JOURS[jour];if(j.mat==="aq")return (sem%2===1)?"q":"a";return j.mat;}

/* =========================================================
   2. LA BANQUE D'EXERCICES (fonctionne sans connexion)
   ========================================================= */
let semaineEnCours=1; // réglée par seanceHorsLigne
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
function deBanque(b){const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);}

const PRENOMS=["Léa","Hugo","Inès","Nathan","Chloé","Malik","Jade","Tom","Lina","Noah","Emma","Sacha","Yasmine","Louis","Zoé","Adam","Manon","Gabriel","Aya","Jules","Camille","Rayan","Rose","Arthur"];
const prenom=()=>pioche(PRENOMS);
const FILLES=["Léa","Inès","Chloé","Jade","Lina","Emma","Yasmine","Zoé","Manon","Aya","Camille","Rose"];
const ilElle=p=>FILLES.includes(p)?"Elle":"Il";
const autrePrenom=p=>pioche(PRENOMS.filter(x=>x!==p));

/* Les nombres en lettres (orthographe traditionnelle) */
const UNITES=["zéro","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf"];
const DIZ={2:"vingt",3:"trente",4:"quarante",5:"cinquante",6:"soixante"};
function lettres(n){
  if(n<20)return UNITES[n];
  if(n<70){const d=Math.floor(n/10),u=n%10;if(u===0)return DIZ[d];if(u===1)return DIZ[d]+" et un";return DIZ[d]+"-"+UNITES[u];}
  if(n<80){const r=n-60;return r===11?"soixante et onze":"soixante-"+UNITES[r];}
  if(n<100){const r=n-80;return r===0?"quatre-vingts":"quatre-vingt-"+UNITES[r];}
  const c=Math.floor(n/100),r=n%100;
  const cent=c===1?"cent":UNITES[c]+" cent"+(r===0?"s":"");
  return r===0?cent:cent+" "+lettres(r);
}

/* ---------- MATHÉMATIQUES ---------- */
/* Explication d'une addition posée, colonne par colonne */
function colonnes(a,b){
  const noms=["Unités","Dizaines","Centaines"],out=[];let r=0;
  for(let k=0;k<3;k++){const x=Math.floor(a/10**k)%10,y=Math.floor(b/10**k)%10;if(k>0&&10**k>Math.max(a,b)&&r===0)break;
    const s=x+y+r,txt=(r?"1 + ":"")+x+" + "+y+" = "+s;
    out.push(s>=10&&k<2?`${noms[k]} : ${txt}, j'écris ${s-10} et je retiens 1.`:`${noms[k]} : ${txt}.`);r=s>=10&&k<2?1:0;}
  return out.join(" ");
}
const GM={
  nombres100(){
    const t=alea(1,4);
    if(t===1){const n=alea(11,99);return qcmChiffres(`Dans le nombre ${n}, quel est le chiffre des dizaines ?`,Math.floor(n/10),`${n}, c'est ${Math.floor(n/10)} dizaines et ${n%10} unités.`);}
    if(t===2){const d=alea(1,9),u=alea(0,9);return saisie(`Écris en chiffres : ${d} dizaines et ${u} unités`,[String(d*10+u)],`${d} dizaines = ${d*10}, plus ${u} unités : ${d*10+u}.`);}
    if(t===3){const n=alea(21,99);return saisie(`Écris en chiffres : ${lettres(n)}`,[String(n)],`« ${lettres(n)} » s'écrit ${n}.`);}
    const n=alea(10,98);return saisie(`Quel nombre vient juste après ${n} ?`,[String(n+1)],`On ajoute 1 : ${n} + 1 = ${n+1}.`);
  },
  nombres(){
    const t=alea(1,4);
    if(t===1){const n=alea(101,999);const k=pioche(["centaines","dizaines","unités"]);
      const v=k==="centaines"?Math.floor(n/100):k==="dizaines"?Math.floor(n/10)%10:n%10;
      return qcmChiffres(`Dans le nombre ${n}, quel est le chiffre des ${k} ?`,v,`Dans ${n} : ${Math.floor(n/100)} centaines, ${Math.floor(n/10)%10} dizaines et ${n%10} unités.`);}
    if(t===2){const c=alea(1,9),d=alea(0,9),u=alea(0,9);
      return saisie(`Écris en chiffres : ${c} centaines, ${d} dizaines et ${u} unités`,[String(c*100+d*10+u)],`${c*100} + ${d*10} + ${u} = ${c*100+d*10+u}.`);}
    if(t===3){const n=alea(101,999);return saisie(`Écris en chiffres : ${lettres(n)}`,[String(n)],`« ${lettres(n)} » s'écrit ${n} : on écrit d'abord les centaines, puis les dizaines, puis les unités.`);}
    const pas=pioche([1,10,100]);const n=alea(100,880);
    return saisie(`Compte de ${pas} en ${pas} : ${n}, ${n+pas}, ${n+2*pas}, … Quel nombre vient ensuite ?`,[String(n+3*pas)],`On ajoute ${pas} à chaque fois : ${n+2*pas} + ${pas} = ${n+3*pas}.`);
  },
  comparer100(){
    if(alea(0,1)){let a=alea(10,99),b=alea(10,99);while(a===b)b=alea(10,99);
      const s=a<b?"<":">";
      return qcm(`Quel signe faut-il mettre ? ${a} … ${b}`,s,["<",">","="],`${a} est ${a<b?"plus petit":"plus grand"} que ${b} : on compare d'abord les dizaines, puis les unités.`);}
    const l=melange([...new Set(Array.from({length:8},()=>alea(10,99)))]).slice(0,4);
    if(l.length<4)return GM.comparer100();
    const petit=alea(0,1)===1;const bonne=petit?Math.min(...l):Math.max(...l);
    return qcm(`Quel est le plus ${petit?"petit":"grand"} nombre ?`,String(bonne),l.filter(x=>x!==bonne).map(String),`On regarde d'abord le chiffre des dizaines : ${bonne} est le plus ${petit?"petit":"grand"}.`);
  },
  comparer(){
    const t=alea(1,3);
    if(t===1){let a=alea(100,999),b=alea(100,999);while(a===b)b=alea(100,999);
      return qcm(`Quel signe faut-il mettre ? ${a} … ${b}`,a<b?"<":">",["<",">","="],`${a} est ${a<b?"plus petit":"plus grand"} que ${b} : on compare d'abord les centaines, puis les dizaines, puis les unités.`);}
    if(t===2){const c=alea(1,9);const l=[];while(l.length<4){const x=c*100+alea(0,99);if(!l.includes(x))l.push(x);}
      const bonne=Math.max(...l);
      return qcm(`Quel est le plus grand nombre ?`,String(bonne),l.filter(x=>x!==bonne).map(String),`Ils ont tous ${c} centaines : on compare les dizaines, puis les unités. ${bonne} est le plus grand.`);}
    const l=[];while(l.length<3){const x=alea(100,999);if(!l.includes(x))l.push(x);}
    const croiss=[...l].sort((x,y)=>x-y);const bonne=croiss.join(" ; ");
    const f=[[croiss[2],croiss[1],croiss[0]],[croiss[1],croiss[0],croiss[2]],[croiss[0],croiss[2],croiss[1]]].map(x=>x.join(" ; "));
    return qcm(`Dans quel ordre ces nombres sont-ils rangés du plus petit au plus grand ?`,bonne,f,`On cherche d'abord le plus petit, puis le suivant : ${bonne}.`);
  },
  addition1(){
    const ad=alea(1,8),bd=alea(1,9-ad),au=alea(0,9),bu=alea(0,9-au);
    const a=ad*10+au,b=bd*10+bu;
    return saisie(`Calcule : ${a} + ${b}`,[String(a+b)],`Unités : ${au} + ${bu} = ${au+bu}. Dizaines : ${ad} + ${bd} = ${ad+bd}. Résultat : ${a+b}.`);
  },
  addition(){
    if(alea(0,2)<2){
      const au=alea(2,9),bu=alea(10-au,9),ad=alea(1,7),bd=alea(1,8-ad);
      const a=ad*10+au,b=bd*10+bu,s=au+bu;
      return saisie(`Pose et calcule : ${a} + ${b}`,[String(a+b)],`Unités : ${au} + ${bu} = ${s}, j'écris ${s-10} et je retiens 1. Dizaines : 1 + ${ad} + ${bd} = ${ad+bd+1}. Résultat : ${a+b}.`);
    }
    const a=alea(110,780),b=alea(12,99);
    return saisie(`Pose et calcule : ${a} + ${b}`,[String(a+b)],`On aligne les unités sous les unités. ${colonnes(a,b)} Résultat : ${a+b}.`);
  },
  soustraction1(){
    const bd=alea(1,7),ad=alea(bd+1,9),bu=alea(0,8),au=alea(bu,9);
    const a=ad*10+au,b=bd*10+bu;
    return saisie(`Calcule : ${a} − ${b}`,[String(a-b)],`Unités : ${au} − ${bu} = ${au-bu}. Dizaines : ${ad} − ${bd} = ${ad-bd}. Résultat : ${a-b}.`);
  },
  soustraction(){
    if(alea(0,1)){const a=alea(42,99),b=alea(13,a-10);
      return saisie(`Pose et calcule : ${a} − ${b}`,[String(a-b)],`${a} − ${b} = ${a-b}. Vérifie avec une addition : ${a-b} + ${b} = ${a}.`);}
    const a=alea(150,999),b=alea(15,99);
    return saisie(`Pose et calcule : ${a} − ${b}`,[String(a-b)],`${a} − ${b} = ${a-b}. Vérifie avec une addition : ${a-b} + ${b} = ${a}.`);
  },
  complement(){
    const t=alea(1,3);
    if(t===1){const n=alea(1,9);return saisie(`Combien faut-il ajouter à ${n} pour faire 10 ?`,[String(10-n)],`${n} + ${10-n} = 10.`);}
    if(t===2){const n=alea(1,9)*10;return saisie(`Combien faut-il ajouter à ${n} pour faire 100 ?`,[String(100-n)],`${n} + ${100-n} = 100 : pense à ${n/10} + ${10-n/10} = 10.`);}
    let n=alea(11,98);if(n%10===0)n++;const d=Math.ceil(n/10)*10;
    return saisie(`Combien faut-il ajouter à ${n} pour arriver à ${d} ?`,[String(d-n)],`${n} + ${d-n} = ${d} : on complète les unités jusqu'à 10.`);
  },
  doubles(){
    const t=alea(1,3);
    if(t===1){const n=alea(2,25);return saisie(`Quel est le double de ${n} ?`,[String(2*n)],`Le double de ${n}, c'est ${n} + ${n} = ${2*n}.`);}
    if(t===2){const n=alea(1,9)*10;return saisie(`Quel est le double de ${n} ?`,[String(2*n)],`Le double de ${n}, c'est ${n} + ${n} = ${2*n}.`);}
    const n=alea(1,30)*2;return saisie(`Quelle est la moitié de ${n} ?`,[String(n/2)],`La moitié de ${n}, c'est ${n/2}, car ${n/2} + ${n/2} = ${n}.`);
  },
  multiplication(){
    const a=alea(2,9),n=alea(2,5);const somme=Array(n).fill(a).join(" + ");
    const t=alea(1,3);
    if(t===1)return qcm(`Quelle multiplication est égale à ${somme} ?`,`${n} × ${a}`,[`${n} + ${a}`,`${n+1} × ${a}`,`${n} × ${a+1}`],`On ajoute ${n} fois le nombre ${a} : c'est ${n} × ${a} = ${n*a}.`);
    if(t===2)return saisie(`Calcule : ${somme}`,[String(n*a)],`${n} fois ${a}, c'est ${n} × ${a} = ${n*a}.`);
    const p=prenom(),obj=pioche([["sacs","billes"],["boîtes","crayons"],["assiettes","gâteaux"],["vases","fleurs"]]);
    return saisie(`${p} a ${n} ${obj[0]} de ${a} ${obj[1]}. Combien de ${obj[1]} en tout ?`,[String(n*a)],`${n} fois ${a} : ${n} × ${a} = ${n*a} ${obj[1]}.`);
  },
  _table(liste){
    const a=pioche(liste),b=alea(1,10);
    if(alea(0,3)===0){const k=alea(1,9);return saisie(`Dans la table de ${a}, quel nombre vient après ${a*k} ?`,[String(a*(k+1))],`On avance de ${a} en ${a} : ${a*k} + ${a} = ${a*(k+1)}.`);}
    return alea(0,1)?saisie(`Calcule : ${a} × ${b}`,[String(a*b)],`${a} × ${b} = ${a*b}. Récite la table de ${a}.`)
                    :saisie(`Calcule : ${b} × ${a}`,[String(a*b)],`${b} × ${a} = ${a*b}. Récite la table de ${a}.`);
  },
  tables25(){return GM._table([2,5]);},
  tables34(){return GM._table([3,4]);},
  tables10(){
    if(alea(0,2)===0){const n=alea(2,9);return saisie(`Combien de dizaines y a-t-il dans ${n*10} ?`,[String(n)],`${n*10} = ${n} × 10 : il y a ${n} dizaines.`);}
    return GM._table([10]);
  },
  tables(){return GM._table([2,3,4,5,10]);},
  monnaie(){
    const t=alea(1,4);
    if(t===1){const b=alea(1,4),p=alea(1,6);return saisie(`J'ai ${b} billet${b>1?"s":""} de 10 € et ${p} pièce${p>1?"s":""} de 2 €. Combien ai-je d'euros ?`,[String(b*10+p*2)],`${b} × 10 = ${b*10} ; ${p} × 2 = ${p*2} ; ${b*10} + ${p*2} = ${b*10+p*2} €.`);}
    if(t===2){const v=pioche([2,5,10]),n=alea(2,6);return saisie(`Combien faut-il de ${v===2?"pièces de 2 €":"billets de "+v+" €"} pour payer ${v*n} € ?`,[String(n)],`${n} × ${v} = ${v*n}, donc il en faut ${n}.`);}
    if(t===3){const c=pioche([10,20,50]),p=alea(2,c-1);return saisie(`${prenom()} achète un livre à ${p} € et paie avec un billet de ${c} €. Combien lui rend-on ?`,[String(c-p)],`On calcule ${c} − ${p} = ${c-p} €.`);}
    const a=alea(3,25),b=alea(2,20);return saisie(`Un ballon coûte ${a} € et une corde coûte ${b} €. Combien coûtent-ils ensemble ?`,[String(a+b)],`${a} + ${b} = ${a+b} €.`);
  },
  heure(){
    const h=alea(1,11),demi=alea(0,1)===1;
    const H=x=>x===1?"1 heure":`${x} heures`;
    const t=alea(1,3);
    if(t===1){const rep=demi?`${h}h30`:`${h}h00`;
      const acc=[rep,rep.replace("h"," h ")];if(h<10)acc.push("0"+rep);if(!demi)acc.push(`${h}h`,`${h} h`);
      return saisie(`Il est ${H(h)}${demi?" et demie":""}. Écris l'heure en chiffres (comme 7h00)`,acc,demi?`« et demie » veut dire 30 minutes : ${rep}.`:`Une heure pile, c'est 0 minute : ${rep}.`);}
    if(t===2){const h2=h+1;
      const bonne=demi?`${H(h)} et demie`:H(h);
      const f=demi?[`${H(h2)} et demie`,H(h),`${H(h)} et quart`]:[`${H(h)} et demie`,H(h2),`6 heures`];
      const desc=demi?`la petite aiguille est entre le ${h} et le ${h2}, la grande aiguille est sur le 6`:`la petite aiguille est sur le ${h}, la grande aiguille est sur le 12`;
      return qcm(`Sur l'horloge, ${desc}. Quelle heure est-il ?`,bonne,f.filter(x=>x!==bonne),demi?`Grande aiguille sur le 6 : c'est « et demie ». La petite aiguille vient de passer le ${h}.`:`Grande aiguille sur le 12 : c'est l'heure pile. La petite aiguille montre le ${h}.`);}
    const b=pioche([["Combien de minutes y a-t-il dans une heure ?","60","Une heure = 60 minutes."],["Combien de minutes y a-t-il dans une demi-heure ?","30","La moitié de 60 minutes, c'est 30 minutes."],["Combien d'heures y a-t-il dans une journée entière ?","24","Un jour et une nuit durent 24 heures."]]);
    if(alea(0,1))return saisie(b[0],[b[1]],b[2]);
    const r=h+1;return saisie(`Il est ${h}h00. Quelle heure sera-t-il une heure plus tard ? (écris comme 7h00)`,[`${r}h00`,`${r}h`,`${r} h 00`,`${r} h`],`On ajoute 1 heure : ${h} + 1 = ${r}, il sera ${r}h00.`);
  },
  longueurs(){
    const t=alea(1,4);
    if(t===1){const m=alea(1,9);return saisie(`Combien y a-t-il de centimètres dans ${m} mètre${m>1?"s":""} ?`,[String(m*100)],`1 m = 100 cm, donc ${m} m = ${m*100} cm.`);}
    if(t===2){const m=alea(1,4),c=alea(10,90);return saisie(`Combien de centimètres font ${m} m et ${c} cm ?`,[String(m*100+c)],`${m} m = ${m*100} cm ; ${m*100} + ${c} = ${m*100+c} cm.`);}
    if(t===3){const a=alea(12,48),b=alea(11,45);return saisie(`Un ruban mesure ${a} cm, un autre ${b} cm. On les met bout à bout. Quelle longueur en cm ?`,[String(a+b)],`${a} + ${b} = ${a+b} cm.`);}
    return deBanque([
      {q:"Quelle unité choisir pour mesurer la longueur d'un crayon ?",b:"le centimètre",f:["le mètre","le kilogramme","l'heure"],e:"Un crayon est petit : on le mesure en centimètres."},
      {q:"Quelle unité choisir pour mesurer la longueur de la cour ?",b:"le mètre",f:["le centimètre","le gramme","l'euro"],e:"Pour les grandes longueurs, on utilise le mètre."},
      {q:"Avec quoi mesure-t-on un trait sur le cahier ?",b:"la règle graduée",f:["la balance","l'horloge","le thermomètre"],e:"On place le 0 de la règle au début du trait."},
      {q:"Quelle est la longueur la plus proche de la taille d'un enfant de 7 ans ?",b:"1 m 20 cm",f:["12 cm","12 m","1 cm"],e:"Un enfant de CE1 mesure environ 1 m 20 cm."},
      {q:"Où place-t-on le début du trait pour le mesurer avec la règle ?",b:"sur le 0",f:["sur le 1","au bout de la règle","n'importe où"],e:"On part toujours du 0 de la règle."}]);
  },
  masses(){
    const t=alea(1,3);
    if(t===1){const a=pioche([100,200,250,300,500]),b=pioche([100,200,250,400,500]);return saisie(`Un paquet pèse ${a} g, un autre ${b} g. Combien pèsent-ils ensemble, en grammes ?`,[String(a+b)],`${a} + ${b} = ${a+b} g.`);}
    if(t===2){const k=alea(1,5);return saisie(`Combien de grammes y a-t-il dans ${k} kilogramme${k>1?"s":""} ?`,[String(k*1000)],`1 kg = 1000 g, donc ${k} kg = ${k*1000} g.`);}
    return deBanque([
      {q:"Quel objet est le plus lourd ?",b:"une voiture",f:["une plume","une pomme","un crayon"],e:"La voiture pèse plus de 1000 kg."},
      {q:"Quel objet est le plus léger ?",b:"une feuille de papier",f:["un cartable rempli","un chien","une pastèque"],e:"Une feuille pèse quelques grammes."},
      {q:"Avec quel instrument mesure-t-on une masse ?",b:"la balance",f:["la règle","l'horloge","l'équerre"],e:"La balance donne la masse en grammes ou en kilogrammes."},
      {q:"Quelle unité choisir pour peser un enfant ?",b:"le kilogramme",f:["le gramme","le mètre","le centimètre"],e:"Un enfant pèse environ 25 kg."},
      {q:"Quelle unité choisir pour peser une pièce de 1 € ?",b:"le gramme",f:["le kilogramme","le mètre","le litre"],e:"Les objets très légers se pèsent en grammes."},
      {q:"1 kilogramme, c'est combien de grammes ?",b:"1000 g",f:["100 g","10 g","1 g"],e:"1 kg = 1000 g."}]);
  },
  mesures(){return pioche([GM.longueurs,GM.masses,GM.heure,GM.monnaie])();},
  polygones(){
    if(alea(0,2)===0){const tr=alea(1,4),ca=alea(1,3);return saisie(`Combien de côtés ont ensemble ${tr} triangle${tr>1?"s":""} et ${ca} carré${ca>1?"s":""} ?`,[String(3*tr+4*ca)],`Un triangle a 3 côtés, un carré en a 4 : ${3*tr} + ${4*ca} = ${3*tr+4*ca}.`);}
    return deBanque([
      {q:"Combien de côtés a un triangle ?",b:"3",f:["4","5","2"],e:"Tri veut dire trois : 3 côtés et 3 sommets."},
      {q:"Combien de côtés a un rectangle ?",b:"4",f:["3","5","6"],e:"Le rectangle a 4 côtés et 4 angles droits."},
      {q:"Quelle figure a 4 côtés de la même longueur et 4 angles droits ?",b:"le carré",f:["le triangle","le rectangle allongé","le cercle"],e:"Le carré a 4 côtés égaux et 4 angles droits."},
      {q:"Combien de sommets a un carré ?",b:"4",f:["3","2","6"],e:"Un sommet est un coin : le carré en a 4."},
      {q:"Quelle figure n'a aucun côté droit ?",b:"le cercle",f:["le carré","le triangle","le rectangle"],e:"Le cercle est une ligne courbe fermée."},
      {q:"Dans un rectangle, les côtés qui se font face sont :",b:"de la même longueur",f:["toujours de longueurs différentes","courbes","au nombre de 3"],e:"Un rectangle a 2 grands côtés égaux et 2 petits côtés égaux."},
      {q:"Comment s'appelle une figure fermée qui a 3 côtés ?",b:"un triangle",f:["un carré","un rectangle","un cercle"],e:"3 côtés : c'est un triangle."}]);
  },
  angledroit(){return deBanque([
      {q:"Avec quel instrument vérifie-t-on un angle droit ?",b:"l'équerre",f:["la balance","le compas","l'horloge"],e:"On place le coin de l'équerre dans l'angle."},
      {q:"Combien d'angles droits a un rectangle ?",b:"4",f:["2","1","0"],e:"Les 4 coins du rectangle sont des angles droits."},
      {q:"Combien d'angles droits a un carré ?",b:"4",f:["3","2","0"],e:"Le carré a 4 angles droits, comme le rectangle."},
      {q:"Quel objet a souvent des coins en angle droit ?",b:"une feuille de cahier",f:["une assiette ronde","un ballon","une bague"],e:"Les coins d'une feuille sont des angles droits : on peut s'en servir comme équerre."},
      {q:"Un cercle a-t-il des angles droits ?",b:"non, aucun",f:["oui, 4","oui, 2","oui, 1"],e:"Le cercle n'a ni côté droit ni angle."},
      {q:"Pour fabriquer une équerre, on peut plier une feuille :",b:"deux fois, en faisant coïncider les bords du premier pli",f:["une seule fois au hasard","en boule","en quatre morceaux déchirés"],e:"Le gabarit plié donne un angle droit."}]);},
  alignement(){return deBanque([
      {q:"Avec quel instrument vérifie-t-on que des points sont alignés ?",b:"la règle",f:["la balance","le compas","le thermomètre"],e:"On pose la règle : si tous les points touchent le bord, ils sont alignés."},
      {q:"Des points alignés sont des points :",b:"sur une même ligne droite",f:["placés en rond","tous de couleurs différentes","très éloignés"],e:"On peut tracer une ligne droite qui passe par tous."},
      {q:"Avec quel instrument trace-t-on un trait droit ?",b:"la règle",f:["l'équerre seulement","la gomme","le taille-crayon"],e:"On tient bien la règle et on trace le long du bord."},
      {q:"Par 2 points, combien de lignes droites peut-on tracer ?",b:"une seule",f:["deux","trois","aucune"],e:"Deux points sont toujours alignés : une seule droite passe par les deux."},
      {q:"Un segment, c'est :",b:"un trait droit entre deux points",f:["une ligne courbe","un rond","un point tout seul"],e:"Le segment a deux extrémités."},
      {q:"Pour tracer un trait droit bien propre, on utilise :",b:"un crayon bien taillé et une règle",f:["un feutre et rien d'autre","le doigt","une gomme"],e:"La règle guide le crayon."}]);},
  geometrie(){return pioche([GM.polygones,GM.angledroit,GM.alignement])();},
  problemes(){
    const p=prenom(),t=alea(1,5);
    if(t===1){const a=alea(12,58),b=alea(11,39);return saisie(`${p} a ${a} billes. ${ilElle(p)} en gagne ${b} à la récréation. Combien de billes a-t-${ilElle(p).toLowerCase()} maintenant ?`,[String(a+b)],`On gagne des billes : on ajoute. ${a} + ${b} = ${a+b} billes.`);}
    if(t===2){const a=alea(30,95),b=alea(11,a-5);return saisie(`Dans un car, il y a ${a} passagers. ${b} descendent. Combien en reste-t-il ?`,[String(a-b)],`Ils descendent : on retire. ${a} − ${b} = ${a-b} passagers.`);}
    if(t===3){const a=alea(20,60),d=alea(5,30);const q=autrePrenom(p);return saisie(`${p} a ${a} images. ${q} en a ${d} de plus. Combien d'images a ${q} ?`,[String(a+d)],`« ${d} de plus » : on ajoute. ${a} + ${d} = ${a+d} images.`);}
    if(t===4){const a=alea(40,99),b=alea(10,a-10);return saisie(`Un livre a ${a} pages. ${p} en a lu ${b}. Combien de pages lui reste-t-il à lire ?`,[String(a-b)],`On cherche ce qui manque : ${a} − ${b} = ${a-b} pages.`);}
    const a=alea(100,500),b=alea(100,400);return saisie(`À l'école, il y a ${a} livres dans la bibliothèque. On en achète ${b}. Combien y en a-t-il maintenant ?`,[String(a+b)],`On ajoute : ${a} + ${b} = ${a+b} livres.`);
  },
  problemesx(){
    const p=prenom(),t=alea(1,4);
    if(t===1){const n=alea(2,9),k=pioche([2,3,4,5,10]);return saisie(`${p} range ses crayons dans ${n} boîtes de ${k} crayons. Combien de crayons en tout ?`,[String(n*k)],`${n} boîtes de ${k} : ${n} × ${k} = ${n*k} crayons.`);}
    if(t===2){const n=alea(2,9);return saisie(`Combien de pattes ont ${n} chats ?`,[String(4*n)],`Un chat a 4 pattes : ${n} × 4 = ${4*n} pattes.`);}
    if(t===3){const n=alea(2,9);return saisie(`Combien de roues ont ${n} vélos ?`,[String(2*n)],`Un vélo a 2 roues : ${n} × 2 = ${2*n} roues.`);}
    const n=alea(2,6),k=pioche([3,4,5]);return saisie(`Dans la classe, il y a ${n} tables de ${k} élèves. Combien d'élèves en tout ?`,[String(n*k)],`${n} × ${k} = ${n*k} élèves.`);
  },
  calcmental(){
    const t=alea(1,semaineEnCours<13?5:6); // les tables arrivent en semaine 13
    if(t===1){const n=alea(10,89);return saisie(`Calcule : ${n} + 10`,[String(n+10)],`Ajouter 10, c'est ajouter 1 dizaine : ${n+10}.`);}
    if(t===2){const n=alea(20,99);return saisie(`Calcule : ${n} − 10`,[String(n-10)],`Enlever 10, c'est enlever 1 dizaine : ${n-10}.`);}
    if(t===3){const a=alea(2,9),b=alea(2,9);return saisie(`Calcule : ${a} + ${b}`,[String(a+b)],`${a} + ${b} = ${a+b}. Passe par 10 si besoin.`);}
    if(t===4){const n=alea(1,9);return saisie(`Combien faut-il ajouter à ${n} pour faire 10 ?`,[String(10-n)],`${n} + ${10-n} = 10.`);}
    if(t===5){const n=alea(2,15);return saisie(`Quel est le double de ${n} ?`,[String(2*n)],`${n} + ${n} = ${2*n}.`);}
    const a=pioche([2,5,10]),b=alea(1,10);return saisie(`Calcule : ${a} × ${b}`,[String(a*b)],`${a} × ${b} = ${a*b}.`);
  },
  defis(){return pioche([GM.problemes,GM.problemesx,GM.nombres,GM.addition,GM.soustraction,GM.tables,GM.heure,GM.monnaie,GM.geometrie])();}
};
function exoMaths(tag){const f=(tag&&!tag.startsWith("_")&&GM[tag])||GM.calcmental;return f();}

/* ---------- FRANÇAIS ---------- */
/* Les sons : mots qui contiennent le son, mots neutres, et écritures correctes / fautives */
const SONS={
  ouon:{sons:[{s:"ou",avec:["un loup","une poule","une roue","un hibou","la soupe","un genou"]},{s:"on",avec:["un pont","un ballon","un melon","un savon","un crayon","un lion"]}],
    neutres:["la lune","un vélo","une table","une tulipe","une fusée","une sirène","un pirate","une tomate"],
    ecrit:[["un mouton","un muton","un mouthon"],["une poule","une pole","une poul"],["un ballon","un balon","un ballont"],["une roue","une rou","une roe"],["un pantalon","un pantalan","un pentalon"],["un hibou","un ibou","un hibout"],["un crayon","un créyon","un crayan"]],
    regle:"Le son « ou » s'écrit o-u ; le son « on » s'écrit o-n."},
  anen:{sons:[{s:"an",avec:["une dent","le vent","une orange","une chanson","un enfant","une lampe","un serpent"]}],
    neutres:["la lune","un vélo","une tulipe","une fusée","un robot","une sirène","un pirate","une moto"],
    ecrit:[["une dent","une dant","une den"],["un enfant","un anfant","un enfent"],["une chanson","une chenson","une chanzon"],["le vent","le vant","le ven"],["un éléphant","un éléfant","un éléphent"],["un serpent","un serpant","un serpan"],["une orange","une orenge","une oranje"]],
    regle:"Le son « an » peut s'écrire an ou en : il faut apprendre l'écriture de chaque mot."},
  in:{sons:[{s:"in",avec:["un lapin","un jardin","la main","un train","la peinture","un sapin","un poussin"]}],
    neutres:["la lune","un vélo","une tulipe","une fusée","un robot","une tomate","un pirate","une moto"],
    ecrit:[["un lapin","un lapain","un lapein"],["un train","un trin","un trein"],["la main","la min","la mein"],["un jardin","un jardain","un jardein"],["la peinture","la pinture","la painture"],["un sapin","un sapain","un sappin"],["un poussin","un poussain","un pousein"]],
    regle:"Le son « in » peut s'écrire in, ain ou ein : il faut apprendre l'écriture de chaque mot."},
  oi:{sons:[{s:"oi",avec:["un roi","une étoile","une poire","le soir","une armoire","une noisette","un mouchoir"]}],
    neutres:["la lune","un vélo","une tulipe","une fusée","un lapin","une tomate","un pirate","une moto"],
    ecrit:[["un roi","un roa","un rwa"],["une étoile","une étoale","une étwal"],["une poire","une poare","une pwar"],["une armoire","une armoare","une armwar"],["le soir","le soar","le swar"],["une noisette","une noazette","une nwazette"]],
    regle:"Le son « oi » s'écrit o-i."},
  eau:{sons:[{s:"o",avec:["un bateau","un chapeau","une auto","un gâteau","un château","un cadeau","un seau"]}],
    neutres:["la lune","une tulipe","une fusée","un lapin","une sirène","une table","une fille","un livre"],
    ecrit:[["un bateau","un bato","un batau"],["un chapeau","un chapo","un chapau"],["un gâteau","un gato","un gâtau"],["une auto","une oto","une eauto"],["une autruche","une otruche","une eautruche"],["un château","un chato","un châtau"],["un cadeau","un kado","un cadau"]],
    regle:"Le son « o » peut s'écrire o, au ou eau ; à la fin des noms, on trouve souvent eau."},
  illgn:{sons:[{s:"ill",avec:["une fille","une feuille","une abeille","un papillon","une grenouille","un soleil"]},{s:"gn",avec:["une montagne","un champignon","une araignée","un peigne","la campagne","une ligne"]}],
    neutres:["la lune","un vélo","une tulipe","une fusée","un robot","une tomate","un pirate","une moto"],
    ecrit:[["un papillon","un papiyon","un papion"],["une fille","une fiye","une fiile"],["une feuille","une feuye","une feuile"],["une abeille","une abeye","une abeile"],["une montagne","une montanie","une montanye"],["un champignon","un champinion","un champignion"],["une araignée","une araniée","une araignié"]],
    regle:"Le son « ill » s'écrit souvent ill (ou il à la fin) ; le son « gn » s'écrit g-n."},
  sss:{lettre:"s",questions:[["une maison","z"],["un poisson","s"],["une rose","z"],["une salade","s"],["une chemise","z"],["une tasse","s"],["une valise","z"],["un serpent","s"],["la cuisine","z"],["une brosse","s"],["un oiseau","z"],["une glissade","s"]],
    ecrit:[["une maison","une maisson","une mézon"],["un poisson","un poisonn","un poiçon"],["une valise","une valisse","une valize"],["la cuisine","la cuissine","la cuizine"],["une brosse","une brose","une broce"],["une chemise","une chemisse","une chemize"],["une tasse","une tase","une tace"]],
    regle:"Entre deux voyelles, s chante [z] (maison) ; pour entendre [s], on double : ss (poisson)."},
  cc:{lettre:"c",questions:[["une carotte","k"],["un citron","s"],["une cerise","s"],["une école","k"],["un cube","k"],["un cinéma","s"],["une glace","s"],["un coq","k"],["un garçon","s"],["une leçon","s"]],
    ecrit:[["un garçon","un garcon","un garsson"],["une leçon","une lecon","une lesson"],["un glaçon","un glacon","un glasson"],["un maçon","un macon","un masson"],["un reçu","un recu","un ressu"],["un hameçon","un hamecon","un amesson"]],
    regle:"Devant a, o, u, le c fait [k] ; devant e et i, il fait [s]. Pour faire [s] devant a, o, u, on met une cédille : ç."},
  gge:{lettre:"g",questions:[["un gâteau","g"],["une girafe","j"],["une orange","j"],["une gomme","g"],["un légume","g"],["une page","j"],["un genou","j"],["une guitare","g"],["un gilet","j"],["une figure","g"]],
    ecrit:[["un pigeon","un pigon","un pijon"],["une guitare","une gitare","une ghitare"],["une bougie","une bouguie","une boujie"],["un nuage","un nuague","un nuaje"],["un plongeon","un plongon","un plonjon"],["une baguette","une bagette","une baguète"]],
    regle:"Devant e, i, y, le g fait [j] ; pour faire [g], on écrit gu ; pour faire [j] devant a, o, on écrit ge."}
};
function exoSon(tag){
  const S=SONS[tag];
  if(S.lettre&&alea(0,1)){
    const [mot,son]=pioche(S.questions);
    const ch=S.lettre==="s"?["[s] comme dans « sac »","[z] comme dans « zèbre »"]:S.lettre==="c"?["[k] comme dans « car »","[s] comme dans « sac »"]:["[g] comme dans « gare »","[j] comme dans « jupe »"];
    const bonne=ch.find(x=>x.startsWith("["+son+"]"));
    return qcm(`Dans « ${mot} », quel son fait la lettre ${S.lettre} ?`,bonne,ch.filter(x=>x!==bonne),S.regle);
  }
  if(S.sons&&alea(0,1)){
    const so=pioche(S.sons);const bonne=pioche(so.avec);
    const autres=S.sons.filter(x=>x!==so).flatMap(x=>x.avec);
    const fausses=autres.length?[...melange(S.neutres).slice(0,2),pioche(autres)]:melange(S.neutres).slice(0,3);
    return qcm(`Dans quel mot entends-tu le son « ${so.s} » ?`,bonne,fausses,`On entend « ${so.s} » dans « ${bonne} ». ${S.regle}`);
  }
  const e=pioche(S.ecrit);
  return qcm(`Quelle est la bonne écriture ?`,e[0],[e[1],e[2]],`On écrit « ${e[0]} ». ${S.regle}`);
}

const VERBES_ER=[
 {inf:"chanter",pres:["chante","chantes","chante","chantons","chantez","chantent"],fut:["chanterai","chanteras","chantera","chanterons","chanterez","chanteront"],pp:"chanté"},
 {inf:"jouer",pres:["joue","joues","joue","jouons","jouez","jouent"],fut:["jouerai","joueras","jouera","jouerons","jouerez","joueront"],pp:"joué"},
 {inf:"danser",pres:["danse","danses","danse","dansons","dansez","dansent"],fut:["danserai","danseras","dansera","danserons","danserez","danseront"],pp:"dansé"},
 {inf:"parler",pres:["parle","parles","parle","parlons","parlez","parlent"],fut:["parlerai","parleras","parlera","parlerons","parlerez","parleront"],pp:"parlé"},
 {inf:"marcher",pres:["marche","marches","marche","marchons","marchez","marchent"],fut:["marcherai","marcheras","marchera","marcherons","marcherez","marcheront"],pp:"marché"},
 {inf:"regarder",pres:["regarde","regardes","regarde","regardons","regardez","regardent"],fut:["regarderai","regarderas","regardera","regarderons","regarderez","regarderont"],pp:"regardé"},
 {inf:"dessiner",pres:["dessine","dessines","dessine","dessinons","dessinez","dessinent"],fut:["dessinerai","dessineras","dessinera","dessinerons","dessinerez","dessineront"],pp:"dessiné"},
 {inf:"sauter",pres:["saute","sautes","saute","sautons","sautez","sautent"],fut:["sauterai","sauteras","sautera","sauterons","sauterez","sauteront"],pp:"sauté"}
];
const IRR={
 etre:{inf:"être",pres:["suis","es","est","sommes","êtes","sont"],fut:["serai","seras","sera","serons","serez","seront"]},
 avoir:{inf:"avoir",pres:["ai","as","a","avons","avez","ont"],fut:["aurai","auras","aura","aurons","aurez","auront"]},
 aller:{inf:"aller",pres:["vais","vas","va","allons","allez","vont"],fut:["irai","iras","ira","irons","irez","iront"]}
};
const PRON=["je","tu","il","nous","vous","ils"];
const PRON_VAR=[["je"],["tu"],["il","elle","on"],["nous"],["vous"],["ils","elles"]];
/* « je » devient « j' » devant une voyelle */
const avecPron=(i,forme)=>{const p=pioche(PRON_VAR[i]);return (p==="je"&&/^[aeiouéèêh]/.test(forme))?"j'":p+" ";};
function qConj(v,temps,i){
  const forme=v[temps][i];const p=avecPron(i,forme);
  const nomT=temps==="pres"?"présent":"futur";
  const fausses=melange(v[temps].filter(x=>x!==forme)).slice(0,3);
  return qcm(`Conjugue « ${v.inf} » au ${nomT} : ${p}___`,forme,fausses,`${p}${forme}. ${temps==="pres"&&v.inf.endsWith("er")&&v.inf!=="aller"?"Au présent, les verbes en -er finissent par -e, -es, -e, -ons, -ez, -ent.":temps==="fut"?"Au futur, on entend toujours le r : -rai, -ras, -ra, -rons, -rez, -ront.":"Ce verbe est à savoir par cœur."}`);
}
const PHRASES_F=[
 {c:"le canapé",ph:"Le chat dort sur le canapé.",sujet:"Le chat",verbe:"dort",inf:"dormir"},
 {c:"la cour",ph:"Les enfants jouent dans la cour.",sujet:"Les enfants",verbe:"jouent",inf:"jouer"},
 {c:"le goûter",ph:"Ma sœur prépare le goûter.",sujet:"Ma sœur",verbe:"prépare",inf:"préparer"},
 {c:"une histoire",ph:"Le maître lit une histoire.",sujet:"Le maître",verbe:"lit",inf:"lire"},
 {c:"une pomme",ph:"Hugo mange une pomme.",sujet:"Hugo",verbe:"mange",inf:"manger"},
 {c:"le matin",ph:"Les oiseaux chantent le matin.",sujet:"Les oiseaux",verbe:"chantent",inf:"chanter"},
 {c:"mon vélo",ph:"Papa répare mon vélo.",sujet:"Papa",verbe:"répare",inf:"réparer"},
 {c:"vite",ph:"Le petit chien court vite.",sujet:"Le petit chien",verbe:"court",inf:"courir"},
 {c:"un château",ph:"Léa et Tom dessinent un château.",sujet:"Léa et Tom",verbe:"dessinent",inf:"dessiner"},
 {c:"au tableau",ph:"La maîtresse écrit au tableau.",sujet:"La maîtresse",verbe:"écrit",inf:"écrire"}
];
const NOMS_C=["un cartable","une maison","le soleil","la fleur","un vélo","les chaussures","une pomme","le chien"];
const NON_NOMS=["courir","joli","vite","chanter","souvent","toujours","manger","danser"];
const HOMO={
 homoaa:[
  {ph:"Tom ___ un chat.",b:"a",f:"à",e:"« a » est le verbe avoir : on peut dire « avait »."},
  {ph:"Je vais ___ la piscine.",b:"à",f:"a",e:"On ne peut pas dire « avait » : on écrit « à »."},
  {ph:"Léa ___ perdu son bonnet.",b:"a",f:"à",e:"« a » est le verbe avoir : on peut dire « avait »."},
  {ph:"Nous allons ___ l'école.",b:"à",f:"a",e:"On ne peut pas dire « avait » : on écrit « à »."},
  {ph:"Il ___ sept ans.",b:"a",f:"à",e:"« a » est le verbe avoir : on peut dire « avait »."},
  {ph:"C'est une tarte ___ la fraise.",b:"à",f:"a",e:"On ne peut pas dire « avait » : on écrit « à »."},
  {ph:"Elle ___ froid aux mains.",b:"a",f:"à",e:"« a » est le verbe avoir : on peut dire « avait »."},
  {ph:"Je pense ___ toi.",b:"à",f:"a",e:"On ne peut pas dire « avait » : on écrit « à »."}],
 homoet:[
  {ph:"Le ciel ___ bleu.",b:"est",f:"et",e:"« est » est le verbe être : on peut dire « était »."},
  {ph:"J'aime les pommes ___ les poires.",b:"et",f:"est",e:"« et » relie deux mots : on peut dire « et puis »."},
  {ph:"Mon frère ___ malade.",b:"est",f:"et",e:"« est » est le verbe être : on peut dire « était »."},
  {ph:"Lina ___ Adam jouent au ballon.",b:"et",f:"est",e:"« et » relie deux mots : on peut dire « et puis »."},
  {ph:"La soupe ___ chaude.",b:"est",f:"et",e:"« est » est le verbe être : on peut dire « était »."},
  {ph:"Il prend son sac ___ son manteau.",b:"et",f:"est",e:"« et » relie deux mots : on peut dire « et puis »."},
  {ph:"Le chat ___ sur le toit.",b:"est",f:"et",e:"« est » est le verbe être : on peut dire « était »."},
  {ph:"Je mange du pain ___ du fromage.",b:"et",f:"est",e:"« et » relie deux mots : on peut dire « et puis »."}],
 homoson:[
  {ph:"Hugo range ___ cartable.",b:"son",f:"sont",e:"« son » veut dire « le sien » : on peut dire « mon »."},
  {ph:"Les enfants ___ dans la cour.",b:"sont",f:"son",e:"« sont » est le verbe être : on peut dire « étaient »."},
  {ph:"Zoé cherche ___ stylo.",b:"son",f:"sont",e:"« son » veut dire « le sien » : on peut dire « mon »."},
  {ph:"Les fleurs ___ jolies.",b:"sont",f:"son",e:"« sont » est le verbe être : on peut dire « étaient »."},
  {ph:"Le chien mange dans ___ bol.",b:"son",f:"sont",e:"« son » veut dire « le sien » : on peut dire « mon »."},
  {ph:"Mes amis ___ en vacances.",b:"sont",f:"son",e:"« sont » est le verbe être : on peut dire « étaient »."},
  {ph:"Ils ___ très contents.",b:"sont",f:"son",e:"« sont » est le verbe être : on peut dire « étaient »."},
  {ph:"Tom joue avec ___ frère.",b:"son",f:"sont",e:"« son » veut dire « le sien » : on peut dire « mon »."}]
};
const GF={
  phrase(){return deBanque([
    {q:"Par quoi commence toujours une phrase ?",b:"une majuscule",f:["une virgule","un point","un tiret"],e:"Une phrase commence par une majuscule et se termine par un point."},
    {q:"« le chat dort sur le lit » : que manque-t-il ?",b:"la majuscule et le point",f:["une virgule","un autre mot","rien"],e:"Une phrase commence par une majuscule et finit par un point."},
    {q:"Quel signe termine une question ?",b:"le point d'interrogation",f:["la virgule","le point","la majuscule"],e:"« Où vas-tu ? » se termine par « ? »."},
    {q:"Combien y a-t-il de phrases ? « Il pleut. Je reste à la maison. »",b:"2",f:["1","3","4"],e:"Deux majuscules et deux points : deux phrases."},
    {q:"Quelle phrase est bien écrite ?",b:"Le bébé dort.",f:["le bébé dort.","Le bébé dort","bébé Le dort."],e:"Majuscule au début, point à la fin, mots dans le bon ordre."},
    {q:"Quelle suite de mots est une phrase qui a du sens ?",b:"Le chien mange sa pâtée.",f:["Pâtée sa le chien mange.","Mange chien le sa pâtée.","Le sa chien pâtée mange."],e:"Une phrase a du sens : les mots sont dans le bon ordre."},
    {q:"Quel signe met-on à la fin de « Comme il fait beau » pour montrer qu'on est content ?",b:"le point d'exclamation",f:["la virgule","le tiret","la majuscule"],e:"Le point d'exclamation « ! » montre la joie ou la surprise."}]);},
  alphabet(){
    if(alea(0,2)===0){const L="abcdefghijklmnopqrstuvwxyz";const i=alea(0,24);
      return saisie(`Quelle lettre vient juste après « ${L[i]} » dans l'alphabet ?`,[L[i+1]],`Récite l'alphabet : … ${L[i]}, ${L[i+1]} …`);}
    const mots=["arbre","ballon","cheval","domino","école","fusée","girafe","hibou","igloo","jardin","koala","lapin","mouton","navire","orange","pomme","renard","sapin","tortue","vache","zèbre"];
    const l=melange(mots).slice(0,4);
    const ordre=l.slice().sort((a,b)=>a.localeCompare(b,"fr"));
    const premier=alea(0,1)===1;const bonne=premier?ordre[0]:ordre[3];
    return qcm(`Quel mot vient en ${premier?"premier":"dernier"} dans l'ordre alphabétique ?`,bonne,l.filter(x=>x!==bonne),`On regarde la première lettre de chaque mot : ${ordre.join(", ")}.`);
  },
  nom(){
    const t=alea(1,3);
    if(t===1){const n=pioche(NOMS_C);const f=melange(NON_NOMS).slice(0,3);const nom=n.split(" ")[1];
      return qcm(`Quel mot est un nom ?`,nom,f,`« ${nom} » est un nom : on peut mettre un déterminant devant (${n}).`);}
    if(t===2){const n=pioche(NOMS_C);const [det,nom]=n.split(" ");
      return qcm(`Dans « ${n} », quel mot est le déterminant ?`,det,[nom],`Le déterminant est le petit mot placé devant le nom : « ${det} ».`);}
    return deBanque([
      {q:"Quel mot est un nom propre ?",b:"Paris",f:["ville","chien","maison"],e:"Un nom propre commence toujours par une majuscule."},
      {q:"Quel mot est un nom propre ?",b:"Léa",f:["fille","école","table"],e:"Un prénom est un nom propre : il prend une majuscule."},
      {q:"Quel déterminant va devant « pomme » ?",b:"une",f:["un","des","les"],e:"On dit « une pomme » : pomme est féminin singulier."},
      {q:"Quel déterminant va devant « vélos » ?",b:"des",f:["un","une","le"],e:"« vélos » est au pluriel : il faut un déterminant pluriel."},
      {q:"Quel déterminant va devant « soleil » ?",b:"le",f:["la","les","une"],e:"On dit « le soleil » : soleil est masculin."},
      {q:"Dans « mon chat noir », quel est le nom ?",b:"chat",f:["mon","noir"],e:"Le nom désigne l'animal ; « mon » est le déterminant."}]);
  },
  verbe(){
    if(alea(0,1)){const p=pioche(PHRASES_F);const mots=p.ph.replace(".","").split(" ").filter(x=>x!==p.verbe&&x.length>2);
      return qcm(`Quel est le verbe dans « ${p.ph} » ?`,p.verbe,melange(mots).slice(0,3),`Le verbe dit ce que fait le sujet ; il change si on dit « hier » ou « demain ».`);}
    const p=pioche(PHRASES_F);const autres=melange(PHRASES_F.filter(x=>x.inf!==p.inf)).slice(0,3).map(x=>x.inf);
    return qcm(`Quel est l'infinitif du verbe « ${p.verbe} » ?`,p.inf,autres,`On dit « il faut ${p.inf} » : c'est l'infinitif.`);
  },
  sujet(){const p=pioche(PHRASES_F);
    if(alea(0,1)){
      return qcm(`Quel est le sujet du verbe dans « ${p.ph} » ?`,p.sujet,[p.verbe,p.c],`On pose la question « Qui est-ce qui ${p.verbe} ? » : ${p.sujet}.`);}
    const pron=/^(Les|Léa et)/.test(p.sujet)?"Ils":["Ma sœur","La maîtresse"].includes(p.sujet)?"Elle":"Il";
    const autres=["Il","Elle","Ils","Nous"].filter(x=>x!==pron);
    return qcm(`Par quel pronom peut-on remplacer « ${p.sujet} » dans « ${p.ph} » ?`,pron,autres.slice(0,3),`« ${p.sujet} » peut être remplacé par « ${pron} ».`);
  },
  presenter(){const v=pioche(VERBES_ER),i=alea(0,5);
    if(alea(0,1)){const p=avecPron(i,v.pres[i]);return saisie(`Conjugue « ${v.inf} » au présent : ${p}___`,[v.pres[i],p+v.pres[i],(p+v.pres[i]).replace("' ","'")],`${p}${v.pres[i]}. Terminaisons : -e, -es, -e, -ons, -ez, -ent.`);}
    return qConj(v,"pres",i);},
  etreavoir(){return qConj(pioche([IRR.etre,IRR.avoir]),"pres",alea(0,5));},
  aller(){return qConj(IRR.aller,"pres",alea(0,5));},
  conjugpres(){return qConj(pioche([...VERBES_ER,IRR.etre,IRR.avoir,IRR.aller]),"pres",alea(0,5));},
  futur(){
    if(alea(0,2)===0){const v=pioche(VERBES_ER),i=alea(0,5);
      return qcm(`Quelle phrase est au futur ?`,`Demain, ${PRON[i]} ${v.fut[i]}.`,[`Aujourd'hui, ${PRON[i]} ${v.pres[i]}.`,`Hier, ${i===0?"j'ai":PRON[i]+" "+["ai","as","a","avons","avez","ont"][i]} ${v.pp}.`],`Le futur parle de ce qui va se passer : on entend « r » avant la terminaison.`);}
    return qConj(pioche([...VERBES_ER,IRR.etre,IRR.avoir,IRR.aller]),"fut",alea(0,5));},
  passecompose(){const v=pioche(VERBES_ER),i=alea(0,5);const aux=["ai","as","a","avons","avez","ont"][i];
    const p=i===0?"j'":PRON[i]+" ";
    const bonne=`${aux} ${v.pp}`;
    return qcm(`Hier, ${p}___ (${v.inf}, au passé composé)`,bonne,[v.pres[i],v.fut[i],`${aux} ${v.inf}`],`Passé composé = avoir au présent + ${v.pp} : ${p}${bonne}.`);},
  conjug(){return pioche([GF.conjugpres,GF.futur,GF.passecompose])();},
  pluriel(){
    if(alea(0,1)){const m=pioche(["chat","livre","ballon","arbre","crayon","lapin","stylo","camion"]);
      return saisie(`Écris au pluriel : « un ${m} »`,[`des ${m}s`,`${m}s`],`Au pluriel, on ajoute souvent un s : des ${m}s.`);}
    return deBanque([
      {q:"Quel est le pluriel de « un bateau » ?",b:"des bateaux",f:["des bateaus","des bateau"],e:"Les noms en -eau prennent un x au pluriel."},
      {q:"Quel est le pluriel de « un gâteau » ?",b:"des gâteaux",f:["des gâteaus","des gâteau"],e:"Les noms en -eau prennent un x au pluriel."},
      {q:"Quel est le pluriel de « une souris » ?",b:"des souris",f:["des souriss","des sourix"],e:"Un nom qui finit déjà par s ne change pas."},
      {q:"Quel est le pluriel de « un cheval » ?",b:"des chevaux",f:["des chevals","des chevale"],e:"Les noms en -al font souvent -aux : un cheval, des chevaux."},
      {q:"Quel est le pluriel de « une fleur » ?",b:"des fleurs",f:["des fleur","des fleurx"],e:"On ajoute un s au nom : des fleurs."},
      {q:"Quel est le pluriel de « un nez » ?",b:"des nez",f:["des nezs","des nés"],e:"Un nom qui finit par z ne change pas."},
      {q:"Quel est le pluriel de « un oiseau » ?",b:"des oiseaux",f:["des oiseaus","des oiseau"],e:"Les noms en -eau prennent un x au pluriel."}]);
  },
  feminin(){return deBanque([
      {q:"Un ami, une ___",b:"amie",f:["ami","amis"],e:"Au féminin, on ajoute souvent un e."},
      {q:"Un voisin, une ___",b:"voisine",f:["voisin","voisinne"],e:"Au féminin, on ajoute un e : voisine."},
      {q:"Un chien, une ___",b:"chienne",f:["chiene","chiens"],e:"Pour certains mots en -ien, on double le n : chienne."},
      {q:"Un lion, une ___",b:"lionne",f:["lione","lions"],e:"Pour lion, on double le n : lionne."},
      {q:"Un boulanger, une ___",b:"boulangère",f:["boulangere","boulangerre"],e:"-er devient -ère : boulangère."},
      {q:"Un cousin, une ___",b:"cousine",f:["cousin","cousinne"],e:"Au féminin, on ajoute un e : cousine."},
      {q:"Il est grand, elle est ___",b:"grande",f:["grand","grands"],e:"L'adjectif prend un e au féminin."},
      {q:"Il est petit, elle est ___",b:"petite",f:["petit","petits"],e:"L'adjectif prend un e au féminin."}]);},
  accordgn(){return deBanque([
      {q:"Complète : des fleurs ___ (joli)",b:"jolies",f:["joli","jolie","jolis"],e:"« fleurs » est féminin pluriel : jolie + s = jolies."},
      {q:"Complète : une ___ maison (grand)",b:"grande",f:["grand","grands","grandes"],e:"« maison » est féminin singulier : grand + e."},
      {q:"Complète : les ___ chats (petit)",b:"petits",f:["petit","petite","petites"],e:"« chats » est masculin pluriel : petit + s."},
      {q:"Complète : des ballons ___ (rouge)",b:"rouges",f:["rouge"],e:"« ballons » est au pluriel : l'adjectif prend un s."},
      {q:"Complète : une robe ___ (vert)",b:"verte",f:["vert","verts","vertes"],e:"« robe » est féminin singulier : vert + e."},
      {q:"Quel groupe de mots est bien accordé ?",b:"les petites souris",f:["les petite souris","la petites souris","les petit souris"],e:"Déterminant, nom et adjectif s'accordent ensemble."},
      {q:"Quel groupe de mots est bien accordé ?",b:"des chiens noirs",f:["des chien noirs","des chiens noir","un chiens noirs"],e:"Au pluriel, le nom et l'adjectif prennent un s."}]);},
  homoaa(){const h=pioche(HOMO.homoaa);return qcm(`Complète : ${h.ph}`,h.b,[h.f],h.e);},
  homoet(){const h=pioche(HOMO.homoet);return qcm(`Complète : ${h.ph}`,h.b,[h.f],h.e);},
  homoson(){const h=pioche(HOMO.homoson);return qcm(`Complète : ${h.ph}`,h.b,[h.f],h.e);},
  homophones(){return pioche([GF.homoaa,GF.homoet,GF.homoson])();},
  contraires(){return deBanque([
      {q:"Quel est le contraire de « grand » ?",b:"petit",f:["gros","haut","long"],e:"Grand / petit : ce sont des contraires."},
      {q:"Quel est le contraire de « chaud » ?",b:"froid",f:["tiède","brûlant","doux"],e:"Chaud / froid."},
      {q:"Quel est le contraire de « jour » ?",b:"nuit",f:["matin","soleil","midi"],e:"Jour / nuit."},
      {q:"Quel est le contraire de « monter » ?",b:"descendre",f:["grimper","sauter","marcher"],e:"Monter / descendre."},
      {q:"Quel est le contraire de « ouvert » ?",b:"fermé",f:["grand","cassé","rangé"],e:"Ouvert / fermé."},
      {q:"Quel est le contraire de « rapide » ?",b:"lent",f:["vif","pressé","fort"],e:"Rapide / lent."},
      {q:"Quel est le contraire de « content » ?",b:"triste",f:["joyeux","heureux","gai"],e:"Content / triste."},
      {q:"Quel est le contraire de « propre » ?",b:"sale",f:["net","lavé","neuf"],e:"Propre / sale."}]);},
  synonymes(){return deBanque([
      {q:"Quel mot veut dire presque la même chose que « content » ?",b:"joyeux",f:["triste","fâché","fatigué"],e:"Des mots de même sens sont des synonymes."},
      {q:"Quel mot veut dire presque la même chose que « rapide » ?",b:"vite",f:["lent","lourd","calme"],e:"Rapide et vite ont un sens proche."},
      {q:"Quel mot veut dire presque la même chose que « peur » ?",b:"frayeur",f:["joie","colère","courage"],e:"Peur, frayeur, crainte."},
      {q:"Quel mot veut dire presque la même chose que « joli » ?",b:"beau",f:["laid","vieux","petit"],e:"Joli et beau sont synonymes."},
      {q:"Quel mot veut dire presque la même chose que « auto » ?",b:"voiture",f:["vélo","avion","bateau"],e:"Une auto, c'est une voiture."},
      {q:"Quel mot veut dire presque la même chose que « commencer » ?",b:"débuter",f:["finir","arrêter","oublier"],e:"Commencer et débuter ont le même sens."},
      {q:"Quel mot veut dire presque la même chose que « crier » ?",b:"hurler",f:["chuchoter","dormir","manger"],e:"Crier et hurler : parler très fort."}]);},
  famillemots(){return deBanque([
      {q:"Quel mot est de la même famille que « dent » ?",b:"dentiste",f:["danse","dans","dindon"],e:"Dent, dentiste, dentifrice : même famille."},
      {q:"Quel mot est de la même famille que « lait » ?",b:"laitier",f:["laid","lit","laine"],e:"Lait, laitier, laiterie : même famille."},
      {q:"Quel mot est de la même famille que « jardin » ?",b:"jardinier",f:["jambe","jaune","jupe"],e:"Jardin, jardinier, jardiner : même famille."},
      {q:"Quel mot est de la même famille que « fleur » ?",b:"fleuriste",f:["flèche","flûte","fleuve"],e:"Fleur, fleuriste, fleurir : même famille."},
      {q:"Quel mot est de la même famille que « chant » ?",b:"chanteur",f:["champ","chance","chat"],e:"Chant, chanteur, chanson : même famille."},
      {q:"Quel mot est de la même famille que « terre » ?",b:"terrier",f:["tête","tarte","tirer"],e:"Terre, terrier, terrain : même famille."},
      {q:"Quel mot est de la même famille que « dessin » ?",b:"dessiner",f:["dessert","dessous","descendre"],e:"Dessin, dessiner, dessinateur : même famille."}]);},
  sons(){return exoSon(pioche(Object.keys(SONS)));},
  grammaire(){return pioche([GF.nom,GF.verbe,GF.sujet])();},
  bilan(){return pioche([GF.nom,GF.verbe,GF.sujet,GF.conjug,GF.homophones,GF.accordgn,GF.sons,GF.pluriel])();}
};
function exoFrancais(tag){
  if(SONS[tag])return exoSon(tag);
  const f=GF[tag]||GF.bilan;return f();
}

/* ---------- ANGLAIS (initiation) ---------- */
const VOC_EN=[
 {t:"couleurs",en:"red",fr:"rouge"},{t:"couleurs",en:"blue",fr:"bleu"},{t:"couleurs",en:"green",fr:"vert"},{t:"couleurs",en:"yellow",fr:"jaune"},{t:"couleurs",en:"black",fr:"noir"},{t:"couleurs",en:"white",fr:"blanc"},{t:"couleurs",en:"pink",fr:"rose"},{t:"couleurs",en:"brown",fr:"marron"},
 {t:"animaux",en:"a dog",fr:"un chien"},{t:"animaux",en:"a cat",fr:"un chat"},{t:"animaux",en:"a bird",fr:"un oiseau"},{t:"animaux",en:"a fish",fr:"un poisson"},{t:"animaux",en:"a rabbit",fr:"un lapin"},{t:"animaux",en:"a mouse",fr:"une souris"},{t:"animaux",en:"a horse",fr:"un cheval"},
 {t:"famille",en:"a mother",fr:"une mère"},{t:"famille",en:"a father",fr:"un père"},{t:"famille",en:"a brother",fr:"un frère"},{t:"famille",en:"a sister",fr:"une sœur"},{t:"famille",en:"a grandmother",fr:"une grand-mère"},{t:"famille",en:"a grandfather",fr:"un grand-père"},{t:"famille",en:"a baby",fr:"un bébé"},
 {t:"jours",en:"Monday",fr:"lundi"},{t:"jours",en:"Tuesday",fr:"mardi"},{t:"jours",en:"Wednesday",fr:"mercredi"},{t:"jours",en:"Thursday",fr:"jeudi"},{t:"jours",en:"Friday",fr:"vendredi"},{t:"jours",en:"Saturday",fr:"samedi"},{t:"jours",en:"Sunday",fr:"dimanche"},
 {t:"fruits",en:"an apple",fr:"une pomme"},{t:"fruits",en:"a banana",fr:"une banane"},{t:"fruits",en:"a strawberry",fr:"une fraise"},{t:"fruits",en:"a pear",fr:"une poire"},{t:"fruits",en:"a cherry",fr:"une cerise"},{t:"fruits",en:"a lemon",fr:"un citron"},
 {t:"noel",en:"a Christmas tree",fr:"un sapin de Noël"},{t:"noel",en:"a present",fr:"un cadeau"},{t:"noel",en:"Father Christmas",fr:"le Père Noël"},{t:"noel",en:"a star",fr:"une étoile"},{t:"noel",en:"snow",fr:"la neige"},{t:"noel",en:"a candle",fr:"une bougie"},
 {t:"corps",en:"a hand",fr:"une main"},{t:"corps",en:"a head",fr:"une tête"},{t:"corps",en:"a foot",fr:"un pied"},{t:"corps",en:"an eye",fr:"un œil"},{t:"corps",en:"a nose",fr:"un nez"},{t:"corps",en:"a mouth",fr:"une bouche"},{t:"corps",en:"an ear",fr:"une oreille"},
 {t:"vetements",en:"a hat",fr:"un chapeau"},{t:"vetements",en:"a coat",fr:"un manteau"},{t:"vetements",en:"shoes",fr:"des chaussures"},{t:"vetements",en:"a dress",fr:"une robe"},{t:"vetements",en:"socks",fr:"des chaussettes"},{t:"vetements",en:"a scarf",fr:"une écharpe"},
 {t:"meteo",en:"it's sunny",fr:"il y a du soleil"},{t:"meteo",en:"it's raining",fr:"il pleut"},{t:"meteo",en:"it's cold",fr:"il fait froid"},{t:"meteo",en:"it's hot",fr:"il fait chaud"},{t:"meteo",en:"it's snowing",fr:"il neige"},{t:"meteo",en:"it's windy",fr:"il y a du vent"},
 {t:"ecole",en:"a pen",fr:"un stylo"},{t:"ecole",en:"a book",fr:"un livre"},{t:"ecole",en:"a school bag",fr:"un cartable"},{t:"ecole",en:"a pencil",fr:"un crayon"},{t:"ecole",en:"a ruler",fr:"une règle"},{t:"ecole",en:"a rubber",fr:"une gomme"},
 {t:"maison",en:"a bedroom",fr:"une chambre"},{t:"maison",en:"the kitchen",fr:"la cuisine"},{t:"maison",en:"a garden",fr:"un jardin"},{t:"maison",en:"the bathroom",fr:"la salle de bains"},{t:"maison",en:"a door",fr:"une porte"},{t:"maison",en:"a window",fr:"une fenêtre"},
 {t:"ferme",en:"a cow",fr:"une vache"},{t:"ferme",en:"a sheep",fr:"un mouton"},{t:"ferme",en:"a pig",fr:"un cochon"},{t:"ferme",en:"a hen",fr:"une poule"},{t:"ferme",en:"a duck",fr:"un canard"},{t:"ferme",en:"a goat",fr:"une chèvre"},
 {t:"nourriture",en:"bread",fr:"du pain"},{t:"nourriture",en:"milk",fr:"du lait"},{t:"nourriture",en:"cheese",fr:"du fromage"},{t:"nourriture",en:"water",fr:"de l'eau"},{t:"nourriture",en:"an egg",fr:"un œuf"},{t:"nourriture",en:"chocolate",fr:"du chocolat"},
 {t:"jouets",en:"a ball",fr:"un ballon"},{t:"jouets",en:"a doll",fr:"une poupée"},{t:"jouets",en:"a teddy bear",fr:"un ours en peluche"},{t:"jouets",en:"a kite",fr:"un cerf-volant"},{t:"jouets",en:"a puzzle",fr:"un puzzle"},{t:"jouets",en:"a robot",fr:"un robot"}
];
const NOMBRES_EN=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"];
const GRAM_EN=[
 {t:"greetings",q:"Comment dit-on « bonjour » en anglais ?",b:"hello",f:["goodbye","please","thank you"],e:"Hello ! On peut aussi dire hi."},
 {t:"greetings",q:"Comment dit-on « au revoir » en anglais ?",b:"goodbye",f:["hello","yes","sorry"],e:"Goodbye, ou bye !"},
 {t:"greetings",q:"Que répond-on à « How are you? » ?",b:"I'm fine, thank you.",f:["My name is Tom.","I'm seven.","Goodbye."],e:"How are you? veut dire « Comment vas-tu ? »."},
 {t:"greetings",q:"Comment dit-on « je m'appelle Léa » ?",b:"My name is Léa.",f:["I am seven.","How are you?","Goodbye, Léa."],e:"My name is… veut dire « je m'appelle… »."},
 {t:"greetings",q:"Que veut dire « What's your name? » ?",b:"Comment t'appelles-tu ?",f:["Quel âge as-tu ?","Comment vas-tu ?","Où habites-tu ?"],e:"name = le nom, le prénom."},
 {t:"greetings",q:"Comment dit-on « merci » en anglais ?",b:"thank you",f:["please","hello","sorry"],e:"Thank you = merci ; please = s'il te plaît."},
 {t:"greetings",q:"Que veut dire « Good morning! » ?",b:"Bonjour ! (le matin)",f:["Bonne nuit !","Au revoir !","Joyeux anniversaire !"],e:"morning = le matin."},
 {t:"age",q:"Que veut dire « How old are you? » ?",b:"Quel âge as-tu ?",f:["Comment vas-tu ?","Comment t'appelles-tu ?","Quelle heure est-il ?"],e:"old = vieux, âgé."},
 {t:"age",q:"Comment dit-on « j'ai sept ans » ?",b:"I'm seven.",f:["I have seven.","My name is seven.","I like seven."],e:"En anglais, on dit « je suis sept » : I'm seven."},
 {t:"age",q:"Comment dit-on « j'ai huit ans » ?",b:"I'm eight.",f:["I'm eighteen.","I have eight.","I'm ten."],e:"eight = 8 ; I'm eight."},
 {t:"age",q:"Que veut dire « I'm six » ?",b:"j'ai six ans",f:["j'ai dix ans","je m'appelle Six","il est six heures"],e:"six = 6 ; I'm six = j'ai six ans."},
 {t:"age",q:"Que veut dire « Happy birthday! » ?",b:"Joyeux anniversaire !",f:["Bonne nuit !","Bonjour !","Joyeux Noël !"],e:"birthday = l'anniversaire."},
 {t:"age",q:"Que répond-on à « How old are you? » ?",b:"I'm seven.",f:["I'm fine.","My name is Tom.","It's red."],e:"On donne son âge : I'm seven."},
 {t:"couleurs",q:"What colour is a banana? (De quelle couleur est une banane ?)",b:"yellow",f:["blue","black","pink"],e:"yellow = jaune."},
 {t:"couleurs",q:"What colour is grass? (De quelle couleur est l'herbe ?)",b:"green",f:["red","white","pink"],e:"green = vert."},
 {t:"couleurs",q:"What colour is snow? (De quelle couleur est la neige ?)",b:"white",f:["black","green","red"],e:"white = blanc."},
 {t:"famille",q:"Que veut dire « This is my mum » ?",b:"voici ma maman",f:["voici mon papa","voici mon frère","voici ma sœur"],e:"mum = maman ; dad = papa."},
 {t:"famille",q:"Comment dit-on « papa » en anglais ?",b:"dad",f:["mum","sister","baby"],e:"dad = papa ; mum = maman."},
 {t:"animaux",q:"Comment dit-on « j'ai un chien » ?",b:"I've got a dog.",f:["I'm a dog.","It's a cat.","I like birds."],e:"I've got… = j'ai…"},
 {t:"animaux",q:"Que veut dire « It's a cat » ?",b:"c'est un chat",f:["j'ai un chat","j'aime les chats","le chat dort"],e:"It's… = c'est…"},
 {t:"meteo",q:"Que veut dire « What's the weather like? » ?",b:"Quel temps fait-il ?",f:["Quelle heure est-il ?","Quel âge as-tu ?","Comment vas-tu ?"],e:"weather = le temps qu'il fait."},
 {t:"nourriture",q:"Comment dit-on « j'aime le chocolat » ?",b:"I like chocolate.",f:["I don't like chocolate.","I'm chocolate.","It's chocolate."],e:"I like… = j'aime… ; I don't like… = je n'aime pas…"},
 {t:"nourriture",q:"Que veut dire « I don't like cheese » ?",b:"je n'aime pas le fromage",f:["j'aime le fromage","je mange du fromage","c'est du fromage"],e:"don't like = ne pas aimer."},
 {t:"ecole",q:"Que veut dire « Sit down, please » ?",b:"assieds-toi, s'il te plaît",f:["lève-toi, s'il te plaît","ouvre ton livre","viens ici"],e:"sit down = s'asseoir ; stand up = se lever."},
 {t:"ecole",q:"Que veut dire « Open your book » ?",b:"ouvre ton livre",f:["ferme ton livre","prends ton stylo","assieds-toi"],e:"open = ouvrir ; close = fermer."}
];
function exoAnglais(tag){
  if(tag==="nombres"){const n=alea(0,20);
    const proches=[...new Set([n+1,n-1,n+2,n+10,n-10].filter(x=>x>=0&&x<=20&&x!==n))];
    const f=melange(proches).slice(0,3);while(f.length<3){const x=alea(0,20);if(x!==n&&!f.includes(x))f.push(x);}
    if(alea(0,1))return qcm(`Comment dit-on « ${n} » en anglais ?`,NOMBRES_EN[n],f.map(x=>NOMBRES_EN[x]),`${n} se dit « ${NOMBRES_EN[n]} ».`);
    return qcm(`Que veut dire « ${NOMBRES_EN[n]} » ?`,String(n),f.map(String),`« ${NOMBRES_EN[n]} » veut dire ${n}.`);}
  const voc=VOC_EN.filter(x=>x.t===tag),gram=GRAM_EN.filter(x=>x.t===tag);
  if(voc.length&&(!gram.length||alea(1,3)<=2)){
    const m=pioche(voc);
    const autresMeme=melange(voc.filter(x=>x!==m)),autres=melange(VOC_EN.filter(x=>x.t!==tag));
    const pool=[...autresMeme,...autres].slice(0,3);
    if(alea(0,1))return qcm(`Que veut dire « ${m.en} » ?`,m.fr,pool.map(x=>x.fr),`« ${m.en} » veut dire « ${m.fr} ».`);
    return qcm(`Comment dit-on « ${m.fr} » en anglais ?`,m.en,pool.map(x=>x.en),`« ${m.fr} » se dit « ${m.en} ».`);
  }
  const x=pioche(gram.length?gram:GRAM_EN);return qcm(x.q,x.b,x.f,x.e);
}

/* ---------- QUESTIONNER LE MONDE ---------- */
const BANQUE_Q=[
 {t:"vivant",q:"Lequel n'est pas un être vivant ?",b:"un caillou",f:["un chat","un arbre","une fourmi"],e:"Un être vivant naît, grandit, se nourrit et meurt : le caillou, non."},
 {t:"vivant",q:"Lequel est un être vivant ?",b:"une fleur",f:["une chaise","un ballon","une voiture"],e:"La fleur naît, grandit, se nourrit et meurt : elle est vivante."},
 {t:"vivant",q:"Que fait un être vivant ?",b:"il naît, grandit et meurt",f:["il ne change jamais","il est fabriqué en usine","il marche avec des piles"],e:"Tous les êtres vivants naissent, grandissent, se nourrissent et meurent."},
 {t:"vivant",q:"Un arbre est-il vivant ?",b:"oui, il grandit et se nourrit",f:["non, il ne marche pas","non, il est en bois","non, il ne parle pas"],e:"Les végétaux sont vivants, même s'ils ne se déplacent pas."},
 {t:"vivant",q:"Lequel n'est pas vivant ?",b:"une table en bois",f:["un champignon","un oiseau","un poisson"],e:"La table ne grandit pas et ne se nourrit pas : elle n'est pas vivante."},
 {t:"vivant",q:"Les êtres vivants, ce sont :",b:"les animaux et les végétaux",f:["les pierres et l'eau","les jouets","les objets de la maison"],e:"Animaux (et l'être humain) et végétaux sont des êtres vivants."},
 {t:"vivant",q:"De quoi a besoin tout être vivant ?",b:"d'eau et de nourriture",f:["de jouets","de télévision","de rien"],e:"Sans eau ni nourriture, un être vivant meurt."},
 {t:"animaux",q:"De quoi un animal a-t-il besoin pour vivre ?",b:"d'eau, de nourriture et d'air",f:["de jouets","de sable seulement","de rien du tout"],e:"Ce sont les besoins de tous les animaux."},
 {t:"animaux",q:"Comment se déplace un poisson ?",b:"il nage",f:["il vole","il rampe","il galope"],e:"Le poisson nage grâce à ses nageoires."},
 {t:"animaux",q:"Comment se déplace un serpent ?",b:"il rampe",f:["il vole","il galope","il marche sur quatre pattes"],e:"Le serpent n'a pas de pattes : il rampe."},
 {t:"animaux",q:"Quel animal a des plumes ?",b:"la poule",f:["le chat","le poisson","l'escargot"],e:"Les oiseaux ont des plumes."},
 {t:"animaux",q:"Combien de pattes a un insecte ?",b:"6",f:["4","8","2"],e:"Fourmi, abeille, coccinelle : 6 pattes. L'araignée en a 8 : ce n'est pas un insecte."},
 {t:"animaux",q:"Où vit le poisson ?",b:"dans l'eau",f:["dans un nid","dans un terrier","dans les arbres"],e:"Le poisson respire dans l'eau."},
 {t:"animaux",q:"Quel animal porte une coquille sur son dos ?",b:"l'escargot",f:["le lapin","le chien","la souris"],e:"L'escargot se cache dans sa coquille."},
 {t:"animaux",q:"Quel animal vit dans un terrier ?",b:"le lapin",f:["le poisson","le pigeon","la vache"],e:"Le terrier est un trou creusé dans la terre."},
 {t:"alimentation",q:"Un animal qui ne mange que des plantes est :",b:"herbivore",f:["carnivore","omnivore"],e:"Herbivore : il mange de l'herbe et des plantes, comme la vache."},
 {t:"alimentation",q:"Que mange une vache ?",b:"de l'herbe",f:["de la viande","des poissons","des insectes"],e:"La vache est herbivore."},
 {t:"alimentation",q:"Que mange le lion ?",b:"de la viande",f:["de l'herbe","des fruits","des graines"],e:"Le lion est carnivore : il mange d'autres animaux."},
 {t:"alimentation",q:"Un animal qui mange de tout (plantes et viande) est :",b:"omnivore",f:["herbivore","carnivore"],e:"Omnivore : il mange de tout, comme l'être humain ou le cochon."},
 {t:"alimentation",q:"Le loup est :",b:"carnivore",f:["herbivore","une plante","un insecte"],e:"Le loup mange de la viande : il est carnivore."},
 {t:"alimentation",q:"Que mange le lapin ?",b:"de l'herbe et des carottes",f:["des souris","de la viande","des poissons"],e:"Le lapin est herbivore."},
 {t:"alimentation",q:"Herbe → lapin → renard. Qui mange le lapin ?",b:"le renard",f:["l'herbe","la vache","personne"],e:"La flèche va de celui qui est mangé vers celui qui mange."},
 {t:"alimentation",q:"Un animal qui mange de la viande est :",b:"carnivore",f:["herbivore","végétal"],e:"Carnivore : qui mange de la viande, comme le chat ou le loup."},
 {t:"cycle",q:"Qu'est-ce qui sort de l'œuf de la poule ?",b:"un poussin",f:["un chaton","un têtard","une chenille"],e:"Le poussin grandit et devient une poule ou un coq."},
 {t:"cycle",q:"Le têtard deviendra :",b:"une grenouille",f:["un poisson","un papillon","un escargot"],e:"Œuf, têtard, puis grenouille."},
 {t:"cycle",q:"La chenille deviendra :",b:"un papillon",f:["une abeille","une grenouille","un ver de terre"],e:"La chenille fabrique une chrysalide, puis devient papillon."},
 {t:"cycle",q:"Dans quel ordre vit le papillon ?",b:"œuf, chenille, chrysalide, papillon",f:["papillon, œuf, chrysalide, chenille","chenille, papillon, œuf, chrysalide","chrysalide, œuf, papillon, chenille"],e:"Le papillon pond des œufs ; il en sort des chenilles qui deviennent chrysalides puis papillons."},
 {t:"cycle",q:"Le petit du chat s'appelle :",b:"le chaton",f:["le chiot","le poulain","le veau"],e:"Chat → chaton ; chien → chiot."},
 {t:"cycle",q:"Le petit de la vache s'appelle :",b:"le veau",f:["l'agneau","le poulain","le chaton"],e:"Vache → veau ; brebis → agneau."},
 {t:"cycle",q:"Le petit du cheval s'appelle :",b:"le poulain",f:["le veau","le chaton","l'agneau"],e:"Cheval et jument → poulain."},
 {t:"cycle",q:"Quel animal pond des œufs ?",b:"la poule",f:["la vache","la chatte","la jument"],e:"Les oiseaux pondent des œufs."},
 {t:"cycle",q:"Le petit de la grenouille s'appelle :",b:"le têtard",f:["le poussin","le chiot","la chenille"],e:"Le têtard vit dans l'eau puis devient grenouille."},
 {t:"plantes",q:"Quelle partie de la plante puise l'eau dans le sol ?",b:"les racines",f:["les feuilles","la fleur","le fruit"],e:"Les racines sont dans la terre et boivent l'eau."},
 {t:"plantes",q:"De quoi une plante a-t-elle besoin pour pousser ?",b:"d'eau et de lumière",f:["de noir complet","de sel","de jouets"],e:"Sans eau ou sans lumière, la plante meurt."},
 {t:"plantes",q:"Une graine mise dans la terre humide va :",b:"germer et donner une petite plante",f:["devenir un caillou","devenir un animal","fondre"],e:"La graine germe : une racine puis une tige sortent."},
 {t:"plantes",q:"Quelle partie de la plante porte les feuilles ?",b:"la tige",f:["les racines","la graine","le sol"],e:"Racines, tige, feuilles, fleur."},
 {t:"plantes",q:"Que trouve-t-on dans un fruit ?",b:"des graines ou des pépins",f:["des racines","des feuilles","de la terre"],e:"Les graines donneront de nouvelles plantes."},
 {t:"plantes",q:"Le pépin de la pomme est :",b:"une graine",f:["une racine","une feuille","une fleur"],e:"Si on le plante, il peut donner un pommier."},
 {t:"plantes",q:"Que devient la fleur du cerisier ?",b:"une cerise",f:["une racine","une feuille","une branche"],e:"La fleur se transforme en fruit."},
 {t:"eau",q:"Quand l'eau gèle, elle devient :",b:"de la glace",f:["de la vapeur","du sable","du lait"],e:"L'eau gèle quand il fait très froid : elle devient solide."},
 {t:"eau",q:"Un glaçon posé au soleil :",b:"fond et devient de l'eau liquide",f:["devient plus gros","devient une pierre","ne change pas"],e:"La chaleur fait fondre la glace."},
 {t:"eau",q:"Quand l'eau bout dans la casserole, elle se transforme en :",b:"vapeur d'eau",f:["glace","neige","sable"],e:"L'eau chauffée très fort devient de la vapeur."},
 {t:"eau",q:"La neige, c'est de l'eau :",b:"solide",f:["liquide","chaude","en poudre de sable"],e:"La neige et la glace sont de l'eau solide."},
 {t:"eau",q:"Pour fabriquer des glaçons, on met l'eau :",b:"au congélateur",f:["au four","au soleil","sur le feu"],e:"Le froid du congélateur fait geler l'eau."},
 {t:"eau",q:"À quelle température l'eau gèle-t-elle ?",b:"0 °C",f:["100 °C","50 °C","20 °C"],e:"L'eau gèle à 0 degré et bout à 100 degrés."},
 {t:"eau",q:"D'où vient la pluie ?",b:"des nuages",f:["du soleil","des arbres","de la Lune"],e:"Les nuages sont faits de toutes petites gouttes d'eau."},
 {t:"eau",q:"L'eau du robinet est :",b:"liquide",f:["solide","gazeuse"],e:"Elle coule : c'est un liquide."},
 {t:"matiere",q:"Lequel est un liquide ?",b:"le lait",f:["le bois","la pierre","un clou"],e:"Un liquide coule et prend la forme du récipient."},
 {t:"matiere",q:"Lequel est un solide ?",b:"une pierre",f:["l'eau","le jus d'orange","l'huile"],e:"Un solide garde sa forme."},
 {t:"matiere",q:"Un liquide :",b:"prend la forme du récipient",f:["garde toujours sa forme","se coupe avec des ciseaux","ne coule jamais"],e:"Verse de l'eau dans un verre : elle prend la forme du verre."},
 {t:"matiere",q:"Un solide :",b:"garde sa forme",f:["coule","prend la forme du verre","s'écoule du robinet"],e:"Une pierre garde sa forme partout."},
 {t:"matiere",q:"Lequel est un liquide ?",b:"l'huile",f:["un morceau de sucre","une cuillère","la glace"],e:"L'huile coule : c'est un liquide."},
 {t:"matiere",q:"L'air existe-t-il ?",b:"oui, on le sent quand le vent souffle",f:["non, c'est du vide","non, il n'existe pas","seulement la nuit"],e:"L'air est invisible, mais il gonfle les ballons et fait bouger les feuilles."},
 {t:"matiere",q:"Lequel est un solide ?",b:"un glaçon",f:["le sirop","l'eau de la mer","le lait"],e:"Le glaçon est de l'eau solide."},
 {t:"objets",q:"À quoi servent des ciseaux ?",b:"à couper",f:["à coller","à mesurer","à chauffer"],e:"Les ciseaux ont deux lames qui coupent."},
 {t:"objets",q:"Quel objet fonctionne avec l'électricité ?",b:"une lampe",f:["une cuillère","une règle","un crayon"],e:"La lampe s'allume grâce à l'électricité."},
 {t:"objets",q:"Pourquoi ne faut-il jamais mettre les doigts dans une prise ?",b:"parce que l'électricité est dangereuse",f:["parce que ça salit","parce que la prise est fragile","parce que c'est trop haut"],e:"L'électricité de la prise peut gravement blesser."},
 {t:"objets",q:"Quel matériau vient des arbres ?",b:"le bois",f:["le plastique","le fer","le verre"],e:"On coupe les arbres pour avoir du bois."},
 {t:"objets",q:"Avec quel matériau fait-on une vitre transparente ?",b:"le verre",f:["le bois","le fer","le tissu"],e:"Le verre laisse passer la lumière."},
 {t:"objets",q:"Avec quoi fonctionne une lampe de poche ?",b:"avec des piles",f:["avec de l'eau","avec du sable","avec du papier"],e:"La pile donne l'électricité à la lampe."},
 {t:"objets",q:"Quel objet sert à mesurer la longueur d'un trait ?",b:"la règle",f:["la balance","l'horloge","les ciseaux"],e:"La règle est graduée en centimètres."},
 {t:"objets",q:"En quoi est faite une clé ?",b:"en métal",f:["en papier","en verre","en tissu"],e:"Le métal est solide et dur."},
 {t:"espace",q:"Quel est le contraire de « devant » ?",b:"derrière",f:["dessus","à gauche","loin"],e:"Devant / derrière."},
 {t:"espace",q:"Quel est le contraire de « à gauche » ?",b:"à droite",f:["en bas","devant","dedans"],e:"Gauche / droite."},
 {t:"espace",q:"Quel est le contraire de « au-dessus » ?",b:"au-dessous",f:["à côté","derrière","loin"],e:"Au-dessus / au-dessous."},
 {t:"espace",q:"Quel est le contraire de « près » ?",b:"loin",f:["devant","dedans","à droite"],e:"Près / loin."},
 {t:"espace",q:"Un plan de la classe montre la classe :",b:"vue du dessus",f:["vue de dessous","vue de très loin dans l'espace","en film"],e:"Sur un plan, on voit les choses comme un oiseau au-dessus."},
 {t:"espace",q:"À quoi sert un plan ?",b:"à se repérer et à trouver son chemin",f:["à lire l'heure","à peser les objets","à écouter de la musique"],e:"Le plan montre où sont les choses."},
 {t:"espace",q:"Sur une carte, où est le nord ?",b:"en haut",f:["en bas","à droite","à gauche"],e:"Sur les cartes, le nord est en haut."},
 {t:"espace",q:"Quelle est la capitale de la France ?",b:"Paris",f:["Lyon","Marseille","Londres"],e:"Paris est la capitale de la France."},
 {t:"espace",q:"Comment s'appelle la boule qui représente la Terre ?",b:"un globe",f:["une boussole","un calendrier","une horloge"],e:"Le globe montre les océans et les continents."},
 {t:"temps",q:"Combien y a-t-il de jours dans une semaine ?",b:"7",f:["5","10","12"],e:"Lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche."},
 {t:"temps",q:"Combien y a-t-il de mois dans une année ?",b:"12",f:["7","10","4"],e:"De janvier à décembre : 12 mois."},
 {t:"temps",q:"Quel jour vient après mardi ?",b:"mercredi",f:["lundi","jeudi","dimanche"],e:"Lundi, mardi, mercredi…"},
 {t:"temps",q:"Quel mois vient après mars ?",b:"avril",f:["février","mai","juin"],e:"Janvier, février, mars, avril, mai…"},
 {t:"temps",q:"Hier, c'était lundi. Aujourd'hui, c'est :",b:"mardi",f:["dimanche","mercredi","samedi"],e:"Le jour qui suit lundi, c'est mardi."},
 {t:"temps",q:"Demain, ce sera samedi. Aujourd'hui, c'est :",b:"vendredi",f:["dimanche","jeudi","lundi"],e:"Le jour avant samedi, c'est vendredi."},
 {t:"temps",q:"Quel est le premier mois de l'année ?",b:"janvier",f:["septembre","décembre","mars"],e:"L'année commence le 1er janvier."},
 {t:"temps",q:"Combien y a-t-il de saisons dans une année ?",b:"4",f:["2","7","12"],e:"Printemps, été, automne, hiver."},
 {t:"temps",q:"Quelle saison vient après l'été ?",b:"l'automne",f:["l'hiver","le printemps"],e:"Printemps, été, automne, hiver."},
 {t:"temps",q:"En quelle saison les feuilles des arbres tombent-elles ?",b:"en automne",f:["au printemps","en été"],e:"En automne, les feuilles jaunissent et tombent."},
 {t:"temps",q:"Une frise du temps sert à :",b:"ranger des événements dans l'ordre",f:["mesurer une longueur","peser un objet","dessiner une carte"],e:"On place les événements du plus ancien au plus récent."},
 {t:"temps",q:"Avant les voitures, on voyageait souvent :",b:"à cheval",f:["en avion","en fusée","en trottinette électrique"],e:"Autrefois, il n'y avait ni voiture ni avion."}
];

function exoMatiere(mat,sem){
  if(mat==="m")return exoMaths(sem.tm);
  if(mat==="f")return exoFrancais(sem.tf);
  if(mat==="a")return exoAnglais(sem.ta);
  return parTag(BANQUE_Q,sem.tq);
}
function seanceHorsLigne(mat,semaine){
  const sem=SEMAINES[semaine-1];semaineEnCours=semaine;
  if(mat==="rev")return [exoMaths("calcmental"),exoMatiere("m",sem),exoMatiere("f",sem),exoMatiere("m",sem),
                         exoMatiere("f",sem),exoMatiere("a",sem),exoMatiere("q",sem)];
  const q=[exoMaths("calcmental")]; // rituel de calcul mental
  for(let i=0;i<4;i++)q.push(exoMatiere(mat,sem));
  return q;
}


export const programme = { code: "ce1", nom: "CE1", rituel: "On commence par une question de calcul mental.", SEMAINES, JOURS, NOM_MAT, PERIODES, matiereDuJour, seanceHorsLigne };
