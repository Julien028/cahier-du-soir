// Programme « Anglais · niveau 1 (CP-CE2) » (6 à 8 ans, grands débutants), créé le 08/10/2026.
// A1 découverte : surtout l'oral et le vocabulaire. Anglais britannique.
// Chaque semaine a sa leçon (lecon, en HTML simple) ; les questions à écouter ont un champ « audio »
// (texte anglais lu par la synthèse vocale de la tablette).

/* =========================================================
   1. LE PROGRAMME — 36 SEMAINES
   t = étiquettes : vocabulaire | grammaire | écoute | lecture
   ========================================================= */
const SEMAINES=[
{n:1,p:1,v:"Bonjour ! Les salutations",g:"Hello! My name is…",l:"Écouter : bonjour, merci, au revoir",r:"Lire une présentation",t:"greet|hello|greet|greet"},
{n:2,p:1,v:"Les nombres de 1 à 10",g:"How old are you? I'm seven.",l:"Écouter les nombres de 1 à 10",r:"Lire des nombres et des âges",t:"num10|age|num10|num10"},
{n:3,p:1,v:"Les couleurs",g:"What colour is it? It's red.",l:"Écouter les couleurs",r:"Lire des phrases avec des couleurs",t:"colours|colour|colours|colours"},
{n:4,p:1,v:"Les consignes de la classe",g:"Les ordres : Stand up! Don't run!",l:"Écouter et obéir",r:"Lire les consignes",t:"class|orders|class|class"},
{n:5,p:1,v:"Le matériel scolaire",g:"What's this? It's a pen. / It's an apple.",l:"Écouter les objets de l'école",r:"Lire : dans mon cartable",t:"school|article|school|school"},
{n:6,p:1,v:"Halloween",g:"I'm a witch! / I'm not a ghost.",l:"Écouter : Trick or treat!",r:"Lire : la fête d'Halloween",t:"halloween|iam|halloween|halloween"},
{n:7,p:1,v:"Révision de la période 1",g:"Révision : se présenter, l'âge, les couleurs, a / an",l:"Révision : écouter",r:"Révision : lire",t:"rev1|grev1|rev1|rev1"},
{n:8,p:2,v:"Les animaux de compagnie",g:"I have got / I haven't got",l:"Écouter : les animaux",r:"Lire : mon animal",t:"pets|havegot|pets|pets"},
{n:9,p:2,v:"Les nombres de 11 à 20",g:"Le pluriel : one cat, two cats",l:"Écouter les nombres de 11 à 20",r:"Lire des nombres",t:"num20|plural|num20|num20"},
{n:10,p:2,v:"La famille",g:"This is my mum. / Who is it?",l:"Écouter : la famille",r:"Lire : ma famille",t:"family|thisis|family|family"},
{n:11,p:2,v:"Le corps",g:"Touch your nose! / I've got two eyes.",l:"Écouter : touche ton nez !",r:"Lire : le monstre",t:"body|bodyg|body|body"},
{n:12,p:2,v:"Les vêtements",g:"La couleur avant le nom : a red hat",l:"Écouter : les vêtements",r:"Lire : je m'habille",t:"clothes|adjorder|clothes|clothes"},
{n:13,p:2,v:"Christmas (Noël)",g:"Merry Christmas! Les vœux",l:"Écouter : Noël",r:"Lire : Noël au Royaume-Uni",t:"xmas|wishes|xmas|xmas"},
{n:14,p:2,v:"Révision de la période 2",g:"Révision : I have got, le pluriel, This is my…",l:"Révision : écouter",r:"Révision : lire",t:"rev2|grev2|rev2|rev2"},
{n:15,p:3,v:"La nourriture",g:"I like / I don't like",l:"Écouter : j'aime, je n'aime pas",r:"Lire : ce que j'aime manger",t:"food|like|food|food"},
{n:16,p:3,v:"Les fruits et les légumes",g:"Do you like…? Yes, I do. / No, I don't.",l:"Écouter : les fruits",r:"Lire : un dialogue",t:"fruit|doyoulike|fruit|fruit"},
{n:17,p:3,v:"Les jours de la semaine",g:"What day is it today? It's Monday.",l:"Écouter les jours",r:"Lire : ma semaine",t:"days|day|days|days"},
{n:18,p:3,v:"Les sentiments",g:"How are you? I'm happy. / I'm not sad.",l:"Écouter : comment ça va ?",r:"Lire : je suis content",t:"feelings|howare|feelings|feelings"},
{n:19,p:3,v:"Les animaux de la ferme",g:"Les adjectifs : big, small, fast, slow",l:"Écouter : à la ferme",r:"Lire : devinettes de la ferme",t:"farm|adjectives|farm|farm"},
{n:20,p:3,v:"Les jouets",g:"Can I have…, please? Here you are.",l:"Écouter : les jouets",r:"Lire : un dialogue poli",t:"toys|canihave|toys|toys"},
{n:21,p:3,v:"Révision de la période 3",g:"Révision : I like, Do you like…?, How are you?",l:"Révision : écouter",r:"Révision : lire",t:"rev3|grev3|rev3|rev3"},
{n:22,p:4,v:"Les mois de l'année",g:"When is your birthday? It's in May.",l:"Écouter les mois",r:"Lire : les anniversaires",t:"months|birthday|months|months"},
{n:23,p:4,v:"Les saisons et la météo",g:"What's the weather like? It's sunny.",l:"Écouter : la météo",r:"Lire : le temps qu'il fait",t:"weather|weatherg|weather|weather"},
{n:24,p:4,v:"La maison",g:"Where is…? It's in the kitchen.",l:"Écouter : où est-il ?",r:"Lire : ma maison",t:"house|whereis|house|house"},
{n:25,p:4,v:"Les meubles",g:"In, on, under",l:"Écouter : dans, sur, sous",r:"Lire : où est le chat ?",t:"furniture|inonunder|furniture|furniture"},
{n:26,p:4,v:"Les nombres jusqu'à 100",g:"How many…? Compter",l:"Écouter les grands nombres",r:"Lire des grands nombres",t:"num100|howmany|num100|num100"},
{n:27,p:4,v:"Easter (Pâques) et le printemps",g:"Let's play! (proposer)",l:"Écouter : Pâques",r:"Lire : la chasse aux œufs",t:"easter|lets|easter|easter"},
{n:28,p:4,v:"Révision de la période 4",g:"Révision : birthday, weather, Where is…?, in / on / under",l:"Révision : écouter",r:"Révision : lire",t:"rev4|grev4|rev4|rev4"},
{n:29,p:5,v:"Les animaux sauvages",g:"It's got four legs. (It has got)",l:"Écouter : au zoo",r:"Lire : devinettes du zoo",t:"wild|itsgot|wild|wild"},
{n:30,p:5,v:"Le sport et les jeux",g:"I play football. / I don't play tennis.",l:"Écouter : les sports",r:"Lire : mes sports",t:"sport|play|sport|sport"},
{n:31,p:5,v:"Les repas",g:"Can I have some milk, please?",l:"Écouter : à table",r:"Lire : mon petit-déjeuner",t:"meals|some|meals|meals"},
{n:32,p:5,v:"Les transports",g:"I go to school by bus. / on foot",l:"Écouter : les transports",r:"Lire : comment je vais à l'école",t:"transport|by|transport|transport"},
{n:33,p:5,v:"L'alphabet",g:"How do you spell it?",l:"Écouter les lettres",r:"Lire : épeler son prénom",t:"alphabet|spell|alphabet|alphabet"},
{n:34,p:5,v:"Les vacances et la plage",g:"At the beach: in the sea, on the sand",l:"Écouter : à la plage",r:"Lire : mes vacances",t:"beach|holiday|beach|beach"},
{n:35,p:5,v:"Révision générale (1)",g:"Révision : les phrases de l'année",l:"Révision : écouter",r:"Révision : lire",t:"rev5|grev5|rev5|rev5"},
{n:36,p:5,v:"Révision générale (2) et jeux",g:"Révision : toutes les phrases de l'année",l:"Révision : écouter",r:"Révision : lire",t:"rev6|grev6|rev6|rev6"}
];
SEMAINES.forEach(s=>{const t=s.t.split("|");s.tv=t[0];s.tg=t[1];s.tl=t[2];s.tr=t[3];});

const JOURS=[
 {nom:"Lundi",mat:"v",min:8},
 {nom:"Mardi",mat:"g",min:8},
 {nom:"Mercredi",mat:"l",min:8},
 {nom:"Jeudi",mat:"v",min:8},
 {nom:"Vendredi",mat:"r",min:8},
 {nom:"Week-end",mat:"rev",min:8}
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
const PRENOMS=["Tom","Emma","Lucas","Chloé","Oliver","Léa","Amelia","Hugo","Jack","Manon","Harry","Inès","Lily","Jules","Noah","Camille","Sophie","Théo","Grace","Louis","Mia","Nathan","Ella","Arthur","Leo","Max"];

/* Les nombres en lettres (anglais britannique), jusqu'à 100 */
const UNITES_EN=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
const DIZAINES_EN=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
function enL(n){
  if(n===100)return "a hundred";
  if(n<20)return UNITES_EN[n];
  return DIZAINES_EN[Math.floor(n/10)]+(n%10?"-"+UNITES_EN[n%10]:"");
}

/* =========================================================
   3. LES MOTS (thème, anglais, français, image)
   ========================================================= */
const MOTS=[
 ["greet","hello","bonjour","👋"],["greet","hi","salut"],["greet","goodbye","au revoir"],["greet","good morning","bonjour (le matin)","🌅"],["greet","good night","bonne nuit","🌙"],
 ["greet","please","s'il te plaît"],["greet","thank you","merci"],["greet","yes","oui","✅"],["greet","no","non","❌"],["greet","sorry","pardon"],["greet","a friend","un ami, une amie"],
 ["num10","one","un (1)"],["num10","two","deux (2)"],["num10","three","trois (3)"],["num10","four","quatre (4)"],["num10","five","cinq (5)"],
 ["num10","six","six (6)"],["num10","seven","sept (7)"],["num10","eight","huit (8)"],["num10","nine","neuf (9)"],["num10","ten","dix (10)"],
 ["num20","eleven","onze (11)"],["num20","twelve","douze (12)"],["num20","thirteen","treize (13)"],["num20","fourteen","quatorze (14)"],["num20","fifteen","quinze (15)"],
 ["num20","sixteen","seize (16)"],["num20","seventeen","dix-sept (17)"],["num20","eighteen","dix-huit (18)"],["num20","nineteen","dix-neuf (19)"],["num20","twenty","vingt (20)"],
 ["num100","thirty","trente (30)"],["num100","forty","quarante (40)"],["num100","fifty","cinquante (50)"],["num100","sixty","soixante (60)"],["num100","seventy","soixante-dix (70)"],
 ["num100","eighty","quatre-vingts (80)"],["num100","ninety","quatre-vingt-dix (90)"],["num100","a hundred","cent (100)"],
 ["colours","red","rouge","🔴"],["colours","blue","bleu","🔵"],["colours","green","vert","🟢"],["colours","yellow","jaune","🟡"],["colours","orange","orange","🟠"],["colours","purple","violet","🟣"],
 ["colours","pink","rose"],["colours","black","noir","⚫"],["colours","white","blanc","⚪"],["colours","brown","marron","🟤"],["colours","grey","gris"],
 ["class","stand up","lève-toi"],["class","sit down","assieds-toi"],["class","listen","écoute"],["class","look","regarde","👀"],["class","be quiet","silence, tais-toi","🤫"],
 ["class","open your book","ouvre ton livre"],["class","close your book","ferme ton livre"],["class","put your hand up","lève la main"],["class","repeat","répète"],["class","write","écris"],["class","come here","viens ici"],
 ["school","a pen","un stylo","🖊️"],["school","a pencil","un crayon","✏️"],["school","a rubber","une gomme"],["school","a ruler","une règle","📏"],["school","a book","un livre","📕"],["school","a school bag","un cartable","🎒"],
 ["school","scissors","des ciseaux","✂️"],["school","glue","de la colle"],["school","a pencil case","une trousse"],["school","a teacher","un maître, une maîtresse","🧑‍🏫"],["school","a desk","un bureau"],["school","a school","une école","🏫"],
 ["halloween","a witch","une sorcière","🧙"],["halloween","a ghost","un fantôme","👻"],["halloween","a pumpkin","une citrouille","🎃"],["halloween","a bat","une chauve-souris","🦇"],["halloween","a spider","une araignée","🕷️"],
 ["halloween","a skeleton","un squelette","💀"],["halloween","a monster","un monstre","👹"],["halloween","sweets","des bonbons","🍬"],["halloween","a mask","un masque"],["halloween","a vampire","un vampire","🧛"],["halloween","trick or treat","des bonbons ou un sort"],
 ["pets","a dog","un chien","🐶"],["pets","a cat","un chat","🐱"],["pets","a rabbit","un lapin","🐰"],["pets","a fish","un poisson","🐟"],["pets","a bird","un oiseau","🐦"],
 ["pets","a hamster","un hamster","🐹"],["pets","a mouse","une souris","🐭"],["pets","a tortoise","une tortue","🐢"],["pets","a guinea pig","un cochon d'Inde"],["pets","a parrot","un perroquet","🦜"],["pets","a pet","un animal de compagnie"],
 ["family","mum","maman"],["family","dad","papa"],["family","a brother","un frère"],["family","a sister","une sœur"],["family","grandma","mamie"],["family","grandpa","papi"],
 ["family","a baby","un bébé","👶"],["family","an aunt","une tante"],["family","an uncle","un oncle"],["family","a cousin","un cousin, une cousine"],["family","a family","une famille","👪"],
 ["body","a head","une tête"],["body","an eye","un œil","👁️"],["body","an ear","une oreille","👂"],["body","a nose","un nez","👃"],["body","a mouth","une bouche","👄"],["body","a hand","une main","✋"],
 ["body","an arm","un bras","💪"],["body","a leg","une jambe","🦵"],["body","a foot","un pied","🦶"],["body","hair","les cheveux"],["body","teeth","les dents","🦷"],["body","a finger","un doigt"],["body","a tummy","un ventre"],
 ["clothes","a T-shirt","un tee-shirt","👕"],["clothes","a jumper","un pull"],["clothes","trousers","un pantalon","👖"],["clothes","a skirt","une jupe"],["clothes","a dress","une robe","👗"],
 ["clothes","shoes","des chaussures","👟"],["clothes","socks","des chaussettes","🧦"],["clothes","a coat","un manteau","🧥"],["clothes","a hat","un chapeau","🎩"],["clothes","a cap","une casquette","🧢"],
 ["clothes","a scarf","une écharpe","🧣"],["clothes","gloves","des gants","🧤"],["clothes","boots","des bottes","👢"],
 ["xmas","Christmas","Noël"],["xmas","Father Christmas","le Père Noël","🎅"],["xmas","a Christmas tree","un sapin de Noël","🎄"],["xmas","a present","un cadeau","🎁"],["xmas","a star","une étoile","⭐"],
 ["xmas","a candle","une bougie","🕯️"],["xmas","snow","la neige"],["xmas","a snowman","un bonhomme de neige","⛄"],["xmas","a reindeer","un renne","🦌"],["xmas","a card","une carte"],["xmas","a stocking","une chaussette de Noël"],["xmas","a bell","une cloche","🔔"],
 ["food","bread","du pain","🥖"],["food","cheese","du fromage","🧀"],["food","milk","du lait","🥛"],["food","water","de l'eau","💧"],["food","an egg","un œuf","🥚"],["food","chicken","du poulet","🍗"],
 ["food","fish","du poisson"],["food","pizza","de la pizza","🍕"],["food","chips","des frites","🍟"],["food","rice","du riz","🍚"],["food","pasta","des pâtes","🍝"],["food","cake","du gâteau","🍰"],
 ["food","ice cream","de la glace","🍦"],["food","chocolate","du chocolat","🍫"],["food","soup","de la soupe"],
 ["fruit","an apple","une pomme","🍎"],["fruit","a banana","une banane","🍌"],["fruit","an orange","une orange","🍊"],["fruit","a pear","une poire","🍐"],["fruit","a strawberry","une fraise","🍓"],
 ["fruit","a lemon","un citron","🍋"],["fruit","grapes","du raisin","🍇"],["fruit","a cherry","une cerise","🍒"],["fruit","a tomato","une tomate","🍅"],["fruit","a carrot","une carotte","🥕"],
 ["fruit","a potato","une pomme de terre","🥔"],["fruit","peas","des petits pois"],["fruit","a pineapple","un ananas","🍍"],
 ["days","Monday","lundi"],["days","Tuesday","mardi"],["days","Wednesday","mercredi"],["days","Thursday","jeudi"],["days","Friday","vendredi"],["days","Saturday","samedi"],["days","Sunday","dimanche"],
 ["days","today","aujourd'hui"],["days","the weekend","le week-end"],["days","a day","un jour"],["days","a week","une semaine"],
 ["feelings","I'm happy","je suis content(e)","😊"],["feelings","I'm sad","je suis triste","😢"],["feelings","I'm angry","je suis en colère","😠"],["feelings","I'm tired","je suis fatigué(e)","😴"],
 ["feelings","I'm scared","j'ai peur","😨"],["feelings","I'm hungry","j'ai faim"],["feelings","I'm thirsty","j'ai soif"],["feelings","I'm hot","j'ai chaud"],["feelings","I'm cold","j'ai froid"],
 ["feelings","I'm fine","je vais bien"],["feelings","I'm ill","je suis malade","🤒"],
 ["farm","a cow","une vache","🐄"],["farm","a horse","un cheval","🐴"],["farm","a pig","un cochon","🐷"],["farm","a sheep","un mouton","🐑"],["farm","a hen","une poule","🐔"],
 ["farm","a duck","un canard","🦆"],["farm","a goat","une chèvre","🐐"],["farm","a donkey","un âne"],["farm","a farmer","un fermier, une fermière","🧑‍🌾"],["farm","a tractor","un tracteur","🚜"],["farm","a farm","une ferme"],
 ["toys","a ball","un ballon"],["toys","a doll","une poupée"],["toys","a teddy bear","un ours en peluche","🧸"],["toys","a kite","un cerf-volant","🪁"],["toys","a toy car","une petite voiture"],
 ["toys","a puzzle","un puzzle","🧩"],["toys","a robot","un robot","🤖"],["toys","a board game","un jeu de société","🎲"],["toys","a yo-yo","un yo-yo"],["toys","a toy","un jouet"],
 ["months","January","janvier"],["months","February","février"],["months","March","mars"],["months","April","avril"],["months","May","mai"],["months","June","juin"],
 ["months","July","juillet"],["months","August","août"],["months","September","septembre"],["months","October","octobre"],["months","November","novembre"],["months","December","décembre"],
 ["months","a month","un mois"],["months","a birthday","un anniversaire","🎂"],
 ["weather","it's sunny","il fait beau, il y a du soleil","☀️"],["weather","it's raining","il pleut","🌧️"],["weather","it's snowing","il neige","🌨️"],["weather","it's windy","il y a du vent","💨"],
 ["weather","it's cloudy","il y a des nuages","☁️"],["weather","it's hot","il fait chaud"],["weather","it's cold","il fait froid"],["weather","spring","le printemps","🌸"],
 ["weather","summer","l'été"],["weather","autumn","l'automne","🍂"],["weather","winter","l'hiver"],["weather","a rainbow","un arc-en-ciel","🌈"],
 ["house","a house","une maison","🏠"],["house","a kitchen","une cuisine"],["house","a bedroom","une chambre"],["house","a bathroom","une salle de bains"],["house","a living room","un salon"],
 ["house","a garden","un jardin"],["house","a door","une porte","🚪"],["house","a window","une fenêtre"],["house","the stairs","l'escalier"],["house","the toilet","les toilettes","🚽"],["house","a garage","un garage"],
 ["furniture","a bed","un lit","🛏️"],["furniture","a table","une table"],["furniture","a chair","une chaise","🪑"],["furniture","a sofa","un canapé","🛋️"],["furniture","a lamp","une lampe"],
 ["furniture","a box","une boîte","📦"],["furniture","a cupboard","un placard"],["furniture","a TV","une télévision","📺"],["furniture","a computer","un ordinateur","💻"],["furniture","a clock","une horloge"],["furniture","a bath","une baignoire","🛁"],
 ["easter","Easter","Pâques"],["easter","an Easter egg","un œuf de Pâques"],["easter","the Easter Bunny","le lapin de Pâques"],["easter","a chick","un poussin","🐥"],["easter","a basket","un panier","🧺"],
 ["easter","a flower","une fleur","🌷"],["easter","an egg hunt","une chasse aux œufs"],["easter","a lamb","un agneau"],["easter","a butterfly","un papillon","🦋"],["easter","a bee","une abeille","🐝"],
 ["wild","a lion","un lion","🦁"],["wild","a tiger","un tigre","🐯"],["wild","an elephant","un éléphant","🐘"],["wild","a giraffe","une girafe","🦒"],["wild","a monkey","un singe","🐒"],
 ["wild","a snake","un serpent","🐍"],["wild","a crocodile","un crocodile","🐊"],["wild","a zebra","un zèbre","🦓"],["wild","a bear","un ours","🐻"],["wild","a zoo","un zoo"],
 ["wild","a tail","une queue"],["wild","a neck","un cou"],
 ["sport","football","le football","⚽"],["sport","tennis","le tennis","🎾"],["sport","swimming","la natation","🏊"],["sport","basketball","le basket","🏀"],["sport","rugby","le rugby","🏉"],
 ["sport","dancing","la danse","💃"],["sport","running","la course à pied","🏃"],["sport","skiing","le ski","⛷️"],["sport","a team","une équipe"],["sport","to play","jouer"],["sport","to win","gagner","🏆"],
 ["meals","breakfast","le petit-déjeuner"],["meals","lunch","le déjeuner"],["meals","dinner","le dîner"],["meals","orange juice","du jus d'orange"],["meals","tea","du thé","🍵"],
 ["meals","cereal","des céréales","🥣"],["meals","toast","du pain grillé"],["meals","butter","du beurre","🧈"],["meals","jam","de la confiture"],["meals","a sandwich","un sandwich","🥪"],
 ["meals","a biscuit","un biscuit","🍪"],["meals","sugar","du sucre"],
 ["transport","a car","une voiture","🚗"],["transport","a bus","un bus","🚌"],["transport","a bike","un vélo","🚲"],["transport","a train","un train","🚆"],["transport","a plane","un avion","✈️"],
 ["transport","a boat","un bateau","⛵"],["transport","a taxi","un taxi","🚕"],["transport","a lorry","un camion","🚚"],["transport","on foot","à pied","🚶"],["transport","a helicopter","un hélicoptère","🚁"],
 ["alphabet","a letter","une lettre"],["alphabet","a word","un mot"],["alphabet","to spell","épeler"],["alphabet","the alphabet","l'alphabet"],["alphabet","a name","un prénom"],
 ["beach","the beach","la plage","🏖️"],["beach","the sea","la mer","🌊"],["beach","sand","du sable"],["beach","a shell","un coquillage","🐚"],["beach","the holidays","les vacances"],
 ["beach","sunglasses","des lunettes de soleil","🕶️"],["beach","a swimsuit","un maillot de bain","🩱"],["beach","a sandcastle","un château de sable"],["beach","a crab","un crabe","🦀"],
 ["beach","a bucket","un seau","🪣"],["beach","a towel","une serviette"],["beach","a suitcase","une valise","🧳"]
].map(([t,en,fr,e])=>({t,en,fr,e}));
/* Mots trop proches : jamais proposés comme mauvais choix l'un pour l'autre */
const SYN=[["hello","hi","good morning"],["a fish","fish"],["an egg","an Easter egg","an egg hunt"],["a toy car","a car"],["orange","an orange","orange juice"],
 ["a rabbit","the Easter Bunny"],["it's cold","I'm cold"],["it's hot","I'm hot"],["a teddy bear","a bear"],["a pencil","a pencil case"],["a desk","a table"],
 ["snow","it's snowing","a snowman"],["a day","today"],["a sheep","a lamb"],["a ball","football"],["a bathroom","a bath"],["a bedroom","a bed"],["a pet","a dog"],["a pet","a cat"],
 ["Christmas","a Christmas tree","a stocking"],["socks","a stocking"],["a toy","a toy car"],
 ["I'm fine","I'm happy"],["bread","toast"],["cake","a biscuit"],["a hen","a chick"],["a letter","a word"],["the beach","sand"],["swimming","the sea"],["a school","a teacher"],
 ["a name","a word"],["look","listen"]];
function conflit(a,b){return a.en===b.en||a.fr===b.fr||SYN.some(g=>g.includes(a.en)&&g.includes(b.en));}
const motsDe=t=>{const l=MOTS.filter(m=>m.t===t);return l.length?l:MOTS;};
/* Les mauvais choix : d'abord des mots du même thème, puis d'autres */
function autres(m,champ){
  const meme=melange(MOTS.filter(x=>x.t===m.t&&!conflit(x,m)));
  const loin=melange(MOTS.filter(x=>x.t!==m.t&&!conflit(x,m)));
  return [...meme,...loin].slice(0,3).map(x=>x[champ]);
}

/* =========================================================
   4. LES PHRASES (écoute et lecture)
   ========================================================= */
const PH=[
 ["greet","Hello! My name is Tom.","Bonjour ! Je m'appelle Tom."],["greet","Goodbye, see you tomorrow!","Au revoir, à demain !"],
 ["greet","How are you? I'm fine, thank you.","Comment vas-tu ? Je vais bien, merci."],["greet","What's your name?","Comment t'appelles-tu ?"],
 ["greet","Good night, Mum!","Bonne nuit, maman !"],["greet","Thank you very much!","Merci beaucoup !"],["greet","Nice to meet you!","Ravi de te rencontrer !"],
 ["num10","I've got two cats.","J'ai deux chats."],["num10","I'm seven years old.","J'ai sept ans."],["num10","Show me five fingers.","Montre-moi cinq doigts."],
 ["num10","Count to ten!","Compte jusqu'à dix !"],["num10","Three red apples.","Trois pommes rouges."],["num10","I'm six.","J'ai six ans."],
 ["colours","My bag is blue.","Mon sac est bleu."],["colours","I like green.","J'aime le vert."],["colours","The sun is yellow.","Le soleil est jaune."],
 ["colours","What colour is it?","C'est de quelle couleur ?"],["colours","It's a red car.","C'est une voiture rouge."],["colours","My favourite colour is purple.","Ma couleur préférée est le violet."],
 ["class","Stand up, please.","Lève-toi, s'il te plaît."],["class","Sit down, please.","Assieds-toi, s'il te plaît."],["class","Open your book.","Ouvre ton livre."],
 ["class","Listen and repeat.","Écoute et répète."],["class","Look at the board.","Regarde le tableau."],["class","Be quiet, please.","Silence, s'il te plaît."],["class","Put your hand up.","Lève la main."],
 ["school","It's a pencil.","C'est un crayon."],["school","I've got a red pen.","J'ai un stylo rouge."],["school","Where is my rubber?","Où est ma gomme ?"],
 ["school","This is my school bag.","Voici mon cartable."],["school","Can I have the scissors, please?","Est-ce que je peux avoir les ciseaux, s'il te plaît ?"],["school","I like my school.","J'aime mon école."],
 ["halloween","I'm a witch!","Je suis une sorcière !"],["halloween","Trick or treat!","Des bonbons ou un sort !"],["halloween","The pumpkin is orange.","La citrouille est orange."],
 ["halloween","I'm scared of ghosts.","J'ai peur des fantômes."],["halloween","Look, a big spider!","Regarde, une grosse araignée !"],["halloween","Happy Halloween!","Joyeux Halloween !"],
 ["pets","I've got a dog.","J'ai un chien."],["pets","I haven't got a cat.","Je n'ai pas de chat."],["pets","My rabbit is white.","Mon lapin est blanc."],
 ["pets","Have you got a pet?","As-tu un animal de compagnie ?"],["pets","The fish is orange.","Le poisson est orange."],["pets","My hamster is small.","Mon hamster est petit."],
 ["num20","I'm twelve years old.","J'ai douze ans."],["num20","My brother is fifteen.","Mon frère a quinze ans."],["num20","Fourteen plus one is fifteen.","Quatorze plus un font quinze."],
 ["num20","Page eleven, please.","Page onze, s'il te plaît."],["num20","I've got sixteen pencils.","J'ai seize crayons."],["num20","Count to twenty!","Compte jusqu'à vingt !"],
 ["family","This is my mum.","Voici ma maman."],["family","I've got a sister.","J'ai une sœur."],["family","My dad is tall.","Mon papa est grand."],
 ["family","I haven't got a brother.","Je n'ai pas de frère."],["family","I love my grandpa.","J'aime mon papi."],["family","Who is it? It's my uncle.","Qui est-ce ? C'est mon oncle."],
 ["body","Touch your nose!","Touche ton nez !"],["body","I've got two eyes.","J'ai deux yeux."],["body","My hair is brown.","Mes cheveux sont bruns."],
 ["body","Clap your hands!","Tape dans tes mains !"],["body","I've got ten fingers.","J'ai dix doigts."],["body","The monster has got three eyes.","Le monstre a trois yeux."],
 ["clothes","I'm wearing a blue T-shirt.","Je porte un tee-shirt bleu."],["clothes","Put on your coat!","Mets ton manteau !"],["clothes","My socks are red.","Mes chaussettes sont rouges."],
 ["clothes","I've got a new hat.","J'ai un nouveau chapeau."],["clothes","Where are my shoes?","Où sont mes chaussures ?"],["clothes","It's cold: take your scarf!","Il fait froid : prends ton écharpe !"],
 ["xmas","Merry Christmas!","Joyeux Noël !"],["xmas","Father Christmas is here!","Le Père Noël est là !"],["xmas","Thank you for my present!","Merci pour mon cadeau !"],
 ["xmas","The star is on the tree.","L'étoile est sur le sapin."],["xmas","Happy New Year!","Bonne année !"],["xmas","I can see a snowman.","Je vois un bonhomme de neige."],
 ["food","I like pizza.","J'aime la pizza."],["food","I don't like fish.","Je n'aime pas le poisson."],["food","Can I have some water, please?","Est-ce que je peux avoir de l'eau, s'il te plaît ?"],
 ["food","I'm hungry!","J'ai faim !"],["food","I love chocolate!","J'adore le chocolat !"],["food","Fish and chips, please.","Du poisson-frites, s'il vous plaît."],
 ["fruit","I like bananas.","J'aime les bananes."],["fruit","Do you like apples?","Aimes-tu les pommes ?"],["fruit","The lemon is yellow.","Le citron est jaune."],
 ["fruit","I don't like carrots.","Je n'aime pas les carottes."],["fruit","Strawberries are red.","Les fraises sont rouges."],["fruit","Three green pears.","Trois poires vertes."],
 ["days","Today is Monday.","Aujourd'hui, c'est lundi."],["days","I go swimming on Wednesday.","Je vais à la piscine le mercredi."],["days","Saturday and Sunday are the weekend.","Samedi et dimanche, c'est le week-end."],
 ["days","What day is it today?","Quel jour sommes-nous aujourd'hui ?"],["days","See you on Friday!","À vendredi !"],["days","No school on Sunday!","Pas d'école le dimanche !"],
 ["feelings","How are you?","Comment vas-tu ?"],["feelings","I'm happy today.","Je suis content aujourd'hui."],["feelings","I'm not sad.","Je ne suis pas triste."],
 ["feelings","Are you tired?","Es-tu fatigué ?"],["feelings","My dog is hungry.","Mon chien a faim."],["feelings","I'm scared of the dark.","J'ai peur du noir."],
 ["farm","The cow is black and white.","La vache est noire et blanche."],["farm","The pig is pink.","Le cochon est rose."],["farm","The farmer has got a tractor.","Le fermier a un tracteur."],
 ["farm","The horse is big.","Le cheval est grand."],["farm","Look at the little duck!","Regarde le petit canard !"],["farm","The hens are in the garden.","Les poules sont dans le jardin."],
 ["toys","Can I have the ball, please?","Est-ce que je peux avoir le ballon, s'il te plaît ?"],["toys","Here you are.","Tiens, voilà."],["toys","My teddy bear is brown.","Mon ours en peluche est marron."],
 ["toys","I've got a red kite.","J'ai un cerf-volant rouge."],["toys","Let's play with the robot!","Jouons avec le robot !"],["toys","I like my doll.","J'aime ma poupée."],
 ["months","My birthday is in May.","Mon anniversaire est en mai."],["months","When is your birthday?","Quand est ton anniversaire ?"],["months","Christmas is in December.","Noël est en décembre."],
 ["months","Happy birthday!","Joyeux anniversaire !"],["months","It's cold in January.","Il fait froid en janvier."],["months","School starts in September.","L'école commence en septembre."],
 ["weather","It's sunny today.","Il fait beau aujourd'hui."],["weather","It's raining: take your umbrella!","Il pleut : prends ton parapluie !"],["weather","What's the weather like?","Quel temps fait-il ?"],
 ["weather","It's cold in winter.","Il fait froid en hiver."],["weather","It's hot in summer.","Il fait chaud en été."],["weather","Look! A rainbow!","Regarde ! Un arc-en-ciel !"],
 ["house","Mum is in the kitchen.","Maman est dans la cuisine."],["house","My bedroom is small.","Ma chambre est petite."],["house","The cat is in the garden.","Le chat est dans le jardin."],
 ["house","Close the door, please.","Ferme la porte, s'il te plaît."],["house","I live in a big house.","J'habite dans une grande maison."],["house","Dad is in the bathroom.","Papa est dans la salle de bains."],
 ["furniture","The cat is on the bed.","Le chat est sur le lit."],["furniture","The ball is under the table.","Le ballon est sous la table."],["furniture","My book is in the box.","Mon livre est dans la boîte."],
 ["furniture","Sit on the chair.","Assieds-toi sur la chaise."],["furniture","Where is the lamp?","Où est la lampe ?"],["furniture","The dog is under the sofa.","Le chien est sous le canapé."],
 ["num100","My grandpa is seventy.","Mon papi a soixante-dix ans."],["num100","Fifty plus fifty is a hundred.","Cinquante plus cinquante font cent."],["num100","Page forty, please.","Page quarante, s'il te plaît."],
 ["num100","Count to a hundred!","Compte jusqu'à cent !"],["num100","My mum is forty.","Ma maman a quarante ans."],["num100","There are sixty minutes in an hour.","Il y a soixante minutes dans une heure."],
 ["easter","Happy Easter!","Joyeuses Pâques !"],["easter","I can see a chocolate egg!","Je vois un œuf en chocolat !"],["easter","The chick is yellow.","Le poussin est jaune."],
 ["easter","Put the eggs in the basket.","Mets les œufs dans le panier."],["easter","Let's go on an egg hunt!","Allons faire une chasse aux œufs !"],["easter","Look at the butterfly!","Regarde le papillon !"],
 ["wild","The elephant is big and grey.","L'éléphant est gros et gris."],["wild","The giraffe has got a long neck.","La girafe a un long cou."],["wild","I like monkeys.","J'aime les singes."],
 ["wild","The tiger is orange and black.","Le tigre est orange et noir."],["wild","The snake is long.","Le serpent est long."],["wild","Let's go to the zoo!","Allons au zoo !"],
 ["sport","I play football.","Je joue au football."],["sport","I like swimming.","J'aime nager."],["sport","I don't play tennis.","Je ne joue pas au tennis."],
 ["sport","Let's play basketball!","Jouons au basket !"],["sport","My team is the best!","Mon équipe est la meilleure !"],["sport","Do you like dancing?","Aimes-tu danser ?"],
 ["meals","I have cereal for breakfast.","Je mange des céréales au petit-déjeuner."],["meals","Can I have some milk, please?","Est-ce que je peux avoir du lait, s'il te plaît ?"],
 ["meals","Lunch is ready!","Le déjeuner est prêt !"],["meals","I'd like some toast with jam.","Je voudrais du pain grillé avec de la confiture."],
 ["meals","A cup of tea, please.","Une tasse de thé, s'il vous plaît."],["meals","Dinner is at seven.","Le dîner est à sept heures."],
 ["transport","I go to school by bus.","Je vais à l'école en bus."],["transport","I go to school on foot.","Je vais à l'école à pied."],["transport","My dad has got a red car.","Mon papa a une voiture rouge."],
 ["transport","The train is fast.","Le train est rapide."],["transport","Look! A plane in the sky!","Regarde ! Un avion dans le ciel !"],["transport","I ride my bike.","Je fais du vélo."],
 ["alphabet","How do you spell your name?","Comment épelles-tu ton prénom ?"],["alphabet","Can you spell it, please?","Peux-tu l'épeler, s'il te plaît ?"],
 ["alphabet","My name starts with T.","Mon prénom commence par T."],["alphabet","Let's sing the alphabet!","Chantons l'alphabet !"],["alphabet","What letter is it?","Quelle lettre est-ce ?"],
 ["beach","Let's go to the beach!","Allons à la plage !"],["beach","The sea is blue.","La mer est bleue."],["beach","I've got a red bucket.","J'ai un seau rouge."],
 ["beach","Look! A crab on the sand!","Regarde ! Un crabe sur le sable !"],["beach","Have a nice holiday!","Bonnes vacances !"],["beach","Put on your sunglasses!","Mets tes lunettes de soleil !"]
].map(([t,en,fr])=>({t,en,fr}));
const phrasesDe=t=>PH.filter(p=>p.t===t);
function autresPhrases(p,champ){
  const meme=melange(PH.filter(x=>x.t===p.t&&x.en!==p.en&&x.fr!==p.fr));
  const loin=melange(PH.filter(x=>x.t!==p.t&&x.en!==p.en&&x.fr!==p.fr));
  return [...meme,...loin].slice(0,3).map(x=>x[champ]);
}

/* =========================================================
   5. LES PETITS TEXTES À LIRE
   ========================================================= */
const TX=[
 {t:"greet",x:"Hello! My name is Lily. How are you? I'm fine, thank you. Goodbye!",q:[
  ["Comment s'appelle l'enfant ?","Lily",["Tom","Emma","Grace"],"« My name is Lily » : je m'appelle Lily."],
  ["Comment va Lily ?","bien",["mal","elle est fatiguée","elle est triste"],"« I'm fine » : je vais bien."]]},
 {t:"greet",x:"Tom: Hi, Emma! — Emma: Hello, Tom! — Tom: Good night, Emma! — Emma: Good night!",q:[
  ["À quel moment de la journée se passe ce dialogue ?","le soir",["le matin","à midi","l'après-midi"],"« Good night » se dit le soir, avant d'aller dormir."]]},
 {t:"num10",x:"I'm Hugo. I'm six years old. My sister is nine.",q:[
  ["Quel âge a Hugo ?","6 ans",["9 ans","7 ans","10 ans"],"« I'm six years old » : j'ai six ans."],
  ["Quel âge a la sœur de Hugo ?","9 ans",["6 ans","5 ans","10 ans"],"« My sister is nine » : ma sœur a neuf ans."]]},
 {t:"num10",x:"One, two, three, four, five: I can count to five!",q:[
  ["Jusqu'à combien l'enfant compte-t-il ?","5",["3","10","4"],"« count to five » : compter jusqu'à cinq."]]},
 {t:"colours",x:"My name is Jack. My bag is blue. My pen is red. My favourite colour is green.",q:[
  ["De quelle couleur est le sac de Jack ?","bleu",["rouge","vert","jaune"],"« My bag is blue » : mon sac est bleu."],
  ["Quelle est la couleur préférée de Jack ?","le vert",["le bleu","le rouge","le noir"],"« My favourite colour is green » : ma couleur préférée est le vert."]]},
 {t:"class",x:"Teacher: Good morning, children! Sit down, please. Open your books. Listen and repeat.",q:[
  ["Que doivent faire les enfants en premier ?","s'asseoir",["se lever","écrire","chanter"],"« Sit down » : asseyez-vous."],
  ["Que doivent-ils ouvrir ?","leur livre",["la porte","leur trousse","la fenêtre"],"« Open your books » : ouvrez vos livres."]]},
 {t:"school",x:"In my school bag, I've got a pencil case, two books and a ruler. I haven't got scissors.",q:[
  ["Qu'est-ce qui n'est pas dans le cartable ?","des ciseaux",["une règle","une trousse","des livres"],"« I haven't got scissors » : je n'ai pas de ciseaux."],
  ["Combien de livres y a-t-il ?","2",["1","3","4"],"« two books » : deux livres."]]},
 {t:"halloween",x:"It's Halloween! I'm a witch. My brother is a ghost. Trick or treat!",q:[
  ["En quoi est déguisé l'enfant qui parle ?","en sorcière",["en fantôme","en squelette","en chauve-souris"],"« I'm a witch » : je suis une sorcière."],
  ["Et son frère ?","en fantôme",["en sorcière","en citrouille","en vampire"],"« My brother is a ghost » : mon frère est un fantôme."]]},
 {t:"pets",x:"I've got a dog and two fish. My dog is black. I haven't got a cat.",q:[
  ["Quel animal l'enfant n'a-t-il pas ?","un chat",["un chien","des poissons"],"« I haven't got a cat » : je n'ai pas de chat."],
  ["De quelle couleur est le chien ?","noir",["blanc","marron","gris"],"« My dog is black » : mon chien est noir."]]},
 {t:"pets",x:"This is my rabbit. Its name is Snowy. It's white and it's small.",q:[
  ["Comment s'appelle le lapin ?","Snowy",["Rabbit","White","Small"],"« Its name is Snowy » : il s'appelle Snowy."],
  ["Comment est le lapin ?","blanc et petit",["noir et grand","blanc et grand","marron et petit"],"« white » = blanc, « small » = petit."]]},
 {t:"num20",x:"In my class, there are twelve girls and eleven boys.",q:[
  ["Combien y a-t-il de filles ?","12",["11","20","2"],"« twelve girls » : douze filles."],
  ["Combien y a-t-il de garçons ?","11",["12","7","1"],"« eleven boys » : onze garçons."]]},
 {t:"num20",x:"My big brother is fifteen. My big sister is eighteen.",q:[
  ["Quel âge a le grand frère ?","15 ans",["50 ans","5 ans","18 ans"],"« fifteen » = 15 (et « fifty » = 50)."],
  ["Quel âge a la grande sœur ?","18 ans",["80 ans","8 ans","15 ans"],"« eighteen » = 18 (et « eighty » = 80)."]]},
 {t:"family",x:"This is my family. This is my mum and this is my dad. I've got a brother, Leo. I haven't got a sister.",q:[
  ["Comment s'appelle le frère ?","Leo",["Dad","Mum","Sam"],"« I've got a brother, Leo » : j'ai un frère, Leo."],
  ["L'enfant a-t-il une sœur ?","non",["oui","il a deux sœurs"],"« I haven't got a sister » : je n'ai pas de sœur."]]},
 {t:"body",x:"I'm a monster! I've got three eyes, two noses and four arms.",q:[
  ["Combien d'yeux a le monstre ?","3",["2","4","1"],"« three eyes » : trois yeux."],
  ["Combien de bras a-t-il ?","4",["2","3","6"],"« four arms » : quatre bras."]]},
 {t:"clothes",x:"It's cold today. I'm wearing a green coat, a red scarf and blue gloves.",q:[
  ["De quelle couleur est l'écharpe ?","rouge",["verte","bleue","jaune"],"« a red scarf » : une écharpe rouge."],
  ["Quel temps fait-il ?","il fait froid",["il fait chaud","il pleut","il y a du soleil"],"« It's cold » : il fait froid."]]},
 {t:"xmas",x:"It's Christmas! The tree is green. The star is yellow. Father Christmas has got a red coat.",q:[
  ["De quelle couleur est l'étoile ?","jaune",["verte","rouge","blanche"],"« The star is yellow » : l'étoile est jaune."],
  ["Qui a un manteau rouge ?","le Père Noël",["le sapin","l'étoile","le bonhomme de neige"],"« Father Christmas has got a red coat »."]]},
 {t:"food",x:"I like pizza and chips. I don't like fish. I love chocolate!",q:[
  ["Qu'est-ce que l'enfant n'aime pas ?","le poisson",["la pizza","les frites","le chocolat"],"« I don't like fish » : je n'aime pas le poisson."],
  ["Qu'est-ce qu'il adore ?","le chocolat",["le poisson","le fromage","la soupe"],"« I love chocolate » : j'adore le chocolat."]]},
 {t:"fruit",x:"Emma: Do you like bananas? — Tom: Yes, I do. — Emma: Do you like carrots? — Tom: No, I don't.",q:[
  ["Est-ce que Tom aime les bananes ?","oui",["non"],"« Yes, I do » : oui."],
  ["Qu'est-ce que Tom n'aime pas ?","les carottes",["les bananes","les pommes","les fraises"],"« No, I don't » : non, il n'aime pas les carottes."]]},
 {t:"days",x:"On Monday, I go to school. On Wednesday, I go swimming. On Saturday, I play football.",q:[
  ["Quel jour l'enfant va-t-il à la piscine ?","mercredi",["lundi","samedi","vendredi"],"« On Wednesday, I go swimming »."],
  ["Que fait-il le samedi ?","il joue au football",["il va à l'école","il nage","il dort"],"« On Saturday, I play football »."]]},
 {t:"feelings",x:"Today is my birthday. I'm happy! But my dog is sad: it's ill.",q:[
  ["Comment se sent l'enfant ?","content",["triste","fatigué","en colère"],"« I'm happy » : je suis content."],
  ["Pourquoi le chien est-il triste ?","il est malade",["il a faim","il a peur","il est fatigué"],"« it's ill » : il est malade."]]},
 {t:"farm",x:"On the farm, there is a big horse, a pink pig and three white ducks.",q:[
  ["De quelle couleur est le cochon ?","rose",["blanc","noir","marron"],"« a pink pig » : un cochon rose."],
  ["Combien y a-t-il de canards ?","3",["2","1","4"],"« three white ducks » : trois canards blancs."]]},
 {t:"farm",x:"It's pink. It's got four legs. It says « oink ». What is it?",q:[
  ["Quel est cet animal ?","un cochon",["une vache","un canard","un cheval"],"Il est rose, il a quatre pattes et fait « oink » : c'est un cochon (a pig)."]]},
 {t:"toys",x:"Leo: Can I have the robot, please? — Mia: Here you are. — Leo: Thank you!",q:[
  ["Que demande Leo ?","le robot",["la poupée","le ballon","le cerf-volant"],"« Can I have the robot, please? »"],
  ["Que dit Leo à la fin ?","merci",["s'il te plaît","pardon","au revoir"],"« Thank you! » : merci !"]]},
 {t:"months",x:"My name is Grace. My birthday is in March. My brother's birthday is in July.",q:[
  ["En quel mois est l'anniversaire de Grace ?","en mars",["en mai","en juillet","en janvier"],"« My birthday is in March »."],
  ["Et celui de son frère ?","en juillet",["en juin","en mars","en janvier"],"« My brother's birthday is in July »."]]},
 {t:"weather",x:"Today is Monday. It's cold and it's snowing. Let's make a snowman!",q:[
  ["Quel temps fait-il ?","il fait froid et il neige",["il fait chaud","il pleut","il y a du vent"],"« It's cold and it's snowing »."],
  ["Que veulent faire les enfants ?","un bonhomme de neige",["un château de sable","un gâteau","un cerf-volant"],"« a snowman » : un bonhomme de neige."]]},
 {t:"house",x:"I live in a small house. It's got a kitchen, a living room, two bedrooms and a garden.",q:[
  ["Combien y a-t-il de chambres ?","2",["1","3","4"],"« two bedrooms » : deux chambres."],
  ["La maison est-elle grande ?","non, elle est petite",["oui, elle est très grande"],"« a small house » : une petite maison."]]},
 {t:"furniture",x:"Where is my cat? It isn't on the bed. It isn't under the table. Oh! It's in the box!",q:[
  ["Où est le chat ?","dans la boîte",["sur le lit","sous la table","sur la chaise"],"« It's in the box » : il est dans la boîte."]]},
 {t:"num100",x:"My grandma is sixty. My grandpa is seventy. My mum is forty.",q:[
  ["Quel âge a le papi ?","70 ans",["60 ans","17 ans","40 ans"],"« seventy » = 70."],
  ["Quel âge a la maman ?","40 ans",["14 ans","70 ans","4 ans"],"« forty » = 40."]]},
 {t:"easter",x:"Happy Easter! I've got a basket. In my basket, there are five chocolate eggs and a yellow chick.",q:[
  ["Combien y a-t-il d'œufs ?","5",["4","3","15"],"« five chocolate eggs » : cinq œufs en chocolat."],
  ["De quelle couleur est le poussin ?","jaune",["blanc","marron","orange"],"« a yellow chick » : un poussin jaune."]]},
 {t:"wild",x:"It's big and grey. It's got four legs and big ears. What is it?",q:[
  ["Quel est cet animal ?","un éléphant",["une girafe","un lion","un singe"],"Gros, gris, de grandes oreilles : c'est un éléphant (an elephant)."]]},
 {t:"wild",x:"It's long and green. It hasn't got legs. What is it?",q:[
  ["Quel est cet animal ?","un serpent",["un crocodile","un singe","un zèbre"],"Long, vert, sans pattes : c'est un serpent (a snake). Le crocodile a des pattes !"]]},
 {t:"wild",x:"It's yellow and brown. It's very tall. It's got a long neck. What is it?",q:[
  ["Quel est cet animal ?","une girafe",["un tigre","un éléphant","un ours"],"Très grande, avec un long cou : c'est une girafe (a giraffe)."]]},
 {t:"sport",x:"My name is Noah. I play football and rugby. I don't play tennis. I like swimming.",q:[
  ["À quel sport Noah ne joue-t-il pas ?","le tennis",["le football","le rugby"],"« I don't play tennis »."],
  ["Qu'est-ce que Noah aime faire ?","nager",["danser","courir","skier"],"« I like swimming » : j'aime nager."]]},
 {t:"meals",x:"For breakfast, I have cereal and orange juice. For lunch, I have a sandwich and an apple.",q:[
  ["Que boit l'enfant au petit-déjeuner ?","du jus d'orange",["du lait","du thé","de l'eau"],"« orange juice » : du jus d'orange."],
  ["Que mange-t-il au déjeuner ?","un sandwich et une pomme",["des céréales","une pizza","de la soupe"],"« For lunch, I have a sandwich and an apple »."]]},
 {t:"transport",x:"I go to school by bus. My sister goes to school on foot. My dad goes to work by car.",q:[
  ["Comment l'enfant va-t-il à l'école ?","en bus",["à pied","en voiture","à vélo"],"« by bus » : en bus."],
  ["Comment sa sœur va-t-elle à l'école ?","à pied",["en bus","en voiture","en train"],"« on foot » : à pied."]]},
 {t:"alphabet",x:"Teacher: What's your name? — Boy: Max. — Teacher: How do you spell it? — Boy: M, A, X.",q:[
  ["Que demande la maîtresse à la fin ?","comment s'écrit le prénom",["l'âge du garçon","sa couleur préférée","où il habite"],"« How do you spell it? » : comment ça s'écrit ?"]]},
 {t:"beach",x:"It's summer. I'm at the beach with my family. The sea is blue. I've got a red bucket and a yellow ball.",q:[
  ["Où est l'enfant ?","à la plage",["à l'école","à la ferme","au zoo"],"« at the beach » : à la plage."],
  ["De quelle couleur est le seau ?","rouge",["jaune","bleu","vert"],"« a red bucket » : un seau rouge."]]}
];

/* =========================================================
   6. LA GRAMMAIRE (générateurs)
   ========================================================= */
const COLS=[
 {en:"red",m:"rouge",f:"rouge",mp:"rouges",fp:"rouges"},{en:"blue",m:"bleu",f:"bleue",mp:"bleus",fp:"bleues"},
 {en:"green",m:"vert",f:"verte",mp:"verts",fp:"vertes"},{en:"yellow",m:"jaune",f:"jaune",mp:"jaunes",fp:"jaunes"},
 {en:"black",m:"noir",f:"noire",mp:"noirs",fp:"noires"},{en:"white",m:"blanc",f:"blanche",mp:"blancs",fp:"blanches"},
 {en:"brown",m:"marron",f:"marron",mp:"marron",fp:"marron"},{en:"grey",m:"gris",f:"grise",mp:"gris",fp:"grises"},
 {en:"pink",m:"rose",f:"rose",mp:"roses",fp:"roses"},{en:"purple",m:"violet",f:"violette",mp:"violets",fp:"violettes"},
 {en:"orange",m:"orange",f:"orange",mp:"orange",fp:"orange"}];
const ART_FR={m:"un",f:"une",mp:"des",fp:"des"};
const OBJETS=[{en:"car",fr:"voiture",g:"f",a:1},{en:"bike",fr:"vélo",g:"m",a:1},{en:"ball",fr:"ballon",g:"m",a:1},{en:"pen",fr:"stylo",g:"m",a:1},
 {en:"bag",fr:"sac",g:"m",a:1},{en:"kite",fr:"cerf-volant",g:"m",a:1},{en:"door",fr:"porte",g:"f",a:1},{en:"chair",fr:"chaise",g:"f",a:1},
 {en:"book",fr:"livre",g:"m",a:1},{en:"box",fr:"boîte",g:"f",a:1},{en:"flower",fr:"fleur",g:"f",a:1},{en:"bird",fr:"oiseau",g:"m",a:1}];
const HABITS=[{en:"T-shirt",fr:"tee-shirt",g:"m",a:1},{en:"jumper",fr:"pull",g:"m",a:1},{en:"trousers",fr:"pantalon",g:"m",a:0},
 {en:"skirt",fr:"jupe",g:"f",a:1},{en:"dress",fr:"robe",g:"f",a:1},{en:"shoes",fr:"chaussures",g:"fp",a:0},{en:"socks",fr:"chaussettes",g:"fp",a:0},
 {en:"coat",fr:"manteau",g:"m",a:1},{en:"hat",fr:"chapeau",g:"m",a:1},{en:"cap",fr:"casquette",g:"f",a:1},{en:"scarf",fr:"écharpe",g:"f",a:1},
 {en:"boots",fr:"bottes",g:"fp",a:0},{en:"gloves",fr:"gants",g:"mp",a:0}];
const gnEn=(c,o)=>o.a?`${art(c.en)} ${c.en} ${o.en}`:`${c.en} ${o.en}`;
const gnEnFaux=(c,o)=>o.a?`${art(o.en)} ${o.en} ${c.en}`:`${o.en} ${c.en}`;
const gnFr=(c,o)=>`${ART_FR[o.g]} ${o.fr} ${c[o.g]}`;
function couleurNom(liste){
  const o=pioche(liste),c=pioche(COLS),c2=pioche(COLS.filter(x=>x!==c)),o2=pioche(liste.filter(x=>x!==o&&x.a===o.a));
  return qcm(`Comment dit-on « ${gnFr(c,o)} » ?`,gnEn(c,o),[gnEnFaux(c,o),gnEn(c2,o),gnEn(c,o2)],`En anglais, la couleur se met avant le nom : ${gnEn(c,o)}.`);
}
const EMO_COUL=[["🍌","yellow"],["🍓","red"],["🐸","green"],["🍊","orange"],["🐷","pink"],["🐻","brown"],["☁️","white"],["🍆","purple"],
 ["🍋","yellow"],["🍅","red"],["🐘","grey"],["🌳","green"],["🥕","orange"],["🍫","brown"],["💙","blue"],["🖤","black"],["💜","purple"],["🐧","black and white"]];
const COUL_FR={red:"rouge",blue:"bleu",green:"vert",yellow:"jaune",black:"noir",white:"blanc",brown:"marron",grey:"gris",pink:"rose",purple:"violet",orange:"orange","black and white":"noir et blanc"};
const ANIMAUX_AVOIR=[["a dog","un chien","de chien"],["a cat","un chat","de chat"],["a rabbit","un lapin","de lapin"],["a fish","un poisson","de poisson"],
 ["a bird","un oiseau","d'oiseau"],["a hamster","un hamster","de hamster"],["a mouse","une souris","de souris"],["a tortoise","une tortue","de tortue"],
 ["a parrot","un perroquet","de perroquet"],["a bike","un vélo","de vélo"],["a kite","un cerf-volant","de cerf-volant"],["a doll","une poupée","de poupée"],
 ["a ball","un ballon","de ballon"],["a robot","un robot","de robot"],["a teddy bear","un ours en peluche","d'ours en peluche"],["a brother","un frère","de frère"],
 ["a sister","une sœur","de sœur"],["a pencil case","une trousse","de trousse"]];
const PLURIELS=[["cat","chat"],["dog","chien"],["rabbit","lapin"],["hamster","hamster"],["pen","stylo"],["pencil","crayon"],["book","livre"],
 ["ball","ballon"],["car","voiture"],["doll","poupée"],["apple","pomme"],["banana","banane"],["kite","cerf-volant"],["robot","robot"],["duck","canard"],
 ["pig","cochon"],["cow","vache"],["chair","chaise"],["star","étoile"],["egg","œuf"],["frog","grenouille"],["girl","fille"],["boy","garçon"]];
const FAMILLE=[["mum","ma maman"],["dad","mon papa"],["brother","mon frère"],["sister","ma sœur"],["grandma","ma mamie"],["grandpa","mon papi"],
 ["uncle","mon oncle"],["aunt","ma tante"],["cousin","mon cousin"],["baby brother","mon petit frère"],["baby sister","ma petite sœur"]];
const CORPS=[["nose","ton nez"],["head","ta tête"],["mouth","ta bouche"],["ears","tes oreilles"],["eyes","tes yeux"],["hair","tes cheveux"],
 ["tummy","ton ventre"],["arm","ton bras"],["leg","ta jambe"],["foot","ton pied"],["hands","tes mains"],["knees","tes genoux"],["toes","tes orteils"]];
const PAIRES_CORPS=[["eye","eyes","yeux"],["ear","ears","oreilles"],["hand","hands","mains"],["arm","arms","bras"],["leg","legs","jambes"],["foot","feet","pieds"],["tooth","teeth","dents"]];
const CONSIGNES=[["Stand up!","Je me lève."],["Sit down!","Je m'assieds."],["Listen!","J'écoute."],["Look!","Je regarde."],["Be quiet!","Je me tais."],
 ["Open your book!","J'ouvre mon livre."],["Close your book!","Je ferme mon livre."],["Put your hand up!","Je lève la main."],["Repeat!","Je répète."],
 ["Write!","J'écris."],["Come here!","Je viens."],["Clap your hands!","Je tape dans mes mains."]];
const INTERDITS=[["run","Ne cours pas !"],["shout","Ne crie pas !"],["talk","Ne parle pas !"],["touch","Ne touche pas !"],["eat in class","Ne mange pas en classe !"],["jump","Ne saute pas !"]];
const DEGUISEMENTS=[["witch","une sorcière"],["ghost","un fantôme"],["vampire","un vampire"],["monster","un monstre"],["skeleton","un squelette"],["bat","une chauve-souris"],["pumpkin","une citrouille"],["spider","une araignée"]];
const ALIMENTS=[["apples","les pommes","🍎"],["bananas","les bananes","🍌"],["carrots","les carottes","🥕"],["chocolate","le chocolat","🍫"],["cheese","le fromage","🧀"],
 ["milk","le lait","🥛"],["fish","le poisson","🐟"],["pizza","la pizza","🍕"],["ice cream","la glace","🍦"],["cake","le gâteau","🍰"],["chips","les frites","🍟"],
 ["tomatoes","les tomates","🍅"],["eggs","les œufs","🥚"],["bread","le pain","🥖"],["peas","les petits pois"],["strawberries","les fraises","🍓"],["pasta","les pâtes","🍝"],
 ["soup","la soupe"],["rice","le riz","🍚"],["oranges","les oranges","🍊"],["grapes","le raisin","🍇"],["pears","les poires","🍐"]];
const JOURS_EN=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const JOURS_FR=["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
const MOIS_EN=["January","February","March","April","May","June","July","August","September","October","November","December"];
const MOIS_FR=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
const HUMEURS=[["happy","content(e)","😊"],["sad","triste","😢"],["angry","en colère","😠"],["tired","fatigué(e)","😴"],["scared","effrayé(e)","😨"],["ill","malade","🤒"]];
const ADJ_ANIMAUX=[["elephant","🐘","big","small"],["mouse","🐭","small","big"],["snake","🐍","long","short"],["tortoise","🐢","slow","fast"],
 ["horse","🐴","fast","slow"],["giraffe","🦒","tall","short"],["ant","🐜","small","big"],["snail","🐌","slow","fast"]];
const GROS_PETIT=[["dog","chien","m"],["cat","chat","m"],["mouse","souris","f"],["pig","cochon","m"],["duck","canard","m"],["cow","vache","f"],["horse","cheval","m"],["hen","poule","f"],["goat","chèvre","f"]];
const A_DEMANDER=[["ball","le ballon"],["doll","la poupée"],["robot","le robot"],["kite","le cerf-volant"],["puzzle","le puzzle"],["teddy bear","l'ours en peluche"],
 ["pen","le stylo"],["ruler","la règle"],["rubber","la gomme"],["scissors","les ciseaux"],["glue","la colle"],["book","le livre"]];
const METEO=[["sunny","☀️","il fait beau"],["raining","🌧️","il pleut"],["snowing","🌨️","il neige"],["windy","💨","il y a du vent"],["cloudy","☁️","il y a des nuages"]];
const PIECES=[["kitchen","la cuisine"],["bedroom","la chambre"],["bathroom","la salle de bains"],["living room","le salon"],["garden","le jardin"],["garage","le garage"]];
const BETES=[["cat","Le chat"],["dog","Le chien"],["ball","Le ballon"],["book","Le livre"],["teddy bear","L'ours en peluche"]];
const PREP=[["on","sur"],["under","sous"],["in","dans"]];
const SUPPORTS={on:[["table","la table"],["bed","le lit"],["chair","la chaise"],["sofa","le canapé"],["box","la boîte"]],
 under:[["table","la table"],["bed","le lit"],["chair","la chaise"],["sofa","le canapé"]],in:[["box","la boîte"],["bag","le sac"],["cupboard","le placard"],["bed","le lit"]]};
const EMO_COMPTE=["🐶","🐱","🍎","⭐","🎈","🐟","🌸","🚗","🍌","🐥"];
const NOM_COMPTE={"🐶":"dogs","🐱":"cats","🍎":"apples","⭐":"stars","🎈":"balloons","🐟":"fish","🌸":"flowers","🚗":"cars","🍌":"bananas","🐥":"chicks"};
const LETS=[["Let's play football!","Jouons au football !"],["Let's go!","Allons-y !"],["Let's paint eggs!","Peignons des œufs !"],["Let's sing!","Chantons !"],
 ["Let's dance!","Dansons !"],["Let's go to the park!","Allons au parc !"],["Let's eat!","Mangeons !"],["Let's count to ten!","Comptons jusqu'à dix !"],
 ["Let's play hide and seek!","Jouons à cache-cache !"],["Let's find the eggs!","Trouvons les œufs !"]];
const PATTES=[["🦁","the lion",4],["🐘","the elephant",4],["🦓","the zebra",4],["🦒","the giraffe",4],["🐯","the tiger",4],
 ["🦆","the duck",2],["🐔","the hen",2],["🐦","the bird",2],["🐍","the snake",0],["🐟","the fish",0],["🐊","the crocodile",4],["🐻","the bear",4]];
const SPORTS=[["football","au football"],["tennis","au tennis"],["basketball","au basket"],["rugby","au rugby"],["volleyball","au volley"],["golf","au golf"]];
const NON_COMPT=[["milk","du lait"],["water","de l'eau"],["bread","du pain"],["cheese","du fromage"],["orange juice","du jus d'orange"],["jam","de la confiture"],
 ["butter","du beurre"],["toast","du pain grillé"],["cereal","des céréales"],["sugar","du sucre"],["rice","du riz"],["soup","de la soupe"]];
const TRANSPORTS=[["bus","en bus"],["car","en voiture"],["bike","à vélo"],["train","en train"],["taxi","en taxi"],["boat","en bateau"],["plane","en avion"]];
const MOTS_EPELER=["cat","dog","red","pen","bed","bus","hat","car","pig","box","egg","leg","six","ten","yes","sun","cap","hen","cup","fox"];
const ALPHA="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const LETTRES_PROCHES=[["A","E","I"],["E","I","Y"],["G","J"],["A","H","R"],["B","P","V"],["I","Y","E"],["K","Q"],["U","W","Q"]];
const PLAGE=[["I'm at the beach.","Je suis à la plage."],["The children are in the sea.","Les enfants sont dans la mer."],["The crab is on the sand.","Le crabe est sur le sable."],
 ["My towel is on the sand.","Ma serviette est sur le sable."],["The fish are in the sea.","Les poissons sont dans la mer."],["We're at the beach.","Nous sommes à la plage."]];

const GG={
 hello:[
  ()=>{const p=pioche(PRENOMS);return qcm(`Comment dit-on « Je m'appelle ${p} » ?`,`My name is ${p}.`,[`My name ${p}.`,`I name is ${p}.`,`Me name is ${p}.`],"On dit « My name is… » (ou « I'm… »).");},
  fx("Que réponds-tu à « What's your name? » ?","My name is Emma.",["I'm fine, thank you.","I'm seven.","Goodbye!"],"« What's your name? » = Comment t'appelles-tu ?"),
  fx("Que réponds-tu à « How are you? » ?","I'm fine, thank you.",["My name is Tom.","I'm seven years old.","Good night!"],"« How are you? » = Comment vas-tu ?"),
  fx("Que dis-tu quand tu pars ?","Goodbye!",["Hello!","Thank you!","Please!"],"Goodbye = au revoir."),
  fx("Que dis-tu le soir avant d'aller au lit ?","Good night!",["Good morning!","Hello!","Thank you!"],"Good night = bonne nuit."),
  fx("Complète : « What's your ___? — My name is Lily. »","name",["age","colour","nose"],"What's your name? = Comment t'appelles-tu ?"),
  fx("Comment demande-t-on « Comment t'appelles-tu ? » ?","What's your name?",["How are you?","How old are you?","Where are you?"],"What's your name?"),
  fx("Quelqu'un te donne un cadeau. Que dis-tu ?","Thank you!",["Goodbye!","Sorry!","Good night!"],"Thank you = merci."),
  ()=>{const p=pioche(PRENOMS);return ecoute(`Hello! I'm ${p}.`,"🔊 Écoute. Comment s'appelle l'enfant ?",p,melange(PRENOMS.filter(x=>x!==p)).slice(0,3),`« I'm ${p} » : je m'appelle ${p}.`);}],
 age:[
  ()=>{const n=alea(5,12),w=enL(n),w2=enL(n===12?11:n+1);return qcm(`Comment dit-on « J'ai ${n} ans » ?`,`I'm ${w} years old.`,[`I have ${w} years.`,`I've got ${w} years.`,`I'm ${w2} years old.`],`En anglais, on dit « je suis ${w} » : I'm ${w} years old.`);},
  ()=>{const n=alea(5,12);return ecoute(`I'm ${enL(n)} years old.`,"🔊 Écoute. Quel âge a l'enfant ?",`${n} ans`,[`${n===12?10:n+1} ans`,`${n-1} ans`,`${n===5?7:n-2} ans`],`« I'm ${enL(n)} years old » : j'ai ${n} ans.`);},
  fx("Comment demande-t-on l'âge de quelqu'un ?","How old are you?",["What's your name?","How are you?","What colour is it?"],"How old are you? = Quel âge as-tu ?"),
  fx("Pour dire son âge en anglais, on utilise le verbe…","« être » : I'm seven.",["« avoir » : I have seven.","« aimer » : I like seven."],"En anglais, on dit « je suis sept » : I'm seven."),
  ()=>{const w=enL(alea(5,10));return qcm(`Complète : « I'm ${w} years ___. »`,"old",["year","age","olds"],`I'm ${w} years old.`);},
  fx("« I'm » est la forme courte de…","I am",["I have","I like","I can"],"I'm = I am = je suis.")],
 colour:[
  ()=>{const [e,c]=pioche(EMO_COUL);return qcm(`${e} What colour is it?`,`It's ${c}.`,melange(EMO_COUL.filter(x=>x[1]!==c)).map(x=>`It's ${x[1]}.`),`It's ${c} : c'est ${COUL_FR[c]}.`);},
  ()=>couleurNom(OBJETS),
  fx("Comment demande-t-on « C'est de quelle couleur ? » ?","What colour is it?",["What's your name?","How old are you?","What's this?"],"What colour is it?"),
  fx("En anglais, où se place la couleur ?","avant le nom : a red car",["après le nom : a car red"],"La couleur se met avant le nom : a red car."),
  ()=>{const c=pioche(COLS),o=pioche(OBJETS);return ecoute(`It's ${art(c.en)} ${c.en} ${o.en}.`,"🔊 Écoute. De quelle couleur est l'objet ?",c.m,melange(COLS.filter(x=>x!==c)).map(x=>x.m),`« ${c.en} » = ${c.m}.`);}],
 orders:[
  ()=>{const [en,fr]=pioche(CONSIGNES);return qcm(`La maîtresse dit « ${en} ». Que fais-tu ?`,fr,melange(CONSIGNES.filter(x=>x[0]!==en)).map(x=>x[1]),`« ${en} » : ${fr}`);},
  ()=>{const [en,fr]=pioche(CONSIGNES);return ecoute(en,"🔊 Écoute la consigne. Que fais-tu ?",fr,melange(CONSIGNES.filter(x=>x[0]!==en)).map(x=>x[1]),`« ${en} » : ${fr}`);},
  ()=>{const [v,fr]=pioche(INTERDITS);return qcm(`Comment dit-on « ${fr} » ?`,`Don't ${v}!`,[`No ${v}!`,`Not ${v}!`,`${cap(v)} don't!`],`Pour interdire : Don't + verbe. Don't ${v}!`);},
  fx("Pour donner un ordre en anglais, on met…","le verbe tout seul : Sit down!",["« to » devant : To sit down!","« I » devant : I sit down!"],"Le verbe seul, au début : Sit down! Stand up!"),
  fx("Comment rendre « Sit down! » plus poli ?","Sit down, please.",["Sit down, thank you.","Sit down, sorry.","Sit down, hello."],"Please = s'il te plaît.")],
 article:[
  ()=>{const m=pioche(MOTS.filter(x=>/^an? /.test(x.en)&&!/^(num|days|months)/.test(x.t)));const nom=m.en.replace(/^an? /,""),a=art(nom);
   return qcm(`Choisis : « It's ___ ${nom}. » (${m.fr})`,a,[a==="a"?"an":"a"],a==="an"?`« ${nom} » commence par une voyelle : an ${nom}.`:`« ${nom} » commence par une consonne : a ${nom}.`);},
  ()=>{const l=MOTS.filter(x=>x.t==="school"&&x.e&&/^an? /.test(x.en));const m=pioche(l);return qcm(`${m.e} What's this?`,`It's ${m.en}.`,melange(l.filter(x=>x!==m)).map(x=>`It's ${x.en}.`),`It's ${m.en} : c'est ${m.fr}.`);},
  fx("Comment demande-t-on « Qu'est-ce que c'est ? » ?","What's this?",["Who is it?","Where is it?","How are you?"],"What's this? = Qu'est-ce que c'est ?"),
  fx("Devant quelles lettres dit-on « an » ?","a, e, i, o, u (les voyelles)",["b, c, d (les consonnes)","seulement devant « a »"],"an apple, an egg, an orange… devant une voyelle.")],
 iam:[
  ()=>{const [en,fr]=pioche(DEGUISEMENTS),o=pioche(DEGUISEMENTS.filter(x=>x[0]!==en));return qcm(`Comment dit-on « Je suis ${fr} ! » ?`,`I'm a ${en}!`,[`I've got a ${en}!`,`I'm ${en}!`,`I'm a ${o[0]}!`],`I'm a ${en}! (n'oublie pas « a »).`);},
  ()=>{const [en,fr]=pioche(DEGUISEMENTS);return qcm(`Comment dit-on « Je ne suis pas ${fr} » ?`,`I'm not a ${en}.`,[`I don't a ${en}.`,`I'm a ${en} not.`,`I not am a ${en}.`],`Pour la négation : I'm not…`);},
  ()=>{const [en,fr]=pioche(DEGUISEMENTS);return ecoute(`I'm a ${en}!`,"🔊 Écoute. En quoi l'enfant est-il déguisé ?",fr,melange(DEGUISEMENTS.filter(x=>x[0]!==en)).map(x=>x[1]),`« I'm a ${en} » : je suis ${fr}.`);},
  fx("Que disent les enfants à Halloween devant les portes ?","Trick or treat!",["Merry Christmas!","Happy Easter!","Good night!"],"Trick or treat! = Des bonbons ou un sort !"),
  fx("Quelle est la date d'Halloween ?","le 31 octobre",["le 25 décembre","le 1er janvier","le 14 juillet"],"Halloween, c'est le 31 octobre.")],
 havegot:[
  ()=>{const [en,un]=pioche(ANIMAUX_AVOIR),o=pioche(ANIMAUX_AVOIR.filter(x=>x[0]!==en));return qcm(`Comment dit-on « J'ai ${un} » ?`,`I've got ${en}.`,[`I haven't got ${en}.`,`I'm ${en}.`,`I've got ${o[0]}.`],`I've got = j'ai.`);},
  ()=>{const [en,,pas]=pioche(ANIMAUX_AVOIR);return qcm(`Comment dit-on « Je n'ai pas ${pas} » ?`,`I haven't got ${en}.`,[`I've got ${en}.`,`I not got ${en}.`,`I haven't ${en} got.`],`I haven't got = je n'ai pas.`);},
  ()=>{const [en,un]=pioche(ANIMAUX_AVOIR);return qcm(`Comment demande-t-on « As-tu ${un} ? » ?`,`Have you got ${en}?`,[`Are you got ${en}?`,`Got you ${en}?`,`Have you ${en} got?`],`Have you got…? = As-tu… ?`);},
  ()=>{const [en,un]=pioche(ANIMAUX_AVOIR),neg=alea(0,1);return ecoute(neg?`I haven't got ${en}.`:`I've got ${en}.`,`🔊 Écoute. L'enfant a-t-il ${un} ?`,neg?"non":"oui",[neg?"oui":"non"],neg?`« I haven't got » : je n'ai pas.`:`« I've got » : j'ai.`);},
  fx("« I've got » est la forme courte de…","I have got",["I am got","I had got","I has got"],"I've got = I have got."),
  fx("« Have you got a cat? » — Oui. Que réponds-tu ?","Yes, I have.",["Yes, I am.","Yes, I got.","Yes, I do."],"Yes, I have. / No, I haven't.")],
 plural:[
  ()=>{const [n]=pioche(PLURIELS),k=alea(2,10);return qcm(`Complète : « I've got ${enL(k)} ___. »`,`${n}s`,[n,`${n}es`],`Plusieurs : on ajoute -s → ${enL(k)} ${n}s.`);},
  ()=>{const [n,fr]=pioche(PLURIELS);return qcm(`Choisis : « one ___ » (${fr})`,`one ${n}`,[`one ${n}s`,`ones ${n}`],`Un seul : pas de -s. One ${n}.`);},
  ()=>{const [n]=pioche(PLURIELS),k=alea(2,9);return ecoute(`${enL(k)} ${n}s`,"🔊 Écoute. Combien y en a-t-il ?",String(k),[String(k+1),String(k-1),String(k===9?7:k+2)],`Tu as entendu « ${enL(k)} » : ${k}.`);},
  fx("Au pluriel, en anglais, on ajoute souvent…","-s",["-x","rien"],"one cat, two cats."),
  fx("Dans « two dogs », entend-on le -s final ?","oui, on l'entend",["non, il est muet"],"En anglais, on entend le -s du pluriel : dogz.")],
 thisis:[
  ()=>{const [en,fr]=pioche(FAMILLE),o=pioche(FAMILLE.filter(x=>x[0]!==en));return qcm(`Comment dit-on « Voici ${fr} » ?`,`This is my ${en}.`,[`This is my ${o[0]}.`,`This my ${en}.`,`Is this my ${en}.`],`This is my ${en}. (my = mon, ma, mes)`);},
  ()=>{const [en,fr]=pioche(FAMILLE);return ecoute(`This is my ${en}.`,"🔊 Écoute. Qui est-ce ?",fr,melange(FAMILLE.filter(x=>x[0]!==en)).map(x=>x[1]),`« This is my ${en} » : voici ${fr}.`);},
  fx("Comment demande-t-on « Qui est-ce ? » ?","Who is it?",["What's this?","How old are you?","Where is it?"],"Who = qui."),
  fx("« my » veut dire…","mon, ma, mes",["ton, ta, tes","son, sa, ses"],"my mum = ma maman, my dad = mon papa.")],
 bodyg:[
  ()=>{const [en,fr]=pioche(CORPS),o=pioche(CORPS.filter(x=>x[0]!==en));return qcm(`Comment dit-on « Touche ${fr} ! » ?`,`Touch your ${en}!`,[`Touch your ${o[0]}!`,`Touch my ${en}!`,`You touch ${en}!`],`your = ton, ta, tes.`);},
  ()=>{const [en,fr]=pioche(CORPS);return ecoute(`Touch your ${en}!`,"🔊 Écoute et montre ! Que dois-tu toucher ?",fr,melange(CORPS.filter(x=>x[0]!==en)).map(x=>x[1]),`« Touch your ${en} » : touche ${fr}.`);},
  ()=>{const [s,p,fr]=pioche(PAIRES_CORPS);return qcm(`Complète : « I've got two ___. » (${fr})`,p,[s,p==="feet"?"foots":p==="teeth"?"tooths":`${s}es`],`two ${p}${p==="feet"||p==="teeth"?" : pluriel spécial !":"."}`);},
  fx("Le pluriel de « foot » est…","feet",["foots","footes"],"one foot, two feet : pluriel spécial."),
  fx("« your » veut dire…","ton, ta, tes",["mon, ma, mes","son, sa, ses"],"Touch your nose! = Touche ton nez !")],
 adjorder:[
  ()=>couleurNom(HABITS),
  ()=>{const c=pioche(COLS),o=pioche(HABITS);return ecoute(`I've got ${gnEn(c,o)}.`,"🔊 Écoute. Qu'est-ce que l'enfant a ?",gnFr(c,o),[gnFr(pioche(COLS.filter(x=>x!==c)),o),gnFr(c,pioche(HABITS.filter(x=>x!==o))),gnFr(pioche(COLS.filter(x=>x!==c)),pioche(HABITS.filter(x=>x!==o)))],`« ${gnEn(c,o)} » = ${gnFr(c,o)}.`);},
  fx("La couleur prend-elle un -s au pluriel ? « two ___ hats »","red",["reds"],"Les adjectifs ne s'accordent jamais : two red hats."),
  fx("« un pantalon » se dit…","trousers",["a trouser","a trousers"],"Trousers est toujours au pluriel en anglais.")],
 wishes:[
  fx("Le 25 décembre, on dit :","Merry Christmas!",["Happy Easter!","Happy Halloween!","Good night!"],"Merry Christmas! = Joyeux Noël !"),
  fx("Le 1er janvier, on dit :","Happy New Year!",["Merry Christmas!","Happy Easter!","Happy birthday!"],"Happy New Year! = Bonne année !"),
  fx("Pour un anniversaire, on dit :","Happy birthday!",["Happy New Year!","Merry Christmas!","Good luck!"],"Happy birthday! = Joyeux anniversaire !"),
  fx("Quand quelqu'un te dit « Thank you! », tu réponds :","You're welcome!",["Goodbye!","Happy birthday!","I'm sorry!"],"You're welcome! = De rien !"),
  fx("Avant les vacances d'été, on dit :","Have a nice holiday!",["Happy birthday!","Merry Christmas!","Good morning!"],"Have a nice holiday! = Bonnes vacances !"),
  fx("Que veut dire « Thank you for my present! » ?","Merci pour mon cadeau !",["Joyeux Noël !","Voici mon cadeau !","Où est mon cadeau ?"],"present = cadeau."),
  ()=>{const l=[["Merry Christmas!","Noël"],["Happy Easter!","Pâques"],["Happy birthday!","un anniversaire"],["Happy New Year!","le Nouvel An"],["Happy Halloween!","Halloween"]];
   const [en,fr]=pioche(l);return ecoute(en,"🔊 Écoute. Quelle fête est-ce ?",fr,l.filter(x=>x[0]!==en).map(x=>x[1]),`« ${en} » se dit pour ${fr}.`);}],
 like:[
  ()=>{const [en,fr]=pioche(ALIMENTS),o=pioche(ALIMENTS.filter(x=>x[0]!==en));return qcm(`Comment dit-on « J'aime ${fr} » ?`,`I like ${en}.`,[`I don't like ${en}.`,`I am ${en}.`,`I like ${o[0]}.`],`I like ${en}. (pas de « the »)`);},
  ()=>{const [en,fr]=pioche(ALIMENTS);return qcm(`Comment dit-on « Je n'aime pas ${fr} » ?`,`I don't like ${en}.`,[`I like ${en}.`,`I not like ${en}.`,`I doesn't like ${en}.`],`I don't like = je n'aime pas.`);},
  ()=>{const l=ALIMENTS.filter(x=>x[2]);const [en,,e]=pioche(l),ok=alea(0,1);return qcm(`${ok?"👍":"👎"} ${e} : choisis la bonne phrase.`,ok?`I like ${en}.`:`I don't like ${en}.`,[ok?`I don't like ${en}.`:`I like ${en}.`,`I'm ${en}.`],ok?"👍 = I like.":"👎 = I don't like.");},
  ()=>{const [a,b]=melange(ALIMENTS);return ecoute(`I like ${a[0]}, but I don't like ${b[0]}.`,"🔊 Écoute. Qu'est-ce que l'enfant n'aime pas ?",b[1],[a[1],...melange(ALIMENTS.filter(x=>x!==a&&x!==b)).map(x=>x[1])],`« I don't like ${b[0]} » : je n'aime pas ${b[1]}.`);},
  fx("« don't » est la forme courte de…","do not",["does not","did not"],"I don't like = I do not like.")],
 doyoulike:[
  ()=>{const [en]=pioche(ALIMENTS),ok=alea(0,1);return qcm(`${ok?"👍":"👎"} « Do you like ${en}? » Choisis la bonne réponse.`,ok?"Yes, I do.":"No, I don't.",[ok?"No, I don't.":"Yes, I do.",ok?"Yes, I like.":"No, I not.","Yes, I am."],ok?"Oui : Yes, I do.":"Non : No, I don't.");},
  ()=>{const [en,fr]=pioche(ALIMENTS);return qcm(`Comment demande-t-on « Aimes-tu ${fr} ? » ?`,`Do you like ${en}?`,[`Are you like ${en}?`,`Do you likes ${en}?`,`Like you ${en}?`],`Do you like…? = Aimes-tu… ?`);},
  ()=>{const ok=alea(0,1);return ecoute(ok?"Yes, I do.":"No, I don't.","🔊 Écoute la réponse. L'enfant aime-t-il ça ?",ok?"oui":"non",[ok?"non":"oui"],ok?"« Yes, I do » : oui.":"« No, I don't » : non.");},
  fx("Que veut dire « Do you like grapes? » ?","Aimes-tu le raisin ?",["J'aime le raisin.","As-tu du raisin ?","Où est le raisin ?"],"Do you like…? = Aimes-tu… ?")],
 day:[
  ()=>{const i=alea(0,6),a=melange([0,1,2,3,4,5,6].filter(x=>x!==i));return qcm(`« What day is it today? » — C'est ${JOURS_FR[i]}. Que réponds-tu ?`,`It's ${JOURS_EN[i]}.`,[`It's ${JOURS_EN[a[0]]}.`,`It's ${JOURS_EN[a[1]]}.`,`It's ${JOURS_EN[i].toLowerCase()}.`],`It's ${JOURS_EN[i]}. Les jours prennent une majuscule.`);},
  ()=>{const i=alea(0,6);return qcm(`Quel jour vient après ${JOURS_EN[i]} ?`,JOURS_EN[(i+1)%7],[JOURS_EN[(i+6)%7],JOURS_EN[(i+2)%7],JOURS_EN[(i+4)%7]],`${JOURS_EN[i]}, ${JOURS_EN[(i+1)%7]}.`);},
  ()=>{const i=alea(0,6);return ecoute(`Today is ${JOURS_EN[i]}.`,"🔊 Écoute. Quel jour sommes-nous ?",JOURS_FR[i],[JOURS_FR[(i+1)%7],JOURS_FR[(i+3)%7],JOURS_FR[(i+5)%7]],`« ${JOURS_EN[i]} » = ${JOURS_FR[i]}.`);},
  fx("En anglais, les jours de la semaine s'écrivent…","avec une majuscule : Monday",["sans majuscule : monday"],"Monday, Tuesday… toujours avec une majuscule.")],
 howare:[
  ()=>{const [en,,e]=pioche(HUMEURS);return qcm(`${e} How are you?`,`I'm ${en}.`,melange(HUMEURS.filter(x=>x[0]!==en)).map(x=>`I'm ${x[0]}.`),`I'm ${en}.`);},
  ()=>{const [en,fr]=pioche(HUMEURS);return qcm(`Comment dit-on « Je ne suis pas ${fr} » ?`,`I'm not ${en}.`,[`I don't ${en}.`,`I'm ${en} not.`,`I not am ${en}.`],`I'm not = je ne suis pas.`);},
  ()=>{const [en,fr]=pioche(HUMEURS);return qcm(`Comment demande-t-on « Es-tu ${fr} ? » ?`,`Are you ${en}?`,[`Do you ${en}?`,`Have you ${en}?`,`Is you ${en}?`],`Are you…? = Es-tu… ?`);},
  ()=>{const [en,fr]=pioche(HUMEURS);return ecoute(`I'm ${en} today.`,"🔊 Écoute. Comment se sent l'enfant ?",fr,melange(HUMEURS.filter(x=>x[0]!==en)).map(x=>x[1]),`« I'm ${en} » : je suis ${fr}.`);},
  fx("Comment dit-on « J'ai faim » ?","I'm hungry.",["I have hungry.","I've got hungry.","I hungry."],"En anglais, on dit « je suis affamé » : I'm hungry.")],
 adjectives:[
  ()=>{const [a,e,b,c]=pioche(ADJ_ANIMAUX);return qcm(`${e} Complète : « The ${a} is ___. »`,b,[c],`The ${a} is ${b}. Le contraire : ${c}.`);},
  ()=>{const [en,fr,g]=pioche(GROS_PETIT),big=alea(0,1),adj=big?(g==="f"?"grosse":"gros"):(g==="f"?"petite":"petit"),un=g==="f"?"une":"un";
   return qcm(`Comment dit-on « ${un} ${adj} ${fr} » ?`,`a ${big?"big":"small"} ${en}`,[`a ${en} ${big?"big":"small"}`,`a ${big?"small":"big"} ${en}`,`${big?"big":"small"} a ${en}`],`L'adjectif se met avant le nom : a ${big?"big":"small"} ${en}.`);},
  fx("L'adjectif s'accorde-t-il ? « two ___ dogs »","big",["bigs","biges"],"Les adjectifs ne changent jamais : two big dogs."),
  fx("Quel est le contraire de « fast » ?","slow",["big","long","tall"],"fast = rapide, slow = lent."),
  fx("Quel est le contraire de « big » ?","small",["slow","long","fast"],"big = grand, gros ; small = petit.")],
 canihave:[
  ()=>{const [en,fr]=pioche(A_DEMANDER),o=pioche(A_DEMANDER.filter(x=>x[0]!==en));return qcm(`Tu veux ${fr}. Que dis-tu poliment ?`,`Can I have the ${en}, please?`,[`Can I have the ${en}, thank you?`,`I can have the ${en}, please?`,`Can I have the ${o[0]}, please?`],`Can I have the ${en}, please?`);},
  ()=>{const [en,fr]=pioche(A_DEMANDER);return ecoute(`Can I have the ${en}, please?`,"🔊 Écoute. Que demande l'enfant ?",fr,melange(A_DEMANDER.filter(x=>x[0]!==en)).map(x=>x[1]),`« the ${en} » = ${fr}.`);},
  fx("Que veut dire « Here you are » ?","Tiens, voilà.",["Tu es ici.","Où es-tu ?","Au revoir."],"Here you are = tiens, voilà."),
  fx("« please » veut dire…","s'il te plaît",["merci","pardon","bonjour"],"please = s'il te plaît."),
  fx("On te donne ce que tu as demandé. Que dis-tu ?","Thank you!",["Please!","Sorry!","Goodbye!"],"Thank you = merci.")],
 birthday:[
  ()=>{const i=alea(0,11),a=melange([...Array(12).keys()].filter(x=>x!==i));return qcm(`« When is your birthday? » — C'est en ${MOIS_FR[i]}. Que réponds-tu ?`,`It's in ${MOIS_EN[i]}.`,[`It's in ${MOIS_EN[a[0]]}.`,`It's in ${MOIS_EN[a[1]]}.`,`It's in ${MOIS_EN[i].toLowerCase()}.`],`It's in ${MOIS_EN[i]}. Les mois prennent une majuscule.`);},
  ()=>{const i=alea(0,11);return qcm(`Quel mois vient après ${MOIS_EN[i]} ?`,MOIS_EN[(i+1)%12],[MOIS_EN[(i+11)%12],MOIS_EN[(i+2)%12],MOIS_EN[(i+6)%12]],`${MOIS_EN[i]}, ${MOIS_EN[(i+1)%12]}.`);},
  ()=>{const i=alea(0,11);return ecoute(`My birthday is in ${MOIS_EN[i]}.`,"🔊 Écoute. En quel mois est l'anniversaire ?",MOIS_FR[i],[MOIS_FR[(i+1)%12],MOIS_FR[(i+4)%12],MOIS_FR[(i+8)%12]],`« ${MOIS_EN[i]} » = ${MOIS_FR[i]}.`);},
  fx("Comment demande-t-on « Quand est ton anniversaire ? » ?","When is your birthday?",["How old are you?","What day is it today?","Where is your birthday?"],"When = quand."),
  fx("Que chante-t-on à un anniversaire ?","Happy birthday to you!",["Merry Christmas!","Happy Easter to you!","Good night to you!"],"Happy birthday to you!")],
 weatherg:[
  ()=>{const [en,e,fr]=pioche(METEO);return qcm(`${e} What's the weather like?`,`It's ${en}.`,melange(METEO.filter(x=>x[0]!==en)).map(x=>`It's ${x[0]}.`),`It's ${en} : ${fr}.`);},
  ()=>{const [en,,fr]=pioche(METEO);return ecoute(`It's ${en} today.`,"🔊 Écoute. Quel temps fait-il ?",fr,melange(METEO.filter(x=>x[0]!==en)).map(x=>x[2]),`« It's ${en} » : ${fr}.`);},
  ()=>{const s=pioche([["hot","summer","chaud","l'été"],["cold","winter","froid","l'hiver"]]);return qcm(`Comment dit-on « Il fait ${s[2]} en ${s[3].replace("l'","")} » ?`,`It's ${s[0]} in ${s[1]}.`,[`It's ${s[0]==="hot"?"cold":"hot"} in ${s[1]}.`,`It's ${s[0]} in spring.`,`Is ${s[0]} in ${s[1]}.`],`${s[0]} = ${s[2]}, ${s[1]} = ${s[3]}.`);},
  fx("Comment demande-t-on « Quel temps fait-il ? » ?","What's the weather like?",["What colour is it?","What's this?","How old are you?"],"What's the weather like?"),
  fx("Quelle saison vient après « spring » ?","summer",["winter","autumn"],"spring, summer, autumn, winter.")],
 whereis:[
  ()=>{const [en,fr]=pioche(BETES),[p,pf]=pioche(PIECES);return qcm(`« Where is the ${en}? » ${fr} est dans ${pf}. Que réponds-tu ?`,`It's in the ${p}.`,melange(PIECES.filter(x=>x[0]!==p)).map(x=>`It's in the ${x[0]}.`),`It's in the ${p} : dans ${pf}.`);},
  ()=>{const [en,fr]=pioche(BETES),[p,pf]=pioche(PIECES);return ecoute(`The ${en} is in the ${p}.`,`🔊 Écoute. Où est-il ?`,`dans ${pf}`,melange(PIECES.filter(x=>x[0]!==p)).map(x=>`dans ${x[1]}`),`« in the ${p} » : dans ${pf}.`);},
  fx("Comment demande-t-on « Où est mon sac ? » ?","Where is my bag?",["What is my bag?","Who is my bag?","How is my bag?"],"Where = où."),
  fx("« Where » veut dire…","où",["quoi","qui","quand"],"Where is…? = Où est… ?")],
 inonunder:[
  ()=>{const [p,pf]=pioche(PREP),[s,sf]=pioche(SUPPORTS[p]),[b,bf]=pioche(BETES);
   return qcm(`Comment dit-on « ${bf} est ${pf} ${sf} » ?`,`The ${b} is ${p} the ${s}.`,PREP.filter(x=>x[0]!==p).map(x=>`The ${b} is ${x[0]} the ${s}.`),`${pf} = ${p}.`);},
  ()=>{const [p,pf]=pioche(PREP),[s,sf]=pioche(SUPPORTS[p]),[b]=pioche(BETES);
   return ecoute(`The ${b} is ${p} the ${s}.`,"🔊 Écoute. Où est-il ?",`${pf} ${sf}`,PREP.filter(x=>x[0]!==p).map(x=>`${x[1]} ${sf}`),`« ${p} the ${s} » : ${pf} ${sf}.`);},
  fx("« under » veut dire…","sous",["sur","dans","devant"],"under = sous."),
  fx("« on » veut dire…","sur",["sous","dans","derrière"],"on = sur."),
  fx("« in » veut dire…","dans",["sur","sous","à côté de"],"in = dans.")],
 howmany:[
  ()=>{const e=pioche(EMO_COMPTE),n=alea(2,9);return qcm(`How many ${NOM_COMPTE[e]}? ${e.repeat(n)}`,enL(n),[enL(n+1),enL(n-1),enL(n===9?6:n+2)],`Il y en a ${n} : ${enL(n)}.`);},
  ()=>{const a=alea(1,5),b=alea(1,4);return qcm(`Combien font ${a*10} + ${b*10} ? Choisis en anglais.`,enL((a+b)*10),[enL((a+b)*10+10),enL(a+b),enL(Math.abs(a-b)*10||50)],`${a*10} + ${b*10} = ${(a+b)*10} : ${enL((a+b)*10)}.`);},
  ()=>{const [n,fr]=pioche(PLURIELS);return qcm(`Comment demande-t-on « Combien ${/^[aeiouéœ]/.test(fr)?"d'":"de "}${fr}s ? » ?`,`How many ${n}s?`,[`How old ${n}s?`,`What many ${n}s?`,`How many ${n}?`],`How many + pluriel : How many ${n}s?`);},
  fx("« How many » veut dire…","combien",["comment","quand","où"],"How many cats? = Combien de chats ?")],
 lets:[
  ()=>{const [en,fr]=pioche(LETS);return qcm(`Comment dit-on « ${fr} » ?`,en,melange(LETS.filter(x=>x[0]!==en)).map(x=>x[0]),`Let's + verbe : ${en}`);},
  ()=>{const [en,fr]=pioche(LETS);return ecoute(en,"🔊 Écoute. Que propose l'enfant ?",fr,melange(LETS.filter(x=>x[0]!==en)).map(x=>x[1]),`« ${en} » : ${fr}`);},
  fx("Complète : « ___ play! » (Jouons !)","Let's",["Lets","Let"],"Let's avec une apostrophe : Let's play!"),
  fx("Qui cache les œufs à Pâques au Royaume-Uni ?","the Easter Bunny",["Father Christmas","the bells","a witch"],"The Easter Bunny = le lapin de Pâques. En France, ce sont souvent les cloches !")],
 itsgot:[
  ()=>{const [e,a,n]=pioche(PATTES);const bonne=n?`It's got ${enL(n)} legs.`:"It hasn't got legs.";
   return qcm(`${e} Choisis la bonne phrase pour ${a}.`,bonne,["It's got four legs.","It's got two legs.","It hasn't got legs.","It's got six legs."].filter(x=>x!==bonne),bonne);},
  fx("Complète : « The giraffe ___ got a long neck. »","has",["have","is"],"he, she, it → has got."),
  fx("« It's got » est la forme courte de…","It has got",["It is got","It have got"],"It's got = It has got = il a."),
  fx("Comment dit-on « Le serpent n'a pas de pattes » ?","The snake hasn't got legs.",["The snake haven't got legs.","The snake isn't legs.","The snake got not legs."],"hasn't got = n'a pas."),
  ()=>{const [e,a,n]=pioche(PATTES.filter(x=>x[2]));return ecoute(`${cap(a)} has got ${enL(n)} legs.`,`🔊 Écoute. ${e} Combien de pattes ?`,String(n),["0","2","4","6"].filter(x=>x!==String(n)),`« ${enL(n)} legs » : ${n} pattes.`);}],
 play:[
  ()=>{const [en,fr]=pioche(SPORTS);return qcm(`Comment dit-on « Je joue ${fr} » ?`,`I play ${en}.`,[`I play the ${en}.`,`I'm play ${en}.`,`I don't play ${en}.`],`I play ${en}. (pas de « the » devant un sport)`);},
  ()=>{const [en,fr]=pioche(SPORTS);return qcm(`Comment dit-on « Je ne joue pas ${fr} » ?`,`I don't play ${en}.`,[`I not play ${en}.`,`I play not ${en}.`,`I doesn't play ${en}.`],`I don't play = je ne joue pas.`);},
  ()=>{const [en,fr]=pioche(SPORTS);return ecoute(`I play ${en}.`,"🔊 Écoute. À quoi joue l'enfant ?",fr.replace(/^au /,"le "),melange(SPORTS.filter(x=>x[0]!==en)).map(x=>x[1].replace(/^au /,"le ")),`« ${en} » : ${fr.replace(/^au /,"le ")}.`);},
  fx("« Do you play tennis? » — Oui. Que réponds-tu ?","Yes, I do.",["Yes, I play.","Yes, I am.","Yes, I does."],"Yes, I do. / No, I don't."),
  fx("Comment dit-on « J'aime nager » ?","I like swimming.",["I like swim.","I swimming like.","I am like swimming."],"I like swimming.")],
 some:[
  ()=>{const [en,fr]=pioche(NON_COMPT),o=pioche(NON_COMPT.filter(x=>x[0]!==en));return qcm(`Comment demandes-tu poliment « ${fr} » ?`,`Can I have some ${en}, please?`,[`Can I has some ${en}, please?`,`I can have some ${en}, please?`,`Can I have some ${o[0]}, please?`],`Can I have some ${en}, please? (some = du, de la, des)`);},
  ()=>{const [en,fr]=pioche(NON_COMPT);return ecoute(`Can I have some ${en}, please?`,"🔊 Écoute. Que demande l'enfant ?",fr,melange(NON_COMPT.filter(x=>x[0]!==en)).map(x=>x[1]),`« some ${en} » = ${fr}.`);},
  fx("Les trois repas de la journée sont…","breakfast, lunch, dinner",["breakfast, lunch, bread","dinner, jam, lunch","milk, lunch, butter"],"breakfast (matin), lunch (midi), dinner (soir)."),
  fx("« some milk » veut dire…","du lait",["un lait","pas de lait"],"some = du, de la, des.")],
 by:[
  ()=>{const [en,fr]=pioche(TRANSPORTS),o=pioche(TRANSPORTS.filter(x=>x[0]!==en));return qcm(`Comment dit-on « Je vais à l'école ${fr} » ?`,`I go to school by ${en}.`,[`I go to school with ${en}.`,`I go at school by ${en}.`,`I go to school by ${o[0]}.`],`by + transport : by ${en}.`);},
  ()=>{const [en,fr]=pioche(TRANSPORTS);return ecoute(`I go to school by ${en}.`,"🔊 Écoute. Comment l'enfant va-t-il à l'école ?",fr,melange([...TRANSPORTS.filter(x=>x[0]!==en).map(x=>x[1]),"à pied"]),`« by ${en} » : ${fr}.`);},
  fx("« à pied » se dit…","on foot",["on feet","with foot"],"on foot = à pied."),
  fx("Quelle est la couleur des bus à Londres ?","rouge",["jaune","bleu","vert"],"Les bus de Londres sont rouges, à deux étages.")],
 spell:[
  ()=>{const g=pioche(LETTRES_PROCHES),L=pioche(g),f=g.filter(x=>x!==L);while(f.length<3){const x=pioche(ALPHA);if(x!==L&&!f.includes(x))f.push(x);}
   return ecoute(`the letter ${L}`,"🔊 Écoute. Quelle lettre entends-tu ?",L,f,`C'était la lettre ${L}.`);},
  ()=>{const w=pioche(MOTS_EPELER);return ecoute(w.toUpperCase().split("").join(", "),"🔊 Écoute : on épelle un mot. Lequel ?",w,melange(MOTS_EPELER.filter(x=>x!==w&&(x[0]===w[0]||x[1]===w[1]||x[2]===w[2]))).concat(melange(MOTS_EPELER.filter(x=>x!==w))),`On a épelé ${w.toUpperCase().split("").join("-")} : « ${w} ».`);},
  fx("Comment demande-t-on « Comment ça s'écrit ? » ?","How do you spell it?",["How are you?","What's this?","How old are you?"],"to spell = épeler."),
  fx("En anglais, la lettre I se prononce…","« aï »",["« i »","« é »"],"I se dit « aï », comme « eye » (l'œil)."),
  fx("En anglais, la lettre E se prononce…","« i »",["« eu »","« aï »"],"E se dit « i », comme dans « see »."),
  fx("En anglais, la lettre A se prononce…","« eï »",["« a »","« i »"],"A se dit « eï »."),
  ()=>{const i=alea(0,24);return qcm(`Quelle lettre vient après ${ALPHA[i]} ?`,ALPHA[i+1],[ALPHA[(i+2)%26],ALPHA[i],ALPHA[(i+5)%26]],`${ALPHA[i]}, ${ALPHA[i+1]}…`);}],
 holiday:[
  ()=>{const [en,fr]=pioche(PLAGE);return qcm(`Comment dit-on « ${fr} » ?`,en,melange(PLAGE.filter(x=>x[0]!==en)).map(x=>x[0]),en);},
  ()=>{const [en,fr]=pioche(PLAGE);return ecoute(en,"🔊 Écoute et choisis la bonne traduction.",fr,melange(PLAGE.filter(x=>x[0]!==en)).map(x=>x[1]),`« ${en} » : ${fr}`);},
  fx("Complète : « The children are ___ the sea. »","in",["on","at"],"in the sea = dans la mer."),
  fx("Complète : « My towel is ___ the sand. »","on",["in","under"],"on the sand = sur le sable."),
  fx("Complète : « I'm ___ the beach. »","at",["in","under"],"at the beach = à la plage."),
  fx("Comment dit-on « Bonnes vacances ! » ?","Have a nice holiday!",["Happy birthday!","Good night!","Happy New Year!"],"Have a nice holiday!")]
};
const REV_G={grev1:["hello","age","colour","orders","article","iam"],grev2:["havegot","plural","thisis","bodyg","adjorder","wishes"],
 grev3:["like","doyoulike","day","howare","adjectives","canihave"],grev4:["birthday","weatherg","whereis","inonunder","howmany","lets"],
 grev5:["itsgot","play","some","by","spell","holiday","like","havegot"],grev6:Object.keys(GG)};
const REV_V={rev1:["greet","num10","colours","class","school","halloween"],rev2:["pets","num20","family","body","clothes","xmas"],
 rev3:["food","fruit","days","feelings","farm","toys"],rev4:["months","weather","house","furniture","num100","easter"],
 rev5:["wild","sport","meals","transport","alphabet","beach","months","food"],rev6:["greet","colours","school","pets","family","body","clothes","food","fruit","days","feelings","farm","toys","months","weather","house","furniture","wild","sport","meals","transport","beach","num20","num100"]};

/* =========================================================
   7. VOCABULAIRE, ÉCOUTE, LECTURE
   ========================================================= */
const NOMBRES={num10:[1,10],num20:[11,20],num100:[20,100]};
function prochesNombre(n){
  const c=[];
  if(n>=13&&n<=19)c.push((n-10)*10);
  if(n%10===0&&n>=30&&n<=90)c.push(n/10+10);
  c.push(n+1,n-1,n+10,n-10,n+2,n-2);
  return [...new Set(c)].filter(x=>x>=1&&x<=100&&x!==n);
}
function exoNombre(tag){
  const [a,b]=NOMBRES[tag];let n=alea(a,b);if(tag==="num100"&&alea(0,1))n=alea(2,10)*10;
  const p=prochesNombre(n),t=alea(1,6);
  if(t===1)return qcm(`Comment dit-on ${n} en anglais ?`,enL(n),p.slice(0,3).map(enL),`${n} se dit « ${enL(n)} ».`);
  if(t===2)return qcm(`Quel nombre est « ${enL(n)} » ?`,String(n),p.slice(0,3).map(String),`« ${enL(n)} » = ${n}.`);
  if(t===3)return ecouteSaisie(enL(n),"🔊 Écoute et écris le nombre en chiffres.",[String(n),enL(n)],`Tu as entendu « ${enL(n)} » : ${n}.`);
  if(t===4)return ecoute(enL(n),"🔊 Écoute. Quel nombre entends-tu ?",String(n),p.slice(0,3).map(String),`Tu as entendu « ${enL(n)} » : ${n}.`);
  if(t===5&&n<=97)return qcm(`Quel nombre vient après « ${enL(n)} » ?`,enL(n+1),[enL(n-1),enL(n+2),enL(Math.min(n+10,99))],`${n} puis ${n+1} : ${enL(n+1)}.`);
  const x=alea(1,Math.max(1,Math.floor(n/2))),y=n-x;
  if(y<1)return ecouteSaisie(enL(n),"🔊 Écoute et écris le nombre en chiffres.",[String(n),enL(n)],`Tu as entendu « ${enL(n)} » : ${n}.`);
  return qcm(`Combien font ${x} + ${y} ? Choisis en anglais.`,enL(n),p.slice(0,3).map(enL),`${x} + ${y} = ${n} : ${enL(n)}.`);
}
const EC_TRAD=["🔊 Écoute et choisis la bonne traduction.","🔊 Écoute bien. Qu'est-ce que ça veut dire ?"];
function exoMot(tag){
  const m=pioche(motsDe(tag)),t=alea(1,m.e?6:5);
  if(t===1)return qcm(`Que veut dire « ${m.en} » ?`,m.fr,autres(m,"fr"),`« ${m.en} » veut dire « ${m.fr} ».`);
  if(t===2)return qcm(`Comment dit-on « ${m.fr} » en anglais ?`,m.en,autres(m,"en"),`« ${m.fr} » se dit « ${m.en} ».`);
  if(t===3)return ecoute(m.en,pioche(EC_TRAD),m.fr,autres(m,"fr"),`Tu as entendu « ${m.en} » : ${m.fr}.`);
  if(t===4)return ecoute(m.en,"🔊 Écoute et choisis le mot que tu entends.",m.en,autres(m,"en"),`Tu as entendu « ${m.en} » (${m.fr}).`);
  if(t===5)return vraiFaux(tag)||qcm(`Que veut dire « ${m.en} » ?`,m.fr,autres(m,"fr"),`« ${m.en} » veut dire « ${m.fr} ».`);
  return qcm(`${m.e} Comment dit-on en anglais ?`,m.en,autres(m,"en"),`${m.e} = ${m.en} (${m.fr}).`);
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
  if(NOMBRES[tag]&&alea(1,3)<=2)return exoNombre(tag);
  if(tag==="alphabet"&&alea(0,1))return pioche(GG.spell)();
  return exoMot(tag);
}
function exoG(tag){return pioche(GG[resoudreG(tag)])();}

/* L'écoute : des mots, des phrases, des sons proches */
const PAIRES=[[["ship","un bateau"],["sheep","un mouton"]],[["three","trois"],["tree","un arbre"]],[["hat","un chapeau"],["cat","un chat"],["cap","une casquette"]],
 [["pen","un stylo"],["ten","dix"],["hen","une poule"]],[["big","grand"],["pig","un cochon"]],[["house","une maison"],["mouse","une souris"]],
 [["mouse","une souris"],["mouth","une bouche"]],[["thirteen","13"],["thirty","30"]],[["fourteen","14"],["forty","40"]],[["fifteen","15"],["fifty","50"]],
 [["sixteen","16"],["sixty","60"]],[["head","une tête"],["bed","un lit"],["red","rouge"]],[["coat","un manteau"],["goat","une chèvre"],["boat","un bateau"]],
 [["car","une voiture"],["star","une étoile"]],[["rain","la pluie"],["train","un train"]],[["nose","un nez"],["rose","une rose"]],[["bear","un ours"],["hair","les cheveux"]],
 [["cow","une vache"],["how","comment"]],[["dog","un chien"],["duck","un canard"]],[["sock","une chaussette"],["clock","une horloge"],["rock","un rocher"]]];
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
/* Petits exercices d'écoute propres à un thème (pris dans la grammaire de la semaine) */
const LG={num10:"n",num20:"n",num100:"n",greet:"hello",colours:"colour",class:"orders",halloween:"iam",pets:"havegot",family:"thisis",body:"bodyg",
 clothes:"adjorder",xmas:"wishes",food:"like",fruit:"doyoulike",days:"day",feelings:"howare",toys:"canihave",months:"birthday",weather:"weatherg",
 house:"whereis",furniture:"inonunder",easter:"lets",wild:"itsgot",sport:"play",meals:"some",transport:"by",alphabet:"spell",beach:"holiday"};
function ecouteTheme(tag){
  const k=LG[tag];if(!k)return null;
  if(k==="n"){for(let i=0;i<20;i++){const q=exoNombre(tag);if(q.audio)return q;}return null;}
  const l=GG[k];for(let i=0;i<20;i++){const q=pioche(l)();if(q.audio)return q;}return null;
}
function exoL(tag){
  tag=resoudreV(tag);const r=alea(1,10);let q=null;
  if(r<=4)q=ecouteTheme(tag);
  else if(r===5)q=sonsProches();
  else if(r<=7)q=ecoutePhrase(tag);
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
function carte(tag){
  const p=pioche(PRENOMS),age=alea(5,10),c=pioche(COLS),an=pioche(ANIMAUX_AVOIR.slice(0,9)),al=pioche(ALIMENTS);
  const texte=`Hi! I'm ${p}. I'm ${enL(age)} years old. I've got ${an[0]}. I like ${al[0]}. My favourite colour is ${c.en}.`;
  const qs=[
   ()=>qcm(`📖 Lis : « ${texte} » Quel âge a ${p} ?`,`${age} ans`,[`${age+1} ans`,`${age-1} ans`,`${age+2} ans`],`« I'm ${enL(age)} years old » : ${age} ans.`),
   ()=>qcm(`📖 Lis : « ${texte} » Quel animal a ${p} ?`,an[1],melange(ANIMAUX_AVOIR.slice(0,9).filter(x=>x!==an)).map(x=>x[1]),`« I've got ${an[0]} » : j'ai ${an[1]}.`),
   ()=>qcm(`📖 Lis : « ${texte} » Qu'est-ce que ${p} aime ?`,al[1],melange(ALIMENTS.filter(x=>x!==al)).map(x=>x[1]),`« I like ${al[0]} » : j'aime ${al[1]}.`),
   ()=>qcm(`📖 Lis : « ${texte} » Quelle est la couleur préférée de ${p} ?`,c.m,melange(COLS.filter(x=>x!==c)).map(x=>x.m),`« My favourite colour is ${c.en} » : ${c.m}.`)];
  return pioche(qs)();
}
const CARTE_OK=["pets","family","food","fruit","feelings","toys","rev2","rev3","rev4","rev5","rev6"];
function exoR(tag){
  const brut=tag;tag=resoudreV(tag);const r=alea(1,9);let q=null;
  if(r<=3)q=lireTexte(tag);
  else if(r===4&&(CARTE_OK.includes(tag)||CARTE_OK.includes(brut)))q=carte(tag);
  else if(r===5)q=vraiFaux(tag);
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
  if(mat==="rev")return serie([F.v(s),F.g(s),F.l(s),F.r(s),F.v(av),F.l(av)]);
  return serie([F[mat](s),F[mat](s),F[mat](s),F[mat](av)]);
}

/* =========================================================
   9. LES LEÇONS (une par semaine)
   La liste des mots vient de MOTS ; la règle de grammaire est écrite ici.
   ========================================================= */
const LECON_G={
 hello:`<h4>Pour se présenter</h4><p>Pour dire comment tu t'appelles : <b>My name is…</b> ou <b>I'm…</b></p><ul><li><i>Hello! My name is Léa.</i> — Bonjour ! Je m'appelle Léa.</li><li><i>What's your name?</i> — Comment t'appelles-tu ?</li><li><i>How are you? — I'm fine, thank you.</i> — Comment vas-tu ? — Je vais bien, merci.</li></ul><p><b>Prononciation :</b> dans <b>hello</b>, on entend le « h » : souffle un peu, comme sur une vitre.</p>`,
 age:`<h4>Dire son âge</h4><p>En anglais, on ne dit pas « j'ai 7 ans » mais « je suis 7 » : <b>I'm seven</b> ou <b>I'm seven years old</b>. Jamais <i>I have</i>.</p><ul><li><i>How old are you?</i> — Quel âge as-tu ?</li><li><i>I'm seven years old.</i> — J'ai sept ans.</li><li><i>I'm six.</i> — J'ai six ans.</li></ul><p><b>Prononciation :</b> dans <b>three</b>, mets le bout de la langue entre les dents pour faire le « th ».</p>`,
 colour:`<h4>Dire la couleur</h4><p>Pour demander la couleur : <b>What colour is it?</b> On répond <b>It's…</b> (c'est…). La couleur se met <b>avant</b> le nom.</p><ul><li><i>What colour is it? — It's red.</i> — C'est de quelle couleur ? — C'est rouge.</li><li><i>a blue car</i> — une voiture bleue</li><li><i>My favourite colour is green.</i> — Ma couleur préférée est le vert.</li></ul><p><b>Astuce :</b> <b>colour</b> s'écrit avec « ou » en anglais britannique.</p>`,
 orders:`<h4>Donner un ordre</h4><p>Pour donner un ordre, on met le verbe tout seul, au début. Pour interdire, on ajoute <b>Don't</b> devant.</p><ul><li><i>Stand up!</i> — Lève-toi !</li><li><i>Open your book.</i> — Ouvre ton livre.</li><li><i>Don't run!</i> — Ne cours pas !</li></ul><p><b>Astuce :</b> ajoute <b>please</b> pour être poli : <i>Sit down, please.</i></p>`,
 article:`<h4>What's this? — It's a… / It's an…</h4><p><b>a</b> veut dire « un » ou « une ». Devant une voyelle (a, e, i, o, u), on dit <b>an</b> : c'est plus facile à prononcer.</p><ul><li><i>What's this? — It's a pen.</i> — Qu'est-ce que c'est ? — C'est un stylo.</li><li><i>It's an apple.</i> — C'est une pomme.</li><li><i>It's an egg.</i> — C'est un œuf.</li></ul><p><b>Astuce :</b> en anglais, les objets n'ont pas de genre : <b>a</b> remplace « un » et « une ».</p>`,
 iam:`<h4>I'm… / I'm not…</h4><p><b>I'm</b> est la forme courte de <b>I am</b> (je suis). Pour dire « je ne suis pas » : <b>I'm not</b>.</p><ul><li><i>I'm a witch!</i> — Je suis une sorcière !</li><li><i>I'm not a ghost.</i> — Je ne suis pas un fantôme.</li><li><i>Trick or treat!</i> — Des bonbons ou un sort !</li></ul><p><b>Culture :</b> le 31 octobre, les enfants se déguisent et sonnent aux portes pour demander des bonbons.</p>`,
 havegot:`<h4>I have got / I haven't got</h4><p>Pour dire ce que tu as : <b>I have got</b>, en court <b>I've got</b> (j'ai). Pour dire que tu n'as pas : <b>I haven't got</b>.</p><ul><li><i>I've got a dog.</i> — J'ai un chien.</li><li><i>I haven't got a cat.</i> — Je n'ai pas de chat.</li><li><i>Have you got a pet? — Yes, I have. / No, I haven't.</i> — As-tu un animal ? — Oui. / Non.</li></ul><p><b>Astuce :</b> <i>a pet</i> = un animal de compagnie.</p>`,
 plural:`<h4>Le pluriel : one cat, two cats</h4><p>Comme en français, on ajoute souvent un <b>-s</b> au nom. Mais en anglais, on <b>entend</b> ce -s !</p><ul><li><i>one cat — two cats</i> — un chat, deux chats</li><li><i>one book — three books</i> — un livre, trois livres</li><li><i>How many dogs? — Four dogs.</i> — Combien de chiens ? — Quatre chiens.</li></ul><p><b>Prononciation :</b> dans <b>thirteen</b> (13), on appuie sur la fin : « thir-TEEN ».</p>`,
 thisis:`<h4>This is my… / Who is it?</h4><p>Pour présenter quelqu'un : <b>This is my…</b> (voici mon, ma…). Pour demander qui c'est : <b>Who is it?</b></p><ul><li><i>This is my mum.</i> — Voici ma maman.</li><li><i>This is my brother.</i> — Voici mon frère.</li><li><i>Who is it? — It's my grandpa.</i> — Qui est-ce ? — C'est mon papi.</li></ul><p><b>Astuce :</b> <b>my</b> veut dire « mon », « ma » et « mes ».</p>`,
 bodyg:`<h4>Touch your…! / I've got two…</h4><p><b>your</b> veut dire « ton, ta, tes ». Pour compter les parties du corps, on ajoute <b>-s</b>.</p><ul><li><i>Touch your nose!</i> — Touche ton nez !</li><li><i>I've got two eyes and two ears.</i> — J'ai deux yeux et deux oreilles.</li><li><i>one foot — two feet</i> — un pied, deux pieds (pluriel spécial !)</li></ul><p><b>Astuce :</b> <b>one tooth — two teeth</b> (une dent, deux dents). Et <b>hair</b> (les cheveux) ne prend pas de -s.</p>`,
 adjorder:`<h4>La couleur avant le nom</h4><p>En français : « un chapeau rouge ». En anglais, la couleur passe <b>devant</b> : <b>a red hat</b>. Et elle ne prend jamais de -s.</p><ul><li><i>a red hat</i> — un chapeau rouge</li><li><i>a green dress</i> — une robe verte</li><li><i>blue shoes</i> — des chaussures bleues</li></ul><p><b>Astuce :</b> <b>trousers</b> (un pantalon) est toujours au pluriel en anglais.</p>`,
 wishes:`<h4>Les vœux</h4><p>Pour souhaiter une fête, on dit <b>Merry</b> ou <b>Happy</b> + le nom de la fête.</p><ul><li><i>Merry Christmas!</i> — Joyeux Noël !</li><li><i>Happy New Year!</i> — Bonne année !</li><li><i>Thank you for my present! — You're welcome!</i> — Merci pour mon cadeau ! — De rien !</li></ul><p><b>Culture :</b> au Royaume-Uni, Father Christmas passe dans la nuit du 24 au 25 décembre et remplit les chaussettes (stockings).</p>`,
 like:`<h4>I like / I don't like</h4><p>Pour dire ce que tu aimes : <b>I like</b>. Ce que tu n'aimes pas : <b>I don't like</b>. Pas de « the » devant le nom.</p><ul><li><i>I like pizza.</i> — J'aime la pizza.</li><li><i>I don't like fish.</i> — Je n'aime pas le poisson.</li><li><i>I like apples.</i> — J'aime les pommes.</li></ul><p><b>Astuce :</b> <b>don't</b> = <b>do not</b>. Et <i>I love chocolate!</i> = j'adore le chocolat !</p>`,
 doyoulike:`<h4>Do you like…?</h4><p>Pour demander « aimes-tu… ? », on commence par <b>Do you like…?</b> On répond court : <b>Yes, I do.</b> ou <b>No, I don't.</b></p><ul><li><i>Do you like bananas?</i> — Aimes-tu les bananes ?</li><li><i>Yes, I do.</i> — Oui.</li><li><i>No, I don't.</i> — Non.</li></ul><p><b>Astuce :</b> on ne répond pas « Yes, I like » : on reprend <b>do</b>.</p>`,
 day:`<h4>What day is it today?</h4><p>Les jours de la semaine prennent toujours une <b>majuscule</b> en anglais.</p><ul><li><i>What day is it today? — It's Monday.</i> — Quel jour sommes-nous ? — C'est lundi.</li><li><i>See you on Friday!</i> — À vendredi !</li><li><i>Saturday and Sunday are the weekend.</i> — Samedi et dimanche, c'est le week-end.</li></ul><p><b>Prononciation :</b> dans <b>Wednesday</b>, le premier « d » ne se prononce pas : « OUENZ-dèï ».</p>`,
 howare:`<h4>How are you?</h4><p>Pour dire comment tu te sens : <b>I'm</b> + le mot. Pour dire le contraire : <b>I'm not</b>.</p><ul><li><i>How are you? — I'm happy!</i> — Comment vas-tu ? — Je suis content !</li><li><i>I'm not tired.</i> — Je ne suis pas fatigué.</li><li><i>Are you hungry? — Yes, I am.</i> — As-tu faim ? — Oui.</li></ul><p><b>Attention :</b> « j'ai faim » se dit <b>I'm hungry</b> et « j'ai peur » se dit <b>I'm scared</b> : on utilise « je suis ».</p>`,
 adjectives:`<h4>Les adjectifs : big, small…</h4><p>L'adjectif se met <b>avant</b> le nom, ou après <b>is</b>. Il ne change jamais : pas de -s, pas de -e.</p><ul><li><i>The horse is big.</i> — Le cheval est grand.</li><li><i>a small duck</i> — un petit canard</li><li><i>The tortoise is slow.</i> — La tortue est lente.</li></ul><p><b>Les contraires :</b> <b>big</b> / <b>small</b> (grand / petit), <b>long</b> / <b>short</b> (long / court), <b>fast</b> / <b>slow</b> (rapide / lent).</p>`,
 canihave:`<h4>Can I have…, please?</h4><p>Pour demander poliment : <b>Can I have…, please?</b> On te le donne en disant <b>Here you are.</b> Tu réponds <b>Thank you!</b></p><ul><li><i>Can I have the ball, please?</i> — Est-ce que je peux avoir le ballon, s'il te plaît ?</li><li><i>Here you are.</i> — Tiens, voilà.</li><li><i>Thank you! — You're welcome.</i> — Merci ! — De rien.</li></ul><p><b>Astuce :</b> n'oublie jamais <b>please</b> : les Anglais y tiennent beaucoup !</p>`,
 birthday:`<h4>When is your birthday?</h4><p>Les mois prennent une <b>majuscule</b>. Pour dire en quel mois : <b>in</b> + le mois.</p><ul><li><i>When is your birthday?</i> — Quand est ton anniversaire ?</li><li><i>It's in May.</i> — C'est en mai.</li><li><i>Happy birthday!</i> — Joyeux anniversaire !</li></ul><p><b>Prononciation :</b> dans <b>birthday</b>, le « th » se fait avec la langue entre les dents.</p>`,
 weatherg:`<h4>What's the weather like?</h4><p>Pour parler du temps qu'il fait, on commence par <b>It's</b>.</p><ul><li><i>What's the weather like? — It's sunny.</i> — Quel temps fait-il ? — Il fait beau.</li><li><i>It's raining.</i> — Il pleut.</li><li><i>It's cold in winter.</i> — Il fait froid en hiver.</li></ul><p><b>Les saisons :</b> <b>spring</b> (printemps), <b>summer</b> (été), <b>autumn</b> (automne), <b>winter</b> (hiver).</p>`,
 whereis:`<h4>Where is…?</h4><p><b>Where</b> veut dire « où ». On répond avec <b>It's in…</b> (il est dans…).</p><ul><li><i>Where is the cat? — It's in the kitchen.</i> — Où est le chat ? — Il est dans la cuisine.</li><li><i>Where is my bag?</i> — Où est mon sac ?</li><li><i>Mum is in the garden.</i> — Maman est dans le jardin.</li></ul><p><b>Prononciation :</b> <b>where</b> se dit à peu près « ouèr ».</p>`,
 inonunder:`<h4>In, on, under</h4><p>Trois petits mots pour dire où sont les choses : <b>in</b> (dans), <b>on</b> (sur), <b>under</b> (sous).</p><ul><li><i>The cat is on the bed.</i> — Le chat est sur le lit.</li><li><i>The ball is under the table.</i> — Le ballon est sous la table.</li><li><i>The book is in the box.</i> — Le livre est dans la boîte.</li></ul><p><b>Astuce :</b> ne confonds pas <b>on</b> (sur) avec le français « on ».</p>`,
 howmany:`<h4>How many…?</h4><p><b>How many</b> veut dire « combien de ». Le nom qui suit est au pluriel. Les dizaines finissent par <b>-ty</b> : twenty, thirty, forty…</p><ul><li><i>How many cats? — Three cats.</i> — Combien de chats ? — Trois chats.</li><li><i>twenty-one, twenty-two…</i> — vingt et un, vingt-deux…</li><li><i>a hundred</i> — cent</li></ul><p><b>Attention :</b> <b>forty</b> (40) s'écrit sans « u », alors que <b>four</b> (4) en a un. Et 70, 80, 90 sont plus simples qu'en français : seventy, eighty, ninety.</p>`,
 lets:`<h4>Let's…!</h4><p>Pour proposer de faire quelque chose ensemble : <b>Let's</b> + le verbe. C'est comme « allons… », « jouons… ».</p><ul><li><i>Let's play!</i> — Jouons !</li><li><i>Let's go!</i> — Allons-y !</li><li><i>Happy Easter! Let's find the eggs!</i> — Joyeuses Pâques ! Trouvons les œufs !</li></ul><p><b>Culture :</b> au Royaume-Uni, c'est le lapin de Pâques (<b>the Easter Bunny</b>) qui cache les œufs.</p>`,
 itsgot:`<h4>It's got…</h4><p>Pour décrire un animal : <b>It's got</b> (= It has got, il a). Avec he, she, it, on dit <b>has got</b>.</p><ul><li><i>The lion has got four legs.</i> — Le lion a quatre pattes.</li><li><i>It's got a long neck.</i> — Il a un long cou.</li><li><i>The snake hasn't got legs.</i> — Le serpent n'a pas de pattes.</li></ul><p><b>Astuce :</b> <b>leg</b> veut dire la jambe des personnes et la patte des animaux.</p>`,
 play:`<h4>I play… / I don't play…</h4><p>Pour un sport ou un jeu : <b>I play</b> + le sport, sans « the ». Pour la négation : <b>I don't play</b>.</p><ul><li><i>I play football.</i> — Je joue au football.</li><li><i>I don't play tennis.</i> — Je ne joue pas au tennis.</li><li><i>Do you play rugby? — Yes, I do.</i> — Joues-tu au rugby ? — Oui.</li></ul><p><b>Astuce :</b> pour la natation, on dit <i>I like swimming</i> (j'aime nager).</p>`,
 some:`<h4>Can I have some…, please?</h4><p>Pour demander « du », « de la » ou « des », on dit <b>some</b>.</p><ul><li><i>Can I have some milk, please?</i> — Est-ce que je peux avoir du lait, s'il te plaît ?</li><li><i>I'd like some toast.</i> — Je voudrais du pain grillé.</li><li><i>breakfast, lunch, dinner</i> — le petit-déjeuner, le déjeuner, le dîner</li></ul><p><b>Culture :</b> le petit-déjeuner anglais traditionnel : des œufs, du bacon, des haricots et du pain grillé !</p>`,
 by:`<h4>by bus, on foot</h4><p>Pour dire comment tu te déplaces : <b>by</b> + le transport (sans « the »). Mais « à pied » se dit <b>on foot</b>.</p><ul><li><i>I go to school by bus.</i> — Je vais à l'école en bus.</li><li><i>I go to school by bike.</i> — Je vais à l'école à vélo.</li><li><i>I go to school on foot.</i> — Je vais à l'école à pied.</li></ul><p><b>Culture :</b> à Londres, les bus sont rouges et ont deux étages : ce sont les « double-deckers ».</p>`,
 spell:`<h4>How do you spell it?</h4><p>Pour demander comment s'écrit un mot : <b>How do you spell it?</b> Certaines lettres se disent autrement qu'en français.</p><ul><li><b>A</b> se dit « eï », <b>E</b> se dit « i », <b>I</b> se dit « aï »</li><li><b>G</b> se dit « dji », <b>J</b> se dit « djeï », <b>H</b> se dit « eïtch »</li><li><b>R</b> se dit « ar », <b>Y</b> se dit « ouaï »</li></ul><p><b>Exemple :</b> <i>How do you spell « cat »? — C, A, T.</i></p>`,
 holiday:`<h4>At the beach: at, in, on</h4><p>Pour dire où l'on est en vacances : <b>at the beach</b> (à la plage), <b>in the sea</b> (dans la mer), <b>on the sand</b> (sur le sable).</p><ul><li><i>I'm at the beach.</i> — Je suis à la plage.</li><li><i>The children are in the sea.</i> — Les enfants sont dans la mer.</li><li><i>Have a nice holiday!</i> — Bonnes vacances !</li></ul><p><b>Astuce :</b> en anglais britannique, les vacances se disent <b>the holidays</b>.</p>`
};
const LECON_REV={
 rev1:`<h4>Révision de la période 1</h4><p>Cette semaine, on révise tout ce qu'on a appris depuis la rentrée. Relis ces phrases à voix haute :</p><ul><li><i>Hello! My name is Tom.</i> — Bonjour ! Je m'appelle Tom.</li><li><i>How old are you? — I'm seven.</i> — Quel âge as-tu ? — J'ai sept ans.</li><li><i>What colour is it? — It's blue.</i> — C'est de quelle couleur ? — C'est bleu.</li><li><i>Stand up! Sit down! Don't run!</i> — Lève-toi ! Assieds-toi ! Ne cours pas !</li><li><i>It's a pen. It's an apple.</i> — C'est un stylo. C'est une pomme.</li><li><i>I'm a witch! Trick or treat!</i> — Je suis une sorcière ! Des bonbons ou un sort !</li></ul><p><b>Les nombres :</b> one, two, three, four, five, six, seven, eight, nine, ten.</p><p><b>Astuce :</b> <b>an</b> devant une voyelle : <i>an egg, an orange</i>.</p>`,
 rev2:`<h4>Révision de la période 2</h4><p>On révise les animaux, la famille, le corps, les vêtements et Noël.</p><ul><li><i>I've got a dog. I haven't got a cat.</i> — J'ai un chien. Je n'ai pas de chat.</li><li><i>one cat, two cats</i> — un chat, deux chats</li><li><i>This is my sister.</i> — Voici ma sœur.</li><li><i>Touch your nose! I've got two eyes.</i> — Touche ton nez ! J'ai deux yeux.</li><li><i>a red hat, blue shoes</i> — un chapeau rouge, des chaussures bleues</li><li><i>Merry Christmas and Happy New Year!</i> — Joyeux Noël et bonne année !</li></ul><p><b>Les nombres :</b> eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty.</p><p><b>Astuce :</b> one foot, two <b>feet</b> ; one tooth, two <b>teeth</b>.</p>`,
 rev3:`<h4>Révision de la période 3</h4><p>On révise la nourriture, les jours, les sentiments, la ferme et les jouets.</p><ul><li><i>I like pizza. I don't like fish.</i> — J'aime la pizza. Je n'aime pas le poisson.</li><li><i>Do you like apples? — Yes, I do. / No, I don't.</i> — Aimes-tu les pommes ? — Oui. / Non.</li><li><i>What day is it today? — It's Friday.</i> — Quel jour sommes-nous ? — C'est vendredi.</li><li><i>How are you? — I'm happy. I'm not tired.</i> — Comment vas-tu ? — Je suis content. Je ne suis pas fatigué.</li><li><i>The horse is big. The duck is small.</i> — Le cheval est grand. Le canard est petit.</li><li><i>Can I have the ball, please? — Here you are.</i> — Je peux avoir le ballon, s'il te plaît ? — Tiens, voilà.</li></ul><p><b>Astuce :</b> les jours prennent une majuscule : <i>Monday, Tuesday…</i></p>`,
 rev4:`<h4>Révision de la période 4</h4><p>On révise les mois, la météo, la maison, les nombres et Pâques.</p><ul><li><i>When is your birthday? — It's in June.</i> — Quand est ton anniversaire ? — C'est en juin.</li><li><i>What's the weather like? — It's raining.</i> — Quel temps fait-il ? — Il pleut.</li><li><i>Where is the cat? — It's in the kitchen.</i> — Où est le chat ? — Il est dans la cuisine.</li><li><i>The ball is under the bed. The book is on the table.</i> — Le ballon est sous le lit. Le livre est sur la table.</li><li><i>How many eggs? — Twenty eggs!</i> — Combien d'œufs ? — Vingt œufs !</li><li><i>Let's go! Happy Easter!</i> — Allons-y ! Joyeuses Pâques !</li></ul><p><b>Les dizaines :</b> twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety, a hundred.</p>`,
 rev5:`<h4>Révision générale (1)</h4><p>On révise les animaux sauvages, le sport, les repas, les transports et l'alphabet.</p><ul><li><i>The lion has got four legs.</i> — Le lion a quatre pattes.</li><li><i>I play football. I don't play tennis.</i> — Je joue au football. Je ne joue pas au tennis.</li><li><i>Can I have some milk, please?</i> — Est-ce que je peux avoir du lait, s'il te plaît ?</li><li><i>I go to school by bus / on foot.</i> — Je vais à l'école en bus / à pied.</li><li><i>How do you spell it? — C, A, T.</i> — Comment ça s'écrit ? — C, A, T.</li><li><i>I'm at the beach. Have a nice holiday!</i> — Je suis à la plage. Bonnes vacances !</li></ul><p><b>Astuce :</b> relis les leçons des semaines précédentes et redis les phrases à voix haute.</p>`,
 rev6:`<h4>Révision générale (2)</h4><p>Dernière semaine : on joue avec tout ce qu'on a appris cette année ! Sais-tu dire ces phrases ?</p><ul><li><i>Hello! My name is Lily. I'm eight years old.</i> — Bonjour ! Je m'appelle Lily. J'ai huit ans.</li><li><i>I've got a brother and a cat.</i> — J'ai un frère et un chat.</li><li><i>I like chocolate. I don't like carrots.</i> — J'aime le chocolat. Je n'aime pas les carottes.</li><li><i>My favourite colour is purple.</i> — Ma couleur préférée est le violet.</li><li><i>My birthday is in August.</i> — Mon anniversaire est en août.</li><li><i>Can I have an ice cream, please? — Here you are!</i> — Je peux avoir une glace, s'il te plaît ? — Tiens !</li></ul><p><b>Bravo !</b> Tu sais maintenant te présenter en anglais. <i>Have a nice holiday!</i></p>`
};
function faireLecon(s){
  if(LECON_REV[s.tv])return LECON_REV[s.tv];
  const mots=MOTS.filter(m=>m.t===s.tv),lignes=[];
  for(let i=0;i<mots.length;i+=2)lignes.push("<tr>"+mots.slice(i,i+2).map(m=>`<td><b>${m.en}</b> — ${m.fr}</td>`).join("")+"</tr>");
  return `<h4>Les mots de la semaine : ${s.v}</h4><table>${lignes.join("")}</table>`+LECON_G[s.tg];
}
SEMAINES.forEach(s=>{s.lecon=faireLecon(s);});

export const programme = { code: "anglais-1", nom: "Anglais · niveau 1 (CP-CE2)", rituel: "Monte le son : certaines questions se lisent à voix haute. Un adulte peut lire avec toi.", SEMAINES, JOURS, NOM_MAT, PERIODES, matiereDuJour, seanceHorsLigne };
