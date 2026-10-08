// Programme de 5e (cycle 4), écrit le 08/10/2026 sur le modèle de 6e.js.
// C'est la seule source : on le modifie ici.

/* =========================================================
   1. LE PROGRAMME DE CINQUIÈME — 36 SEMAINES
   t = étiquettes de sélection des exercices :
       maths | français | anglais | sciences | histoire-géo
   Plusieurs étiquettes séparées par « + » : on tire au hasard parmi elles.
   ========================================================= */
const SEMAINES = [
{n:1,p:1,m:"Nombres relatifs : les repérer sur une droite graduée, les comparer",f:"Révision : les classes de mots",a:"Back to school : se présenter, le verbe to be",s:"Les états de la matière et leurs propriétés",h:"Se repérer dans le temps : le Moyen Âge et ses siècles",t:"relatifs|classes|tobe|matiere|reperes"},
{n:2,p:1,m:"Priorités opératoires et parenthèses",f:"Le présent de l'indicatif : verbes irréguliers",a:"Present simple : habitudes et routines",s:"Les changements d'état et la conservation de la masse",h:"Byzance : un empire chrétien autour de Constantinople",t:"priorites|present|presentsimple|matiere|byzance"},
{n:3,p:1,m:"Additionner des nombres relatifs",f:"Les fonctions : sujet, COD, COI, attribut du sujet",a:"Present continuous : ce qui se passe maintenant",s:"Mélanges et solutions : soluble, miscible",h:"L'Empire carolingien : Charlemagne et la chrétienté latine",t:"addrel|fonctions|continuous|melanges|byzance"},
{n:4,p:1,m:"Soustraire des nombres relatifs",f:"L'imparfait et le passé simple à toutes les personnes",a:"Les possessifs et le génitif ('s)",s:"Séparer les constituants d'un mélange",h:"La naissance de l'islam en Arabie",t:"subrel|passesimple|possessifs|melanges|islam"},
{n:5,p:1,m:"Multiples, diviseurs, critères de divisibilité, nombres premiers",f:"Les compléments circonstanciels",a:"Poser des questions : les mots en Wh-",s:"Masse et volume : introduction à la masse volumique",h:"Califats et empires : Bagdad et Cordoue",t:"divisibilite|cc|questions|massevol|islam"},
{n:6,p:1,m:"La symétrie centrale",f:"Héros et chevalerie : les romans de Chrétien de Troyes",a:"Halloween et le vocabulaire des fêtes",s:"Flotter ou couler : comparer des masses volumiques",h:"Chrétiens et musulmans : échanges et croisades",t:"symcentrale|moyenage|vocab|massevol|islam"},
{n:7,p:1,m:"Bilan : relatifs, priorités, symétrie centrale",f:"Orthographe : les homophones grammaticaux",a:"Bilan : present simple et present continuous",s:"Bilan : la matière et les mélanges",h:"EMC : l'égalité et le refus des discriminations",t:"relatifs+addrel+subrel+priorites+symcentrale|homophones|presentsimple+continuous|matiere+melanges|emc"},
{n:8,p:2,m:"Fractions égales et simplification",f:"Le passé composé et le plus-que-parfait",a:"Past simple : les verbes réguliers",s:"La respiration : les échanges de gaz",h:"L'ordre seigneurial : seigneurs et paysans",t:"fracegal|plusqueparfait|past|respiration|feodalite"},
{n:9,p:2,m:"Comparer des fractions",f:"L'accord du participe passé avec être et avoir",a:"Past simple : les verbes irréguliers",s:"L'appareil respiratoire chez l'être humain et les animaux",h:"Vassaux, fiefs et châteaux forts",t:"fraccomp|ppasse|irreg|respiration|feodalite"},
{n:10,p:2,m:"Additionner et soustraire des fractions",f:"Tristan et Iseut : l'amour courtois",a:"Past continuous : décrire une scène passée",s:"La digestion : des aliments aux nutriments",h:"L'Église au cœur de la société médiévale",t:"fracadd|moyenage|pastcont|digestion|eglise"},
{n:11,p:2,m:"Angles opposés par le sommet, alternes-internes, correspondants",f:"La phrase complexe : juxtaposition, coordination, subordination",a:"Some, any, much, many : dénombrable ou non",s:"Le tube digestif et le microbiote",h:"L'essor des villes et du commerce",t:"angles|propositions|quantif|digestion|villes"},
{n:12,p:2,m:"La somme des angles d'un triangle",f:"Le futur simple et le futur antérieur",a:"Christmas in Britain",s:"Les écosystèmes : chaînes et réseaux alimentaires",h:"Les Capétiens et l'affirmation du pouvoir royal",t:"sommeangles|futur|vocab|ecosysteme|royaute"},
{n:13,p:2,m:"Triangles : inégalité triangulaire et constructions",f:"Les fabliaux et le Roman de Renart : rire au Moyen Âge",a:"Les comparatifs",s:"La biodiversité et l'action humaine",h:"La guerre de Cent Ans et Jeanne d'Arc",t:"triangle|moyenage|comparatif|ecosysteme|royaute"},
{n:14,p:2,m:"Bilan : fractions et angles",f:"Bilan : les temps de l'indicatif",a:"Bilan : le passé et les comparatifs",s:"Bilan : respiration, digestion, écosystèmes",h:"Bilan : l'Occident féodal",t:"fracegal+fraccomp+fracadd+angles+sommeangles|conjug|past+pastcont+comparatif|respiration+digestion+ecosysteme|feodalite+eglise+villes+royaute"},
{n:15,p:3,m:"Calcul littéral : écrire et utiliser une expression",f:"Le conditionnel présent",a:"Les superlatifs",s:"Circuits électriques : série et dérivation",h:"La croissance de la population mondiale",t:"litteral|conditionnel|superlatif|electricite|demographie"},
{n:16,p:3,m:"Distributivité simple et réduction",f:"La proposition subordonnée relative",a:"Must, mustn't, have to : obligation et interdiction",s:"Conducteurs, isolants et court-circuit",h:"Répartition de la population et transition démographique",t:"distrib|subordonnees|modaux|electricite|demographie"},
{n:17,p:3,m:"Tester une égalité en remplaçant la lettre par un nombre",f:"Vocabulaire : formation des mots, sens propre et sens figuré",a:"Should, can, could : conseils et capacités",s:"Sécurité électrique et dipôles",h:"L'inégal développement dans le monde",t:"testeg|vocab|modaux|electricite|developpement"},
{n:18,p:3,m:"Proportionnalité : tableaux et quatrième proportionnelle",f:"Le subjonctif présent",a:"Le futur avec will",s:"La lumière : sources et propagation",h:"Mesurer le développement : l'IDH",t:"proportionnalite|subjonctif|futur|lumiere|developpement"},
{n:19,p:3,m:"Pourcentages : appliquer un taux, calculer un pourcentage",f:"Les subordonnées conjonctives et circonstancielles",a:"Be going to : projets et prévisions",s:"Voir un objet, ombres et éclipses",h:"EMC : la solidarité",t:"pourcentage|subordonnees|futur|lumiere|emc"},
{n:20,p:3,m:"Les ratios : partager selon un ratio",f:"Récits de voyage et d'aventure",a:"Les pays anglophones",s:"La lumière : vitesse et applications",h:"Des ressources limitées : l'énergie",t:"ratio|litt|culture|lumiere|ressources"},
{n:21,p:3,m:"Bilan : calcul littéral, proportionnalité, pourcentages",f:"Bilan : participe passé et conjugaison",a:"Bilan : modaux, futur et superlatifs",s:"Bilan : électricité et lumière",h:"Gérer l'eau, une ressource vitale",t:"litteral+distrib+testeg+proportionnalite+pourcentage+ratio|ppasse+conjug|modaux+futur+superlatif|electricite+lumiere|ressources"},
{n:22,p:4,m:"Le parallélogramme et ses propriétés",f:"Voix active et voix passive",a:"Present perfect : premiers pas",s:"Les roches et leur formation",h:"Nourrir les humains : la ressource alimentaire",t:"parallelo|voix|presperf|geologie|ressources"},
{n:23,p:4,m:"Aires : triangle et parallélogramme",f:"Molière : la comédie et ses personnages",a:"Les adverbes de fréquence",s:"Érosion, transport, dépôt : la formation des paysages",h:"Les grandes découvertes : Colomb, Vasco de Gama, Magellan",t:"aire|moliere|frequence|geologie|decouvertes"},
{n:24,p:4,m:"Le cercle : périmètre et aire du disque",f:"Le théâtre : réplique, didascalie, aparté",a:"Les prépositions de lieu et de temps",s:"Roches sédimentaires et fossiles",h:"Conquêtes, empires coloniaux et traite atlantique",t:"disque|moliere|prepositions|geologie|decouvertes"},
{n:25,p:4,m:"Volumes : prisme droit et cylindre",f:"Accords dans le groupe nominal et accord sujet-verbe",a:"Les verbes irréguliers",s:"Écosystèmes : préserver la biodiversité",h:"La Renaissance et l'humanisme",t:"volume|accords|irreg|ecosysteme|renaissance"},
{n:26,p:4,m:"Se repérer dans le plan : coordonnées relatives",f:"Les valeurs des temps dans le récit",a:"En ville : demander et indiquer son chemin",s:"Technologie : besoin, cahier des charges, prototype",h:"Les Réformes protestante et catholique",t:"repere|temps|vocab|techno|reformes"},
{n:27,p:4,m:"Algorithmique : variables, boucles, conditions",f:"Discours direct et discours indirect",a:"Food and health : les quantités",s:"Chaînes d'énergie et d'information",h:"Louis XIV et la monarchie absolue",t:"algo|discours|quantif|techno|louis14"},
{n:28,p:4,m:"Bilan : géométrie, aires et volumes",f:"Bilan : théâtre, voix passive et accords",a:"Bilan de la période 4",s:"Bilan : roches, paysages et technologie",h:"Versailles et la cour du Roi-Soleil",t:"parallelo+aire+disque+volume+repere|voix+moliere+accords|presperf+frequence+prepositions|geologie+techno|louis14"},
{n:29,p:5,m:"Statistiques : effectifs et fréquences",f:"Révision : classes de mots et fonctions",a:"Révision : le présent",s:"Matériaux et objets techniques",h:"Risques naturels : aléa, enjeux, vulnérabilité",t:"stats|classes+fonctions|presentsimple+continuous|techno|risques"},
{n:30,p:5,m:"Statistiques : calculer une moyenne",f:"Révision : tous les temps de l'indicatif",a:"Révision : raconter au passé",s:"Révision : respiration et digestion",h:"Le changement climatique et ses effets",t:"moyenne|conjug|past+pastcont+irreg|respiration+digestion|climat"},
{n:31,p:5,m:"Premières probabilités",f:"Révision : conditionnel et subjonctif",a:"Révision : comparatifs et superlatifs",s:"Révision : matière, mélanges, masse volumique",h:"Prévenir les risques et s'adapter au changement climatique",t:"proba|subjonctif+conditionnel|comparatif+superlatif|matiere+melanges+massevol|risques+climat"},
{n:32,p:5,m:"Problèmes avec les relatifs et les fractions",f:"Lecture : les héros du Moyen Âge",a:"Révision : questions et possessifs",s:"Révision : roches et écosystèmes",h:"EMC : la sécurité et les secours",t:"addrel+subrel+fracadd|moyenage|questions+possessifs|geologie+ecosysteme|emc"},
{n:33,p:5,m:"Calcul mental : les automatismes de cinquième",f:"Vocabulaire et sens des mots",a:"Révision du vocabulaire",s:"Révision : électricité et lumière",h:"Révision : chrétientés et islam",t:"calcmental|vocab|vocab|electricite+lumiere|byzance+islam"},
{n:34,p:5,m:"Bilan des nombres : relatifs, fractions, priorités",f:"Dictée bilan : homophones et participes passés",a:"Révision : modaux et futur",s:"Révision : technologie",h:"Révision : l'Europe des XVIe et XVIIe siècles",t:"relatifs+addrel+subrel+fracegal+fraccomp+fracadd+priorites|homophones+ppasse|modaux+futur|techno|decouvertes+renaissance+reformes+louis14"},
{n:35,p:5,m:"Bilan de géométrie de cinquième",f:"Bilan général de cinquième (1)",a:"Bilan général de cinquième",s:"Bilan : sciences de la vie et de la Terre",h:"Révision de géographie",t:"symcentrale+angles+sommeangles+triangle+parallelo+aire+disque+volume|conjug+ppasse+voix|presentsimple+past+comparatif+futur+modaux|respiration+digestion+ecosysteme+geologie|demographie+developpement+ressources+risques+climat"},
{n:36,p:5,m:"Bilan général et défis",f:"Bilan général de cinquième (2)",a:"Jeux et défis en anglais",s:"Défis : physique-chimie et technologie",h:"Défis histoire-géographie",t:"calcmental+litteral+proportionnalite+stats+proba+algo|litt+moliere+moyenage+subordonnees|culture+vocab|matiere+melanges+electricite+lumiere+techno|reperes+feodalite+royaute+louis14+emc"}
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
// Banque à étiquettes ; « a+b » = l'une ou l'autre étiquette.
function parTag(banque,tag){const tags=String(tag).split("+");const f=banque.filter(x=>tags.includes(x.t));const b=pioche(f.length?f:banque);return qcm(b.q,b.b,b.f,b.e);}
const ouiNon=(enonce,oui,expl)=>qcm(enonce,oui?"Oui":"Non",[oui?"Non":"Oui"],expl);

// Nombres relatifs : signe moins typographique « − ».
const arr=x=>+(+x).toFixed(4);
const rel=x=>{x=arr(x);return x<0?"−"+vg(-x):vg(x);};
const par=x=>{x=arr(x);return x<0?`(${rel(x)})`:rel(x);};
const sg=x=>{x=arr(x);return x<0?`(−${vg(-x)})`:`(+${vg(x)})`;};
function repRel(x){x=arr(x);const a=vg(Math.abs(x));return x<0?["−"+a,"-"+a,"–"+a,"(−"+a+")","(-"+a+")"]:[a,"+"+a,"(+"+a+")"];}
const pgcd=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b];}return a;};
function repFrac(n,d){
  const g=pgcd(n,d),r=[`${n}/${d}`,`${n} / ${d}`];
  if(n===0)r.push("0");
  else if(g>1){r.push(`${n/g}/${d/g}`,`${n/g} / ${d/g}`);if(d/g===1)r.push(String(n/g));}
  else if(d===1)r.push(String(n));
  return r;
}
function fracTexte(n,d){const g=pgcd(n,d);if(n===0)return "0";return g>1?`${n}/${d} = ${n/g}/${d/g}`:`${n}/${d}`;}
const PRENOMS=["Léa","Yanis","Inès","Hugo","Chloé","Malik","Jade","Noé","Sofia","Lucas","Aya","Gabriel","Emma","Rayan","Lina","Tom","Nora","Ibrahim","Zoé","Mathis"];

/* =========================================================
   3. MATHÉMATIQUES
   ========================================================= */
const GM={
  relatifs(){
    const t=alea(1,4);
    if(t===1){
      const dec=alea(0,2)===0;let a,b;
      do{a=dec?alea(-99,99)/10:alea(-20,20);b=dec?alea(-99,99)/10:alea(-20,20);if(a>0&&b>0)a=-a;}while(a===b);
      return qcm(`Quel est le plus grand nombre : ${rel(a)} ou ${rel(b)} ?`,rel(Math.max(a,b)),[rel(Math.min(a,b))],"Sur une droite graduée, le plus grand est le plus à droite. Entre deux nombres négatifs, le plus grand est le plus proche de zéro.");
    }
    if(t===2){const a=alea(1,30)*pioche([1,-1]);
      return saisie(`Quel est l'opposé de ${rel(a)} ?`,repRel(-a),`Deux nombres opposés ont la même distance à zéro mais des signes contraires : l'opposé de ${rel(a)} est ${rel(-a)}.`);}
    if(t===3){let a,b;do{a=alea(-12,12);b=alea(-12,12);}while(a===b);
      const M=Math.max(a,b),m=Math.min(a,b);
      return saisie(`Sur une droite graduée, A a pour abscisse ${rel(a)} et B a pour abscisse ${rel(b)}. Quelle est la distance AB ?`,[String(M-m)],`On compte les unités entre les deux points : AB = ${rel(M)} − ${par(m)} = ${M-m}.`);}
    const s=new Set();while(s.size<4)s.add(alea(-15,15));const l=[...s];const m=Math.min(...l);
    return qcm(`Quel est le plus petit de ces nombres : ${l.map(rel).join(" ; ")} ?`,rel(m),l.filter(x=>x!==m).map(rel),"Le plus petit est le plus à gauche sur la droite graduée : parmi les négatifs, c'est celui qui est le plus loin de zéro.");
  },
  addrel(){
    const dec=alea(0,3)===0;let a,b;
    do{a=dec?alea(-60,60)/10:alea(-15,15);b=dec?alea(-60,60)/10:alea(-15,15);}while(a===0||b===0);
    const r=arr(a+b),A=arr(Math.abs(a)),B=arr(Math.abs(b));
    let e;
    if((a>0)===(b>0))e=`Même signe : on additionne les distances à zéro (${vg(A)} + ${vg(B)} = ${vg(arr(A+B))}) et on garde le signe : ${rel(r)}.`;
    else if(A===B)e=`Deux nombres opposés ont une somme nulle : le résultat est 0.`;
    else e=`Signes contraires : on soustrait les distances à zéro (${vg(Math.max(A,B))} − ${vg(Math.min(A,B))} = ${vg(arr(Math.abs(A-B)))}) et on prend le signe du nombre le plus loin de zéro : ${rel(r)}.`;
    return saisie(`Calcule : ${sg(a)} + ${sg(b)}`,repRel(r),e);
  },
  subrel(){
    if(alea(0,2)===0){const a=alea(1,15),b=alea(a+1,a+20);
      return saisie(`Calcule : ${a} − ${b}`,repRel(a-b),`${a} − ${b} = ${a} + (−${b}). Signes contraires : ${b} − ${a} = ${b-a}, et le signe est « − » : ${rel(a-b)}.`);}
    let a,b;do{a=alea(-15,15);b=alea(-15,15);}while(a===0||b===0);
    const r=a-b;
    return saisie(`Calcule : ${sg(a)} − ${sg(b)}`,repRel(r),`Soustraire un nombre, c'est ajouter son opposé : ${sg(a)} − ${sg(b)} = ${sg(a)} + ${sg(-b)} = ${rel(r)}.`);
  },
  priorites(){
    const t=alea(1,7);
    if(t===1){const a=alea(2,20),b=alea(2,9),c=alea(2,9);return saisie(`Calcule : ${a} + ${b} × ${c}`,[String(a+b*c)],`La multiplication passe avant l'addition : ${b} × ${c} = ${b*c}, puis ${a} + ${b*c} = ${a+b*c}.`);}
    if(t===2){const a=alea(3,9),b=alea(3,9),c=alea(1,a*b-1);return saisie(`Calcule : ${a} × ${b} − ${c}`,[String(a*b-c)],`D'abord la multiplication : ${a} × ${b} = ${a*b}, puis ${a*b} − ${c} = ${a*b-c}.`);}
    if(t===3){const a=alea(2,12),b=alea(2,12),c=alea(2,9);return saisie(`Calcule : (${a} + ${b}) × ${c}`,[String((a+b)*c)],`Les parenthèses d'abord : ${a} + ${b} = ${a+b}, puis ${a+b} × ${c} = ${(a+b)*c}.`);}
    if(t===4){const b=alea(2,9),c=alea(2,9),a=b*c+alea(1,30);return saisie(`Calcule : ${a} − ${b} × ${c}`,[String(a-b*c)],`La multiplication passe avant la soustraction : ${b} × ${c} = ${b*c}, puis ${a} − ${b*c} = ${a-b*c}.`);}
    if(t===5){const a=alea(2,9),c=alea(1,10),b=c+alea(1,10);return saisie(`Calcule : ${a} × (${b} − ${c})`,[String(a*(b-c))],`Les parenthèses d'abord : ${b} − ${c} = ${b-c}, puis ${a} × ${b-c} = ${a*(b-c)}.`);}
    if(t===6){const c=alea(2,9),k=alea(2,12),a=alea(1,30);return saisie(`Calcule : ${a} + ${c*k} ÷ ${c}`,[String(a+k)],`La division passe avant l'addition : ${c*k} ÷ ${c} = ${k}, puis ${a} + ${k} = ${a+k}.`);}
    const a=alea(2,9),b=alea(2,9),c=alea(2,9),d=alea(2,9);
    return saisie(`Calcule : ${a} × ${b} + ${c} × ${d}`,[String(a*b+c*d)],`On fait les deux multiplications : ${a*b} et ${c*d}, puis on additionne : ${a*b+c*d}.`);
  },
  divisibilite(){
    const t=alea(1,4);
    if(t===1){const d=pioche([2,3,5,9,10]),oui=alea(0,1)===1;let n;
      do{n=oui?d*alea(12,1100):alea(100,9999);}while(!oui&&n%d===0);
      const sc=String(n).split("").reduce((s,c)=>s+Number(c),0);
      const regle={2:`Un nombre est divisible par 2 s'il se termine par 0, 2, 4, 6 ou 8.`,5:`Un nombre est divisible par 5 s'il se termine par 0 ou 5.`,10:`Un nombre est divisible par 10 s'il se termine par 0.`,
        3:`Un nombre est divisible par 3 si la somme de ses chiffres l'est : ici ${sc}.`,9:`Un nombre est divisible par 9 si la somme de ses chiffres l'est : ici ${sc}.`}[d];
      return ouiNon(`Le nombre ${n} est-il divisible par ${d} ?`,n%d===0,regle);}
    if(t===2){const P=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
      const C=[[9,"3 × 3"],[15,"3 × 5"],[21,"3 × 7"],[27,"3 × 9"],[33,"3 × 11"],[39,"3 × 13"],[49,"7 × 7"],[51,"3 × 17"],[57,"3 × 19"],[63,"7 × 9"],[69,"3 × 23"],[77,"7 × 11"],[87,"3 × 29"],[91,"7 × 13"],[93,"3 × 31"]];
      const p=pioche(P),c=melange(C).slice(0,3);
      return qcm("Lequel de ces nombres est premier ?",String(p),c.map(x=>String(x[0])),`Un nombre premier a exactement deux diviseurs : 1 et lui-même. Les autres se décomposent : ${c.map(x=>x[0]+" = "+x[1]).join(" ; ")}.`);}
    if(t===3){const n=pioche([12,15,16,18,20,21,24,28,30,36,40,45]);const dv=[];for(let k=1;k<=n;k++)if(n%k===0)dv.push(k);
      return saisie(`Combien le nombre ${n} a-t-il de diviseurs ?`,[String(dv.length)],`On les cherche par paires : ${dv.join(", ")}. Il y en a ${dv.length}.`);}
    const d=pioche([6,7,8,9,11,12]),m=d*alea(4,15);const f=[];while(f.length<3){const x=m+alea(-d+1,d-1);if(x%d!==0&&!f.includes(x))f.push(x);}
    return qcm(`Lequel de ces nombres est un multiple de ${d} ?`,String(m),f.map(String),`${m} = ${d} × ${m/d} : c'est un multiple de ${d}. Les autres ne sont pas dans la table de ${d}.`);
  },
  symcentrale(){
    if(alea(0,2)===0){const d=alea(2,15);
      return saisie(`A' est le symétrique de A par rapport au point O, et AA' = ${2*d} cm. Combien mesure OA, en cm ?`,[String(d)],`O est le milieu de [AA'] : OA = ${2*d} ÷ 2 = ${d} cm.`);}
    const b=[
      {q:"Si A' est le symétrique de A par rapport au point O, alors :",b:"O est le milieu de [AA']",f:["A est le milieu de [OA']","(AA') est perpendiculaire à (OA)","OA' = 2 × OA"],e:"Dans une symétrie centrale, le centre est le milieu du segment qui relie un point et son image."},
      {q:"La symétrie centrale conserve :",b:"les longueurs, les angles et les aires",f:["seulement les longueurs","seulement les aires","aucune mesure"],e:"La figure symétrique est superposable à la figure de départ."},
      {q:"Le symétrique d'une droite par une symétrie centrale est :",b:"une droite parallèle à la première",f:["une droite perpendiculaire à la première","un cercle","un segment plus court"],e:"L'image d'une droite est une droite parallèle (ou la même droite si elle passe par le centre)."},
      {q:"Le symétrique d'un cercle de rayon 3 cm par une symétrie centrale est :",b:"un cercle de rayon 3 cm",f:["un cercle de rayon 6 cm","un cercle de rayon 1,5 cm","un carré"],e:"Les longueurs sont conservées : même rayon, et le centre a pour image le symétrique du centre."},
      {q:"Quelle figure possède un centre de symétrie ?",b:"le parallélogramme",f:["le triangle équilatéral","le trapèze quelconque","le triangle rectangle"],e:"Le centre de symétrie d'un parallélogramme est le point d'intersection de ses diagonales."},
      {q:"Quelle lettre majuscule possède un centre de symétrie ?",b:"N",f:["A","E","V"],e:"Si on fait tourner N d'un demi-tour, on retrouve N."},
      {q:"Une symétrie centrale revient à faire tourner la figure, autour du centre, de :",b:"180°",f:["90°","360°","45°"],e:"C'est un demi-tour autour du centre."},
      {q:"Quelle est la différence entre symétrie axiale et symétrie centrale ?",b:"l'une utilise une droite (un axe), l'autre un point (un centre)",f:["il n'y en a aucune","l'une agrandit la figure","l'une ne conserve pas les longueurs"],e:"Symétrie axiale : pliage le long d'un axe. Symétrie centrale : demi-tour autour d'un point."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);
  },
  fracegal(){
    const t=alea(1,4);
    let p,q;do{q=alea(2,9);p=alea(1,q-1);}while(pgcd(p,q)!==1);
    const k=alea(2,9);
    if(t===1)return saisie(`Complète l'égalité : ${p}/${q} = ?/${q*k}`,[String(p*k)],`On a multiplié le dénominateur par ${k} (${q} × ${k} = ${q*k}), on multiplie donc le numérateur par ${k} : ${p} × ${k} = ${p*k}.`);
    if(t===2)return saisie(`Simplifie au maximum la fraction ${p*k}/${q*k}`,[`${p}/${q}`,`${p} / ${q}`],`On divise le numérateur et le dénominateur par ${k} : ${p*k} ÷ ${k} = ${p} et ${q*k} ÷ ${k} = ${q}. Résultat : ${p}/${q}.`);
    if(t===3)return qcm(`Quelle fraction est égale à ${p}/${q} ?`,`${p*k}/${q*k}`,[`${p+k}/${q+k}`,`${p*k}/${q}`,`${p}/${q*k}`],`On multiplie le numérateur et le dénominateur par le même nombre, ${k} : ${p}/${q} = ${p*k}/${q*k}. Ajouter le même nombre en haut et en bas ne donne pas une fraction égale.`);
    const d=pioche([2,4,5,10,20,25]);let n;do{n=alea(1,3*d);}while(n%d===0);
    const r=arr(n/d);
    return saisie(`Écris la fraction ${n}/${d} sous forme décimale`,[vg(r),String(r)],`Une fraction est un quotient : ${n} ÷ ${d} = ${vg(r)}.`);
  },
  fraccomp(){
    const t=alea(1,4);
    if(t===1){const d=alea(3,12);let a,b;do{a=alea(1,2*d);b=alea(1,2*d);}while(a===b);
      return qcm(`Quelle est la plus grande fraction : ${a}/${d} ou ${b}/${d} ?`,`${Math.max(a,b)}/${d}`,[`${Math.min(a,b)}/${d}`],"Même dénominateur : la plus grande est celle qui a le plus grand numérateur.");}
    if(t===2){const n=alea(1,9);let a,b;do{a=alea(2,12);b=alea(2,12);}while(a===b);
      return qcm(`Quelle est la plus grande fraction : ${n}/${a} ou ${n}/${b} ?`,`${n}/${Math.min(a,b)}`,[`${n}/${Math.max(a,b)}`],"Même numérateur : la plus grande est celle qui a le plus petit dénominateur, car on partage en moins de parts, donc des parts plus grosses.");}
    if(t===3){const b=alea(2,6),k=alea(2,4),a=alea(1,2*b);let c;do{c=alea(1,2*b*k);}while(c===a*k);
      const big=a*k>c;
      return qcm(`Quelle est la plus grande fraction : ${a}/${b} ou ${c}/${b*k} ?`,big?`${a}/${b}`:`${c}/${b*k}`,[big?`${c}/${b*k}`:`${a}/${b}`],`On met au même dénominateur : ${a}/${b} = ${a*k}/${b*k}. On compare ensuite ${a*k} et ${c}.`);}
    const d=alea(2,12);let n;do{n=alea(1,2*d);}while(n===d);
    return ouiNon(`La fraction ${n}/${d} est-elle plus grande que 1 ?`,n>d,`Une fraction est plus grande que 1 quand son numérateur est plus grand que son dénominateur : ici ${n} ${n>d?">":"<"} ${d}.`);
  },
  fracadd(){
    const t=alea(1,4);
    if(t===1){const d=alea(3,12),a=alea(1,d),b=alea(1,d);
      return saisie(`Calcule : ${a}/${d} + ${b}/${d}`,repFrac(a+b,d),`Même dénominateur : on additionne les numérateurs et on garde le dénominateur. ${a} + ${b} = ${a+b}, donc ${fracTexte(a+b,d)}.`);}
    if(t===2){const d=alea(3,12),a=alea(2,2*d),b=alea(1,a-1);
      return saisie(`Calcule : ${a}/${d} − ${b}/${d}`,repFrac(a-b,d),`Même dénominateur : on soustrait les numérateurs. ${a} − ${b} = ${a-b}, donc ${fracTexte(a-b,d)}.`);}
    const b=alea(2,6),k=alea(2,4),a=alea(1,b),c=alea(1,b*k),D=b*k;
    if(t===3)return saisie(`Calcule : ${a}/${b} + ${c}/${D}`,repFrac(a*k+c,D),`On met au même dénominateur : ${a}/${b} = ${a*k}/${D}. Puis ${a*k}/${D} + ${c}/${D} = ${fracTexte(a*k+c,D)}.`);
    const c2=alea(1,a*k-1>0?a*k-1:1);
    if(a*k-c2<=0)return GM.fracadd();
    return saisie(`Calcule : ${a}/${b} − ${c2}/${D}`,repFrac(a*k-c2,D),`On met au même dénominateur : ${a}/${b} = ${a*k}/${D}. Puis ${a*k}/${D} − ${c2}/${D} = ${fracTexte(a*k-c2,D)}.`);
  },
  angles(){
    const t=alea(1,4),x=alea(25,155);
    if(t===1)return saisie(`Deux angles sont opposés par le sommet. L'un mesure ${x}°. Combien mesure l'autre, en degrés ?`,[String(x)],"Deux angles opposés par le sommet ont toujours la même mesure.");
    if(t===2){const nom=pioche(["alternes-internes","correspondants"]);
      return saisie(`Deux droites parallèles sont coupées par une sécante. Deux angles ${nom} sont formés ; l'un mesure ${x}°. Combien mesure l'autre, en degrés ?`,[String(x)],`Si les droites sont parallèles, les angles ${nom} ont la même mesure : ${x}°.`);}
    if(t===3)return saisie(`Deux angles adjacents forment ensemble un angle plat. L'un mesure ${x}°. Combien mesure l'autre, en degrés ?`,[String(180-x)],`Un angle plat mesure 180° : 180 − ${x} = ${180-x}°. Ces angles sont supplémentaires.`);
    const b=[
      {q:"Deux droites coupées par une sécante forment deux angles alternes-internes de même mesure. Que peut-on en conclure ?",b:"les deux droites sont parallèles",f:["les deux droites sont perpendiculaires","les deux droites sont sécantes","on ne peut rien conclure"],e:"C'est la propriété réciproque : angles alternes-internes égaux, donc droites parallèles."},
      {q:"Deux angles alternes-internes sont situés :",b:"de part et d'autre de la sécante et entre les deux droites",f:["du même côté de la sécante","à l'extérieur des deux droites","sur la même droite"],e:"« Alternes » : de chaque côté de la sécante ; « internes » : entre les deux droites."},
      {q:"Deux angles complémentaires ont une somme de :",b:"90°",f:["180°","360°","60°"],e:"Complémentaires : 90°. Supplémentaires : 180°."},
      {q:"Deux angles supplémentaires ont une somme de :",b:"180°",f:["90°","360°","100°"],e:"Ensemble, ils forment un angle plat."},
      {q:"Deux angles correspondants sont situés :",b:"du même côté de la sécante, dans la même position par rapport à chaque droite",f:["de part et d'autre de la sécante, entre les droites","au même sommet","l'un dans l'autre"],e:"Ils se « correspondent » : on passe de l'un à l'autre en glissant le long de la sécante."},
      {q:"Deux angles opposés par le sommet :",b:"ont le même sommet et sont de même mesure",f:["ont une somme de 180°","sont toujours droits","n'ont pas de sommet commun"],e:"Ils sont formés par deux droites sécantes, face à face."}];
    const y=pioche(b);return qcm(y.q,y.b,y.f,y.e);
  },
  sommeangles(){
    const t=alea(1,5);
    if(t===1){const a=alea(20,100),b=alea(20,150-a);return saisie(`Dans un triangle, deux angles mesurent ${a}° et ${b}°. Combien mesure le troisième, en degrés ?`,[String(180-a-b)],`La somme des angles d'un triangle vaut 180° : 180 − ${a} − ${b} = ${180-a-b}°.`);}
    if(t===2){const x=2*alea(10,70);return saisie(`Un triangle est isocèle ; l'angle au sommet principal mesure ${x}°. Combien mesure chacun des deux angles à la base, en degrés ?`,[String((180-x)/2)],`Les deux angles à la base sont égaux : (180 − ${x}) ÷ 2 = ${(180-x)/2}°.`);}
    if(t===3){const y=alea(20,80);return saisie(`Un triangle est isocèle ; chaque angle à la base mesure ${y}°. Combien mesure l'angle au sommet principal, en degrés ?`,[String(180-2*y)],`180 − 2 × ${y} = ${180-2*y}°.`);}
    if(t===4){const x=alea(15,75);return saisie(`Un triangle est rectangle ; un de ses angles aigus mesure ${x}°. Combien mesure l'autre angle aigu, en degrés ?`,[String(90-x)],`L'angle droit fait 90°, il reste 90° pour les deux autres : 90 − ${x} = ${90-x}°.`);}
    const a=alea(30,90),b=alea(20,80),ok=alea(0,1)===1,c=ok?180-a-b:180-a-b+pioche([-20,-10,10,20]);
    if(c<=0)return GM.sommeangles();
    return ouiNon(`Un triangle peut-il avoir des angles de ${a}°, ${b}° et ${c}° ?`,a+b+c===180,`${a} + ${b} + ${c} = ${a+b+c}°. Il faut exactement 180° pour un triangle.`);
  },
  triangle(){
    if(alea(0,1)){const a=alea(2,12),b=alea(2,12),oui=alea(0,1)===1;
      const c=oui?alea(Math.abs(a-b)+1,a+b-1):a+b+alea(1,5);
      const l=melange([a,b,c]),L=Math.max(a,b,c),s=a+b+c-L;
      return ouiNon(`Peut-on construire un triangle dont les côtés mesurent ${l[0]} cm, ${l[1]} cm et ${l[2]} cm ?`,L<s,`Le plus grand côté (${L} cm) doit être plus petit que la somme des deux autres (${s} cm) : ${L} ${L<s?"<":">"} ${s}.`);}
    const b=[
      {q:"Pour construire un triangle dont on connaît les trois longueurs, on utilise :",b:"la règle graduée et le compas",f:["le rapporteur seul","l'équerre seule","le rapporteur et l'équerre"],e:"On trace un côté, puis on reporte les deux autres longueurs avec le compas."},
      {q:"Pour construire un triangle dont on connaît deux côtés et l'angle compris entre eux, on utilise :",b:"la règle graduée et le rapporteur",f:["le compas seul","l'équerre seule","rien, c'est impossible"],e:"On trace un côté, on mesure l'angle au rapporteur, puis on reporte le second côté."},
      {q:"La médiatrice d'un segment est :",b:"la droite perpendiculaire au segment en son milieu",f:["la droite qui passe par une extrémité","un segment deux fois plus long","la droite parallèle au segment"],e:"Tout point de la médiatrice est à égale distance des deux extrémités."},
      {q:"Un point M est sur la médiatrice de [AB]. Alors :",b:"MA = MB",f:["MA = 2 × MB","M est le milieu de [AB]","M est sur [AB]"],e:"La médiatrice est l'ensemble des points à égale distance de A et de B."},
      {q:"Dans le triangle ABC, la hauteur issue de A est :",b:"la droite qui passe par A et qui est perpendiculaire à (BC)",f:["la droite qui passe par A et par le milieu de [BC]","la médiatrice de [BC]","le côté [AB]"],e:"Une hauteur part d'un sommet et coupe le côté opposé à angle droit."},
      {q:"Un triangle qui a deux côtés de même longueur est :",b:"isocèle",f:["équilatéral","rectangle","quelconque"],e:"Isocèle : deux côtés égaux. Équilatéral : trois côtés égaux."},
      {q:"Les trois médiatrices d'un triangle se coupent en un point qui est :",b:"le centre du cercle qui passe par les trois sommets",f:["le milieu d'un côté","toujours un sommet","le centre de gravité"],e:"Ce point est à égale distance des trois sommets : c'est le centre du cercle circonscrit."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);
  },
  parallelo(){
    const t=alea(1,4);
    if(t===1){const x=alea(3,15),y=alea(3,15);return saisie(`ABCD est un parallélogramme avec AB = ${x} cm et BC = ${y} cm. Combien mesure CD, en cm ?`,[String(x)],`Dans un parallélogramme, les côtés opposés ont la même longueur : CD = AB = ${x} cm.`);}
    if(t===2){const x=alea(40,140);if(x===90)return GM.parallelo();
      return alea(0,1)?saisie(`ABCD est un parallélogramme et l'angle en A mesure ${x}°. Combien mesure l'angle en C, en degrés ?`,[String(x)],"Dans un parallélogramme, les angles opposés ont la même mesure.")
                      :saisie(`ABCD est un parallélogramme et l'angle en A mesure ${x}°. Combien mesure l'angle en B, en degrés ?`,[String(180-x)],`Deux angles consécutifs d'un parallélogramme sont supplémentaires : 180 − ${x} = ${180-x}°.`);}
    if(t===3){const d=alea(3,12);return saisie(`Les diagonales du parallélogramme ABCD se coupent en O, et AC = ${2*d} cm. Combien mesure AO, en cm ?`,[String(d)],`Les diagonales d'un parallélogramme se coupent en leur milieu : AO = ${2*d} ÷ 2 = ${d} cm.`);}
    const b=[
      {q:"Un parallélogramme est un quadrilatère dont :",b:"les côtés opposés sont parallèles deux à deux",f:["tous les côtés sont égaux","tous les angles sont droits","les diagonales sont perpendiculaires"],e:"C'est la définition ; ses côtés opposés ont aussi la même longueur."},
      {q:"Un parallélogramme qui a un angle droit est :",b:"un rectangle",f:["un losange","un trapèze","un triangle"],e:"S'il a un angle droit, il les a tous : c'est un rectangle."},
      {q:"Un parallélogramme dont les diagonales sont perpendiculaires est :",b:"un losange",f:["un rectangle","un trapèze","un cerf-volant quelconque"],e:"Le losange a ses diagonales perpendiculaires et ses quatre côtés égaux."},
      {q:"Un parallélogramme qui est à la fois un rectangle et un losange est :",b:"un carré",f:["un trapèze","un triangle","un pentagone"],e:"Le carré a quatre angles droits et quatre côtés égaux."},
      {q:"Les diagonales d'un rectangle :",b:"se coupent en leur milieu et ont la même longueur",f:["sont toujours perpendiculaires","ne se coupent pas","sont parallèles"],e:"Comme tout parallélogramme, elles se coupent en leur milieu ; dans un rectangle, elles sont en plus de même longueur."},
      {q:"Un quadrilatère dont les diagonales se coupent en leur milieu est :",b:"un parallélogramme",f:["toujours un carré","un trapèze","un triangle"],e:"C'est une propriété caractéristique du parallélogramme."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);
  },
  aire(){
    const t=alea(1,4);
    if(t===1){const b=alea(3,20),h=alea(2,15),A=arr(b*h/2);return saisie(`Un triangle a une base de ${b} cm et une hauteur associée de ${h} cm. Quelle est son aire, en cm² ?`,[vg(A),String(A)],`Aire du triangle = base × hauteur ÷ 2 = ${b} × ${h} ÷ 2 = ${vg(A)} cm².`);}
    if(t===2){const b=alea(3,20),h=alea(2,15);return saisie(`Un parallélogramme a un côté de ${b} cm et une hauteur associée de ${h} cm. Quelle est son aire, en cm² ?`,[String(b*h)],`Aire du parallélogramme = base × hauteur = ${b} × ${h} = ${b*h} cm².`);}
    if(t===3){const a=alea(3,15),c=alea(3,15),A=arr(a*c/2);return saisie(`Un triangle rectangle a deux côtés de l'angle droit de ${a} cm et ${c} cm. Quelle est son aire, en cm² ?`,[vg(A),String(A)],`C'est la moitié d'un rectangle : ${a} × ${c} ÷ 2 = ${vg(A)} cm².`);}
    const b=[
      {q:"Quelle est la formule de l'aire d'un triangle ?",b:"base × hauteur ÷ 2",f:["base × hauteur","côté × côté × côté","(base + hauteur) × 2"],e:"Un triangle est la moitié d'un parallélogramme de même base et même hauteur."},
      {q:"Pour calculer l'aire d'un parallélogramme, la hauteur doit être :",b:"perpendiculaire à la base choisie",f:["parallèle à la base","égale à un côté oblique","toujours de 1 cm"],e:"On n'utilise pas la longueur du côté oblique, mais la hauteur."},
      {q:"Combien de cm² y a-t-il dans 1 m² ?",b:"10 000",f:["100","1 000","1 000 000"],e:"1 m² = 100 cm × 100 cm = 10 000 cm²."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);
  },
  disque(){
    const t=alea(1,4),r=alea(1,10);
    if(t===1){const A=arr(3.14*r*r);return saisie(`Quelle est l'aire d'un disque de rayon ${r} cm, en cm² ? (prends π ≈ 3,14)`,[vg(A),String(A)],`Aire = π × r × r ≈ 3,14 × ${r} × ${r} = ${vg(A)} cm².`);}
    if(t===2){const P=arr(6.28*r);return saisie(`Quel est le périmètre d'un cercle de rayon ${r} cm, en cm ? (prends π ≈ 3,14)`,[vg(P),String(P)],`Périmètre = 2 × π × r ≈ 2 × 3,14 × ${r} = ${vg(P)} cm.`);}
    if(t===3){const d=alea(2,20),P=arr(3.14*d);return saisie(`Quel est le périmètre d'un cercle de diamètre ${d} cm, en cm ? (prends π ≈ 3,14)`,[vg(P),String(P)],`Périmètre = π × diamètre ≈ 3,14 × ${d} = ${vg(P)} cm.`);}
    const b=[
      {q:"Quelle est la formule de l'aire d'un disque de rayon r ?",b:"π × r × r",f:["2 × π × r","π × d","r × r"],e:"L'aire utilise le rayon au carré ; 2 × π × r donne le périmètre."},
      {q:"Quelle est la formule du périmètre d'un cercle de rayon r ?",b:"2 × π × r",f:["π × r × r","r × r","4 × r"],e:"On peut aussi écrire π × diamètre."},
      {q:"Une valeur approchée de π est :",b:"3,14",f:["3,41","2,14","31,4"],e:"π vaut environ 3,14159…"}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);
  },
  volume(){
    const t=alea(1,5);
    if(t===1){const a=alea(2,10),c=alea(2,10),h=alea(2,12),B=arr(a*c/2),V=arr(B*h);
      return saisie(`Un prisme droit a pour base un triangle rectangle dont les côtés de l'angle droit mesurent ${a} cm et ${c} cm. Sa hauteur est ${h} cm. Quel est son volume, en cm³ ?`,[vg(V),String(V)],`Volume = aire de la base × hauteur. Base : ${a} × ${c} ÷ 2 = ${vg(B)} cm² ; volume : ${vg(B)} × ${h} = ${vg(V)} cm³.`);}
    if(t===2){const r=alea(1,6),h=alea(2,10),V=arr(3.14*r*r*h);
      return saisie(`Quel est le volume d'un cylindre de rayon ${r} cm et de hauteur ${h} cm, en cm³ ? (prends π ≈ 3,14)`,[vg(V),String(V)],`Volume = aire du disque de base × hauteur ≈ 3,14 × ${r} × ${r} × ${h} = ${vg(V)} cm³.`);}
    if(t===3){const B=alea(5,40),h=alea(2,15);return saisie(`Un prisme droit a une base d'aire ${B} cm² et une hauteur de ${h} cm. Quel est son volume, en cm³ ?`,[String(B*h)],`Volume d'un prisme = aire de la base × hauteur = ${B} × ${h} = ${B*h} cm³.`);}
    if(t===4){const n=alea(2,30);return alea(0,1)?saisie(`Combien de litres contient un récipient de ${n} dm³ ?`,[String(n)],"1 dm³ = 1 L.")
                                           :saisie(`Combien de cm³ y a-t-il dans ${n} L ?`,[String(n*1000)],`1 L = 1 dm³ = 1 000 cm³, donc ${n} L = ${n*1000} cm³.`);}
    const b=[
      {q:"Le volume d'un prisme droit se calcule avec :",b:"aire de la base × hauteur",f:["périmètre de la base × hauteur","base × hauteur ÷ 2","longueur + largeur + hauteur"],e:"C'est la même formule pour le cylindre, dont la base est un disque."},
      {q:"Combien de faces a un prisme droit à base triangulaire ?",b:"5",f:["6","4","3"],e:"Deux bases triangulaires et trois faces latérales rectangulaires."},
      {q:"Les faces latérales d'un prisme droit sont des :",b:"rectangles",f:["triangles","disques","trapèzes"],e:"Les deux bases sont des polygones identiques et parallèles."},
      {q:"La base d'un cylindre est :",b:"un disque",f:["un carré","un triangle","un rectangle"],e:"Un cylindre a deux bases : deux disques identiques et parallèles."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);
  },
  repere(){
    const t=alea(1,4);let x,y;do{x=alea(-9,9);y=alea(-9,9);}while(x===0||y===0||x===y);
    const pt=(a,b)=>`(${rel(a)} ; ${rel(b)})`;
    if(t===1)return alea(0,1)?saisie(`Le point A a pour coordonnées ${pt(x,y)}. Quelle est son abscisse ?`,repRel(x),"L'abscisse est le premier nombre : on la lit sur l'axe horizontal.")
                              :saisie(`Le point A a pour coordonnées ${pt(x,y)}. Quelle est son ordonnée ?`,repRel(y),"L'ordonnée est le deuxième nombre : on la lit sur l'axe vertical.");
    if(t===2)return qcm(`Quelles sont les coordonnées du symétrique de A${pt(x,y)} par rapport à l'origine O ?`,pt(-x,-y),[pt(x,-y),pt(-x,y),pt(y,x)],"Dans la symétrie de centre O, on prend l'opposé des deux coordonnées.");
    if(t===3){const dx=alea(1,8),dy=alea(1,8),gx=alea(0,1)?1:-1,gy=alea(0,1)?1:-1;
      return qcm(`On part du point ${pt(x,y)}, on se déplace de ${dx} vers la ${gx>0?"droite":"gauche"} puis de ${dy} vers le ${gy>0?"haut":"bas"}. Quelles sont les coordonnées du point d'arrivée ?`,pt(x+gx*dx,y+gy*dy),[pt(x-gx*dx,y+gy*dy),pt(x+gx*dx,y-gy*dy),pt(y+gy*dy,x+gx*dx)],`Abscisse : ${rel(x)} ${gx>0?"+":"−"} ${dx} = ${rel(x+gx*dx)} ; ordonnée : ${rel(y)} ${gy>0?"+":"−"} ${dy} = ${rel(y+gy*dy)}.`);}
    return qcm(`Le point B a pour coordonnées (${rel(x)} ; 0). Où est-il situé ?`,"sur l'axe des abscisses",["sur l'axe des ordonnées","à l'origine du repère","il n'existe pas"],"Son ordonnée est nulle : il est sur l'axe horizontal.");
  },
  litteral(){
    const t=alea(1,4);
    if(t===1){const a=alea(2,9),b=alea(1,15),x=alea(2,10),f=alea(1,4);
      if(f===1)return saisie(`Calcule ${a}x + ${b} pour x = ${x}`,[String(a*x+b)],`${a}x signifie ${a} × x. On remplace x par ${x} : ${a} × ${x} + ${b} = ${a*x+b}.`);
      if(f===2&&a*x>b)return saisie(`Calcule ${a}x − ${b} pour x = ${x}`,[String(a*x-b)],`On remplace x par ${x} : ${a} × ${x} − ${b} = ${a*x} − ${b} = ${a*x-b}.`);
      if(f===3)return saisie(`Calcule ${a}(x + ${b}) pour x = ${x}`,[String(a*(x+b))],`On remplace x par ${x} : ${a} × (${x} + ${b}) = ${a} × ${x+b} = ${a*(x+b)}.`);
      return saisie(`Calcule x² + ${b} pour x = ${x}`,[String(x*x+b)],`x² = x × x. On remplace : ${x} × ${x} + ${b} = ${x*x} + ${b} = ${x*x+b}.`);}
    if(t===2){const b=[
      {q:"Comment écrit-on plus simplement 4 × a + 2 ?",b:"4a + 2",f:["42a","6a","4 + a + 2"],e:"On peut supprimer le signe × devant une lettre : 4 × a = 4a."},
      {q:"Comment écrit-on plus simplement a × a ?",b:"a²",f:["2a","a + a","aa2"],e:"a × a se lit « a au carré ». Attention : a + a = 2a."},
      {q:"Comment écrit-on plus simplement 3 × (x + 1) ?",b:"3(x + 1)",f:["3x + 1","x + 4","3 + x + 1"],e:"On peut supprimer le × devant une parenthèse."},
      {q:"Que signifie l'expression 5x ?",b:"5 × x",f:["5 + x","5 suivi du chiffre x","x ÷ 5"],e:"Entre un nombre et une lettre, le signe × est sous-entendu."},
      {q:"Comment écrit-on plus simplement x × 7 ?",b:"7x",f:["x7","x + 7","77"],e:"On écrit le nombre devant la lettre : 7x."}];
      const z=pioche(b);return qcm(z.q,z.b,z.f,z.e);}
    if(t===3){const a=alea(2,9),b=alea(1,12);
      return qcm(`Programme : « Choisis un nombre x, multiplie-le par ${a}, puis ajoute ${b}. » Quelle expression donne le résultat ?`,`${a}x + ${b}`,[`${a}(x + ${b})`,`${b}x + ${a}`,`x + ${a+b}`],`On multiplie d'abord x par ${a} (${a}x), puis on ajoute ${b} : ${a}x + ${b}.`);}
    const l=alea(2,9);
    return qcm(`Un rectangle a pour longueur x cm et pour largeur ${l} cm. Quelle expression donne son périmètre ?`,`2x + ${2*l}`,[`x + ${l}`,`${l}x`,`2x + ${l}`],`Périmètre = 2 × (x + ${l}) = 2x + ${2*l}.`);
  },
  distrib(){
    const t=alea(1,4);
    if(t===1){const k=alea(2,9),a=alea(1,9);
      return qcm(`Développe : ${k}(x + ${a})`,`${k}x + ${k*a}`,[`${k}x + ${a}`,`${k+a}x`,`x + ${k*a}`],`On distribue ${k} à chaque terme : ${k} × x + ${k} × ${a} = ${k}x + ${k*a}.`);}
    if(t===2){const a=alea(2,9),b=alea(2,9),op=alea(0,1);
      if(op||a<=b)return saisie(`Réduis : ${a}x + ${b}x`,[`${a+b}x`,`${a+b} x`],`On additionne les nombres de x : ${a} + ${b} = ${a+b}, donc ${a+b}x. C'est la distributivité : ${a}x + ${b}x = (${a} + ${b})x.`);
      return saisie(`Réduis : ${a}x − ${b}x`,[`${a-b}x`,`${a-b} x`].concat(a-b===1?["x"]:[]),`${a}x − ${b}x = (${a} − ${b})x = ${a-b===1?"x":(a-b)+"x"}.`);}
    if(t===3){const a=alea(3,19),f=pioche([[101,100,1],[102,100,2],[99,100,-1],[98,100,-2],[11,10,1],[21,20,1],[19,20,-1]]);
      const r=a*f[0],s=f[2]>0?"+":"−",m=Math.abs(f[2]);
      return saisie(`Calcule astucieusement : ${a} × ${f[0]}`,[String(r)],`${a} × ${f[0]} = ${a} × (${f[1]} ${s} ${m}) = ${a*f[1]} ${s} ${a*m} = ${r}.`);}
    const k=alea(2,9),a=alea(2,9),b=10-a;
    return saisie(`Calcule astucieusement : ${k} × ${a} + ${k} × ${b}`,[String(k*10)],`On factorise : ${k} × (${a} + ${b}) = ${k} × 10 = ${k*10}.`);
  },
  testeg(){
    const a=alea(2,6),c=alea(1,5),x0=alea(1,6),b=alea(1,12);if(a===c)return GM.testeg();
    const d=a*x0+b-c*x0;const x=alea(0,1)?x0:x0+pioche([1,2]);
    const G=a*x+b,D=c*x+d;
    const droite=d===0?`${c===1?"":c}x`:`${c===1?"":c}x ${d<0?"−":"+"} ${Math.abs(d)}`;
    return ouiNon(`L'égalité ${a}x + ${b} = ${droite} est-elle vraie pour x = ${x} ?`,G===D,`On remplace x par ${x} de chaque côté : à gauche ${a} × ${x} + ${b} = ${G} ; à droite ${c} × ${x} ${d<0?"−":"+"} ${Math.abs(d)} = ${D}. ${G===D?"Les deux côtés sont égaux.":"Les deux côtés sont différents."}`);
  },
  proportionnalite(){
    const t=alea(1,4);
    if(t===1){const p=alea(2,9),q=alea(2,8),n=alea(3,12),ctx=pioche([["kg de pommes","€"],["cahiers","€"],["places de cinéma","€"]]);if(n===q)return GM.proportionnalite();
      return saisie(`${q} ${ctx[0]} coûtent ${q*p} ${ctx[1]}. Combien coûtent ${n} ${ctx[0]}, en euros ?`,[String(n*p),`${n*p} €`],`Prix unitaire : ${q*p} ÷ ${q} = ${p} €. Donc ${n} × ${p} = ${n*p} €.`);}
    if(t===2){const k=alea(2,9),a=alea(2,6),b=alea(7,12),c=alea(13,20),ok=alea(0,1)===1,z=ok?c*k:c*k+pioche([-2,-1,1,2]);
      return ouiNon(`Ce tableau est-il un tableau de proportionnalité ? ${a} → ${a*k} ; ${b} → ${b*k} ; ${c} → ${z}`,ok,`On cherche un même coefficient : ${a*k} ÷ ${a} = ${k} et ${b*k} ÷ ${b} = ${k}. Pour la dernière colonne, ${c} × ${k} = ${c*k}${ok?" : c'est bien proportionnel.":` et non ${z} : ce n'est pas proportionnel.`}`);}
    if(t===3){const v=2*alea(20,60),tt=pioche([2,3,0.5,1.5]),d=v*tt;
      return saisie(`Une voiture roule à vitesse constante de ${v} km/h. Quelle distance parcourt-elle en ${vg(tt)} h, en km ?`,[String(d)],`Distance = vitesse × durée = ${v} × ${vg(tt)} = ${d} km.`);}
    const k=alea(2,12),a=alea(2,9);
    return saisie(`Dans un tableau de proportionnalité, ${a} correspond à ${a*k}. Quel est le coefficient de proportionnalité ?`,[String(k)],`On divise : ${a*k} ÷ ${a} = ${k}. On passe de la première ligne à la seconde en multipliant par ${k}.`);
  },
  pourcentage(){
    const t=alea(1,3);
    if(t===1){const p=pioche([5,10,15,20,25,30,40,50,60,75]),v=20*alea(1,15),r=v*p/100;
      return saisie(`Combien font ${p} % de ${v} ?`,[String(r)],`${p} % de ${v} = ${v} × ${p} ÷ 100 = ${r}.`);}
    if(t===2){const p=pioche([10,20,25,30,50]),P=20*alea(2,10),red=P*p/100;
      return saisie(`Un article coûte ${P} €. Il est soldé à −${p} %. Quel est son nouveau prix, en euros ?`,[String(P-red),`${P-red} €`],`Réduction : ${p} % de ${P} = ${red} €. Nouveau prix : ${P} − ${red} = ${P-red} €.`);}
    const N=pioche([20,25,50]),n=alea(1,N-1),pc=n*100/N,prenom=pioche(PRENOMS);
    return saisie(`Dans la classe de ${prenom}, ${n} élèves sur ${N} mangent à la cantine. Quel pourcentage des élèves cela représente-t-il ?`,[String(pc),`${pc} %`,`${pc}%`],`${n} sur ${N}, c'est ${n} ÷ ${N} × 100 = ${pc} %.`);
  },
  ratio(){
    const t=alea(1,2),a=alea(1,5),b=alea(1,5);if(a===b)return GM.ratio();
    const p1=pioche(PRENOMS);let p2;do{p2=pioche(PRENOMS);}while(p2===p1);
    if(t===1){const u=alea(2,12),total=(a+b)*u;
      return saisie(`${p1} et ${p2} se partagent ${total} billes dans le ratio ${a} : ${b}. Combien de billes reçoit ${p1} ?`,[String(a*u)],`Il y a ${a} + ${b} = ${a+b} parts. Une part vaut ${total} ÷ ${a+b} = ${u} billes. ${p1} reçoit ${a} × ${u} = ${a*u} billes.`);}
    const u=alea(2,10)*10;
    return saisie(`Pour une pâte, on mélange farine et eau dans le ratio ${a} : ${b}. Avec ${a*u} g de farine, combien faut-il d'eau, en g ?`,[String(b*u),`${b*u} g`],`Une part vaut ${a*u} ÷ ${a} = ${u} g. L'eau représente ${b} parts : ${b} × ${u} = ${b*u} g.`);
  },
  stats(){
    const t=alea(1,3);
    if(t===1){const N=pioche([20,25,50]),n=alea(1,N-1),f=n*100/N;
      return saisie(`On a interrogé ${N} élèves : ${n} préfèrent le basket. Quelle est la fréquence de cette réponse, en pourcentage ?`,[String(f),`${f} %`,`${f}%`],`Fréquence = effectif ÷ effectif total = ${n} ÷ ${N} = ${vg(arr(n/N))}, soit ${f} %.`);}
    if(t===2){const v=[alea(2,12),alea(2,12),alea(2,12),alea(2,12)];
      return saisie(`Sports préférés d'une classe : foot ${v[0]}, danse ${v[1]}, natation ${v[2]}, judo ${v[3]}. Quel est l'effectif total ?`,[String(v[0]+v[1]+v[2]+v[3])],`On additionne tous les effectifs : ${v.join(" + ")} = ${v[0]+v[1]+v[2]+v[3]}.`);}
    const N=pioche([4,5,10,20]),n=alea(1,N-1),f=arr(n/N);
    return saisie(`Sur ${N} lancers, une pièce est tombée ${n} fois sur pile. Quelle est la fréquence de « pile », en écriture décimale ?`,[vg(f),String(f)],`Fréquence = ${n} ÷ ${N} = ${vg(f)}. Une fréquence est toujours comprise entre 0 et 1.`);
  },
  moyenne(){
    const t=alea(1,2),prenom=pioche(PRENOMS);
    if(t===1){const n=pioche([3,4,5]),v=[];for(let i=0;i<n;i++)v.push(alea(6,20));const s=v.reduce((a,b)=>a+b,0),m=arr(s/n);
      return saisie(`${prenom} a eu ces notes : ${v.join(" ; ")}. Quelle est sa moyenne ?`,[vg(m),String(m)],`On additionne les notes : ${s}, puis on divise par le nombre de notes : ${s} ÷ ${n} = ${vg(m)}.`);}
    const m=alea(10,16),a=alea(8,20),b=alea(8,20),x=3*m-a-b;
    if(x<0||x>20)return GM.moyenne();
    return saisie(`${prenom} a eu ${a} et ${b} à ses deux premiers contrôles. Quelle note lui faut-il au troisième pour obtenir exactement ${m} de moyenne ?`,[String(x)],`Il faut un total de 3 × ${m} = ${3*m} points. ${3*m} − ${a} − ${b} = ${x}.`);
  },
  proba(){
    const t=alea(1,3);
    if(t===1){const r=alea(1,8),b=alea(1,8),v=alea(0,6),T=r+b+v;const coul=pioche([["rouge",r],["bleue",b]]);
      return saisie(`Un sac contient ${r} boules rouges, ${b} boules bleues${v?` et ${v} boules vertes`:""}. On tire une boule au hasard. Quelle est la probabilité de tirer une boule ${coul[0]} ? (réponds par une fraction)`,repFrac(coul[1],T),`Il y a ${coul[1]} issues favorables sur ${T} issues possibles : ${fracTexte(coul[1],T)}.`);}
    if(t===2){const ev=pioche([["un nombre pair",3],["un 6",1],["un nombre plus grand que 4",2],["un multiple de 3",2],["un nombre inférieur à 5",4]]);
      return saisie(`On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir ${ev[0]} ? (réponds par une fraction)`,repFrac(ev[1],6),`${ev[1]} face(s) sur 6 conviennent : ${fracTexte(ev[1],6)}.`);}
    const b=[
      {q:"Une probabilité est toujours comprise entre :",b:"0 et 1",f:["0 et 100","1 et 10","−1 et 1"],e:"0 : impossible ; 1 : certain."},
      {q:"On lance un dé à 6 faces. « Obtenir 7 » est un événement :",b:"impossible",f:["certain","probable","équiprobable"],e:"Sa probabilité vaut 0."},
      {q:"On lance un dé à 6 faces. « Obtenir un nombre entre 1 et 6 » est un événement :",b:"certain",f:["impossible","rare","contraire"],e:"Sa probabilité vaut 1."},
      {q:"On lance une pièce équilibrée. Quelle est la probabilité d'obtenir face ?",b:"1/2",f:["1/3","1","0"],e:"Deux issues équiprobables : pile ou face."},
      {q:"Les résultats possibles d'une expérience aléatoire s'appellent :",b:"des issues",f:["des fréquences","des effectifs","des moyennes"],e:"Un événement est un ensemble d'issues."},
      {q:"On a obtenu pile 3 fois de suite. Au 4e lancer, la probabilité d'obtenir pile est :",b:"toujours 1/2",f:["plus petite que 1/2","plus grande que 1/2","égale à 0"],e:"La pièce n'a pas de mémoire : chaque lancer est indépendant."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);
  },
  algo(){
    if(alea(0,1)){const a=alea(1,9),b=alea(1,9),c=alea(2,5);
      return saisie(`Un programme met la variable n à ${a}, puis ajoute ${b} à n, puis multiplie n par ${c}. Que vaut n à la fin ?`,[String((a+b)*c)],`On suit les instructions dans l'ordre : ${a} + ${b} = ${a+b}, puis ${a+b} × ${c} = ${(a+b)*c}.`);}
    const b=[
      {q:"Dans Scratch, « répéter 6 fois : avancer de 50 pas, tourner de 60° » trace :",b:"un hexagone régulier",f:["un carré","un triangle","un cercle"],e:"6 côtés égaux ; 6 × 60° = 360°, un tour complet."},
      {q:"Pour tracer un pentagone régulier, de combien tourne-t-on à chaque sommet ?",b:"72°",f:["60°","90°","108°"],e:"360 ÷ 5 = 72°."},
      {q:"Une variable dans un programme sert à :",b:"stocker une valeur qui peut changer",f:["dessiner un trait","arrêter le programme","répéter une action"],e:"Par exemple un score, qui augmente à chaque point gagné."},
      {q:"Que fait l'instruction « si … alors … sinon … » ?",b:"elle exécute des actions différentes selon qu'une condition est vraie ou fausse",f:["elle répète une action","elle crée une variable","elle efface l'écran"],e:"C'est une instruction conditionnelle."},
      {q:"Un « événement » dans Scratch, comme « quand le drapeau vert est cliqué », sert à :",b:"déclencher un script",f:["arrêter tous les lutins","changer de costume","créer une boucle infinie"],e:"Le script démarre quand l'événement se produit."},
      {q:"Une boucle « répéter jusqu'à ce que » s'arrête :",b:"quand la condition devient vraie",f:["après 10 tours exactement","jamais","au premier tour"],e:"On ne connaît pas forcément à l'avance le nombre de répétitions."},
      {q:"Pour tracer un triangle équilatéral, de combien tourne-t-on à chaque sommet ?",b:"120°",f:["60°","90°","180°"],e:"On fait un tour complet en 3 fois : 360 ÷ 3 = 120°."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);
  },
  calcmental(){
    const t=alea(1,7);
    if(t===1)return GM.priorites();
    if(t===2){const a=alea(4,15),b=alea(4,15);return saisie(`Calcule : ${a} × ${b}`,[String(a*b)],`${a} × ${b} = ${a*b}.`);}
    if(t===3)return GM.addrel();
    if(t===4){const a=arr(alea(11,999)/10),m=pioche([10,100,0.1]),r=arr(a*m);
      return saisie(`Calcule : ${vg(a)} × ${vg(m)}`,[vg(r),String(r)],m===0.1?`Multiplier par 0,1, c'est diviser par 10 : ${vg(r)}.`:`Multiplier par ${m}, c'est décaler la virgule de ${String(m).length-1} rang(s) vers la droite : ${vg(r)}.`);}
    if(t===5){const d=pioche([2,3,4,5,10]),n=alea(1,d-1),q=d*alea(2,12);
      return saisie(`Combien font ${n}/${d} de ${q} ?`,[String(q*n/d)],`On divise par ${d} : ${q} ÷ ${d} = ${q/d}, puis on multiplie par ${n} : ${q*n/d}.`);}
    if(t===6){const n=alea(11,99);const m=arr(n/2);return saisie(`Quelle est la moitié de ${n} ?`,[vg(m),String(m)],`${n} ÷ 2 = ${vg(m)}.`);}
    const a=alea(2,9);return saisie(`Calcule : 4 × ${a} × 25`,[String(a*100)],`On regroupe astucieusement : 4 × 25 = 100, puis 100 × ${a} = ${a*100}.`);
  }
};
function exoMaths(tag){const tg=pioche(String(tag).split("+"));const f=GM[tg]||GM[pioche(Object.keys(GM))];return f();}

/* =========================================================
   4. FRANÇAIS
   ========================================================= */
const T_IMP=["ais","ais","ait","ions","iez","aient"],T_FUT=["ai","as","a","ons","ez","ont"];
function V(inf,pres,imp,fut,ps,subj,pp,aux){
  return {inf,pres:pres.split(" "),imp:Array.isArray(imp)?imp:T_IMP.map(x=>imp+x),fut:T_FUT.map(x=>fut+x),cond:T_IMP.map(x=>fut+x),ps:ps.split(" "),subj:subj.split(" "),pp,aux};
}
const VERBES=[
 V("chanter","chante chantes chante chantons chantez chantent","chant","chanter","chantai chantas chanta chantâmes chantâtes chantèrent","chante chantes chante chantions chantiez chantent","chanté","avoir"),
 V("finir","finis finis finit finissons finissez finissent","finiss","finir","finis finis finit finîmes finîtes finirent","finisse finisses finisse finissions finissiez finissent","fini","avoir"),
 V("prendre","prends prends prend prenons prenez prennent","pren","prendr","pris pris prit prîmes prîtes prirent","prenne prennes prenne prenions preniez prennent","pris","avoir"),
 V("aller","vais vas va allons allez vont","all","ir","allai allas alla allâmes allâtes allèrent","aille ailles aille allions alliez aillent","allé","être"),
 V("faire","fais fais fait faisons faites font","fais","fer","fis fis fit fîmes fîtes firent","fasse fasses fasse fassions fassiez fassent","fait","avoir"),
 V("être","suis es est sommes êtes sont","ét","ser","fus fus fut fûmes fûtes furent","sois sois soit soyons soyez soient","été","avoir"),
 V("avoir","ai as a avons avez ont","av","aur","eus eus eut eûmes eûtes eurent","aie aies ait ayons ayez aient","eu","avoir"),
 V("venir","viens viens vient venons venez viennent","ven","viendr","vins vins vint vînmes vîntes vinrent","vienne viennes vienne venions veniez viennent","venu","être"),
 V("partir","pars pars part partons partez partent","part","partir","partis partis partit partîmes partîtes partirent","parte partes parte partions partiez partent","parti","être"),
 V("pouvoir","peux peux peut pouvons pouvez peuvent","pouv","pourr","pus pus put pûmes pûtes purent","puisse puisses puisse puissions puissiez puissent","pu","avoir"),
 V("vouloir","veux veux veut voulons voulez veulent","voul","voudr","voulus voulus voulut voulûmes voulûtes voulurent","veuille veuilles veuille voulions vouliez veuillent","voulu","avoir"),
 V("voir","vois vois voit voyons voyez voient","voy","verr","vis vis vit vîmes vîtes virent","voie voies voie voyions voyiez voient","vu","avoir"),
 V("dire","dis dis dit disons dites disent","dis","dir","dis dis dit dîmes dîtes dirent","dise dises dise disions disiez disent","dit","avoir"),
 V("manger","mange manges mange mangeons mangez mangent",["mangeais","mangeais","mangeait","mangions","mangiez","mangeaient"],"manger","mangeai mangeas mangea mangeâmes mangeâtes mangèrent","mange manges mange mangions mangiez mangent","mangé","avoir"),
 V("tomber","tombe tombes tombe tombons tombez tombent","tomb","tomber","tombai tombas tomba tombâmes tombâtes tombèrent","tombe tombes tombe tombions tombiez tombent","tombé","être")
];
const PRON=["je","tu","il","nous","vous","ils"];
const VOY=/^[aeiouyéèêâîôûh]/i;
const avecPron=(i,forme)=>(i===0&&VOY.test(forme)?"j'":PRON[i]+" ")+forme;
const avecQue=(i,forme)=>(i===2||i===5?"qu'":"que ")+avecPron(i,forme);
const NOM_TEMPS={pres:"présent",imp:"imparfait",fut:"futur simple",ps:"passé simple",cond:"conditionnel présent",subj:"subjonctif présent",pc:"passé composé",pqp:"plus-que-parfait",futant:"futur antérieur"};
const AUX_TEMPS={pc:"pres",pqp:"imp",futant:"fut"};
const au=tp=>(tp==="imp"?"à l'":"au ")+NOM_TEMPS[tp];
function ppAccords(v,i){if(v.aux!=="être")return [v.pp];if(i===2)return [v.pp];if(i===5)return [v.pp+"s"];if(i>=3)return [v.pp+"s",v.pp+"es"];return [v.pp,v.pp+"e"];}
function conjuguer(v,tp,i){
  if(AUX_TEMPS[tp]){const aux=VERBES.find(x=>x.inf===v.aux)[AUX_TEMPS[tp]][i];return ppAccords(v,i).map(p=>aux+" "+p);}
  return [v[tp][i]];
}
function exoConjug(tp){
  const v=pioche(VERBES),i=alea(0,5),formes=conjuguer(v,tp,i),nom=NOM_TEMPS[tp];
  const rep=[];for(const f of formes){rep.push(f);rep.push(tp==="subj"?avecQue(i,f):avecPron(i,f));if(tp==="subj")rep.push(avecPron(i,f));}
  const pr=tp==="subj"?(i===2||i===5?`qu'${PRON[i]}`:`que ${PRON[i]}`):PRON[i];
  const masc=AUX_TEMPS[tp]&&v.aux==="être"?" (sujet au masculin)":"";
  let e;
  if(AUX_TEMPS[tp])e=`${nom[0].toUpperCase()+nom.slice(1)} = auxiliaire ${v.aux} ${au(AUX_TEMPS[tp])} + participe passé. ${v.aux==="être"?"Avec être, le participe s'accorde avec le sujet.":"Avec avoir, le participe ne s'accorde pas avec le sujet."}`;
  else if(tp==="cond")e=`Conditionnel = radical du futur (${v.fut[0].slice(0,-2)}-) + terminaisons de l'imparfait (-ais, -ais, -ait, -ions, -iez, -aient).`;
  else if(tp==="subj")e=`Au subjonctif présent, on utilise « que » : ${avecQue(i,formes[0])}.`;
  else if(tp==="ps")e=`Passé simple : ${avecPron(i,formes[0])}. Terminaisons en -ai, -is, -us ou -ins selon le verbe.`;
  else e=`${avecPron(i,formes[0])}. Retiens bien les terminaisons de ce temps.`;
  return saisie(`Conjugue « ${v.inf} » ${au(tp)}${masc} : ${pr} …`,rep,e);
}
function exoTemps(){
  const TS=["pres","imp","fut","ps","cond","subj"];
  for(let essai=0;essai<30;essai++){
    const v=pioche(VERBES),i=alea(0,5),tp=pioche(TS),f=v[tp][i];
    if(TS.filter(x=>v[x][i]===f).length>1)continue;
    const autres=melange(TS.filter(x=>x!==tp)).slice(0,3).map(x=>NOM_TEMPS[x]);
    const aff=tp==="subj"?avecQue(i,f):avecPron(i,f);
    return qcm(`À quel temps est conjuguée la forme « ${aff} » (verbe ${v.inf}) ?`,NOM_TEMPS[tp],autres,`« ${aff} » : ${NOM_TEMPS[tp]} du verbe ${v.inf}.`);
  }
  return exoConjug("pres");
}
const HOMO=[
 {ph:"Il ___ parti au château.",bon:"est",faux:["et"],expl:"« est » est le verbe être : on peut dire « était »."},
 {ph:"Tristan ___ Iseut s'aiment.",bon:"et",faux:["est"],expl:"« et » relie deux mots : on peut dire « et puis »."},
 {ph:"Les chevaliers ___ gagné le tournoi.",bon:"ont",faux:["on"],expl:"« ont » est le verbe avoir : on peut dire « avaient »."},
 {ph:"___ entend les cloches de l'abbaye.",bon:"On",faux:["Ont"],expl:"« on » est un pronom sujet : on peut dire « il »."},
 {ph:"Le seigneur et ___ fils partent à la chasse.",bon:"son",faux:["sont"],expl:"« son » est un déterminant possessif : on peut dire « mon »."},
 {ph:"Les paysans ___ fatigués après la moisson.",bon:"sont",faux:["son"],expl:"« sont » est le verbe être : on peut dire « étaient »."},
 {ph:"Le roi range ___ armes dans le donjon.",bon:"ses",faux:["ces"],expl:"« ses » marque la possession : ce sont les siennes."},
 {ph:"Regarde ___ remparts : ils sont immenses !",bon:"ces",faux:["ses"],expl:"« ces » est un démonstratif : on peut dire « ces remparts-là »."},
 {ph:"Le chevalier ___ prépare pour le combat.",bon:"se",faux:["ce"],expl:"« se » est un pronom placé devant un verbe pronominal : il se prépare."},
 {ph:"___ château est très ancien.",bon:"Ce",faux:["Se"],expl:"« ce » est un déterminant démonstratif devant un nom."},
 {ph:"Elle ___ trompée de chemin.",bon:"s'est",faux:["c'est"],expl:"« s'est » vient d'un verbe pronominal (se tromper) : on peut dire « je me suis trompé »."},
 {ph:"___ une belle histoire d'amour.",bon:"C'est",faux:["S'est"],expl:"« c'est » = « cela est »."},
 {ph:"Les jongleurs racontent ___ histoires sur la place.",bon:"leurs",faux:["leur"],expl:"Déterminant devant un nom pluriel : leurs histoires."},
 {ph:"Le roi ___ parle avec douceur.",bon:"leur",faux:["leurs"],expl:"Devant un verbe, « leur » est un pronom : il ne prend jamais de s."},
 {ph:"Veux-tu du lait ___ du jus ?",bon:"ou",faux:["où"],expl:"« ou » exprime un choix : on peut dire « ou bien »."},
 {ph:"La ville ___ je suis né est petite.",bon:"où",faux:["ou"],expl:"« où » indique le lieu."},
 {ph:"Il ___ pas fini son devoir.",bon:"n'a",faux:["na"],expl:"Négation : il n'a pas = il n'avait pas."},
 {ph:"Il n'a ___ peur ni froid.",bon:"ni",faux:["n'y"],expl:"« ni … ni » coordonne deux éléments dans une phrase négative."}
];
const PHRASES_F=[
 {ph:"Le chevalier défie le dragon.",sujet:"Le chevalier",cod:"le dragon",verbe:"défie"},
 {ph:"Les moines copient des manuscrits.",sujet:"Les moines",cod:"des manuscrits",verbe:"copient"},
 {ph:"La reine offre une bague à Tristan.",sujet:"La reine",cod:"une bague",verbe:"offre"},
 {ph:"Les paysans récoltent le blé.",sujet:"Les paysans",cod:"le blé",verbe:"récoltent"},
 {ph:"Scapin trompe son maître.",sujet:"Scapin",cod:"son maître",verbe:"trompe"},
 {ph:"Chaque matin, ma sœur prépare son sac.",sujet:"ma sœur",cod:"son sac",verbe:"prépare"},
 {ph:"Le jongleur raconte une histoire drôle.",sujet:"Le jongleur",cod:"une histoire drôle",verbe:"raconte"}
];
const BANQUE_F=[
 // classes de mots
 {t:"classes",q:"Dans « Le chevalier qui arrive est blessé », quelle est la classe du mot « qui » ?",b:"un pronom relatif",f:["une conjonction de coordination","un déterminant","un adverbe"],e:"Il reprend « le chevalier » (son antécédent) et introduit une proposition relative."},
 {t:"classes",q:"Dans « Le roi leur parle », quelle est la classe du mot « leur » ?",b:"un pronom personnel",f:["un déterminant possessif","un nom","un adjectif"],e:"Placé devant un verbe, « leur » est un pronom : il ne prend pas de s."},
 {t:"classes",q:"Dans « Ils rangent leurs épées », quelle est la classe du mot « leurs » ?",b:"un déterminant possessif",f:["un pronom personnel","un adverbe","une préposition"],e:"Devant un nom, « leurs » est un déterminant possessif."},
 {t:"classes",q:"Quelle est la classe du mot « lorsque » ?",b:"une conjonction de subordination",f:["une conjonction de coordination","un adverbe","une préposition"],e:"Il introduit une subordonnée : lorsque, quand, parce que, si, comme…"},
 {t:"classes",q:"Quelle est la classe du mot « parmi » ?",b:"une préposition",f:["un adverbe","un déterminant","un pronom"],e:"Il introduit un complément : parmi les arbres."},
 {t:"classes",q:"Dans « Ce chevalier est vaillant », quelle est la classe du mot « ce » ?",b:"un déterminant démonstratif",f:["un pronom personnel","un adjectif","un adverbe"],e:"Il accompagne le nom « chevalier »."},
 {t:"classes",q:"Quelle est la classe du mot « courageusement » ?",b:"un adverbe",f:["un adjectif","un nom","un verbe"],e:"Il est invariable et précise le verbe ; beaucoup d'adverbes finissent en -ment."},
 {t:"classes",q:"Dans « Celui-ci est mon cheval », quelle est la classe de « celui-ci » ?",b:"un pronom démonstratif",f:["un déterminant démonstratif","un nom","un adverbe"],e:"Il remplace un nom ; « ce, cet, cette » sont des déterminants."},
 {t:"classes",q:"Quelle est la classe du mot « or » dans « Or, ce jour-là, il pleuvait » ?",b:"une conjonction de coordination",f:["un nom","une préposition","un adverbe de lieu"],e:"Mais, ou, et, donc, or, ni, car."},
 // fonctions
 {t:"fonctions",q:"Dans « La reine parle à son fils », quelle est la fonction de « à son fils » ?",b:"complément d'objet indirect",f:["complément d'objet direct","sujet","attribut du sujet"],e:"Il est relié au verbe par la préposition « à » : parler à quelqu'un."},
 {t:"fonctions",q:"Dans « Le roi semble fatigué », quelle est la fonction de « fatigué » ?",b:"attribut du sujet",f:["complément d'objet direct","épithète","complément circonstanciel"],e:"Après un verbe d'état (être, sembler, paraître, devenir…), on trouve l'attribut du sujet."},
 {t:"fonctions",q:"Dans « Au loin galopait un cavalier », quel est le sujet de « galopait » ?",b:"un cavalier",f:["Au loin","galopait","il n'y a pas de sujet"],e:"Le sujet est inversé : « Qui est-ce qui galopait ? Un cavalier »."},
 {t:"fonctions",q:"Dans « Iseut devint reine de Cornouailles », quelle est la fonction de « reine de Cornouailles » ?",b:"attribut du sujet",f:["complément d'objet direct","complément d'objet indirect","sujet"],e:"« devenir » est un verbe d'état : ce groupe qualifie le sujet Iseut."},
 {t:"fonctions",q:"Dans « Perceval obéit à sa mère », quelle est la fonction de « à sa mère » ?",b:"complément d'objet indirect",f:["complément circonstanciel de lieu","complément d'objet direct","attribut du sujet"],e:"On obéit à quelqu'un : complément introduit par « à »."},
 {t:"fonctions",q:"Dans « Le seigneur les protège », quelle est la fonction de « les » ?",b:"complément d'objet direct",f:["sujet","complément d'objet indirect","déterminant"],e:"Le pronom « les » remplace un COD : il protège qui ? les (paysans)."},
 // compléments circonstanciels
 {t:"cc",q:"« Il marche avec prudence. » « avec prudence » est un complément circonstanciel de :",b:"manière",f:["lieu","temps","cause"],e:"Il répond à la question « comment ? »."},
 {t:"cc",q:"« Le château se dresse sur la colline. » « sur la colline » est un complément circonstanciel de :",b:"lieu",f:["temps","manière","but"],e:"Il répond à la question « où ? »."},
 {t:"cc",q:"« Il est resté chez lui à cause de la pluie. » « à cause de la pluie » est un complément circonstanciel de :",b:"cause",f:["but","lieu","manière"],e:"Il répond à la question « pourquoi ? » en donnant la raison."},
 {t:"cc",q:"« Elle s'entraîne pour gagner le tournoi. » « pour gagner le tournoi » est un complément circonstanciel de :",b:"but",f:["cause","temps","lieu"],e:"Il exprime l'objectif recherché : « dans quel but ? »."},
 {t:"cc",q:"« Il ouvre le coffre avec une clé. » « avec une clé » est un complément circonstanciel de :",b:"moyen",f:["manière","lieu","cause"],e:"Il indique l'instrument utilisé : « avec quoi ? »."},
 {t:"cc",q:"« Au XIIe siècle, on construit de grandes cathédrales. » « Au XIIe siècle » est un complément circonstanciel de :",b:"temps",f:["lieu","cause","manière"],e:"Il répond à la question « quand ? »."},
 {t:"cc",q:"Quelle est la particularité d'un complément circonstanciel ?",b:"on peut souvent le déplacer ou le supprimer",f:["il est toujours obligatoire","il est toujours placé après le verbe","il remplace le verbe"],e:"Il apporte une information sur les circonstances : lieu, temps, manière, cause…"},
 // participe passé
 {t:"ppasse",q:"Complète : « Les chevaliers sont ___ au tournoi. » (partir)",b:"partis",f:["parti","partie","parties"],e:"Avec être, le participe passé s'accorde avec le sujet : masculin pluriel."},
 {t:"ppasse",q:"Complète : « La princesse est ___ dans la tour. » (rester)",b:"restée",f:["resté","restés","restées"],e:"Avec être, accord avec le sujet « la princesse » : féminin singulier."},
 {t:"ppasse",q:"Complète : « Elles ont ___ une chanson. » (chanter)",b:"chanté",f:["chantée","chantées","chantés"],e:"Avec avoir, le participe ne s'accorde pas avec le sujet ; ici le COD est placé après le verbe."},
 {t:"ppasse",q:"Complète : « Les lettres que j'ai ___ sont longues. » (écrire)",b:"écrites",f:["écrit","écrits","écrite"],e:"Avec avoir, le participe s'accorde avec le COD placé avant : « que » = les lettres (féminin pluriel)."},
 {t:"ppasse",q:"Complète : « Ces pommes, je les ai ___. » (manger)",b:"mangées",f:["mangé","mangés","mangée"],e:"Le COD « les » (= ces pommes) est placé avant l'auxiliaire avoir : accord au féminin pluriel."},
 {t:"ppasse",q:"Complète : « Tristan et Iseut sont ___ amoureux. » (tomber)",b:"tombés",f:["tombé","tombées","tombée"],e:"Avec être, accord avec le sujet ; masculin + féminin = masculin pluriel."},
 {t:"ppasse",q:"Complète : « Ma sœur a ___ ses devoirs. » (finir)",b:"fini",f:["finie","finis","finies"],e:"Avec avoir et un COD placé après le verbe, pas d'accord."},
 {t:"ppasse",q:"Complète : « La ville a été ___ par l'armée. » (prendre)",b:"prise",f:["pris","prises","prit"],e:"Construction avec être : accord avec le sujet « la ville », féminin singulier."},
 // phrase complexe
 {t:"propositions",q:"Combien y a-t-il de propositions dans « Le chevalier monte à cheval, il part au combat. » ?",b:"2",f:["1","3","4"],e:"Deux verbes conjugués : monte et part. Donc deux propositions."},
 {t:"propositions",q:"« Il pleuvait, nous sommes rentrés. » Ces deux propositions sont :",b:"juxtaposées",f:["coordonnées","subordonnées","relatives"],e:"Elles sont séparées par une virgule, sans mot de liaison."},
 {t:"propositions",q:"« Il pleuvait mais nous sommes sortis. » Ces deux propositions sont :",b:"coordonnées",f:["juxtaposées","subordonnées","relatives"],e:"Elles sont reliées par la conjonction de coordination « mais »."},
 {t:"propositions",q:"« Nous sommes rentrés parce qu'il pleuvait. » Cette phrase contient :",b:"une proposition principale et une subordonnée",f:["deux propositions juxtaposées","deux propositions coordonnées","une seule proposition"],e:"« parce qu'il pleuvait » dépend de la principale : c'est une subordonnée."},
 {t:"propositions",q:"Quel mot est une conjonction de coordination ?",b:"car",f:["lorsque","parce que","quand"],e:"Mais, ou, et, donc, or, ni, car. « Quand » et « lorsque » sont des conjonctions de subordination."},
 {t:"propositions",q:"Une proposition est organisée autour :",b:"d'un verbe conjugué",f:["d'un nom","d'un adjectif","d'une virgule"],e:"Autant de verbes conjugués, autant de propositions."},
 {t:"propositions",q:"Combien y a-t-il de propositions dans « Quand le roi arriva, les trompettes sonnèrent et le peuple applaudit. » ?",b:"3",f:["2","1","4"],e:"Trois verbes conjugués : arriva, sonnèrent, applaudit."},
 {t:"propositions",q:"Une phrase simple contient :",b:"un seul verbe conjugué",f:["deux verbes conjugués","aucun verbe","une subordonnée"],e:"La phrase complexe en contient plusieurs."},
 // subordonnées
 {t:"subordonnees",q:"Dans « Le cheval que monte Lancelot est blanc », la proposition « que monte Lancelot » est :",b:"une subordonnée relative",f:["une subordonnée conjonctive","une proposition principale","une proposition indépendante"],e:"Elle est introduite par le pronom relatif « que » et complète le nom « cheval »."},
 {t:"subordonnees",q:"Quel est l'antécédent du pronom relatif dans « J'aime le roman que tu m'as prêté » ?",b:"le roman",f:["tu","que","prêté"],e:"L'antécédent est le nom que le pronom relatif reprend."},
 {t:"subordonnees",q:"« Je pense que tu as raison. » La proposition « que tu as raison » est :",b:"une subordonnée conjonctive",f:["une subordonnée relative","une proposition principale","une proposition juxtaposée"],e:"Ici « que » est une conjonction : elle n'a pas d'antécédent et la subordonnée est COD de « pense »."},
 {t:"subordonnees",q:"« Lorsque la nuit tomba, le chevalier s'arrêta. » La subordonnée exprime :",b:"le temps",f:["la cause","le but","la conséquence"],e:"« Lorsque » introduit une circonstancielle de temps."},
 {t:"subordonnees",q:"« Il ne sort pas parce qu'il est malade. » La subordonnée exprime :",b:"la cause",f:["le temps","le but","le lieu"],e:"« Parce que » introduit une circonstancielle de cause."},
 {t:"subordonnees",q:"Complète avec le bon pronom relatif : « La ville ___ je suis né est petite. »",b:"où",f:["qui","que","dont"],e:"« où » reprend un lieu (ou un moment)."},
 {t:"subordonnees",q:"Complète avec le bon pronom relatif : « Le livre ___ je te parle est passionnant. »",b:"dont",f:["que","qui","où"],e:"On parle DE quelque chose : « dont » remplace un complément introduit par « de »."},
 {t:"subordonnees",q:"Complète avec le bon pronom relatif : « Le moine ___ copie le manuscrit travaille lentement. »",b:"qui",f:["que","dont","où"],e:"« qui » est sujet du verbe de la relative : c'est le moine qui copie."},
 // voix
 {t:"voix",q:"« Le chat attrape la souris. » Cette phrase est à la voix :",b:"active",f:["passive","pronominale","impersonnelle"],e:"Le sujet « le chat » fait l'action."},
 {t:"voix",q:"« La souris est attrapée par le chat. » Cette phrase est à la voix :",b:"passive",f:["active","pronominale","impersonnelle"],e:"Le sujet « la souris » subit l'action ; « par le chat » est le complément d'agent."},
 {t:"voix",q:"Dans « Le château a été assiégé par l'armée », quel est le complément d'agent ?",b:"par l'armée",f:["Le château","a été","assiégé"],e:"Le complément d'agent indique qui fait l'action ; il est souvent introduit par « par »."},
 {t:"voix",q:"Quelle est la forme passive de « Le jury récompense Lisa » ?",b:"Lisa est récompensée par le jury.",f:["Lisa a récompensé le jury.","Le jury est récompensé par Lisa.","Lisa récompense le jury."],e:"Le COD devient sujet, le sujet devient complément d'agent, et on utilise être + participe passé."},
 {t:"voix",q:"À la voix passive, le sujet :",b:"subit l'action",f:["fait l'action","n'existe pas","est toujours un pronom"],e:"À la voix active, au contraire, le sujet fait l'action."},
 {t:"voix",q:"Quelle phrase est à la voix passive ?",b:"Le pont a été construit en 1890.",f:["Le pont est très long.","Les ouvriers ont construit le pont.","Le pont s'effondre."],e:"« a été construit » = être + participe passé avec un sens passif. « est très long » contient un adjectif attribut, ce n'est pas un passif."},
 {t:"voix",q:"Pour former la voix passive, on utilise l'auxiliaire :",b:"être",f:["avoir","aller","faire"],e:"Être, conjugué au temps voulu, suivi du participe passé accordé avec le sujet."},
 // vocabulaire
 {t:"vocab",q:"Le mot « chevalier » est formé à partir du mot :",b:"cheval",f:["chef","chèvre","cheveu"],e:"Le chevalier est d'abord celui qui combat à cheval."},
 {t:"vocab",q:"Dans « Il a un cœur de pierre », le mot « pierre » est employé au sens :",b:"figuré",f:["propre","technique","scientifique"],e:"Il n'a pas vraiment un cœur en pierre : cela veut dire qu'il est insensible."},
 {t:"vocab",q:"Que signifie l'adjectif « courtois » ?",b:"poli et raffiné, comme à la cour d'un seigneur",f:["grossier","rapide","rusé"],e:"Il vient du mot « cour » : la courtoisie est l'idéal des chevaliers."},
 {t:"vocab",q:"Que signifie le suffixe « -able » dans « lavable » ?",b:"qui peut être",f:["qui a été","qui ne peut pas être","celui qui fait"],e:"Lavable : qui peut être lavé ; buvable : qui peut être bu."},
 {t:"vocab",q:"Quel mot est un antonyme de « loyal » ?",b:"déloyal",f:["fidèle","sincère","honnête"],e:"Le préfixe « dé- » marque ici le contraire."},
 {t:"vocab",q:"« Bibliothèque » vient du grec biblion, qui signifie :",b:"livre",f:["image","lettre","maison"],e:"On le retrouve dans « bibliographie » et « Bible »."},
 {t:"vocab",q:"Un « destrier » est :",b:"un cheval de bataille",f:["une épée","un écuyer","un château"],e:"Le chevalier monte son destrier pour combattre."},
 {t:"vocab",q:"Quel mot est un synonyme de « vaillant » ?",b:"courageux",f:["peureux","fatigué","lent"],e:"Un synonyme a un sens proche."},
 {t:"vocab",q:"Dans « Il dévore un livre », le verbe « dévorer » signifie :",b:"lire avec passion et rapidement",f:["manger un livre","abîmer un livre","acheter un livre"],e:"C'est un sens figuré : au sens propre, dévorer veut dire manger avec avidité."},
 // littérature : récit, figures, voyage
 {t:"litt",q:"« Il est fort comme un lion » : quelle figure de style ?",b:"une comparaison",f:["une métaphore","une personnification","une hyperbole"],e:"Il y a un outil de comparaison : « comme »."},
 {t:"litt",q:"« Ce chevalier est un lion » : quelle figure de style ?",b:"une métaphore",f:["une comparaison","une énumération","une hyperbole"],e:"C'est une comparaison sans outil de comparaison."},
 {t:"litt",q:"« Je meurs de faim ! » : quelle figure de style ?",b:"une hyperbole",f:["une métaphore","une comparaison","une personnification"],e:"C'est une exagération pour frapper les esprits."},
 {t:"litt",q:"Dans un récit, un narrateur interne est :",b:"un personnage qui raconte l'histoire en disant « je »",f:["l'auteur réel du livre","un narrateur qui sait tout sur tous","le lecteur"],e:"Le narrateur externe, lui, raconte de l'extérieur à la 3e personne."},
 {t:"litt",q:"Dans le schéma narratif, ce qui vient perturber la situation initiale s'appelle :",b:"l'élément perturbateur",f:["la situation finale","le dénouement","la chute"],e:"Situation initiale, élément perturbateur, péripéties, dénouement, situation finale."},
 {t:"litt",q:"Dans « Robinson Crusoé » de Daniel Defoe, le héros se retrouve :",b:"seul sur une île après un naufrage",f:["prisonnier dans un château","au centre de la Terre","sur la Lune"],e:"Il doit apprendre à survivre, puis rencontre Vendredi."},
 {t:"litt",q:"Quel auteur a écrit « Le Tour du monde en quatre-vingts jours » ?",b:"Jules Verne",f:["Molière","Chrétien de Troyes","Victor Hugo"],e:"Phileas Fogg parie qu'il fera le tour du monde en 80 jours."},
 {t:"litt",q:"Marco Polo raconte dans « Le Devisement du monde » son voyage :",b:"jusqu'en Chine, à la cour de Kubilaï Khan",f:["en Amérique","en Australie","au pôle Nord"],e:"Ce récit de voyage date de la fin du XIIIe siècle."},
 // Moyen Âge
 {t:"moyenage",q:"Qui a écrit « Perceval ou le Conte du Graal » au XIIe siècle ?",b:"Chrétien de Troyes",f:["Molière","Victor Hugo","Homère"],e:"Il a aussi écrit « Yvain ou le Chevalier au lion » et « Lancelot »."},
 {t:"moyenage",q:"Les chevaliers de la Table ronde servent le roi :",b:"Arthur",f:["Charlemagne","Louis XIV","Clovis"],e:"Lancelot, Gauvain, Perceval… font partie de ses chevaliers."},
 {t:"moyenage",q:"Comment Tristan et Iseut tombent-ils amoureux ?",b:"en buvant par erreur un philtre d'amour",f:["en se rencontrant à un tournoi","grâce à une lettre","dans un rêve"],e:"Ce philtre était destiné à Iseut et au roi Marc."},
 {t:"moyenage",q:"Dans la légende, Iseut doit épouser :",b:"le roi Marc, oncle de Tristan",f:["le roi Arthur","Lancelot","Perceval"],e:"D'où le conflit entre l'amour et la fidélité au roi."},
 {t:"moyenage",q:"Un fabliau est :",b:"un court récit en vers qui cherche à faire rire",f:["un long poème sur la guerre","une tragédie","un roman de chevalerie"],e:"Il se moque souvent des défauts des gens : ruse, avarice, bêtise."},
 {t:"moyenage",q:"Dans le Roman de Renart, Renart est :",b:"un goupil (un renard) rusé",f:["un loup cruel","un chevalier","un roi"],e:"Son ennemi est le loup Ysengrin ; le roi est le lion Noble."},
 {t:"moyenage",q:"L'amour courtois (la fin'amor), c'est :",b:"l'amour respectueux et dévoué d'un chevalier pour une dame",f:["un mariage arrangé","l'amitié entre deux chevaliers","l'amour de la guerre"],e:"Le chevalier accomplit des exploits pour mériter sa dame."},
 {t:"moyenage",q:"L'adoubement est :",b:"la cérémonie qui fait d'un jeune homme un chevalier",f:["un mariage","le couronnement d'un roi","un tournoi"],e:"Le jeune homme reçoit ses armes, souvent l'épée et les éperons."},
 {t:"moyenage",q:"Quel héros de Chrétien de Troyes est surnommé « le Chevalier au lion » ?",b:"Yvain",f:["Lancelot","Perceval","Tristan"],e:"Il sauve un lion qui devient son fidèle compagnon."},
 {t:"moyenage",q:"La Chanson de Roland est :",b:"une chanson de geste qui raconte la mort de Roland à Roncevaux",f:["un fabliau comique","une pièce de Molière","un roman de voyage"],e:"Roland est un neveu de Charlemagne ; les chansons de geste célèbrent les exploits guerriers."},
 // Molière et le théâtre
 {t:"moliere",q:"Molière a vécu au :",b:"XVIIe siècle",f:["XIIe siècle","XVe siècle","XIXe siècle"],e:"Il est né en 1622 et mort en 1673, sous Louis XIV."},
 {t:"moliere",q:"Quel est le vrai nom de Molière ?",b:"Jean-Baptiste Poquelin",f:["Jean de La Fontaine","Pierre Corneille","François Rabelais"],e:"« Molière » est son nom de théâtre."},
 {t:"moliere",q:"Dans « L'Avare », Harpagon est obsédé par :",b:"son argent",f:["la musique","la médecine","la chevalerie"],e:"Il cache sa cassette et soupçonne tout le monde de vouloir la voler."},
 {t:"moliere",q:"Dans « Les Fourberies de Scapin », Scapin est :",b:"un valet rusé",f:["un roi","un médecin","un avare"],e:"Il invente des tours pour obtenir de l'argent des pères."},
 {t:"moliere",q:"Qui répète « Que diable allait-il faire dans cette galère ? » dans « Les Fourberies de Scapin » ?",b:"Géronte",f:["Scapin","Harpagon","Argan"],e:"Le vieux Géronte, trompé par Scapin, répète cette phrase : c'est un comique de répétition."},
 {t:"moliere",q:"Une didascalie est :",b:"une indication de mise en scène, souvent écrite en italique",f:["une réplique très longue","le titre d'une scène","une chanson"],e:"Elle n'est pas prononcée par les acteurs : elle indique gestes, ton, décor."},
 {t:"moliere",q:"Un aparté est :",b:"une réplique qu'un personnage dit pour lui-même, que les autres ne sont pas censés entendre",f:["un long discours","un changement de décor","la fin de la pièce"],e:"Le public, lui, l'entend : cela crée une complicité."},
 {t:"moliere",q:"Le comique de geste repose sur :",b:"les coups, les chutes et les mimiques",f:["les jeux de mots","les malentendus","la répétition d'une phrase"],e:"Il y a aussi le comique de mots, de situation, de caractère et de répétition."},
 {t:"moliere",q:"Dans « Le Malade imaginaire », Argan :",b:"se croit gravement malade alors qu'il ne l'est pas",f:["est un valet rusé","est un chevalier","est très généreux"],e:"Molière se moque des faux médecins et de la peur d'être malade."},
 {t:"moliere",q:"Molière était à la fois :",b:"auteur, comédien et chef de troupe",f:["roi et poète","médecin et auteur","peintre et musicien"],e:"Il jouait lui-même dans ses pièces, soutenu par Louis XIV."},
 // accords
 {t:"accords",q:"Complète : « Les chevaliers et leur écuyer ___ au château. » (arriver, présent)",b:"arrivent",f:["arrive","arrivez","arrivons"],e:"Deux sujets (les chevaliers et leur écuyer) : le verbe est au pluriel."},
 {t:"accords",q:"Complète : « C'est toi qui ___ raison. »",b:"as",f:["a","ont","avez"],e:"« qui » reprend « toi » : le verbe s'accorde à la 2e personne du singulier."},
 {t:"accords",q:"Complète : « des robes ___ »",b:"orange",f:["oranges","orangés","orangeâtre"],e:"Les adjectifs de couleur qui viennent d'un nom (orange, marron) sont invariables."},
 {t:"accords",q:"Complète : « des chemises ___ »",b:"bleues",f:["bleu","bleus","bleue"],e:"L'adjectif s'accorde avec le nom : féminin pluriel."},
 {t:"accords",q:"Complète : « Les enfants les ___ jouer. » (regarder, présent)",b:"regardent",f:["regarde","regardes","regarder"],e:"« les » est un pronom COD ; le sujet est « les enfants » : 3e personne du pluriel."},
 {t:"accords",q:"Complète : « Tout le monde ___ content. »",b:"est",f:["sont","es","êtes"],e:"« Tout le monde » est singulier, même s'il désigne plusieurs personnes."},
 {t:"accords",q:"Complète : « une ___-heure »",b:"demi",f:["demie","demis","demies"],e:"Placé devant le nom et relié par un trait d'union, « demi » est invariable."},
 // valeurs des temps
 {t:"temps",q:"Dans un récit au passé, l'imparfait sert surtout à :",b:"décrire et à exprimer des actions qui durent ou se répètent",f:["exprimer des actions soudaines","parler du futur","donner des ordres"],e:"C'est le temps de l'arrière-plan du récit."},
 {t:"temps",q:"Dans un récit au passé, le passé simple exprime :",b:"les actions principales, brèves et successives",f:["les descriptions","les habitudes","les vérités générales"],e:"C'est le temps du premier plan."},
 {t:"temps",q:"« Chaque matin, il se levait à l'aube. » L'imparfait exprime ici :",b:"une habitude",f:["une action soudaine","un ordre","une vérité générale"],e:"« Chaque matin » indique que l'action se répète."},
 {t:"temps",q:"« Il lisait quand l'orage éclata. » Le passé simple « éclata » exprime :",b:"une action soudaine qui interrompt une action en cours",f:["une description","une habitude","une action future"],e:"L'imparfait « lisait » est l'action en cours, interrompue."},
 {t:"temps",q:"Le plus-que-parfait exprime :",b:"une action antérieure à une autre action passée",f:["une action future","une action présente","un souhait"],e:"« Il avait mangé quand elle arriva » : il a mangé avant."},
 {t:"temps",q:"« L'eau bout à 100 °C. » Le présent a ici une valeur :",b:"de vérité générale",f:["de narration","d'action passée","d'ordre"],e:"C'est vrai tout le temps."},
 {t:"temps",q:"Le présent de narration sert à :",b:"rendre plus vivant un récit au passé",f:["parler de l'avenir","décrire une habitude","donner un ordre"],e:"Le lecteur a l'impression de vivre l'action."},
 // discours rapporté
 {t:"discours",q:"Quelle phrase est au discours indirect ?",b:"Il dit qu'il viendra demain.",f:["Il dit : « Je viendrai demain. »","« Je viendrai demain », dit-il.","« Viendras-tu ? » demanda-t-il."],e:"Au discours indirect, les paroles sont intégrées dans une subordonnée, sans guillemets."},
 {t:"discours",q:"Au discours direct, les paroles sont :",b:"rapportées telles quelles, entre guillemets",f:["résumées sans guillemets","toujours à l'imparfait","inventées par le narrateur"],e:"On utilise les guillemets et souvent un tiret pour chaque réplique."},
 {t:"discours",q:"« Je suis fatigué », dit Paul. Au discours indirect, cela donne :",b:"Paul dit qu'il est fatigué.",f:["Paul dit que je suis fatigué.","Paul dit : je suis fatigué.","Paul dit qu'ils sont fatigués."],e:"« je » devient « il », car c'est le narrateur qui rapporte les paroles de Paul."},
 {t:"discours",q:"Lequel de ces verbes est un verbe de parole ?",b:"répondre",f:["courir","manger","dormir"],e:"Dire, répondre, demander, s'écrier, murmurer… introduisent des paroles."},
 {t:"discours",q:"Dans un dialogue, une incise comme « dit-il » sert à :",b:"indiquer qui parle",f:["terminer le récit","décrire le décor","poser une question"],e:"Elle est placée au milieu ou à la fin des paroles, avec le sujet inversé."},
 {t:"discours",q:"Elle demande : « Où vas-tu ? » Au discours indirect, cela donne :",b:"Elle demande où tu vas.",f:["Elle demande où vas-tu.","Elle demande : où tu vas.","Elle demande où va-t-il."],e:"Dans l'interrogation indirecte, il n'y a plus d'inversion du sujet ni de point d'interrogation."},
 {t:"discours",q:"Que deviennent les guillemets au discours indirect ?",b:"ils disparaissent",f:["ils sont doublés","ils deviennent des tirets","ils restent"],e:"Les paroles sont intégrées à la phrase du narrateur."}
];
const GF={
  homophones(){const h=pioche(HOMO);return qcm(`Complète : ${h.ph}`,h.bon,h.faux,h.expl);},
  fonctions(){
    if(alea(0,1))return parTag(BANQUE_F,"fonctions");
    const p=pioche(PHRASES_F);
    if(alea(0,1))return saisie(`Quel est le sujet du verbe dans : « ${p.ph} » ?`,[p.sujet],`On demande « qui est-ce qui ${p.verbe} ? » → ${p.sujet}.`);
    return saisie(`Quel est le COD dans : « ${p.ph} » ?`,[p.cod],`On demande « ${p.verbe} quoi ? » ou « qui ? » → ${p.cod}. Le COD suit le verbe sans préposition.`);
  }
};
function exoFrancais(tag){
  const tg=pioche(String(tag).split("+"));
  const conj={present:["pres"],imparfait:["imp"],passesimple:["ps","imp"],plusqueparfait:["pc","pqp"],futur:["fut","futant"],conditionnel:["cond"],subjonctif:["subj"],conjug:["pres","imp","fut","ps","cond","subj","pc","pqp","futant","reco"]}[tg];
  if(conj){const tp=pioche(conj);if(tp==="reco"||alea(0,5)===0)return exoTemps();return exoConjug(tp);}
  if(GF[tg])return GF[tg]();
  if(BANQUE_F.some(x=>x.t===tg))return parTag(BANQUE_F,tg);
  return parTag(BANQUE_F,pioche(["classes","vocab","litt"]));
}

/* =========================================================
   5. ANGLAIS (niveau A2)
   ========================================================= */
const VOC_EN=[["a knight","un chevalier"],["a castle","un château"],["a sword","une épée"],["the town hall","la mairie"],["a bakery","une boulangerie"],["the library","la bibliothèque"],["a neighbour","un voisin|une voisine"],["the holidays","les vacances"],["a journey","un voyage|un trajet"],["the countryside","la campagne"],["a mountain","une montagne"],["the weather","le temps|la météo"],["a storm","une tempête|un orage"],["lunch","le déjeuner|le repas de midi"],["vegetables","des légumes|les légumes"],["a fork","une fourchette"],["a lawyer","un avocat|une avocate"],["a teacher","un professeur|un enseignant|une professeure|une enseignante"],["a nurse","un infirmier|une infirmière"],["the floor","le sol|le plancher"],["the ceiling","le plafond"],["a key","une clé|une clef"],["a clock","une horloge|une pendule"],["a ghost","un fantôme"],["a pumpkin","une citrouille"],["a gift","un cadeau"],["a wedding","un mariage"],["a crowd","une foule"],["a bridge","un pont"],["a ship","un navire|un bateau"],["an island","une île"],["the sea","la mer"],["a tooth","une dent"],["a knee","un genou"],["a headache","un mal de tête|une migraine"],["a shop assistant","un vendeur|une vendeuse"],["the chemist's","la pharmacie"],["a timetable","un emploi du temps"],["a mistake","une erreur|une faute"],["a team","une équipe"]];
const IRREG=[["go","went","gone"],["eat","ate","eaten"],["see","saw","seen"],["take","took","taken"],["make","made","made"],["write","wrote","written"],["drink","drank","drunk"],["run","ran","run"],["buy","bought","bought"],["come","came","come"],["give","gave","given"],["speak","spoke","spoken"],["sleep","slept","slept"],["find","found","found"],["think","thought","thought"],["swim","swam","swum"],["begin","began","begun"],["break","broke","broken"],["choose","chose","chosen"],["fly","flew","flown"],["forget","forgot","forgotten"],["know","knew","known"],["leave","left","left"],["meet","met","met"],["read","read","read"],["ride","rode","ridden"],["sing","sang","sung"],["teach","taught","taught"],["wear","wore","worn"],["win","won","won"],["catch","caught","caught"],["bring","brought","brought"],["build","built","built"],["sell","sold","sold"],["tell","told","told"],["feel","felt","felt"],["do","did","done"],["have","had","had"]];
const GRAM_EN=[
 {t:"tobe",q:"I ___ twelve years old.",b:"am",f:["is","are","be"],e:"I am, you are, he/she/it is, we/you/they are."},
 {t:"tobe",q:"They ___ from Scotland.",b:"are",f:["is","am","be"],e:"Pluriel → are."},
 {t:"tobe",q:"___ she your sister ?",b:"Is",f:["Are","Am","Do"],e:"Question avec be : on inverse le sujet et le verbe."},
 {t:"tobe",q:"We ___ not late today.",b:"are",f:["is","am","does"],e:"We are not = we aren't."},
 {t:"tobe",q:"My parents ___ at work.",b:"are",f:["is","am","be"],e:"« My parents » = they → are."},
 {t:"tobe",q:"It ___ cold today.",b:"is",f:["are","am","be"],e:"It is = it's."},
 {t:"presentsimple",q:"He ___ to school by bus.",b:"goes",f:["go","going","gone"],e:"3e personne du singulier : on ajoute -es après -o."},
 {t:"presentsimple",q:"___ your brother play tennis ?",b:"Does",f:["Do","Is","Has"],e:"Avec he/she/it, la question se forme avec does + base verbale."},
 {t:"presentsimple",q:"I ___ like spiders.",b:"don't",f:["doesn't","not","isn't"],e:"Négation avec I : do not (don't) + base verbale."},
 {t:"presentsimple",q:"My cat ___ milk every morning.",b:"drinks",f:["drink","drinking","drinked"],e:"Habitude, 3e personne du singulier : -s."},
 {t:"presentsimple",q:"They ___ in London.",b:"live",f:["lives","living","is live"],e:"They → pas de -s."},
 {t:"presentsimple",q:"Where ___ he live ?",b:"does",f:["do","is","has"],e:"Question à la 3e personne du singulier : does."},
 {t:"continuous",q:"Look ! The baby ___ sleeping.",b:"is",f:["are","am","does"],e:"Present continuous : be + verbe-ing, pour une action en cours."},
 {t:"continuous",q:"Listen ! They ___ singing.",b:"are",f:["is","am","do"],e:"They → are + -ing."},
 {t:"continuous",q:"I ___ reading a book at the moment.",b:"am",f:["is","are","do"],e:"« at the moment » → present continuous."},
 {t:"continuous",q:"What ___ you doing right now ?",b:"are",f:["do","is","does"],e:"Question au present continuous : are you doing ?"},
 {t:"continuous",q:"Right now, she ___ TV.",b:"is watching",f:["watches","watch","are watching"],e:"« Right now » : action en cours → is + -ing."},
 {t:"continuous",q:"He usually ___ tea, but today he is drinking coffee.",b:"drinks",f:["is drinking","drinking","drink"],e:"« usually » : habitude → present simple."},
 {t:"possessifs",q:"Tom has a dog. ___ dog is black.",b:"His",f:["Her","Its","Their"],e:"Le possesseur est un garçon : his."},
 {t:"possessifs",q:"Sarah has a bike. ___ bike is red.",b:"Her",f:["His","Its","Their"],e:"La possesseure est une fille : her."},
 {t:"possessifs",q:"Is this your pen ? — Yes, it's ___.",b:"mine",f:["my","me","I"],e:"Pronom possessif : mine, yours, his, hers, ours, theirs."},
 {t:"possessifs",q:"Comment dit-on « le chien de Paul » ?",b:"Paul's dog",f:["the dog Paul","Paul dog's","dog's Paul"],e:"Génitif : possesseur + 's + objet possédé."},
 {t:"possessifs",q:"Comment dit-on « la chambre de mes parents » ?",b:"my parents' bedroom",f:["my parents's bedroom","the bedroom my parents","my parentes bedroom"],e:"Pluriel en -s : on ajoute seulement l'apostrophe."},
 {t:"possessifs",q:"We love ___ school.",b:"our",f:["us","we","ours"],e:"Adjectif possessif de we : our."},
 {t:"questions",q:"___ do you live ? — I live in Leeds.",b:"Where",f:["When","Who","What"],e:"Where = où."},
 {t:"questions",q:"___ is your birthday ? — In May.",b:"When",f:["Where","Who","Why"],e:"When = quand."},
 {t:"questions",q:"___ old are you ?",b:"How",f:["What","Who","Which"],e:"How old = quel âge."},
 {t:"questions",q:"___ is this bag ? — It's Tom's.",b:"Whose",f:["Who","What","Where"],e:"Whose = à qui."},
 {t:"questions",q:"___ do you like English ? — Because it's fun.",b:"Why",f:["How","When","Where"],e:"Why = pourquoi ; la réponse commence par because."},
 {t:"questions",q:"___ is your favourite singer ?",b:"Who",f:["Where","When","Whose"],e:"Who = qui."},
 {t:"questions",q:"___ much is this T-shirt ? — It's £10.",b:"How",f:["What","Who","Why"],e:"How much = combien (prix ou quantité non dénombrable)."},
 {t:"past",q:"Yesterday I ___ my grandma.",b:"visited",f:["visit","visiting","visits"],e:"Verbe régulier au past simple : -ed."},
 {t:"past",q:"___ you watch the match last night ?",b:"Did",f:["Do","Does","Were"],e:"Question au past simple : did + base verbale."},
 {t:"past",q:"She ___ go to school on Monday : she was ill.",b:"didn't",f:["doesn't","don't","wasn't"],e:"Négation au past simple : didn't + base verbale."},
 {t:"past",q:"Last summer we ___ to Spain.",b:"went",f:["go","goed","gone"],e:"go → went (irrégulier)."},
 {t:"past",q:"I ___ happy yesterday.",b:"was",f:["were","am","is"],e:"Past simple de be : I/he/she/it was, we/you/they were."},
 {t:"past",q:"They ___ at home last weekend.",b:"were",f:["was","are","be"],e:"They → were."},
 {t:"pastcont",q:"At 8 pm yesterday, I ___ watching TV.",b:"was",f:["were","am","did"],e:"Past continuous : was/were + -ing, une action en cours dans le passé."},
 {t:"pastcont",q:"They ___ playing football when it started to rain.",b:"were",f:["was","are","did"],e:"They → were + -ing."},
 {t:"pastcont",q:"What ___ you doing at six o'clock ?",b:"were",f:["was","did","are"],e:"Question : were you doing ?"},
 {t:"pastcont",q:"She was reading when the phone ___.",b:"rang",f:["rings","ring","ringed"],e:"L'action brève qui interrompt est au past simple : ring → rang."},
 {t:"pastcont",q:"While we ___ dinner, the lights went out.",b:"were having",f:["are having","have","has"],e:"While + past continuous pour l'action en cours."},
 {t:"pastcont",q:"Comment forme-t-on le past continuous ?",b:"was/were + verbe en -ing",f:["did + base verbale","have + participe passé","will + base verbale"],e:"I was playing, they were playing."},
 {t:"quantif",q:"How ___ apples do you want ?",b:"many",f:["much","any","some"],e:"many + nom dénombrable pluriel."},
 {t:"quantif",q:"How ___ water do you drink every day ?",b:"much",f:["many","any","a"],e:"much + nom indénombrable."},
 {t:"quantif",q:"There isn't ___ milk in the fridge.",b:"any",f:["some","many","a"],e:"any dans les phrases négatives et les questions."},
 {t:"quantif",q:"I'd like ___ bread, please.",b:"some",f:["any","many","a"],e:"some dans les phrases affirmatives et les demandes polies."},
 {t:"quantif",q:"There are a lot ___ people in the street.",b:"of",f:["to","from","at"],e:"a lot of = beaucoup de."},
 {t:"quantif",q:"Quel nom est indénombrable en anglais ?",b:"water",f:["apple","chair","egg"],e:"On ne compte pas l'eau : on dit some water, much water."},
 {t:"comparatif",q:"My brother is ___ than me.",b:"taller",f:["more tall","tallest","tall"],e:"Adjectif court : adjectif + -er + than."},
 {t:"comparatif",q:"This film is ___ than the book.",b:"more interesting",f:["interestinger","most interesting","interesting"],e:"Adjectif long : more + adjectif + than."},
 {t:"comparatif",q:"London is ___ than Oxford.",b:"bigger",f:["biger","more big","biggest"],e:"big → bigger : on double la consonne finale."},
 {t:"comparatif",q:"For me, maths is ___ than English.",b:"easier",f:["easyer","more easy","easiest"],e:"easy → easier : le -y devient -ier."},
 {t:"comparatif",q:"My marks are ___ than last year.",b:"better",f:["gooder","more good","best"],e:"good → better → the best."},
 {t:"comparatif",q:"This bag is as heavy ___ that one.",b:"as",f:["than","like","that"],e:"Comparatif d'égalité : as + adjectif + as."},
 {t:"superlatif",q:"Everest is the ___ mountain in the world.",b:"highest",f:["higher","most high","highiest"],e:"Superlatif d'un adjectif court : the + adjectif + -est."},
 {t:"superlatif",q:"It's the ___ day of my life !",b:"best",f:["better","goodest","most good"],e:"good → better → the best."},
 {t:"superlatif",q:"This is the ___ expensive car in the shop.",b:"most",f:["more","much","very"],e:"Adjectif long : the most + adjectif."},
 {t:"superlatif",q:"Lisa is the ___ girl in the class.",b:"funniest",f:["funnyest","most funny","funnier"],e:"funny → the funniest : le -y devient -iest."},
 {t:"superlatif",q:"The Nile is one of the ___ rivers in the world.",b:"longest",f:["longer","most long","long"],e:"long → the longest."},
 {t:"superlatif",q:"It's the ___ film I have ever seen : I hated it !",b:"worst",f:["baddest","most bad","worse"],e:"bad → worse → the worst."},
 {t:"modaux",q:"You ___ wear a helmet on a motorbike : it's the law.",b:"must",f:["musts","must to","are must"],e:"must + base verbale : obligation. Must ne prend jamais de -s."},
 {t:"modaux",q:"You ___ run in the corridors ! It's forbidden.",b:"mustn't",f:["don't must","must","haven't"],e:"mustn't = interdiction."},
 {t:"modaux",q:"I ___ get up early tomorrow : I have a test.",b:"have to",f:["has to","must to","having to"],e:"have to = obligation ; avec I : have to."},
 {t:"modaux",q:"She ___ to do her homework before dinner.",b:"has",f:["have","must","is"],e:"3e personne du singulier : has to."},
 {t:"modaux",q:"You look tired : you ___ go to bed.",b:"should",f:["must to","shoulds","can to"],e:"should = conseil."},
 {t:"modaux",q:"When I was five, I ___ read, but now I can.",b:"couldn't",f:["can't","mustn't","shouldn't"],e:"could / couldn't = capacité dans le passé."},
 {t:"futur",q:"Tomorrow, it ___ be sunny.",b:"will",f:["wills","is will","does"],e:"will + base verbale pour une prévision."},
 {t:"futur",q:"Look at those black clouds ! It's ___ to rain.",b:"going",f:["will","go","goes"],e:"be going to : prévision fondée sur un indice visible."},
 {t:"futur",q:"Next year, I ___ be thirteen.",b:"will",f:["am","going","shall to"],e:"will pour un fait futur certain."},
 {t:"futur",q:"They are going ___ visit Paris this summer.",b:"to",f:["for","at","in"],e:"be going to + base verbale : un projet décidé."},
 {t:"futur",q:"He ___ come to the party : he's ill.",b:"won't",f:["willn't","doesn't will","not will"],e:"will not = won't."},
 {t:"futur",q:"___ you help me tomorrow ?",b:"Will",f:["Do","Are","Going"],e:"Question au futur : Will + sujet + base verbale."},
 {t:"presperf",q:"I ___ visited London three times.",b:"have",f:["has","am","did"],e:"Present perfect : have/has + participe passé."},
 {t:"presperf",q:"She ___ finished her homework.",b:"has",f:["have","is","did"],e:"3e personne du singulier : has."},
 {t:"presperf",q:"Have you ever ___ sushi ?",b:"eaten",f:["ate","eat","eating"],e:"eat → ate → eaten : on utilise le participe passé."},
 {t:"presperf",q:"We have ___ this film twice.",b:"seen",f:["saw","see","seeing"],e:"see → saw → seen."},
 {t:"presperf",q:"___ you ever been to Scotland ?",b:"Have",f:["Did","Are","Has"],e:"Question : Have + sujet + participe passé (ever = déjà)."},
 {t:"presperf",q:"He has never ___ in a plane.",b:"flown",f:["flew","fly","flied"],e:"fly → flew → flown."},
 {t:"frequence",q:"Quel adverbe signifie « toujours » ?",b:"always",f:["never","often","sometimes"],e:"always (toujours), usually (d'habitude), often (souvent), sometimes (parfois), never (jamais)."},
 {t:"frequence",q:"Quel adverbe signifie « jamais » ?",b:"never",f:["always","often","usually"],e:"never est déjà négatif : pas besoin de not."},
 {t:"frequence",q:"Quel adverbe signifie « souvent » ?",b:"often",f:["never","sometimes","always"],e:"I often play tennis = je joue souvent au tennis."},
 {t:"frequence",q:"Choisis la phrase correcte :",b:"I always get up at seven.",f:["I get always up at seven.","I get up always at seven.","Always get I up at seven."],e:"L'adverbe de fréquence se place avant le verbe conjugué."},
 {t:"frequence",q:"Choisis la phrase correcte :",b:"She is never late.",f:["She never late is.","Never she is late.","She is late never is."],e:"Avec be, l'adverbe de fréquence se place après le verbe."},
 {t:"frequence",q:"How often do you play tennis ? — ___",b:"Twice a week.",f:["Since two weeks.","For a week.","Two weeks ago."],e:"How often = à quelle fréquence. Once, twice, three times a week…"},
 {t:"prepositions",q:"My birthday is ___ May.",b:"in",f:["on","at","to"],e:"in + mois, saison, année."},
 {t:"prepositions",q:"The lesson starts ___ nine o'clock.",b:"at",f:["in","on","to"],e:"at + heure."},
 {t:"prepositions",q:"We have English ___ Monday.",b:"on",f:["in","at","to"],e:"on + jour."},
 {t:"prepositions",q:"The cat is ___ the table and the chair.",b:"between",f:["behind","under","in"],e:"between = entre deux choses."},
 {t:"prepositions",q:"La banque est à côté de la poste : The bank is ___ the post office.",b:"next to",f:["next","near of","beside of"],e:"next to = à côté de."},
 {t:"prepositions",q:"Le ballon est sous le lit : The ball is ___ the bed.",b:"under",f:["on","above","over"],e:"under = sous ; on = sur."},
 {t:"culture",q:"Quelle est la capitale de l'Écosse ?",b:"Edinburgh",f:["Glasgow","Cardiff","Dublin"],e:"Cardiff est la capitale du pays de Galles ; Dublin celle de l'Irlande."},
 {t:"culture",q:"Quel jour les Américains fêtent-ils l'Independence Day ?",b:"on the 4th of July",f:["on the 14th of July","on the 25th of December","on the 1st of May"],e:"Les États-Unis ont déclaré leur indépendance le 4 juillet 1776."},
 {t:"culture",q:"Combien d'États comptent les États-Unis ?",b:"50",f:["13","52","48"],e:"Le drapeau, the Stars and Stripes, porte 50 étoiles."},
 {t:"culture",q:"Quelle est la capitale de l'Australie ?",b:"Canberra",f:["Sydney","Melbourne","Wellington"],e:"Sydney est la plus grande ville, mais la capitale est Canberra."},
 {t:"culture",q:"Big Ben se trouve à :",b:"London",f:["New York","Edinburgh","Dublin"],e:"C'est la cloche de la tour de l'horloge du palais de Westminster."},
 {t:"culture",q:"Que fête-t-on au Royaume-Uni le 5 novembre ?",b:"Bonfire Night (Guy Fawkes Night)",f:["Thanksgiving","Halloween","Independence Day"],e:"On allume des feux et des feux d'artifice en souvenir du complot des poudres de 1605."},
 {t:"culture",q:"Thanksgiving est fêté aux États-Unis en :",b:"November",f:["July","December","March"],e:"Le quatrième jeudi de novembre."},
 {t:"vocab",q:"Comment dit-on « tourner à gauche » ?",b:"turn left",f:["turn right","go straight on","go back"],e:"left = gauche ; right = droite ; straight on = tout droit."},
 {t:"vocab",q:"Comment dit-on « aller tout droit » ?",b:"go straight on",f:["turn left","cross the street","go past"],e:"Go straight on, then turn right."},
 {t:"vocab",q:"Halloween a lieu le :",b:"31st October",f:["1st November","25th December","14th February"],e:"La veille de la Toussaint."},
 {t:"vocab",q:"Que mange-t-on traditionnellement à Noël au Royaume-Uni ?",b:"Christmas pudding",f:["pancakes","hot dogs","fish and chips"],e:"Avec la dinde (turkey) ; on tire aussi des crackers."},
 {t:"vocab",q:"Quel jour vient après Thursday ?",b:"Friday",f:["Tuesday","Wednesday","Saturday"],e:"Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday."},
 {t:"vocab",q:"Comment dit-on « il est trois heures moins le quart » ?",b:"It's a quarter to three",f:["It's a quarter past three","It's three and quarter","It's half past three"],e:"quarter to = moins le quart ; quarter past = et quart."}
];
function exoAnglais(tag){
  const tg=pioche(String(tag).split("+"));
  const t=alea(1,4);
  if((tg==="vocab"&&alea(0,1))||t===1){const p=pioche(VOC_EN),alt=p[1].split("|");return saisie(`Traduis en français : « ${p[0]} »`,alt.concat(alt.map(x=>x.replace(/^(un |une |le |la |les |l'|des )/,""))),`« ${p[0]} » se traduit par « ${alt.join(" » ou « ")} ».`);}
  if(tg==="irreg"||(t===2&&["past","pastcont","presperf"].includes(tg))){const p=pioche(IRREG);
    if(tg==="presperf"||alea(0,2)===0)return saisie(`Donne le participe passé de « to ${p[0]} »`,[p[2]].concat(p[0]==="get"?["gotten"]:[]),`to ${p[0]} → ${p[1]} → ${p[2]} : base verbale, prétérit, participe passé.`);
    return saisie(`Donne le prétérit de « to ${p[0]} »`,[p[1]],`to ${p[0]} → ${p[1]} : verbe irrégulier, à apprendre par cœur.`);}
  const f=GRAM_EN.filter(x=>x.t===tg);const x=pioche(f.length?f:GRAM_EN);
  return qcm(/^(Quel|Comment|Combien|Que|Choisis|Big|Halloween|Thanksgiving|La banque|Le ballon)/.test(x.q)?x.q:`Complète : ${x.q}`,x.b,x.f,x.e);
}

/* =========================================================
   6. SCIENCES : SVT, PHYSIQUE-CHIMIE, TECHNOLOGIE
   ========================================================= */
const BANQUE_S=[
 {t:"matiere",q:"Lors d'un changement d'état, la masse :",b:"se conserve",f:["augmente","diminue","devient nulle"],e:"La quantité de matière ne change pas : seul l'état change."},
 {t:"matiere",q:"Le passage de l'état solide à l'état liquide s'appelle :",b:"la fusion",f:["la solidification","la vaporisation","la liquéfaction"],e:"Solide → liquide : fusion. Liquide → solide : solidification."},
 {t:"matiere",q:"Le passage de l'état gazeux à l'état liquide s'appelle :",b:"la liquéfaction",f:["la fusion","la solidification","la vaporisation"],e:"On parle aussi de condensation liquide : c'est la buée sur une vitre froide."},
 {t:"matiere",q:"Pendant la solidification de l'eau pure, la température :",b:"reste constante, à 0 °C",f:["augmente","descend sans arrêt","monte à 100 °C"],e:"Pour un corps pur, la température reste fixe pendant le changement d'état : c'est un palier."},
 {t:"matiere",q:"Quand l'eau liquide se transforme en glace, son volume :",b:"augmente",f:["diminue","ne change pas","devient nul"],e:"C'est pourquoi une bouteille pleine d'eau peut éclater au congélateur. La masse, elle, ne change pas."},
 {t:"matiere",q:"Un gaz :",b:"occupe tout le volume disponible et peut être comprimé",f:["a une forme propre","a une surface libre horizontale","ne peut pas être comprimé"],e:"Ses molécules sont dispersées et très agitées."},
 {t:"matiere",q:"Un liquide au repos :",b:"prend la forme du récipient et a une surface libre horizontale",f:["garde toujours sa propre forme","occupe tout le volume disponible","peut être fortement comprimé"],e:"Un solide, lui, a une forme propre."},
 {t:"matiere",q:"À quelle température l'eau pure bout-elle, à la pression atmosphérique normale ?",b:"100 °C",f:["0 °C","50 °C","37 °C"],e:"Elle se solidifie à 0 °C et bout à 100 °C."},
 {t:"melanges",q:"Quand on met du sel dans l'eau et qu'il disparaît, on dit que le sel :",b:"se dissout : il est soluble dans l'eau",f:["s'évapore","fond","disparaît définitivement"],e:"Le sel est toujours là : l'eau a un goût salé et la masse totale est conservée."},
 {t:"melanges",q:"L'huile et l'eau sont :",b:"non miscibles",f:["miscibles","solubles l'une dans l'autre","un corps pur"],e:"Elles ne se mélangent pas : l'huile, moins dense, reste au-dessus."},
 {t:"melanges",q:"Une solution saturée est une solution dans laquelle :",b:"on ne peut plus dissoudre de soluté",f:["il n'y a pas de solvant","il n'y a que de l'eau","le soluté s'est évaporé"],e:"Le soluté en trop reste au fond, sans se dissoudre."},
 {t:"melanges",q:"Dans l'eau salée, l'eau est :",b:"le solvant",f:["le soluté","le précipité","le filtrat"],e:"Le solvant dissout ; le soluté (le sel) est dissous."},
 {t:"melanges",q:"Quelle technique permet de récupérer le sel dissous dans l'eau ?",b:"l'évaporation de l'eau",f:["la filtration","la décantation","l'aimantation"],e:"Un filtre ne retient pas le sel dissous ; en évaporant l'eau, le sel réapparaît."},
 {t:"melanges",q:"L'eau minérale est :",b:"un mélange",f:["un corps pur","un gaz","un solide"],e:"Elle contient de l'eau et des sels minéraux dissous."},
 {t:"melanges",q:"Quelle technique sépare le sable de l'eau ?",b:"la filtration",f:["la dissolution","l'évaporation seule","l'agitation"],e:"Le filtre retient le sable ; l'eau qui passe s'appelle le filtrat."},
 {t:"melanges",q:"Le sulfate de cuivre anhydre, blanc, devient bleu en présence :",b:"d'eau",f:["de sel","de dioxygène","de sucre"],e:"C'est le test qui permet de détecter la présence d'eau."},
 {t:"massevol",q:"Un litre d'eau a une masse d'environ :",b:"1 kg",f:["100 g","10 kg","1 g"],e:"1 L d'eau pèse environ 1 kg, soit 1 000 g."},
 {t:"massevol",q:"Un objet de 60 g occupe un volume de 20 cm³. Sa masse volumique est :",b:"3 g/cm³",f:["1 200 g/cm³","40 g/cm³","0,33 g/cm³"],e:"Masse volumique = masse ÷ volume = 60 ÷ 20 = 3 g/cm³."},
 {t:"massevol",q:"Pourquoi un glaçon flotte-t-il sur l'eau liquide ?",b:"la glace a une masse volumique plus faible que l'eau liquide",f:["la glace est plus lourde","le glaçon contient de l'air chaud","l'eau le repousse par magnétisme"],e:"Pour un même volume, la glace est un peu plus légère que l'eau liquide."},
 {t:"massevol",q:"La masse volumique de l'eau liquide vaut environ :",b:"1 g/cm³",f:["10 g/cm³","100 g/cm³","0,1 g/cm³"],e:"Soit 1 kg par litre, ou 1 000 kg/m³."},
 {t:"massevol",q:"Un objet plein coule dans l'eau si :",b:"sa masse volumique est plus grande que celle de l'eau",f:["il est grand","il est coloré","sa masse volumique est plus petite que celle de l'eau"],e:"Le fer (7,9 g/cm³) coule ; le bois sec flotte en général."},
 {t:"massevol",q:"Pour mesurer le volume d'un petit caillou, on peut :",b:"le plonger dans une éprouvette graduée contenant de l'eau",f:["le peser sur une balance","mesurer sa longueur","le chauffer"],e:"La hausse du niveau de l'eau donne le volume du caillou."},
 {t:"massevol",q:"1 cm³ correspond à :",b:"1 mL",f:["1 L","1 cL","1 dL"],e:"1 L = 1 000 mL = 1 000 cm³."},
 {t:"respiration",q:"Quel gaz notre organisme prélève-t-il dans l'air ?",b:"le dioxygène",f:["le dioxyde de carbone","l'hélium","la vapeur d'eau"],e:"Le dioxygène passe dans le sang et va jusqu'aux organes."},
 {t:"respiration",q:"Par rapport à l'air inspiré, l'air expiré contient plus de :",b:"dioxyde de carbone",f:["dioxygène","azote","fumée"],e:"Les organes rejettent du dioxyde de carbone, éliminé par les poumons."},
 {t:"respiration",q:"Dans les poumons, les échanges de gaz avec le sang se font au niveau :",b:"des alvéoles pulmonaires",f:["de la trachée","du larynx","des fosses nasales"],e:"Les alvéoles ont une paroi très fine entourée de vaisseaux sanguins."},
 {t:"respiration",q:"Quel est le trajet de l'air inspiré ?",b:"fosses nasales, trachée, bronches, alvéoles",f:["bronches, trachée, alvéoles, bouche","œsophage, estomac, poumons","alvéoles, bronches, trachée, nez"],e:"L'air descend par la trachée puis se répartit dans les bronches jusqu'aux alvéoles."},
 {t:"respiration",q:"Comment respire un poisson ?",b:"avec des branchies, qui prélèvent le dioxygène dissous dans l'eau",f:["avec des poumons","il ne respire pas","par la peau seulement"],e:"Les branchies sont l'organe respiratoire de nombreux animaux aquatiques."},
 {t:"respiration",q:"L'eau de chaux se trouble en présence de :",b:"dioxyde de carbone",f:["dioxygène","eau","azote"],e:"On souffle dans l'eau de chaux avec une paille : elle devient trouble."},
 {t:"respiration",q:"Pendant un effort physique, la fréquence respiratoire :",b:"augmente",f:["diminue","reste identique","s'arrête"],e:"Les muscles ont besoin de plus de dioxygène."},
 {t:"respiration",q:"Comment respire un insecte ?",b:"par des trachées, de petits tubes qui s'ouvrent sur le côté du corps",f:["avec des branchies","avec des poumons","il ne respire pas"],e:"Les trachées amènent l'air directement aux organes."},
 {t:"digestion",q:"La digestion transforme les aliments en :",b:"nutriments",f:["déchets seulement","dioxygène","sang"],e:"Les nutriments sont de petites molécules qui passent dans le sang."},
 {t:"digestion",q:"Où les nutriments passent-ils dans le sang ?",b:"dans l'intestin grêle",f:["dans l'estomac","dans l'œsophage","dans la bouche"],e:"La paroi de l'intestin grêle est très longue et plissée : c'est l'absorption intestinale."},
 {t:"digestion",q:"Quel est le bon ordre du tube digestif ?",b:"bouche, œsophage, estomac, intestin grêle, gros intestin",f:["bouche, estomac, œsophage, gros intestin, intestin grêle","bouche, intestin grêle, estomac, œsophage","œsophage, bouche, estomac, intestin grêle"],e:"Les aliments parcourent ces organes dans cet ordre."},
 {t:"digestion",q:"Quel est le rôle des enzymes digestives ?",b:"découper les aliments en nutriments",f:["colorer les aliments","transporter le dioxygène","fabriquer des os"],e:"On les trouve dans la salive, le suc gastrique, le suc pancréatique…"},
 {t:"digestion",q:"L'eau iodée prend une couleur bleu foncé (presque noire) en présence :",b:"d'amidon",f:["de sucre","d'eau","de sel"],e:"C'est le test de l'amidon, présent dans le pain ou les pâtes."},
 {t:"digestion",q:"La salive contient une enzyme qui commence la digestion :",b:"de l'amidon",f:["du sel","de l'eau","des fibres"],e:"Si on mâche longtemps du pain, il prend un goût sucré."},
 {t:"digestion",q:"Les milliards de bactéries qui vivent dans notre intestin forment :",b:"le microbiote intestinal",f:["une maladie","le sang","l'appareil respiratoire"],e:"Ces micro-organismes nous aident à digérer certains aliments et nous protègent."},
 {t:"digestion",q:"Les aliments qui ne sont pas digérés :",b:"sont rejetés sous forme d'excréments",f:["passent dans le sang","vont dans les poumons","restent toujours dans l'estomac"],e:"Les fibres, par exemple, ne sont pas absorbées."},
 {t:"ecosysteme",q:"Un écosystème est formé :",b:"d'un milieu de vie et des êtres vivants qui y vivent",f:["seulement des animaux","seulement des roches","d'une seule espèce"],e:"Par exemple une forêt, une mare ou un récif de corail."},
 {t:"ecosysteme",q:"Dans une chaîne alimentaire, les végétaux chlorophylliens sont :",b:"des producteurs",f:["des consommateurs","des décomposeurs","des prédateurs"],e:"Ils fabriquent leur matière grâce à la lumière."},
 {t:"ecosysteme",q:"Les champignons et bactéries du sol qui transforment la matière morte en matière minérale sont :",b:"des décomposeurs",f:["des producteurs","des prédateurs","des herbivores"],e:"Ils recyclent la matière : les sels minéraux nourrissent ensuite les plantes."},
 {t:"ecosysteme",q:"Dans la chaîne « herbe → lapin → renard », le lapin est :",b:"un consommateur qui mange un producteur",f:["un producteur","un décomposeur","un prédateur du renard"],e:"La flèche signifie « est mangé par »."},
 {t:"ecosysteme",q:"Un réseau alimentaire (ou réseau trophique) est :",b:"l'ensemble des chaînes alimentaires reliées d'un milieu",f:["un filet de pêche","une seule chaîne alimentaire","la liste des plantes"],e:"Un animal mange souvent plusieurs espèces."},
 {t:"ecosysteme",q:"Que peut provoquer la disparition d'une espèce dans un écosystème ?",b:"un déséquilibre pour les autres espèces",f:["aucun changement","l'apparition immédiate d'une nouvelle espèce","plus de nourriture pour tous"],e:"Les espèces sont liées entre elles par les relations alimentaires."},
 {t:"ecosysteme",q:"Une espèce exotique envahissante est :",b:"une espèce introduite par l'être humain qui prolifère au détriment des espèces locales",f:["une espèce disparue","une espèce protégée","une plante de jardin"],e:"Le frelon asiatique en est un exemple en France."},
 {t:"ecosysteme",q:"Quelle action humaine menace le plus la biodiversité ?",b:"la destruction des milieux naturels",f:["la création de réserves","la plantation de haies","le tri des déchets"],e:"Urbanisation, déforestation et agriculture intensive détruisent les habitats."},
 {t:"geologie",q:"Le granite est une roche :",b:"magmatique, formée par le refroidissement lent d'un magma en profondeur",f:["sédimentaire formée de coquillages","formée par l'évaporation de l'eau de mer","fabriquée par l'être humain"],e:"Ses cristaux sont bien visibles car il a refroidi lentement."},
 {t:"geologie",q:"Le calcaire est une roche :",b:"sédimentaire",f:["magmatique","volcanique","métallique"],e:"Il se forme par accumulation de sédiments, souvent des restes de coquilles."},
 {t:"geologie",q:"Le basalte est une roche :",b:"volcanique, issue d'une lave refroidie rapidement",f:["sédimentaire","formée de sable collé","formée de sel"],e:"Il est sombre, avec de très petits cristaux."},
 {t:"geologie",q:"L'érosion, c'est :",b:"l'usure et la destruction des roches par l'eau, le vent ou la glace",f:["la formation d'un volcan","la fabrication du granite","la fonte d'un métal"],e:"Les débris arrachés sont ensuite transportés puis déposés."},
 {t:"geologie",q:"Les sédiments transportés par une rivière se déposent surtout :",b:"quand le courant ralentit",f:["quand le courant accélère","en haut des montagnes","jamais"],e:"Ils s'accumulent en couches, par exemple à l'embouchure."},
 {t:"geologie",q:"Comment reconnaître une roche calcaire ?",b:"elle fait effervescence avec de l'acide chlorhydrique dilué",f:["elle est attirée par un aimant","elle brille dans le noir","elle fond dans l'eau"],e:"Des bulles de dioxyde de carbone se forment."},
 {t:"geologie",q:"Un fossile est :",b:"un reste ou une trace d'être vivant conservé dans une roche",f:["une roche volcanique","un cristal de sel","un métal précieux"],e:"On le trouve surtout dans les roches sédimentaires."},
 {t:"geologie",q:"Une roche perméable :",b:"laisse passer l'eau",f:["empêche toujours l'eau de passer","flotte sur l'eau","se dissout dans l'eau"],e:"Le sable est perméable ; l'argile mouillée est imperméable."},
 {t:"electricite",q:"Dans un circuit en série, si on ajoute une lampe identique, les lampes brillent :",b:"moins fort",f:["plus fort","pareil","elles s'éteignent toutes"],e:"Le courant est le même partout dans une boucle unique et il diminue quand on ajoute un récepteur."},
 {t:"electricite",q:"Dans un circuit en dérivation, si une lampe grille, les autres :",b:"continuent de briller",f:["s'éteignent toutes","explosent","clignotent"],e:"Chaque lampe est dans sa propre boucle avec le générateur."},
 {t:"electricite",q:"Un court-circuit se produit quand :",b:"les deux bornes d'un dipôle sont reliées par un simple fil",f:["l'interrupteur est ouvert","la pile est neuve","on ajoute une lampe en série"],e:"Le courant passe par le fil sans traverser le dipôle ; cela peut être dangereux."},
 {t:"electricite",q:"Quel dipôle fournit le courant dans un circuit ?",b:"le générateur, par exemple une pile",f:["la lampe","l'interrupteur","le fil"],e:"Les lampes et moteurs sont des récepteurs."},
 {t:"electricite",q:"Un matériau qui laisse passer le courant électrique est :",b:"conducteur",f:["isolant","transparent","magnétique"],e:"Les métaux sont conducteurs ; le plastique, le verre et le bois sec sont isolants."},
 {t:"electricite",q:"À l'extérieur du générateur, le sens conventionnel du courant va :",b:"de la borne + vers la borne −",f:["de la borne − vers la borne +","dans les deux sens à la fois","toujours de gauche à droite"],e:"C'est une convention utilisée sur les schémas."},
 {t:"electricite",q:"Une diode électroluminescente (DEL) :",b:"ne laisse passer le courant que dans un sens",f:["laisse passer le courant dans les deux sens","produit du courant","est un isolant"],e:"Branchée à l'envers, elle ne s'allume pas."},
 {t:"electricite",q:"Pourquoi ne faut-il jamais toucher l'intérieur d'une prise électrique ?",b:"la tension du secteur (230 V) est dangereuse pour le corps",f:["parce que c'est sale","parce que le plastique est fragile","il n'y a aucun danger"],e:"Le corps humain conduit le courant : risque d'électrisation, voire d'électrocution."},
 {t:"lumiere",q:"Dans un milieu homogène et transparent, la lumière se propage :",b:"en ligne droite",f:["en zigzag","en cercle","uniquement vers le bas"],e:"On représente son trajet par un rayon lumineux."},
 {t:"lumiere",q:"Une source primaire de lumière :",b:"produit sa propre lumière, comme le Soleil",f:["renvoie la lumière reçue, comme la Lune","absorbe toute la lumière","n'existe pas"],e:"La Lune est un objet diffusant : elle renvoie la lumière du Soleil."},
 {t:"lumiere",q:"Pour qu'on voie un objet, il faut :",b:"que de la lumière venant de cet objet entre dans l'œil",f:["que l'œil envoie de la lumière vers l'objet","que l'objet soit chaud","qu'il fasse nuit"],e:"Dans le noir complet, on ne voit rien."},
 {t:"lumiere",q:"L'ombre portée d'un objet opaque se forme :",b:"derrière l'objet, là où la lumière n'arrive pas",f:["devant l'objet, face à la lampe","sur la lampe","partout autour de l'objet"],e:"L'objet opaque bloque la lumière qui se propage en ligne droite."},
 {t:"lumiere",q:"La vitesse de la lumière dans le vide est d'environ :",b:"300 000 km/s",f:["300 km/h","340 m/s","3 000 km/s"],e:"340 m/s, c'est environ la vitesse du son dans l'air."},
 {t:"lumiere",q:"Un objet transparent :",b:"laisse passer la lumière et on voit nettement à travers",f:["arrête toute la lumière","produit de la lumière","ne laisse passer aucun rayon"],e:"Translucide : laisse passer la lumière, mais on ne voit pas nettement à travers."},
 {t:"lumiere",q:"Une éclipse de Lune se produit quand :",b:"la Lune passe dans l'ombre de la Terre",f:["la Lune passe devant le Soleil","le Soleil s'éteint","la Terre passe dans l'ombre de la Lune"],e:"Quand la Lune passe devant le Soleil, c'est une éclipse de Soleil."},
 {t:"lumiere",q:"La lumière du Soleil met environ 8 minutes pour arriver sur Terre. Cela montre que :",b:"la lumière va très vite mais pas instantanément",f:["la lumière est lente","le Soleil est tout près","la lumière ne se propage pas dans le vide"],e:"Elle parcourt environ 150 millions de km à 300 000 km/s."},
 {t:"techno",q:"Le cahier des charges d'un objet technique précise :",b:"les besoins et les contraintes que l'objet doit respecter",f:["le prix de vente au magasin","la couleur préférée du client","le nom de l'inventeur"],e:"On l'écrit avant de chercher des solutions techniques."},
 {t:"techno",q:"Un moteur électrique convertit :",b:"l'énergie électrique en énergie mécanique (mouvement)",f:["l'énergie mécanique en lumière","la chaleur en électricité","le son en mouvement"],e:"C'est la fonction « convertir » de la chaîne d'énergie."},
 {t:"techno",q:"Dans une chaîne d'information, un capteur sert à :",b:"acquérir une information",f:["produire de l'énergie","faire bouger l'objet","stocker l'objet"],e:"Exemples : capteur de lumière, de température, de présence."},
 {t:"techno",q:"Dans une chaîne d'énergie, la batterie d'un vélo électrique sert à :",b:"stocker et fournir l'énergie (alimenter)",f:["acquérir une information","transmettre le mouvement à la roue","communiquer avec le cycliste"],e:"Chaîne d'énergie : alimenter, distribuer, convertir, transmettre."},
 {t:"techno",q:"Un prototype est :",b:"un premier exemplaire pour tester un objet avant de le fabriquer en série",f:["un objet cassé","le dernier objet fabriqué","un dessin au crayon"],e:"Il permet de vérifier que l'objet répond au cahier des charges."},
 {t:"techno",q:"Pourquoi utilise-t-on souvent l'aluminium pour un cadre de vélo ?",b:"il est léger et ne rouille pas",f:["il est très lourd","il est transparent","il est isolant thermique"],e:"Le choix d'un matériau dépend de ses propriétés et de l'usage."},
 {t:"techno",q:"Le recyclage d'un objet en fin de vie permet :",b:"de réutiliser ses matériaux et d'économiser des ressources",f:["de produire plus de déchets","d'augmenter la pollution","de rendre l'objet neuf sans rien faire"],e:"On pense au cycle de vie d'un objet dès sa conception."},
 {t:"techno",q:"Un réseau informatique permet :",b:"à des appareils d'échanger des informations",f:["de recharger des piles","de produire de l'électricité","de chauffer une maison"],e:"Internet est un réseau mondial de réseaux."}
];

/* =========================================================
   7. HISTOIRE-GÉOGRAPHIE ET EMC
   ========================================================= */
const BANQUE_H=[
 {t:"reperes",q:"L'année 476 appartient au :",b:"Ve siècle",f:["IVe siècle","VIe siècle","XLVIe siècle"],e:"De 401 à 500, c'est le Ve siècle. En 476, l'Empire romain d'Occident disparaît : c'est le début du Moyen Âge."},
 {t:"reperes",q:"L'année 1492 appartient au :",b:"XVe siècle",f:["XIVe siècle","XVIe siècle","XIIe siècle"],e:"De 1401 à 1500, c'est le XVe siècle."},
 {t:"reperes",q:"Le Moyen Âge s'étend environ :",b:"de la fin du Ve siècle à la fin du XVe siècle",f:["de −3000 à 476","de 1789 à aujourd'hui","du XVIe au XVIIIe siècle"],e:"On retient souvent 476 et 1492 comme dates de début et de fin."},
 {t:"reperes",q:"Le XIIe siècle va de :",b:"1101 à 1200",f:["1200 à 1299","1001 à 1100","1201 à 1300"],e:"Un siècle commence à l'année 1 et finit à l'année 100 : le XIIe siècle va de 1101 à 1200."},
 {t:"reperes",q:"La période qui suit le Moyen Âge s'appelle :",b:"l'époque moderne",f:["l'Antiquité","la Préhistoire","l'époque contemporaine"],e:"Les Temps modernes vont de la fin du XVe siècle à la Révolution française de 1789."},
 {t:"reperes",q:"Louis XIV commence à gouverner seul en 1661, c'est-à-dire au :",b:"XVIIe siècle",f:["XVIe siècle","XVIIIe siècle","XVe siècle"],e:"De 1601 à 1700 : XVIIe siècle."},
 {t:"byzance",q:"Quelle était la capitale de l'Empire byzantin ?",b:"Constantinople",f:["Rome","Aix-la-Chapelle","Bagdad"],e:"Aujourd'hui, c'est la ville d'Istanbul, en Turquie."},
 {t:"byzance",q:"Charlemagne est couronné empereur :",b:"en 800, à Rome",f:["en 476, à Constantinople","en 1515, à Paris","en 987, à Reims"],e:"C'est le pape qui le couronne, le jour de Noël de l'an 800."},
 {t:"byzance",q:"En 1054, le schisme sépare :",b:"les chrétiens catholiques (Rome) et les chrétiens orthodoxes (Constantinople)",f:["les chrétiens et les musulmans","les catholiques et les protestants","les Grecs et les Romains"],e:"Les deux Églises chrétiennes ne reconnaissent plus la même autorité."},
 {t:"byzance",q:"Quel empereur byzantin a fait construire la basilique Sainte-Sophie au VIe siècle ?",b:"Justinien",f:["Charlemagne","Constantin","Louis IX"],e:"Elle est achevée en 537 à Constantinople."},
 {t:"byzance",q:"Quelle était la capitale préférée de Charlemagne ?",b:"Aix-la-Chapelle",f:["Paris","Constantinople","Rome"],e:"Il y fait construire un palais et une chapelle."},
 {t:"byzance",q:"Constantinople est prise par les Ottomans en :",b:"1453",f:["800","1054","1789"],e:"C'est la fin de l'Empire byzantin."},
 {t:"byzance",q:"Les « missi dominici » de Charlemagne étaient :",b:"des envoyés chargés de contrôler l'Empire",f:["des moines copistes","des soldats ennemis","des marchands"],e:"Ils allaient par deux, un comte et un évêque, pour vérifier que les ordres étaient appliqués."},
 {t:"islam",q:"L'islam naît au VIIe siècle :",b:"en Arabie",f:["en Égypte","en Espagne","en Grèce"],e:"Autour des villes de La Mecque et de Médine."},
 {t:"islam",q:"Le prophète de l'islam est :",b:"Mahomet (Muhammad)",f:["Moïse","Charlemagne","Justinien"],e:"Selon la tradition musulmane, Dieu (Allah) lui a révélé le Coran."},
 {t:"islam",q:"L'Hégire, en 622, désigne :",b:"le départ de Mahomet de La Mecque pour Médine",f:["la mort de Mahomet","la prise de Jérusalem","la fondation de Bagdad"],e:"C'est le point de départ du calendrier musulman."},
 {t:"islam",q:"Le livre sacré des musulmans est :",b:"le Coran",f:["la Bible","la Torah","l'Iliade"],e:"Il est écrit en arabe."},
 {t:"islam",q:"Un calife est :",b:"le successeur de Mahomet, chef politique et religieux",f:["un moine chrétien","un empereur byzantin","un marchand italien"],e:"Les califes dirigent l'empire islamique après la mort de Mahomet en 632."},
 {t:"islam",q:"Bagdad, fondée en 762, était la capitale des califes :",b:"abbassides",f:["omeyyades de Cordoue","ottomans","byzantins"],e:"C'était une très grande ville, centre de savoir et de commerce."},
 {t:"islam",q:"Combien y a-t-il de piliers de l'islam ?",b:"5",f:["3","7","10"],e:"La profession de foi, la prière, l'aumône, le jeûne du ramadan et le pèlerinage à La Mecque."},
 {t:"islam",q:"La première croisade est lancée en 1095 par :",b:"le pape Urbain II",f:["Charlemagne","Mahomet","Louis XIV"],e:"Il appelle les chrétiens d'Occident à aller prendre Jérusalem."},
 {t:"islam",q:"Au Moyen Âge, Cordoue, en al-Andalus (Espagne), était :",b:"une grande ville musulmane, centre de savoir",f:["la capitale des Capétiens","un petit village chrétien","une ville byzantine"],e:"On y traduisait et étudiait les savants grecs ; savoirs et produits circulaient entre les mondes."},
 {t:"feodalite",q:"Un vassal reçoit de son seigneur :",b:"un fief, en échange de sa fidélité et de son aide",f:["un salaire mensuel","un titre de roi","rien du tout"],e:"Le fief est souvent une terre. Le vassal doit aide militaire et conseil."},
 {t:"feodalite",q:"La cérémonie par laquelle le vassal se lie à son seigneur s'appelle :",b:"l'hommage",f:["l'adoubement","le sacre","la croisade"],e:"Le vassal place ses mains dans celles du seigneur et lui jure fidélité."},
 {t:"feodalite",q:"La seigneurie est :",b:"le domaine sur lequel un seigneur exerce son pouvoir",f:["une église","un marché","une ville libre"],e:"Elle comprend la réserve du seigneur et les terres confiées aux paysans."},
 {t:"feodalite",q:"Les corvées sont :",b:"des journées de travail gratuit que les paysans doivent au seigneur",f:["des impôts payés au roi","des fêtes de village","des prières"],e:"Ils travaillent sur la réserve du seigneur, réparent les chemins…"},
 {t:"feodalite",q:"Au Moyen Âge, on distingue trois ordres :",b:"ceux qui prient, ceux qui combattent, ceux qui travaillent",f:["les rois, les reines, les princes","les riches, les pauvres, les marchands","les Grecs, les Romains, les Francs"],e:"Clergé, nobles (chevaliers) et paysans."},
 {t:"feodalite",q:"Le donjon est :",b:"la tour principale du château fort",f:["la prison sous l'église","le marché du village","le moulin du seigneur"],e:"C'est la partie la mieux défendue, où vit souvent le seigneur."},
 {t:"feodalite",q:"Entre le XIe et le XIIIe siècle, les campagnes d'Occident connaissent :",b:"des défrichements et une hausse de la population",f:["une disparition des villages","l'arrivée des tracteurs","une baisse continue de la population"],e:"De nouvelles terres sont cultivées et les outils progressent (charrue, moulins)."},
 {t:"eglise",q:"La dîme est :",b:"un impôt versé à l'Église, environ un dixième des récoltes",f:["une taxe sur le sel","une fête religieuse","un impôt versé au roi d'Angleterre"],e:"Elle sert à entretenir le clergé et les églises."},
 {t:"eglise",q:"Les moines vivent :",b:"dans un monastère ou une abbaye",f:["dans un château fort","au palais du roi","dans une mosquée"],e:"Ils prient, travaillent et étudient selon une règle."},
 {t:"eglise",q:"L'abbaye de Cluny a été fondée en :",b:"910",f:["1789","476","1453"],e:"Elle devient l'une des plus puissantes abbayes d'Occident."},
 {t:"eglise",q:"Le chef de l'Église catholique est :",b:"le pape",f:["l'empereur byzantin","le calife","le seigneur"],e:"Il réside à Rome."},
 {t:"eglise",q:"Les cathédrales gothiques se reconnaissent à :",b:"leur grande hauteur, leurs vitraux et leurs arcs-boutants",f:["leurs coupoles dorées et leurs minarets","leurs murs très épais et sans fenêtres","leur toit plat"],e:"L'art gothique se développe à partir du XIIe siècle."},
 {t:"eglise",q:"L'excommunication est :",b:"l'exclusion d'un chrétien de l'Église",f:["une fête religieuse","un impôt","un pèlerinage"],e:"C'était une sanction très redoutée au Moyen Âge."},
 {t:"eglise",q:"Lequel de ces moments est un sacrement chrétien ?",b:"le baptême",f:["le tournoi","l'hommage","la corvée"],e:"Les sacrements accompagnent la vie du chrétien : baptême, mariage…"},
 {t:"villes",q:"À partir du XIe siècle, les villes d'Occident :",b:"se développent grâce au commerce et à l'artisanat",f:["disparaissent","sont toutes détruites","sont abandonnées pour les campagnes"],e:"Les surplus agricoles et les échanges favorisent l'essor urbain."},
 {t:"villes",q:"Une charte de franchise accorde aux habitants d'une ville :",b:"des libertés et le droit de s'administrer",f:["l'obligation de devenir moines","un château","le droit de faire la guerre au roi"],e:"Elle est souvent obtenue du seigneur contre de l'argent."},
 {t:"villes",q:"Au Moyen Âge, les habitants des villes sont appelés :",b:"des bourgeois",f:["des serfs","des vassaux","des moines"],e:"Le mot vient de « bourg », une ville."},
 {t:"villes",q:"Les foires de Champagne étaient :",b:"de grands marchés où se rencontraient des marchands de toute l'Europe",f:["des fêtes religieuses","des tournois de chevaliers","des batailles"],e:"Elles étaient très actives aux XIIe et XIIIe siècles."},
 {t:"villes",q:"Les artisans d'un même métier se regroupent en :",b:"corporations (ou métiers)",f:["abbayes","croisades","fiefs"],e:"Elles fixent les règles du travail, les prix et la formation des apprentis."},
 {t:"villes",q:"La Hanse est :",b:"une association de villes marchandes d'Europe du Nord",f:["une armée de chevaliers","un ordre de moines","une maladie"],e:"Lübeck en était la ville principale."},
 {t:"royaute",q:"Hugues Capet devient roi des Francs en :",b:"987",f:["800","1214","1515"],e:"Il fonde la dynastie des Capétiens."},
 {t:"royaute",q:"Philippe Auguste remporte la bataille de Bouvines en :",b:"1214",f:["987","1453","1789"],e:"Cette victoire renforce le prestige du roi de France."},
 {t:"royaute",q:"Le roi Louis IX est aussi appelé :",b:"Saint Louis",f:["le Roi-Soleil","le Bel","le Hardi"],e:"Il est réputé pour sa piété et sa justice ; il est canonisé après sa mort."},
 {t:"royaute",q:"La guerre de Cent Ans oppose :",b:"les rois de France et d'Angleterre",f:["les chrétiens et les musulmans","les Français et les Allemands","les Byzantins et les Ottomans"],e:"Elle dure de 1337 à 1453."},
 {t:"royaute",q:"Jeanne d'Arc aide le roi Charles VII. Elle est brûlée à Rouen en :",b:"1431",f:["1214","1492","1515"],e:"Elle avait été capturée puis jugée par un tribunal d'Église favorable aux Anglais."},
 {t:"royaute",q:"Le sacre des rois de France avait lieu traditionnellement à :",b:"Reims",f:["Paris","Versailles","Rome"],e:"Le sacre fait du roi l'élu de Dieu."},
 {t:"royaute",q:"Pour gouverner le royaume, les rois capétiens développent :",b:"une administration, une justice et des impôts royaux",f:["des califats","des républiques","des empires coloniaux"],e:"Baillis et sénéchaux représentent le roi dans les provinces."},
 {t:"decouvertes",q:"En 1492, Christophe Colomb atteint :",b:"l'Amérique (les Antilles)",f:["l'Inde","la Chine","l'Australie"],e:"Il pensait être arrivé en Asie, aux « Indes »."},
 {t:"decouvertes",q:"En 1498, Vasco de Gama atteint l'Inde :",b:"en contournant l'Afrique par le sud",f:["en traversant l'Atlantique vers l'ouest","par la route de la soie à pied","en passant par le pôle Nord"],e:"Il ouvre une route maritime directe vers les épices."},
 {t:"decouvertes",q:"L'expédition de Magellan (1519-1522) réalise :",b:"le premier tour du monde",f:["la découverte de l'Amérique","la conquête de l'Égypte","le premier voyage sur la Lune"],e:"Magellan meurt en route ; seule une partie de l'équipage revient."},
 {t:"decouvertes",q:"Qui a conquis l'Empire aztèque, au Mexique ?",b:"Hernán Cortés",f:["Francisco Pizarro","Christophe Colomb","Magellan"],e:"Pizarro, lui, a conquis l'Empire inca."},
 {t:"decouvertes",q:"La conquête de l'Amérique entraîne chez les Amérindiens :",b:"un effondrement de la population, à cause des maladies, des guerres et du travail forcé",f:["une forte hausse de la population","aucun changement","un départ vers l'Europe"],e:"Les maladies venues d'Europe, comme la variole, ont fait d'énormes ravages."},
 {t:"decouvertes",q:"La traite atlantique désigne :",b:"le commerce d'Africains réduits en esclavage et déportés vers l'Amérique",f:["le commerce des épices","la pêche à la morue","le transport du courrier"],e:"Elle se développe à partir du XVIe siècle."},
 {t:"decouvertes",q:"La caravelle est :",b:"un navire léger utilisé lors des grandes découvertes",f:["un château","un instrument de musique","une carte"],e:"Avec la boussole et l'astrolabe, elle permet la navigation en haute mer."},
 {t:"renaissance",q:"La Renaissance commence d'abord en :",b:"Italie",f:["Angleterre","Russie","Arabie"],e:"Florence est l'une de ses grandes villes."},
 {t:"renaissance",q:"Gutenberg met au point l'imprimerie à caractères mobiles vers :",b:"1450",f:["1250","1650","1850"],e:"Les livres deviennent moins chers et les idées circulent plus vite."},
 {t:"renaissance",q:"Léonard de Vinci a peint :",b:"La Joconde",f:["le plafond de la chapelle Sixtine","la Galerie des Glaces","les vitraux de Chartres"],e:"Il était peintre, ingénieur et savant."},
 {t:"renaissance",q:"Les humanistes, comme Érasme, veulent :",b:"redécouvrir les textes antiques et placer l'être humain au centre de la réflexion",f:["interdire les livres","revenir à la Préhistoire","ne lire que des romans de chevalerie"],e:"Ils apprennent le grec, le latin et l'hébreu pour lire les textes originaux."},
 {t:"renaissance",q:"Quel roi de France a invité Léonard de Vinci et fait construire Chambord ?",b:"François Ier",f:["Louis XIV","Saint Louis","Hugues Capet"],e:"Léonard de Vinci meurt à Amboise en 1519."},
 {t:"renaissance",q:"Copernic affirme que :",b:"la Terre tourne autour du Soleil",f:["le Soleil tourne autour de la Terre","la Terre est plate","la Lune est une étoile"],e:"C'est l'héliocentrisme, contraire aux idées de son temps."},
 {t:"renaissance",q:"Michel-Ange a peint le plafond de :",b:"la chapelle Sixtine, au Vatican",f:["Notre-Dame de Paris","Sainte-Sophie","Versailles"],e:"Il était aussi sculpteur et architecte."},
 {t:"reformes",q:"En 1517, Martin Luther critique :",b:"la vente des indulgences par l'Église",f:["les grandes découvertes","l'imprimerie","l'islam"],e:"Les indulgences promettaient le pardon des péchés contre de l'argent."},
 {t:"reformes",q:"Les chrétiens qui suivent Luther ou Calvin sont appelés :",b:"des protestants",f:["des orthodoxes","des musulmans","des moines"],e:"Leurs idées se diffusent grâce à l'imprimerie."},
 {t:"reformes",q:"Pour les protestants, la seule source de la foi est :",b:"la Bible",f:["le pape","les saints","les indulgences"],e:"Chacun doit pouvoir lire la Bible dans sa langue."},
 {t:"reformes",q:"L'édit de Nantes, signé par Henri IV en 1598 :",b:"accorde aux protestants une liberté de culte limitée",f:["interdit le protestantisme","crée l'imprimerie","déclare la guerre à l'Angleterre"],e:"Il met fin aux guerres de Religion en France."},
 {t:"reformes",q:"Le massacre de la Saint-Barthélemy, en 1572, est un massacre :",b:"de protestants à Paris",f:["de chevaliers à Jérusalem","de paysans en Angleterre","de moines à Cluny"],e:"C'est l'un des épisodes les plus violents des guerres de Religion."},
 {t:"reformes",q:"La réponse de l'Église catholique aux protestants, avec le concile de Trente, s'appelle :",b:"la Réforme catholique",f:["la Renaissance","la Révolution","le schisme de 1054"],e:"L'Église corrige certains abus et réaffirme ses dogmes."},
 {t:"reformes",q:"Jean Calvin diffuse ses idées depuis la ville de :",b:"Genève",f:["Rome","Madrid","Bagdad"],e:"Genève devient un grand centre protestant."},
 {t:"louis14",q:"Louis XIV règne de :",b:"1643 à 1715",f:["1515 à 1547","1789 à 1792","987 à 996"],e:"C'est le plus long règne de l'histoire de France : 72 ans."},
 {t:"louis14",q:"Louis XIV installe la cour à Versailles en :",b:"1682",f:["1515","1789","1453"],e:"Le château devient le centre du pouvoir."},
 {t:"louis14",q:"La monarchie de Louis XIV est dite absolue car :",b:"le roi concentre tous les pouvoirs",f:["le peuple élit le roi","le pape gouverne la France","les nobles votent les lois"],e:"Il fait les lois, rend la justice, dirige l'armée et décide des impôts."},
 {t:"louis14",q:"Quel ministre de Louis XIV a développé les manufactures et le commerce ?",b:"Colbert",f:["Richelieu","Luther","Colomb"],e:"Il veut enrichir le royaume en produisant et en vendant plus."},
 {t:"louis14",q:"Quel symbole Louis XIV a-t-il choisi ?",b:"le Soleil",f:["la Lune","le lion","l'aigle"],e:"On le surnomme le Roi-Soleil."},
 {t:"louis14",q:"Louis XIV pensait tenir son pouvoir :",b:"de Dieu",f:["du peuple","du pape uniquement","des élections"],e:"C'est la monarchie de droit divin."},
 {t:"louis14",q:"En 1685, Louis XIV révoque l'édit de Nantes. Cela signifie que :",b:"le protestantisme est interdit en France",f:["tous les Français deviennent protestants","la guerre de Cent Ans recommence","Versailles est détruit"],e:"De nombreux protestants quittent alors le royaume."},
 {t:"louis14",q:"À Versailles, les grands nobles :",b:"vivent à la cour, sous le regard et le contrôle du roi",f:["dirigent le royaume à la place du roi","sont tous emprisonnés","n'ont pas le droit d'entrer"],e:"Le roi les surveille et les récompense : ils ne peuvent plus se révolter facilement."},
 {t:"demographie",q:"Aujourd'hui, la population mondiale dépasse :",b:"8 milliards d'habitants",f:["800 millions d'habitants","2 milliards d'habitants","80 milliards d'habitants"],e:"Le seuil des 8 milliards a été franchi fin 2022."},
 {t:"demographie",q:"Aujourd'hui, la croissance démographique est la plus forte :",b:"en Afrique subsaharienne",f:["en Europe","au Japon","en Amérique du Nord"],e:"Le nombre moyen d'enfants par femme y reste élevé."},
 {t:"demographie",q:"Le taux de natalité, c'est :",b:"le nombre de naissances pour 1 000 habitants en un an",f:["le nombre de décès en un an","le nombre d'habitants au km²","la durée moyenne de la vie"],e:"Le taux de mortalité compte les décès pour 1 000 habitants."},
 {t:"demographie",q:"L'accroissement naturel est :",b:"la différence entre les naissances et les décès",f:["l'arrivée de migrants","la surface d'un pays","le nombre d'enfants par école"],e:"Il est positif quand il y a plus de naissances que de décès."},
 {t:"demographie",q:"Le vieillissement de la population concerne surtout :",b:"l'Europe et le Japon",f:["le Niger et le Mali","l'Afrique centrale","aucun pays"],e:"Ces pays ont peu de naissances et une espérance de vie élevée."},
 {t:"demographie",q:"Quel est aujourd'hui le pays le plus peuplé du monde ?",b:"l'Inde",f:["les États-Unis","la Russie","le Brésil"],e:"L'Inde a dépassé la Chine en 2023, avec plus de 1,4 milliard d'habitants."},
 {t:"demographie",q:"La transition démographique est :",b:"le passage d'une forte natalité et forte mortalité à une faible natalité et faible mortalité",f:["le déplacement des populations vers les villes","la fin de la population humaine","l'arrivée de migrants"],e:"La mortalité baisse en premier, puis la natalité : la population augmente fortement entre les deux."},
 {t:"developpement",q:"L'IDH (indice de développement humain) prend en compte :",b:"la santé, l'éducation et le niveau de vie",f:["seulement la richesse","seulement le nombre d'habitants","la surface du pays"],e:"Il varie de 0 à 1 : plus il est proche de 1, plus le pays est développé."},
 {t:"developpement",q:"Quel pays a un IDH très élevé ?",b:"la Norvège",f:["le Niger","le Tchad","la Somalie"],e:"Les pays nordiques sont parmi les plus développés du monde."},
 {t:"developpement",q:"L'espérance de vie à la naissance est :",b:"le nombre moyen d'années que peut espérer vivre un nouveau-né",f:["l'âge du plus vieil habitant","l'âge de la retraite","le nombre de naissances"],e:"Elle dépasse 80 ans en France mais reste plus faible dans les pays les moins avancés."},
 {t:"developpement",q:"Les inégalités de développement existent :",b:"entre les pays, et aussi à l'intérieur d'un même pays",f:["seulement entre les continents","nulle part","seulement en Europe"],e:"Dans une même ville, il peut y avoir des quartiers riches et des quartiers pauvres."},
 {t:"developpement",q:"Un pays émergent est :",b:"un pays en forte croissance économique, comme le Brésil ou l'Inde",f:["un pays qui sort de la mer","un pays sans habitants","un pays très pauvre sans croissance"],e:"Leur poids dans l'économie mondiale augmente."},
 {t:"developpement",q:"Le développement durable cherche à :",b:"répondre aux besoins d'aujourd'hui sans compromettre ceux des générations futures",f:["produire le plus possible sans limite","arrêter toute activité","consommer plus de pétrole"],e:"Il concilie économie, société et environnement."},
 {t:"ressources",q:"Une ressource renouvelable est une ressource :",b:"qui se reconstitue rapidement à l'échelle humaine, comme le vent",f:["qui ne se reconstitue jamais","qui n'existe qu'en Europe","qui est toujours gratuite"],e:"Le pétrole, le gaz et le charbon mettent des millions d'années à se former : ils ne sont pas renouvelables."},
 {t:"ressources",q:"Le pétrole est une ressource :",b:"non renouvelable",f:["renouvelable","inépuisable","sans impact sur le climat"],e:"Ses réserves sont limitées et sa combustion émet du CO₂."},
 {t:"ressources",q:"Le stress hydrique désigne :",b:"une situation où l'eau disponible ne suffit pas aux besoins",f:["une inondation","une peur de l'eau","une eau trop salée pour nager"],e:"Il touche notamment l'Afrique du Nord et le Moyen-Orient."},
 {t:"ressources",q:"Quelle activité consomme le plus d'eau douce dans le monde ?",b:"l'agriculture (l'irrigation)",f:["la toilette","les piscines","la cuisine"],e:"Elle représente environ 70 % de l'eau douce prélevée."},
 {t:"ressources",q:"L'insécurité alimentaire, c'est :",b:"ne pas avoir accès en permanence à une nourriture suffisante et saine",f:["manger trop de sucre","avoir peur de cuisiner","ne pas aimer les légumes"],e:"Elle touche encore des centaines de millions de personnes."},
 {t:"ressources",q:"Quelle énergie est renouvelable ?",b:"l'énergie hydraulique",f:["le charbon","le pétrole","le gaz naturel"],e:"Elle utilise la force de l'eau, par exemple avec un barrage."},
 {t:"ressources",q:"Le dessalement de l'eau de mer :",b:"permet d'obtenir de l'eau douce mais consomme beaucoup d'énergie",f:["est gratuit et sans impact","rend l'eau plus salée","est interdit partout"],e:"Il est très utilisé dans les pays du Golfe."},
 {t:"ressources",q:"L'agriculture intensive :",b:"augmente les rendements mais peut polluer les sols et l'eau",f:["n'utilise jamais d'engrais","produit très peu","est sans effet sur l'environnement"],e:"L'agroécologie cherche à produire autrement en respectant l'environnement."},
 {t:"risques",q:"Un risque naturel, c'est :",b:"la rencontre d'un aléa naturel et d'enjeux (habitants, bâtiments)",f:["un phénomène qui touche un désert vide","une catastrophe inventée","une simple averse"],e:"Un séisme dans une zone vide n'est pas un risque pour les humains."},
 {t:"risques",q:"Un aléa est :",b:"un phénomène naturel potentiellement dangereux, comme un séisme",f:["une ville protégée","une assurance","un plan d'évacuation"],e:"Séisme, cyclone, inondation, éruption volcanique…"},
 {t:"risques",q:"Les pays pauvres sont souvent plus vulnérables face aux catastrophes car :",b:"ils ont moins de moyens pour prévenir et secourir",f:["les catastrophes y sont toujours plus fortes","ils n'ont pas d'habitants","ils sont tous situés sur des volcans"],e:"Constructions fragiles, peu de systèmes d'alerte, secours limités."},
 {t:"risques",q:"En France, un plan de prévention des risques (PPR) sert à :",b:"limiter ou interdire les constructions dans les zones dangereuses",f:["construire au bord des rivières","supprimer les pompiers","prévoir la météo"],e:"C'est un outil de prévention fixé par l'État et les communes."},
 {t:"risques",q:"Pour se protéger des séismes, on peut :",b:"construire des bâtiments parasismiques et s'entraîner aux bons gestes",f:["construire plus haut sans règles","ignorer les alertes","vivre dans des caves"],e:"Prévention, alerte et éducation réduisent le nombre de victimes."},
 {t:"risques",q:"Une inondation devient une catastrophe quand :",b:"elle touche des zones habitées et fait de gros dégâts",f:["il pleut un peu","la rivière est basse","elle se produit dans un désert vide"],e:"L'urbanisation des zones inondables augmente le risque."},
 {t:"climat",q:"La principale cause du réchauffement climatique actuel est :",b:"l'augmentation des gaz à effet de serre émis par les activités humaines",f:["l'activité des volcans","le rapprochement de la Terre et du Soleil","la Lune"],e:"Surtout le CO₂, émis par la combustion du charbon, du pétrole et du gaz."},
 {t:"climat",q:"Le principal gaz à effet de serre émis par les activités humaines est :",b:"le dioxyde de carbone (CO₂)",f:["le dioxygène","l'azote","l'hélium"],e:"Le méthane, émis notamment par l'élevage, joue aussi un rôle."},
 {t:"climat",q:"Une conséquence du réchauffement climatique est :",b:"la montée du niveau des mers",f:["la disparition des océans","la fin des saisons","l'arrêt de la rotation de la Terre"],e:"Les glaciers fondent et l'eau des océans se dilate en se réchauffant."},
 {t:"climat",q:"S'adapter au changement climatique en ville, c'est par exemple :",b:"planter des arbres pour limiter les fortes chaleurs",f:["construire plus de parkings","couper les arbres","goudronner les parcs"],e:"La végétation rafraîchit l'air et limite les îlots de chaleur."},
 {t:"climat",q:"Réduire ses émissions de gaz à effet de serre, c'est par exemple :",b:"privilégier le vélo, la marche ou les transports en commun",f:["prendre l'avion pour de courts trajets","laisser les appareils allumés","jeter plus de nourriture"],e:"On parle d'atténuation : limiter les causes du réchauffement."},
 {t:"climat",q:"Les pays et territoires les plus menacés par la montée des eaux sont :",b:"les îles basses et les deltas très peuplés",f:["les hautes montagnes","les déserts de l'intérieur","les plateaux élevés"],e:"Par exemple les Maldives ou le delta du Gange au Bangladesh."},
 {t:"emc",q:"La devise de la République française est :",b:"Liberté, Égalité, Fraternité",f:["Travail, Famille, Patrie","Paix et Prospérité","Un pour tous, tous pour un"],e:"Elle figure sur les bâtiments publics, comme les écoles et les mairies."},
 {t:"emc",q:"Une discrimination, c'est :",b:"traiter quelqu'un moins bien à cause de son origine, son sexe, son handicap…",f:["donner son avis","choisir un sport","voter à une élection"],e:"Les discriminations sont interdites et punies par la loi."},
 {t:"emc",q:"La solidarité, c'est :",b:"s'entraider et soutenir les personnes en difficulté",f:["ne s'occuper que de soi","gagner une compétition","respecter le code de la route"],e:"Associations, bénévolat, Sécurité sociale : la solidarité prend plusieurs formes."},
 {t:"emc",q:"La Sécurité sociale est un exemple de :",b:"solidarité nationale",f:["discrimination","punition","compétition"],e:"Chacun cotise selon ses moyens et reçoit des soins selon ses besoins."},
 {t:"emc",q:"Le principe d'égalité signifie que :",b:"tous les citoyens sont égaux devant la loi",f:["tout le monde a le même salaire","tout le monde a les mêmes goûts","seuls les adultes ont des droits"],e:"Article 1er de la Déclaration de 1789 : les hommes naissent et demeurent libres et égaux en droits."},
 {t:"emc",q:"En cas d'urgence, quel est le numéro d'appel européen ?",b:"112",f:["3018","18 18","911"],e:"En France, on peut aussi appeler le 15 (SAMU), le 17 (police) ou le 18 (pompiers)."},
 {t:"emc",q:"La Déclaration des droits de l'homme et du citoyen date de :",b:"1789",f:["1515","1905","1958"],e:"Elle a été rédigée au début de la Révolution française."},
 {t:"emc",q:"Que faire si un camarade est harcelé, au collège ou sur internet ?",b:"en parler à un adulte de confiance ou appeler le 3018",f:["ne rien dire","partager les messages","répondre par la violence"],e:"Le 3018 est le numéro national gratuit contre le harcèlement."}
];

/* =========================================================
   8. LA SÉANCE HORS CONNEXION
   ========================================================= */
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
  const q=[exoMaths("calcmental"),exoFrancais(sem.tf)];
  // On évite de poser deux fois la même question dans une séance.
  for(let i=0;i<4;i++){let x,essai=0;do{x=exoMatiere(mat,sem);}while(q.some(y=>y.enonce===x.enonce)&&++essai<12);q.push(x);}
  return q;
}

export const programme = { code: "5e", nom: "5e", rituel: "Deux questions de rituel pour commencer : calcul mental et français.", SEMAINES, JOURS, NOM_MAT, PERIODES, matiereDuJour, seanceHorsLigne };
