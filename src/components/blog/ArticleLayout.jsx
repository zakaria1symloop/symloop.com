// Shared layout for quality-gate blog posts: localized content object + SVG
// visuals module. A new post is a content file and a visual spec, nothing else.
import { useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import SEO from '../SEO';
import Visual from './Visual';

const WHATSAPP_URL = 'https://wa.me/213549575512';
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };
const CALL = { fr: 'Réserver un appel', en: 'Book a call', ar: 'احجز مكالمة' };

export function renderRichText(text) {
  return String(text).split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) return <span key={i} className="font-normal text-white border-b border-white/30">{p.slice(2, -2)}</span>;
    const m = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (m) return <Link key={i} href={m[2]} className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white transition-colors">{m[1]}</Link>;
    return <span key={i}>{p}</span>;
  });
}

const P = ({ children }) => <motion.p variants={fadeUp} className="text-lg lg:text-xl text-white/70 leading-[1.65]">{renderRichText(children)}</motion.p>;

export default function ArticleLayout({ slug, locale, content: c, visuals, figureKeys, keywords, datePublished, dateModified }) {
  const isRtl = locale === 'ar';
  const prefix = locale && locale !== 'en' ? `/${locale}` : '';
  const url = `https://symloop.com${prefix}/blog/${slug}/`;
  const cover = `/blog/cover-${slug}.jpg`;
  const v = useMemo(() => visuals(locale || 'fr'), [visuals, locale]);
  const images = [`https://symloop.com${cover}`, ...figureKeys.map((k) => `https://symloop.com/blog/visuals/${slug}/${k}.jpg`)];
  const faq = c.sections.find((s) => s.faq)?.faq || [];
  const structuredData = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'BlogPosting', '@id': `${url}#article`, headline: c.title, description: c.dek, image: images, inLanguage: locale || 'fr', datePublished, dateModified: dateModified || datePublished, author: { '@type': 'Organization', name: 'Symloop', url: 'https://symloop.com/' }, publisher: { '@type': 'Organization', name: 'Symloop', url: 'https://symloop.com/' }, mainEntityOfPage: url, ...(c.about ? { about: c.about } : {}) },
    ...(faq.length ? [{ '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }] : []),
  ] };
  const breadcrumbs = [{ name: 'Home', url: `https://symloop.com${prefix}/` }, { name: 'Blog', url: `https://symloop.com${prefix}/blog/` }, { name: c.title, url }];
  const quoteAfter = (idx) => (c.pullQuotes || []).find((q) => q.after === idx);

  return (
    <>
      <SEO title={`${c.title} — Symloop`} description={c.dek} keywords={keywords} type="article" structuredData={structuredData} breadcrumbs={breadcrumbs} image={cover} />
      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-16">
            <motion.div initial={false} animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8"><Link href="/blog/" className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors">{c.kind}</Link><span className="h-px w-12 bg-white/20" /><span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">{c.publishedAt}</span></motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05]">{c.title}</motion.h1>
              <motion.p variants={fadeUp} className="mt-8 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">{c.dek}</motion.p>
              <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 pt-8 border-t border-white/[0.08]"><span>{c.author}</span><span>{c.readTime}</span></motion.div>
            </motion.div>
          </div>
          <div className="max-w-6xl mx-auto lg:px-10"><div className="border border-white/[0.08]" dangerouslySetInnerHTML={{ __html: v.cover }} /></div>
          <div className="h-16" />
        </section>

        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <motion.div initial={false} animate="show" variants={stagger} className="space-y-7 mb-20">
            {c.intro.map((p, i) => <motion.p key={i} variants={fadeUp} className="text-xl lg:text-2xl text-white/80 leading-[1.55] font-light">{renderRichText(p)}</motion.p>)}
          </motion.div>

          {c.sections.map((s, idx) => (
            <div key={idx}>
              <motion.section initial={false} animate="show" variants={stagger} className="mb-12 lg:mb-16">
                <motion.div variants={fadeUp} className="flex items-baseline gap-5 mb-6">{idx > 0 && <span className="font-mono text-xs tracking-[0.15em] text-white/30">{String(idx).padStart(2, '0')}</span>}<h2 className={`${idx === 0 ? 'text-3xl lg:text-5xl' : 'text-2xl lg:text-3xl'} font-light tracking-tight text-white leading-[1.1]`}>{s.heading}</h2></motion.div>
                <div className="space-y-5 ps-0 lg:ps-10">
                  {(s.body || []).map((p, i) => <P key={i}>{p}</P>)}
                  {s.list && <ul className="space-y-4 pt-2">{s.list.map((p, i) => <motion.li key={i} variants={fadeUp} className="flex gap-4 text-lg lg:text-xl text-white/70 leading-[1.65]"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" /><span>{renderRichText(p)}</span></motion.li>)}</ul>}
                </div>
              </motion.section>

              {s.visual && v.figures[s.visual] && <div className="lg:-mx-16 xl:-mx-32"><Visual svg={v.figures[s.visual].svg} caption={v.figures[s.visual].caption} alt={v.figures[s.visual].alt} /></div>}

              {(s.after || s.ordered || s.faq) && (
                <motion.section initial={false} animate="show" variants={stagger} className="mb-12 lg:mb-16 space-y-5 ps-0 lg:ps-10">
                  {(s.after || []).map((p, i) => <P key={i}>{p}</P>)}
                  {s.ordered && <ol className="space-y-4 pt-2">{s.ordered.map((p, i) => <motion.li key={i} variants={fadeUp} className="flex gap-5 text-lg lg:text-xl text-white/70 leading-[1.65]"><span className="font-mono text-xs tracking-[0.15em] text-white/30 mt-2.5 shrink-0">{String(i + 1).padStart(2, '0')}</span><span>{renderRichText(p)}</span></motion.li>)}</ol>}
                  {s.faq && <dl className="divide-y divide-white/[0.08] border-y border-white/[0.08]">{s.faq.map((f, i) => <motion.div key={i} variants={fadeUp} className="py-6"><dt className="text-lg lg:text-xl text-white font-light mb-2">{f.q}</dt><dd className="text-base lg:text-lg text-white/60 leading-[1.65]">{renderRichText(f.a)}</dd></motion.div>)}</dl>}
                </motion.section>
              )}

              {quoteAfter(idx) && <motion.figure initial={{ y: 30 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="my-20 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16"><blockquote className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-white leading-[1.15]">«{quoteAfter(idx).text}»</blockquote></motion.figure>}
            </div>
          ))}
        </article>

        <section className="border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-6">
                <div className="flex items-center gap-3 mb-8"><span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.cta.eyebrow}</span><span className="h-px w-12 bg-white/20" /></div>
                <h2 className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-8">{c.cta.title}</h2>
                {c.cta.body && <p className="text-base lg:text-lg text-white/60 leading-relaxed mb-10 max-w-xl">{c.cta.body}</p>}
                <div className="flex flex-wrap gap-4">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"><MessageCircle className="w-4 h-4" strokeWidth={1.75} /><span>WhatsApp</span><ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" strokeWidth={1.75} /></a>
                  <Link href="/contact/" className="inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 text-sm font-medium tracking-wide hover:border-white transition-colors">{CALL[locale] || CALL.fr}</Link>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">— {c.related.label}</div>
                <ul className="space-y-px bg-white/[0.06] border border-white/[0.06]">{c.related.items.map((it) => <li key={it.href} className="bg-black"><Link href={it.href} className="group block p-6 transition-colors hover:bg-white/[0.025]"><div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">{it.kind}</div><h3 className="text-base font-light text-white leading-snug">{it.name}</h3></Link></li>)}</ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
