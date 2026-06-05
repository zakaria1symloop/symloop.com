// ============================================================================
// SYMLOOP — WilayaPage shared template
//
// Shared editorial template for dedicated wilaya pages. The first three wilayas
// (alger, setif, oran, constantine, annaba) were built standalone before this
// template existed; from Tizi Ouzou onward, each wilaya is a thin wrapper that
// imports this template and passes its content + schema as props.
//
// Each wilaya .jsx file owns its CONTENT object — that's what you edit to
// control what shows for that wilaya.
// ============================================================================

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import SEO from '../SEO';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };

function renderRich(text) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => p.startsWith('**') && p.endsWith('**')
    ? <span key={i} className="font-normal text-white border-b border-white/30">{p.slice(2, -2)}</span>
    : <span key={i}>{p}</span>);
}

export default function WilayaPage({ content, placeLd, breadcrumbs, seoTitle, seoDescription, seoKeywords }) {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = content[locale] || content.fr;

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        type="website"
        structuredData={placeLd}
        breadcrumbs={breadcrumbs}
      />
      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-20 lg:pb-28">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.eyebrow}</span>
                <span className="h-px w-12 bg-white/20" />
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">{c.publishedAt}</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05]">{c.title}</motion.h1>
              <motion.p variants={fadeUp} className="mt-8 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">{c.dek}</motion.p>
              <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 pt-8 border-t border-white/[0.08]">
                <span>{c.meta.one}</span><span>{c.meta.two}</span><span>{c.meta.three}</span>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="space-y-6 mb-16">
            {c.intro.map((p, i) => <motion.p key={i} variants={fadeUp} className="text-lg lg:text-xl text-white/75 leading-relaxed font-light">{renderRich(p)}</motion.p>)}
          </motion.div>
          {c.sections.map((s, idx) => (
            <motion.section key={idx} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-16 lg:mb-20">
              <motion.div variants={fadeUp} className="flex items-baseline gap-4 mb-8">
                <span className="font-mono text-[11px] tracking-[0.15em] text-white/30">{String(idx + 1).padStart(2, '0')}</span>
                <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-white leading-tight">{s.heading}</h2>
              </motion.div>
              <div className="space-y-5 ps-0 lg:ps-10">
                {s.body.map((p, i) => <motion.p key={i} variants={fadeUp} className="text-base lg:text-lg text-white/65 leading-relaxed">{renderRich(p)}</motion.p>)}
              </div>
            </motion.section>
          ))}
        </article>
        <section className="border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
            <div className="flex items-center gap-3 mb-14">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.related.eyebrow}</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-7">
                <h3 className="text-2xl lg:text-3xl font-light tracking-tight mb-10">{c.related.services.label}</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]">
                  {c.related.services.items.map((s, i) => (
                    <li key={s.key} className="bg-black">
                      <Link href={`/services/${s.key}/`} className="group block h-full p-6 lg:p-7 transition-colors hover:bg-white/[0.025]">
                        <div className="font-mono text-[11px] tracking-[0.15em] text-white/30 mb-6">{String(i + 1).padStart(2, '0')}</div>
                        <h4 className="text-lg font-light text-white leading-snug tracking-tight mb-6 min-h-[3rem]">{s.name}</h4>
                        <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-5">
                <h3 className="text-2xl lg:text-3xl font-light tracking-tight mb-10">{c.related.insights.label}</h3>
                <ul className="space-y-px bg-white/[0.06] border border-white/[0.06]">
                  {c.related.insights.items.map((it) => (
                    <li key={it.key} className="bg-black">
                      <Link href={`/insights/${it.key}/`} className="group block p-6 lg:p-7 transition-colors hover:bg-white/[0.025]">
                        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 group-hover:text-white/70 transition-colors mb-3">{c.related.insights.label}</div>
                        <h4 className="text-base lg:text-lg font-light text-white leading-snug tracking-tight">{it.name}</h4>
                        <ArrowUpRight className="mt-5 w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="max-w-3xl">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.cta.eyebrow}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1]">{c.cta.title}</motion.h2>
              <motion.div variants={fadeUp} className="mt-10">
                <Link href="/contact/" className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-white border-b border-white/30 hover:border-white pb-2 transition-colors">
                  <span>{c.cta.button}</span>
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
