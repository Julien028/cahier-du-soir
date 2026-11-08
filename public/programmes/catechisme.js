// Le catéchisme : un parcours en cinq étapes (de l'éveil à la foi à la confirmation),
// les prières à connaître et les grandes fêtes de l'année. Module autonome, sans import.
// Fidèle à l'enseignement de l'Église catholique (Catéchisme de l'Église catholique et son Compendium).
// Les récits bibliques sont racontés avec nos mots ; les courtes citations indiquent leur référence.

/* =========================================================
   LES ÉTAPES ET LEURS CHAPITRES
   temps : temps liturgique conseillé ("ordinaire", "toussaint", "avent", "noel", "careme", "paques", "pentecote")
   ========================================================= */
const ETAPES = [
/* ---------------------------------------------------------
   1. ÉVEIL À LA FOI (CP)
   --------------------------------------------------------- */
{ code: "eveil", nom: "Éveil à la foi", pour: "CP (5-7 ans)", classes: ["cp"],
  intro: `<p>Bienvenue ! Ici, on découvre que Dieu nous aime, et on fait connaissance avec Jésus et ses amis.</p><p>Lis chaque petite leçon avec un grand, puis réponds aux questions ensemble.</p>`,
  chapitres: [
  { cle: "eveil-1", titre: "Dieu nous aime", resume: "Dieu connaît chacun par son nom et l'aime tel qu'il est", temps: "ordinaire",
    corps: `
  <p>Dieu t'aime. Il t'aime depuis toujours.</p>
  <p>Il t'aime quand tu es joyeux. Il t'aime aussi quand tu es triste.</p>
  <p>Il t'aime même quand tu as fait une bêtise. Son amour ne s'arrête jamais.</p>
  <h3>Dieu est comme un papa qui aime</h3>
  <p>Jésus appelle Dieu « Père ». Il nous apprend à dire, nous aussi : « Notre Père ».</p>
  <p>Dieu connaît ton prénom. Pour lui, tu es unique. Il n'y a personne d'autre comme toi.</p>
  <blockquote>« Tu as du prix à mes yeux, […] et moi, je t'aime. » (Is 43, 4)</blockquote>
  <h3>Et moi, que puis-je faire ?</h3>
  <ul>
    <li>Dire merci à Dieu.</li>
    <li>Aimer les autres, comme Dieu m'aime.</li>
  </ul>
  <div class="astuce"><b>À retenir</b>Dieu m'aime toujours, tel que je suis. Je peux l'appeler « Père ».</div>`,
    quiz: [
      { q: "Est-ce que Dieu t'aime ?", b: "Oui, toujours", f: ["Non, jamais", "Seulement le dimanche", "Seulement les grandes personnes"], e: "Dieu aime chacun de nous, tout le temps." },
      { q: "Quand tu as fait une bêtise, Dieu…", b: "continue de t'aimer", f: ["ne t'aime plus", "t'oublie", "change ton prénom"], e: "L'amour de Dieu ne s'arrête jamais." },
      { q: "Comment Jésus appelle-t-il Dieu ?", b: "Père", f: ["Monsieur", "Le roi des animaux", "Le maître d'école"], e: "Jésus nous apprend à dire « Notre Père »." },
      { q: "Pour Dieu, tu es…", b: "unique", f: ["un parmi d'autres, sans importance", "un inconnu", "invisible"], e: "Dieu connaît ton prénom : il n'y a personne comme toi." },
      { q: "Que peux-tu faire pour répondre à l'amour de Dieu ?", b: "Aimer les autres et dire merci", f: ["Bouder", "Me moquer des autres", "Ne rien dire à personne"], e: "On aime Dieu en aimant les autres." }
    ] },
  { cle: "eveil-2", titre: "Dieu a créé le monde", resume: "Le ciel, la terre, les animaux et les hommes : un cadeau de Dieu", temps: "ordinaire",
    corps: `
  <p>Regarde autour de toi : le soleil, la lune, les étoiles.</p>
  <p>Les arbres, les fleurs, la mer, les poissons, les oiseaux.</p>
  <p>Tout cela, c'est Dieu qui l'a créé. C'est un cadeau.</p>
  <h3>Le plus beau cadeau</h3>
  <p>La Bible raconte que Dieu a créé l'homme et la femme. Il les a faits « à son image » (Gn 1, 27).</p>
  <p>Cela veut dire qu'ils peuvent aimer, comme Dieu aime.</p>
  <p>Dieu regarde tout ce qu'il a fait. Il trouve que c'est très bon.</p>
  <h3>Prendre soin du cadeau</h3>
  <p>Dieu nous confie sa Création. Nous pouvons en prendre soin :</p>
  <ul>
    <li>ne pas jeter de papiers par terre ;</li>
    <li>respecter les animaux et les plantes ;</li>
    <li>dire merci pour la beauté du monde.</li>
  </ul>
  <div class="astuce"><b>À retenir</b>Dieu a créé le monde par amour. Il nous le confie pour qu'on en prenne soin.</div>`,
    quiz: [
      { q: "Qui a créé le soleil et les étoiles ?", b: "Dieu", f: ["Les enfants", "Les voitures", "Personne, ils sont sortis d'une boîte"], e: "Tout ce qui existe vient de Dieu." },
      { q: "La Bible dit que l'homme et la femme sont créés…", b: "à l'image de Dieu", f: ["à l'image d'un arbre", "à l'image d'un robot", "sans que Dieu le veuille"], e: "Comme Dieu, ils peuvent aimer." },
      { q: "Quand Dieu regarde tout ce qu'il a fait, il trouve que c'est…", b: "très bon", f: ["raté", "tout gris", "à jeter"], e: "La Création est belle et bonne." },
      { q: "Pourquoi Dieu a-t-il créé le monde ?", b: "Par amour", f: ["Parce qu'il s'ennuyait et voulait se fâcher", "Par erreur", "Pour faire peur"], e: "Dieu crée par amour, pour nous faire un cadeau." },
      { q: "Comment prendre soin de la Création ?", b: "Respecter les plantes et les animaux", f: ["Arracher toutes les fleurs", "Jeter les papiers par terre", "Faire du mal aux animaux"], e: "Dieu nous confie le monde : on en prend soin." }
    ] },
  { cle: "eveil-3", titre: "Les amis de Jésus", resume: "Jésus appelle des amis ; les saints sont aussi ses amis", temps: "toussaint",
    corps: `
  <p>Quand Jésus est devenu grand, il a marché sur les routes de son pays.</p>
  <p>Au bord d'un lac, il voit des pêcheurs : Pierre et André, Jacques et Jean.</p>
  <p>Il leur dit : « Venez avec moi ! » Et ils le suivent.</p>
  <h3>Les douze apôtres</h3>
  <p>Jésus choisit douze amis pour être avec lui. On les appelle les <b>apôtres</b>.</p>
  <p>Il a aussi beaucoup d'autres amis : Marie Madeleine, Marthe, Marie et leur frère Lazare…</p>
  <p>Jésus aime aussi les enfants. Il dit : « Laissez les enfants venir à moi. » (Mc 10, 14)</p>
  <h3>Les saints, amis de Dieu</h3>
  <p>Depuis ce temps-là, beaucoup de gens ont été de grands amis de Jésus. On les appelle les <b>saints</b>.</p>
  <p>Le 1er novembre, c'est la <b>Toussaint</b> : la fête de tous les saints.</p>
  <p>Toi aussi, tu peux être l'ami de Jésus !</p>
  <div class="astuce"><b>À retenir</b>Jésus a choisi douze apôtres. Les saints sont les amis de Dieu. Moi aussi, je suis invité à être l'ami de Jésus.</div>`,
    quiz: [
      { q: "Combien d'apôtres Jésus a-t-il choisis ?", b: "Douze", f: ["Deux", "Cent", "Un seul"], e: "Jésus a choisi douze apôtres." },
      { q: "Que faisaient Pierre et André quand Jésus les a appelés ?", b: "Ils étaient pêcheurs", f: ["Ils étaient pilotes d'avion", "Ils étaient rois", "Ils dormaient dans un château"], e: "Ils pêchaient au bord du lac." },
      { q: "Que dit Jésus à propos des enfants ?", b: "Laissez les enfants venir à moi", f: ["Les enfants doivent partir", "Je n'aime pas les enfants", "Les enfants sont trop petits pour moi"], e: "Jésus aime les enfants." },
      { q: "Comment appelle-t-on les grands amis de Dieu ?", b: "Les saints", f: ["Les fantômes", "Les pirates", "Les sorciers"], e: "Les saints ont aimé Dieu de tout leur cœur." },
      { q: "Quel jour fête-t-on tous les saints ?", b: "Le 1er novembre, à la Toussaint", f: ["Le 25 décembre", "Le 14 juillet", "Le jour de mon anniversaire"], e: "La Toussaint est la fête de tous les saints." }
    ] },
  { cle: "eveil-4", titre: "Marie dit oui", resume: "L'ange annonce à Marie qu'elle sera la maman de Jésus", temps: "avent",
    corps: `
  <p>Dans un petit village qui s'appelle Nazareth, vit une jeune fille : <b>Marie</b>.</p>
  <p>Elle va se marier avec <b>Joseph</b>, un charpentier.</p>
  <h3>La visite de l'ange</h3>
  <p>Un jour, un ange vient la voir. Il s'appelle <b>Gabriel</b>.</p>
  <p>Il dit à Marie : « Tu vas avoir un bébé. Ce sera le Fils de Dieu. Tu l'appelleras Jésus. »</p>
  <p>Marie est étonnée. Mais elle fait confiance à Dieu. Elle répond <b>oui</b>.</p>
  <h3>La famille de Jésus</h3>
  <p>Joseph aussi fait confiance à Dieu. Il prend soin de Marie et de Jésus.</p>
  <p>Marie, Joseph et Jésus : c'est la <b>Sainte Famille</b>.</p>
  <h3>L'Avent : on attend Jésus</h3>
  <p>Avant Noël, il y a quatre semaines pour se préparer. On appelle ce temps l'<b>Avent</b>.</p>
  <p>On allume une bougie de plus chaque dimanche, sur la couronne de l'Avent.</p>
  <div class="astuce"><b>À retenir</b>L'ange Gabriel a annoncé à Marie qu'elle serait la maman de Jésus. Marie a dit oui. Pendant l'Avent, on se prépare à Noël.</div>`,
    quiz: [
      { q: "Comment s'appelle l'ange qui vient voir Marie ?", b: "Gabriel", f: ["Pierre", "Joseph", "Nicolas"], e: "L'ange Gabriel apporte la grande nouvelle." },
      { q: "Qu'est-ce que Marie répond à l'ange ?", b: "Oui", f: ["Non", "Plus tard", "Je ne sais pas, va-t'en"], e: "Marie fait confiance à Dieu." },
      { q: "Quel est le métier de Joseph ?", b: "Charpentier", f: ["Boulanger", "Astronaute", "Pêcheur de baleines"], e: "Joseph travaillait le bois." },
      { q: "Combien de semaines dure l'Avent ?", b: "Quatre semaines", f: ["Un an", "Une heure", "Dix semaines"], e: "On compte quatre dimanches avant Noël." },
      { q: "Qui forme la Sainte Famille ?", b: "Marie, Joseph et Jésus", f: ["Pierre, André et Jean", "Les rois mages", "Les bergers et leurs moutons"], e: "Marie et Joseph ont pris soin de Jésus." }
    ] },
  { cle: "eveil-5", titre: "Noël, Jésus est né", resume: "Jésus naît à Bethléem ; les bergers et les mages viennent le voir", temps: "noel",
    corps: `
  <p>Marie et Joseph doivent aller à <b>Bethléem</b>. Le voyage est long.</p>
  <p>Quand ils arrivent, il n'y a plus de place pour eux à l'auberge.</p>
  <p>C'est là que Jésus naît. Marie le couche dans une <b>mangeoire</b>, là où mangent les animaux.</p>
  <h3>Les bergers</h3>
  <p>Dans les champs, des bergers gardent leurs moutons. Des anges leur annoncent la bonne nouvelle.</p>
  <p>Les bergers courent voir le bébé. Ils sont remplis de joie.</p>
  <h3>Les mages</h3>
  <p>Plus tard, des mages venus de loin suivent une <b>étoile</b>.</p>
  <p>Ils apportent des cadeaux à Jésus : de l'or, de l'encens et de la myrrhe.</p>
  <h3>Pourquoi on fête Noël</h3>
  <p>À Noël, on fête l'anniversaire de Jésus. Dieu s'est fait tout petit, pour être tout proche de nous.</p>
  <div class="astuce"><b>À retenir</b>À Noël, le 25 décembre, nous fêtons la naissance de Jésus à Bethléem. Dieu est venu tout près de nous.</div>`,
    quiz: [
      { q: "Dans quelle ville Jésus est-il né ?", b: "Bethléem", f: ["Paris", "Rome", "New York"], e: "Jésus est né à Bethléem." },
      { q: "Où Marie couche-t-elle Jésus ?", b: "Dans une mangeoire", f: ["Dans un grand lit doré", "Dans une voiture", "Dans un bateau"], e: "Il n'y avait pas de place à l'auberge." },
      { q: "Qui annonce la naissance de Jésus aux bergers ?", b: "Des anges", f: ["Un facteur", "Un loup", "Un roi en colère"], e: "Les anges chantent la bonne nouvelle." },
      { q: "Que suivent les mages pour trouver Jésus ?", b: "Une étoile", f: ["Une carte routière", "Un chien", "Un arc-en-ciel"], e: "L'étoile les guide jusqu'à Jésus." },
      { q: "Que fête-t-on à Noël ?", b: "La naissance de Jésus", f: ["La fin de l'école", "Le premier jour du printemps", "La fête des mamans"], e: "Noël, c'est l'anniversaire de Jésus." }
    ] },
  { cle: "eveil-6", titre: "Je prie avec tout mon corps", resume: "Les mains, les genoux, la voix : tout mon corps peut prier", temps: "careme",
    corps: `
  <p>Prier, c'est parler à Dieu. On peut le faire avec des mots, et aussi avec tout son corps.</p>
  <h3>Les gestes de la prière</h3>
  <ul>
    <li><b>Le signe de la croix</b> : je touche mon front, ma poitrine, mon épaule gauche puis mon épaule droite. Je dis : « Au nom du Père, et du Fils, et du Saint-Esprit. Amen. »</li>
    <li><b>Les mains jointes</b> : je me calme, je pense à Dieu.</li>
    <li><b>Les mains ouvertes</b> : je donne et je reçois.</li>
    <li><b>À genoux</b> : je me fais petit devant Dieu.</li>
    <li><b>Debout</b> : je suis joyeux, je suis prêt.</li>
    <li><b>Le silence</b> : j'écoute Dieu dans mon cœur.</li>
  </ul>
  <h3>Le Carême</h3>
  <p>Avant Pâques, il y a le <b>Carême</b>. Il dure quarante jours.</p>
  <p>C'est un temps pour prier un peu plus, pour partager, et pour faire plaisir aux autres.</p>
  <div class="astuce"><b>À retenir</b>Je peux prier avec mes mots, mes gestes et le silence. Pendant le Carême, je prie davantage et je partage.</div>`,
    quiz: [
      { q: "Prier, c'est…", b: "parler à Dieu", f: ["faire la course", "regarder la télévision", "crier sur les autres"], e: "Prier, c'est parler à Dieu et l'écouter." },
      { q: "Que dit-on en faisant le signe de la croix ?", b: "Au nom du Père, et du Fils, et du Saint-Esprit", f: ["Un, deux, trois, soleil", "Bonjour tout le monde", "À vos marques, prêts, partez"], e: "C'est la première prière du chrétien." },
      { q: "Pour écouter Dieu dans son cœur, on peut faire…", b: "le silence", f: ["beaucoup de bruit", "une bataille de coussins", "claquer les portes"], e: "Dans le silence, on écoute Dieu." },
      { q: "Combien de jours dure le Carême ?", b: "Quarante jours", f: ["Deux jours", "Cent jours", "Une seule nuit"], e: "Le Carême prépare à Pâques pendant quarante jours." },
      { q: "Pendant le Carême, on essaie de…", b: "prier davantage et partager", f: ["garder tout pour soi", "ne plus parler à personne", "manger le plus de bonbons possible"], e: "Le Carême, c'est un temps pour aimer davantage." }
    ] },
  { cle: "eveil-7", titre: "Pâques, Jésus est vivant !", resume: "Jésus est mort sur la croix, et Dieu l'a ressuscité", temps: "paques",
    corps: `
  <p>Jésus a fait beaucoup de bien. Mais certaines personnes ne l'aimaient pas.</p>
  <p>Ils l'ont arrêté et l'ont fait mourir sur une <b>croix</b>. C'était un vendredi : on l'appelle le Vendredi saint.</p>
  <p>Ses amis étaient très tristes. Ils l'ont mis dans un tombeau.</p>
  <h3>Le matin de Pâques</h3>
  <p>Le dimanche matin, des femmes vont au tombeau. Il est vide !</p>
  <p>Un ange leur dit : « Il n'est pas ici, il est ressuscité ! »</p>
  <p>Jésus est vivant ! Dieu l'a ressuscité. Ses amis le revoient. Ils sont remplis de joie.</p>
  <h3>La plus grande fête</h3>
  <p><b>Pâques</b> est la plus grande fête des chrétiens. On chante « Alléluia ! », qui veut dire « Louez Dieu ! ».</p>
  <p>L'amour de Jésus est plus fort que la mort.</p>
  <div class="astuce"><b>À retenir</b>Jésus est mort sur la croix le Vendredi saint. Le dimanche de Pâques, il est ressuscité : il est vivant pour toujours !</div>`,
    quiz: [
      { q: "Que trouvent les femmes le matin de Pâques ?", b: "Le tombeau vide", f: ["Un grand gâteau", "Des soldats qui dansent", "Un trésor de pirate"], e: "Jésus n'était plus dans le tombeau : il est ressuscité." },
      { q: "Le matin de Pâques, Jésus est…", b: "vivant", f: ["parti en vacances", "endormi pour toujours", "transformé en lapin"], e: "Dieu a ressuscité Jésus." },
      { q: "Quel jour Jésus est-il mort sur la croix ?", b: "Le Vendredi saint", f: ["Le jour de Noël", "Le jour de la Toussaint", "Le jour de son baptême"], e: "Le Vendredi saint, on se souvient de la croix." },
      { q: "Que veut dire « Alléluia » ?", b: "Louez Dieu", f: ["Bonne nuit", "Au revoir", "J'ai faim"], e: "C'est un cri de joie qu'on chante à Pâques." },
      { q: "Quelle est la plus grande fête des chrétiens ?", b: "Pâques", f: ["La rentrée des classes", "Le carnaval", "La fête de la musique"], e: "À Pâques, on fête Jésus ressuscité." }
    ] },
  { cle: "eveil-8", titre: "L'église, la maison des chrétiens", resume: "Le bâtiment où la famille de Dieu se rassemble", temps: "pentecote",
    corps: `
  <p>Après Pâques, Jésus a promis d'envoyer l'<b>Esprit Saint</b> à ses amis. C'est arrivé le jour de la <b>Pentecôte</b>.</p>
  <p>L'Esprit Saint leur a donné le courage de parler de Jésus partout. La grande famille des chrétiens est née : on l'appelle l'<b>Église</b>.</p>
  <h3>L'église, avec une petite lettre</h3>
  <p>L'église, c'est aussi la maison où les chrétiens se rassemblent pour prier, surtout le dimanche.</p>
  <h3>Ce que je vois dans l'église</h3>
  <ul>
    <li><b>L'autel</b> : la grande table où le prêtre célèbre la messe.</li>
    <li><b>La croix</b> : elle rappelle que Jésus nous aime jusqu'au bout.</li>
    <li><b>Le tabernacle</b> : une petite armoire où l'on garde le pain consacré. Une petite lampe allumée montre que Jésus est là.</li>
    <li><b>Les fonts baptismaux</b> : là où l'on baptise.</li>
    <li><b>Le bénitier</b> : l'eau bénite, pour faire le signe de la croix en entrant.</li>
  </ul>
  <p>Dans l'église, on parle doucement : c'est un lieu de prière.</p>
  <div class="astuce"><b>À retenir</b>L'église est la maison où la famille de Dieu se rassemble pour prier. L'autel, la croix et le tabernacle sont les choses les plus importantes.</div>`,
    quiz: [
      { q: "Comment s'appelle la grande table où le prêtre célèbre la messe ?", b: "L'autel", f: ["Le toboggan", "Le comptoir", "Le bureau du maître"], e: "La messe est célébrée sur l'autel." },
      { q: "Que garde-t-on dans le tabernacle ?", b: "Le pain consacré", f: ["Des jouets", "Des chaussures", "Des bonbons"], e: "Une petite lampe allumée montre que Jésus est là." },
      { q: "À quoi sert le bénitier ?", b: "On y prend de l'eau bénite pour faire le signe de la croix", f: ["À se laver les pieds", "À donner à boire aux chiens", "À arroser les fleurs"], e: "On se signe avec l'eau bénite en entrant." },
      { q: "Quel jour les chrétiens se rassemblent-ils surtout à l'église ?", b: "Le dimanche", f: ["Seulement le jour de leur anniversaire", "Jamais", "Seulement pendant les vacances"], e: "Le dimanche est le jour de la résurrection de Jésus." },
      { q: "Qui Jésus a-t-il envoyé à ses amis le jour de la Pentecôte ?", b: "L'Esprit Saint", f: ["Un dragon", "Une armée", "Un bateau"], e: "L'Esprit Saint leur a donné du courage." }
    ] }
  ] },
/* ---------------------------------------------------------
   2. DÉCOUVRIR JÉSUS (CE1-CE2)
   --------------------------------------------------------- */
{ code: "decouvrir", nom: "Découvrir Jésus", pour: "CE1-CE2 (7-9 ans)", classes: ["ce1", "ce2"],
  intro: `<p>Dans cette étape, tu ouvres la Bible : les grands récits du peuple de Dieu, puis la vie de Jésus, ses paraboles et ses miracles.</p><p>Tu découvriras aussi comment l'Église est née et comment on y entre par le baptême.</p>`,
  chapitres: [
  { cle: "decouvrir-1", titre: "La Bible, une bibliothèque", resume: "L'Ancien et le Nouveau Testament, les quatre évangiles", temps: "ordinaire",
    corps: `
  <p>La Bible n'est pas un seul livre : c'est une petite bibliothèque de <b>73 livres</b>, écrits pendant plus de mille ans.</p>
  <p>Les chrétiens croient que Dieu a inspiré ceux qui les ont écrits : c'est pourquoi on dit que la Bible est la <b>Parole de Dieu</b>.</p>
  <h3>Deux grandes parties</h3>
  <ul>
    <li><b>L'Ancien Testament</b> (46 livres) raconte l'histoire du peuple d'Israël, avant la naissance de Jésus : la Création, Abraham, Moïse, David, les prophètes, les psaumes…</li>
    <li><b>Le Nouveau Testament</b> (27 livres) parle de Jésus et des premiers chrétiens.</li>
  </ul>
  <h3>Les quatre évangiles</h3>
  <p>Le mot « évangile » veut dire <b>« bonne nouvelle »</b>. Quatre évangiles racontent la vie de Jésus : ceux de <b>Matthieu</b>, <b>Marc</b>, <b>Luc</b> et <b>Jean</b>.</p>
  <h3>Comment trouver un passage</h3>
  <p>On écrit le nom du livre en abrégé, puis le chapitre, puis les versets. Par exemple <b>Lc 15, 11-32</b> veut dire : évangile de Luc, chapitre 15, versets 11 à 32.</p>
  <div class="astuce"><b>À retenir</b>La Bible est la Parole de Dieu. Elle a deux parties : l'Ancien Testament et le Nouveau Testament. Les quatre évangiles sont ceux de Matthieu, Marc, Luc et Jean.</div>`,
    quiz: [
      { q: "Que veut dire le mot « évangile » ?", b: "Bonne nouvelle", f: ["Grand livre", "Histoire ancienne", "Prière du soir"], e: "Les évangiles annoncent la bonne nouvelle de Jésus." },
      { q: "Quelle partie de la Bible raconte l'histoire du peuple d'Israël avant Jésus ?", b: "L'Ancien Testament", f: ["Le Nouveau Testament", "Les évangiles", "Le catéchisme"], e: "L'Ancien Testament raconte ce qui s'est passé avant Jésus." },
      { q: "Lequel de ces noms n'est PAS celui d'un évangile ?", b: "Moïse", f: ["Matthieu", "Luc", "Jean"], e: "Les quatre évangiles sont Matthieu, Marc, Luc et Jean." },
      { q: "Combien y a-t-il d'évangiles dans la Bible ?", b: "Quatre", f: ["Un", "Douze", "Cent"], e: "Matthieu, Marc, Luc et Jean." },
      { q: "Que signifie « Lc 15, 11-32 » ?", b: "Évangile de Luc, chapitre 15, versets 11 à 32", f: ["Page 15 d'un livre de cuisine", "15 heures, 11 minutes", "Le livre numéro 32"], e: "On donne le livre, le chapitre, puis les versets." }
    ] },
  { cle: "decouvrir-2", titre: "La Création", resume: "Le premier récit de la Bible : Dieu crée tout par amour", temps: "ordinaire",
    corps: `
  <p>La Bible commence par le livre de la <b>Genèse</b>, qui veut dire « commencement ».</p>
  <p>Elle raconte que Dieu a créé le monde en <b>six jours</b> : la lumière, le ciel, la mer et la terre, les plantes, le soleil et la lune, les poissons et les oiseaux, les animaux, et enfin l'homme et la femme. Le <b>septième jour</b>, Dieu se repose.</p>
  <h3>Un récit qui dit le sens</h3>
  <p>Ce récit n'est pas un cours de sciences. C'est comme un grand poème qui nous dit l'essentiel : <b>tout vient de Dieu</b>, et tout est bon.</p>
  <blockquote>« Dieu vit tout ce qu'il avait fait ; et voici : cela était très bon. » (Gn 1, 31)</blockquote>
  <h3>L'homme et la femme</h3>
  <p>Dieu crée l'homme et la femme <b>à son image</b>. Ils sont capables d'aimer, de réfléchir, de choisir. Dieu leur confie la terre pour qu'ils en prennent soin.</p>
  <h3>Adam et Ève</h3>
  <p>La Bible raconte ensuite qu'Adam et Ève n'ont pas fait confiance à Dieu et lui ont désobéi. C'est le premier péché. Mais Dieu ne les abandonne pas : il promet de les sauver.</p>
  <div class="astuce"><b>À retenir</b>La Bible commence par le livre de la Genèse. Dieu a tout créé par amour, et il a créé l'homme et la femme à son image.</div>`,
    quiz: [
      { q: "Comment s'appelle le premier livre de la Bible ?", b: "La Genèse", f: ["L'Apocalypse", "L'évangile de Jean", "Les Psaumes"], e: "Genèse veut dire « commencement »." },
      { q: "Que fait Dieu le septième jour, dans le récit de la Création ?", b: "Il se repose", f: ["Il crée les dinosaures", "Il détruit tout", "Il part en voyage"], e: "Le septième jour est un jour de repos." },
      { q: "Selon la Bible, l'homme et la femme sont créés…", b: "à l'image de Dieu", f: ["par hasard, sans Dieu", "avant la lumière", "pour être les esclaves des animaux"], e: "Ils sont capables d'aimer, comme Dieu." },
      { q: "Que nous dit surtout le récit de la Création ?", b: "Que tout vient de Dieu et que tout est bon", f: ["Comment fabriquer une maison", "Qui a gagné une guerre", "Que le monde est mauvais"], e: "C'est un récit qui dit le sens du monde." },
      { q: "Après la désobéissance d'Adam et Ève, Dieu…", b: "ne les abandonne pas", f: ["les oublie pour toujours", "détruit la terre aussitôt", "se moque d'eux"], e: "Dieu promet de les sauver." }
    ] },
  { cle: "decouvrir-3", titre: "Noé et Abraham : Dieu fait alliance", resume: "L'arche et l'arc-en-ciel, puis l'appel d'Abraham", temps: "ordinaire",
    corps: `
  <h3>Noé et l'arche</h3>
  <p>La Bible raconte qu'au temps de Noé, les hommes faisaient beaucoup de mal. Noé, lui, était juste et écoutait Dieu.</p>
  <p>Dieu lui demande de construire une grande barque, l'<b>arche</b>, et d'y faire entrer sa famille et un couple de chaque espèce d'animaux. Vient alors le <b>déluge</b> : une pluie immense.</p>
  <p>Quand l'eau baisse, Noé lâche une <b>colombe</b>. Elle revient avec un rameau d'olivier : la terre réapparaît !</p>
  <p>Dieu fait une <b>alliance</b> avec Noé, c'est-à-dire une promesse d'amitié. Le signe de cette alliance est l'<b>arc-en-ciel</b> (Gn 9, 13).</p>
  <h3>Abraham, l'ami de Dieu</h3>
  <p>Bien plus tard, Dieu appelle <b>Abraham</b>, qui vit à Ur. Il lui dit : « Quitte ton pays, et va vers le pays que je te montrerai. » (Gn 12, 1)</p>
  <p>Abraham fait confiance à Dieu et part avec sa femme <b>Sara</b>. Dieu lui promet une descendance aussi nombreuse que les étoiles du ciel.</p>
  <p>Dans leur vieillesse, Abraham et Sara ont un fils : <b>Isaac</b>. On appelle Abraham le « père des croyants ».</p>
  <div class="astuce"><b>À retenir</b>Une alliance est une promesse d'amitié entre Dieu et les hommes. L'arc-en-ciel est le signe de l'alliance avec Noé. Abraham a fait confiance à Dieu : c'est le père des croyants.</div>`,
    quiz: [
      { q: "Comment s'appelle la grande barque construite par Noé ?", b: "L'arche", f: ["Le Titanic", "La caravelle", "Le radeau de Moïse"], e: "Noé fait entrer sa famille et les animaux dans l'arche." },
      { q: "Quel est le signe de l'alliance de Dieu avec Noé ?", b: "L'arc-en-ciel", f: ["Un éclair", "Une étoile filante", "Un volcan"], e: "L'arc-en-ciel rappelle la promesse de Dieu (Gn 9, 13)." },
      { q: "Que rapporte la colombe à Noé ?", b: "Un rameau d'olivier", f: ["Un poisson", "Une couronne d'or", "Une lettre"], e: "C'est le signe que la terre réapparaît." },
      { q: "Comment s'appelle la femme d'Abraham ?", b: "Sara", f: ["Marie", "Ève", "Ruth"], e: "Abraham et Sara ont eu un fils, Isaac." },
      { q: "Pourquoi appelle-t-on Abraham le « père des croyants » ?", b: "Parce qu'il a fait confiance à Dieu", f: ["Parce qu'il a construit l'arche", "Parce qu'il a écrit toute la Bible", "Parce qu'il était roi d'Égypte"], e: "Abraham est parti sur la seule parole de Dieu." }
    ] },
  { cle: "decouvrir-4", titre: "Moïse et la sortie d'Égypte", resume: "Le buisson ardent, la mer traversée, les dix commandements", temps: "careme",
    corps: `
  <p>Les descendants d'Abraham, les <b>Hébreux</b>, sont devenus esclaves en Égypte. Le pharaon les fait travailler très dur.</p>
  <h3>Le buisson ardent</h3>
  <p><b>Moïse</b> garde des moutons dans le désert quand il voit un buisson qui brûle sans se consumer. Dieu lui parle depuis ce buisson : il l'envoie libérer son peuple. Dieu dit son nom : « Je suis » (Ex 3, 14).</p>
  <h3>La libération</h3>
  <p>Le pharaon refuse de laisser partir les Hébreux. Après de grands malheurs qui frappent l'Égypte (les dix plaies), il finit par céder.</p>
  <p>La nuit du départ, les Hébreux prennent un repas en hâte : c'est la <b>Pâque</b>, qui veut dire « passage ».</p>
  <p>Le pharaon change d'avis et les poursuit. Mais Dieu ouvre un chemin à travers la mer : les Hébreux passent à pied sec. Ils sont libres !</p>
  <h3>Dans le désert</h3>
  <p>Pendant <b>quarante ans</b>, le peuple marche dans le désert. Dieu le nourrit avec la <b>manne</b>. Sur le mont <b>Sinaï</b>, il donne à Moïse les <b>dix commandements</b>, pour apprendre à vivre libres et à aimer.</p>
  <p>Le Carême, avec ses quarante jours, rappelle cette longue marche vers la liberté.</p>
  <div class="astuce"><b>À retenir</b>Dieu a libéré son peuple de l'esclavage en Égypte, grâce à Moïse. Sur le mont Sinaï, il lui a donné les dix commandements.</div>`,
    quiz: [
      { q: "Comment Dieu parle-t-il à Moïse la première fois ?", b: "Depuis un buisson qui brûle sans se consumer", f: ["Par un téléphone", "Dans un rêve sur un bateau", "Par la bouche d'un pharaon"], e: "C'est le buisson ardent (Ex 3)." },
      { q: "Dans quel pays les Hébreux étaient-ils esclaves ?", b: "En Égypte", f: ["En France", "En Grèce", "Au Japon"], e: "Le pharaon les faisait travailler très dur." },
      { q: "Que veut dire le mot « Pâque » ?", b: "Passage", f: ["Chocolat", "Printemps", "Repos"], e: "Les Hébreux passent de l'esclavage à la liberté." },
      { q: "Combien de temps le peuple a-t-il marché dans le désert ?", b: "Quarante ans", f: ["Trois jours", "Mille ans", "Une semaine"], e: "Pendant quarante ans, Dieu l'a nourri avec la manne." },
      { q: "Où Moïse reçoit-il les dix commandements ?", b: "Sur le mont Sinaï", f: ["Au bord du lac de Galilée", "Dans le palais du pharaon", "À Bethléem"], e: "Dieu donne la Loi sur le mont Sinaï." }
    ] },
  { cle: "decouvrir-5", titre: "David, le berger devenu roi", resume: "Le plus petit des frères, choisi par Dieu", temps: "avent",
    corps: `
  <p><b>David</b> est le plus jeune des fils de Jessé, à <b>Bethléem</b>. Il garde les moutons de son père.</p>
  <h3>Choisi par Dieu</h3>
  <p>Dieu envoie le prophète <b>Samuel</b> chercher un nouveau roi parmi les fils de Jessé. Samuel voit les grands frères, forts et beaux. Mais Dieu lui dit : « Le Seigneur regarde le cœur. » (1 S 16, 7)</p>
  <p>C'est David, le plus petit, que Dieu choisit. Samuel verse de l'huile sur sa tête : c'est l'<b>onction</b>, le signe qu'il est choisi.</p>
  <h3>David et Goliath</h3>
  <p>Les Philistins ont un géant, <b>Goliath</b>, dont tout le monde a peur. David, avec sa fronde et sa confiance en Dieu, le fait tomber d'une seule pierre.</p>
  <h3>Le roi qui chante</h3>
  <p>David devient roi d'Israël. Il fait aussi des erreurs, mais il demande pardon à Dieu. On lui attribue beaucoup de <b>psaumes</b>, des prières chantées.</p>
  <h3>David et Jésus</h3>
  <p>Dieu avait promis qu'un descendant de David serait un roi pour toujours. Les prophètes ont annoncé sa venue. Jésus naîtra à Bethléem, la ville de David : c'est lui que l'on attend pendant l'<b>Avent</b>.</p>
  <div class="astuce"><b>À retenir</b>David, le petit berger de Bethléem, a été choisi par Dieu pour être roi. Dieu regarde le cœur. Jésus est le descendant promis de David.</div>`,
    quiz: [
      { q: "Quel était le métier de David quand il était jeune ?", b: "Berger", f: ["Pêcheur", "Charpentier", "Soldat romain"], e: "David gardait les moutons de son père." },
      { q: "Quel prophète choisit David au nom de Dieu ?", b: "Samuel", f: ["Moïse", "Noé", "Jean-Baptiste"], e: "Samuel verse de l'huile sur la tête de David." },
      { q: "Selon la Bible, que regarde le Seigneur ?", b: "Le cœur", f: ["La taille", "Les vêtements", "La richesse"], e: "Dieu regarde le cœur (1 S 16, 7)." },
      { q: "Comment s'appelle le géant que David affronte ?", b: "Goliath", f: ["Pharaon", "Hérode", "Samson"], e: "David le fait tomber avec sa fronde." },
      { q: "Quel lien y a-t-il entre David et Jésus ?", b: "Jésus est un descendant de David", f: ["David est le fils de Jésus", "Ils n'ont aucun lien", "David a baptisé Jésus"], e: "Jésus naît à Bethléem, la ville de David." }
    ] },
  { cle: "decouvrir-6", titre: "La naissance et l'enfance de Jésus", resume: "De l'Annonciation à Nazareth, en passant par Bethléem", temps: "noel",
    corps: `
  <p>À <b>Nazareth</b>, l'ange Gabriel annonce à Marie qu'elle sera la mère du Fils de Dieu : c'est l'<b>Annonciation</b>. Marie accepte. Joseph, son fiancé, accueille Marie et l'enfant.</p>
  <h3>Noël à Bethléem</h3>
  <p>L'empereur romain ordonne un recensement. Joseph et Marie partent pour <b>Bethléem</b>. Jésus y naît et il est couché dans une mangeoire. Des anges l'annoncent aux <b>bergers</b> (Lc 2).</p>
  <p>Des <b>mages</b> venus d'Orient suivent une étoile et offrent de l'or, de l'encens et de la myrrhe (Mt 2). On fête leur venue à l'<b>Épiphanie</b>.</p>
  <h3>La Présentation au Temple</h3>
  <p>Quarante jours après sa naissance, Marie et Joseph présentent Jésus au Temple de Jérusalem. Un vieil homme, <b>Siméon</b>, le reconnaît comme la lumière envoyée par Dieu. C'est la fête du 2 février, la Chandeleur.</p>
  <h3>Jésus grandit</h3>
  <p>Jésus grandit à Nazareth avec Marie et Joseph. À douze ans, il reste au Temple pour écouter et interroger les maîtres. Ses parents le cherchent pendant trois jours !</p>
  <p>Vers trente ans, il est <b>baptisé par Jean-Baptiste</b> dans le Jourdain. Puis il commence à annoncer la Bonne Nouvelle.</p>
  <div class="astuce"><b>À retenir</b>Jésus, Fils de Dieu, est né à Bethléem et a grandi à Nazareth. On fête sa naissance à Noël et la venue des mages à l'Épiphanie.</div>`,
    quiz: [
      { q: "Comment s'appelle l'annonce de l'ange Gabriel à Marie ?", b: "L'Annonciation", f: ["L'Ascension", "La Pentecôte", "L'Épiphanie"], e: "Annonciation vient de « annoncer »." },
      { q: "Quels cadeaux les mages offrent-ils à Jésus ?", b: "De l'or, de l'encens et de la myrrhe", f: ["Des jouets en bois", "Des moutons et des chèvres", "Du pain et du vin"], e: "Ce sont des cadeaux royaux (Mt 2)." },
      { q: "Quelle fête rappelle la venue des mages ?", b: "L'Épiphanie", f: ["La Toussaint", "Pâques", "L'Ascension"], e: "On partage souvent la galette ce jour-là." },
      { q: "Dans quel village Jésus a-t-il grandi ?", b: "Nazareth", f: ["Rome", "Babylone", "Athènes"], e: "On l'appelle parfois « Jésus de Nazareth »." },
      { q: "Qui a baptisé Jésus dans le Jourdain ?", b: "Jean-Baptiste", f: ["Pierre", "Moïse", "Le roi Hérode"], e: "Après son baptême, Jésus commence sa mission." }
    ] },
  { cle: "decouvrir-7", titre: "Les paraboles : le semeur et le bon Samaritain", resume: "Jésus enseigne avec des histoires", temps: "ordinaire",
    corps: `
  <p>Pour parler de Dieu, Jésus raconte souvent des histoires tirées de la vie de tous les jours : on les appelle des <b>paraboles</b>. Chacune a un message caché à découvrir.</p>
  <h3>Le semeur (Mt 13, 1-23)</h3>
  <p>Un semeur lance ses graines. Certaines tombent sur le chemin, et les oiseaux les mangent. D'autres tombent sur les pierres, et sèchent. D'autres tombent dans les ronces, qui les étouffent. D'autres enfin tombent dans la <b>bonne terre</b> et donnent beaucoup de fruit.</p>
  <p>La graine, c'est la <b>Parole de Dieu</b>. La bonne terre, c'est un cœur qui écoute et qui accueille cette Parole.</p>
  <h3>Le bon Samaritain (Lc 10, 25-37)</h3>
  <p>Un homme descend de Jérusalem à Jéricho. Des bandits l'attaquent et le laissent à moitié mort. Un prêtre passe, puis un lévite (un serviteur du Temple) : ils ne s'arrêtent pas.</p>
  <p>Puis arrive un <b>Samaritain</b>, un étranger que les gens de la région n'aimaient pas. Lui est pris de pitié : il soigne le blessé, le conduit dans une auberge et paie pour lui.</p>
  <p>Jésus demande : lequel a été le <b>prochain</b> du blessé ? Celui qui a eu pitié de lui. Et Jésus dit : « Va, et toi aussi, fais de même. » (Lc 10, 37)</p>
  <div class="astuce"><b>À retenir</b>Une parabole est une histoire de Jésus qui parle de Dieu. Mon prochain, c'est toute personne qui a besoin de moi, même un étranger.</div>`,
    quiz: [
      { q: "Qu'est-ce qu'une parabole ?", b: "Une histoire de Jésus qui parle de Dieu", f: ["Une prière chantée", "Un miracle", "Un livre de l'Ancien Testament"], e: "Jésus enseigne avec des histoires de la vie courante." },
      { q: "Dans la parabole du semeur, que représente la graine ?", b: "La Parole de Dieu", f: ["L'argent", "Les oiseaux", "Les cailloux"], e: "La bonne terre, c'est le cœur qui l'accueille." },
      { q: "Dans la parabole du semeur, où la graine donne-t-elle du fruit ?", b: "Dans la bonne terre", f: ["Sur le chemin", "Sur les pierres", "Dans les ronces"], e: "Un cœur qui écoute porte du fruit." },
      { q: "Qui s'arrête pour soigner l'homme blessé ?", b: "Un Samaritain", f: ["Le prêtre", "Le lévite", "Les bandits"], e: "C'est un étranger qui a pitié de lui." },
      { q: "Selon cette parabole, qui est mon prochain ?", b: "Toute personne qui a besoin de moi", f: ["Seulement ma famille", "Seulement mes voisins de classe", "Personne"], e: "Jésus nous demande d'aimer comme le Samaritain." }
    ] },
  { cle: "decouvrir-8", titre: "Les paraboles du pardon", resume: "La brebis perdue et le fils prodigue : Dieu nous attend", temps: "careme",
    corps: `
  <p>Dans le chapitre 15 de l'évangile de Luc, Jésus raconte des paraboles pour dire combien Dieu est heureux quand quelqu'un revient vers lui.</p>
  <h3>La brebis perdue (Lc 15, 4-7)</h3>
  <p>Un berger a <b>cent brebis</b>. L'une d'elles se perd. Il laisse les quatre-vingt-dix-neuf autres et part chercher celle qui est perdue jusqu'à ce qu'il la retrouve. Il la porte sur ses épaules, tout joyeux, et fait la fête avec ses amis.</p>
  <p>Dieu est comme ce berger : chacun compte pour lui.</p>
  <h3>Le fils prodigue (Lc 15, 11-32)</h3>
  <p>Un père a deux fils. Le plus jeune demande sa part d'héritage et part loin. Il dépense tout. Bientôt, il n'a plus rien, et il doit garder des cochons ; il a si faim qu'il voudrait manger leur nourriture.</p>
  <p>Il se dit : « Je vais retourner chez mon père et lui demander pardon. » Quand il est encore loin, son père le voit, est saisi de pitié, <b>court</b> vers lui et le serre dans ses bras. Il organise une grande fête !</p>
  <p>Le fils aîné est jaloux. Le père lui explique : « Ton frère était perdu, et il est retrouvé. »</p>
  <p>Le Carême est un bon moment pour revenir vers Dieu, comme le fils prodigue.</p>
  <div class="astuce"><b>À retenir</b>Dieu est un Père plein de miséricorde : il nous cherche quand nous sommes perdus et nous pardonne toujours quand nous revenons vers lui.</div>`,
    quiz: [
      { q: "Combien de brebis a le berger de la parabole ?", b: "Cent", f: ["Trois", "Mille", "Douze"], e: "Il laisse les 99 autres pour chercher celle qui est perdue." },
      { q: "Que fait le berger quand il retrouve sa brebis ?", b: "Il la porte sur ses épaules et fait la fête", f: ["Il la gronde très fort", "Il la vend au marché", "Il la laisse dehors"], e: "Il est rempli de joie." },
      { q: "Dans la parabole du fils prodigue, que fait le père quand il voit revenir son fils ?", b: "Il court vers lui et le serre dans ses bras", f: ["Il ferme la porte", "Il fait semblant de ne pas le voir", "Il le renvoie garder les cochons"], e: "Le père pardonne avant même que le fils ait fini de parler." },
      { q: "Quel animal le fils cadet doit-il garder quand il n'a plus rien ?", b: "Des cochons", f: ["Des lions", "Des chameaux", "Des poissons"], e: "Il est tombé très bas, mais il décide de revenir." },
      { q: "Que nous apprennent ces paraboles sur Dieu ?", b: "Il nous pardonne quand nous revenons vers lui", f: ["Il ne pardonne jamais", "Il n'aime que ceux qui ne se trompent jamais", "Il oublie ceux qui se perdent"], e: "Dieu est un Père plein de miséricorde." }
    ] },
  { cle: "decouvrir-9", titre: "Les miracles de Jésus", resume: "Des signes qui montrent l'amour de Dieu", temps: "ordinaire",
    corps: `
  <p>Les évangiles racontent que Jésus a fait des <b>miracles</b>. Ce ne sont pas des tours de magie : ce sont des <b>signes</b> qui montrent que Dieu est là et qu'il aime les hommes.</p>
  <h3>Quelques miracles</h3>
  <ul>
    <li><b>Les noces de Cana</b> (Jn 2, 1-11) : pendant un mariage, il n'y a plus de vin. À la demande de Marie, Jésus change l'eau en vin. C'est son premier signe.</li>
    <li><b>La multiplication des pains</b> (Jn 6, 1-15) : avec <b>cinq pains et deux poissons</b>, Jésus nourrit une foule d'environ cinq mille hommes. Il reste douze paniers !</li>
    <li><b>La tempête apaisée</b> (Mc 4, 35-41) : sur le lac, les apôtres ont peur. Jésus commande au vent, et le calme revient.</li>
    <li><b>L'aveugle Bartimée</b> (Mc 10, 46-52) : il crie vers Jésus, qui lui rend la vue.</li>
    <li><b>Lazare</b> (Jn 11) : Jésus pleure son ami mort, puis il le rappelle à la vie.</li>
  </ul>
  <h3>La foi</h3>
  <p>Souvent, Jésus dit à la personne guérie : « Ta foi t'a sauvé. » Les miracles invitent à faire confiance à Jésus.</p>
  <div class="astuce"><b>À retenir</b>Les miracles de Jésus sont des signes de l'amour de Dieu. Le premier a eu lieu aux noces de Cana. Ils nous invitent à croire en Jésus.</div>`,
    quiz: [
      { q: "Quel est le premier signe de Jésus, aux noces de Cana ?", b: "Il change l'eau en vin", f: ["Il marche sur l'eau", "Il guérit un aveugle", "Il calme la tempête"], e: "C'est à la demande de Marie (Jn 2)." },
      { q: "Avec combien de pains Jésus nourrit-il la foule ?", b: "Cinq pains et deux poissons", f: ["Cent pains", "Un seul gâteau", "Douze poissons et rien d'autre"], e: "Et il reste douze paniers." },
      { q: "Un miracle de Jésus, c'est…", b: "un signe de l'amour de Dieu", f: ["un tour de magie pour épater", "un spectacle payant", "une punition"], e: "Les miracles montrent que Dieu est là." },
      { q: "Qui est Bartimée ?", b: "Un aveugle guéri par Jésus", f: ["Un apôtre qui a trahi Jésus", "Le roi d'Égypte", "Un berger de Bethléem"], e: "Jésus lui rend la vue (Mc 10)." },
      { q: "Que fait Jésus pour son ami Lazare, mort depuis quatre jours ?", b: "Il le rappelle à la vie", f: ["Il ne vient pas", "Il le transforme en ange", "Il l'oublie"], e: "Jésus montre qu'il est plus fort que la mort (Jn 11)." }
    ] },
  { cle: "decouvrir-10", titre: "La Semaine sainte et Pâques", resume: "Des Rameaux au matin de Pâques", temps: "paques",
    corps: `
  <p>La dernière semaine de la vie de Jésus s'appelle la <b>Semaine sainte</b>.</p>
  <h3>Le dimanche des Rameaux</h3>
  <p>Jésus entre à Jérusalem monté sur un <b>âne</b>. La foule l'acclame en agitant des branches : « Hosanna ! »</p>
  <h3>Le Jeudi saint</h3>
  <p>Jésus prend un dernier repas avec ses apôtres : la <b>Cène</b>. Il leur lave les pieds. Il prend le pain et le vin et dit : « Ceci est mon corps… ceci est mon sang. » Le soir, au jardin des Oliviers, il est arrêté. <b>Judas</b> l'a trahi. Pierre, par peur, dit trois fois qu'il ne le connaît pas.</p>
  <h3>Le Vendredi saint</h3>
  <p>Le gouverneur romain <b>Ponce Pilate</b> le condamne. Jésus porte sa croix jusqu'au Golgotha, où il est crucifié. Il pardonne à ceux qui le font souffrir. Il meurt dans l'après-midi. On le met au tombeau.</p>
  <h3>Le dimanche de Pâques</h3>
  <p>Au matin, <b>Marie Madeleine</b> et d'autres femmes trouvent le tombeau vide. Jésus est <b>ressuscité</b> ! Il apparaît à ses disciples, par exemple à deux d'entre eux sur la route d'<b>Emmaüs</b> (Lc 24), qui le reconnaissent quand il partage le pain.</p>
  <p>Quarante jours plus tard, Jésus monte vers son Père : c'est l'<b>Ascension</b>.</p>
  <div class="astuce"><b>À retenir</b>Rameaux, Jeudi saint, Vendredi saint, Pâques : Jésus a donné sa vie par amour, et il est ressuscité le troisième jour. Pâques est la plus grande fête chrétienne.</div>`,
    quiz: [
      { q: "Sur quel animal Jésus entre-t-il à Jérusalem le jour des Rameaux ?", b: "Un âne", f: ["Un cheval de course", "Un chameau", "Un éléphant"], e: "La foule l'acclame avec des branches." },
      { q: "Comment s'appelle le dernier repas de Jésus avec ses apôtres ?", b: "La Cène", f: ["Le réveillon", "La Pentecôte", "Les noces de Cana"], e: "C'était le Jeudi saint." },
      { q: "Qui a trahi Jésus ?", b: "Judas", f: ["Jean", "Marie Madeleine", "Ponce Pilate"], e: "Judas l'a livré à ceux qui voulaient l'arrêter." },
      { q: "Qui trouve le tombeau vide le matin de Pâques ?", b: "Marie Madeleine et d'autres femmes", f: ["Ponce Pilate", "Les rois mages", "Moïse"], e: "Elles sont les premières à annoncer la résurrection." },
      { q: "Comment les disciples d'Emmaüs reconnaissent-ils Jésus ?", b: "Quand il partage le pain", f: ["Grâce à sa couronne", "En lisant un journal", "À cause de son âne"], e: "Ils le reconnaissent à la fraction du pain (Lc 24)." }
    ] },
  { cle: "decouvrir-11", titre: "La Pentecôte", resume: "L'Esprit Saint descend sur les apôtres : l'Église est née", temps: "pentecote",
    corps: `
  <p>Avant de remonter vers son Père, Jésus avait promis à ses amis : « Vous allez recevoir une force, celle de l'Esprit Saint. » (Ac 1, 8)</p>
  <h3>Le jour de la Pentecôte (Ac 2)</h3>
  <p>Cinquante jours après Pâques, les apôtres sont réunis avec Marie à Jérusalem. Soudain, un bruit comme un <b>violent coup de vent</b> remplit la maison. Des sortes de <b>langues de feu</b> se posent sur chacun d'eux. Ils sont remplis de l'<b>Esprit Saint</b>.</p>
  <p>Ils sortent et parlent de Jésus. Il y a là des gens venus de nombreux pays, et chacun les entend dans sa propre langue !</p>
  <h3>Pierre prend la parole</h3>
  <p>Pierre, qui avait eu peur le Jeudi saint, annonce maintenant avec courage que Jésus est ressuscité. Ce jour-là, environ <b>trois mille personnes</b> se font baptiser (Ac 2, 41).</p>
  <h3>La naissance de l'Église</h3>
  <p>La Pentecôte est souvent appelée l'anniversaire de l'<b>Église</b>. Le prêtre porte des vêtements <b>rouges</b>, la couleur du feu de l'Esprit.</p>
  <div class="astuce"><b>À retenir</b>À la Pentecôte, cinquante jours après Pâques, l'Esprit Saint est descendu sur les apôtres comme du vent et du feu. Il leur a donné le courage d'annoncer Jésus : l'Église est née.</div>`,
    quiz: [
      { q: "Combien de jours après Pâques fête-t-on la Pentecôte ?", b: "Cinquante jours", f: ["Trois jours", "Une semaine", "Un an"], e: "« Pentecôte » vient du grec et veut dire « cinquantième »." },
      { q: "Sous quelle forme l'Esprit Saint apparaît-il à la Pentecôte ?", b: "Comme des langues de feu et un grand vent", f: ["Comme de la neige", "Comme un arc-en-ciel", "Comme un serpent"], e: "C'est le récit des Actes des Apôtres (Ac 2)." },
      { q: "Quel apôtre prend la parole avec courage ce jour-là ?", b: "Pierre", f: ["Judas", "Moïse", "David"], e: "Il annonce que Jésus est ressuscité." },
      { q: "De quelle couleur sont les vêtements du prêtre à la Pentecôte ?", b: "Rouge", f: ["Vert", "Violet", "Noir"], e: "Le rouge rappelle le feu de l'Esprit Saint." },
      { q: "Qu'est-ce qui commence le jour de la Pentecôte ?", b: "La vie de l'Église", f: ["Le déluge", "La sortie d'Égypte", "L'Avent"], e: "On dit que c'est l'anniversaire de l'Église." }
    ] },
  { cle: "decouvrir-12", titre: "Le baptême et la paroisse", resume: "Entrer dans la grande famille de Dieu", temps: "toussaint",
    corps: `
  <p>Jésus a demandé à ses apôtres : « Allez ! De toutes les nations faites des disciples : baptisez-les au nom du Père, et du Fils, et du Saint-Esprit. » (Mt 28, 19)</p>
  <h3>Le baptême</h3>
  <p>Le baptême est le premier des sacrements. Par lui, on devient <b>enfant de Dieu</b> et membre de l'<b>Église</b>. Dieu lave le cœur de tout péché.</p>
  <ul>
    <li><b>L'eau</b> : le prêtre (ou le diacre) verse de l'eau sur la tête en disant : « Je te baptise au nom du Père, et du Fils, et du Saint-Esprit. »</li>
    <li><b>L'huile parfumée</b>, le saint chrême : on est marqué comme appartenant au Christ.</li>
    <li><b>Le vêtement blanc</b> : on est revêtu du Christ.</li>
    <li><b>Le cierge allumé</b> au cierge pascal : Jésus est la lumière de ma vie.</li>
  </ul>
  <p>Un parrain et une marraine aident le baptisé à grandir dans la foi.</p>
  <h3>La paroisse</h3>
  <p>La paroisse, c'est la communauté des chrétiens d'un même lieu, avec son église et son <b>curé</b>, le prêtre qui en a la charge. On s'y retrouve pour la messe, le catéchisme, les fêtes, et pour aider ceux qui en ont besoin.</p>
  <h3>Une immense famille</h3>
  <p>L'Église rassemble les chrétiens du monde entier, et aussi les saints du ciel. À la Toussaint, on fête cette grande famille.</p>
  <div class="astuce"><b>À retenir</b>Par le baptême, je deviens enfant de Dieu et membre de l'Église. La paroisse est la communauté des chrétiens là où je vis.</div>`,
    quiz: [
      { q: "Par le baptême, on devient…", b: "enfant de Dieu et membre de l'Église", f: ["plus grand d'un coup", "le chef de la paroisse", "un ange"], e: "Le baptême fait entrer dans la famille de Dieu." },
      { q: "Quelle phrase dit le prêtre en baptisant ?", b: "Je te baptise au nom du Père, et du Fils, et du Saint-Esprit", f: ["Je te souhaite un bon anniversaire", "Bienvenue à l'école", "Je te nomme roi"], e: "Ce sont les mots que Jésus a donnés (Mt 28, 19)." },
      { q: "Que signifie le cierge allumé au baptême ?", b: "Jésus est la lumière de ma vie", f: ["Il faut faire attention au feu", "C'est pour souffler comme un gâteau", "Il fait trop sombre dans l'église"], e: "Il est allumé au cierge pascal." },
      { q: "Comment s'appelle le prêtre qui a la charge d'une paroisse ?", b: "Le curé", f: ["Le maire", "Le pape", "Le parrain"], e: "Il est au service de la communauté." },
      { q: "Qui aide le baptisé à grandir dans la foi ?", b: "Le parrain et la marraine", f: ["Le facteur", "Personne", "Le boulanger"], e: "Ils accompagnent le baptisé, avec ses parents." }
    ] }
  ] },
/* ---------------------------------------------------------
   3. LE PARDON ET LA PREMIÈRE COMMUNION (CM1-CM2)
   --------------------------------------------------------- */
{ code: "communion", nom: "Le pardon et la première communion", pour: "CM1-CM2 (9-11 ans)", classes: ["cm1", "cm2"],
  intro: `<p>Cette étape prépare au sacrement du pardon et à la première communion.</p><p>Tu vas comprendre la messe pas à pas, découvrir les commandements et les Béatitudes, et apprendre à vivre l'année avec l'Église.</p>`,
  chapitres: [
  { cle: "communion-1", titre: "La prière : parler avec Dieu", resume: "Louer, remercier, demander pardon, demander de l'aide", temps: "ordinaire",
    corps: `
  <p>Prier, c'est parler avec Dieu comme avec un ami, et l'écouter. Jésus lui-même priait souvent, parfois toute une nuit, seul dans la montagne.</p>
  <h3>Quatre façons de prier</h3>
  <ul>
    <li><b>Louer</b> : dire à Dieu qu'il est grand et beau. « Gloire à toi, Seigneur ! »</li>
    <li><b>Remercier</b> : dire merci pour la vie, la famille, les amis, une belle journée.</li>
    <li><b>Demander pardon</b> : reconnaître ce qui n'allait pas et le confier à Dieu.</li>
    <li><b>Demander</b> : pour soi, et pour les autres (les malades, ceux qui sont tristes…). Prier pour les autres s'appelle <b>intercéder</b>.</li>
  </ul>
  <h3>Le Notre Père</h3>
  <p>Les apôtres ont demandé à Jésus : « Apprends-nous à prier. » Il leur a donné le <b>Notre Père</b> (Lc 11, 1-4 ; Mt 6, 9-13). C'est la prière de tous les chrétiens.</p>
  <h3>Prier chaque jour</h3>
  <p>On peut prier le matin en se levant, avant le repas (le bénédicité), le soir avant de dormir. Il suffit d'un moment de calme, d'un signe de croix, de quelques mots du cœur. Dieu entend toujours, même quand on ne sait pas quoi dire.</p>
  <div class="astuce"><b>À retenir</b>Prier, c'est parler avec Dieu et l'écouter. On peut le louer, le remercier, lui demander pardon et lui confier nos demandes. Jésus nous a appris le Notre Père.</div>`,
    quiz: [
      { q: "Quelle prière Jésus a-t-il apprise à ses apôtres ?", b: "Le Notre Père", f: ["Le Je vous salue Marie", "Le bénédicité", "Le Gloire au Père"], e: "Les apôtres lui avaient demandé : « Apprends-nous à prier. »" },
      { q: "Prier pour les autres, cela s'appelle…", b: "intercéder", f: ["se disputer", "se vanter", "se reposer"], e: "On confie à Dieu ceux qui ont besoin d'aide." },
      { q: "Dire à Dieu « Gloire à toi », c'est une prière de…", b: "louange", f: ["demande d'argent", "reproche", "colère"], e: "Louer, c'est dire à Dieu qu'il est grand." },
      { q: "Comment s'appelle la prière avant le repas ?", b: "Le bénédicité", f: ["Le Credo", "L'acte de contrition", "Le Magnificat"], e: "On remercie Dieu pour la nourriture." },
      { q: "Quand on ne sait pas quoi dire à Dieu…", b: "il nous entend quand même", f: ["il vaut mieux ne jamais prier", "il ne nous écoute pas", "il faut attendre d'être adulte"], e: "Un moment de silence et quelques mots suffisent." }
    ] },
  { cle: "communion-2", titre: "L'année liturgique et ses couleurs", resume: "L'Église vit au rythme de la vie de Jésus", temps: "avent",
    corps: `
  <p>Tout au long de l'année, l'Église fait mémoire de la vie de Jésus : c'est l'<b>année liturgique</b>. Elle ne commence pas le 1er janvier, mais le <b>premier dimanche de l'Avent</b>, fin novembre ou début décembre.</p>
  <h3>Les temps de l'année</h3>
  <ul>
    <li><b>L'Avent</b> : quatre semaines pour préparer Noël. Couleur : <b>violet</b>.</li>
    <li><b>Le temps de Noël</b> : de Noël au Baptême du Seigneur. Couleur : <b>blanc</b>.</li>
    <li><b>Le Carême</b> : quarante jours, du mercredi des Cendres à Pâques. Couleur : <b>violet</b>.</li>
    <li><b>La Semaine sainte</b> : <b>rouge</b> pour les Rameaux et le Vendredi saint (la Passion), <b>blanc</b> le Jeudi saint.</li>
    <li><b>Le temps pascal</b> : cinquante jours, de Pâques à la Pentecôte. Couleur : <b>blanc</b>. La Pentecôte est en <b>rouge</b>.</li>
    <li><b>Le temps ordinaire</b> : le reste de l'année, en <b>vert</b>, la couleur de l'espérance et de la vie qui pousse.</li>
  </ul>
  <h3>Ce que disent les couleurs</h3>
  <p>Le <b>violet</b> invite à se préparer et à changer son cœur. Le <b>blanc</b> dit la joie et la lumière (on le porte aussi pour les fêtes de Marie et des saints). Le <b>rouge</b> rappelle le feu de l'Esprit Saint et le sang des martyrs. Le <b>vert</b> accompagne la vie de tous les jours.</p>
  <p>Deux dimanches peuvent être en <b>rose</b> : le 3e de l'Avent et le 4e du Carême, pour dire que la fête approche.</p>
  <div class="astuce"><b>À retenir</b>L'année liturgique commence au premier dimanche de l'Avent. Violet pour l'Avent et le Carême, blanc pour Noël et Pâques, rouge pour la Pentecôte et la Passion, vert pour le temps ordinaire.</div>`,
    quiz: [
      { q: "Quand commence l'année liturgique ?", b: "Au premier dimanche de l'Avent", f: ["Le 1er janvier", "Le jour de Pâques", "Le jour de la rentrée"], e: "C'est fin novembre ou début décembre." },
      { q: "Quelle est la couleur de l'Avent et du Carême ?", b: "Violet", f: ["Vert", "Blanc", "Jaune"], e: "Le violet invite à se préparer." },
      { q: "Quelle est la couleur du temps ordinaire ?", b: "Vert", f: ["Rouge", "Violet", "Noir"], e: "Le vert, c'est la vie qui pousse." },
      { q: "Quelle couleur porte le prêtre le jour de Pâques ?", b: "Blanc", f: ["Violet", "Vert", "Marron"], e: "Le blanc dit la joie de la résurrection." },
      { q: "Combien de temps dure le temps pascal ?", b: "Cinquante jours, de Pâques à la Pentecôte", f: ["Quatre semaines avant Noël", "Une seule journée", "Six mois"], e: "Il se termine par la Pentecôte, en rouge." }
    ] },
  { cle: "communion-3", titre: "Marie et les saints", resume: "La Mère de Jésus et tous ceux qui ont suivi le Christ", temps: "toussaint",
    corps: `
  <h3>Marie, Mère de Jésus et notre Mère</h3>
  <p>Marie a dit « oui » à Dieu. Elle est la <b>Mère de Jésus</b>, et donc la <b>Mère de Dieu</b>. Au pied de la croix, Jésus l'a confiée à l'apôtre Jean, et à travers lui à tous ses disciples : elle est aussi notre Mère.</p>
  <p>L'Église fête Marie plusieurs fois dans l'année :</p>
  <ul>
    <li>l'<b>Immaculée Conception</b> (8 décembre) : dès le premier instant de sa vie, dans le ventre de sa mère, Marie a été préservée du péché ;</li>
    <li>l'<b>Annonciation</b> (25 mars) ;</li>
    <li>l'<b>Assomption</b> (15 août) : à la fin de sa vie, Marie est élevée au ciel avec son âme et son corps.</li>
  </ul>
  <p>On la prie avec le <b>Je vous salue Marie</b> et le chapelet.</p>
  <h3>Les saints</h3>
  <p>Les saints sont des hommes, des femmes et des enfants qui ont aimé Dieu et les autres de tout leur cœur. Quand l'Église reconnaît officiellement qu'une personne est au ciel, elle la <b>canonise</b>.</p>
  <ul>
    <li><b>Saint Martin</b> partage son manteau avec un pauvre, à Amiens.</li>
    <li><b>Saint François d'Assise</b> chante Dieu pour toute la Création.</li>
    <li><b>Sainte Bernadette</b> voit la Vierge Marie à Lourdes en 1858.</li>
    <li><b>Sainte Thérèse de Lisieux</b> enseigne la « petite voie » : faire les petites choses avec beaucoup d'amour.</li>
  </ul>
  <p>On n'adore que Dieu. Les saints, on les honore et on leur demande de prier pour nous.</p>
  <div class="astuce"><b>À retenir</b>Marie est la Mère de Dieu et notre Mère. Les saints sont les amis de Dieu ; ils prient pour nous. On fête tous les saints à la Toussaint, le 1er novembre.</div>`,
    quiz: [
      { q: "Que fête-t-on à l'Immaculée Conception, le 8 décembre ?", b: "Marie préservée du péché dès le début de sa vie", f: ["La naissance de Jésus", "Le baptême de Jésus", "La mort de Marie"], e: "Il ne faut pas la confondre avec la naissance de Jésus." },
      { q: "Que fête-t-on le 15 août ?", b: "L'Assomption de Marie", f: ["La Pentecôte", "La Toussaint", "Le Mercredi des Cendres"], e: "Marie est élevée au ciel avec son âme et son corps." },
      { q: "Quel saint a partagé son manteau avec un pauvre ?", b: "Saint Martin", f: ["Saint Pierre", "Saint Joseph", "Saint Paul"], e: "Cela s'est passé à Amiens ; on le fête le 11 novembre." },
      { q: "À qui Marie est-elle apparue à Lourdes ?", b: "À sainte Bernadette", f: ["À saint Nicolas", "À Moïse", "À sainte Thérèse de Lisieux"], e: "C'était en 1858." },
      { q: "Que fait-on avec les saints ?", b: "On les honore et on leur demande de prier pour nous", f: ["On les adore comme Dieu", "On les oublie", "On les imite pour faire des bêtises"], e: "On n'adore que Dieu ; les saints prient pour nous." }
    ] },
  { cle: "communion-4", titre: "La Cène, le dernier repas de Jésus", resume: "Le Jeudi saint, Jésus donne son corps et son sang", temps: "paques",
    corps: `
  <p>Le soir avant sa mort, Jésus réunit ses douze apôtres à Jérusalem pour fêter la Pâque juive, le repas qui rappelle la sortie d'Égypte. C'est la <b>Cène</b>, que l'Église célèbre le <b>Jeudi saint</b>.</p>
  <h3>Le lavement des pieds (Jn 13)</h3>
  <p>Jésus se met à genoux et lave les pieds de ses apôtres, comme un serviteur. Il leur dit de faire de même : se mettre au service les uns des autres.</p>
  <h3>Le pain et le vin</h3>
  <p>Pendant le repas, Jésus prend le pain, rend grâce, le rompt et le donne en disant : « Ceci est mon corps, donné pour vous. » Puis il prend la coupe de vin : « Cette coupe est la nouvelle Alliance en mon sang. » (Lc 22, 19-20)</p>
  <p>Et il ajoute : « Faites cela en mémoire de moi. » C'est ce que l'Église fait à chaque messe.</p>
  <h3>Le commandement nouveau</h3>
  <p>Ce soir-là, Jésus donne aussi ce commandement : « Aimez-vous les uns les autres comme je vous ai aimés. » (Jn 15, 12)</p>
  <h3>Le Triduum pascal</h3>
  <p>Le Jeudi saint au soir commencent les trois jours les plus importants de l'année : le <b>Triduum pascal</b> (du Jeudi saint au soir jusqu'au soir du dimanche de Pâques, en passant par le Vendredi saint, le Samedi saint et la veillée pascale), qui nous fait passer de la Cène à la résurrection.</p>
  <div class="astuce"><b>À retenir</b>À la Cène, le Jeudi saint, Jésus a lavé les pieds de ses apôtres et leur a donné son corps et son sang sous les signes du pain et du vin. Il a dit : « Faites cela en mémoire de moi. »</div>`,
    quiz: [
      { q: "Quel jour l'Église fait-elle mémoire de la Cène ?", b: "Le Jeudi saint", f: ["Le dimanche de Pâques", "Le jour de Noël", "Le jour de l'Ascension"], e: "C'est le dernier repas de Jésus avant sa mort." },
      { q: "Que fait Jésus aux apôtres au début du repas, dans l'évangile de Jean ?", b: "Il leur lave les pieds", f: ["Il leur coupe les cheveux", "Il leur donne de l'argent", "Il les envoie se coucher"], e: "Il montre qu'il faut se mettre au service des autres." },
      { q: "Que dit Jésus en donnant le pain ?", b: "Ceci est mon corps, donné pour vous", f: ["Ce pain est trop cuit", "Gardez ce pain pour demain", "Ce pain est pour les oiseaux"], e: "Ce sont les paroles reprises à chaque messe." },
      { q: "Quelle demande Jésus fait-il en instituant l'Eucharistie ?", b: "Faites cela en mémoire de moi", f: ["N'en parlez à personne", "Ne revenez plus jamais", "Oubliez ce repas"], e: "C'est pourquoi l'Église célèbre la messe." },
      { q: "Comment s'appellent les trois jours qui vont du Jeudi saint au soir à Pâques ?", b: "Le Triduum pascal", f: ["L'Avent", "Le temps ordinaire", "L'Épiphanie"], e: "Ce sont les jours les plus importants de l'année." }
    ] },
  { cle: "communion-5", titre: "L'Eucharistie : Jésus vraiment présent", resume: "Le pain de vie, que l'on reçoit à la communion", temps: "noel",
    corps: `
  <p>Le nom de <b>Bethléem</b>, où Jésus est né, veut dire « maison du pain ». Celui qui est né dans une mangeoire se donne à nous comme <b>le pain de la vie</b> : « Moi, je suis le pain de la vie. » (Jn 6, 35)</p>
  <h3>Le mot « Eucharistie »</h3>
  <p>Ce mot grec veut dire <b>« action de grâce »</b>, c'est-à-dire « merci ». L'Eucharistie est le sacrement où Jésus se donne à nous, sous les apparences du pain et du vin.</p>
  <h3>La présence réelle</h3>
  <p>Pendant la messe, quand le prêtre redit les paroles de Jésus à la Cène, par la puissance de l'Esprit Saint, le pain et le vin <b>deviennent vraiment</b> le Corps et le Sang du Christ. On voit toujours du pain et du vin, on en a toujours le goût, mais c'est <b>Jésus lui-même</b> qui est là. C'est ce que l'Église appelle la <b>présence réelle</b>.</p>
  <h3>Recevoir la communion</h3>
  <ul>
    <li>On se prépare : avoir le cœur en paix avec Dieu (si on a commis un péché grave, on se confesse d'abord) et ne rien manger pendant l'heure qui précède.</li>
    <li>Le prêtre présente l'hostie en disant : « Le Corps du Christ. » On répond : « <b>Amen</b> », qui veut dire « oui, je crois ».</li>
    <li>On peut la recevoir dans la main (la main gauche posée sur la droite, comme un trône) ou sur la langue.</li>
    <li>On prend ensuite un moment de silence pour dire merci à Jésus.</li>
  </ul>
  <p>Les hosties consacrées qui restent sont gardées dans le <b>tabernacle</b>, pour les malades et pour l'adoration.</p>
  <div class="astuce"><b>À retenir</b>Dans l'Eucharistie, le pain et le vin deviennent vraiment le Corps et le Sang du Christ. Quand je communie, je reçois Jésus lui-même, et je réponds : « Amen ».</div>`,
    quiz: [
      { q: "Que veut dire le mot « Eucharistie » ?", b: "Action de grâce", f: ["Grand repas", "Pain blanc", "Cloche"], e: "C'est un grand « merci » à Dieu." },
      { q: "Que veut dire le nom « Bethléem » ?", b: "Maison du pain", f: ["Ville du roi", "Montagne sainte", "Grande étoile"], e: "Jésus, né à Bethléem, est le pain de la vie." },
      { q: "Pendant la messe, que deviennent le pain et le vin consacrés ?", b: "Le Corps et le Sang du Christ", f: ["Un simple souvenir sans rien de plus", "Un goûter", "De l'eau bénite"], e: "C'est la présence réelle de Jésus." },
      { q: "Que répond-on quand le prêtre dit « Le Corps du Christ » ?", b: "Amen", f: ["Merci beaucoup", "Bon appétit", "À bientôt"], e: "Amen veut dire « oui, je crois »." },
      { q: "Où garde-t-on les hosties consacrées après la messe ?", b: "Dans le tabernacle", f: ["Dans le bénitier", "Dans le confessionnal", "Sur l'ambon"], e: "Elles sont gardées pour les malades et pour l'adoration." }
    ] },
  { cle: "communion-6", titre: "La messe pas à pas (1) : l'accueil et la Parole", resume: "On se rassemble, on demande pardon, on écoute Dieu", temps: "ordinaire",
    corps: `
  <p>La messe a deux grandes parties : la <b>liturgie de la Parole</b> et la <b>liturgie de l'Eucharistie</b>. Elles sont entourées d'un temps d'accueil et d'un envoi.</p>
  <h3>1. L'accueil (les rites d'ouverture)</h3>
  <ul>
    <li>On chante pendant que le prêtre entre. Il embrasse l'autel.</li>
    <li>Signe de croix, puis salutation : « Le Seigneur soit avec vous. — Et avec votre esprit. »</li>
    <li>On demande pardon à Dieu : « Seigneur, prends pitié. »</li>
    <li>Le dimanche, on chante le <b>Gloire à Dieu</b> (sauf pendant l'Avent et le Carême).</li>
    <li>Le prêtre dit la prière d'ouverture, au nom de tous.</li>
  </ul>
  <h3>2. La liturgie de la Parole</h3>
  <ul>
    <li><b>Première lecture</b>, le plus souvent tirée de l'Ancien Testament.</li>
    <li><b>Le psaume</b>, une prière chantée.</li>
    <li><b>Deuxième lecture</b> (le dimanche), souvent une lettre d'un apôtre.</li>
    <li><b>L'Alléluia</b> : on se lève pour accueillir l'Évangile (pendant le Carême, on chante une autre acclamation).</li>
    <li><b>L'Évangile</b>, lu par le prêtre ou le diacre. On trace une petite croix sur le front, la bouche et le cœur.</li>
    <li><b>L'homélie</b> : le prêtre explique les lectures.</li>
    <li><b>Le Credo</b> (le dimanche) : on dit ensemble sa foi.</li>
    <li><b>La prière universelle</b> : on prie pour l'Église, le monde, les malades, la communauté.</li>
  </ul>
  <p>Les lectures sont lues à l'<b>ambon</b>, le pupitre de la Parole.</p>
  <div class="astuce"><b>À retenir</b>La messe commence par l'accueil et la demande de pardon. Puis vient la liturgie de la Parole : lectures, psaume, Évangile, homélie, Credo et prière universelle.</div>`,
    quiz: [
      { q: "Quelles sont les deux grandes parties de la messe ?", b: "La liturgie de la Parole et la liturgie de l'Eucharistie", f: ["Le chant et la quête", "Le matin et le soir", "L'Ancien et le Nouveau Testament"], e: "Elles sont entourées de l'accueil et de l'envoi." },
      { q: "Que répond-on à « Le Seigneur soit avec vous » ?", b: "Et avec votre esprit", f: ["Bonjour monsieur le curé", "Merci, à vous aussi", "Amen, au revoir"], e: "C'est la réponse liturgique en usage." },
      { q: "Quelle lecture est lue en dernier, juste avant l'homélie ?", b: "L'Évangile", f: ["Le psaume", "La première lecture", "Le livre de la Genèse"], e: "On se lève pour l'accueillir avec l'Alléluia." },
      { q: "À quoi sert l'homélie ?", b: "Le prêtre explique les lectures", f: ["On fait la quête", "On chante le Notre Père", "On se donne la paix"], e: "Elle aide à comprendre la Parole de Dieu." },
      { q: "Comment s'appelle le pupitre où l'on lit les lectures ?", b: "L'ambon", f: ["Le tabernacle", "Le bénitier", "L'autel"], e: "C'est la table de la Parole." }
    ] },
  { cle: "communion-7", titre: "La messe pas à pas (2) : l'Eucharistie et l'envoi", resume: "Offrir, rendre grâce, communier, être envoyés", temps: "pentecote",
    corps: `
  <h3>3. La liturgie de l'Eucharistie</h3>
  <ul>
    <li><b>La préparation des dons</b> (l'offertoire) : on apporte le pain et le vin à l'autel. Souvent, on fait la quête pour l'Église et les pauvres.</li>
    <li><b>La prière eucharistique</b>, le cœur de la messe :
      <ul>
        <li>la préface, puis tous chantent « <b>Saint ! Saint ! Saint, le Seigneur</b>… » ;</li>
        <li>le prêtre demande à Dieu d'envoyer l'Esprit Saint sur le pain et le vin ;</li>
        <li>la <b>consécration</b> : il redit les paroles de Jésus à la Cène. Le pain et le vin deviennent le Corps et le Sang du Christ. Il élève l'hostie puis le calice ;</li>
        <li>on prie pour l'Église, le pape, l'évêque, les défunts, avec Marie et les saints ;</li>
        <li>la prière se termine par « Par lui, avec lui et en lui… », et tous répondent un grand <b>Amen</b>.</li>
      </ul></li>
  </ul>
  <h3>4. La communion</h3>
  <ul>
    <li>On dit ensemble le <b>Notre Père</b>.</li>
    <li>On se donne un signe de <b>paix</b>.</li>
    <li>Le prêtre rompt l'hostie pendant qu'on chante « <b>Agneau de Dieu</b> ».</li>
    <li>On s'avance pour <b>communier</b>, puis on prend un temps de silence.</li>
  </ul>
  <h3>5. L'envoi</h3>
  <p>Le prêtre bénit l'assemblée et dit par exemple : « Allez, dans la paix du Christ. » On répond : « Nous rendons grâce à Dieu. » Le mot « messe » viendrait de ce renvoi (en latin <i>missa</i>) : nous sommes <b>envoyés</b>, comme les apôtres à la Pentecôte, pour vivre de l'amour reçu.</p>
  <div class="astuce"><b>À retenir</b>Offertoire, prière eucharistique avec la consécration, Notre Père, paix, Agneau de Dieu, communion, bénédiction et envoi : à la fin de la messe, je suis envoyé pour aimer.</div>`,
    quiz: [
      { q: "Comment s'appelle le moment où l'on apporte le pain et le vin à l'autel ?", b: "La préparation des dons (l'offertoire)", f: ["L'homélie", "Le psaume", "L'envoi"], e: "Il ouvre la liturgie de l'Eucharistie." },
      { q: "Quel est le cœur de la messe ?", b: "La prière eucharistique", f: ["Les annonces de la paroisse", "Le chant de sortie", "La quête"], e: "C'est là qu'a lieu la consécration." },
      { q: "Quelle prière dit-on ensemble juste avant le signe de paix ?", b: "Le Notre Père", f: ["Le Credo", "Le Je vous salue Marie", "Le bénédicité"], e: "C'est le début des rites de communion." },
      { q: "Que chante-t-on pendant que le prêtre rompt l'hostie ?", b: "Agneau de Dieu", f: ["Joyeux anniversaire", "Il est né le divin enfant", "Alléluia"], e: "Jésus est l'Agneau de Dieu qui enlève le péché du monde." },
      { q: "Que répond-on à « Allez, dans la paix du Christ » ?", b: "Nous rendons grâce à Dieu", f: ["Et avec votre esprit", "Bon appétit", "À la semaine prochaine"], e: "Nous sommes envoyés pour vivre l'amour reçu." }
    ] },
  { cle: "communion-8", titre: "Les dix commandements", resume: "Dix paroles pour vivre libres et aimer", temps: "ordinaire",
    corps: `
  <p>Sur le mont Sinaï, Dieu a donné à Moïse <b>dix commandements</b> (Ex 20). Ce ne sont pas des règles pour embêter : ce sont des chemins de liberté, donnés par Dieu qui venait de libérer son peuple.</p>
  <h3>Les trois premiers : aimer Dieu</h3>
  <ul>
    <li>1. Tu adoreras Dieu seul et tu l'aimeras plus que tout.</li>
    <li>2. Tu ne prononceras pas le nom de Dieu en vain (sans respect).</li>
    <li>3. Tu sanctifieras le jour du Seigneur (pour les chrétiens, le dimanche).</li>
  </ul>
  <h3>Les sept autres : aimer son prochain</h3>
  <ul>
    <li>4. Honore ton père et ta mère.</li>
    <li>5. Tu ne tueras pas (respecter toute vie).</li>
    <li>6. Tu ne commettras pas d'adultère (être fidèle dans l'amour).</li>
    <li>7. Tu ne voleras pas.</li>
    <li>8. Tu ne porteras pas de faux témoignage (ne pas mentir).</li>
    <li>9. Tu ne désireras pas la femme de ton prochain (garder un cœur pur).</li>
    <li>10. Tu ne convoiteras pas les biens d'autrui (ne pas être jaloux de ce que les autres ont).</li>
  </ul>
  <p>Jésus n'a pas supprimé les commandements : il leur a donné leur plein sens. Ils nous aident à <b>aimer vraiment</b>.</p>
  <div class="astuce"><b>À retenir</b>Les dix commandements, donnés à Moïse sur le Sinaï, sont des chemins de liberté. Les trois premiers concernent l'amour de Dieu, les sept autres l'amour du prochain.</div>`,
    quiz: [
      { q: "À qui Dieu a-t-il donné les dix commandements ?", b: "À Moïse", f: ["À Noé", "À saint Pierre", "À Jean-Baptiste"], e: "C'était sur le mont Sinaï." },
      { q: "Combien de commandements concernent directement l'amour de Dieu ?", b: "Trois", f: ["Un", "Sept", "Dix"], e: "Les sept autres concernent l'amour du prochain." },
      { q: "Le quatrième commandement dit :", b: "Honore ton père et ta mère", f: ["Tu ne voleras pas", "Tu ne tueras pas", "Tu adoreras Dieu seul"], e: "C'est le premier des commandements sur le prochain." },
      { q: "« Tu ne porteras pas de faux témoignage » veut dire :", b: "Ne pas mentir", f: ["Ne pas porter de lunettes", "Ne pas aller au tribunal", "Ne pas porter de cartable"], e: "C'est le huitième commandement." },
      { q: "Pour les chrétiens, quel est le jour du Seigneur ?", b: "Le dimanche", f: ["Le lundi", "Le mercredi", "Il n'y en a pas"], e: "C'est le jour de la résurrection de Jésus." }
    ] },
  { cle: "communion-9", titre: "Le commandement de l'amour", resume: "Aimer Dieu et aimer son prochain comme soi-même", temps: "ordinaire",
    corps: `
  <p>Un jour, un spécialiste de la Loi demande à Jésus : « Quel est le plus grand commandement ? » (Mt 22, 34-40)</p>
  <h3>La réponse de Jésus</h3>
  <p>Jésus résume tous les commandements en deux :</p>
  <ul>
    <li>« Tu aimeras le Seigneur ton Dieu de tout ton cœur, de toute ton âme et de tout ton esprit. »</li>
    <li>« Tu aimeras ton prochain comme toi-même. »</li>
  </ul>
  <p>Les deux vont ensemble : on ne peut pas dire qu'on aime Dieu si on n'aime pas les autres (1 Jn 4, 20).</p>
  <h3>Le commandement nouveau</h3>
  <p>À la Cène, Jésus va encore plus loin : « Aimez-vous les uns les autres comme je vous ai aimés. » Il nous a aimés jusqu'à donner sa vie.</p>
  <h3>Aimer, concrètement</h3>
  <ul>
    <li>Aider à la maison sans qu'on le demande.</li>
    <li>Jouer avec celui qui est seul dans la cour.</li>
    <li>Pardonner, même quand c'est difficile.</li>
    <li>Prier pour quelqu'un.</li>
    <li>Partager ce que j'ai.</li>
  </ul>
  <p>Jésus va jusqu'à dire : « Aimez vos ennemis. » (Mt 5, 44). Cela ne veut pas dire être d'accord avec le mal, mais vouloir le bien de chacun et prier pour lui.</p>
  <div class="astuce"><b>À retenir</b>Le plus grand commandement : aimer Dieu de tout son cœur et aimer son prochain comme soi-même. Jésus nous demande de nous aimer comme il nous a aimés.</div>`,
    quiz: [
      { q: "Quel est le plus grand commandement selon Jésus ?", b: "Aimer Dieu de tout son cœur", f: ["Ne jamais rire", "Aller à la messe une fois par an", "Être le premier en classe"], e: "Le second lui est semblable : aimer son prochain." },
      { q: "Comment doit-on aimer son prochain ?", b: "Comme soi-même", f: ["Moins que les animaux", "Seulement s'il est gentil", "Seulement le dimanche"], e: "C'est le second commandement donné par Jésus." },
      { q: "Quel est le commandement nouveau donné par Jésus à la Cène ?", b: "Aimez-vous les uns les autres comme je vous ai aimés", f: ["Mangez tout le pain", "Ne parlez à personne", "Restez toujours à Jérusalem"], e: "Jésus nous a aimés jusqu'à donner sa vie." },
      { q: "Peut-on aimer Dieu sans aimer les autres ?", b: "Non, les deux vont ensemble", f: ["Oui, sans problème", "Oui, si on prie très fort", "Seulement les jours de fête"], e: "Saint Jean le dit dans sa première lettre (1 Jn 4, 20)." },
      { q: "Que demande Jésus à propos de nos ennemis ?", b: "De les aimer et de prier pour eux", f: ["De se venger", "De les ignorer pour toujours", "De se moquer d'eux"], e: "Vouloir le bien de chacun, sans approuver le mal (Mt 5, 44)." }
    ] },
  { cle: "communion-10", titre: "Les Béatitudes", resume: "Le chemin du bonheur selon Jésus", temps: "toussaint",
    corps: `
  <p>Sur une montagne, au bord du lac de Galilée, Jésus enseigne la foule. Il commence par une suite de phrases qui commencent toutes par « <b>Heureux</b> » : ce sont les <b>Béatitudes</b> (Mt 5, 1-12). C'est l'évangile lu le jour de la Toussaint, car c'est le chemin des saints.</p>
  <h3>Les huit Béatitudes</h3>
  <ul>
    <li>Heureux les <b>pauvres de cœur</b> : le royaume des Cieux est à eux.</li>
    <li>Heureux ceux qui <b>pleurent</b> : ils seront consolés.</li>
    <li>Heureux les <b>doux</b> : ils recevront la terre en héritage.</li>
    <li>Heureux ceux qui ont <b>faim et soif de la justice</b> : ils seront rassasiés.</li>
    <li>Heureux les <b>miséricordieux</b> : ils obtiendront miséricorde.</li>
    <li>Heureux les <b>cœurs purs</b> : ils verront Dieu.</li>
    <li>Heureux les <b>artisans de paix</b> : ils seront appelés fils de Dieu.</li>
    <li>Heureux ceux qui sont <b>persécutés pour la justice</b> : le royaume des Cieux est à eux.</li>
  </ul>
  <h3>Un bonheur étonnant</h3>
  <p>Le monde dit souvent : « Heureux les riches, les forts, ceux qui gagnent. » Jésus dit autre chose : le vrai bonheur vient d'un cœur simple, qui fait confiance à Dieu, qui pardonne et qui fait la paix.</p>
  <p>Un « pauvre de cœur », c'est quelqu'un qui sait qu'il a besoin de Dieu. Un « artisan de paix », c'est quelqu'un qui réconcilie ceux qui se disputent.</p>
  <div class="astuce"><b>À retenir</b>Les Béatitudes, dans le Sermon sur la montagne (Mt 5), sont le chemin du vrai bonheur. Elles commencent toutes par « Heureux ». C'est l'évangile de la Toussaint.</div>`,
    quiz: [
      { q: "Par quel mot commencent toutes les Béatitudes ?", b: "Heureux", f: ["Malheur", "Attention", "Interdit"], e: "Jésus montre le chemin du bonheur." },
      { q: "Selon les Béatitudes, que recevront les artisans de paix ?", b: "Ils seront appelés fils de Dieu", f: ["Ils seront très riches", "Ils seront rois de la terre", "Ils ne seront jamais tristes"], e: "Faire la paix, c'est ressembler à Dieu." },
      { q: "Dans quel évangile trouve-t-on le Sermon sur la montagne avec les Béatitudes ?", b: "L'évangile de Matthieu", f: ["Le livre de la Genèse", "Le livre de l'Exode", "Les Psaumes"], e: "Au chapitre 5 (Mt 5, 1-12)." },
      { q: "Quel jour lit-on l'évangile des Béatitudes ?", b: "À la Toussaint", f: ["À Noël", "Le Vendredi saint", "Le Mercredi des Cendres"], e: "C'est le chemin des saints." },
      { q: "Qu'est-ce qu'un « pauvre de cœur » ?", b: "Quelqu'un qui sait qu'il a besoin de Dieu", f: ["Quelqu'un qui a un cœur malade", "Quelqu'un qui n'aime personne", "Quelqu'un qui a perdu son porte-monnaie"], e: "Il fait confiance à Dieu plutôt qu'à ses richesses." }
    ] },
  { cle: "communion-11", titre: "Le péché, qu'est-ce que c'est ?", resume: "Quand on s'éloigne de l'amour de Dieu et des autres", temps: "careme",
    corps: `
  <p>Dieu nous a créés <b>libres</b>. Il ne nous force pas à l'aimer. Mais cette liberté, nous pouvons mal l'utiliser.</p>
  <h3>Le péché</h3>
  <p>Le <b>péché</b>, c'est choisir librement de faire le mal, ou de ne pas faire le bien qu'on pourrait faire. Il abîme notre amitié avec Dieu, avec les autres, et avec nous-mêmes. Ce n'est pas une simple erreur ou une maladresse : pour pécher, il faut le savoir et le vouloir.</p>
  <ul>
    <li>Pécher en <b>pensée</b> : être jaloux, en vouloir à quelqu'un longtemps.</li>
    <li>Pécher en <b>parole</b> : mentir, se moquer, dire du mal.</li>
    <li>Pécher par <b>action</b> : voler, frapper, tricher.</li>
    <li>Pécher par <b>omission</b> : ne pas aider quand on pourrait.</li>
  </ul>
  <p>Il y a des péchés plus ou moins graves. Un péché <b>grave</b> (on dit « mortel ») coupe l'amitié avec Dieu : il porte sur une chose grave, commise en le sachant bien et en le voulant vraiment. Les autres péchés sont dits <b>véniels</b> : ils abîment cette amitié sans la briser.</p>
  <h3>Dieu ne se lasse pas de pardonner</h3>
  <p>Le péché n'a pas le dernier mot. Jésus est venu pour nous sauver. Comme le père du fils prodigue, Dieu attend toujours notre retour. Le Carême est un temps pour <b>se convertir</b>, c'est-à-dire se retourner vers Dieu.</p>
  <div class="astuce"><b>À retenir</b>Le péché, c'est choisir librement de faire le mal ou de ne pas faire le bien. Il abîme l'amitié avec Dieu et les autres. Mais Dieu nous pardonne toujours quand nous revenons vers lui.</div>`,
    quiz: [
      { q: "Qu'est-ce que le péché ?", b: "Choisir librement de faire le mal ou de ne pas faire le bien", f: ["Renverser un verre par accident", "Avoir une mauvaise note", "Être malade"], e: "Pour pécher, il faut le savoir et le vouloir." },
      { q: "Ne pas aider quelqu'un alors qu'on le pourrait, c'est un péché…", b: "par omission", f: ["en rêve", "d'oubli de cartable", "de fatigue"], e: "On oublie de faire le bien qu'on pouvait faire." },
      { q: "Comment appelle-t-on les péchés moins graves, qui abîment l'amitié avec Dieu sans la briser ?", b: "Les péchés véniels", f: ["Les péchés mortels", "Les péchés capitaux du dimanche", "Les péchés imaginaires"], e: "Le péché grave, lui, est dit mortel." },
      { q: "Que veut dire « se convertir » ?", b: "Se retourner vers Dieu", f: ["Changer de prénom", "Déménager", "Partir en vacances"], e: "C'est l'appel du Carême." },
      { q: "Quand nous revenons vers lui, Dieu…", b: "nous pardonne toujours", f: ["nous pardonne une seule fois dans la vie", "nous ignore", "nous punit pour toujours"], e: "Comme le père du fils prodigue, il nous attend." }
    ] },
  { cle: "communion-12", titre: "Le sacrement du pardon", resume: "Comment se confesser, pas à pas", temps: "careme",
    corps: `
  <p>Le soir de Pâques, Jésus ressuscité a dit à ses apôtres : « Recevez l'Esprit Saint. À qui vous remettrez ses péchés, ils seront remis. » (Jn 20, 22-23). C'est l'origine du <b>sacrement de réconciliation</b>, qu'on appelle aussi sacrement du pardon, de pénitence, ou confession.</p>
  <h3>Se préparer</h3>
  <p>On prend un moment de calme pour faire son <b>examen de conscience</b> : on relit sa vie à la lumière de l'amour de Dieu. Qu'est-ce qui n'a pas été aimant envers Dieu, envers les autres, envers moi-même ?</p>
  <h3>Pas à pas</h3>
  <ul>
    <li>1. <b>L'accueil</b> : le prêtre m'accueille ; je fais le signe de croix.</li>
    <li>2. <b>La Parole de Dieu</b> : on peut lire un court passage de la Bible.</li>
    <li>3. <b>L'aveu</b> : je dis simplement mes péchés.</li>
    <li>4. <b>Le conseil et la pénitence</b> : le prêtre me donne un conseil et me propose un geste ou une prière, pour montrer que je veux changer.</li>
    <li>5. <b>Le regret</b> : je dis l'acte de contrition, une prière pour dire que je regrette et que je veux m'améliorer avec l'aide de Dieu.</li>
    <li>6. <b>L'absolution</b> : le prêtre étend la main et, au nom de Jésus, me pardonne mes péchés, « au nom du Père, et du Fils, et du Saint-Esprit ». Je réponds : « Amen ».</li>
    <li>7. <b>Le merci</b> : je rends grâce à Dieu, et je fais ma pénitence.</li>
  </ul>
  <h3>N'aie pas peur</h3>
  <p>Le prêtre n'est pas là pour gronder, mais pour donner le pardon de Dieu. Il ne répétera jamais à personne ce qu'il a entendu : c'est le <b>secret de la confession</b>, absolu. On se confesse avant sa première communion.</p>
  <div class="astuce"><b>À retenir</b>Dans le sacrement du pardon, c'est Jésus qui pardonne par le prêtre. Examen de conscience, aveu, pénitence, contrition, absolution : je repars en paix, réconcilié avec Dieu.</div>`,
    quiz: [
      { q: "Qui pardonne les péchés dans le sacrement de réconciliation ?", b: "Dieu, par le ministère du prêtre", f: ["Le prêtre tout seul, sans Dieu", "Mes copains", "Personne"], e: "Le prêtre agit au nom de Jésus." },
      { q: "Comment s'appelle le moment où l'on relit sa vie pour se préparer ?", b: "L'examen de conscience", f: ["L'interrogation écrite", "L'homélie", "La quête"], e: "On regarde sa vie à la lumière de l'amour de Dieu." },
      { q: "Comment s'appelle la prière où l'on dit qu'on regrette ?", b: "L'acte de contrition", f: ["Le Gloire au Père", "Le bénédicité", "Le Credo"], e: "On dit son regret et son désir de changer." },
      { q: "Que fait le prêtre avec ce qu'il entend en confession ?", b: "Il ne le répète jamais à personne", f: ["Il le raconte aux parents", "Il l'écrit dans le journal", "Il l'annonce à la messe"], e: "Le secret de la confession est absolu." },
      { q: "Comment s'appelle le pardon donné par le prêtre au nom de Jésus ?", b: "L'absolution", f: ["La bénédiction des rameaux", "La consécration", "L'onction des malades"], e: "Je réponds alors : « Amen »." }
    ] }
  ] },
/* ---------------------------------------------------------
   4. LA PROFESSION DE FOI (6e-5e)
   --------------------------------------------------------- */
{ code: "profession", nom: "La profession de foi", pour: "6e-5e (11-13 ans)", classes: ["6e", "5e"],
  intro: `<p>Faire sa profession de foi, c'est dire soi-même, devant la communauté : « Je crois. » C'est reprendre à son compte la foi de son baptême.</p><p>Dans cette étape, tu parcours le Credo article par article, les sept sacrements, et l'histoire des premiers chrétiens jusqu'à l'Église d'aujourd'hui.</p>`,
  chapitres: [
  { cle: "profession-1", titre: "Le Credo : dire « je crois »", resume: "Ce qu'est la foi, et le résumé de la foi chrétienne", temps: "ordinaire",
    corps: `
  <p>« Credo » est un mot latin qui veut dire <b>« je crois »</b>. Le Credo, qu'on appelle aussi le <b>Symbole de la foi</b>, est le résumé de ce que croient les chrétiens.</p>
  <h3>Qu'est-ce que croire ?</h3>
  <p>Croire, ce n'est pas seulement « penser que c'est peut-être vrai ». C'est <b>faire confiance</b> à Dieu qui se fait connaître, et accueillir ce qu'il nous révèle. La foi est à la fois un <b>don</b> de Dieu et une <b>réponse</b> libre de l'homme. Elle ne s'oppose pas à l'intelligence : on peut poser des questions, chercher, réfléchir.</p>
  <h3>Deux Credo</h3>
  <ul>
    <li><b>Le Symbole des Apôtres</b> (« Je crois en Dieu, le Père tout-puissant… ») : un résumé très ancien de la foi des apôtres, utilisé à Rome pour le baptême. On le partage traditionnellement en douze articles.</li>
    <li><b>Le Symbole de Nicée-Constantinople</b> (« Je crois en un seul Dieu… ») : plus développé, rédigé par les conciles de Nicée (en 325) et de Constantinople (en 381).</li>
  </ul>
  <h3>Trois grandes parties</h3>
  <p>Le Credo suit l'ordre de la Trinité : <b>Dieu le Père</b> et la Création ; <b>Jésus Christ</b>, le Fils, et notre salut ; <b>l'Esprit Saint</b>, l'Église et la vie éternelle.</p>
  <h3>Je crois, nous croyons</h3>
  <p>Chacun dit « je crois », mais personne ne croit tout seul : nous recevons la foi de l'Église et nous la transmettons. Le jour de la profession de foi, tu redis toi-même les promesses que tes parents et ton parrain et ta marraine ont faites à ton baptême.</p>
  <div class="astuce"><b>À retenir</b>« Credo » veut dire « je crois ». Il existe deux Credo principaux : le Symbole des Apôtres et celui de Nicée-Constantinople. La foi est un don de Dieu et une réponse libre.</div>`,
    quiz: [
      { q: "Que veut dire le mot latin « Credo » ?", b: "Je crois", f: ["Je prie", "Je chante", "Je pardonne"], e: "C'est le premier mot de la profession de foi en latin." },
      { q: "Quels conciles ont rédigé le Credo « Je crois en un seul Dieu » ?", b: "Nicée et Constantinople", f: ["Paris et Lyon", "Jérusalem et Bethléem", "Le concile Vatican II seul"], e: "En 325 et en 381." },
      { q: "En combien d'articles partage-t-on traditionnellement le Symbole des Apôtres ?", b: "Douze", f: ["Trois", "Sept", "Quarante"], e: "Comme les douze apôtres." },
      { q: "Selon l'Église, la foi est…", b: "un don de Dieu et une réponse libre de l'homme", f: ["une obligation sans liberté", "le contraire de l'intelligence", "une simple habitude familiale"], e: "Dieu offre la foi ; chacun y répond librement." },
      { q: "Dans quel ordre le Credo est-il organisé ?", b: "Le Père, le Fils, l'Esprit Saint", f: ["Les saints, Marie, puis Dieu", "Dans l'ordre alphabétique", "Les sacrements, puis la Bible"], e: "Il suit l'ordre de la Trinité." }
    ] },
  { cle: "profession-2", titre: "Dieu le Père, créateur du ciel et de la terre", resume: "Un seul Dieu, Père tout-puissant, qui crée par amour", temps: "ordinaire",
    corps: `
  <p>« Je crois en Dieu, le Père tout-puissant, Créateur du ciel et de la terre. » C'est le premier article du Credo.</p>
  <h3>Un seul Dieu</h3>
  <p>Avec le peuple d'Israël, les chrétiens croient qu'il n'y a <b>qu'un seul Dieu</b>. La prière juive le dit : « Écoute, Israël : le Seigneur notre Dieu est l'Unique. » (Dt 6, 4)</p>
  <h3>Père</h3>
  <p>Dieu est <b>Père</b> parce qu'il est à l'origine de tout et qu'il prend soin de ses enfants avec tendresse. Il est surtout, de toute éternité, le Père de son Fils unique, Jésus. Par le baptême, nous devenons ses fils et ses filles.</p>
  <h3>Tout-puissant</h3>
  <p>La toute-puissance de Dieu n'est pas celle d'un tyran : c'est la puissance de l'<b>amour</b>, qui peut tout créer, tout sauver et tout pardonner.</p>
  <h3>Créateur</h3>
  <p>Dieu a créé <b>tout ce qui existe</b>, « l'univers visible et invisible », à partir de rien. Il ne l'a pas fait par besoin, mais par amour, pour partager sa bonté. Il continue de maintenir le monde dans l'existence et de le conduire : c'est la <b>Providence</b>.</p>
  <p>Parmi les créatures invisibles, il y a les <b>anges</b>, serviteurs et messagers de Dieu.</p>
  <p>L'être humain, homme et femme, a une place unique : il est créé à l'<b>image de Dieu</b>, capable de le connaître et de l'aimer. Il a reçu la mission de prendre soin de la Création.</p>
  <div class="astuce"><b>À retenir</b>Je crois en un seul Dieu, Père tout-puissant, qui a créé par amour tout ce qui existe, le visible et l'invisible. L'être humain est créé à son image.</div>`,
    quiz: [
      { q: "Combien de dieux les chrétiens reconnaissent-ils ?", b: "Un seul Dieu", f: ["Trois dieux", "Douze dieux", "Autant que de peuples"], e: "Comme Israël : « le Seigneur notre Dieu est l'Unique »." },
      { q: "À partir de quoi Dieu a-t-il créé le monde ?", b: "À partir de rien", f: ["À partir d'un autre monde qu'il avait acheté", "À partir d'une pierre magique", "Il ne l'a pas créé"], e: "Tout ce qui existe vient de lui." },
      { q: "Pourquoi Dieu a-t-il créé le monde ?", b: "Par amour, pour partager sa bonté", f: ["Parce qu'il avait besoin d'aide", "Pour s'occuper", "Par obligation"], e: "Dieu n'a besoin de rien ; il crée pour donner." },
      { q: "Comment appelle-t-on le soin que Dieu prend du monde qu'il a créé ?", b: "La Providence", f: ["La prédiction", "Le hasard", "La destinée des astres"], e: "Dieu conduit sa Création avec sagesse et amour." },
      { q: "La toute-puissance de Dieu est d'abord…", b: "la puissance de l'amour", f: ["la force d'un tyran", "le pouvoir de faire peur", "la richesse"], e: "Il peut tout créer, tout sauver, tout pardonner." }
    ] },
  { cle: "profession-3", titre: "Jésus, vrai Dieu et vrai homme", resume: "Le Fils de Dieu s'est fait homme : c'est l'Incarnation", temps: "noel",
    corps: `
  <p>« Et en Jésus Christ, son Fils unique, notre Seigneur, qui a été conçu du Saint-Esprit, est né de la Vierge Marie. »</p>
  <h3>Les noms de Jésus</h3>
  <ul>
    <li><b>Jésus</b> veut dire en hébreu « Dieu sauve ».</li>
    <li><b>Christ</b> vient du grec et veut dire « celui qui a reçu l'onction », comme le mot hébreu <b>Messie</b>. Jésus est le Messie attendu par Israël.</li>
    <li><b>Seigneur</b> : un titre que la Bible donne à Dieu. Dire « Jésus est Seigneur », c'est reconnaître qu'il est Dieu.</li>
  </ul>
  <h3>L'Incarnation</h3>
  <p>À Noël, nous fêtons l'<b>Incarnation</b> : le Fils de Dieu, sans cesser d'être Dieu, s'est fait homme. « Le Verbe s'est fait chair, il a habité parmi nous. » (Jn 1, 14)</p>
  <p>Jésus a été conçu par l'action de l'Esprit Saint, dans le sein de la Vierge Marie, sans père humain. Joseph a été son père adoptif sur la terre.</p>
  <h3>Vrai Dieu et vrai homme</h3>
  <p>Jésus est <b>une seule personne</b>, le Fils de Dieu, avec <b>deux natures</b> : divine et humaine. Il n'est pas un peu Dieu et un peu homme : il est <b>pleinement Dieu</b> et <b>pleinement homme</b>.</p>
  <p>Comme homme, il a eu faim, il a été fatigué, il a pleuré son ami Lazare, il a appris un métier. Comme Dieu, il pardonne les péchés, il commande aux éléments, il ressuscite.</p>
  <p>C'est l'enseignement des grands conciles, comme celui de Chalcédoine, en 451.</p>
  <div class="astuce"><b>À retenir</b>Jésus veut dire « Dieu sauve » ; Christ veut dire « Messie ». Le Fils de Dieu s'est fait homme : c'est l'Incarnation. Jésus est vrai Dieu et vrai homme.</div>`,
    quiz: [
      { q: "Que veut dire le nom « Jésus » ?", b: "Dieu sauve", f: ["Fils du charpentier", "Roi des Juifs", "Lumière du matin"], e: "C'est le sens du nom hébreu." },
      { q: "Le mot « Christ » a le même sens que…", b: "Messie", f: ["Prophète", "Apôtre", "Évêque"], e: "Tous deux veulent dire « celui qui a reçu l'onction »." },
      { q: "Comment appelle-t-on le mystère du Fils de Dieu qui se fait homme ?", b: "L'Incarnation", f: ["L'Ascension", "L'Assomption", "La Pentecôte"], e: "Nous le fêtons particulièrement à Noël." },
      { q: "Selon la foi de l'Église, Jésus est…", b: "vrai Dieu et vrai homme", f: ["seulement un homme très sage", "un ange déguisé en homme", "à moitié Dieu et à moitié homme"], e: "Une seule personne, deux natures." },
      { q: "Par l'action de qui Jésus a-t-il été conçu dans le sein de Marie ?", b: "Du Saint-Esprit", f: ["De l'ange Gabriel", "De Joseph", "De Jean-Baptiste"], e: "« Conçu du Saint-Esprit, né de la Vierge Marie »." }
    ] },
  { cle: "profession-4", titre: "Mort et ressuscité pour nous", resume: "La Passion, la croix, la résurrection et l'Ascension", temps: "paques",
    corps: `
  <p>« Il a souffert sous Ponce Pilate, a été crucifié, est mort et a été enseveli, est descendu aux enfers ; le troisième jour est ressuscité des morts, est monté aux cieux, est assis à la droite de Dieu le Père tout-puissant. »</p>
  <h3>Sous Ponce Pilate</h3>
  <p>Le nom du gouverneur romain de Judée rappelle que la mort de Jésus est un <b>fait historique</b>, vers l'an 30. L'Église enseigne que la responsabilité de la mort de Jésus ne peut pas être reportée sur un peuple : ce sont nos péchés à tous que Jésus a portés.</p>
  <h3>Pourquoi la croix ?</h3>
  <p>Jésus a donné sa vie <b>librement</b>, par amour : « Il n'y a pas de plus grand amour que de donner sa vie pour ceux qu'on aime. » (Jn 15, 13). Par sa mort, il nous réconcilie avec Dieu : c'est la <b>Rédemption</b>.</p>
  <h3>Descendu aux enfers</h3>
  <p>Cela ne veut pas dire l'enfer des damnés : « les enfers », c'est le séjour des morts. Jésus y est allé pour ouvrir les portes du ciel aux justes qui l'avaient précédé, comme Adam, Abraham ou David.</p>
  <h3>Le troisième jour</h3>
  <p>La <b>résurrection</b> n'est pas le retour à la vie d'avant, comme pour Lazare : Jésus entre avec son corps dans une vie nouvelle, qui ne meurt plus. Ses disciples l'ont vu, ont mangé avec lui, et ont donné leur vie pour en témoigner. « Si le Christ n'est pas ressuscité, notre foi est sans valeur », dit saint Paul (1 Co 15, 17).</p>
  <h3>L'Ascension</h3>
  <p>Quarante jours après Pâques, Jésus est entré dans la gloire de son Père : c'est l'<b>Ascension</b>. Il ne nous quitte pas : il nous précède.</p>
  <div class="astuce"><b>À retenir</b>Jésus est mort sur la croix par amour pour nous sauver ; c'est la Rédemption. Le troisième jour, il est ressuscité. Quarante jours après, c'est l'Ascension.</div>`,
    quiz: [
      { q: "Pourquoi le Credo nomme-t-il Ponce Pilate ?", b: "Pour rappeler que la mort de Jésus est un fait historique", f: ["Parce que Pilate était un apôtre", "Parce qu'il a écrit un évangile", "Parce qu'il est un saint"], e: "Pilate était le gouverneur romain de Judée." },
      { q: "Dans le Credo, « les enfers » désignent…", b: "le séjour des morts", f: ["l'enfer des damnés", "le centre de la Terre", "un lieu de vacances"], e: "Jésus y va pour libérer les justes qui l'attendaient." },
      { q: "Comment appelle-t-on la libération du péché que Jésus nous obtient par sa croix ?", b: "La Rédemption", f: ["La Création", "L'Épiphanie", "L'Annonciation"], e: "Jésus nous réconcilie avec Dieu." },
      { q: "En quoi la résurrection de Jésus est-elle différente du retour à la vie de Lazare ?", b: "Jésus entre dans une vie nouvelle qui ne meurt plus", f: ["Il n'y a aucune différence", "Lazare n'est jamais mort", "Jésus est revenu exactement à sa vie d'avant"], e: "Lazare mourra plus tard ; le Christ ressuscité ne meurt plus." },
      { q: "Combien de jours après Pâques fête-t-on l'Ascension ?", b: "Quarante jours", f: ["Trois jours", "Cinquante jours", "Cent jours"], e: "En France, c'est toujours un jeudi, et un jour férié." }
    ] },
  { cle: "profession-5", titre: "Il reviendra : la vie éternelle", resume: "Le retour du Christ, la résurrection de la chair, le ciel", temps: "avent",
    corps: `
  <p>« D'où il viendra juger les vivants et les morts. […] Je crois à la résurrection de la chair, à la vie éternelle. »</p>
  <h3>L'Avent, temps de l'attente</h3>
  <p>L'Avent prépare à fêter la première venue de Jésus, à Bethléem. Mais il nous rappelle aussi que le Christ <b>reviendra dans la gloire</b>, à la fin des temps. Personne ne connaît ni le jour ni l'heure (Mt 24, 36) : il ne s'agit pas d'avoir peur, mais de <b>veiller</b>, c'est-à-dire de vivre dès maintenant dans l'amour.</p>
  <h3>Le jugement</h3>
  <p>Notre juge, c'est Jésus, qui a donné sa vie pour nous. Il nous jugera sur l'<b>amour</b> : « Chaque fois que vous l'avez fait à l'un de ces plus petits de mes frères, c'est à moi que vous l'avez fait. » (Mt 25, 40)</p>
  <h3>La résurrection de la chair</h3>
  <p>À la mort, l'âme est séparée du corps. Les chrétiens croient qu'à la fin des temps, Dieu redonnera à chacun un <b>corps</b> ressuscité, transformé, comme celui de Jésus ressuscité. Nous ne sommes pas faits pour disparaître.</p>
  <h3>La vie éternelle</h3>
  <ul>
    <li><b>Le ciel</b>, c'est être pour toujours avec Dieu, dans un bonheur sans fin, avec tous ceux qui l'aiment. « Ce que l'œil n'a pas vu… Dieu l'a préparé pour ceux qui l'aiment. » (1 Co 2, 9)</li>
    <li><b>Le purgatoire</b> est une purification, après la mort, pour ceux qui meurent dans l'amitié de Dieu mais doivent encore être purifiés avant d'entrer dans la joie du ciel. On peut prier pour eux.</li>
    <li><b>L'enfer</b> est l'état de celui qui refuserait librement et définitivement l'amour de Dieu. Dieu ne veut la perte de personne : il respecte notre liberté.</li>
  </ul>
  <div class="astuce"><b>À retenir</b>Le Christ reviendra dans la gloire. Il nous jugera sur l'amour. Nous croyons à la résurrection de la chair et à la vie éternelle avec Dieu.</div>`,
    quiz: [
      { q: "Selon Jésus, qui connaît le jour et l'heure de son retour ?", b: "Personne, sauf le Père", f: ["Les astrologues", "Tous ceux qui lisent les journaux", "Les apôtres seulement"], e: "C'est pourquoi on nous demande de veiller (Mt 24, 36)." },
      { q: "D'après Mt 25, sur quoi serons-nous jugés ?", b: "Sur l'amour, surtout envers les plus petits", f: ["Sur nos notes à l'école", "Sur notre richesse", "Sur le nombre de nos amis"], e: "« C'est à moi que vous l'avez fait »." },
      { q: "Que veut dire « résurrection de la chair » ?", b: "Dieu redonnera à chacun un corps ressuscité à la fin des temps", f: ["On revient sur terre dans un animal", "Le corps ne compte pas du tout", "On ne meurt jamais"], e: "Comme Jésus ressuscité, avec un corps transformé." },
      { q: "Qu'est-ce que le purgatoire ?", b: "Une purification après la mort avant d'entrer au ciel", f: ["Un lieu de vacances", "Une autre vie sur terre", "Un autre nom de l'enfer éternel"], e: "On peut prier pour les défunts qui y sont purifiés." },
      { q: "Que veut dire « veiller », pendant l'Avent ?", b: "Vivre dès maintenant dans l'amour en attendant le Christ", f: ["Ne jamais dormir", "Avoir peur de la fin du monde", "Surveiller ses voisins"], e: "Veiller, c'est être prêt à accueillir le Seigneur." }
    ] },
  { cle: "profession-6", titre: "Je crois en l'Esprit Saint", resume: "La troisième personne de la Trinité, qui donne la vie", temps: "pentecote",
    corps: `
  <p>« Je crois en l'Esprit Saint, qui est Seigneur et qui donne la vie ; il procède du Père et du Fils ; avec le Père et le Fils, il reçoit même adoration et même gloire. » (Credo de Nicée-Constantinople)</p>
  <h3>Qui est l'Esprit Saint ?</h3>
  <p>L'Esprit Saint est <b>Dieu</b>, la troisième personne de la Trinité. Il n'est pas une simple force ou une énergie : c'est quelqu'un, qui aime, qui console, qui guide.</p>
  <h3>Son action dans la Bible</h3>
  <ul>
    <li>À la Création, l'Esprit de Dieu planait sur les eaux (Gn 1, 2).</li>
    <li>Il a parlé par les <b>prophètes</b>.</li>
    <li>Marie a conçu Jésus par l'Esprit Saint.</li>
    <li>Au baptême de Jésus, il descend sur lui comme une <b>colombe</b>.</li>
    <li>À la <b>Pentecôte</b>, il descend sur les apôtres en langues de <b>feu</b>.</li>
  </ul>
  <h3>Ses noms et ses symboles</h3>
  <p>Jésus l'appelle le <b>Paraclet</b>, c'est-à-dire « le Défenseur, le Consolateur » (Jn 14, 16). Ses symboles : le vent, le souffle, le feu, l'eau, l'huile, la colombe.</p>
  <h3>Aujourd'hui</h3>
  <p>L'Esprit Saint fait vivre l'Église. Il nous est donné au baptême et à la confirmation. Il nous aide à prier, à comprendre la Parole de Dieu, à aimer et à témoigner. Ses dons et ses fruits seront étudiés à l'étape de la confirmation.</p>
  <div class="astuce"><b>À retenir</b>L'Esprit Saint est Dieu, la troisième personne de la Trinité. Il est le Défenseur promis par Jésus. Ses symboles sont le vent, le feu, l'eau, l'huile et la colombe.</div>`,
    quiz: [
      { q: "Qui est l'Esprit Saint ?", b: "Dieu, la troisième personne de la Trinité", f: ["Un ange très puissant", "Un saint du Moyen Âge", "Une simple énergie sans personne"], e: "Avec le Père et le Fils, il reçoit même adoration." },
      { q: "Sous quelle forme l'Esprit Saint descend-il sur Jésus à son baptême ?", b: "Une colombe", f: ["Un aigle", "Un lion", "Un nuage de grêle"], e: "C'est raconté dans les quatre évangiles." },
      { q: "Que veut dire « Paraclet » ?", b: "Défenseur, Consolateur", f: ["Petit oiseau", "Prophète", "Ancien"], e: "C'est le nom que Jésus donne à l'Esprit (Jn 14, 16)." },
      { q: "Lequel de ces signes n'est PAS un symbole de l'Esprit Saint ?", b: "La pierre", f: ["Le feu", "Le vent", "L'huile"], e: "Le vent, le feu, l'eau, l'huile et la colombe sont ses symboles." },
      { q: "À quels sacrements reçoit-on l'Esprit Saint de façon particulière ?", b: "Au baptême et à la confirmation", f: ["Seulement au mariage", "Jamais, il est réservé aux prêtres", "Seulement à l'onction des malades"], e: "La confirmation achève la grâce du baptême." }
    ] },
  { cle: "profession-7", titre: "La Trinité : un seul Dieu en trois personnes", resume: "Le Père, le Fils et le Saint-Esprit", temps: "ordinaire",
    corps: `
  <p>Le mystère central de la foi chrétienne est la <b>Sainte Trinité</b> : il y a <b>un seul Dieu</b>, en <b>trois personnes</b> : le Père, le Fils et le Saint-Esprit.</p>
  <h3>Pas trois dieux</h3>
  <p>Les trois personnes ne sont pas trois dieux, ni trois parties de Dieu. Chacune est pleinement Dieu. Elles sont distinctes, mais <b>unies</b> dans un seul et même amour.</p>
  <h3>Comment le savons-nous ?</h3>
  <p>Personne n'aurait pu l'inventer : c'est <b>Jésus</b> qui nous l'a révélé. Il parle de son Père, il promet l'Esprit, et il envoie ses apôtres baptiser « au nom du Père, et du Fils, et du Saint-Esprit » (Mt 28, 19). Au baptême de Jésus, les trois sont présents : la voix du Père, le Fils dans l'eau, l'Esprit comme une colombe.</p>
  <h3>Dieu est amour</h3>
  <p>Saint Jean écrit : « Dieu est amour. » (1 Jn 4, 8). La Trinité nous dit que Dieu n'est pas solitaire : il est en lui-même un échange d'amour éternel. Et il nous invite à entrer dans cet amour.</p>
  <h3>Des images imparfaites</h3>
  <p>Saint Patrick, en Irlande, montrait un trèfle : trois feuilles, une seule plante. Ce n'est qu'une image : le mystère de Dieu reste plus grand que tout ce que nous pouvons comprendre. Un mystère, ce n'est pas quelque chose d'absurde, mais une vérité si grande qu'on n'a jamais fini de la découvrir.</p>
  <p>On fête la Sainte Trinité le dimanche après la Pentecôte. Chaque signe de croix et chaque « Gloire au Père » est une prière à la Trinité.</p>
  <div class="astuce"><b>À retenir</b>Un seul Dieu en trois personnes : le Père, le Fils et le Saint-Esprit. C'est Jésus qui nous l'a révélé. Dieu est amour.</div>`,
    quiz: [
      { q: "Qu'est-ce que la Sainte Trinité ?", b: "Un seul Dieu en trois personnes", f: ["Trois dieux différents", "Trois apôtres", "Trois sacrements"], e: "Le Père, le Fils et le Saint-Esprit." },
      { q: "Qui nous a révélé le mystère de la Trinité ?", b: "Jésus", f: ["Moïse", "Les philosophes grecs", "Personne, on l'a deviné"], e: "Il nous a parlé du Père et de l'Esprit." },
      { q: "Quel saint utilisait l'image du trèfle pour parler de la Trinité ?", b: "Saint Patrick", f: ["Saint Martin", "Saint Nicolas", "Saint François d'Assise"], e: "C'était en Irlande ; ce n'est qu'une image." },
      { q: "Quel jour fête-t-on la Sainte Trinité ?", b: "Le dimanche après la Pentecôte", f: ["Le jour de Noël", "Le Mercredi des Cendres", "Le 15 août"], e: "Après avoir fêté l'envoi de l'Esprit Saint." },
      { q: "Selon saint Jean, Dieu est…", b: "amour", f: ["lointain et indifférent", "solitaire", "une force aveugle"], e: "« Dieu est amour » (1 Jn 4, 8)." }
    ] },
  { cle: "profession-8", titre: "L'Église une, sainte, catholique et apostolique", resume: "Les quatre marques de l'Église", temps: "ordinaire",
    corps: `
  <p>« Je crois en l'Église, une, sainte, catholique et apostolique. » (Credo de Nicée-Constantinople)</p>
  <p>Le mot « Église » vient du grec <i>ekklèsia</i> : <b>l'assemblée</b> de ceux que Dieu appelle. Saint Paul la compare à un <b>corps</b> dont le Christ est la tête et dont nous sommes les membres (1 Co 12). Elle est aussi le peuple de Dieu.</p>
  <h3>Les quatre marques</h3>
  <ul>
    <li><b>Une</b> : un seul Seigneur, une seule foi, un seul baptême. L'Église rassemble des peuples et des cultures très différents. Elle souffre des divisions entre chrétiens et prie pour leur unité (c'est l'<b>œcuménisme</b>).</li>
    <li><b>Sainte</b> : non parce que ses membres seraient parfaits, mais parce que le Christ, qui est saint, l'aime et la sanctifie. Elle est faite de pécheurs appelés à la sainteté.</li>
    <li><b>Catholique</b> : ce mot veut dire « <b>universelle</b> ». Elle est envoyée à tous les peuples, dans le monde entier.</li>
    <li><b>Apostolique</b> : elle est bâtie sur les <b>apôtres</b> et garde leur enseignement. Les <b>évêques</b> sont leurs successeurs, et le <b>pape</b>, évêque de Rome, est le successeur de Pierre.</li>
  </ul>
  <h3>Qui fait l'Église ?</h3>
  <p>Tous les baptisés. Certains reçoivent un service particulier : les évêques, les prêtres et les diacres ; d'autres se consacrent à Dieu (religieux et religieuses) ; la plupart sont des <b>laïcs</b>, qui vivent leur foi en famille, au travail, dans la société. Tous sont appelés à la sainteté.</p>
  <div class="astuce"><b>À retenir</b>L'Église est une, sainte, catholique (universelle) et apostolique. Elle est le Corps du Christ et le peuple de Dieu. Le pape est le successeur de Pierre.</div>`,
    quiz: [
      { q: "Que veut dire le mot « catholique » ?", b: "Universel", f: ["Ancien", "Romain", "Parfait"], e: "L'Église est envoyée à tous les peuples." },
      { q: "Pourquoi dit-on que l'Église est « apostolique » ?", b: "Elle est bâtie sur les apôtres et garde leur enseignement", f: ["Parce qu'elle n'a que douze membres", "Parce qu'elle a été fondée au Moyen Âge", "Parce qu'elle est dirigée par des rois"], e: "Les évêques sont les successeurs des apôtres." },
      { q: "De qui le pape est-il le successeur ?", b: "De saint Pierre", f: ["De Moïse", "De l'empereur romain", "De saint Jean-Baptiste"], e: "Il est l'évêque de Rome." },
      { q: "À quoi saint Paul compare-t-il l'Église ?", b: "À un corps dont le Christ est la tête", f: ["À une forteresse sans porte", "À une entreprise", "À un club fermé"], e: "Nous en sommes les membres (1 Co 12)." },
      { q: "Comment appelle-t-on la recherche de l'unité entre tous les chrétiens ?", b: "L'œcuménisme", f: ["L'économie", "L'astronomie", "L'apostasie"], e: "L'Église prie pour l'unité des chrétiens." }
    ] },
  { cle: "profession-9", titre: "La communion des saints", resume: "La grande famille des chrétiens, sur la terre et au ciel", temps: "toussaint",
    corps: `
  <p>« Je crois à la communion des saints. » (Symbole des Apôtres)</p>
  <h3>Une seule famille</h3>
  <p>La <b>communion des saints</b>, c'est l'union de tous ceux qui appartiennent au Christ : ceux qui vivent encore sur la terre, ceux qui sont morts et se purifient, et ceux qui sont déjà dans la gloire du ciel. La mort ne brise pas les liens de l'amour.</p>
  <ul>
    <li>Sur la terre, nous prions les uns pour les autres et nous partageons les biens spirituels : la foi, les sacrements, la prière, la charité.</li>
    <li>Nous prions pour les <b>défunts</b>, et nous faisons célébrer des messes pour eux.</li>
    <li>Les <b>saints du ciel</b> prient pour nous ; ils intercèdent auprès de Dieu.</li>
  </ul>
  <h3>Deux jours qui vont ensemble</h3>
  <p>Le <b>1er novembre</b>, à la <b>Toussaint</b>, nous fêtons tous les saints, connus et inconnus : une foule immense que nul ne peut dénombrer (Ap 7, 9). Le <b>2 novembre</b>, nous prions pour tous les fidèles défunts. On fleurit les tombes, signe d'espérance.</p>
  <h3>Des saints de toutes sortes</h3>
  <p>Il y a des saints de tous âges et de tous les pays : des martyrs comme saint Étienne, des savants, des rois comme saint Louis, des mamans, des enfants comme saint Dominique Savio ou les petits voyants de Fatima, François et Jacinthe Marto. Chacun montre une manière différente de suivre le Christ.</p>
  <div class="astuce"><b>À retenir</b>La communion des saints unit les chrétiens de la terre, les défunts qui se purifient et les saints du ciel. Le 1er novembre, on fête tous les saints ; le 2 novembre, on prie pour les défunts.</div>`,
    quiz: [
      { q: "Qu'est-ce que la communion des saints ?", b: "L'union de tous ceux qui appartiennent au Christ, sur terre et au ciel", f: ["Une fête réservée aux prêtres", "La communion le jour de la Toussaint seulement", "Un club de saints célèbres"], e: "La mort ne brise pas les liens de l'amour." },
      { q: "Que fait-on le 2 novembre ?", b: "On prie pour tous les fidèles défunts", f: ["On fête Noël", "On fête la Pentecôte", "On commence le Carême"], e: "C'est le lendemain de la Toussaint." },
      { q: "Que font les saints du ciel pour nous ?", b: "Ils prient pour nous", f: ["Ils nous surveillent pour nous punir", "Ils ne s'occupent plus de la terre", "Ils nous remplacent"], e: "Ils intercèdent auprès de Dieu." },
      { q: "Qui est saint Étienne ?", b: "Le premier martyr chrétien", f: ["Le premier pape", "Le roi de France", "Un des rois mages"], e: "Il est mort lapidé en pardonnant (Ac 7)." },
      { q: "Le jour de la Toussaint, on fête…", b: "tous les saints, connus et inconnus", f: ["seulement les saints qui ont un calendrier", "les défunts de l'année", "uniquement la Vierge Marie"], e: "« Une foule immense » (Ap 7, 9)." }
    ] },
  { cle: "profession-10", titre: "Les sept sacrements", resume: "Des signes par lesquels le Christ nous donne sa vie", temps: "careme",
    corps: `
  <p>Un <b>sacrement</b> est un <b>signe visible</b>, institué par le Christ et confié à l'Église, qui donne réellement la <b>grâce</b> de Dieu, c'est-à-dire sa vie et son amour. Il y en a <b>sept</b>.</p>
  <h3>Les sacrements de l'initiation chrétienne</h3>
  <ul>
    <li><b>Le baptême</b> : il fait de nous des enfants de Dieu et des membres de l'Église, et efface tout péché. Signe : l'eau.</li>
    <li><b>La confirmation</b> : elle achève la grâce du baptême par le don de l'Esprit Saint. Signe : l'onction du saint chrême.</li>
    <li><b>L'Eucharistie</b> : le Christ se donne en nourriture. Signe : le pain et le vin.</li>
  </ul>
  <h3>Les sacrements de guérison</h3>
  <ul>
    <li><b>La réconciliation</b> (pénitence, confession) : le pardon des péchés.</li>
    <li><b>L'onction des malades</b> : le réconfort et la force de Dieu pour ceux qui sont gravement malades ou très âgés. Signe : l'huile des malades.</li>
  </ul>
  <h3>Les sacrements au service de la communion</h3>
  <ul>
    <li><b>L'ordre</b> : un homme est ordonné diacre, prêtre ou évêque pour servir le peuple de Dieu.</li>
    <li><b>Le mariage</b> : un homme et une femme s'unissent devant Dieu pour toujours, dans la fidélité, ouverts au don de la vie.</li>
  </ul>
  <p>Le baptême, la confirmation et l'ordre ne se reçoivent <b>qu'une seule fois</b> : ils marquent pour toujours.</p>
  <h3>Le Carême et les sacrements</h3>
  <p>Pendant le Carême, des adultes, les <b>catéchumènes</b>, se préparent à recevoir le baptême, la confirmation et l'Eucharistie pendant la veillée pascale. Toute l'Église les accompagne.</p>
  <div class="astuce"><b>À retenir</b>Il y a sept sacrements : baptême, confirmation, Eucharistie (initiation) ; réconciliation, onction des malades (guérison) ; ordre et mariage (service de la communion).</div>`,
    quiz: [
      { q: "Combien y a-t-il de sacrements ?", b: "Sept", f: ["Trois", "Dix", "Douze"], e: "Ils accompagnent toutes les étapes de la vie." },
      { q: "Lesquels sont les sacrements de l'initiation chrétienne ?", b: "Baptême, confirmation, Eucharistie", f: ["Mariage, ordre, onction des malades", "Réconciliation et mariage", "Baptême, mariage, ordre"], e: "Ils font entrer pleinement dans la vie chrétienne." },
      { q: "Lequel de ces sacrements ne peut se recevoir qu'une seule fois ?", b: "Le baptême", f: ["L'Eucharistie", "La réconciliation", "L'onction des malades"], e: "Comme la confirmation et l'ordre, il marque pour toujours." },
      { q: "À qui s'adresse l'onction des malades ?", b: "Aux personnes gravement malades ou très âgées", f: ["Seulement aux bébés", "Aux sportifs avant un match", "Uniquement aux prêtres"], e: "C'est un sacrement de guérison et de réconfort." },
      { q: "Quand les catéchumènes adultes reçoivent-ils souvent le baptême ?", b: "Pendant la veillée pascale", f: ["Le 1er janvier", "Le jour de la Toussaint", "Le Mercredi des Cendres"], e: "Ils s'y préparent pendant le Carême." }
    ] },
  { cle: "profession-11", titre: "Pierre, Paul et les premiers chrétiens", resume: "Les témoins qui ont porté l'Évangile jusqu'à Rome", temps: "paques",
    corps: `
  <h3>Pierre, le rocher</h3>
  <p><b>Simon</b> est pêcheur sur le lac de Galilée quand Jésus l'appelle. Jésus lui donne un nouveau nom : <b>Pierre</b>, et lui dit : « Tu es Pierre, et sur cette pierre je bâtirai mon Église. » (Mt 16, 18)</p>
  <p>Pierre est généreux, mais parfois trop sûr de lui : pendant la Passion, il renie Jésus trois fois. Après la résurrection, Jésus lui demande trois fois : « M'aimes-tu ? » et lui confie ses brebis (Jn 21, 15-17). Le pardon fait de lui le chef des apôtres. Il meurt martyr à <b>Rome</b>.</p>
  <h3>Paul, l'apôtre des nations</h3>
  <p><b>Saul</b>, né à Tarse, persécute les chrétiens. Sur le chemin de Damas, une grande lumière le fait tomber, et il entend Jésus lui dire : « Saul, pourquoi me persécutes-tu ? » (Ac 9, 4). Il devient chrétien et prend le nom de <b>Paul</b>.</p>
  <p>Il fait de grands voyages autour de la Méditerranée pour annoncer Jésus aux non-juifs. Ses <b>lettres</b> (aux Romains, aux Corinthiens…) font partie du Nouveau Testament. Il meurt lui aussi martyr à Rome. On fête Pierre et Paul ensemble le <b>29 juin</b>.</p>
  <h3>Les premiers chrétiens</h3>
  <p>Le livre des <b>Actes des Apôtres</b>, écrit par saint Luc, raconte leur vie. Ils étaient fidèles à l'enseignement des apôtres, à la vie fraternelle, à la fraction du pain et aux prières (Ac 2, 42). Ils partageaient leurs biens.</p>
  <p>C'est à <b>Antioche</b> que, pour la première fois, les disciples reçoivent le nom de « <b>chrétiens</b> » (Ac 11, 26). Pendant près de trois siècles, ils sont souvent persécutés ; beaucoup sont martyrs. En 313, l'empereur Constantin accorde la liberté de culte.</p>
  <p>Pendant le temps pascal, on lit les Actes des Apôtres à la messe.</p>
  <div class="astuce"><b>À retenir</b>Pierre, le rocher, est le chef des apôtres ; Paul, converti sur le chemin de Damas, est l'apôtre des nations. Les Actes des Apôtres racontent la vie des premiers chrétiens.</div>`,
    quiz: [
      { q: "Quel était le métier de Simon-Pierre avant de suivre Jésus ?", b: "Pêcheur", f: ["Collecteur d'impôts", "Soldat romain", "Berger"], e: "Il pêchait sur le lac de Galilée." },
      { q: "Combien de fois Jésus ressuscité demande-t-il à Pierre : « M'aimes-tu ? »", b: "Trois fois", f: ["Une fois", "Sept fois", "Douze fois"], e: "Comme les trois reniements, effacés par l'amour (Jn 21)." },
      { q: "Où Paul s'est-il converti ?", b: "Sur le chemin de Damas", f: ["Au bord du Jourdain", "À Bethléem", "Sur le mont Sinaï"], e: "Il entend Jésus lui parler (Ac 9)." },
      { q: "Quel livre de la Bible raconte la vie des premiers chrétiens ?", b: "Les Actes des Apôtres", f: ["La Genèse", "Le livre de l'Exode", "Les Psaumes"], e: "Il a été écrit par saint Luc." },
      { q: "Dans quelle ville les disciples ont-ils été appelés « chrétiens » pour la première fois ?", b: "Antioche", f: ["Paris", "Nazareth", "Babylone"], e: "C'est raconté en Ac 11, 26." }
    ] },
  { cle: "profession-12", titre: "L'Église dans le monde aujourd'hui", resume: "Une famille présente sur tous les continents, au service de tous", temps: "ordinaire",
    corps: `
  <p>Aujourd'hui, plus d'un milliard de catholiques vivent sur <b>tous les continents</b>. Partout, la même foi est célébrée dans des langues, des chants et des cultures très différents.</p>
  <h3>Comment l'Église est organisée</h3>
  <ul>
    <li>Le <b>pape</b>, évêque de Rome, veille sur l'unité de toute l'Église.</li>
    <li>Chaque <b>diocèse</b> a à sa tête un <b>évêque</b>, successeur des apôtres. Sa cathédrale est l'église où se trouve son siège.</li>
    <li>Le diocèse est formé de <b>paroisses</b>, confiées à des prêtres, aidés par des diacres et de nombreux laïcs.</li>
  </ul>
  <h3>Ce que fait l'Église</h3>
  <ul>
    <li><b>Annoncer</b> l'Évangile : catéchisme, aumôneries, missions.</li>
    <li><b>Célébrer</b> : la messe, les sacrements, la prière.</li>
    <li><b>Servir</b> : soigner les malades, accueillir les migrants, aider les pauvres, éduquer. En France, par exemple, le Secours catholique ou les Conférences Saint-Vincent-de-Paul viennent en aide à ceux qui sont dans le besoin.</li>
  </ul>
  <h3>Les grands rassemblements</h3>
  <p>Les <b>Journées mondiales de la jeunesse</b> (JMJ), lancées par saint Jean-Paul II, réunissent des jeunes du monde entier autour du pape. Les pèlerinages (Lourdes, Lisieux, Rome…) rassemblent aussi des foules.</p>
  <h3>Le dialogue</h3>
  <p>L'Église cherche l'unité avec les autres chrétiens (orthodoxes, protestants) et dialogue avec les croyants d'autres religions, dans le respect de chacun.</p>
  <div class="astuce"><b>À retenir</b>L'Église est présente sur tous les continents. Elle annonce l'Évangile, célèbre les sacrements et sert les plus pauvres. Chaque diocèse est confié à un évêque, en communion avec le pape.</div>`,
    quiz: [
      { q: "Qui est à la tête d'un diocèse ?", b: "Un évêque", f: ["Un maire", "Un diacre", "Un enfant de chœur"], e: "Il est successeur des apôtres." },
      { q: "Comment s'appelle l'église où se trouve le siège de l'évêque ?", b: "La cathédrale", f: ["La chapelle du collège", "Le presbytère", "Le baptistère"], e: "Le mot vient de « cathèdre », le siège." },
      { q: "Qui a lancé les Journées mondiales de la jeunesse ?", b: "Saint Jean-Paul II", f: ["Saint Pierre", "Charlemagne", "Saint Louis"], e: "Les JMJ réunissent des jeunes du monde entier." },
      { q: "Lequel de ces services fait partie de la mission de l'Église ?", b: "Aider les pauvres et soigner les malades", f: ["Collecter les impôts de l'État", "Choisir le gouvernement", "Interdire les autres religions"], e: "Annoncer, célébrer et servir." },
      { q: "Combien y a-t-il environ de catholiques dans le monde ?", b: "Plus d'un milliard", f: ["Quelques milliers", "Un million exactement", "Seulement en Europe, quelques millions"], e: "Ils vivent sur tous les continents." }
    ] }
  ] },
/* ---------------------------------------------------------
   5. LA CONFIRMATION (4e-3e)
   --------------------------------------------------------- */
{ code: "confirmation", nom: "La confirmation", pour: "4e-3e (13-15 ans)", classes: ["4e", "3e"],
  intro: `<p>La confirmation achève la grâce du baptême : tu reçois la force de l'Esprit Saint pour vivre en chrétien adulte et en témoin.</p><p>Cette étape parle de l'Esprit Saint, de la vocation, des choix de la conscience, du soin des autres et de la Création, et des grandes questions que chacun se pose.</p>`,
  chapitres: [
  { cle: "confirmation-1", titre: "L'Esprit Saint, promesse de Jésus", resume: "Celui qui donne la force, la mémoire et le courage", temps: "pentecote",
    corps: `
  <p>Avant sa Passion, Jésus a fait une promesse : « Le Défenseur, l'Esprit Saint que le Père enverra en mon nom, lui, vous enseignera tout, et il vous fera souvenir de tout ce que je vous ai dit. » (Jn 14, 26)</p>
  <h3>Ce que l'Esprit fait dans les apôtres</h3>
  <p>Avant la Pentecôte, les apôtres sont enfermés, pleins de peur. Après, ils parlent ouvertement, affrontent les menaces, voyagent jusqu'au bout du monde connu. Ce changement, c'est l'œuvre de l'Esprit Saint : il ne leur enlève pas leur personnalité, il leur donne la <b>force</b> d'être pleinement eux-mêmes au service du Christ.</p>
  <h3>L'Esprit dans l'Ancien Testament</h3>
  <p>Le mot hébreu <i>rouah</i> veut dire à la fois <b>souffle, vent, esprit</b>. Dieu met son souffle dans l'homme pour qu'il vive (Gn 2, 7). Les prophètes annoncent qu'un jour Dieu répandra son Esprit sur tous (Jl 3, 1).</p>
  <h3>L'Esprit en nous</h3>
  <p>Saint Paul écrit que notre corps est le « <b>temple de l'Esprit Saint</b> » (1 Co 6, 19). L'Esprit habite en nous depuis le baptême. Il prie en nous quand nous ne savons pas prier (Rm 8, 26). Il nous fait dire à Dieu : « <b>Abba</b>, Père ! » (Ga 4, 6).</p>
  <h3>Comment le reconnaître ?</h3>
  <p>L'Esprit Saint ne fait pas de bruit. On le reconnaît à ses effets : une paix profonde, une joie qui ne dépend pas des circonstances, le désir de faire le bien, le courage de pardonner, une parole juste au bon moment.</p>
  <div class="astuce"><b>À retenir</b>L'Esprit Saint est le Défenseur promis par Jésus. Il donne la force, rappelle les paroles de Jésus, prie en nous. Notre corps est le temple de l'Esprit Saint.</div>`,
    quiz: [
      { q: "Que veut dire le mot hébreu « rouah » ?", b: "Souffle, vent, esprit", f: ["Feu, lumière, soleil", "Eau, source, rivière", "Pierre, roc, montagne"], e: "Dieu met son souffle dans l'homme pour qu'il vive." },
      { q: "Selon saint Paul, notre corps est…", b: "le temple de l'Esprit Saint", f: ["sans importance pour Dieu", "une prison pour l'âme", "un simple outil"], e: "L'Esprit habite en nous (1 Co 6, 19)." },
      { q: "Quel changement l'Esprit Saint produit-il chez les apôtres à la Pentecôte ?", b: "Ils passent de la peur au courage", f: ["Ils deviennent très riches", "Ils oublient Jésus", "Ils deviennent des anges"], e: "Ils annoncent ouvertement le Christ ressuscité." },
      { q: "Que nous fait dire l'Esprit Saint en nous adressant à Dieu ?", b: "Abba, Père", f: ["Maître sévère", "Juge lointain", "Inconnu"], e: "« Abba » est le mot tendre d'un enfant pour son père (Ga 4, 6)." },
      { q: "Selon Jn 14, 26, que fera l'Esprit Saint pour les disciples ?", b: "Il leur fera souvenir de tout ce que Jésus a dit", f: ["Il remplacera la Bible", "Il les rendra invisibles", "Il leur fera oublier la Passion"], e: "Il enseigne et fait mémoire des paroles du Christ." }
    ] },
  { cle: "confirmation-2", titre: "Les sept dons de l'Esprit Saint", resume: "Sagesse, intelligence, conseil, force, connaissance, piété, crainte de Dieu", temps: "pentecote",
    corps: `
  <p>Le prophète Isaïe annonçait que l'Esprit du Seigneur reposerait sur le Messie, avec ses dons (Is 11, 2). La tradition de l'Église en compte <b>sept</b>. Ils sont donnés à chaque baptisé et sont fortifiés à la confirmation. Ce sont comme des voiles qui permettent au bateau de notre vie de se laisser porter par le vent de l'Esprit.</p>
  <h3>Les sept dons</h3>
  <ul>
    <li><b>La sagesse</b> : goûter les choses de Dieu, voir le monde avec son regard, savoir ce qui compte vraiment.</li>
    <li><b>L'intelligence</b> : comprendre de l'intérieur la Parole de Dieu et les vérités de la foi.</li>
    <li><b>Le conseil</b> : savoir discerner le bon choix, et aider les autres à bien choisir.</li>
    <li><b>La force</b> : le courage de faire le bien et de rester fidèle dans les difficultés.</li>
    <li><b>La science</b> (ou connaissance) : reconnaître Dieu à travers sa Création et voir les choses à leur juste place.</li>
    <li><b>La piété</b> : aimer Dieu comme un Père, avec confiance, et aimer les autres comme des frères.</li>
    <li><b>La crainte de Dieu</b> : non pas la peur, mais l'<b>émerveillement</b> et le respect devant la grandeur de Dieu, et le désir de ne jamais le blesser.</li>
  </ul>
  <h3>Les dons ne sont pas des trophées</h3>
  <p>Ces dons ne sont pas faits pour se mettre en avant. Ils servent à vivre en enfant de Dieu et à construire l'Église. On les demande dans la prière : « Viens, Esprit Saint ! »</p>
  <div class="astuce"><b>À retenir</b>Les sept dons de l'Esprit Saint sont : sagesse, intelligence, conseil, force, science (connaissance), piété et crainte de Dieu. Ils nous rendent dociles à l'Esprit.</div>`,
    quiz: [
      { q: "Combien y a-t-il de dons de l'Esprit Saint ?", b: "Sept", f: ["Trois", "Douze", "Dix"], e: "Comme le dit la tradition, à partir d'Isaïe 11, 2." },
      { q: "Lequel de ces mots n'est PAS un don de l'Esprit Saint ?", b: "La richesse", f: ["La sagesse", "La force", "La piété"], e: "Les dons sont spirituels, pas matériels." },
      { q: "Que signifie le don de « crainte de Dieu » ?", b: "L'émerveillement et le respect devant sa grandeur", f: ["Avoir peur de Dieu comme d'un monstre", "Fuir l'église", "Trembler devant les prêtres"], e: "C'est l'attitude d'un enfant qui ne veut pas blesser son père." },
      { q: "Quel don aide à discerner le bon choix ?", b: "Le conseil", f: ["La piété", "La crainte de Dieu", "La science"], e: "Il éclaire nos décisions et celles des autres." },
      { q: "Quel prophète annonce les dons de l'Esprit qui reposeront sur le Messie ?", b: "Isaïe", f: ["Jonas", "Daniel", "Élie"], e: "Is 11, 2." }
    ] },
  { cle: "confirmation-3", titre: "Les fruits de l'Esprit", resume: "Ce que l'Esprit fait mûrir dans une vie", temps: "ordinaire",
    corps: `
  <p>Un arbre se reconnaît à ses fruits, dit Jésus (Mt 7, 16-20). De même, on reconnaît l'action de l'Esprit Saint dans une vie à ce qu'elle produit.</p>
  <h3>La liste de saint Paul</h3>
  <p>Dans sa lettre aux Galates (Ga 5, 22-23), saint Paul énumère <b>neuf fruits</b> : <b>l'amour, la joie, la paix, la patience, la bonté, la bienveillance, la fidélité, la douceur et la maîtrise de soi</b>.</p>
  <p>La tradition de l'Église, à partir de la traduction latine ancienne de ce passage, en compte <b>douze</b> (Catéchisme de l'Église catholique, n° 1832) ; c'est la même idée, détaillée autrement.</p>
  <h3>Les fruits mûrissent lentement</h3>
  <p>Un fruit ne pousse pas en une nuit. La patience, la douceur ou la maîtrise de soi grandissent avec le temps, par la prière, les sacrements, les efforts et surtout la grâce de Dieu. On ne les « fabrique » pas seul : on laisse l'Esprit les faire grandir.</p>
  <h3>Les œuvres de la chair</h3>
  <p>Paul montre aussi ce qui s'oppose à l'Esprit : les disputes, la jalousie, les colères, les divisions… Il ne s'agit pas de se décourager en voyant ses défauts, mais de les confier à Dieu et de choisir chaque jour le chemin de l'Esprit.</p>
  <h3>Un exercice simple</h3>
  <p>Le soir, on peut se demander : où ai-je vu aujourd'hui un fruit de l'Esprit, en moi ou chez quelqu'un d'autre ? Et en rendre grâce.</p>
  <div class="astuce"><b>À retenir</b>Saint Paul cite neuf fruits de l'Esprit (Ga 5, 22-23) : amour, joie, paix, patience, bonté, bienveillance, fidélité, douceur, maîtrise de soi. La tradition en compte douze.</div>`,
    quiz: [
      { q: "Dans quelle lettre saint Paul énumère-t-il les fruits de l'Esprit ?", b: "La lettre aux Galates", f: ["La lettre aux Hébreux", "Le livre de la Genèse", "L'évangile de Marc"], e: "Ga 5, 22-23." },
      { q: "Combien de fruits de l'Esprit saint Paul cite-t-il dans ce passage ?", b: "Neuf", f: ["Trois", "Quarante", "Cinq"], e: "La tradition de l'Église, elle, en compte douze." },
      { q: "Lequel de ces mots est un fruit de l'Esprit selon saint Paul ?", b: "La maîtrise de soi", f: ["La jalousie", "La colère", "L'orgueil"], e: "Les autres sont au contraire opposés à l'Esprit." },
      { q: "Selon Jésus, à quoi reconnaît-on un arbre ?", b: "À ses fruits", f: ["À la couleur de son écorce", "À son âge", "À son prix"], e: "Mt 7, 16-20." },
      { q: "Comment les fruits de l'Esprit grandissent-ils ?", b: "Peu à peu, par la grâce de Dieu et nos efforts", f: ["En une seule nuit, automatiquement", "Uniquement en lisant des livres", "Ils ne grandissent jamais"], e: "On laisse l'Esprit les faire mûrir." }
    ] },
  { cle: "confirmation-4", titre: "Le sacrement de confirmation", resume: "L'imposition des mains, l'onction du saint chrême, l'évêque", temps: "ordinaire",
    corps: `
  <p>La confirmation est l'un des trois <b>sacrements de l'initiation chrétienne</b>, avec le baptême et l'Eucharistie. Elle <b>achève</b> la grâce du baptême : le confirmé reçoit le don de l'Esprit Saint, est uni plus fortement au Christ et à l'Église, et reçoit la force d'en être le témoin. Elle ne se reçoit qu'une fois.</p>
  <h3>Dans la Bible</h3>
  <p>Dans les Actes des Apôtres, Pierre et Jean imposent les mains aux baptisés de Samarie, et ceux-ci reçoivent l'Esprit Saint (Ac 8, 14-17).</p>
  <h3>Le ministre</h3>
  <p>Le ministre ordinaire de la confirmation est l'<b>évêque</b>, successeur des apôtres. Il peut, pour une raison sérieuse, déléguer un prêtre.</p>
  <h3>Le déroulement</h3>
  <ul>
    <li>La célébration a lieu le plus souvent pendant la messe, après l'Évangile et l'homélie.</li>
    <li>Les confirmands <b>renouvellent les promesses de leur baptême</b> : ils renoncent au mal et disent leur foi.</li>
    <li>L'<b>imposition des mains</b> : l'évêque étend les mains sur eux et prie Dieu de leur envoyer l'Esprit Saint avec ses sept dons.</li>
    <li>L'<b>onction du saint chrême</b> : chacun s'avance avec son parrain ou sa marraine, qui pose la main sur son épaule. L'évêque trace une croix avec le saint chrême sur son front et dit : « Sois marqué de l'Esprit Saint, le don de Dieu. » Le confirmé répond : « Amen. »</li>
    <li>L'évêque lui dit : « La paix soit avec toi. » Il répond : « Et avec ton esprit. »</li>
  </ul>
  <h3>Le saint chrême</h3>
  <p>C'est une huile d'olive parfumée, consacrée par l'évêque pendant la <b>messe chrismale</b>, pendant la Semaine sainte. L'onction rappelle que « Christ » veut dire « celui qui a reçu l'onction » : le confirmé est marqué pour appartenir au Christ et répandre sa « bonne odeur » (2 Co 2, 15).</p>
  <div class="astuce"><b>À retenir</b>La confirmation achève la grâce du baptême. L'évêque impose les mains et fait l'onction du saint chrême sur le front : « Sois marqué de l'Esprit Saint, le don de Dieu. »</div>`,
    quiz: [
      { q: "Qui est le ministre ordinaire de la confirmation ?", b: "L'évêque", f: ["Le parrain", "Le diacre", "Le maire de la commune"], e: "Il peut déléguer un prêtre pour une raison sérieuse." },
      { q: "Quelle huile utilise-t-on pour la confirmation ?", b: "Le saint chrême", f: ["L'huile de friture", "L'huile des malades", "Aucune huile"], e: "Elle est consacrée par l'évêque à la messe chrismale." },
      { q: "Sur quelle partie du corps l'évêque trace-t-il la croix avec le saint chrême ?", b: "Le front", f: ["Les pieds", "Le dos", "Les genoux"], e: "Le front est marqué du signe du Christ." },
      { q: "Que dit l'évêque en faisant l'onction ?", b: "Sois marqué de l'Esprit Saint, le don de Dieu", f: ["Je te baptise au nom du Père", "Ceci est mon corps", "Allez dans la paix du Christ"], e: "Le confirmé répond : « Amen »." },
      { q: "Combien de fois peut-on recevoir la confirmation ?", b: "Une seule fois", f: ["Chaque année", "Chaque dimanche", "Autant de fois qu'on veut"], e: "Comme le baptême, elle marque pour toujours." }
    ] },
  { cle: "confirmation-5", titre: "Être témoin", resume: "Vous serez mes témoins : dire et vivre sa foi", temps: "paques",
    corps: `
  <p>Avant son Ascension, Jésus dit à ses apôtres : « Vous serez mes témoins. » (Ac 1, 8). Les premiers témoins sont ceux qui ont vu le Christ ressuscité : Marie Madeleine, les apôtres, les disciples d'Emmaüs.</p>
  <h3>Qu'est-ce qu'un témoin ?</h3>
  <p>Un témoin dit ce qu'il a vu et vécu. Le mot grec pour « témoin » est <i>martyr</i>. Les martyrs sont ceux qui ont témoigné du Christ jusqu'à donner leur vie, sans violence, en pardonnant.</p>
  <h3>Témoigner par sa vie</h3>
  <p>Le premier témoignage, c'est la manière de vivre : l'honnêteté, la joie, le respect des autres, l'attention aux plus fragiles. Le pape saint Paul VI disait que le monde écoute plus volontiers les témoins que les maîtres (<i>Evangelii nuntiandi</i>, 41).</p>
  <h3>Témoigner par la parole</h3>
  <p>Il faut aussi oser parler de sa foi quand on nous interroge. Saint Pierre conseille : être toujours prêts à rendre compte de l'espérance qui est en nous, mais « avec douceur et respect » (1 P 3, 15-16). Témoigner, ce n'est pas forcer ni se disputer : c'est partager ce qui nous fait vivre.</p>
  <h3>Des témoins proches de nous</h3>
  <ul>
    <li><b>Carlo Acutis</b>, jeune Italien passionné d'informatique, qui a fait connaître les miracles eucharistiques sur internet.</li>
    <li><b>Pier Giorgio Frassati</b>, étudiant sportif et montagnard, qui aidait les pauvres de Turin en secret.</li>
    <li>Les parents, catéchistes, amis qui nous ont transmis la foi.</li>
  </ul>
  <div class="astuce"><b>À retenir</b>Jésus nous envoie être ses témoins. « Martyr » veut dire « témoin ». On témoigne d'abord par sa vie, puis par sa parole, avec douceur et respect.</div>`,
    quiz: [
      { q: "Que veut dire le mot grec « martyr » ?", b: "Témoin", f: ["Soldat", "Prisonnier", "Vainqueur"], e: "Les martyrs ont témoigné du Christ jusqu'à donner leur vie." },
      { q: "Qui sont les premiers témoins de la résurrection ?", b: "Marie Madeleine et les apôtres", f: ["Les soldats romains seulement", "Les rois mages", "Moïse et David"], e: "Ils ont vu le Christ ressuscité." },
      { q: "Selon saint Pierre, comment rendre compte de son espérance ?", b: "Avec douceur et respect", f: ["En criant plus fort que les autres", "En se moquant de ceux qui ne croient pas", "En obligeant les autres"], e: "1 P 3, 15-16." },
      { q: "Quel est le premier témoignage d'un chrétien ?", b: "Sa manière de vivre", f: ["Le nombre de médailles qu'il porte", "Ses vêtements", "Les disputes qu'il gagne"], e: "Le monde écoute d'abord les témoins." },
      { q: "Qui a dit aux apôtres : « Vous serez mes témoins » ?", b: "Jésus, avant son Ascension", f: ["Ponce Pilate", "Le roi Hérode", "Moïse au Sinaï"], e: "Ac 1, 8." }
    ] },
  { cle: "confirmation-6", titre: "La vocation : appelé par son nom", resume: "Dieu appelle chacun à la sainteté, sur un chemin unique", temps: "toussaint",
    corps: `
  <p>Le mot « vocation » vient du latin <i>vocare</i>, « <b>appeler</b> ». Dieu appelle chacun personnellement.</p>
  <h3>Le jeune Samuel (1 S 3)</h3>
  <p>La nuit, dans le sanctuaire, le jeune Samuel entend qu'on l'appelle. Il croit que c'est le prêtre Éli. Trois fois, il court vers lui. Éli comprend que c'est Dieu, et il lui apprend à répondre : « Parle, Seigneur, ton serviteur écoute. » (1 S 3, 9)</p>
  <h3>Un appel pour tous : la sainteté</h3>
  <p>La première vocation de tout baptisé, c'est la <b>sainteté</b> : aimer Dieu et les autres de tout son cœur, là où l'on est (Concile Vatican II, <i>Lumen gentium</i>, ch. 5). La Toussaint nous rappelle que les saints ne sont pas des héros inaccessibles, mais des gens qui ont dit oui.</p>
  <h3>Des chemins différents</h3>
  <ul>
    <li><b>Le mariage</b> : fonder une famille, dans l'amour fidèle.</li>
    <li><b>Le sacerdoce</b> : devenir prêtre pour servir le peuple de Dieu.</li>
    <li><b>La vie consacrée</b> : religieux, religieuses, moines, moniales, qui donnent toute leur vie à Dieu.</li>
    <li>Le célibat vécu dans le don de soi, au service des autres.</li>
  </ul>
  <p>Le métier, les talents, les engagements font aussi partie de cette réponse : chacun a quelque chose d'unique à apporter au monde.</p>
  <h3>Discerner</h3>
  <p>On découvre sa vocation peu à peu : par la prière, en écoutant ses désirs les plus profonds, en regardant ses talents, en demandant conseil à des personnes de confiance. La vraie vocation donne la paix et la joie.</p>
  <div class="astuce"><b>À retenir</b>Vocation veut dire « appel ». Tous les baptisés sont appelés à la sainteté. Dieu appelle chacun sur un chemin unique : mariage, sacerdoce, vie consacrée… « Parle, Seigneur, ton serviteur écoute. »</div>`,
    quiz: [
      { q: "Que veut dire le mot « vocation » ?", b: "Appel", f: ["Vacances", "Voyage", "Victoire"], e: "Du latin vocare, appeler." },
      { q: "Que répond Samuel quand il comprend que Dieu l'appelle ?", b: "Parle, Seigneur, ton serviteur écoute", f: ["Laisse-moi dormir", "Ce n'est pas moi", "Appelle quelqu'un d'autre"], e: "C'est le prêtre Éli qui lui a appris cette réponse (1 S 3)." },
      { q: "Quelle est la première vocation de tout baptisé ?", b: "La sainteté", f: ["Devenir célèbre", "Devenir prêtre obligatoirement", "Être le meilleur en tout"], e: "Aimer Dieu et les autres là où l'on est." },
      { q: "Lequel de ces chemins n'est PAS une vocation dans l'Église ?", b: "Devenir riche à tout prix", f: ["Le mariage", "Le sacerdoce", "La vie consacrée"], e: "Les vocations sont des chemins d'amour et de don de soi." },
      { q: "À quoi reconnaît-on souvent une vraie vocation ?", b: "Elle donne la paix et la joie profondes", f: ["Elle rend triste et inquiet", "Elle est imposée par les autres", "Elle fait gagner beaucoup d'argent"], e: "On la discerne dans la prière et le conseil." }
    ] },
  { cle: "confirmation-7", titre: "La conscience et les choix", resume: "Écouter la voix intérieure, l'éclairer, choisir le bien", temps: "careme",
    corps: `
  <p>Chaque jour, nous faisons des choix : petits ou grands. Pour bien choisir, Dieu nous a donné la <b>conscience</b>.</p>
  <h3>Qu'est-ce que la conscience ?</h3>
  <p>Le concile Vatican II la décrit comme « le centre le plus secret de l'homme, le sanctuaire où il est seul avec Dieu » (<i>Gaudium et spes</i>, 16). C'est la voix intérieure qui nous pousse à faire le bien et à éviter le mal, et qui juge nos actes.</p>
  <h3>Former sa conscience</h3>
  <p>La conscience peut se tromper : par ignorance, par habitude, sous la pression des autres. Il faut donc la <b>former</b>, toute la vie :</p>
  <ul>
    <li>en lisant la Parole de Dieu ;</li>
    <li>en connaissant l'enseignement de l'Église ;</li>
    <li>en priant et en demandant les lumières de l'Esprit Saint ;</li>
    <li>en demandant conseil à des personnes sages ;</li>
    <li>en relisant ses actes (l'examen de conscience).</li>
  </ul>
  <h3>Quelques règles simples</h3>
  <ul>
    <li>Ne jamais faire le mal pour obtenir un bien.</li>
    <li>La règle d'or : « Tout ce que vous voudriez que les autres fassent pour vous, faites-le pour eux. » (Mt 7, 12)</li>
    <li>Respecter la conscience des autres, sans renoncer à dire ce qui est vrai.</li>
  </ul>
  <h3>Liberté et responsabilité</h3>
  <p>La liberté n'est pas de faire n'importe quoi : c'est la capacité de choisir le <b>bien</b>. Plus on choisit le bien, plus on devient libre. Le Carême est un temps favorable pour relire ses choix et se tourner vers Dieu.</p>
  <div class="astuce"><b>À retenir</b>La conscience est le sanctuaire où l'homme est seul avec Dieu. Elle doit être formée toute la vie. On ne fait jamais le mal pour obtenir un bien.</div>`,
    quiz: [
      { q: "Selon le concile Vatican II, la conscience est…", b: "le sanctuaire où l'homme est seul avec Dieu", f: ["une invention de la société", "l'avis de la majorité", "une partie du cerveau qui calcule"], e: "Gaudium et spes, 16." },
      { q: "La conscience peut-elle se tromper ?", b: "Oui, c'est pourquoi il faut la former", f: ["Non, jamais", "Seulement chez les adultes", "Seulement le dimanche"], e: "On la forme par la Parole de Dieu, la prière et le conseil." },
      { q: "Peut-on faire un mal pour obtenir un bien ?", b: "Non, jamais", f: ["Oui, si le bien est grand", "Oui, si personne ne le voit", "Oui, si les autres le font aussi"], e: "La fin ne justifie pas les moyens." },
      { q: "Quelle est la « règle d'or » donnée par Jésus ?", b: "Faire pour les autres ce que l'on voudrait qu'ils fassent pour nous", f: ["Gagner à tout prix", "Ne penser qu'à soi", "Faire comme tout le monde"], e: "Mt 7, 12." },
      { q: "Selon l'Église, être vraiment libre, c'est…", b: "être capable de choisir le bien", f: ["faire n'importe quoi", "n'avoir aucune règle", "obéir à toutes ses envies"], e: "Plus on choisit le bien, plus on devient libre." }
    ] },
  { cle: "confirmation-8", titre: "La dignité de chaque personne", resume: "Dieu s'est fait homme : chaque vie humaine a une valeur infinie", temps: "noel",
    corps: `
  <p>À Noël, le Fils de Dieu s'est fait homme, petit enfant pauvre, né dans une étable. En prenant notre humanité, il montre la grandeur de chaque être humain : « Par son incarnation, le Fils de Dieu s'est en quelque sorte uni lui-même à tout homme. » (<i>Gaudium et spes</i>, 22)</p>
  <h3>Pourquoi chaque personne est digne</h3>
  <p>Chaque personne est créée <b>à l'image de Dieu</b>, voulue et aimée par lui. Sa dignité ne dépend ni de sa richesse, ni de sa santé, ni de son intelligence, ni de son origine, ni de son utilité. Elle ne se gagne pas et ne se perd pas.</p>
  <h3>La doctrine sociale de l'Église</h3>
  <p>À partir de là, l'Église a développé un enseignement sur la vie en société, la <b>doctrine sociale</b>, depuis le pape Léon XIII (encyclique <i>Rerum novarum</i>, 1891). Quelques grands principes :</p>
  <ul>
    <li><b>La dignité de la personne humaine</b>, de sa conception jusqu'à sa mort naturelle.</li>
    <li><b>Le bien commun</b> : chercher ce qui permet à tous et à chacun de s'épanouir.</li>
    <li><b>La solidarité</b> : nous sommes tous responsables les uns des autres.</li>
    <li><b>L'attention préférentielle aux pauvres</b> : commencer par les plus fragiles.</li>
    <li><b>La destination universelle des biens</b> : les biens de la terre sont faits pour tous.</li>
  </ul>
  <h3>Concrètement</h3>
  <p>Refuser les moqueries et le harcèlement, inclure celui qui est mis à l'écart, respecter les personnes handicapées, âgées, malades ou étrangères, s'engager dans une association : ce sont des manières de reconnaître le Christ dans chaque personne.</p>
  <div class="astuce"><b>À retenir</b>Chaque personne, créée à l'image de Dieu, a une dignité qui ne se perd jamais. La doctrine sociale de l'Église parle de dignité, de bien commun, de solidarité et d'attention aux plus pauvres.</div>`,
    quiz: [
      { q: "Sur quoi repose la dignité de chaque personne selon l'Église ?", b: "Sur le fait qu'elle est créée à l'image de Dieu et aimée de lui", f: ["Sur sa richesse", "Sur ses notes à l'école", "Sur sa popularité"], e: "Cette dignité ne se gagne pas et ne se perd pas." },
      { q: "Quel pape a écrit « Rerum novarum » en 1891 ?", b: "Léon XIII", f: ["Saint Pierre", "Saint Jean-Paul II", "Grégoire le Grand"], e: "C'est le point de départ de la doctrine sociale moderne." },
      { q: "Que veut dire « solidarité » ?", b: "Nous sommes responsables les uns des autres", f: ["Chacun pour soi", "Être toujours seul", "Ne s'occuper que de sa famille"], e: "C'est un grand principe de la doctrine sociale." },
      { q: "La « destination universelle des biens » signifie que…", b: "les biens de la terre sont faits pour tous", f: ["tout appartient aux plus forts", "il faut tout garder pour soi", "les biens ne servent à rien"], e: "Dieu a confié la terre à toute l'humanité." },
      { q: "Quel mystère fêté à Noël montre la grandeur de chaque être humain ?", b: "L'Incarnation", f: ["L'Ascension", "Le déluge", "La tour de Babel"], e: "Le Fils de Dieu s'est uni à tout homme (Gaudium et spes, 22)." }
    ] },
  { cle: "confirmation-9", titre: "Prendre soin de la Création", resume: "La terre, notre maison commune", temps: "ordinaire",
    corps: `
  <p>Dans la Genèse, Dieu place l'homme dans le jardin « pour le cultiver et le garder » (Gn 2, 15). L'être humain n'est pas le propriétaire de la terre, mais son <b>gardien</b>.</p>
  <h3>Laudato si'</h3>
  <p>En 2015, le pape François a écrit l'encyclique <i>Laudato si'</i>, sur la sauvegarde de la <b>maison commune</b>. Son titre reprend le début du <b>Cantique des créatures</b> de saint François d'Assise : « Loué sois-tu, mon Seigneur… »</p>
  <h3>Les idées principales</h3>
  <ul>
    <li><b>Tout est lié</b> : le soin de la nature, la justice envers les pauvres et la paix intérieure vont ensemble.</li>
    <li>Ce sont souvent les plus pauvres qui souffrent le plus quand la Création est abîmée.</li>
    <li>Chaque créature a une valeur, et chante à sa manière la gloire de Dieu.</li>
    <li>La <b>conversion écologique</b> : changer son cœur et ses habitudes.</li>
  </ul>
  <h3>Des gestes simples</h3>
  <ul>
    <li>Ne pas gaspiller la nourriture, l'eau, l'énergie.</li>
    <li>Réparer, partager, prêter plutôt que jeter.</li>
    <li>Prendre le temps d'admirer la nature et de remercier Dieu.</li>
    <li>Respecter les animaux et les plantes.</li>
  </ul>
  <p>Saint François d'Assise, fêté le 4 octobre, est le patron de ceux qui s'occupent de l'écologie.</p>
  <div class="astuce"><b>À retenir</b>L'homme est le gardien de la Création, non son propriétaire. Dans « Laudato si' », le pape François rappelle que tout est lié : soin de la terre, justice et paix.</div>`,
    quiz: [
      { q: "Selon la Genèse, pourquoi Dieu place-t-il l'homme dans le jardin ?", b: "Pour le cultiver et le garder", f: ["Pour le détruire", "Pour le vendre", "Pour s'y cacher"], e: "Gn 2, 15 : l'homme est gardien de la Création." },
      { q: "Quel pape a écrit l'encyclique « Laudato si' » ?", b: "Le pape François", f: ["Le pape Léon XIII", "Saint Pierre", "Saint Grégoire"], e: "C'était en 2015." },
      { q: "D'où vient le titre « Laudato si' » ?", b: "Du Cantique des créatures de saint François d'Assise", f: ["D'une chanson à la radio", "Du livre de l'Exode", "D'un discours d'un roi de France"], e: "Il veut dire « Loué sois-tu »." },
      { q: "Quelle est une idée centrale de « Laudato si' » ?", b: "Tout est lié : nature, justice et paix", f: ["La nature n'a aucune importance", "Seuls les riches comptent", "Il faut consommer toujours plus"], e: "Le soin de la terre et des pauvres vont ensemble." },
      { q: "Quel saint est le patron de ceux qui s'occupent de l'écologie ?", b: "Saint François d'Assise", f: ["Saint Pierre", "Saint Nicolas", "Saint Louis"], e: "On le fête le 4 octobre." }
    ] },
  { cle: "confirmation-10", titre: "La prière personnelle", resume: "Prendre du temps seul avec Dieu", temps: "avent",
    corps: `
  <p>« Quand tu pries, retire-toi dans ta pièce la plus retirée, ferme la porte, et prie ton Père qui est présent dans le secret. » (Mt 6, 6)</p>
  <h3>Pourquoi prier seul ?</h3>
  <p>Toute amitié a besoin de temps passé ensemble. La prière personnelle est un <b>cœur à cœur</b> avec Dieu. Sainte Thérèse d'Avila disait que l'oraison est un échange intime d'amitié avec Celui dont on se sait aimé.</p>
  <h3>Les formes de la prière</h3>
  <p>Le Catéchisme en distingue plusieurs : la <b>bénédiction et l'adoration</b>, la <b>demande</b> (dont la demande de pardon), l'<b>intercession</b> pour les autres, l'<b>action de grâce</b> et la <b>louange</b>.</p>
  <h3>Des manières de prier</h3>
  <ul>
    <li><b>La prière vocale</b> : avec des mots, comme le Notre Père ou les psaumes.</li>
    <li><b>La méditation</b> : lire lentement un passage de l'Évangile, s'y imaginer, se demander ce que Dieu me dit (on parle de <i>lectio divina</i>).</li>
    <li><b>L'oraison</b> : rester simplement en silence devant Dieu, l'aimer.</li>
    <li><b>La relecture du soir</b> : revoir sa journée, dire merci, pardon, s'il te plaît.</li>
    <li><b>L'adoration</b> devant le Saint-Sacrement.</li>
  </ul>
  <h3>Quelques conseils</h3>
  <p>Choisir un moment et un lieu ; commencer petit (cinq minutes) mais fidèlement ; poser son téléphone ; accepter les distractions sans se décourager. Dieu ne mesure pas la qualité de la prière à ce qu'on ressent.</p>
  <h3>L'Avent, temps de veille</h3>
  <p>L'Avent invite à faire silence pour accueillir Celui qui vient. Marie, qui « retenait tous ces événements et les méditait dans son cœur » (Lc 2, 19), est un modèle de prière.</p>
  <div class="astuce"><b>À retenir</b>La prière personnelle est un cœur à cœur avec Dieu. On peut prier avec des mots, méditer l'Évangile, faire oraison en silence, relire sa journée. L'important est la fidélité.</div>`,
    quiz: [
      { q: "Selon Jésus en Mt 6, 6, où prier son Père ?", b: "Dans le secret, porte fermée", f: ["Uniquement sur la place publique", "Seulement à la télévision", "Jamais seul"], e: "Le Père est présent dans le secret." },
      { q: "Comment appelle-t-on la lecture priante et lente de la Parole de Dieu ?", b: "La lectio divina", f: ["L'homélie", "Le catéchuménat", "La procession"], e: "On lit, on médite, on prie, on contemple." },
      { q: "L'oraison, c'est…", b: "rester en silence devant Dieu pour l'aimer", f: ["une course à pied", "une récitation très rapide", "un chant obligatoire en latin"], e: "Sainte Thérèse d'Avila parlait d'un échange d'amitié." },
      { q: "Prier pour les autres s'appelle…", b: "l'intercession", f: ["l'excommunication", "l'abstinence", "la canonisation"], e: "C'est l'une des formes de la prière." },
      { q: "Selon Lc 2, 19, que faisait Marie de tous ces événements ?", b: "Elle les méditait dans son cœur", f: ["Elle les oubliait", "Elle les racontait à tout le village", "Elle les écrivait dans un journal"], e: "Elle est un modèle de prière." }
    ] },
  { cle: "confirmation-11", titre: "S'engager dans l'Église", resume: "Trouver sa place et servir", temps: "ordinaire",
    corps: `
  <p>Après la confirmation, on n'est pas « diplômé » de la foi : on commence au contraire une vie de chrétien adulte. Saint Paul dit que dans le corps du Christ, chaque membre a un rôle, et qu'aucun n'est inutile (1 Co 12, 12-27).</p>
  <h3>Trois manières d'être chrétien</h3>
  <p>Par le baptême, chaque chrétien participe à la mission du Christ, <b>prêtre, prophète et roi</b> :</p>
  <ul>
    <li><b>Prêtre</b> : en priant et en offrant sa vie à Dieu.</li>
    <li><b>Prophète</b> : en annonçant la Parole de Dieu par ses mots et ses actes.</li>
    <li><b>Roi</b> : non pas en dominant, mais en <b>servant</b>, comme Jésus qui a lavé les pieds de ses disciples.</li>
  </ul>
  <h3>Des idées pour s'engager</h3>
  <ul>
    <li>Servir la messe, chanter dans une chorale, faire une lecture.</li>
    <li>Rejoindre l'aumônerie, le scoutisme, un groupe de jeunes.</li>
    <li>Aider au catéchisme des plus petits, à une maraude, à un repas solidaire.</li>
    <li>Participer à un pèlerinage, aux JMJ, à une retraite.</li>
    <li>Visiter des personnes âgées ou malades.</li>
  </ul>
  <h3>La messe du dimanche</h3>
  <p>Le cœur de la vie chrétienne reste l'<b>Eucharistie du dimanche</b>. L'Église demande aux catholiques d'y participer les dimanches et les jours de fêtes d'obligation : c'est là qu'on se nourrit pour pouvoir servir.</p>
  <div class="astuce"><b>À retenir</b>Chaque baptisé participe à la mission du Christ, prêtre, prophète et roi. Chacun a sa place dans l'Église ; le dimanche, l'Eucharistie nous nourrit pour servir.</div>`,
    quiz: [
      { q: "Par le baptême, chaque chrétien participe à la mission du Christ…", b: "prêtre, prophète et roi", f: ["soldat, juge et marchand", "maître, élève et gardien", "riche, puissant et célèbre"], e: "Ce sont les trois fonctions du Christ." },
      { q: "Pour un chrétien, être « roi » signifie…", b: "servir, comme Jésus", f: ["dominer les autres", "porter une couronne", "avoir beaucoup d'argent"], e: "Jésus a lavé les pieds de ses disciples." },
      { q: "Selon saint Paul, dans le corps du Christ…", b: "chaque membre a un rôle et aucun n'est inutile", f: ["seuls les prêtres comptent", "chacun fait ce qu'il veut sans les autres", "les jeunes n'ont pas leur place"], e: "1 Co 12." },
      { q: "Après la confirmation, la vie chrétienne…", b: "continue et grandit", f: ["est terminée", "n'a plus besoin de la messe", "ne concerne plus la vie de tous les jours"], e: "On n'est pas « diplômé » de la foi." },
      { q: "Quel est le cœur de la vie chrétienne chaque semaine ?", b: "L'Eucharistie du dimanche", f: ["La quête", "Les annonces paroissiales", "La fête de la paroisse une fois par an"], e: "On s'y nourrit pour servir." }
    ] },
  { cle: "confirmation-12", titre: "Les grandes questions : le mal, la souffrance, la science", resume: "Croire avec son intelligence, face aux questions difficiles", temps: "ordinaire",
    corps: `
  <p>Il est normal, et même bon, de se poser des questions. La foi n'interdit pas de réfléchir : saint Anselme parlait de « la foi qui cherche à comprendre ».</p>
  <h3>Pourquoi le mal, si Dieu est bon ?</h3>
  <p>C'est la question la plus difficile. La foi n'apporte pas une explication qui supprimerait tout mystère, mais plusieurs lumières :</p>
  <ul>
    <li>Dieu <b>n'est pas l'auteur du mal</b>. Il a créé des êtres libres, capables d'aimer ; mais la liberté permet aussi de refuser l'amour, et beaucoup de souffrances viennent des choix humains.</li>
    <li>Le monde est encore « en chemin » et n'est pas achevé : il y a aussi des maladies, des catastrophes, que nous ne comprenons pas.</li>
    <li>Dieu ne reste pas loin de notre souffrance : en Jésus, il l'a partagée jusqu'à la croix. Et par la résurrection, il montre que le mal n'aura pas le dernier mot.</li>
    <li>Face à la souffrance d'un autre, la première réponse chrétienne est la <b>présence</b> : consoler, soigner, rester à côté. Le livre de <b>Job</b> montre qu'on peut crier vers Dieu sa douleur et ses questions.</li>
  </ul>
  <h3>La science et la foi</h3>
  <p>L'Église enseigne que la foi et la raison ne peuvent pas se contredire, car elles viennent du même Dieu (Catéchisme, n° 159). Saint Jean-Paul II les comparait à « deux ailes » qui permettent de s'élever vers la vérité (<i>Fides et ratio</i>, 1998).</p>
  <ul>
    <li>La science répond surtout à la question « <b>comment</b> ? » ; la foi répond à la question « <b>pourquoi</b> ? », celle du sens.</li>
    <li>Le récit de la Création n'est pas un livre de physique : il dit que le monde vient de Dieu et qu'il est bon.</li>
    <li>Le prêtre belge <b>Georges Lemaître</b>, physicien, a proposé dès 1927-1931 l'idée d'un univers en expansion à partir d'un « atome primitif », à l'origine de la théorie du Big Bang.</li>
    <li>Beaucoup de scientifiques ont été et sont croyants (Pascal, Pasteur, Mendel, qui était religieux augustin…).</li>
  </ul>
  <div class="astuce"><b>À retenir</b>Dieu n'est pas l'auteur du mal ; en Jésus, il a partagé notre souffrance et l'a vaincue par la résurrection. Foi et raison ne se contredisent pas : ce sont « deux ailes » vers la vérité.</div>`,
    quiz: [
      { q: "Selon la foi chrétienne, Dieu est-il l'auteur du mal ?", b: "Non, Dieu n'est pas l'auteur du mal", f: ["Oui, il veut le malheur des hommes", "Oui, pour nous punir", "Dieu n'a rien à voir avec le monde"], e: "Il a créé des êtres libres et il a partagé notre souffrance en Jésus." },
      { q: "Comment saint Jean-Paul II décrit-il la foi et la raison ?", b: "Comme deux ailes qui élèvent vers la vérité", f: ["Comme deux ennemies", "Comme deux choses sans lien", "Comme une prison et sa clé"], e: "Fides et ratio, 1998." },
      { q: "Quel prêtre physicien a proposé l'idée qui a donné la théorie du Big Bang ?", b: "Georges Lemaître", f: ["Saint Martin", "Blaise Pascal", "Saint Augustin"], e: "Il parlait d'un « atome primitif »." },
      { q: "La science répond surtout à la question « comment ? », la foi à la question…", b: "« pourquoi ? », celle du sens", f: ["« combien ça coûte ? »", "« où est-ce sur la carte ? »", "« qui a gagné ? »"], e: "Elles ne se contredisent pas, elles se complètent." },
      { q: "Quel livre de la Bible montre un homme qui crie à Dieu sa douleur et ses questions ?", b: "Le livre de Job", f: ["Le livre des Nombres", "Le Cantique des cantiques", "Les Actes des Apôtres"], e: "Job ose interroger Dieu dans sa souffrance." }
    ] }
  ] }
];

/* =========================================================
   LES PRIÈRES (textes en usage dans l'Église catholique en France)
   etape : l'étape où on l'apprend
   ========================================================= */
const PRIERES = [
  { cle: "signe-de-croix", titre: "Le signe de la croix", etape: "eveil",
    quand: "Au début et à la fin de chaque prière, en entrant dans une église, avant le repas.",
    texte: "Au nom du Père,\net du Fils,\net du Saint-Esprit.\nAmen." },
  { cle: "notre-pere", titre: "Notre Père", etape: "eveil",
    quand: "La prière que Jésus nous a apprise : on la dit chaque jour, et à chaque messe avant la communion.",
    texte: "Notre Père, qui es aux cieux,\nque ton nom soit sanctifié,\nque ton règne vienne,\nque ta volonté soit faite\nsur la terre comme au ciel.\nDonne-nous aujourd'hui notre pain de ce jour.\nPardonne-nous nos offenses,\ncomme nous pardonnons aussi\nà ceux qui nous ont offensés.\nEt ne nous laisse pas entrer en tentation,\nmais délivre-nous du Mal.\nAmen." },
  { cle: "je-vous-salue-marie", titre: "Je vous salue Marie", etape: "eveil",
    quand: "Pour confier sa journée à Marie ; on la répète en disant le chapelet.",
    texte: "Je vous salue, Marie, pleine de grâce ;\nle Seigneur est avec vous.\nVous êtes bénie entre toutes les femmes,\net Jésus, le fruit de vos entrailles, est béni.\nSainte Marie, Mère de Dieu,\npriez pour nous, pauvres pécheurs,\nmaintenant et à l'heure de notre mort.\nAmen." },
  { cle: "priere-du-soir", titre: "Prière du soir", etape: "eveil",
    quand: "Le soir avant de dormir, pour dire merci, pardon et s'il te plaît (prière simple, à dire avec ses mots).",
    texte: "Merci, Seigneur, pour cette journée,\npour tous ceux que j'aime\net pour tout ce qui était beau.\nPardon pour ce qui n'allait pas.\nVeille sur ma famille et sur mes amis,\nsur ceux qui sont malades ou tristes.\nGarde-moi cette nuit dans ta paix.\nAmen." },
  { cle: "benedicite", titre: "Bénédicité", etape: "decouvrir",
    quand: "Avant le repas, pour remercier Dieu et penser à ceux qui ont faim.",
    texte: "Bénis-nous, Seigneur,\nbénis ce repas,\nceux qui l'ont préparé,\net procure du pain à ceux qui n'en ont pas.\nAmen." },
  { cle: "ange-gardien", titre: "Prière à l'ange gardien", etape: "decouvrir",
    quand: "Le matin ou le soir, pour demander à son ange gardien de nous protéger et de nous guider.",
    texte: "Ange de Dieu,\nqui êtes mon gardien,\net à qui j'ai été confié\npar la bonté divine,\néclairez-moi, gardez-moi,\ndirigez-moi et gouvernez-moi.\nAmen." },
  { cle: "gloire-au-pere", titre: "Gloire au Père", etape: "decouvrir",
    quand: "Pour louer la Sainte Trinité ; on la dit à la fin des psaumes et de chaque dizaine du chapelet.",
    texte: "Gloire au Père, et au Fils, et au Saint-Esprit,\nau Dieu qui est, qui était et qui vient,\npour les siècles des siècles.\nAmen." },
  { cle: "acte-de-contrition", titre: "Acte de contrition", etape: "communion",
    quand: "Pendant la confession, avant l'absolution, et le soir pour demander pardon à Dieu.",
    texte: "Mon Dieu, j'ai un très grand regret de t'avoir offensé,\nparce que tu es infiniment bon,\ninfiniment aimable,\net que le péché te déplaît.\nJe prends la ferme résolution,\navec le secours de ta sainte grâce,\nde ne plus t'offenser et de faire pénitence.\nAmen." },
  { cle: "je-crois-en-dieu", titre: "Je crois en Dieu (Symbole des Apôtres)", etape: "profession",
    quand: "Pour dire sa foi ; on peut le dire à la messe du dimanche et au début du chapelet.",
    texte: "Je crois en Dieu, le Père tout-puissant,\nCréateur du ciel et de la terre.\nEt en Jésus Christ, son Fils unique, notre Seigneur,\nqui a été conçu du Saint-Esprit,\nest né de la Vierge Marie,\na souffert sous Ponce Pilate,\na été crucifié, est mort et a été enseveli,\nest descendu aux enfers,\nle troisième jour est ressuscité des morts,\nest monté aux cieux,\nest assis à la droite de Dieu le Père tout-puissant,\nd'où il viendra juger les vivants et les morts.\nJe crois en l'Esprit Saint,\nà la sainte Église catholique,\nà la communion des saints,\nà la rémission des péchés,\nà la résurrection de la chair,\nà la vie éternelle.\nAmen." },
  { cle: "viens-esprit-saint", titre: "Prière à l'Esprit Saint", etape: "confirmation",
    quand: "Avant de travailler, de prendre une décision, de lire la Bible, et pour se préparer à la confirmation.",
    texte: "Viens, Esprit Saint,\nremplis le cœur de tes fidèles,\net allume en eux le feu de ton amour.\nEnvoie ton Esprit, et tout sera créé,\net tu renouvelleras la face de la terre.\nAmen." }
];

/* =========================================================
   LES FÊTES
   date : "MM-JJ" (date fixe), "paques+N" / "paques-N" (par rapport au dimanche de Pâques),
          "avent" (1er dimanche de l'Avent, calculé par le site)
   ========================================================= */
const FETES = [
  { nom: "Toussaint", date: "11-01", texte: "La fête de tous les saints, connus et inconnus : la grande famille de Dieu au ciel." },
  { nom: "Commémoration des fidèles défunts", date: "11-02", texte: "On prie pour tous ceux qui sont morts, dans l'espérance de la résurrection." },
  { nom: "Saint Martin", date: "11-11", texte: "Le soldat qui partagea son manteau avec un pauvre à Amiens, devenu évêque de Tours." },
  { nom: "Premier dimanche de l'Avent", date: "avent", texte: "Début de l'année liturgique : quatre semaines pour préparer Noël, en violet." },
  { nom: "Saint Nicolas", date: "12-06", texte: "Évêque de Myre, protecteur des enfants, fêté surtout dans l'est et le nord de la France." },
  { nom: "Immaculée Conception", date: "12-08", texte: "Marie a été préservée du péché dès le premier instant de sa vie ; à Lyon, c'est la fête des lumières." },
  { nom: "Noël", date: "12-25", texte: "La naissance de Jésus à Bethléem : Dieu s'est fait homme pour être tout proche de nous." },
  { nom: "Sainte Marie, Mère de Dieu", date: "01-01", texte: "Le premier jour de l'année civile, l'Église fête Marie, Mère de Dieu, et prie pour la paix." },
  { nom: "Épiphanie", date: "01-06", texte: "Les mages venus d'Orient adorent Jésus ; en France, on la fête le dimanche entre le 2 et le 8 janvier." },
  { nom: "Présentation du Seigneur (Chandeleur)", date: "02-02", texte: "Jésus est présenté au Temple ; Siméon le reconnaît comme la lumière des nations, d'où les chandelles." },
  { nom: "Notre-Dame de Lourdes", date: "02-11", texte: "Le souvenir de la première apparition de Marie à Bernadette, en 1858 ; c'est aussi la journée des malades." },
  { nom: "Mercredi des Cendres", date: "paques-46", texte: "Entrée en Carême : le prêtre trace une croix de cendres sur le front et invite à se convertir." },
  { nom: "Saint Joseph", date: "03-19", texte: "L'époux de Marie, qui a pris soin de Jésus ; patron des pères de famille et des travailleurs." },
  { nom: "Annonciation", date: "03-25", texte: "L'ange Gabriel annonce à Marie qu'elle sera la mère du Sauveur (la fête est déplacée si elle tombe pendant la Semaine sainte)." },
  { nom: "Dimanche des Rameaux", date: "paques-7", texte: "Jésus entre à Jérusalem acclamé par la foule ; on fait bénir des rameaux. La Semaine sainte commence." },
  { nom: "Jeudi saint", date: "paques-3", texte: "Le dernier repas de Jésus, la Cène : il lave les pieds de ses apôtres et donne l'Eucharistie." },
  { nom: "Vendredi saint", date: "paques-2", texte: "Jésus meurt sur la croix par amour ; c'est un jour de jeûne et de prière, sans messe." },
  { nom: "Pâques", date: "paques+0", texte: "La plus grande fête des chrétiens : Jésus est ressuscité, il est vivant ! Alléluia !" },
  { nom: "Ascension", date: "paques+39", texte: "Quarante jours après Pâques, Jésus entre dans la gloire de son Père et promet l'Esprit Saint." },
  { nom: "Pentecôte", date: "paques+49", texte: "Cinquante jours après Pâques, l'Esprit Saint descend sur les apôtres : c'est la naissance de l'Église." },
  { nom: "Sainte Trinité", date: "paques+56", texte: "Le dimanche après la Pentecôte, on fête un seul Dieu en trois personnes : le Père, le Fils et le Saint-Esprit." },
  { nom: "Saint-Sacrement (Fête-Dieu)", date: "paques+63", texte: "En France, le deuxième dimanche après la Pentecôte : on fête la présence de Jésus dans l'Eucharistie." },
  { nom: "Nativité de saint Jean-Baptiste", date: "06-24", texte: "La naissance du cousin de Jésus, qui prépara sa venue et le baptisa dans le Jourdain." },
  { nom: "Saints Pierre et Paul", date: "06-29", texte: "Les deux grands apôtres, morts martyrs à Rome : Pierre, le rocher, et Paul, l'apôtre des nations." },
  { nom: "Assomption", date: "08-15", texte: "À la fin de sa vie, Marie est élevée au ciel avec son âme et son corps." },
  { nom: "Saint Michel et les archanges", date: "09-29", texte: "Saint Michel, saint Gabriel et saint Raphaël, messagers et serviteurs de Dieu." },
  { nom: "Sainte Thérèse de Lisieux", date: "10-01", texte: "La jeune carmélite de la « petite voie » : faire les petites choses avec un grand amour." },
  { nom: "Saints anges gardiens", date: "10-02", texte: "Chacun a un ange gardien qui le protège et le guide vers Dieu." },
  { nom: "Saint François d'Assise", date: "10-04", texte: "Le petit pauvre d'Assise, qui chantait Dieu pour toute la Création." }
];

export const catechisme = { ETAPES, PRIERES, FETES };
