// Programme de CP : écrit le 08/10/2026 sur le modèle de ce2.js.
// C'est la seule source : on le modifie ici.
// Un enfant de CP lit très peu : énoncés courts, beaucoup de QCM, un adulte peut lire avec lui.

/* =========================================================
   1. LE PROGRAMME DE CP — 36 SEMAINES
   t = étiquettes : maths | français | anglais | questionner le monde
   En français, une étiquette comme « a.i » veut dire : les sons a et i.
   ========================================================= */
const SEMAINES=[
{n:1,p:1,m:"Compter jusqu'à 10",f:"Les sons a et i",a:"Dire bonjour",q:"Vivant ou pas vivant ?",t:"compter10|a.i|greetings|vivant"},
{n:2,p:1,m:"Avant, après : la suite des nombres jusqu'à 10",f:"Les sons o et u",a:"Dire bonjour",q:"Mes cinq sens",t:"avantapres10|o.u|greetings|sens"},
{n:3,p:1,m:"Plus, moins : comparer des nombres",f:"Les sons é et e",a:"Les couleurs",q:"Les jours de la semaine",t:"comparer10|é.e|couleurs|temps"},
{n:4,p:1,m:"Décomposer les nombres jusqu'à 10",f:"Le son l",a:"Les couleurs",q:"L'automne",t:"decomp10|l|couleurs|saisons"},
{n:5,p:1,m:"Premières additions",f:"Le son r",a:"Compter de 1 à 5",q:"Les animaux et leurs petits",t:"add10|r|nombres5|animaux"},
{n:6,p:1,m:"Carré, triangle, rond, rectangle",f:"Le son m",a:"Compter de 1 à 5",q:"Se laver, bien manger",t:"formes|m|nombres5|sante"},
{n:7,p:1,m:"Bilan : compter et calculer jusqu'à 10",f:"Bilan : a, i, o, u, é, e, l, r, m",a:"Bilan de la période 1",q:"Bilan : le vivant",t:"calc1|a.i.o.u.é.e.l.r.m|greetings|vivant"},
{n:8,p:2,m:"Les nombres jusqu'à 20",f:"Le son s",a:"Compter jusqu'à 10",q:"Solide ou liquide ?",t:"nombres20|s|nombres|matiere"},
{n:9,p:2,m:"Premières soustractions",f:"Le son f",a:"Compter jusqu'à 10",q:"L'eau et la glace",t:"sous10|f|nombres|matiere"},
{n:10,p:2,m:"Les compléments à 10",f:"Le son ch",a:"Les animaux",q:"Le corps et les sens",t:"complement10|ch|animaux|sens"},
{n:11,p:2,m:"Les doubles",f:"Le son p",a:"Les animaux",q:"Les fruits et les légumes",t:"doubles|p|animaux|sante"},
{n:12,p:2,m:"Devant, derrière, à gauche, à droite",f:"Le son t",a:"Christmas",q:"L'hiver",t:"reperage|t|noel|saisons"},
{n:13,p:2,m:"Petits problèmes",f:"Le son v",a:"Christmas",q:"Les mois de l'année",t:"problemes|v|noel|temps"},
{n:14,p:2,m:"Bilan : calculer jusqu'à 20",f:"La phrase : majuscule et point",a:"La famille",q:"Bilan : la matière",t:"calc2|phrase|famille|matiere"},
{n:15,p:3,m:"Dizaines et unités",f:"Le son n",a:"La famille",q:"Hier, aujourd'hui, demain",t:"dizaines|n|famille|temps"},
{n:16,p:3,m:"Les nombres jusqu'à 60",f:"Le son d",a:"Le corps",q:"Ce que mangent les animaux",t:"nombres60|d|corps|animaux"},
{n:17,p:3,m:"Additions jusqu'à 20",f:"Le son ou",a:"Le corps",q:"Les graines et les plantes",t:"add20|ou|corps|plantes"},
{n:18,p:3,m:"Comparer et mesurer des longueurs",f:"Le son on",a:"Les fruits",q:"Prendre soin de son corps",t:"longueurs|on|fruits|sante"},
{n:19,p:3,m:"Soustractions jusqu'à 20",f:"Le son an",a:"Les fruits",q:"Fondre et geler",t:"sous20|an|fruits|matiere"},
{n:20,p:3,m:"Petits problèmes (suite)",f:"Le son in",a:"Les couleurs",q:"L'hiver et le printemps",t:"problemes|in|couleurs|saisons"},
{n:21,p:3,m:"Bilan : nombres et calculs jusqu'à 60",f:"Bilan : les syllabes",a:"Les couleurs",q:"Bilan : le corps et les sens",t:"calc3|syllabes|couleurs|sens"},
{n:22,p:4,m:"Les nombres jusqu'à 100",f:"Le son oi",a:"Les animaux",q:"Le printemps",t:"nombres100|oi|animaux|saisons"},
{n:23,p:4,m:"Comparer les nombres jusqu'à 100",f:"Le son j",a:"Les animaux",q:"Les plantes poussent",t:"comparer100|j|animaux|plantes"},
{n:24,p:4,m:"Compter de 2 en 2, de 5 en 5, de 10 en 10",f:"Le son b",a:"Compter jusqu'à 10",q:"Les bébés des animaux",t:"suites|b|nombres|animaux"},
{n:25,p:4,m:"Ajouter des dizaines",f:"Le son c (comme dans coq)",a:"Compter jusqu'à 10",q:"Flotter ou couler",t:"adddiz|c|nombres|matiere"},
{n:26,p:4,m:"Les pièces et les billets",f:"Le son è",a:"Dire bonjour, dire merci",q:"La sécurité dans la rue",t:"monnaie|è|greetings|securite"},
{n:27,p:4,m:"Doubles et moitiés",f:"Masculin ou féminin : un, une",a:"Dire bonjour, dire merci",q:"Les mois et les saisons",t:"moities|genre|greetings|temps"},
{n:28,p:4,m:"Bilan : petits problèmes",f:"Singulier ou pluriel",a:"La famille",q:"Bilan : le vivant",t:"problemes2|nombre|famille|vivant"},
{n:29,p:5,m:"Révision : les nombres jusqu'à 100",f:"Le son eu",a:"La famille",q:"L'été",t:"nombres100|eu|famille|saisons"},
{n:30,p:5,m:"Additions avec des nombres à deux chiffres",f:"Les sons au et eau",a:"Les fruits",q:"Bien grandir",t:"addition2|au|fruits|sante"},
{n:31,p:5,m:"Les formes et les solides",f:"Le son g (comme dans gare)",a:"Les fruits",q:"Les animaux et leurs petits",t:"formes|g|fruits|animaux"},
{n:32,p:5,m:"Mesurer des longueurs",f:"Le son gn",a:"Le corps",q:"La matière",t:"longueurs|gn|corps|matiere"},
{n:33,p:5,m:"Problèmes",f:"La phrase : remettre les mots dans l'ordre",a:"Le corps",q:"La sécurité",t:"problemes2|phrase|corps|securite"},
{n:34,p:5,m:"Soustractions avec des nombres à deux chiffres",f:"Un, une, des : les accords",a:"Les animaux",q:"Les plantes",t:"sous2|accords|animaux|plantes"},
{n:35,p:5,m:"Bilan : le calcul",f:"Bilan : tous les sons",a:"Bilan de l'année",q:"Bilan : les saisons et le temps",t:"calc4|tous|couleurs|temps"},
{n:36,p:5,m:"Bilan de l'année : défis",f:"Bilan : lire de petites phrases",a:"Jeux en anglais",q:"Bilan : le vivant",t:"problemes2|lecture|couleurs|vivant"}
];
SEMAINES.forEach(s=>{const t=s.t.split("|");s.tm=t[0];s.tf=t[1];s.ta=t[2];s.tq=t[3];});

const JOURS=[
 {nom:"Lundi",mat:"m",min:8},
 {nom:"Mardi",mat:"f",min:8},
 {nom:"Mercredi",mat:"m",min:8},
 {nom:"Jeudi",mat:"f",min:8},
 {nom:"Vendredi",mat:"aq",min:8},
 {nom:"Week-end",mat:"rev",min:8}
];
const NOM_MAT={m:"Mathématiques",f:"Français",a:"Anglais",q:"Questionner le monde",rev:"Révision de la semaine"};
const PERIODES=["Période 1 — septembre à octobre","Période 2 — novembre à décembre","Période 3 — janvier à février","Période 4 — mars à avril","Période 5 — mai à juillet"];
/* Le vendredi alterne : questionner le monde les semaines impaires, anglais les semaines paires */
function matiereDuJour(sem,jour){const j=JOURS[jour];if(j.mat==="aq")return (sem%2===1)?"q":"a";return j.mat;}

/* =========================================================
   2. LES OUTILS
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
/* QCM avec des nombres proches de la bonne réponse (tous différents d'elle) */
function qcmNombre(enonce,bonne,expl){
  const b=Number(bonne);
  const cand=melange([b+1,b-1,b+2,b-2,b+10,b-10].filter(x=>x>=0&&x!==b));
  return qcm(enonce,String(b),cand.slice(0,3).map(String),expl);
}
/* Une fois sur deux à écrire, une fois sur deux à choisir */
function nombre(enonce,bonne,expl){return alea(0,1)?saisie(enonce,[String(bonne)],expl):qcmNombre(enonce,bonne,expl);}
function parTag(banque,tag){const f=banque.filter(x=>x.t===tag);const b=pioche(f.length?f:banque);return qcm(b.q,b.b,b.f,b.e);}

const PRENOMS=[["Léa","elle"],["Tom","il"],["Inès","elle"],["Noah","il"],["Jade","elle"],["Adam","il"],["Lina","elle"],["Sami","il"],["Emma","elle"],["Yanis","il"],["Chloé","elle"],["Malo","il"],["Nour","elle"],["Hugo","il"],["Zoé","elle"],["Léo","il"]];
const deuxPrenoms=()=>{const m=melange(PRENOMS);return [m[0],m[1]];};
const maj=s=>s.charAt(0).toUpperCase()+s.slice(1);

/* Les nombres en lettres jusqu'à 100 (orthographe traditionnelle) */
const UNITES=["zéro","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze","treize","quatorze","quinze","seize"];
const DIZ={2:"vingt",3:"trente",4:"quarante",5:"cinquante",6:"soixante"};
function lettres(n){
  if(n<17)return UNITES[n];
  if(n<20)return "dix-"+UNITES[n-10];
  if(n<70){const d=Math.floor(n/10),u=n%10;if(u===0)return DIZ[d];if(u===1)return DIZ[d]+" et un";return DIZ[d]+"-"+UNITES[u];}
  if(n<80){const u=n-60;if(u===11)return "soixante et onze";return "soixante-"+lettres(u);}
  if(n<100){const u=n-80;if(u===0)return "quatre-vingts";return "quatre-vingt-"+lettres(u);}
  return "cent";
}

/* =========================================================
   3. MATHÉMATIQUES
   ========================================================= */
const OBJETS=[["🍎","de pommes"],["⭐","d'étoiles"],["🐟","de poissons"],["🌸","de fleurs"],["🚗","de voitures"],["🎈","de ballons"],["🐞","de coccinelles"],["🐱","de chats"]];
const GM={
  compter10(){
    const t=alea(1,3);
    if(t===1){const n=alea(2,10),o=pioche(OBJETS);
      return nombre(`Combien ${o[1]} ? ${Array(n).fill(o[0]).join(" ")}`,n,`On compte un par un : il y en a ${n}.`);}
    if(t===2){const n=alea(0,10);
      return nombre(`Écris en chiffres : ${lettres(n)}`,n,`« ${lettres(n)} » s'écrit ${n}.`);}
    const n=alea(1,10);
    return qcm(`Comment s'écrit ${n} en lettres ?`,lettres(n),melange([0,1,2,3,4,5,6,7,8,9,10].filter(x=>x!==n)).slice(0,3).map(lettres),`${n} s'écrit « ${lettres(n)} ».`);
  },
  avantapres10(){
    if(alea(0,1)){const n=alea(0,9);return nombre(`Quel nombre vient juste après ${n} ?`,n+1,`Après ${n}, on dit ${n+1}.`);}
    const n=alea(1,10);return nombre(`Quel nombre vient juste avant ${n} ?`,n-1,`Avant ${n}, on dit ${n-1}.`);
  },
  comparer10(){
    let a=alea(0,10),b=alea(0,10);while(a===b)b=alea(0,10);
    const t=alea(1,3);
    if(t===1)return qcm(`Quel nombre est le plus grand : ${a} ou ${b} ?`,String(Math.max(a,b)),[String(Math.min(a,b))],`${Math.max(a,b)} est plus grand que ${Math.min(a,b)}.`);
    if(t===2)return qcm(`Quel nombre est le plus petit : ${a} ou ${b} ?`,String(Math.min(a,b)),[String(Math.max(a,b))],`${Math.min(a,b)} est plus petit que ${Math.max(a,b)}.`);
    const [p,q]=deuxPrenoms();a=alea(1,10);b=alea(1,10);while(a===b)b=alea(1,10);
    const gagnant=a>b?p[0]:q[0];
    return qcm(`${p[0]} a ${a} billes. ${q[0]} a ${b} billes. Qui a le plus de billes ?`,gagnant,[a>b?q[0]:p[0]],`${Math.max(a,b)} c'est plus que ${Math.min(a,b)}.`);
  },
  decomp10(){
    const t=alea(3,10),a=alea(1,t-1);
    if(alea(0,1))return nombre(`${t}, c'est ${a} et combien ?`,t-a,`${a} et ${t-a}, ça fait ${t}.`);
    return nombre(`${a} + … = ${t}. Quel nombre manque ?`,t-a,`${a} + ${t-a} = ${t}.`);
  },
  add10(){
    const a=alea(1,8),b=alea(1,10-a);
    if(alea(0,2))return nombre(`Combien font ${a} + ${b} ?`,a+b,`${a} + ${b} = ${a+b}.`);
    const p=pioche(PRENOMS);
    return nombre(`${p[0]} a ${a} bonbons. On lui en donne ${b}. Combien en a-t-${p[1]} ?`,a+b,`${a} + ${b} = ${a+b}.`);
  },
  sous10(){
    const a=alea(2,10),b=alea(1,a-1);
    if(alea(0,2))return nombre(`Combien font ${a} − ${b} ?`,a-b,`${a} − ${b} = ${a-b}.`);
    const p=pioche(PRENOMS);
    return nombre(`${p[0]} a ${a} gâteaux. ${maj(p[1])} en mange ${b}. Combien en reste-t-il ?`,a-b,`${a} − ${b} = ${a-b}.`);
  },
  complement10(){
    const a=alea(1,9);
    if(alea(0,1))return nombre(`${a} + … = 10. Quel nombre manque ?`,10-a,`${a} + ${10-a} = 10.`);
    return nombre(`J'ai ${a} doigt${a>1?"s":""} levé${a>1?"s":""}. Combien en faut-il encore pour avoir 10 ?`,10-a,`${a} et ${10-a}, ça fait 10.`);
  },
  doubles(){
    const n=alea(1,10);
    if(alea(0,1))return nombre(`Quel est le double de ${n} ?`,2*n,`Le double de ${n}, c'est ${n} + ${n} = ${2*n}.`);
    return nombre(`Combien font ${n} + ${n} ?`,2*n,`${n} + ${n} = ${2*n}. C'est le double de ${n}.`);
  },
  nombres20(){
    const t=alea(1,4);
    if(t===1){const n=alea(11,20);return nombre(`Écris en chiffres : ${lettres(n)}`,n,`« ${lettres(n)} » s'écrit ${n}.`);}
    if(t===2){const n=alea(10,19);return nombre(`Quel nombre vient juste après ${n} ?`,n+1,`Après ${n}, on dit ${n+1}.`);}
    if(t===3){const n=alea(11,20);return nombre(`Quel nombre vient juste avant ${n} ?`,n-1,`Avant ${n}, on dit ${n-1}.`);}
    const u=alea(1,9);return nombre(`1 dizaine et ${u} unités, c'est quel nombre ?`,10+u,`10 et ${u}, ça fait ${10+u}.`);
  },
  dizaines(){
    const d=alea(1,6),u=alea(0,9),n=d*10+u;
    if(n>60)return GM.dizaines();
    const t=alea(1,3);
    if(t===1)return nombre(`${d} dizaines et ${u} unités, c'est quel nombre ?`,n,`${d} dizaines = ${d*10}, et ${u} de plus : ${n}.`);
    if(t===2)return qcmChiffres(`Dans ${n}, combien y a-t-il de dizaines ?`,d,`${n}, c'est ${d} dizaines et ${u} unités.`);
    return qcmChiffres(`Dans ${n}, quel est le chiffre des unités ?`,u,`${n}, c'est ${d} dizaines et ${u} unités.`);
  },
  nombres60(){
    const t=alea(1,4);
    if(t===1){const n=alea(20,59);return nombre(`Quel nombre vient juste après ${n} ?`,n+1,`Après ${n}, on dit ${n+1}.`);}
    if(t===2){const n=alea(21,60);return nombre(`Quel nombre vient juste avant ${n} ?`,n-1,`Avant ${n}, on dit ${n-1}.`);}
    if(t===3){const n=alea(20,60);return nombre(`Écris en chiffres : ${lettres(n)}`,n,`« ${lettres(n)} » s'écrit ${n}.`);}
    let a=alea(10,60),b=alea(10,60);while(a===b)b=alea(10,60);
    return qcm(`Quel nombre est le plus grand : ${a} ou ${b} ?`,String(Math.max(a,b)),[String(Math.min(a,b))],`On regarde d'abord les dizaines : ${Math.max(a,b)} est plus grand.`);
  },
  add20(){
    const t=alea(1,3);
    if(t===1){const u=alea(1,9);return nombre(`Combien font 10 + ${u} ?`,10+u,`10 + ${u} = ${10+u}.`);}
    const a=alea(4,9),b=alea(11-a,9);
    return nombre(`Combien font ${a} + ${b} ?`,a+b,`${a} + ${b} = ${a+b}. Pense à faire 10 d'abord.`);
  },
  sous20(){
    if(alea(0,1)){const a=alea(11,19),b=alea(1,a-10);return nombre(`Combien font ${a} − ${b} ?`,a-b,`${a} − ${b} = ${a-b}.`);}
    const u=alea(1,9);return nombre(`Combien font ${10+u} − 10 ?`,u,`${10+u} − 10 = ${u}.`);
  },
  nombres100(){
    const t=alea(1,4);
    if(t===1){const n=alea(20,99);return nombre(`Écris en chiffres : ${lettres(n)}`,n,`« ${lettres(n)} » s'écrit ${n}.`);}
    if(t===2){const n=alea(30,99);return nombre(`Quel nombre vient juste après ${n} ?`,n+1,`Après ${n}, on dit ${n+1}.`);}
    if(t===3){const d=alea(2,9),u=alea(0,9);return nombre(`${d} dizaines et ${u} unités, c'est quel nombre ?`,d*10+u,`${d} dizaines = ${d*10}, et ${u} de plus : ${d*10+u}.`);}
    const n=alea(31,100);return nombre(`Quel nombre vient juste avant ${n} ?`,n-1,`Avant ${n}, on dit ${n-1}.`);
  },
  comparer100(){
    let a=alea(10,99),b=alea(10,99);while(a===b)b=alea(10,99);
    if(alea(0,1))return qcm(`Quel nombre est le plus grand : ${a} ou ${b} ?`,String(Math.max(a,b)),[String(Math.min(a,b))],`On regarde d'abord les dizaines : ${Math.max(a,b)} est plus grand.`);
    return qcm(`Quel nombre est le plus petit : ${a} ou ${b} ?`,String(Math.min(a,b)),[String(Math.max(a,b))],`On regarde d'abord les dizaines : ${Math.min(a,b)} est plus petit.`);
  },
  suites(){
    const pas=pioche([2,5,10]);
    const debut=pas===2?alea(0,6)*2:pas===5?alea(0,8)*5:alea(0,9);
    const s=[debut,debut+pas,debut+2*pas],suiv=debut+3*pas;
    return nombre(`Continue : ${s.join(", ")}, …`,suiv,`On avance de ${pas} en ${pas} : ${s[2]} + ${pas} = ${suiv}.`);
  },
  adddiz(){
    if(alea(0,1)){const a=alea(1,6),b=alea(1,9-a);return nombre(`Combien font ${a*10} + ${b*10} ?`,(a+b)*10,`${a} dizaines + ${b} dizaines = ${a+b} dizaines, donc ${(a+b)*10}.`);}
    const n=alea(11,89);return nombre(`Combien font ${n} + 10 ?`,n+10,`On ajoute 1 dizaine : ${n} + 10 = ${n+10}.`);
  },
  monnaie(){
    const t=alea(1,3);
    if(t===1){const a=alea(1,3),b=alea(1,3);
      return nombre(`J'ai ${a} pièce${a>1?"s":""} de 2 € et ${b} pièce${b>1?"s":""} de 1 €. Combien d'euros ai-je ?`,2*a+b,`${a>1?Array(a).fill(2).join(" + "):"2"} + ${Array(b).fill(1).join(" + ")} = ${2*a+b} €.`);}
    if(t===2){const b=pioche([5,10]),c=alea(1,4);
      return nombre(`J'ai un billet de ${b} € et ${c} pièce${c>1?"s":""} de 1 €. Combien d'euros ai-je ?`,b+c,`${b} + ${c} = ${b+c} €.`);}
    const prix=alea(1,9);
    return nombre(`J'ai 10 €. J'achète un livre à ${prix} €. Combien d'euros me reste-t-il ?`,10-prix,`10 − ${prix} = ${10-prix} €.`);
  },
  moities(){
    if(alea(0,1)){const n=alea(1,10)*2;return nombre(`Quelle est la moitié de ${n} ?`,n/2,`${n/2} + ${n/2} = ${n}, donc la moitié de ${n} est ${n/2}.`);}
    const n=alea(5,20);return nombre(`Quel est le double de ${n} ?`,2*n,`${n} + ${n} = ${2*n}.`);
  },
  addition2(){
    const a=alea(1,5)*10+alea(0,4),b=alea(1,4)*10+alea(0,5);
    return nombre(`Combien font ${a} + ${b} ?`,a+b,`Les dizaines ensemble, les unités ensemble : ${a} + ${b} = ${a+b}.`);
  },
  sous2(){
    const da=alea(3,9),ua=alea(2,9),db=alea(1,da-1),ub=alea(0,ua);
    const a=da*10+ua,b=db*10+ub;
    return nombre(`Combien font ${a} − ${b} ?`,a-b,`Les dizaines : ${da} − ${db} = ${da-db}. Les unités : ${ua} − ${ub} = ${ua-ub}. Donc ${a-b}.`);
  },
  reperage(){const b=[
      {q:"Le contraire de « devant », c'est :",b:"derrière",f:["dessus","dedans","à côté"],e:"Devant et derrière sont des contraires."},
      {q:"Le contraire de « dessus », c'est :",b:"dessous",f:["devant","dehors","loin"],e:"Dessus et dessous sont des contraires."},
      {q:"Le contraire de « à gauche », c'est :",b:"à droite",f:["en haut","devant","dedans"],e:"Gauche et droite sont des contraires."},
      {q:"Le contraire de « dedans », c'est :",b:"dehors",f:["dessus","derrière","à gauche"],e:"Dedans et dehors sont des contraires."},
      {q:"Le contraire de « en haut », c'est :",b:"en bas",f:["à droite","devant","dedans"],e:"En haut et en bas sont des contraires."},
      {q:"Le contraire de « loin », c'est :",b:"près",f:["dessous","dehors","derrière"],e:"Loin et près sont des contraires."},
      {q:"Dans la file, Léa est devant Tom. Qui est derrière ?",b:"Tom",f:["Léa"],e:"Léa est devant, donc Tom est derrière elle."},
      {q:"Le chat dort sous la table. Où est le chat ?",b:"sous la table",f:["sur la table","dans la table","loin de la table"],e:"« Sous », c'est en dessous."},
      {q:"Le livre est sur l'étagère. Où est le livre ?",b:"sur l'étagère",f:["sous l'étagère","derrière l'étagère","dans le sac"],e:"« Sur », c'est au-dessus, posé dessus."},
      {q:"Où est le ciel ?",b:"au-dessus de nous",f:["sous nos pieds","dans la maison","derrière la porte"],e:"Le ciel est en haut, au-dessus de nous."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);},
  formes(){const b=[
      {q:"Combien de côtés a un triangle ?",b:"3",f:["4","2","5"],e:"Tri, c'est trois : le triangle a 3 côtés."},
      {q:"Combien de côtés a un carré ?",b:"4",f:["3","5","6"],e:"Le carré a 4 côtés de même longueur."},
      {q:"Combien de côtés a un rectangle ?",b:"4",f:["3","5","2"],e:"Le rectangle a 4 côtés."},
      {q:"Quelle forme est toute ronde ?",b:"le rond",f:["le carré","le triangle","le rectangle"],e:"Le rond (le cercle) n'a pas de coin."},
      {q:"Quelle forme a 4 côtés tous pareils ?",b:"le carré",f:["le triangle","le rond","le rectangle"],e:"Les 4 côtés du carré ont la même longueur."},
      {q:"Quelle forme n'a pas de coin ?",b:"le rond",f:["le carré","le triangle","le rectangle"],e:"Le rond est tout courbe, il n'a pas de coin."},
      {q:"Combien de coins a un triangle ?",b:"3",f:["4","2","0"],e:"Le triangle a 3 côtés et 3 coins."},
      {q:"Une roue a la forme d'un :",b:"rond",f:["carré","triangle","rectangle"],e:"La roue est ronde, elle peut rouler."},
      {q:"Un dé a la forme d'un :",b:"cube",f:["rond","triangle","cône"],e:"Le dé est un cube : il a 6 faces carrées."},
      {q:"Un ballon a la forme d'une :",b:"boule",f:["cube","pyramide","boîte"],e:"Le ballon est une boule, il roule."},
      {q:"Combien de faces a un cube ?",b:"6",f:["4","3","2"],e:"Le dé est un cube : il a 6 faces."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);},
  longueurs(){
    const t=alea(1,3);
    if(t===1){const [p,q]=deuxPrenoms();let a=alea(5,18),b=alea(5,18);while(a===b)b=alea(5,18);
      return qcm(`Le crayon de ${p[0]} mesure ${a} cm. Celui de ${q[0]} mesure ${b} cm. Quel crayon est le plus long ?`,`celui de ${a>b?p[0]:q[0]}`,[`celui de ${a>b?q[0]:p[0]}`],`${Math.max(a,b)} cm, c'est plus que ${Math.min(a,b)} cm.`);}
    if(t===2){const a=alea(2,9),b=alea(2,9);
      return nombre(`Je trace un trait de ${a} cm, puis je continue de ${b} cm. Combien mesure le trait ?`,a+b,`${a} + ${b} = ${a+b} cm.`);}
    const b=[
      {q:"Avec quoi mesure-t-on un trait ?",b:"une règle",f:["une balance","une horloge","une cuillère"],e:"La règle sert à mesurer les longueurs."},
      {q:"Qu'est-ce qui est le plus long ?",b:"un train",f:["une fourmi","un crayon","une gomme"],e:"Un train est très, très long."},
      {q:"Qu'est-ce qui est le plus court ?",b:"une fourmi",f:["une voiture","une table","un lit"],e:"La fourmi est toute petite."},
      {q:"Qu'est-ce qui est le plus haut ?",b:"un arbre",f:["une chaise","un chat","une tasse"],e:"Un arbre est bien plus haut que nous."},
      {q:"On mesure un crayon en :",b:"centimètres",f:["euros","kilos","heures"],e:"Les petites longueurs se mesurent en centimètres (cm)."},
      {q:"Sur la règle, on commence à mesurer à :",b:"0",f:["1","5","10"],e:"On place le début du trait sur le 0."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);
  },
  problemes(){
    const [p,q]=deuxPrenoms(),t=alea(1,6);
    if(t===1){const a=alea(2,9),b=alea(1,9);return nombre(`${p[0]} a ${a} billes. ${maj(p[1])} en gagne ${b}. Combien de billes a-t-${p[1]} maintenant ?`,a+b,`${a} + ${b} = ${a+b} billes.`);}
    if(t===2){const a=alea(4,15),b=alea(1,a-1);return nombre(`${p[0]} a ${a} bonbons. ${maj(p[1])} en mange ${b}. Combien de bonbons lui reste-t-il ?`,a-b,`${a} − ${b} = ${a-b} bonbons.`);}
    if(t===3){const a=alea(3,10),b=alea(2,8);return nombre(`Dans le bus, il y a ${a} enfants. ${b} enfants montent. Combien d'enfants y a-t-il dans le bus ?`,a+b,`${a} + ${b} = ${a+b} enfants.`);}
    if(t===4){const a=alea(5,15),b=alea(1,a-1);return nombre(`Il y a ${a} oiseaux sur un arbre. ${b} s'envolent. Combien d'oiseaux restent sur l'arbre ?`,a-b,`${a} − ${b} = ${a-b} oiseaux.`);}
    if(t===5){const a=alea(2,9),b=alea(2,9);return nombre(`${p[0]} a ${a} images. ${q[0]} a ${b} images. Combien d'images en tout ?`,a+b,`${a} + ${b} = ${a+b} images.`);}
    const a=alea(2,9);return nombre(`${p[0]} a ${a} billes. ${q[0]} en a autant. Combien de billes en tout ?`,2*a,`Autant, c'est pareil : ${a} + ${a} = ${2*a} billes.`);
  },
  problemes2(){
    const [p,q]=deuxPrenoms(),t=alea(1,6);
    if(t===1){const a=alea(12,40),b=alea(2,9);return nombre(`${p[0]} a ${a} billes. ${maj(p[1])} en gagne ${b}. Combien de billes a-t-${p[1]} maintenant ?`,a+b,`${a} + ${b} = ${a+b} billes.`);}
    if(t===2){const a=alea(15,40),b=alea(2,9);return nombre(`Dans la classe, il y a ${a} livres. On en prête ${b}. Combien de livres reste-t-il ?`,a-b,`${a} − ${b} = ${a-b} livres.`);}
    if(t===3){const a=alea(1,5)*10,b=alea(1,4)*10;return nombre(`${p[0]} a ${a} perles. ${q[0]} lui en donne ${b}. Combien de perles a-t-${p[1]} ?`,a+b,`${a} + ${b} = ${a+b} perles.`);}
    if(t===4){const a=alea(6,10),b=alea(2,9);return nombre(`${p[0]} a ${a} ans. Sa grande sœur a ${b} ans de plus. Quel âge a sa sœur ?`,a+b,`${a} + ${b} = ${a+b} ans.`);}
    if(t===5){const a=alea(5,20);return nombre(`${p[0]} a ${a} images. ${q[0]} en a deux fois plus. Combien d'images a ${q[0]} ?`,2*a,`Deux fois plus, c'est le double : ${a} + ${a} = ${2*a}.`);}
    const a=alea(20,50),b=alea(11,19);return nombre(`Dans le jardin, il y a ${a} fleurs. ${p[0]} en cueille ${b}. Combien de fleurs reste-t-il ?`,a-b,`${a} − ${b} = ${a-b} fleurs.`);
  },
  calc1(){return pioche([GM.add10,GM.sous10,GM.decomp10,GM.avantapres10])();},
  calc2(){return pioche([GM.add10,GM.sous10,GM.complement10,GM.doubles,GM.nombres20])();},
  calc3(){return pioche([GM.add20,GM.sous20,GM.dizaines,GM.nombres60,GM.doubles])();},
  calc4(){return pioche([GM.adddiz,GM.addition2,GM.sous2,GM.moities,GM.suites,GM.nombres100])();}
};
function exoMaths(tag){const f=GM[tag]||GM[pioche(Object.keys(GM))];return f();}

/* Le rituel : une question de calcul très simple, un peu plus dure à chaque période */
function rituel(p){
  if(p===1){
    if(alea(0,1)){const n=alea(1,9);return nombre(`Combien font ${n} + 1 ?`,n+1,`${n} + 1, c'est le nombre qui suit : ${n+1}.`);}
    const n=alea(2,10);return nombre(`Combien font ${n} − 1 ?`,n-1,`${n} − 1, c'est le nombre d'avant : ${n-1}.`);
  }
  if(p===2){
    if(alea(0,1)){const a=alea(1,6),b=alea(1,10-a);return nombre(`Combien font ${a} + ${b} ?`,a+b,`${a} + ${b} = ${a+b}.`);}
    const a=alea(3,10),b=alea(1,3);return nombre(`Combien font ${a} − ${b} ?`,a-b,`${a} − ${b} = ${a-b}.`);
  }
  if(p===3){const t=alea(1,3);
    if(t===1){const n=alea(1,5);return nombre(`Combien font ${n} + ${n} ?`,2*n,`${n} + ${n} = ${2*n}.`);}
    if(t===2){const u=alea(1,9);return nombre(`Combien font 10 + ${u} ?`,10+u,`10 + ${u} = ${10+u}.`);}
    const a=alea(1,9);return nombre(`${a} + … = 10. Quel nombre manque ?`,10-a,`${a} + ${10-a} = 10.`);
  }
  const t=alea(1,3);
  if(t===1){const a=alea(5,9),b=alea(2,9);return nombre(`Combien font ${a} + ${b} ?`,a+b,`${a} + ${b} = ${a+b}.`);}
  if(t===2){const n=alea(10,80);return nombre(`Combien font ${n} + 10 ?`,n+10,`On ajoute 1 dizaine : ${n+10}.`);}
  const a=alea(11,19),b=alea(1,a-10);return nombre(`Combien font ${a} − ${b} ?`,a-b,`${a} − ${b} = ${a-b}.`);
}

/* =========================================================
   4. FRANÇAIS
   Pour chaque son : des mots où on l'entend (avec), des mots où on ne l'entend pas (sans).
   type : v = voyelle simple (pas encore de syllabe à assembler), c = consonne,
          vv = voyelle en plusieurs lettres (ou, on, an…), x = pas de syllabe à assembler.
   Les mots « sans » ne contiennent jamais les lettres du son.
   ========================================================= */
const SONS={
 a:{l:"a",type:"v",avec:["ami","avion","arbre","sac","papa","salade","table","rat","lavabo","tasse","girafe"],sans:["lit","vélo","moto","lune","ours","pied","livre","poule","hibou","tortue"]},
 i:{l:"i",type:"v",avec:["image","lit","riz","nid","souris","tapis","midi","kiwi","cerise","livre"],sans:["chat","moto","lune","sac","vélo","poule","robe","table","rue","bateau"]},
 o:{l:"o",type:"v",avec:["olive","moto","vélo","robe","domino","école","tomate","pomme"],sans:["lit","sac","lune","riz","papa","chat","mur","tapis","pied","sel"]},
 u:{l:"u",type:"v",avec:["usine","lune","mur","tortue","rue","plume","jupe","tulipe","sucre"],sans:["lit","sac","moto","vélo","chat","riz","papa","robe","table","tapis"]},
 "é":{l:"é",type:"v",avec:["été","épée","étoile","éléphant","vélo","bébé","café","dé","fée","télé"],sans:["lit","sac","moto","chat","papa","mur","tapis","riz","kiwi","hibou"]},
 e:{l:"e",ex:"le",type:"v",avec:["cheval","renard","petit","chemin","melon","cerise","genou","requin"],sans:["ami","lit","moto","papa","chat","riz","sac","kiwi","tapis","judo"]},
 l:{l:"l",type:"c",avec:["lit","lune","lama","lion","vélo","olive","salade","sel","livre"],sans:["chat","moto","papa","riz","sac","robe","mur","tapis","pomme","ami"]},
 r:{l:"r",type:"c",avec:["rat","riz","rue","robe","renard","mur","souris","tortue","girafe","arbre"],sans:["lit","sac","chat","moto","papa","lune","vélo","olive","salade","pomme"]},
 m:{l:"m",type:"c",avec:["moto","mur","mardi","mouton","ami","tomate","pomme","lama","plume"],sans:["lit","sac","chat","vélo","riz","robe","lune","tapis","salade","olive"]},
 s:{l:"s",type:"c",avec:["sac","sel","souris","salade","sapin","sucre","sirop","tasse","ours"],sans:["lit","moto","chat","vélo","riz","robe","lune","papa","tomate","mur"]},
 f:{l:"f",type:"c",avec:["fée","feu","fil","fusée","farine","fourmi","café","sofa","girafe"],sans:["lit","sac","moto","chat","riz","robe","lune","papa","tomate","mur"]},
 ch:{l:"ch",type:"c",avec:["chat","cheval","chemin","chocolat","chou","vache","niche","mouche","cochon"],sans:["sac","lit","moto","riz","robe","lune","papa","tomate","mur","souris"]},
 p:{l:"p",type:"c",avec:["papa","pied","pomme","pirate","pile","lapin","tapis","soupe","sapin"],sans:["lit","sac","moto","chat","riz","robe","lune","vélo","tomate","mur"]},
 t:{l:"t",type:"c",avec:["tapis","tomate","tortue","tasse","tulipe","table","tête","moto","étoile","pirate"],sans:["sac","riz","robe","lune","vélo","papa","mur","pomme","olive","souris"]},
 v:{l:"v",type:"c",avec:["vélo","vache","valise","vipère","cheval","olive","livre","lavabo","avion"],sans:["lit","sac","moto","chat","riz","robe","lune","papa","tomate","mur"]},
 n:{l:"n",type:"c",avec:["nid","nez","niche","navire","numéro","lune","âne","domino","farine","épine"],sans:["lit","sac","moto","chat","riz","robe","vélo","papa","tomate","mur"]},
 d:{l:"d",type:"c",avec:["dé","domino","dame","dodo","radis","salade","midi","rideau","madame"],sans:["lit","sac","moto","chat","riz","robe","lune","vélo","papa","tomate"]},
 ou:{l:"ou",ex:"loup",type:"vv",avec:["poule","roue","chou","hibou","mouton","souris","bouche","fourmi","soupe"],sans:["lit","sac","moto","lune","vélo","robe","papa","mur","tortue","riz"]},
 on:{l:"on",ex:"bonbon",type:"vv",avec:["ballon","pont","maison","lion","savon","montre","poisson","cochon","melon"],sans:["lit","sac","moto","lune","vélo","robe","papa","mur","poule","tomate"]},
 an:{l:"an",ex:"maman",type:"vv",avec:["pantalon","orange","éléphant","manteau","ruban","gant","banc","volcan"],sans:["lit","sac","moto","lune","vélo","robe","papa","mur","poule","tapis"]},
 in:{l:"in",ex:"lapin",type:"vv",avec:["sapin","moulin","matin","jardin","raisin","vin","dinde","lutin","poussin"],sans:["lit","sac","moto","lune","vélo","robe","papa","mur","poule","ami"]},
 oi:{l:"oi",ex:"roi",type:"vv",avec:["oiseau","poisson","étoile","noix","toit","moi","voiture","poire","armoire"],sans:["lit","sac","moto","lune","vélo","robe","papa","mur","poule","tapis"]},
 j:{l:"j",type:"c",avec:["jupe","judo","jardin","jeu","joli","jouet","jaune","pyjama","bijou"],sans:["lit","sac","moto","lune","vélo","robe","papa","mur","poule","chat"]},
 b:{l:"b",type:"c",avec:["bébé","bateau","ballon","banane","bulle","biberon","robe","lavabo","abeille"],sans:["lit","sac","moto","lune","vélo","papa","mur","poule","chat","tapis"]},
 c:{l:"c",ex:"coq",type:"c",voy:["a","o","u"],avec:["café","cube","carotte","canard","cartable","colle","sac","lac","école"],sans:["lit","moto","lune","vélo","robe","papa","mur","poule","tapis","riz"]},
 "è":{l:"è",ex:"mère",type:"vv",avec:["père","frère","chèvre","flèche","zèbre","lèvre","rivière","sorcière","crème"],sans:["lit","sac","moto","lune","papa","mur","poule","robe","tapis","chat"]},
 eu:{l:"eu",ex:"feu",type:"vv",avec:["jeu","bleu","cheveu","deux","neveu","fleur","beurre","peur"],sans:["lit","sac","moto","lune","vélo","papa","mur","poule","robe","chat"]},
 au:{l:"au",ex:"auto",type:"vv",avec:["chaud","jaune","saucisse","gâteau","bateau","chapeau","cadeau","seau","taureau"],sans:["lit","sac","lune","vélo","papa","mur","poule","chat","riz","tapis"]},
 g:{l:"g",ex:"gare",type:"c",voy:["a","o","u"],avec:["gomme","gâteau","gorille","guitare","légume","bague","wagon","grenouille"],sans:["lit","sac","moto","lune","vélo","robe","papa","mur","poule","chat"]},
 gn:{l:"gn",ex:"ligne",type:"x",avec:["montagne","champignon","araignée","peigne","agneau","cygne","signe","baignoire"],sans:["lit","sac","moto","lune","vélo","robe","papa","mur","poule","chat"]}
};
const CONSONNES=["l","r","m","s","f","ch","p","t","v","n","d","j","b"];
const VOYELLES=["a","i","o","u","é"];
const VOYELLES2=["ou","on","an","in","oi","eu","au"];
const nomSon=s=>`le son « ${s.l} »${s.ex?` (comme dans « ${s.ex} »)`:""}`;

function exoSon(cle){
  const s=SONS[cle];
  const types=["entend","entend","pas"];
  if(s.type==="c"||s.type==="vv")types.push("fusion","fusion");
  if(/^[a-z]$/.test(cle))types.push("majuscule");
  const debut=s.avec.filter(m=>m.startsWith(cle));
  if(debut.length)types.push("commence");
  const t=pioche(types);
  if(t==="entend")return qcm(`Dans quel mot entends-tu ${nomSon(s)} ?`,pioche(s.avec),melange(s.sans).slice(0,3),`On entend « ${s.l} » dans ce mot.`);
  if(t==="pas")return qcm(`Dans quel mot n'entends-tu pas ${nomSon(s)} ?`,pioche(s.sans),melange(s.avec).slice(0,3),`Dans ce mot, il n'y a pas de « ${s.l} ».`);
  if(t==="commence")return qcm(`Quel mot commence par ${nomSon(s)} ?`,pioche(debut),melange(s.sans).slice(0,3),`Ce mot commence par « ${s.l} ».`);
  if(t==="majuscule"){const autres=melange(["a","i","o","u","l","r","m","s","f","p","t","v","n","d","j","b","c","g"].filter(x=>x!==cle)).slice(0,3);
    return qcm(`Quelle est la petite lettre (minuscule) de « ${cle.toUpperCase()} » ?`,cle,autres,`« ${cle.toUpperCase()} » et « ${cle} », c'est la même lettre.`);}
  // fusion : assembler une syllabe
  let c,v,fausses;
  if(s.type==="c"){c=cle;v=pioche(s.voy||VOYELLES);
    const autreV=pioche((s.voy||VOYELLES).filter(x=>x!==v)),autreC=pioche(CONSONNES.filter(x=>x!==c));
    fausses=[v+c,c+autreV,autreC+v];}
  else{c=pioche(["l","r","m","s","f","p","t","v","n","d"]);v=cle;
    const autreV=pioche(VOYELLES2.concat(["è"]).filter(x=>x!==v)),autreC=pioche(CONSONNES.filter(x=>x!==c));
    fausses=[v+c,c+autreV,autreC+v];}
  return qcm(`Lis : ${c} + ${v} = ?`,c+v,fausses,`« ${c} » et « ${v} », ça fait « ${c+v} ».`);
}

const SYLLABES=[["chat",1],["lit",1],["riz",1],["sac",1],["pont",1],["loup",1],["bain",1],["ami",2],["vélo",2],["moto",2],["lapin",2],["papa",2],["bébé",2],["gâteau",2],["mouton",2],["cadeau",2],["jardin",2],["lavabo",3],["domino",3],["éléphant",3],["chocolat",3],["pantalon",3],["kangourou",3],["ananas",3],["ordinateur",4],["télévision",4]];
const PHRASES=["Le chat dort.","Papa lit un livre.","Lili a un vélo.","Tom mange une pomme.","La poule est sur le mur.","Le loup a faim.","Maman fait une tarte.","Le bébé rit.","Sami joue au ballon.","Le chien court vite.","La lune brille.","Zoé a un chat roux."];
const NOMS=[["chat","m","chats"],["table","f","tables"],["vélo","m","vélos"],["pomme","f","pommes"],["lune","f","lunes"],["ballon","m","ballons"],["maison","f","maisons"],["livre","m","livres"],["poule","f","poules"],["cheval","m","chevaux"],["fleur","f","fleurs"],["robe","f","robes"],["sac","m","sacs"],["voiture","f","voitures"],["loup","m","loups"],["tortue","f","tortues"],["lapin","m","lapins"],["chapeau","m","chapeaux"],["fusée","f","fusées"],["poisson","m","poissons"]];
const FEMININS=[["un ami","une amie"],["un cousin","une cousine"],["un voisin","une voisine"],["un chien","une chienne"],["un lion","une lionne"],["un roi","une reine"],["un garçon","une fille"],["un frère","une sœur"],["un oncle","une tante"],["un papa","une maman"]];
const LECTURE=[
 {q:"Lis : « Léo a un chien. » Qui a un chien ?",b:"Léo",f:["Lili","Papa","Tom"],e:"La phrase dit : « Léo a un chien »."},
 {q:"Lis : « Le chat dort sur le lit. » Où dort le chat ?",b:"sur le lit",f:["dans l'eau","sur la route","dans le four"],e:"La phrase dit : « sur le lit »."},
 {q:"Lis : « Lina mange une pomme. » Que mange Lina ?",b:"une pomme",f:["un livre","une chaise","un vélo"],e:"La phrase dit : « une pomme »."},
 {q:"Lis : « Le ballon de Tom est rouge. » De quelle couleur est le ballon ?",b:"rouge",f:["bleu","vert","jaune"],e:"La phrase dit : « rouge »."},
 {q:"Lis : « Papa lit un livre. » Que fait papa ?",b:"il lit",f:["il dort","il court","il chante"],e:"Papa lit un livre."},
 {q:"Lis : « Il pleut. Zoé prend son parapluie. » Quel temps fait-il ?",b:"il pleut",f:["il fait beau","il neige","il fait chaud"],e:"La phrase dit : « Il pleut »."},
 {q:"Lis : « Le lapin a mangé la carotte. » Qui a mangé la carotte ?",b:"le lapin",f:["le chat","le loup","la poule"],e:"C'est le lapin qui a mangé la carotte."},
 {q:"Lis : « Sami a trois billes. » Combien de billes a Sami ?",b:"trois",f:["une","dix","cinq"],e:"La phrase dit : « trois billes »."},
 {q:"Lis : « Le soir, Malo va au lit. » Quand Malo va-t-il au lit ?",b:"le soir",f:["le matin","à midi","à la récréation"],e:"La phrase dit : « Le soir »."},
 {q:"Lis : « La poule est sur le mur. » Où est la poule ?",b:"sur le mur",f:["dans le lit","sous la table","dans la mare"],e:"La phrase dit : « sur le mur »."}
];
const motsDe=ph=>ph.replace(/[.!?]$/,"").split(" ");
const GF={
  son(tag){const cles=tag==="tous"?Object.keys(SONS):tag.split(".").filter(k=>SONS[k]);return exoSon(pioche(cles));},
  syllabes(){
    if(alea(0,2)){const m=pioche(SYLLABES);
      return qcm(`Combien de syllabes dans « ${m[0]} » ?`,String(m[1]),["1","2","3","4"].filter(x=>x!==String(m[1])),`On tape dans ses mains à chaque syllabe : ${m[1]}.`);}
    return exoSon(pioche(CONSONNES.concat(["c","g"])));
  },
  phrase(){
    const ph=pioche(PHRASES),mots=motsDe(ph),t=alea(1,3);
    if(t===1)return qcm(`Combien de mots dans : « ${ph} » ?`,String(mots.length),[String(mots.length-1),String(mots.length+1),String(mots.length+2)],`On compte les mots : ${mots.join(" / ")}.`);
    if(t===2){const sansMaj=ph.charAt(0).toLowerCase()+ph.slice(1);
      return qcm(`Quelle phrase est bien écrite ?`,ph,[sansMaj,ph.slice(0,-1),sansMaj.slice(0,-1)],`Une phrase commence par une majuscule et finit par un point.`);}
    const autres=[];
    for(let k=0;k<30&&autres.length<3;k++){const p=melange(mots).join(" ")+".";if(p!==ph&&!autres.includes(p))autres.push(p);}
    return qcm(`Range les mots pour faire une phrase : ${melange(mots).join(" / ")}`,ph,autres,`La phrase commence par la majuscule : « ${ph} »`);
  },
  genre(){
    const t=alea(1,3);
    if(t===1){const n=pioche(NOMS);return qcm(`Complète : ___ ${n[0]}`,n[1]==="m"?"un":"une",[n[1]==="m"?"une":"un"],`On dit « ${n[1]==="m"?"un":"une"} ${n[0]} ».`);}
    if(t===2){const n=pioche(NOMS);return qcm(`Complète : ___ ${n[0]}`,n[1]==="m"?"le":"la",[n[1]==="m"?"la":"le"],`On dit « ${n[1]==="m"?"le":"la"} ${n[0]} ».`);}
    const x=pioche(FEMININS);
    return qcm(`Au féminin, « ${x[0]} » devient :`,x[1],melange(FEMININS.filter(y=>y!==x)).slice(0,3).map(y=>y[1]),`${maj(x[0])}, ${x[1]}.`);
  },
  nombre(){
    const n=pioche(NOMS),t=alea(1,3);
    if(t===1)return qcm(`Complète : ___ ${n[2]}`,"les",[n[1]==="m"?"le":"la"],`Il y en a plusieurs : on dit « les ${n[2]} ».`);
    if(t===2)return qcm(`${n[1]==="m"?"Un":"Une"} ${n[0]}, des … ?`,n[2],[n[0]],`Quand il y en a plusieurs, on écrit « des ${n[2]} ».`);
    return qcm(`« des ${n[2]} » : il y en a un seul ou plusieurs ?`,"plusieurs",["un seul"],`« des » veut dire qu'il y en a plusieurs.`);
  },
  accords(){return alea(0,1)?GF.genre():GF.nombre();},
  lecture(){if(!alea(0,3))return GF.phrase();const x=pioche(LECTURE);return qcm(x.q,x.b,x.f,x.e);}
};
function exoFrancais(tag){
  if(GF[tag]&&tag!=="son")return GF[tag]();
  return GF.son(tag);
}

/* =========================================================
   5. ANGLAIS (initiation, à l'oral)
   ========================================================= */
const VOC_EN=[
 {t:"couleurs",en:"red",fr:"rouge"},{t:"couleurs",en:"blue",fr:"bleu"},{t:"couleurs",en:"green",fr:"vert"},{t:"couleurs",en:"yellow",fr:"jaune"},{t:"couleurs",en:"black",fr:"noir"},{t:"couleurs",en:"white",fr:"blanc"},{t:"couleurs",en:"pink",fr:"rose"},
 {t:"animaux",en:"a dog",fr:"un chien"},{t:"animaux",en:"a cat",fr:"un chat"},{t:"animaux",en:"a bird",fr:"un oiseau"},{t:"animaux",en:"a fish",fr:"un poisson"},{t:"animaux",en:"a rabbit",fr:"un lapin"},{t:"animaux",en:"a horse",fr:"un cheval"},{t:"animaux",en:"a cow",fr:"une vache"},
 {t:"famille",en:"mum",fr:"maman"},{t:"famille",en:"dad",fr:"papa"},{t:"famille",en:"a brother",fr:"un frère"},{t:"famille",en:"a sister",fr:"une sœur"},{t:"famille",en:"a baby",fr:"un bébé"},{t:"famille",en:"grandma",fr:"mamie"},
 {t:"corps",en:"a head",fr:"une tête"},{t:"corps",en:"a hand",fr:"une main"},{t:"corps",en:"a nose",fr:"un nez"},{t:"corps",en:"a mouth",fr:"une bouche"},{t:"corps",en:"an ear",fr:"une oreille"},{t:"corps",en:"a foot",fr:"un pied"},
 {t:"fruits",en:"an apple",fr:"une pomme"},{t:"fruits",en:"a banana",fr:"une banane"},{t:"fruits",en:"a strawberry",fr:"une fraise"},{t:"fruits",en:"a pear",fr:"une poire"},{t:"fruits",en:"a cherry",fr:"une cerise"},
 {t:"noel",en:"Father Christmas",fr:"le père Noël"},{t:"noel",en:"a Christmas tree",fr:"un sapin de Noël"},{t:"noel",en:"a present",fr:"un cadeau"},{t:"noel",en:"a star",fr:"une étoile"},{t:"noel",en:"snow",fr:"la neige"}
];
const NOMBRES_EN=["zero","one","two","three","four","five","six","seven","eight","nine","ten"];
const GRAM_EN=[
 {t:"greetings",q:"Comment dit-on « bonjour » en anglais ?",b:"hello",f:["goodbye","thank you","yes"],e:"Bonjour, c'est « hello »."},
 {t:"greetings",q:"Comment dit-on « au revoir » en anglais ?",b:"goodbye",f:["hello","please","no"],e:"Au revoir, c'est « goodbye »."},
 {t:"greetings",q:"Comment dit-on « merci » en anglais ?",b:"thank you",f:["hello","goodbye","yes"],e:"Merci, c'est « thank you »."},
 {t:"greetings",q:"Que veut dire « yes » ?",b:"oui",f:["non","merci","bonjour"],e:"« yes » veut dire oui."},
 {t:"greetings",q:"Que veut dire « no » ?",b:"non",f:["oui","merci","au revoir"],e:"« no » veut dire non."},
 {t:"greetings",q:"Que veut dire « What's your name? » ?",b:"Comment t'appelles-tu ?",f:["Quel âge as-tu ?","Où vas-tu ?","Ça va ?"],e:"« name », c'est le nom, le prénom."},
 {t:"greetings",q:"Comment dit-on « je m'appelle Léa » ?",b:"My name is Léa",f:["I am six","Goodbye Léa","Thank you Léa"],e:"Pour dire son prénom : « My name is… »."},
 {t:"greetings",q:"Que veut dire « please » ?",b:"s'il te plaît",f:["merci","bonjour","au revoir"],e:"« please » veut dire s'il te plaît."}
];
function exoAnglais(tag){
  if(tag==="greetings"){const x=pioche(GRAM_EN);return qcm(x.q,x.b,x.f,x.e);}
  if(tag==="nombres"||tag==="nombres5"){
    const max=tag==="nombres5"?5:10,n=alea(1,max);
    const autres=melange([1,2,3,4,5,6,7,8,9,10].filter(x=>x!==n&&x<=max+2)).slice(0,3);
    if(alea(0,1))return qcm(`Comment dit-on « ${n} » en anglais ?`,NOMBRES_EN[n],autres.map(x=>NOMBRES_EN[x]),`${n} se dit « ${NOMBRES_EN[n]} ».`);
    return qcm(`Que veut dire « ${NOMBRES_EN[n]} » ?`,String(n),autres.map(String),`« ${NOMBRES_EN[n]} », c'est ${n}.`);
  }
  const f=VOC_EN.filter(x=>x.t===tag);const m=pioche(f.length?f:VOC_EN);
  const autres=melange(VOC_EN.filter(x=>x.t===m.t&&x.en!==m.en)).slice(0,3);
  if(alea(0,1))return qcm(`Que veut dire « ${m.en} » ?`,m.fr,autres.map(x=>x.fr),`« ${m.en} » veut dire « ${m.fr} ».`);
  return qcm(`Comment dit-on « ${m.fr} » en anglais ?`,m.en,autres.map(x=>x.en),`« ${m.fr} » se dit « ${m.en} ».`);
}

/* =========================================================
   6. QUESTIONNER LE MONDE
   ========================================================= */
const BANQUE_Q=[
 {t:"vivant",q:"Qu'est-ce qui est vivant ?",b:"un chat",f:["un caillou","une chaise","un ballon"],e:"Le chat naît, mange, grandit : il est vivant."},
 {t:"vivant",q:"Qu'est-ce qui est vivant ?",b:"une fleur",f:["un vélo","une table","une cuillère"],e:"La fleur pousse et grandit : elle est vivante."},
 {t:"vivant",q:"Qu'est-ce qui n'est pas vivant ?",b:"une pierre",f:["un arbre","un chien","une fourmi"],e:"Une pierre ne mange pas et ne grandit pas."},
 {t:"vivant",q:"Qu'est-ce qui n'est pas vivant ?",b:"une voiture",f:["un oiseau","un poisson","un bébé"],e:"Une voiture est fabriquée : elle n'est pas vivante."},
 {t:"vivant",q:"Un arbre est-il vivant ?",b:"oui",f:["non"],e:"L'arbre boit de l'eau, pousse et grandit."},
 {t:"vivant",q:"Un être vivant…",b:"grandit",f:["ne change jamais","est en plastique","ne mange jamais"],e:"Tous les êtres vivants naissent, se nourrissent et grandissent."},
 {t:"vivant",q:"Où vit un poisson ?",b:"dans l'eau",f:["dans un arbre","dans le sable sec","dans le ciel"],e:"Le poisson respire dans l'eau."},
 {t:"sens",q:"Avec quoi entend-on ?",b:"les oreilles",f:["les yeux","le nez","les pieds"],e:"Les oreilles servent à entendre."},
 {t:"sens",q:"Avec quoi voit-on ?",b:"les yeux",f:["les oreilles","la langue","les mains"],e:"Les yeux servent à voir."},
 {t:"sens",q:"Avec quoi sent-on les odeurs ?",b:"le nez",f:["les yeux","les oreilles","les genoux"],e:"Le nez sert à sentir les odeurs."},
 {t:"sens",q:"Avec quoi goûte-t-on ?",b:"la langue",f:["le nez","les oreilles","les cheveux"],e:"La langue sent le sucré, le salé…"},
 {t:"sens",q:"Avec quoi touche-t-on ?",b:"la peau, les mains",f:["les oreilles","les cheveux","les dents"],e:"Avec la peau, on sent le doux, le froid, le piquant."},
 {t:"sens",q:"Combien avons-nous de sens ?",b:"5",f:["2","3","10"],e:"Voir, entendre, sentir, goûter, toucher : 5 sens."},
 {t:"sens",q:"Combien de doigts sur une main ?",b:"5",f:["4","6","10"],e:"Une main a 5 doigts."},
 {t:"animaux",q:"Le bébé de la vache s'appelle :",b:"le veau",f:["le poussin","le chaton","le chiot"],e:"La vache a un veau."},
 {t:"animaux",q:"Le bébé de la poule s'appelle :",b:"le poussin",f:["le veau","l'agneau","le poulain"],e:"Le poussin sort de l'œuf."},
 {t:"animaux",q:"Le bébé du chien s'appelle :",b:"le chiot",f:["le chaton","le veau","le poussin"],e:"Le chien a des chiots."},
 {t:"animaux",q:"Le bébé du chat s'appelle :",b:"le chaton",f:["le chiot","le poulain","l'agneau"],e:"La chatte a des chatons."},
 {t:"animaux",q:"Le bébé du mouton s'appelle :",b:"l'agneau",f:["le veau","le chaton","le poussin"],e:"La brebis a un agneau."},
 {t:"animaux",q:"Le bébé du cheval s'appelle :",b:"le poulain",f:["le chiot","l'agneau","le poussin"],e:"La jument a un poulain."},
 {t:"animaux",q:"Quel animal a des plumes ?",b:"la poule",f:["le chien","le chat","le poisson"],e:"Les oiseaux ont des plumes."},
 {t:"animaux",q:"Que mange la vache ?",b:"de l'herbe",f:["des cailloux","du chocolat","des bonbons"],e:"La vache mange de l'herbe et du foin."},
 {t:"animaux",q:"Quel animal mange des carottes ?",b:"le lapin",f:["le requin","l'araignée","le lion"],e:"Le lapin aime les carottes et l'herbe."},
 {t:"sante",q:"Quand faut-il se laver les mains ?",b:"avant de manger",f:["jamais","une fois par mois","seulement le dimanche"],e:"On se lave les mains avant de manger et après les toilettes."},
 {t:"sante",q:"Quelle boisson est la meilleure pour la santé ?",b:"l'eau",f:["le soda","le sirop","le jus très sucré"],e:"L'eau, c'est la boisson pour bien grandir."},
 {t:"sante",q:"Pour être en forme, il faut :",b:"bien dormir",f:["se coucher très tard","ne pas manger","rester devant un écran"],e:"Un enfant a besoin de beaucoup de sommeil."},
 {t:"sante",q:"Quel aliment est un fruit ?",b:"la pomme",f:["le fromage","le pain","la viande"],e:"La pomme pousse sur un arbre : c'est un fruit."},
 {t:"sante",q:"Quel aliment est un légume ?",b:"la carotte",f:["le gâteau","le lait","le pain"],e:"La carotte est un légume."},
 {t:"sante",q:"Combien de fois par jour se brosse-t-on les dents ?",b:"au moins 2 fois",f:["jamais","une fois par semaine","une fois par mois"],e:"Le matin et le soir, au moins."},
 {t:"sante",q:"Après les toilettes, on…",b:"se lave les mains",f:["mange un gâteau","va dormir","met son manteau"],e:"Le savon enlève les microbes."},
 {t:"saisons",q:"Combien y a-t-il de saisons ?",b:"4",f:["2","7","12"],e:"Printemps, été, automne, hiver."},
 {t:"saisons",q:"Quelle saison vient après l'été ?",b:"l'automne",f:["le printemps","l'hiver"],e:"Été, puis automne."},
 {t:"saisons",q:"Quelle saison vient après l'automne ?",b:"l'hiver",f:["l'été","le printemps"],e:"Automne, puis hiver."},
 {t:"saisons",q:"Quelle saison vient après l'hiver ?",b:"le printemps",f:["l'été","l'automne"],e:"Hiver, puis printemps."},
 {t:"saisons",q:"Quelle saison vient après le printemps ?",b:"l'été",f:["l'hiver","l'automne"],e:"Printemps, puis été."},
 {t:"saisons",q:"En quelle saison les feuilles tombent-elles ?",b:"en automne",f:["en été","au printemps"],e:"En automne, les feuilles jaunissent et tombent."},
 {t:"saisons",q:"En quelle saison fait-il le plus froid ?",b:"en hiver",f:["en été","au printemps"],e:"L'hiver est la saison la plus froide."},
 {t:"saisons",q:"En quelle saison fait-il le plus chaud ?",b:"en été",f:["en hiver","en automne"],e:"L'été est la saison la plus chaude."},
 {t:"saisons",q:"En quelle saison les fleurs repoussent-elles ?",b:"au printemps",f:["en hiver","en automne"],e:"Au printemps, la nature se réveille."},
 {t:"matiere",q:"Quand il gèle, l'eau devient :",b:"de la glace",f:["du sable","du lait","de la fumée"],e:"Quand il fait très froid, l'eau devient de la glace."},
 {t:"matiere",q:"Un glaçon au soleil devient :",b:"de l'eau",f:["du sable","un caillou","du lait"],e:"La glace fond et redevient de l'eau."},
 {t:"matiere",q:"Que devient la neige au soleil ?",b:"de l'eau",f:["du sucre","du sable","de la glace plus grosse"],e:"La neige fond avec la chaleur."},
 {t:"matiere",q:"Qu'est-ce qui coule ?",b:"l'eau",f:["une pierre","un bout de bois","une clé"],e:"L'eau est un liquide : elle coule."},
 {t:"matiere",q:"Qu'est-ce qui est dur ?",b:"un caillou",f:["l'eau","le lait","la soupe"],e:"Le caillou est un solide : il est dur."},
 {t:"matiere",q:"Qu'est-ce qui flotte sur l'eau ?",b:"un bouchon",f:["une clé","un caillou","une pièce"],e:"Le bouchon est léger : il flotte."},
 {t:"matiere",q:"Qu'est-ce qui coule au fond de l'eau ?",b:"un caillou",f:["un bouchon","une feuille d'arbre","un canard en plastique"],e:"Le caillou est lourd : il coule au fond."},
 {t:"plantes",q:"De quoi a besoin une plante pour pousser ?",b:"d'eau et de lumière",f:["de bonbons","de rien du tout","de noir complet"],e:"Sans eau et sans lumière, la plante meurt."},
 {t:"plantes",q:"Une plante pousse à partir :",b:"d'une graine",f:["d'un caillou","d'une bille","d'un bonbon"],e:"On plante une graine, et elle pousse."},
 {t:"plantes",q:"Quelle partie de la plante est sous la terre ?",b:"les racines",f:["les fleurs","les feuilles","les fruits"],e:"Les racines boivent l'eau dans la terre."},
 {t:"plantes",q:"Sur quel arbre poussent les pommes ?",b:"le pommier",f:["le sapin","le cerisier","le chêne"],e:"Le pommier donne des pommes."},
 {t:"plantes",q:"Une plante est-elle vivante ?",b:"oui",f:["non"],e:"Elle naît d'une graine, boit et grandit."},
 {t:"plantes",q:"Qu'est-ce qu'il y a dans une pomme ?",b:"des pépins",f:["des cailloux","du sable","des billes"],e:"Les pépins sont les graines de la pomme."},
 {t:"securite",q:"Pour traverser, le bonhomme doit être :",b:"vert",f:["rouge","noir","bleu"],e:"Bonhomme vert : on peut traverser."},
 {t:"securite",q:"Où traverse-t-on la route ?",b:"sur le passage piéton",f:["n'importe où","entre deux voitures","au milieu du virage"],e:"Le passage piéton, ce sont les bandes blanches."},
 {t:"securite",q:"En voiture, on attache :",b:"sa ceinture",f:["ses lacets","son manteau","son cartable"],e:"La ceinture nous protège."},
 {t:"securite",q:"À vélo, on met :",b:"un casque",f:["un bonnet de bain","des lunettes de soleil","un tablier"],e:"Le casque protège la tête."},
 {t:"securite",q:"Avant de traverser, on regarde :",b:"à gauche et à droite",f:["en l'air","ses chaussures","son téléphone"],e:"On regarde bien des deux côtés."},
 {t:"securite",q:"Le feu est rouge pour les voitures. Elles doivent :",b:"s'arrêter",f:["aller vite","klaxonner","reculer"],e:"Rouge, c'est stop."},
 {t:"temps",q:"Combien y a-t-il de jours dans une semaine ?",b:"7",f:["5","10","12"],e:"Lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche."},
 {t:"temps",q:"Combien y a-t-il de mois dans une année ?",b:"12",f:["7","10","4"],e:"De janvier à décembre : 12 mois."},
 {t:"temps",q:"Quel est le premier mois de l'année ?",b:"janvier",f:["mars","juin","décembre"],e:"L'année commence en janvier."},
 {t:"temps",q:"Hier, aujourd'hui, et après ?",b:"demain",f:["hier","avant-hier"],e:"Demain, c'est le jour qui vient."},
 {t:"temps",q:"Le matin, on prend :",b:"le petit-déjeuner",f:["le dîner","le goûter"],e:"Le matin, petit-déjeuner ; le soir, dîner."}
];
const JOURS_NOMS=["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
const MOIS=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
function exoMonde(tag){
  if(tag==="temps"&&alea(0,1)){
    const liste=alea(0,1)?JOURS_NOMS:MOIS,nom=liste===JOURS_NOMS?"jour":"mois",i=alea(0,liste.length-1),L=liste.length;
    const fausses=b=>melange(liste.filter(x=>x!==b)).slice(0,3);
    if(alea(0,1)){const b=liste[(i+1)%L];return qcm(`Quel ${nom} vient après ${liste[i]} ?`,b,fausses(b),`Après ${liste[i]}, c'est ${b}.`);}
    const b=liste[(i+L-1)%L];return qcm(`Quel ${nom} vient avant ${liste[i]} ?`,b,fausses(b),`Avant ${liste[i]}, c'est ${b}.`);
  }
  return parTag(BANQUE_Q,tag);
}

/* =========================================================
   7. LA SÉANCE
   ========================================================= */
function exoMatiere(mat,sem){
  if(mat==="m")return exoMaths(sem.tm);
  if(mat==="f")return exoFrancais(sem.tf);
  if(mat==="a")return exoAnglais(sem.ta);
  return exoMonde(sem.tq);
}
function seanceHorsLigne(mat,semaine){
  const sem=SEMAINES[semaine-1];
  if(mat==="rev")return [rituel(sem.p),exoMatiere("m",sem),exoMatiere("f",sem),exoMatiere("m",sem),
                         exoMatiere("f",sem),exoMatiere(matiereDuJour(semaine,4),sem)];
  const q=[rituel(sem.p)]; // rituel de calcul
  for(let i=0;i<3;i++)q.push(exoMatiere(mat,sem));
  return q;
}

export const programme = { code: "cp", nom: "CP", rituel: "Une question de calcul pour commencer. Un adulte peut lire les questions avec toi.", SEMAINES, JOURS, NOM_MAT, PERIODES, matiereDuJour, seanceHorsLigne };
