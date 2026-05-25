// ============================================================================
// SYMLOOP — Shared country-insight template.
//
// Used by /insights/libya/, /insights/mauritania/, /insights/mali/ (and any
// future country brief). Each country file passes a localized CONTENT object
// and country-specific JSON-LD `about` entities; the template renders the
// hero, animated delivery-time chart, sections, FAQ, takeaways, related
// services + insights, and CTA in a way that is locale-aware (FR/EN/AR with
// RTL flip).
//
// Animation: framer-motion with mount-gate on the chart to avoid the
// SSR `initial={{ height: 0 }}` hydration mismatch we hit on insurance/pharma.
// ============================================================================

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import SEO from './SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

// Delivery-time-to-value chart. Bars compare International vendor (slow,
// expensive) vs Symloop (fast, regional). Client-only render via mount-gate
// to avoid framer-motion height:0 SSR/CSR mismatch.
function DeliveryChart({ label, before, after, deltaLabel, note }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const max = Math.max(before.value, after.value);
  const bh  = (v) => Math.round((v / max) * 100);

  if (!mounted) {
    return (
      <figure className="relative my-16 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{label}</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <div className="h-[260px] lg:h-[340px] mb-8" aria-hidden="true" />
        <figcaption className="mt-10 text-xs lg:text-sm text-white/40 leading-relaxed max-w-2xl mx-auto text-center font-light">{note}</figcaption>
      </figure>
    );
  }

  return (
    <motion.figure
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
      className="relative my-16 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16"
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{label}</span>
        <span className="h-px flex-1 bg-white/10" />
      </motion.div>

      <div className="grid grid-cols-2 gap-8 lg:gap-16 items-end h-[260px] lg:h-[340px] mb-8 max-w-2xl mx-auto">
        {[before, after].map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: `${bh(b.value)}%` }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1, delay: 0.25 + i * 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`relative w-full ${i === 0 ? 'bg-white/[0.18]' : 'bg-white'} flex flex-col items-center justify-start`}
            style={{ minHeight: 8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.3 + i * 0.35 }}
              className={`absolute -top-9 font-light text-2xl lg:text-3xl tracking-tight ${i === 0 ? 'text-white/70' : 'text-white'}`}
            >
              {b.value}<span className="text-base text-white/40 ms-1">{b.unit || ''}</span>
            </motion.span>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8 lg:gap-16 max-w-2xl mx-auto mb-8">
        {[before, after].map((b, i) => (
          <motion.div key={i} variants={fadeUp} className="text-center">
            <span className="font-mono text-[10px] lg:text-[11px] tracking-[0.15em] uppercase text-white/40">{b.label}</span>
          </motion.div>
        ))}
      </div>

      {deltaLabel && (
        <motion.div variants={fadeUp} className="text-center mb-6">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-white/70 border border-white/20 px-4 py-2">
            {deltaLabel}
          </span>
        </motion.div>
      )}

      <motion.figcaption variants={fadeUp} className="mt-6 text-xs lg:text-sm text-white/40 leading-relaxed max-w-2xl mx-auto text-center font-light">
        {note}
      </motion.figcaption>
    </motion.figure>
  );
}

function renderRichText(text) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) {
      return (
        <span key={i} className="font-normal text-white border-b border-white/30">
          {p.slice(2, -2)}
        </span>
      );
    }
    return <span key={i}>{p}</span>;
  });
}

export default function CountryInsightTemplate({
  content,
  slug,
  publishedDate,
  coverImage,
  countryFaqAr,
  countryFaqFr,
  countryFaqEn,
  schemaAbout,
  schemaMentions,
  schemaAudience,
  keywords,
}) {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = content[locale] || content.fr;

  const articleLd = {
    '@context':      'https://schema.org',
    '@type':         'Article',
    headline:        c.title,
    description:     c.dek,
    image:           [`https://symloop.com${coverImage}`],
    datePublished:   publishedDate,
    dateModified:    publishedDate,
    author:          { '@type': 'Organization', name: 'Symloop Technology' },
    publisher:       {
      '@type': 'Organization',
      name:    'Symloop Technology',
      logo:    { '@type': 'ImageObject', url: 'https://symloop.com/sym-logo.png' },
    },
    mainEntityOfPage: `https://symloop.com/insights/${slug}/`,
    about: schemaAbout,
    mentions: schemaMentions || [],
    audience: schemaAudience,
  };

  const breadcrumbs = [
    { name: 'Home',     url: 'https://symloop.com/' },
    { name: 'Insights', url: 'https://symloop.com/insights/' },
    { name: c.title,    url: `https://symloop.com/insights/${slug}/` },
  ];

  return (
    <>
      <SEO
        title={c.titleSeo}
        description={c.dekSeo}
        keywords={keywords}
        type="article"
        structuredData={articleLd}
        faq={c.faq}
        breadcrumbs={breadcrumbs}
        image={coverImage}
      />

      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">

        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-16">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <Link href="/insights/" className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors">
                  {c.kind}
                </Link>
                <span className="h-px w-12 bg-white/20" />
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">{c.publishedAt}</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05]">
                {c.title}
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-8 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">
                {c.dek}
              </motion.p>

              <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 pt-8 border-t border-white/[0.08]">
                <span>{c.author}</span>
                <span>{c.pages}</span>
                <span>{c.readTime}</span>
              </motion.div>
            </motion.div>
          </div>

          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] border-y border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <Image
              src={coverImage}
              alt={c.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="space-y-6 mb-16">
            {c.intro.map((p, i) => (
              <motion.p key={i} variants={fadeUp} className="text-lg lg:text-xl text-white/75 leading-relaxed font-light">
                {renderRichText(p)}
              </motion.p>
            ))}
          </motion.div>

          <DeliveryChart
            label={c.chart.label}
            before={c.chart.before}
            after={c.chart.after}
            deltaLabel={c.chart.deltaLabel}
            note={c.chart.note}
          />

          {c.sections.map((s, idx) => (
            <motion.section key={idx} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-16 lg:mb-20">
              <motion.div variants={fadeUp} className="flex items-baseline gap-4 mb-8">
                <span className="font-mono text-[11px] tracking-[0.15em] text-white/30">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-white leading-tight">
                  {s.heading}
                </h2>
              </motion.div>

              <div className="space-y-5 ps-0 lg:ps-10">
                {s.body.map((p, i) => (
                  <motion.p key={i} variants={fadeUp} className="text-base lg:text-lg text-white/65 leading-relaxed">
                    {renderRichText(p)}
                  </motion.p>
                ))}
              </div>
            </motion.section>
          ))}

          <motion.aside initial="hidden" whileInView="show" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="mt-20 mb-16 border border-white/[0.08] bg-white/[0.015] p-8 lg:p-12">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.takeaways.title}</span>
              <span className="h-px flex-1 bg-white/10" />
            </motion.div>
            <ul className="space-y-5">
              {c.takeaways.items.map((t, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-5">
                  <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 pt-1.5 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-base lg:text-lg text-white/75 leading-relaxed font-light">{t}</p>
                </motion.li>
              ))}
            </ul>
          </motion.aside>

          {c.faq && c.faq.length > 0 && (
            <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="mt-20 mb-16">
              <motion.div variants={fadeUp} className="flex items-baseline gap-4 mb-10">
                <span className="font-mono text-[11px] tracking-[0.15em] text-white/30">FAQ</span>
                <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-white leading-tight">
                  {isRtl ? 'أسئلة يطرحها المشترون' : (locale === 'fr' ? 'Questions des décideurs' : 'Questions buyers ask')}
                </h2>
              </motion.div>
              <div className="space-y-8 ps-0 lg:ps-10 border-t border-white/[0.06] pt-8">
                {c.faq.map((f, i) => (
                  <motion.div key={i} variants={fadeUp} className="border-b border-white/[0.06] pb-8 last:border-0">
                    <h3 className="text-lg lg:text-xl font-normal text-white mb-3 leading-snug">{f.q}</h3>
                    <p className="text-base lg:text-lg text-white/65 leading-relaxed">{f.a}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {c.relatedServices && (
            <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="mt-20 mb-16">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.relatedServices.heading}</span>
                <span className="h-px flex-1 bg-white/10" />
              </motion.div>
              <ul className="space-y-px bg-white/[0.06]">
                {c.relatedServices.items.map((item) => (
                  <motion.li key={item.href} variants={fadeUp}>
                    <Link href={item.href} className="group flex items-start justify-between gap-6 bg-black p-6 hover:bg-white/[0.02] transition-colors">
                      <span className="text-base lg:text-lg text-white/75 group-hover:text-white transition-colors leading-snug font-light">{item.name}</span>
                      <ArrowRight className="w-4 h-4 mt-1.5 text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all shrink-0" strokeWidth={1.5} />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          )}

          {c.relatedInsights && (
            <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="mt-16 mb-12">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.relatedInsights.heading}</span>
                <span className="h-px flex-1 bg-white/10" />
              </motion.div>
              <ul className="space-y-px bg-white/[0.06]">
                {c.relatedInsights.items.map((item) => (
                  <motion.li key={item.href} variants={fadeUp}>
                    <Link href={item.href} className="group flex items-start justify-between gap-6 bg-black p-6 hover:bg-white/[0.02] transition-colors">
                      <span className="text-base lg:text-lg text-white/75 group-hover:text-white transition-colors leading-snug font-light">{item.name}</span>
                      <ArrowRight className="w-4 h-4 mt-1.5 text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all shrink-0" strokeWidth={1.5} />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          )}
        </article>

        <section className="border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="max-w-3xl">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.cta.eyebrow}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>

              <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1]">
                {c.cta.title}
              </motion.h2>

              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-6">
                <a href="https://wa.me/213549575512" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-white border-b border-white/30 hover:border-white pb-2 transition-colors">
                  <span>{c.cta.button}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </a>
                <Link href="/insights/" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors">
                  {isRtl ? <ArrowRight className="w-3.5 h-3.5 rotate-180" strokeWidth={1.5} /> : <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />}
                  <span>{c.backToHub}</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
}
