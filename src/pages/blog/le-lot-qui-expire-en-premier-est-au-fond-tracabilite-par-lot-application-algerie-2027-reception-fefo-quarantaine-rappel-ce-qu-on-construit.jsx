import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/le-lot-qui-expire-en-premier-est-au-fond-tracabilite-par-lot-application-algerie-2027-reception-fefo-quarantaine-rappel-ce-qu-on-construit.mjs';

const SLUG = 'le-lot-qui-expire-en-premier-est-au-fond-tracabilite-par-lot-application-algerie-2027-reception-fefo-quarantaine-rappel-ce-qu-on-construit';
const FIGURES = ['reception', 'preparation', 'situations', 'rappel', 'couches', 'calendrier'];
const DATE = '2026-11-10';

const L = {
  stock: '/blog/stock-faux-dans-l-application-algerie-2027-journal-de-mouvements-reservations-inventaire-tournant-multi-depots-hors-ligne-ce-qu-on-construit/',
  catalogue: '/blog/le-meme-produit-existe-en-douze-lignes-fiche-produit-application-algerie-2027-variantes-conditionnements-codes-barres-prix-ce-qu-on-construit/',
  froid: '/blog/chaine-du-froid-algerie-2027-grossiste-pharma-agroalimentaire-sondes-alertes-preuve-de-livraison/',
  pharmacie: '/blog/pharmacie-trois-officines-stock-excel-dates-de-peremption-algerie-2026/',
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  notif: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  imprimer: '/blog/imprimer-factures-tickets-etiquettes-depuis-votre-application-algerie-2027-pdf-bilingue-imprimante-thermique-numerotation/',
  sav: '/blog/le-client-a-appele-trois-fois-reclamations-sav-application-algerie-2027-ticket-unique-priorite-delais-escalade-retours-avoirs-espace-client/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  jobs: '/blog/rapport-de-nuit-jamais-parti-taches-en-arriere-plan-application-algerie-2027-file-de-travaux-reprises-idempotence-planification-echecs/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  excel: '/blog/importer-un-fichier-excel-chaque-semaine-sans-casser-application-algerie-2027-correspondance-validation-essai-a-blanc-retour-arriere/',
  b2b: '/blog/portail-de-commande-b2b-grossiste-algerie-2027-detaillants-commandent-eux-memes-prix-credit-heure-limite/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  service: '/services/software-engineering/',
};

const CONTENT = {
  fr: {
    kind: 'Traçabilité · Lots · Péremption · 2027', title: "« Le lot qui expire en premier est au fond du dépôt » : ce qu'on construit dans une application en 2027 pour tracer par lot, réception scannée, états, sortie par date, règles par client, rappel en minutes",
    dek: "« On jette un carton par mois parce que le lot le plus ancien était derrière le nouveau. Un client a refusé une palette au quai parce qu'il lui restait quarante jours. Et quand le fournisseur a rappelé un lot, on a passé trois jours à fouiller les bons de livraison, et on a oublié deux clients. » La traçabilité par lot n'est pas un marqueur sur les cartons, c'est une construction : le lot comme entité reçue, avec sa date, son état et ses emplacements ; chaque mouvement de stock qui le nomme ; une sortie proposée par date la plus proche sous la règle de durée restante de chaque client ; une quarantaine qui existe en stock sans être disponible ; le lot écrit sur le bon et la facture ; et un rappel qui est une requête de quatorze minutes, pas une enquête de trois jours.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Traçabilité par lot', 'Dates de péremption', 'Sortie par date', 'Rappel de lot', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Le **lot** est une entité : produit, numéro du fournisseur, une seule date, un état, une réception d'origine ; il n'est pas un champ texte sur un mouvement. Chaque **mouvement de stock**, entrée, sortie, transfert, retour, nomme le lot et l'emplacement, et le stock par lot est la somme des mouvements, comme dans [le guide sur le stock](" + L.stock + "). À la **réception**, le carton est scanné : le code GS1-128 porte le produit, le numéro de lot et la date sous des identificateurs normalisés, l'application les lit d'un coup ; sans code, la saisie est guidée et une étiquette interne est imprimée. Le lot a des **états** : disponible, quarantaine, bloqué, expiré, épuisé ; un lot en quarantaine existe en stock et n'est disponible pour personne. La **sortie** est proposée par date de péremption la plus proche, sous la **règle de durée restante** de chaque client, soixante jours pour l'un, rien pour l'autre ; le préparateur peut changer, mais il écrit pourquoi, et il scanne le lot qui sort. Le lot est écrit sur la **ligne du bon de livraison et de la facture**. Le **rappel** est une requête : où est le lot, qui l'a reçu, combien ; le blocage précède tout, et les retours sont liés.",
      "Ce guide s'adresse au grossiste en produits alimentaires, cosmétiques, pharmaceutiques ou agricoles dont les produits ont une date, au distributeur qui livre des détaillants exigeants sur la durée restante, à l'industriel qui doit pouvoir rappeler un lot, et au fondateur installé en France qui veut savoir d'un coup d'œil ce qui expire dans ses dépôts à Alger et Sétif. Il ne redit pas comment on tient un stock juste, ni comment on structure le catalogue en modèle, variantes et conditionnements, décrits dans [le guide sur le stock](" + L.stock + ") et [le guide sur la fiche produit](" + L.catalogue + ") ; il ajoute la dimension qui manque à ces deux guides pour tout ce qui a une date, et il prolonge [notre page sur l'ingénierie logicielle](" + L.service + "). Il ne traite pas des obligations réglementaires propres à chaque secteur : quelles catégories sont suivies par lot et lesquelles passent par la quarantaine sont des décisions de l'entreprise, prises avec ses conseils.",
    ],
    sections: [
      { heading: 'Recevoir un lot correctement, en six étapes', body: [
        "Tout commence au quai de réception : un lot mal reçu ne se rattrape pas à la sortie.",
      ], visual: 'reception', after: [
        "**Scanner le carton.** Beaucoup de cartons portent un code GS1-128 : d'après la liste publique des identificateurs GS1, le produit y est encodé sous l'identificateur 01 sur quatorze chiffres, le numéro de lot sous l'identificateur 10 jusqu'à vingt caractères, et la date de péremption sous l'identificateur 17 sur six chiffres, année, mois, jour ; certains portent plutôt une date limite de consommation recommandée sous l'identificateur 15. Un seul scan remplit les trois champs ; quand le carton n'a qu'un code produit, la saisie du lot et de la date est guidée, et l'application refuse une date passée ou une date sans lot. **Créer ou retrouver le lot** : un lot est un produit plus un numéro fournisseur ; s'il existe déjà avec une autre date, c'est une anomalie à trancher, pas une seconde date. **Compter et rapprocher** : la quantité reçue est comparée à la commande, et l'écart est noté sur la réception, jamais corrigé en silence.",
        "**Décider l'état** : disponible, ou quarantaine si la catégorie exige un contrôle à réception ; c'est une règle écrite par le gérant la première semaine, pas un choix du magasinier. **Ranger et étiqueter** : l'emplacement est enregistré par lot, et une étiquette interne avec le lot et la date est imprimée, selon [le guide sur l'impression](" + L.imprimer + "), quand le carton n'a pas de code lisible. **Écrire le mouvement** : une entrée datée avec produit, lot, quantité, emplacement, réception et auteur, dans le journal de [le guide sur le stock](" + L.stock + "), où la colonne lot ne peut plus être vide pour les catégories suivies.",
      ] },
      { heading: 'Préparer 120 unités : quatre lots, une règle, un ordre de sortie', body: [
        "La figure suit une préparation du 10 novembre. Le préparateur ne cherche plus le bon carton, il confirme une proposition.",
      ], visual: 'preparation', after: [
        "Quatre lots du même produit sont en stock. Le premier est en **quarantaine**, en attente du résultat de contrôle : il existe, il compte dans l'inventaire, et il n'est disponible pour personne. Le deuxième expire dans dix jours : il est sous la **règle de durée restante** de ce client, soixante jours, et il est exclu de cette préparation, mais proposé à un client sans règle ou au déstockage, parce qu'une règle par client n'est pas une règle pour tous. Les deux derniers sont conformes et sortent dans l'ordre des dates : quarante du plus proche, quatre-vingts du suivant.",
        "La proposition écrit deux **mouvements**, chacun avec son lot, son emplacement et la ligne du bon de livraison. Le préparateur peut changer l'ordre, un carton abîmé, un client qui a demandé un lot précis, mais il écrit pourquoi, et l'écart apparaît dans la revue du lundi. À la sortie, le lot est **scanné**, et un lot différent de celui proposé sans justification est refusé. Les terminaux hors ligne du dépôt suivent les mêmes règles avec leur copie locale, selon [le guide sur le hors-ligne](" + L.horsligne + "). Lots, dates, quantités et règle sont un exemple construit.",
      ] },
      { heading: 'Six situations réelles, et ce que l’application fait', body: [
        "Chaque ligne est une phrase entendue dans un dépôt, et la réponse est une construction, pas une consigne de rangement.",
      ], visual: 'situations', after: [
        "**Le lot le plus ancien est au fond** : la sortie est proposée par date, l'emplacement est connu par lot, et l'écart est justifié ; le carton jeté par mois devient une mesure qui baisse. **Le client refuse une date trop courte** : la règle de durée restante est portée par la fiche client, du même référentiel que [le guide sur la commande B2B](" + L.b2b + "), et le lot trop court est exclu avant le quai. **Le fournisseur rappelle un lot** : blocage à la minute, liste des clients et quantités, bons de retour liés.",
        "**Le lot n'a pas encore été contrôlé** : l'état quarantaine le rend invisible à la vente, et sa libération est tracée, qui, quand, sur quel résultat. **Deux lots mélangés sur une étagère** : l'emplacement est par lot, le scan du lot à la sortie est obligatoire, et un mélange est refusé au rangement. **Le client demande quel lot il a reçu** : le lot est sur la ligne du bon et de la facture, et l'historique par client répond ; les réclamations de [le guide sur le service après-vente](" + L.sav + ") partent de ce lot. Pour la chaîne du froid, les relevés de température s'attachent au même lot, selon [le guide sur la chaîne du froid](" + L.froid + ").",
      ] },
      { heading: 'Le rappel du lot L2409A : quatorze minutes, pas trois jours', body: [
        "La figure suit un rappel fournisseur reçu à 9 h 12. Rien n'est fouillé : tout est dans le journal des mouvements.",
      ], visual: 'rappel', after: [
        "**Bloquer d'abord** : à 9 h 13, le lot passe à l'état bloqué, avec le motif, et il n'est plus vendable nulle part, y compris sur les terminaux hors ligne dès leur synchronisation ; le blocage est un droit du gérant et du responsable qualité, selon [le guide sur les rôles](" + L.roles + "). **Lister** : une requête sur le journal des mouvements donne la réception d'origine, les 140 unités encore en stock à Alger, les 120 transférées à Sétif et toutes livrées, les sept bons de livraison et les cinq clients avec les quantités reçues ; le camion du matin, qui transportait 24 unités du lot, est rappelé avant livraison.",
        "**Prévenir** : un message part à chaque client par le canal décrit dans [le guide sur les notifications](" + L.notif + "), avec le lot, les quantités et la marche à suivre ; le client sans WhatsApp est appelé, et l'appel est noté. **Retours** : un bon de retour par client est créé, lié au lot et aux bons de livraison d'origine, et les unités revenues entrent en état bloqué, jamais en disponible. Le même journal répond à la question inverse, quels lots ce client a-t-il reçus, et la requête de rappel est testée à blanc pendant la septième semaine, avant d'être nécessaire. Lot, clients, quantités et minutes sont un exemple construit.",
      ] },
      { heading: 'La traçabilité par lot, en cinq couches', body: [
        "Les mouvements sont la couche accentuée : si un seul oublie le lot, la sortie par date ment et le rappel devient une enquête.",
      ], visual: 'couches', after: [
        "**Lot.** Une entité avec produit, numéro fournisseur, date unique, état, fournisseur et réception d'origine ; un lot ne se supprime pas, il s'épuise ou s'archive. **Mouvements.** Chaque entrée, sortie, transfert et retour nomme le lot et l'emplacement ; le stock par lot est la somme ; pour les catégories suivies, la colonne est obligatoire, et c'est la base de données qui refuse, pas une consigne. **États et règles.** Disponible, quarantaine, bloqué, expiré, épuisé ; durée restante minimale par client ; alertes à quatre-vingt-dix, soixante et trente jours avant la date, calculées chaque nuit par les tâches de [le guide sur les tâches en arrière-plan](" + L.jobs + ") et envoyées au gérant, avec la liste des lots à déstocker ou à proposer en promotion.",
        "**Sortie par date.** Proposition par date la plus proche sous les règles du client ; changement possible, justifié ; scan du lot à la sortie. **Documents et rappel.** Lot sur la ligne du bon et de la facture, imprimé et dans l'espace client ; requête de rappel ; retours liés ; historique par client et par lot. Les pertes par péremption, les refus au quai et le délai de rappel sont trois chiffres de [le tableau de bord du gérant](" + L.dashboard + "), avec une seule définition chacun.",
      ] },
      { heading: 'Tracer par lot en 2027, en semaines', body: [
        "Sept semaines, la première sans code, et deux pour le lot et la réception, parce que c'est là que tout se joue.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, règles** : avec le gérant et le magasinier, quelles catégories sont suivies par lot, lesquelles passent par la quarantaine, quelles durées restantes les clients exigent, quels seuils d'alerte ; sans code. **Semaines 2 et 3, lot et réception** : l'entité lot, le scan GS1-128 et la saisie guidée, les états, l'étiquette interne, le mouvement d'entrée avec lot. **Semaine 4, sortie par date** : proposition, règles par client, scan du lot à la sortie, écart justifié. **Semaine 5, documents** : lot sur bons et factures, historique par client, alertes au gérant.",
        "**Semaine 6, reprise** : un inventaire par lot des catégories suivies, dates saisies, lots inconnus marqués comme tels plutôt qu'inventés, avec le même essai à blanc que [le guide sur l'import](" + L.excel + "). **Semaine 7, rappel et mesure** : la requête de rappel testée à blanc sur un lot réel, les retours liés, et les trois chiffres du lundi. La mise en production suit [le guide sur la livraison](" + L.livrer + ") : un dépôt d'abord, les autres ensuite.",
      ], list: [
        "**Ce que le gérant voit** : les lots qui expirent à quatre-vingt-dix, soixante et trente jours, les lots en quarantaine, les écarts de sortie justifiés, et un rappel qui tient en une requête.",
        "**Ce que le magasinier ne peut plus faire** : recevoir une date sans lot, sortir un lot sans le scanner, mélanger deux lots sur un emplacement, vendre un lot en quarantaine.",
        "**Ce qui est mesuré** : pertes par péremption, refus au quai pour date courte, délai de rappel, lots inconnus à la reprise et leur sort.",
      ], faq: [
        { q: "Pourquoi le lot est-il une entité et pas un champ ?", a: "Parce qu'un lot a une date, un état, des emplacements et une réception d'origine, et qu'un champ texte sur le mouvement ne peut porter ni état ni date unique. Avec une entité, un lot bloqué l'est partout d'un coup, et la date n'est saisie qu'une fois." },
        { q: "Que lit-on dans le code-barres du carton ?", a: "Quand le carton porte un code GS1-128, le produit, le numéro de lot et la date y sont encodés sous des identificateurs normalisés, d'après la liste publique des identificateurs GS1 : 01 pour le produit, 10 pour le lot, 17 pour la date de péremption, 15 pour une date limite recommandée. Un seul scan remplit les trois champs ; sans code, la saisie est guidée." },
        { q: "La sortie par date est-elle imposée au préparateur ?", a: "Elle est proposée, et elle est la règle par défaut. Le préparateur peut changer, mais il écrit pourquoi, et il scanne le lot qui sort. Un changement sans justification est refusé, et les écarts sont revus le lundi." },
        { q: "Un client exige soixante jours de durée restante, un autre rien. Comment faire ?", a: "La règle est portée par la fiche client, pas par le produit. À la préparation, les lots sous la règle de ce client sont exclus et proposés à d'autres clients ou au déstockage. Les règles sont écrites la première semaine." },
        { q: "Combien de temps prend un rappel ?", a: "Dans l'exemple, quatorze minutes : une pour bloquer, zéro pour lister, cinq pour prévenir, huit pour créer les retours. Parce que chaque mouvement portait le lot. La requête est testée à blanc avant d'être nécessaire." },
        { q: "Et les catégories sans date ?", a: "Elles ne sont pas suivies par lot, et la colonne reste facultative pour elles. Le choix des catégories suivies est une décision de l'entreprise, prise la première semaine avec ses conseils ; ce guide ne traite pas des obligations réglementaires propres à chaque secteur." },
        { q: "Combien de temps pour mettre ça en place ?", a: "Sept semaines dans le calendrier type, la première sans code et deux pour le lot et la réception. Une entreprise qui a déjà le journal de mouvements du guide sur le stock en prend moins ; une qui part d'un fichier Excel sans lot prend les sept." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Un lot en quarantaine existe en stock et n'est disponible pour personne ; un lot trop court pour ce client peut l'être pour un autre." },
      { after: 3, text: "Un rappel est une requête, pas une enquête : chaque mouvement portait le lot, et le client est au bout de chaque mouvement." },
    ],
    cta: { eyebrow: 'Envoyez-nous un rappel passé, nous montrons ce qu’il aurait pris en minutes', title: "Grossiste, distributeur, industriel ou fondateur en France : nous construisons le lot comme entité, la réception scannée, la sortie par date sous vos règles clients et le rappel en une requête", body: "Un essai à blanc sur vos propres réceptions, les règles par client écrites avec vous, et un calendrier en semaines. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.stock, kind: '2027', name: 'Stock faux : journal de mouvements, réservations, inventaire tournant' },
      { href: L.catalogue, kind: '2027', name: 'Le même produit en douze lignes : fiche produit, variantes, conditionnements' },
      { href: L.froid, kind: '2027', name: 'Chaîne du froid : sondes, alertes, preuve de livraison' },
      { href: L.horsligne, kind: '2027', name: 'Application hors ligne : base locale, file d’attente, conflits' },
    ] },
  },
  en: {
    kind: 'Traceability · Lots · Expiry · 2027', title: "“The lot that expires first is at the back of the warehouse”: what gets built in an application in 2027 to trace by lot, scanned reception, states, exit by date, rules per customer, recall in minutes",
    dek: "“We throw out a case a month because the oldest lot was behind the new one. A customer refused a pallet at the dock because it had forty days left. And when the supplier recalled a lot, we spent three days digging through delivery notes, and forgot two customers.” Traceability by lot is not a marker pen on cases, it is a construction: the lot as a received entity, with its date, its state and its locations; every stock movement that names it; an exit proposed by closest date under each customer’s remaining-shelf-life rule; a quarantine that exists in stock without being available; the lot written on the delivery note and the invoice; and a recall that is a fourteen-minute query, not a three-day investigation.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Lot traceability', 'Expiry dates', 'Exit by date', 'Lot recall', 'Algeria 2027'],
    intro: [
      "**Short answer.** The **lot** is an entity: product, supplier number, a single date, a state, an original reception; it is not a text field on a movement. Every **stock movement**, receipt, issue, transfer, return, names the lot and the location, and stock per lot is the sum of movements, as in [the stock guide](" + L.stock + "). At **reception**, the case is scanned: the GS1-128 code carries product, lot number and date under standard identifiers, and the application reads them at once; without a code, entry is guided and an internal label is printed. The lot has **states**: available, quarantine, blocked, expired, depleted; a quarantined lot exists in stock and is available to nobody. **Exit** is proposed by closest expiry date, under each customer’s **remaining-shelf-life rule**, sixty days for one, none for another; the picker can change it, but writes why, and scans the lot that goes out. The lot is written on the **delivery note and invoice line**. The **recall** is a query: where the lot is, who received it, how much; blocking comes first, and returns are linked.",
      "This guide is for the wholesaler in food, cosmetics, pharmaceuticals or agricultural inputs whose products carry a date, the distributor delivering to retailers demanding on remaining shelf life, the manufacturer who must be able to recall a lot, and the founder based in France who wants to see at a glance what is expiring in their depots in Algiers and Sétif. It does not repeat how to keep stock right, nor how to structure the catalogue into model, variants and packagings, described in [the stock guide](" + L.stock + ") and [the product record guide](" + L.catalogue + "); it adds the dimension those two guides lack for anything with a date, and it extends [our software engineering page](" + L.service + "). It does not cover the regulatory obligations of each sector: which categories are lot-tracked and which go through quarantine are the company’s decisions, taken with its advisers.",
    ],
    sections: [
      { heading: 'Receiving a lot properly, in six steps', body: [
        "Everything starts at the receiving dock: a badly received lot cannot be fixed at exit.",
      ], visual: 'reception', after: [
        "**Scan the case.** Many cases carry a GS1-128 code: according to GS1’s public list of application identifiers, the product is encoded under identifier 01 on fourteen digits, the lot number under identifier 10 up to twenty characters, and the expiry date under identifier 17 on six digits, year, month, day; some carry a best-before date under identifier 15 instead. One scan fills the three fields; when the case has only a product code, lot and date entry is guided, and the application refuses a past date or a date without a lot. **Create or find the lot**: a lot is a product plus a supplier number; if it already exists with another date, that is an anomaly to settle, not a second date. **Count and match**: the received quantity is compared with the order, and the gap is recorded on the reception, never silently corrected.",
        "**Decide the state**: available, or quarantine if the category requires inspection at reception; it is a rule written by the manager in the first week, not the storekeeper’s choice. **Put away and label**: the location is recorded per lot, and an internal label with lot and date is printed, following [the printing guide](" + L.imprimer + "), when the case has no readable code. **Write the movement**: a dated receipt with product, lot, quantity, location, reception and author, in the ledger of [the stock guide](" + L.stock + "), where the lot column can no longer be empty for tracked categories.",
      ] },
      { heading: 'Picking 120 units: four lots, one rule, one order of exit', body: [
        "The figure follows a pick on 10 November. The picker no longer looks for the right case, they confirm a proposal.",
      ], visual: 'preparation', after: [
        "Four lots of the same product are in stock. The first is in **quarantine**, awaiting the inspection result: it exists, it counts in inventory, and it is available to nobody. The second expires in ten days: it is below this customer’s **remaining-shelf-life rule**, sixty days, and is excluded from this pick, but offered to a customer without a rule or to clearance, because a rule per customer is not a rule for everyone. The last two are compliant and go out in date order: forty from the closest, eighty from the next.",
        "The proposal writes two **movements**, each with its lot, its location and the delivery note line. The picker can change the order, a damaged case, a customer who asked for a specific lot, but writes why, and the deviation appears in the Monday review. At exit, the lot is **scanned**, and a lot different from the proposed one without justification is refused. The depot’s offline terminals follow the same rules with their local copy, following [the offline guide](" + L.horsligne + "). Lots, dates, quantities and rule are a constructed example.",
      ] },
      { heading: 'Six real situations, and what the application does', body: [
        "Every row is a sentence heard in a warehouse, and the answer is a construction, not a shelving instruction.",
      ], visual: 'situations', after: [
        "**The oldest lot is at the back**: exit is proposed by date, the location is known per lot, and the deviation is justified; the case thrown out a month becomes a measure that falls. **The customer refuses a short date**: the remaining-shelf-life rule is carried by the customer record, from the same reference data as [the B2B ordering guide](" + L.b2b + "), and the short lot is excluded before the dock. **The supplier recalls a lot**: blocked within the minute, list of customers and quantities, linked return notes.",
        "**The lot has not been inspected yet**: the quarantine state makes it invisible to sales, and its release is traced, who, when, on which result. **Two lots mixed on one shelf**: the location is per lot, scanning the lot at exit is mandatory, and mixing is refused at put-away. **The customer asks which lot they got**: the lot is on the note and invoice line, and the history per customer answers; complaints in [the after-sales guide](" + L.sav + ") start from that lot. For the cold chain, temperature readings attach to the same lot, following [the cold chain guide](" + L.froid + ").",
      ] },
      { heading: 'The recall of lot L2409A: fourteen minutes, not three days', body: [
        "The figure follows a supplier recall received at 9:12. Nothing is dug through: everything is in the movement ledger.",
      ], visual: 'rappel', after: [
        "**Block first**: at 9:13, the lot switches to blocked, with the reason, and is no longer sellable anywhere, including on offline terminals as soon as they sync; blocking is a right of the manager and the quality lead, following [the roles guide](" + L.roles + "). **List**: one query on the movement ledger gives the original reception, the 140 units still in stock in Algiers, the 120 transferred to Sétif and all delivered, the seven delivery notes and the five customers with quantities received; the morning truck, carrying 24 units of the lot, is called back before delivery.",
        "**Notify**: a message goes to each customer through the channel described in [the notifications guide](" + L.notif + "), with the lot, quantities and what to do; the customer without WhatsApp is called, and the call is recorded. **Returns**: one return note per customer is created, linked to the lot and the original delivery notes, and returned units come in as blocked, never as available. The same ledger answers the reverse question, which lots did this customer receive, and the recall query is dry-run during the seventh week, before it is needed. Lot, customers, quantities and minutes are a constructed example.",
      ] },
      { heading: 'Traceability by lot, in five layers', body: [
        "Movements are the accented layer: if a single one forgets the lot, exit by date lies and the recall becomes an investigation.",
      ], visual: 'couches', after: [
        "**Lot.** An entity with product, supplier number, single date, state, supplier and original reception; a lot is not deleted, it is depleted or archived. **Movements.** Every receipt, issue, transfer and return names the lot and the location; stock per lot is the sum; for tracked categories the column is mandatory, and the database refuses, not an instruction. **States and rules.** Available, quarantine, blocked, expired, depleted; minimum remaining shelf life per customer; alerts at ninety, sixty and thirty days before the date, computed every night by the jobs of [the background jobs guide](" + L.jobs + ") and sent to the manager, with the list of lots to clear or to offer on promotion.",
        "**Exit by date.** Proposal by closest date under the customer’s rules; change allowed, justified; lot scanned at exit. **Documents and recall.** Lot on the delivery note and invoice line, printed and in the customer space; recall query; linked returns; history per customer and per lot. Losses to expiry, dock refusals and recall time are three figures of [the manager’s dashboard](" + L.dashboard + "), each with a single definition.",
      ] },
      { heading: 'Tracing by lot in 2027, in weeks', body: [
        "Seven weeks, the first without code, and two for the lot and reception, because that is where everything is decided.",
      ], visual: 'calendrier', after: [
        "**Week 1, rules**: with the manager and the storekeeper, which categories are lot-tracked, which go through quarantine, which remaining shelf lives customers require, which alert thresholds; no code. **Weeks 2 and 3, lot and reception**: the lot entity, GS1-128 scan and guided entry, states, internal label, receipt movement with lot. **Week 4, exit by date**: proposal, rules per customer, lot scanned at exit, justified deviation. **Week 5, documents**: lot on notes and invoices, history per customer, alerts to the manager.",
        "**Week 6, take-over**: a count by lot of tracked categories, dates entered, unknown lots flagged as such rather than invented, with the same dry run as [the import guide](" + L.excel + "). **Week 7, recall and measurement**: the recall query dry-run on a real lot, linked returns, and the three Monday figures. Going live follows [the delivery guide](" + L.livrer + "): one depot first, the others after.",
      ], list: [
        "**What the manager sees**: lots expiring at ninety, sixty and thirty days, lots in quarantine, justified exit deviations, and a recall that fits in one query.",
        "**What the storekeeper can no longer do**: receive a date without a lot, issue a lot without scanning it, mix two lots in one location, sell a quarantined lot.",
        "**What is measured**: losses to expiry, dock refusals for short dates, recall time, unknown lots at take-over and their fate.",
      ], faq: [
        { q: "Why is the lot an entity and not a field?", a: "Because a lot has a date, a state, locations and an original reception, and a text field on the movement can carry neither a state nor a single date. With an entity, a blocked lot is blocked everywhere at once, and the date is entered only once." },
        { q: "What is read from the case barcode?", a: "When the case carries a GS1-128 code, product, lot number and date are encoded under standard identifiers, according to GS1’s public list of application identifiers: 01 for the product, 10 for the lot, 17 for the expiry date, 15 for a best-before date. One scan fills the three fields; without a code, entry is guided." },
        { q: "Is exit by date imposed on the picker?", a: "It is proposed, and it is the default rule. The picker can change it, but writes why, and scans the lot that goes out. A change without justification is refused, and deviations are reviewed on Monday." },
        { q: "One customer requires sixty days of remaining shelf life, another nothing. How?", a: "The rule is carried by the customer record, not by the product. At picking, lots below this customer’s rule are excluded and offered to other customers or to clearance. Rules are written in the first week." },
        { q: "How long does a recall take?", a: "In the example, fourteen minutes: one to block, zero to list, five to notify, eight to create the returns. Because every movement carried the lot. The query is dry-run before it is needed." },
        { q: "And categories without a date?", a: "They are not lot-tracked, and the column stays optional for them. Choosing the tracked categories is the company’s decision, taken in the first week with its advisers; this guide does not cover the regulatory obligations of each sector." },
        { q: "How long to set this up?", a: "Seven weeks in the typical calendar, the first without code and two for the lot and reception. A company that already has the movement ledger of the stock guide takes less; one starting from an Excel file without lots takes all seven." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "A quarantined lot exists in stock and is available to nobody; a lot too short for this customer may be fine for another." },
      { after: 3, text: "A recall is a query, not an investigation: every movement carried the lot, and the customer is at the end of every movement." },
    ],
    cta: { eyebrow: 'Send us a past recall, we show what it would have taken in minutes', title: "Wholesaler, distributor, manufacturer or founder in France: we build the lot as an entity, scanned reception, exit by date under your customer rules and the recall as one query", body: "A dry run on your own receptions, the rules per customer written with you, and a calendar in weeks. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Read next', items: [
      { href: L.stock, kind: '2027', name: 'Wrong stock: movement ledger, reservations, cycle counts' },
      { href: L.catalogue, kind: '2027', name: 'The same product in twelve lines: product record, variants, packagings' },
      { href: L.froid, kind: '2027', name: 'Cold chain: probes, alerts, proof of delivery' },
      { href: L.horsligne, kind: '2027', name: 'Offline application: local database, queue, conflicts' },
    ] },
  },
  ar: {
    kind: 'تتبع · دفعات · صلاحية · 2027', title: "«الدفعة التي تنتهي أولاً في آخر المستودع»: ما يُبنى في تطبيق سنة 2027 للتتبع بالدفعة، استلام ممسوح، حالات، خروج بالتاريخ، قواعد لكل زبون، سحب بالدقائق",
    dek: "«نرمي كرتوناً كل شهر لأن الدفعة الأقدم كانت خلف الجديدة. زبون رفض طبلية على الرصيف لأنه لم يبقَ لها إلا أربعون يوماً. وحين سحب المورد دفعة، قضينا ثلاثة أيام ننقّب في وصول التسليم، ونسينا زبونين.» التتبع بالدفعة ليس قلم تعليم على الكراتين بل بناء: الدفعة كياناً مستلَماً بتاريخه وحالته ومواقعه؛ كل حركة مخزون تسمّيه؛ خروج مقترح بأقرب تاريخ تحت قاعدة المدة المتبقية لكل زبون؛ حجر موجود في المخزون دون أن يكون متاحاً؛ الدفعة مكتوبة على الوصل والفاتورة؛ وسحب هو استعلام من أربع عشرة دقيقة لا تحقيق من ثلاثة أيام.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['تتبع بالدفعة', 'تواريخ الصلاحية', 'خروج بالتاريخ', 'سحب الدفعة', 'الجزائر 2027'],
    intro: [
      "**الجواب القصير.** **الدفعة** كيان: منتج، رقم المورد، تاريخ واحد، حالة، استلام أصلي؛ وليست حقلاً نصياً على حركة. وكل **حركة مخزون**، دخول وخروج وتحويل وإرجاع، تسمّي الدفعة والموقع، والمخزون لكل دفعة مجموع الحركات كما في [دليل المخزون](" + L.stock + "). وعند **الاستلام** يُمسح الكرتون: رمز GS1-128 يحمل المنتج ورقم الدفعة والتاريخ تحت معرّفات معيارية، ويقرؤها التطبيق دفعة واحدة؛ وبلا رمز يكون الإدخال موجَّهاً ويُطبع ملصق داخلي. وللدفعة **حالات**: متاحة، حجر، محجوبة، منتهية، نافدة؛ والدفعة في الحجر موجودة في المخزون وغير متاحة لأحد. و**الخروج** مقترح بأقرب تاريخ انتهاء تحت **قاعدة المدة المتبقية** لكل زبون، ستون يوماً لأحدهم ولا شيء لآخر؛ ويستطيع المحضّر التغيير لكنه يكتب السبب ويمسح الدفعة الخارجة. والدفعة مكتوبة على **سطر وصل التسليم والفاتورة**. و**السحب** استعلام: أين الدفعة، من استلمها، كم؛ والحجب يسبق كل شيء، والإرجاعات مرتبطة.",
      "هذا الدليل موجَّه إلى تاجر الجملة في المواد الغذائية أو التجميل أو الصيدلة أو المدخلات الفلاحية التي لمنتجاتها تاريخ، وإلى الموزّع الذي يسلّم تجار تجزئة متشددين في المدة المتبقية، وإلى الصناعي الذي يجب أن يستطيع سحب دفعة، وإلى المؤسس المقيم في فرنسا الذي يريد أن يرى بنظرة ما ينتهي في مستودعاته بالجزائر وسطيف. وهو لا يعيد كيف يُحفظ مخزون صحيح ولا كيف يُهيكل الكتالوج طرازاً ومتغيرات وتعبئات، الموصوفَين في [دليل المخزون](" + L.stock + ") و[دليل بطاقة المنتج](" + L.catalogue + ")؛ بل يضيف البعد الناقص في هذين الدليلين لكل ما له تاريخ، ويمدّ [صفحتنا عن هندسة البرمجيات](" + L.service + "). ولا يتناول الالتزامات التنظيمية الخاصة بكل قطاع: أي الفئات تُتتبَّع بالدفعة وأيها يمر بالحجر قرارات للشركة تُتخذ مع مستشاريها.",
    ],
    sections: [
      { heading: 'استلام دفعة على نحو صحيح، في ست خطوات', body: [
        "كل شيء يبدأ على رصيف الاستلام: دفعة أُسيء استلامها لا تُستدرك عند الخروج.",
      ], visual: 'reception', after: [
        "**مسح الكرتون.** كثير من الكراتين تحمل رمز GS1-128: بحسب قائمة GS1 العامة لمعرّفات التطبيق، يُرمَّز المنتج تحت المعرّف 01 بأربعة عشر رقماً، ورقم الدفعة تحت المعرّف 10 حتى عشرين حرفاً، وتاريخ انتهاء الصلاحية تحت المعرّف 17 بستة أرقام، سنة وشهر ويوم؛ وبعضها يحمل بدلاً منه تاريخ أفضلية استهلاك تحت المعرّف 15. مسح واحد يملأ الحقول الثلاثة؛ وحين لا يحمل الكرتون إلا رمز منتج يكون إدخال الدفعة والتاريخ موجَّهاً، ويرفض التطبيق تاريخاً ماضياً أو تاريخاً بلا دفعة. **إنشاء الدفعة أو إيجادها**: الدفعة منتج زائد رقم مورد؛ وإن وُجدت سلفاً بتاريخ آخر فذلك شذوذ يُحسم لا تاريخ ثانٍ. **العدّ والمطابقة**: تُقارَن الكمية المستلَمة بالطلبية، ويُسجَّل الفارق على الاستلام ولا يُصحَّح بصمت أبداً.",
        "**تحديد الحالة**: متاحة، أو حجر إن اشترطت الفئة مراقبة عند الاستلام؛ وهي قاعدة يكتبها المسيّر في الأسبوع الأول لا اختيار أمين المخزن. **الترتيب والوسم**: يُسجَّل الموقع لكل دفعة، ويُطبع ملصق داخلي بالدفعة والتاريخ وفق [دليل الطباعة](" + L.imprimer + ") حين لا يحمل الكرتون رمزاً مقروءاً. **كتابة الحركة**: دخول مؤرَّخ بالمنتج والدفعة والكمية والموقع والاستلام والمؤلف في سجل [دليل المخزون](" + L.stock + ")، حيث لم يعد يجوز أن يكون عمود الدفعة فارغاً للفئات المتتبَّعة.",
      ] },
      { heading: 'تحضير 120 وحدة: أربع دفعات، قاعدة واحدة، ترتيب خروج', body: [
        "يتتبع الشكل تحضيراً في 10 نوفمبر. لم يعد المحضّر يبحث عن الكرتون الصحيح، بل يؤكد اقتراحاً.",
      ], visual: 'preparation', after: [
        "أربع دفعات من المنتج نفسه في المخزون. الأولى في **الحجر** بانتظار نتيجة المراقبة: موجودة، تُحسب في الجرد، وغير متاحة لأحد. والثانية تنتهي بعد عشرة أيام: دون **قاعدة المدة المتبقية** لهذا الزبون، ستين يوماً، فتُستبعد من هذا التحضير لكنها تُعرض على زبون بلا قاعدة أو على التصفية، لأن قاعدة لزبون ليست قاعدة للجميع. والأخيرتان مطابقتان تخرجان بترتيب التواريخ: أربعون من الأقرب وثمانون من التالية.",
        "ويكتب الاقتراح **حركتين**، كل منهما بدفعتها وموقعها وسطر وصل التسليم. ويستطيع المحضّر تغيير الترتيب، كرتون تالف أو زبون طلب دفعة بعينها، لكنه يكتب السبب، ويظهر الانحراف في مراجعة الاثنين. وعند الخروج تُ**مسح** الدفعة، وتُرفض دفعة مغايرة للمقترحة بلا تبرير. وأجهزة المستودع دون اتصال تتبع القواعد نفسها بنسختها المحلية وفق [دليل العمل دون اتصال](" + L.horsligne + "). والدفعات والتواريخ والكميات والقاعدة مثال مبني.",
      ] },
      { heading: 'ست حالات حقيقية، وما يفعله التطبيق', body: [
        "كل سطر جملة سُمعت في مستودع، والجواب بناء لا تعليمة ترتيب.",
      ], visual: 'situations', after: [
        "**الدفعة الأقدم في الآخر**: الخروج مقترح بالتاريخ، والموقع معروف لكل دفعة، والانحراف مبرَّر؛ والكرتون المرمي كل شهر يصير مقياساً ينخفض. **الزبون يرفض تاريخاً قصيراً**: قاعدة المدة المتبقية تحملها بطاقة الزبون من المرجع نفسه الذي في [دليل الطلب بين الشركات](" + L.b2b + ")، والدفعة القصيرة تُستبعد قبل الرصيف. **المورد يسحب دفعة**: حجب في الدقيقة، قائمة الزبائن والكميات، وصول إرجاع مرتبطة.",
        "**الدفعة لم تُراقَب بعد**: حالة الحجر تجعلها غير مرئية للبيع، والإفراج عنها متتبَّع، من ومتى وعلى أي نتيجة. **دفعتان مختلطتان على رف**: الموقع لكل دفعة، ومسح الدفعة عند الخروج إلزامي، والخلط مرفوض عند الترتيب. **الزبون يسأل أي دفعة استلم**: الدفعة على سطر الوصل والفاتورة، والتاريخ لكل زبون يجيب؛ وشكاوى [دليل ما بعد البيع](" + L.sav + ") تنطلق من تلك الدفعة. وفي سلسلة التبريد تُربط قراءات الحرارة بالدفعة نفسها وفق [دليل سلسلة التبريد](" + L.froid + ").",
      ] },
      { heading: 'سحب الدفعة L2409A: أربع عشرة دقيقة لا ثلاثة أيام', body: [
        "يتتبع الشكل سحباً من المورد ورد عند 09:12. لا شيء يُنقَّب فيه: كل شيء في سجل الحركات.",
      ], visual: 'rappel', after: [
        "**الحجب أولاً**: عند 09:13 تتحول الدفعة إلى محجوبة مع السبب، ولا تعود قابلة للبيع في أي مكان، حتى على الأجهزة دون اتصال فور مزامنتها؛ والحجب صلاحية للمسيّر ومسؤول الجودة وفق [دليل الأدوار](" + L.roles + "). **السرد**: استعلام واحد على سجل الحركات يعطي الاستلام الأصلي، و140 وحدة ما زالت في مخزون الجزائر، و120 حُوّلت إلى سطيف وسُلّمت كلها، ووصول التسليم السبعة والزبائن الخمسة بالكميات المستلَمة؛ وشاحنة الصباح التي كانت تحمل 24 وحدة من الدفعة تُعاد قبل التسليم.",
        "**التنبيه**: تخرج رسالة إلى كل زبون عبر القناة الموصوفة في [دليل الإشعارات](" + L.notif + ") بالدفعة والكميات وما يجب فعله؛ والزبون بلا WhatsApp يُتصل به وتُسجَّل المكالمة. **الإرجاعات**: يُنشأ وصل إرجاع لكل زبون مرتبط بالدفعة ووصول التسليم الأصلية، وتدخل الوحدات العائدة بحالة محجوبة لا متاحة أبداً. والسجل نفسه يجيب عن السؤال المعاكس، أي دفعات استلمها هذا الزبون، ويُجرَّب استعلام السحب على الفارغ في الأسبوع السابع قبل أن يلزم. والدفعة والزبائن والكميات والدقائق مثال مبني.",
      ] },
      { heading: 'التتبع بالدفعة، في خمس طبقات', body: [
        "الحركات هي الطبقة المميزة: إن نسيت حركة واحدة الدفعة، كذب الخروج بالتاريخ وصار السحب تحقيقاً.",
      ], visual: 'couches', after: [
        "**الدفعة.** كيان بمنتج ورقم مورد وتاريخ واحد وحالة ومورد واستلام أصلي؛ والدفعة لا تُحذف بل تنفد أو تُؤرشف. **الحركات.** كل دخول وخروج وتحويل وإرجاع يسمّي الدفعة والموقع؛ والمخزون لكل دفعة هو المجموع؛ وللفئات المتتبَّعة العمود إلزامي، وقاعدة البيانات هي التي ترفض لا تعليمة. **الحالات والقواعد.** متاحة، حجر، محجوبة، منتهية، نافدة؛ مدة متبقية دنيا لكل زبون؛ تنبيهات قبل التاريخ بتسعين وستين وثلاثين يوماً تُحسب كل ليلة بمهام [دليل مهام الخلفية](" + L.jobs + ") وتُرسل إلى المسيّر مع قائمة الدفعات للتصفية أو للعرض الترويجي.",
        "**الخروج بالتاريخ.** اقتراح بأقرب تاريخ تحت قواعد الزبون؛ تغيير ممكن مبرَّر؛ مسح الدفعة عند الخروج. **المستندات والسحب.** الدفعة على سطر الوصل والفاتورة، مطبوعة وفي فضاء الزبون؛ استعلام السحب؛ إرجاعات مرتبطة؛ تاريخ لكل زبون ولكل دفعة. وخسائر الصلاحية ورفض الرصيف ومدة السحب ثلاثة أرقام في [لوحة المسيّر](" + L.dashboard + ") لكل منها تعريف واحد.",
      ] },
      { heading: 'التتبع بالدفعة سنة 2027، بالأسابيع', body: [
        "سبعة أسابيع، الأول بلا كود، واثنان للدفعة والاستلام لأن هناك يُحسم كل شيء.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، القواعد**: مع المسيّر وأمين المخزن، أي الفئات تُتتبَّع بالدفعة، وأيها يمر بالحجر، وأي مدد متبقية يشترطها الزبائن، وأي عتبات تنبيه؛ بلا كود. **الأسبوعان 2 و3، الدفعة والاستلام**: كيان الدفعة، مسح GS1-128 والإدخال الموجَّه، الحالات، الملصق الداخلي، حركة الدخول بالدفعة. **الأسبوع 4، الخروج بالتاريخ**: اقتراح، قواعد لكل زبون، مسح الدفعة عند الخروج، انحراف مبرَّر. **الأسبوع 5، المستندات**: الدفعة على الوصول والفواتير، تاريخ لكل زبون، تنبيهات للمسيّر.",
        "**الأسبوع 6، الاستلام**: جرد بالدفعة للفئات المتتبَّعة، تواريخ مُدخَلة، دفعات مجهولة توسم كذلك بدل اختراعها، بالتجربة على الفارغ نفسها التي في [دليل الاستيراد](" + L.excel + "). **الأسبوع 7، السحب والقياس**: استعلام السحب مجرَّب على الفارغ على دفعة حقيقية، الإرجاعات المرتبطة، وأرقام الاثنين الثلاثة. والإطلاق يتبع [دليل التسليم](" + L.livrer + "): مستودع أولاً ثم الباقي.",
      ], list: [
        "**ما يراه المسيّر**: الدفعات التي تنتهي بعد تسعين وستين وثلاثين يوماً، الدفعات في الحجر، انحرافات الخروج المبرَّرة، وسحب يسعه استعلام واحد.",
        "**ما لم يعد أمين المخزن يستطيعه**: استلام تاريخ بلا دفعة، إخراج دفعة دون مسحها، خلط دفعتين في موقع، بيع دفعة في الحجر.",
        "**ما يُقاس**: خسائر الصلاحية، رفض الرصيف لتاريخ قصير، مدة السحب، الدفعات المجهولة عند الاستلام ومصيرها.",
      ], faq: [
        { q: "لماذا الدفعة كيان لا حقل؟", a: "لأن للدفعة تاريخاً وحالة ومواقع واستلاماً أصلياً، وحقل نصي على الحركة لا يحمل حالة ولا تاريخاً واحداً. وبالكيان تُحجب الدفعة في كل مكان دفعة واحدة، ويُدخَل التاريخ مرة واحدة فقط." },
        { q: "ماذا يُقرأ في باركود الكرتون؟", a: "حين يحمل الكرتون رمز GS1-128 يُرمَّز المنتج ورقم الدفعة والتاريخ تحت معرّفات معيارية بحسب قائمة GS1 العامة لمعرّفات التطبيق: 01 للمنتج، 10 للدفعة، 17 لتاريخ انتهاء الصلاحية، 15 لتاريخ أفضلية الاستهلاك. مسح واحد يملأ الحقول الثلاثة؛ وبلا رمز يكون الإدخال موجَّهاً." },
        { q: "هل الخروج بالتاريخ مفروض على المحضّر؟", a: "مقترح، وهو القاعدة الافتراضية. يستطيع المحضّر التغيير لكنه يكتب السبب ويمسح الدفعة الخارجة. والتغيير بلا تبرير مرفوض، والانحرافات تُراجَع يوم الاثنين." },
        { q: "زبون يشترط ستين يوماً مدة متبقية وآخر لا شيء. كيف؟", a: "القاعدة تحملها بطاقة الزبون لا المنتج. وعند التحضير تُستبعد الدفعات التي تحت قاعدة هذا الزبون وتُعرض على زبائن آخرين أو على التصفية. والقواعد تُكتب في الأسبوع الأول." },
        { q: "كم يستغرق السحب؟", a: "في المثال أربع عشرة دقيقة: واحدة للحجب، صفر للسرد، خمس للتنبيه، ثماني لإنشاء الإرجاعات. لأن كل حركة كانت تحمل الدفعة. ويُجرَّب الاستعلام على الفارغ قبل أن يلزم." },
        { q: "والفئات بلا تاريخ؟", a: "لا تُتتبَّع بالدفعة، ويبقى العمود اختيارياً لها. واختيار الفئات المتتبَّعة قرار للشركة يُتخذ في الأسبوع الأول مع مستشاريها؛ ولا يتناول هذا الدليل الالتزامات التنظيمية الخاصة بكل قطاع." },
        { q: "كم من الوقت لإقامة ذلك؟", a: "سبعة أسابيع في التقويم النموذجي، الأول بلا كود واثنان للدفعة والاستلام. وشركة لديها سجل الحركات من دليل المخزون تأخذ أقل؛ ومن تبدأ من ملف Excel بلا دفعات تأخذ السبعة." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "الدفعة في الحجر موجودة في المخزون وغير متاحة لأحد؛ والدفعة القصيرة لهذا الزبون قد تصلح لغيره." },
      { after: 3, text: "السحب استعلام لا تحقيق: كل حركة كانت تحمل الدفعة، والزبون في طرف كل حركة." },
    ],
    cta: { eyebrow: 'أرسلوا لنا سحباً ماضياً، نُريكم كم كان سيستغرق بالدقائق', title: "تاجر جملة أو موزّع أو صناعي أو مؤسس في فرنسا: نبني الدفعة كياناً، والاستلام الممسوح، والخروج بالتاريخ تحت قواعد زبائنكم، والسحب في استعلام واحد", body: "تجربة على الفارغ على استلاماتكم أنتم، وقواعد لكل زبون تُكتب معكم، وتقويم بالأسابيع. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.stock, kind: '2027', name: 'مخزون خاطئ: سجل حركات، حجوزات، جرد دوري' },
      { href: L.catalogue, kind: '2027', name: 'المنتج نفسه في اثني عشر سطراً: بطاقة منتج، متغيرات، تعبئات' },
      { href: L.froid, kind: '2027', name: 'سلسلة التبريد: مجسات، تنبيهات، إثبات تسليم' },
      { href: L.horsligne, kind: '2027', name: 'تطبيق دون اتصال: قاعدة محلية، طابور، تعارضات' },
    ] },
  },
};

const KEYWORDS = "traçabilité par lot application algérie 2027, gestion des lots et dates de péremption application, fefo sortie par date de péremption, rappel de lot application grossiste, quarantaine lot contrôle qualité application, gs1-128 lot date péremption scan réception, durée de vie restante minimale par client, lot sur bon de livraison facture, alertes péremption 90 60 30 jours, gestion lots pharma agroalimentaire algérie logiciel, développement application traçabilité lots algérie, lot traceability app algeria 2027 fefo recall quarantine gs1-128, تتبع الدفعات تواريخ الصلاحية سحب دفعة تطبيق الجزائر 2027";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
