import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/integrer-paiement-en-ligne-cib-edahabia-application-algerie-2027-page-de-paiement-confirmation-webhook-etats-de-commande-rapprochement-remboursement.mjs';

const SLUG = 'integrer-paiement-en-ligne-cib-edahabia-application-algerie-2027-page-de-paiement-confirmation-webhook-etats-de-commande-rapprochement-remboursement';
const FIGURES = ['chiffres', 'parcours', 'couches', 'etats', 'situations', 'calendrier'];
const DATE = '2026-11-09';

const L = {
  billetterie: '/blog/creer-plateforme-billetterie-en-ligne-algerie-2027-billet-qr-porte-paiement/',
  saas: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/',
  caisse: '/blog/caisse-commerce-algerie-2027-paiement-qr-code-carte-tpe-rapprochement/',
  marketplace: '/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/',
  offline: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  notif: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  integrer: '/blog/integrer-logiciel-existant-api-algerie-2027-comptabilite-erp-caisse-webhooks-exports-sans-api/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  cdc: '/blog/cahier-des-charges-application-plateforme-algerie-2027-quoi-ecrire-comparer-trois-devis/',
  heberger: '/blog/heberger-application-algerie-ou-europe-2027-ou-mettre-serveurs-et-donnees-latence-paiement-sauvegardes-reprise-montage-mixte/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  sport: '/blog/creer-application-salle-de-sport-algerie-2027-abonnement-acces-renouvellement/',
  promoteur: '/blog/promoteur-immobilier-vendre-sur-plan-diaspora-2027-espace-acquereur-suivi-chantier/',
  location: '/blog/creer-plateforme-location-voiture-algerie-2027-reservation-caution-etat-des-lieux/',
  omra: '/blog/agence-omra-algerie-2027-dossier-pelerin-paiement-par-tranches-suivi-groupes/',
  cours: '/blog/creer-plateforme-cours-soutien-scolaire-algerie-2027-bac-cours-arabe-diaspora/',
  commerce: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/',
  service: '/services/software-engineering/',
};

const CONTENT = {
  fr: {
    kind: 'Paiement en ligne · CIB · Edahabia · Intégration · 2027', title: "Intégrer le paiement en ligne CIB et Edahabia dans votre application en Algérie en 2027 : la page de paiement, la confirmation côté serveur, le webhook, les états d'une commande, le rapprochement et le remboursement",
    dek: "« Le client dit qu'il a payé, mais la commande est toujours en attente. » C'est la phrase que nous entendons sur presque toutes les boutiques que nous reprenons, et elle a une seule cause : l'application a cru le navigateur au lieu de demander à la passerelle. Ce guide décrit comment on intègre le paiement par carte CIB et Edahabia dans une application sans perdre un paiement ni en compter un deux fois : ce que la passerelle fait, ce que votre serveur doit faire, les sept états d'une commande, la signature d'un webhook, la clé qui empêche le double débit, le rapprochement avec le relevé de la banque, et le remboursement qui passe par l'API.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Paiement en ligne', 'CIB', 'Edahabia', 'Intégration', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** La carte du client n'entre jamais dans votre application : votre serveur crée une commande **en attente** avec un montant calculé chez lui, enregistre cette commande auprès de la **passerelle**, et envoie le client sur la **page de paiement** de celle-ci. Quand le client revient sur votre site, ce retour est un **indice**, pas une preuve : votre serveur demande à la passerelle le **statut réel**, ou reçoit un **webhook signé**, et c'est seulement là que la commande devient **payée**. Chaque commande a une **clé d'idempotence** pour qu'un double clic ou un webhook reçu deux fois ne débite ni ne compte deux fois. Chaque semaine, le **relevé** de la banque est rapproché des commandes, et un remboursement passe par l'**API** de la passerelle, jamais par un virement manuel. Dix semaines, dont deux de pilote à petits montants.",
      "Ce guide s'adresse au commerçant ou au gérant qui veut encaisser par carte dans son application ou sa boutique, au fondateur installé en France qui veut vendre en dinars à des clients en Algérie, et au responsable qui doit comparer un devis « intégration du paiement » avec un autre. Il ne redit pas quel modèle économique choisir, décrit dans [le guide sur la marketplace](" + L.marketplace + ") et [celui sur le SaaS](" + L.saas + "), ni comment on encaisse au comptoir, décrit dans [le guide sur la caisse](" + L.caisse + ") ; il décrit ce qui se construit entre votre application et la passerelle, et il prolonge [notre page sur l'ingénierie logicielle](" + L.service + ").",
    ],
    sections: [
      { heading: 'Ce que les documentations disent', body: [
        "L'entrée est administrative avant d'être technique, et elle est publique. Le portail CIBWEB du GIE Monétique décrit le parcours d'un commerçant : créer un compte et déposer une demande, que le GIE « traite et statue sur son acceptabilité en moins de 24 h » selon ses propres mots ; passer « les tests techniques d'intégration à la plateforme de paiement électronique » ; obtenir une « autorisation d'entrée en exploitation ». Les conditions d'éligibilité qu'il affiche sont l'inscription au registre du commerce ou au registre de l'artisanat et l'inscription au fichier national des e-fournisseurs. Ce que cela impose : on vérifie ces deux inscriptions la première semaine, avant d'écrire une ligne, et le délai de la phase de tests se demande par écrit, parce que le portail ne le donne pas.",
        "Le mécanisme technique est celui d'une page de paiement hébergée, documenté par des tiers. La documentation non officielle de la passerelle SATIM que nous avons lue décrit un enregistrement de commande qui renvoie un identifiant et une adresse de page de paiement, un montant « multiplié par 100 » avant l'envoi, un minimum de 50 dinars, une adresse de retour et une adresse d'échec, puis une confirmation côté serveur qui renvoie le statut, un code d'action et un code d'approbation. Elle distingue un environnement de test et un environnement de production. Nous le disons avec prudence : c'est une documentation tierce, et les paramètres exacts se relisent dans le guide d'intégration remis par votre banque ou votre intégrateur. Ce que cela impose : la même architecture quel que soit le fournisseur, une commande chez vous, une page chez eux, une confirmation à la source.",
        "Les agrégateurs documentent la partie que les boutiques oublient : la notification. La documentation d'un agrégateur algérien qui prend en charge CIB et Edahabia décrit un webhook envoyé en HTTPS avec un type d'événement, « checkout.paid » par exemple, une **signature HMAC-SHA256 du corps brut de la requête calculée avec votre clé secrète**, une réponse 200 attendue de votre serveur, des clés de test préfixées et un champ qui distingue le mode réel du mode test ; elle précise qu'un webhook ne peut pas atteindre un serveur local, d'où un tunnel pendant le développement. Ce que nous n'avons pas trouvé : une grille de frais officielle, un délai de versement publié, une politique de renvoi des webhooks ; les trois se demandent par écrit, et les guides tiers qui citent des pourcentages se contredisent, raison pour laquelle nous n'en citons aucun.",
      ] },
      { heading: "Un paiement, de l'écran du client au relevé de la banque", body: [
        "Le paiement ne se comprend pas sur un schéma d'API mais sur le trajet d'un paiement réel, et sur la station où l'on a le droit de le croire.",
      ], visual: 'parcours', after: [
        "**Première station**, chez vous : le client valide son panier, votre serveur fige les lignes, calcule le montant, crée la commande en attente avec un numéro et une clé d'idempotence, et enregistre cette commande auprès de la passerelle en lui envoyant le montant ; c'est votre serveur qui dit le montant, jamais l'écran. **Deuxième**, chez la passerelle : le client est envoyé sur sa page de paiement, qui est la seule à voir la carte. **Troisième**, sur le téléphone du client : il saisit sa carte CIB ou Edahabia et le code reçu par SMS, selon le parcours de sa banque. **Quatrième**, le retour : le navigateur revient sur votre adresse de succès avec un identifiant dans l'adresse. C'est l'indice. Il arrive parfois avant le paiement, parfois après, parfois jamais.",
        "**Cinquième station**, la seule qui compte : votre serveur demande à la passerelle le statut de la commande, ou reçoit le webhook signé, et lit « payé » à la source. C'est la preuve, et c'est ici seulement que la commande change d'état. **Sixième** : payée, reçu envoyé par WhatsApp et e-mail selon [le guide sur les notifications](" + L.notif + "), stock réservé. Puis, un à trois jours plus tard, une ligne apparaît sur le relevé de la banque acquéreuse, nette ou avant commission selon votre contrat, et le rapprochement la relie au numéro de commande ; ce qui ne se relie pas devient une question posée à la banque, pas un écart qu'on découvre à la clôture.",
      ] },
      { heading: 'Le paiement en ligne dans une application, en cinq couches', body: [
        "Derrière ces six stations, cinq couches, et une seule vous appartient vraiment.",
      ], visual: 'couches', after: [
        "**L'écran** : le panier, le bouton payer, la page d'attente, les pages de succès et d'échec ; il affiche l'état, il ne le décide jamais, et un écran de succès qui dit « payé » parce que l'adresse contient le mot succès est le premier défaut que nous corrigeons. **Votre serveur** : la commande et sa machine à états, les montants calculés côté serveur, la clé d'idempotence, le journal ; c'est la seule couche qui écrit « payée », et seulement après avoir vérifié à la source. **La passerelle** : la page de paiement hébergée, l'enregistrement, le statut, le remboursement ; SATIM en direct par votre banque, ou un agrégateur qui porte le contrat et la page ; la carte ne traverse jamais la frontière entre cette couche et la vôtre.",
        "**La banque et le réseau** : la banque acquéreuse qui vous verse, la banque émettrice du client, le réseau interbancaire, le GIE Monétique qui autorise ; les frais, le délai de versement et le contrat se négocient ici, et aucune ligne de code ne les change. **La supervision** : le rapprochement relevé ↔ commandes, les commandes en attente depuis trop longtemps, les webhooks rejetés pour signature invalide, les remboursements du mois ; un écran lu chaque semaine, bâti comme [le tableau de bord du gérant](" + L.dashboard + "). Le choix entre SATIM en direct et un agrégateur se fait par écrit la première semaine, avec les frais et le délai de versement de chacun, et il ne change rien aux couches deux et cinq : c'est la raison d'écrire la machine à états avant de brancher qui que ce soit.",
      ] },
      { heading: "Les états d'une commande, et ce qui a le droit de les changer", body: [
        "La machine à états est le cœur de l'intégration, et le dessin qu'on relit avec le client avant la première ligne.",
      ], visual: 'etats', after: [
        "**Sept états.** Créée : le panier est figé et le montant calculé. En attente de paiement : la commande est enregistrée chez la passerelle et la page est ouverte. Payée : le statut a été lu à la source. Livrée : le colis a été scanné ou le service rendu. Échouée : la banque a refusé. Expirée : trente minutes sans confirmation, le stock est libéré. Remboursée : total ou partiel, daté, avec le motif. **Trois événements** font avancer le chemin normal : la validation côté serveur, le statut « payé » lu chez la passerelle, la livraison scannée. Chacun est vérifié par votre serveur, et chacun écrit une ligne de journal avec l'état avant et après, comme [le guide sur le journal d'audit](" + L.roles + ") le prévoit.",
        "**Deux choses ne font rien.** Le retour du navigateur sur votre adresse de succès, barré sur le dessin : il affiche l'état en base, il ne le modifie pas, et c'est ce qui rend indifférent l'ordre d'arrivée entre le retour et le webhook. Le second exemplaire d'un webhook : sa signature est vérifiée, son identifiant d'événement est reconnu, votre serveur répond 200 et n'écrit rien. La règle tient en une phrase, écrite dans le cahier des charges : **un état ne change que sur un événement vérifié par votre serveur, jamais sur ce que le navigateur du client raconte.** Tout le reste, reçu, stock, comptabilité, découle de l'état, et jamais de l'écran.",
      ] },
      { heading: "Six situations réelles, et ce que l'architecture fait", body: [
        "Six situations que nous voyons chaque semaine sur des boutiques qui fonctionnent, et le mécanisme qui règle chacune.",
      ], visual: 'situations', after: [
        "**Le client paie puis ferme l'onglet** : le retour n'arrive jamais ; le webhook, ou la vérification planifiée des commandes en attente toutes les cinq minutes, passe la commande à payée, et le reçu part sans que le client revienne. **Deux clics sur payer** : une clé d'idempotence par panier, et le second clic renvoie la même commande et la même page au lieu d'en créer une deuxième ; c'est la mécanique décrite dans [le guide sur le mode hors ligne](" + L.offline + "). **Le webhook arrive avant le retour** : la page de succès lit l'état en base et l'affiche ; l'ordre est indifférent.",
        "**Le même webhook arrive deux fois** : identifiant mémorisé, seconde livraison acquittée sans écriture ; sans cela, deux reçus, deux lignes comptables et un stock décompté deux fois. **Payé, mais le stock a disparu** : le dernier article est parti au comptoir pendant le paiement ; remboursement par l'API de la passerelle, état remboursée, message au client, et jamais un virement manuel qu'aucun rapprochement ne retrouvera. **La passerelle ne répond plus** : le paiement à la livraison ou le virement reste proposé, les commandes en attente expirent proprement et libèrent le stock, et la supervision le signale ; une boutique qui n'a que la carte ne vend rien ce soir-là.",
      ] },
      { heading: "Vu ailleurs : les pages de paiement hébergées, les webhooks signés, et ce qui se transpose", body: [
        "Trois sources disent l'essentiel. Le portail du GIE Monétique dit que l'entrée est une demande, des tests techniques et une autorisation ; ce qui se transpose, c'est que le dossier se dépose la première semaine, parallèlement au code en environnement de test. La documentation tierce de la passerelle SATIM décrit une commande enregistrée côté serveur, une page hébergée et une confirmation à la source ; ce qui se transpose, c'est que votre serveur ne voit jamais la carte et ne croit jamais le navigateur. La documentation d'un agrégateur décrit un webhook signé, acquitté par un 200 et impossible à recevoir en local ; ce qui se transpose, c'est la vérification de la signature sur le corps brut, la mémoire des événements reçus, et un tunnel pendant le développement.",
        "Ce que ces sources ne disent pas : les frais, le délai de versement, la politique de renvoi des webhooks, et le comportement exact de la page de paiement sur le téléphone de vos clients ; les deux premiers se demandent par écrit, les deux derniers se mesurent au pilote.",
      ] },
      { heading: "Les règles d'une intégration de paiement qu'on peut mettre en production", body: [
        "Six règles, écrites la première semaine. **Le montant est calculé côté serveur**, jamais lu depuis l'écran ni depuis l'adresse de retour. **Le retour du navigateur n'est qu'un indice** ; seul le statut lu à la source ou un webhook signé change l'état. **Une clé d'idempotence par commande**, et un identifiant mémorisé par webhook : rien n'est débité ni compté deux fois. **Une commande en attente expire** et libère le stock. **Le relevé est rapproché des commandes chaque semaine**, et chaque écart est une question posée. **Un remboursement passe par l'API** et laisse un état, un motif et une date.",
        "Une septième règle porte sur le devis : « intégration du paiement CIB/Edahabia » n'est pas une exigence, c'est une phrase ; l'exigence s'écrit « machine à états de la commande avec sept états et les événements autorisés ; montants côté serveur ; enregistrement de la commande chez la passerelle et page hébergée ; confirmation du statut à la source ; webhook avec signature vérifiée sur le corps brut et identifiants mémorisés ; clé d'idempotence par panier ; expiration des commandes en attente ; rapprochement relevé ↔ commandes avec liste des écarts ; remboursement par API ; environnement de test, tests techniques de la plateforme, pilote à petits montants », et elle se vérifie comme [le guide sur le cahier des charges](" + L.cdc + ") le recommande. Un devis qui chiffre « le bouton de paiement » a chiffré l'écran, c'est-à-dire la couche qui ne décide rien.",
      ] },
      { heading: "Six entreprises, et ce que leur paiement a de particulier", body: [
        "Six entreprises que nous équipons souvent, et pour chacune la particularité que la machine à états doit porter.",
      ], list: [
        "**La billetterie**, décrite dans [le guide dédié](" + L.billetterie + "). Le billet n'existe qu'à l'état payée ; l'expiration libère les places en quelques minutes, pas en heures.",
        "**La salle de sport et son abonnement**, décrits dans [le guide dédié](" + L.sport + "). Chaque échéance est une commande ; l'accès suit l'état, et le renouvellement propose la page de paiement par WhatsApp.",
        "**Le promoteur qui vend sur plan à la diaspora**, décrit dans [le guide dédié](" + L.promoteur + "). Des tranches datées, chacune une commande, et un reçu qui porte le numéro du lot ; les plafonds de carte se vérifient avec la banque avant d'annoncer le paiement en ligne.",
        "**L'agence Omra**, décrite dans [le guide dédié](" + L.omra + "). Le paiement par tranches, l'état du dossier qui suit les états des paiements, et un remboursement partiel qui garde le motif.",
        "**La plateforme de cours**, décrite dans [le guide dédié](" + L.cours + "). Le parent en France paie en dinars pour l'élève en Algérie ; la commande porte les deux identités, et le reçu part aux deux.",
        "**Le commerce piloté depuis la France**, décrit dans [le guide dédié](" + L.commerce + "). Le fondateur voit chaque matin les commandes payées, en attente trop longtemps et remboursées, et le rapprochement du relevé le vendredi.",
      ] },
      { heading: 'Le calendrier 2027', body: [
        "Le calendrier est celui d'un paiement en ligne mis en production en dix semaines, dont les deux premières d'attente administrative se recouvrent avec le code.",
      ], visual: 'calendrier', after: [
        "**La semaine 0 à 1** dépose le dossier et tranche le choix : compte CIBWEB, registre et e-fournisseur vérifiés, SATIM en direct par la banque ou agrégateur, décidé par écrit avec les frais et le délai de versement. **Les semaines 1 à 3** écrivent la machine à états en environnement de test : commande, montants côté serveur, clé d'idempotence, pages de succès et d'échec, avec des webhooks simulés ; rien n'est encore branché à la vraie passerelle, et c'est voulu. **Les semaines 3 à 5** branchent la confirmation et le webhook : statut lu à la source, signature vérifiée, identifiants mémorisés, vérification planifiée des commandes en attente.",
        "**Les semaines 5 à 7** passent les tests techniques de la plateforme et obtiennent l'autorisation ; leur durée dépend de la plateforme et se demande par écrit. **La semaine 7 à 8** construit le rapprochement et le remboursement. **Les semaines 8 à 10** sont le pilote à petits montants : paiements réels de l'équipe puis de dix clients, chaque écart lu chaque jour, puis la décision d'ouvrir à tous. Chaque lot est démontré comme [le guide sur la livraison](" + L.livrer + ") le décrit, et les serveurs sont placés selon [le guide sur l'hébergement](" + L.heberger + ") : la page de paiement est chez la passerelle, mais votre machine à états doit répondre vite au webhook, d'où elle est.",
      ] },
      { heading: 'Ce qui fait échouer une intégration de paiement', body: [
        "Les intégrations que nous reprenons ont presque toujours échoué pour l'une de ces raisons.",
      ], list: [
        "**Croire le retour du navigateur.** La commande passe à payée parce que l'adresse contient « succès » ; des commandes payées sans débit, des débits sans commande.",
        "**Le montant lu depuis l'écran.** Un paramètre modifié dans le navigateur, et un article à 8 500 dinars payé 85.",
        "**Pas de clé d'idempotence.** Un double clic, deux commandes ; une coupure, deux débits.",
        "**Pas de vérification de signature.** N'importe qui peut envoyer un faux webhook « payé » à votre serveur.",
        "**Pas d'expiration.** Des commandes en attente depuis des jours, un stock bloqué, un entrepôt qui ne comprend pas.",
        "**Pas de rapprochement.** L'écart entre le relevé et les ventes se découvre à la clôture, trois mois trop tard.",
        "**Le remboursement par virement manuel.** Introuvable dans le rapprochement, oublié dans la comptabilité, et le client rappelle.",
      ] },
      { heading: 'Questions fréquentes', body: [
        "Les questions que nous recevons de commerçants, de fondateurs et de responsables informatiques.",
      ], faq: [
        { q: 'La carte du client passe-t-elle par notre application ?', a: "Non. Votre serveur enregistre la commande et son montant auprès de la passerelle, puis envoie le client sur la page de paiement hébergée par celle-ci. La carte et le code de confirmation sont saisis là-bas, jamais dans votre application, et c'est ce qui vous évite d'avoir à protéger des données de carte." },
        { q: 'Pourquoi la page de succès ne suffit-elle pas à marquer la commande payée ?', a: "Parce que le retour du navigateur est un indice, pas une preuve : il peut arriver avant le débit, après, ou jamais si le client ferme l'onglet, et son adresse peut être forgée. La commande ne devient payée que lorsque votre serveur a lu le statut à la source, par une demande à la passerelle ou par un webhook dont la signature a été vérifiée." },
        { q: 'Que se passe-t-il si le même paiement est notifié deux fois ?', a: "Chaque webhook porte un identifiant d'événement que votre serveur mémorise ; la seconde livraison est acquittée par un 200 et n'écrit rien. Côté client, une clé d'idempotence par panier fait qu'un double clic renvoie la même commande au lieu d'en créer une seconde." },
        { q: 'Combien coûte le paiement par carte et quand est-on versé ?', a: "Aucune grille officielle n'est publiée, et les guides tiers qui citent des pourcentages se contredisent ; les frais, le délai de versement et les plafonds se demandent par écrit à la banque acquéreuse ou à l'agrégateur, et se vérifient au pilote en comparant le relevé aux commandes. Nous écrivons les chiffres obtenus dans le cahier des charges, pas dans l'article." },
        { q: 'SATIM en direct ou un agrégateur ?', a: "Les deux donnent la même architecture : une commande chez vous, une page chez eux, une confirmation à la source. L'agrégateur porte le contrat, la page et la documentation, et facture pour cela ; le branchement direct passe par votre banque et le GIE Monétique. Nous écrivons la machine à états avant de choisir, pour que le choix se fasse sur les frais et le délai, et puisse changer sans réécrire l'application." },
        { q: 'Combien de temps pour mettre le paiement en production ?', a: "Dix semaines : une pour le dossier et le choix, deux pour la machine à états en environnement de test, deux pour la confirmation et le webhook, deux pour les tests techniques de la plateforme, une pour le rapprochement et le remboursement, deux de pilote à petits montants. Le délai des tests techniques dépend de la plateforme et se demande par écrit." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Le retour du navigateur est ce qu'on voit en premier et ce qu'on croit en dernier." },
      { after: 3, text: "Un état ne change que sur un événement vérifié par votre serveur, jamais sur ce que le navigateur du client raconte." },
    ],
    cta: { eyebrow: 'Envoyez-nous ce que vous vendez et à qui', title: "Commerçant en Algérie ou fondateur en France : nous intégrons le paiement CIB et Edahabia dans votre application sans perdre un paiement ni en compter un deux fois", body: "Symloop construit des applications et des plateformes en production pour les entreprises en Algérie et les fondateurs installés en France, et y intègre le paiement par carte : machine à états de la commande, montants côté serveur, page de paiement hébergée, confirmation à la source, webhook signé, clé d'idempotence, expiration, rapprochement du relevé, remboursement par API, environnement de test puis pilote à petits montants. Code et documentation dans votre dépôt ; une démonstration toutes les deux semaines." },
    related: { label: 'À lire aussi', items: [
      { href: L.caisse, kind: '2027', name: 'La caisse : QR, carte, TPE et rapprochement' },
      { href: L.saas, kind: '2027', name: 'Lancer un SaaS : abonnement et paiement' },
      { href: L.offline, kind: '2027', name: 'Application hors ligne et idempotence' },
      { href: L.integrer, kind: '2027', name: 'Intégrer le logiciel existant par API' },
    ] },
  },
  en: {
    kind: 'Online payment · CIB · Edahabia · Integration · 2027', title: 'Integrating CIB and Edahabia online payment into your application in Algeria in 2027: the payment page, server-side confirmation, the webhook, an order’s states, reconciliation and refunds',
    dek: '“The customer says they paid, but the order is still pending.” That is the sentence we hear on almost every shop we take over, and it has one cause: the application believed the browser instead of asking the gateway. This guide describes how CIB and Edahabia card payment is integrated into an application without losing a payment or counting one twice: what the gateway does, what your server must do, an order’s seven states, a webhook’s signature, the key that prevents a double charge, reconciliation with the bank statement, and the refund that goes through the API.',
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Online payment', 'CIB', 'Edahabia', 'Integration', 'Algeria 2027'],
    intro: [
      '**Short answer.** The customer’s card never enters your application: your server creates a **pending** order with an amount computed on its side, registers that order with the **gateway**, and sends the customer to the gateway’s **payment page**. When the customer returns to your site, that return is a **hint**, not a proof: your server asks the gateway for the **real status**, or receives a **signed webhook**, and only then does the order become **paid**. Every order has an **idempotency key** so that a double click or a webhook received twice neither charges nor counts twice. Every week, the bank **statement** is reconciled with the orders, and a refund goes through the gateway’s **API**, never through a manual transfer. Ten weeks, two of them a small-amount pilot.',
      'This guide is for the merchant or manager who wants to take card payments in their application or shop, the founder settled in France who wants to sell in dinars to customers in Algeria, and the person who must compare one “payment integration” quote with another. It does not repeat which business model to choose, described in [the marketplace guide](' + L.marketplace + ') and [the SaaS guide](' + L.saas + '), nor how to take payment at the counter, described in [the point-of-sale guide](' + L.caisse + '); it describes what is built between your application and the gateway, and extends [our page on software engineering](' + L.service + ').',
    ],
    sections: [
      { heading: 'What the documentation says', body: [
        'The entry is administrative before it is technical, and it is public. GIE Monétique’s CIBWEB portal describes a merchant’s path: create an account and file a request, which the GIE “processes and rules on within 24 hours” in its own words; pass “the technical integration tests on the electronic payment platform”; obtain an “authorisation to enter operation”. The eligibility conditions it shows are registration in the commercial register or the crafts register and registration in the national e-suppliers file. What this imposes: both registrations are checked in week one, before writing a line, and the duration of the test phase is requested in writing, because the portal does not give it.',
        'The technical mechanism is that of a hosted payment page, documented by third parties. The unofficial documentation of the SATIM gateway we read describes an order registration that returns an identifier and a payment page address, an amount “multiplied by 100” before sending, a 50-dinar minimum, a return address and a failure address, then a server-side confirmation that returns the status, an action code and an approval code. It distinguishes a test environment and a production environment. We say this with care: it is third-party documentation, and the exact parameters are reread in the integration guide handed over by your bank or integrator. What this imposes: the same architecture whatever the provider, an order on your side, a page on theirs, a confirmation at the source.',
        'Aggregators document the part shops forget: the notification. The documentation of an Algerian aggregator that supports CIB and Edahabia describes a webhook sent over HTTPS with an event type, “checkout.paid” for instance, an **HMAC-SHA256 signature of the raw request body computed with your secret key**, a 200 response expected from your server, prefixed test keys and a field that distinguishes live mode from test mode; it notes that a webhook cannot reach a local server, hence a tunnel during development. What we did not find: an official fee grid, a published settlement delay, a webhook retry policy; all three are requested in writing, and third-party guides that quote percentages contradict each other, which is why we quote none.',
      ] },
      { heading: 'One payment, from the customer’s screen to the bank statement', body: [
        'Payment is not understood on an API diagram but on the path of a real payment, and on the station where you are allowed to believe it.',
      ], visual: 'parcours', after: [
        '**First station**, on your side: the customer validates the basket, your server freezes the lines, computes the amount, creates the pending order with a number and an idempotency key, and registers that order with the gateway, sending it the amount; your server states the amount, never the screen. **Second**, at the gateway: the customer is sent to its payment page, the only one that sees the card. **Third**, on the customer’s phone: they enter their CIB or Edahabia card and the code received by SMS, depending on their bank’s flow. **Fourth**, the return: the browser comes back to your success address with an identifier in the address. That is the hint. It sometimes arrives before the payment, sometimes after, sometimes never.',
        '**Fifth station**, the only one that counts: your server asks the gateway for the order’s status, or receives the signed webhook, and reads “paid” at the source. That is the proof, and only here does the order change state. **Sixth**: paid, receipt sent on WhatsApp and e-mail per [the notifications guide](' + L.notif + '), stock reserved. Then, one to three days later, a line appears on the acquiring bank’s statement, net or before fees depending on your contract, and reconciliation links it to the order number; whatever does not match becomes a question asked of the bank, not a gap discovered at closing.',
      ] },
      { heading: 'Online payment in an application, in five layers', body: [
        'Behind those six stations, five layers, and only one truly belongs to you.',
      ], visual: 'couches', after: [
        '**The screen**: the basket, the pay button, the waiting page, the success and failure pages; it displays the state, it never decides it, and a success screen that says “paid” because the address contains the word success is the first defect we fix. **Your server**: the order and its state machine, server-side amounts, the idempotency key, the log; it is the only layer that writes “paid”, and only after checking at the source. **The gateway**: the hosted payment page, registration, status, refund; SATIM directly through your bank, or an aggregator that carries the contract and the page; the card never crosses the border between that layer and yours.',
        '**The bank and the network**: the acquiring bank that pays you, the customer’s issuing bank, the interbank network, GIE Monétique that authorises; fees, settlement delay and contract are negotiated here, and no line of code changes them. **Supervision**: statement ↔ orders reconciliation, orders pending too long, webhooks rejected for invalid signature, the month’s refunds; a screen read every week, built like [the manager’s dashboard](' + L.dashboard + '). The choice between SATIM directly and an aggregator is made in writing in week one, with each one’s fees and settlement delay, and it changes nothing in layers two and five: that is the reason to write the state machine before connecting anyone.',
      ] },
      { heading: 'An order’s states, and what is allowed to change them', body: [
        'The state machine is the heart of the integration, and the drawing reread with the client before the first line.',
      ], visual: 'etats', after: [
        '**Seven states.** Created: the basket is frozen and the amount computed. Awaiting payment: the order is registered with the gateway and the page is open. Paid: the status was read at the source. Delivered: the parcel was scanned or the service rendered. Failed: the bank refused. Expired: thirty minutes without confirmation, stock released. Refunded: full or partial, dated, with the reason. **Three events** move the normal path forward: server-side validation, the “paid” status read at the gateway, the scanned delivery. Each is verified by your server, and each writes a log line with the state before and after, as [the audit log guide](' + L.roles + ') provides.',
        '**Two things do nothing.** The browser’s return to your success address, crossed out on the drawing: it displays the state from the database, it does not change it, and that is what makes the arrival order between return and webhook irrelevant. The second copy of a webhook: its signature is verified, its event id recognised, your server answers 200 and writes nothing. The rule fits in one sentence, written in the specification: **a state changes only on an event verified by your server, never on what the customer’s browser says.** Everything else, receipt, stock, accounting, follows from the state, never from the screen.',
      ] },
      { heading: 'Six real situations, and what the architecture does', body: [
        'Six situations we see every week on shops that work, and the mechanism that settles each.',
      ], visual: 'situations', after: [
        '**The customer pays then closes the tab**: the return never arrives; the webhook, or the scheduled check of pending orders every five minutes, moves the order to paid, and the receipt goes out without the customer coming back. **Two clicks on pay**: one idempotency key per basket, and the second click returns the same order and the same page instead of creating a second one; it is the mechanism described in [the offline guide](' + L.offline + '). **The webhook arrives before the return**: the success page reads the state from the database and displays it; the order is irrelevant.',
        '**The same webhook arrives twice**: id remembered, second delivery acknowledged without writing; without this, two receipts, two accounting lines and stock deducted twice. **Paid, but the stock is gone**: the last item left at the counter during the payment; refund through the gateway’s API, refunded state, message to the customer, and never a manual transfer that no reconciliation will find. **The gateway stops responding**: cash on delivery or bank transfer stays offered, pending orders expire cleanly and release stock, and supervision flags it; a shop that has only card sells nothing that evening.',
      ] },
      { heading: 'Seen elsewhere: hosted payment pages, signed webhooks, and what transposes', body: [
        'Three sources say the essentials. GIE Monétique’s portal says the entry is a request, technical tests and an authorisation; what transposes is that the file is filed in week one, alongside code in the test environment. Third-party documentation of the SATIM gateway describes an order registered server-side, a hosted page and a confirmation at the source; what transposes is that your server never sees the card and never believes the browser. An aggregator’s documentation describes a signed webhook, acknowledged with a 200 and impossible to receive locally; what transposes is signature verification on the raw body, memory of received events, and a tunnel during development.',
        'What these sources do not say: fees, settlement delay, webhook retry policy, and the exact behaviour of the payment page on your customers’ phones; the first two are requested in writing, the last two are measured in the pilot.',
      ] },
      { heading: 'The rules of a payment integration you can put into production', body: [
        'Six rules, written in week one. **The amount is computed server-side**, never read from the screen or the return address. **The browser’s return is only a hint**; only the status read at the source or a signed webhook changes the state. **One idempotency key per order**, and one remembered id per webhook: nothing is charged or counted twice. **A pending order expires** and releases stock. **The statement is reconciled with orders every week**, and every gap is a question asked. **A refund goes through the API** and leaves a state, a reason and a date.',
        'A seventh rule concerns the quote: “CIB/Edahabia payment integration” is not a requirement, it is a sentence; the requirement reads “order state machine with seven states and the allowed events; server-side amounts; order registration with the gateway and hosted page; status confirmation at the source; webhook with signature verified on the raw body and remembered ids; idempotency key per basket; expiry of pending orders; statement ↔ orders reconciliation with a list of gaps; refund through the API; test environment, the platform’s technical tests, small-amount pilot”, and it is checked as [the specification guide](' + L.cdc + ') recommends. A quote that prices “the payment button” has priced the screen, that is, the layer that decides nothing.',
      ] },
      { heading: 'Six companies, and what is particular about their payment', body: [
        'Six companies we often equip, and for each the particularity the state machine must carry.',
      ], list: [
        '**Ticketing**, described in [the dedicated guide](' + L.billetterie + '). The ticket exists only in the paid state; expiry releases seats in minutes, not hours.',
        '**The gym and its subscription**, described in [the dedicated guide](' + L.sport + '). Each due date is an order; access follows the state, and renewal offers the payment page over WhatsApp.',
        '**The developer selling off-plan to the diaspora**, described in [the dedicated guide](' + L.promoteur + '). Dated instalments, each an order, and a receipt carrying the lot number; card limits are checked with the bank before announcing online payment.',
        '**The Umrah agency**, described in [the dedicated guide](' + L.omra + '). Payment in instalments, a file status that follows the payment states, and a partial refund that keeps the reason.',
        '**The tutoring platform**, described in [the dedicated guide](' + L.cours + '). The parent in France pays in dinars for the pupil in Algeria; the order carries both identities, and the receipt goes to both.',
        '**The shop run from France**, described in [the dedicated guide](' + L.commerce + '). The founder sees every morning the orders paid, pending too long and refunded, and the statement reconciliation on Friday.',
      ] },
      { heading: 'The 2027 calendar', body: [
        'The calendar is that of online payment put into production in ten weeks, the first two of administrative waiting overlapping with the code.',
      ], visual: 'calendrier', after: [
        '**Week 0 to 1** files the request and settles the choice: CIBWEB account, register and e-supplier checked, SATIM directly through the bank or an aggregator, decided in writing with fees and settlement delay. **Weeks 1 to 3** write the state machine in the test environment: order, server-side amounts, idempotency key, success and failure pages, with simulated webhooks; nothing is connected to the real gateway yet, and that is deliberate. **Weeks 3 to 5** connect confirmation and webhook: status read at the source, signature verified, ids remembered, scheduled check of pending orders.',
        '**Weeks 5 to 7** pass the platform’s technical tests and obtain the authorisation; their duration depends on the platform and is requested in writing. **Week 7 to 8** builds reconciliation and refund. **Weeks 8 to 10** are the small-amount pilot: real payments by the team then by ten customers, every gap read daily, then the decision to open to all. Every batch is demoed as [the delivery guide](' + L.livrer + ') describes, and servers are placed per [the hosting guide](' + L.heberger + '): the payment page is at the gateway, but your state machine must answer the webhook fast, wherever it is.',
      ] },
      { heading: 'What makes a payment integration fail', body: [
        'The integrations we take over almost always failed for one of these reasons.',
      ], list: [
        '**Believing the browser’s return.** The order becomes paid because the address contains “success”; orders paid without a charge, charges without an order.',
        '**The amount read from the screen.** A parameter changed in the browser, and an 8,500-dinar item paid 85.',
        '**No idempotency key.** A double click, two orders; a drop, two charges.',
        '**No signature verification.** Anyone can send a fake “paid” webhook to your server.',
        '**No expiry.** Orders pending for days, stock blocked, a warehouse that does not understand.',
        '**No reconciliation.** The gap between statement and sales is found at closing, three months too late.',
        '**Refund by manual transfer.** Not found in reconciliation, forgotten in accounting, and the customer calls back.',
      ] },
      { heading: 'Frequently asked questions', body: [
        'The questions we receive from merchants, founders and IT managers.',
      ], faq: [
        { q: 'Does the customer’s card go through our application?', a: 'No. Your server registers the order and its amount with the gateway, then sends the customer to the payment page the gateway hosts. The card and the confirmation code are entered there, never in your application, and that is what spares you from protecting card data.' },
        { q: 'Why is the success page not enough to mark the order paid?', a: 'Because the browser’s return is a hint, not a proof: it can arrive before the charge, after it, or never if the customer closes the tab, and its address can be forged. The order becomes paid only when your server has read the status at the source, through a request to the gateway or through a webhook whose signature has been verified.' },
        { q: 'What happens if the same payment is notified twice?', a: 'Every webhook carries an event id that your server remembers; the second delivery is acknowledged with a 200 and writes nothing. On the customer side, one idempotency key per basket makes a double click return the same order instead of creating a second one.' },
        { q: 'What does card payment cost and when are we paid out?', a: 'No official grid is published, and third-party guides that quote percentages contradict each other; fees, settlement delay and limits are requested in writing from the acquiring bank or the aggregator, and checked in the pilot by comparing the statement with the orders. We write the figures obtained into the specification, not into the article.' },
        { q: 'SATIM directly or an aggregator?', a: 'Both give the same architecture: an order on your side, a page on theirs, a confirmation at the source. The aggregator carries the contract, the page and the documentation, and charges for it; the direct connection goes through your bank and GIE Monétique. We write the state machine before choosing, so that the choice is made on fees and delay, and can change without rewriting the application.' },
        { q: 'How long to put payment into production?', a: 'Ten weeks: one for the file and the choice, two for the state machine in the test environment, two for confirmation and webhook, two for the platform’s technical tests, one for reconciliation and refund, two of small-amount pilot. The duration of the technical tests depends on the platform and is requested in writing.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'The browser’s return is what you see first and believe last.' },
      { after: 3, text: 'A state changes only on an event verified by your server, never on what the customer’s browser says.' },
    ],
    cta: { eyebrow: 'Send us what you sell and to whom', title: 'Merchant in Algeria or founder in France: we integrate CIB and Edahabia payment into your application without losing a payment or counting one twice', body: 'Symloop builds applications and platforms in production for companies in Algeria and founders settled in France, and integrates card payment into them: order state machine, server-side amounts, hosted payment page, confirmation at the source, signed webhook, idempotency key, expiry, statement reconciliation, refund through the API, test environment then small-amount pilot. Code and documentation in your repository; a demo every two weeks.' },
    related: { label: 'Read next', items: [
      { href: L.caisse, kind: '2027', name: 'Point of sale: QR, card, terminal and reconciliation' },
      { href: L.saas, kind: '2027', name: 'Launching a SaaS: subscription and payment' },
      { href: L.offline, kind: '2027', name: 'Offline application and idempotency' },
      { href: L.integrer, kind: '2027', name: 'Integrating existing software by API' },
    ] },
  },
  ar: {
    kind: 'الدفع الإلكتروني · CIB · الذهبية · دمج · 2027', title: 'دمج الدفع الإلكتروني ببطاقة CIB والذهبية في تطبيقكم في الجزائر سنة 2027: صفحة الدفع، التأكيد في الخادم، الـ webhook، حالات الطلبية، المطابقة والاسترداد',
    dek: '«الزبون يقول إنه دفع، لكن الطلبية ما زالت معلَّقة.» هذه الجملة نسمعها في كل متجر نستلمه تقريباً، ولها سبب واحد: التطبيق صدّق المتصفح بدل أن يسأل البوابة. يصف هذا الدليل كيف يُدمج الدفع ببطاقة CIB والذهبية في تطبيق دون ضياع دفعة أو عدّها مرتين: ما تفعله البوابة، ما يجب أن يفعله خادمكم، حالات الطلبية السبع، توقيع الـ webhook، المفتاح الذي يمنع الخصم المزدوج، المطابقة مع كشف البنك، والاسترداد الذي يمر عبر الواجهة.',
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['الدفع الإلكتروني', 'CIB', 'الذهبية', 'دمج', 'الجزائر 2027'],
    intro: [
      '**الجواب القصير.** بطاقة الزبون لا تدخل تطبيقكم أبداً: ينشئ خادمكم طلبية **معلَّقة** بمبلغ محسوب عنده، ويسجّلها عند **البوابة**، ويرسل الزبون إلى **صفحة الدفع** الخاصة بها. وحين يعود الزبون إلى موقعكم، فهذه العودة **إشارة** لا دليل: يسأل خادمكم البوابة عن **الحالة الحقيقية**، أو يتلقى **webhook موقَّعاً**، وعندها فقط تصير الطلبية **مدفوعة**. لكل طلبية **مفتاح عدم تكرار** كي لا تخصم النقرة المزدوجة أو الـ webhook المستلَم مرتين ولا تُعدّ مرتين. وكل أسبوع يُطابَق **كشف** البنك مع الطلبيات، والاسترداد يمر عبر **واجهة** البوابة لا عبر تحويل يدوي أبداً. عشرة أسابيع، اثنان منها تجريب بمبالغ صغيرة.',
      'هذا الدليل موجّه إلى التاجر أو المسيّر الذي يريد التحصيل بالبطاقة في تطبيقه أو متجره، وإلى المؤسس المقيم في فرنسا الذي يريد البيع بالدينار لزبائن في الجزائر، وإلى المسؤول الذي يجب أن يقارن عرض سعر «دمج الدفع» بآخر. لا يعيد أي نموذج اقتصادي نختار، الموصوف في [دليل المنصة التجارية](' + L.marketplace + ') و[دليل SaaS](' + L.saas + ')، ولا كيف نحصّل عند الكاونتر، الموصوف في [دليل الصندوق](' + L.caisse + ')؛ بل يصف ما يُبنى بين تطبيقكم والبوابة، ويمدّ [صفحتنا عن هندسة البرمجيات](' + L.service + ').',
    ],
    sections: [
      { heading: 'ما تقوله الوثائق', body: [
        'المدخل إداري قبل أن يكون تقنياً، وهو علني. تصف بوابة CIBWEB التابعة لـ GIE Monétique مسار التاجر: إنشاء حساب وإيداع طلب «يعالجه التجمع ويبتّ في قبوله في أقل من 24 ساعة» بعباراته هو؛ اجتياز «الاختبارات التقنية للدمج في منصة الدفع الإلكتروني»؛ الحصول على «ترخيص الدخول في الاستغلال». وشروط الأهلية التي تعرضها هي التسجيل في السجل التجاري أو سجل الحرف والتسجيل في البطاقية الوطنية للموردين الإلكترونيين. وما يفرضه ذلك: نتحقق من التسجيلين في الأسبوع الأول قبل كتابة أي سطر، ومدة مرحلة الاختبارات تُطلب كتابةً لأن البوابة لا تعطيها.',
        'الآلية التقنية هي آلية صفحة دفع مستضافة، موثَّقة من أطراف ثالثة. تصف الوثائق غير الرسمية لبوابة SATIM التي قرأناها تسجيل طلبية يعيد معرّفاً وعنوان صفحة دفع، ومبلغاً «مضروباً في 100» قبل الإرسال، وحداً أدنى 50 ديناراً، وعنوان عودة وعنوان فشل، ثم تأكيداً في الخادم يعيد الحالة ورمز إجراء ورمز موافقة. وتميّز بيئة اختبار وبيئة إنتاج. نقول ذلك بحذر: إنها وثائق طرف ثالث، والمعاملات الدقيقة تُعاد قراءتها في دليل الدمج الذي يسلّمه بنككم أو مدمجكم. وما يفرضه ذلك: الهندسة نفسها أياً كان المزوّد، طلبية عندكم، صفحة عندهم، تأكيد من المصدر.',
        'المجمّعون يوثّقون الجزء الذي تنساه المتاجر: الإشعار. تصف وثائق مجمّع جزائري يدعم CIB والذهبية webhook يُرسل عبر HTTPS بنوع حدث، «checkout.paid» مثلاً، و**توقيع HMAC-SHA256 للنص الخام للطلب محسوباً بمفتاحكم السري**، ورداً 200 منتظَراً من خادمكم، ومفاتيح اختبار ببادئة، وحقلاً يميّز الوضع الحقيقي من وضع الاختبار؛ وتوضح أن الـ webhook لا يستطيع الوصول إلى خادم محلي، ومن هنا النفق أثناء التطوير. وما لم نجده: شبكة رسوم رسمية، أجل تحويل منشور، سياسة إعادة إرسال webhooks؛ الثلاثة تُطلب كتابةً، والأدلة الخارجية التي تذكر نسباً تتناقض، ولهذا لا نذكر أياً منها.',
      ] },
      { heading: 'دفعة واحدة، من شاشة الزبون إلى كشف البنك', body: [
        'الدفع لا يُفهم على مخطط واجهة بل على مسار دفعة حقيقية، وعلى المحطة التي يحق فيها تصديقه.',
      ], visual: 'parcours', after: [
        '**المحطة الأولى**، عندكم: يصادق الزبون على سلته، فيجمّد خادمكم السطور ويحسب المبلغ وينشئ الطلبية معلَّقة برقم ومفتاح عدم تكرار، ويسجّلها عند البوابة مرسلاً إليها المبلغ؛ خادمكم هو من يقول المبلغ، لا الشاشة أبداً. **الثانية**، عند البوابة: يُرسل الزبون إلى صفحة دفعها، الوحيدة التي ترى البطاقة. **الثالثة**، على هاتف الزبون: يُدخل بطاقته CIB أو الذهبية والرمز المستلَم بالرسالة القصيرة حسب مسار بنكه. **الرابعة**، العودة: يعود المتصفح إلى عنوان النجاح عندكم بمعرّف في الرابط. هذه هي الإشارة. تصل أحياناً قبل الدفع، وأحياناً بعده، وأحياناً لا تصل أبداً.',
        '**المحطة الخامسة**، الوحيدة التي تهم: يسأل خادمكم البوابة عن حالة الطلبية، أو يتلقى الـ webhook الموقَّع، ويقرأ «مدفوع» من المصدر. هذا هو الدليل، وهنا فقط تغيّر الطلبية حالتها. **السادسة**: مدفوعة، وصل مُرسَل على WhatsApp والبريد وفق [دليل الإشعارات](' + L.notif + ')، مخزون محجوز. ثم بعد يوم إلى ثلاثة أيام يظهر سطر في كشف البنك المستحوذ، صافياً أو قبل العمولة حسب عقدكم، وتربطه المطابقة برقم الطلبية؛ وما لا يتطابق يصير سؤالاً يُطرح على البنك لا فارقاً يُكتشف عند الإقفال.',
      ] },
      { heading: 'الدفع الإلكتروني في تطبيق، في خمس طبقات', body: [
        'خلف هذه المحطات الست خمس طبقات، وواحدة فقط تخصكم حقاً.',
      ], visual: 'couches', after: [
        '**الشاشة**: السلة، زر الدفع، صفحة الانتظار، صفحتا النجاح والفشل؛ تعرض الحالة ولا تقررها أبداً، وشاشة نجاح تقول «مدفوع» لأن الرابط يحتوي كلمة نجاح هي أول عيب نصلحه. **خادمكم**: الطلبية وآلة حالاتها، المبالغ المحسوبة في الخادم، مفتاح عدم التكرار، السجل؛ الطبقة الوحيدة التي تكتب «مدفوعة»، وبعد التحقق من المصدر فقط. **البوابة**: صفحة الدفع المستضافة، التسجيل، الحالة، الاسترداد؛ SATIM مباشرة عبر بنككم، أو مجمّع يحمل العقد والصفحة؛ البطاقة لا تعبر الحدود بين هذه الطبقة وطبقتكم أبداً.',
        '**البنك والشبكة**: البنك المستحوذ الذي يدفع لكم، البنك المصدر للزبون، الشبكة البينية للبنوك، GIE Monétique الذي يرخّص؛ الرسوم وأجل التحويل والعقد تُتفاوَض هنا، ولا سطر كود يغيّرها. **الإشراف**: مطابقة الكشف ↔ الطلبيات، الطلبيات المعلَّقة طويلاً، webhooks المرفوضة لتوقيع غير صالح، استردادات الشهر؛ شاشة تُقرأ كل أسبوع تُبنى مثل [لوحة قيادة المسيّر](' + L.dashboard + '). والاختيار بين SATIM مباشرة ومجمّع يُتخذ كتابةً في الأسبوع الأول مع رسوم كل منهما وأجل تحويله، ولا يغيّر شيئاً في الطبقتين الثانية والخامسة: وهذا سبب كتابة آلة الحالات قبل وصل أي أحد.',
      ] },
      { heading: 'حالات الطلبية، وما يحق له تغييرها', body: [
        'آلة الحالات هي قلب الدمج، والرسم الذي يُعاد قراءته مع الزبون قبل أول سطر.',
      ], visual: 'etats', after: [
        '**سبع حالات.** أُنشئت: السلة مجمَّدة والمبلغ محسوب. في انتظار الدفع: الطلبية مسجَّلة عند البوابة والصفحة مفتوحة. مدفوعة: قُرئت الحالة من المصدر. مسلَّمة: مُسح الطرد أو قُدمت الخدمة. فاشلة: رفض البنك. منتهية: ثلاثون دقيقة بلا تأكيد، وحُرر المخزون. مستردَّة: كلياً أو جزئياً، مؤرَّخة، بالسبب. **ثلاثة أحداث** تدفع المسار العادي: المصادقة في الخادم، حالة «مدفوع» المقروءة عند البوابة، التسليم الممسوح. كل منها يتحقق منه خادمكم، وكل منها يكتب سطراً في السجل بالحالة قبل وبعد كما ينص [دليل سجل التدقيق](' + L.roles + ').',
        '**شيئان لا يفعلان شيئاً.** عودة المتصفح إلى عنوان النجاح عندكم، المشطوبة في الرسم: تعرض الحالة من القاعدة ولا تغيّرها، وهذا ما يجعل ترتيب الوصول بين العودة والـ webhook غير مهم. والنسخة الثانية من webhook: يُتحقَّق من توقيعها، ويُعرف معرّف حدثها، ويجيب خادمكم 200 ولا يكتب شيئاً. والقاعدة في جملة واحدة تُكتب في دفتر الشروط: **لا تتغير الحالة إلا بحدث يتحقق منه خادمكم، لا بما يرويه متصفح الزبون أبداً.** وكل ما عدا ذلك، الوصل والمخزون والمحاسبة، ينبع من الحالة لا من الشاشة أبداً.',
      ] },
      { heading: 'ست حالات حقيقية، وما تفعله الهندسة', body: [
        'ست حالات نراها كل أسبوع في متاجر تعمل، والآلية التي تحسم كلاً منها.',
      ], visual: 'situations', after: [
        '**الزبون يدفع ثم يغلق التبويب**: العودة لا تصل أبداً؛ الـ webhook، أو الفحص المجدوَل للطلبيات المعلَّقة كل خمس دقائق، ينقل الطلبية إلى مدفوعة، ويُرسل الوصل دون أن يعود الزبون. **نقرتان على ادفع**: مفتاح عدم تكرار لكل سلة، والنقرة الثانية تعيد الطلبية نفسها والصفحة نفسها بدل إنشاء ثانية؛ وهي الآلية الموصوفة في [دليل العمل دون اتصال](' + L.offline + '). **الـ webhook يصل قبل العودة**: صفحة النجاح تقرأ الحالة من القاعدة وتعرضها؛ والترتيب لا يهم.',
        '**الـ webhook نفسه يصل مرتين**: المعرّف محفوظ، والتسليم الثاني يُقرّ به دون كتابة؛ وبدون ذلك وصلان وسطران محاسبيان ومخزون خُصم مرتين. **مدفوعة لكن المخزون اختفى**: آخر قطعة خرجت من المحل أثناء الدفع؛ استرداد عبر واجهة البوابة، حالة مستردَّة، رسالة للزبون، ولا تحويل يدوي أبداً لن تجده أي مطابقة. **البوابة لا تستجيب**: الدفع عند التسليم أو التحويل يبقى مقترَحاً، والطلبيات المعلَّقة تنتهي بنظافة وتحرر المخزون، والإشراف يشير إلى ذلك؛ ومتجر لا يملك إلا البطاقة لا يبيع شيئاً تلك الليلة.',
      ] },
      { heading: 'رأيناه في مكان آخر: صفحات الدفع المستضافة، webhooks الموقَّعة، وما ينتقل', body: [
        'ثلاثة مصادر تقول الجوهر. بوابة GIE Monétique تقول إن المدخل طلب واختبارات تقنية وترخيص؛ وما ينتقل هو أن الملف يُودَع في الأسبوع الأول بالتوازي مع الكود في بيئة الاختبار. ووثائق طرف ثالث لبوابة SATIM تصف طلبية مسجَّلة في الخادم وصفحة مستضافة وتأكيداً من المصدر؛ وما ينتقل هو أن خادمكم لا يرى البطاقة أبداً ولا يصدّق المتصفح أبداً. ووثائق مجمّع تصف webhook موقَّعاً يُقرّ به برد 200 ولا يمكن استلامه محلياً؛ وما ينتقل هو التحقق من التوقيع على النص الخام، وحفظ الأحداث المستلَمة، ونفق أثناء التطوير.',
        'وما لا تقوله هذه المصادر: الرسوم، أجل التحويل، سياسة إعادة إرسال webhooks، والسلوك الدقيق لصفحة الدفع على هواتف زبائنكم؛ الأولان يُطلبان كتابةً، والآخران يُقاسان في التجريب.',
      ] },
      { heading: 'قواعد دمج دفع يمكن وضعه في الإنتاج', body: [
        'ست قواعد تُكتب في الأسبوع الأول. **المبلغ يُحسب في الخادم**، ولا يُقرأ من الشاشة ولا من عنوان العودة أبداً. **عودة المتصفح ليست إلا إشارة**؛ والحالة المقروءة من المصدر أو webhook موقَّع وحدهما يغيّران الحالة. **مفتاح عدم تكرار لكل طلبية**، ومعرّف محفوظ لكل webhook: لا شيء يُخصم أو يُعدّ مرتين. **الطلبية المعلَّقة تنتهي** وتحرر المخزون. **الكشف يُطابَق مع الطلبيات كل أسبوع**، وكل فارق سؤال يُطرح. **الاسترداد يمر عبر الواجهة** ويترك حالة وسبباً وتاريخاً.',
        'قاعدة سابعة تخص عرض السعر: «دمج الدفع CIB/الذهبية» ليس متطلباً بل جملة؛ المتطلب يُكتب «آلة حالات الطلبية بسبع حالات والأحداث المسموح بها؛ المبالغ في الخادم؛ تسجيل الطلبية عند البوابة وصفحة مستضافة؛ تأكيد الحالة من المصدر؛ webhook بتوقيع مُتحقَّق منه على النص الخام ومعرّفات محفوظة؛ مفتاح عدم تكرار لكل سلة؛ انتهاء الطلبيات المعلَّقة؛ مطابقة الكشف ↔ الطلبيات بقائمة الفوارق؛ استرداد عبر الواجهة؛ بيئة اختبار، الاختبارات التقنية للمنصة، تجريب بمبالغ صغيرة»، ويُتحقَّق منه كما يوصي [دليل دفتر الشروط](' + L.cdc + '). وعرض السعر الذي يسعّر «زر الدفع» سعّر الشاشة، أي الطبقة التي لا تقرر شيئاً.',
      ] },
      { heading: 'ست شركات، وما يميّز دفعها', body: [
        'ست شركات نجهّزها كثيراً، ولكل منها الخصوصية التي يجب أن تحملها آلة الحالات.',
      ], list: [
        '**بيع التذاكر**، الموصوف في [الدليل المخصص](' + L.billetterie + '). التذكرة لا توجد إلا في حالة مدفوعة؛ والانتهاء يحرر المقاعد في دقائق لا ساعات.',
        '**قاعة الرياضة واشتراكها**، الموصوفان في [الدليل المخصص](' + L.sport + '). كل استحقاق طلبية؛ والدخول يتبع الحالة، والتجديد يقترح صفحة الدفع عبر WhatsApp.',
        '**المرقّي الذي يبيع على المخطط للجالية**، الموصوف في [الدليل المخصص](' + L.promoteur + '). أقساط مؤرَّخة كل منها طلبية، ووصل يحمل رقم الحصة؛ وسقوف البطاقة تُتحقَّق مع البنك قبل الإعلان عن الدفع الإلكتروني.',
        '**وكالة العمرة**، الموصوفة في [الدليل المخصص](' + L.omra + '). الدفع بالأقساط، وحالة الملف التي تتبع حالات الدفعات، واسترداد جزئي يحتفظ بالسبب.',
        '**منصة الدروس**، الموصوفة في [الدليل المخصص](' + L.cours + '). الوليّ في فرنسا يدفع بالدينار للتلميذ في الجزائر؛ الطلبية تحمل الهويتين، والوصل يُرسل إلى الاثنين.',
        '**المتجر المُدار من فرنسا**، الموصوف في [الدليل المخصص](' + L.commerce + '). المؤسس يرى كل صباح الطلبيات المدفوعة والمعلَّقة طويلاً والمستردَّة، ومطابقة الكشف يوم الجمعة.',
      ] },
      { heading: 'تقويم 2027', body: [
        'التقويم تقويم دفع إلكتروني يوضع في الإنتاج في عشرة أسابيع، الأسبوعان الأولان من الانتظار الإداري يتداخلان مع الكود.',
      ], visual: 'calendrier', after: [
        '**الأسبوع 0 إلى 1** يودع الملف ويحسم الاختيار: حساب CIBWEB، السجل والمورّد الإلكتروني مُتحقَّق منهما، SATIM مباشرة عبر البنك أو مجمّع، يُقرَّر كتابةً مع الرسوم وأجل التحويل. **الأسبوعان 1 إلى 3** يكتبان آلة الحالات في بيئة الاختبار: الطلبية، المبالغ في الخادم، مفتاح عدم التكرار، صفحتا النجاح والفشل، بـ webhooks محاكاة؛ لا شيء موصول بالبوابة الحقيقية بعد، وهذا مقصود. **الأسبوعان 3 إلى 5** يوصلان التأكيد والـ webhook: الحالة تُقرأ من المصدر، التوقيع مُتحقَّق منه، المعرّفات محفوظة، فحص مجدوَل للطلبيات المعلَّقة.',
        '**الأسبوعان 5 إلى 7** يجتازان الاختبارات التقنية للمنصة ويحصلان على الترخيص؛ ومدتهما تتوقف على المنصة وتُطلب كتابةً. **الأسبوع 7 إلى 8** يبني المطابقة والاسترداد. **الأسبوعان 8 إلى 10** هما التجريب بمبالغ صغيرة: دفعات حقيقية من الفريق ثم من عشرة زبائن، كل فارق يُقرأ يومياً، ثم قرار الفتح للجميع. وكل دفعة تُعرض كما يصف [دليل التسليم](' + L.livrer + ')، والخوادم توضع وفق [دليل الاستضافة](' + L.heberger + '): صفحة الدفع عند البوابة، لكن آلة حالاتكم يجب أن تجيب الـ webhook بسرعة أينما كانت.',
      ] },
      { heading: 'ما يُفشل دمج الدفع', body: [
        'عمليات الدمج التي نستلمها فشلت دائماً تقريباً لأحد هذه الأسباب.',
      ], list: [
        '**تصديق عودة المتصفح.** الطلبية تصير مدفوعة لأن الرابط يحتوي «نجاح»؛ طلبيات مدفوعة بلا خصم، وخصوم بلا طلبية.',
        '**المبلغ المقروء من الشاشة.** معامل غُيّر في المتصفح، وسلعة بـ 8 500 دينار دُفعت 85.',
        '**لا مفتاح عدم تكرار.** نقرة مزدوجة، طلبيتان؛ انقطاع، خصمان.',
        '**لا تحقق من التوقيع.** أي أحد يستطيع إرسال webhook «مدفوع» مزيف إلى خادمكم.',
        '**لا انتهاء.** طلبيات معلَّقة منذ أيام، مخزون محجوز، ومستودع لا يفهم.',
        '**لا مطابقة.** الفارق بين الكشف والمبيعات يُكتشف عند الإقفال، بعد ثلاثة أشهر.',
        '**الاسترداد بتحويل يدوي.** لا يُعثر عليه في المطابقة، يُنسى في المحاسبة، والزبون يعاود الاتصال.',
      ] },
      { heading: 'أسئلة شائعة', body: [
        'الأسئلة التي نتلقاها من تجار ومؤسسين ومسؤولي إعلام آلي.',
      ], faq: [
        { q: 'هل تمر بطاقة الزبون عبر تطبيقنا؟', a: 'لا. يسجّل خادمكم الطلبية ومبلغها عند البوابة، ثم يرسل الزبون إلى صفحة الدفع التي تستضيفها البوابة. البطاقة ورمز التأكيد يُدخلان هناك، لا في تطبيقكم أبداً، وهذا ما يعفيكم من حماية بيانات البطاقات.' },
        { q: 'لماذا لا تكفي صفحة النجاح لوسم الطلبية مدفوعة؟', a: 'لأن عودة المتصفح إشارة لا دليل: قد تصل قبل الخصم أو بعده أو لا تصل أبداً إن أغلق الزبون التبويب، ويمكن تزوير رابطها. لا تصير الطلبية مدفوعة إلا حين يقرأ خادمكم الحالة من المصدر، بطلب إلى البوابة أو بـ webhook تُحقِّق من توقيعه.' },
        { q: 'ماذا يحدث إن أُشعرنا بالدفعة نفسها مرتين؟', a: 'كل webhook يحمل معرّف حدث يحفظه خادمكم؛ التسليم الثاني يُقرّ به برد 200 ولا يكتب شيئاً. ومن جهة الزبون، مفتاح عدم تكرار لكل سلة يجعل النقرة المزدوجة تعيد الطلبية نفسها بدل إنشاء ثانية.' },
        { q: 'كم يكلّف الدفع بالبطاقة ومتى نُدفع؟', a: 'لا تُنشر شبكة رسمية، والأدلة الخارجية التي تذكر نسباً تتناقض؛ الرسوم وأجل التحويل والسقوف تُطلب كتابةً من البنك المستحوذ أو المجمّع، وتُتحقَّق في التجريب بمقارنة الكشف بالطلبيات. ونكتب الأرقام المحصَّلة في دفتر الشروط لا في المقال.' },
        { q: 'SATIM مباشرة أم مجمّع؟', a: 'كلاهما يعطي الهندسة نفسها: طلبية عندكم، صفحة عندهم، تأكيد من المصدر. المجمّع يحمل العقد والصفحة والوثائق ويفوتر مقابل ذلك؛ والوصل المباشر يمر عبر بنككم وGIE Monétique. نكتب آلة الحالات قبل الاختيار كي يُتخذ على الرسوم والأجل، ويمكن أن يتغير دون إعادة كتابة التطبيق.' },
        { q: 'كم من الوقت لوضع الدفع في الإنتاج؟', a: 'عشرة أسابيع: واحد للملف والاختيار، اثنان لآلة الحالات في بيئة الاختبار، اثنان للتأكيد والـ webhook، اثنان للاختبارات التقنية للمنصة، واحد للمطابقة والاسترداد، اثنان للتجريب بمبالغ صغيرة. ومدة الاختبارات التقنية تتوقف على المنصة وتُطلب كتابةً.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'عودة المتصفح هي ما يُرى أولاً ويُصدَّق آخراً.' },
      { after: 3, text: 'لا تتغير الحالة إلا بحدث يتحقق منه خادمكم، لا بما يرويه متصفح الزبون أبداً.' },
    ],
    cta: { eyebrow: 'أرسلوا لنا ما تبيعون ولمن', title: 'تاجر في الجزائر أو مؤسس في فرنسا: ندمج الدفع ببطاقة CIB والذهبية في تطبيقكم دون ضياع دفعة أو عدّها مرتين', body: 'تبني Symloop تطبيقات ومنصات في الإنتاج للشركات في الجزائر والمؤسسين المقيمين في فرنسا، وتدمج فيها الدفع بالبطاقة: آلة حالات الطلبية، المبالغ في الخادم، صفحة دفع مستضافة، تأكيد من المصدر، webhook موقَّع، مفتاح عدم تكرار، انتهاء، مطابقة الكشف، استرداد عبر الواجهة، بيئة اختبار ثم تجريب بمبالغ صغيرة. الكود والوثائق في مستودعكم؛ وعرض كل أسبوعين.' },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.caisse, kind: '2027', name: 'الصندوق: QR، البطاقة، الجهاز والمطابقة' },
      { href: L.saas, kind: '2027', name: 'إطلاق SaaS: الاشتراك والدفع' },
      { href: L.offline, kind: '2027', name: 'تطبيق دون اتصال وعدم التكرار' },
      { href: L.integrer, kind: '2027', name: 'دمج البرنامج القائم عبر API' },
    ] },
  },
};

const KEYWORDS = "intégrer paiement en ligne algérie 2027, paiement cib edahabia application, intégration satim site e-commerce, webhook paiement algérie, page de paiement cib, paiement en ligne application mobile algérie, agrégateur paiement algérie chargily, rapprochement paiement en ligne, remboursement paiement cib, cibweb gie monétique commerçant, online payment integration algeria 2027, cib edahabia payment gateway app, دمج الدفع الإلكتروني الجزائر, الدفع ببطاقة الذهبية في تطبيق";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
