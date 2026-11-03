import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/agence-omra-algerie-2027-dossier-pelerin-paiement-par-tranches-suivi-groupes.mjs';

const SLUG = 'agence-omra-algerie-2027-dossier-pelerin-paiement-par-tranches-suivi-groupes';
const FIGURES = ['journey', 'stack', 'suivi', 'risques', 'calendrier', 'models'];
const DATE = '2026-11-03';

const CONTENT = {
  fr: {
    kind: 'Agences de voyages · Omra · 2027', title: "Agence de Omra en Algérie en 2027 : dossier pèlerin, paiement par tranches, groupes et suivi jusqu'au retour, sans cahier ni WhatsApp.",
    dek: "Pour la saison 1448, l'Office national du pèlerinage et de la Omra a retenu 490 agences sur 768 candidates, et il rappelle les trois signes d'une arnaque : un prix très bas, des espèces sans reçu, une agence absente de la liste. Les agences retenues ont un autre problème : des centaines de dossiers, des tranches payées au comptoir, des groupes gérés dans WhatsApp et des familles qui appellent. Ce qu'un pèlerinage doit tenir à chaque moment, ce qu'il faut construire en premier, ce que coûte le suivi à la main, six risques et leur parade, la Omra offerte depuis la France, et un calendrier jusqu'à la saison 1449.",
    publishedAt: 'Novembre 2026', readTime: '11 min de lecture', author: 'Symloop', about: ['Agences de voyages', 'Omra', 'Paiement par tranches', 'Diaspora', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Pour une agence de Omra en Algérie en 2027, la pièce qui compte le plus n'est pas le site qui présente les offres, c'est **le dossier pèlerin et le paiement par tranches**. Un dossier par personne, avec les pièces, le contrat signé, le statut du visa et du vol, la chambrée et le groupe ; une tranche saisie à chaque paiement, en espèces, par carte CIB ou Edahabia, ou en euros depuis la France, avec un reçu numéroté envoyé par SMS et un solde visible. Autour : un espace où le pèlerin et sa famille voient le dossier et le programme, une application du guide qui fonctionne sans connexion à La Mecque, et un pointage à l'embarquement, à l'hôtel et au vol retour.",
      "Ce guide s'adresse aux agences agréées pour la Omra, aux organisateurs qui travaillent avec des agences partenaires, aux agences habilitées au Hadj, et au fondateur de la diaspora qui veut offrir la Omra à ses parents depuis la France. Il ne traite pas des règles d'agrément, qui relèvent de l'Office, ni des formalités saoudiennes de visa, qui changent d'une saison à l'autre ; il traite de ce que l'agence doit tenir, chaque jour, pour que ses pèlerins partent et reviennent sans accroc. Il prolonge ce que nous décrivons pour [les agences de tourisme saharien](/blog/agence-tourisme-saharien-algerie-2027-reservation-en-ligne-circuits-djanet/) et pour [le logiciel d'agence de voyages](/blog/logiciel-agence-voyage-gds-setif-est-algerien-2026/).",
    ],
    sections: [
      { heading: 'Ce que disent les chiffres de la saison 1448', body: [
        "Selon Algérie360, qui reprend le 17 octobre 2026 le bilan de l'Office national du pèlerinage et de la Omra, **768 agences ont déposé un dossier pour la saison 1448 (2026-2027), dont 69 qui n'avaient jamais organisé de Omra** ; l'Office a examiné 598 dossiers, en a retenu **490** et en a rejeté 108. La saison précédente, la liste définitive publiée en décembre 2025 comptait **602 agences**, et l'Office en annonçait 552 pour 2025. L'Office n'a pas publié de nombre de pèlerins pour la saison : nous ne le citons donc pas.",
        "Le cadre s'est resserré. Les règles annoncées en mai 2025 pour la saison 2026, rapportées par Algérie360, imposent aux agences un **contrat de voyage signé avec chaque pèlerin, accessible sur une plateforme officielle avant le départ**, des guides certifiés par le ministère des Affaires religieuses, la déclaration des programmes et de leurs coûts, au plus cinq contrats de sous-traitance par agence agréée, des rapports mensuels et annuels, et l'obligation de s'assurer que les pèlerins quittent le territoire saoudien à la fin du programme. Pour la Omra 2026, l'Office avait fixé le **3 avril 2026 comme dernier jour d'entrée et le 18 avril comme dernier jour de sortie**. Les sanctions prévues vont jusqu'au retrait de l'agrément et deux ans d'interdiction.",
        "Côté arnaques, l'Office met en garde en octobre 2026 contre les fausses pages, les faux appels demandant un paiement électronique, et les usurpations : fin septembre 2026, la police de Blida a arrêté trois personnes qui se faisaient passer pour une agence agréée. Pour le Hadj 2026, **41 300 pèlerins algériens** sont partis sur 144 vols depuis douze aéroports, inscrits et payés sur la plateforme Bawabet El Hadj par carte CIB ou Edahabia. **Le secteur a donc déjà basculé vers le dossier numérique et le paiement tracé du côté de l'État ; ce guide décrit comment une agence fait de même de son côté.**",
      ] },
      { heading: 'Un pèlerinage qui tient, en six moments', body: [
        "Le système doit tenir chacun de ces six moments. Les trois premiers se jouent à l'agence ; les trois suivants, à distance.",
      ], visual: 'journey', after: [
        "**La demande** se note avec la période, l'hôtel, sa distance au Haram et un prix écrit, parce que c'est sur ces quatre points que naissent les litiges. **Le dossier** rassemble le passeport, les photos, les vaccins, le mahram le cas échéant, et le contrat signé que la réglementation exige avant le départ. **Le paiement** se fait par tranches, chacune saisie avec son mode, son reçu numéroté et le solde restant.",
        "**Le visa et le vol** ont un statut par pèlerin, avec les pièces manquantes et des alertes avant les dates limites d'entrée et de sortie. **Sur place**, le pèlerin a son programme, le numéro du guide et la carte de l'hôtel dans sa poche, même sans connexion. **Le retour**, enfin, pointe chaque pèlerin au vol, confirme la sortie du territoire, recueille un avis et propose le prochain départ, souvent le Ramadan suivant.",
      ] },
      { heading: "Ce qu'il faut construire : les dossiers et les paiements d'abord", body: [
        "La tentation est de commencer par un site qui présente les offres et un formulaire de contact. C'est utile, mais une agence vit de dossiers complets et de soldes encaissés.",
      ], visual: 'stack', after: [
        "**Les dossiers et les groupes** sont la colonne vertébrale : un dossier par pèlerin, un groupe par départ, les chambrées et les listes de vol qui en découlent, et un tableau qui montre d'un coup d'œil qui est complet, qui attend une pièce, qui a un visa. **Les paiements par tranches** suivent la logique que nous détaillons pour [la caisse d'un commerce](/blog/caisse-commerce-algerie-2027-paiement-qr-code-carte-tpe-rapprochement/) : chaque tranche est saisie avec son mode, espèces comptées au comptoir, carte CIB ou Edahabia, virement, ou euros depuis la France ; le reçu part par SMS, le solde est visible par le pèlerin, et les relances sont automatiques avant chaque échéance.",
        "**Les contrats et déclarations** produisent, depuis le dossier, le contrat signé, les listes à déclarer et les rapports mensuels, au lieu de les retaper. **L'application du guide**, hors ligne, porte le programme du jour, les points de rendez-vous, la carte de l'hôtel en arabe et un bouton d'urgence. **Le pointage** se fait à l'embarquement, au bus, à l'hôtel et au vol retour : c'est ce qui permet de confirmer la sortie et de prévenir une famille. Passeports et données de santé sont protégés selon la [loi 18-07](/blog/loi-18-07-protection-donnees-personnelles-algerie-2026/) et réservés au personnel autorisé.",
      ] },
      { heading: 'Ce que coûte le suivi à la main', body: [
        "Un exemple sur des hypothèses, à refaire avec vos chiffres : une agence qui envoie 600 pèlerins par saison, en quinze départs de quarante.",
      ], visual: 'suivi', after: [
        "Huit contacts par pèlerin, pièce manquante, tranche à régler, date de vol, heure de rendez-vous, hôtel, retour, à cinq minutes chacun : **400 heures de téléphone et de WhatsApp sur la saison**, soit deux personnes à plein temps pendant les trois mois les plus chargés. Quand le pèlerin voit son dossier, ses reçus et son programme sur son téléphone, et que les rappels partent seuls, il reste environ deux contacts : **100 heures, et 300 heures rendues à la vente et à l'encadrement des groupes**. Nous ne connaissons pas de mesure publique de ce temps dans les agences algériennes ; ces chiffres sont des hypothèses pour montrer l'ordre de grandeur.",
        "L'autre coût est financier et se mesure sur les soldes : une tranche payée en espèces et notée sur un cahier se conteste, se perd ou s'oublie. Sur 600 dossiers, quelques soldes incomplets au départ suffisent à effacer la marge de plusieurs pèlerins. La vérification est simple : comptez, sur votre dernier départ, les appels reçus la semaine précédant le vol et les soldes réglés le jour même au comptoir.",
      ] },
      { heading: 'Six risques, six parades', body: [
        "Les risques d'une saison de Omra sont connus ; l'Office les rappelle chaque année. Le système répond à chacun.",
      ], visual: 'risques', after: [
        "**L'agence usurpée** est le risque qui touche d'abord les pèlerins, mais il retombe sur l'agence : une fausse page qui porte son nom, un faux appel qui demande un acompte. Un espace pèlerin officiel, des reçus numérotés et l'agrément affiché sur chaque document font la différence entre l'agence et son imitation. **Les espèces sans reçu** sont le risque le plus fréquent à l'intérieur de l'agence ; la parade est une saisie immédiate de chaque tranche et un reçu qui part par SMS avant que le pèlerin ait quitté le comptoir.",
        "**Le visa ou le vol en retard** se découvre souvent la veille du départ ; un statut par pèlerin et des alertes avant les dates limites le révèlent des semaines plus tôt. **L'hôtel différent du contrat** est le litige le plus coûteux en réputation ; le nom, la catégorie et la distance au Haram écrits au contrat, avec des photos au dossier, ferment la discussion. **Le pèlerin perdu** et **le dépassement de séjour** sont les deux risques qui se jouent sur place : une application hors ligne avec la carte de l'hôtel et le numéro du guide, puis une liste de retour pointée au vol, avec la famille prévenue, les couvrent.",
      ] },
      { heading: 'La Omra offerte depuis la France', body: [
        "Offrir la Omra à ses parents est l'un des gestes les plus courants de la diaspora. Le besoin est précis : choisir une agence agréée et une date depuis la France, payer en euros, et suivre le départ et le retour de parents âgés sans les appeler dix fois par jour.",
        "Le mécanisme rejoint celui que nous décrivons pour [l'équivalent de Booking](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/) : un paiement par carte en euros crédité au dossier d'une personne précise, un reçu pour celui qui paie, une confirmation pour celui qui part, puis un espace famille qui montre le vol, l'hôtel et le pointage au retour. L'encaissement en devises se règle avec la banque de l'agence avant d'ouvrir ce service. Pour une agence, c'est une clientèle qui réserve tôt, paie en entier et revient ; pour un fondateur de la diaspora, c'est une porte d'entrée naturelle vers le marché, à condition de travailler avec des agences figurant sur la liste de l'Office. Nous détaillons cette façon de lancer un projet depuis la France dans [le calendrier des quatre voyages](/blog/lancer-startup-en-algerie-depuis-la-france-2027-calendrier-quatre-voyages/).",
      ] },
      { heading: 'Quel modèle construire', body: [
        "Six modèles possibles, de l'agence qui équipe son comptoir au comparateur d'offres.",
      ], visual: 'models', after: [
        "**Une agence qui fonctionne déjà** est le point de départ le plus sûr : les dossiers existent, les appels se comptent, et l'effet se voit sur le premier départ. **L'organisateur qui travaille avec des agences partenaires**, dans la limite des cinq contrats de sous-traitance prévus, a besoin d'un portail où chaque partenaire saisit ses dossiers et voit ses quotas, et d'une responsabilité claire sur ce qui est saisi par d'autres. **L'agence habilitée au Hadj** garde les mêmes dossiers avec un calendrier imposé et des rapports à produire.",
        "**Le réseau multi-wilayas** consolide ses chiffres et mutualise ses groupes, au prix de tarifs et d'hôtels différents par agence. **L'offre diaspora** est la plus porteuse à court terme et la plus simple à ajouter sur un système existant. **Le comparateur d'offres** est tentant mais exige de vérifier sans cesse les agréments et les hôtels réels ; c'est un produit à part, proche de ce que nous décrivons dans [lancer un SaaS en Algérie en 2027](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/).",
      ] },
      { heading: "Le calendrier jusqu'à la saison 1449", body: [
        "Une douzaine de semaines entre le cadrage et un pilote sur un départ de janvier, pour arriver prêt au Ramadan.",
      ], visual: 'calendrier', after: [
        "**Novembre : le cadrage**, le dossier type, les tranches, les chambrées et le contrat. **Novembre à janvier : les dossiers, les groupes et les paiements**, puis **l'espace pèlerin et les SMS**. **Janvier : le pilote sur un vrai départ**, avec les appels comptés avant et après. **Février et mars : le Ramadan 1448**, autour du 8 février au 9 mars 2027 selon l'observation du croissant, quand les groupes sont les plus nombreux.",
        "**Mai : le Hadj 2027** pour les agences habilitées, puis **la saison 1449** à partir de l'été, avec les mêmes dossiers et de nouveaux départs. Ces durées sont cohérentes avec celles que nous détaillons dans [combien de temps pour développer une application ou une plateforme](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/) ; l'application du guide et l'espace famille peuvent suivre après le Ramadan.",
      ] },
      { heading: 'Ce qui fait échouer ce type de projet', body: [], list: [
        "**Commencer par le site des offres.** Un beau site qui envoie vers un cahier ne change rien au départ.",
        "**Un dossier sans statut.** Si l'on ne voit pas qui est complet et qui attend une pièce, la veille du départ reste une loterie.",
        "**Des tranches hors système.** Une tranche notée à part n'existe pas pour le solde ni pour le reçu.",
        "**Une application du guide qui a besoin de réseau.** À La Mecque, le programme et la carte de l'hôtel doivent s'ouvrir sans connexion.",
        "**Oublier la famille.** Le père part, la fille appelle : un espace famille évite la moitié des appels.",
        "**Des passeports mal protégés.** Copies de passeports et données de santé réservées au personnel autorisé, sur un serveur au nom de l'agence.",
        "**Les comptes au nom du développeur.** Serveur, domaine, SMS et compte de paiement au nom de l'agence dès la première semaine.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Combien d'agences sont autorisées à organiser la Omra en Algérie pour la saison 1448 ?", a: "Selon le bilan de l'Office national du pèlerinage et de la Omra rapporté par Algérie360 le 17 octobre 2026, 490 agences figurent sur la liste préliminaire, sur 768 candidates et 598 dossiers examinés. La saison précédente, la liste définitive comptait 602 agences. Vérifiez toujours qu'une agence figure sur la liste de l'Office avant de payer." },
        { q: "Pourquoi commencer par les dossiers et les paiements plutôt que par le site ?", a: "Parce qu'une agence perd de l'argent et de la réputation sur des dossiers incomplets, des tranches non tracées et des litiges sur l'hôtel, pas sur l'absence d'un site. Le site et l'espace pèlerin se branchent sur des dossiers et des paiements déjà tenus." },
        { q: "Un pèlerin peut-il payer par tranches avec sa carte Edahabia ou CIB ?", a: "Le paiement par carte en ligne est possible via les plateformes agréées, tranche par tranche, et chaque paiement, même en espèces au comptoir, doit être saisi avec un reçu numéroté. Le système montre au pèlerin son solde et lui rappelle les échéances." },
        { q: "Une famille en France peut-elle payer la Omra de ses parents ?", a: "Oui, si l'agence accepte un paiement par carte en euros crédité au dossier d'une personne précise, avec un reçu pour celui qui paie et une confirmation pour celui qui part. L'encaissement en devises se règle avec la banque de l'agence avant d'ouvrir ce service." },
        { q: "L'application du guide fonctionne-t-elle sans connexion à La Mecque ?", a: "Elle doit. Le programme du jour, les points de rendez-vous, la carte de l'hôtel en arabe et le numéro du guide sont stockés sur le téléphone et se synchronisent dès qu'une connexion revient. Nous détaillons ces choix dans [créer une application mobile en 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/)." },
        { q: "Combien de temps pour être prêt avant le Ramadan 2027 ?", a: "Environ douze semaines entre le cadrage et un pilote sur un départ de janvier, avec les dossiers, les groupes, les paiements et l'espace pèlerin. L'application du guide et l'espace famille peuvent suivre après le Ramadan." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Une agence de Omra vit de dossiers complets à temps et de soldes encaissés en entier ; le reste se branche dessus." },
      { after: 3, text: "Quatre cents heures de téléphone par saison, c'est deux personnes qui ne vendent pas pendant trois mois." },
    ],
    cta: { eyebrow: 'Décrivez votre agence', title: "Agence de Omra, organisateur avec des partenaires, agence habilitée au Hadj ou offre diaspora à lancer : le nombre de départs et de pèlerins par saison, comment vous tenez les dossiers et les paiements aujourd'hui, et la date visée. Nous vous rendons le périmètre, le calendrier et le prix total, écrits, avant de commencer.", body: "Symloop construit des systèmes de gestion de dossiers et de groupes, des paiements par tranches avec reçus, des espaces pèlerin et famille, des applications hors ligne et des tableaux de bord pour les agences de voyages algériennes, en arabe, en français et en anglais. Ingénieurs seniors à Alger et Sétif, prix total et calendrier écrits, serveur et données à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/agence-tourisme-saharien-algerie-2027-reservation-en-ligne-circuits-djanet/', kind: '2027', name: 'Agence de tourisme saharien en 2027' },
      { href: '/blog/logiciel-agence-voyage-gds-setif-est-algerien-2026/', kind: 'Agences', name: "Logiciel d'agence de voyages et GDS" },
      { href: '/blog/caisse-commerce-algerie-2027-paiement-qr-code-carte-tpe-rapprochement/', kind: '2027', name: 'Encaisser QR, carte et espèces en 2027' },
      { href: '/blog/lancer-startup-en-algerie-depuis-la-france-2027-calendrier-quatre-voyages/', kind: 'Diaspora', name: 'Lancer un projet en Algérie depuis la France en 2027' },
    ] },
  },
  en: {
    kind: 'Travel agencies · Umrah · 2027', title: 'Umrah agencies in Algeria in 2027: pilgrim file, instalment payments, groups and follow-up until the return, without notebooks or WhatsApp.',
    dek: "For season 1448 the National Office for Hajj and Umrah shortlisted 490 agencies out of 768 applicants, and it repeats the three signs of a scam: a very low price, cash without a receipt, an agency missing from the list. The shortlisted agencies have another problem: hundreds of files, instalments paid at the counter, groups run in WhatsApp and families who call. What a pilgrimage must hold at each moment, what to build first, what hand-kept follow-up costs, six risks and their counters, the Umrah paid from France, and a calendar to season 1449.",
    publishedAt: 'November 2026', readTime: '11 min read', author: 'Symloop', about: ['Travel agencies', 'Umrah', 'Instalment payments', 'Diaspora', 'Algeria 2027'],
    intro: [
      "**Short answer.** For an Umrah agency in Algeria in 2027, the piece that matters most is not the website presenting the offers, it is **the pilgrim file and instalment payments**. One file per person, with the documents, the signed contract, visa and flight status, room sharing and group; one instalment entered at each payment, in cash, by CIB or Edahabia card, or in euros from France, with a numbered receipt sent by SMS and a visible balance. Around it: a space where the pilgrim and their family see the file and the programme, a guide app that works without a connection in Mecca, and a roll call at boarding, at the hotel and on the return flight.",
      "This guide is written for agencies licensed for Umrah, organisers working with partner agencies, agencies licensed for Hajj, and the diaspora founder who wants to pay for their parents’ Umrah from France. It does not cover licensing rules, which belong to the Office, nor Saudi visa formalities, which change from one season to the next; it covers what the agency must hold, every day, so that its pilgrims leave and return without a hitch. It extends what we describe for [Saharan tour agencies](/blog/agence-tourisme-saharien-algerie-2027-reservation-en-ligne-circuits-djanet/) and for [travel agency software](/blog/logiciel-agence-voyage-gds-setif-est-algerien-2026/).",
    ],
    sections: [
      { heading: 'What the season 1448 figures say', body: [
        "According to Algérie360, reporting the National Office for Hajj and Umrah’s review on 17 October 2026, **768 agencies applied for season 1448 (2026-2027), including 69 that had never organised an Umrah**; the Office examined 598 files, shortlisted **490** and rejected 108. The previous season’s final list, published in December 2025, had **602 agencies**, and the Office announced 552 for 2025. The Office has not published a pilgrim count for the season, so we do not quote one.",
        "The framework has tightened. The rules announced in May 2025 for the 2026 season, reported by Algérie360, require agencies to have a **travel contract signed with each pilgrim, available on an official platform before departure**, guides certified by the Ministry of Religious Affairs, declaration of programmes and their costs, at most five subcontracting contracts per licensed agency, monthly and annual reports, and the obligation to ensure pilgrims leave Saudi territory at the end of the programme. For Umrah 2026 the Office set **3 April 2026 as the last day of entry and 18 April as the last day of exit**. Sanctions go as far as licence withdrawal and a two-year ban.",
        "On scams, the Office warned in October 2026 against fake pages, fake calls requesting electronic payment, and impersonation: in late September 2026, Blida police arrested three people posing as a licensed agency. For Hajj 2026, **41,300 Algerian pilgrims** left on 144 flights from twelve airports, registered and paid on the Bawabet El Hadj platform by CIB or Edahabia card. **The sector has therefore already moved to digital files and traced payment on the State’s side; this guide describes how an agency does the same on its own side.**",
      ] },
      { heading: 'A pilgrimage that holds, in six moments', body: [
        "The system has to hold each of these six moments. The first three happen at the agency; the next three, at a distance.",
      ], visual: 'journey', after: [
        "**The request** records the period, the hotel, its distance to the Haram and a written price, because those four points are where disputes are born. **The file** gathers the passport, photos, vaccines, the mahram where relevant, and the signed contract the regulations require before departure. **Payment** is made in instalments, each entered with its method, its numbered receipt and the remaining balance.",
        "**Visa and flight** have a status per pilgrim, with missing documents and alerts before the entry and exit deadlines. **On site**, the pilgrim has the programme, the guide’s number and the hotel card in their pocket, even without a connection. **The return**, finally, ticks each pilgrim onto the flight, confirms exit from the territory, collects a review and offers the next departure, often the following Ramadan.",
      ] },
      { heading: 'What to build: files and payments first', body: [
        "The temptation is to start with a website presenting the offers and a contact form. It is useful, but an agency lives on complete files and collected balances.",
      ], visual: 'stack', after: [
        "**Files and groups** are the backbone: one file per pilgrim, one group per departure, the room sharing and flight lists that follow from them, and a board that shows at a glance who is complete, who is waiting for a document, who has a visa. **Instalment payments** follow the logic we set out for [a retailer’s till](/blog/caisse-commerce-algerie-2027-paiement-qr-code-carte-tpe-rapprochement/): each instalment is entered with its method, cash counted at the counter, CIB or Edahabia card, transfer, or euros from France; the receipt goes by SMS, the balance is visible to the pilgrim, and reminders are automatic before each due date.",
        "**Contracts and declarations** produce, from the file, the signed contract, the lists to declare and the monthly reports, instead of retyping them. **The guide app**, offline, carries the day’s programme, meeting points, the hotel card in Arabic and an emergency button. **Roll call** happens at boarding, on the bus, at the hotel and on the return flight: that is what makes it possible to confirm exit and inform a family. Passports and health data are protected under [law 18-07](/blog/loi-18-07-protection-donnees-personnelles-algerie-2026/) and restricted to authorised staff.",
      ] },
      { heading: 'What hand-kept follow-up costs', body: [
        "An example on assumptions, to redo with your figures: an agency sending 600 pilgrims a season, in fifteen departures of forty.",
      ], visual: 'suivi', after: [
        "Eight contacts per pilgrim, missing document, instalment due, flight date, meeting time, hotel, return, at five minutes each: **400 hours of phone and WhatsApp over the season**, two full-time people for the three busiest months. When the pilgrim sees their file, receipts and programme on their phone, and reminders go out on their own, about two contacts remain: **100 hours, and 300 hours given back to sales and to looking after groups**. We know of no public measurement of this time in Algerian agencies; these figures are assumptions to show the order of magnitude.",
        "The other cost is financial and shows in balances: an instalment paid in cash and noted in a notebook gets disputed, lost or forgotten. Over 600 files, a few incomplete balances at departure are enough to wipe out the margin on several pilgrims. The check is simple: on your last departure, count the calls received in the week before the flight and the balances settled at the counter on the day.",
      ] },
      { heading: 'Six risks, six counters', body: [
        "The risks of an Umrah season are well known; the Office repeats them every year. The system answers each one.",
      ], visual: 'risques', after: [
        "**The impersonated agency** is the risk that hits pilgrims first, but it lands on the agency: a fake page carrying its name, a fake call asking for a deposit. An official pilgrim space, numbered receipts and the licence displayed on every document make the difference between the agency and its imitation. **Cash without a receipt** is the most frequent risk inside the agency; the counter is immediate entry of each instalment and a receipt that goes by SMS before the pilgrim has left the counter.",
        "**A late visa or flight** is usually discovered the day before departure; a status per pilgrim and alerts before the deadlines reveal it weeks earlier. **A hotel not as contracted** is the costliest dispute in reputation; the name, category and distance to the Haram written in the contract, with photos on file, close the discussion. **The lost pilgrim** and **the overstay** are the two risks that play out on site: an offline app with the hotel card and the guide’s number, then a return list ticked at the flight, with the family informed, cover them.",
      ] },
      { heading: 'The Umrah paid from France', body: [
        "Paying for their parents’ Umrah is one of the most common gestures of the diaspora. The need is precise: choose a licensed agency and a date from France, pay in euros, and follow elderly parents’ departure and return without calling them ten times a day.",
        "The mechanism matches the one we describe for [the Booking of Algeria](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/): a euro card payment credited to a specific person’s file, a receipt for the payer, a confirmation for the traveller, then a family space showing the flight, the hotel and the roll call on return. Receiving foreign currency is settled with the agency’s bank before opening this service. For an agency, it is a clientele that books early, pays in full and returns; for a diaspora founder, it is a natural way into the market, provided they work with agencies on the Office’s list. We detail this way of launching a project from France in [the four-trip calendar](/blog/lancer-startup-en-algerie-depuis-la-france-2027-calendrier-quatre-voyages/).",
      ] },
      { heading: 'Which model to build', body: [
        "Six possible models, from the agency equipping its counter to the offer comparison site.",
      ], visual: 'models', after: [
        "**An agency already operating** is the safest starting point: the files exist, the calls can be counted, and the effect shows on the first departure. **The organiser working with partner agencies**, within the five subcontracting contracts allowed, needs a portal where each partner enters its files and sees its quotas, and clear liability for what is entered by others. **The agency licensed for Hajj** keeps the same files with an imposed calendar and reports to produce.",
        "**The multi-wilaya network** consolidates its figures and pools its groups, at the price of different rates and hotels per agency. **The diaspora offer** is the most promising in the short term and the simplest to add to an existing system. **The offer comparison site** is tempting but requires constant checking of licences and real hotels; it is a separate product, close to what we describe in [launching a SaaS in Algeria in 2027](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/).",
      ] },
      { heading: 'The calendar to season 1449', body: [
        "About twelve weeks between scoping and a pilot on a January departure, to arrive ready for Ramadan.",
      ], visual: 'calendrier', after: [
        "**November: scoping**, the model file, instalments, room sharing and the contract. **November to January: files, groups and payments**, then **the pilgrim space and SMS**. **January: the pilot on a real departure**, with calls counted before and after. **February and March: Ramadan 1448**, around 8 February to 9 March 2027 depending on the sighting of the crescent, when groups are largest.",
        "**May: Hajj 2027** for licensed agencies, then **season 1449** from the summer, with the same files and new departures. These durations are consistent with those we set out in [how long it takes to build an app or platform](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/); the guide app and the family space can follow after Ramadan.",
      ] },
      { heading: 'What makes this kind of project fail', body: [], list: [
        "**Starting with the offers website.** A handsome site that feeds a notebook changes nothing at departure.",
        "**A file without a status.** If you cannot see who is complete and who is waiting for a document, the day before departure stays a lottery.",
        "**Instalments outside the system.** An instalment noted elsewhere does not exist for the balance or the receipt.",
        "**A guide app that needs a network.** In Mecca, the programme and the hotel card must open without a connection.",
        "**Forgetting the family.** The father leaves, the daughter calls: a family space avoids half the calls.",
        "**Poorly protected passports.** Passport copies and health data restricted to authorised staff, on a server in the agency’s name.",
        "**Accounts in the developer’s name.** Server, domain, SMS and payment account in the agency’s name from the first week.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'How many agencies are authorised to organise Umrah in Algeria for season 1448?', a: "According to the National Office for Hajj and Umrah’s review reported by Algérie360 on 17 October 2026, 490 agencies are on the preliminary list, out of 768 applicants and 598 files examined. The previous season’s final list had 602 agencies. Always check that an agency is on the Office’s list before paying." },
        { q: 'Why start with files and payments rather than the website?', a: "Because an agency loses money and reputation on incomplete files, untraced instalments and hotel disputes, not on the absence of a website. The website and the pilgrim space plug into files and payments that are already kept." },
        { q: 'Can a pilgrim pay in instalments with an Edahabia or CIB card?', a: "Online card payment is possible through the approved platforms, instalment by instalment, and every payment, even cash at the counter, must be entered with a numbered receipt. The system shows the pilgrim their balance and reminds them of due dates." },
        { q: 'Can a family in France pay for their parents’ Umrah?', a: "Yes, if the agency accepts a euro card payment credited to a specific person’s file, with a receipt for the payer and a confirmation for the traveller. Receiving foreign currency is settled with the agency’s bank before opening this service." },
        { q: 'Does the guide app work without a connection in Mecca?', a: "It must. The day’s programme, meeting points, the hotel card in Arabic and the guide’s number are stored on the phone and sync as soon as a connection returns. We cover these choices in [building a mobile app in 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/)." },
        { q: 'How long to be ready before Ramadan 2027?', a: "About twelve weeks between scoping and a pilot on a January departure, with files, groups, payments and the pilgrim space. The guide app and the family space can follow after Ramadan." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'An Umrah agency lives on complete files on time and balances collected in full; everything else plugs into that.' },
      { after: 3, text: 'Four hundred hours of phone a season is two people not selling for three months.' },
    ],
    cta: { eyebrow: 'Tell us about your agency', title: 'Umrah agency, organiser with partners, agency licensed for Hajj or diaspora offer to launch: the number of departures and pilgrims per season, how you keep files and payments today, and the target date. We send back the scope, the calendar and the total price, in writing, before we start.', body: 'Symloop builds file and group management systems, instalment payments with receipts, pilgrim and family spaces, offline apps and dashboards for Algerian travel agencies, in Arabic, French and English. Senior engineers in Algiers and Sétif, total price and calendar in writing, server and data in your name.' },
    related: { label: 'Read next', items: [
      { href: '/blog/agence-tourisme-saharien-algerie-2027-reservation-en-ligne-circuits-djanet/', kind: '2027', name: 'Saharan tour agencies in 2027' },
      { href: '/blog/logiciel-agence-voyage-gds-setif-est-algerien-2026/', kind: 'Agencies', name: 'Travel agency software and GDS' },
      { href: '/blog/caisse-commerce-algerie-2027-paiement-qr-code-carte-tpe-rapprochement/', kind: '2027', name: 'Taking QR, card and cash payments in 2027' },
      { href: '/blog/lancer-startup-en-algerie-depuis-la-france-2027-calendrier-quatre-voyages/', kind: 'Diaspora', name: 'Launching a project in Algeria from France in 2027' },
    ] },
  },
  ar: {
    kind: 'وكالات السفر · العمرة · 2027', title: 'وكالة العمرة في الجزائر سنة 2027: ملف المعتمر، الدفع بالأقساط، الأفواج والمتابعة حتى العودة، بلا دفتر ولا واتساب.',
    dek: 'لموسم 1448 قبل الديوان الوطني للحج والعمرة 490 وكالة من أصل 768 مترشحة، ويذكّر بعلامات النصب الثلاث: سعر منخفض جداً، نقد بلا وصل، وكالة غائبة عن القائمة. وللوكالات المقبولة مشكلة أخرى: مئات الملفات، أقساط تُدفع في الشباك، أفواج تُسيَّر في واتساب، وعائلات تتصل. ما يجب أن تصمد عنده العمرة في كل لحظة، وما يُبنى أولاً، وكم تكلّف المتابعة اليدوية، وستة مخاطر وردودها، والعمرة المدفوعة من فرنسا، وجدول زمني حتى موسم 1449.',
    publishedAt: 'نوفمبر 2026', readTime: '11 دقيقة قراءة', author: 'Symloop', about: ['وكالات السفر', 'العمرة', 'الدفع بالأقساط', 'الجالية', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** بالنسبة لوكالة عمرة في الجزائر سنة 2027، القطعة الأهم ليست الموقع الذي يعرض العروض، بل **ملف المعتمر والدفع بالأقساط**. ملف لكل شخص، بالوثائق والعقد الموقَّع وحالة التأشيرة والرحلة وتوزيع الغرف والفوج؛ وقسط يُسجَّل عند كل دفعة، نقداً أو ببطاقة CIB أو الذهبية أو باليورو من فرنسا، مع وصل مرقَّم يُرسل برسالة قصيرة ورصيد ظاهر. وحوله: فضاء يرى فيه المعتمر وعائلته الملف والبرنامج، وتطبيق للمرشد يعمل دون اتصال في مكة، وتفقّد عند الصعود وفي الفندق وفي رحلة العودة.",
      "هذا الدليل موجّه للوكالات المعتمدة للعمرة، وللمنظِّمين الذين يعملون مع وكالات شريكة، وللوكالات المؤهَّلة للحج، وللمؤسس من الجالية الذي يريد أن يهدي العمرة لوالديه من فرنسا. ولا يتناول قواعد الاعتماد التي هي من شأن الديوان، ولا إجراءات التأشيرة السعودية التي تتغيّر من موسم إلى آخر؛ بل يتناول ما يجب أن تمسك به الوكالة كل يوم ليسافر معتمروها ويعودوا دون عثرة. وهو يمدّد ما نصفه عن [وكالات السياحة الصحراوية](/blog/agence-tourisme-saharien-algerie-2027-reservation-en-ligne-circuits-djanet/) وعن [برنامج وكالة السفر](/blog/logiciel-agence-voyage-gds-setif-est-algerien-2026/).",
    ],
    sections: [
      { heading: 'ما تقوله أرقام موسم 1448', body: [
        "حسب «الجزائر 360»، التي نقلت يوم 17 أكتوبر 2026 حصيلة الديوان الوطني للحج والعمرة، **أودعت 768 وكالة ملفاً لموسم 1448 (2026-2027)، منها 69 لم تنظّم عمرة من قبل**؛ ودرس الديوان 598 ملفاً، وقبل **490** ورفض 108. وفي الموسم السابق ضمّت القائمة النهائية المنشورة في ديسمبر 2025 **602 وكالة**، وأعلن الديوان عن 552 لسنة 2025. ولم ينشر الديوان عدد المعتمرين للموسم، لذلك لا نذكره.",
        "وقد تشدّد الإطار. فالقواعد المعلنة في ماي 2025 لموسم 2026، كما نقلتها «الجزائر 360»، تفرض على الوكالات **عقد سفر موقَّعاً مع كل معتمر، متاحاً على منصة رسمية قبل السفر**، ومرشدين معتمدين من وزارة الشؤون الدينية، والتصريح بالبرامج وتكاليفها، وخمسة عقود مناولة على الأكثر لكل وكالة معتمدة، وتقارير شهرية وسنوية، والالتزام بضمان مغادرة المعتمرين الأراضي السعودية عند نهاية البرنامج. ولعمرة 2026 حدّد الديوان **3 أفريل 2026 آخر يوم للدخول و18 أفريل آخر يوم للخروج**. والعقوبات تصل إلى سحب الاعتماد والمنع لسنتين.",
        "وعن النصب، حذّر الديوان في أكتوبر 2026 من الصفحات المزيفة والمكالمات المزيفة التي تطلب دفعاً إلكترونياً ومن انتحال الصفة: ففي أواخر سبتمبر 2026 أوقفت شرطة البليدة ثلاثة أشخاص انتحلوا صفة وكالة معتمدة. ولحج 2026 سافر **41300 حاج جزائري** على 144 رحلة من اثني عشر مطاراً، مسجَّلين ودافعين عبر منصة «بوابة الحج» ببطاقة CIB أو الذهبية. **فالقطاع انتقل إذن إلى الملف الرقمي والدفع المتتبَّع من جهة الدولة؛ وهذا الدليل يصف كيف تفعل الوكالة الشيء نفسه من جهتها.**",
      ] },
      { heading: 'عمرة تصمد، في ست لحظات', body: [
        "على النظام أن يصمد في كل لحظة من هذه اللحظات الست. الثلاث الأولى في الوكالة؛ والثلاث التالية عن بُعد.",
      ], visual: 'journey', after: [
        "**الطلب** يُدوَّن بالفترة والفندق ومسافته عن الحرم وسعر مكتوب، لأن النزاعات تولد في هذه النقاط الأربع. **الملف** يجمع جواز السفر والصور والتلقيح والمحرم عند الاقتضاء، والعقد الموقَّع الذي تشترطه اللوائح قبل السفر. **الدفع** يتم بالأقساط، يُسجَّل كل قسط بطريقته ووصله المرقَّم والرصيد المتبقي.",
        "**التأشيرة والرحلة** لهما حالة لكل معتمر، مع الوثائق الناقصة وتنبيهات قبل آجال الدخول والخروج. **في الأماكن المقدسة**، يحمل المعتمر برنامجه ورقم المرشد وبطاقة الفندق في جيبه، حتى دون اتصال. وأخيراً **العودة** تتفقّد كل معتمر عند الرحلة، وتؤكّد الخروج من الأراضي، وتجمع رأياً، وتقترح الرحلة القادمة، وغالباً رمضان التالي.",
      ] },
      { heading: 'ما يجب بناؤه: الملفات والمدفوعات أولاً', body: [
        "الإغراء هو البدء بموقع يعرض العروض واستمارة اتصال. إنه مفيد، لكن الوكالة تعيش من ملفات كاملة وأرصدة محصَّلة.",
      ], visual: 'stack', after: [
        "**الملفات والأفواج** هي العمود الفقري: ملف لكل معتمر، فوج لكل رحلة، وتوزيع الغرف وقوائم الرحلات المترتبة عنها، ولوحة تُظهر بنظرة من اكتمل ملفه ومن ينتظر وثيقة ومن حصل على التأشيرة. و**الدفع بالأقساط** يتبع المنطق الذي نفصّله عن [صندوق المحل التجاري](/blog/caisse-commerce-algerie-2027-paiement-qr-code-carte-tpe-rapprochement/): كل قسط يُسجَّل بطريقته، نقد يُعدّ في الشباك، بطاقة CIB أو الذهبية، تحويل، أو يورو من فرنسا؛ والوصل يُرسل برسالة قصيرة، والرصيد ظاهر للمعتمر، والتذكيرات تلقائية قبل كل استحقاق.",
        "**العقود والتصريحات** تُنتج، من الملف، العقد الموقَّع والقوائم الواجب التصريح بها والتقارير الشهرية، بدل إعادة كتابتها. و**تطبيق المرشد**، دون اتصال، يحمل برنامج اليوم ونقاط اللقاء وبطاقة الفندق بالعربية وزر طوارئ. و**التفقّد** يتم عند الصعود وفي الحافلة وفي الفندق وفي رحلة العودة: وهو ما يسمح بتأكيد الخروج وإبلاغ العائلة. وجوازات السفر والمعطيات الصحية محمية وفق [القانون 18-07](/blog/loi-18-07-protection-donnees-personnelles-algerie-2026/) ومقصورة على المستخدمين المرخَّص لهم.",
      ] },
      { heading: 'كم تكلّف المتابعة اليدوية', body: [
        "مثال مبني على فرضيات، أعده بأرقامك: وكالة ترسل 600 معتمر في الموسم، في خمس عشرة رحلة من أربعين.",
      ], visual: 'suivi', after: [
        "ثمانية اتصالات لكل معتمر، وثيقة ناقصة، قسط مستحق، تاريخ الرحلة، ساعة الموعد، الفندق، العودة، بخمس دقائق لكل منها: **400 ساعة من الهاتف وواتساب في الموسم**، أي شخصان بدوام كامل خلال الأشهر الثلاثة الأكثر ازدحاماً. وحين يرى المعتمر ملفه ووصولاته وبرنامجه على هاتفه، وتنطلق التذكيرات وحدها، يبقى نحو اتصالين: **100 ساعة، و300 ساعة تعود إلى البيع وتأطير الأفواج**. لا نعرف قياساً علنياً لهذا الوقت في الوكالات الجزائرية؛ هذه الأرقام فرضيات لإظهار حجم الأمر.",
        "والكلفة الأخرى مالية وتُقاس في الأرصدة: القسط المدفوع نقداً والمدوَّن في دفتر يُنازَع فيه أو يضيع أو يُنسى. وعلى 600 ملف، تكفي بضعة أرصدة ناقصة عند السفر لمحو هامش عدة معتمرين. والتحقق بسيط: عُدّ، في رحلتك الأخيرة، المكالمات المستلَمة في الأسبوع السابق للرحلة والأرصدة المسدَّدة في الشباك يوم السفر نفسه.",
      ] },
      { heading: 'ستة مخاطر وستة ردود', body: [
        "مخاطر موسم العمرة معروفة؛ والديوان يذكّر بها كل سنة. والنظام يردّ على كل منها.",
      ], visual: 'risques', after: [
        "**انتحال صفة الوكالة** خطر يصيب المعتمرين أولاً، لكنه يرتدّ على الوكالة: صفحة مزيفة تحمل اسمها، ومكالمة مزيفة تطلب عربوناً. وفضاء معتمر رسمي ووصولات مرقَّمة واعتماد معروض على كل وثيقة تصنع الفرق بين الوكالة وتقليدها. و**النقد بلا وصل** أكثر المخاطر تكراراً داخل الوكالة؛ والرد تسجيل فوري لكل قسط ووصل يُرسل برسالة قصيرة قبل أن يغادر المعتمر الشباك.",
        "**التأشيرة أو الرحلة المتأخرة** تُكتشف غالباً عشية السفر؛ وحالة لكل معتمر وتنبيهات قبل الآجال تكشفها قبل أسابيع. و**الفندق المخالف للعقد** أكثر النزاعات كلفة على السمعة؛ والاسم والفئة والمسافة عن الحرم مكتوبة في العقد، مع صور في الملف، تغلق النقاش. و**المعتمر التائه** و**تجاوز مدة الإقامة** هما الخطران اللذان يُحسمان في الأماكن المقدسة: تطبيق دون اتصال ببطاقة الفندق ورقم المرشد، ثم قائمة عودة تُتفقَّد عند الرحلة مع إبلاغ العائلة، يغطيانهما.",
      ] },
      { heading: 'العمرة المدفوعة من فرنسا', body: [
        "إهداء العمرة للوالدين من أكثر لفتات الجالية شيوعاً. والحاجة محدّدة: اختيار وكالة معتمدة وتاريخ من فرنسا، والدفع باليورو، ومتابعة ذهاب والدين مسنّين وعودتهما دون الاتصال بهما عشر مرات في اليوم.",
        "الآلية تلتقي مع ما نصفه عن [مقابل Booking](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/): دفع بالبطاقة باليورو يُضاف إلى ملف شخص محدّد، ووصل لمن يدفع، وتأكيد لمن يسافر، ثم فضاء عائلة يُظهر الرحلة والفندق والتفقّد عند العودة. ويُضبط تحصيل العملة الصعبة مع بنك الوكالة قبل فتح هذه الخدمة. وبالنسبة للوكالة، إنهم زبائن يحجزون مبكراً ويدفعون كاملاً ويعودون؛ وبالنسبة لمؤسس من الجالية، إنه مدخل طبيعي إلى السوق، بشرط العمل مع وكالات مدرجة في قائمة الديوان. ونفصّل هذه الطريقة في إطلاق مشروع من فرنسا في [جدول الرحلات الأربع](/blog/lancer-startup-en-algerie-depuis-la-france-2027-calendrier-quatre-voyages/).",
      ] },
      { heading: 'أي نموذج تبني', body: [
        "ستة نماذج ممكنة، من الوكالة التي تجهّز شباكها إلى موقع مقارنة العروض.",
      ], visual: 'models', after: [
        "**وكالة تعمل أصلاً** هي نقطة الانطلاق الأكثر أماناً: الملفات موجودة، والمكالمات تُعدّ، والأثر يظهر في الرحلة الأولى. و**المنظِّم الذي يعمل مع وكالات شريكة**، في حدود عقود المناولة الخمسة المسموح بها، يحتاج بوابة يُدخل فيها كل شريك ملفاته ويرى حصصه، ومسؤولية واضحة عمّا يُدخله الآخرون. و**الوكالة المؤهَّلة للحج** تحتفظ بالملفات نفسها مع جدول مفروض وتقارير يجب إعدادها.",
        "و**الشبكة متعددة الولايات** توحّد أرقامها وتشارك أفواجها، مقابل أسعار وفنادق مختلفة لكل وكالة. و**العرض الموجَّه للجالية** الأكثر وعداً على المدى القصير والأبسط إضافةً إلى نظام قائم. و**موقع مقارنة العروض** مغرٍ لكنه يتطلب التحقق باستمرار من الاعتمادات والفنادق الحقيقية؛ إنه منتج قائم بذاته، قريب مما نصفه في [إطلاق SaaS في الجزائر سنة 2027](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/).",
      ] },
      { heading: 'الجدول الزمني حتى موسم 1449', body: [
        "نحو اثني عشر أسبوعاً بين التأطير وتجربة على رحلة في جانفي، للوصول جاهزين إلى رمضان.",
      ], visual: 'calendrier', after: [
        "**نوفمبر: التأطير**، الملف النموذجي، الأقساط، توزيع الغرف، العقد. **من نوفمبر إلى جانفي: الملفات والأفواج والمدفوعات**، ثم **فضاء المعتمر والرسائل القصيرة**. **جانفي: التجربة على رحلة حقيقية**، مع عدّ المكالمات قبلها وبعدها. **فيفري ومارس: رمضان 1448**، حوالي 8 فيفري إلى 9 مارس 2027 حسب رؤية الهلال، حين تكون الأفواج أكبر.",
        "**ماي: حج 2027** للوكالات المؤهَّلة، ثم **موسم 1449** ابتداءً من الصيف، بالملفات نفسها ورحلات جديدة. وهذه المدد متّسقة مع ما نفصّله في [كم من الوقت لتطوير تطبيق أو منصة](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/)؛ ويمكن أن يأتي تطبيق المرشد وفضاء العائلة بعد رمضان.",
      ] },
      { heading: 'ما يُفشل هذا النوع من المشاريع', body: [], list: [
        "**البدء بموقع العروض.** موقع جميل يصبّ في دفتر لا يغيّر شيئاً يوم السفر.",
        "**ملف بلا حالة.** إن لم تَرَ من اكتمل ملفه ومن ينتظر وثيقة، تبقى عشية السفر رهاناً.",
        "**أقساط خارج النظام.** القسط المدوَّن على حدة لا وجود له في الرصيد ولا في الوصل.",
        "**تطبيق مرشد يحتاج شبكة.** في مكة، يجب أن يُفتح البرنامج وبطاقة الفندق دون اتصال.",
        "**نسيان العائلة.** الأب يسافر والابنة تتصل: فضاء العائلة يوفّر نصف المكالمات.",
        "**جوازات سيئة الحماية.** نسخ الجوازات والمعطيات الصحية للمستخدمين المرخَّص لهم فقط، على خادم باسم الوكالة.",
        "**الحسابات باسم المطوّر.** الخادم والنطاق والرسائل القصيرة وحساب الدفع باسم الوكالة منذ الأسبوع الأول.",
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: "كم عدد الوكالات المرخَّص لها بتنظيم العمرة في الجزائر لموسم 1448؟", a: "حسب حصيلة الديوان الوطني للحج والعمرة التي نقلتها «الجزائر 360» يوم 17 أكتوبر 2026، تضم القائمة الأولية 490 وكالة من أصل 768 مترشحة و598 ملفاً مدروساً. وفي الموسم السابق ضمّت القائمة النهائية 602 وكالة. تحقّق دائماً من وجود الوكالة في قائمة الديوان قبل الدفع." },
        { q: "لماذا البدء بالملفات والمدفوعات بدل الموقع؟", a: "لأن الوكالة تخسر المال والسمعة بسبب ملفات ناقصة وأقساط غير متتبَّعة ونزاعات حول الفندق، لا بسبب غياب موقع. والموقع وفضاء المعتمر يُوصَلان بملفات ومدفوعات ممسوكة أصلاً." },
        { q: "هل يستطيع المعتمر الدفع بالأقساط ببطاقة الذهبية أو CIB؟", a: "الدفع بالبطاقة عبر الإنترنت ممكن عبر المنصات المعتمدة، قسطاً قسطاً، وكل دفعة، حتى النقدية في الشباك، يجب أن تُسجَّل بوصل مرقَّم. ويُظهر النظام للمعتمر رصيده ويذكّره بالاستحقاقات." },
        { q: "هل تستطيع عائلة في فرنسا دفع عمرة والديها؟", a: "نعم، إذا قبلت الوكالة الدفع بالبطاقة باليورو مُضافاً إلى ملف شخص محدّد، مع وصل لمن يدفع وتأكيد لمن يسافر. ويُضبط تحصيل العملة الصعبة مع بنك الوكالة قبل فتح هذه الخدمة." },
        { q: "هل يعمل تطبيق المرشد دون اتصال في مكة؟", a: "يجب أن يعمل. برنامج اليوم ونقاط اللقاء وبطاقة الفندق بالعربية ورقم المرشد تُخزَّن على الهاتف وتتزامن حالما يعود الاتصال. ونفصّل هذه الخيارات في [إنشاء تطبيق للهاتف سنة 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/)." },
        { q: "كم من الوقت للجاهزية قبل رمضان 2027؟", a: "نحو اثني عشر أسبوعاً بين التأطير وتجربة على رحلة في جانفي، بالملفات والأفواج والمدفوعات وفضاء المعتمر. ويمكن أن يأتي تطبيق المرشد وفضاء العائلة بعد رمضان." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "وكالة العمرة تعيش من ملفات كاملة في وقتها وأرصدة محصَّلة بالكامل؛ والباقي يُوصَل بها." },
      { after: 3, text: "أربعمائة ساعة هاتف في الموسم تعني شخصين لا يبيعان طوال ثلاثة أشهر." },
    ],
    cta: { eyebrow: 'صف لنا وكالتك', title: "وكالة عمرة، أو منظِّم مع شركاء، أو وكالة مؤهَّلة للحج، أو عرض للجالية تريد إطلاقه: عدد الرحلات والمعتمرين في الموسم، وكيف تمسك الملفات والمدفوعات اليوم، والتاريخ المستهدف. نعيد إليك النطاق والجدول والسعر الإجمالي مكتوبة قبل البدء.", body: "تبني Symloop أنظمة تسيير الملفات والأفواج، والدفع بالأقساط مع الوصولات، وفضاءات المعتمر والعائلة، والتطبيقات التي تعمل دون اتصال، ولوحات القيادة لوكالات السفر الجزائرية، بالعربية والفرنسية والإنجليزية. مهندسون ذوو خبرة في الجزائر العاصمة وسطيف، سعر إجمالي وجدول مكتوبان، والخادم والبيانات باسمك." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: '/blog/agence-tourisme-saharien-algerie-2027-reservation-en-ligne-circuits-djanet/', kind: '2027', name: 'وكالة السياحة الصحراوية سنة 2027' },
      { href: '/blog/logiciel-agence-voyage-gds-setif-est-algerien-2026/', kind: 'وكالات', name: 'برنامج وكالة السفر وGDS' },
      { href: '/blog/caisse-commerce-algerie-2027-paiement-qr-code-carte-tpe-rapprochement/', kind: '2027', name: 'تحصيل QR والبطاقة والنقد سنة 2027' },
      { href: '/blog/lancer-startup-en-algerie-depuis-la-france-2027-calendrier-quatre-voyages/', kind: 'الجالية', name: 'إطلاق مشروع في الجزائر من فرنسا سنة 2027' },
    ] },
  },
};

const KEYWORDS = "agence omra algérie 2027, logiciel agence omra, gestion dossiers pèlerins, paiement par tranches omra, agences agréées omra 1448, ONPO 490 agences, application guide omra hors ligne, offrir omra parents depuis la france, umrah agency software algeria, برنامج وكالة عمرة الجزائر";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
