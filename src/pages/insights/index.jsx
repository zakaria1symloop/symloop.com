// ============================================================================
// SYMLOOP — /insights/ hub page
//
// Editorial-style hub listing every published Symloop insight. Same visual DNA
// as the homepage InsightsSection (hairline grid, font-light, mono numerals,
// monochrome cover images that come alive on hover) — extended into a full
// page with a long-form hero, the insights catalogue, and a tail CTA.
//
// Data is sourced from src/data/insights.js. Translation strings live in
// public/locales/{en,fr,ar}/common.json under home.insights.items.{key} and
// insights_page.*.
// ============================================================================

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';
import { getAllInsights } from '../../data/insights';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export default function InsightsHubPage() {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const isRtl = locale === 'ar';

  const insights = getAllInsights();

  // Format publishedAt → "April 2026" / "Avril 2026" / "أبريل 2026"
  const fmtDate = (iso) => {
    try {
      return new Date(iso).toLocaleDateString(locale, { year: 'numeric', month: 'long' });
    } catch {
      return iso;
    }
  };

  // CollectionPage JSON-LD — flags this page as a publication index for LLMs
  const collectionLd = {
    '@context': 'https://schema.org',
    '@type':    'CollectionPage',
    name:       t('insights_page.seo.title', { defaultValue: 'Symloop Insights — Industry briefs & engineering POVs' }),
    description: t('insights_page.seo.description', {
      defaultValue: 'Long-form research, technical guides, and engineering perspectives from the Symloop team — written by the people who actually ship the systems.',
    }),
    url: 'https://symloop.com/insights/',
    publisher: {
      '@type': 'Organization',
      name:    'Symloop',
      url:     'https://symloop.com',
      logo:    { '@type': 'ImageObject', url: 'https://symloop.com/images/symloop-logo.png' },
    },
    hasPart: insights.map((it, i) => ({
      '@type':       'Article',
      position:      i + 1,
      headline:      t(`home.insights.items.${it.key}.title`),
      description:   t(`home.insights.items.${it.key}.description`),
      image:         `https://symloop.com${it.cover}`,
      datePublished: it.publishedAt,
      url:           `https://symloop.com${it.path}`,
      author:        { '@type': 'Organization', name: 'Symloop' },
    })),
  };

  const breadcrumbs = [
    { name: t('nav.home', { defaultValue: 'Home' }), url: 'https://symloop.com/' },
    { name: t('insights_page.seo.breadcrumb', { defaultValue: 'Insights' }), url: 'https://symloop.com/insights/' },
  ];

  return (
    <>
      <SEO
        title={t('insights_page.seo.title', { defaultValue: 'Insights — Symloop research, briefs & engineering POVs' })}
        description={t('insights_page.seo.description', {
          defaultValue: 'Long-form research, technical guides, and engineering perspectives from the Symloop team — written by the people who actually ship the systems.',
        })}
        keywords="symloop insights, algeria tech reports, ai algeria research, erp algeria report, software engineering algeria, technology consulting algeria"
        structuredData={collectionLd}
        breadcrumbs={breadcrumbs}
      />

      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">

        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-20 lg:pb-28">
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="max-w-4xl"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {t('insights_page.hero.eyebrow', { defaultValue: 'Insights · Symloop research' })}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-5xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[1.02]"
              >
                {t('insights_page.hero.title', { defaultValue: 'Briefs from the engineering room.' })}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-8 text-lg lg:text-xl text-white/55 leading-relaxed max-w-2xl"
              >
                {t('insights_page.hero.subtitle', {
                  defaultValue:
                    'Long-form research, technical guides, and engineering POVs — written by the people who actually ship the systems. No marketing whitepapers, no recycled vendor talking points.',
                })}
              </motion.p>

              {/* Meta strip — total count + cadence */}
              <motion.div
                variants={fadeUp}
                className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35"
              >
                <span>
                  {String(insights.length).padStart(2, '0')} {t('insights_page.hero.published', { defaultValue: 'published' })}
                </span>
                <span>{t('insights_page.hero.cadence', { defaultValue: 'New brief every quarter' })}</span>
                <span>{t('insights_page.hero.format', { defaultValue: 'Free · No email gate' })}</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── Insights catalogue ─────────────────────────────────────────── */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="flex items-end justify-between mb-14 lg:mb-20"
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl lg:text-4xl font-light tracking-tight"
              >
                {t('insights_page.catalogue.title', { defaultValue: 'The catalogue' })}
              </motion.h2>
              <motion.span
                variants={fadeUp}
                className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35"
              >
                {String(insights.length).padStart(2, '0')} / {String(insights.length).padStart(2, '0')}
              </motion.span>
            </motion.div>

            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]"
            >
              {insights.map((it, i) => {
                const num = String(i + 1).padStart(2, '0');
                return (
                  <motion.li key={it.key} variants={fadeUp} className="bg-black">
                    <Link
                      href={it.path}
                      className="group flex flex-col h-full transition-colors duration-300 hover:bg-white/[0.025] focus:outline-none focus:bg-white/[0.04]"
                    >
                      {/* Cover image */}
                      <div className="relative w-full aspect-[4/3] overflow-hidden border-b border-white/[0.06] bg-white/[0.02]">
                        <Image
                          src={it.cover}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02]"
                        />
                      </div>

                      <div className="flex flex-col flex-1 p-8 lg:p-10">
                        <div className="flex items-start justify-between mb-8">
                          <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 group-hover:text-white/70 transition-colors duration-300">
                            {t(`home.insights.items.${it.key}.kind`)}
                          </span>
                          <span className="font-mono text-[11px] tracking-[0.15em] text-white/30">
                            {num}
                          </span>
                        </div>

                        <h3 className="text-xl lg:text-2xl font-light text-white leading-snug tracking-tight mb-4">
                          {t(`home.insights.items.${it.key}.title`)}
                        </h3>

                        <p className="text-sm text-white/50 leading-relaxed mb-10 flex-1">
                          {t(`home.insights.items.${it.key}.description`)}
                        </p>

                        <div className="flex items-center justify-between pt-6 border-t border-white/[0.08]">
                          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/35">
                            {fmtDate(it.publishedAt)} · {t(`home.insights.items.${it.key}.meta`)}
                          </span>
                          <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-white/40 group-hover:text-white transition-colors duration-300">
                            <span>{t('home.insights.read', { defaultValue: 'Read' })}</span>
                            <ArrowUpRight
                              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              strokeWidth={1.5}
                            />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>

          </div>
        </section>

        {/* ── Tail CTA ───────────────────────────────────────────────────── */}
        <section className="relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="max-w-3xl"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {t('insights_page.cta.eyebrow', { defaultValue: 'Talk to the authors' })}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1]"
              >
                {t('insights_page.cta.title', {
                  defaultValue: 'Have a problem one of these briefs touches? Talk to the team that wrote it.',
                })}
              </motion.h2>

              <motion.div variants={fadeUp} className="mt-10">
                <Link
                  href="/contact/"
                  className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-white border-b border-white/30 hover:border-white pb-2 transition-colors"
                >
                  <span>{t('insights_page.cta.button', { defaultValue: 'Book a 30-minute call' })}</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
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
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
