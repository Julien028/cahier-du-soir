// Programme de CM1 (cycle 3), écrit le 08/10/2026 sur le modèle de 6e.js.
// C'est la seule source : on le modifie ici.

/* =========================================================
   1. LE PROGRAMME DE CM1 — 36 SEMAINES
   t = étiquettes de sélection des exercices :
       maths | français | anglais | sciences | histoire-géo
   ========================================================= */
const SEMAINES = [
{n:1,p:1,m:"Les grands nombres jusqu'au million : lire, écrire, décomposer",f:"La phrase et ses types : déclarative, interrogative, exclamative, injonctive",a:"Se présenter : hello, goodbye, my name is…",s:"Les états de la matière : solide, liquide, gaz",h:"Se repérer dans le temps : frise, siècles, grandes périodes",t:"grandsnombres|phrase|greetings|matiere|temps"},
{n:2,p:1,m:"Comparer, ranger et encadrer les grands nombres",f:"Les classes de mots : nom, déterminant, adjectif, verbe, pronom",a:"Les nombres en anglais jusqu'à 100",s:"L'eau : fusion, solidification, vaporisation",h:"Habiter : les lieux où j'habite",t:"comparer|classes|numbers|matiere|habiter"},
{n:3,p:1,m:"Addition et soustraction posées",f:"Le présent des verbes du 1er et du 2e groupe",a:"La famille",s:"Les mélanges et les solutions",h:"Les Celtes et les Gaulois",t:"addsub|present|family|melanges|celtes"},
{n:4,p:1,m:"Les tables de multiplication et les multiples",f:"Le sujet du verbe et l'accord sujet-verbe",a:"Le verbe to be : I am, you are, he is",s:"L'air est de la matière",h:"Habiter : ville, village, campagne",t:"multiples|sujetverbe|tobe|matiere|habiter"},
{n:5,p:1,m:"La multiplication posée par un nombre à un chiffre",f:"Le présent des verbes être, avoir, aller, faire et du 3e groupe",a:"Les animaux",s:"Classer les êtres vivants",h:"La conquête de la Gaule par les Romains",t:"mult|present|animals|classif|romains"},
{n:6,p:1,m:"Droites parallèles et perpendiculaires",f:"Les homophones a/à, et/est, on/ont",a:"Have got : décrire sa famille",s:"Vertébrés et invertébrés",h:"EMC : les règles de la classe et de l'école",t:"geom|homophones|havegot|classif|emc"},
{n:7,p:1,m:"Bilan : grands nombres et opérations",f:"Bilan : le présent et les accords",a:"Bilan de la période 1",s:"Bilan : la matière",h:"Bilan : Gaulois et Gallo-Romains",t:"grandsnombres|conjug|tobe|matiere|romains"},
{n:8,p:2,m:"La multiplication par un nombre à deux chiffres",f:"L'imparfait de l'indicatif",a:"Les jours, les mois et la date",s:"Les besoins alimentaires de l'être humain",h:"Clovis, roi des Francs",t:"mult2|imparfait|days|alimentation|francs"},
{n:9,p:2,m:"Les longueurs : km, m, cm, mm",f:"Le futur simple",a:"Le temps qu'il fait",s:"Origine et conservation des aliments",h:"Se loger en France",t:"longueurs|futur|weather|alimentation|loger"},
{n:10,p:2,m:"La division : partager, quotient et reste",f:"Les accords dans le groupe nominal",a:"Les vêtements",s:"Les chaînes alimentaires",h:"Charlemagne, empereur en 800",t:"division|gn|clothes|chaines|francs"},
{n:11,p:2,m:"Les masses : t, kg, g",f:"Le passé composé avec l'auxiliaire avoir",a:"Can / can't : ce que je sais faire",s:"Le développement des êtres vivants",h:"Hugues Capet et les premiers Capétiens",t:"masses|passecompose|can|developpement|capetiens"},
{n:12,p:2,m:"Les polygones : triangles et quadrilatères",f:"Synonymes et contraires",a:"Christmas",s:"Le Soleil et les planètes",h:"Seigneurs, châteaux forts et paysans",t:"polygones|synonymes|christmas|terre|capetiens"},
{n:13,p:2,m:"Problèmes : bien lire l'énoncé",f:"Le passé composé avec l'auxiliaire être",a:"Le corps",s:"Le jour et la nuit : la rotation de la Terre",h:"Louis IX, dit Saint Louis",t:"problemes|passecompose|body|jour|capetiens"},
{n:14,p:2,m:"Bilan de la période 2 : calcul et mesures",f:"Bilan : imparfait, futur, passé composé",a:"Bilan de la période 2",s:"Bilan : l'alimentation",h:"Bilan : des Francs aux Capétiens",t:"bilan|conjug|can|alimentation|francs"},
{n:15,p:3,m:"Les fractions : partager une unité",f:"Le passé simple à la 3e personne",a:"La maison",s:"Les saisons et le tour de la Terre autour du Soleil",h:"Travailler en France",t:"fractions|passesimple|house|jour|travailler"},
{n:16,p:3,m:"Les fractions : comparer, fractions plus grandes que 1",f:"Le complément d'objet direct (COD)",a:"There is / there are",s:"Les sources d'énergie",h:"François Ier et la Renaissance",t:"fractions|fonctions|thereis|energie|renaissance"},
{n:17,p:3,m:"Les fractions décimales : dixièmes et centièmes",f:"Les compléments circonstanciels : lieu, temps, manière",a:"L'école",s:"Le circuit électrique",h:"Travailler : agriculture, industrie, services",t:"fracdec|complements|school|electricite|travailler"},
{n:18,p:3,m:"Les durées : heures, minutes, secondes",f:"Les familles de mots",a:"I like / I don't like",s:"Conducteurs et isolants",h:"Henri IV et l'édit de Nantes",t:"durees|familles|like|electricite|renaissance"},
{n:19,p:3,m:"Les nombres décimaux : lire, écrire, décomposer",f:"Préfixes et suffixes",a:"La nourriture",s:"Les objets techniques : à quoi servent-ils ?",h:"EMC : l'égalité entre filles et garçons",t:"decimaux|prefixes|food|objets|emc"},
{n:20,p:3,m:"Comparer et ranger les nombres décimaux",f:"Imparfait et passé simple dans le récit",a:"Dire l'heure",s:"Matériaux et objets",h:"Louis XIV, le Roi-Soleil",t:"compdec|passesimple|time|objets|louis14"},
{n:21,p:3,m:"Bilan : fractions et décimaux",f:"Bilan de la période 3",a:"Bilan de la période 3",s:"Bilan : énergie et électricité",h:"Bilan : de François Ier à Louis XIV",t:"fractions|conjug|food|energie|louis14"},
{n:22,p:4,m:"Additionner et soustraire des nombres décimaux",f:"Les homophones son/sont, ou/où, ces/ses",a:"To be : révision et questions",s:"Les planètes du système solaire",h:"Versailles et la monarchie absolue",t:"adddec|homophones|tobe|terre|louis14"},
{n:23,p:4,m:"La monnaie : euros et centimes",f:"Les classes de mots : adverbes, prépositions, conjonctions",a:"Les prépositions de lieu",s:"La Lune, satellite de la Terre",h:"Se cultiver en France",t:"monnaie|classes|prepositions|jour|cultiver"},
{n:24,p:4,m:"Les contenances : L, dL, cL, mL",f:"L'accord sujet-verbe : sujets éloignés ou inversés",a:"Can : les sports et les loisirs",s:"Les grands groupes d'animaux",h:"1789 : la Révolution commence",t:"contenances|sujetverbe|can|classif|revolution"},
{n:25,p:4,m:"Le cercle : centre, rayon, diamètre",f:"Les types et les formes de phrases",a:"Animals and pets",s:"L'énergie au quotidien",h:"Avoir des loisirs en France",t:"cercle|phrase|animals|energie|loisirs"},
{n:26,p:4,m:"La symétrie axiale",f:"Révision : futur et passé composé",a:"Les vêtements et les couleurs",s:"Les mélanges : séparer les constituants",h:"La République et la fin de la monarchie",t:"symetrie|conjug|clothes|melanges|revolution"},
{n:27,p:4,m:"Le périmètre des polygones",f:"Le groupe nominal : nom, adjectif, accords",a:"La ville",s:"Les changements d'état de l'eau",h:"Napoléon Bonaparte, empereur des Français",t:"perimetre|gn|town|matiere|napoleon"},
{n:28,p:4,m:"Bilan : mesures et géométrie",f:"Bilan : orthographe et homophones",a:"Bilan de la période 4",s:"Bilan : objets et matériaux",h:"Bilan : la Révolution et l'Empire",t:"problemes|homophones|thereis|objets|revolution"},
{n:29,p:5,m:"La proportionnalité : situations simples",f:"Révision : classes de mots et fonctions",a:"Le Royaume-Uni",s:"L'alimentation équilibrée",h:"Consommer en France : l'eau et l'énergie",t:"proportionnalite|classes|culture|alimentation|consommer"},
{n:30,p:5,m:"Problèmes de proportionnalité",f:"Révision : les temps de l'indicatif",a:"Révision : les nombres",s:"Le développement des plantes",h:"Napoléon : le Code civil et l'Empire",t:"proportionnalite|conjug|numbers|developpement|napoleon"},
{n:31,p:5,m:"Multiplier et diviser : révision",f:"Révision : les accords",a:"Révision : se présenter",s:"Révision : le système solaire",h:"Consommer : commerces et produits",t:"mult|gn|greetings|terre|consommer"},
{n:32,p:5,m:"Révision : les nombres décimaux",f:"Révision : le vocabulaire",a:"Révision : have got et la famille",s:"Révision : l'électricité",h:"EMC : les droits de l'enfant",t:"decimaux|synonymes|havegot|electricite|emc"},
{n:33,p:5,m:"Révision : les polygones et la géométrie",f:"Révision : les homophones",a:"Révision : la météo",s:"Révision : les chaînes alimentaires",h:"Révision : des rois de France à la Renaissance",t:"polygones|homophones|weather|chaines|renaissance"},
{n:34,p:5,m:"Bilan : les mesures",f:"Bilan : le passé simple",a:"Révision : la nourriture",s:"Révision : les objets techniques",h:"Révision : habiter et se loger",t:"durees|passesimple|food|objets|habiter"},
{n:35,p:5,m:"Bilan général du CM1 (1)",f:"Bilan général du CM1 (1)",a:"Bilan général",s:"Bilan général : le vivant",h:"Bilan général d'histoire",t:"bilan|conjug|school|classif|revolution"},
{n:36,p:5,m:"Bilan général du CM1 (2) et défis",f:"Bilan général du CM1 (2)",a:"Jeux et défis en anglais",s:"Défis sciences",h:"Défis : les symboles de la République",t:"problemes|complements|animals|energie|emc"}
];
SEMAINES.forEach(s=>{const t=s.t.split("|");s.tm=t[0];s.tf=t[1];s.ta=t[2];s.ts=t[3];s.th=t[4];});

const JOURS=[
 {nom:"Lundi",mat:"m",min:12},
 {nom:"Mardi",mat:"f",min:12},
 {nom:"Mercredi",mat:"a",min:12},
 {nom:"Jeudi",mat:"m",min:12},
 {nom:"Vendredi",mat:"sh",min:12},
 {nom:"Week-end",mat:"rev",min:15}
];
const NOM_MAT={m:"Mathématiques",f:"Français",a:"Anglais",s:"Sciences et technologie",h:"Histoire-géographie et EMC",rev:"Révision de la semaine"};
const PERIODES=["Période 1 — septembre à octobre","Période 2 — novembre à décembre","Période 3 — janvier à février","Période 4 — mars à avril","Période 5 — mai à juillet"];
/* Le vendredi alterne : sciences les semaines impaires, histoire-géographie et EMC les semaines paires */
function matiereDuJour(sem,jour){const j=JOURS[jour];if(j.mat==="sh")return (sem%2===1)?"s":"h";return j.mat;}

/* =========================================================
   3. LA BANQUE D'EXERCICES (fonctionne sans connexion)
   ========================================================= */
const alea=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const pioche=t=>t[Math.floor(Math.random()*t.length)];
function melange(t){const c=t.slice();for(let i=c.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[c[i],c[j]]=[c[j],c[i]];}return c;}
function qcm(enonce,bonne,fausses,expl){
  const vus=new Set([String(bonne)]),gardees=[];
  for(const x of fausses){const c=String(x);if(!vus.has(c)){vus.add(c);gardees.push(x);}}
  const choix=melange([bonne,...gardees.slice(0,5)]);
  return {type:"qcm",enonce,choix,reponse:choix.indexOf(bonne),explication:expl};
}
function saisie(enonce,reponses,expl){return {type:"saisie",enonce,reponse:reponses,explication:expl};}
function qcmChiffres(enonce,bonne,expl){
  const b=Number(bonne),f=[];
  while(f.length<3){const x=alea(0,9);if(x!==b&&!f.includes(x))f.push(x);}
  return qcm(enonce,String(b),f.map(String),expl);
}
function parTag(banque,tag){const f=banque.filter(x=>x.t===tag);const b=pioche(f.length?f:banque);return qcm(b.q,b.b,b.f,b.e);}

/* Écriture des nombres : espaces entre les classes, virgule décimale */
const fmt=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g," ");
function nb(x,d=2){const s=String(+(+x).toFixed(d));const [e,dec]=s.split(".");return fmt(e)+(dec?","+dec:"");}
const PRENOMS=["Lina","Hugo","Inès","Noah","Jade","Adam","Chloé","Sacha","Maël","Léna","Yanis","Zoé","Malik","Rose","Nathan","Aya","Louis","Emma","Ibrahim","Camille","Téo","Manon","Ilyes","Clara"];
const prenom=()=>pioche(PRENOMS);

/* Les nombres en lettres (orthographe recommandée de 1990 : traits d'union partout) */
const U=["zéro","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf"];
const DIZ=["","","vingt","trente","quarante","cinquante","soixante"];
function moins100(n,fin){
  if(n<20)return U[n];
  const d=Math.floor(n/10),u=n%10;
  if(d===7)return "soixante"+(n===71?"-et-":"-")+U[n-60];
  if(d===9)return "quatre-vingt-"+U[n-80];
  if(d===8)return u===0?(fin?"quatre-vingts":"quatre-vingt"):"quatre-vingt-"+U[u];
  return DIZ[d]+(u===0?"":(u===1?"-et-un":"-"+U[u]));
}
function moins1000(n,fin){
  const c=Math.floor(n/100),r=n%100,p=[];
  if(c===1)p.push("cent");else if(c>1)p.push(U[c]+"-cent"+(r===0&&fin?"s":""));
  if(r)p.push(moins100(r,fin));
  return p.join("-");
}
function enLettres(n){
  if(n===1000000)return "un-million";
  const m=Math.floor(n/1000),r=n%1000;
  if(m===0)return moins1000(r,true);
  const debut=m===1?"mille":moins1000(m,false)+"-mille";
  return r?debut+"-"+moins1000(r,true):debut;
}

/* ---------- MATHÉMATIQUES ---------- */
const RANGS=[["unités",0],["dizaines",1],["centaines",2],["unités de mille",3],["dizaines de mille",4],["centaines de mille",5]];
const NOM_FRAC={2:"demi",3:"tiers",4:"quart",5:"cinquième",6:"sixième",8:"huitième",10:"dixième"};
function lireFrac(n,d){const nom=NOM_FRAC[d];return U[n]+" "+nom+(n>1&&!nom.endsWith("s")?"s":"");}
const hm=(h,m)=>`${h} h ${String(m).padStart(2,"0")}`;

const GM={
  grandsnombres(){
    const t=alea(1,4);
    if(t===1){const n=alea(100000,999999),[nom,k]=pioche(RANGS.slice(1));const c=Math.floor(n/10**k)%10;
      return qcmChiffres(`Dans ${fmt(n)}, quel est le chiffre des ${nom} ?`,c,`On repère la classe des mille et celle des unités, puis on compte les rangs depuis la droite : c'est ${c}.`);}
    if(t===2){let n=alea(1,999)*1000+pioche([0,alea(1,999),alea(1,99),alea(100,999)]);if(n>999999)n=999999;
      return saisie(`Écris en chiffres : ${enLettres(n)}`,[String(n),fmt(n)],`On écrit d'abord la classe des mille, puis les trois chiffres de la classe des unités : ${fmt(n)}.`);}
    if(t===3){const n=alea(10000,999999);
      return saisie(`Combien y a-t-il de milliers en tout dans ${fmt(n)} ?`,[String(Math.floor(n/1000))],`Le nombre de milliers se lit avec tous les chiffres à gauche des centaines : ${Math.floor(n/1000)}.`);}
    const a=alea(1,9),b=alea(1,9),c=alea(1,9),n=a*100000+b*1000+c*10;
    return saisie(`Écris en chiffres : ${a} centaines de mille, ${b} unités de mille et ${c} dizaines`,[String(n),fmt(n)],`On place chaque chiffre à son rang et on met des 0 dans les rangs vides : ${fmt(n)}.`);
  },
  comparer(){
    const t=alea(1,4);
    if(t===1){const a=alea(100000,989999),b=a+pioche([1,-1])*pioche([1000,10000,90,900]),c=a+pioche([100,9000,-9000,-100]);
      const xs=[a,b,c].filter(x=>x>=100000&&x<=999999);const L=[...new Set(xs)];if(L.length<2)return GM.comparer();
      const mx=Math.max(...L);return qcm("Quel est le plus grand nombre ?",fmt(mx),L.filter(x=>x!==mx).map(fmt),"On compare chiffre par chiffre en partant de la gauche, classe par classe.");}
    if(t===2){const n=alea(10,999)*1000+999;
      return saisie(`Quel nombre vient juste après ${fmt(n)} ?`,[String(n+1),fmt(n+1)],`On ajoute 1 : les 9 deviennent des 0 et on fait une retenue, donc ${fmt(n+1)}.`);}
    if(t===3){let n=alea(10000,998999);if(n%1000===0)n+=alea(1,999);const k=Math.floor(n/1000);
      return saisie(`Complète l'encadrement au millier : ${fmt(k*1000)} < ${fmt(n)} < …`,[String((k+1)*1000),fmt((k+1)*1000)],`Le millier suivant s'obtient en ajoutant 1 au nombre de milliers : ${fmt((k+1)*1000)}.`);}
    let n=alea(10000,998999);if(n%1000===500)n+=1;if(n%1000===0)n+=alea(1,499);
    const r=Math.round(n/1000)*1000;
    return qcm(`Quel est le millier le plus proche de ${fmt(n)} ?`,fmt(r),[fmt(r+1000),fmt(r-1000),fmt(Math.floor(n/100)*100)].filter(x=>x!==fmt(r)),`On regarde le chiffre des centaines : 5 ou plus, on va au millier suivant, sinon on garde le millier, donc ${fmt(r)}.`);
  },
  addsub(){
    if(alea(0,1)){const a=alea(10000,89999),b=alea(1000,9999);
      return saisie(`Calcule : ${fmt(a)} + ${fmt(b)}`,[String(a+b),fmt(a+b)],`On pose l'addition en alignant les unités et on n'oublie pas les retenues : ${fmt(a+b)}.`);}
    const a=alea(20000,99999),b=alea(1000,19999);
    return saisie(`Calcule : ${fmt(a)} − ${fmt(b)}`,[String(a-b),fmt(a-b)],`On pose la soustraction en alignant les unités ; on vérifie avec ${fmt(a-b)} + ${fmt(b)} = ${fmt(a)}.`);
  },
  multiples(){
    const t=alea(1,3);
    if(t===1){const a=alea(3,9),b=alea(3,10);return saisie(`Calcule : ${a} × ${b}`,[String(a*b)],`On récite la table de ${a} : ${a} × ${b} = ${a*b}.`);}
    if(t===2){const k=alea(3,9),bonne=k*alea(3,12),f=[];
      while(f.length<3){const x=alea(10,110);if(x%k!==0&&!f.includes(x))f.push(x);}
      return qcm(`Lequel de ces nombres est un multiple de ${k} ?`,String(bonne),f.map(String),`${bonne} = ${k} × ${bonne/k} : il est dans la table de ${k}.`);}
    const k=pioche([2,5,10]),n=alea(10,999),ok=n%k===0;
    const regle={2:"un multiple de 2 se termine par 0, 2, 4, 6 ou 8",5:"un multiple de 5 se termine par 0 ou 5",10:"un multiple de 10 se termine par 0"}[k];
    return qcm(`${n} est-il un multiple de ${k} ?`,ok?"oui":"non",[ok?"non":"oui"],`On regarde le chiffre des unités : ${regle}.`);
  },
  mult(){
    if(alea(0,1)){const a=alea(102,989),b=alea(3,9);
      return saisie(`Calcule : ${a} × ${b}`,[String(a*b),fmt(a*b)],`On multiplie les unités, puis les dizaines, puis les centaines par ${b}, sans oublier les retenues : ${fmt(a*b)}.`);}
    const a=alea(12,999),m=pioche([10,100,1000]),z=String(m).length-1;
    return saisie(`Calcule : ${a} × ${fmt(m)}`,[String(a*m),fmt(a*m)],`Chaque chiffre prend une valeur ${fmt(m)} fois plus grande : on écrit ${z} zéro${z>1?"s":""} à droite, ${fmt(a*m)}.`);
  },
  mult2(){
    if(alea(0,2)){const a=alea(13,98);let b=alea(12,49);if(b%10===0)b++;const d=Math.floor(b/10)*10,u=b%10;
      return saisie(`Calcule : ${a} × ${b}`,[String(a*b),fmt(a*b)],`${a} × ${b} = ${a} × ${u} + ${a} × ${d} = ${a*u} + ${a*d} = ${fmt(a*b)}.`);}
    const r=alea(12,28),c=alea(12,25);
    return saisie(`Une salle de spectacle a ${r} rangées de ${c} fauteuils. Combien y a-t-il de fauteuils ?`,[String(r*c),fmt(r*c)],`On multiplie le nombre de rangées par le nombre de fauteuils par rangée : ${r} × ${c} = ${r*c}.`);
  },
  division(){
    const t=alea(1,3);
    if(t===1){const b=alea(2,9),q=alea(12,150),r=alea(0,b-1),a=b*q+r;
      return alea(0,1)?saisie(`Pose la division de ${a} par ${b}. Quel est le quotient ?`,[String(q)],`${a} = ${b} × ${q} + ${r}, donc le quotient est ${q}.`)
                      :saisie(`Pose la division de ${a} par ${b}. Quel est le reste ?`,[String(r)],`${a} = ${b} × ${q} + ${r} ; le reste ${r} est plus petit que ${b}.`);}
    if(t===2){const k=alea(3,8),q=alea(12,40),r=alea(1,k-1),p=prenom();
      return saisie(`${p} partage ${k*q+r} billes entre ${k} amis, à parts égales, le plus possible. Combien de billes reste-t-il ?`,[String(r)],`${k*q+r} = ${k} × ${q} + ${r} : chacun en reçoit ${q} et il en reste ${r}.`);}
    const b=pioche([4,6,8,10,12]),q=alea(5,15),r=alea(1,b-1),n=b*q+r;
    return saisie(`On range ${n} œufs dans des boîtes de ${b}. Combien de boîtes faut-il pour ranger TOUS les œufs ?`,[String(q+1)],`${n} = ${b} × ${q} + ${r} : ${q} boîtes pleines, plus 1 boîte pour les ${r} œufs restants, soit ${q+1}.`);
  },
  fractions(){
    const t=alea(1,7);
    if(t===1){const d=alea(3,10),n=alea(1,d-1);
      return qcm(`Dans la fraction ${n}/${d}, quel est le dénominateur ?`,String(d),[String(n),String(n+d)],`Le dénominateur est sous la barre : il dit en combien de parts égales on a partagé l'unité.`);}
    if(t===2){const ds=[2,3,4,5,6,8,10],d=pioche(ds),n=alea(1,d-1),autres=melange(ds.filter(x=>x!==d)).slice(0,3);
      return qcm(`Comment lit-on la fraction ${n}/${d} ?`,lireFrac(n,d),autres.map(x=>lireFrac(n,x)),`Le numérateur ${n} se lit d'abord, puis le dénominateur ${d} donne le nom des parts.`);}
    if(t===3){const d=pioche([2,3,4,5,10]),n=alea(1,d-1),q=d*alea(2,12);
      return saisie(`Combien font ${n}/${d} de ${q} ?`,[String(q*n/d)],`On divise par ${d} : ${q} ÷ ${d} = ${q/d}, puis on multiplie par ${n} : ${q*n/d}.`);}
    if(t===4){const d=alea(2,8),n=alea(1,2*d);const rep=n<d?"plus petite que 1":n===d?"égale à 1":"plus grande que 1";
      return qcm(`La fraction ${n}/${d} est-elle plus petite que 1, égale à 1 ou plus grande que 1 ?`,rep,["plus petite que 1","égale à 1","plus grande que 1"].filter(x=>x!==rep),`On compare le numérateur au dénominateur : ${d}/${d} = 1, donc ${n}/${d} est ${rep}.`);}
    if(t===5){const d=pioche([4,5,6,8,10]),a=alea(1,d-1);let b=alea(1,d-1);if(b===a)b=a===1?2:a-1;
      return qcm(`Quelle est la plus grande fraction ?`,`${Math.max(a,b)}/${d}`,[`${Math.min(a,b)}/${d}`],`Les parts ont la même taille (même dénominateur) : la plus grande fraction a le plus grand numérateur.`);}
    if(t===6){const [x,y]=melange([2,3,4,5,8,10]).slice(0,2);
      return qcm(`Quelle est la plus grande fraction ?`,`1/${Math.min(x,y)}`,[`1/${Math.max(x,y)}`],`Avec le même numérateur, plus on partage l'unité en beaucoup de parts, plus chaque part est petite.`);}
    const d=pioche([4,5,6,8,10]),a=alea(1,d-1),b=alea(1,d-1);
    return saisie(`Calcule : ${a}/${d} + ${b}/${d}`,[`${a+b}/${d}`],`Même dénominateur : on additionne les numérateurs, ${a} + ${b} = ${a+b}, et on garde ${d}.`);
  },
  fracdec(){
    const t=alea(1,5);
    if(t===1){const n=alea(1,99);return saisie(`Écris ${n}/10 sous forme d'un nombre décimal`,[nb(n/10),String(n/10)],`${n} dixièmes : le chiffre des dixièmes se place juste après la virgule, donc ${nb(n/10)}.`);}
    if(t===2){const n=alea(1,999);return saisie(`Écris ${n}/100 sous forme d'un nombre décimal`,[nb(n/100),String(n/100)],`${n} centièmes : le chiffre des centièmes est le 2e après la virgule, donc ${nb(n/100)}.`);}
    if(t===3){const c=alea(101,999);if(c%10===0)return GM.fracdec();
      return saisie(`Complète : ${nb(c/100)} = … /100`,[String(c)],`${nb(c/100)} c'est ${c} centièmes, donc ${c}/100.`);}
    if(t===4){const b=pioche([
        {q:"Combien faut-il de dixièmes pour faire une unité ?",r:"10",e:"L'unité partagée en 10 parts égales donne 10 dixièmes."},
        {q:"Combien faut-il de centièmes pour faire une unité ?",r:"100",e:"L'unité partagée en 100 parts égales donne 100 centièmes."},
        {q:"Combien faut-il de centièmes pour faire un dixième ?",r:"10",e:"Un dixième partagé en 10 donne 10 centièmes, car 10 × 10 = 100."}]);
      return qcm(b.q,b.r,["10","100","1000","2"].filter(x=>x!==b.r),b.e);}
    const u=alea(0,15),d=alea(1,9),c=alea(1,9),x=(u*100+d*10+c)/100;
    return saisie(`Écris sous forme d'un nombre décimal : ${u} + ${d}/10 + ${c}/100`,[nb(x),String(x)],`Les unités avant la virgule, puis ${d} au rang des dixièmes et ${c} au rang des centièmes : ${nb(x)}.`);
  },
  decimaux(){
    const t=alea(1,5);
    let c=alea(101,9999);if(c%10===0)c++;const x=c/100;
    if(t===1){const rangs=[["dixièmes",1],["centièmes",2],["unités",0]];if(x>=10)rangs.push(["dizaines",-1]);
      const [nom,k]=pioche(rangs);const ch=k===-1?Math.floor(x/10)%10:k===0?Math.floor(x)%10:k===1?Math.floor(c/10)%10:c%10;
      return qcmChiffres(`Dans ${nb(x)}, quel est le chiffre des ${nom} ?`,ch,"Après la virgule viennent les dixièmes puis les centièmes ; avant la virgule, les unités puis les dizaines.");}
    if(t===2)return saisie(`Quelle est la partie entière de ${nb(x)} ?`,[String(Math.floor(x))],`La partie entière, c'est ce qui est écrit avant la virgule : ${Math.floor(x)}.`);
    if(t===3){const u=alea(1,30),k=alea(1,9);
      return alea(0,1)?saisie(`Écris en chiffres : ${u} unités et ${k} centièmes`,[nb(u+k/100),String(u+k/100)],`Il n'y a pas de dixièmes : on écrit 0 au rang des dixièmes, donc ${nb(u+k/100)}.`)
                      :saisie(`Écris en chiffres : ${u} unités et ${k} dixièmes`,[nb(u+k/10),String(u+k/10)],`Les dixièmes s'écrivent juste après la virgule : ${nb(u+k/10)}.`);}
    if(t===4){const e=Math.floor(x),dc=c%100;
      return qcm(`Que veut dire ${nb(x)} ?`,`${e} unités et ${dc} centièmes`,[`${e} unités et ${dc} dixièmes`,`${c} unités`,`${dc} unités et ${e} centièmes`],`Avec deux chiffres après la virgule, la partie décimale se lit en centièmes.`);}
    const d=alea(11,199);if(d%10===0)return GM.decimaux();
    return saisie(`Combien y a-t-il de dixièmes en tout dans ${nb(d/10)} ?`,[String(d)],`Une unité vaut 10 dixièmes, donc ${nb(d/10)} = ${d} dixièmes.`);
  },
  compdec(){
    const t=alea(1,5);
    if(t===1){const e=alea(0,20),d1=alea(1,9);let c2=alea(11,99);if(c2%10===0||c2===d1*10)c2=d1*10+1>99?d1*10-1:d1*10+1;
      const a=e+d1/10,b=e+c2/100,mx=a>b?a:b,mn=a>b?b:a;
      return qcm(`Quel nombre est le plus grand : ${nb(a)} ou ${nb(b)} ?`,nb(mx),[nb(mn)],`Même partie entière : on compare les dixièmes, puis les centièmes ; avoir plus de chiffres ne rend pas plus grand.`);}
    if(t===2){const e=alea(1,9),s=new Set();while(s.size<3)s.add(alea(1,99));const xs=[...s].map(v=>e+(v%10===0?v/10:v)/(v%10===0?10:100));
      const L=[...new Set(xs.map(v=>nb(v)))];if(L.length<3)return GM.compdec();const mn=Math.min(...xs);
      return qcm(`Quel est le plus petit nombre ?`,nb(mn),xs.filter(v=>v!==mn).map(v=>nb(v)),`On compare la partie entière, puis les dixièmes, puis les centièmes.`);}
    if(t===3){let c=alea(101,2999);if(c%100===0)c++;const x=c/100;
      return saisie(`${nb(x)} est compris entre deux nombres entiers qui se suivent : ${Math.floor(x)} et … ?`,[String(Math.floor(x)+1)],`La partie entière est ${Math.floor(x)}, donc ${nb(x)} est entre ${Math.floor(x)} et ${Math.floor(x)+1}.`);}
    if(t===4){const e=alea(1,20),d=alea(1,9);
      return qcm(`Quel nombre est égal à ${nb(e+d/10)} ?`,`${e},${d}0`,[`${e},0${d}`,`${e}${d}`,`${d},${e}`],`Ajouter un 0 à la fin de la partie décimale ne change pas la valeur : ${e},${d} = ${e},${d}0.`);}
    const e=alea(0,15);
    return saisie(`Quel nombre se trouve exactement au milieu entre ${e} et ${e+1} ?`,[`${e},5`,`${e}.5`],`Le milieu entre deux entiers qui se suivent, c'est l'entier plus 5 dixièmes : ${e},5.`);
  },
  adddec(){
    const t=alea(1,3);
    if(t===1){const a=alea(110,5000),b=alea(110,5000),r=a+b;
      return saisie(`Calcule : ${nb(a/100)} + ${nb(b/100)}`,[nb(r/100),String(r/100)],`On aligne les virgules et on additionne rang par rang, comme pour les entiers : ${nb(r/100)}.`);}
    if(t===2){const a=alea(1000,9000),b=alea(110,a-100),r=a-b;
      return saisie(`Calcule : ${nb(a/100)} − ${nb(b/100)}`,[nb(r/100),String(r/100)],`On aligne les virgules, on complète par des 0 si besoin, puis on soustrait : ${nb(r/100)}.`);}
    const e=alea(1,9),c=alea(1,99),x=(e*100-c)/100;
    return saisie(`Complète : ${nb(x)} + … = ${e}`,[nb(c/100),String(c/100)],`On calcule ${e} − ${nb(x)} : il manque ${nb(c/100)} pour arriver à ${e}.`);
  },
  longueurs(){
    const t=alea(1,5);
    if(t===1){const k=alea(2,9),m=alea(10,990);return saisie(`Convertis ${k} km ${m} m en mètres`,[String(k*1000+m),fmt(k*1000+m)],`1 km = 1 000 m, donc ${k} km ${m} m = ${fmt(k*1000+m)} m.`);}
    if(t===2){const m=alea(2,9),c=alea(10,99);return saisie(`Convertis ${m} m ${c} cm en centimètres`,[String(m*100+c)],`1 m = 100 cm, donc ${m} m ${c} cm = ${m*100+c} cm.`);}
    if(t===3){const c=alea(2,40),d=alea(1,9);return saisie(`Convertis ${c} cm ${d} mm en millimètres`,[String(c*10+d)],`1 cm = 10 mm, donc ${c} cm ${d} mm = ${c*10+d} mm.`);}
    if(t===4){const k=alea(2,30);return saisie(`Convertis ${fmt(k*1000)} m en kilomètres`,[String(k)],`1 000 m = 1 km, donc ${fmt(k*1000)} m = ${k} km.`);}
    const b=pioche([
      {q:"Quelle unité choisir pour la distance entre Paris et Lyon ?",b:"le kilomètre",f:["le centimètre","le millimètre","le mètre"]},
      {q:"Quelle unité choisir pour la longueur d'une fourmi ?",b:"le millimètre",f:["le kilomètre","le mètre","le décamètre"]},
      {q:"Quelle unité choisir pour la longueur d'un crayon ?",b:"le centimètre",f:["le kilomètre","le mètre","l'hectomètre"]},
      {q:"Quelle unité choisir pour la longueur d'une piscine ?",b:"le mètre",f:["le millimètre","le kilomètre","le centimètre"]}]);
    return qcm(b.q,b.b,b.f,"On choisit l'unité adaptée à la taille de l'objet : mm pour le tout petit, km pour les grandes distances.");
  },
  masses(){
    const t=alea(1,5);
    if(t===1){const k=alea(2,9),g=alea(100,950);return saisie(`Convertis ${k} kg ${g} g en grammes`,[String(k*1000+g),fmt(k*1000+g)],`1 kg = 1 000 g, donc ${k} kg ${g} g = ${fmt(k*1000+g)} g.`);}
    if(t===2){const k=alea(2,25);return saisie(`Combien de grammes y a-t-il dans ${k} kg ?`,[String(k*1000),fmt(k*1000)],`1 kg = 1 000 g, donc ${k} kg = ${fmt(k*1000)} g.`);}
    if(t===3){const k=alea(2,15);return saisie(`Combien de kilogrammes y a-t-il dans ${k} tonnes ?`,[String(k*1000),fmt(k*1000)],`1 t = 1 000 kg, donc ${k} t = ${fmt(k*1000)} kg.`);}
    if(t===4){const k=alea(2,20);return saisie(`Convertis ${fmt(k*1000)} g en kilogrammes`,[String(k)],`1 000 g = 1 kg, donc ${fmt(k*1000)} g = ${k} kg.`);}
    const b=pioche([
      {q:"Quelle est la masse la plus probable d'une pomme ?",b:"150 g",f:["150 kg","15 t","1 500 kg"]},
      {q:"Quelle est la masse la plus probable d'une voiture ?",b:"1 t",f:["1 g","1 kg","10 g"]},
      {q:"Quelle est la masse la plus probable d'un enfant de CM1 ?",b:"30 kg",f:["30 g","300 kg","3 t"]},
      {q:"Quelle est la masse la plus probable d'une plume ?",b:"1 g",f:["1 kg","1 t","100 kg"]}]);
    return qcm(b.q,b.b,b.f,"On compare avec des masses connues : 1 L d'eau pèse 1 kg, une voiture environ une tonne.");
  },
  contenances(){
    const t=alea(1,5);
    if(t===1){const l=alea(2,15);return saisie(`Combien de centilitres y a-t-il dans ${l} L ?`,[String(l*100)],`1 L = 100 cL, donc ${l} L = ${l*100} cL.`);}
    if(t===2){const l=alea(2,9);return saisie(`Combien de millilitres y a-t-il dans ${l} L ?`,[String(l*1000),fmt(l*1000)],`1 L = 1 000 mL, donc ${l} L = ${fmt(l*1000)} mL.`);}
    if(t===3){const d=alea(2,30);return saisie(`Combien de centilitres y a-t-il dans ${d} dL ?`,[String(d*10)],`1 dL = 10 cL, donc ${d} dL = ${d*10} cL.`);}
    if(t===4){const b=pioche([["un demi-litre","50"],["un quart de litre","25"],["trois quarts de litre","75"]]);
      return saisie(`Combien de centilitres y a-t-il dans ${b[0]} ?`,[b[1]],`1 L = 100 cL, on prend la fraction de 100 : ${b[1]} cL.`);}
    const b=pioche([
      {q:"Quelle est la contenance la plus probable d'une baignoire ?",b:"150 L",f:["150 mL","15 cL","1 L"]},
      {q:"Quelle est la contenance la plus probable d'une cuillère à café ?",b:"5 mL",f:["5 L","50 L","5 dL"]},
      {q:"Quelle est la contenance la plus probable d'un verre d'eau ?",b:"20 cL",f:["20 L","2 mL","200 L"]},
      {q:"Quelle est la contenance la plus probable d'un seau ?",b:"10 L",f:["10 mL","10 cL","1 000 L"]}]);
    return qcm(b.q,b.b,b.f,"On compare avec des contenances connues : une bouteille d'eau contient souvent 1 L ou 1,5 L.");
  },
  durees(){
    const t=alea(1,5);
    if(t===1){const h=alea(1,4),m=alea(5,55);return saisie(`Combien de minutes y a-t-il dans ${h} h ${m} min ?`,[String(h*60+m)],`1 h = 60 min, donc ${h} × 60 + ${m} = ${h*60+m} min.`);}
    if(t===2){const h=alea(1,3),m=alea(1,11)*5,tot=h*60+m;
      return qcm(`${tot} minutes, c'est :`,`${h} h ${m} min`,[`${h-1>0?h-1:h+1} h ${m} min`,`${h} h ${m>=30?m-15:m+15} min`,`${Math.floor(tot/100)} h ${tot%100} min`],`On enlève 60 min autant de fois que possible : ${tot} = ${h} × 60 + ${m}.`);}
    if(t===3){const h=alea(8,18),m=alea(2,11)*5,dh=alea(0,2),dm=alea(1,11)*5;const fin=h*60+m+dh*60+dm,fh=Math.floor(fin/60),fm=fin%60;
      return qcm(`Un film commence à ${hm(h,m)} et dure ${dh?dh+" h ":""}${dm} min. À quelle heure finit-il ?`,hm(fh,fm),[hm(fh+1,fm),hm(fh,(fm+20)%60),hm(fh-1,fm)],`On ajoute d'abord les heures puis les minutes, et 60 min font 1 h : ${hm(fh,fm)}.`);}
    if(t===4){const h=alea(8,15),m=alea(0,11)*5,d=alea(4,20)*5,f=h*60+m+d;
      return saisie(`De ${hm(h,m)} à ${hm(Math.floor(f/60),f%60)}, combien de minutes se sont écoulées ?`,[String(d)],`On compte jusqu'à l'heure ronde, puis au-delà : cela fait ${d} minutes.`);}
    const b=pioche([["Combien de secondes y a-t-il dans une minute ?","60",["100","24","30"]],["Combien de minutes y a-t-il dans une heure ?","60",["100","24","30"]],["Combien d'heures y a-t-il dans une journée ?","24",["12","60","100"]],["Combien de jours y a-t-il dans une semaine ?","7",["5","10","30"]],["Combien de mois y a-t-il dans une année ?","12",["10","52","365"]],["Combien d'années y a-t-il dans un siècle ?","100",["10","1000","60"]],["Combien de minutes y a-t-il dans un quart d'heure ?","15",["25","4","30"]],["Combien de jours y a-t-il dans une année non bissextile ?","365",["366","360","300"]]]);
    return qcm(b[0],b[1],b[2],"Ces équivalences se connaissent par cœur : 1 min = 60 s, 1 h = 60 min, 1 jour = 24 h, 1 an = 12 mois.");
  },
  monnaie(){
    const t=alea(1,4);
    if(t===1){const e=alea(1,30),c=alea(5,95);return saisie(`Combien de centimes y a-t-il dans ${e} € ${c} c ?`,[String(e*100+c)],`1 € = 100 c, donc ${e} € ${c} c = ${e*100+c} c.`);}
    if(t===2){const billet=pioche([5,10,20,50]),p=alea(105,billet*100-10),r=billet*100-p;
      return saisie(`${prenom()} achète un livre à ${nb(p/100)} € et paie avec un billet de ${billet} €. Combien lui rend-on ?`,[nb(r/100),String(r/100),nb(r/100)+" €"],`On calcule ${billet} − ${nb(p/100)} : on complète jusqu'à l'euro suivant, puis jusqu'à ${billet} €, soit ${nb(r/100)} €.`);}
    if(t===3){const a=alea(90,250),b=alea(150,900),c=alea(100,500),s=a+b+c;
      return saisie(`Au marché, on achète du pain à ${nb(a/100)} €, du fromage à ${nb(b/100)} € et des pommes à ${nb(c/100)} €. Combien paie-t-on ?`,[nb(s/100),String(s/100),nb(s/100)+" €"],`On additionne en alignant les virgules : ${nb(s/100)} €.`);}
    const b=pioche([["pièces de 20 c","1 €",5],["pièces de 50 c","1 €",2],["pièces de 10 c","1 €",10],["billets de 5 €","50 €",10],["billets de 10 €","100 €",10],["pièces de 2 €","20 €",10],["billets de 20 €","100 €",5]]);
    return saisie(`Combien faut-il de ${b[0]} pour faire ${b[1]} ?`,[String(b[2])],`On cherche combien de fois la valeur de la pièce ou du billet entre dans ${b[1]} : ${b[2]}.`);
  },
  perimetre(){
    const t=alea(1,5);
    if(t===1){const L=alea(6,30),l=alea(3,L-1);return saisie(`Un rectangle mesure ${L} cm de longueur et ${l} cm de largeur. Quel est son périmètre en cm ?`,[String(2*(L+l))],`Périmètre = 2 × (${L} + ${l}) = ${2*(L+l)} cm.`);}
    if(t===2){const c=alea(3,25);return saisie(`Quel est le périmètre d'un carré de ${c} cm de côté, en cm ?`,[String(4*c)],`Le carré a 4 côtés égaux : 4 × ${c} = ${4*c} cm.`);}
    if(t===3){const a=alea(3,15),b=alea(3,15),c=alea(Math.abs(a-b)+1,a+b-1);return saisie(`Un triangle a des côtés de ${a} cm, ${b} cm et ${c} cm. Quel est son périmètre en cm ?`,[String(a+b+c)],`On additionne les longueurs des côtés : ${a} + ${b} + ${c} = ${a+b+c} cm.`);}
    if(t===4){const [nom,k]=pioche([["pentagone",5],["hexagone",6],["octogone",8]]),c=alea(2,12);
      return saisie(`Un ${nom} régulier a des côtés de ${c} cm. Quel est son périmètre en cm ?`,[String(k*c)],`Un ${nom} a ${k} côtés égaux : ${k} × ${c} = ${k*c} cm.`);}
    const c=alea(3,25);return saisie(`Un carré a un périmètre de ${4*c} cm. Combien mesure un côté, en cm ?`,[String(c)],`Les 4 côtés sont égaux : ${4*c} ÷ 4 = ${c} cm.`);
  },
  geom(){const b=pioche([
      {q:"Deux droites qui se coupent en formant un angle droit sont :",b:"perpendiculaires",f:["parallèles","confondues","courbes"],e:"On le vérifie avec l'équerre."},
      {q:"Deux droites qui ne se coupent jamais, même si on les prolonge, sont :",b:"parallèles",f:["perpendiculaires","sécantes","courbes"],e:"Elles gardent toujours le même écartement."},
      {q:"Quel instrument permet de vérifier qu'un angle est droit ?",b:"l'équerre",f:["le compas","la gomme","le rapporteur"],e:"On place l'angle droit de l'équerre contre l'angle à vérifier."},
      {q:"Dans un rectangle, deux côtés qui se suivent sont :",b:"perpendiculaires",f:["parallèles","de même longueur","courbes"],e:"Les quatre angles du rectangle sont droits."},
      {q:"Dans un rectangle, deux côtés opposés sont :",b:"parallèles",f:["perpendiculaires","sécants","courbes"],e:"Les côtés opposés ne se coupent jamais."},
      {q:"Les deux rails d'une voie ferrée toute droite sont :",b:"parallèles",f:["perpendiculaires","sécants","confondus"],e:"Ils gardent le même écartement et ne se croisent jamais."},
      {q:"Comment appelle-t-on le point où deux droites se coupent ?",b:"le point d'intersection",f:["le milieu","le centre","l'extrémité"],e:"Deux droites sécantes ont un seul point commun."},
      {q:"Un segment est :",b:"une portion de droite limitée par deux points",f:["une droite sans fin","une ligne courbe","un cercle"],e:"Une droite est illimitée, un segment a deux extrémités."}]);
    return qcm(b.q,b.b,b.f,b.e);},
  polygones(){
    if(alea(0,2)===0){const [nom,k]=pioche([["triangle",3],["quadrilatère",4],["pentagone",5],["hexagone",6],["octogone",8]]);
      return qcm(`Combien de côtés a un ${nom} ?`,String(k),["3","4","5","6","8"].filter(x=>x!==String(k)).slice(0,3),`Le nom du polygone indique son nombre de côtés : tri = 3, quadri = 4, penta = 5, hexa = 6, octo = 8.`);}
    const b=pioche([
      {q:"Quel quadrilatère a 4 côtés égaux et 4 angles droits ?",b:"le carré",f:["le rectangle","le losange","le triangle"],e:"Le losange a 4 côtés égaux mais pas forcément d'angle droit."},
      {q:"Quel quadrilatère a 4 angles droits et des côtés opposés de même longueur ?",b:"le rectangle",f:["le losange","le pentagone","le triangle"],e:"Le rectangle a 4 angles droits."},
      {q:"Quel quadrilatère a 4 côtés de même longueur, sans forcément d'angle droit ?",b:"le losange",f:["le rectangle","le trapèze","l'hexagone"],e:"Le losange a ses 4 côtés égaux."},
      {q:"Un triangle qui a un angle droit s'appelle :",b:"un triangle rectangle",f:["un triangle équilatéral","un carré","un triangle plat"],e:"On vérifie l'angle droit avec l'équerre."},
      {q:"Un triangle qui a ses 3 côtés de même longueur s'appelle :",b:"un triangle équilatéral",f:["un triangle rectangle","un triangle isocèle seulement","un losange"],e:"Équi = égal : tous les côtés sont égaux."},
      {q:"Un triangle qui a 2 côtés de même longueur s'appelle :",b:"un triangle isocèle",f:["un triangle rectangle","un rectangle","un pentagone"],e:"Isocèle = deux côtés égaux."},
      {q:"Un carré est aussi :",b:"un rectangle et un losange",f:["un triangle","un pentagone","un cercle"],e:"Il a 4 angles droits comme le rectangle et 4 côtés égaux comme le losange."},
      {q:"Un cercle est-il un polygone ?",b:"non, il n'a pas de côtés droits",f:["oui, il a 1 côté","oui, il a 4 côtés"],e:"Un polygone est fermé et formé uniquement de segments."},
      {q:"Dans un polygone, une diagonale relie :",b:"deux sommets qui ne se suivent pas",f:["deux côtés","le centre et un sommet","deux sommets voisins"],e:"Deux sommets voisins sont reliés par un côté, pas par une diagonale."}]);
    return qcm(b.q,b.b,b.f,b.e);
  },
  cercle(){
    const t=alea(1,3);
    if(t===1){const r=alea(2,15);return saisie(`Un cercle a un rayon de ${r} cm. Combien mesure son diamètre, en cm ?`,[String(2*r)],`Le diamètre vaut deux rayons : 2 × ${r} = ${2*r} cm.`);}
    if(t===2){const r=alea(2,15);return saisie(`Un cercle a un diamètre de ${2*r} cm. Combien mesure son rayon, en cm ?`,[String(r)],`Le rayon est la moitié du diamètre : ${2*r} ÷ 2 = ${r} cm.`);}
    const b=pioche([
      {q:"Avec quel instrument trace-t-on un cercle ?",b:"le compas",f:["l'équerre","la règle seule","le rapporteur"],e:"La pointe du compas se place au centre."},
      {q:"Tous les points d'un cercle sont à la même distance :",b:"du centre",f:["du diamètre","du bord de la feuille","d'un autre cercle"],e:"Cette distance est le rayon."},
      {q:"Le diamètre d'un cercle passe toujours :",b:"par le centre",f:["à côté du centre","en dehors du cercle","par un seul point du cercle"],e:"Il relie deux points du cercle en passant par le centre."},
      {q:"Un rayon relie :",b:"le centre à un point du cercle",f:["deux points du cercle sans passer par le centre","deux cercles","deux centres"],e:"Le rayon part du centre et va jusqu'au cercle."},
      {q:"Pour tracer un cercle de 4 cm de rayon, on écarte le compas de :",b:"4 cm",f:["8 cm","2 cm","40 cm"],e:"L'écartement du compas est égal au rayon."},
      {q:"Pour tracer un cercle de 10 cm de diamètre, on écarte le compas de :",b:"5 cm",f:["10 cm","20 cm","2 cm"],e:"L'écartement est le rayon, la moitié du diamètre."}]);
    return qcm(b.q,b.b,b.f,b.e);
  },
  symetrie(){const b=pioche([
      {q:"Combien d'axes de symétrie a un carré ?",b:"4",f:["2","1","0"],e:"Les deux diagonales et les deux droites qui joignent les milieux des côtés opposés."},
      {q:"Combien d'axes de symétrie a un rectangle qui n'est pas un carré ?",b:"2",f:["4","1","0"],e:"Seulement les deux droites qui joignent les milieux des côtés opposés."},
      {q:"Combien d'axes de symétrie a un triangle équilatéral ?",b:"3",f:["1","2","0"],e:"Un axe passe par chaque sommet et le milieu du côté opposé."},
      {q:"Combien d'axes de symétrie a un triangle isocèle (non équilatéral) ?",b:"1",f:["2","3","0"],e:"L'axe passe par le sommet principal et le milieu du côté opposé."},
      {q:"Quand on plie une figure le long de son axe de symétrie, les deux moitiés :",b:"se superposent exactement",f:["ne se touchent pas","sont de tailles différentes","forment un carré"],e:"C'est le test du pliage."},
      {q:"Le symétrique d'un segment de 5 cm mesure :",b:"5 cm",f:["10 cm","2,5 cm","0 cm"],e:"La symétrie conserve les longueurs."},
      {q:"Un point placé sur l'axe de symétrie a pour symétrique :",b:"lui-même",f:["un point très loin","aucun point","le centre de la feuille"],e:"Sa distance à l'axe est nulle, il ne bouge pas."},
      {q:"Le symétrique d'un point par rapport à une droite est :",b:"de l'autre côté de l'axe, à la même distance",f:["du même côté, plus loin","sur l'axe","au double de la distance"],e:"On mesure la distance perpendiculairement à l'axe."},
      {q:"Laquelle de ces lettres majuscules a un axe de symétrie vertical ?",b:"A",f:["F","G","J"],e:"Si on plie le A en son milieu de haut en bas, les deux moitiés se superposent."}]);
    return qcm(b.q,b.b,b.f,b.e);},
  proportionnalite(){
    const t=alea(1,5);
    if(t===1){const [obj,pl]=pioche([["cahier","cahiers"],["croissant","croissants"],["ballon","ballons"],["stylo","stylos"]]),p=alea(2,9),q=alea(2,6);let n=alea(3,12);if(n===q)n++;
      return saisie(`${q} ${pl} identiques coûtent ${q*p} €. Combien coûtent ${n} ${pl} ?`,[String(n*p),n*p+" €"],`Un ${obj} coûte ${q*p} ÷ ${q} = ${p} €, donc ${n} ${pl} coûtent ${n} × ${p} = ${n*p} €.`);}
    if(t===2){const g=pioche([25,50,75,100]),p=pioche([2,4]),k=pioche([2,3]);
      return saisie(`Pour ${p} personnes, il faut ${g*p} g de farine. Combien en faut-il pour ${p*k} personnes ?`,[String(g*p*k)],`Il y a ${k} fois plus de personnes, donc ${k} fois plus de farine : ${g*p} × ${k} = ${g*p*k} g.`);}
    if(t===3){const c=alea(2,9),a=alea(2,6);let b=alea(3,12);if(b===a)b++;
      return saisie(`Dans un tableau de proportionnalité, ${a} correspond à ${a*c}. À quoi correspond ${b} ?`,[String(b*c)],`On passe de ${a} à ${a*c} en multipliant par ${c}, donc ${b} × ${c} = ${b*c}.`);}
    if(t===4){const v=pioche([40,50,60,80,90]),h=alea(2,5);
      return saisie(`Une voiture roule toujours à la même vitesse : ${v} km en 1 heure. Combien de km parcourt-elle en ${h} heures ?`,[String(v*h)],`En ${h} fois plus de temps, elle roule ${h} fois plus loin : ${v} × ${h} = ${v*h} km.`);}
    const b=pioche([
      ["le prix payé et le nombre de baguettes identiques achetées","oui"],["l'âge d'un enfant et sa taille","non"],
      ["le nombre de tours de piste et la distance parcourue","oui"],["la pointure de chaussures et l'âge","non"],
      ["le nombre de paquets de 6 œufs et le nombre d'œufs","oui"],["le nombre d'élèves dans une classe et la note au contrôle","non"]]);
    return qcm(`Est-ce une situation de proportionnalité : ${b[0]} ?`,b[1],[b[1]==="oui"?"non":"oui"],b[1]==="oui"?"Quand l'un double, l'autre double aussi : c'est proportionnel.":"Quand l'un double, l'autre ne double pas forcément : ce n'est pas proportionnel.");
  },
  problemes(){
    const t=alea(1,6),p=prenom();
    if(t===1){const a=alea(150,450),b=alea(20,90),c=alea(20,90);
      return saisie(`${p} a ${a} images. ${p} en donne ${b} à son cousin, puis en gagne ${c}. Combien en a-t-il maintenant ?`,[String(a-b+c)],`On enlève puis on ajoute : ${a} − ${b} = ${a-b}, puis ${a-b} + ${c} = ${a-b+c}.`);}
    if(t===2){const n=alea(2,5),pr=alea(6,15),s=alea(2,6);
      return saisie(`${p} achète ${n} livres à ${pr} € chacun et un stylo à ${s} €. Combien paie-t-on en tout ?`,[String(n*pr+s),n*pr+s+" €"],`D'abord les livres : ${n} × ${pr} = ${n*pr} €, puis on ajoute le stylo : ${n*pr+s} €.`);}
    if(t===3){const tot=pioche([200,300,500]),v=alea(80,tot-60),c=alea(10,Math.min(50,tot-v-1));
      return saisie(`${p} a ${tot} € d'économies. Avec cet argent, ${p} achète un vélo à ${v} € et un casque à ${c} €. Combien lui reste-t-il ?`,[String(tot-v-c),tot-v-c+" €"],`On additionne les dépenses : ${v} + ${c} = ${v+c} €, puis ${tot} − ${v+c} = ${tot-v-c} €.`);}
    if(t===4){const j=alea(8,25),q=pioche([10,12,15,20]);
      return saisie(`Un livre a ${j*q} pages. ${p} en lit ${q} par jour. Combien de jours faut-il pour finir le livre ?`,[String(j)],`On cherche combien de fois ${q} dans ${j*q} : ${j*q} ÷ ${q} = ${j}.`);}
    if(t===5){const cl=alea(3,5),e=alea(22,29),ad=alea(4,10);
      return saisie(`Pour une sortie, il y a ${cl} classes de ${e} élèves et ${ad} adultes. Combien de personnes partent ?`,[String(cl*e+ad)],`D'abord les élèves : ${cl} × ${e} = ${cl*e}, puis on ajoute les adultes : ${cl*e+ad}.`);}
    const pl=alea(40,60),cars=alea(2,4),el=alea(pl*(cars-1)+1,pl*cars-1);
    return saisie(`Un car a ${pl} places. ${cars} cars transportent ${el} personnes. Combien reste-t-il de places libres ?`,[String(pl*cars-el)],`On calcule toutes les places : ${cars} × ${pl} = ${pl*cars}, puis ${pl*cars} − ${el} = ${pl*cars-el}.`);
  },
  bilan(){const k=pioche(Object.keys(GM).filter(x=>x!=="bilan"&&x!=="calcmental"));return GM[k]();},
  calcmental(){
    const t=alea(1,7);
    if(t===1){const a=alea(3,9),b=alea(3,9);return saisie(`Calcule : ${a} × ${b}`,[String(a*b)],`On récite la table de ${a} : ${a} × ${b} = ${a*b}.`);}
    if(t===2){const a=alea(15,79);let b=alea(12,59);if(b%10===0)b++;return saisie(`Calcule de tête : ${a} + ${b}`,[String(a+b)],`On ajoute les dizaines puis les unités : ${a} + ${Math.floor(b/10)*10} = ${a+Math.floor(b/10)*10}, puis + ${b%10} = ${a+b}.`);}
    if(t===3){const a=alea(51,99);let b=alea(12,a-10);if(b%10===0)b--;return saisie(`Calcule de tête : ${a} − ${b}`,[String(a-b)],`On enlève les dizaines puis les unités : ${a} − ${Math.floor(b/10)*10} = ${a-Math.floor(b/10)*10}, puis − ${b%10} = ${a-b}.`);}
    if(t===4){const a=alea(3,99),m=pioche([10,100]);return saisie(`Calcule : ${a} × ${m}`,[String(a*m),fmt(a*m)],`Chaque chiffre prend une valeur ${m} fois plus grande : ${fmt(a*m)}.`);}
    if(t===5){if(alea(0,1)){const n=alea(13,250);return saisie(`Quel est le double de ${n} ?`,[String(2*n)],`Le double, c'est ${n} + ${n} = ${2*n}.`);}
      const n=alea(7,150)*2;return saisie(`Quelle est la moitié de ${n} ?`,[String(n/2)],`La moitié, c'est partager en 2 : ${n} ÷ 2 = ${n/2}.`);}
    if(t===6){const a=alea(11,89);return saisie(`Combien faut-il ajouter à ${a} pour faire 100 ?`,[String(100-a)],`On va à la dizaine suivante, puis à 100 : ${a} + ${100-a} = 100.`);}
    const b=alea(3,9),q=alea(3,10);return saisie(`Calcule : ${b*q} ÷ ${b}`,[String(q)],`On cherche dans la table de ${b} : ${b} × ${q} = ${b*q}, donc ${b*q} ÷ ${b} = ${q}.`);
  }
};
function exoMaths(tag){const f=GM[tag]||GM[pioche(Object.keys(GM))];return f();}

/* ---------- FRANÇAIS ---------- */
const PRON=["je","tu","il","nous","vous","ils"];
const PRON_ELLE=["je","tu","elle","nous","vous","elles"];
function verbeEr(inf){const r=inf.slice(0,-2),g=r.endsWith("g")?r+"e":r;
  return {inf,pres:[r+"e",r+"es",r+"e",g+"ons",r+"ez",r+"ent"],imp:[g+"ais",g+"ais",g+"ait",r+"ions",r+"iez",g+"aient"],
    fut:[inf+"ai",inf+"as",inf+"a",inf+"ons",inf+"ez",inf+"ont"],ps:[g+"a",r+"èrent"],pp:r+"é",aux:"avoir",gr:"1er groupe"};}
const VERBES=[
 verbeEr("chanter"),verbeEr("jouer"),verbeEr("regarder"),verbeEr("marcher"),verbeEr("manger"),verbeEr("parler"),
 {inf:"arriver",pres:["arrive","arrives","arrive","arrivons","arrivez","arrivent"],imp:["arrivais","arrivais","arrivait","arrivions","arriviez","arrivaient"],fut:["arriverai","arriveras","arrivera","arriverons","arriverez","arriveront"],ps:["arriva","arrivèrent"],pp:"arrivé",aux:"être",gr:"1er groupe"},
 {inf:"finir",pres:["finis","finis","finit","finissons","finissez","finissent"],imp:["finissais","finissais","finissait","finissions","finissiez","finissaient"],fut:["finirai","finiras","finira","finirons","finirez","finiront"],ps:["finit","finirent"],pp:"fini",aux:"avoir",gr:"2e groupe"},
 {inf:"grandir",pres:["grandis","grandis","grandit","grandissons","grandissez","grandissent"],imp:["grandissais","grandissais","grandissait","grandissions","grandissiez","grandissaient"],fut:["grandirai","grandiras","grandira","grandirons","grandirez","grandiront"],ps:["grandit","grandirent"],pp:"grandi",aux:"avoir",gr:"2e groupe"},
 {inf:"être",pres:["suis","es","est","sommes","êtes","sont"],imp:["étais","étais","était","étions","étiez","étaient"],fut:["serai","seras","sera","serons","serez","seront"],ps:["fut","furent"],pp:"été",aux:"avoir",gr:"auxiliaire"},
 {inf:"avoir",pres:["ai","as","a","avons","avez","ont"],imp:["avais","avais","avait","avions","aviez","avaient"],fut:["aurai","auras","aura","aurons","aurez","auront"],ps:["eut","eurent"],pp:"eu",aux:"avoir",gr:"auxiliaire"},
 {inf:"aller",pres:["vais","vas","va","allons","allez","vont"],imp:["allais","allais","allait","allions","alliez","allaient"],fut:["irai","iras","ira","irons","irez","iront"],ps:["alla","allèrent"],pp:"allé",aux:"être",gr:"3e groupe"},
 {inf:"faire",pres:["fais","fais","fait","faisons","faites","font"],imp:["faisais","faisais","faisait","faisions","faisiez","faisaient"],fut:["ferai","feras","fera","ferons","ferez","feront"],ps:["fit","firent"],pp:"fait",aux:"avoir",gr:"3e groupe"},
 {inf:"dire",pres:["dis","dis","dit","disons","dites","disent"],imp:["disais","disais","disait","disions","disiez","disaient"],fut:["dirai","diras","dira","dirons","direz","diront"],ps:["dit","dirent"],pp:"dit",aux:"avoir",gr:"3e groupe"},
 {inf:"venir",pres:["viens","viens","vient","venons","venez","viennent"],imp:["venais","venais","venait","venions","veniez","venaient"],fut:["viendrai","viendras","viendra","viendrons","viendrez","viendront"],ps:["vint","vinrent"],pp:"venu",aux:"être",gr:"3e groupe"},
 {inf:"prendre",pres:["prends","prends","prend","prenons","prenez","prennent"],imp:["prenais","prenais","prenait","prenions","preniez","prenaient"],fut:["prendrai","prendras","prendra","prendrons","prendrez","prendront"],ps:["prit","prirent"],pp:"pris",aux:"avoir",gr:"3e groupe"},
 {inf:"pouvoir",pres:["peux","peux","peut","pouvons","pouvez","peuvent"],imp:["pouvais","pouvais","pouvait","pouvions","pouviez","pouvaient"],fut:["pourrai","pourras","pourra","pourrons","pourrez","pourront"],ps:["put","purent"],pp:"pu",aux:"avoir",gr:"3e groupe"},
 {inf:"voir",pres:["vois","vois","voit","voyons","voyez","voient"],imp:["voyais","voyais","voyait","voyions","voyiez","voyaient"],fut:["verrai","verras","verra","verrons","verrez","verront"],ps:["vit","virent"],pp:"vu",aux:"avoir",gr:"3e groupe"},
 {inf:"vouloir",pres:["veux","veux","veut","voulons","voulez","veulent"],imp:["voulais","voulais","voulait","voulions","vouliez","voulaient"],fut:["voudrai","voudras","voudra","voudrons","voudrez","voudront"],ps:["voulut","voulurent"],pp:"voulu",aux:"avoir",gr:"3e groupe"},
 {inf:"partir",pres:["pars","pars","part","partons","partez","partent"],imp:["partais","partais","partait","partions","partiez","partaient"],fut:["partirai","partiras","partira","partirons","partirez","partiront"],ps:["partit","partirent"],pp:"parti",aux:"être",gr:"3e groupe"}
];
const elision=(p,f)=>p==="je"&&/^[aeéèêiouyh]/i.test(f)?"j'"+f:p+" "+f;
const AU_TEMPS={pres:"au présent",imp:"à l'imparfait",fut:"au futur simple"};
const AIDE_TEMPS={pres:"Au présent, on repère le groupe du verbe et la personne pour choisir la terminaison.",
  imp:"À l'imparfait, les terminaisons sont toujours -ais, -ais, -ait, -ions, -iez, -aient.",
  fut:"Au futur, les terminaisons sont -rai, -ras, -ra, -rons, -rez, -ront.",
  ps:"Au passé simple, la 3e personne se termine par -a / -èrent pour les verbes en -er, et par -it, -ut ou -int pour les autres."};
function conjuguer(tp){
  const v=pioche(VERBES);
  if(tp==="ps"){
    if(alea(0,1))return saisie(`Conjugue « ${v.inf} » au passé simple : il …`,[v.ps[0],"il "+v.ps[0],"elle "+v.ps[0]],`il ${v.ps[0]}. ${AIDE_TEMPS.ps}`);
    return saisie(`Conjugue « ${v.inf} » au passé simple : ils …`,[v.ps[1],"ils "+v.ps[1],"elles "+v.ps[1]],`ils ${v.ps[1]}. ${AIDE_TEMPS.ps}`);
  }
  const i=alea(0,5),p=PRON[i];
  if(tp==="pc"){
    const aux=v.aux==="être"?["suis","es","est","sommes","êtes","sont"][i]:["ai","as","a","avons","avez","ont"][i];
    const base=v.aux==="être"?(i>=3?v.pp+"s":v.pp):v.pp;
    const rep=[aux+" "+base,elision(p,aux)+" "+base];
    if(v.aux==="être"){const fem=(i>=3?v.pp+"es":v.pp+"e");if(i!==2&&i!==5)rep.push(aux+" "+fem,elision(p,aux)+" "+fem);}
    return saisie(`Conjugue « ${v.inf} » au passé composé avec « ${p} »`,rep,`${elision(p,aux)} ${base} : auxiliaire ${v.aux} au présent + participe passé${v.aux==="être"?", qui s'accorde avec le sujet":""}.`);
  }
  const f=v[tp][i];
  return saisie(`Conjugue « ${v.inf} » ${AU_TEMPS[tp]} avec « ${p} »`,[f,elision(p,f)],`${elision(p,f)}. ${AIDE_TEMPS[tp]}`);
}
const HOMO=[
 {ph:"Mon frère ___ malade aujourd'hui.",bon:"est",faux:["et"],expl:"On peut dire « était » : c'est le verbe être."},
 {ph:"J'ai acheté du pain ___ du fromage.",bon:"et",faux:["est"],expl:"On peut dire « et puis » : c'est le mot qui relie."},
 {ph:"Nous allons ___ la piscine.",bon:"à",faux:["a"],expl:"On ne peut pas dire « avait » : c'est le petit mot à, avec un accent."},
 {ph:"Lina ___ un nouveau vélo.",bon:"a",faux:["à"],expl:"On peut dire « avait » : c'est le verbe avoir."},
 {ph:"Les enfants ___ fini leurs devoirs.",bon:"ont",faux:["on"],expl:"On peut dire « avaient » : c'est le verbe avoir."},
 {ph:"___ part en vacances demain.",bon:"On",faux:["Ont"],expl:"On peut dire « il » à la place : c'est le pronom on."},
 {ph:"Mes cousins ___ en retard.",bon:"sont",faux:["son"],expl:"On peut dire « étaient » : c'est le verbe être."},
 {ph:"Hugo cherche ___ cartable.",bon:"son",faux:["sont"],expl:"On peut dire « mon cartable » : c'est un déterminant."},
 {ph:"Veux-tu une pomme ___ une poire ?",bon:"ou",faux:["où"],expl:"On peut dire « ou bien » : c'est un choix, sans accent."},
 {ph:"___ habites-tu ?",bon:"Où",faux:["Ou"],expl:"Il s'agit d'un lieu : « où » prend un accent."},
 {ph:"Regarde ___ beaux nuages !",bon:"ces",faux:["ses"],expl:"On peut dire « ces nuages-là » : on montre."},
 {ph:"Inès range ___ affaires dans son sac.",bon:"ses",faux:["ces"],expl:"Ce sont les affaires à elle : on peut dire « les siennes »."},
 {ph:"Le chat ___ cache sous le lit.",bon:"se",faux:["ce"],expl:"On peut dire « je me cache » : « se » va avec le verbe."},
 {ph:"___ gâteau est délicieux.",bon:"Ce",faux:["Se"],expl:"On peut dire « ce gâteau-là » : c'est un déterminant devant un nom."}
];
const PHRASES_F=[
 {ph:"Le facteur apporte une lettre.",sujet:"Le facteur",cod:"une lettre",verbe:"apporte"},
 {ph:"Les enfants regardent un dessin animé.",sujet:"Les enfants",cod:"un dessin animé",verbe:"regardent"},
 {ph:"Ma tante prépare une tarte.",sujet:"Ma tante",cod:"une tarte",verbe:"prépare"},
 {ph:"Lina arrose les tomates.",sujet:"Lina",cod:"les tomates",verbe:"arrose"},
 {ph:"Le boulanger cuit le pain.",sujet:"Le boulanger",cod:"le pain",verbe:"cuit"},
 {ph:"Hugo range ses jouets.",sujet:"Hugo",cod:"ses jouets",verbe:"range"},
 {ph:"Nous écoutons la radio.",sujet:"Nous",cod:"la radio",verbe:"écoutons"},
 {ph:"Mon grand-père répare le vélo.",sujet:"Mon grand-père",cod:"le vélo",verbe:"répare"},
 {ph:"Le chat attrape une souris.",sujet:"Le chat",cod:"une souris",verbe:"attrape"},
 {ph:"Les élèves écrivent une poésie.",sujet:"Les élèves",cod:"une poésie",verbe:"écrivent"}
];
const CLASSES=["un nom","un verbe","un adjectif","un déterminant","un pronom","un adverbe","une préposition","une conjonction de coordination"];
const MOTS=[
 {ph:"Le petit chat dort sur le canapé.",mot:"petit",cl:"un adjectif",e:"Il donne une précision sur le nom « chat »."},
 {ph:"Le petit chat dort sur le canapé.",mot:"chat",cl:"un nom",e:"Il désigne un animal et on peut mettre un déterminant devant."},
 {ph:"Le petit chat dort sur le canapé.",mot:"dort",cl:"un verbe",e:"Il se conjugue : je dors, il dort."},
 {ph:"Le petit chat dort sur le canapé.",mot:"sur",cl:"une préposition",e:"Il est invariable et introduit un groupe de mots."},
 {ph:"Elle mange lentement sa soupe.",mot:"Elle",cl:"un pronom",e:"Il remplace un nom de personne."},
 {ph:"Elle mange lentement sa soupe.",mot:"lentement",cl:"un adverbe",e:"Il est invariable et précise le verbe."},
 {ph:"Elle mange lentement sa soupe.",mot:"sa",cl:"un déterminant",e:"Il est placé devant le nom « soupe »."},
 {ph:"Hugo et Lina jouent dans la cour.",mot:"et",cl:"une conjonction de coordination",e:"Il relie deux mots : mais, ou, et, donc, or, ni, car."},
 {ph:"Hugo et Lina jouent dans la cour.",mot:"dans",cl:"une préposition",e:"Il est invariable et introduit « la cour »."},
 {ph:"Nous lisons une histoire très drôle.",mot:"très",cl:"un adverbe",e:"Il est invariable et précise l'adjectif « drôle »."},
 {ph:"Nous lisons une histoire très drôle.",mot:"drôle",cl:"un adjectif",e:"Il donne une précision sur le nom « histoire »."},
 {ph:"Nous lisons une histoire très drôle.",mot:"Nous",cl:"un pronom",e:"C'est un pronom personnel sujet."},
 {ph:"Les oiseaux chantent mais il pleut.",mot:"mais",cl:"une conjonction de coordination",e:"Il relie deux parties de phrase."},
 {ph:"Ma grand-mère prépare un gâteau délicieux.",mot:"délicieux",cl:"un adjectif",e:"Il donne une précision sur le nom « gâteau »."},
 {ph:"Ma grand-mère prépare un gâteau délicieux.",mot:"un",cl:"un déterminant",e:"Il est placé devant le nom « gâteau »."},
 {ph:"Le chien court vite vers son maître.",mot:"vite",cl:"un adverbe",e:"Il est invariable et précise le verbe « court »."}
];
const GF={
  classes(){const m=pioche(MOTS);const f=melange(CLASSES.filter(c=>c!==m.cl)).slice(0,3);
    return qcm(`Dans « ${m.ph} », quelle est la classe du mot « ${m.mot} » ?`,m.cl,f,m.e);},
  verbe(){const v=pioche(VERBES.filter(x=>x.gr!=="auxiliaire"));
    return qcm(`À quel groupe appartient le verbe « ${v.inf} » ?`,v.gr,["1er groupe","2e groupe","3e groupe"].filter(x=>x!==v.gr),"1er groupe : infinitif en -er (sauf aller) ; 2e groupe : -ir avec « nous …issons » ; 3e groupe : tous les autres.");},
  phrase(){const b=pioche([
      {q:"« Range ta chambre. » Quel est le type de cette phrase ?",b:"injonctive",f:["déclarative","interrogative","exclamative"],e:"Elle donne un ordre : on dit aussi impérative."},
      {q:"« Ne cours pas dans le couloir. » Quel est le type de cette phrase ?",b:"injonctive",f:["déclarative","interrogative","exclamative"],e:"Elle donne un ordre ou un conseil."},
      {q:"« Quelle heure est-il ? » Quel est le type de cette phrase ?",b:"interrogative",f:["déclarative","injonctive","exclamative"],e:"Elle pose une question et finit par un point d'interrogation."},
      {q:"« Est-ce que tu viens avec nous ? » Quel est le type de cette phrase ?",b:"interrogative",f:["déclarative","injonctive","exclamative"],e:"Elle pose une question."},
      {q:"« Comme ce paysage est beau ! » Quel est le type de cette phrase ?",b:"exclamative",f:["déclarative","interrogative","injonctive"],e:"Elle exprime une émotion et finit par un point d'exclamation."},
      {q:"« Le train part à huit heures. » Quel est le type de cette phrase ?",b:"déclarative",f:["interrogative","injonctive","exclamative"],e:"Elle donne une information et finit par un point."},
      {q:"« Je n'aime pas les épinards. » Cette phrase est à la forme :",b:"négative",f:["affirmative"],e:"Les mots « ne … pas » marquent la forme négative."},
      {q:"« Il ne pleut jamais ici. » Cette phrase est à la forme :",b:"négative",f:["affirmative"],e:"Les mots « ne … jamais » marquent la forme négative."},
      {q:"« Nous aimons le chocolat. » Cette phrase est à la forme :",b:"affirmative",f:["négative"],e:"Il n'y a pas de « ne … pas » : elle est affirmative."},
      {q:"Quelle est la forme négative de « Paul mange. » ?",b:"Paul ne mange pas.",f:["Paul mange pas.","Paul ne mange.","Paul pas mange."],e:"La négation entoure le verbe : ne … pas."},
      {q:"Quel signe termine une phrase interrogative ?",b:"le point d'interrogation",f:["le point","le point d'exclamation","la virgule"],e:"Une question se termine par « ? »."}]);
    return qcm(b.q,b.b,b.f,b.e);},
  sujetverbe(){const b=pioche([
      {q:"Complète : « Les enfants ___ dans le jardin. »",b:"jouent",f:["joue","joues","jouer"],e:"Le sujet « les enfants » est au pluriel : terminaison -ent."},
      {q:"Complète : « Lina et sa sœur ___ au cinéma. »",b:"vont",f:["va","vas","allons"],e:"Deux personnes forment un sujet pluriel, comme « elles » : elles vont."},
      {q:"Complète : « Tu ___ ton exercice. »",b:"finis",f:["finit","finissent","finir"],e:"Avec « tu », le verbe se termine par -s."},
      {q:"Complète : « Le chat de mes voisins ___ sur le mur. »",b:"dort",f:["dorment","dors","dormir"],e:"Le sujet est « le chat » (singulier), pas « mes voisins »."},
      {q:"Complète : « Nous ___ une cabane. »",b:"construisons",f:["construisez","construisent","construit"],e:"Avec « nous », le verbe se termine par -ons."},
      {q:"Complète : « Dans la forêt ___ des loups. »",b:"vivent",f:["vit","vis","vivre"],e:"Le sujet « des loups » est placé après le verbe ; il est au pluriel."},
      {q:"Complète : « Les feuilles des arbres ___ en automne. »",b:"tombent",f:["tombe","tombes","tomber"],e:"Le sujet est « les feuilles », au pluriel : -ent."},
      {q:"Complète : « Vous ___ très vite. »",b:"courez",f:["courent","court","courons"],e:"Avec « vous », le verbe se termine par -ez."},
      {q:"Complète : « Mon frère et moi ___ au football. »",b:"jouons",f:["joue","jouent","jouez"],e:"« Mon frère et moi », c'est « nous » : terminaison -ons."}]);
    return qcm(b.q,b.b,b.f,b.e);},
  gn(){const b=pioche([
      {q:"Complète : « des fleurs ___ »",b:"blanches",f:["blanc","blanche","blancs"],e:"« Fleurs » est féminin pluriel : l'adjectif aussi."},
      {q:"Complète : « une ___ maison »",b:"grande",f:["grand","grands","grandes"],e:"« Maison » est féminin singulier : on ajoute -e."},
      {q:"Complète : « des chevaux ___ »",b:"noirs",f:["noir","noire","noires"],e:"« Chevaux » est masculin pluriel : on ajoute -s."},
      {q:"Quel est le pluriel de « journal » ?",b:"journaux",f:["journals","journales","journeaux"],e:"Les noms en -al font en général leur pluriel en -aux."},
      {q:"Quel est le pluriel de « bijou » ?",b:"bijoux",f:["bijous","bijoues","bijouxs"],e:"Bijou fait partie des sept noms en -ou qui prennent un x."},
      {q:"Quel est le pluriel de « gâteau » ?",b:"gâteaux",f:["gâteaus","gâteau","gâteauxs"],e:"Les noms en -eau prennent un x au pluriel."},
      {q:"Quel est le pluriel de « nez » ?",b:"nez",f:["nezs","nezes","neux"],e:"Les noms terminés par -s, -x ou -z ne changent pas au pluriel."},
      {q:"Quel est le féminin de « gentil » ?",b:"gentille",f:["gentile","gentil","gentiles"],e:"Les adjectifs en -il doublent souvent le l au féminin."},
      {q:"Complète : « les ___ voitures rouges »",b:"petites",f:["petit","petite","petits"],e:"« Voitures » est féminin pluriel : -es."},
      {q:"Complète : « un garçon ___ »",b:"heureux",f:["heureuse","heureuses","heureu"],e:"« Garçon » est masculin singulier ; heureux s'écrit avec un x."}]);
    return qcm(b.q,b.b,b.f,b.e);},
  fonctions(){const p=pioche(PHRASES_F);
    if(alea(0,1))return saisie(`Quel est le sujet du verbe dans : « ${p.ph} » ?`,[p.sujet],`On pose la question « qui est-ce qui ${p.verbe} ? » : c'est « ${p.sujet} ».`);
    return saisie(`Quel est le COD dans : « ${p.ph} » ?`,[p.cod],`On pose la question « ${p.sujet.toLowerCase()==="nous"?"nous":p.sujet} ${p.verbe} quoi ? » : c'est « ${p.cod} », placé juste après le verbe sans préposition.`);},
  complements(){const b=pioche([
      {q:"« Le soir, Lina lit dans son lit. » Que indique « Le soir » ?",b:"le temps",f:["le lieu","la manière","le sujet"],e:"Il répond à la question « quand ? »."},
      {q:"« Le soir, Lina lit dans son lit. » Que indique « dans son lit » ?",b:"le lieu",f:["le temps","la manière","le sujet"],e:"Il répond à la question « où ? »."},
      {q:"« Les oiseaux chantent joyeusement. » Que indique « joyeusement » ?",b:"la manière",f:["le temps","le lieu","le sujet"],e:"Il répond à la question « comment ? »."},
      {q:"« Demain, nous irons à la piscine. » Que indique « Demain » ?",b:"le temps",f:["le lieu","la manière","le sujet"],e:"Il répond à la question « quand ? »."},
      {q:"« Demain, nous irons à la piscine. » Que indique « à la piscine » ?",b:"le lieu",f:["le temps","la manière","le sujet"],e:"Il répond à la question « où ? »."},
      {q:"« Hugo traverse la rue avec prudence. » Que indique « avec prudence » ?",b:"la manière",f:["le temps","le lieu","le sujet"],e:"Il répond à la question « comment ? »."},
      {q:"« En automne, les arbres perdent leurs feuilles. » Que indique « En automne » ?",b:"le temps",f:["le lieu","la manière","le sujet"],e:"Il répond à la question « quand ? »."},
      {q:"« Le chat dort sous la table. » Que indique « sous la table » ?",b:"le lieu",f:["le temps","la manière","le sujet"],e:"Il répond à la question « où ? »."},
      {q:"Un complément circonstanciel peut en général :",b:"être déplacé ou supprimé",f:["jamais être déplacé","remplacer le verbe","s'accorder avec le sujet"],e:"Si on le supprime, la phrase garde du sens : c'est le test."},
      {q:"« Le matin, Léa boit du lait. » Quelle est la fonction de « du lait » ?",b:"complément d'objet direct",f:["sujet","complément circonstanciel de temps","verbe"],e:"Léa boit quoi ? du lait : il complète le verbe sans préposition."}]);
    return qcm(b.q.replace("Que indique","Qu'indique"),b.b,b.f,b.e);},
  homophones(){const h=pioche(HOMO);return qcm(`Complète : « ${h.ph} »`,h.bon,h.faux,h.expl);},
  synonymes(){const b=pioche([
      {q:"Quel mot est un synonyme de « content » ?",b:"heureux",f:["triste","fâché","fatigué"],e:"Un synonyme a presque le même sens."},
      {q:"Quel mot est un synonyme de « commencer » ?",b:"débuter",f:["finir","arrêter","terminer"],e:"Un synonyme a presque le même sens."},
      {q:"Quel mot est un synonyme de « bâtir » ?",b:"construire",f:["détruire","démolir","casser"],e:"Un synonyme a presque le même sens."},
      {q:"Quel mot est un synonyme de « peur » ?",b:"frayeur",f:["courage","joie","colère"],e:"Un synonyme a presque le même sens."},
      {q:"Quel est le contraire de « allumer » ?",b:"éteindre",f:["éclairer","briller","brûler"],e:"Un contraire a le sens opposé."},
      {q:"Quel est le contraire de « lent » ?",b:"rapide",f:["lourd","calme","doux"],e:"Un contraire a le sens opposé."},
      {q:"Quel est le contraire de « possible » ?",b:"impossible",f:["passible","probable","facile"],e:"Le préfixe im- donne ici le contraire."},
      {q:"Quel est le contraire de « ancien » ?",b:"moderne",f:["vieux","âgé","antique"],e:"Les autres mots sont des synonymes d'ancien."},
      {q:"Les mots « beau » et « joli » sont :",b:"des synonymes",f:["des contraires","des homophones","de la même famille"],e:"Ils ont presque le même sens."},
      {q:"Les mots « monter » et « descendre » sont :",b:"des contraires",f:["des synonymes","des homophones","de la même famille"],e:"Ils ont des sens opposés."}]);
    return qcm(b.q,b.b,b.f,b.e);},
  familles(){const b=pioche([
      {q:"Quel mot est de la famille de « dent » ?",b:"dentiste",f:["danser","dans","dame"],e:"Même radical « dent » et sens lié aux dents."},
      {q:"Quel mot est de la famille de « terre » ?",b:"terrain",f:["tarte","tirer","théâtre"],e:"Même radical « terr- » et sens lié au sol."},
      {q:"Quel mot est de la famille de « fleur » ?",b:"fleuriste",f:["flûte","flotter","fleuve"],e:"Le fleuriste vend des fleurs : même radical et sens lié."},
      {q:"Quel mot est de la famille de « lait » ?",b:"laitier",f:["laid","laisser","laine"],e:"Même radical « lait » et sens lié au lait."},
      {q:"Quel mot est de la famille de « jardin » ?",b:"jardinier",f:["jaune","jambe","jarre"],e:"Le jardinier s'occupe du jardin."},
      {q:"Quel mot est de la famille de « long » ?",b:"longueur",f:["loup","lourd","lune"],e:"Même radical « long » et sens lié à la longueur."},
      {q:"Quel mot n'est PAS de la famille de « mer » ?",b:"merci",f:["marin","maritime","amerrir"],e:"« Merci » ressemble à « mer » mais n'a aucun rapport avec la mer."},
      {q:"Quel est le radical commun à « chanteur », « chanter » et « chantonner » ?",b:"chant",f:["chan","eur","on"],e:"Le radical est la partie commune qui porte le sens."}]);
    return qcm(b.q,b.b,b.f,b.e);},
  prefixes(){const b=pioche([
      {q:"Que veut dire le préfixe « re- » dans « relire » ?",b:"de nouveau",f:["avant","le contraire","petit"],e:"Relire, c'est lire de nouveau."},
      {q:"Que veut dire le préfixe « im- » dans « impossible » ?",b:"le contraire",f:["de nouveau","avant","très"],e:"Impossible = pas possible."},
      {q:"Que veut dire le préfixe « dé- » dans « défaire » ?",b:"faire l'action inverse",f:["faire de nouveau","faire avant","faire très bien"],e:"Défaire, c'est le contraire de faire."},
      {q:"Que veut dire le préfixe « pré- » dans « préhistoire » ?",b:"avant",f:["après","contre","sans"],e:"La préhistoire est la période avant l'écriture."},
      {q:"Que veut dire le suffixe « -ette » dans « maisonnette » ?",b:"petit",f:["grand","plusieurs","ancien"],e:"Une maisonnette est une petite maison."},
      {q:"Dans « nageur », le suffixe « -eur » désigne :",b:"celui qui fait l'action",f:["le lieu de l'action","un objet","le contraire"],e:"Le nageur, c'est celui qui nage."},
      {q:"Quel mot obtient-on en ajoutant un préfixe à « content » pour dire le contraire ?",b:"mécontent",f:["recontent","contentement","contente"],e:"Le préfixe mé- donne ici le sens contraire."},
      {q:"Dans « boulangerie », le suffixe « -erie » indique :",b:"un lieu où l'on travaille ou vend",f:["une personne","une petite chose","le contraire"],e:"La boulangerie est le magasin du boulanger."}]);
    return qcm(b.q,b.b,b.f,b.e);}
};
function exoFrancais(tag){
  const map={classes:GF.classes,phrase:GF.phrase,sujetverbe:GF.sujetverbe,gn:GF.gn,fonctions:GF.fonctions,complements:GF.complements,
    homophones:GF.homophones,synonymes:GF.synonymes,familles:GF.familles,prefixes:GF.prefixes,
    present:()=>alea(0,3)?conjuguer("pres"):GF.verbe(),imparfait:()=>conjuguer("imp"),futur:()=>conjuguer("fut"),
    passecompose:()=>conjuguer("pc"),passesimple:()=>conjuguer("ps"),conjug:()=>conjuguer(pioche(["pres","imp","fut","pc","ps"]))};
  const f=map[tag]||pioche(Object.values(map));return f();
}

/* ---------- ANGLAIS (niveau A1) ---------- */
const VOC_EN={
 greetings:[["goodbye","au revoir"],["thank you","merci"],["please","s'il te plaît"],["good night","bonne nuit"],["good morning","bonjour (le matin)"],["see you tomorrow","à demain"],["sorry","pardon"],["How are you?","Comment vas-tu ?"]],
 family:[["mother","mère"],["father","père"],["sister","sœur"],["brother","frère"],["grandmother","grand-mère"],["grandfather","grand-père"],["aunt","tante"],["uncle","oncle"]],
 animals:[["dog","chien"],["cat","chat"],["horse","cheval"],["cow","vache"],["bird","oiseau"],["fish","poisson"],["rabbit","lapin"],["mouse","souris"],["pig","cochon"],["sheep","mouton"]],
 days:[["Monday","lundi"],["Tuesday","mardi"],["Wednesday","mercredi"],["Thursday","jeudi"],["Friday","vendredi"],["Saturday","samedi"],["Sunday","dimanche"],["January","janvier"],["July","juillet"],["December","décembre"]],
 weather:[["It's sunny.","Il y a du soleil."],["It's raining.","Il pleut."],["It's snowing.","Il neige."],["It's windy.","Il y a du vent."],["It's cold.","Il fait froid."],["It's hot.","Il fait chaud."],["It's cloudy.","Il y a des nuages."]],
 clothes:[["trousers","un pantalon"],["a dress","une robe"],["shoes","des chaussures"],["a hat","un chapeau"],["a skirt","une jupe"],["a coat","un manteau"],["socks","des chaussettes"],["a jumper","un pull"]],
 body:[["head","tête"],["arm","bras"],["leg","jambe"],["hand","main"],["foot","pied"],["eyes","yeux"],["nose","nez"],["mouth","bouche"],["ear","oreille"]],
 christmas:[["a Christmas tree","un sapin de Noël"],["a present","un cadeau"],["Father Christmas","le Père Noël"],["a star","une étoile"],["a snowman","un bonhomme de neige"],["a candle","une bougie"],["Merry Christmas!","Joyeux Noël !"]],
 house:[["the kitchen","la cuisine"],["a bedroom","une chambre"],["the bathroom","la salle de bains"],["the living room","le salon"],["the garden","le jardin"],["a bed","un lit"],["a door","une porte"],["a window","une fenêtre"]],
 school:[["a pencil","un crayon"],["a ruler","une règle"],["a rubber","une gomme"],["a schoolbag","un cartable"],["a book","un livre"],["the teacher","le maître ou la maîtresse"],["scissors","des ciseaux"],["glue","de la colle"]],
 food:[["an apple","une pomme"],["bread","du pain"],["cheese","du fromage"],["milk","du lait"],["water","de l'eau"],["chicken","du poulet"],["a banana","une banane"],["an egg","un œuf"],["a cake","un gâteau"],["a carrot","une carotte"]],
 town:[["a bakery","une boulangerie"],["a station","une gare"],["a park","un parc"],["a hospital","un hôpital"],["a street","une rue"],["a library","une bibliothèque"],["a swimming pool","une piscine"],["a shop","un magasin"]]
};
const GRAM_EN=[
 {t:"tobe",q:"I ___ nine years old.",b:"am",f:["is","are","be"],e:"Avec I, on utilise am : I am."},
 {t:"tobe",q:"She ___ my best friend.",b:"is",f:["am","are","be"],e:"Avec he, she ou it, on utilise is."},
 {t:"tobe",q:"We ___ in the same class.",b:"are",f:["is","am","be"],e:"Avec we, you et they, on utilise are."},
 {t:"tobe",q:"They ___ happy today.",b:"are",f:["is","am","be"],e:"Avec they, on utilise are."},
 {t:"tobe",q:"It ___ a big dog.",b:"is",f:["am","are","be"],e:"Avec it, on utilise is."},
 {t:"tobe",q:"Comment dit-on « je suis » en anglais ?",b:"I am",f:["I is","I are","I have"],e:"Le verbe être se dit to be : I am, you are, he is."},
 {t:"tobe",q:"___ you French?",b:"Are",f:["Is","Am","Do"],e:"Pour poser la question, on place are devant you."},
 {t:"havegot",q:"I ___ got a cat.",b:"have",f:["has","am","is"],e:"Avec I, you, we, they : have got."},
 {t:"havegot",q:"She ___ got two brothers.",b:"has",f:["have","is","are"],e:"Avec he, she, it : has got."},
 {t:"havegot",q:"___ you got a pet?",b:"Have",f:["Has","Are","Is"],e:"Pour la question, on place have devant le sujet."},
 {t:"havegot",q:"He ___ got blue eyes.",b:"has",f:["have","is","are"],e:"Avec he : has got."},
 {t:"havegot",q:"We ___ got a big garden.",b:"have",f:["has","is","are"],e:"Avec we : have got."},
 {t:"havegot",q:"Que veut dire « I haven't got a bike » ?",b:"Je n'ai pas de vélo.",f:["J'ai un vélo.","Je n'aime pas le vélo.","Je fais du vélo."],e:"haven't got = n'avoir pas."},
 {t:"can",q:"I ___ swim.",b:"can",f:["cans","can to","am can"],e:"can ne change pas et se met devant le verbe."},
 {t:"can",q:"She can ___ very well.",b:"dance",f:["dances","to dance","dancing"],e:"Après can, le verbe reste à sa forme de base."},
 {t:"can",q:"___ you ride a bike?",b:"Can",f:["Do","Are","Has"],e:"Pour la question, on place can devant le sujet."},
 {t:"can",q:"Que veut dire « I can't swim » ?",b:"Je ne sais pas nager.",f:["Je sais nager.","J'aime nager.","Je vais nager."],e:"can't = ne pas savoir ou ne pas pouvoir."},
 {t:"can",q:"Birds ___ fly.",b:"can",f:["can't","cans","is"],e:"Les oiseaux savent voler : can."},
 {t:"can",q:"Fish ___ walk.",b:"can't",f:["can","cans","are"],e:"Les poissons ne savent pas marcher : can't."},
 {t:"like",q:"I ___ chocolate.",b:"like",f:["likes","liking","am like"],e:"Avec I, like reste sans -s."},
 {t:"like",q:"She ___ cats.",b:"likes",f:["like","liking","is like"],e:"Avec he ou she, on ajoute -s : likes."},
 {t:"like",q:"Que veut dire « I don't like carrots » ?",b:"Je n'aime pas les carottes.",f:["J'aime les carottes.","Je mange des carottes.","Je n'ai pas de carottes."],e:"don't like = ne pas aimer."},
 {t:"like",q:"Do you like apples? — Yes, I ___.",b:"do",f:["like","am","can"],e:"On reprend do dans la réponse courte."},
 {t:"like",q:"Comment dit-on « j'aime le football » ?",b:"I like football.",f:["I am football.","I have football.","I likes football."],e:"J'aime = I like."},
 {t:"like",q:"Que veut dire « What's your favourite colour? » ?",b:"Quelle est ta couleur préférée ?",f:["Quelle heure est-il ?","Quel âge as-tu ?","Où habites-tu ?"],e:"favourite = préféré, colour = couleur."},
 {t:"thereis",q:"There ___ a cat in the garden.",b:"is",f:["are","am","be"],e:"Un seul chat : there is."},
 {t:"thereis",q:"There ___ two dogs in the park.",b:"are",f:["is","am","be"],e:"Plusieurs chiens : there are."},
 {t:"thereis",q:"There ___ five apples on the table.",b:"are",f:["is","am","be"],e:"Plusieurs pommes : there are."},
 {t:"thereis",q:"There ___ a bed in my bedroom.",b:"is",f:["are","am","be"],e:"Un seul lit : there is."},
 {t:"thereis",q:"Que veut dire « there is » ?",b:"il y a",f:["il est","c'est","il a"],e:"There is et there are se traduisent par « il y a »."},
 {t:"thereis",q:"There are ___ chairs.",b:"four",f:["a","one","an"],e:"There are s'emploie avec un pluriel."},
 {t:"prepositions",q:"Le chat est sous la table : « The cat is ___ the table. »",b:"under",f:["on","in","behind"],e:"under = sous."},
 {t:"prepositions",q:"Le livre est sur le bureau : « The book is ___ the desk. »",b:"on",f:["under","in","next to"],e:"on = sur."},
 {t:"prepositions",q:"La pomme est dans le sac : « The apple is ___ the bag. »",b:"in",f:["on","under","behind"],e:"in = dans."},
 {t:"prepositions",q:"Le chien est derrière la porte : « The dog is ___ the door. »",b:"behind",f:["in front of","on","under"],e:"behind = derrière."},
 {t:"prepositions",q:"Lina est à côté de Hugo : « Lina is ___ Hugo. »",b:"next to",f:["under","on","in"],e:"next to = à côté de."},
 {t:"prepositions",q:"Le vélo est devant la maison : « The bike is ___ the house. »",b:"in front of",f:["behind","under","in"],e:"in front of = devant."},
 {t:"culture",q:"Quelle est la capitale du Royaume-Uni ?",b:"London",f:["Dublin","New York","Edinburgh"],e:"Londres (London) est la capitale du Royaume-Uni."},
 {t:"culture",q:"Comment s'appelle le drapeau du Royaume-Uni ?",b:"the Union Jack",f:["the Stars and Stripes","the Maple Leaf","the Tricolour"],e:"Il réunit les croix de l'Angleterre, de l'Écosse et de l'Irlande."},
 {t:"culture",q:"Quelle est la monnaie du Royaume-Uni ?",b:"the pound",f:["the euro","the dollar","the franc"],e:"On paie en livres sterling (pounds)."},
 {t:"culture",q:"Au Royaume-Uni, les voitures roulent :",b:"à gauche",f:["à droite","au milieu","sur le trottoir"],e:"On conduit à gauche au Royaume-Uni."},
 {t:"culture",q:"Quel pays ne fait PAS partie du Royaume-Uni ?",b:"l'Irlande (la République d'Irlande)",f:["l'Angleterre","l'Écosse","le pays de Galles"],e:"Le Royaume-Uni réunit l'Angleterre, l'Écosse, le pays de Galles et l'Irlande du Nord."},
 {t:"culture",q:"Big Ben est une célèbre cloche, dans une tour de quelle ville ?",b:"London",f:["Paris","Dublin","Manchester"],e:"Big Ben se trouve à Londres, près du Parlement."},
 {t:"culture",q:"Halloween est fêté le :",b:"31 octobre",f:["25 décembre","1er janvier","14 juillet"],e:"Halloween a lieu la veille de la Toussaint."}
];
const EN_U=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
const EN_D=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
function enAnglais(n){if(n===100)return "one hundred";if(n<20)return EN_U[n];const d=Math.floor(n/10),u=n%10;return EN_D[d]+(u?"-"+EN_U[u]:"");}
function exoAnglais(tag){
  if(tag==="numbers"){
    const t=alea(1,3);
    if(t===1){const n=alea(11,99);return saisie(`Écris en chiffres : « ${enAnglais(n)} »`,[String(n)],`On lit les dizaines puis les unités : ${enAnglais(n)} = ${n}.`);}
    if(t===2){const n=alea(13,19);return qcm(`Comment écrit-on ${n} en anglais ?`,enAnglais(n),[enAnglais((n-10)*10),enAnglais(n+1>19?n-1:n+1),enAnglais(n-10)],`Les nombres de 13 à 19 se terminent par -teen ; les dizaines (30, 40…) par -ty.`);}
    const a=alea(2,9),b=alea(2,9);return saisie(`Combien font « ${EN_U[a]} plus ${EN_U[b]} » ? Réponds en chiffres.`,[String(a+b),enAnglais(a+b)],`${EN_U[a]} = ${a} et ${EN_U[b]} = ${b}, donc ${a+b} (${enAnglais(a+b)}).`);
  }
  if(tag==="time"){
    const h=alea(1,12),demi=alea(0,1);const bonne=demi?`It's half past ${enAnglais(h)}.`:`It's ${enAnglais(h)} o'clock.`;
    const h2=h===12?1:h+1;
    return qcm(`Comment dit-on « Il est ${h} h${demi?" 30":""} » en anglais ?`,bonne,[demi?`It's ${enAnglais(h)} o'clock.`:`It's half past ${enAnglais(h)}.`,demi?`It's half past ${enAnglais(h2)}.`:`It's ${enAnglais(h2)} o'clock.`,`It's quarter past ${enAnglais(h)}.`],"o'clock = heure pile ; half past = et demie ; quarter past = et quart.");
  }
  const voc=VOC_EN[tag];
  if(voc&&(alea(0,2)||!GRAM_EN.some(x=>x.t===tag))){
    const p=pioche(voc),autres=melange(voc.filter(x=>x!==p)).slice(0,3);
    if(alea(0,1))return qcm(`Que veut dire « ${p[0]} » ?`,p[1],autres.map(x=>x[1]),`« ${p[0]} » se traduit par « ${p[1]} » : on apprend le vocabulaire par thème.`);
    return qcm(`Comment dit-on « ${p[1]} » en anglais ?`,p[0],autres.map(x=>x[0]),`« ${p[1]} » se dit « ${p[0]} » en anglais.`);
  }
  const f=GRAM_EN.filter(x=>x.t===tag);
  if(!f.length&&!voc)return exoAnglais(pioche(Object.keys(VOC_EN)));
  const x=pioche(f.length?f:GRAM_EN);
  return qcm(/^(Que|Quel|Comment|Le |La |Lina|Au |Big|Halloween)/.test(x.q)?x.q:`Complète : ${x.q}`,x.b,x.f,x.e);
}

/* ---------- SCIENCES ET TECHNOLOGIE ---------- */
const BANQUE_S=[
 {t:"matiere",q:"Quels sont les trois états de la matière ?",b:"solide, liquide et gazeux",f:["chaud, froid et tiède","dur, mou et léger","eau, air et terre"],e:"Toute matière peut être solide, liquide ou gazeuse."},
 {t:"matiere",q:"Comment appelle-t-on l'eau à l'état solide ?",b:"la glace",f:["la vapeur","la pluie","la buée"],e:"Sous 0 °C, l'eau liquide devient de la glace."},
 {t:"matiere",q:"À quelle température la glace fond-elle ?",b:"0 °C",f:["100 °C","10 °C","50 °C"],e:"La glace fond à 0 °C et l'eau bout à 100 °C."},
 {t:"matiere",q:"Comment appelle-t-on le passage de l'état solide à l'état liquide ?",b:"la fusion",f:["la solidification","la condensation","la vaporisation"],e:"Un glaçon qui fond subit une fusion."},
 {t:"matiere",q:"Comment appelle-t-on le passage de l'état liquide à l'état solide ?",b:"la solidification",f:["la fusion","la vaporisation","la condensation"],e:"L'eau qui gèle se solidifie."},
 {t:"matiere",q:"La buée sur une vitre froide vient :",b:"de la vapeur d'eau de l'air qui se condense",f:["de la vitre qui fond","de la pluie à travers la vitre","de la peinture"],e:"La vapeur d'eau redevient liquide au contact du froid : c'est la condensation."},
 {t:"matiere",q:"Un liquide versé dans un récipient :",b:"prend la forme du récipient",f:["garde sa propre forme","disparaît","devient solide"],e:"Un liquide n'a pas de forme propre et sa surface reste horizontale."},
 {t:"matiere",q:"Quand un glaçon fond, sa masse :",b:"reste la même",f:["augmente","diminue","devient nulle"],e:"Lors d'un changement d'état, la masse se conserve."},
 {t:"matiere",q:"L'air est :",b:"de la matière, un gaz qui a une masse",f:["du vide","un liquide","un solide invisible sans masse"],e:"Un ballon gonflé est plus lourd qu'un ballon dégonflé."},
 {t:"matiere",q:"Un gaz enfermé dans une seringue :",b:"peut être comprimé",f:["ne peut pas bouger","devient solide","disparaît"],e:"On peut pousser le piston : le gaz occupe moins de place."},
 {t:"melanges",q:"Que se passe-t-il quand on met du sel dans l'eau et qu'on remue ?",b:"le sel se dissout",f:["le sel flotte","le sel brûle","rien ne change"],e:"Le sel est soluble dans l'eau : on ne le voit plus, mais il est toujours là."},
 {t:"melanges",q:"Quand on mélange de l'huile et de l'eau :",b:"l'huile reste au-dessus de l'eau",f:["l'huile se dissout","l'eau devient de l'huile","tout devient solide"],e:"L'huile et l'eau ne se mélangent pas : elles sont non miscibles."},
 {t:"melanges",q:"Comment séparer le sable de l'eau ?",b:"en filtrant",f:["en remuant","en ajoutant du sel","en secouant"],e:"Le filtre retient le sable et laisse passer l'eau."},
 {t:"melanges",q:"Comment récupérer le sel dissous dans l'eau salée ?",b:"en faisant évaporer l'eau",f:["en filtrant","en remuant","en ajoutant de l'eau"],e:"C'est ce qui se passe dans les marais salants."},
 {t:"melanges",q:"Le sable est-il soluble dans l'eau ?",b:"non",f:["oui"],e:"Le sable ne se dissout pas : il tombe au fond."},
 {t:"melanges",q:"Un mélange dans lequel on voit plusieurs constituants est :",b:"hétérogène",f:["homogène","dissous","transparent"],e:"Dans un mélange homogène, on ne distingue qu'une seule matière."},
 {t:"melanges",q:"Le sucre mis dans le thé a-t-il disparu ?",b:"non, il est dissous : le thé est sucré",f:["oui, il n'existe plus","oui, il s'est envolé","non, il est au fond en morceaux"],e:"Une matière dissoute est toujours présente, même si on ne la voit plus."},
 {t:"classif",q:"Pour classer les animaux, on regarde surtout :",b:"ce qu'ils ont (squelette, poils, plumes…)",f:["leur couleur","ce qu'ils mangent","leur lieu de vie"],e:"La classification se fait à partir des caractères que les animaux possèdent."},
 {t:"classif",q:"Un vertébré est un animal qui a :",b:"un squelette intérieur avec une colonne vertébrale",f:["une coquille","six pattes","des ailes"],e:"Poissons, amphibiens, reptiles, oiseaux et mammifères sont des vertébrés."},
 {t:"classif",q:"Un mammifère est un animal qui :",b:"a des poils et allaite ses petits",f:["a des plumes","a six pattes","pond toujours des œufs dans l'eau"],e:"Les mamelles et les poils sont les caractères des mammifères."},
 {t:"classif",q:"La baleine est :",b:"un mammifère",f:["un poisson","un reptile","un amphibien"],e:"Elle respire de l'air et allaite ses petits."},
 {t:"classif",q:"La chauve-souris est :",b:"un mammifère",f:["un oiseau","un insecte","un reptile"],e:"Elle a des poils et allaite ses petits, même si elle vole."},
 {t:"classif",q:"Combien de pattes a un insecte ?",b:"6",f:["8","4","10"],e:"L'araignée, avec 8 pattes, n'est pas un insecte."},
 {t:"classif",q:"Le serpent est :",b:"un reptile",f:["un mammifère","un amphibien","un insecte"],e:"Il a la peau couverte d'écailles."},
 {t:"classif",q:"La grenouille est :",b:"un amphibien",f:["un reptile","un poisson","un mammifère"],e:"Elle vit dans l'eau (têtard) puis sur terre et dans l'eau (adulte)."},
 {t:"classif",q:"L'escargot est :",b:"un invertébré",f:["un vertébré","un mammifère","un reptile"],e:"Il n'a pas de squelette intérieur."},
 {t:"classif",q:"Le manchot, qui ne vole pas, est :",b:"un oiseau",f:["un mammifère","un poisson","un reptile"],e:"Il a des plumes et un bec : c'est un oiseau."},
 {t:"alimentation",q:"Le lait, le fromage et le yaourt apportent surtout :",b:"du calcium pour les os",f:["du sucre pour courir","des fibres","rien d'utile"],e:"Les produits laitiers aident à construire les os et les dents."},
 {t:"alimentation",q:"Les pâtes, le riz et le pain apportent surtout :",b:"de l'énergie",f:["du calcium","de la vitamine C","de l'eau"],e:"Les féculents donnent l'énergie dont le corps a besoin."},
 {t:"alimentation",q:"La viande, le poisson et les œufs servent surtout à :",b:"construire et réparer le corps (les muscles)",f:["donner du calcium","hydrater","colorer la peau"],e:"Ils apportent des protéines."},
 {t:"alimentation",q:"Quelle est la seule boisson indispensable ?",b:"l'eau",f:["le soda","le jus de fruits","le sirop"],e:"Le corps a besoin d'eau tous les jours."},
 {t:"alimentation",q:"Le sel de cuisine est un aliment d'origine :",b:"minérale",f:["animale","végétale"],e:"Il vient de la mer ou des mines, pas d'un être vivant."},
 {t:"alimentation",q:"Le miel est un aliment d'origine :",b:"animale",f:["végétale","minérale"],e:"Il est fabriqué par les abeilles."},
 {t:"alimentation",q:"Pourquoi met-on les aliments au réfrigérateur ?",b:"le froid ralentit le développement des microbes",f:["le froid les fait grossir","le froid les rend plus sucrés","pour les faire cuire"],e:"Les microbes se développent beaucoup moins au froid."},
 {t:"alimentation",q:"Pour fabriquer une conserve, on :",b:"chauffe l'aliment très fort dans une boîte fermée",f:["le laisse au soleil","le met dans l'eau froide","le congèle"],e:"La chaleur détruit les microbes et la boîte fermée empêche d'en faire entrer."},
 {t:"alimentation",q:"Un repas équilibré, c'est un repas :",b:"varié, avec des aliments de plusieurs familles",f:["avec un seul aliment","avec beaucoup de sucre","sans eau"],e:"Chaque famille d'aliments a un rôle différent."},
 {t:"alimentation",q:"Les fruits et les légumes apportent surtout :",b:"des vitamines et des fibres",f:["du calcium seulement","de la graisse","du sel"],e:"On conseille d'en manger au moins cinq par jour."},
 {t:"chaines",q:"Une chaîne alimentaire commence en général par :",b:"un végétal",f:["un carnivore","un être humain","un décomposeur"],e:"Les végétaux fabriquent leur matière grâce à la lumière : ce sont les producteurs."},
 {t:"chaines",q:"Dans une chaîne alimentaire, la flèche veut dire :",b:"« est mangé par »",f:["« est plus grand que »","« vit à côté de »","« est le petit de »"],e:"La flèche va du mangé vers le mangeur."},
 {t:"chaines",q:"Le lapin mange de l'herbe. Il est :",b:"herbivore",f:["carnivore","omnivore","décomposeur"],e:"Un herbivore ne mange que des végétaux."},
 {t:"chaines",q:"Le loup mange d'autres animaux. Il est :",b:"carnivore",f:["herbivore","producteur","décomposeur"],e:"Un carnivore mange de la chair animale."},
 {t:"chaines",q:"L'être humain mange des végétaux et des animaux. Il est :",b:"omnivore",f:["herbivore","carnivore","producteur"],e:"Omnivore veut dire « qui mange de tout »."},
 {t:"chaines",q:"Les vers de terre et les champignons qui transforment les feuilles mortes sont :",b:"des décomposeurs",f:["des carnivores","des producteurs","des prédateurs"],e:"Ils rendent au sol les matières minérales utiles aux plantes."},
 {t:"chaines",q:"Dans la chaîne « herbe → criquet → grenouille → héron », qui mange la grenouille ?",b:"le héron",f:["le criquet","l'herbe","personne"],e:"On suit la flèche : la grenouille est mangée par le héron."},
 {t:"chaines",q:"Dans la chaîne « herbe → criquet → grenouille → héron », si les criquets disparaissent :",b:"les grenouilles manquent de nourriture",f:["l'herbe disparaît","les hérons ont plus à manger","rien ne change"],e:"Chaque maillon dépend de celui qu'il mange."},
 {t:"developpement",q:"Le têtard devient :",b:"une grenouille",f:["un poisson","un serpent","un escargot"],e:"Ce grand changement s'appelle une métamorphose."},
 {t:"developpement",q:"La chenille devient un papillon après avoir été :",b:"une chrysalide",f:["un têtard","une larve de mouche","une graine"],e:"Œuf, chenille, chrysalide, papillon : c'est son cycle de vie."},
 {t:"developpement",q:"De quoi une graine a-t-elle besoin pour germer ?",b:"d'eau, d'air et d'une température douce",f:["de sel","de nuit totale et de froid","de sucre"],e:"Sans eau, la graine ne germe pas."},
 {t:"developpement",q:"Après la fécondation, la fleur se transforme en :",b:"fruit, qui contient des graines",f:["racine","feuille","tige"],e:"Les graines donneront de nouvelles plantes."},
 {t:"developpement",q:"La poule pond des œufs. On dit qu'elle est :",b:"ovipare",f:["vivipare","herbivore","carnivore"],e:"Ovipare : le petit se développe dans un œuf pondu."},
 {t:"developpement",q:"Le chiot se développe dans le ventre de sa mère. On dit que le chien est :",b:"vivipare",f:["ovipare","herbivore","décomposeur"],e:"Vivipare : le petit naît vivant, déjà formé."},
 {t:"developpement",q:"Vers quel âge les dents de lait commencent-elles à tomber chez l'enfant ?",b:"vers 6 ans",f:["vers 1 an","vers 15 ans","vers 30 ans"],e:"Elles sont remplacées par les dents définitives."},
 {t:"terre",q:"Le Soleil est :",b:"une étoile",f:["une planète","un satellite","une comète"],e:"Il produit sa propre lumière."},
 {t:"terre",q:"Combien de planètes tournent autour du Soleil ?",b:"8",f:["9","7","12"],e:"Mercure, Vénus, la Terre, Mars, Jupiter, Saturne, Uranus et Neptune."},
 {t:"terre",q:"Quelle planète est la plus proche du Soleil ?",b:"Mercure",f:["la Terre","Neptune","Jupiter"],e:"Mercure est la première planète."},
 {t:"terre",q:"Quelle est la plus grosse planète du système solaire ?",b:"Jupiter",f:["la Terre","Mars","Mercure"],e:"Jupiter est une planète géante faite de gaz."},
 {t:"terre",q:"À quelle place se trouve la Terre en partant du Soleil ?",b:"la 3e",f:["la 1re","la 5e","la 8e"],e:"Mercure, Vénus, puis la Terre."},
 {t:"terre",q:"Quelle planète est surnommée la planète rouge ?",b:"Mars",f:["Vénus","Saturne","Neptune"],e:"Son sol contient beaucoup d'oxyde de fer, de couleur rouge."},
 {t:"terre",q:"Quelle planète est célèbre pour ses grands anneaux bien visibles ?",b:"Saturne",f:["Mars","Mercure","la Terre"],e:"Ses anneaux sont faits de glace et de poussières."},
 {t:"terre",q:"Quelle est la planète la plus éloignée du Soleil ?",b:"Neptune",f:["Mars","Jupiter","Vénus"],e:"Neptune est la huitième planète."},
 {t:"jour",q:"Combien de temps la Terre met-elle pour tourner sur elle-même ?",b:"environ 24 heures",f:["environ 365 jours","environ 1 mois","environ 1 heure"],e:"Ce mouvement s'appelle la rotation."},
 {t:"jour",q:"Qu'est-ce qui explique l'alternance du jour et de la nuit ?",b:"la rotation de la Terre sur elle-même",f:["le Soleil qui s'éteint","les nuages","la Lune qui cache le Soleil"],e:"La moitié de la Terre tournée vers le Soleil est éclairée : c'est le jour."},
 {t:"jour",q:"Combien de temps la Terre met-elle pour faire le tour du Soleil ?",b:"environ 365 jours",f:["24 heures","1 semaine","1 mois"],e:"Ce tour s'appelle la révolution : il dure un an."},
 {t:"jour",q:"De quel côté le Soleil se lève-t-il ?",b:"à l'est",f:["à l'ouest","au nord","au sud"],e:"Il se lève à l'est et se couche à l'ouest."},
 {t:"jour",q:"Qu'est-ce qui explique les saisons ?",b:"l'inclinaison de l'axe de la Terre",f:["la distance à la Lune","les nuages","la vitesse du vent"],e:"Selon la période, nous recevons les rayons du Soleil plus ou moins de face."},
 {t:"jour",q:"En France, à quelle saison les journées sont-elles les plus longues ?",b:"en été",f:["en hiver","en automne","au printemps"],e:"La plus longue journée a lieu vers le 21 juin."},
 {t:"jour",q:"La Lune est :",b:"le satellite naturel de la Terre",f:["une étoile","une planète","un morceau du Soleil"],e:"Elle tourne autour de la Terre."},
 {t:"jour",q:"Combien de temps la Lune met-elle environ pour faire le tour de la Terre ?",b:"environ un mois",f:["24 heures","une semaine","un an"],e:"C'est pour cela qu'on voit ses phases changer pendant le mois."},
 {t:"jour",q:"La Lune brille dans le ciel parce que :",b:"elle est éclairée par le Soleil",f:["elle produit sa propre lumière","elle est en feu","elle reflète les lumières des villes"],e:"Seule la partie éclairée par le Soleil est visible."},
 {t:"energie",q:"Quelle source d'énergie est renouvelable ?",b:"le vent",f:["le pétrole","le charbon","le gaz naturel"],e:"Le vent, le Soleil et l'eau qui coule ne s'épuisent pas."},
 {t:"energie",q:"Pourquoi dit-on que le pétrole n'est pas renouvelable ?",b:"il met des millions d'années à se former",f:["il est liquide","il est noir","il vient de la mer"],e:"Les réserves s'épuisent bien plus vite qu'elles ne se forment."},
 {t:"energie",q:"Une éolienne transforme l'énergie du vent en :",b:"électricité",f:["eau","pétrole","lumière du jour"],e:"Le vent fait tourner les pales, qui entraînent un générateur."},
 {t:"energie",q:"Un panneau solaire produit de l'électricité grâce :",b:"à la lumière du Soleil",f:["au vent","à la pluie","au charbon"],e:"Le panneau transforme la lumière en électricité."},
 {t:"energie",q:"Un barrage produit de l'électricité grâce :",b:"à l'eau qui fait tourner des turbines",f:["au vent","au Soleil","au gaz"],e:"C'est l'énergie hydraulique."},
 {t:"energie",q:"D'où notre corps tire-t-il son énergie ?",b:"des aliments",f:["de l'électricité","du vent","de l'essence"],e:"Les aliments sont le carburant du corps."},
 {t:"energie",q:"Quel geste permet d'économiser l'énergie ?",b:"éteindre la lumière en quittant une pièce",f:["laisser la télévision allumée","ouvrir la fenêtre avec le chauffage allumé","prendre la voiture pour 200 m"],e:"Chaque appareil allumé consomme de l'énergie."},
 {t:"electricite",q:"Pour qu'une lampe s'allume, le circuit doit être :",b:"fermé",f:["ouvert","coupé","sans pile"],e:"Le courant ne circule que dans une boucle fermée."},
 {t:"electricite",q:"Quel matériau laisse passer le courant électrique ?",b:"le cuivre",f:["le plastique","le bois","le verre"],e:"Les métaux sont de bons conducteurs."},
 {t:"electricite",q:"Quel matériau est un isolant électrique ?",b:"le plastique",f:["le cuivre","le fer","l'aluminium"],e:"Le plastique, le bois et le verre ne laissent pas passer le courant."},
 {t:"electricite",q:"Quand l'interrupteur est ouvert :",b:"le courant ne passe pas",f:["la lampe brille plus fort","la pile se recharge","le courant passe deux fois"],e:"Ouvrir l'interrupteur coupe le circuit."},
 {t:"electricite",q:"Pourquoi les fils électriques sont-ils entourés de plastique ?",b:"pour isoler et éviter de s'électrocuter",f:["pour la décoration","pour qu'ils soient plus lourds","pour conduire mieux"],e:"Le plastique est isolant : il protège."},
 {t:"electricite",q:"Que ne faut-il jamais faire avec une prise électrique ?",b:"y mettre un objet ou les doigts",f:["y brancher une lampe","l'éteindre","la regarder"],e:"Le courant du secteur (230 V) est très dangereux."},
 {t:"electricite",q:"Une pile possède :",b:"deux bornes, une + et une −",f:["une seule borne","quatre bornes","aucune borne"],e:"On relie les deux bornes pour fermer le circuit."},
 {t:"objets",q:"Lequel est un objet technique ?",b:"un vélo",f:["un arbre","un caillou","un coquillage"],e:"Un objet technique est fabriqué par l'être humain pour répondre à un besoin."},
 {t:"objets",q:"La fonction d'usage d'un objet, c'est :",b:"ce à quoi il sert",f:["sa couleur","son prix","son poids"],e:"Par exemple, la fonction d'une paire de ciseaux est de couper."},
 {t:"objets",q:"Quel objet d'éclairage est le plus ancien ?",b:"la bougie",f:["l'ampoule électrique","la lampe de poche à LED","le lampadaire électrique"],e:"Les objets évoluent : bougie, lampe à huile, puis lampe électrique."},
 {t:"objets",q:"Sur un vélo, la chaîne et les roues dentées servent à :",b:"transmettre le mouvement des pédales à la roue",f:["freiner","éclairer","gonfler les pneus"],e:"C'est une transmission de mouvement."},
 {t:"objets",q:"Pourquoi les casseroles sont-elles souvent en métal ?",b:"le métal conduit bien la chaleur",f:["le métal est transparent","le métal fond facilement","le métal est léger comme une plume"],e:"La chaleur passe vite du feu à l'aliment."},
 {t:"objets",q:"Pourquoi la poignée d'une casserole est-elle souvent en plastique ou en bois ?",b:"pour ne pas se brûler",f:["pour qu'elle chauffe plus","pour la rendre lourde","pour qu'elle conduise l'électricité"],e:"Le plastique et le bois conduisent mal la chaleur."},
 {t:"objets",q:"Quel matériau est transparent et fragile ?",b:"le verre",f:["le bois","le fer","le carton"],e:"On l'utilise pour les fenêtres."},
 {t:"objets",q:"Que faut-il faire d'une bouteille en verre vide ?",b:"la mettre dans le conteneur à verre pour la recycler",f:["la jeter dans la nature","la brûler","l'enterrer dans le jardin"],e:"Le verre se recycle presque à l'infini."}
];

/* ---------- HISTOIRE-GÉOGRAPHIE ET EMC ---------- */
const BANQUE_H=[
 {t:"temps",q:"Combien d'années y a-t-il dans un siècle ?",b:"100",f:["10","1000","50"],e:"Un siècle = 100 ans ; un millénaire = 1000 ans."},
 {t:"temps",q:"En quel siècle se situe l'année 1515 ?",b:"au XVIe siècle",f:["au XVe siècle","au XVIIe siècle","au XIVe siècle"],e:"De 1501 à 1600, c'est le XVIe siècle : on ajoute 1 aux centaines."},
 {t:"temps",q:"En quel siècle se situe l'année 1789 ?",b:"au XVIIIe siècle",f:["au XVIIe siècle","au XIXe siècle","au XVIe siècle"],e:"De 1701 à 1800, c'est le XVIIIe siècle."},
 {t:"temps",q:"À quoi sert une frise chronologique ?",b:"à placer des événements dans l'ordre du temps",f:["à mesurer des distances","à dessiner une carte","à compter de l'argent"],e:"Les événements les plus anciens sont à gauche."},
 {t:"temps",q:"Quelle période vient juste après la Préhistoire ?",b:"l'Antiquité",f:["le Moyen Âge","les Temps modernes","l'époque contemporaine"],e:"Préhistoire, Antiquité, Moyen Âge, Temps modernes, époque contemporaine."},
 {t:"temps",q:"Quel événement est le plus ancien ?",b:"la défaite de Vercingétorix à Alésia",f:["le sacre de Charlemagne","le règne de Louis XIV","la prise de la Bastille"],e:"Alésia date de −52, avant les autres."},
 {t:"temps",q:"Qu'est-ce qui marque le passage de la Préhistoire à l'Antiquité ?",b:"l'invention de l'écriture",f:["la découverte de l'Amérique","la Révolution française","l'invention de l'électricité"],e:"L'écriture apparaît vers 3300 avant J.-C."},
 {t:"temps",q:"En quel siècle se situe l'année 800 ?",b:"au VIIIe siècle",f:["au IXe siècle","au VIIe siècle","au XVIIIe siècle"],e:"De 701 à 800, c'est le VIIIe siècle."},
 {t:"celtes",q:"Comment les Romains appelaient-ils les Celtes qui vivaient en Gaule ?",b:"les Gaulois",f:["les Francs","les Vikings","les Grecs"],e:"La Gaule correspond à peu près à la France actuelle."},
 {t:"celtes",q:"Comment s'appelaient les prêtres gaulois ?",b:"les druides",f:["les moines","les pharaons","les chevaliers"],e:"Ils étaient aussi savants et juges."},
 {t:"celtes",q:"Une ville gauloise fortifiée, souvent sur une hauteur, s'appelle :",b:"un oppidum",f:["un château fort","un aqueduc","une cathédrale"],e:"Bibracte ou Gergovie étaient des oppida."},
 {t:"celtes",q:"La plupart des Gaulois étaient :",b:"des paysans et des artisans",f:["des marins vikings","des chevaliers","des moines"],e:"Ils cultivaient la terre et étaient d'habiles forgerons."},
 {t:"celtes",q:"La Gaule formait-elle un seul pays uni ?",b:"non, elle était divisée en de nombreux peuples",f:["oui, avec un roi unique","oui, avec un empereur","oui, avec un président"],e:"Chaque peuple gaulois avait ses chefs et son territoire."},
 {t:"celtes",q:"Comment connaît-on surtout les Gaulois ?",b:"par l'archéologie et les textes des Romains",f:["par leurs nombreux livres","par des films de l'époque","par des photos"],e:"Les Gaulois ont laissé très peu de textes écrits."},
 {t:"celtes",q:"Quand les Celtes s'installent-ils en Gaule ?",b:"au Ier millénaire avant J.-C.",f:["au Moyen Âge","au XVIIIe siècle","après Charlemagne"],e:"C'est bien avant la conquête romaine."},
 {t:"romains",q:"Quel général romain a conquis la Gaule ?",b:"Jules César",f:["Charlemagne","Clovis","Napoléon"],e:"La conquête a lieu de −58 à −51."},
 {t:"romains",q:"Quel chef gaulois a rassemblé plusieurs peuples contre César ?",b:"Vercingétorix",f:["Clovis","Hugues Capet","Charlemagne"],e:"Il est vaincu à Alésia en −52."},
 {t:"romains",q:"En quelle année Vercingétorix se rend-il à César, à Alésia ?",b:"−52",f:["800","1515","−800"],e:"C'est 52 ans avant le début de notre ère."},
 {t:"romains",q:"Quelle victoire Vercingétorix a-t-il remportée contre César ?",b:"Gergovie",f:["Alésia","Marignan","Waterloo"],e:"Gergovie (−52) précède la défaite d'Alésia."},
 {t:"romains",q:"Après la conquête, comment appelle-t-on les habitants de la Gaule ?",b:"les Gallo-Romains",f:["les Francs","les Capétiens","les Celtes du Nord"],e:"Ils adoptent peu à peu le mode de vie romain."},
 {t:"romains",q:"Quelle langue se répand en Gaule romaine ?",b:"le latin",f:["l'anglais","le grec","l'arabe"],e:"Le français vient en grande partie du latin."},
 {t:"romains",q:"Le pont du Gard est :",b:"un aqueduc qui transportait l'eau",f:["un château fort","une église","un port"],e:"Les Romains apportaient l'eau jusqu'aux villes, ici Nîmes."},
 {t:"romains",q:"Lutèce est l'ancien nom de quelle ville ?",b:"Paris",f:["Lyon","Marseille","Nîmes"],e:"Lutèce était la ville des Parisii."},
 {t:"francs",q:"De quel peuple Clovis était-il le roi ?",b:"les Francs",f:["les Romains","les Gaulois","les Vikings"],e:"Le mot « France » vient du nom des Francs."},
 {t:"francs",q:"Dans quelle ville Clovis a-t-il été baptisé ?",b:"Reims",f:["Rome","Paris","Lyon"],e:"Plus tard, les rois de France y seront sacrés."},
 {t:"francs",q:"Vers quand a lieu le baptême de Clovis ?",b:"à la fin du Ve siècle",f:["au Ier siècle avant J.-C.","au XIIe siècle","au XVIIIe siècle"],e:"La date traditionnelle est 496."},
 {t:"francs",q:"Quelle ville Clovis choisit-il comme capitale ?",b:"Paris",f:["Reims","Aix-la-Chapelle","Versailles"],e:"Il y est enterré en 511."},
 {t:"francs",q:"En quelle année Charlemagne est-il couronné empereur ?",b:"800",f:["496","987","1515"],e:"Il est couronné à Rome le jour de Noël 800."},
 {t:"francs",q:"Qui couronne Charlemagne empereur ?",b:"le pape",f:["le roi d'Angleterre","Clovis","les druides"],e:"La cérémonie a lieu à Rome."},
 {t:"francs",q:"Comment s'appelaient les envoyés qui contrôlaient l'empire de Charlemagne ?",b:"les missi dominici",f:["les druides","les préfets","les chevaliers"],e:"Ils allaient par deux vérifier que les ordres étaient respectés."},
 {t:"francs",q:"Où se trouvait le palais préféré de Charlemagne ?",b:"à Aix-la-Chapelle",f:["à Versailles","à Paris","à Reims"],e:"Aix-la-Chapelle est aujourd'hui en Allemagne."},
 {t:"francs",q:"Charlemagne a encouragé :",b:"les écoles et la copie des livres",f:["la construction de Versailles","l'imprimerie","la Révolution"],e:"Les moines recopiaient les livres à la main."},
 {t:"capetiens",q:"En quelle année Hugues Capet devient-il roi ?",b:"987",f:["800","1515","1789"],e:"Il est le premier roi de la dynastie des Capétiens."},
 {t:"capetiens",q:"Au Moyen Âge, que doit un vassal à son seigneur ?",b:"fidélité et aide",f:["rien","de l'argent chaque jour","son château"],e:"En échange, le seigneur le protège et lui donne un fief."},
 {t:"capetiens",q:"À quoi servait un château fort ?",b:"à protéger le seigneur et à surveiller ses terres",f:["à faire du commerce","à prier","à soigner les malades"],e:"Ses murailles, ses tours et son donjon le rendaient difficile à attaquer."},
 {t:"capetiens",q:"Que devaient les paysans au seigneur ?",b:"des taxes et des corvées",f:["rien du tout","des chevaux de course","des livres"],e:"La corvée était un travail gratuit sur les terres du seigneur."},
 {t:"capetiens",q:"Sous quel nom connaît-on aussi le roi Louis IX ?",b:"Saint Louis",f:["le Roi-Soleil","le Bon roi Henri","le Petit Caporal"],e:"Il fut déclaré saint après sa mort."},
 {t:"capetiens",q:"Selon la tradition, où Saint Louis rendait-il la justice ?",b:"sous un chêne, à Vincennes",f:["à Versailles","au Louvre","à la Bastille"],e:"Il voulait une justice proche de son peuple."},
 {t:"capetiens",q:"Quel monument Louis IX a-t-il fait construire à Paris ?",b:"la Sainte-Chapelle",f:["la tour Eiffel","le château de Versailles","l'Arc de triomphe"],e:"Elle abritait des reliques précieuses."},
 {t:"capetiens",q:"Comment meurt Louis IX en 1270 ?",b:"pendant une croisade, près de Tunis",f:["à Versailles","pendant la Révolution","à Waterloo"],e:"Il part en croisade deux fois."},
 {t:"capetiens",q:"Au Moyen Âge, la société est divisée entre :",b:"ceux qui prient, ceux qui combattent et ceux qui travaillent",f:["les riches et les pauvres seulement","les Gaulois et les Romains","les citoyens et les députés"],e:"Le clergé, les seigneurs et les paysans."},
 {t:"renaissance",q:"En quelle année François Ier remporte-t-il la bataille de Marignan ?",b:"1515",f:["1789","800","1598"],e:"C'est une victoire en Italie au début de son règne."},
 {t:"renaissance",q:"Quel célèbre artiste italien François Ier invite-t-il en France ?",b:"Léonard de Vinci",f:["Molière","Victor Hugo","Jules César"],e:"Léonard de Vinci finit sa vie près d'Amboise."},
 {t:"renaissance",q:"Quel château François Ier fait-il construire dans la vallée de la Loire ?",b:"Chambord",f:["Versailles","la Bastille","le Louvre"],e:"Chambord est un chef-d'œuvre de la Renaissance."},
 {t:"renaissance",q:"Que décide l'ordonnance de Villers-Cotterêts en 1539 ?",b:"les actes officiels doivent être écrits en français",f:["l'école est obligatoire","les privilèges sont abolis","le roi est exécuté"],e:"Avant, beaucoup d'actes officiels étaient écrits en latin."},
 {t:"renaissance",q:"Quelle invention permet de diffuser les livres plus vite à la Renaissance ?",b:"l'imprimerie",f:["la télévision","l'ordinateur","le téléphone"],e:"Gutenberg met au point l'imprimerie vers 1450."},
 {t:"renaissance",q:"Les guerres de religion opposent :",b:"les catholiques et les protestants",f:["les Gaulois et les Romains","les Français et les Anglais","les nobles et les paysans"],e:"Elles ensanglantent la France au XVIe siècle."},
 {t:"renaissance",q:"En quelle année Henri IV signe-t-il l'édit de Nantes ?",b:"1598",f:["1515","1789","1685"],e:"Cet édit met fin aux guerres de religion."},
 {t:"renaissance",q:"Que permet l'édit de Nantes ?",b:"aux protestants de pratiquer leur religion dans certains lieux",f:["d'interdire le protestantisme","de couronner un empereur","de construire Versailles"],e:"C'est un édit de tolérance religieuse."},
 {t:"louis14",q:"Quel est le surnom de Louis XIV ?",b:"le Roi-Soleil",f:["Saint Louis","le Bon roi Henri","le Petit Caporal"],e:"Il choisit le Soleil comme emblème."},
 {t:"louis14",q:"Quel château Louis XIV fait-il agrandir pour y installer sa cour ?",b:"Versailles",f:["Chambord","la Bastille","Aix-la-Chapelle"],e:"Il s'y installe en 1682."},
 {t:"louis14",q:"Dans une monarchie absolue, qui détient tous les pouvoirs ?",b:"le roi",f:["le peuple","les députés","le maire"],e:"Le roi fait les lois, rend la justice et commande l'armée."},
 {t:"louis14",q:"Combien de temps a duré le règne de Louis XIV (1643-1715) ?",b:"72 ans",f:["12 ans","40 ans","100 ans"],e:"1715 − 1643 = 72 : c'est le plus long règne de l'histoire de France."},
 {t:"louis14",q:"Quel âge avait Louis XIV quand il est devenu roi en 1643 ?",b:"4 ans",f:["20 ans","40 ans","12 ans"],e:"Sa mère gouverne pour lui jusqu'à ce qu'il grandisse."},
 {t:"louis14",q:"En 1685, Louis XIV révoque (annule) :",b:"l'édit de Nantes",f:["la Déclaration des droits de l'homme","le Code civil","l'ordonnance de Villers-Cotterêts"],e:"Les protestants n'ont plus le droit de pratiquer leur religion."},
 {t:"louis14",q:"Molière, à l'époque de Louis XIV, était :",b:"un auteur de théâtre",f:["un général","un pape","un explorateur"],e:"Ses comédies étaient jouées devant le roi."},
 {t:"louis14",q:"Pourquoi Louis XIV fait-il venir les nobles à Versailles ?",b:"pour mieux les surveiller et les contrôler",f:["pour les punir en prison","pour qu'ils deviennent paysans","pour fuir Paris en guerre"],e:"Les nobles servent le roi selon des règles précises : l'étiquette."},
 {t:"revolution",q:"Que se passe-t-il le 14 juillet 1789 ?",b:"la prise de la Bastille",f:["le sacre de Napoléon","la bataille de Marignan","le baptême de Clovis"],e:"Le peuple de Paris s'empare de cette prison, symbole du pouvoir du roi."},
 {t:"revolution",q:"Avant 1789, la société était divisée en trois ordres :",b:"le clergé, la noblesse et le tiers état",f:["les rois, les reines et les princes","les Gaulois, les Romains et les Francs","les maires, les députés et les préfets"],e:"Le tiers état réunissait l'immense majorité de la population."},
 {t:"revolution",q:"Que décident les députés pendant la nuit du 4 août 1789 ?",b:"l'abolition des privilèges",f:["la construction de Versailles","le sacre du roi","la fin de l'école"],e:"Les nobles et le clergé perdent leurs avantages."},
 {t:"revolution",q:"Quel texte de 1789 affirme que les hommes naissent libres et égaux en droits ?",b:"la Déclaration des droits de l'homme et du citoyen",f:["l'édit de Nantes","le Code civil","l'ordonnance de Villers-Cotterêts"],e:"Elle est adoptée le 26 août 1789."},
 {t:"revolution",q:"En quelle année la République est-elle proclamée pour la première fois en France ?",b:"1792",f:["1789","1804","1515"],e:"La monarchie est abolie en septembre 1792."},
 {t:"revolution",q:"En quelle année le roi Louis XVI est-il exécuté ?",b:"1793",f:["1789","1715","1804"],e:"Il est guillotiné le 21 janvier 1793."},
 {t:"revolution",q:"Quelle est la devise de la République française ?",b:"Liberté, Égalité, Fraternité",f:["Travail, Famille, Patrie","Un roi, une loi, une foi","Paix et Travail"],e:"Elle est née pendant la Révolution."},
 {t:"revolution",q:"Que réunit le roi Louis XVI en mai 1789 ?",b:"les États généraux",f:["la cour de Versailles","les druides","les missi dominici"],e:"Les députés des trois ordres viennent parler des problèmes du royaume."},
 {t:"napoleon",q:"En quelle année Napoléon Bonaparte prend-il le pouvoir ?",b:"1799",f:["1789","1815","1715"],e:"Il devient Premier consul après un coup d'État."},
 {t:"napoleon",q:"En quelle année Napoléon est-il sacré empereur ?",b:"1804",f:["1799","1815","800"],e:"Le sacre a lieu à Notre-Dame de Paris."},
 {t:"napoleon",q:"Quel recueil de lois Napoléon fait-il rédiger en 1804 ?",b:"le Code civil",f:["la Déclaration des droits de l'homme","l'édit de Nantes","la Constitution de la Ve République"],e:"Il fixe les mêmes lois pour tous les Français."},
 {t:"napoleon",q:"Quelles écoles Napoléon a-t-il créées en 1802 ?",b:"les lycées",f:["les écoles maternelles","les universités du Moyen Âge","les collèges de druides"],e:"Ils forment les futurs officiers et fonctionnaires."},
 {t:"napoleon",q:"Quelle grande victoire Napoléon remporte-t-il en 1805 ?",b:"Austerlitz",f:["Waterloo","Alésia","Marignan"],e:"C'est l'une de ses plus célèbres batailles."},
 {t:"napoleon",q:"Quelle bataille marque la défaite définitive de Napoléon en 1815 ?",b:"Waterloo",f:["Austerlitz","Gergovie","Bouvines"],e:"Waterloo se trouve aujourd'hui en Belgique."},
 {t:"napoleon",q:"Où Napoléon finit-il sa vie en exil ?",b:"sur l'île de Sainte-Hélène",f:["à Versailles","en Corse","à Paris"],e:"Il y meurt en 1821."},
 {t:"napoleon",q:"Quelle décoration Napoléon crée-t-il en 1802 ?",b:"la Légion d'honneur",f:["la médaille olympique","le prix Nobel","la croix de guerre"],e:"Elle récompense les mérites des citoyens, encore aujourd'hui."},
 {t:"habiter",q:"Qui dirige une commune ?",b:"le maire, avec le conseil municipal",f:["le président de la République seul","le directeur de l'école","le préfet seul"],e:"Les habitants élisent le conseil municipal, qui élit le maire."},
 {t:"habiter",q:"Un paysage urbain est :",b:"un paysage de ville, avec beaucoup d'immeubles et de rues",f:["un paysage de champs","un paysage de montagne sans maisons","une forêt"],e:"Urbain vient du latin urbs, qui veut dire ville."},
 {t:"habiter",q:"Un paysage rural est :",b:"un paysage de campagne, avec des champs et des villages",f:["un centre-ville","une zone industrielle","un aéroport"],e:"Rural vient du latin rus, qui veut dire campagne."},
 {t:"habiter",q:"À quoi sert la légende d'une carte ?",b:"à expliquer les couleurs et les symboles",f:["à raconter une histoire","à décorer","à donner l'heure"],e:"On la lit toujours avant d'étudier la carte."},
 {t:"habiter",q:"Sur une carte, le nord est en général :",b:"en haut",f:["en bas","à gauche","à droite"],e:"La rose des vents indique les points cardinaux."},
 {t:"habiter",q:"Combien de régions compte la France métropolitaine ?",b:"13",f:["5","22","101"],e:"Depuis 2016, la France métropolitaine compte 13 régions."},
 {t:"habiter",q:"Quelle est la capitale de la France ?",b:"Paris",f:["Lyon","Marseille","Bordeaux"],e:"Paris est la plus grande ville et le siège du gouvernement."},
 {t:"habiter",q:"Un espace périurbain se trouve :",b:"autour d'une ville, entre la ville et la campagne",f:["au centre de la ville","au milieu de la mer","en haute montagne seulement"],e:"On y trouve souvent des lotissements de maisons."},
 {t:"loger",q:"Un immeuble est :",b:"un logement collectif où vivent plusieurs familles",f:["une maison pour une seule famille","un magasin","une ferme"],e:"Les immeubles sont nombreux dans les villes."},
 {t:"loger",q:"Comment appelle-t-on une personne qui paie un loyer pour habiter un logement ?",b:"un locataire",f:["un propriétaire","un maire","un voisin"],e:"Le propriétaire possède le logement."},
 {t:"loger",q:"Un logement social (HLM) est :",b:"un logement au loyer modéré pour les familles aux revenus modestes",f:["un château","une résidence secondaire","un hôtel de luxe"],e:"HLM veut dire habitation à loyer modéré."},
 {t:"loger",q:"Pourquoi construit-on surtout des immeubles dans les grandes villes ?",b:"parce qu'il y a beaucoup d'habitants et peu de place",f:["parce qu'il fait plus chaud","parce que c'est interdit de construire des maisons","parce que les immeubles sont plus anciens"],e:"Les immeubles logent beaucoup de monde sur peu de terrain."},
 {t:"loger",q:"Un lotissement est :",b:"un ensemble de maisons construites en même temps",f:["un grand immeuble","une ferme isolée","un centre commercial"],e:"On en trouve beaucoup en périphérie des villes."},
 {t:"loger",q:"La banlieue, c'est :",b:"l'ensemble des communes urbanisées autour d'une grande ville",f:["le centre historique","la campagne lointaine","un quartier d'affaires"],e:"Elle forme avec la ville-centre une agglomération."},
 {t:"travailler",q:"Lequel de ces métiers est un métier de service ?",b:"infirmière",f:["agriculteur","ouvrier dans une usine","pêcheur"],e:"Soigner, enseigner, vendre : ce sont des services rendus aux personnes."},
 {t:"travailler",q:"Lequel de ces métiers produit de la nourriture à partir de la terre ou des animaux ?",b:"éleveur",f:["boulanger-vendeur","infirmier","chauffeur de bus"],e:"Les agriculteurs et les éleveurs travaillent dans des exploitations agricoles."},
 {t:"travailler",q:"Une zone industrielle regroupe surtout :",b:"des usines et des entrepôts",f:["des écoles","des champs","des plages"],e:"Elle est souvent près des routes et des voies ferrées."},
 {t:"travailler",q:"Beaucoup d'habitants du périurbain vont travailler en ville :",b:"en voiture, chaque jour",f:["en bateau","en avion","à cheval"],e:"Ces trajets quotidiens entre la maison et le travail créent des embouteillages."},
 {t:"travailler",q:"Que fabrique-t-on dans une usine ?",b:"des objets ou des produits en grande quantité",f:["des récoltes de blé","des soins médicaux","des cours d'école"],e:"L'industrie transforme des matières premières."},
 {t:"travailler",q:"Le télétravail, c'est :",b:"travailler depuis chez soi grâce à internet",f:["travailler à la télévision","travailler la nuit","travailler sans rien faire"],e:"Il limite les trajets entre la maison et le bureau."},
 {t:"travailler",q:"Un grand port comme Marseille ou Le Havre est un lieu de travail lié :",b:"au transport et au commerce des marchandises",f:["à l'élevage de vaches","au ski","à la culture du blé"],e:"Les navires chargent et déchargent des conteneurs."},
 {t:"cultiver",q:"À quoi sert un musée ?",b:"à conserver et à montrer des œuvres et des objets",f:["à vendre des vêtements","à soigner les malades","à réparer des voitures"],e:"On y découvre l'art, l'histoire ou les sciences."},
 {t:"cultiver",q:"Dans quelle ville se trouve le musée du Louvre ?",b:"Paris",f:["Lyon","Marseille","Lille"],e:"C'est l'un des musées les plus visités du monde."},
 {t:"cultiver",q:"Que peut-on faire dans une médiathèque ?",b:"emprunter des livres, des films et de la musique",f:["acheter des légumes","faire du ski","se faire soigner"],e:"L'inscription est souvent gratuite pour les enfants."},
 {t:"cultiver",q:"Le patrimoine, c'est :",b:"ce que l'on a hérité du passé et que l'on protège",f:["l'argent de poche","le métier des parents","la météo"],e:"Monuments, œuvres, paysages et traditions font partie du patrimoine."},
 {t:"cultiver",q:"Où trouve-t-on le plus de musées, de théâtres et de salles de concert ?",b:"dans les grandes villes",f:["dans les petits villages","en haute montagne","au milieu des champs"],e:"Les grandes villes concentrent les équipements culturels."},
 {t:"cultiver",q:"Que se passe-t-il lors des Journées européennes du patrimoine, en septembre ?",b:"de nombreux monuments ouvrent leurs portes au public",f:["les écoles ferment","les musées sont fermés","on plante des arbres"],e:"On peut visiter des lieux habituellement fermés."},
 {t:"cultiver",q:"Comment apporte-t-on les livres aux habitants de villages sans bibliothèque ?",b:"avec un bibliobus",f:["avec un avion","par bateau","par la poste uniquement"],e:"C'est une bibliothèque installée dans un véhicule."},
 {t:"loisirs",q:"Où se trouvent les stations de ski en France ?",b:"à la montagne, comme dans les Alpes ou les Pyrénées",f:["sur les plages","dans les grandes villes","en Bretagne au bord de la mer"],e:"Il faut de la neige et des pentes."},
 {t:"loisirs",q:"Quel est le plus haut sommet des Alpes et de France ?",b:"le mont Blanc",f:["le Puy de Dôme","le mont Ventoux","le pic du Midi"],e:"Il dépasse 4 800 mètres d'altitude."},
 {t:"loisirs",q:"À quelle saison les littoraux attirent-ils le plus de touristes ?",b:"en été",f:["en hiver","en automne","toute l'année de la même façon"],e:"On vient profiter de la mer et des plages."},
 {t:"loisirs",q:"À quoi sert un parc national ?",b:"à protéger la nature tout en accueillant des visiteurs",f:["à construire des usines","à chasser librement","à installer des immeubles"],e:"Les Écrins ou les Cévennes sont des parcs nationaux."},
 {t:"loisirs",q:"Le tourisme, c'est :",b:"voyager loin de chez soi pour ses loisirs",f:["aller travailler chaque jour","rester toujours chez soi","faire ses courses"],e:"La France est l'un des pays les plus visités au monde."},
 {t:"loisirs",q:"Lequel est un équipement sportif d'une commune ?",b:"la piscine",f:["la mairie","la boulangerie","la gare"],e:"Stades, gymnases et piscines permettent de faire du sport."},
 {t:"consommer",q:"Où l'eau du robinet est-elle rendue potable ?",b:"dans une usine de traitement de l'eau",f:["dans une station de ski","dans une boulangerie","dans un château fort"],e:"L'eau est prise dans les nappes ou les rivières, puis nettoyée."},
 {t:"consommer",q:"À quoi sert un château d'eau ?",b:"à stocker l'eau et à lui donner de la pression",f:["à loger un seigneur","à fabriquer de l'électricité","à produire de la glace"],e:"L'eau placée en hauteur descend avec force jusqu'aux robinets."},
 {t:"consommer",q:"Où les eaux usées sont-elles nettoyées avant de retourner dans la nature ?",b:"dans une station d'épuration",f:["dans un château d'eau","dans la mer directement","dans une centrale nucléaire"],e:"On retire les saletés avant de rejeter l'eau dans la rivière."},
 {t:"consommer",q:"En France, la plus grande partie de l'électricité est produite par :",b:"des centrales nucléaires",f:["des éoliennes seulement","des moulins à eau","des bougies"],e:"Les énergies renouvelables progressent, mais le nucléaire reste en tête."},
 {t:"consommer",q:"Acheter en circuit court, c'est :",b:"acheter directement au producteur ou avec très peu d'intermédiaires",f:["acheter très vite","acheter au bout du monde","acheter uniquement sur internet"],e:"Par exemple au marché ou à la ferme."},
 {t:"consommer",q:"Où se trouvent souvent les hypermarchés ?",b:"en périphérie des villes, dans des zones commerciales",f:["au sommet des montagnes","au centre des villages","sur les plages"],e:"Ils ont besoin de place et de grands parkings."},
 {t:"consommer",q:"Quel fruit est de saison en France en été ?",b:"l'abricot",f:["la clémentine","l'orange"],e:"Manger de saison et local limite les transports."},
 {t:"consommer",q:"Quel geste permet d'économiser l'eau ?",b:"prendre une douche plutôt qu'un bain",f:["laisser couler le robinet","laver la voiture tous les jours","remplir la baignoire deux fois"],e:"Une douche rapide utilise beaucoup moins d'eau qu'un bain."},
 {t:"emc",q:"Quelles sont les couleurs du drapeau français ?",b:"bleu, blanc, rouge",f:["vert, blanc, rouge","bleu, jaune, rouge","noir, rouge, or"],e:"C'est l'un des symboles de la République."},
 {t:"emc",q:"Quel est l'hymne national de la France ?",b:"La Marseillaise",f:["Frère Jacques","Au clair de la lune","Le Chant des partisans"],e:"Elle a été composée en 1792 par Rouget de Lisle."},
 {t:"emc",q:"Quel jour est la fête nationale française ?",b:"le 14 juillet",f:["le 1er janvier","le 25 décembre","le 11 novembre"],e:"Elle rappelle la prise de la Bastille et la fête de la Fédération."},
 {t:"emc",q:"Comment s'appelle la figure féminine qui représente la République ?",b:"Marianne",f:["Jeanne","Joséphine","Lutèce"],e:"Son buste se trouve dans les mairies."},
 {t:"emc",q:"En quelle année la Convention internationale des droits de l'enfant a-t-elle été adoptée ?",b:"1989",f:["1789","1804","2020"],e:"Elle protège le droit d'aller à l'école, d'être soigné et d'être protégé."},
 {t:"emc",q:"Que faire si un camarade est harcelé ?",b:"en parler à un adulte de confiance",f:["ne rien dire","se moquer aussi","répondre par la violence"],e:"Le numéro 3018 est gratuit pour signaler le harcèlement."},
 {t:"emc",q:"À l'école, la laïcité veut dire que :",b:"l'école publique est neutre et respecte toutes les croyances",f:["une seule religion est enseignée","on ne doit jamais parler des religions","les élèves choisissent les règles"],e:"Chacun est libre de croire ou de ne pas croire."},
 {t:"emc",q:"Les filles et les garçons ont-ils les mêmes droits ?",b:"oui, la loi les rend égaux",f:["non, les garçons en ont plus","non, les filles en ont plus","seulement à l'école"],e:"L'égalité entre les femmes et les hommes est un principe de la République."},
 {t:"emc",q:"Pourquoi y a-t-il des règles à l'école ?",b:"pour bien vivre ensemble et se sentir en sécurité",f:["pour punir les élèves","pour faire plaisir au maître","pour rien"],e:"Les règles protègent chacun et sont les mêmes pour tous."},
 {t:"emc",q:"Quel numéro appeler pour joindre les pompiers ?",b:"18",f:["15","17","3018"],e:"15 : SAMU ; 17 : police ; 18 : pompiers ; 112 : urgences en Europe."},
 {t:"emc",q:"Comment choisit-on les délégués de classe ?",b:"les élèves votent pour les élire",f:["le plus grand est choisi","le maître tire au sort","ce sont toujours les mêmes"],e:"Les délégués représentent leurs camarades."}
];

function exoMatiere(mat,sem){
  if(mat==="m")return exoMaths(sem.tm);
  if(mat==="f")return exoFrancais(sem.tf);
  if(mat==="a")return exoAnglais(sem.ta);
  if(mat==="s")return parTag(BANQUE_S,sem.ts);
  return parTag(BANQUE_H,sem.th);
}
/* Une séance : 1 question de calcul mental + 4 questions de la matière du jour, sans doublon d'énoncé */
function sansDoublon(fabrique,deja){for(let k=0;k<12;k++){const q=fabrique();if(!deja.has(q.enonce)){deja.add(q.enonce);return q;}}return fabrique();}
function seanceHorsLigne(mat,semaine){
  const sem=SEMAINES[semaine-1],deja=new Set();
  const q=[sansDoublon(()=>exoMaths("calcmental"),deja)];
  if(mat==="rev"){
    for(const m of ["m","f","m","f","a","s","h"])q.push(sansDoublon(()=>exoMatiere(m,sem),deja));
    return q;
  }
  for(let i=0;i<4;i++)q.push(sansDoublon(()=>exoMatiere(mat,sem),deja));
  return q;
}


export const programme = { code: "cm1", nom: "CM1", rituel: "On commence par une question de calcul mental.", SEMAINES, JOURS, NOM_MAT, PERIODES, matiereDuJour, seanceHorsLigne };
