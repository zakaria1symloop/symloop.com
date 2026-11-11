import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/mesurer-qu-une-ia-marche-avant-la-production-algerie-2027-jeu-d-evaluation-taux-d-erreur-hallucinations-regressions-seuil-de-livraison.mjs';

const SLUG = 'mesurer-qu-une-ia-marche-avant-la-production-algerie-2027-jeu-d-evaluation-taux-d-erreur-hallucinations-regressions-seuil-de-livraison';
const FIGURES = ['tableau', 'etapes', 'verdict', 'cas', 'mesures', 'calendrier'];
const DATE = '2026-11-09';

const L = {
  ia: '/blog/mettre-de-l-ia-dans-une-application-algerie-2027-cinq-fonctions-recherche-documents-extraction-factures-classification-cout-par-requete/',
  lire: '/blog/lire-factures-bons-de-commande-pieces-par-ia-algerie-2027-photo-en-champs-verifies-schema-controles-validation-humaine-erp/',
  prive: '/blog/deployer-un-modele-ia-sur-ses-serveurs-algerie-2027-llm-prive-quel-modele-quelle-machine-cout-par-requete-quand-rester-sur-une-api/',
  whatsapp: '/blog/agent-ia-whatsapp-entreprise-algerie-2027-architecture-fenetre-24-heures-templates-passage-humain-cout-message/',
  recherche: '/blog/recherche-dans-une-application-algerie-2027-catalogue-arabe-francais-darija-fautes-synonymes-classement-zero-resultat/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  cdc: '/blog/cahier-des-charges-application-plateforme-algerie-2027-quoi-ecrire-comparer-trois-devis/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  choisir: '/blog/quelle-societe-choisir-algerie-2027-application-avec-ia-cinq-preuves-a-exiger-avant-de-signer-ou-verifier-les-notres/',
  service: '/services/ai/',
};

const CONTENT = {
  fr: {
    kind: 'Évaluation de l’IA · Mesure · Livraison · 2027', title: "Mesurer qu'une IA marche avant de la mettre devant vos clients en Algérie en 2027 : le jeu d'évaluation, les hallucinations comptées, les régressions attrapées, et le seuil à partir duquel on livre",
    dek: "« Ça a l'air de marcher. » C'est ce qu'on dit après une démonstration de cinq questions choisies, un bon jour, et c'est ce qu'on regrette quand un client lit une réponse inventée. Ce guide décrit comment on prouve qu'une fonction IA marche avant de la mettre en production : soixante cas réels tirés de vos échanges, la bonne réponse écrite par votre équipe, trois façons de noter, les affirmations sans source comptées une par une, les régressions attrapées à chaque changement, et un seuil de livraison écrit avant le premier essai.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Évaluation de l’IA', 'Hallucinations', 'Jeu d’évaluation', 'Qualité', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Une IA se mesure comme le reste du logiciel se teste : avec un **jeu d'évaluation**. Soixante **cas réels**, pris dans vos vrais messages, documents et vocaux, en arabe, en français et en darija ; pour chacun, la **bonne réponse écrite par la personne de chez vous qui sait**. La moitié sont des cas courants ; l'autre moitié sont des pièges, des questions **hors périmètre** où la bonne réponse est « je ne sais pas », des données manquantes et des tentatives de contournement. Chaque réponse de l'IA est notée de **trois façons** : par code quand la réponse est un champ, par la règle « chaque affirmation a une source » qui compte les **hallucinations**, et par un modèle juge calé sur vos propres notes pour la forme. Le jeu est **rejoué à chaque changement** d'instructions, de documents ou de modèle : c'est ce qui attrape les **régressions**. Et un **seuil de livraison** est écrit avant le premier essai. Ce n'est pas un taux de précision unique : ce sont six mesures lues ensemble.",
      "Ce guide s'adresse à celui qui compare des prestataires et veut savoir quoi leur demander, au gérant qui a vu une démonstration convaincante et se demande ce qu'elle prouve, et à la direction informatique qui doit signer la mise en production. Il détaille la méthode que nos autres guides supposent, [l'IA dans l'application](" + L.ia + "), [la lecture de documents](" + L.lire + ") et [le déploiement privé](" + L.prive + "), et il répond à l'une des questions à poser avant de signer, listées dans [le guide sur le choix d'une société](" + L.choisir + ").",
    ],
    sections: [
      { heading: 'Ce que les chiffres disent', body: [
        "Les éditeurs de modèles disent eux-mêmes qu'il faut mesurer. Le guide d'évaluation d'OpenAI définit les évaluations comme des « tests structurés pour mesurer la performance d'un modèle », nécessaires parce que ces systèmes ne répondent pas deux fois de la même façon, et recommande un processus en cinq temps : définir l'objectif, constituer un jeu de données, définir les mesures, comparer les versions, et évaluer en continu à chaque changement. Il nomme aussi ce qu'il ne faut pas faire : des mesures génériques sans lien avec la tâche, un jeu qui ne ressemble pas au trafic réel, et les **évaluations « à l'impression »**, quand la stratégie se résume à « ça a l'air de marcher » ou qu'on attend d'avoir livré pour mesurer.",
        "La façon de construire le jeu est écrite aussi. La documentation d'Anthropic demande des cas qui **reflètent la distribution réelle de la tâche**, sans oublier les cas limites, données absentes ou hors sujet, entrées trop longues, demandes ambiguës sur lesquelles même des humains hésiteraient ; elle recommande d'**automatiser la notation** dès que possible, et préfère beaucoup de cas notés automatiquement à peu de cas notés à la main. Elle distingue trois notations : par code, la plus rapide et la plus fiable ; par un humain, la plus fine et la plus lente ; par un modèle juge, entre les deux, de préférence avec un modèle différent de celui qu'on évalue. Le guide d'OpenAI ajoute la condition : un juge automatique ne se généralise qu'une fois **calé sur des notes humaines**.",
        "Ce qui n'existe pas : un taux qui vaudrait pour vous. Les classements publics mesurent des tâches générales, en anglais le plus souvent ; ils ne disent rien d'une question posée en darija sur votre catalogue. Nous ne citons donc aucun « taux d'hallucination » de modèle : celui qui compte se mesure sur vos soixante cas, et il change avec vos documents. Les chiffres de la première figure, 47, 55 et 53 sur 60, sont un exemple construit pour montrer une régression, pas une mesure d'un projet ; ce qui n'est pas un exemple, c'est la méthode.",
      ] },
      { heading: 'Soixante cas, rejoués sur trois versions', body: [
        "Le jeu d'évaluation ne sert pas à obtenir une note : il sert à comparer deux versions sans se fier à une impression.",
      ], visual: 'tableau', after: [
        "**La version 1**, avec les premières instructions, réussit 47 cas sur 60 ; les treize échecs ne sont pas une mauvaise nouvelle, ils sont la liste de travail, et un tiers se trouvent dans les pièges. **La version 2**, instructions corrigées et documents mieux découpés, en réussit 55 ; les cinq échecs restants sont connus, listés, et montrés au client. **La version 3** garde les mêmes instructions avec un modèle plus petit, qui coûte moins par requête : 53 sur 60. Essayée à la main, elle répond très bien. Le tableau montre autre chose : deux cas que la version 2 réussissait échouent maintenant.",
        "**Ces deux carrés sont la raison d'être du jeu.** Sans lui, la version 3 serait partie en production parce qu'elle coûte moins, et deux types de demandes auraient commencé à recevoir de mauvaises réponses sans que personne le voie avant une réclamation. Avec lui, la décision est écrite d'avance : seuil de 54 sur 60 et aucune régression ; la version 2 est livrée, la version 3 attend. Le jeu est rejoué de la même façon le jour où un éditeur change la version de son modèle, ce qui arrive plusieurs fois par an, et il tourne en une commande, avec les tests décrits dans [le guide sur la livraison](" + L.livrer + ").",
      ] },
      { heading: "Construire le jeu d'évaluation, en six étapes", body: [
        "Six étapes, dont une que personne ne peut faire à votre place.",
      ], visual: 'etapes', after: [
        "**Le critère** dit ce que « marcher » veut dire pour cette fonction, en une phrase mesurable : la bonne date de livraison, la bonne catégorie, les bons champs, et aucune affirmation qui ne soit dans un document. **Les cas réels** sont soixante demandes tirées de vos vrais échanges, messages WhatsApp, e-mails, vocaux, documents, dans les trois langues ; des exemples inventés par nous mesureraient ce que nous croyons que vos clients demandent. **La bonne réponse** est écrite par la personne de chez vous qui sait, le gérant, le comptable, le chef d'agence ; c'est elle qui fait foi, et c'est l'étape qui demande votre temps : une heure ou deux, une fois.",
        "**Les cas difficiles** sont ajoutés exprès : pièges, questions hors périmètre, données manquantes, tentatives de contournement ; un jeu de cas faciles donne une belle note et ne prouve rien. **La notation** est automatisée autant que possible, par code pour les champs, par un modèle juge calé sur vos notes pour le reste, avec un échantillon relu à la main pour vérifier que le juge juge comme vous. **Le seuil** est écrit avant le premier essai : la note minimale, la règle sur les régressions, et la liste des cas critiques sur lesquels aucune erreur n'est acceptée. Écrit après, un seuil s'ajuste toujours à la note obtenue.",
      ] },
      { heading: 'Un cas, trois façons de le noter', body: [
        "Une réponse ne se note pas « bien » ou « mal » : elle se décompose, et chaque morceau a sa règle.",
      ], visual: 'verdict', after: [
        "**Le cas 37** est un piège : deux questions en une, « ma commande arrive quand, et je peux la retourner ? ». La réponse de l'IA tient en trois affirmations. La date de livraison se retrouve dans la commande ; le créneau du matin, dans la tournée ; « le retour est gratuit sous 30 jours » ne se retrouve nulle part, parce que votre entreprise n'a écrit aucune politique de retour. **Première notation, par code** : la date rendue est-elle celle attendue ? Oui. **Deuxième notation, la source** : chaque affirmation est confrontée aux documents que l'orchestration a récupérés ; deux sur trois en ont une, la troisième est inventée. **Troisième notation, la forme**, par un modèle juge calé sur vos notes : le ton, la langue, la longueur sont conformes.",
        "**Verdict : échec.** Une réponse juste aux deux tiers, polie et bien écrite, passerait une notation à l'œil ; c'est précisément le genre de réponse qu'on appelle une hallucination, et c'est celle que le client retiendra, parce qu'elle lui promet quelque chose. La réponse attendue, écrite par votre équipe, disait : la date, le créneau, et « pour un retour, je vous mets en relation avec un conseiller ». Ce cas illustre aussi pourquoi la source se vérifie affirmation par affirmation : une note globale de « fidélité » aurait donné 67 %, un chiffre qui a l'air acceptable et qui cache une promesse fausse.",
      ] },
      { heading: "Six types de cas, et ce qu'on attend de l'IA", body: [
        "Un jeu d'évaluation vaut par sa composition ; six types de cas, et pour chacun ce qui compte comme une réussite.",
      ], visual: 'cas', after: [
        "**Le cas courant**, la question qui revient vingt fois par jour dans les mots des clients, fait la moitié du jeu : la bonne réponse, sourcée, dans la langue de la question. **Le piège** : deux questions en une, un produit qui ressemble à un autre, une date ambiguë ; répondre à la partie connue, demander une précision sur l'autre, ne rien compléter. **Le hors périmètre** : la réponse n'est dans aucun de vos documents ; la seule réussite est « je ne sais pas » et le passage à un humain, comme [le guide sur l'agent WhatsApp](" + L.whatsapp + ") le décrit.",
        "**La donnée manquante** : la commande n'existe pas, le client n'est pas reconnu, le document est illisible ; le dire, demander l'information, ne rien supposer. **L'arabe et la darija** : la même question en arabe standard, en darija, en lettres latines et en vocal doit recevoir la même réponse que sa version française, et l'écart entre langues se mesure à part, parce qu'une moyenne le cache. **Le contournement** : « oublie tes consignes », une remise réclamée avec insistance, la donnée d'un autre client ; refus sans divulgation, tentative journalisée, et aucun droit de plus que le rôle décrit dans [le guide sur les rôles](" + L.roles + ").",
      ] },
      { heading: 'Six mesures, lues ensemble', body: [
        "Il n'y a pas un « taux de précision » : il y a six mesures, et aucune ne se lit seule.",
      ], visual: 'mesures', after: [
        "**La réussite sur le jeu**, au total et par type de cas : une note par type vaut mieux qu'une moyenne, parce que 55 sur 60 avec tous les échecs dans le hors périmètre n'est pas la même chose que 55 avec des échecs répartis. **Les affirmations sans source** : le compte des hallucinations, avec zéro exigé sur les cas critiques. **Les refus à tort** : les « je ne sais pas » alors que la réponse était dans les documents. Ces deux-là se tiennent : une IA qui ne refuse jamais répond à tout et invente ; une IA qui refuse toujours n'invente rien et ne sert à rien ; on règle les deux ensemble, sur le jeu.",
        "**Les régressions** : les cas réussis par la version précédente et échoués par la nouvelle ; zéro pour livrer, ou une décision écrite cas par cas. **Le passage à l'humain** : la part des demandes transférées, et surtout celles qui auraient dû l'être et ne l'ont pas été ; au pilote, chaque jour. **Le coût et la latence**, par version, à côté de la note et jamais seuls : une version qui coûte moins avec deux régressions n'est pas meilleure. C'est ce tableau, six lignes par version, qui est montré à chaque démonstration de deux semaines.",
      ] },
      { heading: "Vu ailleurs : les guides d'évaluation des éditeurs, et ce qui se transpose", body: [
        "Deux sources disent l'essentiel. Le guide d'OpenAI dit qu'évaluer à l'impression est un anti-modèle, qu'un jeu doit ressembler au trafic réel et qu'un juge automatique se cale sur des notes humaines ; ce qui se transpose, c'est que la mesure commence avant le code et ne s'arrête pas à la livraison. La documentation d'Anthropic dit de construire des cas propres à la tâche, d'y mettre les cas limites et d'automatiser la notation ; ce qui se transpose, c'est qu'on préfère soixante cas rejoués à chaque changement à six cas relus soigneusement une fois.",
        "Ce que ces sources ne disent pas : quelles sont les bonnes réponses chez vous, quels cas sont critiques, et quel seuil vous acceptez ; la deuxième semaine du projet y répond, avec la personne de votre équipe qui sait.",
      ] },
      { heading: "Les règles d'une IA mesurée", body: [
        "Six règles, écrites la première semaine. **Le seuil avant le premier essai.** **Des cas réels, pas des exemples inventés**, dans les trois langues. **La bonne réponse vient de vous** ; le modèle ne fait jamais foi. **Chaque affirmation a une source**, vérifiée une par une sur les cas critiques. **Chaque changement rejoue tout le jeu** : instructions, documents, modèle, version de l'éditeur. **Chaque erreur vue au pilote devient un cas** ; le jeu grandit et ne rétrécit jamais.",
        "Une septième règle porte sur le devis et sur le prestataire : « IA testée et validée » n'est pas une exigence, c'est une phrase ; l'exigence s'écrit « jeu d'évaluation de soixante cas réels dans les trois langues, bonnes réponses validées par le client, six types de cas présents, notation automatisée avec juge calé sur un échantillon noté à la main, seuil de livraison et règle sur les régressions écrits avant les essais, tableau des six mesures montré à chaque démonstration, jeu livré dans le dépôt du client », et elle se vérifie comme [le guide sur le cahier des charges](" + L.cdc + ") le recommande. À un prestataire qui montre une démonstration, la question à poser est : « sur combien de cas, écrits par qui, et quels sont ceux qui échouent ? »",
      ] },
      { heading: "Six fonctions, et ce qu'on y mesure d'abord", body: [
        "Six fonctions que nous construisons, et pour chacune la première mesure retenue.",
      ], list: [
        "**L'agent sur WhatsApp**, décrit dans [le guide dédié](" + L.whatsapp + "). Affirmations sans source et passages à l'humain manqués ; les contournements sont dans le jeu dès le départ.",
        "**La lecture de factures et de pièces**, décrite dans [le guide dédié](" + L.lire + "). Exactitude par champ, par code, sur soixante documents réels ; le total exige plus que le mode de règlement.",
        "**La recherche dans les documents.** Chaque réponse cite-t-elle le bon passage ; refus à tort quand le passage existe ; « je ne sais pas » quand il n'existe pas.",
        "**La recherche produit**, décrite dans [le guide sur la recherche](" + L.recherche + "). Deux cents requêtes réelles avec le bon produit attendu ; c'est le même principe sans modèle de langage.",
        "**Le tri des messages.** Catégorie exacte, par code ; la confusion entre « réclamation » et « question » comptée à part, parce qu'elle ne coûte pas la même chose.",
        "**Le modèle déployé sur site**, décrit dans [le guide sur le déploiement privé](" + L.prive + "). Le jeu choisit le modèle avant l'achat de la machine, et il est rejoué à chaque mise à jour.",
      ] },
      { heading: 'Le calendrier 2027', body: [
        "Le calendrier est celui d'une évaluation mise en place en huit semaines, pendant que la fonction se construit.",
      ], visual: 'calendrier', after: [
        "**La semaine 0 à 1** écrit le critère et le seuil : ce que « marcher » veut dire, la note minimale, la règle sur les régressions, les cas critiques ; signés. **La semaine 1 à 2** réunit les soixante cas et leurs réponses : les cas viennent de vos échanges, les réponses de votre équipe, et les six types sont présents. **La semaine 2 à 3** automatise la notation : graders par code, modèle juge calé sur vos notes, échantillon relu à la main ; à la fin de la semaine, le jeu tourne en une commande.",
        "**Les semaines 3 à 6** sont celles des versions : chaque changement d'instructions, de documents ou de modèle rejoue tout, et le tableau est montré à chaque démonstration, échecs compris. **Les semaines 6 à 8** sont le pilote : de vrais utilisateurs, et chaque erreur vue devient un cas ; le jeu passe de soixante à une centaine. Après la livraison, le jeu reste dans votre dépôt, et il est rejoué à chaque évolution et à chaque changement de version du modèle. C'est aussi lui qui rend possible un changement de prestataire : celui qui reprend sait, en une commande, ce qui marche.",
      ] },
      { heading: "Ce qui fait échouer la mesure d'une IA", body: [
        "Les évaluations que nous reprenons, quand il y en a, ont presque toujours échoué pour l'une de ces raisons.",
      ], list: [
        "**La démonstration à la place du jeu.** Cinq questions choisies par celui qui vend.",
        "**Des cas inventés.** Rédigés en français soigné, alors que les clients écrivent en darija.",
        "**Que des cas faciles.** Aucun hors périmètre ; l'IA n'a jamais eu à dire « je ne sais pas ».",
        "**La bonne réponse écrite par le prestataire.** Ou pire, par le modèle lui-même.",
        "**Une note globale.** Une moyenne de « fidélité » qui cache l'affirmation inventée.",
        "**Le seuil écrit après.** Ajusté à la note obtenue.",
        "**Le jeu abandonné après la livraison.** Le modèle change de version ; personne ne rejoue rien.",
      ] },
      { heading: 'Questions fréquentes', body: [
        "Les questions que nous recevons de gérants, de directions informatiques et d'équipes qui comparent des prestataires.",
      ], faq: [
        { q: 'Comment savoir si une IA marche vraiment avant de la mettre en production ?', a: "Par un jeu d'évaluation : soixante cas réels tirés de vos échanges, avec la bonne réponse écrite par votre équipe, dont la moitié sont des pièges, des questions hors périmètre et des tentatives de contournement. Chaque version de l'IA rejoue tout le jeu, et un seuil de livraison écrit avant les essais dit si elle part en production. Une démonstration de cinq questions ne prouve rien." },
        { q: 'Comment mesure-t-on les hallucinations ?', a: "Affirmation par affirmation : chaque phrase de la réponse est confrontée aux documents que le système a récupérés, et celles qui ne s'y trouvent pas sont comptées. On exige zéro sur les cas critiques. Une note globale de fidélité ne suffit pas : une réponse juste aux deux tiers contient une promesse inventée, et c'est celle que le client retient." },
        { q: 'Quel taux de précision peut-on attendre ?', a: "Aucun chiffre général ne vaut pour vous : les classements publics mesurent des tâches générales, souvent en anglais, pas une question en darija sur votre catalogue. Le taux qui compte se mesure sur vos soixante cas, par type de cas, et il se lit avec cinq autres mesures : affirmations sans source, refus à tort, régressions, passages à l'humain, coût et latence." },
        { q: 'Qui écrit les bonnes réponses ?', a: "Vous : la personne de votre équipe qui sait, le gérant, le comptable, le chef d'agence. C'est une heure ou deux, une fois, et c'est la seule étape que nous ne pouvons pas faire à votre place. Une bonne réponse écrite par le prestataire, ou par le modèle, mesure ce que le prestataire croit, pas ce que vos clients doivent entendre." },
        { q: 'Que se passe-t-il quand le modèle change de version ?', a: "Le jeu est rejoué, en une commande, et le tableau montre les régressions : les cas que l'ancienne version réussissait et que la nouvelle échoue. C'est la même procédure quand on change les instructions, les documents ou qu'on passe à un modèle moins coûteux. Sans jeu, un changement de version est un pari qu'on découvre par une réclamation." },
        { q: 'Que demander à un prestataire qui dit que son IA est fiable ?', a: "Sur combien de cas elle a été mesurée, qui a écrit les bonnes réponses, quels types de cas le jeu contient, comment les affirmations sans source sont comptées, quel était le seuil écrit avant les essais, et quels cas échouent encore. Un prestataire qui mesure peut montrer la liste de ses échecs ; celui qui montre seulement une démonstration n'en a pas." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Essayée à la main, la version 3 répond très bien ; c'est le tableau qui montre qu'elle a perdu deux cas." },
      { after: 3, text: "Une réponse juste aux deux tiers, polie et bien écrite, contient une promesse inventée, et c'est celle que le client retient." },
    ],
    cta: { eyebrow: 'Envoyez-nous dix questions que vos clients posent vraiment', title: "Gérant, direction informatique ou fondateur : nous construisons le jeu d'évaluation de votre fonction IA avec vous, et nous vous montrons le tableau à chaque démonstration, échecs compris", body: "Symloop construit des fonctions IA en production pour les entreprises en Algérie et les fondateurs installés en France, et les mesure avant de les livrer : soixante cas réels dans les trois langues, bonnes réponses écrites par votre équipe, six types de cas, notation automatisée avec juge calé sur vos notes, affirmations sans source comptées une par une, seuil de livraison écrit avant les essais, tableau des six mesures à chaque démonstration. Le jeu d'évaluation est livré dans votre dépôt, avec le code." },
    related: { label: 'À lire aussi', items: [
      { href: L.ia, kind: '2027', name: 'Mettre de l’IA dans une application : six fonctions' },
      { href: L.lire, kind: '2027', name: 'Lire les factures et les pièces par IA' },
      { href: L.prive, kind: '2027', name: 'Déployer un modèle d’IA sur ses serveurs' },
      { href: L.choisir, kind: '2027', name: 'Quelle société choisir : les preuves à demander' },
    ] },
  },
  en: {
    kind: 'AI evaluation · Measurement · Release · 2027', title: 'Proving an AI works before it faces your customers in Algeria in 2027: the evaluation set, hallucinations counted, regressions caught, and the threshold at which you release',
    dek: '“It seems to work.” That is what people say after a demo of five chosen questions on a good day, and what they regret when a customer reads an invented answer. This guide describes how you prove an AI function works before production: sixty real cases drawn from your exchanges, the right answer written by your team, three ways to grade, unsourced claims counted one by one, regressions caught at every change, and a release threshold written before the first trial.',
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['AI evaluation', 'Hallucinations', 'Evaluation set', 'Quality', 'Algeria 2027'],
    intro: [
      '**Short answer.** An AI is measured the way the rest of the software is tested: with an **evaluation set**. Sixty **real cases**, taken from your real messages, documents and voice notes, in Arabic, French and darija; for each, the **right answer written by the person on your side who knows**. Half are common cases; the other half are traps, **out-of-scope** questions where the right answer is “I don’t know”, missing data and bypass attempts. Each AI answer is graded **three ways**: by code when the answer is a field, by the rule “every claim has a source” which counts **hallucinations**, and by a judge model calibrated on your own grades for form. The set is **replayed at every change** of instructions, documents or model: that is what catches **regressions**. And a **release threshold** is written before the first trial. It is not a single accuracy rate: it is six measures read together.',
      'This guide is for whoever compares suppliers and wants to know what to ask them, the manager who saw a convincing demo and wonders what it proves, and the IT department that must sign off production. It details the method our other guides assume, [AI in the app](' + L.ia + '), [document reading](' + L.lire + ') and [private deployment](' + L.prive + '), and answers one of the questions to ask before signing, listed in [the guide on choosing a company](' + L.choisir + ').',
    ],
    sections: [
      { heading: 'What the figures say', body: [
        'Model vendors themselves say it must be measured. OpenAI’s evaluation guide defines evals as “structured tests for measuring a model’s performance”, needed because these systems do not answer the same way twice, and recommends a five-step process: define the objective, collect a dataset, define the metrics, compare versions, and evaluate continuously at every change. It also names what not to do: generic metrics unrelated to the task, a dataset that does not look like real traffic, and **“vibe-based evals”**, when the strategy comes down to “it seems like it’s working” or measuring waits until after shipping.',
        'How to build the set is written too. Anthropic’s documentation asks for cases that **mirror the real task distribution**, not forgetting edge cases, missing or irrelevant data, overly long inputs, ambiguous requests on which even humans would hesitate; it recommends **automating grading** whenever possible, and prefers many automatically graded cases to a few hand-graded ones. It distinguishes three gradings: by code, the fastest and most reliable; by a human, the finest and slowest; by a judge model, in between, preferably with a different model from the one being evaluated. OpenAI’s guide adds the condition: an automated judge is scaled up only once **calibrated on human grades**.',
        'What does not exist: a rate that would hold for you. Public leaderboards measure general tasks, mostly in English; they say nothing about a question asked in darija about your catalogue. So we quote no model “hallucination rate”: the one that counts is measured on your sixty cases, and it changes with your documents. The numbers in the first figure, 47, 55 and 53 out of 60, are an example built to show a regression, not a measurement from a project; what is not an example is the method.',
      ] },
      { heading: 'Sixty cases, replayed on three versions', body: [
        'The evaluation set is not for getting a score: it is for comparing two versions without trusting an impression.',
      ], visual: 'tableau', after: [
        '**Version 1**, with the first instructions, passes 47 cases out of 60; the thirteen failures are not bad news, they are the work list, and a third are in the traps. **Version 2**, instructions fixed and documents better chunked, passes 55; the five remaining failures are known, listed, and shown to the client. **Version 3** keeps the same instructions with a smaller model, which costs less per request: 53 out of 60. Tried by hand, it answers very well. The board shows something else: two cases version 2 passed now fail.',
        '**Those two squares are why the set exists.** Without it, version 3 would have gone to production because it costs less, and two kinds of request would have started getting wrong answers with nobody seeing it before a complaint. With it, the decision is written in advance: threshold of 54 out of 60 and no regression; version 2 is released, version 3 waits. The set is replayed the same way the day a vendor changes its model version, which happens several times a year, and it runs with one command, alongside the tests described in [the delivery guide](' + L.livrer + ').',
      ] },
      { heading: 'Building the evaluation set, in six steps', body: [
        'Six steps, one of which nobody can do for you.',
      ], visual: 'etapes', after: [
        '**The criterion** says what “working” means for this function, in one measurable sentence: the right delivery date, the right category, the right fields, and no claim that is not in a document. **The real cases** are sixty requests drawn from your real exchanges, WhatsApp messages, emails, voice notes, documents, in the three languages; examples invented by us would measure what we believe your customers ask. **The right answer** is written by the person on your side who knows, the manager, the accountant, the branch head; they prevail, and it is the step that needs your time: an hour or two, once.',
        '**The hard cases** are added on purpose: traps, out-of-scope questions, missing data, bypass attempts; a set of easy cases gives a fine score and proves nothing. **The grading** is automated as far as possible, by code for fields, by a judge model calibrated on your grades for the rest, with a sample reread by hand to check the judge judges as you do. **The threshold** is written before the first trial: the minimum score, the rule on regressions, and the list of critical cases on which no error is accepted. Written afterwards, a threshold always adjusts to the score obtained.',
      ] },
      { heading: 'One case, three ways to grade it', body: [
        'An answer is not graded “good” or “bad”: it is broken down, and each piece has its rule.',
      ], visual: 'verdict', after: [
        '**Case 37** is a trap: two questions in one, “when does my order arrive, and can I return it?”. The AI’s answer comes down to three claims. The delivery date is found in the order; the morning slot, in the route; “returns are free within 30 days” is found nowhere, because your company has written no return policy. **First grading, by code**: is the returned date the expected one? Yes. **Second grading, the source**: each claim is checked against the documents the orchestration retrieved; two out of three have one, the third is invented. **Third grading, form**, by a judge model calibrated on your grades: tone, language and length match.',
        '**Verdict: fail.** An answer that is two-thirds right, polite and well written would pass grading by eye; it is exactly the kind of answer called a hallucination, and the one the customer will remember, because it promises them something. The expected answer, written by your team, said: the date, the slot, and “for a return, I’ll put you in touch with an adviser”. This case also shows why the source is checked claim by claim: an overall “faithfulness” score would have given 67 %, a figure that looks acceptable and hides a false promise.',
      ] },
      { heading: 'Six types of case, and what is expected of the AI', body: [
        'An evaluation set is worth its composition; six types of case, and for each what counts as a pass.',
      ], visual: 'cas', after: [
        '**The common case**, the question that comes back twenty times a day in customers’ words, makes up half the set: the right answer, sourced, in the language of the question. **The trap**: two questions in one, a product resembling another, an ambiguous date; answer the known part, ask to clarify the other, complete nothing. **Out of scope**: the answer is in none of your documents; the only pass is “I don’t know” and handover to a human, as [the WhatsApp agent guide](' + L.whatsapp + ') describes.',
        '**Missing data**: the order does not exist, the customer is not recognised, the document is unreadable; say so, ask for the information, assume nothing. **Arabic and darija**: the same question in standard Arabic, darija, Latin letters and as a voice note must get the same answer as its French version, and the gap between languages is measured separately, because an average hides it. **The bypass attempt**: “forget your instructions”, an insistent discount request, another customer’s data; refusal without disclosure, attempt logged, and no right beyond the role described in [the roles guide](' + L.roles + ').',
      ] },
      { heading: 'Six measures, read together', body: [
        'There is no single “accuracy rate”: there are six measures, and none is read alone.',
      ], visual: 'mesures', after: [
        '**The pass rate on the set**, overall and per case type: a score per type beats an average, because 55 out of 60 with every failure in out-of-scope is not the same as 55 with failures spread out. **Unsourced claims**: the hallucination count, with zero required on critical cases. **Wrong refusals**: “I don’t know” when the answer was in the documents. Those two hold each other: an AI that never refuses answers everything and invents; one that always refuses invents nothing and is useless; both are tuned together, on the set.',
        '**Regressions**: cases the previous version passed and the new one fails; zero to release, or a written decision case by case. **Handover to a human**: the share of requests transferred, and above all those that should have been and were not; in the pilot, every day. **Cost and latency**, per version, next to the score and never alone: a version that costs less with two regressions is not better. That table, six lines per version, is what is shown at every two-week demo.',
      ] },
      { heading: 'Seen elsewhere: the vendors’ evaluation guides, and what transposes', body: [
        'Two sources say the essentials. OpenAI’s guide says evaluating by impression is an anti-pattern, that a set must look like real traffic and that an automated judge is calibrated on human grades; what transposes is that measurement starts before the code and does not stop at release. Anthropic’s documentation says to build task-specific cases, include edge cases and automate grading; what transposes is that sixty cases replayed at every change beat six cases reread carefully once.',
        'What these sources do not say: what the right answers are at your company, which cases are critical, and what threshold you accept; the project’s second week answers that, with the person on your team who knows.',
      ] },
      { heading: 'The rules of a measured AI', body: [
        'Six rules, written in the first week. **The threshold before the first trial.** **Real cases, not invented examples**, in the three languages. **The right answer comes from you**; the model never prevails. **Every claim has a source**, checked one by one on critical cases. **Every change replays the whole set**: instructions, documents, model, vendor version. **Every error seen in the pilot becomes a case**; the set grows and never shrinks.',
        'A seventh rule concerns the quote and the supplier: “AI tested and validated” is not a requirement, it is a sentence; the requirement reads “evaluation set of sixty real cases in the three languages, right answers validated by the client, six case types present, automated grading with a judge calibrated on a hand-graded sample, release threshold and regression rule written before trials, table of the six measures shown at every demo, set delivered in the client’s repository”, and it is checked as [the specification guide](' + L.cdc + ') recommends. To a supplier showing a demo, the question to ask is: “on how many cases, written by whom, and which ones fail?”',
      ] },
      { heading: 'Six functions, and what is measured first', body: [
        'Six functions we build, and for each the first measure chosen.',
      ], list: [
        '**The agent on WhatsApp**, described in [the dedicated guide](' + L.whatsapp + '). Unsourced claims and missed handovers; bypass attempts are in the set from the start.',
        '**Reading invoices and documents**, described in [the dedicated guide](' + L.lire + '). Accuracy per field, by code, on sixty real documents; the total requires more than the payment method.',
        '**Search in documents.** Does each answer cite the right passage; wrong refusals when the passage exists; “I don’t know” when it does not.',
        '**Product search**, described in [the search guide](' + L.recherche + '). Two hundred real queries with the expected product; the same principle without a language model.',
        '**Sorting messages.** Exact category, by code; confusion between “complaint” and “question” counted separately, because it does not cost the same.',
        '**The model deployed on site**, described in [the private deployment guide](' + L.prive + '). The set chooses the model before the machine is bought, and is replayed at every update.',
      ] },
      { heading: 'The 2027 calendar', body: [
        'The calendar is that of an evaluation set up in eight weeks, while the function is being built.',
      ], visual: 'calendrier', after: [
        '**Week 0 to 1** writes the criterion and the threshold: what “working” means, the minimum score, the rule on regressions, the critical cases; signed. **Week 1 to 2** gathers the sixty cases and their answers: the cases come from your exchanges, the answers from your team, and all six types are present. **Week 2 to 3** automates grading: code graders, judge model calibrated on your grades, sample reread by hand; by the end of the week the set runs with one command.',
        '**Weeks 3 to 6** are the versions: every change of instructions, documents or model replays everything, and the board is shown at every demo, failures included. **Weeks 6 to 8** are the pilot: real users, and every error seen becomes a case; the set grows from sixty to about a hundred. After release, the set stays in your repository, and it is replayed at every change and every model version change. It is also what makes changing supplier possible: whoever takes over knows, with one command, what works.',
      ] },
      { heading: 'What makes measuring an AI fail', body: [
        'The evaluations we take over, when there are any, almost always failed for one of these reasons.',
      ], list: [
        '**The demo instead of the set.** Five questions chosen by the seller.',
        '**Invented cases.** Written in careful French, while customers write in darija.',
        '**Only easy cases.** No out-of-scope; the AI never had to say “I don’t know”.',
        '**The right answer written by the supplier.** Or worse, by the model itself.',
        '**An overall score.** An average “faithfulness” that hides the invented claim.',
        '**The threshold written afterwards.** Adjusted to the score obtained.',
        '**The set abandoned after release.** The model changes version; nobody replays anything.',
      ] },
      { heading: 'Frequently asked questions', body: [
        'The questions we receive from managers, IT departments and teams comparing suppliers.',
      ], faq: [
        { q: 'How do we know an AI really works before putting it into production?', a: 'With an evaluation set: sixty real cases drawn from your exchanges, with the right answer written by your team, half of them traps, out-of-scope questions and bypass attempts. Every version of the AI replays the whole set, and a release threshold written before the trials says whether it goes to production. A demo of five questions proves nothing.' },
        { q: 'How are hallucinations measured?', a: 'Claim by claim: each sentence of the answer is checked against the documents the system retrieved, and those not found there are counted. Zero is required on critical cases. An overall faithfulness score is not enough: an answer that is two-thirds right contains an invented promise, and it is the one the customer remembers.' },
        { q: 'What accuracy rate can we expect?', a: 'No general figure holds for you: public leaderboards measure general tasks, often in English, not a question in darija about your catalogue. The rate that counts is measured on your sixty cases, per case type, and it is read with five other measures: unsourced claims, wrong refusals, regressions, handovers, cost and latency.' },
        { q: 'Who writes the right answers?', a: 'You: the person on your team who knows, the manager, the accountant, the branch head. It is an hour or two, once, and it is the only step we cannot do for you. A right answer written by the supplier, or by the model, measures what the supplier believes, not what your customers should hear.' },
        { q: 'What happens when the model changes version?', a: 'The set is replayed, with one command, and the board shows the regressions: cases the old version passed and the new one fails. It is the same procedure when instructions or documents change, or when moving to a less costly model. Without a set, a version change is a bet you discover through a complaint.' },
        { q: 'What should we ask a supplier who says their AI is reliable?', a: 'On how many cases it was measured, who wrote the right answers, which case types the set contains, how unsourced claims are counted, what threshold was written before the trials, and which cases still fail. A supplier who measures can show the list of failures; one who only shows a demo has none.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'Tried by hand, version 3 answers very well; the board is what shows it lost two cases.' },
      { after: 3, text: 'An answer that is two-thirds right, polite and well written contains an invented promise, and it is the one the customer remembers.' },
    ],
    cta: { eyebrow: 'Send us ten questions your customers really ask', title: 'Manager, IT department or founder: we build your AI function’s evaluation set with you, and show you the board at every demo, failures included', body: 'Symloop builds AI functions in production for companies in Algeria and founders settled in France, and measures them before releasing: sixty real cases in the three languages, right answers written by your team, six case types, automated grading with a judge calibrated on your grades, unsourced claims counted one by one, release threshold written before the trials, table of the six measures at every demo. The evaluation set is delivered in your repository, with the code.' },
    related: { label: 'Read next', items: [
      { href: L.ia, kind: '2027', name: 'AI in the app: six functions' },
      { href: L.lire, kind: '2027', name: 'Reading invoices and documents with AI' },
      { href: L.prive, kind: '2027', name: 'Deploying an AI model on your servers' },
      { href: L.choisir, kind: '2027', name: 'Which company to choose: the proofs to ask for' },
    ] },
  },
  ar: {
    kind: 'تقييم الذكاء الاصطناعي · القياس · التسليم · 2027', title: 'إثبات أن الذكاء الاصطناعي يعمل قبل وضعه أمام زبائنكم في الجزائر سنة 2027: مجموعة التقييم، عدّ الهلوسات، التقاط التراجعات، والعتبة التي نسلّم عندها',
    dek: '«يبدو أنه يعمل.» هذا ما يُقال بعد عرض من خمسة أسئلة مختارة في يوم جيد، وما يُندم عليه حين يقرأ زبون جواباً مخترَعاً. يصف هذا الدليل كيف نثبت أن وظيفة ذكاء اصطناعي تعمل قبل الإنتاج: ستون حالة حقيقية من تبادلاتكم، الجواب الصحيح يكتبه فريقكم، ثلاث طرق للتنقيط، الادعاءات بلا مصدر تُعدّ واحداً واحداً، التراجعات تُلتقط مع كل تغيير، وعتبة تسليم تُكتب قبل أول تجربة.',
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['تقييم الذكاء الاصطناعي', 'الهلوسات', 'مجموعة التقييم', 'الجودة', 'الجزائر 2027'],
    intro: [
      '**الجواب القصير.** يُقاس الذكاء الاصطناعي كما يُختبر باقي البرنامج: بـ **مجموعة تقييم**. ستون **حالة حقيقية** مأخوذة من رسائلكم ووثائقكم وصوتياتكم، بالعربية والفرنسية والدارجة؛ ولكل منها **الجواب الصحيح يكتبه من يعرف عندكم**. نصفها حالات شائعة؛ والنصف الآخر فخاخ وأسئلة **خارج النطاق** جوابها الصحيح «لا أعرف» وبيانات ناقصة ومحاولات تحايل. وكل جواب من الذكاء الاصطناعي يُنقَّط بـ **ثلاث طرق**: بالكود حين يكون الجواب حقلاً، وبقاعدة «لكل ادعاء مصدر» التي تعدّ **الهلوسات**، وبنموذج حَكَم مضبوط على تنقيطكم للشكل. وتُعاد المجموعة **مع كل تغيير** في التعليمات أو الوثائق أو النموذج: وهذا ما يلتقط **التراجعات**. و**عتبة تسليم** تُكتب قبل أول تجربة. ليست نسبة دقة وحيدة: بل ستة قياسات تُقرأ معاً.',
      'هذا الدليل موجّه إلى من يقارن مقدّمي الخدمة ويريد أن يعرف ما يسألهم، وإلى المسيّر الذي رأى عرضاً مقنعاً ويتساءل ما الذي يثبته، وإلى مديرية الإعلام الآلي التي يجب أن توقّع على الإنتاج. يفصّل المنهج الذي تفترضه أدلتنا الأخرى، [الذكاء الاصطناعي في التطبيق](' + L.ia + ') و[قراءة الوثائق](' + L.lire + ') و[النشر الخاص](' + L.prive + ')، ويجيب عن أحد الأسئلة التي تُطرح قبل التوقيع والمسرودة في [دليل اختيار شركة](' + L.choisir + ').',
    ],
    sections: [
      { heading: 'ما تقوله الأرقام', body: [
        'ناشرو النماذج أنفسهم يقولون إنه يجب القياس. دليل التقييم من OpenAI يعرّف التقييمات بأنها «اختبارات منظَّمة لقياس أداء نموذج»، ضرورية لأن هذه الأنظمة لا تجيب مرتين بالطريقة نفسها، ويوصي بمسار من خمس مراحل: تحديد الهدف، تكوين مجموعة بيانات، تحديد القياسات، مقارنة النسخ، والتقييم المستمر مع كل تغيير. ويسمّي أيضاً ما لا يجب فعله: قياسات عامة لا علاقة لها بالمهمة، مجموعة لا تشبه الحركة الحقيقية، و**التقييمات «بالانطباع»**، حين تُختصر الاستراتيجية في «يبدو أنه يعمل» أو يُنتظر التسليم للقياس.',
        'وطريقة بناء المجموعة مكتوبة أيضاً. تطلب وثائق Anthropic حالات **تعكس التوزيع الحقيقي للمهمة**، دون نسيان الحالات القصوى، بيانات غائبة أو خارج الموضوع، مدخلات طويلة جداً، طلبات ملتبسة يتردد فيها البشر أنفسهم؛ وتوصي بـ **أتمتة التنقيط** ما أمكن، وتفضّل حالات كثيرة منقَّطة آلياً على حالات قليلة منقَّطة يدوياً. وتميّز ثلاثة تنقيطات: بالكود، الأسرع والأوثق؛ بإنسان، الأدق والأبطأ؛ وبنموذج حَكَم بينهما، ويُفضَّل أن يكون نموذجاً غير الذي يُقيَّم. ويضيف دليل OpenAI الشرط: الحَكَم الآلي لا يُعمَّم إلا بعد **ضبطه على تنقيط بشري**.',
        'وما لا يوجد: نسبة تصح عندكم. الترتيبات العلنية تقيس مهام عامة، بالإنجليزية غالباً؛ ولا تقول شيئاً عن سؤال بالدارجة عن كتالوجكم. فلا نذكر أي «نسبة هلوسة» لنموذج: التي تهم تُقاس على حالاتكم الستين وتتغير مع وثائقكم. وأرقام الشكل الأول، 47 و55 و53 من 60، مثال مبنيّ لإظهار تراجع لا قياس من مشروع؛ وما ليس مثالاً هو المنهج.',
      ] },
      { heading: 'ستون حالة، تُعاد على ثلاث نسخ', body: [
        'مجموعة التقييم ليست للحصول على درجة: بل لمقارنة نسختين دون الوثوق بانطباع.',
      ], visual: 'tableau', after: [
        '**النسخة 1**، بالتعليمات الأولى، تنجح في 47 حالة من 60؛ والإخفاقات الثلاثة عشر ليست خبراً سيئاً بل قائمة العمل، وثلثها في الفخاخ. **النسخة 2**، بتعليمات مصحَّحة ووثائق مقطَّعة أفضل، تنجح في 55؛ والإخفاقات الخمسة الباقية معروفة ومسرودة ومعروضة على الزبون. **النسخة 3** تحتفظ بالتعليمات نفسها بنموذج أصغر أقل كلفة لكل طلب: 53 من 60. وحين تُجرَّب يدوياً تجيب جيداً جداً. واللوحة تُظهر شيئاً آخر: حالتان كانت النسخة 2 تنجح فيهما تفشلان الآن.',
        '**هذان المربعان هما سبب وجود المجموعة.** بدونها لذهبت النسخة 3 إلى الإنتاج لأنها أقل كلفة، ولبدأ نوعان من الطلبات يتلقيان أجوبة خاطئة دون أن يرى أحد قبل شكوى. وبها، القرار مكتوب مسبقاً: عتبة 54 من 60 وبلا تراجع؛ فتُسلَّم النسخة 2 وتنتظر النسخة 3. وتُعاد المجموعة بالطريقة نفسها يوم يغيّر ناشر نسخة نموذجه، وهذا يحدث عدة مرات في السنة، وتعمل بأمر واحد، مع الاختبارات الموصوفة في [دليل التسليم](' + L.livrer + ').',
      ] },
      { heading: 'بناء مجموعة التقييم، في ست خطوات', body: [
        'ست خطوات، واحدة منها لا يستطيع أحد فعلها مكانكم.',
      ], visual: 'etapes', after: [
        '**المعيار** يقول ما معنى «يعمل» لهذه الوظيفة، في جملة قابلة للقياس: تاريخ التسليم الصحيح، الفئة الصحيحة، الحقول الصحيحة، ولا ادعاء ليس في وثيقة. **الحالات الحقيقية** ستون طلباً من تبادلاتكم الحقيقية، رسائل WhatsApp وبريد وصوتيات ووثائق، باللغات الثلاث؛ وأمثلة نخترعها نحن ستقيس ما نظن أن زبائنكم يسألونه. **الجواب الصحيح** يكتبه من يعرف عندكم، المسيّر أو المحاسب أو رئيس الوكالة؛ هو المرجع، وهي الخطوة التي تطلب وقتكم: ساعة أو ساعتان، مرة واحدة.',
        '**الحالات الصعبة** تُضاف عمداً: فخاخ، أسئلة خارج النطاق، بيانات ناقصة، محاولات تحايل؛ ومجموعة حالات سهلة تعطي درجة جميلة ولا تثبت شيئاً. **التنقيط** يُؤتمت ما أمكن، بالكود للحقول وبنموذج حَكَم مضبوط على تنقيطكم للباقي، مع عينة تُراجَع يدوياً للتحقق من أن الحَكَم يحكم مثلكم. **العتبة** تُكتب قبل أول تجربة: الدرجة الدنيا، قاعدة التراجعات، وقائمة الحالات الحرجة التي لا يُقبل فيها خطأ. والعتبة التي تُكتب بعدها تتكيف دائماً مع الدرجة المحصَّلة.',
      ] },
      { heading: 'حالة واحدة، ثلاث طرق لتنقيطها', body: [
        'الجواب لا يُنقَّط «جيداً» أو «سيئاً»: بل يُفكَّك، ولكل جزء قاعدته.',
      ], visual: 'verdict', after: [
        '**الحالة 37** فخ: سؤالان في واحد، «طلبيتي وقتاش توصل، ونقدر نرجّعها؟». جواب الذكاء الاصطناعي ثلاثة ادعاءات. تاريخ التسليم موجود في الطلبية؛ فترة الصباح في الجولة؛ و«الإرجاع مجاني خلال 30 يوماً» ليس في أي مكان، لأن شركتكم لم تكتب أي سياسة إرجاع. **التنقيط الأول، بالكود**: هل التاريخ المُعاد هو المنتظر؟ نعم. **التنقيط الثاني، المصدر**: كل ادعاء يُقابَل بالوثائق التي استرجعها التنسيق؛ اثنان من ثلاثة لهما مصدر والثالث مخترَع. **التنقيط الثالث، الشكل**، بنموذج حَكَم مضبوط على تنقيطكم: النبرة واللغة والطول مطابقة.',
        '**الحكم: إخفاق.** جواب صحيح بثلثيه، مهذب وحسن الصياغة، يمرّ في تنقيط بالنظر؛ وهو بالضبط نوع الجواب المسمّى هلوسة، وهو ما سيتذكره الزبون لأنه يعده بشيء. والجواب المنتظر، الذي كتبه فريقكم، كان: التاريخ، والفترة، و«للإرجاع أوصلكم بمستشار». وتبيّن هذه الحالة أيضاً لماذا يُتحقَّق من المصدر ادعاءً ادعاءً: درجة إجمالية «للأمانة» كانت ستعطي 67 %، رقم يبدو مقبولاً ويخفي وعداً كاذباً.',
      ] },
      { heading: 'ستة أنواع من الحالات، وما يُنتظر من الذكاء الاصطناعي', body: [
        'قيمة مجموعة التقييم في تركيبها؛ ستة أنواع من الحالات، ولكل منها ما يُحسب نجاحاً.',
      ], visual: 'cas', after: [
        '**الحالة الشائعة**، السؤال الذي يعود عشرين مرة في اليوم بكلمات الزبائن، تشكّل نصف المجموعة: الجواب الصحيح بمصدره بلغة السؤال. **الفخ**: سؤالان في واحد، منتج يشبه آخر، تاريخ ملتبس؛ الجواب عن الجزء المعروف وطلب توضيح للآخر وعدم إكمال شيء. **خارج النطاق**: الجواب ليس في أي من وثائقكم؛ والنجاح الوحيد «لا أعرف» والتحويل إلى إنسان، كما يصف [دليل وكيل WhatsApp](' + L.whatsapp + ').',
        '**المعطى الناقص**: الطلبية غير موجودة، الزبون غير معروف، الوثيقة غير مقروءة؛ قول ذلك وطلب المعلومة وعدم الافتراض. **العربية والدارجة**: السؤال نفسه بالفصحى وبالدارجة وبأحرف لاتينية وصوتياً يجب أن ينال الجواب نفسه كنسخته الفرنسية، والفارق بين اللغات يُقاس على حدة لأن المتوسط يخفيه. **محاولة التحايل**: «انسَ تعليماتك»، تخفيض يُطلب بإلحاح، معطى زبون آخر؛ رفض دون إفشاء، ومحاولة تُسجَّل، ولا حق فوق الدور الموصوف في [دليل الأدوار](' + L.roles + ').',
      ] },
      { heading: 'ستة قياسات، تُقرأ معاً', body: [
        'لا توجد «نسبة دقة» واحدة: بل ستة قياسات، ولا واحد يُقرأ وحده.',
      ], visual: 'mesures', after: [
        '**النجاح على المجموعة**، إجمالاً ولكل نوع حالة: درجة لكل نوع خير من متوسط، لأن 55 من 60 بكل الإخفاقات في خارج النطاق ليست كـ 55 بإخفاقات موزعة. **الادعاءات بلا مصدر**: عدّ الهلوسات، وصفر مطلوب في الحالات الحرجة. **الرفض الخاطئ**: «لا أعرف» والجواب كان في الوثائق. وهذان يمسك أحدهما الآخر: ذكاء اصطناعي لا يرفض أبداً يجيب عن كل شيء ويخترع؛ ومن يرفض دائماً لا يخترع شيئاً ولا يفيد؛ ويُضبطان معاً على المجموعة.',
        '**التراجعات**: حالات نجحت فيها النسخة السابقة وفشلت الجديدة؛ صفر للتسليم أو قرار مكتوب حالةً حالة. **التحويل إلى إنسان**: حصة الطلبات المحوَّلة، وخصوصاً ما كان يجب تحويله ولم يُحوَّل؛ في التجريب كل يوم. **التكلفة والكمون**، لكل نسخة، بجانب الدرجة لا وحدهما: نسخة أقل كلفة بتراجعين ليست أفضل. وهذا الجدول، ستة أسطر لكل نسخة، هو ما يُعرض في كل عرض كل أسبوعين.',
      ] },
      { heading: 'رأيناه في مكان آخر: أدلة التقييم عند الناشرين، وما ينتقل', body: [
        'مصدران يقولان الجوهر. يقول دليل OpenAI إن التقييم بالانطباع نمط مضاد، وإن المجموعة يجب أن تشبه الحركة الحقيقية، وإن الحَكَم الآلي يُضبط على تنقيط بشري؛ وما ينتقل هو أن القياس يبدأ قبل الكود ولا يتوقف عند التسليم. وتقول وثائق Anthropic ببناء حالات خاصة بالمهمة وإدراج الحالات القصوى وأتمتة التنقيط؛ وما ينتقل هو أن ستين حالة تُعاد مع كل تغيير خير من ست حالات تُراجَع بعناية مرة واحدة.',
        'وما لا تقوله هذه المصادر: ما الأجوبة الصحيحة عندكم، وأي الحالات حرجة، وأي عتبة تقبلون؛ والأسبوع الثاني من المشروع يجيب، مع من يعرف في فريقكم.',
      ] },
      { heading: 'قواعد ذكاء اصطناعي مقيس', body: [
        'ست قواعد تُكتب في الأسبوع الأول. **العتبة قبل أول تجربة.** **حالات حقيقية لا أمثلة مخترَعة**، باللغات الثلاث. **الجواب الصحيح يأتي منكم**؛ والنموذج ليس مرجعاً أبداً. **لكل ادعاء مصدر**، يُتحقَّق واحداً واحداً في الحالات الحرجة. **كل تغيير يعيد المجموعة كلها**: تعليمات، وثائق، نموذج، نسخة الناشر. **كل خطأ يُرى في التجريب يصير حالة**؛ المجموعة تكبر ولا تصغر أبداً.',
        'قاعدة سابعة تخص عرض السعر ومقدّم الخدمة: «ذكاء اصطناعي مختبَر ومصادَق عليه» ليس متطلباً بل جملة؛ المتطلب يُكتب «مجموعة تقييم من ستين حالة حقيقية باللغات الثلاث، أجوبة صحيحة يصادق عليها الزبون، الأنواع الستة حاضرة، تنقيط آلي بحَكَم مضبوط على عينة منقَّطة يدوياً، عتبة تسليم وقاعدة تراجعات تُكتبان قبل التجارب، جدول القياسات الستة يُعرض في كل عرض، المجموعة تُسلَّم في مستودع الزبون»، ويُتحقَّق منه كما يوصي [دليل دفتر الشروط](' + L.cdc + '). ولمقدّم خدمة يعرض عرضاً تجريبياً، السؤال هو: «على كم حالة، ومن كتبها، وأيّها تفشل؟»',
      ] },
      { heading: 'ست وظائف، وما نقيسه فيها أولاً', body: [
        'ست وظائف نبنيها، ولكل منها أول قياس يُختار.',
      ], list: [
        '**الوكيل على WhatsApp**، الموصوف في [الدليل المخصص](' + L.whatsapp + '). الادعاءات بلا مصدر والتحويلات الفائتة؛ ومحاولات التحايل في المجموعة منذ البداية.',
        '**قراءة الفواتير والوثائق**، الموصوفة في [الدليل المخصص](' + L.lire + '). الدقة لكل حقل، بالكود، على ستين وثيقة حقيقية؛ والمجموع يشترط أكثر من طريقة الدفع.',
        '**البحث في الوثائق.** هل يستشهد كل جواب بالمقطع الصحيح؛ الرفض الخاطئ حين يوجد المقطع؛ و«لا أعرف» حين لا يوجد.',
        '**البحث عن المنتجات**، الموصوف في [دليل البحث](' + L.recherche + '). مائتا طلب حقيقي بالمنتج المنتظر؛ المبدأ نفسه بلا نموذج لغوي.',
        '**فرز الرسائل.** الفئة الدقيقة، بالكود؛ والخلط بين «شكوى» و«سؤال» يُعدّ على حدة لأنه لا يكلّف الشيء نفسه.',
        '**النموذج المنشور في الموقع**، الموصوف في [دليل النشر الخاص](' + L.prive + '). المجموعة تختار النموذج قبل شراء الآلة، وتُعاد مع كل تحديث.',
      ] },
      { heading: 'تقويم 2027', body: [
        'التقويم تقويم تقييم يُوضع في ثمانية أسابيع، والوظيفة تُبنى.',
      ], visual: 'calendrier', after: [
        '**الأسبوع 0 إلى 1** يكتب المعيار والعتبة: ما معنى «يعمل»، الدرجة الدنيا، قاعدة التراجعات، الحالات الحرجة؛ موقَّعة. **الأسبوع 1 إلى 2** يجمع الحالات الستين وأجوبتها: الحالات من تبادلاتكم، والأجوبة من فريقكم، والأنواع الستة حاضرة. **الأسبوع 2 إلى 3** يؤتمت التنقيط: منقِّطات بالكود، نموذج حَكَم مضبوط على تنقيطكم، عينة تُراجَع يدوياً؛ وفي نهاية الأسبوع تعمل المجموعة بأمر واحد.',
        '**الأسابيع 3 إلى 6** هي أسابيع النسخ: كل تغيير في التعليمات أو الوثائق أو النموذج يعيد كل شيء، واللوحة تُعرض في كل عرض بإخفاقاتها. **الأسبوعان 6 إلى 8** هما التجريب: مستعملون حقيقيون، وكل خطأ يُرى يصير حالة؛ والمجموعة تكبر من ستين إلى نحو مائة. وبعد التسليم تبقى المجموعة في مستودعكم، وتُعاد مع كل تطور ومع كل تغيير في نسخة النموذج. وهي أيضاً ما يجعل تغيير مقدّم الخدمة ممكناً: من يستلم يعرف بأمر واحد ما الذي يعمل.',
      ] },
      { heading: 'ما يُفشل قياس الذكاء الاصطناعي', body: [
        'التقييمات التي نستلمها، حين توجد، فشلت دائماً تقريباً لأحد هذه الأسباب.',
      ], list: [
        '**العرض مكان المجموعة.** خمسة أسئلة يختارها البائع.',
        '**حالات مخترَعة.** مكتوبة بفرنسية متقنة، والزبائن يكتبون بالدارجة.',
        '**حالات سهلة فقط.** لا خارج النطاق؛ ولم يُضطر الذكاء الاصطناعي قط إلى قول «لا أعرف».',
        '**الجواب الصحيح يكتبه مقدّم الخدمة.** أو أسوأ، النموذج نفسه.',
        '**درجة إجمالية.** متوسط «أمانة» يخفي الادعاء المخترَع.',
        '**العتبة تُكتب بعدها.** مكيَّفة مع الدرجة المحصَّلة.',
        '**المجموعة تُهجر بعد التسليم.** يغيّر النموذج نسخته؛ ولا أحد يعيد شيئاً.',
      ] },
      { heading: 'أسئلة شائعة', body: [
        'الأسئلة التي نتلقاها من مسيّرين ومديريات إعلام آلي وفرق تقارن مقدّمي الخدمة.',
      ], faq: [
        { q: 'كيف نعرف أن الذكاء الاصطناعي يعمل فعلاً قبل وضعه في الإنتاج؟', a: 'بمجموعة تقييم: ستون حالة حقيقية من تبادلاتكم، بالجواب الصحيح الذي يكتبه فريقكم، نصفها فخاخ وأسئلة خارج النطاق ومحاولات تحايل. كل نسخة من الذكاء الاصطناعي تعيد المجموعة كلها، وعتبة تسليم تُكتب قبل التجارب تقول هل تذهب إلى الإنتاج. وعرض من خمسة أسئلة لا يثبت شيئاً.' },
        { q: 'كيف تُقاس الهلوسات؟', a: 'ادعاءً ادعاءً: كل جملة في الجواب تُقابَل بالوثائق التي استرجعها النظام، وما لا يوجد فيها يُعدّ. والمطلوب صفر في الحالات الحرجة. ودرجة أمانة إجمالية لا تكفي: جواب صحيح بثلثيه فيه وعد مخترَع، وهو ما يتذكره الزبون.' },
        { q: 'أي نسبة دقة يمكن انتظارها؟', a: 'لا رقم عام يصح عندكم: الترتيبات العلنية تقيس مهام عامة، بالإنجليزية غالباً، لا سؤالاً بالدارجة عن كتالوجكم. النسبة التي تهم تُقاس على حالاتكم الستين، لكل نوع حالة، وتُقرأ مع خمسة قياسات أخرى: ادعاءات بلا مصدر، رفض خاطئ، تراجعات، تحويلات، تكلفة وكمون.' },
        { q: 'من يكتب الأجوبة الصحيحة؟', a: 'أنتم: من يعرف في فريقكم، المسيّر أو المحاسب أو رئيس الوكالة. ساعة أو ساعتان، مرة واحدة، وهي الخطوة الوحيدة التي لا نستطيع فعلها مكانكم. وجواب صحيح يكتبه مقدّم الخدمة أو النموذج يقيس ما يظنه مقدّم الخدمة لا ما يجب أن يسمعه زبائنكم.' },
        { q: 'ماذا يحدث حين يغيّر النموذج نسخته؟', a: 'تُعاد المجموعة بأمر واحد، واللوحة تُظهر التراجعات: الحالات التي نجحت فيها النسخة القديمة وفشلت الجديدة. والإجراء نفسه حين تتغير التعليمات أو الوثائق أو ننتقل إلى نموذج أقل كلفة. وبلا مجموعة، تغيير النسخة رهان يُكتشف بشكوى.' },
        { q: 'ماذا نسأل مقدّم خدمة يقول إن ذكاءه الاصطناعي موثوق؟', a: 'على كم حالة قيس، ومن كتب الأجوبة الصحيحة، وأي أنواع الحالات في المجموعة، وكيف تُعدّ الادعاءات بلا مصدر، وما العتبة المكتوبة قبل التجارب، وأي الحالات ما زالت تفشل. مقدّم خدمة يقيس يستطيع عرض قائمة إخفاقاته؛ ومن يعرض عرضاً تجريبياً فقط لا قائمة له.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'حين تُجرَّب يدوياً تجيب النسخة 3 جيداً جداً؛ واللوحة هي ما يُظهر أنها خسرت حالتين.' },
      { after: 3, text: 'جواب صحيح بثلثيه، مهذب وحسن الصياغة، فيه وعد مخترَع، وهو ما يتذكره الزبون.' },
    ],
    cta: { eyebrow: 'أرسلوا لنا عشرة أسئلة يطرحها زبائنكم فعلاً', title: 'مسيّر أو مديرية إعلام آلي أو مؤسس: نبني مجموعة تقييم وظيفتكم معكم، ونعرض عليكم اللوحة في كل عرض، بإخفاقاتها', body: 'تبني Symloop وظائف ذكاء اصطناعي في الإنتاج للشركات في الجزائر والمؤسسين المقيمين في فرنسا، وتقيسها قبل تسليمها: ستون حالة حقيقية باللغات الثلاث، أجوبة صحيحة يكتبها فريقكم، ستة أنواع من الحالات، تنقيط آلي بحَكَم مضبوط على تنقيطكم، ادعاءات بلا مصدر تُعدّ واحداً واحداً، عتبة تسليم تُكتب قبل التجارب، وجدول القياسات الستة في كل عرض. ومجموعة التقييم تُسلَّم في مستودعكم مع الكود.' },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.ia, kind: '2027', name: 'الذكاء الاصطناعي في التطبيق: ست وظائف' },
      { href: L.lire, kind: '2027', name: 'قراءة الفواتير والوثائق بالذكاء الاصطناعي' },
      { href: L.prive, kind: '2027', name: 'نشر نموذج ذكاء اصطناعي على خوادمكم' },
      { href: L.choisir, kind: '2027', name: 'أي شركة نختار: الأدلة التي تُطلب' },
    ] },
  },
};

const KEYWORDS = "évaluer une ia avant la production algérie 2027, jeu d'évaluation ia, mesurer hallucinations ia, taux d'erreur ia entreprise, tester un chatbot avant mise en production, régression modèle ia, comment savoir si l'ia est fiable, prestataire ia algérie preuve, llm evaluation set, how to evaluate ai before production, قياس موثوقية الذكاء الاصطناعي الجزائر, تقييم الذكاء الاصطناعي الهلوسات";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
