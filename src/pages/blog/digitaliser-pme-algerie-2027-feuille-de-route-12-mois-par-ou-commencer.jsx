import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/digitaliser-pme-algerie-2027-feuille-de-route-12-mois-par-ou-commencer.mjs';

const SLUG = 'digitaliser-pme-algerie-2027-feuille-de-route-12-mois-par-ou-commencer';
const FIGURES = ['order', 'buy', 'stack', 'timeline'];
const DATE = '2026-10-30';

const CONTENT = {
  fr: {
    kind: 'Problème · PME algérienne', title: "Digitaliser une PME en Algérie en 2027 : par où commencer, dans quel ordre, et la feuille de route sur douze mois.",
    dek: "Vous dirigez une entreprise de dix à deux cents personnes. Les commandes arrivent sur WhatsApp, le stock est dans Excel, les paiements sont en espèces avec un reçu manuel, les employés terrain appellent, et vous êtes le seul à savoir où en est chaque chose. Vous voulez que 2027 soit l'année où cela change, sans tout casser et sans acheter six logiciels qui ne se parlent pas. Les quatre paliers dans l'ordre où ils paient, ce qui s'achète et ce qui se construit, la pile complète, et le calendrier trimestre par trimestre.",
    publishedAt: 'Octobre 2026', readTime: '11 min de lecture', author: 'Symloop', about: ['PME', 'Digitalisation', 'Paiement électronique', 'Back-office', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Une PME ne se digitalise pas en un projet, mais en quatre paliers, un par trimestre, dans un ordre qui n'est pas négociable. **Premier trimestre : encaisser et facturer**, carte CIB/Edahabia, QR, facture conforme, relances, parce que le projet de loi de finances 2027 récompense l'encaissement électronique et que c'est le palier qui rapporte le plus vite. **Deuxième trimestre : le seul flux qui vous perd de l'argent chaque mois**, commandes, stock ou terrain, outillé jusqu'au bout. **Troisième trimestre : l'équipe et le client**, back-office web, application terrain, puis application ou site de commande. **Quatrième trimestre : l'IA**, relances, support, alertes, résumé du jour, en dernier parce qu'elle a besoin des données des trois premiers paliers. Ce qui est identique dans toutes les entreprises s'achète en abonnement ; ce qui fait votre métier se construit.",
      "Ce guide répond aux dirigeants de PME qui nous écrivent avec la même phrase, « je veux digitaliser mon entreprise mais je ne sais pas par où commencer », et il s'appuie sur les cas que nous avons détaillés : une [agence immobilière sur WhatsApp et Google Sheets](/blog/agence-immobiliere-whatsapp-google-sheets-organiser-equipe-algerie-2026/), une [pharmacie à trois officines](/blog/pharmacie-trois-officines-stock-excel-dates-de-peremption-algerie-2026/), un [transporteur de cinquante employés](/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/), un [restaurant qui veut une caisse](/blog/caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026/).",
    ],
    sections: [
      { heading: "Les quatre paliers, dans l'ordre où ils paient", body: [
        "La plupart des PME commencent par le mauvais bout : une application pour les clients, ou « de l'IA », parce que c'est visible. Les deux échouent faute de données en dessous. Voici l'ordre qui tient.",
      ], visual: 'order', after: [
        "**Encaisser et facturer d'abord**, parce que c'est le palier où l'argent est. Le PLF 2027, encore un projet de loi amendable jusqu'au vote, prévoit une réduction d'impôt de 10 % pour les contribuables à l'IFU ou aux BNC dont au moins la moitié des encaissements passe par des moyens électroniques, et un plafonnement du droit de timbre sur les factures payées en espèces. Que votre entreprise soit concernée directement ou non, selon votre régime fiscal, à vérifier avec votre comptable, vos clients et vos fournisseurs le seront, et la direction est claire : l'encaissement électronique et la facture conforme deviennent la norme. Le dossier de web-marchand, via votre banque et le GIE Monétique, prend des semaines à des mois ; il part en janvier.",
        "**Le flux qui perd de l'argent ensuite**, et un seul. Pour un e-commerçant, ce sont les [commandes refusées à la livraison](/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/). Pour une pharmacie ou un grossiste, le stock et les dates de péremption. Pour un transporteur ou une entreprise de maintenance, les employés terrain. Vous le connaissez déjà : c'est celui dont vous parlez le dimanche soir. **L'équipe et le client en troisième**, parce qu'une application client sans back-office finit administrée dans Excel. **L'IA en dernier**, parce qu'elle relance à partir d'un échéancier, répond à partir de vos règles, alerte à partir de vos chiffres : sans les trois paliers, elle n'a rien à lire.",
      ] },
      { heading: "Ce qui s'achète en abonnement, et ce qui se construit", body: [
        "La deuxième erreur fréquente est d'opposer « un logiciel du marché » à « du sur mesure » comme s'il fallait choisir pour toute l'entreprise. On choisit par fonction.",
      ], visual: 'buy', after: [
        "**La comptabilité, la paie et les déclarations s'achètent**, toujours : votre comptable utilise déjà un logiciel, et aucune entreprise n'a un métier particulier en matière de TVA. **La caisse d'un point de vente s'achète** tant qu'il n'y a qu'un site et des produits standards ; nous avons détaillé le cas du [restaurant](/blog/caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026/) où plusieurs sites, la cuisine, la livraison et la fidélité doivent être liés. **La facturation s'achète** pour quelques factures par mois et se construit à partir de centaines, avec échéancier, relances et paiement en ligne intégré.",
        "**Les commandes, le stock multi-dépôts, le terrain et l'application client se construisent** dès que le volume ou la spécificité du métier dépasse ce que les logiciels génériques prévoient, et c'est le cas de la plupart des PME algériennes au-delà d'une certaine taille : vingt commandes par jour, deux dépôts, dix employés en déplacement, un client qui paie ou suit quelque chose. Le sur mesure n'est pas un luxe : c'est ce qui permet que le flux fonctionne avec vos règles, en arabe et en français, hors-ligne sur le terrain, avec le paiement en dinars. Un projet de ce type est cadré par écrit avec un prix total avant de commencer ; nous l'avons expliqué dans [peut-on connaître le prix total avant de commencer](/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/). Si vous hésitez encore entre un logiciel existant et un développement, notre guide des [solutions informatiques en Algérie](/blog/solutions-informatiques-algerie-2026/) compare les deux par secteur.",
      ] },
      { heading: 'La pile complète, fin 2027', body: [
        "Voici à quoi ressemble la PME à la fin des quatre trimestres. Chaque couche existe parce que la couche du dessous existe.",
      ], visual: 'stack', after: [
        "**Les clients** gardent WhatsApp, mais un WhatsApp Business d'entreprise, avec un numéro, des réponses types et des horaires, et non le téléphone personnel du patron ; les commandes, le suivi et le paiement passent dans une application ou un site. **L'équipe** travaille dans une application mobile hors-ligne sur le terrain et dans un back-office web au bureau ; le patron lit un tableau de bord au lieu d'appeler. **L'argent** est encaissé électroniquement ou enregistré quand il est en espèces, facturé proprement, relancé automatiquement. **Les données** vivent dans une seule base, hébergée dans le respect de la loi 18-07, sauvegardée, avec des accès tracés. **L'IA** relance, répond en arabe, français et darija, alerte, et produit chaque soir le résumé du jour.",
        "Ce qui change pour le dirigeant tient en une phrase : fin 2027, il ne sait plus tout de tête, et l'entreprise continue quand il n'est pas là.",
      ] },
      { heading: 'La feuille de route, trimestre par trimestre', body: [
        "Douze mois, quatre livraisons que l'entreprise utilise le lendemain. Rien n'attend décembre.",
      ], visual: 'timeline', after: [
        "**Premier trimestre, janvier à mars : encaisser et facturer.** Le dossier web-marchand part la première semaine de janvier. En attendant la carte, trois choses se mettent en place sans logiciel : un seul registre des ventes et des encaissements, tenu par une personne ; un numéro WhatsApp d'entreprise avec des règles ; une facture conforme pour chaque client professionnel. Fin mars, la carte CIB/Edahabia et le QR sont acceptés, et le pourcentage d'encaissement électronique se mesure chaque mois.",
        "**Deuxième trimestre, avril à juin : le flux qui perd de l'argent.** Cadrage écrit en avril, développement en mai, mise en service en juin, avec reprise des données existantes. Un seul flux : le résultat doit se voir sur un chiffre, taux de refus, valeur du stock périmé, heures de terrain facturées.",
        "**Troisième trimestre, juillet à septembre : l'équipe et le client.** Le back-office web consolide ce que le flux a commencé ; l'application terrain remplace les appels ; une application ou un site de commande s'ouvre en pilote à vos meilleurs clients avant la rentrée. Nous avons détaillé [les sept décisions d'une application mobile en 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/).",
        "**Quatrième trimestre, octobre à décembre : l'IA et le bilan.** Relances de paiement et de commande, support en trois langues à partir de vos règles, alertes sur les anomalies, résumé du jour pour le dirigeant. Et le bilan : part d'encaissement électronique sur l'année, chiffre du flux choisi, temps du dirigeant récupéré. C'est avec ce bilan que se décide 2028.",
      ] },
      { heading: 'Les erreurs que nous voyons dans les PME', body: [], list: [
        "**Commencer par l'application client ou par l'IA.** Visibles, mais sans données en dessous. Encaissement et flux d'abord.",
        "**Six logiciels qui ne se parlent pas.** Caisse, facturation, stock, livraison, chacun avec sa base. Une seule base pour ce qui fait votre métier, des logiciels achetés pour le reste.",
        "**Tout digitaliser le même trimestre.** L'équipe décroche, le patron aussi. Un palier par trimestre, utilisé le lendemain.",
        "**Garder le téléphone personnel du patron comme canal client.** L'entreprise s'arrête quand il est absent. WhatsApp Business d'entreprise, puis application.",
        "**Lancer le dossier web-marchand en juin.** La carte arrive en octobre. Il part en janvier.",
        "**Ne pas reprendre les données existantes.** Un stock ou un échéancier faux le premier jour fait perdre confiance à l'équipe en une semaine. La reprise fait partie du projet.",
        "**Mesurer rien.** Sans chiffre par palier, personne ne sait si ça a marché. Un chiffre par trimestre, lu chaque mois.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Par où commencer pour digitaliser une PME en Algérie ?", a: "Par l'encaissement et la facturation : carte CIB/Edahabia et QR via le statut de web-marchand, facture conforme, relances. C'est le palier où l'argent est, et le PLF 2027 récompense l'encaissement électronique. Le flux qui vous perd de l'argent vient ensuite, puis l'équipe et le client, puis l'IA." },
        { q: "Logiciel du marché ou sur mesure ?", a: "Par fonction, pas pour toute l'entreprise. Comptabilité, paie, caisse simple et site vitrine s'achètent. Commandes et livraison, stock multi-dépôts, employés terrain et application client se construisent dès que le volume ou la spécificité du métier dépasse ce que prévoient les logiciels génériques." },
        { q: "Que change le projet de loi de finances 2027 pour une PME ?", a: "Le texte, encore un projet, prévoit une réduction d'impôt de 10 % pour les contribuables à l'IFU ou aux BNC dont au moins la moitié des encaissements est électronique, et un plafonnement du droit de timbre sur les factures en espèces. Que votre régime soit concerné ou non, à vérifier avec votre comptable, vos clients et fournisseurs le seront : l'encaissement électronique devient la norme." },
        { q: "Combien de temps prend la digitalisation d'une PME ?", a: "Douze mois pour les quatre paliers, un par trimestre, chacun utilisé par l'entreprise dès sa livraison. Le dossier web-marchand part en janvier ; le flux qui perd de l'argent est en service en juin ; l'équipe et le client sont outillés avant la rentrée ; l'IA et le bilan ferment l'année." },
        { q: "Faut-il arrêter WhatsApp ?", a: "Non. Il devient un WhatsApp Business d'entreprise, avec un numéro, des réponses types et des horaires, et il diffuse. Les commandes, le suivi et le paiement passent dans une application ou un site, où ils sont enregistrés et mesurables." },
        { q: "Quand l'IA devient-elle utile ?", a: "Quand elle a des données à lire : un échéancier pour relancer, des règles pour répondre, des chiffres pour alerter. C'est pourquoi elle vient au quatrième trimestre, après l'encaissement, le flux et le back-office. Avant, elle n'a rien à lire." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "L'IA en premier n'a rien à lire ; l'application client en premier n'a rien à livrer." },
      { after: 2, text: "Fin 2027, le dirigeant ne sait plus tout de tête, et l'entreprise continue quand il n'est pas là." },
    ],
    cta: { eyebrow: 'Décrivez votre entreprise', title: "Votre secteur, votre taille, comment vous encaissez aujourd'hui, et le flux qui vous coûte de l'argent chaque mois. Nous vous rendons la feuille de route sur douze mois, palier par palier, avec ce qui s'achète, ce qui se construit, et le prix total écrit.", body: "Symloop accompagne la digitalisation des PME algériennes : encaissement CIB/Edahabia et QR intégré, facturation et relances, plateformes de commandes, de stock et de terrain sur mesure, back-office web, applications mobiles hors-ligne en arabe et en français, IA de relance et de support, hébergement conforme à la loi 18-07. Ingénieurs seniors à Alger et Sétif, cadrage écrit, code à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'Lancer un SaaS en Algérie en 2027' },
      { href: '/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/', kind: '2027', name: 'Une application mobile en Algérie en 2027 : sept décisions' },
      { href: '/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/', kind: 'Problème', name: 'Je gère cinquante employés et tout passe par téléphone' },
      { href: '/blog/solutions-informatiques-algerie-2026/', kind: 'Guide', name: 'Solutions informatiques en Algérie : par secteur' },
    ] },
  },
  en: {
    kind: 'Problem · Algerian SME', title: 'Digitising an SME in Algeria in 2027: where to start, in what order, and the twelve-month roadmap.',
    dek: "You run a company of ten to two hundred people. Orders arrive on WhatsApp, stock is in Excel, payments are in cash with a handwritten receipt, field staff call, and you are the only one who knows where everything stands. You want 2027 to be the year this changes, without breaking everything and without buying six pieces of software that do not talk to each other. The four steps in the order they pay, what to buy and what to build, the full stack, and the quarter-by-quarter calendar.",
    publishedAt: 'October 2026', readTime: '11 min read', author: 'Symloop', about: ['SME', 'Digitisation', 'Electronic payment', 'Back-office', 'Algeria 2027'],
    intro: [
      "**Short answer.** An SME does not digitise in one project but in four steps, one per quarter, in an order that is not negotiable. **First quarter: collect and invoice**, CIB/Edahabia card, QR, compliant invoice, reminders, because the 2027 finance bill rewards electronic collection and it is the step that pays back fastest. **Second quarter: the one flow that loses you money every month**, orders, stock or field, equipped end to end. **Third quarter: the team and the customer**, web back-office, field app, then an ordering app or site. **Fourth quarter: AI**, reminders, support, alerts, daily summary, last because it needs the data of the first three steps. What is identical in every company is bought by subscription; what makes your trade is built.",
      "This guide answers the SME owners who write to us with the same sentence, “I want to digitise my company but I don't know where to start”, and it draws on the cases we detailed: a [real-estate agency on WhatsApp and Google Sheets](/blog/agence-immobiliere-whatsapp-google-sheets-organiser-equipe-algerie-2026/), a [pharmacy with three branches](/blog/pharmacie-trois-officines-stock-excel-dates-de-peremption-algerie-2026/), a [carrier with fifty employees](/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/), a [restaurant that wants a till](/blog/caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026/).",
    ],
    sections: [
      { heading: 'The four steps, in the order they pay', body: [
        "Most SMEs start at the wrong end: a customer app, or “some AI”, because it is visible. Both fail for lack of data underneath. Here is the order that holds.",
      ], visual: 'order', after: [
        "**Collect and invoice first**, because that is where the money is. The 2027 finance bill, still a bill amendable until the vote, plans a 10% tax reduction for taxpayers under the IFU or BNC regimes whose receipts are at least half electronic, and a cap on stamp duty for invoices paid in cash. Whether your company is directly concerned or not, depending on your tax regime, to check with your accountant, your customers and suppliers will be, and the direction is clear: electronic collection and compliant invoicing become the norm. The online-merchant file, through your bank and GIE Monétique, takes weeks to months; it starts in January.",
        "**The flow that loses money next**, and only one. For an e-merchant it is [orders refused at delivery](/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/). For a pharmacy or a wholesaler, stock and expiry dates. For a carrier or a maintenance company, field staff. You already know it: it is the one you talk about on Sunday evening. **The team and the customer third**, because a customer app without a back-office ends up administered in Excel. **AI last**, because it follows up from a schedule, answers from your rules, alerts from your numbers: without the three steps it has nothing to read.",
      ] },
      { heading: 'What to buy by subscription, and what to build', body: [
        "The second common mistake is to oppose “off-the-shelf software” to “custom” as if one had to choose for the whole company. You choose by function.",
      ], visual: 'buy', after: [
        "**Accounting, payroll and filings are bought**, always: your accountant already uses software, and no company has a special trade when it comes to VAT. **A point-of-sale till is bought** as long as there is one site and standard products; we detailed the [restaurant](/blog/caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026/) case where several sites, the kitchen, delivery and loyalty must be linked. **Invoicing is bought** for a few invoices a month and built from hundreds, with schedule, reminders and online payment built in.",
        "**Orders, multi-warehouse stock, the field and the customer app are built** as soon as volume or the specificity of the trade exceeds what generic software plans for, and that is the case for most Algerian SMEs beyond a certain size: twenty orders a day, two warehouses, ten employees on the road, a customer who pays or tracks something. Custom is not a luxury: it is what lets the flow work with your rules, in Arabic and French, offline in the field, with payment in dinars. A project of this kind is scoped in writing with a total price before starting; we explained it in [can you know the total price before starting](/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/). If you still hesitate between existing software and development, our guide to [IT solutions in Algeria](/blog/solutions-informatiques-algerie-2026/) compares both by sector.",
      ] },
      { heading: 'The full stack, at the end of 2027', body: [
        "Here is what the SME looks like at the end of the four quarters. Each layer exists because the layer below exists.",
      ], visual: 'stack', after: [
        "**Customers** keep WhatsApp, but a company WhatsApp Business, with a number, template replies and hours, not the owner's personal phone; orders, tracking and payment go through an app or a site. **The team** works in an offline mobile app in the field and in a web back-office at the office; the owner reads a dashboard instead of calling. **Money** is collected electronically or recorded when in cash, invoiced cleanly, followed up automatically. **Data** lives in one single base, hosted in compliance with Law 18-07, backed up, with traced access. **AI** follows up, answers in Arabic, French and darija, alerts, and produces the daily summary every evening.",
        "What changes for the owner fits in one sentence: at the end of 2027 they no longer know everything by heart, and the company keeps running when they are not there.",
      ] },
      { heading: 'The roadmap, quarter by quarter', body: [
        "Twelve months, four deliveries the company uses the next day. Nothing waits for December.",
      ], visual: 'timeline', after: [
        "**First quarter, January to March: collect and invoice.** The merchant file starts in the first week of January. While waiting for the card, three things are set up without software: one single register of sales and receipts, kept by one person; a company WhatsApp number with rules; a compliant invoice for every business customer. By the end of March, CIB/Edahabia cards and QR are accepted, and the share of electronic collection is measured every month.",
        "**Second quarter, April to June: the flow that loses money.** Written scoping in April, development in May, go-live in June, with existing data imported. One flow only: the result must show on one number, refusal rate, value of expired stock, billed field hours.",
        "**Third quarter, July to September: the team and the customer.** The web back-office consolidates what the flow started; the field app replaces calls; an ordering app or site opens as a pilot to your best customers before September. We detailed [the seven decisions of a mobile app in 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/).",
        "**Fourth quarter, October to December: AI and review.** Payment and order reminders, support in three languages from your rules, alerts on anomalies, daily summary for the owner. And the review: share of electronic collection over the year, the number of the chosen flow, the owner's time recovered. That review is what decides 2028.",
      ] },
      { heading: 'The mistakes we see in SMEs', body: [], list: [
        "**Starting with the customer app or with AI.** Visible, but with no data underneath. Collection and flow first.",
        "**Six pieces of software that do not talk to each other.** Till, invoicing, stock, delivery, each with its own base. One base for what makes your trade, bought software for the rest.",
        "**Digitising everything in the same quarter.** The team gives up, and so does the owner. One step per quarter, used the next day.",
        "**Keeping the owner's personal phone as the customer channel.** The company stops when they are away. Company WhatsApp Business, then an app.",
        "**Starting the merchant file in June.** The card arrives in October. It starts in January.",
        "**Not importing existing data.** A wrong stock or schedule on day one loses the team's trust within a week. Import is part of the project.",
        "**Measuring nothing.** Without a number per step, nobody knows whether it worked. One number per quarter, read every month.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'Where do I start to digitise an SME in Algeria?', a: 'With collection and invoicing: CIB/Edahabia card and QR through online-merchant status, compliant invoice, reminders. It is the step where the money is, and the 2027 finance bill rewards electronic collection. The flow that loses you money comes next, then the team and the customer, then AI.' },
        { q: 'Off-the-shelf software or custom?', a: 'By function, not for the whole company. Accounting, payroll, a simple till and a showcase site are bought. Orders and delivery, multi-warehouse stock, field staff and the customer app are built as soon as volume or the specificity of the trade exceeds what generic software plans for.' },
        { q: 'What does the 2027 finance bill change for an SME?', a: 'The text, still a bill, plans a 10% tax reduction for IFU or BNC taxpayers whose receipts are at least half electronic, and a cap on stamp duty for cash invoices. Whether your regime is concerned or not, to check with your accountant, your customers and suppliers will be: electronic collection becomes the norm.' },
        { q: 'How long does digitising an SME take?', a: 'Twelve months for the four steps, one per quarter, each used by the company as soon as it is delivered. The merchant file starts in January; the flow that loses money is live in June; the team and the customer are equipped before September; AI and the review close the year.' },
        { q: 'Should I stop using WhatsApp?', a: 'No. It becomes a company WhatsApp Business, with a number, template replies and hours, and it broadcasts. Orders, tracking and payment go through an app or a site, where they are recorded and measurable.' },
        { q: 'When does AI become useful?', a: 'When it has data to read: a schedule to follow up, rules to answer from, numbers to alert on. That is why it comes in the fourth quarter, after collection, the flow and the back-office. Before that, it has nothing to read.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'AI first has nothing to read; a customer app first has nothing to deliver.' },
      { after: 2, text: 'At the end of 2027 the owner no longer knows everything by heart, and the company keeps running when they are not there.' },
    ],
    cta: { eyebrow: 'Describe your company', title: 'Your sector, your size, how you collect today, and the flow that costs you money every month. We return the twelve-month roadmap, step by step, with what to buy, what to build, and the written total price.', body: 'Symloop supports the digitisation of Algerian SMEs: CIB/Edahabia and QR collection built in, invoicing and reminders, custom order, stock and field platforms, web back-office, offline mobile apps in Arabic and French, AI reminders and support, Law 18-07 compliant hosting. Senior engineers in Algiers and Setif, written scoping, code in your name.' },
    related: { label: 'Read next', items: [
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'Launching a SaaS in Algeria in 2027' },
      { href: '/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/', kind: '2027', name: 'A mobile app in Algeria in 2027: seven decisions' },
      { href: '/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/', kind: 'Problem', name: 'I manage fifty employees and everything goes through the phone' },
      { href: '/blog/solutions-informatiques-algerie-2026/', kind: 'Guide', name: 'IT solutions in Algeria: by sector' },
    ] },
  },
  ar: {
    kind: 'مشكلة · مؤسسة جزائرية صغيرة أو متوسطة', title: 'رقمنة مؤسسة صغيرة أو متوسطة في الجزائر سنة 2027: من أين تبدأ، بأي ترتيب، وخارطة طريق اثني عشر شهراً.',
    dek: 'تدير شركة من عشرة إلى مئتي شخص. تصل الطلبات على واتساب، المخزون في إكسل، المدفوعات نقداً بوصل يدوي، موظفو الميدان يتصلون، وأنت الوحيد الذي يعرف أين وصل كل شيء. تريد أن تكون 2027 سنة التغيير، دون كسر كل شيء ودون شراء ستة برامج لا تتحدث مع بعضها. المراحل الأربع بالترتيب الذي تؤتي فيه ثمارها، ما يُشترى وما يُبنى، الطبقات الكاملة، والجدول فصلاً بفصل.',
    publishedAt: 'أكتوبر 2026', readTime: '11 دقيقة قراءة', author: 'سيملوب', about: ['مؤسسة صغيرة', 'رقمنة', 'دفع إلكتروني', 'مكتب خلفي', 'الجزائر 2027'],
    intro: [
      '**الجواب المختصر.** لا تُرقمَن المؤسسة في مشروع واحد بل في أربع مراحل، واحدة في كل فصل، بترتيب غير قابل للتفاوض. **الفصل الأول: التحصيل والفوترة**، بطاقة CIB/الذهبية، QR، فاتورة مطابقة، تذكيرات، لأن مشروع قانون المالية 2027 يكافئ التحصيل الإلكتروني ولأنها المرحلة الأسرع عائداً. **الفصل الثاني: التدفق الوحيد الذي يخسرك المال كل شهر**، طلبات أو مخزون أو ميدان، مجهَّز حتى النهاية. **الفصل الثالث: الفريق والزبون**، مكتب خلفي ويب، تطبيق ميداني، ثم تطبيق أو موقع طلب. **الفصل الرابع: الذكاء الاصطناعي**، تذكيرات، دعم، تنبيهات، ملخص اليوم، أخيراً لأنه يحتاج بيانات المراحل الثلاث الأولى. ما هو متطابق في كل الشركات يُشترى بالاشتراك؛ وما يصنع مهنتك يُبنى.',
      'يجيب هذا الدليل مسيّري المؤسسات الذين يكتبون لنا بالجملة نفسها، «أريد رقمنة شركتي لكن لا أعرف من أين أبدأ»، ويستند إلى الحالات التي فصّلناها: [وكالة عقارية على واتساب وجوجل شيتس](/blog/agence-immobiliere-whatsapp-google-sheets-organiser-equipe-algerie-2026/)، [صيدلية بثلاث وكالات](/blog/pharmacie-trois-officines-stock-excel-dates-de-peremption-algerie-2026/)، [ناقل بخمسين موظفاً](/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/)، [مطعم يريد صندوقاً](/blog/caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026/).',
    ],
    sections: [
      { heading: 'المراحل الأربع، بالترتيب الذي تؤتي فيه ثمارها', body: [
        'تبدأ معظم المؤسسات من الطرف الخطأ: تطبيق للزبائن أو «ذكاء اصطناعي» لأنه مرئي. وكلاهما يفشل لغياب البيانات تحته. هذا الترتيب الذي يصمد.',
      ], visual: 'order', after: [
        '**التحصيل والفوترة أولاً**، لأنها المرحلة التي فيها المال. ينص مشروع قانون المالية 2027، وهو ما زال مشروعاً قابلاً للتعديل حتى التصويت، على تخفيض ضريبي بـ10 % للمكلفين بنظام IFU أو BNC الذين يمر نصف تحصيلهم على الأقل عبر وسائل إلكترونية، وسقف لحق الطابع على الفواتير المدفوعة نقداً. سواء كانت شركتك معنية مباشرة أم لا حسب نظامك الضريبي، وهو ما تتحقق منه مع محاسبك، فإن زبائنك ومورديك سيكونون معنيين، والاتجاه واضح: التحصيل الإلكتروني والفاتورة المطابقة يصبحان القاعدة. ملف التاجر الإلكتروني عبر بنكك وGIE Monétique يستغرق أسابيع إلى أشهر؛ ينطلق في جانفي.',
        '**التدفق الذي يخسر المال بعد ذلك**، وواحد فقط. للتاجر الإلكتروني هو [الطلبات المرفوضة عند التسليم](/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/). للصيدلية أو تاجر الجملة، المخزون وتواريخ الصلاحية. للناقل أو شركة الصيانة، موظفو الميدان. أنت تعرفه أصلاً: هو الذي تتحدث عنه مساء الأحد. **الفريق والزبون ثالثاً**، لأن تطبيق زبون بلا مكتب خلفي ينتهي مُداراً في إكسل. **الذكاء الاصطناعي أخيراً**، لأنه يذكّر انطلاقاً من جدول استحقاقات، ويجيب انطلاقاً من قواعدك، وينبّه انطلاقاً من أرقامك: بلا المراحل الثلاث لا يجد ما يقرأ.',
      ] },
      { heading: 'ما يُشترى بالاشتراك، وما يُبنى', body: [
        'الخطأ الشائع الثاني هو مقابلة «برنامج من السوق» بـ«مخصص» كأن الاختيار يجب أن يكون للشركة كلها. نختار حسب الوظيفة.',
      ], visual: 'buy', after: [
        '**المحاسبة والأجور والتصريحات تُشترى**، دائماً: محاسبك يستعمل برنامجاً أصلاً، ولا شركة لها مهنة خاصة في ما يخص TVA. **صندوق نقطة البيع يُشترى** ما دام هناك موقع واحد ومنتجات قياسية؛ فصّلنا حالة [المطعم](/blog/caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026/) حيث يجب ربط عدة مواقع والمطبخ والتوصيل والولاء. **الفوترة تُشترى** لبضع فواتير في الشهر وتُبنى ابتداءً من المئات، بجدول استحقاقات وتذكيرات ودفع إلكتروني مدمج.',
        '**الطلبات والمخزون متعدد المستودعات والميدان وتطبيق الزبون تُبنى** بمجرد أن يتجاوز الحجم أو خصوصية المهنة ما تتوقعه البرامج العامة، وهو حال معظم المؤسسات الجزائرية فوق حجم معين: عشرون طلباً يومياً، مستودعان، عشرة موظفين في التنقل، زبون يدفع أو يتابع شيئاً. المخصص ليس ترفاً: هو ما يتيح للتدفق أن يعمل بقواعدك، بالعربية والفرنسية، دون اتصال في الميدان، بالدفع بالدينار. مشروع من هذا النوع يُؤطَّر كتابياً بسعر إجمالي قبل البدء؛ شرحناه في [هل يمكن معرفة السعر الإجمالي قبل البدء](/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/). وإن كنت ما زلت متردداً بين برنامج جاهز وتطوير، يقارن دليلنا حول [الحلول المعلوماتية في الجزائر](/blog/solutions-informatiques-algerie-2026/) الاثنين حسب القطاع.',
      ] },
      { heading: 'الطبقات الكاملة، نهاية 2027', body: [
        'هكذا تبدو المؤسسة في نهاية الفصول الأربعة. كل طبقة موجودة لأن الطبقة تحتها موجودة.',
      ], visual: 'stack', after: [
        '**الزبائن** يحتفظون بواتساب، لكن واتساب للأعمال خاص بالشركة، برقم وردود جاهزة ومواعيد، لا الهاتف الشخصي للمسيّر؛ والطلبات والمتابعة والدفع تمر عبر تطبيق أو موقع. **الفريق** يعمل في تطبيق جوّال دون اتصال في الميدان وفي مكتب خلفي ويب في المكتب؛ ويقرأ المسيّر لوحة قيادة بدل أن يتصل. **المال** يُحصَّل إلكترونياً أو يُسجَّل حين يكون نقداً، يُفوتر بشكل سليم، ويُذكَّر به تلقائياً. **البيانات** تعيش في قاعدة واحدة، مستضافة وفق القانون 18-07، محفوظة احتياطياً، بوصول متتبَّع. **الذكاء الاصطناعي** يذكّر ويجيب بالعربية والفرنسية والدارجة وينبّه وينتج كل مساء ملخص اليوم.',
        'ما يتغير للمسيّر يُلخَّص في جملة: نهاية 2027 لم يعد يحفظ كل شيء في رأسه، والشركة تستمر حين لا يكون موجوداً.',
      ] },
      { heading: 'خارطة الطريق، فصلاً بفصل', body: [
        'اثنا عشر شهراً، أربع تسليمات تستعملها المؤسسة في اليوم التالي. لا شيء ينتظر ديسمبر.',
      ], visual: 'timeline', after: [
        '**الفصل الأول، جانفي إلى مارس: التحصيل والفوترة.** ينطلق ملف التاجر الإلكتروني في الأسبوع الأول من جانفي. وفي انتظار البطاقة تُرسى ثلاثة أشياء بلا برنامج: سجل واحد للمبيعات والتحصيلات يمسكه شخص واحد؛ رقم واتساب للشركة بقواعد؛ فاتورة مطابقة لكل زبون مهني. نهاية مارس تُقبل بطاقة CIB/الذهبية وQR، وتُقاس نسبة التحصيل الإلكتروني كل شهر.',
        '**الفصل الثاني، أفريل إلى جوان: التدفق الذي يخسر المال.** تأطير مكتوب في أفريل، تطوير في ماي، تشغيل في جوان مع استرجاع البيانات الموجودة. تدفق واحد فقط: يجب أن تظهر النتيجة على رقم واحد، نسبة الرفض، قيمة المخزون المنتهي، ساعات الميدان المفوترة.',
        '**الفصل الثالث، جويلية إلى سبتمبر: الفريق والزبون.** يوحّد المكتب الخلفي ما بدأه التدفق؛ يعوّض التطبيق الميداني المكالمات؛ ويُفتح تطبيق أو موقع طلب تجريبياً لأفضل زبائنك قبل الدخول. فصّلنا [القرارات السبعة لتطبيق جوّال في 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/).',
        '**الفصل الرابع، أكتوبر إلى ديسمبر: الذكاء الاصطناعي والحصيلة.** تذكيرات الدفع والطلب، دعم بثلاث لغات من قواعدك، تنبيهات على الشذوذ، ملخص اليوم للمسيّر. والحصيلة: حصة التحصيل الإلكتروني على السنة، رقم التدفق المختار، وقت المسيّر المسترجَع. بهذه الحصيلة تُقرَّر 2028.',
      ] },
      { heading: 'الأخطاء التي نراها في المؤسسات', body: [], list: [
        '**البدء بتطبيق الزبون أو بالذكاء الاصطناعي.** مرئيان لكن بلا بيانات تحتهما. التحصيل والتدفق أولاً.',
        '**ستة برامج لا تتحدث مع بعضها.** صندوق، فوترة، مخزون، توصيل، لكل منها قاعدته. قاعدة واحدة لما يصنع مهنتك، وبرامج مشتراة للباقي.',
        '**رقمنة كل شيء في الفصل نفسه.** ينقطع الفريق والمسيّر معه. مرحلة في كل فصل، تُستعمل في اليوم التالي.',
        '**إبقاء الهاتف الشخصي للمسيّر قناةً للزبائن.** تتوقف الشركة حين يغيب. واتساب للأعمال خاص بالشركة، ثم تطبيق.',
        '**إطلاق ملف التاجر الإلكتروني في جوان.** تصل البطاقة في أكتوبر. ينطلق في جانفي.',
        '**عدم استرجاع البيانات الموجودة.** مخزون أو جدول استحقاقات خاطئ في اليوم الأول يُفقد الفريق الثقة في أسبوع. الاسترجاع جزء من المشروع.',
        '**عدم قياس أي شيء.** بلا رقم لكل مرحلة لا أحد يعرف إن نجحت. رقم في كل فصل، يُقرأ كل شهر.',
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: 'من أين أبدأ لرقمنة مؤسسة في الجزائر؟', a: 'بالتحصيل والفوترة: بطاقة CIB/الذهبية وQR عبر صفة التاجر الإلكتروني، فاتورة مطابقة، تذكيرات. هي المرحلة التي فيها المال، ومشروع قانون المالية 2027 يكافئ التحصيل الإلكتروني. التدفق الذي يخسرك المال يأتي بعدها، ثم الفريق والزبون، ثم الذكاء الاصطناعي.' },
        { q: 'برنامج من السوق أم مخصص؟', a: 'حسب الوظيفة لا للشركة كلها. المحاسبة والأجور والصندوق البسيط والموقع التعريفي تُشترى. الطلبات والتوصيل والمخزون متعدد المستودعات وموظفو الميدان وتطبيق الزبون تُبنى بمجرد أن يتجاوز الحجم أو خصوصية المهنة ما تتوقعه البرامج العامة.' },
        { q: 'ما الذي يغيّره مشروع قانون المالية 2027 لمؤسسة صغيرة؟', a: 'ينص النص، وهو ما زال مشروعاً، على تخفيض ضريبي بـ10 % للمكلفين بنظام IFU أو BNC الذين يمر نصف تحصيلهم على الأقل إلكترونياً، وسقف لحق الطابع على الفواتير النقدية. سواء كان نظامك معنياً أم لا، وهو ما تتحقق منه مع محاسبك، فإن زبائنك ومورديك سيكونون معنيين: التحصيل الإلكتروني يصبح القاعدة.' },
        { q: 'كم تستغرق رقمنة مؤسسة صغيرة؟', a: 'اثنا عشر شهراً للمراحل الأربع، واحدة في كل فصل، تستعملها المؤسسة بمجرد تسليمها. ينطلق ملف التاجر الإلكتروني في جانفي؛ التدفق الذي يخسر المال في الخدمة في جوان؛ الفريق والزبون مجهَّزان قبل الدخول؛ الذكاء الاصطناعي والحصيلة يختمان السنة.' },
        { q: 'هل يجب التوقف عن واتساب؟', a: 'لا. يصبح واتساب للأعمال خاصاً بالشركة، برقم وردود جاهزة ومواعيد، ويبثّ. أما الطلبات والمتابعة والدفع فتمر عبر تطبيق أو موقع حيث تُسجَّل وتُقاس.' },
        { q: 'متى يصبح الذكاء الاصطناعي مفيداً؟', a: 'حين يملك بيانات يقرؤها: جدول استحقاقات ليذكّر، قواعد ليجيب، أرقاماً لينبّه. لذلك يأتي في الفصل الرابع بعد التحصيل والتدفق والمكتب الخلفي. قبل ذلك لا يجد ما يقرأ.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'الذكاء الاصطناعي أولاً لا يجد ما يقرأ؛ وتطبيق الزبون أولاً لا يجد ما يسلّم.' },
      { after: 2, text: 'نهاية 2027 لم يعد المسيّر يحفظ كل شيء في رأسه، والشركة تستمر حين لا يكون موجوداً.' },
    ],
    cta: { eyebrow: 'صف شركتك', title: 'قطاعك، حجمك، كيف تحصّل اليوم، والتدفق الذي يكلّفك المال كل شهر. نعيد إليك خارطة طريق اثني عشر شهراً، مرحلة بمرحلة، مع ما يُشترى وما يُبنى والسعر الإجمالي المكتوب.', body: 'ترافق سيملوب رقمنة المؤسسات الجزائرية: تحصيل CIB/الذهبية وQR مدمج، فوترة وتذكيرات، منصات طلبات ومخزون وميدان مخصصة، مكتب خلفي ويب، تطبيقات جوّال دون اتصال بالعربية والفرنسية، ذكاء اصطناعي للتذكير والدعم، استضافة مطابقة للقانون 18-07. مهندسون خبراء في الجزائر وسطيف، تأطير مكتوب، كود باسمك.' },
    related: { label: 'اقرأ بعد ذلك', items: [
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'إطلاق SaaS في الجزائر سنة 2027' },
      { href: '/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/', kind: '2027', name: 'تطبيق جوّال في الجزائر 2027: سبعة قرارات' },
      { href: '/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/', kind: 'مشكلة', name: 'أسيّر خمسين موظفاً وكل شيء يمر بالهاتف' },
      { href: '/blog/solutions-informatiques-algerie-2026/', kind: 'دليل', name: 'الحلول المعلوماتية في الجزائر: حسب القطاع' },
    ] },
  },
};

const KEYWORDS = "digitaliser pme algérie 2027, transformation digitale pme algérie, digitalisation entreprise algérie par où commencer, logiciel ou sur mesure pme algérie, feuille de route digitale 2027, paiement électronique pme algérie plf 2027, back-office pme algérie, digitise sme algeria 2027, رقمنة مؤسسة صغيرة الجزائر 2027";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
