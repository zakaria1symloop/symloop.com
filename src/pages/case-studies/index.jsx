// ============================================================================
// SYMLOOP — Case Studies hub
//
// Editorial hub page listing all Symloop case studies. Matches the /insights/
// hub design — black background, hairline grid, mono eyebrow labels.
// ============================================================================

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

// Single source of truth for case studies — add new entries here as we build them.
// Listed newest-first so the most recent case study appears at the top of the hub.
const CASE_STUDIES = [
  {
    number:  'N°03',
    slug:    'hajz',
    logo:    '/case-studies/hajz-logo.png',
    cover:   '/case-studies/hajz-cover.jpg',
    year:    '2025',
    sector:  { en: 'Travel · Hospitality · Marketplace', fr: 'Voyage · Hôtellerie · Marketplace', ar: 'سفر · ضيافة · سوق' },
    client:  'Hajz',
    title: {
      en: 'Booking marketplace engineering — three verticals, one reservation model.',
      fr: "Ingénierie de marketplace de réservation — trois verticales, un modèle de réservation.",
      ar: 'هندسة سوق الحجز — ثلاث قطاعات، نموذج حجز واحد.',
    },
    dek: {
      en: 'Three-sided booking marketplace engineered as a single reservation domain with adapter-isolated payment and messaging, service-level role boundaries, and locale-complete multilingual rendering.',
      fr: "Marketplace de réservation trois-côtés conçue comme un seul domaine de réservation avec paiement et messaging isolés par adaptateurs, frontières de rôle au niveau service, et rendu multilingue locale-complet.",
      ar: 'سوق حجز ثلاثية الأطراف هُندست كمجال حجز واحد مع دفع ومراسلة معزولين بمحوّلات، وحدود دور على مستوى الخدمة، ورندرينغ متعدد اللغات locale-كامل.',
    },
    tech:    ['Reservation domain', 'State machine', 'Adapter-isolated payment', 'Full RTL'],
    duration: { en: '10 months · 5 engineers', fr: '10 mois · 5 ingénieurs', ar: '10 أشهر · 5 مهندسين' },
  },
  {
    number:  'N°02',
    slug:    'sadia',
    logo:    '/case-studies/sadia-logo.png',
    cover:   '/case-studies/sadia-cover.jpg',
    year:    '2024',
    sector:  { en: 'FMCG · Consumer Brand · Retail', fr: 'FMCG · Marque Consommateur · Retail', ar: 'FMCG · علامة استهلاكية · تجزئة' },
    client:  'Sadia',
    title: {
      en: 'Consumer activation engineering — receipt-scan entry at national scale.',
      fr: "Ingénierie d'activation consommateur — saisie par scan de ticket à l'échelle nationale.",
      ar: 'هندسة تفعيل استهلاكي — إدخال scan الإيصال على نطاق وطني.',
    },
    dek: {
      en: 'Consumer-brand activation running across three render surfaces as one domain model: burst-aware static delivery, immutable audit log, deterministic deduplication, and kiosk-hardened in-store client.',
      fr: "Activation de marque consommateur exécutée sur trois surfaces de rendu comme un seul modèle de domaine : livraison statique consciente des rafales, audit log immuable, déduplication déterministe, et client durci kiosque en magasin.",
      ar: 'تفعيل علامة استهلاكية يعمل عبر ثلاث أسطح عرض كنموذج مجال واحد: تسليم ثابت واعٍ بالذروات، سجل تدقيق غير قابل للتغيير، إزالة تكرار حتمية، وعميل مُقسَّى للكشك في المتجر.',
    },
    tech:    ['One domain model', 'Three render targets', 'Burst-aware', 'Audit-complete'],
    duration: { en: '3 months · 3 engineers', fr: '3 mois · 3 ingénieurs', ar: '3 أشهر · 3 مهندسين' },
  },
  {
    number:  'N°01',
    slug:    'tracksera',
    logo:    '/case-studies/tracksera-logo.png',
    cover:   '/case-studies/tracksera-cover.jpg',
    year:    '2024',
    sector:  { en: 'Distribution · Wholesale', fr: 'Distribution · Gros', ar: 'توزيع · جملة' },
    client:  'TrackSera',
    title: {
      en: 'Distribution management SaaS for Algeria. Web + 3 mobile apps.',
      fr: "SaaS de gestion de distribution pour l'Algérie. Web + 3 apps mobiles.",
      ar: 'منصة SaaS لإدارة التوزيع للجزائر. ويب + 3 تطبيقات جوال.',
    },
    dek: {
      en: 'Multi-tenant web platform, three native Android apps (Seller, Driver, Cashvan), GPS tracking, offline-first sync, Bluetooth receipt printing. Trilingual (AR · FR · EN).',
      fr: "Plateforme web multi-tenant, trois apps Android natives (Vendeur, Livreur, Cashvan), suivi GPS, synchronisation offline-first, impression Bluetooth. Trilingue (AR · FR · EN).",
      ar: 'منصة ويب متعددة المستأجرين، ثلاثة تطبيقات أندرويد أصلية (البائع، السائق، Cashvan)، تتبع GPS، مزامنة offline-first، طباعة Bluetooth. ثلاثية اللغة (ع · ف · إ).',
    },
    tech:    ['Node.js', 'PostgreSQL', 'Next.js', 'Kotlin Android'],
    duration: { en: '18 months · 4 engineers', fr: '18 mois · 4 ingénieurs', ar: '18 شهراً · 4 مهندسين' },
  },
];

const PAGE = {
  en: {
    eyebrow:   'Case Studies · Symloop delivery',
    title:     'What we ship. What it runs on.',
    dek:       'Production case studies from Symloop Technology — multi-tenant SaaS platforms, offline-first mobile apps, AI systems, and industrial automation delivered for operators across Algeria, MENA, and Francophone Africa. Every project in this catalogue runs in production today.',
    metaTitle: 'Case Studies — Symloop Technology | Production SaaS, Mobile & AI Projects',
    metaDesc:  'Real production case studies from Symloop Technology. Multi-tenant SaaS platforms, native Android apps, AI systems, and industrial automation delivered for Algerian, MENA, and European enterprises. See what we ship, who we serve, and how we engineer for production.',
    readCase:  'Read case study',
    allSectors: 'All sectors',
  },
  fr: {
    eyebrow:   'Études de cas · Livraison Symloop',
    title:     'Ce que nous livrons. Sur quoi ça tourne.',
    dek:       "Études de cas de production Symloop Technology — plateformes SaaS multi-tenant, apps mobiles offline-first, systèmes IA et automatisation industrielle livrés pour des opérateurs à travers l'Algérie, le MENA et l'Afrique francophone. Chaque projet de ce catalogue tourne en production aujourd'hui.",
    metaTitle: "Études de cas — Symloop Technology | Projets SaaS, Mobile & IA en Production",
    metaDesc:  "Études de cas réelles en production de Symloop Technology. Plateformes SaaS multi-tenant, apps Android natives, systèmes IA et automatisation industrielle livrés pour des entreprises algériennes, MENA et européennes. Découvrez ce que nous livrons et comment nous ingénierons pour la production.",
    readCase:  "Lire l'étude de cas",
    allSectors: 'Tous secteurs',
  },
  ar: {
    eyebrow:   'دراسات حالة · تسليم سيملوب',
    title:     'ما نُسلّمه. على ماذا يعمل.',
    dek:       'دراسات حالة إنتاج من سيملوب تكنولوجي — منصات SaaS متعددة المستأجرين، وتطبيقات جوال offline-first، وأنظمة ذكاء اصطناعي، وأتمتة صناعية مُسلَّمة لمشغّلين عبر الجزائر ومنطقة الشرق الأوسط وشمال أفريقيا وأفريقيا الفرانكوفونية. كل مشروع في هذا الكتالوج يعمل في الإنتاج اليوم.',
    metaTitle: 'دراسات الحالة — سيملوب تكنولوجي | منصات SaaS، تطبيقات جوال، ذكاء اصطناعي في الإنتاج',
    metaDesc:  'دراسات حالة إنتاج حقيقية من سيملوب تكنولوجي. منصات SaaS متعددة المستأجرين، تطبيقات Android أصلية، أنظمة ذكاء اصطناعي، وأتمتة صناعية مُسلَّمة للمؤسسات الجزائرية ومنطقة الشرق الأوسط وشمال أفريقيا وأوروبا.',
    readCase:  'اقرأ دراسة الحالة',
    allSectors: 'جميع القطاعات',
  },
};

export default function CaseStudiesHubPage() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const p = PAGE[locale] || PAGE.en;

  const collectionLd = {
    '@context':      'https://schema.org',
    '@type':         'CollectionPage',
    '@id':           'https://symloop.com/case-studies/#collection',
    name:            p.metaTitle,
    description:     p.metaDesc,
    url:             'https://symloop.com/case-studies/',
    inLanguage:      locale === 'ar' ? 'ar' : locale === 'fr' ? 'fr' : 'en',
    isPartOf:        { '@type': 'WebSite', name: 'Symloop Technology', url: 'https://symloop.com' },
    publisher:       { '@type': 'Organization', name: 'Symloop Technology', url: 'https://symloop.com' },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: CASE_STUDIES.length,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: CASE_STUDIES.map((cs, idx) => ({
        '@type':    'ListItem',
        position:   idx + 1,
        url:        `https://symloop.com/case-studies/${cs.slug}/`,
        item: {
          '@type':       'Article',
          headline:      `${cs.client} — ${cs.title.en}`,
          description:   cs.dek.en,
          url:           `https://symloop.com/case-studies/${cs.slug}/`,
          image:         `https://symloop.com${cs.cover}`,
          datePublished: cs.year,
          author:        { '@type': 'Organization', name: 'Symloop Technology' },
          about:         { '@type': 'SoftwareApplication', name: cs.client },
        },
      })),
    },
  };

  // Case-study FAQs for the hub page itself — targets buyer-intent searches
  // like "can I see Symloop's portfolio" / "do you have case studies".
  const faqLd = {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name:    'Does Symloop Technology publish case studies from real clients?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every case study in this catalogue describes a production system currently running in the Algerian or MENA market. We only publish with client consent and only projects that are live, not pitches or demos.' },
      },
      {
        '@type': 'Question',
        name:    'What industries does Symloop have case studies for?',
        acceptedAnswer: { '@type': 'Answer', text: 'Distribution and wholesale SaaS (TrackSera), with additional case studies coming in fintech, healthcare, industrial automation, and public sector. All focused on production systems with measurable outcomes.' },
      },
      {
        '@type': 'Question',
        name:    'Can Symloop build a similar multi-tenant SaaS for my company?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We engineer multi-tenant SaaS platforms with offline-capable mobile apps, multilingual interfaces (Arabic RTL + French + English), Bluetooth hardware integration, and enterprise-grade tenant isolation. The architecture patterns transfer across industries.' },
      },
      {
        '@type': 'Question',
        name:    'Where is Symloop Technology based and who do they serve?',
        acceptedAnswer: { '@type': 'Answer', text: 'Symloop is headquartered in Algeria and delivers engineering services across Algeria, Morocco, Tunisia, Saudi Arabia, UAE, Qatar, Kuwait, France, and Francophone Africa. Team operates in French, English, and Arabic.' },
      },
    ],
  };

  const breadcrumbs = [
    { name: 'Home',         url: 'https://symloop.com/' },
    { name: 'Case Studies', url: 'https://symloop.com/case-studies/' },
  ];

  const combinedLd = { '@context': 'https://schema.org', '@graph': [collectionLd, faqLd] };

  // Heavy keyword targeting — covers buyer-persona searches, industry verticals,
  // geographic queries, and "can I see your portfolio" intents.
  const seoKeywords = [
    'symloop case studies',
    'symloop portfolio',
    'symloop clients',
    'symloop customer stories',
    'symloop success stories',
    'symloop references',
    'production case studies Algeria',
    'études de cas Algérie',
    'etudes de cas symloop',
    'SaaS case study MENA',
    'mobile app case study algeria',
    'distribution software case study',
    'tracksera case study',
    'multi-tenant SaaS case study',
    'Android Kotlin case study Algeria',
    'fintech case study Algeria',
    'software development portfolio Algeria',
    'portfolio développement logiciel Algérie',
    'engineering case studies MENA',
    'production systems Algeria',
    'dragged deliveries case study',
    'real client projects algeria',
    'B2B SaaS portfolio MENA',
    'دراسات حالة سيملوب',
    'محفظة سيملوب',
    'أعمال سيملوب',
    'Symloop references bank',
    'Symloop fintech reference',
    'Symloop distribution reference',
    'case study multi-tenant architecture',
    'case study offline-first mobile',
    'case study GPS logistics MENA',
  ].join(', ');

  return (
    <>
      <SEO
        title={p.metaTitle}
        description={p.metaDesc}
        keywords={seoKeywords}
        type="website"
        structuredData={combinedLd}
        breadcrumbs={breadcrumbs}
      />

      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">

        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-20 lg:pb-28">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{p.eyebrow}</span>
                <span className="h-px flex-1 bg-white/10" />
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-5xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[1.02]"
              >
                {p.title}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-10 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl"
              >
                {p.dek}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── Case studies list ───────────────────────────────────── */}
        <section>
          <div className="max-w-7xl mx-auto">
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              variants={stagger}
              className="divide-y divide-white/[0.06]"
            >
              {CASE_STUDIES.map((cs) => (
                <motion.li key={cs.slug} variants={fadeUp}>
                  <Link href={`/case-studies/${cs.slug}/`} className="group block">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 px-6 lg:px-10 py-12 lg:py-16 hover:bg-white/[0.015] transition-colors">

                      {/* Number + client logo */}
                      <div className="lg:col-span-3">
                        <div className="flex items-center gap-4 mb-6">
                          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/30">{cs.number}</span>
                          <span className="h-px w-8 bg-white/10" />
                          <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/30">{cs.year}</span>
                        </div>
                        <div className="w-20 h-20 border border-white/[0.08] bg-white/[0.02] flex items-center justify-center overflow-hidden mb-6">
                          <Image src={cs.logo} alt={`${cs.client} logo`} width={56} height={56} className="object-contain" />
                        </div>
                        <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/40">
                          {cs.sector[locale] || cs.sector.en}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-6">
                        <div className="text-2xl font-light text-white mb-3">{cs.client}</div>
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-light tracking-tight leading-[1.15] mb-6 group-hover:text-white transition-colors">
                          {cs.title[locale] || cs.title.en}
                        </h2>
                        <p className="text-base lg:text-lg text-white/55 leading-relaxed font-light mb-6 max-w-2xl">
                          {cs.dek[locale] || cs.dek.en}
                        </p>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] tracking-[0.15em] uppercase text-white/40">
                          <span>{cs.duration[locale] || cs.duration.en}</span>
                          <span className="h-px w-4 bg-white/20" />
                          <span>{cs.tech.join(' · ')}</span>
                        </div>
                        <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-white border-b border-white/30 group-hover:border-white pb-2 transition-colors">
                          <span>{p.readCase}</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                        </div>
                      </div>

                      {/* Cover image */}
                      <div className="lg:col-span-3">
                        <div className="relative aspect-[4/3] border border-white/[0.06] overflow-hidden">
                          <Image
                            src={cs.cover}
                            alt={cs.client}
                            fill
                            sizes="(min-width: 1024px) 300px, 100vw"
                            className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                          />
                        </div>
                      </div>

                    </div>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <section className="border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div
              initial="hidden" whileInView="show"
              viewport={{ once: true, margin: '-100px' }} variants={stagger}
              className="max-w-3xl"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {locale === 'fr' ? "Votre projet ensuite ?" : locale === 'ar' ? 'مشروعك التالي؟' : 'Your project next?'}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1]">
                {locale === 'fr'
                  ? "Nous ingénierons des plateformes de production pour des opérateurs sérieux à travers le MENA et l'Afrique."
                  : locale === 'ar'
                  ? 'نحن نهندس منصات إنتاج لمشغّلين جادين عبر منطقة الشرق الأوسط وشمال أفريقيا وأفريقيا.'
                  : 'We engineer production platforms for serious operators across MENA and Africa.'}
              </motion.h2>
              <motion.div variants={fadeUp} className="mt-10">
                <Link
                  href="/contact/"
                  className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-white border-b border-white/30 hover:border-white pb-2 transition-colors"
                >
                  <span>
                    {locale === 'fr' ? 'Réserver un appel de 30 minutes' : locale === 'ar' ? 'احجز مكالمة 30 دقيقة' : 'Book a 30-minute call'}
                  </span>
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
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}
