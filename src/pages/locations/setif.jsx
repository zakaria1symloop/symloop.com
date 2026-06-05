// ============================================================================
// SYMLOOP — /locations/setif/
//
// Editorial location page targeting "[service] sétif" and "agence dev setif"
// queries WITHOUT looking like a generic dev-shop landing page.
//
// Positioning angle: "the international engineering firm that delivers the
// same rigor for a Sétif SMB as for a Saudi enterprise". Sétif is not a
// service tier — it is a story about the city's industrial fabric and
// Symloop's commitment to it.
//
// Same visual DNA as the /insights/* pages: hairline grid, font-light,
// mono numerals, monochrome editorial, no boxes. No service grid, no price
// table — those would contradict the editorial positioning.
//
// This file is a STATIC page that overrides the legacy dynamic
// /locations/[city].jsx route for the "setif" slug. The other 10 cities
// continue to serve from the dynamic page until we promote them too.
// ============================================================================

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import SEO from '../../components/SEO';

// ────────────────────────────────────────────────────────────────────────────
const CONTENT = {
  fr: {
    eyebrow:     'Sétif · Hauts plateaux',
    publishedAt: 'Mis à jour Avril 2026',
    title:       "Symloop à Sétif — l'ingénierie pour le tissu industriel des hauts plateaux.",
    dek:         "Le même atelier d'ingénierie qui livre pour des entreprises en Europe et dans le Golfe livre aussi pour les PME industrielles de Sétif et de la région. Avec exactement la même rigueur.",
    meta: {
      one:   'Sétif · Bordj Bou Arréridj · M\'sila',
      two:   'Hauts plateaux',
      three: '3 h depuis Alger',
    },

    intro: [
      "Sétif est rarement en couverture des magazines tech algériens. Et pourtant, c'est l'une des régions où nous livrons le plus en ingénierie logicielle industrielle. La raison est simple : le tissu économique de Sétif et de Bordj Bou Arréridj est majoritairement composé de groupes industriels familiaux de taille moyenne — exactement le profil de client qui a le plus à gagner d'un système d'information sur mesure et le plus à perdre d'un Odoo mal installé.",
      "Cette page n'est pas un argumentaire commercial. C'est un portrait éditorial de notre travail à Sétif et dans la région des hauts plateaux, de ce que nous y livrons, et de comment nous y travaillons. Si vous dirigez une entreprise dans la région et que vous cherchez quelqu'un qui comprend votre contexte autant que votre pile technique, lisez la suite.",
    ],

    sections: [
      {
        heading: "La réalité industrielle de Sétif",
        body: [
          "Le tissu économique de Sétif et de la zone Sétif–Bordj–M'sila est dominé par cinq secteurs : l'agroalimentaire (laiteries, conserveries, semoulerie), le textile et la confection, la sous-traitance automobile, les matériaux de construction, et la grande distribution régionale. Tous partagent trois caractéristiques : ils sont familiaux, ils opèrent sur des marges serrées, et ils gèrent leur opération sur des outils qui n'ont pas évolué depuis dix ans.",
          "C'est précisément le profil pour lequel un système d'information sur mesure change le plus de choses. Une laiterie de taille moyenne avec 80 employés et 500 références produits perd entre 8 % et 15 % de son chiffre d'affaires annuel sur les ruptures de stock, les erreurs de facturation et les écarts d'inventaire — pertes qui disparaissent avec un ERP correctement conçu. Le calcul est aussi vrai pour un confectionneur, un sous-traitant auto, un grossiste.",
        ],
      },
      {
        heading: "Ce que nous livrons dans la région",
        body: [
          "Nos engagements dans la région Sétif–Bordj couvrent quatre catégories. Premièrement, des ERP sur mesure pour des groupes industriels familiaux : gestion de production, traçabilité, comptabilité multi-entités, fiscalité algérienne. Deuxièmement, des systèmes IoT pour les chaînes de production : capteurs sur les machines, monitoring temps réel, maintenance prédictive sur les équipements critiques. Troisièmement, des plateformes web et e-commerce pour les distributeurs régionaux : intégrations CIB, Edahabia, Yalidine et ZR Express. Quatrièmement, du conseil technologique pour les entreprises qui veulent moderniser sans tout casser.",
          "Aucune de ces missions n'est packagée. Chaque livraison commence par une semaine de discovery sur place : nous venons à l'usine, nous parlons aux opérateurs, nous lisons les documents existants, nous comprenons la réalité avant de proposer une architecture.",
        ],
      },
      {
        heading: "La même rigueur pour la PME locale et pour le client international",
        body: [
          "Notre client le plus visible cette année est une administration publique en Algérie. Notre mission la plus exigeante techniquement est un système de vision par ordinateur pour une cimenterie en MENA. Mais sur le même calendrier, nous livrons un ERP pour un confectionneur familial de Sétif et un système de gestion de stock pour un grossiste de Bordj Bou Arréridj.",
          "C'est volontaire. Nous refusons l'idée qu'une PME de Sétif mérite un système moins bien conçu qu'un client international, simplement parce que le ticket est plus petit. Le code est revu par les mêmes ingénieurs seniors. L'architecture est validée par le même chef de projet. Les tests automatisés, la CI/CD, l'observabilité, la documentation — tout ce qui définit notre méthode est appliqué de la même manière.",
          "Ce que nous adaptons, c'est le périmètre. Pas la rigueur. Une PME familiale n'a pas besoin d'une plateforme multi-tenant à 200 millions de dinars. Elle a besoin d'un système qui résout ses cinq problèmes critiques, qui tient en production pendant dix ans, et qu'elle peut maintenir sans dépendre de personne. C'est ce que nous livrons.",
        ],
      },
      {
        heading: "Comment nous travaillons localement",
        body: [
          "Sétif est à trois heures de route de notre siège à Alger. Pour chaque mission dans la région, nous prévoyons des visites sur site régulières — généralement une fois toutes les deux semaines pendant la phase de discovery, puis une fois par mois en phase de livraison. Le travail à distance fonctionne pour le code ; il ne remplace jamais une journée passée à l'usine avec les opérateurs.",
          "Nous parlons français, arabe et l'anglais des spécifications techniques. Nous comprenons la fiscalité algérienne, le code du travail local, les exigences CNRC, les contraintes douanières et les modes de paiement (CIB, Edahabia, virements interbancaires). Nous facturons en dinars depuis Alger, avec des factures conformes à la réglementation algérienne.",
          "Nos contrats incluent un cycle de support post-livraison de trois mois minimum, sur place ou à distance selon le besoin. Pour les missions industrielles critiques, nous proposons un retainer mensuel avec engagement de réponse sous 24 heures.",
        ],
      },
      {
        heading: "De Sétif vers le reste",
        body: [
          "Plusieurs des projets que nous avons livrés à Sétif et dans la région sont devenus le socle de plateformes que nous déployons maintenant pour des clients en MENA et en Europe. Un système de traçabilité conçu pour une laiterie sétifienne est aujourd'hui la base d'un produit industriel que nous proposons à des clients en France et au Maroc. Un module de gestion de production développé pour un sous-traitant auto local sert maintenant trois autres clients dans la région.",
          "Cela vous concerne directement : vous travaillez avec une équipe qui a vu d'autres problèmes similaires au vôtre, qui a déjà testé plusieurs approches, et qui peut vous éviter les erreurs que d'autres ont déjà commises. C'est l'inverse exact d'un freelance qui découvre votre métier en même temps que vous.",
        ],
      },
    ],

    related: {
      eyebrow: 'Pour aller plus loin',
      services: {
        label: 'Disciplines',
        items: [
          { key: 'software-engineering', name: 'Ingénierie logicielle' },
          { key: 'iot',                  name: 'IoT et systèmes industriels' },
          { key: 'consulting',           name: 'Conseil technologique' },
        ],
      },
      insights: {
        label: 'Études',
        items: [
          { key: 'erp',  name: 'ERP sur mesure pour PME algériennes — au-delà d\'Odoo' },
          { key: 'cost', name: 'Le vrai coût du développement logiciel en Algérie' },
        ],
      },
    },

    cta: {
      eyebrow: 'Parlez à un ingénieur basé à Alger',
      title:   "Vous dirigez une entreprise à Sétif ou dans la région ? Décrivez votre situation en cinq minutes.",
      button:  'Réserver un appel de 30 minutes',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  en: {
    eyebrow:     'Sétif · High plains',
    publishedAt: 'Updated April 2026',
    title:       'Symloop in Sétif — engineering for the high plains industrial fabric.',
    dek:         'The same engineering workshop that delivers for clients in Europe and the Gulf also delivers for industrial SMEs in Sétif and the surrounding region. With exactly the same rigor.',
    meta: {
      one:   "Sétif · Bordj Bou Arréridj · M'sila",
      two:   'High plains',
      three: '3 h from Algiers',
    },

    intro: [
      "Sétif rarely makes the cover of Algerian tech magazines. And yet it is one of the regions where we deliver the most industrial software engineering. The reason is simple: the economic fabric of Sétif and Bordj Bou Arréridj is dominated by mid-sized family-owned industrial groups — exactly the customer profile that has the most to gain from a custom information system and the most to lose from a poorly-installed Odoo.",
      "This page is not a sales pitch. It is an editorial portrait of our work in Sétif and the high plains region, of what we deliver here, and of how we work. If you run a business in the region and you are looking for someone who understands your context as well as your tech stack, read on.",
    ],

    sections: [
      {
        heading: 'The Sétif industrial reality',
        body: [
          "The economic fabric of Sétif and the Sétif–Bordj–M'sila zone is dominated by five sectors: food processing (dairies, canneries, semolina mills), textile and garment manufacturing, automotive subcontracting, construction materials, and regional distribution. All share three characteristics: they are family-owned, they operate on tight margins, and they manage their operations on tools that have not evolved in ten years.",
          'This is exactly the profile for which a custom information system changes the most. A mid-sized dairy with 80 employees and 500 product references loses between 8% and 15% of its annual revenue to stock-outs, billing errors and inventory variances — losses that disappear with a properly designed ERP. The math is the same for a garment maker, an auto subcontractor, a wholesaler.',
        ],
      },
      {
        heading: 'What we deliver in the region',
        body: [
          'Our engagements in the Sétif–Bordj region cover four categories. First, custom ERPs for family-owned industrial groups: production management, traceability, multi-entity accounting, Algerian tax and customs. Second, IoT systems for production lines: sensors on machines, real-time monitoring, predictive maintenance on critical equipment. Third, web and e-commerce platforms for regional distributors: CIB, Edahabia, Yalidine and ZR Express integrations. Fourth, technology consulting for businesses that want to modernize without breaking what works.',
          'None of these are packaged. Every engagement starts with a week of on-site discovery: we visit the factory, talk to the operators, read the existing documents, understand the reality before proposing an architecture.',
        ],
      },
      {
        heading: 'The same rigor for the local SME and the international client',
        body: [
          'Our most visible client this year is a public administration in Algeria. Our most technically demanding engagement is a computer vision system for a cement plant in MENA. But on the same calendar, we are delivering an ERP for a family-owned garment maker in Sétif and a stock management system for a wholesaler in Bordj Bou Arréridj.',
          'This is intentional. We reject the idea that a Sétif SME deserves a less-well-designed system than an international client, simply because the ticket is smaller. The code is reviewed by the same senior engineers. The architecture is validated by the same project lead. Automated tests, CI/CD, observability, documentation — everything that defines our method is applied identically.',
          'What we adapt is scope, not rigor. A family SME does not need a 200-million-dinar multi-tenant platform. It needs a system that solves its five critical problems, that survives in production for ten years, and that it can maintain without depending on anyone. That is what we deliver.',
        ],
      },
      {
        heading: 'How we work locally',
        body: [
          'Sétif is three hours by road from our headquarters in Algiers. For every engagement in the region, we plan regular on-site visits — usually once every two weeks during discovery, then once a month during delivery. Remote work is fine for code; it never replaces a day spent at the factory with the operators.',
          'We speak French, Arabic, and the English of technical specifications. We understand Algerian taxation, local labor law, CNRC requirements, customs constraints and payment methods (CIB, Edahabia, interbank transfers). We invoice in dinars from Algiers, with bills that are compliant with Algerian regulation.',
          'Our contracts include a minimum three-month post-launch support cycle, on-site or remote depending on need. For critical industrial engagements, we offer a monthly retainer with a 24-hour response commitment.',
        ],
      },
      {
        heading: 'From Sétif outward',
        body: [
          'Several projects we delivered in Sétif and the region have become the foundation of platforms we now deploy for clients in MENA and Europe. A traceability system designed for a Sétif dairy is now the base of an industrial product we offer to clients in France and Morocco. A production management module developed for a local auto subcontractor now serves three other clients in the region.',
          'This concerns you directly: you work with a team that has seen other problems similar to yours, that has already tested several approaches, and that can spare you mistakes others have already made. It is the exact opposite of a freelancer discovering your business at the same time as you.',
        ],
      },
    ],

    related: {
      eyebrow: 'Going deeper',
      services: {
        label: 'Disciplines',
        items: [
          { key: 'software-engineering', name: 'Software Engineering' },
          { key: 'iot',                  name: 'IoT & Industrial Systems' },
          { key: 'consulting',           name: 'Technology Consulting' },
        ],
      },
      insights: {
        label: 'Insights',
        items: [
          { key: 'erp',  name: 'Custom ERP for Algerian SMEs — beyond Odoo' },
          { key: 'cost', name: 'The real cost of building software in Algeria' },
        ],
      },
    },

    cta: {
      eyebrow: 'Talk to an engineer based in Algiers',
      title:   'Run a business in Sétif or the surrounding region? Describe your situation in five minutes.',
      button:  'Book a 30-minute call',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  ar: {
    eyebrow:     'سطيف · الهضاب العليا',
    publishedAt: 'محدّث أبريل 2026',
    title:       'سيملوب في سطيف — هندسة لنسيج صناعي في الهضاب العليا.',
    dek:         'نفس ورشة الهندسة التي تسلّم لعملاء في أوروبا والخليج تسلّم أيضاً لشركات صناعية صغيرة ومتوسطة في سطيف والمنطقة المحيطة. بنفس الصرامة تماماً.',
    meta: {
      one:   'سطيف · برج بوعريريج · المسيلة',
      two:   'الهضاب العليا',
      three: '3 ساعات من الجزائر العاصمة',
    },

    intro: [
      'سطيف نادراً ما تكون على غلاف المجلات التقنية الجزائرية. ومع ذلك، فهي إحدى المناطق التي نسلّم فيها أكبر قدر من هندسة البرمجيات الصناعية. السبب بسيط: النسيج الاقتصادي لسطيف وبرج بوعريريج تهيمن عليه مجموعات صناعية عائلية متوسطة الحجم — وهذه بالضبط هي الفئة من العملاء التي لديها الأكثر لتربحه من نظام معلومات مخصص والأكثر لتخسره من تطبيق Odoo سيئ التركيب.',
      'هذه الصفحة ليست عرضاً تجارياً. إنها صورة تحريرية لعملنا في سطيف ومنطقة الهضاب العليا، لما نسلّمه هنا، ولكيف نعمل. إذا كنت تدير شركة في المنطقة وتبحث عن شخص يفهم سياقك بقدر فهمه لمكدّسك التقني، تابع القراءة.',
    ],

    sections: [
      {
        heading: 'الواقع الصناعي لسطيف',
        body: [
          'النسيج الاقتصادي لسطيف ومنطقة سطيف–برج–المسيلة تهيمن عليه خمسة قطاعات: الصناعات الغذائية (مصانع الألبان، المعلبات، السميد)، النسيج والملابس، المقاولة من الباطن للسيارات، مواد البناء، والتوزيع الإقليمي. جميعها تشترك في ثلاث خصائص: عائلية، تعمل بهوامش ضيقة، وتدير عملياتها بأدوات لم تتطور منذ عشر سنوات.',
          'هذا بالضبط هو الملف الذي يُحدث له نظام المعلومات المخصص أكبر فرق. مصنع ألبان متوسط الحجم بـ 80 موظفاً و 500 مرجع منتج يفقد بين 8% و 15% من إيراداته السنوية على نقص المخزون وأخطاء الفوترة وفروقات الجرد — خسائر تختفي مع ERP مصمم بشكل صحيح.',
        ],
      },
      {
        heading: 'ما الذي نسلّمه في المنطقة',
        body: [
          'مهامنا في منطقة سطيف–برج تغطي أربع فئات. أولاً، أنظمة ERP مخصصة لمجموعات صناعية عائلية: إدارة الإنتاج، التتبع، المحاسبة متعددة الكيانات، الضرائب الجزائرية. ثانياً، أنظمة IoT لخطوط الإنتاج: مستشعرات على الآلات، مراقبة في الوقت الفعلي، صيانة تنبؤية على المعدات الحرجة. ثالثاً، منصات الويب والتجارة الإلكترونية للموزعين الإقليميين: تكاملات CIB والذهبية و Yalidine و ZR Express. رابعاً، الاستشارات التقنية للشركات التي تريد التحديث دون كسر ما يعمل.',
          'لا شيء من هذه مُحزَّم. كل مهمة تبدأ بأسبوع من الاستكشاف في الموقع: نزور المصنع، نتحدث إلى المشغلين، نقرأ الوثائق الموجودة، نفهم الواقع قبل اقتراح هندسة.',
        ],
      },
      {
        heading: 'نفس الصرامة للشركة المحلية الصغيرة وللعميل الدولي',
        body: [
          'أكثر عملائنا ظهوراً هذا العام هي إدارة عامة في الجزائر. أكثر مهامنا تطلباً تقنياً هي نظام رؤية حاسوبية لمصنع إسمنت في منطقة الشرق الأوسط وشمال أفريقيا. لكن في نفس الجدول الزمني، نسلّم ERP لمصنع ملابس عائلي في سطيف ونظام إدارة مخزون لتاجر جملة في برج بوعريريج.',
          'هذا متعمد. نرفض فكرة أن شركة سطيف الصغيرة تستحق نظاماً مصمماً بشكل أقل جودة من عميل دولي، فقط لأن السعر أصغر. تتم مراجعة الشيفرة من قبل نفس المهندسين الكبار. يتم التحقق من الهندسة من قبل نفس قائد المشروع. الاختبارات الآلية، CI/CD، المراقبة، التوثيق — كل ما يعرّف منهجنا يُطبّق بنفس الطريقة.',
          'ما نُكيّفه هو النطاق. لا الصرامة. الشركة العائلية لا تحتاج إلى منصة متعددة المستأجرين بـ 200 مليون دينار. تحتاج إلى نظام يحل مشاكلها الخمس الحرجة، يصمد في الإنتاج لمدة عشر سنوات، ويمكنها صيانته دون الاعتماد على أحد. هذا ما نسلّمه.',
        ],
      },
      {
        heading: 'كيف نعمل محلياً',
        body: [
          'سطيف على بعد ثلاث ساعات بالطريق من مقرنا في الجزائر العاصمة. لكل مهمة في المنطقة، نخطط لزيارات ميدانية منتظمة — عادةً مرة كل أسبوعين خلال الاستكشاف، ثم مرة في الشهر خلال التسليم. العمل عن بُعد جيد للشيفرة؛ لا يحل أبداً محل يوم في المصنع مع المشغلين.',
          'نتحدث الفرنسية والعربية وإنجليزية المواصفات التقنية. نفهم الضرائب الجزائرية وقانون العمل المحلي ومتطلبات CNRC والقيود الجمركية وطرق الدفع (CIB، الذهبية، التحويلات بين البنوك). نُفوتر بالدينار من الجزائر العاصمة، بفواتير تتوافق مع التنظيم الجزائري.',
          'تشمل عقودنا دورة دعم بعد الإطلاق لمدة لا تقل عن ثلاثة أشهر، في الموقع أو عن بُعد حسب الحاجة. للمهام الصناعية الحرجة، نقدم اشتراكاً شهرياً مع التزام بالاستجابة خلال 24 ساعة.',
        ],
      },
      {
        heading: 'من سطيف إلى الخارج',
        body: [
          'العديد من المشاريع التي سلّمناها في سطيف والمنطقة أصبحت أساس منصات نشرها الآن لعملاء في منطقة الشرق الأوسط وشمال أفريقيا وأوروبا. نظام تتبع مصمم لمصنع ألبان سطيفي هو اليوم أساس منتج صناعي نقدمه لعملاء في فرنسا والمغرب. وحدة إدارة الإنتاج المطورة لمقاول من الباطن للسيارات المحلي تخدم الآن ثلاثة عملاء آخرين في المنطقة.',
          'هذا يعنيك مباشرة: أنت تعمل مع فريق رأى مشاكل أخرى مشابهة لمشكلتك، اختبر بالفعل عدة مقاربات، ويمكنه أن يجنّبك الأخطاء التي ارتكبها آخرون بالفعل. هو العكس تماماً لمستقل يكتشف عملك في نفس الوقت معك.',
        ],
      },
    ],

    related: {
      eyebrow: 'للتعمق أكثر',
      services: {
        label: 'تخصصات',
        items: [
          { key: 'software-engineering', name: 'هندسة البرمجيات' },
          { key: 'iot',                  name: 'إنترنت الأشياء والأنظمة الصناعية' },
          { key: 'consulting',           name: 'الاستشارات التقنية' },
        ],
      },
      insights: {
        label: 'دراسات',
        items: [
          { key: 'erp',  name: 'تخطيط موارد المؤسسات المخصص للشركات الجزائرية — ما بعد أودو' },
          { key: 'cost', name: 'التكلفة الحقيقية لبناء البرمجيات في الجزائر' },
        ],
      },
    },

    cta: {
      eyebrow: 'تحدث مع مهندس مقره الجزائر العاصمة',
      title:   'هل تدير شركة في سطيف أو المنطقة المحيطة؟ صف وضعك في خمس دقائق.',
      button:  'احجز مكالمة 30 دقيقة',
    },
  },
};

// ────────────────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export default function LocationSetifPage() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.fr;

  // Schema.org Place + LocalBusiness for the Sétif region
  const placeLd = {
    '@context':  'https://schema.org',
    '@type':     'LocalBusiness',
    name:        'Symloop — Sétif and high plains region',
    description: c.dek,
    url:         'https://symloop.com/locations/setif/',
    image:       'https://symloop.com/images/symloop-logo.png',
    telephone:   '+213549575512',
    address: {
      '@type':         'PostalAddress',
      streetAddress:   'Algiers HQ — serving Sétif and high plains region',
      addressLocality: 'Sétif',
      addressRegion:   'Sétif',
      postalCode:      '19000',
      addressCountry:  'DZ',
    },
    geo: {
      '@type':   'GeoCoordinates',
      latitude:  36.1919,
      longitude: 5.4138,
    },
    areaServed: [
      { '@type': 'City', name: 'Sétif' },
      { '@type': 'City', name: 'Bordj Bou Arréridj' },
      { '@type': "City", name: "M'sila" },
    ],
    parentOrganization: {
      '@type': 'Organization',
      name:    'Symloop',
      url:     'https://symloop.com',
    },
  };

  const breadcrumbs = [
    { name: 'Home',      url: 'https://symloop.com/' },
    { name: 'Locations', url: 'https://symloop.com/locations/' },
    { name: 'Sétif',     url: 'https://symloop.com/locations/setif/' },
  ];

  return (
    <>
      <SEO
        title={`${c.title} | Symloop`}
        description={c.dek}
        keywords="agence developpement web setif, ingenierie logicielle setif, erp sur mesure setif, iot industriel hauts plateaux, developpeur setif bordj msila, software engineering setif algeria, custom erp setif"
        type="website"
        structuredData={placeLd}
        breadcrumbs={breadcrumbs}
      />

      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">

        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-20 lg:pb-28">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {c.eyebrow}
                </span>
                <span className="h-px w-12 bg-white/20" />
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">
                  {c.publishedAt}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05]"
              >
                {c.title}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-8 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl"
              >
                {c.dek}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 pt-8 border-t border-white/[0.08]"
              >
                <span>{c.meta.one}</span>
                <span>{c.meta.two}</span>
                <span>{c.meta.three}</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── Body ───────────────────────────────────────────────────── */}
        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

          {/* Intro */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="space-y-6 mb-16"
          >
            {c.intro.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-lg lg:text-xl text-white/75 leading-relaxed font-light"
              >
                {p}
              </motion.p>
            ))}
          </motion.div>

          {/* Sections */}
          {c.sections.map((s, idx) => (
            <motion.section
              key={idx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="mb-16 lg:mb-20"
            >
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
                  <motion.p
                    key={i}
                    variants={fadeUp}
                    className="text-base lg:text-lg text-white/65 leading-relaxed"
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
            </motion.section>
          ))}
        </article>

        {/* ── Related — services + insights ──────────────────────────── */}
        <section className="border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
            <div className="flex items-center gap-3 mb-14">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                {c.related.eyebrow}
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

              {/* Services */}
              <div className="lg:col-span-7">
                <h3 className="text-2xl lg:text-3xl font-light tracking-tight mb-10">
                  {c.related.services.label}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]">
                  {c.related.services.items.map((s, i) => (
                    <li key={s.key} className="bg-black">
                      <Link
                        href={`/services/${s.key}/`}
                        className="group block h-full p-6 lg:p-7 transition-colors hover:bg-white/[0.025]"
                      >
                        <div className="font-mono text-[11px] tracking-[0.15em] text-white/30 mb-6">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        <h4 className="text-lg font-light text-white leading-snug tracking-tight mb-6 min-h-[3rem]">
                          {s.name}
                        </h4>
                        <ArrowUpRight
                          className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                          strokeWidth={1.5}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Insights */}
              <div className="lg:col-span-5">
                <h3 className="text-2xl lg:text-3xl font-light tracking-tight mb-10">
                  {c.related.insights.label}
                </h3>
                <ul className="space-y-px bg-white/[0.06] border border-white/[0.06]">
                  {c.related.insights.items.map((it) => (
                    <li key={it.key} className="bg-black">
                      <Link
                        href={`/insights/${it.key}/`}
                        className="group block p-6 lg:p-7 transition-colors hover:bg-white/[0.025]"
                      >
                        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 group-hover:text-white/70 transition-colors mb-3">
                          {c.related.insights.label}
                        </div>
                        <h4 className="text-base lg:text-lg font-light text-white leading-snug tracking-tight">
                          {it.name}
                        </h4>
                        <ArrowUpRight
                          className="mt-5 w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                          strokeWidth={1.5}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────── */}
        <section className="border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="max-w-3xl"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {c.cta.eyebrow}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1]"
              >
                {c.cta.title}
              </motion.h2>

              <motion.div variants={fadeUp} className="mt-10">
                <Link
                  href="/contact/"
                  className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-white border-b border-white/30 hover:border-white pb-2 transition-colors"
                >
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
