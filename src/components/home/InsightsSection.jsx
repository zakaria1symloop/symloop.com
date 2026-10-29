// ============================================================================
// SYMLOOP — InsightsSection
//
// Section 2 of the homepage. Accenture-pattern: thought leadership BEFORE
// services, so visitors perceive the firm as "a publisher with a perspective"
// before they see the capability grid.
//
// 3 featured reports surfaced from the existing blog catalogue — re-framed as
// "Industry Brief", "Tech Vision", "Engineering POV" instead of generic blog
// posts. The framing is what changes the perceived weight, not the content.
//
// Same visual DNA as ServicesGrid: hairline grid, mono numerals, no gradient,
// font-light headlines, scroll-triggered stagger reveal.
// ============================================================================

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { ArrowUpRight } from 'lucide-react';
import { getFeaturedInsights } from '../../data/insights';

// Featured insights are sourced from src/data/insights.js — single source of
// truth shared with the /insights/ hub page. Translation strings live in
// public/locales/{en,fr,ar}/common.json under home.insights.items.{key}.
const REPORTS = getFeaturedInsights();

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export default function InsightsSection() {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const isRtl = locale === 'ar';

  return (
    <section
      dir={isRtl ? 'rtl' : 'ltr'}
      className="relative bg-black border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
              {t('home.insights.eyebrow', { defaultValue: '02 — Insights' })}
            </span>
            <span className="h-px w-12 bg-white/20" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.1]"
          >
            {t('home.insights.title', {
              defaultValue: "What we're publishing.",
            })}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl"
          >
            {t('home.insights.subtitle', {
              defaultValue:
                'Industry briefs, technical guides, and engineering POVs from the people who actually ship the systems. Not whitepapers from a marketing team.',
            })}
          </motion.p>
        </motion.div>

        {/* Reports grid */}
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]"
        >
          {REPORTS.map((report, i) => {
            const num = String(i + 1).padStart(2, '0');
            return (
              <motion.li key={report.key} variants={fadeUp} className="bg-black">
                <Link
                  href={report.path}
                  className="group flex flex-col h-full transition-colors duration-300 hover:bg-white/[0.025] focus:outline-none focus:bg-white/[0.04]"
                >
                  {/* Cover image — monochrome editorial illustration */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden border-b border-white/[0.06] bg-white/[0.02]">
                    <Image
                      src={report.cover}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="flex flex-col flex-1 p-8 lg:p-10">
                  {/* Number + kind tag */}
                  <div className="flex items-start justify-between mb-8">
                    <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 group-hover:text-white/70 transition-colors duration-300">
                      {t(`home.insights.items.${report.key}.kind`)}
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.15em] text-white/30">
                      {num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-light text-white leading-snug tracking-tight mb-4">
                    {t(`home.insights.items.${report.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/50 leading-relaxed mb-10 flex-1">
                    {t(`home.insights.items.${report.key}.description`)}
                  </p>

                  {/* Meta + CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/[0.08]">
                    <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/35">
                      {t(`home.insights.items.${report.key}.meta`)}
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

        {/* See all insights → */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="mt-12 lg:mt-16"
        >
          <motion.div variants={fadeUp}>
            <Link
              href="/insights/"
              className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors"
            >
              <span>{t('home.insights.allLink', { defaultValue: 'All insights' })}</span>
              <ArrowUpRight
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.5}
              />
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
