// ============================================================================
// SYMLOOP — Insight: AI automation in Algerian business (2026)
//
// Standalone editorial page. Content lives inline (per-locale objects), not in
// public/locales/common.json — each insight is fully self-contained so the
// content can be edited without touching shared translation files.
//
// Visual DNA: hairline grid, font-light, mono numerals, monochrome editorial
// imagery generated with Nano Banana. Same brand language as the service pages.
// ============================================================================

import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import SEO from '../../components/SEO';

// ────────────────────────────────────────────────────────────────────────────
// CONTENT — three locales, one object. Edit here, nowhere else.
// ────────────────────────────────────────────────────────────────────────────
const CONTENT = {
  en: {
    kind:        'Industry brief',
    title:       'AI automation in Algerian business — 2026',
    dek:         'Where AI is actually moving the needle for Algerian enterprises right now, and where it is still vapor. Five use cases that ship, five that do not.',
    publishedAt: 'April 2026',
    readTime:    '18 min read',
    pages:       '24 pages',
    author:      'Symloop research',

    intro: [
      'Every Algerian CEO has heard the AI pitch by now. The PowerPoint slides are identical — the same generative-AI promise, the same talk of "transformation", the same vendor with no production references in the country. After eighteen months of building real systems for real customers in Algiers, Oran, Constantine, and Sétif, we have a clearer view of where AI works in the Algerian market and where it still does not.',
      'This brief is the unsentimental version. No hype, no name-dropping, no consulting deck. Five use cases we have shipped and watched run in production for at least six months — and five we have explicitly walked away from when a client asked.',
    ],

    sections: [
      {
        heading: 'The five that ship',
        body: [
          'The use cases that work in Algeria today share three traits: they sit on top of existing operational data, they replace a task that is already manual and expensive, and they survive a power cut. Anything that requires perfect connectivity, perfect data, or perfect user adoption tends to die in pilot.',
          'Document intelligence — invoices, customs declarations, medical records, contracts — has been the runaway winner. Arabic and French OCR with structured extraction works well enough that companies are moving entire back-office workflows onto it. The ROI is visible in the first month because the alternative is an army of clerks.',
          'Forecasting and inventory optimization is the second cluster. Algerian distributors and retailers run on tight margins and chronic stock-outs. A model trained on two years of sales history beats spreadsheet planning every time, and the integration cost is small compared to the cash-flow improvement.',
        ],
      },
      {
        heading: 'Where the line is',
        body: [
          'The split between what works and what does not is not technical — it is operational. Production AI in Algeria fails for the same reasons production software fails: bad data, no clear owner, and no plan for the day after launch.',
        ],
        image: {
          src: '/insights/ai-works-vs-fails.jpg',
          alt: 'Editorial diagram showing AI use cases that work in production versus the ones that fail, on a clean monochrome split-screen.',
          caption: 'The works/fails split is operational, not technical. Bad data and no owner kill more AI projects than bad models.',
        },
      },
      {
        heading: 'The five we walk away from',
        body: [
          'We turn down work that we know will not survive contact with reality. End-to-end conversational agents replacing human customer support is the first one. The Darija and Algerian-French code-switching is hard, and the consequences of being wrong on a billing question are real. We build narrower assistants instead — a bot that can read an invoice and route it, not one pretending to be a person.',
          'The second category is "predictive analytics" sold without a target metric. If a client cannot tell us what decision the prediction will change, the project will die in production no matter how good the model is. The model is the easy part.',
          'The third is anything that depends on integrating with a legacy ministry system that has no API and no documentation. We have learned to scope those engagements as data-extraction projects first and AI projects second.',
        ],
      },
      {
        heading: 'Industrial AI is the underrated story',
        body: [
          'The headline noise is all about generative AI and chatbots. The actual revenue in the Algerian market is in computer vision on factory floors and predictive maintenance on industrial machinery. Cement plants, food processing lines, oil and gas equipment — the units of value here are measured in hours of unplanned downtime avoided, not in tokens generated.',
          'These projects are quieter, less press-friendly, and harder to sell. They also have the cleanest ROI we have seen and the longest contract durations.',
        ],
        image: {
          src: '/insights/ai-production-line.jpg',
          alt: 'Editorial blueprint of a factory production line with a central computational unit, drawn in monochrome.',
          caption: 'Industrial AI is where the real revenue is in the Algerian market — and it is the part that gets the least press.',
        },
      },
      {
        heading: 'What to do in the next twelve months',
        body: [
          'If you run a mid-sized Algerian business and have not yet started: pick one bottleneck that costs you more than five million dinars per year and is currently solved by humans doing repetitive document work. Start there. Do not start with a chatbot. Do not start with generative AI as a category. Start with one expensive, repetitive workflow.',
          'If you have already started and have a stalled pilot: the issue is almost certainly not the model. It is the integration, the data quality, or the absence of a single accountable owner. Audit those three before you replace the model.',
        ],
      },
    ],

    takeaways: {
      title: 'Five things to take from this brief',
      items: [
        'Document intelligence and forecasting are the two use cases shipping reliably in Algeria today.',
        'Industrial computer vision is the highest-margin AI category in the country and gets the least attention.',
        'Most failed AI pilots fail on data and ownership, not on model quality.',
        'Conversational agents replacing human support are still a bad bet in Darija and Algerian French.',
        'Start with one expensive, repetitive, document-heavy workflow. Skip the strategy slides.',
      ],
    },

    cta: {
      eyebrow: 'Talk to the team that wrote this',
      title:   'Have an AI use case you want a real engineering opinion on?',
      button:  'Book a 30-minute call',
    },

    backToHub: 'Back to all insights',
  },

  // ──────────────────────────────────────────────────────────────────────
  fr: {
    kind:        'Étude sectorielle',
    title:       "Automatisation IA dans l'entreprise algérienne — 2026",
    dek:         "Là où l'IA fait réellement bouger les choses pour les entreprises algériennes, et là où elle reste un argumentaire commercial. Cinq cas d'usage qui livrent, cinq que nous refusons.",
    publishedAt: 'Avril 2026',
    readTime:    '18 min de lecture',
    pages:       '24 pages',
    author:      'Recherche Symloop',

    intro: [
      "Chaque dirigeant algérien a déjà entendu l'argumentaire IA. Les diapositives sont identiques — la même promesse d'IA générative, le même discours de « transformation », le même prestataire sans aucune référence en production dans le pays. Après dix-huit mois à construire de vrais systèmes pour de vrais clients à Alger, Oran, Constantine et Sétif, nous avons une vision plus claire de ce qui marche en IA sur le marché algérien — et de ce qui ne marche toujours pas.",
      "Cette étude est la version sans concession. Pas de hype, pas de name-dropping, pas de slide de cabinet de conseil. Cinq cas d'usage que nous avons livrés et observés en production depuis au moins six mois — et cinq que nous avons explicitement refusés quand un client nous les a demandés.",
    ],

    sections: [
      {
        heading: 'Les cinq qui livrent',
        body: [
          "Les cas d'usage qui fonctionnent en Algérie aujourd'hui partagent trois caractéristiques : ils s'appuient sur des données opérationnelles existantes, ils remplacent une tâche déjà manuelle et coûteuse, et ils survivent à une coupure de courant. Tout ce qui exige une connectivité parfaite, des données parfaites ou une adoption utilisateur parfaite meurt en pilote.",
          "L'intelligence documentaire — factures, déclarations en douane, dossiers médicaux, contrats — est le grand gagnant. L'OCR arabe et français avec extraction structurée fonctionne suffisamment bien pour que les entreprises y déplacent des workflows entiers de back-office. Le ROI est visible dès le premier mois car l'alternative est une armée d'employés administratifs.",
          "La prévision et l'optimisation des stocks forment le deuxième pôle. Les distributeurs et détaillants algériens fonctionnent avec des marges serrées et des ruptures chroniques. Un modèle entraîné sur deux ans d'historique de ventes bat à chaque fois la planification sur tableur, et le coût d'intégration est minime comparé à l'amélioration de la trésorerie.",
        ],
      },
      {
        heading: 'Où passe la ligne',
        body: [
          "Le partage entre ce qui fonctionne et ce qui ne fonctionne pas n'est pas technique — il est opérationnel. L'IA en production échoue en Algérie pour les mêmes raisons que tout logiciel échoue en production : mauvaises données, pas de propriétaire clair, et aucun plan pour le lendemain du lancement.",
        ],
        image: {
          src: '/insights/ai-works-vs-fails.jpg',
          alt: "Diagramme éditorial montrant les cas d'usage IA qui fonctionnent en production face à ceux qui échouent, sur un écran scindé monochrome.",
          caption: "Le partage qui-fonctionne / qui-échoue est opérationnel, pas technique. Les mauvaises données et l'absence de propriétaire tuent plus de projets IA que les mauvais modèles.",
        },
      },
      {
        heading: 'Les cinq que nous refusons',
        body: [
          "Nous refusons les missions dont nous savons qu'elles ne survivront pas au contact du réel. Les agents conversationnels de bout en bout remplaçant le support client humain en sont le premier exemple. La darija et le code-switching algérien sont difficiles, et les conséquences d'une erreur sur une question de facturation sont réelles. Nous construisons à la place des assistants plus étroits — un bot capable de lire une facture et de la router, pas un bot qui prétend être une personne.",
          "La deuxième catégorie est « l'analytique prédictive » vendue sans métrique cible. Si un client ne peut pas nous dire quelle décision la prédiction va changer, le projet mourra en production peu importe la qualité du modèle. Le modèle est la partie facile.",
          "La troisième est tout ce qui dépend d'une intégration avec un système ministériel hérité sans API ni documentation. Nous avons appris à cadrer ces missions comme des projets d'extraction de données d'abord, et des projets IA ensuite.",
        ],
      },
      {
        heading: "L'IA industrielle est l'histoire sous-estimée",
        body: [
          "Le bruit médiatique parle d'IA générative et de chatbots. Le vrai chiffre d'affaires sur le marché algérien se trouve dans la vision par ordinateur sur les chaînes de production et la maintenance prédictive des machines industrielles. Cimenteries, lignes agroalimentaires, équipements pétroliers et gaziers — l'unité de valeur ici se mesure en heures d'arrêt non planifié évitées, pas en tokens générés.",
          "Ces projets sont plus discrets, moins médiatiques, plus difficiles à vendre. Ils ont aussi le ROI le plus net que nous ayons vu et les durées contractuelles les plus longues.",
        ],
        image: {
          src: '/insights/ai-production-line.jpg',
          alt: "Plan éditorial d'une chaîne de production d'usine avec une unité de calcul centrale, dessiné en monochrome.",
          caption: "L'IA industrielle est là où se trouve le vrai chiffre d'affaires sur le marché algérien — et c'est la partie qui reçoit le moins de presse.",
        },
      },
      {
        heading: 'Que faire dans les douze prochains mois',
        body: [
          "Si vous dirigez une entreprise algérienne de taille moyenne et n'avez pas encore commencé : choisissez un goulet d'étranglement qui vous coûte plus de cinq millions de dinars par an et qui est actuellement résolu par des humains effectuant un travail documentaire répétitif. Commencez là. Ne commencez pas par un chatbot. Ne commencez pas par l'IA générative comme catégorie. Commencez par un workflow coûteux et répétitif.",
          "Si vous avez déjà commencé et que vous avez un pilote en panne : le problème n'est presque jamais le modèle. C'est l'intégration, la qualité des données, ou l'absence d'un propriétaire unique et responsable. Auditez ces trois points avant de remplacer le modèle.",
        ],
      },
    ],

    takeaways: {
      title: 'Cinq points à retenir',
      items: [
        "L'intelligence documentaire et la prévision sont les deux cas d'usage qui livrent de manière fiable en Algérie aujourd'hui.",
        "La vision par ordinateur industrielle est la catégorie d'IA à plus forte marge dans le pays et celle qui reçoit le moins d'attention.",
        "La plupart des pilotes IA échouent à cause des données et de la gouvernance, pas de la qualité des modèles.",
        "Les agents conversationnels remplaçant le support humain restent un mauvais pari en darija et en français algérien.",
        "Commencez par un workflow coûteux, répétitif et documentaire. Sautez les slides de stratégie.",
      ],
    },

    cta: {
      eyebrow: "Parlez à l'équipe qui a écrit ceci",
      title:   "Vous avez un cas d'usage IA et voulez un vrai avis d'ingénierie ?",
      button:  'Réserver un appel de 30 minutes',
    },

    backToHub: 'Retour à toutes les études',
  },

  // ──────────────────────────────────────────────────────────────────────
  ar: {
    kind:        'تقرير قطاعي',
    title:       'أتمتة الذكاء الاصطناعي في الشركات الجزائرية — 2026',
    dek:         'أين يُحدث الذكاء الاصطناعي فرقاً حقيقياً للشركات الجزائرية اليوم، وأين لا يزال مجرد كلام. خمس حالات استخدام تنجح في الإنتاج، وخمس نرفضها.',
    publishedAt: 'أبريل 2026',
    readTime:    '18 دقيقة قراءة',
    pages:       '24 صفحة',
    author:      'أبحاث سيملوب',

    intro: [
      'كل مدير تنفيذي جزائري سمع عرض الذكاء الاصطناعي. الشرائح متطابقة — نفس الوعد بالذكاء الاصطناعي التوليدي، نفس الحديث عن "التحول"، نفس البائع بدون مراجع إنتاج في البلاد. بعد ثمانية عشر شهراً من بناء أنظمة حقيقية لعملاء حقيقيين في الجزائر العاصمة ووهران وقسنطينة وسطيف، أصبحت لدينا رؤية أوضح لما ينجح في السوق الجزائرية وما لا يزال لا ينجح.',
      'هذا التقرير هو النسخة الصادقة. لا مبالغة، ولا أسماء كبيرة، ولا شريحة استشارية. خمس حالات استخدام سلّمناها وراقبناها في الإنتاج لمدة لا تقل عن ستة أشهر — وخمس رفضناها صراحة عندما طلبها عميل.',
    ],

    sections: [
      {
        heading: 'الخمس التي تنجح',
        body: [
          'حالات الاستخدام التي تعمل في الجزائر اليوم تشترك في ثلاث سمات: تعتمد على بيانات تشغيلية موجودة بالفعل، وتحل محل مهمة يدوية ومكلفة بالفعل، وتنجو من انقطاع التيار الكهربائي. أي شيء يتطلب اتصالاً مثالياً أو بيانات مثالية أو تبنّياً مثالياً من المستخدمين يموت عادة في مرحلة التجربة.',
          'ذكاء المستندات — الفواتير، التصريحات الجمركية، السجلات الطبية، العقود — هو الفائز الأكبر. التعرف الضوئي على الحروف بالعربية والفرنسية مع الاستخراج المنظم يعمل بشكل جيد بما يكفي لتنقل الشركات سير عمل المكاتب الخلفية بأكمله إليه. العائد على الاستثمار مرئي في الشهر الأول لأن البديل هو جيش من الموظفين الإداريين.',
          'التنبؤ وتحسين المخزون هو المجموعة الثانية. الموزعون وتجار التجزئة الجزائريون يعملون بهوامش ضيقة ونقص مزمن في المخزون. نموذج مدرَّب على عامين من تاريخ المبيعات يتفوق على التخطيط بجداول البيانات في كل مرة، وتكلفة الدمج صغيرة مقارنة بتحسن التدفق النقدي.',
        ],
      },
      {
        heading: 'أين يقع الخط',
        body: [
          'الفصل بين ما ينجح وما لا ينجح ليس تقنياً — إنه تشغيلي. الذكاء الاصطناعي في الإنتاج يفشل في الجزائر للأسباب نفسها التي يفشل لها أي برنامج في الإنتاج: بيانات سيئة، لا يوجد مالك واضح، ولا توجد خطة لليوم التالي للإطلاق.',
        ],
        image: {
          src: '/insights/ai-works-vs-fails.jpg',
          alt: 'مخطط تحريري يُظهر حالات استخدام الذكاء الاصطناعي التي تعمل في الإنتاج مقابل تلك التي تفشل، على شاشة منقسمة بالأبيض والأسود.',
          caption: 'الفصل بين النجاح والفشل تشغيلي وليس تقنياً. البيانات السيئة وغياب المالك يقتلان مشاريع ذكاء اصطناعي أكثر من النماذج السيئة.',
        },
      },
      {
        heading: 'الخمس التي نرفضها',
        body: [
          'نرفض العمل الذي نعرف أنه لن ينجو من احتكاك الواقع. الوكلاء المحادثيون من البداية للنهاية الذين يحلون محل الدعم البشري للعملاء هم الفئة الأولى. الدارجة والتبديل اللغوي الجزائري صعبان، وعواقب الخطأ في سؤال فاتورة حقيقية. نحن نبني بدلاً من ذلك مساعدين أضيق نطاقاً — روبوتاً يستطيع قراءة فاتورة وتوجيهها، لا روبوتاً يدّعي أنه إنسان.',
          'الفئة الثانية هي "التحليلات التنبؤية" المباعة بدون مقياس مستهدف. إذا لم يستطع العميل أن يخبرنا أي قرار ستغيره التنبؤات، فإن المشروع سيموت في الإنتاج مهما كان النموذج جيداً. النموذج هو الجزء السهل.',
          'الفئة الثالثة هي أي شيء يعتمد على التكامل مع نظام وزاري قديم بدون واجهة برمجية ولا توثيق. تعلّمنا أن نُحدِّد نطاق هذه المهام كمشاريع استخراج بيانات أولاً، ومشاريع ذكاء اصطناعي ثانياً.',
        ],
      },
      {
        heading: 'الذكاء الاصطناعي الصناعي هو القصة المُهملة',
        body: [
          'الضجيج الإعلامي يدور حول الذكاء الاصطناعي التوليدي والروبوتات المحادثة. الإيرادات الحقيقية في السوق الجزائرية موجودة في الرؤية الحاسوبية على أرضيات المصانع والصيانة التنبؤية للآلات الصناعية. مصانع الإسمنت، خطوط معالجة الأغذية، معدات النفط والغاز — وحدة القيمة هنا تُقاس بساعات التوقف غير المخطط له المُتجنَّبة، لا بالرموز المُولَّدة.',
          'هذه المشاريع أكثر هدوءاً، أقل ملاءمة للصحافة، وأصعب في البيع. لديها أيضاً أنظف عائد على استثمار رأيناه وأطول مدد عقدية.',
        ],
        image: {
          src: '/insights/ai-production-line.jpg',
          alt: 'مخطط تحريري لخط إنتاج مصنع مع وحدة حسابية مركزية، مرسوم بالأبيض والأسود.',
          caption: 'الذكاء الاصطناعي الصناعي هو حيث توجد الإيرادات الحقيقية في السوق الجزائرية — وهو الجزء الذي يحظى بأقل تغطية إعلامية.',
        },
      },
      {
        heading: 'ماذا تفعل في الاثني عشر شهراً المقبلة',
        body: [
          'إذا كنت تدير شركة جزائرية متوسطة الحجم ولم تبدأ بعد: اختر عُنق زجاجة يكلفك أكثر من خمسة ملايين دينار سنوياً وحالياً يحلّه بشر يقومون بعمل مستندي متكرر. ابدأ هناك. لا تبدأ بروبوت محادثة. لا تبدأ بالذكاء الاصطناعي التوليدي كفئة. ابدأ بسير عمل واحد مكلف ومتكرر.',
          'إذا كنت قد بدأت بالفعل ولديك تجربة متوقفة: المشكلة في الغالب ليست النموذج. إنها التكامل، أو جودة البيانات، أو غياب مالك مسؤول واحد. دقّق هذه الثلاثة قبل أن تستبدل النموذج.',
        ],
      },
    ],

    takeaways: {
      title: 'خمسة أشياء تأخذها من هذا التقرير',
      items: [
        'ذكاء المستندات والتنبؤ هما حالتا الاستخدام اللتان تعملان بموثوقية في الجزائر اليوم.',
        'الرؤية الحاسوبية الصناعية هي فئة الذكاء الاصطناعي ذات أعلى هامش في البلاد وتحظى بأقل اهتمام.',
        'معظم تجارب الذكاء الاصطناعي الفاشلة تفشل بسبب البيانات والملكية، لا بسبب جودة النموذج.',
        'الوكلاء المحادثيون الذين يحلون محل الدعم البشري لا يزالون رهاناً سيئاً بالدارجة والفرنسية الجزائرية.',
        'ابدأ بسير عمل واحد مكلف ومتكرر ومستندي. تخطَّ شرائح الاستراتيجية.',
      ],
    },

    cta: {
      eyebrow: 'تحدث مع الفريق الذي كتب هذا',
      title:   'هل لديك حالة استخدام ذكاء اصطناعي تريد رأياً هندسياً حقيقياً فيها؟',
      button:  'احجز مكالمة 30 دقيقة',
    },

    backToHub: 'العودة إلى جميع الرؤى',
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

export default function InsightAIPage() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.en;

  const articleLd = {
    '@context':      'https://schema.org',
    '@type':         'Article',
    headline:        c.title,
    description:     c.dek,
    image:           ['https://symloop.com/insights/cover-ai.jpg'],
    datePublished:   '2026-04-08',
    dateModified:    '2026-04-08',
    author:          { '@type': 'Organization', name: 'Symloop' },
    publisher:       {
      '@type': 'Organization',
      name:    'Symloop',
      logo:    { '@type': 'ImageObject', url: 'https://symloop.com/images/symloop-logo.png' },
    },
    mainEntityOfPage: 'https://symloop.com/insights/ai/',
  };

  const breadcrumbs = [
    { name: 'Home',     url: 'https://symloop.com/' },
    { name: 'Insights', url: 'https://symloop.com/insights/' },
    { name: c.title,    url: 'https://symloop.com/insights/ai/' },
  ];

  return (
    <>
      <SEO
        title={`${c.title} — Symloop Insights`}
        description={c.dek}
        keywords="ai algeria, ai automation algeria, machine learning algeria, computer vision factory algeria, document intelligence algeria, symloop insights"
        type="article"
        structuredData={articleLd}
        breadcrumbs={breadcrumbs}
        image="/insights/cover-ai.jpg"
      />

      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">

        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-16">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <Link
                  href="/insights/"
                  className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors"
                >
                  {c.kind}
                </Link>
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
                <span>{c.author}</span>
                <span>{c.pages}</span>
                <span>{c.readTime}</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Cover image full-bleed */}
          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] border-y border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <Image
              src="/insights/cover-ai.jpg"
              alt={c.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
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

              {s.image && (
                <motion.figure variants={fadeUp} className="mt-12">
                  <div className="relative w-full aspect-[16/9] border border-white/[0.08] bg-white/[0.02] overflow-hidden">
                    <Image
                      src={s.image.src}
                      alt={s.image.alt}
                      fill
                      sizes="(min-width: 1024px) 800px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-4 font-mono text-[11px] tracking-[0.1em] uppercase text-white/40 leading-relaxed">
                    {s.image.caption}
                  </figcaption>
                </motion.figure>
              )}
            </motion.section>
          ))}

          {/* Takeaways */}
          <motion.aside
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="mt-20 mb-16 border border-white/[0.08] bg-white/[0.015] p-8 lg:p-12"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                {c.takeaways.title}
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </motion.div>
            <ul className="space-y-5">
              {c.takeaways.items.map((t, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-5">
                  <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 pt-1.5 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-base lg:text-lg text-white/75 leading-relaxed font-light">
                    {t}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.aside>
        </article>

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

              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-6">
                <Link
                  href="/contact/"
                  className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-white border-b border-white/30 hover:border-white pb-2 transition-colors"
                >
                  <span>{c.cta.button}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </Link>

                <Link
                  href="/insights/"
                  className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors"
                >
                  {isRtl ? (
                    <ArrowRight className="w-3.5 h-3.5 rotate-180" strokeWidth={1.5} />
                  ) : (
                    <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
                  )}
                  <span>{c.backToHub}</span>
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
