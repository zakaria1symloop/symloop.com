// ============================================================================
// SYMLOOP — /locations/annaba/
//
// Annaba — "Bouna" historically, "Bône" colonial era. Heavy industry: El Hadjar
// steel works (Africa's historical largest), Asmidal/Fertial fertilizer, port,
// Roman heritage Hippo Regius. Maritime + industrial automation focus.
// ============================================================================

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import SEO from '../../components/SEO';

const CONTENT = {
  fr: {
    eyebrow:     'Annaba · Pôle industriel maritime',
    publishedAt: 'Mis à jour Mai 2026',
    title:       "Symloop à Annaba — l'ingénierie pour la sidérurgie, les engrais et le port.",
    dek:         "Annaba est le pôle industriel lourd du Nord-Est. El Hadjar, Asmidal-Fertial, le port commercial — un tissu industriel ancien qui se modernise sous contrainte de marges et de transition énergétique.",
    meta: { one: 'Annaba · El Bouni · Sidi Amar', two: '640 000 habitants', three: '6 h depuis Alger' },
    intro: [
      "Annaba a longtemps porté l'industrie lourde algérienne. Le complexe sidérurgique d'El Hadjar a été pendant des décennies le plus grand d'Afrique. L'usine d'engrais Asmidal-Fertial alimente une partie significative de l'agriculture algérienne et exporte. Le port d'Annaba est le premier port exportateur de produits sidérurgiques du Maghreb. Ces actifs industriels lourds vivent une période de modernisation forcée — pression sur les marges, exigences environnementales européennes, transition énergétique.",
      "Cette page n'est pas un argumentaire commercial. C'est un portrait éditorial du travail que nous livrons à Annaba — pour les industriels lourds, les opérateurs portuaires et les PME du Nord-Est qui doivent moderniser leur stack technologique sans casser ce qui fonctionne.",
    ],
    sections: [
      {
        heading: "Le tissu industriel annabois",
        body: [
          "L'économie annaboise repose sur trois piliers majeurs. **Premier pilier : la sidérurgie d'El Hadjar** — laminoirs, fours électriques, coulée continue, dont les programmes IT couvrent SCADA industriel, gestion de production MES, traçabilité produit, et conformité environnementale. **Deuxième pilier : la chimie d'Asmidal-Fertial** — production d'ammoniac et d'engrais azotés, avec ses systèmes de contrôle de procédé, de gestion d'utilités et de conformité HSE.",
          "**Troisième pilier : le port et la logistique maritime** — gestion de quais, manutention de produits sidérurgiques, opérations vraquier et conteneurs, services douaniers spécialisés export. **Quatrième pilier : le tissu PME local** — agroalimentaire, sous-traitance industrielle, distribution régionale couvrant l'extrême Nord-Est jusqu'à la frontière tunisienne.",
        ],
      },
      {
        heading: "Ce que nous livrons à Annaba",
        body: [
          "Nos engagements annabois portent sur trois catégories. **Systèmes industriels lourds** : modernisation SCADA, intégration MES-ERP, plateformes de maintenance prédictive sur équipements critiques (fours, laminoirs, lignes d'engrais), conformité environnementale ISO 14001 et reporting carbone. **Plateformes de logistique portuaire** : gestion d'opérations, suivi conteneurs et vraquiers, dématérialisation douanière export.",
          "**ERP et systèmes pour PME** : production multi-sites, traçabilité, comptabilité, conformité fiscale algérienne. Aucun de ces engagements n'est packagé. Chacun commence par une discovery approfondie sur place — entrer dans la salle de contrôle d'El Hadjar ou dans la zone portuaire d'Annaba pour comprendre la réalité opérationnelle avant de proposer une architecture.",
        ],
      },
      {
        heading: "L'avantage de l'expérience industrielle lourde",
        body: [
          "Travailler avec des industries lourdes comme la sidérurgie ou la chimie demande des compétences spécifiques : compréhension des automatismes industriels, des standards SIL pour la sécurité fonctionnelle, des contraintes de redondance hardware, des cycles de vie de 20-30 ans pour les systèmes critiques. Cette expertise n'est pas remplaçable par une équipe de développeurs web généralistes.",
          "Notre équipe inclut des ingénieurs avec une exposition directe à ces environnements — anciens d'Arzew, de Skikda, ou formés dans les écoles d'automatique algériennes. Cette continuité d'expérience permet à un client annabois de travailler avec nous sans avoir à éduquer son partenaire technique sur les bases du métier.",
        ],
      },
      {
        heading: "Annaba, port d'entrée vers la Tunisie et l'Italie",
        body: [
          "Annaba est plus proche de Tunis que d'Alger, et son port commercial est le point de transit pour une part significative des échanges algéro-italiens et algéro-maghrébins. Cette position géographique change la nature des projets — beaucoup de nos missions annaboises ont une composante d'intégration cross-border : connexion à des transporteurs tunisiens, intégration avec des armateurs italiens, conformité douanière à des protocoles européens.",
          "Cette dimension internationale rapproche Annaba de notre profil de clients méditerranéens et européens, et différencie ses besoins logiciels du tissu industriel intérieur du pays.",
        ],
      },
    ],
    related: {
      eyebrow: 'Pour aller plus loin',
      services: { label: 'Disciplines à Annaba', items: [
        { key: 'iot',                  name: 'IoT et systèmes industriels' },
        { key: 'software-engineering', name: 'Ingénierie logicielle' },
        { key: 'cloud',                name: 'Cloud & DevOps' },
        { key: 'consulting',           name: 'Conseil technologique' },
      ] },
      insights: { label: 'Études liées', items: [
        { key: 'oil-gas',  name: 'Pétrole et gaz IT — du verrouillage fournisseur au contrôle indépendant' },
        { key: 'erp',      name: "ERP sur mesure pour PME algériennes — au-delà d'Odoo" },
        { key: 'ai',       name: "L'IA en production — adoption pratique" },
      ] },
    },
    cta: { eyebrow: 'Parlez à un ingénieur basé à Alger', title: 'Vous dirigez une organisation à Annaba, El Bouni, Sidi Amar ou dans le Nord-Est ? Décrivez votre situation.', button: 'Réserver un appel de 30 minutes' },
  },

  en: {
    eyebrow:     'Annaba · Heavy industrial pole',
    publishedAt: 'Updated May 2026',
    title:       'Symloop in Annaba — engineering for steelworks, fertilizer, and the port.',
    dek:         'Annaba is the heavy industrial pole of the Algerian Northeast. El Hadjar steelworks, Asmidal-Fertial fertilizer, the commercial port — an old industrial fabric modernizing under margin pressure and energy transition.',
    meta: { one: 'Annaba · El Bouni · Sidi Amar', two: '640,000 inhabitants', three: '6 h from Algiers' },
    intro: [
      "Annaba has long carried Algerian heavy industry. The El Hadjar steelworks complex was for decades the largest in Africa. The Asmidal-Fertial fertilizer plant supplies a significant share of Algerian agriculture and exports. The Port of Annaba is the largest steel-products exporter in the Maghreb. These heavy industrial assets are living a forced modernization — margin pressure, European environmental requirements, energy transition.",
      "This page is not a sales pitch. It is an editorial portrait of the work we deliver in Annaba — for heavy industrials, port operators and Northeast SMEs that need to modernize their tech stack without breaking what works.",
    ],
    sections: [
      {
        heading: 'The Annaba industrial fabric',
        body: [
          "Annaba's economy rests on three major pillars. **First: El Hadjar steelmaking** — rolling mills, electric furnaces, continuous casting, whose IT programs cover industrial SCADA, MES production management, product traceability, and environmental compliance. **Second: Asmidal-Fertial chemistry** — ammonia and nitrogen fertilizer production, with its process control systems, utilities management and HSE compliance.",
          "**Third: port and maritime logistics** — berth management, steel-product handling, bulk-carrier and container operations, specialized export customs. **Fourth: local SME fabric** — food processing, industrial subcontracting, regional distribution covering the extreme Northeast to the Tunisian border.",
        ],
      },
      {
        heading: 'What we deliver in Annaba',
        body: [
          "Our Annaba engagements cover three categories. **Heavy industrial systems**: SCADA modernization, MES-ERP integration, predictive maintenance platforms on critical equipment (furnaces, rolling mills, fertilizer lines), ISO 14001 environmental compliance and carbon reporting. **Port logistics platforms**: operations management, container and bulk-carrier tracking, export customs dematerialization.",
          "**ERPs and SME systems**: multi-site production, traceability, accounting, Algerian tax compliance. None of these engagements are packaged. Each starts with a deep on-site discovery — going into the El Hadjar control room or the Annaba port zone to understand operational reality before proposing an architecture.",
        ],
      },
      {
        heading: 'The advantage of heavy industrial experience',
        body: [
          "Working with heavy industries like steelmaking or chemistry demands specific skills: understanding industrial automation, SIL standards for functional safety, hardware redundancy constraints, 20–30-year lifecycles for critical systems. This expertise is not replaceable by a team of general-purpose web developers.",
          "Our team includes engineers with direct exposure to these environments — former Arzew, Skikda, or trained in Algerian automation engineering schools. This continuity of experience lets an Annaba client work with us without having to educate their technical partner on the basics of the trade.",
        ],
      },
      {
        heading: 'Annaba, gateway to Tunisia and Italy',
        body: [
          "Annaba is closer to Tunis than to Algiers, and its commercial port is the transit point for a significant share of Algeria-Italy and Algeria-Maghreb trade. This geographic position changes the nature of projects — many of our Annaba engagements have a cross-border integration component: connection to Tunisian carriers, integration with Italian shipowners, customs compliance with European protocols.",
          "This international dimension brings Annaba closer to our Mediterranean and European client profile, and differentiates its software needs from the country's interior industrial fabric.",
        ],
      },
    ],
    related: {
      eyebrow: 'Going deeper',
      services: { label: 'Disciplines in Annaba', items: [
        { key: 'iot',                  name: 'IoT & Industrial Systems' },
        { key: 'software-engineering', name: 'Software Engineering' },
        { key: 'cloud',                name: 'Cloud & DevOps' },
        { key: 'consulting',           name: 'Technology Consulting' },
      ] },
      insights: { label: 'Related insights', items: [
        { key: 'oil-gas',  name: 'Oil and gas IT — from vendor lock-in to independent control' },
        { key: 'erp',      name: 'Custom ERP for Algerian SMEs — beyond Odoo' },
        { key: 'ai',       name: 'AI in production — pragmatic adoption' },
      ] },
    },
    cta: { eyebrow: 'Talk to an engineer based in Algiers', title: 'Run an organization in Annaba, El Bouni, Sidi Amar, or the Northeast? Describe your situation.', button: 'Book a 30-minute call' },
  },

  ar: {
    eyebrow:     'عنابة · القطب الصناعي البحري',
    publishedAt: 'محدّث مايو 2026',
    title:       'سيملوب في عنابة — هندسة للصناعة الصلب والأسمدة والميناء.',
    dek:         'عنابة هي القطب الصناعي الثقيل للشمال الشرقي الجزائري. الحجار، أسميدال-فرتيال، الميناء التجاري — نسيج صناعي قديم يتجدّد تحت ضغط الهوامش والانتقال الطاقوي.',
    meta: { one: 'عنابة · البوني · سيدي عمار', two: '640 ألف نسمة', three: '6 ساعات من الجزائر العاصمة' },
    intro: [
      'حملت عنابة طويلاً الصناعة الثقيلة الجزائرية. كان مجمع الحجار الحديدي الصلبي لعقود الأكبر في أفريقيا. مصنع أسميدال-فرتيال للأسمدة يغذّي حصة كبيرة من الزراعة الجزائرية ويصدّر. ميناء عنابة هو أكبر مصدّر للمنتجات الحديدية الصلبية في المغرب العربي. هذه الأصول الصناعية الثقيلة تعيش فترة تحديث قسري — ضغط على الهوامش، متطلبات بيئية أوروبية، انتقال طاقوي.',
      'هذه الصفحة ليست عرضاً تجارياً. هي صورة تحريرية للعمل الذي نسلّمه في عنابة — للصناعيين الثقيلين ومشغّلي الموانئ وشركات الشمال الشرقي الصغيرة والمتوسطة التي تحتاج إلى تحديث حزمتها التقنية دون كسر ما يعمل.',
    ],
    sections: [
      {
        heading: 'النسيج الصناعي العنابي',
        body: [
          'يقوم اقتصاد عنابة على ثلاث ركائز رئيسية. **الأولى: صناعة الصلب في الحجار** — مدارج الدرفلة، أفران كهربائية، صب مستمر، برامج تكنولوجيا المعلومات فيها تغطّي SCADA الصناعي وإدارة الإنتاج MES وتتبع المنتج والامتثال البيئي. **الثانية: كيمياء أسميدال-فرتيال** — إنتاج الأمونيا والأسمدة الآزوتية، بأنظمة التحكم في العمليات وإدارة المرافق والامتثال HSE.',
          '**الثالثة: الميناء واللوجستيك البحري** — إدارة الأرصفة، مناولة منتجات الصلب، عمليات السفن الناقلة للسوائب والحاويات، خدمات الجمارك المتخصصة في التصدير. **الرابعة: نسيج الشركات الصغيرة والمتوسطة المحلي** — الصناعة الغذائية، المقاولة الصناعية، التوزيع الإقليمي الذي يغطي أقصى الشمال الشرقي حتى الحدود التونسية.',
        ],
      },
      {
        heading: 'ما نسلّمه في عنابة',
        body: [
          'تشمل مهامنا في عنابة ثلاث فئات. **أنظمة صناعية ثقيلة**: تحديث SCADA، تكامل MES-ERP، منصات الصيانة التنبؤية على المعدات الحرجة (الأفران، مدارج الدرفلة، خطوط الأسمدة)، الامتثال البيئي ISO 14001 وتقارير الكربون. **منصات اللوجستيك المينائي**: إدارة العمليات، تتبع الحاويات والسفن الناقلة للسوائب، رقمنة الجمارك للتصدير.',
          '**ERP وأنظمة للشركات الصغيرة والمتوسطة**: إنتاج متعدد المواقع، تتبع، محاسبة، امتثال ضريبي جزائري. لا توجد من بينها مهمة معلّبة. كل واحدة تبدأ باكتشاف عميق في الموقع — الدخول إلى غرفة تحكم الحجار أو منطقة ميناء عنابة لفهم الواقع التشغيلي قبل اقتراح المعمارية.',
        ],
      },
      {
        heading: 'ميزة الخبرة الصناعية الثقيلة',
        body: [
          'العمل مع الصناعات الثقيلة كصناعة الصلب أو الكيمياء يتطلّب مهارات محددة: فهم الأتمتة الصناعية، معايير SIL للأمن الوظيفي، قيود التكرار الحاسوبي، دورات حياة 20-30 سنة للأنظمة الحرجة. هذه الخبرة غير قابلة للاستبدال بفريق مطورين ويب عاميّن.',
          'فريقنا يضمّ مهندسين ذوي تعرّض مباشر لهذه البيئات — قدامى أرزيو وسكيكدة، أو مدرَّبين في مدارس الأتمتة الجزائرية. هذه الاستمرارية في الخبرة تسمح لعميل عنابي بالعمل معنا دون الحاجة إلى تعليم شريكه التقني أساسيات المهنة.',
        ],
      },
      {
        heading: 'عنابة، بوابة العبور إلى تونس وإيطاليا',
        body: [
          'عنابة أقرب إلى تونس من الجزائر العاصمة، وميناؤها التجاري هو نقطة العبور لحصة كبيرة من المبادلات الجزائرية الإيطالية والجزائرية المغاربية. هذا الموقع الجغرافي يغيّر طبيعة المشاريع — كثير من مهامنا في عنابة لها مكوّن تكامل عابر للحدود: ربط بناقلين تونسيين، تكامل مع شركات شحن إيطالية، امتثال جمركي للبروتوكولات الأوروبية.',
          'هذا البُعد الدولي يقرّب عنابة من ملفنا للعملاء المتوسطيين والأوروبيين، ويميّز احتياجاتها البرمجية عن النسيج الصناعي الداخلي للبلد.',
        ],
      },
    ],
    related: {
      eyebrow: 'لقراءة المزيد',
      services: { label: 'التخصصات في عنابة', items: [
        { key: 'iot',                  name: 'IoT والأنظمة الصناعية' },
        { key: 'software-engineering', name: 'هندسة البرمجيات' },
        { key: 'cloud',                name: 'السحابة و DevOps' },
        { key: 'consulting',           name: 'الاستشارات التقنية' },
      ] },
      insights: { label: 'دراسات ذات صلة', items: [
        { key: 'oil-gas',  name: 'تكنولوجيا المعلومات في النفط والغاز — من قَفل المورّد إلى التحكم المستقل' },
        { key: 'erp',      name: 'ERP مخصص للشركات الصغيرة والمتوسطة الجزائرية — ما بعد Odoo' },
        { key: 'ai',       name: 'الذكاء الاصطناعي في الإنتاج — اعتماد عملي' },
      ] },
    },
    cta: { eyebrow: 'تحدث مع مهندس مقرّه الجزائر العاصمة', title: 'هل تدير منظمة في عنابة أو البوني أو سيدي عمار أو الشمال الشرقي؟ صف وضعك.', button: 'احجز مكالمة 30 دقيقة' },
  },
};

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };

export default function LocationAnnabaPage() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.fr;

  const placeLd = {
    '@context':  'https://schema.org',
    '@type':     'LocalBusiness',
    name:        'Symloop — Annaba and northeastern region',
    description: c.dek,
    url:         'https://symloop.com/locations/annaba/',
    image:       'https://symloop.com/sym-logo.png',
    telephone:   '+213549575512',
    address: { '@type': 'PostalAddress', streetAddress: 'Algiers HQ — serving Annaba and northeastern region', addressLocality: 'Annaba', addressRegion: 'Annaba', postalCode: '23000', addressCountry: 'DZ' },
    geo: { '@type': 'GeoCoordinates', latitude: 36.9000, longitude: 7.7667 },
    areaServed: [{ '@type': 'City', name: 'Annaba' }, { '@type': 'City', name: 'El Bouni' }, { '@type': 'City', name: 'Sidi Amar' }, { '@type': 'City', name: 'El Hadjar' }],
    parentOrganization: { '@type': 'Organization', name: 'Symloop Technology', url: 'https://symloop.com' },
  };

  const breadcrumbs = [
    { name: 'Home',      url: 'https://symloop.com/' },
    { name: 'Locations', url: 'https://symloop.com/locations/' },
    { name: 'Annaba',    url: 'https://symloop.com/locations/annaba/' },
  ];

  return (
    <>
      <SEO
        title="Software Engineering in Annaba — Symloop"
        description="Editorial portrait of Symloop's work in Annaba — El Hadjar steelworks, Asmidal-Fertial fertilizer, port logistics, northeastern Algeria heavy industry."
        keywords="agence developpement web annaba, software engineering annaba, ingenierie logicielle annaba, el hadjar steel software, asmidal fertial chemistry IT, port annaba logistics, custom erp annaba, IoT industrial annaba, mobile app development annaba"
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
  return { props: { ...(await serverSideTranslations(locale, ['common'])) }, revalidate: 86400 };
}
