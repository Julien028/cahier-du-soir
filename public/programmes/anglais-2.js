// Programme « Anglais · niveau 2 (CM1-CM2) » (9-10 ans), créé le 08/10/2026.
// Niveau A1 du programme de langues vivantes du cycle 3. Anglais britannique.
// Chaque semaine a sa leçon (lecon, en HTML simple) ; les questions à écouter ont un champ « audio »
// (texte anglais lu par la synthèse vocale de la tablette).

/* =========================================================
   1. LE PROGRAMME — 36 SEMAINES
   t = étiquettes : vocabulaire | grammaire | écoute | lecture
   ========================================================= */
const SEMAINES=[
{n:1,p:1,v:"Se présenter",g:"Le verbe be : I am, you are, he is…",l:"Écouter des présentations",r:"Lire une fiche d'identité",t:"intro|be|intro|intro"},
{n:2,p:1,v:"Les nombres jusqu'à 100",g:"have got / has got",l:"Écouter des nombres",r:"Lire des nombres",t:"num100|havegot|num100|num100"},
{n:3,p:1,v:"La famille",g:"Les possessifs : my, your, his, her, our, their",l:"Écouter : la famille",r:"Lire : un arbre généalogique",t:"family|possessive|family|family"},
{n:4,p:1,v:"Les pays et les nationalités",g:"Where are you from? I'm from France.",l:"Écouter : d'où viens-tu ?",r:"Lire : des enfants du monde",t:"countries|from|countries|countries"},
{n:5,p:1,v:"L'école et les matières",g:"My favourite subject is… / I like… because…",l:"Écouter : l'emploi du temps",r:"Lire : une journée d'école anglaise",t:"school|favourite|school|school"},
{n:6,p:1,v:"Halloween",g:"Le pluriel régulier et irrégulier",l:"Écouter : Halloween",r:"Lire : une histoire d'Halloween",t:"halloween|plural|halloween|halloween"},
{n:7,p:1,v:"Révision de la période 1",g:"Révision : be, have got, les possessifs",l:"Révision : écouter",r:"Révision : lire",t:"rev1|grev1|rev1|rev1"},
{n:8,p:2,v:"L'heure",g:"What time is it? It's half past three.",l:"Écouter l'heure",r:"Lire des horaires",t:"time|time|time|time"},
{n:9,p:2,v:"La routine quotidienne",g:"Le présent simple : I get up, we play",l:"Écouter : ma journée",r:"Lire : la journée de Tom",t:"routine|present|routine|routine"},
{n:10,p:2,v:"Les jours, les mois, les saisons",g:"Le présent simple : he plays, she watches (-s)",l:"Écouter : la semaine de Lily",r:"Lire : un agenda",t:"calendar|third|calendar|calendar"},
{n:11,p:2,v:"Les loisirs",g:"can / can't",l:"Écouter : ce que je sais faire",r:"Lire : les talents de la classe",t:"hobbies|can|hobbies|hobbies"},
{n:12,p:2,v:"Les animaux de la ferme et de la maison",g:"Do you…? / Does he…? — don't / doesn't",l:"Écouter : les animaux",r:"Lire : à la ferme",t:"animals|dodoes|animals|animals"},
{n:13,p:2,v:"Christmas au Royaume-Uni",g:"Les dates : the 25th of December",l:"Écouter : Noël",r:"Lire : Noël en Angleterre",t:"xmas|dates|xmas|xmas"},
{n:14,p:2,v:"Révision de la période 2",g:"Révision : l'heure, le présent simple, can",l:"Révision : écouter",r:"Révision : lire",t:"rev2|grev2|rev2|rev2"},
{n:15,p:3,v:"La maison",g:"There is / There are",l:"Écouter : ma maison",r:"Lire : une annonce de maison",t:"house|thereis|house|house"},
{n:16,p:3,v:"Les meubles",g:"Les prépositions : next to, behind, between…",l:"Écouter : où est-il ?",r:"Lire : ma chambre",t:"furniture|prepositions|furniture|furniture"},
{n:17,p:3,v:"Les vêtements",g:"Le présent continu : I'm wearing…",l:"Écouter : qui porte quoi ?",r:"Lire : l'uniforme scolaire",t:"clothes|continuous|clothes|clothes"},
{n:18,p:3,v:"Les actions",g:"Le présent continu : What are you doing?",l:"Écouter : que fait-il ?",r:"Lire : en ce moment",t:"actions|continuous2|actions|actions"},
{n:19,p:3,v:"Le corps et la santé",g:"What's the matter? I've got a headache.",l:"Écouter : chez le médecin",r:"Lire : un enfant malade",t:"health|matter|health|health"},
{n:20,p:3,v:"La météo",g:"Les questions : What, Where, When, Who, How many",l:"Écouter : la météo",r:"Lire : le bulletin météo",t:"weather|wh|weather|weather"},
{n:21,p:3,v:"Révision de la période 3",g:"Révision : there is, le présent continu, les questions",l:"Révision : écouter",r:"Révision : lire",t:"rev3|grev3|rev3|rev3"},
{n:22,p:4,v:"La ville",g:"Les directions : turn left, go straight on",l:"Écouter : un itinéraire",r:"Lire : un plan de ville",t:"town|directions|town|town"},
{n:23,p:4,v:"Les magasins",g:"How much is it? It's £2.50.",l:"Écouter des prix",r:"Lire : au magasin",t:"shops|prices|shops|shops"},
{n:24,p:4,v:"La nourriture",g:"I'd like… / some / any",l:"Écouter : au café",r:"Lire : un menu",t:"food|wouldlike|food|food"},
{n:25,p:4,v:"Les animaux sauvages",g:"Décrire : It's big. It can swim. It eats fish.",l:"Écouter : devinettes",r:"Lire : fiches d'animaux",t:"wild|describe|wild|wild"},
{n:26,p:4,v:"Le Royaume-Uni et Londres",g:"Les majuscules : pays, nationalités, jours",l:"Écouter : visite de Londres",r:"Lire : découvrir le Royaume-Uni",t:"uk|capitals|uk|uk"},
{n:27,p:4,v:"Les fêtes britanniques",g:"in, on, at : in May, on Monday, at 3 o'clock",l:"Écouter : les fêtes",r:"Lire : le calendrier des fêtes",t:"festivals|inonat|festivals|festivals"},
{n:28,p:4,v:"Révision de la période 4",g:"Révision : directions, prix, I'd like, in / on / at",l:"Révision : écouter",r:"Révision : lire",t:"rev4|grev4|rev4|rev4"},
{n:29,p:5,v:"Les métiers",g:"What does she do? She's a doctor.",l:"Écouter : les métiers",r:"Lire : qui suis-je ?",t:"jobs|jobsg|jobs|jobs"},
{n:30,p:5,v:"Les transports et les voyages",g:"How do you go to school? By bus.",l:"Écouter : en voyage",r:"Lire : un voyage à Londres",t:"transport|howgo|transport|transport"},
{n:31,p:5,v:"Hier et autrefois",g:"Le passé de be : I was, you were",l:"Écouter : hier",r:"Lire : il y a longtemps",t:"past|was|past|past"},
{n:32,p:5,v:"Les émotions",g:"was / were : négation et questions",l:"Écouter : comment étais-tu ?",r:"Lire : un journal intime",t:"feelings|was2|feelings|feelings"},
{n:33,p:5,v:"La nature et l'environnement",g:"Les consignes : Don't drop litter!",l:"Écouter : protéger la planète",r:"Lire : les règles du parc",t:"nature|orders|nature|nature"},
{n:34,p:5,v:"Les vacances",g:"Présent simple ou présent continu ?",l:"Écouter : en vacances",r:"Lire : une carte postale",t:"holidays|tenses|holidays|holidays"},
{n:35,p:5,v:"Révision générale (1)",g:"Révision : les temps et les questions",l:"Révision : écouter",r:"Révision : lire",t:"rev5|grev5|rev5|rev5"},
{n:36,p:5,v:"Révision générale (2) et défis",g:"Révision : toute la grammaire de l'année",l:"Révision : écouter",r:"Révision : lire",t:"rev6|grev6|rev6|rev6"}
];
SEMAINES.forEach(s=>{const t=s.t.split("|");s.tv=t[0];s.tg=t[1];s.tl=t[2];s.tr=t[3];});

const JOURS=[
 {nom:"Lundi",mat:"v",min:10},
 {nom:"Mardi",mat:"g",min:10},
 {nom:"Mercredi",mat:"l",min:10},
 {nom:"Jeudi",mat:"v",min:10},
 {nom:"Vendredi",mat:"r",min:10},
 {nom:"Week-end",mat:"rev",min:10}
];
const NOM_MAT={v:"Vocabulaire",g:"Grammaire",l:"Écoute (listening)",r:"Lecture (reading)",rev:"Révision de la semaine"};
const PERIODES=["Période 1 — septembre à octobre","Période 2 — novembre à décembre","Période 3 — janvier à février","Période 4 — mars à avril","Période 5 — mai à juillet"];
function matiereDuJour(sem,jour){return JOURS[jour].mat;}

/* =========================================================
   2. OUTILS
   ========================================================= */
const alea=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const pioche=t=>t[Math.floor(Math.random()*t.length)];
function melange(t){const c=t.slice();for(let i=c.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[c[i],c[j]]=[c[j],c[i]];}return c;}
function qcm(enonce,bonne,fausses,expl){
  const vus=new Set([String(bonne)]),gardees=[];
  for(const x of fausses){const c=String(x);if(!vus.has(c)&&gardees.length<3){vus.add(c);gardees.push(x);}}
  const choix=melange([bonne,...gardees]);
  return {type:"qcm",enonce,choix,reponse:choix.indexOf(bonne),explication:expl};
}
function saisie(enonce,reponses,expl){return {type:"saisie",enonce,reponse:reponses,explication:expl};}
/* Une question à écouter : la tablette lit « audio » (en anglais) ; l'énoncé ne le contient jamais. */
function ecoute(audio,enonce,bonne,fausses,expl){const q=qcm(enonce,bonne,fausses,expl);q.audio=audio;return q;}
function ecouteSaisie(audio,enonce,reponses,expl){const q=saisie(enonce,reponses,expl);q.audio=audio;return q;}
const fx=(q,b,f,e)=>()=>qcm(q,b,f,e);
const cap=s=>s[0].toUpperCase()+s.slice(1);
const art=w=>/^[aeiou]/i.test(w)?"an":"a";
const sansArticle=w=>w.replace(/^(a|an|the) /,"");
const PRENOMS=["Tom","Emma","Lucas","Chloé","Oliver","Léa","Amelia","Hugo","Jack","Manon","Harry","Inès","Lily","Jules","Noah","Camille","Sophie","Théo","Grace","Louis","Mia","Nathan","Ella","Arthur","Leo","Max"];
const GARCONS=["Tom","Lucas","Oliver","Hugo","Jack","Harry","Jules","Noah","Théo","Louis","Nathan","Arthur","Leo","Max"];
const FILLES=["Emma","Chloé","Léa","Amelia","Manon","Inès","Lily","Camille","Sophie","Grace","Mia","Ella"];

/* Les nombres en lettres (anglais britannique), jusqu'à 100 */
const UNITES_EN=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
const DIZAINES_EN=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
function enL(n){
  if(n===100)return "a hundred";
  if(n<20)return UNITES_EN[n];
  return DIZAINES_EN[Math.floor(n/10)]+(n%10?"-"+UNITES_EN[n%10]:"");
}
const variantesNombre=n=>n===100?["100","a hundred","one hundred"]:[String(n),enL(n),enL(n).replace("-"," ")];

/* =========================================================
   3. LES MOTS (thème, anglais, français, image)
   ========================================================= */
const MOTS=[
 ["intro","a first name","un prénom"],["intro","a surname","un nom de famille"],["intro","a boy","un garçon","👦"],["intro","a girl","une fille (jeune fille)","👧"],
 ["intro","a friend","un ami, une amie"],["intro","a classmate","un camarade de classe"],["intro","to live","habiter"],["intro","an address","une adresse"],
 ["intro","nice to meet you","enchanté(e)"],["intro","Mr","Monsieur"],["intro","Mrs","Madame"],["intro","old","âgé (vieux)"],["intro","young","jeune"],
 ["num100","twenty","vingt (20)"],["num100","thirty","trente (30)"],["num100","forty","quarante (40)"],["num100","fifty","cinquante (50)"],["num100","sixty","soixante (60)"],
 ["num100","seventy","soixante-dix (70)"],["num100","eighty","quatre-vingts (80)"],["num100","ninety","quatre-vingt-dix (90)"],["num100","a hundred","cent (100)"],
 ["num100","a number","un nombre"],["num100","a phone number","un numéro de téléphone"],["num100","plus","plus (+)"],["num100","minus","moins (−)"],["num100","equals","égale (=)"],
 ["family","a mother","une mère"],["family","a father","un père"],["family","parents","les parents"],["family","a son","un fils"],["family","a daughter","une fille (l'enfant de)"],
 ["family","a grandmother","une grand-mère"],["family","a grandfather","un grand-père"],["family","grandparents","les grands-parents"],["family","an aunt","une tante"],
 ["family","an uncle","un oncle"],["family","a cousin","un cousin, une cousine"],["family","a husband","un mari"],["family","a wife","une épouse"],["family","twins","des jumeaux"],
 ["countries","France","la France"],["countries","England","l'Angleterre"],["countries","Scotland","l'Écosse"],["countries","Wales","le pays de Galles"],
 ["countries","Ireland","l'Irlande"],["countries","the United Kingdom","le Royaume-Uni"],["countries","Spain","l'Espagne"],["countries","Germany","l'Allemagne"],
 ["countries","Italy","l'Italie"],["countries","the USA","les États-Unis"],["countries","China","la Chine"],["countries","French","français(e)"],["countries","English","anglais(e)"],
 ["countries","Spanish","espagnol(e)"],["countries","German","allemand(e)"],["countries","Italian","italien(ne)"],["countries","American","américain(e)"],
 ["school","maths","les mathématiques"],["school","science","les sciences"],["school","history","l'histoire"],["school","geography","la géographie"],["school","art","les arts plastiques"],
 ["school","music","la musique"],["school","PE","l'EPS (le sport)"],["school","a timetable","un emploi du temps"],["school","break time","la récréation"],["school","a lesson","un cours"],
 ["school","homework","les devoirs"],["school","a playground","une cour de récréation"],["school","the canteen","la cantine"],["school","a pupil","un élève"],
 ["halloween","a witch","une sorcière","🧙"],["halloween","a ghost","un fantôme","👻"],["halloween","a pumpkin","une citrouille","🎃"],["halloween","a bat","une chauve-souris","🦇"],
 ["halloween","a spider","une araignée","🕷️"],["halloween","a skeleton","un squelette","💀"],["halloween","a broomstick","un balai de sorcière"],["halloween","a cauldron","un chaudron"],
 ["halloween","a costume","un déguisement"],["halloween","a haunted house","une maison hantée"],["halloween","scary","qui fait peur"],["halloween","a black cat","un chat noir","🐈‍⬛"],
 ["time","o'clock","heure pile"],["time","half past","et demie"],["time","quarter past","et quart"],["time","quarter to","moins le quart"],["time","a clock","une horloge"],
 ["time","a watch","une montre","⌚"],["time","an hour","une heure (durée)"],["time","a minute","une minute"],["time","midday","midi"],["time","midnight","minuit"],
 ["time","early","tôt"],["time","late","en retard, tard"],
 ["routine","get up","se lever"],["routine","wake up","se réveiller"],["routine","have a shower","prendre une douche","🚿"],["routine","get dressed","s'habiller"],
 ["routine","have breakfast","prendre le petit-déjeuner"],["routine","brush my teeth","me brosser les dents","🪥"],["routine","go to school","aller à l'école"],
 ["routine","have lunch","déjeuner"],["routine","do my homework","faire mes devoirs"],["routine","watch TV","regarder la télé","📺"],["routine","have dinner","dîner"],["routine","go to bed","aller me coucher","🛏️"],
 ["calendar","today","aujourd'hui"],["calendar","tomorrow","demain"],["calendar","yesterday","hier"],["calendar","a week","une semaine"],["calendar","a month","un mois"],
 ["calendar","a year","une année"],["calendar","a season","une saison"],["calendar","spring","le printemps","🌸"],["calendar","summer","l'été"],["calendar","autumn","l'automne","🍂"],
 ["calendar","winter","l'hiver"],["calendar","the weekend","le week-end"],["calendar","a birthday","un anniversaire","🎂"],["calendar","every day","tous les jours"],
 ["hobbies","swim","nager","🏊"],["hobbies","ride a bike","faire du vélo","🚴"],["hobbies","play the piano","jouer du piano","🎹"],["hobbies","play the guitar","jouer de la guitare","🎸"],
 ["hobbies","sing","chanter","🎤"],["hobbies","dance","danser","💃"],["hobbies","draw","dessiner","✏️"],["hobbies","read","lire","📚"],["hobbies","cook","cuisiner","🍳"],
 ["hobbies","skate","faire du skate","🛹"],["hobbies","climb","grimper","🧗"],["hobbies","run","courir","🏃"],["hobbies","play chess","jouer aux échecs","♟️"],
 ["animals","a cow","une vache","🐄"],["animals","a horse","un cheval","🐴"],["animals","a sheep","un mouton","🐑"],["animals","a goat","une chèvre","🐐"],["animals","a pig","un cochon","🐷"],
 ["animals","a duck","un canard","🦆"],["animals","a goose","une oie"],["animals","a hen","une poule","🐔"],["animals","a rabbit","un lapin","🐰"],["animals","a mouse","une souris","🐭"],
 ["animals","a donkey","un âne"],["animals","a tortoise","une tortue","🐢"],["animals","a parrot","un perroquet","🦜"],["animals","a puppy","un chiot"],["animals","a kitten","un chaton"],
 ["xmas","Christmas Eve","la veille de Noël"],["xmas","Christmas Day","le jour de Noël"],["xmas","Boxing Day","le lendemain de Noël (26 décembre)"],["xmas","a Christmas card","une carte de Noël"],
 ["xmas","a cracker","une papillote surprise (cracker)"],["xmas","a turkey","une dinde"],["xmas","Christmas pudding","le pudding de Noël"],["xmas","a mince pie","une petite tarte de Noël"],
 ["xmas","a stocking","une chaussette de Noël"],["xmas","a reindeer","un renne","🦌"],["xmas","Father Christmas","le Père Noël","🎅"],["xmas","a present","un cadeau","🎁"],
 ["xmas","decorations","les décorations"],["xmas","mistletoe","le gui"],
 ["house","a kitchen","une cuisine"],["house","a bathroom","une salle de bains"],["house","a bedroom","une chambre"],["house","a living room","un salon"],["house","a dining room","une salle à manger"],
 ["house","an attic","un grenier"],["house","a garden","un jardin"],["house","a garage","un garage"],["house","the stairs","l'escalier"],["house","upstairs","à l'étage"],
 ["house","downstairs","en bas (au rez-de-chaussée)"],["house","a flat","un appartement"],["house","a roof","un toit"],["house","a wall","un mur"],["house","a window","une fenêtre"],
 ["furniture","a bed","un lit","🛏️"],["furniture","a wardrobe","une armoire"],["furniture","a desk","un bureau"],["furniture","a shelf","une étagère"],["furniture","a sofa","un canapé","🛋️"],
 ["furniture","an armchair","un fauteuil"],["furniture","a lamp","une lampe"],["furniture","a cupboard","un placard"],["furniture","a fridge","un réfrigérateur"],["furniture","a cooker","une cuisinière (four)"],
 ["furniture","a mirror","un miroir","🪞"],["furniture","a carpet","un tapis"],["furniture","a picture","un tableau, une image","🖼️"],["furniture","curtains","des rideaux"],
 ["clothes","a T-shirt","un tee-shirt","👕"],["clothes","a jumper","un pull"],["clothes","trousers","un pantalon","👖"],["clothes","jeans","un jean"],["clothes","shorts","un short","🩳"],
 ["clothes","a skirt","une jupe"],["clothes","a dress","une robe","👗"],["clothes","a shirt","une chemise"],["clothes","a coat","un manteau","🧥"],["clothes","a jacket","une veste"],
 ["clothes","shoes","des chaussures","👞"],["clothes","trainers","des baskets","👟"],["clothes","socks","des chaussettes","🧦"],["clothes","a uniform","un uniforme"],
 ["clothes","pyjamas","un pyjama"],["clothes","a tie","une cravate","👔"],
 ["actions","eat","manger"],["actions","drink","boire"],["actions","sleep","dormir","😴"],["actions","write","écrire"],["actions","talk","parler"],["actions","listen","écouter"],
 ["actions","look","regarder"],["actions","walk","marcher","🚶"],["actions","wash","laver"],["actions","open","ouvrir"],["actions","close","fermer"],["actions","laugh","rire","😂"],
 ["actions","cry","pleurer","😭"],["actions","wait","attendre"],["actions","play","jouer"],
 ["health","a headache","mal à la tête"],["health","a stomach ache","mal au ventre"],["health","a toothache","mal aux dents"],["health","a sore throat","mal à la gorge"],
 ["health","a cold","un rhume"],["health","a cough","une toux"],["health","a temperature","de la fièvre","🤒"],["health","medicine","un médicament","💊"],
 ["health","a back","un dos"],["health","a shoulder","une épaule"],["health","a knee","un genou"],["health","a neck","un cou"],["health","an ear","une oreille","👂"],
 ["health","a tooth","une dent","🦷"],["health","ill","malade"],
 ["weather","sunny","ensoleillé","☀️"],["weather","rainy","pluvieux","🌧️"],["weather","windy","venteux (il y a du vent)","💨"],["weather","cloudy","nuageux","☁️"],
 ["weather","foggy","brumeux (il y a du brouillard)","🌫️"],["weather","stormy","orageux","⛈️"],["weather","snowy","neigeux","🌨️"],["weather","the rain","la pluie"],
 ["weather","the wind","le vent"],["weather","a cloud","un nuage"],["weather","warm","doux, tiède"],["weather","hot","chaud"],["weather","cold","froid"],
 ["weather","an umbrella","un parapluie","☂️"],["weather","a rainbow","un arc-en-ciel","🌈"],
 ["town","a bank","une banque","🏦"],["town","a library","une bibliothèque"],["town","a post office","une poste"],["town","a station","une gare","🚉"],["town","a hospital","un hôpital","🏥"],
 ["town","a museum","un musée"],["town","a park","un parc"],["town","a church","une église","⛪"],["town","a cinema","un cinéma","🎬"],["town","a supermarket","un supermarché"],
 ["town","a swimming pool","une piscine"],["town","a street","une rue"],["town","a bridge","un pont","🌉"],["town","a castle","un château","🏰"],
 ["shops","a baker's","une boulangerie","🥖"],["shops","a butcher's","une boucherie"],["shops","a bookshop","une librairie"],["shops","a toy shop","un magasin de jouets"],
 ["shops","a sweet shop","une confiserie","🍬"],["shops","a shop","un magasin"],["shops","a market","un marché"],["shops","money","l'argent","💰"],["shops","a pound","une livre (£)"],
 ["shops","a price","un prix"],["shops","cheap","bon marché, pas cher"],["shops","expensive","cher"],["shops","buy","acheter"],["shops","a customer","un client, une cliente"],
 ["shops","a shop assistant","un vendeur, une vendeuse"],
 ["food","a sandwich","un sandwich","🥪"],["food","sausages","des saucisses"],["food","beans","des haricots"],["food","chicken","du poulet","🍗"],["food","fish","du poisson"],
 ["food","vegetables","des légumes","🥦"],["food","fruit","des fruits"],["food","rice","du riz","🍚"],["food","pasta","des pâtes","🍝"],["food","soup","de la soupe"],
 ["food","salad","de la salade","🥗"],["food","crisps","des chips"],["food","chips","des frites","🍟"],["food","biscuits","des biscuits","🍪"],["food","cheese","du fromage","🧀"],["food","an egg","un œuf","🥚"],
 ["wild","a lion","un lion","🦁"],["wild","a tiger","un tigre","🐯"],["wild","an elephant","un éléphant","🐘"],["wild","a giraffe","une girafe","🦒"],["wild","a monkey","un singe","🐒"],
 ["wild","a kangaroo","un kangourou","🦘"],["wild","a dolphin","un dauphin","🐬"],["wild","a whale","une baleine","🐋"],["wild","a shark","un requin","🦈"],
 ["wild","a penguin","un manchot (pingouin)","🐧"],["wild","an owl","une chouette, un hibou","🦉"],["wild","a fox","un renard","🦊"],["wild","a wolf","un loup","🐺"],
 ["wild","a squirrel","un écureuil","🐿️"],["wild","a bear","un ours","🐻"],
 ["uk","London","Londres"],["uk","the Thames","la Tamise"],["uk","the King","le roi","🤴"],["uk","a flag","un drapeau"],["uk","a capital city","une capitale"],
 ["uk","a double-decker","un bus à impériale (deux étages)"],["uk","a palace","un palais"],["uk","a tower","une tour"],["uk","a phone box","une cabine téléphonique"],
 ["uk","Edinburgh","Édimbourg"],["uk","an island","une île","🏝️"],["uk","tea","le thé","🍵"],["uk","the Underground","le métro de Londres"],
 ["festivals","Easter","Pâques"],["festivals","Pancake Day","Mardi gras (le jour des crêpes)"],["festivals","Bonfire Night","la nuit des feux de joie (5 novembre)"],
 ["festivals","fireworks","un feu d'artifice","🎆"],["festivals","a bonfire","un feu de joie","🔥"],["festivals","Valentine's Day","la Saint-Valentin"],["festivals","Mother's Day","la fête des Mères"],
 ["festivals","a pancake","une crêpe","🥞"],["festivals","an Easter egg","un œuf de Pâques"],["festivals","a party","une fête (entre amis)","🎉"],["festivals","a parade","un défilé"],
 ["festivals","New Year's Eve","le réveillon du Nouvel An"],
 ["jobs","a teacher","un professeur","🧑‍🏫"],["jobs","a doctor","un médecin","🧑‍⚕️"],["jobs","a nurse","un infirmier, une infirmière"],["jobs","a farmer","un fermier, une fermière","🧑‍🌾"],
 ["jobs","a vet","un vétérinaire"],["jobs","a police officer","un policier, une policière","👮"],["jobs","a firefighter","un pompier","🧑‍🚒"],["jobs","a cook","un cuisinier, une cuisinière","🧑‍🍳"],
 ["jobs","a baker","un boulanger, une boulangère"],["jobs","a pilot","un pilote","🧑‍✈️"],["jobs","a postman","un facteur"],["jobs","a dentist","un dentiste"],
 ["jobs","a singer","un chanteur, une chanteuse","🧑‍🎤"],["jobs","an artist","un artiste","🧑‍🎨"],["jobs","a builder","un maçon"],
 ["transport","a bus","un bus","🚌"],["transport","a car","une voiture","🚗"],["transport","a bike","un vélo","🚲"],["transport","a train","un train","🚆"],["transport","a plane","un avion","✈️"],
 ["transport","a boat","un bateau","⛵"],["transport","a motorbike","une moto","🏍️"],["transport","a lorry","un camion","🚚"],["transport","on foot","à pied"],["transport","a ticket","un billet","🎫"],
 ["transport","a journey","un trajet"],["transport","a map","une carte (géographique)","🗺️"],["transport","a passport","un passeport"],["transport","a suitcase","une valise","🧳"],
 ["past","yesterday","hier"],["past","last week","la semaine dernière"],["past","last night","hier soir"],["past","last year","l'année dernière"],["past","ago","il y a (two days ago)"],
 ["past","a long time ago","il y a longtemps"],["past","in the past","autrefois"],["past","before","avant"],["past","after","après"],["past","the day before yesterday","avant-hier"],
 ["past","I was","j'étais"],["past","we were","nous étions"],
 ["feelings","happy","content(e)","😊"],["feelings","sad","triste","😢"],["feelings","angry","en colère","😠"],["feelings","tired","fatigué(e)","🥱"],["feelings","scared","effrayé(e)","😨"],
 ["feelings","bored","qui s'ennuie"],["feelings","excited","tout excité(e)","🤩"],["feelings","nervous","nerveux, nerveuse"],["feelings","surprised","surpris(e)","😮"],
 ["feelings","proud","fier, fière"],["feelings","worried","inquiet, inquiète","😟"],["feelings","shy","timide"],["feelings","hungry","affamé(e)"],["feelings","thirsty","assoiffé(e)"],
 ["nature","a tree","un arbre","🌳"],["nature","a flower","une fleur","🌻"],["nature","a river","une rivière"],["nature","a mountain","une montagne","⛰️"],["nature","a forest","une forêt","🌲"],
 ["nature","a lake","un lac"],["nature","the sea","la mer","🌊"],["nature","a field","un champ"],["nature","a hill","une colline"],["nature","the sky","le ciel"],
 ["nature","rubbish","les déchets"],["nature","recycling","le recyclage","♻️"],["nature","a bin","une poubelle"],["nature","a plant","une plante","🪴"],["nature","the planet","la planète","🌍"],
 ["holidays","the holidays","les vacances"],["holidays","a tent","une tente","⛺"],["holidays","a campsite","un camping"],["holidays","a hotel","un hôtel","🏨"],
 ["holidays","a postcard","une carte postale"],["holidays","a camera","un appareil photo","📷"],["holidays","sunglasses","des lunettes de soleil","🕶️"],
 ["holidays","a swimsuit","un maillot de bain","🩱"],["holidays","sun cream","de la crème solaire"],["holidays","the seaside","le bord de mer"],["holidays","a souvenir","un souvenir (objet)"],
 ["holidays","visit","visiter"],["holidays","travel","voyager"],["holidays","the beach","la plage","🏖️"]
].map(([t,en,fr,e])=>({t,en,fr,e}));
/* Mots trop proches : jamais proposés comme mauvais choix l'un pour l'autre */
const SYN=[["a girl","a daughter"],["a friend","a classmate"],["get up","wake up"],["shoes","trainers"],["a coat","a jacket"],["a shirt","a T-shirt"],
 ["trousers","jeans"],["an hour","o'clock"],["a desk","a cupboard"],["a kitchen","a cooker"],["a bedroom","a bed"],["England","the United Kingdom","English"],
 ["the USA","American"],["France","French"],["Spain","Spanish"],["Germany","German"],["Italy","Italian"],["London","a capital city"],["a picture","an artist"],
 ["a teacher","a pupil","a lesson"],["a cook","cook"],["a baker","a baker's"],["a doctor","a nurse","medicine"],["a headache","ill"],["a cold","cold"],["a temperature","hot"],
 ["the rain","rainy","an umbrella"],["the wind","windy"],["a cloud","cloudy"],["a shop","a toy shop"],["a shop","a sweet shop"],["a shop","a bookshop"],["a shop","a supermarket"],["a shop","a market"],
 ["a bookshop","a library"],["money","a pound"],["Christmas Day","Christmas Eve","Boxing Day"],["a pumpkin","scary"],["a bonfire","Bonfire Night","fireworks"],
 ["a pancake","Pancake Day"],["a party","a parade"],["yesterday","the day before yesterday","last night"],["before","ago","a long time ago","in the past"],["I was","we were"],
 ["sad","bored"],["scared","worried","nervous"],["happy","excited"],["hungry","thirsty"],["the sea","the seaside","the beach"],["a sheep","a goat"],["a puppy","a kitten"],
 ["read","a library"],["the holidays","travel","visit"],["sunny","warm","hot"],["a tower","a castle"],["a river","the Thames"],["a station","a train"],["a mother","Mother's Day"],
 ["eat","have lunch","have dinner","have breakfast"],["look","watch TV"],["play","play chess"],["talk","sing"],["a field","a farmer"],["fruit","vegetables","salad"],["crisps","chips"],
 ["a flat","a house"],["a wall","a roof"]];
function conflit(a,b){return a.en===b.en||a.fr===b.fr||SYN.some(g=>g.includes(a.en)&&g.includes(b.en));}
const motsDe=t=>{const l=MOTS.filter(m=>m.t===t);return l.length?l:MOTS;};
function autres(m,champ){
  const meme=melange(MOTS.filter(x=>x.t===m.t&&!conflit(x,m)));
  const loin=melange(MOTS.filter(x=>x.t!==m.t&&!conflit(x,m)));
  return [...meme,...loin].slice(0,3).map(x=>x[champ]);
}

/* =========================================================
   4. LES PHRASES (écoute et lecture)
   ========================================================= */
const PH=[
 ["intro","My name is Amelia and I'm ten.","Je m'appelle Amelia et j'ai dix ans."],["intro","I live in Paris with my family.","J'habite à Paris avec ma famille."],
 ["intro","Nice to meet you!","Enchanté de te rencontrer !"],["intro","She is my best friend.","C'est ma meilleure amie."],["intro","How do you spell your surname?","Comment épelles-tu ton nom de famille ?"],
 ["intro","He is nine years old.","Il a neuf ans."],["intro","Are you in my class?","Es-tu dans ma classe ?"],
 ["num100","My phone number is 06 12 34 56 78.","Mon numéro de téléphone est le 06 12 34 56 78."],["num100","There are thirty pupils in my class.","Il y a trente élèves dans ma classe."],
 ["num100","My grandmother is seventy-two.","Ma grand-mère a soixante-douze ans."],["num100","Forty plus twenty equals sixty.","Quarante plus vingt égale soixante."],
 ["num100","Open your books at page eighty-five.","Ouvrez vos livres à la page quatre-vingt-cinq."],["num100","A hundred minus ten is ninety.","Cent moins dix font quatre-vingt-dix."],
 ["family","This is my father and his name is Paul.","Voici mon père, il s'appelle Paul."],["family","My parents have got two daughters.","Mes parents ont deux filles."],
 ["family","Her brother is very tall.","Son frère (à elle) est très grand."],["family","Their grandparents live in Scotland.","Leurs grands-parents habitent en Écosse."],
 ["family","I haven't got any cousins.","Je n'ai pas de cousins."],["family","Our aunt has got a baby.","Notre tante a un bébé."],
 ["countries","Where are you from?","D'où viens-tu ?"],["countries","I'm from France. I'm French.","Je viens de France. Je suis français."],
 ["countries","She's from Spain. She speaks Spanish.","Elle vient d'Espagne. Elle parle espagnol."],["countries","Edinburgh is in Scotland.","Édimbourg est en Écosse."],
 ["countries","Is he American?","Est-il américain ?"],["countries","They're from Italy.","Ils viennent d'Italie."],
 ["school","My favourite subject is history.","Ma matière préférée est l'histoire."],["school","We have maths on Monday.","Nous avons maths le lundi."],
 ["school","I don't like science because it's difficult.","Je n'aime pas les sciences parce que c'est difficile."],["school","Break time is at half past ten.","La récréation est à dix heures et demie."],
 ["school","English pupils wear a uniform.","Les élèves anglais portent un uniforme."],["school","I have lunch at the canteen.","Je déjeune à la cantine."],
 ["halloween","The witch has got a black cat.","La sorcière a un chat noir."],["halloween","There are three ghosts in the haunted house.","Il y a trois fantômes dans la maison hantée."],
 ["halloween","What's your costume?","Quel est ton déguisement ?"],["halloween","The pumpkin is very scary!","La citrouille fait très peur !"],
 ["halloween","The children are knocking on the door.","Les enfants frappent à la porte."],["halloween","The witch is flying on her broomstick.","La sorcière vole sur son balai."],
 ["time","What time is it?","Quelle heure est-il ?"],["time","It's half past seven.","Il est sept heures et demie."],["time","School starts at nine o'clock.","L'école commence à neuf heures."],
 ["time","It's quarter to four.","Il est quatre heures moins le quart."],["time","Hurry up, we're late!","Dépêche-toi, nous sommes en retard !"],["time","I get up early.","Je me lève tôt."],
 ["routine","I get up at seven o'clock.","Je me lève à sept heures."],["routine","I brush my teeth after breakfast.","Je me brosse les dents après le petit-déjeuner."],
 ["routine","We go to school by bus.","Nous allons à l'école en bus."],["routine","I do my homework after school.","Je fais mes devoirs après l'école."],
 ["routine","They watch TV in the evening.","Ils regardent la télé le soir."],["routine","I go to bed at nine.","Je vais me coucher à neuf heures."],
 ["calendar","My birthday is in spring.","Mon anniversaire est au printemps."],["calendar","See you tomorrow!","À demain !"],["calendar","There are twelve months in a year.","Il y a douze mois dans une année."],
 ["calendar","He plays tennis every Saturday.","Il joue au tennis tous les samedis."],["calendar","She watches a film on Sunday.","Elle regarde un film le dimanche."],
 ["calendar","It's very cold in winter.","Il fait très froid en hiver."],
 ["hobbies","I can swim but I can't skate.","Je sais nager mais je ne sais pas faire de skate."],["hobbies","Can you play the guitar?","Sais-tu jouer de la guitare ?"],
 ["hobbies","My sister can sing very well.","Ma sœur sait très bien chanter."],["hobbies","I like reading comics.","J'aime lire des BD."],
 ["hobbies","We play chess on Wednesday.","Nous jouons aux échecs le mercredi."],["hobbies","He can't ride a bike.","Il ne sait pas faire de vélo."],
 ["animals","Do you like horses?","Aimes-tu les chevaux ?"],["animals","My cousin doesn't like mice.","Mon cousin n'aime pas les souris."],
 ["animals","The farmer has got fifty sheep.","Le fermier a cinquante moutons."],["animals","Does your dog sleep in the garden?","Est-ce que ton chien dort dans le jardin ?"],
 ["animals","The kitten is drinking milk.","Le chaton boit du lait."],["animals","Ducks and geese can swim.","Les canards et les oies savent nager."],
 ["xmas","We open our presents on Christmas Day.","Nous ouvrons nos cadeaux le jour de Noël."],["xmas","We eat turkey and Christmas pudding.","Nous mangeons de la dinde et du pudding de Noël."],
 ["xmas","Father Christmas comes on Christmas Eve.","Le Père Noël vient la veille de Noël."],["xmas","Let's pull a cracker!","Tirons une papillote surprise !"],
 ["xmas","Boxing Day is on the 26th of December.","Boxing Day, c'est le 26 décembre."],["xmas","I'm writing Christmas cards.","J'écris des cartes de Noël."],
 ["house","There is a big garden behind the house.","Il y a un grand jardin derrière la maison."],["house","There are three bedrooms upstairs.","Il y a trois chambres à l'étage."],
 ["house","Is there a garage?","Est-ce qu'il y a un garage ?"],["house","We live in a flat.","Nous habitons dans un appartement."],
 ["house","The kitchen is downstairs.","La cuisine est en bas."],["house","There isn't an attic.","Il n'y a pas de grenier."],
 ["furniture","The lamp is next to the bed.","La lampe est à côté du lit."],["furniture","My shoes are under the wardrobe.","Mes chaussures sont sous l'armoire."],
 ["furniture","The cat is behind the sofa.","Le chat est derrière le canapé."],["furniture","The desk is between the bed and the window.","Le bureau est entre le lit et la fenêtre."],
 ["furniture","There's a mirror on the wall.","Il y a un miroir sur le mur."],["furniture","The milk is in the fridge.","Le lait est dans le réfrigérateur."],
 ["clothes","I'm wearing jeans and a red jumper.","Je porte un jean et un pull rouge."],["clothes","She's wearing a blue dress.","Elle porte une robe bleue."],
 ["clothes","Put on your coat, it's cold!","Mets ton manteau, il fait froid !"],["clothes","My school uniform is grey and green.","Mon uniforme scolaire est gris et vert."],
 ["clothes","These trainers are too small.","Ces baskets sont trop petites."],["clothes","He isn't wearing a tie.","Il ne porte pas de cravate."],
 ["actions","What are you doing?","Qu'est-ce que tu fais ?"],["actions","I'm reading a book.","Je suis en train de lire un livre."],
 ["actions","The baby is sleeping.","Le bébé est en train de dormir."],["actions","They're playing in the park.","Ils sont en train de jouer au parc."],
 ["actions","Is she listening to music?","Est-elle en train d'écouter de la musique ?"],["actions","We aren't watching TV.","Nous ne sommes pas en train de regarder la télé."],
 ["health","What's the matter?","Qu'est-ce qui ne va pas ?"],["health","I've got a headache.","J'ai mal à la tête."],["health","She's got a cold.","Elle a un rhume."],
 ["health","Go to bed and drink some water.","Va te coucher et bois de l'eau."],["health","My knee hurts.","J'ai mal au genou."],["health","He's got a temperature.","Il a de la fièvre."],
 ["weather","What's the weather like today?","Quel temps fait-il aujourd'hui ?"],["weather","It's sunny and warm.","Il fait beau et doux."],
 ["weather","Take your umbrella, it's raining.","Prends ton parapluie, il pleut."],["weather","It's foggy this morning.","Il y a du brouillard ce matin."],
 ["weather","When does it snow?","Quand est-ce qu'il neige ?"],["weather","There's a storm tonight.","Il y a un orage ce soir."],
 ["town","Where is the station?","Où est la gare ?"],["town","Turn left at the church.","Tourne à gauche à l'église."],["town","Go straight on.","Va tout droit."],
 ["town","The library is next to the park.","La bibliothèque est à côté du parc."],["town","The museum is on your right.","Le musée est sur ta droite."],
 ["town","Is there a cinema near here?","Est-ce qu'il y a un cinéma près d'ici ?"],
 ["shops","How much is this book?","Combien coûte ce livre ?"],["shops","It's three pounds fifty.","Ça coûte trois livres cinquante."],["shops","That's too expensive!","C'est trop cher !"],
 ["shops","Can I help you?","Je peux vous aider ?"],["shops","I'm looking for a present.","Je cherche un cadeau."],["shops","We buy bread at the baker's.","Nous achetons du pain à la boulangerie."],
 ["food","I'd like a cheese sandwich, please.","Je voudrais un sandwich au fromage, s'il vous plaît."],["food","Is there any milk?","Est-ce qu'il y a du lait ?"],
 ["food","There aren't any eggs.","Il n'y a pas d'œufs."],["food","Would you like some soup?","Voudrais-tu de la soupe ?"],
 ["food","Fish and chips is a British dish.","Le fish and chips est un plat britannique."],["food","I'm hungry, let's have lunch!","J'ai faim, allons déjeuner !"],
 ["wild","Kangaroos live in Australia.","Les kangourous vivent en Australie."],["wild","A dolphin can swim very fast.","Un dauphin sait nager très vite."],
 ["wild","Penguins can't fly.","Les manchots ne savent pas voler."],["wild","The owl sleeps in the day.","La chouette dort le jour."],
 ["wild","Monkeys eat bananas.","Les singes mangent des bananes."],["wild","The whale is the biggest animal.","La baleine est le plus grand animal."],
 ["uk","London is the capital of England.","Londres est la capitale de l'Angleterre."],["uk","The Thames is a river in London.","La Tamise est un fleuve de Londres."],
 ["uk","The King lives in Buckingham Palace.","Le roi habite au palais de Buckingham."],["uk","Let's take a double-decker!","Prenons un bus à impériale !"],
 ["uk","The United Kingdom has got four countries.","Le Royaume-Uni compte quatre pays."],["uk","British people like tea.","Les Britanniques aiment le thé."],
 ["festivals","Bonfire Night is on the 5th of November.","Bonfire Night, c'est le 5 novembre."],["festivals","We eat pancakes on Pancake Day.","Nous mangeons des crêpes le jour des crêpes."],
 ["festivals","Look at the fireworks!","Regarde le feu d'artifice !"],["festivals","Happy Mother's Day!","Bonne fête maman !"],
 ["festivals","The party is at four o'clock.","La fête est à quatre heures."],["festivals","Easter is in March or April.","Pâques tombe en mars ou en avril."],
 ["jobs","What does your mother do?","Que fait ta mère comme métier ?"],["jobs","She's a nurse.","Elle est infirmière."],["jobs","My uncle is a pilot.","Mon oncle est pilote."],
 ["jobs","He works in a hospital.","Il travaille dans un hôpital."],["jobs","I want to be a vet.","Je veux être vétérinaire."],["jobs","A firefighter is very brave.","Un pompier est très courageux."],
 ["transport","How do you go to school?","Comment vas-tu à l'école ?"],["transport","I walk to school.","Je vais à l'école à pied."],
 ["transport","We're going to London by train.","Nous allons à Londres en train."],["transport","Don't forget your passport!","N'oublie pas ton passeport !"],
 ["transport","A return ticket, please.","Un billet aller-retour, s'il vous plaît."],["transport","The journey is two hours long.","Le trajet dure deux heures."],
 ["past","I was at home yesterday.","J'étais à la maison hier."],["past","We were in London last week.","Nous étions à Londres la semaine dernière."],
 ["past","She was ill last night.","Elle était malade hier soir."],["past","There were no cars a long time ago.","Il n'y avait pas de voitures il y a longtemps."],
 ["past","My grandfather was a farmer.","Mon grand-père était fermier."],["past","It was sunny two days ago.","Il faisait beau il y a deux jours."],
 ["feelings","Why are you sad?","Pourquoi es-tu triste ?"],["feelings","I was very nervous before the test.","J'étais très nerveux avant le contrôle."],
 ["feelings","Were you scared?","Avais-tu peur ?"],["feelings","She's proud of her picture.","Elle est fière de son dessin."],
 ["feelings","We weren't bored at the museum.","Nous ne nous sommes pas ennuyés au musée."],["feelings","Don't worry!","Ne t'inquiète pas !"],
 ["nature","Don't drop litter!","Ne jette pas de déchets par terre !"],["nature","Put your rubbish in the bin.","Mets tes déchets à la poubelle."],
 ["nature","Turn off the light!","Éteins la lumière !"],["nature","There are lots of trees in the forest.","Il y a beaucoup d'arbres dans la forêt."],
 ["nature","We must protect the planet.","Nous devons protéger la planète."],["nature","The river goes to the sea.","La rivière va jusqu'à la mer."],
 ["holidays","We usually go to the seaside in summer.","D'habitude, nous allons au bord de la mer en été."],["holidays","Today we're visiting a castle.","Aujourd'hui, nous visitons un château."],
 ["holidays","I'm writing a postcard to my grandma.","J'écris une carte postale à ma mamie."],["holidays","Don't forget the sun cream!","N'oublie pas la crème solaire !"],
 ["holidays","We sleep in a tent.","Nous dormons sous une tente."],["holidays","Have a nice holiday!","Bonnes vacances !"]
].map(([t,en,fr])=>({t,en,fr}));
const phrasesDe=t=>PH.filter(p=>p.t===t);
function autresPhrases(p,champ){
  const meme=melange(PH.filter(x=>x.t===p.t&&x.en!==p.en&&x.fr!==p.fr));
  const loin=melange(PH.filter(x=>x.t!==p.t&&x.en!==p.en&&x.fr!==p.fr));
  return [...meme,...loin].slice(0,3).map(x=>x[champ]);
}

/* =========================================================
   5. LES TEXTES À LIRE
   ========================================================= */
const TX=[
 {t:"intro",x:"Hi! I'm Oliver. I'm eleven years old and I live in Leeds, in England. My best friend is Sam. He's ten.",q:[
  ["Où habite Oliver ?","à Leeds, en Angleterre",["à Londres","en Écosse","en France"],"« I live in Leeds, in England »."],
  ["Qui est Sam ?","le meilleur ami d'Oliver",["le frère d'Oliver","le père d'Oliver","le professeur"],"« My best friend is Sam »."],
  ["Quel âge a Sam ?","10 ans",["11 ans","12 ans","9 ans"],"« He's ten » : il a dix ans."]]},
 {t:"num100",x:"In my school, there are ninety-six pupils. There are twenty-four pupils in my class: thirteen girls and eleven boys.",q:[
  ["Combien d'élèves y a-t-il dans l'école ?","96",["69","86","906"],"« ninety-six » = 96."],
  ["Combien de filles y a-t-il dans la classe ?","13",["30","11","24"],"« thirteen girls » : treize filles."]]},
 {t:"family",x:"My name is Grace. My mother is a teacher and my father is a doctor. I've got a brother, Ben. His hobby is football. Our dog's name is Max.",q:[
  ["Quel est le métier de la mère de Grace ?","professeur",["médecin","infirmière","fermière"],"« My mother is a teacher »."],
  ["Quel est le loisir de Ben ?","le football",["le tennis","la musique","la danse"],"« His hobby is football » : son loisir est le football."],
  ["Qui est Max ?","le chien de la famille",["le père","le frère","le cousin"],"« Our dog's name is Max »."]]},
 {t:"countries",x:"Hello! I'm Carlos and I'm from Spain. My friend Hans is German: he's from Berlin. Our teacher, Mrs Brown, is from Scotland.",q:[
  ["D'où vient Carlos ?","d'Espagne",["d'Allemagne","d'Écosse","d'Italie"],"« I'm from Spain »."],
  ["Quelle est la nationalité de Hans ?","allemand",["espagnol","écossais","anglais"],"« Hans is German » : Hans est allemand."],
  ["D'où vient Mrs Brown ?","d'Écosse",["d'Angleterre","d'Irlande","du pays de Galles"],"« Mrs Brown is from Scotland »."]]},
 {t:"school",x:"In England, school starts at nine o'clock. Pupils wear a uniform. They have lunch at school and they go home at half past three.",q:[
  ["À quelle heure commence l'école en Angleterre ?","à 9 h",["à 8 h 30","à 10 h","à 9 h 30"],"« at nine o'clock » : à neuf heures."],
  ["Que portent les élèves ?","un uniforme",["un déguisement","un pyjama","une cravate rouge"],"« Pupils wear a uniform »."],
  ["À quelle heure rentrent-ils chez eux ?","à 15 h 30",["à 16 h 30","à 15 h","à 13 h 30"],"« at half past three » : à trois heures et demie."]]},
 {t:"halloween",x:"On Halloween night, Mia is a witch and her brother is a skeleton. They go to a haunted house. Suddenly, three bats fly out of the window!",q:[
  ["En quoi est déguisée Mia ?","en sorcière",["en squelette","en fantôme","en chauve-souris"],"« Mia is a witch »."],
  ["Où vont les enfants ?","dans une maison hantée",["à l'école","au cinéma","au parc"],"« a haunted house » : une maison hantée."],
  ["Que sort-il de la fenêtre ?","trois chauves-souris",["trois fantômes","un chat noir","une sorcière"],"« three bats fly out of the window »."]]},
 {t:"time",x:"The film starts at quarter past six and finishes at eight o'clock. The bus leaves at half past eight.",q:[
  ["À quelle heure commence le film ?","18 h 15",["18 h 45","17 h 45","18 h 30"],"« quarter past six » : six heures et quart."],
  ["À quelle heure part le bus ?","20 h 30",["20 h","20 h 15","21 h 30"],"« half past eight » : huit heures et demie."]]},
 {t:"routine",x:"Tom gets up at seven o'clock. He has a shower and he has breakfast. He goes to school by bike. In the evening, he does his homework and he goes to bed at nine.",q:[
  ["À quelle heure Tom se lève-t-il ?","à 7 h",["à 9 h","à 8 h","à 6 h"],"« Tom gets up at seven o'clock »."],
  ["Comment va-t-il à l'école ?","à vélo",["en bus","à pied","en voiture"],"« He goes to school by bike »."],
  ["Que fait-il le soir ?","ses devoirs",["du sport","la cuisine","de la musique"],"« he does his homework »."]]},
 {t:"calendar",x:"Lily is very busy. On Monday, she plays the piano. On Wednesday, she goes swimming. On Saturday, she visits her grandmother.",q:[
  ["Que fait Lily le mercredi ?","elle va nager",["elle joue du piano","elle rend visite à sa grand-mère","elle danse"],"« On Wednesday, she goes swimming »."],
  ["Quel jour rend-elle visite à sa grand-mère ?","le samedi",["le lundi","le mercredi","le dimanche"],"« On Saturday, she visits her grandmother »."]]},
 {t:"hobbies",x:"In my class, Emma can play the guitar and Jack can dance. Harry can't swim, but he can run very fast. I can draw!",q:[
  ["Que sait faire Emma ?","jouer de la guitare",["danser","nager","dessiner"],"« Emma can play the guitar »."],
  ["Que ne sait pas faire Harry ?","nager",["courir","dessiner","danser"],"« Harry can't swim »."]]},
 {t:"animals",x:"Farmer Jones has got ten cows, twenty sheep and a donkey. He doesn't have pigs. His dog helps him with the sheep.",q:[
  ["Combien de moutons a le fermier ?","20",["10","12","2"],"« twenty sheep » (sheep ne prend pas de -s)."],
  ["Quel animal n'a-t-il pas ?","des cochons",["des vaches","un âne","un chien"],"« He doesn't have pigs »."]]},
 {t:"xmas",x:"In Britain, children hang a stocking on Christmas Eve. On Christmas Day, families eat turkey. On the table, there are crackers with paper hats and jokes inside.",q:[
  ["Que mangent les familles le jour de Noël ?","de la dinde",["du poisson","des crêpes","de la soupe"],"« families eat turkey »."],
  ["Qu'y a-t-il dans les crackers ?","des chapeaux en papier et des blagues",["des bonbons et du chocolat","de l'argent","des cartes de Noël"],"« paper hats and jokes inside »."]]},
 {t:"house",x:"FOR SALE: a lovely house with three bedrooms and a bathroom upstairs. Downstairs, there is a big kitchen and a living room. There isn't a garage, but there is a small garden.",q:[
  ["Combien y a-t-il de chambres ?","3",["2","4","1"],"« three bedrooms »."],
  ["Qu'est-ce qu'il n'y a pas ?","un garage",["un jardin","une cuisine","une salle de bains"],"« There isn't a garage »."]]},
 {t:"furniture",x:"In my bedroom, my bed is next to the window. My desk is between the bed and the wardrobe. My cat sleeps under the bed.",q:[
  ["Où est le lit ?","à côté de la fenêtre",["sous la fenêtre","derrière l'armoire","entre le bureau et l'armoire"],"« next to the window »."],
  ["Où dort le chat ?","sous le lit",["sur le lit","sur le bureau","derrière l'armoire"],"« under the bed »."]]},
 {t:"clothes",x:"At my school, we wear a uniform: a white shirt, a blue jumper and grey trousers or a grey skirt. Today, it's sports day, so I'm wearing shorts and trainers!",q:[
  ["De quelle couleur est le pull de l'uniforme ?","bleu",["blanc","gris","vert"],"« a blue jumper »."],
  ["Que porte l'enfant aujourd'hui ?","un short et des baskets",["l'uniforme","une robe","un manteau"],"« I'm wearing shorts and trainers »."]]},
 {t:"actions",x:"It's Saturday morning. Dad is cooking pancakes. Mum is reading the newspaper. My little brother is sleeping and I'm writing this text!",q:[
  ["Que fait papa ?","il fait des crêpes",["il lit le journal","il dort","il écrit"],"« Dad is cooking pancakes »."],
  ["Qui est en train de dormir ?","le petit frère",["maman","papa","l'enfant qui écrit"],"« My little brother is sleeping »."]]},
 {t:"health",x:"Doctor: What's the matter, Lucy? — Lucy: I've got a sore throat and a temperature. — Doctor: You've got a cold. Stay in bed and drink a lot of water.",q:[
  ["Qu'a Lucy ?","mal à la gorge et de la fièvre",["mal aux dents","mal au ventre","mal au genou"],"« a sore throat and a temperature »."],
  ["Que conseille le médecin ?","rester au lit et boire beaucoup d'eau",["aller à l'école","faire du sport","manger des bonbons"],"« Stay in bed and drink a lot of water »."]]},
 {t:"weather",x:"Today in London, it's cloudy and windy in the morning. In the afternoon, it's rainy. Tomorrow, it's sunny and warm!",q:[
  ["Quel temps fait-il l'après-midi ?","il pleut",["il fait beau","il neige","il y a du brouillard"],"« In the afternoon, it's rainy »."],
  ["Quel temps fera-t-il demain ?","beau et doux",["pluvieux","froid et neigeux","orageux"],"« Tomorrow, it's sunny and warm »."]]},
 {t:"town",x:"To go to the museum: go straight on, then turn right at the bank. The museum is opposite the park, next to the library.",q:[
  ["Où faut-il tourner ?","à droite à la banque",["à gauche à la banque","à droite au parc","à gauche au musée"],"« turn right at the bank »."],
  ["Le musée est à côté de…","la bibliothèque",["la banque","la gare","l'église"],"« next to the library »."]]},
 {t:"shops",x:"Shop assistant: Can I help you? — Emma: Yes, how much is this teddy bear? — Shop assistant: It's eight pounds. — Emma: That's cheap! I'll take it.",q:[
  ["Combien coûte l'ours en peluche ?","8 £",["18 £","80 £","3 £"],"« eight pounds » : huit livres."],
  ["Que pense Emma du prix ?","c'est bon marché",["c'est trop cher","c'est gratuit","elle ne sait pas"],"« That's cheap! »"]]},
 {t:"food",x:"MENU — Soup of the day: £3. Cheese sandwich: £4. Fish and chips: £7. Ice cream: £2.",q:[
  ["Combien coûte le fish and chips ?","7 £",["4 £","3 £","2 £"],"« Fish and chips: £7 »."],
  ["Qu'est-ce qui coûte 4 £ ?","le sandwich au fromage",["la soupe","la glace","le poisson"],"« Cheese sandwich: £4 »."]]},
 {t:"wild",x:"I live in the sea. I'm grey and I'm very intelligent. I can jump and swim very fast. I eat fish. What am I?",q:[
  ["Quel animal est-ce ?","un dauphin",["un requin","une baleine","un manchot"],"Gris, intelligent, il saute : c'est un dauphin (a dolphin)."]]},
 {t:"wild",x:"I'm black and white. I live where it's very cold. I can swim but I can't fly. What am I?",q:[
  ["Quel animal est-ce ?","un manchot",["une chouette","un zèbre","un dauphin"],"Noir et blanc, il nage mais ne vole pas : c'est un manchot (a penguin)."]]},
 {t:"uk",x:"The United Kingdom has got four countries: England, Scotland, Wales and Northern Ireland. The capital of Scotland is Edinburgh. The capital of Wales is Cardiff.",q:[
  ["Combien de pays forment le Royaume-Uni ?","4",["2","3","5"],"England, Scotland, Wales and Northern Ireland."],
  ["Quelle est la capitale de l'Écosse ?","Édimbourg",["Cardiff","Londres","Dublin"],"« The capital of Scotland is Edinburgh »."]]},
 {t:"festivals",x:"On the 5th of November, it's Bonfire Night. People make big bonfires and watch fireworks in the park. Children eat toffee apples.",q:[
  ["Quand est Bonfire Night ?","le 5 novembre",["le 31 octobre","le 25 décembre","le 14 février"],"« On the 5th of November »."],
  ["Que regardent les gens dans le parc ?","un feu d'artifice",["un défilé","un film","un match"],"« watch fireworks »."]]},
 {t:"jobs",x:"I work in a hospital. I help the doctors and I look after ill people. I'm not a doctor. Who am I?",q:[
  ["Quel est ce métier ?","infirmier ou infirmière",["médecin","dentiste","pompier"],"Il aide les médecins à l'hôpital : a nurse."]]},
 {t:"jobs",x:"I get up very early. I make bread and cakes. I sell them in my shop. Who am I?",q:[
  ["Quel est ce métier ?","boulanger ou boulangère",["cuisinier","fermier","facteur"],"Il fait du pain : a baker."]]},
 {t:"transport",x:"Next week, we're going to Edinburgh by train. The journey is four hours long. Don't forget the tickets!",q:[
  ["Comment vont-ils à Édimbourg ?","en train",["en avion","en voiture","en bateau"],"« by train »."],
  ["Combien de temps dure le trajet ?","4 heures",["2 heures","14 heures","40 minutes"],"« four hours long »."]]},
 {t:"past",x:"A long time ago, there were no cars and no televisions. My great-grandmother was a teacher. The school was very small: there were only twelve pupils.",q:[
  ["Quel était le métier de l'arrière-grand-mère ?","professeur",["médecin","fermière","boulangère"],"« My great-grandmother was a teacher »."],
  ["Combien d'élèves y avait-il dans l'école ?","12",["20","2","120"],"« there were only twelve pupils »."]]},
 {t:"feelings",x:"Dear diary, yesterday was my birthday. I was very excited! My friends were at my party. But my little sister was sad because it wasn't her birthday.",q:[
  ["Comment se sentait l'enfant hier ?","tout excité",["triste","fatigué","en colère"],"« I was very excited »."],
  ["Pourquoi la petite sœur était-elle triste ?","parce que ce n'était pas son anniversaire",["parce qu'elle était malade","parce qu'il pleuvait","parce qu'elle avait peur"],"« because it wasn't her birthday »."]]},
 {t:"nature",x:"PARK RULES: Don't drop litter. Put your rubbish in the bins. Don't pick the flowers. Dogs must be on a lead. Be kind to animals!",q:[
  ["Que ne faut-il pas cueillir ?","les fleurs",["les arbres","les fruits","les déchets"],"« Don't pick the flowers »."],
  ["Où faut-il mettre ses déchets ?","dans les poubelles",["par terre","dans la rivière","dans son sac"],"« Put your rubbish in the bins »."]]},
 {t:"holidays",x:"Dear Grandma, we're in Cornwall! The weather is sunny. Every morning, we go to the beach. Today, we're visiting a castle. See you soon! Love, Ella",q:[
  ["Que fait la famille chaque matin ?","elle va à la plage",["elle visite un château","elle fait du vélo","elle dort"],"« Every morning, we go to the beach »."],
  ["Que fait-elle aujourd'hui ?","elle visite un château",["elle va à la plage","elle prend le train","elle écrit des lettres"],"« Today, we're visiting a castle »."]]}
];

/* =========================================================
   6. LA GRAMMAIRE (générateurs) — 1re partie
   ========================================================= */
const SUJETS=[["I","am","je",0],["you","are","tu",0],["he","is","il",1],["she","is","elle",1],["it","is","il, elle (chose, animal)",1],["we","are","nous",0],["they","are","ils, elles",0]];
const COURT={am:"'m",are:"'re",is:"'s"};
const ATTRIBUTS=[["ten years old","dix ans"],["in the garden","dans le jardin"],["at school","à l'école"],["happy","content"],["tired","fatigué"],["from London","de Londres"],["in my class","dans ma classe"],["hungry","affamé"]];
const AVOIR=[["a bike","un vélo"],["a sister","une sœur"],["a dog","un chien"],["two brothers","deux frères"],["a new computer","un nouvel ordinateur"],["blue eyes","les yeux bleus"],["a big garden","un grand jardin"],["a cat","un chat"]];
const POSSESSIFS=[["my","mon, ma, mes (à moi)"],["your","ton, ta, tes (à toi)"],["his","son, sa, ses (à lui)"],["her","son, sa, ses (à elle)"],["its","son, sa, ses (à un animal, une chose)"],["our","notre, nos"],["their","leur, leurs"]];
const POSS_PHRASES=[["C'est le vélo de Tom : c'est ___ vélo.","his","bike"],["C'est le sac d'Emma : c'est ___ sac.","her","bag"],["C'est la maison de mes parents : c'est ___ maison.","their","house"],
 ["C'est notre école : c'est ___ école.","our","school"],["C'est mon livre : c'est ___ livre.","my","book"],["C'est ton stylo : c'est ___ stylo.","your","pen"],
 ["Le chien a une balle : c'est ___ balle.","its","ball"],["C'est la chambre de Lily : c'est ___ chambre.","her","bedroom"],["C'est le chat de Jack : c'est ___ chat.","his","cat"],
 ["C'est la voiture de mes grands-parents : c'est ___ voiture.","their","car"]];
const PAYS=[["France","French","de France","français"],["England","English","d'Angleterre","anglais"],["Scotland","Scottish","d'Écosse","écossais"],["Wales","Welsh","du pays de Galles","gallois"],
 ["Ireland","Irish","d'Irlande","irlandais"],["Spain","Spanish","d'Espagne","espagnol"],["Germany","German","d'Allemagne","allemand"],["Italy","Italian","d'Italie","italien"],
 ["the USA","American","des États-Unis","américain"],["China","Chinese","de Chine","chinois"],["Portugal","Portuguese","du Portugal","portugais"]];
const MATIERES=[["maths","les maths"],["science","les sciences"],["history","l'histoire"],["geography","la géographie"],["art","les arts plastiques"],["music","la musique"],["PE","l'EPS"],["English","l'anglais"]];
const PLURIELS2=[["box","boxes"],["witch","witches"],["bus","buses"],["watch","watches"],["dish","dishes"],["baby","babies"],["family","families"],["city","cities"],["party","parties"],
 ["wolf","wolves"],["knife","knives"],["leaf","leaves"],["child","children"],["man","men"],["woman","women"],["mouse","mice"],["foot","feet"],["tooth","teeth"],
 ["sheep","sheep"],["goose","geese"],["cat","cats"],["ghost","ghosts"],["bat","bats"],["pumpkin","pumpkins"],["toy","toys"],["day","days"]];
const regPluriel=s=>/(s|x|ch|sh)$/.test(s)?s+"es":/[^aeiou]y$/.test(s)?s.slice(0,-1)+"ies":s+"s";
const HEURES=["twelve","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];
function heureEn(h,m){const s=h%12||12,n=(h%12)+1;
  if(m===0)return `${HEURES[s]} o'clock`;if(m===15)return `quarter past ${HEURES[s]}`;if(m===30)return `half past ${HEURES[s]}`;
  if(m===45)return `quarter to ${HEURES[n]}`;if(m<30)return `${enL(m)} past ${HEURES[s]}`;return `${enL(60-m)} to ${HEURES[n]}`;}
const heureChiffres=(h,m)=>`${h}:${String(m).padStart(2,"0")}`;
function heureAlea(fines){const h=alea(1,12),m=fines?pioche([0,5,10,15,20,25,30,35,40,45,50,55]):pioche([0,15,30,45]);return [h,m];}
const heureFausses=(h,m)=>{const n=h%12+1,p=(h+10)%12+1;return [heureChiffres(h,(m+30)%60),heureChiffres(n,m),heureChiffres(p,m),heureChiffres(h,m===15?45:m===45?15:(m+15)%60)];};
const VERBES=[["play","plays","football","au football"],["watch","watches","TV","la télé"],["go","goes","to school","à l'école"],["get up","gets up","at seven","à sept heures"],
 ["have","has","breakfast at eight","le petit-déjeuner à huit heures"],["read","reads","comics","des BD"],["eat","eats","cereal","des céréales"],["drink","drinks","milk","du lait"],
 ["like","likes","music","la musique"],["live","lives","in London","à Londres"],["speak","speaks","English","anglais"],["study","studies","history","l'histoire"],
 ["swim","swims","on Wednesday","le mercredi"],["finish","finishes","school at four","l'école à quatre heures"],["ride","rides","a bike","à vélo"],["do","does","judo","du judo"],["fly","flies","a kite","un cerf-volant"],["wash","washes","the car","la voiture"]];
const SUJ_PLUR=[["I","je"],["you","tu"],["we","nous"],["they","ils"],["my parents","mes parents"],["Tom and Lily","Tom et Lily"]];
const SUJ_3=[["he","il"],["she","elle"],["my brother","mon frère"],["Emma","Emma"],["the teacher","le professeur"],["my cat","mon chat"]];
const TALENTS=[["swim","nager"],["dance","danser"],["sing","chanter"],["ride a bike","faire du vélo"],["play the piano","jouer du piano"],["play the guitar","jouer de la guitare"],
 ["draw","dessiner"],["cook","cuisiner"],["skate","faire du skate"],["climb trees","grimper aux arbres"],["speak English","parler anglais"],["juggle","jongler"]];
const ANIM_PL=[["horses","les chevaux"],["cats","les chats"],["dogs","les chiens"],["spiders","les araignées"],["snakes","les serpents"],["mice","les souris"],["rabbits","les lapins"],["sheep","les moutons"]];
const MOIS_EN=["January","February","March","April","May","June","July","August","September","October","November","December"];
const MOIS_FR=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
const JOURS_EN=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const JOURS_FR=["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
const ORD_U=["","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"];
function ordinal(n){if(n<20)return ORD_U[n];if(n===20)return "twentieth";if(n===30)return "thirtieth";const d=Math.floor(n/10),u=n%10;return `${DIZAINES_EN[d]}-${ORD_U[u]}`;}
const suffixe=n=>(n%100>=11&&n%100<=13)?"th":n%10===1?"st":n%10===2?"nd":n%10===3?"rd":"th";
const DATES_FETES=[["Christmas Day",12,25,"le jour de Noël"],["Boxing Day",12,26,"Boxing Day"],["Halloween",10,31,"Halloween"],["Bonfire Night",11,5,"Bonfire Night"],
 ["Valentine's Day",2,14,"la Saint-Valentin"],["New Year's Day",1,1,"le jour de l'An"],["Christmas Eve",12,24,"la veille de Noël"]];

const GG={
 be:[
  ()=>{const [s,v,fr]=pioche(SUJETS),[a]=pioche(ATTRIBUTS);return qcm(`Complète : « ${cap(s)} ___ ${a}. »`,v,["am","are","is"].filter(x=>x!==v),`${s} → ${v} : ${cap(s)} ${v} ${a}.`);},
  ()=>{const [s,v]=pioche(SUJETS);return qcm(`Quelle est la forme courte de « ${s} ${v} » ?`,`${s}${COURT[v]}`,["'m","'re","'s"].filter(x=>x!==COURT[v]).map(x=>s+x),`${s} ${v} = ${s}${COURT[v]}.`);},
  ()=>{const [s,v,fr,t]=pioche(SUJETS.filter(x=>x[0]!=="I"&&x[0]!=="it")),[a,af]=pioche(ATTRIBUTS);const neg=v==="is"?"isn't":"aren't";
   return qcm(`Comment dit-on la phrase négative : « ${cap(s)} ${v} ${a}. » ?`,`${cap(s)} ${neg} ${a}.`,[`${cap(s)} don't ${a}.`,`${cap(s)} not ${v} ${a}.`,`${cap(s)} ${v==="is"?"aren't":"isn't"} ${a}.`],`Négation : ${v} not = ${neg}.`);},
  ()=>{const [s,v]=pioche(SUJETS.filter(x=>x[0]!=="I")),[a]=pioche(ATTRIBUTS);return qcm(`Quelle est la bonne question ?`.replace("?",`? (${s} / ${a})`),`${cap(v)} ${s} ${a}?`,[`${cap(s)} ${v} ${a}?`,`Do ${s} ${a}?`,`${cap(v)} ${a} ${s}?`],`Pour poser la question, on inverse : ${cap(v)} ${s} ${a}?`);},
  ()=>{const [s,v,fr]=pioche(SUJETS),[a,af]=pioche(ATTRIBUTS);return ecoute(`${cap(s)} ${v} ${a}.`,"🔊 Écoute. Quel est le sujet de la phrase ?",fr,SUJETS.filter(x=>x[0]!==s&&x[1]!==v).map(x=>x[2]),`« ${s} ${v} » : ${fr}.`);},
  ()=>{const [s,v]=pioche(SUJETS);return saisie(`Écris la bonne forme de « be » : ${cap(s)} ___ ready.`,[v],`${s} → ${v}.`);}],
 havegot:[
  ()=>{const [s,,fr,t]=pioche(SUJETS.filter(x=>x[0]!=="it")),[o]=pioche(AVOIR);const v=t?"has":"have";return qcm(`Complète : « ${cap(s)} ___ got ${o}. »`,v,[t?"have":"has","is","are"],`${s} → ${v} got.`);},
  ()=>{const [s,,fr,t]=pioche(SUJETS.filter(x=>x[0]!=="it")),[o,of]=pioche(AVOIR);const v=t?"hasn't":"haven't";return qcm(`Choisis la phrase négative : ${cap(s)} (have got) ${o}.`,`${cap(s)} ${v} got ${o}.`,[`${cap(s)} ${t?"haven't":"hasn't"} got ${o}.`,`${cap(s)} don't got ${o}.`,`${cap(s)} not have got ${o}.`],`${s} → ${v} got.`);},
  ()=>{const [s,,fr,t]=pioche(SUJETS.filter(x=>x[0]!=="I"&&x[0]!=="it")),[o]=pioche(AVOIR);const v=t?"Has":"Have";return qcm(`Quelle question est correcte ? (${s} / ${o})`,`${v} ${s} got ${o}?`,[`${t?"Have":"Has"} ${s} got ${o}?`,`Do ${s} got ${o}?`,`${cap(s)} ${v.toLowerCase()} got ${o}?`],`Question : ${v} ${s} got…?`);},
  ()=>{const g=pioche([...GARCONS,...FILLES]),[o,of]=pioche(AVOIR);return ecoute(`${g} has got ${o}.`,"🔊 Écoute. Qu'est-ce que l'enfant a ?",of,melange(AVOIR.filter(x=>x[0]!==o)).map(x=>x[1]),`« ${o} » = ${of}.`);},
  fx("« She's got a cat » veut dire…","Elle a un chat.",["Elle est un chat.","Elle n'a pas de chat.","Elle aime les chats."],"She's got = She has got = elle a."),
  fx("« He's got » est la forme courte de…","He has got",["He is got","He have got"],"Attention : 's peut vouloir dire is ou has. Devant got, c'est has.")],
 possessive:[
  ()=>{const [p,b]=pioche(POSS_PHRASES);return qcm(`${p}`,b,["my","your","his","her","its","our","their"].filter(x=>x!==b),`Réponse : ${b}. Le possessif dépend du possesseur : his (à lui), her (à elle), its (à un animal), their (à eux).`);},
  ()=>{const g=pioche(GARCONS),f=pioche(FILLES),fille=alea(0,1);const n=fille?f:g;return qcm(`Complète : « ${n} is my friend. ___ dog is called Rex. »`,fille?"Her":"His",fille?["His","Its","Their"]:["Her","Its","Their"],fille?`${n} est une fille : her.`:`${n} est un garçon : his.`);},
  ()=>{const [en,fr]=pioche(POSSESSIFS);return qcm(`Que veut dire « ${en} » ?`,fr,POSSESSIFS.filter(x=>x[0]!==en).map(x=>x[1]),`${en} = ${fr}.`);},
  ()=>{const [en,fr]=pioche(POSSESSIFS);return qcm(`Comment dit-on « ${fr} » ?`,en,POSSESSIFS.filter(x=>x[0]!==en).map(x=>x[0]),`${fr} = ${en}.`);},
  ()=>{const l=[["This is her bag.","C'est son sac (à elle)."],["This is his bag.","C'est son sac (à lui)."],["This is their bag.","C'est leur sac."],["This is our bag.","C'est notre sac."],["This is your bag.","C'est ton sac."]];
   const [en,fr]=pioche(l);return ecoute(en,"🔊 Écoute. À qui est le sac ?",fr,l.filter(x=>x[0]!==en).map(x=>x[1]),`« ${en} » : ${fr}`);}],
 from:[
  ()=>{const [c,n,fr]=pioche(PAYS),o=pioche(PAYS.filter(x=>x[0]!==c));return qcm(`Comment dit-on « Je viens ${fr} » ?`,`I'm from ${c}.`,[`I'm from ${n}.`,`I'm ${c}.`,`I'm from ${o[0]}.`],`I'm from + pays : I'm from ${c}.`);},
  ()=>{const [c,n,fr,nf]=pioche(PAYS);return qcm(`Comment dit-on « Je suis ${nf} » ?`,`I'm ${n}.`,[`I'm ${n.toLowerCase()}.`,`I'm from ${n}.`,`I'm ${c}.`],`La nationalité prend une majuscule : I'm ${n}.`);},
  ()=>{const [c,n,fr,nf]=pioche(PAYS);return qcm(`Quelle est la nationalité d'une personne qui vient de « ${c} » ?`,n,melange(PAYS.filter(x=>x[0]!==c)).map(x=>x[1]),`${c} → ${n} (${nf}).`);},
  ()=>{const [c,n,fr]=pioche(PAYS),p=pioche(PRENOMS);return ecoute(`Hello, I'm ${p}. I'm from ${c}.`,`🔊 Écoute. D'où vient l'enfant ?`,fr.replace(/^(de |d'|du |des )/,""),melange(PAYS.filter(x=>x[0]!==c)).map(x=>x[2].replace(/^(de |d'|du |des )/,"")),`« I'm from ${c} ».`);},
  fx("Comment demande-t-on « D'où viens-tu ? » ?","Where are you from?",["Where do you live?","What are you from?","Where you are from?"],"Where are you from?")],
 favourite:[
  ()=>{const [en,fr]=pioche(MATIERES),o=pioche(MATIERES.filter(x=>x[0]!==en));return qcm(`Comment dit-on « Ma matière préférée, c'est ${fr} » ?`,`My favourite subject is ${en}.`,[`My subject favourite is ${en}.`,`My favourite subject is the ${en}.`,`My favourite subject is ${o[0]}.`],`My favourite subject is ${en}. (pas de « the »)`);},
  ()=>{const [en,fr]=pioche(MATIERES);return ecoute(`My favourite subject is ${en}.`,"🔊 Écoute. Quelle est la matière préférée ?",fr,melange(MATIERES.filter(x=>x[0]!==en)).map(x=>x[1]),`« ${en} » = ${fr}.`);},
  fx("« because » veut dire…","parce que",["pourtant","mais","avec"],"I like art because it's fun = j'aime les arts plastiques parce que c'est amusant."),
  fx("Complète : « I like music ___ it's fun. »","because",["but","and","or"],"because = parce que."),
  fx("Complète : « I like maths, ___ I don't like history. »","but",["because","so","or"],"but = mais."),
  fx("Comment dit-on « C'est difficile » ?","It's difficult.",["It's easy.","It's boring.","It's fun."],"difficult = difficile ; easy = facile."),
  fx("En anglais, les noms de matières (maths, music) prennent-ils « the » ?","non : I like maths.",["oui : I like the maths."],"On dit simplement : I like music.")],
 plural:[
  ()=>{const [s,p]=pioche(PLURIELS2);const faux=[regPluriel(s),s+"s",s+"es"].filter(x=>x!==p);return qcm(`Quel est le pluriel de « ${s} » ?`,p,faux.length?faux:[s+"es",s+"ies"],`one ${s}, two ${p}.`);},
  ()=>{const [s,p]=pioche(PLURIELS2.filter(x=>x[0]!==x[1]));return saisie(`Écris le pluriel de « ${s} ».`,[p],`one ${s}, two ${p}.`);},
  ()=>{const [s,p]=pioche(PLURIELS2.filter(x=>x[1]!==x[0]&&regPluriel(x[0])!==x[1]));return qcm(`Complète : « three ___ » (${s})`,`three ${p}`,[`three ${regPluriel(s)}`,`three ${s}`],`${s} a un pluriel irrégulier : ${p}.`);},
  fx("Les mots en -ch, -sh, -s, -x prennent au pluriel…","-es (watches, boxes)",["-s seulement (watchs)","-ies (watchies)"],"On ajoute -es pour pouvoir le prononcer : boxes, witches."),
  fx("Quel est le pluriel de « sheep » ?","sheep",["sheeps","sheepes"],"sheep ne change pas : one sheep, two sheep."),
  ()=>{const l=PLURIELS2.filter(x=>regPluriel(x[0])!==x[1]);const [s,p]=pioche(l);return ecoute(`two ${p}`,"🔊 Écoute et choisis ce que tu entends.",`two ${p}`,[`two ${regPluriel(s)}`,`two ${s}`],`On dit « two ${p} ».`);}],
 time:[
  ()=>{const [h,m]=heureAlea(false);return qcm(`🕒 ${heureChiffres(h,m)} — What time is it?`,`It's ${heureEn(h,m)}.`,heureFausses(h,m).map(x=>{const [a,b]=x.split(":").map(Number);return `It's ${heureEn(a,b)}.`;}),`${heureChiffres(h,m)} : ${heureEn(h,m)}.`);},
  ()=>{const [h,m]=heureAlea(false);return ecoute(`It's ${heureEn(h,m)}.`,"🔊 Écoute. Quelle heure est-il ?",heureChiffres(h,m),heureFausses(h,m),`« ${heureEn(h,m)} » = ${heureChiffres(h,m)}.`);},
  ()=>{const [h,m]=heureAlea(true);return qcm(`Quelle heure est « ${heureEn(h,m)} » ?`,heureChiffres(h,m),heureFausses(h,m),`« ${heureEn(h,m)} » = ${heureChiffres(h,m)}.`);},
  fx("« quarter to five » est…","4:45",["5:15","5:45","4:15"],"quarter to = moins le quart : 5 h moins le quart = 4:45."),
  fx("« half past six » est…","6:30",["5:30","6:50","12:30"],"half past = et demie."),
  fx("Comment demande-t-on l'heure ?","What time is it?",["How old is it?","What is the hour?","When time is it?"],"What time is it?"),
  fx("Comment dit-on « à huit heures » ?","at eight o'clock",["in eight o'clock","on eight o'clock"],"at + heure.")],
 present:[
  ()=>{const [b,,c,cf]=pioche(VERBES),[s]=pioche(SUJ_PLUR);return qcm(`Complète : « ${cap(s)} ___ ${c}. »`,b,[VERBES.find(x=>x[0]===b)[1],`is ${b}`],`${s} → ${b} (sans -s).`);},
  ()=>{const [b,,c]=pioche(VERBES),[s]=pioche(SUJ_PLUR.slice(0,4));return qcm(`Choisis la phrase négative : ${cap(s)} ${b} ${c}.`,`${cap(s)} don't ${b} ${c}.`,[`${cap(s)} doesn't ${b} ${c}.`,`${cap(s)} not ${b} ${c}.`,`${cap(s)} don't ${VERBES.find(x=>x[0]===b)[1]} ${c}.`],`Négation : don't + verbe.`);},
  ()=>{const [b,,c]=pioche(VERBES);return qcm(`Quelle question est correcte ? (you / ${b} ${c})`,`Do you ${b} ${c}?`,[`Does you ${b} ${c}?`,`You do ${b} ${c}?`,`Are you ${b} ${c}?`],`Question : Do you…?`);},
  ()=>{const l=[["I get up at seven.","Je me lève à sept heures."],["We have lunch at school.","Nous déjeunons à l'école."],["They watch TV after dinner.","Ils regardent la télé après le dîner."],
   ["I don't drink coffee.","Je ne bois pas de café."],["You go to bed late.","Tu te couches tard."],["We walk to school.","Nous allons à l'école à pied."]];
   const [en,fr]=pioche(l);return ecoute(en,"🔊 Écoute la phrase. Que veut-elle dire ?",fr,l.filter(x=>x[0]!==en).map(x=>x[1]),`« ${en} » : ${fr}`);},
  fx("Le présent simple sert à parler…","des habitudes (tous les jours)",["de ce qu'on fait en ce moment","du passé"],"I get up at seven every day : c'est une habitude.")],
 third:[
  ()=>{const [b,t,c]=pioche(VERBES),[s]=pioche(SUJ_3);return qcm(`Complète : « ${cap(s)} ___ ${c}. »`,t,[b,`is ${b}`,`are ${b}`],`${s} = he/she/it → on ajoute -s : ${t}.`);},
  ()=>{const [b,t,c]=pioche(VERBES),[s]=pioche(SUJ_3.slice(0,2));return saisie(`Écris le verbe à la bonne forme : ${cap(s)} (${b}) ${c}.`,[t,`${s} ${t} ${c}`],`${s} → ${t}.`);},
  ()=>{const [b,t,c]=pioche(VERBES);return qcm(`Choisis la phrase négative : She ${t} ${c}.`,`She doesn't ${b} ${c}.`,[`She doesn't ${t} ${c}.`,`She don't ${b} ${c}.`,`She not ${t} ${c}.`],`Négation : doesn't + verbe sans -s.`);},
  fx("Avec he, she, it, le verbe au présent simple prend…","un -s : she plays",["rien : she play","-ing : she playing"],"he plays, she watches, it eats."),
  fx("« have » avec « he » devient…","has",["haves","haves got"],"he has, she has : forme irrégulière."),
  fx("Quel verbe est bien écrit ? « She ___ TV. »","watches",["watchs","watch"],"Verbes en -ch, -sh, -s, -x, -o : on ajoute -es."),
  ()=>{const [b,t,c,cf]=pioche(VERBES);const g=alea(0,1)?pioche(GARCONS):pioche(FILLES);return ecoute(`${g} ${t} ${c}.`,"🔊 Écoute et choisis ce que tu entends.",`${g} ${t} ${c}.`,[`${g} ${b} ${c}.`],`Avec he/she : ${t}.`);}],
 can:[
  ()=>{const [en,fr]=pioche(TALENTS);return qcm(`Comment dit-on « Je sais ${fr} » ?`,`I can ${en}.`,[`I can to ${en}.`,`I cans ${en}.`,`I can't ${en}.`],`can + verbe (sans « to ») : I can ${en}.`);},
  ()=>{const [en,fr]=pioche(TALENTS),f=pioche(FILLES);return qcm(`Comment dit-on « ${f} ne sait pas ${fr} » ?`,`${f} can't ${en}.`,[`${f} doesn't can ${en}.`,`${f} can't ${en}s.`,`${f} can ${en}.`],`can't = cannot. Pas de -s après can.`);},
  ()=>{const [en,fr]=pioche(TALENTS);return qcm(`« Can he ${en}? » — Oui. Que répond-on ?`,"Yes, he can.",["Yes, he does.","Yes, he is.","Yes, he cans."],"Yes, he can. / No, he can't.");},
  ()=>{const [en,fr]=pioche(TALENTS),ok=alea(0,1);return ecoute(`I ${ok?"can":"can't"} ${en}.`,`🔊 Écoute. Est-ce que l'enfant sait ${fr} ?`,ok?"oui":"non",[ok?"non":"oui"],ok?`« I can » : je sais.`:`« I can't » : je ne sais pas.`);},
  fx("Après « can », le verbe…","ne change jamais : she can swim",["prend un -s : she can swims","prend « to » : she can to swim"],"can + verbe tout simple."),
  fx("Comment dit-on « Sais-tu nager ? » ?","Can you swim?",["Do you can swim?","You can swim?","Are you swim?"],"Question : Can you…?")],
 dodoes:[
  ()=>{const [en,fr]=pioche(ANIM_PL),[s,sf]=pioche(SUJ_3.slice(0,5));return qcm(`Complète : « ${cap(s)} ___ like ${en}. » (négation)`,"doesn't",["don't","isn't","not"],`${s} → doesn't.`);},
  ()=>{const [en]=pioche(ANIM_PL),[s]=pioche(SUJ_PLUR);return qcm(`Complète : « ${cap(s)} ___ like ${en}. » (négation)`,"don't",["doesn't","aren't","not"],`${s} → don't.`);},
  ()=>{const [en]=pioche(ANIM_PL),t=alea(0,1),s=t?pioche(["he","she","your sister","Tom"]):pioche(["you","they","your parents"]);return qcm(`Complète : « ___ ${s} like ${en}? »`,t?"Does":"Do",[t?"Do":"Does","Is","Are"],t?`${s} → Does…?`:`${s} → Do…?`);},
  ()=>{const t=alea(0,1),ok=alea(0,1);const q=t?"Does she like horses?":"Do you like horses?";const r=t?(ok?"Yes, she does.":"No, she doesn't."):(ok?"Yes, I do.":"No, I don't.");
   return qcm(`${ok?"👍":"👎"} « ${q} » Choisis la bonne réponse.`,r,t?["Yes, she do.","No, she don't.","Yes, she is.",ok?"No, she doesn't.":"Yes, she does."]:["Yes, I does.","No, I doesn't.","Yes, I am.",ok?"No, I don't.":"Yes, I do."],`Réponse courte : ${r}`);},
  ()=>{const [en,fr]=pioche(ANIM_PL),ok=alea(0,1);return ecoute(`My sister ${ok?"likes":"doesn't like"} ${en}.`,`🔊 Écoute. La sœur aime-t-elle ${fr} ?`,ok?"oui":"non",[ok?"non":"oui"],ok?"« likes » : elle aime.":"« doesn't like » : elle n'aime pas.");}],
 dates:[
  ()=>{const n=alea(1,31);return qcm(`Comment dit-on le ${n}${n===1?"er":""} en anglais ? (the … of May)`,`the ${ordinal(n)} of May`,[`the ${enL(n)} of May`,`the ${ordinal(n===31?30:n+1)} of May`,`${ordinal(n)} May the`],`On utilise le nombre ordinal : the ${ordinal(n)} (${n}${suffixe(n)}).`);},
  ()=>{const n=alea(1,31);return qcm(`Comment écrit-on « ${ordinal(n)} » en chiffres ?`,`${n}${suffixe(n)}`,["st","nd","rd","th"].filter(x=>x!==suffixe(n)).map(x=>`${n}${x}`),`${ordinal(n)} = ${n}${suffixe(n)}.`);},
  ()=>{const [f,m,j,ff]=pioche(DATES_FETES);return qcm(`Quelle est la date de ${f} ?`,`the ${ordinal(j)} of ${MOIS_EN[m-1]}`,melange(DATES_FETES.filter(x=>x[0]!==f)).map(x=>`the ${ordinal(x[2])} of ${MOIS_EN[x[1]-1]}`),`${f} : le ${j} ${MOIS_FR[m-1]}.`);},
  ()=>{const n=alea(1,28),i=alea(0,11);return ecoute(`My birthday is on the ${ordinal(n)} of ${MOIS_EN[i]}.`,"🔊 Écoute. Quelle est la date de l'anniversaire ?",`le ${n} ${MOIS_FR[i]}`,[`le ${n} ${MOIS_FR[(i+1)%12]}`,`le ${n===1?3:n-1} ${MOIS_FR[i]}`,`le ${n+2} ${MOIS_FR[(i+6)%12]}`],`« the ${ordinal(n)} of ${MOIS_EN[i]} » = le ${n} ${MOIS_FR[i]}.`);},
  fx("« first, second, third » veulent dire…","premier, deuxième, troisième",["un, deux, trois","dix, vingt, trente"],"Ce sont les nombres ordinaux."),
  ()=>{const i=alea(0,11);return qcm(`Quel est le ${i+1}${i?"e":"er"} mois de l'année ?`,MOIS_EN[i],[MOIS_EN[(i+1)%12],MOIS_EN[(i+11)%12],MOIS_EN[(i+5)%12]],`${MOIS_EN[i]} (${MOIS_FR[i]}) est le ${ordinal(i+1)} mois.`);}]
};

/* =========================================================
   6. LA GRAMMAIRE (générateurs) — 2e partie
   ========================================================= */
const CHOSES=[["a sofa","un canapé",1],["a big kitchen","une grande cuisine",1],["a garden","un jardin",1],["a computer","un ordinateur",1],["a TV","une télévision",1],
 ["three bedrooms","trois chambres",0],["two bathrooms","deux salles de bains",0],["some books","des livres",0],["four chairs","quatre chaises",0],["a lot of toys","beaucoup de jouets",0],
 ["a cat","un chat",1],["two windows","deux fenêtres",0],["an attic","un grenier",1],["some flowers","des fleurs",0]];
const LIEUX=[["in the living room","dans le salon"],["in my house","dans ma maison"],["in my bedroom","dans ma chambre"],["in the garden","dans le jardin"],["upstairs","à l'étage"]];
const PREP2=[["next to","à côté de"],["behind","derrière"],["in front of","devant"],["under","sous"],["on","sur"],["in","dans"],["opposite","en face de"]];
const MEUBLES=[["bed","du lit","le lit"],["sofa","du canapé","le canapé"],["wardrobe","de l'armoire","l'armoire"],["desk","du bureau","le bureau"],["door","de la porte","la porte"],["window","de la fenêtre","la fenêtre"],["chair","de la chaise","la chaise"],["table","de la table","la table"]];
const prepFr=(p,m)=>p[1].endsWith(" de")?`${p[1].slice(0,-3)} ${m[1]}`:`${p[1]} ${m[2]}`;
const OBJ_POS=[["The cat","Le chat"],["My bag","Mon sac"],["The ball","Le ballon"],["The lamp","La lampe"],["The dog","Le chien"]];
const SUJ_CONT=[["I","am","'m","je"],["You","are","'re","tu"],["He","is","'s","il"],["She","is","'s","elle"],["We","are","'re","nous"],["They","are","'re","ils"]];
const ING=[["read","reading","lire"],["swim","swimming","nager"],["write","writing","écrire"],["run","running","courir"],["dance","dancing","danser"],["sit","sitting","s'asseoir"],
 ["play","playing","jouer"],["make","making","fabriquer"],["eat","eating","manger"],["sleep","sleeping","dormir"],["get","getting","obtenir"],["ride","riding","faire (du vélo)"],
 ["shop","shopping","faire les courses"],["cook","cooking","cuisiner"],["drink","drinking","boire"],["listen","listening","écouter"]];
const ingFaux=b=>{const f=[b+"ing"];if(/e$/.test(b))f.push(b+"ing",b.slice(0,-1)+"ing");else f.push(b+b.slice(-1)+"ing");f.push(b+"eing");return f;};
const ACTIVITES=[["reading a book","en train de lire un livre"],["eating an apple","en train de manger une pomme"],["sleeping","en train de dormir"],["playing football","en train de jouer au football"],
 ["watching TV","en train de regarder la télé"],["swimming","en train de nager"],["cooking dinner","en train de préparer le dîner"],["writing a letter","en train d'écrire une lettre"],
 ["drinking water","en train de boire de l'eau"],["riding a bike","en train de faire du vélo"],["singing","en train de chanter"],["painting a picture","en train de peindre un tableau"]];
const HABITS=[["a red jumper","un pull rouge"],["blue jeans","un jean bleu"],["a green dress","une robe verte"],["a white shirt","une chemise blanche"],["black trainers","des baskets noires"],
 ["a yellow T-shirt","un tee-shirt jaune"],["a grey coat","un manteau gris"],["pink pyjamas","un pyjama rose"],["a school uniform","un uniforme scolaire"],["brown shoes","des chaussures marron"]];
const MAUX=[["a headache","mal à la tête"],["a stomach ache","mal au ventre"],["a toothache","mal aux dents"],["a sore throat","mal à la gorge"],["a cold","un rhume"],["a cough","de la toux"],["a temperature","de la fièvre"]];
const PARTIES=[["head","la tête"],["back","le dos"],["knee","le genou"],["leg","la jambe"],["arm","le bras"],["foot","le pied"],["hand","la main"],["shoulder","l'épaule"]];
const WH=[["Where do you live? — In London.","Where"],["When is your birthday? — In May.","When"],["Who is your teacher? — Mrs Smith.","Who"],["What is your name? — Lucy.","What"],
 ["How many brothers have you got? — Two.","How many"],["How old are you? — I'm ten.","How old"],["What time is it? — It's three o'clock.","What"],["Where is the cat? — Under the bed.","Where"],
 ["When do you play football? — On Saturday.","When"],["Who is that boy? — He's my cousin.","Who"],["How many legs has a spider got? — Eight.","How many"],["Why are you sad? — Because I'm ill.","Why"],
 ["How much is it? — It's two pounds.","How much"],["What colour is your bike? — It's red.","What"]];
const MOTS_WH=[["What","que, quoi, quel"],["Where","où"],["When","quand"],["Who","qui"],["Why","pourquoi"],["How many","combien (de)"],["How old","quel âge"],["How much","combien (prix)"]];
const DIRECTIONS=[["Turn left.","Tourne à gauche."],["Turn right.","Tourne à droite."],["Go straight on.","Va tout droit."],["Cross the road.","Traverse la rue."],
 ["It's on the left.","C'est sur la gauche."],["It's on the right.","C'est sur la droite."],["It's opposite the bank.","C'est en face de la banque."],["It's next to the park.","C'est à côté du parc."],
 ["Take the first street on the left.","Prends la première rue à gauche."],["Take the second street on the right.","Prends la deuxième rue à droite."],["Stop at the traffic lights.","Arrête-toi aux feux."]];
const LIEUX_VILLE=[["station","la gare"],["library","la bibliothèque"],["museum","le musée"],["post office","la poste"],["hospital","l'hôpital"],["cinema","le cinéma"],["swimming pool","la piscine"],["park","le parc"]];
function prixEn(p){const l=Math.floor(p/100),c=p%100;if(!l)return `${enL(c)} pence`;if(!c)return `${enL(l)} pound${l>1?"s":""}`;return `${enL(l)} pound${l>1?"s":""} ${enL(c)}`;}
function prixAff(p){const l=Math.floor(p/100),c=p%100;return l?`£${l}${c?"."+String(c).padStart(2,"0"):""}`:`${c}p`;}
function prixAlea(){return pioche([alea(1,9)*100,alea(1,9)*100+pioche([10,20,25,50,75,99]),pioche([20,30,40,50,60,75,80,90,99]),alea(10,20)*100]);}
const prixFaux=p=>[p+100,p>100?p-100:p+200,p%100?p-p%100+(p%100===50?25:50):p+50,p+10].filter(x=>x>0&&x!==p);
const ARTICLES_MAGASIN=[["this book","ce livre"],["this pen","ce stylo"],["this T-shirt","ce tee-shirt"],["this cake","ce gâteau"],["this teddy bear","cet ours en peluche"],["this ball","ce ballon"]];
const COMMANDE=[["a cheese sandwich","un sandwich au fromage"],["an orange juice","un jus d'orange"],["some chips","des frites"],["a glass of water","un verre d'eau"],["some soup","de la soupe"],
 ["a cup of tea","une tasse de thé"],["an ice cream","une glace"],["some chicken","du poulet"],["a banana","une banane"],["some pasta","des pâtes"]];
const SOMEANY=[["There is ___ milk in the fridge.","some","il y a du lait (phrase affirmative)"],["Is there ___ milk?","any","question → any"],["There aren't ___ eggs.","any","négation → any"],
 ["I'd like ___ water, please.","some","demande polie → some"],["Have you got ___ sisters?","any","question → any"],["We haven't got ___ bread.","any","négation → any"],
 ["There are ___ apples on the table.","some","phrase affirmative → some"],["Would you like ___ cake?","some","offre polie → some"],["Are there ___ biscuits?","any","question → any"],["I've got ___ sweets.","some","phrase affirmative → some"]];
const BETES=[["a dolphin","un dauphin","🐬","in the sea","fish","swim"],["a penguin","un manchot","🐧","in cold places","fish","swim"],["a monkey","un singe","🐒","in the jungle","bananas","climb trees"],
 ["a kangaroo","un kangourou","🦘","in Australia","grass","jump"],["an owl","une chouette","🦉","in the forest","mice","fly"],["a lion","un lion","🦁","in Africa","meat","run fast"],
 ["a giraffe","une girafe","🦒","in Africa","leaves","eat leaves from tall trees"],["a squirrel","un écureuil","🐿️","in the forest","nuts","climb trees"],
 ["a bear","un ours","🐻","in the mountains","fish and honey","climb trees"]];
const MAJ=[["I live in France.","i live in France.","I live in france."],["We speak English.","We speak english.","we speak English."],["My birthday is in July.","My birthday is in july.","my birthday is in July."],
 ["See you on Monday!","See you on monday!","see you on Monday!"],["She's Italian.","She's italian.","she's Italian."],["Tom and I are friends.","Tom and i are friends.","tom and I are friends."],
 ["London is in England.","London is in england.","london is in England."],["Edinburgh is in Scotland.","Edinburgh is in scotland.","edinburgh is in Scotland."]];
const TEMPS_PREP=[["May","in","en mai"],["the morning","in","le matin"],["summer","in","en été"],["2026","in","en 2026"],["Monday","on","lundi"],["Saturday","on","samedi"],
 ["the 5th of November","on","le 5 novembre"],["Christmas Day","on","le jour de Noël"],["three o'clock","at","à trois heures"],["half past seven","at","à sept heures et demie"],
 ["midnight","at","à minuit"],["the weekend","at","le week-end"],["December","in","en décembre"],["winter","in","en hiver"],["Friday","on","vendredi"],["noon","at","à midi"]];
const METIERS=MOTS.filter(m=>m.t==="jobs");
const LIEUX_TRAVAIL=[["a doctor","in a hospital"],["a nurse","in a hospital"],["a teacher","in a school"],["a farmer","on a farm"],["a cook","in a restaurant"],["a vet","in an animal clinic"],["a pilot","on a plane"],["a baker","in a bakery"]];
const TRANSP=[["bus","en bus"],["car","en voiture"],["bike","à vélo"],["train","en train"],["plane","en avion"],["boat","en bateau"],["motorbike","à moto"],["taxi","en taxi"]];
const ETAIT=[["I","was","j'étais"],["you","were","tu étais"],["he","was","il était"],["she","was","elle était"],["it","was","il, elle était"],["we","were","nous étions"],["they","were","ils étaient"]];
const ETAIT_COMPL=[["at home yesterday","à la maison hier"],["in London last week","à Londres la semaine dernière"],["tired last night","fatigué(e) hier soir"],["at school on Monday","à l'école lundi"],
 ["happy yesterday","content(e) hier"],["at the beach last summer","à la plage l'été dernier"],["ill last week","malade la semaine dernière"],["at the cinema last Saturday","au cinéma samedi dernier"]];
const EMO=MOTS.filter(m=>m.t==="feelings");
const CONSIGNES2=[["Don't drop litter!","Ne jette pas de déchets par terre !"],["Turn off the light!","Éteins la lumière !"],["Recycle your bottles!","Recycle tes bouteilles !"],
 ["Don't waste water!","Ne gaspille pas l'eau !"],["Walk or cycle to school!","Va à l'école à pied ou à vélo !"],["Don't pick the flowers!","Ne cueille pas les fleurs !"],
 ["Close the door, please.","Ferme la porte, s'il te plaît."],["Turn off the tap!","Ferme le robinet !"],["Plant a tree!","Plante un arbre !"],["Be quiet in the forest!","Sois silencieux dans la forêt !"]];
const TEMPS_PHR=[["Every day, I ___ to school by bus.","go","am going","Every day = habitude → présent simple."],["Look! It ___ !","is snowing","snows","Look! = en ce moment → présent continu."],
 ["She usually ___ tea for breakfast.","drinks","is drinking","usually = d'habitude → présent simple."],["Be quiet! The baby ___ .","is sleeping","sleeps","En ce moment → présent continu."],
 ["We ___ swimming on Wednesdays.","go","are going","on Wednesdays = tous les mercredis → présent simple."],["Right now, I ___ a postcard.","am writing","write","Right now = en ce moment → présent continu."],
 ["My dad ___ in a bank.","works","is working","C'est son métier, une habitude → présent simple."],["Listen! Someone ___ the piano.","is playing","plays","Listen! = en ce moment → présent continu."],
 ["Today we ___ a castle.","are visiting","visit","Today, en vacances, maintenant → présent continu."],["Tom never ___ his homework late.","does","is doing","never = jamais → présent simple."]];

Object.assign(GG,{
 thereis:[
  ()=>{const [c,cf,sg]=pioche(CHOSES),[l]=pioche(LIEUX);return qcm(`Complète : « There ___ ${c} ${l}. »`,sg?"is":"are",[sg?"are":"is","have","has"],sg?"Un seul → There is.":"Plusieurs → There are.");},
  ()=>{const [c,cf,sg]=pioche(CHOSES),[l,lf]=pioche(LIEUX);return qcm(`Comment dit-on « Il y a ${cf} ${lf} » ?`,`There ${sg?"is":"are"} ${c} ${l}.`,[`There ${sg?"are":"is"} ${c} ${l}.`,`It has ${c} ${l}.`,`They are ${c} ${l}.`],`Il y a = There is (un) / There are (plusieurs).`);},
  ()=>{const [c,cf,sg]=pioche(CHOSES.filter(x=>x[2]));return qcm(`Choisis la phrase négative : There is ${c}.`,`There isn't ${c}.`,[`There aren't ${c}.`,`There not is ${c}.`,`There don't ${c}.`],`There isn't = il n'y a pas.`);},
  ()=>{const [c,cf,sg]=pioche(CHOSES);return qcm(`Quelle question est correcte ? (${c})`,`${sg?"Is":"Are"} there ${c}?`,[`There ${sg?"is":"are"} ${c}?`,`${sg?"Are":"Is"} there ${c}?`,`Do there ${c}?`],`Question : ${sg?"Is":"Are"} there…?`);},
  ()=>{const n=alea(2,9),r=pioche([["bedrooms","chambres"],["chairs","chaises"],["windows","fenêtres"],["trees","arbres"],["books","livres"]]);return ecoute(`There are ${enL(n)} ${r[0]} in the house.`,`🔊 Écoute. Combien y a-t-il de ${r[1]} ?`,String(n),[String(n+1),String(n-1),String(n+2)],`« ${enL(n)} ${r[0]} » : ${n} ${r[1]}.`);}],
 prepositions:[
  ()=>{const p=pioche(PREP2),m=pioche(MEUBLES),[o,of]=pioche(OBJ_POS);return qcm(`Comment dit-on « ${of} est ${prepFr(p,m)} » ?`,`${o} is ${p[0]} the ${m[0]}.`,melange(PREP2.filter(x=>x!==p)).map(x=>`${o} is ${x[0]} the ${m[0]}.`),`${p[1]} = ${p[0]}.`);},
  ()=>{const p=pioche(PREP2),m=pioche(MEUBLES),[o]=pioche(OBJ_POS);return ecoute(`${o} is ${p[0]} the ${m[0]}.`,"🔊 Écoute. Où est-il ?",prepFr(p,m),melange(PREP2.filter(x=>x!==p)).map(x=>prepFr(x,m)),`« ${p[0]} the ${m[0]} » : ${prepFr(p,m)}.`);},
  ()=>{const [en,fr]=pioche(PREP2);return qcm(`Que veut dire « ${en} » ?`,fr,PREP2.filter(x=>x[0]!==en).map(x=>x[1]),`${en} = ${fr}.`);},
  fx("Complète : « The desk is ___ the bed and the wardrobe. » (entre)","between",["behind","next","opposite"],"between = entre."),
  fx("« next to » veut dire…","à côté de",["derrière","en face de","sous"],"next to = à côté de.")],
 continuous:[
  ()=>{const [s,v]=pioche(SUJ_CONT),[h]=pioche(HABITS);return qcm(`Complète : « ${s} ___ wearing ${h}. »`,v,["am","are","is"].filter(x=>x!==v),`${s} → ${v} + verbe en -ing.`);},
  ()=>{const [s,v,c,fr]=pioche(SUJ_CONT),[h,hf]=pioche(HABITS);return qcm(`Comment dit-on « ${cap(fr)} ${fr==="je"?"porte":fr==="tu"?"portes":fr==="nous"?"portons":fr==="ils"?"portent":"porte"} ${hf} » (en ce moment) ?`.replace("Je porte","Je porte"),`${s}${c} wearing ${h}.`,[`${s} wearing ${h}.`,`${s}${c} wear ${h}.`,`${s} are wear ${h}.`],`Présent continu : be + verbe en -ing.`);},
  ()=>{const [b,i]=pioche(ING);return qcm(`Quelle est la forme en -ing de « ${b} » ?`,i,ingFaux(b).filter(x=>x!==i),`${b} → ${i}.`);},
  ()=>{const [b,i]=pioche(ING);return saisie(`Écris la forme en -ing de « ${b} ».`,[i],`${b} → ${i}${/e$/.test(b)?" (on enlève le e)":i.length===b.length+4?" (on double la consonne)":""}.`);},
  ()=>{const g=pioche(FILLES),[h,hf]=pioche(HABITS);return ecoute(`${g} is wearing ${h}.`,"🔊 Écoute. Que porte-t-elle ?",hf,melange(HABITS.filter(x=>x[0]!==h)).map(x=>x[1]),`« ${h} » = ${hf}.`);},
  fx("Le présent continu (be + -ing) sert à dire…","ce qu'on fait en ce moment",["ce qu'on fait tous les jours","ce qu'on a fait hier"],"I'm wearing a coat (en ce moment).")],
 continuous2:[
  ()=>{const [a,af]=pioche(ACTIVITES),g=pioche(GARCONS);return ecoute(`${g} is ${a}.`,"🔊 Écoute. Que fait le garçon ?",`il est ${af}`,melange(ACTIVITES.filter(x=>x[0]!==a)).map(x=>`il est ${x[1]}`),`« ${g} is ${a} » : il est ${af}.`);},
  ()=>{const [a,af]=pioche(ACTIVITES);return qcm(`Comment dit-on « Je suis ${af} » ?`,`I'm ${a}.`,[`I ${a}.`,`I'm ${a.replace(/ing\b/,"")}.`,`I do ${a}.`],`I'm + verbe en -ing.`);},
  ()=>{const [a]=pioche(ACTIVITES),[s,v]=pioche(SUJ_CONT.slice(2));const neg=v==="is"?"isn't":"aren't";return qcm(`Choisis la phrase négative : ${s} ${v} ${a}.`,`${s} ${neg} ${a}.`,[`${s} don't ${a}.`,`${s} doesn't ${a}.`,`${s} not ${a}.`],`Négation : ${neg} + -ing.`);},
  ()=>{const [a]=pioche(ACTIVITES),t=alea(0,1);return qcm(`« ${t?"Is she":"Are you"} ${a}? » — Oui. Que répond-on ?`,t?"Yes, she is.":"Yes, I am.",t?["Yes, she does.","Yes, she can.","Yes, she's."]:["Yes, I do.","Yes, I'm.","Yes, I can."],`Réponse courte avec be : ${t?"Yes, she is.":"Yes, I am."}`);},
  fx("Comment demande-t-on « Qu'est-ce que tu fais (en ce moment) ? » ?","What are you doing?",["What do you doing?","What you are doing?","What are you do?"],"What are you doing?")],
 matter:[
  ()=>{const [m,mf]=pioche(MAUX);return qcm(`Comment dit-on « J'ai ${mf} » ?`,`I've got ${m}.`,[`I'm ${m}.`,`My ${m.replace(/^an? /,"")}.`,`I've got ${pioche(MAUX.filter(x=>x[0]!==m))[0]}.`],`I've got ${m}.`);},
  ()=>{const [m,mf]=pioche(MAUX),f=pioche(FILLES);return qcm(`Comment dit-on « ${f} a ${mf} » ?`,`${f} has got ${m}.`,[`${f} have got ${m}.`,`${f} is ${m}.`,`${f} has ${m} got.`],`${f} = she → has got.`);},
  ()=>{const [m,mf]=pioche(MAUX);return ecoute(`What's the matter? — I've got ${m}.`,"🔊 Écoute. Qu'est-ce qui ne va pas ?",mf,melange(MAUX.filter(x=>x[0]!==m)).map(x=>x[1]),`« ${m} » = ${mf}.`);},
  ()=>{const [p,pf]=pioche(PARTIES);return qcm(`Comment dit-on « J'ai mal ${pf.startsWith("l'")?"à "+pf:pf.startsWith("le ")?"au "+pf.slice(3):"à "+pf} » ?`,`My ${p} hurts.`,[`My ${p} hurt.`,`I hurt ${p}.`,`My ${pioche(PARTIES.filter(x=>x[0]!==p))[0]} hurts.`],`My ${p} hurts = j'ai mal.`);},
  fx("Que veut dire « What's the matter? » ?","Qu'est-ce qui ne va pas ?",["Quelle heure est-il ?","Qu'est-ce que c'est ?","Comment t'appelles-tu ?"],"What's the matter? = Qu'est-ce qui ne va pas ?")],
 wh:[
  ()=>{const [q,w]=pioche(WH);const t=q.replace(w,"___");return qcm(`Complète : « ${t} »`,w,melange(MOTS_WH.map(x=>x[0]).filter(x=>x!==w&&!(w==="How much"&&x==="How many")&&!(w==="How many"&&x==="How much"))),`${w} = ${MOTS_WH.find(x=>x[0]===w)[1]}.`);},
  ()=>{const [en,fr]=pioche(MOTS_WH);return qcm(`Que veut dire « ${en} » ?`,fr,MOTS_WH.filter(x=>x[0]!==en).map(x=>x[1]),`${en} = ${fr}.`);},
  ()=>{const l=[["Where is the station?","un lieu"],["When is the party?","un moment"],["Who is your best friend?","une personne"],["How many cats have you got?","un nombre"],["What time is it?","une heure"]];
   const [en,fr]=pioche(l);return ecoute(en,"🔊 Écoute la question. Que demande-t-on ?",fr,l.filter(x=>x[0]!==en).map(x=>x[1]),`« ${en} » : on demande ${fr}.`);}],
 directions:[
  ()=>{const [en,fr]=pioche(DIRECTIONS);return qcm(`Que veut dire « ${en} » ?`,fr,melange(DIRECTIONS.filter(x=>x[0]!==en)).map(x=>x[1]),`${en} = ${fr}`);},
  ()=>{const [en,fr]=pioche(DIRECTIONS);return qcm(`Comment dit-on « ${fr} » ?`,en,melange(DIRECTIONS.filter(x=>x[0]!==en)).map(x=>x[0]),`${fr} = ${en}`);},
  ()=>{const [en,fr]=pioche(DIRECTIONS);return ecoute(en,"🔊 Écoute l'indication. Que dois-tu faire ?",fr,melange(DIRECTIONS.filter(x=>x[0]!==en)).map(x=>x[1]),`« ${en} » : ${fr}`);},
  ()=>{const [l,lf]=pioche(LIEUX_VILLE);return qcm(`Comment demande-t-on « Où est ${lf} ? » ?`,`Where is the ${l}?`,[`What is the ${l}?`,`Where the ${l} is?`,`Who is the ${l}?`],`Where is the ${l}, please?`);},
  ()=>{const [l,lf]=pioche(LIEUX_VILLE),d=pioche([["left","gauche"],["right","droite"]]);return ecoute(`The ${l} is on the ${d[0]}.`,"🔊 Écoute. Où est ce lieu ?",`${lf}, à ${d[1]}`,[`${lf}, à ${d[1]==="gauche"?"droite":"gauche"}`,...melange(LIEUX_VILLE.filter(x=>x[0]!==l)).slice(0,2).map(x=>`${x[1]}, à ${d[1]}`)],`« the ${l} » = ${lf} ; « on the ${d[0]} » = à ${d[1]}.`);}],
 prices:[
  ()=>{const p=prixAlea();return qcm(`Comment dit-on le prix ${prixAff(p)} ?`,`It's ${prixEn(p)}.`,prixFaux(p).map(x=>`It's ${prixEn(x)}.`),`${prixAff(p)} : ${prixEn(p)}.`);},
  ()=>{const p=prixAlea();return ecoute(`It's ${prixEn(p)}.`,"🔊 Écoute. Combien ça coûte ?",prixAff(p),prixFaux(p).map(prixAff),`« ${prixEn(p)} » = ${prixAff(p)}.`);},
  ()=>{const [a,af]=pioche(ARTICLES_MAGASIN);return qcm(`Comment demande-t-on « Combien coûte ${af} ? » ?`,`How much is ${a}?`,[`How many is ${a}?`,`How much ${a} is?`,`What price ${a}?`],`How much is…? = Combien coûte… ?`);},
  fx("Combien y a-t-il de pence dans une livre (£1) ?","100",["10","50","1000"],"£1 = 100 pence (comme 1 € = 100 centimes)."),
  fx("« expensive » veut dire…","cher",["bon marché","gratuit","petit"],"expensive = cher ; cheap = bon marché."),
  ()=>{const a=alea(2,9),b=alea(1,9);return saisie(`Un livre coûte £${a} et un stylo £${b}. Combien paies-tu en tout ? (en livres)`,[String(a+b),`£${a+b}`,`${a+b} pounds`],`£${a} + £${b} = £${a+b} (${prixEn((a+b)*100)}).`);}],
 wouldlike:[
  ()=>{const [c,cf]=pioche(COMMANDE);return qcm(`Comment commandes-tu poliment « ${cf} » ?`,`I'd like ${c}, please.`,[`I like ${c}, please.`,`I'd want ${c}, please.`,`I would ${c}, please.`],`I'd like = I would like = je voudrais.`);},
  ()=>{const [c,cf]=pioche(COMMANDE);return ecoute(`I'd like ${c}, please.`,"🔊 Écoute. Que commande l'enfant ?",cf,melange(COMMANDE.filter(x=>x[0]!==c)).map(x=>x[1]),`« ${c} » = ${cf}.`);},
  ()=>{const [s,b,e]=pioche(SOMEANY);return qcm(`Complète : « ${s} »`,b,[b==="some"?"any":"some"],`${b} : ${e}.`);},
  fx("« I'd like » veut dire…","je voudrais",["j'aime","j'ai","j'aimais"],"I'd like = I would like = je voudrais."),
  fx("Comment propose-t-on « Voudrais-tu de la soupe ? » ?","Would you like some soup?",["Do you like some soup?","Would you like any soup?","You would like soup?"],"Would you like some…? pour proposer.")],
 describe:[
  ()=>{const b=pioche(BETES);return qcm(`${b[2]} Choisis la bonne description.`,`It lives ${b[3]}. It eats ${b[4]}.`,melange(BETES.filter(x=>x[3]!==b[3]&&x[4]!==b[4])).map(x=>`It lives ${x[3]}. It eats ${x[4]}.`),`${cap(b[0])} lives ${b[3]} and eats ${b[4]}.`);},
  ()=>{const b=pioche(BETES);return qcm(`📖 Devinette : « It lives ${b[3]}. It eats ${b[4]}. It can ${b[5]}. » What is it?`,b[1],melange(BETES.filter(x=>x[3]!==b[3]||x[4]!==b[4])).filter(x=>x!==b).map(x=>x[1]),`C'est ${b[1]} (${b[0]}).`);},
  ()=>{const b=pioche(BETES);return ecoute(`It lives ${b[3]}. It eats ${b[4]}. It can ${b[5]}.`,"🔊 Écoute la devinette. Quel animal est-ce ?",b[1],melange(BETES.filter(x=>x[3]!==b[3]||x[4]!==b[4])).filter(x=>x!==b).map(x=>x[1]),`C'est ${b[1]} (${b[0]}).`);},
  fx("Complète : « A whale ___ in the sea. »","lives",["live","living","is live"],"a whale = it → lives."),
  fx("Complète : « Penguins ___ fly. »","can't",["doesn't","isn't","don't can"],"Penguins can't fly : les manchots ne savent pas voler.")],
 capitals:[
  ()=>{const [b,f1,f2]=pioche(MAJ);return qcm("Quelle phrase est bien écrite ?",b,[f1,f2],`En anglais, prennent une majuscule : I, les pays, les nationalités, les langues, les jours et les mois. → ${b}`);},
  fx("En anglais, « je » (I) s'écrit…","toujours avec une majuscule",["en minuscule","avec une majuscule seulement en début de phrase"],"I est toujours en majuscule : Tom and I."),
  fx("Les jours de la semaine prennent-ils une majuscule en anglais ?","oui : Monday",["non : monday"],"Monday, Tuesday… avec une majuscule."),
  fx("Les nationalités prennent-elles une majuscule en anglais ?","oui : French",["non : french"],"I'm French. She's English."),
  fx("Quelle est la capitale du Royaume-Uni ?","London",["Edinburgh","Cardiff","Dublin"],"London est la capitale du Royaume-Uni et de l'Angleterre."),
  fx("Quelle est la capitale de l'Écosse ?","Edinburgh",["London","Cardiff","Belfast"],"Edinburgh (Édimbourg)."),
  fx("Comment s'appelle le fleuve qui traverse Londres ?","the Thames",["the Seine","the Loire","the Rhine"],"the Thames = la Tamise."),
  fx("Comment s'appelle le métro de Londres ?","the Underground (the Tube)",["the Metro","the Subway","the Train"],"Les Londoniens l'appellent aussi « the Tube »."),
  ()=>{const l=[["Big Ben","une grande cloche (et sa tour)"],["Buckingham Palace","le palais du roi"],["the Thames","le fleuve de Londres"],["Tower Bridge","un célèbre pont"],["the London Eye","une grande roue"]];
   const [en,fr]=pioche(l);return ecoute(`Look! It's ${en}!`,"🔊 Écoute. Qu'est-ce que l'enfant voit à Londres ?",fr,l.filter(x=>x[0]!==en).map(x=>x[1]),`« ${en} » : ${fr}.`);}],
 inonat:[
  ()=>{const [m,p,fr]=pioche(TEMPS_PREP);return qcm(`Complète : « The party is ___ ${m}. » (${fr})`,p,["in","on","at"].filter(x=>x!==p),p==="in"?"in + mois, saison, année, moment de la journée.":p==="on"?"on + jour, date.":"at + heure (et at the weekend).");},
  ()=>{const [m,p,fr]=pioche(TEMPS_PREP);return ecoute(`See you ${p} ${m}!`,"🔊 Écoute. Quand se retrouvent-ils ?",fr,melange(TEMPS_PREP.filter(x=>x[2]!==fr)).map(x=>x[2]),`« ${p} ${m} » = ${fr}.`);},
  fx("On dit « on » devant…","un jour ou une date : on Monday",["un mois : on May","une heure : on three o'clock"],"on Monday, on the 5th of May."),
  fx("On dit « at » devant…","une heure : at six o'clock",["un mois : at June","une saison : at summer"],"at six o'clock, at midnight."),
  fx("On dit « in » devant…","un mois ou une saison : in July",["un jour : in Monday","une heure : in two o'clock"],"in July, in winter, in the morning.")],
 jobsg:[
  ()=>{const m=pioche(METIERS),g=alea(0,1);const n=g?pioche(GARCONS):pioche(FILLES),s=g?"He":"She";return qcm(`« What does ${n} do? » ${n} est ${m.fr.split(", ")[g?0:m.fr.split(", ").length-1].replace(/^(un|une) /,"")}. Que répond-on ?`,`${s}'s ${m.en}.`,[`${s}'s ${sansArticle(m.en)}.`,`${s} does ${m.en}.`,`${s}'s ${pioche(METIERS.filter(x=>x!==m)).en}.`],`En anglais, on garde l'article : ${s}'s ${m.en}.`);},
  ()=>{const m=pioche(METIERS);return ecoute(`My mum is ${m.en}.`,"🔊 Écoute. Quel est le métier de la maman ?",m.fr,melange(METIERS.filter(x=>x!==m)).map(x=>x.fr),`« ${m.en} » = ${m.fr}.`);},
  ()=>{const [j,l]=pioche(LIEUX_TRAVAIL);return qcm(`Complète : « ${cap(j)} works ___. »`,l,melange(LIEUX_TRAVAIL.filter(x=>x[1]!==l)).map(x=>x[1]),`${cap(j)} works ${l}.`);},
  fx("Comment demande-t-on « Que fait ton père (comme métier) ? » ?","What does your father do?",["What do your father do?","What is your father doing?","What your father does?"],"What does he do? = Quel est son métier ?"),
  fx("Comment dit-on « Je veux être pilote » ?","I want to be a pilot.",["I want be a pilot.","I want to be pilot.","I want to a pilot."],"want to be + a + métier.")],
 howgo:[
  ()=>{const [t,tf]=pioche(TRANSP);return qcm(`Comment dit-on « Je vais à l'école ${tf} » ?`,`I go to school by ${t}.`,[`I go to school with the ${t}.`,`I go to school in ${t}.`,`I go at school by ${t}.`],`by + transport, sans article.`);},
  ()=>{const [t,tf]=pioche(TRANSP),g=pioche(FILLES);return qcm(`« How does ${g} go to school? » Elle y va ${tf}. Que répond-on ?`,`She goes by ${t}.`,[`She go by ${t}.`,`She goes on ${t}.`,`She goes with ${t}.`],`She → goes ; by ${t}.`);},
  ()=>{const [t,tf]=pioche(TRANSP);return ecoute(`We go to the seaside by ${t}.`,"🔊 Écoute. Comment la famille voyage-t-elle ?",tf,[...melange(TRANSP.filter(x=>x[0]!==t)).map(x=>x[1]),"à pied"],`« by ${t} » = ${tf}.`);},
  fx("Comment dit-on « Je vais à l'école à pied » ?","I walk to school.",["I go to school by foot.","I go to school with feet.","I walk at school."],"I walk to school ou I go to school on foot."),
  fx("Comment demande-t-on « Comment vas-tu à l'école ? » ?","How do you go to school?",["How are you go to school?","What do you go to school?","How you go to school?"],"How do you go to school?")],
 was:[
  ()=>{const [s,v]=pioche(ETAIT),[c]=pioche(ETAIT_COMPL);return qcm(`Complète : « ${cap(s)} ___ ${c}. »`,v,[v==="was"?"were":"was","is","are"],`${s} → ${v}.`);},
  ()=>{const [s,v,fr]=pioche(ETAIT),[c,cf]=pioche(ETAIT_COMPL);return qcm(`Comment dit-on « ${cap(fr)} ${cf} » ?`,`${cap(s)} ${v} ${c}.`,[`${cap(s)} ${v==="was"?"were":"was"} ${c}.`,`${cap(s)} ${v==="was"?(s==="I"?"am":"is"):"are"} ${c}.`,`${cap(s)} have ${c}.`],`${fr} = ${s} ${v}.`);},
  ()=>{const [s,v,fr]=pioche(ETAIT),[c,cf]=pioche(ETAIT_COMPL);const pres=v==="were"?"are":s==="I"?"am":"is";return ecoute(`${cap(s)} ${pres} ${c.replace(/ (yesterday|last \w+|on Monday)$/,"")} now.`,"🔊 Écoute. Cette phrase est-elle au présent ou au passé ?","au présent",["au passé"],`« ${pres} » : c'est le présent (le passé serait « ${v} »).`);},
  ()=>{const [s,v,fr]=pioche(ETAIT),[c,cf]=pioche(ETAIT_COMPL);return ecoute(`${cap(s)} ${v} ${c}.`,"🔊 Écoute. Cette phrase est-elle au présent ou au passé ?","au passé",["au présent"],`« ${v} » : c'est le passé de « be ».`);},
  fx("« was » et « were » sont le passé de…","be (être)",["have (avoir)","go (aller)","can (pouvoir)"],"I am → I was ; we are → we were."),
  fx("Avec « we, you, they », le passé de « be » est…","were",["was","wase"],"we were, you were, they were.")],
 was2:[
  ()=>{const [s,v]=pioche(ETAIT),[c]=pioche(ETAIT_COMPL);const neg=v==="was"?"wasn't":"weren't";return qcm(`Choisis la phrase négative : ${cap(s)} ${v} ${c}.`,`${cap(s)} ${neg} ${c}.`,[`${cap(s)} ${v==="was"?"weren't":"wasn't"} ${c}.`,`${cap(s)} didn't ${c}.`,`${cap(s)} not ${v} ${c}.`],`Négation : ${neg}.`);},
  ()=>{const [s,v]=pioche(ETAIT.filter(x=>x[0]!=="I")),[c]=pioche(ETAIT_COMPL);return qcm(`Quelle question est correcte ? (${s} / ${c})`,`${cap(v)} ${s} ${c}?`,[`${cap(s)} ${v} ${c}?`,`${v==="was"?"Were":"Was"} ${s} ${c}?`,`Did ${s} ${c}?`],`Question : on inverse → ${cap(v)} ${s}…?`);},
  ()=>{const e=pioche(EMO);return qcm(`« Were you ${e.en} yesterday? » — Oui. Que répond-on ?`,"Yes, I was.",["Yes, I were.","Yes, I did.","Yes, I am."],"Yes, I was. / No, I wasn't.");},
  ()=>{const e=pioche(EMO);return ecoute(`I was ${e.en} yesterday.`,"🔊 Écoute. Comment se sentait l'enfant hier ?",e.fr,melange(EMO.filter(x=>!conflit(x,e))).map(x=>x.fr),`« ${e.en} » = ${e.fr}.`);},
  ()=>{const e=pioche(EMO);return qcm(`Que veut dire « ${e.en} » ?`,e.fr,autres(e,"fr"),`${e.en} = ${e.fr}.`);}],
 orders:[
  ()=>{const [en,fr]=pioche(CONSIGNES2);return qcm(`Que veut dire « ${en} » ?`,fr,melange(CONSIGNES2.filter(x=>x[0]!==en)).map(x=>x[1]),`${en} = ${fr}`);},
  ()=>{const [en,fr]=pioche(CONSIGNES2);return qcm(`Comment dit-on « ${fr} » ?`,en,melange(CONSIGNES2.filter(x=>x[0]!==en)).map(x=>x[0]),`${fr} = ${en}`);},
  ()=>{const [en,fr]=pioche(CONSIGNES2);return ecoute(en,"🔊 Écoute la consigne. Que veut-elle dire ?",fr,melange(CONSIGNES2.filter(x=>x[0]!==en)).map(x=>x[1]),`« ${en} » : ${fr}`);},
  fx("Pour interdire quelque chose, on dit…","Don't + verbe : Don't run!",["No + verbe : No run!","Not + verbe : Not run!"],"Don't drop litter!"),
  fx("« You mustn't drop litter » veut dire…","Tu ne dois pas jeter de déchets.",["Tu dois jeter tes déchets.","Tu peux jeter tes déchets.","Tu as jeté tes déchets."],"mustn't = ne pas devoir (interdiction).")],
 tenses:[
  ()=>{const [s,b,f,e]=pioche(TEMPS_PHR);return qcm(`Complète : « ${s} »`,b,[f],e);},
  fx("Quel mot annonce plutôt le présent continu ?","now",["every day","usually","on Sundays"],"now (maintenant) → présent continu."),
  fx("Quel mot annonce plutôt le présent simple ?","every day",["now","at the moment","Look!"],"every day (tous les jours) → présent simple."),
  ()=>{const l=[["I'm swimming in the sea.","en ce moment"],["I swim every Saturday.","une habitude"]];const [en,fr]=pioche(l);return ecoute(en,"🔊 Écoute. L'enfant parle-t-il d'une habitude ou de maintenant ?",fr,l.filter(x=>x[0]!==en).map(x=>x[1]),fr==="en ce moment"?"« I'm swimming » : présent continu, en ce moment.":"« I swim every Saturday » : présent simple, une habitude.");},
  ()=>{const [b,i,fr]=pioche(ING);return qcm(`Complète : « Look! The children are ___ . »`,i,[b,b+"s",`to ${b}`],`are + verbe en -ing : ${i}.`);}]
});
const REV_G={grev1:["be","havegot","possessive","from","favourite","plural"],grev2:["time","present","third","can","dodoes","dates"],
 grev3:["thereis","prepositions","continuous","continuous2","matter","wh"],grev4:["directions","prices","wouldlike","describe","capitals","inonat"],
 grev5:["jobsg","howgo","was","was2","orders","tenses","third","continuous"],grev6:Object.keys(GG)};
const REV_V={rev1:["intro","num100","family","countries","school","halloween"],rev2:["time","routine","calendar","hobbies","animals","xmas"],
 rev3:["house","furniture","clothes","actions","health","weather"],rev4:["town","shops","food","wild","uk","festivals"],
 rev5:["jobs","transport","past","feelings","nature","holidays","routine","town"],rev6:["intro","family","countries","school","time","routine","hobbies","animals","house","furniture","clothes","actions","health","weather","town","shops","food","wild","uk","jobs","transport","past","feelings","nature","holidays"]};

/* =========================================================
   7. VOCABULAIRE, ÉCOUTE, LECTURE
   ========================================================= */
function prochesNombre(n){
  const c=[];
  if(n>=13&&n<=19)c.push((n-10)*10);
  if(n%10===0&&n>=30&&n<=90)c.push(n/10+10);
  if(n>20&&n%10)c.push((n%10)*10+Math.floor(n/10));
  c.push(n+1,n-1,n+10,n-10,n+2);
  return [...new Set(c)].filter(x=>x>=1&&x<=100&&x!==n);
}
function exoNombre(){
  const n=alea(0,2)?alea(13,99):alea(2,10)*10,p=prochesNombre(n),t=alea(1,7);
  if(t===1)return qcm(`Comment dit-on ${n} en anglais ?`,enL(n),p.slice(0,3).map(enL),`${n} se dit « ${enL(n)} ».`);
  if(t===2)return saisie(`Écris ${n} en lettres, en anglais.`,variantesNombre(n).slice(1),`${n} s'écrit « ${enL(n)} ».`);
  if(t===3)return ecouteSaisie(enL(n),"🔊 Écoute et écris le nombre en chiffres.",variantesNombre(n),`Tu as entendu « ${enL(n)} » : ${n}.`);
  if(t===4)return ecoute(enL(n),"🔊 Écoute. Quel nombre entends-tu ?",String(n),p.slice(0,3).map(String),`Tu as entendu « ${enL(n)} » : ${n}.`);
  if(t===5){const a=alea(10,60),b=alea(5,99-a);return qcm(`Combien font ${a} + ${b} ? Choisis en anglais.`,enL(a+b),prochesNombre(a+b).slice(0,3).map(enL),`${a} + ${b} = ${a+b} : ${enL(a+b)}.`);}
  if(t===6){const ch=[alea(10,99),alea(10,99),alea(10,99)];return ecouteSaisie(`My phone number is oh six, ${ch.map(enL).join(", ")}.`,"🔊 Écoute le numéro de téléphone : 06 … Écris les trois nombres qui suivent, séparés par des espaces (ex. : 12 34 56).",[ch.join(" "),ch.join(""),ch.join("-"),ch.join(", "),ch.join(",")],`Le numéro est 06 ${ch.join(" ")}. En anglais, on dit « oh » pour le zéro.`);}
  const a=alea(30,99),b=alea(1,a-10);return qcm(`Combien font ${a} − ${b} ? Choisis en anglais.`,enL(a-b),prochesNombre(a-b).slice(0,3).map(enL),`${a} − ${b} = ${a-b} : ${enL(a-b)}.`);
}
const EC_TRAD=["🔊 Écoute et choisis la bonne traduction.","🔊 Écoute bien. Qu'est-ce que ça veut dire ?"];
const peutSaisir=m=>{const w=sansArticle(m.en);return /^[a-z]{3,9}$/.test(w);};
function exoMot(tag){
  const m=pioche(motsDe(tag)),t=alea(1,7);
  if(t===1)return qcm(`Que veut dire « ${m.en} » ?`,m.fr,autres(m,"fr"),`« ${m.en} » veut dire « ${m.fr} ».`);
  if(t===2)return qcm(`Comment dit-on « ${m.fr} » en anglais ?`,m.en,autres(m,"en"),`« ${m.fr} » se dit « ${m.en} ».`);
  if(t===3)return ecoute(m.en,pioche(EC_TRAD),m.fr,autres(m,"fr"),`Tu as entendu « ${m.en} » : ${m.fr}.`);
  if(t===4&&peutSaisir(m))return saisie(`Écris en anglais : « ${m.fr} »`,[...new Set([m.en,sansArticle(m.en)])],`« ${m.fr} » s'écrit « ${m.en} ».`);
  if(t===5)return lirePhrase(tag)||ecoute(m.en,"🔊 Écoute et choisis le mot que tu entends.",m.en,autres(m,"en"),`Tu as entendu « ${m.en} » (${m.fr}).`);
  if(t===6&&m.e)return qcm(`${m.e} Comment dit-on en anglais ?`,m.en,autres(m,"en"),`${m.e} = ${m.en} (${m.fr}).`);
  return vraiFaux(tag)||ecoute(m.en,"🔊 Écoute et choisis le mot que tu entends.",m.en,autres(m,"en"),`Tu as entendu « ${m.en} » (${m.fr}).`);
}
function vraiFaux(tag){
  const l=MOTS.filter(x=>x.t===tag&&x.e&&/^an? /.test(x.en));if(l.length<3)return null;
  const m=pioche(l),autresL=l.filter(x=>!conflit(x,m)),vrai=autresL.length?alea(0,1):1,o=vrai?m:pioche(autresL);
  return qcm(`📖 ${m.e} Lis : « It's ${o.en}. » Vrai ou faux ?`,vrai?"Vrai":"Faux",[vrai?"Faux":"Vrai"],vrai?`Vrai : ${m.e} = ${m.en} (${m.fr}).`:`Faux : ${m.e} = ${m.en} (${m.fr}), et « ${o.en} » = ${o.fr}.`);
}
const resoudreV=t=>REV_V[t]?pioche(REV_V[t]):t;
const resoudreG=t=>REV_G[t]?pioche(REV_G[t]):t;
function exoV(tag){
  tag=resoudreV(tag);
  if(tag==="num100"&&alea(1,3)<=2)return exoNombre();
  if(tag==="time"&&alea(0,1))return pioche(GG.time)();
  return exoMot(tag);
}
function exoG(tag){return pioche(GG[resoudreG(tag)])();}

/* L'écoute */
const PAIRES=[[["ship","un bateau"],["sheep","un mouton"]],[["three","trois"],["tree","un arbre"]],[["hat","un chapeau"],["cat","un chat"],["cap","une casquette"]],
 [["live","habiter"],["leave","partir"]],[["sit","s'asseoir"],["seat","un siège"]],[["thirteen","13"],["thirty","30"]],[["fourteen","14"],["forty","40"]],
 [["fifteen","15"],["fifty","50"]],[["sixteen","16"],["sixty","60"]],[["seventeen","17"],["seventy","70"]],[["eighteen","18"],["eighty","80"]],[["nineteen","19"],["ninety","90"]],
 [["house","une maison"],["mouse","une souris"]],[["mouse","une souris"],["mouth","une bouche"]],[["coat","un manteau"],["goat","une chèvre"],["boat","un bateau"]],
 [["rain","la pluie"],["train","un train"]],[["walk","marcher"],["work","travailler"]],[["hungry","affamé"],["angry","en colère"]],[["hill","une colline"],["heel","un talon"]],
 [["bed","un lit"],["bad","mauvais"]],[["cheap","bon marché"],["chip","une frite"]],[["thin","mince"],["fin","une nageoire"],["tin","une boîte de conserve"]],
 [["three","trois"],["free","gratuit"]],[["sock","une chaussette"],["clock","une horloge"]],[["long","long"],["wrong","faux"]],[["hat","un chapeau"],["hot","chaud"],["hut","une cabane"]]];
function sonsProches(){
  const g=pioche(PAIRES),[w,fr]=pioche(g),f=g.filter(x=>x[0]!==w).map(x=>x[0]);
  return ecoute(w,"🔊 Écoute bien : quel mot entends-tu ?",w,f,`Tu as entendu « ${w} » (${fr}). Les autres : ${g.filter(x=>x[0]!==w).map(x=>`« ${x[0]} » (${x[1]})`).join(", ")}.`);
}
function ecoutePhrase(tag){
  const l=phrasesDe(tag);if(!l.length)return null;const p=pioche(l);
  return ecoute(p.en,"🔊 Écoute la phrase. Que veut-elle dire ?",p.fr,autresPhrases(p,"fr"),`Tu as entendu « ${p.en} » : ${p.fr}`);
}
function ecouteMot(tag){
  const m=pioche(motsDe(tag));
  if(alea(0,1))return ecoute(m.en,pioche(EC_TRAD),m.fr,autres(m,"fr"),`Tu as entendu « ${m.en} » : ${m.fr}.`);
  return ecoute(m.en,"🔊 Écoute et choisis le mot que tu entends.",m.en,autres(m,"en"),`Tu as entendu « ${m.en} » (${m.fr}).`);
}
function ecouteMeteo(){
  const l=MOTS.filter(m=>m.t==="weather"&&m.e&&/y$/.test(m.en)),m=pioche(l);
  return ecoute(`It's ${m.en} today.`,"🔊 Écoute la météo. Quel temps fait-il ?",m.fr,melange(l.filter(x=>x!==m)).map(x=>x.fr),`« ${m.en} » = ${m.fr}.`);
}
/* Exercices d'écoute propres à un thème (pris dans la grammaire associée) */
const LG={num100:"n",intro:"be",family:"possessive",countries:"from",school:"favourite",halloween:"plural",time:"time",routine:"present",calendar:"third",
 hobbies:"can",animals:"dodoes",xmas:"dates",house:"thereis",furniture:"prepositions",clothes:"continuous",actions:"continuous2",health:"matter",weather:"w",
 town:"directions",shops:"prices",food:"wouldlike",wild:"describe",uk:"capitals",festivals:"inonat",jobs:"jobsg",transport:"howgo",past:"was",feelings:"was2",nature:"orders",holidays:"tenses"};
function ecouteTheme(tag){
  const k=LG[tag];if(!k)return null;
  if(k==="w")return ecouteMeteo();
  for(let i=0;i<25;i++){const q=k==="n"?exoNombre():pioche(GG[k])();if(q.audio)return q;}
  return null;
}
function exoL(tag){
  tag=resoudreV(tag);const r=alea(1,10);let q=null;
  if(r<=4)q=ecouteTheme(tag);
  else if(r===5)q=sonsProches();
  else if(r<=8)q=ecoutePhrase(tag);
  return q||ecouteMot(tag);
}

/* La lecture */
function lirePhrase(tag){
  const l=phrasesDe(tag);if(!l.length)return null;const p=pioche(l);
  if(alea(0,1))return qcm(`📖 Lis : « ${p.en} » Que veut dire cette phrase ?`,p.fr,autresPhrases(p,"fr"),`« ${p.en} » : ${p.fr}`);
  return qcm(`📖 Quelle phrase veut dire « ${p.fr} » ?`,p.en,autresPhrases(p,"en"),`« ${p.fr} » : ${p.en}`);
}
function lireTexte(tag){
  const l=TX.filter(x=>x.t===tag);if(!l.length)return null;const tx=pioche(l),[q,b,f,e]=pioche(tx.q);
  return qcm(`📖 Lis : « ${tx.x} » ${q}`,b,f,e);
}
function fiche(){
  const fille=alea(0,1),p=fille?pioche(FILLES):pioche(GARCONS),il=fille?"She":"He",age=alea(9,12),pays=pioche(PAYS),t=pioche(TALENTS),t2=pioche(TALENTS.filter(x=>x!==t)),m=pioche(MATIERES);
  const texte=`This is ${p}. ${il}'s ${enL(age)} years old and ${fille?"she":"he"}'s from ${pays[0]}. ${il} can ${t[0]}, but ${fille?"she":"he"} can't ${t2[0]}. ${fille?"Her":"His"} favourite subject is ${m[0]}.`;
  const qs=[
   ()=>qcm(`📖 Lis : « ${texte} » Quel âge a ${p} ?`,`${age} ans`,[`${age+1} ans`,`${age-1} ans`,`${age+10} ans`],`« ${enL(age)} years old » : ${age} ans.`),
   ()=>qcm(`📖 Lis : « ${texte} » D'où vient ${p} ?`,pays[2].replace(/^(de |d'|du |des )/,""),melange(PAYS.filter(x=>x!==pays)).map(x=>x[2].replace(/^(de |d'|du |des )/,"")),`« from ${pays[0]} ».`),
   ()=>qcm(`📖 Lis : « ${texte} » Que ne sait pas faire ${p} ?`,t2[1],[t[1],...melange(TALENTS.filter(x=>x!==t&&x!==t2)).map(x=>x[1])],`« can't ${t2[0]} » : ne sait pas ${t2[1]}.`),
   ()=>qcm(`📖 Lis : « ${texte} » Quelle est sa matière préférée ?`,m[1],melange(MATIERES.filter(x=>x!==m)).map(x=>x[1]),`« favourite subject is ${m[0]} ».`)];
  return pioche(qs)();
}
const FICHE_OK=["intro","family","countries","school","hobbies","rev1","rev2","rev5","rev6"];
function exoR(tag){
  const brut=tag;tag=resoudreV(tag);const r=alea(1,9);let q=null;
  if(r<=4)q=lireTexte(tag);
  else if(r===5&&(FICHE_OK.includes(tag)||FICHE_OK.includes(brut)))q=fiche();
  else if(r===6)q=vraiFaux(tag);
  return q||lirePhrase(tag)||exoMot(tag);
}

/* =========================================================
   8. LES SÉANCES
   ========================================================= */
function semaineAvant(semaine){const c=SEMAINES.filter(s=>s.n<semaine&&!REV_V[s.tv]);return c.length?pioche(c):SEMAINES[semaine-1];}
function serie(plan){
  const out=[],vus=new Set();
  for(const f of plan){let q;for(let k=0;k<15;k++){q=f();if(!vus.has(q.enonce+"|"+(q.audio||"")))break;}vus.add(q.enonce+"|"+(q.audio||""));out.push(q);}
  return out;
}
function seanceHorsLigne(mat,semaine){
  const s=SEMAINES[semaine-1],av=semaineAvant(semaine);
  const F={v:t=>()=>exoV(t.tv),g:t=>()=>exoG(t.tg),l:t=>()=>exoL(t.tl),r:t=>()=>exoR(t.tr)};
  if(mat==="rev")return serie([F.v(s),F.g(s),F.l(s),F.r(s),F.g(s),F.v(av),F.l(av)]);
  return serie([F[mat](s),F[mat](s),F[mat](s),F[mat](s),F[mat](av)]);
}

/* =========================================================
   9. LES LEÇONS (une par semaine)
   La liste des mots vient de MOTS ; la règle de grammaire est écrite ici.
   ========================================================= */
const LECON_G={
 be:`<h4>Le verbe be (être)</h4><p>Au présent : <b>I am</b>, <b>you are</b>, <b>he / she / it is</b>, <b>we are</b>, <b>they are</b>. À l'oral, on utilise la forme courte : I'm, you're, he's. Négation : <b>isn't</b>, <b>aren't</b>, <b>I'm not</b>. Question : on inverse.</p><ul><li><i>I'm ten. She's from London.</i> — J'ai dix ans. Elle vient de Londres.</li><li><i>We aren't tired.</i> — Nous ne sommes pas fatigués.</li><li><i>Are you in my class? — Yes, I am.</i> — Es-tu dans ma classe ? — Oui.</li></ul><p><b>Astuce :</b> l'âge se dit avec be : <i>I'm ten</i>, jamais <i>I have ten</i>.</p>`,
 havegot:`<h4>have got / has got (avoir)</h4><p><b>I / you / we / they have got</b> (I've got) ; <b>he / she / it has got</b> (he's got). Négation : <b>haven't got</b>, <b>hasn't got</b>. Question : <b>Have you got…? Has she got…?</b></p><ul><li><i>I've got a sister.</i> — J'ai une sœur.</li><li><i>He hasn't got a bike.</i> — Il n'a pas de vélo.</li><li><i>Has she got a pet? — Yes, she has.</i> — A-t-elle un animal ? — Oui.</li></ul><p><b>Attention :</b> <i>he's got</i> = he <b>has</b> got, alors que <i>he's ten</i> = he <b>is</b> ten.</p>`,
 possessive:`<h4>Les adjectifs possessifs</h4><p><b>my</b> (mon, ma, mes), <b>your</b> (ton, ta, tes), <b>his</b> (son, sa, ses : à lui), <b>her</b> (son, sa, ses : à elle), <b>its</b> (à un animal, une chose), <b>our</b> (notre, nos), <b>their</b> (leur, leurs).</p><ul><li><i>This is Tom and his sister.</i> — Voici Tom et sa sœur.</li><li><i>This is Emma and her brother.</i> — Voici Emma et son frère.</li><li><i>Our parents and their car.</i> — Nos parents et leur voiture.</li></ul><p><b>Astuce :</b> en anglais, le possessif dépend du <b>possesseur</b> (garçon → his, fille → her), pas de l'objet.</p>`,
 from:`<h4>Where are you from?</h4><p>Pour dire d'où l'on vient : <b>I'm from</b> + pays. Pour la nationalité : <b>I'm</b> + nationalité. Pays, nationalités et langues prennent une <b>majuscule</b>.</p><ul><li><i>Where are you from? — I'm from France.</i> — D'où viens-tu ? — Je viens de France.</li><li><i>I'm French. I speak French and English.</i> — Je suis français. Je parle français et anglais.</li><li><i>She's from Scotland. She's Scottish.</i> — Elle vient d'Écosse. Elle est écossaise.</li></ul><p><b>Culture :</b> le Royaume-Uni (the United Kingdom) réunit l'Angleterre, l'Écosse, le pays de Galles et l'Irlande du Nord.</p>`,
 favourite:`<h4>My favourite subject is…</h4><p>Pour dire ce que tu préfères : <b>My favourite</b> + nom. Pour expliquer : <b>because</b> (parce que). Pour opposer : <b>but</b> (mais).</p><ul><li><i>My favourite subject is art.</i> — Ma matière préférée est les arts plastiques.</li><li><i>I like maths because it's fun.</i> — J'aime les maths parce que c'est amusant.</li><li><i>I like music, but I don't like history.</i> — J'aime la musique, mais pas l'histoire.</li></ul><p><b>Attention :</b> pas de « the » devant les matières : <i>I like science</i>.</p>`,
 plural:`<h4>Le pluriel des noms</h4><p>On ajoute <b>-s</b> (cats). Après -s, -x, -ch, -sh : <b>-es</b> (boxes, witches). Consonne + y → <b>-ies</b> (baby → babies). Certains mots sont <b>irréguliers</b>.</p><ul><li><i>one child → two children</i> — un enfant, deux enfants</li><li><i>one mouse → three mice</i> — une souris, trois souris</li><li><i>one tooth → teeth ; one foot → feet ; one sheep → two sheep</i></li></ul><p><b>À retenir aussi :</b> man → men, woman → women, wolf → wolves.</p>`,
 time:`<h4>What time is it?</h4><p>Pour l'heure pile : <b>o'clock</b>. Pour et quart : <b>quarter past</b>. Pour et demie : <b>half past</b>. Pour moins le quart : <b>quarter to</b> + l'heure suivante.</p><ul><li><i>It's three o'clock.</i> — Il est trois heures. (3:00)</li><li><i>It's half past seven.</i> — Il est sept heures et demie. (7:30)</li><li><i>It's quarter to nine.</i> — Il est neuf heures moins le quart. (8:45)</li></ul><p><b>Astuce :</b> <b>past</b> = après l'heure ; <b>to</b> = avant l'heure. Les minutes aussi : <i>ten past two</i> (2:10), <i>twenty to six</i> (5:40).</p>`,
 present:`<h4>Le présent simple (I, you, we, they)</h4><p>Il sert à parler des <b>habitudes</b>. Le verbe ne change pas. Négation : <b>don't</b> + verbe. Question : <b>Do you…?</b></p><ul><li><i>I get up at seven every day.</i> — Je me lève à sept heures tous les jours.</li><li><i>We don't go to school on Sunday.</i> — Nous n'allons pas à l'école le dimanche.</li><li><i>Do you have breakfast? — Yes, I do.</i> — Prends-tu un petit-déjeuner ? — Oui.</li></ul><p><b>Mots utiles :</b> every day (tous les jours), usually (d'habitude), always (toujours), never (jamais).</p>`,
 third:`<h4>Le présent simple : he, she, it + -s</h4><p>Avec <b>he, she, it</b>, on ajoute <b>-s</b> au verbe. Après -ch, -sh, -s, -x, -o : <b>-es</b>. Consonne + y : <b>-ies</b>. Négation : <b>doesn't</b> + verbe sans -s.</p><ul><li><i>She plays tennis. He watches TV.</i> — Elle joue au tennis. Il regarde la télé.</li><li><i>Tom goes to school. Lily studies English.</i> — Tom va à l'école. Lily étudie l'anglais.</li><li><i>He doesn't like fish.</i> — Il n'aime pas le poisson.</li></ul><p><b>Irrégulier :</b> have → <b>has</b> (she has breakfast), do → <b>does</b>.</p>`,
 can:`<h4>can / can't</h4><p><b>can</b> = savoir ou pouvoir. Il est pareil à toutes les personnes et se met devant le verbe, sans « to ». Négation : <b>can't</b> (cannot).</p><ul><li><i>I can swim.</i> — Je sais nager.</li><li><i>She can't ride a bike.</i> — Elle ne sait pas faire de vélo.</li><li><i>Can you play the piano? — Yes, I can. / No, I can't.</i> — Sais-tu jouer du piano ? — Oui. / Non.</li></ul><p><b>Attention :</b> jamais de -s : <i>he can sing</i> (et pas « he cans sings »).</p>`,
 dodoes:`<h4>Do / Does — don't / doesn't</h4><p>Pour poser une question au présent simple : <b>Do</b> (I, you, we, they) ou <b>Does</b> (he, she, it). Le verbe reste sans -s.</p><ul><li><i>Do you like horses? — Yes, I do.</i> — Aimes-tu les chevaux ? — Oui.</li><li><i>Does your sister like mice? — No, she doesn't.</i> — Ta sœur aime-t-elle les souris ? — Non.</li><li><i>My dog doesn't sleep in the garden.</i> — Mon chien ne dort pas dans le jardin.</li></ul><p><b>Astuce :</b> le -s passe sur <b>does</b> : <i>Does he play?</i> (et pas « Does he plays? »).</p>`,
 dates:`<h4>Les dates : the 25th of December</h4><p>Pour les dates, on utilise les nombres <b>ordinaux</b> : first (1st), second (2nd), third (3rd), fourth (4th)… On dit <b>the</b> + ordinal + <b>of</b> + mois.</p><ul><li><i>Christmas Day is on the 25th of December.</i> — Noël, c'est le 25 décembre.</li><li><i>My birthday is on the first of May.</i> — Mon anniversaire est le 1er mai.</li><li><i>the twenty-first, the twenty-second, the thirtieth</i> — le 21, le 22, le 30</li></ul><p><b>Culture :</b> le 26 décembre, c'est <b>Boxing Day</b>, un jour férié au Royaume-Uni.</p>`,
 thereis:`<h4>There is / There are (il y a)</h4><p><b>There is</b> + un seul élément ; <b>There are</b> + plusieurs. Négation : <b>There isn't / There aren't</b>. Question : <b>Is there…? Are there…?</b></p><ul><li><i>There is a garden behind the house.</i> — Il y a un jardin derrière la maison.</li><li><i>There are three bedrooms.</i> — Il y a trois chambres.</li><li><i>Is there a garage? — No, there isn't.</i> — Y a-t-il un garage ? — Non.</li></ul><p><b>Astuce :</b> à l'oral, <i>there is</i> devient souvent <b>there's</b>.</p>`,
 prepositions:`<h4>Les prépositions de lieu</h4><p><b>in</b> (dans), <b>on</b> (sur), <b>under</b> (sous), <b>next to</b> (à côté de), <b>behind</b> (derrière), <b>in front of</b> (devant), <b>between</b> (entre), <b>opposite</b> (en face de).</p><ul><li><i>The lamp is next to the bed.</i> — La lampe est à côté du lit.</li><li><i>The cat is behind the sofa.</i> — Le chat est derrière le canapé.</li><li><i>The desk is between the bed and the window.</i> — Le bureau est entre le lit et la fenêtre.</li></ul><p><b>Astuce :</b> <i>in front of</i> (devant) est le contraire de <i>behind</i> (derrière).</p>`,
 continuous:`<h4>Le présent continu : be + -ing</h4><p>Pour dire ce qui se passe <b>en ce moment</b> : <b>am / is / are</b> + verbe en <b>-ing</b>.</p><ul><li><i>I'm wearing a red jumper.</i> — Je porte un pull rouge (en ce moment).</li><li><i>She's wearing a dress.</i> — Elle porte une robe.</li><li><i>They're playing in the park.</i> — Ils jouent au parc.</li></ul><p><b>Orthographe :</b> write → writ<b>ing</b> (on enlève le e) ; swim → swi<b>mm</b>ing, run → ru<b>nn</b>ing (on double la consonne).</p>`,
 continuous2:`<h4>What are you doing?</h4><p>Négation : <b>I'm not</b>, <b>isn't</b>, <b>aren't</b> + -ing. Question : on inverse be et le sujet. Réponse courte avec be.</p><ul><li><i>What are you doing? — I'm reading.</i> — Que fais-tu ? — Je lis.</li><li><i>He isn't sleeping.</i> — Il n'est pas en train de dormir.</li><li><i>Is she cooking? — Yes, she is.</i> — Est-elle en train de cuisiner ? — Oui.</li></ul><p><b>Astuce :</b> « être en train de » se traduit par le présent continu.</p>`,
 matter:`<h4>What's the matter?</h4><p>Pour demander ce qui ne va pas : <b>What's the matter?</b> Pour dire où on a mal : <b>I've got a…ache</b> ou <b>My … hurts</b>.</p><ul><li><i>I've got a headache.</i> — J'ai mal à la tête.</li><li><i>She's got a cold.</i> — Elle a un rhume.</li><li><i>My knee hurts.</i> — J'ai mal au genou.</li></ul><p><b>Prononciation :</b> dans <b>ache</b>, « ch » se prononce « k » : « eïk ».</p>`,
 wh:`<h4>Les mots pour poser des questions</h4><p><b>What</b> (que, quoi, quel), <b>Where</b> (où), <b>When</b> (quand), <b>Who</b> (qui), <b>Why</b> (pourquoi), <b>How many</b> (combien de), <b>How old</b> (quel âge), <b>How much</b> (combien, pour un prix).</p><ul><li><i>Where do you live? — In Lyon.</i> — Où habites-tu ? — À Lyon.</li><li><i>When is your birthday? — In May.</i> — Quand est ton anniversaire ? — En mai.</li><li><i>Who is your teacher? — Mrs Smith.</i> — Qui est ton professeur ? — Mme Smith.</li></ul><p><b>Astuce :</b> le mot interrogatif se met toujours au <b>début</b> de la question.</p>`,
 directions:`<h4>Demander et indiquer le chemin</h4><p>Pour demander : <b>Where is the station, please?</b> Pour répondre, on utilise l'impératif.</p><ul><li><i>Go straight on.</i> — Va tout droit.</li><li><i>Turn left / Turn right.</i> — Tourne à gauche / à droite.</li><li><i>It's on the left, opposite the bank.</i> — C'est sur la gauche, en face de la banque.</li></ul><p><b>Astuce :</b> <i>Take the first street on the right</i> = prends la première rue à droite.</p>`,
 prices:`<h4>How much is it?</h4><p>Au Royaume-Uni, on paie en <b>pounds</b> (livres, £) et en <b>pence</b> (p). £1 = 100p. Pour demander le prix : <b>How much is it?</b></p><ul><li><i>How much is this book? — It's five pounds.</i> — Combien coûte ce livre ? — Cinq livres.</li><li><i>£2.50 = two pounds fifty</i> — deux livres cinquante</li><li><i>75p = seventy-five pence</i> — soixante-quinze pence</li></ul><p><b>Astuce :</b> <b>cheap</b> = bon marché ; <b>expensive</b> = cher.</p>`,
 wouldlike:`<h4>I'd like… / some / any</h4><p>Pour commander poliment : <b>I'd like</b> (= I would like, je voudrais). <b>some</b> s'utilise dans les phrases affirmatives et les offres ; <b>any</b> dans les questions et les négations.</p><ul><li><i>I'd like a sandwich, please.</i> — Je voudrais un sandwich, s'il vous plaît.</li><li><i>Would you like some soup?</i> — Voudrais-tu de la soupe ?</li><li><i>Is there any milk? — No, there isn't any milk.</i> — Y a-t-il du lait ? — Non, il n'y en a pas.</li></ul><p><b>Culture :</b> en anglais britannique, <b>crisps</b> = des chips et <b>chips</b> = des frites !</p>`,
 describe:`<h4>Décrire un animal</h4><p>Pour décrire, on utilise le présent simple avec <b>it</b> (+ -s), <b>can</b> et <b>has got</b>.</p><ul><li><i>It lives in the sea. It eats fish.</i> — Il vit dans la mer. Il mange du poisson.</li><li><i>It can swim, but it can't fly.</i> — Il sait nager, mais il ne sait pas voler.</li><li><i>It's got a long tail.</i> — Il a une longue queue.</li></ul><p><b>Astuce :</b> l'adjectif se met avant le nom et ne s'accorde pas : <i>big grey elephants</i>.</p>`,
 capitals:`<h4>Les majuscules</h4><p>En anglais, prennent une majuscule : <b>I</b> (je), les <b>pays</b>, les <b>nationalités</b> et les <b>langues</b>, les <b>jours</b> et les <b>mois</b>.</p><ul><li><i>Tom and I are English.</i> — Tom et moi sommes anglais.</li><li><i>We speak French on Monday.</i> — Nous parlons français le lundi.</li><li><i>London is the capital of England.</i> — Londres est la capitale de l'Angleterre.</li></ul><p><b>Culture :</b> à Londres, on voit Big Ben, Buckingham Palace, Tower Bridge et la Tamise (the Thames).</p>`,
 inonat:`<h4>in, on, at (le temps)</h4><p><b>in</b> + mois, saison, année, moment de la journée ; <b>on</b> + jour, date ; <b>at</b> + heure.</p><ul><li><i>in May, in summer, in the morning</i> — en mai, en été, le matin</li><li><i>on Monday, on the 5th of November</i> — lundi, le 5 novembre</li><li><i>at three o'clock, at midnight, at the weekend</i> — à trois heures, à minuit, le week-end</li></ul><p><b>Culture :</b> le 5 novembre, c'est <b>Bonfire Night</b> : feux de joie et feux d'artifice !</p>`,
 jobsg:`<h4>What does she do? — She's a doctor.</h4><p>Pour demander le métier : <b>What does he / she do?</b> En anglais, on garde l'article <b>a</b> / <b>an</b> devant le métier.</p><ul><li><i>What does your mum do? — She's a nurse.</i> — Que fait ta maman ? — Elle est infirmière.</li><li><i>He's an artist.</i> — Il est artiste.</li><li><i>I want to be a vet.</i> — Je veux être vétérinaire.</li></ul><p><b>Attention :</b> « il est pilote » = <i>he's <b>a</b> pilot</i>, jamais « he's pilot ».</p>`,
 howgo:`<h4>How do you go to school?</h4><p><b>by</b> + moyen de transport, sans article : by bus, by car, by train. « À pied » : <b>on foot</b> ou <b>I walk</b>.</p><ul><li><i>How do you go to school? — I go by bike.</i> — Comment vas-tu à l'école ? — À vélo.</li><li><i>She goes to work by train.</i> — Elle va au travail en train.</li><li><i>I walk to school.</i> — Je vais à l'école à pied.</li></ul><p><b>Culture :</b> le métro de Londres s'appelle <b>the Underground</b> ou <b>the Tube</b>.</p>`,
 was:`<h4>Le passé de be : was / were</h4><p><b>I / he / she / it was</b> ; <b>you / we / they were</b>. Ils servent à parler du passé (hier, la semaine dernière…).</p><ul><li><i>I was at home yesterday.</i> — J'étais à la maison hier.</li><li><i>We were in London last week.</i> — Nous étions à Londres la semaine dernière.</li><li><i>It was sunny.</i> — Il faisait beau.</li></ul><p><b>Mots du passé :</b> yesterday (hier), last week (la semaine dernière), two days ago (il y a deux jours).</p>`,
 was2:`<h4>wasn't / weren't — Was…? Were…?</h4><p>Négation : <b>wasn't</b> (was not), <b>weren't</b> (were not). Question : on inverse : <b>Were you…? Was she…?</b></p><ul><li><i>I wasn't scared.</i> — Je n'avais pas peur.</li><li><i>They weren't at school.</i> — Ils n'étaient pas à l'école.</li><li><i>Were you happy? — Yes, I was. / No, I wasn't.</i> — Étais-tu content ? — Oui. / Non.</li></ul><p><b>Astuce :</b> was / were se traduit souvent par l'imparfait : j'étais, il faisait…</p>`,
 orders:`<h4>Les consignes : Do… / Don't…</h4><p>Pour donner une consigne : le verbe seul au début. Pour interdire : <b>Don't</b> + verbe. On peut aussi dire <b>You mustn't…</b> (tu ne dois pas).</p><ul><li><i>Turn off the light!</i> — Éteins la lumière !</li><li><i>Don't drop litter!</i> — Ne jette pas de déchets par terre !</li><li><i>Recycle your bottles.</i> — Recycle tes bouteilles.</li></ul><p><b>Vocabulaire :</b> <i>litter</i> = des déchets jetés par terre ; <i>a bin</i> = une poubelle.</p>`,
 tenses:`<h4>Présent simple ou présent continu ?</h4><p><b>Présent simple</b> : les habitudes (every day, usually, never). <b>Présent continu</b> : ce qui se passe maintenant (now, at the moment, Look!, Listen!).</p><ul><li><i>We usually go to the seaside.</i> — D'habitude, nous allons au bord de la mer.</li><li><i>Today we're visiting a castle.</i> — Aujourd'hui, nous visitons un château.</li><li><i>Look! It's raining!</i> — Regarde ! Il pleut !</li></ul><p><b>Astuce :</b> cherche le petit mot qui indique le moment.</p>`
};
const LECON_REV={
 rev1:`<h4>Révision de la période 1</h4><p>On révise : se présenter, la famille, les pays, l'école et Halloween.</p><ul><li><i>I'm Lucas. I'm ten and I'm from France.</i> — Je suis Lucas. J'ai dix ans et je viens de France.</li><li><i>She's got two brothers. He hasn't got a pet.</i> — Elle a deux frères. Il n'a pas d'animal.</li><li><i>This is Emma and her dog. This is Tom and his cat.</i> — Voici Emma et son chien. Voici Tom et son chat.</li><li><i>My favourite subject is science because it's fun.</i> — Ma matière préférée est les sciences parce que c'est amusant.</li><li><i>one witch, two witches ; one child, two children</i></li></ul><p><b>Les nombres :</b> twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety, a hundred.</p><p><b>Astuce :</b> relis les leçons des semaines 1 à 6.</p>`,
 rev2:`<h4>Révision de la période 2</h4><p>On révise : l'heure, la routine, le calendrier, les loisirs, les animaux et Noël.</p><ul><li><i>It's quarter past eight.</i> — Il est huit heures et quart.</li><li><i>I get up at seven. She gets up at eight.</i> — Je me lève à sept heures. Elle se lève à huit heures.</li><li><i>I can swim, but I can't skate.</i> — Je sais nager, mais pas faire du skate.</li><li><i>Does he like horses? — No, he doesn't.</i> — Aime-t-il les chevaux ? — Non.</li><li><i>Christmas Day is on the 25th of December.</i> — Noël, c'est le 25 décembre.</li></ul><p><b>Astuce :</b> he, she, it → le verbe prend un -s (she plays, he watches).</p>`,
 rev3:`<h4>Révision de la période 3</h4><p>On révise : la maison, les meubles, les vêtements, les actions, la santé et la météo.</p><ul><li><i>There is a sofa. There are two beds.</i> — Il y a un canapé. Il y a deux lits.</li><li><i>The cat is behind the sofa, next to the lamp.</i> — Le chat est derrière le canapé, à côté de la lampe.</li><li><i>I'm wearing jeans. What are you doing?</i> — Je porte un jean. Que fais-tu ?</li><li><i>What's the matter? — I've got a headache.</i> — Qu'est-ce qui ne va pas ? — J'ai mal à la tête.</li><li><i>When is your birthday? Where do you live?</i> — Quand est ton anniversaire ? Où habites-tu ?</li></ul><p><b>Astuce :</b> be + -ing pour ce qui se passe en ce moment.</p>`,
 rev4:`<h4>Révision de la période 4</h4><p>On révise : la ville, les magasins, la nourriture, les animaux sauvages, le Royaume-Uni et les fêtes.</p><ul><li><i>Go straight on and turn left.</i> — Va tout droit et tourne à gauche.</li><li><i>How much is it? — It's three pounds fifty.</i> — Combien ça coûte ? — Trois livres cinquante.</li><li><i>I'd like some chips, please. Is there any milk?</i> — Je voudrais des frites. Y a-t-il du lait ?</li><li><i>It lives in Australia. It can jump.</i> — Il vit en Australie. Il sait sauter.</li><li><i>in May, on Monday, at six o'clock</i> — en mai, lundi, à six heures</li></ul><p><b>Astuce :</b> pays, nationalités, jours et mois prennent une majuscule.</p>`,
 rev5:`<h4>Révision générale (1)</h4><p>On révise les métiers, les transports, le passé, les émotions, la nature et les vacances.</p><ul><li><i>What does he do? — He's a firefighter.</i> — Que fait-il ? — Il est pompier.</li><li><i>I go to school by bus.</i> — Je vais à l'école en bus.</li><li><i>I was tired yesterday. We weren't at home.</i> — J'étais fatigué hier. Nous n'étions pas à la maison.</li><li><i>Don't drop litter!</i> — Ne jette pas de déchets par terre !</li><li><i>Every day I swim. Today I'm visiting a castle.</i> — Tous les jours, je nage. Aujourd'hui, je visite un château.</li></ul><p><b>Astuce :</b> was pour I / he / she / it ; were pour you / we / they.</p>`,
 rev6:`<h4>Révision générale (2) et défis</h4><p>Dernière semaine ! Voici les phrases clés de l'année. Sais-tu toutes les dire ?</p><ul><li><i>Hi! I'm Ella. I'm eleven and I'm from Lyon.</i> — Salut ! Je suis Ella. J'ai onze ans et je viens de Lyon.</li><li><i>My brother plays football every Saturday.</i> — Mon frère joue au football tous les samedis.</li><li><i>There are three bedrooms in my house.</i> — Il y a trois chambres dans ma maison.</li><li><i>Look! The children are swimming.</i> — Regarde ! Les enfants nagent.</li><li><i>It was sunny yesterday. We were at the beach.</i> — Il faisait beau hier. Nous étions à la plage.</li><li><i>Can you ride a bike? — Yes, I can.</i> — Sais-tu faire du vélo ? — Oui.</li></ul><p><b>Bravo !</b> Tu as terminé l'année. <i>Have a nice holiday!</i></p>`
};
function faireLecon(s){
  if(LECON_REV[s.tv])return LECON_REV[s.tv];
  const mots=MOTS.filter(m=>m.t===s.tv),lignes=[];
  for(let i=0;i<mots.length;i+=2)lignes.push("<tr>"+mots.slice(i,i+2).map(m=>`<td><b>${m.en}</b> — ${m.fr}</td>`).join("")+"</tr>");
  return `<h4>Les mots de la semaine : ${s.v}</h4><table>${lignes.join("")}</table>`+LECON_G[s.tg];
}
SEMAINES.forEach(s=>{s.lecon=faireLecon(s);});

export const programme = { code: "anglais-2", nom: "Anglais · niveau 2 (CM1-CM2)", rituel: "Monte le son : il y a des questions à écouter.", SEMAINES, JOURS, NOM_MAT, PERIODES, matiereDuJour, seanceHorsLigne };
