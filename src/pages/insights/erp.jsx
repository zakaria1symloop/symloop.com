// ============================================================================
// SYMLOOP — Insight: Custom ERP for Algerian SMEs (2026)
// ============================================================================

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import SEO from '../../components/SEO';

const CONTENT = {
  en: {
    kind:        'Tech vision',
    title:       'Custom ERP for Algerian SMEs — beyond Odoo',
    dek:         'Why most Algerian ERP projects fail, and what we learned shipping ours. A field guide for CTOs evaluating build-vs-buy on enterprise systems.',
    publishedAt: 'April 2026',
    readTime:    '22 min read',
    pages:       '32 pages',
    author:      'Symloop research',

    intro: [
      'Almost every Algerian SME above forty employees has the same story. They bought an off-the-shelf ERP — Odoo, Sage, sometimes a localized solution from a Tunisian or French vendor. They spent six months in implementation. They customized fifteen things. They fought with the vendor over twenty more. Two years in, half the company is back on Excel and the IT director is privately admitting that the project was a write-off.',
      'This brief is not anti-Odoo. It is anti-pretending. Packaged ERP works for some companies and fails for others, and the prediction of which group you belong to is more deterministic than most people think. After a dozen ERP engagements across Algeria — half rescues of failed packaged deployments, half custom builds from scratch — we have a clear view of where the line is and what to do on either side of it.',
    ],

    sections: [
      {
        heading: 'Why packaged ERP keeps failing in Algeria',
        body: [
          'The Algerian market has three structural conditions that break standard ERP playbooks. First, the local fiscal and customs rules change often enough that any standard module ages in eighteen months. Second, the gap between French-trained finance teams, Arabic-speaking warehouse staff, and English-speaking developers creates a translation tax on every customization request. Third, the unit economics of customer support from a foreign vendor do not work when the customer is a forty-person manufacturer in Bordj Bou Arréridj.',
          'None of these are technical problems. They are operational and linguistic problems that compound over time. A packaged ERP solves none of them and several of them get worse as the customizations pile up.',
        ],
        image: {
          src: '/insights/erp-packaged-vs-custom.jpg',
          alt: 'Editorial diagram comparing a closed packaged software box with a modular customizable equivalent.',
          caption: 'Packaged ERP works when your processes match the package. Custom ERP works when your processes are the moat.',
        },
      },
      {
        heading: 'When packaged is still the right answer',
        body: [
          'We have walked clients away from custom ERP more than once. If your business is genuinely standard — same invoice format as your competitors, same fiscal flow, same warehouse routine, same payroll structure — then a packaged solution will be cheaper, faster, and lower-risk. Customization should be measured in days of consulting, not months of engineering.',
          'The signal that a packaged solution is right is boring: your ops director cannot articulate any process that makes your company different from the next one in your sector. If that is true, do not build. Buy and configure.',
        ],
      },
      {
        heading: 'When custom is the only honest answer',
        body: [
          'The opposite signal is just as clear. If your operational process is the thing that makes you faster, cheaper, or more accurate than your competitors, that process is your moat — and forcing it into a packaged ERP destroys the moat. We have seen distributors with a 24-hour cash-to-delivery cycle that no Odoo configuration could preserve. We have seen manufacturers with a hybrid traditional/modern accounting flow that no Sage module could absorb without hacks.',
          'The right test is uncomfortable: write down the five things your operations team does that nobody else in your sector does. If that list is real, every one of those five things will fight a packaged ERP and lose. Build instead.',
        ],
        image: {
          src: '/insights/erp-org-spine.jpg',
          alt: "Editorial blueprint of an organizational chart connected by a single central spine — the ERP backbone.",
          caption: 'A custom ERP is a spine, not a product. Every department hangs off it; the value is in how the connections fit your specific operations.',
        },
      },
      {
        heading: 'How we ship ours',
        body: [
          'Our custom ERP engagements run on three rules. One: we never start with the database schema. We start with three weeks of shadowing the operations team, not interviewing them. People describe what they wish they did; observation reveals what they actually do. The schema falls out of the second.',
          'Two: we ship the smallest possible version into production within ninety days, even if it only covers one department. Six-month big-bang ERP rollouts are how Algerian projects die. Ship narrow, learn, expand.',
          'Three: the customer keeps the source code on day one. There is no vendor lock-in, no per-seat fee, and no surprise renewal pricing. The IP is theirs, the hosting is theirs, and we are paid for the engineering, not for the rent.',
        ],
      },
      {
        heading: 'The cost question, honestly',
        body: [
          'A custom ERP for an Algerian SME is rarely below twenty-five million dinars and rarely above one hundred and twenty. The variation is not about feature count — it is about how deep we have to integrate with banks, customs, and legacy ministry systems. Greenfield projects are at the lower end. Replacing a failed packaged deployment is at the higher end because half the work is undoing decisions that should not have been made.',
          'Compared to the seven-year total cost of an enterprise packaged ERP — license, customization, support, version upgrades, lock-in — custom is consistently cheaper for the businesses we work with. But the upfront concentration of cash makes it look more expensive at the moment of decision. That optical illusion kills more good ERP projects than any technical issue.',
        ],
      },
    ],

    takeaways: {
      title: 'Five things to take from this brief',
      items: [
        'Packaged ERP fails in Algeria more often because of operational and linguistic friction than because of technical limits.',
        'If your operations are genuinely standard, buy and configure — do not build.',
        'If your operational process is your moat, packaged ERP will destroy the moat. Build.',
        'Ship the smallest production-ready version in ninety days. Avoid six-month big-bang rollouts.',
        'Custom ERP is usually cheaper over seven years but looks more expensive on day one. That is where most decisions go wrong.',
      ],
    },

    cta: {
      eyebrow: 'Talk to the team that wrote this',
      title:   'Considering an ERP project? Get a build-vs-buy opinion from people with no software to sell you.',
      button:  'Book a 30-minute call',
    },

    backToHub: 'Back to all insights',
  },

  // ──────────────────────────────────────────────────────────────────────
  fr: {
    kind:        'Vision tech',
    title:       'ERP sur mesure pour les PME algériennes — au-delà d\'Odoo',
    dek:         "Pourquoi la plupart des projets ERP en Algérie échouent, et ce que nous avons appris en livrant les nôtres. Un guide terrain pour les DSI qui évaluent build vs buy.",
    publishedAt: 'Avril 2026',
    readTime:    '22 min de lecture',
    pages:       '32 pages',
    author:      'Recherche Symloop',

    intro: [
      "Presque toutes les PME algériennes de plus de quarante employés ont la même histoire. Elles ont acheté un ERP standard — Odoo, Sage, parfois une solution localisée d'un éditeur tunisien ou français. Elles ont passé six mois en implémentation. Elles ont personnalisé quinze choses. Elles se sont battues avec l'éditeur sur vingt autres. Deux ans plus tard, la moitié de l'entreprise est revenue sur Excel et le DSI admet en privé que le projet est à passer en perte.",
      "Cette étude n'est pas anti-Odoo. Elle est anti-déni. Les ERP packagés fonctionnent pour certaines entreprises et échouent pour d'autres, et la prédiction de votre groupe est plus déterministe que la plupart des gens ne le pensent. Après une douzaine de missions ERP en Algérie — moitié sauvetages de déploiements packagés ratés, moitié constructions sur mesure de zéro — nous avons une vision claire de l'endroit où passe la ligne.",
    ],

    sections: [
      {
        heading: 'Pourquoi les ERP packagés continuent d\'échouer en Algérie',
        body: [
          "Le marché algérien présente trois conditions structurelles qui cassent les playbooks ERP standards. Premièrement, les règles fiscales et douanières locales changent suffisamment souvent pour que tout module standard vieillisse en dix-huit mois. Deuxièmement, l'écart entre des équipes finance formées en français, du personnel d'entrepôt arabophone et des développeurs anglophones crée une taxe de traduction sur chaque demande de personnalisation. Troisièmement, les unités économiques du support client d'un éditeur étranger ne fonctionnent pas quand le client est un fabricant de quarante personnes à Bordj Bou Arréridj.",
          "Aucun de ces problèmes n'est technique. Ce sont des problèmes opérationnels et linguistiques qui s'aggravent dans le temps. Un ERP packagé n'en résout aucun, et plusieurs s'aggravent à mesure que les personnalisations s'accumulent.",
        ],
        image: {
          src: '/insights/erp-packaged-vs-custom.jpg',
          alt: "Diagramme éditorial comparant une boîte logicielle packagée fermée et son équivalent modulaire personnalisable.",
          caption: "Les ERP packagés fonctionnent quand vos processus correspondent au package. Les ERP sur mesure fonctionnent quand vos processus sont votre avantage.",
        },
      },
      {
        heading: 'Quand le packagé reste la bonne réponse',
        body: [
          "Nous avons éloigné des clients de l'ERP sur mesure plus d'une fois. Si votre activité est véritablement standard — même format de facture que vos concurrents, même flux fiscal, même routine d'entrepôt, même structure de paie — alors une solution packagée sera moins chère, plus rapide et moins risquée. La personnalisation doit se mesurer en jours de conseil, pas en mois d'ingénierie.",
          "Le signal qu'une solution packagée convient est ennuyeux : votre directeur des opérations ne peut articuler aucun processus qui rende votre entreprise différente de la suivante dans votre secteur. Si c'est vrai, ne construisez pas. Achetez et configurez.",
        ],
      },
      {
        heading: "Quand le sur mesure est la seule réponse honnête",
        body: [
          "Le signal opposé est tout aussi clair. Si votre processus opérationnel est ce qui vous rend plus rapide, moins cher ou plus précis que vos concurrents, ce processus est votre fossé — et le forcer dans un ERP packagé détruit le fossé. Nous avons vu des distributeurs avec un cycle cash-livraison de 24 heures qu'aucune configuration Odoo ne pouvait préserver. Nous avons vu des fabricants avec un flux comptable hybride traditionnel/moderne qu'aucun module Sage ne pouvait absorber sans bricolage.",
          "Le bon test est inconfortable : écrivez les cinq choses que votre équipe opérations fait que personne d'autre ne fait dans votre secteur. Si cette liste est réelle, chacune de ces cinq choses se battra contre un ERP packagé et perdra. Construisez à la place.",
        ],
        image: {
          src: '/insights/erp-org-spine.jpg',
          alt: "Plan éditorial d'un organigramme connecté par une colonne vertébrale centrale — la dorsale ERP.",
          caption: "Un ERP sur mesure est une colonne vertébrale, pas un produit. Chaque département s'y rattache ; la valeur est dans la façon dont les connexions s'adaptent à vos opérations.",
        },
      },
      {
        heading: 'Comment nous livrons les nôtres',
        body: [
          "Nos missions ERP sur mesure suivent trois règles. Un : nous ne commençons jamais par le schéma de base de données. Nous commençons par trois semaines à observer l'équipe opérations, pas à les interviewer. Les gens décrivent ce qu'ils aimeraient faire ; l'observation révèle ce qu'ils font réellement. Le schéma découle du second.",
          "Deux : nous livrons la plus petite version possible en production en quatre-vingt-dix jours, même si elle ne couvre qu'un département. Les déploiements ERP big-bang en six mois sont la façon dont les projets algériens meurent. Livrez étroit, apprenez, étendez.",
          "Trois : le client garde le code source dès le premier jour. Pas de verrouillage éditeur, pas de frais par utilisateur, pas de surprise sur le prix de renouvellement. La propriété intellectuelle est à eux, l'hébergement est à eux, et nous sommes payés pour l'ingénierie, pas pour la location.",
        ],
      },
      {
        heading: 'La question du coût, honnêtement',
        body: [
          "Un ERP sur mesure pour une PME algérienne est rarement en-dessous de vingt-cinq millions de dinars et rarement au-dessus de cent vingt. La variation ne porte pas sur le nombre de fonctionnalités — elle porte sur la profondeur d'intégration avec les banques, les douanes et les systèmes ministériels hérités. Les projets greenfield sont en bas de la fourchette. Le remplacement d'un déploiement packagé raté est en haut, parce que la moitié du travail consiste à défaire des décisions qui n'auraient pas dû être prises.",
          "Comparé au coût total sur sept ans d'un ERP packagé d'entreprise — licence, personnalisation, support, montées de version, verrouillage — le sur mesure est systématiquement moins cher pour les entreprises avec lesquelles nous travaillons. Mais la concentration de trésorerie en amont le fait paraître plus cher au moment de la décision. Cette illusion d'optique tue plus de bons projets ERP que tout problème technique.",
        ],
      },
    ],

    takeaways: {
      title: 'Cinq points à retenir',
      items: [
        "Les ERP packagés échouent en Algérie plus souvent par friction opérationnelle et linguistique que par limites techniques.",
        "Si vos opérations sont véritablement standard, achetez et configurez — ne construisez pas.",
        "Si votre processus opérationnel est votre fossé, un ERP packagé détruira le fossé. Construisez.",
        "Livrez la plus petite version production-ready en quatre-vingt-dix jours. Évitez les déploiements big-bang en six mois.",
        "L'ERP sur mesure est généralement moins cher sur sept ans mais paraît plus cher le premier jour. C'est là que la plupart des décisions tournent mal.",
      ],
    },

    cta: {
      eyebrow: "Parlez à l'équipe qui a écrit ceci",
      title:   "Vous envisagez un projet ERP ? Obtenez un avis build-vs-buy de personnes qui n'ont pas de logiciel à vous vendre.",
      button:  'Réserver un appel de 30 minutes',
    },

    backToHub: 'Retour à toutes les études',
  },

  // ──────────────────────────────────────────────────────────────────────
  ar: {
    kind:        'رؤية تقنية',
    title:       'تخطيط موارد المؤسسات المخصص للشركات الجزائرية الصغيرة والمتوسطة — ما بعد أودو',
    dek:         'لماذا تفشل معظم مشاريع ERP في الجزائر، وما تعلمناه من تسليم أنظمتنا. دليل ميداني للمدراء التقنيين الذين يقيّمون البناء مقابل الشراء.',
    publishedAt: 'أبريل 2026',
    readTime:    '22 دقيقة قراءة',
    pages:       '32 صفحة',
    author:      'أبحاث سيملوب',

    intro: [
      'تقريباً كل شركة جزائرية صغيرة أو متوسطة بأكثر من أربعين موظفاً لديها نفس القصة. اشتروا نظام ERP جاهزاً — أودو أو سيج أو أحياناً حلاً مُعرَّباً من بائع تونسي أو فرنسي. قضوا ستة أشهر في التنفيذ. خصّصوا خمسة عشر شيئاً. تشاجروا مع البائع على عشرين شيئاً آخر. بعد عامين، نصف الشركة عاد إلى Excel والمدير التقني يعترف سراً بأن المشروع شُطب.',
      'هذا التقرير ليس ضد أودو. إنه ضد التظاهر. الأنظمة الجاهزة تعمل لبعض الشركات وتفشل لأخرى، والتنبؤ بالمجموعة التي تنتمي إليها أكثر حتمية مما يعتقد معظم الناس. بعد عشرات من المهام في الجزائر — نصفها إنقاذ لتطبيقات جاهزة فاشلة، ونصفها بناء مخصص من الصفر — لدينا رؤية واضحة لأين يقع الخط.',
    ],

    sections: [
      {
        heading: 'لماذا تستمر أنظمة ERP الجاهزة في الفشل في الجزائر',
        body: [
          'السوق الجزائرية لديها ثلاث ظروف هيكلية تكسر أدلة عمل ERP القياسية. أولاً، القواعد الضريبية والجمركية المحلية تتغير بما يكفي ليصبح أي نموذج قياسي قديماً خلال ثمانية عشر شهراً. ثانياً، الفجوة بين فرق المالية المتدربة بالفرنسية وموظفي المستودعات الناطقين بالعربية والمطورين الناطقين بالإنجليزية تخلق ضريبة ترجمة على كل طلب تخصيص. ثالثاً، اقتصاديات الدعم الفني من بائع أجنبي لا تعمل عندما يكون العميل مصنّعاً من أربعين شخصاً في برج بوعريريج.',
          'لا شيء من هذه مشاكل تقنية. إنها مشاكل تشغيلية ولغوية تتفاقم بمرور الوقت. ERP جاهز لا يحل أياً منها، والعديد منها يزداد سوءاً مع تراكم التخصيصات.',
        ],
        image: {
          src: '/insights/erp-packaged-vs-custom.jpg',
          alt: 'مخطط تحريري يقارن صندوق برنامج جاهز مغلق مع مكافئه القابل للتخصيص بالأبيض والأسود.',
          caption: 'الـERP الجاهز يعمل عندما تطابق عملياتك الحزمة. الـERP المخصص يعمل عندما تكون عملياتك هي الميزة التنافسية.',
        },
      },
      {
        heading: 'متى يكون الجاهز هو الإجابة الصحيحة',
        body: [
          'أبعدنا عملاء عن ERP المخصص أكثر من مرة. إذا كان عملك معيارياً حقاً — نفس صيغة الفاتورة كمنافسيك، نفس التدفق المالي، نفس روتين المستودع، نفس هيكل الرواتب — فإن الحل الجاهز سيكون أرخص وأسرع وأقل خطراً. التخصيص يجب أن يُقاس بأيام من الاستشارات، لا بأشهر من الهندسة.',
          'الإشارة إلى أن الحل الجاهز مناسب مملة: مدير العمليات لديك لا يستطيع وصف أي عملية تجعل شركتك مختلفة عن التالية في قطاعك. إذا كان ذلك صحيحاً، لا تبنِ. اشترِ وقم بالتهيئة.',
        ],
      },
      {
        heading: 'متى يكون المخصص هو الإجابة الصادقة الوحيدة',
        body: [
          'الإشارة المعاكسة واضحة بنفس القدر. إذا كانت عمليتك التشغيلية هي ما يجعلك أسرع أو أرخص أو أكثر دقة من منافسيك، فإن تلك العملية هي خندقك الدفاعي — وإجبارها على الدخول في ERP جاهز يدمر الخندق. رأينا موزعين بدورة نقدية إلى التسليم خلال 24 ساعة لم تستطع أي تهيئة لأودو الحفاظ عليها. رأينا مُصنِّعين بتدفق محاسبي مختلط تقليدي/حديث لم يستطع أي نموذج Sage استيعابه دون حلول مرتجلة.',
          'الاختبار الصحيح غير مريح: اكتب الأشياء الخمسة التي يفعلها فريق العمليات لديك ولا يفعلها أي شخص آخر في قطاعك. إذا كانت تلك القائمة حقيقية، فإن كل واحد من تلك الخمسة سيقاتل ERP جاهز ويخسر. ابنِ بدلاً من ذلك.',
        ],
        image: {
          src: '/insights/erp-org-spine.jpg',
          alt: 'مخطط تحريري لرسم تنظيمي متصل بعمود فقري مركزي — العمود الفقري لـERP.',
          caption: 'الـERP المخصص هو عمود فقري، لا منتج. كل قسم يتعلق به؛ القيمة في كيفية ملاءمة التوصيلات لعملياتك المحددة.',
        },
      },
      {
        heading: 'كيف نسلّم أنظمتنا',
        body: [
          'مهامنا في ERP المخصص تعمل بثلاث قواعد. الأولى: لا نبدأ أبداً بمخطط قاعدة البيانات. نبدأ بثلاثة أسابيع من مرافقة فريق العمليات، لا من إجراء مقابلات معهم. الناس يصفون ما يتمنون أن يفعلوه؛ الملاحظة تكشف ما يفعلونه فعلاً. المخطط يتبع ذلك.',
          'الثانية: نسلّم أصغر نسخة ممكنة في الإنتاج خلال تسعين يوماً، حتى لو غطّت قسماً واحداً فقط. تطبيقات ERP الكبرى ذات الانفجار الكبير في ستة أشهر هي الطريقة التي تموت بها المشاريع الجزائرية. سلِّم ضيقاً، تعلّم، توسّع.',
          'الثالثة: العميل يحتفظ بشفرة المصدر منذ اليوم الأول. لا قفل من البائع، لا رسوم لكل مقعد، ولا مفاجأة في تسعير التجديد. الملكية الفكرية لهم، والاستضافة لهم، ونحن نُدفع مقابل الهندسة، لا مقابل الإيجار.',
        ],
      },
      {
        heading: 'مسألة التكلفة، بصراحة',
        body: [
          'ERP مخصص لشركة جزائرية صغيرة أو متوسطة نادراً ما يكون أقل من خمسة وعشرين مليون دينار ونادراً ما يتجاوز مئة وعشرين. التباين ليس في عدد الميزات — إنه في عمق التكامل مع البنوك والجمارك وأنظمة الوزارات القديمة. مشاريع الأرض البكر في الطرف الأدنى. استبدال تطبيق جاهز فاشل في الطرف الأعلى لأن نصف العمل هو التراجع عن قرارات ما كان ينبغي اتخاذها.',
          'مقارنةً بالتكلفة الإجمالية على سبع سنوات لـERP جاهز — الترخيص، التخصيص، الدعم، ترقيات الإصدارات، القفل — المخصص أرخص باستمرار للشركات التي نعمل معها. لكن التركيز الأمامي للنقد يجعله يبدو أكثر تكلفة في لحظة القرار. هذا الوهم البصري يقتل مشاريع ERP جيدة أكثر من أي مشكلة تقنية.',
        ],
      },
    ],

    takeaways: {
      title: 'خمسة أشياء تأخذها من هذا التقرير',
      items: [
        'أنظمة ERP الجاهزة تفشل في الجزائر بسبب الاحتكاك التشغيلي واللغوي أكثر من القيود التقنية.',
        'إذا كانت عملياتك معيارية حقاً، اشترِ وقم بالتهيئة — لا تبنِ.',
        'إذا كانت عمليتك التشغيلية هي خندقك الدفاعي، فإن ERP الجاهز سيدمر الخندق. ابنِ.',
        'سلّم أصغر نسخة جاهزة للإنتاج في تسعين يوماً. تجنّب تطبيقات الانفجار الكبير في ستة أشهر.',
        'ERP المخصص عادةً أرخص على سبع سنوات لكنه يبدو أكثر تكلفة في اليوم الأول. هذا حيث تسوء معظم القرارات.',
      ],
    },

    cta: {
      eyebrow: 'تحدث مع الفريق الذي كتب هذا',
      title:   'هل تفكر في مشروع ERP؟ احصل على رأي بناء-أم-شراء من أشخاص ليس لديهم برنامج ليبيعوه لك.',
      button:  'احجز مكالمة 30 دقيقة',
    },

    backToHub: 'العودة إلى جميع الرؤى',
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

export default function InsightERPPage() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.en;

  const articleLd = {
    '@context':      'https://schema.org',
    '@type':         'Article',
    headline:        c.title,
    description:     c.dek,
    image:           ['https://symloop.com/insights/cover-erp.jpg'],
    datePublished:   '2026-04-08',
    dateModified:    '2026-04-08',
    author:          { '@type': 'Organization', name: 'Symloop' },
    publisher:       {
      '@type': 'Organization',
      name:    'Symloop',
      logo:    { '@type': 'ImageObject', url: 'https://symloop.com/images/symloop-logo.png' },
    },
    mainEntityOfPage: 'https://symloop.com/insights/erp/',
  };

  const breadcrumbs = [
    { name: 'Home',     url: 'https://symloop.com/' },
    { name: 'Insights', url: 'https://symloop.com/insights/' },
    { name: c.title,    url: 'https://symloop.com/insights/erp/' },
  ];

  return (
    <>
      <SEO
        title={`${c.title} — Symloop Insights`}
        description={c.dek}
        keywords="custom erp algeria, odoo algeria, sage algeria, build vs buy erp, enterprise software algeria, sme erp algeria, symloop insights"
        type="article"
        structuredData={articleLd}
        breadcrumbs={breadcrumbs}
        image="/insights/cover-erp.jpg"
      />

      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">

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

          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] border-y border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <Image
              src="/insights/cover-erp.jpg"
              alt={c.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

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
