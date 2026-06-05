// ============================================================================
// SYMLOOP — LocationServiceLayout
//
// Shared editorial layout for /locations/{city}/{service}/ pages.
//
// Each city × service page is a thin wrapper that imports this layout and
// passes a CONTENT object (with fr/en/ar variants) plus a few SEO props.
// One source of truth for the design — update once, all 40+ pages get it.
//
// LAYOUT ANATOMY
//   1. Hero (big H1, dek, meta strip)
//   2. Big contact block — WhatsApp + phone, two huge tiles
//   3. Stat row — 4 hard numbers, visual break
//   4. Article body (intro + 5 numbered sections + 2 pull quotes inserted
//      after sections 0 and 2)
//   5. Related (3 services + 2 insights)
//   6. Big CTA section with second contact block
//
// CONTENT SHAPE (each locale)
//   {
//     eyebrow, publishedAt, title, dek,
//     meta: { one, two, three },
//     intro: ['paragraph 1 with **highlighted** phrases', 'paragraph 2'],
//     contact: { eyebrow, title, body, whatsapp, phone, ai },
//     stats: { eyebrow, items: [{ value, label }, ...] },
//     pullQuote1, pullQuote2,
//     sections: [
//       { heading, body: ['paragraph 1', 'paragraph 2', ...] },
//       ... (typically 5 sections)
//     ],
//     related: { eyebrow, services: { label, items }, insights: { label, items } },
//     cta: { eyebrow, title, button },
//   }
// ============================================================================

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ArrowRight, ArrowUpRight, MessageCircle, Phone, Sparkles } from 'lucide-react';
import SEO from '../SEO';

const WHATSAPP_URL = 'https://wa.me/213549575512';
const PHONE_URL    = 'tel:+213549575512';
const PHONE_LABEL  = '+213 549 57 55 12';

// ── renderRichText ─────────────────────────────────────────────────────
// Tiny inline-markdown helper. `**foo**` → emphasized span (border-b underline +
// brighter color) so we can highlight key phrases in body paragraphs without
// hand-rolling JSX in every section.
export function renderRichText(text) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <span key={i} className="font-normal text-white border-b border-white/30">
          {part.slice(2, -2)}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

// ── ContactTiles ───────────────────────────────────────────────────────
// 2-column WhatsApp + phone tile pair, used twice per page (after hero +
// inside the final CTA block).
function ContactTiles({ c, minHeight = '180px' }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-black p-7 lg:p-9 transition-colors hover:bg-white/[0.025] flex flex-col justify-between"
        style={{ minHeight }}
      >
        <div className="flex items-start justify-between mb-8">
          <MessageCircle className="w-6 h-6 text-white" strokeWidth={1.5} />
          <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">
            {c.contact.whatsapp}
          </div>
          <div className="text-2xl lg:text-3xl font-light tracking-tight text-white">
            {PHONE_LABEL}
          </div>
        </div>
      </a>
      <a
        href={PHONE_URL}
        className="group bg-black p-7 lg:p-9 transition-colors hover:bg-white/[0.025] flex flex-col justify-between"
        style={{ minHeight }}
      >
        <div className="flex items-start justify-between mb-8">
          <Phone className="w-6 h-6 text-white" strokeWidth={1.5} />
          <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">
            {c.contact.phone}
          </div>
          <div className="text-2xl lg:text-3xl font-light tracking-tight text-white">
            {PHONE_LABEL}
          </div>
        </div>
      </a>
    </div>
  );
}

// ── LocationServiceLayout ──────────────────────────────────────────────
export default function LocationServiceLayout({
  CONTENT,
  pageUrl,            // e.g. 'https://symloop.com/locations/alger/ai/'
  cityName,           // e.g. 'Alger'
  cityKey,            // e.g. 'alger'  (for breadcrumb)
  serviceType,        // e.g. 'Applied artificial intelligence'
  schemaKeywords,     // string of comma-separated keywords for SEO
}) {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.fr;

  // Schema.org Service + LocalBusiness — strong "[service] in [city]" signal
  const serviceLd = {
    '@context':   'https://schema.org',
    '@type':      'Service',
    name:         c.title,
    description:  c.dek,
    provider: {
      '@type':    'Organization',
      name:       'Symloop',
      url:        'https://symloop.com',
      telephone:  '+213549575512',
      address: {
        '@type':         'PostalAddress',
        addressLocality: cityName,
        addressRegion:   cityName,
        addressCountry:  'DZ',
      },
    },
    areaServed: {
      '@type': 'City',
      name:    cityName,
      address: { '@type': 'PostalAddress', addressCountry: 'DZ' },
    },
    serviceType,
    url: pageUrl,
  };

  const breadcrumbs = [
    { name: 'Home',      url: 'https://symloop.com/' },
    { name: 'Locations', url: 'https://symloop.com/locations/' },
    { name: cityName,    url: `https://symloop.com/locations/${cityKey}/` },
    { name: c.title.split('—')[0]?.trim() || c.title, url: pageUrl },
  ];

  return (
    <>
      <SEO
        title={`${c.title} | Symloop`}
        description={c.dek}
        keywords={schemaKeywords}
        type="website"
        structuredData={serviceLd}
        breadcrumbs={breadcrumbs}
      />

      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">

        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-20 lg:pb-28">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {c.eyebrow}
                </span>
                <span className="h-px w-12 bg-white/20" />
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">
                  {c.publishedAt}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-5xl sm:text-6xl lg:text-8xl xl:text-[9rem] font-light tracking-tight leading-[0.95]"
              >
                {c.title}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-10 text-xl lg:text-2xl xl:text-3xl text-white/70 leading-[1.5] font-light max-w-3xl"
              >
                {c.dek}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 pt-8 border-t border-white/[0.08]"
              >
                <span>{c.meta.one}</span>
                <span>{c.meta.two}</span>
                <span>{c.meta.three}</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── BIG CONTACT BLOCK — right after hero ───────────────────── */}
        <section className="border-b border-white/[0.06] bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">
                  {c.contact.eyebrow}
                </div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight leading-[1.05] mb-6">
                  {c.contact.title}
                </h2>
                <p className="text-base lg:text-lg text-white/60 leading-relaxed">
                  {c.contact.body}
                </p>
              </div>
              <div className="lg:col-span-7">
                <ContactTiles c={c} />
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-white/[0.06] flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-white/50" strokeWidth={1.5} />
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/45">
                {c.contact.ai}
              </span>
            </div>
          </div>
        </section>

        {/* ── STAT ROW — hard numbers ────────────────────────────────── */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-10 flex items-center gap-3">
              <span>{c.stats.eyebrow}</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">
              {c.stats.items.map((s, i) => (
                <li key={i} className="bg-black p-8 lg:p-10">
                  <div className="text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white leading-none mb-5">
                    {s.value}
                  </div>
                  <div className="font-mono text-[10px] lg:text-[11px] tracking-[0.15em] uppercase text-white/45 leading-snug">
                    {s.label}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Body article ──────────────────────────────────────────── */}
        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="space-y-7 mb-20"
          >
            {c.intro.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-xl lg:text-2xl text-white/80 leading-[1.55] font-light"
              >
                {renderRichText(p)}
              </motion.p>
            ))}
          </motion.div>

          {c.sections.map((s, idx) => (
            <div key={idx}>
              <motion.section
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-100px' }}
                variants={stagger}
                className="mb-16 lg:mb-20"
              >
                <motion.div variants={fadeUp} className="flex items-baseline gap-5 mb-10">
                  <span className="font-mono text-xs tracking-[0.15em] text-white/30">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-3xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                    {s.heading}
                  </h2>
                </motion.div>
                <div className="space-y-6 ps-0 lg:ps-10">
                  {s.body.map((p, i) => (
                    <motion.p
                      key={i}
                      variants={fadeUp}
                      className="text-lg lg:text-xl text-white/70 leading-[1.65]"
                    >
                      {renderRichText(p)}
                    </motion.p>
                  ))}
                </div>
              </motion.section>

              {idx === 0 && c.pullQuote1 && (
                <motion.figure
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="my-20 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16"
                >
                  <blockquote className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-white leading-[1.15]">
                    « {c.pullQuote1} »
                  </blockquote>
                </motion.figure>
              )}

              {idx === 2 && c.pullQuote2 && (
                <motion.figure
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="my-20 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16"
                >
                  <blockquote className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-white leading-[1.15]">
                    « {c.pullQuote2} »
                  </blockquote>
                </motion.figure>
              )}
            </div>
          ))}
        </article>

        {/* ── Related ────────────────────────────────────────────────── */}
        <section className="border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
            <div className="flex items-center gap-3 mb-14">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                {c.related.eyebrow}
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-7">
                <h3 className="text-2xl lg:text-3xl font-light tracking-tight mb-10">
                  {c.related.services.label}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]">
                  {c.related.services.items.map((s, i) => (
                    <li key={s.key} className="bg-black">
                      <Link
                        href={`/services/${s.key}/`}
                        className="group block h-full p-6 lg:p-7 transition-colors hover:bg-white/[0.025]"
                      >
                        <div className="font-mono text-[11px] tracking-[0.15em] text-white/30 mb-6">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        <h4 className="text-lg font-light text-white leading-snug tracking-tight mb-6 min-h-[3rem]">
                          {s.name}
                        </h4>
                        <ArrowUpRight
                          className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                          strokeWidth={1.5}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-5">
                <h3 className="text-2xl lg:text-3xl font-light tracking-tight mb-10">
                  {c.related.insights.label}
                </h3>
                <ul className="space-y-px bg-white/[0.06] border border-white/[0.06]">
                  {c.related.insights.items.map((it) => (
                    <li key={it.key} className="bg-black">
                      <Link
                        href={`/insights/${it.key}/`}
                        className="group block p-6 lg:p-7 transition-colors hover:bg-white/[0.025]"
                      >
                        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 group-hover:text-white/70 transition-colors mb-3">
                          {c.related.insights.label}
                        </div>
                        <h4 className="text-base lg:text-lg font-light text-white leading-snug tracking-tight">
                          {it.name}
                        </h4>
                        <ArrowUpRight
                          className="mt-5 w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                          strokeWidth={1.5}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA + second contact block ─────────────────────────────── */}
        <section className="border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
            >
              <div className="lg:col-span-6">
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                    {c.cta.eyebrow}
                  </span>
                  <span className="h-px w-12 bg-white/20" />
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05]"
                >
                  {c.cta.title}
                </motion.h2>
              </div>
              <div className="lg:col-span-6">
                <ContactTiles c={c} minHeight="200px" />
              </div>
            </motion.div>
            <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-wrap items-center gap-x-8 gap-y-3">
              <Link
                href="/contact/"
                className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-white/45 hover:text-white transition-colors"
              >
                <span>{c.cta.button}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
              </Link>
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/30">·</span>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-white/45">
                <Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span>{c.contact.ai}</span>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
