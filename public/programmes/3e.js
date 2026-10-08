// Programme de 3e : écrit le 08/10/2026 sur le modèle de 6e.js.
// Cycle 4, programmes en vigueur à la rentrée 2026 ; la période 5 prépare le brevet.

/* =========================================================
   1. LE PROGRAMME DE TROISIÈME — 36 SEMAINES
   t = étiquettes de sélection des exercices :
       maths | français | anglais | sciences | histoire-géo
   ========================================================= */
const SEMAINES = [
{n:1,p:1,m:"Nombres relatifs : opérations et priorités (rappels)",f:"La phrase complexe : juxtaposition, coordination, subordination",a:"Present simple et present continuous — parler de soi et de son quotidien",s:"Physique-chimie : la matière est faite d'atomes (noyau, électrons)",h:"La Première Guerre mondiale : une guerre totale (1914-1918)",t:"relatifs|complexe|presents|atomes|ggm1"},
{n:2,p:1,m:"Diviseurs, multiples et critères de divisibilité",f:"L'autobiographie : se raconter, le pacte autobiographique",a:"Past simple — raconter un souvenir, verbes irréguliers",s:"SVT : chromosomes, ADN et gènes",h:"Violences de masse : combattants, civils, génocide des Arméniens",t:"diviseurs|autobio|past|genetique|ggm1"},
{n:3,p:1,m:"Nombres premiers et décomposition en produit de facteurs premiers",f:"La proposition subordonnée relative",a:"Past continuous — décrire une scène passée",s:"Physique-chimie : les ions, des atomes qui ont gagné ou perdu des électrons",h:"La révolution russe et l'URSS de Staline",t:"premiers|relative|pastcont|ions|totalitarismes"},
{n:4,p:1,m:"PGCD et fractions irréductibles",f:"Conjugaison : l'indicatif, temps simples et temps composés",a:"Present perfect — expériences et bilans (ever, never)",s:"SVT : allèles, diversité génétique et hérédité",h:"Le régime nazi, un totalitarisme",t:"fractions|conjug|presentperfect|genetique|totalitarismes"},
{n:5,p:1,m:"Calculer avec les fractions : somme, produit, quotient",f:"Les subordonnées conjonctives : complétives et circonstancielles",a:"Present perfect ou past simple ? for, since, yet, already",s:"Physique-chimie : tests d'identification des ions",h:"La France des années 1930 : crise et Front populaire",t:"fracops|conjonctive|presentperfect|ions|totalitarismes"},
{n:6,p:1,m:"Puissances, puissances de 10 et écriture scientifique",f:"Les figures de style : les reconnaître, les interpréter",a:"Les modaux : must, have to, should, can, could, might",s:"SVT : méiose, fécondation et caryotype",h:"La Seconde Guerre mondiale : une guerre d'anéantissement (1939-1945)",t:"puissances|figures|modals|genetique|ggm2"},
{n:7,p:1,m:"Bilan de la période 1 : nombres et calculs",f:"Bilan : dictée et orthographe grammaticale",a:"Bilan de la période 1",s:"Bilan : atomes, ions et génétique",h:"Bilan : la Grande Guerre et les régimes totalitaires",t:"bilan1|dictee|grammar|atomes|ggm1"},
{n:8,p:2,m:"Racines carrées et théorème de Pythagore (rappels)",f:"L'argumentation : thèse, arguments, exemples",a:"Comparatifs et superlatifs",s:"Physique-chimie : le pH, solutions acides, neutres et basiques",h:"Le génocide des Juifs et des Tziganes",t:"racines|argumentation|comparatif|ph|genocide"},
{n:9,p:2,m:"Développer : distributivité simple et double",f:"Les connecteurs logiques et la concession",a:"La voix passive",s:"Physique-chimie : réactions entre acides et bases, entre acides et métaux",h:"La France défaite et occupée : Vichy, collaboration, Résistance",t:"developpe|argumentation|passive|ph|vichy"},
{n:10,p:2,m:"Les identités remarquables",f:"La réécriture : changer de personne, de temps, de nombre",a:"Les phrases en if : if + present, if + past",s:"SVT : l'évolution des êtres vivants et la sélection naturelle",h:"Les aires urbaines, une nouvelle géographie d'une France mondialisée",t:"identites|reecriture|conditional|evolution|urbain"},
{n:11,p:2,m:"Factoriser : facteur commun et identités remarquables",f:"La poésie engagée : résister par les mots (1940-1945)",a:"Les pronoms relatifs : who, which, where, whose",s:"SVT : fossiles, ancêtres communs et parentés",h:"Les espaces productifs et leurs évolutions",t:"factorise|poesie|relatives|evolution|productifs"},
{n:12,p:2,m:"Équations du premier degré",f:"Récits de guerre : témoigner de l'horreur",a:"Le discours rapporté (reported speech)",s:"SVT : micro-organismes et défenses de l'organisme",h:"Les espaces de faible densité et leurs atouts",t:"equation|guerre|reported|immunite|faibledensite"},
{n:13,p:2,m:"Équations produit et problèmes mis en équation",f:"Le subjonctif présent",a:"Christmas et culture du monde anglophone",s:"SVT : anticorps, lymphocytes et vaccination",h:"EMC : la laïcité, un principe de la République",t:"eqproduit|subjonctif|culture|immunite|laicite"},
{n:14,p:2,m:"Bilan de la période 2 : calcul littéral et équations",f:"Bilan : réécriture et dictée",a:"Bilan de la période 2",s:"Bilan : pH, évolution et immunité",h:"Bilan : la Seconde Guerre mondiale",t:"bilan2|dictee|grammar|ph|ggm2"},
{n:15,p:3,m:"Le théorème de Thalès",f:"Le conditionnel : formes et valeurs",a:"Parler du futur : will, be going to, present continuous",s:"Physique-chimie : la puissance électrique (P = U × I)",h:"Le monde depuis 1945 : la guerre froide (1947-1991)",t:"thales|conditionnel|future|electricite|guerrefroide"},
{n:16,p:3,m:"La réciproque du théorème de Thalès",f:"Le théâtre : texte et représentation",a:"Reported speech : questions et ordres",s:"Physique-chimie : l'énergie électrique (E = P × t)",h:"Guerre froide : Berlin, Cuba et la fin de l'URSS",t:"thales|theatre|reported|electricite|guerrefroide"},
{n:17,p:3,m:"Notion de fonction : image, antécédent, tableau de valeurs",f:"Voix active et voix passive",a:"Will et be going to : prédire et prévoir",s:"SVT : alimentation, digestion et microbiote",h:"Indépendances et construction de nouveaux États",t:"fonction|voix|future|sante|decolonisation"},
{n:18,p:3,m:"Fonctions linéaires et proportionnalité",f:"Le discours rapporté : direct et indirect",a:"Le passif au présent et au passé",s:"SVT : effort physique, respiration et système nerveux",h:"La décolonisation : Inde, Algérie, Afrique",t:"lineaire|discours|passive|sante|decolonisation"},
{n:19,p:3,m:"Fonctions affines",f:"Argumenter : convaincre et persuader",a:"Les modaux : conseils, obligations, interdictions",s:"Physique-chimie : la gravitation universelle",h:"La construction européenne depuis 1950",t:"affine|argumentation|modals|gravitation|europe"},
{n:20,p:3,m:"Pourcentages et évolutions : le coefficient multiplicateur",f:"Les figures de style dans la poésie",a:"Vocabulaire : environnement, citoyenneté, avenir",s:"Physique-chimie : poids et masse (P = m × g)",h:"1944-1947 : refonder la République, redéfinir la démocratie",t:"pourcentage|figures|vocab|gravitation|republique"},
{n:21,p:3,m:"Bilan de la période 3 : Thalès, fonctions, pourcentages",f:"Bilan : la conjugaison complète",a:"Bilan de la période 3",s:"Bilan : électricité et gravitation",h:"Bilan : guerre froide, décolonisation, Europe",t:"bilan3|conjug|grammar|electricite|guerrefroide"},
{n:22,p:4,m:"Inéquations du premier degré",f:"Exprimer la cause, la conséquence, le but",a:"Present perfect : bilan et expériences",s:"Physique-chimie : vitesse et mouvement",h:"La Ve République, de Gaulle et les institutions",t:"inequation|conjonctive|presentperfect|vitesse|cinquieme"},
{n:23,p:4,m:"Trigonométrie : le cosinus",f:"L'autobiographie : souvenirs d'enfance",a:"Relative clauses",s:"Physique-chimie : énergie cinétique et sécurité routière",h:"Femmes et hommes dans la société des années 1950 aux années 1980",t:"trigo|autobio|relatives|cinetique|societe"},
{n:24,p:4,m:"Trigonométrie : sinus et tangente",f:"Le théâtre au XXe siècle : comique et tragique",a:"If clauses : faire des hypothèses",s:"SVT : écosystèmes et activités humaines",h:"Pourquoi et comment aménager le territoire ?",t:"trigo|theatre|conditional|ecologie|amenagement"},
{n:25,p:4,m:"Homothéties, agrandissements et réductions",f:"Récits de guerre : Primo Levi, Anne Frank, Elie Wiesel",a:"Passive voice",s:"SVT : ressources, énergie et développement durable",h:"Les territoires ultramarins : une problématique spécifique",t:"homothetie|guerre|passive|ecologie|amenagement"},
{n:26,p:4,m:"Sphère et boule, cône, pyramide : aires et volumes",f:"La poésie engagée : de Hugo à Aragon",a:"Reported speech",s:"Technologie : chaîne d'information, capteurs, réseaux",h:"La France et l'Union européenne",t:"volume|poesie|reported|techno|ue"},
{n:27,p:4,m:"Statistiques : moyenne, médiane, étendue",f:"Orthographe : les accords du participe passé",a:"Comparatives and superlatives",s:"Technologie : programmer un objet, algorithmes",h:"EMC : la défense nationale et l'engagement des citoyens",t:"stats|dictee|comparatif|techno|defense"},
{n:28,p:4,m:"Probabilités",f:"Bilan de la période 4",a:"Bilan de la période 4",s:"Bilan : mouvement, énergie, écosystèmes",h:"EMC : les institutions de la Ve République",t:"proba|conjug|grammar|cinetique|institutions"},
{n:29,p:5,m:"Algorithmique et programmation (Scratch)",f:"Brevet : analyser un texte, les figures de style",a:"Révision : les temps du passé",s:"Révision brevet : génétique et évolution",h:"Révision brevet : 1914-1945, guerres totales",t:"algo|figures|past|genetique|ggm2"},
{n:30,p:5,m:"Révision brevet : nombres et calculs",f:"Brevet : la réécriture",a:"Révision : present perfect et past simple",s:"Révision brevet : atomes, ions, pH",h:"Révision brevet : le monde depuis 1945",t:"bilan1|reecriture|presentperfect|ions|guerrefroide"},
{n:31,p:5,m:"Révision brevet : calcul littéral et équations",f:"Brevet : la dictée",a:"Révision : modaux et conditionnel",s:"Révision brevet : immunité et santé",h:"Révision brevet : la République de 1944 à nos jours",t:"bilan2|dictee|conditional|immunite|cinquieme"},
{n:32,p:5,m:"Révision brevet : fonctions et pourcentages",f:"Brevet : grammaire de la phrase complexe",a:"Révision : passive et reported speech",s:"Révision brevet : énergie et électricité",h:"Révision brevet : aires urbaines et espaces productifs",t:"bilan3|complexe|passive|electricite|urbain"},
{n:33,p:5,m:"Révision brevet : Pythagore, Thalès, trigonométrie",f:"Brevet : comprendre un texte argumentatif",a:"Révision : vocabulaire et culture",s:"Révision brevet : mouvement, gravitation, énergie cinétique",h:"Révision brevet : aménager le territoire, la France et l'UE",t:"geom|argumentation|culture|cinetique|ue"},
{n:34,p:5,m:"Révision brevet : inéquations, trigonométrie, volumes, statistiques, probabilités",f:"Brevet : les repères de littérature",a:"Révision : relatives et comparatifs",s:"Révision brevet : écologie et technologie",h:"Révision brevet : EMC (laïcité, institutions, défense)",t:"bilan4|litt|relatives|ecologie|institutions"},
{n:35,p:5,m:"Brevet blanc : les automatismes",f:"Brevet blanc : conjugaison et réécriture",a:"Brevet blanc : grammaire",s:"Brevet blanc : sciences",h:"Brevet blanc : histoire",t:"automatismes|conjug|grammar|sante|genocide"},
{n:36,p:5,m:"Derniers automatismes avant le brevet",f:"Derniers conseils : enrichir son vocabulaire",a:"Ready for high school!",s:"Défis sciences et technologie",h:"Les grands repères chronologiques du brevet",t:"automatismes|vocab|vocab|techno|reperes"}
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
const PERIODES=["Période 1 — septembre à octobre","Période 2 — novembre à décembre","Période 3 — janvier à février","Période 4 — mars à avril","Période 5 — mai à juin : objectif brevet"];
function matiereDuJour(sem,jour){const j=JOURS[jour];if(j.mat==="sh")return (sem%2===1)?"s":"h";return j.mat;}

/* =========================================================
   3. LA BANQUE D'EXERCICES (fonctionne sans connexion)
   ========================================================= */
const alea=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const pioche=t=>t[Math.floor(Math.random()*t.length)];
const vg=x=>String(x).replace(".",",").replace("-","−");
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

/* ---------- petits outils de calcul ---------- */
const PRENOMS=["Inès","Yanis","Chloé","Mamadou","Léo","Aïcha","Hugo","Sofia","Nathan","Camille","Théo","Jade","Rayan","Lina","Malo","Zoé","Ibrahim","Manon","Elio","Nour"];
const sup=n=>String(n).split("").map(c=>c==="-"?"⁻":"⁰¹²³⁴⁵⁶⁷⁸⁹"[+c]).join("");
const sg=n=>n<0?"−"+vg(-n):vg(n);              // nombre avec le vrai signe moins
const pa=n=>n<0?"("+sg(n)+")":vg(n);            // entre parenthèses s'il est négatif
const pb=b=>b===0?"":(b<0?" − ":" + ")+vg(Math.abs(b)); // « + 3 » ou « − 3 », rien si 0
const r2=x=>Math.round(x*1000)/1000;
function repN(x){const s=vg(Math.abs(x));return x<0?["-"+s,"−"+s]:[s];}
function repX(x){const b=repN(x);return [...b,...b.map(v=>"x = "+v),...b.map(v=>"x="+v)];}
const pgcd=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b];}return a;};
function frac(n,d){const g=pgcd(n,d);n/=g;d/=g;if(d<0){n=-n;d=-d;}return d===1?String(n):`${n}/${d}`;}
function milliers(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g," ");}
function poly(termes){let s="";for(const [c,v] of termes){if(c===0)continue;const a=Math.abs(c);const corps=(a===1&&v)?v:a+v;if(!s)s=(c<0?"−":"")+corps;else s+=(c<0?" − ":" + ")+corps;}return s||"0";}
const bin=(a,b)=>`(${poly([[a,"x"],[b,""]])})`;
const nz=(a,b)=>{let x=0;while(x===0)x=alea(a,b);return x;};
function diviseurs(n){const d=[];for(let k=1;k<=n;k++)if(n%k===0)d.push(k);return d;}
// arrondi au dixième, sauf si la valeur est trop près d'un « 5 » (on refuse alors le tirage)
function arr1(v){const x=v*10,fr=x-Math.floor(x);if(Math.abs(fr-0.5)<0.08)return null;return Math.round(x)/10;}
function arr0(v){const fr=v-Math.floor(v);if(Math.abs(fr-0.5)<0.08)return null;return Math.round(v);}
const rad=d=>d*Math.PI/180;
const TRI=[["A","B","C"],["E","F","G"],["R","S","T"],["M","N","P"],["I","J","K"],["D","E","F"]];

/* ---------- MATHÉMATIQUES ---------- */
const GM={
  relatifs(){
    const t=alea(1,4);
    if(t===1){const a=nz(-20,20),b=nz(-20,20);return saisie(`Calcule : ${sg(a)} + ${pa(b)}`,repN(a+b),`${sg(a)} + ${pa(b)} = ${sg(a+b)}. ${(a<0)===(b<0)?"Même signe : on ajoute les distances à zéro et on garde ce signe.":"Signes contraires : on soustrait les distances à zéro et on garde le signe du nombre le plus éloigné de zéro."}`);}
    if(t===2){const a=nz(-20,20),b=nz(-20,20);return saisie(`Calcule : ${sg(a)} − ${pa(b)}`,repN(a-b),`Soustraire un nombre, c'est ajouter son opposé : ${sg(a)} + ${pa(-b)} = ${sg(a-b)}.`);}
    if(t===3){const a=nz(-12,12),b=nz(-12,12);return saisie(`Calcule : ${sg(a)} × ${pa(b)}`,repN(a*b),`${Math.abs(a)} × ${Math.abs(b)} = ${Math.abs(a*b)} ; ${(a<0)!==(b<0)?"signes contraires : résultat négatif":"même signe : résultat positif"}. Donc ${sg(a*b)}.`);}
    const a=nz(-9,9),b=nz(-9,9),c=nz(-9,9);
    return saisie(`Calcule : ${sg(a)} + ${pa(b)} × ${pa(c)}`,repN(a+b*c),`La multiplication d'abord : ${pa(b)} × ${pa(c)} = ${sg(b*c)}, puis ${sg(a)} + ${pa(b*c)} = ${sg(a+b*c)}.`);
  },
  diviseurs(){
    const t=alea(1,4);
    if(t===1){const N=pioche([12,18,20,24,28,30,36,40,42,45,48,50,54,56,60,63,72,75,80,84,90,96,100]);const d=diviseurs(N);
      return saisie(`Combien le nombre ${N} a-t-il de diviseurs ?`,[String(d.length)],`On les cherche par paires (1 × ${N}, …) : ${d.join(", ")}. Il y en a ${d.length}.`);}
    if(t===2){const N=pioche([24,30,36,40,42,48,54,56,60,72,84,90]);const d=diviseurs(N).filter(x=>x>1&&x<N);
      let k;do{k=alea(4,Math.floor(N/2));}while(N%k===0);
      return qcm(`Lequel de ces nombres n'est PAS un diviseur de ${N} ?`,String(k),melange(d).slice(0,3).map(String),`${N} ÷ ${k} ne tombe pas juste : ${N} = ${k} × ${Math.floor(N/k)} + ${N%k}. Les autres divisent ${N} exactement.`);}
    if(t===3){const k=pioche([3,9]);let n=alea(1000,9999);const veut=alea(0,1);
      if(veut)n+= (k-n%k)%k;else if(n%k===0)n+=1;
      const s=String(n).split("").reduce((a,c)=>a+ +c,0);
      return qcm(`Le nombre ${milliers(n)} est-il divisible par ${k} ?`,n%k===0?"oui":"non",[n%k===0?"non":"oui"],`Critère : un nombre est divisible par ${k} si la somme de ses chiffres l'est. Ici ${String(n).split("").join(" + ")} = ${s}, ${s%k===0?"qui est":"qui n'est pas"} divisible par ${k}.`);}
    const k=alea(6,13),m=alea(6,40);
    return qcm(`Lequel de ces nombres est un multiple de ${k} ?`,String(k*m),[String(k*m+1),String(k*m-2),String(k*m+3)],`${k*m} = ${k} × ${m}. Un multiple de ${k} s'écrit ${k} × (un entier).`);
  },
  premiers(){
    const t=alea(1,4);
    if(t===1){const p=pioche([11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]);
      const C={21:"3 × 7",27:"3 × 9",33:"3 × 11",39:"3 × 13",49:"7 × 7",51:"3 × 17",57:"3 × 19",63:"7 × 9",69:"3 × 23",77:"7 × 11",81:"9 × 9",87:"3 × 29",91:"7 × 13",93:"3 × 31"};
      const f=melange(Object.keys(C)).slice(0,3);
      return qcm("Lequel de ces nombres est premier ?",String(p),f,`${p} n'a que deux diviseurs : 1 et lui-même. Les autres se décomposent : ${f.map(x=>x+" = "+C[x]).join(" ; ")}.`);}
    if(t===2){
      let e,N;
      do{e={2:alea(0,4),3:alea(0,2),5:alea(0,2),7:alea(0,1)};N=2**e[2]*3**e[3]*5**e[5]*7**e[7];}
      while(N<30||N>3000||Object.values(e).filter(x=>x>0).length<2);
      const ecr=E=>[2,3,5,7].filter(p=>E[p]>0).map(p=>E[p]===1?String(p):p+sup(E[p])).join(" × ");
      const ps=[2,3,5,7].filter(p=>e[p]>0),p=ps[0],q=ps[ps.length-1];
      const d1={...e,[q]:e[q]+1},d3={...e,[p]:e[p]+1},rest={...e,[p]:e[p]-1,[q]:e[q]-1};
      const r=ecr(rest);const d2=r?`${p*q} × ${r}`:String(p*q);
      return qcm(`Quelle est la décomposition de ${milliers(N)} en produit de facteurs premiers ?`,ecr(e),[ecr(d1),d2,ecr(d3)],`On divise par 2, 3, 5, 7… tant que c'est possible : ${N} = ${ecr(e)}. Un facteur comme ${p*q} n'est pas premier.`);}
    if(t===3){const c=pioche([[91,7],[77,7],[51,3],[57,3],[87,3],[119,7],[143,11],[133,7],[161,7],[187,11],[221,13],[85,5],[95,5]]);
      return saisie(`Quel est le plus petit nombre premier qui divise ${c[0]} ?`,[String(c[1])],`On essaie 2, 3, 5, 7, 11, 13… dans l'ordre : ${c[0]} = ${c[1]} × ${c[0]/c[1]}.`);}
    const b=[
      {q:"Le nombre 1 est-il un nombre premier ?",b:"non, il n'a qu'un seul diviseur",f:["oui, comme tous les nombres impairs","oui, il divise tous les nombres"],e:"Un nombre premier a exactement deux diviseurs : 1 et lui-même. 1 n'en a qu'un."},
      {q:"Quel est le seul nombre premier pair ?",b:"2",f:["4","0","10"],e:"Tout autre nombre pair est divisible par 2, donc a au moins trois diviseurs."},
      {q:"Combien y a-t-il de nombres premiers inférieurs à 20 ?",b:"8",f:["10","6","9"],e:"2, 3, 5, 7, 11, 13, 17, 19."},
      {q:"Un nombre premier est un nombre entier qui a :",b:"exactement deux diviseurs, 1 et lui-même",f:["un seul diviseur","un nombre pair de diviseurs","aucun diviseur"],e:"Exemples : 2, 3, 5, 7, 11, 13…"}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);
  },
  fractions(){
    const t=alea(1,4);
    const cop=()=>{let p,q;do{p=alea(1,12);q=alea(2,15);}while(p===q||pgcd(p,q)!==1);return [p,q];};
    if(t===1){const [p,q]=cop(),g=alea(2,12);
      return saisie(`Écris la fraction ${p*g}/${q*g} sous forme irréductible`,[`${p}/${q}`],`On divise numérateur et dénominateur par leur PGCD, ${g} : ${p*g} ÷ ${g} = ${p} et ${q*g} ÷ ${g} = ${q}.`);}
    if(t===2){const [p,q]=cop(),g=alea(2,15);
      return saisie(`Quel est le PGCD de ${p*g} et ${q*g} ?`,[String(g)],`${p*g} = ${g} × ${p} et ${q*g} = ${g} × ${q}, et ${p} et ${q} n'ont pas d'autre diviseur commun que 1. Le PGCD est ${g}.`);}
    if(t===3){const [p,q]=cop();const g=alea(0,1)?1:alea(2,7);const a=p*g,b=q*g;
      return qcm(`Les nombres ${a} et ${b} sont-ils premiers entre eux ?`,g===1?"oui":"non",[g===1?"non":"oui"],g===1?`Leur seul diviseur commun est 1 : PGCD(${a} ; ${b}) = 1.`:`Ils sont tous deux divisibles par ${g} : leur PGCD n'est pas 1.`);}
    const [p,q]=cop();const f=[];while(f.length<3){const [u,v]=cop(),g=alea(2,6);const s=`${u*g}/${v*g}`;if(!f.includes(s))f.push(s);}
    return qcm("Laquelle de ces fractions est irréductible ?",`${p}/${q}`,f,`${p} et ${q} n'ont pas de diviseur commun autre que 1. Les autres se simplifient.`);
  },
  fracops(){
    const t=alea(1,4);const b=alea(2,9),d=alea(2,9);let a=alea(1,b-1),c=alea(1,d-1);
    if(t===1){const n=a*d+c*b,den=b*d;return saisie(`Calcule et donne le résultat sous forme irréductible : ${a}/${b} + ${c}/${d}`,[frac(n,den)],`Même dénominateur ${den} : ${a*d}/${den} + ${c*b}/${den} = ${n}/${den}${frac(n,den)!==`${n}/${den}`?" = "+frac(n,den):""}.`);}
    if(t===2){let x1=a,y1=b,x2=c,y2=d;if(x1*y2-x2*y1<0){[x1,y1,x2,y2]=[c,d,a,b];}if(x1*y2-x2*y1===0)return GM.fracops();
      const n=x1*y2-x2*y1,den=y1*y2;return saisie(`Calcule et donne le résultat sous forme irréductible : ${x1}/${y1} − ${x2}/${y2}`,[frac(n,den)],`Même dénominateur ${den} : ${x1*y2}/${den} − ${x2*y1}/${den} = ${n}/${den}${frac(n,den)!==`${n}/${den}`?" = "+frac(n,den):""}.`);}
    if(t===3){const n=a*c,den=b*d;return saisie(`Calcule et donne le résultat sous forme irréductible : ${a}/${b} × ${c}/${d}`,[frac(n,den)],`On multiplie les numérateurs entre eux et les dénominateurs entre eux : ${n}/${den}${frac(n,den)!==`${n}/${den}`?" = "+frac(n,den):""}.`);}
    const n=a*d,den=b*c;return saisie(`Calcule et donne le résultat sous forme irréductible : ${a}/${b} ÷ ${c}/${d}`,[frac(n,den)],`Diviser par ${c}/${d}, c'est multiplier par son inverse ${d}/${c} : ${a}/${b} × ${d}/${c} = ${n}/${den}${frac(n,den)!==`${n}/${den}`?" = "+frac(n,den):""}.`);
  },
  puissances(){
    const t=alea(1,5);
    if(t===1){const c=pioche([[2,2,10],[3,2,6],[5,2,4],[10,2,6]]);const n=alea(c[1],c[2]);const v=c[0]**n;
      return saisie(`Calcule : ${c[0]}${sup(n)}`,[String(v),milliers(v)],`${c[0]}${sup(n)} = ${Array(n).fill(c[0]).join(" × ")} = ${milliers(v)}.`);}
    if(t===2){const a=alea(2,5),n=pioche([2,3]);
      if(alea(0,1)){const v=(-a)**n;return qcm(`Calcule : (−${a})${sup(n)}`,sg(v),[sg(-v),sg(a*n),sg(-a*n),sg(a*(n+1)),sg(-a*(n+1))],`(−${a})${sup(n)} = ${Array(n).fill("(−"+a+")").join(" × ")} = ${sg(v)} : le signe moins est dans la parenthèse.`);}
      const v=-(a**n);return qcm(`Calcule : −${a}${sup(n)}`,sg(v),[sg(-v),sg(-a*n),sg(a*n),sg(-a*(n+1)),sg(a*(n+1))],`L'exposant ne porte que sur ${a} : −${a}${sup(n)} = −(${Array(n).fill(a).join(" × ")}) = ${sg(v)}.`);}
    if(t===3){let a,b;do{a=alea(2,9);b=alea(2,9);}while(a*b===a+b);
      if(alea(0,1))return qcm(`Écris sous la forme d'une seule puissance de 10 : 10${sup(a)} × 10${sup(b)}`,`10${sup(a+b)}`,[`10${sup(a*b)}`,`100${sup(a+b)}`,`20${sup(a+b)}`],`10${sup(a)} × 10${sup(b)} = 10${sup(a+"+"+b)} = 10${sup(a+b)} : on ajoute les exposants.`);
      const [g,p]=a>b?[a,b]:[b,a];if(g===p)return GM.puissances();
      return qcm(`Écris sous la forme d'une seule puissance de 10 : 10${sup(g)} ÷ 10${sup(p)}`,`10${sup(g-p)}`,[`10${sup(g+p)}`,`10${sup(g*p)}`,`20${sup(g-p)}`],`10${sup(g)} ÷ 10${sup(p)} = 10${sup(g+"-"+p)} = 10${sup(g-p)} : on soustrait les exposants.`);}
    if(t===4){let m10;do{m10=alea(11,99);}while(m10%10===0);const k=alea(3,7);const v=m10*10**(k-1);const m=vg(m10/10);
      return qcm(`Quelle est l'écriture scientifique de ${milliers(v)} ?`,`${m} × 10${sup(k)}`,[`${m10} × 10${sup(k-1)}`,`${m} × 10${sup(k+1)}`,`${m} × 10${sup(k-1)}`],`Écriture scientifique : a × 10ⁿ avec 1 ≤ a < 10. On place la virgule après le premier chiffre : ${milliers(v)} = ${m} × 10${sup(k)}.`);}
    const n=alea(1,4);const v="0,"+"0".repeat(n-1)+"1";
    return qcm(`Quelle est l'écriture décimale de 10${sup(-n)} ?`,v,["0,"+"0".repeat(n)+"1","−"+milliers(10**n),"−"+v],`10${sup(-n)} = 1 ÷ 10${sup(n)} = ${v} : le 1 est au ${n===1?"1er":n+"e"} rang après la virgule. Ce nombre est positif.`);
  },
  racines(){
    const t=alea(1,5);
    if(t===1){const n=alea(2,15);return saisie(`Calcule : √${n*n}`,[String(n)],`${n} × ${n} = ${n*n} et ${n} est positif, donc √${n*n} = ${n}.`);}
    if(t===2){const c=pioche([[9,16],[36,64],[25,144],[81,144],[64,225]]);const s=Math.sqrt(c[0])+Math.sqrt(c[1]),w=Math.sqrt(c[0]+c[1]);
      return qcm(`Calcule : √${c[0]} + √${c[1]}`,String(s),[String(w),String(c[0]+c[1]),vg((c[0]+c[1])/2)],`√${c[0]} = ${Math.sqrt(c[0])} et √${c[1]} = ${Math.sqrt(c[1])}, donc la somme vaut ${s}. Attention : √${c[0]} + √${c[1]} n'est pas égal à √${c[0]+c[1]} = ${w}.`);}
    if(t===3){let n;do{n=alea(3,150);}while(Number.isInteger(Math.sqrt(n)));const f=Math.floor(Math.sqrt(n));
      return qcm(`Entre quels entiers consécutifs se trouve √${n} ?`,`${f} et ${f+1}`,[`${f-1} et ${f}`,`${f+1} et ${f+2}`,`${f+2} et ${f+3}`],`${f}² = ${f*f} et ${f+1}² = ${(f+1)*(f+1)}. Comme ${f*f} < ${n} < ${(f+1)*(f+1)}, on a ${f} < √${n} < ${f+1}.`);}
    if(t===4){const n=pioche([2,3,5,6,7,10,11,13]);return saisie(`Calcule : (√${n})²`,[String(n)],`Par définition, √${n} est le nombre positif dont le carré vaut ${n}. Donc (√${n})² = ${n}.`);}
    return GM.pythagore();
  },
  pythagore(){
    const T=pioche([[3,4,5],[5,12,13],[8,15,17],[7,24,25],[6,8,10],[9,12,15],[20,21,29],[12,16,20]]);const [A,B,C]=pioche(TRI);const t=alea(1,3);
    if(t===1)return saisie(`Le triangle ${A}${B}${C} est rectangle en ${A}, avec ${A}${B} = ${T[0]} cm et ${A}${C} = ${T[1]} cm. Calcule ${B}${C} en cm.`,[String(T[2])],`Pythagore : ${B}${C}² = ${A}${B}² + ${A}${C}² = ${T[0]**2} + ${T[1]**2} = ${T[2]**2}, donc ${B}${C} = √${T[2]**2} = ${T[2]} cm.`);
    if(t===2)return saisie(`Le triangle ${A}${B}${C} est rectangle en ${A}, avec ${B}${C} = ${T[2]} cm et ${A}${B} = ${T[0]} cm. Calcule ${A}${C} en cm.`,[String(T[1])],`[${B}${C}] est l'hypoténuse : ${A}${C}² = ${B}${C}² − ${A}${B}² = ${T[2]**2} − ${T[0]**2} = ${T[1]**2}, donc ${A}${C} = ${T[1]} cm.`);
    const ok=alea(0,1),c=ok?T[2]:T[2]+1;
    return qcm(`Un triangle a des côtés de ${T[0]} cm, ${T[1]} cm et ${c} cm. Est-il rectangle ?`,ok?"oui":"non",[ok?"non":"oui"],`On compare le carré du plus grand côté à la somme des deux autres carrés : ${c}² = ${c*c} et ${T[0]}² + ${T[1]}² = ${T[0]**2+T[1]**2}. ${ok?"Égalité : il est rectangle (réciproque de Pythagore).":"Pas d'égalité : il n'est pas rectangle."}`);
  },
  developpe(){
    const t=alea(1,3);
    if(t===1){const k=pioche([-5,-4,-3,-2,2,3,4,5,6,7]),a=alea(1,5),b=nz(-9,9);
      return qcm(`Développe : ${sg(k)}${bin(a,b)}`,poly([[k*a,"x"],[k*b,""]]),[poly([[k*a,"x"],[b,""]]),poly([[a,"x"],[k*b,""]]),poly([[k*a,"x"],[-k*b,""]])],`On multiplie ${sg(k)} par chaque terme : ${sg(k)} × ${a===1?"x":a+"x"} et ${sg(k)} × ${pa(b)}. On obtient ${poly([[k*a,"x"],[k*b,""]])}.`);}
    if(t===2){let a,b;do{a=nz(-9,9);b=nz(-9,9);}while(a+b===0||a+b===a*b);
      return qcm(`Développe et réduis : ${bin(1,a)}${bin(1,b)}`,poly([[1,"x²"],[a+b,"x"],[a*b,""]]),[poly([[1,"x²"],[a*b,""]]),poly([[1,"x²"],[a+b,"x"],[a+b,""]]),poly([[1,"x²"],[a*b,"x"],[a+b,""]])],`Double distributivité : x × x + x × ${pa(b)} + ${pa(a)} × x + ${pa(a)} × ${pa(b)} = ${poly([[1,"x²"],[a+b,"x"],[a*b,""]])}.`);}
    const a=alea(1,3),c=alea(2,3),b=nz(-7,7),d=nz(-7,7);
    return qcm(`Développe et réduis : ${bin(a,b)}${bin(c,d)}`,poly([[a*c,"x²"],[a*d+b*c,"x"],[b*d,""]]),[poly([[a*c,"x²"],[b*d,""]]),poly([[a*c,"x²"],[a*d+b*c,"x"],[b+d,""]]),poly([[a+c,"x"],[b+d,""]])],`Chaque terme de la 1re parenthèse multiplie chaque terme de la 2de : ${a*c}x² ${a*d+b*c<0?"−":"+"} ${Math.abs(a*d+b*c)}x ${b*d<0?"−":"+"} ${Math.abs(b*d)}, soit ${poly([[a*c,"x²"],[a*d+b*c,"x"],[b*d,""]])}.`);
  },
  identites(){
    const t=alea(1,4);
    if(t===1){const a=nz(-9,9);const e=a>0?"(a + b)² = a² + 2ab + b²":"(a − b)² = a² − 2ab + b²";
      return qcm(`Développe : ${bin(1,a)}²`,poly([[1,"x²"],[2*a,"x"],[a*a,""]]),[poly([[1,"x²"],[a*a,""]]),poly([[1,"x²"],[a,"x"],[a*a,""]]),poly([[1,"x²"],[-2*a,"x"],[a*a,""]])],`Identité remarquable ${e} : ${poly([[1,"x²"],[2*a,"x"],[a*a,""]])}. Le terme ${sg(2*a)}x est le double produit.`);}
    if(t===2){const k=alea(2,5),a=nz(-7,7);
      return qcm(`Développe : ${bin(k,a)}²`,poly([[k*k,"x²"],[2*k*a,"x"],[a*a,""]]),[poly([[k*k,"x²"],[a*a,""]]),poly([[k,"x²"],[2*k*a,"x"],[a*a,""]]),poly([[k*k,"x²"],[k*a,"x"],[a*a,""]])],`(${k}x)² = ${k*k}x², double produit 2 × ${k}x × ${pa(a)} = ${sg(2*k*a)}x, et ${pa(a)}² = ${a*a}.`);}
    if(t===3){const a=alea(2,12);
      return qcm(`Développe : (x + ${a})(x − ${a})`,poly([[1,"x²"],[-a*a,""]]),[poly([[1,"x²"],[a*a,""]]),poly([[1,"x²"],[-2*a,"x"],[-a*a,""]]),poly([[1,"x²"],[-2*a,""]])],`(a + b)(a − b) = a² − b², donc x² − ${a}² = x² − ${a*a}.`);}
    const n=alea(2,9)*10;
    return saisie(`Calcule astucieusement : ${n-1} × ${n+1}`,[String(n*n-1),milliers(n*n-1)],`(${n} − 1)(${n} + 1) = ${n}² − 1² = ${n*n} − 1 = ${n*n-1}.`);
  },
  factorise(){
    const t=alea(1,4);
    if(t===1){const a=alea(2,11);return qcm(`Factorise : x² − ${a*a}`,`(x − ${a})(x + ${a})`,[`(x − ${a})²`,`(x + ${a})²`,`(x − ${a*a})(x + ${a*a})`],`x² − ${a*a} = x² − ${a}² : c'est a² − b² = (a − b)(a + b).`);}
    if(t===2){const a=alea(2,9);return qcm(`Factorise : x² + ${2*a}x + ${a*a}`,`(x + ${a})²`,[`(x + ${2*a})²`,`(x − ${a})²`,`(x + ${a})(x − ${a})`],`On reconnaît a² + 2ab + b² avec a = x et b = ${a} (car 2 × x × ${a} = ${2*a}x et ${a}² = ${a*a}).`);}
    if(t===3){let k,m,n;do{k=alea(2,9);m=alea(1,5);n=nz(-9,9);}while(pgcd(m,n)!==1);
      return qcm(`Factorise : ${poly([[k*m,"x"],[k*n,""]])}`,`${k}${bin(m,n)}`,[`${k}${bin(m,k*n)}`,`${k*m}${bin(1,n)}`,`${k}${bin(m,-n)}`],`Le facteur commun est ${k} : ${k*m}x = ${k} × ${m===1?"x":m+"x"} et ${sg(k*n)} = ${k} × ${pa(n)}. Vérifie en redéveloppant.`);}
    const b=alea(2,9);
    return qcm(`Factorise : x² + ${b}x`,`x(x + ${b})`,[`(x + ${b})²`,`x(x − ${b})`,`${b}x(x + 1)`],`x est en facteur dans les deux termes : x² = x × x et ${b}x = x × ${b}.`);
  },
  equation(){
    const t=alea(1,4);
    if(t===1){const a=nz(-9,9)>0?alea(2,9):-alea(2,9),x=nz(-9,9),b=alea(-15,15),c=a*x+b;
      return saisie(`Résous l'équation : ${poly([[a,"x"],[b,""]])} = ${sg(c)}`,repX(x),`${b!==0?`On ${b>0?"soustrait "+b:"ajoute "+(-b)} des deux côtés : ${sg(a)}x = ${sg(c-b)}, puis o`:"O"}n divise par ${sg(a)} : x = ${sg(x)}. Vérification : ${sg(a)} × ${pa(x)}${pb(b)} = ${sg(c)}.`);}
    if(t===2){let a,c;do{a=alea(2,9);c=alea(1,8);}while(a===c);const x=nz(-8,8),b=alea(-12,12),d=(a-c)*x+b;
      return saisie(`Résous l'équation : ${poly([[a,"x"],[b,""]])} = ${poly([[c,"x"],[d,""]])}`,repX(x),`On regroupe les x à gauche : ${a}x − ${c}x = ${sg(d)} − ${pa(b)}, soit ${a-c}x = ${sg(d-b)}, donc x = ${sg(x)}.`);}
    if(t===3){const a=alea(2,7),b=alea(-9,9),x0=alea(-5,5),c=a*x0+b,test=alea(0,1)?x0:x0+pioche([-1,1]);
      return qcm(`Le nombre ${sg(test)} est-il solution de l'équation ${poly([[a,"x"],[b,""]])} = ${sg(c)} ?`,test===x0?"oui":"non",[test===x0?"non":"oui"],`On remplace x par ${sg(test)} : ${a} × ${pa(test)}${pb(b)} = ${sg(a*test+b)}, ${a*test+b===c?"qui est bien égal à":"qui n'est pas égal à"} ${sg(c)}.`);}
    const P=pioche(PRENOMS),k=alea(2,5),b=alea(3,15),x=alea(2,15);
    return saisie(`${P} pense à un nombre, le multiplie par ${k}, ajoute ${b} et obtient ${k*x+b}. Quel est ce nombre ?`,[String(x)],`On pose l'équation ${k}x + ${b} = ${k*x+b}, d'où ${k}x = ${k*x} et x = ${x}.`);
  },
  eqproduit(){
    const t=alea(1,3);
    if(t===1){const a=alea(1,9),b=alea(1,9);
      return qcm(`Quelles sont les solutions de l'équation (x − ${a})(x + ${b}) = 0 ?`,`x = ${a} ou x = −${b}`,[`x = −${a} ou x = ${b}`,`x = ${a} seulement`,`x = ${a*b}`],`Un produit est nul si l'un de ses facteurs est nul : x − ${a} = 0 donne x = ${a} ; x + ${b} = 0 donne x = −${b}.`);}
    if(t===2){const n=alea(2,12);
      return qcm(`Quelles sont les solutions de l'équation x² = ${n*n} ?`,`x = ${n} ou x = −${n}`,[`x = ${n} seulement`,`x = ${n*n} ou x = −${n*n}`,"il n'y a pas de solution"],`${n}² = ${n*n} et (−${n})² = ${n*n} : deux solutions, √${n*n} et −√${n*n}.`);}
    const k=alea(2,5),a=alea(1,9);
    return qcm(`Quelles sont les solutions de l'équation ${k}x(x − ${a}) = 0 ?`,`x = 0 ou x = ${a}`,[`x = ${k} ou x = ${a}`,`x = ${a} seulement`,`x = 0 ou x = −${a}`],`Produit nul : ${k}x = 0 donne x = 0, et x − ${a} = 0 donne x = ${a}.`);
  },
  inequation(){
    const t=alea(1,2);
    if(t===1){const a=pioche([-6,-5,-4,-3,-2,2,3,4,5,6]),x0=nz(-6,6),b=alea(-10,10),c=a*x0+b,s=pioche(["<",">","≤","≥"]);
      const inv={"<":">",">":"<","≤":"≥","≥":"≤"},sol=a>0?s:inv[s];
      const f=[`x ${inv[sol]} ${sg(x0)}`,`x ${sol} ${sg(-x0)}`,`x ${sol} ${sg(c-b)}`];
      return qcm(`Résous l'inéquation : ${poly([[a,"x"],[b,""]])} ${s} ${sg(c)}`,`x ${sol} ${sg(x0)}`,f.filter(z=>z!==`x ${sol} ${sg(x0)}`),`On isole x : ${sg(a)}x ${s} ${sg(c-b)}. On divise par ${sg(a)}${a<0?", qui est négatif : le sens de l'inégalité change":", positif : le sens ne change pas"}. Donc x ${sol} ${sg(x0)}.`);}
    const a=alea(2,6),b=alea(-9,9),c=alea(-10,15),x=alea(-5,6),v=a*x+b,ok=v>c;
    return qcm(`Le nombre ${sg(x)} est-il solution de l'inéquation ${poly([[a,"x"],[b,""]])} > ${sg(c)} ?`,ok?"oui":"non",[ok?"non":"oui"],`On remplace : ${a} × ${pa(x)}${pb(b)} = ${sg(v)}, et ${sg(v)} ${ok?">":"≤"} ${sg(c)}.`);
  },
  fonction(){
    const t=alea(1,5);
    if(t===1){if(alea(0,1)){const a=nz(-6,6),b=alea(-9,9),x=nz(-6,6);return saisie(`On donne f(x) = ${poly([[a,"x"],[b,""]])}. Calcule l'image de ${sg(x)} par f.`,repN(a*x+b),`On remplace x par ${sg(x)} : f(${sg(x)}) = ${sg(a)} × ${pa(x)}${pb(b)} = ${sg(a*x+b)}.`);}
      const b=alea(-9,9),x=nz(-5,5);return saisie(`On donne f(x) = ${poly([[1,"x²"],[b,""]])}. Calcule f(${sg(x)}).`,repN(x*x+b),`f(${sg(x)}) = ${pa(x)}²${pb(b)} = ${x*x}${pb(b)} = ${sg(x*x+b)}.`);}
    if(t===2){const a=pioche([-5,-4,-3,-2,2,3,4,5]),b=alea(-9,9),x=alea(-6,6),y=a*x+b;
      return saisie(`On donne f(x) = ${poly([[a,"x"],[b,""]])}. Quel est l'antécédent de ${sg(y)} par f ?`,repN(x),`On résout ${poly([[a,"x"],[b,""]])} = ${sg(y)} : ${sg(a)}x = ${sg(y-b)}, donc x = ${sg(x)}.`);}
    if(t===3){const x=alea(-5,9),y=alea(-9,20);if(x===y)return GM.fonction();
      return qcm(`On sait que f(${sg(x)}) = ${sg(y)}. Que peut-on dire ?`,`${sg(y)} est l'image de ${sg(x)} par f`,[`${sg(x)} est l'image de ${sg(y)} par f`,`${sg(y)} est un antécédent de ${sg(x)} par f`],`f(nombre de départ) = image. ${sg(x)} est un antécédent de ${sg(y)}, et ${sg(y)} est l'image de ${sg(x)}.`);}
    if(t===4){const a=pioche([-3,-2,2,3,4]),b=alea(-5,5),xs=[-1,0,2],ys=xs.map(x=>a*x+b),k=alea(0,2);
      const tab=xs.map((x,i)=>`f(${sg(x)}) = ${sg(ys[i])}`).join(" ; ");
      if(alea(0,1))return qcm(`On connaît : ${tab}. Quel est l'antécédent de ${sg(ys[k])} ?`,sg(xs[k]),[...xs.filter((_,i)=>i!==k).map(sg),sg(ys[k])],`On cherche le nombre de départ x tel que f(x) = ${sg(ys[k])} : c'est ${sg(xs[k])}.`);
      return qcm(`On connaît : ${tab}. Quelle est l'image de ${sg(xs[k])} ?`,sg(ys[k]),[...ys.filter((_,i)=>i!==k).map(sg),sg(xs[k])],`L'image de ${sg(xs[k])} est f(${sg(xs[k])}) = ${sg(ys[k])}.`);}
    const x=alea(-5,6),y=alea(-6,9);if(x===y||x===0||y===0)return GM.fonction();
    return qcm(`Le point A(${sg(x)} ; ${sg(y)}) appartient à la courbe représentative de f. Cela signifie que :`,`f(${sg(x)}) = ${sg(y)}`,[`f(${sg(y)}) = ${sg(x)}`,`f(0) = ${sg(y)}`,`f(${sg(x)}) = 0`],`Un point de la courbe a pour coordonnées (x ; f(x)) : l'abscisse est le nombre de départ, l'ordonnée son image.`);
  },
  lineaire(){
    const t=alea(1,5);
    if(t===1){const a=nz(-6,9),x=alea(2,9);return saisie(`f est une fonction linéaire et f(${x}) = ${sg(a*x)}. Quel est son coefficient ?`,repN(a),`f(x) = ax, donc a = f(${x}) ÷ ${x} = ${sg(a*x)} ÷ ${x} = ${sg(a)}.`);}
    if(t===2){const a=nz(-7,7),x=nz(-9,9);return saisie(`On donne la fonction linéaire f(x) = ${poly([[a,"x"]])}. Calcule f(${sg(x)}).`,repN(a*x),`f(${sg(x)}) = ${sg(a)} × ${pa(x)} = ${sg(a*x)}.`);}
    if(t===3){const a=alea(2,9),b=alea(1,9);return qcm("Laquelle de ces fonctions est linéaire ?",`f(x) = ${a}x`,[`f(x) = ${a}x + ${b}`,`f(x) = x² + ${a}`,`f(x) = ${a} ÷ x`],`Une fonction linéaire s'écrit f(x) = ax : elle traduit une situation de proportionnalité.`);}
    if(t===4)return qcm("La représentation graphique d'une fonction linéaire est :","une droite qui passe par l'origine du repère",["une droite qui ne passe jamais par l'origine","une courbe en forme de U","un ensemble de points non alignés"],"f(0) = a × 0 = 0 : la droite passe par le point (0 ; 0).");
    const p=pioche([1.2,1.5,1.8,2.5,0.8]),n=alea(5,40),r=r2(p*n);
    return saisie(`Le prix à payer est donné par la fonction linéaire f(x) = ${vg(p)}x, où x est le nombre de litres. Combien coûtent ${n} litres, en euros ?`,[vg(r),String(r)],`f(${n}) = ${vg(p)} × ${n} = ${vg(r)} €. Le prix est proportionnel au nombre de litres.`);
  },
  affine(){
    const t=alea(1,5);
    if(t===1){const a=nz(-5,5),b=alea(-8,8),x1=alea(-3,2),x2=x1+alea(1,4);
      return saisie(`f est une fonction affine avec f(${sg(x1)}) = ${sg(a*x1+b)} et f(${sg(x2)}) = ${sg(a*x2+b)}. Quel est son coefficient a ?`,repN(a),`a = (f(${sg(x2)}) − f(${sg(x1)})) ÷ (${sg(x2)} − ${pa(x1)}) = ${sg(a*(x2-x1))} ÷ ${x2-x1} = ${sg(a)}.`);}
    if(t===2){const a=alea(2,6),b=alea(-9,9),x=alea(1,5);
      return saisie(`f(x) = ${a}x + b est une fonction affine telle que f(${x}) = ${sg(a*x+b)}. Quelle est la valeur de b ?`,repN(b),`${a} × ${x} + b = ${sg(a*x+b)}, donc b = ${sg(a*x+b)} − ${a*x} = ${sg(b)}.`);}
    if(t===3){const a=nz(-6,6),b=nz(-9,9);const q=alea(0,1);
      return qcm(`Pour la fonction affine f(x) = ${poly([[a,"x"],[b,""]])}, le nombre ${q?sg(b):sg(a)} est :`,q?"l'ordonnée à l'origine":"le coefficient directeur",[q?"le coefficient directeur":"l'ordonnée à l'origine","la variable"],`Dans f(x) = ax + b, a est le coefficient directeur (la pente) et b l'ordonnée à l'origine (f(0) = b).`);}
    if(t===4){const a=nz(-5,5),b=alea(-9,9),x=nz(-6,6);return saisie(`f(x) = ${poly([[a,"x"],[b,""]])}. Calcule f(${sg(x)}).`,repN(a*x+b),`f(${sg(x)}) = ${sg(a)} × ${pa(x)}${pb(b)} = ${sg(a*x+b)}.`);}
    const a=nz(-5,5),b=alea(-5,5);
    return qcm(`La fonction affine f(x) = ${poly([[a,"x"],[b,""]])} est :`,a>0?"croissante":"décroissante",[a>0?"décroissante":"croissante","constante"],`Le coefficient directeur ${sg(a)} est ${a>0?"positif : la droite monte":"négatif : la droite descend"}.`);
  },
  pourcentage(){
    const t=alea(1,5);const tx=pioche([5,10,20,25,30,40,50]),P=alea(2,30)*20;
    if(t===1){const r=P*(100+tx)/100;return saisie(`Un article coûte ${P} €. Son prix augmente de ${tx} %. Quel est le nouveau prix, en euros ?`,[String(r)],`Augmenter de ${tx} %, c'est multiplier par ${vg(1+tx/100)} : ${P} × ${vg(1+tx/100)} = ${r} €.`);}
    if(t===2){const r=P*(100-tx)/100;return saisie(`Un article coûte ${P} €. Il est soldé à −${tx} %. Quel est son nouveau prix, en euros ?`,[String(r)],`Baisser de ${tx} %, c'est multiplier par ${vg(1-tx/100)} : ${P} × ${vg(1-tx/100)} = ${r} €.`);}
    if(t===3){const h=alea(0,1),c=r2(h?1+tx/100:1-tx/100);
      return qcm(`${h?"Augmenter":"Diminuer"} une quantité de ${tx} % revient à la multiplier par :`,vg(c),[vg(r2(h?1-tx/100:1+tx/100)),vg(tx/100),String(tx)],`${h?"1 + ":"1 − "}${tx}/100 = ${vg(c)}. C'est le coefficient multiplicateur.`);}
    if(t===4){const h=alea(0,1),B=h?P*(100+tx)/100:P*(100-tx)/100;
      return saisie(`Un prix passe de ${P} € à ${B} €. De quel pourcentage a-t-il ${h?"augmenté":"baissé"} ?`,[String(tx),tx+" %"],`L'écart est ${Math.abs(B-P)} € ; ${Math.abs(B-P)} ÷ ${P} = ${vg(tx/100)}, soit ${tx} %.`);}
    const u=pioche([10,20,50]);
    return qcm(`Un prix augmente de ${u} %, puis baisse de ${u} %. Au total, le prix :`,`baisse de ${u*u/100} %`,["revient à sa valeur de départ",`augmente de ${u*u/100} %`,`baisse de ${2*u} %`],`On multiplie : ${vg(1+u/100)} × ${vg(1-u/100)} = ${vg(r2(1-u*u/10000))}, soit une baisse de ${u*u/100} %. Les pourcentages ne s'additionnent pas.`);
  },
  thales(){
    const t=alea(1,4);const [A,M,B,N,C]=pioche([["A","M","B","N","C"],["O","E","F","G","H"],["S","R","T","U","V"],["K","L","P","J","Q"]]);
    let p,q;do{p=alea(1,5);q=alea(2,7);}while(p>=q||pgcd(p,q)!==1);
    const u=alea(1,4),v=alea(1,5),w=alea(1,4);
    const cfg=`Les points ${A}, ${M}, ${B} sont alignés, ainsi que ${A}, ${N}, ${C}, et les droites (${M}${N}) et (${B}${C}) sont parallèles.`;
    if(t===1)return saisie(`${cfg} ${A}${M} = ${p*u} cm, ${A}${B} = ${q*u} cm et ${B}${C} = ${q*v} cm. Calcule ${M}${N} en cm.`,[String(p*v)],`Thalès : ${A}${M}/${A}${B} = ${A}${N}/${A}${C} = ${M}${N}/${B}${C}. Donc ${M}${N} = ${B}${C} × ${A}${M} ÷ ${A}${B} = ${q*v} × ${p*u} ÷ ${q*u} = ${p*v} cm.`);
    if(t===2)return saisie(`${cfg} ${A}${M} = ${p*u} cm, ${A}${B} = ${q*u} cm et ${A}${C} = ${q*w} cm. Calcule ${A}${N} en cm.`,[String(p*w)],`Thalès : ${A}${N}/${A}${C} = ${A}${M}/${A}${B}, donc ${A}${N} = ${q*w} × ${p*u} ÷ ${q*u} = ${p*w} cm.`);
    if(t===3){const ok=alea(0,1),AM=p*u,AB=q*u,AC=q*w,AN=ok?p*w:(p*w+1<q*w?p*w+1:p*w-1);if(AN<=0)return GM.thales();
      return qcm(`Les points ${A}, ${M}, ${B} et ${A}, ${N}, ${C} sont alignés dans le même ordre. ${A}${M} = ${AM} cm, ${A}${B} = ${AB} cm, ${A}${N} = ${AN} cm et ${A}${C} = ${AC} cm. Les droites (${M}${N}) et (${B}${C}) sont-elles parallèles ?`,ok?"oui":"non",[ok?"non":"oui"],`On compare ${A}${M}/${A}${B} et ${A}${N}/${A}${C} par les produits en croix : ${AM} × ${AC} = ${AM*AC} et ${AN} × ${AB} = ${AN*AB}. ${ok?"Égaux : d'après la réciproque de Thalès, les droites sont parallèles.":"Différents : les droites ne sont pas parallèles."}`);}
    const b=[
      {q:"Pour appliquer le théorème de Thalès dans un triangle, il faut savoir que :",b:"deux droites sont parallèles",f:["le triangle est rectangle","deux côtés sont égaux","les angles sont droits"],e:"Thalès sert à calculer des longueurs quand on a deux droites parallèles coupées par deux sécantes."},
      {q:"La réciproque du théorème de Thalès sert à démontrer que :",b:"deux droites sont parallèles",f:["un triangle est rectangle","deux longueurs sont égales","un angle mesure 90°"],e:"Si les rapports sont égaux et les points dans le même ordre, les droites sont parallèles."},
      {q:"Quel théorème permet de démontrer qu'un triangle est rectangle ?",b:"la réciproque du théorème de Pythagore",f:["le théorème de Thalès","la réciproque de Thalès","la trigonométrie"],e:"On compare le carré du plus grand côté à la somme des carrés des deux autres."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);
  },
  trigo(){
    const [R,S,T]=pioche(TRI);const t=alea(1,4);const ang=`l'angle ${R}${S}${T} (de sommet ${S})`;
    const intro=`Le triangle ${R}${S}${T} est rectangle en ${R}.`;
    if(t===1){const k=alea(0,2),nom=["cos","sin","tan"][k];
      const o=[`${R}${S}/${S}${T}`,`${R}${T}/${S}${T}`,`${R}${T}/${R}${S}`,`${R}${S}/${R}${T}`];
      return qcm(`${intro} Que vaut ${["le cosinus","le sinus","la tangente"][k]} de ${ang} ?`,o[k],o.filter((_,i)=>i!==k),`Pour l'angle de sommet ${S} : hypoténuse ${S}${T}, côté adjacent ${R}${S}, côté opposé ${R}${T}. ${nom} = ${["adjacent/hypoténuse","opposé/hypoténuse","opposé/adjacent"][k]} (CAH-SOH-TOA).`);}
    if(t===2){for(;;){const h=alea(5,15),a=alea(20,70),c=alea(0,1),v=arr1(h*(c?Math.cos(rad(a)):Math.sin(rad(a))));if(v===null)continue;
      const cote=c?`${R}${S}`:`${R}${T}`;
      return saisie(`${intro} ${S}${T} = ${h} cm et ${ang} mesure ${a}°. Calcule ${cote}, arrondi au dixième de cm.`,[vg(v),String(v)],`${cote} est le côté ${c?"adjacent":"opposé"} à l'angle et ${S}${T} l'hypoténuse : ${cote} = ${h} × ${c?"cos":"sin"}(${a}°) ≈ ${vg(v)} cm.`);}}
    if(t===3){for(;;){const h=alea(6,15),d=alea(2,h-1),v=arr0(Math.acos(d/h)*180/Math.PI);if(v===null)continue;
      return saisie(`${intro} ${R}${S} = ${d} cm et ${S}${T} = ${h} cm. Calcule la mesure de ${ang}, arrondie au degré.`,[String(v),v+"°"],`cos(${R}${S}${T}) = ${R}${S}/${S}${T} = ${d}/${h}, donc l'angle vaut arccos(${d}/${h}) ≈ ${v}° (touche cos⁻¹ ou Arccos de la calculatrice).`);}}
    for(;;){const d=alea(3,12),a=alea(20,65),v=arr1(d*Math.tan(rad(a)));if(v===null)continue;
      return saisie(`${intro} ${R}${S} = ${d} cm et ${ang} mesure ${a}°. Calcule ${R}${T}, arrondi au dixième de cm.`,[vg(v),String(v)],`${R}${T} est opposé à l'angle, ${R}${S} adjacent : tan(${a}°) = ${R}${T}/${R}${S}, donc ${R}${T} = ${d} × tan(${a}°) ≈ ${vg(v)} cm.`);}
  },
  homothetie(){
    const t=alea(1,4);
    if(t===1){const k=pioche([2,3,4,-2,-3,0.5,-0.5,1.5]),L=alea(2,12),r=r2(Math.abs(k)*L);
      return saisie(`Une homothétie de rapport ${vg(k)} transforme un segment de ${L} cm en un segment de quelle longueur, en cm ?`,[vg(r),String(r)],`Les longueurs sont multipliées par ${vg(Math.abs(k))} (la valeur du rapport sans son signe) : ${L} × ${vg(Math.abs(k))} = ${vg(r)} cm.`);}
    if(t===2){const k=pioche([2,3,4,5,0.5]);
      return qcm(`Dans un agrandissement ou une réduction de rapport ${vg(k)}, les aires sont multipliées par :`,vg(r2(k*k)),[vg(k),vg(r2(k*k*k)),vg(2*k)],`Les longueurs sont multipliées par ${vg(k)}, les aires par ${vg(k)}² = ${vg(r2(k*k))}, les volumes par ${vg(k)}³ = ${vg(r2(k*k*k))}.`);}
    if(t===3){const k=pioche([2,3]),V=alea(2,15);
      return saisie(`Un solide a un volume de ${V} cm³. On l'agrandit avec un rapport ${k}. Quel est le volume du solide agrandi, en cm³ ?`,[String(V*k**3)],`Les volumes sont multipliés par ${k}³ = ${k**3} : ${V} × ${k**3} = ${V*k**3} cm³.`);}
    const b=[
      {q:"Une homothétie de rapport −1 est :",b:"une symétrie centrale",f:["une symétrie axiale","une translation","un agrandissement"],e:"L'image est à la même distance du centre, de l'autre côté."},
      {q:"Une homothétie de rapport 0,5 est :",b:"une réduction",f:["un agrandissement","une symétrie centrale","une rotation"],e:"Si le rapport est entre −1 et 1 (sans être nul), c'est une réduction."},
      {q:"Avec une homothétie de rapport négatif, l'image d'un point M est :",b:"de l'autre côté du centre par rapport à M",f:["du même côté que M","toujours confondue avec M","sur un cercle de centre M"],e:"Le centre, le point et son image sont alignés ; le signe moins fait changer de côté."},
      {q:"Une homothétie conserve :",b:"les angles et le parallélisme",f:["les longueurs","les aires","les volumes"],e:"Elle conserve la forme de la figure ; seules les dimensions changent (sauf rapport 1 ou −1)."},
      {q:"Une maquette au 1/100 réduit les longueurs par 100. Les volumes sont divisés par :",b:"1 000 000",f:["100","10 000","1 000"],e:"100³ = 1 000 000."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);
  },
  volume(){
    const t=alea(1,6);
    if(t===1){const r=pioche([3,6]);return qcm(`Quel est le volume exact d'une boule de rayon ${r} cm ?`,`${4*r**3/3}π cm³`,[`${r**3}π cm³`,`${4*r**3}π cm³`,`${2*r**3}π cm³`],`V = 4/3 × π × r³ = 4/3 × π × ${r**3} = ${4*r**3/3}π cm³.`);}
    if(t===2){for(;;){const r=alea(2,10),v=arr0(4/3*Math.PI*r**3);if(v===null)continue;
      return saisie(`Calcule le volume d'une boule de rayon ${r} cm, arrondi au cm³.`,[String(v),milliers(v)],`V = 4/3 × π × ${r}³ = 4/3 × π × ${r**3} ≈ ${milliers(v)} cm³.`);}}
    if(t===3){const r=alea(2,9);return qcm(`Quelle est l'aire exacte d'une sphère de rayon ${r} cm ?`,`${4*r*r}π cm²`,[`${r*r}π cm²`,`${2*r*r}π cm²`,`${4*r**3}π cm²`],`Aire de la sphère = 4 × π × r² = 4 × π × ${r*r} = ${4*r*r}π cm².`);}
    if(t===4){for(;;){const r=alea(2,8),h=alea(3,15),v=arr0(Math.PI*r*r*h/3);if(v===null)continue;
      return saisie(`Calcule le volume d'un cône de révolution de rayon ${r} cm et de hauteur ${h} cm, arrondi au cm³.`,[String(v),milliers(v)],`V = (π × r² × h) ÷ 3 = (π × ${r*r} × ${h}) ÷ 3 ≈ ${milliers(v)} cm³.`);}}
    if(t===5){const a=alea(2,9),b=alea(2,9),h=3*alea(1,5);
      return saisie(`Une pyramide a pour base un rectangle de ${a} cm sur ${b} cm et une hauteur de ${h} cm. Quel est son volume, en cm³ ?`,[String(a*b*h/3)],`V = aire de la base × hauteur ÷ 3 = ${a*b} × ${h} ÷ 3 = ${a*b*h/3} cm³.`);}
    const b=[
      {q:"La formule du volume d'une boule de rayon r est :",b:"4/3 × π × r³",f:["4 × π × r²","π × r² × h","2 × π × r"],e:"4 × π × r² est l'aire de la sphère ; 2 × π × r est le périmètre d'un cercle."},
      {q:"La section d'une boule par un plan est :",b:"un disque",f:["un carré","un triangle","un rectangle"],e:"Le disque est le plus grand quand le plan passe par le centre."},
      {q:"Combien de litres contient 1 m³ ?",b:"1 000 L",f:["100 L","10 L","10 000 L"],e:"1 m³ = 1 000 dm³ et 1 dm³ = 1 L."},
      {q:"1 dm³ correspond à :",b:"1 litre",f:["1 centilitre","10 litres","1 millilitre"],e:"1 dm³ = 1 L et 1 cm³ = 1 mL."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);
  },
  stats(){
    const t=alea(1,5);const P=pioche(PRENOMS);
    if(t===1||t===2){const n=t===1?7:6;const v=Array.from({length:n},()=>alea(4,20));const s=[...v].sort((a,b)=>a-b);
      const med=n%2?s[(n-1)/2]:(s[n/2-1]+s[n/2])/2;
      return saisie(`Notes de ${P} sur 20 : ${v.join(" ; ")}. Quelle est la médiane de cette série ?`,[vg(med),String(med)],`On range dans l'ordre : ${s.join(" ; ")}. ${n%2?`Il y a ${n} valeurs : la médiane est la ${(n+1)/2}e, ${med}.`:`Il y a ${n} valeurs : la médiane est entre la ${n/2}e et la ${n/2+1}e, (${s[n/2-1]} + ${s[n/2]}) ÷ 2 = ${vg(med)}.`}`);}
    if(t===3){const v=Array.from({length:7},()=>alea(-6,28));
      const mx=Math.max(...v),mn=Math.min(...v);
      return saisie(`Températures relevées (en °C) : ${v.map(sg).join(" ; ")}. Quelle est l'étendue de cette série ?`,repN(mx-mn),`Étendue = plus grande valeur − plus petite valeur = ${sg(mx)} − ${pa(mn)} = ${mx-mn} °C.`);}
    if(t===4){for(;;){const m=alea(8,16),v=Array.from({length:4},()=>alea(5,20));const last=5*m-v.reduce((a,b)=>a+b,0);if(last<0||last>20)continue;v.push(last);
      return saisie(`Notes de ${P} : ${v.join(" ; ")}. Quelle est sa moyenne ?`,[String(m)],`On additionne : ${v.join(" + ")} = ${5*m}, puis on divise par l'effectif 5 : ${5*m} ÷ 5 = ${m}.`);}}
    const b=[
      {q:"La médiane d'une série statistique :",b:"partage la série en deux groupes de même effectif",f:["est toujours égale à la moyenne","est la valeur la plus fréquente","est la plus grande valeur"],e:"Au moins la moitié des valeurs sont inférieures ou égales à la médiane, au moins la moitié supérieures ou égales."},
      {q:"L'étendue d'une série mesure :",b:"la dispersion des valeurs",f:["la valeur centrale","la valeur moyenne","l'effectif total"],e:"Étendue = maximum − minimum."},
      {q:"Une valeur très grande ajoutée à une série modifie surtout :",b:"la moyenne",f:["la médiane","l'effectif des autres valeurs","rien du tout"],e:"La moyenne est sensible aux valeurs extrêmes ; la médiane l'est beaucoup moins."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);
  },
  proba(){
    const t=alea(1,5);
    if(t===1){const r=alea(1,9),b=alea(1,9),v=alea(1,9),T=r+b+v;const c=pioche([["rouge",r],["bleue",b],["verte",v]]);
      const acc=[`${c[1]}/${T}`];if(frac(c[1],T)!==acc[0])acc.push(frac(c[1],T));
      return saisie(`Un sac contient ${r} boule${r>1?"s":""} rouge${r>1?"s":""}, ${b} bleue${b>1?"s":""} et ${v} verte${v>1?"s":""}. On tire une boule au hasard. Quelle est la probabilité qu'elle soit ${c[0]} ? (donne une fraction)`,acc,`Il y a ${T} boules, dont ${c[1]} ${c[0]}${c[1]>1?"s":""}, toutes ont la même chance : P = ${c[1]}/${T}${acc.length>1?" = "+acc[1]:""}.`);}
    if(t===2){const ev=pioche([["obtenir un nombre pair",[2,4,6]],["obtenir un multiple de 3",[3,6]],["obtenir un nombre premier",[2,3,5]],["obtenir un nombre supérieur à 4",[5,6]],["obtenir 6",[6]],["obtenir un nombre inférieur ou égal à 4",[1,2,3,4]]]);
      const n=ev[1].length,acc=[`${n}/6`];if(frac(n,6)!==acc[0])acc.push(frac(n,6));
      return saisie(`On lance un dé équilibré à 6 faces. Quelle est la probabilité d'${ev[0]} ? (donne une fraction)`,acc,`Issues favorables : ${ev[1].join(", ")}, soit ${n} sur 6. P = ${n}/6${acc.length>1?" = "+acc[1]:""}.`);}
    if(t===3){const p=alea(5,95)/100;const q=r2(1-p);
      return saisie(`La probabilité qu'un événement A se réalise est ${vg(p)}. Quelle est la probabilité de l'événement contraire « non A » ?`,[vg(q),String(q)],`P(non A) = 1 − P(A) = 1 − ${vg(p)} = ${vg(q)}.`);}
    const b=[
      {q:"La probabilité d'un événement certain est :",b:"1",f:["0","0,5","100"],e:"Une probabilité est toujours comprise entre 0 (impossible) et 1 (certain)."},
      {q:"La probabilité d'un événement impossible est :",b:"0",f:["1","−1","0,5"],e:"Par exemple, obtenir 7 avec un dé à 6 faces."},
      {q:"On lance deux fois une pièce équilibrée. Quelle est la probabilité d'obtenir deux fois « pile » ?",b:"1/4",f:["1/2","1/3","2/4"],e:"Issues équiprobables : PP, PF, FP, FF. Une seule est favorable : 1/4."},
      {q:"On lance deux dés équilibrés à 6 faces. Quelle est la probabilité que la somme fasse 12 ?",b:"1/36",f:["1/12","1/6","2/36"],e:"Il y a 6 × 6 = 36 issues, et seul le couple (6 ; 6) donne 12."},
      {q:"Dans un jeu de 32 cartes, on tire une carte au hasard. Quelle est la probabilité d'obtenir un as ?",b:"1/8",f:["1/32","1/4","4/52"],e:"Il y a 4 as sur 32 cartes : 4/32 = 1/8."},
      {q:"Laquelle de ces valeurs ne peut pas être une probabilité ?",b:"1,2",f:["0,75","1/3","0"],e:"Une probabilité est toujours comprise entre 0 et 1."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);
  },
  algo(){
    const t=alea(1,5);
    if(t===1){const n=alea(2,9),a=alea(2,5),b=alea(1,9),c=alea(2,4),r=(n*a+b)*c;
      return saisie(`Programme de calcul : choisir un nombre ; le multiplier par ${a} ; ajouter ${b} ; multiplier le résultat par ${c}. Quel résultat obtient-on en choisissant ${n} ?`,[String(r)],`${n} × ${a} = ${n*a} ; ${n*a} + ${b} = ${n*a+b} ; ${n*a+b} × ${c} = ${r}.`);}
    if(t===2){const n=pioche([3,5,6,10]),ang=360/n;
      return qcm(`Dans Scratch, pour tracer un polygone régulier à ${n} côtés avec « répéter ${n} fois : avancer, tourner », de combien de degrés faut-il tourner à chaque fois ?`,ang+"°",[(180*(n-2)/n)+"°","360°",(180/n)+"°"],`Le lutin fait un tour complet (360°) en ${n} rotations : 360 ÷ ${n} = ${ang}°.`);}
    if(t===3){const a=alea(1,10),k=alea(2,6),b=alea(2,9);
      if(alea(0,1))return saisie(`On met la variable x à ${a}, puis : répéter ${k} fois « ajouter ${b} à x ». Que vaut x à la fin ?`,[String(a+k*b)],`x augmente ${k} fois de ${b} : ${a} + ${k} × ${b} = ${a+k*b}.`);
      const k2=alea(2,5);return saisie(`On met la variable x à ${a}, puis : répéter ${k2} fois « mettre x à x × 2 ». Que vaut x à la fin ?`,[String(a*2**k2)],`x est doublé ${k2} fois : ${a} × 2${sup(k2)} = ${a*2**k2}.`);}
    if(t===4){const x=alea(1,20),s=alea(5,15);
      return qcm(`Un programme contient : « si x > ${s} alors dire Gagné sinon dire Perdu ». Que dit le lutin si x = ${x} ?`,x>s?"Gagné":"Perdu",[x>s?"Perdu":"Gagné","Rien"],`La condition ${x} > ${s} est ${x>s?"vraie : on exécute le « alors »":"fausse : on exécute le « sinon »"}.`);}
    const b=[
      {q:"Dans un programme, une variable sert à :",b:"stocker une valeur qui peut changer",f:["répéter des instructions","dessiner un trait","arrêter le programme"],e:"Par exemple un score, un compteur ou un nombre choisi."},
      {q:"La boucle « répéter jusqu'à … » s'arrête :",b:"quand la condition devient vraie",f:["après 10 tours exactement","jamais","quand on appuie sur le drapeau vert"],e:"Le nombre de tours dépend de la condition."},
      {q:"Un bloc « quand le drapeau vert est cliqué » est :",b:"un événement qui lance le script",f:["une boucle","une variable","une condition"],e:"Les blocs d'événement déclenchent un programme."},
      {q:"Dans Scratch, l'instruction « si … alors … sinon … » est :",b:"une instruction conditionnelle",f:["une boucle infinie","une variable","un événement"],e:"Elle choisit entre deux actions selon que la condition est vraie ou fausse."}];
    const x=pioche(b);return qcm(x.q,x.b,x.f,x.e);
  },
  calcmental(){
    const t=alea(1,7);
    if(t===1)return GM.relatifs();
    if(t===2){const n=alea(11,20);return saisie(`Calcule mentalement : ${n}²`,[String(n*n)],`${n}² = ${n} × ${n} = ${n*n}.`);}
    if(t===3){const p=pioche([10,20,25,50,75]),v=alea(2,30)*20;return saisie(`Calcule mentalement : ${p} % de ${v}`,[String(v*p/100)],`${p} % de ${v} = ${v} × ${p} ÷ 100 = ${v*p/100}.`);}
    if(t===4){const d=pioche([3,4,5,6,8]),n=alea(1,d-1),q=d*alea(2,12);return saisie(`Calcule mentalement : ${n}/${d} de ${q}`,[String(q*n/d)],`${q} ÷ ${d} = ${q/d}, puis × ${n} = ${q*n/d}.`);}
    if(t===5){const n=alea(2,15);return saisie(`Calcule mentalement : √${n*n}`,[String(n)],`${n} × ${n} = ${n*n}, donc √${n*n} = ${n}.`);}
    if(t===6){const a=alea(12,999)/10,m=pioche([[10,"×"],[100,"×"],[10,"÷"],[100,"÷"]]);const r=m[1]==="×"?r2(a*m[0]):r2(a/m[0]);
      return saisie(`Calcule mentalement : ${vg(a)} ${m[1]} ${m[0]}`,[vg(r),String(r)],`${m[1]==="×"?"Multiplier":"Diviser"} par ${m[0]}, c'est décaler les chiffres de ${m[0]===10?"1 rang":"2 rangs"} ${m[1]==="×"?"vers la gauche":"vers la droite"} : ${vg(r)}.`);}
    const q=alea(2,6),p=alea(2,9),P=pioche(PRENOMS);let n=alea(3,12);while(n===q)n=alea(3,12);
    return saisie(`${P} paie ${q*p} € pour ${q} places de cinéma. Combien paierait-on pour ${n} places ?`,[String(n*p),n*p+" €"],`Une place coûte ${q*p} ÷ ${q} = ${p} €, donc ${n} places coûtent ${n} × ${p} = ${n*p} €.`);
  }
};
GM.geom=()=>pioche([GM.pythagore,GM.thales,GM.trigo])();
GM.litteral=()=>pioche([GM.developpe,GM.identites,GM.factorise,GM.equation])();
GM.bilan1=()=>pioche([GM.relatifs,GM.diviseurs,GM.premiers,GM.fractions,GM.fracops,GM.puissances])();
GM.bilan2=()=>pioche([GM.racines,GM.developpe,GM.identites,GM.factorise,GM.equation,GM.eqproduit])();
GM.bilan3=()=>pioche([GM.thales,GM.fonction,GM.lineaire,GM.affine,GM.pourcentage])();
GM.bilan4=()=>pioche([GM.inequation,GM.trigo,GM.homothetie,GM.volume,GM.stats,GM.proba])();
GM.automatismes=()=>pioche([GM.calcmental,GM.bilan1,GM.bilan2,GM.bilan3,GM.bilan4,GM.geom])();
function exoMaths(tag){const f=GM[tag]||GM.automatismes;return f();}

/* ---------- FRANÇAIS ---------- */
const TERM_FUT=["ai","as","a","ons","ez","ont"],TERM_CND=["ais","ais","ait","ions","iez","aient"];
const VERBES=[
 {inf:"chanter",pres:["chante","chantes","chante","chantons","chantez","chantent"],imp:["chantais","chantais","chantait","chantions","chantiez","chantaient"],fs:"chanter",ps:["chantai","chantas","chanta","chantâmes","chantâtes","chantèrent"],subj:["chante","chantes","chante","chantions","chantiez","chantent"],pp:"chanté",aux:"avoir"},
 {inf:"manger",pres:["mange","manges","mange","mangeons","mangez","mangent"],imp:["mangeais","mangeais","mangeait","mangions","mangiez","mangeaient"],fs:"manger",ps:["mangeai","mangeas","mangea","mangeâmes","mangeâtes","mangèrent"],subj:["mange","manges","mange","mangions","mangiez","mangent"],pp:"mangé",aux:"avoir"},
 {inf:"finir",pres:["finis","finis","finit","finissons","finissez","finissent"],imp:["finissais","finissais","finissait","finissions","finissiez","finissaient"],fs:"finir",ps:["finis","finis","finit","finîmes","finîtes","finirent"],subj:["finisse","finisses","finisse","finissions","finissiez","finissent"],pp:"fini",aux:"avoir"},
 {inf:"prendre",pres:["prends","prends","prend","prenons","prenez","prennent"],imp:["prenais","prenais","prenait","prenions","preniez","prenaient"],fs:"prendr",ps:["pris","pris","prit","prîmes","prîtes","prirent"],subj:["prenne","prennes","prenne","prenions","preniez","prennent"],pp:"pris",aux:"avoir"},
 {inf:"aller",pres:["vais","vas","va","allons","allez","vont"],imp:["allais","allais","allait","allions","alliez","allaient"],fs:"ir",ps:["allai","allas","alla","allâmes","allâtes","allèrent"],subj:["aille","ailles","aille","allions","alliez","aillent"],pp:"allé",aux:"être"},
 {inf:"faire",pres:["fais","fais","fait","faisons","faites","font"],imp:["faisais","faisais","faisait","faisions","faisiez","faisaient"],fs:"fer",ps:["fis","fis","fit","fîmes","fîtes","firent"],subj:["fasse","fasses","fasse","fassions","fassiez","fassent"],pp:"fait",aux:"avoir"},
 {inf:"être",pres:["suis","es","est","sommes","êtes","sont"],imp:["étais","étais","était","étions","étiez","étaient"],fs:"ser",ps:["fus","fus","fut","fûmes","fûtes","furent"],subj:["sois","sois","soit","soyons","soyez","soient"],pp:"été",aux:"avoir"},
 {inf:"avoir",pres:["ai","as","a","avons","avez","ont"],imp:["avais","avais","avait","avions","aviez","avaient"],fs:"aur",ps:["eus","eus","eut","eûmes","eûtes","eurent"],subj:["aie","aies","ait","ayons","ayez","aient"],pp:"eu",aux:"avoir"},
 {inf:"venir",pres:["viens","viens","vient","venons","venez","viennent"],imp:["venais","venais","venait","venions","veniez","venaient"],fs:"viendr",ps:["vins","vins","vint","vînmes","vîntes","vinrent"],subj:["vienne","viennes","vienne","venions","veniez","viennent"],pp:"venu",aux:"être"},
 {inf:"partir",pres:["pars","pars","part","partons","partez","partent"],imp:["partais","partais","partait","partions","partiez","partaient"],fs:"partir",ps:["partis","partis","partit","partîmes","partîtes","partirent"],subj:["parte","partes","parte","partions","partiez","partent"],pp:"parti",aux:"être"},
 {inf:"pouvoir",pres:["peux","peux","peut","pouvons","pouvez","peuvent"],imp:["pouvais","pouvais","pouvait","pouvions","pouviez","pouvaient"],fs:"pourr",ps:["pus","pus","put","pûmes","pûtes","purent"],subj:["puisse","puisses","puisse","puissions","puissiez","puissent"],pp:"pu",aux:"avoir"},
 {inf:"voir",pres:["vois","vois","voit","voyons","voyez","voient"],imp:["voyais","voyais","voyait","voyions","voyiez","voyaient"],fs:"verr",ps:["vis","vis","vit","vîmes","vîtes","virent"],subj:["voie","voies","voie","voyions","voyiez","voient"],pp:"vu",aux:"avoir"},
 {inf:"dire",pres:["dis","dis","dit","disons","dites","disent"],imp:["disais","disais","disait","disions","disiez","disaient"],fs:"dir",ps:["dis","dis","dit","dîmes","dîtes","dirent"],subj:["dise","dises","dise","disions","disiez","disent"],pp:"dit",aux:"avoir"},
 {inf:"savoir",pres:["sais","sais","sait","savons","savez","savent"],imp:["savais","savais","savait","savions","saviez","savaient"],fs:"saur",ps:["sus","sus","sut","sûmes","sûtes","surent"],subj:["sache","saches","sache","sachions","sachiez","sachent"],pp:"su",aux:"avoir"},
 {inf:"vouloir",pres:["veux","veux","veut","voulons","voulez","veulent"],imp:["voulais","voulais","voulait","voulions","vouliez","voulaient"],fs:"voudr",ps:["voulus","voulus","voulut","voulûmes","voulûtes","voulurent"],subj:["veuille","veuilles","veuille","voulions","vouliez","veuillent"],pp:"voulu",aux:"avoir"}
];
VERBES.forEach(v=>{v.fut=TERM_FUT.map(t=>v.fs+t);v.cond=TERM_CND.map(t=>v.fs+t);});
const PRON=["je","tu","il","nous","vous","ils"];
const NOM_TEMPS={pres:"présent de l'indicatif",imp:"imparfait de l'indicatif",fut:"futur simple",cond:"conditionnel présent",ps:"passé simple",subj:"subjonctif présent",pc:"passé composé",pqp:"plus-que-parfait"};
function formeVerbe(v,tp,i){
  if(tp==="pc"||tp==="pqp"){
    const etre=v.aux==="être";
    const aux=tp==="pc"?(etre?["suis","es","est","sommes","êtes","sont"]:["ai","as","a","avons","avez","ont"])[i]:(etre?VERBES[6].imp:VERBES[7].imp)[i];
    return aux+" "+(etre&&i>=3?v.pp+"s":v.pp);
  }
  return v[tp][i];
}
const avecPron=(i,f)=>(i===0&&/^[aeiouéèêh]/i.test(f))?"j'"+f:PRON[i]+" "+f;
const GF={
  conjug(temps){return function(){
    const v=pioche(VERBES),i=alea(0,5),tp=temps||pioche(["pres","imp","fut","cond","ps","subj","pc","pqp"]);
    const f=formeVerbe(v,tp,i);
    const que=(i===2||i===5)?"qu'"+PRON[i]+" "+f:"que "+avecPron(i,f);
    if(tp==="subj")return saisie(`Conjugue « ${v.inf} » au subjonctif présent : il faut ${(i===2||i===5)?"qu'"+PRON[i]:"que "+PRON[i]} …`,[f,avecPron(i,f),que],`Il faut ${que}. Le subjonctif s'emploie après « il faut que », « bien que », « pour que »…`);
    const acc=[f,avecPron(i,f)];
    const rq=(tp==="pc"||tp==="pqp")?` Avec l'auxiliaire ${v.aux}, le participe ${v.aux==="être"?"s'accorde avec le sujet":"ne s'accorde pas avec le sujet"}.`:(tp==="cond"?" Conditionnel = radical du futur + terminaisons de l'imparfait.":(tp==="ps"?" Le passé simple est le temps des actions de premier plan dans le récit.":""));
    return saisie(`Conjugue « ${v.inf} » au ${NOM_TEMPS[tp]} : ${PRON[i]} …`,acc,`${avecPron(i,f)}.${rq}`);
  };},
  temps(){
    const v=pioche(VERBES),i=alea(0,5),tp=pioche(["pres","imp","fut","cond","ps","subj","pc","pqp"]);const f=formeVerbe(v,tp,i);
    const amb=Object.keys(NOM_TEMPS).filter(k=>k!==tp&&formeVerbe(v,k,i)===f);
    if(amb.length)return GF.temps();
    const noms=Object.keys(NOM_TEMPS).filter(k=>k!==tp).map(k=>NOM_TEMPS[k]);
    return qcm(`À quel temps est conjugué le verbe « ${v.inf} » dans : « ${avecPron(i,f)} » ?`,NOM_TEMPS[tp],melange(noms).slice(0,3),`« ${avecPron(i,f)} » : ${NOM_TEMPS[tp]}. Repère la terminaison et, aux temps composés, le temps de l'auxiliaire.`);
  }
};
const BANQUE_F=[
 // phrase complexe
 {t:"complexe",q:"Combien de propositions compte la phrase « Quand la cloche sonna, les élèves sortirent et la cour se remplit » ?",b:"3",f:["2","4","1"],e:"Une proposition par verbe conjugué : sonna, sortirent, se remplit."},
 {t:"complexe",q:"« Il pleuvait ; nous sommes restés à l'abri. » Ces deux propositions sont :",b:"juxtaposées",f:["coordonnées","subordonnées","relatives"],e:"Elles sont reliées par un signe de ponctuation, sans mot de liaison."},
 {t:"complexe",q:"« Il pleuvait, mais nous sommes sortis. » Ces deux propositions sont :",b:"coordonnées",f:["juxtaposées","subordonnées","relatives"],e:"« mais » est une conjonction de coordination (mais, ou, et, donc, or, ni, car)."},
 {t:"complexe",q:"Une proposition subordonnée :",b:"dépend d'une proposition principale",f:["peut toujours former une phrase seule","ne contient jamais de verbe","est toujours placée en début de phrase"],e:"Elle est introduite par un mot subordonnant et complète la principale."},
 {t:"complexe",q:"« Je pense qu'il viendra. » La proposition « qu'il viendra » est :",b:"une subordonnée conjonctive complétive",f:["une subordonnée relative","une proposition indépendante","une subordonnée circonstancielle de temps"],e:"Introduite par la conjonction « que », elle est COD du verbe « pense »."},
 {t:"complexe",q:"Quel mot est une conjonction de subordination ?",b:"lorsque",f:["donc","mais","dont"],e:"Lorsque, quand, parce que, si, bien que… introduisent une subordonnée conjonctive. « Dont » est un pronom relatif."},
 {t:"complexe",q:"Dans « Le film que nous avons vu était long », quelle est la proposition principale ?",b:"Le film était long",f:["que nous avons vu","nous avons vu","était long que"],e:"On retire la subordonnée relative « que nous avons vu » : il reste la principale."},
 // relatives
 {t:"relative",q:"« Le livre que tu m'as prêté est passionnant. » « que tu m'as prêté » est :",b:"une subordonnée relative",f:["une subordonnée complétive","une proposition principale","une subordonnée de cause"],e:"« que » reprend un nom (le livre) : c'est un pronom relatif."},
 {t:"relative",q:"Dans « La ville où je suis né est au bord de la mer », quel est l'antécédent du pronom « où » ?",b:"la ville",f:["la mer","je","né"],e:"L'antécédent est le nom que le pronom relatif reprend."},
 {t:"relative",q:"Complète : « C'est le film ___ j'ai le plus aimé. »",b:"que",f:["qui","dont","où"],e:"Le pronom remplace le COD de « aimer » : on utilise « que »."},
 {t:"relative",q:"Complète : « Voici la maison ___ j'ai grandi. »",b:"où",f:["que","qui","dont"],e:"« où » reprend un lieu ou un moment."},
 {t:"relative",q:"Complète : « C'est une histoire ___ je me souviendrai. »",b:"dont",f:["que","qui","où"],e:"On se souvient DE quelque chose : « dont » remplace un complément introduit par « de »."},
 {t:"relative",q:"Dans « Le chien qui aboie appartient à mes voisins », quelle est la fonction de « qui » ?",b:"sujet du verbe « aboie »",f:["COD du verbe « aboie »","complément du nom","attribut du sujet"],e:"« qui » est le pronom relatif sujet ; « que » est souvent COD."},
 // conjonctives circonstancielles
 {t:"conjonctive",q:"« Il est resté chez lui parce qu'il était malade. » La subordonnée exprime :",b:"la cause",f:["la conséquence","le but","la condition"],e:"« parce que » introduit la cause."},
 {t:"conjonctive",q:"« Bien qu'il soit fatigué, il continue. » La subordonnée exprime :",b:"la concession",f:["la cause","le temps","le but"],e:"La concession : un fait qui aurait dû empêcher l'action principale."},
 {t:"conjonctive",q:"« Je t'explique pour que tu comprennes. » La subordonnée exprime :",b:"le but",f:["la cause","la conséquence","le temps"],e:"« pour que », « afin que » expriment le but et sont suivis du subjonctif."},
 {t:"conjonctive",q:"« Si tu viens, nous irons au cinéma. » La subordonnée exprime :",b:"la condition",f:["la cause","la concession","le but"],e:"« si » introduit une condition (une hypothèse)."},
 {t:"conjonctive",q:"« Il a tant couru qu'il est épuisé. » La subordonnée exprime :",b:"la conséquence",f:["la cause","le but","la comparaison"],e:"« tant… que », « si… que », « si bien que » expriment la conséquence."},
 {t:"conjonctive",q:"Après « bien que », le verbe se met :",b:"au subjonctif",f:["à l'indicatif","à l'infinitif","au conditionnel"],e:"« Bien qu'il soit tard » et non « bien qu'il est tard »."},
 {t:"conjonctive",q:"Complète : « J'attendrai jusqu'à ce que tu ___ prêt. »",b:"sois",f:["es","seras","étais"],e:"« jusqu'à ce que » est suivi du subjonctif : que tu sois."},
 // voix
 {t:"voix",q:"« Le voleur est poursuivi par les policiers. » Cette phrase est à la voix :",b:"passive",f:["active","pronominale","impersonnelle"],e:"Le sujet subit l'action ; l'agent est introduit par « par »."},
 {t:"voix",q:"Mets à la voix passive : « Le jury récompense Inès. »",b:"Inès est récompensée par le jury.",f:["Inès a récompensé le jury.","Le jury est récompensé par Inès.","Inès récompense le jury."],e:"Le COD devient sujet, le verbe devient être + participe accordé, l'ancien sujet devient complément d'agent."},
 {t:"voix",q:"Dans une phrase passive, le groupe introduit par « par » s'appelle :",b:"le complément d'agent",f:["le COD","l'attribut du sujet","le complément du nom"],e:"Il désigne celui qui fait l'action."},
 {t:"voix",q:"« La lettre a été écrite par Hugo. » À quel temps est ce verbe passif ?",b:"au passé composé",f:["au plus-que-parfait","au présent","au passé simple"],e:"On regarde le temps de l'auxiliaire être : « a été » est au passé composé."},
 {t:"voix",q:"Quelle phrase est à la voix active ?",b:"Les pompiers éteignent l'incendie.",f:["L'incendie est éteint par les pompiers.","La porte a été ouverte.","Le gâteau sera mangé."],e:"À la voix active, le sujet fait l'action."},
 {t:"voix",q:"Mets à la voix active : « Le match a été gagné par notre équipe. »",b:"Notre équipe a gagné le match.",f:["Notre équipe est gagnée par le match.","Le match a gagné notre équipe.","Notre équipe gagnait le match."],e:"Le complément d'agent devient sujet ; on garde le temps (passé composé)."},
 // discours rapporté
 {t:"discours",q:"Il dit : « Je suis fatigué. » Au discours indirect, cela devient :",b:"Il dit qu'il est fatigué.",f:["Il dit que je suis fatigué.","Il dit : il est fatigué.","Il dit qu'il fut fatigué."],e:"On supprime les guillemets, on ajoute « que » et on adapte les pronoms."},
 {t:"discours",q:"Elle a dit : « Je viendrai demain. » Au discours indirect, cela devient :",b:"Elle a dit qu'elle viendrait le lendemain.",f:["Elle a dit que je viendrai demain.","Elle a dit qu'elle venait la veille.","Elle a dit : elle viendrait demain."],e:"Verbe introducteur au passé : le futur devient conditionnel et « demain » devient « le lendemain »."},
 {t:"discours",q:"« Pars ! » dit-il à sa sœur. Au discours indirect :",b:"Il dit à sa sœur de partir.",f:["Il dit à sa sœur qu'elle pars.","Il dit à sa sœur : pars.","Il dit à sa sœur que partir."],e:"Un ordre au discours indirect s'exprime souvent avec « de » + infinitif."},
 {t:"discours",q:"Quels signes introduisent le discours direct ?",b:"les deux-points et les guillemets",f:["le point-virgule","les parenthèses","les points de suspension"],e:"Puis un tiret à chaque changement d'interlocuteur."},
 {t:"discours",q:"Au discours indirect, « Viens-tu ? » demanda-t-elle devient :",b:"Elle demanda s'il venait.",f:["Elle demanda viens-tu.","Elle demanda qu'il vienne ?","Elle demanda : s'il venait."],e:"Une question fermée est introduite par « si », sans point d'interrogation."},
 {t:"discours",q:"Le verbe introducteur « s'exclamer » montre que les paroles sont :",b:"prononcées avec force ou émotion",f:["chuchotées","une question","un ordre poli"],e:"Le choix du verbe de parole (murmurer, crier, répliquer…) apporte une information."},
 // argumentation
 {t:"argumentation",q:"Dans un texte argumentatif, la thèse est :",b:"l'opinion défendue par l'auteur",f:["un exemple précis","le titre du texte","la conclusion du récit"],e:"Les arguments servent ensuite à la justifier."},
 {t:"argumentation",q:"Un argument sert à :",b:"justifier la thèse",f:["raconter une histoire","décrire un lieu","changer de sujet"],e:"Il est souvent illustré par un exemple."},
 {t:"argumentation",q:"Un exemple sert à :",b:"illustrer concrètement un argument",f:["remplacer la thèse","contredire l'auteur","conclure le texte"],e:"Il rend l'argument plus concret et plus convaincant."},
 {t:"argumentation",q:"Quel connecteur exprime l'opposition ?",b:"cependant",f:["donc","car","de plus"],e:"Cependant, pourtant, mais, toutefois, néanmoins."},
 {t:"argumentation",q:"Quel connecteur exprime la conséquence ?",b:"par conséquent",f:["pourtant","car","en effet"],e:"Donc, ainsi, par conséquent, c'est pourquoi."},
 {t:"argumentation",q:"Quel connecteur exprime la cause ?",b:"car",f:["donc","cependant","enfin"],e:"Car, parce que, puisque, en effet."},
 {t:"argumentation",q:"Quel connecteur sert à ajouter un argument ?",b:"de plus",f:["pourtant","donc","bref"],e:"De plus, en outre, par ailleurs, d'autre part."},
 {t:"argumentation",q:"« Certes, les écrans sont utiles, mais ils fatiguent les yeux. » « Certes » introduit :",b:"une concession",f:["une conclusion","une cause","un exemple"],e:"On reconnaît une idée adverse avant de la nuancer avec « mais »."},
 {t:"argumentation",q:"Convaincre, c'est surtout :",b:"faire appel à la raison par des arguments",f:["faire appel aux émotions","raconter un souvenir","donner un ordre"],e:"Persuader, c'est plutôt toucher les sentiments du destinataire."},
 {t:"argumentation",q:"Une question rhétorique est :",b:"une question qui n'attend pas de réponse",f:["une question posée à un professeur","une question à choix multiples","une question sans verbe"],e:"Elle sert à affirmer une idée avec force : « Qui pourrait accepter cela ? »"},
 // figures de style
 {t:"figures",q:"« Ses yeux brillaient comme des étoiles. » Quelle figure de style ?",b:"une comparaison",f:["une métaphore","une litote","une antithèse"],e:"Il y a un outil de comparaison : « comme »."},
 {t:"figures",q:"« La vie est un long fleuve tranquille. » Quelle figure de style ?",b:"une métaphore",f:["une comparaison","une hyperbole","une anaphore"],e:"Rapprochement sans outil de comparaison."},
 {t:"figures",q:"« La ville s'éveille en bâillant. » Quelle figure de style ?",b:"une personnification",f:["une comparaison","une litote","un oxymore"],e:"On prête à la ville un comportement humain."},
 {t:"figures",q:"« Je meurs de faim ! » Quelle figure de style ?",b:"une hyperbole",f:["un euphémisme","une litote","une antithèse"],e:"L'exagération : on ne meurt pas vraiment."},
 {t:"figures",q:"« Cette obscure clarté qui tombe des étoiles » (Corneille). Quelle figure de style ?",b:"un oxymore",f:["une comparaison","une anaphore","une hyperbole"],e:"Deux mots de sens opposés sont unis dans le même groupe : obscure / clarté."},
 {t:"figures",q:"« Va, je ne te hais point » (Corneille). Quelle figure de style ?",b:"une litote",f:["une hyperbole","une métaphore","une gradation"],e:"Dire moins pour suggérer plus : Chimène veut dire qu'elle aime Rodrigue."},
 {t:"figures",q:"« Il nous a quittés » pour dire « il est mort ». Quelle figure de style ?",b:"un euphémisme",f:["une hyperbole","un oxymore","une anaphore"],e:"On atténue une réalité brutale ou triste."},
 {t:"figures",q:"« Va, cours, vole, et nous venge » (Corneille). Quelle figure de style ?",b:"une gradation",f:["un oxymore","une litote","une antithèse"],e:"Les verbes sont de plus en plus forts."},
 {t:"figures",q:"« Pour qui sont ces serpents qui sifflent sur vos têtes ? » (Racine). Quelle figure de style ?",b:"une allitération",f:["une assonance","une métaphore","une litote"],e:"La répétition du son consonne [s] imite le sifflement."},
 {t:"figures",q:"Qu'est-ce qu'une anaphore ?",b:"la répétition d'un mot en début de vers ou de phrase",f:["une comparaison sans outil","une exagération","l'union de deux mots contraires"],e:"Exemple : « Paris outragé ! Paris brisé ! Paris martyrisé ! » (de Gaulle, 1944)."},
 {t:"figures",q:"« Je vis, je meurs » (Louise Labé). Quelle figure de style ?",b:"une antithèse",f:["une comparaison","une litote","une allitération"],e:"Deux idées opposées sont rapprochées dans la phrase."},
 // réécriture
 {t:"reecriture",q:"Réécris en remplaçant « je » par « nous » : « Je suis parti tôt car j'avais peur. »",b:"Nous sommes partis tôt car nous avions peur.",f:["Nous sommes parti tôt car nous avions peur.","Nous somme partis tôt car nous avons peur.","Nous sommes partis tôt car nous avons eu peur."],e:"Avec l'auxiliaire être, le participe s'accorde avec « nous » (pluriel) ; l'imparfait devient « avions »."},
 {t:"reecriture",q:"Réécris au passé composé : « Elle arrive et elle s'assoit. »",b:"Elle est arrivée et elle s'est assise.",f:["Elle a arrivé et elle s'est assis.","Elle est arrivé et elle s'est assise.","Elle arrivait et elle s'asseyait."],e:"Arriver et s'asseoir se conjuguent avec être : on accorde avec « elle »."},
 {t:"reecriture",q:"Réécris au pluriel : « Le soldat épuisé s'est endormi dans la tranchée. »",b:"Les soldats épuisés se sont endormis dans la tranchée.",f:["Les soldats épuisé se sont endormis dans la tranchée.","Les soldats épuisés se sont endormi dans la tranchée.","Les soldats épuisés s'est endormis dans la tranchée."],e:"Tout le groupe nominal et le participe (verbe pronominal) passent au pluriel."},
 {t:"reecriture",q:"Réécris en remplaçant « il » par « elles » : « Il est venu et il a vu sa famille. »",b:"Elles sont venues et elles ont vu leur famille.",f:["Elles sont venus et elles ont vu leur famille.","Elles sont venues et elles ont vues leur famille.","Elles est venue et elles a vu sa famille."],e:"« venues » s'accorde (auxiliaire être) ; « vu » ne s'accorde pas (avoir, COD placé après)."},
 {t:"reecriture",q:"Réécris à l'imparfait : « Nous partons quand le jour se lève. »",b:"Nous partions quand le jour se levait.",f:["Nous partîmes quand le jour se leva.","Nous partirons quand le jour se lèvera.","Nous partons quand le jour se levait."],e:"Imparfait : terminaisons -ais, -ais, -ait, -ions, -iez, -aient."},
 {t:"reecriture",q:"Réécris au futur : « Tu vois la mer et tu cours sur la plage. »",b:"Tu verras la mer et tu courras sur la plage.",f:["Tu voiras la mer et tu coureras sur la plage.","Tu verras la mer et tu coureras sur la plage.","Tu verrais la mer et tu courrais sur la plage."],e:"Voir → verr- ; courir → courr- (deux r)."},
 {t:"reecriture",q:"Réécris au passé simple : « Ils prennent leurs armes et ils partent. »",b:"Ils prirent leurs armes et ils partirent.",f:["Ils prenèrent leurs armes et ils partèrent.","Ils prenaient leurs armes et ils partaient.","Ils prirent leurs armes et ils partèrent."],e:"Prendre : ils prirent ; partir : ils partirent."},
 // dictée et orthographe
 {t:"dictee",q:"Complète : « Les lettres que j'ai ___ sont arrivées. »",b:"écrites",f:["écrit","écrits","écrite"],e:"Avec avoir, on accorde avec le COD s'il est placé avant : « que » = les lettres (féminin pluriel)."},
 {t:"dictee",q:"Complète : « Elles ont ___ toute la soirée. »",b:"dansé",f:["dansées","dansés","danser"],e:"Avec avoir, pas d'accord avec le sujet, et il n'y a pas de COD placé avant."},
 {t:"dictee",q:"Complète : « Ils se sont ___ les mains. »",b:"lavé",f:["lavés","laver","lavées"],e:"Le COD « les mains » est placé après le verbe : pas d'accord."},
 {t:"dictee",q:"Complète : « Elle s'est ___ en tombant. »",b:"blessée",f:["blessé","blesser","blessés"],e:"Elle a blessé qui ? se (elle-même), placé avant : accord au féminin."},
 {t:"dictee",q:"Complète : « Il faut ___ ce texte avant demain. »",b:"étudier",f:["étudié","étudiez","étudiait"],e:"Après « il faut », on met l'infinitif. Astuce : remplace par « prendre »."},
 {t:"dictee",q:"Complète : « ___ livre préfères-tu ? »",b:"Quel",f:["Quelle","Qu'elle","Quels"],e:"« Quel » s'accorde avec « livre » (masculin singulier)."},
 {t:"dictee",q:"Complète : « Je crois ___ viendra demain. »",b:"qu'elle",f:["quelle","quel","quelles"],e:"On peut remplacer par « qu'il » : c'est « que » + « elle »."},
 {t:"dictee",q:"Complète : « ___ à moi, je reste ici. »",b:"Quant",f:["Quand","Qu'en","Quan"],e:"« Quant à » signifie « en ce qui concerne »."},
 {t:"dictee",q:"Complète : « Il ___ trompé de route. »",b:"s'est",f:["c'est","ses","ces"],e:"Verbe pronominal « se tromper » au passé composé : il s'est trompé."},
 {t:"dictee",q:"Complète : « Ils sont ___ à partir. »",b:"prêts",f:["près","prés","prêt"],e:"« prêt » (adjectif) s'accorde : ils sont prêts. « près » signifie « à côté »."},
 {t:"dictee",q:"Complète : « Ils ont mangé ___ les gâteaux. »",b:"tous",f:["tout","toute","toutes"],e:"Déterminant devant « les gâteaux » (masculin pluriel) : tous."},
 {t:"dictee",q:"Complète : « Les élèves ___ ai parlé sont attentifs. »",b:"à qui j'",f:["que j'","dont j'","où j'"],e:"On parle À quelqu'un : « à qui »."},
 // littérature
 {t:"poesie",q:"Qui a écrit le poème « Liberté » (1942) ?",b:"Paul Éluard",f:["Victor Hugo","Arthur Rimbaud","Jean de La Fontaine"],e:"Ce poème de la Résistance répète « J'écris ton nom » jusqu'au mot final, Liberté."},
 {t:"poesie",q:"Pendant la guerre, le poème « Liberté » d'Éluard a été :",b:"parachuté par des avions alliés au-dessus de la France occupée",f:["interdit par les Alliés","écrit avant 1900","récompensé par le régime de Vichy"],e:"La poésie devient une arme de la Résistance."},
 {t:"poesie",q:"Louis Aragon a écrit « L'Affiche rouge » en hommage :",b:"à des résistants étrangers fusillés par les nazis en 1944",f:["aux soldats de Verdun","à Napoléon","aux rois de France"],e:"Il s'agit du groupe Manouchian, présenté comme « l'armée du crime » par la propagande."},
 {t:"poesie",q:"Le poème « Barbara » de Jacques Prévert évoque :",b:"la ville de Brest détruite par la guerre",f:["un voyage en Italie","la Révolution française","une fête de village"],e:"« Quelle connerie la guerre » : le poète dénonce les destructions."},
 {t:"poesie",q:"Qu'est-ce que la poésie engagée ?",b:"une poésie qui défend une cause ou dénonce une injustice",f:["une poésie qui ne parle que d'amour","une poésie écrite sans rimes","une poésie pour les enfants"],e:"Le poète met son art au service de valeurs (liberté, justice, paix)."},
 {t:"poesie",q:"Robert Desnos, poète résistant, est mort en 1945 :",b:"au camp de Theresienstadt (Terezín), après sa déportation",f:["à Paris, le jour de la Libération","sur le front de Verdun","en exil aux États-Unis"],e:"Arrêté en 1944, il meurt du typhus peu après la libération du camp."},
 {t:"poesie",q:"Dans « Les Châtiments » (1853), Victor Hugo dénonce :",b:"Napoléon III",f:["Louis XIV","Hitler","Charles de Gaulle"],e:"Exilé, Hugo attaque l'empereur qui a pris le pouvoir par un coup d'État."},
 {t:"poesie",q:"Un sonnet est composé de :",b:"deux quatrains et deux tercets",f:["trois quatrains","quatre tercets","un seul quatrain"],e:"14 vers au total."},
 {t:"guerre",q:"« À l'Ouest rien de nouveau » (1929), d'Erich Maria Remarque, raconte :",b:"la Première Guerre mondiale vue par un jeune soldat allemand",f:["la conquête de l'Ouest américain","la guerre d'Algérie","la Révolution russe"],e:"Le roman montre l'horreur des tranchées et la jeunesse sacrifiée."},
 {t:"guerre",q:"« Le Feu » d'Henri Barbusse, prix Goncourt 1916, décrit :",b:"la vie des soldats dans les tranchées",f:["un incendie à Paris","la vie à la cour du roi","la conquête de la Lune"],e:"Barbusse, lui-même combattant, témoigne de la souffrance des poilus."},
 {t:"guerre",q:"Dans « Si c'est un homme » (1947), Primo Levi témoigne :",b:"de sa déportation à Auschwitz",f:["de sa vie de soldat à Verdun","de son voyage en Amérique","de son enfance heureuse"],e:"Juif italien et résistant, il décrit la déshumanisation dans le camp."},
 {t:"guerre",q:"Anne Frank a écrit son journal :",b:"cachée avec sa famille à Amsterdam",f:["dans une tranchée en 1916","en prison à Paris","après la guerre, aux États-Unis"],e:"Découverte en 1944 et déportée, elle meurt à Bergen-Belsen en 1945."},
 {t:"guerre",q:"Dans « La Nuit » (1958), Elie Wiesel raconte :",b:"sa déportation à Auschwitz, adolescent",f:["la bataille de la Marne","la chute du mur de Berlin","la décolonisation de l'Inde"],e:"Un témoignage essentiel sur la Shoah."},
 {t:"guerre",q:"Un témoignage se distingue d'un roman parce que :",b:"l'auteur raconte ce qu'il a réellement vécu",f:["il est toujours écrit en vers","il n'a pas de narrateur","il est forcément drôle"],e:"Le témoin veut transmettre la vérité et faire mémoire."},
 {t:"guerre",q:"« Les Croix de bois » (1919) de Roland Dorgelès évoque :",b:"la Première Guerre mondiale",f:["la Seconde Guerre mondiale","la guerre froide","les croisades"],e:"Les croix de bois sont celles des tombes des soldats."},
 {t:"autobio",q:"Dans une autobiographie, l'auteur, le narrateur et le personnage principal sont :",b:"la même personne",f:["trois personnes différentes","des personnages inventés","toujours des enfants"],e:"C'est ce que Philippe Lejeune appelle le pacte autobiographique."},
 {t:"autobio",q:"Qui a défini le « pacte autobiographique » ?",b:"Philippe Lejeune",f:["Molière","Victor Hugo","Jules Verne"],e:"L'auteur s'engage à raconter sincèrement sa propre vie."},
 {t:"autobio",q:"Quelle célèbre autobiographie Jean-Jacques Rousseau a-t-il écrite ?",b:"Les Confessions",f:["Les Misérables","Le Cid","Candide"],e:"Rousseau y veut se montrer « dans toute la vérité de la nature »."},
 {t:"autobio",q:"Dans « Les Mots » (1964), Jean-Paul Sartre raconte :",b:"son enfance",f:["sa vie de soldat","un voyage sur la Lune","la vie de Napoléon"],e:"Il y explique comment il est devenu écrivain."},
 {t:"autobio",q:"Les mémoires se distinguent de l'autobiographie parce qu'elles racontent surtout :",b:"les événements historiques dont l'auteur a été témoin",f:["des histoires inventées","des recettes de cuisine","la vie d'un autre"],e:"Par exemple les « Mémoires de guerre » du général de Gaulle."},
 {t:"autobio",q:"Le journal intime est écrit :",b:"au jour le jour",f:["longtemps après les faits","par un autre auteur","toujours en vers"],e:"Il est daté et n'est pas d'abord destiné à être publié."},
 {t:"autobio",q:"Dans un récit autobiographique, le présent d'énonciation exprime souvent :",b:"le regard de l'adulte qui se souvient",f:["une action au futur","un ordre","une vérité scientifique"],e:"Le passé raconte l'enfant ; le présent montre l'adulte qui commente."},
 {t:"theatre",q:"Les indications de l'auteur sur les gestes, les décors et le ton s'appellent :",b:"les didascalies",f:["les répliques","les tirades","les apartés"],e:"Elles sont souvent en italique."},
 {t:"theatre",q:"Une longue réplique d'un personnage s'appelle :",b:"une tirade",f:["une didascalie","un aparté","une stichomythie"],e:"Le monologue, lui, est prononcé par un personnage seul en scène."},
 {t:"theatre",q:"Quand un personnage parle seul sur scène, c'est :",b:"un monologue",f:["un dialogue","un aparté","une tirade à deux"],e:"Il exprime ses pensées et ses hésitations."},
 {t:"theatre",q:"Quand un personnage parle au public sans que les autres l'entendent, c'est :",b:"un aparté",f:["un monologue","une didascalie","un dénouement"],e:"Le spectateur en sait alors plus que les autres personnages."},
 {t:"theatre",q:"Un quiproquo est :",b:"un malentendu où l'on prend une personne ou une chose pour une autre",f:["la fin d'une pièce","un décor","une longue réplique"],e:"Procédé comique fréquent chez Molière."},
 {t:"theatre",q:"Dans « Rhinocéros » (1959), Eugène Ionesco dénonce :",b:"la contagion des idéologies totalitaires et le conformisme",f:["la cruauté envers les animaux","la vie à la campagne","la guerre de Troie"],e:"Les habitants se transforment un à un en rhinocéros ; Bérenger résiste."},
 {t:"theatre",q:"Une tragédie se termine généralement :",b:"par la mort ou le malheur du héros",f:["par un mariage joyeux","par une fête","sans aucun conflit"],e:"La comédie, elle, se termine souvent bien."},
 {t:"theatre",q:"Qui a écrit « Le Malade imaginaire » ?",b:"Molière",f:["Racine","Ionesco","Victor Hugo"],e:"Comédie de 1673, la dernière pièce de Molière."},
 // vocabulaire
 {t:"vocab",q:"Que signifie « belliqueux » ?",b:"qui aime la guerre",f:["qui est très beau","qui est pacifique","qui est malade"],e:"Du latin bellum, la guerre (comme « belligérant »)."},
 {t:"vocab",q:"Un « armistice » est :",b:"un accord qui arrête les combats",f:["une arme ancienne","une déclaration de guerre","un défilé militaire"],e:"L'armistice du 11 novembre 1918 met fin aux combats de la Grande Guerre."},
 {t:"vocab",q:"Le suffixe « -cide » (génocide, insecticide) signifie :",b:"qui tue",f:["qui soigne","qui protège","qui compte"],e:"Du latin caedere, tuer."},
 {t:"vocab",q:"Dans « autobiographie », le préfixe « auto- » signifie :",b:"soi-même",f:["voiture","contre","plusieurs"],e:"auto = soi-même ; bio = la vie ; graphie = l'écriture."},
 {t:"vocab",q:"« Démocratie » vient du grec « dêmos », qui signifie :",b:"le peuple",f:["le roi","la loi","la ville"],e:"Démocratie : le pouvoir (kratos) du peuple."},
 {t:"vocab",q:"Quel est un synonyme de « réticent » ?",b:"hésitant",f:["enthousiaste","pressé","joyeux"],e:"Être réticent, c'est montrer peu d'envie de faire quelque chose."},
 {t:"vocab",q:"Que signifie « éphémère » ?",b:"qui dure peu de temps",f:["qui est éternel","qui est très lourd","qui est très grand"],e:"Son contraire : durable, permanent."},
 {t:"vocab",q:"Un « pacifiste » est une personne qui :",b:"s'oppose à la guerre",f:["aime voyager en mer","vend des armes","commande une armée"],e:"Du latin pax, la paix."}
];
function exoFrancais(tag){
  const conj={conjug:GF.conjug(null),subjonctif:GF.conjug("subj"),conditionnel:GF.conjug("cond"),passesimple:GF.conjug("ps")};
  if(conj[tag])return alea(0,3)===0?GF.temps():conj[tag]();
  if(tag==="litt"){const f=BANQUE_F.filter(x=>["poesie","guerre","autobio","theatre"].includes(x.t));const b=pioche(f);return qcm(b.q,b.b,b.f,b.e);}
  if(tag==="dictee"&&alea(0,2)===0)return GF.conjug(pioche(["pc","pqp"]))();
  if(!BANQUE_F.some(x=>x.t===tag))return alea(0,1)?GF.conjug(null)():parTag(BANQUE_F,"x");
  return parTag(BANQUE_F,tag);
}

/* ---------- ANGLAIS ---------- */
const VOC_EN=[["peace","la paix"],["a war","une guerre"],["a soldier","un soldat"],["the government","le gouvernement"],["a law","une loi"],["freedom","la liberté"],["a speech","un discours"],["a job","un emploi","un travail","un métier"],["a choice","un choix"],["the world","le monde"],["a country","un pays"],["a neighbour","un voisin","une voisine"],["a journey","un voyage","un trajet"],["an engineer","un ingénieur","une ingénieure"],["a lawyer","un avocat","une avocate"],["a scientist","un scientifique","une scientifique"],["waste","les déchets"],["a screen","un écran"],["a bridge","un pont"],["a nightmare","un cauchemar"],["a dream","un rêve"],["a gift","un cadeau"],["a teenager","un adolescent","une adolescente","un ado"],["a goal","un but","un objectif"],["the rights","les droits"],["a vote","un vote"],["the climate","le climat"],["a flood","une inondation"],["a homeless person","un sans-abri","une personne sans abri"],["the future","l'avenir","le futur"],["a skill","une compétence"],["an election","une élection"]];
const IRREG=[["go","went","gone"],["eat","ate","eaten"],["see","saw","seen"],["take","took","taken"],["write","wrote","written"],["drink","drank","drunk"],["buy","bought","bought"],["give","gave","given"],["speak","spoke","spoken"],["find","found","found"],["think","thought","thought"],["begin","began","begun"],["break","broke","broken"],["choose","chose","chosen"],["fly","flew","flown"],["forget","forgot","forgotten"],["know","knew","known"],["leave","left","left"],["lose","lost","lost"],["ride","rode","ridden"],["sing","sang","sung"],["teach","taught","taught"],["wear","wore","worn"],["win","won","won"],["bring","brought","brought"],["build","built","built"],["catch","caught","caught"],["fall","fell","fallen"],["feel","felt","felt"],["grow","grew","grown"]];
const GRAM_EN=[
 {t:"presents",q:"Listen! The baby ___.",b:"is crying",f:["cries","cry","crying"],e:"Action en cours au moment où l'on parle : be + -ing."},
 {t:"presents",q:"She usually ___ the bus to school.",b:"takes",f:["is taking","take","taking"],e:"Habitude (usually) : present simple, -s à la 3e personne."},
 {t:"presents",q:"What ___ you doing right now?",b:"are",f:["do","is","does"],e:"Present continuous : are you doing…?"},
 {t:"presents",q:"My brother ___ like vegetables.",b:"doesn't",f:["don't","isn't","not"],e:"3e personne du singulier : does not (doesn't) + base verbale."},
 {t:"presents",q:"Water ___ at 100 °C.",b:"boils",f:["is boiling","boil","boiling"],e:"Vérité générale : present simple."},
 {t:"presents",q:"I ___ my homework at the moment.",b:"am doing",f:["do","does","doing"],e:"at the moment : present continuous."},
 {t:"past",q:"Yesterday we ___ to the museum.",b:"went",f:["go","goed","have gone"],e:"Yesterday : past simple. go → went (irrégulier)."},
 {t:"past",q:"Shakespeare ___ Romeo and Juliet.",b:"wrote",f:["writed","written","writes"],e:"Fait passé et terminé : past simple. write → wrote."},
 {t:"past",q:"___ you see the match last night?",b:"Did",f:["Do","Have","Were"],e:"Question au past simple : Did + sujet + base verbale."},
 {t:"past",q:"She ___ come to the party: she was ill.",b:"didn't",f:["doesn't","wasn't","hasn't"],e:"Négation au past simple : didn't + base verbale."},
 {t:"past",q:"In 1969, Neil Armstrong ___ on the Moon.",b:"walked",f:["walks","has walked","walking"],e:"Date passée précise : past simple."},
 {t:"past",q:"When I was a child, I ___ in Lyon.",b:"lived",f:["have lived","live","living"],e:"Période passée terminée : past simple."},
 {t:"pastcont",q:"I ___ a book when the lights went out.",b:"was reading",f:["read","am reading","were reading"],e:"Action en cours dans le passé : was/were + -ing, interrompue par un past simple."},
 {t:"pastcont",q:"What ___ you doing at 9 last night?",b:"were",f:["was","did","are"],e:"Past continuous avec you : were."},
 {t:"pastcont",q:"While they were playing, it ___ to rain.",b:"started",f:["was starting","starts","has started"],e:"L'événement bref qui interrompt est au past simple."},
 {t:"pastcont",q:"At 7 o'clock yesterday, my parents ___ dinner.",b:"were having",f:["was having","are having","have"],e:"Action en cours à un moment précis du passé, sujet pluriel : were + -ing."},
 {t:"pastcont",q:"She ___ sleeping when the phone rang.",b:"was",f:["were","is","did"],e:"She → was + -ing."},
 {t:"pastcont",q:"The sun ___ and the birds were singing.",b:"was shining",f:["shines","is shining","were shining"],e:"Description d'une scène passée : past continuous."},
 {t:"presentperfect",q:"I have ___ to London twice.",b:"been",f:["went","go","being"],e:"Present perfect : have + participe passé (be → been)."},
 {t:"presentperfect",q:"She has lived here ___ 2020.",b:"since",f:["for","ago","during"],e:"since + point de départ ; for + durée."},
 {t:"presentperfect",q:"We have known each other ___ ten years.",b:"for",f:["since","ago","from"],e:"for + durée."},
 {t:"presentperfect",q:"Have you ever ___ a horse?",b:"ridden",f:["rode","ride","rided"],e:"ride → rode → ridden."},
 {t:"presentperfect",q:"He ___ his keys, so he can't open the door.",b:"has lost",f:["lost","have lost","loses"],e:"Conséquence présente d'une action passée : present perfect."},
 {t:"presentperfect",q:"I ___ Paris in 2019.",b:"visited",f:["have visited","visit","has visited"],e:"Date précise (in 2019) : past simple, pas present perfect."},
 {t:"presentperfect",q:"They haven't finished their homework ___.",b:"yet",f:["already","since","ago"],e:"yet en fin de phrase négative ou interrogative."},
 {t:"modals",q:"You ___ smoke in a hospital. It's forbidden.",b:"mustn't",f:["don't have to","should","can"],e:"mustn't = interdiction."},
 {t:"modals",q:"It's Saturday: you ___ get up early.",b:"don't have to",f:["mustn't","has to","doesn't must"],e:"don't have to = absence d'obligation (ce n'est pas nécessaire)."},
 {t:"modals",q:"You look tired. You ___ go to bed.",b:"should",f:["shouldn't","mustn't","can't"],e:"should = conseil."},
 {t:"modals",q:"When I was five, I ___ already swim.",b:"could",f:["can","will","must"],e:"could = capacité dans le passé."},
 {t:"modals",q:"Take an umbrella: it ___ rain later.",b:"might",f:["mights","musts","is"],e:"might = possibilité ; les modaux ne prennent jamais de -s."},
 {t:"modals",q:"In many British schools, pupils ___ wear a uniform.",b:"have to",f:["has to","must to","haves to"],e:"have to = obligation ; must n'est jamais suivi de « to »."},
 {t:"comparatif",q:"Elephants are ___ than horses.",b:"heavier",f:["more heavy","heaviest","heavyer"],e:"Adjectif court en -y : -ier + than."},
 {t:"comparatif",q:"This film is ___ than the book.",b:"more interesting",f:["interestinger","most interesting","more interestinger"],e:"Adjectif long : more + adjectif + than."},
 {t:"comparatif",q:"Mount Everest is the ___ mountain in the world.",b:"highest",f:["higher","most high","more highest"],e:"Superlatif d'un adjectif court : the + -est."},
 {t:"comparatif",q:"My marks are ___ than last year: I must work more.",b:"worse",f:["badder","worst","more bad"],e:"bad → worse → the worst."},
 {t:"comparatif",q:"Tom is as tall ___ his father.",b:"as",f:["than","that","like"],e:"Comparatif d'égalité : as + adjectif + as."},
 {t:"comparatif",q:"It's the ___ expensive car in the shop.",b:"most",f:["more","much","mostest"],e:"Superlatif d'un adjectif long : the most + adjectif."},
 {t:"passive",q:"English ___ spoken in many countries.",b:"is",f:["are","has","does"],e:"Passif : be + participe passé. English → is."},
 {t:"passive",q:"The Eiffel Tower ___ built for the 1889 World's Fair.",b:"was",f:["is","were","has"],e:"Passif au passé : was/were + participe passé."},
 {t:"passive",q:"Harry Potter was written ___ J.K. Rowling.",b:"by",f:["of","from","with"],e:"Le complément d'agent est introduit par by."},
 {t:"passive",q:"The letters ___ delivered every morning.",b:"are",f:["is","be","were being"],e:"Habitude au présent, sujet pluriel : are + participe passé."},
 {t:"passive",q:"Our car has been ___.",b:"stolen",f:["stole","steal","stealed"],e:"steal → stole → stolen."},
 {t:"passive",q:"The match ___ played tomorrow.",b:"will be",f:["will","was","has"],e:"Passif au futur : will be + participe passé."},
 {t:"conditional",q:"If it rains tomorrow, we ___ stay at home.",b:"will",f:["would","are","did"],e:"If + présent → will + base verbale."},
 {t:"conditional",q:"If I ___ a million euros, I would travel around the world.",b:"had",f:["have","will have","has"],e:"If + prétérit → would + base verbale (situation imaginaire)."},
 {t:"conditional",q:"If I were you, I ___ apologise.",b:"would",f:["will","am","did"],e:"Conseil : If I were you, I would…"},
 {t:"conditional",q:"If you heat ice, it ___.",b:"melts",f:["melted","would melt","melting"],e:"Vérité générale : if + présent, présent."},
 {t:"conditional",q:"What would you do if you ___ a famous singer?",b:"were",f:["are","will be","be"],e:"Hypothèse : if + prétérit (were pour to be)."},
 {t:"conditional",q:"If she studies hard, she ___ pass her exam.",b:"will",f:["would","is","did"],e:"Situation probable : if + présent → will."},
 {t:"relatives",q:"This is the girl ___ won the race.",b:"who",f:["which","where","whose"],e:"who pour une personne."},
 {t:"relatives",q:"I like books ___ have happy endings.",b:"which",f:["who","where","whose"],e:"which pour une chose."},
 {t:"relatives",q:"That's the house ___ I was born.",b:"where",f:["which","who","whose"],e:"where pour un lieu."},
 {t:"relatives",q:"He's the boy ___ mother is a pilot.",b:"whose",f:["who","which","where"],e:"whose exprime la possession (dont la mère)."},
 {t:"relatives",q:"The museum ___ we visited was huge.",b:"which",f:["who","whose","where"],e:"which reprend une chose COD du verbe."},
 {t:"relatives",q:"Martin Luther King was a man ___ fought for civil rights.",b:"who",f:["which","whose","where"],e:"who pour une personne, sujet du verbe."},
 {t:"reported",q:"He said: “I am tired.” → He said that he ___ tired.",b:"was",f:["is","were","be"],e:"Au discours indirect après said, le présent devient prétérit."},
 {t:"reported",q:"She said: “I will help you.” → She said that she ___ help me.",b:"would",f:["will","is","did"],e:"will devient would."},
 {t:"reported",q:"Tom asked me ___ I liked pizza.",b:"if",f:["that","what","do"],e:"Question fermée rapportée : if (ou whether)."},
 {t:"reported",q:"“Close the door!” → She told me ___ the door.",b:"to close",f:["close","closing","that close"],e:"Ordre rapporté : tell somebody to + verbe."},
 {t:"reported",q:"“I can swim.” → He said he ___ swim.",b:"could",f:["can","cans","is able"],e:"can devient could."},
 {t:"reported",q:"“Where do you live?” → She asked me where I ___.",b:"lived",f:["do live","live","did live"],e:"Dans la question rapportée, pas d'inversion ni d'auxiliaire do : where I lived."},
 {t:"future",q:"Look at those black clouds! It ___ rain.",b:"is going to",f:["will to","goes","is raining to"],e:"Prévision fondée sur un indice visible : be going to."},
 {t:"future",q:"I think robots ___ do housework in the future.",b:"will",f:["are","going","do"],e:"Prédiction, opinion : will + base verbale."},
 {t:"future",q:"We ___ our grandparents next Sunday: it's all planned.",b:"are visiting",f:["visited","have visited","visits"],e:"Projet organisé : present continuous à valeur de futur."},
 {t:"future",q:"This time next year, I ___ be in high school.",b:"will",f:["am","going","would to"],e:"Futur : will + base verbale."},
 {t:"future",q:"“Will you come?” “Yes, I ___.”",b:"will",f:["do","am","come"],e:"Réponse courte : Yes, I will."},
 {t:"future",q:"She ___ going to study medicine next year.",b:"is",f:["are","will","does"],e:"be going to : she is going to."},
 {t:"culture",q:"Quelle est la capitale de l'Écosse ?",b:"Edinburgh",f:["Glasgow","Dublin","Cardiff"],e:"Dublin est la capitale de l'Irlande, Cardiff celle du pays de Galles."},
 {t:"culture",q:"Qui a prononcé le discours « I have a dream » en 1963 ?",b:"Martin Luther King",f:["Abraham Lincoln","Barack Obama","Nelson Mandela"],e:"Lors de la marche sur Washington pour les droits civiques."},
 {t:"culture",q:"En 1955, Rosa Parks a refusé de céder sa place :",b:"dans un bus, à Montgomery (Alabama)",f:["dans un train, à New York","dans un avion, à Londres","dans un cinéma, à Chicago"],e:"Son arrestation lance le boycott des bus de Montgomery."},
 {t:"culture",q:"Combien d'États comptent les États-Unis ?",b:"50",f:["48","52","13"],e:"Les 13 colonies d'origine sont devenues 50 États."},
 {t:"culture",q:"En quelle année le Royaume-Uni a-t-il quitté l'Union européenne ?",b:"2020",f:["2016","1992","2010"],e:"Le référendum date de 2016, la sortie effective du 31 janvier 2020."},
 {t:"culture",q:"Quelle est la capitale de l'Australie ?",b:"Canberra",f:["Sydney","Melbourne","Wellington"],e:"Sydney est la plus grande ville ; Wellington est la capitale de la Nouvelle-Zélande."},
 {t:"culture",q:"Thanksgiving est fêté aux États-Unis :",b:"en novembre",f:["en juillet","en décembre","en mars"],e:"Le quatrième jeudi de novembre."},
 {t:"culture",q:"Ellis Island, à New York, était :",b:"le lieu d'accueil des immigrants",f:["une base militaire","un parc d'attractions","le siège de l'ONU"],e:"Des millions d'immigrants y sont passés entre 1892 et 1954."},
 {t:"vocab",q:"Que signifie « to fight » ?",b:"se battre",f:["voler","trouver","pleurer"],e:"fight → fought → fought."},
 {t:"vocab",q:"Que signifie « to vote » ?",b:"voter",f:["voler","vouloir","voyager"],e:"Attention : « voler » se dit to steal (dérober) ou to fly (dans les airs)."},
 {t:"vocab",q:"Que signifie « human rights » ?",b:"les droits de l'homme",f:["la main droite","les êtres humains","les règles du jeu"],e:"rights = les droits."},
 {t:"vocab",q:"Que signifie « actually » ?",b:"en fait",f:["actuellement","activement","rarement"],e:"Faux ami : actuellement se dit currently ou nowadays."},
 {t:"vocab",q:"Que signifie « to recycle » ?",b:"recycler",f:["réparer","faire du vélo","recommencer"],e:"Recycling reduces waste."},
 {t:"vocab",q:"Que signifie « a library » ?",b:"une bibliothèque",f:["une librairie","un laboratoire","une liberté"],e:"Faux ami : une librairie se dit a bookshop."},
 {t:"vocab",q:"Que signifie « to improve » ?",b:"améliorer",f:["improviser","prouver","imprimer"],e:"I want to improve my English."}
];
function exoAnglais(tag){
  const t=alea(1,4);
  if(tag==="vocab"&&alea(0,1)||t===1){const p=pioche(VOC_EN);const sans=p.slice(1).map(x=>x.replace(/^(un |une |le |la |les |l'|des )/,""));
    return saisie(`Traduis en français : « ${p[0]} »`,[...p.slice(1),...sans],`« ${p[0]} » se traduit par « ${p[1]} ».`);}
  if(t===2&&(tag==="past"||tag==="presentperfect"||tag==="passive"||alea(0,2)===0)){const p=pioche(IRREG);
    if(tag==="presentperfect"||tag==="passive"||(tag!=="past"&&alea(0,1)))return saisie(`Donne le participe passé de « to ${p[0]} »`,[p[2]],`to ${p[0]} → ${p[1]} → ${p[2]} : base verbale, prétérit, participe passé.`);
    return saisie(`Donne le prétérit de « to ${p[0]} »`,[p[1]],`to ${p[0]} → ${p[1]} → ${p[2]} : base verbale, prétérit, participe passé.`);}
  const f=GRAM_EN.filter(x=>x.t===tag);const pool=f.length?f:GRAM_EN.filter(x=>x.t!=="vocab"&&x.t!=="culture");const x=pioche(pool);
  return qcm(/^(Que|Quel|Qui|Combien|En|Thanksgiving|Ellis)/.test(x.q)?x.q:`Complète : ${x.q}`,x.b,x.f,x.e);
}

/* ---------- SCIENCES : SVT, PHYSIQUE-CHIMIE, TECHNOLOGIE ---------- */
const BANQUE_S=[
 {t:"atomes",q:"Un atome est constitué :",b:"d'un noyau entouré d'électrons",f:["uniquement d'électrons","de plusieurs molécules","d'ions positifs seulement"],e:"Le noyau, au centre, est chargé positivement ; les électrons, négatifs, se déplacent autour."},
 {t:"atomes",q:"Le noyau d'un atome contient :",b:"des protons et des neutrons",f:["des électrons","des molécules","uniquement des électrons et des neutrons"],e:"Protons (charge +) et neutrons (neutres) forment le noyau."},
 {t:"atomes",q:"Un atome est électriquement neutre car :",b:"il a autant de protons que d'électrons",f:["il ne contient aucune charge","il a autant de neutrons que de protons","son noyau est négatif"],e:"Les charges + des protons compensent exactement les charges − des électrons."},
 {t:"atomes",q:"Où est concentrée presque toute la masse d'un atome ?",b:"dans son noyau",f:["dans ses électrons","dans le vide autour du noyau","de façon égale partout"],e:"Les électrons sont environ 2 000 fois plus légers qu'un proton."},
 {t:"atomes",q:"La molécule d'eau H₂O est formée de :",b:"2 atomes d'hydrogène et 1 atome d'oxygène",f:["1 atome d'hydrogène et 2 atomes d'oxygène","2 atomes d'hélium et 1 atome d'oxygène","3 atomes d'hydrogène"],e:"Le chiffre en indice donne le nombre d'atomes de l'élément qui le précède."},
 {t:"atomes",q:"Le noyau est environ 100 000 fois plus petit que l'atome. Entre le noyau et les électrons, il y a :",b:"du vide",f:["de l'air","de l'eau","d'autres atomes"],e:"On dit que la matière a une structure lacunaire."},
 {t:"atomes",q:"Au cours d'une transformation chimique :",b:"les atomes se conservent mais se réarrangent",f:["des atomes disparaissent","de nouveaux atomes apparaissent","la masse totale augmente toujours"],e:"C'est pourquoi la masse totale se conserve (Lavoisier)."},
 {t:"atomes",q:"Le numéro atomique Z d'un élément indique :",b:"le nombre de protons dans le noyau",f:["le nombre de neutrons","la masse de l'atome en grammes","le nombre de molécules"],e:"Il caractérise l'élément : Z = 1 pour l'hydrogène, Z = 6 pour le carbone."},
 {t:"ions",q:"Un ion est :",b:"un atome ou un groupe d'atomes qui a gagné ou perdu des électrons",f:["un atome qui a perdu son noyau","une molécule d'eau","un atome qui a gagné des protons"],e:"Le noyau ne change pas : seuls les électrons sont gagnés ou perdus."},
 {t:"ions",q:"L'ion sodium Na⁺ provient d'un atome de sodium qui a :",b:"perdu un électron",f:["gagné un électron","perdu un proton","gagné un proton"],e:"Il a un électron de moins que de protons : une charge positive en excès."},
 {t:"ions",q:"L'ion chlorure Cl⁻ provient d'un atome de chlore qui a :",b:"gagné un électron",f:["perdu un électron","gagné un proton","perdu un neutron"],e:"Un électron en plus : une charge négative en excès."},
 {t:"ions",q:"L'ion cuivre Cu²⁺ provient d'un atome de cuivre qui a :",b:"perdu deux électrons",f:["gagné deux électrons","perdu deux protons","gagné deux protons"],e:"2+ : deux charges positives en excès, donc deux électrons en moins."},
 {t:"ions",q:"Avec la soude (hydroxyde de sodium), les ions cuivre Cu²⁺ donnent un précipité :",b:"bleu",f:["vert","rouille","blanc"],e:"Fe²⁺ donne un précipité vert, Fe³⁺ un précipité rouille."},
 {t:"ions",q:"Avec la soude, les ions fer Fe³⁺ donnent un précipité :",b:"rouille (orangé)",f:["bleu","vert","blanc"],e:"Cu²⁺ : bleu ; Fe²⁺ : vert ; Fe³⁺ : rouille."},
 {t:"ions",q:"Le nitrate d'argent permet d'identifier les ions chlorure Cl⁻ : il forme un précipité :",b:"blanc qui noircit à la lumière",f:["bleu","vert foncé","rouille"],e:"C'est le test caractéristique des ions chlorure."},
 {t:"ions",q:"L'eau salée conduit le courant électrique car elle contient :",b:"des ions",f:["des électrons libres","des neutrons","de l'air"],e:"Dans une solution, ce sont les ions qui se déplacent et transportent le courant."},
 {t:"ph",q:"Une solution de pH 3 est :",b:"acide",f:["neutre","basique","salée"],e:"pH < 7 : acide ; pH = 7 : neutre ; pH > 7 : basique."},
 {t:"ph",q:"Une solution de pH 7 est :",b:"neutre",f:["acide","basique","très acide"],e:"L'eau pure a un pH de 7."},
 {t:"ph",q:"Une solution de pH 11 est :",b:"basique",f:["acide","neutre","impossible"],e:"Le pH va de 0 à 14 ; au-dessus de 7, la solution est basique."},
 {t:"ph",q:"Quand on dilue une solution acide avec de l'eau, son pH :",b:"augmente en se rapprochant de 7",f:["diminue","ne change pas","dépasse 7"],e:"La solution devient moins acide, mais reste acide."},
 {t:"ph",q:"Quels ions sont responsables de l'acidité d'une solution ?",b:"les ions hydrogène H⁺",f:["les ions hydroxyde HO⁻","les ions sodium Na⁺","les ions chlorure Cl⁻"],e:"Une solution basique contient, elle, plus d'ions HO⁻ que d'ions H⁺."},
 {t:"ph",q:"L'acide chlorhydrique attaque le fer en produisant un gaz qui détone au contact d'une flamme. Ce gaz est :",b:"le dihydrogène",f:["le dioxygène","le dioxyde de carbone","la vapeur d'eau"],e:"La petite détonation (« pop ») est le test du dihydrogène."},
 {t:"ph",q:"Pour manipuler une solution acide concentrée, il faut :",b:"porter des lunettes de protection et des gants",f:["la goûter pour vérifier","la chauffer fortement","la verser dans l'évier sans diluer"],e:"Les acides et les bases concentrés sont corrosifs : pictogramme de danger."},
 {t:"ph",q:"Pour mesurer précisément le pH d'une solution, on utilise :",b:"un pH-mètre",f:["un thermomètre","un ampèremètre","une balance"],e:"Le papier pH donne une valeur approchée."},
 {t:"genetique",q:"Combien de chromosomes contient une cellule humaine (non reproductrice) ?",b:"46, soit 23 paires",f:["23","92","48"],e:"Les cellules reproductrices (gamètes) n'en ont que 23."},
 {t:"genetique",q:"Les chromosomes sont constitués :",b:"d'ADN",f:["de protéines du sang","de glucose","de lipides"],e:"L'ADN est la molécule qui porte l'information génétique."},
 {t:"genetique",q:"Un gène est :",b:"une portion d'ADN qui détermine un caractère héréditaire",f:["une cellule entière","un organe","un type de chromosome sexuel"],e:"Il est situé à un endroit précis d'un chromosome."},
 {t:"genetique",q:"Les différentes versions d'un même gène s'appellent :",b:"des allèles",f:["des chromosomes","des caryotypes","des gamètes"],e:"Par exemple, le gène du groupe sanguin a les allèles A, B et O."},
 {t:"genetique",q:"Un spermatozoïde ou un ovule contient :",b:"23 chromosomes",f:["46 chromosomes","92 chromosomes","12 chromosomes"],e:"La méiose divise par deux le nombre de chromosomes ; la fécondation rétablit 46."},
 {t:"genetique",q:"Chez l'être humain, les chromosomes sexuels d'un garçon sont :",b:"XY",f:["XX","YY","X seulement"],e:"Une fille a deux chromosomes X."},
 {t:"genetique",q:"La trisomie 21 est due :",b:"à la présence de trois chromosomes 21",f:["à l'absence de chromosome 21","à une infection","à une mauvaise alimentation"],e:"La personne a alors 47 chromosomes au lieu de 46."},
 {t:"genetique",q:"Lors de la mitose, une cellule donne :",b:"deux cellules avec les mêmes chromosomes qu'elle",f:["quatre gamètes différents","une cellule avec moitié moins de chromosomes","des cellules sans noyau"],e:"La mitose permet la croissance et le renouvellement des cellules."},
 {t:"genetique",q:"Pourquoi deux enfants des mêmes parents (sauf vrais jumeaux) sont-ils génétiquement différents ?",b:"la méiose et la fécondation associent les allèles au hasard",f:["ils n'ont pas les mêmes parents","leurs cellules n'ont pas d'ADN","l'un a 46 chromosomes, l'autre 23"],e:"Chaque gamète est unique, et la rencontre des gamètes est aléatoire."},
 {t:"evolution",q:"Selon la théorie de l'évolution, les espèces :",b:"se transforment au fil des générations",f:["n'ont jamais changé","sont apparues toutes en même temps","changent pendant la vie d'un individu"],e:"Les populations évoluent sur de très longues durées."},
 {t:"evolution",q:"Qui a proposé la théorie de la sélection naturelle en 1859 ?",b:"Charles Darwin",f:["Louis Pasteur","Gregor Mendel","Isaac Newton"],e:"Dans « L'Origine des espèces »."},
 {t:"evolution",q:"La sélection naturelle favorise les individus :",b:"les mieux adaptés à leur milieu, qui ont plus de descendants",f:["les plus gros, toujours","choisis par les humains","qui ne se reproduisent pas"],e:"Leurs caractères deviennent plus fréquents dans la population."},
 {t:"evolution",q:"Les mutations de l'ADN sont :",b:"une source de nouveaux allèles, donc de diversité",f:["toujours mortelles","provoquées uniquement par les vaccins","sans aucun effet sur l'évolution"],e:"Elles sont aléatoires ; certaines sont neutres, d'autres avantageuses ou défavorables."},
 {t:"evolution",q:"L'être humain et le chimpanzé :",b:"partagent un ancêtre commun",f:["l'humain descend du chimpanzé actuel","n'ont aucun lien de parenté","appartiennent à la même espèce"],e:"Ce sont deux espèces cousines, issues d'un même ancêtre il y a quelques millions d'années."},
 {t:"evolution",q:"Les fossiles permettent :",b:"de connaître des espèces disparues et de reconstituer l'évolution",f:["de prévoir la météo","de dater uniquement les volcans","de soigner des maladies"],e:"Ils montrent que les êtres vivants ont changé au cours des temps géologiques."},
 {t:"evolution",q:"La disparition des dinosaures non aviens, il y a environ 66 millions d'années, est :",b:"une crise biologique (extinction de masse)",f:["une invention humaine","une migration","un effet de la pollution moderne"],e:"De nombreuses espèces disparaissent en peu de temps ; d'autres se diversifient ensuite."},
 {t:"immunite",q:"Les antibiotiques sont efficaces contre :",b:"les bactéries",f:["les virus","tous les micro-organismes","les allergies"],e:"Ils n'agissent pas sur les virus : inutile d'en prendre contre un rhume."},
 {t:"immunite",q:"La phagocytose consiste à :",b:"englober puis digérer des micro-organismes",f:["produire des anticorps","fabriquer des globules rouges","fermer une plaie"],e:"C'est une réaction rapide, menée par certains globules blancs (les phagocytes)."},
 {t:"immunite",q:"Les anticorps sont produits par :",b:"des lymphocytes B",f:["des globules rouges","des neurones","des plaquettes"],e:"Ils se fixent sur un antigène précis et aident à l'éliminer."},
 {t:"immunite",q:"Les lymphocytes T cytotoxiques :",b:"détruisent les cellules infectées",f:["transportent le dioxygène","produisent l'insuline","fabriquent les antibiotiques"],e:"Ils reconnaissent les cellules infectées par un virus."},
 {t:"immunite",q:"Un vaccin permet :",b:"à l'organisme de garder en mémoire un microbe pour réagir vite",f:["de soigner une maladie déjà déclarée","de tuer directement tous les virus","de remplacer les globules blancs"],e:"Il contient un microbe inactivé ou un fragment : on fabrique des lymphocytes mémoire."},
 {t:"immunite",q:"Un antiseptique sert à :",b:"tuer les micro-organismes sur la peau ou une plaie",f:["fabriquer des anticorps","vacciner","soigner une infection virale à l'intérieur du corps"],e:"Il évite que des microbes pénètrent dans l'organisme."},
 {t:"immunite",q:"Le VIH, responsable du sida, s'attaque :",b:"à certains lymphocytes T",f:["aux globules rouges","aux os","aux cellules de la peau"],e:"Le système immunitaire est affaibli face aux autres infections."},
 {t:"immunite",q:"Vacciner une grande partie de la population permet :",b:"de limiter la circulation de la maladie et de protéger les plus fragiles",f:["de rendre les antibiotiques inutiles","de supprimer tous les microbes de la Terre","de changer son ADN"],e:"C'est une protection individuelle et collective."},
 {t:"sante",q:"Pendant la digestion, les aliments sont transformés en nutriments grâce :",b:"aux enzymes digestives",f:["aux globules blancs","aux neurones","aux anticorps"],e:"Les enzymes découpent les grosses molécules en petites molécules."},
 {t:"sante",q:"Les nutriments passent dans le sang au niveau :",b:"de l'intestin grêle",f:["de l'estomac","de la bouche","du gros intestin seulement"],e:"Sa paroi très repliée offre une grande surface d'absorption."},
 {t:"sante",q:"Le microbiote intestinal est :",b:"l'ensemble des micro-organismes qui vivent dans l'intestin",f:["une maladie de l'intestin","un organe","un médicament"],e:"Il participe à la digestion et à la défense de l'organisme."},
 {t:"sante",q:"Pendant un effort, le rythme cardiaque augmente pour :",b:"apporter plus de dioxygène et de glucose aux muscles",f:["refroidir le corps","produire des anticorps","digérer plus vite"],e:"La fréquence respiratoire augmente aussi."},
 {t:"sante",q:"Les muscles utilisent du glucose et du dioxygène et rejettent :",b:"du dioxyde de carbone",f:["du dioxygène","du glucose","de l'azote"],e:"Le CO₂ est transporté par le sang puis rejeté par les poumons."},
 {t:"sante",q:"Le message nerveux est transmis par :",b:"les neurones",f:["les globules rouges","les os","les muscles seuls"],e:"Le cerveau reçoit les messages des organes des sens et commande les muscles."},
 {t:"sante",q:"L'alcool et le cannabis :",b:"augmentent le temps de réaction",f:["améliorent les réflexes","n'ont aucun effet sur le cerveau","rendent la vue plus nette"],e:"Ils perturbent le fonctionnement du système nerveux : danger au volant ou à vélo."},
 {t:"sante",q:"Le manque de sommeil :",b:"perturbe la mémoire et la concentration",f:["améliore les résultats scolaires","n'a aucun effet","fait grandir plus vite"],e:"Un adolescent a besoin de 8 à 10 heures de sommeil."},
 {t:"ecologie",q:"Un écosystème est formé :",b:"d'un milieu de vie et des êtres vivants qui l'habitent",f:["uniquement des animaux d'un pays","d'une seule espèce","des roches d'une montagne"],e:"Les êtres vivants interagissent entre eux et avec le milieu."},
 {t:"ecologie",q:"Dans un réseau alimentaire, les plantes vertes sont :",b:"des producteurs",f:["des consommateurs","des décomposeurs","des prédateurs"],e:"Elles fabriquent leur matière organique par photosynthèse."},
 {t:"ecologie",q:"Une espèce invasive est :",b:"une espèce introduite qui prolifère et menace les espèces locales",f:["une espèce protégée","une espèce disparue","une espèce qui ne se reproduit pas"],e:"Exemple : le frelon asiatique en France."},
 {t:"ecologie",q:"La combustion du pétrole, du charbon et du gaz libère :",b:"du dioxyde de carbone, qui renforce l'effet de serre",f:["du dioxygène pur","de l'eau potable","de l'ozone qui refroidit la Terre"],e:"Ce rejet contribue au réchauffement climatique."},
 {t:"ecologie",q:"Laquelle de ces ressources est renouvelable ?",b:"le bois d'une forêt gérée durablement",f:["le pétrole","le charbon","l'uranium"],e:"Les ressources fossiles et minérales mettent des millions d'années à se former."},
 {t:"ecologie",q:"Les décomposeurs (champignons, bactéries du sol) :",b:"transforment la matière organique morte en matière minérale",f:["fabriquent du glucose par photosynthèse","mangent uniquement des animaux vivants","polluent le sol"],e:"Ils recyclent la matière, réutilisée ensuite par les plantes."},
 {t:"ecologie",q:"Le développement durable cherche à :",b:"répondre aux besoins actuels sans compromettre ceux des générations futures",f:["produire toujours plus, sans limite","interdire toute activité humaine","utiliser d'abord les énergies fossiles"],e:"Il concilie économie, société et environnement."},
 {t:"electricite",q:"La puissance électrique se calcule avec la relation :",b:"P = U × I",f:["P = U ÷ I","P = m × g","P = U + I"],e:"P en watts (W), U en volts (V), I en ampères (A)."},
 {t:"electricite",q:"Une lampe fonctionne sous 230 V et est traversée par un courant de 0,5 A. Quelle est sa puissance ?",b:"115 W",f:["460 W","230,5 W","115 J"],e:"P = U × I = 230 × 0,5 = 115 W."},
 {t:"electricite",q:"L'énergie électrique consommée par un appareil se calcule avec :",b:"E = P × t",f:["E = P ÷ t","E = U ÷ I","E = m × v"],e:"E en joules si t est en secondes, en wattheures si t est en heures."},
 {t:"electricite",q:"Un radiateur de 1 000 W fonctionne pendant 3 h. Quelle énergie consomme-t-il ?",b:"3 kWh",f:["3 000 kWh","333 Wh","1 003 Wh"],e:"E = P × t = 1 000 W × 3 h = 3 000 Wh = 3 kWh."},
 {t:"electricite",q:"Une bouilloire de 2 000 W fonctionne pendant 3 minutes. Quelle énergie consomme-t-elle ?",b:"360 000 J",f:["6 000 J","36 000 J","600 J"],e:"3 min = 180 s. E = 2 000 × 180 = 360 000 J."},
 {t:"electricite",q:"L'unité de la puissance est :",b:"le watt (W)",f:["le joule (J)","le volt (V)","l'ampère (A)"],e:"Le joule est l'unité d'énergie."},
 {t:"electricite",q:"Sur une facture, l'énergie électrique est comptée en :",b:"kilowattheures (kWh)",f:["kilowatts (kW)","volts (V)","ampères (A)"],e:"1 kWh = 1 000 W pendant 1 heure."},
 {t:"electricite",q:"Le disjoncteur d'une installation sert à :",b:"couper le courant en cas de surintensité ou de court-circuit",f:["augmenter la tension","produire de l'électricité","mesurer l'énergie"],e:"Il protège l'installation contre l'échauffement des fils."},
 {t:"gravitation",q:"L'interaction gravitationnelle entre deux objets est :",b:"attractive, et dépend de leurs masses et de leur distance",f:["toujours répulsive","indépendante des masses","nulle dans l'espace"],e:"Plus les masses sont grandes et proches, plus l'attraction est forte."},
 {t:"gravitation",q:"Le poids d'un objet se calcule avec :",b:"P = m × g",f:["P = U × I","P = m ÷ g","P = m + g"],e:"m en kg, g en N/kg, P en newtons."},
 {t:"gravitation",q:"Le poids s'exprime en :",b:"newtons (N)",f:["kilogrammes (kg)","litres (L)","joules (J)"],e:"La masse, elle, s'exprime en kilogrammes."},
 {t:"gravitation",q:"Sur Terre (g ≈ 9,8 N/kg), quel est le poids d'un objet de 10 kg ?",b:"98 N",f:["10 N","0,98 N","9,8 kg"],e:"P = m × g = 10 × 9,8 = 98 N."},
 {t:"gravitation",q:"Un astronaute de 70 kg part sur la Lune. Sa masse sur la Lune est :",b:"70 kg",f:["environ 12 kg","0 kg","environ 420 kg"],e:"La masse ne dépend pas du lieu ; c'est le poids qui change."},
 {t:"gravitation",q:"Sur la Lune, le poids d'un objet est :",b:"environ 6 fois plus faible que sur Terre",f:["identique à celui sur Terre","6 fois plus grand","nul"],e:"g vaut environ 1,6 N/kg sur la Lune contre 9,8 N/kg sur Terre."},
 {t:"gravitation",q:"La Lune reste en orbite autour de la Terre grâce :",b:"à l'attraction gravitationnelle de la Terre",f:["au vent solaire","au champ magnétique de la Lune","à l'atmosphère"],e:"La même interaction maintient les planètes autour du Soleil."},
 {t:"gravitation",q:"On mesure un poids avec :",b:"un dynamomètre",f:["une balance","un thermomètre","un voltmètre"],e:"La balance mesure une masse."},
 {t:"vitesse",q:"La vitesse moyenne se calcule avec :",b:"v = d ÷ t",f:["v = d × t","v = t ÷ d","v = d + t"],e:"d : distance parcourue ; t : durée du parcours."},
 {t:"vitesse",q:"Un train parcourt 300 km en 2 h. Quelle est sa vitesse moyenne ?",b:"150 km/h",f:["600 km/h","302 km/h","50 km/h"],e:"v = 300 ÷ 2 = 150 km/h."},
 {t:"vitesse",q:"Combien font 36 km/h en m/s ?",b:"10 m/s",f:["36 m/s","129,6 m/s","3,6 m/s"],e:"On divise par 3,6 : 36 ÷ 3,6 = 10 m/s."},
 {t:"vitesse",q:"Un mouvement dont la vitesse augmente est :",b:"accéléré",f:["ralenti","uniforme","immobile"],e:"Uniforme : vitesse constante ; ralenti : vitesse qui diminue."},
 {t:"vitesse",q:"Un mouvement rectiligne uniforme se fait :",b:"en ligne droite, à vitesse constante",f:["en cercle, à vitesse constante","en ligne droite, en accélérant","sans trajectoire"],e:"Rectiligne : la trajectoire ; uniforme : la vitesse."},
 {t:"vitesse",q:"Le mouvement d'un objet se décrit toujours :",b:"par rapport à un référentiel choisi",f:["par rapport au Soleil uniquement","sans repère","par rapport à sa masse"],e:"Un passager est immobile par rapport au train, mais en mouvement par rapport au quai."},
 {t:"vitesse",q:"Un cycliste roule à 5 m/s pendant 60 s. Quelle distance parcourt-il ?",b:"300 m",f:["12 m","65 m","3 km"],e:"d = v × t = 5 × 60 = 300 m."},
 {t:"cinetique",q:"L'énergie cinétique d'un objet est l'énergie liée à :",b:"son mouvement",f:["sa température","sa couleur","sa charge électrique"],e:"Un objet immobile n'a pas d'énergie cinétique."},
 {t:"cinetique",q:"Quelle est la formule de l'énergie cinétique ?",b:"Ec = ½ × m × v²",f:["Ec = m × g","Ec = P × t","Ec = m × v"],e:"m en kg, v en m/s, Ec en joules."},
 {t:"cinetique",q:"Si la vitesse d'une voiture double, son énergie cinétique est :",b:"multipliée par 4",f:["multipliée par 2","inchangée","divisée par 2"],e:"Elle dépend du carré de la vitesse : 2² = 4."},
 {t:"cinetique",q:"Une voiture de 1 000 kg roule à 10 m/s. Quelle est son énergie cinétique ?",b:"50 000 J",f:["10 000 J","5 000 J","100 000 J"],e:"Ec = ½ × 1 000 × 10² = 500 × 100 = 50 000 J."},
 {t:"cinetique",q:"La distance d'arrêt d'un véhicule est la somme :",b:"de la distance de réaction et de la distance de freinage",f:["de la vitesse et de la masse","de deux distances de freinage","de la longueur du véhicule et de la route"],e:"Pendant le temps de réaction, le véhicule roule encore à pleine vitesse."},
 {t:"cinetique",q:"Quand la vitesse augmente, la distance de freinage :",b:"augmente beaucoup plus vite que la vitesse",f:["diminue","ne change pas","augmente moins vite que la vitesse"],e:"Elle est liée à l'énergie cinétique, qui dépend du carré de la vitesse."},
 {t:"cinetique",q:"Pendant la chute d'un objet, son énergie de position se convertit en :",b:"énergie cinétique",f:["énergie électrique","énergie chimique","énergie nucléaire"],e:"L'objet perd de l'altitude et gagne de la vitesse."},
 {t:"techno",q:"Dans un système automatisé, un capteur sert à :",b:"acquérir une information",f:["produire un mouvement","stocker l'énergie","afficher un message"],e:"Exemples : capteur de lumière, de température, de présence."},
 {t:"techno",q:"Un actionneur (moteur, LED, haut-parleur) sert à :",b:"agir sur l'environnement",f:["mesurer une grandeur","stocker un programme","identifier un appareil sur un réseau"],e:"Il reçoit un ordre de la carte de commande et agit."},
 {t:"techno",q:"Une adresse IP sert à :",b:"identifier un appareil sur un réseau",f:["mesurer la vitesse d'un ordinateur","stocker des photos","alimenter un appareil en énergie"],e:"Elle permet aux données d'arriver au bon destinataire."},
 {t:"techno",q:"Le cahier des charges d'un objet décrit :",b:"les besoins et les contraintes auxquels il doit répondre",f:["la facture de l'objet","la notice de recyclage seulement","le nom du vendeur"],e:"Il guide la conception avant la fabrication."},
 {t:"techno",q:"Le cycle de vie d'un produit va :",b:"de l'extraction des matières premières à la fin de vie (recyclage, élimination)",f:["de l'achat à la livraison","de l'usine au magasin","de la publicité à la vente"],e:"On peut mesurer l'impact environnemental à chaque étape."},
 {t:"techno",q:"Un prototype est :",b:"un premier modèle réalisé pour tester une solution",f:["un produit vendu en grande série","un déchet industriel","un logiciel de dessin"],e:"On le teste et on l'améliore avant de lancer la production."},
 {t:"techno",q:"La chaîne d'information d'un objet comprend les fonctions :",b:"acquérir, traiter, communiquer",f:["alimenter, distribuer, convertir","dessiner, imprimer, vendre","chauffer, refroidir, stocker"],e:"La chaîne d'énergie, elle : alimenter, distribuer, convertir, transmettre."},
 {t:"techno",q:"Un protocole de communication (comme HTTP) est :",b:"un ensemble de règles pour échanger des données",f:["un câble électrique","un type d'écran","un virus informatique"],e:"Les appareils doivent « parler la même langue » pour communiquer."}
];
/* ---------- HISTOIRE-GÉOGRAPHIE ET EMC ---------- */
const BANQUE_H=[
 {t:"ggm1",q:"En quelle année commence la Première Guerre mondiale ?",b:"1914",f:["1918","1939","1870"],e:"Elle dure de 1914 à 1918."},
 {t:"ggm1",q:"L'armistice qui met fin aux combats de la Grande Guerre est signé le :",b:"11 novembre 1918",f:["8 mai 1945","14 juillet 1919","28 juin 1914"],e:"Le 11 novembre est devenu un jour de commémoration."},
 {t:"ggm1",q:"La bataille de Verdun a lieu en :",b:"1916",f:["1914","1918","1940"],e:"Elle dure près de dix mois et fait environ 700 000 victimes (tués, blessés, disparus)."},
 {t:"ggm1",q:"Une guerre totale est une guerre qui :",b:"mobilise toutes les ressources humaines, économiques et morales d'un pays",f:["ne concerne que les soldats","dure moins d'un an","se déroule sur un seul champ de bataille"],e:"Les civils, l'économie et la propagande sont mobilisés."},
 {t:"ggm1",q:"Pendant la Grande Guerre, de nombreuses femmes :",b:"remplacent les hommes partis au front, dans les usines et les champs",f:["combattent dans les tranchées","obtiennent le droit de vote en France","restent sans activité"],e:"Les « munitionnettes » fabriquent les obus."},
 {t:"ggm1",q:"En 1915, le gouvernement de l'Empire ottoman organise :",b:"le génocide des Arméniens",f:["la révolution russe","le débarquement de Normandie","la construction du mur de Berlin"],e:"Plus d'un million d'Arméniens sont assassinés."},
 {t:"ggm1",q:"Le traité de Versailles (1919) :",b:"impose de lourdes conditions à l'Allemagne",f:["crée l'Union européenne","met fin à la Seconde Guerre mondiale","partage l'Afrique"],e:"L'Allemagne perd des territoires, doit payer des réparations et limiter son armée."},
 {t:"ggm1",q:"Les soldats français de la Grande Guerre sont surnommés :",b:"les poilus",f:["les grognards","les maquisards","les sans-culottes"],e:"Ils vivent dans des conditions terribles dans les tranchées."},
 {t:"ggm1",q:"Les États-Unis entrent en guerre aux côtés de la France et du Royaume-Uni en :",b:"1917",f:["1914","1941","1919"],e:"Ils apportent des renforts décisifs en 1918."},
 {t:"totalitarismes",q:"Un régime totalitaire se caractérise par :",b:"un parti unique, le culte du chef, la propagande et la terreur",f:["des élections libres et plusieurs partis","la séparation des pouvoirs","la liberté de la presse"],e:"L'État cherche à contrôler toute la société et même les esprits."},
 {t:"totalitarismes",q:"Qui dirige les bolcheviks lors de la révolution d'octobre 1917 en Russie ?",b:"Lénine",f:["Staline","Hitler","Mussolini"],e:"Staline prend le pouvoir après la mort de Lénine (1924)."},
 {t:"totalitarismes",q:"En URSS, Staline impose :",b:"la collectivisation des terres et les camps du goulag",f:["la démocratie parlementaire","la liberté religieuse","l'économie de marché"],e:"La Grande Terreur (1937-1938) élimine des centaines de milliers d'opposants supposés."},
 {t:"totalitarismes",q:"Hitler devient chancelier d'Allemagne en :",b:"janvier 1933",f:["novembre 1918","septembre 1939","mai 1945"],e:"En quelques mois, il installe une dictature."},
 {t:"totalitarismes",q:"Les lois de Nuremberg (1935) :",b:"privent les Juifs allemands de leur citoyenneté",f:["accordent le droit de vote aux femmes","créent la Sécurité sociale","mettent fin à la guerre"],e:"L'antisémitisme devient la loi de l'État nazi."},
 {t:"totalitarismes",q:"La Nuit de Cristal (novembre 1938) est :",b:"un pogrom organisé contre les Juifs d'Allemagne",f:["une fête nationale allemande","une bataille de la Grande Guerre","un traité de paix"],e:"Synagogues incendiées, magasins pillés, milliers d'arrestations."},
 {t:"totalitarismes",q:"En France, le Front populaire (1936), dirigé par Léon Blum, obtient :",b:"les congés payés et la semaine de 40 heures",f:["le droit de vote des femmes","la fin de la guerre d'Algérie","la création de l'euro"],e:"Deux semaines de congés payés, une grande conquête sociale."},
 {t:"totalitarismes",q:"La crise économique mondiale commence en 1929 :",b:"par le krach de la Bourse de New York",f:["par la révolution russe","par l'invasion de la Pologne","par la chute du mur de Berlin"],e:"Elle provoque chômage et misère, et fragilise les démocraties."},
 {t:"totalitarismes",q:"Les Jeunesses hitlériennes servaient à :",b:"embrigader la jeunesse dans l'idéologie nazie",f:["organiser des élections","aider les Juifs","protéger la liberté d'expression"],e:"Le régime veut former des jeunes fidèles au Führer."},
 {t:"ggm2",q:"La Seconde Guerre mondiale commence en Europe avec :",b:"l'invasion de la Pologne par l'Allemagne en septembre 1939",f:["l'attaque de Pearl Harbor","l'assassinat de l'archiduc François-Ferdinand","le débarquement en Normandie"],e:"La France et le Royaume-Uni déclarent la guerre à l'Allemagne le 3 septembre 1939."},
 {t:"ggm2",q:"L'attaque japonaise de Pearl Harbor (décembre 1941) provoque :",b:"l'entrée en guerre des États-Unis",f:["la fin de la guerre","la défaite de la France","la création de l'ONU"],e:"La guerre devient mondiale."},
 {t:"ggm2",q:"La bataille de Stalingrad (1942-1943) est :",b:"une défaite majeure de l'Allemagne et un tournant de la guerre",f:["une victoire allemande décisive","une bataille de 1914","un débarquement allié"],e:"L'Armée rouge repousse ensuite l'armée allemande vers l'ouest."},
 {t:"ggm2",q:"Le débarquement allié en Normandie a lieu le :",b:"6 juin 1944",f:["8 mai 1945","11 novembre 1918","18 juin 1940"],e:"C'est le début de la libération de la France."},
 {t:"ggm2",q:"L'Allemagne nazie capitule le :",b:"8 mai 1945",f:["6 juin 1944","11 novembre 1918","2 septembre 1939"],e:"Le Japon capitule le 2 septembre 1945."},
 {t:"ggm2",q:"En août 1945, les États-Unis lancent la bombe atomique sur :",b:"Hiroshima et Nagasaki",f:["Tokyo et Berlin","Pearl Harbor","Moscou"],e:"Le Japon capitule quelques semaines plus tard."},
 {t:"ggm2",q:"Une guerre d'anéantissement vise :",b:"à détruire totalement l'ennemi, y compris les civils",f:["à négocier rapidement la paix","à ne combattre que sur mer","à épargner les populations"],e:"Bombardements de villes, massacres et génocides en sont la marque."},
 {t:"ggm2",q:"Le pacte germano-soviétique (août 1939) est :",b:"un pacte de non-agression entre l'Allemagne et l'URSS",f:["une alliance entre la France et l'Allemagne","le traité de paix de 1945","un accord sur l'Europe"],e:"Il permet à Hitler d'attaquer la Pologne sans craindre l'URSS."},
 {t:"ggm2",q:"La Seconde Guerre mondiale a fait :",b:"plus de 50 millions de morts, en majorité des civils",f:["environ 500 000 morts","environ 1 million de morts, tous soldats","moins de morts que la Grande Guerre"],e:"C'est le conflit le plus meurtrier de l'histoire."},
 {t:"genocide",q:"Combien de Juifs ont été assassinés par les nazis pendant la Shoah ?",b:"environ 6 millions",f:["environ 600 000","environ 60 000","environ 60 millions"],e:"Près des deux tiers des Juifs d'Europe."},
 {t:"genocide",q:"Les Tziganes (Roms et Sinti) ont été victimes :",b:"d'un génocide perpétré par les nazis",f:["d'aucune persécution","d'une simple expulsion vers l'Amérique","de la guerre froide"],e:"Des centaines de milliers d'entre eux ont été assassinés."},
 {t:"genocide",q:"Auschwitz-Birkenau était :",b:"à la fois un camp de concentration et un centre de mise à mort",f:["un camp de vacances","une prison pour soldats alliés","une usine d'armement civile"],e:"Plus d'un million de personnes, en très grande majorité juives, y ont été assassinées."},
 {t:"genocide",q:"La « Shoah par balles » désigne :",b:"les massacres de Juifs par des unités mobiles (Einsatzgruppen) à l'Est",f:["les bombardements de Londres","la guerre de tranchées","les combats du débarquement"],e:"À partir de 1941, en URSS occupée."},
 {t:"genocide",q:"La conférence de Wannsee (janvier 1942) organise :",b:"la mise en œuvre de la « solution finale »",f:["la paix en Europe","le partage de l'Allemagne","le débarquement allié"],e:"Les dirigeants nazis coordonnent l'extermination des Juifs d'Europe."},
 {t:"genocide",q:"La rafle du Vel d'Hiv (juillet 1942) a été menée par :",b:"la police française, à la demande des nazis",f:["l'armée américaine","la Résistance","l'armée britannique"],e:"Plus de 13 000 Juifs sont arrêtés à Paris, dont plus de 4 000 enfants."},
 {t:"genocide",q:"Le camp d'Auschwitz est libéré par l'Armée rouge le :",b:"27 janvier 1945",f:["6 juin 1944","11 novembre 1918","14 juillet 1945"],e:"Cette date est devenue la Journée internationale de la mémoire de l'Holocauste."},
 {t:"genocide",q:"Les ghettos, comme celui de Varsovie, étaient :",b:"des quartiers fermés où les nazis enfermaient les Juifs",f:["des quartiers d'affaires","des camps de soldats alliés","des zones libres"],e:"La faim et les maladies y tuaient massivement avant les déportations."},
 {t:"vichy",q:"L'armistice signé par la France le 22 juin 1940 :",b:"coupe la France en deux et place le nord sous occupation allemande",f:["met fin à la Seconde Guerre mondiale","fait entrer les États-Unis en guerre","libère Paris"],e:"Une ligne de démarcation sépare zone occupée et zone « libre »."},
 {t:"vichy",q:"Le 10 juillet 1940, les pleins pouvoirs sont confiés :",b:"au maréchal Pétain",f:["au général de Gaulle","à Léon Blum","à Jean Moulin"],e:"La IIIe République disparaît au profit de l'« État français »."},
 {t:"vichy",q:"Quelle est la devise du régime de Vichy ?",b:"Travail, Famille, Patrie",f:["Liberté, Égalité, Fraternité","Paix, Pain, Liberté","Un peuple, un Empire, un chef"],e:"Elle remplace la devise républicaine."},
 {t:"vichy",q:"Le 18 juin 1940, depuis Londres, le général de Gaulle :",b:"appelle les Français à poursuivre le combat",f:["signe l'armistice","devient président de la République","annonce la capitulation"],e:"Il fonde la France libre."},
 {t:"vichy",q:"Jean Moulin est chargé par de Gaulle :",b:"d'unifier les mouvements de la Résistance intérieure",f:["de diriger le régime de Vichy","de négocier avec Hitler","de commander l'armée allemande"],e:"Il crée le Conseil national de la Résistance en 1943 ; arrêté, il meurt sous la torture."},
 {t:"vichy",q:"La collaboration désigne :",b:"la politique de coopération du régime de Vichy avec l'Allemagne nazie",f:["l'aide apportée aux résistants","l'alliance avec le Royaume-Uni","la reconstruction après 1945"],e:"Elle va jusqu'à la participation aux persécutions antisémites."},
 {t:"vichy",q:"Le STO (Service du travail obligatoire, 1943) obligeait des jeunes Français :",b:"à aller travailler en Allemagne",f:["à entrer dans la Résistance","à servir dans l'armée française libre","à aller à l'école plus longtemps"],e:"Beaucoup refusent et rejoignent les maquis."},
 {t:"vichy",q:"Paris est libéré le :",b:"25 août 1944",f:["8 mai 1945","6 juin 1944","11 novembre 1918"],e:"Par la Résistance et la 2e division blindée du général Leclerc."},
 {t:"republique",q:"Les Françaises votent pour la première fois en :",b:"1945",f:["1848","1936","1968"],e:"Le droit de vote leur est accordé en 1944 ; elles votent aux municipales d'avril 1945."},
 {t:"republique",q:"La Sécurité sociale est créée en :",b:"1945",f:["1905","1936","1981"],e:"Elle protège contre la maladie, les accidents du travail et la vieillesse."},
 {t:"republique",q:"Le programme du Conseil national de la Résistance (1944) prévoit :",b:"de grandes réformes sociales et économiques après la Libération",f:["le maintien du régime de Vichy","la fin de la République","la collaboration avec l'Allemagne"],e:"Sécurité sociale, nationalisations, démocratie retrouvée."},
 {t:"republique",q:"À la Libération, de grandes entreprises comme Renault sont :",b:"nationalisées",f:["fermées","vendues à l'étranger","détruites"],e:"L'État en devient propriétaire pour reconstruire le pays."},
 {t:"republique",q:"La IVe République est instituée par la Constitution de :",b:"1946",f:["1958","1875","1940"],e:"Elle dure jusqu'en 1958."},
 {t:"republique",q:"Le GPRF, dirigé par de Gaulle à la Libération, est :",b:"le Gouvernement provisoire de la République française",f:["le parti de Pétain","une organisation européenne","un traité de paix"],e:"Il rétablit la légalité républicaine de 1944 à 1946."},
 {t:"guerrefroide",q:"La guerre froide oppose principalement :",b:"les États-Unis et l'URSS",f:["la France et l'Allemagne","le Royaume-Uni et le Japon","la Chine et l'Inde"],e:"Deux superpuissances et deux modèles : démocratie libérale contre communisme."},
 {t:"guerrefroide",q:"Pourquoi parle-t-on de guerre « froide » ?",b:"les deux superpuissances ne s'affrontent jamais directement",f:["elle a lieu en hiver","elle se déroule en Arctique","aucun pays n'a d'armes"],e:"L'arme nucléaire rend un affrontement direct trop dangereux."},
 {t:"guerrefroide",q:"Le mur de Berlin est construit en :",b:"1961",f:["1945","1989","1949"],e:"La RDA veut empêcher la fuite de ses habitants vers l'Ouest."},
 {t:"guerrefroide",q:"Le mur de Berlin tombe le :",b:"9 novembre 1989",f:["13 août 1961","8 mai 1945","1er janvier 2002"],e:"L'Allemagne est réunifiée en 1990."},
 {t:"guerrefroide",q:"Le plan Marshall (1947) est :",b:"une aide économique américaine à la reconstruction de l'Europe",f:["un plan d'invasion de l'URSS","un traité de désarmement","la création de l'euro"],e:"Il renforce aussi l'influence américaine en Europe de l'Ouest."},
 {t:"guerrefroide",q:"La crise de Cuba (1962) éclate à cause :",b:"de l'installation de missiles nucléaires soviétiques à Cuba",f:["d'une révolution en France","de la construction du mur de Berlin","de la guerre de Corée"],e:"Le monde frôle la guerre nucléaire ; l'URSS retire ses missiles."},
 {t:"guerrefroide",q:"L'OTAN, créée en 1949, est :",b:"une alliance militaire autour des États-Unis",f:["une alliance autour de l'URSS","une organisation de l'Union européenne","une agence de l'ONU pour l'enfance"],e:"L'URSS répond avec le pacte de Varsovie en 1955."},
 {t:"guerrefroide",q:"L'URSS disparaît en :",b:"1991",f:["1989","1945","1961"],e:"Sa disparition marque la fin de la guerre froide."},
 {t:"decolonisation",q:"L'Inde obtient son indépendance en :",b:"1947",f:["1962","1918","1960"],e:"Elle se fait au prix d'une partition sanglante avec le Pakistan."},
 {t:"decolonisation",q:"Gandhi a lutté pour l'indépendance de l'Inde par :",b:"la non-violence et la désobéissance civile",f:["une guerre totale","un coup d'État militaire","l'alliance avec l'URSS"],e:"La « marche du sel » (1930) en est un exemple célèbre."},
 {t:"decolonisation",q:"La guerre d'Algérie se déroule :",b:"de 1954 à 1962",f:["de 1939 à 1945","de 1914 à 1918","de 1946 à 1954"],e:"L'Algérie devient indépendante le 5 juillet 1962."},
 {t:"decolonisation",q:"Les accords d'Évian (1962) :",b:"mettent fin à la guerre d'Algérie",f:["créent la CEE","terminent la guerre d'Indochine","fondent l'ONU"],e:"Ils ouvrent la voie à l'indépendance algérienne."},
 {t:"decolonisation",q:"La défaite de Dien Bien Phu (1954) entraîne :",b:"le départ de la France d'Indochine",f:["l'indépendance de l'Algérie","la fin de la guerre froide","la création de la Ve République"],e:"Les accords de Genève (1954) reconnaissent l'indépendance du Vietnam, du Laos et du Cambodge."},
 {t:"decolonisation",q:"La conférence de Bandung (1955) réunit :",b:"des pays d'Asie et d'Afrique qui dénoncent le colonialisme",f:["les puissances coloniales européennes","les États-Unis et l'URSS","les pays de la CEE"],e:"Elle affirme la place du tiers-monde sur la scène internationale."},
 {t:"decolonisation",q:"En 1960, de nombreuses colonies françaises d'Afrique subsaharienne :",b:"deviennent indépendantes",f:["deviennent des départements français","entrent dans la guerre froide aux côtés de l'URSS","rejoignent la CEE"],e:"Sénégal, Mali, Côte d'Ivoire, Madagascar… On parle de « l'année de l'Afrique »."},
 {t:"europe",q:"La déclaration Schuman (9 mai 1950) propose :",b:"de mettre en commun la production de charbon et d'acier",f:["de créer une armée européenne unique","d'adopter l'euro","d'exclure l'Allemagne de l'Europe"],e:"Elle aboutit à la CECA en 1951."},
 {t:"europe",q:"Combien de pays fondent la CECA en 1951 ?",b:"six",f:["douze","vingt-sept","deux"],e:"France, RFA, Italie, Belgique, Pays-Bas, Luxembourg."},
 {t:"europe",q:"Le traité de Rome (1957) crée :",b:"la Communauté économique européenne (CEE)",f:["l'Union européenne","l'OTAN","l'euro"],e:"Un marché commun entre les six pays fondateurs."},
 {t:"europe",q:"Le traité de Maastricht (1992) crée :",b:"l'Union européenne",f:["la CECA","la CEE","l'OTAN"],e:"Il prévoit aussi la monnaie unique et une citoyenneté européenne."},
 {t:"europe",q:"Les pièces et billets en euros sont mis en circulation en :",b:"2002",f:["1957","1992","2020"],e:"L'euro existait déjà pour les échanges bancaires depuis 1999."},
 {t:"europe",q:"Combien d'États membres compte l'Union européenne depuis le départ du Royaume-Uni ?",b:"27",f:["28","12","6"],e:"Le Royaume-Uni l'a quittée en 2020."},
 {t:"europe",q:"La construction européenne avait d'abord pour but :",b:"de garantir la paix entre les pays européens",f:["de conquérir des colonies","de lutter contre les États-Unis","de supprimer les États"],e:"Après deux guerres mondiales, il s'agit de rendre la guerre impossible."},
 {t:"cinquieme",q:"La Constitution de la Ve République est adoptée en :",b:"1958",f:["1946","1962","1981"],e:"Par référendum, le 28 septembre 1958."},
 {t:"cinquieme",q:"Qui est le premier président de la Ve République ?",b:"Charles de Gaulle",f:["François Mitterrand","Georges Pompidou","Philippe Pétain"],e:"Il est président de 1959 à 1969."},
 {t:"cinquieme",q:"Depuis la réforme de 1962, le président de la République est élu :",b:"au suffrage universel direct",f:["par les députés seulement","par le Sénat","par le Premier ministre"],e:"La première élection présidentielle au suffrage universel direct a lieu en 1965."},
 {t:"cinquieme",q:"Depuis 2002, le mandat du président de la République dure :",b:"5 ans",f:["7 ans","4 ans","10 ans"],e:"Le quinquennat a été adopté par référendum en 2000."},
 {t:"cinquieme",q:"Qui nomme le Premier ministre ?",b:"le président de la République",f:["le Sénat","le Conseil constitutionnel","les électeurs directement"],e:"Le gouvernement est responsable devant l'Assemblée nationale."},
 {t:"cinquieme",q:"En 1981, l'élection de François Mitterrand marque :",b:"la première alternance de la Ve République au profit de la gauche",f:["la fin de la Ve République","le retour de De Gaulle","la création de l'euro"],e:"Alternance : le pouvoir passe pacifiquement d'un camp politique à l'autre."},
 {t:"cinquieme",q:"En mai 1968, la France connaît :",b:"une grande crise étudiante et sociale",f:["une guerre civile","l'indépendance de l'Algérie","la chute du mur de Berlin"],e:"Manifestations et grèves massives ; de Gaulle quitte le pouvoir en 1969."},
 {t:"societe",q:"La loi Veil (1975) autorise :",b:"l'interruption volontaire de grossesse (IVG)",f:["la contraception","le droit de vote des femmes","le mariage à 18 ans"],e:"Simone Veil, ministre de la Santé, la défend devant l'Assemblée."},
 {t:"societe",q:"La loi Neuwirth (1967) autorise :",b:"la contraception",f:["l'IVG","le divorce","le travail des femmes"],e:"Les femmes peuvent mieux choisir le moment d'avoir des enfants."},
 {t:"societe",q:"En 1974, l'âge de la majorité passe :",b:"de 21 à 18 ans",f:["de 18 à 21 ans","de 16 à 18 ans","de 25 à 21 ans"],e:"Les jeunes de 18 ans peuvent voter."},
 {t:"societe",q:"Depuis 1965, une femme mariée peut :",b:"travailler et ouvrir un compte bancaire sans l'autorisation de son mari",f:["voter pour la première fois","être élue députée pour la première fois","entrer à l'école primaire"],e:"Une étape de l'égalité entre les femmes et les hommes."},
 {t:"societe",q:"Les « Trente Glorieuses » désignent :",b:"la forte croissance économique de 1945 au milieu des années 1970",f:["les trente années de la Grande Guerre","une période de crise","trente lois sur l'école"],e:"Expression de l'économiste Jean Fourastié ; c'est aussi l'époque de la société de consommation."},
 {t:"societe",q:"La peine de mort est abolie en France en :",b:"1981",f:["1905","1945","2002"],e:"La loi est défendue par le ministre de la Justice Robert Badinter."},
 {t:"societe",q:"Le baby-boom désigne :",b:"la forte hausse des naissances après 1945",f:["une crise économique","l'arrivée des ordinateurs","la baisse de la population"],e:"Il dure jusqu'au milieu des années 1960."},
 {t:"urbain",q:"La périurbanisation est :",b:"l'extension de la ville sur les espaces ruraux voisins",f:["le retour des citadins dans le centre","la disparition des villes","la construction de tours en centre-ville"],e:"Des lotissements et des zones d'activités s'installent à la campagne."},
 {t:"urbain",q:"Une aire d'attraction d'une ville comprend :",b:"un pôle urbain et les communes dont beaucoup d'actifs viennent y travailler",f:["seulement le centre historique","uniquement les villages de montagne","seulement les zones industrielles"],e:"C'est la nouvelle façon de délimiter l'influence d'une ville (Insee)."},
 {t:"urbain",q:"Les mobilités pendulaires sont :",b:"les trajets quotidiens entre domicile et travail",f:["les voyages en avion à l'étranger","les migrations d'oiseaux","les déménagements"],e:"Elles provoquent embouteillages et pollution aux heures de pointe."},
 {t:"urbain",q:"La métropolisation est :",b:"la concentration des habitants, des activités et des pouvoirs dans les grandes villes",f:["le développement des villages","la fermeture des usines","le départ des habitants vers la mer"],e:"Lyon, Lille, Toulouse, Marseille, Bordeaux… sont des métropoles."},
 {t:"urbain",q:"Quelle ville française est une ville mondiale ?",b:"Paris",f:["Lyon","Lille","Bordeaux"],e:"Elle concentre sièges d'entreprises, institutions et tourisme international."},
 {t:"urbain",q:"En France, la grande majorité de la population vit :",b:"dans les aires urbaines",f:["dans des villages isolés","en haute montagne","sur les îles"],e:"La France est un pays très urbanisé."},
 {t:"urbain",q:"L'étalement urbain pose problème car il :",b:"consomme des terres agricoles et allonge les déplacements",f:["réduit la pollution","raccourcit les trajets","augmente la surface des forêts"],e:"On cherche aujourd'hui à limiter l'artificialisation des sols."},
 {t:"productifs",q:"Un espace productif est :",b:"un espace où l'on produit des richesses (biens ou services)",f:["un espace sans habitants","uniquement une forêt protégée","un espace interdit à l'industrie"],e:"Espaces agricoles, industriels, touristiques ou de services."},
 {t:"productifs",q:"Une zone industrialo-portuaire, comme Marseille-Fos ou Dunkerque, associe :",b:"un grand port et des industries",f:["des stations de ski et des hôtels","des vignes et des caves","des universités et des laboratoires"],e:"Les industries profitent de l'arrivée des matières premières par la mer."},
 {t:"productifs",q:"Toulouse est un grand centre de l'industrie :",b:"aéronautique et spatiale",f:["automobile uniquement","textile","du charbon"],e:"Airbus y assemble ses avions."},
 {t:"productifs",q:"Un technopôle, comme Sophia Antipolis, regroupe :",b:"des entreprises de haute technologie, des centres de recherche et des universités",f:["des exploitations agricoles","des mines de charbon","des ports de pêche"],e:"L'innovation profite de la proximité entre recherche et entreprises."},
 {t:"productifs",q:"Aujourd'hui, la grande majorité des emplois en France se trouve dans :",b:"les services (secteur tertiaire)",f:["l'agriculture","l'industrie","la pêche"],e:"Commerce, santé, éducation, transports, tourisme…"},
 {t:"productifs",q:"La Beauce est une grande région de production :",b:"céréalière",f:["viticole","de montagne","industrielle"],e:"Agriculture productive : grandes exploitations mécanisées."},
 {t:"productifs",q:"La désindustrialisation désigne :",b:"la fermeture d'usines et la baisse des emplois industriels",f:["la création de nouvelles usines","le développement de l'agriculture","la hausse du tourisme"],e:"Elle a touché le Nord et l'Est de la France."},
 {t:"faibledensite",q:"Un espace de faible densité est un espace :",b:"peu peuplé, où les habitants sont dispersés",f:["très peuplé","sans aucun habitant","uniquement urbain"],e:"Il couvre une grande partie du territoire français."},
 {t:"faibledensite",q:"La « diagonale du vide » désigne :",b:"une bande d'espaces peu peuplés allant du nord-est au sud-ouest de la France",f:["une autoroute","une frontière européenne","un fleuve"],e:"Des Ardennes et de la Meuse jusqu'aux Landes."},
 {t:"faibledensite",q:"Les néoruraux sont :",b:"des citadins venus s'installer à la campagne",f:["des agriculteurs qui partent en ville","des touristes étrangers","des habitants des métropoles"],e:"Ils recherchent un cadre de vie plus calme."},
 {t:"faibledensite",q:"Une difficulté fréquente des espaces de faible densité est :",b:"l'éloignement des services (médecins, écoles, commerces)",f:["la pollution des usines","les embouteillages","la surpopulation"],e:"On parle parfois de « déserts médicaux »."},
 {t:"faibledensite",q:"Un atout des espaces de faible densité est :",b:"un cadre de vie et des paysages qui attirent touristes et nouveaux habitants",f:["un très grand nombre d'usines","des transports en commun très nombreux","une population très dense"],e:"Tourisme vert, produits locaux, résidences secondaires."},
 {t:"faibledensite",q:"Les parcs naturels régionaux visent à :",b:"protéger le patrimoine tout en développant l'économie locale",f:["interdire toute activité humaine","construire des métropoles","installer des zones industrielles"],e:"Ils associent communes, régions et habitants."},
 {t:"amenagement",q:"Aménager le territoire, c'est :",b:"agir pour réduire les inégalités entre territoires et les rendre attractifs",f:["construire uniquement à Paris","interdire les routes","détruire les espaces ruraux"],e:"Routes, transports, numérique, services publics…"},
 {t:"amenagement",q:"Quels acteurs aménagent le territoire ?",b:"l'État, les collectivités territoriales, l'Union européenne et les entreprises",f:["seulement le maire","seulement les habitants","uniquement l'ONU"],e:"Chaque acteur intervient à son échelle."},
 {t:"amenagement",q:"Combien de régions compte la France métropolitaine depuis 2016 ?",b:"13",f:["22","18","101"],e:"Avec les 5 régions d'outre-mer, la France compte 18 régions."},
 {t:"amenagement",q:"Désenclaver un territoire, c'est :",b:"améliorer ses liaisons avec le reste du pays",f:["l'entourer d'une clôture","le vider de ses habitants","le transformer en parc"],e:"Une route, une ligne ferroviaire ou le haut débit peuvent désenclaver."},
 {t:"amenagement",q:"Lequel de ces territoires n'est PAS un département et région d'outre-mer (DROM) ?",b:"la Polynésie française",f:["La Réunion","la Guadeloupe","la Guyane"],e:"Les cinq DROM : Guadeloupe, Martinique, Guyane, La Réunion, Mayotte."},
 {t:"amenagement",q:"Grâce aux territoires d'outre-mer, la France possède :",b:"l'un des plus grands espaces maritimes du monde",f:["la plus grande forêt d'Europe","le plus haut sommet du monde","aucune frontière terrestre"],e:"Sa zone économique exclusive est la deuxième du monde."},
 {t:"amenagement",q:"En Guyane, le centre spatial de Kourou est :",b:"la base de lancement des fusées européennes",f:["un port de pêche","une station de ski","une centrale à charbon"],e:"Sa position proche de l'équateur facilite les lancements."},
 {t:"amenagement",q:"Les territoires ultramarins doivent faire face notamment à :",b:"l'éloignement de la métropole et un coût de la vie plus élevé",f:["un climat polaire partout","l'absence totale de population","une très faible biodiversité"],e:"Ils ont aussi de grands atouts : biodiversité, espaces maritimes, tourisme."},
 {t:"ue",q:"La France est membre de l'Union européenne :",b:"depuis le début, comme pays fondateur",f:["depuis 2002","depuis 1992 seulement","elle n'en fait pas partie"],e:"Elle fait partie des six pays fondateurs des années 1950."},
 {t:"ue",q:"Le Parlement européen siège principalement à :",b:"Strasbourg",f:["Paris","Berlin","Madrid"],e:"La Commission européenne siège à Bruxelles."},
 {t:"ue",q:"L'espace Schengen permet :",b:"de circuler entre les pays membres sans contrôle systématique aux frontières",f:["d'utiliser l'euro partout dans le monde","de voter dans tous les pays","de travailler sans contrat"],e:"Les contrôles se font surtout aux frontières extérieures."},
 {t:"ue",q:"La PAC (politique agricole commune) sert à :",b:"soutenir les agriculteurs européens",f:["financer les armées","fixer le prix des voitures","organiser le tourisme"],e:"La France en est l'une des principales bénéficiaires."},
 {t:"ue",q:"Les fonds européens, comme le FEDER, servent à :",b:"aider des régions à se développer et réduire les inégalités",f:["payer les salaires des enseignants","financer les partis politiques","acheter des armes"],e:"On voit souvent le drapeau européen sur les panneaux de chantier."},
 {t:"ue",q:"Le programme Erasmus permet aux jeunes :",b:"d'étudier ou de se former dans un autre pays européen",f:["de voter plus tôt","d'éviter les examens","de travailler sans diplôme"],e:"Il existe depuis 1987."},
 {t:"ue",q:"Quel est le pays le plus vaste de l'Union européenne ?",b:"la France",f:["l'Allemagne","l'Espagne","la Pologne"],e:"L'Allemagne est le pays le plus peuplé."},
 {t:"laicite",q:"La loi de séparation des Églises et de l'État date de :",b:"1905",f:["1789","1958","2004"],e:"La République ne reconnaît, ne salarie ni ne subventionne aucun culte."},
 {t:"laicite",q:"La laïcité garantit :",b:"la liberté de conscience et la neutralité de l'État face aux religions",f:["l'interdiction de toutes les religions","une religion officielle","l'obligation de croire"],e:"Chacun est libre de croire ou de ne pas croire."},
 {t:"laicite",q:"Selon l'article 1er de la Constitution, la France est une République :",b:"indivisible, laïque, démocratique et sociale",f:["religieuse et monarchique","fédérale et religieuse","impériale et laïque"],e:"Elle assure l'égalité de tous devant la loi, sans distinction d'origine ou de religion."},
 {t:"laicite",q:"Depuis la loi de 2004, à l'école publique, les élèves ne peuvent pas porter :",b:"de signes religieux ostensibles",f:["de vêtements de couleur","de montre","de lunettes"],e:"L'école publique est un espace protégé de la pression religieuse."},
 {t:"laicite",q:"Dans un État laïque :",b:"chacun est libre de croire ou de ne pas croire",f:["tout le monde doit pratiquer une religion","seule une religion est autorisée","les religions sont interdites dans les maisons"],e:"L'État reste neutre et protège la liberté de chacun."},
 {t:"laicite",q:"La Charte de la laïcité est affichée :",b:"dans les écoles publiques",f:["dans les églises","dans les supermarchés","uniquement à l'Élysée"],e:"Elle explique en 15 articles la laïcité à l'École."},
 {t:"institutions",q:"Combien de députés siègent à l'Assemblée nationale ?",b:"577",f:["348","100","1 000"],e:"Ils sont élus pour 5 ans au suffrage universel direct ; il y a 348 sénateurs."},
 {t:"institutions",q:"Le Parlement français est composé :",b:"de l'Assemblée nationale et du Sénat",f:["du président et du Premier ministre","du Conseil constitutionnel seulement","des maires de France"],e:"Il vote la loi et contrôle le gouvernement."},
 {t:"institutions",q:"Les sénateurs sont élus :",b:"au suffrage universel indirect",f:["au suffrage universel direct","par le président","par tirage au sort"],e:"Par des « grands électeurs », surtout des élus locaux."},
 {t:"institutions",q:"Qui vote la loi en France ?",b:"le Parlement",f:["le président de la République seul","les tribunaux","les préfets"],e:"C'est le pouvoir législatif."},
 {t:"institutions",q:"Le Conseil constitutionnel vérifie :",b:"que les lois respectent la Constitution",f:["les comptes des entreprises","les résultats du brevet","les impôts de chaque citoyen"],e:"Il veille aussi à la régularité des élections nationales."},
 {t:"institutions",q:"La séparation des pouvoirs distingue :",b:"les pouvoirs législatif, exécutif et judiciaire",f:["l'école, la famille et l'entreprise","les régions, les départements et les communes","l'armée, la police et la justice"],e:"Elle protège contre l'abus de pouvoir (Montesquieu)."},
 {t:"institutions",q:"La devise de la République française est :",b:"Liberté, Égalité, Fraternité",f:["Travail, Famille, Patrie","Union, Force, Progrès","Paix et Prospérité"],e:"Elle figure sur les bâtiments publics."},
 {t:"institutions",q:"L'Assemblée nationale peut renverser le gouvernement en votant :",b:"une motion de censure",f:["un référendum","une loi de finances","une amnistie"],e:"Le gouvernement est responsable devant l'Assemblée nationale."},
 {t:"defense",q:"Qui est le chef des armées en France ?",b:"le président de la République",f:["le Premier ministre","le chef d'état-major","le ministre de l'Intérieur"],e:"La Constitution le prévoit."},
 {t:"defense",q:"Le recensement citoyen est obligatoire :",b:"dans les trois mois qui suivent les 16 ans",f:["à 10 ans","à 21 ans","seulement pour les garçons"],e:"Il est nécessaire pour s'inscrire aux examens et pour être convoqué à la JDC."},
 {t:"defense",q:"La Journée défense et citoyenneté (JDC) est :",b:"obligatoire pour les filles et les garçons",f:["réservée aux futurs militaires","facultative","un examen scolaire"],e:"Elle présente les enjeux de la défense et les possibilités d'engagement."},
 {t:"defense",q:"Le service militaire obligatoire a été suspendu en :",b:"1997",f:["1945","1962","2015"],e:"L'armée française est désormais professionnelle."},
 {t:"defense",q:"La dissuasion nucléaire française vise à :",b:"empêcher toute agression contre les intérêts vitaux du pays",f:["conquérir de nouveaux territoires","produire de l'électricité","remplacer l'armée de terre"],e:"Elle repose sur la menace d'une riposte."},
 {t:"defense",q:"Au sein de l'ONU, la France est :",b:"membre permanent du Conseil de sécurité",f:["simple observateur","exclue du Conseil de sécurité","présidente à vie"],e:"Avec les États-Unis, le Royaume-Uni, la Russie et la Chine."},
 {t:"defense",q:"Les opérations extérieures (OPEX) sont :",b:"des interventions de l'armée française hors du territoire national",f:["des exercices d'incendie au collège","des voyages scolaires","des élections à l'étranger"],e:"Souvent dans le cadre de l'ONU, de l'OTAN ou de l'UE."},
 {t:"reperes",q:"Quel événement date de 1917 ?",b:"la révolution russe",f:["la chute du mur de Berlin","la naissance de la Ve République","le traité de Rome"],e:"Les bolcheviks de Lénine prennent le pouvoir en octobre 1917."},
 {t:"reperes",q:"En quelle année naît la Ve République ?",b:"1958",f:["1946","1968","1945"],e:"Constitution adoptée par référendum le 28 septembre 1958."},
 {t:"reperes",q:"Quelle période correspond à la Seconde Guerre mondiale ?",b:"1939-1945",f:["1914-1918","1947-1991","1954-1962"],e:"1914-1918 : Grande Guerre ; 1947-1991 : guerre froide ; 1954-1962 : guerre d'Algérie."},
 {t:"reperes",q:"Quel événement date de 1989 ?",b:"la chute du mur de Berlin",f:["la construction du mur de Berlin","la crise de Cuba","le plan Marshall"],e:"Le 9 novembre 1989."},
 {t:"reperes",q:"En quelle année le droit de vote est-il accordé aux femmes en France ?",b:"1944",f:["1789","1918","1981"],e:"Par une ordonnance du 21 avril 1944 ; elles votent pour la première fois en 1945."},
 {t:"reperes",q:"Quel événement date de 1962 ?",b:"la fin de la guerre d'Algérie",f:["le débarquement en Normandie","la création de la CECA","la chute de l'URSS"],e:"Accords d'Évian, puis indépendance de l'Algérie."},
 {t:"reperes",q:"Quel traité, signé en 1957, crée la CEE ?",b:"le traité de Rome",f:["le traité de Versailles","le traité de Maastricht","le pacte de Varsovie"],e:"Versailles : 1919 ; Maastricht : 1992 ; pacte de Varsovie : 1955."}
];

function exoMatiere(mat,sem){
  if(mat==="m")return exoMaths(sem.tm);
  if(mat==="f")return exoFrancais(sem.tf);
  if(mat==="a")return exoAnglais(sem.ta);
  if(mat==="s")return parTag(BANQUE_S,sem.ts);
  return parTag(BANQUE_H,sem.th);
}
// Évite qu'une même question tombe deux fois dans la même séance.
function sansDoublon(fabrique){
  const vus=new Set(),q=[];
  for(const f of fabrique){let x=f(),k=0;while(vus.has(x.enonce)&&k<12){x=f();k++;}vus.add(x.enonce);q.push(x);}
  return q;
}
function seanceHorsLigne(mat,semaine){
  const sem=SEMAINES[semaine-1];
  if(mat==="rev")return sansDoublon([()=>exoMatiere("m",sem),()=>exoMatiere("f",sem),()=>exoMatiere("a",sem),()=>exoMatiere("s",sem),
                         ()=>exoMatiere("h",sem),()=>exoMatiere("m",sem),()=>exoMatiere("f",sem),()=>exoMaths("calcmental")]);
  const f=[()=>exoMaths("calcmental"),()=>exoFrancais(sem.tf)];
  for(let i=0;i<4;i++)f.push(()=>exoMatiere(mat,sem));
  return sansDoublon(f);
}


export const programme = { code: "3e", nom: "3e", rituel: "Deux questions de rituel pour commencer : calcul mental et français.", SEMAINES, JOURS, NOM_MAT, PERIODES, matiereDuJour, seanceHorsLigne };
