import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/creer-equivalent-uber-blablacar-algerie-2026.mjs';

const SLUG = 'creer-equivalent-uber-blablacar-algerie-2026';
const FIGURES = ['market', 'positions', 'architecture', 'timeline'];
const DATE = '2026-10-29';
const SRC = { indrive: 'https://algerie-eco.com/2025/12/25/rapprocher-les-villes-et-les-personnes-indrive-lance-les-trajets-partages-inter-wilayas/' };

const CONTENT = {
  fr: {
    kind: 'Vu en France, à construire en Algérie · 05', title: "Uber et BlaBlaCar en Algérie : le VTC urbain est pris, le reste du transport ne l'est pas. Quoi construire, et comment (guide fondateur 2026).",
    dek: "« Équivalent Uber Algérie » est l'une des recherches les plus fréquentes que nous mesurons depuis la France. La réponse courte est qu'il y en a déjà trois ou quatre. La réponse utile est ailleurs : le transport d'entreprise, le transport spécialisé et l'intercité réservé n'ont pas encore de produit. Marché, positions ouvertes, architecture, calendrier.",
    publishedAt: 'Octobre 2026', readTime: '10 min de lecture', author: 'Symloop', about: ['Uber', 'BlaBlaCar', 'VTC', 'Transport', 'Algérie', 'Startup'],
    intro: [
      "**Réponse courte.** L'équivalent d'Uber en Algérie existe, plusieurs fois : Yassir, né à Alger, Heetch El Djazaïr, inDrive et Yango se partagent le VTC des grandes villes. Lancer un cinquième acteur sur ce terrain demande une flotte, une marque et un capital hors de portée d'un premier projet, pour arriver quatrième. En revanche, **trois segments du transport n'ont pas encore de produit sérieux** : le transport d'entreprise, navettes d'employés et comptes B2B facturés au mois ; le transport spécialisé, scolaire avec application pour les parents, personnes à mobilité réduite, médical ; et l'intercité réservé à l'avance, siège, heure et acompte, que inDrive vient seulement d'ouvrir. Aucun des trois ne dépend d'une flotte de milliers de chauffeurs. Chacun se lance avec vingt véhicules et des clients qui paient avant le trajet.",
      "C'est le cinquième épisode de notre série « Vu en France, à construire en Algérie », après [Doctolib](/blog/creer-equivalent-doctolib-algerie-2026/), [Uber Eats](/blog/creer-equivalent-uber-eats-algerie-2026/), [Airbnb](/blog/creer-equivalent-airbnb-algerie-2026/) et [Leboncoin](/blog/creer-equivalent-leboncoin-vinted-algerie-2026/). Le cadre général du fondateur de la diaspora est dans [notre guide dédié](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/).",
    ],
    sections: [
      { heading: "Ce qu'Uber et BlaBlaCar ont prouvé, et ce qui est déjà pris", body: [
        "Uber a prouvé qu'une ville entière accepte de monter dans la voiture d'un inconnu si l'application montre le chauffeur, le prix et le trajet, et si le paiement ne se discute pas. BlaBlaCar a prouvé que des inconnus acceptent de partager une voiture entre deux villes si le siège est réservé, l'heure fixée et la note du conducteur visible. Les deux reposent sur le même triptyque : identité vérifiée, prix connu d'avance, paiement sans friction.",
        "En Algérie, la première moitié de ce travail est faite. Le VTC urbain fonctionne dans les grandes villes avec quatre acteurs, des millions de courses, et un cadre réglementaire encore discuté. L'intercité commence : [inDrive a lancé des trajets partagés inter-wilayas fin 2025](" + SRC.indrive + "), ce qui dit deux choses, que la demande est là et que la réservation à l'avance avec siège et acompte reste à construire. Le reste du transport, celui qui se contracte au mois plutôt qu'à la course, n'a pas bougé : il se fait au téléphone.",
      ], visual: 'market', after: [
        "Lisez les trois dernières lignes. **Ce sont des marchés où le client paie avant, signe un contrat, et a besoin d'une preuve.** Les plateformes de VTC n'y vont pas parce que leur modèle est la course à l'unité, pas le planning récurrent. C'est exactement l'inverse du vôtre.",
      ] },
      { heading: 'Trois produits encore ouverts', body: [
        "Aucun des trois n'affronte Yassir ou inDrive. Chacun prend ce que la course à l'unité ne sait pas faire.",
      ], visual: 'positions', after: [
        "**Le transport d'entreprise.** Des centaines d'entreprises, usines, centres d'appels, cliniques, chantiers, transportent leurs employés chaque jour avec des navettes gérées sur WhatsApp et des factures contestées en fin de mois. Le produit est un planning récurrent, un pointage à la montée, une facture mensuelle par site et une preuve de trajet. Le client est l'entreprise, le contrat se signe avant le premier kilomètre. C'est le prolongement naturel de ce que nous décrivons dans notre guide sur [les équipes terrain gérées par téléphone](/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/).",
        "**Le transport spécialisé.** Le scolaire, avec une application qui dit aux parents que le bus est parti et arrivé, et quel chauffeur conduit aujourd'hui. Le transport des personnes à mobilité réduite et le transport médical, qui demandent des chauffeurs formés, des véhicules adaptés et une régularité absolue. Un gérant d'entreprise de transport de personnes à mobilité réduite nous a écrit sur ce site pour gérer une cinquantaine d'employés : son problème n'est pas de trouver des clients, c'est d'organiser la régularité.",
        "**L'intercité réservé.** Alger-Sétif, Oran-Tlemcen, Constantine-Annaba : siège réservé, heure fixe, acompte en CIB ou Edahabia, chauffeur professionnel vérifié, bagages prévus. Le modèle BlaBlaCar, mais avec des professionnels plutôt que des particuliers, parce que la confiance se construit différemment ici. inDrive a ouvert la porte ; la réservation ferme et l'acompte restent le produit à construire.",
      ] },
      { heading: 'Ce qui doit changer par rapport au modèle français', body: [
        "Cinq points changent. Le paiement est hybride : acompte ou abonnement en CIB et Edahabia, facture mensuelle par virement pour les entreprises, espèces encore possibles pour l'intercité. L'identité passe par le téléphone, et pour les chauffeurs par la pièce d'identité, le permis et une visite. La position se partage pendant le trajet, et seulement pendant le trajet, pour les familles et les entreprises. Le statut des chauffeurs et le cadre du transport de personnes se cadrent avec un avocat avant le lancement, parce que les règles évoluent et varient selon le segment. Et les pics sont les vôtres : rentrée scolaire, Ramadan, été pour l'intercité, les trois-huit pour les navettes d'usine.",
      ], visual: 'architecture', after: [
        "Le produit, c'est le planning récurrent et la facture mensuelle. L'application passager, que tout le monde dessine en premier, n'est que la vitrine. Le dispatch de tournées récurrentes avec remplacements, retards et pointage est le module exigeant, le même que celui que nous décrivons dans notre guide de [gestion de flotte et suivi GPS](/blog/gestion-flotte-livraison-suivi-gps-algerie-2026/). Une équipe qui l'a déjà livré gagne des mois.",
      ] },
      { heading: 'Budget et calendrier : vingt véhicules, trois clients, un trimestre', body: [
        "Trois applications, passager ou famille, chauffeur, back-office, un planning récurrent, des comptes B2B et une facturation mensuelle placent le projet en catégorie 3 de notre [grille de prix des applications en Algérie](/blog/prix-application-mobile-algerie-2026/), hors véhicules et exploitation. Le calendrier tient en un trimestre, et les premiers clients se signent pendant le développement.",
      ], visual: 'timeline', after: [
        "La règle qui compte : **on ne lance pas une flotte sans contrat.** Trois entreprises ou deux écoles signées pendant le développement, vingt véhicules, une première facture mensuelle, puis on étend. C'est la même leçon que pour les autres épisodes de la série, la densité avant l'étendue, avec un avantage : ici, le client paie avant que le service existe.",
      ] },
      { heading: 'Les erreurs qui tuent ce projet', body: [], list: [
        "**Lancer un cinquième VTC à Alger.** Flotte, marque, capital : vous arrivez quatrième au mieux.",
        "**Dessiner l'application passager en premier.** Le produit est le planning et la facture. La vitrine vient après.",
        "**Payer les chauffeurs à la course sur du récurrent.** Le transport d'entreprise et le scolaire se paient au planning, sinon personne ne reste.",
        "**Ignorer le cadre du transport de personnes.** Il varie selon le segment et évolue. Un avocat avant le lancement, pas après l'incident.",
        "**Lancer sans contrat signé.** Vingt véhicules qui attendent des clients coûtent plus cher qu'un développement.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Quel est l'équivalent d'Uber en Algérie ?", a: "Il y en a plusieurs : Yassir, né à Alger, Heetch El Djazaïr, inDrive et Yango se partagent le VTC des grandes villes. Uber lui-même n'y opère pas." },
        { q: "BlaBlaCar existe-t-il en Algérie ?", a: "Non. L'intercité se fait en taxi collectif, en bus et par téléphone. inDrive a lancé des trajets partagés inter-wilayas fin 2025 ; la réservation à l'avance avec siège et acompte reste rare." },
        { q: "Peut-on encore lancer une application de transport en Algérie ?", a: "Oui, en dehors du VTC urbain : transport d'entreprise avec comptes B2B, transport spécialisé scolaire ou médical, intercité réservé. Chacun se lance avec vingt véhicules et des clients qui paient à l'avance." },
        { q: "Combien de temps et quel budget ?", a: "Un trimestre jusqu'à l'exploitation avec vingt véhicules et trois clients signés. Le projet se situe en catégorie 3 de notre grille de prix, hors véhicules et exploitation." },
        { q: "Peut-on piloter ce projet depuis la France ?", a: "Le produit, oui. L'exploitation, les chauffeurs et les contrats demandent une présence locale, un associé ou une petite équipe dans la ville de lancement." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Copier Uber à Alger, c'est arriver quatrième. Le transport qui se contracte au mois n'a pas encore de produit." },
      { after: 3, text: "On ne lance pas une flotte sans contrat. Ici, le client paie avant que le service existe." },
    ],
    cta: { eyebrow: 'Vous avez vu le modèle fonctionner', title: "Construisons la version algérienne. Dites-nous quel segment vous visez, entreprise, spécialisé ou intercité, et dans quelle ville : nous vous dirons quoi construire en premier et quoi signer avant.", body: "Symloop conçoit des plateformes de transport, de dispatch et de gestion de flotte pour le marché algérien, avec des ingénieurs seniors à Alger et Sétif. Planning récurrent, comptes B2B, facturation, applications chauffeur et passager en arabe et en français. Cadrage écrit, jalons, code à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/', kind: 'Problème', name: 'Je gère cinquante employés sur le terrain et tout passe par téléphone' },
      { href: '/blog/gestion-flotte-livraison-suivi-gps-algerie-2026/', kind: 'Guide', name: 'Gestion de flotte et suivi GPS en Algérie' },
      { href: '/blog/creer-equivalent-leboncoin-vinted-algerie-2026/', kind: 'Série · 04', name: 'Leboncoin et Vinted en Algérie : ce qui reste à construire' },
      { href: '/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/', kind: 'Guide fondateur', name: 'Lancer une startup tech en Algérie depuis la France' },
    ] },
  },
  en: {
    kind: 'Seen in France, to be built in Algeria · 05', title: 'Uber and BlaBlaCar in Algeria: urban ride-hailing is taken, the rest of transport is not. What to build, and how (founder guide 2026).',
    dek: "\"Uber equivalent Algeria\" is one of the most frequent searches we measure from France. The short answer is that there are already three or four. The useful answer is elsewhere: corporate transport, specialised transport and booked intercity have no product yet. Market, open positions, architecture, timeline.",
    publishedAt: 'October 2026', readTime: '10 min read', author: 'Symloop', about: ['Uber', 'BlaBlaCar', 'Ride-hailing', 'Transport', 'Algeria', 'Startup'],
    intro: [
      "**Short answer.** The Uber equivalent in Algeria exists, several times over: Yassir, born in Algiers, Heetch El Djazaïr, inDrive and Yango share ride-hailing in the big cities. Launching a fifth player there requires a fleet, a brand and capital out of reach for a first project, to arrive fourth. However, **three transport segments have no serious product yet**: corporate transport, employee shuttles and B2B accounts invoiced monthly; specialised transport, school with a parent app, reduced mobility, medical; and intercity booked in advance, seat, time and deposit, which inDrive has only just opened. None of the three depends on a fleet of thousands of drivers. Each launches with twenty vehicles and customers who pay before the trip.",
      "This is the fifth episode of our series \"Seen in France, to be built in Algeria\", after [Doctolib](/blog/creer-equivalent-doctolib-algerie-2026/), [Uber Eats](/blog/creer-equivalent-uber-eats-algerie-2026/), [Airbnb](/blog/creer-equivalent-airbnb-algerie-2026/) and [Leboncoin](/blog/creer-equivalent-leboncoin-vinted-algerie-2026/). The general frame for a diaspora founder is in [our dedicated guide](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/).",
    ],
    sections: [
      { heading: 'What Uber and BlaBlaCar proved, and what is already taken', body: [
        "Uber proved that a whole city agrees to get into a stranger's car if the app shows the driver, the price and the route, and if payment is not up for discussion. BlaBlaCar proved that strangers agree to share a car between two cities if the seat is reserved, the time set and the driver's rating visible. Both rest on the same triad: verified identity, price known in advance, frictionless payment.",
        "In Algeria, the first half of that work is done. Urban ride-hailing works in the big cities with four players, millions of rides, and a regulatory frame still under debate. Intercity is starting: [inDrive launched inter-wilaya shared trips at the end of 2025](" + SRC.indrive + "), which says two things, that demand is there and that advance booking with seat and deposit remains to be built. The rest of transport, the kind contracted by the month rather than by the ride, has not moved: it happens by phone.",
      ], visual: 'market', after: [
        "Read the last three rows. **These are markets where the customer pays first, signs a contract, and needs proof.** Ride-hailing platforms do not go there because their model is the unit ride, not the recurring schedule. That is exactly the opposite of yours.",
      ] },
      { heading: 'Three products still open', body: [
        "None of the three takes on Yassir or inDrive. Each takes what the unit ride cannot do.",
      ], visual: 'positions', after: [
        "**Corporate transport.** Hundreds of companies, factories, call centres, clinics, construction sites, move their employees every day with shuttles managed on WhatsApp and invoices disputed at month end. The product is a recurring schedule, boarding check-in, a monthly invoice per site and proof of trip. The customer is the company, the contract is signed before the first kilometre. It is the natural extension of what we describe in our guide to [field teams managed by phone](/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/).",
        "**Specialised transport.** School, with an app that tells parents the bus has left and arrived, and which driver is driving today. Reduced-mobility and medical transport, which require trained drivers, adapted vehicles and absolute regularity. A manager of a reduced-mobility transport company wrote to us on this site to manage about fifty employees: his problem is not finding customers, it is organising regularity.",
        "**Booked intercity.** Algiers-Sétif, Oran-Tlemcen, Constantine-Annaba: reserved seat, fixed time, CIB or Edahabia deposit, verified professional driver, luggage planned. The BlaBlaCar model, but with professionals rather than individuals, because trust is built differently here. inDrive opened the door; firm booking and the deposit remain the product to build.",
      ] },
      { heading: 'What must change from the French model', body: [
        "Five points change. Payment is hybrid: deposit or subscription by CIB and Edahabia, monthly invoice by transfer for companies, cash still possible for intercity. Identity goes through the phone, and for drivers through ID, licence and a visit. Position is shared during the trip, and only during the trip, for families and companies. Driver status and the passenger transport frame are settled with a lawyer before launch, because rules evolve and vary by segment. And the peaks are yours: back to school, Ramadan, summer for intercity, shift patterns for factory shuttles.",
      ], visual: 'architecture', after: [
        "The product is the recurring schedule and the monthly invoice. The passenger app, which everyone designs first, is only the shop window. Dispatching recurring routes with replacements, delays and check-in is the demanding module, the same one we describe in our guide to [fleet management and GPS tracking](/blog/gestion-flotte-livraison-suivi-gps-algerie-2026/). A team that has already shipped it saves months.",
      ] },
      { heading: 'Budget and timeline: twenty vehicles, three customers, one quarter', body: [
        "Three apps, passenger or family, driver, back-office, a recurring schedule, B2B accounts and monthly invoicing place the project in category 3 of our [app price grid for Algeria](/blog/prix-application-mobile-algerie-2026/), excluding vehicles and operations. The timeline fits in one quarter, and the first customers are signed during development.",
      ], visual: 'timeline', after: [
        "The rule that counts: **you do not launch a fleet without a contract.** Three companies or two schools signed during development, twenty vehicles, a first monthly invoice, then you expand. It is the same lesson as the other episodes of the series, density before reach, with one advantage: here, the customer pays before the service exists.",
      ] },
      { heading: 'The mistakes that kill this project', body: [], list: [
        "**Launching a fifth ride-hailing app in Algiers.** Fleet, brand, capital: you arrive fourth at best.",
        "**Designing the passenger app first.** The product is the schedule and the invoice. The shop window comes after.",
        "**Paying drivers per ride on recurring work.** Corporate and school transport are paid per schedule, otherwise nobody stays.",
        "**Ignoring the passenger transport frame.** It varies by segment and evolves. A lawyer before launch, not after the incident.",
        "**Launching without a signed contract.** Twenty vehicles waiting for customers cost more than a development.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'What is the Uber equivalent in Algeria?', a: 'There are several: Yassir, born in Algiers, Heetch El Djazaïr, inDrive and Yango share ride-hailing in the big cities. Uber itself does not operate there.' },
        { q: 'Does BlaBlaCar exist in Algeria?', a: 'No. Intercity travel happens by shared taxi, bus and phone. inDrive launched inter-wilaya shared trips at the end of 2025; advance booking with seat and deposit remains rare.' },
        { q: 'Can you still launch a transport app in Algeria?', a: 'Yes, outside urban ride-hailing: corporate transport with B2B accounts, specialised school or medical transport, booked intercity. Each launches with twenty vehicles and customers who pay in advance.' },
        { q: 'How long and what budget?', a: 'One quarter to operations with twenty vehicles and three signed customers. The project sits in category 3 of our price grid, excluding vehicles and operations.' },
        { q: 'Can this project be run from France?', a: 'The product, yes. Operations, drivers and contracts require a local presence, a partner or a small team in the launch city.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'Copying Uber in Algiers means arriving fourth. Transport contracted by the month has no product yet.' },
      { after: 3, text: 'You do not launch a fleet without a contract. Here, the customer pays before the service exists.' },
    ],
    cta: { eyebrow: 'You have seen the model work', title: "Let's build the Algerian version. Tell us which segment you aim for, corporate, specialised or intercity, and in which city: we will tell you what to build first and what to sign before.", body: 'Symloop designs transport, dispatch and fleet management platforms for the Algerian market, with senior engineers in Algiers and Sétif. Recurring schedules, B2B accounts, invoicing, driver and passenger apps in Arabic and French. Written scope, milestones, code in your name.' },
    related: { label: 'Read next', items: [
      { href: '/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/', kind: 'Problem', name: 'I manage fifty employees in the field and everything goes by phone' },
      { href: '/blog/gestion-flotte-livraison-suivi-gps-algerie-2026/', kind: 'Guide', name: 'Fleet management and GPS tracking in Algeria' },
      { href: '/blog/creer-equivalent-leboncoin-vinted-algerie-2026/', kind: 'Series · 04', name: 'Leboncoin and Vinted in Algeria: what remains to be built' },
      { href: '/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/', kind: 'Founder guide', name: 'Launching a tech startup in Algeria from France' },
    ] },
  },
  ar: {
    kind: 'رأيته في فرنسا، ابنِه في الجزائر · 05', title: 'Uber وBlaBlaCar في الجزائر: النقل الحضري مأخوذ، وباقي النقل لا. ماذا تبني وكيف (دليل المؤسس 2026).',
    dek: '«مكافئ Uber الجزائر» من أكثر عمليات البحث التي نقيسها من فرنسا تكراراً. الجواب المختصر أن هناك ثلاثة أو أربعة أصلاً. الجواب المفيد في مكان آخر: نقل الشركات والنقل المتخصص وما بين المدن المحجوز لا منتج لها بعد. السوق، المواقع المفتوحة، البنية، الجدول الزمني.',
    publishedAt: 'أكتوبر 2026', readTime: '10 دقائق قراءة', author: 'سيملوب', about: ['Uber', 'BlaBlaCar', 'نقل', 'الجزائر', 'شركة ناشئة'],
    intro: [
      '**الجواب المختصر.** مكافئ Uber في الجزائر موجود، مرات عدة: Yassir المولود في الجزائر العاصمة وHeetch El Djazaïr وinDrive وYango يتقاسمون النقل بالتطبيق في المدن الكبرى. إطلاق فاعل خامس في هذا الميدان يتطلب أسطولاً وعلامة ورأس مال خارج متناول مشروع أول، للوصول رابعاً. في المقابل، **ثلاثة قطاعات من النقل لا منتج جاداً لها بعد**: نقل الشركات، حافلات الموظفين وحسابات B2B مفوترة شهرياً؛ النقل المتخصص، المدرسي بتطبيق للأولياء وذوو الحركة المحدودة والطبي؛ وما بين المدن المحجوز مسبقاً، مقعد ووقت وعربون، الذي فتحه inDrive للتو. لا أحد من الثلاثة يعتمد على أسطول من آلاف السائقين. كل واحد ينطلق بعشرين مركبة وعملاء يدفعون قبل الرحلة.',
      'هذه الحلقة الخامسة من سلسلتنا «رأيته في فرنسا، ابنِه في الجزائر» بعد [Doctolib](/blog/creer-equivalent-doctolib-algerie-2026/) و[Uber Eats](/blog/creer-equivalent-uber-eats-algerie-2026/) و[Airbnb](/blog/creer-equivalent-airbnb-algerie-2026/) و[Leboncoin](/blog/creer-equivalent-leboncoin-vinted-algerie-2026/). الإطار العام لمؤسس الجالية في [دليلنا المخصص](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/).',
    ],
    sections: [
      { heading: 'ما أثبته Uber وBlaBlaCar، وما هو مأخوذ أصلاً', body: [
        'أثبت Uber أن مدينة كاملة تقبل الركوب في سيارة غريب إذا أظهر التطبيق السائق والسعر والمسار ولم يكن الدفع محل نقاش. وأثبت BlaBlaCar أن غرباء يقبلون مشاركة سيارة بين مدينتين إذا حُجز المقعد وثُبّت الوقت وظهرت علامة السائق. يقوم الاثنان على الثلاثية نفسها: هوية موثّقة، سعر معروف مسبقاً، دفع بلا احتكاك.',
        'في الجزائر أُنجز نصف هذا العمل. النقل الحضري بالتطبيق يعمل في المدن الكبرى بأربعة فاعلين وملايين الرحلات وإطار تنظيمي ما زال محل نقاش. وما بين المدن يبدأ: [أطلق inDrive رحلات مشتركة بين الولايات نهاية 2025](' + SRC.indrive + ')، ما يقول شيئين: أن الطلب موجود وأن الحجز المسبق بمقعد وعربون ما زال للبناء. أما باقي النقل، الذي يُتعاقد عليه بالشهر لا بالرحلة، فلم يتحرك: يتم بالهاتف.',
      ], visual: 'market', after: ['اقرأ الأسطر الثلاثة الأخيرة. **هذه أسواق يدفع فيها العميل أولاً ويوقّع عقداً ويحتاج إثباتاً.** لا تذهب منصات النقل إليها لأن نموذجها الرحلة بالوحدة لا الجدول المتكرر. هذا بالضبط عكس نموذجك.'] },
      { heading: 'ثلاثة منتجات ما زالت مفتوحة', body: ['لا أحد من الثلاثة يواجه Yassir أو inDrive. كل واحد يأخذ ما لا تستطيعه الرحلة بالوحدة.'], visual: 'positions', after: [
        '**نقل الشركات.** مئات الشركات والمصانع ومراكز الاتصال والمصحات والورشات تنقل موظفيها يومياً بحافلات تُدار على واتساب وفواتير متنازع عليها آخر الشهر. المنتج جدول متكرر وتسجيل عند الصعود وفاتورة شهرية لكل موقع وإثبات رحلة. العميل هو الشركة، ويُوقَّع العقد قبل أول كيلومتر. إنه الامتداد الطبيعي لما نصفه في دليل [الفرق الميدانية المسيّرة بالهاتف](/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/).',
        '**النقل المتخصص.** المدرسي بتطبيق يخبر الأولياء أن الحافلة انطلقت ووصلت وأي سائق يقود اليوم. نقل ذوي الحركة المحدودة والنقل الطبي اللذان يتطلبان سائقين مدرّبين ومركبات مهيأة وانتظاماً مطلقاً. كتب لنا مسيّر شركة نقل ذوي الحركة المحدودة على هذا الموقع لتسيير نحو خمسين موظفاً: مشكلته ليست إيجاد العملاء بل تنظيم الانتظام.',
        '**ما بين المدن المحجوز.** الجزائر-سطيف، وهران-تلمسان، قسنطينة-عنابة: مقعد محجوز، وقت ثابت، عربون بـCIB أو الذهبية، سائق محترف موثّق، أمتعة محسوبة. نموذج BlaBlaCar لكن بمحترفين بدل الأفراد لأن الثقة تُبنى هنا بشكل مختلف. فتح inDrive الباب؛ والحجز المؤكد والعربون يبقيان المنتج الذي يجب بناؤه.',
      ] },
      { heading: 'ما يجب تغييره مقارنة بالنموذج الفرنسي', body: ['خمس نقاط تتغير. الدفع هجين: عربون أو اشتراك بـCIB والذهبية، فاتورة شهرية بالتحويل للشركات، والنقد ما زال ممكناً لما بين المدن. الهوية عبر الهاتف، وللسائقين عبر بطاقة الهوية والرخصة وزيارة. يُشارَك الموقع أثناء الرحلة فقط للعائلات والشركات. وضع السائقين وإطار نقل الأشخاص يُؤطَّران مع محامٍ قبل الإطلاق لأن القواعد تتطور وتختلف حسب القطاع. والذروات ذرواتك: الدخول المدرسي، رمضان، الصيف لما بين المدن، نظام الثلاث فترات لحافلات المصانع.'], visual: 'architecture', after: ['المنتج هو الجدول المتكرر والفاتورة الشهرية. تطبيق الراكب الذي يرسمه الجميع أولاً مجرد واجهة. توزيع الجولات المتكررة مع البدائل والتأخيرات والحضور هو الوحدة الصعبة، وهي نفسها التي نصفها في دليل [تسيير الأسطول والتتبع GPS](/blog/gestion-flotte-livraison-suivi-gps-algerie-2026/). الفريق الذي سلّمها يوفر أشهراً.'] },
      { heading: 'الميزانية والجدول الزمني: عشرون مركبة، ثلاثة عملاء، فصل واحد', body: ['ثلاثة تطبيقات، راكب أو عائلة وسائق وإدارة خلفية، وجدول متكرر وحسابات B2B وفوترة شهرية تضع المشروع في الفئة 3 من [شبكة أسعار التطبيقات في الجزائر](/blog/prix-application-mobile-algerie-2026/)، دون المركبات والاستغلال. يكتمل الجدول في فصل واحد، ويُوقَّع أول العملاء أثناء التطوير.'], visual: 'timeline', after: ['القاعدة التي تهم: **لا يُطلق أسطول بلا عقد.** ثلاث شركات أو مدرستان موقّعتان أثناء التطوير، عشرون مركبة، أول فاتورة شهرية، ثم التوسع. الدرس نفسه كما في باقي حلقات السلسلة، الكثافة قبل الانتشار، مع ميزة: هنا يدفع العميل قبل أن توجد الخدمة.'] },
      { heading: 'الأخطاء التي تقتل هذا المشروع', body: [], list: [
        '**إطلاق تطبيق نقل خامس في العاصمة.** أسطول، علامة، رأس مال: تصل رابعاً في أحسن الأحوال.',
        '**رسم تطبيق الراكب أولاً.** المنتج هو الجدول والفاتورة. الواجهة تأتي بعد.',
        '**دفع أجر السائقين بالرحلة على عمل متكرر.** نقل الشركات والمدرسي يُدفع بالجدول وإلا لا يبقى أحد.',
        '**تجاهل إطار نقل الأشخاص.** يختلف حسب القطاع ويتطور. محامٍ قبل الإطلاق لا بعد الحادث.',
        '**الإطلاق بلا عقد موقّع.** عشرون مركبة تنتظر عملاء تكلّف أكثر من تطوير.',
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: 'ما هو مكافئ Uber في الجزائر؟', a: 'هناك عدة: Yassir المولود في العاصمة وHeetch El Djazaïr وinDrive وYango يتقاسمون النقل في المدن الكبرى. Uber نفسه لا يعمل هناك.' },
        { q: 'هل BlaBlaCar موجود في الجزائر؟', a: 'لا. التنقل بين المدن يتم بسيارة الأجرة الجماعية والحافلة والهاتف. أطلق inDrive رحلات مشتركة بين الولايات نهاية 2025؛ والحجز المسبق بمقعد وعربون ما زال نادراً.' },
        { q: 'هل ما زال بالإمكان إطلاق تطبيق نقل في الجزائر؟', a: 'نعم، خارج النقل الحضري: نقل الشركات بحسابات B2B، النقل المتخصص المدرسي أو الطبي، ما بين المدن المحجوز. كل واحد ينطلق بعشرين مركبة وعملاء يدفعون مسبقاً.' },
        { q: 'كم من الوقت وأي ميزانية؟', a: 'فصل واحد حتى الاستغلال بعشرين مركبة وثلاثة عملاء موقّعين. يقع المشروع في الفئة 3 من شبكة أسعارنا دون المركبات والاستغلال.' },
        { q: 'هل يمكن قيادة هذا المشروع من فرنسا؟', a: 'المنتج نعم. الاستغلال والسائقون والعقود تتطلب حضوراً محلياً، شريكاً أو فريقاً صغيراً في مدينة الإطلاق.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'نسخ Uber في العاصمة يعني الوصول رابعاً. النقل الذي يُتعاقد عليه بالشهر لا منتج له بعد.' },
      { after: 3, text: 'لا يُطلق أسطول بلا عقد. هنا يدفع العميل قبل أن توجد الخدمة.' },
    ],
    cta: { eyebrow: 'رأيت النموذج يعمل', title: 'لنبنِ النسخة الجزائرية. أخبرنا أي قطاع تستهدف، شركات أو متخصص أو ما بين المدن، وفي أي مدينة: سنخبرك بما تبنيه أولاً وما توقّعه قبل.', body: 'تصمم سيملوب منصات النقل والتوزيع وتسيير الأسطول للسوق الجزائرية بمهندسين خبراء في الجزائر وسطيف. جداول متكررة، حسابات B2B، فوترة، تطبيقات سائق وراكب بالعربية والفرنسية. تأطير مكتوب، مراحل، كود باسمك.' },
    related: { label: 'اقرأ بعد ذلك', items: [
      { href: '/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/', kind: 'مشكلة', name: 'أسيّر خمسين موظفاً في الميدان وكل شيء يمر بالهاتف' },
      { href: '/blog/gestion-flotte-livraison-suivi-gps-algerie-2026/', kind: 'دليل', name: 'تسيير الأسطول والتتبع GPS في الجزائر' },
      { href: '/blog/creer-equivalent-leboncoin-vinted-algerie-2026/', kind: 'سلسلة · 04', name: 'Leboncoin وVinted في الجزائر: ما يبقى للبناء' },
      { href: '/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/', kind: 'دليل المؤسس', name: 'إطلاق شركة تقنية ناشئة في الجزائر انطلاقاً من فرنسا' },
    ] },
  },
};

const KEYWORDS = "équivalent uber algérie, uber algérie, blablacar algérie, covoiturage algérie application, application vtc algérie créer, transport d'entreprise navettes employés application, transport scolaire application parents algérie, intercité réservation algérie, uber algeria equivalent, مكافئ أوبر الجزائر";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
