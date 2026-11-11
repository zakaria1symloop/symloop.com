import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours.mjs';

const SLUG = 'plateforme-livraison-transport-algerie-2027-livreurs-cod-retours';
const FIGURES = ['parcel', 'actors', 'stack', 'timeline'];
const DATE = '2026-10-30';

const CONTENT = {
  fr: {
    kind: 'Problème · Livraison et transport', title: "Une plateforme de livraison en Algérie en 2027 : livreurs, paiement à la livraison, retours, e-commerçants. Ce qu'il faut construire.",
    dek: "Vous dirigez une société de livraison, une agence de transport ou une flotte de livreurs. Vos e-commerçants vous demandent un suivi en temps réel et des versements plus rapides, vos livreurs travaillent avec une feuille de route papier et le COD en espèces dans la poche, vos retours se découvrent en fin de mois, et le fisc, en 2027, veut voir les encaissements. Le parcours d'un colis et où l'argent se perd, ce que chaque acteur attend, la pile à construire, le paiement à la porte, et le calendrier pour une wilaya pilote.",
    publishedAt: 'Octobre 2026', readTime: '11 min de lecture', author: 'Symloop', about: ['Livraison', 'Transport', 'Paiement à la livraison', 'Application livreur', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Une société de livraison perd son argent à trois endroits : les colis non confirmés qui seront refusés à la porte, les tentatives de livraison inutiles, et le COD en espèces qui circule sans trace entre le client, le livreur, l'agence et l'e-commerçant. **La plateforme qui tient se construit dans cet ordre : l'application livreur hors-ligne, tournée, scan, preuve de livraison, COD saisi ; le portail e-commerçant avec suivi, taux de refus par wilaya et versements à J+3 ; le back-office de dispatch ; puis, en 2027, le paiement à la porte par SoftPos et QR, et la confirmation automatisée des commandes avant ramassage.** Le portail est ce qui se vend aux e-commerçants ; l'application livreur est ce qui fait que ses chiffres sont vrais. Une wilaya pilote avec cinq e-commerçants avant le réseau.",
      "Ce guide s'adresse aux transporteurs et aux sociétés de livraison, aux e-commerçants qui veulent internaliser leur livraison, et aux fondateurs qui veulent construire la plateforme logistique que les boutiques en ligne leur réclament. Il complète notre page sur les [commandes refusées à la livraison](/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/), écrite côté e-commerçant, et celle du [transporteur de cinquante employés](/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/).",
    ],
    sections: [
      { heading: "Le parcours d'un colis COD, et où l'argent se perd", body: [
        "En Algérie, la quasi-totalité des colis e-commerce se paient à la livraison. Le parcours a quatre étapes, et chacune a sa fuite.",
      ], visual: 'parcel', after: [
        "**La confirmation** est l'étape que les transporteurs ne voient pas, parce qu'elle appartient à l'e-commerçant. Elle décide pourtant du refus : un numéro faux, un client qui ne répond pas, une commande passée à minuit sur Instagram. Un colis non confirmé est à moitié refusé avant d'être ramassé. Une plateforme qui propose la confirmation, par message automatisé en arabe et en français puis par appel pour les commandes à risque, réduit le refus à la source et devient indispensable à ses e-commerçants. **Le tri** perd des jours : un colis mal étiqueté arrive quand le client n'en veut plus. **La tentative de livraison** est l'étape qui coûte : chaque tentative a le même prix, et la deuxième ne rapporte rien de plus. **L'encaissement ou le retour** est l'étape où la trésorerie se joue : le COD remis au livreur doit se retrouver dans le versement à l'e-commerçant, et le retour doit être transporté, facturé et surtout retrouvé.",
      ] },
      { heading: 'Ce que chaque acteur attend de la plateforme', body: [
        "Six acteurs utilisent le même système. Ils n'attendent pas la même chose, et chacun a une raison précise de partir.",
      ], visual: 'actors', after: [
        "**L'e-commerçant** paie pour trois choses : savoir où est son colis sans appeler, connaître son taux de refus par wilaya pour corriger sa confirmation, et recevoir son COD vite. Le versement en retard est la première raison de changer de transporteur en Algérie. **Le livreur** veut une tournée dans l'ordre, qui marche sans réseau dans la cage d'escalier, une preuve de livraison en deux gestes, photo ou signature, et une paie calculée sur ce qu'il a réellement livré. **Le dispatch** veut affecter sans téléphoner, voir les incidents et tracer les retours. **Le client final** veut un message avec le créneau et, de plus en plus, payer par carte ou QR à la porte plutôt que de chercher la monnaie. **La direction** veut la marge par colis et la position de trésorerie COD chaque jour, pas en fin de mois. **Le fisc**, avec le projet de loi de finances 2027, pousse vers l'encaissement électronique : réduction d'impôt pour certains régimes quand la moitié des encaissements est électronique, plafonnement du droit de timbre sur les factures en espèces ; c'est un projet, amendable, mais la direction est nette, et un transporteur qui trace son COD a une longueur d'avance.",
      ] },
      { heading: 'La pile à construire', body: [
        "Cinq couches. Les transporteurs qui achètent un logiciel de suivi générique ont la première et parfois la troisième ; il leur manque la deuxième, le terrain, et la quatrième, l'argent.",
      ], visual: 'stack', after: [
        "**Le portail e-commerçant** reçoit les colis par import de boutique ou par saisie, affiche le suivi, les taux de refus par wilaya, les relevés et les versements ; le client final reçoit ses messages de suivi par SMS ou WhatsApp. **L'application livreur** est hors-ligne d'abord : la tournée dans l'ordre, le scan à chaque étape, la preuve de livraison, le COD saisi au moment de l'encaissement, les incidents en un geste. Elle fonctionne sur les téléphones Android que vos livreurs ont déjà. Nous avons détaillé [les sept décisions d'une application mobile en 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/) ; le hors-ligne est la première. **Le paiement à la porte** arrive avec 2027 : le SoftPos annoncé par le GIE Monétique transforme le téléphone NFC du livreur en terminal, et le QR DZMobPay interopérable entre les banques permet au client de payer depuis l'application de sa banque ou BaridiMob. Les espèces restent, mais enregistrées.",
        "**Le back-office de dispatch** affecte, trie par hub et par wilaya, suit les incidents et les retours. **L'argent** est la couche que les logiciels génériques ignorent : le COD encaissé par chaque livreur, rapproché, versé aux e-commerçants par virements groupés avec relevé, et la facture de transport conforme, avec TVA, par e-commerçant, frais de retour inclus. **Les données et l'IA** ferment la pile : une seule base, hébergée dans le respect de la loi 18-07 ; la confirmation automatisée des commandes avant ramassage ; et, avec quelques mois d'historique, la prédiction du refus par wilaya, par e-commerçant et par heure de commande. Nous avons expliqué [où un agent IA aide une entreprise et ce qui doit exister avant](/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/).",
      ] },
      { heading: 'Le calendrier : une wilaya pilote avant le réseau', body: [
        "Huit mois. L'application livreur se construit avant le portail, parce que des chiffres de suivi sans scan sur le terrain sont des chiffres inventés. Un projet de ce périmètre, application livreur, portail, dispatch, versements, se situe en catégorie 3 de notre [grille de prix](/blog/prix-application-mobile-algerie-2026/), le prix total écrit avant de commencer.",
      ], visual: 'timeline', after: [
        "**Mois 1, le cadrage** avec cinq e-commerçants et votre dispatch : les règles réelles de tri, de COD, de retour et de versement, écrites. **Mois 2 à 4, l'application livreur**, testée sur les téléphones des livreurs, dans les quartiers où le réseau tombe. **Mois 4 à 6, le portail e-commerçant et les versements**, import de boutique, suivi, relevés, facture. **Mois 7, le pilote** : une wilaya, cinq e-commerçants, deux chiffres mesurés chaque semaine, le taux de refus et le délai de versement. **Mois 8, le paiement à la porte et la confirmation automatisée**, puis l'ouverture des autres wilayas, une par une, avec les chiffres du pilote comme argument commercial.",
        "Si vous êtes un e-commerçant qui veut internaliser sa livraison, le calendrier est le même, sans portail : l'application livreur et le dispatch suffisent, et la confirmation automatisée est le premier gain.",
      ] },
      { heading: 'Les erreurs que nous voyons dans la livraison', body: [], list: [
        "**Acheter un logiciel de suivi sans application livreur.** Les statuts sont saisis au bureau le soir. Le scan sur le terrain, hors-ligne, d'abord.",
        "**Ignorer la confirmation.** Le refus se décide avant le ramassage. Proposer la confirmation automatisée aux e-commerçants, c'est réduire ses propres tentatives inutiles.",
        "**Verser le COD en fin de mois.** L'e-commerçant part. Versements groupés à J+3, relevé par e-commerçant.",
        "**Une deuxième tentative automatique.** Elle coûte autant que la première et rapporte rarement. Un message au client, un créneau choisi, puis la tentative.",
        "**Le COD en espèces sans saisie.** Le rapprochement est impossible, la trésorerie est inconnue, le fisc le verra en 2027. COD saisi à l'encaissement, paiement à la porte dès que possible.",
        "**Ouvrir quarante-huit wilayas le premier jour.** Un hub par wilaya et personne pour les tenir. Une wilaya pilote, cinq e-commerçants, puis le réseau.",
        "**Payer les livreurs de mémoire.** Les bons livreurs partent chez le concurrent qui compte juste. Paie calculée sur les livraisons scannées.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Par quoi commencer pour digitaliser une société de livraison ?", a: "Par l'application livreur hors-ligne : tournée, scan, preuve de livraison, COD saisi. C'est elle qui rend vrais les chiffres du portail e-commerçant, qui vient ensuite avec le suivi et les versements. Le dispatch, le paiement à la porte et la confirmation automatisée suivent." },
        { q: "Comment réduire les colis refusés à la livraison ?", a: "En agissant avant le ramassage : confirmation automatisée des commandes par message en arabe et en français, appel pour les commandes à risque, créneau choisi par le client. La tentative de livraison coûte le même prix qu'elle réussisse ou non ; le refus se décide à la confirmation." },
        { q: "Comment gérer le COD et les versements aux e-commerçants ?", a: "Chaque COD est saisi par le livreur au moment de l'encaissement, rapproché au retour à l'agence, puis versé aux e-commerçants par virements groupés à J+3 avec un relevé. Le versement en retard est la première raison de changer de transporteur." },
        { q: "Les livreurs pourront-ils encaisser par carte en 2027 ?", a: "Le SoftPos annoncé par le GIE Monétique pour fin 2026 transforme le téléphone NFC du livreur en terminal, et le QR DZMobPay interopérable permet au client de payer depuis l'application de sa banque. Les espèces restent, mais enregistrées dans l'application." },
        { q: "Logiciel existant ou plateforme sur mesure ?", a: "Les logiciels de suivi génériques couvrent le portail et parfois le dispatch ; il leur manque l'application livreur hors-ligne adaptée au terrain algérien et la couche argent, COD rapproché, versements, facture conforme. Au-delà de quelques dizaines de colis par jour, c'est le sur mesure qui tient." },
        { q: "Combien de temps pour lancer la plateforme ?", a: "Huit mois : cadrage avec cinq e-commerçants, application livreur en trois mois, portail et versements en trois mois en parallèle, une wilaya pilote au septième mois, paiement à la porte et confirmation automatisée au huitième, puis le réseau wilaya par wilaya." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Le refus se décide à la confirmation et se paie à la tentative de livraison." },
      { after: 2, text: "Le portail est ce qui se vend aux e-commerçants ; l'application livreur est ce qui fait que ses chiffres sont vrais." },
    ],
    cta: { eyebrow: 'Décrivez votre activité de livraison', title: "Combien de colis par jour, combien de livreurs et d'agences, comment le COD circule aujourd'hui et quand vous versez. Nous vous rendons la pile à construire, l'ordre, et le prix total écrit, avec la wilaya pilote.", body: "Symloop conçoit des plateformes de livraison et de transport pour l'Algérie : application livreur hors-ligne avec scan, preuve et COD, portail e-commerçant avec suivi et versements, dispatch par hub, paiement à la porte par SoftPos et QR, confirmation automatisée et prédiction de refus par IA, facture conforme, hébergement selon la loi 18-07. Ingénieurs seniors à Alger et Sétif, cadrage écrit, code à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/', kind: 'Problème', name: 'Commandes refusées à la livraison : diviser le taux par deux' },
      { href: '/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/', kind: 'Problème', name: 'Je gère cinquante employés terrain et tout passe par téléphone' },
      { href: '/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/', kind: '2027', name: 'Une marketplace en Algérie en 2027 : comment l’argent circule' },
      { href: '/blog/creer-equivalent-uber-eats-algerie-2026/', kind: 'Série', name: 'Uber Eats en Algérie : la livraison de repas' },
    ] },
  },
  en: {
    kind: 'Problem · Delivery and transport', title: 'A delivery platform in Algeria in 2027: couriers, cash on delivery, returns, e-merchants. What to build.',
    dek: "You run a delivery company, a transport agency or a courier fleet. Your e-merchants ask for real-time tracking and faster payouts, your couriers work from a paper route sheet with cash COD in their pocket, your returns show up at month end, and the tax administration, in 2027, wants to see the collections. The parcel journey and where money leaks, what each actor expects, the stack to build, payment at the door, and the calendar for a pilot wilaya.",
    publishedAt: 'October 2026', readTime: '11 min read', author: 'Symloop', about: ['Delivery', 'Transport', 'Cash on delivery', 'Courier app', 'Algeria 2027'],
    intro: [
      "**Short answer.** A delivery company loses its money in three places: unconfirmed parcels that will be refused at the door, useless delivery attempts, and cash COD moving without a trace between customer, courier, agency and e-merchant. **The platform that holds is built in this order: the offline courier app, round, scan, proof of delivery, COD entered; the e-merchant portal with tracking, refusal rate by wilaya and D+3 payouts; the dispatch back-office; then, in 2027, payment at the door via SoftPos and QR, and automated order confirmation before pickup.** The portal is what sells to e-merchants; the courier app is what makes its numbers true. One pilot wilaya with five e-merchants before the network.",
      "This guide is for carriers and delivery companies, e-merchants who want to bring delivery in house, and founders who want to build the logistics platform online shops keep asking them for. It complements our page on [orders refused at delivery](/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/), written from the e-merchant's side, and the one on the [carrier with fifty employees](/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/).",
    ],
    sections: [
      { heading: 'The journey of a COD parcel, and where the money leaks', body: [
        "In Algeria, almost every e-commerce parcel is paid on delivery. The journey has four steps, and each has its leak.",
      ], visual: 'parcel', after: [
        "**Confirmation** is the step carriers do not see, because it belongs to the e-merchant. Yet it decides the refusal: a wrong number, a customer who does not answer, an order placed at midnight on Instagram. An unconfirmed parcel is half refused before it is picked up. A platform that offers confirmation, by automated message in Arabic and French then by call for risky orders, reduces refusal at the source and becomes indispensable to its e-merchants. **Sorting** loses days: a mislabelled parcel arrives when the customer no longer wants it. **The delivery attempt** is the step that costs: every attempt has the same price, and the second brings nothing more. **Collection or return** is where cash position is decided: the COD handed to the courier must end up in the e-merchant's payout, and the return must be carried, invoiced and above all found.",
      ] },
      { heading: 'What each actor expects from the platform', body: [
        "Six actors use the same system. They do not expect the same thing, and each has a precise reason to leave.",
      ], visual: 'actors', after: [
        "**The e-merchant** pays for three things: knowing where their parcel is without calling, knowing their refusal rate by wilaya to fix their confirmation, and getting their COD fast. A late payout is the first reason to switch carrier in Algeria. **The courier** wants a round in order, that works without network in the stairwell, proof of delivery in two taps, photo or signature, and pay computed on what they actually delivered. **Dispatch** wants to assign without phoning, see incidents and trace returns. **The end customer** wants a message with the slot and, increasingly, to pay by card or QR at the door rather than look for change. **Management** wants margin per parcel and the COD cash position every day, not at month end. **The tax administration**, with the 2027 finance bill, pushes towards electronic collection: a tax reduction for some regimes when half of receipts are electronic, a cap on stamp duty for cash invoices; it is a bill, amendable, but the direction is clear, and a carrier that traces its COD is a length ahead.",
      ] },
      { heading: 'The stack to build', body: [
        "Five layers. Carriers who buy a generic tracking software have the first and sometimes the third; they lack the second, the field, and the fourth, the money.",
      ], visual: 'stack', after: [
        "**The e-merchant portal** receives parcels by shop import or entry, shows tracking, refusal rates by wilaya, statements and payouts; the end customer gets tracking messages by SMS or WhatsApp. **The courier app** is offline first: the round in order, a scan at each step, proof of delivery, COD entered at the moment of collection, incidents in one tap. It runs on the Android phones your couriers already have. We detailed [the seven decisions of a mobile app in 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/); offline is the first. **Payment at the door** arrives with 2027: the SoftPos announced by GIE Monétique turns the courier's NFC phone into a terminal, and the interoperable QR DZMobPay lets the customer pay from their bank's app or BaridiMob. Cash remains, but recorded.",
        "**The dispatch back-office** assigns, sorts by hub and wilaya, tracks incidents and returns. **Money** is the layer generic software ignores: the COD collected by each courier, reconciled, paid out to e-merchants in batched transfers with a statement, and the compliant transport invoice, with VAT, per e-merchant, return fees included. **Data and AI** close the stack: one single base, hosted in compliance with Law 18-07; automated order confirmation before pickup; and, with a few months of history, refusal prediction by wilaya, by e-merchant and by order hour. We explained [where an AI agent helps a company and what must exist first](/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/).",
      ] },
      { heading: 'The calendar: one pilot wilaya before the network', body: [
        "Eight months. The courier app is built before the portal, because tracking numbers without field scans are made-up numbers. A project of this scope, courier app, portal, dispatch, payouts, sits in category 3 of our [price grid](/blog/prix-application-mobile-algerie-2026/), the total price written before starting.",
      ], visual: 'timeline', after: [
        "**Month 1, scoping** with five e-merchants and your dispatch: the real rules of sorting, COD, returns and payouts, written down. **Months 2 to 4, the courier app**, tested on the couriers' phones, in the neighbourhoods where the network drops. **Months 4 to 6, the e-merchant portal and payouts**, shop import, tracking, statements, invoice. **Month 7, the pilot**: one wilaya, five e-merchants, two numbers measured every week, refusal rate and payout delay. **Month 8, payment at the door and automated confirmation**, then the other wilayas open one by one, with the pilot's numbers as the sales argument.",
        "If you are an e-merchant bringing delivery in house, the calendar is the same, without the portal: the courier app and dispatch are enough, and automated confirmation is the first gain.",
      ] },
      { heading: 'The mistakes we see in delivery', body: [], list: [
        "**Buying tracking software without a courier app.** Statuses are entered at the office in the evening. Field scans, offline, first.",
        "**Ignoring confirmation.** Refusal is decided before pickup. Offering automated confirmation to e-merchants means reducing your own useless attempts.",
        "**Paying out COD at month end.** The e-merchant leaves. Batched payouts at D+3, statement per e-merchant.",
        "**An automatic second attempt.** It costs as much as the first and rarely pays. A message to the customer, a chosen slot, then the attempt.",
        "**Cash COD without entry.** Reconciliation is impossible, cash position unknown, the tax administration will see it in 2027. COD entered at collection, payment at the door as soon as possible.",
        "**Opening forty-eight wilayas on day one.** A hub per wilaya and nobody to run them. One pilot wilaya, five e-merchants, then the network.",
        "**Paying couriers from memory.** Good couriers leave for the competitor who counts right. Pay computed on scanned deliveries.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'Where do I start to digitise a delivery company?', a: 'With the offline courier app: round, scan, proof of delivery, COD entered. It is what makes the e-merchant portal’s numbers true, which comes next with tracking and payouts. Dispatch, payment at the door and automated confirmation follow.' },
        { q: 'How do I reduce parcels refused at delivery?', a: 'By acting before pickup: automated order confirmation by message in Arabic and French, a call for risky orders, a slot chosen by the customer. A delivery attempt costs the same whether it succeeds or not; refusal is decided at confirmation.' },
        { q: 'How do I handle COD and payouts to e-merchants?', a: 'Each COD is entered by the courier at the moment of collection, reconciled on return to the agency, then paid out to e-merchants in batched transfers at D+3 with a statement. A late payout is the first reason to switch carrier.' },
        { q: 'Will couriers be able to take card payments in 2027?', a: 'The SoftPos announced by GIE Monétique for the end of 2026 turns the courier’s NFC phone into a terminal, and the interoperable QR DZMobPay lets the customer pay from their bank’s app. Cash remains, but recorded in the app.' },
        { q: 'Existing software or a custom platform?', a: 'Generic tracking software covers the portal and sometimes dispatch; it lacks the offline courier app suited to the Algerian field and the money layer, reconciled COD, payouts, compliant invoice. Beyond a few dozen parcels a day, custom is what holds.' },
        { q: 'How long to launch the platform?', a: 'Eight months: scoping with five e-merchants, courier app in three months, portal and payouts in three months in parallel, one pilot wilaya in month seven, payment at the door and automated confirmation in month eight, then the network wilaya by wilaya.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'Refusal is decided at confirmation and paid for at the delivery attempt.' },
      { after: 2, text: 'The portal is what sells to e-merchants; the courier app is what makes its numbers true.' },
    ],
    cta: { eyebrow: 'Describe your delivery business', title: 'How many parcels a day, how many couriers and agencies, how COD moves today and when you pay out. We return the stack to build, the order, and the written total price, with the pilot wilaya.', body: 'Symloop designs delivery and transport platforms for Algeria: offline courier app with scan, proof and COD, e-merchant portal with tracking and payouts, dispatch by hub, payment at the door via SoftPos and QR, AI automated confirmation and refusal prediction, compliant invoicing, Law 18-07 hosting. Senior engineers in Algiers and Setif, written scoping, code in your name.' },
    related: { label: 'Read next', items: [
      { href: '/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/', kind: 'Problem', name: 'Orders refused at delivery: halving the rate' },
      { href: '/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/', kind: 'Problem', name: 'I manage fifty field employees and everything goes through the phone' },
      { href: '/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/', kind: '2027', name: 'A marketplace in Algeria in 2027: how the money flows' },
      { href: '/blog/creer-equivalent-uber-eats-algerie-2026/', kind: 'Series', name: 'Uber Eats in Algeria: meal delivery' },
    ] },
  },
  ar: {
    kind: 'مشكلة · التوصيل والنقل', title: 'منصة توصيل في الجزائر سنة 2027: موصّلون، دفع عند الاستلام، مرتجعات، تجار إلكترونيون. ما الذي يجب بناؤه.',
    dek: 'تدير شركة توصيل أو وكالة نقل أو أسطول موصّلين. يطلب منك التجار الإلكترونيون تتبعاً آنياً وتحويلات أسرع، يعمل موصّلوك بورقة جولة ومبالغ نقدية في الجيب، تُكتشف مرتجعاتك آخر الشهر، والضرائب في 2027 تريد رؤية التحصيلات. مسار الطرد وأين يضيع المال، ما ينتظره كل طرف، الطبقات التي تُبنى، الدفع عند الباب، والجدول لولاية تجريبية.',
    publishedAt: 'أكتوبر 2026', readTime: '11 دقيقة قراءة', author: 'سيملوب', about: ['توصيل', 'نقل', 'دفع عند الاستلام', 'تطبيق موصّل', 'الجزائر 2027'],
    intro: [
      '**الجواب المختصر.** تخسر شركة التوصيل مالها في ثلاثة مواضع: الطرود غير المؤكدة التي ستُرفض عند الباب، محاولات التسليم غير المجدية، والمبالغ النقدية التي تتحرك بلا أثر بين الزبون والموصّل والوكالة والتاجر. **المنصة التي تصمد تُبنى بهذا الترتيب: تطبيق الموصّل دون اتصال، جولة، مسح، إثبات تسليم، مبلغ مُدخَل؛ بوابة التاجر بتتبع ونسبة رفض حسب الولاية وتحويلات في ي+3؛ مكتب التوزيع الخلفي؛ ثم في 2027 الدفع عند الباب بـSoftPos وQR والتأكيد الآلي للطلبات قبل الجمع.** البوابة هي ما يُباع للتجار؛ وتطبيق الموصّل هو ما يجعل أرقامها صحيحة. ولاية تجريبية بخمسة تجار قبل الشبكة.',
      'هذا الدليل للناقلين وشركات التوصيل، وللتجار الإلكترونيين الذين يريدون تولي توصيلهم بأنفسهم، وللمؤسسين الذين يريدون بناء المنصة اللوجستية التي تطلبها منهم المتاجر الإلكترونية. وهو يكمّل صفحتنا عن [الطلبات المرفوضة عند التسليم](/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/) المكتوبة من جهة التاجر، وصفحة [الناقل بخمسين موظفاً](/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/).',
    ],
    sections: [
      { heading: 'مسار طرد مدفوع عند الاستلام، وأين يضيع المال', body: [
        'في الجزائر تُدفع شبه كل طرود التجارة الإلكترونية عند الاستلام. للمسار أربع خطوات ولكل منها تسربها.',
      ], visual: 'parcel', after: [
        '**التأكيد** هو الخطوة التي لا يراها الناقلون لأنها تخص التاجر. ومع ذلك تقرر الرفض: رقم خاطئ، زبون لا يجيب، طلب في منتصف الليل على إنستغرام. الطرد غير المؤكد مرفوض نصفياً قبل أن يُجمع. منصة تقترح التأكيد، برسالة آلية بالعربية والفرنسية ثم بمكالمة للطلبات الخطرة، تقلّل الرفض من المصدر وتصبح لا غنى عنها لتجارها. **الفرز** يخسر أياماً: الطرد الموسوم خطأ يصل حين لم يعد الزبون يريده. **محاولة التسليم** هي الخطوة التي تكلّف: لكل محاولة السعر نفسه، والثانية لا تجلب شيئاً إضافياً. **التحصيل أو الإرجاع** هي الخطوة التي تُحسم فيها السيولة: المبلغ المسلَّم للموصّل يجب أن يُوجد في تحويل التاجر، والمرتجع يجب أن يُنقل ويُفوتر وقبل كل شيء يُعثر عليه.',
      ] },
      { heading: 'ما ينتظره كل طرف من المنصة', body: [
        'ستة أطراف يستعملون النظام نفسه. لا ينتظرون الشيء نفسه، ولكل منهم سبب محدد للمغادرة.',
      ], visual: 'actors', after: [
        '**التاجر الإلكتروني** يدفع مقابل ثلاثة أشياء: معرفة مكان طرده دون اتصال، معرفة نسبة رفضه حسب الولاية لتصحيح تأكيده، واستلام مبالغه بسرعة. التحويل المتأخر هو السبب الأول لتغيير الناقل في الجزائر. **الموصّل** يريد جولة مرتبة تعمل بلا شبكة في بيت الدرج، إثبات تسليم بلمستين، صورة أو توقيع، وأجراً محسوباً على ما سلّمه فعلاً. **التوزيع** يريد التعيين دون اتصال هاتفي، ورؤية الحوادث، وتتبع المرتجعات. **الزبون النهائي** يريد رسالة بالموعد، وأكثر فأكثر، الدفع بالبطاقة أو QR عند الباب بدل البحث عن الفكة. **الإدارة** تريد الهامش لكل طرد ووضعية سيولة المبالغ المحصَّلة كل يوم لا آخر الشهر. **الضرائب**، مع مشروع قانون المالية 2027، تدفع نحو التحصيل الإلكتروني: تخفيض ضريبي لبعض الأنظمة حين يكون نصف التحصيل إلكترونياً، وسقف لحق الطابع على الفواتير النقدية؛ هو مشروع قابل للتعديل، لكن الاتجاه واضح، والناقل الذي يتتبع مبالغه متقدم بخطوة.',
      ] },
      { heading: 'الطبقات التي تُبنى', body: [
        'خمس طبقات. الناقلون الذين يشترون برنامج تتبع عاماً يملكون الأولى وأحياناً الثالثة؛ وتنقصهم الثانية، الميدان، والرابعة، المال.',
      ], visual: 'stack', after: [
        '**بوابة التاجر** تستقبل الطرود باستيراد من المتجر أو بالإدخال، وتعرض التتبع ونسب الرفض حسب الولاية والكشوف والتحويلات؛ ويتلقى الزبون النهائي رسائل التتبع عبر SMS أو واتساب. **تطبيق الموصّل** دون اتصال أولاً: الجولة بالترتيب، مسح في كل خطوة، إثبات التسليم، المبلغ مُدخَل لحظة التحصيل، الحوادث بلمسة. يعمل على هواتف أندرويد التي يملكها موصّلوك أصلاً. فصّلنا [القرارات السبعة لتطبيق جوّال في 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/)؛ وعدم الاتصال هو الأول. **الدفع عند الباب** يأتي مع 2027: SoftPos الذي أعلنه GIE Monétique يحوّل هاتف الموصّل بتقنية NFC إلى جهاز دفع، وQR DZMobPay المتوافق بين البنوك يتيح للزبون الدفع من تطبيق بنكه أو بريدي موب. يبقى النقد، لكن مسجَّلاً.',
        '**مكتب التوزيع الخلفي** يعيّن ويفرز حسب المحور والولاية ويتابع الحوادث والمرتجعات. **المال** هو الطبقة التي تتجاهلها البرامج العامة: المبلغ المحصَّل من كل موصّل، مطابَق، محوَّل للتجار بتحويلات مجمَّعة مع كشف، وفاتورة النقل المطابقة بـTVA لكل تاجر شاملةً رسوم الإرجاع. **البيانات والذكاء الاصطناعي** يختمان الطبقات: قاعدة واحدة مستضافة وفق القانون 18-07؛ تأكيد آلي للطلبات قبل الجمع؛ وبعد بضعة أشهر من السجل، توقّع الرفض حسب الولاية والتاجر وساعة الطلب. شرحنا [أين يساعد وكيل الذكاء الاصطناعي الشركة وما يجب أن يوجد قبله](/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/).',
      ] },
      { heading: 'الجدول: ولاية تجريبية قبل الشبكة', body: [
        'ثمانية أشهر. يُبنى تطبيق الموصّل قبل البوابة لأن أرقام التتبع بلا مسح في الميدان أرقام مختلَقة. مشروع بهذا النطاق، تطبيق موصّل، بوابة، توزيع، تحويلات، يقع في الفئة 3 من [شبكة أسعارنا](/blog/prix-application-mobile-algerie-2026/)، والسعر الإجمالي مكتوب قبل البدء.',
      ], visual: 'timeline', after: [
        '**الشهر 1، التأطير** مع خمسة تجار وقسم توزيعك: القواعد الحقيقية للفرز والدفع عند الاستلام والإرجاع والتحويل، مكتوبة. **الأشهر 2 إلى 4، تطبيق الموصّل**، مختبَر على هواتف الموصّلين في الأحياء التي تسقط فيها الشبكة. **الأشهر 4 إلى 6، بوابة التاجر والتحويلات**، استيراد المتجر، تتبع، كشوف، فاتورة. **الشهر 7، التجربة**: ولاية واحدة، خمسة تجار، رقمان يُقاسان كل أسبوع، نسبة الرفض وأجل التحويل. **الشهر 8، الدفع عند الباب والتأكيد الآلي**، ثم فتح الولايات الأخرى واحدة واحدة بأرقام التجربة حجةً تجارية.',
        'إن كنت تاجراً إلكترونياً يريد تولي توصيله بنفسه فالجدول نفسه بلا بوابة: يكفي تطبيق الموصّل والتوزيع، والتأكيد الآلي هو المكسب الأول.',
      ] },
      { heading: 'الأخطاء التي نراها في التوصيل', body: [], list: [
        '**شراء برنامج تتبع بلا تطبيق موصّل.** تُدخَل الحالات في المكتب مساءً. المسح في الميدان، دون اتصال، أولاً.',
        '**تجاهل التأكيد.** يُقرَّر الرفض قبل الجمع. اقتراح التأكيد الآلي على التجار يعني تقليل محاولاتك غير المجدية.',
        '**تحويل المبالغ آخر الشهر.** يغادر التاجر. تحويلات مجمَّعة في ي+3، كشف لكل تاجر.',
        '**محاولة ثانية تلقائية.** تكلّف كالأولى ونادراً ما تجدي. رسالة للزبون، موعد مختار، ثم المحاولة.',
        '**مبالغ نقدية بلا إدخال.** المطابقة مستحيلة، السيولة مجهولة، والضرائب ستراه في 2027. المبلغ مُدخَل عند التحصيل، والدفع عند الباب بأسرع ما يمكن.',
        '**فتح ثماني وأربعين ولاية في اليوم الأول.** محور في كل ولاية ولا أحد ليديرها. ولاية تجريبية، خمسة تجار، ثم الشبكة.',
        '**دفع أجور الموصّلين من الذاكرة.** الموصّلون الجيدون يغادرون إلى المنافس الذي يحسب بعدل. أجر محسوب على التسليمات الممسوحة.',
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: 'من أين أبدأ لرقمنة شركة توصيل؟', a: 'بتطبيق الموصّل دون اتصال: جولة، مسح، إثبات تسليم، مبلغ مُدخَل. هو ما يجعل أرقام بوابة التاجر صحيحة، وتأتي البوابة بعده بالتتبع والتحويلات. ثم التوزيع والدفع عند الباب والتأكيد الآلي.' },
        { q: 'كيف أقلّل الطرود المرفوضة عند التسليم؟', a: 'بالتصرف قبل الجمع: تأكيد آلي للطلبات برسالة بالعربية والفرنسية، مكالمة للطلبات الخطرة، موعد يختاره الزبون. محاولة التسليم تكلّف السعر نفسه نجحت أم لا؛ والرفض يُقرَّر عند التأكيد.' },
        { q: 'كيف أدير المبالغ المحصَّلة والتحويلات للتجار؟', a: 'يُدخل الموصّل كل مبلغ لحظة التحصيل، يُطابَق عند العودة إلى الوكالة، ثم يُحوَّل للتجار بتحويلات مجمَّعة في ي+3 مع كشف. التحويل المتأخر هو السبب الأول لتغيير الناقل.' },
        { q: 'هل سيستطيع الموصّلون التحصيل بالبطاقة في 2027؟', a: 'SoftPos الذي أعلنه GIE Monétique لنهاية 2026 يحوّل هاتف الموصّل بتقنية NFC إلى جهاز دفع، وQR DZMobPay المتوافق يتيح للزبون الدفع من تطبيق بنكه. يبقى النقد لكن مسجَّلاً في التطبيق.' },
        { q: 'برنامج جاهز أم منصة مخصصة؟', a: 'برامج التتبع العامة تغطي البوابة وأحياناً التوزيع؛ وينقصها تطبيق الموصّل دون اتصال المناسب للميدان الجزائري وطبقة المال، مبالغ مطابَقة، تحويلات، فاتورة مطابقة. فوق بضع عشرات من الطرود يومياً، المخصص هو ما يصمد.' },
        { q: 'كم من الوقت لإطلاق المنصة؟', a: 'ثمانية أشهر: تأطير مع خمسة تجار، تطبيق موصّل في ثلاثة أشهر، بوابة وتحويلات في ثلاثة أشهر بالتوازي، ولاية تجريبية في الشهر السابع، دفع عند الباب وتأكيد آلي في الثامن، ثم الشبكة ولاية ولاية.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'يُقرَّر الرفض عند التأكيد ويُدفع ثمنه عند محاولة التسليم.' },
      { after: 2, text: 'البوابة هي ما يُباع للتجار؛ وتطبيق الموصّل هو ما يجعل أرقامها صحيحة.' },
    ],
    cta: { eyebrow: 'صف نشاط التوصيل الخاص بك', title: 'كم طرداً في اليوم، كم موصّلاً ووكالة، كيف تتحرك المبالغ اليوم ومتى تحوّل. نعيد إليك الطبقات التي تُبنى، الترتيب، والسعر الإجمالي المكتوب، مع الولاية التجريبية.', body: 'تصمم سيملوب منصات التوصيل والنقل للجزائر: تطبيق موصّل دون اتصال بمسح وإثبات ومبلغ، بوابة تاجر بتتبع وتحويلات، توزيع حسب المحور، دفع عند الباب بـSoftPos وQR، تأكيد آلي وتوقّع رفض بالذكاء الاصطناعي، فاتورة مطابقة، استضافة وفق القانون 18-07. مهندسون خبراء في الجزائر وسطيف، تأطير مكتوب، كود باسمك.' },
    related: { label: 'اقرأ بعد ذلك', items: [
      { href: '/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/', kind: 'مشكلة', name: 'الطلبات المرفوضة عند التسليم: تقليص النسبة إلى النصف' },
      { href: '/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/', kind: 'مشكلة', name: 'أسيّر خمسين موظفاً ميدانياً وكل شيء يمر بالهاتف' },
      { href: '/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/', kind: '2027', name: 'سوق إلكترونية في الجزائر 2027: كيف يتحرك المال' },
      { href: '/blog/creer-equivalent-uber-eats-algerie-2026/', kind: 'سلسلة', name: 'أوبر إيتس في الجزائر: توصيل الوجبات' },
    ] },
  },
};

const KEYWORDS = "plateforme de livraison algérie 2027, application livreur algérie hors-ligne, logiciel société de livraison algérie, gestion cod paiement à la livraison versements, transport e-commerce algérie, dispatch livraison wilaya, softpos livreur qr dzmobpay, delivery platform algeria 2027, منصة توصيل الجزائر 2027";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
