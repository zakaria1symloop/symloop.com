import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/application-en-arabe-et-en-francais-algerie-2027-droite-a-gauche-chiffres-dates-polices-traductions-darija-ce-qu-on-construit.mjs';

const SLUG = 'application-en-arabe-et-en-francais-algerie-2027-droite-a-gauche-chiffres-dates-polices-traductions-darija-ce-qu-on-construit';
const FIGURES = ['miroir', 'couches', 'pieges', 'chaine', 'etapes', 'calendrier'];
const DATE = '2026-11-10';

const L = {
  recherche: '/blog/recherche-dans-une-application-algerie-2027-catalogue-arabe-francais-darija-fautes-synonymes-classement-zero-resultat/',
  notif: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  whatsapp: '/blog/agent-ia-whatsapp-entreprise-algerie-2027-architecture-fenetre-24-heures-templates-passage-humain-cout-message/',
  mobile: '/blog/mettre-a-jour-une-application-mobile-sans-la-casser-algerie-2027-compatibilite-api-deploiement-progressif-mise-a-jour-forcee-correctif/',
  cdc: '/blog/cahier-des-charges-application-plateforme-algerie-2027-quoi-ecrire-comparer-trois-devis/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  reprendre: '/blog/reprendre-ses-donnees-excel-ancien-logiciel-nouvelle-application-algerie-2027-migration-nettoyage-doublons-repetition-bascule-sans-perte/',
  portail: '/blog/portail-de-commande-b2b-grossiste-algerie-2027-detaillants-commandent-eux-memes-prix-credit-heure-limite/',
  commerce: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/',
  caisse: '/blog/caisse-commerce-algerie-2027-paiement-qr-code-carte-tpe-rapprochement/',
  cours: '/blog/creer-plateforme-cours-soutien-scolaire-algerie-2027-bac-cours-arabe-diaspora/',
  omra: '/blog/agence-omra-algerie-2027-dossier-pelerin-paiement-par-tranches-suivi-groupes/',
  lente: '/blog/application-lente-reseau-faible-algerie-2027-ce-qu-on-construit-pour-qu-elle-soit-rapide-poids-des-ecrans-cache-pagination-index-mesure/',
  service: '/services/mobile/',
};

const CONTENT = {
  fr: {
    kind: 'Arabe · Français · Darija · Interface · 2027', title: "Une application en arabe et en français en Algérie en 2027 : ce qu'on construit pour que les deux langues marchent vraiment, droite à gauche, chiffres, dates, polices, traductions et darija",
    dek: "« Mes employés veulent l'application en arabe, mes clients en France la veulent en français, et la version arabe que l'ancien prestataire a livrée a les boutons à l'envers et les numéros de téléphone coupés en deux. » Ce guide décrit ce qu'on construit pour qu'une application marche vraiment dans les deux langues, et parle darija dans ses messages : une mise en page écrite en début et fin qui se retourne là où il faut et pas ailleurs, des chiffres et des dates à l'algérienne, des phrases traduites par clé avec les six pluriels de l'arabe, des valeurs isolées pour que le + d'un numéro ne saute pas de côté, des polices qui ont les deux écritures, et une relecture par ceux qui lisent, à chaque démonstration et pas à la fin.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Arabe', 'Français', 'Darija', 'Interface', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Une application en deux langues se décide la première semaine, pas à la fin. On écrit d'abord **où va chaque langue** : l'interface en arabe et en français, les messages WhatsApp en **darija** écrite en lettres latines, les documents bilingues. Puis on construit cinq choses. **Les textes** : une clé par phrase, des variables nommées, et les **six formes de pluriel** de l'arabe là où le français en a deux ; jamais une phrase assemblée par morceaux. **La mise en page** : écrite en **début et fin**, jamais en gauche et droite, pour qu'elle se retourne seule ; une liste de ce qui se retourne, flèches et listes, et de ce qui ne se retourne pas, horloges et chiffres. **Les données** : la locale arabe d'Algérie écrit les **mêmes chiffres qu'en français**, avec une virgule décimale ; les dates suivent la locale ; la base et l'API restent toujours en chiffres occidentaux. **Les valeurs insérées**, noms et numéros, sont **isolées** pour que le + de +213 ne saute pas de côté. Et **la relecture** par une personne qui lit l'arabe, sur le téléphone, à chaque démonstration. Six semaines, et la version arabe est visible dès la troisième.",
      "Ce guide s'adresse au gérant dont les employés lisent l'arabe et les fournisseurs le français, au fondateur installé en France qui parle à ses clients en darija sur WhatsApp et à sa banque en français, et au responsable qui doit comparer un devis « bilingue » avec un autre. Il ne redit pas comment une recherche comprend l'arabe et la darija, décrit dans [le guide sur la recherche](" + L.recherche + "), ni comment un agent parle sur WhatsApp, décrit dans [le guide dédié](" + L.whatsapp + ") ; il décrit ce qui se construit pour que l'interface, les messages et les documents soient justes dans les deux langues, et il prolonge [notre page sur les applications mobiles](" + L.service + ").",
    ],
    sections: [
      { heading: 'Ce que les référentiels disent', body: [
        "La locale a une définition publique, et elle surprend souvent. Le référentiel de données de locale de l'Unicode, celui que suivent les téléphones et les navigateurs, donne pour l'arabe d'Algérie un système de numération par défaut « latn », c'est-à-dire les chiffres 0 à 9 que vous lisez ici, et non les chiffres dits indiens utilisés au Machrek ; il donne la virgule comme séparateur décimal et le point comme séparateur de milliers, de sorte que douze mille quatre cents dinars s'écrivent « 12.400,00 » en arabe algérien. Ce que cela impose : une application réglée sur « arabe » générique affichera des chiffres que vos employés ne lisent pas au quotidien ; la locale doit être l'arabe d'Algérie, et les chiffres les mêmes dans les deux langues.",
        "La mise en page qui se retourne a des règles écrites par les plateformes. La documentation d'Android demande de déclarer que l'application supporte le sens droite à gauche, de remplacer partout « gauche » et « droite » par « début » et « fin », et prévient que les icônes à retourner se déclarent une par une, parce que « si le fait de refléter votre image change son interprétation », il ne faut pas la refléter : une horloge, un lecteur, un logo ne se retournent pas. Elle décrit aussi le piège des valeurs insérées : un numéro qui commence par « + » ou une adresse qui commence par un chiffre, placés dans une phrase arabe, voient leur début sauter de l'autre côté, et la solution est d'envelopper chaque valeur insérée dans des marques de direction. Ce que cela impose : la liste de ce qui se retourne est écrite la première semaine, et chaque variable d'une phrase est isolée avant d'y entrer.",
        "La même documentation signale un piège invisible : formater un nombre avec la locale de l'appareil pour le mettre dans une requête ou une adresse produit, sur un téléphone réglé en arabe du Machrek, des chiffres que la base ne comprend pas ; ce qui est lu par une machine se formate toujours en chiffres occidentaux. Et depuis Android 13, l'utilisateur peut choisir la langue de chaque application indépendamment de celle du téléphone, ce qui compte pour une entreprise où la caisse est en arabe et la comptabilité en français sur le même appareil. Ce que nous n'avons pas trouvé : une étude publique des langues préférées par les utilisateurs d'applications d'entreprise en Algérie ; ce que nous voyons sur nos projets, c'est l'arabe au comptoir et dans l'entrepôt, le français dans les bureaux et les documents, et la darija dans les messages, et nous le disons comme une observation.",
      ] },
      { heading: 'Le même écran, en français et en arabe', body: [
        "La version arabe ne se comprend pas sur un principe mais sur un écran, dessiné deux fois.",
      ], visual: 'miroir', after: [
        "**Ce qui se retourne.** La flèche de retour pointe vers la droite, parce que « revenir » en arabe est vers la droite. Les libellés de la liste passent du côté « début », qui est la droite, et les montants du côté « fin », qui est la gauche. La barre de progression se remplit depuis la droite. Tout cela se produit seul si la mise en page a été écrite en début et fin ; rien ne se produit, ou tout se retourne y compris ce qui ne devrait pas, si elle a été écrite en gauche et droite et « adaptée » après coup.",
        "**Ce qui ne se retourne pas.** L'horloge, parce qu'une horloge retournée est fausse. Les chiffres, parce que la locale arabe d'Algérie utilise les mêmes que le français : 11.760,00 en arabe, 11 760,00 en français, la différence est dans les séparateurs, pas dans les chiffres. Le numéro de téléphone, isolé pour que « +213 » reste au début et que les groupes de chiffres gardent leur ordre. La date, 10/11/2026, identique dans les deux langues parce que c'est la locale qui le dit. Et le logo. La liste de ce qui se retourne et de ce qui ne se retourne pas tient sur une page, et elle est écrite la première semaine, avant la première maquette.",
      ] },
      { heading: 'Une application en deux langues, en cinq couches', body: [
        "Derrière cet écran, cinq couches, et celle où l'on gagne ou perd la version arabe.",
      ], visual: 'couches', after: [
        "**Les textes et traductions** : une clé par phrase, des variables nommées, les pluriels de chaque langue, et trois fichiers, français, arabe, et darija pour les messages ; aucune phrase construite par morceaux dans le code, aucun texte en dur. **La mise en page** : tout est écrit en début et fin ; les flèches de navigation et les listes se retournent, les horloges, lecteurs et chiffres non ; les icônes qui se reflètent sont déclarées une par une ; une seule maquette, testée dans les deux sens dès la première semaine. **Les données** : chiffres, dates, monnaie et tri selon la locale ; une recherche qui comprend l'arabe sans points diacritiques et les deux écritures d'un nom, selon [le guide sur la recherche](" + L.recherche + ") ; ce que la base et l'API stockent ne change jamais de langue.",
        "**La saisie** : clavier arabe et français, téléphone normalisé en +213 quelle que soit la façon dont il a été tapé, noms stockés dans les deux écritures quand il le faut, adresses et wilayas en deux langues ; un client saisi en arabe au comptoir doit être retrouvé en français depuis la France, et c'est la règle que [le guide sur la reprise de données](" + L.reprendre + ") applique aux anciens fichiers. **Le processus** : chaque écran relu par une personne qui lit l'arabe, des captures dans les deux sens dans la recette, et les textes livrés au traducteur avec leur contexte ; la version arabe n'est pas « la traduction de la fin », elle est livrée à chaque démonstration, selon [le guide sur la livraison](" + L.livrer + ").",
      ] },
      { heading: "Six pièges d'une application en deux langues", body: [
        "Six pièges que nous trouvons sur presque toutes les versions arabes que nous reprenons, et ce qu'on construit contre chacun.",
      ], visual: 'pieges', after: [
        "**La phrase construite par morceaux** : « Commande » + n + « livrée » marche en français et donne en arabe un ordre de mots faux et un pluriel faux ; une clé par phrase, et les six formes de pluriel de l'arabe dans le fichier de langue. **Le numéro de téléphone coupé** : +213 661 23 45 67 dans une phrase arabe voit son + et ses groupes changer de place ; chaque valeur insérée est isolée avant d'entrer. **Tout se retourne, ou rien** : soit les boutons et l'horloge sont à l'envers, soit rien n'est retourné et l'arabe est aligné à gauche ; mise en page en début et fin, et liste écrite de ce qui se retourne.",
        "**Les chiffres qui changent** : montants en chiffres indiens, ou point et virgule inversés entre les langues ; locale arabe d'Algérie, chiffres occidentaux, virgule décimale, point des milliers, et la base toujours en chiffres occidentaux. **La date ambiguë** : 03/11 lu « 3 novembre » par l'un et « 11 mars » par l'autre, et des noms de mois du Machrek que personne ne lit à Sétif ; format par locale, mois en toutes lettres dans les documents, noms de mois algériens en arabe. **La police sans arabe** : des carrés à la place des lettres sur un Android de 2019, ou une police arabe qui jure avec la française ; une famille qui couvre les deux écritures, embarquée dans l'application et les PDF, testée sur le téléphone ancien que [le guide sur la vitesse](" + L.lente + ") impose déjà.",
      ] },
      { heading: 'Une phrase, de la clé de traduction au téléphone du client', body: [
        "Une phrase traverse six étapes avant d'atteindre un téléphone, et chacune est une règle, pas un geste.",
      ], visual: 'chaine', after: [
        "**La clé** : une phrase est une clé, order.delivered, avec des variables nommées, le nombre, le nom, la date ; jamais une concaténation. **Les trois fichiers** : français, arabe, et darija pour les messages WhatsApp ; le fichier arabe porte les six formes de pluriel, zéro, un, deux, peu, beaucoup, autre, parce que « 3 colis » et « 11 colis » ne se disent pas avec la même forme, et « 2 colis » a la sienne, le duel. **La règle de pluriel** est appliquée par la langue, pas par le développeur : pour trois, le français choisit sa forme « autre » et l'arabe sa forme « peu ».",
        "**Le formatage** par la locale : chiffres occidentaux, virgule décimale, point des milliers en arabe d'Algérie, date au format local, et jamais « 11/10 » pour le 10 novembre. **L'isolation** : le nom et le numéro sont enveloppés avant d'entrer dans la phrase, sinon le + et les chiffres sautent de côté dans une phrase arabe. **Le rendu** dans trois registres : « 3 colis livrés à Karim Benali le 10/11/2026 » pour le gérant, la même en arabe pour l'employé, et « 3 colis wslou l Karim » en darija pour le client, écrite en lettres latines parce que c'est ainsi que vos clients l'écrivent, par les gabarits décrits dans [le guide sur les notifications](" + L.notif + ").",
      ] },
      { heading: 'Vu ailleurs : les référentiels de locale et des plateformes, et ce qui se transpose', body: [
        "Deux sources disent l'essentiel. Le référentiel de locale de l'Unicode dit que l'arabe d'Algérie s'écrit avec les chiffres occidentaux, une virgule décimale et un point des milliers ; ce qui se transpose, c'est que la locale est ar-DZ, pas « arabe », et que les chiffres sont les mêmes dans les deux langues de l'application. La documentation d'Android dit d'écrire la mise en page en début et fin, de déclarer les icônes à refléter une par une, d'isoler les valeurs insérées dans les phrases, et de ne jamais formater avec la locale ce qu'une machine lira ; ce qui se transpose, c'est la liste de ce qui se retourne, l'isolation systématique des variables, et la séparation entre ce que l'utilisateur voit et ce que la base stocke.",
        "Ce que ces sources ne disent pas : quelle langue vos employés lisent au comptoir, quelle langue vos clients écrivent sur WhatsApp, et quels documents doivent être bilingues ; la première semaine du projet y répond, et c'est le gérant qui signe la liste.",
      ] },
      { heading: 'Livrer la version arabe, en six étapes', body: [
        "La version arabe n'est pas une traduction qu'on ajoute : c'est un parcours de six étapes qui commence avant la première maquette.",
      ], visual: 'etapes', after: [
        "**Décider où va chaque langue** : interface en arabe et en français, messages en darija, documents bilingues ; écrit et signé. **Extraire les textes en clés** : variables nommées, pluriels, et un contexte pour le traducteur ; il ne reste plus un texte en dur. **Maquetter dans les deux sens** : début et fin, liste de ce qui se retourne, polices à deux écritures ; c'est l'étape qui coûte une heure la première semaine et des semaines si on la saute.",
        "**Traduire avec le contexte** : une capture par écran, pour que le traducteur voie où va la phrase et choisisse le bon mot. **Relire sur le téléphone** : par une personne qui lit l'arabe, avec des captures dans les deux sens dans la recette ; c'est l'étape qu'on saute toujours, et c'est pour cela que les boutons sont à l'envers. **Livrer à chaque démonstration** : les deux langues ensemble, jamais la française d'abord et l'arabe « après », quand plus personne n'a le temps.",
      ] },
      { heading: "Les règles d'une application qui marche dans les deux langues", body: [
        "Six règles, écrites la première semaine. **Où va chaque langue** est écrit : interface, messages, documents. **Une clé par phrase**, des variables nommées, les pluriels de chaque langue. **La mise en page en début et fin**, et la liste de ce qui se retourne. **La locale arabe d'Algérie** pour les chiffres et les dates ; la base en chiffres occidentaux. **Chaque valeur insérée est isolée.** **La version arabe est relue sur le téléphone** par une personne qui lit l'arabe, à chaque démonstration.",
        "Une septième règle porte sur le devis : « application bilingue arabe-français » n'est pas une exigence, c'est une phrase ; l'exigence s'écrit « langues par usage écrites : interface, messages, documents ; textes en clés avec variables nommées et pluriels par langue, aucun texte en dur ; mise en page en début et fin avec liste des éléments reflétés ; locale ar-DZ pour chiffres, dates, monnaie, tri ; isolation bidirectionnelle des valeurs insérées ; polices couvrant les deux écritures dans l'application et les PDF ; relecture par un lecteur d'arabe et captures dans les deux sens à chaque recette ; messages WhatsApp en darija », et elle se vérifie comme [le guide sur le cahier des charges](" + L.cdc + ") le recommande. Un devis qui écrit « traduction en arabe incluse » a prévu de traduire à la fin, et c'est la version avec les boutons à l'envers.",
      ] },
      { heading: 'Six applications, et leur question de langue', body: [
        "Six applications que nous construisons souvent, et pour chacune la décision de langue qui comptait le plus.",
      ], list: [
        "**La caisse en magasin**, décrite dans [le guide dédié](" + L.caisse + "). Interface en arabe pour les vendeurs, tickets bilingues, chiffres identiques dans les deux langues ; le total est le même que le client lise d'un côté ou de l'autre.",
        "**Le portail de commande B2B**, décrit dans [le guide dédié](" + L.portail + "). Les détaillants commandent en arabe, le grossiste lit en français ; les noms de produits sont stockés dans les deux écritures et la recherche comprend les deux.",
        "**Le commerce piloté depuis la France**, décrit dans [le guide dédié](" + L.commerce + "). Le fondateur lit le tableau de bord en français, l'équipe à Alger travaille en arabe ; même application, même données, langue par utilisateur.",
        "**La plateforme de cours**, décrite dans [le guide dédié](" + L.cours + "). Le parent en France reçoit ses messages en français, l'élève en Algérie travaille en arabe, et le rappel WhatsApp part en darija.",
        "**L'agence Omra**, décrite dans [le guide dédié](" + L.omra + "). Les documents des pèlerins sont bilingues, avec les dates en toutes lettres dans les deux calendriers, parce qu'une date ambiguë sur un visa n'est pas une option.",
        "**L'application mobile mise à jour**, décrite dans [le guide dédié](" + L.mobile + "). Un nouveau texte part par les fichiers de langue servis par l'API, sans passer par les stores, dans les trois registres à la fois.",
      ] },
      { heading: 'Le calendrier 2027', body: [
        "Le calendrier est celui d'une application livrée dans les deux langues en six semaines, et la version arabe est visible dès la troisième.",
      ], visual: 'calendrier', after: [
        "**La semaine 0 à 1** écrit les langues et les règles : quelle langue pour l'interface, les messages et les documents ; chiffres, dates et monnaie selon la locale arabe d'Algérie ; la liste de ce qui se retourne et de ce qui ne se retourne pas ; signé par le gérant. **La semaine 1 à 2** extrait les textes en clés, avec variables nommées, pluriels et contexte ; il ne reste plus un texte en dur dans le code. **La semaine 2 à 3** écrit la mise en page en début et fin, déclare les icônes à refléter, embarque les polices à deux écritures, et montre le premier écran en arabe : c'est la semaine où la version arabe devient réelle.",
        "**La semaine 3 à 4** traite les données et la saisie : formats par locale, tri et recherche arabes, téléphone normalisé, noms en deux écritures. **La semaine 4 à 5** est la relecture : chaque écran relu sur le téléphone par un lecteur d'arabe, captures dans les deux sens dans la recette, corrections. **La semaine 5 à 6** livre les documents PDF bilingues avec les deux écritures et les gabarits WhatsApp en darija, et met en production. Chaque lot est démontré dans les deux langues, comme [le guide sur la livraison](" + L.livrer + ") le décrit : la version arabe n'est jamais « après ».",
      ] },
      { heading: 'Ce qui fait échouer une application en deux langues', body: [
        "Les versions arabes que nous reprenons ont presque toujours échoué pour l'une de ces raisons.",
      ], list: [
        "**Traduite à la fin.** La mise en page est en gauche et droite, et la retourner coûte des semaines ; on livre « sans le miroir ».",
        "**Des phrases assemblées par morceaux.** L'ordre des mots arabes est faux, et personne ne l'a lu.",
        "**L'arabe générique.** Des chiffres indiens que les employés ne lisent pas, des noms de mois du Machrek.",
        "**Les valeurs non isolées.** Le + des numéros et les chiffres des adresses sautent de côté.",
        "**Tout retourné.** L'horloge, le lecteur et le logo aussi ; l'application a l'air cassée.",
        "**Une police sans arabe.** Des carrés sur les téléphones de 2019, que le développeur n'a pas.",
        "**Personne ne lit l'arabe dans l'équipe.** La version est livrée sans qu'un seul écran ait été relu.",
      ] },
      { heading: 'Questions fréquentes', body: [
        "Les questions que nous recevons de gérants, de fondateurs et de responsables informatiques.",
      ], faq: [
        { q: 'Pourquoi la version arabe de notre application a-t-elle les boutons à l’envers ?', a: "Parce que la mise en page a été écrite en gauche et droite, puis traduite et « retournée » à la fin. Une mise en page écrite en début et fin se retourne seule et proprement ; et une liste écrite de ce qui se retourne, flèches et listes, et de ce qui ne se retourne pas, horloges, chiffres et logos, évite que tout soit retourné ou rien. Cela se décide la première semaine, avant la première maquette." },
        { q: 'Les chiffres doivent-ils être en chiffres arabes dans la version arabe ?', a: "En Algérie, non : la locale arabe d'Algérie du référentiel Unicode utilise les chiffres occidentaux, 0 à 9, avec une virgule décimale et un point des milliers. Une application réglée sur « arabe » générique afficherait les chiffres dits indiens, que vos employés ne lisent pas au quotidien. Les chiffres sont donc les mêmes dans les deux langues ; seuls les séparateurs changent." },
        { q: 'Pourquoi les numéros de téléphone sont-ils coupés dans les messages en arabe ?', a: "Parce qu'un numéro qui commence par « + », inséré dans une phrase écrite de droite à gauche, voit son début et ses groupes de chiffres changer de place : le texte ne sait pas où le numéro commence. La solution est d'envelopper chaque valeur insérée, numéro, nom, adresse, dans des marques de direction avant de la placer dans la phrase, systématiquement, dans le code qui rend les textes." },
        { q: 'Comment gère-t-on la darija ?', a: "Comme une troisième langue, pour les messages seulement : les gabarits WhatsApp et SMS ont une version en darija écrite en lettres latines, parce que c'est ainsi que vos clients l'écrivent, avec les mêmes variables et la même isolation que les autres. L'interface reste en arabe et en français ; la recherche, elle, comprend les trois, comme le guide sur la recherche le décrit." },
        { q: 'Faut-il tout traduire deux fois à chaque changement ?', a: "Chaque phrase nouvelle est une clé ajoutée aux trois fichiers de langue, avec son contexte pour le traducteur, et elle part par l'API sans passer par les stores. Une version qui ajoute dix phrases ajoute dix clés ; le traducteur les voit avec une capture de l'écran où elles vont, et un lecteur d'arabe relit l'écran avant la démonstration. C'est le même rythme que le reste de la livraison." },
        { q: 'Combien de temps pour une application dans les deux langues ?', a: "Six semaines quand les deux langues sont décidées au départ : une pour les langues et les règles, une pour les textes en clés, une pour la mise en page dans les deux sens, une pour les données et la saisie, une pour la relecture, une pour les documents et les messages. Ajouter l'arabe à une application construite en français seulement coûte plus que ces six semaines, parce qu'il faut réécrire la mise en page." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "La locale arabe d'Algérie écrit les mêmes chiffres que le français ; ce qui change, ce sont les séparateurs, le sens de la page, et l'ordre des mots." },
      { after: 4, text: "Une phrase est une clé avec des variables, traduite trois fois, pluralisée par la langue, formatée par la locale, et isolée là où une valeur entre." },
    ],
    cta: { eyebrow: "Envoyez-nous une capture de votre version arabe", title: "Gérant en Algérie ou fondateur en France : nous construisons votre application en arabe et en français, avec des messages en darija, relue par ceux qui la lisent, livrée dans les deux langues à chaque démonstration", body: "Symloop construit et reprend des applications en production pour les entreprises en Algérie et les fondateurs installés en France : langues par usage écrites, textes en clés avec pluriels par langue, mise en page en début et fin avec liste des éléments reflétés, locale arabe d'Algérie pour chiffres et dates, isolation des valeurs insérées, polices à deux écritures dans l'application et les PDF, recherche et saisie en deux écritures, gabarits WhatsApp en darija, relecture par un lecteur d'arabe à chaque recette. Code et fichiers de langue dans votre dépôt ; une démonstration toutes les deux semaines." },
    related: { label: 'À lire aussi', items: [
      { href: L.recherche, kind: '2027', name: 'La recherche dans une application : arabe, français, darija' },
      { href: L.notif, kind: '2027', name: 'Notifications : quel canal pour quel message' },
      { href: L.whatsapp, kind: '2027', name: 'Un agent IA sur WhatsApp' },
      { href: L.mobile, kind: '2027', name: 'Mettre à jour une application mobile sans la casser' },
    ] },
  },
  en: {
    kind: 'Arabic · French · Darija · Interface · 2027', title: 'An application in Arabic and French in Algeria in 2027: what gets built so that both languages truly work, right to left, digits, dates, fonts, translations and darija',
    dek: '“My employees want the app in Arabic, my customers in France want it in French, and the Arabic version the previous supplier delivered has the buttons backwards and the phone numbers cut in two.” This guide describes what gets built so that an application truly works in both languages, and speaks darija in its messages: a layout written in start and end that mirrors where it should and nowhere else, Algerian digits and dates, sentences translated by key with Arabic’s six plurals, isolated values so that the + of a number does not jump sides, fonts that carry both scripts, and a review by the people who read them, at every demo and not at the end.',
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Arabic', 'French', 'Darija', 'Interface', 'Algeria 2027'],
    intro: [
      '**Short answer.** A two-language application is decided in week one, not at the end. You first write **where each language goes**: the interface in Arabic and French, WhatsApp messages in **darija** written in Latin letters, bilingual documents. Then you build five things. **Texts**: one key per sentence, named variables, and Arabic’s **six plural forms** where French has two; never a sentence assembled from pieces. **Layout**: written in **start and end**, never left and right, so that it mirrors on its own; a list of what mirrors, arrows and lists, and what does not, clocks and digits. **Data**: the Algerian Arabic locale writes the **same digits as French**, with a comma decimal; dates follow the locale; database and API always stay in Western digits. **Inserted values**, names and numbers, are **isolated** so that the + of +213 does not jump sides. And **review** by someone who reads Arabic, on the phone, at every demo. Six weeks, and the Arabic version is visible from the third.',
      'This guide is for the manager whose employees read Arabic and whose suppliers read French, the founder settled in France who speaks to customers in darija on WhatsApp and to the bank in French, and the person who must compare one “bilingual” quote with another. It does not repeat how search understands Arabic and darija, described in [the search guide](' + L.recherche + '), nor how an agent speaks on WhatsApp, described in [the dedicated guide](' + L.whatsapp + '); it describes what is built so that the interface, messages and documents are right in both languages, and extends [our page on mobile applications](' + L.service + ').',
    ],
    sections: [
      { heading: 'What the references say', body: [
        'The locale has a public definition, and it often surprises. The Unicode locale data repository, the one phones and browsers follow, gives Arabic for Algeria a default numbering system of “latn”, that is the digits 0 to 9 you are reading here, not the so-called Eastern Arabic digits used in the Mashreq; it gives the comma as decimal separator and the dot as thousands separator, so that twelve thousand four hundred dinars is written “12.400,00” in Algerian Arabic. What this imposes: an app set to generic “Arabic” will show digits your employees do not read every day; the locale must be Arabic for Algeria, and the digits the same in both languages.',
        'The mirroring layout has rules written by the platforms. Android’s documentation asks to declare that the app supports right-to-left, to replace “left” and “right” everywhere with “start” and “end”, and warns that icons to mirror are declared one by one, because “if reflecting your drawable changes its interpretation”, it must not be reflected: a clock, a player, a logo do not mirror. It also describes the trap of inserted values: a number starting with “+” or an address starting with a digit, placed in an Arabic sentence, see their beginning jump to the other side, and the fix is to wrap each inserted value in direction marks. What this imposes: the list of what mirrors is written in week one, and every variable of a sentence is isolated before entering it.',
        'The same documentation flags an invisible trap: formatting a number with the device locale to put it in a query or an address produces, on a phone set to Mashreq Arabic, digits the database does not understand; what a machine reads is always formatted in Western digits. And since Android 13, the user can choose each app’s language independently of the phone’s, which matters for a company where the till is in Arabic and accounting in French on the same device. What we did not find: a public study of the languages preferred by business-app users in Algeria; what we see on our projects is Arabic at the counter and in the warehouse, French in the offices and documents, and darija in messages, and we say so as an observation.',
      ] },
      { heading: 'The same screen, in French and Arabic', body: [
        'The Arabic version is not understood on a principle but on a screen, drawn twice.',
      ], visual: 'miroir', after: [
        '**What mirrors.** The back arrow points right, because “going back” in Arabic is to the right. List labels move to the “start” side, which is the right, and amounts to the “end” side, which is the left. The progress bar fills from the right. All of this happens on its own if the layout was written in start and end; nothing happens, or everything mirrors including what should not, if it was written in left and right and “adapted” afterwards.',
        '**What does not mirror.** The clock, because a mirrored clock is wrong. The digits, because the Algerian Arabic locale uses the same ones as French: 11.760,00 in Arabic, 11 760,00 in French, the difference is in the separators, not the digits. The phone number, isolated so that “+213” stays at the start and digit groups keep their order. The date, 10/11/2026, identical in both languages because the locale says so. And the logo. The list of what mirrors and what does not fits on a page, and it is written in week one, before the first mock-up.',
      ] },
      { heading: 'An application in two languages, in five layers', body: [
        'Behind that screen, five layers, and the one where the Arabic version is won or lost.',
      ], visual: 'couches', after: [
        '**Texts and translations**: one key per sentence, named variables, each language’s plurals, and three files, French, Arabic, and darija for messages; no sentence built from pieces in the code, no hard-coded text. **Layout**: everything written in start and end; navigation arrows and lists mirror, clocks, players and digits do not; icons that reflect are declared one by one; a single mock-up, tested in both directions from week one. **Data**: digits, dates, currency and sorting per locale; search that understands Arabic without diacritics and both spellings of a name, per [the search guide](' + L.recherche + '); what the database and API store never changes language.',
        '**Input**: Arabic and French keyboards, phone normalised to +213 however it was typed, names stored in both scripts when needed, addresses and wilayas in two languages; a customer entered in Arabic at the counter must be found in French from France, which is the rule [the data migration guide](' + L.reprendre + ') applies to old files. **Process**: every screen reviewed by someone who reads Arabic, screenshots in both directions in acceptance, and texts delivered to the translator with their context; the Arabic version is not “the translation at the end”, it is delivered at every demo, per [the delivery guide](' + L.livrer + ').',
      ] },
      { heading: 'Six traps of a two-language application', body: [
        'Six traps we find on almost every Arabic version we take over, and what gets built against each.',
      ], visual: 'pieges', after: [
        '**The sentence built from pieces**: “Order” + n + “delivered” works in French and gives in Arabic a wrong word order and a wrong plural; one key per sentence, and Arabic’s six plural forms in the language file. **The broken phone number**: +213 661 23 45 67 inside an Arabic sentence sees its + and groups change places; every inserted value is isolated before entering. **Everything mirrors, or nothing**: either buttons and the clock are backwards, or nothing mirrors and Arabic is left-aligned; layout in start and end, and a written list of what mirrors.',
        '**Digits that change**: amounts in Eastern Arabic digits, or dot and comma swapped between languages; Algerian Arabic locale, Western digits, comma decimal, dot thousands, and the database always in Western digits. **The ambiguous date**: 03/11 read “3 November” by one and “11 March” by the other, and Mashreq month names nobody reads in Sétif; format per locale, months spelled out in documents, Algerian month names in Arabic. **The font without Arabic**: boxes instead of letters on a 2019 Android, or an Arabic font that clashes with the French one; a family covering both scripts, embedded in the app and the PDFs, tested on the old phone [the speed guide](' + L.lente + ') already requires.',
      ] },
      { heading: 'One sentence, from translation key to the customer’s phone', body: [
        'A sentence crosses six stages before reaching a phone, and each is a rule, not a gesture.',
      ], visual: 'chaine', after: [
        '**The key**: a sentence is a key, order.delivered, with named variables, the count, the name, the date; never a concatenation. **The three files**: French, Arabic, and darija for WhatsApp messages; the Arabic file carries the six plural forms, zero, one, two, few, many, other, because “3 parcels” and “11 parcels” are not said with the same form, and “2 parcels” has its own, the dual. **The plural rule** is applied by the language, not by the developer: for three, French picks its “other” form and Arabic its “few” form.',
        '**Formatting** by locale: Western digits, comma decimal, dot thousands in Algerian Arabic, date in local format, and never “11/10” for 10 November. **Isolation**: name and number are wrapped before entering the sentence, otherwise the + and digits jump sides in an Arabic sentence. **Rendering** in three registers: “3 parcels delivered to Karim Benali on 10/11/2026” for the manager, the same in Arabic for the employee, and “3 colis wslou l Karim” in darija for the customer, written in Latin letters because that is how your customers write it, through the templates described in [the notifications guide](' + L.notif + ').',
      ] },
      { heading: 'Seen elsewhere: locale and platform references, and what transposes', body: [
        'Two sources say the essentials. The Unicode locale repository says Algerian Arabic is written with Western digits, a comma decimal and a dot thousands separator; what transposes is that the locale is ar-DZ, not “Arabic”, and that digits are the same in both languages of the app. Android’s documentation says to write layout in start and end, to declare icons to reflect one by one, to isolate values inserted into sentences, and never to format with the locale what a machine will read; what transposes is the list of what mirrors, systematic isolation of variables, and the separation between what the user sees and what the database stores.',
        'What these sources do not say: which language your employees read at the counter, which language your customers write on WhatsApp, and which documents must be bilingual; the project’s first week answers that, and the manager signs the list.',
      ] },
      { heading: 'Delivering the Arabic version, in six steps', body: [
        'The Arabic version is not a translation added on: it is a six-step path that starts before the first mock-up.',
      ], visual: 'etapes', after: [
        '**Decide where each language goes**: interface in Arabic and French, messages in darija, bilingual documents; written and signed. **Extract texts into keys**: named variables, plurals, and context for the translator; not one hard-coded text remains. **Mock up in both directions**: start and end, the list of what mirrors, fonts with both scripts; it is the step that costs an hour in week one and weeks if skipped.',
        '**Translate with context**: one screenshot per screen, so that the translator sees where the sentence goes and picks the right word. **Review on the phone**: by someone who reads Arabic, with screenshots in both directions in acceptance; it is the step always skipped, which is why the buttons are backwards. **Deliver at every demo**: both languages together, never French first and Arabic “later”, when nobody has time any more.',
      ] },
      { heading: 'The rules of an application that works in both languages', body: [
        'Six rules, written in week one. **Where each language goes** is written: interface, messages, documents. **One key per sentence**, named variables, each language’s plurals. **Layout in start and end**, and the list of what mirrors. **The Algerian Arabic locale** for digits and dates; the database in Western digits. **Every inserted value is isolated.** **The Arabic version is reviewed on the phone** by someone who reads Arabic, at every demo.',
        'A seventh rule concerns the quote: “bilingual Arabic-French application” is not a requirement, it is a sentence; the requirement reads “languages per use written: interface, messages, documents; texts in keys with named variables and plurals per language, no hard-coded text; layout in start and end with list of reflected elements; ar-DZ locale for digits, dates, currency, sorting; bidi isolation of inserted values; fonts covering both scripts in the app and PDFs; review by an Arabic reader and screenshots in both directions at every acceptance; WhatsApp messages in darija”, and it is checked as [the specification guide](' + L.cdc + ') recommends. A quote that writes “Arabic translation included” plans to translate at the end, and that is the version with the buttons backwards.',
      ] },
      { heading: 'Six applications, and their language question', body: [
        'Six applications we often build, and for each the language decision that mattered most.',
      ], list: [
        '**The in-store point of sale**, described in [the dedicated guide](' + L.caisse + '). Interface in Arabic for sales staff, bilingual receipts, identical digits in both languages; the total is the same whichever side the customer reads.',
        '**The B2B ordering portal**, described in [the dedicated guide](' + L.portail + '). Retailers order in Arabic, the wholesaler reads in French; product names are stored in both scripts and search understands both.',
        '**The shop run from France**, described in [the dedicated guide](' + L.commerce + '). The founder reads the dashboard in French, the team in Algiers works in Arabic; same app, same data, language per user.',
        '**The tutoring platform**, described in [the dedicated guide](' + L.cours + '). The parent in France receives messages in French, the pupil in Algeria works in Arabic, and the WhatsApp reminder goes out in darija.',
        '**The Umrah agency**, described in [the dedicated guide](' + L.omra + '). Pilgrims’ documents are bilingual, with dates spelled out in both calendars, because an ambiguous date on a visa is not an option.',
        '**The updated mobile app**, described in [the dedicated guide](' + L.mobile + '). A new text ships through the language files served by the API, without going through the stores, in all three registers at once.',
      ] },
      { heading: 'The 2027 calendar', body: [
        'The calendar is that of an application delivered in both languages in six weeks, with the Arabic version visible from the third.',
      ], visual: 'calendrier', after: [
        '**Week 0 to 1** writes languages and rules: which language for the interface, messages and documents; digits, dates and currency per the Algerian Arabic locale; the list of what mirrors and what does not; signed by the manager. **Week 1 to 2** extracts texts into keys, with named variables, plurals and context; not one hard-coded text remains in the code. **Week 2 to 3** writes the layout in start and end, declares icons to reflect, embeds fonts with both scripts, and shows the first screen in Arabic: that is the week the Arabic version becomes real.',
        '**Week 3 to 4** handles data and input: formats per locale, Arabic sorting and search, normalised phone, names in both scripts. **Week 4 to 5** is the review: every screen reread on the phone by an Arabic reader, screenshots in both directions in acceptance, fixes. **Week 5 to 6** delivers bilingual PDF documents with both scripts and WhatsApp templates in darija, and goes to production. Every batch is demoed in both languages, as [the delivery guide](' + L.livrer + ') describes: the Arabic version is never “later”.',
      ] },
      { heading: 'What makes a two-language application fail', body: [
        'The Arabic versions we take over almost always failed for one of these reasons.',
      ], list: [
        '**Translated at the end.** The layout is in left and right, and mirroring it costs weeks; it ships “without the mirror”.',
        '**Sentences assembled from pieces.** Arabic word order is wrong, and nobody read it.',
        '**Generic Arabic.** Eastern digits employees do not read, Mashreq month names.',
        '**Values not isolated.** The + of numbers and the digits of addresses jump sides.',
        '**Everything mirrored.** The clock, the player and the logo too; the app looks broken.',
        '**A font without Arabic.** Boxes on 2019 phones, which the developer does not have.',
        '**Nobody on the team reads Arabic.** The version ships without a single screen reviewed.',
      ] },
      { heading: 'Frequently asked questions', body: [
        'The questions we receive from managers, founders and IT managers.',
      ], faq: [
        { q: 'Why does the Arabic version of our app have the buttons backwards?', a: 'Because the layout was written in left and right, then translated and “mirrored” at the end. A layout written in start and end mirrors on its own and cleanly; and a written list of what mirrors, arrows and lists, and what does not, clocks, digits and logos, prevents everything or nothing being mirrored. This is decided in week one, before the first mock-up.' },
        { q: 'Should digits be Arabic digits in the Arabic version?', a: 'In Algeria, no: the Algerian Arabic locale in the Unicode repository uses Western digits, 0 to 9, with a comma decimal and a dot thousands separator. An app set to generic “Arabic” would show the so-called Eastern digits, which your employees do not read every day. Digits are therefore the same in both languages; only the separators change.' },
        { q: 'Why are phone numbers cut in Arabic messages?', a: 'Because a number starting with “+”, inserted in a right-to-left sentence, sees its beginning and digit groups change places: the text does not know where the number starts. The fix is to wrap every inserted value, number, name, address, in direction marks before placing it in the sentence, systematically, in the code that renders texts.' },
        { q: 'How is darija handled?', a: 'As a third language, for messages only: WhatsApp and SMS templates have a darija version written in Latin letters, because that is how your customers write it, with the same variables and isolation as the others. The interface stays in Arabic and French; search, for its part, understands all three, as the search guide describes.' },
        { q: 'Does everything have to be translated twice at every change?', a: 'Every new sentence is a key added to the three language files, with its context for the translator, and it ships through the API without going through the stores. A version that adds ten sentences adds ten keys; the translator sees them with a screenshot of the screen they go to, and an Arabic reader reviews the screen before the demo. It is the same rhythm as the rest of delivery.' },
        { q: 'How long for an application in both languages?', a: 'Six weeks when both languages are decided at the start: one for languages and rules, one for texts into keys, one for layout in both directions, one for data and input, one for review, one for documents and messages. Adding Arabic to an app built in French only costs more than those six weeks, because the layout has to be rewritten.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'The Algerian Arabic locale writes the same digits as French; what changes is the separators, the direction of the page, and the order of words.' },
      { after: 4, text: 'A sentence is a key with variables, translated three times, pluralised by the language, formatted by the locale, and isolated where a value enters.' },
    ],
    cta: { eyebrow: 'Send us a screenshot of your Arabic version', title: 'Manager in Algeria or founder in France: we build your application in Arabic and French, with messages in darija, reviewed by those who read it, delivered in both languages at every demo', body: 'Symloop builds and takes over applications in production for companies in Algeria and founders settled in France: languages per use written, texts in keys with plurals per language, layout in start and end with a list of reflected elements, Algerian Arabic locale for digits and dates, isolation of inserted values, fonts with both scripts in the app and PDFs, search and input in two scripts, WhatsApp templates in darija, review by an Arabic reader at every acceptance. Code and language files in your repository; a demo every two weeks.' },
    related: { label: 'Read next', items: [
      { href: L.recherche, kind: '2027', name: 'Search inside an application: Arabic, French, darija' },
      { href: L.notif, kind: '2027', name: 'Notifications: which channel for which message' },
      { href: L.whatsapp, kind: '2027', name: 'An AI agent on WhatsApp' },
      { href: L.mobile, kind: '2027', name: 'Updating a mobile app without breaking it' },
    ] },
  },
  ar: {
    kind: 'عربية · فرنسية · دارجة · واجهة · 2027', title: 'تطبيق بالعربية والفرنسية في الجزائر سنة 2027: ما يُبنى كي تعمل اللغتان فعلاً، من اليمين إلى اليسار، الأرقام، التواريخ، الخطوط، الترجمات والدارجة',
    dek: '«موظفيّ يريدون التطبيق بالعربية، وزبائني في فرنسا يريدونه بالفرنسية، والنسخة العربية التي سلّمها مقدّم الخدمة السابق أزرارها مقلوبة وأرقام الهواتف مقطوعة إلى نصفين.» يصف هذا الدليل ما يُبنى كي يعمل التطبيق فعلاً باللغتين ويتكلم الدارجة في رسائله: تخطيط مكتوب بالبداية والنهاية ينعكس حيث يجب ولا ينعكس في غيره، أرقام وتواريخ على الطريقة الجزائرية، جمل تُترجم بالمفتاح مع صيغ الجمع الست للعربية، قيم معزولة كي لا تقفز علامة + في الرقم إلى الجهة الأخرى، خطوط تحمل الكتابتين، ومراجعة من الذين يقرؤون، في كل عرض لا في النهاية.',
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['عربية', 'فرنسية', 'دارجة', 'واجهة', 'الجزائر 2027'],
    intro: [
      '**الجواب القصير.** التطبيق بلغتين يُقرَّر في الأسبوع الأول لا في النهاية. نكتب أولاً **أين تذهب كل لغة**: الواجهة بالعربية والفرنسية، رسائل WhatsApp بـ **الدارجة** المكتوبة بحروف لاتينية، الوثائق بلغتين. ثم نبني خمسة أشياء. **النصوص**: مفتاح لكل جملة، متغيرات مسمّاة، و**صيغ الجمع الست** للعربية حيث للفرنسية صيغتان؛ ولا جملة مجمَّعة من قطع أبداً. **التخطيط**: مكتوب بـ **البداية والنهاية** لا باليسار واليمين أبداً، كي ينعكس وحده؛ وقائمة بما ينعكس، الأسهم والقوائم، وما لا ينعكس، الساعات والأرقام. **البيانات**: لغة الجزائر العربية تكتب **الأرقام نفسها كما في الفرنسية**، بفاصلة عشرية؛ والتواريخ تتبع اللغة المحلية؛ والقاعدة والواجهة تبقيان دائماً بأرقام غربية. **القيم المدرجة**، الأسماء والأرقام، **تُعزل** كي لا تقفز + في +213 إلى الجهة الأخرى. و**المراجعة** من شخص يقرأ العربية، على الهاتف، في كل عرض. ستة أسابيع، والنسخة العربية مرئية منذ الثالث.',
      'هذا الدليل موجّه إلى المسيّر الذي يقرأ موظفوه العربية وموردوه الفرنسية، وإلى المؤسس المقيم في فرنسا الذي يخاطب زبائنه بالدارجة على WhatsApp وبنكه بالفرنسية، وإلى المسؤول الذي يجب أن يقارن عرض سعر «ثنائي اللغة» بآخر. لا يعيد كيف يفهم البحث العربية والدارجة، الموصوف في [دليل البحث](' + L.recherche + ')، ولا كيف يتكلم وكيل على WhatsApp، الموصوف في [الدليل المخصص](' + L.whatsapp + ')؛ بل يصف ما يُبنى كي تكون الواجهة والرسائل والوثائق صحيحة باللغتين، ويمدّ [صفحتنا عن التطبيقات المحمولة](' + L.service + ').',
    ],
    sections: [
      { heading: 'ما تقوله المراجع', body: [
        'للغة المحلية تعريف علني، وكثيراً ما يفاجئ. مستودع بيانات اللغات المحلية في يونيكود، الذي تتبعه الهواتف والمتصفحات، يعطي للعربية في الجزائر نظام ترقيم افتراضياً «latn»، أي الأرقام من 0 إلى 9 التي تقرؤونها هنا، لا الأرقام المسمّاة هندية المستعملة في المشرق؛ ويعطي الفاصلة فاصلاً عشرياً والنقطة فاصل آلاف، بحيث يُكتب اثنا عشر ألفاً وأربعمئة دينار «12.400,00» بالعربية الجزائرية. وما يفرضه ذلك: تطبيق مضبوط على «عربية» عامة سيعرض أرقاماً لا يقرؤها موظفوكم يومياً؛ يجب أن تكون اللغة المحلية عربية الجزائر، والأرقام نفسها في اللغتين.',
        'وللتخطيط الذي ينعكس قواعد كتبتها المنصات. تطلب وثائق Android إعلان أن التطبيق يدعم الاتجاه من اليمين إلى اليسار، واستبدال «يسار» و«يمين» في كل مكان بـ «بداية» و«نهاية»، وتحذّر من أن الأيقونات التي تُعكس تُعلَن واحدة واحدة، لأنه «إن كان عكس الصورة يغيّر تفسيرها» فلا تُعكس: الساعة والمشغّل والشعار لا تنعكس. وتصف أيضاً فخ القيم المدرجة: رقم يبدأ بـ «+» أو عنوان يبدأ برقم، موضوعان في جملة عربية، يقفز أولهما إلى الجهة الأخرى، والحل لف كل قيمة مدرجة بعلامات اتجاه. وما يفرضه ذلك: تُكتب قائمة ما ينعكس في الأسبوع الأول، ويُعزل كل متغير في جملة قبل دخولها.',
        'وتشير الوثائق نفسها إلى فخ خفي: تنسيق رقم بلغة الجهاز لوضعه في استعلام أو عنوان ينتج، على هاتف مضبوط على عربية المشرق، أرقاماً لا تفهمها القاعدة؛ فما تقرؤه الآلة يُنسَّق دائماً بأرقام غربية. ومنذ Android 13 يستطيع المستعمل اختيار لغة كل تطبيق مستقلة عن لغة الهاتف، وهذا يهم شركة صندوقها بالعربية ومحاسبتها بالفرنسية على الجهاز نفسه. وما لم نجده: دراسة علنية للغات التي يفضّلها مستعملو تطبيقات الشركات في الجزائر؛ وما نراه في مشاريعنا العربية عند الكاونتر وفي المستودع، والفرنسية في المكاتب والوثائق، والدارجة في الرسائل، ونقولها ملاحظةً.',
      ] },
      { heading: 'الشاشة نفسها، بالفرنسية والعربية', body: [
        'النسخة العربية لا تُفهم على مبدأ بل على شاشة تُرسم مرتين.',
      ], visual: 'miroir', after: [
        '**ما ينعكس.** سهم الرجوع يشير إلى اليمين، لأن «الرجوع» في العربية نحو اليمين. تسميات القائمة تنتقل إلى جهة «البداية» وهي اليمين، والمبالغ إلى جهة «النهاية» وهي اليسار. وشريط التقدم يمتلئ من اليمين. كل ذلك يحدث وحده إن كُتب التخطيط بالبداية والنهاية؛ ولا يحدث شيء، أو ينعكس كل شيء حتى ما لا ينبغي، إن كُتب باليسار واليمين و«كُيّف» بعد ذلك.',
        '**ما لا ينعكس.** الساعة، لأن ساعة منعكسة خاطئة. الأرقام، لأن لغة الجزائر العربية تستعمل الأرقام نفسها كالفرنسية: 11.760,00 بالعربية و11 760,00 بالفرنسية، والفارق في الفواصل لا في الأرقام. رقم الهاتف، معزول كي يبقى «+213» في البداية وتحتفظ مجموعات الأرقام بترتيبها. والتاريخ 10/11/2026 متطابق في اللغتين لأن اللغة المحلية تقول ذلك. والشعار. وقائمة ما ينعكس وما لا ينعكس تتسع في صفحة، وتُكتب في الأسبوع الأول قبل أول نموذج.',
      ] },
      { heading: 'تطبيق بلغتين، في خمس طبقات', body: [
        'خلف هذه الشاشة خمس طبقات، والطبقة التي تُكسب فيها النسخة العربية أو تُخسر.',
      ], visual: 'couches', after: [
        '**النصوص والترجمات**: مفتاح لكل جملة، متغيرات مسمّاة، صيغ جمع كل لغة، وثلاثة ملفات، فرنسية وعربية ودارجة للرسائل؛ لا جملة تُبنى من قطع في الكود ولا نص مثبَّت. **التخطيط**: كل شيء يُكتب بالبداية والنهاية؛ أسهم التنقل والقوائم تنعكس، والساعات والمشغّلات والأرقام لا؛ الأيقونات التي تُعكس تُعلَن واحدة واحدة؛ نموذج واحد يُختبر في الاتجاهين منذ الأسبوع الأول. **البيانات**: أرقام وتواريخ وعملة وترتيب حسب اللغة المحلية؛ بحث يفهم العربية بلا تشكيل وكتابتَي الاسم وفق [دليل البحث](' + L.recherche + ')؛ وما تخزنه القاعدة والواجهة لا يغيّر لغته أبداً.',
        '**الإدخال**: لوحتا مفاتيح عربية وفرنسية، هاتف منمَّط بـ +213 مهما كُتب، أسماء مخزَّنة بالكتابتين عند اللزوم، عناوين وولايات بلغتين؛ زبون أُدخل بالعربية عند الكاونتر يجب أن يُعثر عليه بالفرنسية من فرنسا، وهي القاعدة التي يطبّقها [دليل استعادة البيانات](' + L.reprendre + ') على الملفات القديمة. **المسار**: كل شاشة يراجعها شخص يقرأ العربية، لقطات في الاتجاهين في القبول، ونصوص تُسلَّم للمترجم بسياقها؛ النسخة العربية ليست «ترجمة النهاية» بل تُسلَّم في كل عرض وفق [دليل التسليم](' + L.livrer + ').',
      ] },
      { heading: 'ستة فخاخ لتطبيق بلغتين', body: [
        'ستة فخاخ نجدها في كل النسخ العربية التي نستلمها تقريباً، وما يُبنى ضد كل منها.',
      ], visual: 'pieges', after: [
        '**الجملة المبنية من قطع**: «طلبية» + n + «سُلّمت» تعمل بالفرنسية وتعطي بالعربية ترتيب كلمات خاطئاً وجمعاً خاطئاً؛ مفتاح لكل جملة، وصيغ الجمع الست للعربية في ملف اللغة. **رقم الهاتف المقطوع**: +213 661 23 45 67 داخل جملة عربية تبدّل علامة + ومجموعاته مكانها؛ كل قيمة مدرجة تُعزل قبل الدخول. **كل شيء ينعكس أو لا شيء**: إما الأزرار والساعة مقلوبة، أو لا شيء ينعكس والعربية محاذاة لليسار؛ تخطيط بالبداية والنهاية، وقائمة مكتوبة بما ينعكس.',
        '**الأرقام التي تتغير**: مبالغ بأرقام هندية، أو نقطة وفاصلة منقلبتان بين اللغتين؛ لغة الجزائر العربية، أرقام غربية، فاصلة عشرية، نقطة آلاف، والقاعدة دائماً بأرقام غربية. **التاريخ الملتبس**: 03/11 يُقرأ «3 نوفمبر» عند أحدهم و«11 مارس» عند الآخر، وأسماء أشهر مشرقية لا يقرؤها أحد في سطيف؛ صيغة حسب اللغة المحلية، أشهر بالحروف في الوثائق، أسماء الأشهر الجزائرية بالعربية. **الخط بلا عربية**: مربعات بدل الحروف على Android من 2019، أو خط عربي ينافر الفرنسي؛ عائلة تغطي الكتابتين، مضمَّنة في التطبيق وملفات PDF، مختبَرة على الهاتف القديم الذي يفرضه [دليل السرعة](' + L.lente + ') أصلاً.',
      ] },
      { heading: 'جملة واحدة، من مفتاح الترجمة إلى هاتف الزبون', body: [
        'تعبر الجملة ست مراحل قبل أن تبلغ هاتفاً، وكل منها قاعدة لا حركة.',
      ], visual: 'chaine', after: [
        '**المفتاح**: الجملة مفتاح، order.delivered، بمتغيرات مسمّاة، العدد والاسم والتاريخ؛ لا تسلسل أبداً. **الملفات الثلاثة**: فرنسية وعربية ودارجة لرسائل WhatsApp؛ والملف العربي يحمل صيغ الجمع الست، صفر وواحد واثنان وقليل وكثير وغير ذلك، لأن «3 طرود» و«11 طرداً» لا يُقالان بالصيغة نفسها، و«طردان» لهما صيغتهما، المثنى. و**قاعدة الجمع** تطبّقها اللغة لا المطوّر: لثلاثة تختار الفرنسية صيغتها «غير ذلك» والعربية صيغتها «قليل».',
        '**التنسيق** حسب اللغة المحلية: أرقام غربية، فاصلة عشرية، نقطة آلاف بالعربية الجزائرية، تاريخ بالصيغة المحلية، ولا «11/10» أبداً لـ 10 نوفمبر. **العزل**: يُلف الاسم والرقم قبل دخول الجملة، وإلا قفزت + والأرقام إلى الجهة الأخرى في جملة عربية. و**العرض** في ثلاثة سجلات: «3 colis livrés à Karim Benali le 10/11/2026» للمسيّر، ونفسها بالعربية للموظف، و«3 colis wslou l Karim» بالدارجة للزبون، مكتوبة بحروف لاتينية لأن زبائنكم يكتبونها هكذا، عبر القوالب الموصوفة في [دليل الإشعارات](' + L.notif + ').',
      ] },
      { heading: 'رأيناه في مكان آخر: مراجع اللغات المحلية والمنصات، وما ينتقل', body: [
        'مصدران يقولان الجوهر. يقول مستودع اللغات المحلية في يونيكود إن العربية الجزائرية تُكتب بأرقام غربية وفاصلة عشرية ونقطة آلاف؛ وما ينتقل هو أن اللغة المحلية ar-DZ لا «عربية»، وأن الأرقام نفسها في لغتَي التطبيق. وتقول وثائق Android بكتابة التخطيط بالبداية والنهاية، وإعلان الأيقونات التي تُعكس واحدة واحدة، وعزل القيم المدرجة في الجمل، وعدم تنسيق ما ستقرؤه الآلة باللغة المحلية أبداً؛ وما ينتقل هو قائمة ما ينعكس، والعزل المنهجي للمتغيرات، والفصل بين ما يراه المستعمل وما تخزنه القاعدة.',
        'وما لا تقوله هذه المصادر: أي لغة يقرأ موظفوكم عند الكاونتر، وأي لغة يكتب زبائنكم على WhatsApp، وأي الوثائق يجب أن تكون بلغتين؛ الأسبوع الأول من المشروع يجيب، والمسيّر يوقّع القائمة.',
      ] },
      { heading: 'تسليم النسخة العربية، في ست خطوات', body: [
        'النسخة العربية ليست ترجمة تُضاف: بل مسار من ست خطوات يبدأ قبل أول نموذج.',
      ], visual: 'etapes', after: [
        '**تحديد أين تذهب كل لغة**: واجهة بالعربية والفرنسية، رسائل بالدارجة، وثائق بلغتين؛ مكتوب وموقَّع. **استخراج النصوص في مفاتيح**: متغيرات مسمّاة، جموع، وسياق للمترجم؛ ولا يبقى نص مثبَّت. **النمذجة في الاتجاهين**: بداية ونهاية، قائمة ما ينعكس، خطوط بكتابتين؛ وهي الخطوة التي تكلّف ساعة في الأسبوع الأول وأسابيع إن تُخطيت.',
        '**الترجمة بالسياق**: لقطة لكل شاشة كي يرى المترجم أين تذهب الجملة ويختار الكلمة الصحيحة. **المراجعة على الهاتف**: من شخص يقرأ العربية، بلقطات في الاتجاهين في القبول؛ وهي الخطوة التي تُتخطى دائماً، ولهذا الأزرار مقلوبة. **التسليم في كل عرض**: اللغتان معاً، لا الفرنسية أولاً والعربية «لاحقاً» حين لم يعد لأحد وقت.',
      ] },
      { heading: 'قواعد تطبيق يعمل باللغتين', body: [
        'ست قواعد تُكتب في الأسبوع الأول. **أين تذهب كل لغة** مكتوب: الواجهة والرسائل والوثائق. **مفتاح لكل جملة**، متغيرات مسمّاة، صيغ جمع كل لغة. **التخطيط بالبداية والنهاية**، وقائمة ما ينعكس. **لغة الجزائر العربية** للأرقام والتواريخ؛ والقاعدة بأرقام غربية. **كل قيمة مدرجة تُعزل.** **النسخة العربية تُراجَع على الهاتف** من شخص يقرأ العربية، في كل عرض.',
        'قاعدة سابعة تخص عرض السعر: «تطبيق ثنائي اللغة عربي-فرنسي» ليس متطلباً بل جملة؛ المتطلب يُكتب «لغات حسب الاستعمال مكتوبة: واجهة، رسائل، وثائق؛ نصوص في مفاتيح بمتغيرات مسمّاة وجموع لكل لغة، لا نص مثبَّت؛ تخطيط بالبداية والنهاية بقائمة العناصر المنعكسة؛ لغة ar-DZ للأرقام والتواريخ والعملة والترتيب؛ عزل ثنائي الاتجاه للقيم المدرجة؛ خطوط تغطي الكتابتين في التطبيق وملفات PDF؛ مراجعة من قارئ عربية ولقطات في الاتجاهين عند كل قبول؛ رسائل WhatsApp بالدارجة»، ويُتحقَّق منه كما يوصي [دليل دفتر الشروط](' + L.cdc + '). وعرض السعر الذي يكتب «ترجمة إلى العربية مشمولة» خطط للترجمة في النهاية، وهذه هي النسخة ذات الأزرار المقلوبة.',
      ] },
      { heading: 'ستة تطبيقات، ومسألة لغتها', body: [
        'ستة تطبيقات نبنيها كثيراً، ولكل منها قرار اللغة الذي كان الأهم.',
      ], list: [
        '**الصندوق في المحل**، الموصوف في [الدليل المخصص](' + L.caisse + '). واجهة بالعربية للبائعين، تذاكر بلغتين، أرقام متطابقة في اللغتين؛ والمجموع نفسه أياً كانت الجهة التي يقرأ منها الزبون.',
        '**بوابة الطلب B2B**، الموصوفة في [الدليل المخصص](' + L.portail + '). تجار التجزئة يطلبون بالعربية، وتاجر الجملة يقرأ بالفرنسية؛ أسماء المنتجات مخزَّنة بالكتابتين والبحث يفهم الاثنتين.',
        '**المتجر المُدار من فرنسا**، الموصوف في [الدليل المخصص](' + L.commerce + '). المؤسس يقرأ لوحة القيادة بالفرنسية، والفريق في الجزائر يعمل بالعربية؛ التطبيق نفسه، البيانات نفسها، لغة لكل مستعمل.',
        '**منصة الدروس**، الموصوفة في [الدليل المخصص](' + L.cours + '). الوليّ في فرنسا يتلقى رسائله بالفرنسية، والتلميذ في الجزائر يعمل بالعربية، وتذكير WhatsApp يخرج بالدارجة.',
        '**وكالة العمرة**، الموصوفة في [الدليل المخصص](' + L.omra + '). وثائق الحجاج بلغتين، بتواريخ مكتوبة بالحروف في التقويمين، لأن تاريخاً ملتبساً على تأشيرة ليس خياراً.',
        '**التطبيق المحمول المحدَّث**، الموصوف في [الدليل المخصص](' + L.mobile + '). نص جديد يخرج عبر ملفات اللغة التي تخدمها الواجهة، دون المرور بالمتاجر، في السجلات الثلاثة معاً.',
      ] },
      { heading: 'تقويم 2027', body: [
        'التقويم تقويم تطبيق يُسلَّم باللغتين في ستة أسابيع، والنسخة العربية مرئية منذ الثالث.',
      ], visual: 'calendrier', after: [
        '**الأسبوع 0 إلى 1** يكتب اللغات والقواعد: أي لغة للواجهة والرسائل والوثائق؛ الأرقام والتواريخ والعملة حسب لغة الجزائر العربية؛ قائمة ما ينعكس وما لا ينعكس؛ موقَّعة من المسيّر. **الأسبوع 1 إلى 2** يستخرج النصوص في مفاتيح بمتغيرات مسمّاة وجموع وسياق؛ ولا يبقى نص مثبَّت في الكود. **الأسبوع 2 إلى 3** يكتب التخطيط بالبداية والنهاية، ويعلن الأيقونات التي تُعكس، ويضمّن الخطوط ذات الكتابتين، ويعرض أول شاشة بالعربية: وهو الأسبوع الذي تصير فيه النسخة العربية حقيقية.',
        '**الأسبوع 3 إلى 4** يعالج البيانات والإدخال: صيغ حسب اللغة المحلية، ترتيب وبحث عربيان، هاتف منمَّط، أسماء بكتابتين. **الأسبوع 4 إلى 5** هو المراجعة: كل شاشة يُعاد قراءتها على الهاتف من قارئ عربية، لقطات في الاتجاهين في القبول، تصحيحات. **الأسبوع 5 إلى 6** يسلّم وثائق PDF بلغتين بالكتابتين وقوالب WhatsApp بالدارجة، ويضع في الإنتاج. وكل دفعة تُعرض باللغتين كما يصف [دليل التسليم](' + L.livrer + '): النسخة العربية ليست «لاحقاً» أبداً.',
      ] },
      { heading: 'ما يُفشل تطبيقاً بلغتين', body: [
        'النسخ العربية التي نستلمها فشلت دائماً تقريباً لأحد هذه الأسباب.',
      ], list: [
        '**مترجَمة في النهاية.** التخطيط باليسار واليمين، وعكسه يكلّف أسابيع؛ فتُسلَّم «بلا انعكاس».',
        '**جمل مجمَّعة من قطع.** ترتيب الكلمات العربية خاطئ، ولم يقرأه أحد.',
        '**العربية العامة.** أرقام هندية لا يقرؤها الموظفون، وأسماء أشهر مشرقية.',
        '**قيم غير معزولة.** علامة + في الأرقام وأرقام العناوين تقفز إلى الجهة الأخرى.',
        '**كل شيء منعكس.** الساعة والمشغّل والشعار أيضاً؛ يبدو التطبيق مكسوراً.',
        '**خط بلا عربية.** مربعات على هواتف 2019 التي لا يملكها المطوّر.',
        '**لا أحد في الفريق يقرأ العربية.** تُسلَّم النسخة دون مراجعة شاشة واحدة.',
      ] },
      { heading: 'أسئلة شائعة', body: [
        'الأسئلة التي نتلقاها من مسيّرين ومؤسسين ومسؤولي إعلام آلي.',
      ], faq: [
        { q: 'لماذا النسخة العربية من تطبيقنا أزرارها مقلوبة؟', a: 'لأن التخطيط كُتب باليسار واليمين ثم تُرجم و«عُكس» في النهاية. تخطيط مكتوب بالبداية والنهاية ينعكس وحده وبنظافة؛ وقائمة مكتوبة بما ينعكس، الأسهم والقوائم، وما لا ينعكس، الساعات والأرقام والشعارات، تمنع أن ينعكس كل شيء أو لا شيء. ويُقرَّر ذلك في الأسبوع الأول قبل أول نموذج.' },
        { q: 'هل يجب أن تكون الأرقام بالأرقام العربية في النسخة العربية؟', a: 'في الجزائر، لا: لغة الجزائر العربية في مستودع يونيكود تستعمل الأرقام الغربية من 0 إلى 9، بفاصلة عشرية ونقطة آلاف. وتطبيق مضبوط على «عربية» عامة سيعرض الأرقام المسمّاة هندية التي لا يقرؤها موظفوكم يومياً. فالأرقام إذن نفسها في اللغتين؛ والفواصل وحدها تتغير.' },
        { q: 'لماذا تُقطع أرقام الهواتف في الرسائل العربية؟', a: 'لأن رقماً يبدأ بـ «+»، مدرجاً في جملة تُكتب من اليمين إلى اليسار، يبدّل أوله ومجموعات أرقامه مكانها: لا يعرف النص أين يبدأ الرقم. والحل لف كل قيمة مدرجة، رقم أو اسم أو عنوان، بعلامات اتجاه قبل وضعها في الجملة، منهجياً، في الكود الذي يعرض النصوص.' },
        { q: 'كيف تُعالَج الدارجة؟', a: 'كلغة ثالثة للرسائل فقط: قوالب WhatsApp والرسائل القصيرة لها نسخة بالدارجة مكتوبة بحروف لاتينية، لأن زبائنكم يكتبونها هكذا، بالمتغيرات نفسها والعزل نفسه كالأخريات. وتبقى الواجهة بالعربية والفرنسية؛ أما البحث فيفهم الثلاث كما يصف دليل البحث.' },
        { q: 'هل يجب ترجمة كل شيء مرتين عند كل تغيير؟', a: 'كل جملة جديدة مفتاح يُضاف إلى ملفات اللغة الثلاثة بسياقه للمترجم، ويخرج عبر الواجهة دون المرور بالمتاجر. ونسخة تضيف عشر جمل تضيف عشرة مفاتيح؛ يراها المترجم بلقطة الشاشة التي تذهب إليها، ويراجع قارئ عربية الشاشة قبل العرض. وهو الإيقاع نفسه كباقي التسليم.' },
        { q: 'كم من الوقت لتطبيق باللغتين؟', a: 'ستة أسابيع حين تُقرَّر اللغتان من البداية: واحد للغات والقواعد، واحد للنصوص في مفاتيح، واحد للتخطيط في الاتجاهين، واحد للبيانات والإدخال، واحد للمراجعة، واحد للوثائق والرسائل. وإضافة العربية إلى تطبيق بُني بالفرنسية فقط تكلّف أكثر من هذه الأسابيع الستة، لأن التخطيط يجب أن يُعاد كتابته.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'لغة الجزائر العربية تكتب الأرقام نفسها كالفرنسية؛ وما يتغير هو الفواصل، واتجاه الصفحة، وترتيب الكلمات.' },
      { after: 4, text: 'الجملة مفتاح بمتغيرات، تُترجم ثلاث مرات، تُجمع حسب اللغة، تُنسَّق حسب اللغة المحلية، وتُعزل حيث تدخل قيمة.' },
    ],
    cta: { eyebrow: 'أرسلوا لنا لقطة من نسختكم العربية', title: 'مسيّر في الجزائر أو مؤسس في فرنسا: نبني تطبيقكم بالعربية والفرنسية، برسائل بالدارجة، يراجعه من يقرؤه، ويُسلَّم باللغتين في كل عرض', body: 'تبني Symloop وتستلم تطبيقات في الإنتاج للشركات في الجزائر والمؤسسين المقيمين في فرنسا: لغات حسب الاستعمال مكتوبة، نصوص في مفاتيح بجموع لكل لغة، تخطيط بالبداية والنهاية بقائمة العناصر المنعكسة، لغة الجزائر العربية للأرقام والتواريخ، عزل القيم المدرجة، خطوط بكتابتين في التطبيق وملفات PDF، بحث وإدخال بكتابتين، قوالب WhatsApp بالدارجة، مراجعة من قارئ عربية عند كل قبول. الكود وملفات اللغة في مستودعكم؛ وعرض كل أسبوعين.' },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.recherche, kind: '2027', name: 'البحث داخل التطبيق: عربية، فرنسية، دارجة' },
      { href: L.notif, kind: '2027', name: 'الإشعارات: أي قناة لأي رسالة' },
      { href: L.whatsapp, kind: '2027', name: 'وكيل ذكاء اصطناعي على WhatsApp' },
      { href: L.mobile, kind: '2027', name: 'تحديث تطبيق محمول دون كسره' },
    ] },
  },
};

const KEYWORDS = "application arabe français algérie 2027, application bilingue arabe français, interface droite à gauche rtl application, traduction application en arabe, chiffres arabes ou occidentaux application algérie, application en darija whatsapp, locale ar-dz chiffres virgule, pluriels arabe application, polices arabe application mobile, version arabe boutons à l'envers, arabic french bilingual app algeria 2027, rtl layout mirroring app arabic, تطبيق بالعربية والفرنسية الجزائر, واجهة من اليمين إلى اليسار";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
