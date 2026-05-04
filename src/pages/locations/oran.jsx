// ============================================================================
// SYMLOOP — /locations/oran/
//
// Oran — "El Bahia" (The Radiant), capital of the west, port + petrochem +
// automotive hub. Editorial portrait reflecting Mediterranean character,
// Arzew petrochemical complex, Renault automotive plant, USTO engineering
// school, and the Raï cultural identity.
// ============================================================================

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import SEO from '../../components/SEO';

const CONTENT = {
  fr: {
    eyebrow:     'Oran · Capitale de l\'Ouest',
    publishedAt: 'Mis à jour Mai 2026',
    title:       "Symloop à Oran — l'ingénierie pour El Bahia, port, pétrochimie, automobile.",
    dek:         "Oran n'est pas un faubourg d'Alger. C'est un pôle économique méditerranéen avec sa propre gravité — Arzew, Renault Tafraoui, le port commercial, et un tissu industriel qui exige une ingénierie logicielle à la hauteur de sa complexité.",
    meta: {
      one:   'Oran · Es Senia · Bir El Djir',
      two:   '1,5 million d\'habitants',
      three: '4 h depuis Alger',
    },

    intro: [
      "Oran est la deuxième ville d'Algérie en taille, mais en termes industriels, elle joue dans une autre catégorie. Le complexe pétrochimique d'Arzew traite une part majeure du gaz algérien exporté vers l'Europe. L'usine Renault de Tafraoui assemble une part significative des véhicules vendus dans le pays. Le port d'Oran est l'un des trois ports commerciaux majeurs du Maghreb. Ces trois actifs industriels demandent un logiciel à la hauteur — pas un Odoo générique installé un weekend.",
      "Cette page n'est pas un argumentaire commercial. C'est un portrait éditorial du travail que nous livrons à Oran et dans la région ouest, pour les groupes industriels, les sous-traitants automobiles, les opérateurs portuaires et les PME méditerranéennes qui composent le tissu économique de la wilaya.",
    ],

    sections: [
      {
        heading: "Le tissu industriel d'Oran",
        body: [
          "L'économie oranaise repose sur quatre piliers que nous servons en parallèle. **Premier pilier : la pétrochimie d'Arzew et de Bethioua** — complexes GNL, raffineries, unités de méthanol et d'ammoniac, dont les programmes IT couvrent SCADA, gestion d'actifs, maintenance prédictive, et reporting environnemental. **Deuxième pilier : l'industrie automobile** — Renault Algérie à Tafraoui et son écosystème de sous-traitants locaux qui produisent châssis, sièges, plastiques et composants électriques.",
          "**Troisième pilier : la logistique portuaire et maritime** — port d'Oran, port d'Arzew (méthaniers), services douaniers, transitaires, transporteurs routiers vers les hauts plateaux. **Quatrième pilier : le tissu PME méditerranéen** — agroalimentaire, textile, matériaux de construction, distribution régionale. Tous partagent une caractéristique : ils opèrent à une échelle qui dépasse les outils ERP standards mais qui ne justifie pas l'investissement dans une suite SAP à 50 millions d'euros.",
        ],
      },
      {
        heading: "Ce que nous livrons à Oran",
        body: [
          "Nos engagements oranais se répartissent dans cinq catégories. **Systèmes industriels et IoT** pour les sous-traitants automobiles et les industriels d'Arzew : capteurs sur lignes de production, monitoring temps réel, maintenance prédictive, intégration MES-ERP. **Plateformes de logistique portuaire** : gestion de quais, suivi de conteneurs, dématérialisation douanière, intégrations avec les transitaires.",
          "**ERP sur mesure** pour les PME industrielles oranaises — production, traçabilité, comptabilité multi-sites, conformité fiscale algérienne. **Applications mobiles** pour les opérateurs de distribution régionale qui couvrent le quart ouest du pays. **Conseil technologique** pour les directions IT des grands industriels qui pilotent leur transformation numérique sous contrainte de Vision 2030.",
        ],
      },
      {
        heading: "L'avantage d'opérer entre Alger et Oran",
        body: [
          "Notre siège est à Alger, à quatre heures de route d'Oran. Pour chaque mission oranaise, nous prévoyons des visites sur site régulières : généralement une fois toutes les deux semaines pendant la phase de discovery, puis une fois par mois en livraison. Le travail à distance fonctionne pour le code ; il ne remplace jamais une journée passée sur la chaîne de production à Tafraoui ou dans une salle de contrôle à Arzew.",
          "Nous comprenons la spécificité oranaise : un tissu industriel mediterranée à forte présence française historique, des décisions techniques souvent influencées par les standards européens, et un pool de talents formés à l'USTO Mohamed Boudiaf, Oran 1 et Oran 2. Cette compréhension change la nature des conversations que nous avons avec nos clients — moins de théorie, plus de pragmatisme méditerranéen.",
        ],
      },
      {
        heading: "L'écosystème d'ingénierie oranais",
        body: [
          "Oran forme une part significative des ingénieurs informatiques de l'ouest algérien. USTO Mohamed Boudiaf, Université d'Oran 1 (Ahmed Ben Bella), Université d'Oran 2 (Mohamed Ben Ahmed), ENP Oran — ces institutions produisent des centaines de diplômés par an en informatique, en automatique industrielle, en génie pétrolier et en mécanique. Une partie significative de notre équipe a été formée dans ces écoles avant de rejoindre Symloop.",
          "Cet écosystème est aussi celui dans lequel nos clients oranais recrutent. Quand un industriel d'Arzew nous demande de l'aider à structurer une équipe IT interne, nous connaissons le marché du travail oranais — niveaux de compétence en automatisme industriel, fourchettes de rémunération à Es Senia, profils disponibles dans l'écosystème pétrochimique local.",
        ],
      },
    ],

    related: {
      eyebrow: 'Pour aller plus loin',
      services: {
        label: 'Disciplines à Oran',
        items: [
          { key: 'iot',                  name: 'IoT et systèmes industriels' },
          { key: 'software-engineering', name: 'Ingénierie logicielle' },
          { key: 'cloud',                name: 'Cloud & DevOps' },
          { key: 'consulting',           name: 'Conseil technologique' },
        ],
      },
      insights: {
        label: 'Études liées',
        items: [
          { key: 'oil-gas',  name: "Pétrole et gaz IT — du verrouillage fournisseur au contrôle indépendant" },
          { key: 'erp',      name: "ERP sur mesure pour PME algériennes — au-delà d'Odoo" },
          { key: 'ai',       name: "L'IA en production — adoption pratique" },
        ],
      },
    },

    cta: {
      eyebrow: 'Parlez à un ingénieur basé à Alger',
      title:   "Vous dirigez une organisation à Oran, à Arzew, ou dans la région ouest ? Décrivez votre situation. Nous serons sur site sous deux semaines.",
      button:  'Réserver un appel de 30 minutes',
    },
  },

  en: {
    eyebrow:     'Oran · Western capital',
    publishedAt: 'Updated May 2026',
    title:       'Symloop in Oran — engineering for El Bahia, port, petrochem, automotive.',
    dek:         'Oran is not an Algiers suburb. It is a Mediterranean economic pole with its own gravity — Arzew, Renault Tafraoui, the commercial port, and an industrial fabric that demands software engineering at the level of its complexity.',
    meta: {
      one:   'Oran · Es Senia · Bir El Djir',
      two:   '1.5 million inhabitants',
      three: '4 h from Algiers',
    },

    intro: [
      "Oran is the second city of Algeria by size, but in industrial terms, it plays in a different league. The Arzew petrochemical complex processes a major share of Algerian gas exported to Europe. The Renault plant in Tafraoui assembles a significant share of the vehicles sold in the country. The port of Oran is one of the three major commercial ports of the Maghreb. These three industrial assets demand software at their level — not a generic Odoo installed in a weekend.",
      "This page is not a sales pitch. It is an editorial portrait of the work we deliver in Oran and the western region, for industrial groups, automotive subcontractors, port operators and Mediterranean SMEs that make up the wilaya's economic fabric.",
    ],

    sections: [
      {
        heading: "Oran's industrial fabric",
        body: [
          "The Oran economy rests on four pillars we serve in parallel. **First pillar: the Arzew and Bethioua petrochemical complex** — LNG complexes, refineries, methanol and ammonia units, whose IT programs cover SCADA, asset management, predictive maintenance, and environmental reporting. **Second pillar: the automotive industry** — Renault Algérie at Tafraoui and its ecosystem of local subcontractors producing chassis, seats, plastics and electrical components.",
          "**Third pillar: port and maritime logistics** — Port of Oran, Port of Arzew (LNG carriers), customs services, freight forwarders, road carriers serving the high plains. **Fourth pillar: the Mediterranean SME fabric** — food processing, textile, construction materials, regional distribution. All share one characteristic: they operate at a scale that exceeds standard ERP tools but does not justify the investment in a 50-million-euro SAP suite.",
        ],
      },
      {
        heading: 'What we deliver in Oran',
        body: [
          "Our Oran engagements fall into five categories. **Industrial systems and IoT** for automotive subcontractors and Arzew industrials: production-line sensors, real-time monitoring, predictive maintenance, MES-ERP integration. **Port logistics platforms**: berth management, container tracking, customs dematerialization, freight forwarder integrations.",
          "**Custom ERPs** for Oran industrial SMEs — production, traceability, multi-site accounting, Algerian tax compliance. **Mobile applications** for regional distribution operators covering the western quarter of the country. **Technology consulting** for IT directors of major industrials piloting their digital transformation under Vision 2030 pressure.",
        ],
      },
      {
        heading: 'The advantage of operating between Algiers and Oran',
        body: [
          "Our HQ is in Algiers, four hours by road from Oran. For every Oran engagement, we plan regular on-site visits: usually every two weeks during discovery, then monthly during delivery. Remote work is fine for code; it never replaces a day on the production line at Tafraoui or in a control room at Arzew.",
          "We understand Oran specificity: a Mediterranean industrial fabric with strong historical French presence, technical decisions often influenced by European standards, and a talent pool trained at USTO Mohamed Boudiaf, Oran 1 and Oran 2. This understanding changes the nature of the conversations we have with our clients — less theory, more Mediterranean pragmatism.",
        ],
      },
      {
        heading: 'The Oran engineering ecosystem',
        body: [
          "Oran trains a significant share of western Algeria's computer engineers. USTO Mohamed Boudiaf, Université d'Oran 1 (Ahmed Ben Bella), Université d'Oran 2 (Mohamed Ben Ahmed), ENP Oran — these institutions produce hundreds of graduates a year in computer science, industrial automation, petroleum engineering and mechanical engineering. A significant share of our team was trained in these schools before joining Symloop.",
          "This ecosystem is also where our Oran clients recruit. When an Arzew industrial asks us to help structure an internal IT team, we know the Oran job market — automation engineering skill levels, salary ranges in Es Senia, available profiles in the local petrochemical ecosystem.",
        ],
      },
    ],

    related: {
      eyebrow: 'Going deeper',
      services: {
        label: 'Disciplines in Oran',
        items: [
          { key: 'iot',                  name: 'IoT & Industrial Systems' },
          { key: 'software-engineering', name: 'Software Engineering' },
          { key: 'cloud',                name: 'Cloud & DevOps' },
          { key: 'consulting',           name: 'Technology Consulting' },
        ],
      },
      insights: {
        label: 'Related insights',
        items: [
          { key: 'oil-gas',  name: 'Oil and gas IT — from vendor lock-in to independent control' },
          { key: 'erp',      name: 'Custom ERP for Algerian SMEs — beyond Odoo' },
          { key: 'ai',       name: 'AI in production — pragmatic adoption' },
        ],
      },
    },

    cta: {
      eyebrow: 'Talk to an engineer based in Algiers',
      title:   'Run an organization in Oran, Arzew, or the western region? Describe your situation. We will be on-site within two weeks.',
      button:  'Book a 30-minute call',
    },
  },

  ar: {
    eyebrow:     'وهران · عاصمة الغرب',
    publishedAt: 'محدّث مايو 2026',
    title:       'سيملوب في وهران — هندسة لـ"الباهية"، الميناء، البتروكيماويات، السيارات.',
    dek:         'وهران ليست ضاحية للجزائر العاصمة. هي قطب اقتصادي متوسطي بثقالته الخاصة — أرزيو، رنو تفراوي، الميناء التجاري، ونسيج صناعي يتطلّب هندسة برمجية على مستوى تعقيده.',
    meta: {
      one:   'وهران · السانية · بئر الجير',
      two:   '1.5 مليون نسمة',
      three: '4 ساعات من الجزائر العاصمة',
    },

    intro: [
      'وهران هي ثاني مدينة في الجزائر من حيث الحجم، لكنها صناعياً تلعب في فئة أخرى. مجمع أرزيو البتروكيماوي يعالج حصة كبيرة من الغاز الجزائري المُصدَّر إلى أوروبا. مصنع رنو في تفراوي يجمّع حصة كبيرة من المركبات المباعة في البلد. ميناء وهران أحد الموانئ التجارية الكبرى الثلاثة في المغرب العربي. هذه الأصول الصناعية الثلاثة تتطلّب برمجيات على مستواها — وليس Odoo عاماً يُثبَّت في عطلة نهاية أسبوع.',
      'هذه الصفحة ليست عرضاً تجارياً. هي صورة تحريرية للعمل الذي نسلّمه في وهران والمنطقة الغربية، للمجموعات الصناعية ومقاولي قطاع السيارات ومشغّلي الموانئ والشركات الصغيرة والمتوسطة المتوسطية التي تشكّل النسيج الاقتصادي للولاية.',
    ],

    sections: [
      {
        heading: 'النسيج الصناعي لوهران',
        body: [
          'يقوم اقتصاد وهران على أربع ركائز نخدمها بالتوازي. **الأولى: مجمع أرزيو وبطيوة البتروكيماوي** — مجمعات GNL ومصافٍ ووحدات ميثانول وأمونيا، برامج تكنولوجيا المعلومات فيها تغطّي SCADA وإدارة الأصول والصيانة التنبؤية والتقارير البيئية. **الثانية: صناعة السيارات** — رنو الجزائر في تفراوي ونظام مقاوليه المحليين الذين ينتجون الهياكل والمقاعد والبلاستيك والمكوّنات الكهربائية.',
          '**الثالثة: اللوجستيك المينائي والبحري** — ميناء وهران، ميناء أرزيو (ناقلات الميثان)، خدمات الجمارك، الوكلاء، الناقلون البريون نحو الهضاب العليا. **الرابعة: نسيج الشركات الصغيرة والمتوسطة المتوسطية** — صناعة غذائية، نسيج، مواد بناء، توزيع إقليمي. تتشارك جميعها خاصية واحدة: تعمل على مستوى يتجاوز أدوات ERP العادية لكنه لا يبرّر استثمار 50 مليون يورو في حزمة SAP.',
        ],
      },
      {
        heading: 'ما نسلّمه في وهران',
        body: [
          'تنقسم مهامنا في وهران إلى خمس فئات. **أنظمة صناعية و IoT** لمقاولي قطاع السيارات وصناعيي أرزيو: مستشعرات على خطوط الإنتاج، مراقبة في الوقت الحقيقي، صيانة تنبؤية، تكامل MES-ERP. **منصات اللوجستيك المينائي**: إدارة الأرصفة، تتبع الحاويات، رقمنة الجمارك، تكاملات مع الوكلاء.',
          '**ERP مخصصة** لشركات وهران الصناعية الصغيرة والمتوسطة — الإنتاج، التتبع، المحاسبة متعددة المواقع، الامتثال الضريبي الجزائري. **تطبيقات الجوال** لمشغّلي التوزيع الإقليميين الذين يغطّون الربع الغربي للبلد. **استشارات تقنية** لمدراء IT في الصناعيين الكبار الذين يقودون تحوّلهم الرقمي تحت ضغط رؤية 2030.',
        ],
      },
      {
        heading: 'ميزة العمل بين الجزائر العاصمة ووهران',
        body: [
          'مقرّنا في الجزائر العاصمة، على بُعد أربع ساعات بالطريق من وهران. لكل مهمة في وهران، نخطّط لزيارات منتظمة في الموقع: عادةً مرة كل أسبوعين خلال مرحلة الاكتشاف، ثم شهرياً خلال التسليم. العمل عن بُعد جيد للكود؛ لا يحلّ محل يوم على خط الإنتاج في تفراوي أو في غرفة تحكم في أرزيو.',
          'نفهم خصوصية وهران: نسيج صناعي متوسطي بحضور فرنسي تاريخي قوي، قرارات تقنية متأثّرة غالباً بالمعايير الأوروبية، ومجمع مواهب مدرَّب في USTO محمد بوضياف ووهران 1 ووهران 2. هذا الفهم يغيّر طبيعة المحادثات التي نجريها مع عملائنا — نظرية أقل، براغماتية متوسطية أكثر.',
        ],
      },
      {
        heading: 'النظام الهندسي في وهران',
        body: [
          'تدرّب وهران حصة كبيرة من مهندسي الإعلام الآلي في غرب الجزائر. USTO محمد بوضياف، جامعة وهران 1 (أحمد بن بلة)، جامعة وهران 2 (محمد بن أحمد)، ENP وهران — هذه المؤسسات تنتج مئات الخريجين سنوياً في علوم الكمبيوتر والأتمتة الصناعية وهندسة البترول والميكانيك. حصة كبيرة من فريقنا تدرّبت في هذه المدارس قبل الانضمام إلى سيملوب.',
          'هذا النظام هو أيضاً الذي يوظّف منه عملاؤنا الوهرانيون. عندما يطلب منا صناعي في أرزيو المساعدة في هيكلة فريق IT داخلي، نعرف سوق العمل الوهراني — مستويات مهارات هندسة الأتمتة، نطاقات الرواتب في السانية، الملفات المتاحة في النظام البتروكيماوي المحلي.',
        ],
      },
    ],

    related: {
      eyebrow: 'لقراءة المزيد',
      services: {
        label: 'التخصصات في وهران',
        items: [
          { key: 'iot',                  name: 'IoT والأنظمة الصناعية' },
          { key: 'software-engineering', name: 'هندسة البرمجيات' },
          { key: 'cloud',                name: 'السحابة و DevOps' },
          { key: 'consulting',           name: 'الاستشارات التقنية' },
        ],
      },
      insights: {
        label: 'دراسات ذات صلة',
        items: [
          { key: 'oil-gas',  name: 'تكنولوجيا المعلومات في النفط والغاز — من قَفل المورّد إلى التحكم المستقل' },
          { key: 'erp',      name: 'ERP مخصص للشركات الصغيرة والمتوسطة الجزائرية — ما بعد Odoo' },
          { key: 'ai',       name: 'الذكاء الاصطناعي في الإنتاج — اعتماد عملي' },
        ],
      },
    },

    cta: {
      eyebrow: 'تحدث مع مهندس مقرّه الجزائر العاصمة',
      title:   'هل تدير منظمة في وهران أو أرزيو أو المنطقة الغربية؟ صف وضعك. سنكون في الموقع خلال أسبوعين.',
      button:  'احجز مكالمة 30 دقيقة',
    },
  },
};

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };

export default function LocationOranPage() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.fr;

  const placeLd = {
    '@context':  'https://schema.org',
    '@type':     'LocalBusiness',
    name:        'Symloop — Oran and western region',
    description: c.dek,
    url:         'https://www.symloop.com/locations/oran/',
    image:       'https://www.symloop.com/sym-logo.png',
    telephone:   '+213549575512',
    address: { '@type': 'PostalAddress', streetAddress: 'Algiers HQ — serving Oran and western region', addressLocality: 'Oran', addressRegion: 'Oran', postalCode: '31000', addressCountry: 'DZ' },
    geo: { '@type': 'GeoCoordinates', latitude: 35.6987, longitude: -0.6349 },
    areaServed: [{ '@type': 'City', name: 'Oran' }, { '@type': 'City', name: 'Arzew' }, { '@type': 'City', name: 'Bethioua' }, { '@type': 'City', name: 'Bir El Djir' }, { '@type': 'City', name: 'Es Senia' }],
    parentOrganization: { '@type': 'Organization', name: 'Symloop Technology', url: 'https://www.symloop.com' },
  };

  const breadcrumbs = [
    { name: 'Home',      url: 'https://www.symloop.com/' },
    { name: 'Locations', url: 'https://www.symloop.com/locations/' },
    { name: 'Oran',      url: 'https://www.symloop.com/locations/oran/' },
  ];

  return (
    <>
      <SEO
        title="Software Engineering in Oran — Symloop"
        description="Editorial portrait of Symloop's work in Oran — Arzew petrochem, Renault Tafraoui automotive, port logistics, western Mediterranean industrial fabric."
        keywords="agence developpement web oran, software engineering oran, ingenierie logicielle oran, oran tech company, arzew petrochem software, renault tafraoui IT, port oran logistics software, USTO oran graduates, custom erp oran, mobile app development oran, IoT industrial oran"
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
              <motion.h1 variants={fadeUp} className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05]">{c.title}</motion.h1>
              <motion.p variants={fadeUp} className="mt-8 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">{c.dek}</motion.p>
              <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 pt-8 border-t border-white/[0.08]">
                <span>{c.meta.one}</span><span>{c.meta.two}</span><span>{c.meta.three}</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="space-y-6 mb-16">
            {c.intro.map((p, i) => <motion.p key={i} variants={fadeUp} className="text-lg lg:text-xl text-white/75 leading-relaxed font-light">{renderRich(p)}</motion.p>)}
          </motion.div>
          {c.sections.map((s, idx) => (
            <motion.section key={idx} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-16 lg:mb-20">
              <motion.div variants={fadeUp} className="flex items-baseline gap-4 mb-8">
                <span className="font-mono text-[11px] tracking-[0.15em] text-white/30">{String(idx + 1).padStart(2, '0')}</span>
                <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-white leading-tight">{s.heading}</h2>
              </motion.div>
              <div className="space-y-5 ps-0 lg:ps-10">
                {s.body.map((p, i) => <motion.p key={i} variants={fadeUp} className="text-base lg:text-lg text-white/65 leading-relaxed">{renderRich(p)}</motion.p>)}
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
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]">
                  {c.related.services.items.map((s, i) => (
                    <li key={s.key} className="bg-black">
                      <Link href={`/services/${s.key}/`} className="group block h-full p-6 lg:p-7 transition-colors hover:bg-white/[0.025]">
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
              <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1]">{c.cta.title}</motion.h2>
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
  return parts.map((p, i) => p.startsWith('**') && p.endsWith('**')
    ? <span key={i} className="font-normal text-white border-b border-white/30">{p.slice(2, -2)}</span>
    : <span key={i}>{p}</span>);
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
