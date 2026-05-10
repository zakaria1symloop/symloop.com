// ============================================================================
// SYMLOOP — /services/product/   (Product Engineering)
//
// 8th distinct template. Same visual language.
// Sections:
//   1.  HERO with massive single-line headline + 4 phase pills below
//   2.  Logo marquee
//   3.  Video slot
//   4.  What we ship — 5 product types (zigzag asymmetric layout)
//   5.  The team you get — 5 roles in a "team card" grid (NEW)
//   6.  Phases — 5 horizontal cards (Discovery → Design → Build → Launch → Iterate)
//   7.  Stats — 4 metric cards
//   8.  Stack — by discipline
//   9.  FAQ — single column with hover-reveal extra context
//   10. CTA
// ============================================================================

import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RelatedLinks from '../../components/services/RelatedLinks';
import { ArrowUpRight, Play, Volume2, VolumeX } from 'lucide-react';

const HERO_VIDEO_SRC = '/videos/symloop-product-engineering.mp4';
const HAS_VIDEO      = false;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

function AnimatedCounter({ target = 0, suffix = '', duration = 1500, decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf;
    let start = null;
    const tick = (now) => {
      if (start === null) start = now;
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(eased * target);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return <span ref={ref}>{val.toFixed(decimals)}{suffix}</span>;
}

function HeroVideo({ src, label }) {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);
  const [hasSound, setHasSound] = useState(false);
  const toggleSound = () => {
    const v = ref.current; if (!v) return;
    const next = !muted; v.muted = next; setMuted(next);
    if (!next) { setHasSound(true); v.play().catch(() => {}); }
  };
  if (!src) return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="aspect-video w-full bg-white/[0.025] border border-white/[0.08] flex items-center justify-center group cursor-pointer hover:bg-white/[0.04] transition-colors duration-300">
      <div className="flex flex-col items-center gap-5 text-center px-6">
        <div className="w-16 h-16 lg:w-20 lg:h-20 border border-white/30 rounded-full flex items-center justify-center group-hover:border-white/60 group-hover:scale-105 transition-all duration-300">
          <Play className="w-6 h-6 lg:w-7 lg:h-7 text-white/70 group-hover:text-white transition-colors translate-x-0.5" strokeWidth={1.5} />
        </div>
        <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/40">{label || 'Video coming soon'}</div>
      </div>
    </motion.div>
  );
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative aspect-video w-full bg-black border border-white/[0.08] overflow-hidden group">
      <video ref={ref} src={src} autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover" />
      <button type="button" onClick={toggleSound} aria-label={muted ? 'Unmute video' : 'Mute video'} className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 z-10 flex items-center gap-2 px-4 py-2.5 lg:px-5 lg:py-3 bg-black/60 hover:bg-black/80 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 group/btn">
        {muted ? <VolumeX className="w-4 h-4 lg:w-5 lg:h-5 text-white/85 group-hover/btn:text-white transition-colors" strokeWidth={1.5} /> : <Volume2 className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover/btn:text-white transition-colors" strokeWidth={1.5} />}
        <span className="font-mono text-[10px] lg:text-[11px] tracking-[0.15em] uppercase text-white/85 group-hover/btn:text-white transition-colors">{muted ? (hasSound ? 'Sound off' : 'Click for sound') : 'Sound on'}</span>
      </button>
      {label && <div className="absolute top-4 left-4 lg:top-6 lg:left-6 z-10 px-3 py-1.5 bg-black/60 backdrop-blur-sm border border-white/15"><span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/70">{label}</span></div>}
    </motion.div>
  );
}

const MARQUEE_LOGOS = [
  { slug: 'figma',          name: 'Figma' },
  { slug: 'react',          name: 'React' },
  { slug: 'nextdotjs',      name: 'Next.js' },
  { slug: 'typescript',     name: 'TypeScript' },
  { slug: 'tailwindcss',    name: 'Tailwind' },
  { slug: 'postgresql',     name: 'PostgreSQL' },
  { slug: 'vercel',         name: 'Vercel' },
  { slug: 'storybook',      name: 'Storybook' },
  { slug: 'playwright',     name: 'Playwright' },
  { slug: 'sentry',         name: 'Sentry' },
  { slug: 'linear',         name: 'Linear' },
  { slug: 'github',         name: 'GitHub' },
];

function LogoMarquee() {
  const items = [...MARQUEE_LOGOS, ...MARQUEE_LOGOS];
  return (
    <div className="relative border-y border-white/[0.06] py-12 lg:py-14 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 lg:w-40 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 lg:w-40 bg-gradient-to-l from-black to-transparent z-10" />
      <motion.div className="flex items-center gap-16 lg:gap-24 w-max" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 40, ease: 'linear', repeat: Infinity }}>
        {items.map((logo, i) => (
          <img key={`${logo.slug}-${i}`} src={`https://cdn.simpleicons.org/${logo.slug}`} alt={logo.name} className="h-7 lg:h-8 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300 shrink-0" style={{ filter: 'brightness(0) invert(1)' }} loading="lazy" />
        ))}
      </motion.div>
    </div>
  );
}

export default function ProductEngineeringPage() {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const isRtl = locale === 'ar';

  const PRODUCTS = ['saas', 'mobile', 'marketplace', 'internal', 'webapp'];
  const ROLES    = ['pm', 'designer', 'engineer', 'devops', 'qa'];
  const PHASES   = ['discovery', 'design', 'build', 'launch', 'iterate'];
  const STACK    = ['design', 'frontend', 'backend', 'infra'];
  const FAQS     = ['cost', 'timeline', 'team', 'pricing', 'maintenance', 'ownership'];
  const PHASE_PILLS = [
    { key: 'pill1' }, { key: 'pill2' }, { key: 'pill3' }, { key: 'pill4' },
  ];

  const seo = {
    title: t('product_engineering_page.seo.title'),
    description: t('product_engineering_page.seo.description'),
  };

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={t('product_engineering_page.seo.keywords')} />
        <meta name="author" content="Symloop Technology" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://symloop.com/services/product/" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/services/product/" />
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/services/product/" />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/services/product/" />
        <link rel="alternate" hrefLang="x-default" href="https://symloop.com/services/product/" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content="https://symloop.com/services/product/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Symloop" />
        <meta property="og:locale" content={locale === 'fr' ? 'fr_FR' : locale === 'ar' ? 'ar_DZ' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="geo.region" content="DZ" />
        <meta name="geo.placename" content="Algiers, Algeria" />
        <meta name="geo.position" content="36.7538;3.0588" />
        <meta name="ICBM" content="36.7538, 3.0588" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'Service',
          '@id': 'https://symloop.com/services/product/#service',
          name: 'Symloop Product Engineering — Discovery to Launch, One Team',
          alternateName: ['Symloop Product', 'Symloop Product Engineering Team'],
          serviceType: 'End-to-end product engineering: product discovery, design, frontend and backend engineering, mobile, DevOps, launch, iteration',
          category: 'Product Engineering & Development',
          description: t('product_engineering_page.seo.description'),
          slogan: 'From idea to production. One team. End to end.',
          url: 'https://symloop.com/services/product/',
          provider: {
            '@type': 'Organization', '@id': 'https://symloop.com/#organization',
            name: 'Symloop Technology', url: 'https://symloop.com', logo: 'https://symloop.com/sym-logo.png',
            telephone: '+213549575512', email: 'contact@symloop.com',
            sameAs: ['https://clutch.co/profile/symloop-technology', 'https://www.linkedin.com/company/symloop-technology'],
          },
          areaServed: [
            { '@type': 'Country', name: 'Algeria' }, { '@type': 'Country', name: 'Morocco' },
            { '@type': 'Country', name: 'Tunisia' }, { '@type': 'Country', name: 'Egypt' },
            { '@type': 'Country', name: 'United Arab Emirates' }, { '@type': 'Country', name: 'Saudi Arabia' },
            { '@type': 'Country', name: 'France' }, { '@type': 'Country', name: 'Spain' },
            { '@type': 'Country', name: 'Germany' }, { '@type': 'Country', name: 'Italy' },
          ],
          knowsAbout: [
            'Product Engineering', 'Product Development', 'Discovery', 'User Research',
            'UX Design', 'UI Design', 'Design Systems', 'Figma', 'Storybook',
            'Frontend Engineering', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
            'Backend Engineering', 'Node.js', 'PostgreSQL', 'Prisma',
            'Mobile Engineering', 'Flutter', 'React Native',
            'DevOps', 'Vercel', 'Kubernetes', 'CI/CD',
            'QA Engineering', 'Playwright', 'Cypress',
            'Product Launch', 'A/B Testing', 'Feature Flags',
            'SaaS Engineering', 'Marketplace Engineering', 'Internal Tools',
            'Product Engineering Algeria', 'Product Engineering MENA',
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog', name: 'Product Engineering Capabilities',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SaaS Product Engineering' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Product Engineering' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Marketplace Engineering' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Internal Tools Engineering' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Application Engineering' } },
            ],
          },
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://symloop.com/' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://symloop.com/services/' },
            { '@type': 'ListItem', position: 3, name: 'Product Engineering', item: 'https://symloop.com/services/product/' },
          ],
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'FAQPage',
          mainEntity: FAQS.map((key) => ({
            '@type': 'Question',
            name: t(`product_engineering_page.faq.items.${key}.question`),
            acceptedAnswer: { '@type': 'Answer', text: t(`product_engineering_page.faq.items.${key}.answer`) },
          })),
        }) }} />
      </Head>

      <div dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">

        {/* HERO — massive single-line headline + 4 phase pills */}
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 lg:pt-44 lg:pb-28">
            <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-6xl">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{t('product_engineering_page.hero.eyebrow')}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl xl:text-9xl font-light tracking-tight leading-[0.95] mb-6">
                {t('product_engineering_page.hero.titleLine1')}
              </motion.h1>
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.05] text-white/55 mb-12">
                {t('product_engineering_page.hero.titleLine2')}
              </motion.h2>

              {/* 4 phase pills */}
              <motion.div variants={stagger} className="flex flex-wrap items-center gap-3 lg:gap-4 mb-12">
                {PHASE_PILLS.map((p, i) => (
                  <motion.div key={p.key} variants={fadeUp} className="flex items-center gap-3">
                    <span className="border border-white/15 px-4 py-2 text-[11px] font-mono tracking-[0.15em] uppercase text-white/65 hover:border-white/40 hover:text-white transition-colors">
                      {t(`product_engineering_page.hero.pills.${p.key}`)}
                    </span>
                    {i < PHASE_PILLS.length - 1 && (
                      <span className="font-mono text-white/30 text-[11px]">→</span>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              <motion.p variants={fadeUp} className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-2xl mb-12">
                {t('product_engineering_page.hero.subtitle')}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
                <a href="https://wa.me/213549575512" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors">
                  <span>{t('product_engineering_page.hero.ctaPrimary')}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
                </a>
                <a href="#products" className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors">
                  <span>{t('product_engineering_page.hero.ctaSecondary')}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <LogoMarquee />

        {/* VIDEO */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="max-w-3xl mb-10 lg:mb-12">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{t('product_engineering_page.video.eyebrow')}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('product_engineering_page.video.title')}
              </motion.h2>
            </motion.div>
            <HeroVideo src={HAS_VIDEO ? HERO_VIDEO_SRC : null} label={t('product_engineering_page.video.label')} />
          </div>
        </section>

        {/* PRODUCTS — 5 product types */}
        <section id="products" className="border-b border-white/[0.06] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="max-w-3xl mb-16 lg:mb-20">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{t('product_engineering_page.products.eyebrow')}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('product_engineering_page.products.title')}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl">
                {t('product_engineering_page.products.subtitle')}
              </motion.p>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="border-t border-white/[0.08]">
              {PRODUCTS.map((key, i) => (
                <motion.div key={key} variants={fadeUp} className="group border-b border-white/[0.08] py-10 lg:py-14 hover:bg-white/[0.02] transition-colors duration-300 -mx-6 px-6 lg:-mx-10 lg:px-10">
                  <div className="grid grid-cols-12 gap-4 lg:gap-8 items-start">
                    <div className="col-span-2 lg:col-span-1">
                      <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 group-hover:text-white/60 transition-colors">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="col-span-10 lg:col-span-4">
                      <h3 className="text-2xl lg:text-3xl xl:text-4xl font-light text-white leading-tight tracking-tight mb-2">
                        {t(`product_engineering_page.products.items.${key}.name`)}
                      </h3>
                      <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">
                        {t(`product_engineering_page.products.items.${key}.tag`)}
                      </span>
                    </div>
                    <div className="col-span-12 lg:col-span-7">
                      <p className="text-base lg:text-lg text-white/55 leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                        {t(`product_engineering_page.products.items.${key}.description`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* TEAM — 5 roles */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="max-w-3xl mb-16 lg:mb-20">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{t('product_engineering_page.team.eyebrow')}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('product_engineering_page.team.title')}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl">
                {t('product_engineering_page.team.subtitle')}
              </motion.p>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/[0.06] border border-white/[0.06]">
              {ROLES.map((key, i) => (
                <motion.div key={key} variants={fadeUp} className="group bg-black p-8 lg:p-10 hover:bg-white/[0.025] transition-colors duration-300">
                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/35 mb-6">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-normal text-white leading-snug mb-4">
                    {t(`product_engineering_page.team.roles.${key}.title`)}
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                    {t(`product_engineering_page.team.roles.${key}.description`)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PHASES — 5 horizontal */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="max-w-3xl mb-16 lg:mb-20">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{t('product_engineering_page.phases.eyebrow')}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('product_engineering_page.phases.title')}
              </motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/[0.06] border border-white/[0.06]">
              {PHASES.map((phase, i) => (
                <motion.div key={phase} variants={fadeUp} className="group bg-black p-6 lg:p-8 hover:bg-white/[0.025] transition-colors duration-300 relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 group-hover:text-white/60 transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">
                      {t(`product_engineering_page.phases.steps.${phase}.duration`)}
                    </span>
                  </div>
                  <h3 className="text-lg lg:text-xl font-normal text-white leading-tight mb-3">
                    {t(`product_engineering_page.phases.steps.${phase}.title`)}
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                    {t(`product_engineering_page.phases.steps.${phase}.description`)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PROOF — 4 metric cards */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="max-w-3xl mb-16 lg:mb-20">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{t('product_engineering_page.proof.eyebrow')}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('product_engineering_page.proof.title')}
              </motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">
              <motion.div variants={fadeUp} className="bg-black p-8 lg:p-12">
                <div className="text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-3 tabular-nums">
                  <AnimatedCounter target={12} suffix="w" />
                </div>
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">
                  {t('product_engineering_page.proof.timeToLaunch')}
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-black p-8 lg:p-12">
                <div className="text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-3 tabular-nums">
                  <AnimatedCounter target={50} suffix="+" />
                </div>
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">
                  {t('product_engineering_page.proof.products')}
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-black p-8 lg:p-12">
                <div className="text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-3 tabular-nums">
                  <AnimatedCounter target={1} suffix=":3" />
                </div>
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">
                  {t('product_engineering_page.proof.ratio')}
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-black p-8 lg:p-12">
                <div className="text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-3 tabular-nums">
                  5.0
                </div>
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">
                  {t('product_engineering_page.proof.clutch')}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* STACK — 4 disciplines */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="max-w-3xl mb-16 lg:mb-20">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{t('product_engineering_page.stack.eyebrow')}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('product_engineering_page.stack.title')}
              </motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="border-t border-white/[0.08]">
              {STACK.map((key, i) => (
                <motion.div key={key} variants={fadeUp} className="group border-b border-white/[0.08] py-8 lg:py-10 hover:bg-white/[0.02] transition-colors duration-300 -mx-6 px-6 lg:-mx-10 lg:px-10">
                  <div className="grid grid-cols-12 gap-4 lg:gap-8 items-baseline">
                    <div className="col-span-12 lg:col-span-3">
                      <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/30 mb-2">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-light text-white leading-tight tracking-tight">
                        {t(`product_engineering_page.stack.disciplines.${key}.title`)}
                      </h3>
                    </div>
                    <div className="col-span-12 lg:col-span-9">
                      <p className="font-mono text-sm lg:text-base text-white/65 leading-relaxed group-hover:text-white/85 transition-colors duration-300">
                        {t(`product_engineering_page.stack.disciplines.${key}.tools`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="max-w-3xl mb-16 lg:mb-20">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{t('product_engineering_page.faq.eyebrow')}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('product_engineering_page.faq.title')}
              </motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="border-t border-white/[0.08] max-w-5xl">
              {FAQS.map((key, i) => (
                <motion.div key={key} variants={fadeUp} className="group border-b border-white/[0.08] py-10 lg:py-14 hover:bg-white/[0.02] transition-colors duration-300 -mx-6 px-6 lg:-mx-10 lg:px-10">
                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/30 group-hover:text-white/60 transition-colors mb-3">
                    Q.{String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-light text-white leading-snug tracking-tight mb-4">
                    {t(`product_engineering_page.faq.items.${key}.question`)}
                  </h3>
                  <p className="text-base lg:text-lg text-white/55 leading-relaxed max-w-3xl">
                    {t(`product_engineering_page.faq.items.${key}.answer`)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="max-w-4xl">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{t('product_engineering_page.cta.eyebrow')}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05] mb-10">
                {t('product_engineering_page.cta.title')}
              </motion.h2>
              <motion.div variants={fadeUp}>
                <a href="https://wa.me/213549575512" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors">
                  <span>{t('product_engineering_page.cta.button')}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <RelatedLinks
          services={['software-engineering', 'mobile', 'consulting']}
          insights={['erp', 'cost']}
        />
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
