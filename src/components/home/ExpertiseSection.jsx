// ============================================================================
// SYMLOOP — ExpertiseSection (editorial redesign, zero boxes)
// Matches the aesthetic of /services — Instrument Serif display, mono metadata,
// hairline dividers, numbered editorial rows. No cards. No rounded borders.
// ============================================================================

import { motion } from 'framer-motion';
import { Code2, Database, Network, Cloud, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';

const technologies = [
  'Java', 'Python', '.NET', 'PHP Laravel', 'Node.js', 'React', 'Angular',
  'Oracle', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis',
  'Cisco', 'VMware', 'Docker', 'Kubernetes', 'AWS', 'Azure',
  'Linux', 'Windows Server', 'Active Directory', 'Exchange',
];

const ACCENTS = ['#6366f1', '#10b981', '#f97316', '#06b6d4'];

export default function ExpertiseSection() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isRTL = router.locale === 'ar';

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', router.locale || 'fr');
    }
  }, [isRTL, router.locale]);

  const expertiseData = [
    {
      title: t('expertise.software.title'),
      subtitle: t('expertise.software.subtitle'),
      description: t('expertise.software.description'),
      icon: Code2,
      features: t('expertise.software.features', { returnObjects: true }),
      metric: t('expertise.software.metric'),
      metricLabel: t('expertise.software.metricLabel'),
    },
    {
      title: t('expertise.network.title'),
      subtitle: t('expertise.network.subtitle'),
      description: t('expertise.network.description'),
      icon: Network,
      features: t('expertise.network.features', { returnObjects: true }),
      metric: t('expertise.network.metric'),
      metricLabel: t('expertise.network.metricLabel'),
    },
    {
      title: t('expertise.database.title'),
      subtitle: t('expertise.database.subtitle'),
      description: t('expertise.database.description'),
      icon: Database,
      features: t('expertise.database.features', { returnObjects: true }),
      metric: t('expertise.database.metric'),
      metricLabel: t('expertise.database.metricLabel'),
    },
    {
      title: t('expertise.cloud.title'),
      subtitle: t('expertise.cloud.subtitle'),
      description: t('expertise.cloud.description'),
      icon: Cloud,
      features: t('expertise.cloud.features', { returnObjects: true }),
      metric: t('expertise.cloud.metric'),
      metricLabel: t('expertise.cloud.metricLabel'),
    },
  ];

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Symloop',
    alternateName: 'Symloop Algeria',
    description:
      "Entreprise d'ingénierie logicielle basée à Alger : développement sur mesure, infrastructure réseau, bases de données, cloud. 58 wilayas couvertes.",
    url: 'https://symloop.com',
    telephone: '+213-549-575-512',
    email: 'contact@symloop.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Algiers',
      addressRegion: 'Alger',
      postalCode: '16000',
      addressCountry: 'DZ',
    },
    areaServed: [{ '@type': 'Country', name: 'Algeria' }],
    knowsAbout: technologies,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: "Services d'ingénierie Symloop",
      itemListElement: expertiseData.map((item, index) => ({
        '@type': 'Service',
        '@id': `https://symloop.com#service-${index}`,
        serviceType: item.title,
        name: item.subtitle,
        description: item.description,
        areaServed: 'Algeria',
        provider: { '@type': 'Organization', name: 'Symloop' },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section
        dir={isRTL ? 'rtl' : 'ltr'}
        className="relative bg-black text-white overflow-hidden"
        aria-labelledby="expertise-heading"
        key={`expertise-${router.locale}`}
      >
        {/* Editorial styles (scoped via global for font + link underlines) */}
        <style jsx global>{`
          /* Inherit the homepage's global font (Changa) — no serif swap.
             We keep the editorial layout and italic accents, just using the
             same font as every other section for visual coherence. */
          .expertise-serif {
            font-weight: 300;
            letter-spacing: -0.02em;
          }
          .expertise-mono {
            font-weight: 400;
            font-feature-settings: 'tnum';
            text-transform: uppercase;
          }
          .expertise-hairline {
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22) 50%, transparent);
          }
          .expertise-hairline-solid {
            height: 1px;
            background: rgba(255,255,255,0.12);
          }
          .expertise-link-u {
            background-image: linear-gradient(currentColor, currentColor);
            background-repeat: no-repeat;
            background-size: 100% 1px;
            background-position: 0 100%;
            transition: background-size .35s ease;
          }
          .expertise-link-u:hover {
            background-size: 0% 1px;
            background-position: 100% 100%;
          }
        `}</style>

        {/* ================================================================ */}
        {/* HEADER — editorial                                               */}
        {/* ================================================================ */}
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 pt-28 pb-20 border-b border-white/10">
          {/* Eyebrow row */}
          <div className="flex items-center justify-between mb-14">
            <span className="expertise-mono text-[11px] uppercase tracking-[0.25em] text-white/50">
              / expertise
            </span>
            <span className="expertise-mono text-[11px] uppercase tracking-[0.25em] text-white/30">
              4 capabilities · 22 technologies
            </span>
          </div>

          {/* Huge display headline */}
          <motion.h2
            id="expertise-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-80px' }}
            className="expertise-serif text-[44px] sm:text-[68px] lg:text-[112px] leading-[0.92] tracking-[-0.02em] max-w-[18ch]"
          >
            <span className="italic text-white/90">{t('expertise.title')}</span>
            <br />
            <span className="text-white/55">{t('expertise.titleAccent')}</span>
          </motion.h2>

          {/* Subhead */}
          <div className="mt-14 grid grid-cols-12 gap-6">
            <div className="hidden lg:block lg:col-span-1" />
            <p className="col-span-12 lg:col-span-7 text-[17px] sm:text-[19px] leading-[1.55] text-white/65 max-w-[62ch]">
              {t('expertise.subtitle')}
            </p>
          </div>
        </div>

        {/* ================================================================ */}
        {/* CAPABILITY ROWS — hairline-divided editorial entries, no boxes  */}
        {/* ================================================================ */}
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-20 border-b border-white/10">
          {/* Index header */}
          <div className="expertise-mono text-[10px] uppercase tracking-[0.22em] text-white/35 grid grid-cols-12 py-4 gap-4">
            <div className="col-span-1">№</div>
            <div className="col-span-8 sm:col-span-7">capability</div>
            <div className="hidden sm:block sm:col-span-3">stack reference</div>
            <div className="col-span-3 sm:col-span-1 text-right">metric</div>
          </div>
          <div className="expertise-hairline-solid" />

          {expertiseData.map((item, index) => {
            const Icon = item.icon;
            const accent = ACCENTS[index % ACCENTS.length];
            const featuresText = Array.isArray(item.features) ? item.features.join(' · ') : '';

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: '-60px' }}
                className="group border-b border-white/10"
              >
                <div className="grid grid-cols-12 gap-4 lg:gap-8 py-10 lg:py-14">
                  {/* Number rail */}
                  <div className="col-span-2 lg:col-span-1">
                    <div
                      className="expertise-mono text-[44px] sm:text-[60px] lg:text-[84px] leading-none tracking-tighter"
                      style={{ color: accent, opacity: 0.85 }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Title + description */}
                  <div className="col-span-10 lg:col-span-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-4 h-4" style={{ color: accent }} />
                      <span className="expertise-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                        {item.subtitle}
                      </span>
                    </div>
                    <h3 className="expertise-serif text-3xl sm:text-4xl lg:text-[54px] leading-[0.98] tracking-tight text-white group-hover:italic transition-all">
                      {item.title}
                    </h3>
                    <p className="mt-6 text-[15.5px] leading-[1.7] text-white/60 max-w-[56ch]">
                      {item.description}
                    </p>
                    {/* Features as inline prose */}
                    {featuresText && (
                      <p className="expertise-mono text-[11px] text-white/40 mt-5 leading-[1.7]">
                        {featuresText}
                      </p>
                    )}
                  </div>

                  {/* Stack hint (spans hidden on md+) */}
                  <div className="hidden lg:block lg:col-span-3 pt-14">
                    <div className="expertise-mono text-[10px] uppercase tracking-[0.22em] text-white/30 mb-3">
                      — stack
                    </div>
                    <div className="expertise-serif italic text-lg text-white/55 leading-snug">
                      {index === 0 && 'Next.js · NestJS · Postgres'}
                      {index === 1 && 'Cisco · VMware · Linux'}
                      {index === 2 && 'Oracle · Postgres · MongoDB'}
                      {index === 3 && 'AWS · Kubernetes · Terraform'}
                    </div>
                  </div>

                  {/* Metric */}
                  <div className="col-span-12 lg:col-span-2 flex lg:flex-col items-baseline lg:items-end justify-between lg:justify-start gap-3 pt-2 lg:pt-14">
                    <div className="expertise-serif text-5xl sm:text-6xl text-white leading-none">
                      {item.metric}
                    </div>
                    <div className="expertise-mono text-[10px] uppercase tracking-[0.22em] text-white/35 lg:mt-3 lg:text-right">
                      {item.metricLabel}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ================================================================ */}
        {/* TECHNOLOGIES — inline prose, no pills                            */}
        {/* ================================================================ */}
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-24 border-b border-white/10">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-3">
              <div className="expertise-mono text-[11px] uppercase tracking-[0.25em] text-white/45 lg:sticky lg:top-24">
                / {t('expertise.technologiesTitle')}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <div className="flex flex-wrap gap-x-5 gap-y-3 expertise-serif italic text-2xl sm:text-3xl lg:text-4xl text-white/75 leading-[1.3]">
                {technologies.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.015 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                    {i < technologies.length - 1 && (
                      <span className="text-white/15 mx-3 not-italic">·</span>
                    )}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* STATS — editorial metadata strip                                 */}
        {/* ================================================================ */}
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-20 border-b border-white/10">
          <div className="expertise-hairline" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 py-12">
            {[
              { value: '7', label: t('expertise.stats.experience') },
              { value: '120+', label: t('expertise.stats.projects') },
              { value: '50+', label: t('expertise.stats.clients') },
              { value: '58', label: t('expertise.stats.wilayas') },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="expertise-serif text-6xl sm:text-7xl text-white leading-none">
                  {s.value}
                </div>
                <div className="expertise-mono mt-4 text-[10px] uppercase tracking-[0.22em] text-white/45">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="expertise-hairline" />
        </div>

        {/* ================================================================ */}
        {/* CTA — editorial closer                                           */}
        {/* ================================================================ */}
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-28">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 lg:col-span-8">
              <div className="expertise-mono text-[11px] uppercase tracking-[0.25em] text-white/45 mb-6">
                — /next
              </div>
              <h3 className="expertise-serif text-4xl sm:text-5xl lg:text-[92px] leading-[0.95] tracking-tight max-w-[16ch]">
                <span className="italic">{t('expertise.ctaQuestion')}</span>
              </h3>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 lg:items-end">
              <a
                href="/services"
                className="group inline-flex items-baseline gap-3 expertise-serif italic text-3xl text-white"
              >
                <span className="expertise-link-u">{t('cta.requestQuote')}</span>
                <ArrowRight
                  className={`w-6 h-6 translate-y-1 group-hover:translate-x-1 transition-transform ${
                    isRTL ? 'rotate-180' : ''
                  }`}
                />
              </a>
              <a
                href="/services"
                className="group inline-flex items-baseline gap-3 expertise-serif text-xl text-white/60 hover:text-white"
              >
                <span className="expertise-link-u">{t('cta.freeConsultation')}</span>
                <ArrowUpRight className="w-5 h-5 translate-y-0.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          <div className="mt-20 expertise-hairline-solid" />
          <p className="mt-6 expertise-mono text-[11px] text-white/35 leading-[1.7]">
            {t('expertise.footer')}
          </p>
        </div>
      </section>
    </>
  );
}
