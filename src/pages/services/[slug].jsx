// ============================================================================
// SYMLOOP — /services/[slug] (editorial, SEO-first, zero boxes)
// One page per service discipline. All content loaded at build time from
// src/data/services.js. Rich per-service JSON-LD (Service, FAQPage,
// BreadcrumbList, Speakable). Legacy slugs permanently redirected.
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
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';

import {
  SERVICES,
  getServiceBySlug,
  getAllSlugPaths,
  formatPriceRange,
} from '../../data/services';

const ICONS = { Code2, Smartphone, Globe, Brain, Cpu, Shield };

// ---------------------------------------------------------------------------
// Legacy slug redirects (301 — preserves old SEO)
// key: legacy slug, value: service id
// ---------------------------------------------------------------------------
const LEGACY_SLUGS = {
  'developpement-logiciel-sur-mesure-mena': 'software-engineering',
  'custom-software-development-mena': 'software-engineering',
  'developpement-application-mobile-flutter-mena': 'mobile-engineering',
  'flutter-mobile-app-development-mena': 'mobile-engineering',
  'creation-site-web-ecommerce-mena': 'web-engineering',
  'website-ecommerce-development-mena': 'web-engineering',
  'solutions-iot-esp32-objets-connectes-mena': 'iot-hardware',
  'iot-solutions-esp32-connected-objects-mena': 'iot-hardware',
  'intelligence-artificielle-chatgpt-machine-learning-mena': 'ai-ml',
  'artificial-intelligence-chatgpt-machine-learning-mena': 'ai-ml',
  'cybersecurite-entreprise-protection-donnees-mena': 'devops-cloud',
  'enterprise-cybersecurity-data-protection-mena': 'devops-cloud',
  'sites-web': 'web-engineering',
  'developpement-mobile': 'mobile-engineering',
  'hebergement': 'devops-cloud',
  'logiciel': 'software-engineering',
  'iot': 'iot-hardware',
  'ecommerce': 'web-engineering',
  'cybersecurite': 'devops-cloud',
  'dev-logiciel': 'software-engineering',
  'app-mobile-flutter': 'mobile-engineering',
  'site-web-ecommerce': 'web-engineering',
  'infrastructure-reseau-iot': 'iot-hardware',
  'intelligence-artificielle': 'ai-ml',
  'cybersecurity': 'devops-cloud',
};

// ---------------------------------------------------------------------------
// Chrome strings
// ---------------------------------------------------------------------------
const CHROME = {
  fr: {
    home: 'Accueil',
    services: 'Services',
    intro: 'Introduction',
    approach: 'Approche',
    deliverables: 'Ce que nous livrons',
    stack: 'Stack de référence',
    pricing: 'Tarification',
    delivery: 'Délai de livraison',
    faq: 'Questions fréquentes',
    related: 'Disciplines liées',
    cta: 'Discutons de votre projet.',
    ctaSub:
      "Expliquez-nous votre contexte en cinq minutes. Nous revenons vers vous avec un devis détaillé sous 48 heures, ou nous vous orientons honnêtement ailleurs si ce n'est pas notre métier.",
    ctaQuote: 'Demander un devis',
    ctaContact: 'Nous contacter',
    back: 'Retour aux services',
  },
  en: {
    home: 'Home',
    services: 'Services',
    intro: 'Introduction',
    approach: 'Approach',
    deliverables: 'What we deliver',
    stack: 'Reference stack',
    pricing: 'Pricing',
    delivery: 'Delivery time',
    faq: 'Frequently asked questions',
    related: 'Related disciplines',
    cta: "Let's talk about your project.",
    ctaSub:
      'Explain your context in five minutes. We come back with a detailed quote within 48 hours — or we honestly point you elsewhere if it is not what we do best.',
    ctaQuote: 'Request a quote',
    ctaContact: 'Contact us',
    back: 'Back to services',
  },
  ar: {
    home: 'الرئيسية',
    services: 'الخدمات',
    intro: 'المقدمة',
    approach: 'المنهجية',
    deliverables: 'ما نسلّمه',
    stack: 'المكدّس المرجعي',
    pricing: 'التسعير',
    delivery: 'مدة التسليم',
    faq: 'الأسئلة الشائعة',
    related: 'التخصصات ذات الصلة',
    cta: 'لنتحدث عن مشروعك.',
    ctaSub:
      'اشرح لنا سياقك في خمس دقائق. سنعود إليك بعرض أسعار مفصّل خلال 48 ساعة، أو نوجهك بأمانة إلى مكان آخر إذا لم يكن هذا تخصصنا.',
    ctaQuote: 'طلب عرض سعر',
    ctaContact: 'اتصل بنا',
    back: 'العودة إلى الخدمات',
  },
};

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
export default function ServiceDetailPage({ service, locale: pageLocale, relatedServices }) {
  const router = useRouter();
  const { t } = useTranslation('common');
  const locale = pageLocale || router.locale || 'fr';
  const isRTL = locale === 'ar';
  const c = CHROME[locale] || CHROME.fr;

  if (!service) return null;

  const Icon = ICONS[service.icon] || Code2;
  const accent = service.accent;

  const baseUrl = 'https://symloop.com';
  const pageUrl = `${baseUrl}/${locale}/services/${service.slug}/`;

  // ---- JSON-LD ----
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: c.home, item: `${baseUrl}/${locale}/` },
      { '@type': 'ListItem', position: 2, name: c.services, item: `${baseUrl}/${locale}/services/` },
      { '@type': 'ListItem', position: 3, name: service.title, item: pageUrl },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': pageUrl,
    name: service.title,
    description: service.metaDescription,
    url: pageUrl,
    serviceType: service.category,
    provider: {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'Symloop',
      url: baseUrl,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Algiers',
        addressRegion: 'Alger',
        postalCode: '16000',
        addressCountry: 'DZ',
      },
    },
    areaServed: { '@type': 'Country', name: 'Algeria' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'DZD',
      price: service.priceMin,
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'DZD',
        minPrice: service.priceMin,
        ...(service.priceMax ? { maxPrice: service.priceMax } : {}),
      },
      availability: 'https://schema.org/InStock',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title,
      itemListElement: (service.features || []).map((f) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: f },
      })),
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (service.faqs || []).map((f) => ({
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
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:locale" content={locale === 'ar' ? 'ar_DZ' : locale === 'en' ? 'en_US' : 'fr_DZ'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.metaTitle} />
        <meta name="twitter:description" content={service.metaDescription} />
        {/* hreflang — one entry per locale slug */}
        {SERVICES.find((s) => s.id === service.id) &&
          ['fr', 'en', 'ar'].map((l) => {
            const svc = SERVICES.find((s) => s.id === service.id);
            return (
              <link
                key={l}
                rel="alternate"
                hrefLang={l}
                href={`${baseUrl}/${l}/services/${svc.slugs[l]}/`}
              />
            );
          })}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${baseUrl}/fr/services/${SERVICES.find((s) => s.id === service.id)?.slugs.fr}/`}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      </Head>

      <main
        dir={isRTL ? 'rtl' : 'ltr'}
        className="min-h-screen bg-black text-white antialiased selection:bg-white selection:text-black"
        style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
      >
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
        `}</style>

        {/* ============================================================ */}
        {/* Breadcrumb                                                  */}
        {/* ============================================================ */}
        <nav className="border-b border-white/10">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-5">
            <div className="mono text-[11px] uppercase tracking-[0.22em] text-white/40 flex items-center gap-3">
              <Link href="/" locale={locale} className="hover:text-white transition-colors">
                {c.home}
              </Link>
              <span className="text-white/20">/</span>
              <Link href="/services" locale={locale} className="hover:text-white transition-colors">
                {c.services}
              </Link>
              <span className="text-white/20">/</span>
              <span className="text-white/70 truncate">{service.title}</span>
            </div>
          </div>
        </nav>

        {/* ============================================================ */}
        {/* HERO                                                         */}
        {/* ============================================================ */}
        <section className="relative border-b border-white/10 overflow-hidden">
          {/* Accent glow */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${accent}, transparent 70%)`,
            }}
          />
          <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 pt-24 pb-24">
            {/* Eyebrow */}
            <div className="flex items-center justify-between mb-14">
              <div className="flex items-center gap-4">
                <Icon className="w-5 h-5" style={{ color: accent }} />
                <span className="mono text-[11px] uppercase tracking-[0.25em] text-white/55">
                  / {service.category}
                </span>
              </div>
              <span className="mono text-[11px] uppercase tracking-[0.25em] text-white/30">
                {service.number} · {service.slug.slice(0, 32)}
              </span>
            </div>

            <div className="grid grid-cols-12 gap-6">
              {/* Massive number */}
              <div className="col-span-12 lg:col-span-3">
                <div
                  className="mono text-[140px] sm:text-[180px] lg:text-[220px] leading-[0.8] tracking-tighter"
                  style={{ color: accent, opacity: 0.88 }}
                >
                  {service.number}
                </div>
              </div>

              {/* Headline + tagline */}
              <div className="col-span-12 lg:col-span-9 lg:pl-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="serif text-[44px] sm:text-[68px] lg:text-[96px] leading-[0.95] tracking-tight max-w-[16ch]"
                >
                  <span className="italic">{service.title}</span>
                </motion.h1>
                {service.tagline && (
                  <p className="serif italic text-2xl sm:text-3xl text-white/55 mt-8 max-w-[48ch]">
                    {service.tagline}
                  </p>
                )}
                <p
                  data-speakable
                  className="mt-12 text-[17px] sm:text-[19px] leading-[1.6] text-white/70 max-w-[64ch]"
                >
                  {service.intro}
                </p>

                {/* Meta row */}
                <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-10 max-w-[720px]">
                  <div>
                    <div className="mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                      {c.pricing}
                    </div>
                    <div className="mt-2 serif text-2xl text-white">
                      {formatPriceRange(service.priceMin, service.priceMax, locale)}
                    </div>
                  </div>
                  <div>
                    <div className="mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                      {c.delivery}
                    </div>
                    <div className="mt-2 serif text-2xl text-white">{service.deliveryTime}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* LONG DESCRIPTION                                             */}
        {/* ============================================================ */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-28">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-3">
                <div className="mono text-[11px] uppercase tracking-[0.25em] text-white/45 lg:sticky lg:top-24">
                  / {c.intro}
                </div>
              </div>
              <div className="col-span-12 lg:col-span-8 lg:col-start-5 space-y-8 max-w-[66ch]">
                {(service.longDescription || []).map((p, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? 'serif text-2xl sm:text-3xl leading-[1.4] text-white/85'
                        : 'text-[16px] leading-[1.8] text-white/65'
                    }
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* DELIVERABLES                                                 */}
        {/* ============================================================ */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-28">
            <div className="grid grid-cols-12 gap-6 mb-14">
              <div className="col-span-12 lg:col-span-5">
                <div className="mono text-[11px] uppercase tracking-[0.25em] text-white/45">
                  / {c.deliverables}
                </div>
                <h2 className="serif mt-4 text-4xl sm:text-5xl lg:text-[72px] leading-[0.95] tracking-tight">
                  <span className="italic">{c.deliverables}</span>
                </h2>
              </div>
            </div>

            <div className="hairline-solid" />
            {(service.features || []).map((f, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-4 py-6 border-b border-white/10 items-baseline"
              >
                <div className="col-span-1 mono text-[12px] text-white/35">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="col-span-11 serif text-xl sm:text-2xl text-white/85 leading-[1.3]">
                  {f}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* STACK                                                        */}
        {/* ============================================================ */}
        {service.techStack && service.techStack.length > 0 && (
          <section className="border-b border-white/10">
            <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-24">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-3">
                  <div className="mono text-[11px] uppercase tracking-[0.25em] text-white/45">
                    / {c.stack}
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-9">
                  <div className="flex flex-wrap gap-x-6 gap-y-3 serif italic text-2xl sm:text-3xl text-white/75">
                    {service.techStack.map((t, i) => (
                      <span key={t}>
                        {t}
                        {i < service.techStack.length - 1 && (
                          <span className="text-white/20 ml-6">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* FAQ                                                          */}
        {/* ============================================================ */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="border-b border-white/10">
            <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-28">
              <div className="grid grid-cols-12 gap-6 mb-12">
                <div className="col-span-12 lg:col-span-5">
                  <div className="mono text-[11px] uppercase tracking-[0.25em] text-white/45">
                    / FAQ
                  </div>
                  <h2 className="serif mt-4 text-4xl sm:text-5xl lg:text-6xl leading-[1] tracking-tight">
                    <span className="italic">{c.faq}</span>
                  </h2>
                </div>
              </div>

              <div className="hairline-solid" />
              {service.faqs.map((f, i) => (
                <details key={i} className="group border-b border-white/10 py-6">
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
        )}

        {/* ============================================================ */}
        {/* RELATED SERVICES                                             */}
        {/* ============================================================ */}
        {relatedServices && relatedServices.length > 0 && (
          <section className="border-b border-white/10">
            <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-24">
              <div className="mono text-[11px] uppercase tracking-[0.25em] text-white/45 mb-8">
                / {c.related}
              </div>
              <div className="hairline-solid" />
              {relatedServices.map((r) => {
                const RIcon = ICONS[r.icon] || Code2;
                return (
                  <Link
                    key={r.id}
                    href={`/services/${r.slug}/`}
                    locale={locale}
                    className="group block border-b border-white/10 py-8"
                  >
                    <div className="grid grid-cols-12 gap-4 items-baseline">
                      <div className="col-span-1 mono text-[12px] text-white/40">
                        {r.number}
                      </div>
                      <div className="col-span-10 sm:col-span-9 flex items-baseline gap-5">
                        <RIcon className="w-5 h-5 shrink-0" style={{ color: r.accent }} />
                        <div className="serif text-2xl sm:text-3xl text-white group-hover:italic transition-all">
                          {r.title}
                        </div>
                      </div>
                      <div className="col-span-1 sm:col-span-2 text-right">
                        <ArrowUpRight
                          className="inline w-5 h-5 text-white/30 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                          style={{ color: r.accent }}
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* CTA                                                          */}
        {/* ============================================================ */}
        <section>
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-32">
            <div className="grid grid-cols-12 gap-6 items-end">
              <div className="col-span-12 lg:col-span-8">
                <div className="mono text-[11px] uppercase tracking-[0.25em] text-white/45 mb-6">
                  — /next
                </div>
                <h2 className="serif text-5xl sm:text-7xl lg:text-[120px] leading-[0.92] tracking-tight">
                  <span className="italic">{c.cta}</span>
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
                  href="/services"
                  locale={locale}
                  className="group inline-flex items-baseline gap-3 serif text-xl text-white/60 hover:text-white"
                >
                  <span className="link-u">← {c.back}</span>
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
// Static paths — every canonical slug in every locale
// ---------------------------------------------------------------------------
export async function getStaticPaths() {
  // fallback: 'blocking' lets legacy slug URLs hit getStaticProps and redirect
  return {
    paths: getAllSlugPaths(),
    fallback: 'blocking',
  };
}

// ---------------------------------------------------------------------------
// Static props — resolve slug, handle legacy with 301, build related list
// ---------------------------------------------------------------------------
export async function getStaticProps({ params, locale }) {
  const slug = params.slug;

  // Legacy slug → permanent redirect to canonical
  // IMPORTANT: encodeURIComponent() the slug — locale-specific slugs may contain
  // non-ASCII characters (e.g. Arabic). HTTP Location headers require ASCII-only
  // content, so we must URL-encode before putting the slug into the destination.
  if (LEGACY_SLUGS[slug]) {
    const canonical = SERVICES.find((s) => s.id === LEGACY_SLUGS[slug]);
    if (canonical) {
      const targetSlug = canonical.slugs[locale] || canonical.slugs.fr;
      return {
        redirect: {
          destination: `/${locale}/services/${encodeURIComponent(targetSlug)}/`,
          permanent: true,
        },
      };
    }
  }

  const found = getServiceBySlug(slug);
  if (!found) {
    return { notFound: true };
  }

  const { service: rawService } = found;

  // Flatten service for the active page locale
  const service = {
    id: rawService.id,
    number: rawService.number,
    icon: rawService.icon,
    accent: rawService.accent,
    slug: rawService.slugs[locale] || rawService.slugs.fr,
    category: rawService.category[locale] || rawService.category.fr,
    title: rawService.title[locale] || rawService.title.fr,
    metaTitle: rawService.metaTitle[locale] || rawService.metaTitle.fr,
    metaDescription: rawService.metaDescription[locale] || rawService.metaDescription.fr,
    tagline: rawService.tagline[locale] || rawService.tagline.fr,
    intro: rawService.intro[locale] || rawService.intro.fr,
    longDescription: rawService.longDescription[locale] || rawService.longDescription.fr,
    features: rawService.features[locale] || rawService.features.fr,
    techStack: rawService.techStack || [],
    faqs: rawService.faqs[locale] || rawService.faqs.fr,
    priceMin: rawService.priceMin,
    priceMax: rawService.priceMax,
    deliveryTime: rawService.deliveryTime[locale] || rawService.deliveryTime.fr,
  };

  // Related services (flattened for same locale)
  const relatedServices = (rawService.relatedServices || [])
    .map((id) => {
      const r = SERVICES.find((x) => x.id === id);
      if (!r) return null;
      return {
        id: r.id,
        number: r.number,
        icon: r.icon,
        accent: r.accent,
        slug: r.slugs[locale] || r.slugs.fr,
        title: r.title[locale] || r.title.fr,
        category: r.category[locale] || r.category.fr,
      };
    })
    .filter(Boolean);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      service,
      relatedServices,
      locale,
    },
  };
}
