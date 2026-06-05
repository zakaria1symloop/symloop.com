// ============================================================================
// SYMLOOP — Blog: 7 signes que votre entreprise algérienne a besoin d'un
// logiciel sur mesure — et 3 signes qu'elle n'en a pas besoin
//
// SEO keywords (FR primary):
//   logiciel sur mesure algérie, développement logiciel entreprise algérie,
//   erp sur mesure pme algérie, logiciel gestion entreprise alger,
//   transformation digitale entreprise algérie 2026
//
// Design: same editorial DNA as insights + big highlights for scanners.
// Pull quotes, stat callouts, highlighted **phrases** via renderRichText.
// ============================================================================

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight, ArrowLeft, MessageCircle } from 'lucide-react';
import SEO from '../../components/SEO';

const WHATSAPP_URL = 'https://wa.me/213549575512';

function renderRichText(text) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <span key={i} className="font-normal text-white border-b border-white/30">{part.slice(2, -2)}</span>;
    }
    return <span key={i}>{part}</span>;
  });
}

const CONTENT = {
  fr: {
    kind:        'Guide pratique',
    title:       "7 signes que votre entreprise a besoin d'un logiciel sur mesure — et 3 signes qu'elle n'en a pas besoin.",
    dek:         "Comment savoir si votre PME algérienne doit investir dans un logiciel sur mesure ou si une solution standard suffit. Un test en 10 points, honnête, écrit par des ingénieurs qui livrent les deux.",
    publishedAt: 'Avril 2026',
    readTime:    '8 min de lecture',
    author:      'Symloop',

    intro: [
      "Chaque semaine, une entreprise algérienne nous appelle en disant **« on a besoin d'un logiciel sur mesure »**. Dans la moitié des cas, elle a raison. Dans l'autre moitié, une solution standard à 50 000 DA résoudrait son problème mieux qu'un développement à 5 millions.",
      "Le problème n'est pas technique. C'est que **personne ne pose les bonnes questions avant de signer le devis**. Cette page est le test que nous aurions aimé donner à chaque prospect avant la première réunion.",
    ],

    sections: [
      {
        heading: 'Les 7 signes que vous avez besoin de sur mesure',
        body: [],
      },
      {
        heading: 'Signe 1 — Vos processus SONT votre avantage compétitif',
        body: [
          "Si la façon dont vous gérez vos commandes, votre stock ou votre production est **ce qui vous rend plus rapide ou moins cher que vos concurrents**, alors forcer ces processus dans un Odoo ou un Sage va **détruire votre avantage**. Un logiciel sur mesure préserve ce qui fonctionne et digitalise sans casser.",
        ],
      },
      {
        heading: "Signe 2 — Vous avez plus de 3 fichiers Excel critiques",
        body: [
          "Si votre entreprise tourne sur **des fichiers Excel que tout le monde modifie en même temps**, avec des formules que personne ne comprend, des colonnes cachées et des macros héritées d'un employé parti en 2019 — vous avez dépassé le point où Excel est un outil. **Excel est devenu votre ERP informel**, et il casse chaque semaine.",
        ],
      },
      {
        heading: "Signe 3 — Vous perdez plus de 2 heures par jour en saisie manuelle",
        body: [
          "Comptez honnêtement le temps que vos employés passent à **recopier des données d'un système à un autre** : du bon de commande vers la facturation, de la fiche client vers le devis, du relevé bancaire vers la comptabilité. **Si c'est plus de 2 heures par jour cumulées**, un logiciel sur mesure les récupère en moins de 3 mois.",
        ],
      },
      {
        heading: "Signe 4 — Votre solution actuelle a plus de 3 ans de personnalisations",
        body: [
          "Vous avez acheté un logiciel standard il y a 5 ans. Depuis, vous avez ajouté **15 personnalisations**, 8 modules tiers, et 3 « solutions de contournement » que tout le monde appelle « le système ». **À ce stade, vous payez plus cher pour maintenir les personnalisations que le logiciel original ne vaut.** Un sur mesure coûte moins et fait exactement ce que vous voulez.",
        ],
      },
      {
        heading: "Signe 5 — Vous devez intégrer avec des systèmes algériens spécifiques",
        body: [
          "**CIB, Edahabia, SATIM, CNRC, CNAS, Yalidine, ZR Express** — si votre logiciel doit se connecter à des systèmes de paiement, de douane, de sécurité sociale ou de livraison algériens, un logiciel standard international ne les connaît pas. **Ces intégrations nécessitent un développement local qui comprend le contexte algérien.**",
        ],
      },
      {
        heading: "Signe 6 — Vous avez refusé un client parce que votre système ne suivait pas",
        body: [
          "Le jour où vous dites « **non, on ne peut pas prendre cette commande parce que notre système ne gère pas ça** » est le jour où votre logiciel vous coûte de l'argent au lieu d'en gagner. Si c'est arrivé plus d'une fois cette année, vous avez besoin d'un système qui s'adapte à votre business — pas l'inverse.",
        ],
      },
      {
        heading: "Signe 7 — Vous payez pour des fonctionnalités que vous n'utilisez pas",
        body: [
          "La plupart des PME algériennes qui utilisent un ERP standard **paient pour 200 fonctionnalités et en utilisent 15**. C'est comme louer un immeuble de 10 étages pour occuper le rez-de-chaussée. **Un logiciel sur mesure ne contient que ce dont vous avez besoin** — il est plus simple à utiliser, plus rapide, et souvent moins cher sur 5 ans.",
        ],
      },
    ],

    pullQuote1: "Le jour où vous refusez un client parce que votre système ne suit pas est le jour où votre logiciel vous coûte de l'argent.",

    antiSections: [
      {
        heading: "Les 3 signes que vous N'avez PAS besoin de sur mesure",
        body: [],
      },
      {
        heading: "Anti-signe 1 — Vos processus sont standards dans votre secteur",
        body: [
          "Si votre directeur des opérations **ne peut pas nommer une seule chose que votre entreprise fait différemment** de la concurrence en termes de processus interne, alors un logiciel standard est la meilleure option. **Ne construisez pas du sur mesure pour des processus standards.** Achetez, configurez, formez. C'est 5x plus rapide et 3x moins cher.",
        ],
      },
      {
        heading: "Anti-signe 2 — Votre budget total est inférieur à 1 million de DA",
        body: [
          "Un logiciel sur mesure sérieux pour une PME algérienne coûte **entre 3 et 15 millions de DA** selon la complexité. Si votre budget est inférieur à 1 million, vous n'achetez pas du sur mesure — vous achetez un prototype qui cassera en production. **Utilisez plutôt un SaaS standard** (Odoo Community, Notion, Google Workspace) et gardez votre budget pour quand vous aurez vraiment besoin de construire.",
        ],
      },
      {
        heading: "Anti-signe 3 — Vous n'avez personne en interne pour utiliser le système",
        body: [
          "Un logiciel sur mesure sans **un propriétaire interne** qui comprend le système, forme les utilisateurs, et remonte les bugs est un logiciel mort dans 6 mois. **Si vous n'avez personne en interne capable d'être ce propriétaire**, commencez par embaucher cette personne avant de signer un devis de développement.",
        ],
      },
    ],

    pullQuote2: "Ne construisez pas du sur mesure pour des processus standards. Achetez, configurez, formez. C'est 5x plus rapide et 3x moins cher.",

    conclusion: {
      heading: "Le test en 30 secondes",
      body: [
        "Comptez vos signes. **Si vous avez 3 signes ou plus parmi les 7** et **aucun des 3 anti-signes**, vous avez probablement besoin d'un logiciel sur mesure. Si vous avez **1 ou 2 anti-signes**, commencez par les résoudre (budget, processus, équipe) avant de construire.",
        "Si vous n'êtes pas sûr, **décrivez votre situation en 5 minutes sur WhatsApp** — nous vous dirons honnêtement si vous avez besoin de nous ou pas. Nous n'avons aucun intérêt à vous vendre un projet dont vous n'avez pas besoin.",
      ],
    },

    cta: {
      eyebrow: "Parlez à un ingénieur — pas à un commercial",
      title:   "Décrivez votre situation en 5 minutes. Nous vous dirons si vous avez besoin de sur mesure ou pas.",
    },

    related: {
      insights: [
        { key: 'cost', name: 'Le vrai coût du développement logiciel en Algérie' },
        { key: 'erp',  name: "ERP sur mesure pour PME algériennes — au-delà d'Odoo" },
      ],
      services: [
        { key: 'software-engineering', name: 'Ingénierie logicielle' },
        { key: 'consulting',           name: 'Conseil technologique' },
      ],
    },
  },

  en: {
    kind:        'Practical guide',
    title:       '7 signs your company needs custom software — and 3 signs it does not.',
    dek:         "How to know if your Algerian SME should invest in custom software or if an off-the-shelf solution is enough. A 10-point test, honest, written by engineers who deliver both.",
    publishedAt: 'April 2026',
    readTime:    '8 min read',
    author:      'Symloop',
    intro: [
      "Every week, an Algerian company calls us saying **\"we need custom software\"**. Half the time, they are right. The other half, a 50,000 DZD off-the-shelf solution would solve their problem better than a 5-million-dinar development.",
      "The problem is not technical. It is that **nobody asks the right questions before signing the quote**. This page is the test we wish we could give every prospect before the first meeting.",
    ],
    sections: [
      { heading: 'The 7 signs you need custom software', body: [] },
      { heading: 'Sign 1 — Your processes ARE your competitive advantage', body: ["If the way you manage orders, inventory, or production is **what makes you faster or cheaper than competitors**, forcing those processes into Odoo or Sage will **destroy your advantage**. Custom software preserves what works and digitizes without breaking."] },
      { heading: 'Sign 2 — You have more than 3 critical Excel files', body: ["If your company runs on **Excel files that everyone modifies at the same time**, with formulas nobody understands — **Excel has become your informal ERP**, and it breaks every week."] },
      { heading: 'Sign 3 — You lose more than 2 hours per day to manual data entry', body: ["Count honestly the time employees spend **copying data from one system to another**. **If it is more than 2 hours per day combined**, custom software recovers them in less than 3 months."] },
      { heading: 'Sign 4 — Your current solution has 3+ years of customizations', body: ["You bought standard software 5 years ago. Since then, you added **15 customizations**, 8 third-party modules, and 3 workarounds. **At this point, you pay more to maintain the customizations than the original software is worth.**"] },
      { heading: 'Sign 5 — You need to integrate with Algeria-specific systems', body: ["**CIB, Edahabia, SATIM, CNRC, CNAS, Yalidine, ZR Express** — if your software must connect to Algerian payment, customs, social security, or delivery systems, an international standard software does not know them. **These integrations require local development.**"] },
      { heading: 'Sign 6 — You turned down a client because your system could not handle it', body: ["The day you say **\"no, we cannot take this order because our system does not handle that\"** is the day your software costs you money instead of making it."] },
      { heading: 'Sign 7 — You pay for features you do not use', body: ["Most Algerian SMEs using standard ERP **pay for 200 features and use 15**. **Custom software contains only what you need** — simpler, faster, and often cheaper over 5 years."] },
    ],
    pullQuote1: "The day you turn down a client because your system cannot handle it is the day your software costs you money.",
    antiSections: [
      { heading: 'The 3 signs you do NOT need custom software', body: [] },
      { heading: 'Anti-sign 1 — Your processes are standard in your sector', body: ["If your operations director **cannot name one thing your company does differently**, a standard solution is the best option. **Do not build custom for standard processes.** Buy, configure, train."] },
      { heading: 'Anti-sign 2 — Your total budget is below 1 million DZD', body: ["Serious custom software for an Algerian SME costs **between 3 and 15 million DZD**. Below 1 million, you are buying a prototype that will break in production. **Use a standard SaaS instead.**"] },
      { heading: 'Anti-sign 3 — You have nobody internal to own the system', body: ["Custom software without **an internal owner** who understands the system is dead software in 6 months. **Hire that person before signing a development quote.**"] },
    ],
    pullQuote2: "Do not build custom for standard processes. Buy, configure, train. 5x faster and 3x cheaper.",
    conclusion: {
      heading: 'The 30-second test',
      body: [
        "Count your signs. **If you have 3 or more of the 7** and **none of the 3 anti-signs**, you probably need custom software. If you have **1 or 2 anti-signs**, resolve them first (budget, processes, team) before building.",
        "If you are not sure, **describe your situation in 5 minutes on WhatsApp** — we will honestly tell you whether you need us or not.",
      ],
    },
    cta: { eyebrow: 'Talk to an engineer — not a salesperson', title: 'Describe your situation in 5 minutes. We will tell you if you need custom software or not.' },
    related: {
      insights: [
        { key: 'cost', name: 'The real cost of building software in Algeria' },
        { key: 'erp',  name: 'Custom ERP for Algerian SMEs — beyond Odoo' },
      ],
      services: [
        { key: 'software-engineering', name: 'Software Engineering' },
        { key: 'consulting',           name: 'Technology Consulting' },
      ],
    },
  },

  ar: {
    kind:        'دليل عملي',
    title:       '7 علامات أن شركتك تحتاج إلى برنامج مخصص — و3 علامات أنها لا تحتاج.',
    dek:         'كيف تعرف ما إذا كانت شركتك الجزائرية يجب أن تستثمر في برنامج مخصص أم أن حلاً جاهزاً يكفي. اختبار من 10 نقاط، صادق، كتبه مهندسون يسلّمون الاثنين.',
    publishedAt: 'أبريل 2026',
    readTime:    '8 دقائق قراءة',
    author:      'سيملوب',
    intro: [
      'كل أسبوع، شركة جزائرية تتصل بنا قائلة **"نحتاج إلى برنامج مخصص"**. في نصف الحالات، هي محقة. في النصف الآخر، حل جاهز بـ 50,000 دج سيحل مشكلتها أفضل من تطوير بـ 5 ملايين.',
      'المشكلة ليست تقنية. إنها أن **لا أحد يطرح الأسئلة الصحيحة قبل توقيع العرض**. هذه الصفحة هي الاختبار الذي نتمنى لو أعطيناه لكل عميل محتمل قبل الاجتماع الأول.',
    ],
    sections: [
      { heading: 'العلامات السبع أنك تحتاج برنامجاً مخصصاً', body: [] },
      { heading: 'العلامة 1 — عملياتك هي ميزتك التنافسية', body: ['إذا كانت طريقة إدارتك للطلبيات أو المخزون أو الإنتاج هي **ما يجعلك أسرع أو أرخص من المنافسين**، فإن إجبار هذه العمليات على أودو أو سيج سيُدمر ميزتك. البرنامج المخصص يحافظ على ما يعمل ويرقمن بدون كسر.'] },
      { heading: 'العلامة 2 — لديك أكثر من 3 ملفات Excel حرجة', body: ['إذا كانت شركتك تعمل على **ملفات Excel يعدّلها الجميع في نفس الوقت** — **أصبح Excel هو الـERP غير الرسمي لشركتك**، وهو ينهار كل أسبوع.'] },
      { heading: 'العلامة 3 — تفقد أكثر من ساعتين يومياً في الإدخال اليدوي', body: ['احسب بصدق الوقت الذي يقضيه موظفوك في **نسخ البيانات من نظام إلى آخر**. **إذا كان أكثر من ساعتين يومياً**، البرنامج المخصص يستعيدها في أقل من 3 أشهر.'] },
      { heading: 'العلامة 4 — حلّك الحالي عليه أكثر من 3 سنوات من التخصيصات', body: ['اشتريت برنامجاً جاهزاً قبل 5 سنوات. منذ ذلك الحين، أضفت **15 تخصيصاً** و8 وحدات إضافية و3 حلول بديلة. **في هذه المرحلة، أنت تدفع لصيانة التخصيصات أكثر مما يستحقه البرنامج الأصلي.**'] },
      { heading: 'العلامة 5 — تحتاج التكامل مع أنظمة جزائرية محددة', body: ['**CIB، الذهبية، SATIM، CNRC، CNAS، Yalidine، ZR Express** — إذا كان برنامجك يجب أن يتصل بأنظمة الدفع أو الجمارك أو الضمان الاجتماعي الجزائرية، فالبرنامج الجاهز الدولي لا يعرفها. **هذه التكاملات تحتاج تطويراً محلياً.**'] },
      { heading: 'العلامة 6 — رفضت عميلاً لأن نظامك لم يستطع التعامل', body: ['اليوم الذي تقول فيه **"لا، لا نستطيع قبول هذه الطلبية لأن نظامنا لا يتعامل مع ذلك"** هو اليوم الذي يكلفك فيه برنامجك مالاً بدلاً من أن يربحك.'] },
      { heading: 'العلامة 7 — تدفع مقابل ميزات لا تستخدمها', body: ['معظم الشركات الجزائرية التي تستخدم ERP جاهزاً **تدفع مقابل 200 ميزة وتستخدم 15**. **البرنامج المخصص لا يحتوي إلا على ما تحتاجه** — أبسط، أسرع، وغالباً أرخص على 5 سنوات.'] },
    ],
    pullQuote1: 'اليوم الذي ترفض فيه عميلاً لأن نظامك لا يستطيع التعامل هو اليوم الذي يكلفك فيه برنامجك مالاً.',
    antiSections: [
      { heading: 'العلامات الثلاث أنك لا تحتاج برنامجاً مخصصاً', body: [] },
      { heading: 'العلامة المضادة 1 — عملياتك معيارية في قطاعك', body: ['إذا كان مدير العمليات لديك **لا يستطيع تسمية شيء واحد تفعله شركتك بشكل مختلف** عن المنافسين — الحل الجاهز هو الخيار الأفضل. **لا تبنِ مخصصاً لعمليات معيارية.** اشترِ، هيّئ، درّب.'] },
      { heading: 'العلامة المضادة 2 — ميزانيتك الإجمالية أقل من مليون دج', body: ['البرنامج المخصص الجاد لشركة جزائرية يكلف **بين 3 و15 مليون دج**. أقل من مليون، أنت تشتري نموذجاً أولياً سينهار في الإنتاج. **استخدم SaaS جاهزاً بدلاً من ذلك.**'] },
      { heading: 'العلامة المضادة 3 — ليس لديك شخص داخلي لامتلاك النظام', body: ['برنامج مخصص بدون **مالك داخلي** يفهم النظام هو برنامج ميت خلال 6 أشهر. **وظّف هذا الشخص قبل توقيع عرض التطوير.**'] },
    ],
    pullQuote2: 'لا تبنِ مخصصاً لعمليات معيارية. اشترِ، هيّئ، درّب. أسرع 5 مرات وأرخص 3 مرات.',
    conclusion: {
      heading: 'الاختبار في 30 ثانية',
      body: [
        'احسب علاماتك. **إذا كان لديك 3 علامات أو أكثر من الـ7** و**لا واحدة من العلامات المضادة الـ3**، فأنت على الأرجح تحتاج برنامجاً مخصصاً.',
        'إذا لم تكن متأكداً، **صف وضعك في 5 دقائق على واتساب** — سنخبرك بصدق إذا كنت تحتاجنا أم لا.',
      ],
    },
    cta: { eyebrow: 'تحدث مع مهندس — لا مع موظف مبيعات', title: 'صف وضعك في 5 دقائق. سنخبرك إذا كنت تحتاج برنامجاً مخصصاً أم لا.' },
    related: {
      insights: [
        { key: 'cost', name: 'التكلفة الحقيقية لبناء البرمجيات في الجزائر' },
        { key: 'erp',  name: 'ERP مخصص للشركات الجزائرية — ما بعد أودو' },
      ],
      services: [
        { key: 'software-engineering', name: 'هندسة البرمجيات' },
        { key: 'consulting',           name: 'الاستشارات التقنية' },
      ],
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

export default function BlogCustomSoftwareSigns() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.fr;

  const articleLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: c.title, description: c.dek,
    image: ['https://symloop.com/blog/cover-custom-software-signs.jpg'],
    datePublished: '2026-04-12', dateModified: '2026-04-12',
    author: { '@type': 'Organization', name: 'Symloop' },
    publisher: { '@type': 'Organization', name: 'Symloop', logo: { '@type': 'ImageObject', url: 'https://symloop.com/images/symloop-logo.png' } },
    mainEntityOfPage: 'https://symloop.com/blog/signes-logiciel-sur-mesure-entreprise-algerie-2026/',
  };

  const breadcrumbs = [
    { name: 'Home', url: 'https://symloop.com/' },
    { name: 'Blog', url: 'https://symloop.com/blog/' },
    { name: c.title, url: 'https://symloop.com/blog/signes-logiciel-sur-mesure-entreprise-algerie-2026/' },
  ];

  return (
    <>
      <SEO
        title={`${c.title} — Symloop`}
        description={c.dek}
        keywords="logiciel sur mesure algérie, développement logiciel entreprise algérie, erp sur mesure pme algérie, logiciel gestion entreprise alger, transformation digitale entreprise algérie 2026, custom software algeria, odoo vs custom erp algeria, software development company algeria"
        type="article"
        structuredData={articleLd}
        breadcrumbs={breadcrumbs}
        image="/blog/cover-custom-software-signs.jpg"
      />

      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">

        {/* Hero */}
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-16">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <Link href="/blog/" className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors">{c.kind}</Link>
                <span className="h-px w-12 bg-white/20" />
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">{c.publishedAt}</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05]">{c.title}</motion.h1>
              <motion.p variants={fadeUp} className="mt-8 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">{c.dek}</motion.p>
              <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 pt-8 border-t border-white/[0.08]">
                <span>{c.author}</span><span>{c.readTime}</span>
              </motion.div>
            </motion.div>
          </div>
          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] border-y border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <Image src="/blog/cover-custom-software-signs.jpg" alt={c.title} fill priority sizes="100vw" className="object-cover" />
          </div>
        </section>

        {/* Body */}
        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

          {/* Intro */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="space-y-7 mb-20">
            {c.intro.map((p, i) => (
              <motion.p key={i} variants={fadeUp} className="text-xl lg:text-2xl text-white/80 leading-[1.55] font-light">{renderRichText(p)}</motion.p>
            ))}
          </motion.div>

          {/* 7 signs */}
          {c.sections.map((s, idx) => (
            <motion.section key={idx} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-12 lg:mb-16">
              <motion.div variants={fadeUp} className="flex items-baseline gap-5 mb-6">
                {idx > 0 && <span className="font-mono text-xs tracking-[0.15em] text-white/30">{String(idx).padStart(2, '0')}</span>}
                <h2 className={`${idx === 0 ? 'text-3xl lg:text-5xl' : 'text-2xl lg:text-3xl'} font-light tracking-tight text-white leading-[1.1]`}>{s.heading}</h2>
              </motion.div>
              {s.body.map((p, i) => (
                <motion.p key={i} variants={fadeUp} className="text-lg lg:text-xl text-white/70 leading-[1.65] ps-0 lg:ps-10">{renderRichText(p)}</motion.p>
              ))}
            </motion.section>
          ))}

          {/* Pull quote 1 */}
          {c.pullQuote1 && (
            <motion.figure initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="my-20 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16">
              <blockquote className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-white leading-[1.15]">« {c.pullQuote1} »</blockquote>
            </motion.figure>
          )}

          {/* 3 anti-signs */}
          {c.antiSections.map((s, idx) => (
            <motion.section key={`anti-${idx}`} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-12 lg:mb-16">
              <motion.div variants={fadeUp} className="flex items-baseline gap-5 mb-6">
                {idx > 0 && <span className="font-mono text-xs tracking-[0.15em] text-red-400/60">{String(idx).padStart(2, '0')}</span>}
                <h2 className={`${idx === 0 ? 'text-3xl lg:text-5xl' : 'text-2xl lg:text-3xl'} font-light tracking-tight text-white leading-[1.1]`}>{s.heading}</h2>
              </motion.div>
              {s.body.map((p, i) => (
                <motion.p key={i} variants={fadeUp} className="text-lg lg:text-xl text-white/70 leading-[1.65] ps-0 lg:ps-10">{renderRichText(p)}</motion.p>
              ))}
            </motion.section>
          ))}

          {/* Pull quote 2 */}
          {c.pullQuote2 && (
            <motion.figure initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="my-20 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16">
              <blockquote className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-white leading-[1.15]">« {c.pullQuote2} »</blockquote>
            </motion.figure>
          )}

          {/* Conclusion */}
          <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-16 border border-white/[0.08] bg-white/[0.015] p-8 lg:p-12">
            <motion.h2 variants={fadeUp} className="text-2xl lg:text-3xl font-light tracking-tight text-white mb-8">{c.conclusion.heading}</motion.h2>
            {c.conclusion.body.map((p, i) => (
              <motion.p key={i} variants={fadeUp} className="text-lg text-white/75 leading-relaxed mb-4">{renderRichText(p)}</motion.p>
            ))}
          </motion.section>
        </article>

        {/* CTA + related */}
        <section className="border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* CTA */}
              <div className="lg:col-span-6">
                <div className="flex items-center gap-3 mb-8">
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.cta.eyebrow}</span>
                  <span className="h-px w-12 bg-white/20" />
                </div>
                <h2 className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-10">{c.cta.title}</h2>
                <div className="flex flex-wrap gap-4">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors">
                    <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
                    <span>WhatsApp</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
                  </a>
                  <Link href="/contact/" className="group inline-flex items-center gap-3 border border-white/20 hover:border-white/60 text-white px-8 py-4 text-sm font-medium tracking-wide transition-colors">
                    <span>{locale === 'ar' ? 'نموذج الاتصال' : locale === 'en' ? 'Contact form' : 'Formulaire de contact'}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                  </Link>
                </div>
              </div>

              {/* Related */}
              <div className="lg:col-span-6">
                <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">
                  {isRtl ? '— ذات صلة' : locale === 'en' ? '— Related' : '— En lien'}
                </div>
                <ul className="space-y-px bg-white/[0.06] border border-white/[0.06]">
                  {c.related.insights.map((it) => (
                    <li key={it.key} className="bg-black">
                      <Link href={`/insights/${it.key}/`} className="group block p-6 transition-colors hover:bg-white/[0.025]">
                        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">Insight</div>
                        <h3 className="text-base font-light text-white leading-snug">{it.name}</h3>
                      </Link>
                    </li>
                  ))}
                  {c.related.services.map((s) => (
                    <li key={s.key} className="bg-black">
                      <Link href={`/services/${s.key}/`} className="group block p-6 transition-colors hover:bg-white/[0.025]">
                        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">Service</div>
                        <h3 className="text-base font-light text-white leading-snug">{s.name}</h3>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
