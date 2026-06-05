// ============================================================================
// SYMLOOP — Insight: The real cost of building software in Algeria
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
    kind:        'Engineering POV',
    title:       'The real cost of building software in Algeria',
    dek:         'Honest pricing, honest timelines, and the hidden costs nobody mentions in the discovery call. Mobile, web, ERP, and AI projects compared side-by-side.',
    publishedAt: 'March 2026',
    readTime:    '12 min read',
    pages:       '18 pages',
    author:      'Symloop research',

    intro: [
      'Most Algerian businesses ask for a software quote and get a number. The number is wrong on purpose. It is the number the agency thinks will not scare them, not the number the project will actually cost. Six months into the engagement, the change requests start, the timeline slips, and the relationship turns adversarial. Everyone has been there. Almost nobody talks about it openly.',
      'This brief is the version we wish a client had handed us before we built our first project. Honest ranges for what real software actually costs in Algeria today, where the hidden costs are buried, and how to evaluate a quote that already landed in your inbox.',
    ],

    sections: [
      {
        heading: 'What the headline number actually means',
        body: [
          'When an Algerian software shop quotes you "two million dinars for a mobile app", they are quoting one of three things and not telling you which one. Sometimes it is the cost of writing the code. Sometimes it is the cost of writing the code plus a thin design phase. Sometimes it is a deposit on a much larger project where the rest of the cost lives in change requests. The three are not the same project, and the three end at very different total costs.',
          'A quote without a written scope is a marketing brochure, not a contract. Anyone can promise anything when nothing is written down. The first signal of a serious vendor is that they refuse to send a final number until the scope document is signed.',
        ],
        image: {
          src: '/insights/cost-bar-breakdown.jpg',
          alt: 'Editorial bar chart showing the cost breakdown of a software project as four hollow horizontal bars of increasing length.',
          caption: 'The headline number is usually the smallest bar. The expensive parts of a software project are the ones nobody quotes upfront.',
        },
      },
      {
        heading: 'Honest ranges for honest projects',
        body: [
          'For a real, production-grade mobile app — iOS and Android, real backend, real authentication, real launch — count between four and twelve million dinars in Algeria today. Below four, you are buying a prototype that will need to be rebuilt. Above twelve, you are paying for either complexity (fintech, healthcare) or for an agency margin that does not reflect the engineering work.',
          'For a custom web platform — multi-tenant, real database, admin dashboards, the things actual companies need — count between three and fifteen million dinars depending on whether it has to integrate with anything legacy. The integration is almost always more expensive than the application itself.',
          'For a custom ERP, see our companion brief — but the short version is twenty-five to one hundred and twenty million dinars for an Algerian SME. For an applied AI engagement, between five and forty million dinars depending on data quality and integration depth. The model is always the cheapest part.',
        ],
      },
      {
        heading: 'The hidden costs nobody quotes',
        body: [
          'Three line items kill more projects than the headline price ever does. The first is integration — every connection to a bank, a customs system, a logistics provider, a payroll engine, or a legacy ministry portal is a project of its own. Most quotes pretend this work does not exist.',
          'The second is data migration. Moving five years of Excel data into a new system is not a small task. It is detective work, cleanup, manual review, and emotional negotiation with the people who own the spreadsheets. Budget at minimum 15% of the build cost for migration. Most quotes budget zero.',
          'The third is the operational handover — training, documentation, the first three months of support after go-live. This is the difference between a project that runs and a project that gets quietly abandoned. Budget another 10% to 15%, even if the vendor tells you it is included.',
        ],
        image: {
          src: '/insights/cost-schedule-slip.jpg',
          alt: 'Editorial diagram of a 12-month timeline showing planned milestones above and the much later actual delivery dates below, connected by diagonal lines.',
          caption: "Schedule slip is a cost. Every month a project runs over is a month of opportunity cost the original quote did not price in.",
        },
      },
      {
        heading: 'How to evaluate a quote that already landed in your inbox',
        body: [
          'Three questions tell you whether a quote is honest. One: does it list assumptions explicitly? A quote with five lines of assumptions ("we assume the bank will provide a sandbox environment", "we assume legacy data is exported in CSV") is a vendor who has thought about the project. A quote without assumptions has not.',
          'Two: does it separate fixed-scope work from time-and-materials work? Software that is well understood can be quoted as a fixed price. Anything involving integration, data, or an unknown third party should be time-and-materials. A vendor who fixed-prices the unknown is hoping you will not notice when they invoice you for change requests later.',
          'Three: does it name the engineers? "A senior team will deliver the project" is not a commitment. The names of the people who will actually write the code, attached to a CV, is a commitment. The first is what failed projects look like before they fail.',
        ],
      },
      {
        heading: 'Why our quotes look more expensive on day one',
        body: [
          'Our quotes are usually 20% to 40% higher than the competition on the headline number. They are also usually 30% to 50% lower on the total cost of the engagement, because we price the integration, the migration, and the handover into the original quote rather than discovering them as change requests later.',
          'It looks worse on day one and feels better on day two hundred. That is the trade we have made deliberately. We would rather lose a deal in the first meeting than win one that ends in adversarial billing six months later.',
        ],
      },
    ],

    takeaways: {
      title: 'Five things to take from this brief',
      items: [
        'A quote without a written scope is a marketing brochure, not a contract.',
        'Mobile apps: 4–12M DZD. Web platforms: 3–15M DZD. Custom ERP: 25–120M DZD. AI engagements: 5–40M DZD.',
        'Integration is almost always more expensive than the application it connects to.',
        'Budget 15% for data migration and another 10–15% for handover. Most quotes budget zero for both.',
        'Honest quotes look more expensive on day one and cheaper on day two hundred. That is the trade.',
      ],
    },

    cta: {
      eyebrow: 'Talk to the team that wrote this',
      title:   'Have a quote you want a second opinion on? We will read it for free.',
      button:  'Book a 30-minute call',
    },

    backToHub: 'Back to all insights',
  },

  // ──────────────────────────────────────────────────────────────────────
  fr: {
    kind:        'POV ingénierie',
    title:       "Le vrai coût du développement logiciel en Algérie",
    dek:         "Tarifs honnêtes, délais honnêtes, et les coûts cachés que personne ne mentionne en réunion de cadrage. Projets mobile, web, ERP et IA comparés côte à côte.",
    publishedAt: 'Mars 2026',
    readTime:    '12 min de lecture',
    pages:       '18 pages',
    author:      'Recherche Symloop',

    intro: [
      "La plupart des entreprises algériennes demandent un devis logiciel et reçoivent un chiffre. Le chiffre est faux exprès. C'est le chiffre que l'agence pense ne pas leur faire peur, pas le chiffre que le projet va réellement coûter. Six mois après le démarrage, les demandes de changement commencent, les délais glissent, et la relation devient conflictuelle. Tout le monde est passé par là. Presque personne n'en parle ouvertement.",
      "Cette étude est la version que nous aurions aimé qu'un client nous tende avant de construire notre premier projet. Des fourchettes honnêtes sur ce que coûte réellement un vrai logiciel en Algérie aujourd'hui, où sont enterrés les coûts cachés, et comment évaluer un devis déjà arrivé dans votre boîte mail.",
    ],

    sections: [
      {
        heading: "Ce que signifie réellement le chiffre affiché",
        body: [
          "Quand un atelier logiciel algérien vous annonce « deux millions de dinars pour une application mobile », il vous annonce l'une des trois choses suivantes sans vous dire laquelle. Parfois c'est le coût d'écrire le code. Parfois c'est le coût d'écrire le code plus une phase de design fine. Parfois c'est un acompte sur un projet beaucoup plus important dont le reste du coût vit dans les demandes de changement. Les trois ne sont pas le même projet, et les trois finissent à des coûts totaux très différents.",
          "Un devis sans scope écrit est une brochure marketing, pas un contrat. N'importe qui peut promettre n'importe quoi quand rien n'est écrit. Le premier signal d'un prestataire sérieux est qu'il refuse d'envoyer un chiffre final tant que le document de scope n'est pas signé.",
        ],
        image: {
          src: '/insights/cost-bar-breakdown.jpg',
          alt: "Histogramme éditorial montrant la décomposition du coût d'un projet logiciel en quatre barres horizontales creuses de longueur croissante.",
          caption: "Le chiffre affiché est généralement la plus petite barre. Les parties chères d'un projet logiciel sont celles que personne ne chiffre en amont.",
        },
      },
      {
        heading: 'Fourchettes honnêtes pour des projets honnêtes',
        body: [
          "Pour une vraie application mobile en production — iOS et Android, vrai backend, vraie authentification, vrai lancement — comptez entre quatre et douze millions de dinars en Algérie aujourd'hui. En-dessous de quatre, vous achetez un prototype qui devra être réécrit. Au-dessus de douze, vous payez soit pour de la complexité (fintech, santé), soit pour une marge d'agence qui ne reflète pas le travail d'ingénierie.",
          "Pour une plateforme web sur mesure — multi-tenant, vraie base de données, dashboards admin, ce dont les vraies entreprises ont besoin — comptez entre trois et quinze millions de dinars selon les intégrations avec l'existant. L'intégration est presque toujours plus chère que l'application elle-même.",
          "Pour un ERP sur mesure, voir notre étude dédiée — mais la version courte est vingt-cinq à cent vingt millions de dinars pour une PME algérienne. Pour une mission IA appliquée, entre cinq et quarante millions de dinars selon la qualité des données et la profondeur d'intégration. Le modèle est toujours la partie la moins chère.",
        ],
      },
      {
        heading: "Les coûts cachés que personne ne chiffre",
        body: [
          "Trois lignes tuent plus de projets que le prix affiché. La première est l'intégration — chaque connexion à une banque, un système douanier, un prestataire logistique, un moteur de paie ou un portail ministériel hérité est un projet en soi. La plupart des devis font comme si ce travail n'existait pas.",
          "La deuxième est la migration des données. Déplacer cinq ans de données Excel vers un nouveau système n'est pas une petite tâche. C'est du travail de détective, du nettoyage, de la revue manuelle et de la négociation émotionnelle avec les personnes qui possèdent les feuilles de calcul. Budgétez au minimum 15 % du coût de construction pour la migration. La plupart des devis budgétisent zéro.",
          "La troisième est la transition opérationnelle — formation, documentation, les trois premiers mois de support après mise en production. C'est la différence entre un projet qui tourne et un projet discrètement abandonné. Budgétez encore 10 à 15 %, même si le prestataire vous dit que c'est inclus.",
        ],
        image: {
          src: '/insights/cost-schedule-slip.jpg',
          alt: "Diagramme éditorial d'une chronologie de 12 mois montrant les jalons planifiés en haut et les dates de livraison réelles bien plus tardives en bas, reliées par des lignes diagonales.",
          caption: "Le glissement de planning est un coût. Chaque mois de dépassement est un mois de coût d'opportunité que le devis original n'a pas pricé.",
        },
      },
      {
        heading: "Comment évaluer un devis déjà reçu",
        body: [
          "Trois questions vous disent si un devis est honnête. Un : liste-t-il explicitement les hypothèses ? Un devis avec cinq lignes d'hypothèses (« nous supposons que la banque fournira un environnement sandbox », « nous supposons que les données héritées sont exportées en CSV ») est un prestataire qui a réfléchi au projet. Un devis sans hypothèses ne l'a pas fait.",
          "Deux : sépare-t-il le travail à scope fixe du travail en régie ? Un logiciel bien compris peut être chiffré au prix fixe. Tout ce qui implique intégration, données ou un tiers inconnu doit être en régie. Un prestataire qui prix-fixe l'inconnu espère que vous ne remarquerez pas quand il vous facturera les changements plus tard.",
          "Trois : nomme-t-il les ingénieurs ? « Une équipe senior livrera le projet » n'est pas un engagement. Les noms des personnes qui écriront réellement le code, attachés à un CV, sont un engagement. Le premier est à quoi ressemblent les projets qui échouent avant qu'ils n'échouent.",
        ],
      },
      {
        heading: "Pourquoi nos devis paraissent plus chers le premier jour",
        body: [
          "Nos devis sont généralement 20 % à 40 % plus élevés que la concurrence sur le chiffre affiché. Ils sont aussi généralement 30 % à 50 % plus bas sur le coût total de la mission, parce que nous price l'intégration, la migration et la transition dans le devis original au lieu de les découvrir en demandes de changement plus tard.",
          "Cela paraît pire le premier jour et meilleur le deux-centième. C'est l'arbitrage que nous avons fait délibérément. Nous préférons perdre un deal en première réunion que d'en gagner un qui finit en facturation conflictuelle six mois plus tard.",
        ],
      },
    ],

    takeaways: {
      title: 'Cinq points à retenir',
      items: [
        "Un devis sans scope écrit est une brochure marketing, pas un contrat.",
        "Apps mobile : 4–12M DZD. Plateformes web : 3–15M DZD. ERP sur mesure : 25–120M DZD. Missions IA : 5–40M DZD.",
        "L'intégration est presque toujours plus chère que l'application qu'elle connecte.",
        "Budgétez 15 % pour la migration de données et encore 10–15 % pour la transition. La plupart des devis budgétisent zéro pour les deux.",
        "Les devis honnêtes paraissent plus chers le premier jour et moins chers le deux-centième. C'est l'arbitrage.",
      ],
    },

    cta: {
      eyebrow: "Parlez à l'équipe qui a écrit ceci",
      title:   "Vous avez un devis et voulez un second avis ? Nous le lirons gratuitement.",
      button:  'Réserver un appel de 30 minutes',
    },

    backToHub: 'Retour à toutes les études',
  },

  // ──────────────────────────────────────────────────────────────────────
  ar: {
    kind:        'وجهة نظر هندسية',
    title:       'التكلفة الحقيقية لبناء البرمجيات في الجزائر',
    dek:         'تسعير صادق، جداول زمنية صادقة، والتكاليف الخفية التي لا يذكرها أحد في مكالمة الاكتشاف. مقارنة جنباً إلى جنب لمشاريع الجوال والويب وERP والذكاء الاصطناعي.',
    publishedAt: 'مارس 2026',
    readTime:    '12 دقيقة قراءة',
    pages:       '18 صفحة',
    author:      'أبحاث سيملوب',

    intro: [
      'معظم الشركات الجزائرية تطلب عرض أسعار للبرمجيات وتحصل على رقم. الرقم خاطئ عمداً. إنه الرقم الذي تعتقد الوكالة أنه لن يخيفهم، لا الرقم الذي سيكلفه المشروع فعلاً. بعد ستة أشهر من بداية المهمة، تبدأ طلبات التغيير، وتنزلق الجداول الزمنية، وتتحول العلاقة إلى عدائية. الجميع مرّ بهذا. لا أحد تقريباً يتحدث عنه علناً.',
      'هذا التقرير هو النسخة التي نتمنى لو سلّمنا إياها عميل قبل أن نبني أول مشروع لنا. نطاقات صادقة لما يكلفه البرنامج الحقيقي في الجزائر اليوم، أين تختبئ التكاليف، وكيف تقيّم عرضاً وصل بالفعل إلى صندوق بريدك.',
    ],

    sections: [
      {
        heading: 'ماذا يعني الرقم المُعلَن فعلاً',
        body: [
          'عندما تعرض عليك ورشة برمجيات جزائرية «مليوني دينار لتطبيق جوال»، فإنها تعرض واحدة من ثلاثة أشياء دون أن تخبرك أيها. أحياناً تكون تكلفة كتابة الشفرة. أحياناً تكلفة كتابة الشفرة بالإضافة إلى مرحلة تصميم خفيفة. أحياناً تكون عربوناً على مشروع أكبر بكثير حيث تعيش بقية التكلفة في طلبات التغيير. الثلاثة ليست المشروع نفسه، والثلاثة تنتهي بتكاليف إجمالية مختلفة جداً.',
          'العرض بدون نطاق مكتوب هو كتيّب تسويقي، لا عقد. أي شخص يمكنه أن يعد بأي شيء عندما لا شيء مكتوب. أول إشارة على بائع جاد هو أنه يرفض إرسال رقم نهائي حتى يُوقَّع وثيقة النطاق.',
        ],
        image: {
          src: '/insights/cost-bar-breakdown.jpg',
          alt: 'مخطط بياني تحريري يُظهر تفصيل تكلفة مشروع برمجيات على شكل أربعة أعمدة أفقية فارغة بأطوال متزايدة.',
          caption: 'الرقم المُعلَن عادةً هو أصغر عمود. الأجزاء المكلفة من مشروع البرمجيات هي تلك التي لا يسعّرها أحد مسبقاً.',
        },
      },
      {
        heading: 'نطاقات صادقة لمشاريع صادقة',
        body: [
          'لتطبيق جوال حقيقي بمستوى إنتاج — iOS و Android، خلفية حقيقية، مصادقة حقيقية، إطلاق حقيقي — احسب بين أربعة واثني عشر مليون دينار في الجزائر اليوم. أقل من أربعة، أنت تشتري نموذجاً أولياً سيحتاج إلى إعادة بناء. أعلى من اثني عشر، أنت تدفع إما مقابل التعقيد (المالية، الصحة) أو مقابل هامش وكالة لا يعكس عمل الهندسة.',
          'لمنصة ويب مخصصة — متعددة المستأجرين، قاعدة بيانات حقيقية، لوحات إدارة، ما تحتاجه الشركات الفعلية — احسب بين ثلاثة وخمسة عشر مليون دينار حسب ما إذا كان عليها التكامل مع أي شيء قديم. التكامل دائماً أغلى من التطبيق نفسه.',
          'لـERP مخصص، انظر تقريرنا المرافق — لكن النسخة القصيرة هي خمسة وعشرون إلى مئة وعشرون مليون دينار لشركة جزائرية صغيرة أو متوسطة. لمهمة ذكاء اصطناعي تطبيقي، بين خمسة وأربعين مليون دينار حسب جودة البيانات وعمق التكامل. النموذج دائماً الجزء الأرخص.',
        ],
      },
      {
        heading: 'التكاليف الخفية التي لا يسعّرها أحد',
        body: [
          'ثلاثة بنود تقتل مشاريع أكثر مما يفعل السعر المُعلَن. الأول هو التكامل — كل اتصال ببنك أو نظام جمركي أو مزوّد لوجستي أو محرك رواتب أو بوابة وزارية قديمة هو مشروع بحد ذاته. معظم العروض تتظاهر بأن هذا العمل غير موجود.',
          'الثاني هو ترحيل البيانات. نقل خمس سنوات من بيانات Excel إلى نظام جديد ليس مهمة صغيرة. إنه عمل تحقيقي وتنظيف ومراجعة يدوية وتفاوض عاطفي مع الأشخاص الذين يملكون جداول البيانات. خصّص على الأقل 15% من تكلفة البناء للترحيل. معظم العروض تخصص صفراً.',
          'الثالث هو التسليم التشغيلي — التدريب، التوثيق، الأشهر الثلاثة الأولى من الدعم بعد الإطلاق. هذا هو الفرق بين مشروع يعمل ومشروع يُتخلى عنه بهدوء. خصّص 10% إلى 15% أخرى، حتى لو أخبرك البائع أنه مشمول.',
        ],
        image: {
          src: '/insights/cost-schedule-slip.jpg',
          alt: 'مخطط تحريري لخط زمني مدته 12 شهراً يُظهر المعالم المخططة في الأعلى وتواريخ التسليم الفعلية المتأخرة بكثير في الأسفل، مرتبطة بخطوط قطرية.',
          caption: 'انزلاق الجدول الزمني هو تكلفة. كل شهر يتجاوزه المشروع هو شهر من تكلفة الفرصة لم يسعّرها العرض الأصلي.',
        },
      },
      {
        heading: 'كيف تُقيّم عرضاً وصل بالفعل إلى صندوق بريدك',
        body: [
          'ثلاثة أسئلة تخبرك ما إذا كان العرض صادقاً. الأول: هل يسرد الافتراضات صراحةً؟ عرض بخمسة أسطر من الافتراضات («نفترض أن البنك سيوفر بيئة اختبار»، «نفترض أن البيانات القديمة مُصدَّرة بصيغة CSV») هو بائع فكّر في المشروع. عرض بدون افتراضات لم يفعل ذلك.',
          'الثاني: هل يفصل العمل ذي النطاق الثابت عن العمل بالوقت والمواد؟ البرنامج المفهوم جيداً يمكن تسعيره بسعر ثابت. أي شيء يتضمن تكاملاً أو بيانات أو طرفاً ثالثاً مجهولاً يجب أن يكون بالوقت والمواد. البائع الذي يسعّر المجهول بسعر ثابت يأمل أنك لن تلاحظ عندما يفوتر لك طلبات التغيير لاحقاً.',
          'الثالث: هل يسمي المهندسين؟ «فريق كبار سيسلم المشروع» ليس التزاماً. أسماء الأشخاص الذين سيكتبون الشفرة فعلاً، مرفقة بسيرة ذاتية، هي التزام. الأول هو ما تبدو عليه المشاريع الفاشلة قبل أن تفشل.',
        ],
      },
      {
        heading: 'لماذا تبدو عروضنا أغلى في اليوم الأول',
        body: [
          'عروضنا عادةً 20% إلى 40% أعلى من المنافسة على الرقم المُعلَن. وهي أيضاً عادةً 30% إلى 50% أقل على التكلفة الإجمالية للمهمة، لأننا نسعّر التكامل والترحيل والتسليم في العرض الأصلي بدلاً من اكتشافها كطلبات تغيير لاحقاً.',
          'تبدو أسوأ في اليوم الأول وأفضل في اليوم المئتين. هذا هو التوازن الذي اخترناه عمداً. نفضل أن نخسر صفقة في الاجتماع الأول على أن نربح صفقة تنتهي بفوترة عدائية بعد ستة أشهر.',
        ],
      },
    ],

    takeaways: {
      title: 'خمسة أشياء تأخذها من هذا التقرير',
      items: [
        'العرض بدون نطاق مكتوب هو كتيّب تسويقي، لا عقد.',
        'تطبيقات الجوال: 4–12 مليون دج. منصات الويب: 3–15 مليون دج. ERP مخصص: 25–120 مليون دج. مهام الذكاء الاصطناعي: 5–40 مليون دج.',
        'التكامل دائماً أغلى من التطبيق الذي يربطه.',
        'خصّص 15% لترحيل البيانات و10–15% أخرى للتسليم. معظم العروض تخصص صفراً للاثنين.',
        'العروض الصادقة تبدو أغلى في اليوم الأول وأرخص في اليوم المئتين. هذا هو التوازن.',
      ],
    },

    cta: {
      eyebrow: 'تحدث مع الفريق الذي كتب هذا',
      title:   'لديك عرض وتريد رأياً ثانياً؟ سنقرؤه مجاناً.',
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

export default function InsightCostPage() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.en;

  const articleLd = {
    '@context':      'https://schema.org',
    '@type':         'Article',
    headline:        c.title,
    description:     c.dek,
    image:           ['https://symloop.com/insights/cover-cost.jpg'],
    datePublished:   '2026-03-15',
    dateModified:    '2026-03-15',
    author:          { '@type': 'Organization', name: 'Symloop' },
    publisher:       {
      '@type': 'Organization',
      name:    'Symloop',
      logo:    { '@type': 'ImageObject', url: 'https://symloop.com/images/symloop-logo.png' },
    },
    mainEntityOfPage: 'https://symloop.com/insights/cost/',
  };

  const breadcrumbs = [
    { name: 'Home',     url: 'https://symloop.com/' },
    { name: 'Insights', url: 'https://symloop.com/insights/' },
    { name: c.title,    url: 'https://symloop.com/insights/cost/' },
  ];

  return (
    <>
      <SEO
        title={`${c.title} — Symloop Insights`}
        description={c.dek}
        keywords="software cost algeria, mobile app cost algeria, web development cost algeria, erp cost algeria, ai project cost algeria, software pricing algeria, symloop insights"
        type="article"
        structuredData={articleLd}
        breadcrumbs={breadcrumbs}
        image="/insights/cover-cost.jpg"
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
              src="/insights/cover-cost.jpg"
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
