// ============================================================================
// SYMLOOP — /locations/alger/consulting/
// City × service: Technology consulting for Algiers institutions and enterprises.
// ============================================================================

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LocationServiceLayout from '../../../components/locations/LocationServiceLayout';

const CONTENT = {
  fr: {
    eyebrow:     'Alger · Capitale · Conseil technologique',
    publishedAt: 'Mis à jour Avril 2026',
    title:       "Le conseil technologique à Alger — par des ingénieurs qui livrent en production.",
    dek:         "Le seul atelier de conseil basé à Alger qui livre des revues d'architecture, des analyses build-vs-buy et des feuilles de route IA pour les institutions de la capitale. Pas des consultants à PowerPoint — des ingénieurs seniors qui ont déjà construit ce dont ils parlent.",
    meta: { one: 'Alger · Centre · Bab Ezzouar', two: 'Architecture · Build-vs-Buy · Stratégie IA', three: 'Siège Symloop' },
    intro: [
      "Si vous êtes DSI, CTO ou directeur de la transformation dans une institution à Alger, vous avez probablement déjà payé pour un conseil qui s'est terminé en **slide deck que personne ne lit**. C'est presque la norme dans le monde du consulting — et c'est exactement le contraire de ce que nous faisons.",
      "Cette page n'est pas un argumentaire. C'est un portrait éditorial de **comment le conseil technologique sérieux fonctionne réellement dans la capitale algérienne**, et pourquoi un conseil livré par des ingénieurs qui pratiquent quotidiennement la production change la nature même de la mission.",
    ],
    contact: { eyebrow: '— Réponse en moins de 4 heures', title: "Parlez à un ingénieur conseil. Pas à un commercial.", body: "Nous répondons sur WhatsApp en moins de 4 heures pendant les heures ouvrables d'Alger.", whatsapp: 'WhatsApp', phone: 'Appel direct', ai: 'Demander à notre assistant IA →' },
    stats: {
      eyebrow: '— Chiffres réels',
      items: [
        { value: '40+',  label: "Missions de conseil livrées depuis Alger" },
        { value: '2-4',  label: "Semaines du kickoff au rapport écrit" },
        { value: '< 4h', label: 'Temps de réponse moyen' },
        { value: '0',    label: 'Slides de framework générique' },
      ],
    },
    pullQuote1: "Le conseil technologique à Alger se mesure en décisions évitées, pas en pages produites.",
    pullQuote2: "Un consultant qui n'a jamais déployé en production ne peut pas vous dire honnêtement si vous devez construire ou acheter.",
    sections: [
      {
        heading: "Pourquoi le conseil technologique à Alger est différent",
        body: [
          "Le marché du conseil tech en Algérie est essentiellement vide pour ce qui compte vraiment. Les grands cabinets internationaux livrent des missions facturées en centaines de milliers d'euros avec **des consultants qui n'ont jamais écrit une ligne de code en production**. Les petites structures locales livrent des PowerPoint génériques. Entre les deux, il n'y a presque rien.",
          "C'est précisément cet espace que nous occupons. Nos missions de conseil sont livrées par les **mêmes ingénieurs qui livrent nos missions de production** — pas par une équipe consulting séparée qui ne touche jamais à la livraison réelle. Quand nous vous disons « construisez ceci » ou « n'achetez pas cela », nous parlons d'expérience, pas de framework.",
        ],
      },
      {
        heading: "Ce que nous livrons à Alger",
        body: [
          "Nos missions de conseil à Alger se concentrent sur cinq domaines.",
          "Premier : **les revues d'architecture indépendantes**. Vous avez un système existant ou un design planifié, vous voulez un avis externe sérieux. Nous lisons votre code, parlons à votre équipe, écrivons un rapport de 30 à 50 pages avec findings priorisés.",
          "Deuxième : **les analyses build-vs-buy**. Devez-vous construire votre système d'auth ou utiliser Auth0 ? Construire votre pipeline de données ou utiliser Fivetran ? Nous faisons les calculs spécifiques à votre contexte.",
          "Troisième : **les stratégies et feuilles de route IA**. La plupart des entreprises gaspillent leur budget IA sur les mauvaises choses. Nous identifions les 2-3 endroits où l'IA fait vraiment la différence — et les 10 où elle ne la fait pas.",
          "Quatrième : **les feuilles de route de modernisation**. Vous avez un système legacy auquel personne ne veut toucher. Nous traçons le chemin incrémental le plus sûr — strangler-fig, extraction de dépendances, plan phasé.",
          "Cinquième : **la topologie d'équipes d'ingénierie**. Votre équipe grandit et l'organigramme commence à montrer ses limites. Nous concevons des structures qui passent à l'échelle.",
        ],
      },
      {
        heading: "La même rigueur pour la grande institution et la PME",
        body: [
          "Notre client le plus visible cette année est une grande institution publique algéroise. Notre mission la plus large est une revue d'architecture sur un système traitant des centaines de millions de transactions. Mais sur le même calendrier, nous conseillons **une PME algéroise de 30 personnes** sur leur architecture cible pour les trois prochaines années.",
          "C'est volontaire. Nous refusons l'idée qu'une PME mérite un conseil moins sérieux qu'une grande institution. **Le même processus, les mêmes ingénieurs, le même rapport écrit.** L'échelle des recommandations est différente, mais la qualité du jugement est la même.",
          "Ce que nous adaptons, c'est **le périmètre, pas la rigueur**. Une PME a besoin de décisions claires sur 3 à 5 sujets critiques. C'est ce que nous livrons en deux semaines.",
        ],
      },
      {
        heading: "Comment nous travaillons avec les institutions algéroises",
        body: [
          "**Notre équipe est à Alger.** Pour les missions dans la capitale, nous sommes sur place. Une mission de conseil sérieuse commence par une semaine de lecture de code et d'instrumentation des flux de données — pas par un kickoff à PowerPoint. Suivie d'une semaine d'interviews structurés avec votre équipe, puis d'une semaine d'écriture du rapport.",
          "Nous travaillons sous NDA dès la première réunion. Pour les institutions sensibles, l'accès au code se fait en lecture seule sur infrastructure isolée. Notre facturation est conforme à la fiscalité algérienne, sans surprise.",
          "**Le livrable est toujours un rapport écrit** — typiquement 30 à 50 pages, avec findings priorisés, recommandations concrètes, calculs spécifiques à votre contexte, et critères de décision. Pas de framework générique. Plus un walkthrough en direct d'1h30 où nous présentons et répondons aux questions.",
        ],
      },
      {
        heading: "Le conseil qui mène à l'action — ou pas",
        body: [
          "Plusieurs des missions de conseil que nous avons livrées à Alger se sont terminées par **« nous avons décidé de ne rien faire »** — et c'est un excellent résultat. Si nous vous épargnons un projet à 50 millions de dinars qui aurait échoué, nous avons rentabilisé 100 fois notre mission. Nous ne sommes pas commissionnés sur ce que vous décidez de construire.",
          "Cela vous concerne directement : vous achetez un avis honnête, pas une recommandation orientée. Nous **n'avons aucun intérêt** à vous pousser vers une mission de livraison. Beaucoup de nos clients de conseil ne deviennent jamais des clients de livraison — et c'est très bien.",
        ],
      },
    ],
    related: {
      eyebrow: 'Pour aller plus loin',
      services: {
        label: 'Disciplines liées',
        items: [
          { key: 'consulting',           name: 'Conseil technologique' },
          { key: 'software-engineering', name: 'Ingénierie logicielle' },
          { key: 'ai',                   name: 'Intelligence Artificielle' },
        ],
      },
      insights: {
        label: 'Études liées',
        items: [
          { key: 'cost', name: 'Le vrai coût du développement logiciel en Algérie' },
          { key: 'erp',  name: "ERP sur mesure pour PME algériennes — au-delà d'Odoo" },
        ],
      },
    },
    cta: { eyebrow: 'Parlez à un ingénieur conseil basé à Alger', title: "Vous avez une décision technologique difficile à Alger ? Décrivez-la en cinq minutes.", button: 'Formulaire de contact' },
  },

  en: {
    eyebrow:     'Algiers · Capital · Technology Consulting',
    publishedAt: 'Updated April 2026',
    title:       'Technology consulting in Algiers — by engineers who ship into production.',
    dek:         "The only consulting workshop headquartered in Algiers that ships architecture reviews, build-vs-buy analyses, and AI roadmaps for capital institutions. Not PowerPoint consultants — senior engineers who have already built what they talk about.",
    meta: { one: 'Algiers · Center · Bab Ezzouar', two: 'Architecture · Build-vs-Buy · AI Strategy', three: 'Symloop HQ' },
    intro: [
      'If you are a CIO, CTO, or transformation director at an Algiers institution, you have probably already paid for consulting that ended in **a slide deck nobody reads**. It is almost the norm in the consulting world — and it is exactly the opposite of what we do.',
      'This page is not a pitch. It is an editorial portrait of **how serious technology consulting actually works in the Algerian capital**, and why consulting delivered by engineers who practice production daily changes the nature of the engagement.',
    ],
    contact: { eyebrow: '— Reply within 4 hours', title: 'Talk to a consulting engineer. Not a salesperson.', body: 'We reply on WhatsApp within 4 hours during Algiers business hours.', whatsapp: 'WhatsApp', phone: 'Direct call', ai: 'Ask our AI assistant →' },
    stats: {
      eyebrow: '— Real numbers',
      items: [
        { value: '40+',  label: 'Consulting engagements delivered from Algiers' },
        { value: '2-4',  label: 'Weeks from kickoff to written report' },
        { value: '< 4h', label: 'Average response time' },
        { value: '0',    label: 'Generic framework slides' },
      ],
    },
    pullQuote1: 'Technology consulting in Algiers is measured in decisions avoided, not pages produced.',
    pullQuote2: 'A consultant who has never deployed in production cannot honestly tell you whether to build or buy.',
    sections: [
      {
        heading: 'Why technology consulting in Algiers is different',
        body: [
          "The tech consulting market in Algeria is essentially empty for what really matters. Large international firms deliver six-figure engagements with **consultants who have never written a line of code in production**. Small local structures deliver generic PowerPoint. Between the two, there is almost nothing.",
          'That is exactly the space we occupy. Our consulting engagements are delivered by **the same engineers who deliver our production engagements** — not by a separate consulting team that never touches actual delivery. When we say "build this" or "do not buy that", we are speaking from experience, not from a framework.',
        ],
      },
      {
        heading: 'What we deliver in Algiers',
        body: [
          'Our consulting engagements in Algiers focus on five areas.',
          'First: **independent architecture reviews**. You have an existing system or a planned design, you want a serious external opinion. We read your code, talk to your team, write a 30-50 page report with prioritized findings.',
          'Second: **build-vs-buy analyses**. Should you build your auth system or use Auth0? Build your data pipeline or use Fivetran? We do the math specific to your context.',
          'Third: **AI strategies and roadmaps**. Most companies waste their AI budget on the wrong things. We identify the 2-3 places where AI really makes a difference.',
          'Fourth: **modernization roadmaps**. You have a legacy system nobody wants to touch. We trace the safest incremental path.',
          'Fifth: **engineering team topology**. Your team is growing and the org chart is showing its limits.',
        ],
      },
      {
        heading: 'The same rigor for the large institution and the SME',
        body: [
          "Our most visible client this year is a large Algiers public institution. Our broadest engagement is an architecture review on a system processing hundreds of millions of transactions. But on the same calendar, we are advising **a 30-person Algiers SME** on their target architecture for the next three years.",
          '**The same process, the same engineers, the same written report.** Scale of recommendations is different, quality of judgment is the same.',
          'What we adapt is **scope, not rigor**. An SME needs clear decisions on 3 to 5 critical topics. That is what we deliver in two weeks.',
        ],
      },
      {
        heading: 'How we work with Algiers institutions',
        body: [
          '**Our team is in Algiers.** A serious consulting engagement starts with a week of code reading and data flow instrumentation — not with a PowerPoint kickoff. Followed by a week of structured interviews with your team, then a week of report writing.',
          'We work under NDA from the first meeting. For sensitive institutions, code access is read-only on isolated infrastructure. Our invoicing complies with Algerian taxation, no surprises.',
          '**The deliverable is always a written report** — typically 30 to 50 pages, with prioritized findings, concrete recommendations, calculations specific to your context, and decision criteria. No generic framework. Plus a 1.5-hour live walkthrough where we present and answer questions.',
        ],
      },
      {
        heading: 'Consulting that leads to action — or not',
        body: [
          'Several of the consulting engagements we delivered in Algiers ended with **"we decided to do nothing"** — and that is an excellent outcome. If we save you a 50-million-dinar project that would have failed, we paid for ourselves 100 times over. We are not commissioned on what you decide to build.',
          'This concerns you directly: you are buying an honest opinion, not a biased recommendation. We **have no interest** in pushing you toward a delivery engagement.',
        ],
      },
    ],
    related: {
      eyebrow: 'Going deeper',
      services: {
        label: 'Related disciplines',
        items: [
          { key: 'consulting',           name: 'Technology Consulting' },
          { key: 'software-engineering', name: 'Software Engineering' },
          { key: 'ai',                   name: 'Artificial Intelligence' },
        ],
      },
      insights: {
        label: 'Related insights',
        items: [
          { key: 'cost', name: 'The real cost of building software in Algeria' },
          { key: 'erp',  name: 'Custom ERP for Algerian SMEs — beyond Odoo' },
        ],
      },
    },
    cta: { eyebrow: 'Talk to a consulting engineer based in Algiers', title: 'Have a hard technology decision in Algiers? Describe it in five minutes.', button: 'Contact form' },
  },

  ar: {
    eyebrow:     'الجزائر العاصمة · العاصمة · الاستشارات التقنية',
    publishedAt: 'محدّث أبريل 2026',
    title:       'الاستشارات التقنية في الجزائر العاصمة — من قبل مهندسين يسلّمون في الإنتاج.',
    dek:         'ورشة الاستشارات الوحيدة التي مقرها الجزائر العاصمة وتسلّم مراجعات الهندسة وتحليلات البناء-أم-الشراء وخرائط طريق الذكاء الاصطناعي لمؤسسات العاصمة. ليسوا مستشاري PowerPoint — مهندسون كبار بنوا بالفعل ما يتحدثون عنه.',
    meta: { one: 'الجزائر العاصمة · الوسط · باب الزوار', two: 'الهندسة · البناء-أم-الشراء · استراتيجية الذكاء الاصطناعي', three: 'مقر سيملوب' },
    intro: [
      'إذا كنت مدير تكنولوجيا أو مدير تحول في مؤسسة في الجزائر العاصمة، فمن المحتمل أنك دفعت بالفعل مقابل استشارات انتهت **بعرض شرائح لا يقرأه أحد**. إنها تقريباً القاعدة في عالم الاستشارات — وهي بالضبط عكس ما نفعله.',
      'هذه الصفحة ليست عرضاً تجارياً. إنها صورة **لكيفية عمل الاستشارات التقنية الجادة فعلاً في العاصمة الجزائرية**.',
    ],
    contact: { eyebrow: '— الرد في أقل من 4 ساعات', title: 'تحدث مع مهندس استشاري. لا مع موظف مبيعات.', body: 'نرد على واتساب في أقل من 4 ساعات.', whatsapp: 'واتساب', phone: 'مكالمة مباشرة', ai: 'اسأل مساعدنا الذكي ←' },
    stats: {
      eyebrow: '— أرقام حقيقية',
      items: [
        { value: '+40',  label: 'مهام استشارية تم تسليمها من الجزائر العاصمة' },
        { value: '2-4',  label: 'أسابيع من البدء إلى التقرير المكتوب' },
        { value: '< 4س', label: 'متوسط زمن الاستجابة' },
        { value: '0',    label: 'شرائح إطار عمل عامة' },
      ],
    },
    pullQuote1: 'الاستشارات التقنية في الجزائر العاصمة تُقاس بالقرارات المُتجنَّبة، لا بالصفحات المنتجة.',
    pullQuote2: 'مستشار لم ينشر أبداً في الإنتاج لا يستطيع أن يخبرك بصدق ما إذا كان عليك البناء أم الشراء.',
    sections: [
      {
        heading: 'لماذا الاستشارات التقنية في الجزائر العاصمة مختلفة',
        body: [
          'سوق الاستشارات التقنية في الجزائر فارغ في الأساس لما يهم حقاً. الشركات الدولية الكبرى تسلّم مهام بستة أرقام مع **مستشارين لم يكتبوا أبداً سطر شيفرة في الإنتاج**. الهياكل المحلية الصغيرة تسلّم PowerPoint عاماً.',
          'هذه بالضبط هي المساحة التي نشغلها. مهامنا الاستشارية يسلّمها **نفس المهندسين الذين يسلّمون مهام الإنتاج لدينا**. عندما نقول "ابنِ هذا" أو "لا تشترِ ذاك"، نتحدث من التجربة، لا من إطار عمل.',
        ],
      },
      {
        heading: 'ما الذي نسلّمه في الجزائر العاصمة',
        body: [
          'مهامنا الاستشارية في الجزائر العاصمة تركز على خمسة مجالات.',
          'الأول: **مراجعات هندسية مستقلة**. تقرير من 30 إلى 50 صفحة مع نتائج ذات أولوية.',
          'الثاني: **تحليلات البناء-أم-الشراء**. بحسابات خاصة بسياقك.',
          'الثالث: **استراتيجيات وخرائط طريق الذكاء الاصطناعي**.',
          'الرابع: **خرائط طريق التحديث** للأنظمة القديمة.',
          'الخامس: **طوبولوجيا فرق الهندسة**.',
        ],
      },
      {
        heading: 'نفس الصرامة للمؤسسة الكبيرة وللشركة الصغيرة',
        body: [
          'أكثر عملائنا ظهوراً مؤسسة عامة كبيرة في الجزائر العاصمة. لكن في نفس الوقت، نقدم الاستشارة **لشركة جزائرية من 30 شخصاً**.',
          '**نفس العملية، نفس المهندسين، نفس التقرير المكتوب.**',
          'ما نُكيّفه هو **النطاق، لا الصرامة**.',
        ],
      },
      {
        heading: 'كيف نعمل مع المؤسسات في الجزائر العاصمة',
        body: [
          '**فريقنا في الجزائر العاصمة.** المهمة الاستشارية الجادة تبدأ بأسبوع من قراءة الشيفرة وتجهيز تدفقات البيانات.',
          'نعمل تحت اتفاقية عدم إفصاح من الاجتماع الأول.',
          '**التسليم دائماً تقرير مكتوب** — عادة 30 إلى 50 صفحة. بالإضافة إلى جولة مباشرة لمدة ساعة ونصف.',
        ],
      },
      {
        heading: 'الاستشارة التي تؤدي إلى الفعل — أو لا',
        body: [
          'العديد من مهامنا الاستشارية انتهت بـ **"قررنا ألا نفعل شيئاً"** — وهذه نتيجة ممتازة. إذا وفّرنا عليك مشروعاً بـ 50 مليون دينار كان سيفشل، فقد دفعنا لأنفسنا 100 مرة.',
          'هذا يعنيك مباشرة: أنت تشتري رأياً صادقاً، لا توصية متحيزة.',
        ],
      },
    ],
    related: {
      eyebrow: 'للتعمق أكثر',
      services: {
        label: 'تخصصات ذات صلة',
        items: [
          { key: 'consulting',           name: 'الاستشارات التقنية' },
          { key: 'software-engineering', name: 'هندسة البرمجيات' },
          { key: 'ai',                   name: 'الذكاء الاصطناعي' },
        ],
      },
      insights: {
        label: 'دراسات ذات صلة',
        items: [
          { key: 'cost', name: 'التكلفة الحقيقية لبناء البرمجيات في الجزائر' },
          { key: 'erp',  name: 'تخطيط موارد المؤسسات المخصص للشركات الجزائرية — ما بعد أودو' },
        ],
      },
    },
    cta: { eyebrow: 'تحدث مع مهندس استشاري مقره الجزائر العاصمة', title: 'هل لديك قرار تقني صعب في الجزائر العاصمة؟', button: 'نموذج الاتصال' },
  },
};

export default function Page() {
  return (
    <LocationServiceLayout
      CONTENT={CONTENT}
      pageUrl="https://symloop.com/locations/alger/consulting/"
      cityName="Alger"
      cityKey="alger"
      serviceType="Technology consulting and architecture review"
      schemaKeywords="conseil technologique alger, revue architecture alger, build vs buy alger, strategie ia alger, conseil cto alger, modernisation legacy alger, consultation tech algiers, symloop consulting algiers"
    />
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
