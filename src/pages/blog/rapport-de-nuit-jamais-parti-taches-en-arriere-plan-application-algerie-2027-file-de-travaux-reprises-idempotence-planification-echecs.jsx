import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/rapport-de-nuit-jamais-parti-taches-en-arriere-plan-application-algerie-2027-file-de-travaux-reprises-idempotence-planification-echecs.mjs';

const SLUG = 'rapport-de-nuit-jamais-parti-taches-en-arriere-plan-application-algerie-2027-file-de-travaux-reprises-idempotence-planification-echecs';
const FIGURES = ['couches', 'etapes', 'tentatives', 'situations', 'nuit', 'calendrier'];
const DATE = '2026-11-10';

const L = {
  notif: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  observ: '/blog/savoir-que-votre-application-est-en-panne-avant-vos-clients-algerie-2027-surveillance-alertes-astreinte-rapport-du-lundi/',
  sauvegarde: '/blog/si-le-serveur-meurt-demain-algerie-2027-sauvegardes-restauration-testee-perte-maximale-delai-de-reprise-copie-inalterable/',
  api: '/blog/ouvrir-une-api-a-vos-partenaires-algerie-2027-cles-droits-quotas-webhooks-versions-documentation-sans-exposer-votre-systeme/',
  paiement: '/blog/integrer-paiement-en-ligne-cib-edahabia-application-algerie-2027-page-de-paiement-confirmation-webhook-etats-de-commande-rapprochement-remboursement/',
  importer: '/blog/importer-un-fichier-excel-chaque-semaine-sans-casser-application-algerie-2027-correspondance-validation-essai-a-blanc-retour-arriere/',
  stock: '/blog/stock-faux-dans-l-application-algerie-2027-journal-de-mouvements-reservations-inventaire-tournant-multi-depots-hors-ligne-ce-qu-on-construit/',
  booking: '/blog/meme-creneau-reserve-deux-fois-reservation-en-ligne-application-algerie-2027-creneaux-verrou-tenue-acompte-liste-d-attente-rappels/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  integrer: '/blog/integrer-logiciel-existant-api-algerie-2027-comptabilite-erp-caisse-webhooks-exports-sans-api/',
  lente: '/blog/application-lente-reseau-faible-algerie-2027-ce-qu-on-construit-pour-qu-elle-soit-rapide-poids-des-ecrans-cache-pagination-index-mesure/',
  heberger: '/blog/heberger-application-algerie-ou-europe-2027-ou-mettre-serveurs-et-donnees-latence-paiement-sauvegardes-reprise-montage-mixte/',
  whatsapp: '/blog/agent-ia-whatsapp-entreprise-algerie-2027-architecture-fenetre-24-heures-templates-passage-humain-cout-message/',
  commerce: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  service: '/services/software-engineering/',
};

const CONTENT = {
  fr: {
    kind: 'Arrière-plan · Files · Planification · 2027', title: "« Le rapport de nuit n'est jamais parti, et personne ne l'a su » : ce qu'on construit pour les tâches en arrière-plan d'une application en Algérie en 2027, file de travaux, verrou, reprises, idempotence, planification, file des échecs",
    dek: "« Les rappels de rendez-vous sont partis deux fois lundi, pas du tout mardi, et le rapport de nuit n'arrive plus depuis que le serveur a redémarré. L'export de la compta plante quand il dépasse dix mille lignes. » Ce ne sont pas des bugs séparés : c'est l'absence d'une file de travaux. Un script lancé à minuit, un envoi déclenché par un clic, un export qui tourne dans le navigateur n'ont ni reprise, ni verrou, ni trace. Ce guide décrit ce qu'on construit pour que tout ce qui tourne sans écran tourne vraiment : une file de travaux dans la base de données, un verrou avec bail par tâche, des reprises espacées et plafonnées, une clé d'idempotence contre les doublons, une file des échecs lue par un humain, une planification avec rattrapeuse quand le serveur redémarre, un débit lissé pour les envois, et un journal qui dit à 7 h ce qui a tourné.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Tâches en arrière-plan', 'File de travaux', 'Reprises', 'Planification', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Tout ce qui ne doit pas bloquer l'écran, envois, exports, recalculs, rapports, relances, devient une **tâche** dans une **file de travaux** stockée dans la base de données, avec une priorité, une échéance, une charge et une **clé d'idempotence**. Un **exécutant** prend la tâche en la **verrouillant** avec un **bail** de quelques minutes, qu'il renouvelle tant qu'il avance et qui tombe s'il meurt ; deux exécutants ne prennent jamais la même. Quand la tâche échoue, elle **réessaie** après une attente qui **double**, tirée au **hasard** dans une fenêtre pour que mille tâches ne repartent pas à la même seconde, et **plafonnée** ; la clé fait que la partie déjà faite ne se refait pas. Après le dernier essai, la tâche va dans une **file des échecs** avec une alerte, et un humain la lit chaque matin. Les tâches à heure fixe ont une **rattrapeuse** au démarrage pour les heures manquées, un **débit** pour les envois, et un **journal** que le gérant lit à 7 h. Six semaines, dont la première sans code.",
      "Ce guide s'adresse au gérant dont les rappels partent deux fois ou pas du tout, au fondateur installé en France qui attend un rapport de nuit qui n'arrive plus, et au responsable qui a vu un export de la compta planter trois fois de suite. Il ne redit pas quel canal envoyer quel message, décrit dans [le guide sur les notifications](" + L.notif + "), ni comment une application de terrain met ses écritures en file sans réseau, décrit dans [le guide sur le hors ligne](" + L.horsligne + ") ; il décrit la machine qui, côté serveur, fait tourner tout ce qui n'a pas d'écran, et il prolonge [notre page sur l'ingénierie logicielle](" + L.service + ").",
    ],
    sections: [
      { heading: 'Des tâches en arrière-plan qui tiennent, en cinq couches', body: [
        "Un script lancé par le système à minuit est une couche sur cinq. Les quatre autres sont ce qui fait qu'il réussit, ou qu'on le sache quand il échoue.",
      ], visual: 'couches', after: [
        "**Demandes.** Tout ce qui ne doit pas bloquer l'écran : l'envoi de 1 200 rappels, l'export de 50 000 lignes, le recalcul des stocks, le rapport du lundi, les relances de paiement ; l'écran répond en une seconde en créant une tâche avec une priorité et une échéance, et la tâche fait le travail derrière. **File de travaux.** Une table de tâches dans la base de données, avec état, priorité, échéance, charge, clé d'idempotence, nombre de tentatives et bail ; la file est sauvegardée avec la base, selon [le guide sur les sauvegardes](" + L.sauvegarde + "), et visible dans l'application. **Exécution.** Un exécutant verrouille la tâche avec un bail de quelques minutes, l'exécute avec une durée maximale, renouvelle le bail tant qu'il avance, et le relâche s'il meurt ; deux exécutants ne prennent jamais la même tâche, parce que c'est la base de données qui tient le verrou.",
        "**Reprises et échecs.** C'est la couche accentuée : un échec déclenche une reprise après une attente qui double, tirée au hasard, plafonnée ; la clé d'idempotence fait que la partie déjà faite ne se refait pas ; après le dernier essai, la tâche va dans la file des échecs et quelqu'un est alerté. **Planification et mesure.** Les tâches à heure fixe ont une rattrapeuse au démarrage ; les envois ont un débit lissé ; un journal dit ce qui a tourné, un tableau montre les tâches en retard, en échec et en attente, et une alerte part si la file grossit, dans l'esprit de [le guide sur la surveillance](" + L.observ + ").",
      ] },
      { heading: "Ce qu'une tâche doit savoir faire", body: [
        "Six propriétés d'une tâche bien construite, et la troisième est celle qui évite le pire.",
      ], visual: 'etapes', after: [
        "**Être petite** : 1 200 envois, ce sont douze tâches de cent ; un export, ce sont des lots ; une tâche courte reprend vite et refait peu. **Porter sa clé** : la même tâche prise deux fois ne fait le travail qu'une fois, et un message déjà envoyé ne repart pas, selon la mécanique décrite dans [le guide sur le hors ligne](" + L.horsligne + "). **Se verrouiller** : un bail renouvelé, relâché si l'exécutant meurt ; c'est ce qui évite les deux rappels par client. **Échouer proprement** : la cause est écrite, et l'attente avant la prochaine tentative double, avec du hasard et un plafond.",
        "**Respecter un débit** : un message par seconde vers le fournisseur de messages, neuf lots pour un export, jamais de rafale, parce que le fournisseur coupe le compte qui envoie 1 200 messages en dix secondes ; le détail des canaux est dans [le guide sur l'agent WhatsApp](" + L.whatsapp + "). **Laisser une trace** : début, fin, résultat, tentatives, lisibles par le gérant, pas seulement par le développeur.",
      ] },
      { heading: 'Une tâche, de la file à la réussite ou à la file des échecs', body: [
        "La figure suit une tâche « envoyer 1 200 rappels WhatsApp » pendant que le fournisseur de messages est indisponible.",
      ], visual: 'tentatives', after: [
        "La tâche est prise et verrouillée ; la première tentative échoue parce que le fournisseur répond indisponible, mais 380 messages étaient déjà partis. La deuxième tentative attend trente secondes, plus ou moins dix tirées au hasard ; la troisième deux minutes, plus ou moins trente secondes ; la quatrième huit minutes, plus ou moins deux, et réussit : 1 200 envoyés, zéro doublon, parce que la clé d'idempotence, rappel plus rendez-vous plus date, fait sauter les 380 déjà partis. Si une cinquième tentative avait été nécessaire, l'attente aurait été plafonnée à trente minutes, et au-delà la tâche serait allée dans la file des échecs avec une alerte au responsable.",
        "Le hasard dans l'attente n'est pas un détail : quand un fournisseur tombe, mille tâches échouent à la même seconde, et sans hasard elles réessaient toutes à la même seconde, ce qui le fait retomber. L'équipe architecture d'Amazon Web Services a publié une recommandation sur ce point : une attente exponentielle plafonnée, avec du hasard, qui étale les reprises et réduit nettement le nombre d'appels. La file des échecs est lue chaque matin par un humain, qui relance ou corrige ; elle n'est jamais vidée en silence. Les durées de la figure sont un exemple construit.",
      ] },
      { heading: "Six situations réelles, et ce que l'application fait", body: [
        "Les six situations qu'on retrouve dans presque toutes les applications qu'on reprend, et la construction qui les règle.",
      ], visual: 'situations', after: [
        "Les deux premières lignes se règlent par la rattrapeuse au démarrage et par le verrou avec bail ; la deuxième est la plus coûteuse, parce que deux rappels par client sont vus par 1 200 clients. Les deux suivantes se règlent par les lots et les reprises : un export en arrière-plan par lots dépose un fichier et envoie un lien, et une panne du fournisseur devient un retard de dix minutes au lieu d'une perte. Les deux dernières se règlent par le débit lissé et la durée maximale avec bail expiré. Aucune ne se règle par un développeur qui se lève la nuit pour relancer un script.",
      ] },
      { heading: "La nuit d'un serveur, sur deux exécutants", body: [
        "La figure montre ce qui tourne entre 22 h et 7 h sur un serveur d'une PME, sur deux exécutants, et trois choses qui se seraient mal passées sans la file.",
      ], visual: 'nuit', after: [
        "L'exécutant A fait les tâches lourdes une à la fois : la sauvegarde de la base à 22 h, qui tient le verrou « base » ; le recalcul des stocks juste après, selon [le guide sur le stock](" + L.stock + ") ; l'export comptable par lots à minuit, vers le format que le cabinet attend selon [le guide sur l'intégration](" + L.integrer + ") ; la préparation du rapport du lundi à 2 h, manquée parce que le serveur a redémarré à 2 h 04 et reprise par la rattrapeuse à 2 h 15 ; les 1 200 rappels de rendez-vous du jour à 6 h 30, en lots de cent, un message par seconde, selon [le guide sur la réservation](" + L.booking + ") ; le rapport envoyé au gérant à 7 h. L'exécutant B fait les tâches courtes en parallèle : le nettoyage des fichiers temporaires, qui attend la fin de la sauvegarde parce que le verrou est pris ; les relances de paiement à 23 h 30 ; le recalcul des créneaux de la semaine suivante à 5 h 30.",
        "Trois choses se seraient mal passées sans la file : le rapport de 2 h n'aurait pas existé et personne ne l'aurait su ; le nettoyage aurait tourné pendant la sauvegarde ; les 1 200 rappels seraient partis en dix secondes et le compte aurait été bloqué. Combien d'exécutants, sur quelle machine, et où, est une décision décrite dans [le guide sur l'hébergement](" + L.heberger + ") ; les horaires de la figure sont un exemple construit.",
      ] },
      { heading: "Vu ailleurs : la recommandation d'AWS sur les reprises, et ce qui se transpose", body: [
        "Trois faits se transposent tels quels. **L'attente exponentielle avec hasard** : l'équipe architecture d'Amazon Web Services a montré, par simulation, que doubler l'attente entre les tentatives réduit peu la contention tant que les clients réessaient en même temps, et que le remède est d'ajouter du hasard, ce qui dans leur simulation à cent clients a divisé le nombre d'appels par plus de deux ; ce qui se transpose, c'est un barème d'attente avec hasard et plafond, écrit la première semaine. **La livraison au moins une fois** : une file qui garantit qu'une tâche sera exécutée garantit par là même qu'elle peut l'être deux fois, après une coupure au mauvais moment ; ce qui se transpose, c'est que chaque tâche porte une clé et que son travail est idempotent, comme les webhooks de paiement décrits dans [le guide sur le paiement en ligne](" + L.paiement + "). **La file des échecs**, ou lettre morte, présente dans tous les systèmes de messages ; ce qui se transpose, c'est qu'elle est lue par un humain, pas seulement stockée.",
        "Ce que ces faits ne décident pas pour vous : combien de tentatives, quel plafond, quel débit vers votre fournisseur, qui est alerté et à quelle heure part le rapport ; la première semaine du projet y répond, et c'est le gérant qui signe.",
      ] },
      { heading: "Les règles des tâches en arrière-plan qui tiennent", body: [
        "Six règles, écrites la première semaine. **Rien de long ne tourne dans l'écran** : tout devient une tâche. **Chaque tâche porte une clé** et son travail est idempotent. **Une tâche est verrouillée par un bail**, renouvelé ou relâché. **L'échec a un barème** : attente qui double, hasard, plafond, puis file des échecs et alerte. **Les envois ont un débit** écrit par fournisseur. **Ce qui a tourné est lisible** par le gérant à 7 h, avec ce qui n'a pas tourné.",
        "Et une règle de méthode : les scripts de nuit existants ne sont pas réécrits d'un coup ; ils deviennent des tâches un par un, en commençant par celui dont l'échec coûte le plus cher, et chaque bascule se fait avec son journal, selon [le guide sur la livraison sans casse](" + L.livrer + ").",
      ] },
      { heading: "Six entreprises, et la tâche qui manquait", body: [
        "Six situations composées à partir de projets que nous rencontrons ; les noms sont génériques et les chiffres sont des exemples.",
      ], list: [
        "**Un cabinet médical à Alger, rappels de rendez-vous.** Les rappels partaient deux fois certains matins, parce que deux serveurs lançaient le même script. La construction : tâches de cent envois, verrou avec bail, clé par rappel. Les doublons ont cessé le premier jour.",
        "**Un grossiste à Sétif, export comptable.** L'export de fin de mois plantait dans le navigateur au-delà de dix mille lignes. La construction : tâche en arrière-plan par lots, fichier déposé, lien envoyé au cabinet, reprise au lot ; le format suit [le guide sur l'intégration](" + L.integrer + ").",
        "**Un fondateur à Lyon, boutique en ligne à Alger.** Le rapport de nuit n'arrivait plus depuis une mise à jour du serveur, et il l'a découvert trois semaines plus tard. La construction : rattrapeuse au démarrage, alerte si le rapport n'est pas parti à 7 h 15 ; la gestion à distance suit [le guide sur le commerce depuis la France](" + L.commerce + ").",
        "**Une plateforme de livraison à Oran, notifications.** Le fournisseur SMS a coupé le compte après une rafale de deux mille messages. La construction : débit lissé par fournisseur, lots, reprises avec hasard quand il est indisponible.",
        "**Un distributeur à Constantine, recalcul de stock.** Un recalcul bloqué tenait la file toute la nuit et rien d'autre ne tournait. La construction : durée maximale, bail expiré qui relâche la tâche et la marque, file qui avance.",
        "**Une PME à Annaba, imports fournisseurs.** Les imports de prix tournaient dans l'écran et plantaient à la coupure. La construction : import en tâche par lots avec reprise et clé, selon [le guide sur l'import Excel](" + L.importer + ").",
      ] },
      { heading: 'Le calendrier 2027', body: [
        "Six semaines pour une application qui a déjà des scripts de nuit et des envois ; la première semaine se passe sans code.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, inventaire des tâches** : tout ce qui tourne sans écran, envois, exports, recalculs, rapports, relances, avec priorité, échéance, débit, durée maximale et qui est alerté ; signé par le gérant. **Semaine 2, file et exécutants** : table de tâches dans la base, exécutants, verrou avec bail, durée maximale, tableau des tâches dans l'application. **Semaine 3, reprises et échecs** : barème d'attente avec hasard et plafond, clé d'idempotence, file des échecs, alerte, relance manuelle.",
        "**Semaine 4, planification** : tâches à heure fixe, rattrapeuse au démarrage, verrous entre tâches, débit lissé pour les envois. **Semaine 5, migration des scripts** : les scripts de nuit existants deviennent des tâches, un par un, avec leur journal ; les envois passent par la file. **Semaine 6, mesure** : journal du matin, tâches en retard et en échec, taille de la file, première cause d'échec de la semaine, sur le tableau de bord selon [le guide sur le tableau de bord temps réel](" + L.dashboard + "). Chaque semaine se termine par une démonstration.",
      ] },
      { heading: 'Ce qui fait échouer les tâches en arrière-plan', body: [
        "Cinq causes, vues dans des applications qu'on reprend. **Le script de minuit sans trace** : il échoue en silence pendant trois semaines. **L'envoi déclenché par un clic** : l'employé clique deux fois, ou deux employés cliquent. **L'export dans le navigateur** : la connexion coupe, tout est perdu. **La reprise immédiate et infinie** : le fournisseur tombé est martelé jusqu'à ce qu'il bloque le compte. **La file sans humain** : la file des échecs grossit et personne ne la lit.",
        "Et une cause de méthode : traiter chaque tâche comme un cas unique, avec son script et sa logique de reprise. Une file de travaux est une machine qu'on construit une fois et que toutes les tâches utilisent.",
      ] },
      { heading: 'Questions fréquentes', body: [
        "Les questions que posent les gérants et les fondateurs quand ils nous décrivent des envois qui partent deux fois et des rapports qui ne partent pas.",
      ], faq: [
        { q: "Pourquoi le rapport de nuit n'est-il pas parti ?", a: "Le plus souvent parce qu'un script est lancé à heure fixe par le système et que le serveur était en train de redémarrer, ou que le script a échoué sans que personne ne soit alerté. La construction qui règle cela : une tâche planifiée dans une file, une rattrapeuse au démarrage qui reprend les heures manquées, et une alerte si le rapport n'est pas parti à l'heure prévue plus un délai." },
        { q: "Pourquoi les SMS sont-ils partis deux fois ?", a: "Parce que deux serveurs ou deux clics ont lancé le même envoi, ou qu'une reprise a renvoyé des messages déjà partis. La construction : un verrou avec bail dans la base de données pour qu'une tâche ne soit prise qu'une fois, et une clé d'idempotence par message pour qu'un message déjà envoyé ne reparte jamais, même après une reprise." },
        { q: "Qu'est-ce qu'une file de travaux ?", a: "Une table de tâches dans la base de données, avec un état, une priorité, une échéance, une charge, une clé et un bail, et des exécutants qui prennent la tâche suivante, la verrouillent, l'exécutent et notent le résultat. Tout ce qui ne doit pas bloquer l'écran y passe : envois, exports, recalculs, rapports, relances, imports." },
        { q: "Comment réessayer sans aggraver la panne du fournisseur ?", a: "Avec une attente qui double entre les tentatives, tirée au hasard dans une fenêtre pour que mille tâches ne repartent pas à la même seconde, et plafonnée. C'est la recommandation publiée par l'équipe architecture d'Amazon Web Services. Après le dernier essai, la tâche va dans la file des échecs avec une alerte." },
        { q: "Que devient une tâche qui échoue définitivement ?", a: "Elle va dans la file des échecs, avec sa cause, sa charge et son nombre de tentatives, et une alerte part au responsable. Un humain lit cette file chaque matin, relance ou corrige. Elle n'est jamais supprimée en silence." },
        { q: "Combien d'exécutants faut-il ?", a: "Pour la plupart des PME, deux suffisent : un pour les tâches lourdes, une à la fois, et un pour les tâches courtes en parallèle ; on en ajoute quand la file grossit, et c'est un chiffre qu'on mesure plutôt qu'on devine. Où tournent ces exécutants dépend de l'hébergement choisi." },
        { q: "Combien de temps pour mettre cela en place ?", a: "Six semaines dans le calendrier type : une pour l'inventaire des tâches, une pour la file et les exécutants, une pour les reprises et la file des échecs, une pour la planification, une pour la migration des scripts existants, une pour la mesure. Le délai dépend du nombre de scripts existants et de fournisseurs d'envoi." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "Une tâche qui échoue n'est ni perdue ni rejouée à l'infini : elle réessaie à des intervalles qui doublent, tirés au hasard, plafonnés, et finit dans une file qu'un humain lit." },
      { after: 4, text: "Une tâche planifiée a une heure, mais aussi une rattrapeuse si le serveur était éteint, un verrou pour ne pas tourner deux fois, un débit pour ne pas se faire couper, et un journal qui dit à 7 h ce qui a tourné." },
    ],
    cta: { eyebrow: 'Envoyez-nous la liste de vos scripts de nuit et de vos envois, nous les mettons en file', title: "Gérant en Algérie ou fondateur en France : nous construisons la machine qui fait tourner tout ce qui n'a pas d'écran, et qui vous dit à 7 h ce qui a tourné", body: "Symloop construit et reprend des applications en production pour les entreprises en Algérie et les fondateurs installés en France : file de travaux dans la base de données, exécutants, verrou avec bail et durée maximale, barème de reprise avec hasard et plafond, clé d'idempotence, file des échecs et alertes, planification avec rattrapeuse au démarrage, débit lissé par fournisseur, migration des scripts existants, journal du matin et tableau des tâches. Code et règles dans votre dépôt ; une démonstration toutes les deux semaines." },
    related: { label: 'À lire aussi', items: [
      { href: L.notif, kind: '2027', name: 'Notifications : quel canal pour quel message' },
      { href: L.observ, kind: '2027', name: 'Savoir que l’application est en panne avant les clients' },
      { href: L.horsligne, kind: '2027', name: 'Application hors ligne : file d’attente, idempotence' },
      { href: L.importer, kind: '2027', name: 'Importer un fichier Excel chaque semaine sans casser' },
    ] },
  },
  en: {
    kind: 'Background · Queues · Scheduling · 2027', title: "“The night report never left, and nobody knew”: what gets built for the background tasks of an application in Algeria in 2027, work queue, lock, retries, idempotency, scheduling, failure queue",
    dek: "“Appointment reminders went out twice on Monday, not at all on Tuesday, and the night report has not arrived since the server restarted. The accounting export crashes past ten thousand rows.” These are not separate bugs: it is the absence of a work queue. A script launched at midnight, a send triggered by a click, an export running in the browser have no retry, no lock, no trace. This guide describes what gets built so that everything that runs without a screen really runs: a work queue in the database, a lock with a lease per task, spaced and capped retries, an idempotency key against duplicates, a failure queue read by a human, scheduling with a catch-up when the server restarts, a smoothed rate for sends, and a log that says at 07:00 what ran.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Background tasks', 'Work queue', 'Retries', 'Scheduling', 'Algeria 2027'],
    intro: [
      "**Short answer.** Everything that must not block the screen, sends, exports, recomputes, reports, reminders, becomes a **task** in a **work queue** stored in the database, with a priority, a due time, a payload and an **idempotency key**. A **worker** takes the task by **locking** it with a **lease** of a few minutes, renews it while it progresses, and the lease falls if it dies; two workers never take the same one. When the task fails, it **retries** after a wait that **doubles**, drawn at **random** within a window so a thousand tasks do not restart at the same second, and **capped**; the key means the part already done is not redone. After the last attempt, the task goes to a **failure queue** with an alert, and a human reads it every morning. Fixed-time tasks have a **catch-up** at start-up for missed times, a **rate** for sends, and a **log** the manager reads at 07:00. Six weeks, the first without code.",
      "This guide is for the manager whose reminders go out twice or not at all, the founder settled in France waiting for a night report that no longer arrives, and the person who has seen an accounting export crash three times in a row. It does not repeat which channel carries which message, described in [the notifications guide](" + L.notif + "), nor how a field application queues its writes without network, described in [the offline guide](" + L.horsligne + "); it describes the machine that, server side, runs everything that has no screen, and it extends [our software engineering page](" + L.service + ").",
    ],
    sections: [
      { heading: 'Background tasks that hold, in five layers', body: [
        "A script launched by the system at midnight is one layer out of five. The four others are what makes it succeed, or lets you know when it fails.",
      ], visual: 'couches', after: [
        "**Requests.** Everything that must not block the screen: sending 1,200 reminders, exporting 50,000 rows, recomputing stock, the Monday report, payment reminders; the screen answers in a second by creating a task with a priority and a due time, and the task does the work behind. **Work queue.** A task table in the database, with state, priority, due time, payload, idempotency key, attempt count and lease; the queue is backed up with the database, following [the backups guide](" + L.sauvegarde + "), and visible in the application. **Execution.** A worker locks the task with a lease of a few minutes, runs it with a maximum duration, renews the lease while it progresses, and releases it if it dies; two workers never take the same task, because the database holds the lock.",
        "**Retries and failures.** This is the accented layer: a failure triggers a retry after a wait that doubles, drawn at random, capped; the idempotency key means the part already done is not redone; after the last attempt, the task goes to the failure queue and someone is alerted. **Scheduling and measurement.** Fixed-time tasks have a start-up catch-up; sends have a smoothed rate; a log says what ran, a board shows late, failed and waiting tasks, and an alert goes out if the queue grows, in the spirit of [the monitoring guide](" + L.observ + ").",
      ] },
      { heading: 'What a task must be able to do', body: [
        "Six properties of a well-built task, and the third is the one that avoids the worst.",
      ], visual: 'etapes', after: [
        "**Be small**: 1,200 sends are twelve tasks of a hundred; an export is batches; a short task retries fast and redoes little. **Carry its key**: the same task taken twice does the work once, and a message already sent does not leave again, following the mechanics described in [the offline guide](" + L.horsligne + "). **Lock itself**: a lease renewed, released if the worker dies; this is what avoids two reminders per customer. **Fail cleanly**: the cause is written, and the wait before the next attempt doubles, with jitter and a cap.",
        "**Respect a rate**: one message per second to the messaging provider, nine batches for an export, never a burst, because the provider cuts off the account that sends 1,200 messages in ten seconds; channel details are in [the WhatsApp agent guide](" + L.whatsapp + "). **Leave a trace**: start, end, outcome, attempts, readable by the manager, not only by the developer.",
      ] },
      { heading: 'One task, from the queue to success or to the failure queue', body: [
        "The figure follows a task “send 1,200 WhatsApp reminders” while the messaging provider is unavailable.",
      ], visual: 'tentatives', after: [
        "The task is taken and locked; the first attempt fails because the provider answers unavailable, but 380 messages had already left. The second attempt waits thirty seconds, plus or minus ten drawn at random; the third two minutes, plus or minus thirty seconds; the fourth eight minutes, plus or minus two, and succeeds: 1,200 sent, zero duplicates, because the idempotency key, reminder plus appointment plus date, skips the 380 already sent. Had a fifth attempt been needed, the wait would have been capped at thirty minutes, and beyond that the task would have gone to the failure queue with an alert to the manager.",
        "Jitter in the wait is not a detail: when a provider goes down, a thousand tasks fail at the same second, and without jitter they all retry at the same second, which knocks it down again. The Amazon Web Services architecture team published a recommendation on this point: capped exponential backoff, with jitter, which spreads retries and clearly reduces the number of calls. The failure queue is read every morning by a human, who retries or fixes; it is never emptied silently. Durations in the figure are a constructed example.",
      ] },
      { heading: 'Six real situations, and what the application does', body: [
        "The six situations found in almost every application we take over, and the construction that settles them.",
      ], visual: 'situations', after: [
        "The first two rows are settled by the start-up catch-up and by the lock with lease; the second is the costliest, because two reminders per customer are seen by 1,200 customers. The next two are settled by batches and retries: a background export in batches stores a file and sends a link, and a provider outage becomes a ten-minute delay instead of a loss. The last two are settled by the smoothed rate and the maximum duration with expired lease. None is settled by a developer getting up at night to relaunch a script.",
      ] },
      { heading: "A server's night, on two workers", body: [
        "The figure shows what runs between 22:00 and 07:00 on an SME's server, on two workers, and three things that would have gone wrong without the queue.",
      ], visual: 'nuit', after: [
        "Worker A does the heavy tasks one at a time: the database backup at 22:00, which holds the “database” lock; the stock recompute right after, following [the stock guide](" + L.stock + "); the accounting export in batches at midnight, to the format the accountant expects following [the integration guide](" + L.integrer + "); the Monday report preparation at 02:00, missed because the server restarted at 02:04 and caught up at 02:15; the 1,200 same-day appointment reminders at 06:30, in batches of a hundred, one message per second, following [the booking guide](" + L.booking + "); the report sent to the manager at 07:00. Worker B does the short tasks in parallel: the temporary-file cleanup, which waits for the backup to finish because the lock is held; payment reminders at 23:30; next week's slot recompute at 05:30.",
        "Three things would have gone wrong without the queue: the 02:00 report would not have existed and nobody would have known; the cleanup would have run during the backup; the 1,200 reminders would have left in ten seconds and the account would have been blocked. How many workers, on which machine, and where, is a decision described in [the hosting guide](" + L.heberger + "); times in the figure are a constructed example.",
      ] },
      { heading: "Seen elsewhere: AWS's recommendation on retries, and what carries over", body: [
        "Three facts carry over as they are. **Exponential backoff with jitter**: the Amazon Web Services architecture team showed, by simulation, that doubling the wait between attempts reduces contention little as long as clients retry at the same time, and that the remedy is to add jitter, which in their hundred-client simulation cut the number of calls by more than half; what carries over is a wait schedule with jitter and a cap, written in the first week. **At-least-once delivery**: a queue that guarantees a task will run thereby guarantees it may run twice, after a cut at the wrong moment; what carries over is that every task carries a key and its work is idempotent, like the payment webhooks described in [the online payment guide](" + L.paiement + "). **The failure queue**, or dead letter, present in every messaging system; what carries over is that a human reads it, not only that it is stored.",
        "What those facts do not decide for you: how many attempts, which cap, which rate to your provider, who is alerted and when the report leaves; the project's first week answers that, and the manager signs.",
      ] },
      { heading: 'The rules of background tasks that hold', body: [
        "Six rules, written in the first week. **Nothing long runs in the screen**: everything becomes a task. **Every task carries a key** and its work is idempotent. **A task is locked by a lease**, renewed or released. **Failure has a schedule**: wait that doubles, jitter, cap, then failure queue and alert. **Sends have a rate** written per provider. **What ran is readable** by the manager at 07:00, with what did not run.",
        "And one rule of method: existing night scripts are not rewritten at once; they become tasks one by one, starting with the one whose failure costs the most, and every switch comes with its log, following [the delivery without breakage guide](" + L.livrer + ").",
      ] },
      { heading: 'Six companies, and the task that was missing', body: [
        "Six situations composed from projects we meet; the names are generic and the figures are examples.",
      ], list: [
        "**A medical practice in Algiers, appointment reminders.** Reminders went out twice some mornings, because two servers launched the same script. The construction: tasks of a hundred sends, lock with lease, key per reminder. Duplicates stopped on the first day.",
        "**A wholesaler in Sétif, accounting export.** The month-end export crashed in the browser past ten thousand rows. The construction: background task in batches, file stored, link sent to the accountant, resume at the batch; the format follows [the integration guide](" + L.integrer + ").",
        "**A founder in Lyon, online shop in Algiers.** The night report stopped arriving after a server update, and they found out three weeks later. The construction: start-up catch-up, alert if the report has not left by 07:15; remote management follows [the shop from France guide](" + L.commerce + ").",
        "**A delivery platform in Oran, notifications.** The SMS provider cut the account after a burst of two thousand messages. The construction: smoothed rate per provider, batches, retries with jitter when it is unavailable.",
        "**A distributor in Constantine, stock recompute.** A stuck recompute held the queue all night and nothing else ran. The construction: maximum duration, expired lease that releases and flags the task, queue that moves.",
        "**An SME in Annaba, supplier imports.** Price imports ran in the screen and crashed on a cut. The construction: import as a batched task with resume and key, following [the Excel import guide](" + L.importer + ").",
      ] },
      { heading: 'The 2027 calendar', body: [
        "Six weeks for an application that already has night scripts and sends; the first week passes without code.",
      ], visual: 'calendrier', after: [
        "**Week 1, task inventory**: everything that runs without a screen, sends, exports, recomputes, reports, reminders, with priority, due time, rate, maximum duration and who is alerted; signed by the manager. **Week 2, queue and workers**: task table in the database, workers, lock with lease, maximum duration, task board in the application. **Week 3, retries and failures**: wait schedule with jitter and cap, idempotency key, failure queue, alert, manual retry.",
        "**Week 4, scheduling**: fixed-time tasks, start-up catch-up, locks between tasks, smoothed rate for sends. **Week 5, script migration**: existing night scripts become tasks, one by one, with their log; sends go through the queue. **Week 6, measurement**: morning log, late and failed tasks, queue size, first failure cause of the week, on the dashboard following [the real-time dashboard guide](" + L.dashboard + "). Every week ends with a demo.",
      ] },
      { heading: 'What makes background tasks fail', body: [
        "Five causes, seen in applications we take over. **The midnight script without a trace**: it fails silently for three weeks. **The send triggered by a click**: the employee clicks twice, or two employees click. **The export in the browser**: the connection drops, all is lost. **The immediate, infinite retry**: the fallen provider is hammered until it blocks the account. **The queue without a human**: the failure queue grows and nobody reads it.",
        "And one cause of method: treating every task as a unique case, with its script and its retry logic. A work queue is a machine built once that every task uses.",
      ] },
      { heading: 'Frequently asked questions', body: [
        "The questions managers and founders ask when they describe sends that go out twice and reports that do not go out.",
      ], faq: [
        { q: "Why did the night report not leave?", a: "Most often because a script is launched at a fixed time by the system and the server was restarting, or the script failed without anyone being alerted. The construction that settles this: a scheduled task in a queue, a start-up catch-up that reruns missed times, and an alert if the report has not left by the planned time plus a margin." },
        { q: "Why did the SMS go out twice?", a: "Because two servers or two clicks launched the same send, or a retry resent messages already sent. The construction: a lock with lease in the database so a task is taken only once, and an idempotency key per message so a message already sent never leaves again, even after a retry." },
        { q: "What is a work queue?", a: "A task table in the database, with a state, a priority, a due time, a payload, a key and a lease, and workers that take the next task, lock it, run it and record the outcome. Everything that must not block the screen goes through it: sends, exports, recomputes, reports, reminders, imports." },
        { q: "How do you retry without making the provider outage worse?", a: "With a wait that doubles between attempts, drawn at random within a window so a thousand tasks do not restart at the same second, and capped. That is the recommendation published by the Amazon Web Services architecture team. After the last attempt, the task goes to the failure queue with an alert." },
        { q: "What happens to a task that fails for good?", a: "It goes to the failure queue, with its cause, its payload and its attempt count, and an alert goes to the manager. A human reads that queue every morning, retries or fixes. It is never deleted silently." },
        { q: "How many workers are needed?", a: "For most SMEs, two are enough: one for heavy tasks, one at a time, and one for short tasks in parallel; you add more when the queue grows, and it is a number you measure rather than guess. Where those workers run depends on the hosting chosen." },
        { q: "How long does it take to set this up?", a: "Six weeks in the typical calendar: one for the task inventory, one for the queue and workers, one for retries and the failure queue, one for scheduling, one for migrating existing scripts, one for measurement. The duration depends on the number of existing scripts and sending providers." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "A failing task is neither lost nor replayed forever: it retries at intervals that double, drawn at random, capped, and ends in a queue a human reads." },
      { after: 4, text: "A scheduled task has a time, but also a catch-up if the server was off, a lock so it does not run twice, a rate so it does not get cut off, and a log that says at 07:00 what ran." },
    ],
    cta: { eyebrow: 'Send us the list of your night scripts and sends, we put them in a queue', title: 'Manager in Algeria or founder in France: we build the machine that runs everything without a screen, and tells you at 07:00 what ran', body: 'Symloop builds and takes over applications in production for companies in Algeria and founders settled in France: work queue in the database, workers, lock with lease and maximum duration, retry schedule with jitter and cap, idempotency key, failure queue and alerts, scheduling with start-up catch-up, smoothed rate per provider, migration of existing scripts, morning log and task board. Code and rules in your repository; a demo every two weeks.' },
    related: { label: 'Read next', items: [
      { href: L.notif, kind: '2027', name: 'Notifications: which channel for which message' },
      { href: L.observ, kind: '2027', name: 'Knowing the application is down before customers' },
      { href: L.horsligne, kind: '2027', name: 'Offline application: queue, idempotency' },
      { href: L.importer, kind: '2027', name: 'Importing an Excel file every week without breaking' },
    ] },
  },
  ar: {
    kind: 'خلفية · طوابير · جدولة · 2027', title: '«تقرير الليل لم ينطلق أبداً، ولا أحد علم»: ما يُبنى لمهام الخلفية في تطبيق في الجزائر سنة 2027، طابور عمل، قفل، إعادات، عدم تكرار، جدولة، طابور إخفاقات',
    dek: '«خرجت تذكيرات المواعيد مرتين يوم الاثنين، ولم تخرج أبداً يوم الثلاثاء، وتقرير الليل لم يعد يصل منذ أن أعاد الخادم التشغيل. وتصدير المحاسبة يسقط حين يتجاوز عشرة آلاف سطر.» هذه ليست أخطاء منفصلة: إنها غياب طابور عمل. نص برمجي يُطلق في منتصف الليل، وإرسال يطلقه نقر، وتصدير يعمل في المتصفح، لا إعادة لها ولا قفل ولا أثر. يصف هذا الدليل ما يُبنى كي يعمل فعلاً كل ما يعمل بلا شاشة: طابور عمل في قاعدة البيانات، قفل بعقد لكل مهمة، إعادات متباعدة ومسقوفة، مفتاح عدم تكرار ضد التكرار، طابور إخفاقات يقرؤه إنسان، جدولة بمستدرِك حين يعيد الخادم التشغيل، معدل ممهَّد للإرسالات، وسجل يقول عند 07:00 ما عمل.',
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['مهام الخلفية', 'طابور العمل', 'إعادات', 'جدولة', 'الجزائر 2027'],
    intro: [
      '**الجواب القصير.** كل ما يجب ألا يعطّل الشاشة، إرسالات وتصديرات وإعادة حسابات وتقارير وتذكيرات، يصير **مهمة** في **طابور عمل** مخزَّن في قاعدة البيانات، بأولوية واستحقاق وحمولة و**مفتاح عدم تكرار**. يأخذ **منفّذ** المهمة **بقفلها** **بعقد** بضع دقائق يجدده ما دام يتقدم ويسقط إن مات؛ ومنفّذان لا يأخذان المهمة نفسها أبداً. وحين تخفق المهمة **تعيد المحاولة** بعد انتظار **يتضاعف**، مسحوب **عشوائياً** في نافذة كي لا تنطلق ألف مهمة في الثانية نفسها، و**مسقوف**؛ والمفتاح يجعل ما أُنجز لا يُعاد. وبعد آخر محاولة تذهب المهمة إلى **طابور إخفاقات** بتنبيه، ويقرؤه إنسان كل صباح. وللمهام ذات الساعة الثابتة **مستدرِك** عند الإقلاع للساعات الفائتة، و**معدل** للإرسالات، و**سجل** يقرؤه المسيّر عند 07:00. ستة أسابيع، أولها بلا كود.',
      'يتوجه هذا الدليل إلى المسيّر الذي تخرج تذكيراته مرتين أو لا تخرج، وإلى المؤسس المقيم في فرنسا الذي ينتظر تقرير ليل لم يعد يصل، وإلى المسؤول الذي رأى تصدير المحاسبة يسقط ثلاث مرات متتالية. لا يعيد شرح أي قناة تحمل أي رسالة، الموصوف في [دليل الإشعارات](' + L.notif + ')، ولا كيف يضع تطبيق ميداني كتاباته في طابور بلا شبكة، الموصوف في [دليل العمل دون اتصال](' + L.horsligne + ')؛ بل يصف الآلة التي تشغّل من جهة الخادم كل ما لا شاشة له، ويمتد من [صفحتنا عن هندسة البرمجيات](' + L.service + ').',
    ],
    sections: [
      { heading: 'مهام خلفية تصمد، في خمس طبقات', body: [
        'نص برمجي يطلقه النظام في منتصف الليل طبقة من خمس. والأربع الأخرى هي ما يجعله ينجح، أو يُعلمنا حين يخفق.',
      ], visual: 'couches', after: [
        '**الطلبات.** كل ما يجب ألا يعطّل الشاشة: إرسال 1200 تذكير، تصدير 50000 سطر، إعادة حساب المخزون، تقرير الاثنين، تذكيرات الدفع؛ تجيب الشاشة في ثانية بإنشاء مهمة بأولوية واستحقاق، وتنجز المهمة العمل خلفها. **طابور العمل.** جدول مهام في قاعدة البيانات بحالة وأولوية واستحقاق وحمولة ومفتاح عدم تكرار وعدد محاولات وعقد؛ يُنسخ الطابور مع القاعدة وفق [دليل النسخ الاحتياطي](' + L.sauvegarde + ')، وهو ظاهر في التطبيق. **التنفيذ.** يقفل المنفّذ المهمة بعقد بضع دقائق، وينفذها بمدة قصوى، ويجدد العقد ما دام يتقدم، ويحرره إن مات؛ ومنفّذان لا يأخذان المهمة نفسها أبداً لأن قاعدة البيانات تمسك القفل.',
        '**الإعادات والإخفاقات.** وهي الطبقة المميزة: الإخفاق يطلق إعادة بعد انتظار يتضاعف، مسحوب عشوائياً، مسقوف؛ ومفتاح عدم التكرار يجعل ما أُنجز لا يُعاد؛ وبعد آخر محاولة تذهب المهمة إلى طابور الإخفاقات ويُنبَّه أحد. **الجدولة والقياس.** للمهام ذات الساعة الثابتة مستدرِك عند الإقلاع؛ وللإرسالات معدل ممهَّد؛ وسجل يقول ما عمل، ولوحة تُظهر المهام المتأخرة والمخفقة والمنتظرة، وتنبيه ينطلق إن كبر الطابور، بروح [دليل المراقبة](' + L.observ + ').',
      ] },
      { heading: 'ما يجب أن تجيده المهمة', body: [
        'ست خصائص لمهمة مبنية جيداً، والثالثة هي التي تجنّب الأسوأ.',
      ], visual: 'etapes', after: [
        '**أن تكون صغيرة**: 1200 إرسال اثنتا عشرة مهمة من مئة؛ والتصدير دفعات؛ والمهمة القصيرة تُعاد بسرعة وتعيد القليل. **أن تحمل مفتاحها**: المهمة نفسها مأخوذة مرتين تنجز العمل مرة، والرسالة المرسلة لا تخرج ثانية، بالآلية الموصوفة في [دليل العمل دون اتصال](' + L.horsligne + '). **أن تقفل نفسها**: عقد يُجدَّد ويُحرَّر إن مات المنفّذ؛ وهذا ما يجنّب تذكيرين لكل زبون. **أن تخفق بنظافة**: السبب مكتوب، والانتظار قبل المحاولة التالية يتضاعف بعشوائية وسقف.',
        '**أن تحترم معدلاً**: رسالة في الثانية نحو مزوّد الرسائل، تسع دفعات للتصدير، لا دفقة أبداً، لأن المزوّد يقطع الحساب الذي يرسل 1200 رسالة في عشر ثوانٍ؛ وتفصيل القنوات في [دليل وكيل WhatsApp](' + L.whatsapp + '). **أن تترك أثراً**: بداية ونهاية ونتيجة ومحاولات يقرؤها المسيّر لا المطوّر وحده.',
      ] },
      { heading: 'مهمة واحدة، من الطابور إلى النجاح أو إلى طابور الإخفاقات', body: [
        'يتتبع الشكل مهمة «إرسال 1200 تذكير WhatsApp» بينما مزوّد الرسائل غير متاح.',
      ], visual: 'tentatives', after: [
        'تُؤخذ المهمة وتُقفل؛ تخفق المحاولة الأولى لأن المزوّد يجيب بأنه غير متاح، لكن 380 رسالة كانت قد خرجت. تنتظر المحاولة الثانية ثلاثين ثانية زائد أو ناقص عشر عشوائياً؛ والثالثة دقيقتين زائد أو ناقص ثلاثين ثانية؛ والرابعة ثماني دقائق زائد أو ناقص دقيقتين وتنجح: 1200 أُرسلت، صفر تكرار، لأن مفتاح عدم التكرار، تذكير زائد موعد زائد تاريخ، يتخطى الـ 380 المرسلة. ولو لزمت محاولة خامسة لسُقف الانتظار عند ثلاثين دقيقة، وبعدها لذهبت المهمة إلى طابور الإخفاقات بتنبيه للمسؤول.',
        'والعشوائية في الانتظار ليست تفصيلاً: حين يسقط مزوّد تخفق ألف مهمة في الثانية نفسها، وبلا عشوائية تعيد كلها المحاولة في الثانية نفسها فتُسقطه ثانية. وقد نشر فريق الهندسة المعمارية في Amazon Web Services توصية في هذا الشأن: انتظار أسي مسقوف مع عشوائية يفرّق الإعادات ويقلص عدد النداءات بوضوح. وطابور الإخفاقات يقرؤه إنسان كل صباح فيعيد أو يصحح؛ ولا يُفرَّغ بصمت أبداً. ومدد الشكل مثال مبني.',
      ] },
      { heading: 'ست حالات حقيقية، وما يفعله التطبيق', body: [
        'الحالات الست التي نجدها في كل التطبيقات التي نستلمها تقريباً، والبناء الذي يحلها.',
      ], visual: 'situations', after: [
        'السطران الأولان يُحلان بالمستدرِك عند الإقلاع وبالقفل بعقد؛ والثاني الأكثر كلفة لأن تذكيرين لكل زبون يراهما 1200 زبون. والتاليان بالدفعات والإعادات: تصدير خلفي بدفعات يودع ملفاً ويرسل رابطاً، وانقطاع المزوّد يصير تأخر عشر دقائق لا خسارة. والأخيران بالمعدل الممهَّد والمدة القصوى بعقد منتهٍ. ولا واحد يُحل بمطوّر ينهض ليلاً ليعيد إطلاق نص.',
      ] },
      { heading: 'ليلة خادم، على منفّذين', body: [
        'يُظهر الشكل ما يعمل بين 22:00 و07:00 على خادم مؤسسة صغيرة، على منفّذين، وثلاثة أشياء كانت ستسوء بلا الطابور.',
      ], visual: 'nuit', after: [
        'ينجز المنفّذ أ المهام الثقيلة واحدة واحدة: النسخ الاحتياطي للقاعدة عند 22:00 الذي يمسك قفل «القاعدة»؛ إعادة حساب المخزون بعده مباشرة وفق [دليل المخزون](' + L.stock + ')؛ التصدير المحاسبي بدفعات عند منتصف الليل نحو الصيغة التي ينتظرها المكتب وفق [دليل الدمج](' + L.integrer + ')؛ تحضير تقرير الاثنين عند 02:00، الفائت لأن الخادم أعاد التشغيل عند 02:04 والمستدرَك عند 02:15؛ تذكيرات مواعيد اليوم الـ 1200 عند 06:30 بدفعات من مئة، رسالة في الثانية، وفق [دليل الحجز](' + L.booking + ')؛ التقرير المرسل إلى المسيّر عند 07:00. وينجز المنفّذ ب المهام القصيرة بالتوازي: تنظيف الملفات المؤقتة الذي ينتظر انتهاء النسخ الاحتياطي لأن القفل مأخوذ؛ تذكيرات الدفع عند 23:30؛ إعادة حساب مواعيد الأسبوع المقبل عند 05:30.',
        'ثلاثة أشياء كانت ستسوء بلا الطابور: تقرير 02:00 لم يكن ليوجد ولا أحد كان ليعلم؛ التنظيف كان ليعمل أثناء النسخ الاحتياطي؛ التذكيرات الـ 1200 كانت لتخرج في عشر ثوانٍ ويُحجب الحساب. وكم منفّذاً وعلى أي آلة وأين قرار موصوف في [دليل الاستضافة](' + L.heberger + ')؛ وأوقات الشكل مثال مبني.',
      ] },
      { heading: 'ما رأيناه في مكان آخر: توصية AWS حول الإعادات، وما ينتقل', body: [
        'ثلاث حقائق تنتقل كما هي. **الانتظار الأسي مع العشوائية**: أظهر فريق الهندسة المعمارية في Amazon Web Services بالمحاكاة أن مضاعفة الانتظار بين المحاولات تقلل التزاحم قليلاً ما دام العملاء يعيدون في الوقت نفسه، وأن العلاج إضافة العشوائية، وهو ما قسم عدد النداءات على أكثر من اثنين في محاكاتهم بمئة عميل؛ وما ينتقل هو جدول انتظار بعشوائية وسقف يُكتب في الأسبوع الأول. **التسليم مرة على الأقل**: طابور يضمن تنفيذ مهمة يضمن بذلك أنها قد تُنفَّذ مرتين بعد انقطاع في اللحظة الخطأ؛ وما ينتقل هو أن تحمل كل مهمة مفتاحاً ويكون عملها غير مكرِّر، مثل webhooks الدفع الموصوفة في [دليل الدفع الإلكتروني](' + L.paiement + '). **طابور الإخفاقات**، أو الرسالة الميتة، الموجود في كل أنظمة الرسائل؛ وما ينتقل هو أن يقرأه إنسان لا أن يُخزَّن فقط.',
        'ما لا تقرره هذه الحقائق عنكم: كم محاولة وأي سقف وأي معدل نحو مزوّدكم ومن يُنبَّه ومتى ينطلق التقرير؛ الأسبوع الأول من المشروع يجيب، والمسيّر يوقّع.',
      ] },
      { heading: 'قواعد مهام خلفية تصمد', body: [
        'ست قواعد تُكتب في الأسبوع الأول. **لا شيء طويل يعمل في الشاشة**: كل شيء يصير مهمة. **كل مهمة تحمل مفتاحاً** وعملها غير مكرِّر. **المهمة مقفولة بعقد** يُجدَّد أو يُحرَّر. **للإخفاق جدول**: انتظار يتضاعف، عشوائية، سقف، ثم طابور إخفاقات وتنبيه. **للإرسالات معدل** مكتوب لكل مزوّد. **ما عمل مقروء** للمسيّر عند 07:00 مع ما لم يعمل.',
        'وقاعدة منهج: نصوص الليل الموجودة لا تُعاد كتابتها دفعة واحدة؛ تصير مهاماً واحدةً واحدة بدءاً بالتي يكلّف إخفاقها الأكثر، وكل انتقال بسجله وفق [دليل التسليم دون كسر](' + L.livrer + ').',
      ] },
      { heading: 'ست شركات، والمهمة التي كانت ناقصة', body: [
        'ست حالات مركَّبة من مشاريع نصادفها؛ الأسماء عامة والأرقام أمثلة.',
      ], list: [
        '**عيادة طبية في الجزائر العاصمة، تذكيرات مواعيد.** كانت التذكيرات تخرج مرتين بعض الصباحات لأن خادمين أطلقا النص نفسه. البناء: مهام من مئة إرسال، قفل بعقد، مفتاح لكل تذكير. توقف التكرار من اليوم الأول.',
        '**تاجر جملة في سطيف، تصدير محاسبي.** كان تصدير آخر الشهر يسقط في المتصفح فوق عشرة آلاف سطر. البناء: مهمة خلفية بدفعات، ملف مودَع، رابط مرسل إلى المكتب، استئناف عند الدفعة؛ والصيغة تتبع [دليل الدمج](' + L.integrer + ').',
        '**مؤسس في ليون، متجر إلكتروني في الجزائر.** لم يعد تقرير الليل يصل بعد تحديث الخادم، واكتشف ذلك بعد ثلاثة أسابيع. البناء: مستدرِك عند الإقلاع، تنبيه إن لم ينطلق التقرير عند 07:15؛ والتسيير عن بعد يتبع [دليل التجارة من فرنسا](' + L.commerce + ').',
        '**منصة توصيل في وهران، إشعارات.** قطع مزوّد SMS الحساب بعد دفقة من ألفي رسالة. البناء: معدل ممهَّد لكل مزوّد، دفعات، إعادات بعشوائية حين يكون غير متاح.',
        '**موزع في قسنطينة، إعادة حساب المخزون.** كانت إعادة حساب عالقة تمسك الطابور طوال الليل ولا شيء آخر يعمل. البناء: مدة قصوى، عقد منتهٍ يحرر المهمة ويسمها، طابور يتقدم.',
        '**مؤسسة في عنابة، استيرادات الموردين.** كانت استيرادات الأسعار تعمل في الشاشة وتسقط عند الانقطاع. البناء: استيراد مهمةً بدفعات باستئناف ومفتاح وفق [دليل استيراد Excel](' + L.importer + ').',
      ] },
      { heading: 'تقويم 2027', body: [
        'ستة أسابيع لتطبيق له نصوص ليل وإرسالات أصلاً؛ والأسبوع الأول يمر بلا كود.',
      ], visual: 'calendrier', after: [
        '**الأسبوع 1، جرد المهام**: كل ما يعمل بلا شاشة، إرسالات وتصديرات وإعادة حسابات وتقارير وتذكيرات، بأولوية واستحقاق ومعدل ومدة قصوى ومن يُنبَّه؛ يوقّعه المسيّر. **الأسبوع 2، الطابور والمنفّذون**: جدول مهام في القاعدة، منفّذون، قفل بعقد، مدة قصوى، لوحة المهام في التطبيق. **الأسبوع 3، الإعادات والإخفاقات**: جدول انتظار بعشوائية وسقف، مفتاح عدم تكرار، طابور إخفاقات، تنبيه، إعادة يدوية.',
        '**الأسبوع 4، الجدولة**: مهام بساعة ثابتة، مستدرِك عند الإقلاع، أقفال بين المهام، معدل ممهَّد للإرسالات. **الأسبوع 5، ترحيل النصوص**: نصوص الليل الموجودة تصير مهاماً واحدةً واحدة بسجلها؛ والإرسالات تمر بالطابور. **الأسبوع 6، القياس**: سجل الصباح، مهام متأخرة ومخفقة، حجم الطابور، سبب الإخفاق الأول للأسبوع، على لوحة القيادة وفق [دليل لوحة القيادة الآنية](' + L.dashboard + '). وكل أسبوع ينتهي بعرض.',
      ] },
      { heading: 'ما يُفشل مهام الخلفية', body: [
        'خمسة أسباب رأيناها في تطبيقات نستلمها. **نص منتصف الليل بلا أثر**: يخفق بصمت ثلاثة أسابيع. **الإرسال بنقرة**: ينقر الموظف مرتين، أو ينقر موظفان. **التصدير في المتصفح**: ينقطع الاتصال ويضيع كل شيء. **الإعادة الفورية اللانهائية**: المزوّد الساقط يُطرق حتى يحجب الحساب. **الطابور بلا إنسان**: يكبر طابور الإخفاقات ولا أحد يقرؤه.',
        'وسبب منهجي: معاملة كل مهمة حالة فريدة بنصها ومنطق إعادتها. طابور العمل آلة تُبنى مرة وتستعملها كل المهام.',
      ] },
      { heading: 'أسئلة شائعة', body: [
        'الأسئلة التي يطرحها المسيّرون والمؤسسون حين يصفون لنا إرسالات تخرج مرتين وتقارير لا تخرج.',
      ], faq: [
        { q: 'لماذا لم ينطلق تقرير الليل؟', a: 'غالباً لأن نصاً برمجياً يُطلق في ساعة ثابتة من النظام وكان الخادم يعيد التشغيل، أو لأن النص أخفق دون أن يُنبَّه أحد. والبناء الذي يحل ذلك: مهمة مجدولة في طابور، ومستدرِك عند الإقلاع يعيد الساعات الفائتة، وتنبيه إن لم ينطلق التقرير في الوقت المقرر زائد مهلة.' },
        { q: 'لماذا خرجت الرسائل مرتين؟', a: 'لأن خادمين أو نقرتين أطلقا الإرسال نفسه، أو لأن إعادة أرسلت رسائل خرجت أصلاً. والبناء: قفل بعقد في قاعدة البيانات كي لا تُؤخذ المهمة إلا مرة، ومفتاح عدم تكرار لكل رسالة كي لا تخرج رسالة مرسلة ثانية أبداً حتى بعد إعادة.' },
        { q: 'ما طابور العمل؟', a: 'جدول مهام في قاعدة البيانات بحالة وأولوية واستحقاق وحمولة ومفتاح وعقد، ومنفّذون يأخذون المهمة التالية ويقفلونها وينفذونها ويسجلون النتيجة. وكل ما يجب ألا يعطّل الشاشة يمر به: إرسالات، تصديرات، إعادة حسابات، تقارير، تذكيرات، استيرادات.' },
        { q: 'كيف نعيد المحاولة دون تفاقم انقطاع المزوّد؟', a: 'بانتظار يتضاعف بين المحاولات، مسحوب عشوائياً في نافذة كي لا تنطلق ألف مهمة في الثانية نفسها، ومسقوف. وهي التوصية التي نشرها فريق الهندسة المعمارية في Amazon Web Services. وبعد آخر محاولة تذهب المهمة إلى طابور الإخفاقات بتنبيه.' },
        { q: 'ماذا يحل بمهمة تخفق نهائياً؟', a: 'تذهب إلى طابور الإخفاقات بسببها وحمولتها وعدد محاولاتها، وينطلق تنبيه إلى المسؤول. ويقرأ إنسان هذا الطابور كل صباح فيعيد أو يصحح. ولا تُحذف بصمت أبداً.' },
        { q: 'كم منفّذاً يلزم؟', a: 'لمعظم المؤسسات الصغيرة يكفي اثنان: واحد للمهام الثقيلة واحدة واحدة، وواحد للمهام القصيرة بالتوازي؛ ونضيف حين يكبر الطابور، وهو رقم يُقاس لا يُخمَّن. وأين يعمل هؤلاء المنفّذون يتوقف على الاستضافة المختارة.' },
        { q: 'كم من الوقت لإقامة ذلك؟', a: 'ستة أسابيع في التقويم النموذجي: واحد لجرد المهام، وواحد للطابور والمنفّذين، وواحد للإعادات وطابور الإخفاقات، وواحد للجدولة، وواحد لترحيل النصوص الموجودة، وواحد للقياس. وتتوقف المدة على عدد النصوص الموجودة ومزوّدي الإرسال.' },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: 'المهمة التي تخفق لا تضيع ولا تُعاد إلى ما لا نهاية: تعيد المحاولة على فترات تتضاعف، مسحوبة عشوائياً، مسقوفة، وتنتهي في طابور يقرؤه إنسان.' },
      { after: 4, text: 'للمهمة المجدولة ساعة، لكن أيضاً مستدرِك إن كان الخادم مطفأً، وقفل كي لا تعمل مرتين، ومعدل كي لا تُقطع، وسجل يقول عند 07:00 ما عمل.' },
    ],
    cta: { eyebrow: 'أرسلوا لنا قائمة نصوص الليل وإرسالاتكم، نضعها في طابور', title: 'مسيّر في الجزائر أو مؤسس في فرنسا: نبني الآلة التي تشغّل كل ما لا شاشة له، وتقول لكم عند 07:00 ما عمل', body: 'تبني Symloop وتستلم تطبيقات في الإنتاج للشركات في الجزائر والمؤسسين المقيمين في فرنسا: طابور عمل في قاعدة البيانات، منفّذون، قفل بعقد ومدة قصوى، جدول إعادة بعشوائية وسقف، مفتاح عدم تكرار، طابور إخفاقات وتنبيهات، جدولة بمستدرِك عند الإقلاع، معدل ممهَّد لكل مزوّد، ترحيل النصوص الموجودة، سجل الصباح ولوحة المهام. الكود والقواعد في مستودعكم؛ وعرض كل أسبوعين.' },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.notif, kind: '2027', name: 'الإشعارات: أي قناة لأي رسالة' },
      { href: L.observ, kind: '2027', name: 'معرفة أن التطبيق معطَّل قبل الزبائن' },
      { href: L.horsligne, kind: '2027', name: 'تطبيق دون اتصال: طابور، عدم التكرار' },
      { href: L.importer, kind: '2027', name: 'استيراد ملف Excel كل أسبوع دون كسر' },
    ] },
  },
};

const KEYWORDS = "tâches en arrière-plan application algérie 2027, file de travaux application, job queue background tasks, rapport de nuit pas parti, sms envoyés deux fois application, export plante navigateur arrière-plan, reprises exponentielles hasard plafond, idempotence tâche envoi, file des échecs dead letter, tâche planifiée cron rattrapeuse redémarrage, verrou bail exécutant, débit envoi sms whatsapp lissé, scripts de nuit application pme, background jobs queue retries idempotency algeria 2027, exponential backoff jitter dead letter queue scheduled tasks, مهام الخلفية التطبيق الجزائر 2027, طابور العمل إعادة المحاولة, تقرير الليل لم ينطلق";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
