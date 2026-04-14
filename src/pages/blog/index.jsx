"use client";
import { useState, useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getAllBlogs } from '../../data/blogs';
import SEO from '../../components/SEO';

// ============================================================================
// SYMLOOP — /blog/ index (editorial redesign)
//
// Same visual DNA as /insights/ hub: hairline grid, font-light, mono numerals,
// no gradients, no colored topic clusters, no search bar. Clean editorial grid
// with minimal category filter.
// ============================================================================

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
};

const COPY = {
  fr: {
    eyebrow: 'Blog · Symloop',
    title:   'Articles et guides pratiques.',
    subtitle: 'Guides techniques, comparatifs, et retours d\'expérience écrits par notre équipe d\'ingénieurs. Pas de contenu générique — du jugement d\'ingénierie appliqué au marché algérien.',
    all:     'Tout',
    readTime: 'min de lecture',
  },
  en: {
    eyebrow: 'Blog · Symloop',
    title:   'Articles and practical guides.',
    subtitle: 'Technical guides, comparisons, and experience reports written by our engineering team. No generic content — engineering judgment applied to the Algerian market.',
    all:     'All',
    readTime: 'min read',
  },
  ar: {
    eyebrow: 'المدونة · سيملوب',
    title:   'مقالات وأدلة عملية.',
    subtitle: 'أدلة تقنية ومقارنات وتقارير تجربة كتبها فريق المهندسين لدينا. لا محتوى عام — حكم هندسي مطبق على السوق الجزائرية.',
    all:     'الكل',
    readTime: 'دقيقة قراءة',
  },
};

export default function BlogIndexPage({ locale: serverLocale }) {
  const router = useRouter();
  const { t } = useTranslation('common');
  const locale = serverLocale || router.locale || 'fr';
  const isRtl = locale === 'ar';
  const c = COPY[locale] || COPY.fr;

  const blogs = getAllBlogs(locale);
  const [activeCategory, setActiveCategory] = useState(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set();
    blogs.forEach(b => { if (b.category) cats.add(b.category); });
    return Array.from(cats).sort();
  }, [blogs]);

  // Filter blogs
  const filtered = useMemo(() => {
    if (!activeCategory) return blogs;
    return blogs.filter(b => b.category === activeCategory);
  }, [blogs, activeCategory]);

  const breadcrumbs = [
    { name: 'Home', url: 'https://symloop.com/' },
    { name: 'Blog', url: 'https://symloop.com/blog/' },
  ];

  return (
    <>
      <SEO
        title={`Blog — Symloop`}
        description={c.subtitle}
        keywords="blog symloop, articles tech algérie, guides développement algérie, blog ingénierie logicielle algérie"
        breadcrumbs={breadcrumbs}
      />

      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">

        {/* Hero */}
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-20 lg:pb-28">
            <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-4xl">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {c.eyebrow}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[1.02]">
                {c.title}
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-8 text-lg lg:text-xl text-white/55 leading-relaxed max-w-2xl">
                {c.subtitle}
              </motion.p>

              {/* Category filter — mono tags */}
              <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`font-mono text-[11px] tracking-[0.15em] uppercase px-4 py-2 border transition-colors ${
                    !activeCategory
                      ? 'border-white text-white'
                      : 'border-white/[0.08] text-white/40 hover:text-white/70 hover:border-white/20'
                  }`}
                >
                  {c.all} ({blogs.length})
                </button>
                {categories.slice(0, 8).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
                    className={`font-mono text-[11px] tracking-[0.15em] uppercase px-4 py-2 border transition-colors ${
                      activeCategory === cat
                        ? 'border-white text-white'
                        : 'border-white/[0.08] text-white/40 hover:text-white/70 hover:border-white/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>

              {/* Count */}
              <motion.div variants={fadeUp} className="mt-8 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">
                {String(filtered.length).padStart(2, '0')} / {String(blogs.length).padStart(2, '0')}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Blog grid */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]"
            >
              {filtered.map((blog, i) => {
                const num = String(i + 1).padStart(2, '0');
                return (
                  <motion.li key={blog.slug} variants={fadeUp} className="bg-black">
                    <Link
                      href={`/blog/${blog.slug}/`}
                      className="group flex flex-col h-full p-7 lg:p-8 transition-colors duration-300 hover:bg-white/[0.025] focus:outline-none focus:bg-white/[0.04]"
                    >
                      {/* Top: category + number */}
                      <div className="flex items-start justify-between mb-8">
                        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40 group-hover:text-white/70 transition-colors duration-300">
                          {blog.category || 'Article'}
                        </span>
                        <span className="font-mono text-[10px] tracking-[0.15em] text-white/25">
                          {num}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-lg lg:text-xl font-light text-white leading-snug tracking-tight mb-4 flex-1">
                        {blog.title}
                      </h2>

                      {/* Description */}
                      {blog.description && (
                        <p className="text-sm text-white/45 leading-relaxed mb-8 line-clamp-2">
                          {blog.description}
                        </p>
                      )}

                      {/* Bottom: meta + arrow */}
                      <div className="flex items-center justify-between pt-5 border-t border-white/[0.06]">
                        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/30">
                          {blog.readTime || '5'} {c.readTime}
                        </span>
                        <ArrowUpRight
                          className="w-3.5 h-3.5 text-white/30 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                          strokeWidth={1.5}
                        />
                      </div>
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
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
      locale: locale || 'fr',
    },
  };
}
