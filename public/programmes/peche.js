// La pêche : leçons, poissons, quiz et liste du sac. Repris du carnet de pêche (carnet-de-peche)
// le 08/10/2026 ; c'est maintenant la seule source de ce contenu.

/* =========================================================
   DESSINS
   ========================================================= */
const DESSINS = {
hamecon:`<svg viewBox="0 0 420 200" role="img" aria-label="Les parties d'un hameçon">
  <path d="M120 30 L120 118 A46 46 0 0 0 212 118 L212 74" fill="none" stroke="#16323C" stroke-width="11" stroke-linecap="round"/>
  <path d="M212 74 L196 92 M212 74 L228 92" fill="none" stroke="#16323C" stroke-width="9" stroke-linecap="round"/>
  <path d="M203 96 L214 84" stroke="#C94A34" stroke-width="7" stroke-linecap="round"/>
  <circle cx="120" cy="26" r="12" fill="none" stroke="#16323C" stroke-width="9"/>
  <g font-family="system-ui" font-size="15" fill="#1C5566">
    <text x="140" y="24">l'œillet : on attache le fil ici</text>
    <text x="140" y="70">la hampe</text>
    <text x="248" y="150">la courbure</text>
    <text x="243" y="70">la pointe</text>
    <text x="243" y="112" fill="#C94A34">l'ardillon</text>
  </g>
  <g stroke="#4E8296" stroke-width="1.5" fill="none">
    <path d="M133 20 H136"/><path d="M133 66 H136"/><path d="M240 66 H236"/>
    <path d="M240 108 H232"/><path d="M245 146 L215 140"/>
  </g>
</svg>`,
ligne:`<svg viewBox="0 0 420 240" role="img" aria-label="Une ligne montée pour la pêche au coup">
  <rect x="0" y="96" width="420" height="144" fill="#DCEAEE"/>
  <path d="M0 96 H420" stroke="#4E8296" stroke-width="2"/>
  <path d="M40 14 L250 44" stroke="#3E6B4A" stroke-width="7" stroke-linecap="round"/>
  <path d="M250 44 L262 60 L262 186" stroke="#16323C" stroke-width="2.5" fill="none"/>
  <ellipse cx="262" cy="86" rx="15" ry="26" fill="#C94A34"/>
  <ellipse cx="262" cy="72" rx="15" ry="12" fill="#FFFFFF"/>
  <circle cx="262" cy="132" r="5" fill="#16323C"/><circle cx="262" cy="150" r="5" fill="#16323C"/>
  <path d="M262 186 q 10 12 2 20" stroke="#16323C" stroke-width="3" fill="none"/>
  <path d="M255 214 h 30" stroke="#8C7B5A" stroke-width="6" stroke-linecap="round"/>
  <g font-family="system-ui" font-size="15" fill="#1C5566">
    <text x="60" y="34">la canne</text>
    <text x="286" y="70">le flotteur</text>
    <text x="286" y="146">les plombs</text>
    <text x="286" y="208">l'hameçon et l'appât</text>
    <text x="16" y="88" fill="#4E8296">la surface</text>
    <text x="16" y="232" fill="#8C7B5A">le fond</text>
  </g>
</svg>`,
noeud:`<svg viewBox="0 0 420 170" role="img" aria-label="Le nœud pour attacher un hameçon">
  <g fill="none" stroke="#16323C" stroke-width="4" stroke-linecap="round">
    <path d="M20 40 H150"/><circle cx="168" cy="40" r="18"/>
    <path d="M20 100 H150 q30 0 30 -18"/>
    <path d="M60 100 q10 -22 24 0 M92 100 q10 -22 24 0 M124 100 q10 -22 24 0"/>
    <path d="M20 148 H120 q40 0 46 -30"/>
  </g>
  <g font-family="system-ui" font-size="15" fill="#1C5566">
    <text x="200" y="36">1. passe le fil dans l'œillet</text>
    <text x="200" y="96">2. fais quatre ou cinq tours</text>
    <text x="200" y="152">3. repasse et serre en mouillant</text>
  </g>
</svg>`
};

function poissonSVG(forme, couleur, ventre){
  const corps = {
    rond:  "M18 46 q28 -34 74 -30 q34 3 46 30 q-12 27 -46 30 q-46 4 -74 -30 Z",
    long:  "M10 48 q38 -22 92 -20 q30 1 44 20 q-14 19 -44 20 q-54 2 -92 -20 Z",
    haut:  "M20 48 q26 -38 72 -34 q36 3 48 34 q-12 31 -48 34 q-46 4 -72 -34 Z"
  }[forme];
  const raies = forme === "raye"
    ? '' : '';
  return `<svg viewBox="0 0 176 96" role="img">
    <path d="${corps}" fill="${couleur}"/>
    <path d="M18 46 q-12 -18 -14 -22 q18 6 22 12 Z M18 50 q-12 18 -14 22 q18 -6 22 -12 Z" fill="${couleur}"/>
    <path d="M60 20 q18 -12 34 -2 q-16 6 -34 2 Z" fill="${couleur}" opacity=".75"/>
    <path d="M62 74 q16 10 30 2 q-14 -6 -30 -2 Z" fill="${couleur}" opacity=".75"/>
    <path d="M92 22 q28 6 40 24 q-12 18 -40 24 q10 -24 0 -48 Z" fill="${ventre}" opacity=".35"/>
    <circle cx="122" cy="42" r="6" fill="#FFFFFF"/><circle cx="123" cy="42" r="3" fill="#16323C"/>
    <path d="M104 24 q6 22 0 44" fill="none" stroke="#16323C" stroke-width="2" opacity=".35"/>
  </svg>`;
}

/* =========================================================
   LE CONTENU
   ========================================================= */
const CHAPITRES = [
{
 titre:"Le matériel pour commencer",
 resume:"Ce qu'il faut vraiment, et ce qui peut attendre",
 corps:`
  <p>Pour attraper ses premiers poissons, une canne toute simple suffit. Pas besoin de tout le magasin.</p>
  <h3>L'essentiel</h3>
  <ul>
    <li><b>Une canne</b> de 3 à 4 mètres, légère. Pour débuter, une canne « au coup », sans moulinet, est la plus facile.</li>
    <li><b>Du fil</b> (on dit du nylon) de 16 à 18 centièmes de millimètre. C'est fin, mais ça tient un beau gardon.</li>
    <li><b>Des hameçons</b> petits, du n° 16 au n° 12.</li>
    <li><b>Un flotteur</b> et quelques <b>plombs</b>, pour que l'appât descende où il faut.</li>
    <li><b>Une épuisette</b> pour sortir le poisson sans casser le fil.</li>
    <li><b>Un seau</b> d'eau et un <b>chiffon</b> pour se mouiller les mains avant de toucher un poisson.</li>
  </ul>
  <div class="astuce"><b>Le truc en plus</b>Une pince à écraser les ardillons et un petit dégorgeoir : ça sert à chaque sortie et ça coûte trois fois rien.</div>
  <h3>Ce qui peut attendre</h3>
  <p>Le moulinet, la caisse de rangement à étages, les leurres qui brillent : tout ça viendra quand tu sauras déjà attraper des poissons blancs. On commence simple, on prend du plaisir, on complète après.</p>`,
 figure:"ligne",
 legende:"Une ligne montée : canne, fil, flotteur, plombs, hameçon.",
 quiz:[
  {q:"Pour débuter, quelle canne est la plus facile ?",b:"Une canne au coup, sans moulinet",f:["Une canne à lancer avec moulinet","Une canne de 8 mètres","Une canne à mouche"],e:"Sans moulinet, il y a moins de choses à gérer : on se concentre sur le flotteur."},
  {q:"À quoi servent les plombs sur la ligne ?",b:"À faire descendre l'appât à la bonne profondeur",f:["À attirer les poissons","À faire du bruit","À alourdir la canne"],e:"Ils équilibrent aussi le flotteur, qui doit dépasser à peine de l'eau."},
  {q:"Pourquoi prendre une épuisette ?",b:"Pour sortir le poisson sans casser le fil",f:["Pour transporter les appâts","Pour nettoyer l'eau","Pour mesurer le poisson"],e:"Un poisson soulevé au bout du fil peut décrocher ou se blesser."},
  {q:"Le fil de pêche s'appelle aussi :",b:"le nylon",f:["le coton","la ficelle","le câble"],e:"On parle de fil en 16 ou 18 centièmes : c'est son épaisseur."},
  {q:"Avant de toucher un poisson, il faut :",b:"se mouiller les mains",f:["les essuyer bien sec","mettre des gants de jardin","frotter ses mains dans le sable"],e:"Les mains sèches abîment le mucus qui protège le poisson des maladies."}
 ]
},
{
 titre:"L'hameçon, la pièce la plus importante",
 resume:"Ses parties, sa taille, et l'ardillon",
 corps:`
  <p>C'est la seule pièce qui touche vraiment le poisson. Il faut donc bien la connaître.</p>
  <h3>Ses parties</h3>
  <ul>
    <li><b>L'œillet</b> (ou la palette) : c'est là qu'on attache le fil.</li>
    <li><b>La hampe</b> : la partie droite.</li>
    <li><b>La courbure</b> : le virage.</li>
    <li><b>La pointe</b> : elle doit être bien piquante. Teste-la sur ton ongle : si elle glisse, elle est émoussée.</li>
    <li><b>L'ardillon</b> : le petit crochet qui empêche le poisson de se décrocher.</li>
  </ul>
  <h3>Les tailles, à l'envers de ce qu'on croit</h3>
  <p>Plus le numéro est <b>grand</b>, plus l'hameçon est <b>petit</b>. Un n° 20 est minuscule, un n° 2 est gros. Pour les gardons et les ablettes, on est autour du n° 16 ou 18.</p>
  <div class="astuce"><b>Écraser l'ardillon</b>Avec une pince, on aplatit l'ardillon. Le poisson se décroche beaucoup plus facilement, il est moins blessé, et si tu te piques le doigt, ça sort tout seul. Beaucoup de pêcheurs font ça tout le temps.</div>
  <div class="danger">Un hameçon planté dans un doigt, on ne l'arrache jamais soi-même. On coupe le fil, on ne touche plus, et on va voir un adulte.</div>`,
 figure:"hamecon",
 legende:"Les parties d'un hameçon.",
 quiz:[
  {q:"Quel hameçon est le plus petit ?",b:"Le n° 20",f:["Le n° 2","Le n° 6","Le n° 10"],e:"Plus le numéro est grand, plus l'hameçon est petit."},
  {q:"À quoi sert l'ardillon ?",b:"À empêcher le poisson de se décrocher",f:["À attacher le fil","À faire briller l'hameçon","À couper la ligne"],e:"On peut l'écraser à la pince : le poisson est moins blessé."},
  {q:"Comment savoir si la pointe est encore bonne ?",b:"On la fait glisser sur son ongle : elle doit accrocher",f:["On la regarde à la loupe","On la met dans l'eau","On la frotte sur un caillou"],e:"Si elle glisse sans accrocher, il faut changer l'hameçon."},
  {q:"Où attache-t-on le fil sur l'hameçon ?",b:"Sur l'œillet ou la palette",f:["Sur la pointe","Sur la courbure","Au milieu de la hampe"],e:"C'est le petit anneau, ou la petite plaque, tout en haut."},
  {q:"Un hameçon planté dans le doigt, on fait quoi ?",b:"On coupe le fil et on va voir un adulte",f:["On tire d'un coup sec","On pousse pour le faire ressortir","On met de l'eau dessus"],e:"L'ardillon accroche sous la peau : c'est un adulte qui s'en occupe."}
 ]
},
{
 titre:"Faire un nœud qui tient",
 resume:"Le nœud d'hameçon, et l'erreur à éviter",
 corps:`
  <p>Un poisson perdu, c'est neuf fois sur dix un nœud mal fait. Ça s'apprend en cinq minutes et ça se garde à vie.</p>
  <h3>Le nœud pour l'hameçon</h3>
  <ul>
    <li>Passe le fil dans l'œillet, et laisse dépasser une bonne dizaine de centimètres.</li>
    <li>Enroule ce bout autour du fil principal, quatre ou cinq tours.</li>
    <li>Repasse le bout dans la petite boucle formée près de l'œillet.</li>
    <li><b>Mouille le nœud</b> avec un peu de salive, puis serre doucement en tirant.</li>
    <li>Coupe ce qui dépasse, à deux ou trois millimètres.</li>
  </ul>
  <div class="astuce"><b>Pourquoi mouiller ?</b>Un nœud serré à sec chauffe et brûle le nylon. Il casse alors juste au moment où un beau poisson tire. Un nœud mouillé glisse en place et garde toute sa force.</div>
  <h3>À vérifier avant de pêcher</h3>
  <p>Tire sur ton montage avec la main : mieux vaut qu'il casse maintenant que devant le poisson. Et regarde le fil : s'il est vrillé ou rugueux au toucher, coupe et refais le nœud.</p>`,
 figure:"noeud",
 legende:"Passer, enrouler, repasser, mouiller, serrer.",
 quiz:[
  {q:"Pourquoi faut-il mouiller un nœud avant de le serrer ?",b:"Parce que sinon le fil chauffe et s'abîme",f:["Pour qu'il glisse et se défasse","Pour le nettoyer","Pour le rendre invisible"],e:"Un nœud serré à sec casse souvent au mauvais moment."},
  {q:"Combien de tours fait-on autour du fil ?",b:"Quatre ou cinq",f:["Un seul","Dix ou douze","Vingt"],e:"Assez pour que ça tienne, pas trop pour pouvoir serrer correctement."},
  {q:"Que fait-on du bout de fil qui dépasse ?",b:"On le coupe court, à deux ou trois millimètres",f:["On le laisse long","On le brûle","On le noue une deuxième fois"],e:"Un bout trop long s'emmêle et effraie le poisson."},
  {q:"Comment vérifier un montage avant de pêcher ?",b:"On tire dessus avec la main",f:["On le regarde de loin","On le trempe dans l'eau","On attend de voir"],e:"Mieux vaut qu'il casse à la maison que sur un beau poisson."},
  {q:"Le fil est rugueux et vrillé. Que fais-tu ?",b:"Je coupe et je refais le nœud",f:["Je pêche quand même","Je le mouille","Je le frotte avec un chiffon"],e:"Un fil abîmé casse à la moindre traction."}
 ]
},
{
 titre:"Les appâts",
 resume:"Ce que les poissons aiment vraiment",
 corps:`
  <p>Le bon appât, c'est celui que le poisson mange déjà là où tu pêches.</p>
  <h3>Les appâts naturels</h3>
  <ul>
    <li><b>L'asticot</b> : l'appât roi pour les poissons blancs. Un ou deux par hameçon, piqués par le bout.</li>
    <li><b>Le ver de terre</b> : pour la perche, la tanche, la brème. Un petit morceau suffit.</li>
    <li><b>Le pain</b> : une boulette de mie pressée sur l'hameçon. Gratuit et redoutable.</li>
    <li><b>Le maïs doux</b> : en boîte, dans la cuisine. Les carpes et les gardons en raffolent.</li>
  </ul>
  <h3>Les leurres</h3>
  <p>Un leurre imite un petit poisson ou un insecte. Il ne se mange pas : c'est le mouvement qui déclenche l'attaque des carnassiers comme la perche ou le brochet. Cuiller qui tourne, leurre souple en plastique, poisson nageur.</p>
  <div class="astuce"><b>L'amorçage</b>Jette quelques miettes ou quelques grains à l'endroit où tu pêches, un peu et souvent. Ça rassemble les poissons. Vider tout le sachet d'un coup fait l'inverse : ils mangent et s'en vont.</div>`,
 figure:null,
 quiz:[
  {q:"Quel appât est le plus classique pour les poissons blancs ?",b:"L'asticot",f:["Le fromage","La viande","Le sucre"],e:"Un ou deux asticots piqués par le bout, et ça suffit."},
  {q:"Un leurre, ça sert à quoi ?",b:"À imiter une proie pour déclencher une attaque",f:["À nourrir le poisson","À éclairer l'eau","À mesurer la profondeur"],e:"C'est le mouvement qui compte, pas l'odeur."},
  {q:"Comment amorcer correctement ?",b:"Un peu, et souvent",f:["Tout le sachet d'un coup","Jamais","Seulement en partant"],e:"Trop d'amorce et les poissons repartent le ventre plein."},
  {q:"Quel appât trouve-t-on dans la cuisine ?",b:"Le maïs doux en boîte",f:["Le sel","Le poivre","La farine sèche"],e:"Le pain aussi marche très bien."},
  {q:"Pour la perche, quel appât naturel choisir ?",b:"Un ver de terre",f:["Une feuille","Un caillou","Du sucre"],e:"La perche est carnassière : elle veut quelque chose qui bouge."}
 ]
},
{
 titre:"Pêcher au coup, pas à pas",
 resume:"Du choix du poste au poisson dans l'épuisette",
 corps:`
  <ul>
    <li><b>Choisis ton poste.</b> Les poissons aiment les bordures, les herbiers, les branches tombées, l'ombre d'un arbre. L'eau plate et nue au milieu est souvent vide.</li>
    <li><b>Règle la profondeur.</b> L'appât doit se tenir juste au-dessus du fond, à cinq ou dix centimètres. C'est là que les poissons cherchent.</li>
    <li><b>Amorce un peu.</b> Quelques grains à l'aplomb du flotteur.</li>
    <li><b>Sois discret.</b> On ne court pas au bord de l'eau, on ne crie pas : les poissons sentent les vibrations du sol.</li>
    <li><b>Surveille le flotteur.</b> Il s'enfonce, part de côté, ou se couche : c'est une touche.</li>
    <li><b>Ferre.</b> Un geste sec du poignet vers le haut, pas un grand moulinet de bras.</li>
    <li><b>Amène le poisson</b> sans forcer, et passe l'épuisette dessous.</li>
  </ul>
  <div class="astuce"><b>Rien ne mord ?</b>Change une seule chose à la fois : la profondeur d'abord, puis l'appât, puis l'endroit. Si tu changes tout en même temps, tu ne sauras jamais ce qui marchait.</div>`,
 figure:"ligne",
 legende:"L'appât se tient juste au-dessus du fond.",
 quiz:[
  {q:"Où se tiennent souvent les poissons ?",b:"Près des bordures, des herbiers et des branches",f:["Au milieu, dans l'eau nue","À la surface en plein soleil","Loin de tout abri"],e:"Ils cherchent à la fois à manger et à se cacher."},
  {q:"À quelle hauteur doit se tenir l'appât ?",b:"Juste au-dessus du fond",f:["À la surface","Au milieu de l'eau, toujours","Posé dans la vase"],e:"Cinq à dix centimètres au-dessus du fond, c'est le bon réglage."},
  {q:"Le flotteur s'enfonce d'un coup. Que fais-tu ?",b:"Je ferre d'un geste sec du poignet",f:["J'attends cinq minutes","Je tire de toutes mes forces","Je remonte lentement"],e:"Trop fort, on casse ou on arrache l'hameçon."},
  {q:"Pourquoi ne faut-il pas courir au bord de l'eau ?",b:"Les poissons sentent les vibrations",f:["C'est interdit par la loi","Ça abîme la canne","Ça fait fuir les oiseaux"],e:"La discrétion fait une bonne partie du résultat."},
  {q:"Ça ne mord pas. Quelle est la bonne méthode ?",b:"Changer une seule chose à la fois",f:["Tout changer d'un coup","Rentrer à la maison","Amorcer tout le sachet"],e:"Sinon on ne sait pas ce qui a fonctionné."}
 ]
},
{
 titre:"Le respect du poisson et de l'eau",
 resume:"Remise à l'eau, sécurité, propreté",
 corps:`
  <h3>Manipuler un poisson</h3>
  <ul>
    <li>Mains <b>mouillées</b>, toujours. À sec, on lui arrache sa protection.</li>
    <li>On le pose sur l'herbe mouillée ou dans l'épuisette, jamais sur le sable ou le béton chaud.</li>
    <li>On décroche vite, on prend la photo vite, et on le remet vite.</li>
    <li>Pour le relâcher, on le tient dans l'eau, tête face au courant, jusqu'à ce qu'il reparte tout seul.</li>
  </ul>
  <h3>Sécurité</h3>
  <ul>
    <li>Jamais seul au bord de l'eau : toujours avec un adulte.</li>
    <li>Regarde derrière toi avant de lancer.</li>
    <li>Orage annoncé : on ne pêche pas. Une canne, c'est une grande tige levée vers le ciel.</li>
    <li>Berge glissante, eau profonde : on reste à distance du bord.</li>
  </ul>
  <div class="danger">Un fil de pêche abandonné peut étrangler un oiseau ou un hérisson pendant des mois. Tous les bouts de nylon coupés partent dans la poche, pas par terre.</div>`,
 figure:null,
 quiz:[
  {q:"Comment tenir un poisson qu'on va relâcher ?",b:"Avec les mains mouillées",f:["Avec un chiffon sec","Avec des gants","Par les ouïes"],e:"Le mucus qui le recouvre le protège des maladies."},
  {q:"Que fait-on des bouts de fil coupés ?",b:"On les met dans sa poche",f:["On les laisse sur la berge","On les jette à l'eau","On les enterre"],e:"Le nylon met des centaines d'années à disparaître et piège les animaux."},
  {q:"Un orage arrive. Que fais-tu ?",b:"J'arrête et je m'éloigne de l'eau",f:["Je continue, ça mord mieux","Je pose la canne debout","Je m'abrite sous un grand arbre"],e:"La canne levée attire la foudre, et le grand arbre isolé aussi."},
  {q:"Peut-on aller pêcher seul quand on a dix ans ?",b:"Non, toujours avec un adulte",f:["Oui, si on sait nager","Oui, si on reste une heure","Oui, s'il fait beau"],e:"Une berge glissante, ça arrive vite."},
  {q:"Comment relâcher un poisson fatigué ?",b:"Le tenir dans l'eau jusqu'à ce qu'il reparte seul",f:["Le jeter loin dans l'eau","Le poser sur la berge","Le garder dans un seau"],e:"Il a besoin d'un moment pour reprendre son souffle."}
 ]
},
{
 titre:"Les règles à connaître",
 resume:"Carte de pêche, saisons, tailles",
 corps:`
  <h3>La carte de pêche</h3>
  <p>En France, pêcher en rivière ou en étang public demande une carte, <b>même pour les enfants</b>. Pour les moins de 12 ans, la carte « découverte » coûte moins de dix euros par an. De 12 à 18 ans, c'est la carte « personne mineure », autour de vingt-cinq euros. Elle s'achète sur internet ou dans un magasin de pêche, et l'argent sert à entretenir les rivières.</p>
  <h3>Les saisons</h3>
  <ul>
    <li>Les poissons blancs et la carpe se pêchent <b>toute l'année</b> dans les rivières et étangs de deuxième catégorie.</li>
    <li>La <b>truite</b> a une saison courte : du deuxième samedi de mars au troisième dimanche de septembre.</li>
    <li>Le <b>brochet</b> est protégé pendant sa reproduction : il est fermé de fin janvier à fin avril.</li>
  </ul>
  <h3>Les tailles</h3>
  <p>Un poisson trop petit doit repartir à l'eau. En général : 60 cm pour le brochet, 50 cm pour le sandre, 23 cm au moins pour la truite. On pêche aussi seulement du lever au coucher du soleil, à une demi-heure près.</p>
  <div class="astuce"><b>La règle qui prime sur tout</b>Chaque département publie chaque année son propre arrêté, et il peut être plus strict. Avant la première sortie de l'année, on regarde celui d'Eure-et-Loir avec papa.</div>`,
 figure:null,
 quiz:[
  {q:"Un enfant de 9 ans a-t-il besoin d'une carte de pêche ?",b:"Oui, une carte découverte",f:["Non, c'est gratuit avant 12 ans","Non, s'il pêche avec un adulte","Seulement en étang"],e:"Elle coûte moins de dix euros par an et finance l'entretien des rivières."},
  {q:"Quand peut-on pêcher la truite ?",b:"De mars à septembre",f:["Toute l'année","Seulement en hiver","Seulement en août"],e:"Ouverture le deuxième samedi de mars, fermeture le troisième dimanche de septembre."},
  {q:"Pourquoi le brochet est-il fermé de fin janvier à fin avril ?",b:"C'est sa période de reproduction",f:["Il fait trop froid","Il n'y en a plus","Il n'a pas faim"],e:"On le laisse tranquille le temps qu'il fasse ses petits."},
  {q:"Tu prends un brochet de 45 cm. Que fais-tu ?",b:"Je le remets à l'eau, il est trop petit",f:["Je le garde","Je le mesure et je décide","Je le donne à quelqu'un"],e:"La taille minimale est en général de 60 cm."},
  {q:"À quelles heures a-t-on le droit de pêcher ?",b:"Du lever au coucher du soleil, à une demi-heure près",f:["24 heures sur 24","Seulement l'après-midi","La nuit uniquement"],e:"La pêche de nuit est très encadrée et réservée à certains parcours."}
 ]
}
];

const POISSONS = [
{nom:"Le gardon",forme:"rond",couleur:"#8FA6B2",ventre:"#E8EEF1",
 texte:"Le poisson de tous les débuts. Il vit en bandes près des bordures et mord toute l'année.",
 appat:"asticot, pain, maïs",taille:"10 à 25 cm",astuce:"S'il mord et que tu ne prends rien, descends d'une taille d'hameçon."},
{nom:"L'ablette",forme:"long",couleur:"#AEC0C8",ventre:"#FFFFFF",
 texte:"Petite, argentée, toujours près de la surface. Elle mord vite et fort : parfaite pour s'entraîner à ferrer.",
 appat:"asticot, petit morceau de pain",taille:"8 à 15 cm",astuce:"Pêche à trente centimètres sous la surface, pas au fond."},
{nom:"La perche",forme:"haut",couleur:"#5E7A46",ventre:"#D8C27A",
 texte:"Rayée, avec une nageoire épineuse sur le dos. C'est une chasseuse : elle attaque tout ce qui bouge.",
 appat:"ver, petit leurre",taille:"15 à 35 cm",astuce:"Attention aux épines du dos quand tu la décroches : saisis-la dans le sens de la tête vers la queue."},
{nom:"Le brochet",forme:"long",couleur:"#4E6B4A",ventre:"#C9D6A8",
 texte:"Le grand carnassier de nos eaux, avec une gueule pleine de dents. Il chasse à l'affût, caché dans les herbiers.",
 appat:"leurre, poisson mort",taille:"souvent 40 à 80 cm",astuce:"Taille minimale de 60 cm, et fermé de fin janvier à fin avril. Jamais les doigts dans la gueule."},
{nom:"La carpe",forme:"haut",couleur:"#9C7B48",ventre:"#E0CBA0",
 texte:"Puissante et méfiante, avec deux paires de barbillons. Une belle carpe peut faire plier une canne d'un coup.",
 appat:"maïs, bouillette, pain",taille:"30 à 80 cm",astuce:"Il faut du fil solide et de la patience : elle part loin au premier départ."},
{nom:"La tanche",forme:"haut",couleur:"#4F6234",ventre:"#B9BE7A",
 texte:"Vert sombre, presque dorée, avec de petits yeux rouges. Elle aime les fonds vaseux et les eaux calmes.",
 appat:"ver, maïs",taille:"20 à 40 cm",astuce:"Elle mord surtout tôt le matin et en fin de journée."},
{nom:"La truite",forme:"long",couleur:"#7E7A5E",ventre:"#E7DFC2",
 texte:"Poisson des eaux vives et fraîches, couvert de petits points. Très méfiante : la discrétion fait tout.",
 appat:"ver, teigne, petit leurre",taille:"20 à 40 cm",astuce:"Saison de mars à septembre seulement, et taille minimale d'au moins 23 cm."},
{nom:"Le sandre",forme:"long",couleur:"#7B7A63",ventre:"#D9D3B4",
 texte:"Cousin de la perche, avec de grands yeux qui voient dans l'eau trouble. Il chasse à la tombée du jour.",
 appat:"leurre souple",taille:"40 à 70 cm",astuce:"Taille minimale de 50 cm dans la plupart des départements."}
];

const SAC = ["La carte de pêche","La canne","Le fil de rechange","La boîte d'hameçons","Les flotteurs et les plombs",
 "L'appât","L'épuisette","Le dégorgeoir et la pince","Un seau","Une casquette et de l'eau à boire","Un sac pour les déchets"];


export const peche = { CHAPITRES, POISSONS, SAC, DESSINS, poissonSVG };
