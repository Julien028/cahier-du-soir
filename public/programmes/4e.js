// Programme de 4e (cycle 4) : écrit le 08/10/2026 sur le modèle de 6e.js.
// C'est la seule source : on le modifie ici.

/* =========================================================
   1. LE PROGRAMME DE QUATRIÈME — 36 SEMAINES
   t = étiquettes de sélection des exercices :
       maths | français | anglais | sciences | histoire-géo
   ========================================================= */
const SEMAINES = [
{n:1,p:1,m:"Nombres relatifs : rappels, addition et soustraction",f:"Le récit : narrateur, point de vue, temps du récit",a:"Present simple et present continuous",s:"La matière : atomes et molécules",h:"Le XVIIIe siècle : expansions et commerce atlantique",t:"relatifs|recit|presents|atomes|expansions"},
{n:2,p:1,m:"Multiplication des nombres relatifs : la règle des signes",f:"Les fonctions dans la phrase : COD, COI, attribut, compléments",a:"Past simple : verbes réguliers et irréguliers",s:"Molécules et formules chimiques",h:"La traite atlantique et l'esclavage colonial",t:"relmult|fonctions|past|atomes|expansions"},
{n:3,p:1,m:"Division des relatifs et priorités opératoires",f:"La phrase complexe : juxtaposition, coordination, subordination",a:"Past continuous : décrire une scène passée",s:"Le système nerveux : de l'organe des sens au muscle",h:"L'Europe des Lumières",t:"reldiv|propositions|pastcont|nerveux|lumieres"},
{n:4,p:1,m:"Fractions : simplifier, comparer, égalités",f:"La proposition subordonnée relative",a:"Comparatifs et superlatifs",s:"Cerveau et hygiène de vie : sommeil, écrans, substances",h:"Géographie : l'urbanisation du monde",t:"fraccomp|relative|comparatif|nerveux|urbanisation"},
{n:5,p:1,m:"Additionner et soustraire des fractions",f:"Le subjonctif présent",a:"Vocabulaire : la ville et les transports",s:"Transformations chimiques : réactifs et produits",h:"La Révolution américaine",t:"fracadd|subjonctif|vocab|transfo|revam"},
{n:6,p:1,m:"Multiplier des fractions",f:"La nouvelle réaliste : Maupassant",a:"Must, have to, should : obligation et conseil",s:"Conservation de la masse et des atomes",h:"EMC : la justice et le droit",t:"fracmult|litt19|modaux|transfo|emc"},
{n:7,p:1,m:"Bilan de la période 1 : relatifs et fractions",f:"Bilan : homophones grammaticaux",a:"Bilan de la période 1",s:"Les combustions",h:"Bilan : le XVIIIe siècle",t:"calcmental|homophones|grammar|combustion|lumieres"},
{n:8,p:2,m:"Diviser par une fraction, inverse d'un nombre",f:"La subordonnée conjonctive complétive",a:"Present perfect : raconter ses expériences",s:"Électricité : tension et intensité",h:"La Révolution française : 1789",t:"fracdiv|conjonctive|presperfect|elec|revfr"},
{n:9,p:2,m:"Les puissances de 10",f:"Les subordonnées circonstancielles",a:"Present perfect ou past simple ?",s:"Puberté et appareils reproducteurs",h:"Villes mondiales, mégapoles et étalement urbain",t:"puiss10|circonstancielle|presperfect|repro|urbanisation"},
{n:10,p:2,m:"Puissances d'un nombre relatif",f:"Le conditionnel présent",a:"Parler du futur : will et be going to",s:"Lois des circuits en série et en dérivation",h:"De la monarchie à la République (1789-1799)",t:"puissances|conditionnel|futur|elec|revfr"},
{n:11,p:2,m:"La notation scientifique",f:"Discours direct et discours indirect",a:"Vocabulaire : voyages et vacances",s:"Fécondation, grossesse et naissance",h:"Napoléon Bonaparte et l'Empire",t:"notationsci|discours|vocab|repro|napoleon"},
{n:12,p:2,m:"Calcul littéral : expressions, réduire, remplacer une lettre",f:"Le récit fantastique",a:"Pronoms relatifs : who, which, where, whose",s:"La résistance et la loi d'Ohm",h:"Géographie : les mobilités humaines transnationales",t:"reduire|fantastique|relatifs|ohm|mobilites"},
{n:13,p:2,m:"Développer : la simple distributivité",f:"L'accord du participe passé",a:"Culture : fêtes et traditions anglophones",s:"Maîtriser sa reproduction : contraception et santé",h:"Migrations, réfugiés et tourisme international",t:"developper|accordpp|culture|repro|mobilites"},
{n:14,p:2,m:"Bilan de la période 2 : puissances et calcul littéral",f:"Bilan : la conjugaison des modes",a:"Bilan de la période 2",s:"Bilan : électricité",h:"EMC : les libertés et leurs limites",t:"calcmental|conjug|grammar|elec|emc"},
{n:15,p:3,m:"Développer : la double distributivité",f:"Victor Hugo, écrivain engagé",a:"If + present : exprimer une condition",s:"Génétique : chromosomes, gènes, ADN",h:"L'industrialisation de l'Europe au XIXe siècle",t:"double|litt19|ifclause|genetique|industrie"},
{n:16,p:3,m:"Factoriser une expression",f:"L'argumentation : thèse, arguments, exemples",a:"Much, many, a lot of, some, any",s:"Hérédité et diversité des individus",h:"Ouvriers, bourgeois et nouvelle société industrielle",t:"factoriser|argu|quantif|genetique|industrie"},
{n:17,p:3,m:"Équations du premier degré",f:"Les connecteurs logiques",a:"Vocabulaire : l'environnement",s:"Les séismes : faille, foyer, épicentre",h:"Conquêtes et empires coloniaux",t:"equations|connecteurs|vocab|geologie|colonies"},
{n:18,p:3,m:"Mettre un problème en équation",f:"Le théâtre : vocabulaire et genres",a:"Révision des modaux : must, can, could, should",s:"Volcans et tectonique",h:"Les sociétés coloniales",t:"equations|theatre|modaux|geologie|colonies"},
{n:19,p:3,m:"Proportionnalité : quatrième proportionnelle",f:"Vocabulaire : étymologie, préfixes, suffixes",a:"Raconter au passé : past simple et past continuous",s:"La tectonique des plaques",h:"Géographie : des espaces transformés par la mondialisation",t:"proportionnalite|vocab|pastcont|geologie|mondialisation"},
{n:20,p:3,m:"Vitesse, distance, durée",f:"Indicatif, subjonctif, conditionnel, impératif",a:"Comparer : révision",s:"Vitesse et mouvement",h:"Mers et océans : un monde maritimisé",t:"vitesse|modes|comparatif|vitesse|mondialisation"},
{n:21,p:3,m:"Bilan de la période 3 : calcul littéral et équations",f:"Bilan : la phrase complexe",a:"Bilan de la période 3",s:"Mouvements : référentiel et vitesse",h:"Bilan : l'Europe au XIXe siècle",t:"revlitteral|propositions|grammar|vitesse|industrie"},
{n:22,p:4,m:"Pourcentages : appliquer, augmenter, diminuer",f:"Les figures de style",a:"Present perfect : révision",s:"Combustions et sécurité : le monoxyde de carbone",h:"La IIIe République s'installe",t:"pourcentage|figures|presperfect|combustion|republique"},
{n:23,p:4,m:"Le théorème de Pythagore : calculer une longueur",f:"Accords difficiles : tout, même, leur, couleurs, nombres",a:"Futur : will et going to",s:"Technologie : chaînes d'information et d'énergie",h:"La place des femmes au XIXe siècle",t:"pythagore|accords|futur|techno|femmes"},
{n:24,p:4,m:"La réciproque du théorème de Pythagore",f:"Argumenter : convaincre et persuader",a:"Relatives et descriptions",s:"Technologie : programmer un objet",h:"Géographie : la France et l'Europe dans la mondialisation",t:"reciproque|argu|relatifs|techno|mondialisation"},
{n:25,p:4,m:"Thalès : agrandissement, réduction et configuration du triangle",f:"Le fantastique : Maupassant et Mérimée",a:"If clauses : révision",s:"Réseaux informatiques et objets connectés",h:"Culture et politique : République, école, laïcité",t:"thales|fantastique|ifclause|techno|republique"},
{n:26,p:4,m:"Le cosinus d'un angle aigu",f:"Le discours rapporté : révision",a:"Vocabulaire : santé et sport",s:"Atomes, molécules et transformations : révision",h:"EMC : égalité et lutte contre les discriminations",t:"cosinus|discours|vocab|transfo|emc"},
{n:27,p:4,m:"Translations et rotations",f:"Le théâtre au XIXe siècle : le drame romantique",a:"Culture : le monde anglophone",s:"Système nerveux : révision",h:"Femmes et hommes dans la société du XIXe siècle",t:"transformations|theatre|culture|nerveux|femmes"},
{n:28,p:4,m:"Bilan de la période 4 : géométrie",f:"Bilan : accords et homophones",a:"Bilan de la période 4",s:"Électricité : révision",h:"Bilan : la France au XIXe siècle",t:"revgeom|homophones|grammar|ohm|republique"},
{n:29,p:5,m:"Pyramides et cônes : volumes",f:"Révision : les temps et les modes",a:"Révision : les temps du passé",s:"Reproduction et génétique : révision",h:"Révision : l'urbanisation",t:"volumes|conjug|past|genetique|urbanisation"},
{n:30,p:5,m:"Statistiques : moyenne, médiane, étendue",f:"Révision : les subordonnées",a:"Révision : les quantifieurs",s:"Géologie : révision",h:"Révision : la Révolution française et l'Empire",t:"stats|circonstancielle|quantif|geologie|revfr"},
{n:31,p:5,m:"Probabilités",f:"Révision : la littérature du XIXe siècle",a:"Révision : les modaux",s:"Vitesse : révision",h:"Révision : la colonisation",t:"probas|litt19|modaux|vitesse|colonies"},
{n:32,p:5,m:"Algorithmique et programmation",f:"Révision : le vocabulaire",a:"Révision : le vocabulaire",s:"Technologie : révision",h:"Révision : les mobilités",t:"algo|vocab|vocab|techno|mobilites"},
{n:33,p:5,m:"Révision : relatifs, fractions, puissances",f:"Révision : le discours rapporté",a:"Révision : present perfect",s:"Combustions : révision",h:"EMC : s'engager",t:"revnombres|discours|presperfect|combustion|emc"},
{n:34,p:5,m:"Révision : calcul littéral et équations",f:"Révision : l'accord du participe passé",a:"Bilan niveau A2",s:"Atomes et molécules : révision",h:"Révision : l'industrialisation",t:"revlitteral|accordpp|grammar|atomes|industrie"},
{n:35,p:5,m:"Révision : Pythagore, Thalès, cosinus",f:"Révision : l'argumentation",a:"Culture : révision",s:"Système nerveux et santé : révision",h:"Révision : la mondialisation",t:"revgeom|argu|culture|nerveux|mondialisation"},
{n:36,p:5,m:"Bilan de quatrième et défis",f:"Bilan : figures de style et récit",a:"Jeux et défis en anglais",s:"Défis sciences",h:"Défis : les grands repères chronologiques",t:"calcmental|figures|vocab|elec|reperes"}
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
const NOM_MAT={m:"Mathématiques",f:"Français",a:"Anglais",s:"Sciences (SVT, physique-chimie, technologie)",h:"Histoire-géographie et EMC",rev:"Révision de la semaine"};
const PERIODES=["Période 1 — septembre à octobre","Période 2 — novembre à décembre","Période 3 — janvier à février","Période 4 — mars à avril","Période 5 — mai à juillet"];
function matiereDuJour(sem,jour){const j=JOURS[jour];if(j.mat==="sh")return (sem%2===1)?"s":"h";return j.mat;}

/* =========================================================
   2. OUTILS
   ========================================================= */
const alea=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const pioche=t=>t[Math.floor(Math.random()*t.length)];
const vg=x=>String(x).replace(".",",");
const nb=x=>vg(+(+x).toFixed(6));
function melange(t){const c=t.slice();for(let i=c.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[c[i],c[j]]=[c[j],c[i]];}return c;}
function qcm(enonce,bonne,fausses,expl){
  const vus=new Set([String(bonne)]),gardees=[];
  for(const x of fausses){const c=String(x);if(!vus.has(c)){vus.add(c);gardees.push(x);}}
  const choix=melange([bonne,...gardees.slice(0,5)]);
  return {type:"qcm",enonce,choix,reponse:choix.indexOf(bonne),explication:expl};
}
function saisie(enonce,reponses,expl){return {type:"saisie",enonce,reponse:[...new Set(reponses.map(String))],explication:expl};}
function qcmChiffres(enonce,bonne,expl){
  const b=Number(bonne),f=[];
  while(f.length<3){const x=alea(0,9);if(x!==b&&!f.includes(x))f.push(x);}
  return qcm(enonce,String(b),f.map(String),expl);
}
function parTag(banque,tag){const f=banque.filter(x=>x.t===tag);const b=pioche(f.length?f:banque);return qcm(b.q,b.b,b.f,b.e);}

// Nombres relatifs : affichage avec le vrai signe moins, réponses acceptées avec « - » ou « − ».
const M="−";
const fr=n=>n<0?M+(-n):String(n);
const pr=n=>n<0?"("+fr(n)+")":fr(n);
const rep=n=>[String(n),fr(n)];
const nz=(a,b)=>{let x;do{x=alea(a,b);}while(x===0);return x;};
const pgcd=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b];}return a;};
function fx(n,d){if(d<0){n=-n;d=-d;}const g=pgcd(n,d)||1;n/=g;d/=g;return d===1?fr(n):`${fr(n)}/${d}`;}
function finie(d){while(d%2===0)d/=2;while(d%5===0)d/=5;return d===1;}
function fxRep(n,d){
  const s=fx(n,d),r=[s.replace(M,"-"),s,`${n}/${d}`.replace(M,"-")];
  const g=pgcd(n,d)||1;if(finie(Math.abs(d/g)))r.push(nb(n/d));
  return r;
}
const SUP={"0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹","-":"⁻"};
const sup=n=>String(n).split("").map(c=>SUP[c]).join("");
const grp=s=>s.replace(/\B(?=(\d{3})+(?!\d))/g," ");
// D (chiffres) × 10^s écrit en décimal, sans espaces
function decimale(D,s){
  if(s>=0)return D+"0".repeat(s);
  const k=-s;let x=D;if(x.length<=k)x="0".repeat(k-x.length+1)+x;
  const ent=x.slice(0,x.length-k),fra=x.slice(x.length-k).replace(/0+$/,"");
  return fra?ent+","+fra:ent;
}
const grpDec=s=>{const [e,d]=s.split(",");return grp(e)+(d?","+d:"");};
// Écritures littérales
function terme(c,v,premier){
  if(c===0)return "";
  const a=Math.abs(c),corps=v?(a===1?v:a+v):String(a);
  if(premier)return (c<0?M:"")+corps;
  return (c<0?" − ":" + ")+corps;
}
function poly(cs){let s="";for(const [c,v] of cs){if(c===0)continue;s+=terme(c,v,s==="");}return s||"0";}
const PRENOMS=[["Lina","f"],["Yanis","m"],["Chloé","f"],["Malik","m"],["Inès","f"],["Hugo","m"],["Jade","f"],["Noah","m"],["Sofia","f"],["Adam","m"],["Léna","f"],["Ethan","m"],["Maëlys","f"],["Rayan","m"],["Zoé","f"],["Timéo","m"],["Aya","f"],["Louis","m"],["Nora","f"],["Sacha","m"]];
function pers(){const [n,g]=pioche(PRENOMS);return {n,il:g==="f"?"elle":"il",Il:g==="f"?"Elle":"Il"};}
const TRI=["ABC","DEF","MNP","RST","IJK","EFG","KLM","UVW"];
const TRIPLETS=[[3,4,5],[5,12,13],[8,15,17],[7,24,25],[20,21,29],[9,40,41]];

/* =========================================================
   3. LA BANQUE D'EXERCICES (fonctionne sans connexion)
   ========================================================= */
/* ---------- MATHÉMATIQUES ---------- */
const GM={
  relatifs(){
    const a=nz(-20,20),b=nz(-20,20);
    if(alea(0,1)){const r=a+b;
      const ex=(a>0)===(b>0)?`Même signe : on additionne les distances à zéro et on garde le signe. ${fr(a)} + ${pr(b)} = ${fr(r)}.`
        :`Signes contraires : on soustrait les distances à zéro et on garde le signe du nombre le plus éloigné de zéro. ${fr(a)} + ${pr(b)} = ${fr(r)}.`;
      return saisie(`Calcule : ${fr(a)} + ${pr(b)}`,rep(r),ex);}
    const r=a-b;
    return saisie(`Calcule : ${fr(a)} − ${pr(b)}`,rep(r),`Soustraire un nombre, c'est ajouter son opposé : ${fr(a)} − ${pr(b)} = ${fr(a)} + ${pr(-b)} = ${fr(r)}.`);
  },
  relmult(){
    const t=alea(1,3);
    if(t===1){let a=nz(-12,12),b=nz(-12,12);if(a>0&&b>0)a=-a;const r=a*b;
      return saisie(`Calcule : ${fr(a)} × ${pr(b)}`,rep(r),`Règle des signes : ${(a<0)===(b<0)?"deux facteurs de même signe donnent un produit positif":"deux facteurs de signes contraires donnent un produit négatif"}. ${fr(a)} × ${pr(b)} = ${fr(r)}.`);}
    if(t===2){const k=alea(3,5),f=[];for(let i=0;i<k;i++)f.push(nz(-9,9));const neg=f.filter(x=>x<0).length;
      const signe=neg%2===0?"positif":"négatif";
      return qcm(`Quel est le signe du produit ${f.map(pr).join(" × ")} ?`,signe,[signe==="positif"?"négatif":"positif","nul"],`On compte les facteurs négatifs : il y en a ${neg}. Un nombre ${neg%2===0?"pair":"impair"} de facteurs négatifs donne un produit ${signe}.`);}
    const a=nz(-9,9),b=nz(-9,9);
    return saisie(`Complète : ${pr(a)} × … = ${fr(a*b)}`,rep(b),`On cherche le nombre qui, multiplié par ${pr(a)}, donne ${fr(a*b)} : c'est ${fr(b)}, car ${pr(a)} × ${pr(b)} = ${fr(a*b)}.`);
  },
  reldiv(){
    const t=alea(1,3);
    if(t===1){const q=nz(-12,12);let b=nz(-9,9);if(Math.abs(b)===1)b*=alea(2,9);const a=q*b;
      return saisie(`Calcule : ${fr(a)} ÷ ${pr(b)}`,rep(q),`Même règle des signes que pour la multiplication. ${fr(a)} ÷ ${pr(b)} = ${fr(q)}, car ${pr(b)} × ${pr(q)} = ${fr(a)}.`);}
    const a=nz(-9,9),b=nz(-9,9),c=nz(-9,9);
    if(t===2){const r=a+b*c;
      return saisie(`Calcule : ${fr(a)} + ${pr(b)} × ${pr(c)}`,rep(r),`La multiplication est prioritaire : ${pr(b)} × ${pr(c)} = ${fr(b*c)}, puis ${fr(a)} + ${pr(b*c)} = ${fr(r)}.`);}
    const r=(a-b)*c;
    return saisie(`Calcule : (${fr(a)} − ${pr(b)}) × ${pr(c)}`,rep(r),`On calcule d'abord la parenthèse : ${fr(a)} − ${pr(b)} = ${fr(a-b)}, puis ${pr(a-b)} × ${pr(c)} = ${fr(r)}.`);
  },
  fraccomp(){
    const t=alea(1,3);
    const irr=()=>{let p,q;do{q=alea(2,9);p=alea(1,2*q);}while(pgcd(p,q)!==1);return [p,q];};
    if(t===1){const [p,q]=irr(),k=alea(2,9);
      return saisie(`Simplifie au maximum la fraction ${p*k}/${q*k}`,[`${p}/${q}`],`${p*k} et ${q*k} sont tous les deux divisibles par ${k} : ${p*k}/${q*k} = ${p}/${q}, qui ne se simplifie plus.`);}
    if(t===2){let a,b,c,d;do{[a,b]=irr();[c,d]=irr();}while(a*d===c*b||b===d);
      const g=a*d>c*b?`${a}/${b}`:`${c}/${d}`,p=a*d>c*b?`${c}/${d}`:`${a}/${b}`;
      return qcm(`Quelle est la plus grande fraction : ${a}/${b} ou ${c}/${d} ?`,g,[p],`On les écrit avec le même dénominateur ${b*d} : ${a}/${b} = ${a*d}/${b*d} et ${c}/${d} = ${c*b}/${b*d}. On compare les numérateurs.`);}
    const [p,q]=irr(),k=alea(2,6);
    const cand=[[p+k,q+k],[p*k,q+k],[p+k,q*k],[p*k,q],[p,q*k]].filter(([n,d])=>n*q!==p*d).map(([n,d])=>`${n}/${d}`);
    return qcm(`Quelle fraction est égale à ${p}/${q} ?`,`${p*k}/${q*k}`,melange(cand).slice(0,3),`On multiplie le numérateur et le dénominateur par le même nombre (${k}) : ${p}/${q} = ${p*k}/${q*k}.`);
  },
  fracadd(){
    if(alea(0,3)===0){const n=alea(1,5);let a,b;do{b=alea(2,9);a=alea(1,b-1);}while(pgcd(a,b)!==1);
      return saisie(`Calcule et écris sous forme d'une fraction : ${n} + ${a}/${b}`,fxRep(n*b+a,b),`${n} = ${n*b}/${b}, donc ${n} + ${a}/${b} = ${n*b}/${b} + ${a}/${b} = ${n*b+a}/${b}.`);}
    const d1=alea(2,7),k=alea(2,4),d2=d1*k;
    let a,b;do{a=alea(1,2*d1);}while(pgcd(a,d1)!==1);do{b=alea(1,2*d2);}while(pgcd(b,d2)!==1);
    let plus=alea(0,1);if(!plus&&a*k-b<=0)plus=1;
    const num=plus?a*k+b:a*k-b,s=fx(num,d2);
    return saisie(`Calcule : ${a}/${d1} ${plus?"+":"−"} ${b}/${d2}`,fxRep(num,d2),`On met au même dénominateur : ${a}/${d1} = ${a*k}/${d2}. Puis ${a*k} ${plus?"+":"−"} ${b} = ${num}, donc ${num}/${d2}${s!==`${num}/${d2}`?` = ${s}`:""}.`);
  },
  fracmult(){
    if(alea(0,2)===0){const P=pers(),d=alea(2,9),n=alea(1,d-1),q=d*alea(2,15);
      return saisie(`${P.n} a ${q} €. ${P.Il} dépense les ${n}/${d} de cette somme. Combien dépense-t-${P.il}, en € ?`,[String(q*n/d)],`${n}/${d} de ${q} = ${q} ÷ ${d} × ${n} = ${q/d} × ${n} = ${q*n/d} €.`);}
    const a=alea(1,9),b=alea(2,9),c=alea(1,9),d=alea(2,9),neg=alea(0,3)===0;
    const brut=`${neg?M:""}${a*c}/${b*d}`,s=fx(neg?-a*c:a*c,b*d);
    return saisie(`Calcule : ${neg?M:""}${a}/${b} × ${c}/${d}`,fxRep(neg?-a*c:a*c,b*d),`On multiplie les numérateurs entre eux et les dénominateurs entre eux : ${brut}${s!==brut?`, puis on simplifie : ${s}`:""}.`);
  },
  fracdiv(){
    const t=alea(1,3);
    let a,b;do{a=alea(1,9);b=alea(2,9);}while(pgcd(a,b)!==1);
    if(t===1)return qcm(`Quel est l'inverse de ${a}/${b} ?`,a===1?String(b):`${b}/${a}`,[`${M}${a}/${b}`,`${a}/${b}`,`${a}/${b*2}`],`L'inverse de ${a}/${b} est ${b}/${a}, car ${a}/${b} × ${b}/${a} = 1. Ne pas confondre avec l'opposé ${M}${a}/${b}.`);
    if(t===2){const c=alea(1,9),d=alea(2,9);
      return saisie(`Calcule : ${a}/${b} ÷ ${c}/${d}`,fxRep(a*d,b*c),`Diviser par ${c}/${d}, c'est multiplier par son inverse ${d}/${c} : ${a}/${b} × ${d}/${c} = ${a*d}/${b*c}${fx(a*d,b*c)!==`${a*d}/${b*c}`?` = ${fx(a*d,b*c)}`:""}.`);}
    const n=alea(2,6);
    return saisie(`Calcule : ${a}/${b} ÷ ${n}`,fxRep(a,b*n),`Diviser par ${n}, c'est multiplier par 1/${n} : ${a}/${b} × 1/${n} = ${a}/${b*n}${fx(a,b*n)!==`${a}/${b*n}`?` = ${fx(a,b*n)}`:""}.`);
  },
  puiss10(){
    const t=alea(1,5);
    if(t===1){const n=alea(2,8);return saisie(`Écris 10${sup(n)} sous forme d'un nombre entier`,[String(10**n)],`10${sup(n)}, c'est 1 suivi de ${n} zéros : ${grp(String(10**n))}.`);}
    if(t===2){const n=alea(1,5),v=decimale("1",-n);return saisie(`Écris 10${sup(-n)} sous forme décimale`,[v,v.replace(",",".")],`10${sup(-n)} = 1 ÷ 10${sup(n)} : le chiffre 1 est au ${n}${n===1?"er":"e"} rang après la virgule : ${v}.`);}
    const a=alea(-4,7),b=alea(-4,7);
    if(t===3)return qcm(`Écris sous la forme d'une seule puissance de 10 : 10${sup(a)} × 10${sup(b)}`,`10${sup(a+b)}`,[`10${sup(a*b)}`,`10${sup(a-b)}`,`100${sup(a+b)}`],`Pour multiplier des puissances de 10, on additionne les exposants : ${fr(a)} + ${pr(b)} = ${fr(a+b)}.`);
    if(t===4)return qcm(`Écris sous la forme d'une seule puissance de 10 : 10${sup(a)} ÷ 10${sup(b)}`,`10${sup(a-b)}`,[`10${sup(a+b)}`,`1${sup(a-b)}`,`10${sup(b-a)}`],`Pour diviser des puissances de 10, on soustrait les exposants : ${fr(a)} − ${pr(b)} = ${fr(a-b)}.`);
    let D;do{D=String(alea(11,999));}while(D.endsWith("0"));
    const n=pioche([-3,-2,-1,1,2,3,4]),x=decimale(D,-1),r=decimale(D,n-1);
    return saisie(`Calcule : ${x} × 10${sup(n)}`,[r,r.replace(",",".")],`Multiplier par 10${sup(n)}, c'est décaler la virgule de ${Math.abs(n)} rang${Math.abs(n)>1?"s":""} vers la ${n>0?"droite":"gauche"} : ${grpDec(r)}.`);
  },
  puissances(){
    const t=alea(1,4);
    if(t===1){const a=alea(2,5),n=alea(2,a<=3?5:3);return saisie(`Calcule : ${a}${sup(n)}`,[String(a**n)],`${a}${sup(n)} = ${Array(n).fill(a).join(" × ")} = ${a**n}.`);}
    if(t===2){const a=alea(2,6),n=alea(2,3),par=alea(0,1),r=par?(-a)**n:-(a**n);
      return saisie(`Calcule : ${par?`(${M}${a})`:`${M}${a}`}${sup(n)}`,rep(r),par?`Le signe est dans la parenthèse : on multiplie ${n} fois (${M}${a}). ${n%2===0?"Exposant pair : résultat positif":"Exposant impair : résultat négatif"}, ${fr(r)}.`:`Sans parenthèses, l'exposant ne porte que sur ${a} : ${M}${a}${sup(n)} = ${M}(${a}${sup(n)}) = ${fr(r)}.`);}
    if(t===3){const b=alea(2,7),m=alea(2,6),n=alea(2,6);
      return qcm(`Écris sous la forme d'une seule puissance : ${b}${sup(m)} × ${b}${sup(n)}`,`${b}${sup(m+n)}`,[`${b}${sup(m*n)}`,`${b*b}${sup(m+n)}`,`${b*b}${sup(m*n)}`],`Même nombre ${b} : on additionne les exposants, ${m} + ${n} = ${m+n}.`);}
    const a=alea(2,9),k=alea(3,6);
    return qcm(`Comment s'écrit ${Array(k).fill(a).join(" × ")} ?`,`${a}${sup(k)}`,[`${k}${sup(a)}`,`${a} × ${k}`,String(a*k)],`Le nombre ${a} est multiplié ${k} fois par lui-même : ${a}${sup(k)} (« ${a} exposant ${k} »).`);
  },
  notationsci(){
    let D;do{D=String(alea(11,999));}while(D.endsWith("0"));
    const e=pioche([-6,-5,-4,-3,-2,-1,2,3,4,5,6,7,8]);
    const m=D[0]+","+D.slice(1),val=decimale(D,e-(D.length-1));
    if(alea(0,2)===0)return saisie(`Écris en écriture décimale : ${m} × 10${sup(e)}`,[val,val.replace(",",".")],`Multiplier par 10${sup(e)}, c'est décaler la virgule de ${Math.abs(e)} rang${Math.abs(e)>1?"s":""} vers la ${e>0?"droite":"gauche"} : ${grpDec(val)}.`);
    const non=`${D.slice(0,2)}${D.length>2?","+D.slice(2):""} × 10${sup(e-1)}`;
    return qcm(`Quelle est l'écriture scientifique de ${grpDec(val)} ?`,`${m} × 10${sup(e)}`,[`${m} × 10${sup(e+1)}`,`${m} × 10${sup(-e)}`,non],`Écriture scientifique : a × 10ⁿ avec 1 ≤ a < 10. On place la virgule après le premier chiffre non nul (${m}), puis on compte le décalage : n = ${fr(e)}.`);
  },
  reduire(){
    const t=alea(1,4);
    if(t===1){let a,b,c,d;do{a=nz(-9,9);b=nz(-9,9);c=nz(-9,9);d=nz(-9,9);}while(a+b===0||c+d===0);
      const e=poly([[a,"x"],[c,""]])+terme(b,"x",false)+terme(d,"",false);
      return qcm(`Réduis l'expression : ${e}`,poly([[a+b,"x"],[c+d,""]]),[poly([[a+b+c+d,"x"]]),poly([[a+b,"x²"],[c+d,""]]),poly([[a-b,"x"],[c+d,""]]),poly([[a+b,"x"],[c-d,""]])],`On regroupe les termes en x : ${fr(a)} ${b<0?"−":"+"} ${Math.abs(b)} = ${fr(a+b)}, puis les nombres : ${fr(c)} ${d<0?"−":"+"} ${Math.abs(d)} = ${fr(c+d)}.`);}
    if(t===2){const a=nz(-6,6),b=nz(-9,9),k=nz(-5,5),carre=alea(0,1);
      const v=carre?a*k*k+b:a*k+b;
      const e=poly([[a,carre?"x²":"x"],[b,""]]);
      const det=`${fr(a)} × ${pr(k)}${carre?"²":""} ${b<0?"−":"+"} ${Math.abs(b)}`;
      return saisie(`Calcule la valeur de ${e} pour x = ${fr(k)}`,rep(v),`On remplace x par ${pr(k)} : ${det} = ${carre?`${fr(a)} × ${k*k} ${b<0?"−":"+"} ${Math.abs(b)}`:`${fr(a*k)} ${b<0?"−":"+"} ${Math.abs(b)}`} = ${fr(v)}.`);}
    if(t===3){const a=alea(2,9),b=alea(2,9);
      return qcm(`Réduis : ${a}x × ${b}x`,`${a*b}x²`,[`${a+b}x`,`${a*b}x`,`${a+b}x²`],`On multiplie les nombres (${a} × ${b} = ${a*b}) et les lettres (x × x = x²).`);}
    const L=pioche([["x × x × x","x³",["3x","x + 3","3 + x"],"x est multiplié 3 fois par lui-même : x³."],["x + x + x","3x",["x³","x + 3","3x²"],"On ajoute trois fois x : 3x."],["2x × 3","6x",["5x","6x²","23x"],"2 × 3 = 6, donc 6x."],["x × x","x²",["2x","x + 2","2"],"x × x se note x² (« x au carré »)."],["3 × x × 4","12x",["7x","12x²","34x"],"3 × 4 = 12, donc 12x."],["5x − x","4x",["5","4","5x²"],"5x − 1x = 4x."]]);
    return qcm(`Écris plus simplement : ${L[0]}`,L[1],L[2],L[3]);
  },
  developper(){
    let k=nz(-9,9);if(Math.abs(k)===1)k*=alea(2,9);const a=alea(1,6),b=nz(-9,9);
    if(alea(0,3)===0){const c=nz(-9,9);let kk=Math.abs(k);if(kk*a+c===0)return GM.developper();
      return qcm(`Développe et réduis : ${kk}(${poly([[a,"x"],[b,""]])})${terme(c,"x",false)}`,poly([[kk*a+c,"x"],[kk*b,""]]),[poly([[kk*a,"x"],[b+c,""]]),poly([[kk*a+c,"x"],[b,""]]),poly([[a+c,"x"],[kk*b,""]])],`On développe : ${kk}(${poly([[a,"x"],[b,""]])}) = ${poly([[kk*a,"x"],[kk*b,""]])}, puis on regroupe les termes en x : ${poly([[kk*a+c,"x"],[kk*b,""]])}.`);}
    const kT=k<0?fr(k):String(k);
    return qcm(`Développe : ${kT}(${poly([[a,"x"],[b,""]])})`,poly([[k*a,"x"],[k*b,""]]),[poly([[k*a,"x"],[b,""]]),poly([[a,"x"],[k*b,""]]),poly([[k*a,"x"],[-k*b,""]])],`On multiplie ${kT} par chaque terme de la parenthèse : ${pr(k)} × ${a===1?"x":a+"x"} = ${terme(k*a,"x",true)} et ${pr(k)} × ${pr(b)} = ${fr(k*b)}. Attention aux signes !`);
  },
  double(){
    const a=alea(1,3),c=alea(1,3),b=nz(-7,7),d=nz(-7,7);
    const res=poly([[a*c,"x²"],[a*d+b*c,"x"],[b*d,""]]);
    return qcm(`Développe et réduis : (${poly([[a,"x"],[b,""]])})(${poly([[c,"x"],[d,""]])})`,res,[poly([[a*c,"x²"],[b*d,""]]),poly([[a*c,"x²"],[a*d+b*c,"x"],[-b*d,""]]),poly([[a+c,"x"],[b+d,""]]),poly([[a*c,"x²"],[-(a*d+b*c),"x"],[b*d,""]])],`On multiplie chaque terme du premier facteur par chaque terme du second : ${terme(a*c,"x²",true)}, ${terme(a*d,"x",true)}, ${terme(b*c,"x",true)} et ${fr(b*d)}. Puis on regroupe les termes en x : ${res}.`);
  },
  factoriser(){
    const t=alea(1,3);
    if(t===1){const k=alea(2,9),b=nz(-9,9);
      return qcm(`Factorise : ${poly([[k,"x"],[k*b,""]])}`,`${k}(${poly([[1,"x"],[b,""]])})`,[`${k}(${poly([[1,"x"],[k*b,""]])})`,`${k}(${poly([[1,"x"],[-b,""]])})`,`${k}(${poly([[k,"x"],[b,""]])})`],`${k} est un facteur commun : ${k} × x ${b<0?"−":"+"} ${k} × ${Math.abs(b)}. On le met devant la parenthèse : ${k}(${poly([[1,"x"],[b,""]])}). Vérifie en redéveloppant.`);}
    if(t===2){const a=alea(2,9),b=nz(-9,9);
      return qcm(`Factorise en mettant x en facteur : ${poly([[a,"x²"],[b,"x"]])}`,`x(${poly([[a,"x"],[b,""]])})`,[`x(${poly([[a,"x²"],[b,""]])})`,`${a}x(${poly([[1,"x"],[b,""]])})`,`x(${poly([[a,""],[b,"x"]])})`],`x est un facteur commun : ${a}x² = x × ${a}x et ${fr(b)}x = x × ${pr(b)}. Donc x(${poly([[a,"x"],[b,""]])}).`);}
    const k=pioche([2,3,5,7]);let m,n;do{m=alea(1,9);n=alea(2,9);}while(m===n||pgcd(m,n)!==1||pgcd(m,k)!==1||pgcd(n,k)!==1);
    return qcm(`Quel est le plus grand nombre entier qui divise à la fois ${k*m} et ${k*n} (pour factoriser ${k*m}x + ${k*n}) ?`,String(k),[String(k*m),String(k*n),String(k*m*n)].concat(m>1?[String(m)]:[]).concat([String(n)]),`${k*m} = ${k} × ${m} et ${k*n} = ${k} × ${n} : le facteur commun est ${k}, donc ${k*m}x + ${k*n} = ${k}(${m===1?"":m}x + ${n}).`);
  },
  equations(){
    const t=alea(1,5);
    if(t===1){const x=alea(-9,9);let a=nz(-9,9);if(Math.abs(a)===1)a*=alea(2,5);const b=nz(-15,15),c=a*x+b;
      return saisie(`Résous l'équation : ${poly([[a,"x"],[b,""]])} = ${fr(c)}`,rep(x),`On ${b>0?"soustrait":"ajoute"} ${Math.abs(b)} des deux côtés : ${fr(a)}x = ${fr(c-b)}, puis on divise par ${pr(a)} : x = ${fr(x)}.`);}
    if(t===2){const x=alea(-6,6);let a,c;do{a=nz(-9,9);c=nz(-9,9);}while(a===c);const b=nz(-9,9),d=a*x+b-c*x;
      return saisie(`Résous l'équation : ${poly([[a,"x"],[b,""]])} = ${poly([[c,"x"],[d,""]])}`,rep(x),`On regroupe les x d'un côté et les nombres de l'autre : (${fr(a)} − ${pr(c)})x = ${fr(d)} − ${pr(b)}, soit ${fr(a-c)}x = ${fr(d-b)}, donc x = ${fr(x)}.`);}
    if(t===3){const P=pers(),a=alea(2,9),b=alea(1,20),x=alea(1,20);
      return saisie(`${P.n} pense à un nombre. ${P.Il} le multiplie par ${a}, puis ajoute ${b}. ${P.Il} obtient ${a*x+b}. Quel est ce nombre ?`,[String(x)],`On note x le nombre : ${a}x + ${b} = ${a*x+b}, donc ${a}x = ${a*x}, et x = ${x}.`);}
    if(t===4){const l=alea(2,15),k=alea(1,9),P=4*l+2*k;
      return saisie(`La longueur d'un rectangle dépasse sa largeur de ${k} cm. Son périmètre est ${P} cm. Quelle est sa largeur, en cm ?`,[String(l)],`On note ℓ la largeur : 2 × (ℓ + ℓ + ${k}) = ${P}, soit 4ℓ + ${2*k} = ${P}, donc 4ℓ = ${P-2*k} et ℓ = ${l} cm.`);}
    const x=alea(-5,5),a=nz(-6,6),b=nz(-9,9),c=a*x+b,essai=alea(0,1)?x:x+pioche([-1,1]),ok=essai===x;
    return qcm(`Le nombre ${fr(essai)} est-il solution de l'équation ${poly([[a,"x"],[b,""]])} = ${fr(c)} ?`,ok?"Oui":"Non",[ok?"Non":"Oui"],`On remplace x par ${pr(essai)} : ${fr(a)} × ${pr(essai)} ${b<0?"−":"+"} ${Math.abs(b)} = ${fr(a*essai+b)}, ${ok?"on trouve bien":"ce n'est pas"} ${fr(c)}.`);
  },
  proportionnalite(){
    const t=alea(1,3);
    if(t===1){const a=alea(2,8),u=pioche([25,50,75,100,125,150]);let c;do{c=alea(2,12);}while(c===a);
      const ing=pioche(["farine","sucre","chocolat","beurre"]);
      return saisie(`Pour ${a} personnes, une recette demande ${a*u} g de ${ing}. Combien de grammes faut-il pour ${c} personnes ?`,[String(c*u),c*u+" g"],`Pour 1 personne : ${a*u} ÷ ${a} = ${u} g. Pour ${c} personnes : ${c} × ${u} = ${c*u} g.`);}
    if(t===2){const [p,q]=pioche([[3,2],[5,2],[3,4],[5,4],[2,3],[4,3],[5,3],[3,5]]),m=alea(1,5);let n;do{n=alea(1,8);}while(n===m);
      const a=q*m,b=p*m*10,c=q*n,x=p*n*10;
      return saisie(`${a} L de peinture permettent de peindre ${b} m². Quelle surface (en m²) peut-on peindre avec ${c} L ?`,[String(x),x+" m²"],`Quatrième proportionnelle (produit en croix) : ${b} × ${c} ÷ ${a} = ${b*c} ÷ ${a} = ${x} m².`);}
    const k=pioche([15,25,8,12,30,35]),a=alea(2,6);let b;do{b=alea(3,12);}while(b===a);
    const ya=a*k/10,yb=b*k/10,prop=alea(0,1),yb2=prop?yb:+(yb+pioche([1,2])).toFixed(1);
    return qcm(`Masse (kg) : ${a} et ${b}. Prix (€) : ${nb(ya)} et ${nb(yb2)}. Le prix est-il proportionnel à la masse ?`,prop?"Oui":"Non",[prop?"Non":"Oui"],`On calcule le prix d'un kilo : ${nb(ya)} ÷ ${a} = ${nb(k/10)} €. ${prop?`Et ${b} × ${nb(k/10)} = ${nb(yb)} : même coefficient, c'est proportionnel.`:`Mais ${b} × ${nb(k/10)} = ${nb(yb)}, pas ${nb(yb2)} : ce n'est pas proportionnel.`}`);
  },
  vitesse(){
    const t=alea(1,4),P=pers();
    const durees=[[30,"30 min"],[45,"45 min"],[60,"1 h"],[90,"1 h 30 min"],[120,"2 h"],[150,"2 h 30 min"],[180,"3 h"],[15,"15 min"],[20,"20 min"]];
    if(t<=2){let v,dm;do{v=alea(2,24)*5;dm=pioche(durees);}while((v*dm[0])%60!==0);
      const d=v*dm[0]/60,qui=v<=30?`${P.n}, à vélo,`:(v<=110?"Une voiture":"Un train");
      if(t===1)return saisie(`${qui} parcourt ${d} km en ${dm[1]}. Quelle est sa vitesse moyenne, en km/h ?`,[String(v),v+" km/h"],`v = d ÷ t. ${d} km en ${dm[0]} min, c'est ${d} × 60 ÷ ${dm[0]} = ${v} km en 60 min, donc ${v} km/h.`);
      return saisie(`${qui} roule à ${v} km/h de moyenne pendant ${dm[1]}. Quelle distance parcourt-${qui.startsWith("Un ")?"il":(qui.startsWith("Une")?"elle":P.il)}, en km ?`,[String(d),d+" km"],`d = v × t. En ${dm[0]} min, c'est ${dm[0]}/60 d'heure : ${v} × ${dm[0]} ÷ 60 = ${d} km.`);}
    if(t===3){let v,mn,d;do{v=pioche([30,45,60,90]);mn=pioche([20,30,40,45,50,80,90]);d=v*mn/60;}while(!Number.isInteger(d));
      return saisie(`Un car roule à ${v} km/h de moyenne. Combien de minutes met-il pour parcourir ${d} km ?`,[String(mn),mn+" min"],`t = d ÷ v. À ${v} km/h, on fait ${v} km en 60 min, donc ${d} km en ${d} × 60 ÷ ${v} = ${mn} min.`);}
    if(alea(0,1)){const v=pioche([2,5,10,15,20,25,30,40]),r=nb(v*3.6);
      return saisie(`Convertis ${v} m/s en km/h`,[r,r.replace(",","."),r+" km/h"],`En 1 h = 3 600 s, on parcourt ${v} × 3 600 = ${grp(String(v*3600))} m, soit ${r} km. Donc ${v} m/s = ${r} km/h (on multiplie par 3,6).`);}
    const k=pioche([18,36,54,72,90,108]);
    return saisie(`Convertis ${k} km/h en m/s`,[String(k/3.6),k/3.6+" m/s"],`${k} km/h = ${grp(String(k*1000))} m en 3 600 s, soit ${grp(String(k*1000))} ÷ 3 600 = ${k/3.6} m/s (on divise par 3,6).`);
  },
  pourcentage(){
    const t=alea(1,5);
    if(t===1){const p=pioche([5,10,15,20,25,30,40,60,75]),v=alea(2,30)*20;
      return saisie(`Calcule ${p} % de ${v}`,[String(p*v/100)],`${p} % de ${v} = ${v} × ${p} ÷ 100 = ${p*v/100}.`);}
    if(t===2){const p=pioche([5,10,20,25,30,50]),v=alea(2,20)*20,r=v*(100+p)/100;
      return saisie(`Un vélo coûte ${v} €. Son prix augmente de ${p} %. Quel est son nouveau prix, en € ?`,[String(r),r+" €"],`Augmentation : ${p} % de ${v} = ${v*p/100} €. Nouveau prix : ${v} + ${v*p/100} = ${r} €. On peut aussi faire ${v} × ${nb((100+p)/100)}.`);}
    if(t===3){const p=pioche([10,20,25,30,40,50]),v=alea(2,20)*20,r=v*(100-p)/100;
      return saisie(`Pendant les soldes, un manteau à ${v} € est réduit de ${p} %. Quel est son prix soldé, en € ?`,[String(r),r+" €"],`Réduction : ${p} % de ${v} = ${v*p/100} €. Prix soldé : ${v} − ${v*p/100} = ${r} €. On peut aussi faire ${v} × ${nb((100-p)/100)}.`);}
    if(t===4){let b,pct,a;do{b=pioche([20,25,40,50,200]);pct=alea(1,19)*5;a=b*pct/100;}while(!Number.isInteger(a));
      return saisie(`Dans un club de ${b} membres, ${a} font de la natation. Quel pourcentage des membres cela représente-t-il ?`,[String(pct),pct+" %"],`${a} ÷ ${b} = ${nb(a/b)}, soit ${pct} %. (Ou ${a} × 100 ÷ ${b} = ${pct}.)`);}
    const p=pioche([2,5,10,20,30,40,60]),hausse=alea(0,1);
    const bon=nb((hausse?100+p:100-p)/100);
    return qcm(`${hausse?"Augmenter":"Diminuer"} un prix de ${p} %, c'est le multiplier par :`,bon,[nb(p/100),nb((hausse?100-p:100+p)/100),nb(hausse?1+p/1000:1-p/1000)],`${hausse?"Augmenter":"Diminuer"} de ${p} %, c'est garder 100 % ${hausse?"+":"−"} ${p} % = ${hausse?100+p:100-p} % du prix, donc multiplier par ${bon}.`);
  },
  pythagore(){
    const T=pioche(TRI),[A,B,C]=T.split(""),t=alea(1,4);
    if(t===4)return qcm(`Le triangle ${T} est rectangle en ${A}. Quelle égalité est vraie ?`,`${B}${C}² = ${A}${B}² + ${A}${C}²`,[`${A}${B}² = ${B}${C}² + ${A}${C}²`,`${A}${C}² = ${A}${B}² + ${B}${C}²`,`${B}${C} = ${A}${B} + ${A}${C}`],`L'hypoténuse est le côté opposé à l'angle droit, ici [${B}${C}]. Son carré est égal à la somme des carrés des deux autres côtés.`);
    if(t===3){let a,b,s;do{a=alea(2,12);b=alea(2,12);s=a*a+b*b;}while(Number.isInteger(Math.sqrt(s)));
      const r=(Math.round(Math.sqrt(s)*10)/10).toFixed(1);
      return saisie(`Le triangle ${T} est rectangle en ${A}, avec ${A}${B} = ${a} cm et ${A}${C} = ${b} cm. Calcule ${B}${C}, arrondi au dixième (calculatrice autorisée).`,[vg(r),r],`D'après le théorème de Pythagore : ${B}${C}² = ${a}² + ${b}² = ${a*a} + ${b*b} = ${s}, donc ${B}${C} = √${s} ≈ ${vg(r)} cm.`);}
    let [a,b,c]=pioche(TRIPLETS);const k=c>20?1:alea(1,3);a*=k;b*=k;c*=k;if(alea(0,1))[a,b]=[b,a];
    if(t===1)return saisie(`Le triangle ${T} est rectangle en ${A}, avec ${A}${B} = ${a} cm et ${A}${C} = ${b} cm. Calcule ${B}${C}, en cm.`,[String(c),c+" cm"],`D'après le théorème de Pythagore : ${B}${C}² = ${a}² + ${b}² = ${a*a} + ${b*b} = ${c*c}, donc ${B}${C} = √${c*c} = ${c} cm.`);
    return saisie(`Le triangle ${T} est rectangle en ${A}, avec ${B}${C} = ${c} cm et ${A}${B} = ${a} cm. Calcule ${A}${C}, en cm.`,[String(b),b+" cm"],`D'après le théorème de Pythagore : ${A}${C}² = ${B}${C}² − ${A}${B}² = ${c*c} − ${a*a} = ${b*b}, donc ${A}${C} = √${b*b} = ${b} cm.`);
  },
  reciproque(){
    const T=pioche(TRI),L=T.split("");
    let [a,b,c]=pioche(TRIPLETS.slice(0,4));const k=c>20?1:alea(1,3);a*=k;b*=k;c*=k;
    const droit=alea(0,1);if(!droit)c+=1;
    const V=pioche(L),[X,Y]=L.filter(x=>x!==V);
    const seg=(p,q)=>L.indexOf(p)<L.indexOf(q)?p+q:q+p;
    const cotes=melange([`${seg(V,X)} = ${a} cm`,`${seg(V,Y)} = ${b} cm`,`${seg(X,Y)} = ${c} cm`]).join(", ");
    return qcm(`Le triangle ${T} a pour côtés ${cotes}. Est-il rectangle ?`,droit?`Oui, rectangle en ${V}`:"Non, il n'est pas rectangle",[droit?"Non, il n'est pas rectangle":`Oui, rectangle en ${V}`,`Oui, rectangle en ${X}`],`Le plus long côté est [${seg(X,Y)}] : ${seg(X,Y)}² = ${c*c}. Et ${seg(V,X)}² + ${seg(V,Y)}² = ${a*a} + ${b*b} = ${a*a+b*b}. ${droit?`Égalité : d'après la réciproque du théorème de Pythagore, le triangle est rectangle en ${V}.`:"Pas d'égalité : le triangle n'est pas rectangle (sinon l'égalité de Pythagore serait vraie)."}`);
  },
  thales(){
    const t=alea(1,5);
    if(t===5){const k=alea(2,5);return qcm(`On agrandit un triangle : toutes ses longueurs sont multipliées par ${k}. Par combien son aire est-elle multipliée ?`,String(k*k),[String(k),String(2*k),String(k**3)],`Dans un agrandissement de rapport ${k}, les longueurs sont multipliées par ${k} et les aires par ${k}² = ${k*k}.`);}
    const intro="Dans le triangle ABC, M est sur [AB] et N sur [AC], avec (MN) parallèle à (BC).";
    if(t===4)return qcm(`${intro} Quelle égalité est vraie ?`,"AM/AB = AN/AC = MN/BC",["AM/MB = AN/AC = MN/BC","AB/AM = AN/AC = MN/BC","AM/AB = AC/AN = BC/MN"],"Le petit triangle AMN est une réduction du triangle ABC : on écrit les rapports « petit triangle / grand triangle » dans le même ordre.");
    const [p,q]=pioche([[1,2],[1,3],[2,3],[3,4],[2,5],[3,5],[4,5]]),k=alea(1,4),j=alea(1,5);
    const AB=q*k,AM=p*k,BC=q*j,MN=p*j;
    if(t===1)return saisie(`${intro} AM = ${AM} cm, AB = ${AB} cm et BC = ${BC} cm. Calcule MN, en cm.`,[String(MN),MN+" cm"],`D'après le théorème de Thalès : AM/AB = MN/BC. Donc MN = BC × AM ÷ AB = ${BC} × ${AM} ÷ ${AB} = ${MN} cm.`);
    if(t===2)return saisie(`${intro} AM = ${AM} cm, AB = ${AB} cm et MN = ${MN} cm. Calcule BC, en cm.`,[String(BC),BC+" cm"],`D'après le théorème de Thalès : AM/AB = MN/BC. Donc BC = MN × AB ÷ AM = ${MN} × ${AB} ÷ ${AM} = ${BC} cm.`);
    return saisie(`${intro} AM = ${AM} cm, MN = ${MN} cm et BC = ${BC} cm. Calcule AB, en cm.`,[String(AB),AB+" cm"],`D'après le théorème de Thalès : AM/AB = MN/BC. Donc AB = AM × BC ÷ MN = ${AM} × ${BC} ÷ ${MN} = ${AB} cm.`);
  },
  cosinus(){
    const T=pioche(TRI),[A,B,C]=T.split(""),t=alea(1,4);
    if(t===1){const enB=alea(0,1),ang=enB?A+B+C:A+C+B,adj=enB?A+B:A+C,opp=enB?A+C:A+B,hyp=B+C;
      return qcm(`Le triangle ${T} est rectangle en ${A}. Que vaut le cosinus de l'angle ${ang} ?`,`${adj}/${hyp}`,[`${opp}/${hyp}`,`${adj}/${opp}`,`${hyp}/${adj}`],`cos = côté adjacent ÷ hypoténuse. Pour l'angle ${ang}, le côté adjacent est [${adj}] et l'hypoténuse [${hyp}].`);}
    if(t===2){const [a,b,c]=pioche([[3,4,5],[4,3,5],[7,24,25],[24,7,25]]),k=c===25?1:alea(1,4);
      const r=nb(a/c);
      return saisie(`Le triangle ${T} est rectangle en ${A}, avec ${A}${B} = ${a*k} cm, ${A}${C} = ${b*k} cm et ${B}${C} = ${c*k} cm. Donne la valeur exacte de cos(${A}${B}${C}), en écriture décimale.`,[r,r.replace(",",".")],`cos(${A}${B}${C}) = côté adjacent ÷ hypoténuse = ${A}${B} ÷ ${B}${C} = ${a*k} ÷ ${c*k} = ${r}.`);}
    if(t===3){const [cv,m]=pioche([[0.6,5],[0.8,5],[0.5,2],[0.25,4],[0.4,5],[0.75,4]]),h=m*alea(2,6),r=nb(h*cv);
      return saisie(`Le triangle ${T} est rectangle en ${A}. On sait que cos(${A}${B}${C}) = ${nb(cv)} et ${B}${C} = ${h} cm. Calcule ${A}${B}, en cm.`,[r,r.replace(",","."),r+" cm"],`cos(${A}${B}${C}) = ${A}${B} ÷ ${B}${C}, donc ${A}${B} = ${B}${C} × cos(${A}${B}${C}) = ${h} × ${nb(cv)} = ${r} cm.`);}
    const n=alea(2,12);
    return saisie(`Le triangle ${T} est rectangle en ${A}, l'angle ${A}${B}${C} mesure 60° et ${A}${B} = ${n} cm. Calcule ${B}${C}, en cm. (On rappelle que cos 60° = 0,5.)`,[String(2*n),2*n+" cm"],`cos(${A}${B}${C}) = ${A}${B} ÷ ${B}${C}, donc ${B}${C} = ${A}${B} ÷ cos 60° = ${n} ÷ 0,5 = ${2*n} cm.`);
  },
  transformations(){
    if(alea(0,2)===0){const x=alea(-6,6),y=alea(-6,6),dx=nz(-5,5),dy=nz(-5,5);
      const h=dx>0?`${dx} unité${dx>1?"s":""} vers la droite`:`${-dx} unité${dx<-1?"s":""} vers la gauche`,v=dy>0?`${dy} vers le haut`:`${-dy} vers le bas`;
      const c=(a,b)=>`(${fr(a)} ; ${fr(b)})`;
      return qcm(`Dans un repère, on applique au point A${c(x,y)} la translation qui déplace de ${h} et de ${v}. Quelles sont les coordonnées de l'image ?`,c(x+dx,y+dy),[c(x+dy,y+dx),c(x-dx,y-dy),c(x+dx,y-dy),c(x-dx,y+dy)],`On ajoute ${fr(dx)} à l'abscisse et ${fr(dy)} à l'ordonnée : ${c(x+dx,y+dy)}.`);}
    const b=[
      {q:"Une translation est définie par :",b:"une direction, un sens et une longueur",f:["un centre et un angle","un axe","un seul point"],e:"On fait glisser la figure, sans la tourner, selon une direction, un sens et une longueur."},
      {q:"Une rotation est définie par :",b:"un centre, un angle et un sens",f:["un axe de symétrie","une direction et une longueur","un coefficient d'agrandissement"],e:"La figure tourne autour du centre, d'un certain angle, dans le sens des aiguilles d'une montre ou le sens inverse."},
      {q:"Une symétrie centrale est une rotation d'angle :",b:"180°",f:["90°","360°","45°"],e:"La symétrie de centre O fait faire un demi-tour à la figure autour de O."},
      {q:"Une translation ou une rotation conserve :",b:"les longueurs, les angles et les aires",f:["seulement les longueurs","seulement les aires","l'orientation d'une seule droite"],e:"La figure image est superposable à la figure de départ."},
      {q:"Par une translation, l'image d'une droite est :",b:"une droite parallèle à la première",f:["une droite perpendiculaire","un cercle","un segment plus court"],e:"Une translation fait glisser la droite sans la tourner."},
      {q:"Le mouvement de la grande aiguille d'une horloge correspond à :",b:"une rotation",f:["une translation","une symétrie axiale","un agrandissement"],e:"Elle tourne autour du centre du cadran."},
      {q:"Un tapis roulant déplace une valise. Ce mouvement correspond à :",b:"une translation",f:["une rotation","une symétrie centrale","une réduction"],e:"La valise glisse en ligne droite sans tourner."},
      {q:"On applique 4 fois de suite une rotation de 90° de même centre et même sens. La figure revient :",b:"à sa position de départ",f:["à l'envers","deux fois plus loin","symétrique par rapport à un axe"],e:"4 × 90° = 360° : un tour complet."},
      {q:"Quelle transformation « retourne » la figure, comme un calque qu'on retourne ?",b:"la symétrie axiale",f:["la translation","la rotation","aucune"],e:"Translation et rotation font glisser ou tourner la figure sans la retourner."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);
  },
  volumes(){
    const t=alea(1,5);
    if(t===1){let L,l,h;do{L=alea(2,12);l=alea(2,10);h=alea(2,15);}while((L*l*h)%3);
      return saisie(`Une pyramide a pour base un rectangle de ${L} cm sur ${l} cm et une hauteur de ${h} cm. Quel est son volume, en cm³ ?`,[String(L*l*h/3),L*l*h/3+" cm³"],`V = aire de la base × hauteur ÷ 3 = ${L} × ${l} × ${h} ÷ 3 = ${L*l*h/3} cm³.`);}
    if(t===2){const B=alea(5,60),h=alea(1,8)*3;
      return saisie(`Une pyramide a une base d'aire ${B} cm² et une hauteur de ${h} cm. Quel est son volume, en cm³ ?`,[String(B*h/3),B*h/3+" cm³"],`V = B × h ÷ 3 = ${B} × ${h} ÷ 3 = ${B*h/3} cm³.`);}
    const r=alea(2,6),h=alea(1,5)*3;
    if(t===3)return qcm(`Un cône a un rayon de base de ${r} cm et une hauteur de ${h} cm. Quel est son volume exact ?`,`${r*r*h/3}π cm³`,[`${r*r*h}π cm³`,`${r*h}π cm³`,`${4*r*r*h/3}π cm³`],`V = π × r² × h ÷ 3 = π × ${r*r} × ${h} ÷ 3 = ${r*r*h/3}π cm³.`);
    if(t===4){const v=Math.round(Math.PI*r*r*h/3);
      return saisie(`Un cône a un rayon de base de ${r} cm et une hauteur de ${h} cm. Calcule son volume arrondi au cm³ (calculatrice autorisée).`,[String(v),v+" cm³"],`V = π × r² × h ÷ 3 = π × ${r*r} × ${h} ÷ 3 = ${r*r*h/3}π ≈ ${v} cm³.`);}
    const n=alea(5,95)*100,r2=nb(n/1000);
    return saisie(`Convertis ${grp(String(n))} cm³ en litres`,[r2,r2.replace(",","."),r2+" L"],`1 L = 1 dm³ = 1 000 cm³, donc ${grp(String(n))} cm³ = ${r2} L.`);
  },
  stats(){
    const t=alea(1,5),P=pers();
    if(t===1){let m,v,last;do{m=alea(8,15);v=[0,0,0,0].map(()=>alea(Math.max(0,m-6),Math.min(20,m+6)));last=5*m-v.reduce((a,b)=>a+b,0);}while(last<0||last>20);
      v.push(last);
      return saisie(`${P.n} a eu ces notes : ${v.join(" ; ")}. Quelle est sa moyenne ?`,[String(m)],`Somme : ${v.join(" + ")} = ${5*m}. Moyenne : ${5*m} ÷ 5 = ${m}.`);}
    if(t===2||t===3){const n=t===2?pioche([5,7]):6,v=Array.from({length:n},()=>alea(0,20)),s=v.slice().sort((a,b)=>a-b);
      const med=n%2?s[(n-1)/2]:(s[n/2-1]+s[n/2])/2;
      return saisie(`Voici des notes : ${v.join(" ; ")}. Quelle est la médiane de cette série ?`,[nb(med),String(med)],`On range dans l'ordre : ${s.join(" ; ")}. ${n%2?`La valeur du milieu (la ${(n+1)/2}e) est ${med}.`:`Il y a ${n} valeurs : la médiane est entre la 3e et la 4e, (${s[2]} + ${s[3]}) ÷ 2 = ${nb(med)}.`}`);}
    if(t===4){const v=Array.from({length:6},()=>alea(5,40));
      return saisie(`Températures relevées (°C) : ${v.join(" ; ")}. Quelle est l'étendue de cette série ?`,[String(Math.max(...v)-Math.min(...v))],`Étendue = plus grande valeur − plus petite valeur = ${Math.max(...v)} − ${Math.min(...v)} = ${Math.max(...v)-Math.min(...v)}.`);}
    let tot,pct,n;do{tot=pioche([20,25,40,50]);pct=alea(1,19)*5;n=tot*pct/100;}while(!Number.isInteger(n));
    return saisie(`Dans une classe de ${tot} élèves, ${n} viennent au collège à vélo. Quelle est la fréquence de cet effectif, en pourcentage ?`,[String(pct),pct+" %"],`Fréquence = effectif ÷ effectif total = ${n} ÷ ${tot} = ${nb(n/tot)}, soit ${pct} %.`);
  },
  probas(){
    const t=alea(1,4);
    if(t===1){const r=alea(1,8),b=alea(1,8),v=alea(1,8),tot=r+b+v;const [nom,nbr]=pioche([["rouge",r],["bleue",b],["verte",v]]);
      return saisie(`Une urne contient ${r} boule${r>1?"s":""} rouge${r>1?"s":""}, ${b} bleue${b>1?"s":""} et ${v} verte${v>1?"s":""}. On tire une boule au hasard. Quelle est la probabilité qu'elle soit ${nom} ? (fraction)`,fxRep(nbr,tot),`Il y a ${nbr} boule${nbr>1?"s":""} ${nom}${nbr>1?"s":""} sur ${tot} : P = ${nbr}/${tot}${fx(nbr,tot)!==`${nbr}/${tot}`?` = ${fx(nbr,tot)}`:""}.`);}
    if(t===2){const E=pioche([["un nombre pair",3,"2, 4 et 6"],["un multiple de 3",2,"3 et 6"],["un nombre strictement supérieur à 4",2,"5 et 6"],["un nombre premier",3,"2, 3 et 5"],["un 6",1,"seulement 6"],["un nombre inférieur ou égal à 2",2,"1 et 2"],["un 7",0,"aucune issue"],["un nombre compris entre 1 et 6",6,"toutes les issues"]]);
      return saisie(`On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir ${E[0]} ?`,fxRep(E[1],6),`Issues favorables : ${E[2]}, soit ${E[1]} sur 6. P = ${E[1]}/6${fx(E[1],6)!==`${E[1]}/6`?` = ${fx(E[1],6)}`:""}.`);}
    if(t===3){const p=alea(1,9)/10;
      return saisie(`La probabilité qu'il pleuve demain est ${nb(p)}. Quelle est la probabilité qu'il ne pleuve pas ?`,[nb(1-p),nb(1-p).replace(",",".")],`Les probabilités d'un événement et de son contraire ont pour somme 1 : 1 − ${nb(p)} = ${nb(1-p)}.`);}
    const b=[
      {q:"La probabilité d'un événement impossible est :",b:"0",f:["1","1/2","100"],e:"Impossible : 0 ; certain : 1."},
      {q:"La probabilité d'un événement certain est :",b:"1",f:["0","1/2","10"],e:"Une probabilité est toujours comprise entre 0 et 1."},
      {q:"Une probabilité est toujours :",b:"comprise entre 0 et 1",f:["supérieure à 1","négative","égale à 1/2"],e:"0 pour l'impossible, 1 pour le certain."},
      {q:"On lance une pièce équilibrée. Probabilité d'obtenir « pile » :",b:"1/2",f:["1","0","1/3"],e:"Deux issues équiprobables : pile ou face."},
      {q:"On lance un dé 600 fois. Combien de « 6 » peut-on s'attendre à obtenir environ ?",b:"environ 100",f:["exactement 6","environ 300","environ 600"],e:"La probabilité est 1/6, et 600 ÷ 6 = 100. La fréquence se rapproche de la probabilité."},
      {q:"Si P(A) = 0,3, la probabilité de l'événement contraire « non A » est :",b:"0,7",f:["0,3","1,3","0"],e:"P(non A) = 1 − P(A) = 0,7."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);
  },
  algo(){
    const t=alea(1,3);
    if(t===1){const x0=alea(1,9),n=alea(2,4),op=pioche([["multiplier x par 2",v=>v*2],["ajouter 5 à x",v=>v+5],["multiplier x par 3",v=>v*3],["retirer 4 à x",v=>v-4],["multiplier x par 2 puis ajouter 1",v=>v*2+1]]);
      const vals=[x0];for(let i=0;i<n;i++)vals.push(op[1](vals[vals.length-1]));
      return saisie(`Programme : « x prend la valeur ${x0}. Répéter ${n} fois : ${op[0]}. » Quelle est la valeur de x à la fin ?`,rep(vals[n]),`Valeurs successives de x : ${vals.map(fr).join(" → ")}.`);}
    if(t===2){const n=pioche([3,4,5,6,8,9,10,12]),a=360/n,noms={3:"un triangle équilatéral",4:"un carré",5:"un pentagone régulier",6:"un hexagone régulier",8:"un octogone régulier",9:"un ennéagone régulier",10:"un décagone régulier",12:"un dodécagone régulier"};
      return qcm(`Dans Scratch, pour tracer ${noms[n]} (${n} côtés), de combien de degrés le lutin doit-il tourner à chaque sommet ?`,a+"°",[(180-a)+"°","90°",(2*a)+"°",(a/2)+"°"],`Le lutin fait un tour complet en ${n} fois : 360 ÷ ${n} = ${a}°.`);}
    const b=[
      {q:"Dans un programme, une variable sert à :",b:"stocker une valeur qui peut changer",f:["dessiner une figure","arrêter le programme","répéter des instructions"],e:"Par exemple une variable « score » qui augmente."},
      {q:"La boucle « répéter jusqu'à … » s'arrête :",b:"quand la condition devient vraie",f:["après 10 tours exactement","jamais","au premier tour"],e:"On ne connaît pas forcément le nombre de tours à l'avance."},
      {q:"L'instruction « si … alors … sinon … » permet :",b:"de choisir entre deux actions selon une condition",f:["de répéter une action","de créer une variable","d'effacer l'écran"],e:"C'est une instruction conditionnelle."},
      {q:"Dans Scratch, le bloc « quand le drapeau vert est cliqué » est :",b:"un événement qui lance le script",f:["une boucle","une variable","un capteur"],e:"Les blocs d'événement déclenchent les scripts."},
      {q:"« Répéter 4 fois : avancer de 50, tourner de 90° » trace :",b:"un carré de côté 50",f:["un triangle","un rectangle de 50 sur 90","un cercle"],e:"4 côtés de 50 et 4 angles droits."},
      {q:"Un algorithme, c'est :",b:"une suite d'instructions qui permet de résoudre un problème",f:["un langage secret","un ordinateur","une erreur dans un programme"],e:"Une recette de cuisine est un exemple d'algorithme."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);
  },
  calcmental(){
    const t=alea(1,7);
    if(t===1){const a=nz(-9,9),b=nz(-9,9);return saisie(`Calcule : ${fr(a)} × ${pr(b)}`,rep(a*b),`Règle des signes, puis ${Math.abs(a)} × ${Math.abs(b)} = ${Math.abs(a*b)} : ${fr(a*b)}.`);}
    if(t===2){const n=alea(2,15);return saisie(`Calcule : ${n}²`,[String(n*n)],`${n}² = ${n} × ${n} = ${n*n}.`);}
    if(t===3){const d=pioche([2,3,4,5,10]),n=alea(1,d-1),q=d*alea(2,12);return saisie(`Combien font ${n}/${d} de ${q} ?`,[String(q*n/d)],`${q} ÷ ${d} = ${q/d}, puis × ${n} : ${q*n/d}.`);}
    if(t===4){const p=pioche([10,20,25,50]),v=alea(2,20)*20;return saisie(`Calcule ${p} % de ${v}`,[String(p*v/100)],`${p} % = ${p}/100 : ${v} × ${p} ÷ 100 = ${p*v/100}.`);}
    if(t===5){const a=nz(-20,20),b=nz(-20,20);return saisie(`Calcule : ${fr(a)} + ${pr(b)}`,rep(a+b),`${fr(a)} + ${pr(b)} = ${fr(a+b)}.`);}
    if(t===6){const a=alea(12,98),m=pioche([0.1,0.01,0.5]),r=nb(a*m);return saisie(`Calcule : ${a} × ${nb(m)}`,[r,r.replace(",",".")],m===0.5?`Multiplier par 0,5, c'est prendre la moitié : ${r}.`:`Multiplier par ${nb(m)}, c'est diviser par ${Math.round(1/m)} : ${r}.`);}
    const a=nz(-9,9),b=alea(2,9),c=alea(2,9);return saisie(`Calcule : ${fr(a)} − ${b} × ${c}`,rep(a-b*c),`La multiplication d'abord : ${b} × ${c} = ${b*c}, puis ${fr(a)} − ${b*c} = ${fr(a-b*c)}.`);
  },
  revnombres(){return GM[pioche(["relatifs","relmult","reldiv","fraccomp","fracadd","fracmult","fracdiv","puiss10","puissances","notationsci"])]();},
  revlitteral(){return GM[pioche(["reduire","developper","double","factoriser","equations"])]();},
  revgeom(){return GM[pioche(["pythagore","reciproque","thales","cosinus","transformations","volumes"])]();}
};
function exoMaths(tag){const f=GM[tag]||GM.calcmental;return f();}

/* ---------- FRANÇAIS ---------- */
// imp = radical de l'imparfait ; fut = radical du futur et du conditionnel ; ps = passé simple (il, ils)
const VB=[
 {inf:"chanter",imp:"chant",fut:"chanter",ps:["chanta","chantèrent"],subj:["chante","chantes","chante","chantions","chantiez","chantent"]},
 {inf:"finir",imp:"finiss",fut:"finir",ps:["finit","finirent"],subj:["finisse","finisses","finisse","finissions","finissiez","finissent"]},
 {inf:"prendre",imp:"pren",fut:"prendr",ps:["prit","prirent"],subj:["prenne","prennes","prenne","prenions","preniez","prennent"]},
 {inf:"aller",imp:"all",fut:"ir",ps:["alla","allèrent"],subj:["aille","ailles","aille","allions","alliez","aillent"]},
 {inf:"faire",imp:"fais",fut:"fer",ps:["fit","firent"],subj:["fasse","fasses","fasse","fassions","fassiez","fassent"]},
 {inf:"être",imp:"ét",fut:"ser",ps:["fut","furent"],subj:["sois","sois","soit","soyons","soyez","soient"]},
 {inf:"avoir",imp:"av",fut:"aur",ps:["eut","eurent"],subj:["aie","aies","ait","ayons","ayez","aient"]},
 {inf:"venir",imp:"ven",fut:"viendr",ps:["vint","vinrent"],subj:["vienne","viennes","vienne","venions","veniez","viennent"]},
 {inf:"pouvoir",imp:"pouv",fut:"pourr",ps:["put","purent"],subj:["puisse","puisses","puisse","puissions","puissiez","puissent"]},
 {inf:"savoir",imp:"sav",fut:"saur",ps:["sut","surent"],subj:["sache","saches","sache","sachions","sachiez","sachent"]},
 {inf:"vouloir",imp:"voul",fut:"voudr",ps:["voulut","voulurent"],subj:["veuille","veuilles","veuille","voulions","vouliez","veuillent"]},
 {inf:"voir",imp:"voy",fut:"verr",ps:["vit","virent"],subj:["voie","voies","voie","voyions","voyiez","voient"]},
 {inf:"devoir",imp:"dev",fut:"devr",ps:["dut","durent"],subj:["doive","doives","doive","devions","deviez","doivent"]},
 {inf:"partir",imp:"part",fut:"partir",ps:["partit","partirent"],subj:["parte","partes","parte","partions","partiez","partent"]},
 {inf:"dire",imp:"dis",fut:"dir",ps:["dit","dirent"],subj:["dise","dises","dise","disions","disiez","disent"]}
];
const PRON=["je","tu","il","nous","vous","ils"];
const QUE=["que je","que tu","qu'il","que nous","que vous","qu'ils"];
const T_IMP=["ais","ais","ait","ions","iez","aient"],T_FUT=["ai","as","a","ons","ez","ont"];
const voy=f=>/^[aeiouyéèêh]/.test(f);
const pj=(i,f)=>i===0&&voy(f)?"j'":PRON[i]+" ";
const qj=(i,f)=>i===0&&voy(f)?"que j'":QUE[i]+" ";
function conjuguer(tp){
  const v=pioche(VB),i=alea(0,5);
  if(tp==="subj"){const f=v.subj[i],q=qj(i,f);
    return saisie(`Conjugue « ${v.inf} » au subjonctif présent : il faut ${q}…`,[f,pj(i,f)+f,q+f],`Il faut ${q}${f}. Terminaisons du subjonctif présent : -e, -es, -e, -ions, -iez, -ent (sauf être et avoir).`);}
  if(tp==="ps"){const k=alea(0,1),f=v.ps[k],p=k?"ils":"il";
    return saisie(`Conjugue « ${v.inf} » au passé simple : ${p} …`,[f,p+" "+f],`${p} ${f}. Le passé simple exprime les actions de premier plan dans un récit au passé.`);}
  const f=tp==="cond"?v.fut+T_IMP[i]:tp==="fut"?v.fut+T_FUT[i]:v.imp+T_IMP[i];
  const nom={cond:"conditionnel présent",fut:"futur simple",imp:"imparfait"}[tp];
  const regle={cond:`radical du futur (${v.fut}-) + terminaisons de l'imparfait (-ais, -ais, -ait, -ions, -iez, -aient)`,fut:`radical ${v.fut}- + terminaisons -ai, -as, -a, -ons, -ez, -ont`,imp:`radical ${v.imp}- + terminaisons -ais, -ais, -ait, -ions, -iez, -aient`}[tp];
  const p=pj(i,f);
  return saisie(`Conjugue « ${v.inf} » au ${nom} : ${i===0&&voy(f)?"j'":PRON[i]} …`,[f,p+f],`${p}${f}. Au ${nom} : ${regle}.`);
}
const BANQUE_F=[
 // récit
 {t:"recit",q:"Dans un récit écrit à la première personne, le narrateur est :",b:"un personnage de l'histoire",f:["forcément l'auteur","le lecteur","absent de l'histoire"],e:"Il dit « je » et participe à l'histoire. Attention : le narrateur n'est pas forcément l'auteur."},
 {t:"recit",q:"Le point de vue omniscient permet au narrateur :",b:"de tout savoir, même les pensées de tous les personnages",f:["de ne voir que l'extérieur des personnages","de ne connaître que les pensées d'un personnage","de parler au lecteur"],e:"Le narrateur omniscient sait tout, comme un dieu."},
 {t:"recit",q:"Dans un récit en point de vue interne, on découvre l'histoire :",b:"à travers le regard d'un seul personnage",f:["par un narrateur qui sait tout","par une caméra extérieure","par plusieurs narrateurs à la fois"],e:"On ne connaît que ce que ce personnage voit, pense et ressent."},
 {t:"recit",q:"Dans un récit en point de vue externe, le narrateur :",b:"décrit seulement ce qu'un témoin extérieur pourrait voir",f:["connaît les pensées de tous","raconte ses propres souvenirs","explique le passé des personnages"],e:"Il ne dit rien des pensées : c'est comme une caméra."},
 {t:"recit",q:"Dans un récit au passé, l'imparfait sert surtout à :",b:"décrire le décor et les actions qui durent ou se répètent",f:["raconter les actions soudaines","donner des ordres","parler du futur"],e:"Le passé simple raconte les actions de premier plan ; l'imparfait installe l'arrière-plan."},
 {t:"recit",q:"Quelle étape du schéma narratif déclenche l'histoire ?",b:"l'élément perturbateur",f:["la situation initiale","le dénouement","la situation finale"],e:"Situation initiale → élément perturbateur → péripéties → dénouement → situation finale."},
 {t:"recit",q:"Comment appelle-t-on un retour en arrière dans un récit ?",b:"une analepse",f:["une ellipse","une prolepse","une anaphore"],e:"L'analepse revient sur un moment passé ; la prolepse anticipe."},
 {t:"recit",q:"Une ellipse narrative, c'est :",b:"un moment de l'histoire passé sous silence",f:["une description très longue","un dialogue","un retour en arrière"],e:"Par exemple : « Trois ans plus tard… »."},
 // fonctions
 {t:"fonctions",q:"Dans « Marie offre un livre à son frère », quelle est la fonction de « à son frère » ?",b:"COI",f:["COD","complément circonstanciel","attribut du sujet"],e:"Il est relié au verbe par la préposition « à » : on offre quelque chose à quelqu'un."},
 {t:"fonctions",q:"Dans « Mon voisin semble fatigué », quelle est la fonction de « fatigué » ?",b:"attribut du sujet",f:["COD","épithète","complément du nom"],e:"Après un verbe d'état (être, sembler, paraître…), l'adjectif est attribut du sujet."},
 {t:"fonctions",q:"Dans « Le soir, nous lisons », quelle est la fonction de « le soir » ?",b:"complément circonstanciel de temps",f:["sujet","COD","complément du nom"],e:"On peut le déplacer ou le supprimer ; il indique quand."},
 {t:"fonctions",q:"Dans « la maison de mes parents », quelle est la fonction de « de mes parents » ?",b:"complément du nom",f:["COI","complément d'agent","attribut"],e:"Il complète le nom « maison »."},
 {t:"fonctions",q:"Dans « Le voleur a été arrêté par la police », quelle est la fonction de « par la police » ?",b:"complément d'agent",f:["COD","complément du nom","sujet"],e:"À la voix passive, le complément d'agent fait l'action. À l'actif : « La police a arrêté le voleur »."},
 {t:"fonctions",q:"Dans « Paul repeint sa chambre », quelle est la fonction de « sa chambre » ?",b:"COD",f:["COI","attribut du sujet","complément circonstanciel de lieu"],e:"On demande « Paul repeint quoi ? » : sa chambre, sans préposition."},
 {t:"fonctions",q:"Dans « une petite maison », quelle est la fonction de « petite » ?",b:"épithète du nom « maison »",f:["attribut du sujet","COD","complément du nom"],e:"L'adjectif est placé directement à côté du nom, sans verbe."},
 // propositions
 {t:"propositions",q:"Combien de propositions dans « Quand la nuit tomba, les loups sortirent du bois. » ?",b:"2",f:["1","3","4"],e:"Deux verbes conjugués (tomba, sortirent) : deux propositions."},
 {t:"propositions",q:"« Il pleut ; nous restons chez nous. » Les deux propositions sont :",b:"juxtaposées",f:["coordonnées","subordonnées","relatives"],e:"Elles sont séparées par un signe de ponctuation, sans mot de liaison."},
 {t:"propositions",q:"« Je suis tombé mais je me suis relevé. » Les deux propositions sont :",b:"coordonnées",f:["juxtaposées","subordonnées","indépendantes sans lien"],e:"Elles sont reliées par une conjonction de coordination (mais, ou, et, donc, or, ni, car)."},
 {t:"propositions",q:"Dans « Je pense que tu as raison », la proposition « que tu as raison » est :",b:"subordonnée",f:["principale","juxtaposée","coordonnée"],e:"Elle dépend de la principale « je pense » et ne peut pas fonctionner seule."},
 {t:"propositions",q:"Une proposition subordonnée :",b:"dépend d'une proposition principale",f:["est toujours seule dans la phrase","n'a jamais de verbe","commence toujours par « et »"],e:"Elle est introduite par un mot subordonnant (qui, que, quand, parce que…)."},
 {t:"propositions",q:"Combien de propositions dans « Le chat dort sur le canapé. » ?",b:"1",f:["2","3","0"],e:"Un seul verbe conjugué : c'est une phrase simple."},
 {t:"propositions",q:"Quel mot coordonne deux propositions ?",b:"car",f:["que","qui","quand"],e:"« car » est une conjonction de coordination ; « que », « qui », « quand » introduisent des subordonnées."},
 // relative
 {t:"relative",q:"« Le livre que tu m'as prêté est passionnant. » Quel est le pronom relatif ?",b:"que",f:["le","livre","est"],e:"« que » introduit la relative « que tu m'as prêté »."},
 {t:"relative",q:"« Le livre que tu m'as prêté est passionnant. » Quel est l'antécédent du pronom relatif ?",b:"le livre",f:["tu","prêté","passionnant"],e:"L'antécédent est le nom que la relative complète."},
 {t:"relative",q:"Complète : « C'est le film ___ je t'ai parlé. »",b:"dont",f:["que","qui","où"],e:"On parle DE quelque chose : « dont » remplace un complément introduit par « de »."},
 {t:"relative",q:"Complète : « La ville ___ je suis né est au bord de la mer. »",b:"où",f:["que","dont","qui"],e:"« où » remplace un complément de lieu ou de temps."},
 {t:"relative",q:"Complète : « L'élève ___ parle est mon voisin. »",b:"qui",f:["que","dont","où"],e:"« qui » est sujet du verbe de la relative (« parle »)."},
 {t:"relative",q:"Complète : « Le gâteau ___ tu as fait est délicieux. »",b:"que",f:["qui","dont","où"],e:"« que » est COD du verbe de la relative : tu as fait le gâteau."},
 {t:"relative",q:"Complète : « La raison pour ___ il est parti reste un mystère. »",b:"laquelle",f:["lequel","dont","que"],e:"Après une préposition, on emploie lequel/laquelle, accordé avec l'antécédent féminin « raison »."},
 {t:"relative",q:"Dans « Les enfants qui jouent dehors sont bruyants », quelle est la proposition relative ?",b:"qui jouent dehors",f:["Les enfants","sont bruyants","Les enfants sont bruyants"],e:"Elle commence par le pronom relatif « qui » et complète le nom « enfants »."},
 // conjonctive
 {t:"conjonctive",q:"« Je crois que tu as raison. » La subordonnée « que tu as raison » est :",b:"une conjonctive complétive",f:["une relative","une circonstancielle de temps","une principale"],e:"Introduite par la conjonction « que », elle complète le verbe « crois »."},
 {t:"conjonctive",q:"Dans « Je sais qu'il viendra », quelle est la fonction de « qu'il viendra » ?",b:"COD du verbe « savoir »",f:["sujet","complément du nom","complément circonstanciel"],e:"Je sais quoi ? qu'il viendra. La complétive est souvent COD."},
 {t:"conjonctive",q:"Dans quelle phrase « que » est-il une conjonction de subordination ?",b:"Je veux que tu viennes.",f:["Le film que j'ai vu était bien.","La robe que tu portes est jolie.","Les fruits que nous mangeons sont mûrs."],e:"Dans les autres phrases, « que » est un pronom relatif : il a un antécédent (film, robe, fruits)."},
 {t:"conjonctive",q:"Après « je veux que », le verbe se met :",b:"au subjonctif",f:["à l'indicatif","à l'infinitif","au participe"],e:"La volonté, le souhait, l'obligation entraînent le subjonctif : je veux que tu viennes."},
 {t:"conjonctive",q:"Après « je pense que », le verbe se met en général :",b:"à l'indicatif",f:["au subjonctif","à l'impératif","à l'infinitif"],e:"Une certitude ou une opinion affirmée entraîne l'indicatif : je pense que tu as raison."},
 {t:"conjonctive",q:"Complète : « Il faut que tu ___ tes devoirs. »",b:"fasses",f:["fais","feras","ferais"],e:"« Il faut que » + subjonctif : que tu fasses."},
 {t:"conjonctive",q:"Complète : « Je souhaite qu'il ___ beau demain. »",b:"fasse",f:["fait","fera","faisait"],e:"Le souhait entraîne le subjonctif : qu'il fasse."},
 // circonstancielle
 {t:"circonstancielle",q:"« Quand le soleil se lève, les oiseaux chantent. » La subordonnée exprime :",b:"le temps",f:["la cause","le but","la condition"],e:"« quand » introduit une circonstancielle de temps."},
 {t:"circonstancielle",q:"« Il est resté chez lui parce qu'il était malade. » La subordonnée exprime :",b:"la cause",f:["la conséquence","le but","le temps"],e:"« parce que » introduit la cause."},
 {t:"circonstancielle",q:"« Je parle fort pour que tout le monde m'entende. » La subordonnée exprime :",b:"le but",f:["la cause","la conséquence","la concession"],e:"« pour que » introduit le but, suivi du subjonctif."},
 {t:"circonstancielle",q:"« S'il fait beau, nous irons à la plage. » La subordonnée exprime :",b:"la condition",f:["le temps","la cause","le but"],e:"« si » introduit une condition (une hypothèse)."},
 {t:"circonstancielle",q:"« Il fait si froid que le lac a gelé. » La subordonnée exprime :",b:"la conséquence",f:["la cause","le but","la comparaison"],e:"« si … que » introduit la conséquence."},
 {t:"circonstancielle",q:"« Bien qu'il soit fatigué, il continue. » La subordonnée exprime :",b:"la concession (une opposition)",f:["la cause","la condition","le temps"],e:"« bien que » introduit une concession, suivie du subjonctif."},
 {t:"circonstancielle",q:"Complète : « Je t'attendrai jusqu'à ce que tu ___ . »",b:"reviennes",f:["reviens","reviendras","revenais"],e:"« jusqu'à ce que » est suivi du subjonctif : que tu reviennes."},
 {t:"circonstancielle",q:"Après « parce que », le verbe est :",b:"à l'indicatif",f:["au subjonctif","à l'infinitif","à l'impératif"],e:"La cause présentée comme réelle se met à l'indicatif."},
 // modes
 {t:"modes",q:"Dans « Range ta chambre ! », le verbe est :",b:"à l'impératif",f:["à l'indicatif","au subjonctif","au conditionnel"],e:"L'impératif exprime un ordre ou un conseil, sans sujet exprimé."},
 {t:"modes",q:"Dans « Si j'étais riche, je voyagerais », « voyagerais » est :",b:"au conditionnel présent",f:["au futur simple","à l'imparfait","au subjonctif"],e:"Si + imparfait, puis conditionnel : c'est une hypothèse."},
 {t:"modes",q:"Dans « Il faut que tu partes », « partes » est :",b:"au subjonctif présent",f:["à l'indicatif présent","au conditionnel","à l'impératif"],e:"« Il faut que » est toujours suivi du subjonctif."},
 {t:"modes",q:"Le conditionnel peut exprimer :",b:"une hypothèse, un souhait ou une demande polie",f:["uniquement un ordre","uniquement le passé","une action certaine"],e:"« Je voudrais… », « Si tu venais, on jouerait… »."},
 {t:"modes",q:"Quelle phrase est au conditionnel ?",b:"Je voudrais un verre d'eau.",f:["Je voudrai un verre d'eau demain.","Je veux un verre d'eau.","Je voulais un verre d'eau."],e:"Conditionnel : terminaison -rais. « Je voudrai » (sans s) est au futur."},
 {t:"modes",q:"« Je mangerai » et « je mangerais » : quelle est la différence ?",b:"le premier est au futur, le second au conditionnel",f:["aucune","le premier est au passé","le second est au subjonctif"],e:"Astuce : remplace par « il » — il mangera (futur), il mangerait (conditionnel)."},
 {t:"modes",q:"Le subjonctif s'emploie souvent après :",b:"il faut que, je veux que, bien que",f:["parce que, quand, après que","si, puisque, comme","je sais que, je pense que, il est sûr que"],e:"Le subjonctif exprime ce qui est voulu, souhaité, possible, pas certain."},
 // discours
 {t:"discours",q:"« Je suis fatigué », dit Léo. Au discours indirect, cela donne :",b:"Léo dit qu'il est fatigué.",f:["Léo dit que je suis fatigué.","Léo dit : il est fatigué.","Léo dit qu'il sera fatigué hier."],e:"On supprime les guillemets, on ajoute « que » et on change la personne : je → il."},
 {t:"discours",q:"Elle a dit : « Je viendrai demain. » Au discours indirect, cela donne :",b:"Elle a dit qu'elle viendrait le lendemain.",f:["Elle a dit que je viendrai demain.","Elle a dit qu'elle est venue le lendemain.","Elle a dit qu'elle venait hier."],e:"Verbe introducteur au passé : le futur devient conditionnel, et « demain » devient « le lendemain »."},
 {t:"discours",q:"Il demande : « Où est la gare ? » Au discours indirect, cela donne :",b:"Il demande où est la gare.",f:["Il demande : où est la gare.","Il demande que la gare est où.","Il demande où est-ce la gare ?"],e:"Au discours indirect, il n'y a plus de point d'interrogation ni d'inversion du sujet."},
 {t:"discours",q:"Quels signes annoncent souvent le discours direct ?",b:"les deux-points et les guillemets",f:["les parenthèses","les points de suspension","le point-virgule"],e:"Dans un dialogue, chaque changement d'interlocuteur est marqué par un tiret."},
 {t:"discours",q:"Il me demande : « Viens-tu ? » Au discours indirect, cela donne :",b:"Il me demande si je viens.",f:["Il me demande que je viens.","Il me demande viens-tu.","Il me demande est-ce que je viens ?"],e:"Une question fermée (réponse oui/non) est introduite par « si » au discours indirect."},
 {t:"discours",q:"Il a dit : « J'ai perdu mes clés. » → Il a dit qu'il ___ ses clés.",b:"avait perdu",f:["perdra","perdrait","perd"],e:"Verbe introducteur au passé : le passé composé devient plus-que-parfait."},
 {t:"discours",q:"Qu'est-ce qu'un verbe introducteur de parole ?",b:"un verbe qui annonce des paroles, comme dire, répondre, s'écrier",f:["un verbe à l'infinitif","un verbe d'état","un verbe au futur"],e:"Il précise souvent le ton : murmurer, crier, demander…"},
 // accord du participe passé
 {t:"accordpp",q:"Complète : « Les fleurs que j'ai ___ sont fanées. » (cueillir)",b:"cueillies",f:["cueilli","cueillis","cueillie"],e:"Avec avoir, accord avec le COD placé avant : « que » = les fleurs, féminin pluriel."},
 {t:"accordpp",q:"Complète : « Elles sont ___ tôt. » (partir)",b:"parties",f:["parti","partis","partie"],e:"Avec être, le participe passé s'accorde avec le sujet « elles »."},
 {t:"accordpp",q:"Complète : « Nous avons ___ des pommes. » (manger)",b:"mangé",f:["mangés","mangées","manger"],e:"Avec avoir, pas d'accord avec le sujet ; le COD « des pommes » est placé après."},
 {t:"accordpp",q:"Complète : « Ces lettres, je les ai ___ hier. » (écrire)",b:"écrites",f:["écrit","écris","écrits"],e:"Le COD « les » (= ces lettres) est placé avant : accord au féminin pluriel."},
 {t:"accordpp",q:"Complète : « Elles se sont ___ les mains. » (laver)",b:"lavé",f:["lavées","lavés","laver"],e:"Le COD « les mains » est après le verbe : pas d'accord."},
 {t:"accordpp",q:"Complète : « Elle s'est ___ dans le miroir. » (regarder)",b:"regardée",f:["regardé","regardés","regarder"],e:"Elle a regardé qui ? « s' » (elle-même), COD placé avant : accord au féminin."},
 {t:"accordpp",q:"Complète : « Les gâteaux que Lina a ___ étaient délicieux. » (préparer)",b:"préparés",f:["préparé","préparées","préparer"],e:"COD « que » (= les gâteaux) placé avant : masculin pluriel."},
 {t:"accordpp",q:"Complète : « La porte a été ___ par le vent. » (ouvrir)",b:"ouverte",f:["ouvert","ouverts","ouvrir"],e:"Voix passive (être) : accord avec le sujet « la porte »."},
 // accords difficiles
 {t:"accords",q:"Complète : « Elles sont ___ contentes. »",b:"toutes",f:["tout","tous","toute"],e:"Devant un adjectif féminin commençant par une consonne, « tout » s'accorde : toutes contentes."},
 {t:"accords",q:"Complète : « Il a acheté des chaussures ___ . » (marron)",b:"marron",f:["marrons","marronnes","marronne"],e:"Les adjectifs de couleur qui viennent d'un nom (marron, orange, crème) sont invariables."},
 {t:"accords",q:"Complète : « des robes ___ » (bleu foncé)",b:"bleu foncé",f:["bleues foncées","bleus foncés","bleues foncé"],e:"Un adjectif de couleur composé reste invariable."},
 {t:"accords",q:"Comment écrit-on 80 en lettres ?",b:"quatre-vingts",f:["quatre-vingt","quatres-vingts","quatre vingt"],e:"« vingt » prend un s quand il est multiplié et termine le nombre. Mais : quatre-vingt-deux."},
 {t:"accords",q:"Comment écrit-on 200 en lettres ?",b:"deux cents",f:["deux cent","deux-cent","deuxcents"],e:"« cent » prend un s quand il est multiplié et termine le nombre. Mais : deux cent trois."},
 {t:"accords",q:"Complète : « Je ___ ai donné un conseil. » (à eux)",b:"leur",f:["leurs","l'heure","leure"],e:"Devant un verbe, « leur » est un pronom personnel : il est invariable."},
 {t:"accords",q:"Complète : « Il est deux heures et ___ . »",b:"demie",f:["demi","demis","demies"],e:"Après le nom, « demi » s'accorde en genre : une heure → et demie. Avant le nom, il est invariable : une demi-heure."},
 {t:"accords",q:"Complète : « Ma sœur et mon frère sont ___ . » (gentil)",b:"gentils",f:["gentilles","gentil","gentille"],e:"Un nom féminin et un nom masculin : l'adjectif se met au masculin pluriel."},
 // homophones
 {t:"homophones",q:"Complète : « Il ___ lavé les mains. »",b:"s'est",f:["c'est","ses","ces"],e:"« s'est » : verbe pronominal (se laver) au passé composé ; on peut dire « je me suis lavé »."},
 {t:"homophones",q:"Complète : « ___ une belle journée. »",b:"C'est",f:["S'est","Ses","Ces"],e:"« c'est » = cela est."},
 {t:"homophones",q:"Complète : « Je ne sais pas ___ film choisir. »",b:"quel",f:["qu'elle","quelle","quelles"],e:"« quel » est un déterminant qui s'accorde avec « film », masculin singulier."},
 {t:"homophones",q:"Complète : « Il faut ___ vienne avec nous. »",b:"qu'elle",f:["quelle","quel","qu'elles"],e:"« qu'elle » = que + elle ; on peut remplacer par « qu'il »."},
 {t:"homophones",q:"Complète : « Il ___ pleuvoir demain. »",b:"peut",f:["peu","peux"],e:"« peut » est le verbe pouvoir ; on peut dire « pouvait »."},
 {t:"homophones",q:"Complète : « Je ne sais pas ___ il habite. »",b:"où",f:["ou"],e:"« où » indique le lieu ; « ou » signifie « ou bien »."},
 {t:"homophones",q:"Complète : « Il est parti ___ dire au revoir. »",b:"sans",f:["s'en","sang","cent"],e:"« sans » est une préposition, contraire de « avec »."},
 {t:"homophones",q:"Complète : « ___ à moi, je reste ici. »",b:"Quant",f:["Quand","Qu'en"],e:"« quant à » signifie « en ce qui concerne »."},
 {t:"homophones",q:"Complète : « Elle va ___ ses devoirs. » (terminer)",b:"terminer",f:["terminé","terminez","terminée"],e:"Après « aller », le verbe est à l'infinitif : on peut dire « elle va finir »."},
 // vocabulaire
 {t:"vocab",q:"Le préfixe grec « bio- » (biologie) signifie :",b:"la vie",f:["la terre","l'eau","le temps"],e:"biologie, biographie : la vie."},
 {t:"vocab",q:"Le suffixe « -phobe » (claustrophobe) signifie :",b:"qui a peur, qui déteste",f:["qui aime","qui mange","qui parle"],e:"Le contraire est « -phile » : qui aime."},
 {t:"vocab",q:"Un « philanthrope » est une personne :",b:"qui aime les êtres humains",f:["qui déteste les autres","qui étudie les plantes","qui collectionne les timbres"],e:"philo = aimer ; anthropos = l'être humain."},
 {t:"vocab",q:"« Se sustenter » (se nourrir) appartient au niveau de langue :",b:"soutenu",f:["familier","courant","argotique"],e:"Familier : bouffer ; courant : manger ; soutenu : se sustenter."},
 {t:"vocab",q:"Quel mot appartient au niveau de langue familier ?",b:"une bagnole",f:["une voiture","une automobile","un véhicule"],e:"« bagnole » s'emploie à l'oral, entre proches."},
 {t:"vocab",q:"« Avoir le cœur brisé » est employé :",b:"au sens figuré",f:["au sens propre","au sens médical","au sens scientifique"],e:"Le cœur n'est pas vraiment cassé : on parle d'un grand chagrin."},
 {t:"vocab",q:"Quel est l'antonyme (le contraire) de « optimiste » ?",b:"pessimiste",f:["joyeux","confiant","heureux"],e:"L'optimiste voit le bon côté ; le pessimiste, le mauvais."},
 {t:"vocab",q:"Le suffixe « -cide » (insecticide) signifie :",b:"qui tue",f:["qui protège","qui nourrit","qui soigne"],e:"Du latin caedere, tuer : insecticide, pesticide."},
 // littérature du XIXe siècle
 {t:"litt19",q:"Qui est l'auteur de la nouvelle « La Parure » ?",b:"Guy de Maupassant",f:["Victor Hugo","Molière","Jean de La Fontaine"],e:"Maupassant (1850-1893) a écrit plus de 300 nouvelles."},
 {t:"litt19",q:"Qui a écrit « Les Misérables » (1862) ?",b:"Victor Hugo",f:["Émile Zola","Guy de Maupassant","Honoré de Balzac"],e:"Le roman raconte la vie de Jean Valjean, ancien forçat."},
 {t:"litt19",q:"Pourquoi Victor Hugo a-t-il vécu en exil de 1851 à 1870 ?",b:"parce qu'il s'opposait à Napoléon III",f:["parce qu'il était recherché pour vol","pour faire fortune en Amérique","parce qu'il était malade"],e:"Opposé au coup d'État de 1851, il s'exile à Jersey puis à Guernesey."},
 {t:"litt19",q:"Le réalisme, au XIXe siècle, cherche à :",b:"représenter la réalité, y compris la vie des gens ordinaires",f:["raconter des contes de fées","imiter les auteurs de l'Antiquité","décrire seulement les rois"],e:"Balzac, Flaubert, Maupassant observent la société de leur temps."},
 {t:"litt19",q:"Une nouvelle est :",b:"un récit bref, avec peu de personnages, souvent terminé par une chute",f:["un long roman en plusieurs tomes","un poème en alexandrins","une pièce de théâtre"],e:"La chute est une fin inattendue qui surprend le lecteur."},
 {t:"litt19",q:"Quel écrivain fut le maître et l'ami de Maupassant ?",b:"Gustave Flaubert",f:["Molière","Voltaire","Jules Verne"],e:"Flaubert, auteur de « Madame Bovary », a guidé ses débuts."},
 {t:"litt19",q:"Émile Zola est le chef de file du :",b:"naturalisme",f:["romantisme","classicisme","surréalisme"],e:"Ses romans, comme « Germinal », décrivent la société avec une précision presque scientifique."},
 {t:"litt19",q:"« Les Contemplations » est un recueil de poèmes de :",b:"Victor Hugo",f:["Guy de Maupassant","Émile Zola","Honoré de Balzac"],e:"Hugo y évoque notamment la mort de sa fille Léopoldine."},
 {t:"litt19",q:"Balzac a regroupé ses romans sous le titre :",b:"La Comédie humaine",f:["Les Rougon-Macquart","Les Misérables","Les Fleurs du mal"],e:"« Les Rougon-Macquart » est le cycle de Zola."},
 // fantastique
 {t:"fantastique",q:"Le récit fantastique se caractérise par :",b:"l'hésitation entre une explication rationnelle et une explication surnaturelle",f:["des fées et des dragons acceptés par tous","un voyage dans le futur","une enquête policière résolue"],e:"Le personnage et le lecteur ne savent pas s'il faut croire au surnaturel."},
 {t:"fantastique",q:"« Le Horla » est une nouvelle fantastique de :",b:"Guy de Maupassant",f:["Victor Hugo","Prosper Mérimée","Molière"],e:"Le narrateur, dans son journal, se croit hanté par un être invisible."},
 {t:"fantastique",q:"« La Vénus d'Ille » est une nouvelle fantastique de :",b:"Prosper Mérimée",f:["Guy de Maupassant","Émile Zola","Jules Verne"],e:"Une statue de bronze semble prendre vie."},
 {t:"fantastique",q:"Au début d'un récit fantastique, le cadre est en général :",b:"réaliste et quotidien",f:["un royaume imaginaire","une autre planète","un monde de magiciens"],e:"Le surnaturel surgit ensuite dans un monde qui ressemble au nôtre."},
 {t:"fantastique",q:"Quelle est la différence entre le fantastique et le merveilleux ?",b:"dans le merveilleux, le surnaturel est accepté sans surprise",f:["il n'y en a aucune","le merveilleux fait toujours peur","le fantastique se passe toujours dans l'espace"],e:"Dans un conte, personne ne s'étonne qu'une fée apparaisse ; dans le fantastique, on doute."},
 {t:"fantastique",q:"Quel champ lexical domine souvent dans un récit fantastique ?",b:"celui de la peur",f:["celui de la cuisine","celui du sport","celui de l'école"],e:"Angoisse, terreur, frisson, trembler… : la peur gagne le narrateur."},
 // théâtre
 {t:"theatre",q:"Au théâtre, une didascalie est :",b:"une indication de mise en scène pour les acteurs",f:["une longue réplique","un personnage secondaire","la fin de la pièce"],e:"Souvent en italique : gestes, ton, décor."},
 {t:"theatre",q:"Une tirade est :",b:"une longue réplique d'un personnage",f:["un dialogue rapide","une indication de décor","un chant"],e:"Le personnage parle longtemps sans être interrompu."},
 {t:"theatre",q:"Un monologue est :",b:"le discours d'un personnage seul sur scène",f:["un dialogue entre deux personnages","une indication scénique","un résumé de la pièce"],e:"Le personnage exprime ses pensées à voix haute."},
 {t:"theatre",q:"Un aparté est :",b:"une réplique entendue par le public mais pas par les autres personnages",f:["une scène coupée","un entracte","une réplique chantée"],e:"Il crée une complicité avec les spectateurs."},
 {t:"theatre",q:"Une pièce de théâtre classique est divisée en :",b:"actes et scènes",f:["chapitres et paragraphes","strophes et vers seulement","tomes"],e:"Une nouvelle scène commence souvent quand un personnage entre ou sort."},
 {t:"theatre",q:"Le drame romantique, comme « Ruy Blas » de Victor Hugo :",b:"mélange le comique et le tragique",f:["respecte strictement la règle des trois unités","est toujours une comédie","n'a qu'un seul personnage"],e:"Hugo refuse la séparation des genres du théâtre classique."},
 {t:"theatre",q:"La « bataille d'Hernani » (1830) oppose :",b:"les partisans du drame romantique et ceux du théâtre classique",f:["deux armées napoléoniennes","Molière et Racine","des acteurs et des musiciens"],e:"La pièce de Victor Hugo provoque un grand scandale lors des premières représentations."},
 // argumentation
 {t:"argu",q:"Dans un texte argumentatif, la thèse est :",b:"l'opinion défendue par l'auteur",f:["un exemple","la conclusion d'un récit","un personnage"],e:"Les arguments servent à la justifier."},
 {t:"argu",q:"Un argument sert à :",b:"justifier la thèse",f:["raconter une histoire","décrire un paysage","poser une question"],e:"Il donne une raison de penser que la thèse est juste."},
 {t:"argu",q:"Un exemple sert à :",b:"illustrer un argument par un fait concret",f:["remplacer la thèse","contredire l'auteur","conclure le texte"],e:"Il rend l'argument plus concret et plus convaincant."},
 {t:"argu",q:"Convaincre, c'est surtout faire appel :",b:"à la raison",f:["aux émotions","à la peur","à la force"],e:"Persuader, c'est plutôt faire appel aux sentiments."},
 {t:"argu",q:"Faire une concession, c'est :",b:"reconnaître en partie l'avis adverse avant de défendre le sien",f:["abandonner sa thèse","insulter son adversaire","donner un exemple"],e:"« Certes…, mais… » : on admet un point pour mieux convaincre."},
 {t:"argu",q:"« Il faut lire, car la lecture enrichit le vocabulaire. » Quel est l'argument ?",b:"la lecture enrichit le vocabulaire",f:["il faut lire","car","le vocabulaire"],e:"La thèse est « il faut lire » ; « car » introduit l'argument."},
 {t:"argu",q:"Réfuter une thèse, c'est :",b:"la contester avec des arguments",f:["la répéter","l'illustrer par un exemple","la recopier"],e:"On montre qu'elle est fausse ou discutable."},
 // connecteurs
 {t:"connecteurs",q:"Le connecteur « cependant » exprime :",b:"l'opposition",f:["la cause","la conséquence","l'addition"],e:"Comme « pourtant », « mais », « néanmoins »."},
 {t:"connecteurs",q:"Le connecteur « donc » exprime :",b:"la conséquence",f:["la cause","l'opposition","le but"],e:"Comme « c'est pourquoi », « ainsi », « par conséquent »."},
 {t:"connecteurs",q:"Le connecteur « car » exprime :",b:"la cause",f:["la conséquence","l'opposition","le temps"],e:"Comme « parce que », « puisque », « en effet »."},
 {t:"connecteurs",q:"« De plus » sert à :",b:"ajouter un argument",f:["s'opposer","conclure","donner une cause"],e:"Comme « en outre », « par ailleurs », « également »."},
 {t:"connecteurs",q:"Quel connecteur exprime la cause ?",b:"puisque",f:["pourtant","c'est pourquoi","ensuite"],e:"« puisque » présente une cause connue de tous."},
 {t:"connecteurs",q:"Complète : « Il pleut, ___ le match est annulé. »",b:"c'est pourquoi",f:["pourtant","car","bien que"],e:"La pluie entraîne l'annulation : c'est une conséquence."},
 // figures de style
 {t:"figures",q:"« Il est fort comme un bœuf » : quelle figure de style ?",b:"une comparaison",f:["une métaphore","une antithèse","une anaphore"],e:"Il y a un outil de comparaison : « comme »."},
 {t:"figures",q:"« Cette fille est une fée » : quelle figure de style ?",b:"une métaphore",f:["une comparaison","une hyperbole","une personnification"],e:"On rapproche deux éléments sans outil de comparaison."},
 {t:"figures",q:"« Je meurs de faim ! » : quelle figure de style ?",b:"une hyperbole",f:["une litote","une comparaison","une anaphore"],e:"L'hyperbole exagère pour frapper les esprits."},
 {t:"figures",q:"« Le vent hurlait dans la nuit » : quelle figure de style ?",b:"une personnification",f:["une comparaison","une antithèse","une hyperbole"],e:"On prête au vent un comportement humain."},
 {t:"figures",q:"« Cette obscure clarté qui tombe des étoiles » (Corneille) : quelle figure de style ?",b:"un oxymore",f:["une comparaison","une anaphore","une hyperbole"],e:"Deux mots de sens opposés sont associés : obscure / clarté."},
 {t:"figures",q:"Répéter le même mot en début de plusieurs vers ou phrases, c'est :",b:"une anaphore",f:["une antithèse","une métaphore","un oxymore"],e:"L'anaphore crée un effet d'insistance."},
 {t:"figures",q:"« Il nous a quittés » pour dire « il est mort » : quelle figure de style ?",b:"un euphémisme",f:["une hyperbole","une comparaison","une anaphore"],e:"L'euphémisme adoucit une réalité pénible."}
];
function exoFrancais(tag){
  if(tag==="subjonctif")return alea(0,3)?conjuguer("subj"):parTag(BANQUE_F,"modes");
  if(tag==="conditionnel")return alea(0,3)?conjuguer("cond"):parTag(BANQUE_F,"modes");
  if(tag==="conjug")return conjuguer(pioche(["subj","cond","imp","fut","ps"]));
  if(tag==="modes"&&alea(0,1))return conjuguer(pioche(["subj","cond"]));
  return parTag(BANQUE_F,tag);
}

/* ---------- ANGLAIS (niveau A2) ---------- */
const VOC_EN=[["a traffic jam",["un embouteillage","un bouchon"]],["the town hall",["la mairie","l'hôtel de ville"]],["a neighbour",["un voisin","une voisine"]],["a journey",["un voyage","un trajet"]],["luggage",["les bagages"]],["a suitcase",["une valise"]],["a passport",["un passeport"]],["rubbish",["les déchets","les ordures"]],["to recycle",["recycler"]],["pollution",["la pollution"]],["a team",["une équipe"]],["to win",["gagner"]],["the weather forecast",["la météo","les prévisions météo"]],["a building",["un bâtiment","un immeuble"]],["a bridge",["un pont"]],["a headache",["un mal de tête","une migraine"]],["a nurse",["un infirmier","une infirmière"]],["the underground",["le métro"]],["a shop assistant",["un vendeur","une vendeuse"]],["a library",["une bibliothèque"]],["the countryside",["la campagne"]],["a flight",["un vol"]],["healthy",["en bonne santé","sain"]],["to borrow",["emprunter"]]];
const IRREG=[["go","went","gone"],["eat","ate","eaten"],["see","saw","seen"],["take","took","taken"],["write","wrote","written"],["break","broke","broken"],["choose","chose","chosen"],["drive","drove","driven"],["fly","flew","flown"],["forget","forgot","forgotten"],["know","knew","known"],["speak","spoke","spoken"],["steal","stole","stolen"],["wear","wore","worn"],["buy","bought","bought"],["bring","brought","brought"],["catch","caught","caught"],["teach","taught","taught"],["think","thought","thought"],["leave","left","left"],["lose","lost","lost"],["meet","met","met"],["sell","sold","sold"],["tell","told","told"],["begin","began","begun"],["drink","drank","drunk"],["swim","swam","swum"],["sing","sang","sung"],["become","became","become"],["come","came","come"],["run","ran","run"],["give","gave","given"],["do","did","done"],["make","made","made"],["sleep","slept","slept"],["find","found","found"]];
const GRAM_EN=[
 {t:"presents",q:"Listen! The baby ___ .",b:"is crying",f:["cries","cry","crying"],e:"« Listen! » : l'action se passe maintenant → present continuous (be + V-ing)."},
 {t:"presents",q:"My father ___ to work by bus every day.",b:"goes",f:["is going","go","going"],e:"« every day » : une habitude → present simple, avec -es à la 3e personne."},
 {t:"presents",q:"She usually ___ tea in the morning.",b:"drinks",f:["is drinking","drink","drinking"],e:"« usually » : une habitude → present simple."},
 {t:"presents",q:"Look! They ___ football in the park.",b:"are playing",f:["play","plays","is playing"],e:"« Look! » : action en cours → are + playing."},
 {t:"presents",q:"___ he like horror films?",b:"Does",f:["Do","Is","Has"],e:"Question au present simple, 3e personne du singulier : Does + sujet + base verbale."},
 {t:"presents",q:"I ___ my homework right now.",b:"am doing",f:["do","does","doing"],e:"« right now » : en ce moment → present continuous."},
 {t:"past",q:"Yesterday, I ___ my grandparents.",b:"visited",f:["visit","visits","was visit"],e:"« Yesterday » : passé terminé → past simple ; verbe régulier en -ed."},
 {t:"past",q:"Last summer, we ___ to Scotland.",b:"went",f:["go","goed","gone"],e:"go → went → gone : verbe irrégulier."},
 {t:"past",q:"She ___ a strange noise last night.",b:"heard",f:["heared","hear","hears"],e:"hear → heard : verbe irrégulier."},
 {t:"past",q:"___ you see the match yesterday?",b:"Did",f:["Do","Were","Have"],e:"Question au past simple : Did + sujet + base verbale."},
 {t:"past",q:"They ___ not come to the party.",b:"did",f:["do","were","does"],e:"Négation au past simple : did not (didn't) + base verbale."},
 {t:"past",q:"In 1969, Neil Armstrong ___ on the Moon.",b:"walked",f:["walks","has walked","walk"],e:"Date passée précise → past simple."},
 {t:"pastcont",q:"At 8 o'clock yesterday evening, I ___ dinner.",b:"was having",f:["were having","had have","am having"],e:"Action en cours à un moment du passé : was/were + V-ing. I → was."},
 {t:"pastcont",q:"While they ___ TV, the phone rang.",b:"were watching",f:["was watching","watched","are watching"],e:"L'action longue (en cours) est au past continuous ; they → were."},
 {t:"pastcont",q:"What ___ you doing when the lights went out?",b:"were",f:["was","did","are"],e:"Past continuous : were + you + V-ing."},
 {t:"pastcont",q:"She was reading when somebody ___ at the door.",b:"knocked",f:["was knock","knocks","knocking"],e:"L'action courte qui interrompt est au past simple."},
 {t:"pastcont",q:"It ___ raining when we left the cinema.",b:"was",f:["were","is","did"],e:"It → was + V-ing."},
 {t:"pastcont",q:"Le past continuous se forme avec :",b:"was/were + verbe en -ing",f:["did + base verbale","have + participe passé","will + base verbale"],e:"Exemple : I was sleeping."},
 {t:"comparatif",q:"My brother is ___ than me.",b:"taller",f:["more tall","tallest","the taller"],e:"Adjectif court : adjectif + -er + than."},
 {t:"comparatif",q:"This film is ___ than the book.",b:"more interesting",f:["interestinger","most interesting","more interestinger"],e:"Adjectif long : more + adjectif + than."},
 {t:"comparatif",q:"Everest is the ___ mountain in the world.",b:"highest",f:["higher","most high","more high"],e:"Superlatif d'un adjectif court : the + adjectif + -est."},
 {t:"comparatif",q:"Today the weather is ___ than yesterday. (bad)",b:"worse",f:["badder","more bad","worst"],e:"bad → worse → the worst : forme irrégulière."},
 {t:"comparatif",q:"This is the ___ day of my life! (good)",b:"best",f:["goodest","better","most good"],e:"good → better → the best : forme irrégulière."},
 {t:"comparatif",q:"My bag is as heavy ___ yours.",b:"as",f:["than","that","like"],e:"Égalité : as + adjectif + as."},
 {t:"comparatif",q:"This exercise is ___ than the first one. (easy)",b:"easier",f:["easyer","more easy","easiest"],e:"Adjectif en -y : le y devient i, puis -er."},
 {t:"modaux",q:"In the lab, you ___ wear safety glasses: it's the rule.",b:"must",f:["mustn't","can't","don't have to"],e:"must = obligation."},
 {t:"modaux",q:"You ___ run in the corridors: it's forbidden.",b:"mustn't",f:["must","have to","can"],e:"mustn't = interdiction."},
 {t:"modaux",q:"You look tired. You ___ go to bed earlier.",b:"should",f:["mustn't","can't","shouldn't"],e:"should = conseil."},
 {t:"modaux",q:"I ___ swim when I was five.",b:"could",f:["can","must","should"],e:"could = capacité dans le passé."},
 {t:"modaux",q:"It's Sunday: you don't ___ get up early.",b:"have to",f:["must","should","can"],e:"don't have to = absence d'obligation."},
 {t:"modaux",q:"She ___ to wear a uniform at school.",b:"has",f:["have","must","is"],e:"have to à la 3e personne : she has to."},
 {t:"modaux",q:"« You mustn't » exprime :",b:"une interdiction",f:["une absence d'obligation","une capacité","une permission"],e:"À ne pas confondre avec « you don't have to » (ce n'est pas obligatoire)."},
 {t:"presperfect",q:"I have ___ this film three times.",b:"seen",f:["saw","see","seeing"],e:"Present perfect : have/has + participe passé (see → saw → seen)."},
 {t:"presperfect",q:"She ___ never been to London.",b:"has",f:["have","is","did"],e:"3e personne du singulier : has + participe passé."},
 {t:"presperfect",q:"___ you ever eaten sushi?",b:"Have",f:["Did","Has","Do"],e:"« ever » : expérience de la vie → present perfect."},
 {t:"presperfect",q:"We ___ in this house since 2020.",b:"have lived",f:["live","lived","are living"],e:"Une situation qui a commencé dans le passé et dure encore → present perfect + since."},
 {t:"presperfect",q:"Yesterday I ___ to the cinema.",b:"went",f:["have gone","have went","go"],e:"« Yesterday » : moment passé précis → past simple, pas present perfect."},
 {t:"presperfect",q:"He has lived here ___ ten years.",b:"for",f:["since","during","ago"],e:"for + durée ; since + point de départ."},
 {t:"presperfect",q:"She has worked here ___ 2019.",b:"since",f:["for","ago","during"],e:"since + point de départ (une date)."},
 {t:"futur",q:"Tomorrow it ___ be sunny.",b:"will",f:["wills","is will","does"],e:"will + base verbale, invariable."},
 {t:"futur",q:"I ___ going to visit my cousins next week.",b:"am",f:["will","is","do"],e:"be going to : un projet déjà décidé. I → am."},
 {t:"futur",q:"Next year, my sister ___ 15.",b:"will be",f:["will is","is going","be"],e:"will + base verbale : will be."},
 {t:"futur",q:"They ___ going to buy a new car.",b:"are",f:["is","will","do"],e:"They → are going to."},
 {t:"futur",q:"La forme négative de « will » est :",b:"won't",f:["willn't","don't will","not will"],e:"will not = won't."},
 {t:"futur",q:"I'm sure you ___ pass your exam.",b:"will",f:["are","going","be"],e:"Prédiction : will + base verbale."},
 {t:"ifclause",q:"If it rains, we ___ at home.",b:"will stay",f:["will stays","stayed","staying"],e:"If + present simple, will + base verbale."},
 {t:"ifclause",q:"If you heat ice, it ___ .",b:"melts",f:["melt","melted","melting"],e:"Vérité générale : if + present, present."},
 {t:"ifclause",q:"If she ___ hard, she will pass.",b:"works",f:["will work","work","working"],e:"Après if, pas de will : present simple."},
 {t:"ifclause",q:"I will call you if I ___ time.",b:"have",f:["will have","has","having"],e:"Après if : present simple, même pour parler du futur."},
 {t:"ifclause",q:"If we don't hurry, we ___ the bus.",b:"will miss",f:["will missing","missed","misses"],e:"Conséquence future : will + base verbale."},
 {t:"ifclause",q:"If you are hungry, ___ a sandwich!",b:"eat",f:["eats","eating","ate"],e:"Conseil ou ordre : impératif (base verbale)."},
 {t:"relatifs",q:"The girl ___ lives next door is my friend.",b:"who",f:["which","where","whose"],e:"who pour une personne."},
 {t:"relatifs",q:"This is the book ___ I told you about.",b:"which",f:["who","where","whose"],e:"which (ou that) pour une chose."},
 {t:"relatifs",q:"The town ___ I was born is small.",b:"where",f:["which","who","whose"],e:"where pour un lieu."},
 {t:"relatifs",q:"I have a friend ___ father is a pilot.",b:"whose",f:["who","which","where"],e:"whose = dont le / dont la (possession)."},
 {t:"relatifs",q:"The dog ___ is barking is ours.",b:"which",f:["who","where","whose"],e:"which pour un animal ou une chose."},
 {t:"relatifs",q:"« Who » s'emploie pour :",b:"une personne",f:["une chose","un lieu","un moment"],e:"who : personne ; which : chose ; where : lieu ; whose : possession."},
 {t:"quantif",q:"How ___ apples do you want?",b:"many",f:["much","a lot","any"],e:"many + nom dénombrable au pluriel."},
 {t:"quantif",q:"How ___ water do you drink?",b:"much",f:["many","lot","few"],e:"much + nom indénombrable."},
 {t:"quantif",q:"There isn't ___ milk left.",b:"any",f:["some","many","a"],e:"any dans les phrases négatives et interrogatives."},
 {t:"quantif",q:"Would you like ___ tea?",b:"some",f:["any","many","a few of"],e:"some dans les propositions polies."},
 {t:"quantif",q:"There are ___ of people here.",b:"a lot",f:["much","many","few"],e:"a lot of + nom, dénombrable ou non."},
 {t:"quantif",q:"I have ___ money: only one pound.",b:"little",f:["many","few","a lot"],e:"little + indénombrable = peu de."},
 {t:"quantif",q:"« Much » s'emploie avec :",b:"les noms indénombrables",f:["les noms dénombrables au pluriel","les verbes","les adjectifs"],e:"much water, much time ; mais many books."},
 {t:"culture",q:"What is the capital of Scotland?",b:"Edinburgh",f:["Glasgow","Dublin","Cardiff"],e:"Cardiff est la capitale du pays de Galles, Dublin celle de l'Irlande."},
 {t:"culture",q:"On which day do Americans celebrate Independence Day?",b:"July 4th",f:["December 25th","November 11th","January 1st"],e:"La Déclaration d'indépendance date du 4 juillet 1776."},
 {t:"culture",q:"In the USA, Thanksgiving is celebrated in:",b:"November",f:["July","March","June"],e:"Le quatrième jeudi de novembre."},
 {t:"culture",q:"Bonfire Night (Guy Fawkes Night) is on:",b:"November 5th",f:["October 31st","December 26th","July 4th"],e:"On y fête l'échec du complot des poudres de 1605."},
 {t:"culture",q:"Which country is NOT part of the United Kingdom?",b:"the Republic of Ireland",f:["Scotland","Wales","Northern Ireland"],e:"Le Royaume-Uni : Angleterre, Écosse, pays de Galles et Irlande du Nord."},
 {t:"culture",q:"Who has been the King of the United Kingdom since 2022?",b:"Charles III",f:["George VI","William V","Henry VIII"],e:"Charles III a succédé à sa mère Elizabeth II en septembre 2022."},
 {t:"culture",q:"What is the capital of Australia?",b:"Canberra",f:["Sydney","Melbourne","Perth"],e:"Sydney est la plus grande ville, mais Canberra est la capitale."},
 {t:"vocab",q:"Comment dit-on « un embouteillage » ?",b:"a traffic jam",f:["a traffic light","a crossroads","a car park"],e:"traffic light = feu tricolore ; crossroads = carrefour."},
 {t:"vocab",q:"Comment dit-on « un billet aller-retour » (anglais britannique) ?",b:"a return ticket",f:["a single ticket","a back ticket","a round ticket"],e:"single = aller simple ; return = aller-retour."},
 {t:"vocab",q:"Comment dit-on « le réchauffement climatique » ?",b:"global warming",f:["global cooling","warm world","climate heat"],e:"climate change = le changement climatique."},
 {t:"vocab",q:"Comment dit-on « avoir mal à la tête » ?",b:"to have a headache",f:["to have a toothache","to have a stomachache","to have a cold"],e:"head = tête, tooth = dent, stomach = ventre."},
 {t:"vocab",q:"Comment dit-on « s'entraîner » (en sport) ?",b:"to train",f:["to win","to lose","to cheer"],e:"win = gagner, lose = perdre, cheer = encourager."},
 {t:"vocab",q:"Which word is NOT a means of transport?",b:"a pavement",f:["a bus","a tram","a ferry"],e:"a pavement = un trottoir."},
 {t:"vocab",q:"Comment dit-on « la mairie » ?",b:"the town hall",f:["the town square","the city wall","the mayor"],e:"the mayor = le maire."}
];
function exoAnglais(tag){
  const traduction=()=>{const p=pioche(VOC_EN);return saisie(`Traduis en français : « ${p[0]} »`,p[1],`« ${p[0]} » se traduit par « ${p[1].join(" » ou « ")} ».`);};
  const irregulier=k=>{const p=pioche(IRREG),nom=k===1?"prétérit":"participe passé";return saisie(`Donne le ${nom} de « to ${p[0]} »`,[p[k]],`to ${p[0]} → ${p[1]} → ${p[2]} : verbe irrégulier, à apprendre par cœur.`);};
  if(tag==="vocab")return alea(0,1)?traduction():qcmEn("vocab");
  const r=alea(1,6);
  if(r===1)return traduction();
  if(r===2||(r===3&&["past","pastcont","presperfect"].includes(tag)))return irregulier(tag==="presperfect"?2:(tag==="past"||tag==="pastcont")?1:alea(1,2));
  return qcmEn(tag);
}
function qcmEn(tag){const f=tag==="grammar"?GRAM_EN:GRAM_EN.filter(x=>x.t===tag);const x=pioche(f.length?f:GRAM_EN);return qcm(x.q.includes("___")?`Complète : ${x.q}`:x.q,x.b,x.f,x.e);}

/* ---------- SCIENCES : SVT, PHYSIQUE-CHIMIE, TECHNOLOGIE ---------- */
const BANQUE_S=[
 {t:"atomes",q:"Une molécule est constituée :",b:"d'atomes liés entre eux",f:["de cellules","de mélanges","de gouttes d'eau"],e:"Par exemple, la molécule d'eau H₂O est formée de 2 atomes d'hydrogène et 1 atome d'oxygène."},
 {t:"atomes",q:"Quelle est la formule de la molécule d'eau ?",b:"H₂O",f:["HO₂","H₂O₂","O₂"],e:"2 atomes d'hydrogène (H) et 1 atome d'oxygène (O)."},
 {t:"atomes",q:"La molécule de dioxyde de carbone CO₂ contient :",b:"1 atome de carbone et 2 atomes d'oxygène",f:["2 atomes de carbone et 1 atome d'oxygène","1 atome de carbone et 1 atome d'oxygène","2 atomes de cobalt"],e:"Le chiffre en indice indique le nombre d'atomes de l'élément qui le précède."},
 {t:"atomes",q:"Quel est le symbole de l'atome de fer ?",b:"Fe",f:["F","Fr","Fi"],e:"Fe vient du latin ferrum. F est le symbole du fluor."},
 {t:"atomes",q:"Quel est le symbole de l'atome de cuivre ?",b:"Cu",f:["C","Co","Cr"],e:"Cu vient du latin cuprum. C est le carbone."},
 {t:"atomes",q:"Le dioxygène a pour formule :",b:"O₂",f:["O","2O","CO₂"],e:"« di » = deux atomes d'oxygène liés."},
 {t:"atomes",q:"L'air est principalement composé de :",b:"diazote (environ 78 %) et dioxygène (environ 21 %)",f:["dioxygène (78 %) et diazote (21 %)","dioxyde de carbone et vapeur d'eau","hydrogène et hélium"],e:"Il reste environ 1 % d'autres gaz (argon, dioxyde de carbone…)."},
 {t:"atomes",q:"Combien d'atomes la molécule de méthane CH₄ contient-elle au total ?",b:"5",f:["4","2","6"],e:"1 atome de carbone + 4 atomes d'hydrogène = 5 atomes."},
 {t:"transfo",q:"Lors d'une transformation chimique :",b:"des réactifs disparaissent et des produits se forment",f:["la matière disparaît","rien ne change","seul l'état physique change"],e:"De nouvelles espèces chimiques apparaissent."},
 {t:"transfo",q:"La fusion de la glace est :",b:"une transformation physique",f:["une transformation chimique","une combustion","une réaction avec l'air"],e:"L'eau reste de l'eau : seul son état change (solide → liquide)."},
 {t:"transfo",q:"Au cours d'une transformation chimique, la masse totale :",b:"se conserve",f:["augmente toujours","diminue toujours","devient nulle"],e:"La masse des réactifs consommés est égale à la masse des produits formés."},
 {t:"transfo",q:"Pourquoi la masse se conserve-t-elle lors d'une transformation chimique ?",b:"parce que les atomes se conservent : ils se réarrangent",f:["parce que les molécules ne changent pas","parce que des atomes disparaissent","parce que la température ne change pas"],e:"Les atomes des réactifs se réorganisent pour former les molécules des produits."},
 {t:"transfo",q:"Quel test met en évidence le dioxyde de carbone ?",b:"l'eau de chaux qui se trouble",f:["le sulfate de cuivre anhydre qui bleuit","une bûchette qui se rallume","un aimant qui attire le gaz"],e:"L'eau de chaux devient trouble (blanchâtre) en présence de CO₂."},
 {t:"transfo",q:"Le sulfate de cuivre anhydre (blanc) devient bleu en présence :",b:"d'eau",f:["de dioxygène","de dioxyde de carbone","de sel"],e:"C'est le test de l'eau."},
 {t:"transfo",q:"Dans l'équation C + O₂ → CO₂, quels sont les réactifs ?",b:"le carbone et le dioxygène",f:["le dioxyde de carbone","le carbone seulement","le dioxygène seulement"],e:"Les réactifs sont à gauche de la flèche, les produits à droite."},
 {t:"transfo",q:"Quel chimiste du XVIIIe siècle a montré la conservation de la masse ?",b:"Antoine Lavoisier",f:["Isaac Newton","Louis Pasteur","Charles Darwin"],e:"On lui attribue la formule « Rien ne se perd, rien ne se crée, tout se transforme »."},
 {t:"combustion",q:"Quels sont les trois éléments du triangle du feu ?",b:"un combustible, un comburant et une source de chaleur",f:["de l'eau, du sable et du vent","un combustible, de l'eau et de la fumée","du bois, du papier et du carton"],e:"Si l'un des trois manque, le feu s'éteint."},
 {t:"combustion",q:"Le comburant le plus courant est :",b:"le dioxygène de l'air",f:["le diazote","le bois","le dioxyde de carbone"],e:"Le combustible brûle grâce au dioxygène."},
 {t:"combustion",q:"La combustion complète du carbone produit :",b:"du dioxyde de carbone",f:["de l'eau seulement","du dioxygène","du diazote"],e:"C + O₂ → CO₂."},
 {t:"combustion",q:"La combustion complète du méthane (gaz de ville) produit :",b:"du dioxyde de carbone et de l'eau",f:["du dioxygène et de l'eau","du carbone seulement","du diazote"],e:"CH₄ + 2 O₂ → CO₂ + 2 H₂O."},
 {t:"combustion",q:"Une combustion incomplète, par manque de dioxygène, peut produire un gaz mortel :",b:"le monoxyde de carbone (CO)",f:["le dioxygène (O₂)","le diazote (N₂)","la vapeur d'eau (H₂O)"],e:"Ce gaz est invisible et sans odeur : il faut entretenir les appareils et aérer."},
 {t:"combustion",q:"Pour éteindre un feu d'huile dans une poêle, il faut :",b:"le couvrir pour le priver de dioxygène",f:["jeter de l'eau dessus","souffler dessus","ajouter de l'huile"],e:"On retire le comburant. L'eau projetterait l'huile enflammée."},
 {t:"combustion",q:"Dans une combustion, le combustible est :",b:"la matière qui brûle (bois, gaz, cire…)",f:["le dioxygène","la flamme","la fumée"],e:"Le comburant est le dioxygène."},
 {t:"elec",q:"La tension électrique se mesure en :",b:"volts (V)",f:["ampères (A)","ohms (Ω)","grammes (g)"],e:"On la mesure avec un voltmètre."},
 {t:"elec",q:"L'intensité du courant électrique se mesure en :",b:"ampères (A)",f:["volts (V)","ohms (Ω)","mètres (m)"],e:"On la mesure avec un ampèremètre."},
 {t:"elec",q:"Comment branche-t-on un voltmètre ?",b:"en dérivation, aux bornes du dipôle",f:["en série dans le circuit","à la place de la pile","sans le relier au circuit"],e:"Ses deux bornes sont reliées aux deux bornes du dipôle étudié."},
 {t:"elec",q:"Comment branche-t-on un ampèremètre ?",b:"en série dans le circuit",f:["en dérivation","aux bornes de la pile seulement","à l'extérieur du circuit"],e:"Le courant doit le traverser."},
 {t:"elec",q:"Dans un circuit en série, l'intensité du courant :",b:"est la même en tout point",f:["diminue après chaque lampe","est nulle après la lampe","double après chaque lampe"],e:"C'est la loi d'unicité de l'intensité."},
 {t:"elec",q:"Deux lampes sont branchées en dérivation aux bornes d'une pile de 4,5 V. Quelle est la tension aux bornes de chaque lampe ?",b:"4,5 V",f:["2,25 V","9 V","0 V"],e:"Des dipôles en dérivation ont la même tension à leurs bornes."},
 {t:"elec",q:"Un générateur de 6 V alimente deux dipôles en série. La tension aux bornes du premier est 2,5 V. Celle aux bornes du second est :",b:"3,5 V",f:["6 V","2,5 V","8,5 V"],e:"Loi d'additivité des tensions en série : 6 − 2,5 = 3,5 V."},
 {t:"elec",q:"Dans un circuit avec deux branches en dérivation, le courant principal vaut 0,5 A et l'une des branches 0,2 A. L'autre branche :",b:"0,3 A",f:["0,7 A","0,5 A","0,2 A"],e:"Loi des nœuds : l'intensité principale est la somme des intensités des branches."},
 {t:"ohm",q:"La loi d'Ohm s'écrit :",b:"U = R × I",f:["U = R + I","I = U × R","R = U × I"],e:"U en volts, R en ohms, I en ampères."},
 {t:"ohm",q:"La résistance électrique s'exprime en :",b:"ohms (Ω)",f:["volts (V)","ampères (A)","watts (W)"],e:"On la mesure avec un ohmmètre."},
 {t:"ohm",q:"Dans un circuit en série, une résistance sert à :",b:"limiter l'intensité du courant",f:["augmenter la tension de la pile","produire de la lumière","stocker l'électricité"],e:"Plus la résistance est grande, plus l'intensité est faible."},
 {t:"ohm",q:"On ajoute une résistance en série avec une lampe. La lampe :",b:"brille moins",f:["brille plus","ne change pas","s'allume en couleur"],e:"L'intensité diminue, donc la lampe brille moins."},
 {t:"ohm",q:"Quel appareil mesure directement une résistance ?",b:"un ohmmètre",f:["un voltmètre","un thermomètre","une balance"],e:"On le branche aux bornes du dipôle retiré du circuit."},
 {t:"ohm",q:"Pour une même résistance, si la tension double, l'intensité :",b:"double aussi",f:["est divisée par 2","ne change pas","devient nulle"],e:"Loi d'Ohm : U et I sont proportionnels (U = R × I)."},
 {t:"vitesse",q:"La vitesse moyenne se calcule par :",b:"v = d ÷ t",f:["v = d × t","v = t ÷ d","v = d + t"],e:"Distance parcourue divisée par la durée du parcours."},
 {t:"vitesse",q:"Dans le Système international, l'unité de vitesse est :",b:"le mètre par seconde (m/s)",f:["le kilomètre","la seconde par mètre","le newton"],e:"On utilise aussi le km/h dans la vie courante (1 m/s = 3,6 km/h)."},
 {t:"vitesse",q:"Un mouvement est uniforme si :",b:"la vitesse reste constante",f:["la trajectoire est une droite","la vitesse augmente","l'objet est immobile"],e:"Si la vitesse augmente, il est accéléré ; si elle diminue, il est ralenti."},
 {t:"vitesse",q:"Un mouvement est accéléré si :",b:"la vitesse augmente",f:["la vitesse diminue","la vitesse est constante","la trajectoire est un cercle"],e:"Exemple : une voiture qui démarre."},
 {t:"vitesse",q:"Le mouvement d'un objet dépend :",b:"du référentiel choisi",f:["de sa couleur","de sa masse","de l'heure de la journée"],e:"On décrit toujours un mouvement par rapport à un objet de référence."},
 {t:"vitesse",q:"Un passager assis dans un train qui roule est immobile par rapport :",b:"au train",f:["au quai","aux arbres","à la gare"],e:"Par rapport au quai, il est en mouvement."},
 {t:"vitesse",q:"La trajectoire de l'extrémité d'une aiguille d'horloge est :",b:"circulaire",f:["rectiligne","immobile","en zigzag"],e:"Elle décrit un cercle autour du centre du cadran."},
 {t:"nerveux",q:"Quel est le rôle des organes des sens ?",b:"capter des informations de l'environnement grâce à des récepteurs",f:["fabriquer les muscles","digérer les aliments","faire circuler le sang"],e:"L'œil capte la lumière, l'oreille les sons, la peau le toucher…"},
 {t:"nerveux",q:"Le message nerveux sensitif va :",b:"de l'organe des sens vers le cerveau",f:["du cerveau vers les muscles","du muscle vers l'œil","du cœur vers le cerveau"],e:"Il circule dans les nerfs sensitifs."},
 {t:"nerveux",q:"Le message nerveux moteur va :",b:"des centres nerveux vers les muscles",f:["des muscles vers le cerveau","de l'œil vers l'oreille","de l'estomac vers la peau"],e:"Il circule dans les nerfs moteurs et commande la contraction des muscles."},
 {t:"nerveux",q:"Les cellules qui transmettent les messages nerveux s'appellent :",b:"des neurones",f:["des globules rouges","des spermatozoïdes","des cellules de la peau"],e:"Les neurones forment le cerveau, la moelle épinière et les nerfs."},
 {t:"nerveux",q:"Les centres nerveux sont :",b:"le cerveau et la moelle épinière",f:["le cœur et les poumons","l'estomac et le foie","les muscles et les os"],e:"Ils reçoivent les messages sensitifs et élaborent les messages moteurs."},
 {t:"nerveux",q:"Pourquoi l'alcool est-il dangereux au volant ?",b:"il perturbe le système nerveux et allonge le temps de réaction",f:["il améliore les réflexes","il n'a aucun effet","il rend la vue plus perçante"],e:"L'alcool, comme d'autres drogues, perturbe le fonctionnement des neurones."},
 {t:"nerveux",q:"La zone de communication entre deux neurones s'appelle :",b:"une synapse",f:["un nerf","un muscle","un tendon"],e:"Le message y passe grâce à des substances chimiques (neurotransmetteurs)."},
 {t:"nerveux",q:"De combien d'heures de sommeil par nuit un adolescent a-t-il besoin environ ?",b:"8 à 10 heures",f:["4 heures","15 heures","2 heures"],e:"Le sommeil est indispensable à la mémoire et à la concentration ; les écrans le soir le perturbent."},
 {t:"repro",q:"La puberté est la période pendant laquelle :",b:"les organes reproducteurs deviennent fonctionnels",f:["on perd ses dents de lait","on apprend à marcher","le cerveau s'arrête de grandir"],e:"Elle commence en général entre 10 et 14 ans, sous l'action d'hormones."},
 {t:"repro",q:"Chez l'homme, les spermatozoïdes sont produits par :",b:"les testicules",f:["les ovaires","l'utérus","la vessie"],e:"Ils sont produits en continu à partir de la puberté."},
 {t:"repro",q:"À partir de la puberté, les ovaires libèrent en général :",b:"un ovule environ tous les 28 jours",f:["un ovule chaque jour","des millions d'ovules par jour","un ovule par an"],e:"C'est le cycle menstruel."},
 {t:"repro",q:"Chez la femme, où a lieu la fécondation ?",b:"dans une trompe",f:["dans l'utérus","dans l'ovaire","dans la vessie"],e:"L'œuf formé descend ensuite vers l'utérus où il s'implante (nidation)."},
 {t:"repro",q:"La fécondation, c'est :",b:"la fusion d'un spermatozoïde et d'un ovule",f:["la naissance du bébé","la production des ovules","le début des règles"],e:"Elle forme une cellule-œuf."},
 {t:"repro",q:"Les règles correspondent :",b:"à l'élimination de la muqueuse de l'utérus en l'absence de fécondation",f:["à la fécondation","à la libération d'un spermatozoïde","à la naissance"],e:"Elles marquent le début d'un nouveau cycle."},
 {t:"repro",q:"Pendant la grossesse, les échanges entre la mère et le fœtus se font par :",b:"le placenta",f:["l'estomac du fœtus","les poumons du fœtus","l'ovaire"],e:"Nutriments et dioxygène passent de la mère au fœtus ; certaines substances (alcool, tabac) aussi."},
 {t:"repro",q:"Quel moyen de contraception protège aussi des infections sexuellement transmissibles (IST) ?",b:"le préservatif",f:["la pilule","le stérilet","l'implant"],e:"C'est le seul moyen qui protège à la fois d'une grossesse et des IST."},
 {t:"genetique",q:"Combien de chromosomes contient une cellule humaine, hors cellules reproductrices ?",b:"46, soit 23 paires",f:["23","48","92"],e:"Les chromosomes vont par paires : un de chaque paire vient du père, l'autre de la mère."},
 {t:"genetique",q:"Les chromosomes sont constitués :",b:"d'ADN",f:["de sang","de graisse","d'eau uniquement"],e:"L'ADN est le support de l'information génétique."},
 {t:"genetique",q:"Un gène est :",b:"une portion d'ADN qui participe à un caractère héréditaire",f:["une cellule du sang","un organe","un chromosome entier"],e:"Par exemple, un gène intervient dans le groupe sanguin."},
 {t:"genetique",q:"Les chromosomes sexuels d'un garçon sont :",b:"XY",f:["XX","YY","XXY"],e:"Une fille a XX, un garçon XY."},
 {t:"genetique",q:"Combien de chromosomes contient un spermatozoïde ou un ovule ?",b:"23",f:["46","92","2"],e:"À la fécondation, 23 + 23 = 46 chromosomes dans la cellule-œuf."},
 {t:"genetique",q:"Dans une cellule, où se trouvent les chromosomes ?",b:"dans le noyau",f:["dans la membrane","à l'extérieur de la cellule","dans le sang"],e:"Ils deviennent visibles au microscope quand la cellule se divise."},
 {t:"genetique",q:"Pourquoi deux frères (non jumeaux) n'ont-ils pas le même patrimoine génétique ?",b:"chacun a reçu une combinaison différente des chromosomes de ses parents",f:["parce qu'ils ne mangent pas la même chose","parce qu'ils n'ont pas le même âge","parce que l'un a plus de chromosomes"],e:"Chaque cellule reproductrice reçoit au hasard un chromosome de chaque paire."},
 {t:"genetique",q:"Le caryotype, c'est :",b:"l'image des chromosomes d'une cellule, rangés par paires",f:["une prise de sang","une radio des os","le nom d'une maladie"],e:"Il permet de compter et d'observer les chromosomes."},
 {t:"geologie",q:"L'épicentre d'un séisme est :",b:"le point de la surface situé à la verticale du foyer",f:["le point en profondeur où les roches cassent","le cratère d'un volcan","le centre de la Terre"],e:"C'est là que les secousses sont en général les plus fortes."},
 {t:"geologie",q:"Le foyer d'un séisme est :",b:"l'endroit en profondeur où les roches se rompent",f:["le point de la surface le plus touché","un volcan endormi","une station de mesure"],e:"Les ondes sismiques partent du foyer."},
 {t:"geologie",q:"Un séisme est provoqué par :",b:"la rupture brutale de roches le long d'une faille",f:["une forte pluie","le vent","les marées"],e:"Les roches soumises à des forces finissent par casser."},
 {t:"geologie",q:"Quel appareil enregistre les ondes sismiques ?",b:"un sismographe",f:["un thermomètre","un baromètre","un anémomètre"],e:"L'enregistrement s'appelle un sismogramme."},
 {t:"geologie",q:"Un volcan explosif émet surtout :",b:"des nuées ardentes, des cendres et des bombes",f:["des coulées de lave très fluide","de l'eau douce","du sable"],e:"Sa lave est visqueuse. Un volcan effusif émet des coulées de lave fluide."},
 {t:"geologie",q:"La lithosphère est découpée en plaques qui :",b:"se déplacent de quelques centimètres par an",f:["sont immobiles","se déplacent de plusieurs kilomètres par an","sont liquides"],e:"C'est la tectonique des plaques."},
 {t:"geologie",q:"Au niveau d'une dorsale océanique, les plaques :",b:"s'écartent",f:["se rapprochent","sont immobiles","disparaissent"],e:"Du magma remonte et forme une nouvelle lithosphère océanique."},
 {t:"geologie",q:"La subduction, c'est :",b:"la plongée d'une plaque océanique sous une autre plaque",f:["l'écartement de deux plaques","l'éruption d'un volcan","la formation d'un glacier"],e:"Les zones de subduction ont beaucoup de séismes et de volcans explosifs."},
 {t:"geologie",q:"La « ceinture de feu » regroupe de nombreux volcans autour :",b:"de l'océan Pacifique",f:["de l'océan Atlantique","de la mer Méditerranée","de l'océan Arctique"],e:"C'est une zone de subduction presque continue."},
 {t:"techno",q:"Dans la chaîne d'information d'un objet, un capteur sert à :",b:"acquérir une information",f:["convertir l'énergie","distribuer l'énergie","transmettre un mouvement"],e:"Acquérir → traiter → communiquer."},
 {t:"techno",q:"Dans un objet programmable, la carte à microcontrôleur sert à :",b:"traiter l'information",f:["produire l'énergie","capter la lumière","faire tourner les roues"],e:"Elle exécute le programme."},
 {t:"techno",q:"Un moteur électrique est :",b:"un actionneur",f:["un capteur","un microcontrôleur","une batterie"],e:"L'actionneur agit : il convertit l'énergie électrique en mouvement."},
 {t:"techno",q:"Dans la chaîne d'énergie, une batterie sert à :",b:"alimenter l'objet en énergie",f:["acquérir l'information","traiter l'information","afficher un message"],e:"Alimenter → distribuer → convertir → transmettre."},
 {t:"techno",q:"Sur un réseau, une adresse IP sert à :",b:"identifier un appareil connecté",f:["chauffer l'ordinateur","protéger l'écran","mesurer la température"],e:"Chaque appareil connecté a une adresse."},
 {t:"techno",q:"Un routeur sert à :",b:"acheminer les données entre différents réseaux",f:["imprimer des documents","produire de l'électricité","refroidir le processeur"],e:"Il choisit le chemin des informations, par exemple vers internet."},
 {t:"techno",q:"Le cahier des charges d'un objet précise :",b:"les besoins et les contraintes que l'objet doit respecter",f:["le prix de vente en magasin","le nom du vendeur","la couleur de l'emballage seulement"],e:"Il guide la conception de l'objet."},
 {t:"techno",q:"Dans un programme, une variable sert à :",b:"stocker une valeur qui peut changer",f:["allumer une lampe","mesurer la lumière","relier deux fils"],e:"Exemple : une variable « température » mise à jour par un capteur."}
];
function exoSciences(tag){
  if(tag==="ohm"&&alea(0,2)===0){
    let R,I,U;do{R=pioche([10,20,47,50,100,150,200,220,330,470]);I=pioche([10,20,25,30,40,50,100]);U=+(R*I/1000).toFixed(3);}while(U>12);
    if(alea(0,1))return saisie(`Une résistance de ${R} Ω est traversée par un courant de ${nb(I/1000)} A. Quelle est la tension à ses bornes, en volts ?`,[nb(U),nb(U).replace(",","."),nb(U)+" V"],`Loi d'Ohm : U = R × I = ${R} × ${nb(I/1000)} = ${nb(U)} V.`);
    return saisie(`La tension aux bornes d'une résistance de ${R} Ω est ${nb(U)} V. Quelle est l'intensité du courant, en ampères ?`,[nb(I/1000),nb(I/1000).replace(",","."),nb(I/1000)+" A"],`Loi d'Ohm : I = U ÷ R = ${nb(U)} ÷ ${R} = ${nb(I/1000)} A.`);
  }
  if(tag==="vitesse"&&alea(0,2)===0){const P=pers(),v=alea(2,10),t=pioche([10,20,25,30,40,50,60,100]),d=v*t;
    return saisie(`${P.n} parcourt ${d} m à vélo en ${t} s. Quelle est sa vitesse moyenne, en m/s ?`,[String(v),v+" m/s"],`v = d ÷ t = ${d} ÷ ${t} = ${v} m/s.`);}
  return parTag(BANQUE_S,tag);
}

/* ---------- HISTOIRE-GÉOGRAPHIE ET EMC ---------- */
const BANQUE_H=[
 {t:"expansions",q:"Le commerce triangulaire relie :",b:"l'Europe, l'Afrique et les Amériques",f:["l'Europe, l'Asie et l'Océanie","l'Afrique, l'Asie et l'Europe","l'Amérique, l'Asie et l'Afrique"],e:"Marchandises vers l'Afrique, captifs vers les Amériques, produits coloniaux vers l'Europe."},
 {t:"expansions",q:"Au XVIIIe siècle, quels grands ports français s'enrichissent grâce à la traite atlantique ?",b:"Nantes et Bordeaux",f:["Lyon et Strasbourg","Lille et Dijon","Paris et Orléans"],e:"Nantes est le premier port négrier français ; La Rochelle et Le Havre y participent aussi."},
 {t:"expansions",q:"Que transportaient les navires négriers de l'Afrique vers les Amériques ?",b:"des Africains réduits en esclavage",f:["du sucre et du café","des armes et des tissus","des colons européens"],e:"Les captifs étaient vendus aux planteurs des colonies."},
 {t:"expansions",q:"Quels produits les colonies des Antilles envoyaient-elles vers l'Europe ?",b:"du sucre, du café et du coton",f:["du charbon et de l'acier","du blé et du vin","des armes et de la verroterie"],e:"Ces produits étaient cultivés par des esclaves dans les plantations."},
 {t:"expansions",q:"Combien d'Africains environ ont été déportés par la traite atlantique ?",b:"environ 12 millions",f:["environ 12 000","environ 120 000","environ 1 milliard"],e:"Du XVIe au XIXe siècle ; beaucoup sont morts pendant la traversée."},
 {t:"expansions",q:"Le Code noir (1685) est :",b:"un texte qui réglemente l'esclavage dans les colonies françaises",f:["un traité de paix","une déclaration des droits","un livre des Lumières"],e:"Il considère l'esclave comme un bien appartenant à son maître."},
 {t:"expansions",q:"Quelle colonie française était la première productrice de sucre au XVIIIe siècle ?",b:"Saint-Domingue",f:["le Canada","la Louisiane","la Corse"],e:"Après la révolte des esclaves (1791), elle devient indépendante en 1804 sous le nom d'Haïti."},
 {t:"expansions",q:"En quelle année l'esclavage est-il définitivement aboli dans les colonies françaises ?",b:"1848",f:["1685","1789","1905"],e:"Aboli une première fois en 1794, rétabli par Bonaparte en 1802, puis aboli en 1848 grâce à Victor Schœlcher."},
 {t:"lumieres",q:"Les philosophes des Lumières veulent avant tout :",b:"éclairer les esprits par la raison et combattre l'intolérance et l'arbitraire",f:["renforcer le pouvoir absolu du roi","interdire les livres","revenir au Moyen Âge"],e:"Ils critiquent l'absolutisme, l'intolérance religieuse et l'esclavage."},
 {t:"lumieres",q:"Quel philosophe a défendu la séparation des pouvoirs ?",b:"Montesquieu",f:["Voltaire","Louis XV","Robespierre"],e:"Dans « De l'esprit des lois » (1748)."},
 {t:"lumieres",q:"Voltaire a surtout combattu :",b:"l'intolérance religieuse et l'injustice",f:["la science","l'imprimerie","le commerce"],e:"Il défend par exemple Jean Calas, protestant injustement condamné."},
 {t:"lumieres",q:"Qui a dirigé l'Encyclopédie ?",b:"Diderot et d'Alembert",f:["Voltaire et Rousseau","Montesquieu et Louis XV","Napoléon et Talleyrand"],e:"Elle rassemble les connaissances de l'époque (premier volume en 1751)."},
 {t:"lumieres",q:"Dans « Du contrat social » (1762), Rousseau affirme que le pouvoir appartient :",b:"au peuple",f:["au roi de droit divin","à l'Église","aux nobles"],e:"C'est l'idée de souveraineté du peuple."},
 {t:"lumieres",q:"Où les idées des Lumières se diffusent-elles ?",b:"dans les salons, les cafés, les livres et les journaux",f:["uniquement à l'église","uniquement à la cour du roi","à la télévision"],e:"La censure n'empêche pas leur diffusion dans toute l'Europe."},
 {t:"lumieres",q:"Au XVIIIe siècle, la France est :",b:"une monarchie absolue de droit divin",f:["une république","une démocratie","un empire"],e:"Le roi tient son pouvoir de Dieu et concentre tous les pouvoirs."},
 {t:"lumieres",q:"La séparation des pouvoirs distingue les pouvoirs :",b:"législatif, exécutif et judiciaire",f:["militaire, religieux et royal","économique, social et culturel","du roi, de la reine et du dauphin"],e:"Faire les lois, les appliquer, juger."},
 {t:"revam",q:"Contre quel pays les treize colonies d'Amérique du Nord se révoltent-elles ?",b:"la Grande-Bretagne",f:["la France","l'Espagne","les Pays-Bas"],e:"Elles refusent les taxes décidées à Londres sans leur accord."},
 {t:"revam",q:"La Déclaration d'indépendance des États-Unis date du :",b:"4 juillet 1776",f:["14 juillet 1789","4 juillet 1789","11 novembre 1776"],e:"Le 4 juillet est la fête nationale américaine."},
 {t:"revam",q:"Quel pays européen aide les insurgés américains contre les Britanniques ?",b:"la France",f:["la Prusse","la Russie","le Portugal"],e:"Louis XVI envoie des troupes et des navires."},
 {t:"revam",q:"Qui devient le premier président des États-Unis ?",b:"George Washington",f:["Abraham Lincoln","Thomas Jefferson","La Fayette"],e:"Il est élu en 1789."},
 {t:"revam",q:"Quel Français s'engage aux côtés des insurgés américains ?",b:"La Fayette",f:["Robespierre","Napoléon Bonaparte","Voltaire"],e:"Il devient un héros des deux côtés de l'Atlantique."},
 {t:"revam",q:"En quelle année le traité de Paris reconnaît-il l'indépendance des États-Unis ?",b:"1783",f:["1776","1789","1804"],e:"La Grande-Bretagne accepte la défaite."},
 {t:"revam",q:"La Constitution des États-Unis (1787) organise :",b:"une république fédérale avec séparation des pouvoirs",f:["une monarchie absolue","un empire","une dictature militaire"],e:"Elle s'inspire en partie des idées de Montesquieu."},
 {t:"revfr",q:"Quel événement du 14 juillet 1789 symbolise le début de la Révolution française ?",b:"la prise de la Bastille",f:["l'exécution de Louis XVI","le sacre de Napoléon","la proclamation de la République"],e:"La Bastille, prison royale, symbolise l'arbitraire du roi."},
 {t:"revfr",q:"Que se passe-t-il la nuit du 4 août 1789 ?",b:"l'abolition des privilèges",f:["la prise des Tuileries","la fuite du roi","le sacre de Napoléon"],e:"Les députés mettent fin aux privilèges de la noblesse et du clergé."},
 {t:"revfr",q:"Quand la Déclaration des droits de l'homme et du citoyen est-elle adoptée ?",b:"en août 1789",f:["en juillet 1776","en septembre 1792","en 1804"],e:"Le 26 août 1789 : « Les hommes naissent et demeurent libres et égaux en droits »."},
 {t:"revfr",q:"Au serment du Jeu de paume (20 juin 1789), les députés jurent de :",b:"donner une Constitution à la France",f:["rester fidèles au roi absolu","déclarer la guerre à l'Autriche","rétablir les privilèges"],e:"Ils ne se sépareront pas avant d'avoir rédigé une Constitution."},
 {t:"revfr",q:"Quand la République est-elle proclamée pour la première fois en France ?",b:"en septembre 1792",f:["en juillet 1789","en 1804","en 1870"],e:"Après la chute de la monarchie le 10 août 1792."},
 {t:"revfr",q:"Quand Louis XVI est-il exécuté ?",b:"en janvier 1793",f:["en juillet 1789","en 1804","en 1815"],e:"Il est guillotiné le 21 janvier 1793."},
 {t:"revfr",q:"Pendant la Terreur (1793-1794), quel révolutionnaire domine le Comité de salut public ?",b:"Robespierre",f:["Napoléon Bonaparte","Louis XVI","La Fayette"],e:"Il est lui-même guillotiné en juillet 1794."},
 {t:"revfr",q:"Qui a écrit la Déclaration des droits de la femme et de la citoyenne (1791) ?",b:"Olympe de Gouges",f:["Marie-Antoinette","George Sand","Louise Michel"],e:"Elle réclame l'égalité entre les femmes et les hommes."},
 {t:"revfr",q:"Quels sont les trois ordres de la société d'Ancien Régime ?",b:"le clergé, la noblesse et le tiers état",f:["les ouvriers, les paysans et les bourgeois","les rois, les princes et les ducs","les citoyens, les étrangers et les esclaves"],e:"Le tiers état représente plus de 95 % de la population."},
 {t:"napoleon",q:"Comment Napoléon Bonaparte prend-il le pouvoir en 1799 ?",b:"par un coup d'État",f:["par une élection au suffrage universel","par héritage","par un mariage"],e:"Le coup d'État du 18 brumaire (novembre 1799)."},
 {t:"napoleon",q:"En quelle année Napoléon est-il sacré empereur ?",b:"1804",f:["1789","1799","1815"],e:"Le 2 décembre 1804, à Notre-Dame de Paris."},
 {t:"napoleon",q:"Le Code civil de 1804 :",b:"rassemble les lois civiles et confirme l'égalité des hommes devant la loi",f:["rétablit les privilèges de la noblesse","donne le droit de vote aux femmes","abolit la propriété"],e:"Il garde certains acquis de la Révolution, mais place la femme mariée sous l'autorité du mari."},
 {t:"napoleon",q:"Quelle bataille marque la défaite définitive de Napoléon en 1815 ?",b:"Waterloo",f:["Austerlitz","Valmy","Marengo"],e:"Il est ensuite exilé à Sainte-Hélène, où il meurt en 1821."},
 {t:"napoleon",q:"La bataille d'Austerlitz (1805) est :",b:"une grande victoire de Napoléon",f:["une défaite de Napoléon","une révolte paysanne","un traité de paix avec l'Angleterre"],e:"Victoire contre l'Autriche et la Russie."},
 {t:"napoleon",q:"En 1802, Bonaparte :",b:"rétablit l'esclavage dans les colonies",f:["abolit définitivement l'esclavage","proclame la République","fonde l'Encyclopédie"],e:"L'esclavage, aboli en 1794, est rétabli ; il ne sera aboli définitivement qu'en 1848."},
 {t:"napoleon",q:"Créé en 1800, le préfet représente :",b:"l'État dans chaque département",f:["le pape en France","les habitants d'une commune","l'armée à l'étranger"],e:"Napoléon centralise l'administration."},
 {t:"industrie",q:"Dans quel pays la révolution industrielle commence-t-elle ?",b:"au Royaume-Uni",f:["en Russie","en Espagne","au Japon"],e:"Dès la fin du XVIIIe siècle, puis elle gagne l'Europe au XIXe siècle."},
 {t:"industrie",q:"Quelle source d'énergie domine la première industrialisation ?",b:"le charbon",f:["le pétrole","le nucléaire","le solaire"],e:"Il alimente les machines à vapeur des usines et des locomotives."},
 {t:"industrie",q:"Quelle machine, perfectionnée par James Watt, transforme l'industrie ?",b:"la machine à vapeur",f:["le moteur électrique","l'ordinateur","le moulin à vent"],e:"Elle permet de faire fonctionner usines, trains et bateaux."},
 {t:"industrie",q:"Au XIXe siècle, l'exode rural désigne :",b:"le départ des habitants des campagnes vers les villes",f:["le départ des citadins vers la campagne","l'émigration vers l'Amérique","la fin de l'agriculture"],e:"Les paysans viennent chercher du travail dans les usines."},
 {t:"industrie",q:"Le prolétariat désigne :",b:"les ouvriers qui vivent de leur salaire",f:["les propriétaires d'usines","les nobles","les paysans propriétaires"],e:"Les ouvriers travaillent dur, longtemps, pour de faibles salaires."},
 {t:"industrie",q:"Qui publie le « Manifeste du parti communiste » en 1848 ?",b:"Karl Marx et Friedrich Engels",f:["Victor Hugo","Jules Ferry","Napoléon III"],e:"Ils appellent les ouvriers à s'unir contre la bourgeoisie."},
 {t:"industrie",q:"En France, quelle loi autorise les syndicats en 1884 ?",b:"la loi Waldeck-Rousseau",f:["la loi Ferry","le Code civil","la loi de 1905"],e:"Le droit de grève avait été reconnu en 1864."},
 {t:"industrie",q:"Quel moyen de transport révolutionne les échanges au XIXe siècle ?",b:"le chemin de fer",f:["l'avion","le TGV","la fusée"],e:"Le réseau ferré s'étend dans toute l'Europe."},
 {t:"industrie",q:"Le roman « Germinal » d'Émile Zola décrit la vie :",b:"des mineurs du nord de la France",f:["des rois de France","des pirates des Caraïbes","des chevaliers du Moyen Âge"],e:"Il raconte une grève dans une mine de charbon."},
 {t:"colonies",q:"À partir de quelle année la France conquiert-elle l'Algérie ?",b:"1830",f:["1789","1914","1962"],e:"La conquête, longue et violente, dure plusieurs décennies."},
 {t:"colonies",q:"La conférence de Berlin (1884-1885) :",b:"fixe les règles du partage de l'Afrique entre puissances européennes",f:["abolit l'esclavage","crée l'Union européenne","met fin à la colonisation"],e:"Les Africains n'y sont pas invités."},
 {t:"colonies",q:"Quel pays possède le plus vaste empire colonial à la fin du XIXe siècle ?",b:"le Royaume-Uni",f:["la France","l'Allemagne","l'Italie"],e:"La France possède le deuxième empire colonial."},
 {t:"colonies",q:"Quel homme politique français défend la colonisation dans un discours de 1885 ?",b:"Jules Ferry",f:["Robespierre","Napoléon Ier","Louis XIV"],e:"Il invoque des raisons économiques, politiques et un prétendu « devoir de civiliser »."},
 {t:"colonies",q:"Abd el-Kader est connu pour :",b:"avoir dirigé la résistance à la conquête française en Algérie",f:["avoir été président de la République","avoir découvert l'Amérique","avoir écrit le Code civil"],e:"Il résiste de 1832 à 1847."},
 {t:"colonies",q:"Dans les colonies françaises, le code de l'indigénat :",b:"impose aux colonisés des règles et des sanctions particulières",f:["donne les mêmes droits à tous","accorde le droit de vote aux colonisés","abolit les impôts"],e:"Les colonisés sont des sujets, pas des citoyens égaux."},
 {t:"colonies",q:"Pourquoi les Européens colonisent-ils au XIXe siècle ?",b:"pour obtenir des matières premières, des débouchés commerciaux et de la puissance",f:["pour protéger les populations locales de la guerre","pour fuir l'Europe","pour apprendre les langues africaines"],e:"Ils justifient aussi la colonisation par une prétendue supériorité de leur civilisation."},
 {t:"colonies",q:"Quelle colonie est surnommée « le joyau de l'Empire britannique » ?",b:"l'Inde",f:["le Canada","l'Australie","l'Égypte"],e:"La reine Victoria devient impératrice des Indes en 1876."},
 {t:"republique",q:"Quand la IIIe République est-elle proclamée ?",b:"le 4 septembre 1870",f:["le 14 juillet 1789","le 22 septembre 1792","le 2 décembre 1851"],e:"Après la défaite de Napoléon III à Sedan contre la Prusse."},
 {t:"republique",q:"Les lois Ferry (1881-1882) rendent l'école primaire :",b:"gratuite, laïque et obligatoire",f:["payante et religieuse","réservée aux garçons","facultative"],e:"L'instruction devient obligatoire de 6 à 13 ans."},
 {t:"republique",q:"En quelle année le suffrage universel masculin est-il instauré en France ?",b:"1848",f:["1789","1944","1905"],e:"Les femmes n'obtiennent le droit de vote qu'en 1944."},
 {t:"republique",q:"Que fait la loi de 1905 ?",b:"elle sépare les Églises et l'État",f:["elle crée l'école obligatoire","elle abolit l'esclavage","elle donne le droit de vote aux femmes"],e:"L'État garantit la liberté de culte mais ne finance aucun culte : c'est la laïcité."},
 {t:"republique",q:"En quelle année le 14 juillet devient-il fête nationale ?",b:"1880",f:["1789","1804","1945"],e:"La IIIe République installe ses symboles : le 14 Juillet, La Marseillaise (1879), Marianne."},
 {t:"republique",q:"Qui publie « J'accuse… ! » en 1898 pour défendre le capitaine Dreyfus ?",b:"Émile Zola",f:["Victor Hugo","Jules Ferry","Guy de Maupassant"],e:"Dreyfus, officier juif injustement condamné, est réhabilité en 1906."},
 {t:"republique",q:"La Commune de Paris (1871) est :",b:"une insurrection parisienne écrasée par le gouvernement",f:["un traité de paix","une fête nationale","une loi sur l'école"],e:"La « Semaine sanglante » de mai 1871 fait des milliers de morts."},
 {t:"republique",q:"Quel empereur règne sur la France de 1852 à 1870 ?",b:"Napoléon III",f:["Napoléon Ier","Louis XVI","Charles X"],e:"Neveu de Napoléon Ier, il dirige le Second Empire."},
 {t:"femmes",q:"Selon le Code civil de 1804, la femme mariée :",b:"doit obéissance à son mari",f:["a les mêmes droits que son mari","peut voter","dirige seule la famille"],e:"Elle ne peut pas, par exemple, travailler ou gérer ses biens sans l'accord de son mari."},
 {t:"femmes",q:"En quelle année les Françaises obtiennent-elles le droit de vote ?",b:"1944",f:["1848","1789","1870"],e:"Elles votent pour la première fois en 1945."},
 {t:"femmes",q:"Louise Michel est connue pour :",b:"son engagement dans la Commune de Paris",f:["avoir été reine de France","avoir inventé la machine à vapeur","avoir écrit le Code civil"],e:"Institutrice, elle est déportée en Nouvelle-Calédonie après la Commune."},
 {t:"femmes",q:"Au XIXe siècle, beaucoup de femmes des milieux populaires travaillent :",b:"comme ouvrières, domestiques ou paysannes",f:["comme députées","comme officières de l'armée","comme ministres"],e:"Elles sont moins payées que les hommes."},
 {t:"femmes",q:"La loi Camille Sée (1880) crée :",b:"des lycées publics de jeunes filles",f:["le droit de vote des femmes","les syndicats","l'école maternelle obligatoire"],e:"L'enseignement secondaire public s'ouvre aux filles."},
 {t:"femmes",q:"En 1861, Julie-Victoire Daubié devient :",b:"la première femme à obtenir le baccalauréat en France",f:["la première femme présidente","la première femme pilote","la première reine élue"],e:"Les études supérieures s'ouvrent très lentement aux femmes."},
 {t:"femmes",q:"Les « suffragettes » réclament :",b:"le droit de vote des femmes",f:["la fin de l'école obligatoire","le retour de la monarchie","la colonisation de l'Afrique"],e:"Le mouvement est très actif au Royaume-Uni au début du XXe siècle ; en France, Hubertine Auclert milite dès 1876."},
 {t:"urbanisation",q:"Aujourd'hui, quelle part de la population mondiale vit en ville ?",b:"plus de la moitié",f:["un dixième","un quart","presque personne"],e:"Les urbains sont devenus majoritaires à la fin des années 2000."},
 {t:"urbanisation",q:"Le taux d'urbanisation est :",b:"la part de la population qui vit en ville",f:["le nombre de villes d'un pays","la surface des villes","le nombre de bâtiments"],e:"On l'exprime en pourcentage."},
 {t:"urbanisation",q:"Une mégapole est :",b:"une agglomération de plus de 10 millions d'habitants",f:["une petite ville de montagne","un quartier d'affaires","un village agricole"],e:"Exemples : Tokyo, Delhi, Shanghai, São Paulo, Lagos."},
 {t:"urbanisation",q:"Une ville mondiale est :",b:"une métropole qui exerce des fonctions de commandement à l'échelle mondiale",f:["la ville la plus peuplée d'un pays","une ville détruite par une guerre","une ville sans industrie"],e:"New York, Londres, Tokyo, Paris : sièges d'entreprises, bourses, institutions internationales."},
 {t:"urbanisation",q:"L'étalement urbain, c'est :",b:"l'extension de la ville sur les espaces ruraux voisins",f:["la construction de tours au centre","la disparition des villes","le départ des habitants vers l'étranger"],e:"Il augmente les déplacements en voiture et consomme des terres agricoles."},
 {t:"urbanisation",q:"Les bidonvilles sont :",b:"des quartiers d'habitat précaire, souvent sans eau ni assainissement",f:["des quartiers d'affaires","des zones industrielles modernes","des parcs de loisirs"],e:"Ils sont nombreux dans les villes des pays pauvres et émergents."},
 {t:"urbanisation",q:"Une ville durable cherche à :",b:"limiter la pollution et les inégalités tout en restant attractive",f:["construire le plus d'autoroutes possible","interdire les transports en commun","supprimer les espaces verts"],e:"Transports en commun, écoquartiers, mixité sociale."},
 {t:"urbanisation",q:"Où l'urbanisation progresse-t-elle le plus vite aujourd'hui ?",b:"en Afrique et en Asie",f:["en Europe","en Amérique du Nord","en Océanie"],e:"Ces continents ont encore beaucoup de ruraux et une forte croissance démographique."},
 {t:"mobilites",q:"Un migrant international est :",b:"une personne qui vit dans un autre pays que celui où elle est née",f:["un touriste en vacances","une personne qui déménage dans sa ville","un pilote d'avion"],e:"On parle de migration quand on s'installe durablement (au moins un an)."},
 {t:"mobilites",q:"Un réfugié est :",b:"une personne qui fuit son pays parce que sa vie ou sa liberté y est menacée",f:["un touriste","un étudiant en voyage","un travailleur saisonnier"],e:"Il est protégé par la convention de Genève (1951)."},
 {t:"mobilites",q:"Quelle part de la population mondiale vit hors de son pays de naissance ?",b:"environ 3 à 4 %",f:["environ 50 %","environ 25 %","environ 0,01 %"],e:"Cela représente pourtant plus de 280 millions de personnes."},
 {t:"mobilites",q:"Les transferts de fonds des migrants sont :",b:"l'argent qu'ils envoient à leur famille restée au pays",f:["les impôts payés à l'État d'accueil","l'argent des touristes","les salaires des diplomates"],e:"Ils sont une ressource importante pour de nombreux pays."},
 {t:"mobilites",q:"Quel pays accueille le plus de migrants internationaux ?",b:"les États-Unis",f:["la France","le Japon","le Brésil"],e:"Viennent ensuite notamment l'Allemagne et l'Arabie saoudite."},
 {t:"mobilites",q:"Quel est le pays le plus visité au monde par les touristes internationaux ?",b:"la France",f:["le Brésil","l'Australie","le Canada"],e:"Elle reçoit environ 100 millions de touristes étrangers par an."},
 {t:"mobilites",q:"Les migrations Sud-Sud sont :",b:"des migrations entre pays en développement",f:["des migrations des pays riches vers les pays pauvres","des voyages touristiques","des déplacements à l'intérieur d'une ville"],e:"Elles sont presque aussi nombreuses que les migrations Sud-Nord."},
 {t:"mobilites",q:"La « fuite des cerveaux » désigne :",b:"le départ de personnes très diplômées vers d'autres pays",f:["une maladie","la fermeture des écoles","le tourisme scientifique"],e:"Elle prive les pays de départ de personnes qualifiées."},
 {t:"mondialisation",q:"La mondialisation est :",b:"la mise en relation des différentes parties du monde par les échanges",f:["la fermeture des frontières","la disparition du commerce","la création d'un seul pays"],e:"Échanges de marchandises, de capitaux, d'informations et de personnes."},
 {t:"mondialisation",q:"Quel mode de transport assure l'essentiel du commerce mondial de marchandises ?",b:"le transport maritime",f:["l'avion","le train","le camion"],e:"Environ 80 % des marchandises échangées voyagent par la mer."},
 {t:"mondialisation",q:"Le conteneur a permis :",b:"de transporter les marchandises plus vite et moins cher",f:["de supprimer les ports","de ralentir le commerce","de remplacer les navires par des avions"],e:"Les boîtes standardisées passent facilement du navire au train ou au camion."},
 {t:"mondialisation",q:"Quel est le premier port mondial pour le trafic de conteneurs ?",b:"Shanghai",f:["Marseille","New York","Le Havre"],e:"Les plus grands ports à conteneurs sont en Asie orientale."},
 {t:"mondialisation",q:"Une firme transnationale (FTN) est :",b:"une entreprise implantée dans plusieurs pays",f:["une petite boutique de quartier","une administration de l'État","une association sportive"],e:"Elle produit et vend dans le monde entier."},
 {t:"mondialisation",q:"Une zone économique exclusive (ZEE) s'étend jusqu'à :",b:"200 milles marins des côtes",f:["12 mètres des côtes","2 000 km des côtes","l'autre rive de l'océan"],e:"L'État y exploite les ressources (pêche, pétrole). La France a la deuxième ZEE du monde grâce à ses territoires d'outre-mer."},
 {t:"mondialisation",q:"Quel canal relie la mer Méditerranée à la mer Rouge ?",b:"le canal de Suez",f:["le canal de Panama","le canal du Midi","le canal de Kiel"],e:"Il évite de contourner l'Afrique. Panama relie l'Atlantique au Pacifique."},
 {t:"mondialisation",q:"La littoralisation, c'est :",b:"la concentration des hommes et des activités sur les littoraux",f:["l'érosion des plages","la disparition des ports","la construction de barrages"],e:"Les littoraux sont des interfaces avec le reste du monde."},
 {t:"mondialisation",q:"Quel est le premier port d'Europe ?",b:"Rotterdam",f:["Marseille","Naples","Lisbonne"],e:"Situé aux Pays-Bas, sur la Northern Range (façade maritime de la mer du Nord)."},
 {t:"emc",q:"La présomption d'innocence signifie que :",b:"toute personne est considérée comme innocente tant que sa culpabilité n'est pas prouvée",f:["toute personne arrêtée est coupable","seuls les adultes peuvent être jugés","la police décide de la peine"],e:"Ce principe figure dans la Déclaration des droits de l'homme et du citoyen (article 9)."},
 {t:"emc",q:"Quel tribunal juge les crimes comme le meurtre ?",b:"la cour d'assises",f:["le tribunal de police","le conseil municipal","l'Assemblée nationale"],e:"Le tribunal correctionnel juge les délits, le tribunal de police les contraventions."},
 {t:"emc",q:"Lors d'un procès, qui défend la personne poursuivie ?",b:"l'avocat",f:["le procureur","le juge","le greffier"],e:"Le procureur représente la société et demande une peine ; le juge décide."},
 {t:"emc",q:"La liberté d'expression a des limites. La loi interdit notamment :",b:"la diffamation et l'incitation à la haine",f:["de critiquer le gouvernement","d'écrire dans un journal","de donner son avis"],e:"La loi sur la liberté de la presse date de 1881."},
 {t:"emc",q:"Quelle est la devise de la République française ?",b:"Liberté, Égalité, Fraternité",f:["Travail, Famille, Patrie","Un pour tous, tous pour un","Paix et Prospérité"],e:"Elle figure sur les bâtiments publics."},
 {t:"emc",q:"Une discrimination est :",b:"un traitement inégal fondé sur un critère interdit par la loi (origine, sexe, handicap…)",f:["une simple différence d'opinion","une récompense","une règle du collège"],e:"Elle est punie par la loi. On peut saisir le Défenseur des droits."},
 {t:"emc",q:"En France, à quel âge est-on majeur ?",b:"18 ans",f:["16 ans","21 ans","15 ans"],e:"À 18 ans, on peut voter et on est pleinement responsable de ses actes."},
 {t:"emc",q:"S'engager dans une association, c'est :",b:"agir volontairement avec d'autres pour une cause commune",f:["être obligé de travailler","payer un impôt","voter une loi"],e:"Exemples : aide aux personnes, sport, environnement, solidarité."},
 {t:"reperes",q:"Le XVIIIe siècle correspond aux années :",b:"1701 à 1800",f:["1801 à 1900","1601 à 1700","1800 à 1899"],e:"Le XVIIIe siècle commence en 1701 et se termine en 1800."},
 {t:"reperes",q:"L'année 1848 appartient au :",b:"XIXe siècle",f:["XVIIIe siècle","XXe siècle","XVIIe siècle"],e:"De 1801 à 1900 : XIXe siècle."},
 {t:"reperes",q:"Dans quel ordre ces régimes se succèdent-ils ?",b:"monarchie absolue, Ire République, Premier Empire",f:["Premier Empire, monarchie absolue, Ire République","Ire République, monarchie absolue, Premier Empire","IIIe République, Premier Empire, monarchie absolue"],e:"Monarchie absolue jusqu'en 1789, Ire République en 1792, Empire en 1804."},
 {t:"reperes",q:"Quel régime dirige la France à la fin du XIXe siècle ?",b:"la IIIe République",f:["la monarchie absolue","le Premier Empire","la Ire République"],e:"Proclamée en 1870, elle dure jusqu'en 1940."},
 {t:"reperes",q:"Qui règne sur la France au début de la Révolution, en 1789 ?",b:"Louis XVI",f:["Louis XIV","Napoléon Ier","Napoléon III"],e:"Louis XIV a régné de 1643 à 1715."},
 {t:"reperes",q:"La révolution industrielle se diffuse en France surtout au :",b:"XIXe siècle",f:["XVIe siècle","XVIIe siècle","XXIe siècle"],e:"Elle commence au Royaume-Uni à la fin du XVIIIe siècle."}
];
const EVTS=[["le Code noir",1685],["le premier volume de l'Encyclopédie",1751],["la Déclaration d'indépendance des États-Unis",1776],["la prise de la Bastille",1789],["la proclamation de la Ire République",1792],["le sacre de Napoléon Ier",1804],["la bataille de Waterloo",1815],["le début de la conquête de l'Algérie",1830],["l'abolition définitive de l'esclavage en France",1848],["la proclamation de la IIIe République",1870],["la Commune de Paris",1871],["la loi Ferry rendant l'école primaire obligatoire et laïque",1882],["la loi de séparation des Églises et de l'État",1905]];
const ROM=["","I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX","XXI"];
const siecle=y=>`${ROM[Math.floor((y-1)/100)+1]}e siècle`;
function exoHistoire(tag){
  if(tag==="reperes"&&alea(0,2)){
    const t=alea(1,3);
    if(t===1){const ev=melange(EVTS).slice(0,4),plus=ev.reduce((a,b)=>a[1]<=b[1]?a:b);
      return qcm("Lequel de ces événements est le plus ancien ?",plus[0],ev.filter(x=>x!==plus).map(x=>x[0]),`Dates : ${ev.slice().sort((a,b)=>a[1]-b[1]).map(x=>`${x[0]} (${x[1]})`).join(", ")}.`);}
    const e=pioche(EVTS);
    if(t===2)return saisie(`En quelle année a eu lieu ${e[0]} ?`,[String(e[1])],`${e[0].charAt(0).toUpperCase()+e[0].slice(1)} : ${e[1]}. C'est un repère à connaître.`);
    return qcm(`En quel siècle a eu lieu ${e[0]} (${e[1]}) ?`,siecle(e[1]),["XVIIe siècle","XVIIIe siècle","XIXe siècle","XXe siècle"].filter(s=>s!==siecle(e[1])),`${e[1]} : on prend les centaines (${Math.floor(e[1]/100)}) et on ajoute 1 → ${siecle(e[1])}${e[1]%100===0?" (une année en 00 termine le siècle)":""}.`);
  }
  return parTag(BANQUE_H,tag);
}

/* ---------- LA SÉANCE ---------- */
function exoMatiere(mat,sem){
  if(mat==="m")return exoMaths(sem.tm);
  if(mat==="f")return exoFrancais(sem.tf);
  if(mat==="a")return exoAnglais(sem.ta);
  if(mat==="s")return exoSciences(sem.ts);
  return exoHistoire(sem.th);
}
function seanceHorsLigne(mat,semaine){
  const sem=SEMAINES[semaine-1];
  if(mat==="rev")return [exoMatiere("m",sem),exoMatiere("f",sem),exoMatiere("a",sem),exoMatiere("s",sem),
                         exoMatiere("h",sem),exoMatiere("m",sem),exoMatiere("f",sem),exoMaths("calcmental")];
  const q=[exoMaths("calcmental"),exoFrancais(sem.tf)];
  // 4 questions sur la matière, en évitant de poser deux fois la même
  for(let i=0;i<4;i++){let x,essai=0;do{x=exoMatiere(mat,sem);essai++;}while(essai<8&&q.some(y=>y.enonce===x.enonce));q.push(x);}
  return q;
}


export const programme = { code: "4e", nom: "4e", rituel: "Deux questions de rituel pour commencer : calcul mental et français.", SEMAINES, JOURS, NOM_MAT, PERIODES, matiereDuJour, seanceHorsLigne };
