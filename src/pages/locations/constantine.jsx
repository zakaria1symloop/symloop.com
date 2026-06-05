// ============================================================================
// SYMLOOP — /locations/constantine/
//
// Constantine — "Madinat al-Jusur" (City of Bridges), eastern capital, healthcare
// + education + pharmaceutical hub. Cultural heart of conservative Arabic Algeria.
// ============================================================================

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import SEO from '../../components/SEO';

const CONTENT = {
  fr: {
    eyebrow:     'Constantine · Capitale de l\'Est',
    publishedAt: 'Mis à jour Mai 2026',
    title:       "Symloop à Constantine — l'ingénierie pour la cité des ponts, la santé et l'éducation.",
    dek:         "Constantine est la capitale culturelle et académique de l'Est algérien. CHU, École de médecine, Université Mentouri, industrie pharmaceutique Saidal — un tissu institutionnel qui demande des systèmes d'information à la hauteur de son histoire.",
    meta: { one: 'Constantine · El Khroub · Sidi Mabrouk', two: '950 000 habitants', three: '5 h depuis Alger' },
    intro: [
      "Constantine n'est pas une ville comme les autres en Algérie. C'est la capitale historique de l'Est, le berceau du nationalisme algérien moderne, et le centre académique le plus ancien du pays — l'Université Mentouri Frères Constantine est plus ancienne que l'Algérie indépendante. Cette gravité culturelle se traduit en gravité économique : la santé publique, la pharmaceutique, l'éducation supérieure et l'administration centrale de l'Est y opèrent à grande échelle.",
      "Cette page n'est pas un argumentaire commercial. C'est un portrait éditorial du travail que nous livrons à Constantine et dans l'Est algérien — pour les CHU, les facultés, les laboratoires pharmaceutiques, et les PME constantinoises qui font la stabilité économique de la région.",
    ],
    sections: [
      {
        heading: "Le tissu constantinois — santé, éducation, pharma",
        body: [
          "L'économie constantinoise repose sur quatre piliers spécifiques. **Premier pilier : la santé publique** — CHU Constantine, hôpitaux régionaux, polyclinique Ben Badis, cliniques privées. Ces institutions opèrent des systèmes d'information patients, des dossiers médicaux électroniques, des plateformes de prise de rendez-vous et des intégrations avec la CNAS. **Deuxième pilier : l'industrie pharmaceutique** — Saidal Constantine, laboratoires privés régionaux, distributeurs pharmaceutiques.",
          "**Troisième pilier : l'enseignement supérieur** — Université Mentouri Constantine 1, Université Constantine 2 et 3, École Nationale Polytechnique, qui forment chaque année des milliers de diplômés et opèrent des plateformes d'inscription, de gestion académique et d'e-learning. **Quatrième pilier : l'administration et le tissu PME** — directions régionales de ministères, banques publiques, distribution agroalimentaire, sous-traitance industrielle.",
        ],
      },
      {
        heading: "Ce que nous livrons à Constantine",
        body: [
          "Nos missions constantinoises se répartissent dans quatre catégories. **Systèmes hospitaliers et de santé** : DMP (dossier médical patient), gestion hospitalière, plateformes de télémédecine, intégrations avec l'assurance maladie et le ministère de la santé. **Plateformes éducatives** : portails étudiants, gestion des examens, e-learning multi-tenant, intégration avec le ministère de l'enseignement supérieur.",
          "**Systèmes pharma** : traçabilité de production, conformité réglementaire LPA (laboratoire de production algérien), gestion d'entrepôts, intégrations distributeurs. **ERP et applications mobiles** pour les PME et l'administration régionale. Aucun de ces engagements n'est packagé — chacun commence par une discovery sur place dans les bureaux du client à Constantine, El Khroub ou Sidi Mabrouk.",
        ],
      },
      {
        heading: "L'avantage culturel et linguistique",
        body: [
          "Constantine est la ville algérienne où l'arabe classique et l'arabe algérien dominent le plus fortement les relations professionnelles, et où la culture institutionnelle est la plus formelle du pays. Notre équipe travaille à l'aise dans cette modalité — réunions en arabe, rapports en français, code commenté en anglais selon le standard. Cette flexibilité linguistique change le rythme et la profondeur des relations clients.",
          "Nous comprenons aussi le contexte réglementaire spécifique de la santé et de l'éducation algériennes — exigences de la CNAS, conformité du ministère de la santé pour les DMP, intégration avec la base de données Progres pour l'enseignement supérieur, traçabilité Saidal pour la pharma. Cette compréhension n'est pas disponible chez un fournisseur étranger.",
        ],
      },
      {
        heading: "L'écosystème académique de Constantine",
        body: [
          "Constantine forme une part majeure des médecins, pharmaciens, enseignants et ingénieurs de l'Est algérien. Université Mentouri, Université Salah Boubnider Constantine 3, École Nationale Polytechnique, Faculté de médecine de Constantine — ces institutions produisent un flux constant de diplômés que nos clients recrutent. Notre position d'employeur algérien établi nous permet d'aider nos clients à structurer leurs équipes IT et à attirer ces talents.",
          "Cet écosystème est aussi celui dans lequel les startups constantinoises émergent. Plusieurs scale-ups de la santé numérique et de l'edtech sont basées entre Constantine et El Khroub. Nous travaillons avec elles à différents stades — du prototype au passage en production.",
        ],
      },
    ],
    related: {
      eyebrow: 'Pour aller plus loin',
      services: { label: 'Disciplines à Constantine', items: [
        { key: 'software-engineering', name: 'Ingénierie logicielle' },
        { key: 'mobile',               name: 'Ingénierie mobile' },
        { key: 'cybersecurity',        name: 'Cybersécurité' },
        { key: 'consulting',           name: 'Conseil technologique' },
      ] },
      insights: { label: 'Études liées', items: [
        { key: 'healthcare', name: "Tech santé — registres patients et fédération EHR" },
        { key: 'government', name: "Digitalisation de l'administration — services publics souverains" },
        { key: 'erp',        name: "ERP sur mesure pour PME algériennes — au-delà d'Odoo" },
      ] },
    },
    cta: { eyebrow: 'Parlez à un ingénieur basé à Alger', title: 'Vous dirigez un CHU, une faculté, un laboratoire ou une organisation à Constantine ? Décrivez votre situation.', button: 'Réserver un appel de 30 minutes' },
  },

  en: {
    eyebrow:     'Constantine · Eastern capital',
    publishedAt: 'Updated May 2026',
    title:       "Symloop in Constantine — engineering for the city of bridges, healthcare and education.",
    dek:         "Constantine is the cultural and academic capital of eastern Algeria. University hospital, school of medicine, Mentouri University, Saidal pharmaceutical industry — an institutional fabric that demands information systems at the level of its history.",
    meta: { one: 'Constantine · El Khroub · Sidi Mabrouk', two: '950,000 inhabitants', three: '5 h from Algiers' },
    intro: [
      "Constantine is not a city like any other in Algeria. It is the historical capital of the East, the cradle of modern Algerian nationalism, and the oldest academic center in the country — Université Mentouri Frères Constantine is older than independent Algeria. This cultural gravity translates into economic gravity: public health, pharmaceuticals, higher education and the central administration of the East operate here at scale.",
      "This page is not a sales pitch. It is an editorial portrait of the work we deliver in Constantine and the Algerian East — for university hospitals, faculties, pharmaceutical labs, and Constantine SMEs that make the economic stability of the region.",
    ],
    sections: [
      {
        heading: "The Constantine fabric — health, education, pharma",
        body: [
          "Constantine's economy rests on four specific pillars. **First: public health** — CHU Constantine, regional hospitals, Ben Badis polyclinic, private clinics. These institutions operate patient information systems, electronic medical records, appointment platforms and integrations with the national health insurance fund. **Second: the pharmaceutical industry** — Saidal Constantine, regional private labs, pharmaceutical distributors.",
          "**Third: higher education** — Mentouri University Constantine 1, Constantine 2 and 3, École Nationale Polytechnique, which train thousands of graduates yearly and operate enrollment platforms, academic management, and e-learning. **Fourth: administration and SME fabric** — regional ministry directorates, public banks, agribusiness distribution, industrial subcontracting.",
        ],
      },
      {
        heading: 'What we deliver in Constantine',
        body: [
          "Our Constantine engagements fall into four categories. **Hospital and health systems**: electronic patient records, hospital management, telemedicine platforms, integrations with health insurance and the Ministry of Health. **Educational platforms**: student portals, exam management, multi-tenant e-learning, integration with the Ministry of Higher Education.",
          "**Pharma systems**: production traceability, regulatory compliance, warehouse management, distributor integrations. **ERPs and mobile applications** for SMEs and regional administration. None of these engagements are packaged — each starts with an on-site discovery in the client's offices in Constantine, El Khroub or Sidi Mabrouk.",
        ],
      },
      {
        heading: 'Cultural and linguistic advantage',
        body: [
          "Constantine is the Algerian city where classical and Algerian Arabic most strongly dominate professional relationships, and where institutional culture is the most formal in the country. Our team works comfortably in this mode — meetings in Arabic, reports in French, code commented in English to standard. This linguistic flexibility changes the rhythm and depth of client relationships.",
          "We also understand the specific regulatory context of Algerian health and education — health insurance requirements, Ministry of Health compliance for electronic patient records, integration with the Progres national database for higher education, Saidal traceability for pharma. This understanding is not available from a foreign vendor.",
        ],
      },
      {
        heading: "Constantine's academic ecosystem",
        body: [
          "Constantine trains a major share of eastern Algeria's doctors, pharmacists, teachers and engineers. Mentouri University, Salah Boubnider Constantine 3, École Nationale Polytechnique, Faculty of Medicine — these institutions produce a steady flow of graduates that our clients recruit. Our position as an established Algerian employer lets us help our clients structure their IT teams and attract these talents.",
          "This ecosystem is also where Constantine startups emerge. Several digital-health and edtech scale-ups are based between Constantine and El Khroub. We work with them at various stages — from prototype to production rollout.",
        ],
      },
    ],
    related: {
      eyebrow: 'Going deeper',
      services: { label: 'Disciplines in Constantine', items: [
        { key: 'software-engineering', name: 'Software Engineering' },
        { key: 'mobile',               name: 'Mobile Engineering' },
        { key: 'cybersecurity',        name: 'Cybersecurity' },
        { key: 'consulting',           name: 'Technology Consulting' },
      ] },
      insights: { label: 'Related insights', items: [
        { key: 'healthcare', name: 'Healthcare tech — patient registries and EHR federation' },
        { key: 'government', name: 'Government digitization — sovereign public services' },
        { key: 'erp',        name: 'Custom ERP for Algerian SMEs — beyond Odoo' },
      ] },
    },
    cta: { eyebrow: 'Talk to an engineer based in Algiers', title: 'Run a hospital, a faculty, a lab, or an organization in Constantine? Describe your situation.', button: 'Book a 30-minute call' },
  },

  ar: {
    eyebrow:     'قسنطينة · عاصمة الشرق',
    publishedAt: 'محدّث مايو 2026',
    title:       'سيملوب في قسنطينة — هندسة لمدينة الجسور والصحة والتعليم.',
    dek:         'قسنطينة هي العاصمة الثقافية والأكاديمية للشرق الجزائري. مستشفى جامعي، كلية طب، جامعة منتوري، صيدال — نسيج مؤسسي يتطلّب أنظمة معلومات على مستوى تاريخه.',
    meta: { one: 'قسنطينة · الخروب · سيدي مبروك', two: '950 ألف نسمة', three: '5 ساعات من الجزائر العاصمة' },
    intro: [
      'قسنطينة ليست مدينة كأي مدينة في الجزائر. هي العاصمة التاريخية للشرق، مهد الحركة الوطنية الجزائرية الحديثة، وأقدم مركز أكاديمي في البلد — جامعة منتوري الإخوة قسنطينة أقدم من الجزائر المستقلة. هذه الثقالة الثقافية تترجم إلى ثقالة اقتصادية: الصحة العمومية، الصناعة الصيدلية، التعليم العالي والإدارة المركزية للشرق تعمل هنا على نطاق واسع.',
      'هذه الصفحة ليست عرضاً تجارياً. هي صورة تحريرية للعمل الذي نسلّمه في قسنطينة والشرق الجزائري — للمستشفيات الجامعية والكليات والمختبرات الصيدلية والشركات الصغيرة والمتوسطة القسنطينية التي تشكّل الاستقرار الاقتصادي للمنطقة.',
    ],
    sections: [
      {
        heading: 'النسيج القسنطيني — الصحة والتعليم والصيدلة',
        body: [
          'يقوم اقتصاد قسنطينة على أربع ركائز محدّدة. **الأولى: الصحة العمومية** — المستشفى الجامعي قسنطينة، المستشفيات الإقليمية، عيادة بن باديس، العيادات الخاصة. تشغّل هذه المؤسسات أنظمة معلومات المرضى والسجلات الطبية الإلكترونية ومنصات الحجز وتكاملات مع الصندوق الوطني للضمان الاجتماعي. **الثانية: الصناعة الصيدلية** — صيدال قسنطينة، المختبرات الخاصة الإقليمية، موزّعو الأدوية.',
          '**الثالثة: التعليم العالي** — جامعة منتوري قسنطينة 1، قسنطينة 2 و 3، المدرسة الوطنية المتعدّدة التقنيات، التي تدرّب آلاف الخريجين سنوياً وتشغّل منصات التسجيل وإدارة الامتحانات والتعليم الإلكتروني. **الرابعة: الإدارة ونسيج الشركات الصغيرة والمتوسطة** — المديريات الإقليمية للوزارات، البنوك العمومية، توزيع الصناعة الغذائية، المقاولة الصناعية.',
        ],
      },
      {
        heading: 'ما نسلّمه في قسنطينة',
        body: [
          'تنقسم مهامنا في قسنطينة إلى أربع فئات. **أنظمة المستشفيات والصحة**: الملف الطبي الإلكتروني للمريض، إدارة المستشفى، منصات الطب عن بُعد، تكاملات مع التأمين الصحي ووزارة الصحة. **منصات تعليمية**: بوابات الطلاب، إدارة الامتحانات، تعلم إلكتروني متعدد المستأجرين، تكامل مع وزارة التعليم العالي.',
          '**أنظمة صيدلية**: تتبع الإنتاج، الامتثال التنظيمي، إدارة المستودعات، تكاملات الموزعين. **ERP وتطبيقات الجوال** للشركات الصغيرة والمتوسطة والإدارة الإقليمية. لا توجد من بينها مهمة معلّبة — كل واحدة تبدأ باكتشاف ميداني في مكاتب العميل في قسنطينة أو الخروب أو سيدي مبروك.',
        ],
      },
      {
        heading: 'الميزة الثقافية واللغوية',
        body: [
          'قسنطينة هي المدينة الجزائرية التي تهيمن فيها العربية الفصحى والدارجة الجزائرية بقوة على العلاقات المهنية، وحيث الثقافة المؤسسية أكثر رسمية في البلد. فريقنا يعمل بسلاسة في هذا النمط — اجتماعات بالعربية، تقارير بالفرنسية، كود معلّق بالإنجليزية حسب المعيار. هذه المرونة اللغوية تغيّر إيقاع وعمق علاقات العملاء.',
          'نفهم أيضاً السياق التنظيمي المحدّد للصحة والتعليم الجزائريين — متطلبات الضمان الاجتماعي، الامتثال لوزارة الصحة، التكامل مع قاعدة بيانات Progres الوطنية للتعليم العالي، تتبع صيدال للصناعة الصيدلية. هذا الفهم غير متاح من مورّد أجنبي.',
        ],
      },
      {
        heading: 'النظام الأكاديمي في قسنطينة',
        body: [
          'تدرّب قسنطينة حصة كبيرة من الأطباء والصيادلة والمعلمين والمهندسين في الشرق الجزائري. جامعة منتوري، صلاح بوبنيدر قسنطينة 3، المدرسة الوطنية المتعدّدة التقنيات، كلية الطب — تنتج هذه المؤسسات تدفقاً مستمراً من الخريجين يوظّفهم عملاؤنا. موقعنا كرب عمل جزائري راسخ يسمح لنا بمساعدة عملائنا في هيكلة فِرَق IT لديهم وجذب هذه المواهب.',
          'هذا النظام هو أيضاً الذي تنبثق منه الشركات الناشئة القسنطينية. عدة شركات ناشئة في الصحة الرقمية والتكنولوجيا التعليمية مقرّها بين قسنطينة والخروب. نعمل معها في مراحل مختلفة — من النموذج الأولي إلى الإنتاج.',
        ],
      },
    ],
    related: {
      eyebrow: 'لقراءة المزيد',
      services: { label: 'التخصصات في قسنطينة', items: [
        { key: 'software-engineering', name: 'هندسة البرمجيات' },
        { key: 'mobile',               name: 'هندسة الجوال' },
        { key: 'cybersecurity',        name: 'الأمن السيبراني' },
        { key: 'consulting',           name: 'الاستشارات التقنية' },
      ] },
      insights: { label: 'دراسات ذات صلة', items: [
        { key: 'healthcare', name: 'تقنية الصحة — سجلات المرضى وفيدرالية EHR' },
        { key: 'government', name: 'الرقمنة الحكومية — خدمات عامة سيادية' },
        { key: 'erp',        name: 'ERP مخصص للشركات الصغيرة والمتوسطة الجزائرية — ما بعد Odoo' },
      ] },
    },
    cta: { eyebrow: 'تحدث مع مهندس مقرّه الجزائر العاصمة', title: 'هل تدير مستشفى أو كلية أو مختبراً أو منظمة في قسنطينة؟ صف وضعك.', button: 'احجز مكالمة 30 دقيقة' },
  },
};

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };

export default function LocationConstantinePage() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.fr;

  const placeLd = {
    '@context':  'https://schema.org',
    '@type':     'LocalBusiness',
    name:        'Symloop — Constantine and eastern region',
    description: c.dek,
    url:         'https://symloop.com/locations/constantine/',
    image:       'https://symloop.com/sym-logo.png',
    telephone:   '+213549575512',
    address: { '@type': 'PostalAddress', streetAddress: 'Algiers HQ — serving Constantine and eastern region', addressLocality: 'Constantine', addressRegion: 'Constantine', postalCode: '25000', addressCountry: 'DZ' },
    geo: { '@type': 'GeoCoordinates', latitude: 36.3650, longitude: 6.6147 },
    areaServed: [{ '@type': 'City', name: 'Constantine' }, { '@type': 'City', name: 'El Khroub' }, { '@type': 'City', name: 'Sidi Mabrouk' }, { '@type': 'City', name: 'Hamma Bouziane' }],
    parentOrganization: { '@type': 'Organization', name: 'Symloop Technology', url: 'https://symloop.com' },
  };

  const breadcrumbs = [
    { name: 'Home',         url: 'https://symloop.com/' },
    { name: 'Locations',    url: 'https://symloop.com/locations/' },
    { name: 'Constantine',  url: 'https://symloop.com/locations/constantine/' },
  ];

  return (
    <>
      <SEO
        title="Software Engineering in Constantine — Symloop"
        description="Editorial portrait of Symloop's work in Constantine — university hospitals, Saidal pharma, Mentouri University, eastern Algerian institutional fabric."
        keywords="agence developpement web constantine, software engineering constantine, ingenierie logicielle constantine, hospital software constantine, pharmaceutical software algeria, mentouri university IT, custom erp constantine, mobile app development constantine, edtech constantine, healthcare software algerie est"
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
