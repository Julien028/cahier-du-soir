// Programme « Anglais · niveau 4 (4e-3e) » (13-14 ans, A2 vers B1, fin de cycle 4), créé le 08/10/2026.
// Un cours d'anglais complet : une leçon par semaine, puis vocabulaire, grammaire,
// écoute (la tablette prononce les phrases, champ « audio ») et lecture. Prépare au brevet.
// Consignes et explications en français ; ce qu'on apprend est en anglais britannique.

/* =========================================================
   1. LE PROGRAMME — 36 SEMAINES
   t = étiquettes : vocabulaire | grammaire | écoute | lecture
   « bilan:a-b » = on pioche dans les semaines a à b.
   ========================================================= */
const SEMAINES=[
{n:1,p:1,v:"Les voyages et les souvenirs de vacances",g:"Révision : le prétérit (réguliers, irréguliers, did)",l:"Comprendre un récit de vacances",r:"Lire un récit de voyage",t:"travel|pastsimple|pasttell|travel",lecon:`
<h4>Vocabulaire : raconter un voyage</h4>
<table><tr><td>to go abroad / to go sightseeing</td><td>partir à l'étranger / faire du tourisme</td></tr><tr><td>a journey / a trip / a flight</td><td>un trajet / un voyage, une excursion / un vol</td></tr>
<tr><td>to book / to pack / to unpack</td><td>réserver / faire ses bagages / défaire ses bagages</td></tr><tr><td>to get lost / to miss the train</td><td>se perdre / rater le train</td></tr></table>
<h4>Grammaire : le prétérit (rappel)</h4>
<p>Action <b>terminée</b>, datée ou située dans le passé (yesterday, last year, in 2019, two weeks ago). Le français utilise souvent le passé composé.</p>
<table><tr><td>affirmation</td><td>réguliers en -ed (visited, stopped, tried) ; irréguliers à savoir (went, took, flew, caught)</td></tr>
<tr><td>négation</td><td>didn't + base : <i>We didn't book a hotel.</i></td></tr><tr><td>question</td><td>(mot interrogatif) + did + sujet + base : <i>Where did you stay?</i></td></tr></table>
<p><b>Piège :</b> une seule marque du passé : <i>Did you <b>see</b>?</i> et jamais « did you saw ». Avec be : <i>Were you tired? It wasn't expensive.</i></p>
<ul><li><i>We flew to Dublin and hired bikes.</i> = Nous avons pris l'avion pour Dublin et loué des vélos.</li><li><i>I didn't buy any souvenirs.</i> = Je n'ai acheté aucun souvenir.</li><li><i>How long did the journey take?</i> = Combien de temps a duré le trajet ?</li></ul>
<p>Prononciation : <b>-ed</b> se prononce [ɪd] seulement après t ou d : <i>visited, landed</i>.</p>`},
{n:2,p:1,v:"L'enfance et les souvenirs",g:"Le prétérit continu (was / were + -ing)",l:"Comprendre ce qui se passait à un moment du passé",r:"Lire un souvenir d'enfance",t:"childhood|pastcont|pastcont|childhood",lecon:`
<h4>Vocabulaire : se souvenir</h4>
<table><tr><td>a memory / to remember</td><td>un souvenir (dans la tête) / se souvenir</td></tr><tr><td>a toy / a teddy bear / a nursery</td><td>un jouet / un ours en peluche / une crèche</td></tr>
<tr><td>to grow up / childhood</td><td>grandir / l'enfance</td></tr><tr><td>when I was a child / when I was younger</td><td>quand j'étais enfant / plus jeune</td></tr></table>
<h4>Grammaire : le prétérit continu</h4>
<p><b>was / were + verbe en -ing</b>. Il décrit une action <b>en cours</b> à un moment précis du passé, le décor d'une scène. Il se traduit souvent par l'<b>imparfait</b>.</p>
<table><tr><td>affirmation</td><td><i>At 8 pm, I was watching TV.</i> = À 20 h, je regardais la télé.</td></tr>
<tr><td>négation</td><td><i>They weren't listening.</i> = Ils n'écoutaient pas.</td></tr><tr><td>question</td><td><i>What were you doing at midnight?</i> = Que faisais-tu à minuit ?</td></tr></table>
<p><b>Piège :</b> l'imparfait d'habitude (« je jouais tous les jours ») ne se traduit <b>pas</b> par le prétérit continu : on dit <i>I played every day</i> ou <i>I used to play</i>.</p>
<ul><li><i>It was raining and the children were playing inside.</i> = Il pleuvait et les enfants jouaient à l'intérieur.</li><li><i>She was sleeping when I arrived.</i> = Elle dormait quand je suis arrivé.</li></ul>`},
{n:3,p:1,v:"Les faits divers et les récits",g:"Prétérit simple ou continu : when / while",l:"Comprendre un fait divers",r:"Lire un fait divers",t:"stories|whenwhile|stories|stories",lecon:`
<h4>Vocabulaire : raconter un événement</h4>
<table><tr><td>an accident / a crash / a fire</td><td>un accident / une collision / un incendie</td></tr><tr><td>a thief / to steal / a witness</td><td>un voleur / voler (dérober) / un témoin</td></tr>
<tr><td>to rescue / to injure / to escape</td><td>secourir / blesser / s'échapper</td></tr><tr><td>suddenly / luckily / unfortunately</td><td>soudain / heureusement / malheureusement</td></tr></table>
<h4>Grammaire : deux passés ensemble</h4>
<table><tr><td>prétérit continu</td><td>l'action longue, le décor (imparfait)</td></tr><tr><td>prétérit simple</td><td>l'action courte qui interrompt (passé composé, passé simple)</td></tr></table>
<p><b>when</b> + action courte : <i>I was cycling <b>when</b> a dog ran into the road.</i> = Je roulais à vélo quand un chien a traversé.</p>
<p><b>while</b> (pendant que) + action longue : <i><b>While</b> she was walking home, she found a wallet.</i></p>
<p>Deux actions longues en même temps : <i>While I was cooking, my brother was laying the table.</i></p>
<p><b>Piège :</b> <i>to steal</i> (stole, stolen) = voler un objet ; <i>to fly</i> = voler dans les airs. <i>To rob</i> = cambrioler une personne ou une banque.</p>
<ul><li><i>The thieves escaped while the guard was sleeping.</i> = Les voleurs se sont échappés pendant que le gardien dormait.</li><li><i>Luckily, nobody was injured.</i> = Heureusement, personne n'a été blessé.</li></ul>`},
{n:4,p:1,v:"Les expériences de la vie",g:"Le present perfect : formation, ever / never",l:"Comprendre des expériences",r:"Lire un témoignage",t:"experiences|pp_ever|pp|experiences",lecon:`
<h4>Vocabulaire : vivre des expériences</h4>
<table><tr><td>to try / to taste / to meet</td><td>essayer / goûter / rencontrer</td></tr><tr><td>to climb / to ride / to win a prize</td><td>escalader / monter, faire (vélo, cheval) / gagner un prix</td></tr>
<tr><td>a lifetime / an adventure / a challenge</td><td>une vie entière / une aventure / un défi</td></tr></table>
<h4>Grammaire : le present perfect</h4>
<p><b>have / has + participe passé</b>. Il fait le lien entre le passé et le présent : on parle d'une <b>expérience</b> ou d'un <b>bilan</b>, <b>sans dire quand</b>.</p>
<table><tr><td>affirmation</td><td><i>I have (I've) visited London.</i> / <i>She has (she's) seen this film.</i></td></tr>
<tr><td>négation</td><td><i>I haven't tried sushi.</i> / <i>He hasn't been to Spain.</i></td></tr><tr><td>question</td><td><i><b>Have</b> you <b>ever</b> ridden a horse?</i> — Yes, I have. / No, I haven't.</td></tr>
<tr><td>never</td><td><i>I've <b>never</b> flown.</i> = Je n'ai jamais pris l'avion.</td></tr></table>
<p>Participe passé : -ed pour les réguliers ; 3e colonne pour les irréguliers : go → went → <b>gone</b>, see → saw → <b>seen</b>, eat → ate → <b>eaten</b>, be → was → <b>been</b>.</p>
<p><b>Piège :</b> <i>He has been to Rome</i> = il est allé à Rome (et revenu) ; <i>He has gone to Rome</i> = il est parti à Rome (il y est encore).</p>
<ul><li><i>Have you ever met a famous person?</i> = As-tu déjà rencontré une personne célèbre ?</li><li><i>We've never won a match!</i> = Nous n'avons jamais gagné un match !</li></ul>`},
{n:5,p:1,v:"La technologie et les réseaux sociaux",g:"Le present perfect avec for / since",l:"Comprendre des nombres et des années",r:"Lire un texte sur les réseaux sociaux",t:"tech|forsince|numbers|tech",lecon:`
<h4>Vocabulaire : en ligne</h4>
<table><tr><td>social media / a post / to share</td><td>les réseaux sociaux / une publication / partager</td></tr><tr><td>a follower / to follow / a like</td><td>un abonné / suivre / une mention « j'aime »</td></tr>
<tr><td>an app / to update / to log in</td><td>une application / mettre à jour / se connecter</td></tr><tr><td>fake news / cyberbullying / privacy</td><td>les infox / le cyberharcèlement / la vie privée</td></tr></table>
<h4>Grammaire : depuis</h4>
<p>Pour une situation qui a <b>commencé dans le passé et dure encore</b>, l'anglais utilise le <b>present perfect</b> (le français dit « présent + depuis »).</p>
<table><tr><td><b>for</b> + durée</td><td><i>I've had this phone <b>for</b> two years.</i> = J'ai ce téléphone depuis deux ans.</td></tr>
<tr><td><b>since</b> + point de départ</td><td><i>She has lived here <b>since</b> 2020 / since Monday.</i> = Elle habite ici depuis 2020 / depuis lundi.</td></tr>
<tr><td>question</td><td><i><b>How long</b> have you known him?</i> = Depuis combien de temps le connais-tu ?</td></tr></table>
<p><b>Piège :</b> jamais de présent avec « depuis » : « I know him since 2019 » est faux → <i>I've known him since 2019.</i></p>
<p>Les années : <i>1998</i> = nineteen ninety-eight ; <i>2015</i> = twenty fifteen (ou two thousand and fifteen) ; <i>2008</i> = two thousand and eight.</p>`},
{n:6,p:1,v:"Les nouvelles du jour",g:"Already, yet, just ; present perfect ou prétérit ?",l:"Distinguer present perfect et prétérit",r:"Lire une brève d'actualité",t:"news|ppvspast|ppvspast|news",lecon:`
<h4>Vocabulaire : l'actualité</h4>
<table><tr><td>the news / a headline / an article</td><td>les informations / un gros titre / un article</td></tr><tr><td>to happen / an event / a report</td><td>se produire / un événement / un reportage</td></tr>
<tr><td>recently / lately / so far</td><td>récemment / ces derniers temps / jusqu'à présent</td></tr></table>
<h4>Grammaire : already, yet, just</h4>
<table><tr><td><b>just</b> (venir de)</td><td><i>I've <b>just</b> finished.</i> = Je viens de finir.</td></tr><tr><td><b>already</b> (déjà)</td><td><i>She has <b>already</b> left.</i> = Elle est déjà partie.</td></tr>
<tr><td><b>yet</b> (négation : pas encore ; question : déjà)</td><td><i>I haven't eaten <b>yet</b>.</i> / <i>Have you finished <b>yet</b>?</i> — yet se place à la fin.</td></tr></table>
<h4>Present perfect ou prétérit ?</h4>
<table><tr><td>prétérit</td><td>moment précis et terminé : <i>yesterday, last week, in 2010, ago, when…?</i></td></tr><tr><td>present perfect</td><td>pas de date, bilan, lien avec maintenant : <i>ever, never, already, yet, just, for, since</i></td></tr></table>
<p><b>Piège :</b> « J'ai vu ce film hier » = <i>I <b>saw</b> this film yesterday</i> (jamais « I have seen … yesterday »).</p>
<ul><li><i>Have you heard the news? A storm has hit the coast.</i> = Tu as entendu les infos ? Une tempête a frappé la côte.</li><li><i>It hit the coast at 6 am.</i> = Elle a frappé la côte à 6 h.</li></ul>`},
{n:7,p:1,v:"Bilan de la période 1",g:"Bilan : les temps du passé et le present perfect",l:"Bilan d'écoute de la période 1",r:"Bilan de lecture de la période 1",t:"bilan:1-6|bilan:1-6|bilan:1-6|bilan:1-6",lecon:`
<h4>Bilan de la période 1</h4>
<table><tr><td>prétérit simple</td><td>action terminée, datée : I went, I didn't go, Did you go?</td></tr><tr><td>prétérit continu</td><td>was/were + -ing : action en cours dans le passé (décor)</td></tr>
<tr><td>when / while</td><td>I was reading when the phone rang. While I was reading, …</td></tr><tr><td>present perfect</td><td>have/has + participe passé : expérience, bilan (ever, never)</td></tr>
<tr><td>for / since</td><td>for + durée ; since + point de départ — « depuis » + present perfect</td></tr><tr><td>just / already / yet</td><td>venir de / déjà / pas encore (yet en fin de phrase)</td></tr>
<tr><td>perfect ou prétérit ?</td><td>date précise → prétérit ; pas de date, lien avec maintenant → present perfect</td></tr></table>
<ul><li><i>I've known Sam since we were six. We met while we were living in Leeds.</i> = Je connais Sam depuis nos six ans. Nous nous sommes rencontrés quand nous habitions à Leeds.</li>
<li><i>Have you finished your project yet? — Yes, I finished it last night.</i> = As-tu déjà fini ton projet ? — Oui, je l'ai fini hier soir.</li></ul>
<p>Révise les participes passés : been, done, gone, seen, eaten, written, taken, given, known, flown.</p>`},
{n:8,p:2,v:"L'environnement",g:"Le futur avec will (prédictions, décisions, promesses)",l:"Comprendre un message sur l'environnement",r:"Lire un texte sur l'environnement",t:"environment|will|environment|environment",lecon:`
<h4>Vocabulaire : la planète</h4>
<table><tr><td>climate change / global warming</td><td>le changement climatique / le réchauffement climatique</td></tr><tr><td>greenhouse gases / fossil fuels</td><td>les gaz à effet de serre / les énergies fossiles</td></tr>
<tr><td>renewable energy / solar panels / wind turbines</td><td>les énergies renouvelables / panneaux solaires / éoliennes</td></tr><tr><td>to reduce / to reuse / to recycle</td><td>réduire / réutiliser / recycler</td></tr>
<tr><td>endangered species / a drought / a flood</td><td>les espèces menacées / une sécheresse / une inondation</td></tr></table>
<h4>Grammaire : will + base verbale</h4>
<ul><li><b>Prédiction</b> : <i>Sea levels will rise.</i> = Le niveau des mers va monter.</li><li><b>Décision</b> prise sur le moment : <i>It's cold. I'll close the window.</i></li><li><b>Promesse</b> : <i>I'll help you, I promise.</i></li></ul>
<table><tr><td>négation</td><td><b>won't</b> (will not) : <i>It won't be easy.</i></td></tr><tr><td>question</td><td><i>Will we have enough water?</i> — Yes, we will. / No, we won't.</td></tr></table>
<p>Avec une opinion : <i>I think…, I'm sure…, probably</i> : <i>I think it will rain.</i> / <i>It will probably rain.</i></p>
<p><b>Piège :</b> après <b>when</b> au sens de « quand » (futur), on met le présent : <i>When I <b>am</b> older, I'll…</i> (jamais « when I will be »).</p>
<p>Prononciation : <b>won't</b> [wəʊnt] ≠ <b>want</b> [wɒnt].</p>`},
{n:9,p:2,v:"Projets et rendez-vous",g:"Will, going to ou présent continu ?",l:"Comprendre des projets et des rendez-vous",r:"Lire un échange de messages",t:"plans|futures|plans|plans",lecon:`
<h4>Vocabulaire : s'organiser</h4>
<table><tr><td>to arrange / an appointment</td><td>organiser / un rendez-vous (médecin…)</td></tr><tr><td>to meet up / to hang out</td><td>se retrouver / traîner, passer du temps ensemble</td></tr>
<tr><td>to cancel / to put off</td><td>annuler / repousser</td></tr><tr><td>to look forward to + -ing</td><td>avoir hâte de</td></tr></table>
<h4>Grammaire : trois façons de parler du futur</h4>
<table><tr><td><b>présent continu</b></td><td>rendez-vous fixé, organisé (date, heure) : <i>I'm seeing the dentist on Friday.</i></td></tr>
<tr><td><b>be going to</b></td><td>intention, projet décidé : <i>I'm going to learn the guitar.</i> — ou indice visible : <i>Look! It's going to fall.</i></td></tr>
<tr><td><b>will</b></td><td>prédiction, décision immédiate, promesse : <i>You'll love it! — OK, I'll come.</i></td></tr></table>
<p><b>Piège :</b> « Je vais t'aider ! » dit sur le moment = <i>I'll help you!</i> (décision immédiate).</p>
<ul><li><i>We're having a party on Saturday. Will you come?</i> = On fait une fête samedi. Tu viendras ?</li><li><i>I'm looking forward to seeing you.</i> = J'ai hâte de te voir.</li><li><i>They've cancelled the match.</i> = Ils ont annulé le match.</li></ul>`},
{n:10,p:2,v:"Les métiers et l'orientation",g:"Le conditionnel 1 : if + présent, will",l:"Comprendre quelqu'un qui parle de son métier",r:"Lire une offre ou un portrait professionnel",t:"jobs|cond1|jobs|jobs",lecon:`
<h4>Vocabulaire : le monde du travail</h4>
<table><tr><td>a job / a career / a skill</td><td>un emploi / une carrière / une compétence</td></tr><tr><td>to apply for / an interview / a CV</td><td>postuler à / un entretien / un CV</td></tr>
<tr><td>to earn / a salary / to hire</td><td>gagner (de l'argent) / un salaire / embaucher</td></tr><tr><td>work experience / an internship</td><td>un stage (en entreprise)</td></tr>
<tr><td>a lawyer / an architect / a nurse / a plumber</td><td>un avocat / un architecte / un infirmier / un plombier</td></tr></table>
<h4>Grammaire : if + présent, will + base</h4>
<p>On parle d'une condition <b>réelle, possible</b> et de sa conséquence : <i>If you <b>work</b> hard, you <b>will</b> pass.</i> = Si tu travailles dur, tu réussiras.</p>
<p>L'ordre peut s'inverser (sans virgule) : <i>You'll pass if you work hard.</i> On peut aussi utiliser <b>unless</b> = à moins que, sauf si : <i>You won't pass unless you work.</i></p>
<p><b>Piège :</b> jamais will après if : « If it will rain » est faux → <i>If it rains, we'll stay at home.</i></p>
<ul><li><i>If I get good marks, I'll go to a general lycée.</i> = Si j'ai de bonnes notes, j'irai en lycée général.</li><li><i>What will you do if you don't get the job?</i> = Que feras-tu si tu n'as pas le poste ?</li></ul>
<p><b>Faux-ami :</b> <i>a stage</i> = une scène (de théâtre) ; un stage = <i>work experience</i>.</p>`},
{n:11,p:2,v:"La santé et le bien-être",g:"Conseiller : should / shouldn't",l:"Comprendre des conseils de santé",r:"Lire des conseils de santé",t:"health|should|health|health",lecon:`
<h4>Vocabulaire : la santé</h4>
<table><tr><td>to feel sick / to feel dizzy</td><td>avoir mal au cœur / avoir la tête qui tourne</td></tr><tr><td>to sprain / to break / an injury</td><td>se fouler / se casser / une blessure</td></tr>
<tr><td>a prescription / a pill / a chemist's</td><td>une ordonnance / un comprimé / une pharmacie</td></tr><tr><td>stress / sleep / a balanced diet</td><td>le stress / le sommeil / une alimentation équilibrée</td></tr></table>
<h4>Grammaire : should (devrait)</h4>
<ul><li><b>should + base verbale</b> = conseil : <i>You <b>should</b> see a doctor.</i> = Tu devrais voir un médecin.</li>
<li><b>shouldn't</b> = conseil négatif : <i>You shouldn't eat so much sugar.</i></li><li>Question : <i>Should I call an ambulance?</i> = Est-ce que je devrais appeler une ambulance ?</li>
<li>Comme tous les modaux : pas de -s, pas de to, pas de do.</li></ul>
<p>Autres façons de conseiller : <i>Why don't you…? / If I were you, I'd…</i> (si j'étais toi, je…).</p>
<p><b>Piège :</b> <i>a diet</i> = une alimentation, un régime alimentaire (pas toujours pour maigrir).</p>
<ul><li><i>You should drink more water and go to bed earlier.</i> = Tu devrais boire plus d'eau et te coucher plus tôt.</li><li><i>He shouldn't play video games until midnight.</i> = Il ne devrait pas jouer aux jeux vidéo jusqu'à minuit.</li></ul>`},
{n:12,p:2,v:"Règles et obligations",g:"Must, have to, don't have to, mustn't",l:"Comprendre un règlement",r:"Lire un règlement",t:"rules|haveto|rules|rules",lecon:`
<h4>Vocabulaire : la règle</h4>
<table><tr><td>a rule / to obey / to break a rule</td><td>une règle / obéir / enfreindre une règle</td></tr><tr><td>allowed / forbidden / compulsory</td><td>autorisé / interdit / obligatoire</td></tr>
<tr><td>a detention / a punishment / a warning</td><td>une retenue / une punition / un avertissement</td></tr></table>
<h4>Grammaire : obligation, absence d'obligation, interdiction</h4>
<table><tr><td><b>must</b></td><td>obligation (souvent venant de celui qui parle, ou écrite dans un règlement) : <i>You must wear a helmet.</i></td></tr>
<tr><td><b>have to / has to</b></td><td>obligation extérieure ; se conjugue : <i>She has to wear a uniform. I had to wait. Do you have to work?</i></td></tr>
<tr><td><b>mustn't</b></td><td><b>interdiction</b> : <i>You mustn't smoke here.</i></td></tr><tr><td><b>don't have to</b></td><td><b>pas obligé</b> : <i>You don't have to come.</i> = Tu n'es pas obligé de venir.</td></tr></table>
<p><b>Piège majeur :</b> mustn't (c'est interdit) ≠ don't have to (ce n'est pas nécessaire).</p>
<p>Au passé, must n'existe pas : on utilise <b>had to</b> → <i>I had to stay at home.</i> Permission : <i>We're allowed to / We can use our phones at break.</i></p>
<ul><li><i>In the UK, pupils have to wear a uniform, but they don't have to go to school on Saturday.</i></li><li>= Au Royaume-Uni, les élèves doivent porter un uniforme, mais ils ne sont pas obligés d'aller en cours le samedi.</li></ul>`},
{n:13,p:2,v:"Fêtes et traditions anglophones",g:"Can, could, be able to",l:"Comprendre des dates",r:"Lire un texte sur une tradition",t:"traditions|could|dates|traditions",lecon:`
<h4>Vocabulaire : traditions</h4>
<table><tr><td>Remembrance Day (11th November) / a poppy</td><td>le jour du Souvenir / un coquelicot (porté en mémoire)</td></tr><tr><td>Hogmanay / New Year's Eve</td><td>le Nouvel An écossais / la Saint-Sylvestre</td></tr>
<tr><td>a carol / mistletoe / a wreath</td><td>un chant de Noël / le gui / une couronne</td></tr><tr><td>Diwali, Hanukkah, Eid</td><td>des fêtes religieuses célébrées au Royaume-Uni</td></tr></table>
<h4>Grammaire : la capacité</h4>
<table><tr><td>présent</td><td><b>can / can't</b> : <i>I can speak Spanish.</i></td></tr><tr><td>passé</td><td><b>could / couldn't</b> : <i>When I was five, I could swim.</i> = Quand j'avais cinq ans, je savais nager.</td></tr>
<tr><td>futur et autres temps</td><td><b>will be able to</b> : <i>One day, you'll be able to drive.</i> — <i>I've never been able to whistle.</i></td></tr>
<tr><td>réussite ponctuelle</td><td><b>was able to / managed to</b> : <i>The firefighters were able to save the cat.</i></td></tr></table>
<p><b>Could</b> sert aussi à demander poliment : <i>Could you open the door, please?</i></p>
<p><b>Piège :</b> « can » n'a ni futur ni infinitif : jamais « will can » ni « to can ».</p>
<p>Les dates à l'oral : <i>the eleventh of November</i> ; à l'écrit : <i>11th November</i> (UK), <i>November 11th</i> (US).</p>`},
{n:14,p:2,v:"Bilan de la période 2",g:"Bilan : futur, conditionnel 1, modaux",l:"Bilan d'écoute de la période 2",r:"Bilan de lecture de la période 2",t:"bilan:8-13|bilan:8-13|bilan:8-13|bilan:8-13",lecon:`
<h4>Bilan de la période 2</h4>
<table><tr><td>will</td><td>prédiction, décision immédiate, promesse ; won't</td></tr><tr><td>going to</td><td>intention, projet ; indice visible</td></tr>
<tr><td>présent continu</td><td>rendez-vous organisé</td></tr><tr><td>if + présent, will</td><td>condition réelle ; jamais will après if</td></tr>
<tr><td>should</td><td>conseil ; shouldn't</td></tr><tr><td>must / have to</td><td>obligation ; had to au passé</td></tr>
<tr><td>mustn't / don't have to</td><td>interdit / pas obligé</td></tr><tr><td>can / could / be able to</td><td>capacité présente / passée / autres temps</td></tr></table>
<ul><li><i>If it doesn't rain, we're going to walk to Arthur's Seat. You should bring good shoes.</i></li>
<li>= S'il ne pleut pas, nous allons monter à pied à Arthur's Seat. Tu devrais apporter de bonnes chaussures.</li>
<li><i>You don't have to come, but you mustn't tell anyone!</i> = Tu n'es pas obligé de venir, mais tu ne dois le dire à personne !</li></ul>`},
{n:15,p:3,v:"Londres",g:"La possibilité : may / might",l:"Comprendre une visite de Londres",r:"Lire un texte sur Londres",t:"london|maymight|london|london",lecon:`
<h4>Vocabulaire : Londres</h4>
<table><tr><td>the Houses of Parliament / Big Ben</td><td>le Parlement / la grande cloche de la tour Elizabeth</td></tr><tr><td>Buckingham Palace / the Tower of London</td><td>la résidence officielle du roi / la tour de Londres</td></tr>
<tr><td>the Thames / the London Eye / the Tube</td><td>la Tamise / la grande roue / le métro</td></tr><tr><td>a borough / a landmark / a sightseeing tour</td><td>un arrondissement / un monument emblématique / une visite touristique</td></tr></table>
<h4>Grammaire : may, might (peut-être)</h4>
<ul><li><b>may / might + base verbale</b> = une <b>possibilité</b> : <i>It may rain.</i> = Il se peut qu'il pleuve. <i>We might visit the Tower.</i> = Nous visiterons peut-être la Tour.</li>
<li><b>might</b> exprime une possibilité un peu plus faible que may.</li><li>Négation : <b>may not / might not</b> : <i>He might not come.</i> = Il ne viendra peut-être pas.</li>
<li><b>May I…?</b> = demande de permission très polie : <i>May I come in?</i></li></ul>
<p><b>Piège :</b> « peut-être » seul = <i>maybe</i> (en début de phrase) : <i>Maybe it will rain</i> = <i>It might rain</i>.</p>
<ul><li><i>The Tube might be closed on Sunday.</i> = Il se peut que le métro soit fermé dimanche.</li><li><i>I may go to the British Museum, I'm not sure.</i> = J'irai peut-être au British Museum, je ne suis pas sûr.</li></ul>
<p>Prononciation : <b>Thames</b> se dit « tèmz » : le th se prononce t.</p>`},
{n:16,p:3,v:"New York et les États-Unis",g:"Le passif au présent",l:"Comprendre une visite de New York",r:"Lire un texte sur New York",t:"newyork|passive1|newyork|newyork",lecon:`
<h4>Vocabulaire : New York, les États-Unis</h4>
<table><tr><td>a skyscraper / a borough / a block</td><td>un gratte-ciel / un arrondissement / un pâté de maisons</td></tr><tr><td>Manhattan, Brooklyn, the Bronx, Queens, Staten Island</td><td>les cinq « boroughs »</td></tr>
<tr><td>an immigrant / Ellis Island / the melting pot</td><td>un immigré / l'île d'arrivée des immigrés / le creuset (mélange des cultures)</td></tr><tr><td>a sidewalk / an apartment / a subway</td><td>un trottoir / un appartement / un métro (mots américains)</td></tr></table>
<h4>Grammaire : le passif au présent</h4>
<p><b>am / is / are + participe passé</b>. On l'emploie quand l'action compte plus que celui qui la fait. L'auteur, s'il est utile, est introduit par <b>by</b>.</p>
<table><tr><td>actif</td><td><i>Millions of tourists visit New York.</i></td></tr><tr><td>passif</td><td><i>New York <b>is visited</b> by millions of tourists.</i></td></tr>
<tr><td>négation / question</td><td><i>English isn't spoken here. Is Spanish spoken in Miami?</i></td></tr></table>
<p><b>Astuce :</b> le français « on » se traduit souvent par un passif : <i>English is spoken here</i> = On parle anglais ici.</p>
<p><b>Piège :</b> le participe passé est indispensable : <i>is made</i>, <i>are sold</i>, <i>is written</i>.</p>
<ul><li><i>Yellow cabs are used by thousands of people every day.</i> = Les taxis jaunes sont utilisés par des milliers de personnes chaque jour.</li><li><i>Hot dogs are sold on every corner.</i> = On vend des hot-dogs à chaque coin de rue.</li></ul>`},
{n:17,p:3,v:"Les inventions et les sciences",g:"Le passif au prétérit",l:"Comprendre l'histoire d'une invention",r:"Lire un texte sur une invention",t:"inventions|passive2|inventions|inventions",lecon:`
<h4>Vocabulaire : inventer</h4>
<table><tr><td>to invent / an invention / an inventor</td><td>inventer / une invention / un inventeur</td></tr><tr><td>to discover / a discovery / a scientist</td><td>découvrir / une découverte / un scientifique</td></tr>
<tr><td>to design / to build / to develop</td><td>concevoir / construire / mettre au point</td></tr><tr><td>a device / a patent / a breakthrough</td><td>un appareil / un brevet / une avancée majeure</td></tr></table>
<h4>Grammaire : le passif au prétérit</h4>
<p><b>was / were + participe passé</b> : <i>The telephone <b>was invented</b> by Alexander Graham Bell in 1876.</i></p>
<table><tr><td>actif</td><td><i>Marie Curie discovered radium.</i></td></tr><tr><td>passif</td><td><i>Radium <b>was discovered</b> by Marie Curie.</i></td></tr>
<tr><td>pluriel</td><td><i>The pyramids <b>were built</b> thousands of years ago.</i></td></tr><tr><td>question / négation</td><td><i>When was penicillin discovered? It wasn't invented in France.</i></td></tr></table>
<p><b>Méthode :</b> le complément de l'actif devient le sujet ; le verbe be prend le temps de l'actif ; le verbe principal passe au participe passé ; l'ancien sujet devient « by … ».</p>
<p><b>Piège :</b> « a été inventé » = <i>was invented</i> (pas « has been invented » quand la date est donnée).</p>
<ul><li><i>The World Wide Web was created by Tim Berners-Lee in 1989.</i> = Le Web a été créé par Tim Berners-Lee en 1989.</li></ul>`},
{n:18,p:3,v:"Les médias et l'information",g:"Les relatives : who, which, that",l:"Comprendre des informations",r:"Lire un article de presse",t:"media|relatives|media|media",lecon:`
<h4>Vocabulaire : les médias</h4>
<table><tr><td>a newspaper / a magazine / a podcast</td><td>un journal / un magazine / un podcast</td></tr><tr><td>a journalist / a reporter / an editor</td><td>un journaliste / un reporter / un rédacteur en chef</td></tr>
<tr><td>a source / to check / reliable</td><td>une source / vérifier / fiable</td></tr><tr><td>to broadcast / a channel / an advert</td><td>diffuser / une chaîne / une publicité</td></tr></table>
<h4>Grammaire : les pronoms relatifs</h4>
<table><tr><td><b>who</b></td><td>pour une <b>personne</b> : <i>The journalist <b>who</b> wrote this article is famous.</i></td></tr>
<tr><td><b>which</b></td><td>pour une <b>chose</b> ou un animal : <i>The website <b>which</b> I use is reliable.</i></td></tr>
<tr><td><b>that</b></td><td>personne ou chose (langue courante) : <i>the film <b>that</b> I saw</i></td></tr><tr><td><b>whose</b></td><td>dont (possession) : <i>the girl <b>whose</b> father is a pilot</i></td></tr></table>
<p>Quand le relatif est <b>complément</b> (suivi d'un sujet), on peut l'omettre : <i>the book (that) I'm reading</i>.</p>
<p><b>Piège :</b> « qui » ne se traduit pas toujours par who : <i>a channel <b>which</b> shows documentaries</i>. Et pas de pronom en double : « the man who I saw him » est faux (on supprime him).</p>
<ul><li><i>Fake news is information which is false.</i> = Les infox sont des informations qui sont fausses.</li><li><i>She's the reporter whose video went viral.</i> = C'est la reporter dont la vidéo est devenue virale.</li></ul>`},
{n:19,p:3,v:"Les sentiments et les relations",g:"Le conditionnel 2 : if + prétérit, would",l:"Comprendre des émotions",r:"Lire un courrier du cœur",t:"relationships|cond2|feelings|relationships",lecon:`
<h4>Vocabulaire : relations et émotions</h4>
<table><tr><td>to get on (well) with / to fall out with</td><td>bien s'entendre avec / se fâcher avec</td></tr><tr><td>to trust / to argue / to apologise</td><td>faire confiance / se disputer / s'excuser</td></tr>
<tr><td>jealous / upset / embarrassed / grateful</td><td>jaloux / contrarié, bouleversé / gêné / reconnaissant</td></tr><tr><td>peer pressure / self-confidence</td><td>la pression du groupe / la confiance en soi</td></tr></table>
<h4>Grammaire : if + prétérit, would + base</h4>
<p>On imagine une situation <b>irréelle ou peu probable</b> au présent : <i>If I <b>had</b> more time, I <b>would</b> (I'd) learn the piano.</i> = Si j'avais plus de temps, j'apprendrais le piano.</p>
<ul><li>Avec be, on dit souvent <b>were</b> à toutes les personnes : <i>If I <b>were</b> you, I'd apologise.</i> = À ta place, je m'excuserais.</li><li>Négation : <i>wouldn't</i>. Question : <i>What would you do if you won the lottery?</i></li></ul>
<p><b>Piège :</b> jamais would après if : « if I would have » est faux. Comparez : <i>If it rains, I'll stay</i> (réel) / <i>If it rained, I'd stay</i> (imaginé).</p>
<p><b>Faux-amis :</b> <i>embarrassed</i> = gêné (embarrassé) ; <i>to argue</i> = se disputer (argumenter = to argue a point).</p>
<ul><li><i>I wouldn't trust him if I were you.</i> = Je ne lui ferais pas confiance, à ta place.</li></ul>`},
{n:20,p:3,v:"La citoyenneté et les droits",g:"Le discours indirect",l:"Comprendre un discours engagé",r:"Lire un texte sur les droits",t:"citizenship|reported|citizenship|citizenship",lecon:`
<h4>Vocabulaire : être citoyen</h4>
<table><tr><td>a citizen / a right / a duty</td><td>un citoyen / un droit / un devoir</td></tr><tr><td>to vote / an election / the government</td><td>voter / une élection / le gouvernement</td></tr>
<tr><td>equality / freedom / justice</td><td>l'égalité / la liberté / la justice</td></tr><tr><td>to protest / a demonstration / a petition</td><td>manifester, protester / une manifestation / une pétition</td></tr>
<tr><td>discrimination / racism / human rights</td><td>la discrimination / le racisme / les droits humains</td></tr></table>
<h4>Grammaire : rapporter les paroles de quelqu'un</h4>
<p>Avec <b>said (that)</b> ou <b>told + personne</b>, les temps « reculent » d'un cran dans le passé :</p>
<table><tr><td>« I <b>am</b> tired. »</td><td>She said (that) she <b>was</b> tired.</td></tr><tr><td>« I <b>like</b> it. »</td><td>He said he <b>liked</b> it.</td></tr>
<tr><td>« I <b>will</b> come. »</td><td>She said she <b>would</b> come.</td></tr><tr><td>« I <b>can</b> help. »</td><td>He told me he <b>could</b> help.</td></tr>
<tr><td>« Close the door! »</td><td>She told me <b>to close</b> the door. (ordre → to + base)</td></tr></table>
<p>Les pronoms et repères changent aussi : I → he/she, my → his/her, here → there, today → that day.</p>
<p><b>Piège :</b> <i>say something</i> mais <i>tell <b>someone</b> something</i> : « He said me » est faux → <i>He told me</i>.</p>
<ul><li><i>Martin Luther King said that he had a dream.</i> = Martin Luther King a dit qu'il avait un rêve.</li></ul>`},
{n:21,p:3,v:"Bilan de la période 3",g:"Bilan : may/might, passif, relatives, conditionnel 2, discours indirect",l:"Bilan d'écoute de la période 3",r:"Bilan de lecture de la période 3",t:"bilan:15-20|bilan:15-20|bilan:15-20|bilan:15-20",lecon:`
<h4>Bilan de la période 3</h4>
<table><tr><td>may / might</td><td>possibilité : It might rain.</td></tr><tr><td>passif présent</td><td>am/is/are + participe passé : English is spoken here.</td></tr>
<tr><td>passif prétérit</td><td>was/were + participe passé : It was built in 1894.</td></tr><tr><td>relatives</td><td>who (personne), which (chose), that (les deux), whose (dont)</td></tr>
<tr><td>conditionnel 2</td><td>If I had…, I would… ; If I were you, I'd…</td></tr><tr><td>discours indirect</td><td>said that + recul des temps ; told someone to + base</td></tr></table>
<ul><li><i>Tower Bridge, which was opened in 1894, is visited by thousands of people. A guide told us that it might close for repairs.</i></li>
<li>= Tower Bridge, qui a été inauguré en 1894, est visité par des milliers de personnes. Un guide nous a dit qu'il pourrait fermer pour travaux.</li></ul>`},
{n:22,p:4,v:"Le Commonwealth et le monde anglophone",g:"Les question tags",l:"Comprendre des accents et des pays anglophones",r:"Lire un texte sur un pays anglophone",t:"commonwealth|tags|commonwealth|commonwealth",lecon:`
<h4>Vocabulaire : le monde anglophone</h4>
<table><tr><td>the Commonwealth</td><td>une association de 56 pays, la plupart anciennes colonies britanniques</td></tr><tr><td>Canada, Australia, New Zealand, India, South Africa</td><td>le Canada, l'Australie, la Nouvelle-Zélande, l'Inde, l'Afrique du Sud</td></tr>
<tr><td>an official language / a native speaker</td><td>une langue officielle / un locuteur natif</td></tr><tr><td>the British Empire / independence / a colony</td><td>l'Empire britannique / l'indépendance / une colonie</td></tr></table>
<h4>Grammaire : les question tags (n'est-ce pas ?)</h4>
<p>À la fin d'une phrase, on reprend l'<b>auxiliaire</b> et le <b>pronom</b> sujet ; phrase affirmative → tag négatif, phrase négative → tag affirmatif.</p>
<table><tr><td><i>You're Canadian, <b>aren't you</b>?</i></td><td><i>She isn't Irish, <b>is she</b>?</i></td></tr>
<tr><td><i>He can swim, <b>can't he</b>?</i></td><td><i>They didn't come, <b>did they</b>?</i></td></tr><tr><td><i>You live in Sydney, <b>don't you</b>?</i> (présent simple → do/does)</td><td><i>She went home, <b>didn't she</b>?</i> (prétérit → did)</td></tr></table>
<p><b>Piège :</b> <i>I'm right, <b>aren't I</b>?</i> (forme spéciale). Et le tag reprend un pronom : <i>Your sister likes tea, doesn't <b>she</b>?</i></p>
<p>Intonation : si la voix descend, on attend une confirmation ; si elle monte, c'est une vraie question.</p>`},
{n:23,p:4,v:"Personnages célèbres",g:"Les quantifieurs (much, many, a few, a little, too, enough)",l:"Comprendre une biographie",r:"Lire une biographie",t:"famous|quantifiers|famous|famous",lecon:`
<h4>Vocabulaire : raconter une vie</h4>
<table><tr><td>to be born / to grow up / to die</td><td>naître / grandir / mourir</td></tr><tr><td>to become / to succeed / success</td><td>devenir / réussir / le succès</td></tr>
<tr><td>a hero / a role model / to inspire</td><td>un héros / un modèle / inspirer</td></tr><tr><td>to fight for / to campaign / an achievement</td><td>se battre pour / faire campagne / une réussite, un exploit</td></tr></table>
<h4>Grammaire : exprimer la quantité</h4>
<table><tr><td>beaucoup de</td><td><b>many</b> + pluriel / <b>much</b> + indénombrable (surtout négatif et question) / <b>a lot of</b> + les deux</td></tr>
<tr><td>un peu de / quelques</td><td><b>a little</b> + indénombrable / <b>a few</b> + pluriel</td></tr><tr><td>peu de</td><td><b>little</b> + indénombrable / <b>few</b> + pluriel (sens négatif)</td></tr>
<tr><td>trop (de)</td><td><b>too much</b> / <b>too many</b> ; <b>too</b> + adjectif : <i>too young</i></td></tr><tr><td>assez (de)</td><td><b>enough</b> + nom : <i>enough money</i> ; adjectif + <b>enough</b> : <i>old enough</i></td></tr></table>
<p><b>Piège :</b> « She has a few friends » (quelques amis) ≠ « She has few friends » (peu d'amis). Et <i>enough</i> se place <b>après</b> l'adjectif.</p>
<ul><li><i>Malala didn't have much freedom, but she had a lot of courage.</i> = Malala n'avait pas beaucoup de liberté, mais elle avait beaucoup de courage.</li><li><i>He was too young to vote.</i> = Il était trop jeune pour voter.</li></ul>`},
{n:24,p:4,v:"Le sport et la compétition",g:"Les phrasal verbs courants",l:"Comprendre un commentaire sportif",r:"Lire un article sportif",t:"sport|phrasal|sport|sport",lecon:`
<h4>Vocabulaire : la compétition</h4>
<table><tr><td>a championship / a tournament / a trophy</td><td>un championnat / un tournoi / un trophée</td></tr><tr><td>to beat / to score / a draw</td><td>battre (un adversaire) / marquer / un match nul</td></tr>
<tr><td>a referee / a coach / a fan</td><td>un arbitre / un entraîneur / un supporter</td></tr><tr><td>to train / fit / to break a record</td><td>s'entraîner / en forme / battre un record</td></tr></table>
<p><b>Piège :</b> on <i>wins</i> un match ou une coupe, mais on <i>beats</i> un adversaire : <i>We beat Leeds</i> (pas « we won Leeds »).</p>
<h4>Grammaire : les phrasal verbs</h4>
<p>Verbe + particule (up, off, on, out, down…) : le sens change complètement !</p>
<table><tr><td>give up</td><td>abandonner, arrêter</td></tr><tr><td>get up / wake up</td><td>se lever / se réveiller</td></tr><tr><td>look for / look after</td><td>chercher / s'occuper de</td></tr>
<tr><td>turn on / turn off</td><td>allumer / éteindre</td></tr><tr><td>find out / work out</td><td>découvrir (une information) / faire du sport ; résoudre</td></tr><tr><td>put on / take off</td><td>mettre (un vêtement) / enlever ; décoller (avion)</td></tr><tr><td>carry on / go on</td><td>continuer</td></tr></table>
<ul><li><i>Never give up!</i> = N'abandonne jamais !</li><li><i>She works out three times a week.</i> = Elle fait du sport trois fois par semaine.</li><li><i>Put on your trainers and carry on running!</i> = Mets tes baskets et continue de courir !</li></ul>`},
{n:25,p:4,v:"Consommer : achats et argent",g:"Comparer : comparatifs, superlatifs, as … as, too / enough",l:"Comprendre des prix et des chiffres",r:"Lire une publicité ou un avis de consommateur",t:"shopping|comparison|prices|shopping",lecon:`
<h4>Vocabulaire : consommer</h4>
<table><tr><td>a bargain / a discount / on sale</td><td>une bonne affaire / une réduction / en solde</td></tr><tr><td>to afford / to save / to spend</td><td>avoir les moyens / économiser / dépenser</td></tr>
<tr><td>pocket money / a receipt / a refund</td><td>l'argent de poche / un ticket de caisse / un remboursement</td></tr><tr><td>second-hand / brand-new / a brand</td><td>d'occasion / tout neuf / une marque</td></tr></table>
<h4>Grammaire : comparer</h4>
<table><tr><td>supériorité</td><td>cheaper than ; more expensive than ; better / worse than</td></tr><tr><td>infériorité</td><td><b>less</b> expensive than ; <b>not as</b> cheap <b>as</b></td></tr>
<tr><td>égalité</td><td><b>as</b> good <b>as</b></td></tr><tr><td>superlatif</td><td>the cheapest ; the most / the least expensive ; the best / the worst</td></tr>
<tr><td>de plus en plus</td><td><i>cheaper and cheaper</i> ; <i>more and more expensive</i></td></tr><tr><td>plus… plus…</td><td><i>The more you buy, the more you spend.</i></td></tr></table>
<p><b>Piège :</b> <i>too expensive</i> (trop cher : je ne peux pas) ≠ <i>very expensive</i> (très cher) ; <i>not cheap enough</i> = pas assez bon marché.</p>
<ul><li><i>Second-hand clothes are cheaper and better for the planet.</i> = Les vêtements d'occasion sont moins chers et meilleurs pour la planète.</li><li><i>I can't afford it: it's too expensive.</i> = Je n'ai pas les moyens : c'est trop cher.</li></ul>`},
{n:26,p:4,v:"Voyager : aéroport, gare, transports",g:"Verbe + -ing ou verbe + to",l:"Comprendre des annonces de gare et d'aéroport",r:"Lire des informations de voyage",t:"transport|gerund|transport|transport",lecon:`
<h4>Vocabulaire : en voyage</h4>
<table><tr><td>a departure / an arrival / a delay</td><td>un départ / une arrivée / un retard</td></tr><tr><td>to check in / a boarding pass / a gate</td><td>enregistrer / une carte d'embarquement / une porte</td></tr>
<tr><td>a single / a return ticket</td><td>un aller simple / un aller-retour</td></tr><tr><td>to take off / to land / luggage</td><td>décoller / atterrir / les bagages (indénombrable)</td></tr></table>
<h4>Grammaire : -ing ou to ?</h4>
<table><tr><td>verbe + <b>-ing</b></td><td>like, love, hate, enjoy, prefer, mind, finish, stop, avoid, keep, can't stand : <i>I enjoy travelling.</i></td></tr>
<tr><td>verbe + <b>to</b> + base</td><td>want, need, decide, hope, plan, learn, forget, would like, promise : <i>I want to travel.</i></td></tr>
<tr><td>après une préposition</td><td>toujours -ing : <i>interested in learning, good at swimming, before leaving, look forward to seeing</i></td></tr></table>
<p><b>Piège :</b> <i>I'd like to go</i> (je voudrais) ≠ <i>I like going</i> (j'aime). <i>Stop smoking</i> (arrêter de fumer) ≠ <i>stop to smoke</i> (s'arrêter pour fumer).</p>
<ul><li><i>The flight is delayed. Passengers should avoid using the lifts.</i> = Le vol est retardé. Les passagers doivent éviter d'utiliser les ascenseurs.</li><li><i>We decided to take the train.</i> = Nous avons décidé de prendre le train.</li></ul>
<p><b>Indénombrable :</b> <i>luggage</i>, <i>information</i>, <i>advice</i> : pas de -s, pas de a → <i>a piece of luggage</i>.</p>`},
{n:27,p:4,v:"Alimentation et modes de vie",g:"Used to : les habitudes du passé",l:"Comprendre des habitudes alimentaires",r:"Lire un texte sur les modes de vie",t:"food|usedto|food|food",lecon:`
<h4>Vocabulaire : manger, vivre</h4>
<table><tr><td>a vegetarian / a vegan / organic</td><td>un végétarien / un végan / bio</td></tr><tr><td>junk food / a takeaway / a snack</td><td>la malbouffe / un plat à emporter / un en-cas</td></tr>
<tr><td>a habit / a lifestyle / healthy</td><td>une habitude / un mode de vie / sain</td></tr><tr><td>to cut down on / to give up</td><td>réduire sa consommation de / arrêter</td></tr></table>
<h4>Grammaire : used to + base verbale</h4>
<p>Une <b>habitude</b> ou une situation <b>passée, qui n'existe plus</b>. Se traduit par l'imparfait (« avant, je… »).</p>
<table><tr><td>affirmation</td><td><i>I <b>used to</b> eat a lot of sweets.</i> = Avant, je mangeais beaucoup de bonbons.</td></tr>
<tr><td>négation</td><td><i>I <b>didn't use to</b> like vegetables.</i> = Avant, je n'aimais pas les légumes.</td></tr><tr><td>question</td><td><i><b>Did</b> you <b>use to</b> live in London?</i></td></tr></table>
<p><b>Piège :</b> après didn't et did, on écrit <b>use to</b> (sans d). Ne pas confondre avec <i>be used to + -ing</i> (être habitué à) : <i>I'm used to getting up early.</i></p>
<ul><li><i>People used to cook every day; now many buy ready meals.</i> = Avant, les gens cuisinaient tous les jours ; maintenant beaucoup achètent des plats préparés.</li><li><i>There used to be a bakery here.</i> = Avant, il y avait une boulangerie ici.</li></ul>`},
{n:28,p:4,v:"Bilan de la période 4",g:"Bilan : tags, quantifieurs, phrasal verbs, comparer, -ing / to, used to",l:"Bilan d'écoute de la période 4",r:"Bilan de lecture de la période 4",t:"bilan:22-27|bilan:22-27|bilan:22-27|bilan:22-27",lecon:`
<h4>Bilan de la période 4</h4>
<table><tr><td>question tags</td><td>You're tired, aren't you? She didn't call, did she?</td></tr><tr><td>quantifieurs</td><td>much / many / a lot of ; a few / a little ; too much / too many ; enough</td></tr>
<tr><td>phrasal verbs</td><td>give up, look for, look after, find out, turn off, put on, carry on</td></tr><tr><td>comparer</td><td>less … than, not as … as, the least, more and more</td></tr>
<tr><td>-ing ou to</td><td>enjoy / avoid / finish + -ing ; want / decide / hope + to</td></tr><tr><td>used to</td><td>habitude passée : I used to…, I didn't use to…</td></tr></table>
<ul><li><i>You used to play rugby, didn't you? — Yes, but I gave it up because I didn't have enough time.</i></li>
<li>= Tu jouais au rugby avant, n'est-ce pas ? — Oui, mais j'ai arrêté parce que je n'avais pas assez de temps.</li></ul>`},
{n:29,p:5,v:"Le collège, le brevet et le lycée",g:"Révision : les présents et le present perfect",l:"Distinguer des sons proches",r:"Lire un texte sur l'école",t:"school|revpresent|sons|school",lecon:`
<h4>Vocabulaire : l'école et l'orientation</h4>
<table><tr><td>a state school / a private school</td><td>une école publique / une école privée</td></tr><tr><td>GCSEs / A levels</td><td>les examens britanniques de 16 ans / du baccalauréat</td></tr>
<tr><td>to revise / to pass / to fail an exam</td><td>réviser / réussir / rater un examen</td></tr><tr><td>a mark / a report / a subject</td><td>une note / un bulletin / une matière</td></tr></table>
<p><b>Faux-amis :</b> <i>to pass an exam</i> = réussir un examen (passer = <i>to take / to sit an exam</i>).</p>
<h4>Grammaire : révision</h4>
<table><tr><td>présent simple</td><td>habitude, vérité : <i>She revises every evening.</i></td></tr><tr><td>présent continu</td><td>en ce moment : <i>I'm revising for my exams.</i></td></tr>
<tr><td>present perfect</td><td>bilan, expérience : <i>I've never failed an exam.</i></td></tr><tr><td>present perfect + for/since</td><td>« depuis » : <i>I've studied English for four years.</i></td></tr></table>
<h4>Prononciation : sons pièges</h4>
<ul><li>i court / i long : <i>live</i> ≠ <i>leave</i>, <i>fill</i> ≠ <i>feel</i>.</li><li>h soufflé : <i>heat</i> ≠ <i>eat</i>, <i>hear</i> ≠ <i>ear</i>.</li><li>th : <i>think</i> ≠ <i>sink</i>, <i>thought</i> ≠ <i>taught</i>.</li></ul>`},
{n:30,p:5,v:"Donner son opinion, argumenter",g:"Révision : les temps du passé",l:"Comprendre une opinion",r:"Lire un texte argumentatif",t:"opinion|revpast|opinion|opinion",lecon:`
<h4>Vocabulaire : argumenter</h4>
<table><tr><td>In my opinion / I think that / I believe</td><td>À mon avis / Je pense que / Je crois</td></tr><tr><td>I agree / I disagree / It depends</td><td>Je suis d'accord / Je ne suis pas d'accord / Ça dépend</td></tr>
<tr><td>first of all / moreover / however</td><td>tout d'abord / de plus / cependant</td></tr><tr><td>on the one hand … on the other hand</td><td>d'un côté … de l'autre</td></tr><tr><td>therefore / as a result / to sum up</td><td>donc / en conséquence / pour résumer</td></tr></table>
<p><b>Piège :</b> « je suis d'accord » = <i>I agree</i> (jamais « I am agree »).</p>
<h4>Grammaire : révision des passés</h4>
<table><tr><td>prétérit simple</td><td>action terminée : <i>I watched a debate yesterday.</i></td></tr><tr><td>prétérit continu</td><td>action en cours : <i>We were discussing when the bell rang.</i></td></tr>
<tr><td>present perfect</td><td>bilan : <i>Have you ever changed your mind?</i></td></tr><tr><td>used to</td><td>habitude révolue : <i>I used to think phones were useless.</i></td></tr></table>
<ul><li><i>On the one hand, social media helps us to stay in touch; on the other hand, it can be addictive.</i></li><li>= D'un côté, les réseaux sociaux nous aident à garder le contact ; de l'autre, ils peuvent rendre accro.</li></ul>`},
{n:31,p:5,v:"Le monde de demain",g:"Révision : futur et conditionnels",l:"Comprendre des prédictions",r:"Lire un texte sur l'avenir",t:"future|revfuture|future|future",lecon:`
<h4>Vocabulaire : l'avenir</h4>
<table><tr><td>artificial intelligence (AI) / a robot</td><td>l'intelligence artificielle (IA) / un robot</td></tr><tr><td>a driverless car / space travel</td><td>une voiture autonome / les voyages spatiaux</td></tr>
<tr><td>to predict / a prediction / likely</td><td>prédire / une prédiction / probable</td></tr><tr><td>by 2050 / in the near future / one day</td><td>d'ici 2050 / dans un avenir proche / un jour</td></tr></table>
<h4>Grammaire : révision</h4>
<table><tr><td>will</td><td>prédiction : <i>Robots will do many jobs.</i></td></tr><tr><td>going to</td><td>intention / indice : <i>I'm going to study engineering.</i></td></tr>
<tr><td>may / might</td><td>possibilité : <i>We might live on Mars.</i></td></tr><tr><td>if + présent, will</td><td>condition réelle : <i>If we act now, we will save the planet.</i></td></tr>
<tr><td>if + prétérit, would</td><td>hypothèse : <i>If I could travel in time, I would go to 2100.</i></td></tr></table>
<p><b>Piège :</b> après <b>when, as soon as, before, after</b> au sens futur, on met le présent. <i>I'll call you as soon as I arrive.</i></p>
<ul><li><i>By 2050, most cars will probably be electric.</i> = D'ici 2050, la plupart des voitures seront sans doute électriques.</li><li><i>What would you do if a robot did your homework?</i> = Que ferais-tu si un robot faisait tes devoirs ?</li></ul>`},
{n:32,p:5,v:"Les arts : cinéma, musique, littérature",g:"Révision : les modaux",l:"Comprendre une critique",r:"Lire une critique de film ou de livre",t:"art|revmodals|art|art",lecon:`
<h4>Vocabulaire : parler d'une œuvre</h4>
<table><tr><td>a novel / a play / a poem</td><td>un roman / une pièce de théâtre / un poème</td></tr><tr><td>a director / an actor / the plot</td><td>un réalisateur / un acteur / l'intrigue</td></tr>
<tr><td>a review / a sequel / the soundtrack</td><td>une critique / une suite / la bande originale</td></tr><tr><td>moving / gripping / boring / overrated</td><td>émouvant / captivant / ennuyeux / surestimé</td></tr></table>
<p><b>Faux-ami :</b> <i>a novel</i> = un roman (une nouvelle = <i>a short story</i>).</p>
<h4>Grammaire : révision des modaux</h4>
<table><tr><td>can / could / be able to</td><td>capacité ; could = demande polie</td></tr><tr><td>must / have to</td><td>obligation ; mustn't = interdit ; don't have to = pas obligé</td></tr>
<tr><td>should</td><td>conseil : <i>You should read this novel.</i></td></tr><tr><td>may / might</td><td>possibilité : <i>The sequel might come out next year.</i></td></tr>
<tr><td>would</td><td>conditionnel, souhait poli : <i>I would like to see it.</i></td></tr></table>
<p>Règles communes : modal + base verbale, pas de -s, pas de do, pas de to (sauf have to, be able to).</p>
<ul><li><i>You must see this film: it's gripping!</i> = Il faut absolument que tu voies ce film : il est captivant !</li><li><i>Shakespeare wrote about 37 plays.</i> = Shakespeare a écrit environ 37 pièces.</li></ul>`},
{n:33,p:5,v:"S'engager : bénévolat et solidarité",g:"Révision : passif, discours indirect, relatives",l:"Comprendre un appel à l'engagement",r:"Lire un texte sur une association",t:"volunteering|revpassive|volunteering|volunteering",lecon:`
<h4>Vocabulaire : s'engager</h4>
<table><tr><td>to volunteer / a volunteer / a charity</td><td>faire du bénévolat / un bénévole / une association caritative</td></tr><tr><td>to raise money / a fundraiser / a donation</td><td>collecter des fonds / une collecte / un don</td></tr>
<tr><td>homeless / the elderly / to look after</td><td>sans-abri / les personnes âgées / s'occuper de</td></tr><tr><td>to make a difference / to get involved</td><td>changer les choses / s'impliquer</td></tr></table>
<h4>Grammaire : révision</h4>
<table><tr><td>passif</td><td><i>The money is given to charities. The shelter was opened in 2010.</i></td></tr>
<tr><td>discours indirect</td><td><i>She said that she wanted to help. He told us to come early.</i></td></tr>
<tr><td>relatives</td><td><i>Volunteers are people who give their time. It's a charity which helps animals.</i></td></tr></table>
<p><b>Faux-ami :</b> <i>a charity</i> = une association caritative ; <i>to be sympathetic</i> = être compatissant (sympathique = <i>nice, friendly</i>).</p>
<ul><li><i>Thousands of meals are cooked by volunteers every week.</i> = Des milliers de repas sont préparés par des bénévoles chaque semaine.</li><li><i>The organiser told me that they needed more help.</i> = L'organisateur m'a dit qu'ils avaient besoin de plus d'aide.</li></ul>`},
{n:34,p:5,v:"Préparation au brevet (1) : périodes 1 et 2",g:"Bilan : les temps et les modaux",l:"Entraînement à l'écoute du brevet (1)",r:"Entraînement à la lecture du brevet (1)",t:"bilan:1-13|bilan:1-13|bilan:1-13|bilan:1-13",lecon:`
<h4>Préparation au brevet : la méthode</h4>
<ul><li><b>Compréhension de l'oral</b> : lis d'abord les questions, puis écoute en repérant les mots-clés (qui ? où ? quand ? pourquoi ?), les nombres et les mots de liaison (but, because, so).</li>
<li><b>Compréhension de l'écrit</b> : repère le type de texte, le titre, les noms propres et les dates ; justifie toujours avec une citation courte.</li>
<li><b>Expression écrite</b> : relis-toi en vérifiant les -s de la 3e personne, les verbes irréguliers et l'ordre des mots.</li></ul>
<h4>Les temps à maîtriser</h4>
<table><tr><td>présent simple / continu</td><td>habitude / en ce moment</td></tr><tr><td>prétérit simple / continu</td><td>action terminée / action en cours dans le passé</td></tr>
<tr><td>present perfect</td><td>bilan, expérience, for / since</td></tr><tr><td>futur</td><td>will, going to, présent continu</td></tr><tr><td>conditionnel 1</td><td>if + présent, will</td></tr></table>
<p>Modaux : can, could, must, have to, should, may, might — toujours + base verbale.</p>`},
{n:35,p:5,v:"Préparation au brevet (2) : périodes 3 et 4",g:"Bilan : passif, relatives, conditionnels, discours indirect",l:"Entraînement à l'écoute du brevet (2)",r:"Entraînement à la lecture du brevet (2)",t:"bilan:15-27|bilan:15-27|bilan:15-27|bilan:15-27",lecon:`
<h4>Préparation au brevet (2) : les structures</h4>
<table><tr><td>passif</td><td>be (au bon temps) + participe passé ; by + auteur</td></tr><tr><td>relatives</td><td>who / which / that / whose</td></tr>
<tr><td>conditionnel 2</td><td>if + prétérit, would + base ; If I were you…</td></tr><tr><td>discours indirect</td><td>said that… / told someone to…</td></tr>
<tr><td>question tags</td><td>auxiliaire + pronom, sens inverse</td></tr><tr><td>quantifieurs</td><td>much, many, a few, a little, too, enough</td></tr>
<tr><td>-ing ou to</td><td>enjoy doing / want to do</td></tr><tr><td>used to</td><td>habitude passée</td></tr></table>
<p><b>Mots de liaison utiles à l'écrit :</b> first, then, after that, finally ; but, however ; because, so ; although (bien que) ; for example.</p>
<ul><li><i>Although the film was long, I enjoyed watching it.</i> = Bien que le film soit long, j'ai aimé le regarder.</li></ul>`},
{n:36,p:5,v:"Défis de fin d'année",g:"Défis : toute la grammaire du cycle 4",l:"Défis d'écoute",r:"Défis de lecture",t:"bilan:1-33|bilan:1-33|bilan:1-33|bilan:1-33",lecon:`
<h4>Défis de fin de 3e</h4>
<p>Tu as fait tout le programme du cycle 4. Voici les erreurs les plus fréquentes à éviter le jour du brevet :</p>
<table><tr><td>« He don't like »</td><td>→ He <b>doesn't</b> like</td></tr><tr><td>« I am agree »</td><td>→ I <b>agree</b></td></tr>
<tr><td>« I live here since 2015 »</td><td>→ I <b>have lived</b> here since 2015</td></tr><tr><td>« Did you saw…? »</td><td>→ Did you <b>see</b>…?</td></tr>
<tr><td>« If it will rain »</td><td>→ If it <b>rains</b></td></tr><tr><td>« He said me »</td><td>→ He <b>told</b> me</td></tr>
<tr><td>« people is »</td><td>→ people <b>are</b> (pluriel)</td></tr><tr><td>« an information »</td><td>→ <b>some</b> information / a piece of information</td></tr></table>
<ul><li><i>Good luck with your exams! You've worked hard this year.</i> = Bonne chance pour tes examens ! Tu as bien travaillé cette année.</li></ul>
<p>Cet été : regarde des séries en anglais avec les sous-titres en anglais, et écoute des podcasts pour ados.</p>`}
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
travel:"to go abroad=partir à l'étranger;to go sightseeing=faire du tourisme;a journey=un trajet;a flight=un vol (en avion);to book=réserver;to pack=faire ses bagages;to get lost=se perdre;a guidebook=un guide touristique (livre);a youth hostel=une auberge de jeunesse;to rent=louer;a landscape=un paysage;a view=une vue;to explore=explorer;a souvenir=un souvenir (un objet)",
childhood:"a memory=un souvenir (dans la tête);to remember=se souvenir;a toy=un jouet;a teddy bear|a teddy=un ours en peluche;to grow up=grandir;childhood=l'enfance;a nursery=une crèche;a primary school=une école primaire;a neighbour=un voisin, une voisine;a swing=une balançoire;a slide=un toboggan;naughty=vilain, désobéissant;a bedtime story=une histoire du soir;to tease=taquiner",
stories:"an accident=un accident;a crash=une collision;a fire=un incendie;a thief=un voleur;to steal=voler (dérober);a witness=un témoin;to rescue=secourir;to injure=blesser;to escape=s'échapper;suddenly=soudain;luckily|fortunately=heureusement;unfortunately=malheureusement;to arrest=arrêter (quelqu'un);a burglar=un cambrioleur;to scream=hurler;a clue=un indice",
experiences:"to try=tenter, essayer (de faire);to taste=goûter;to climb=escalader;a prize=un prix (une récompense);an adventure=une aventure;a challenge=un défi;to dare=oser;to go scuba diving=faire de la plongée sous-marine;to ride a camel=monter à dos de chameau;once=une fois;twice=deux fois;a dream come true=un rêve devenu réalité;unforgettable=inoubliable;to be scared of=avoir peur de",
tech:"social media=les réseaux sociaux;a post=une publication;to share=partager;a follower=un abonné;an app=une application;to update=mettre à jour;to log in=se connecter;fake news=les infox, les fausses informations;cyberbullying=le cyberharcèlement;privacy=la vie privée;a password=un mot de passe;to download=télécharger;to delete=supprimer;a device=un appareil;addicted=accro, dépendant;online=en ligne;a link=un lien;a screen=un écran",
news:"the news=les informations;a headline=un gros titre;to happen=se produire, arriver;an event=un événement;recently=récemment;so far=jusqu'à présent;a storm=une tempête;an earthquake=un tremblement de terre;a strike=une grève;a survey=un sondage, une enquête;a victim=une victime;the weather forecast=la météo (les prévisions);breaking news=une information de dernière minute;to announce=annoncer",
environment:"climate change=le changement climatique;global warming=le réchauffement climatique;greenhouse gases=les gaz à effet de serre;fossil fuels=les énergies fossiles;renewable energy=les énergies renouvelables;solar panels=des panneaux solaires;wind turbines=des éoliennes;to reduce=réduire;to reuse=réutiliser;endangered species=les espèces menacées;a drought=une sécheresse;a flood=une inondation;waste=les déchets;to pollute=polluer;plastic packaging=les emballages en plastique;to save energy=économiser l'énergie;melting ice=la fonte des glaces",
plans:"to arrange=organiser;an appointment=un rendez-vous (médecin, coiffeur);to meet up=se retrouver;to hang out=traîner, passer du temps ensemble;to cancel=annuler;to put off|to postpone=repousser, reporter;to look forward to=avoir hâte de;free=libre (disponible);busy=occupé;a sleepover=une soirée pyjama;to invite=inviter;a reminder=un rappel;to be late=être en retard",
jobs:"a career=une carrière;a skill=une compétence;to apply for=postuler à;an interview=un entretien;to earn=gagner (de l'argent);a salary=un salaire;to hire=embaucher;work experience=un stage en entreprise;a lawyer=un avocat;an architect=un architecte;a plumber=un plombier;an employer=un employeur;to be unemployed=être au chômage;a part-time job=un emploi à temps partiel;a nurse=un infirmier, une infirmière;a surgeon=un chirurgien;an electrician=un électricien;a programmer|a computer programmer=un programmeur",
health:"to feel sick=avoir mal au cœur;to feel dizzy=avoir la tête qui tourne;to sprain=se fouler;an injury=une blessure;a prescription=une ordonnance;a pill=un comprimé;a balanced diet=une alimentation équilibrée;to be fit=être en forme;a wound=une plaie;an X-ray=une radiographie;a GP=un médecin généraliste;to recover=se rétablir;a bruise=un bleu (hématome);an allergy=une allergie;to sneeze=éternuer;mental health=la santé mentale",
rules:"a rule=une règle (de conduite);to obey=obéir;to break a rule=enfreindre une règle;allowed=autorisé;forbidden=interdit;compulsory=obligatoire;a detention=une retenue (une colle);a punishment=une punition;a warning=un avertissement;a fine=une amende;a law=une loi;to respect=respecter;polite=poli;rude=impoli",
traditions:"Remembrance Day=le jour du Souvenir (11 novembre);a poppy=un coquelicot;New Year's Eve=la Saint-Sylvestre;Hogmanay=le Nouvel An écossais;a carol=un chant de Noël;mistletoe=le gui;a wreath=une couronne (de fleurs, de Noël);a parade=un défilé;a bonfire=un feu de joie;a custom=une coutume;to celebrate=célébrer, fêter;a bank holiday=un jour férié;Mother's Day=la fête des Mères;Valentine's Day=la Saint-Valentin;April Fool's Day=le 1er avril (poisson d'avril);a resolution=une bonne résolution",
london:"the Houses of Parliament=le Parlement (de Westminster);Buckingham Palace=le palais de Buckingham;the Tower of London=la tour de Londres;the Thames=la Tamise;a landmark=un monument emblématique;a sightseeing tour=une visite touristique;a double-decker=un bus à impériale;the Tube|the Underground=le métro de Londres;a black cab=un taxi londonien;the Crown Jewels=les joyaux de la Couronne;a guard=un garde;the City=le quartier des affaires de Londres",
newyork:"a skyscraper=un gratte-ciel;a borough=un arrondissement (de New York);a block=un pâté de maisons;an immigrant=un immigré;the melting pot=le creuset des cultures;a sidewalk=un trottoir (américain);an apartment=un appartement (américain);the subway=le métro (américain);a yellow cab=un taxi jaune;a fire escape=un escalier de secours;the Statue of Liberty=la statue de la Liberté;a neighborhood|a neighbourhood=un quartier;a diner=un petit restaurant américain",
inventions:"to invent=inventer;an inventor=un inventeur;to discover=découvrir;a discovery=une découverte;a scientist=un scientifique;to design=concevoir;to develop=mettre au point, développer;a patent=un brevet (d'invention);a breakthrough=une avancée majeure;an experiment=une expérience (scientifique);a laboratory|a lab=un laboratoire;the wheel=la roue;electricity=l'électricité;a light bulb=une ampoule;a steam engine=une machine à vapeur;a vaccine=un vaccin",
media:"a newspaper=un journal (papier);a journalist=un journaliste;an editor=un rédacteur en chef;a source=une source;to check=vérifier;reliable=fiable;to broadcast=diffuser;a channel=une chaîne (de télévision);an advert|an advertisement|an ad=une publicité;a viewer=un téléspectateur;the front page=la une (d'un journal);the press=la presse;biased=partial, orienté;to go viral=devenir viral;an influencer=un influenceur",
relationships:"to get on with=bien s'entendre avec;to fall out with=se fâcher avec;to trust=faire confiance;to argue=se disputer;to apologise|to apologize=s'excuser;jealous=jaloux;upset=contrarié, bouleversé;embarrassed=gêné;grateful=reconnaissant;peer pressure=la pression du groupe;self-confidence=la confiance en soi;a crush=un béguin;to break up=rompre;to support=soutenir;loyal=fidèle, loyal",
citizenship:"a citizen=un citoyen;a right=un droit;a duty=un devoir;to vote=voter;an election=une élection;the government=le gouvernement;equality=l'égalité;freedom=la liberté;to protest=manifester, protester;a demonstration=une manifestation;a petition=une pétition;human rights=les droits humains;racism=le racisme;the Prime Minister=le Premier ministre;a member of Parliament|an MP=un député;to elect=élire",
commonwealth:"an official language=une langue officielle;a native speaker=un locuteur natif;the British Empire=l'Empire britannique;independence=l'indépendance;a colony=une colonie;New Zealand=la Nouvelle-Zélande;South Africa=l'Afrique du Sud;India=l'Inde;an accent=un accent;a maple leaf=une feuille d'érable;Aboriginal people=les Aborigènes;the Maori=les Maoris;Jamaica=la Jamaïque;a dialect=un dialecte",
famous:"to be born=naître;to die=mourir;to become=devenir;to succeed=réussir;success=le succès;a hero=un héros;a role model=un modèle;to inspire=inspirer;to fight for=se battre pour;to campaign=faire campagne;an achievement=une réussite, un exploit;a biography=une biographie;a speech=un discours;a Nobel Prize=un prix Nobel;a genius=un génie;brilliant=brillant, génial",
sport:"a championship=un championnat;a tournament=un tournoi;a trophy=un trophée;to beat=battre (un adversaire);to score=marquer (un but, un point);a draw=un match nul;a referee=un arbitre;a coach=un entraîneur;a fan|a supporter=un supporter;to train=s'entraîner;to break a record=battre un record;a medal=une médaille;the Olympic Games|the Olympics=les Jeux olympiques;a pitch=un terrain (de foot, de rugby);a goalkeeper=un gardien de but;to work out=faire de la musculation, du sport",
shopping:"a bargain=une bonne affaire;a discount=une réduction;on sale=en solde;to afford=avoir les moyens de (payer);to save=économiser;to spend=dépenser;pocket money=l'argent de poche;a receipt=un ticket de caisse;a refund=un remboursement;second-hand=d'occasion;brand-new=tout neuf;a brand=une marque;a shopping centre|a mall=un centre commercial;to try on=essayer (un vêtement);a checkout|a till=une caisse;cash=l'argent liquide;a credit card|a bank card=une carte bancaire",
transport:"a departure=un départ;an arrival=une arrivée;a delay=un retard;to check in=enregistrer (ses bagages);a boarding pass=une carte d'embarquement;a gate=une porte d'embarquement;a single ticket|a single=un aller simple;a return ticket|a return=un aller-retour;to take off=décoller;to land=atterrir;luggage|baggage=les bagages;a platform=un quai;a timetable=un horaire;a passenger=un passager;customs=la douane;a traffic jam=un embouteillage;a seatbelt|a seat belt=une ceinture de sécurité",
food:"a vegetarian=un végétarien;a vegan=un végan;organic=bio;junk food=la malbouffe;a takeaway=un plat à emporter;a snack=un en-cas;a habit=une habitude;a lifestyle=un mode de vie;healthy=sain;to cut down on=réduire sa consommation de;a ready meal=un plat préparé;a recipe=une recette;sugary=sucré (plein de sucre);fatty food=les aliments gras;a meal=un repas;to skip breakfast=sauter le petit-déjeuner;spicy=épicé",
school:"a state school=une école publique;a private school=une école privée;GCSEs=les examens britanniques de fin de collège;A levels=l'équivalent britannique du baccalauréat;to revise=réviser;to pass an exam=réussir un examen;to fail an exam=rater un examen;to take an exam|to sit an exam=passer un examen;a mark|a grade=une note;a report=un bulletin scolaire;a head teacher|a headteacher=un chef d'établissement;a boarding school=un internat;a term=un trimestre;to cheat=tricher;to be good at=être bon en",
opinion:"in my opinion=à mon avis;to agree=être d'accord;to disagree=ne pas être d'accord;it depends=ça dépend;first of all=tout d'abord;moreover|furthermore=de plus;however=cependant;on the other hand=d'un autre côté;therefore=par conséquent, donc;to sum up|in conclusion=pour résumer;although=bien que;a point of view=un point de vue;to convince=convaincre;whereas=alors que, tandis que",
future:"artificial intelligence|AI=l'intelligence artificielle;a driverless car|a self-driving car=une voiture autonome;space travel=les voyages spatiaux;to predict=prédire;likely=probable;unlikely=peu probable;in the near future=dans un avenir proche;by 2050=d'ici 2050;a spaceship=un vaisseau spatial;to replace=remplacer;a smart home=une maison connectée;a flying car=une voiture volante;outer space=l'espace (le cosmos)",
art:"a novel=un roman;a play=une pièce de théâtre;a poem=un poème;a director=un réalisateur;the plot=l'intrigue;a review=une critique;a sequel=une suite;the soundtrack=la bande originale;moving=émouvant;gripping=captivant;overrated=surestimé;a short story=une nouvelle;a painting=un tableau (une peinture);an exhibition=une exposition;a band=un groupe (de musique);a character=un personnage;a stage=une scène (de théâtre);the audience=le public;a masterpiece=un chef-d'œuvre",
volunteering:"to volunteer=faire du bénévolat;a volunteer=un bénévole;a charity=une association caritative;to raise money=collecter des fonds;a donation=un don;homeless=sans-abri;the elderly=les personnes âgées;to look after=s'occuper de;to make a difference=changer les choses;to get involved=s'impliquer;a food bank=une banque alimentaire;a shelter=un refuge, un abri;generous=généreux;to help out=donner un coup de main;selfish=égoïste"
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

G("pastsimple","Last summer we ___ to Scotland.","went","goed|have gone|go","Moment passé précis (last summer) → prétérit : went.");
G("pastsimple","I ___ my phone on the train yesterday.","left","leaved|have left|leave","leave → left.");
G("pastsimple","___ you enjoy the trip?","Did","Do|Have|Were","Question au prétérit : Did + sujet + base.");
G("pastsimple","We didn't ___ a hotel; we stayed with friends.","book","booked|books|booking","didn't + base verbale.");
G("pastsimple","How long ___ the journey take?","did","was|has|does","How long did it take? = Combien de temps cela a-t-il pris ?");
G("pastsimple","The plane ___ in Dublin at 6 pm yesterday.","landed","land|has landed|landing","Heure précise dans le passé → prétérit.");
G("pastsimple","She ___ a lot of photos in Rome.","took","taked|has took|take","take → took.");
G("pastsimple","Choisis la phrase correcte.","We got lost because we didn't have a map.","We got lost because we didn't had a map.|We got lost because we hadn't not a map.|We getted lost because we didn't have a map.","didn't + base ; get → got.");
G("pastsimple","Where ___ you last night?","were","did|was|have","be au prétérit avec you : were.");
G("pastsimple","They ___ by ferry because they were afraid of flying.","travelled","travel|travelling|have travelled","travel → travelled (l doublé en anglais britannique).");
G("pastsimple","Comment dit-on « Nous sommes partis il y a deux jours » ?","We left two days ago.","We have left two days ago.|We left since two days.|We leaved two days ago.","ago → prétérit.");
S("pastsimple","Mets à la forme négative : « They caught the bus. »",["They didn't catch the bus"],"didn't + base : catch.");
S("pastsimple","Pose la question qui correspond à la réponse « I went to Italy. » : Where ___ ?",["did you go","Where did you go"],"Where did you go? — did + base.");

G("pastcont","At 8 pm yesterday, I ___ TV.","was watching","watched|am watching|were watching","Action en cours à un moment précis du passé : was + -ing.");
G("pastcont","They ___ football when it started to rain.","were playing","was playing|play|are playing","they → were + -ing.");
G("pastcont","What ___ you doing at midnight?","were","was|did|are","What were you doing…?");
G("pastcont","It ___ raining, so we stayed inside.","was","were|did|is","it → was raining.");
G("pastcont","She wasn't ___ to the teacher.","listening","listen|listened|listens","wasn't + -ing.");
G("pastcont","Quelle phrase décrit le décor d'une histoire ?","The sun was shining and the birds were singing.","The sun shines and the birds sing.|The sun will shine.|The sun is going to shine.","Le prétérit continu plante le décor (imparfait).");
G("pastcont","Comment dit-on « Je dormais quand tu as appelé » ?","I was sleeping when you called.","I slept when you were calling.|I was sleeping when you were call.|I am sleeping when you called.","Action longue (was sleeping) interrompue par une action courte (called).");
G("pastcont","Comment dit-on « Quand j'étais petit, je jouais au foot tous les samedis » ?","When I was little, I played football every Saturday.","When I was little, I was playing football every Saturday.|When I was little, I am playing football every Saturday.|When I was little, I was play football every Saturday.","Habitude passée → prétérit simple (ou used to), pas le prétérit continu.");
G("pastcont","Were you sleeping? — No, I ___.","wasn't","weren't|didn't|haven't","Réponse courte avec I : No, I wasn't.");
G("pastcont","My parents ___ dinner when I got home.","were cooking","was cooking|cook|are cooking","my parents = they → were cooking.");
S("pastcont","Mets au prétérit continu : « She (read) a book at 9 pm. »",["She was reading a book at 9 pm","was reading"],"she → was + reading.");
S("pastcont","Mets au prétérit continu : « We (wait) for the bus. »",["We were waiting for the bus","were waiting"],"we → were + waiting.");

G("whenwhile","I was walking home ___ I saw the accident.","when","while|during|since","when + action courte (saw).");
G("whenwhile","___ she was sleeping, someone stole her bag.","While","During|Since|For","while + action longue (was sleeping).");
G("whenwhile","The phone ___ while I was having a shower.","rang","was ring|rings|ringed","Action courte qui interrompt → prétérit simple : ring → rang.");
G("whenwhile","We ___ dinner when the lights went out.","were having","have|are having|has","Action longue en cours → prétérit continu.");
G("whenwhile","While I ___ my homework, my brother was playing video games.","was doing","were doing|do|does","Deux actions longues simultanées : was doing / was playing.");
G("whenwhile","« During » s'emploie avec :","un nom (during the night)","un sujet + un verbe (during I was…)|un verbe à la base|un pronom seul","during + nom ; while + sujet + verbe.");
G("whenwhile","Comment dit-on « Pendant que je lisais, il pleuvait » ?","While I was reading, it was raining.","During I was reading, it was raining.|While I was reading, it rains.|When I am reading, it is raining.","Deux actions longues : while + prétérit continu.");
G("whenwhile","The thieves escaped ___ the guard was sleeping.","while","during|for|since","while + action longue.");
G("whenwhile","She ___ off her bike while she was riding to school.","fell","falls|fallen|was fall","Action courte → prétérit : fall → fell.");
G("whenwhile","Luckily, nobody ___ injured.","was","were|did|have","nobody est singulier → was.");
G("whenwhile","Que veut dire « suddenly » ?","soudain","heureusement|lentement|finalement","suddenly = soudain, tout à coup.");
G("whenwhile","Que veut dire « to steal » ?","voler (dérober)","voler (dans les airs)|vendre|cacher","steal (stole, stolen) = dérober ; fly = voler dans les airs.");

G("pp_ever","I ___ never been to London.","have","has|am|did","I → have + participe passé.");
G("pp_ever","She ___ already seen this film.","has","have|is|did","she → has.");
G("pp_ever","Have you ever ___ sushi?","eaten","ate|eat|eated","eat → ate → eaten (participe passé).");
G("pp_ever","Have you ever ridden a horse? — Yes, I ___.","have","did|ridden|do","Réponse courte : Yes, I have.");
G("pp_ever","He has ___ to the USA three times.","been","gone|went|be","Expérience (aller et revenir) → been.");
G("pp_ever","Tom isn't here: he has ___ to the shops.","gone","been|went|go","has gone = il est parti (et n'est pas encore revenu).");
G("pp_ever","Quel est le participe passé de « write » ?","written","wrote|writed|writen","write → wrote → written.");
G("pp_ever","Comment dit-on « Je n'ai jamais pris l'avion » ?","I've never flown.","I've never flew.|I never have flown.|I didn't never fly.","never + participe passé : flown.");
G("pp_ever","___ your parents ever been to Japan?","Have","Has|Did|Are","your parents = they → Have.");
G("pp_ever","We ___ won a match this season!","haven't","hasn't|didn't|aren't","we → haven't + participe passé.");
G("pp_ever","Quel mot accompagne souvent le present perfect ?","ever","yesterday|ago|last year","ever, never, already, yet, just → present perfect.");
G("pp_ever","Que veut dire « unforgettable » ?","inoubliable","impardonnable|incroyable|inconnu","unforgettable = inoubliable.");

G("forsince","I've lived here ___ 2015.","since","for|from|during","since + point de départ (une date).");
G("forsince","She has had her phone ___ two years.","for","since|ago|during","for + durée.");
G("forsince","___ have you known Sam?","How long","How much|How many|How often","How long…? = Depuis combien de temps… ?");
G("forsince","Comment dit-on « Je le connais depuis 2019 » ?","I've known him since 2019.","I know him since 2019.|I knew him since 2019.|I've known him for 2019.","« depuis » + situation qui dure → present perfect + since.");
G("forsince","Comment dit-on « Elle est malade depuis lundi » ?","She has been ill since Monday.","She is ill since Monday.|She was ill since Monday.|She has been ill for Monday.","Present perfect + since + point de départ.");
G("forsince","They have been friends ___ they were six.","since","for|ago|from","since + point de départ (ici une proposition).");
G("forsince","He hasn't seen his cousin ___ ages.","for","since|ago|during","for ages = depuis une éternité (durée).");
G("forsince","How long have you ___ in Lyon?","lived","live|living|lives","How long have you lived…? : participe passé.");
G("forsince","« I've had this bike for a month » veut dire :","J'ai ce vélo depuis un mois.","J'ai eu ce vélo il y a un mois.|J'aurai ce vélo dans un mois.|J'ai eu ce vélo pendant un mois, puis je l'ai vendu.","Present perfect + for : la situation dure encore.");
G("forsince","Que veut dire « privacy » ?","la vie privée","la propriété privée|le prix|la priorité","privacy = la vie privée.");
G("forsince","Que veut dire « cyberbullying » ?","le cyberharcèlement","le piratage|la cybercriminalité bancaire|la publicité en ligne","bullying = harcèlement.");

G("ppvspast","I ___ this film last week.","saw","have seen|see|have saw","last week (moment précis) → prétérit.");
G("ppvspast","I ___ this film three times.","have seen","have saw|see|am seeing","Bilan, pas de date → present perfect.");
G("ppvspast","Have you finished your homework ___?","yet","ago|since|already ago","Dans une question, yet en fin de phrase = déjà.");
G("ppvspast","I haven't eaten ___.","yet","already|just|ago","Négation : not … yet = pas encore.");
G("ppvspast","She has ___ left: you missed her by a minute!","just","yet|ever|ago","has just left = vient de partir.");
G("ppvspast","We have ___ bought the tickets, don't worry.","already","yet|ago|ever","already = déjà (dans une phrase affirmative).");
G("ppvspast","When ___ you arrive in London?","did","have|has|were","Question avec when (moment précis) → prétérit.");
G("ppvspast","Comment dit-on « Elle vient de téléphoner » ?","She has just called.","She comes to call.|She has called just.|She just has call.","venir de = have just + participe passé.");
G("ppvspast","Choisis la phrase correcte.","He moved to Leeds in 2020.","He has moved to Leeds in 2020.|He has move to Leeds in 2020.|He is moving to Leeds in 2020 ago.","Date précise (in 2020) → prétérit.");
G("ppvspast","Que veut dire « so far » ?","jusqu'à présent","si loin|plus tard|depuis longtemps","so far = jusqu'à présent.");
G("ppvspast","Que veut dire « a headline » ?","un gros titre","une ligne de tête|un éditorial|une publicité","headline = titre d'un article.");
S("ppvspast","Complète au present perfect : « I ___ (just / finish) my essay. »",["have just finished","I have just finished"],"have just + participe passé.");

G("will","I think it ___ rain tomorrow.","will","is|does|shall to","Prédiction avec I think → will.");
G("will","Sea levels ___ rise if we don't act.","will","are|would|do","Prédiction → will + base.");
G("will","It's cold in here. — OK, I ___ close the window.","'ll","closed|close to|am closed","Décision prise sur le moment → I'll.");
G("will","Don't worry, I ___ tell anyone. I promise.","won't","don't will|willn't|am not","Promesse négative : won't (will not).");
G("will","___ we have enough water in 2050?","Will","Do|Are|Shall to","Question : Will + sujet + base ?");
G("will","Choisis la phrase correcte.","When I am older, I will live by the sea.","When I will be older, I will live by the sea.|When I am older, I live by the sea will.|When I will older, I am living by the sea.","Après when (futur) → présent ; will dans la principale.");
G("will","Comment dit-on « Il ne fera pas beau demain » ?","The weather won't be nice tomorrow.","The weather will not nice tomorrow.|The weather doesn't will be nice tomorrow.|The weather isn't be nice tomorrow.","won't + base (be).");
G("will","Will plastic disappear one day? — No, it ___.","won't","doesn't|isn't|willn't","Réponse courte : No, it won't.");
G("will","Que veut dire « renewable energy » ?","les énergies renouvelables","les énergies fossiles|l'énergie nucléaire|les économies d'énergie","renewable = renouvelable.");
G("will","Polar bears ___ probably disappear.","will","are|do|would to","will probably + base : probablement.");
G("will","Que veut dire « a drought » ?","une sécheresse","une inondation|un courant d'air|une tempête","drought = sécheresse ; flood = inondation.");
S("will","Mets au futur avec will : « Robots (do) many jobs. »",["Robots will do many jobs","will do"],"will + base verbale : will do.");

G("futures","I ___ the dentist at 4 pm tomorrow. It's in my diary.","am seeing","saw|have seen|was seeing","Rendez-vous organisé → présent continu.");
G("futures","Look at that glass! It ___ fall!","is going to","goes to|falls yesterday|is fall","Indice visible → be going to.");
G("futures","I've decided: I ___ learn the guitar this year.","am going to","will to|go to|am go","Intention déjà décidée → be going to.");
G("futures","The phone is ringing. — I ___ answer it!","'ll","answered|have answered|was answering","Décision prise sur le moment → will.");
G("futures","We ___ a party on Saturday. Do you want to come?","are having","have had|had|were having","Événement organisé → présent continu.");
G("futures","I'm sure you ___ love this book.","will","are going|are loving|love will","Prédiction avec I'm sure → will.");
G("futures","I'm looking forward to ___ you.","seeing","see|seen|saw","look forward to + -ing.");
G("futures","Que veut dire « They've cancelled the match » ?","Ils ont annulé le match.","Ils ont gagné le match.|Ils ont repoussé le match.|Ils ont regardé le match.","to cancel = annuler.");
G("futures","Que veut dire « to put off » ?","repousser, reporter","annuler|éteindre|enlever","to put off = repousser.");
G("futures","What ___ you doing this weekend? — Nothing special.","are","do|will|have","Projet proche → présent continu : What are you doing…?");
G("futures","Choisis la phrase qui exprime une promesse.","I'll call you tonight.","I usually call you at night.|I called you last night.|I was calling you.","Promesse → will.");

G("cond1","If it ___ tomorrow, we'll stay at home.","rains","will rain|rained|would rain","Après if (condition réelle) → présent.");
G("cond1","If you work hard, you ___ pass your exams.","will","would|are|did","Conséquence → will + base.");
G("cond1","What will you do if you ___ the job?","don't get","won't get|didn't get|not get","if + présent (négatif : don't get).");
G("cond1","If she ___ late again, the teacher will be angry.","is","will be|was|be","if + présent (be → is).");
G("cond1","You won't pass ___ you revise.","unless","if|when|because","unless = à moins que, sauf si.");
G("cond1","Choisis la phrase correcte.","If I get good marks, I'll go to a general lycée.","If I will get good marks, I'll go to a general lycée.|If I get good marks, I go will to a general lycée.|If I got good marks, I'll go to a general lycée.","if + présent, will + base.");
G("cond1","Comment dit-on « Si tu viens, je serai content » ?","If you come, I'll be happy.","If you will come, I'll be happy.|If you come, I'm be happy.|If you came, I'll be happy.","if + présent, will + base.");
G("cond1","Que veut dire « work experience » ?","un stage en entreprise","une expérience scientifique|un métier|un entretien d'embauche","work experience = un stage.");
G("cond1","If we ___ the bus, we'll be late.","miss","will miss|missed|missing","if + présent.");
G("cond1","He ___ get a better salary if he learns English.","will","would|is|does","Condition réelle → will.");
G("cond1","Que veut dire « to apply for a job » ?","postuler à un emploi","appliquer un métier|quitter un emploi|trouver un emploi","apply for = postuler.");
S("cond1","Complète : « If it is sunny, we ___ (go) to the beach. »",["will go","we will go"],"Conséquence → will + base : will go.");

G("should","You've got a temperature. You ___ see a doctor.","should","shouldn't|should to|shoulds","Conseil → should + base.");
G("should","You ___ eat so many sweets. It's bad for your teeth.","shouldn't","should|don't should|should not to","Conseil négatif → shouldn't.");
G("should","___ I call an ambulance?","Should","Do|Shall to|Am","Question : Should I…?");
G("should","He should ___ to bed earlier.","go","to go|goes|going","should + base verbale.");
G("should","« If I were you, I'd rest » veut dire :","À ta place, je me reposerais.","Si j'étais toi, je me suis reposé.|Je suis toi et je me repose.|Si tu étais moi, tu te reposerais.","If I were you, I'd… = à ta place, je…");
G("should","Que veut dire « a prescription » ?","une ordonnance","une pharmacie|un comprimé|une radiographie","prescription = ordonnance du médecin.");
G("should","Que veut dire « I feel dizzy » ?","J'ai la tête qui tourne.","J'ai mal au cœur.|Je suis fatigué.|J'ai mal à la tête.","dizzy = qui a la tête qui tourne.");
G("should","Choisis le meilleur conseil, bien formé, pour quelqu'un de stressé.","You should take a break.","You should to take a break.|You shoulds take a break.|You should taking a break.","should + base.");
G("should","« Why don't you…? » sert à :","donner un conseil, proposer","interdire|se plaindre|refuser","Why don't you see a doctor? = Pourquoi ne vas-tu pas voir un médecin ?");
G("should","Comment dit-on « Tu ne devrais pas sauter le petit-déjeuner » ?","You shouldn't skip breakfast.","You don't should skip breakfast.|You shouldn't to skip breakfast.|You shouldn't skipping breakfast.","shouldn't + base.");
G("should","Que veut dire « a balanced diet » ?","une alimentation équilibrée","un régime strict|un repas rapide|un sport d'équilibre","diet = alimentation.");

G("haveto","In my school, we ___ wear a uniform. It's the rule.","have to","has to|having to|must to","Obligation (règlement) → have to.");
G("haveto","My sister ___ get up at six for her job.","has to","have to|must to|haves to","she → has to.");
G("haveto","You ___ come if you don't want to. It's optional.","don't have to","mustn't|haven't to|don't must","Pas obligé → don't have to.");
G("haveto","You ___ use your phone during the exam. It's forbidden.","mustn't","don't have to|haven't to|must","Interdit → mustn't.");
G("haveto","Yesterday I ___ stay at home because I was ill.","had to","must|musted|have to","Au passé : had to (must n'a pas de passé).");
G("haveto","___ you have to wear a uniform at your school?","Do","Have|Must|Are","Question : Do you have to…?");
G("haveto","Que veut dire « You don't have to pay » ?","Tu n'es pas obligé de payer.","Tu ne dois pas payer (c'est interdit).|Tu n'as pas payé.|Tu ne peux pas payer.","don't have to = absence d'obligation.");
G("haveto","Que veut dire « compulsory » ?","obligatoire","interdit|facultatif|gratuit","compulsory = obligatoire.");
G("haveto","Que veut dire « a detention » ?","une retenue (une colle)","une prison|un devoir|une absence","detention = retenue au collège.");
G("haveto","In some schools, pupils ___ to use their phones at break.","are allowed","are allow|allow|have allowed","be allowed to = avoir le droit de.");
S("haveto","Mets au passé : « I have to wait for the bus. »",["I had to wait for the bus"],"have to → had to.");

G("could","When I was five, I ___ swim.","could","can|could to|was can","Capacité passée → could.");
G("could","One day, you ___ able to drive.","will be","will|can be|are","Futur de can → will be able to.");
G("could","___ you open the window, please?","Could","Did|Must|Should","Demande polie : Could you…?");
G("could","The firefighters ___ able to save the cat.","were","was|could|did","Réussite ponctuelle au passé → were able to.");
G("could","I couldn't ___ because I was ill.","come","to come|came|coming","couldn't + base.");
G("could","Choisis la phrase correcte.","I'll be able to help you tomorrow.","I'll can help you tomorrow.|I will could help you tomorrow.|I can to help you tomorrow.","can n'a pas de futur → will be able to.");
G("could","Que veut dire « a poppy » ?","un coquelicot","un chiot|une poupée|un drapeau","poppy = coquelicot (porté pour Remembrance Day).");
G("could","Que célèbre-t-on le 11 novembre au Royaume-Uni ?","Remembrance Day","Bonfire Night|Boxing Day|Thanksgiving","Remembrance Day : on se souvient des soldats morts à la guerre.");
G("could","Que veut dire « Hogmanay » ?","le Nouvel An écossais","Noël en Irlande|la fête nationale galloise|Halloween","Hogmanay = la Saint-Sylvestre en Écosse.");
G("could","My grandfather ___ speak four languages when he was young.","could","can|was able|could to","Capacité passée → could.");
G("could","She has never ___ able to whistle.","been","be|was|being","Present perfect de be able to → has been able to.");

G("maymight","Take an umbrella. It ___ rain this afternoon.","might","must|mustn't|has to","Possibilité → might.");
G("maymight","I'm not sure. We ___ visit the Tower of London.","may","must|have to|should to","Possibilité → may + base.");
G("maymight","He might ___ come: he's very busy.","not","no|don't|isn't","Négation : might not.");
G("maymight","___ I come in?","May","Must|Have|Should to","Permission très polie : May I…?");
G("maymight","Comment dit-on « Il se peut que le métro soit fermé » ?","The Tube might be closed.","The Tube might is closed.|The Tube might to be closed.|The Tube mights be closed.","might + base (be).");
G("maymight","« Maybe » veut dire :","peut-être","jamais|sûrement|souvent","Maybe it will rain = It might rain.");
G("maymight","Quel mot exprime une simple possibilité ?","might","must|have to|mustn't","might = il se peut que.");
G("maymight","Que veut dire « the Thames » ?","la Tamise","la Manche|la Seine|le Tibre","the Thames = la Tamise, le fleuve de Londres.");
G("maymight","Que veut dire « a landmark » ?","un monument emblématique","une borne kilométrique|un panneau publicitaire|une carte","landmark = monument, lieu emblématique.");
G("maymight","She ___ be at home. I'm not sure.","may","must to|is|may to","may + base : possibilité.");
G("maymight","Choisis la phrase correcte.","It may be cold in London in April.","It may is cold in London in April.|It mays be cold in London in April.|It may to be cold in London in April.","may + base verbale.");

G("passive1","English ___ in many countries.","is spoken","speaks|is speak|spoken","Passif présent : is + participe passé (spoken).");
G("passive1","New York ___ by millions of tourists every year.","is visited","visits|is visit|are visited","Sujet singulier → is visited.");
G("passive1","Hot dogs ___ on every corner.","are sold","is sold|sell|are sell","Sujet pluriel → are sold.");
G("passive1","Yellow cabs ___ by thousands of people.","are used","is used|use|are using","are + used.");
G("passive1","« On parle espagnol à Miami » :","Spanish is spoken in Miami.","Spanish speaks in Miami.|One speak Spanish in Miami.|Spanish is speaking in Miami.","« on » → souvent un passif en anglais.");
G("passive1","The Statue of Liberty ___ of copper.","is made","makes|is make|made is","be made of = être fait de.");
G("passive1","Our school ___ every evening.","is cleaned","cleans|is clean|cleaned","Passif : is + cleaned.");
G("passive1","___ French spoken in Quebec?","Is","Does|Are|Has","Question au passif : Is + sujet + participe passé ?");
G("passive1","Que veut dire « a skyscraper » ?","un gratte-ciel","un pâté de maisons|un escalier de secours|un ascenseur","skyscraper = gratte-ciel.");
G("passive1","Que veut dire « the melting pot » ?","le creuset des cultures (le mélange)","une recette de cuisine|un quartier pauvre|la fonte des glaces","melting pot = société où se mélangent les cultures.");
S("passive1","Mets au passif : « People speak English here. » → English ___ here.",["is spoken","English is spoken here"],"is + participe passé : is spoken.");

G("passive2","The telephone ___ by Alexander Graham Bell.","was invented","invented|is invent|was invent","Passif au prétérit : was + participe passé.");
G("passive2","The pyramids ___ thousands of years ago.","were built","was built|built|were build","Sujet pluriel → were built.");
G("passive2","Penicillin ___ in 1928.","was discovered","discovered|is discovered|were discovered","Date passée → was + participe passé.");
G("passive2","When ___ the Eiffel Tower built?","was","did|is|were","Question : When was it built?");
G("passive2","Harry Potter ___ by J. K. Rowling.","was written","wrote|was wrote|is writing","write → written ; passif : was written.");
G("passive2","Choisis la phrase au passif.","The light bulb was improved by Edison.","Edison improved the light bulb.|Edison was improving the light bulb.|Edison has improved the light bulb.","be + participe passé = passif.");
G("passive2","« Le Web a été créé en 1989 » :","The Web was created in 1989.","The Web has created in 1989.|The Web created in 1989.|The Web is creating in 1989.","Date → prétérit ; passif : was created.");
G("passive2","These photos ___ by my grandfather.","were taken","was taken|were took|took","take → taken ; pluriel : were.");
G("passive2","Que veut dire « a breakthrough » ?","une avancée majeure","une panne|une erreur|une pause","breakthrough = une découverte qui change tout.");
G("passive2","Que veut dire « a patent » ?","un brevet d'invention","un patient|un parent|un patron","patent = brevet.");
S("passive2","Mets au passif : « Marie Curie discovered radium. » → Radium ___ by Marie Curie.",["was discovered","Radium was discovered by Marie Curie"],"was + participe passé.");

G("relatives","The journalist ___ wrote this article is very famous.","who","which|whose|what","Personne → who.");
G("relatives","This is the website ___ I use for my homework.","which","who|whose|what","Chose → which (ou that).");
G("relatives","She's the reporter ___ video went viral.","whose","who|which|that's","whose = dont (possession).");
G("relatives","Fake news is information ___ is false.","which","who|whose|what","Chose → which (ou that).");
G("relatives","I like people ___ tell the truth.","who","which|whose|where","Personnes → who (ou that).");
G("relatives","Choisis la phrase correcte.","The film that I saw was great.","The film that I saw it was great.|The film who I saw was great.|The film what I saw was great.","Pas de pronom en double ; chose → that/which.");
G("relatives","Le pronom relatif peut être omis dans :","the book I'm reading","the boy who lives next door|the dog which barks|the woman who called","On peut l'omettre quand il est complément (suivi d'un sujet).");
G("relatives","Que veut dire « reliable » ?","fiable","relié|lisible|célèbre","reliable = fiable.");
G("relatives","Que veut dire « biased » ?","partial, orienté","bilingue|fiable|ennuyeux","biased = partial.");
G("relatives","A podcast is a programme ___ you can listen to online.","which","who|whose|where","Chose → which.");
G("relatives","That's the man ___ son is a pilot.","whose","who|which|who's","whose = dont le fils.");

G("cond2","If I ___ more time, I would learn the piano.","had","have|would have|will have","if + prétérit.");
G("cond2","If I were you, I ___ apologise.","would","will|did|am","Conséquence imaginée → would.");
G("cond2","What would you do if you ___ the lottery?","won","win|would win|will win","if + prétérit : won.");
G("cond2","If she ___ here, she would help us.","were","is|will be|would be","Avec be : were (was est aussi entendu à l'oral).");
G("cond2","I ___ trust him if I were you.","wouldn't","won't|don't|didn't","Conseil imaginé : I wouldn't…");
G("cond2","Choisis la phrase correcte.","If I lived in London, I would go to the theatre.","If I would live in London, I would go to the theatre.|If I lived in London, I will go to the theatre.|If I live in London, I would went to the theatre.","if + prétérit, would + base.");
G("cond2","Comment dit-on « À ta place, je lui parlerais » ?","If I were you, I would talk to her.","If I am you, I will talk to her.|If I were you, I talk to her.|If I would be you, I would talk to her.","If I were you, I would…");
G("cond2","Que veut dire « embarrassed » ?","gêné","encombré|enceinte|ennuyé","embarrassed = gêné, mal à l'aise.");
G("cond2","Que veut dire « to fall out with » ?","se fâcher avec","tomber amoureux de|tomber avec|sortir avec","fall out with = se brouiller avec.");
G("cond2","If we ___ a car, we could travel more.","had","have|would have|will have","if + prétérit.");
G("cond2","Quelle phrase imagine une situation irréelle ?","If I were a bird, I would fly to Australia.","If it rains, I'll stay home.|When I'm older, I'll travel.|I'm going to fly to Australia.","if + prétérit, would : hypothèse irréelle.");
S("cond2","Complète : « If I had wings, I ___ (fly). »",["would fly","I would fly"],"Conditionnel 2 : would + base.");

G("reported","« I am tired. » → She said that she ___ tired.","was","is|were|has","Discours indirect : am → was.");
G("reported","« I like pizza. » → He said he ___ pizza.","liked","likes|like|liking","Présent → prétérit.");
G("reported","« I will come. » → She said she ___ come.","would","will|can|did","will → would.");
G("reported","« I can help. » → He told me he ___ help.","could","can|would can|was can","can → could.");
G("reported","« Close the door! » → She told me ___ the door.","to close","close|closing|that I close","Ordre → told + personne + to + base.");
G("reported","« Don't run! » → The teacher told us ___.","not to run","don't run|to not running|we don't run","Ordre négatif → not to + base.");
G("reported","Choisis la phrase correcte.","He told me that he was busy.","He said me that he was busy.|He told that he was busy.|He said to me he is busy yesterday.","tell + personne ; say (sans personne).");
G("reported","« I live in Leeds. » → She said that she ___ in Leeds.","lived","lives|live|living","Présent → prétérit.");
G("reported","« My brother is ill. » (dit par Tom) → Tom said that ___ brother was ill.","his","my|her|their","my → his (c'est Tom qui parle).");
G("reported","Que veut dire « a demonstration » (dans la rue) ?","une manifestation","une élection|un discours|une pétition","demonstration = manifestation.");
G("reported","Que veut dire « equality » ?","l'égalité","l'équilibre|la qualité|la liberté","equality = égalité.");
S("reported","Discours indirect : « I am happy. » → She said that she ___ happy.",["was"],"am → was.");

G("tags","You're Canadian, ___?","aren't you","are you|don't you|isn't it","Phrase affirmative avec be → tag négatif : aren't you?");
G("tags","She isn't Irish, ___?","is she","isn't she|does she|is it","Phrase négative → tag affirmatif.");
G("tags","He can swim, ___?","can't he","can he|doesn't he|isn't he","can → can't he?");
G("tags","They didn't come, ___?","did they","didn't they|do they|were they","didn't → did they?");
G("tags","You live in Sydney, ___?","don't you","aren't you|do you|doesn't you","Présent simple affirmatif → don't you?");
G("tags","She went home, ___?","didn't she","did she|wasn't she|doesn't she","Prétérit affirmatif → didn't she?");
G("tags","I'm right, ___?","aren't I","am not I|isn't I|don't I","Forme spéciale : aren't I?");
G("tags","Your sister likes tea, ___?","doesn't she","don't she|doesn't your sister|isn't she","Le tag reprend un pronom : doesn't she?");
G("tags","It was a great match, ___?","wasn't it","was it|didn't it|isn't it","was → wasn't it?");
G("tags","You haven't been to India, ___?","have you","haven't you|did you|do you","haven't → have you?");
G("tags","They will win, ___?","won't they","will they|don't they|aren't they","will → won't they?");
G("tags","Que veut dire « an official language » ?","une langue officielle","un langage de bureau|un accent|une langue morte","official = officiel.");
G("tags","Quelle est la capitale du Canada ?","Ottawa","Toronto|Montreal|Vancouver","Ottawa est la capitale ; Toronto est la plus grande ville.");
G("tags","Combien de pays compte le Commonwealth ?","56","12|100|5","Le Commonwealth réunit 56 pays.");

G("quantifiers","How ___ money do you need?","much","many|few|lot","money est indénombrable → much.");
G("quantifiers","There aren't ___ people here.","many","much|little|a little","people (pluriel) → many.");
G("quantifiers","I've got ___ friends in London: three or four.","a few","a little|much|few of","a few + pluriel = quelques.");
G("quantifiers","Can I have ___ milk in my tea?","a little","a few|many|few","a little + indénombrable = un peu de.");
G("quantifiers","He's ___ young to vote.","too","enough|too much|very much","too + adjectif = trop.");
G("quantifiers","She isn't old ___ to drive.","enough","too|much|many","adjectif + enough : assez.");
G("quantifiers","There's ___ sugar in this cake. It's horrible!","too much","too many|enough of|a few","sugar (indénombrable) → too much.");
G("quantifiers","There are ___ cars in the city centre.","too many","too much|enough of|a little","cars (pluriel) → too many.");
G("quantifiers","Do we have ___ chairs for everyone?","enough","too|much|a little","enough + nom.");
G("quantifiers","« She has few friends » veut dire :","Elle a peu d'amis.","Elle a quelques amis.|Elle a beaucoup d'amis.|Elle a trop d'amis.","few = peu (sens négatif) ; a few = quelques.");
G("quantifiers","Que veut dire « a role model » ?","un modèle (une personne qui inspire)","un mannequin|un jeu de rôle|un rôle au cinéma","role model = personne qu'on prend en exemple.");
G("quantifiers","Malala Yousafzai a reçu le prix Nobel de la paix. Pour quoi se bat-elle ?","girls' education","animal rights|space travel|car racing","Malala se bat pour l'éducation des filles.");

G("phrasal","Never ___ up! You can do it!","give","get|look|take","give up = abandonner.");
G("phrasal","Can you ___ after my dog this weekend?","look","give|take|turn","look after = s'occuper de.");
G("phrasal","I'm ___ for my keys. Have you seen them?","looking","giving|turning|taking","look for = chercher.");
G("phrasal","Please ___ off your phones during the film.","turn","give|look|carry","turn off = éteindre.");
G("phrasal","It's cold. ___ on your coat!","Put","Give|Look|Turn up","put on = mettre (un vêtement).");
G("phrasal","The plane will take ___ in five minutes.","off","on|up|out","take off = décoller.");
G("phrasal","I want to find ___ the truth.","out","up|on|off","find out = découvrir (une information).");
G("phrasal","She works ___ at the gym three times a week.","out","off|up|on","work out = faire du sport, s'entraîner.");
G("phrasal","Don't stop! Carry ___!","on","off|up|out","carry on = continuer.");
G("phrasal","Que veut dire « to give up » ?","abandonner","donner|se lever|rendre","give up = abandonner, arrêter.");
G("phrasal","Que veut dire « to get up » ?","se lever","monter|grandir|se réveiller","get up = se lever ; wake up = se réveiller.");
G("phrasal","Que veut dire « to beat » (en sport) ?","battre un adversaire","marquer un but|perdre|faire match nul","On beats un adversaire, on wins un match.");
G("phrasal","Comment dit-on « Nous avons battu Leeds 2 à 1 » ?","We beat Leeds 2–1.","We won Leeds 2–1.|We beated Leeds 2–1.|We have won Leeds 2–1.","beat (beat, beaten) + adversaire.");

G("comparison","This phone is ___ expensive than that one: it's cheaper.","less","more|least|fewer","less + adjectif + than = moins … que.");
G("comparison","Second-hand clothes are ___ than new ones.","cheaper","more cheap|cheapest|more cheaper","cheap → cheaper.");
G("comparison","This jacket isn't as nice ___ the blue one.","as","than|that|like","not as … as = pas aussi … que.");
G("comparison","It's ___ shop in town.","the cheapest","the cheaper|the most cheap|cheapest of","Superlatif : the cheapest.");
G("comparison","Prices are getting ___.","higher and higher","more and more high|highest and highest|high and higher","de plus en plus : comparatif + and + comparatif.");
G("comparison","The ___ you buy, the more you spend.","more","most|much|many","The more…, the more… = plus…, plus…");
G("comparison","I can't afford it. It's ___ expensive.","too","enough|so much|very much","too = trop (ce n'est pas possible).");
G("comparison","Comment dit-on « C'est le magasin le moins cher » ?","It's the least expensive shop.","It's the less expensive shop of all.|It's the most cheap shop.|It's the expensivest shop.","le moins … = the least …");
G("comparison","Que veut dire « a bargain » ?","une bonne affaire","un marchand|une dispute|un sac","bargain = bonne affaire.");
G("comparison","Que veut dire « second-hand » ?","d'occasion","de seconde zone|à deux mains|tout neuf","second-hand = d'occasion.");
G("comparison","Que veut dire « to afford » ?","avoir les moyens de payer","offrir un cadeau|économiser|dépenser","I can't afford it = je n'en ai pas les moyens.");
S("comparison","Donne le comparatif de « good ».",["better","better than"],"good → better → the best.");

G("gerund","I enjoy ___ to new countries.","travelling","to travel|travel|travelled","enjoy + -ing.");
G("gerund","We decided ___ the train.","to take","taking|take|took","decide + to + base.");
G("gerund","She wants ___ a pilot.","to become","becoming|become|became","want + to.");
G("gerund","He avoids ___ the lift.","using","to use|use|used","avoid + -ing.");
G("gerund","I'm interested in ___ Spanish.","learning","learn|to learn|learned","Après une préposition (in) → -ing.");
G("gerund","Have you finished ___ your suitcase?","packing","to pack|pack|packed","finish + -ing.");
G("gerund","I'd like ___ to Canada one day.","to go","going|go|gone","would like + to.");
G("gerund","They hope ___ the match.","to win","winning|win|won","hope + to.");
G("gerund","Que veut dire « He stopped smoking » ?","Il a arrêté de fumer.","Il s'est arrêté pour fumer.|Il fume encore.|Il a commencé à fumer.","stop + -ing = arrêter de faire.");
G("gerund","Que veut dire « a delay » ?","un retard","une escale|un départ|une annulation","delay = retard.");
G("gerund","Que veut dire « to land » ?","atterrir","décoller|embarquer|louer","land = atterrir ; take off = décoller.");
G("gerund","« I'd like to go » veut dire :","Je voudrais y aller.","J'aime y aller.|J'y vais souvent.|J'y suis allé.","I'd like = je voudrais ; I like = j'aime.");
G("gerund","Quel mot est indénombrable (pas de « a », pas de -s) ?","luggage","suitcase|bag|ticket","luggage = les bagages : a piece of luggage.");

G("usedto","When I was a child, I ___ eat a lot of sweets.","used to","use to|was used to|am used to","Habitude passée → used to + base.");
G("usedto","I didn't ___ like vegetables.","use to","used to|using to|uses to","Après didn't : use to (sans d).");
G("usedto","___ you use to live in London?","Did","Do|Were|Have","Question : Did you use to…?");
G("usedto","There ___ be a bakery here, but it closed.","used to","use to|was used|is used to","There used to be = avant, il y avait.");
G("usedto","Comment dit-on « Avant, je jouais au rugby » ?","I used to play rugby.","I use to play rugby.|I was used to play rugby.|I used to playing rugby.","used to + base.");
G("usedto","« I'm used to getting up early » veut dire :","J'ai l'habitude de me lever tôt.","Avant, je me levais tôt.|Je me lèverai tôt.|Je me lève tôt aujourd'hui seulement.","be used to + -ing = être habitué à.");
G("usedto","My grandparents ___ have a TV when they were young.","didn't use to","didn't used to|used not have|don't use to","Négation : didn't use to + base.");
G("usedto","Que veut dire « junk food » ?","la malbouffe","la nourriture bio|les restes|la nourriture de fête","junk food = malbouffe.");
G("usedto","Que veut dire « to cut down on sugar » ?","manger moins de sucre","couper du sucre|arrêter complètement le sucre|acheter du sucre","cut down on = réduire.");
G("usedto","People ___ cook every day; now many buy ready meals.","used to","are used to|use to|were using to","Habitude révolue → used to.");
S("usedto","Complète : « My dad ___ (smoke), but he gave up. »",["used to smoke"],"Habitude passée qui n'existe plus : used to + base.");

G("presents","She ___ every evening before an exam.","revises","revise|revising|is revise","every evening → présent simple.");
G("presents","Be quiet! I ___ for my exam.","'m revising","revise|revised|have revise","En ce moment → présent continu.");
G("presents","I ___ English for four years.","have studied","study|am studying|studied since","Depuis (for) → present perfect.");
G("presents","He ___ his GCSEs next month. It's all organised.","is taking","takes every day|took|has took","Projet organisé → présent continu.");
G("presents","I ___ the answer. It's easy!","know","am knowing|knowing|knows","know ne se met pas en -ing.");
G("presents","Que veut dire « to pass an exam » ?","réussir un examen","passer un examen|rater un examen|réviser un examen","Faux-ami : pass = réussir ; passer un examen = take/sit an exam.");
G("presents","Que veut dire « a mark » ?","une note","une marque de vêtements|un marqueur|un bulletin","a mark = une note.");
G("presents","Que sont les GCSEs ?","les examens britanniques à 16 ans","le baccalauréat britannique|une école privée|un diplôme universitaire","GCSE : examens de fin de collège (16 ans) ; A levels vers 18 ans.");
G("presents","Have you ever ___ an exam?","failed","fail|failing|fails","Present perfect : have + participe passé.");
G("presents","My brother ___ at a boarding school.","is","are|have|do","my brother = he → is.");

/* Verbes irréguliers : base, prétérit, participe passé, sens */
const IRREG3=[["be","was / were","been","être"],["have","had","had","avoir"],["do","did","done","faire"],["go","went","gone","aller"],["come","came","come","venir"],["see","saw","seen","voir"],["eat","ate","eaten","manger"],["drink","drank","drunk","boire"],["make","made","made","fabriquer, faire"],["take","took","taken","prendre"],["get","got","got","obtenir, devenir"],["give","gave","given","donner"],["buy","bought","bought","acheter"],["say","said","said","dire"],["write","wrote","written","écrire"],["read","read","read","lire"],["run","ran","run","courir"],["swim","swam","swum","nager"],["sleep","slept","slept","dormir"],["sit","sat","sat","s'asseoir"],["think","thought","thought","penser"],["know","knew","known","savoir, connaître"],["find","found","found","trouver"],["meet","met","met","rencontrer"],["leave","left","left","partir, quitter"],["begin","began","begun","commencer"],["break","broke","broken","casser"],["bring","brought","brought","apporter"],["build","built","built","construire"],["catch","caught","caught","attraper"],["choose","chose","chosen","choisir"],["cost","cost","cost","coûter"],["cut","cut","cut","couper"],["draw","drew","drawn","dessiner"],["drive","drove","driven","conduire"],["fall","fell","fallen","tomber"],["feel","felt","felt","ressentir"],["fly","flew","flown","voler (dans les airs)"],["forget","forgot","forgotten","oublier"],["hear","heard","heard","entendre"],["lose","lost","lost","perdre"],["pay","paid","paid","payer"],["put","put","put","mettre"],["ride","rode","ridden","monter (à vélo, à cheval)"],["sell","sold","sold","vendre"],["send","sent","sent","envoyer"],["sing","sang","sung","chanter"],["speak","spoke","spoken","parler"],["spend","spent","spent","dépenser, passer (du temps)"],["teach","taught","taught","enseigner"],["tell","told","told","raconter, dire"],["understand","understood","understood","comprendre"],["wear","wore","worn","porter (un vêtement)"],["win","won","won","gagner"],["stand","stood","stood","être debout"],["become","became","become","devenir"],["keep","kept","kept","garder"],["grow","grew","grown","grandir, faire pousser"],["throw","threw","thrown","lancer"],["steal","stole","stolen","voler (dérober)"],["hide","hid","hidden","cacher"],["wake","woke","woken","se réveiller"],["lend","lent","lent","prêter"],["shut","shut","shut","fermer"],["hit","hit","hit","frapper"],["mean","meant","meant","signifier"],["lead","led","led","mener"],["beat","beat","beaten","battre"],["ring","rang","rung","sonner"],["show","showed","shown","montrer"]];
const PCONT=[["I","was"],["She","was"],["My brother","was"],["We","were"],["They","were"],["You","were"],["The children","were"],["Tom","was"]];
const ACTIONS=[["watch","watching","TV"],["play","playing","video games"],["read","reading","a comic"],["cook","cooking","dinner"],["sleep","sleeping","on the sofa"],["walk","walking","in the park"],["do","doing","homework"],["listen","listening","to music"],["swim","swimming","in the sea"],["wait","waiting","for the bus"],["ride","riding","a bike"],["write","writing","an email"]];
const DUREES=["two years","ten minutes","a long time","three weeks","ages","six months","an hour","five days"];
const POINTS=["2019","Monday","last summer","9 o'clock","I was born","Christmas","yesterday","the beginning of the year","2010","this morning"];
const TAGS=[["You're tired","aren't you","are you"],["She can drive","can't she","can she"],["They live in Dublin","don't they","do they"],["He doesn't eat meat","does he","doesn't he"],["We were late","weren't we","were we"],["You didn't call me","did you","didn't you"],["It's cold today","isn't it","is it"],["Your parents work in London","don't they","do they"],["She has finished","hasn't she","has she"],["They won't come","will they","won't they"],["He was born in India","wasn't he","was he"],["You've seen this film","haven't you","have you"],["Emma likes reggae","doesn't she","does she"],["It isn't far","is it","isn't it"],["You can't swim","can you","can't you"],["They went to Australia","didn't they","did they"],["We should go","shouldn't we","should we"],["It will rain","won't it","will it"]];
const TAGS_FAUX=["isn't he","don't you","doesn't it","aren't they","didn't she","won't we"];
const ADJ=[["cheap","cheaper","the cheapest"],["expensive","more expensive","the most expensive"],["big","bigger","the biggest"],["hot","hotter","the hottest"],["easy","easier","the easiest"],["heavy","heavier","the heaviest"],["useful","more useful","the most useful"],["modern","more modern","the most modern"],["comfortable","more comfortable","the most comfortable"],["good","better","the best"],["bad","worse","the worst"],["far","further","the furthest"],["fast","faster","the fastest"],["popular","more popular","the most popular"],["thin","thinner","the thinnest"],["healthy","healthier","the healthiest"]];
/* Passif : [sujet actif, verbe, complément (devient sujet), participe passé, complément au pluriel ?] */
const PASSIF_PR=[["Millions of tourists","visit","London","visited",0],["People","speak","English","spoken",0],["Volunteers","run","this shop","run",0],["Bees","make","honey","made",0],["The teacher","corrects","our tests","corrected",1],["Farmers","grow","rice","grown",0],["Children","love","this book","loved",0],["The government","builds","new schools","built",1]];
const PASSIF_PA=[["Shakespeare","wrote","Romeo and Juliet","written",0],["Leonardo da Vinci","painted","the Mona Lisa","painted",0],["Alexander Fleming","discovered","penicillin","discovered",0],["J. K. Rowling","wrote","the Harry Potter books","written",1],["Tim Berners-Lee","invented","the World Wide Web","invented",0],["Marie Curie","discovered","radium","discovered",0],["Charles Dickens","wrote","Oliver Twist","written",0],["The Romans","built","these roads","built",1],["Steven Spielberg","directed","Jaws","directed",0],["My grandfather","took","these photos","taken",1]];

const GG={
  pastsimple(){const v=pioche(IRREG3.filter(x=>x[0]!=="be"));return alea(0,1)?saisie(`Donne le prétérit de « ${v[0]} » (${v[3]}).`,[v[1]],`${v[0]} → ${v[1]} → ${v[2]}.`)
    :qcm(`« ${v[1]} » est le prétérit de quel verbe ?`,v[0],melange(IRREG3.filter(x=>x[1]!==v[1])).slice(0,3).map(x=>x[0]),`${v[0]} (${v[3]}) → ${v[1]}.`);},
  pp_ever(){const v=pioche(IRREG3);if(alea(0,1))return saisie(`Donne le participe passé de « ${v[0]} » (${v[3]}).`,[v[2]],`${v[0]} → ${v[1]} → ${v[2]}. On l'utilise avec have/has (present perfect) et au passif.`);
    const f=[v[1],v[0]+"ed",v[2]+"ed"].filter(x=>x!==v[2]);return qcm(`Quel est le participe passé de « ${v[0]} » ?`,v[2],f,`${v[0]} → ${v[1]} → ${v[2]}.`);},
  pastcont(){const s=pioche(PCONT),a=pioche(ACTIONS),h=pioche(["at 8 pm","when the phone rang","at midnight","when I arrived","at that moment"]);
    return saisie(`Mets « ${a[0]} » au prétérit continu : ${s[0]} ___ ${a[2]} ${h}.`,[`${s[1]} ${a[1]}`,`${s[0]} ${s[1]} ${a[1]}`],`${s[0]} → ${s[1]} + ${a[1]} : une action en cours dans le passé.`);},
  forsince(){const d=alea(0,1),x=d?pioche(DUREES):pioche(POINTS),bon=d?"for":"since";
    return qcm(`Complète : I've been here ___ ${x}.`,bon,[d?"since":"for","ago","during"],d?`« ${x} » est une durée → for.`:`« ${x} » est un point de départ → since.`);},
  tags(){const t=pioche(TAGS),f=melange(TAGS_FAUX.filter(x=>x!==t[1]&&x!==t[2])).slice(0,2);
    return qcm(`Complète : ${t[0]}, ___?`,t[1],[t[2],...f],`On reprend l'auxiliaire et le pronom sujet, en inversant : phrase ${t[1].includes("n't")?"affirmative → tag négatif":"négative → tag affirmatif"}.`);},
  comparison(){const a=pioche(ADJ),k=alea(1,3);
    if(k===1)return saisie(`Donne le comparatif de « ${a[0]} » (plus … que).`,[a[1],a[1]+" than"],`${a[0]} → ${a[1]} than.`);
    if(k===2)return saisie(`Donne le superlatif de « ${a[0]} » (le plus …).`,[a[2],a[2].replace(/^the /,"")],`${a[0]} → ${a[2]}.`);
    return qcm(`Comment dit-on « moins ${({cheap:"bon marché",expensive:"cher",big:"grand",hot:"chaud",easy:"facile",heavy:"lourd",useful:"utile",modern:"moderne",comfortable:"confortable",good:"bon",bad:"mauvais",far:"loin",fast:"rapide",popular:"populaire",thin:"mince",healthy:"sain"})[a[0]]} que » ?`,`less ${a[0]} than`,[`least ${a[0]} than`,`less ${a[1]} than`,`more ${a[0]} as`],`moins … que = less + adjectif + than (ou not as … as).`);},
  passive1(){return GG._passif(PASSIF_PR,"pr");},
  passive2(){return GG._passif(PASSIF_PA,"pa");},
  _passif(liste,t){const [s0,v,o,pp,pl]=pioche(liste),s=/^(The|My|Millions|People|Volunteers|Bees|Children|Farmers)/.test(s0)?s0[0].toLowerCase()+s0.slice(1):s0,O=maj(o),be=t==="pa"?(pl?"were":"was"):(pl?"are":"is"),be2=t==="pa"?(pl?"are":"is"):(pl?"were":"was");
    return qcm(`Mets au passif : « ${s0} ${v} ${o}. »`,`${O} ${be} ${pp} by ${s}.`,[`${O} ${v} by ${s}.`,`${O} ${be2} ${pp} by ${s}.`,`${O} ${be} ${v.replace(/s$/,"")} by ${s}.`],`Le complément « ${o} » devient sujet ; be au ${t==="pa"?"prétérit":"présent"} (${be}) + participe passé (${pp}) ; l'ancien sujet devient « by … ».`);}
};
const ALIAS_G={revpresent:["presents","pp_ever","forsince","ppvspast"],revpast:["pastsimple","pastcont","whenwhile","usedto","ppvspast"],revfuture:["will","futures","cond1","cond2","maymight"],revmodals:["should","haveto","could","maymight"],revpassive:["passive1","passive2","reported","relatives"]};
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

L("pasttell","Last summer, we flew to Edinburgh and spent a week in the Highlands. It rained every day, but the landscapes were amazing.","Comment étaient les paysages ?","magnifiques","décevants|gris et tristes|on ne les voyait pas","« the landscapes were amazing ».");
L("pasttell","We missed our train, so we had to wait two hours at the station.","Pourquoi ont-ils attendu deux heures ?","Ils ont raté leur train.","Le train était en retard.|La gare était fermée.|Ils sont arrivés trop tôt.","« We missed our train ».");
L("pasttell","I didn't enjoy the flight because I felt sick.","Pourquoi n'a-t-il pas aimé le vol ?","Il avait mal au cœur.","Il avait peur.|Le vol était trop long.|Il n'avait pas de place.","« I felt sick » = j'avais mal au cœur.");
L("pasttell","We rented a small flat near the beach and cycled everywhere.","Comment se déplaçaient-ils ?","à vélo","en voiture|à pied|en bus","« cycled everywhere ».");
L("pasttell","On the last day, my brother lost his passport. Luckily, a woman found it in the café.","Où a-t-on retrouvé le passeport ?","dans le café","à l'hôtel|à l'aéroport|dans la rue","« found it in the café ».");
L("pasttell","We got lost in Venice, but it was the best part of the trip!","Quel a été le meilleur moment ?","se perdre à Venise","visiter un musée|le voyage en avion|la plage","« We got lost in Venice, but it was the best part ».");

L("pastcont","At ten o'clock last night, I was reading in bed.","Que faisait-il à 22 h hier soir ?","Il lisait au lit.","Il dormait.|Il regardait la télé.|Il faisait ses devoirs.","« I was reading in bed ».");
L("pastcont","When I was a child, we lived in a small village and I walked to school every day.","Comment allait-il à l'école ?","à pied","en bus|à vélo|en voiture","« I walked to school every day ».");
L("pastcont","My grandmother was cooking when I arrived, and the whole house smelled of cake.","Que faisait la grand-mère ?","Elle cuisinait.","Elle dormait.|Elle jardinait.|Elle regardait la télé.","« was cooking ».");
L("pastcont","The children were playing in the garden while their parents were having lunch.","Que faisaient les parents ?","Ils déjeunaient.","Ils jouaient.|Ils jardinaient.|Ils dormaient.","« were having lunch ».");
L("pastcont","I remember my first teddy bear. His name was Mr Brown.","Comment s'appelait l'ours en peluche ?","Mr Brown","Mr Bear|Teddy|Mr Green","« His name was Mr Brown ».");

L("stories","A thief stole a woman's bag while she was waiting for the bus.","Que faisait la femme ?","Elle attendait le bus.","Elle faisait les courses.|Elle courait.|Elle téléphonait.","« while she was waiting for the bus ».");
L("stories","Firefighters rescued a cat from a tree yesterday afternoon.","Qui a été secouru ?","un chat","un enfant|un chien|un oiseau","« rescued a cat ».");
L("stories","Two cars crashed on the motorway this morning. Luckily, nobody was injured.","Y a-t-il eu des blessés ?","non","oui, deux|oui, un|on ne sait pas","« nobody was injured ».");
L("stories","The police arrested two men who were trying to steal a car.","Que tentaient de faire les deux hommes ?","voler une voiture","cambrioler une maison|vendre une voiture|réparer une voiture","« trying to steal a car ».");
L("stories","A fire broke out in a restaurant last night. Fifty people escaped safely.","Combien de personnes se sont échappées ?","cinquante","quinze|cinq|cinq cents","fifty = 50.");
L("stories","A witness saw the burglar running away with a laptop.","Qu'avait le cambrioleur ?","un ordinateur portable","un téléphone|un sac|une télévision","laptop = ordinateur portable.");

L("pp","I've never been to the USA, but I'd love to go.","Est-il déjà allé aux États-Unis ?","non, jamais","oui, une fois|oui, souvent|il y va demain","« I've never been to the USA ».");
L("pp","Have you ever tried Indian food? — Yes, I have. It's delicious!","A-t-elle déjà goûté la cuisine indienne ?","oui","non|elle ne sait pas|elle ne veut pas","« Yes, I have ».");
L("pp","My dad has climbed Ben Nevis three times.","Combien de fois le père a-t-il escaladé le Ben Nevis ?","trois fois","une fois|deux fois|jamais","« three times ».");
L("pp","She has met a lot of famous people because her mum is a journalist.","Pourquoi a-t-elle rencontré beaucoup de célébrités ?","Sa mère est journaliste.","Elle est actrice.|Son père est chanteur.|Elle travaille à la télévision.","« her mum is a journalist ».");
L("pp","We've won the school competition!","Que s'est-il passé ?","Ils ont gagné le concours de l'école.","Ils ont perdu le concours.|Ils vont participer au concours.|Ils ont organisé un concours.","« We've won » = nous avons gagné.");

L("ppvspast","Have you finished your homework yet? — Not yet!","A-t-il fini ses devoirs ?","pas encore","oui, déjà|oui, hier|il ne les fera pas","« Not yet » = pas encore.");
L("ppvspast","I've just seen the news: there's been an earthquake in Japan.","Qu'apprend-on ?","Il y a eu un tremblement de terre au Japon.","Il y a eu une inondation au Japon.|Il y aura un tremblement de terre.|Il y a eu une tempête en Chine.","earthquake = tremblement de terre.");
L("ppvspast","The teachers are on strike today, so there's no school.","Pourquoi n'y a-t-il pas école ?","Les professeurs sont en grève.","C'est un jour férié.|Il neige.|L'école est fermée pour travaux.","on strike = en grève.");
L("ppvspast","I bought these trainers last week, and I've already worn them ten times.","Combien de fois les a-t-il portées ?","dix fois","deux fois|une fois|jamais","« ten times ».");
L("ppvspast","She's already left. She left ten minutes ago.","Quand est-elle partie ?","il y a dix minutes","dans dix minutes|il y a deux heures|elle n'est pas partie","« ten minutes ago ».");

L("environment","If we don't reduce greenhouse gases, global temperatures will keep rising.","Que se passera-t-il si on ne réduit pas les gaz à effet de serre ?","Les températures continueront de monter.","Les températures baisseront.|Il y aura plus de neige.|Rien ne changera.","« temperatures will keep rising ».");
L("environment","Our town has installed solar panels on every school roof.","Qu'a installé la ville ?","des panneaux solaires sur les écoles","des éoliennes|des poubelles de tri|des pistes cyclables","solar panels = panneaux solaires.");
L("environment","Every minute, the equivalent of a truck of plastic ends up in the ocean.","Que dit-on du plastique ?","Chaque minute, l'équivalent d'un camion de plastique finit dans l'océan.","Chaque minute, un camion de plastique est recyclé.|Les océans sont propres.|Le plastique disparaît en une minute.","« ends up in the ocean ».");
L("environment","Turn off the tap while you brush your teeth: you'll save up to twelve litres of water.","Combien de litres peut-on économiser ?","jusqu'à 12 litres","jusqu'à 2 litres|jusqu'à 20 litres|jusqu'à 120 litres","« up to twelve litres ».");
L("environment","Many species are endangered because their habitat is disappearing.","Pourquoi beaucoup d'espèces sont-elles menacées ?","Leur habitat disparaît.","Elles mangent trop.|Il fait trop froid.|Elles sont trop nombreuses.","« their habitat is disappearing ».");
L("environment","The drought has lasted three months, and farmers are very worried.","Qui est inquiet ?","les agriculteurs","les touristes|les pêcheurs|les enfants","farmers = agriculteurs.");

L("plans","I'm meeting Jack at the cinema at seven. Do you want to come?","Où a-t-il rendez-vous ?","au cinéma","au café|au stade|chez Jack","« at the cinema ».");
L("plans","Sorry, I can't come on Saturday. I'm visiting my grandparents.","Pourquoi ne peut-elle pas venir ?","Elle rend visite à ses grands-parents.","Elle est malade.|Elle travaille.|Elle part en vacances.","« I'm visiting my grandparents ».");
L("plans","The concert has been put off until next month.","Qu'est-il arrivé au concert ?","Il a été repoussé.","Il a été annulé.|Il a commencé.|Il est complet.","put off = repousser.");
L("plans","I've got a dentist appointment on Tuesday at half past four.","Quand est le rendez-vous chez le dentiste ?","mardi à 16 h 30","jeudi à 16 h 30|mardi à 14 h 30|mardi à 15 h 40","« Tuesday at half past four ».");
L("plans","We're having a sleepover at Lucy's house on Friday.","Que vont-ils faire vendredi ?","une soirée pyjama chez Lucy","un pique-nique|une fête au collège|un match","sleepover = soirée pyjama.");
L("plans","I'm really looking forward to the holidays!","Que ressent-il ?","Il a hâte d'être en vacances.","Il redoute les vacances.|Il est déjà en vacances.|Il n'aime pas les vacances.","look forward to = avoir hâte de.");

L("jobs","I'm an architect. I design houses and schools.","Que fait cette personne ?","Elle conçoit des maisons et des écoles.","Elle construit des routes.|Elle enseigne dans une école.|Elle vend des maisons.","architect = architecte ; design = concevoir.");
L("jobs","For my work experience, I spent a week at a vet's.","Où a-t-il fait son stage ?","chez un vétérinaire","dans un hôpital|dans une école|dans une banque","« at a vet's » = chez un vétérinaire.");
L("jobs","She applied for the job last week and she's got an interview tomorrow.","Que se passe-t-il demain ?","Elle a un entretien.","Elle commence le travail.|Elle postule.|Elle démissionne.","interview = entretien.");
L("jobs","A plumber earns about thirty thousand pounds a year in Britain.","Combien gagne un plombier par an ?","environ 30 000 livres","environ 13 000 livres|environ 3 000 livres|environ 300 000 livres","« thirty thousand pounds ».");
L("jobs","If you like computers, you could become a programmer.","Quel métier est proposé ?","programmeur","ingénieur du son|vendeur d'ordinateurs|électricien","programmer = programmeur.");
L("jobs","My mum is a surgeon. She works long hours at the hospital.","Quel est le métier de la mère ?","chirurgienne","infirmière|pharmacienne|dentiste","surgeon = chirurgien.");

L("health","I sprained my ankle playing basketball.","Que lui est-il arrivé ?","Il s'est foulé la cheville.","Il s'est cassé le bras.|Il s'est coupé la main.|Il a mal à la tête.","sprain = se fouler ; ankle = cheville.");
L("health","You should drink more water and sleep at least eight hours.","Combien d'heures faut-il dormir au moins ?","8 heures","6 heures|10 heures|7 heures","« at least eight hours ».");
L("health","Take two pills a day after meals.","Quand faut-il prendre les comprimés ?","après les repas","avant les repas|le soir seulement|le matin à jeun","« after meals ».");
L("health","I feel dizzy. I think I need to sit down.","Que ressent-elle ?","Elle a la tête qui tourne.","Elle a faim.|Elle a froid.|Elle a mal au dos.","dizzy = la tête qui tourne.");
L("health","He's allergic to peanuts, so he must be careful.","À quoi est-il allergique ?","aux cacahuètes","aux noix de coco|au lait|aux chats","peanuts = cacahuètes.");
L("health","The doctor gave me a prescription for some medicine.","Qu'a donné le médecin ?","une ordonnance","un rendez-vous|un vaccin|un certificat de sport","prescription = ordonnance.");

L("rules","You don't have to wear a tie on Fridays.","Que dit la règle pour le vendredi ?","La cravate n'est pas obligatoire.","La cravate est interdite.|La cravate est obligatoire.|Il faut une cravate rouge.","don't have to = pas obligé.");
L("rules","Students mustn't use their phones in class. If they do, they'll get a detention.","Que risquent les élèves ?","une retenue","une amende|une exclusion définitive|rien","detention = retenue.");
L("rules","At the swimming pool, you have to wear a swimming cap.","Que faut-il porter à la piscine ?","un bonnet de bain","des lunettes|des sandales|un tee-shirt","swimming cap = bonnet de bain.");
L("rules","In the UK, you have to be seventeen to drive a car.","À quel âge peut-on conduire au Royaume-Uni ?","17 ans","16 ans|18 ans|21 ans","« seventeen ».");
L("rules","Dogs are not allowed in the park.","Quelle est la règle ?","Les chiens sont interdits dans le parc.","Les chiens doivent être tenus en laisse.|Les chiens sont autorisés.|Le parc est réservé aux chiens.","not allowed = interdit.");
L("rules","When I was at primary school, we had to stand up when the teacher came in.","Que devaient faire les élèves ?","se lever quand le professeur entrait","se taire en permanence|porter un uniforme|lever la main","« we had to stand up ».");

L("london","The Houses of Parliament are next to the river Thames.","Où se trouve le Parlement ?","au bord de la Tamise","près de Buckingham Palace|dans la City|à Greenwich","« next to the river Thames ».");
L("london","You can see the Crown Jewels at the Tower of London.","Que peut-on voir à la tour de Londres ?","les joyaux de la Couronne","des dinosaures|des tableaux célèbres|le roi","Crown Jewels = joyaux de la Couronne.");
L("london","The London Eye is a giant wheel. A ride takes about thirty minutes.","Combien de temps dure un tour ?","environ 30 minutes","environ 13 minutes|environ 3 minutes|environ une heure","« about thirty minutes ».");
L("london","Big Ben isn't the name of the tower: it's the name of the bell.","Que désigne « Big Ben » ?","la cloche","la tour|l'horloge|le pont","« it's the name of the bell ».");
L("london","Most museums in London are free, like the British Museum.","Combien coûte l'entrée de la plupart des musées ?","Elle est gratuite.","Dix livres.|Elle est très chère.|Elle est réservée aux étudiants.","« free » = gratuit.");
L("london","Mind the gap!","Que signifie cette annonce du métro ?","Attention à l'espace entre le train et le quai.","Attention, portes qui se ferment.|Le train est en retard.|Tenez-vous à droite.","mind = faire attention ; gap = espace, trou.");

L("newyork","Manhattan is an island. It's one of the five boroughs of New York.","Qu'est-ce que Manhattan ?","une île, l'un des cinq arrondissements","une ville à côté de New York|un parc|un pont","« an island … one of the five boroughs ».");
L("newyork","Between 1892 and 1954, about twelve million immigrants arrived at Ellis Island.","Combien d'immigrants sont passés par Ellis Island ?","environ 12 millions","environ 2 millions|environ 20 millions|environ 120 000","« about twelve million ».");
L("newyork","Central Park is bigger than the principality of Monaco.","Que dit-on de Central Park ?","Il est plus grand que Monaco.","Il est plus petit que Monaco.|Il est aussi grand que Paris.|Il est fermé l'hiver.","« bigger than … Monaco ».");
L("newyork","In New York, people say subway, not underground.","Comment dit-on « métro » à New York ?","subway","underground|tube|metro station","Mot américain : subway.");
L("newyork","The Empire State Building was the tallest building in the world for almost forty years.","Pendant combien de temps a-t-il été le plus haut du monde ?","presque 40 ans","presque 14 ans|presque 4 ans|presque 100 ans","« almost forty years » (de 1931 à 1970).");
L("newyork","Times Square is famous for its giant screens and its New Year's Eve party.","Pour quoi Times Square est-il célèbre ?","ses écrans géants et sa fête du Nouvel An","sa statue|ses musées|son marché aux puces","giant screens ; New Year's Eve.");

L("inventions","The first telephone call was made by Alexander Graham Bell in 1876.","En quelle année a eu lieu le premier appel ?","1876","1867|1786|1976","eighteen seventy-six = 1876.");
L("inventions","Penicillin was discovered by accident in 1928.","Comment la pénicilline a-t-elle été découverte ?","par hasard","après des années de recherche|par une équipe française|grâce à un ordinateur","« by accident » = par hasard.");
L("inventions","The World Wide Web was invented by a British scientist, Tim Berners-Lee.","De quelle nationalité est Tim Berners-Lee ?","britannique","américaine|française|canadienne","« a British scientist ».");
L("inventions","Light bulbs were improved by Thomas Edison, but he didn't invent electricity.","Que dit-on d'Edison ?","Il a amélioré l'ampoule.","Il a inventé l'électricité.|Il a inventé le téléphone.|Il a découvert la pénicilline.","« improved by Thomas Edison ».");
L("inventions","The first vaccine was developed by Edward Jenner in 1796.","Qu'a mis au point Edward Jenner ?","le premier vaccin","le premier ordinateur|le premier avion|le premier téléphone","« the first vaccine ».");
L("inventions","Thanks to the steam engine, trains could travel much faster.","Grâce à quoi les trains ont-ils pu aller plus vite ?","la machine à vapeur","l'électricité|le pétrole|le vent","steam engine = machine à vapeur.");

L("media","Before you share an article, check the source.","Que faut-il faire avant de partager un article ?","vérifier la source","le lire à voix haute|le traduire|l'imprimer","« check the source ».");
L("media","This video has gone viral: it has been viewed ten million times.","Combien de fois la vidéo a-t-elle été vue ?","dix millions de fois","dix mille fois|cent mille fois|un million de fois","« ten million times ».");
L("media","The BBC is a British public broadcaster. It was created in 1922.","Quand la BBC a-t-elle été créée ?","en 1922","en 1952|en 1902|en 1992","nineteen twenty-two = 1922.");
L("media","Most teenagers get their news from social media, not from newspapers.","D'où viennent les informations de la plupart des ados ?","des réseaux sociaux","des journaux|de la radio|de leurs parents","« from social media ».");
L("media","An influencer is paid to show products to his followers.","Pourquoi l'influenceur est-il payé ?","pour montrer des produits à ses abonnés","pour écrire des articles|pour vérifier les infos|pour présenter le journal télévisé","« paid to show products ».");
L("media","This newspaper is biased: it only gives one point of view.","Que reproche-t-on au journal ?","Il est partial.","Il est trop cher.|Il est trop long.|Il est ennuyeux.","biased = partial.");

L("feelings","I fell out with my best friend, but we made up the next day.","Que s'est-il passé le lendemain ?","Ils se sont réconciliés.","Ils se sont encore disputés.|Ils ne se parlent plus.|Ils sont partis en vacances.","make up = se réconcilier.");
L("feelings","If I were you, I'd tell your parents the truth.","Quel conseil donne-t-elle ?","dire la vérité aux parents","ne rien dire|mentir aux parents|parler aux professeurs","« I'd tell your parents the truth ».");
L("feelings","I was so embarrassed when I fell in front of the whole class!","Comment s'est-il senti ?","gêné","fier|en colère|soulagé","embarrassed = gêné.");
L("feelings","She's very grateful for your help.","Que ressent-elle ?","de la reconnaissance","de la jalousie|de la colère|de la tristesse","grateful = reconnaissant.");
L("feelings","He gets jealous when his girlfriend talks to other boys.","Quand devient-il jaloux ?","quand sa copine parle à d'autres garçons","quand il perd un match|quand son frère a un cadeau|quand il a une mauvaise note","« when his girlfriend talks to other boys ».");
L("feelings","Don't give in to peer pressure: be yourself!","Quel conseil donne-t-on ?","résister à la pression du groupe et rester soi-même","suivre le groupe|changer de style|écouter ses parents","peer pressure = la pression des autres jeunes.");

L("citizenship","In Scotland, sixteen-year-olds can vote in local elections.","Qui peut voter aux élections locales en Écosse ?","les jeunes dès 16 ans","seulement les plus de 21 ans|seulement les plus de 25 ans|les enfants dès 12 ans","« sixteen-year-olds can vote ».");
L("citizenship","Thousands of young people took part in a demonstration for the climate.","Pour quelle cause manifestaient-ils ?","le climat","l'école|la paix|les animaux","« a demonstration for the climate ».");
L("citizenship","Rosa Parks refused to give up her seat on a bus in 1955.","Qu'a refusé de faire Rosa Parks ?","céder sa place dans un bus","payer son billet|descendre du bus|conduire le bus","« refused to give up her seat ».");
L("citizenship","Our petition has already got two thousand signatures.","Combien de signatures a la pétition ?","2 000","200|20 000|12 000","« two thousand ».");
L("citizenship","Everyone has the right to an education.","Quel droit est mentionné ?","le droit à l'éducation","le droit de vote|le droit au travail|la liberté d'expression","« the right to an education ».");
L("citizenship","Martin Luther King said that he had a dream.","Qu'a dit Martin Luther King ?","qu'il avait un rêve","qu'il voulait être président|qu'il partait|qu'il avait peur","« he had a dream ».");

L("commonwealth","Canada has two official languages: English and French.","Quelles sont les langues officielles du Canada ?","l'anglais et le français","l'anglais et l'espagnol|seulement l'anglais|l'anglais et l'allemand","« English and French ».");
L("commonwealth","India became independent in 1947.","Quand l'Inde est-elle devenue indépendante ?","en 1947","en 1974|en 1917|en 1847","nineteen forty-seven = 1947.");
L("commonwealth","In New Zealand, the Maori were the first inhabitants of the country.","Qui furent les premiers habitants de la Nouvelle-Zélande ?","les Maoris","les Aborigènes|les Inuits|les Britanniques","« the Maori were the first inhabitants ».");
L("commonwealth","Jamaica became independent in 1962.","Quand la Jamaïque est-elle devenue indépendante ?","en 1962","en 1926|en 1966|en 1862","nineteen sixty-two = 1962.");
L("commonwealth","Australians often call a barbecue a barbie!","Comment les Australiens appellent-ils souvent un barbecue ?","a barbie","a barb|a party|a grill","« a barbie ».");
L("commonwealth","The maple leaf is the symbol of Canada.","Quel est le symbole du Canada ?","la feuille d'érable","le kangourou|le trèfle|le dragon","maple leaf = feuille d'érable.");

L("famous","Nelson Mandela spent twenty-seven years in prison before he became president of South Africa.","Combien d'années Mandela a-t-il passées en prison ?","27 ans","17 ans|37 ans|7 ans","« twenty-seven years ».");
L("famous","Malala fought for girls' education. She won the Nobel Peace Prize in 2014.","En quelle année Malala a-t-elle reçu le prix Nobel ?","2014","2004|2016|2012","« in 2014 ».");
L("famous","William Shakespeare was born in Stratford-upon-Avon in 1564.","Où est né Shakespeare ?","à Stratford-upon-Avon","à Londres|à Oxford|à Édimbourg","« born in Stratford-upon-Avon ».");
L("famous","Usain Bolt is the fastest man in history. He comes from Jamaica.","D'où vient Usain Bolt ?","de Jamaïque","des États-Unis|du Kenya|d'Australie","« He comes from Jamaica ».");
L("famous","Emmeline Pankhurst campaigned for women's right to vote.","Pour quoi Emmeline Pankhurst a-t-elle fait campagne ?","le droit de vote des femmes","l'éducation des enfants|la fin de l'esclavage|la protection des animaux","« women's right to vote ».");
L("famous","Steve Jobs started Apple in his parents' garage.","Où Steve Jobs a-t-il lancé Apple ?","dans le garage de ses parents","dans une université|dans un bureau à New York|dans un café","« in his parents' garage ».");

L("sport","It's a draw: one all!","Quel est le résultat ?","match nul, 1 à 1","victoire 1 à 0|défaite 0 à 1|victoire 2 à 1","a draw = match nul ; one all = 1-1.");
L("sport","She broke the world record in the 100 metres.","Qu'a-t-elle fait ?","Elle a battu le record du monde.","Elle s'est cassé la jambe.|Elle a perdu la course.|Elle a abandonné.","break a record = battre un record.");
L("sport","Our team beat Manchester three nil.","Quel est le score ?","3 à 0","3 à 1|0 à 3|1 à 1","three nil = 3-0.");
L("sport","The referee gave him a red card.","Qui lui a donné un carton rouge ?","l'arbitre","l'entraîneur|le capitaine|un supporter","referee = arbitre.");
L("sport","I work out at the gym twice a week.","À quelle fréquence va-t-il à la salle de sport ?","deux fois par semaine","une fois par semaine|tous les jours|deux fois par mois","twice a week.");
L("sport","The 2028 Olympic Games will be held in Los Angeles.","Où auront lieu les Jeux olympiques de 2028 ?","à Los Angeles","à Londres|à Paris|à Brisbane","« in Los Angeles ».");

L("transport","The train to Manchester is delayed by twenty minutes.","De combien le train est-il retardé ?","20 minutes","12 minutes|2 minutes|une heure","« twenty minutes ».");
L("transport","Passengers for flight BA 304 to New York, please go to gate twelve.","À quelle porte faut-il aller ?","porte 12","porte 2|porte 20|porte 304","« gate twelve ».");
L("transport","A return ticket to Oxford, please. — That's twenty-four pounds.","Combien coûte l'aller-retour ?","24 £","42 £|14 £|20 £","« twenty-four pounds ».");
L("transport","Please fasten your seatbelts: we are about to land.","Que va faire l'avion ?","atterrir","décoller|faire demi-tour|accélérer","about to land = sur le point d'atterrir.");
L("transport","There's a traffic jam on the motorway, so we'll take the train.","Pourquoi prendre le train ?","Il y a un embouteillage sur l'autoroute.","Le train est moins cher.|La voiture est en panne.|Il pleut.","traffic jam = embouteillage.");
L("transport","The next train at platform two is the eleven fifteen to Bristol.","À quelle heure part le train pour Bristol ?","11 h 15","11 h 50|12 h 15|2 h 15","« the eleven fifteen » = le train de 11 h 15.");

L("food","I became a vegetarian two years ago. I don't eat meat or fish.","Depuis quand est-elle végétarienne ?","depuis deux ans","depuis dix ans|depuis deux mois|depuis toujours","« two years ago ».");
L("food","I used to drink a lot of fizzy drinks, but now I only drink water.","Que boit-il maintenant ?","seulement de l'eau","des sodas|du jus de fruits|du thé","« now I only drink water ».");
L("food","Fish and chips and curry are the most popular takeaways in Britain.","Quels sont les plats à emporter les plus populaires ?","le poisson-frites et le curry","la pizza et les burgers|les sushis et les nouilles|les sandwichs et les soupes","« Fish and chips and curry ».");
L("food","You should cut down on sugar and eat more vegetables.","Que conseille-t-on ?","manger moins de sucre et plus de légumes","manger plus de sucre|arrêter les légumes|sauter des repas","cut down on = réduire.");
L("food","Our school canteen serves organic food twice a week.","Combien de fois par semaine la cantine sert-elle du bio ?","deux fois","une fois|tous les jours|jamais","« twice a week ».");
L("food","This curry is too spicy for me!","Que pense-t-il du curry ?","Il est trop épicé.","Il est trop salé.|Il est délicieux.|Il est trop froid.","spicy = épicé.");

L("opinion","In my opinion, school uniforms are a good idea because everyone looks the same.","Que pense-t-elle des uniformes ?","C'est une bonne idée.","C'est une mauvaise idée.|Ça dépend.|Elle n'a pas d'avis.","« a good idea ».");
L("opinion","I disagree. Homework should be banned!","Que pense-t-il des devoirs ?","Ils devraient être interdits.","Ils sont utiles.|Il en faudrait plus.|Il aime les devoirs.","« should be banned » = devraient être interdits.");
L("opinion","On the one hand, phones are useful; on the other hand, they can be addictive.","Que dit-on des téléphones ?","Ils sont utiles mais peuvent rendre accro.","Ils sont inutiles.|Ils sont dangereux et inutiles.|Ils sont indispensables à l'école.","useful = utile ; addictive = qui rend accro.");
L("opinion","It depends. Video games can be fun, but not every day.","Quel est son avis ?","Ça dépend.","Il adore les jeux vidéo.|Il déteste les jeux vidéo.|Il n'a jamais joué.","« It depends » = ça dépend.");
L("opinion","I totally agree with you!","Que dit-il ?","Il est complètement d'accord.","Il n'est pas du tout d'accord.|Il hésite.|Il change de sujet.","agree = être d'accord.");
L("opinion","However, there are some disadvantages.","Que signifie le premier mot de la phrase ?","cependant","de plus|donc|par exemple","however = cependant.");

L("future","By 2050, more than two thirds of people will live in cities.","Où vivront plus des deux tiers des gens en 2050 ?","en ville","à la campagne|sur Mars|au bord de la mer","« will live in cities ».");
L("future","Driverless cars might be common in twenty years.","Que pourrait-il se passer dans vingt ans ?","Les voitures autonomes pourraient être courantes.","Les voitures disparaîtront.|On ne conduira que des vélos.|Les voitures voleront.","driverless cars ; might = pourrait.");
L("future","If robots do all the jobs, what will people do?","Quelle question pose-t-on ?","Que feront les gens si les robots font tous les métiers ?","Les robots seront-ils gentils ?|Combien coûte un robot ?|Qui a inventé les robots ?","« what will people do? »");
L("future","I'm going to study engineering because I love science.","Que va-t-il étudier ?","l'ingénierie","la médecine|le droit|les langues","engineering = ingénierie.");
L("future","Maybe one day we will travel to Mars on holiday.","Où partira-t-on peut-être en vacances ?","sur Mars","sur la Lune|au pôle Nord|sous la mer","« travel to Mars ».");

L("art","The film was gripping from start to finish.","Comment était le film ?","captivant du début à la fin","ennuyeux|trop long|effrayant","gripping = captivant.");
L("art","I didn't like the ending: it was too sad.","Pourquoi n'a-t-il pas aimé la fin ?","Elle était trop triste.","Elle était trop longue.|Elle était prévisible.|Elle était drôle.","« too sad ».");
L("art","The novel was written in 1813 by Jane Austen.","Qui a écrit le roman ?","Jane Austen","Charles Dickens|Agatha Christie|J. K. Rowling","« by Jane Austen ».");
L("art","The band is playing at Wembley Stadium next Saturday.","Où joue le groupe ?","au stade de Wembley","au Royal Albert Hall|à Glastonbury|dans un pub","« at Wembley Stadium ».");
L("art","The exhibition is open every day except Monday.","Quand l'exposition est-elle fermée ?","le lundi","le dimanche|le samedi|jamais","« except Monday ».");
L("art","In my opinion, the book is better than the film.","Que pense-t-il ?","Le livre est meilleur que le film.","Le film est meilleur que le livre.|Ils sont aussi bons.|Il n'a pas lu le livre.","« the book is better than the film ».");

L("volunteering","Every Saturday, I volunteer at the animal shelter.","Où fait-il du bénévolat ?","dans un refuge pour animaux","dans une banque alimentaire|dans une maison de retraite|dans un hôpital","animal shelter = refuge pour animaux.");
L("volunteering","We raised five hundred pounds for the children's hospital.","Combien ont-ils collecté ?","500 £","50 £|5 000 £|150 £","« five hundred pounds ».");
L("volunteering","The food bank needs pasta, rice and tins of vegetables.","De quoi la banque alimentaire n'a-t-elle PAS besoin, d'après le message ?","de vêtements","de pâtes|de riz|de conserves de légumes","Le message demande des pâtes, du riz et des conserves.");
L("volunteering","My grandmother lives alone, so I visit her every Sunday.","Pourquoi va-t-il voir sa grand-mère ?","Elle vit seule.","Elle est malade.|Elle habite à côté.|Elle lui donne de l'argent.","« lives alone ».");
L("volunteering","Volunteering is a great way to make a difference and meet new people.","Que permet le bénévolat, selon cette phrase ?","changer les choses et rencontrer des gens","gagner de l'argent|avoir de meilleures notes|voyager gratuitement","make a difference ; meet new people.");
L("volunteering","More than three hundred thousand people are homeless in the UK.","Combien de personnes sont sans-abri au Royaume-Uni, d'après ce document ?","plus de 300 000","plus de 30 000|plus de 3 000|plus de 3 millions","« three hundred thousand ».");

/* Sons proches : [mot, sens, mot, sens, explication] */
const PAIRES_SONS=[
 ["live","vivre, habiter","leave","partir","i court dans live, i long dans leave."],
 ["ship","un bateau","sheep","un mouton","i court dans ship, i long dans sheep."],
 ["it","il, ça","eat","manger","i court dans it, i long dans eat."],
 ["full","plein","fool","un idiot","ou court dans full, ou long dans fool."],
 ["think","penser","sink","un évier ; couler","th : la langue entre les dents dans think."],
 ["thought","pensé","taught","enseigné","th dans thought, t dans taught."],
 ["three","trois","free","libre, gratuit","th : la langue entre les dents ; f : les dents sur la lèvre."],
 ["hear","entendre","ear","une oreille","le h se souffle dans hear."],
 ["heat","la chaleur","eat","manger","le h se souffle dans heat."],
 ["hold","tenir","old","vieux","le h se souffle dans hold."],
 ["hate","détester","eight","huit","le h se souffle dans hate."],
 ["walk","marcher","work","travailler","« o » long dans walk (l muet), « eu » long dans work."],
 ["won't","ne … pas (futur)","want","vouloir","won't se prononce comme « oh » + nt ; want avec un o bref."],
 ["bought","acheté","boat","un bateau","« o » long et ouvert dans bought, diphtongue « eu-ou » dans boat."],
 ["cut","couper","cat","un chat","son bref proche de « eu » dans cut, a très ouvert dans cat."],
 ["pen","un stylo","pan","une poêle","« è » dans pen, a très ouvert dans pan."],
 ["this","ceci","these","ceux-ci","i court dans this, i long dans these."],
 ["thirteen","13","thirty","30","13 : on insiste sur -teen ; 30 : sur thir-."],
 ["fourteen","14","forty","40","14 : on insiste sur -teen ; 40 : sur for-."],
 ["seventeen","17","seventy","70","17 : on insiste sur -teen ; 70 : sur se-."],
 ["law","la loi","low","bas","« o » long et ouvert dans law, diphtongue dans low."],
 ["very","très","berry","une baie","v : les dents sur la lèvre ; b : les deux lèvres."]
];
/* Les temps à reconnaître */
const TEMPS=[["I play tennis on Saturdays.","pr"],["She lives in Leeds.","pr"],["They often travel by train.","pr"],["He works in a hospital.","pr"],["We watch the news every evening.","pr"],
 ["I played tennis on Saturday.","pa"],["She lived in Leeds.","pa"],["They travelled by train.","pa"],["He worked in a hospital.","pa"],["We watched the news.","pa"],["I saw that film last week.","pa"],["She went to Canada in 2019.","pa"],
 ["I was playing tennis.","pcp"],["She was living in Leeds.","pcp"],["They were travelling by train.","pcp"],["He was working at the hospital.","pcp"],["We were watching the news.","pcp"],["It was raining all morning.","pcp"],
 ["I've played tennis.","pp"],["She has lived in Leeds.","pp"],["They've travelled by train.","pp"],["He has worked in a hospital.","pp"],["We've watched the news.","pp"],["I've seen that film.","pp"],["She has been to Canada.","pp"],
 ["I'll play tennis.","fu"],["She'll live in Leeds.","fu"],["They'll travel by train.","fu"],["He'll work in a hospital.","fu"],["We'll watch the news.","fu"],["It will rain tomorrow.","fu"],
 ["I'd play tennis.","co"],["She'd live in Leeds.","co"],["They would travel by train.","co"],["He would work in a hospital.","co"],["We'd watch the news.","co"],["I would see that film.","co"]];
const NOM_TEMPS={pr:"au présent simple",pa:"au prétérit (action terminée)",pcp:"au prétérit continu (was / were + -ing)",pp:"au present perfect (have + participe passé)",fu:"au futur (will)",co:"au conditionnel (would)"};
const EXPL_TEMPS={pr:"Présent simple : une habitude, une vérité.",pa:"Prétérit : -ed ou forme irrégulière ; action terminée.",pcp:"Prétérit continu : was / were + -ing.",pp:"Present perfect : have / has + participe passé (on entend 've ou has).",fu:"Futur : will ('ll) + base verbale.",co:"Conditionnel : would ('d) + base verbale."};
function anneeEN(y){if(y>=2000&&y<2010)return "two thousand"+(y%10?" and "+enLettres(y%10):"");if(y>=2010)return "twenty "+enLettres(y%100);const c=Math.floor(y/100),r=y%100;return enLettres(c)+" "+(r===0?"hundred":r<10?"oh "+enLettres(r):enLettres(r));}

const GL={
  sons(){const p=pioche(PAIRES_SONS),i=alea(0,1)*2,bon=`${p[i]} (${p[i+1]})`,faux=`${p[2-i]} (${p[3-i]})`;
    return ecoute(p[i],"🔊 Écoute bien : quel mot entends-tu ?",bon,[faux],p[4]);},
  numbers(){const k=alea(1,5);
    if(k===1){const y=alea(1066,2030);return ecouteSaisie(`In ${anneeEN(y)}.`,"🔊 Écoute et écris l'année entendue, en chiffres.",[String(y)],`${anneeEN(y)} = ${y}. On lit les années deux chiffres par deux chiffres (19 / 98), sauf de 2000 à 2009.`);}
    if(k===2){const n=alea(1,99)*1000+pioche([0,0,500,250,alea(1,999)]);return ecouteSaisie(enLettres(n),"🔊 Écoute et écris en chiffres le nombre entendu.",[String(n),n.toLocaleString("en-GB"),String(n).replace(/\B(?=(\d{3})+(?!\d))/g," ")],`${enLettres(n)} = ${n}.`);}
    if(k===3){const p=pioche([5,10,15,20,25,30,40,50,60,70,75,80,90]);return ecouteSaisie(`About ${enLettres(p)} per cent of teenagers have a smartphone.`,"🔊 Écoute : quel pourcentage entends-tu ? Écris le nombre.",[String(p),p+" %",p+"%"],`${enLettres(p)} per cent = ${p} %.`);}
    if(k===4){const pr=pioche([[13,30],[14,40],[15,50],[16,60],[17,70],[18,80],[19,90]]),i=alea(0,1),n=pr[i]*alea(1,1)+0;return ecoute(`The bus leaves in ${enLettres(n)} minutes.`,"🔊 Écoute : dans combien de minutes part le bus ?",String(n),[String(pr[1-i])],`${pr[0]} = ${enLettres(pr[0])} (accent sur -teen) ; ${pr[1]} = ${enLettres(pr[1])} (accent au début).`);}
    const m=pioche([1.5,2,2.5,3,8,9,12,60,67]),dit=m%1?`${enLettres(Math.floor(m))} and a half million`:`${enLettres(m)} million`;
    return ecoute(`The country has about ${dit} inhabitants.`,"🔊 Écoute : combien d'habitants compte ce pays ?",`${String(m).replace(".",",")} millions`,[`${String(m*10).replace(".",",")} millions`,`${String(m).replace(".",",")} mille`,`${String(m+1).replace(".",",")} millions`],`« ${dit} » = ${String(m).replace(".",",")} millions.`);},
  dates(){const m=alea(0,11),d=alea(1,m===1?28:JOURS_MOIS[m]),y=alea(1900,2025);
    const dit=`It happened on the ${ordinal(d)} of ${MOIS_EN[m]}, ${anneeEN(y)}.`,fr=(a,b,c)=>`${a===1?"1er":a} ${MOIS_FR[b]} ${c}`;
    if(alea(0,1))return ecouteSaisie(dit,"🔊 Écoute la date : écris seulement l'année, en chiffres.",[String(y)],`${anneeEN(y)} = ${y} ; la date complète : le ${fr(d,m,y)}.`);
    const autreJ=d===13?30:d===30?13:d<=27?d+1:d-1,autreM=(m+1)%12,okM=JOURS_MOIS[autreM]-(autreM===1?1:0)>=d?autreM:0;
    return ecoute(dit,"🔊 Écoute : quelle est la date ?",fr(d,m,y),[fr(autreJ,m,y),fr(d,okM,y),fr(d,m,y+(y%100<90?10:-10))].filter(x=>x!==fr(d,m,y)),`${ordinal(d)} of ${MOIS_EN[m]}, ${anneeEN(y)} = le ${fr(d,m,y)}.`);},
  prices(){const l=alea(2,99),p=pioche([0,20,49,50,75,95,99,15]);
    const dit=`It costs ${enLettres(l)} pounds${p?" "+enLettres(p):""}.`,fmt=(a,b)=>`£${a}.${String(b).padStart(2,"0")}`;
    const faux=[fmt(l,(p+50)%100),fmt(l+10,p),fmt(l>20?l-10:l+20,p),fmt(l,p===15?50:p===50?15:(p+10)%100)].filter(x=>x!==fmt(l,p));
    if(alea(0,2)===0)return ecouteSaisie(dit,"🔊 Écoute et écris le prix entendu, en livres (exemple : 24.99).",[`${l}.${String(p).padStart(2,"0")}`,`£${l}.${String(p).padStart(2,"0")}`],`On entend les livres (pounds), puis les pence : ${fmt(l,p)}.`);
    return ecoute(dit,"🔊 Écoute : combien ça coûte ?",fmt(l,p),[...new Set(faux)],"On dit d'abord les livres (pounds), puis les pence.");},
  pastcont(){return GL._temps(["pa","pcp"]);},
  pp(){return GL._temps(["pa","pp"]);},
  ppvspast(){return GL._temps(["pr","pa","pp"]);},
  future(){return GL._temps(["pr","pa","fu","co"]);},
  _temps(cats){const x=pioche(TEMPS.filter(t=>cats.includes(t[1])));return ecoute(x[0],"🔊 Écoute : cette phrase est…",NOM_TEMPS[x[1]],cats.filter(c=>c!==x[1]).map(c=>NOM_TEMPS[c]),EXPL_TEMPS[x[1]]);}
};
const GL_PART={pastcont:0.4,pp:0.4,ppvspast:0.4,future:0.4,numbers:1,dates:1,prices:1,sons:1};
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

R("travel","Last July, my family and I went on a road trip around Ireland. We rented a car in Dublin and drove along the west coast. The landscapes were breathtaking, but the roads were very narrow. We stayed in small guesthouses and met lots of friendly people. My favourite place was the Cliffs of Moher.",[
 ["Quel était l'inconvénient du voyage ?","les routes très étroites","la pluie permanente|les hôtels trop chers|les gens peu aimables","« the roads were very narrow »."],
 ["What was the narrator's favourite place?","the Cliffs of Moher","Dublin|the west coast roads|a guesthouse","« My favourite place was the Cliffs of Moher »."]]);
R("travel","Dear Sam, greetings from Japan! We arrived in Tokyo four days ago. The city is huge and very clean. Yesterday we took the bullet train to Kyoto: it travels at 300 km/h! We've visited lots of temples, and I've eaten sushi every day. See you soon, Jade.",[
 ["Comment sont-ils allés à Kyoto ?","en train à grande vitesse","en avion|en bus|en voiture de location","the bullet train = le train à grande vitesse japonais."],
 ["When did they arrive in Tokyo?","four days ago","four weeks ago|yesterday|fourteen days ago","« We arrived in Tokyo four days ago »."]]);
R("childhood","When I was little, I lived on a farm in Wales. Every morning, I used to feed the chickens before school. I didn't have many toys, but I had a lot of space to play. One day, while I was playing in the barn, I found a tiny kitten. I called her Lucky, and she lived with us for eighteen years.",[
 ["Que faisait-il chaque matin ?","Il nourrissait les poules.","Il trayait les vaches.|Il promenait le chien.|Il allait pêcher.","« I used to feed the chickens »."],
 ["Where did he find the kitten?","in the barn","in the garden|at school|in the kitchen","« while I was playing in the barn » ; barn = grange."]]);
R("childhood","My grandmother often tells me about her childhood in Jamaica. She grew up in a big family with seven brothers and sisters. They didn't have a TV, so they used to tell stories in the evening. She came to England in 1962, when she was sixteen.",[
 ["Que faisaient-ils le soir ?","Ils se racontaient des histoires.","Ils regardaient la télévision.|Ils jouaient aux cartes.|Ils écoutaient la radio.","« they used to tell stories in the evening »."],
 ["How old was she when she came to England?","sixteen","six|sixty|seven","« when she was sixteen »."]]);
R("stories","Teenager saves neighbour. Last Tuesday, fourteen-year-old Liam Shaw was walking home from school when he saw smoke coming from a house. He called 999 and helped his elderly neighbour out of the building. Firefighters arrived ten minutes later. 'Liam is a real hero,' said the neighbour.",[
 ["Que faisait Liam quand il a vu la fumée ?","Il rentrait de l'école à pied.","Il faisait du vélo.|Il jouait au foot.|Il promenait son chien.","« was walking home from school when he saw smoke »."],
 ["Who arrived ten minutes later?","the firefighters","the police|Liam's parents|an ambulance","« Firefighters arrived ten minutes later »."]]);
R("stories","A museum in Glasgow was burgled on Saturday night. The thieves broke a window and stole three paintings while the alarm system wasn't working. Police are looking for witnesses who were in the area between 1 and 3 am.",[
 ["Pourquoi l'alarme n'a-t-elle pas sonné ?","Elle ne fonctionnait pas.","Les voleurs l'ont cassée.|Elle était éteinte pour la nuit.|Un gardien l'a débranchée.","« while the alarm system wasn't working »."],
 ["What are the police looking for?","witnesses","the owners of the paintings|a new alarm|the broken window","« Police are looking for witnesses »."]]);
R("experiences","Have you ever done something really scary? Last year, I went bungee jumping in New Zealand. I've never been so frightened in my life! But when I jumped, it was amazing. I've also tried skydiving, but I prefer bungee jumping. Next, I'd like to swim with sharks.",[
 ["Qu'aimerait-il faire ensuite ?","nager avec des requins","faire du parachute|refaire du saut à l'élastique|escalader l'Everest","« Next, I'd like to swim with sharks »."],
 ["Which activity does he prefer?","bungee jumping","skydiving|swimming with sharks|climbing","« I prefer bungee jumping »."]]);
R("experiences","Emma is only fifteen, but she has already visited twenty countries. Her parents are both journalists, so they travel a lot. She has learnt to speak three languages. However, she has never been to the USA, and that's her dream.",[
 ["Pourquoi Emma voyage-t-elle beaucoup ?","Ses parents sont journalistes.","Elle est mannequin.|Elle fait des compétitions.|Ses parents sont pilotes.","« Her parents are both journalists »."],
 ["Has Emma been to the USA?","No, never.","Yes, once.|Yes, twice.|Yes, she lives there.","« she has never been to the USA »."]]);
R("tech","Sophie has had a smartphone since she was eleven. She uses it for about four hours a day, mostly on social media. Last month, a stranger sent her rude messages. She blocked him and told her parents. Now she has made her account private.",[
 ["Qu'a-t-elle fait après les messages ?","Elle a bloqué la personne et prévenu ses parents.","Elle a répondu.|Elle a jeté son téléphone.|Elle n'a rien dit.","« She blocked him and told her parents »."],
 ["How long does she use her phone every day?","about four hours","about fourteen hours|about one hour|about forty minutes","« about four hours a day »."]]);
R("tech","More and more schools in Britain have banned mobile phones. Some teachers say pupils concentrate better and talk more at break. But some parents disagree: they want to be able to contact their children. What do you think?",[
 ["Pourquoi certains parents ne sont-ils pas d'accord ?","Ils veulent pouvoir joindre leurs enfants.","Ils trouvent les téléphones utiles en classe.|Ils pensent que les élèves travaillent mieux.|Ils veulent vendre des téléphones.","« they want to be able to contact their children »."],
 ["According to some teachers, what happens without phones?","Pupils concentrate better.","Pupils are more bored.|Pupils get worse marks.|Pupils talk less.","« pupils concentrate better and talk more at break »."]]);
R("news","A huge storm has hit the south of England. Thousands of homes have lost electricity and many trains have been cancelled. The storm arrived on Sunday night with winds of 140 km/h. Engineers are working to repair the damage.",[
 ["Quelles sont les conséquences de la tempête ?","des maisons sans électricité et des trains annulés","des inondations dans le nord|des écoles fermées pour un mois|aucun dégât","« Thousands of homes have lost electricity and many trains have been cancelled »."],
 ["When did the storm arrive?","on Sunday night","on Monday morning|last month|on Saturday afternoon","« The storm arrived on Sunday night »."]]);
R("news","Breaking news: a fourteen-year-old girl from Leeds has won an international science competition. She has invented a cheap water filter for poor countries. She will travel to New York next month to present her project.",[
 ["Qu'a-t-elle inventé ?","un filtre à eau bon marché","une application|un robot|un vaccin","« a cheap water filter »."],
 ["What will she do next month?","present her project in New York","start university|sell her invention|move to Leeds","« She will travel to New York next month to present her project »."]]);
R("environment","Every year, the UK throws away about ten million tonnes of food. Most of it comes from our homes. To reduce food waste, plan your meals, buy only what you need and use leftovers. If everyone does a little, we will make a big difference.",[
 ["D'où vient la plus grande partie du gaspillage ?","des foyers","des restaurants|des supermarchés|des écoles","« Most of it comes from our homes »."],
 ["Which is NOT a tip in the text?","buy more food","plan your meals|use leftovers|buy only what you need","Le texte conseille d'acheter seulement ce dont on a besoin."]]);
R("environment","Greta Thunberg was fifteen when she started a school strike for the climate in 2018. Every Friday, she sat in front of the Swedish parliament. Soon, millions of young people around the world joined her. She says that governments are not doing enough.",[
 ["Où s'asseyait-elle chaque vendredi ?","devant le Parlement suédois","dans son école|devant l'ONU|dans une rue de Londres","« in front of the Swedish parliament »."],
 ["What does she think about governments?","They are not doing enough.","They are doing a great job.|They should do nothing.|They are too young.","« governments are not doing enough »."]]);
R("plans","Hi Ben! Are you free on Saturday? We're going to the climbing centre at 2 pm. My mum is driving us there. After that, we might get a pizza. Let me know! Max — Hi Max, sorry, I can't. I'm playing in a football match on Saturday. What about Sunday? Ben",[
 ["Pourquoi Ben ne peut-il pas venir samedi ?","Il a un match de foot.","Il est malade.|Il va au cinéma.|Il fait de l'escalade.","« I'm playing in a football match on Saturday »."],
 ["Who is driving them to the climbing centre?","Max's mum","Ben's mum|Max's dad|nobody, they're cycling","C'est Max qui écrit « My mum is driving us there »."]]);
R("plans","Our class trip to London is on 14th May. The coach will leave school at 6.30 am, so don't be late! We are visiting the Science Museum in the morning and we are going on the London Eye in the afternoon. Bring a packed lunch and some pocket money.",[
 ["Que faut-il apporter ?","un pique-nique et de l'argent de poche","un maillot de bain|un dictionnaire|un passeport","« Bring a packed lunch and some pocket money »."],
 ["What will they do in the afternoon?","go on the London Eye","visit the Science Museum|go shopping|visit Buckingham Palace","« we are going on the London Eye in the afternoon »."]]);
R("jobs","WANTED: Summer helpers at Sunny Bay Camp. Are you sixteen or over? Do you love sport and working with children? We are looking for friendly, energetic people for July and August. No experience needed. Apply online before 30th April.",[
 ["Quel âge minimum faut-il avoir ?","16 ans","18 ans|14 ans|20 ans","« sixteen or over »."],
 ["Do you need experience?","No.","Yes, two years.|Yes, with children.|Only in sport.","« No experience needed »."]]);
R("jobs","Priya is a nurse in a children's hospital in Birmingham. She starts work at 7 am and often finishes after 8 pm. The job is tiring, but she says it's very rewarding. She decided to become a nurse after her little brother was in hospital for a long time.",[
 ["Pourquoi est-elle devenue infirmière ?","Son petit frère a été longtemps hospitalisé.","Sa mère était infirmière.|Elle voulait bien gagner sa vie.|Elle a fait un stage.","« after her little brother was in hospital for a long time »."],
 ["How does she describe her job?","tiring but rewarding","easy and boring|well-paid and relaxing|dangerous","« tiring, but … very rewarding » ; rewarding = gratifiant."]]);
R("health","Teenagers need between eight and ten hours of sleep a night, but many sleep less than seven. Screens are one of the main reasons: their blue light keeps us awake. Experts say you should stop using screens an hour before bed.",[
 ["Pourquoi les écrans empêchent-ils de dormir ?","à cause de leur lumière bleue","à cause du bruit|parce qu'ils chauffent|à cause des publicités","« their blue light keeps us awake »."],
 ["When should you stop using screens?","an hour before bed","at midnight|after dinner only|ten minutes before bed","« stop using screens an hour before bed »."]]);
R("health","Dear Doctor Kate, I'm fourteen and I always feel stressed before exams. I can't sleep and I get headaches. What should I do? Tom — Dear Tom, you should start revising early and take regular breaks. Try to do some sport: it helps a lot. And talk to someone you trust.",[
 ["Qu'est-ce qui stresse Tom ?","les examens","ses parents|le sport|ses amis","« I always feel stressed before exams »."],
 ["Which is NOT advice from Doctor Kate?","Revise all night.","Start revising early.|Do some sport.|Talk to someone you trust.","Elle conseille de réviser tôt et de faire des pauses, pas de réviser toute la nuit."]]);
R("rules","Rules of the youth hostel: breakfast is served from 7 to 9 am. Guests must be back by 11 pm. You mustn't smoke anywhere in the building. You don't have to bring sheets: they are provided. Please keep the kitchen clean.",[
 ["Faut-il apporter des draps ?","non, ils sont fournis","oui, c'est obligatoire|oui, mais seulement l'hiver|il faut les louer","« You don't have to bring sheets: they are provided »."],
 ["What time must guests be back?","by 11 pm","by 9 pm|by midnight|by 7 am","« Guests must be back by 11 pm »."]]);
R("rules","In many British schools, pupils have to wear a uniform: a blazer, a tie and black shoes. Make-up and jewellery are often not allowed. Some pupils think uniforms are boring, but others say they help everyone feel equal.",[
 ["Qu'est-ce qui est souvent interdit ?","le maquillage et les bijoux","les cravates|les chaussures noires|les blazers","« Make-up and jewellery are often not allowed »."],
 ["Why do some pupils like uniforms?","They help everyone feel equal.","They are colourful.|They are cheap.|They are comfortable.","« they help everyone feel equal »."]]);
R("traditions","On 11th November, the British remember the soldiers who died in wars. At 11 am, people stop and stay silent for two minutes. Many wear a red paper poppy. Poppies grew on the battlefields of northern France and Belgium during the First World War.",[
 ["Que font les gens à 11 h ?","Ils observent deux minutes de silence.","Ils chantent l'hymne national.|Ils défilent.|Ils allument des bougies.","« people stop and stay silent for two minutes »."],
 ["Where did poppies grow during the First World War?","on the battlefields of France and Belgium","in London parks|in Scotland|in the USA","« on the battlefields of northern France and Belgium »."]]);
R("traditions","In Scotland, New Year's Eve is called Hogmanay. In Edinburgh, there is a huge street party with music and fireworks. At midnight, people hold hands and sing Auld Lang Syne, a famous poem by Robert Burns. Some people believe that the first visitor of the year brings good luck.",[
 ["Qui a écrit « Auld Lang Syne » ?","Robert Burns","William Shakespeare|Walter Scott|Charles Dickens","« a famous poem by Robert Burns »."],
 ["What do people do at midnight?","hold hands and sing","eat haggis|go to bed|light a bonfire","« people hold hands and sing »."]]);
R("london","London is one of the most visited cities in the world. It was founded by the Romans almost two thousand years ago. Today, nearly nine million people live there, and more than three hundred languages are spoken in its schools. It's a truly multicultural city.",[
 ["Qui a fondé Londres ?","les Romains","les Vikings|les Normands|les Saxons","« founded by the Romans »."],
 ["How many languages are spoken in London schools?","more than three hundred","about thirty|about three|more than three thousand","« more than three hundred languages »."]]);
R("london","If you visit London, you might want to see the Changing of the Guard at Buckingham Palace. It usually takes place at 11 am. Arrive early, because it may be very crowded. Afterwards, you could walk through St James's Park to Westminster.",[
 ["Pourquoi arriver tôt ?","Il peut y avoir beaucoup de monde.","La cérémonie commence à 8 h.|Les billets sont limités.|Le parc ferme tôt.","« it may be very crowded »."],
 ["What time does the ceremony usually start?","11 am","11 pm|10 am|noon","« It usually takes place at 11 am »."]]);
R("newyork","New York is often called the city that never sleeps. It is divided into five boroughs. Hundreds of languages are spoken there, which makes it one of the most diverse cities in the world. The subway is open 24 hours a day.",[
 ["Combien d'arrondissements compte New York ?","5","3|8|50","« divided into five boroughs »."],
 ["When is the subway open?","24 hours a day","from 6 am to midnight|only during the day|at weekends only","« open 24 hours a day »."]]);
R("newyork","Between 1892 and 1954, more than twelve million immigrants arrived in the USA through Ellis Island. After a long journey by boat, they saw the Statue of Liberty. At Ellis Island, they were checked by doctors and asked questions. Most of them were allowed to stay.",[
 ["Que se passait-il à Ellis Island ?","Les immigrants étaient examinés par des médecins et interrogés.","Les immigrants recevaient un logement.|Les immigrants apprenaient l'anglais.|Les immigrants travaillaient au port.","« they were checked by doctors and asked questions »."],
 ["Were most immigrants allowed to stay?","Yes, most of them.","No, most were sent back.|Only children.|Nobody.","« Most of them were allowed to stay »."]]);
R("inventions","The first modern bicycle was invented in England in the 1880s. Before that, bikes had a huge front wheel and were dangerous. The new safety bicycle had two wheels of the same size and a chain. It quickly became popular, especially with women, who gained more freedom.",[
 ["Qu'avait de nouveau la « safety bicycle » ?","deux roues de même taille et une chaîne","une énorme roue avant|un moteur|trois roues","« two wheels of the same size and a chain »."],
 ["Who especially liked the new bicycle?","women","soldiers|children|farmers","« especially with women, who gained more freedom »."]]);
R("inventions","Penicillin was discovered by Alexander Fleming in 1928. He went on holiday and left some dishes of bacteria in his laboratory. When he came back, he noticed that a mould had killed the bacteria around it. This discovery has saved millions of lives.",[
 ["Comment Fleming a-t-il fait sa découverte ?","Une moisissure avait tué des bactéries pendant ses vacances.","Il cherchait un vaccin.|Un collègue la lui a montrée.|Il l'a lue dans un livre ancien.","« a mould had killed the bacteria » ; mould = moisissure."],
 ["When was penicillin discovered?","in 1928","in 1982|in 1908|in 1828","« in 1928 »."]]);
R("media","How to spot fake news: first, check who wrote the article and where it was published. Then, look for the same information on reliable websites. Be careful with headlines that make you angry or scared: they are often designed to be shared. Finally, think before you share!",[
 ["Pourquoi se méfier des titres qui font peur ?","Ils sont souvent faits pour être partagés.","Ils sont toujours vrais.|Ils sont écrits par des enfants.|Ils sont trop longs.","« they are often designed to be shared »."],
 ["What should you do first?","check who wrote the article and where it was published","share it quickly|read the comments|look at the pictures","« first, check who wrote the article and where it was published »."]]);
R("media","The BBC, which was founded in 1922, is one of the oldest broadcasters in the world. It is paid for by the licence fee, so there are no adverts on its channels. Millions of people around the world listen to the BBC World Service in more than forty languages.",[
 ["Pourquoi n'y a-t-il pas de publicité sur la BBC ?","Elle est financée par une redevance.","La publicité est interdite au Royaume-Uni.|Les téléspectateurs n'aiment pas ça.|Elle est financée par des entreprises.","licence fee = redevance."],
 ["In how many languages does the World Service broadcast?","more than forty","about four|exactly fourteen|more than four hundred","« in more than forty languages »."]]);
R("relationships","Dear Abby, my best friend has started spending all her time with a new group of girls. They don't really talk to me, and I feel left out. Should I tell her how I feel? Lucy — Dear Lucy, yes! If I were you, I would talk to her calmly. A true friend will listen.",[
 ["Comment se sent Lucy ?","mise à l'écart","en colère contre ses parents|jalouse de sa sœur|fière","« I feel left out » = je me sens mise à l'écart."],
 ["What does Abby advise?","to talk to her friend calmly","to find new friends|to ignore her friend|to tell the teacher","« If I were you, I would talk to her calmly »."]]);
R("relationships","Research shows that teenagers who have good friends are happier and do better at school. But friendship isn't always easy: arguments are normal. The important thing is to apologise when you are wrong and to trust each other.",[
 ["Selon le texte, les disputes sont…","normales","graves|rares|interdites","« arguments are normal »."],
 ["What is important, according to the text?","to apologise when you're wrong","to never argue|to have many friends|to agree with everyone","« to apologise when you are wrong and to trust each other »."]]);
R("citizenship","In 1955, in Alabama, Rosa Parks refused to give up her seat on a bus to a white man. She was arrested. Her action started a boycott of the buses which lasted more than a year. In 1956, the Supreme Court decided that segregation on buses was illegal.",[
 ["Qu'est-il arrivé à Rosa Parks ?","Elle a été arrêtée.","Elle a été élue.|Elle a quitté l'Alabama le jour même.|Elle a été félicitée par le chauffeur.","« She was arrested »."],
 ["How long did the boycott last?","more than a year","a week|a month|ten years","« which lasted more than a year »."]]);
R("citizenship","In the early 1900s, women in Britain couldn't vote. Women called suffragettes organised demonstrations, and some of them went to prison. In 1918, some women over thirty got the right to vote. Finally, in 1928, women got the same voting rights as men.",[
 ["Que s'est-il passé en 1928 ?","Les femmes ont obtenu les mêmes droits de vote que les hommes.","Les suffragettes ont commencé à manifester.|Les femmes de plus de 30 ans ont voté pour la première fois.|Le vote a été supprimé.","« in 1928, women got the same voting rights as men »."],
 ["What happened to some suffragettes?","They went to prison.","They became queens.|They moved to France.|They stopped working.","« some of them went to prison »."]]);
R("commonwealth","Canada is the second largest country in the world, but it has only about forty million inhabitants. It has two official languages, English and French. In Quebec, most people speak French. Canada is famous for its forests, lakes, ice hockey and maple syrup.",[
 ["Où la plupart des gens parlent-ils français ?","au Québec","à Toronto|à Vancouver|dans tout le Canada","« In Quebec, most people speak French »."],
 ["How many people live in Canada?","about forty million","about four million|about four hundred million|about fourteen million","« about forty million inhabitants »."]]);
R("commonwealth","India is the country with the largest population in the world. Hindi and English are both used by the government. Many Indian families live in Britain, and Indian food is very popular there. Cricket, a sport invented in England, is the favourite sport of millions of Indians.",[
 ["Quel est le sport préféré de millions d'Indiens ?","le cricket","le football|le rugby|le hockey","« Cricket … is the favourite sport of millions of Indians »."],
 ["Where was cricket invented?","in England","in India|in Australia|in the USA","« a sport invented in England »."]]);
R("famous","Marie Curie was born in Poland in 1867. She moved to Paris to study science, which was very rare for a woman at the time. She was the first person to win two Nobel Prizes, in physics and in chemistry. Her research on radioactivity changed medicine.",[
 ["Où est née Marie Curie ?","en Pologne","en France|en Allemagne|en Russie","« born in Poland »."],
 ["What was special about her?","She was the first person to win two Nobel Prizes.","She was the first woman to fly a plane.|She invented the telephone.|She was a famous painter.","« the first person to win two Nobel Prizes »."]]);
R("famous","Nelson Mandela fought against apartheid, a system which separated black and white people in South Africa. He spent twenty-seven years in prison. When he was freed in 1990, he didn't look for revenge. In 1994, he became the first black president of South Africa.",[
 ["Qu'est-ce que l'apartheid ?","un système qui séparait les Noirs et les Blancs","un parti politique|une prison célèbre|une langue africaine","« a system which separated black and white people »."],
 ["When did he become president?","in 1994","in 1990|in 1964|in 2004","« In 1994, he became the first black president »."]]);
R("sport","Last night, England beat Spain 2–1 in an exciting match. Spain scored first, but England's captain equalised just before half-time. In the 89th minute, a young substitute scored the winning goal. The fans went wild!",[
 ["Qui a marqué le but de la victoire ?","un jeune remplaçant","le capitaine anglais|un joueur espagnol|l'entraîneur","« a young substitute scored the winning goal »."],
 ["Who scored first?","Spain","England|the captain|nobody","« Spain scored first »."]]);
R("sport","Rugby was invented at Rugby School in England in 1823. According to the legend, a pupil called William Webb Ellis picked up the ball during a football match and ran with it. Today, the Rugby World Cup trophy is called the Webb Ellis Cup.",[
 ["Selon la légende, qu'a fait William Webb Ellis ?","Il a pris le ballon dans les mains et a couru.","Il a inventé un nouveau ballon.|Il a fondé une école.|Il a gagné la première Coupe du monde.","« picked up the ball … and ran with it »."],
 ["What is the name of the World Cup trophy?","the Webb Ellis Cup","the Rugby Cup|the Ellis Trophy|the Six Nations Cup","« the Webb Ellis Cup »."]]);
R("shopping","Review: I bought these wireless headphones last month. They were cheaper than other brands, only £35, and the sound is great. However, the battery doesn't last as long as they say: about five hours, not ten. I'd give them three stars out of five.",[
 ["Quel est le défaut du casque ?","La batterie dure moins longtemps qu'annoncé.","Le son est mauvais.|Il est trop cher.|Il est trop lourd.","« the battery doesn't last as long as they say »."],
 ["How long does the battery really last?","about five hours","about ten hours|about fifteen hours|about one hour","« about five hours, not ten »."]]);
R("shopping","Fast fashion means cheap clothes that are made quickly and thrown away quickly. It is one of the most polluting industries in the world. More and more teenagers now prefer second-hand shops or swap clothes with friends. It's cheaper and better for the planet.",[
 ["Que préfèrent de plus en plus d'ados ?","les magasins d'occasion et les échanges de vêtements","les grandes marques|les achats en ligne|les vêtements neufs bon marché","« second-hand shops or swap clothes with friends »."],
 ["What is fast fashion?","cheap clothes made and thrown away quickly","expensive designer clothes|sports clothes|second-hand clothes","Définition donnée dans la première phrase."]]);
R("transport","Flight information: flight BA 117 to New York is delayed by forty-five minutes because of bad weather. Passengers should go to gate 22 at 10.15. Please have your boarding pass and passport ready. We apologise for the delay.",[
 ["Pourquoi le vol est-il retardé ?","à cause du mauvais temps","à cause d'une grève|à cause d'un problème technique|à cause d'un passager","« because of bad weather »."],
 ["Which gate should passengers go to?","gate 22","gate 117|gate 45|gate 10","« go to gate 22 »."]]);
R("transport","The Channel Tunnel opened in 1994. It connects England and France under the sea. Thanks to the Eurostar, you can travel from London to Paris in about two hours and twenty minutes. Before the tunnel, most people took the ferry or the plane.",[
 ["Combien de temps dure le trajet Londres-Paris ?","environ 2 h 20","environ 1 h|environ 4 h 20|environ 20 min","« about two hours and twenty minutes »."],
 ["When did the tunnel open?","in 1994","in 1984|in 2004|in 1949","« opened in 1994 »."]]);
R("food","Jamie Oliver is a famous British chef. In 2005, he started a campaign to improve school dinners. Before that, many schools served cheap, unhealthy food like chips and burgers. Thanks to him, the government spent more money on healthier meals.",[
 ["Que servaient beaucoup d'écoles avant 2005 ?","de la nourriture bon marché et peu saine","des repas bio|des plats végétariens|des repas gastronomiques","« cheap, unhealthy food »."],
 ["What was the result of his campaign?","The government spent more money on healthier meals.","Schools stopped serving lunch.|Burgers became free.|He opened a school.","« the government spent more money on healthier meals »."]]);
R("food","When my grandparents were young, they used to eat home-made food every day. They didn't use to buy ready meals or snacks. Today, we eat more processed food, and it often contains too much sugar and salt. Maybe we should cook more like our grandparents!",[
 ["Que contiennent souvent les aliments transformés ?","trop de sucre et de sel","trop de vitamines|trop d'eau|trop de légumes","« too much sugar and salt »."],
 ["Did the grandparents use to buy ready meals?","No, they didn't.","Yes, every day.|Yes, sometimes.|Yes, at weekends.","« They didn't use to buy ready meals »."]]);
R("school","In England, pupils take their GCSEs at sixteen. Most pupils take between eight and ten subjects. After that, they can leave school, start an apprenticeship or study for A levels. A levels are needed to go to university.",[
 ["À quoi servent les A levels ?","à entrer à l'université","à quitter l'école à 14 ans|à passer le permis|à choisir un apprentissage","« A levels are needed to go to university »."],
 ["How old are pupils when they take their GCSEs?","sixteen","fourteen|eighteen|eleven","« at sixteen »."]]);
R("school","Harry Potter made boarding schools famous, but only about one per cent of British children go to one. Pupils sleep at school during the term and go home for the holidays. Some love it because they live with their friends; others miss their families.",[
 ["Quelle proportion des enfants britanniques va en internat ?","environ 1 %","environ 10 %|environ 50 %|aucun","« only about one per cent »."],
 ["Why do some pupils love boarding school?","They live with their friends.","The food is great.|There are no lessons.|They never go home.","« because they live with their friends »."]]);
R("opinion","Should homework be banned? On the one hand, homework helps pupils to revise and to work on their own. On the other hand, many teenagers are tired after a long day at school, and not everyone has a quiet place to work at home. In my opinion, short homework is a good compromise.",[
 ["Quel est l'avis de l'auteur ?","Des devoirs courts sont un bon compromis.","Il faut supprimer les devoirs.|Il faut plus de devoirs.|Les devoirs sont inutiles.","« short homework is a good compromise »."],
 ["Which argument is AGAINST homework?","Not everyone has a quiet place to work.","It helps pupils to revise.|It teaches pupils to work alone.|It is short.","« not everyone has a quiet place to work at home »."]]);
R("opinion","Many people think that zoos are cruel because animals are kept in cages. However, modern zoos help to protect endangered species and teach children about nature. I believe that good zoos are useful, but they must give animals enough space.",[
 ["Quelle condition pose l'auteur ?","donner assez d'espace aux animaux","fermer tous les zoos|ouvrir plus de zoos|interdire les visites","« they must give animals enough space »."],
 ["According to the text, how do modern zoos help?","They protect endangered species.","They sell animals.|They keep animals in small cages.|They make a lot of money.","« help to protect endangered species »."]]);
R("future","Imagine your home in 2050. Your fridge will order food when it is empty, and a robot will clean the floors. Cars will probably drive themselves. But some scientists warn that we might spend too much time with machines and not enough with people.",[
 ["Que fera le réfrigérateur ?","Il commandera la nourriture.","Il cuisinera.|Il parlera aux enfants.|Il nettoiera la maison.","« Your fridge will order food »."],
 ["What do some scientists warn about?","spending too much time with machines","robots becoming too expensive|cars disappearing|fridges breaking down","« we might spend too much time with machines »."]]);
R("future","If humans go to Mars, the journey will take about seven months. Astronauts will need to grow their own food and recycle their water. It will be dangerous, but many people would like to go. Would you?",[
 ["Combien de temps durerait le voyage vers Mars ?","environ 7 mois","environ 7 jours|environ 7 ans|environ 17 mois","« about seven months »."],
 ["What will astronauts need to do?","grow their own food","build a hotel|take a lot of pets|come back every month","« grow their own food and recycle their water »."]]);
R("art","Review: the new superhero film is gripping from start to finish. The special effects are amazing and the actors are excellent. The plot is a bit complicated, but the soundtrack is brilliant. If you like action films, you should definitely see it. 4/5",[
 ["Quel est le point faible du film ?","L'intrigue est un peu compliquée.","Les effets spéciaux sont ratés.|Les acteurs jouent mal.|La musique est ennuyeuse.","« The plot is a bit complicated »."],
 ["What mark does the reviewer give?","4 out of 5","5 out of 5|3 out of 5|2 out of 5","« 4/5 »."]]);
R("art","Romeo and Juliet, which was written by William Shakespeare, tells the story of two young people from enemy families in Verona. They fall in love, but their families hate each other. The story ends tragically. It has inspired many films and musicals, such as West Side Story.",[
 ["Où se passe l'histoire ?","à Vérone","à Londres|à Venise|à New York","« in Verona »."],
 ["Which musical was inspired by the play?","West Side Story","The Lion King|Mamma Mia!|Cats","« such as West Side Story »."]]);
R("volunteering","Every Saturday morning, Jake, fifteen, helps at a food bank in Manchester. He sorts the food that people give and packs bags for families in need. 'I didn't know that so many families were struggling,' he says. 'Now I feel useful.'",[
 ["Que fait Jake à la banque alimentaire ?","Il trie la nourriture et prépare des sacs.","Il cuisine des repas chauds.|Il livre des colis en voiture.|Il collecte de l'argent dans la rue.","« He sorts the food … and packs bags »."],
 ["How does Jake feel now?","useful","bored|tired|angry","« Now I feel useful »."]]);
R("volunteering","Our school is organising a fun run to raise money for a children's charity. Each runner must find sponsors who will give money for every kilometre. Last year, we raised £2,000. This year, we hope to raise even more!",[
 ["Comment collecte-t-on l'argent ?","Des sponsors donnent de l'argent pour chaque kilomètre.","Les coureurs paient une inscription.|On vend des gâteaux.|Les professeurs donnent l'argent.","« sponsors who will give money for every kilometre »."],
 ["How much did they raise last year?","£2,000","£200|£20,000|£1,000","« Last year, we raised £2,000 »."]]);

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

export const programme = { code: "anglais-4", nom: "Anglais · niveau 4 (4e-3e)", rituel: "Monte le son : il y a des questions à écouter.", SEMAINES, JOURS, NOM_MAT, PERIODES, matiereDuJour, seanceHorsLigne };
