import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/creer-equivalent-doctolib-algerie-2026.mjs';

const SLUG = 'creer-equivalent-doctolib-algerie-2026';
const FIGURES = ['mechanisms', 'changes', 'architecture', 'timeline', 'revenue'];
const DATE = '2026-10-27';

const CONTENT = {
  fr: {
    kind: 'Vu en France, à construire en Algérie · 01', title: "Doctolib en Algérie : comment lancer la prise de rendez-vous médical en ligne (guide fondateur 2026).",
    dek: "Doctolib n'existe pas en Algérie. Ce que le modèle français a prouvé, l'état du marché algérien, ce qui doit changer, l'architecture technique, le calendrier et le modèle économique pour construire la version algérienne.",
    publishedAt: 'Octobre 2026', readTime: '10 min de lecture', author: 'Symloop', about: ['Doctolib', 'Santé numérique', 'Algérie', 'Startup'],
    intro: [
      "**Réponse courte.** Doctolib n'est pas disponible en Algérie et aucun acteur local n'a encore atteint l'usage de masse sur la prise de rendez-vous médical. Le besoin existe : des millions de consultations par an se prennent par téléphone, par WhatsApp ou en file d'attente devant le cabinet. Lancer l'équivalent algérien est faisable en **quatre à six mois** avec une application patient, un agenda médecin et un rappel par SMS, à condition d'adapter le modèle à trois réalités locales : le téléphone comme identité, les cabinets privés comme premiers clients, et la loi 18-07 sur les données personnelles.",
      "Ce guide ouvre notre série « Vu en France, à construire en Algérie », écrite pour les fondateurs de la diaspora qui ont vu un modèle fonctionner en France et veulent le construire en Algérie. Le cadre général, structure juridique, équipe, calendrier, est dans notre [guide du fondateur de la diaspora](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/).",
    ],
    sections: [
      { heading: 'Ce que Doctolib a prouvé en France', body: [
        "Doctolib a été lancé en 2013 avec une idée simple : remplacer l'appel téléphonique au secrétariat par un agenda en ligne. Dix ans plus tard, la majorité des médecins libéraux français l'utilisent et des dizaines de millions de patients prennent rendez-vous en quelques secondes, de nuit comme de jour.",
        "Trois mécanismes expliquent ce succès, et ils comptent plus que la technologie.",
      ], list: [
        "**Le patient ne paie rien.** L'application est gratuite. Le médecin paie un abonnement mensuel parce que l'outil lui fait gagner du temps de secrétariat et réduit les rendez-vous manqués.",
        "**Le rappel automatique.** Un SMS la veille divise les absences par deux ou trois. C'est l'argument qui convainc le praticien dès le premier mois.",
        "**L'effet de réseau local.** Quand un patient trouve son généraliste, son dentiste et son ophtalmologue au même endroit, il ne revient plus au téléphone. Doctolib s'est construit ville par ville, pas pays par pays.",
      ], visual: 'mechanisms', after: [
        "Si vous vivez en France, vous avez utilisé ce produit des dizaines de fois. **Vous savez exactement à quoi ressemble une bonne version.** C'est votre avantage.",
      ] },
      { heading: "L'état du marché algérien en 2026", body: [
        "En Algérie, la prise de rendez-vous se fait encore majoritairement par téléphone, par message WhatsApp au secrétariat, ou physiquement le matin devant le cabinet. Quelques annuaires médicaux et quelques tentatives locales existent, mais aucune n'a atteint l'adoption qui déclenche l'effet de réseau. Le terrain est pourtant favorable.",
      ], list: [
        "**Un secteur privé en croissance.** Cliniques privées, cabinets spécialisés et centres d'imagerie se multiplient dans les grandes villes, et ce sont eux qui ont un problème de gestion d'agenda, pas l'hôpital public.",
        "**Des spécialistes saturés.** Pour certaines spécialités, le délai d'attente se compte en semaines et la file d'attente est un vrai sujet pour les patients.",
        "**Un smartphone dans chaque poche.** Le patient algérien a déjà l'habitude des applications de livraison et de VTC. Le geste de réserver sur mobile est acquis.",
        "**Une politique publique favorable.** La numérisation de la santé est une priorité affichée. Nous l'analysons dans notre dossier sur la [digitalisation de la santé en Algérie](/solutions/digitalisation-sante-algerie/).",
      ] },
      { heading: 'Ce qui doit changer par rapport au modèle français', body: [
        "Copier Doctolib écran par écran est l'erreur la plus courante. Cinq points changent tout.",
      ], ordered: [
        "**Le téléphone est l'identité.** Pas de compte par email. Inscription par numéro et code SMS, en dix secondes. Le rappel de rendez-vous passe par SMS, et de plus en plus par WhatsApp.",
        "**Les premiers clients sont les cabinets privés et les cliniques.** Le médecin algérien n'achètera pas un abonnement sur une promesse. Il faut une version gratuite le premier mois, un agenda qui remplace vraiment son cahier, et un onboarding fait par une personne qui se déplace au cabinet. La vente est locale et physique avant d'être numérique.",
        "**La loi 18-07 encadre les données de santé.** Les données personnelles doivent être hébergées et traitées conformément à la loi algérienne, avec consentement explicite et sécurisation forte. Un hébergement à l'étranger par défaut est un risque juridique. Ce point doit être intégré à l'architecture dès le premier jour, pas ajouté plus tard.",
        "**Trois langues et deux sens de lecture.** Le patient utilise l'arabe ou le français selon la ville et la génération. L'interface doit gérer les deux, avec l'écriture de droite à gauche proprement, et l'anglais pour certains praticiens.",
        "**La téléconsultation attend un cadre clair.** En France, elle est remboursée et encadrée. En Algérie, le cadre réglementaire évolue encore. Lancez d'abord la prise de rendez-vous, qui ne pose aucun problème, et préparez l'architecture pour ajouter la vidéo quand le cadre sera stable. Nous suivons le sujet dans notre analyse [IA, santé et télémédecine en Algérie](/blog/ia-sante-telemedicine-algerie-2026/).",
      ], visual: 'changes' },
      { heading: "L'architecture technique d'un Doctolib algérien", body: [
        "Voici le socle que nous recommandons pour une première version solide : une application patient, un espace médecin, un agenda multi-praticiens au centre, des notifications SMS et WhatsApp, et des données hébergées conformément à la loi 18-07.",
      ], visual: 'architecture', after: [
        "Le cœur du produit est l'agenda. Gestion des créneaux, des absences, des consultations de durée variable, des listes d'attente et des annulations. **C'est là que se cachent les bugs** et c'est là qu'une équipe qui a déjà livré des logiciels de cabinet médical fait la différence. Nous avons détaillé ce module dans notre guide des [logiciels de clinique et cabinet médical en Algérie](/blog/logiciel-clinique-cabinet-medical-algerie-2026/).",
      ] },
      { heading: 'Budget et calendrier réalistes', body: [
        "Une plateforme de prise de rendez-vous avec application patient, espace médecin, SMS et tableau de bord tombe dans la catégorie des applications avec comptes utilisateurs et logique métier avancée. Dans la [grille de prix des applications mobiles en Algérie](/blog/prix-application-mobile-algerie-2026/), cela correspond à une première version entre la catégorie 2 et la catégorie 3, sans paiement en ligne au départ puisque le patient ne paie pas.",
      ], list: [
        "**Semaines 1 et 2.** Cadrage, choix des spécialités de lancement, règles d'agenda, conformité 18-07.",
        "**Semaines 3 à 5.** Design des parcours patient et médecin, en arabe et en français, validés sur téléphone.",
        "**Semaines 6 à 14.** Développement du backend, de l'application et de l'espace médecin, avec une version testable toutes les deux semaines.",
        "**Semaines 15 et 16.** Tests avec cinq à dix cabinets pilotes dans une seule ville, publication sur les stores.",
        "**Mois 5 et 6.** Activation terrain, premiers abonnements, deuxième version pilotée par l'usage.",
      ], visual: 'timeline', after: [
        "Lancer dans une seule ville avec trente cabinets actifs vaut mieux que lancer dans tout le pays avec trois. C'est la leçon de Doctolib, et elle vaut encore plus en Algérie.",
      ] },
      { heading: 'Le modèle économique', body: ["Trois sources de revenus, dans cet ordre."], ordered: [
        "**Abonnement mensuel par praticien**, avec un mois gratuit et un tarif adapté au marché local. C'est la base.",
        "**Services premium pour les cliniques** : multi-praticiens, statistiques, rappels WhatsApp, intégration avec leur logiciel de gestion.",
        "**Plus tard, la téléconsultation et les services associés**, quand le cadre le permettra.",
      ], visual: 'revenue', after: [
        "**Ne monétisez jamais le patient.** La gratuité côté patient est ce qui crée le réseau, et le réseau est ce qui rend le service indispensable au médecin.",
      ] },
      { heading: 'Les erreurs qui tuent ce projet', body: [], list: [
        "**Commencer par la téléconsultation.** Trop tôt, cadre instable, et le médecin n'en veut pas encore.",
        "**Lancer dans dix villes.** Sans densité locale, le patient ne trouve pas son médecin et n'ouvre plus l'application.",
        "**Négliger l'équipe terrain.** Ce produit se vend cabinet par cabinet. Le logiciel sans équipe d'activation ne décolle pas.",
        "**Héberger les données n'importe où.** La loi 18-07 et la sensibilité des données de santé en font une question de survie, pas de détail.",
        "**Construire seul avec un développeur isolé.** L'agenda médical est un module exigeant. Une équipe qui l'a déjà livré économise des mois.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Doctolib est-il disponible en Algérie ?", a: "Non. Doctolib opère en France, en Allemagne, en Italie et aux Pays-Bas. Il n'existe pas de version algérienne et aucun acteur local n'a encore atteint l'adoption de masse." },
        { q: "Combien de temps pour lancer l'équivalent en Algérie ?", a: "Quatre mois pour une première version avec application patient, agenda médecin et rappels SMS, puis deux mois d'activation terrain dans une ville pilote." },
        { q: "Peut-on lancer depuis la France ?", a: "Oui. Le développement, le cadrage et le pilotage se font à distance avec une équipe en Algérie sur le même fuseau horaire. L'activation des cabinets demande une présence locale, qui peut être un associé ou une petite équipe recrutée sur place." },
        { q: "Faut-il un agrément pour une application de rendez-vous médical ?", a: "La prise de rendez-vous n'est pas un acte médical. Le point critique est la conformité à la loi 18-07 sur les données personnelles. La téléconsultation, elle, relève d'un cadre distinct à vérifier au moment du lancement." },
        { q: "Quel budget prévoir ?", a: "Consultez notre grille de prix par catégorie d'application. Une première version se situe entre la catégorie 2 et la catégorie 3, hors équipe terrain et marketing." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Le marché est ouvert. La question n'est pas si quelqu'un va le faire, mais qui le fera correctement." },
      { after: 4, text: "Lancer dans une seule ville avec trente cabinets actifs vaut mieux que lancer dans tout le pays avec trois." },
    ],
    cta: { eyebrow: 'Vous avez vu le modèle fonctionner', title: "Construisons la version algérienne. Décrivez votre projet en cinq minutes : nous vous dirons par quelle ville commencer, quel périmètre lancer en premier et quel budget prévoir.", body: "Symloop conçoit et développe des plateformes santé pour le marché algérien, avec des ingénieurs seniors à Alger et Sétif qui ont déjà livré des logiciels de cabinet et de clinique, des agendas multi-praticiens et des applications patient en arabe et en français. Nous travaillons avec des fondateurs établis en France sur leur fuseau horaire, avec un cadrage écrit, des jalons et la propriété totale du code." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/', kind: 'Guide fondateur', name: "Lancer une startup tech en Algérie depuis la France" },
      { href: '/blog/logiciel-clinique-cabinet-medical-algerie-2026/', kind: 'Guide', name: 'Logiciel de clinique et cabinet médical en Algérie' },
      { href: '/solutions/digitalisation-sante-algerie/', kind: 'Dossier', name: 'Digitalisation de la santé en Algérie' },
      { href: '/insights/healthcare/', kind: 'Insight', name: 'Santé numérique : ce que nous construisons' },
    ] },
  },
  en: {
    kind: 'Seen in France, to be built in Algeria · 01', title: 'Doctolib in Algeria: how to launch online medical booking (founder guide 2026).',
    dek: "Doctolib does not exist in Algeria. What the French model proved, the state of the Algerian market, what must change, the technical architecture, the timeline and the business model to build the Algerian version.",
    publishedAt: 'October 2026', readTime: '10 min read', author: 'Symloop', about: ['Doctolib', 'Digital health', 'Algeria', 'Startup'],
    intro: [
      "**Short answer.** Doctolib is not available in Algeria and no local player has yet reached mass adoption for medical appointment booking. The need is real: millions of consultations a year are booked by phone, by WhatsApp or by queuing outside the practice. Launching the Algerian equivalent is feasible in **four to six months** with a patient app, a doctor agenda and SMS reminders, provided the model is adapted to three local realities: the phone as identity, private practices as first customers, and Law 18-07 on personal data.",
      "This guide opens our series \"Seen in France, to be built in Algeria\", written for diaspora founders who saw a model work in France and want to build it in Algeria. The general frame, legal structure, team, timeline, is in our [diaspora founder's guide](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/).",
    ],
    sections: [
      { heading: 'What Doctolib proved in France', body: [
        "Doctolib launched in 2013 with a simple idea: replace the phone call to the front desk with an online agenda. Ten years later, most French independent physicians use it and tens of millions of patients book in seconds, day or night.",
        "Three mechanisms explain this success, and they matter more than the technology.",
      ], list: [
        "**The patient pays nothing.** The app is free. The doctor pays a monthly subscription because the tool saves front-desk time and reduces no-shows.",
        "**Automatic reminders.** An SMS the day before cuts no-shows by two to three times. It is the argument that convinces the practitioner in the first month.",
        "**Local network effect.** When a patient finds their GP, dentist and ophthalmologist in one place, they never go back to the phone. Doctolib was built city by city, not country by country.",
      ], visual: 'mechanisms', after: [
        "If you live in France, you have used this product dozens of times. **You know exactly what a good version looks like.** That is your advantage.",
      ] },
      { heading: 'The state of the Algerian market in 2026', body: [
        "In Algeria, appointments are still mostly booked by phone, by WhatsApp message to the front desk, or physically in the morning outside the practice. A few medical directories and local attempts exist, but none has reached the adoption that triggers the network effect. The ground is favourable though.",
      ], list: [
        "**A growing private sector.** Private clinics, specialist practices and imaging centres multiply in the big cities, and they are the ones with an agenda problem, not the public hospital.",
        "**Saturated specialists.** For some specialties, waiting time is counted in weeks and the queue is a real issue for patients.",
        "**A smartphone in every pocket.** The Algerian patient is already used to delivery and ride-hailing apps. Booking on mobile is an acquired gesture.",
        "**A favourable public policy.** Health digitisation is a stated priority. We analyse it in our report on [health digitisation in Algeria](/solutions/digitalisation-sante-algerie/).",
      ] },
      { heading: 'What must change from the French model', body: [
        "Copying Doctolib screen by screen is the most common mistake. Five points change everything.",
      ], ordered: [
        "**The phone is the identity.** No email account. Sign-up by number and SMS code, in ten seconds. Appointment reminders go by SMS, and increasingly by WhatsApp.",
        "**First customers are private practices and clinics.** An Algerian doctor will not buy a subscription on a promise. You need a free first month, an agenda that really replaces their notebook, and onboarding done by someone who visits the practice. Sales are local and physical before they are digital.",
        "**Law 18-07 governs health data.** Personal data must be hosted and processed in compliance with Algerian law, with explicit consent and strong security. Hosting abroad by default is a legal risk. This must be built into the architecture from day one, not added later.",
        "**Three languages and two reading directions.** Patients use Arabic or French depending on the city and the generation. The interface must handle both, with proper right-to-left, and English for some practitioners.",
        "**Teleconsultation is waiting for a clear framework.** In France it is reimbursed and regulated. In Algeria the regulatory framework is still evolving. Launch booking first, which raises no issue, and prepare the architecture to add video when the framework is stable. We follow the topic in our analysis of [AI, health and telemedicine in Algeria](/blog/ia-sante-telemedicine-algerie-2026/).",
      ], visual: 'changes' },
      { heading: 'The technical architecture of an Algerian Doctolib', body: [
        "Here is the base we recommend for a solid first version: a patient app, a doctor space, a multi-practitioner agenda at the centre, SMS and WhatsApp notifications, and data hosted in compliance with Law 18-07.",
      ], visual: 'architecture', after: [
        "The core of the product is the agenda. Slots, absences, variable-length consultations, waiting lists and cancellations. **That is where bugs hide** and where a team that has already shipped medical practice software makes the difference. We detailed this module in our guide to [clinic and medical practice software in Algeria](/blog/logiciel-clinique-cabinet-medical-algerie-2026/).",
      ] },
      { heading: 'Realistic budget and timeline', body: [
        "A booking platform with patient app, doctor space, SMS and dashboard falls into the category of apps with user accounts and advanced business logic. In the [mobile app price grid for Algeria](/blog/prix-application-mobile-algerie-2026/), a first version sits between category 2 and category 3, with no online payment at first since the patient does not pay.",
      ], list: [
        "**Weeks 1 and 2.** Scoping, choice of launch specialties, agenda rules, 18-07 compliance.",
        "**Weeks 3 to 5.** Design of patient and doctor journeys, in Arabic and French, validated on a phone.",
        "**Weeks 6 to 14.** Development of the backend, the app and the doctor space, with a testable version every two weeks.",
        "**Weeks 15 and 16.** Tests with five to ten pilot practices in a single city, store publication.",
        "**Months 5 and 6.** Field activation, first subscriptions, second version driven by usage.",
      ], visual: 'timeline', after: [
        "Launching in one city with thirty active practices beats launching nationwide with three. It is Doctolib's lesson, and it is even more true in Algeria.",
      ] },
      { heading: 'The business model', body: ['Three revenue sources, in this order.'], ordered: [
        "**Monthly subscription per practitioner**, with a free month and a price adapted to the local market. This is the base.",
        "**Premium services for clinics**: multi-practitioner, statistics, WhatsApp reminders, integration with their management software.",
        "**Later, teleconsultation and related services**, when the framework allows it.",
      ], visual: 'revenue', after: [
        "**Never monetize the patient.** Free access on the patient side is what builds the network, and the network is what makes the service indispensable to the doctor.",
      ] },
      { heading: 'The mistakes that kill this project', body: [], list: [
        "**Starting with teleconsultation.** Too early, unstable framework, and doctors do not want it yet.",
        "**Launching in ten cities.** Without local density, patients do not find their doctor and stop opening the app.",
        "**Neglecting the field team.** This product sells practice by practice. Software without an activation team does not take off.",
        "**Hosting data anywhere.** Law 18-07 and the sensitivity of health data make it a matter of survival, not detail.",
        "**Building alone with an isolated developer.** The medical agenda is a demanding module. A team that has shipped it saves months.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'Is Doctolib available in Algeria?', a: 'No. Doctolib operates in France, Germany, Italy and the Netherlands. There is no Algerian version and no local player has yet reached mass adoption.' },
        { q: 'How long to launch the equivalent in Algeria?', a: 'Four months for a first version with patient app, doctor agenda and SMS reminders, then two months of field activation in a pilot city.' },
        { q: 'Can it be launched from France?', a: 'Yes. Development, scoping and steering happen remotely with a team in Algeria in the same time zone. Activating practices requires a local presence, which can be a partner or a small team hired on site.' },
        { q: 'Is a licence required for a medical booking app?', a: 'Booking an appointment is not a medical act. The critical point is compliance with Law 18-07 on personal data. Teleconsultation falls under a distinct framework to verify at launch time.' },
        { q: 'What budget should I plan?', a: 'See our price grid by app category. A first version sits between category 2 and category 3, excluding field team and marketing.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'The market is open. The question is not whether someone will do it, but who will do it properly.' },
      { after: 4, text: 'Launching in one city with thirty active practices beats launching nationwide with three.' },
    ],
    cta: { eyebrow: 'You have seen the model work', title: "Let's build the Algerian version. Describe your project in five minutes: we will tell you which city to start with, what scope to launch first and what budget to plan.", body: "Symloop designs and builds health platforms for the Algerian market, with senior engineers in Algiers and Sétif who have shipped practice and clinic software, multi-practitioner agendas and patient apps in Arabic and French. We work with founders based in France in their time zone, with a written scope, milestones and full code ownership." },
    related: { label: 'Read next', items: [
      { href: '/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/', kind: 'Founder guide', name: 'Launching a tech startup in Algeria from France' },
      { href: '/blog/logiciel-clinique-cabinet-medical-algerie-2026/', kind: 'Guide', name: 'Clinic and medical practice software in Algeria' },
      { href: '/solutions/digitalisation-sante-algerie/', kind: 'Report', name: 'Health digitisation in Algeria' },
      { href: '/insights/healthcare/', kind: 'Insight', name: 'Digital health: what we build' },
    ] },
  },
  ar: {
    kind: 'رأيته في فرنسا، ابنِه في الجزائر · 01', title: 'Doctolib في الجزائر: كيف تطلق حجز المواعيد الطبية عبر الإنترنت (دليل المؤسس 2026).',
    dek: 'Doctolib غير موجود في الجزائر. ما أثبته النموذج الفرنسي، حال السوق الجزائرية، ما يجب تغييره، البنية التقنية، الجدول الزمني ونموذج الأعمال لبناء النسخة الجزائرية.',
    publishedAt: 'أكتوبر 2026', readTime: '10 دقائق قراءة', author: 'سيملوب', about: ['Doctolib', 'الصحة الرقمية', 'الجزائر', 'شركة ناشئة'],
    intro: [
      '**الجواب المختصر.** Doctolib غير متاح في الجزائر ولم يصل أي فاعل محلي بعد إلى الاستخدام الجماهيري في حجز المواعيد الطبية. الحاجة قائمة: ملايين الاستشارات سنوياً تُحجز بالهاتف أو واتساب أو بالوقوف أمام العيادة. إطلاق المكافئ الجزائري ممكن في **أربعة إلى ستة أشهر** بتطبيق للمريض وأجندة للطبيب وتذكير بـSMS، شرط تكييف النموذج مع ثلاثة وقائع محلية: الهاتف كهوية، العيادات الخاصة كأول العملاء، والقانون 18-07 للبيانات الشخصية.',
      'يفتتح هذا الدليل سلسلتنا «رأيته في فرنسا، ابنِه في الجزائر». الإطار العام في [دليل مؤسس الجالية](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/).',
    ],
    sections: [
      { heading: 'ما أثبته Doctolib في فرنسا', body: ['انطلق Doctolib سنة 2013 بفكرة بسيطة: استبدال الاتصال بالسكرتارية بأجندة على الإنترنت. بعد عشر سنوات يستخدمه أغلب الأطباء الأحرار في فرنسا ويحجز عشرات الملايين من المرضى في ثوانٍ.'], list: [
        '**المريض لا يدفع شيئاً.** الطبيب يدفع اشتراكاً شهرياً لأن الأداة توفر وقت السكرتارية وتقلّل الغيابات.',
        '**التذكير التلقائي.** رسالة SMS قبل الموعد بيوم تقلّص الغيابات إلى النصف أو الثلث.',
        '**أثر الشبكة المحلي.** عندما يجد المريض طبيبه العام وطبيب أسنانه وطبيب عيونه في مكان واحد لا يعود إلى الهاتف. بُني مدينة بمدينة.',
      ], visual: 'mechanisms', after: ['إن كنت تعيش في فرنسا فقد استخدمت هذا المنتج عشرات المرات. **تعرف تماماً كيف تبدو النسخة الجيدة.** هذه ميزتك.'] },
      { heading: 'حال السوق الجزائرية في 2026', body: ['ما زال حجز المواعيد في الجزائر يتم غالباً بالهاتف أو برسالة واتساب للسكرتارية أو بالحضور صباحاً أمام العيادة. توجد بعض الأدلة الطبية والمحاولات المحلية لكن لم تصل أي منها إلى الاعتماد الذي يطلق أثر الشبكة. ومع ذلك فالأرضية مواتية.'], list: [
        '**قطاع خاص في نمو.** المصحات والعيادات المتخصصة ومراكز التصوير تتكاثر في المدن الكبرى، وهي من لديها مشكلة أجندة لا المستشفى العمومي.',
        '**أخصائيون مشبعون.** في بعض التخصصات تُحسب مدة الانتظار بالأسابيع.',
        '**هاتف ذكي في كل جيب.** المريض الجزائري معتاد على تطبيقات التوصيل والنقل.',
        '**سياسة عمومية مواتية.** رقمنة الصحة أولوية معلنة. نحللها في ملف [رقمنة الصحة في الجزائر](/solutions/digitalisation-sante-algerie/).',
      ] },
      { heading: 'ما يجب تغييره مقارنة بالنموذج الفرنسي', body: ['نسخ Doctolib شاشة بشاشة هو الخطأ الأكثر شيوعاً. خمس نقاط تغيّر كل شيء.'], ordered: [
        '**الهاتف هو الهوية.** تسجيل برقم ورمز SMS في عشر ثوانٍ. التذكير عبر SMS وواتساب.',
        '**أول العملاء هم العيادات الخاصة والمصحات.** شهر مجاني، أجندة تعوّض الدفتر فعلاً، وتفعيل يقوم به شخص يزور العيادة. البيع محلي وميداني قبل أن يكون رقمياً.',
        '**القانون 18-07 يؤطر البيانات الصحية.** استضافة ومعالجة مطابقة للقانون الجزائري مع موافقة صريحة وتأمين قوي، منذ اليوم الأول.',
        '**ثلاث لغات واتجاها قراءة.** العربية والفرنسية مع RTL سليم، والإنجليزية لبعض الأطباء.',
        '**الاستشارة عن بعد تنتظر إطاراً واضحاً.** أطلق الحجز أولاً وجهّز البنية للفيديو لاحقاً. نتابع الموضوع في [الذكاء الاصطناعي والصحة والطب عن بعد في الجزائر](/blog/ia-sante-telemedicine-algerie-2026/).',
      ], visual: 'changes' },
      { heading: 'البنية التقنية لـDoctolib جزائري', body: ['القاعدة التي نوصي بها لنسخة أولى متينة: تطبيق للمريض، فضاء للطبيب، أجندة متعددة الأطباء في المركز، إشعارات SMS وواتساب، وبيانات مستضافة وفق القانون 18-07.'], visual: 'architecture', after: ['قلب المنتج هو الأجندة: الفترات، الغيابات، الاستشارات متغيرة المدة، قوائم الانتظار والإلغاءات. **هناك تختبئ الأخطاء.** فصّلنا هذه الوحدة في دليل [برمجيات المصحات والعيادات الطبية في الجزائر](/blog/logiciel-clinique-cabinet-medical-algerie-2026/).'] },
      { heading: 'ميزانية وجدول زمني واقعيان', body: ['منصة حجز بتطبيق مريض وفضاء طبيب وSMS ولوحة تحكم تقع بين الفئة 2 والفئة 3 في [شبكة أسعار تطبيقات الجوال في الجزائر](/blog/prix-application-mobile-algerie-2026/)، دون دفع إلكتروني في البداية لأن المريض لا يدفع.'], list: [
        '**الأسبوعان 1 و2.** التأطير، تخصصات الإطلاق، قواعد الأجندة، مطابقة 18-07.',
        '**الأسابيع 3 إلى 5.** تصميم مسار المريض والطبيب بالعربية والفرنسية.',
        '**الأسابيع 6 إلى 14.** تطوير الخلفية والتطبيق وفضاء الطبيب، نسخة قابلة للاختبار كل أسبوعين.',
        '**الأسبوعان 15 و16.** اختبار مع خمس إلى عشر عيادات في مدينة واحدة، النشر على المتاجر.',
        '**الشهران 5 و6.** التفعيل الميداني، أول الاشتراكات، النسخة الثانية.',
      ], visual: 'timeline', after: ['الإطلاق في مدينة واحدة مع ثلاثين عيادة نشطة أفضل من الإطلاق في كل البلاد مع ثلاث. هذا درس Doctolib، وهو أصدق في الجزائر.'] },
      { heading: 'نموذج الأعمال', body: ['ثلاثة مصادر إيراد، بهذا الترتيب.'], ordered: [
        '**اشتراك شهري لكل طبيب**، بشهر مجاني وسعر ملائم للسوق المحلية.',
        '**خدمات مميزة للمصحات**: تعدد الأطباء، إحصائيات، تذكيرات واتساب، تكامل مع برنامج التسيير.',
        '**لاحقاً، الاستشارة عن بعد** عندما يسمح الإطار.',
      ], visual: 'revenue', after: ['**لا تحقق الربح من المريض أبداً.** المجانية تبني الشبكة، والشبكة تجعل الخدمة لا غنى عنها للطبيب.'] },
      { heading: 'الأخطاء التي تقتل هذا المشروع', body: [], list: [
        '**البدء بالاستشارة عن بعد.** مبكر جداً وإطار غير مستقر.',
        '**الإطلاق في عشر مدن.** بلا كثافة محلية لا يجد المريض طبيبه.',
        '**إهمال الفريق الميداني.** هذا المنتج يُباع عيادة بعيادة.',
        '**استضافة البيانات في أي مكان.** القانون 18-07 وحساسية البيانات الصحية مسألة بقاء.',
        '**البناء وحيداً مع مطوّر معزول.** الأجندة الطبية وحدة صعبة، والفريق الذي سلّمها يوفر شهوراً.',
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: 'هل Doctolib متاح في الجزائر؟', a: 'لا. يعمل Doctolib في فرنسا وألمانيا وإيطاليا وهولندا. لا توجد نسخة جزائرية ولم يصل أي فاعل محلي إلى الاعتماد الجماهيري.' },
        { q: 'كم يستغرق إطلاق المكافئ في الجزائر؟', a: 'أربعة أشهر لنسخة أولى بتطبيق مريض وأجندة طبيب وتذكيرات SMS، ثم شهران من التفعيل الميداني في مدينة تجريبية.' },
        { q: 'هل يمكن الإطلاق من فرنسا؟', a: 'نعم. التطوير والتأطير والقيادة عن بعد مع فريق في الجزائر في نفس المنطقة الزمنية. تفعيل العيادات يتطلب حضوراً محلياً.' },
        { q: 'هل يلزم اعتماد لتطبيق مواعيد طبية؟', a: 'حجز الموعد ليس عملاً طبياً. النقطة الحرجة هي مطابقة القانون 18-07. أما الاستشارة عن بعد فتخضع لإطار مستقل يُتحقق منه عند الإطلاق.' },
        { q: 'ما الميزانية المتوقعة؟', a: 'راجع شبكة الأسعار حسب فئة التطبيق. النسخة الأولى بين الفئة 2 والفئة 3، دون الفريق الميداني والتسويق.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'السوق مفتوحة. السؤال ليس هل سيفعلها أحد، بل من سيفعلها بشكل صحيح.' },
      { after: 4, text: 'الإطلاق في مدينة واحدة مع ثلاثين عيادة نشطة أفضل من الإطلاق في كل البلاد مع ثلاث.' },
    ],
    cta: { eyebrow: 'رأيت النموذج يعمل', title: 'لنبنِ النسخة الجزائرية. صف مشروعك في خمس دقائق: سنخبرك بأي مدينة تبدأ وأي نطاق تطلق أولاً وما الميزانية المتوقعة.', body: 'تصمم سيملوب وتطوّر منصات صحية للسوق الجزائرية بمهندسين خبراء في الجزائر وسطيف سلّموا برمجيات عيادات ومصحات وأجندات متعددة الأطباء وتطبيقات مرضى بالعربية والفرنسية. نعمل مع مؤسسين مقيمين في فرنسا بتأطير مكتوب ومراحل وملكية كاملة للكود.' },
    related: { label: 'اقرأ بعد ذلك', items: [
      { href: '/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/', kind: 'دليل المؤسس', name: 'إطلاق شركة تقنية ناشئة في الجزائر انطلاقاً من فرنسا' },
      { href: '/blog/logiciel-clinique-cabinet-medical-algerie-2026/', kind: 'دليل', name: 'برمجيات المصحات والعيادات الطبية في الجزائر' },
      { href: '/solutions/digitalisation-sante-algerie/', kind: 'ملف', name: 'رقمنة الصحة في الجزائر' },
      { href: '/insights/healthcare/', kind: 'رؤية', name: 'الصحة الرقمية: ما نبنيه' },
    ] },
  },
};

const KEYWORDS = 'doctolib algérie, équivalent doctolib algérie, prise de rendez-vous médical en ligne algérie, application rendez-vous médecin algérie, créer une plateforme médicale algérie, startup santé algérie, lancer doctolib algérien, doctolib algeria, medical booking app algeria';

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
