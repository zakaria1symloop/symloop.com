// ============================================================================
// SYMLOOP — /services/mobile/
//
// 3rd distinct template, same visual language.
// Sections (different patterns from AI page tabs and SE page manifesto/sticky-nav):
//   1.  Centered hero with brutal mortality stat as lead (not cycling word, not split-screen)
//   2.  Logo marquee (mobile-specific logos)
//   3.  Video slot
//   4.  Reality strip — 4 mobile-truth stats with context
//   5.  Platforms — 5-row TABLE layout (not tabs, not sticky nav)
//   6.  Survival principles — CHECKLIST (not manifesto)
//   7.  How we ship — 4 horizontal phases (not vertical timeline, not hairline rows)
//   8.  Metrics that matter — 3×2 GRID with mobile-specific numbers
//   9.  Stack — PLATFORM × TECH MATRIX (not logo grid, not code block)
//   10. FAQ — ALL ANSWERS VISIBLE (not accordion, not two-column tabs)
//   11. CTA
//
// Constraints (locked):
//   • Pure black, monochrome white, hairline borders, NO gradients
//   • font-light huge headlines, mono numerals
//   • Framer Motion scroll-stagger, no parallax/3D
// ============================================================================

import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RelatedLinks from '../../components/services/RelatedLinks';
import {
  ArrowUpRight,
  Play,
  Volume2,
  VolumeX,
  Check,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// HERO VIDEO CONFIG
// ---------------------------------------------------------------------------
const HERO_VIDEO_SRC = '/videos/symloop-mobile-engineering.mp4';
const HAS_VIDEO      = true;

// ---------------------------------------------------------------------------
// Animation primitives — same vocabulary as AI + SE pages
// ---------------------------------------------------------------------------
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

// ---------------------------------------------------------------------------
// AnimatedCounter — counts to target on scroll-in
// ---------------------------------------------------------------------------
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
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(eased * target);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}{suffix}
    </span>
  );
}

// ---------------------------------------------------------------------------
// HeroVideo — muted autoplay <video> + sound toggle, OR placeholder
// ---------------------------------------------------------------------------
function HeroVideo({ src, label }) {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);
  const [hasSound, setHasSound] = useState(false);

  const toggleSound = () => {
    const v = ref.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    setMuted(next);
    if (!next) {
      setHasSound(true);
      v.play().catch(() => {});
    }
  };

  if (!src) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="aspect-video w-full bg-white/[0.025] border border-white/[0.08] flex items-center justify-center group cursor-pointer hover:bg-white/[0.04] transition-colors duration-300"
      >
        <div className="flex flex-col items-center gap-5 text-center px-6">
          <div className="w-16 h-16 lg:w-20 lg:h-20 border border-white/30 rounded-full flex items-center justify-center group-hover:border-white/60 group-hover:scale-105 transition-all duration-300">
            <Play className="w-6 h-6 lg:w-7 lg:h-7 text-white/70 group-hover:text-white transition-colors translate-x-0.5" strokeWidth={1.5} />
          </div>
          <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/40">
            {label || 'Video coming soon'}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-video w-full bg-black border border-white/[0.08] overflow-hidden group"
    >
      <video
        ref={ref}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <button
        type="button"
        onClick={toggleSound}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
        className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 z-10 flex items-center gap-2 px-4 py-2.5 lg:px-5 lg:py-3 bg-black/60 hover:bg-black/80 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 group/btn"
      >
        {muted
          ? <VolumeX className="w-4 h-4 lg:w-5 lg:h-5 text-white/85 group-hover/btn:text-white transition-colors" strokeWidth={1.5} />
          : <Volume2 className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover/btn:text-white transition-colors" strokeWidth={1.5} />}
        <span className="font-mono text-[10px] lg:text-[11px] tracking-[0.15em] uppercase text-white/85 group-hover/btn:text-white transition-colors">
          {muted ? (hasSound ? 'Sound off' : 'Click for sound') : 'Sound on'}
        </span>
      </button>
      {label && (
        <div className="absolute top-4 left-4 lg:top-6 lg:left-6 z-10 px-3 py-1.5 bg-black/60 backdrop-blur-sm border border-white/15">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/70">{label}</span>
        </div>
      )}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// LogoMarquee — mobile-stack logos
// ---------------------------------------------------------------------------
const MARQUEE_LOGOS = [
  { slug: 'swift',          name: 'Swift' },
  { slug: 'apple',          name: 'iOS' },
  { slug: 'kotlin',         name: 'Kotlin' },
  { slug: 'android',        name: 'Android' },
  { slug: 'flutter',        name: 'Flutter' },
  { slug: 'dart',           name: 'Dart' },
  { slug: 'react',          name: 'React Native' },
  { slug: 'typescript',     name: 'TypeScript' },
  { slug: 'firebase',       name: 'Firebase' },
  { slug: 'sentry',         name: 'Sentry' },
  { slug: 'fastlane',       name: 'Fastlane' },
  { slug: 'graphql',        name: 'GraphQL' },
  { slug: 'expo',           name: 'Expo' },
  { slug: 'googleplay',     name: 'Google Play' },
];

function LogoMarquee() {
  const items = [...MARQUEE_LOGOS, ...MARQUEE_LOGOS];
  return (
    <div className="relative border-y border-white/[0.06] py-12 lg:py-14 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 lg:w-40 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 lg:w-40 bg-gradient-to-l from-black to-transparent z-10" />
      <motion.div
        className="flex items-center gap-16 lg:gap-24 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
      >
        {items.map((logo, i) => (
          <img
            key={`${logo.slug}-${i}`}
            src={`https://cdn.simpleicons.org/${logo.slug}`}
            alt={logo.name}
            className="h-7 lg:h-8 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300 shrink-0"
            style={{ filter: 'brightness(0) invert(1)' }}
            loading="lazy"
          />
        ))}
      </motion.div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// PlatformRow — table-style row for the 5-platform table
// ---------------------------------------------------------------------------
function PlatformRow({ index, platformKey, t }) {
  const num = String(index + 1).padStart(2, '0');
  return (
    <motion.div
      variants={fadeUp}
      className="group border-b border-white/[0.08] last:border-b-0 hover:bg-white/[0.02] transition-colors duration-300 -mx-6 px-6 lg:-mx-10 lg:px-10 py-10 lg:py-14"
    >
      <div className="grid grid-cols-12 gap-4 lg:gap-8 items-start">
        <div className="col-span-2 lg:col-span-1">
          <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 group-hover:text-white/60 transition-colors duration-300">
            {num}
          </span>
        </div>
        <div className="col-span-10 lg:col-span-3">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-light text-white leading-tight tracking-tight mb-2">
            {t(`mobile_engineering_page.platforms.items.${platformKey}.name`)}
          </h3>
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">
            {t(`mobile_engineering_page.platforms.items.${platformKey}.stack`)}
          </span>
        </div>
        <div className="col-span-12 lg:col-span-5 xl:col-span-5">
          <p className="text-base lg:text-lg text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
            {t(`mobile_engineering_page.platforms.items.${platformKey}.description`)}
          </p>
        </div>
        <div className="col-span-12 lg:col-span-3 lg:text-end">
          <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/35 mb-1">
            {t('mobile_engineering_page.platforms.bestForLabel')}
          </div>
          <p className="text-sm text-white/55 leading-relaxed">
            {t(`mobile_engineering_page.platforms.items.${platformKey}.bestFor`)}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// SurvivalCheckItem — checklist row with hairline rule
// ---------------------------------------------------------------------------
function SurvivalCheckItem({ index, itemKey, t }) {
  const num = String(index + 1).padStart(2, '0');
  return (
    <motion.div
      variants={fadeUp}
      className="group flex items-start gap-6 lg:gap-10 py-8 lg:py-10 border-b border-white/[0.08] last:border-b-0 hover:bg-white/[0.02] transition-colors duration-300 -mx-4 px-4 lg:-mx-6 lg:px-6"
    >
      <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 group-hover:text-white/60 transition-colors mt-2 shrink-0">
        {num}
      </span>
      <div className="w-9 h-9 lg:w-11 lg:h-11 border border-white/15 group-hover:border-white/40 flex items-center justify-center shrink-0 transition-colors duration-300">
        <Check className="w-4 h-4 lg:w-5 lg:h-5 text-white/55 group-hover:text-white transition-colors" strokeWidth={1.5} />
      </div>
      <p className="text-2xl lg:text-3xl font-light text-white leading-snug tracking-tight pt-1.5 group-hover:text-white transition-colors">
        {t(`mobile_engineering_page.survival.items.${itemKey}`)}
      </p>
    </motion.div>
  );
}

// ===========================================================================
// PAGE
// ===========================================================================
export default function MobileEngineeringPage() {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const isRtl = locale === 'ar';

  const PLATFORMS  = ['ios', 'android', 'flutter', 'reactnative', 'embedded'];
  const SURVIVAL   = ['s1', 's2', 's3', 's4', 's5', 's6'];
  const PHASES     = ['discovery', 'design', 'engineering', 'ship'];
  const METRICS    = ['fps', 'paint', 'crash', 'coverage', 'codebase', 'stores'];
  const FAQS       = ['cost', 'timeline', 'platforms', 'offline', 'store', 'maintenance'];
  const STACK_KEYS = ['ios', 'android', 'flutter', 'reactnative'];

  const seo = {
    title: t('mobile_engineering_page.seo.title'),
    description: t('mobile_engineering_page.seo.description'),
  };

  return (
    <>
      <Head>
        {/* Primary */}
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={t('mobile_engineering_page.seo.keywords')} />
        <meta name="author" content="Symloop Technology" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Canonical + hreflang */}
        <link rel="canonical" href="https://symloop.com/services/mobile/" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/services/mobile/" />
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/services/mobile/" />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/services/mobile/" />
        <link rel="alternate" hrefLang="x-default" href="https://symloop.com/services/mobile/" />

        {/* Open Graph */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content="https://symloop.com/services/mobile/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Symloop" />
        <meta property="og:locale" content={locale === 'fr' ? 'fr_FR' : locale === 'ar' ? 'ar_DZ' : 'en_US'} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />

        {/* Geo (Algeria local SEO) */}
        <meta name="geo.region" content="DZ" />
        <meta name="geo.placename" content="Algiers, Algeria" />
        <meta name="geo.position" content="36.7538;3.0588" />
        <meta name="ICBM" content="36.7538, 3.0588" />

        {/* JSON-LD: Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              '@id': 'https://symloop.com/services/mobile/#service',
              name: 'Symloop Mobile Engineering — Native iOS, Android, Flutter, React Native',
              alternateName: ['Mobile App Development Symloop', 'Symloop Mobile Apps'],
              serviceType: 'Mobile application engineering, native iOS development, native Android development, Flutter development, React Native development, embedded mobile applications',
              category: 'Mobile App Development',
              description: t('mobile_engineering_page.seo.description'),
              slogan: 'Mobile engineering for production.',
              url: 'https://symloop.com/services/mobile/',
              provider: {
                '@type': 'Organization',
                '@id': 'https://symloop.com/#organization',
                name: 'Symloop Technology',
                url: 'https://symloop.com',
                logo: 'https://symloop.com/sym-logo.png',
                telephone: '+213549575512',
                email: 'contact@symloop.com',
                sameAs: [
                  'https://clutch.co/profile/symloop-technology',
                  'https://www.linkedin.com/company/symloop-technology',
                ],
              },
              areaServed: [
                { '@type': 'Country', name: 'Algeria' },
                { '@type': 'Country', name: 'Morocco' },
                { '@type': 'Country', name: 'Tunisia' },
                { '@type': 'Country', name: 'Egypt' },
                { '@type': 'Country', name: 'United Arab Emirates' },
                { '@type': 'Country', name: 'Saudi Arabia' },
                { '@type': 'Country', name: 'Qatar' },
                { '@type': 'Country', name: 'Kuwait' },
                { '@type': 'Country', name: 'France' },
                { '@type': 'Country', name: 'Spain' },
                { '@type': 'Country', name: 'Germany' },
                { '@type': 'Country', name: 'Italy' },
                { '@type': 'Country', name: 'United Kingdom' },
              ],
              audience: {
                '@type': 'BusinessAudience',
                audienceType: 'Enterprises, scale-ups, and product teams launching production mobile applications',
              },
              knowsAbout: [
                'Mobile App Development',
                'Native iOS Development',
                'Swift',
                'SwiftUI',
                'Native Android Development',
                'Kotlin',
                'Jetpack Compose',
                'Flutter',
                'Dart',
                'React Native',
                'TypeScript Mobile',
                'Mobile UI Engineering',
                'Mobile Performance Optimization',
                'Offline-first Mobile',
                'Mobile Accessibility',
                'App Store Submission',
                'Google Play Submission',
                'Fastlane',
                'Mobile CI/CD',
                'Firebase',
                'Sentry Mobile',
                'Mobile Analytics',
                'Push Notifications',
                'Mobile Authentication',
                'In-app Purchases',
                'Mobile Backend Integration',
                'Real-time Mobile',
                'Mobile Maps',
                'Mobile Payments',
                'CIB Edahabia mobile integration',
                'Mobile Localization',
                'Arabic mobile RTL',
                'Mobile App Algeria',
                'Mobile App MENA',
                'Mobile App Europe',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Mobile Engineering Capabilities',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Native iOS Development' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Native Android Development' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flutter Development' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'React Native Development' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Embedded Mobile Applications' } },
                ],
              },
            }),
          }}
        />

        {/* JSON-LD: BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home',     item: 'https://symloop.com/' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://symloop.com/services/' },
                { '@type': 'ListItem', position: 3, name: 'Mobile Engineering', item: 'https://symloop.com/services/mobile/' },
              ],
            }),
          }}
        />

        {/* JSON-LD: FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: FAQS.map((key) => ({
                '@type': 'Question',
                name: t(`mobile_engineering_page.faq.items.${key}.question`),
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: t(`mobile_engineering_page.faq.items.${key}.answer`),
                },
              })),
            }),
          }}
        />
      </Head>

      <div dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* HERO — centered, brutal stat as lead                              */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 lg:pt-44 lg:pb-28 text-center">
            <motion.div initial="hidden" animate="show" variants={stagger}>

              <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-10">
                <span className="h-px w-12 bg-white/20" />
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {t('mobile_engineering_page.hero.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05] mb-8 max-w-5xl mx-auto"
              >
                {t('mobile_engineering_page.hero.titleLine1')}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white/55 leading-[1.1] mb-12"
              >
                {t('mobile_engineering_page.hero.titleLine2')}
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-base lg:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto mb-12"
              >
                {t('mobile_engineering_page.hero.subtitle')}
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-6">
                <a
                  href="https://wa.me/213549575512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
                >
                  <span>{t('mobile_engineering_page.hero.ctaPrimary')}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
                </a>
                <a
                  href="#platforms"
                  className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors"
                >
                  <span>{t('mobile_engineering_page.hero.ctaSecondary')}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                </a>
              </motion.div>
            </motion.div>

            {/* Reality strip — 4 mobile-truth stats */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] mt-24 lg:mt-32 text-start"
            >
              {[
                { label: 'mobile_engineering_page.hero.stats.deletion.label', value: 'mobile_engineering_page.hero.stats.deletion.value' },
                { label: 'mobile_engineering_page.hero.stats.fps.label',       value: 'mobile_engineering_page.hero.stats.fps.value' },
                { label: 'mobile_engineering_page.hero.stats.clutch.label',    value: 'mobile_engineering_page.hero.stats.clutch.value' },
                { label: 'mobile_engineering_page.hero.stats.stores.label',    value: 'mobile_engineering_page.hero.stats.stores.value' },
              ].map((s, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-black p-8 lg:p-10">
                  <div className="text-3xl lg:text-4xl font-light text-white mb-2">
                    {t(s.value)}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">
                    {t(s.label)}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* LOGO MARQUEE                                                      */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <LogoMarquee />

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* VIDEO                                                             */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="max-w-3xl mb-10 lg:mb-12"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {t('mobile_engineering_page.video.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('mobile_engineering_page.video.title')}
              </motion.h2>
            </motion.div>

            <HeroVideo
              src={HAS_VIDEO ? HERO_VIDEO_SRC : null}
              label={t('mobile_engineering_page.video.label')}
            />
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* PLATFORMS — 5-row table                                           */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <section id="platforms" className="border-b border-white/[0.06] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="max-w-3xl mb-16 lg:mb-20"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {t('mobile_engineering_page.platforms.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('mobile_engineering_page.platforms.title')}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl">
                {t('mobile_engineering_page.platforms.subtitle')}
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="border-t border-white/[0.08]"
            >
              {PLATFORMS.map((key, i) => (
                <PlatformRow key={key} index={i} platformKey={key} t={t} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* SURVIVAL CHECKLIST                                                */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="max-w-3xl mb-16 lg:mb-20"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {t('mobile_engineering_page.survival.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('mobile_engineering_page.survival.title')}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl">
                {t('mobile_engineering_page.survival.subtitle')}
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="border-t border-white/[0.08] max-w-5xl"
            >
              {SURVIVAL.map((key, i) => (
                <SurvivalCheckItem key={key} index={i} itemKey={key} t={t} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* HOW WE SHIP — 4 phases                                            */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="max-w-3xl mb-16 lg:mb-20"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {t('mobile_engineering_page.how.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('mobile_engineering_page.how.title')}
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]"
            >
              {PHASES.map((phase, i) => (
                <motion.div
                  key={phase}
                  variants={fadeUp}
                  className="group bg-black p-8 lg:p-10 hover:bg-white/[0.025] transition-colors duration-300 relative overflow-hidden"
                >
                  {/* Hover top accent line */}
                  <div className="absolute top-0 left-0 h-px w-0 bg-white group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />

                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/35 group-hover:text-white/60 transition-colors duration-300 mb-6">
                    {String(i + 1).padStart(2, '0')} · {t(`mobile_engineering_page.how.steps.${phase}.duration`)}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-light text-white leading-tight tracking-tight mb-4">
                    {t(`mobile_engineering_page.how.steps.${phase}.title`)}
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                    {t(`mobile_engineering_page.how.steps.${phase}.description`)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* METRICS — 3×2 grid                                                */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="max-w-3xl mb-16 lg:mb-20"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {t('mobile_engineering_page.metrics.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('mobile_engineering_page.metrics.title')}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl">
                {t('mobile_engineering_page.metrics.subtitle')}
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]"
            >
              {METRICS.map((key) => (
                <motion.div
                  key={key}
                  variants={fadeUp}
                  className="group bg-black p-8 lg:p-12 hover:bg-white/[0.025] transition-colors duration-300"
                >
                  <div className="text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-3 leading-none tabular-nums">
                    {t(`mobile_engineering_page.metrics.items.${key}.value`)}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40 mb-6">
                    {t(`mobile_engineering_page.metrics.items.${key}.label`)}
                  </div>
                  <p className="text-sm text-white/55 leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                    {t(`mobile_engineering_page.metrics.items.${key}.description`)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* STACK MATRIX — platform × tech                                    */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="max-w-3xl mb-16 lg:mb-20"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {t('mobile_engineering_page.stack.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('mobile_engineering_page.stack.title')}
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]"
            >
              {STACK_KEYS.map((key) => (
                <motion.div
                  key={key}
                  variants={fadeUp}
                  className="group bg-black p-8 lg:p-10 hover:bg-white/[0.025] transition-colors duration-300"
                >
                  <h3 className="text-xl lg:text-2xl font-normal text-white leading-tight mb-4">
                    {t(`mobile_engineering_page.stack.items.${key}.platform`)}
                  </h3>
                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/35 mb-4">
                    {t(`mobile_engineering_page.stack.items.${key}.label`)}
                  </div>
                  <p className="text-sm text-white/65 leading-relaxed group-hover:text-white/85 transition-colors duration-300">
                    {t(`mobile_engineering_page.stack.items.${key}.tech`)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* FAQ — all answers visible                                         */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="max-w-3xl mb-16 lg:mb-20"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {t('mobile_engineering_page.faq.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('mobile_engineering_page.faq.title')}
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="max-w-4xl border-t border-white/[0.08]"
            >
              {FAQS.map((key, i) => (
                <motion.div
                  key={key}
                  variants={fadeUp}
                  className="group border-b border-white/[0.08] py-10 lg:py-14 grid grid-cols-12 gap-4 lg:gap-8 hover:bg-white/[0.02] transition-colors duration-300 -mx-4 px-4 lg:-mx-6 lg:px-6"
                >
                  <div className="col-span-12 lg:col-span-1">
                    <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 group-hover:text-white/60 transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="col-span-12 lg:col-span-11">
                    <h3 className="text-2xl lg:text-3xl font-light text-white leading-snug tracking-tight mb-4">
                      {t(`mobile_engineering_page.faq.items.${key}.question`)}
                    </h3>
                    <p className="text-base lg:text-lg text-white/55 leading-relaxed max-w-3xl">
                      {t(`mobile_engineering_page.faq.items.${key}.answer`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* CTA                                                                */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="max-w-4xl"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {t('mobile_engineering_page.cta.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05] mb-10">
                {t('mobile_engineering_page.cta.title')}
              </motion.h2>
              <motion.div variants={fadeUp}>
                <a
                  href="https://wa.me/213549575512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
                >
                  <span>{t('mobile_engineering_page.cta.button')}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <RelatedLinks
          services={['software-engineering', 'product', 'cloud']}
          insights={['cost']}
        />
      </div>
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
