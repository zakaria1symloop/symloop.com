import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-agence-de-voyage-algerie-2027-un-dossier-par-voyage-places-bloquees-acomptes-echeances-fournisseurs-passeports-marge-par-dossier.mjs';

const SLUG = 'logiciel-agence-de-voyage-algerie-2027-un-dossier-par-voyage-places-bloquees-acomptes-echeances-fournisseurs-passeports-marge-par-dossier';
const FIGURES = ['situations', 'couches', 'places', 'parcours', 'echeances', 'calendrier'];
const DATE = '2026-11-19';
const I = (x) => '⁦' + x + '⁩';

const L = {
  omra: '/blog/agence-omra-algerie-2027-dossier-pelerin-paiement-par-tranches-suivi-groupes/',
  devises: '/blog/client-en-france-paie-en-euros-service-en-algerie-application-2027-deux-encaissements-deux-devises-taux-fige-rapprochement-remboursement/',
  creneau: '/blog/meme-creneau-reserve-deux-fois-reservation-en-ligne-application-algerie-2027-creneaux-verrou-tenue-acompte-liste-d-attente-rappels/',
  credit: '/blog/le-client-doit-400-000-dinars-personne-ne-sait-depuis-quand-credit-client-application-algerie-2027-lettrage-cheques-relances-plafond/',
  notifications: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  crm: '/blog/logiciel-crm-algerie-2027-portefeuille-clients-pipeline-relances-devis-prevision-commerciaux/',
  saharien: '/blog/agence-tourisme-saharien-algerie-2027-reservation-en-ligne-circuits-djanet/',
};

const CONTENT = {
  fr: {
    kind: 'Logiciel agence de voyage · Algérie · 2027', title: "Logiciel agence de voyage en Algérie (2027) : chaque agent a son cahier, personne ne sait ce qu'un client doit encore, une chambre vendue deux fois, un passeport expiré au départ, un dossier par voyage, les places, l'argent des deux côtés, la marge",
    dek: "« Chez nous, chaque agent tient ses dossiers dans son cahier et dans ses conversations WhatsApp. Un client a versé un acompte, et personne ne sait dire ce qu'il doit encore. On a vendu une chambre qu'on n'avait plus, un passeport expirait avant le départ, et en fin de saison on ne sait pas ce que chaque voyage a rapporté. Quel logiciel pour une agence de voyage, et que doit-il faire exactement ? » Un logiciel d'agence tient un dossier par voyage vendu : ses voyageurs, ses places, son argent des deux côtés, ses documents. Le reste, rappels, alertes, marge, se lit dans les dossiers.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel agence de voyage', 'Dossier voyage', 'Allotement', 'Échéancier client et fournisseur', 'Marge par dossier', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel d'agence de voyage tient **un dossier par voyage vendu** : les voyageurs, les prestations, les places, les paiements et les pièces, au même endroit, pour toute l'agence. Quatre mécanismes font la différence : **un stock de places unique**, avec la date où les invendues se rendent ; **deux échéanciers face à face**, celui du client et celui des fournisseurs ; **les documents et leurs dates**, passeport en tête ; **la marge par dossier**, connue le jour de la vente. Il ne remplace pas l'outil de réservation des billets : il range ce qui a été vendu. Huit semaines dans l'exemple, à finir avant la haute saison.",
      "Cette page s'adresse au gérant d'une agence de voyage, billetterie, voyages organisés, groupes, Omra ou accueil de voyageurs en Algérie, et au fondateur installé en France qui veut vendre des séjours vers l'Algérie ou depuis l'Algérie sans perdre le fil des dossiers. Les définitions viennent de sources publiques : agence de voyage, voyagiste, voyage à forfait, allotement, système mondial de distribution, dossier passager, plan de facturation et de règlement, bon d'échange, créances, marge brute. Le départ de 40 places, les montants pour 100 vendus et le calendrier sont un exemple construit. Cette page ne donne aucun prix et ne traite ni des agréments, ni des règles de change, ni de fiscalité, ni des formalités de visa : voyez votre conseil et les autorités concernées. L'organisation d'une saison de Omra a son propre [guide](" + L.omra + ").",
    ],
    sections: [
      { heading: "Cahier et WhatsApp, ou logiciel d'agence : six situations", body: [
        "La figure oppose, sur six situations, l'agence d'aujourd'hui et l'agence qui tient un dossier par voyage.",
      ], visual: 'situations', after: [
        "**Ce que vend une agence.** Une agence de voyage fournit au public des services de voyage et de tourisme pour le compte de fournisseurs d'hébergement ou de transport ; elle reçoit souvent des commissions de ces fournisseurs, ou facture des frais à ses clients. Elle vend donc ce qu'elle ne produit pas : des places chez d'autres, payées par ses clients, dues à ses fournisseurs. Entre les deux, il n'y a que sa mémoire, ou un dossier. **Le dossier.** Les systèmes de réservation ont le leur : le dossier passager, enregistrement qui contient l'itinéraire d'un passager ou d'un groupe voyageant ensemble. L'agence a besoin du sien, plus large : qui voyage, ce qui a été vendu, ce qui a été payé, ce qui manque.",
        "**Pourquoi le cahier ne tient plus.** Tant qu'un seul agent vend dix voyages par mois, le cahier suffit. Avec trois agents, des départs en groupe et des paiements en trois fois, chaque ligne de la figure devient un incident par semaine. Le signe le plus sûr : quand un client appelle, la réponse dépend de la personne qui décroche.",
      ] },
      { heading: "Un logiciel d'agence de voyage, en cinq couches", body: [
        "La couche accentuée est le dossier.",
      ], visual: 'couches', after: [
        "**À côté de l'outil de réservation.** Un système mondial de distribution est un réseau informatisé qui permet les transactions entre les prestataires du voyage, compagnies aériennes, hôtels, loueurs de voitures. C'est là que le billet se réserve. Le logiciel d'agence ne le remplace pas : il reçoit ce qui a été réservé et le rattache au dossier. **Le règlement des billets.** Le plan de facturation et de règlement est un système de facturation électronique conçu pour faciliter les flux de données et de fonds entre les agences et les compagnies aériennes : ce qu'il réclame doit se retrouver, billet par billet, dans les dossiers.",
        "**Une seule saisie.** Le voyageur est saisi une fois, avec son passeport ; il se retrouve sur la liste du départ, sur la liste des chambres, sur le reçu et sur le bon d'échange. **Les prospects.** Avant le dossier, il y a les demandes et les devis restés sans réponse : c'est le travail d'un [CRM](" + L.crm + "), que le logiciel d'agence peut contenir ou alimenter.",
      ] },
      { heading: "Quarante places, et la date où on les rend", body: [
        "La figure suit un départ de quarante places bloquées.",
      ], visual: 'places', after: [
        "**Le mot du métier.** Un allotement désigne un bloc de sièges ou de chambres négocié à l'avance auprès d'un transporteur ou d'un hôtel. Quelque temps avant le départ ou l'arrivée, les places invendues peuvent être rendues au fournisseur ; ce délai de rétrocession se négocie dans le contrat. Tout l'enjeu est dans cette date. **Deux erreurs.** Vendre, après la date, une place qui a été rendue. Ou oublier de rendre des places qu'on ne vendra pas, et les devoir. Dans les deux cas, personne n'a regardé le calendrier.",
        "**Tenir une place.** Entre « le client hésite » et « le client a payé », la place est en option : tenue pour lui pendant un délai, puis confirmée ou libérée. C'est le mécanisme décrit dans [le guide sur la réservation sans double vente](" + L.creneau + "). **La survente.** Vendre au-delà de ce qu'on a s'appelle la survente. Un stock unique, décompté à chaque vente, la rend impossible sans une décision du gérant.",
      ] },
      { heading: "Du devis au retour, en six temps", body: [
        "Le deuxième temps est accentué : l'ouverture du dossier.",
      ], visual: 'parcours', after: [
        "**Du devis au dossier.** Un voyage à forfait réunit un transport et un hébergement vendus ensemble ; celui qui l'assemble est un voyagiste. Que l'agence assemble elle-même ou revende le forfait d'un autre, le devis liste les prestations, le prix et sa durée de validité. Le jour de l'acompte, le devis devient dossier, et l'échéancier se calcule tout seul. **Les documents.** Pour chaque voyageur : le passeport et sa date d'expiration, les pièces demandées, le billet. Le logiciel ne connaît pas les règles d'entrée de chaque pays ; il sait en revanche comparer deux dates, et afficher ce qui manque à quinze jours du départ.",
        "**Le départ.** Le bon d'échange est la preuve du droit d'un client nommé à recevoir un service, à un moment et en un lieu précis : il s'édite depuis le dossier, comme la liste des chambres envoyée à l'hôtel et la liste des voyageurs remise à l'accompagnateur. **Prévenir.** Les rappels d'échéance, de pièce manquante et d'heure de convocation partent par le canal que le client lit, selon [le guide sur les notifications](" + L.notifications + "). **Recevoir en Algérie.** Pour une agence qui accueille des voyageurs, circuits et excursions, le même dossier sert dans l'autre sens, comme dans [le guide sur le tourisme saharien](" + L.saharien + ").",
      ] },
      { heading: "L'argent d'un dossier : ce qui entre, ce qui sort", body: [
        "La figure montre l'argent d'un départ en groupe, pour 100 vendus.",
      ], visual: 'echeances', after: [
        "**Deux échéanciers.** Les créances sont ce que les clients doivent pour un service commandé et pas encore payé. Dans une agence, elles ont une particularité : en face de chaque créance, il y a une dette envers un fournisseur, avec sa propre date. Le logiciel tient les deux, dossier par dossier, puis les additionne : c'est la seule façon de voir, trois semaines à l'avance, la semaine où il faudra payer les hôtels avant d'avoir encaissé les soldes. **Relancer.** Un rappel avant l'échéance vaut dix appels après ; la mécanique est celle du [guide sur le crédit client](" + L.credit + ").",
        "**La marge.** La marge brute est la différence entre le chiffre d'affaires et le coût de ce qui a été vendu, rapportée au chiffre d'affaires. Par dossier, elle se connaît le jour de la vente : prix vendu, moins prestations achetées. Elle se corrige ensuite de ce que le cahier ne montre jamais : la place rendue trop tard, la chambre offerte, le billet réémis. **Deux monnaies.** Quand le fournisseur se paie en devise et le client en dinars, la marge dépend du taux retenu le jour de la vente : le mécanisme est décrit dans [le guide sur les deux encaissements et le taux figé](" + L.devises + ").",
      ] },
      { heading: "Huit semaines avant la haute saison, en 2027", body: [
        "Huit semaines dans l'exemple, dont la première pour relire dix dossiers réels.",
      ], visual: 'calendrier', after: [
        "**Avant la saison, pas pendant.** On n'installe pas un outil en plein mois de départs. Huit semaines dans l'exemple : une pour relire dix dossiers réels avec les agents, trois pour les dossiers et les paiements, puis les places, les fournisseurs et les documents. **La reprise.** Les départs déjà vendus sont saisis, et chaque solde est vérifié avec le client : c'est le moment où l'on découvre les écarts entre les cahiers.",
        "**Le premier départ.** Un départ entier est tenu dans l'outil, du devis à la clôture, avant d'y mettre les autres. **Ce qui fait tenir.** Une règle simple : ce qui n'est pas dans le dossier n'existe pas. Un reçu se donne depuis le dossier, une place se vend depuis le stock, et le gérant lit chaque dimanche les échéances de la semaine, des deux côtés.",
      ], list: [
        "**Ce que le gérant reçoit** : un dossier par voyage vendu ; un stock de places unique avec ses dates de rétrocession ; l'échéancier de chaque client et celui de chaque fournisseur ; les documents des voyageurs et leurs dates ; la marge par dossier, par départ, par destination et par agent ; la trésorerie à trois semaines.",
        "**Ce que l'agence ne fait plus** : chercher un solde dans un cahier, vendre une place rendue, découvrir un passeport expiré à l'aéroport, apprendre une échéance par l'appel du fournisseur, attendre la fin de la saison pour savoir ce qu'un départ a rapporté.",
        "**Ce qui est mesuré** : soldes en retard et montant restant dû, places vendues, en option et rendues par départ, dossiers avec une pièce manquante à quinze jours, marge prévue et marge réelle par dossier, creux de trésorerie des trois semaines à venir.",
        "**Ce que fait Symloop** : la relecture de dix dossiers réels avec vos agents, la construction ou l'adaptation de l'outil autour du dossier, le stock de places, les deux échéanciers, les documents, les rappels aux clients, la reprise des dossiers en cours, puis la lecture de la marge et de la trésorerie, et, si vous le voulez, la vente en ligne sur le même stock.",
      ], faq: [
        { q: "Quel logiciel pour une agence de voyage en Algérie ?", a: "Celui qui tient un dossier par voyage vendu, avec un stock de places unique, les échéanciers du client et des fournisseurs, les documents des voyageurs et la marge par dossier. Vérifiez qu'il gère vos produits réels : billetterie, voyages organisés, groupes, Omra, paiements en plusieurs fois." },
        { q: "Que doit faire un logiciel d'agence de voyage ?", a: "Quatre choses : dire à tout moment ce qu'un client a payé et doit encore, empêcher de vendre une place qu'on n'a plus, signaler la pièce ou la date qui manque avant le départ, et donner la marge de chaque dossier. Le reste, devis, reçus, listes, découle de ces quatre-là." },
        { q: "Faut-il un logiciel si l'on a déjà un outil de réservation de billets ?", a: "Oui. L'outil de réservation vend le billet ; il ne suit ni l'acompte du client, ni la chambre, ni le passeport, ni la marge. Le logiciel d'agence range autour du billet tout ce qui fait le voyage, et rapproche ce que la compagnie réclame de ce qui a été vendu." },
        { q: "Comment suivre les acomptes et les paiements en plusieurs fois ?", a: "Par un échéancier créé le jour de la vente : montant et date de chaque versement, reçu édité depuis le dossier, rappel envoyé avant l'échéance. À tout moment, le dossier affiche ce qui a été payé, ce qui reste dû et la prochaine date." },
        { q: "Comment éviter de vendre deux fois la même place ?", a: "Avec un seul stock de places pour toute l'agence, décompté à chaque vente, et une option qui tient la place d'un client pendant un délai avant de la confirmer ou de la libérer. Deux cahiers, c'est deux stocks ; deux stocks, c'est une place vendue deux fois." },
        { q: "Comment connaître la marge d'un voyage ?", a: "Par dossier : le prix vendu, moins les prestations achetées, transport, hébergement, transferts, frais. Elle se connaît le jour de la vente, puis se corrige des imprévus. Additionnée par départ et par destination, elle dit quels voyages font vivre l'agence." },
        { q: "Le logiciel gère-t-il les groupes et la Omra ?", a: "Il le doit : un départ en groupe est un bloc de places, une liste de voyageurs, une liste de chambres et des paiements échelonnés. La Omra ajoute ses propres étapes et ses propres pièces, décrites dans le guide consacré aux agences de Omra." },
        { q: "Peut-on vendre en ligne avec le même outil ?", a: "Oui, si le site lit le même stock de places et crée le même dossier qu'un agent au comptoir. Un site séparé, avec sa propre liste de places, recrée le problème du cahier. Le paiement en ligne s'ajoute ensuite comme un mode d'encaissement de plus." },
        { q: "Logiciel du marché ou sur mesure ?", a: "Un logiciel du marché si vos produits sont standards. Une construction sur mesure si vous vendez des groupes, des paiements échelonnés ou des produits que les logiciels courants traitent mal. Dans les deux cas, faites jouer dix dossiers réels avant de décider." },
        { q: "Combien de temps pour mettre en place un logiciel d'agence ?", a: "Huit semaines dans l'exemple de cette page : une pour cadrer, trois pour les dossiers et les paiements, puis les places, les fournisseurs, les documents et la reprise des dossiers en cours. À terminer avant la haute saison, jamais pendant." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "Un bloc de places est un stock qui a une date limite." },
      { after: 4, text: "Un dossier qui gagne peut manquer d'argent pendant cinq jours." },
    ],
    cta: { eyebrow: "Dites-nous ce que vous vendez, combien d'agents et combien de départs par saison : nous commençons par relire dix dossiers réels avec vous", title: "Agence où chaque agent a son cahier, soldes que personne ne retrouve, chambre vendue deux fois, échéance fournisseur apprise par téléphone, ou fondateur en France qui lance une offre de voyages avec l'Algérie : nous construisons l'outil autour du dossier", body: "Un dossier par voyage, un stock de places unique, deux échéanciers, les documents et leurs dates, les rappels aux clients, la marge par dossier, la trésorerie à trois semaines, la vente en ligne sur le même stock. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.omra, kind: '2027', name: 'Agence de Omra : dossier pèlerin, paiement par tranches, groupes' },
      { href: L.creneau, kind: '2027', name: 'Réservation en ligne : ne plus vendre deux fois le même créneau' },
      { href: L.credit, kind: '2027', name: 'Crédit client : qui doit quoi, depuis quand, et les relances' },
      { href: L.devises, kind: '2027', name: 'Client en France, service en Algérie : deux devises, taux figé' },
    ] },
  },
  en: {
    kind: 'Travel agency software · Algeria · 2027', title: "Travel agency software in Algeria (2027): each agent has a notebook, nobody knows what a customer still owes, a room sold twice, a passport expired at departure, one file per trip, the places, money on both sides, the margin",
    dek: "“Here, each agent keeps their files in a notebook and in WhatsApp conversations. A customer paid a deposit, and nobody can say what they still owe. We sold a room we no longer had, a passport was expiring before departure, and at the end of the season we do not know what each trip earned. Which software for a travel agency, and what exactly must it do?” Agency software keeps one file per trip sold: its travellers, its places, its money on both sides, its documents. The rest, reminders, alerts, margin, is read from the files.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Travel agency software', 'Trip file', 'Allotment', 'Customer and supplier schedules', 'Margin per file', 'Algeria 2027'],
    intro: [
      "**Short answer.** Travel agency software keeps **one file per trip sold**: travellers, services, places, payments and documents, in the same place, for the whole agency. Four mechanisms make the difference: **a single stock of places**, with the date on which unsold ones are handed back; **two schedules face to face**, the customer's and the suppliers'; **documents and their dates**, the passport first; **the margin per file**, known on the day of the sale. It does not replace the ticket booking tool: it files what has been sold. Eight weeks in the example, to finish before the high season.",
      "This page is for the manager of a travel agency, ticketing, package tours, groups, Umrah or receiving travellers in Algeria, and for the founder based in France who wants to sell stays to or from Algeria without losing track of the files. The definitions come from public sources: travel agency, tour operator, package tour, allotment, global distribution system, passenger name record, billing and settlement plan, voucher, accounts receivable, gross margin. The departure of 40 places, the amounts for 100 sold and the calendar are a constructed example. This page gives no prices and does not cover licences, currency rules, tax or visa formalities: see your adviser and the authorities concerned. Organising an Umrah season has its own [guide](" + L.omra + ").",
    ],
    sections: [
      { heading: "Notebook and WhatsApp, or agency software: six situations", body: [
        "The figure contrasts, over six situations, today's agency and the agency that keeps one file per trip.",
      ], visual: 'situations', after: [
        "**What an agency sells.** A travel agency provides travel and tourism-related services to the general public on behalf of accommodation or travel suppliers; it often receives commissions from those providers, or charges a fee to end users. So it sells what it does not produce: places with others, paid for by its customers, owed to its suppliers. Between the two there is only its memory, or a file. **The file.** Reservation systems have theirs: the passenger name record, a record that contains the itinerary for a passenger or a group of passengers travelling together. The agency needs its own, wider one: who is travelling, what was sold, what was paid, what is missing.",
        "**Why the notebook no longer holds.** As long as one agent sells ten trips a month, the notebook is enough. With three agents, group departures and payments in three instalments, each row of the figure becomes one incident a week. The surest sign: when a customer calls, the answer depends on who picks up.",
      ] },
      { heading: "Travel agency software, in five layers", body: [
        "The accented layer is the file.",
      ], visual: 'couches', after: [
        "**Beside the booking tool.** A global distribution system is a computerised network system that enables transactions between travel industry service providers, mainly airlines, hotels and car rental companies. That is where the ticket is booked. Agency software does not replace it: it receives what was booked and attaches it to the file. **Settling the tickets.** The billing and settlement plan is an electronic billing system designed to facilitate the flow of data and funds between travel agencies and airlines: what it claims must be found, ticket by ticket, in the files.",
        "**Entered once.** The traveller is entered once, with their passport; they then appear on the departure list, on the rooming list, on the receipt and on the voucher. **Prospects.** Before the file, there are the requests and the quotes left unanswered: that is the job of a [CRM](" + L.crm + "), which agency software can contain or feed.",
      ] },
      { heading: "Forty places, and the date they are handed back", body: [
        "The figure follows a departure of forty blocked places.",
      ], visual: 'places', after: [
        "**The trade's word.** An allotment designates a block of pre-negotiated carrier seats or hotel rooms. Some time before departure or check-in, any unsold seats or rooms may be released back to the supplier; that release period is negotiated as part of the allotment contract. Everything turns on that date. **Two mistakes.** Selling, after the date, a place that has been handed back. Or forgetting to hand back places that will not be sold, and owing them. In both cases, nobody looked at the calendar.",
        "**Holding a place.** Between “the customer is hesitating” and “the customer has paid”, the place is on option: held for them for a time, then confirmed or freed. That is the mechanism described in [the guide to booking with no double sale](" + L.creneau + "). **Overselling.** Selling more than you have is called overselling. A single stock, counted down at each sale, makes it impossible without a decision by the manager.",
      ] },
      { heading: "From the quote to the return, in six steps", body: [
        "The second step is accented: opening the file.",
      ], visual: 'parcours', after: [
        "**From quote to file.** A package tour comprises transport and accommodation sold together; whoever assembles it is a tour operator. Whether the agency assembles it or resells someone else's package, the quote lists the services, the price and how long it is valid. On the day of the deposit, the quote becomes a file, and the schedule is worked out by itself. **Documents.** For each traveller: the passport and its expiry date, the documents asked for, the ticket. The software does not know each country's entry rules; it does know how to compare two dates, and to show what is missing fifteen days before departure.",
        "**Departure.** The voucher is proof of a named customer's right to take a service at a specific time and place: it is issued from the file, like the rooming list sent to the hotel and the list of travellers given to the tour leader. **Warning in time.** Reminders of due dates, missing documents and meeting times go out through the channel the customer reads, as in [the guide to notifications](" + L.notifications + "). **Receiving in Algeria.** For an agency that welcomes travellers, tours and excursions, the same file works in the other direction, as in [the guide to Saharan tourism](" + L.saharien + ").",
      ] },
      { heading: "The money of one file: what comes in, what goes out", body: [
        "The figure shows the money of a group departure, for 100 sold.",
      ], visual: 'echeances', after: [
        "**Two schedules.** Accounts receivable are what customers owe for a service ordered and not yet paid for. In an agency, they have one peculiarity: facing each receivable there is a debt to a supplier, with its own date. The software keeps both, file by file, then adds them up: it is the only way to see, three weeks ahead, the week when the hotels must be paid before the balances have come in. **Chasing.** One reminder before the due date is worth ten calls after it; the mechanics are those of [the guide to customer credit](" + L.credit + ").",
        "**The margin.** Gross margin is the difference between revenue and the cost of what was sold, divided by revenue. Per file, it is known on the day of the sale: price sold, less services bought. It is then corrected for what the notebook never shows: the place handed back too late, the room given away, the ticket reissued. **Two currencies.** When the supplier is paid in a foreign currency and the customer pays in dinars, the margin depends on the rate retained on the day of the sale: the mechanism is described in [the guide to two collections and a fixed rate](" + L.devises + ").",
      ] },
      { heading: "Eight weeks before the high season, in 2027", body: [
        "Eight weeks in the example, the first to re-read ten real files.",
      ], visual: 'calendrier', after: [
        "**Before the season, not during it.** A tool is not installed in the middle of a month of departures. Eight weeks in the example: one to re-read ten real files with the agents, three for files and payments, then places, suppliers and documents. **Taking over.** Departures already sold are entered, and each balance is checked with the customer: that is when the gaps between notebooks come to light.",
        "**The first departure.** One whole departure is run in the tool, from quote to closing, before the others are put in. **What makes it hold.** One simple rule: what is not in the file does not exist. A receipt is given from the file, a place is sold from the stock, and every Sunday the manager reads the week's due dates, on both sides.",
      ], list: [
        "**What the manager receives**: one file per trip sold; a single stock of places with its release dates; each customer's schedule and each supplier's; the travellers' documents and their dates; the margin per file, per departure, per destination and per agent; cash three weeks ahead.",
        "**What the agency no longer does**: look for a balance in a notebook, sell a place that was handed back, find an expired passport at the airport, learn of a due date from the supplier's call, wait for the end of the season to know what a departure earned.",
        "**What is measured**: late balances and amount still owed, places sold, on option and released per departure, files with a missing document at fifteen days, planned and actual margin per file, cash dips over the coming three weeks.",
        "**What Symloop does**: re-reading ten real files with your agents, building or adapting the tool around the file, the stock of places, the two schedules, the documents, reminders to customers, taking over current files, then reading margin and cash, and, if you wish, online sales on the same stock.",
      ], faq: [
        { q: "Which software for a travel agency in Algeria?", a: "One that keeps a file per trip sold, with a single stock of places, the customer's and suppliers' schedules, the travellers' documents and the margin per file. Check that it handles your real products: ticketing, package tours, groups, Umrah, payments in instalments." },
        { q: "What must travel agency software do?", a: "Four things: say at any time what a customer has paid and still owes, stop the sale of a place you no longer have, flag the document or date that is missing before departure, and give the margin of each file. The rest, quotes, receipts, lists, follows from those four." },
        { q: "Do we need software if we already have a ticket booking tool?", a: "Yes. The booking tool sells the ticket; it follows neither the customer's deposit, nor the room, nor the passport, nor the margin. Agency software files around the ticket everything that makes the trip, and reconciles what the airline claims with what was sold." },
        { q: "How do you follow deposits and payments in instalments?", a: "With a schedule created on the day of the sale: amount and date of each payment, a receipt issued from the file, a reminder sent before the due date. At any time, the file shows what was paid, what is still owed and the next date." },
        { q: "How do you avoid selling the same place twice?", a: "With one stock of places for the whole agency, counted down at each sale, and an option that holds a customer's place for a time before confirming or freeing it. Two notebooks mean two stocks; two stocks mean a place sold twice." },
        { q: "How do you know the margin of a trip?", a: "Per file: the price sold, less the services bought, transport, accommodation, transfers, fees. It is known on the day of the sale, then corrected for the unexpected. Added up per departure and per destination, it tells which trips keep the agency alive." },
        { q: "Does the software handle groups and Umrah?", a: "It must: a group departure is a block of places, a list of travellers, a rooming list and staggered payments. Umrah adds its own steps and its own documents, described in the guide devoted to Umrah agencies." },
        { q: "Can we sell online with the same tool?", a: "Yes, if the site reads the same stock of places and creates the same file as an agent at the counter. A separate site, with its own list of places, recreates the notebook problem. Online payment is then added as one more way of collecting." },
        { q: "Off-the-shelf software or bespoke?", a: "Off-the-shelf software if your products are standard. A bespoke build if you sell groups, staggered payments or products that common software handles badly. In both cases, have ten real files played before deciding." },
        { q: "How long does it take to set up agency software?", a: "Eight weeks in this page's example: one to frame, three for files and payments, then places, suppliers, documents and taking over current files. To be finished before the high season, never during it." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "A block of places is a stock with a deadline." },
      { after: 4, text: "A file that earns money can be short of cash for five days." },
    ],
    cta: { eyebrow: "Tell us what you sell, how many agents and how many departures per season: we start by re-reading ten real files with you", title: "An agency where each agent has a notebook, balances nobody can find, a room sold twice, a supplier due date learned by phone, or a founder in France launching a travel offer with Algeria: we build the tool around the file", body: "One file per trip, a single stock of places, two schedules, documents and their dates, reminders to customers, margin per file, cash three weeks ahead, online sales on the same stock. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.omra, kind: '2027', name: 'Umrah agencies: pilgrim file, instalment payments, groups' },
      { href: L.creneau, kind: '2027', name: 'Online booking: never sell the same slot twice' },
      { href: L.credit, kind: '2027', name: 'Customer credit: who owes what, since when, and reminders' },
      { href: L.devises, kind: '2027', name: 'Customer in France, service in Algeria: two currencies, a fixed rate' },
    ] },
  },
  ar: {
    kind: 'برنامج وكالة السفر · الجزائر · 2027', title: "برنامج وكالة السفر في الجزائر (2027): لكل عون دفتره، لا أحد يعرف ما بقي على الزبون، غرفة بيعت مرتين، جواز انتهى عند الانطلاق، ملف لكل رحلة، الأماكن، المال من الجهتين، والهامش",
    dek: "«عندنا، كل عون يمسك ملفاته في دفتره وفي محادثات واتساب. زبون دفع تسبيقاً، ولا أحد يستطيع القول ما بقي عليه. بعنا غرفة لم تعد عندنا، جواز سفر كان ينتهي قبل الانطلاق، وفي آخر الموسم لا نعرف ما ربحته كل رحلة. أي برنامج لوكالة سفر، وماذا يجب أن يفعل بالضبط؟» برنامج الوكالة يمسك ملفاً لكل رحلة مباعة: مسافروها، أماكنها، مالها من الجهتين، ووثائقها. والباقي، التذكيرات والتنبيهات والهامش، يُقرأ من الملفات.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج وكالة السفر', 'ملف الرحلة', 'حصة الأماكن', 'آجال الزبون والمورّد', 'الهامش لكل ملف', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج وكالة السفر يمسك **ملفاً لكل رحلة مباعة**: المسافرون، الخدمات، الأماكن، المدفوعات، والوثائق، في مكان واحد، للوكالة كلها. وأربع آليات تصنع الفرق: **مخزون واحد للأماكن**، بتاريخ إرجاع غير المباعة؛ **جدولا آجال وجهاً لوجه**، جدول الزبون وجدول المورّدين؛ **الوثائق وتواريخها**، وجواز السفر أولها؛ و**الهامش لكل ملف**، يُعرف يوم البيع. ولا يعوّض أداة حجز التذاكر: هو يرتّب ما بيع. ثمانية أسابيع في المثال، تنتهي قبل الموسم العالي.",
      "هذه الصفحة موجَّهة إلى مسيّر وكالة سفر، تذاكر، رحلات منظَّمة، أفواج، عمرة، أو استقبال مسافرين في الجزائر، وإلى المؤسس المقيم في فرنسا الذي يريد بيع إقامات نحو الجزائر أو منها دون أن يضيع خيط الملفات. التعريفات آتية من مصادر علنية: وكالة السفر، منظِّم الرحلات، الرحلة الشاملة، حصة الأماكن، نظام التوزيع الشامل، ملف المسافر، خطة الفوترة والتسوية، وصل الخدمة، المستحَقات، والهامش الإجمالي. الرحلة ذات الأربعين مكاناً والمبالغ لكل 100 مباعة والرزنامة مثال مركَّب. هذه الصفحة لا تعطي أي سعر ولا تتناول الاعتمادات ولا قواعد الصرف ولا الجباية ولا إجراءات التأشيرة: راجعوا مستشاركم والسلطات المعنية. وتنظيم موسم عمرة له [دليله الخاص](" + L.omra + ").",
    ],
    sections: [
      { heading: "دفتر وواتساب، أم برنامج الوكالة: ست حالات", body: [
        "الشكل يقابل، في ست حالات، وكالة اليوم والوكالة التي تمسك ملفاً لكل رحلة.",
      ], visual: 'situations', after: [
        "**ما تبيعه الوكالة.** وكالة السفر تقدّم للعموم خدمات السفر والسياحة لحساب مورّدي الإيواء أو النقل؛ وتتلقى غالباً عمولات من هؤلاء المورّدين، أو تفوتر مصاريف لزبائنها. فهي تبيع إذن ما لا تنتجه: أماكن عند غيرها، يدفعها زبائنها، ومستحَقة لمورّديها. وبين الاثنين، ليس هناك إلا ذاكرتها، أو ملف. **الملف.** أنظمة الحجز لها ملفها: ملف المسافر، وهو تسجيل يحتوي مسار مسافر أو مجموعة مسافرين معاً. والوكالة تحتاج ملفها هي، وهو أوسع: من يسافر، ما بيع، ما دُفع، وما ينقص.",
        "**لماذا لم يعد الدفتر يصمد.** ما دام عون واحد يبيع عشر رحلات في الشهر، فالدفتر يكفي. ومع ثلاثة أعوان، رحلات جماعية، ومدفوعات على ثلاث دفعات، يصير كل سطر من الشكل حادثة في الأسبوع. والعلامة الأكيدة: حين يتصل زبون، يتوقف الجواب على من يرفع السماعة.",
      ] },
      { heading: "برنامج وكالة السفر، في خمس طبقات", body: [
        "الطبقة المبرزة هي الملف.",
      ], visual: 'couches', after: [
        "**بجانب أداة الحجز.** نظام التوزيع الشامل شبكة معلوماتية تسمح بالمعاملات بين مقدّمي خدمات السفر، شركات الطيران والفنادق ومؤجّري السيارات. وهناك تُحجز التذكرة. وبرنامج الوكالة لا يعوّضه: يستقبل ما حُجز ويربطه بالملف. **تسوية التذاكر.** خطة الفوترة والتسوية نظام فوترة إلكتروني مصمَّم لتسهيل تدفق البيانات والأموال بين الوكالات وشركات الطيران: وما يطالب به يجب أن يُوجد، تذكرة بعد تذكرة، في الملفات.",
        "**إدخال واحد.** المسافر يُدخَل مرة واحدة، مع جواز سفره؛ ثم يظهر في قائمة الرحلة، في قائمة الغرف، في الوصل، وفي وصل الخدمة. **الزبائن المحتمَلون.** قبل الملف، هناك الطلبات وعروض الأسعار التي بقيت دون جواب: وهو عمل برنامج " + I('CRM') + "، الموصوف في [دليل تسيير علاقة الزبائن](" + L.crm + ")، وقد يحتويه برنامج الوكالة أو يغذّيه.",
      ] },
      { heading: "أربعون مكاناً، وتاريخ إرجاعها", body: [
        "الشكل يتبع رحلة من أربعين مكاناً محجوزاً.",
      ], visual: 'places', after: [
        "**كلمة المهنة.** حصة الأماكن تعني مجموعة مقاعد أو غرف متفاوَض عليها مسبقاً عند ناقل أو فندق. وقبل الانطلاق أو الوصول بمدة، يمكن إرجاع الأماكن غير المباعة للمورّد؛ ومهلة الإرجاع هذه تُفاوَض في العقد. والرهان كله في هذا التاريخ. **خطآن.** بيع مكان، بعد التاريخ، وقد أُرجع. أو نسيان إرجاع أماكن لن تُباع، فتصير مستحَقة. وفي الحالتين، لا أحد نظر في الرزنامة.",
        "**إمساك مكان.** بين «الزبون متردّد» و«الزبون دفع»، المكان في الخيار: ممسوك له مدة، ثم يُؤكَّد أو يُحرَّر. وهي الآلية الموصوفة في [دليل الحجز دون بيع مزدوج](" + L.creneau + "). **البيع الزائد.** بيع أكثر مما عندكم يسمّى البيع الزائد. ومخزون واحد، ينقص عند كل بيع، يجعله مستحيلاً دون قرار من المسيّر.",
      ] },
      { heading: "من عرض السعر إلى العودة، في ست مراحل", body: [
        "المرحلة الثانية مبرزة: فتح الملف.",
      ], visual: 'parcours', after: [
        "**من عرض السعر إلى الملف.** الرحلة الشاملة تجمع نقلاً وإيواءً يُباعان معاً؛ ومن يجمعها منظِّم رحلات. وسواء جمعتها الوكالة أو أعادت بيع رحلة غيرها، فعرض السعر يسرد الخدمات، السعر، ومدة صلاحيته. ويوم التسبيق، يصير عرض السعر ملفاً، وجدول الآجال يُحسب وحده. **الوثائق.** لكل مسافر: جواز السفر وتاريخ انتهائه، الوثائق المطلوبة، والتذكرة. والبرنامج لا يعرف قواعد دخول كل بلد؛ لكنه يعرف مقارنة تاريخين، وعرض ما ينقص قبل خمسة عشر يوماً من الانطلاق.",
        "**الانطلاق.** وصل الخدمة إثبات لحق زبون مسمّى في تلقي خدمة، في وقت ومكان محدَّدين: يُصدَر من الملف، مثل قائمة الغرف المرسَلة للفندق وقائمة المسافرين المسلَّمة للمرافق. **التنبيه في وقته.** التذكير بالآجال، بالوثيقة الناقصة، وبساعة الموعد يُرسَل عبر القناة التي يقرؤها الزبون، حسب [دليل الإشعارات](" + L.notifications + "). **الاستقبال في الجزائر.** ولوكالة تستقبل مسافرين، جولات ورحلات، الملف نفسه يصلح في الاتجاه الآخر، كما في [دليل السياحة الصحراوية](" + L.saharien + ").",
      ] },
      { heading: "مال الملف الواحد: ما يدخل، وما يخرج", body: [
        "الشكل يُظهر مال رحلة جماعية، لكل 100 مباعة.",
      ], visual: 'echeances', after: [
        "**جدولا آجال.** المستحَقات هي ما على الزبائن مقابل خدمة مطلوبة لم تُدفع بعد. وفي الوكالة، لها خصوصية: أمام كل مستحَق، دين نحو مورّد، بتاريخه الخاص. والبرنامج يمسك الاثنين، ملفاً بعد ملف، ثم يجمعهما: وهي الطريقة الوحيدة لرؤية، قبل ثلاثة أسابيع، الأسبوع الذي يجب فيه الدفع للفنادق قبل قبض البواقي. **التذكير.** تذكير واحد قبل الأجل يساوي عشرة اتصالات بعده؛ والآلية هي آلية [دليل دين الزبائن](" + L.credit + ").",
        "**الهامش.** الهامش الإجمالي هو الفرق بين رقم الأعمال وكلفة ما بيع، مقسوماً على رقم الأعمال. ولكل ملف، يُعرف يوم البيع: السعر المباع، ناقص الخدمات المشتراة. ثم يُصحَّح بما لا يُظهره الدفتر أبداً: المكان المُرجَع متأخراً، الغرفة الممنوحة، والتذكرة المعاد إصدارها. **عملتان.** حين يُدفع للمورّد بالعملة الصعبة ويدفع الزبون بالدينار، يتوقف الهامش على السعر المعتمَد يوم البيع: والآلية موصوفة في [دليل القبضين والسعر المثبَّت](" + L.devises + ").",
      ] },
      { heading: "ثمانية أسابيع قبل الموسم العالي، سنة 2027", body: [
        "ثمانية أسابيع في المثال، والأول منها لمراجعة عشرة ملفات حقيقية.",
      ], visual: 'calendrier', after: [
        "**قبل الموسم، لا خلاله.** لا تُركَّب أداة في وسط شهر الرحلات. ثمانية أسابيع في المثال: أسبوع لمراجعة عشرة ملفات حقيقية مع الأعوان، ثلاثة للملفات والمدفوعات، ثم الأماكن، المورّدون، والوثائق. **الاسترجاع.** الرحلات المباعة سابقاً تُدخَل، وكل باقٍ يُراجَع مع الزبون: وهي اللحظة التي تُكتشف فيها الفوارق بين الدفاتر.",
        "**أول رحلة.** رحلة كاملة تُمسَك في الأداة، من عرض السعر إلى الإقفال، قبل إدخال البقية. **ما يجعله يصمد.** قاعدة بسيطة: ما ليس في الملف غير موجود. الوصل يُعطى من الملف، المكان يُباع من المخزون، والمسيّر يقرأ كل أحد آجال الأسبوع، من الجهتين.",
      ], list: [
        "**ما يستلمه المسيّر**: ملف لكل رحلة مباعة؛ مخزون واحد للأماكن بتواريخ إرجاعه؛ جدول آجال كل زبون وجدول كل مورّد؛ وثائق المسافرين وتواريخها؛ الهامش لكل ملف، رحلة، وجهة، وعون؛ والخزينة لثلاثة أسابيع قادمة.",
        "**ما لم تعد الوكالة تفعله**: البحث عن باقٍ في دفتر، بيع مكان أُرجع، اكتشاف جواز منتهٍ في المطار، معرفة أجل من اتصال المورّد، وانتظار آخر الموسم لمعرفة ما ربحته رحلة.",
        "**ما يُقاس**: البواقي المتأخرة والمبلغ الباقي، الأماكن المباعة والتي في الخيار والمُرجَعة لكل رحلة، الملفات التي تنقصها وثيقة قبل خمسة عشر يوماً، الهامش المتوقَّع والحقيقي لكل ملف، وفجوات الخزينة في الأسابيع الثلاثة القادمة.",
        "**ما تفعله Symloop**: مراجعة عشرة ملفات حقيقية مع أعوانكم، بناء الأداة أو تكييفها حول الملف، مخزون الأماكن، جدولا الآجال، الوثائق، التذكيرات للزبائن، استرجاع الملفات الجارية، ثم قراءة الهامش والخزينة، وإن أردتم، البيع عبر الإنترنت من المخزون نفسه.",
      ], faq: [
        { q: "أي برنامج لوكالة سفر في الجزائر؟", a: "الذي يمسك ملفاً لكل رحلة مباعة، بمخزون واحد للأماكن، جدولَي آجال الزبون والمورّدين، وثائق المسافرين، والهامش لكل ملف. وتحققوا أنه يسيّر منتجاتكم الحقيقية: التذاكر، الرحلات المنظَّمة، الأفواج، العمرة، والدفع على دفعات." },
        { q: "ماذا يجب أن يفعل برنامج وكالة السفر؟", a: "أربعة أشياء: أن يقول في أي وقت ما دفعه الزبون وما بقي عليه، أن يمنع بيع مكان لم يعد عندكم، أن ينبّه إلى الوثيقة أو التاريخ الناقص قبل الانطلاق، وأن يعطي هامش كل ملف. والباقي، عروض الأسعار والوصولات والقوائم، ينتج عن هذه الأربعة." },
        { q: "هل يلزم برنامج إذا كانت عندنا أداة حجز التذاكر؟", a: "نعم. أداة الحجز تبيع التذكرة؛ ولا تتابع تسبيق الزبون، ولا الغرفة، ولا جواز السفر، ولا الهامش. وبرنامج الوكالة يرتّب حول التذكرة كل ما يصنع الرحلة، ويقارب ما تطالب به شركة الطيران بما بيع." },
        { q: "كيف تُتابَع التسبيقات والدفع على دفعات؟", a: "بجدول آجال يُنشأ يوم البيع: مبلغ كل دفعة وتاريخها، وصل يُصدَر من الملف، وتذكير يُرسَل قبل الأجل. وفي أي وقت، يعرض الملف ما دُفع، ما بقي مستحَقاً، والتاريخ القادم." },
        { q: "كيف نتجنب بيع المكان نفسه مرتين؟", a: "بمخزون واحد للأماكن للوكالة كلها، ينقص عند كل بيع، وبخيار يمسك مكان الزبون مدة قبل تأكيده أو تحريره. دفتران يعنيان مخزونين؛ ومخزونان يعنيان مكاناً يُباع مرتين." },
        { q: "كيف يُعرف هامش رحلة؟", a: "لكل ملف: السعر المباع، ناقص الخدمات المشتراة، النقل والإيواء والتحويلات والمصاريف. يُعرف يوم البيع، ثم يُصحَّح بالطوارئ. ومجموعاً حسب الرحلة والوجهة، يقول أي الرحلات تعيش منها الوكالة." },
        { q: "هل يسيّر البرنامج الأفواج والعمرة؟", a: "يجب: الرحلة الجماعية حصة أماكن، قائمة مسافرين، قائمة غرف، ومدفوعات مقسَّطة. والعمرة تضيف مراحلها ووثائقها الخاصة، الموصوفة في الدليل المخصَّص لوكالات العمرة." },
        { q: "هل يمكن البيع عبر الإنترنت بالأداة نفسها؟", a: "نعم، إذا كان الموقع يقرأ مخزون الأماكن نفسه وينشئ الملف نفسه الذي ينشئه عون في الشباك. وموقع منفصل، بقائمة أماكنه، يعيد مشكل الدفتر. والدفع عبر الإنترنت يُضاف بعدها كطريقة قبض إضافية." },
        { q: "برنامج جاهز من السوق أم على المقاس؟", a: "برنامج جاهز إذا كانت منتجاتكم قياسية. وبناء على المقاس إذا كنتم تبيعون أفواجاً، مدفوعات مقسَّطة، أو منتجات تعالجها البرامج الشائعة بصعوبة. وفي الحالتين، جرّبوا عشرة ملفات حقيقية قبل القرار." },
        { q: "كم يلزم من وقت لوضع برنامج وكالة في الخدمة؟", a: "ثمانية أسابيع في مثال هذه الصفحة: أسبوع للتأطير، ثلاثة للملفات والمدفوعات، ثم الأماكن، المورّدون، الوثائق، واسترجاع الملفات الجارية. ويُنهى قبل الموسم العالي، لا خلاله أبداً." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "حصة الأماكن مخزون له أجل." },
      { after: 4, text: "ملف رابح قد ينقصه المال مدة خمسة أيام." },
    ],
    cta: { eyebrow: "قولوا لنا ماذا تبيعون، كم عوناً، وكم رحلة في الموسم: نبدأ بمراجعة عشرة ملفات حقيقية معكم", title: "وكالة لكل عون فيها دفتره، بواقٍ لا يجدها أحد، غرفة بيعت مرتين، أجل مورّد عُرف بالهاتف، أو مؤسس في فرنسا يطلق عرض رحلات مع الجزائر: نبني الأداة حول الملف", body: "ملف لكل رحلة، مخزون واحد للأماكن، جدولا آجال، الوثائق وتواريخها، التذكيرات للزبائن، الهامش لكل ملف، الخزينة لثلاثة أسابيع، والبيع عبر الإنترنت من المخزون نفسه. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.omra, kind: '2027', name: 'وكالة العمرة: ملف المعتمر، الدفع بالأقساط، والأفواج' },
      { href: L.creneau, kind: '2027', name: 'الحجز عبر الإنترنت: لا يُباع الموعد نفسه مرتين' },
      { href: L.credit, kind: '2027', name: 'دين الزبائن: من عليه ماذا، منذ متى، والتذكيرات' },
      { href: L.devises, kind: '2027', name: 'زبون في فرنسا وخدمة في الجزائر: عملتان وسعر مثبَّت' },
    ] },
  },
};

const KEYWORDS = "logiciel agence de voyage algérie 2027, logiciel agence de voyage, logiciel gestion agence de voyage algérie, application agence de voyage, logiciel billetterie agence de voyage, gestion des dossiers voyage, allotement, logiciel voyages organisés, travel agency software algeria 2027, tour operator software, برنامج وكالة السفر في الجزائر 2027, برنامج تسيير وكالة سياحة وأسفار, ملفات المسافرين";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
