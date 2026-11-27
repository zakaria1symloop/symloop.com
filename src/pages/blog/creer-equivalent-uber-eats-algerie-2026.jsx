import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/creer-equivalent-uber-eats-algerie-2026.mjs';

const SLUG = 'creer-equivalent-uber-eats-algerie-2026';
const FIGURES = ['market', 'positions', 'changes', 'architecture', 'timeline'];
const DATE = '2026-10-28';

const SRC = {
  jumiaFood: 'https://maghrebemergent.news/fr/start-up-la-fin-du-service-jumia-food-en-algerie-et-dans-six-autres-pays-dafrique/',
  jumiaExit: 'https://www.leconomistemaghrebin.com/2026/02/12/jumia-cesse-ses-activites-en-algerie-14-ans-apres/',
  yassirUno: 'https://launchbaseafrica.com/2026/03/09/algerian-super-app-yassir-buys-uno-hypermarkets-to-fill-the-jumia-shaped-hole/',
  qooxy: 'https://www.wearetech.africa/fr/fils/solutions/algerie-qooxy-connecte-restaurants-et-consommateurs-via-une-application-mobile',
};

const CONTENT = {
  fr: {
    kind: 'Vu en France, à construire en Algérie · 02', title: "Uber Eats en Algérie : pourquoi il n'y est pas, qui livre vraiment, et comment lancer la version qui tient (2026).",
    dek: "Le marché de la livraison de repas en Algérie n'est pas vide, il est concentré sur trois villes. Ce que le modèle français a prouvé, qui livre aujourd'hui, les trois positionnements encore ouverts, l'architecture à trois applications et le calendrier réaliste.",
    publishedAt: 'Octobre 2026', readTime: '11 min de lecture', author: 'Symloop', about: ['Uber Eats', 'Livraison de repas', 'Algérie', 'Startup'],
    intro: [
      "**Réponse courte.** Uber Eats n'opère pas en Algérie et n'a jamais annoncé y venir. Jumia Food, le seul acteur international qui y livrait des repas, a fermé ce service fin 2023, et Jumia a quitté le pays en mars 2026. Aujourd'hui, la livraison de repas par application existe surtout à Alger, Oran et Constantine via Yassir Express, et quelques acteurs locaux couvrent des villes moyennes. Partout ailleurs, on commande par téléphone, sur Instagram ou par WhatsApp. Pour un fondateur de la diaspora, l'opportunité n'est pas de « faire Uber Eats à Alger » contre une super-app installée. Elle est dans **trois positions encore ouvertes** : la ville moyenne servie en profondeur, la commande directe pour les restaurants, et la logistique B2B. Ce guide détaille le marché, ce qui doit changer, l'architecture et le calendrier.",
      "C'est le deuxième épisode de notre série « Vu en France, à construire en Algérie », après [Doctolib en Algérie](/blog/creer-equivalent-doctolib-algerie-2026/). Le cadre général du fondateur de la diaspora, structure, équipe, calendrier, est dans [notre guide dédié](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/).",
    ],
    sections: [
      { heading: "Ce qu'Uber Eats a prouvé en France", body: [
        "Uber Eats est arrivé en France en 2016 et a imposé en quelques années un geste : ouvrir une application, choisir un restaurant, payer, suivre le livreur sur une carte. Trois mécanismes expliquent cette adoption, et aucun n'est technologique.",
      ], list: [
        "**La densité.** Dans un quartier donné, assez de restaurants et assez de livreurs pour que la commande arrive en trente minutes. Sans densité, le client attend, le restaurant perd de l'argent et le livreur part.",
        "**Le paiement à la commande.** Le client paie avant que le plat ne soit cuisiné. Le restaurant n'a pas de risque d'impayé, le livreur ne transporte pas d'argent.",
        "**L'agrégation de la demande pour le restaurateur.** Un restaurant indépendant accède d'un coup à des milliers de clients qu'il n'aurait jamais touchés. C'est pour cela qu'il accepte une commission élevée, souvent autour d'un quart à un tiers du panier.",
      ], after: [
        "Si vous vivez en France, vous connaissez ces trois mécanismes de l'intérieur. **Le troisième est celui qui ne se transpose pas tel quel en Algérie**, et c'est tout le sujet de ce guide.",
      ] },
      { heading: "L'état réel du marché algérien en 2026", body: [
        "Le marché de la livraison de repas en Algérie a une histoire courte et instructive. Jumia Food, l'acteur international, a [fermé son service de livraison de repas en Algérie et dans six autres pays fin 2023](" + SRC.jumiaFood + "). Le groupe a ensuite [cessé l'ensemble de ses activités algériennes en mars 2026](" + SRC.jumiaExit + "), le marché algérien ne pesant qu'environ 2 % de son volume d'affaires. L'acteur le plus visible est aujourd'hui Yassir, la super-app algérienne née dans le VTC, dont la branche Yassir Express livre repas et courses dans les grandes villes et qui a [racheté les hypermarchés Uno en mars 2026](" + SRC.yassirUno + ") pour renforcer sa logistique. À côté, des acteurs locaux se positionnent sur les villes peu couvertes : [Qooxy, née à Sétif en 2020](" + SRC.qooxy + "), revendique plus de 100 000 téléchargements sur Android et s'appuie sur des livreurs indépendants équipés d'une application dédiée.",
        "Trois faits comptent pour un fondateur.",
      ], list: [
        "**Le paiement reste le cash.** Même sur les plateformes existantes, la majorité des commandes sont payées en espèces à la livraison. Le paiement en ligne progresse mais ne porte pas encore le modèle.",
        "**La couverture s'arrête aux grandes villes.** Les wilayas moyennes, Sétif, Béjaïa, Tlemcen, Batna, Annaba, Blida, ont des restaurants, des smartphones et une demande réelle, mais une offre de livraison par application faible ou inexistante.",
        "**Le restaurant livre déjà, sans plateforme.** Dans la plupart des villes, le restaurant a un numéro WhatsApp, un compte Instagram et un ou deux livreurs à lui. Le besoin n'est pas de créer la livraison, il est de l'organiser.",
      ], visual: 'market' },
      { heading: 'Trois positionnements encore ouverts', body: [
        "Attaquer Alger de front contre une super-app qui a la flotte, la marque et le capital est le choix le plus coûteux, et celui que nous déconseillons à un fondateur qui lance depuis la France. Trois autres positions sont ouvertes.",
      ], preOrdered: [
        "**La ville moyenne, servie en profondeur.** Une seule ville, trente restaurants actifs, vingt livreurs connus par leur prénom, une zone de livraison dessinée à la main. C'est exactement la stratégie ville par ville qui a fait Doctolib, et c'est celle de Qooxy à Sétif. Quand une ville tourne, on ouvre la suivante.",
        "**La commande directe pour les restaurants.** Beaucoup de restaurateurs et de chaînes locales veulent une application à leur nom, sans commission de marketplace, pour garder leur client et ses données. Vous vendez alors un logiciel, pas une place de marché. Nous avons détaillé ce modèle dans notre guide de [l'application de commande en ligne pour restaurant](/blog/application-restaurant-livraison-algerie/).",
        "**La logistique B2B.** Vous ne vendez pas aux consommateurs. Vous livrez pour les restaurants, les pâtisseries et les commerces qui ont déjà la demande mais pas la flotte, avec une application livreur, un dispatch et une facturation par course. La demande existe, le logiciel de [gestion de flotte et de suivi GPS](/blog/gestion-flotte-livraison-suivi-gps-algerie-2026/) est le cœur du produit.",
      ], visual: 'positions', after: [
        "Les trois positions partagent la même base technique. Elles diffèrent par le client que vous facturez. **Choisissez le client avant de choisir les écrans.**",
      ] },
      { heading: "Ce qui doit changer par rapport au modèle français", body: [
        "Copier l'écran d'Uber Eats est facile. Copier son modèle économique en Algérie fait couler le projet. Six points changent.",
      ], visual: 'changes', after: [
        "**Le paiement.** Espèces à la livraison par défaut, CIB et Edahabia en option. Cela impose une caisse livreur, un règlement quotidien du cash collecté et une réconciliation que l'application doit faire pour vous, pas vous à la main. Le paiement en ligne se branche ensuite via SATIM, nous l'avons documenté dans notre guide [CIB et Edahabia](/blog/ecommerce-algerie-paiement-cib-edahabia-2024/).",
        "**L'adresse.** Il n'y a pas d'adressage normalisé fiable. L'application doit fonctionner avec un repère GPS, un point de référence en texte libre et un appel du livreur en un geste. Une interface qui exige un numéro et une rue perd des commandes dès le premier jour.",
        "**L'identité.** Numéro de téléphone et code SMS. Pas de compte email.",
        "**Les livreurs.** Moto et voiture plutôt que vélo, un statut à cadrer juridiquement, et un paiement quotidien ou hebdomadaire sans lequel personne ne reste.",
        "**Les pics.** Le ftour pendant le Ramadan, les soirées d'été et les soirs de match créent des pointes très supérieures à celles d'un dîner parisien. Le dispatch et l'infrastructure doivent être dimensionnés pour elles.",
        "**Le revenu.** Une commission de 25 à 30 % n'est pas acceptée par un restaurateur algérien dont la marge est serrée et qui livre déjà lui-même. Les modèles qui tiennent combinent une commission plus basse, un abonnement mensuel pour le restaurant, et des frais de livraison payés par le client et affichés clairement.",
      ] },
      { heading: "L'architecture technique : trois applications et un dispatch", body: [
        "Une plateforme de livraison de repas, ce n'est pas une application, c'est trois : le client, le restaurant et le livreur. Et le vrai produit est le quatrième composant, invisible : le dispatch, qui décide qui livre quoi, quand et à quel coût.",
      ], visual: 'architecture', after: [
        "Le dispatch est là où se cachent les pertes. Attribution d'une commande au mauvais livreur, distances calculées à vol d'oiseau au lieu de la route réelle, impossibilité de regrouper deux commandes voisines, temps de préparation ignoré : chacun de ces défauts se traduit par un client qui attend et un livreur payé pour rien. **Une équipe qui a déjà livré des applications de livraison et des systèmes de suivi de flotte en Algérie sait où sont ces pièges.** Notre guide sur [l'application de livraison sur mesure](/blog/application-livraison-sur-mesure-algerie-2026/) détaille les modules.",
      ] },
      { heading: 'Budget et calendrier réalistes', body: [
        "Trois applications, un dispatch, un back-office et une caisse livreur : le projet se situe en haut de la catégorie 3 de notre [grille de prix des applications mobiles en Algérie](/blog/prix-application-mobile-algerie-2026/), avec le paiement en ligne en option. Le calendrier que nous appliquons tient en six mois, pilote fermé compris.",
      ], list: [
        "**Semaines 1 et 2.** Cadrage : ville pilote, zones, règles de dispatch, modèle de revenu, statut des livreurs.",
        "**Semaines 3 à 5.** Design des trois applications, en arabe et en français, testé dans une vraie cuisine et sur une vraie moto.",
        "**Semaines 6 à 15.** Développement du client, du restaurant, du livreur et du dispatch, avec une version testable toutes les deux semaines.",
        "**Semaines 16 à 18.** Pilote fermé : dix restaurants, un quartier, de vrais livreurs, de vraies commandes. C'est l'étape que tout le monde saute et celle qui révèle les vrais temps de préparation et de trajet.",
        "**Semaines 19 à 26.** Ouverture : trente restaurants, recrutement de livreurs, marketing local sur Facebook, TikTok et dans les groupes de quartier.",
      ], visual: 'timeline' },
      { heading: 'Les erreurs qui tuent ce projet', body: [], list: [
        "**Lancer à Alger contre la super-app.** Le capital nécessaire pour atteindre la densité y est hors de portée d'un premier projet.",
        "**Copier la commission française.** Les restaurateurs refusent ou gonflent leurs prix, et le client retourne au téléphone.",
        "**Ignorer le cash.** Sans caisse livreur et réconciliation automatique, l'argent fuit et personne ne sait où.",
        "**Construire les trois applications sans dispatch sérieux.** Belles interfaces, livraisons en retard, abandon en trois mois.",
        "**Oublier le Ramadan.** Le mois le plus important de l'année arrive avec des pics que l'infrastructure n'a jamais vus.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Uber Eats est-il disponible en Algérie ?", a: "Non. Uber Eats n'opère pas en Algérie. En Afrique, le service est présent principalement en Afrique du Sud et au Kenya. Uber lui-même n'y propose pas de VTC." },
        { q: "Quel est l'équivalent d'Uber Eats en Algérie ?", a: "Yassir Express, la branche livraison de la super-app algérienne Yassir, est l'acteur le plus visible dans les grandes villes. Jumia Food a fermé fin 2023. Des acteurs locaux comme Qooxy couvrent des villes moyennes. Dans la plupart des villes, les restaurants livrent eux-mêmes via téléphone, Instagram et WhatsApp." },
        { q: "Combien coûte le lancement d'une application de livraison de repas en Algérie ?", a: "Trois applications et un dispatch placent le projet en haut de la catégorie 3 de notre grille de prix des applications mobiles, hors équipe terrain, flotte et marketing. Comptez six mois jusqu'à l'ouverture d'une première ville." },
        { q: "Faut-il le paiement en ligne au lancement ?", a: "Non. Le cash à la livraison reste majoritaire. Lancez avec une caisse livreur et une réconciliation automatique, puis ajoutez CIB et Edahabia via SATIM quand le volume le justifie." },
        { q: "Peut-on piloter ce projet depuis la France ?", a: "Le produit, oui, avec une équipe technique en Algérie sur votre fuseau horaire. L'activation des restaurants et le recrutement des livreurs demandent une présence locale, un associé ou une petite équipe terrain dans la ville pilote." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Le besoin n'est pas de créer la livraison en Algérie. Il est de l'organiser." },
      { after: 4, text: "Le produit, c'est le dispatch. Les trois applications ne sont que ses interfaces." },
    ],
    cta: { eyebrow: 'Vous avez vu le modèle fonctionner', title: "Construisons la version algérienne. Décrivez votre ville, votre position et votre budget : nous vous dirons quoi lancer en premier et en combien de temps.", body: "Symloop conçoit et développe des applications de livraison, des systèmes de dispatch et de suivi de flotte pour le marché algérien, avec des ingénieurs seniors à Alger et Sétif. Nous travaillons avec des fondateurs établis en France sur leur fuseau horaire, avec un cadrage écrit, des jalons et la propriété totale du code." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/creer-equivalent-doctolib-algerie-2026/', kind: 'Série · 01', name: "Doctolib en Algérie : lancer la prise de rendez-vous médical en ligne" },
      { href: '/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/', kind: 'Guide fondateur', name: 'Lancer une startup tech en Algérie depuis la France' },
      { href: '/blog/application-livraison-sur-mesure-algerie-2026/', kind: 'Guide', name: 'Application de livraison sur mesure : comment construire la vôtre' },
      { href: '/blog/gestion-flotte-livraison-suivi-gps-algerie-2026/', kind: 'Guide', name: 'Gestion de flotte de livraison et suivi GPS en Algérie' },
    ] },
  },
  en: {
    kind: 'Seen in France, to be built in Algeria · 02', title: 'Uber Eats in Algeria: why it is not there, who really delivers, and how to launch the version that lasts (2026).',
    dek: "Algeria's meal delivery market is not empty, it is concentrated in three cities. What the French model proved, who delivers today, the three positions still open, the three-app architecture and a realistic timeline.",
    publishedAt: 'October 2026', readTime: '11 min read', author: 'Symloop', about: ['Uber Eats', 'Food delivery', 'Algeria', 'Startup'],
    intro: [
      "**Short answer.** Uber Eats does not operate in Algeria and has never announced plans to. Jumia Food, the only international player delivering meals there, shut that service at the end of 2023, and Jumia left the country in March 2026. Today, app-based meal delivery exists mostly in Algiers, Oran and Constantine through Yassir Express, and a few local players cover mid-sized cities. Everywhere else, people order by phone, on Instagram or through WhatsApp. For a diaspora founder, the opportunity is not to \"do Uber Eats in Algiers\" against an established super-app. It lies in **three positions still open**: the mid-sized city served in depth, direct ordering for restaurants, and B2B logistics. This guide covers the market, what must change, the architecture and the timeline.",
      "This is the second episode of our series \"Seen in France, to be built in Algeria\", after [Doctolib in Algeria](/blog/creer-equivalent-doctolib-algerie-2026/). The general frame for a diaspora founder, structure, team, timeline, is in [our dedicated guide](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/).",
    ],
    sections: [
      { heading: 'What Uber Eats proved in France', body: [
        "Uber Eats arrived in France in 2016 and within a few years made a gesture universal: open an app, pick a restaurant, pay, follow the courier on a map. Three mechanisms explain that adoption, and none of them is technological.",
      ], list: [
        "**Density.** In a given district, enough restaurants and enough couriers for the order to arrive in thirty minutes. Without density, the customer waits, the restaurant loses money and the courier leaves.",
        "**Payment at order time.** The customer pays before the dish is cooked. The restaurant carries no bad-debt risk, the courier carries no cash.",
        "**Demand aggregation for the restaurant owner.** An independent restaurant suddenly reaches thousands of customers it would never have touched. That is why it accepts a high commission, often around a quarter to a third of the basket.",
      ], after: [
        "If you live in France, you know these three mechanisms from the inside. **The third is the one that does not transfer as is to Algeria**, and that is the whole subject of this guide.",
      ] },
      { heading: 'The real state of the Algerian market in 2026', body: [
        "Meal delivery in Algeria has a short, instructive history. Jumia Food, the international player, [closed its meal delivery service in Algeria and six other countries at the end of 2023](" + SRC.jumiaFood + "). The group then [ceased all its Algerian operations in March 2026](" + SRC.jumiaExit + "), the Algerian market weighing only about 2% of its business volume. The most visible player today is Yassir, the Algerian super-app born in ride-hailing, whose Yassir Express arm delivers meals and groceries in the big cities and which [acquired the Uno hypermarkets in March 2026](" + SRC.yassirUno + ") to strengthen its logistics. Alongside, local players position themselves on under-served cities: [Qooxy, born in Sétif in 2020](" + SRC.qooxy + "), claims more than 100,000 Android downloads and relies on independent couriers equipped with a dedicated app.",
        "Three facts matter for a founder.",
      ], list: [
        "**Payment is still cash.** Even on existing platforms, most orders are paid in cash on delivery. Online payment is growing but does not yet carry the model.",
        "**Coverage stops at the big cities.** Mid-sized wilayas, Sétif, Béjaïa, Tlemcen, Batna, Annaba, Blida, have restaurants, smartphones and real demand, but weak or no app-based delivery supply.",
        "**Restaurants already deliver, without a platform.** In most cities a restaurant has a WhatsApp number, an Instagram account and one or two couriers of its own. The need is not to create delivery, it is to organise it.",
      ], visual: 'market' },
      { heading: 'Three positions still open', body: [
        "Attacking Algiers head-on against a super-app that has the fleet, the brand and the capital is the most expensive choice, and the one we advise against for a founder launching from France. Three other positions are open.",
      ], preOrdered: [
        "**The mid-sized city, served in depth.** One city, thirty active restaurants, twenty couriers known by first name, a delivery zone drawn by hand. It is exactly the city-by-city strategy that made Doctolib, and it is Qooxy's in Sétif. When one city runs, you open the next.",
        "**Direct ordering for restaurants.** Many restaurant owners and local chains want an app in their own name, with no marketplace commission, to keep their customer and their data. You then sell software, not a marketplace. We detailed this model in our guide to [online ordering apps for restaurants](/blog/application-restaurant-livraison-algerie/).",
        "**B2B logistics.** You do not sell to consumers. You deliver for restaurants, pastry shops and stores that already have demand but no fleet, with a courier app, a dispatch and per-trip invoicing. The demand exists, and [fleet management and GPS tracking](/blog/gestion-flotte-livraison-suivi-gps-algerie-2026/) software is the core of the product.",
      ], visual: 'positions', after: [
        "The three positions share the same technical base. They differ by the customer you invoice. **Choose the customer before choosing the screens.**",
      ] },
      { heading: 'What must change from the French model', body: [
        "Copying the Uber Eats screen is easy. Copying its business model in Algeria sinks the project. Six points change.",
      ], visual: 'changes', after: [
        "**Payment.** Cash on delivery by default, CIB and Edahabia as options. That requires a courier cash desk, daily settlement of collected cash and a reconciliation the app must do for you, not you by hand. Online payment plugs in later through SATIM, documented in our [CIB and Edahabia guide](/blog/ecommerce-algerie-paiement-cib-edahabia-2024/).",
        "**Address.** There is no reliable standardised addressing. The app must work with a GPS pin, a free-text landmark and a one-tap call to the courier. An interface that demands a number and a street loses orders from day one.",
        "**Identity.** Phone number and SMS code. No email account.",
        "**Couriers.** Motorbikes and cars rather than bicycles, a legal status to frame, and a daily or weekly payout without which nobody stays.",
        "**Peaks.** Iftar during Ramadan, summer evenings and match nights create spikes far above a Parisian dinner rush. Dispatch and infrastructure must be sized for them.",
        "**Revenue.** A 25 to 30% commission is not accepted by an Algerian restaurant owner with tight margins who already delivers. The models that last combine a lower commission, a monthly restaurant subscription, and clearly displayed delivery fees paid by the customer.",
      ] },
      { heading: 'The technical architecture: three apps and one dispatch', body: [
        "A meal delivery platform is not one app, it is three: customer, restaurant and courier. And the real product is the fourth, invisible component: the dispatch, which decides who delivers what, when and at what cost.",
      ], visual: 'architecture', after: [
        "Dispatch is where the losses hide. Assigning an order to the wrong courier, distances computed as the crow flies instead of the real route, no way to batch two neighbouring orders, preparation time ignored: each of these flaws becomes a waiting customer and a courier paid for nothing. **A team that has already shipped delivery apps and fleet tracking systems in Algeria knows where these traps are.** Our guide to [custom delivery apps](/blog/application-livraison-sur-mesure-algerie-2026/) details the modules.",
      ] },
      { heading: 'Realistic budget and timeline', body: [
        "Three apps, a dispatch, a back-office and a courier cash desk: the project sits at the top of category 3 of our [mobile app price grid for Algeria](/blog/prix-application-mobile-algerie-2026/), with online payment as an option. The timeline we apply fits in six months, closed pilot included.",
      ], list: [
        "**Weeks 1 and 2.** Scoping: pilot city, zones, dispatch rules, revenue model, courier status.",
        "**Weeks 3 to 5.** Design of the three apps, in Arabic and French, tested in a real kitchen and on a real motorbike.",
        "**Weeks 6 to 15.** Development of customer, restaurant, courier and dispatch, with a testable version every two weeks.",
        "**Weeks 16 to 18.** Closed pilot: ten restaurants, one district, real couriers, real orders. It is the step everyone skips and the one that reveals real preparation and travel times.",
        "**Weeks 19 to 26.** Opening: thirty restaurants, courier recruitment, local marketing on Facebook, TikTok and neighbourhood groups.",
      ], visual: 'timeline' },
      { heading: 'The mistakes that kill this project', body: [], list: [
        "**Launching in Algiers against the super-app.** The capital needed to reach density there is out of reach for a first project.",
        "**Copying the French commission.** Restaurant owners refuse or inflate prices, and the customer goes back to the phone.",
        "**Ignoring cash.** Without a courier cash desk and automatic reconciliation, money leaks and nobody knows where.",
        "**Building the three apps without a serious dispatch.** Beautiful interfaces, late deliveries, abandonment within three months.",
        "**Forgetting Ramadan.** The most important month of the year arrives with peaks the infrastructure has never seen.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'Is Uber Eats available in Algeria?', a: 'No. Uber Eats does not operate in Algeria. In Africa the service is present mainly in South Africa and Kenya. Uber itself offers no ride-hailing there.' },
        { q: 'What is the Uber Eats equivalent in Algeria?', a: 'Yassir Express, the delivery arm of the Algerian super-app Yassir, is the most visible player in the big cities. Jumia Food closed at the end of 2023. Local players such as Qooxy cover mid-sized cities. In most cities, restaurants deliver themselves via phone, Instagram and WhatsApp.' },
        { q: 'How much does it cost to launch a meal delivery app in Algeria?', a: 'Three apps and a dispatch place the project at the top of category 3 of our mobile app price grid, excluding field team, fleet and marketing. Count six months to the opening of a first city.' },
        { q: 'Is online payment needed at launch?', a: 'No. Cash on delivery remains the majority. Launch with a courier cash desk and automatic reconciliation, then add CIB and Edahabia through SATIM when volume justifies it.' },
        { q: 'Can this project be run from France?', a: 'The product, yes, with a technical team in Algeria in your time zone. Restaurant activation and courier recruitment require a local presence, a partner or a small field team in the pilot city.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'The need is not to create delivery in Algeria. It is to organise it.' },
      { after: 4, text: 'The product is the dispatch. The three apps are only its interfaces.' },
    ],
    cta: { eyebrow: 'You have seen the model work', title: "Let's build the Algerian version. Describe your city, your position and your budget: we will tell you what to launch first and how long it takes.", body: "Symloop designs and builds delivery apps, dispatch systems and fleet tracking for the Algerian market, with senior engineers in Algiers and Sétif. We work with founders based in France in their time zone, with a written scope, milestones and full code ownership." },
    related: { label: 'Read next', items: [
      { href: '/blog/creer-equivalent-doctolib-algerie-2026/', kind: 'Series · 01', name: 'Doctolib in Algeria: launching online medical booking' },
      { href: '/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/', kind: 'Founder guide', name: 'Launching a tech startup in Algeria from France' },
      { href: '/blog/application-livraison-sur-mesure-algerie-2026/', kind: 'Guide', name: 'Custom delivery app: how to build yours' },
      { href: '/blog/gestion-flotte-livraison-suivi-gps-algerie-2026/', kind: 'Guide', name: 'Delivery fleet management and GPS tracking in Algeria' },
    ] },
  },
  ar: {
    kind: 'رأيته في فرنسا، ابنِه في الجزائر · 02', title: 'Uber Eats في الجزائر: لماذا ليس موجوداً، من يوصّل فعلاً، وكيف تطلق النسخة التي تصمد (2026).',
    dek: 'سوق توصيل الوجبات في الجزائر ليست فارغة بل مركّزة في ثلاث مدن. ما أثبته النموذج الفرنسي، من يوصّل اليوم، المواقع الثلاثة المفتوحة، بنية التطبيقات الثلاثة والجدول الزمني الواقعي.',
    publishedAt: 'أكتوبر 2026', readTime: '11 دقيقة قراءة', author: 'سيملوب', about: ['Uber Eats', 'توصيل الوجبات', 'الجزائر', 'شركة ناشئة'],
    intro: [
      '**الجواب المختصر.** Uber Eats لا يعمل في الجزائر ولم يعلن قط عن القدوم إليها. Jumia Food، الفاعل الدولي الوحيد الذي كان يوصّل الوجبات فيها، أغلق هذه الخدمة نهاية 2023، وغادرت Jumia البلاد في مارس 2026. اليوم يوجد توصيل الوجبات عبر التطبيق أساساً في الجزائر ووهران وقسنطينة عبر Yassir Express، ويغطي بعض الفاعلين المحليين مدناً متوسطة. في كل مكان آخر يُطلب بالهاتف أو إنستغرام أو واتساب. الفرصة لمؤسس من الجالية ليست في «صنع Uber Eats في العاصمة» ضد تطبيق شامل راسخ، بل في **ثلاثة مواقع ما زالت مفتوحة**: المدينة المتوسطة المخدومة بعمق، الطلب المباشر للمطاعم، واللوجستيك B2B.',
      'هذه الحلقة الثانية من سلسلتنا «رأيته في فرنسا، ابنِه في الجزائر» بعد [Doctolib في الجزائر](/blog/creer-equivalent-doctolib-algerie-2026/). الإطار العام لمؤسس الجالية في [دليلنا المخصص](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/).',
    ],
    sections: [
      { heading: 'ما أثبته Uber Eats في فرنسا', body: ['وصل Uber Eats إلى فرنسا سنة 2016 وفرض خلال سنوات قليلة حركة واحدة: افتح التطبيق، اختر مطعماً، ادفع، تابع الموصّل على الخريطة. ثلاث آليات تفسّر هذا الانتشار، ولا واحدة منها تقنية.'], list: [
        '**الكثافة.** في حي معيّن، مطاعم كافية وموصّلون كافون ليصل الطلب في ثلاثين دقيقة.',
        '**الدفع عند الطلب.** العميل يدفع قبل طهي الطبق. لا مخاطر على المطعم ولا نقد مع الموصّل.',
        '**تجميع الطلب لصاحب المطعم.** مطعم مستقل يصل دفعة واحدة إلى آلاف العملاء. لذلك يقبل عمولة مرتفعة، غالباً بين ربع السلة وثلثها.',
      ], after: ['إن كنت تعيش في فرنسا فأنت تعرف هذه الآليات من الداخل. **الثالثة هي التي لا تنتقل كما هي إلى الجزائر**، وهذا موضوع هذا الدليل كله.'] },
      { heading: 'الحالة الحقيقية للسوق الجزائرية في 2026', body: [
        'لسوق توصيل الوجبات في الجزائر تاريخ قصير ومعبّر. Jumia Food [أغلق خدمة توصيل الوجبات في الجزائر وست دول أخرى نهاية 2023](' + SRC.jumiaFood + ')، ثم [أوقفت المجموعة كل أنشطتها الجزائرية في مارس 2026](' + SRC.jumiaExit + ')، إذ لم تكن السوق الجزائرية تمثل سوى نحو 2% من حجم أعمالها. الفاعل الأبرز اليوم هو Yassir، التطبيق الشامل الجزائري الذي وُلد في النقل، وفرعه Yassir Express يوصّل الوجبات والمشتريات في المدن الكبرى وقد [استحوذ على متاجر Uno الكبرى في مارس 2026](' + SRC.yassirUno + ') لتعزيز لوجستيكه. وإلى جانبه يتموضع فاعلون محليون في المدن قليلة التغطية: [Qooxy، التي وُلدت في سطيف سنة 2020](' + SRC.qooxy + ')، تعلن أكثر من 100,000 تنزيل على Android وتعتمد على موصّلين مستقلين بتطبيق مخصص.',
        'ثلاث حقائق تهم المؤسس.',
      ], list: [
        '**الدفع ما زال نقدياً.** حتى على المنصات القائمة، أغلب الطلبات تُدفع نقداً عند التسليم.',
        '**التغطية تتوقف عند المدن الكبرى.** الولايات المتوسطة، سطيف وبجاية وتلمسان وباتنة وعنابة والبليدة، لديها مطاعم وهواتف وطلب حقيقي، لكن عرض توصيل عبر التطبيق ضعيف أو منعدم.',
        '**المطعم يوصّل أصلاً بلا منصة.** رقم واتساب وحساب إنستغرام وموصّل أو اثنان. الحاجة ليست خلق التوصيل بل تنظيمه.',
      ], visual: 'market' },
      { heading: 'ثلاثة مواقع ما زالت مفتوحة', body: ['مهاجمة العاصمة مباشرة ضد تطبيق شامل يملك الأسطول والعلامة ورأس المال هو الخيار الأغلى، ولا ننصح به مؤسساً يطلق من فرنسا. ثلاثة مواقع أخرى مفتوحة.'], preOrdered: [
        '**المدينة المتوسطة، مخدومة بعمق.** مدينة واحدة، ثلاثون مطعماً نشطاً، عشرون موصّلاً معروفاً بالاسم، منطقة توصيل مرسومة باليد. هي استراتيجية مدينة بمدينة التي صنعت Doctolib، وهي استراتيجية Qooxy في سطيف.',
        '**الطلب المباشر للمطاعم.** تطبيق باسم المطعم أو السلسلة بلا عمولة سوق، ليحتفظ صاحبه بعميله وبياناته. تبيع هنا برنامجاً لا سوقاً. فصّلنا هذا النموذج في دليل [تطبيق الطلب عبر الإنترنت للمطاعم](/blog/application-restaurant-livraison-algerie/).',
        '**اللوجستيك B2B.** لا تبيع للمستهلكين بل توصّل للمطاعم والمحلات التي لديها الطلب وليس لديها أسطول، بتطبيق موصّل وتوزيع وفوترة لكل رحلة. برنامج [تسيير الأسطول والتتبع GPS](/blog/gestion-flotte-livraison-suivi-gps-algerie-2026/) هو قلب المنتج.',
      ], visual: 'positions', after: ['المواقع الثلاثة تتشارك القاعدة التقنية نفسها وتختلف في العميل الذي تفوتره. **اختر العميل قبل أن تختار الشاشات.**'] },
      { heading: 'ما يجب تغييره مقارنة بالنموذج الفرنسي', body: ['نسخ شاشة Uber Eats سهل. نسخ نموذجه الاقتصادي في الجزائر يُغرق المشروع. ست نقاط تتغير.'], visual: 'changes', after: [
        '**الدفع.** نقداً عند التسليم افتراضياً، CIB والذهبية اختيارياً. هذا يفرض صندوقاً للموصّل وتسوية يومية ومطابقة يقوم بها التطبيق نيابة عنك. الدفع الإلكتروني يُربط لاحقاً عبر SATIM، انظر دليل [CIB والذهبية](/blog/ecommerce-algerie-paiement-cib-edahabia-2024/).',
        '**العنوان.** لا يوجد عنونة موحّدة موثوقة. نقطة GPS ومعلم بنص حر واتصال بالموصّل بلمسة واحدة.',
        '**الهوية.** رقم هاتف ورمز SMS.',
        '**الموصّلون.** دراجات نارية وسيارات، وضع قانوني يُؤطَّر، ودفع يومي أو أسبوعي لا يبقى أحد بدونه.',
        '**الذروات.** إفطار رمضان وسهرات الصيف وليالي المباريات تصنع ذروات أعلى بكثير من عشاء باريسي.',
        '**الإيراد.** عمولة 25 إلى 30% لا يقبلها صاحب مطعم جزائري هامشه ضيق ويوصّل بنفسه. النماذج التي تصمد تجمع عمولة أقل واشتراكاً شهرياً ورسوم توصيل واضحة يدفعها العميل.',
      ] },
      { heading: 'البنية التقنية: ثلاثة تطبيقات وتوزيع واحد', body: ['منصة توصيل الوجبات ليست تطبيقاً واحداً بل ثلاثة: العميل والمطعم والموصّل. والمنتج الحقيقي هو المكوّن الرابع غير المرئي: التوزيع، الذي يقرر من يوصّل ماذا ومتى وبأي كلفة.'], visual: 'architecture', after: ['في التوزيع تختبئ الخسائر: إسناد لموصّل خاطئ، مسافات بخط مستقيم بدل الطريق الحقيقي، عجز عن تجميع طلبين متجاورين، تجاهل وقت التحضير. **الفريق الذي سلّم تطبيقات توصيل وأنظمة تتبع أسطول في الجزائر يعرف أين هذه الفخاخ.** دليلنا حول [تطبيق التوصيل حسب الطلب](/blog/application-livraison-sur-mesure-algerie-2026/) يفصّل الوحدات.'] },
      { heading: 'ميزانية وجدول زمني واقعيان', body: ['ثلاثة تطبيقات وتوزيع وإدارة خلفية وصندوق موصّل: يقع المشروع في أعلى الفئة 3 من [شبكة أسعار تطبيقات الجوال في الجزائر](/blog/prix-application-mobile-algerie-2026/)، مع الدفع الإلكتروني اختيارياً. الجدول الذي نطبّقه يكتمل في ستة أشهر بما فيها التجربة المغلقة.'], list: [
        '**الأسبوعان 1 و2.** التأطير: المدينة التجريبية، المناطق، قواعد التوزيع، نموذج الإيراد، وضع الموصّلين.',
        '**الأسابيع 3 إلى 5.** تصميم التطبيقات الثلاثة بالعربية والفرنسية، مختبرة في مطبخ حقيقي وعلى دراجة حقيقية.',
        '**الأسابيع 6 إلى 15.** تطوير العميل والمطعم والموصّل والتوزيع، نسخة قابلة للاختبار كل أسبوعين.',
        '**الأسابيع 16 إلى 18.** تجربة مغلقة: عشرة مطاعم، حي واحد، موصّلون حقيقيون، طلبات حقيقية.',
        '**الأسابيع 19 إلى 26.** الافتتاح: ثلاثون مطعماً، توظيف موصّلين، تسويق محلي على فيسبوك وتيك توك ومجموعات الحي.',
      ], visual: 'timeline' },
      { heading: 'الأخطاء التي تقتل هذا المشروع', body: [], list: [
        '**الإطلاق في العاصمة ضد التطبيق الشامل.** رأس المال اللازم للكثافة هناك خارج متناول مشروع أول.',
        '**نسخ العمولة الفرنسية.** أصحاب المطاعم يرفضون أو يرفعون الأسعار، ويعود العميل إلى الهاتف.',
        '**تجاهل النقد.** بلا صندوق موصّل ومطابقة تلقائية يتسرب المال ولا يعرف أحد أين.',
        '**بناء التطبيقات الثلاثة بلا توزيع جاد.** واجهات جميلة، توصيل متأخر، هجر خلال ثلاثة أشهر.',
        '**نسيان رمضان.** أهم شهر في السنة يأتي بذروات لم ترها البنية قط.',
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: 'هل Uber Eats متاح في الجزائر؟', a: 'لا. Uber Eats لا يعمل في الجزائر. في أفريقيا الخدمة موجودة أساساً في جنوب أفريقيا وكينيا. وUber نفسه لا يقدم خدمة نقل هناك.' },
        { q: 'ما هو مكافئ Uber Eats في الجزائر؟', a: 'Yassir Express، فرع التوصيل في التطبيق الشامل الجزائري Yassir، هو الفاعل الأبرز في المدن الكبرى. Jumia Food أغلق نهاية 2023. فاعلون محليون مثل Qooxy يغطون مدناً متوسطة. وفي أغلب المدن توصّل المطاعم بنفسها عبر الهاتف وإنستغرام وواتساب.' },
        { q: 'كم يكلف إطلاق تطبيق توصيل وجبات في الجزائر؟', a: 'ثلاثة تطبيقات وتوزيع تضع المشروع في أعلى الفئة 3 من شبكة أسعار تطبيقات الجوال، دون الفريق الميداني والأسطول والتسويق. ستة أشهر حتى افتتاح أول مدينة.' },
        { q: 'هل الدفع الإلكتروني ضروري عند الإطلاق؟', a: 'لا. النقد عند التسليم ما زال الأغلبية. أطلق بصندوق موصّل ومطابقة تلقائية ثم أضف CIB والذهبية عبر SATIM عندما يبرر الحجم ذلك.' },
        { q: 'هل يمكن قيادة هذا المشروع من فرنسا؟', a: 'المنتج نعم، مع فريق تقني في الجزائر في منطقتك الزمنية. تفعيل المطاعم وتوظيف الموصّلين يتطلبان حضوراً محلياً، شريكاً أو فريقاً ميدانياً صغيراً في المدينة التجريبية.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'الحاجة ليست خلق التوصيل في الجزائر. الحاجة إلى تنظيمه.' },
      { after: 4, text: 'المنتج هو التوزيع. التطبيقات الثلاثة مجرد واجهات له.' },
    ],
    cta: { eyebrow: 'رأيت النموذج يعمل', title: 'لنبنِ النسخة الجزائرية. صف مدينتك وموقعك وميزانيتك: سنخبرك بما تطلقه أولاً وفي كم من الوقت.', body: 'تصمم سيملوب وتطوّر تطبيقات التوصيل وأنظمة التوزيع وتتبع الأسطول للسوق الجزائرية بمهندسين خبراء في الجزائر وسطيف. نعمل مع مؤسسين مقيمين في فرنسا في منطقتهم الزمنية، بتأطير مكتوب ومراحل وملكية كاملة للكود.' },
    related: { label: 'اقرأ بعد ذلك', items: [
      { href: '/blog/creer-equivalent-doctolib-algerie-2026/', kind: 'سلسلة · 01', name: 'Doctolib في الجزائر: إطلاق حجز المواعيد الطبية عبر الإنترنت' },
      { href: '/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/', kind: 'دليل المؤسس', name: 'إطلاق شركة تقنية ناشئة في الجزائر انطلاقاً من فرنسا' },
      { href: '/blog/application-livraison-sur-mesure-algerie-2026/', kind: 'دليل', name: 'تطبيق توصيل حسب الطلب: كيف تبني تطبيقك' },
      { href: '/blog/gestion-flotte-livraison-suivi-gps-algerie-2026/', kind: 'دليل', name: 'تسيير أسطول التوصيل والتتبع GPS في الجزائر' },
    ] },
  },
};

const KEYWORDS = "uber eats algérie, équivalent uber eats algérie, application livraison repas algérie, créer une application de livraison de repas en algérie, livraison repas alger application, startup livraison algérie, yassir express alternative, uber eats algeria, food delivery app algeria";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
