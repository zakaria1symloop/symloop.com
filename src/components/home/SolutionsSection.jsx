// ============================================================================
// SYMLOOP — SolutionsSection (editorial redesign, zero boxes)
// Matches the aesthetic of ExpertiseSection and /services. No cards, no
// gradients — hairline-divided numbered rows, same font as the rest of the
// homepage (Changa / global inherit).
// ============================================================================

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';
import {
  Code2,
  Smartphone,
  Globe,
  ShoppingCart,
  Wifi,
  Network,
  Database,
  Cloud,
  Wrench,
  Megaphone,
  Users,
  Shield,
  Landmark,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Data (unchanged schema + content, only structure trimmed where redundant)
// ---------------------------------------------------------------------------
const ACCENTS = [
  '#10b981', '#a855f7', '#f97316', '#6366f1', '#14b8a6',
  '#06b6d4', '#ef4444', '#22c55e', '#0ea5e9', '#8b5cf6',
  '#eab308', '#f59e0b', '#3b82f6',
];

const getSolutions = (t) => [
  {
    title: t('solutions.digitalization.title', { defaultValue: 'Digitalisation Services Gouvernementaux' }),
    slug: 'digitalisation-algerie',
    subtitle: t('solutions.digitalization.subtitle', { defaultValue: 'E-Gouvernement & Transformation Digitale' }),
    punchline: t('solutions.digitalization.punchline', { defaultValue: 'Digitalisation complète des secteurs publics en Algérie avec IA et technologies modernes.' }),
    icon: Landmark,
    keywords: 'digitalisation Algérie, e-gouvernement, numérisation services publics',
    featured: true,
    schema: {
      '@type': 'GovernmentService',
      name: 'Digitalisation Services Gouvernementaux Algérie',
      description: 'Solutions de digitalisation pour le secteur public algérien.',
      provider: { '@type': 'Organization', name: 'Symloop', founder: 'Zakaria' },
      serviceType: 'Government Digitization',
      areaServed: ['Algérie', 'Alger', 'MENA'],
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    },
  },
  {
    title: t('solutions.mobile.title'),
    slug: 'applications-mobiles-flutter-react-native-algerie',
    subtitle: 'Flutter & React Native',
    punchline: t('solutions.mobile.punchline'),
    icon: Smartphone,
    keywords: 'développement application mobile Algérie, Flutter, React Native',
    schema: {
      '@type': 'Service',
      name: "Développement d'Applications Mobiles Flutter React Native",
      description: "Création d'applications iOS et Android avec Flutter et React Native en Algérie.",
      provider: { '@type': 'Organization', name: 'Symloop', founder: 'Zakaria' },
      areaServed: ['Alger', 'Algérie'],
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    },
  },
  {
    title: t('solutions.ecommerce.title'),
    slug: 'site-ecommerce-paiement-cib-edahabia-algerie',
    subtitle: t('solutions.ecommerce.subtitle'),
    punchline: t('solutions.ecommerce.punchline'),
    icon: ShoppingCart,
    keywords: 'site e-commerce CIB Algérie, Edahabia, vente en ligne',
    schema: {
      '@type': 'Service',
      name: 'Sites E-commerce avec Paiement CIB Edahabia',
      description: 'Boutiques en ligne avec intégration paiement CIB et Edahabia en Algérie.',
      provider: { '@type': 'Organization', name: 'Symloop', founder: 'Zakaria' },
      areaServed: ['Alger', 'Algérie'],
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    },
  },
  {
    title: t('solutions.erp.title'),
    slug: 'logiciel-erp-crm-personnalise-algerie',
    subtitle: t('solutions.erp.subtitle'),
    punchline: t('solutions.erp.punchline'),
    icon: Code2,
    keywords: 'logiciel ERP sur mesure Algérie, CRM personnalisé',
    schema: {
      '@type': 'Service',
      name: 'Logiciels ERP CRM Sur Mesure',
      description: "Développement d'ERP et CRM personnalisés pour entreprises algériennes.",
      provider: { '@type': 'Organization', name: 'Symloop', founder: 'Zakaria' },
      areaServed: ['Alger', 'Algérie'],
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    },
  },
  {
    title: t('solutions.ai.title'),
    slug: 'intelligence-artificielle-assistant-vocal-algerie',
    subtitle: t('solutions.ai.subtitle'),
    punchline: t('solutions.ai.punchline'),
    icon: Users,
    keywords: 'assistant vocal IA Algérie, ChatGPT entreprise',
    schema: {
      '@type': 'Service',
      name: 'Intelligence Artificielle et Assistants Vocaux',
      description: 'Solutions IA et assistants vocaux pour entreprises en Algérie.',
      provider: { '@type': 'Organization', name: 'Symloop', founder: 'Zakaria' },
      areaServed: ['Alger', 'Algérie'],
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    },
  },
  {
    title: t('solutions.iot.title'),
    slug: 'solutions-iot-esp32-objets-connectes-algerie',
    subtitle: t('solutions.iot.subtitle'),
    punchline: t('solutions.iot.punchline'),
    icon: Wifi,
    keywords: 'solutions IoT Algérie, ESP32, objets connectés',
    schema: {
      '@type': 'Service',
      name: 'Solutions IoT et Objets Connectés',
      description: 'Solutions IoT avec ESP32 et capteurs en Algérie.',
      provider: { '@type': 'Organization', name: 'Symloop', founder: 'Zakaria' },
      areaServed: ['Alger', 'Algérie'],
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    },
  },
  {
    title: t('solutions.cybersecurity.title'),
    slug: 'cybersecurite-pme-protection-donnees-algerie',
    subtitle: t('solutions.cybersecurity.subtitle'),
    punchline: t('solutions.cybersecurity.punchline'),
    icon: Shield,
    keywords: 'cybersécurité PME Algérie, protection données',
    schema: {
      '@type': 'Service',
      name: 'Solutions Cybersécurité PME',
      description: 'Services de cybersécurité pour PME en Algérie.',
      provider: { '@type': 'Organization', name: 'Symloop', founder: 'Zakaria' },
      areaServed: ['Alger', 'Algérie'],
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    },
  },
  {
    title: t('solutions.web.title'),
    slug: 'creation-site-web-professionnel-algerie',
    subtitle: t('solutions.web.subtitle'),
    punchline: t('solutions.web.punchline'),
    icon: Globe,
    keywords: 'création site web Algérie, développeur web',
    schema: {
      '@type': 'Service',
      name: 'Création de Sites Web Professionnels',
      description: 'Conception de sites web professionnels optimisés SEO en Algérie.',
      provider: { '@type': 'Organization', name: 'Symloop', founder: 'Zakaria' },
      areaServed: ['Alger', 'Algérie'],
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    },
  },
  {
    title: t('solutions.cloud.title'),
    slug: 'solutions-cloud-infrastructure-serveurs-algerie',
    subtitle: t('solutions.cloud.subtitle'),
    punchline: t('solutions.cloud.punchline'),
    icon: Cloud,
    keywords: 'solutions cloud Algérie, hébergement serveurs',
    schema: {
      '@type': 'Service',
      name: 'Solutions Cloud et Infrastructure',
      description: 'Services cloud et infrastructure pour entreprises en Algérie.',
      provider: { '@type': 'Organization', name: 'Symloop', founder: 'Zakaria' },
      areaServed: ['Alger', 'Algérie'],
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    },
  },
  {
    title: t('solutions.digital.title'),
    slug: 'transformation-digitale-entreprise-algerie',
    subtitle: t('solutions.digital.subtitle'),
    punchline: t('solutions.digital.punchline'),
    icon: Wrench,
    keywords: 'transformation digitale Algérie, modernisation entreprise',
    schema: {
      '@type': 'Service',
      name: 'Transformation Digitale Entreprise',
      description: 'Transformation digitale pour entreprises algériennes.',
      provider: { '@type': 'Organization', name: 'Symloop', founder: 'Zakaria' },
      areaServed: ['Alger', 'Algérie'],
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    },
  },
  {
    title: t('solutions.marketing.title'),
    slug: 'marketing-digital-seo-algerie',
    subtitle: t('solutions.marketing.subtitle'),
    punchline: t('solutions.marketing.punchline'),
    icon: Megaphone,
    keywords: 'marketing digital Algérie, SEO référencement',
    schema: {
      '@type': 'Service',
      name: 'Marketing Digital et SEO',
      description: 'Marketing digital et SEO en Algérie.',
      provider: { '@type': 'Organization', name: 'Symloop', founder: 'Zakaria' },
      areaServed: ['Alger', 'Algérie'],
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    },
  },
  {
    title: t('solutions.network.title'),
    slug: 'solutions-reseau-infrastructure-it-algerie',
    subtitle: t('solutions.network.subtitle'),
    punchline: t('solutions.network.punchline'),
    icon: Network,
    keywords: 'solutions réseau Algérie, infrastructure IT',
    schema: {
      '@type': 'Service',
      name: 'Solutions Réseau et Infrastructure IT',
      description: "Conception d'infrastructures réseau pour entreprises en Algérie.",
      provider: { '@type': 'Organization', name: 'Symloop', founder: 'Zakaria' },
      areaServed: ['Alger', 'Algérie'],
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    },
  },
  {
    title: t('solutions.consulting.title'),
    slug: 'consulting-technologique-strategie-digitale-algerie',
    subtitle: t('solutions.consulting.subtitle'),
    punchline: t('solutions.consulting.punchline'),
    icon: Database,
    keywords: 'consulting tech Algérie, stratégie digitale',
    schema: {
      '@type': 'Service',
      name: 'Consulting Technologique et Stratégie',
      description: 'Conseil technologique et stratégie digitale en Algérie.',
      provider: { '@type': 'Organization', name: 'Symloop', founder: 'Zakaria' },
      areaServed: ['Alger', 'Algérie'],
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    },
  },
];

// ---------------------------------------------------------------------------
// Schema builders
// ---------------------------------------------------------------------------
const getSchemaData = (solutions) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Symloop',
  description:
    "Entreprise d'ingénierie logicielle basée à Alger : développement sur mesure, applications mobiles, IA, IoT, cloud et cybersécurité. 58 wilayas couvertes.",
  url: 'https://www.symloop.com',
  logo: 'https://www.symloop.com/sym-logo.png',
  foundingDate: '2012',
  founder: { '@type': 'Person', name: 'Zakaria' },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'DZ',
    addressLocality: 'Alger',
    addressRegion: 'Algérie',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+213-549-575-512',
    email: 'contact@symloop.com',
    contactType: 'customer service',
    availableLanguage: ['French', 'Arabic', 'English'],
  },
  areaServed: [
    { '@type': 'Country', name: 'Algérie' },
    { '@type': 'City', name: 'Alger' },
  ],
  knowsAbout: [
    'développement application mobile Algérie',
    'site e-commerce paiement CIB',
    'logiciel ERP sur mesure',
    'intelligence artificielle entreprise',
    'solutions IoT ESP32',
    'cybersécurité PME Algérie',
    'transformation digitale',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Solutions Digitales Symloop Algérie',
    description: 'Catalogue de solutions digitales pour entreprises algériennes.',
    itemListElement: solutions.map((solution, index) => ({
      '@type': 'Offer',
      position: index + 1,
      category: 'Service Technology',
      businessFunction: 'http://purl.org/goodrelations/v1#Sell',
      keywords: solution.keywords,
      ...solution.schema,
    })),
  },
});

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.symloop.com/fr/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.symloop.com/fr/services/' },
  ],
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function SymloopSolutionsSection() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const solutions = getSolutions(t);
  const schemaData = getSchemaData(solutions);

  const isRTL = router.locale === 'ar';

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', router.locale || 'fr');
    }
  }, [isRTL, router.locale]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section
        dir={isRTL ? 'rtl' : 'ltr'}
        className="relative bg-black text-white overflow-hidden"
        aria-labelledby="solutions-heading"
        key={`solutions-${router.locale}`}
      >
        <style jsx global>{`
          .solutions-display {
            font-weight: 300;
            letter-spacing: -0.02em;
          }
          .solutions-mono {
            font-weight: 400;
            font-feature-settings: 'tnum';
            text-transform: uppercase;
          }
          .solutions-hairline {
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22) 50%, transparent);
          }
          .solutions-hairline-solid {
            height: 1px;
            background: rgba(255,255,255,0.12);
          }
          .solutions-link-u {
            background-image: linear-gradient(currentColor, currentColor);
            background-repeat: no-repeat;
            background-size: 100% 1px;
            background-position: 0 100%;
            transition: background-size .35s ease;
          }
          .solutions-link-u:hover {
            background-size: 0% 1px;
            background-position: 100% 100%;
          }
        `}</style>

        {/* ============================================================ */}
        {/* HEADER                                                        */}
        {/* ============================================================ */}
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 pt-28 pb-20 border-b border-white/10">
          <div className="flex items-center justify-between mb-14">
            <span className="solutions-mono text-[11px] tracking-[0.25em] text-white/50">
              / solutions
            </span>
            <span className="solutions-mono text-[11px] tracking-[0.25em] text-white/30">
              {solutions.length} disciplines · Algeria nationwide
            </span>
          </div>

          <motion.h2
            id="solutions-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-80px' }}
            className="solutions-display text-[44px] sm:text-[68px] lg:text-[112px] leading-[0.92] max-w-[18ch]"
          >
            <span className="italic text-white/90">{t('solutions.title')}</span>
            <br />
            <span className="text-white/55">{t('solutions.titleAccent')}</span>
          </motion.h2>

          <div className="mt-14 grid grid-cols-12 gap-6">
            <div className="hidden lg:block lg:col-span-1" />
            <div className="col-span-12 lg:col-span-7 max-w-[62ch] space-y-5">
              <p className="text-[17px] sm:text-[19px] leading-[1.55] text-white/75">
                {t('solutions.subtitle')}
              </p>
              <p className="text-[15px] leading-[1.7] text-white/55">
                {t('solutions.description')}
              </p>
              <p className="solutions-mono text-[11px] tracking-[0.15em] text-white/35 pt-3">
                {t('solutions.technologies')}
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SOLUTION ROWS                                                */}
        {/* ============================================================ */}
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-16 border-b border-white/10">
          {/* Column header */}
          <div className="solutions-mono text-[10px] tracking-[0.22em] text-white/35 grid grid-cols-12 py-4 gap-4">
            <div className="col-span-1">№</div>
            <div className="col-span-10 sm:col-span-6">discipline</div>
            <div className="hidden sm:block sm:col-span-4">focus</div>
            <div className="col-span-1 text-right">→</div>
          </div>
          <div className="solutions-hairline-solid" />

          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const accent = ACCENTS[index % ACCENTS.length];
            return (
              <motion.div
                key={solution.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.35), ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: '-40px' }}
              >
                <Link
                  href={`/solutions/${solution.slug}`}
                  aria-label={`${solution.title} — Symloop Algérie`}
                  title={`${solution.title} | Symloop Algérie`}
                  className="group block border-b border-white/10"
                >
                  <div className="grid grid-cols-12 gap-4 lg:gap-6 py-8 lg:py-10 items-baseline">
                    {/* Number */}
                    <div className="col-span-1">
                      <div
                        className="solutions-mono text-[18px] sm:text-[20px] leading-none"
                        style={{ color: accent }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Title + punchline */}
                    <div className="col-span-10 sm:col-span-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-4 h-4 shrink-0" style={{ color: accent }} />
                        <span className="solutions-mono text-[10px] tracking-[0.22em] text-white/45">
                          {solution.subtitle}
                        </span>
                      </div>
                      <h3 className="solutions-display text-2xl sm:text-3xl lg:text-[40px] leading-[1.05] text-white group-hover:italic transition-all max-w-[22ch]">
                        {solution.title}
                      </h3>
                      {/* Mobile: show punchline below title */}
                      <p className="sm:hidden mt-3 text-[13px] leading-[1.65] text-white/55">
                        {solution.punchline}
                      </p>
                    </div>

                    {/* Focus / punchline (desktop column) */}
                    <div className="hidden sm:block sm:col-span-4 pt-10">
                      <p className="text-[14px] leading-[1.7] text-white/55 max-w-[42ch]">
                        {solution.punchline}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="col-span-1 text-right pt-10">
                      <ArrowUpRight
                        className="inline w-5 h-5 text-white/30 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                        style={{ color: accent }}
                      />
                    </div>
                  </div>
                  <span className="sr-only">{solution.keywords}</span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* CLOSING — stats strip + CTA                                  */}
        {/* ============================================================ */}
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-28">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 lg:col-span-8">
              <div className="solutions-mono text-[11px] tracking-[0.25em] text-white/45 mb-6">
                — /next
              </div>
              <h3 className="solutions-display text-4xl sm:text-5xl lg:text-[92px] leading-[0.95] tracking-tight max-w-[16ch]">
                <span className="italic">{t('solutions.cta')}</span>
              </h3>
              <p className="mt-10 text-[15px] leading-[1.7] text-white/55 max-w-[58ch]">
                <strong className="text-white/75 font-normal">{t('solutions.statsText')}</strong>
              </p>
              <p className="solutions-mono mt-3 text-[11px] tracking-[0.15em] text-white/40">
                {t('solutions.contactInfo')}
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 lg:items-end">
              <a
                href="tel:+213549575512"
                aria-label="Appeler Symloop Algérie"
                className="group inline-flex items-baseline gap-3 solutions-display italic text-3xl text-white"
              >
                <span className="solutions-link-u">+213 549 57 55 12</span>
                <ArrowRight className={`w-6 h-6 translate-y-1 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
              </a>
              <Link
                href="/contact"
                locale={router.locale}
                className="group inline-flex items-baseline gap-3 solutions-display text-xl text-white/60 hover:text-white"
              >
                <span className="solutions-link-u">{t('solutions.cta')}</span>
                <ArrowUpRight className="w-5 h-5 translate-y-0.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="mt-20 solutions-hairline-solid" />
          <p className="mt-6 solutions-mono text-[11px] text-white/35 leading-[1.7]">
            {t('solutions.tagline')}
          </p>
        </div>
      </section>
    </>
  );
}
