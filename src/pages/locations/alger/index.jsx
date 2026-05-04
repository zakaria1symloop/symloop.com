// ============================================================================
// SYMLOOP — /locations/alger/
//
// Editorial hub page for Algiers — the capital, our HQ, and the most
// SEO-critical wilaya page on the site. Was previously 404 because the
// alger/ directory only contained service-specific subpages (alger/ai,
// alger/mobile, etc.) without an index.
//
// Same visual + editorial DNA as setif.jsx and the /insights/* pages.
// Cultural depth — Alger as the capital city of finance, government,
// telecom and energy, with its Casbah/Hydra/Bab Ezzouar geography and
// its political-economic weight reflected in the copy.
// ============================================================================

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import SEO from '../../../components/SEO';

const CONTENT = {
  fr: {
    eyebrow:     'Alger · Capitale',
    publishedAt: 'Mis à jour Mai 2026',
    title:       "Symloop à Alger — l'ingénierie pour la capitale qui décide pour le pays.",
    dek:         "Notre siège est à Alger, et la majorité de nos clients algériens y sont basés ou y ont leurs centres de décision. Banques, ministères, opérateurs télécom, Sonatrach et ses filiales, scale-ups : c'est ici que se joue l'essentiel de l'économie numérique algérienne.",
    meta: {
      one:   'Alger Centre · Hydra · Bab Ezzouar',
      two:   '3,5 millions d\'habitants',
      three: 'Siège Symloop',
    },

    intro: [
      "Alger n'est pas une ville comme les autres en Algérie. C'est la capitale politique, économique, financière et culturelle d'un pays de 45 millions d'habitants. Les ministères, la Banque d'Algérie, les sièges de Sonatrach et de Sonelgaz, les directions générales des banques publiques et privées, les opérateurs télécom et les scale-ups les plus financées du pays y opèrent. Quand un projet de transformation numérique national se décide, il se décide à Alger.",
      "Cette page n'est pas une argumentation commerciale. C'est un portrait éditorial de notre travail à Alger — nos clients ici, le tissu économique que nous servons, et la spécificité d'opérer depuis la capitale d'une économie qui se digitalise rapidement sous la pression de Vision 2030, du Plan National de Digitalisation, et de la concurrence régionale du Maroc, de la Tunisie et du Golfe.",
    ],

    sections: [
      {
        heading: "Le centre de décision numérique du pays",
        body: [
          "Alger concentre quatre tissus économiques que nous servons en parallèle. Premier tissu : le secteur bancaire et financier, dont les directions générales sont à Hydra, Ben Aknoun et Alger Centre. BNA, BEA, BADR, CPA, BDL, AGB, Société Générale Algérie, BNP Paribas El Djazair, Salam Bank — les programmes de modernisation core banking, de gestion cash corporate et de conformité réglementaire BCT/AGB s'y pilotent. Deuxième tissu : les opérateurs télécom et les filiales numériques (Algérie Télécom, Mobilis, Djezzy, Ooredoo, Algérie Poste, BaridiMob), où les programmes IT sont permanents et à grande échelle.",
          "Troisième tissu : les ministères, les administrations centrales et les grandes entreprises publiques (Sonatrach, Sonelgaz, NAFTAL, AIR ALGÉRIE) — programmes de digitalisation, e-services aux citoyens, ERP sectoriels, sécurité des systèmes d'information. Quatrième tissu : l'écosystème startup et scale-up algérois — Yassir, TemTem, Khdma, Yalidine, ZR Express, Numidia, et la nouvelle vague de fintech, deeptech et SaaS B2B basées principalement à Alger Centre, Bab Ezzouar et Sidi Yahia.",
          "Ces quatre tissus partagent une caractéristique : ils font face à une accélération réglementaire et concurrentielle qui rend impossible le statu quo technologique. Les anciens ERP propriétaires, les anciennes piles fournisseurs étrangères, les anciens process papier — tout cela ne survit pas à 2030. Les directions IT le savent. Le passage à l'acte est ce qui se joue maintenant à Alger.",
        ],
      },
      {
        heading: "Nos engagements à Alger",
        body: [
          "Nos missions algéroises se répartissent dans cinq catégories. **Plateformes bancaires et fintech** : core banking modernisation, plateformes de gestion cash corporate, intégrations interbancaires, applications mobiles bancaires, solutions KYC biométriques, pipelines AML/CFT. **Systèmes pour le secteur public** : portails citoyens, e-services ministériels, dématérialisation de procédures administratives, plateformes d'audit et de transparence, infrastructures de sécurité.",
          "**ERP et systèmes d'information d'entreprise** pour les grands groupes algérois — production, gestion commerciale, comptabilité multi-entités, conformité fiscale algérienne, intégrations CIB/Edahabia/SATIM côté paiement, intégrations DGI et CNRC côté réglementaire. **Applications mobiles** pour les opérateurs télécom et les scale-ups : architecture native iOS/Android, Flutter pour les MVP, infrastructures backend à grande échelle. **Conseil technologique** pour les directions IT qui pilotent des programmes de transformation : architecture, choix de stack, dimensionnement des équipes, due diligence sur des fournisseurs étrangers.",
          "Aucun de ces engagements n'est packagé. Chacun commence par une phase de discovery sur place dans les bureaux du client à Hydra, Ben Aknoun, El Biar, Bab Ezzouar ou ailleurs dans la capitale. Notre équipe vient sur place. Nous lisons les documents existants, nous parlons aux opérateurs, nous comprenons la réalité avant de proposer une architecture.",
        ],
      },
      {
        heading: "L'avantage d'opérer depuis Alger",
        body: [
          "Notre siège est à Alger. Cette proximité géographique avec le centre de décision algérien change concrètement la nature de notre travail. Pour un client basé à Hydra ou à Bab Ezzouar, une réunion sur site se planifie en deux heures, pas en deux semaines. Une discovery technique commence le jour-même de l'appel commercial. Une revue d'architecture critique se tient en présentiel autour d'un tableau blanc, pas par un Zoom de quarante-cinq minutes.",
          "Cette proximité est aussi un avantage pour nos clients internationaux qui exécutent des projets en Algérie. Une banque européenne qui souhaite étendre ses services à Alger, un éditeur SaaS qui veut intégrer les rails de paiement algériens, un investisseur qui souhaite faire une due diligence technique sur une scale-up algérienne — tous bénéficient d'avoir un partenaire d'ingénierie qui connaît le contexte local autant que le contexte technique international.",
          "Nous parlons français, arabe et anglais avec la même aisance. Nous comprenons la fiscalité algérienne, le code du travail local, les exigences CNRC, les contraintes douanières, les procédures bancaires. Nous facturons en dinars depuis Alger, en euros depuis nos entités partenaires en Europe selon ce que demande le contrat.",
        ],
      },
      {
        heading: "L'écosystème d'ingénierie algérois",
        body: [
          "Alger forme la majorité des ingénieurs en informatique du pays. ESI Alger (École Supérieure d'Informatique), USTHB, ENSI, ENSTP, Université d'Alger 1 — ces institutions produisent chaque année des milliers de diplômés en informatique, en ingénierie logicielle, en cybersécurité, en data science et en intelligence artificielle. Notre équipe est en grande partie composée d'anciens étudiants et de docteurs de ces écoles, complétée par des profils diasporiques qui rentrent au pays après quelques années à Paris, Londres ou le Golfe.",
          "Cet écosystème est aussi celui dans lequel nos clients recrutent. Quand un client algérois nous demande d'aider à structurer une équipe IT interne, nous avons une vision claire du marché du travail algérois — niveaux de compétence, fourchettes de rémunération, profils disponibles, qualité des écoles. Cette vision est rarement disponible auprès d'un cabinet de conseil étranger.",
        ],
      },
      {
        heading: "D'Alger vers le pays et la région",
        body: [
          "Plusieurs des plateformes que nous exploitons aujourd'hui pour des clients en MENA, en France et en Espagne ont commencé comme des projets pour des clients algérois. Un système de gestion de flotte construit pour un opérateur de livraison à Alger sert maintenant des clients similaires au Maroc et en Tunisie. Un module de KYC biométrique conçu pour une banque algérienne a été redéployé chez un client en Mauritanie et chez un autre au Sénégal. Une plateforme d'e-services développée pour une administration algérienne a inspiré l'architecture d'un projet équivalent dans le Golfe.",
          "Cela vous concerne directement si vous opérez à Alger : vous travaillez avec une équipe qui connaît votre marché, qui a déjà résolu plusieurs des problèmes que vous rencontrez, et qui peut vous éviter les erreurs courantes — celles qui coûtent six mois de retard et plusieurs centaines de milliers de dinars.",
        ],
      },
    ],

    related: {
      eyebrow: 'Pour aller plus loin',
      services: {
        label: 'Disciplines à Alger',
        items: [
          { key: 'ai',                   name: 'Intelligence Artificielle' },
          { key: 'software-engineering', name: 'Ingénierie logicielle' },
          { key: 'mobile',               name: 'Ingénierie mobile' },
          { key: 'cloud',                name: 'Cloud & DevOps' },
          { key: 'cybersecurity',        name: 'Cybersécurité' },
          { key: 'consulting',           name: 'Conseil technologique' },
        ],
      },
      insights: {
        label: 'Études liées',
        items: [
          { key: 'banking',     name: "Modernisation des logiciels bancaires — ce que les banques construisent" },
          { key: 'government',  name: "Digitalisation de l'administration — services publics souverains" },
          { key: 'erp',         name: "ERP sur mesure pour PME algériennes — au-delà d'Odoo" },
        ],
      },
    },

    cta: {
      eyebrow: 'Parlez à un ingénieur basé à Alger',
      title:   "Vous dirigez une organisation à Alger ? Décrivez votre situation. Nous serons sur site cette semaine.",
      button:  'Réserver un appel de 30 minutes',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  en: {
    eyebrow:     'Algiers · Capital',
    publishedAt: 'Updated May 2026',
    title:       "Symloop in Algiers — engineering for the capital that decides for the country.",
    dek:         "Our headquarters is in Algiers, and the majority of our Algerian clients are based here or have their decision centers here. Banks, ministries, telecom operators, Sonatrach and its subsidiaries, scale-ups — this is where most of the Algerian digital economy plays out.",
    meta: {
      one:   'Algiers Centre · Hydra · Bab Ezzouar',
      two:   '3.5 million inhabitants',
      three: 'Symloop HQ',
    },

    intro: [
      "Algiers is not a city like any other in Algeria. It is the political, economic, financial and cultural capital of a country of 45 million people. The ministries, the Bank of Algeria, the headquarters of Sonatrach and Sonelgaz, the executive offices of public and private banks, the telecom operators and the most-funded scale-ups in the country all operate here. When a national digital transformation program is decided, it is decided in Algiers.",
      "This page is not a sales pitch. It is an editorial portrait of our work in Algiers — our clients here, the economic fabric we serve, and the specificity of operating from the capital of an economy that is digitizing quickly under the pressure of national digitalization plans, regional competition from Morocco, Tunisia and the Gulf, and the rising scrutiny of central-bank cybersecurity frameworks.",
    ],

    sections: [
      {
        heading: 'The country\'s digital decision center',
        body: [
          "Algiers concentrates four economic fabrics that we serve in parallel. **First: the banking and financial sector,** with executive offices in Hydra, Ben Aknoun and Algiers Centre. The major Algerian banks — BNA, BEA, BADR, CPA, BDL, AGB, Société Générale Algérie, BNP Paribas El Djazair, Salam Bank — pilot their core banking modernization, corporate cash management, and central-bank compliance programs from here. **Second: telecom operators and their digital subsidiaries** (Algérie Télécom, Mobilis, Djezzy, Ooredoo, Algérie Poste, BaridiMob), where IT programs are permanent and large-scale.",
          "**Third: the ministries, central administrations and major public enterprises** (Sonatrach, Sonelgaz, NAFTAL, AIR ALGÉRIE) — digitization programs, citizen e-services, sector ERPs, information system security. **Fourth: the Algiers startup and scale-up ecosystem** — Yassir, TemTem, Khdma, Yalidine, ZR Express, Numidia, and the new wave of fintech, deeptech and B2B SaaS based primarily in Algiers Centre, Bab Ezzouar and Sidi Yahia.",
          "These four fabrics share one characteristic: they face a regulatory and competitive acceleration that makes the technological status quo impossible. The old proprietary ERPs, the old foreign vendor stacks, the old paper processes — none of them survive 2030. The IT executives know this. The execution is what plays out now in Algiers.",
        ],
      },
      {
        heading: 'Our Algiers engagements',
        body: [
          "Our work in Algiers falls into five categories. **Banking and fintech platforms:** core banking modernization, corporate cash management, interbank integrations, mobile banking applications, biometric KYC solutions, AML/CFT pipelines. **Public-sector systems:** citizen portals, ministerial e-services, dematerialization of administrative procedures, audit and transparency platforms, security infrastructure.",
          "**ERP and enterprise information systems** for major Algiers groups — production, commercial management, multi-entity accounting, Algerian tax compliance, payment integrations on the local rails, regulatory integrations with the tax authority and the commercial registry. **Mobile applications** for telecom operators and scale-ups: native iOS/Android architecture, Flutter for MVPs, large-scale backend infrastructure. **Technology consulting** for IT directors piloting transformation programs: architecture, stack choice, team sizing, technical due diligence on foreign vendors.",
          "None of these engagements are packaged. Each starts with an on-site discovery phase in the client's offices in Hydra, Ben Aknoun, El Biar, Bab Ezzouar or elsewhere in the capital. Our team comes on-site. We read the existing documents, talk to the operators, understand the reality before proposing an architecture.",
        ],
      },
      {
        heading: 'The advantage of operating from Algiers',
        body: [
          "Our headquarters is in Algiers. This geographic proximity to the Algerian decision center materially changes the nature of our work. For a client in Hydra or Bab Ezzouar, an on-site meeting is scheduled within two hours, not two weeks. A technical discovery starts the same day as the commercial call. A critical architecture review happens in person around a whiteboard, not in a forty-five-minute Zoom.",
          "This proximity is also an advantage for our international clients executing projects in Algeria. A European bank looking to extend services to Algiers, a SaaS publisher integrating local payment rails, an investor doing technical due diligence on an Algerian scale-up — all benefit from having an engineering partner that knows the local context as well as the international technical context.",
          "We speak French, Arabic and English fluently. We understand Algerian taxation, local labor law, commercial registry requirements, customs constraints, banking procedures. We invoice in dinars from Algiers, in euros from our partner entities in Europe depending on what the contract requires.",
        ],
      },
      {
        heading: 'The Algiers engineering ecosystem',
        body: [
          "Algiers trains the majority of Algeria's computer engineers. ESI Alger (École Supérieure d'Informatique), USTHB, ENSI, ENSTP, University of Algiers 1 — these institutions produce thousands of graduates each year in computer science, software engineering, cybersecurity, data science and AI. Our team is largely made up of former students and PhDs from these schools, complemented by diaspora profiles returning to the country after years in Paris, London or the Gulf.",
          "This ecosystem is also where our clients recruit. When an Algiers client asks us to help structure an internal IT team, we have a clear view of the Algiers job market — skill levels, salary ranges, available profiles, school quality. This view is rarely available from a foreign consultancy.",
        ],
      },
      {
        heading: 'From Algiers outward',
        body: [
          "Several of the platforms we operate today for clients in MENA, France and Spain started as projects for Algiers clients. A fleet management system built for an Algiers delivery operator now serves similar clients in Morocco and Tunisia. A biometric KYC module designed for an Algerian bank was redeployed at a client in Mauritania and another in Senegal. An e-services platform developed for an Algerian administration inspired the architecture of an equivalent project in the Gulf.",
          "This concerns you directly if you operate in Algiers: you work with a team that knows your market, has already solved several of the problems you face, and can save you from common errors — the kind that cost six months of delay and several hundred thousand dinars.",
        ],
      },
    ],

    related: {
      eyebrow: 'Going deeper',
      services: {
        label: 'Disciplines in Algiers',
        items: [
          { key: 'ai',                   name: 'Artificial Intelligence' },
          { key: 'software-engineering', name: 'Software Engineering' },
          { key: 'mobile',               name: 'Mobile Engineering' },
          { key: 'cloud',                name: 'Cloud & DevOps' },
          { key: 'cybersecurity',        name: 'Cybersecurity' },
          { key: 'consulting',           name: 'Technology Consulting' },
        ],
      },
      insights: {
        label: 'Related insights',
        items: [
          { key: 'banking',     name: 'Banking software modernization — what banks build now' },
          { key: 'government',  name: 'Government digitization — sovereign public services' },
          { key: 'erp',         name: 'Custom ERP for Algerian SMEs — beyond Odoo' },
        ],
      },
    },

    cta: {
      eyebrow: 'Talk to an engineer based in Algiers',
      title:   'Run an organization in Algiers? Describe your situation. We will be on-site this week.',
      button:  'Book a 30-minute call',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  ar: {
    eyebrow:     'الجزائر العاصمة',
    publishedAt: 'محدّث مايو 2026',
    title:       'سيملوب في الجزائر العاصمة — هندسة للعاصمة التي تقرر للبلد.',
    dek:         'مقرّنا في الجزائر العاصمة، وأغلب عملائنا الجزائريين يقعون هنا أو لديهم مراكز قرارهم هنا. البنوك، الوزارات، شركات الاتصالات، سوناطراك وفروعها، الشركات الناشئة — هنا يدور معظم الاقتصاد الرقمي الجزائري.',
    meta: {
      one:   'الجزائر الوسطى · حيدرة · باب الزوار',
      two:   '3.5 مليون نسمة',
      three: 'مقر سيملوب',
    },

    intro: [
      'الجزائر العاصمة ليست مدينة كأي مدينة أخرى في الجزائر. هي العاصمة السياسية والاقتصادية والمالية والثقافية لبلد يضم 45 مليون نسمة. الوزارات، بنك الجزائر، مقرّات سوناطراك وسونلغاز، الإدارات العامة للبنوك العمومية والخاصة، شركات الاتصالات والشركات الناشئة الأعلى تمويلاً في البلد — كلها تعمل من هنا. عندما يُقرَّر برنامج تحوّل رقمي وطني، يُقرَّر في الجزائر العاصمة.',
      'هذه الصفحة ليست عرضاً تجارياً. هي صورة تحريرية لعملنا في الجزائر العاصمة — عملاؤنا هنا، النسيج الاقتصادي الذي نخدمه، وخصوصية العمل من عاصمة اقتصاد يتجه نحو الرقمنة بسرعة تحت ضغط رؤية 2030 والخطة الوطنية للرقمنة والمنافسة الإقليمية من المغرب وتونس والخليج.',
    ],

    sections: [
      {
        heading: 'مركز القرار الرقمي للبلد',
        body: [
          'تتركّز في الجزائر العاصمة أربعة أنسجة اقتصادية نخدمها بالتوازي. **الأول: القطاع البنكي والمالي**، الذي تقع إدارته العامة في حيدرة وبن عكنون والجزائر الوسطى. البنوك الجزائرية الكبرى — BNA و BEA و BADR و CPA و BDL و AGB و Société Générale Algérie و BNP Paribas El Djazair وبنك السلام — تقود من هنا برامج تحديث النظام الأساسي وإدارة النقد المؤسسي والامتثال التنظيمي. **الثاني: شركات الاتصالات وفروعها الرقمية** (اتصالات الجزائر، موبيليس، جازي، أوريدو، بريد الجزائر، BaridiMob)، حيث برامج تكنولوجيا المعلومات دائمة وعلى نطاق واسع.',
          '**الثالث: الوزارات والإدارات المركزية والمؤسسات العمومية الكبرى** (سوناطراك، سونلغاز، نفطال، الجوية الجزائرية) — برامج رقمنة، خدمات إلكترونية للمواطنين، أنظمة ERP قطاعية، أمن نظم المعلومات. **الرابع: نظام الشركات الناشئة في العاصمة** — Yassir و TemTem و Khdma و Yalidine و ZR Express و Numidia، والموجة الجديدة من شركات التكنولوجيا المالية والتكنولوجيا العميقة و SaaS B2B المتمركزة بشكل أساسي في الجزائر الوسطى وباب الزوار وسيدي يحيى.',
          'تتشارك هذه الأنسجة الأربعة خاصية واحدة: تواجه تسارعاً تنظيمياً وتنافسياً يجعل الوضع الراهن التكنولوجي مستحيلاً. أنظمة ERP المملوكة القديمة، مكدسات المورّدين الأجانب القديمة، إجراءات الورق القديمة — كل هذا لا ينجو من 2030. مدراء IT يعرفون ذلك. التنفيذ هو ما يحدث الآن في الجزائر العاصمة.',
        ],
      },
      {
        heading: 'مهامنا في الجزائر العاصمة',
        body: [
          'تنقسم مهامنا في الجزائر العاصمة إلى خمس فئات. **منصات بنكية وتكنولوجيا مالية**: تحديث النظام الأساسي للبنك، منصات إدارة النقد المؤسسي، تكاملات بين البنوك، تطبيقات بنكية للجوال، حلول KYC بيومترية، خطوط أنابيب AML/CFT. **أنظمة للقطاع العام**: بوابات مواطنين، خدمات إلكترونية وزارية، رقمنة الإجراءات الإدارية، منصات تدقيق وشفافية، بنية أمنية.',
          '**ERP وأنظمة المعلومات المؤسسية** للمجموعات الكبرى في الجزائر العاصمة — الإنتاج، الإدارة التجارية، المحاسبة متعددة الكيانات، الامتثال الضريبي الجزائري، تكاملات الدفع المحلية، تكاملات تنظيمية مع المديرية العامة للضرائب والسجل التجاري. **تطبيقات الجوال** لشركات الاتصالات والشركات الناشئة: معمارية iOS/Android أصلية، Flutter للنماذج الأولية، بنية تحتية خلفية على نطاق واسع. **الاستشارات التقنية** لمدراء IT الذين يقودون برامج التحوّل: المعمارية، اختيار المكدس، تحديد حجم الفرق، التدقيق التقني للمورّدين الأجانب.',
          'لا توجد منها مهمة معلّبة. كل واحدة تبدأ بمرحلة اكتشاف ميدانية في مكاتب العميل في حيدرة أو بن عكنون أو البيار أو باب الزوار أو في مكان آخر بالعاصمة. فريقنا يأتي إلى الموقع. نقرأ الوثائق الموجودة، نتحدث إلى المشغّلين، نفهم الواقع قبل اقتراح المعمارية.',
        ],
      },
      {
        heading: 'ميزة العمل من الجزائر العاصمة',
        body: [
          'مقرّنا في الجزائر العاصمة. هذا القرب الجغرافي من مركز القرار الجزائري يغيّر بشكل ملموس طبيعة عملنا. لعميل في حيدرة أو باب الزوار، يُحدَّد اجتماع موقعي خلال ساعتين، وليس أسبوعين. اكتشاف تقني يبدأ في نفس يوم المكالمة التجارية. مراجعة معمارية حرجة تحدث وجهاً لوجه حول لوح أبيض، وليس في زووم خمسة وأربعين دقيقة.',
          'هذا القرب ميزة أيضاً لعملائنا الدوليين الذين ينفّذون مشاريع في الجزائر. بنك أوروبي يريد توسيع خدماته إلى الجزائر العاصمة، ناشر SaaS يريد تكامل قضبان الدفع المحلية، مستثمر يريد تدقيقاً تقنياً على شركة ناشئة جزائرية — كلهم يستفيدون من شريك هندسي يعرف السياق المحلي بقدر السياق التقني الدولي.',
          'نتحدث الفرنسية والعربية والإنجليزية بسلاسة. نفهم النظام الضريبي الجزائري وقانون العمل المحلي ومتطلبات السجل التجاري والقيود الجمركية والإجراءات البنكية. نُصدر الفواتير بالدينار من الجزائر العاصمة، وباليورو من كياناتنا الشريكة في أوروبا حسب ما يتطلبه العقد.',
        ],
      },
      {
        heading: 'النظام الهندسي في الجزائر العاصمة',
        body: [
          'تدرّب الجزائر العاصمة معظم مهندسي الإعلام الآلي في البلد. المدرسة العليا للإعلام الآلي (ESI الجزائر)، USTHB، ENSI، ENSTP، جامعة الجزائر 1 — هذه المؤسسات تنتج آلاف الخريجين سنوياً في علوم الكمبيوتر وهندسة البرمجيات والأمن السيبراني وعلوم البيانات والذكاء الاصطناعي. فريقنا في معظمه مكوّن من خريجي وحاملي دكتوراه من هذه المدارس، مكمّلين بأبناء المهجر العائدين بعد سنوات في باريس أو لندن أو الخليج.',
          'هذا النظام هو أيضاً الذي يوظّف منه عملاؤنا. عندما يطلب منا عميل في الجزائر العاصمة المساعدة في هيكلة فريق IT داخلي، لدينا رؤية واضحة لسوق العمل في الجزائر العاصمة — مستويات المهارات، نطاقات الرواتب، الملفات المتاحة، جودة المدارس. هذه الرؤية نادراً ما تكون متاحة من شركة استشارات أجنبية.',
        ],
      },
      {
        heading: 'من الجزائر العاصمة إلى البلد والمنطقة',
        body: [
          'العديد من المنصات التي نشغّلها اليوم لعملاء في المنطقة وفرنسا وإسبانيا بدأت كمشاريع لعملاء في الجزائر العاصمة. نظام إدارة أسطول بُني لمشغّل توصيل في الجزائر يخدم الآن عملاء مماثلين في المغرب وتونس. وحدة KYC بيومترية صُمِّمت لبنك جزائري أُعيد نشرها في موريتانيا والسنغال. منصة خدمات إلكترونية طُوِّرت لإدارة جزائرية ألهمت معمارية مشروع مماثل في الخليج.',
          'هذا يهمك مباشرة إذا كنت تعمل في الجزائر العاصمة: تعمل مع فريق يعرف سوقك، حلّ بالفعل عدة مشاكل تواجهها، ويمكنه تجنيبك الأخطاء الشائعة — تلك التي تكلّف ستة أشهر تأخير ومئات الآلاف من الدنانير.',
        ],
      },
    ],

    related: {
      eyebrow: 'لقراءة المزيد',
      services: {
        label: 'التخصصات في الجزائر العاصمة',
        items: [
          { key: 'ai',                   name: 'الذكاء الاصطناعي' },
          { key: 'software-engineering', name: 'هندسة البرمجيات' },
          { key: 'mobile',               name: 'هندسة الجوال' },
          { key: 'cloud',                name: 'السحابة و DevOps' },
          { key: 'cybersecurity',        name: 'الأمن السيبراني' },
          { key: 'consulting',           name: 'الاستشارات التقنية' },
        ],
      },
      insights: {
        label: 'دراسات ذات صلة',
        items: [
          { key: 'banking',     name: 'تحديث برمجيات البنوك — ما تبنيه البنوك الآن' },
          { key: 'government',  name: 'الرقمنة الحكومية — خدمات عامة سيادية' },
          { key: 'erp',         name: 'ERP مخصص للشركات الجزائرية الصغيرة والمتوسطة — ما بعد Odoo' },
        ],
      },
    },

    cta: {
      eyebrow: 'تحدث مع مهندس مقرّه الجزائر العاصمة',
      title:   'هل تدير منظمة في الجزائر العاصمة؟ صف وضعك. سنكون في الموقع هذا الأسبوع.',
      button:  'احجز مكالمة 30 دقيقة',
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export default function LocationAlgerPage() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.fr;

  const placeLd = {
    '@context':  'https://schema.org',
    '@type':     'LocalBusiness',
    name:        'Symloop — Algiers headquarters',
    description: c.dek,
    url:         'https://www.symloop.com/locations/alger/',
    image:       'https://www.symloop.com/sym-logo.png',
    telephone:   '+213549575512',
    address: {
      '@type':         'PostalAddress',
      streetAddress:   'Algiers, Algeria',
      addressLocality: 'Algiers',
      addressRegion:   'Algiers',
      postalCode:      '16000',
      addressCountry:  'DZ',
    },
    geo: {
      '@type':   'GeoCoordinates',
      latitude:  36.7538,
      longitude: 3.0588,
    },
    areaServed: [
      { '@type': 'City',     name: 'Algiers'   },
      { '@type': 'Country',  name: 'Algeria'   },
      { '@type': 'AdministrativeArea', name: 'MENA' },
    ],
    parentOrganization: {
      '@type': 'Organization',
      name:    'Symloop Technology',
      url:     'https://www.symloop.com',
    },
  };

  const breadcrumbs = [
    { name: 'Home',      url: 'https://www.symloop.com/' },
    { name: 'Locations', url: 'https://www.symloop.com/locations/' },
    { name: 'Algiers',   url: 'https://www.symloop.com/locations/alger/' },
  ];

  return (
    <>
      <SEO
        title="Software Engineering in Algiers — Symloop HQ"
        description="Editorial portrait of Symloop's work in Algiers — banks, ministries, telecoms, scale-ups. The capital that decides for Algeria's digital economy."
        keywords="agence developpement web alger, ingenierie logicielle alger, software engineering algiers, banking software algiers, fintech alger, e-government algiers, telecom software alger, sonatrach IT, custom erp alger, ai algiers, mobile app development algiers, developpeur alger, agence web alger, agence digitale alger"
        type="website"
        structuredData={placeLd}
        breadcrumbs={breadcrumbs}
      />

      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">

        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-20 lg:pb-28">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.eyebrow}</span>
                <span className="h-px w-12 bg-white/20" />
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">{c.publishedAt}</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05]">
                {c.title}
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-8 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">
                {c.dek}
              </motion.p>

              <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 pt-8 border-t border-white/[0.08]">
                <span>{c.meta.one}</span>
                <span>{c.meta.two}</span>
                <span>{c.meta.three}</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="space-y-6 mb-16">
            {c.intro.map((p, i) => (
              <motion.p key={i} variants={fadeUp} className="text-lg lg:text-xl text-white/75 leading-relaxed font-light">
                {renderRich(p)}
              </motion.p>
            ))}
          </motion.div>

          {c.sections.map((s, idx) => (
            <motion.section key={idx} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-16 lg:mb-20">
              <motion.div variants={fadeUp} className="flex items-baseline gap-4 mb-8">
                <span className="font-mono text-[11px] tracking-[0.15em] text-white/30">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-white leading-tight">
                  {s.heading}
                </h2>
              </motion.div>
              <div className="space-y-5 ps-0 lg:ps-10">
                {s.body.map((p, i) => (
                  <motion.p key={i} variants={fadeUp} className="text-base lg:text-lg text-white/65 leading-relaxed">
                    {renderRich(p)}
                  </motion.p>
                ))}
              </div>
            </motion.section>
          ))}
        </article>

        <section className="border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
            <div className="flex items-center gap-3 mb-14">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.related.eyebrow}</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-7">
                <h3 className="text-2xl lg:text-3xl font-light tracking-tight mb-10">{c.related.services.label}</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]">
                  {c.related.services.items.map((s, i) => (
                    <li key={s.key} className="bg-black">
                      <Link href={`/locations/alger/${s.key}/`} className="group block h-full p-6 lg:p-7 transition-colors hover:bg-white/[0.025]">
                        <div className="font-mono text-[11px] tracking-[0.15em] text-white/30 mb-6">{String(i + 1).padStart(2, '0')}</div>
                        <h4 className="text-lg font-light text-white leading-snug tracking-tight mb-6 min-h-[3rem]">{s.name}</h4>
                        <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5">
                <h3 className="text-2xl lg:text-3xl font-light tracking-tight mb-10">{c.related.insights.label}</h3>
                <ul className="space-y-px bg-white/[0.06] border border-white/[0.06]">
                  {c.related.insights.items.map((it) => (
                    <li key={it.key} className="bg-black">
                      <Link href={`/insights/${it.key}/`} className="group block p-6 lg:p-7 transition-colors hover:bg-white/[0.025]">
                        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 group-hover:text-white/70 transition-colors mb-3">{c.related.insights.label}</div>
                        <h4 className="text-base lg:text-lg font-light text-white leading-snug tracking-tight">{it.name}</h4>
                        <ArrowUpRight className="mt-5 w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="max-w-3xl">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.cta.eyebrow}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1]">
                {c.cta.title}
              </motion.h2>
              <motion.div variants={fadeUp} className="mt-10">
                <Link href="/contact/" className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-white border-b border-white/30 hover:border-white pb-2 transition-colors">
                  <span>{c.cta.button}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

function renderRich(text) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) {
      return (
        <span key={i} className="font-normal text-white border-b border-white/30">
          {p.slice(2, -2)}
        </span>
      );
    }
    return <span key={i}>{p}</span>;
  });
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
