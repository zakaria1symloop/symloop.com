import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/ouvrir-une-api-a-vos-partenaires-algerie-2027-cles-droits-quotas-webhooks-versions-documentation-sans-exposer-votre-systeme.mjs';

const SLUG = 'ouvrir-une-api-a-vos-partenaires-algerie-2027-cles-droits-quotas-webhooks-versions-documentation-sans-exposer-votre-systeme';
const FIGURES = ['etapes', 'porte', 'couches', 'droits', 'webhook', 'calendrier'];
const DATE = '2026-11-10';

const L = {
  integrer: '/blog/integrer-logiciel-existant-api-algerie-2027-comptabilite-erp-caisse-webhooks-exports-sans-api/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  saas: '/blog/construire-saas-multi-tenant-algerie-2027-isolation-clients-base-partagee-rls-plans-abonnement-mises-a-jour/',
  paiement: '/blog/integrer-paiement-en-ligne-cib-edahabia-application-algerie-2027-page-de-paiement-confirmation-webhook-etats-de-commande-rapprochement-remboursement/',
  portail: '/blog/portail-de-commande-b2b-grossiste-algerie-2027-detaillants-commandent-eux-memes-prix-credit-heure-limite/',
  livraison: '/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/',
  marketplace: '/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/',
  caisse: '/blog/caisse-commerce-algerie-2027-paiement-qr-code-carte-tpe-rapprochement/',
  cdc: '/blog/cahier-des-charges-application-plateforme-algerie-2027-quoi-ecrire-comparer-trois-devis/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  mobile: '/blog/mettre-a-jour-une-application-mobile-sans-la-casser-algerie-2027-compatibilite-api-deploiement-progressif-mise-a-jour-forcee-correctif/',
  agent: '/blog/agent-ia-back-office-erp-algerie-2027-outils-lecture-ecriture-plafonds-approbation-idempotence-journal-ce-que-l-agent-a-le-droit-de-faire/',
  offline: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  froid: '/blog/chaine-du-froid-algerie-2027-grossiste-pharma-agroalimentaire-sondes-alertes-preuve-de-livraison/',
  service: '/services/software-engineering/',
};

const CONTENT = {
  fr: {
    kind: 'API · Partenaires · Intégrations · 2027', title: "Ouvrir une API à vos partenaires en Algérie en 2027 : clés, droits, quotas, webhooks, versions et documentation, sans exposer votre système",
    dek: "« Mon transporteur veut recevoir mes commandes automatiquement. Mon plus gros client veut commander depuis son ERP. Le cabinet comptable veut lire mes factures sans que je lui envoie un fichier chaque mois. » Le jour où une entreprise a une application qui marche, ce sont les autres qui veulent s'y brancher, et la réponse la plus fréquente, un accès à la base « pour aller vite », est celle qu'on regrette. Ce guide décrit comment on ouvre une API à des partenaires sans leur donner le système : une clé par partenaire, des droits par ressource appliqués par le serveur, des quotas, des webhooks signés et réessayés, des versions datées et supportées, un bac à sable et une documentation qu'ils lisent seuls.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['API', 'Partenaires', 'Intégrations', 'Webhooks', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un partenaire est un **utilisateur avec un rôle**, pas une exception : il passe par les **mêmes services** que votre application, et il n'y a **aucune route spéciale**. Entre lui et ces services, une **passerelle** applique six portes, identiques pour tous : connexion chiffrée, **clé ou jeton** par partenaire et révocable, **droits** de lecture et d'écriture par ressource, **quota** par minute et par jour avec un 429 et un délai de réessai, **schéma** typé et versionné, **clé d'idempotence** sur chaque écriture ; et chaque passage ou refus laisse une **ligne de journal**. Ce qui change chez vous part vers lui par des **webhooks signés**, réessayés à écart croissant pendant trois jours, rejouables depuis un portail. La **version 1 est gelée** et ne change que par ajout, avec douze mois de support écrits. Dix semaines, dont deux avant qu'un partenaire voie quoi que ce soit.",
      "Ce guide s'adresse au gérant à qui un transporteur, un gros client ou un cabinet demande « un accès », au fondateur installé en France dont la plateforme doit se brancher à des logiciels qu'il ne connaît pas, et au responsable informatique qui doit dire non à l'accès direct à la base sans bloquer l'entreprise. Il ne redit pas comment on se branche soi-même à un logiciel existant, décrit dans [le guide sur l'intégration](" + L.integrer + "), ni comment les rôles sont construits à l'intérieur de l'application, décrit dans [le guide sur les droits](" + L.roles + ") ; il décrit l'inverse, ce qui se construit quand ce sont les autres qui se branchent à vous, et il prolonge [notre page sur l'ingénierie logicielle](" + L.service + ").",
    ],
    sections: [
      { heading: 'Ce que les grandes plateformes disent', body: [
        "Les plateformes qui ouvrent des API à des milliers de partenaires publient leurs règles, et elles se transposent. Sur les versions : une grande plateforme de commerce en ligne « publie une nouvelle version d'API tous les trois mois », nomme chaque version par sa date, la garantit « stable pour toute sa durée de support », la supporte « au minimum douze mois », et quand un partenaire appelle une version qui n'existe plus, « répond avec la plus ancienne version stable accessible » au lieu de le rejeter. Ce que cela impose : une version ne change que par ajout, la suivante a une date d'annonce et une date de fin de support écrites, et un partenaire en retard reçoit une réponse, pas une erreur.",
        "Sur les webhooks, la documentation d'une grande plateforme de paiement dit que les événements sont réessayés « jusqu'à trois jours avec un écart croissant », qu'elle « ne garantit pas la livraison des événements dans l'ordre », que votre serveur doit « renvoyer rapidement un code 2xx avant toute logique complexe », et que les doublons se détectent par l'identifiant de l'événement, jamais par l'horodatage. La signature est un HMAC-SHA256 du corps brut précédé de l'horodatage, avec une tolérance par défaut de cinq minutes contre le rejeu, et le secret peut être changé avec jusqu'à 24 heures de recouvrement pendant lesquelles deux signatures sont émises. Ce que cela impose : un webhook est une tentative, le partenaire acquitte puis traite, ignore ce qu'il a déjà vu, et peut toujours relire l'état par l'API.",
        "Sur les quotas, le protocole HTTP lui-même a la réponse : le code 429 « Too Many Requests », défini par la RFC 6585, accompagné d'un en-tête Retry-After qui dit combien de temps attendre ; et sur les clés, le flux « client credentials » d'OAuth 2.0 décrit l'échange d'un identifiant et d'un secret contre un jeton court, pour une machine qui parle à une machine. Ce que cela impose : un partenaire qui dépasse son quota ne perd rien, il attend le délai indiqué ; et une clé volée se révoque sans toucher aux autres. Ce que nous n'avons pas trouvé : une norme algérienne ou sectorielle sur les API entre entreprises ; ce que nous voyons, ce sont des accès à la base partagés par e-mail, et nous le disons comme une observation.",
      ] },
      { heading: 'Brancher un partenaire, en six étapes', body: [
        "Avant l'architecture, le parcours d'un partenaire, de la demande à la clé de production.",
      ], visual: 'etapes', after: [
        "**Demande et contrat** : le partenaire dit ce qu'il veut lire et écrire, à quelle fréquence, et les deux parties signent une feuille de droits ; c'est elle qui tranchera les discussions. **Compte et clé de test** : un compte partenaire, une clé de bac à sable, des données fictives qui ressemblent aux vraies, pour qu'il développe sans toucher à rien. **Droits et quotas écrits** : lecture ou écriture par ressource, appels par minute et par jour ; c'est l'étape qu'on saute toujours, et celle qui évite le PATCH sur un prix à trois heures du matin.",
        "**Intégration en bac à sable** : le partenaire développe seul avec la documentation, et ses erreurs sont dans son journal, qu'il lit sans vous appeler. **Revue** : le journal relu ensemble, les erreurs expliquées, l'idempotence vérifiée en renvoyant deux fois la même écriture, les webhooks acquittés. **Clé de production** : activée à une date, avec un quota de départ qu'on relève sur demande, une surveillance la première semaine, et une rotation prévue dans le contrat. Six étapes, dont quatre où le partenaire travaille seul : c'est la mesure d'une API bien faite.",
      ] },
      { heading: 'Trois appels, une seule chaîne de portes', body: [
        "La sécurité d'une API ouverte ne se voit pas sur un schéma mais sur trois appels réels, et sur la porte où chacun s'arrête.",
      ], visual: 'porte', after: [
        "**Le transporteur** lit les commandes à expédier avec sa clé de production : connexion chiffrée, clé reconnue, droit de lecture sur les commandes, quota respecté, schéma de la version 1, pas d'écriture donc pas de clé d'idempotence requise ; il reçoit quarante-huit commandes et l'appel est journalisé avec son nom, la route et le temps de réponse. **Le gros client** tente de modifier un prix : sa clé est valide, mais son rôle ne lui donne que la création de commandes et la lecture de ses factures ; il est arrêté à la porte des droits, reçoit un 403, la tentative est écrite et son interlocuteur est prévenu. Aucune route n'a été « oubliée » : la règle est appliquée par le serveur sur chaque ressource, comme [le guide sur les droits](" + L.roles + ") le décrit pour les utilisateurs internes.",
        "**L'application de caisse** envoie son six cent unième appel de la minute : arrêtée à la porte du quota, elle reçoit un 429 et un Retry-After de douze secondes ; rien n'est perdu, elle réessaie, et si cela se reproduit chaque jour, le quota se relève par écrit. La chaîne est identique pour tous, elle est la seule chose que le partenaire voit de vous, et c'est la même porte que celle qu'on met devant [un agent IA](" + L.agent + ") : un partenaire et un agent sont deux acteurs qui proposent des actions, et le serveur dispose.",
      ] },
      { heading: 'Une API ouverte aux partenaires, en cinq couches', body: [
        "Derrière ces trois appels, cinq couches, et une règle dans la troisième qui tient toutes les autres.",
      ], visual: 'couches', after: [
        "**Le partenaire** : son ERP, son application, son script ; vous ne contrôlez pas son code, vous contrôlez ce qu'il peut demander et ce qu'il reçoit. **La passerelle** : connexion chiffrée, clés et jetons, droits par ressource, quotas, schéma par version, idempotence, journal ; la couche qui protège, identique pour tous, et la seule qu'ils voient. **Vos services** : les mêmes que ceux de votre application, commandes, livraisons, factures, catalogue ; il n'y a pas de route « spéciale partenaire », et ce qu'un partenaire peut faire, un utilisateur avec le même rôle le peut aussi, rien de plus ; c'est ce qui évite que l'API devienne une seconde application à maintenir.",
        "**Les données** : jamais exposées en direct, filtrées par le rôle ; le gros client ne voit que ses commandes et ses factures, le transporteur ne voit pas les prix, et si votre plateforme sert plusieurs clients, c'est l'isolation décrite dans [le guide sur le SaaS multi-tenant](" + L.saas + ") qui s'applique. **Le portail et la supervision** : documentation générée depuis le schéma, bac à sable, clés et secrets gérés par le partenaire lui-même, journal de ses appels et de ses webhooks, rejeu ; ce que le partenaire lit seul au lieu de vous appeler, et ce que vous lisez chaque semaine sur un écran bâti comme [le tableau de bord du gérant](" + L.dashboard + ").",
      ] },
      { heading: 'Six partenaires, et ce que chacun a le droit de faire', body: [
        "La feuille de droits est le document le plus utile du projet, et elle tient en six lignes.",
      ], visual: 'droits', after: [
        "**Le transporteur** lit les commandes à expédier, les adresses et les créneaux, jamais les prix ni les marges ; il écrit le statut de livraison, la preuve et les incidents ; il reçoit les événements d'expédition et d'annulation ; c'est la liaison décrite dans [le guide sur la plateforme de livraison](" + L.livraison + "). **Le gros client B2B** lit son catalogue aux prix négociés, ses commandes et ses factures, rien des autres ; il crée une commande et l'annule avant préparation ; c'est [le portail B2B](" + L.portail + ") vu depuis son ERP. **Le cabinet comptable** lit factures, avoirs et règlements par période, et n'écrit rien.",
        "**Le revendeur ou la marketplace** lit le stock disponible et les prix revendeur, crée des commandes et réserve du stock trente minutes, et reçoit les changements de stock et de prix ; c'est le branchement décrit dans [le guide sur la marketplace](" + L.marketplace + "). **L'application de caisse tierce** lit le catalogue et écrit les ventes et les clôtures, comme [le guide sur la caisse](" + L.caisse + ") le prévoit. **La banque ou l'agrégateur** ne lit rien et n'écrit rien : il envoie ses webhooks signés et vous les vérifiez, selon [le guide sur le paiement](" + L.paiement + "). Les quotas du tableau sont des points de départ ; ils se relèvent sur demande, avec une date, et jamais en silence.",
      ] },
      { heading: 'Un événement livré au partenaire : signé, réessayé, acquitté, rejouable', body: [
        "Les webhooks sont la moitié de l'API que les devis oublient, et la moitié qui réveille la nuit.",
      ], visual: 'webhook', after: [
        "**L'événement** commande.expediee est créé à 10 h 02 pour le transporteur. **Première tentative** : son serveur ne répond pas en dix secondes. **Deuxième**, une minute plus tard : il répond 500, il redémarrait. **Troisième**, à 10 h 12 : 200, acquitté. L'écart entre les tentatives croît, et il reste des tentatives jusqu'à trois jours ; au-delà, l'événement est marqué non livré et le partenaire le voit dans son portail, d'où il peut le rejouer. À chaque tentative, l'en-tête est le même : identifiant de l'événement, horodatage, signature HMAC-SHA256 calculée avec le secret du partenaire sur l'horodatage et le corps brut.",
        "**Côté partenaire**, quatre gestes que la documentation lui explique et que la revue vérifie : vérifier la signature sur le corps brut et rejeter un horodatage de plus de cinq minutes ; répondre 200 tout de suite et traiter ensuite, dans une file ; ignorer un identifiant déjà vu, parce qu'une livraison en double ne doit rien changer ; et relire l'état par l'API quand il doute, parce qu'un webhook est une tentative, pas une vérité. Le secret tourne avec vingt-quatre heures de recouvrement, pendant lesquelles deux signatures sont émises, pour qu'aucun partenaire ne soit coupé un vendredi soir.",
      ] },
      { heading: 'Vu ailleurs : les plateformes qui ouvrent des API, et ce qui se transpose', body: [
        "Trois sources disent l'essentiel. La plateforme de commerce qui publie une version par trimestre et la supporte douze mois dit comment on change une API sans casser ses partenaires : par ajout, avec des dates, et en répondant à ceux qui sont en retard ; ce qui se transpose, c'est la version 1 gelée et la politique de dépréciation écrite dans le contrat. La plateforme de paiement qui réessaie trois jours, ne garantit pas l'ordre et demande un 2xx rapide dit comment on livre des événements à des serveurs qu'on ne contrôle pas ; ce qui se transpose, c'est la signature, les tentatives, l'identifiant d'événement et le rejeu. Le protocole HTTP et OAuth disent comment on refuse proprement et comment on authentifie une machine ; ce qui se transpose, c'est le 429 avec délai et la clé révocable.",
        "Ce que ces sources ne disent pas : ce que vos partenaires ont le droit de voir chez vous, et combien d'appels par minute votre serveur supporte ; la feuille de droits répond à la première question, le test de charge du bac à sable à la seconde.",
      ] },
      { heading: "Les règles d'une API qu'on peut ouvrir sans crainte", body: [
        "Six règles, écrites la première semaine. **Un partenaire est un utilisateur avec un rôle**, qui passe par les mêmes services ; aucune route spéciale. **Une clé par partenaire**, révocable seule, avec rotation prévue. **Les droits sont appliqués par le serveur** sur chaque ressource, pas par la documentation. **Un quota par partenaire**, avec un 429 et un délai, relevé par écrit. **Les webhooks sont signés, réessayés et rejouables**, et le partenaire peut toujours relire l'état. **La version est gelée** : elle ne change que par ajout, et la suivante a des dates.",
        "Une septième règle porte sur le devis : « API pour les partenaires » n'est pas une exigence, c'est une phrase ; l'exigence s'écrit « feuille de droits par type de partenaire, lecture et écriture par ressource ; clé ou jeton par partenaire, révocation, rotation ; quotas par minute et par jour avec 429 et Retry-After ; schéma versionné et documentation générée depuis le schéma ; clé d'idempotence sur chaque écriture ; journal de chaque appel avec partenaire, route, résultat ; webhooks signés HMAC avec horodatage, tentatives à écart croissant jusqu'à trois jours, identifiant d'événement, rejeu depuis le portail ; bac à sable avec données fictives ; politique de versions avec douze mois de support ; aucun accès direct à la base », et elle se vérifie comme [le guide sur le cahier des charges](" + L.cdc + ") le recommande. Un devis qui propose « un accès en lecture à la base pour le partenaire » a proposé la panne numéro un.",
      ] },
      { heading: "Six entreprises, et le premier partenaire qu'elles branchent", body: [
        "Six entreprises que nous équipons souvent, et pour chacune le premier partenaire qui a demandé « un accès ».",
      ], list: [
        "**Le grossiste et son portail**, décrit dans [le guide dédié](" + L.portail + "). Son plus gros détaillant commande depuis son propre logiciel ; il ne voit que ses prix, et le stock qu'il réserve est libéré au bout de trente minutes.",
        "**La plateforme de livraison**, décrite dans [le guide dédié](" + L.livraison + "). Trois boutiques en ligne lui envoient leurs commandes et reçoivent les statuts ; chacune a sa clé, et aucune ne voit les autres.",
        "**Le grossiste pharmaceutique**, décrit dans [le guide sur la chaîne du froid](" + L.froid + "). Le laboratoire lit la traçabilité des lots qu'il a livrés, par lot, jamais par client.",
        "**La marketplace**, décrite dans [le guide dédié](" + L.marketplace + "). Les vendeurs synchronisent stock et prix depuis leur caisse ; six cents appels par minute pour les plus gros, réservation de stock sur commande.",
        "**L'application mobile avec ses partenaires**, décrite dans [le guide sur les mises à jour](" + L.mobile + "). La même règle d'ajout sans retrait sert les anciennes versions de l'application et les partenaires : c'est une seule politique de versions.",
        "**L'entreprise pilotée depuis la France.** Le cabinet comptable à Alger lit factures et règlements chaque soir par l'API ; le fondateur voit dans son tableau qui a appelé quoi, et le fichier mensuel par e-mail a disparu.",
      ] },
      { heading: 'Le calendrier 2027', body: [
        "Le calendrier est celui d'une API ouverte en dix semaines, dont deux avant qu'un partenaire voie quoi que ce soit.",
      ], visual: 'calendrier', after: [
        "**La semaine 0 à 1** écrit le contrat d'API : ressources, droits par type de partenaire, quotas de départ, politique de versions et de dépréciation ; signé. **Les semaines 1 à 3** construisent la passerelle devant les services existants : clés et jetons, droits par ressource, quotas, journal ; aucune route nouvelle. **La semaine 3 à 4** ouvre le bac à sable et la documentation générée depuis le schéma, et le portail où le partenaire gère ses clés et lit son journal. **Les semaines 4 à 6** construisent les webhooks : événements, signature, tentatives à écart croissant, rejeu.",
        "**Les semaines 6 à 8** branchent le premier partenaire réel, un transporteur ou un gros client, en bac à sable puis en production, avec le journal relu ensemble chaque semaine. **Les semaines 8 à 10** gèlent la version 1 : elle ne change plus que par ajout, douze mois de support sont écrits, et la version 2 n'existera que si un changement l'exige. Chaque lot est démontré comme [le guide sur la livraison](" + L.livrer + ") le décrit, et la clé d'idempotence sur chaque écriture suit le principe de [la synchronisation hors ligne](" + L.offline + ") : une écriture renvoyée deux fois ne compte qu'une fois.",
      ] },
      { heading: 'Ce qui fait échouer une API ouverte aux partenaires', body: [
        "Les API que nous reprenons ont presque toujours échoué pour l'une de ces raisons.",
      ], list: [
        "**L'accès direct à la base.** Le partenaire lit tout, écrit parfois, et personne ne sait quoi.",
        "**Une clé pour tous.** Elle fuit chez un partenaire, et on coupe tout le monde pour la changer.",
        "**Des droits dans la documentation, pas dans le serveur.** « Merci de ne pas appeler cette route » n'est pas un contrôle.",
        "**Pas de quota.** Un script mal écrit chez le partenaire appelle mille fois par seconde, et vos propres clients attendent.",
        "**Des webhooks sans signature ni réessai.** N'importe qui peut en envoyer un, et le vrai se perd à la première coupure.",
        "**Un champ retiré sans date.** Trois partenaires plantent le même matin, et aucun n'avait été prévenu.",
        "**Pas de bac à sable.** Le partenaire teste en production, avec de vraies commandes, et on découvre ses erreurs chez les clients.",
      ] },
      { heading: 'Questions fréquentes', body: [
        "Les questions que nous recevons de gérants, de fondateurs et de responsables informatiques.",
      ], faq: [
        { q: 'Un partenaire peut-il accéder directement à notre base de données ?', a: "Non, et c'est la première règle : un partenaire est un utilisateur avec un rôle, qui passe par les mêmes services que votre application, derrière une passerelle qui vérifie sa clé, ses droits par ressource, son quota, le schéma et l'idempotence, et qui journalise chaque appel. Un accès à la base donne tout, à tous, sans trace, et ne se révoque pas sans tout casser." },
        { q: 'Comment limiter ce que chaque partenaire voit ?', a: "Par une feuille de droits signée des deux côtés et appliquée par le serveur sur chaque ressource : le transporteur lit les commandes à expédier mais pas les prix, le gros client ne voit que ses commandes et ses factures, le comptable lit et n'écrit rien. La documentation décrit ces droits ; le serveur les applique, et une tentative hors droits reçoit un 403 et une ligne de journal." },
        { q: 'Que se passe-t-il si un partenaire appelle trop souvent ?', a: "Il a un quota par minute et par jour ; au-delà, il reçoit un 429 avec un en-tête Retry-After qui dit combien de temps attendre, et il ne perd rien en réessayant. Si le dépassement se répète, le quota se relève par écrit, avec une date. Vos propres clients ne sont jamais ralentis par le script d'un partenaire." },
        { q: 'Comment un partenaire est-il prévenu quand quelque chose change chez nous ?', a: "Par des webhooks : un événement signé en HMAC-SHA256 avec un horodatage, envoyé à son adresse, réessayé avec un écart croissant jusqu'à trois jours s'il ne répond pas 2xx, identifié de façon unique pour qu'un doublon ne change rien, et rejouable depuis son portail. Il peut toujours relire l'état par l'API : un webhook est une tentative, pas une vérité." },
        { q: 'Que se passe-t-il quand nous changeons notre API ?', a: "La version 1 ne change que par ajout : de nouveaux champs ou de nouvelles routes, jamais un retrait. Si un changement incompatible est nécessaire, une version 2 est annoncée avec une date, la version 1 reste supportée douze mois, et un partenaire en retard reçoit une réponse plutôt qu'une erreur. C'est la politique que suivent les grandes plateformes de commerce, écrite dans votre contrat d'API." },
        { q: 'Combien de temps pour ouvrir une API à un premier partenaire ?', a: "Dix semaines : une pour le contrat d'API, deux pour la passerelle devant les services existants, une pour le bac à sable et la documentation, deux pour les webhooks, deux pour le premier partenaire en bac à sable puis en production, deux pour geler la version 1. Le partenaire travaille seul pendant la plus grande partie de ce temps, avec la documentation et son journal." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "Le partenaire ne voit jamais votre service ni votre base ; il voit six portes, les mêmes pour tous, et chaque passage ou refus laisse une ligne." },
      { after: 5, text: "Un webhook est une tentative, pas une vérité ; le partenaire acquitte, traite, ignore ce qu'il a déjà vu, et relit l'état quand il doute." },
    ],
    cta: { eyebrow: 'Envoyez-nous la demande de votre premier partenaire', title: "Gérant en Algérie ou fondateur en France : nous ouvrons votre API à vos transporteurs, gros clients, cabinets et applications tierces, sans leur donner votre système", body: "Symloop construit des plateformes et des applications en production pour les entreprises en Algérie et les fondateurs installés en France, et les ouvre à leurs partenaires : feuille de droits par type de partenaire, passerelle avec clés révocables, droits par ressource, quotas, schéma versionné, idempotence et journal, webhooks signés et réessayés avec rejeu, bac à sable et documentation générée, portail partenaire, politique de versions avec douze mois de support. Code et documentation dans votre dépôt ; une démonstration toutes les deux semaines." },
    related: { label: 'À lire aussi', items: [
      { href: L.integrer, kind: '2027', name: 'Intégrer le logiciel existant par API' },
      { href: L.roles, kind: '2027', name: 'Rôles, droits et journal d’audit' },
      { href: L.saas, kind: '2027', name: 'Construire un SaaS multi-tenant' },
      { href: L.paiement, kind: '2027', name: 'Intégrer le paiement en ligne CIB et Edahabia' },
    ] },
  },
  en: {
    kind: 'API · Partners · Integrations · 2027', title: 'Opening an API to your partners in Algeria in 2027: keys, rights, quotas, webhooks, versions and documentation, without exposing your system',
    dek: '“My carrier wants to receive my orders automatically. My biggest client wants to order from their ERP. The accounting firm wants to read my invoices without me sending a file every month.” The day a company has an application that works, others want to plug into it, and the most common answer, database access “to go fast”, is the one people regret. This guide describes how an API is opened to partners without handing them the system: one key per partner, rights per resource enforced by the server, quotas, signed and retried webhooks, dated and supported versions, a sandbox and documentation they read on their own.',
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['API', 'Partners', 'Integrations', 'Webhooks', 'Algeria 2027'],
    intro: [
      '**Short answer.** A partner is a **user with a role**, not an exception: they go through the **same services** as your application, and there is **no special route**. Between them and those services, a **gateway** applies six gates, identical for everyone: encrypted connection, a **key or token** per partner that can be revoked, read and write **rights** per resource, a **quota** per minute and per day with a 429 and a retry delay, a typed and versioned **schema**, an **idempotency key** on every write; and every pass or refusal leaves a **log line**. What changes on your side goes to them through **signed webhooks**, retried with a growing gap for three days, replayable from a portal. **Version 1 is frozen** and changes only by addition, with twelve months of support written down. Ten weeks, two of them before any partner sees anything.',
      'This guide is for the manager asked for “an access” by a carrier, a big client or a firm, the founder settled in France whose platform must connect to software they do not know, and the IT manager who must say no to direct database access without blocking the business. It does not repeat how you connect to existing software yourself, described in [the integration guide](' + L.integrer + '), nor how roles are built inside the application, described in [the rights guide](' + L.roles + '); it describes the reverse, what is built when others plug into you, and extends [our page on software engineering](' + L.service + ').',
    ],
    sections: [
      { heading: 'What the large platforms say', body: [
        'Platforms that open APIs to thousands of partners publish their rules, and they transpose. On versions: a large e-commerce platform “releases a new API version every three months”, names each version by its date, guarantees it “not to change for its supported lifetime”, supports it “for a minimum of 12 months”, and when a partner calls a version that no longer exists, “falls forward and responds using the oldest accessible stable version” instead of rejecting them. What this imposes: a version changes only by addition, the next one has a written announcement date and end-of-support date, and a lagging partner receives an answer, not an error.',
        'On webhooks, the documentation of a large payment platform says events are retried “for up to three days with an exponential back off”, that it “doesn’t guarantee the delivery of events in the order that they’re generated”, that your server must “quickly return a successful status code (2xx) before any complex logic”, and that duplicates are detected by the event id, never by the timestamp. The signature is an HMAC-SHA256 of the raw body prefixed by the timestamp, with a default tolerance of five minutes against replay, and the secret can be rolled with up to 24 hours of overlap during which two signatures are emitted. What this imposes: a webhook is an attempt, the partner acknowledges then processes, ignores what it has already seen, and can always re-read the state through the API.',
        'On quotas, the HTTP protocol itself has the answer: status 429 “Too Many Requests”, defined by RFC 6585, with a Retry-After header saying how long to wait; and on keys, OAuth 2.0’s “client credentials” flow describes exchanging an identifier and a secret for a short-lived token, for a machine talking to a machine. What this imposes: a partner exceeding its quota loses nothing, it waits the stated delay; and a stolen key is revoked without touching the others. What we did not find: an Algerian or sector standard for APIs between companies; what we see is database access shared by e-mail, and we say so as an observation.',
      ] },
      { heading: 'Connecting a partner, in six steps', body: [
        'Before the architecture, a partner’s path, from the request to the production key.',
      ], visual: 'etapes', after: [
        '**Request and contract**: the partner says what they want to read and write, how often, and both parties sign a rights sheet; it is what will settle the discussions. **Account and test key**: a partner account, a sandbox key, fake data that looks like the real thing, so they can build without touching anything. **Rights and quotas written**: read or write per resource, calls per minute and per day; it is the step always skipped, and the one that prevents the PATCH on a price at three in the morning.',
        '**Sandbox integration**: the partner builds alone with the documentation, and their errors are in their own log, which they read without calling you. **Review**: the log reread together, errors explained, idempotency checked by resending the same write twice, webhooks acknowledged. **Production key**: activated on a date, with a starting quota raised on request, a first-week watch, and a rotation planned in the contract. Six steps, four of them where the partner works alone: that is the measure of a well-made API.',
      ] },
      { heading: 'Three calls, one chain of gates', body: [
        'The security of an open API is not seen on a diagram but on three real calls, and on the gate where each one stops.',
      ], visual: 'porte', after: [
        '**The carrier** reads the orders to ship with its production key: encrypted connection, key recognised, read right on orders, quota respected, version 1 schema, no write so no idempotency key required; it receives forty-eight orders and the call is logged with its name, the route and the response time. **The big client** tries to change a price: its key is valid, but its role only grants creating orders and reading its invoices; it is stopped at the rights gate, receives a 403, the attempt is written and its contact is notified. No route was “forgotten”: the rule is enforced by the server on every resource, as [the rights guide](' + L.roles + ') describes for internal users.',
        '**The point-of-sale app** sends its 601st call of the minute: stopped at the quota gate, it receives a 429 and a Retry-After of twelve seconds; nothing is lost, it retries, and if this happens every day, the quota is raised in writing. The chain is identical for everyone, it is the only thing the partner sees of you, and it is the same gate as the one placed in front of [an AI agent](' + L.agent + '): a partner and an agent are two actors who propose actions, and the server disposes.',
      ] },
      { heading: 'An API open to partners, in five layers', body: [
        'Behind those three calls, five layers, and a rule in the third that holds all the others.',
      ], visual: 'couches', after: [
        '**The partner**: their ERP, their app, their script; you do not control their code, you control what they may ask and what they receive. **The gateway**: encrypted connection, keys and tokens, rights per resource, quotas, schema per version, idempotency, log; the layer that protects, identical for everyone, and the only one they see. **Your services**: the same as your application’s, orders, deliveries, invoices, catalogue; there is no “partner-special” route, and what a partner can do, a user with the same role can do too, nothing more; that is what keeps the API from becoming a second application to maintain.',
        '**Data**: never exposed directly, filtered by role; the big client sees only its orders and invoices, the carrier does not see prices, and if your platform serves several clients, the isolation described in [the multi-tenant SaaS guide](' + L.saas + ') applies. **Portal and supervision**: documentation generated from the schema, sandbox, keys and secrets managed by the partner themselves, log of their calls and webhooks, replay; what the partner reads alone instead of calling you, and what you read every week on a screen built like [the manager’s dashboard](' + L.dashboard + ').',
      ] },
      { heading: 'Six partners, and what each is allowed to do', body: [
        'The rights sheet is the most useful document of the project, and it fits in six lines.',
      ], visual: 'droits', after: [
        '**The carrier** reads orders to ship, addresses and time slots, never prices or margins; it writes delivery status, proof and incidents; it receives shipping and cancellation events; it is the link described in [the delivery platform guide](' + L.livraison + '). **The big B2B client** reads its catalogue at negotiated prices, its orders and its invoices, nothing of others; it creates an order and cancels it before preparation; it is [the B2B portal](' + L.portail + ') seen from its ERP. **The accounting firm** reads invoices, credit notes and payments per period, and writes nothing.',
        '**The reseller or marketplace** reads available stock and reseller prices, creates orders and reserves stock for thirty minutes, and receives stock and price changes; it is the connection described in [the marketplace guide](' + L.marketplace + '). **The third-party point of sale** reads the catalogue and writes sales and closings, as [the point-of-sale guide](' + L.caisse + ') provides. **The bank or aggregator** reads nothing and writes nothing: it sends its signed webhooks and you verify them, per [the payment guide](' + L.paiement + '). The quotas in the table are starting points; they are raised on request, with a date, and never silently.',
      ] },
      { heading: 'One event delivered to a partner: signed, retried, acknowledged, replayable', body: [
        'Webhooks are the half of the API that quotes forget, and the half that wakes you at night.',
      ], visual: 'webhook', after: [
        '**The event** order.shipped is created at 10:02 for the carrier. **First attempt**: its server does not answer within ten seconds. **Second**, a minute later: it answers 500, it was restarting. **Third**, at 10:12: 200, acknowledged. The gap between attempts grows, and attempts continue for up to three days; beyond that, the event is marked undelivered and the partner sees it in its portal, from where it can replay it. On every attempt the header is the same: event id, timestamp, HMAC-SHA256 signature computed with the partner’s secret over the timestamp and the raw body.',
        '**On the partner’s side**, four gestures the documentation explains and the review checks: verify the signature on the raw body and reject a timestamp older than five minutes; answer 200 right away and process afterwards, in a queue; ignore an id already seen, because a duplicate delivery must change nothing; and re-read the state through the API when in doubt, because a webhook is an attempt, not a truth. The secret rotates with twenty-four hours of overlap, during which two signatures are emitted, so that no partner is cut off on a Friday evening.',
      ] },
      { heading: 'Seen elsewhere: platforms that open APIs, and what transposes', body: [
        'Three sources say the essentials. The commerce platform that publishes a version every quarter and supports it for twelve months says how you change an API without breaking partners: by addition, with dates, and by answering those who lag; what transposes is the frozen version 1 and the deprecation policy written in the contract. The payment platform that retries for three days, does not guarantee order and asks for a quick 2xx says how you deliver events to servers you do not control; what transposes is the signature, the attempts, the event id and the replay. HTTP and OAuth say how you refuse cleanly and how you authenticate a machine; what transposes is the 429 with a delay and the revocable key.',
        'What these sources do not say: what your partners are allowed to see at your end, and how many calls per minute your server can take; the rights sheet answers the first question, the sandbox load test the second.',
      ] },
      { heading: 'The rules of an API you can open without fear', body: [
        'Six rules, written in week one. **A partner is a user with a role**, going through the same services; no special route. **One key per partner**, revocable on its own, with rotation planned. **Rights are enforced by the server** on every resource, not by the documentation. **One quota per partner**, with a 429 and a delay, raised in writing. **Webhooks are signed, retried and replayable**, and the partner can always re-read the state. **The version is frozen**: it changes only by addition, and the next one has dates.',
        'A seventh rule concerns the quote: “API for partners” is not a requirement, it is a sentence; the requirement reads “rights sheet per partner type, read and write per resource; key or token per partner, revocation, rotation; quotas per minute and per day with 429 and Retry-After; versioned schema and documentation generated from the schema; idempotency key on every write; log of every call with partner, route, result; HMAC-signed webhooks with timestamp, attempts with a growing gap for up to three days, event id, replay from the portal; sandbox with fake data; versioning policy with twelve months of support; no direct database access”, and it is checked as [the specification guide](' + L.cdc + ') recommends. A quote proposing “read access to the database for the partner” has proposed failure number one.',
      ] },
      { heading: 'Six companies, and the first partner they connect', body: [
        'Six companies we often equip, and for each the first partner who asked for “an access”.',
      ], list: [
        '**The wholesaler and its portal**, described in [the dedicated guide](' + L.portail + '). Its biggest retailer orders from its own software; it sees only its prices, and the stock it reserves is released after thirty minutes.',
        '**The delivery platform**, described in [the dedicated guide](' + L.livraison + '). Three online shops send it their orders and receive statuses; each has its key, and none sees the others.',
        '**The pharmaceutical wholesaler**, described in [the cold-chain guide](' + L.froid + '). The laboratory reads the traceability of the batches it delivered, per batch, never per customer.',
        '**The marketplace**, described in [the dedicated guide](' + L.marketplace + '). Sellers synchronise stock and prices from their point of sale; six hundred calls a minute for the largest, stock reservation on order.',
        '**The mobile app with its partners**, described in [the updates guide](' + L.mobile + '). The same add-without-remove rule serves old app versions and partners: it is one versioning policy.',
        '**The company run from France.** The accounting firm in Algiers reads invoices and payments every evening through the API; the founder sees in their board who called what, and the monthly e-mailed file is gone.',
      ] },
      { heading: 'The 2027 calendar', body: [
        'The calendar is that of an API opened in ten weeks, two of them before any partner sees anything.',
      ], visual: 'calendrier', after: [
        '**Week 0 to 1** writes the API contract: resources, rights per partner type, starting quotas, versioning and deprecation policy; signed. **Weeks 1 to 3** build the gateway in front of the existing services: keys and tokens, rights per resource, quotas, log; no new route. **Week 3 to 4** opens the sandbox and the documentation generated from the schema, and the portal where the partner manages keys and reads its log. **Weeks 4 to 6** build the webhooks: events, signature, attempts with a growing gap, replay.',
        '**Weeks 6 to 8** connect the first real partner, a carrier or a big client, in sandbox then in production, with the log reread together every week. **Weeks 8 to 10** freeze version 1: it now changes only by addition, twelve months of support are written, and version 2 will exist only if a change requires it. Every batch is demoed as [the delivery guide](' + L.livrer + ') describes, and the idempotency key on every write follows the principle of [offline synchronisation](' + L.offline + '): a write sent twice counts once.',
      ] },
      { heading: 'What makes a partner API fail', body: [
        'The APIs we take over almost always failed for one of these reasons.',
      ], list: [
        '**Direct database access.** The partner reads everything, sometimes writes, and nobody knows what.',
        '**One key for everyone.** It leaks at one partner, and everyone is cut off to change it.',
        '**Rights in the documentation, not in the server.** “Please do not call this route” is not a control.',
        '**No quota.** A badly written script at the partner calls a thousand times a second, and your own customers wait.',
        '**Webhooks with no signature or retry.** Anyone can send one, and the real one is lost at the first outage.',
        '**A field removed without a date.** Three partners crash the same morning, and none had been warned.',
        '**No sandbox.** The partner tests in production, with real orders, and you discover their errors at your customers.',
      ] },
      { heading: 'Frequently asked questions', body: [
        'The questions we receive from managers, founders and IT managers.',
      ], faq: [
        { q: 'Can a partner access our database directly?', a: 'No, and it is the first rule: a partner is a user with a role, going through the same services as your application, behind a gateway that checks their key, their rights per resource, their quota, the schema and idempotency, and logs every call. Database access gives everything, to everyone, without a trace, and cannot be revoked without breaking everything.' },
        { q: 'How do we limit what each partner sees?', a: 'Through a rights sheet signed on both sides and enforced by the server on every resource: the carrier reads orders to ship but not prices, the big client sees only its orders and invoices, the accountant reads and writes nothing. The documentation describes these rights; the server enforces them, and an out-of-rights attempt receives a 403 and a log line.' },
        { q: 'What happens if a partner calls too often?', a: 'They have a quota per minute and per day; beyond it, they receive a 429 with a Retry-After header saying how long to wait, and they lose nothing by retrying. If the overrun repeats, the quota is raised in writing, with a date. Your own customers are never slowed down by a partner’s script.' },
        { q: 'How is a partner told when something changes on our side?', a: 'Through webhooks: an event signed with HMAC-SHA256 and a timestamp, sent to their address, retried with a growing gap for up to three days if they do not answer 2xx, uniquely identified so that a duplicate changes nothing, and replayable from their portal. They can always re-read the state through the API: a webhook is an attempt, not a truth.' },
        { q: 'What happens when we change our API?', a: 'Version 1 changes only by addition: new fields or new routes, never a removal. If an incompatible change is necessary, version 2 is announced with a date, version 1 stays supported for twelve months, and a lagging partner receives an answer rather than an error. It is the policy large commerce platforms follow, written in your API contract.' },
        { q: 'How long to open an API to a first partner?', a: 'Ten weeks: one for the API contract, two for the gateway in front of existing services, one for the sandbox and documentation, two for webhooks, two for the first partner in sandbox then production, two to freeze version 1. The partner works alone for most of that time, with the documentation and their log.' },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: 'The partner never sees your service or your database; it sees six gates, the same for everyone, and every pass or refusal leaves a line.' },
      { after: 5, text: 'A webhook is an attempt, not a truth; the partner acknowledges, processes, ignores what it has seen, and re-reads the state when in doubt.' },
    ],
    cta: { eyebrow: 'Send us your first partner’s request', title: 'Manager in Algeria or founder in France: we open your API to your carriers, big clients, firms and third-party apps, without handing them your system', body: 'Symloop builds platforms and applications in production for companies in Algeria and founders settled in France, and opens them to their partners: rights sheet per partner type, gateway with revocable keys, rights per resource, quotas, versioned schema, idempotency and log, signed and retried webhooks with replay, sandbox and generated documentation, partner portal, versioning policy with twelve months of support. Code and documentation in your repository; a demo every two weeks.' },
    related: { label: 'Read next', items: [
      { href: L.integrer, kind: '2027', name: 'Integrating existing software by API' },
      { href: L.roles, kind: '2027', name: 'Roles, permissions and the audit log' },
      { href: L.saas, kind: '2027', name: 'Building a multi-tenant SaaS' },
      { href: L.paiement, kind: '2027', name: 'Integrating CIB and Edahabia online payment' },
    ] },
  },
  ar: {
    kind: 'API · شركاء · عمليات دمج · 2027', title: 'فتح واجهة برمجية لشركائكم في الجزائر سنة 2027: المفاتيح، الحقوق، الحصص، الـ webhooks، النسخ والوثائق، دون كشف نظامكم',
    dek: '«ناقلي يريد استلام طلبياتي آلياً. أكبر زبائني يريد الطلب من نظامه. مكتب المحاسبة يريد قراءة فواتيري دون أن أرسل له ملفاً كل شهر.» يوم تملك شركة تطبيقاً يعمل، يريد الآخرون الاتصال به، والجواب الأكثر شيوعاً، وصول إلى القاعدة «للإسراع»، هو الذي يُندَم عليه. يصف هذا الدليل كيف تُفتح واجهة للشركاء دون إعطائهم النظام: مفتاح لكل شريك، حقوق لكل مورد يطبّقها الخادم، حصص، webhooks موقَّعة ومُعادة، نسخ مؤرَّخة ومدعومة، بيئة تجريبية ووثائق يقرؤونها وحدهم.',
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['API', 'شركاء', 'عمليات دمج', 'Webhooks', 'الجزائر 2027'],
    intro: [
      '**الجواب القصير.** الشريك **مستعمل بدور**، لا استثناء: يمر بـ **الخدمات نفسها** التي لتطبيقكم، ولا **مسار خاصاً** له. وبينه وبين تلك الخدمات، **بوابة** تطبّق ستة أبواب متطابقة للجميع: اتصال مشفَّر، **مفتاح أو رمز** لكل شريك قابل للإلغاء، **حقوق** قراءة وكتابة لكل مورد، **حصة** في الدقيقة واليوم مع 429 ومهلة إعادة، **مخطط** منمَّط ومرقَّم، **مفتاح عدم تكرار** على كل كتابة؛ وكل مرور أو رفض يترك **سطراً في السجل**. وما يتغير عندكم يصل إليه بـ **webhooks موقَّعة**، تُعاد بفاصل متزايد ثلاثة أيام، وقابلة للإعادة من بوابة. و**النسخة 1 مجمَّدة** لا تتغير إلا بالإضافة، باثني عشر شهراً من الدعم مكتوبة. عشرة أسابيع، اثنان منها قبل أن يرى أي شريك شيئاً.',
      'هذا الدليل موجّه إلى المسيّر الذي يطلب منه ناقل أو زبون كبير أو مكتب «وصولاً»، وإلى المؤسس المقيم في فرنسا الذي يجب أن تتصل منصته ببرامج لا يعرفها، وإلى مسؤول الإعلام الآلي الذي يجب أن يرفض الوصول المباشر إلى القاعدة دون تعطيل الشركة. لا يعيد كيف نتصل نحن ببرنامج قائم، الموصوف في [دليل الدمج](' + L.integrer + ')، ولا كيف تُبنى الأدوار داخل التطبيق، الموصوف في [دليل الحقوق](' + L.roles + ')؛ بل يصف العكس، ما يُبنى حين يتصل الآخرون بكم، ويمدّ [صفحتنا عن هندسة البرمجيات](' + L.service + ').',
    ],
    sections: [
      { heading: 'ما تقوله المنصات الكبرى', body: [
        'المنصات التي تفتح واجهاتها لآلاف الشركاء تنشر قواعدها، وهي تنتقل. في النسخ: منصة تجارة إلكترونية كبرى «تصدر نسخة جديدة من الواجهة كل ثلاثة أشهر»، وتسمّي كل نسخة بتاريخها، وتضمن أنها «لا تتغير طوال مدة دعمها»، وتدعمها «اثني عشر شهراً على الأقل»، وحين يستدعي شريك نسخة لم تعد موجودة «تجيب بأقدم نسخة مستقرة متاحة» بدل رفضه. وما يفرضه ذلك: النسخة لا تتغير إلا بالإضافة، والتالية لها تاريخ إعلان وتاريخ نهاية دعم مكتوبان، والشريك المتأخر يتلقى جواباً لا خطأ.',
        'في الـ webhooks، تقول وثائق منصة دفع كبرى إن الأحداث تُعاد «حتى ثلاثة أيام بفاصل متزايد»، وإنها «لا تضمن تسليم الأحداث بترتيب توليدها»، وإن على خادمكم أن «يعيد رمز 2xx بسرعة قبل أي منطق معقد»، وإن المكررات تُكتشف بمعرّف الحدث لا بالطابع الزمني أبداً. والتوقيع HMAC-SHA256 للنص الخام مسبوقاً بالطابع الزمني، بتسامح افتراضي خمس دقائق ضد الإعادة، ويمكن تدوير السر بتداخل حتى 24 ساعة تصدر خلالها توقيعان. وما يفرضه ذلك: الـ webhook محاولة، والشريك يقرّ ثم يعالج، ويتجاهل ما سبق رؤيته، ويستطيع دائماً إعادة قراءة الحالة عبر الواجهة.',
        'في الحصص، بروتوكول HTTP نفسه يملك الجواب: الرمز 429 «طلبات كثيرة جداً» المعرَّف في RFC 6585، مع ترويسة Retry-After تقول كم ننتظر؛ وفي المفاتيح، تدفق «client credentials» في OAuth 2.0 يصف مبادلة معرّف وسر برمز قصير العمر، لآلة تخاطب آلة. وما يفرضه ذلك: الشريك الذي يتجاوز حصته لا يخسر شيئاً، ينتظر المهلة المذكورة؛ والمفتاح المسروق يُلغى دون مس الآخرين. وما لم نجده: معيار جزائري أو قطاعي للواجهات بين الشركات؛ وما نراه هو وصول إلى القاعدة يُتقاسَم بالبريد، ونقولها ملاحظةً.',
      ] },
      { heading: 'وصل شريك، في ست خطوات', body: [
        'قبل الهندسة، مسار الشريك من الطلب إلى مفتاح الإنتاج.',
      ], visual: 'etapes', after: [
        '**الطلب والعقد**: يقول الشريك ما يريد قراءته وكتابته وبأي تواتر، ويوقّع الطرفان ورقة حقوق؛ وهي التي ستحسم النقاشات. **حساب ومفتاح اختبار**: حساب شريك، مفتاح بيئة تجريبية، بيانات وهمية تشبه الحقيقية، كي يطوّر دون مس شيء. **حقوق وحصص مكتوبة**: قراءة أو كتابة لكل مورد، استدعاءات في الدقيقة واليوم؛ وهي الخطوة التي تُتخطى دائماً، والتي تمنع تعديل سعر في الثالثة فجراً.',
        '**دمج في البيئة التجريبية**: يطوّر الشريك وحده بالوثائق، وأخطاؤه في سجله الذي يقرؤه دون أن يتصل بكم. **مراجعة**: السجل يُعاد قراءته معاً، الأخطاء تُشرح، عدم التكرار يُتحقَّق منه بإعادة إرسال الكتابة نفسها مرتين، الـ webhooks مُقرّ بها. **مفتاح الإنتاج**: يُفعَّل في تاريخ، بحصة بداية تُرفع عند الطلب، ومراقبة في الأسبوع الأول، وتدوير مخطَّط في العقد. ست خطوات، أربع منها يعمل فيها الشريك وحده: وهذا مقياس الواجهة المصنوعة جيداً.',
      ] },
      { heading: 'ثلاثة استدعاءات، سلسلة أبواب واحدة', body: [
        'أمان الواجهة المفتوحة لا يُرى على مخطط بل على ثلاثة استدعاءات حقيقية، وعلى الباب الذي يتوقف عنده كل منها.',
      ], visual: 'porte', after: [
        '**الناقل** يقرأ الطلبيات الجاهزة للشحن بمفتاح إنتاجه: اتصال مشفَّر، مفتاح معروف، حق قراءة على الطلبيات، حصة محترمة، مخطط النسخة 1، لا كتابة فلا مفتاح عدم تكرار مطلوب؛ يتلقى ثماني وأربعين طلبية ويُسجَّل الاستدعاء باسمه والمسار وزمن الرد. **الزبون الكبير** يحاول تعديل سعر: مفتاحه صالح، لكن دوره لا يمنحه إلا إنشاء الطلبيات وقراءة فواتيره؛ يُوقَف عند باب الحقوق، يتلقى 403، تُكتب المحاولة ويُنبَّه مخاطبه. لم يُنسَ أي مسار: القاعدة يطبّقها الخادم على كل مورد، كما يصف [دليل الحقوق](' + L.roles + ') للمستعملين الداخليين.',
        '**تطبيق الصندوق** يرسل استدعاءه الـ 601 في الدقيقة: يُوقَف عند باب الحصة، يتلقى 429 وRetry-After اثنتي عشرة ثانية؛ لا شيء يضيع، يعيد المحاولة، وإن تكرر ذلك كل يوم تُرفع الحصة كتابةً. والسلسلة متطابقة للجميع، وهي الشيء الوحيد الذي يراه الشريك منكم، وهي الباب نفسه الذي يوضع أمام [وكيل ذكاء اصطناعي](' + L.agent + '): الشريك والوكيل فاعلان يقترحان أفعالاً، والخادم يقرر.',
      ] },
      { heading: 'واجهة مفتوحة للشركاء، في خمس طبقات', body: [
        'خلف هذه الاستدعاءات الثلاثة خمس طبقات، وقاعدة في الثالثة تحمل كل الأخرى.',
      ], visual: 'couches', after: [
        '**الشريك**: نظامه، تطبيقه، برنامجه النصي؛ لا تتحكمون في كوده، تتحكمون فيما يستطيع طلبه وما يتلقاه. **البوابة**: اتصال مشفَّر، مفاتيح ورموز، حقوق لكل مورد، حصص، مخطط لكل نسخة، عدم تكرار، سجل؛ الطبقة التي تحمي، متطابقة للجميع، والوحيدة التي يرونها. **خدماتكم**: نفسها التي لتطبيقكم، الطلبيات والتسليمات والفواتير والكتالوج؛ لا مسار «خاص بالشركاء»، وما يستطيع الشريك فعله يستطيعه مستعمل بالدور نفسه ولا أكثر؛ وهذا ما يمنع الواجهة من أن تصير تطبيقاً ثانياً يُصان.',
        '**البيانات**: لا تُكشف مباشرة أبداً، مرشَّحة بالدور؛ الزبون الكبير لا يرى إلا طلبياته وفواتيره، والناقل لا يرى الأسعار، وإن كانت منصتكم تخدم عدة زبائن فالعزل الموصوف في [دليل SaaS متعدد المستأجرين](' + L.saas + ') هو الذي يُطبَّق. **البوابة والإشراف**: وثائق مولَّدة من المخطط، بيئة تجريبية، مفاتيح وأسرار يديرها الشريك بنفسه، سجل استدعاءاته وwebhooks، إعادة؛ ما يقرؤه الشريك وحده بدل أن يتصل بكم، وما تقرؤونه كل أسبوع على شاشة تُبنى مثل [لوحة قيادة المسيّر](' + L.dashboard + ').',
      ] },
      { heading: 'ستة شركاء، وما يحق لكل منهم فعله', body: [
        'ورقة الحقوق أنفع وثيقة في المشروع، وتتسع في ستة أسطر.',
      ], visual: 'droits', after: [
        '**الناقل** يقرأ الطلبيات الجاهزة للشحن والعناوين والفترات، لا الأسعار ولا الهوامش أبداً؛ يكتب حالة التسليم والإثبات والحوادث؛ يتلقى أحداث الشحن والإلغاء؛ وهو الربط الموصوف في [دليل منصة التوصيل](' + L.livraison + '). **الزبون الكبير B2B** يقرأ كتالوجه بالأسعار المتفاوَض عليها وطلبياته وفواتيره، لا شيء من الآخرين؛ ينشئ طلبية ويلغيها قبل التحضير؛ وهو [بوابة B2B](' + L.portail + ') مرئية من نظامه. **مكتب المحاسبة** يقرأ الفواتير وإشعارات الدائن والتسديدات حسب الفترة، ولا يكتب شيئاً.',
        '**الموزّع أو المنصة التجارية** يقرأ المخزون المتاح وأسعار الموزّع، ينشئ طلبيات ويحجز مخزوناً ثلاثين دقيقة، ويتلقى تغيرات المخزون والأسعار؛ وهو الوصل الموصوف في [دليل المنصة التجارية](' + L.marketplace + '). **تطبيق الصندوق الخارجي** يقرأ الكتالوج ويكتب المبيعات والإقفالات كما ينص [دليل الصندوق](' + L.caisse + '). **البنك أو المجمّع** لا يقرأ ولا يكتب شيئاً: يرسل webhooks موقَّعة وأنتم تتحققون منها وفق [دليل الدفع](' + L.paiement + '). وحصص الجدول نقاط بداية؛ تُرفع عند الطلب بتاريخ، ولا تُرفع في صمت أبداً.',
      ] },
      { heading: 'حدث يُسلَّم إلى شريك: موقَّع، مُعاد، مُقرّ به، قابل للإعادة', body: [
        'الـ webhooks نصف الواجهة الذي تنساه عروض الأسعار، والنصف الذي يوقظ ليلاً.',
      ], visual: 'webhook', after: [
        '**الحدث** commande.expediee يُنشأ في 10:02 للناقل. **المحاولة الأولى**: خادمه لا يجيب في عشر ثوانٍ. **الثانية**، بعد دقيقة: يجيب 500، كان يعيد التشغيل. **الثالثة**، في 10:12: 200، مُقرّ به. والفاصل بين المحاولات يتزايد، وتستمر المحاولات حتى ثلاثة أيام؛ وبعدها يُوسم الحدث غير مسلَّم ويراه الشريك في بوابته حيث يستطيع إعادته. وفي كل محاولة الترويسة نفسها: معرّف الحدث، الطابع الزمني، توقيع HMAC-SHA256 محسوب بسر الشريك على الطابع الزمني والنص الخام.',
        '**عند الشريك**، أربعة أفعال تشرحها الوثائق وتتحقق منها المراجعة: التحقق من التوقيع على النص الخام ورفض طابع زمني أقدم من خمس دقائق؛ الرد 200 فوراً والمعالجة بعدها في طابور؛ تجاهل معرّف سبق رؤيته لأن التسليم المكرر يجب ألا يغيّر شيئاً؛ وإعادة قراءة الحالة عبر الواجهة عند الشك، لأن الـ webhook محاولة لا حقيقة. والسر يدور بتداخل أربع وعشرين ساعة يصدر خلالها توقيعان، كي لا يُقطع أي شريك مساء جمعة.',
      ] },
      { heading: 'رأيناه في مكان آخر: المنصات التي تفتح واجهاتها، وما ينتقل', body: [
        'ثلاثة مصادر تقول الجوهر. منصة التجارة التي تنشر نسخة كل فصل وتدعمها اثني عشر شهراً تقول كيف تُغيَّر واجهة دون كسر الشركاء: بالإضافة، وبتواريخ، وبالإجابة عن المتأخرين؛ وما ينتقل هو النسخة 1 المجمَّدة وسياسة الإهمال المكتوبة في العقد. ومنصة الدفع التي تعيد ثلاثة أيام ولا تضمن الترتيب وتطلب 2xx سريعاً تقول كيف تُسلَّم أحداث إلى خوادم لا نتحكم فيها؛ وما ينتقل هو التوقيع والمحاولات ومعرّف الحدث والإعادة. وHTTP وOAuth يقولان كيف نرفض بنظافة وكيف نوثّق آلة؛ وما ينتقل هو 429 بمهلة والمفتاح القابل للإلغاء.',
        'وما لا تقوله هذه المصادر: ما يحق لشركائكم رؤيته عندكم، وكم استدعاءً في الدقيقة يحتمل خادمكم؛ ورقة الحقوق تجيب عن الأول، واختبار الحمل في البيئة التجريبية عن الثاني.',
      ] },
      { heading: 'قواعد واجهة يمكن فتحها بلا خوف', body: [
        'ست قواعد تُكتب في الأسبوع الأول. **الشريك مستعمل بدور** يمر بالخدمات نفسها؛ لا مسار خاصاً. **مفتاح لكل شريك**، يُلغى وحده، بتدوير مخطَّط. **الحقوق يطبّقها الخادم** على كل مورد لا الوثائق. **حصة لكل شريك**، مع 429 ومهلة، تُرفع كتابةً. **الـ webhooks موقَّعة ومُعادة وقابلة للإعادة**، والشريك يستطيع دائماً إعادة قراءة الحالة. **النسخة مجمَّدة**: لا تتغير إلا بالإضافة، وللتالية تواريخ.',
        'قاعدة سابعة تخص عرض السعر: «واجهة للشركاء» ليس متطلباً بل جملة؛ المتطلب يُكتب «ورقة حقوق لكل نوع شريك، قراءة وكتابة لكل مورد؛ مفتاح أو رمز لكل شريك، إلغاء، تدوير؛ حصص في الدقيقة واليوم مع 429 وRetry-After؛ مخطط مرقَّم ووثائق مولَّدة من المخطط؛ مفتاح عدم تكرار على كل كتابة؛ سجل لكل استدعاء بالشريك والمسار والنتيجة؛ webhooks موقَّعة HMAC بطابع زمني، محاولات بفاصل متزايد حتى ثلاثة أيام، معرّف حدث، إعادة من البوابة؛ بيئة تجريبية ببيانات وهمية؛ سياسة نسخ باثني عشر شهراً من الدعم؛ لا وصول مباشراً إلى القاعدة»، ويُتحقَّق منه كما يوصي [دليل دفتر الشروط](' + L.cdc + '). وعرض السعر الذي يقترح «وصول قراءة إلى القاعدة للشريك» اقترح العطل رقم واحد.',
      ] },
      { heading: 'ست شركات، وأول شريك تصله', body: [
        'ست شركات نجهّزها كثيراً، ولكل منها أول شريك طلب «وصولاً».',
      ], list: [
        '**تاجر الجملة وبوابته**، الموصوفان في [الدليل المخصص](' + L.portail + '). أكبر تجار تجزئته يطلب من برنامجه الخاص؛ لا يرى إلا أسعاره، والمخزون الذي يحجزه يُحرَّر بعد ثلاثين دقيقة.',
        '**منصة التوصيل**، الموصوفة في [الدليل المخصص](' + L.livraison + '). ثلاثة متاجر إلكترونية ترسل إليها طلبياتها وتتلقى الحالات؛ لكل منها مفتاحه، ولا يرى أي منها الآخرين.',
        '**تاجر الجملة الصيدلاني**، الموصوف في [دليل سلسلة التبريد](' + L.froid + '). المخبر يقرأ تتبع الدفعات التي سلّمها، لكل دفعة، لا لكل زبون أبداً.',
        '**المنصة التجارية**، الموصوفة في [الدليل المخصص](' + L.marketplace + '). البائعون يزامنون المخزون والأسعار من صندوقهم؛ ستمئة استدعاء في الدقيقة لأكبرهم، وحجز مخزون عند الطلب.',
        '**التطبيق المحمول وشركاؤه**، الموصوف في [دليل التحديثات](' + L.mobile + '). قاعدة الإضافة بلا حذف نفسها تخدم نسخ التطبيق القديمة والشركاء: سياسة نسخ واحدة.',
        '**الشركة المُدارة من فرنسا.** مكتب المحاسبة في الجزائر العاصمة يقرأ الفواتير والتسديدات كل مساء عبر الواجهة؛ والمؤسس يرى في لوحته من استدعى ماذا، وملف البريد الشهري اختفى.',
      ] },
      { heading: 'تقويم 2027', body: [
        'التقويم تقويم واجهة تُفتح في عشرة أسابيع، اثنان منها قبل أن يرى أي شريك شيئاً.',
      ], visual: 'calendrier', after: [
        '**الأسبوع 0 إلى 1** يكتب عقد الواجهة: الموارد، الحقوق لكل نوع شريك، حصص البداية، سياسة النسخ والإهمال؛ موقَّعاً. **الأسبوعان 1 إلى 3** يبنيان البوابة أمام الخدمات القائمة: مفاتيح ورموز، حقوق لكل مورد، حصص، سجل؛ لا مسار جديداً. **الأسبوع 3 إلى 4** يفتح البيئة التجريبية والوثائق المولَّدة من المخطط، والبوابة التي يدير فيها الشريك مفاتيحه ويقرأ سجله. **الأسبوعان 4 إلى 6** يبنيان الـ webhooks: الأحداث، التوقيع، المحاولات بفاصل متزايد، الإعادة.',
        '**الأسبوعان 6 إلى 8** يصلان الشريك الحقيقي الأول، ناقلاً أو زبوناً كبيراً، في البيئة التجريبية ثم في الإنتاج، والسجل يُعاد قراءته معاً كل أسبوع. **الأسبوعان 8 إلى 10** يجمّدان النسخة 1: لا تتغير إلا بالإضافة، واثنا عشر شهراً من الدعم مكتوبة، والنسخة 2 لن توجد إلا إن اقتضاها تغيير. وكل دفعة تُعرض كما يصف [دليل التسليم](' + L.livrer + ')، ومفتاح عدم التكرار على كل كتابة يتبع مبدأ [المزامنة دون اتصال](' + L.offline + '): كتابة أُرسلت مرتين تُعدّ مرة.',
      ] },
      { heading: 'ما يُفشل واجهة مفتوحة للشركاء', body: [
        'الواجهات التي نستلمها فشلت دائماً تقريباً لأحد هذه الأسباب.',
      ], list: [
        '**الوصول المباشر إلى القاعدة.** الشريك يقرأ كل شيء، ويكتب أحياناً، ولا أحد يعرف ماذا.',
        '**مفتاح واحد للجميع.** يتسرب عند شريك، فيُقطع الجميع لتغييره.',
        '**حقوق في الوثائق لا في الخادم.** «يرجى عدم استدعاء هذا المسار» ليس تحكماً.',
        '**لا حصة.** برنامج نصي سيئ الكتابة عند الشريك يستدعي ألف مرة في الثانية، وزبائنكم ينتظرون.',
        '**webhooks بلا توقيع ولا إعادة.** أي أحد يستطيع إرسالها، والحقيقية تضيع عند أول انقطاع.',
        '**حقل حُذف بلا تاريخ.** ثلاثة شركاء ينهارون في الصباح نفسه، ولم يُنبَّه أي منهم.',
        '**لا بيئة تجريبية.** الشريك يختبر في الإنتاج بطلبيات حقيقية، ونكتشف أخطاءه عند الزبائن.',
      ] },
      { heading: 'أسئلة شائعة', body: [
        'الأسئلة التي نتلقاها من مسيّرين ومؤسسين ومسؤولي إعلام آلي.',
      ], faq: [
        { q: 'هل يستطيع شريك الوصول مباشرة إلى قاعدة بياناتنا؟', a: 'لا، وهذه القاعدة الأولى: الشريك مستعمل بدور، يمر بالخدمات نفسها التي لتطبيقكم، خلف بوابة تتحقق من مفتاحه وحقوقه لكل مورد وحصته والمخطط وعدم التكرار، وتسجّل كل استدعاء. والوصول إلى القاعدة يعطي كل شيء للجميع بلا أثر، ولا يُلغى دون كسر كل شيء.' },
        { q: 'كيف نحدّ ما يراه كل شريك؟', a: 'بورقة حقوق موقَّعة من الجانبين يطبّقها الخادم على كل مورد: الناقل يقرأ الطلبيات الجاهزة للشحن لا الأسعار، الزبون الكبير لا يرى إلا طلبياته وفواتيره، المحاسب يقرأ ولا يكتب شيئاً. الوثائق تصف هذه الحقوق؛ والخادم يطبّقها، والمحاولة خارج الحقوق تتلقى 403 وسطراً في السجل.' },
        { q: 'ماذا يحدث إن استدعى شريك كثيراً جداً؟', a: 'له حصة في الدقيقة واليوم؛ وفوقها يتلقى 429 مع ترويسة Retry-After تقول كم ينتظر، ولا يخسر شيئاً بإعادة المحاولة. وإن تكرر التجاوز تُرفع الحصة كتابةً بتاريخ. وزبائنكم لا يُبطَّؤون أبداً ببرنامج شريك.' },
        { q: 'كيف يُنبَّه الشريك حين يتغير شيء عندنا؟', a: 'بالـ webhooks: حدث موقَّع بـ HMAC-SHA256 وطابع زمني، يُرسل إلى عنوانه، يُعاد بفاصل متزايد حتى ثلاثة أيام إن لم يجب 2xx، بمعرّف فريد كي لا يغيّر المكرر شيئاً، وقابل للإعادة من بوابته. ويستطيع دائماً إعادة قراءة الحالة عبر الواجهة: الـ webhook محاولة لا حقيقة.' },
        { q: 'ماذا يحدث حين نغيّر واجهتنا؟', a: 'النسخة 1 لا تتغير إلا بالإضافة: حقول أو مسارات جديدة، لا حذف أبداً. وإن لزم تغيير غير متوافق، تُعلَن النسخة 2 بتاريخ، وتبقى النسخة 1 مدعومة اثني عشر شهراً، ويتلقى الشريك المتأخر جواباً لا خطأ. وهي السياسة التي تتبعها منصات التجارة الكبرى، مكتوبة في عقد واجهتكم.' },
        { q: 'كم من الوقت لفتح واجهة لشريك أول؟', a: 'عشرة أسابيع: واحد لعقد الواجهة، اثنان للبوابة أمام الخدمات القائمة، واحد للبيئة التجريبية والوثائق، اثنان للـ webhooks، اثنان للشريك الأول في البيئة التجريبية ثم الإنتاج، اثنان لتجميد النسخة 1. ويعمل الشريك وحده معظم هذا الوقت بالوثائق وسجله.' },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: 'الشريك لا يرى خدمتكم ولا قاعدتكم أبداً؛ يرى ستة أبواب، هي نفسها للجميع، وكل مرور أو رفض يترك سطراً.' },
      { after: 5, text: 'الـ webhook محاولة لا حقيقة؛ الشريك يقرّ ويعالج ويتجاهل ما سبق رؤيته ويعيد قراءة الحالة عند الشك.' },
    ],
    cta: { eyebrow: 'أرسلوا لنا طلب شريككم الأول', title: 'مسيّر في الجزائر أو مؤسس في فرنسا: نفتح واجهتكم لناقليكم وزبائنكم الكبار ومكاتبكم والتطبيقات الخارجية، دون إعطائهم نظامكم', body: 'تبني Symloop منصات وتطبيقات في الإنتاج للشركات في الجزائر والمؤسسين المقيمين في فرنسا، وتفتحها لشركائهم: ورقة حقوق لكل نوع شريك، بوابة بمفاتيح قابلة للإلغاء، حقوق لكل مورد، حصص، مخطط مرقَّم، عدم تكرار وسجل، webhooks موقَّعة ومُعادة مع إعادة، بيئة تجريبية ووثائق مولَّدة، بوابة شركاء، سياسة نسخ باثني عشر شهراً من الدعم. الكود والوثائق في مستودعكم؛ وعرض كل أسبوعين.' },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.integrer, kind: '2027', name: 'دمج البرنامج القائم عبر API' },
      { href: L.roles, kind: '2027', name: 'الأدوار والصلاحيات وسجل التدقيق' },
      { href: L.saas, kind: '2027', name: 'بناء SaaS متعدد المستأجرين' },
      { href: L.paiement, kind: '2027', name: 'دمج الدفع الإلكتروني CIB والذهبية' },
    ] },
  },
};

const KEYWORDS = "ouvrir une api partenaires algérie 2027, api pour partenaires entreprise, api transporteur commandes, api b2b client erp, donner accès api partenaire sans base de données, clés api quotas webhooks, webhooks signés hmac réessai, versionner une api 12 mois, documentation api bac à sable partenaire, passerelle api entreprise algérie, partner api keys quotas webhooks algeria 2027, open api to partners versioning, واجهة برمجية للشركاء الجزائر, فتح API للشركاء";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
