// ============================================================================
// SYMLOOP — /services (editorial, SEO-first, zero boxes)
// Data loaded at build time from src/data/services.js via getStaticProps.
// Rich JSON-LD: Organization, OfferCatalog, ItemList, FAQPage, BreadcrumbList,
// SpeakableSpecification. Structured for maximum crawlability and LLM SEO.
// Updated 2026-04-09: 8 disciplines, insights cross-link, editorial routePath.
// ============================================================================

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import {
  Code2,
  Smartphone,
  Globe,
  Brain,
  Cpu,
  Shield,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react';

import {
  getAllServicesForLocale,
  formatPriceRange,
} from '../../data/services';

// Insight cards are inlined here instead of imported from src/data/insights.js
// because Turbopack throws "CJS module can't be async" when this page imports
// a second ESM data module. Keep this list in sync with src/data/insights.js
// — same shape, same keys. If you add a new insight there, mirror it here.
const INSIGHT_CARDS = [
  { key: 'ai',         path: '/insights/ai/' },
  { key: 'erp',        path: '/insights/erp/' },
  { key: 'cost',       path: '/insights/cost/' },
  { key: 'healthcare', path: '/insights/healthcare/' },
];

// ---------------------------------------------------------------------------
// Icon resolution (data stores icon as string key so it stays SSG-safe)
// ---------------------------------------------------------------------------
const ICONS = { Code2, Smartphone, Globe, Brain, Cpu, Shield };

// ---------------------------------------------------------------------------
// Copy (only chrome strings — content comes from data/services.js)
// ---------------------------------------------------------------------------
const CHROME = {
  fr: {
    eyebrow: 'Nos services',
    heroLine1: 'Ingénierie logicielle',
    heroLine2: 'bâtie en Algérie,',
    heroLine3: 'livrée au monde.',
    heroSub:
      "Symloop est une entreprise d'ingénierie logicielle basée à Alger. Nous concevons, développons et exploitons des logiciels sur mesure pour les entreprises algériennes et MENA — ERP, SaaS, applications mobiles, systèmes IoT, IA et plateformes cloud. 58 wilayas couvertes, sept ans d'expérience, plus de 120 clients.",
    metaEngineers: 'Ingénieurs seniors',
    metaYears: "Années d'expérience",
    metaWilayas: 'Wilayas couvertes',
    metaProjects: 'Projets livrés',
    sectionIndex: 'Index',
    sectionServices: 'Huit disciplines',
    sectionServicesSub:
      "Chaque service est conçu comme une discipline d'ingénierie à part entière. Nous ne faisons pas de sites web génériques : nous livrons des systèmes qui fonctionnent encore dans dix ans.",
    insightsEyebrow: '— Recherche',
    insightsTitle: 'Études publiées par cette pratique',
    insightsSub:
      "Nos ingénieurs publient des études longues sur les sujets qu'ils livrent en production. Pas de marketing, pas de slides de cabinet de conseil — du jugement d'ingénierie écrit.",
    insightsAll: 'Voir toutes les études',
    colDiscipline: 'Discipline',
    colStarting: 'À partir de',
    colDelivery: 'Délai',
    readFull: 'Lire la fiche complète',
    stackLabel: 'Stack de référence',
    featuresLabel: 'Ce que nous livrons',
    priceLabel: 'Tarification',
    deliveryLabel: 'Délai de livraison',
    prose1Heading: 'Une entreprise, pas un freelance',
    prose1Body:
      "Symloop n'est pas un regroupement de freelances. Nous sommes une société d'ingénierie algérienne avec un siège à Alger, des contrats signés, une facturation conforme et une équipe salariée d'ingénieurs seniors. Nos clients incluent des PME industrielles, des marques e-commerce, des administrations et des startups financées. Chaque mission est encadrée par un chef de projet et revue par deux ingénieurs.",
    prose2Heading: 'Pourquoi choisir une société locale',
    prose2Body:
      "Parce qu'un projet logiciel ne se termine pas à la livraison. Il commence. Nous parlons arabe, français et anglais. Nous comprenons la facturation algérienne, les exigences de la CNRC, les modes de paiement CIB et Edahabia, les contraintes de Yalidine et ZR Express, les spécificités du droit du travail et de la loi 18-07 sur les données personnelles. Nous sommes joignables à l'heure d'Alger, pas à l'heure de San Francisco.",
    prose3Heading: 'La méthode Symloop',
    prose3Body:
      "Chaque projet commence par une semaine de discovery technique gratuite. Nous cartographions votre domaine métier, identifions les goulots d'étranglement et proposons une architecture cible. Ensuite nous livrons en sprints de deux semaines avec démo, code review à deux ingénieurs, tests automatisés, CI/CD et observabilité de bout en bout. Aucune surprise à la facture. Aucune dette technique cachée.",
    faqTitle: 'Questions fréquentes',
    ctaTitle: 'Parlez à un ingénieur.',
    ctaSub:
      "Expliquez-nous votre problème en cinq minutes. Si c'est hors-scope, nous vous dirons vers qui aller. Si c'est pour nous, vous aurez un devis sous 48 heures.",
    ctaQuote: 'Demander un devis',
    ctaContact: 'Nous contacter',
  },
  en: {
    eyebrow: 'Our services',
    heroLine1: 'Software engineering',
    heroLine2: 'built in Algeria,',
    heroLine3: 'shipped worldwide.',
    heroSub:
      'Symloop is a software engineering company headquartered in Algiers. We design, build and operate custom software for Algerian and MENA enterprises — ERPs, SaaS, mobile apps, IoT systems, AI and cloud platforms. 58 wilayas covered, seven years of experience, 120+ clients.',
    metaEngineers: 'Senior engineers',
    metaYears: 'Years of experience',
    metaWilayas: 'Wilayas covered',
    metaProjects: 'Projects delivered',
    sectionIndex: 'Index',
    sectionServices: 'Eight disciplines',
    sectionServicesSub:
      'Each service is a distinct engineering discipline. We do not build generic websites — we ship systems that still run well ten years later.',
    insightsEyebrow: '— Research',
    insightsTitle: 'Insights from this practice',
    insightsSub:
      'Our engineers publish long-form briefs on the topics they ship into production. No marketing, no consulting slides — written engineering judgment.',
    insightsAll: 'See all insights',
    colDiscipline: 'Discipline',
    colStarting: 'Starting at',
    colDelivery: 'Delivery',
    readFull: 'Read full brief',
    stackLabel: 'Reference stack',
    featuresLabel: 'What we deliver',
    priceLabel: 'Pricing',
    deliveryLabel: 'Delivery time',
    prose1Heading: 'A company, not a freelancer pool',
    prose1Body:
      'Symloop is not a freelancer collective. We are an Algerian engineering firm with a headquarters in Algiers, signed contracts, compliant billing and a salaried team of senior engineers. Clients range from industrial SMBs and e-commerce brands to government bodies and funded startups. Every engagement is led by a project manager and reviewed by two engineers.',
    prose2Heading: 'Why choose a local firm',
    prose2Body:
      'Because a software project does not end at delivery — it begins there. We speak Arabic, French and English. We understand Algerian invoicing, CNRC requirements, CIB and Edahabia payments, Yalidine and ZR Express constraints, labor law and the 18-07 data protection law. We are reachable on Algiers time, not San Francisco time.',
    prose3Heading: 'The Symloop method',
    prose3Body:
      'Every project starts with a free one-week technical discovery. We map your business domain, identify bottlenecks and propose a target architecture. Then we ship in two-week sprints with live demo, dual-engineer code review, automated tests, CI/CD and end-to-end observability. No billing surprises. No hidden technical debt.',
    faqTitle: 'Frequently asked questions',
    ctaTitle: 'Talk to an engineer.',
    ctaSub:
      'Explain your problem in five minutes. If it is out of scope we will tell you who to talk to. If it is for us, you get a quote within 48 hours.',
    ctaQuote: 'Request a quote',
    ctaContact: 'Contact us',
  },
  ar: {
    eyebrow: 'خدماتنا',
    heroLine1: 'هندسة برمجيات',
    heroLine2: 'صُنعت في الجزائر،',
    heroLine3: 'تُسلَّم للعالم.',
    heroSub:
      'سيملوب شركة هندسة برمجيات مقرها الجزائر العاصمة. نصمم ونطور ونشغّل برمجيات مخصصة للشركات الجزائرية ومنطقة مينا — ERP و SaaS وتطبيقات الجوال وأنظمة IoT والذكاء الاصطناعي ومنصات السحابة. 58 ولاية مغطاة، سبع سنوات من الخبرة، أكثر من 120 عميلاً.',
    metaEngineers: 'مهندسون كبار',
    metaYears: 'سنوات الخبرة',
    metaWilayas: 'ولايات مغطاة',
    metaProjects: 'مشروع مُسلَّم',
    sectionIndex: 'الفهرس',
    sectionServices: 'ثمانية تخصصات',
    sectionServicesSub:
      'كل خدمة هي تخصص هندسي مستقل. لا نبني مواقع عامة — بل أنظمة تعمل بشكل جيد بعد عشر سنوات.',
    insightsEyebrow: '— أبحاث',
    insightsTitle: 'دراسات منشورة من هذه الممارسة',
    insightsSub:
      'مهندسونا ينشرون دراسات مطوّلة حول المواضيع التي يسلّمونها في الإنتاج. لا تسويق، ولا شرائح استشارية — حكم هندسي مكتوب.',
    insightsAll: 'عرض كل الدراسات',
    colDiscipline: 'التخصص',
    colStarting: 'ابتداءً من',
    colDelivery: 'المدة',
    readFull: 'اقرأ الملف الكامل',
    stackLabel: 'المكدّس المرجعي',
    featuresLabel: 'ما نسلّمه',
    priceLabel: 'التسعير',
    deliveryLabel: 'مدة التسليم',
    prose1Heading: 'شركة، لا تجمّع مستقلين',
    prose1Body:
      'سيملوب ليست تجمع مستقلين. نحن شركة هندسية جزائرية لها مقر في الجزائر العاصمة، وعقود موقعة، وفوترة مطابقة، وفريق موظف من المهندسين الكبار. يتراوح عملاؤنا بين الشركات الصناعية الصغيرة والمتوسطة وعلامات التجارة الإلكترونية والهيئات الحكومية والشركات الناشئة الممولة.',
    prose2Heading: 'لماذا تختار شركة محلية',
    prose2Body:
      'لأن المشروع البرمجي لا ينتهي عند التسليم بل يبدأ عنده. نتحدث العربية والفرنسية والإنجليزية. نفهم الفوترة الجزائرية ومتطلبات CNRC وطرق الدفع CIB و Edahabia وقيود Yalidine و ZR Express وقانون العمل والقانون 18-07 لحماية البيانات.',
    prose3Heading: 'منهجية سيملوب',
    prose3Body:
      'يبدأ كل مشروع بأسبوع مجاني من الاستكشاف التقني. نرسم خريطة مجالك التجاري ونحدد نقاط الاختناق ونقترح الهندسة المستهدفة. ثم نسلم في دورات أسبوعين مع عرض حي ومراجعة من مهندسين واختبارات آلية و CI/CD ومراقبة شاملة.',
    faqTitle: 'الأسئلة الشائعة',
    ctaTitle: 'تحدث إلى مهندس.',
    ctaSub:
      'اشرح مشكلتك في خمس دقائق. إذا كانت خارج النطاق سنخبرك بمن تتحدث إليه. إذا كانت لنا، ستحصل على عرض أسعار خلال 48 ساعة.',
    ctaQuote: 'طلب عرض سعر',
    ctaContact: 'اتصل بنا',
  },
};

// ---------------------------------------------------------------------------
// Stats (hard facts)
// ---------------------------------------------------------------------------
const STATS = [
  { value: '25+', key: 'metaEngineers' },
  { value: '7', key: 'metaYears' },
  { value: '58', key: 'metaWilayas' },
  { value: '120+', key: 'metaProjects' },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function ServicesPage({ services, locale: pageLocale }) {
  const router = useRouter();
  const { t } = useTranslation('common');
  const locale = pageLocale || router.locale || 'fr';
  const isRTL = locale === 'ar';
  const c = CHROME[locale] || CHROME.fr;

  const baseUrl = 'https://symloop.com';
  const pageUrl = `${baseUrl}/${locale}/services/`;

  // Meta
  const pageMetaTitle =
    locale === 'fr'
      ? "Services d'ingénierie logicielle en Algérie — Symloop"
      : locale === 'ar'
      ? 'خدمات هندسة البرمجيات في الجزائر — سيملوب'
      : 'Software Engineering Services in Algeria — Symloop';

  const pageMetaDescription =
    locale === 'fr'
      ? "Symloop — entreprise d'ingénierie logicielle à Alger. Développement sur mesure, applications mobiles, IA, IoT, cloud et cybersécurité. 58 wilayas, 120+ clients, devis sous 48h."
      : locale === 'ar'
      ? 'سيملوب — شركة هندسة البرمجيات في الجزائر العاصمة. تطوير مخصص، تطبيقات جوال، ذكاء اصطناعي، IoT، سحابة وأمن سيبراني. 58 ولاية، أكثر من 120 عميلاً.'
      : 'Symloop — software engineering company in Algiers. Custom development, mobile apps, AI, IoT, cloud and cybersecurity. 58 wilayas, 120+ clients, quote within 48h.';

  // FAQ aggregation (top 2 FAQs per service → FAQPage)
  const aggregatedFaqs = services.flatMap((s) => s.faqs.slice(0, 2));

  // ---- JSON-LD ----
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'Symloop',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: pageMetaDescription,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Algiers',
      addressRegion: 'Alger',
      postalCode: '16000',
      addressCountry: 'DZ',
    },
    areaServed: { '@type': 'Country', name: 'Algeria' },
    sameAs: [
      'https://www.linkedin.com/company/symloop',
      'https://twitter.com/symloop',
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/${locale}/` },
      { '@type': 'ListItem', position: 2, name: 'Services', item: pageUrl },
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: pageMetaTitle,
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${baseUrl}/${locale}/services/${s.slug}/`,
      name: s.title,
    })),
  };

  const offerCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: pageMetaTitle,
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        description: s.intro,
        url: `${baseUrl}/${locale}/services/${s.slug}/`,
        provider: { '@id': `${baseUrl}/#organization` },
        areaServed: { '@type': 'Country', name: 'Algeria' },
      },
      priceCurrency: 'DZD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'DZD',
        minPrice: s.priceMin,
        ...(s.priceMax ? { maxPrice: s.priceMax } : {}),
      },
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: aggregatedFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: pageUrl,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '[data-speakable]'],
    },
  };

  return (
    <>
      <Head>
        <title>{pageMetaTitle}</title>
        <meta name="description" content={pageMetaDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageMetaTitle} />
        <meta property="og:description" content={pageMetaDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:locale" content={locale === 'ar' ? 'ar_DZ' : locale === 'en' ? 'en_US' : 'fr_DZ'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageMetaTitle} />
        <meta name="twitter:description" content={pageMetaDescription} />
        <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr/services/`} />
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/en/services/`} />
        <link rel="alternate" hrefLang="ar" href={`${baseUrl}/ar/services/`} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/fr/services/`} />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      </Head>

      <main
        dir={isRTL ? 'rtl' : 'ltr'}
        className="min-h-screen bg-black text-white antialiased selection:bg-white selection:text-black"
        style={{
          fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
        }}
      >
        {/* Local styles for editorial typography */}
        <style jsx global>{`
          .serif {
            font-family: 'Instrument Serif', 'Cormorant Garamond', Georgia, serif;
            font-weight: 400;
            letter-spacing: -0.01em;
          }
          .mono {
            font-family: 'JetBrains Mono', 'SF Mono', ui-monospace, monospace;
            font-feature-settings: 'tnum';
          }
          .hairline {
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22) 50%, transparent);
          }
          .hairline-solid {
            height: 1px;
            background: rgba(255,255,255,0.12);
          }
          .link-u {
            background-image: linear-gradient(currentColor, currentColor);
            background-repeat: no-repeat;
            background-size: 100% 1px;
            background-position: 0 100%;
            transition: background-size .35s ease;
          }
          .link-u:hover {
            background-size: 0% 1px;
            background-position: 100% 100%;
          }
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>

        {/* ========================================================== */}
        {/* HERO                                                       */}
        {/* ========================================================== */}
        <section className="relative border-b border-white/10">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 pt-28 pb-20">
            {/* Eyebrow row */}
            <div className="flex items-center justify-between mb-16">
              <span className="mono text-[11px] uppercase tracking-[0.25em] text-white/50">
                / {c.eyebrow}
              </span>
              <span className="mono text-[11px] uppercase tracking-[0.25em] text-white/30">
                Algiers · 36.7538° N
              </span>
            </div>

            {/* Display headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="serif text-[44px] sm:text-[68px] lg:text-[112px] leading-[0.92] tracking-[-0.02em] max-w-[18ch]"
            >
              <span className="italic text-white/90">{c.heroLine1}</span>
              <br />
              <span className="text-white">{c.heroLine2}</span>
              <br />
              <span className="text-white/60">{c.heroLine3}</span>
            </motion.h1>

            {/* Subheadline */}
            <div className="mt-14 grid grid-cols-12 gap-6">
              <div className="hidden lg:block lg:col-span-1" />
              <p
                data-speakable
                className="col-span-12 lg:col-span-7 text-[17px] sm:text-[19px] leading-[1.55] text-white/70 max-w-[62ch]"
              >
                {c.heroSub}
              </p>
            </div>

            {/* Metadata strip */}
            <div className="mt-20 hairline" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 py-8">
              {STATS.map((s) => (
                <div key={s.key}>
                  <div className="serif text-5xl sm:text-6xl text-white leading-none">
                    {s.value}
                  </div>
                  <div className="mono mt-3 text-[10px] uppercase tracking-[0.2em] text-white/45">
                    {c[s.key]}
                  </div>
                </div>
              ))}
            </div>
            <div className="hairline" />
          </div>
        </section>

        {/* ========================================================== */}
        {/* INDEX (quick jump table — no boxes, editorial table)       */}
        {/* ========================================================== */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-20">
            <div className="grid grid-cols-12 gap-6 mb-10">
              <div className="col-span-12 lg:col-span-4">
                <div className="mono text-[11px] uppercase tracking-[0.25em] text-white/45">
                  / {c.sectionIndex}
                </div>
                <h2 className="serif mt-4 text-4xl sm:text-5xl lg:text-6xl leading-[1] tracking-tight">
                  <span className="italic">{c.sectionServices}</span>
                </h2>
              </div>
              <p className="col-span-12 lg:col-span-7 lg:col-start-6 text-[16px] leading-relaxed text-white/60 self-end">
                {c.sectionServicesSub}
              </p>
            </div>

            {/* Index table (pure grid, zero boxes) */}
            <div className="hairline-solid" />
            <div className="mono text-[10px] uppercase tracking-[0.22em] text-white/35 grid grid-cols-12 py-4 gap-4">
              <div className="col-span-1">№</div>
              <div className="col-span-6 sm:col-span-5">{c.colDiscipline}</div>
              <div className="hidden sm:block sm:col-span-3">{c.colStarting}</div>
              <div className="col-span-5 sm:col-span-3 text-right">{c.colDelivery}</div>
            </div>
            <div className="hairline-solid" />

            {services.map((s, i) => (
              <Link
                key={s.id}
                href={`/services/${s.routePath}/`}
                locale={locale}
                className="group block"
              >
                <div className="grid grid-cols-12 gap-4 py-6 items-baseline transition-colors hover:bg-white/[0.015]">
                  <div className="col-span-1 mono text-[12px] text-white/40">{s.number}</div>
                  <div className="col-span-6 sm:col-span-5">
                    <div className="serif text-2xl sm:text-3xl tracking-tight text-white group-hover:italic transition-all">
                      {s.title}
                    </div>
                    <div className="mono text-[10px] uppercase tracking-[0.2em] text-white/35 mt-2">
                      {s.category}
                    </div>
                  </div>
                  <div className="hidden sm:block sm:col-span-3 mono text-[13px] text-white/55">
                    {formatPriceRange(s.priceMin, null, locale)}
                  </div>
                  <div className="col-span-5 sm:col-span-3 text-right mono text-[13px] text-white/55 flex items-center justify-end gap-3">
                    <span>{s.deliveryTime}</span>
                    <ArrowUpRight
                      className="w-4 h-4 text-white/30 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                      style={{ color: s.accent }}
                    />
                  </div>
                </div>
                <div className="hairline-solid" />
              </Link>
            ))}
          </div>
        </section>

        {/* ========================================================== */}
        {/* FULL EDITORIAL SERVICE ENTRIES                              */}
        {/* ========================================================== */}
        <section>
          {services.map((s, idx) => {
            const Icon = ICONS[s.icon] || Code2;
            return (
              <article
                key={s.id}
                id={s.id}
                className="border-b border-white/10"
                style={{ scrollMarginTop: '100px' }}
              >
                <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
                  <div className="grid grid-cols-12 gap-6 lg:gap-10">
                    {/* LEFT RAIL: number + icon (sticky-feeling) */}
                    <div className="col-span-12 lg:col-span-3">
                      <div className="lg:sticky lg:top-24">
                        <div
                          className="mono text-[120px] sm:text-[160px] leading-none tracking-tighter"
                          style={{ color: s.accent, opacity: 0.85 }}
                        >
                          {s.number}
                        </div>
                        <div className="mt-6 flex items-center gap-3">
                          <Icon className="w-5 h-5" style={{ color: s.accent }} />
                          <span className="mono text-[10px] uppercase tracking-[0.22em] text-white/50">
                            {s.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT: content */}
                    <div className="col-span-12 lg:col-span-9 lg:pl-8">
                      <h2 className="serif text-4xl sm:text-5xl lg:text-[68px] leading-[0.98] tracking-tight max-w-[18ch]">
                        {s.title}
                      </h2>
                      <p className="mt-6 serif italic text-xl sm:text-2xl text-white/60 max-w-[46ch]">
                        {s.tagline || ''}
                      </p>

                      <p
                        data-speakable
                        className="mt-10 text-[17px] leading-[1.65] text-white/75 max-w-[66ch]"
                      >
                        {s.intro}
                      </p>

                      {/* Long description — flowing paragraphs */}
                      <div className="mt-8 space-y-6 max-w-[66ch]">
                        {(s.longDescription || []).map((p, i) => (
                          <p
                            key={i}
                            className="text-[15.5px] leading-[1.75] text-white/60"
                          >
                            {p}
                          </p>
                        ))}
                      </div>

                      {/* Meta row: price + delivery (inline, no boxes) */}
                      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-8 max-w-[680px]">
                        <div>
                          <div className="mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                            {c.priceLabel}
                          </div>
                          <div className="mt-2 serif text-2xl text-white">
                            {formatPriceRange(s.priceMin, s.priceMax, locale)}
                          </div>
                        </div>
                        <div>
                          <div className="mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                            {c.deliveryLabel}
                          </div>
                          <div className="mt-2 serif text-2xl text-white">
                            {s.deliveryTime}
                          </div>
                        </div>
                      </div>

                      {/* Features — hairline list, no boxes */}
                      <div className="mt-14">
                        <div className="mono text-[10px] uppercase tracking-[0.22em] text-white/35 mb-5">
                          — {c.featuresLabel}
                        </div>
                        <ul className="divide-y divide-white/10 border-y border-white/10">
                          {s.features.map((f, i) => (
                            <li
                              key={i}
                              className="flex items-baseline gap-5 py-4 text-[15px] text-white/75 leading-relaxed"
                            >
                              <span className="mono text-[10px] text-white/30 w-6 shrink-0">
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech stack — inline plain text */}
                      {s.techStack && s.techStack.length > 0 && (
                        <div className="mt-12">
                          <div className="mono text-[10px] uppercase tracking-[0.22em] text-white/35 mb-4">
                            — {c.stackLabel}
                          </div>
                          <div className="flex flex-wrap gap-x-5 gap-y-2 mono text-[12px] text-white/55">
                            {s.techStack.map((t, i) => (
                              <span key={t}>
                                {t}
                                {i < s.techStack.length - 1 && (
                                  <span className="text-white/20 ml-5">·</span>
                                )}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Read full link */}
                      <div className="mt-14">
                        <Link
                          href={`/services/${s.routePath}/`}
                          locale={locale}
                          className="group inline-flex items-baseline gap-3 serif italic text-2xl text-white"
                        >
                          <span className="link-u">{c.readFull}</span>
                          <ArrowRight
                            className="w-5 h-5 translate-y-0.5 group-hover:translate-x-1 transition-transform"
                            style={{ color: s.accent }}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* ========================================================== */}
        {/* LONG-FORM PROSE — "why a local firm" / method              */}
        {/* ========================================================== */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-28">
            <div className="grid grid-cols-12 gap-6">
              {[
                { h: c.prose1Heading, p: c.prose1Body, n: 'I' },
                { h: c.prose2Heading, p: c.prose2Body, n: 'II' },
                { h: c.prose3Heading, p: c.prose3Body, n: 'III' },
              ].map((block, i) => (
                <div
                  key={i}
                  className="col-span-12 lg:col-span-4 lg:border-l lg:border-white/10 lg:pl-8 first:lg:border-l-0 first:lg:pl-0"
                >
                  <div className="mono text-[10px] tracking-[0.25em] text-white/35">— {block.n}</div>
                  <h3 className="serif italic text-3xl text-white mt-5 leading-tight">
                    {block.h}
                  </h3>
                  <p className="mt-6 text-[15px] leading-[1.75] text-white/60">
                    {block.p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* FAQ — editorial Q/A list                                    */}
        {/* ========================================================== */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-28">
            <div className="grid grid-cols-12 gap-6 mb-12">
              <div className="col-span-12 lg:col-span-5">
                <div className="mono text-[11px] uppercase tracking-[0.25em] text-white/45">
                  / FAQ
                </div>
                <h2 className="serif mt-4 text-4xl sm:text-5xl lg:text-6xl leading-[1] tracking-tight">
                  <span className="italic">{c.faqTitle}</span>
                </h2>
              </div>
            </div>

            <div className="hairline-solid" />
            {aggregatedFaqs.map((f, i) => (
              <details
                key={i}
                className="group border-b border-white/10 py-6 transition-colors"
              >
                <summary className="flex items-baseline gap-6 cursor-pointer list-none">
                  <span className="mono text-[11px] text-white/35 mt-1 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="serif text-xl sm:text-2xl text-white group-open:italic flex-1">
                    {f.q}
                  </span>
                  <span className="mono text-white/40 group-open:rotate-45 transition-transform text-xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-5 ml-[2.6rem] text-[15px] leading-[1.75] text-white/65 max-w-[72ch]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ========================================================== */}
        {/* INSIGHTS — research published from this practice            */}
        {/* Cross-links every service page to /insights/* for SEO and  */}
        {/* LLM classification. This is the "Accenture power slot".    */}
        {/* ========================================================== */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-28">
            <div className="grid grid-cols-12 gap-6 mb-14">
              <div className="col-span-12 lg:col-span-7">
                <div className="mono text-[11px] uppercase tracking-[0.25em] text-white/45">
                  {c.insightsEyebrow}
                </div>
                <h2 className="serif mt-4 text-4xl sm:text-5xl lg:text-6xl leading-[1] tracking-tight">
                  <span className="italic">{c.insightsTitle}</span>
                </h2>
                <p className="mt-6 text-[15px] leading-[1.75] text-white/55 max-w-[58ch]">
                  {c.insightsSub}
                </p>
              </div>
              <div className="col-span-12 lg:col-span-5 lg:flex lg:items-end lg:justify-end">
                <Link
                  href="/insights/"
                  locale={locale}
                  className="group inline-flex items-baseline gap-3 serif italic text-2xl text-white"
                >
                  <span className="link-u">{c.insightsAll}</span>
                  <ArrowRight className="w-5 h-5 translate-y-0.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {INSIGHT_CARDS.map((it, i) => {
                const num = String(i + 1).padStart(2, '0');
                return (
                  <li key={it.key} className="bg-black">
                    <Link
                      href={it.path}
                      locale={locale}
                      className="group block h-full p-7 lg:p-8 transition-colors hover:bg-white/[0.025]"
                    >
                      <div className="flex items-start justify-between mb-8">
                        <span className="mono text-[10px] tracking-[0.2em] uppercase text-white/40 group-hover:text-white/70 transition-colors">
                          {t(`home.insights.items.${it.key}.kind`)}
                        </span>
                        <span className="mono text-[10px] tracking-[0.15em] text-white/30">
                          {num}
                        </span>
                      </div>
                      <h3 className="serif text-xl lg:text-[22px] leading-snug tracking-tight text-white mb-3">
                        {t(`home.insights.items.${it.key}.title`)}
                      </h3>
                      <p className="text-[13px] leading-[1.7] text-white/50 mb-6 line-clamp-3">
                        {t(`home.insights.items.${it.key}.description`)}
                      </p>
                      <div className="pt-5 border-t border-white/10 flex items-center justify-between mono text-[10px] uppercase tracking-[0.15em] text-white/35">
                        <span>{t(`home.insights.items.${it.key}.meta`)}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ========================================================== */}
        {/* CLOSING CTA — editorial                                    */}
        {/* ========================================================== */}
        <section>
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-32">
            <div className="grid grid-cols-12 gap-6 items-end">
              <div className="col-span-12 lg:col-span-8">
                <div className="mono text-[11px] uppercase tracking-[0.25em] text-white/45 mb-6">
                  — /next
                </div>
                <h2 className="serif text-5xl sm:text-7xl lg:text-[128px] leading-[0.92] tracking-tight">
                  <span className="italic">{c.ctaTitle}</span>
                </h2>
                <p className="mt-10 text-[17px] leading-[1.65] text-white/60 max-w-[58ch]">
                  {c.ctaSub}
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 lg:items-end">
                <Link
                  href="/contact"
                  locale={locale}
                  className="group inline-flex items-baseline gap-3 serif italic text-3xl text-white"
                >
                  <span className="link-u">{c.ctaQuote}</span>
                  <ArrowRight className="w-6 h-6 translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  locale={locale}
                  className="group inline-flex items-baseline gap-3 serif text-2xl text-white/70 hover:text-white"
                >
                  <span className="link-u">{c.ctaContact}</span>
                  <ArrowRight className="w-5 h-5 translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------------------------
// SSG — build-time data injection
// ---------------------------------------------------------------------------
export async function getStaticProps({ locale }) {
  const services = getAllServicesForLocale(locale || 'fr');
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      services,
      locale: locale || 'fr',
    },
  };
}
