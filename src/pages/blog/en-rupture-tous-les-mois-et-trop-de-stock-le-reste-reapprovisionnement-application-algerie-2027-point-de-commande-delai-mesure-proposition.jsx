import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/en-rupture-tous-les-mois-et-trop-de-stock-le-reste-reapprovisionnement-application-algerie-2027-point-de-commande-delai-mesure-proposition.mjs';

const SLUG = 'en-rupture-tous-les-mois-et-trop-de-stock-le-reste-reapprovisionnement-application-algerie-2027-point-de-commande-delai-mesure-proposition';
const FIGURES = ['point', 'cycle', 'situations', 'proposition', 'couches', 'calendrier'];
const DATE = '2026-11-10';

const L = {
  stock: '/blog/stock-faux-dans-l-application-algerie-2027-journal-de-mouvements-reservations-inventaire-tournant-multi-depots-hors-ligne-ce-qu-on-construit/',
  lots: '/blog/le-lot-qui-expire-en-premier-est-au-fond-tracabilite-par-lot-application-algerie-2027-reception-fefo-quarantaine-rappel-ce-qu-on-construit/',
  catalogue: '/blog/le-meme-produit-existe-en-douze-lignes-fiche-produit-application-algerie-2027-variantes-conditionnements-codes-barres-prix-ce-qu-on-construit/',
  excel: '/blog/importer-un-fichier-excel-chaque-semaine-sans-casser-application-algerie-2027-correspondance-validation-essai-a-blanc-retour-arriere/',
  jobs: '/blog/rapport-de-nuit-jamais-parti-taches-en-arriere-plan-application-algerie-2027-file-de-travaux-reprises-idempotence-planification-echecs/',
  notif: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  ia: '/blog/lire-factures-bons-de-commande-pieces-par-ia-algerie-2027-photo-en-champs-verifies-schema-controles-validation-humaine-erp/',
  agent: '/blog/agent-ia-back-office-erp-algerie-2027-outils-lecture-ecriture-plafonds-approbation-idempotence-journal-ce-que-l-agent-a-le-droit-de-faire/',
  b2b: '/blog/portail-de-commande-b2b-grossiste-algerie-2027-detaillants-commandent-eux-memes-prix-credit-heure-limite/',
  pharmacie: '/blog/pharmacie-trois-officines-stock-excel-dates-de-peremption-algerie-2026/',
  commerce: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/',
  integrer: '/blog/integrer-logiciel-existant-api-algerie-2027-comptabilite-erp-caisse-webhooks-exports-sans-api/',
  service: '/services/software-engineering/',
};

const CONTENT = {
  fr: {
    kind: 'Réapprovisionnement · Achats · Fournisseurs · 2027', title: "« En rupture tous les mois, et trop de stock le reste » : ce qu'on construit dans une application en 2027 pour commander au bon moment, consommation lue, délai mesuré, point de commande, proposition par fournisseur",
    dek: "« L'huile qui tourne le plus manque dix jours par mois. Le vinaigre, on en a pour six mois. Le fournisseur promet cinq jours et livre en douze, et on calcule sur cinq. Le gérant commande de tête, le lundi, en regardant les étagères, et personne ne sait ce qui est déjà en commande. » Commander au bon moment n'est pas une question de mémoire, c'est une construction : la consommation lue dans le journal des mouvements, le délai mesuré sur les réceptions passées, un point de commande par produit et par dépôt comparé chaque nuit au disponible, une proposition groupée par fournisseur avec arrondi, minimum et budget, une décision ligne par ligne, et une réception qui corrige le délai de la prochaine proposition.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Réapprovisionnement', 'Point de commande', 'Délai fournisseur', 'Proposition d’achat', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** La **consommation** est lue dans le journal des mouvements, par produit et par dépôt, sur une fenêtre écrite, les semaines récentes pesant plus. Le **délai fournisseur** est mesuré, commande à réception, en médiane sur les dernières réceptions, jamais la promesse du fournisseur. Le **point de commande** est la consommation pendant ce délai plus un **stock de sécurité** fixé par le gérant, selon la formule courante ; il est comparé chaque nuit au **disponible**, stock moins réservé plus en commande. Quand le disponible passe sous le point, une **quantité** est proposée pour couvrir une période écrite, arrondie au conditionnement du fournisseur. La **proposition** est groupée par fournisseur, avec son minimum de commande, son délai, le total et le budget de la semaine ; le gérant décide ligne par ligne, et chaque écart est noté avec sa raison. Le **bon de commande** est numéroté, envoyé, et crée une réception attendue ; la réception réelle, scannée, nourrit le délai mesuré de la proposition suivante. Les événements, promotion, fermeture, saison, sont saisis et ajustent la consommation prévue.",
      "Ce guide s'adresse au grossiste et au distributeur qui commandent à dix fournisseurs chaque semaine, au commerçant à plusieurs points de vente, à la pharmacie ou à la parapharmacie qui ne doit jamais manquer ses produits de fond, et au fondateur installé en France qui veut voir le lundi ce qui part en commande et pourquoi. Il ne redit pas comment on tient un stock juste, décrit dans [le guide sur le stock](" + L.stock + "), ni comment on réceptionne par lot, décrit dans [le guide sur la traçabilité](" + L.lots + ") ; il décrit ce qui lit ces deux journaux pour décider quoi commander, et il prolonge [notre page sur l'ingénierie logicielle](" + L.service + ").",
    ],
    sections: [
      { heading: 'Quand commander, et combien : un produit, un dépôt', body: [
        "La figure suit un produit à un dépôt. Tout ce qu'elle lit existe déjà : les sorties du journal et les réceptions passées.",
      ], visual: 'point', after: [
        "**La consommation.** Huit semaines de sorties, entre 110 et 160 unités, lues dans le journal de [le guide sur le stock](" + L.stock + ") ; la moyenne, pondérée vers les semaines récentes, donne environ 19 unités par jour. Les sorties exceptionnelles, un client qui vide le rayon, sont repérées et peuvent être exclues par le gérant. **Le délai.** Dix jours, médiane des six dernières réceptions de ce fournisseur, de la date d'envoi du bon à la date du scan de réception ; la promesse du fournisseur, cinq jours, n'entre pas dans le calcul. **Le point de commande.** Consommation pendant le délai, 193, plus un stock de sécurité de trois jours, 60, soit 253 ; la sécurité protège contre les variations de demande, et sa taille est une décision du gérant, relevée à cinq jours avant l'été.",
        "**La date.** Le disponible, 420 en stock moins 60 réservés, soit 360, descend de 19 par jour et croise le point le 16 novembre : c'est ce jour-là que la ligne apparaît dans la proposition, pas quand l'étagère est vide. **La quantité.** Cible de couverture : quatre semaines au-delà du point, 793 ; moins le disponible, 433 ; arrondi au carton de quatre, 436. Le gérant peut la changer, et l'application recalcule la date de rupture et la couverture. Produit, ventes, délais et seuils sont un exemple construit ; les conditionnements viennent de [le guide sur la fiche produit](" + L.catalogue + ").",
      ] },
      { heading: 'Le cycle de réapprovisionnement, en six temps', body: [
        "Le calcul est l'étape accentuée ; les deux premières lisent, les trois dernières décident, envoient et apprennent.",
      ], visual: 'cycle', after: [
        "**Lire la consommation** et **mesurer le délai** : deux lectures de données existantes, sans saisie. **Calculer le point** : chaque nuit, par une tâche de [le guide sur les tâches en arrière-plan](" + L.jobs + "), pour chaque produit suivi et chaque dépôt ; le disponible compte le réservé et l'en-commande, pour qu'un produit déjà commandé ne soit pas commandé deux fois. **Proposer** : les lignes sous le point sont groupées par fournisseur, avec la quantité, l'arrondi, le minimum de commande, le total et le budget.",
        "**Décider et envoyer** : le gérant accepte, réduit, retire ou ajoute, ligne par ligne, et chaque écart avec la proposition est noté avec sa raison ; le bon de commande est numéroté et envoyé par e-mail et WhatsApp, selon [le guide sur les notifications](" + L.notif + ") ; qui peut envoyer au-delà du budget suit [le guide sur les rôles](" + L.roles + "). **Recevoir et apprendre** : une réception attendue est créée, le scan de réception la rapproche, l'écart est noté, et le délai réel de cette réception entre dans la médiane de la prochaine proposition. La facture du fournisseur se lit ensuite par [le guide sur la lecture de factures par IA](" + L.ia + ") et se rapproche du bon de commande.",
      ] },
      { heading: 'Six situations réelles, et ce que l’application fait', body: [
        "Chaque ligne est une phrase entendue dans un dépôt, et la réponse est une mesure, pas une meilleure mémoire.",
      ], visual: 'situations', after: [
        "**Rupture du produit qui tourne le plus** : le point de commande est comparé au disponible chaque nuit, et la proposition arrive avant la rupture, pas après. **Trop de stock du produit qui tourne peu** : la quantité est calculée par couverture écrite, et la couverture après livraison est affichée par ligne ; six mois sautent aux yeux. **Le fournisseur promet 5 jours, livre en 12** : le délai est mesuré sur les réceptions, en médiane par fournisseur, et c'est lui qui entre dans le point.",
        "**Le minimum de commande n'est pas atteint** : le minimum est sur la fiche fournisseur, et l'application propose les lignes les plus proches de leur point pour l'atteindre, plutôt que n'importe quoi. **Promotion la semaine prochaine** : l'événement est saisi par le gérant, et la consommation prévue de la période est ajustée ; le même mécanisme sert aux fermetures et à la saison. **Personne ne sait ce qui est en commande** : l'en-commande compte dans le disponible, et la réception attendue est visible avec sa date. Le portail de [le guide sur la commande B2B](" + L.b2b + ") lit le même disponible pour promettre une livraison.",
      ] },
      { heading: 'La proposition du lundi pour un fournisseur', body: [
        "La figure montre l'écran que le gérant ouvre le lundi : une proposition par fournisseur, une décision par ligne.",
      ], visual: 'proposition', after: [
        "Six produits du même fournisseur. Pour chacun : le disponible, le point, la quantité proposée, l'arrondi au conditionnement, la couverture après livraison, le montant, et la décision. Quatre lignes sont acceptées ; la margarine est réduite de moitié parce qu'une promotion se termine le 20, et le gérant écrit pourquoi ; le vinaigre est retiré parce que le produit est en fin de vie dans la fiche produit, et l'application le signale ; l'huile de 1 litre n'apparaît que pour information, elle est au-dessus de son point.",
        "Avant l'envoi, quatre vérifications : le minimum de commande du fournisseur, écrit sur sa fiche, est atteint ; le total après décisions ; la livraison attendue, calculée avec le délai médian ; la part du budget achats de la semaine, plafond fixé par le gérant. Le bon de commande est envoyé à 9 h 12, numéroté, et une réception attendue est créée pour le 26 novembre ; un agent construit selon [le guide sur l'agent de back-office](" + L.agent + ") peut préparer la proposition et relancer le fournisseur sans confirmation, jamais envoyer un bon au-delà du budget. Quantités, montants et dates sont un exemple construit.",
      ] },
      { heading: 'Le réapprovisionnement, en cinq couches', body: [
        "La consommation et le délai sont la couche accentuée : ce sont des mesures, pas des souvenirs.",
      ], visual: 'couches', after: [
        "**Données.** Le journal des mouvements, les réservations, les commandes fournisseurs ouvertes, les réceptions datées, et la fiche fournisseur avec son délai mesuré, son minimum et ses conditionnements ; rien n'est saisi deux fois. **Consommation et délai.** Sorties par produit et dépôt sur une fenêtre écrite, récentes pondérées, exceptionnelles repérées ; délai médian par fournisseur sur les réceptions ; recalculés chaque nuit. **Règles.** Stock de sécurité, période de couverture, événements à venir, budget ; par catégorie ou par produit ; écrits par le gérant, changés sans développement.",
        "**Proposition.** Point comparé au disponible ; quantité, arrondi, minimum ; groupée par fournisseur ; décision ligne par ligne avec écart noté. **Commande et boucle.** Bon de commande envoyé, réception attendue, scan, écart, délai réel réinjecté ; ruptures, jours de couverture, surstock et écarts de délai par fournisseur dans [le tableau de bord du gérant](" + L.dashboard + ") ; les bons et réceptions partent vers la comptabilité par [le guide sur l'intégration](" + L.integrer + "). Les produits à date suivent en plus les règles de [le guide sur la traçabilité](" + L.lots + ") : on ne commande pas un lot court pour un client qui exige soixante jours.",
      ] },
      { heading: 'Automatiser le réapprovisionnement en 2027, en semaines', body: [
        "Sept semaines, la première sans code, et deux pour la proposition, parce que c'est l'écran que le gérant ouvre chaque lundi.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, règles** : quelles catégories sont suivies, quels stocks de sécurité, quelles périodes de couverture, quel budget, et les fiches fournisseurs avec minimum et conditionnements ; avec le gérant et l'acheteur. **Semaine 2, consommation et délai** : lecture du journal, fenêtre et pondération, délai médian par fournisseur calculé depuis les réceptions passées, comparé aux promesses pour que le gérant voie l'écart. **Semaines 3 et 4, proposition** : point de commande, disponible, quantité, arrondi, minimum, groupement par fournisseur, écran de décision avec écarts notés.",
        "**Semaine 5, commande et réception** : bon de commande numéroté et envoyé, réception attendue, scan, écarts, délai réel réinjecté. **Semaine 6, événements** : promotions, fermetures, saison, consommation prévue ajustée, fin de vie exclue. **Semaine 7, mesure** : ruptures, jours de couverture, surstock, écarts de délai par fournisseur, revue du lundi. Les anciens historiques de commandes, s'ils existent dans un fichier, se reprennent avec [le guide sur l'import](" + L.excel + ") pour mesurer le délai dès la deuxième semaine ; une pharmacie à plusieurs officines, comme dans [le guide sur la pharmacie](" + L.pharmacie + "), suit le même cycle avec un point par officine.",
      ], list: [
        "**Ce que le gérant voit** : le lundi, une proposition par fournisseur avec couverture, minimum, total et budget ; chaque jour, les lignes passées sous le point ; chaque semaine, ruptures et surstocks.",
        "**Ce que l'acheteur ne fait plus** : compter les étagères, deviner le délai, retaper un bon de commande, commander deux fois un produit déjà en commande.",
        "**Ce qui est mesuré** : ruptures par produit, jours de couverture, surstock en jours, délai réel par fournisseur contre promis, écarts de réception.",
      ], faq: [
        { q: "D'où vient le point de commande ?", a: "De la formule courante : consommation pendant le délai fournisseur, plus un stock de sécurité. La consommation est lue dans le journal des mouvements, le délai est mesuré sur les réceptions passées, et la sécurité est une décision du gérant, par catégorie ou par produit." },
        { q: "Pourquoi ne pas prendre le délai promis par le fournisseur ?", a: "Parce qu'il est souvent faux, et qu'un point de commande calculé sur un délai trop court produit une rupture à chaque fois. Le délai mesuré est la médiane des dernières réceptions, de l'envoi du bon au scan de réception ; le gérant voit l'écart avec la promesse, fournisseur par fournisseur." },
        { q: "Le gérant garde-t-il la main ?", a: "Oui : il décide ligne par ligne, accepte, réduit, retire ou ajoute, et chaque écart est noté avec sa raison. Les stocks de sécurité, les couvertures, le budget et les événements sont les siens ; l'application calcule et propose, elle n'envoie pas sans lui." },
        { q: "Comment gérer les promotions et la saison ?", a: "Par des événements saisis : une promotion, une fermeture, une saison ajustent la consommation prévue de leur période, et la proposition en tient compte. Une sortie exceptionnelle passée peut être exclue du calcul de la moyenne." },
        { q: "Et le minimum de commande du fournisseur ?", a: "Il est écrit sur la fiche fournisseur avec les conditionnements. Si la proposition ne l'atteint pas, l'application propose les lignes les plus proches de leur point pour le compléter, et le gérant choisit ; le total et le budget sont vérifiés avant l'envoi." },
        { q: "Faut-il un historique long pour commencer ?", a: "Quelques semaines de journal suffisent pour la consommation ; pour le délai, les anciennes commandes et réceptions, si elles existent dans un fichier, se reprennent pour mesurer dès la deuxième semaine. Sans historique, le gérant saisit un délai de départ, remplacé par la mesure dès les premières réceptions." },
        { q: "Combien de temps pour mettre ça en place ?", a: "Sept semaines dans le calendrier type, la première sans code et deux pour la proposition. Une entreprise qui a déjà le journal des mouvements et les réceptions scannées prend moins ; une qui commande de tête et reçoit sans scan prend les sept, parce que les données viennent d'abord." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Le délai est mesuré sur les réceptions passées, pas promis par le fournisseur ; la consommation est lue dans le journal, pas devinée." },
      { after: 3, text: "La proposition est calculée chaque nuit et groupée par fournisseur ; le gérant décide ligne par ligne, et chaque écart est noté avec sa raison." },
    ],
    cta: { eyebrow: 'Envoyez-nous trois mois de commandes et de réceptions, nous montrons le délai réel de chaque fournisseur', title: "Grossiste, distributeur, pharmacie ou fondateur en France : nous construisons la consommation lue, le délai mesuré, le point de commande et la proposition par fournisseur que le gérant décide le lundi", body: "Un calcul à blanc sur vos propres mouvements, les règles de sécurité et de couverture écrites avec vous, et un calendrier en semaines. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.stock, kind: '2027', name: 'Stock faux : journal de mouvements, réservations, inventaire tournant' },
      { href: L.lots, kind: '2027', name: 'Le lot qui expire en premier : traçabilité, réception, rappel' },
      { href: L.catalogue, kind: '2027', name: 'Le même produit en douze lignes : fiche produit, conditionnements' },
      { href: L.b2b, kind: '2027', name: 'Portail de commande B2B : prix, crédit, heure limite' },
    ] },
  },
  en: {
    kind: 'Replenishment · Purchasing · Suppliers · 2027', title: "“Out of stock every month, and too much stock the rest”: what gets built in an application in 2027 to order at the right time, consumption read, lead time measured, reorder point, proposal per supplier",
    dek: "“The oil that sells most is missing ten days a month. Vinegar, we have six months of it. The supplier promises five days and delivers in twelve, and we compute on five. The manager orders from memory, on Monday, looking at the shelves, and nobody knows what is already on order.” Ordering at the right time is not a matter of memory, it is a construction: consumption read from the movement ledger, lead time measured on past receptions, a reorder point per product and depot compared every night with available stock, a proposal grouped by supplier with rounding, minimum and budget, a decision line by line, and a reception that corrects the lead time of the next proposal.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Replenishment', 'Reorder point', 'Supplier lead time', 'Purchase proposal', 'Algeria 2027'],
    intro: [
      "**Short answer.** **Consumption** is read from the movement ledger, per product and depot, over a written window, recent weeks weighing more. The **supplier lead time** is measured, order to reception, as a median over the last receptions, never the supplier’s promise. The **reorder point** is consumption during that lead time plus a **safety stock** set by the manager, following the common formula; it is compared every night with **available**, stock minus reserved plus on order. When available drops below the point, a **quantity** is proposed to cover a written period, rounded to the supplier’s packaging. The **proposal** is grouped by supplier, with its minimum order, its lead time, the total and the week’s budget; the manager decides line by line, and every deviation is recorded with its reason. The **purchase order** is numbered, sent, and creates an expected reception; the real reception, scanned, feeds the measured lead time of the next proposal. Events, promotion, closure, season, are entered and adjust expected consumption.",
      "This guide is for the wholesaler and distributor ordering from ten suppliers every week, the shopkeeper with several outlets, the pharmacy or parapharmacy that must never run out of its staple products, and the founder based in France who wants to see on Monday what goes on order and why. It does not repeat how to keep stock right, described in [the stock guide](" + L.stock + "), nor how to receive by lot, described in [the traceability guide](" + L.lots + "); it describes what reads those two ledgers to decide what to order, and it extends [our software engineering page](" + L.service + ").",
    ],
    sections: [
      { heading: 'When to order, and how much: one product, one depot', body: [
        "The figure follows one product at one depot. Everything it reads already exists: ledger issues and past receptions.",
      ], visual: 'point', after: [
        "**Consumption.** Eight weeks of issues, between 110 and 160 units, read from the ledger of [the stock guide](" + L.stock + "); the average, weighted towards recent weeks, gives about 19 units a day. Exceptional issues, a customer emptying the shelf, are flagged and can be excluded by the manager. **Lead time.** Ten days, the median of this supplier’s last six receptions, from the date the order was sent to the date of the reception scan; the supplier’s promise, five days, does not enter the computation. **Reorder point.** Consumption during the lead time, 193, plus a three-day safety stock, 60, that is 253; safety protects against demand fluctuations, and its size is the manager’s decision, raised to five days before summer.",
        "**The date.** Available, 420 in stock minus 60 reserved, that is 360, falls by 19 a day and crosses the point on 16 November: that is the day the line appears in the proposal, not when the shelf is empty. **The quantity.** Cover target: four weeks beyond the point, 793; minus available, 433; rounded to the case of four, 436. The manager can change it, and the application recomputes the stock-out date and the cover. Product, sales, lead times and thresholds are a constructed example; packagings come from [the product record guide](" + L.catalogue + ").",
      ] },
      { heading: 'The replenishment cycle, in six beats', body: [
        "The computation is the accented beat; the first two read, the last three decide, send and learn.",
      ], visual: 'cycle', after: [
        "**Read consumption** and **measure lead time**: two readings of existing data, no entry. **Compute the point**: every night, by a job of [the background jobs guide](" + L.jobs + "), for every tracked product and depot; available counts reserved and on order, so that a product already ordered is not ordered twice. **Propose**: lines below the point are grouped by supplier, with quantity, rounding, minimum order, total and budget.",
        "**Decide and send**: the manager accepts, cuts, removes or adds, line by line, and every deviation from the proposal is recorded with its reason; the purchase order is numbered and sent by e-mail and WhatsApp, following [the notifications guide](" + L.notif + "); who may send beyond the budget follows [the roles guide](" + L.roles + "). **Receive and learn**: an expected reception is created, the reception scan matches it, the gap is recorded, and this reception’s real lead time enters the median of the next proposal. The supplier’s invoice is then read through [the AI invoice reading guide](" + L.ia + ") and matched to the purchase order.",
      ] },
      { heading: 'Six real situations, and what the application does', body: [
        "Every row is a sentence heard in a warehouse, and the answer is a measure, not a better memory.",
      ], visual: 'situations', after: [
        "**Out of stock on the fastest mover**: the reorder point is compared with available every night, and the proposal arrives before the stock-out, not after. **Too much stock on the slow mover**: the quantity is computed by written cover, and cover after delivery is shown per line; six months stand out. **The supplier promises 5 days, delivers in 12**: lead time is measured on receptions, as a median per supplier, and that is what enters the point.",
        "**Minimum order not reached**: the minimum is on the supplier record, and the application proposes the lines closest to their point to reach it, rather than anything. **Promotion next week**: the event is entered by the manager, and expected consumption for the period is adjusted; the same mechanism serves closures and season. **Nobody knows what is on order**: on-order counts in available, and the expected reception is visible with its date. The portal of [the B2B ordering guide](" + L.b2b + ") reads the same available to promise a delivery.",
      ] },
      { heading: 'Monday’s proposal for one supplier', body: [
        "The figure shows the screen the manager opens on Monday: one proposal per supplier, one decision per line.",
      ], visual: 'proposition', after: [
        "Six products from the same supplier. For each: available, point, proposed quantity, packaging rounding, cover after delivery, amount, and the decision. Four lines are accepted; margarine is cut by half because a promotion ends on the 20th, and the manager writes why; vinegar is removed because the product is end of life in the product record, and the application flags it; 1-litre oil appears for information only, it is above its point.",
        "Before sending, four checks: the supplier’s minimum order, written on its record, is met; the total after decisions; the expected delivery, computed with the median lead time; the share of the week’s purchasing budget, a cap set by the manager. The purchase order is sent at 9:12, numbered, and an expected reception is created for 26 November; an agent built following [the back-office agent guide](" + L.agent + ") may prepare the proposal and chase the supplier without confirmation, never send an order beyond the budget. Quantities, amounts and dates are a constructed example.",
      ] },
      { heading: 'Replenishment, in five layers', body: [
        "Consumption and lead time are the accented layer: they are measures, not memories.",
      ], visual: 'couches', after: [
        "**Data.** The movement ledger, reservations, open supplier orders, dated receptions, and the supplier record with its measured lead time, minimum and packagings; nothing is entered twice. **Consumption and lead time.** Issues per product and depot over a written window, recent ones weighted, exceptional ones flagged; median lead time per supplier on receptions; recomputed every night. **Rules.** Safety stock, cover period, upcoming events, budget; per category or per product; written by the manager, changed without development.",
        "**Proposal.** Point compared with available; quantity, rounding, minimum; grouped by supplier; decision line by line with recorded deviation. **Order and loop.** Purchase order sent, expected reception, scan, gap, real lead time fed back; stock-outs, days of cover, overstock and lead-time gaps per supplier in [the manager’s dashboard](" + L.dashboard + "); orders and receptions go to accounting through [the integration guide](" + L.integrer + "). Dated products also follow the rules of [the traceability guide](" + L.lots + "): no short lot is ordered for a customer who requires sixty days.",
      ] },
      { heading: 'Automating replenishment in 2027, in weeks', body: [
        "Seven weeks, the first without code, and two for the proposal, because it is the screen the manager opens every Monday.",
      ], visual: 'calendrier', after: [
        "**Week 1, rules**: which categories are tracked, which safety stocks, which cover periods, which budget, and supplier records with minimum and packagings; with the manager and the buyer. **Week 2, consumption and lead time**: ledger reading, window and weighting, median lead time per supplier computed from past receptions, compared with promises so the manager sees the gap. **Weeks 3 and 4, proposal**: reorder point, available, quantity, rounding, minimum, grouping by supplier, decision screen with recorded deviations.",
        "**Week 5, order and reception**: numbered purchase order sent, expected reception, scan, gaps, real lead time fed back. **Week 6, events**: promotions, closures, season, expected consumption adjusted, end of life excluded. **Week 7, measurement**: stock-outs, days of cover, overstock, lead-time gaps per supplier, Monday review. Old order histories, if they exist in a file, are taken over with [the import guide](" + L.excel + ") to measure lead time from the second week; a pharmacy with several outlets, as in [the pharmacy guide](" + L.pharmacie + "), follows the same cycle with one point per outlet.",
      ], list: [
        "**What the manager sees**: on Monday, one proposal per supplier with cover, minimum, total and budget; every day, lines dropped below the point; every week, stock-outs and overstock.",
        "**What the buyer no longer does**: count shelves, guess the lead time, retype a purchase order, order twice a product already on order.",
        "**What is measured**: stock-outs per product, days of cover, overstock in days, real lead time per supplier against promised, reception gaps.",
      ], faq: [
        { q: "Where does the reorder point come from?", a: "From the common formula: consumption during the supplier lead time, plus a safety stock. Consumption is read from the movement ledger, lead time is measured on past receptions, and safety is the manager’s decision, per category or per product." },
        { q: "Why not take the lead time promised by the supplier?", a: "Because it is often wrong, and a reorder point computed on too short a lead time produces a stock-out every time. The measured lead time is the median of the last receptions, from sending the order to the reception scan; the manager sees the gap with the promise, supplier by supplier." },
        { q: "Does the manager keep control?", a: "Yes: they decide line by line, accept, cut, remove or add, and every deviation is recorded with its reason. Safety stocks, covers, budget and events are theirs; the application computes and proposes, it does not send without them." },
        { q: "How are promotions and season handled?", a: "Through entered events: a promotion, a closure, a season adjust expected consumption for their period, and the proposal takes it into account. A past exceptional issue can be excluded from the average." },
        { q: "And the supplier’s minimum order?", a: "It is written on the supplier record with the packagings. If the proposal does not reach it, the application proposes the lines closest to their point to complete it, and the manager chooses; the total and the budget are checked before sending." },
        { q: "Is a long history needed to start?", a: "A few weeks of ledger are enough for consumption; for lead time, old orders and receptions, if they exist in a file, are taken over to measure from the second week. Without history, the manager enters a starting lead time, replaced by the measure from the first receptions." },
        { q: "How long to set this up?", a: "Seven weeks in the typical calendar, the first without code and two for the proposal. A company that already has the movement ledger and scanned receptions takes less; one that orders from memory and receives without scanning takes all seven, because data comes first." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "The lead time is measured on past receptions, not promised by the supplier; consumption is read from the ledger, not guessed." },
      { after: 3, text: "The proposal is computed every night and grouped by supplier; the manager decides line by line, and every deviation is recorded with its reason." },
    ],
    cta: { eyebrow: 'Send us three months of orders and receptions, we show each supplier’s real lead time', title: "Wholesaler, distributor, pharmacy or founder in France: we build consumption read, lead time measured, the reorder point and the proposal per supplier that the manager decides on Monday", body: "A dry-run computation on your own movements, safety and cover rules written with you, and a calendar in weeks. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Read next', items: [
      { href: L.stock, kind: '2027', name: 'Wrong stock: movement ledger, reservations, cycle counts' },
      { href: L.lots, kind: '2027', name: 'The lot that expires first: traceability, reception, recall' },
      { href: L.catalogue, kind: '2027', name: 'The same product in twelve lines: product record, packagings' },
      { href: L.b2b, kind: '2027', name: 'B2B ordering portal: prices, credit, cut-off time' },
    ] },
  },
  ar: {
    kind: 'إعادة التموين · مشتريات · موردون · 2027', title: "«نفاد كل شهر، وفائض بقية الوقت»: ما يُبنى في تطبيق سنة 2027 للطلب في الوقت الصحيح، استهلاك مقروء، مهلة مقيسة، نقطة إعادة طلب، اقتراح لكل مورد",
    dek: "«الزيت الأكثر بيعاً ينقص عشرة أيام في الشهر. والخل لدينا منه ما يكفي ستة أشهر. المورد يعد بخمسة أيام ويسلّم في اثني عشر، ونحن نحسب على خمسة. المسيّر يطلب من الذاكرة يوم الاثنين وهو ينظر إلى الرفوف، ولا أحد يعرف ما هو مطلوب أصلاً.» الطلب في الوقت الصحيح ليس مسألة ذاكرة بل بناء: استهلاك يُقرأ من سجل الحركات، مهلة تُقاس على الاستلامات الماضية، نقطة إعادة طلب لكل منتج ومستودع تُقارَن كل ليلة بالمتاح، اقتراح مجمَّع حسب المورد بتقريب وحد أدنى وميزانية، قرار سطراً سطراً، واستلام يصحّح مهلة الاقتراح التالي.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['إعادة التموين', 'نقطة إعادة الطلب', 'مهلة المورد', 'اقتراح الشراء', 'الجزائر 2027'],
    intro: [
      "**الجواب القصير.** يُقرأ **الاستهلاك** من سجل الحركات لكل منتج ومستودع على نافذة مكتوبة، والأسابيع الأخيرة أثقل وزناً. و**مهلة المورد** تُقاس من الطلب إلى الاستلام وسيطاً على آخر الاستلامات، لا وعد المورد أبداً. و**نقطة إعادة الطلب** الاستهلاك خلال تلك المهلة زائد **مخزون أمان** يحدده المسيّر، وفق الصيغة الشائعة؛ وتُقارَن كل ليلة **بالمتاح**، المخزون ناقص المحجوز زائد المطلوب. وحين ينزل المتاح تحت النقطة تُقترح **كمية** لتغطية فترة مكتوبة مقرَّبة إلى تعبئة المورد. و**الاقتراح** مجمَّع حسب المورد بحده الأدنى ومهلته والمجموع وميزانية الأسبوع؛ ويقرر المسيّر سطراً سطراً، وكل انحراف يُسجَّل بسببه. و**أمر الشراء** مرقَّم ومرسَل وينشئ استلاماً متوقعاً؛ والاستلام الحقيقي الممسوح يغذي المهلة المقيسة للاقتراح التالي. والأحداث، ترويج وإغلاق وموسم، تُدخَل وتعدّل الاستهلاك المتوقع.",
      "هذا الدليل موجَّه إلى تاجر الجملة والموزّع اللذين يطلبان من عشرة موردين كل أسبوع، وإلى التاجر بعدة نقاط بيع، وإلى الصيدلية أو شبه الصيدلية التي لا يجوز أن تنفد منتجاتها الأساسية، وإلى المؤسس المقيم في فرنسا الذي يريد أن يرى يوم الاثنين ما يُطلب ولماذا. وهو لا يعيد كيف يُحفظ مخزون صحيح، الموصوف في [دليل المخزون](" + L.stock + ")، ولا كيف يُستلم بالدفعة، الموصوف في [دليل التتبع](" + L.lots + ")؛ بل يصف ما يقرأ هذين السجلين ليقرر ما يُطلب، ويمدّ [صفحتنا عن هندسة البرمجيات](" + L.service + ").",
    ],
    sections: [
      { heading: 'متى نطلب، وكم: منتج واحد، مستودع واحد', body: [
        "يتتبع الشكل منتجاً واحداً في مستودع واحد. وكل ما يقرؤه موجود أصلاً: خروج السجل والاستلامات الماضية.",
      ], visual: 'point', after: [
        "**الاستهلاك.** ثمانية أسابيع من الخروج، بين 110 و160 وحدة، تُقرأ من سجل [دليل المخزون](" + L.stock + ")؛ والمتوسط، المرجَّح نحو الأسابيع الأخيرة، يعطي نحو 19 وحدة في اليوم. والخروج الاستثنائي، زبون يفرغ الرف، يُوسم ويستطيع المسيّر استبعاده. **المهلة.** عشرة أيام، وسيط آخر ستة استلامات من هذا المورد، من تاريخ إرسال الأمر إلى تاريخ مسح الاستلام؛ ووعد المورد، خمسة أيام، لا يدخل الحساب. **نقطة إعادة الطلب.** الاستهلاك خلال المهلة، 193، زائد مخزون أمان ثلاثة أيام، 60، أي 253؛ والأمان يحمي من تقلبات الطلب، وحجمه قرار المسيّر، يُرفع إلى خمسة أيام قبل الصيف.",
        "**التاريخ.** المتاح، 420 في المخزون ناقص 60 محجوزة أي 360، ينخفض 19 في اليوم ويتقاطع مع النقطة في 16 نوفمبر: في ذلك اليوم يظهر السطر في الاقتراح لا حين يفرغ الرف. **الكمية.** هدف التغطية: أربعة أسابيع بعد النقطة، 793؛ ناقص المتاح، 433؛ مقرَّبة إلى كرتون من أربع، 436. ويستطيع المسيّر تغييرها فيعيد التطبيق حساب تاريخ النفاد والتغطية. والمنتج والمبيعات والمهل والعتبات مثال مبني؛ والتعبئات من [دليل بطاقة المنتج](" + L.catalogue + ").",
      ] },
      { heading: 'دورة إعادة التموين، في ستة أوقات', body: [
        "الحساب هو الوقت المميز؛ والوقتان الأولان يقرآن، والثلاثة الأخيرة تقرر وترسل وتتعلم.",
      ], visual: 'cycle', after: [
        "**قراءة الاستهلاك** و**قياس المهلة**: قراءتان لبيانات موجودة بلا إدخال. **حساب النقطة**: كل ليلة، بمهمة من [دليل مهام الخلفية](" + L.jobs + ")، لكل منتج متتبَّع وكل مستودع؛ والمتاح يحسب المحجوز والمطلوب كي لا يُطلب منتج مطلوب أصلاً مرتين. **الاقتراح**: الأسطر تحت النقطة تُجمَّع حسب المورد بالكمية والتقريب والحد الأدنى والمجموع والميزانية.",
        "**القرار والإرسال**: يقبل المسيّر أو يخفّض أو يحذف أو يضيف سطراً سطراً، وكل انحراف عن الاقتراح يُسجَّل بسببه؛ وأمر الشراء مرقَّم ويُرسل بالبريد وWhatsApp وفق [دليل الإشعارات](" + L.notif + ")؛ ومن يستطيع الإرسال فوق الميزانية يتبع [دليل الأدوار](" + L.roles + "). **الاستلام والتعلم**: يُنشأ استلام متوقع، ومسح الاستلام يطابقه، ويُسجَّل الفارق، وتدخل المهلة الحقيقية لهذا الاستلام في وسيط الاقتراح التالي. ثم تُقرأ فاتورة المورد عبر [دليل قراءة الفواتير بالذكاء الاصطناعي](" + L.ia + ") وتُطابَق مع أمر الشراء.",
      ] },
      { heading: 'ست حالات حقيقية، وما يفعله التطبيق', body: [
        "كل سطر جملة سُمعت في مستودع، والجواب قياس لا ذاكرة أفضل.",
      ], visual: 'situations', after: [
        "**نفاد المنتج الأكثر دوراناً**: تُقارَن نقطة إعادة الطلب بالمتاح كل ليلة، ويصل الاقتراح قبل النفاد لا بعده. **فائض المنتج قليل الدوران**: تُحسب الكمية بتغطية مكتوبة، وتُعرض التغطية بعد التسليم لكل سطر؛ وستة أشهر تلفت النظر. **المورد يعد بـ 5 أيام ويسلّم في 12**: المهلة تُقاس على الاستلامات وسيطاً لكل مورد، وهي ما يدخل النقطة.",
        "**الحد الأدنى للطلب لم يُبلغ**: الحد الأدنى على بطاقة المورد، ويقترح التطبيق الأسطر الأقرب إلى نقطتها لبلوغه بدل أي شيء. **ترويج الأسبوع المقبل**: يدخل المسيّر الحدث فيُعدَّل الاستهلاك المتوقع للفترة؛ والآلية نفسها للإغلاقات والموسم. **لا أحد يعرف ما هو مطلوب**: المطلوب يُحسب في المتاح، والاستلام المتوقع مرئي بتاريخه. وبوابة [دليل الطلب بين الشركات](" + L.b2b + ") تقرأ المتاح نفسه لتعد بتسليم.",
      ] },
      { heading: 'اقتراح الاثنين لمورد واحد', body: [
        "يُظهر الشكل الشاشة التي يفتحها المسيّر يوم الاثنين: اقتراح لكل مورد، قرار لكل سطر.",
      ], visual: 'proposition', after: [
        "ستة منتجات من المورد نفسه. لكل منها: المتاح والنقطة والكمية المقترحة والتقريب إلى التعبئة والتغطية بعد التسليم والمبلغ والقرار. أربعة أسطر مقبولة؛ والمرغرين مخفَّض إلى النصف لأن ترويجاً ينتهي في 20، ويكتب المسيّر السبب؛ والخل محذوف لأن المنتج في نهاية عمره في بطاقة المنتج، والتطبيق ينبّه إلى ذلك؛ وزيت اللتر يظهر للعلم فقط لأنه فوق نقطته.",
        "وقبل الإرسال أربعة فحوص: الحد الأدنى لطلب المورد، المكتوب على بطاقته، محقَّق؛ المجموع بعد القرارات؛ التسليم المتوقع المحسوب بالمهلة الوسيطة؛ حصة ميزانية مشتريات الأسبوع، سقف يحدده المسيّر. ويُرسل أمر الشراء عند 09:12 مرقَّماً، ويُنشأ استلام متوقع لـ 26 نوفمبر؛ ووكيل مبني وفق [دليل وكيل المكتب الخلفي](" + L.agent + ") يستطيع تحضير الاقتراح ومتابعة المورد بلا تأكيد، ولا يرسل أمراً فوق الميزانية أبداً. والكميات والمبالغ والتواريخ مثال مبني.",
      ] },
      { heading: 'إعادة التموين، في خمس طبقات', body: [
        "الاستهلاك والمهلة هما الطبقة المميزة: قياسان لا ذكريات.",
      ], visual: 'couches', after: [
        "**البيانات.** سجل الحركات والحجوزات وطلبيات الموردين المفتوحة والاستلامات المؤرَّخة وبطاقة المورد بمهلته المقيسة وحده الأدنى وتعبئاته؛ ولا شيء يُدخَل مرتين. **الاستهلاك والمهلة.** خروج لكل منتج ومستودع على نافذة مكتوبة، الأخير مرجَّح والاستثنائي موسوم؛ مهلة وسيطة لكل مورد على الاستلامات؛ تُعاد كل ليلة. **القواعد.** مخزون أمان وفترة تغطية وأحداث قادمة وميزانية؛ لكل فئة أو منتج؛ يكتبها المسيّر وتتغير بلا تطوير.",
        "**الاقتراح.** النقطة مقارَنة بالمتاح؛ كمية وتقريب وحد أدنى؛ مجمَّع حسب المورد؛ قرار سطراً سطراً بانحراف مسجَّل. **الطلبية والحلقة.** أمر شراء مرسَل، استلام متوقع، مسح، فارق، مهلة حقيقية معادة؛ نفادات وأيام تغطية وفائض وفوارق مهلة لكل مورد في [لوحة المسيّر](" + L.dashboard + ")؛ والأوامر والاستلامات تذهب إلى المحاسبة عبر [دليل التكامل](" + L.integrer + "). والمنتجات ذات التاريخ تتبع أيضاً قواعد [دليل التتبع](" + L.lots + "): لا تُطلب دفعة قصيرة لزبون يشترط ستين يوماً.",
      ] },
      { heading: 'أتمتة إعادة التموين سنة 2027، بالأسابيع', body: [
        "سبعة أسابيع، الأول بلا كود، واثنان للاقتراح لأنه الشاشة التي يفتحها المسيّر كل اثنين.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، القواعد**: أي الفئات تُتتبَّع، وأي مخازن أمان، وأي فترات تغطية، وأي ميزانية، وبطاقات الموردين بالحد الأدنى والتعبئات؛ مع المسيّر والمشتري. **الأسبوع 2، الاستهلاك والمهلة**: قراءة السجل، نافذة وترجيح، مهلة وسيطة لكل مورد تُحسب من الاستلامات الماضية وتُقارَن بالوعود ليرى المسيّر الفارق. **الأسبوعان 3 و4، الاقتراح**: نقطة إعادة الطلب، المتاح، الكمية، التقريب، الحد الأدنى، التجميع حسب المورد، شاشة القرار بانحرافات مسجَّلة.",
        "**الأسبوع 5، الطلبية والاستلام**: أمر شراء مرقَّم مرسَل، استلام متوقع، مسح، فوارق، مهلة حقيقية معادة. **الأسبوع 6، الأحداث**: ترويجات وإغلاقات وموسم، استهلاك متوقع معدَّل، نهاية العمر مستبعَدة. **الأسبوع 7، القياس**: نفادات، أيام تغطية، فائض، فوارق المهلة لكل مورد، مراجعة الاثنين. وتاريخ الطلبيات القديم، إن وُجد في ملف، يُستلم بـ[دليل الاستيراد](" + L.excel + ") لقياس المهلة من الأسبوع الثاني؛ والصيدلية بعدة فروع، كما في [دليل الصيدلية](" + L.pharmacie + ")، تتبع الدورة نفسها بنقطة لكل فرع.",
      ], list: [
        "**ما يراه المسيّر**: يوم الاثنين اقتراح لكل مورد بتغطية وحد أدنى ومجموع وميزانية؛ كل يوم الأسطر التي نزلت تحت النقطة؛ كل أسبوع النفادات والفوائض.",
        "**ما لم يعد المشتري يفعله**: عدّ الرفوف، تخمين المهلة، إعادة كتابة أمر شراء، طلب منتج مطلوب أصلاً مرتين.",
        "**ما يُقاس**: نفادات لكل منتج، أيام تغطية، فائض بالأيام، مهلة حقيقية لكل مورد مقابل الموعودة، فوارق الاستلام.",
      ], faq: [
        { q: "من أين تأتي نقطة إعادة الطلب؟", a: "من الصيغة الشائعة: الاستهلاك خلال مهلة المورد زائد مخزون أمان. الاستهلاك يُقرأ من سجل الحركات، والمهلة تُقاس على الاستلامات الماضية، والأمان قرار المسيّر لكل فئة أو منتج." },
        { q: "لماذا لا نأخذ المهلة التي يعد بها المورد؟", a: "لأنها كثيراً ما تكون خاطئة، ونقطة محسوبة على مهلة أقصر من اللازم تنتج نفاداً كل مرة. والمهلة المقيسة وسيط آخر الاستلامات من إرسال الأمر إلى مسح الاستلام؛ ويرى المسيّر الفارق مع الوعد مورداً مورداً." },
        { q: "هل يحتفظ المسيّر بالقرار؟", a: "نعم: يقرر سطراً سطراً، يقبل أو يخفّض أو يحذف أو يضيف، وكل انحراف يُسجَّل بسببه. ومخازن الأمان والتغطيات والميزانية والأحداث له؛ والتطبيق يحسب ويقترح ولا يرسل بدونه." },
        { q: "كيف تُعالَج الترويجات والموسم؟", a: "بأحداث تُدخَل: الترويج والإغلاق والموسم تعدّل الاستهلاك المتوقع لفترتها، ويأخذها الاقتراح في الحسبان. والخروج الاستثنائي الماضي يمكن استبعاده من المتوسط." },
        { q: "والحد الأدنى لطلب المورد؟", a: "مكتوب على بطاقة المورد مع التعبئات. وإن لم يبلغه الاقتراح يقترح التطبيق الأسطر الأقرب إلى نقطتها لإكماله ويختار المسيّر؛ ويُفحص المجموع والميزانية قبل الإرسال." },
        { q: "هل يلزم تاريخ طويل للبدء؟", a: "بضعة أسابيع من السجل تكفي للاستهلاك؛ وللمهلة تُستلم الطلبيات والاستلامات القديمة، إن وُجدت في ملف، للقياس من الأسبوع الثاني. وبلا تاريخ يدخل المسيّر مهلة بداية تحل محلها القياسات من أول الاستلامات." },
        { q: "كم من الوقت لإقامة ذلك؟", a: "سبعة أسابيع في التقويم النموذجي، الأول بلا كود واثنان للاقتراح. وشركة لديها سجل الحركات والاستلامات الممسوحة تأخذ أقل؛ ومن تطلب من الذاكرة وتستلم بلا مسح تأخذ السبعة، لأن البيانات أولاً." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "المهلة تُقاس على الاستلامات الماضية لا يعد بها المورد؛ والاستهلاك يُقرأ من السجل لا يُخمَّن." },
      { after: 3, text: "يُحسب الاقتراح كل ليلة ويُجمَّع حسب المورد؛ ويقرر المسيّر سطراً سطراً، وكل انحراف يُسجَّل بسببه." },
    ],
    cta: { eyebrow: 'أرسلوا لنا ثلاثة أشهر من الطلبيات والاستلامات، نُريكم المهلة الحقيقية لكل مورد', title: "تاجر جملة أو موزّع أو صيدلية أو مؤسس في فرنسا: نبني الاستهلاك المقروء، والمهلة المقيسة، ونقطة إعادة الطلب، والاقتراح لكل مورد الذي يقرره المسيّر يوم الاثنين", body: "حساب على الفارغ على حركاتكم أنتم، وقواعد الأمان والتغطية تُكتب معكم، وتقويم بالأسابيع. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.stock, kind: '2027', name: 'مخزون خاطئ: سجل حركات، حجوزات، جرد دوري' },
      { href: L.lots, kind: '2027', name: 'الدفعة التي تنتهي أولاً: تتبع، استلام، سحب' },
      { href: L.catalogue, kind: '2027', name: 'المنتج نفسه في اثني عشر سطراً: بطاقة منتج، تعبئات' },
      { href: L.b2b, kind: '2027', name: 'بوابة الطلب بين الشركات: أسعار، ائتمان، وقت حدّ' },
    ] },
  },
};

const KEYWORDS = "réapprovisionnement automatique application algérie 2027, point de commande calcul consommation délai fournisseur, stock de sécurité couverture commande fournisseur, proposition de commande par fournisseur application, délai fournisseur mesuré réceptions médiane, rupture de stock surstock logiciel gestion achats algérie, bon de commande fournisseur automatique minimum de commande, gestion des achats grossiste distributeur application, prévision consommation promotion saison stock, développement application achats réapprovisionnement algérie, replenishment app algeria 2027 reorder point lead time purchase proposal supplier, إعادة التموين نقطة إعادة الطلب مهلة المورد اقتراح شراء تطبيق الجزائر 2027";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
