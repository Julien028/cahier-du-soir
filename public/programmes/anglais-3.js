// Programme « Anglais · niveau 3 (6e-5e) » (11-12 ans, A1 vers A2), créé le 08/10/2026.
// Un cours d'anglais complet : une leçon par semaine, puis vocabulaire, grammaire,
// écoute (la tablette prononce les phrases, champ « audio ») et lecture.
// Consignes et explications en français ; ce qu'on apprend est en anglais britannique.

/* =========================================================
   1. LE PROGRAMME — 36 SEMAINES
   t = étiquettes : vocabulaire | grammaire | écoute | lecture
   « bilan:a-b » = on pioche dans les semaines a à b.
   ========================================================= */
const SEMAINES=[
{n:1,p:1,v:"Se présenter et la salle de classe",g:"Le verbe to be : am, is, are",l:"Comprendre une présentation : nom, âge, pays",r:"Lire une présentation",t:"school|be|intro|school",lecon:`
<h4>Vocabulaire : se présenter</h4>
<table><tr><td>Hello! / Hi!</td><td>Bonjour ! / Salut !</td></tr><tr><td>Goodbye! / Bye!</td><td>Au revoir ! / Salut !</td></tr>
<tr><td>What's your name?</td><td>Comment t'appelles-tu ?</td></tr><tr><td>How old are you?</td><td>Quel âge as-tu ?</td></tr>
<tr><td>Where are you from?</td><td>D'où viens-tu ?</td></tr><tr><td>a pencil case, a ruler, a rubber</td><td>une trousse, une règle, une gomme</td></tr></table>
<h4>Grammaire : le verbe to be (être)</h4>
<table><tr><td>I am (I'm)</td><td>je suis</td></tr><tr><td>you are (you're)</td><td>tu es / vous êtes</td></tr><tr><td>he / she / it is (he's, she's, it's)</td><td>il / elle est</td></tr><tr><td>we / you / they are</td><td>nous sommes / vous êtes / ils sont</td></tr></table>
<p><b>Négation</b> : on ajoute <b>not</b> → I'm not, she isn't, they aren't. <b>Question</b> : on inverse → <i>Are you French?</i> — <i>Yes, I am. / No, I'm not.</i></p>
<p><b>Piège :</b> pour l'âge, l'anglais dit « être » : <i>I am eleven</i> = j'ai onze ans (jamais « I have eleven »).</p>
<ul><li><i>I'm Léa. I'm from France.</i> = Je suis Léa. Je viens de France.</li><li><i>Tom is twelve.</i> = Tom a douze ans.</li><li><i>We aren't in the classroom.</i> = Nous ne sommes pas dans la salle de classe.</li></ul>
<p>Prononciation : dans <b>the</b>, la langue touche les dents de devant.</p>`},
{n:2,p:1,v:"La famille",g:"Have got : avoir (possession)",l:"Comprendre quelqu'un qui parle de sa famille",r:"Lire un texte sur une famille",t:"family|havegot|family|family",lecon:`
<h4>Vocabulaire : la famille</h4>
<table><tr><td>a mother (mum) / a father (dad)</td><td>une mère (maman) / un père (papa)</td></tr><tr><td>a brother / a sister</td><td>un frère / une sœur</td></tr>
<tr><td>a grandmother / a grandfather</td><td>une grand-mère / un grand-père</td></tr><tr><td>an aunt / an uncle / a cousin</td><td>une tante / un oncle / un cousin, une cousine</td></tr>
<tr><td>parents / an only child</td><td>les parents / un enfant unique</td></tr></table>
<h4>Grammaire : have got (avoir, posséder)</h4>
<table><tr><td>I / you / we / they have got ('ve got)</td><td>j'ai, tu as, nous avons, ils ont</td></tr><tr><td>he / she / it has got ('s got)</td><td>il / elle a</td></tr></table>
<p><b>Négation</b> : haven't got / hasn't got. <b>Question</b> : <i>Have you got a sister?</i> — <i>Yes, I have. / No, I haven't.</i></p>
<p><b>Piège :</b> à la 3e personne du singulier (he, she, it), c'est <b>has</b> got. Et on ne dit jamais « I have got eleven years ».</p>
<ul><li><i>I've got two brothers.</i> = J'ai deux frères.</li><li><i>She hasn't got a pet.</i> = Elle n'a pas d'animal.</li><li><i>Has your dad got a car?</i> = Ton père a-t-il une voiture ?</li></ul>
<p>Prononciation : le <b>h</b> de <b>have</b>, <b>has</b>, <b>hello</b> s'entend : on souffle, comme sur une vitre.</p>`},
{n:3,p:1,v:"Le corps et la description physique",g:"Décrire : les adjectifs (place, invariables)",l:"Reconnaître une personne décrite",r:"Lire une description",t:"body|adj|describe|describe",lecon:`
<h4>Vocabulaire : décrire quelqu'un</h4>
<table><tr><td>hair / eyes</td><td>les cheveux / les yeux</td></tr><tr><td>tall / short</td><td>grand / petit (taille)</td></tr>
<tr><td>long / short hair</td><td>les cheveux longs / courts</td></tr><tr><td>curly / straight hair</td><td>les cheveux bouclés / raides</td></tr>
<tr><td>fair / dark / red hair</td><td>les cheveux blonds / bruns / roux</td></tr><tr><td>glasses / a beard</td><td>des lunettes / une barbe</td></tr></table>
<h4>Grammaire : l'adjectif en anglais</h4>
<ul><li>Il se place <b>avant</b> le nom : <i>a <b>big</b> dog</i> = un gros chien.</li>
<li>Il est <b>invariable</b> : jamais de « s » → <i>two big dogs</i>, <i>green eyes</i>.</li>
<li>Pour décrire, on utilise <b>be</b> (<i>She is tall</i>) ou <b>have got</b> (<i>She has got blue eyes</i>).</li>
<li>Plusieurs adjectifs : la taille ou la longueur avant la couleur → <i>long black hair</i>.</li></ul>
<p><b>Piège :</b> <i>hair</i> (les cheveux) est singulier en anglais : <i>Her hair <b>is</b> long</i> (ses cheveux sont longs).</p>
<ul><li><i>He's got short curly hair.</i> = Il a les cheveux courts et bouclés.</li><li><i>My sister is tall and thin.</i> = Ma sœur est grande et mince.</li><li><i>The cat has got green eyes.</i> = Le chat a les yeux verts.</li></ul>`},
{n:4,p:1,v:"La routine quotidienne",g:"Le présent simple à la forme affirmative",l:"Comprendre une journée racontée",r:"Lire une journée type",t:"routine|ps_aff|routine|routine",lecon:`
<h4>Vocabulaire : ma journée</h4>
<table><tr><td>to get up / to wake up</td><td>se lever / se réveiller</td></tr><tr><td>to have a shower</td><td>prendre une douche</td></tr>
<tr><td>to have breakfast / lunch / dinner</td><td>prendre le petit-déjeuner / déjeuner / dîner</td></tr><tr><td>to go to school / to go to bed</td><td>aller au collège / aller se coucher</td></tr>
<tr><td>to brush my teeth</td><td>me brosser les dents</td></tr><tr><td>to do my homework</td><td>faire mes devoirs</td></tr></table>
<h4>Grammaire : le présent simple (les habitudes)</h4>
<p>On l'emploie pour ce qu'on fait <b>souvent, d'habitude</b>, et pour les vérités générales. Le verbe garde sa forme de base… sauf avec <b>he, she, it</b> : on ajoute <b>-s</b>.</p>
<table><tr><td>I / you / we / they play</td><td>he / she / it play<b>s</b></td></tr>
<tr><td>verbes en -o, -sh, -ch, -ss, -x</td><td>go → go<b>es</b>, watch → watch<b>es</b>, wash → wash<b>es</b></td></tr>
<tr><td>consonne + y</td><td>study → stud<b>ies</b> (mais play → plays)</td></tr><tr><td>have</td><td>he <b>has</b></td></tr></table>
<p><b>Piège :</b> on ne traduit pas « je suis en train de » : <i>I get up at seven</i> = je me lève (d'habitude) à sept heures.</p>
<ul><li><i>My mum gets up at six.</i> = Ma mère se lève à six heures.</li><li><i>He watches TV after school.</i> = Il regarde la télé après les cours.</li><li><i>We have lunch at the canteen.</i> = Nous déjeunons à la cantine.</li></ul>`},
{n:5,p:1,v:"Les matières, les jours et l'emploi du temps",g:"Présent simple : négation et questions avec do / does",l:"Comprendre l'heure",r:"Lire un emploi du temps",t:"subjects|ps_negq|time|subjects",lecon:`
<h4>Vocabulaire : l'emploi du temps</h4>
<table><tr><td>Maths, English, French, History, Geography</td><td>maths, anglais, français, histoire, géographie</td></tr>
<tr><td>Science, Art, Music, PE</td><td>sciences, arts plastiques, musique, EPS</td></tr>
<tr><td>Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday</td><td>lundi … dimanche (avec une majuscule !)</td></tr>
<tr><td>It's half past eight. / It's quarter to ten.</td><td>Il est 8 h 30. / Il est 9 h 45.</td></tr></table>
<h4>Grammaire : do / does</h4>
<table><tr><td>Négation</td><td>I <b>don't</b> like Maths. / She <b>doesn't</b> like Maths.</td></tr>
<tr><td>Question</td><td><b>Do</b> you like Art? / <b>Does</b> he like Art?</td></tr><tr><td>Réponse courte</td><td>Yes, I do. / No, he doesn't.</td></tr></table>
<p><b>Piège :</b> avec <b>does</b> ou <b>doesn't</b>, le verbe perd son -s : <i>She doesn't play</i> (pas « plays »), <i>Does he play?</i></p>
<p><b>L'heure</b> : <i>past</i> = et (après l'heure), <i>to</i> = moins (avant l'heure). <i>quarter past seven</i> = 7 h 15 ; <i>twenty to nine</i> = 8 h 40.</p>
<ul><li><i>We don't have school on Sunday.</i> = Nous n'avons pas cours le dimanche.</li><li><i>Does your brother like PE?</i> = Ton frère aime-t-il l'EPS ?</li></ul>`},
{n:6,p:1,v:"Les loisirs",g:"Les adverbes de fréquence",l:"Comprendre des nombres",r:"Lire un texte sur les loisirs",t:"hobbies|freq|numbers|hobbies",lecon:`
<h4>Vocabulaire : le temps libre</h4>
<table><tr><td>to play video games / to play the guitar</td><td>jouer aux jeux vidéo / jouer de la guitare</td></tr>
<tr><td>to read comics / to watch films</td><td>lire des BD / regarder des films</td></tr><tr><td>to draw / to dance / to sing</td><td>dessiner / danser / chanter</td></tr>
<tr><td>to go swimming / to go skating</td><td>aller nager / faire du patin</td></tr></table>
<h4>Grammaire : always, usually, often, sometimes, never</h4>
<table><tr><td>always (100 %)</td><td>toujours</td></tr><tr><td>usually</td><td>d'habitude</td></tr><tr><td>often</td><td>souvent</td></tr><tr><td>sometimes</td><td>parfois</td></tr><tr><td>never (0 %)</td><td>jamais</td></tr></table>
<p><b>Place</b> : <b>avant</b> le verbe (<i>I often play chess</i>) mais <b>après</b> be (<i>She is always late</i>).</p>
<p><b>Piège :</b> never est déjà négatif : <i>I never eat fish</i> (pas « I don't never »).</p>
<p><b>Les nombres</b> : 13 <i>thirteen</i> (accent à la fin) ≠ 30 <i>thirty</i> (accent au début). Après 20, trait d'union : <i>twenty-one, forty-five</i>.</p>
<ul><li><i>I sometimes go swimming on Saturday.</i> = Je vais parfois nager le samedi.</li><li><i>Tom is never bored.</i> = Tom ne s'ennuie jamais.</li></ul>`},
{n:7,p:1,v:"Bilan de la période 1",g:"Bilan : be, have got, présent simple",l:"Bilan d'écoute de la période 1",r:"Bilan de lecture de la période 1",t:"bilan:1-6|bilan:1-6|bilan:1-6|bilan:1-6",lecon:`
<h4>Bilan de la période 1 : ce qu'il faut savoir</h4>
<table><tr><td>be</td><td>I am, you are, he/she/it is, we/they are — I'm eleven = j'ai onze ans.</td></tr>
<tr><td>have got</td><td>I have got / she has got — Have you got…? Yes, I have.</td></tr>
<tr><td>adjectifs</td><td>avant le nom, sans -s : two black cats.</td></tr>
<tr><td>présent simple</td><td>habitudes ; -s avec he/she/it : she plays, he watches, it flies.</td></tr>
<tr><td>do / does</td><td>I don't like… / Does he like…? (verbe sans -s après does)</td></tr>
<tr><td>fréquence</td><td>always, usually, often, sometimes, never : avant le verbe, après be.</td></tr>
<tr><td>l'heure</td><td>quarter past = et quart ; half past = et demie ; quarter to = moins le quart.</td></tr></table>
<ul><li><i>She has got two cats and she always feeds them.</i> = Elle a deux chats et elle les nourrit toujours.</li>
<li><i>Do you go to school on Saturday? — No, I don't.</i> = Vas-tu au collège le samedi ? — Non.</li>
<li><i>My brother is tall and he has got short hair.</i> = Mon frère est grand et il a les cheveux courts.</li></ul>
<p>Conseil : relis à voix haute les phrases d'exemple des leçons 1 à 6.</p>`},
{n:8,p:2,v:"La maison",g:"There is / there are",l:"Comprendre la description d'une maison",r:"Lire la description d'une maison",t:"house|thereis|house|house",lecon:`
<h4>Vocabulaire : la maison</h4>
<table><tr><td>the kitchen / the living room</td><td>la cuisine / le salon</td></tr><tr><td>the bedroom / the bathroom</td><td>la chambre / la salle de bains</td></tr>
<tr><td>the garden / upstairs / downstairs</td><td>le jardin / en haut / en bas</td></tr><tr><td>a bed, a sofa, a fridge, a shelf</td><td>un lit, un canapé, un frigo, une étagère</td></tr></table>
<h4>Grammaire : there is / there are (il y a)</h4>
<table><tr><td>singulier</td><td><b>There is</b> (there's) a sofa.</td></tr><tr><td>pluriel</td><td><b>There are</b> two bedrooms.</td></tr>
<tr><td>négation</td><td>There isn't a garden. / There aren't any chairs.</td></tr><tr><td>question</td><td><b>Is there</b> a garage? — Yes, there is. / <b>Are there</b> any shops? — No, there aren't.</td></tr></table>
<p><b>Piège :</b> « il y a » ne se traduit pas par « it has ». Et on choisit is ou are selon le nom qui suit : <i>There <b>are</b> three windows.</i></p>
<ul><li><i>There's a big window in my bedroom.</i> = Il y a une grande fenêtre dans ma chambre.</li><li><i>There are four rooms downstairs.</i> = Il y a quatre pièces en bas.</li><li><i>Is there a bath? — No, there isn't.</i> = Y a-t-il une baignoire ? — Non.</li></ul>
<p>Prononciation : <b>there</b> et <b>their</b> se prononcent pareil.</p>`},
{n:9,p:2,v:"La ville",g:"Les prépositions de lieu et indiquer le chemin",l:"Suivre un itinéraire",r:"Lire un plan de ville",t:"town|prep|directions|town",lecon:`
<h4>Vocabulaire : la ville</h4>
<table><tr><td>a library / a bakery / a chemist's</td><td>une bibliothèque / une boulangerie / une pharmacie</td></tr>
<tr><td>a post office / a train station / a bank</td><td>une poste / une gare / une banque</td></tr>
<tr><td>Turn left / Turn right / Go straight on</td><td>Tourne à gauche / à droite / Va tout droit</td></tr></table>
<h4>Grammaire : où est-ce ?</h4>
<table><tr><td>in / on / under</td><td>dans / sur / sous</td></tr><tr><td>next to / between … and …</td><td>à côté de / entre … et …</td></tr>
<tr><td>behind / in front of / opposite</td><td>derrière / devant / en face de</td></tr></table>
<p>Pour indiquer le chemin, on utilise l'<b>impératif</b> : le verbe seul, sans sujet → <i>Turn left. Take the second street on the right.</i></p>
<p><b>Pièges :</b> <i>library</i> = bibliothèque (une librairie = <i>a bookshop</i>). <i>Opposite</i> = en face de, pas « opposé ».</p>
<ul><li><i>The bank is between the bakery and the café.</i> = La banque est entre la boulangerie et le café.</li><li><i>Go straight on and turn right.</i> = Va tout droit et tourne à droite.</li><li><i>The cinema is opposite the park.</i> = Le cinéma est en face du parc.</li></ul>`},
{n:10,p:2,v:"Les sports",g:"Can / can't : la capacité et la permission",l:"Comprendre ce que quelqu'un sait faire",r:"Lire un texte sur le sport",t:"sports|can|can|sports",lecon:`
<h4>Vocabulaire : les sports</h4>
<table><tr><td>to play football / tennis / basketball</td><td>jouer au foot / au tennis / au basket</td></tr>
<tr><td>to go swimming / cycling / horse riding</td><td>faire de la natation / du vélo / de l'équitation</td></tr>
<tr><td>to do judo / gymnastics</td><td>faire du judo / de la gymnastique</td></tr><tr><td>a team / a match / to win</td><td>une équipe / un match / gagner</td></tr></table>
<h4>Grammaire : can (pouvoir, savoir faire)</h4>
<ul><li><b>can</b> + verbe de base, à toutes les personnes : <i>I can swim, she can swim</i> (jamais « she cans »).</li>
<li>Négation : <b>can't</b> (cannot). Question : <b>Can</b> you ski? — Yes, I can. / No, I can't.</li>
<li>Pas de « to » après can : <i>He can ride a horse</i>.</li><li>Can sert aussi à demander la permission : <i>Can I go out?</i> = Est-ce que je peux sortir ?</li></ul>
<p><b>Piège :</b> on <b>plays</b> aux sports de ballon, on <b>goes</b> + -ing pour les activités (<i>go swimming</i>), on <b>does</b> les arts martiaux et la gym.</p>
<ul><li><i>My cousin can play the piano.</i> = Mon cousin sait jouer du piano.</li><li><i>Penguins can't fly.</i> = Les manchots ne savent pas voler.</li></ul>
<p>Prononciation : <b>can't</b> se dit avec un « a » long et ouvert, <b>can</b> est très court.</p>`},
{n:11,p:2,v:"Les vêtements",g:"Le présent continu (be + -ing)",l:"Comprendre ce que font les gens en ce moment",r:"Lire un texte au présent continu",t:"clothes|cont|cont|clothes",lecon:`
<h4>Vocabulaire : les vêtements</h4>
<table><tr><td>a T-shirt / a jumper / a coat</td><td>un tee-shirt / un pull / un manteau</td></tr><tr><td>trousers / jeans / shorts</td><td>un pantalon / un jean / un short</td></tr>
<tr><td>a skirt / a dress / a cap</td><td>une jupe / une robe / une casquette</td></tr><tr><td>shoes / trainers / boots</td><td>des chaussures / des baskets / des bottes</td></tr>
<tr><td>to wear / to put on</td><td>porter (un vêtement) / mettre</td></tr></table>
<h4>Grammaire : le présent continu (en ce moment)</h4>
<p><b>be</b> (am, is, are) + verbe en <b>-ing</b>. On l'emploie pour une action <b>en cours</b>, maintenant : <i>Look! She is dancing.</i></p>
<table><tr><td>affirmation</td><td>I'm reading. / He's wearing a cap.</td></tr><tr><td>négation</td><td>They aren't playing.</td></tr><tr><td>question</td><td>What <b>are</b> you <b>doing</b>?</td></tr></table>
<p><b>Orthographe :</b> write → writ<b>ing</b> (e muet tombe) ; swim → swi<b>mm</b>ing, run → ru<b>nn</b>ing (consonne doublée) ; play → playing.</p>
<p><b>Piège :</b> <i>trousers, jeans, shorts</i> sont toujours au pluriel : <i>My jeans <b>are</b> blue.</i></p>
<ul><li><i>I'm wearing a red jumper today.</i> = Je porte un pull rouge aujourd'hui.</li><li><i>They're running to the bus stop.</i> = Ils courent vers l'arrêt de bus.</li></ul>`},
{n:12,p:2,v:"La météo et les saisons",g:"Présent simple ou présent continu ?",l:"Comprendre un bulletin météo",r:"Lire une carte postale",t:"weather|simplecont|weather|weather",lecon:`
<h4>Vocabulaire : le temps qu'il fait</h4>
<table><tr><td>It's sunny / cloudy / windy / foggy</td><td>Il fait soleil / nuageux / il y a du vent / du brouillard</td></tr>
<tr><td>It's raining / It's snowing</td><td>Il pleut / Il neige</td></tr><tr><td>It's hot / warm / cold</td><td>Il fait chaud / doux / froid</td></tr>
<tr><td>spring, summer, autumn, winter</td><td>le printemps, l'été, l'automne, l'hiver</td></tr></table>
<h4>Grammaire : deux présents</h4>
<table><tr><td>présent simple</td><td>habitude, vérité : <i>It often rains in Scotland.</i> Mots-repères : every day, often, usually, never.</td></tr>
<tr><td>présent continu</td><td>action en cours : <i>Look! It's snowing.</i> Mots-repères : now, at the moment, look!, listen!</td></tr></table>
<p><b>Piège :</b> le français dit « il pleut » dans les deux cas ; l'anglais choisit : <i>It rains a lot in Brest</i> (en général) / <i>It's raining</i> (là, maintenant).</p>
<ul><li><i>I usually walk to school, but today I'm taking the bus.</i> = D'habitude je vais au collège à pied, mais aujourd'hui je prends le bus.</li>
<li><i>What's the weather like?</i> = Quel temps fait-il ?</li><li><i>She wears a coat in winter.</i> = Elle porte un manteau en hiver.</li></ul>`},
{n:13,p:2,v:"Le Royaume-Uni et Noël",g:"Must / mustn't : l'obligation et l'interdiction",l:"Comprendre des règles",r:"Lire un texte sur la culture britannique",t:"uk|must|rules|uk",lecon:`
<h4>Vocabulaire : le Royaume-Uni et Noël</h4>
<table><tr><td>the United Kingdom (the UK)</td><td>le Royaume-Uni : England, Scotland, Wales, Northern Ireland</td></tr>
<tr><td>London, Edinburgh, Cardiff, Belfast</td><td>les quatre capitales</td></tr><tr><td>the Queen / the King, the Prime Minister</td><td>la reine / le roi, le Premier ministre</td></tr>
<tr><td>Christmas Eve / Christmas Day / Boxing Day</td><td>le 24, le 25, le 26 décembre</td></tr><tr><td>a stocking, a cracker, Father Christmas</td><td>une chaussette à cadeaux, un diablotin, le père Noël</td></tr></table>
<h4>Grammaire : must (devoir)</h4>
<ul><li><b>must</b> + verbe de base = obligation : <i>You must wear a uniform.</i></li><li><b>mustn't</b> = interdiction : <i>You mustn't run in the corridor.</i> (= c'est interdit)</li>
<li>Comme can : même forme à toutes les personnes, pas de « to », pas de do : <i>She must go. Must I go?</i></li></ul>
<p><b>Piège :</b> mustn't ne veut pas dire « pas obligé » : c'est <b>interdit</b>.</p>
<ul><li><i>Pupils must be on time.</i> = Les élèves doivent être à l'heure.</li><li><i>You mustn't use your phone in class.</i> = Tu ne dois pas utiliser ton téléphone en classe.</li></ul>
<p>Culture : au Royaume-Uni, on ouvre les cadeaux le matin du 25 décembre et on mange de la dinde et un <i>Christmas pudding</i>. Prononciation : le <b>t</b> de <b>Christmas</b> ne se prononce pas.</p>`},
{n:14,p:2,v:"Bilan de la période 2",g:"Bilan : there is, can, must, les deux présents",l:"Bilan d'écoute de la période 2",r:"Bilan de lecture de la période 2",t:"bilan:8-13|bilan:8-13|bilan:8-13|bilan:8-13",lecon:`
<h4>Bilan de la période 2</h4>
<table><tr><td>there is / there are</td><td>il y a (singulier / pluriel) — Is there…? Are there…?</td></tr>
<tr><td>prépositions</td><td>in, on, under, next to, between, behind, in front of, opposite</td></tr>
<tr><td>impératif</td><td>Turn left. Don't run! (négatif : don't + verbe)</td></tr>
<tr><td>can / can't</td><td>capacité ou permission, + verbe de base, sans -s</td></tr>
<tr><td>présent continu</td><td>am / is / are + -ing : ce qui se passe maintenant</td></tr>
<tr><td>simple ou continu ?</td><td>habitude (every day) / maintenant (now, look!)</td></tr>
<tr><td>must / mustn't</td><td>obligation / interdiction</td></tr></table>
<ul><li><i>There are two parks near my house, but there isn't a cinema.</i> = Il y a deux parcs près de chez moi, mais il n'y a pas de cinéma.</li>
<li><i>I can't come now: I'm doing my homework.</i> = Je ne peux pas venir maintenant : je fais mes devoirs.</li>
<li><i>You must wear a coat: it's snowing!</i> = Tu dois mettre un manteau : il neige !</li></ul>`},
{n:15,p:3,v:"La nourriture et les boissons",g:"Dénombrable ou indénombrable : a, some, any",l:"Comprendre une commande au restaurant",r:"Lire un menu ou une recette",t:"food|someany|food|food",lecon:`
<h4>Vocabulaire : la nourriture</h4>
<table><tr><td>bread, butter, cheese, milk, water</td><td>le pain, le beurre, le fromage, le lait, l'eau</td></tr>
<tr><td>an apple, a banana, an egg, a carrot</td><td>une pomme, une banane, un œuf, une carotte</td></tr><tr><td>chips / crisps</td><td>les frites / les chips</td></tr>
<tr><td>I'd like… / I'm hungry / I'm thirsty</td><td>Je voudrais… / J'ai faim / J'ai soif</td></tr></table>
<h4>Grammaire : compter ou pas ?</h4>
<ul><li><b>Dénombrables</b> (on peut compter) : <i>an apple, two apples</i>.</li><li><b>Indénombrables</b> (pas de pluriel, pas de a) : <i>bread, water, milk, cheese, rice, money</i>.</li>
<li><b>some</b> = du, de la, des, dans une phrase <b>affirmative</b> : <i>I've got some bread.</i></li>
<li><b>any</b> dans les phrases <b>négatives</b> et les <b>questions</b> : <i>There isn't any milk. Have you got any eggs?</i></li>
<li>Pour proposer ou demander poliment, on garde some : <i>Would you like some tea?</i></li></ul>
<p><b>Pièges :</b> « un pain » = <i>a loaf of bread</i> ; « des informations » = <i>some information</i> (sans s). <i>Chips</i> = frites en Grande-Bretagne ; les chips = <i>crisps</i>.</p>
<ul><li><i>I'd like some orange juice, please.</i> = Je voudrais du jus d'orange, s'il vous plaît.</li><li><i>Are there any tomatoes?</i> = Y a-t-il des tomates ?</li></ul>`},
{n:16,p:3,v:"Les courses, les quantités et les prix",g:"How much / how many, a lot of",l:"Comprendre un prix",r:"Lire une liste de courses",t:"shop|muchmany|prices|shop",lecon:`
<h4>Vocabulaire : faire les courses</h4>
<table><tr><td>a bottle of / a packet of / a box of</td><td>une bouteille de / un paquet de / une boîte de</td></tr>
<tr><td>a kilo of / a slice of / a piece of</td><td>un kilo de / une tranche de / un morceau de</td></tr>
<tr><td>How much is it? — It's £2.50.</td><td>Combien ça coûte ? — 2,50 livres (two pounds fifty).</td></tr><tr><td>cheap / expensive</td><td>bon marché / cher</td></tr></table>
<h4>Grammaire : combien ?</h4>
<table><tr><td><b>How many</b> + pluriel dénombrable</td><td><i>How many apples do you want?</i></td></tr>
<tr><td><b>How much</b> + indénombrable</td><td><i>How much milk is there?</i></td></tr><tr><td><b>How much</b> pour un prix</td><td><i>How much is this cap?</i></td></tr>
<tr><td><b>a lot of</b> (beaucoup de)</td><td>avec les deux : <i>a lot of apples, a lot of milk</i></td></tr></table>
<p><b>Piège :</b> en anglais, le prix s'écrit avec un point et le symbole devant : <b>£3.20</b> = « three pounds twenty ». 100 pence = 1 pound.</p>
<ul><li><i>How many eggs do we need? — Six.</i> = De combien d'œufs avons-nous besoin ? — Six.</li><li><i>There's a lot of cheese in the fridge.</i> = Il y a beaucoup de fromage dans le frigo.</li></ul>`},
{n:17,p:3,v:"Les animaux",g:"Les possessifs et le génitif 's",l:"Comprendre la description d'un animal",r:"Lire un texte sur les animaux",t:"animals|poss|animals|animals",lecon:`
<h4>Vocabulaire : les animaux</h4>
<table><tr><td>a dog, a cat, a rabbit, a hamster</td><td>un chien, un chat, un lapin, un hamster</td></tr><tr><td>a horse, a cow, a sheep, a pig</td><td>un cheval, une vache, un mouton, un cochon</td></tr>
<tr><td>a lion, an elephant, a monkey, a snake</td><td>un lion, un éléphant, un singe, un serpent</td></tr><tr><td>a pet / to feed</td><td>un animal de compagnie / nourrir</td></tr></table>
<h4>Grammaire : à qui est-ce ?</h4>
<table><tr><td>I → my / you → your</td><td>mon, ma, mes / ton, ta, tes</td></tr><tr><td>he → <b>his</b> / she → <b>her</b> / it → <b>its</b></td><td>son, sa, ses</td></tr>
<tr><td>we → our / they → their</td><td>notre, nos / leur, leurs</td></tr></table>
<p><b>Piège n°1 :</b> le possessif s'accorde avec le <b>possesseur</b> : <i>Tom and <b>his</b> mother</i> (Tom et sa mère), <i>Léa and <b>her</b> father</i> (Léa et son père).</p>
<p><b>Le génitif 's</b> : le possesseur d'abord, puis <b>'s</b>, puis l'objet : <i>Tom's dog</i> = le chien de Tom. Pluriel en -s : juste l'apostrophe → <i>my parents' car</i>.</p>
<ul><li><i>This is my sister's rabbit.</i> = C'est le lapin de ma sœur.</li><li><i>The dog is wagging its tail.</i> = Le chien remue la queue.</li><li><i>Their cat is black.</i> = Leur chat est noir.</li></ul>
<p>Attention : <i>its</i> (son, sa pour une chose ou un animal) ≠ <i>it's</i> (= it is).</p>`},
{n:18,p:3,v:"Les dates, les mois et les anniversaires",g:"Les comparatifs",l:"Comprendre une date",r:"Lire une invitation d'anniversaire",t:"dates|compar|dates|dates",lecon:`
<h4>Vocabulaire : les dates</h4>
<table><tr><td>January, February, March, April, May, June</td><td>janvier … juin</td></tr><tr><td>July, August, September, October, November, December</td><td>juillet … décembre</td></tr>
<tr><td>first (1st), second (2nd), third (3rd), fourth (4th)…</td><td>premier, deuxième, troisième, quatrième…</td></tr>
<tr><td>When's your birthday? — It's on the 21st of March.</td><td>C'est quand ton anniversaire ? — Le 21 mars.</td></tr></table>
<p>La date se dit avec un <b>ordinal</b> : <i>the twenty-first of March</i>. Mois et jours prennent une <b>majuscule</b>.</p>
<h4>Grammaire : comparer</h4>
<table><tr><td>adjectif court (1 syllabe)</td><td>+ <b>-er than</b> : tall → <i>taller than</i>, big → <i>bigger than</i></td></tr>
<tr><td>adjectif en -y</td><td>happy → <i>happier than</i>, easy → <i>easier than</i></td></tr>
<tr><td>adjectif long</td><td><b>more</b> + adjectif + than : <i>more expensive than</i></td></tr>
<tr><td>irréguliers</td><td>good → <b>better</b> ; bad → <b>worse</b></td></tr><tr><td>égalité</td><td><b>as</b> tall <b>as</b> = aussi grand que</td></tr></table>
<p><b>Piège :</b> jamais « more taller » ni « more good ». Et « que » se dit <b>than</b>, pas « that ».</p>
<ul><li><i>My brother is older than me.</i> = Mon frère est plus âgé que moi.</li><li><i>Maths is more difficult than Art.</i> = Les maths sont plus difficiles que les arts plastiques.</li></ul>`},
{n:19,p:3,v:"Les pays, les nationalités et les langues",g:"Les superlatifs",l:"Comprendre d'où viennent les gens",r:"Lire un texte sur des pays",t:"countries|superl|countries|countries",lecon:`
<h4>Vocabulaire : pays et nationalités</h4>
<table><tr><td>France – French / England – English</td><td>la France – français / l'Angleterre – anglais</td></tr>
<tr><td>Spain – Spanish / Germany – German / Italy – Italian</td><td>l'Espagne, l'Allemagne, l'Italie</td></tr>
<tr><td>Scotland – Scottish / Wales – Welsh / Ireland – Irish</td><td>l'Écosse, le pays de Galles, l'Irlande</td></tr>
<tr><td>the USA – American / China – Chinese</td><td>les États-Unis – américain / la Chine – chinois</td></tr></table>
<p>Les nationalités et les langues prennent une <b>majuscule</b> en anglais : <i>She is French. I speak English.</i></p>
<h4>Grammaire : le superlatif (le plus…)</h4>
<table><tr><td>adjectif court</td><td><b>the</b> + adjectif + <b>-est</b> : <i>the tallest, the biggest</i></td></tr><tr><td>adjectif en -y</td><td><i>the funniest, the easiest</i></td></tr>
<tr><td>adjectif long</td><td><b>the most</b> + adjectif : <i>the most beautiful</i></td></tr><tr><td>irréguliers</td><td>good → <b>the best</b> ; bad → <b>the worst</b></td></tr></table>
<p><b>Piège :</b> « le plus grand <b>du</b> monde » = <i>the biggest <b>in</b> the world</i> (in, pas « of the world »).</p>
<ul><li><i>The Nile is the longest river in Africa.</i> = Le Nil est le plus long fleuve d'Afrique.</li><li><i>It's the most famous castle in Scotland.</i> = C'est le château le plus célèbre d'Écosse.</li></ul>`},
{n:20,p:3,v:"La santé et le corps",g:"Le prétérit de be : was / were",l:"Comprendre quelqu'un qui est malade",r:"Lire un texte sur la santé",t:"health|was|health|health",lecon:`
<h4>Vocabulaire : la santé</h4>
<table><tr><td>I've got a headache / a stomach ache / a sore throat</td><td>J'ai mal à la tête / au ventre / à la gorge</td></tr>
<tr><td>I've got a cold / a temperature</td><td>J'ai un rhume / de la fièvre</td></tr><tr><td>I'm ill / I feel better</td><td>Je suis malade / Je me sens mieux</td></tr>
<tr><td>a doctor / a nurse / a hospital / medicine</td><td>un médecin / un(e) infirmier(e) / un hôpital / des médicaments</td></tr></table>
<h4>Grammaire : was / were (le passé de be)</h4>
<table><tr><td>I / he / she / it <b>was</b></td><td>j'étais, il était…</td></tr><tr><td>you / we / they <b>were</b></td><td>tu étais, nous étions, ils étaient</td></tr>
<tr><td>négation</td><td>wasn't / weren't</td></tr><tr><td>question</td><td><b>Were</b> you ill yesterday? — Yes, I was. / No, I wasn't.</td></tr></table>
<p>On l'utilise avec un moment <b>terminé</b> : <i>yesterday, last week, in 2020</i>.</p>
<p><b>Piège :</b> « il y avait » = <b>there was</b> (singulier) / <b>there were</b> (pluriel). « Je suis né » = <i>I was born</i>.</p>
<ul><li><i>I was ill last week.</i> = J'étais malade la semaine dernière.</li><li><i>Were they at school yesterday? — No, they weren't.</i> = Étaient-ils au collège hier ? — Non.</li><li><i>She was born in 2014.</i> = Elle est née en 2014.</li></ul>`},
{n:21,p:3,v:"Bilan de la période 3",g:"Bilan : quantités, possessifs, comparer, was / were",l:"Bilan d'écoute de la période 3",r:"Bilan de lecture de la période 3",t:"bilan:15-20|bilan:15-20|bilan:15-20|bilan:15-20",lecon:`
<h4>Bilan de la période 3</h4>
<table><tr><td>some / any</td><td>some à l'affirmatif ; any au négatif et dans les questions</td></tr>
<tr><td>how much / how many</td><td>much + indénombrable (milk) ; many + pluriel (apples) ; How much is it? = le prix</td></tr>
<tr><td>possessifs</td><td>my, your, his (à lui), her (à elle), its, our, their</td></tr><tr><td>génitif</td><td>Tom's bike = le vélo de Tom ; my parents' car</td></tr>
<tr><td>comparatif</td><td>taller than, more interesting than, better, worse ; as … as</td></tr>
<tr><td>superlatif</td><td>the tallest, the most interesting, the best, the worst … in the world</td></tr>
<tr><td>was / were</td><td>I/he/she/it was ; you/we/they were ; there was / there were</td></tr>
<tr><td>dates</td><td>the 3rd of May = the third of May ; my birthday is on…</td></tr></table>
<ul><li><i>Her cat was the fattest cat in the street.</i> = Son chat était le chat le plus gros de la rue.</li>
<li><i>How many sandwiches were there? — There weren't any!</i> = Combien de sandwichs y avait-il ? — Il n'y en avait pas !</li></ul>`},
{n:22,p:4,v:"Le week-end dernier : les mots du passé",g:"Le prétérit des verbes réguliers",l:"Reconnaître le passé à l'oral",r:"Lire le récit d'un week-end",t:"pasttime|pastreg|pastreg|weekend",lecon:`
<h4>Vocabulaire : situer dans le passé</h4>
<table><tr><td>yesterday / yesterday morning</td><td>hier / hier matin</td></tr><tr><td>last night / last week / last year</td><td>hier soir / la semaine dernière / l'an dernier</td></tr>
<tr><td>two days ago / a long time ago</td><td>il y a deux jours / il y a longtemps</td></tr><tr><td>then / after that / finally</td><td>ensuite / après ça / finalement</td></tr></table>
<h4>Grammaire : le prétérit (past simple)</h4>
<p>Il raconte une action <b>terminée</b>, à un moment précis du passé. Il se traduit par le passé composé ou l'imparfait. Verbes réguliers : base + <b>-ed</b>, à toutes les personnes.</p>
<table><tr><td>play → played</td><td>cas général</td></tr><tr><td>like → liked</td><td>e final : on ajoute -d</td></tr>
<tr><td>study → studied</td><td>consonne + y → -ied (mais play → played)</td></tr><tr><td>stop → stopped</td><td>consonne finale doublée</td></tr></table>
<p><b>Prononciation de -ed :</b> [ɪd] après t ou d (<i>wanted, needed</i> : une syllabe de plus) ; ailleurs on n'ajoute pas de syllabe (<i>played, watched</i>).</p>
<p><b>Piège :</b> « ago » se place après la durée : <i>three years ago</i> = il y a trois ans.</p>
<ul><li><i>I watched a film last night.</i> = J'ai regardé un film hier soir.</li><li><i>We visited my grandparents yesterday.</i> = Nous avons rendu visite à mes grands-parents hier.</li><li><i>It rained all day.</i> = Il a plu toute la journée.</li></ul>`},
{n:23,p:4,v:"Les verbes d'action",g:"Le prétérit des verbes irréguliers (1)",l:"Comprendre un récit au passé",r:"Lire une petite histoire",t:"verbs|pastirr1|pastirr|story",lecon:`
<h4>Les 25 verbes irréguliers les plus courants</h4>
<table><tr><td>be → was/were, have → had, do → did</td><td>être, avoir, faire</td></tr><tr><td>go → went, come → came, see → saw</td><td>aller, venir, voir</td></tr>
<tr><td>eat → ate, drink → drank, make → made</td><td>manger, boire, fabriquer / faire</td></tr><tr><td>take → took, get → got, give → gave</td><td>prendre, obtenir, donner</td></tr>
<tr><td>buy → bought, say → said, write → wrote</td><td>acheter, dire, écrire</td></tr><tr><td>read → read, run → ran, swim → swam</td><td>lire, courir, nager</td></tr>
<tr><td>sleep → slept, sit → sat, think → thought</td><td>dormir, s'asseoir, penser</td></tr><tr><td>know → knew, find → found, meet → met, leave → left</td><td>savoir, trouver, rencontrer, partir</td></tr></table>
<p>Le prétérit irrégulier est le même à toutes les personnes : <i>I went, she went, they went</i>. Il faut l'apprendre par cœur : 5 verbes par soir !</p>
<p><b>Piège :</b> <i>read</i> au passé s'écrit pareil mais se prononce « red ».</p>
<ul><li><i>We went to the beach and swam in the sea.</i> = Nous sommes allés à la plage et nous avons nagé dans la mer.</li><li><i>She bought a new bike.</i> = Elle a acheté un nouveau vélo.</li><li><i>I met my friends in the park.</i> = J'ai retrouvé mes amis au parc.</li></ul>`},
{n:24,p:4,v:"Les vacances et les voyages",g:"Le prétérit : négation et questions avec did",l:"Comprendre un récit de vacances",r:"Lire une carte postale de vacances",t:"holidays|pastnegq|holidays|holidays",lecon:`
<h4>Vocabulaire : les vacances</h4>
<table><tr><td>to go on holiday / to travel</td><td>partir en vacances / voyager</td></tr><tr><td>the seaside / the mountains / the countryside</td><td>le bord de mer / la montagne / la campagne</td></tr>
<tr><td>a hotel / a campsite / a suitcase</td><td>un hôtel / un camping / une valise</td></tr><tr><td>a plane / a ferry / a souvenir</td><td>un avion / un ferry / un souvenir</td></tr></table>
<h4>Grammaire : did</h4>
<table><tr><td>négation</td><td>I <b>didn't</b> (did not) + verbe de base : <i>I didn't go.</i></td></tr>
<tr><td>question</td><td><b>Did</b> + sujet + verbe de base : <i>Did you go to Spain?</i></td></tr><tr><td>réponse courte</td><td>Yes, I did. / No, I didn't.</td></tr>
<tr><td>question ouverte</td><td><i>Where <b>did</b> you <b>go</b>? What <b>did</b> you <b>see</b>?</i></td></tr></table>
<p><b>Piège :</b> le passé est déjà dans <b>did</b> : le verbe reste à la base. <i>Did you see?</i> (pas « did you saw »), <i>He didn't buy</i> (pas « didn't bought »).</p>
<p>Exception : avec <b>be</b>, pas de did → <i>Were you tired? I wasn't.</i></p>
<ul><li><i>We didn't stay in a hotel: we went camping.</i> = Nous ne sommes pas restés à l'hôtel : nous avons fait du camping.</li><li><i>Did you take a lot of photos?</i> = As-tu pris beaucoup de photos ?</li></ul>`},
{n:25,p:4,v:"Les États-Unis",g:"Le prétérit : 50 verbes irréguliers",l:"Comprendre des informations sur les États-Unis",r:"Lire un texte sur les États-Unis",t:"usa|pastirr2|usa|usa",lecon:`
<h4>Vocabulaire : les États-Unis</h4>
<table><tr><td>the United States (the USA)</td><td>les États-Unis : 50 states (États)</td></tr><tr><td>Washington, D.C. / New York</td><td>la capitale / la plus grande ville</td></tr>
<tr><td>the Stars and Stripes</td><td>le drapeau (50 étoiles, 13 bandes)</td></tr><tr><td>Independence Day (the 4th of July) / Thanksgiving</td><td>la fête nationale / la fête de fin novembre</td></tr></table>
<h4>Grammaire : 25 autres verbes irréguliers</h4>
<table><tr><td>begin → began, break → broke, bring → brought</td><td>commencer, casser, apporter</td></tr><tr><td>build → built, catch → caught, choose → chose</td><td>construire, attraper, choisir</td></tr>
<tr><td>draw → drew, drive → drove, fall → fell, feel → felt</td><td>dessiner, conduire, tomber, ressentir</td></tr><tr><td>fly → flew, forget → forgot, hear → heard, lose → lost</td><td>voler (avion), oublier, entendre, perdre</td></tr>
<tr><td>pay → paid, put → put, ride → rode, sell → sold, send → sent</td><td>payer, mettre, monter (vélo, cheval), vendre, envoyer</td></tr><tr><td>sing → sang, speak → spoke, teach → taught, tell → told, win → won</td><td>chanter, parler, enseigner, raconter, gagner</td></tr></table>
<p><b>Piège :</b> -ought et -aught se prononcent pareil : <i>bought, brought, thought, caught, taught</i> riment.</p>
<ul><li><i>In 1620, the Pilgrims sailed to America.</i> = En 1620, les Pères pèlerins ont navigué vers l'Amérique.</li><li><i>We flew to New York and saw the Statue of Liberty.</i> = Nous avons pris l'avion pour New York et nous avons vu la statue de la Liberté.</li></ul>`},
{n:26,p:4,v:"Les métiers",g:"Les mots interrogatifs (who, what, where, when, why, how)",l:"Comprendre quelqu'un qui parle de son métier",r:"Lire un texte sur des métiers",t:"jobs|wh|jobs|jobs",lecon:`
<h4>Vocabulaire : les métiers</h4>
<table><tr><td>a teacher / a doctor / a nurse</td><td>un professeur / un médecin / un(e) infirmier(e)</td></tr><tr><td>a farmer / a baker / a cook</td><td>un agriculteur / un boulanger / un cuisinier</td></tr>
<tr><td>a firefighter / a police officer / a vet</td><td>un pompier / un policier / un vétérinaire</td></tr><tr><td>an engineer / a journalist / a pilot</td><td>un ingénieur / un journaliste / un pilote</td></tr></table>
<p><b>Piège :</b> devant un métier, on met <b>a</b> ou <b>an</b> : <i>She's <b>a</b> doctor. He's <b>an</b> engineer.</i> (en français : « elle est médecin »).</p>
<h4>Grammaire : poser une question</h4>
<table><tr><td>Who? / What?</td><td>Qui ? / Que, quoi ?</td></tr><tr><td>Where? / When?</td><td>Où ? / Quand ?</td></tr><tr><td>Why? — Because…</td><td>Pourquoi ? — Parce que…</td></tr>
<tr><td>How? / How old? / How often?</td><td>Comment ? / Quel âge ? / À quelle fréquence ?</td></tr><tr><td>Whose? / Which?</td><td>À qui ? / Lequel, laquelle ?</td></tr></table>
<p>Ordre : mot interrogatif + auxiliaire (do, does, did, is, are, can…) + sujet + verbe : <i>Where <b>does</b> your mum work?</i></p>
<ul><li><i>What does your father do? — He's a baker.</i> = Que fait ton père ? — Il est boulanger.</li><li><i>Why do you want to be a vet? — Because I love animals.</i> = Pourquoi veux-tu être vétérinaire ? — Parce que j'adore les animaux.</li></ul>`},
{n:27,p:4,v:"Les projets et le futur",g:"Le futur avec be going to",l:"Comprendre des projets",r:"Lire un texte sur des projets",t:"future|going|going|plans",lecon:`
<h4>Vocabulaire : parler de l'avenir</h4>
<table><tr><td>tomorrow / the day after tomorrow</td><td>demain / après-demain</td></tr><tr><td>next week / next summer / next year</td><td>la semaine prochaine / l'été prochain / l'an prochain</td></tr>
<tr><td>soon / later / one day</td><td>bientôt / plus tard / un jour</td></tr><tr><td>a plan / to decide / to hope</td><td>un projet / décider / espérer</td></tr></table>
<h4>Grammaire : be going to (aller faire)</h4>
<p><b>am / is / are + going to + verbe de base</b>. On l'emploie pour un <b>projet décidé</b> ou quelque chose qu'on voit arriver.</p>
<table><tr><td>affirmation</td><td><i>I'm going to visit London.</i></td></tr><tr><td>négation</td><td><i>She isn't going to come.</i></td></tr>
<tr><td>question</td><td><i>Are you going to play? — Yes, I am.</i></td></tr><tr><td>ce qu'on voit venir</td><td><i>Look at the clouds! It's going to rain.</i></td></tr></table>
<p><b>Piège :</b> ne pas oublier <b>be</b> : <i>I <b>am</b> going to…</i> (jamais « I going to »). Et « next » s'emploie sans « the » : <i>next Monday</i> = lundi prochain.</p>
<ul><li><i>We're going to have a party next Saturday.</i> = Nous allons faire une fête samedi prochain.</li><li><i>What are you going to do this summer?</i> = Qu'est-ce que tu vas faire cet été ?</li></ul>`},
{n:28,p:4,v:"Bilan de la période 4",g:"Bilan : le prétérit et going to",l:"Bilan d'écoute de la période 4",r:"Bilan de lecture de la période 4",t:"bilan:22-27|bilan:22-27|bilan:22-27|bilan:22-27",lecon:`
<h4>Bilan de la période 4</h4>
<table><tr><td>prétérit régulier</td><td>-ed : played, liked, studied, stopped</td></tr><tr><td>prétérit irrégulier</td><td>went, saw, ate, took, bought, made, had… (à savoir par cœur)</td></tr>
<tr><td>négation</td><td>didn't + base : I didn't see</td></tr><tr><td>question</td><td>Did + sujet + base : Did you see…? Where did you go?</td></tr>
<tr><td>be au passé</td><td>was / were, sans did</td></tr><tr><td>mots du passé</td><td>yesterday, last week, two days ago</td></tr>
<tr><td>going to</td><td>am/is/are going to + base : un projet</td></tr><tr><td>mots interrogatifs</td><td>who, what, where, when, why, how, which, whose</td></tr></table>
<ul><li><i>Last summer we went to the USA. Next summer we're going to visit Scotland.</i> = L'été dernier nous sommes allés aux États-Unis. L'été prochain, nous allons visiter l'Écosse.</li>
<li><i>Where did you buy your trainers?</i> = Où as-tu acheté tes baskets ?</li><li><i>I didn't like the film.</i> = Je n'ai pas aimé le film.</li></ul>`},
{n:29,p:5,v:"Les sentiments et le caractère",g:"Les pronoms compléments (me, him, her, us, them)",l:"Comprendre comment les gens se sentent",r:"Lire un message personnel",t:"feelings|objpron|feelings|feelings",lecon:`
<h4>Vocabulaire : les émotions et le caractère</h4>
<table><tr><td>happy / sad / angry / scared</td><td>heureux / triste / en colère / effrayé</td></tr><tr><td>tired / bored / excited / worried</td><td>fatigué / qui s'ennuie / très impatient / inquiet</td></tr>
<tr><td>kind / funny / shy / lazy</td><td>gentil / drôle / timide / paresseux</td></tr><tr><td>friendly / clever / brave</td><td>sympathique / intelligent / courageux</td></tr></table>
<h4>Grammaire : les pronoms compléments</h4>
<table><tr><td>I → me / you → you</td><td>me, moi / te, toi</td></tr><tr><td>he → him / she → her / it → it</td><td>le, lui / la, lui</td></tr><tr><td>we → us / they → them</td><td>nous / les, leur, eux</td></tr></table>
<p>Ils se placent <b>après</b> le verbe ou après une préposition : <i>I love <b>her</b>. Look at <b>them</b>! Come with <b>me</b>.</i></p>
<p><b>Pièges :</b> en français le pronom est avant le verbe (« je l'aime »), en anglais après (<i>I like him</i>). <i>Bored</i> = qui s'ennuie ; <i>boring</i> = ennuyeux. <i>Sensible</i> = raisonnable (sensible = <i>sensitive</i>).</p>
<ul><li><i>My grandma is very kind: I often help her.</i> = Ma grand-mère est très gentille : je l'aide souvent.</li><li><i>Can you call us tonight?</i> = Peux-tu nous appeler ce soir ?</li></ul>`},
{n:30,p:5,v:"La nature et l'environnement",g:"L'impératif et let's",l:"Comprendre des consignes",r:"Lire un texte sur la nature",t:"nature|imper|nature|nature",lecon:`
<h4>Vocabulaire : la nature</h4>
<table><tr><td>a tree / a flower / a forest</td><td>un arbre / une fleur / une forêt</td></tr><tr><td>a river / a lake / the sea / a beach</td><td>une rivière / un lac / la mer / une plage</td></tr>
<tr><td>rubbish / to recycle / to waste</td><td>les déchets / recycler / gaspiller</td></tr><tr><td>to protect / the planet / pollution</td><td>protéger / la planète / la pollution</td></tr></table>
<h4>Grammaire : donner un ordre, proposer</h4>
<table><tr><td>impératif</td><td>verbe de base, sans sujet : <i>Close the window. Turn off the light.</i></td></tr>
<tr><td>impératif négatif</td><td><b>Don't</b> + verbe : <i>Don't throw your rubbish on the ground.</i></td></tr>
<tr><td>proposer (allons…)</td><td><b>Let's</b> + verbe : <i>Let's go to the park!</i> — <i>Let's not</i> = ne… pas</td></tr></table>
<p>Pour être poli : ajoute <i>please</i> → <i>Please sit down.</i></p>
<p><b>Piège :</b> « Allons-y ! » = <i>Let's go!</i> (pas « We go! »). <i>Rubbish</i> est indénombrable : <i>some rubbish</i>.</p>
<ul><li><i>Don't waste water!</i> = Ne gaspille pas l'eau !</li><li><i>Let's plant a tree in the garden.</i> = Plantons un arbre dans le jardin.</li><li><i>Put your bottles in the green bin.</i> = Mets tes bouteilles dans la poubelle verte.</li></ul>`},
{n:31,p:5,v:"Les écrans et la technologie",g:"Révision : présent simple et présent continu",l:"Distinguer des sons proches",r:"Lire un texte sur les écrans",t:"tech|revpresent|sons|tech",lecon:`
<h4>Vocabulaire : les écrans</h4>
<table><tr><td>a computer / a tablet / a mobile phone</td><td>un ordinateur / une tablette / un téléphone portable</td></tr><tr><td>a screen / a keyboard / a website</td><td>un écran / un clavier / un site internet</td></tr>
<tr><td>to send a message / to download</td><td>envoyer un message / télécharger</td></tr><tr><td>to switch on / to switch off / to charge</td><td>allumer / éteindre / recharger</td></tr></table>
<h4>Grammaire : révision des deux présents</h4>
<table><tr><td>présent simple</td><td>habitude : <i>I send messages every day.</i> — <i>She doesn't play online.</i> — <i>Do you use a tablet?</i></td></tr>
<tr><td>présent continu</td><td>maintenant : <i>I'm sending a message.</i> — <i>He isn't listening.</i> — <i>What are you doing?</i></td></tr></table>
<p>Certains verbes restent presque toujours au présent simple, même maintenant : <b>like, love, hate, want, know, understand</b>. <i>I want a new phone</i> (pas « I'm wanting »).</p>
<h4>Prononciation : les sons pièges</h4>
<ul><li>i court / i long : <i>ship</i> (bateau) ≠ <i>sheep</i> (mouton) ; <i>live</i> ≠ <i>leave</i>.</li><li>th : <i>three</i> ≠ <i>tree</i> ; <i>think</i> ≠ <i>sink</i>.</li><li>h soufflé : <i>hair</i> (cheveux) ≠ <i>air</i> ; <i>hill</i> ≠ <i>ill</i>.</li></ul>`},
{n:32,p:5,v:"Les fêtes : Halloween, Bonfire Night, Pâques",g:"Révision : le prétérit",l:"Comprendre des fêtes racontées",r:"Lire un texte sur une fête",t:"festivals|revpast|festivals|festivals",lecon:`
<h4>Vocabulaire : les fêtes britanniques et américaines</h4>
<table><tr><td>Halloween (31st October)</td><td>trick or treat = « des bonbons ou un sort », a pumpkin = une citrouille</td></tr>
<tr><td>Bonfire Night (5th November)</td><td>a bonfire = un feu de joie, fireworks = un feu d'artifice (Guy Fawkes, 1605)</td></tr>
<tr><td>Pancake Day, Easter, Easter eggs</td><td>Mardi gras (crêpes), Pâques, les œufs de Pâques</td></tr><tr><td>St Patrick's Day (17th March)</td><td>la fête de l'Irlande (shamrock = trèfle)</td></tr></table>
<h4>Grammaire : révision du prétérit</h4>
<table><tr><td>be</td><td>was / were — wasn't / weren't — Were you…?</td></tr><tr><td>régulier</td><td>-ed : celebrated, carved, dressed up</td></tr>
<tr><td>irrégulier</td><td>went, ate, made, saw, had, bought…</td></tr><tr><td>négation / question</td><td>didn't + base ; Did + sujet + base ?</td></tr></table>
<p><b>Piège :</b> une seule marque de passé par phrase : <i>Did you <b>eat</b>?</i> / <i>I didn't <b>eat</b>.</i> / <i>I <b>ate</b>.</i></p>
<ul><li><i>On Halloween, we dressed up as ghosts and knocked on doors.</i> = Pour Halloween, nous nous sommes déguisés en fantômes et nous avons frappé aux portes.</li>
<li><i>Did you see the fireworks?</i> = As-tu vu le feu d'artifice ?</li><li><i>In 1605, Guy Fawkes tried to blow up Parliament.</i> = En 1605, Guy Fawkes a essayé de faire sauter le Parlement.</li></ul>`},
{n:33,p:5,v:"Les transports",g:"Révision : comparatifs et superlatifs",l:"Comprendre des annonces de transport",r:"Lire un texte sur les transports",t:"transport|revcompar|transport|transport",lecon:`
<h4>Vocabulaire : se déplacer</h4>
<table><tr><td>by bus / by train / by car / by bike</td><td>en bus / en train / en voiture / à vélo</td></tr><tr><td>on foot / to walk</td><td>à pied / marcher</td></tr>
<tr><td>the underground (the Tube) / a taxi / a boat</td><td>le métro (à Londres) / un taxi / un bateau</td></tr><tr><td>a ticket / a platform / to be late</td><td>un billet / un quai / être en retard</td></tr></table>
<p><b>Piège :</b> on dit <b>by</b> bus, <b>by</b> train… mais <b>on foot</b>.</p>
<h4>Grammaire : révision pour comparer</h4>
<table><tr><td>comparatif</td><td>faster than / more comfortable than / better than / worse than</td></tr>
<tr><td>superlatif</td><td>the fastest / the most comfortable / the best / the worst</td></tr><tr><td>égalité, infériorité</td><td>as fast as ; not as fast as (pas aussi rapide que) ; less expensive than</td></tr></table>
<p>Orthographe : big → bi<b>gg</b>er, hot → ho<b>tt</b>est ; easy → eas<b>ier</b> ; nice → nic<b>er</b>.</p>
<ul><li><i>The train is faster than the bus.</i> = Le train est plus rapide que le bus.</li><li><i>Cycling is the cheapest way to travel.</i> = Le vélo est le moyen le moins cher de voyager.</li><li><i>The Tube is the oldest underground in the world.</i> = Le métro de Londres est le plus ancien du monde.</li></ul>`},
{n:34,p:5,v:"Bilan de l'année (1) : périodes 1 et 2",g:"Bilan : les présents, can, must, there is",l:"Bilan d'écoute (1)",r:"Bilan de lecture (1)",t:"bilan:1-13|bilan:1-13|bilan:1-13|bilan:1-13",lecon:`
<h4>Bilan de l'année (1)</h4>
<table><tr><td>be / have got</td><td>I'm twelve. She has got green eyes.</td></tr><tr><td>présent simple</td><td>She plays. He doesn't play. Does he play?</td></tr>
<tr><td>adverbes de fréquence</td><td>I often…, she is always…</td></tr><tr><td>présent continu</td><td>They are playing now. What are you doing?</td></tr>
<tr><td>there is / there are</td><td>There's a garden. Are there any shops?</td></tr><tr><td>can / must</td><td>I can swim. You mustn't shout.</td></tr>
<tr><td>prépositions</td><td>next to, between, opposite, behind, in front of</td></tr></table>
<ul><li><i>Every Saturday my sister goes swimming, but today she's staying at home because it's raining.</i></li>
<li>= Tous les samedis ma sœur va nager, mais aujourd'hui elle reste à la maison parce qu'il pleut.</li></ul>
<p>Méthode : pour chaque phrase, demande-toi « habitude ou maintenant ? », « singulier ou pluriel ? », « he/she/it → -s ? ».</p>`},
{n:35,p:5,v:"Bilan de l'année (2) : périodes 3 et 4",g:"Bilan : quantités, comparer, le passé, going to",l:"Bilan d'écoute (2)",r:"Bilan de lecture (2)",t:"bilan:15-27|bilan:15-27|bilan:15-27|bilan:15-27",lecon:`
<h4>Bilan de l'année (2)</h4>
<table><tr><td>some / any, much / many</td><td>some bread, any eggs? How much milk? How many apples?</td></tr><tr><td>possessifs, 's</td><td>his / her / their ; Tom's bike</td></tr>
<tr><td>comparer</td><td>bigger than, more famous than, the best in the world</td></tr><tr><td>was / were</td><td>I was ill. Were you at home?</td></tr>
<tr><td>prétérit</td><td>played, went, didn't go, Did you go?</td></tr><tr><td>going to</td><td>I'm going to travel next summer.</td></tr><tr><td>questions</td><td>Where did you go? Why? Because…</td></tr></table>
<ul><li><i>Yesterday was the hottest day of the year, so we went to the beach. Tomorrow we're going to visit a museum.</i></li>
<li>= Hier, c'était le jour le plus chaud de l'année, alors nous sommes allés à la plage. Demain, nous allons visiter un musée.</li></ul>
<p>Méthode : repère le mot de temps (yesterday, now, every day, tomorrow) : il te dit quel temps employer.</p>`},
{n:36,p:5,v:"Défis de fin d'année",g:"Défis : toute la grammaire de l'année",l:"Défis d'écoute",r:"Défis de lecture",t:"bilan:1-33|bilan:1-33|bilan:1-33|bilan:1-33",lecon:`
<h4>Défis de fin d'année : les grands repères</h4>
<table><tr><td>passé</td><td>yesterday → I played / I went / I didn't go / Did you go?</td></tr><tr><td>présent habituel</td><td>every day → I play / she plays / she doesn't play</td></tr>
<tr><td>présent en cours</td><td>now → I'm playing / she's playing</td></tr><tr><td>futur (projet)</td><td>tomorrow → I'm going to play</td></tr>
<tr><td>capacité, règles</td><td>can, can't, must, mustn't</td></tr><tr><td>comparer</td><td>-er than / more … than / the -est / the most</td></tr></table>
<ul><li><i>I'm reading a book that I bought last week, and I'm going to finish it tonight.</i> = Je lis un livre que j'ai acheté la semaine dernière, et je vais le finir ce soir.</li>
<li><i>Have a great summer! See you in September!</i> = Passe un très bel été ! À septembre !</li></ul>
<p>Pour l'été : regarde un dessin animé en anglais avec les sous-titres en anglais, et chante tes chansons préférées en anglais.</p>`}
];
SEMAINES.forEach(s=>{const t=s.t.split("|");s.tag={v:t[0],g:t[1],l:t[2],r:t[3]};});

const JOURS=[
 {nom:"Lundi",mat:"v",min:10},
 {nom:"Mardi",mat:"g",min:10},
 {nom:"Mercredi",mat:"l",min:10},
 {nom:"Jeudi",mat:"g",min:10},
 {nom:"Vendredi",mat:"r",min:10},
 {nom:"Week-end",mat:"rev",min:15}
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
/* QCM : 4 choix au plus. accord:false car le contenu est en anglais. */
function qcm(enonce,bonne,fausses,expl){
  const vus=new Set([String(bonne)]),gardees=[];
  for(const x of fausses){const c=String(x);if(!vus.has(c)&&gardees.length<3){vus.add(c);gardees.push(x);}}
  const choix=melange([bonne,...gardees]);
  return {type:"qcm",enonce,choix,reponse:choix.indexOf(bonne),explication:expl,accord:false};
}
/* Formes contractées et formes pleines : toutes acceptées. */
const CONTR=[["don't","do not"],["doesn't","does not"],["didn't","did not"],["isn't","is not"],["aren't","are not"],["wasn't","was not"],["weren't","were not"],["can't","cannot"],["can't","can not"],["won't","will not"],["haven't","have not"],["hasn't","has not"],["mustn't","must not"],["shouldn't","should not"],["wouldn't","would not"],["couldn't","could not"],["I'm","I am"],["I've","I have"],["I'll","I will"],["I'd","I would"],["you're","you are"],["we're","we are"],["they're","they are"],["you've","you have"],["we've","we have"],["they've","they have"],["you'll","you will"],["he'll","he will"],["she'll","she will"],["we'll","we will"],["they'll","they will"],["it'll","it will"],["you'd","you would"],["he'd","he would"],["she'd","she would"],["we'd","we would"],["they'd","they would"],["what's","what is"],["where's","where is"],["there's","there is"]];
const echap=s=>s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
function formes(liste){
  const out=new Set(liste);
  for(let tour=0;tour<3;tour++)for(const s of [...out]){
    for(const [a,b] of CONTR){
      const ra=new RegExp("(^|[^a-z'])"+echap(a)+"(?![a-z'])","gi"),rb=new RegExp("(^|[^a-z'])"+echap(b)+"(?![a-z'])","gi");
      if(ra.test(s))out.add(s.replace(ra,"$1"+b));
      if(rb.test(s))out.add(s.replace(rb,"$1"+a));
    }
    if(out.size>60)break;
  }
  return [...out];
}
function saisie(enonce,reponses,expl){return {type:"saisie",enonce,reponse:formes(reponses),explication:expl,accord:false};}
/* Une question d'écoute : la tablette prononce « audio » (en anglais britannique). */
function ecoute(audio,enonce,bonne,fausses,expl){const q=qcm(enonce,bonne,fausses,expl);q.audio=audio;return q;}
function ecouteSaisie(audio,enonce,reponses,expl){const q=saisie(enonce,reponses,expl);q.audio=audio;return q;}
const sansArticle=s=>s.replace(/^(a|an|the|some|to) /i,"");
function variantes(en){const v=new Set();for(const x of en.split("|")){v.add(x);v.add(sansArticle(x));}return [...v];}
const premier=en=>en.split("|")[0];
const maj=s=>s[0].toUpperCase()+s.slice(1);

/* Les nombres en lettres (anglais britannique) */
const UNITES_EN=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
const DIZAINES_EN=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
function enLettres(n){
  if(n<20)return UNITES_EN[n];
  if(n<100)return DIZAINES_EN[Math.floor(n/10)]+(n%10?"-"+UNITES_EN[n%10]:"");
  if(n<1000){const h=Math.floor(n/100),r=n%100;return UNITES_EN[h]+" hundred"+(r?" and "+enLettres(r):"");}
  const m=Math.floor(n/1000),r=n%1000;return enLettres(m)+" thousand"+(r?(r<100?" and ":" ")+enLettres(r):"");
}
const ORD_EN=["","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth","twentieth"];
function ordinal(n){if(n<=20)return ORD_EN[n];if(n===30)return "thirtieth";const d=Math.floor(n/10);return DIZAINES_EN[d]+"-"+ORD_EN[n%10];}
function ordAbr(n){const s=(n%100>=11&&n%100<=13)?"th":({1:"st",2:"nd",3:"rd"})[n%10]||"th";return n+s;}
const MOIS_EN=["January","February","March","April","May","June","July","August","September","October","November","December"];
const MOIS_FR=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
const JOURS_MOIS=[31,29,31,30,31,30,31,31,30,31,30,31];

/* =========================================================
   3. LE VOCABULAIRE (anglais = français ; « | » sépare les variantes acceptées)
   ========================================================= */
const VOC_TXT={
school:"Hello|Hi=bonjour, salut;Goodbye|Bye=au revoir;Please=s'il te plaît;Thank you|Thanks=merci;Sorry=pardon, désolé;a pencil case=une trousse;a ruler=une règle;a rubber|an eraser=une gomme;a pencil=un crayon à papier;a pen=un stylo;a schoolbag|a school bag=un cartable;an exercise book|a notebook=un cahier;a desk=un bureau d'élève, un pupitre;a board=un tableau;a classroom=une salle de classe;a pupil|a student=un(e) élève;the playground=la cour de récréation;a pencil sharpener|a sharpener=un taille-crayon;glue=la colle;scissors=des ciseaux",
family:"a mother|a mum=une mère;a father|a dad=un père;a brother=un frère;a sister=une sœur;a grandmother|a grandma|a granny=une grand-mère;a grandfather|a grandpa=un grand-père;an aunt=une tante;an uncle=un oncle;a cousin=un cousin, une cousine;parents=les parents;a son=un fils;a daughter=une fille (l'enfant de quelqu'un);a baby=un bébé;a twin=un jumeau, une jumelle;an only child=un enfant unique;a husband=un mari;a wife=une épouse",
body:"hair=les cheveux;eyes=les yeux;a nose=un nez;a mouth=une bouche;an ear=une oreille;a head=une tête;an arm=un bras;a hand=une main;a leg=une jambe;a foot=un pied;feet=des pieds;teeth=les dents;tall=grand (de taille);short=petit (de taille), court;thin|slim=mince;curly=bouclé;straight=raide (cheveux);fair|blond|blonde=blond;dark=brun, foncé;glasses=des lunettes;a beard=une barbe;a face=un visage",
routine:"to get up=se lever;to wake up=se réveiller;to have a shower=prendre une douche;to have breakfast=prendre le petit-déjeuner;to brush your teeth|to brush my teeth|to brush one's teeth=se brosser les dents;to get dressed=s'habiller;to go to bed=aller se coucher;to do your homework|to do my homework|to do homework=faire ses devoirs;to have lunch=déjeuner;to have dinner=dîner;to wash=se laver;in the morning=le matin;in the evening=le soir;at night=la nuit;every day=tous les jours;to go home=rentrer à la maison",
subjects:"Maths=les maths;French=le français (la matière);History=l'histoire;Geography=la géographie;Science=les sciences;Art=les arts plastiques;Music=la musique;PE=l'EPS (le sport au collège);a timetable=un emploi du temps;break|break time=la récréation;a lesson=un cours, une leçon;Monday=lundi;Tuesday=mardi;Wednesday=mercredi;Thursday=jeudi;Friday=vendredi;Saturday=samedi;Sunday=dimanche;the weekend=le week-end",
hobbies:"to read=lire;to draw=dessiner;to dance=danser;to sing=chanter;to play video games=jouer aux jeux vidéo;to play chess=jouer aux échecs;to watch TV=regarder la télévision;to listen to music=écouter de la musique;to go to the cinema=aller au cinéma;to play the guitar=jouer de la guitare;to play the piano=jouer du piano;to cook=faire la cuisine;a comic|a comic book=une bande dessinée;free time=le temps libre;a hobby=un passe-temps;to paint=peindre",
house:"the kitchen=la cuisine (la pièce);the living room|the sitting room|the lounge=le salon;the bedroom=la chambre;the bathroom=la salle de bains;the garden=le jardin;the stairs=l'escalier;a bed=un lit;a sofa=un canapé;a fridge=un réfrigérateur;a chair=une chaise;a lamp=une lampe;a window=une fenêtre;a door=une porte;a wall=un mur;the floor=le sol;a shelf=une étagère;a cupboard=un placard;a flat=un appartement;upstairs=en haut, à l'étage;downstairs=en bas, au rez-de-chaussée;a roof=un toit",
town:"a library=une bibliothèque;a bookshop=une librairie;a bakery|a baker's=une boulangerie;a chemist's|a pharmacy=une pharmacie;a post office=un bureau de poste;a bank=une banque;a museum=un musée;a cinema=un cinéma;a park=un parc;a church=une église;a street=une rue;a bridge=un pont;a square=une place;a supermarket=un supermarché;a swimming pool=une piscine;a town hall=une mairie;to turn left=tourner à gauche;to turn right=tourner à droite;to go straight on=aller tout droit;a town=une ville",
sports:"a team=une équipe;a match=un match;to win=gagner;to lose=perdre;a ball=un ballon, une balle;to swim=nager;to run=courir;to jump=sauter;to ski=skier;horse riding=l'équitation;cycling=le cyclisme;sailing=la voile;a player=un joueur;a race=une course;a goal=un but;to throw=lancer;to catch=attraper;to climb=grimper, escalader;a stadium=un stade;gymnastics=la gymnastique",
clothes:"a T-shirt|a tee-shirt=un tee-shirt;a jumper|a sweater=un pull;a coat=un manteau;a jacket=une veste;trousers=un pantalon;jeans=un jean;shorts=un short;a skirt=une jupe;a dress=une robe;a shirt=une chemise;a cap=une casquette;a hat=un chapeau;shoes=des chaussures;trainers=des baskets;boots=des bottes;socks=des chaussettes;a scarf=une écharpe;gloves=des gants;a tie=une cravate;to wear=porter (un vêtement);pyjamas=un pyjama",
weather:"sunny=ensoleillé;cloudy=nuageux;windy=venteux (il y a du vent);rainy=pluvieux;foggy=brumeux (il y a du brouillard);snow=la neige;rain=la pluie;the sun=le soleil;a cloud=un nuage;a storm=une tempête, un orage;hot=chaud;cold=froid;warm=doux, tiède;spring=le printemps;summer=l'été;autumn=l'automne;winter=l'hiver;the weather=le temps (la météo);a rainbow=un arc-en-ciel;ice=la glace (l'eau gelée)",
uk:"the United Kingdom|the UK=le Royaume-Uni;England=l'Angleterre;Scotland=l'Écosse;Wales=le pays de Galles;Northern Ireland=l'Irlande du Nord;Great Britain=la Grande-Bretagne;a castle=un château fort;the King=le roi;the Queen=la reine;a flag=un drapeau;Christmas=Noël;a present|a gift=un cadeau;a Christmas tree=un sapin de Noël;Father Christmas|Santa Claus|Santa=le père Noël;a stocking=une chaussette de Noël;a cracker=un diablotin (papillote qui claque);Boxing Day=le 26 décembre (lendemain de Noël);a uniform=un uniforme;a double-decker|a double-decker bus=un bus à impériale",
food:"bread=le pain;butter=le beurre;cheese=le fromage;milk=le lait;water=l'eau;an apple=une pomme;a banana=une banane;an egg=un œuf;a carrot=une carotte;chips=des frites;crisps=des chips;chicken=le poulet;fish=le poisson (à manger);meat=la viande;rice=le riz;pasta=les pâtes;a tomato=une tomate;a potato=une pomme de terre;a strawberry=une fraise;orange juice=le jus d'orange;tea=le thé;sugar=le sucre;jam=la confiture;a cake=un gâteau;ice cream=une glace (dessert);vegetables=les légumes;fruit=les fruits;hungry=qui a faim;thirsty=qui a soif",
shop:"a bottle=une bouteille;a packet=un paquet;a box=une boîte;a slice=une tranche;a piece=un morceau;a loaf of bread|a loaf=une miche de pain;a can|a tin=une canette, une boîte de conserve;cheap=bon marché;expensive=cher;a pound=une livre (la monnaie);money=l'argent;a price=un prix;to buy=acheter;to pay=payer;a shop assistant=un vendeur, une vendeuse;a shopping list=une liste de courses;a customer=un client, une cliente;change=la monnaie (rendue);a shop=un magasin;a market=un marché;a bag=un sac",
animals:"a dog=un chien;a cat=un chat;a rabbit=un lapin;a horse=un cheval;a cow=une vache;a sheep=un mouton;a pig=un cochon;a hen=une poule;a duck=un canard;a mouse=une souris;a bird=un oiseau;a lion=un lion;an elephant=un éléphant;a monkey=un singe;a snake=un serpent;a bear=un ours;a tiger=un tigre;a fox=un renard;a frog=une grenouille;a spider=une araignée;a tortoise|a turtle=une tortue;a pet=un animal de compagnie;a tail=une queue;a wing=une aile;a goldfish=un poisson rouge;a squirrel=un écureuil",
dates:"January=janvier;February=février;March=mars;April=avril;May=mai;June=juin;July=juillet;August=août;September=septembre;October=octobre;November=novembre;December=décembre;a birthday=un anniversaire;a month=un mois;a year=une année;a week=une semaine;a day=un jour;today=aujourd'hui;first=premier;second=deuxième;third=troisième;a party=une fête (entre amis)",
countries:"Ireland=l'Irlande;Spain=l'Espagne;Germany=l'Allemagne;Italy=l'Italie;China=la Chine;Japan=le Japon;India=l'Inde;Australia=l'Australie;Spanish=espagnol(e);German=allemand(e);Italian=italien(ne);Chinese=chinois(e);Japanese=japonais(e);Scottish=écossais(e);Welsh=gallois(e);Irish=irlandais(e);English=anglais(e);a language=une langue (qu'on parle);a country=un pays;the world=le monde;a capital=une capitale",
health:"a headache=un mal de tête;a stomach ache=un mal de ventre;a sore throat=un mal de gorge;a cold=un rhume;a temperature|a fever=de la fièvre;ill|sick=malade;a doctor=un médecin;a hospital=un hôpital;medicine=des médicaments;to hurt=faire mal;a toothache=un mal de dents;a dentist=un dentiste;to cough=tousser;to sneeze=éternuer;healthy=en bonne santé, sain;to rest=se reposer;a back=un dos;a knee=un genou;a finger=un doigt;a shoulder=une épaule;a neck=un cou",
pasttime:"yesterday=hier;last night=hier soir;last week=la semaine dernière;last year=l'année dernière;two days ago=il y a deux jours;the day before yesterday=avant-hier;then=ensuite;after that=après cela;finally=finalement, enfin;at first=au début;this morning=ce matin;last weekend=le week-end dernier;once upon a time=il était une fois;suddenly=soudain",
verbs:"to open=ouvrir;to close|to shut=fermer;to carry=porter (transporter);to push=pousser;to pull=tirer;to fall=tomber;to break=casser;to build=construire;to find=trouver;to forget=oublier;to remember=se souvenir;to help=aider;to look for=chercher;to wait=attendre;to try=essayer;to send=envoyer;to give=donner;to take=prendre;to bring=apporter;to sit down=s'asseoir;to stand up=se mettre debout;to shout=crier;to laugh=rire;to cry=pleurer;to sleep=dormir;to drink=boire;to eat=manger;to speak=parler;to know=savoir, connaître;to think=penser;to say=dire;to see=voir;to hear=entendre;to understand=comprendre;to write=écrire;to go=aller;to come=venir;to make=fabriquer",
holidays:"a holiday|holidays=des vacances;the seaside=le bord de mer;the countryside=la campagne;a hotel=un hôtel;a campsite=un camping;a tent=une tente;a suitcase=une valise;a passport=un passeport;a map=une carte (géographique);a postcard=une carte postale;sunglasses=des lunettes de soleil;a souvenir=un souvenir (un objet);to travel=voyager;a trip=un voyage, une excursion;to visit=visiter;abroad=à l'étranger;sun cream|suncream=la crème solaire",
usa:"the United States|the USA|the US=les États-Unis;American=américain(e);a state=un État;the Stars and Stripes=le drapeau américain;Independence Day=la fête de l'Indépendance (4 juillet);a turkey=une dinde;a skyscraper=un gratte-ciel;the Statue of Liberty=la statue de la Liberté;the White House=la Maison-Blanche;the President=le président;a yellow cab|a cab=un taxi jaune (à New York);a dollar=un dollar;a desert=un désert;Native Americans=les Amérindiens;a high school=un lycée (aux États-Unis)",
jobs:"a teacher=un professeur;a nurse=un infirmier, une infirmière;a farmer=un agriculteur;a baker=un boulanger;a cook|a chef=un cuisinier;a firefighter|a fireman=un pompier;a police officer|a policeman|a policewoman=un policier;a vet=un vétérinaire;an engineer=un ingénieur;a journalist=un journaliste;a pilot=un pilote;a singer=un chanteur;an actor=un acteur;a waiter=un serveur;a hairdresser=un coiffeur;a builder=un ouvrier du bâtiment;a mechanic=un mécanicien;a job=un métier, un emploi;to work=travailler",
future:"tomorrow=demain;the day after tomorrow=après-demain;next week=la semaine prochaine;next year=l'année prochaine;next summer=l'été prochain;soon=bientôt;later=plus tard;tonight=ce soir;a plan=un projet;to decide=décider;to hope=espérer;to learn=apprendre;in the future=dans le futur;a dream=un rêve;to become=devenir",
feelings:"happy=heureux;sad=triste;angry=en colère;scared|afraid|frightened=effrayé, qui a peur;tired=fatigué;bored=qui s'ennuie;excited=très impatient, surexcité;worried=inquiet;kind=gentil;funny=drôle;shy=timide;lazy=paresseux;friendly=sympathique, amical;clever|smart=intelligent;brave=courageux;proud=fier;surprised=surpris;lonely=seul (qui se sent seul);boring=ennuyeux",
nature:"a tree=un arbre;a flower=une fleur;a forest|a wood=une forêt;a river=une rivière;a lake=un lac;the sea=la mer;a beach=une plage;a mountain=une montagne;a hill=une colline;a field=un champ;grass=l'herbe;a leaf=une feuille (d'arbre);rubbish=les déchets;a bin=une poubelle;to recycle=recycler;to waste=gaspiller;to protect=protéger;the planet=la planète;pollution=la pollution;an island=une île;a plant=une plante",
tech:"a computer=un ordinateur;a tablet=une tablette;a mobile phone|a mobile|a phone|a smartphone=un téléphone portable;a screen=un écran;a keyboard=un clavier;a website=un site internet;to download=télécharger;to send a message|to text=envoyer un message;to switch on|to turn on=allumer;to switch off|to turn off=éteindre;to charge=recharger;a password=un mot de passe;online=en ligne;a games console|a console=une console de jeux;to click=cliquer;headphones=un casque (audio);a camera=un appareil photo",
festivals:"a pumpkin=une citrouille;a ghost=un fantôme;a witch=une sorcière;a costume=un déguisement;to dress up=se déguiser;trick or treat=des bonbons ou un sort;sweets=des bonbons;a bonfire=un feu de joie;fireworks=un feu d'artifice;Easter=Pâques;an Easter egg=un œuf de Pâques;a pancake=une crêpe;a candle=une bougie;to celebrate=fêter, célébrer;a shamrock=un trèfle;a parade=un défilé;a card=une carte de vœux",
transport:"a bus=un bus;a train=un train;a car=une voiture;a bike|a bicycle=un vélo;on foot=à pied;the underground|the Tube=le métro (de Londres);a taxi=un taxi;a boat=un bateau;a plane=un avion;a ticket=un billet, un ticket;a platform=un quai (de gare);a station|a train station|a railway station=une gare;a bus stop=un arrêt de bus;to be late=être en retard;to drive=conduire;to ride a bike=faire du vélo (se déplacer);a motorbike=une moto;a lorry|a truck=un camion;an airport=un aéroport;a seat=un siège;a road=une route;traffic=la circulation"
};
const VOC=[];
for(const [t,txt] of Object.entries(VOC_TXT))for(const p of txt.split(";")){const [en,fr]=p.split("=");VOC.push({t,en,fr});}

/* =========================================================
   4. LA GRAMMAIRE
   G(étiquette, phrase, bonne réponse, "mauvaises|réponses", explication) : QCM
   S(étiquette, consigne, [réponses acceptées], explication) : saisie
   ========================================================= */
const GRAM=[];
const G=(t,q,b,f,e)=>GRAM.push({t,q,b,f:f.split("|"),e});
const S=(t,q,r,e)=>GRAM.push({t,q,r,e});

G("be","I ___ eleven years old.","am","is|are|have","On dit « I am eleven » : l'âge se dit avec be (j'ai onze ans).");
G("be","My sister ___ twelve.","is","are|am|has","My sister = she → is.");
G("be","We ___ from Lyon.","are","is|am|be","we → are.");
G("be","Tom and Léa ___ in my class.","are","is|am|be","Tom and Léa = they → are.");
G("be","___ you French?","Are","Is|Am|Do","Question avec be : on inverse le sujet et le verbe → Are you…?");
G("be","Is your dad a teacher? — No, he ___.","isn't","aren't|doesn't|not","Réponse courte : No, he isn't.");
G("be","The cat ___ under the table.","is","are|am|be","the cat = it → is.");
G("be","I ___ not hungry.","am","is|are|do","I am not = I'm not.");
G("be","My friends ___ very funny.","are","is|am|be","my friends = they → are.");
G("be","How old ___ your brother?","is","are|has|does","How old is…? = Quel âge a… ?");
G("be","Comment dit-on « J'ai douze ans » ?","I'm twelve.","I have twelve.|I have twelve years.|I'm twelve years.","L'âge : be + nombre (ou « I'm twelve years old »).");
G("be","They ___ at school today: it's Sunday!","aren't","isn't|are|don't","Négation de are : aren't (are not).");
G("be","___ she your sister? — Yes, she is.","Is","Are|Am|Does","she → Is she…?");
G("be","Where ___ you from? — I'm from Belgium.","are","is|do|am","Where are you from? = D'où viens-tu ?");

G("havegot","I ___ got a brother and a sister.","have","has|am|having","I have got ('ve got).");
G("havegot","She ___ got long hair.","has","have|is|haves","he/she/it → has got.");
G("havegot","___ you got a pet?","Have","Has|Are|Do","Have you got…?");
G("havegot","___ your sister got a bike?","Has","Have|Is|Does","your sister = she → Has… got?");
G("havegot","Have you got a cat? — No, I ___.","haven't","hasn't|don't|am not","Réponse courte : No, I haven't.");
G("havegot","Has Tom got a phone? — Yes, he ___.","has","have|is|got","Réponse courte : Yes, he has.");
G("havegot","We ___ got a garden: we live in a flat.","haven't","hasn't|aren't|don't","we → haven't got.");
G("havegot","My grandparents ___ got a big dog.","have","has|is|are","my grandparents = they → have got.");
G("havegot","The rabbit ___ got long ears.","has","have|is|are","the rabbit = it → has got.");
G("havegot","Comment dit-on « Elle n'a pas de frère » ?","She hasn't got a brother.","She haven't got a brother.|She isn't got a brother.|She hasn't a got brother.","she → hasn't got.");
S("havegot","Mets à la forme négative : « I have got a dog. »",["I haven't got a dog"],"I haven't got a dog (I have not got a dog).");
S("havegot","Mets à la forme négative : « He has got a sister. »",["He hasn't got a sister"],"He hasn't got a sister (he has not got).");
S("havegot","Complète : « ___ you got a pencil? »",["Have"],"Have you got…?");

G("adj","Choisis la phrase correcte.","I've got a black cat.","I've got a cat black.|I've got a blacks cat.|I've got black a cat.","L'adjectif se place avant le nom.");
G("adj","Choisis la phrase correcte.","She has got two big dogs.","She has got two bigs dogs.|She has got two dogs bigs.|She has got two dogs big.","L'adjectif est invariable et se place avant le nom.");
G("adj","Choisis la phrase correcte.","He has got short brown hair.","He has got brown short hair.|He has got hair short brown.|He has got short brown hairs.","La longueur avant la couleur ; hair (les cheveux) est singulier.");
G("adj","Her hair ___ long and curly.","is","are|have|has","hair est singulier en anglais : her hair is…");
G("adj","My brother ___ tall and thin.","is","has|have|are","Pour la taille, on utilise be : he is tall.");
G("adj","My mother ___ got blue eyes.","has","is|have|are","Pour les yeux, on utilise have got : she has got blue eyes.");
G("adj","Le contraire de « tall » (pour une personne) est :","short","long|big|old","tall ≠ short (grand ≠ petit).");
G("adj","Le contraire de « long hair » est :","short hair","small hair|little hair|tall hair","long ≠ short pour les cheveux.");
G("adj","Comment dit-on « des yeux verts » ?","green eyes","eyes green|greens eyes|eyes greens","Adjectif avant le nom, sans -s.");
G("adj","Comment dit-on « une petite maison blanche » ?","a small white house","a white small house|a house small white|a smalls white house","La taille avant la couleur.");
G("adj","Le contraire de « old » (pour une personne) est :","young","new|small|short","old ≠ young (vieux ≠ jeune). Pour un objet : old ≠ new.");
G("adj","Comment dit-on « Il a les cheveux roux » ?","He has got red hair.","He has got orange hair.|He is red hair.|He has got hair red.","Les cheveux roux se disent red hair.");
G("adj","What does she look like? — She ___ tall and she has got dark hair.","is","has|does|have","What does she look like? = À quoi ressemble-t-elle ? Taille → be.");

G("ps_aff","My dad ___ to work by car.","goes","go|gos|going","he → goes (-es après -o).");
G("ps_aff","They ___ football on Wednesday.","play","plays|playes|playing","they → base verbale, sans -s.");
G("ps_aff","Léa ___ TV after school.","watches","watchs|watch|watching","-ch → -es : watches.");
G("ps_aff","My cat ___ all day.","sleeps","sleep|sleepes|sleeping","the cat = it → -s.");
G("ps_aff","I ___ breakfast at seven.","have","has|haves|having","I → have.");
G("ps_aff","She ___ English and Spanish.","studies","studys|study|studyes","consonne + y → -ies.");
G("ps_aff","He ___ his homework in his bedroom.","does","do|dos|doing","do → does à la 3e personne.");
G("ps_aff","My brother ___ a red bike.","has","have|haves|is","have → has avec he/she/it.");
G("ps_aff","We ___ to school at eight.","go","goes|going|gone","we → go.");
G("ps_aff","The baby ___ a lot.","cries","crys|cry|cryes","consonne + y → -ies : cries.");
G("ps_aff","Tom ___ the dishes after dinner.","washes","washs|wash|washing","-sh → -es.");
G("ps_aff","Quelle phrase décrit une habitude ?","I get up at seven every day.","I'm getting up now.|Look! I'm getting up.|I'm getting up at the moment.","Habitude → présent simple.");
G("ps_aff","Mrs Smith ___ maths at my school.","teaches","teachs|teach|teaching","-ch → -es.");
G("ps_aff","My parents ___ in Bordeaux.","live","lives|living|lifes","my parents = they → live.");

G("ps_negq","I ___ like broccoli.","don't","doesn't|not|isn't","I → don't + base.");
G("ps_negq","She ___ like spiders.","doesn't","don't|isn't|not","she → doesn't + base.");
G("ps_negq","___ you play the piano?","Do","Does|Are|Is","you → Do…?");
G("ps_negq","___ your sister play tennis?","Does","Do|Is|Has","your sister = she → Does…?");
G("ps_negq","Does he like pizza? — Yes, he ___.","does","do|is|likes","Réponse courte : Yes, he does.");
G("ps_negq","Do they live in London? — No, they ___.","don't","doesn't|aren't|not","Réponse courte : No, they don't.");
G("ps_negq","Choisis la phrase correcte.","He doesn't play rugby.","He doesn't plays rugby.|He don't play rugby.|He not plays rugby.","Après doesn't, le verbe perd son -s.");
G("ps_negq","Choisis la phrase correcte.","Does she speak German?","Does she speaks German?|Do she speak German?|Is she speak German?","Après does, la base verbale.");
G("ps_negq","Where ___ you live?","do","does|are|is","Where do you live? = Où habites-tu ?");
G("ps_negq","What time ___ the film start?","does","do|is|are","the film = it → does.");
G("ps_negq","We ___ go to school on Sunday.","don't","doesn't|aren't|not","we → don't.");
G("ps_negq","My dog ___ eat vegetables.","doesn't","don't|isn't|not","my dog = it → doesn't.");
S("ps_negq","Mets à la forme négative : « She likes Maths. »",["She doesn't like Maths"],"She doesn't like Maths : doesn't + like (sans -s).");
S("ps_negq","Mets à la forme négative : « They play basketball. »",["They don't play basketball"],"They don't play basketball.");
S("ps_negq","Mets à la forme négative : « He watches TV. »",["He doesn't watch TV"],"He doesn't watch TV : le -es disparaît.");
S("ps_negq","Complète la question : « ___ he like chocolate? »",["Does"],"he → Does he like…?");

G("freq","Choisis la phrase correcte.","I often play chess.","I play often chess.|I often am play chess.|Often I chess play.","L'adverbe de fréquence se place avant le verbe.");
G("freq","Choisis la phrase correcte.","She is always happy.","She always happy is.|She is happy always is.|Always she happy is.","Avec be, l'adverbe se place après : she is always…");
G("freq","« Jamais » se dit :","never","always|often|sometimes","never = jamais (0 %).");
G("freq","« Souvent » se dit :","often","usually|never|always","often = souvent.");
G("freq","« D'habitude » se dit :","usually","always|sometimes|never","usually = d'habitude.");
G("freq","« Parfois » se dit :","sometimes","often|always|never","sometimes = parfois.");
G("freq","Quel adverbe signifie 100 % ?","always","usually|often|sometimes","always = toujours (100 %).");
G("freq","Comment dit-on « Je ne mange jamais de viande » ?","I never eat meat.","I don't never eat meat.|I eat never meat.|I never don't eat meat.","never suffit : pas de don't avec never.");
G("freq","Comment dit-on « Il est souvent en retard » ?","He is often late.","He often late is.|He is late often is.|Often he late is.","Avec be, l'adverbe va après : he is often late.");
G("freq","Tom ___ to bed at nine: every day!","always goes","goes always|always go|is always go","always avant le verbe ; he → goes.");
G("freq","My parents ___ football on TV.","sometimes watch","watch sometimes|sometimes watches|are sometimes watch","sometimes avant le verbe ; they → watch.");
G("freq","How often do you go swimming? — ___ a week.","Twice","Two|Second|Double","once = une fois ; twice = deux fois ; three times = trois fois.");
G("freq","« How often…? » veut dire :","À quelle fréquence… ?","Combien de… ?|Depuis quand… ?|À quelle heure… ?","How often = à quelle fréquence.");

G("thereis","___ a big tree in the garden.","There is","There are|It is|They are","Un seul arbre → there is.");
G("thereis","___ three bedrooms upstairs.","There are","There is|They are|It has","Pluriel → there are.");
G("thereis","___ a bathroom downstairs? — Yes, there is.","Is there","Are there|There is|Has it","Question au singulier : Is there…?");
G("thereis","___ any chairs in the kitchen?","Are there","Is there|There are|Have there","Question au pluriel : Are there…?");
G("thereis","There ___ a garage. We park in the street.","isn't","aren't|don't|hasn't","Négation au singulier : there isn't.");
G("thereis","There ___ any shops near my house.","aren't","isn't|don't|haven't","Négation au pluriel : there aren't any.");
G("thereis","Comment dit-on « Il y a un chat sur le lit » ?","There's a cat on the bed.","It has a cat on the bed.|There are a cat on the bed.|They are a cat on the bed.","il y a = there is (there's).");
G("thereis","Are there any eggs? — No, there ___.","aren't","isn't|don't|haven't","Réponse courte : No, there aren't.");
G("thereis","There ___ a lot of books on the shelf.","are","is|have|has","a lot of books = pluriel → there are.");
G("thereis","How many rooms ___ in your house?","are there","there are|is there|there is","Question : How many… are there?");
G("thereis","There ___ some milk in the fridge.","is","are|have|has","milk est indénombrable → there is.");

G("prep","The cat is ___ the bed. (sous)","under","on|in|behind","under = sous.");
G("prep","My books are ___ my bag. (dans)","in","on|under|at","in = dans.");
G("prep","The lamp is ___ the table. (sur)","on","in|under|between","on = sur.");
G("prep","The bank is ___ the bakery and the café. (entre)","between","next to|opposite|behind","between … and … = entre … et ….");
G("prep","The park is ___ the school. (à côté de)","next to","in front of|under|between","next to = à côté de.");
G("prep","The bus stop is ___ the cinema. (en face de)","opposite","in front|next|behind of","opposite = en face de.");
G("prep","The garden is ___ the house. (derrière)","behind","in front of|between|under","behind = derrière.");
G("prep","There's a car ___ the house. (devant)","in front of","behind|opposite|in the front","in front of = devant.");
G("prep","« Tourne à gauche » se dit :","Turn left.","Turn right.|Go straight on.|Turn the left.","left = gauche ; right = droite.");
G("prep","« Va tout droit » se dit :","Go straight on.","Turn right.|Go right on.|Go to the right.","straight on = tout droit.");
G("prep","Que veut dire « Take the second street on the right » ?","Prends la deuxième rue à droite.","Prends la deuxième rue à gauche.|Prends la première rue à droite.|Traverse la deuxième rue.","second = deuxième ; on the right = à droite.");
G("prep","« The cat is on the roof. » Où est le chat ?","sur le toit","sous le toit|derrière le toit|dans le toit","on = sur.");
G("prep","Comment dit-on « N'entre pas ! » ?","Don't go in!","Not go in!|Go not in!|You don't go in!","Impératif négatif : Don't + verbe.");

G("can","I ___ swim very well.","can","cans|can to|am can","can + base verbale.");
G("can","She ___ play the violin.","can","cans|can to|does can","can est invariable : she can (sans -s).");
G("can","___ you ride a horse?","Can","Do|Are|Have","Question : Can you…?");
G("can","Can he cook? — No, he ___.","can't","doesn't|isn't|don't","Réponse courte : No, he can't.");
G("can","Penguins ___ fly.","can't","don't can|aren't|cannot to","Les manchots ne savent pas voler : can't.");
G("can","Choisis la phrase correcte.","My brother can speak Spanish.","My brother cans speak Spanish.|My brother can speaks Spanish.|My brother can to speak Spanish.","can + base, pas de -s, pas de to.");
G("can","Que veut dire « Can I open the window? » ?","Est-ce que je peux ouvrir la fenêtre ?","Je ne peux pas ouvrir la fenêtre.|Ouvre la fenêtre !|Je dois ouvrir la fenêtre.","Can I…? = demander la permission.");
G("can","Comment dit-on « Je ne sais pas nager » ?","I can't swim.","I don't can swim.|I can't to swim.|I not can swim.","can't + base.");
G("can","Fish ___ breathe under water.","can","can't|cans|do","Les poissons peuvent respirer sous l'eau.");
G("can","Can your dog jump? — Yes, it ___.","can","does|is|cans","Réponse courte : Yes, it can.");
G("can","« Pouvez-vous m'aider ? » se dit :","Can you help me?","Do you can help me?|Can you to help me?|Are you can help me?","Can + sujet + base ?");

G("cont","Look! The baby ___.","is sleeping","sleeps|are sleeping|sleeping","Look! → action en cours : is + -ing.");
G("cont","I ___ my homework at the moment.","am doing","do|doing|is doing","I am doing (présent continu).");
G("cont","They ___ in the garden now.","are playing","is playing|play|playing","they → are + -ing.");
G("cont","What ___ you doing?","are","do|is|does","What are you doing? = Que fais-tu (en ce moment) ?");
G("cont","She isn't ___ TV: she's reading.","watching","watch|watches|watched","isn't + -ing.");
G("cont","___ he wearing a coat? — Yes, he is.","Is","Does|Are|Has","Is he wearing…?");
G("cont","Comment dit-on « Je porte un pull bleu (aujourd'hui) » ?","I'm wearing a blue jumper.","I'm wear a blue jumper.|I wearing a blue jumper.|I'm wearring a blue jumper.","Action en ce moment : I'm wearing.");
G("cont","Listen! Someone ___ the piano.","is playing","plays|play|are playing","Listen! → présent continu.");
G("cont","My friends ___ for the bus.","are waiting","is waiting|waiting|are wait","they → are + -ing.");

G("simplecont","I usually ___ to school by bus.","go","am going|goes|going","usually → habitude → présent simple.");
G("simplecont","Look! It ___.","is snowing","snows|snow|snowing","Look! → maintenant → présent continu.");
G("simplecont","It often ___ in Scotland.","rains","is raining|rain|raining","often → habitude → présent simple.");
G("simplecont","Be quiet! The baby ___.","is sleeping","sleeps|sleep|sleeping","Be quiet! → maintenant.");
G("simplecont","My mum ___ a uniform at work every day.","wears","is wearing|wear|wearing","every day → présent simple.");
G("simplecont","Today I ___ a T-shirt because it's hot.","am wearing","wear|wears|wearing","today, en ce moment → présent continu.");
G("simplecont","What ___ you usually do on Saturdays?","do","are|does|is","usually → question au présent simple avec do.");
G("simplecont","What ___ you doing now?","are","do|does|is","now → présent continu.");
G("simplecont","Quelle phrase parle d'une action en cours ?","She's riding her bike right now.","She rides her bike every day.|She never rides her bike.|She often rides her bike.","right now → présent continu.");
G("simplecont","Quelle phrase parle d'une habitude ?","We have pizza every Friday.","We're having pizza now.|Look, we're having pizza!|We're having pizza at the moment.","every Friday → habitude.");
G("simplecont","I ___ this song! It's great.","love","am loving|loving|loves","love, like, want, know restent au présent simple.");
G("simplecont","He ___ a new phone.","wants","is wanting|want|wanting","want ne se met pas au présent continu.");
G("simplecont","Quel mot annonce plutôt le présent continu ?","at the moment","every day|usually|on Mondays","at the moment = en ce moment.");

G("must","You ___ wear a helmet on a bike. It's the rule.","must","mustn't|musts|must to","Obligation → must.");
G("must","You ___ run in the corridor. It's dangerous!","mustn't","must|don't must|musts","Interdiction → mustn't.");
G("must","Pupils ___ be on time.","must","musts|must to|are must","must + base.");
G("must","She ___ go to the dentist tomorrow.","must","musts|must to|is must","must est invariable.");
G("must","Que veut dire « You mustn't touch the paintings » ?","Il est interdit de toucher les tableaux.","Tu dois toucher les tableaux.|Tu peux toucher les tableaux.|Touche les tableaux !","mustn't = interdiction.");
G("must","Comment dit-on « Tu dois faire tes devoirs » ?","You must do your homework.","You must to do your homework.|You musts do your homework.|You do must your homework.","must + base verbale.");
G("must","In the library, you ___ shout.","mustn't","must|musts|must to","À la bibliothèque, on ne doit pas crier.");
G("must","At school, you ___ listen to the teacher.","must","mustn't|musts|must to","Obligation : must.");
G("must","Quel panneau correspond à « You mustn't swim here » ?","Baignade interdite","Baignade obligatoire|Piscine ouverte|Cours de natation","mustn't = c'est interdit.");
G("must","In the UK, cars ___ drive on the left.","must","mustn't|musts|must to","Au Royaume-Uni, on roule à gauche : c'est obligatoire.");
G("must","Choisis la phrase correcte.","We mustn't forget our tickets.","We don't must forget our tickets.|We mustn't to forget our tickets.|We not must forget our tickets.","mustn't + base.");

G("someany","I'd like ___ water, please.","some","any|a|many","Demande, phrase affirmative → some.");
G("someany","There isn't ___ milk in the fridge.","any","some|a|an","Phrase négative → any.");
G("someany","Have you got ___ brothers?","any","some|a|an","Question → any.");
G("someany","I've got ___ apple in my bag.","an","a|any|many","apple : dénombrable, commence par un son voyelle → an.");
G("someany","We need ___ bread for the sandwiches.","some","a|an|many","bread est indénombrable : some bread (pas « a bread »).");
G("someany","Would you like ___ orange juice?","some","a|an|many","Pour proposer poliment : Would you like some…?");
G("someany","Lequel est indénombrable (pas de pluriel) ?","rice","an egg|a banana|a carrot","rice (le riz) ne se compte pas.");
G("someany","Lequel est indénombrable ?","water","a bottle|a tomato|an apple","water ne se compte pas : some water.");
G("someany","Lequel est dénombrable ?","an egg","milk|bread|cheese","On compte les œufs : one egg, two eggs.");
G("someany","There aren't ___ tomatoes left.","any","some|a|an","Négatif → any.");
G("someany","Comment dit-on « J'ai acheté du fromage » ?","I bought some cheese.","I bought any cheese.|I bought cheeses.|I bought a cheeses.","du = some ; cheese est indénombrable.");
G("someany","Is there ___ sugar in my tea?","any","a|an|many","Question → any.");
G("someany","Quel pluriel est correct ?","two sandwiches","two sandwichs|two sandwich|two sandwiche","-ch → -es.");

G("muchmany","How ___ apples do you want?","many","much|lot|more","apples (dénombrable pluriel) → how many.");
G("muchmany","How ___ milk is there?","much","many|lot|few","milk (indénombrable) → how much.");
G("muchmany","How ___ is this T-shirt? — It's £12.","much","many|price|cost","Le prix : How much is it?");
G("muchmany","There are a ___ of people in the shop.","lot","many|much|lots","a lot of = beaucoup de.");
G("muchmany","How ___ brothers have you got?","many","much|lot|old","brothers → how many.");
G("muchmany","How ___ money have you got?","much","many|lot|lots","money est indénombrable → how much.");
G("muchmany","How ___ bottles of water do we need?","many","much|lot|more","bottles → how many.");
G("muchmany","Comment dit-on « Combien coûtent ces chaussures ? » ?","How much are these shoes?","How many are these shoes?|How much is these shoes?|How many cost these shoes?","Prix → how much ; shoes est pluriel → are.");
G("muchmany","« a packet of crisps » veut dire :","un paquet de chips","une bouteille de chips|un kilo de frites|une boîte de frites","packet = paquet ; crisps = chips.");
G("muchmany","« a bottle of water » veut dire :","une bouteille d'eau","un verre d'eau|une boîte d'eau|un litre d'eau","bottle = bouteille.");
G("muchmany","« £4.50 » se dit :","four pounds fifty","four fifty pounds|four pounds and fifteen|forty-five pounds","Les livres, puis les pence : four pounds fifty.");
G("muchmany","There is a lot of ___ in the bag.","sugar","apples|carrots|eggs","There is a lot of + indénombrable : sugar.");
G("muchmany","« a slice of cake » veut dire :","une part de gâteau","un gâteau entier|un paquet de gâteaux|un morceau de pain","slice = tranche, part.");

G("poss","Léa and ___ brother are in the garden.","her","his|its|their","Léa est une fille → her (son frère).");
G("poss","Tom and ___ mother go shopping.","his","her|its|their","Tom est un garçon → his (sa mère).");
G("poss","We love ___ dog.","our","us|we|ours","we → our.");
G("poss","They live with ___ grandparents.","their","there|they|them","they → their (leur).");
G("poss","My computer is old. ___ screen is broken.","Its","It's|His|Her","Pour une chose : its (sans apostrophe). It's = it is.");
G("poss","« Le vélo de Tom » se dit :","Tom's bike","the bike of Tom|Toms bike|bike's Tom","Génitif : Tom's bike.");
G("poss","« La voiture de mes parents » se dit :","my parents' car","my parent's car|my parents's car|the car's my parents","Pluriel en -s → juste l'apostrophe : parents'.");
G("poss","« La chambre de ma sœur » se dit :","my sister's bedroom","my sisters bedroom|the bedroom's my sister|my sister bedroom's","Possesseur + 's + objet.");
G("poss","Is this ___ pen, Emma? — Yes, it's mine.","your","you|yours|you're","you → your.");
G("poss","Mr and Mrs Brown sold ___ house.","their","there|they're|his","Mr and Mrs Brown = they → their.");
G("poss","Whose bag is this? — It's ___.","Sam's","Sam|Sams|of Sam","Whose…? — It's Sam's (c'est celui de Sam).");
G("poss","The tree is losing ___ leaves.","its","it's|his|their","the tree = it → its.");
S("poss","Complète : « Anna loves ___ cat. » (son)",["her"],"Anna est une fille → her.");
S("poss","Complète : « Paul is cleaning ___ bike. » (son)",["his"],"Paul est un garçon → his.");

G("compar","An elephant is ___ than a horse.","bigger","more big|biggest|biger","big → bigger (g doublé).");
G("compar","Maths is ___ than Music for me.","more difficult","difficulter|most difficult|more difficulter","Adjectif long → more … than.");
G("compar","My sister is ___ than me.","older","more old|oldest|olders","old → older than.");
G("compar","This film is ___ than the book.","better","gooder|more good|best","good → better.");
G("compar","Today the weather is ___ than yesterday.","worse","badder|more bad|worst","bad → worse.");
G("compar","Cheetahs are faster ___ lions.","than","that|as|then","« que » dans une comparaison = than.");
G("compar","My bag is as heavy ___ yours.","as","than|like|that","as … as = aussi … que.");
G("compar","English is ___ than German for me.","easier","more easy|easyer|easiest","easy → easier (y → ier).");
G("compar","Comment dit-on « Mon frère est plus grand que moi » ?","My brother is taller than me.","My brother is more tall than me.|My brother is taller that me.|My brother is tallest than me.","tall → taller than.");
G("compar","A Ferrari is ___ than a bike.","more expensive","expensiver|most expensive|more expensiver","Adjectif long → more expensive.");
G("compar","Summer is ___ than winter.","hotter","hoter|more hot|hottest","hot → hotter (t doublé).");
G("compar","Comment dit-on « Le train est aussi rapide que la voiture » ?","The train is as fast as the car.","The train is as fast than the car.|The train is so fast that the car.|The train is fast as the car.","Égalité : as … as.");

G("superl","The blue whale is ___ animal in the world.","the biggest","the bigger|the most big|biggest of","big → the biggest.");
G("superl","Everest is ___ mountain in the world.","the highest","the higher|the most high|highest of","high → the highest.");
G("superl","This is ___ book in the library.","the most interesting","the interestingest|the more interesting|most interesting of","Adjectif long → the most …");
G("superl","She is the best player ___ the team.","in","of|than|at","Superlatif + in + lieu ou groupe : the best in the team.");
G("superl","It's ___ day of my life!","the best","the goodest|the better|the most good","good → the best.");
G("superl","It was ___ film of the year.","the worst","the baddest|the worse|the most bad","bad → the worst.");
G("superl","Tom is ___ boy in the class.","the funniest","the funnyest|the most funny|the funnier","funny → the funniest.");
G("superl","Comment dit-on « C'est la ville la plus célèbre d'Écosse » ?","It's the most famous city in Scotland.","It's the famousest city in Scotland.|It's the more famous city of Scotland.|It's most famous city in Scotland.","famous est long → the most famous ; « de » + lieu → in.");
G("superl","The Nile is ___ river in Africa.","the longest","the longer|the most long|longest than","long → the longest.");
G("superl","Which is ___ planet: Mercury, Earth or Jupiter?","the largest","the larger|the most large|largest than","large → the largest (c'est Jupiter).");
G("superl","Le superlatif de « beautiful » est :","the most beautiful","the beautifullest|the more beautiful|the beautifulest","Adjectif long → the most beautiful.");
G("superl","Le superlatif de « happy » est :","the happiest","the happyest|the most happy|the happier","happy → the happiest.");

G("was","I ___ ill yesterday.","was","were|am|is","I → was.");
G("was","We ___ at the cinema last night.","were","was|are|did","we → were.");
G("was","My grandparents ___ in Spain last week.","were","was|are|been","they → were.");
G("was","___ you at home yesterday?","Were","Was|Did|Are","you → Were you…?");
G("was","Was she tired? — Yes, she ___.","was","were|did|is","Réponse courte : Yes, she was.");
G("was","Were they happy? — No, they ___.","weren't","wasn't|didn't|aren't","Réponse courte : No, they weren't.");
G("was","The film ___ very good. I didn't like it.","wasn't","weren't|didn't|isn't","the film = it → wasn't.");
G("was","There ___ a lot of people at the party.","were","was|are|had","a lot of people = pluriel → there were.");
G("was","Comment dit-on « Je suis né en 2014 » ?","I was born in 2014.","I am born in 2014.|I were born in 2014.|I born in 2014.","« naître » au passé : I was born.");
G("was","Comment dit-on « Il y avait un chat dans le jardin » ?","There was a cat in the garden.","There were a cat in the garden.|It was a cat in the garden.|There had a cat in the garden.","il y avait (singulier) = there was.");
G("was","Where ___ you last Saturday?","were","was|did|are","you → were.");
G("was","Quel mot montre qu'on parle du passé ?","yesterday","tomorrow|now|every day","yesterday = hier.");

G("pastreg","Yesterday I ___ football with my friends.","played","play|plaied|playing","play → played.");
G("pastreg","Last night we ___ a film.","watched","watch|watches|watching","watch → watched.");
G("pastreg","She ___ English for two years.","studied","studyed|studies|study","study → studied (y → ied).");
G("pastreg","The bus ___ in front of the school.","stopped","stoped|stops|stopping","stop → stopped (p doublé).");
G("pastreg","We ___ our grandparents last weekend.","visited","visit|visitted|visiting","visit → visited.");
G("pastreg","It ___ all day yesterday.","rained","rains|rain|raining","rain → rained.");
G("pastreg","I ___ the cake. It was delicious!","liked","likeed|like|likes","like → liked (on ajoute seulement -d).");
G("pastreg","Choisis la phrase au passé.","They danced all night.","They dance all night.|They are dancing all night.|They're going to dance all night.","danced = prétérit.");
G("pastreg","Quel mot accompagne le prétérit ?","last week","next week|tomorrow|now","last week = la semaine dernière (passé).");
G("pastreg","Comment dit-on « il y a trois jours » ?","three days ago","ago three days|there are three days|since three days","durée + ago.");
G("pastreg","Mr Brown ___ his car last Sunday.","washed","washes|wash|washing","last Sunday → prétérit : washed.");
G("pastreg","My little brother ___ because he was sad.","cried","cryed|cries|crying","cry → cried.");

G("pastirr1","Yesterday I ___ to the cinema.","went","goed|go|gone","go → went (irrégulier).");
G("pastirr1","We ___ pizza last night.","ate","eated|eat|eaten","eat → ate.");
G("pastirr1","She ___ a lot of photos in London.","took","taked|take|taken","take → took.");
G("pastirr1","I ___ a fox in the garden this morning.","saw","seed|see|seen","see → saw.");
G("pastirr1","They ___ a cake for my birthday.","made","maked|make|maden","make → made.");
G("pastirr1","He ___ a new jumper at the market.","bought","buyed|buy|boughted","buy → bought.");
G("pastirr1","I ___ my homework after dinner.","did","doed|do|done","do → did.");
G("pastirr1","We ___ a great time at the party.","had","haved|have|has","have → had.");
G("pastirr1","She ___ a letter to her grandmother.","wrote","writed|write|written","write → wrote.");
G("pastirr1","My friends ___ to my house on Saturday.","came","comed|come|comes","come → came.");
G("pastirr1","« went » est le prétérit de :","go","want|wait|win","go → went.");
G("pastirr1","« thought » est le prétérit de :","think","thank|throw|teach","think → thought.");
G("pastirr1","Last summer I ___ my best friend at the swimming pool.","met","meeted|meet|mate","meet → met.");

G("pastirr2","They ___ a big house near the river.","built","builded|build|builted","build → built.");
G("pastirr2","Our team ___ the match!","won","winned|win|wan","win → won.");
G("pastirr2","I ___ my keys at school.","lost","losed|lose|loosed","lose → lost.");
G("pastirr2","The film ___ at eight o'clock.","began","beginned|begin|begined","begin → began.");
G("pastirr2","He ___ off his bike.","fell","falled|fall|felt","fall → fell (et feel → felt).");
G("pastirr2","We ___ to New York last summer.","flew","flied|fly|flyed","fly → flew.");
G("pastirr2","She ___ me a funny story.","told","telled|tell|talled","tell → told.");
G("pastirr2","I ___ a strange noise in the night.","heard","heared|hear|hearded","hear → heard.");
G("pastirr2","My dad ___ his old car.","sold","selled|sell|sould","sell → sold.");
G("pastirr2","The cat ___ a mouse.","caught","catched|catch|cought","catch → caught.");
G("pastirr2","I ___ my lunch box at home.","forgot","forgetted|forget|forgat","forget → forgot.");
G("pastirr2","« brought » est le prétérit de :","bring","buy|break|brush","bring → brought ; buy → bought.");
G("pastirr2","« felt » est le prétérit de :","feel","fall|fill|fly","feel → felt ; fall → fell.");

G("pastnegq","I ___ go to school yesterday: I was ill.","didn't","don't|wasn't|not","Négation au passé : didn't + base.");
G("pastnegq","___ you see the match last night?","Did","Do|Were|Was","Question au passé : Did + sujet + base.");
G("pastnegq","Choisis la phrase correcte.","She didn't like the film.","She didn't liked the film.|She don't liked the film.|She not liked the film.","didn't + base (like, pas liked).");
G("pastnegq","Choisis la phrase correcte.","Did you buy a souvenir?","Did you bought a souvenir?|Do you bought a souvenir?|Were you buy a souvenir?","Did + base.");
G("pastnegq","Did they go to Spain? — No, they ___.","didn't","don't|weren't|went","Réponse courte : No, they didn't.");
G("pastnegq","Did he enjoy his holiday? — Yes, he ___.","did","does|was|enjoyed","Réponse courte : Yes, he did.");
G("pastnegq","Where ___ you go last summer?","did","do|were|was","Where did you go…?");
G("pastnegq","What did you ___ in London?","see","saw|seen|seeing","Après did : la base verbale.");
G("pastnegq","We ___ stay in a hotel: we went camping.","didn't","weren't|don't|haven't","didn't + base.");
G("pastnegq","___ you tired after the trip?","Were","Did|Was|Do","Avec be : pas de did → Were you…?");
G("pastnegq","Comment dit-on « Je n'ai pas vu tes lunettes » ?","I didn't see your glasses.","I didn't saw your glasses.|I don't saw your glasses.|I wasn't see your glasses.","didn't + see.");
S("pastnegq","Mets à la forme négative : « We went to the beach. »",["We didn't go to the beach"],"We didn't go : didn't + base (go).");
S("pastnegq","Mets à la forme négative : « She bought a dress. »",["She didn't buy a dress"],"She didn't buy a dress.");
S("pastnegq","Complète la question : « ___ you have a good time? »",["Did"],"Question au passé : Did.");

G("wh","___ do you live? — In Nantes.","Where","When|What|Who","Where = où.");
G("wh","___ is your birthday? — In May.","When","Where|Who|Why","When = quand.");
G("wh","___ is your favourite singer? — Ed Sheeran.","Who","Where|When|Why","Who = qui (une personne).");
G("wh","___ do you like English? — Because it's fun.","Why","How|What|When","Why = pourquoi ; réponse : Because…");
G("wh","___ old are you?","How","What|Who|Which","How old…? = Quel âge… ?");
G("wh","___ does your mum do? — She's a nurse.","What","Who|Where|How","What does she do? = Que fait-elle (comme métier) ?");
G("wh","___ often do you go swimming?","How","What|When|Why","How often = à quelle fréquence.");
G("wh","___ bag is this? — It's Tom's.","Whose","Who|Who's|Where","Whose = à qui.");
G("wh","___ colour is your bike?","What","How|Who|Where","What colour…? = De quelle couleur… ?");
G("wh","Choisis la question correcte.","Where does your father work?","Where your father works?|Where does your father works?|Where works your father?","Mot interrogatif + does + sujet + base.");
G("wh","Choisis la question correcte.","What time did you get up?","What time you got up?|What time did you got up?|What time got you up?","What time + did + sujet + base.");
G("wh","___ much is this cap?","How","What|Which|Who","How much = combien (prix).");
G("wh","___ do you go to school? — By bus.","How","What|Why|Where","How = comment.");
G("wh","« Which » veut dire :","lequel, laquelle (parmi un choix)","qui|pourquoi|où","Which one? = Lequel ?");

G("going","I ___ going to visit my aunt next week.","am","is|are|do","I am going to…");
G("going","She is going ___ a cake.","to make","make|making|to making","going to + base verbale.");
G("going","They ___ going to play tennis tomorrow.","are","is|am|do","they → are going to.");
G("going","___ you going to watch the match?","Are","Do|Is|Did","Question : Are you going to…?");
G("going","He ___ going to come: he's ill.","isn't","doesn't|aren't|not","Négation : isn't going to.");
G("going","Look at those black clouds! It ___ rain.","is going to","goes to|is going|going to","On voit ce qui va arriver : it's going to rain.");
G("going","Choisis la phrase correcte.","We're going to travel to Italy.","We going to travel to Italy.|We're going travel to Italy.|We're go to travel to Italy.","be + going to + base.");
G("going","Comment dit-on « Je vais acheter un jeu » ?","I'm going to buy a game.","I go to buy a game.|I'm going buy a game.|I'm going to bought a game.","be going to + base.");
G("going","Quel mot annonce le futur ?","next summer","last summer|yesterday|two days ago","next summer = l'été prochain.");
G("going","What ___ you going to do this weekend?","are","do|is|did","What are you going to do…?");
G("going","Is she going to sing? — Yes, she ___.","is","does|going|did","Réponse courte : Yes, she is.");
S("going","Complète avec going to : « My parents ___ (buy) a new car. »",["are going to buy","'re going to buy","My parents are going to buy"],"they → are going to buy.");
S("going","Complète avec going to : « I ___ (play) football tomorrow. »",["am going to play","'m going to play","I am going to play"],"I am going to play.");

G("objpron","I like Mrs Smith. I often talk to ___.","her","she|hers|him","she → her (pronom complément).");
G("objpron","Where is Tom? I can't see ___.","him","he|his|her","he → him.");
G("objpron","These are my cousins. I love ___.","them","they|their|there","they → them.");
G("objpron","Can you help ___? I'm lost.","me","I|my|mine","I → me.");
G("objpron","We're at the park. Come with ___!","us","we|our|ours","we → us.");
G("objpron","This is my new phone. Do you like ___?","it","him|its|it's","Une chose → it.");
G("objpron","Comment dit-on « Je l'aime bien » (en parlant de Léa) ?","I like her.","I her like.|I like she.|I like hers.","Le pronom complément va après le verbe : I like her.");
G("objpron","Comment dit-on « Regarde-les ! » ?","Look at them!","Look at they!|Them look at!|Look at their!","Look at + them.");
G("objpron","Mr Jones is very kind. Everybody likes ___.","him","he|his|her","Mr Jones = he → him.");
G("objpron","Give ___ the ball, please! (à moi)","me","I|my|mine","Give me… = Donne-moi…");
G("objpron","Que veut dire « bored » ?","qui s'ennuie","ennuyeux|occupé|fatigué","bored = qui s'ennuie ; boring = ennuyeux.");
G("objpron","This film is so ___! I'm falling asleep.","boring","bored|bore|boredom","boring = ennuyeux (pour la chose qui ennuie).");

G("imper","« Ferme la porte, s'il te plaît » :","Close the door, please.","You close the door, please.|Closing the door, please.|To close the door, please.","Impératif : le verbe seul, sans sujet.");
G("imper","« Ne gaspille pas l'eau ! » :","Don't waste water!","Not waste water!|No waste water!|You don't waste water!","Impératif négatif : Don't + verbe.");
G("imper","« Allons au parc ! » :","Let's go to the park!","We go to the park!|Let's going to the park!|Let us to go to the park!","Let's + base = proposer (allons…).");
G("imper","___ throw your rubbish on the ground!","Don't","Not|No|Doesn't","Impératif négatif : Don't.");
G("imper","Let's ___ a tree in the garden!","plant","to plant|planting|plants","Let's + base verbale.");
G("imper","Que veut dire « Turn off the lights when you leave » ?","Éteins les lumières quand tu pars.","Allume les lumières quand tu pars.|Tourne les lumières quand tu pars.|Laisse les lumières allumées quand tu pars.","turn off = éteindre ; turn on = allumer.");
G("imper","Que veut dire « Don't forget your umbrella! » ?","N'oublie pas ton parapluie !","Oublie ton parapluie !|Tu as oublié ton parapluie !|Prends mon parapluie !","Don't forget = n'oublie pas.");
G("imper","« Recyclons nos bouteilles ! » :","Let's recycle our bottles!","We recycle our bottles!|Let's recycling our bottles!|Recycle we our bottles!","Let's + base.");
G("imper","Choisis la consigne correcte.","Put your bottles in the green bin.","You putting your bottles in the green bin.|To put your bottles in the green bin.|Puts your bottles in the green bin.","Impératif = base verbale.");
G("imper","« Ne parlons pas fort » :","Let's not talk loudly.","Let's not to talk loudly.|Let's don't talking loudly.|We not talk loudly.","Let's not + base.");
G("imper","« Sit down, please » veut dire :","Assieds-toi, s'il te plaît.","Lève-toi, s'il te plaît.|Tais-toi, s'il te plaît.|Viens ici, s'il te plaît.","sit down = s'asseoir ; stand up = se mettre debout.");

/* Les verbes : présent simple, -ing, prétérit */
const V_PS=[["play","plays","football"],["watch","watches","TV in the evening"],["go","goes","to school by bus"],["have","has","breakfast at seven"],["study","studies","English"],["wash","washes","the dishes"],["finish","finishes","school at five"],["tidy","tidies","the living room"],["catch","catches","the bus"],["fix","fixes","old bikes"],["carry","carries","a heavy bag"],["eat","eats","an apple"],["read","reads","comics"],["swim","swims","in the pool"],["buy","buys","bread"],["enjoy","enjoys","music"],["try","tries","new food"],["miss","misses","the bus"],["fly","flies","to London"],["teach","teaches","Maths"],["do","does","the shopping"],["walk","walks","the dog"]];
const SUJETS=[["He",1],["She",1],["My brother",1],["Emma",1],["Our teacher",1],["My cousin",1],["I",0],["You",0],["We",0],["They",0],["My parents",0]];
const ING=[["swim","swimming"],["run","running"],["sit","sitting"],["write","writing"],["dance","dancing"],["make","making"],["play","playing"],["read","reading"],["ride","riding"],["get","getting"],["stop","stopping"],["take","taking"],["come","coming"],["shop","shopping"],["study","studying"],["watch","watching"],["cut","cutting"],["have","having"],["drive","driving"],["put","putting"],["listen","listening"],["wear","wearing"]];
const REG=[["play","played","jouer"],["watch","watched","regarder"],["stop","stopped","arrêter"],["study","studied","étudier"],["like","liked","aimer"],["dance","danced","danser"],["travel","travelled","voyager"],["carry","carried","porter"],["visit","visited","visiter"],["want","wanted","vouloir"],["need","needed","avoir besoin de"],["walk","walked","marcher"],["talk","talked","parler, bavarder"],["cook","cooked","cuisiner"],["clean","cleaned","nettoyer"],["open","opened","ouvrir"],["jump","jumped","sauter"],["arrive","arrived","arriver"],["live","lived","habiter"],["love","loved","adorer"],["try","tried","essayer"],["plan","planned","prévoir"],["enjoy","enjoyed","apprécier"],["start","started","commencer"],["finish","finished","finir"],["help","helped","aider"],["listen","listened","écouter"],["rain","rained","pleuvoir"],["shop","shopped","faire les courses"],["cry","cried","pleurer"]];
/* Les irréguliers : les 27 premiers sont ceux de la semaine 23 ; tous (55) en semaine 25. */
const IRREG=[["be","was / were","être"],["have","had","avoir"],["do","did","faire"],["go","went","aller"],["come","came","venir"],["see","saw","voir"],["eat","ate","manger"],["drink","drank","boire"],["make","made","fabriquer, faire"],["take","took","prendre"],["get","got","obtenir, devenir"],["give","gave","donner"],["buy","bought","acheter"],["say","said","dire"],["write","wrote","écrire"],["read","read","lire"],["run","ran","courir"],["swim","swam","nager"],["sleep","slept","dormir"],["sit","sat","s'asseoir"],["think","thought","penser"],["know","knew","savoir, connaître"],["find","found","trouver"],["meet","met","rencontrer"],["leave","left","partir, quitter"],
["begin","began","commencer"],["break","broke","casser"],["bring","brought","apporter"],["build","built","construire"],["catch","caught","attraper"],["choose","chose","choisir"],["cost","cost","coûter"],["cut","cut","couper"],["draw","drew","dessiner"],["drive","drove","conduire"],["fall","fell","tomber"],["feel","felt","ressentir"],["fly","flew","voler (dans les airs)"],["forget","forgot","oublier"],["hear","heard","entendre"],["lose","lost","perdre"],["pay","paid","payer"],["put","put","mettre"],["ride","rode","monter (à vélo, à cheval)"],["sell","sold","vendre"],["send","sent","envoyer"],["sing","sang","chanter"],["speak","spoke","parler"],["spend","spent","dépenser, passer (du temps)"],["teach","taught","enseigner"],["tell","told","raconter, dire"],["understand","understood","comprendre"],["wear","wore","porter (un vêtement)"],["win","won","gagner"],["stand","stood","être debout"]];
const ADJ=[["tall","taller","the tallest"],["small","smaller","the smallest"],["big","bigger","the biggest"],["hot","hotter","the hottest"],["thin","thinner","the thinnest"],["old","older","the oldest"],["young","younger","the youngest"],["fast","faster","the fastest"],["slow","slower","the slowest"],["long","longer","the longest"],["short","shorter","the shortest"],["cheap","cheaper","the cheapest"],["nice","nicer","the nicest"],["large","larger","the largest"],["easy","easier","the easiest"],["happy","happier","the happiest"],["funny","funnier","the funniest"],["heavy","heavier","the heaviest"],["busy","busier","the busiest"],["pretty","prettier","the prettiest"],["expensive","more expensive","the most expensive"],["beautiful","more beautiful","the most beautiful"],["interesting","more interesting","the most interesting"],["dangerous","more dangerous","the most dangerous"],["difficult","more difficult","the most difficult"],["popular","more popular","the most popular"],["famous","more famous","the most famous"],["good","better","the best"],["bad","worse","the worst"]];
const POSS=[["I","my"],["you","your"],["he","his"],["she","her"],["it","its"],["we","our"],["they","their"]];

const GG={
  ps_aff(){const v=pioche(V_PS),s=pioche(SUJETS),f=s[1]?v[1]:v[0];
    return saisie(`Mets « ${v[0]} » au présent simple : ${s[0]} usually ___ ${v[2]}.`,[f,`${s[0]} usually ${f} ${v[2]}`],s[1]?`${s[0]} = he/she → on ajoute -s : ${f}.`:`Avec ${s[0]}, le verbe ne change pas : ${f}.`);},
  ps_negq(){const v=pioche(V_PS),s=pioche(SUJETS);
    if(alea(0,1)){const aux=s[1]?"doesn't":"don't";return saisie(`Mets à la forme négative : « ${s[0]} ${s[1]?v[1]:v[0]} ${v[2]}. »`,[`${s[0]} ${aux} ${v[0]} ${v[2]}`],`${s[0]} ${aux} ${v[0]} ${v[2]}. Après ${aux}, le verbe reste à la base.`);}
    const aux=s[1]?"Does":"Do",suj=/^(He|She|You|We|They|My|Our)\b/.test(s[0])?s[0][0].toLowerCase()+s[0].slice(1):s[0];
    return qcm(`Complète la question : « ___ ${suj} ${v[0]} ${v[2]}? »`,aux,[aux==="Do"?"Does":"Do","Is","Are"],`${s[0]} → ${aux}, puis la base verbale (${v[0]}).`);},
  cont(){if(alea(0,1)){const v=pioche(ING);return saisie(`Écris la forme en -ing de « ${v[0]} ».`,[v[1]],`${v[0]} → ${v[1]}.${/(mm|nn|tt|pp|gg)ing$/.test(v[1])?" La consonne finale est doublée.":/e$/.test(v[0])?" Le e muet tombe.":""}`);}
    const v=pioche(V_PS.filter(x=>!["have","do","enjoy","finish","miss"].includes(x[0]))),s=pioche(SUJETS),ing=ING.find(x=>x[0]===v[0]);const fi=ing?ing[1]:v[0].replace(/e$/,"")+"ing";
    const be=s[0]==="I"?"am":s[1]?"is":"are",rep=[`${be} ${fi}`,`${s[0]} ${be} ${fi}`];if(["He","She"].includes(s[0]))rep.push(`${s[0]}'s ${fi}`);
    return saisie(`Mets « ${v[0]} » au présent continu : ${s[0]} ___ ${v[2]} right now.`,rep,`Présent continu : ${be} + ${fi}.`);},
  pastreg(){const v=pioche(REG);
    if(alea(0,2))return saisie(`Donne le prétérit de « ${v[0]} » (${v[2]}).`,[v[1]],`${v[0]} → ${v[1]}.${/(pp|ll)ed$/.test(v[1])?" La consonne finale est doublée.":/ied$/.test(v[1])?" consonne + y → -ied.":""}`);
    const faux=/(.)\1ed$/.test(v[1])?v[1].replace(/(.)\1ed$/,"$1ed"):/ied$/.test(v[1])?v[0]+"ed":/e$/.test(v[0])?v[0]+"ed":v[0]+v[0].slice(-1)+"ed";
    return qcm(`Quel est le prétérit de « ${v[0]} » ?`,v[1],[v[0]+"s",v[0]+"ing",faux].filter(x=>x!==v[1]),`${v[0]} → ${v[1]}.`);},
  pastirr1(){return GG._irr(IRREG.slice(0,25));},
  pastirr2(){return GG._irr(IRREG);},
  _irr(liste){const v=pioche(liste.filter(x=>x[0]!=="be"));const k=alea(1,3);
    if(k===1)return saisie(`Donne le prétérit de « ${v[0]} » (${v[2]}).`,[v[1]],`${v[0]} → ${v[1]} : verbe irrégulier, à savoir par cœur.`);
    if(k===2){const autres=melange(liste.filter(x=>x[0]!==v[0]&&x[1]!==v[1])).slice(0,3).map(x=>x[0]);return qcm(`« ${v[1]} » est le prétérit de quel verbe ?`,v[0],autres,`${v[0]} (${v[2]}) → ${v[1]}.`);}
    return qcm(`Quel est le prétérit de « ${v[0]} » ?`,v[1],[v[0]+"ed",v[0]+"s",melange(liste.filter(x=>x[1]!==v[1]))[0][1]],`${v[0]} → ${v[1]} (verbe irrégulier).`);},
  compar(){const a=pioche(ADJ);return saisie(`Donne le comparatif de « ${a[0]} » (plus … que).`,[a[1],a[1]+" than"],`${a[0]} → ${a[1]} than.${a[1].startsWith("more")?" Adjectif long : more + adjectif.":["better","worse"].includes(a[1])?" Comparatif irrégulier.":""}`);},
  superl(){const a=pioche(ADJ);return saisie(`Donne le superlatif de « ${a[0]} » (le plus …).`,[a[2],a[2].replace(/^the /,"")],`${a[0]} → ${a[2]}.${a[2].includes("most")?" Adjectif long : the most + adjectif.":["the best","the worst"].includes(a[2])?" Superlatif irrégulier.":""}`);},
  poss(){const p=pioche(POSS);return qcm(`Quel est le déterminant possessif qui correspond à « ${p[0]} » ?`,p[1],POSS.filter(x=>x[1]!==p[1]).map(x=>x[1]).sort(()=>Math.random()-.5),`${p[0]} → ${p[1]}. (I → my, you → your, he → his, she → her, it → its, we → our, they → their)`);}
};
const ALIAS_G={revpresent:["ps_aff","ps_negq","cont","simplecont","freq"],revpast:["was","pastreg","pastirr1","pastnegq","pastirr2"],revcompar:["compar","superl"]};
function exoGram(tag){
  if(ALIAS_G[tag])tag=pioche(ALIAS_G[tag]);
  if(GG[tag]&&alea(0,2)===0)return GG[tag]();
  const f=GRAM.filter(x=>x.t===tag),x=pioche(f.length?f:GRAM);
  if(x.r)return saisie(x.q,x.r,x.e);
  return qcm(x.q.includes("___")?`Complète : ${x.q}`:x.q,x.b,x.f,x.e);
}

/* =========================================================
   5. L'ÉCOUTE (la tablette prononce le texte « audio »)
   L(étiquette, audio, question, bonne réponse, "mauvaises|réponses", explication)
   ========================================================= */
const LIST=[];
const L=(t,a,q,b,f,e)=>LIST.push({t,a,q,b,f:f.split("|"),e});

L("intro","Hi! My name's Oliver. I'm twelve and I'm from Manchester.","Quel âge a Oliver ?","12 ans","11 ans|13 ans|20 ans","« I'm twelve » = j'ai douze ans.");
L("intro","Hello, I'm Amelia. I'm eleven years old. I live in Cardiff, in Wales.","Où habite Amelia ?","au pays de Galles","en Écosse|en Irlande|à Londres","Cardiff est la capitale du pays de Galles (Wales).");
L("intro","Good morning! I'm Mr Taylor, your English teacher.","Qui parle ?","le professeur d'anglais","un élève|le directeur|un parent d'élève","« your English teacher » = votre professeur d'anglais.");
L("intro","What's your name?","Que te demande-t-on ?","ton nom","ton âge|ton adresse|ta nationalité","« What's your name? » = Comment t'appelles-tu ?");
L("intro","How old are you?","Que te demande-t-on ?","ton âge","ton nom|ton pays|ta classe","« How old are you? » = Quel âge as-tu ?");
L("intro","Where are you from?","Que te demande-t-on ?","d'où tu viens","où tu vas|comment tu vas|qui tu es","« Where are you from? » = D'où viens-tu ?");
L("intro","How are you today? — I'm fine, thanks.","Comment va la personne ?","bien","mal|elle est fatiguée|elle est malade","« I'm fine » = je vais bien.");
L("intro","This is my friend Jack. He isn't English, he's Scottish.","D'où vient Jack ?","d'Écosse","d'Angleterre|d'Irlande|du pays de Galles","« Scottish » = écossais.");
L("intro","Nice to meet you!","Que dit la personne ?","Enchanté(e) !","Au revoir !|À demain !|Bon appétit !","« Nice to meet you » = ravi(e) de te rencontrer.");

L("family","I've got two sisters and one brother.","Combien de frères et sœurs a cette personne ?","trois","deux|quatre|un","two sisters + one brother = 3.");
L("family","My mum's name is Sarah and my dad's name is Paul.","Comment s'appelle le père ?","Paul","Sarah|Peter|Sam","« my dad's name is Paul ».");
L("family","I haven't got any brothers or sisters. I'm an only child.","Que dit cette personne ?","Elle est enfant unique.","Elle a un frère.|Elle a une sœur.|Elle a des jumeaux.","« an only child » = un enfant unique.");
L("family","My grandmother is seventy-five. She lives with us.","Qui vit avec cette famille ?","la grand-mère","le grand-père|l'oncle|la tante","« my grandmother … lives with us ».");
L("family","This is my uncle Jim. He's my mum's brother.","Qui est Jim ?","l'oncle","le cousin|le grand-père|le frère","« uncle » = oncle.");
L("family","My cousin Lily has got a baby brother called Max.","Qui est Max ?","le petit frère de Lily","le cousin de Lily|le père de Lily|le chien de Lily","« a baby brother » = un petit frère (bébé).");
L("family","My parents have got a dog and a cat.","Quels animaux ont les parents ?","un chien et un chat","deux chiens|un chat et un lapin|un chien et un oiseau","« a dog and a cat ».");
L("family","Emma and Lucy are twins. They are ten.","Qui sont Emma et Lucy ?","des jumelles","des cousines|des voisines|la mère et la fille","« twins » = jumeaux, jumelles.");

L("describe","She's tall and she's got long fair hair.","Comment est-elle ?","grande, cheveux longs et blonds","petite, cheveux courts et blonds|grande, cheveux courts et bruns|petite, cheveux longs et roux","tall = grande ; long fair hair = cheveux longs et blonds.");
L("describe","My brother has got short black hair and brown eyes.","De quelle couleur sont les yeux du frère ?","marron","bleus|verts|noirs","« brown eyes » = yeux marron.");
L("describe","He's got glasses and a beard.","Qu'a-t-il sur le visage ?","des lunettes et une barbe","une moustache|une casquette et des lunettes|une barbe seulement","glasses = lunettes ; a beard = une barbe.");
L("describe","My teacher is short and she's got curly red hair.","Comment sont ses cheveux ?","roux et bouclés","raides et blonds|courts et bruns|longs et noirs","curly = bouclés ; red hair = cheveux roux.");
L("describe","Our cat is fat and black, with green eyes.","Comment est le chat ?","gros et noir, aux yeux verts","mince et noir, aux yeux bleus|gros et blanc, aux yeux verts|petit et gris","fat = gros ; black = noir ; green eyes = yeux verts.");
L("describe","Tom is very tall and thin.","Comment est Tom ?","très grand et mince","petit et mince|grand et gros|très petit","tall = grand ; thin = mince.");
L("describe","My grandad has got white hair and blue eyes.","De quelle couleur sont les cheveux du grand-père ?","blancs","gris|noirs|bruns","« white hair » = cheveux blancs.");

L("routine","I get up at seven o'clock every morning.","À quelle heure se lève-t-il ?","7 h","6 h|8 h|11 h","« seven o'clock » = 7 h.");
L("routine","After school, I do my homework, then I play video games.","Que fait-il d'abord après les cours ?","ses devoirs","des jeux vidéo|du sport|la cuisine","« I do my homework, then… » : d'abord les devoirs.");
L("routine","My sister has a shower in the evening.","Quand la sœur prend-elle sa douche ?","le soir","le matin|à midi|la nuit","« in the evening » = le soir.");
L("routine","We have lunch at the canteen at half past twelve.","Où déjeunent-ils ?","à la cantine","à la maison|au restaurant|dans le parc","« at the canteen » = à la cantine.");
L("routine","My dad goes to work by bike.","Comment le père va-t-il au travail ?","à vélo","en voiture|en bus|à pied","« by bike » = à vélo.");
L("routine","I go to bed at nine thirty.","À quelle heure se couche-t-il ?","21 h 30","21 h 13|19 h 30|22 h 30","« nine thirty » = 9 h 30 (du soir ici).");
L("routine","She brushes her teeth after breakfast.","Quand se brosse-t-elle les dents ?","après le petit-déjeuner","avant le petit-déjeuner|après le dîner|avant de dormir","« after breakfast » = après le petit-déjeuner.");
L("routine","On Saturdays, I get up late and I watch cartoons.","Que fait-il le samedi ?","Il se lève tard et regarde des dessins animés.","Il se lève tôt et fait du sport.|Il va au collège.|Il fait ses devoirs toute la journée.","« get up late » = se lever tard ; cartoons = dessins animés.");

L("house","There are three bedrooms upstairs and a big kitchen downstairs.","Combien y a-t-il de chambres ?","trois","deux|quatre|une","« three bedrooms ».");
L("house","My bedroom is small but I've got a big window.","Comment est sa chambre ?","petite, avec une grande fenêtre","grande, avec une petite fenêtre|petite, sans fenêtre|grande, avec deux fenêtres","small = petite ; a big window = une grande fenêtre.");
L("house","We live in a flat on the fifth floor.","Où habitent-ils ?","dans un appartement au 5e étage","dans une maison avec jardin|dans un appartement au 3e étage|dans une ferme","a flat = un appartement ; fifth = cinquième.");
L("house","There isn't a garden, but there's a balcony.","Qu'y a-t-il chez eux ?","un balcon","un jardin|un garage|une piscine","« there isn't a garden » : pas de jardin ; « a balcony » = un balcon.");
L("house","The sofa is in front of the TV, in the living room.","Où est le canapé ?","devant la télé, dans le salon","derrière la télé|dans la chambre|dans la cuisine","« in front of » = devant ; living room = salon.");
L("house","Where's my phone? — It's on the shelf in the kitchen.","Où est le téléphone ?","sur l'étagère de la cuisine","sous la table de la cuisine|sur le lit|dans le placard","« on the shelf » = sur l'étagère.");
L("house","The bathroom is next to my parents' bedroom.","Où est la salle de bains ?","à côté de la chambre des parents","en face de la chambre des parents|dans le jardin|en bas, près de la cuisine","« next to » = à côté de.");

L("directions","Go straight on, then turn left. The library is on your right.","Où est la bibliothèque ?","à droite, après avoir tourné à gauche","à gauche, tout droit|à droite, tout de suite|en face, après le pont","Go straight on, turn left, on your right.");
L("directions","Excuse me, where's the train station? — Take the second street on the left.","Quelle rue faut-il prendre ?","la 2e à gauche","la 2e à droite|la 1re à gauche|la 3e à gauche","« the second street on the left ».");
L("directions","The bank is opposite the post office.","Où est la banque ?","en face de la poste","à côté de la poste|derrière la poste|dans la poste","opposite = en face de.");
L("directions","The bakery is between the café and the bookshop.","Où est la boulangerie ?","entre le café et la librairie","entre le café et la bibliothèque|à côté du café|en face de la librairie","between … and … ; bookshop = librairie.");
L("directions","Turn right at the traffic lights. The museum is next to the church.","Où est le musée ?","à côté de l'église","en face de l'église|derrière l'église|à côté de la poste","« next to the church » = à côté de l'église.");
L("directions","Cross the bridge and the park is in front of you.","Que faut-il faire ?","traverser le pont","tourner à droite|prendre le bus|passer derrière le parc","« cross the bridge » = traverse le pont.");
L("directions","Is there a chemist's near here? — Yes, in Station Road, behind the supermarket.","Où est la pharmacie ?","derrière le supermarché","devant le supermarché|dans le supermarché|à côté de la gare","a chemist's = une pharmacie ; behind = derrière.");

L("can","I can swim but I can't ski.","Que sait faire cette personne ?","nager, mais pas skier","skier, mais pas nager|nager et skier|ni nager ni skier","can = sait ; can't = ne sait pas.");
L("can","My little brother can't ride a bike yet.","Que ne sait pas encore faire le petit frère ?","faire du vélo","nager|lire|courir","« can't ride a bike » = ne sait pas faire du vélo.");
L("can","Can you play the guitar? — Yes, I can.","Que répond la personne ?","Oui, elle sait jouer de la guitare.","Non, elle ne sait pas.|Elle joue du piano.|Elle veut apprendre.","« Yes, I can. »");
L("can","Can I go to the toilet, please?","Que demande l'élève ?","la permission d'aller aux toilettes","un stylo|de l'aide|s'il peut sortir jouer","« Can I…? » = Est-ce que je peux… ?");
L("can","My grandma can speak three languages: English, French and Spanish.","Combien de langues parle la grand-mère ?","trois","deux|quatre|une","« three languages ».");
L("can","Penguins can swim very well, but they can't fly.","Que ne savent pas faire les manchots ?","voler","nager|marcher|plonger","« they can't fly ».");
L("can","Sorry, I can't come to your party on Saturday.","Que dit cette personne ?","Elle ne peut pas venir à la fête.","Elle vient à la fête.|Elle organise une fête.|Elle arrivera en retard.","« I can't come » = je ne peux pas venir.");

L("cont","Look! The children are playing in the snow.","Que font les enfants ?","Ils jouent dans la neige.","Ils jouent sous la pluie.|Ils regardent la neige.|Ils dorment.","« are playing in the snow ».");
L("cont","Shh! The baby is sleeping.","Que fait le bébé ?","Il dort.","Il pleure.|Il mange.|Il joue.","« is sleeping » = est en train de dormir.");
L("cont","I'm wearing my new trainers today.","Que porte-t-il aujourd'hui ?","ses nouvelles baskets","son nouveau manteau|ses vieilles baskets|ses nouvelles bottes","trainers = baskets.");
L("cont","Dad is cooking dinner and Mum is reading the newspaper.","Que fait la mère ?","Elle lit le journal.","Elle prépare le dîner.|Elle regarde la télé.|Elle écrit une lettre.","Mum is reading the newspaper.");
L("cont","What are you doing? — I'm drawing a horse.","Que dessine-t-il ?","un cheval","une maison|un chien|une vache","« drawing a horse ».");
L("cont","They aren't watching TV, they're doing their homework.","Que font-ils ?","leurs devoirs","ils regardent la télé|ils jouent dehors|ils dorment","« they're doing their homework ».");
L("cont","She's wearing a red skirt and a white shirt.","Que porte-t-elle ?","une jupe rouge et une chemise blanche","une robe rouge|une jupe blanche et une chemise rouge|un pantalon rouge","skirt = jupe ; shirt = chemise.");

L("weather","Today it's sunny and hot in London.","Quel temps fait-il à Londres ?","Il fait beau et chaud.","Il pleut.|Il fait froid.|Il neige.","sunny = ensoleillé ; hot = chaud.");
L("weather","Take your umbrella: it's raining!","Pourquoi prendre un parapluie ?","parce qu'il pleut","parce qu'il fait soleil|parce qu'il neige|parce qu'il y a du vent","« it's raining » = il pleut.");
L("weather","In Scotland tomorrow, it's going to be cold and windy.","Quel temps fera-t-il en Écosse demain ?","froid et venteux","chaud et ensoleillé|froid et neigeux|doux et pluvieux","cold = froid ; windy = venteux.");
L("weather","It's snowing! Let's build a snowman.","Que veulent-ils faire ?","un bonhomme de neige","une cabane|une bataille d'eau|un château de sable","« a snowman » = un bonhomme de neige.");
L("weather","My favourite season is autumn.","Quelle est sa saison préférée ?","l'automne","l'été|l'hiver|le printemps","autumn = l'automne.");
L("weather","It's foggy this morning, so drive carefully.","Quel temps fait-il ce matin ?","Il y a du brouillard.","Il y a du vent.|Il y a de l'orage.|Il fait très chaud.","foggy = il y a du brouillard.");
L("weather","It's cloudy but it's warm.","Quel temps fait-il ?","nuageux mais doux","nuageux et froid|ensoleillé et chaud|pluvieux et froid","cloudy = nuageux ; warm = doux.");

L("rules","You must wear your school uniform every day.","Quelle est la règle ?","porter l'uniforme tous les jours","porter l'uniforme le lundi|ne jamais porter l'uniforme|porter des baskets","must = devoir (obligation).");
L("rules","You mustn't eat in the classroom.","Quelle est la règle ?","Il est interdit de manger en classe.","On doit manger en classe.|On peut manger en classe.|On mange en classe à midi.","mustn't = interdiction.");
L("rules","You mustn't use your mobile phone in the library.","Où le téléphone est-il interdit ?","à la bibliothèque","dans la cour|à la cantine|dans le bus","« in the library ».");
L("rules","Pupils must be at school at eight fifteen.","À quelle heure faut-il être au collège ?","8 h 15","8 h 50|8 h 05|9 h 15","« eight fifteen » = 8 h 15.");
L("rules","You must put your hand up before you speak.","Que faut-il faire avant de parler ?","lever la main","se lever|attendre la sonnerie|écrire son nom","« put your hand up » = lever la main.");
L("rules","Don't run in the corridors!","Que ne faut-il pas faire dans les couloirs ?","courir","parler|manger|chanter","« Don't run » = ne cours pas.");

L("food","Can I have a cheese sandwich and an orange juice, please?","Que commande la personne ?","un sandwich au fromage et un jus d'orange","un sandwich au jambon et un jus de pomme|une pizza et un soda|une salade et de l'eau","cheese sandwich ; orange juice.");
L("food","I'm hungry! Is there any bread?","Que cherche-t-il ?","du pain","du lait|du fromage|de l'eau","bread = pain ; hungry = qui a faim.");
L("food","I don't like fish but I love chicken.","Qu'est-ce qu'il n'aime pas ?","le poisson","le poulet|les frites|les pâtes","« I don't like fish ».");
L("food","There are some apples but there isn't any milk.","Qu'est-ce qui manque ?","le lait","les pommes|le pain|le beurre","« there isn't any milk ».");
L("food","Would you like some tea? — No thanks, I'm not thirsty.","Pourquoi refuse-t-il le thé ?","Il n'a pas soif.","Il n'a pas faim.|Il n'aime pas le thé.|Il est en retard.","thirsty = qui a soif.");
L("food","For breakfast, I usually have cereal with milk and a banana.","Que mange-t-il au petit-déjeuner ?","des céréales avec du lait et une banane","des œufs et du bacon|du pain et de la confiture|une pomme et du jus","cereal, milk, a banana.");
L("food","Fish and chips is a very popular meal in Britain.","Quel plat est très populaire en Grande-Bretagne ?","le poisson-frites","la pizza|le hamburger|la soupe","« fish and chips » = poisson pané et frites.");

L("animals","My rabbit is white and it's got long ears.","Comment est le lapin ?","blanc avec de longues oreilles","noir avec de longues oreilles|blanc avec une longue queue|gris avec de petites oreilles","white = blanc ; long ears = longues oreilles.");
L("animals","Elephants are big and grey. They've got big ears.","De quelle couleur sont les éléphants ?","gris","marron|blancs|noirs","grey = gris.");
L("animals","My sister's hamster sleeps all day.","Que fait le hamster de sa sœur ?","Il dort toute la journée.","Il mange toute la journée.|Il court toute la journée.|Il dort toute la nuit.","« sleeps all day ».");
L("animals","There are cows, sheep and pigs on my uncle's farm.","Quel animal n'est pas cité ?","des chevaux","des vaches|des moutons|des cochons","cows, sheep, pigs : pas de chevaux (horses).");
L("animals","Monkeys love bananas.","Qu'aiment les singes ?","les bananes","les pommes|les carottes|les noix","« Monkeys love bananas ».");
L("animals","A snake has got no legs.","Qu'est-ce qu'un serpent n'a pas ?","de pattes","de queue|d'yeux|de bouche","« no legs » = pas de pattes.");
L("animals","I feed my dog twice a day.","Combien de fois nourrit-il son chien ?","deux fois par jour","une fois par jour|trois fois par jour|deux fois par semaine","twice a day = deux fois par jour.");

L("countries","Hi! I'm Pablo. I'm from Madrid, in Spain. I speak Spanish and English.","Quelles langues parle Pablo ?","l'espagnol et l'anglais","l'italien et l'anglais|l'espagnol et le français|le portugais et l'anglais","Spanish and English.");
L("countries","My pen friend is from Tokyo. She's Japanese.","De quel pays vient sa correspondante ?","du Japon","de Chine|d'Inde|d'Australie","Japanese = japonaise ; Tokyo est au Japon.");
L("countries","Edinburgh is the capital of Scotland.","De quel pays Édimbourg est-elle la capitale ?","de l'Écosse","de l'Irlande|du pays de Galles|de l'Angleterre","Scotland = l'Écosse.");
L("countries","Hans lives in Berlin. He's German.","Quelle est la nationalité de Hans ?","allemand","néerlandais|suisse|autrichien","German = allemand.");
L("countries","Australia is a very big country. Its capital is Canberra, not Sydney.","Quelle est la capitale de l'Australie ?","Canberra","Sydney|Melbourne|Wellington","« Its capital is Canberra ».");
L("countries","Dublin is the capital of Ireland.","Dublin est la capitale de :","l'Irlande","l'Irlande du Nord|l'Écosse|l'Islande","Ireland = l'Irlande.");
L("countries","The Welsh flag has got a red dragon on it.","Qu'y a-t-il sur le drapeau gallois ?","un dragon rouge","un lion rouge|une croix rouge|un trèfle vert","Welsh = gallois ; a red dragon.");

L("health","I've got a headache and a temperature.","Qu'est-ce qui ne va pas ?","Il a mal à la tête et de la fièvre.","Il a mal au ventre.|Il a mal aux dents.|Il s'est cassé la jambe.","headache = mal de tête ; temperature = fièvre.");
L("health","My throat hurts. I think I've got a cold.","Que pense cette personne ?","qu'elle a un rhume","qu'elle a faim|qu'elle est fatiguée|qu'elle a froid","« a cold » = un rhume ; my throat hurts = j'ai mal à la gorge.");
L("health","Stay in bed and drink a lot of water.","Que conseille le médecin ?","rester au lit et boire beaucoup d'eau","faire du sport|aller au collège|manger beaucoup","stay in bed ; drink a lot of water.");
L("health","I was ill yesterday, but I feel better today.","Comment va-t-il aujourd'hui ?","mieux","plus mal|pareil|il est à l'hôpital","« I feel better » = je me sens mieux.");
L("health","Ow! I've got a stomach ache.","Où a-t-il mal ?","au ventre","à la tête|au dos|à la gorge","stomach ache = mal de ventre.");
L("health","We were at the hospital last night, but my brother is fine now.","Où étaient-ils hier soir ?","à l'hôpital","chez le dentiste|au cinéma|à la pharmacie","« We were at the hospital ».");

L("pastirr","Last Saturday, we went to the zoo and we saw two lions.","Qu'ont-ils vu au zoo ?","deux lions","deux tigres|un lion|des singes","« we saw two lions ».");
L("pastirr","I ate a big pizza and I drank a lemonade.","Qu'a-t-il bu ?","une limonade","un jus d'orange|de l'eau|un chocolat chaud","« I drank a lemonade ».");
L("pastirr","She bought a new phone yesterday.","Qu'a-t-elle acheté ?","un nouveau téléphone","un ordinateur|un vélo|des vêtements","« bought a new phone ».");
L("pastirr","We took the train to London.","Comment sont-ils allés à Londres ?","en train","en voiture|en avion|en bus","« took the train ».");
L("pastirr","My brother found a wallet in the street.","Qu'a trouvé le frère ?","un portefeuille","un chien|un téléphone|une clé","« found a wallet ».");
L("pastirr","I wrote a long letter to my pen friend.","Qu'a-t-il écrit ?","une longue lettre","un poème|un court message|une carte postale","« wrote a long letter ».");
L("pastirr","They came home very late and went to bed.","Qu'ont-ils fait en rentrant ?","Ils sont allés se coucher.","Ils ont dîné.|Ils ont regardé un film.|Ils sont ressortis.","« went to bed ».");

L("holidays","Last summer, we went to Italy by car. It took two days.","Comment sont-ils allés en Italie ?","en voiture","en avion|en train|en bateau","« by car ».");
L("holidays","We stayed at a campsite near the beach.","Où ont-ils logé ?","dans un camping","dans un hôtel|chez des amis|dans un appartement","campsite = camping.");
L("holidays","Did you have a good holiday? — Yes, it was great!","Comment étaient les vacances ?","très bien","nulles|trop courtes|pluvieuses","« it was great ».");
L("holidays","I didn't swim because the water was too cold.","Pourquoi n'a-t-il pas nagé ?","L'eau était trop froide.","Il ne sait pas nager.|Il pleuvait.|La plage était fermée.","« the water was too cold ».");
L("holidays","We visited a castle and I bought some postcards.","Qu'a-t-il acheté ?","des cartes postales","des souvenirs en bois|un tee-shirt|un livre","postcards = cartes postales.");
L("holidays","My suitcase was very heavy!","Qu'est-ce qui était lourd ?","sa valise","son sac à dos|son vélo|sa tente","suitcase = valise.");
L("holidays","We spent a week in the mountains in Switzerland.","Combien de temps sont-ils restés ?","une semaine","deux semaines|un mois|un week-end","« a week ».");

L("usa","The United States has got fifty states.","Combien d'États ont les États-Unis ?","50","15|13|51","fifty = 50.");
L("usa","Independence Day is on the fourth of July.","Quand est la fête de l'Indépendance ?","le 4 juillet","le 14 juillet|le 4 juin|le 1er juillet","the fourth of July = le 4 juillet.");
L("usa","The President lives in the White House, in Washington.","Où habite le président ?","à la Maison-Blanche","à New York|à Buckingham Palace|à Los Angeles","the White House = la Maison-Blanche.");
L("usa","At Thanksgiving, American families eat turkey.","Que mangent les familles à Thanksgiving ?","de la dinde","du poulet|du jambon|du poisson","turkey = dinde.");
L("usa","New York has got a lot of skyscrapers.","Qu'y a-t-il beaucoup à New York ?","des gratte-ciel","des châteaux|des fermes|des plages","skyscrapers = gratte-ciel.");
L("usa","The American flag is red, white and blue, with stars and stripes.","Qu'y a-t-il sur le drapeau américain ?","des étoiles et des bandes","un dragon|une croix|une feuille d'érable","stars = étoiles ; stripes = bandes.");
L("usa","In the USA, people pay in dollars.","Avec quelle monnaie paie-t-on aux États-Unis ?","le dollar","la livre|l'euro|le yen","dollars.");

L("jobs","My mum is a nurse. She works in a hospital.","Où travaille la mère ?","à l'hôpital","à l'école|dans un magasin|dans un bureau","nurse = infirmière ; hospital = hôpital.");
L("jobs","My uncle is a farmer. He's got sixty cows.","Quel est le métier de l'oncle ?","agriculteur","vétérinaire|boucher|boulanger","farmer = agriculteur.");
L("jobs","I want to be a vet because I love animals.","Quel métier veut-il faire ?","vétérinaire","médecin|professeur|pompier","vet = vétérinaire.");
L("jobs","She's a pilot. She flies all over the world.","Que fait-elle ?","Elle est pilote d'avion.","Elle est hôtesse de l'air.|Elle est guide.|Elle est journaliste.","pilot = pilote.");
L("jobs","My dad is a baker. He gets up at four in the morning.","À quelle heure se lève le père ?","à 4 h du matin","à 6 h du matin|à 4 h de l'après-midi|à 14 h","« at four in the morning ».");
L("jobs","Firefighters are very brave.","Qui est très courageux ?","les pompiers","les policiers|les professeurs|les cuisiniers","firefighters = pompiers.");
L("jobs","What does your sister do? — She's a hairdresser.","Quel est le métier de la sœur ?","coiffeuse","serveuse|vendeuse|infirmière","hairdresser = coiffeur, coiffeuse.");

L("going","Next summer, I'm going to visit my cousins in Canada.","Que va-t-il faire l'été prochain ?","rendre visite à ses cousins au Canada","partir en Australie|travailler|rester chez lui","« I'm going to visit my cousins ».");
L("going","Look at the sky! It's going to rain.","Que va-t-il se passer ?","Il va pleuvoir.","Il va neiger.|Il va faire beau.|Il pleuvait.","« It's going to rain ».");
L("going","We're going to have a barbecue on Sunday.","Que vont-ils faire dimanche ?","un barbecue","un pique-nique|une fête d'anniversaire|un match","barbecue.");
L("going","I'm not going to watch the match. I'm going to read.","Que va-t-il faire ?","lire","regarder le match|dormir|jouer au foot","« I'm going to read ».");
L("going","My sister is going to be a doctor.","Que va devenir la sœur ?","médecin","infirmière|professeure|vétérinaire","« going to be a doctor ».");
L("going","Are you going to come to my party? — Yes, of course!","La personne va-t-elle venir à la fête ?","oui","non|peut-être|elle ne sait pas","« Yes, of course! »");

L("feelings","I'm so happy! It's my birthday today!","Comment se sent-il ?","heureux","triste|en colère|fatigué","happy = heureux.");
L("feelings","My dog is ill and I'm very sad.","Pourquoi est-il triste ?","Son chien est malade.","Il a perdu son chien.|Il est malade.|Il a raté le bus.","« My dog is ill ».");
L("feelings","I'm scared of spiders!","De quoi a-t-il peur ?","des araignées","des serpents|du noir|des chiens","scared of = avoir peur de ; spiders = araignées.");
L("feelings","She's very tired because she went to bed late.","Pourquoi est-elle fatiguée ?","Elle s'est couchée tard.","Elle a couru.|Elle est malade.|Elle a beaucoup travaillé.","« went to bed late ».");
L("feelings","I'm bored. There's nothing to do!","Comment se sent-il ?","Il s'ennuie.","Il est occupé.|Il est inquiet.|Il est fier.","bored = qui s'ennuie.");
L("feelings","Tom is very shy. He doesn't speak a lot in class.","Comment est Tom ?","timide","bavard|paresseux|drôle","shy = timide.");
L("feelings","My best friend is kind and funny.","Comment est son meilleur ami ?","gentil et drôle","gentil et timide|drôle et paresseux|sérieux et gentil","kind = gentil ; funny = drôle.");

L("nature","Don't throw your rubbish in the river!","Que ne faut-il pas faire ?","jeter ses déchets dans la rivière","nager dans la rivière|pêcher dans la rivière|boire l'eau de la rivière","rubbish = déchets ; river = rivière.");
L("nature","Let's plant some flowers in the garden.","Que propose-t-il ?","planter des fleurs","cueillir des fleurs|planter un arbre|arroser le jardin","« plant some flowers ».");
L("nature","Please turn off the light when you leave the room.","Que faut-il faire ?","éteindre la lumière","allumer la lumière|fermer la porte|ouvrir la fenêtre","turn off = éteindre.");
L("nature","There are a lot of trees in this forest.","Qu'y a-t-il beaucoup dans la forêt ?","des arbres","des fleurs|des animaux|des rivières","trees = arbres.");
L("nature","Recycle your bottles: put them in the green bin.","Où mettre les bouteilles ?","dans la poubelle verte","dans la poubelle jaune|dans la rivière|dans la cuisine","« in the green bin ».");
L("nature","Save water: have a shower, not a bath!","Quel conseil donne-t-on ?","prendre une douche plutôt qu'un bain","prendre un bain plutôt qu'une douche|ne pas se laver|boire de l'eau","save water = économiser l'eau.");

L("festivals","On Halloween, children dress up and say: trick or treat!","Que font les enfants à Halloween ?","Ils se déguisent.","Ils mangent de la dinde.|Ils allument un feu de joie.|Ils cherchent des œufs.","dress up = se déguiser.");
L("festivals","On Bonfire Night, we watched the fireworks.","Qu'ont-ils regardé ?","le feu d'artifice","un défilé|un film|un match","fireworks = feu d'artifice.");
L("festivals","At Easter, I found ten chocolate eggs in the garden.","Combien d'œufs a-t-il trouvés ?","dix","deux|douze|six","ten = 10.");
L("festivals","On Pancake Day, we make pancakes and have races.","Que fait-on pour Pancake Day ?","des crêpes","des gâteaux|des citrouilles|des cartes","pancakes = crêpes.");
L("festivals","On St Patrick's Day, people wear green.","Quelle couleur porte-t-on à la Saint-Patrick ?","le vert","le rouge|le bleu|l'orange","green = vert.");
L("festivals","We carved a big pumpkin for Halloween.","Qu'ont-ils sculpté ?","une citrouille","une bougie|un fantôme|une pomme","pumpkin = citrouille.");

L("transport","The train to Oxford leaves from platform four.","De quel quai part le train ?","quai 4","quai 14|quai 40|quai 2","« platform four ».");
L("transport","I go to school on foot. It's only five minutes.","Comment va-t-il au collège ?","à pied","à vélo|en bus|en voiture","on foot = à pied.");
L("transport","Hurry up! We're late for the bus!","Pourquoi se presser ?","Ils sont en retard pour le bus.","Le bus est en retard.|Il pleut.|Le train part.","« We're late » = nous sommes en retard.");
L("transport","In London, I took the Tube to Oxford Circus.","Quel transport a-t-il pris ?","le métro","le bus|le taxi|le bateau","the Tube = le métro de Londres.");
L("transport","A return ticket to Brighton, please.","Que demande la personne ?","un billet aller-retour","un billet aller simple|un plan de la ville|l'heure du train","return ticket = aller-retour.");
L("transport","The plane is faster than the boat, but it's more expensive.","Qu'est-ce qui est plus cher ?","l'avion","le bateau|le train|la voiture","« the plane … is more expensive ».");
L("transport","My dad drives a red lorry.","Que conduit le père ?","un camion rouge","une voiture rouge|un bus rouge|une moto rouge","lorry = camion.");

/* Sons proches : [mot, sens, mot, sens, explication] */
const PAIRES_SONS=[
 ["ship","bateau","sheep","mouton","i court dans ship, i long dans sheep."],
 ["live","vivre, habiter","leave","partir","i court dans live, i long dans leave."],
 ["hit","frapper","heat","la chaleur","i court dans hit, i long dans heat."],
 ["sit","s'asseoir","seat","un siège","i court dans sit, i long dans seat."],
 ["fill","remplir","feel","ressentir","i court dans fill, i long dans feel."],
 ["hill","une colline","ill","malade","le h se souffle dans hill."],
 ["hair","les cheveux","air","l'air","le h se souffle dans hair."],
 ["hand","la main","and","et","le h se souffle dans hand."],
 ["heat","la chaleur","eat","manger","le h se souffle dans heat."],
 ["hate","détester","eight","huit","le h se souffle dans hate."],
 ["hungry","affamé","angry","en colère","le h se souffle dans hungry."],
 ["three","trois","tree","un arbre","th : la langue entre les dents dans three."],
 ["think","penser","sink","un évier ; couler","th : la langue entre les dents dans think."],
 ["thank","remercier","tank","un réservoir","th : la langue entre les dents dans thank."],
 ["thing","une chose","sing","chanter","th : la langue entre les dents dans thing."],
 ["mouth","la bouche","mouse","une souris","th à la fin de mouth, s à la fin de mouse."],
 ["bad","mauvais","bed","un lit","a très ouvert dans bad, « è » dans bed."],
 ["man","un homme","men","des hommes","a très ouvert dans man, « è » dans men."],
 ["cat","un chat","cut","couper","a très ouvert dans cat, son bref proche de « eu » dans cut."],
 ["cap","une casquette","cup","une tasse","a très ouvert dans cap, son bref proche de « eu » dans cup."],
 ["walk","marcher","work","travailler","« o » long dans walk (le l est muet), « eu » long dans work."],
 ["full","plein","fool","un idiot","ou court dans full, ou long dans fool."],
 ["pull","tirer","pool","une piscine","ou court dans pull, ou long dans pool."],
 ["fan","un ventilateur","van","une camionnette","f : sans vibration ; v : les lèvres vibrent."],
 ["very","très","berry","une baie","v : les dents touchent la lèvre ; b : les deux lèvres."],
 ["thirteen","13","thirty","30","13 : on insiste sur la fin (-teen) ; 30 : sur le début (thir-)."],
 ["fifteen","15","fifty","50","15 : on insiste sur -teen ; 50 : sur fif-."],
 ["eighteen","18","eighty","80","18 : on insiste sur -teen ; 80 : sur eigh-."]
];
/* Les temps à reconnaître : ps = présent simple, pc = présent continu, pa = prétérit, fu = going to */
const TEMPS=[["I play tennis every Saturday.","ps"],["She walks to school.","ps"],["We visit our grandparents on Sundays.","ps"],["He watches cartoons every morning.","ps"],["It rains a lot here.","ps"],["My mum works in a bank.","ps"],["He wants a dog.","ps"],["I like the film.","ps"],
 ["I'm playing tennis now.","pc"],["She's walking to school.","pc"],["They're watching a film.","pc"],["We're cooking dinner.","pc"],["It's raining.","pc"],["Look! He's dancing.","pc"],
 ["I played tennis yesterday.","pa"],["She walked to school this morning.","pa"],["We visited our grandparents last Sunday.","pa"],["He watched cartoons last night.","pa"],["They cooked a big cake.","pa"],["It rained all day.","pa"],["My mum worked in a bank.","pa"],["He wanted a dog.","pa"],["I liked the film.","pa"],["We went to the beach.","pa"],["She bought a new bike.","pa"],
 ["I'm going to play tennis tomorrow.","fu"],["She's going to walk to school.","fu"],["We're going to visit London.","fu"],["They're going to cook pasta.","fu"],["It's going to rain.","fu"],["He's going to buy a dog.","fu"]];
const NOM_TEMPS={ps:"au présent (une habitude)",pc:"au présent continu (en ce moment)",pa:"au passé (prétérit)",fu:"au futur (going to)"};
const ED=[["wanted",1],["needed",1],["visited",1],["started",1],["waited",1],["painted",1],["decided",1],["ended",1],["landed",1],["walked",0],["watched",0],["stopped",0],["cooked",0],["jumped",0],["finished",0],["helped",0],["liked",0],["danced",0],["played",0],["cleaned",0],["opened",0],["lived",0],["arrived",0],["listened",0],["enjoyed",0],["called",0]];
const NOMS_EPELES=["Brown","Smith","Jones","Taylor","Wilson","Evans","Green","Walker","Wright","Hughes","Jackson","Harris","Clarke","Davies","Hall"];
const PAIRES_NB=[[13,30],[14,40],[15,50],[16,60],[17,70],[18,80],[19,90]];
const HEURES=["twelve","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];
function heureEN(h,m){
  const hh=HEURES[h%12],suiv=HEURES[(h%12)+1];
  if(m===0)return `It's ${hh} o'clock.`;if(m===15)return `It's quarter past ${hh}.`;if(m===30)return `It's half past ${hh}.`;if(m===45)return `It's quarter to ${suiv}.`;
  return m<30?`It's ${enLettres(m)} past ${hh}.`:`It's ${enLettres(60-m)} to ${suiv}.`;
}
const heureFR=(h,m)=>m?`${h} h ${String(m).padStart(2,"0")}`:`${h} h`;
const HEURE_EXPL="past = après l'heure (et…) ; to = avant l'heure (moins…) ; quarter = quart ; half past = et demie.";

const GL={
  sons(){const p=pioche(PAIRES_SONS),i=alea(0,1)*2,bon=`${p[i]} (${p[i+1]})`,faux=`${p[2-i]} (${p[3-i]})`;
    return ecoute(p[i],"🔊 Écoute bien : quel mot entends-tu ?",bon,[faux],p[4]);},
  numbers(){const k=alea(1,4);
    if(k===1){const p=pioche(PAIRES_NB),i=alea(0,1);return ecoute(enLettres(p[i]),"🔊 Écoute : quel nombre entends-tu ?",String(p[i]),[String(p[1-i])],`${p[0]} = ${enLettres(p[0])} (on insiste sur -teen) ; ${p[1]} = ${enLettres(p[1])} (on insiste sur le début).`);}
    if(k===2){const n=alea(21,99);return ecouteSaisie(enLettres(n),"🔊 Écoute et écris en chiffres le nombre entendu.",[String(n)],`${enLettres(n)} = ${n}.`);}
    if(k===3){const n=alea(101,999);return ecouteSaisie(enLettres(n),"🔊 Écoute et écris en chiffres le nombre entendu.",[String(n)],`${enLettres(n)} = ${n}. En anglais britannique, on dit « and » entre les centaines et le reste.`);}
    const n=alea(1,12),c=pioche(["apples","books","pencils","cousins","cats"]);
    return ecouteSaisie(`I've got ${enLettres(n)} ${n===1?c.replace(/s$/,""):c}.`,"🔊 Écoute : combien en a-t-il ? Écris le nombre en chiffres.",[String(n)],`${enLettres(n)} = ${n}.`);},
  time(){const h=alea(1,12),m=pioche([0,5,10,15,20,25,30,35,40,45,50,55]);
    const cand=[[h,(60-m)%60],[h===12?1:h+1,m],[h===1?12:h-1,m],[h,(m+30)%60],[h,(m+5)%60]].map(([a,b])=>heureFR(a,b)).filter(x=>x!==heureFR(h,m));
    return ecoute(heureEN(h,m),"🔊 Écoute : quelle heure est-il ?",heureFR(h,m),[...new Set(cand)],HEURE_EXPL);},
  prices(){const l=alea(1,20),p=pioche([0,10,20,25,30,40,50,60,75,80,90,99,15]);
    const dit=`It's ${enLettres(l)} ${l===1?"pound":"pounds"}${p?" "+enLettres(p):""}.`,fmt=(a,b)=>`£${a}.${String(b).padStart(2,"0")}`;
    const faux=[fmt(l,(p+50)%100),fmt(l+1,p),fmt(l>10?l-10:l+10,p),fmt(l,p===15?50:p===50?15:(p+10)%100)].filter(x=>x!==fmt(l,p));
    if(alea(0,2)===0)return ecouteSaisie(dit,"🔊 Écoute et écris le prix entendu, en livres (exemple : 3.20).",[`${l}.${String(p).padStart(2,"0")}`,`£${l}.${String(p).padStart(2,"0")}`,`${l},${String(p).padStart(2,"0")}`],`On entend d'abord les livres (pounds), puis les pence : ${fmt(l,p)}.`);
    return ecoute(dit,"🔊 Écoute : combien ça coûte ?",fmt(l,p),[...new Set(faux)],`On dit d'abord les livres (pounds), puis les pence. 100 pence = 1 pound.`);},
  dates(){const m=alea(0,11),d=alea(1,JOURS_MOIS[m]===29?28:JOURS_MOIS[m]);
    const dit=`It's the ${ordinal(d)} of ${MOIS_EN[m]}.`,fr=(a,b)=>`${a===1?"1er":a} ${MOIS_FR[b]}`;
    if(alea(0,2)===0)return ecouteSaisie(dit,"🔊 Écoute la date : écris le jour en chiffres (exemple : 21).",[String(d)],`${ordinal(d)} = ${ordAbr(d)} ; donc le ${d} ${MOIS_FR[m]}.`);
    const autresJ=[d+1,d===13?30:d===30?13:d+10,d>2?d-2:d+2].filter(x=>x!==d&&x<=28);if(!autresJ.length)autresJ.push(d>14?d-11:d+11);
    const autresM=[(m+1)%12,(m+11)%12,m===2?4:m===4?2:m===5?6:m===6?5:(m+6)%12].filter(x=>JOURS_MOIS[x]-(x===1?1:0)>=d);if(!autresM.length)autresM.push(0);
    const faux=[fr(pioche(autresJ),m),fr(d,pioche(autresM)),fr(pioche(autresJ),pioche(autresM))];
    return ecoute(dit,"🔊 Écoute : quelle est la date ?",fr(d,m),faux,`${ordinal(d)} of ${MOIS_EN[m]} = le ${fr(d,m)}. On dit la date avec un nombre ordinal (first, second, third…).`);},
  pastreg(){if(alea(0,1)){const v=pioche(ED);return ecoute(v[0],"🔊 Écoute ce verbe au prétérit : entends-tu une syllabe de plus à la fin (le son « id ») ?",v[1]?"oui, une syllabe de plus":"non, pas de syllabe en plus",[v[1]?"non, pas de syllabe en plus":"oui, une syllabe de plus"],v[1]?"Après t ou d, -ed se prononce « id » : une syllabe de plus.":"Ici, -ed ne fait pas de syllabe en plus : il s'entend à peine.");}
    return GL._temps(["ps","pa"]);},
  cont(){return GL._temps(["ps","pc"]);},
  going(){return GL._temps(["ps","pc","pa","fu"]);},
  _temps(cats){const x=pioche(TEMPS.filter(t=>cats.includes(t[1])));return ecoute(x[0],"🔊 Écoute : cette phrase est…",NOM_TEMPS[x[1]],cats.filter(c=>c!==x[1]).map(c=>NOM_TEMPS[c]),{ps:"Présent simple : une habitude (every day, often…).",pc:"Présent continu : be + -ing, en ce moment.",pa:"Prétérit : -ed ou forme irrégulière, une action terminée.",fu:"Futur : be going to + verbe."}[x[1]]);},
  intro(){const n=pioche(NOMS_EPELES);return ecoute(n.toUpperCase().split("").join(", "),"🔊 Écoute : quel nom de famille est épelé ?",n,melange(NOMS_EPELES.filter(x=>x!==n)).slice(0,3),`On épelait ${n.toUpperCase().split("").join("-")}. Attention : G se dit « dji », J se dit « djé », E se dit « i », I se dit « aï ».`);}
};
const GL_PART={intro:0.3,cont:0.4,going:0.4,pastreg:1,time:1,numbers:1,prices:1,dates:1,sons:1};
function exoEcoute(tag){
  if(Math.random()<0.1)return GL.sons();
  const banque=LIST.filter(x=>x.t===tag);
  if(GL[tag]&&(!banque.length||Math.random()<(GL_PART[tag]??0.5)))return GL[tag]();
  const x=pioche(banque.length?banque:LIST);
  return ecoute(x.a,`🔊 Écoute : ${x.q}`,x.b,x.f,x.e);
}

/* =========================================================
   6. LA LECTURE : un court texte, puis une question
   R(étiquette, texte, [[question, bonne réponse, "mauvaises|réponses", explication], …])
   ========================================================= */
const LECT=[];
const R=(t,x,qs)=>{for(const [q,b,f,e] of qs)LECT.push({t,x,q,b,f:f.split("|"),e});};

R("school","Hi! My name is Ella and I'm eleven. I'm in Year 7 at Park School in Bristol. My favourite teacher is Mr Hill. He teaches Science. I've got a lot of friends in my class.",[
 ["Quelle matière enseigne Mr Hill ?","les sciences","l'anglais|les maths|l'EPS","« He teaches Science »."],
 ["Where does Ella go to school?","in Bristol","in London|in Bath|in Leeds","« Park School in Bristol »."]]);
R("school","This is my classroom. There are twenty-eight desks and a big whiteboard. On my desk, there is my pencil case, a ruler and two exercise books. My schoolbag is under my chair.",[
 ["Où est le cartable ?","sous la chaise","sur le bureau|à côté du tableau|dans le casier","« under my chair »."],
 ["Combien y a-t-il de bureaux ?","28","18|20|38","« twenty-eight desks »."]]);
R("family","My name is Jack. There are five people in my family: my mum, my dad, my two sisters and me. My sisters are twins. They are eight. We have got a dog called Rex.",[
 ["Combien de personnes y a-t-il dans la famille de Jack ?","5","4|6|3","Mum, dad, two sisters and Jack : 5 personnes (le chien ne compte pas !)."],
 ["How old are Jack's sisters?","eight","eleven|five|two","« They are eight »."]]);
R("family","Hello! I'm Priya and I live in Leicester with my parents and my grandmother. My grandmother is from India. She cooks delicious curries. I haven't got any brothers or sisters, but I've got ten cousins!",[
 ["Has Priya got a brother?","No, she hasn't.","Yes, she has.|Yes, two.|Yes, ten.","« I haven't got any brothers or sisters »."],
 ["D'où vient sa grand-mère ?","d'Inde","d'Angleterre|du Pakistan|de Chine","« My grandmother is from India »."]]);
R("describe","My best friend is called Noah. He's twelve. He's tall and thin, and he's got short curly black hair and brown eyes. He's always smiling and he's very funny.",[
 ["Comment sont les cheveux de Noah ?","courts, bouclés et noirs","longs, raides et noirs|courts, raides et bruns|longs, bouclés et blonds","« short curly black hair »."],
 ["What is Noah like?","funny","shy|lazy|angry","« he's very funny »."]]);
R("describe","Look at this photo. This is my grandad. He's seventy. He's got white hair and a long white beard. He wears glasses. He looks like Father Christmas!",[
 ["À qui ressemble le grand-père ?","au père Noël","à un pirate|à un roi|à un magicien","« He looks like Father Christmas »."],
 ["How old is the grandad?","seventy","seventeen|sixty|eighty","« He's seventy » = il a 70 ans."]]);
R("routine","I get up at half past six. I have a shower and I have breakfast with my brother. I usually eat cereal. Then I go to school by bus. School starts at quarter past eight.",[
 ["À quelle heure commence l'école ?","8 h 15","8 h 45|6 h 30|7 h 15","quarter past eight = 8 h 15."],
 ["How does she go to school?","by bus","by car|on foot|by bike","« I go to school by bus »."]]);
R("routine","My dad is a nurse and he works at night. He comes home at seven in the morning, when I get up. He sleeps all morning. In the afternoon, he picks me up from school.",[
 ["Quand le père dort-il ?","le matin","la nuit|l'après-midi|le soir","« He sleeps all morning »."],
 ["What is the dad's job?","He's a nurse.","He's a doctor.|He's a teacher.|He's a bus driver.","« My dad is a nurse »."]]);
R("subjects","On Monday, I've got Maths at nine, then English and History. After lunch, I've got PE. I love PE because I'm good at sport. But I don't like History: it's boring!",[
 ["Quelle matière n'aime-t-il pas ?","l'histoire","l'EPS|l'anglais|les maths","« I don't like History »."],
 ["What lesson is after lunch on Monday?","PE","Maths|History|Art","« After lunch, I've got PE »."]]);
R("subjects","In British schools, pupils usually wear a uniform. School starts at about nine and finishes at half past three. Pupils have lunch at school or bring a packed lunch. There is no school on Saturday.",[
 ["À quelle heure finit l'école ?","15 h 30","16 h 30|15 h|17 h","half past three = 15 h 30."],
 ["Qu'est-ce qu'un « packed lunch » ?","un repas apporté de la maison","un repas chaud à la cantine|un goûter|un menu au restaurant","On l'apporte de la maison, dans une boîte."]]);
R("hobbies","In my free time, I play the guitar and I read comics. On Wednesday afternoon, I go to the drama club. I sometimes play video games with my brother, but I never watch TV.",[
 ["Que ne fait-il jamais ?","regarder la télévision","jouer de la guitare|lire des BD|jouer aux jeux vidéo","« I never watch TV »."],
 ["When does he go to the drama club?","on Wednesday afternoon","on Saturday morning|on Monday evening|every day","« On Wednesday afternoon »."]]);
R("hobbies","Lily loves art. She draws every day and she paints at the weekend. Her bedroom walls are full of her pictures. She wants to be an artist. Her favourite painter is Frida Kahlo.",[
 ["Que fait Lily le week-end ?","Elle peint.","Elle danse.|Elle fait du sport.|Elle chante.","« she paints at the weekend »."],
 ["What does Lily want to be?","an artist","a singer|a teacher|a vet","« She wants to be an artist »."]]);
R("house","I live in a small house in a village. Downstairs, there is a kitchen and a living room. Upstairs, there are two bedrooms and a bathroom. There isn't a garage, but there is a big garden with an apple tree.",[
 ["Qu'y a-t-il dans le jardin ?","un pommier","une piscine|un garage|un potager","« a big garden with an apple tree »."],
 ["How many bedrooms are there?","two","three|one|four","« two bedrooms »."]]);
R("house","We live in a flat on the tenth floor of a tall building in Glasgow. From my bedroom window, I can see the river. There's a lift, but I always take the stairs: it's good exercise!",[
 ["Pourquoi prend-il l'escalier ?","C'est un bon exercice.","L'ascenseur est en panne.|Il a peur de l'ascenseur.|Il habite au premier étage.","« it's good exercise »."],
 ["What can he see from his window?","the river","the sea|a park|the mountains","« I can see the river »."]]);
R("town","My town is quite small. There's a library, a post office, two bakeries and a sports centre. The cinema is next to the station. On Saturday, there's a market in the main square.",[
 ["Où est le cinéma ?","à côté de la gare","en face de la gare|sur la place|derrière la bibliothèque","« next to the station »."],
 ["When is the market?","on Saturday","on Sunday|every day|on Monday","« On Saturday, there's a market »."]]);
R("town","Excuse me, how can I get to the museum? — Go straight on and take the first street on the left. The museum is opposite the park, between a café and a bank.",[
 ["Où est le musée ?","en face du parc","dans le parc|à côté du parc|derrière le parc","opposite = en face de."],
 ["Quelle rue faut-il prendre ?","la première à gauche","la première à droite|la deuxième à gauche|aucune : tout droit","« the first street on the left »."]]);
R("sports","Ben is crazy about football. He plays for his school team every Wednesday. He's the goalkeeper. His team is very good and they often win. Ben can also swim and ride a horse.",[
 ["À quel poste joue Ben ?","gardien de but","attaquant|défenseur|arbitre","goalkeeper = gardien de but."],
 ["Que sait faire Ben aussi ?","nager et monter à cheval","skier et nager|faire du vélo|jouer au tennis","« Ben can also swim and ride a horse »."]]);
R("sports","Can you ski? I can't! But my sister can ski very well. Every winter, we go to the mountains in France. My sister skis all day and I play in the snow with my dad.",[
 ["Qui sait skier ?","la sœur","le narrateur|le père|personne","« my sister can ski very well »."],
 ["Where do they go every winter?","to the mountains in France","to the seaside|to Scotland|to Italy","« we go to the mountains in France »."]]);
R("clothes","Today it's very cold, so I'm wearing my warm coat, a woolly hat, a scarf and gloves. My little brother isn't wearing his gloves: he can't find them!",[
 ["Que ne porte pas le petit frère ?","ses gants","son bonnet|son manteau|son écharpe","« isn't wearing his gloves »."],
 ["Why is she wearing a coat?","because it's very cold","because it's raining|because she's ill|because it's her birthday","« it's very cold, so… »."]]);
R("clothes","At my school in London, we wear a uniform: a white shirt, a blue tie, a blue jumper and black trousers or a black skirt. We can't wear trainers. I don't like my uniform, but it's practical.",[
 ["Que n'ont-ils pas le droit de porter ?","des baskets","une cravate|un pull bleu|une jupe noire","« We can't wear trainers »."],
 ["What colour is the tie?","blue","black|white|red","« a blue tie »."]]);
R("weather","Dear Grandma, greetings from Cornwall! The weather is lovely: it's sunny and warm. We're staying in a small hotel near the beach. Right now, Dad is swimming and I'm writing postcards. Love, Mia.",[
 ["Que fait Mia en ce moment ?","Elle écrit des cartes postales.","Elle nage.|Elle dort.|Elle fait du surf.","« I'm writing postcards » ; c'est le père qui nage."],
 ["What's the weather like?","sunny and warm","cold and windy|rainy|snowy","« it's sunny and warm »."]]);
R("weather","In Britain, the weather changes a lot. It often rains, even in summer. People always talk about the weather! In winter, it sometimes snows, especially in Scotland.",[
 ["De quoi les Britanniques parlent-ils toujours ?","du temps qu'il fait","de football|de la famille royale|de la nourriture","« People always talk about the weather »."],
 ["Where does it snow most?","in Scotland","in London|in Wales|in Cornwall","« especially in Scotland »."]]);
R("uk","The United Kingdom has got four nations: England, Scotland, Wales and Northern Ireland. The capital is London. In Wales, people speak English and Welsh. The flag of the UK is called the Union Jack.",[
 ["Comment s'appelle le drapeau du Royaume-Uni ?","the Union Jack","the Stars and Stripes|the Red Dragon|the Maple Leaf","« The flag of the UK is called the Union Jack »."],
 ["Quelles langues parle-t-on au pays de Galles ?","l'anglais et le gallois","l'anglais et l'irlandais|seulement le gallois|l'anglais et l'écossais","« English and Welsh »."]]);
R("uk","In Britain, children hang a stocking at the end of their bed on Christmas Eve. Father Christmas comes down the chimney and fills it with presents. On Christmas Day, families eat turkey and Christmas pudding, and they pull crackers.",[
 ["Quand les enfants accrochent-ils une chaussette ?","le 24 décembre au soir","le 25 au matin|le 26 décembre|le 31 décembre","Christmas Eve = la veille de Noël."],
 ["What do families eat on Christmas Day?","turkey and Christmas pudding","fish and chips|pizza|pancakes","« turkey and Christmas pudding »."]]);
R("uk","Edinburgh is the capital of Scotland. There is a famous castle on a hill in the centre. Every August, there is a big festival with music, theatre and comedy. Scottish people sometimes wear kilts for special occasions.",[
 ["Où est le château d'Édimbourg ?","sur une colline, au centre","au bord de la mer|dans la campagne|sur une île","« on a hill in the centre »."],
 ["When is the festival?","every August","every December|every spring|every Christmas","« Every August »."]]);
R("food","For a picnic, you need some sandwiches, some crisps, some fruit and some water. Don't forget the plates! Oh no! There aren't any knives. How can we cut the cake?",[
 ["Que manque-t-il ?","des couteaux","des assiettes|de l'eau|des chips","« There aren't any knives » ; knife = couteau (pluriel knives)."],
 ["Qu'est-ce qui N'est PAS dans la liste du pique-nique ?","du fromage","des chips|des fruits|de l'eau","sandwiches, crisps, fruit, water : pas de fromage (cheese)."]]);
R("food","Pancakes (for 4 people): 100 g of flour, 2 eggs, 300 ml of milk, a little butter. Mix the flour, the eggs and the milk. Cook the pancakes in a hot pan with some butter. Eat them with sugar and lemon!",[
 ["Combien d'œufs faut-il ?","2","4|3|1","« 2 eggs »."],
 ["Avec quoi mange-t-on les crêpes ici ?","du sucre et du citron","du chocolat|de la confiture|du sirop d'érable","« with sugar and lemon »."]]);
R("food","A traditional English breakfast is very big: eggs, bacon, sausages, beans, tomatoes, mushrooms and toast. Today, most people don't eat it every day. They usually have cereal or toast with a cup of tea.",[
 ["Que mangent la plupart des gens le matin aujourd'hui ?","des céréales ou des toasts","un petit-déjeuner anglais complet|des œufs au bacon|rien du tout","« They usually have cereal or toast »."],
 ["Is a traditional English breakfast big or small?","big","small|light|sweet","« very big »."]]);
R("shop","Shopping list: a loaf of bread, six eggs, a bottle of milk, a kilo of potatoes, two packets of crisps. Mum gives me £10. The total is £8.40, so I get £1.60 change.",[
 ["Combien d'œufs y a-t-il sur la liste ?","6","2|10|12","« six eggs »."],
 ["How much change does she get?","£1.60","£8.40|£2.60|£1.40","£10 − £8.40 = £1.60."]]);
R("shop","Shop assistant: Can I help you? — Customer: Yes, how much is this T-shirt? — It's £15. — And these jeans? — They're £35. — OK, I'd like the T-shirt, please.",[
 ["Combien coûte le jean ?","35 £","15 £|50 £|25 £","« They're £35 »."],
 ["What does the customer buy?","the T-shirt","the jeans|both|nothing","« I'd like the T-shirt »."]]);
R("animals","Pandas live in China, in forests in the mountains. They are black and white. They eat bamboo for about twelve hours a day! A baby panda is very small: it's about the size of a mouse.",[
 ["Que mangent les pandas ?","du bambou","des feuilles de thé|des fruits|du poisson","« They eat bamboo »."],
 ["Where do pandas live?","in China","in Africa|in India|in Australia","« Pandas live in China »."]]);
R("animals","Sam has got a lot of pets: two cats, a rabbit and a tortoise. The tortoise is fifty years old! It's his grandfather's old tortoise. Sam's sister has got a hamster. Its name is Peanut.",[
 ["Quel âge a la tortue ?","50 ans","15 ans|5 ans|12 ans","« fifty years old »."],
 ["Whose hamster is Peanut?","Sam's sister's","Sam's|his grandfather's|his mum's","« Sam's sister has got a hamster. Its name is Peanut »."]]);
R("dates","Dear Josh, it's my birthday on Saturday, the 14th of May! I'm going to be twelve. Come to my party at 3 o'clock at my house. We're going to play games and eat a big chocolate cake. Love, Amy.",[
 ["Quand est la fête ?","le samedi 14 mai","le dimanche 14 mai|le samedi 4 mai|le samedi 14 mars","« Saturday, the 14th of May »."],
 ["How old is Amy going to be?","twelve","eleven|thirteen|fourteen","« I'm going to be twelve »."]]);
R("dates","In Britain, the school year starts in September and finishes in July. There are three terms. Pupils have a long holiday in summer, two weeks at Christmas and two weeks at Easter. There are also short holidays called half-terms.",[
 ["Combien y a-t-il de trimestres (terms) ?","3","2|4|5","« There are three terms »."],
 ["When does the school year start?","in September","in January|in July|in August","« starts in September »."]]);
R("countries","Hi, I'm Luca. I'm from Rome, in Italy. I speak Italian, English and a little French. My mum is Spanish, so we sometimes speak Spanish at home. I want to visit London one day.",[
 ["Combien de langues parle Luca ?","4","2|3|5","Italien, anglais, un peu de français et espagnol : 4."],
 ["Where is Luca's mum from?","Spain","Italy|France|England","« My mum is Spanish »."]]);
R("countries","Australia is a very big country. It is also a continent. The capital is Canberra. Kangaroos and koalas live there. In December, it's summer in Australia!",[
 ["Quelle saison est-ce en décembre en Australie ?","l'été","l'hiver|le printemps|l'automne","« In December, it's summer in Australia »."],
 ["What is the capital of Australia?","Canberra","Sydney|Melbourne|Perth","« The capital is Canberra »."]]);
R("health","I was ill last week. I was very hot and my head was painful. I wasn't at school for three days. My friends were very kind. Now I'm fine.",[
 ["Combien de jours a-t-il manqué le collège ?","3","2|5|7","« for three days »."],
 ["Were his friends kind?","Yes, they were.","No, they weren't.|Yes, they did.|No, he wasn't.","« My friends were very kind »."]]);
R("health","To stay healthy, eat a lot of fruit and vegetables and drink water. Don't eat too many sweets. Do some sport every day and sleep for about nine hours a night. Don't look at screens before bed!",[
 ["Combien d'heures faut-il dormir ?","environ 9 h","environ 6 h|environ 12 h|environ 7 h","« about nine hours a night »."],
 ["What mustn't you do before bed?","look at screens","read a book|drink water|brush your teeth","« Don't look at screens before bed »."]]);
R("weekend","Last Saturday, I stayed at home. In the morning, I tidied my bedroom and helped my mum in the garden. In the afternoon, I played football with my cousins. In the evening, we watched a film and laughed a lot.",[
 ["Qu'a-t-il fait le matin ?","rangé sa chambre et aidé au jardin","joué au football|regardé un film|fait les courses","« I tidied my bedroom and helped my mum in the garden »."],
 ["Who did he play football with?","his cousins","his mum|his brother|his school friends","« with my cousins »."]]);
R("weekend","Yesterday it rained all day. We didn't go out. My sister baked a cake and I painted a picture. Dad cooked pasta for dinner. It was a quiet but nice day.",[
 ["Pourquoi ne sont-ils pas sortis ?","Il a plu toute la journée.","Ils étaient malades.|Il faisait trop chaud.|La voiture était en panne.","« it rained all day »."],
 ["What did Dad cook?","pasta","a cake|pizza|soup","« Dad cooked pasta »."]]);
R("story","Once upon a time, a little girl went into the forest. She saw a small house and knocked on the door. Nobody answered. She opened the door and found three bowls of porridge on the table. She ate the smallest one!",[
 ["Qu'a-t-elle trouvé sur la table ?","trois bols de porridge","trois chaises|un gâteau|trois lits","« three bowls of porridge »."],
 ["Which bowl did she eat?","the smallest one","the biggest one|all of them|none","« She ate the smallest one »."]]);
R("story","Last Sunday, Tom got up early and went fishing with his grandfather. They sat by the lake for hours. Tom caught a big fish, but his grandfather didn't catch anything. They took a photo and put the fish back in the water.",[
 ["Qu'ont-ils fait du poisson ?","Ils l'ont remis dans l'eau.","Ils l'ont mangé.|Ils l'ont vendu.|Ils l'ont donné au chat.","« put the fish back in the water »."],
 ["Who caught a fish?","Tom","his grandfather|both of them|nobody","« Tom caught a big fish, but his grandfather didn't catch anything »."]]);
R("story","Yesterday, Emma lost her cat, Tiger. She looked everywhere: in the garden, in the street and in the park. She was very sad. In the evening, she heard a noise in the kitchen. Tiger was in the cupboard!",[
 ["Où était le chat ?","dans le placard de la cuisine","dans le parc|dans la rue|dans le jardin","« Tiger was in the cupboard »."],
 ["How did Emma feel during the day?","sad","happy|angry|bored","« She was very sad »."]]);
R("holidays","Dear Ella, we're in Barcelona! We arrived on Monday. Yesterday we visited a beautiful church and we ate paella. Today we're at the beach. The sea is warm. See you soon! Leo.",[
 ["Qu'ont-ils mangé hier ?","de la paella","des tapas|des pâtes|une pizza","« we ate paella »."],
 ["When did they arrive?","on Monday","yesterday|today|last week","« We arrived on Monday »."]]);
R("holidays","Last summer, we didn't go abroad. We went camping in Wales. It rained a lot, but we had fun. We climbed a mountain, we rode horses and we cooked on a fire. Did I like it? Yes, I loved it!",[
 ["Où sont-ils allés ?","au pays de Galles","à l'étranger|en Écosse|en Espagne","« We went camping in Wales »."],
 ["Did he like the holiday?","Yes, he loved it.","No, he didn't.|Not really, because of the rain.|He doesn't say.","« Yes, I loved it! »"]]);
R("usa","New York is the biggest city in the United States. About eight million people live there. You can visit the Statue of Liberty, walk in Central Park and see the skyscrapers of Manhattan. People call it the Big Apple.",[
 ["Quel est le surnom de New York ?","la Grosse Pomme","la Ville lumière|la Ville des anges|la Ville du vent","the Big Apple = la Grosse Pomme."],
 ["How many people live in New York?","about eight million","about eighty million|about one million|about eight thousand","« About eight million people »."]]);
R("usa","Thanksgiving is on the fourth Thursday of November. In 1621, the Pilgrims and the Native Americans shared a big meal after the harvest. Today, American families get together and eat turkey and pumpkin pie.",[
 ["Quel dessert mange-t-on à Thanksgiving ?","la tarte à la citrouille","le pudding de Noël|les crêpes|le gâteau au fromage","pumpkin pie = tarte à la citrouille."],
 ["When is Thanksgiving?","on the fourth Thursday of November","on the fourth of July|on the 25th of December|on the first Monday of November","« on the fourth Thursday of November »."]]);
R("usa","The Statue of Liberty was a present from France to the United States. It arrived in New York in 1885. It is 93 metres tall with its base. The statue is green because it is made of copper.",[
 ["Qui a offert la statue ?","la France","l'Angleterre|l'Espagne|le Canada","« a present from France »."],
 ["Why is the statue green?","because it is made of copper","because it is painted green|because it is very old|because of the trees","Le cuivre (copper) devient vert à l'air."]]);
R("jobs","My aunt Kate is a vet. She works in a small town. She looks after cats, dogs and rabbits, but she also visits farms to help cows and horses. She works long hours, but she loves her job.",[
 ["Où va-t-elle aussi ?","dans des fermes","dans des zoos|dans des écoles|dans des hôpitaux","« she also visits farms »."],
 ["Does Kate like her job?","Yes, she loves it.","No, she doesn't.|Not really.|She doesn't say.","« she loves her job »."]]);
R("jobs","Hello, I'm Dan. I'm a firefighter in Liverpool. I work for twenty-four hours, then I have three days off. My job is dangerous but exciting. I also visit schools to teach children about fire safety.",[
 ["Combien d'heures travaille-t-il d'affilée ?","24 heures","12 heures|8 heures|3 jours","« I work for twenty-four hours »."],
 ["Why does he visit schools?","to teach children about fire safety","to put out fires|to find new firefighters|to repair the buildings","« to teach children about fire safety »."]]);
R("plans","This summer, my family is going to travel to Canada. We're going to stay with my uncle in Montreal. I'm going to practise my English and my French! We aren't going to visit Toronto because it's too far.",[
 ["Chez qui vont-ils loger ?","chez l'oncle","à l'hôtel|chez des amis|au camping","« stay with my uncle »."],
 ["Are they going to visit Toronto?","No, they aren't.","Yes, they are.|Yes, next week.|They don't know.","« We aren't going to visit Toronto »."]]);
R("plans","When I grow up, I'm going to be a chef. I'm going to open a restaurant in London. I'm going to cook French and Indian food. But first, I'm going to study at a cooking school.",[
 ["Que va-t-il faire d'abord ?","étudier dans une école de cuisine","ouvrir un restaurant|voyager en Inde|travailler à Paris","« But first, I'm going to study at a cooking school »."],
 ["What food is he going to cook?","French and Indian food","Italian food|Chinese and Japanese food|English food","« French and Indian food »."]]);
R("feelings","Hi Sophie, I'm writing because I'm a bit sad. My best friend is moving to Scotland next week. I'm going to miss her a lot. But we can call each other every day. Write soon! Grace",[
 ["Pourquoi Grace est-elle triste ?","Sa meilleure amie déménage.","Elle est malade.|Elle a perdu son chat.|Elle a raté un contrôle.","« My best friend is moving to Scotland »."],
 ["Where is her friend going?","to Scotland","to Wales|to Ireland|to London","« moving to Scotland »."]]);
R("feelings","I'm very excited! Tomorrow, we're going to a theme park. I love roller coasters, but my brother is scared of them. He prefers the small rides. Mum is going to stay with him.",[
 ["Comment se sent le narrateur ?","très impatient","triste|inquiet|fatigué","excited = très impatient, surexcité."],
 ["Who is scared of roller coasters?","his brother","his mum|the narrator|his dad","« my brother is scared of them »."]]);
R("nature","Every year, people throw away millions of plastic bottles. Plastic can stay in the sea for hundreds of years. Turtles and fish eat it and get ill. So, use a water bottle, say no to plastic bags and recycle!",[
 ["Combien de temps le plastique peut-il rester dans la mer ?","des centaines d'années","quelques jours|un an|dix ans","« for hundreds of years »."],
 ["What does the text ask you to do?","recycle and use less plastic","go swimming|buy more bottles|feed the turtles","« say no to plastic bags and recycle »."]]);
R("nature","Our school has got a garden. Every Friday, our class plants vegetables and flowers. We don't use chemicals. We collect rainwater for the plants. In June, we eat our own tomatoes and strawberries!",[
 ["Avec quoi arrosent-ils ?","l'eau de pluie","l'eau du robinet|l'eau de la rivière|des produits chimiques","rainwater = l'eau de pluie."],
 ["When do they plant?","every Friday","every day|in June|on Monday","« Every Friday »."]]);
R("tech","Leo is twelve. He's got a smartphone and a tablet. He uses his phone to send messages to his friends and to listen to music. His parents have a rule: no screens at the dinner table and no phones in the bedroom at night.",[
 ["Quelle est la règle des parents ?","pas d'écran à table ni de téléphone dans la chambre la nuit","pas de téléphone avant 18 ans|une heure d'écran par jour|pas de musique","« no screens at the dinner table and no phones in the bedroom at night »."],
 ["What does Leo use his phone for?","messages and music","games and films|homework|photos only","« to send messages … and to listen to music »."]]);
R("tech","At the moment, I'm doing a project about robots. I'm looking for information on the internet. Robots can do a lot of things: they can build cars, clean floors and even help doctors. But they can't feel emotions.",[
 ["Qu'est-ce que les robots ne peuvent pas faire ?","ressentir des émotions","construire des voitures|nettoyer les sols|aider les médecins","« they can't feel emotions »."],
 ["What is the narrator doing at the moment?","a project about robots","a video game|a robot|a film","« I'm doing a project about robots »."]]);
R("festivals","Bonfire Night is on the 5th of November. In 1605, a man called Guy Fawkes tried to blow up the Houses of Parliament in London. He failed. Today, British people light bonfires and watch fireworks to remember that night.",[
 ["Qu'a essayé de faire Guy Fawkes ?","faire sauter le Parlement","brûler une cathédrale|construire un pont|voler la couronne","« tried to blow up the Houses of Parliament »."],
 ["What do people watch on Bonfire Night?","fireworks","a parade|a football match|a film","« watch fireworks »."]]);
R("festivals","On Halloween, my friends and I dressed up. I was a witch and my brother was a ghost. We went from house to house and said: trick or treat! People gave us lots of sweets. When we got home, we ate too many!",[
 ["En quoi le frère était-il déguisé ?","en fantôme","en sorcière|en vampire|en citrouille","« my brother was a ghost »."],
 ["What did people give them?","sweets","money|pumpkins|cakes","« People gave us lots of sweets »."]]);
R("festivals","Easter is in March or April. In Britain, children look for chocolate eggs in the garden. Some families paint real eggs. On Good Friday, people eat hot cross buns: small sweet breads with a cross on top.",[
 ["Que sont les « hot cross buns » ?","de petits pains sucrés avec une croix","des œufs en chocolat|des crêpes|des gâteaux à la citrouille","« small sweet breads with a cross on top »."],
 ["When is Easter?","in March or April","in May|in December|in October","« Easter is in March or April »."]]);
R("transport","London has got the oldest underground in the world: the Tube. It opened in 1863. Today, millions of people use it every day. You can also take the famous red double-decker buses or a black cab.",[
 ["En quelle année le métro de Londres a-t-il ouvert ?","1863","1963|1836|1886","« It opened in 1863 »."],
 ["What colour are London taxis in the text?","black","yellow|red|green","« a black cab »."]]);
R("transport","I live in the countryside, so I go to school by bus. The journey takes forty minutes. My friend Max lives near the school, so he goes on foot. My brother is seventeen: he's learning to drive.",[
 ["Combien de temps dure le trajet en bus ?","40 minutes","14 minutes|4 minutes|1 heure","« forty minutes »."],
 ["How does Max go to school?","on foot","by bus|by bike|by car","« he goes on foot »."]]);

function exoLecture(tag){
  const f=LECT.filter(x=>x.t===tag),x=pioche(f.length?f:LECT);
  return qcm(`📖 Lis : « ${x.x} » — ${x.q}`,x.b,x.f,x.e);
}

/* =========================================================
   7. LE VOCABULAIRE : exercices
   ========================================================= */
function exoVocab(tag){
  const pool=VOC.filter(x=>x.t===tag),liste=pool.length?pool:VOC;
  const m=pioche(liste),en=premier(m.en);
  const autres=()=>{const ok=x=>x!==m&&x.fr!==m.fr&&x.en!==m.en;return [...melange(liste.filter(ok)).slice(0,2),...melange(VOC.filter(x=>ok(x)&&x.t!==m.t))].slice(0,3);};
  const k=alea(1,5);
  if(k===2)return qcm(`Comment dit-on « ${m.fr} » en anglais ?`,en,autres().map(x=>premier(x.en)),`« ${m.fr} » = ${m.en.split("|").join(" ou ")}.`);
  if(k===3)return saisie(`Écris en anglais : « ${m.fr} »`,variantes(m.en),`« ${m.fr} » = ${m.en.split("|").join(" ou ")}.`);
  if(k===4)return ecoute(en,"🔊 Écoute : que veut dire ce que tu entends ?",m.fr,autres().map(x=>x.fr),`« ${en} » = ${m.fr}.`);
  if(k===5&&/^[A-Za-z]{3,8}$/.test(sansArticle(en)))return ecouteSaisie(en,"🔊 Écoute et écris le mot anglais que tu entends.",variantes(m.en),`« ${en} » = ${m.fr}.`);
  return qcm(`Que veut dire « ${en} » ?`,m.fr,autres().map(x=>x.fr),`« ${en} » = ${m.fr}.`);
}

/* =========================================================
   8. LES SÉANCES
   ========================================================= */
function resoudre(mat,tag){
  const m=/^bilan:(\d+)-(\d+)$/.exec(tag);if(!m)return tag;
  const cand=SEMAINES.slice(+m[1]-1,+m[2]).map(s=>s.tag[mat]).filter(t=>!t.startsWith("bilan"));
  return pioche(cand);
}
function exo(mat,tag){
  if(mat==="v")return exoVocab(tag);
  if(mat==="g")return exoGram(tag);
  if(mat==="l")return exoEcoute(tag);
  return exoLecture(tag);
}
const cle=q=>q.enonce+"|"+(q.audio||"");
/* n questions de la semaine, sans doublon ; si la banque s'épuise, on prend dans les semaines déjà vues. */
function serie(mat,semaine,n,vus){
  const out=[];let essais=0;
  while(out.length<n){
    essais++;
    const s=essais>25?SEMAINES[alea(0,Math.max(semaine-1,2))]:SEMAINES[semaine-1];
    const q=exo(mat,resoudre(mat,s.tag[mat]));
    if(vus.has(cle(q))&&essais<80)continue;
    vus.add(cle(q));out.push(q);
  }
  return out;
}
/* La spirale : une question d'une semaine précédente. */
function spirale(mat,semaine,vus){return serie(mat,semaine>1?alea(1,semaine-1):1,1,vus)[0];}
function seanceHorsLigne(mat,semaine){
  const vus=new Set();
  if(mat==="rev")return [...serie("v",semaine,1,vus),...serie("g",semaine,2,vus),...serie("l",semaine,1,vus),...serie("r",semaine,1,vus),
    spirale(pioche(["v","g","l"]),semaine,vus),spirale(pioche(["g","r"]),semaine,vus)];
  return [...serie(mat,semaine,4,vus),spirale(mat,semaine,vus)];
}

export const programme = { code: "anglais-3", nom: "Anglais · niveau 3 (6e-5e)", rituel: "Monte le son : il y a des questions à écouter.", SEMAINES, JOURS, NOM_MAT, PERIODES, matiereDuJour, seanceHorsLigne };
