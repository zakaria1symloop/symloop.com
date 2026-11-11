import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/le-client-a-appele-trois-fois-reclamations-sav-application-algerie-2027-ticket-unique-priorite-delais-escalade-retours-avoirs-espace-client.mjs';

const SLUG = 'le-client-a-appele-trois-fois-reclamations-sav-application-algerie-2027-ticket-unique-priorite-delais-escalade-retours-avoirs-espace-client';
const FIGURES = ['ticket', 'couches', 'situations', 'etapes', 'file', 'calendrier'];
const DATE = '2026-11-10';

const L = {
  client: '/blog/un-seul-client-pas-trois-fichier-client-unique-application-algerie-2027-comptoir-whatsapp-boutique-telephone-comme-cle-fusion/',
  whatsapp: '/blog/agent-ia-whatsapp-entreprise-algerie-2027-architecture-fenetre-24-heures-templates-passage-humain-cout-message/',
  notif: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  photos: '/blog/photos-qui-font-foi-application-algerie-2027-capture-compression-envoi-reprenable-stockage-objet-empreinte-horodatage-acces-signe/',
  devis: '/blog/du-devis-a-la-facture-sans-ressaisie-application-algerie-2027-moteur-de-prix-remises-approbation-versions-acceptation-ce-qu-on-construit/',
  stock: '/blog/stock-faux-dans-l-application-algerie-2027-journal-de-mouvements-reservations-inventaire-tournant-multi-depots-hors-ligne-ce-qu-on-construit/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  observ: '/blog/savoir-que-votre-application-est-en-panne-avant-vos-clients-algerie-2027-surveillance-alertes-astreinte-rapport-du-lundi/',
  livraison: '/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/',
  annulees: '/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/',
  otp: '/blog/connexion-otp-sms-whatsapp-application-algerie-2027-numero-de-telephone-code-cout-par-envoi-fraude-passkeys/',
  solaire: '/blog/installateur-solaire-algerie-2027-devis-chantier-monitoring-installations-maintenance/',
  marketplace: '/blog/apres-jumia-creer-marketplace-ecommerce-algerie-2027-verticale-logistique-paiement/',
  commerce: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  service: '/services/software-engineering/',
};

const CONTENT = {
  fr: {
    kind: 'Réclamations · SAV · Retours · 2027', title: "« Le client a appelé trois fois pour la même réclamation » : ce qu'on construit pour le service après-vente dans une application en Algérie en 2027, ticket unique, priorité, délais, escalade, retours et avoirs, espace client",
    dek: "« Le client a écrit sur WhatsApp, puis appelé, puis envoyé un e-mail. Trois personnes ont noté la même panne dans trois cahiers, le réfrigérateur qui ne refroidit pas attend derrière une question de facture, et personne ne sait qui s'en occupe. » Un service après-vente qui déborde n'est pas un problème de patience, c'est une construction : une boîte de réception ne connaît ni le client, ni la commande, ni l'urgence, ni le délai. Ce guide décrit ce qu'on construit pour qu'une réclamation n'existe qu'une fois et soit traitée dans l'ordre qui compte : un ticket unique quel que soit le canal, une priorité qui sort d'une grille impact sur urgence, des délais de réponse et de résolution que l'application surveille, une affectation nominative et une escalade automatique, des retours et des avoirs liés à la commande, un espace client qui répond à la place du téléphone, et cinq chiffres le lundi.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Réclamations', 'Service après-vente', 'Retours', 'Espace client', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Chaque entrée, WhatsApp, appel, e-mail, espace client, livreur, est rattachée au **client par le téléphone** et à la **commande**, et il n'y a qu'**un ticket par problème** : le second contact lit l'état au lieu d'ouvrir un dossier. La **priorité** sort d'une **grille impact sur urgence** écrite par le gérant, pas de la voix au téléphone, et elle fixe deux **délais**, première réponse et résolution, qui courent, se mettent en pause quand on attend le client, et déclenchent une **escalade** automatique quand ils sont dépassés. Le ticket est **affecté** à une personne, ses **états** sont écrits et datés, ses actions, visite, pièce, échange, **avoir**, sont liées à la commande et au stock. Il se **clôt** sur confirmation du client ou après trois jours de silence, et chaque ticket porte une **cause codée**. L'**espace client** affiche l'état et reçoit les réponses, et le lundi, **cinq chiffres** disent si le SAV tient et où agir. Six semaines, dont la première sans code.",
      "Ce guide s'adresse au gérant d'une boutique en ligne, d'un distributeur d'équipements, d'un installateur ou d'un transporteur dont les réclamations arrivent par tous les canaux et se perdent, au fondateur installé en France qui apprend les problèmes de ses clients à Alger quand ils sont déjà en colère, et au responsable qui veut une file et des délais plutôt qu'une boîte WhatsApp. Il ne redit pas comment un client reste unique d'un canal à l'autre, décrit dans [le guide sur le fichier client](" + L.client + "), ni comment l'agent WhatsApp répond dans sa fenêtre, décrit dans [le guide sur l'agent WhatsApp](" + L.whatsapp + ") ; il décrit ce qui se construit autour de la réclamation elle-même, et il prolonge [notre page sur l'ingénierie logicielle](" + L.service + ").",
    ],
    sections: [
      { heading: 'Une réclamation, trois canaux, un seul ticket', body: [
        "La figure suit une seule réclamation, un réfrigérateur livré la veille qui ne refroidit pas, arrivée par trois canaux dans la même journée, et ce que l'application en fait heure par heure.",
      ], visual: 'ticket', after: [
        "À 9 h 12, un message WhatsApp ; le numéro rattache le client et sa commande de la veille, et un ticket est ouvert. À 11 h 40, le client rappelle au comptoir pour savoir où ça en est ; le même numéro mène au même ticket, dont l'employé lit l'état au lieu de noter une seconde fois. À 14 h 05, un e-mail avec la photo demandée ; elle est rattachée au ticket et lève l'attente. Un seul ticket, trois canaux, et le client n'a jamais eu à répéter.",
        "La priorité sort d'une grille : impact élevé, le produit est inutilisable ; urgence élevée, des denrées sont en jeu le jour même ; la case donne P1, et P1 fixe une première réponse sous deux heures et une résolution sous soixante-douze. Les états s'enchaînent avec leur heure et leur auteur, qualifié par Amel, affecté au technicien Nadir, attente client pour la photo, résolu par remplacement le surlendemain, clos après confirmation. Les deux barres du bas comparent le réalisé au visé : dix-huit minutes et cinquante et une heures. Les données sont un exemple construit.",
      ] },
      { heading: 'Un service après-vente qui tient, en cinq couches', body: [
        "Le ticket unique est la couche qui évite les trois cahiers ; la priorité et les délais sont celle qui fait passer l'urgent devant.",
      ], visual: 'couches', after: [
        "**Entrées.** WhatsApp, appel au comptoir, e-mail, formulaire de l'espace client, livreur sur place : chaque entrée est rattachée au client par le téléphone et à la commande, selon [le guide sur le fichier client](" + L.client + ") ; une entrée sans client identifié reste une entrée, pas un ticket. **Ticket unique.** Un ticket par problème, pas par message : produit, commande, garantie, pièces jointes selon [le guide sur les photos](" + L.photos + "), historique des échanges ; un second contact lit l'état. **Priorité et délais.** Une grille impact sur urgence écrite par le gérant, trois priorités, un délai de première réponse et un délai de résolution par priorité, mis en pause quand on attend le client ; c'est la couche accentuée.",
        "**Traitement.** Affectation à une personne ou à une équipe, selon les droits décrits dans [le guide sur les rôles](" + L.roles + ") ; états écrits ; escalade automatique au responsable quand un délai est dépassé ; relance automatique du client en attente, par le canal qui convient selon [le guide sur les notifications](" + L.notif + ") ; actions datées, visite, pièce, échange, avoir. **Résolution et mesure.** Clôture sur confirmation du client ou silence de trois jours ; retour et avoir liés à la commande, l'avoir suivant les règles décrites dans [le guide sur le devis et la facture](" + L.devis + ") et le retour faisant bouger le stock selon [le guide sur le stock](" + L.stock + ") ; satisfaction en un mot ; cinq chiffres par semaine et première cause.",
      ] },
      { heading: "Six situations réelles, et ce que l'application fait", body: [
        "Les six situations qu'on retrouve dans presque tous les services après-vente qu'on reprend, et la construction qui les règle.",
      ], visual: 'situations', after: [
        "Les deux premières lignes se règlent par le ticket unique et la grille : le téléphone mène au même ticket, et l'urgent passe devant parce qu'une case le dit. Les deux suivantes se règlent par l'affectation nominative, l'escalade et l'état d'attente client, qui met le délai en pause au lieu de compter un retard qui n'en est pas un. Les deux dernières se règlent par le lien avec la commande, le stock et l'avoir, et par la cause codée sur chaque ticket, qui transforme cinq pannes vues une par une en une première cause de la semaine. Aucune ne se règle par une personne plus patiente au téléphone.",
      ] },
      { heading: "Une réclamation, en six gestes de l'équipe", body: [
        "Ce que fait la personne qui reçoit la réclamation, dans l'ordre, et pourquoi le deuxième geste change l'ordre de toute la file.",
      ], visual: 'etapes', after: [
        "**Identifier** : téléphone, client, commande, produit ; l'application propose le ticket existant s'il y en a un. **Qualifier** : choisir l'impact et l'urgence dans la grille, en dix secondes ; la priorité en découle, et avec elle les délais ; c'est l'étape accentuée. **Affecter** à une personne ou à une équipe ; le délai court. **Traiter** : visite, pièce, échange, avoir ; chaque action est datée et visible du client ; attente client si on a besoin de lui.",
        "**Résoudre et confirmer** : un message au client par le canal d'entrée, et la clôture sur sa confirmation ou après trois jours de silence. **Coder la cause** : une cause par ticket, choisie dans une liste écrite la première semaine, livraison endommagée, défaut produit, erreur de préparation, délai, information ; c'est l'étape qu'on saute toujours et qui vaut le plus, parce qu'elle alimente le lundi.",
      ] },
      { heading: 'La file du SAV un mardi matin, et les cinq chiffres de la semaine', body: [
        "La figure montre la file telle que l'équipe la voit, par états, et les cinq chiffres que le gérant lit le lundi.",
      ], visual: 'file', after: [
        "Cinq colonnes, nouveau, qualifié, affecté, attente client, résolu à confirmer, et des cartes avec leur priorité, leur âge et leur responsable. Une carte P1 en pointillés a dépassé son délai de première réponse ; elle a été escaladée au responsable et clignote jusqu'à ce que quelqu'un réponde. Les cartes en attente client portent leur relance automatique, et les cartes résolues leur clôture automatique après trois jours de silence.",
        "Les cinq chiffres de la semaine : première réponse médiane, résolution médiane, tickets rouverts, tickets pour cent commandes, et première cause. Les deux premiers disent si les délais tiennent ; le troisième dit si on résout vraiment ou si on ferme trop vite ; le quatrième met le SAV à l'échelle de l'activité ; le cinquième dit où agir en amont, ici l'emballage ou le transporteur, selon [le guide sur les commandes annulées à la livraison](" + L.annulees + "). Ils se lisent sur le tableau de bord du gérant, selon [le guide sur le tableau de bord temps réel](" + L.dashboard + "). Les données sont un exemple construit.",
      ] },
      { heading: "Vu ailleurs : la gestion des incidents et les outils de support du marché, et ce qui se transpose", body: [
        "Trois idées se transposent telles quelles. **La grille impact sur urgence**, pratique courante de la gestion des incidents informatiques, où la priorité est la case à l'intersection des deux et où chaque organisation fixe ses propres niveaux ; ce qui se transpose, c'est une priorité qui sort d'une grille écrite, pas d'une voix. **Les délais par priorité**, première réponse et résolution, avec pause pendant l'attente du client ; ce qui se transpose, c'est un délai qui court et qui escalade, pas une date qu'on regarde parfois. **Le ticket unique multicanal** des outils de support du marché ; ce qui se transpose, c'est le rattachement par le téléphone, parce qu'en Algérie le client écrit sur WhatsApp puis appelle, et que l'e-mail vient en dernier.",
        "Ce que ces pratiques ne décident pas pour vous : vos niveaux d'impact et d'urgence, vos délais, votre liste de causes, et qui est escaladé ; la première semaine du projet y répond, et c'est le gérant qui signe. Les outils de support du marché restent le bon choix quand vos règles rentrent dans les leurs ; le sur mesure commence quand le ticket doit parler à la commande, au stock, à l'avoir et au livreur dans la même application.",
      ] },
      { heading: "Les règles d'un service après-vente qui tient", body: [
        "Six règles, écrites la première semaine. **Un ticket par problème**, rattaché par le téléphone et la commande. **La priorité sort de la grille**, jamais de la voix. **Deux délais par priorité**, qui courent, se mettent en pause en attente client, et escaladent. **Une personne nommée** par ticket, et une réaffectation en cas d'absence. **Le retour et l'avoir sont liés à la commande** et font bouger le stock. **Une cause codée par ticket**, et cinq chiffres le lundi.",
        "Et une règle de méthode : la clôture appartient au client, par confirmation, ou au temps, par trois jours de silence ; jamais à l'employé pressé de faire baisser la file.",
      ] },
      { heading: "Six entreprises, et le ticket qui manquait", body: [
        "Six situations composées à partir de projets que nous rencontrons ; les noms sont génériques et les chiffres sont des exemples.",
      ], list: [
        "**Une boutique d'électroménager à Alger, livraison à domicile.** Les réclamations arrivaient sur trois numéros WhatsApp et un cahier. La construction : ticket unique rattaché par le téléphone, grille P1 à P3, visite du technicien affectée depuis le ticket. Les appels répétés pour la même panne ont cessé le premier mois ; les livraisons suivent [le guide sur la plateforme de livraison](" + L.livraison + ").",
        "**Un distributeur de pièces à Oran, trois cents détaillants.** Les retours de pièces n'étaient jamais rapprochés des avoirs. La construction : retour lié au ticket et à la commande, réception au dépôt qui émet l'avoir et met le stock à jour.",
        "**Un fondateur à Marseille, boutique en ligne à Alger.** Il découvrait les réclamations dans les avis publics. La construction : espace client avec état du ticket, connexion par code selon [le guide sur la connexion par code](" + L.otp + "), cinq chiffres lisibles depuis Marseille ; la gestion à distance suit [le guide sur le commerce depuis la France](" + L.commerce + ").",
        "**Un installateur solaire à Sétif.** Les pannes après installation étaient traitées au téléphone, sans trace. La construction : ticket par installation, grille avec urgence élevée quand la production est à zéro, photos du client rattachées ; le métier est décrit dans [le guide sur l'installateur solaire](" + L.solaire + ").",
        "**Une marketplace à Constantine, vendeurs tiers.** L'acheteur se plaignait à la plateforme, qui transférait au vendeur par e-mail. La construction : ticket partagé entre plateforme et vendeur, délai du vendeur surveillé, escalade à la plateforme ; le modèle est décrit dans [le guide sur la marketplace](" + L.marketplace + ").",
        "**Un transporteur à Annaba, colis endommagés.** Même cause, vue colis par colis. La construction : cause codée, première cause de la semaine, alerte au responsable du conditionnement quand elle dépasse un seuil.",
      ] },
      { heading: 'Le calendrier 2027', body: [
        "Six semaines pour une entreprise qui reçoit déjà des réclamations par tous les canaux ; la première semaine se passe sans code.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, règles** : grille impact sur urgence, délais par priorité, états, liste des causes, qui est escaladé, règles de clôture et de retour ; signées par le gérant. **Semaine 2, entrées et ticket unique** : WhatsApp, appel, e-mail et espace client rattachés au client et à la commande, un ticket par problème, pièces jointes. **Semaine 3, priorité, délais et affectation** : grille appliquée, délais qui courent et se mettent en pause, affectation nominative, escalade automatique, relances.",
        "**Semaine 4, retours et avoirs** : retour lié au ticket et à la commande, réception au dépôt, avoir émis, stock mis à jour, échange. **Semaine 5, espace client et file** : le client lit l'état et répond depuis son espace ou WhatsApp, la file par états pour l'équipe. **Semaine 6, mesure** : cinq chiffres par semaine, causes codées, première cause, revue du lundi avec le gérant, dans l'esprit du rapport décrit dans [le guide sur la surveillance](" + L.observ + "). Chaque semaine se termine par une démonstration, selon [le guide sur la livraison sans casse](" + L.livrer + ").",
      ] },
      { heading: 'Ce qui fait échouer un service après-vente', body: [
        "Cinq causes, vues dans des applications qu'on reprend. **La boîte de réception comme file** : pas de client, pas de commande, pas de priorité. **Le ticket par message** : trois tickets pour une panne, et trois réponses contradictoires. **La priorité à la voix** : celui qui crie passe devant. **Le délai qui ne court pas** : une date regardée parfois, jamais une alerte. **La clôture par l'employé** : la file baisse, les clients rappellent.",
        "Et une cause de méthode : ne pas coder la cause, parce que c'est dix secondes de plus par ticket ; sans elle, le SAV traite les symptômes toute l'année et ne change jamais l'emballage.",
      ] },
      { heading: 'Questions fréquentes', body: [
        "Les questions que posent les gérants et les fondateurs quand ils nous décrivent un service après-vente qui déborde.",
      ], faq: [
        { q: "Comment éviter qu'un client ouvre trois réclamations pour la même panne ?", a: "En rattachant chaque entrée, WhatsApp, appel, e-mail, espace client, au client par le téléphone et à la commande, et en n'ayant qu'un ticket par problème. Quand le client recontacte, l'application mène au ticket existant et l'employé lit l'état au lieu de noter une seconde fois. Le client n'a jamais à répéter." },
        { q: "Comment décider quelle réclamation traiter en premier ?", a: "Par une grille impact sur urgence écrite par le gérant : l'impact dit si le produit est utilisable, l'urgence dit ce qui se passe si on attend. La case donne la priorité, P1 à P3, et la priorité fixe les délais. La priorité ne vient jamais de la voix au téléphone." },
        { q: "À quoi servent les délais de réponse et de résolution ?", a: "À ce qu'un ticket ne s'oublie pas : le délai court dès l'ouverture, se met en pause quand on attend le client, et déclenche une escalade automatique au responsable quand il est dépassé. Les médianes de la semaine disent si l'équipe tient ses délais ; les délais eux-mêmes sont fixés par le gérant par priorité." },
        { q: "Comment gérer les retours et les avoirs ?", a: "Le retour est lié au ticket et à la commande ; sa réception au dépôt émet l'avoir et met le stock à jour, de sorte qu'un produit repris par le livreur ne disparaît pas entre le camion et le dépôt. L'échange suit la même mécanique avec une nouvelle livraison." },
        { q: "Le client peut-il suivre sa réclamation sans appeler ?", a: "Oui, depuis un espace client où il se connecte par code et lit l'état du ticket, répond aux demandes, par exemple une photo, et confirme la résolution. Les mêmes informations lui arrivent par WhatsApp. L'objectif est que le second appel n'ait plus de raison d'être." },
        { q: "Pourquoi coder une cause sur chaque ticket ?", a: "Parce que c'est ce qui transforme des réclamations traitées une par une en une première cause de la semaine : livraison endommagée, défaut produit, erreur de préparation. Quand une cause dépasse un seuil, le gérant et le fournisseur sont alertés, et on agit sur l'emballage ou le transporteur plutôt que sur le symptôme." },
        { q: "Combien de temps pour mettre cela en place ?", a: "Six semaines dans le calendrier type : une pour écrire la grille, les délais et les causes, une pour les entrées et le ticket unique, une pour la priorité, les délais et l'affectation, une pour les retours et les avoirs, une pour l'espace client et la file, une pour la mesure. Le délai dépend du nombre de canaux et de l'existence d'un fichier client unique." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Trois arrivées ne font pas trois tickets : le téléphone rattache au même client, la commande au même produit, et le second appel lit l'état au lieu de rouvrir un dossier." },
      { after: 3, text: "La priorité n'est pas l'humeur du client au téléphone : c'est une case d'une grille écrite, et elle fixe deux délais que l'application surveille." },
    ],
    cta: { eyebrow: 'Envoyez-nous un mois de réclamations, nous mesurons les doublons et les retards', title: "Gérant en Algérie ou fondateur en France : nous construisons un service après-vente où la réclamation n'existe qu'une fois et passe dans l'ordre qui compte", body: "Symloop construit et reprend des applications en production pour les entreprises en Algérie et les fondateurs installés en France : entrées WhatsApp, appel, e-mail et espace client rattachées au client et à la commande, ticket unique par problème, grille impact sur urgence et délais par priorité, affectation nominative, escalade automatique, relances, retours et avoirs liés à la commande et au stock, espace client avec état et réponses, file par états, causes codées, cinq chiffres par semaine. Code et règles dans votre dépôt ; une démonstration toutes les deux semaines." },
    related: { label: 'À lire aussi', items: [
      { href: L.client, kind: '2027', name: 'Un seul client, pas trois : fichier client unique' },
      { href: L.whatsapp, kind: '2027', name: 'Agent WhatsApp : fenêtre 24 h, templates, passage humain' },
      { href: L.photos, kind: '2027', name: 'Des photos qui font foi : capture, empreinte, accès signé' },
      { href: L.devis, kind: '2027', name: 'Du devis à la facture : avoirs, documents gelés' },
    ] },
  },
  en: {
    kind: 'Complaints · After-sales · Returns · 2027', title: "“The customer called three times about the same complaint”: what gets built for after-sales in an application in Algeria in 2027, single ticket, priority, deadlines, escalation, returns and credit notes, customer space",
    dek: "“The customer wrote on WhatsApp, then called, then e-mailed. Three people noted the same fault in three notebooks, the fridge that is not cooling waits behind an invoice question, and nobody knows who is handling it.” Overflowing after-sales is not a patience problem, it is a construction: an inbox knows neither the customer, nor the order, nor the urgency, nor the deadline. This guide describes what gets built so that a complaint exists only once and is handled in the order that matters: a single ticket whatever the channel, a priority that comes from an impact by urgency grid, response and resolution deadlines the application watches, named assignment and automatic escalation, returns and credit notes linked to the order, a customer space that answers instead of the phone, and five figures on Monday.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Complaints', 'After-sales', 'Returns', 'Customer space', 'Algeria 2027'],
    intro: [
      "**Short answer.** Every intake, WhatsApp, call, e-mail, customer space, courier, is matched to the **customer by phone** and to the **order**, and there is only **one ticket per problem**: the second contact reads the state instead of opening a file. **Priority** comes from an **impact by urgency grid** written by the manager, not from the voice on the phone, and it sets two **deadlines**, first response and resolution, which run, pause while waiting for the customer, and trigger an automatic **escalation** when passed. The ticket is **assigned** to a person, its **states** are written and dated, its actions, visit, part, exchange, **credit note**, are linked to the order and to stock. It **closes** on the customer's confirmation or after three days of silence, and every ticket carries a **coded cause**. The **customer space** shows the state and receives replies, and on Monday **five figures** say whether after-sales holds and where to act. Six weeks, the first without code.",
      "This guide is for the manager of an online shop, an equipment distributor, an installer or a carrier whose complaints arrive through every channel and get lost, the founder settled in France who learns about their customers' problems in Algiers once they are already angry, and the person who wants a queue and deadlines rather than a WhatsApp inbox. It does not repeat how a customer stays unique across channels, described in [the customer file guide](" + L.client + "), nor how the WhatsApp agent replies within its window, described in [the WhatsApp agent guide](" + L.whatsapp + "); it describes what gets built around the complaint itself, and it extends [our software engineering page](" + L.service + ").",
    ],
    sections: [
      { heading: 'One complaint, three channels, one ticket', body: [
        "The figure follows a single complaint, a fridge delivered the day before that is not cooling, arriving through three channels in the same day, and what the application does with it hour by hour.",
      ], visual: 'ticket', after: [
        "At 9:12, a WhatsApp message; the number matches the customer and yesterday's order, and a ticket is opened. At 11:40, the customer calls the counter to ask where it stands; the same number leads to the same ticket, whose state the employee reads instead of noting a second time. At 14:05, an e-mail with the requested photo; it is attached to the ticket and lifts the wait. One ticket, three channels, and the customer never had to repeat.",
        "Priority comes from a grid: high impact, the product is unusable; high urgency, food is at stake the same day; the cell gives P1, and P1 sets a first response under two hours and a resolution under seventy-two. States follow one another with their time and author, qualified by Amel, assigned to technician Nadir, waiting for the customer's photo, resolved by replacement two days later, closed after confirmation. The two bars at the bottom compare actual with target: eighteen minutes and fifty-one hours. The data is a constructed example.",
      ] },
      { heading: 'After-sales that holds, in five layers', body: [
        "The single ticket is the layer that avoids the three notebooks; priority and deadlines are the one that puts the urgent first.",
      ], visual: 'couches', after: [
        "**Intakes.** WhatsApp, counter call, e-mail, customer-space form, courier on site: every intake is matched to the customer by phone and to the order, following [the customer file guide](" + L.client + "); an intake without an identified customer stays an intake, not a ticket. **Single ticket.** One ticket per problem, not per message: product, order, warranty, attachments following [the photos guide](" + L.photos + "), exchange history; a second contact reads the state. **Priority and deadlines.** An impact by urgency grid written by the manager, three priorities, a first-response and a resolution deadline per priority, paused while waiting for the customer; this is the accented layer.",
        "**Handling.** Assignment to a person or a team, following the rights described in [the roles guide](" + L.roles + "); written states; automatic escalation to the manager when a deadline is passed; automatic reminder to a waiting customer, through the right channel following [the notifications guide](" + L.notif + "); dated actions, visit, part, exchange, credit note. **Resolution and measurement.** Closure on the customer's confirmation or three days of silence; return and credit note linked to the order, the credit note following the rules described in [the quote and invoice guide](" + L.devis + ") and the return moving stock following [the stock guide](" + L.stock + "); one-word satisfaction; five figures a week and first cause.",
      ] },
      { heading: 'Six real situations, and what the application does', body: [
        "The six situations found in almost every after-sales service we take over, and the construction that settles them.",
      ], visual: 'situations', after: [
        "The first two rows are settled by the single ticket and the grid: the phone leads to the same ticket, and the urgent goes first because a cell says so. The next two are settled by named assignment, escalation and the waiting-customer state, which pauses the deadline instead of counting a delay that is not one. The last two are settled by the link with the order, stock and credit note, and by the cause coded on every ticket, which turns five faults seen one by one into the first cause of the week. None is settled by a more patient person on the phone.",
      ] },
      { heading: 'One complaint, in six team gestures', body: [
        "What the person receiving the complaint does, in order, and why the second gesture changes the order of the whole queue.",
      ], visual: 'etapes', after: [
        "**Identify**: phone, customer, order, product; the application proposes the existing ticket if there is one. **Qualify**: choose impact and urgency in the grid, in ten seconds; priority follows, and the deadlines with it; this is the accented step. **Assign** to a person or a team; the deadline runs. **Handle**: visit, part, exchange, credit note; every action is dated and visible to the customer; waiting-customer state if you need them.",
        "**Resolve and confirm**: a message to the customer through the intake channel, and closure on their confirmation or after three days of silence. **Code the cause**: one cause per ticket, chosen from a list written in the first week, damaged delivery, product defect, picking error, delay, information; it is the step always skipped and worth the most, because it feeds Monday.",
      ] },
      { heading: "The after-sales board on a Tuesday morning, and the week's five figures", body: [
        "The figure shows the queue as the team sees it, by state, and the five figures the manager reads on Monday.",
      ], visual: 'file', after: [
        "Five columns, new, qualified, assigned, waiting customer, resolved to confirm, and cards with their priority, age and owner. A dashed P1 card passed its first-response deadline; it was escalated to the manager and blinks until someone answers. Waiting-customer cards carry their automatic reminder, and resolved cards their automatic closure after three days of silence.",
        "The week's five figures: median first response, median resolution, reopened tickets, tickets per hundred orders, and first cause. The first two say whether deadlines hold; the third says whether you really resolve or close too fast; the fourth scales after-sales to the activity; the fifth says where to act upstream, here packaging or the carrier, following [the orders cancelled at delivery guide](" + L.annulees + "). They are read on the manager's dashboard, following [the real-time dashboard guide](" + L.dashboard + "). The data is a constructed example.",
      ] },
      { heading: 'Seen elsewhere: incident management and market support tools, and what carries over', body: [
        "Three ideas carry over as they are. **The impact by urgency grid**, common practice in IT incident management, where priority is the cell at the intersection of the two and each organisation sets its own levels; what carries over is a priority that comes from a written grid, not from a voice. **Deadlines per priority**, first response and resolution, paused while waiting for the customer; what carries over is a deadline that runs and escalates, not a date looked at sometimes. **The multichannel single ticket** of market support tools; what carries over is matching by phone, because in Algeria the customer writes on WhatsApp then calls, and e-mail comes last.",
        "What those practices do not decide for you: your impact and urgency levels, your deadlines, your cause list, and who is escalated to; the project's first week answers that, and the manager signs. Market support tools remain the right choice when your rules fit theirs; custom starts when the ticket must talk to the order, stock, the credit note and the courier in the same application.",
      ] },
      { heading: 'The rules of after-sales that holds', body: [
        "Six rules, written in the first week. **One ticket per problem**, matched by phone and order. **Priority comes from the grid**, never from the voice. **Two deadlines per priority**, which run, pause while waiting for the customer, and escalate. **One named person** per ticket, and reassignment in case of absence. **The return and credit note are linked to the order** and move stock. **One coded cause per ticket**, and five figures on Monday.",
        "And one rule of method: closure belongs to the customer, by confirmation, or to time, by three days of silence; never to the employee eager to shrink the queue.",
      ] },
      { heading: 'Six companies, and the ticket that was missing', body: [
        "Six situations composed from projects we meet; the names are generic and the figures are examples.",
      ], list: [
        "**An appliance shop in Algiers, home delivery.** Complaints arrived on three WhatsApp numbers and a notebook. The construction: single ticket matched by phone, P1 to P3 grid, technician visit assigned from the ticket. Repeated calls for the same fault stopped in the first month; deliveries follow [the delivery platform guide](" + L.livraison + ").",
        "**A parts distributor in Oran, three hundred retailers.** Parts returns were never reconciled with credit notes. The construction: return linked to ticket and order, warehouse receipt that issues the credit note and updates stock.",
        "**A founder in Marseille, online shop in Algiers.** They discovered complaints in public reviews. The construction: customer space with ticket state, code login following [the code login guide](" + L.otp + "), five figures readable from Marseille; remote management follows [the shop from France guide](" + L.commerce + ").",
        "**A solar installer in Sétif.** Post-installation faults were handled by phone, without a trace. The construction: ticket per installation, grid with high urgency when production is zero, customer photos attached; the trade is described in [the solar installer guide](" + L.solaire + ").",
        "**A marketplace in Constantine, third-party sellers.** The buyer complained to the platform, which forwarded to the seller by e-mail. The construction: ticket shared between platform and seller, seller's deadline watched, escalation to the platform; the model is described in [the marketplace guide](" + L.marketplace + ").",
        "**A carrier in Annaba, damaged parcels.** Same cause, seen parcel by parcel. The construction: coded cause, first cause of the week, alert to the packaging lead when it passes a threshold.",
      ] },
      { heading: 'The 2027 calendar', body: [
        "Six weeks for a company that already receives complaints through every channel; the first week passes without code.",
      ], visual: 'calendrier', after: [
        "**Week 1, rules**: impact by urgency grid, deadlines per priority, states, cause list, who is escalated to, closure and return rules; signed by the manager. **Week 2, intakes and single ticket**: WhatsApp, call, e-mail and customer space matched to customer and order, one ticket per problem, attachments. **Week 3, priority, deadlines and assignment**: grid applied, deadlines that run and pause, named assignment, automatic escalation, reminders.",
        "**Week 4, returns and credit notes**: return linked to ticket and order, warehouse receipt, credit note issued, stock updated, exchange. **Week 5, customer space and board**: the customer reads the state and replies from their space or WhatsApp, the board by state for the team. **Week 6, measurement**: five figures a week, coded causes, first cause, Monday review with the manager, in the spirit of the report described in [the monitoring guide](" + L.observ + "). Every week ends with a demo, following [the delivery without breakage guide](" + L.livrer + ").",
      ] },
      { heading: 'What makes after-sales fail', body: [
        "Five causes, seen in applications we take over. **The inbox as queue**: no customer, no order, no priority. **The ticket per message**: three tickets for one fault, and three contradictory answers. **Priority to the voice**: whoever shouts goes first. **The deadline that does not run**: a date looked at sometimes, never an alert. **Closure by the employee**: the queue shrinks, customers call back.",
        "And one cause of method: not coding the cause, because it is ten more seconds per ticket; without it, after-sales treats symptoms all year and never changes the packaging.",
      ] },
      { heading: 'Frequently asked questions', body: [
        "The questions managers and founders ask when they describe after-sales that overflows.",
      ], faq: [
        { q: "How do you stop a customer opening three complaints for the same fault?", a: "By matching every intake, WhatsApp, call, e-mail, customer space, to the customer by phone and to the order, and having only one ticket per problem. When the customer contacts again, the application leads to the existing ticket and the employee reads the state instead of noting a second time. The customer never has to repeat." },
        { q: "How do you decide which complaint to handle first?", a: "With an impact by urgency grid written by the manager: impact says whether the product is usable, urgency says what happens if you wait. The cell gives the priority, P1 to P3, and the priority sets the deadlines. Priority never comes from the voice on the phone." },
        { q: "What are response and resolution deadlines for?", a: "So that a ticket is not forgotten: the deadline runs from opening, pauses while waiting for the customer, and triggers an automatic escalation to the manager when passed. The week's medians say whether the team holds its deadlines; the deadlines themselves are set by the manager per priority." },
        { q: "How do you handle returns and credit notes?", a: "The return is linked to the ticket and the order; its receipt at the warehouse issues the credit note and updates stock, so a product taken back by the courier does not vanish between the truck and the warehouse. An exchange follows the same mechanics with a new delivery." },
        { q: "Can the customer follow their complaint without calling?", a: "Yes, from a customer space where they log in by code and read the ticket state, answer requests, a photo for example, and confirm the resolution. The same information reaches them by WhatsApp. The goal is that the second call no longer has a reason to exist." },
        { q: "Why code a cause on every ticket?", a: "Because it is what turns complaints handled one by one into the first cause of the week: damaged delivery, product defect, picking error. When a cause passes a threshold, the manager and the supplier are alerted, and you act on packaging or the carrier rather than on the symptom." },
        { q: "How long does it take to set this up?", a: "Six weeks in the typical calendar: one to write the grid, the deadlines and the causes, one for intakes and the single ticket, one for priority, deadlines and assignment, one for returns and credit notes, one for the customer space and the board, one for measurement. The duration depends on the number of channels and whether a single customer file exists." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Three arrivals do not make three tickets: the phone matches the same customer, the order the same product, and the second call reads the state instead of reopening a file." },
      { after: 3, text: "Priority is not the customer's mood on the phone: it is a cell of a written grid, and it sets two deadlines the application watches." },
    ],
    cta: { eyebrow: 'Send us a month of complaints, we measure duplicates and delays', title: 'Manager in Algeria or founder in France: we build after-sales where the complaint exists only once and goes in the order that matters', body: 'Symloop builds and takes over applications in production for companies in Algeria and founders settled in France: WhatsApp, call, e-mail and customer-space intakes matched to customer and order, single ticket per problem, impact by urgency grid and deadlines per priority, named assignment, automatic escalation, reminders, returns and credit notes linked to order and stock, customer space with state and replies, board by state, coded causes, five figures a week. Code and rules in your repository; a demo every two weeks.' },
    related: { label: 'Read next', items: [
      { href: L.client, kind: '2027', name: 'One customer, not three: single customer file' },
      { href: L.whatsapp, kind: '2027', name: 'WhatsApp agent: 24-hour window, templates, human hand-off' },
      { href: L.photos, kind: '2027', name: 'Photos that hold up: capture, fingerprint, signed access' },
      { href: L.devis, kind: '2027', name: 'From quote to invoice: credit notes, frozen documents' },
    ] },
  },
  ar: {
    kind: 'شكاوى · ما بعد البيع · مرتجعات · 2027', title: '«اتصل الزبون ثلاث مرات للشكوى نفسها»: ما يُبنى لخدمة ما بعد البيع في تطبيق في الجزائر سنة 2027، تذكرة واحدة، أولوية، آجال، تصعيد، مرتجعات وإشعارات دائنة، فضاء زبون',
    dek: '«كتب الزبون على WhatsApp ثم اتصل ثم راسل. دوّن ثلاثة أشخاص العطل نفسه في ثلاثة دفاتر، والثلاجة التي لا تبرّد تنتظر خلف سؤال عن فاتورة، ولا أحد يعرف من يتولاها.» خدمة ما بعد بيع تفيض ليست مشكلة صبر بل بناء: صندوق الوارد لا يعرف الزبون ولا الطلبية ولا الإلحاح ولا الأجل. يصف هذا الدليل ما يُبنى كي لا توجد الشكوى إلا مرة وتُعالَج بالترتيب المهم: تذكرة واحدة أياً كانت القناة، أولوية تخرج من شبكة أثر على إلحاح، آجال رد وحل يراقبها التطبيق، إسناد اسمي وتصعيد آلي، مرتجعات وإشعارات دائنة مرتبطة بالطلبية، فضاء زبون يجيب بدل الهاتف، وخمسة أرقام يوم الاثنين.',
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['شكاوى', 'ما بعد البيع', 'مرتجعات', 'فضاء الزبون', 'الجزائر 2027'],
    intro: [
      '**الجواب القصير.** كل مدخل، WhatsApp أو مكالمة أو بريد أو فضاء زبون أو موصّل، يُربط **بالزبون عبر الهاتف** و**بالطلبية**، ولا توجد إلا **تذكرة واحدة لكل مشكلة**: الاتصال الثاني يقرأ الحالة بدل فتح ملف. و**الأولوية** تخرج من **شبكة أثر على إلحاح** كتبها المسيّر لا من الصوت على الهاتف، وتحدد **أجلين**، الرد الأول والحل، يجريان ويتوقفان أثناء انتظار الزبون ويطلقان **تصعيداً** آلياً عند تجاوزهما. والتذكرة **مسنَدة** إلى شخص، و**حالاتها** مكتوبة ومؤرَّخة، وإجراءاتها، زيارة أو قطعة أو تبديل أو **إشعار دائن**، مرتبطة بالطلبية والمخزون. و**تُغلق** عند تأكيد الزبون أو بعد ثلاثة أيام صمت، وتحمل كل تذكرة **سبباً مرمَّزاً**. و**فضاء الزبون** يعرض الحالة ويتلقى الردود، ويوم الاثنين تقول **خمسة أرقام** إن كانت الخدمة تصمد وأين نتدخل. ستة أسابيع، أولها بلا كود.',
      'يتوجه هذا الدليل إلى مسيّر متجر إلكتروني أو موزع تجهيزات أو مركّب أو ناقل تصل شكاواه من كل القنوات وتضيع، وإلى المؤسس المقيم في فرنسا الذي يعرف مشاكل زبائنه في الجزائر حين يكونون غاضبين أصلاً، وإلى المسؤول الذي يريد طابوراً وآجالاً بدل صندوق WhatsApp. لا يعيد شرح كيف يبقى الزبون واحداً من قناة إلى أخرى، الموصوف في [دليل ملف الزبائن](' + L.client + ')، ولا كيف يرد وكيل WhatsApp في نافذته، الموصوف في [دليل وكيل WhatsApp](' + L.whatsapp + ')؛ بل يصف ما يُبنى حول الشكوى نفسها، ويمتد من [صفحتنا عن هندسة البرمجيات](' + L.service + ').',
    ],
    sections: [
      { heading: 'شكوى واحدة، ثلاث قنوات، تذكرة واحدة', body: [
        'يتتبع الشكل شكوى واحدة، ثلاجة سُلّمت أمس ولا تبرّد، وصلت من ثلاث قنوات في اليوم نفسه، وما يفعله التطبيق بها ساعة بساعة.',
      ], visual: 'ticket', after: [
        'عند 9:12 رسالة WhatsApp؛ الرقم يربط الزبون وطلبيته أمس، وتُفتح تذكرة. وعند 11:40 يتصل الزبون بالكاونتر ليسأل عن الحالة؛ الرقم نفسه يقود إلى التذكرة نفسها فيقرأ الموظف حالتها بدل التدوين مرة ثانية. وعند 14:05 بريد بالصورة المطلوبة؛ تُرفق بالتذكرة وترفع الانتظار. تذكرة واحدة وثلاث قنوات ولم يضطر الزبون إلى التكرار.',
        'وتخرج الأولوية من شبكة: أثر عالٍ، المنتج غير صالح للاستعمال؛ إلحاح عالٍ، مواد غذائية على المحك في اليوم نفسه؛ الخلية تعطي P1، وP1 تحدد رداً أول دون ساعتين وحلاً دون اثنتين وسبعين. وتتعاقب الحالات بوقتها ومؤلفها، مؤهَّلة بواسطة أمل، مسنَدة إلى التقني نذير، انتظار الزبون للصورة، محلولة بالاستبدال بعد يومين، مغلقة بعد التأكيد. والشريطان في الأسفل يقارنان المحقَّق بالمستهدَف: ثماني عشرة دقيقة وإحدى وخمسون ساعة. والبيانات مثال مبني.',
      ] },
      { heading: 'خدمة ما بعد بيع تصمد، في خمس طبقات', body: [
        'التذكرة الواحدة هي الطبقة التي تجنّب الدفاتر الثلاثة؛ والأولوية والآجال هي التي تقدّم العاجل.',
      ], visual: 'couches', after: [
        '**المداخل.** WhatsApp ومكالمة الكاونتر والبريد ونموذج فضاء الزبون والموصّل في المكان: كل مدخل يُربط بالزبون عبر الهاتف وبالطلبية وفق [دليل ملف الزبائن](' + L.client + ')؛ ومدخل بلا زبون معرَّف يبقى مدخلاً لا تذكرة. **تذكرة واحدة.** تذكرة لكل مشكلة لا لكل رسالة: منتج وطلبية وضمان ومرفقات وفق [دليل الصور](' + L.photos + ') وتاريخ التبادلات؛ والاتصال الثاني يقرأ الحالة. **الأولوية والآجال.** شبكة أثر على إلحاح يكتبها المسيّر، ثلاث أولويات، أجل رد أول وأجل حل لكل أولوية، يتوقفان أثناء انتظار الزبون؛ وهي الطبقة المميزة.',
        '**المعالجة.** إسناد إلى شخص أو فريق وفق الحقوق الموصوفة في [دليل الأدوار](' + L.roles + ')؛ حالات مكتوبة؛ تصعيد آلي إلى المسؤول عند تجاوز أجل؛ تذكير آلي للزبون المنتظر بالقناة المناسبة وفق [دليل الإشعارات](' + L.notif + ')؛ إجراءات مؤرَّخة، زيارة وقطعة وتبديل وإشعار دائن. **الحل والقياس.** إغلاق عند تأكيد الزبون أو صمت ثلاثة أيام؛ إرجاع وإشعار دائن مرتبطان بالطلبية، الإشعار وفق القواعد الموصوفة في [دليل عرض السعر والفاتورة](' + L.devis + ') والإرجاع يحرّك المخزون وفق [دليل المخزون](' + L.stock + ')؛ رضا بكلمة؛ خمسة أرقام أسبوعياً وسبب أول.',
      ] },
      { heading: 'ست حالات حقيقية، وما يفعله التطبيق', body: [
        'الحالات الست التي نجدها في كل خدمات ما بعد البيع التي نستلمها تقريباً، والبناء الذي يحلها.',
      ], visual: 'situations', after: [
        'السطران الأولان يُحلان بالتذكرة الواحدة والشبكة: الهاتف يقود إلى التذكرة نفسها، والعاجل يتقدم لأن خلية تقول ذلك. والتاليان بالإسناد الاسمي والتصعيد وحالة انتظار الزبون التي توقف الأجل بدل احتساب تأخر ليس تأخراً. والأخيران بالربط مع الطلبية والمخزون والإشعار الدائن وبالسبب المرمَّز على كل تذكرة، الذي يحوّل خمسة أعطال رُئيت واحداً واحداً إلى سبب أول للأسبوع. ولا واحد يُحل بشخص أكثر صبراً على الهاتف.',
      ] },
      { heading: 'شكوى واحدة، في ست حركات للفريق', body: [
        'ما يفعله من يتلقى الشكوى بالترتيب، ولماذا الحركة الثانية تغيّر ترتيب الطابور كله.',
      ], visual: 'etapes', after: [
        '**التعريف**: هاتف وزبون وطلبية ومنتج؛ يقترح التطبيق التذكرة الموجودة إن وُجدت. **التأهيل**: اختيار الأثر والإلحاح في الشبكة في عشر ثوانٍ؛ تنتج الأولوية ومعها الآجال؛ وهي الخطوة المميزة. **الإسناد** إلى شخص أو فريق؛ الأجل يجري. **المعالجة**: زيارة وقطعة وتبديل وإشعار دائن؛ كل إجراء مؤرَّخ ومرئي للزبون؛ حالة انتظار الزبون عند الحاجة إليه.',
        '**الحل والتأكيد**: رسالة للزبون عبر قناة الدخول، وإغلاق عند تأكيده أو بعد ثلاثة أيام صمت. **ترميز السبب**: سبب واحد لكل تذكرة يُختار من قائمة كُتبت في الأسبوع الأول، تسليم متضرر، عيب منتج، خطأ تحضير، تأخر، معلومة؛ وهي الخطوة التي تُهمل دائماً وتساوي الأكثر لأنها تغذي الاثنين.',
      ] },
      { heading: 'لوحة خدمة ما بعد البيع صباح ثلاثاء، وأرقام الأسبوع الخمسة', body: [
        'يُظهر الشكل الطابور كما يراه الفريق، حسب الحالات، والأرقام الخمسة التي يقرؤها المسيّر يوم الاثنين.',
      ], visual: 'file', after: [
        'خمسة أعمدة، جديد ومؤهَّل ومسنَد وانتظار الزبون ومحلول للتأكيد، وبطاقات بأولويتها وعمرها ومسؤولها. بطاقة P1 متقطعة تجاوزت أجل الرد الأول؛ صُعِّدت إلى المسؤول وتومض حتى يرد أحد. وبطاقات انتظار الزبون تحمل تذكيرها الآلي، والمحلولة إغلاقها الآلي بعد ثلاثة أيام صمت.',
        'وأرقام الأسبوع الخمسة: وسيط الرد الأول، وسيط الحل، التذاكر المعاد فتحها، التذاكر لكل مئة طلبية، والسبب الأول. الأولان يقولان إن كانت الآجال تصمد؛ والثالث إن كنا نحل فعلاً أم نغلق بسرعة؛ والرابع يضع الخدمة على مقياس النشاط؛ والخامس يقول أين نتدخل في المنبع، هنا التغليف أو الناقل، وفق [دليل الطلبيات الملغاة عند التسليم](' + L.annulees + '). وتُقرأ على لوحة المسيّر وفق [دليل لوحة القيادة الآنية](' + L.dashboard + '). والبيانات مثال مبني.',
      ] },
      { heading: 'ما رأيناه في مكان آخر: إدارة الحوادث وأدوات الدعم في السوق، وما ينتقل', body: [
        'ثلاث أفكار تنتقل كما هي. **شبكة الأثر على الإلحاح**، ممارسة شائعة في إدارة الحوادث المعلوماتية حيث الأولوية هي الخلية عند تقاطع الاثنين وكل منظمة تحدد مستوياتها؛ وما ينتقل هو أولوية تخرج من شبكة مكتوبة لا من صوت. **الآجال لكل أولوية**، الرد الأول والحل، متوقفة أثناء انتظار الزبون؛ وما ينتقل هو أجل يجري ويصعّد لا تاريخ يُنظر إليه أحياناً. **التذكرة الواحدة متعددة القنوات** في أدوات الدعم في السوق؛ وما ينتقل هو الربط بالهاتف لأن الزبون في الجزائر يكتب على WhatsApp ثم يتصل والبريد يأتي أخيراً.',
        'ما لا تقرره هذه الممارسات عنكم: مستويات أثركم وإلحاحكم وآجالكم وقائمة أسبابكم ومن يُصعَّد إليه؛ الأسبوع الأول من المشروع يجيب، والمسيّر يوقّع. وتبقى أدوات الدعم في السوق الخيار الصحيح حين تدخل قواعدكم في قواعدها؛ ويبدأ المخصص حين يجب أن تكلّم التذكرة الطلبية والمخزون والإشعار الدائن والموصّل في التطبيق نفسه.',
      ] },
      { heading: 'قواعد خدمة ما بعد بيع تصمد', body: [
        'ست قواعد تُكتب في الأسبوع الأول. **تذكرة لكل مشكلة** مربوطة بالهاتف والطلبية. **الأولوية تخرج من الشبكة** لا من الصوت أبداً. **أجلان لكل أولوية** يجريان ويتوقفان في انتظار الزبون ويصعّدان. **شخص مسمّى** لكل تذكرة وإعادة إسناد عند الغياب. **الإرجاع والإشعار الدائن مرتبطان بالطلبية** ويحرّكان المخزون. **سبب مرمَّز لكل تذكرة** وخمسة أرقام يوم الاثنين.',
        'وقاعدة منهج: الإغلاق ملك للزبون بالتأكيد أو للزمن بثلاثة أيام صمت؛ لا للموظف المتعجل لتقليص الطابور أبداً.',
      ] },
      { heading: 'ست شركات، والتذكرة التي كانت ناقصة', body: [
        'ست حالات مركَّبة من مشاريع نصادفها؛ الأسماء عامة والأرقام أمثلة.',
      ], list: [
        '**متجر أجهزة منزلية في الجزائر العاصمة، توصيل منزلي.** كانت الشكاوى تصل على ثلاثة أرقام WhatsApp ودفتر. البناء: تذكرة واحدة مربوطة بالهاتف، شبكة P1 إلى P3، زيارة التقني مسنَدة من التذكرة. توقفت المكالمات المتكررة للعطل نفسه في الشهر الأول؛ والتوصيل يتبع [دليل منصة التوصيل](' + L.livraison + ').',
        '**موزع قطع في وهران، ثلاثمائة تاجر تجزئة.** لم تكن مرتجعات القطع تُطابَق أبداً مع الإشعارات الدائنة. البناء: إرجاع مرتبط بالتذكرة والطلبية، استلام في المستودع يصدر الإشعار الدائن ويحدّث المخزون.',
        '**مؤسس في مرسيليا، متجر إلكتروني في الجزائر.** كان يكتشف الشكاوى في التقييمات العامة. البناء: فضاء زبون بحالة التذكرة، دخول برمز وفق [دليل الدخول بالرمز](' + L.otp + ')، خمسة أرقام تُقرأ من مرسيليا؛ والتسيير عن بعد يتبع [دليل التجارة من فرنسا](' + L.commerce + ').',
        '**مركّب طاقة شمسية في سطيف.** كانت الأعطال بعد التركيب تُعالَج بالهاتف بلا أثر. البناء: تذكرة لكل تركيب، شبكة بإلحاح عالٍ حين يكون الإنتاج صفراً، صور الزبون مرفقة؛ والمهنة موصوفة في [دليل مركّب الطاقة الشمسية](' + L.solaire + ').',
        '**سوق إلكتروني في قسنطينة، بائعون خارجيون.** كان المشتري يشتكي للمنصة التي تحوّل إلى البائع بالبريد. البناء: تذكرة مشتركة بين المنصة والبائع، أجل البائع مراقَب، تصعيد إلى المنصة؛ والنموذج موصوف في [دليل السوق الإلكتروني](' + L.marketplace + ').',
        '**ناقل في عنابة، طرود متضررة.** السبب نفسه، يُرى طرداً طرداً. البناء: سبب مرمَّز، سبب أول للأسبوع، تنبيه لمسؤول التغليف حين يتجاوز عتبة.',
      ] },
      { heading: 'تقويم 2027', body: [
        'ستة أسابيع لشركة تتلقى شكاوى من كل القنوات أصلاً؛ والأسبوع الأول يمر بلا كود.',
      ], visual: 'calendrier', after: [
        '**الأسبوع 1، القواعد**: شبكة الأثر على الإلحاح، آجال لكل أولوية، حالات، قائمة الأسباب، من يُصعَّد إليه، قواعد الإغلاق والإرجاع؛ يوقّعها المسيّر. **الأسبوع 2، المداخل والتذكرة الواحدة**: WhatsApp ومكالمة وبريد وفضاء زبون مربوطة بالزبون والطلبية، تذكرة لكل مشكلة، مرفقات. **الأسبوع 3، الأولوية والآجال والإسناد**: شبكة مطبَّقة، آجال تجري وتتوقف، إسناد اسمي، تصعيد آلي، تذكيرات.',
        '**الأسبوع 4، المرتجعات والإشعارات الدائنة**: إرجاع مرتبط بالتذكرة والطلبية، استلام في المستودع، إشعار دائن صادر، مخزون محدَّث، تبديل. **الأسبوع 5، فضاء الزبون واللوحة**: يقرأ الزبون الحالة ويرد من فضائه أو WhatsApp، واللوحة حسب الحالات للفريق. **الأسبوع 6، القياس**: خمسة أرقام أسبوعياً، أسباب مرمَّزة، سبب أول، مراجعة الاثنين مع المسيّر بروح التقرير الموصوف في [دليل المراقبة](' + L.observ + '). وكل أسبوع ينتهي بعرض وفق [دليل التسليم دون كسر](' + L.livrer + ').',
      ] },
      { heading: 'ما يُفشل خدمة ما بعد البيع', body: [
        'خمسة أسباب رأيناها في تطبيقات نستلمها. **صندوق الوارد طابوراً**: لا زبون ولا طلبية ولا أولوية. **التذكرة لكل رسالة**: ثلاث تذاكر لعطل واحد وثلاثة ردود متناقضة. **الأولوية للصوت**: من يصرخ يتقدم. **الأجل الذي لا يجري**: تاريخ يُنظر إليه أحياناً لا تنبيه أبداً. **الإغلاق من الموظف**: يتقلص الطابور ويعاود الزبائن الاتصال.',
        'وسبب منهجي: عدم ترميز السبب لأنه عشر ثوانٍ إضافية لكل تذكرة؛ وبدونه تعالج الخدمة الأعراض طوال السنة ولا تغيّر التغليف أبداً.',
      ] },
      { heading: 'أسئلة شائعة', body: [
        'الأسئلة التي يطرحها المسيّرون والمؤسسون حين يصفون لنا خدمة ما بعد بيع تفيض.',
      ], faq: [
        { q: 'كيف نمنع زبوناً من فتح ثلاث شكاوى للعطل نفسه؟', a: 'بربط كل مدخل، WhatsApp ومكالمة وبريد وفضاء زبون، بالزبون عبر الهاتف وبالطلبية، وبتذكرة واحدة لكل مشكلة. وحين يعاود الزبون الاتصال يقود التطبيق إلى التذكرة الموجودة ويقرأ الموظف الحالة بدل التدوين مرة ثانية. ولا يضطر الزبون إلى التكرار أبداً.' },
        { q: 'كيف نقرر أي شكوى نعالج أولاً؟', a: 'بشبكة أثر على إلحاح يكتبها المسيّر: الأثر يقول إن كان المنتج صالحاً للاستعمال، والإلحاح يقول ما يحدث إن انتظرنا. الخلية تعطي الأولوية، P1 إلى P3، والأولوية تحدد الآجال. ولا تأتي الأولوية من الصوت على الهاتف أبداً.' },
        { q: 'ما فائدة آجال الرد والحل؟', a: 'كي لا تُنسى تذكرة: يجري الأجل من الفتح ويتوقف أثناء انتظار الزبون ويطلق تصعيداً آلياً إلى المسؤول عند تجاوزه. ووسيطات الأسبوع تقول إن كان الفريق يحترم آجاله؛ والآجال نفسها يحددها المسيّر لكل أولوية.' },
        { q: 'كيف نسيّر المرتجعات والإشعارات الدائنة؟', a: 'الإرجاع مرتبط بالتذكرة والطلبية؛ واستلامه في المستودع يصدر الإشعار الدائن ويحدّث المخزون، فلا يختفي منتج استرده الموصّل بين الشاحنة والمستودع. والتبديل يتبع الآلية نفسها بتوصيل جديد.' },
        { q: 'هل يستطيع الزبون متابعة شكواه دون اتصال؟', a: 'نعم، من فضاء زبون يدخله برمز ويقرأ فيه حالة التذكرة ويجيب عن الطلبات، صورة مثلاً، ويؤكد الحل. وتصله المعلومات نفسها عبر WhatsApp. والهدف ألا يبقى للمكالمة الثانية سبب.' },
        { q: 'لماذا نرمّز سبباً على كل تذكرة؟', a: 'لأنه ما يحوّل شكاوى معالَجة واحدة واحدة إلى سبب أول للأسبوع: تسليم متضرر، عيب منتج، خطأ تحضير. وحين يتجاوز سبب عتبة يُنبَّه المسيّر والمورد، ونتدخل على التغليف أو الناقل بدل العرض.' },
        { q: 'كم من الوقت لإقامة ذلك؟', a: 'ستة أسابيع في التقويم النموذجي: واحد لكتابة الشبكة والآجال والأسباب، وواحد للمداخل والتذكرة الواحدة، وواحد للأولوية والآجال والإسناد، وواحد للمرتجعات والإشعارات الدائنة، وواحد لفضاء الزبون واللوحة، وواحد للقياس. وتتوقف المدة على عدد القنوات ووجود ملف زبائن واحد.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'ثلاثة ورودات لا تصنع ثلاث تذاكر: الهاتف يربط بالزبون نفسه، والطلبية بالمنتج نفسه، والمكالمة الثانية تقرأ الحالة بدل فتح ملف جديد.' },
      { after: 3, text: 'الأولوية ليست مزاج الزبون على الهاتف: إنها خلية في شبكة مكتوبة، وتحدد أجلين يراقبهما التطبيق.' },
    ],
    cta: { eyebrow: 'أرسلوا لنا شهراً من الشكاوى، نقيس التكرارات والتأخرات', title: 'مسيّر في الجزائر أو مؤسس في فرنسا: نبني خدمة ما بعد بيع لا توجد فيها الشكوى إلا مرة وتمر بالترتيب المهم', body: 'تبني Symloop وتستلم تطبيقات في الإنتاج للشركات في الجزائر والمؤسسين المقيمين في فرنسا: مداخل WhatsApp ومكالمة وبريد وفضاء زبون مربوطة بالزبون والطلبية، تذكرة واحدة لكل مشكلة، شبكة أثر على إلحاح وآجال لكل أولوية، إسناد اسمي، تصعيد آلي، تذكيرات، مرتجعات وإشعارات دائنة مرتبطة بالطلبية والمخزون، فضاء زبون بحالة وردود، لوحة حسب الحالات، أسباب مرمَّزة، خمسة أرقام أسبوعياً. الكود والقواعد في مستودعكم؛ وعرض كل أسبوعين.' },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.client, kind: '2027', name: 'زبون واحد لا ثلاثة: ملف زبائن واحد' },
      { href: L.whatsapp, kind: '2027', name: 'وكيل WhatsApp: نافذة 24 ساعة، قوالب، تحويل لإنسان' },
      { href: L.photos, kind: '2027', name: 'صور تصمد: التقاط، بصمة، وصول موقَّع' },
      { href: L.devis, kind: '2027', name: 'من عرض السعر إلى الفاتورة: إشعارات دائنة، وثائق مجمَّدة' },
    ] },
  },
};

const KEYWORDS = "gestion des réclamations application algérie 2027, service après-vente application sur mesure, ticket client unique multicanal whatsapp, priorité réclamation impact urgence, délai de réponse réclamation escalade, retours et avoirs application, espace client suivi réclamation, logiciel sav algérie 2027, le client appelle plusieurs fois réclamation, file de tickets service client, taux de réclamation pour 100 commandes, cause des réclamations livraison endommagée, after-sales complaints ticketing app algeria 2027, single ticket multichannel priority sla escalation returns credit notes, إدارة الشكاوى التطبيق الجزائر 2027, خدمة ما بعد البيع تذكرة واحدة, المرتجعات والإشعارات الدائنة";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
