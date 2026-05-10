// ============================================================================
// SYMLOOP — /locations/alger/software-engineering/
// City × service: Custom software for Algiers institutions and enterprises.
// ============================================================================

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LocationServiceLayout from '../../../components/locations/LocationServiceLayout';

const CONTENT = {
  fr: {
    eyebrow:     'Alger · Capitale · Ingénierie logicielle',
    publishedAt: 'Mis à jour Avril 2026',
    title:       "Ingénierie logicielle à Alger — pour les systèmes qui ne peuvent pas tomber.",
    dek:         "Le seul atelier d'ingénierie logicielle basé à Alger qui livre des plateformes sur mesure pour les banques, les ministères et les grands groupes industriels de la capitale. Architecture, code, livraison, opération — sous un seul toit.",
    meta: {
      one:   'Alger · Centre · Bab Ezzouar',
      two:   'ERP · SaaS · Plateformes métier',
      three: 'Siège Symloop',
    },
    intro: [
      "Si vous dirigez l'IT d'une institution à Alger, vous avez probablement vécu **au moins un projet logiciel qui s'est mal terminé**. Un prestataire qui livre tard, du code que personne ne peut maintenir, des modules qui ne se parlent pas. C'est presque la norme — et c'est précisément le contexte dans lequel nous travaillons.",
      "Cette page n'est pas un argumentaire. C'est un portrait éditorial de **comment l'ingénierie logicielle sérieuse fonctionne réellement dans la capitale algérienne**, et pourquoi un atelier basé à Alger qui pratique les mêmes méthodes que les meilleures équipes de la Silicon Valley est l'option qui change le calcul.",
    ],
    contact: {
      eyebrow: '— Réponse en moins de 4 heures',
      title:   "Parlez à un ingénieur. Pas à un commercial.",
      body:    "Nous répondons sur WhatsApp en moins de 4 heures pendant les heures ouvrables d'Alger. Pour une question rapide, écrivez. Pour un brief de projet, appelez.",
      whatsapp: 'WhatsApp', phone: 'Appel direct', ai: 'Demander à notre assistant IA →',
    },
    stats: {
      eyebrow: '— Chiffres réels',
      items: [
        { value: '40+', label: 'Plateformes en production à Alger' },
        { value: '7',   label: "Années d'opération depuis Alger" },
        { value: '< 4h', label: 'Temps de réponse moyen' },
        { value: '100%', label: 'Code source transféré au client' },
      ],
    },
    pullQuote1: "Le ticket d'un projet à Alger n'est pas la livraison. C'est ce qu'il en reste deux ans plus tard.",
    pullQuote2: "Un atelier qui livre depuis sept ans à Alger n'a aucun intérêt à vous laisser bloqué.",
    sections: [
      {
        heading: "Pourquoi l'ingénierie logicielle à Alger est différente",
        body: [
          "Alger concentre trois choses qui changent fondamentalement le profil des projets logiciels : **les institutions financières et bancaires**, **l'administration centrale**, et **les sièges des grands groupes industriels**. Ces trois mondes partagent des contraintes que vous ne rencontrez nulle part ailleurs.",
          "Première contrainte : **le système hérité**. Toute nouvelle plateforme doit s'intégrer avec des mainframes des années 2000, des bases AS/400, des systèmes ministériels sans API, des passerelles bancaires SATIM. Deuxième contrainte : **la régulation**. La loi 18-07, les exigences de la Banque d'Algérie, les procédures de marché public. Troisième contrainte : **la dépendance fournisseur**. La plupart des projets logiciels à Alger meurent quand le prestataire disparaît, parce que le code n'a pas été transféré, parce que rien n'est documenté.",
        ],
      },
      {
        heading: "Ce que nous livrons à Alger",
        body: [
          "Nos engagements à Alger se concentrent sur quatre catégories. **Aucun n'est un site vitrine.**",
          "Premier : **les ERP sur mesure pour groupes algérois**. Production, comptabilité multi-entités, fiscalité algérienne, intégrations bancaires. Pour les groupes industriels, les distributeurs, les institutions publiques.",
          "Deuxième : **les plateformes SaaS multi-tenant** pour fintechs et insurtechs algéroises qui ont besoin d'une vraie architecture évolutive — pas d'un MVP qui casse à 1000 utilisateurs.",
          "Troisième : **les systèmes d'information métier sur mesure** pour les ministères et les administrations en transformation numérique. Avec NDA, infrastructure isolée, et procédures conformes au marché public.",
          "Quatrième : **les intégrations critiques** entre systèmes existants — entre une banque et un ministère, entre un ERP et la douane, entre un POS et l'administration fiscale.",
        ],
      },
      {
        heading: "La même rigueur pour l'institution publique et la startup de 5 personnes",
        body: [
          "Notre client le plus visible cette année est une institution publique en Algérie. Notre projet le plus exigeant techniquement est une plateforme SaaS multi-tenant pour un client en Europe. Mais sur le même calendrier, nous livrons un système de gestion de stock pour **une startup algéroise de 5 personnes** et un ERP léger pour un commerce de détail à Alger Centre.",
          "C'est volontaire. Nous refusons l'idée qu'une PME mérite un système moins bien conçu qu'une grande institution. **Le code est revu par les mêmes ingénieurs seniors.** Les tests automatisés, la CI/CD, l'observabilité, la documentation — tout est appliqué de la même façon.",
          "Ce que nous adaptons, c'est **le périmètre, pas la rigueur**. Une startup n'a pas besoin de microservices et de Kubernetes. Elle a besoin d'un système qui résout son problème, qui tient en production trois ans, et qu'elle peut faire évoluer sans dépendre de personne.",
        ],
      },
      {
        heading: "Comment nous travaillons avec les institutions algéroises",
        body: [
          "**Notre siège est à Alger.** Pour les missions dans la capitale, nos ingénieurs sont sur place. Nous comprenons les procédures de marché public, les exigences de **la loi 18-07**, les habilitations de sécurité, et les calendriers de validation budgétaire des grandes structures.",
          "Nous travaillons sous NDA dès la première réunion. Pour les institutions sensibles, nous intervenons sur infrastructure isolée et sur du code qui ne sort jamais de l'environnement client. **Notre facturation est conforme à la fiscalité algérienne** — pas de factures étrangères qui bloquent en validation comptable.",
          "Notre méthode reste la même que pour nos missions internationales : discovery technique, architecture cible, livraisons en sprints, code review à deux ingénieurs, tests automatisés, CI/CD, observabilité complète. **Aucune mission ne se termine sans transfert complet de propriété intellectuelle.**",
        ],
      },
      {
        heading: "D'Alger vers la longue durée",
        body: [
          "Plusieurs des plateformes que nous avons livrées à Alger tournent depuis cinq, six, sept ans **sans nous**. C'est volontaire et c'est le test ultime. Si une équipe interne peut maintenir, étendre et déboguer un système après notre départ, c'est que nous avons bien fait notre travail. Si elle ne peut pas, nous avons échoué — peu importe que la livraison initiale ait été parfaite.",
          "Cela vous concerne directement : vous n'achetez pas une dépendance. Vous achetez **une plateforme qui vous appartient et qui survit à n'importe quel changement de prestataire**. C'est l'inverse exact du modèle classique de la majorité des agences algériennes.",
        ],
      },
    ],
    related: {
      eyebrow: 'Pour aller plus loin',
      services: {
        label: 'Disciplines liées',
        items: [
          { key: 'software-engineering', name: 'Ingénierie logicielle' },
          { key: 'cloud',                name: 'Cloud & DevOps' },
          { key: 'consulting',           name: 'Conseil technologique' },
        ],
      },
      insights: {
        label: 'Études liées',
        items: [
          { key: 'erp',  name: "ERP sur mesure pour PME algériennes — au-delà d'Odoo" },
          { key: 'cost', name: 'Le vrai coût du développement logiciel en Algérie' },
        ],
      },
    },
    cta: {
      eyebrow: 'Parlez à un ingénieur logiciel basé à Alger',
      title:   "Vous avez un projet à Alger qui doit tenir dix ans ? Décrivez-le en cinq minutes.",
      button:  'Formulaire de contact',
    },
  },

  en: {
    eyebrow:     'Algiers · Capital · Software Engineering',
    publishedAt: 'Updated April 2026',
    title:       'Software engineering in Algiers — for systems that cannot fail.',
    dek:         "The only software engineering workshop headquartered in Algiers that ships custom platforms for the capital's banks, ministries, and large industrial groups. Architecture, code, delivery, operation — under one roof.",
    meta: { one: 'Algiers · Center · Bab Ezzouar', two: 'ERP · SaaS · Business platforms', three: 'Symloop HQ' },
    intro: [
      "If you run IT for an Algiers institution, you have probably lived through **at least one software project that ended badly**. A vendor that ships late, code nobody can maintain, modules that don't talk to each other. It is almost the norm — and that is exactly the context we work in.",
      'This page is not a pitch. It is an editorial portrait of **how serious software engineering actually works in the Algerian capital**, and why an Algiers-based workshop using the same methods as the best Silicon Valley teams is the option that changes the math.',
    ],
    contact: {
      eyebrow: '— Reply within 4 hours',
      title:   'Talk to an engineer. Not a salesperson.',
      body:    'We reply on WhatsApp within 4 hours during Algiers business hours. Quick question? Write. Project brief? Call.',
      whatsapp: 'WhatsApp', phone: 'Direct call', ai: 'Ask our AI assistant →',
    },
    stats: {
      eyebrow: '— Real numbers',
      items: [
        { value: '40+',  label: 'Platforms in production in Algiers' },
        { value: '7',    label: 'Years operating from Algiers' },
        { value: '< 4h', label: 'Average response time' },
        { value: '100%', label: 'Source code transferred to client' },
      ],
    },
    pullQuote1: 'The real measure of an Algiers software project is not the delivery. It is what is left of it two years later.',
    pullQuote2: "A workshop that has been shipping in Algiers for seven years has zero interest in leaving you stuck.",
    sections: [
      {
        heading: 'Why software engineering in Algiers is different',
        body: [
          'Algiers concentrates three things that fundamentally change the profile of software projects: **financial and banking institutions**, **central administration**, and **the headquarters of major industrial groups**. These three worlds share constraints you do not encounter anywhere else.',
          'First constraint: **legacy systems**. Any new platform must integrate with 2000s-era mainframes, AS/400 databases, ministry systems with no API, SATIM banking gateways. Second constraint: **regulation**. Law 18-07, Bank of Algeria requirements, public procurement procedures. Third constraint: **vendor lock-in**. Most software projects in Algiers die when the vendor disappears, because the code was never transferred, because nothing was documented.',
        ],
      },
      {
        heading: 'What we deliver in Algiers',
        body: [
          'Our engagements in Algiers focus on four categories. **None of them is a showcase website.**',
          'First: **custom ERPs for Algiers groups**. Production, multi-entity accounting, Algerian taxation, banking integrations. For industrial groups, distributors, public institutions.',
          'Second: **multi-tenant SaaS platforms** for Algiers fintechs and insurtechs that need real evolutionary architecture — not an MVP that breaks at 1,000 users.',
          'Third: **custom business information systems** for ministries and administrations in digital transformation. With NDAs, isolated infrastructure, and public-procurement-compliant procedures.',
          'Fourth: **critical integrations** between existing systems — between a bank and a ministry, between an ERP and customs, between a POS and the tax administration.',
        ],
      },
      {
        heading: 'The same rigor for the public institution and the 5-person startup',
        body: [
          'Our most visible client this year is a public institution in Algeria. Our most technically demanding project is a multi-tenant SaaS platform for a client in Europe. But on the same calendar, we are delivering a stock management system for **a 5-person Algiers startup** and a light ERP for a retail business in Algiers Center.',
          'This is intentional. We reject the idea that an SME deserves a less-well-designed system than a large institution. **The code is reviewed by the same senior engineers.** Automated tests, CI/CD, observability, documentation — everything is applied identically.',
          'What we adapt is **scope, not rigor**. A startup does not need microservices and Kubernetes. It needs a system that solves its problem, holds up in production for three years, and that it can evolve without depending on anyone.',
        ],
      },
      {
        heading: 'How we work with Algiers institutions',
        body: [
          '**Our headquarters is in Algiers.** For engagements in the capital, our engineers are on-site. We understand public procurement procedures, the requirements of **Law 18-07**, security clearances, the budget validation processes of large groups.',
          'We work under NDA from the first meeting. For sensitive institutions, we operate on isolated infrastructure and source code that never leaves the client environment. **Our invoicing complies with Algerian taxation** — no foreign invoices that get stuck in accounting validation.',
          'Our method stays the same as for our international engagements: technical discovery, target architecture, sprint deliveries, dual-engineer code review, automated tests, CI/CD, full observability. **No engagement ends without complete IP transfer.**',
        ],
      },
      {
        heading: 'From Algiers to the long term',
        body: [
          'Several of the platforms we delivered in Algiers have been running for five, six, seven years **without us**. That is intentional and it is the ultimate test. If an internal team can maintain, extend, and debug a system after we leave, we did our job well. If it cannot, we failed — regardless of how perfect the initial delivery was.',
          'This concerns you directly: you are not buying a dependency. You are buying **a platform that belongs to you and survives any vendor change**. It is the exact opposite of the classic Algerian agency model.',
        ],
      },
    ],
    related: {
      eyebrow: 'Going deeper',
      services: {
        label: 'Related disciplines',
        items: [
          { key: 'software-engineering', name: 'Software Engineering' },
          { key: 'cloud',                name: 'Cloud & DevOps' },
          { key: 'consulting',           name: 'Technology Consulting' },
        ],
      },
      insights: {
        label: 'Related insights',
        items: [
          { key: 'erp',  name: 'Custom ERP for Algerian SMEs — beyond Odoo' },
          { key: 'cost', name: 'The real cost of building software in Algeria' },
        ],
      },
    },
    cta: {
      eyebrow: 'Talk to a software engineer based in Algiers',
      title:   'Have an Algiers project that has to last ten years? Describe it in five minutes.',
      button:  'Contact form',
    },
  },

  ar: {
    eyebrow:     'الجزائر العاصمة · العاصمة · هندسة البرمجيات',
    publishedAt: 'محدّث أبريل 2026',
    title:       'هندسة البرمجيات في الجزائر العاصمة — لأنظمة لا يمكنها أن تفشل.',
    dek:         'ورشة هندسة البرمجيات الوحيدة التي مقرها الجزائر العاصمة وتسلّم منصات مخصصة لبنوك العاصمة ووزاراتها ومجموعاتها الصناعية الكبرى. هندسة، شيفرة، تسليم، تشغيل — تحت سقف واحد.',
    meta: { one: 'الجزائر العاصمة · الوسط · باب الزوار', two: 'ERP · SaaS · منصات الأعمال', three: 'مقر سيملوب' },
    intro: [
      'إذا كنت تدير تكنولوجيا المعلومات لمؤسسة في الجزائر العاصمة، فمن المحتمل أنك عشت **مشروع برمجيات واحداً على الأقل انتهى بشكل سيء**. مزود يسلّم متأخراً، شيفرة لا يمكن لأحد صيانتها، وحدات لا تتحدث مع بعضها. إنها تقريباً القاعدة — وهذا بالضبط السياق الذي نعمل فيه.',
      'هذه الصفحة ليست عرضاً تجارياً. إنها صورة تحريرية **لكيفية عمل هندسة البرمجيات الجادة فعلاً في العاصمة الجزائرية**، ولماذا ورشة مقرها الجزائر العاصمة تستخدم نفس الأساليب التي تستخدمها أفضل الفرق في وادي السيليكون هي الخيار الذي يغير الحسابات.',
    ],
    contact: {
      eyebrow: '— الرد في أقل من 4 ساعات',
      title:   'تحدث مع مهندس. لا مع موظف مبيعات.',
      body:    'نرد على واتساب في أقل من 4 ساعات خلال ساعات العمل في الجزائر العاصمة.',
      whatsapp: 'واتساب', phone: 'مكالمة مباشرة', ai: 'اسأل مساعدنا الذكي ←',
    },
    stats: {
      eyebrow: '— أرقام حقيقية',
      items: [
        { value: '+40',  label: 'منصة في الإنتاج بالجزائر العاصمة' },
        { value: '7',    label: 'سنوات من التشغيل من الجزائر العاصمة' },
        { value: '< 4س', label: 'متوسط زمن الاستجابة' },
        { value: '100%', label: 'شيفرة المصدر تُنقل إلى العميل' },
      ],
    },
    pullQuote1: 'المقياس الحقيقي لمشروع برمجيات في الجزائر العاصمة ليس التسليم. إنه ما تبقى منه بعد عامين.',
    pullQuote2: 'ورشة تسلّم منذ سبع سنوات في الجزائر العاصمة ليس لها أي مصلحة في تركك عالقاً.',
    sections: [
      {
        heading: 'لماذا هندسة البرمجيات في الجزائر العاصمة مختلفة',
        body: [
          'الجزائر العاصمة تركز ثلاثة أشياء تغير ملف مشاريع البرمجيات: **المؤسسات المالية والمصرفية**، **الإدارة المركزية**، و**مقرات المجموعات الصناعية الكبرى**.',
          'القيد الأول: **الأنظمة القديمة**. القيد الثاني: **التنظيم**. القيد الثالث: **القفل من البائع** — معظم مشاريع البرمجيات في الجزائر العاصمة تموت عندما يختفي المزود، لأن الشيفرة لم تُنقل أبداً.',
        ],
      },
      {
        heading: 'ما الذي نسلّمه في الجزائر العاصمة',
        body: [
          'مهامنا في الجزائر العاصمة تركز على أربع فئات. **لا واحدة منها موقع عرض.**',
          'الأولى: **أنظمة ERP مخصصة لمجموعات في العاصمة**.',
          'الثانية: **منصات SaaS متعددة المستأجرين** لشركات الفينتك والتأمين الناشئة.',
          'الثالثة: **أنظمة معلومات أعمال مخصصة** للوزارات والإدارات في التحول الرقمي.',
          'الرابعة: **التكاملات الحرجة** بين الأنظمة الموجودة.',
        ],
      },
      {
        heading: 'نفس الصرامة للمؤسسة العامة وللشركة الناشئة من 5 أشخاص',
        body: [
          'أكثر عملائنا ظهوراً مؤسسة عامة. أكثر مشاريعنا تطلباً تقنياً منصة SaaS لعميل في أوروبا. لكن في نفس الوقت، نسلّم نظام إدارة مخزون **لشركة ناشئة من 5 أشخاص**.',
          'هذا متعمد. **تتم مراجعة الشيفرة من قبل نفس المهندسين الكبار.** كل شيء يُطبَّق بشكل متطابق.',
          'ما نُكيّفه هو **النطاق، لا الصرامة**.',
        ],
      },
      {
        heading: 'كيف نعمل مع المؤسسات في الجزائر العاصمة',
        body: [
          '**مقرنا في الجزائر العاصمة.** نفهم إجراءات الصفقات العمومية، متطلبات **القانون 18-07**.',
          'نعمل تحت اتفاقية عدم إفصاح. **فوترتنا تتوافق مع الضرائب الجزائرية.**',
          '**لا تنتهي مهمة بدون نقل كامل للملكية الفكرية.**',
        ],
      },
      {
        heading: 'من الجزائر العاصمة إلى المدى الطويل',
        body: [
          'العديد من المنصات التي سلّمناها تعمل منذ خمس أو ست أو سبع سنوات **بدوننا**. هذا متعمد وهو الاختبار النهائي.',
          'هذا يعنيك مباشرة: أنت لا تشتري تبعية. أنت تشتري **منصة تنتمي إليك وتنجو من أي تغيير في المزود**.',
        ],
      },
    ],
    related: {
      eyebrow: 'للتعمق أكثر',
      services: {
        label: 'تخصصات ذات صلة',
        items: [
          { key: 'software-engineering', name: 'هندسة البرمجيات' },
          { key: 'cloud',                name: 'السحابة و DevOps' },
          { key: 'consulting',           name: 'الاستشارات التقنية' },
        ],
      },
      insights: {
        label: 'دراسات ذات صلة',
        items: [
          { key: 'erp',  name: 'تخطيط موارد المؤسسات المخصص للشركات الجزائرية — ما بعد أودو' },
          { key: 'cost', name: 'التكلفة الحقيقية لبناء البرمجيات في الجزائر' },
        ],
      },
    },
    cta: {
      eyebrow: 'تحدث مع مهندس برمجيات مقره الجزائر العاصمة',
      title:   'هل لديك مشروع في الجزائر العاصمة يجب أن يستمر عشر سنوات؟',
      button:  'نموذج الاتصال',
    },
  },
};

export default function Page() {
  return (
    <LocationServiceLayout
      CONTENT={CONTENT}
      pageUrl="https://symloop.com/locations/alger/software-engineering/"
      cityName="Alger"
      cityKey="alger"
      serviceType="Custom software engineering"
      schemaKeywords="ingenierie logicielle alger, developpement logiciel sur mesure alger, erp alger, saas alger, plateforme metier alger, software engineering algiers, custom software algiers, symloop alger software"
    />
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
