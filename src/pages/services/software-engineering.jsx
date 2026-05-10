// ============================================================================
// SYMLOOP — /services/software-engineering/
//
// New template, same visual language as the AI page.
// Sections (different from AI page on purpose):
//   1.  Split-screen Hero  (left: headline · right: terminal block)
//   2.  Logo marquee (different logos — backend/infra/data, no ML)
//   3.  Video slot (placeholder until owner uploads SE video)
//   4.  Manifesto — 3 numbered statements with hairlines
//   5.  What We Build — sticky left nav + scrolling right content
//   6.  How We Work — vertical timeline with connecting line
//   7.  Proof — 3 big animated counters + centered client quote
//   8.  Tech Stack — monospace code-block ("stack.config.ts")
//   9.  FAQ — two-column (questions left, answer pane right)
//   10. CTA
//
// Constraints (locked):
//   • Pure black background, monochrome white scale, hairline borders
//   • NO gradients
//   • Premium typographic rhythm — font-light huge headlines, mono numerals
//   • Framer Motion scroll-stagger reveals, no parallax/3D
// ============================================================================

import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RelatedLinks from '../../components/services/RelatedLinks';
import {
  ArrowUpRight,
  Play,
  Volume2,
  VolumeX,
  Quote,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// HERO VIDEO CONFIG
// Drop the rendered Remotion MP4 into /public/videos/ and flip HAS_VIDEO=true.
// ---------------------------------------------------------------------------
const HERO_VIDEO_SRC = '/videos/symloop-software-engineering.mp4';
const HAS_VIDEO      = true;

// ---------------------------------------------------------------------------
// Animation primitives — same vocabulary as the AI page
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
// AnimatedCounter — counts an integer or float from 0 → target on scroll-in
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
// HeroVideo — muted autoplay <video> + sound toggle, OR placeholder if no src
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

  // Placeholder mode (no video file yet)
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
// LogoMarquee — backend/infra/data logos (no ML)
// ---------------------------------------------------------------------------
const MARQUEE_LOGOS = [
  { slug: 'typescript',       name: 'TypeScript' },
  { slug: 'python',           name: 'Python' },
  { slug: 'go',               name: 'Go' },
  { slug: 'nodedotjs',        name: 'Node.js' },
  { slug: 'postgresql',       name: 'PostgreSQL' },
  { slug: 'redis',            name: 'Redis' },
  { slug: 'mongodb',          name: 'MongoDB' },
  { slug: 'apachekafka',      name: 'Apache Kafka' },
  { slug: 'docker',           name: 'Docker' },
  { slug: 'kubernetes',       name: 'Kubernetes' },
  { slug: 'terraform',        name: 'Terraform' },
  { slug: 'amazonwebservices',name: 'AWS' },
  { slug: 'googlecloud',      name: 'Google Cloud' },
  { slug: 'graphql',          name: 'GraphQL' },
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
// TerminalBlock — static terminal-style block for the hero right column
// ---------------------------------------------------------------------------
function TerminalBlock() {
  // Each line is [type, text] — 'prompt' is brighter, 'output' is dimmer
  const LINES = [
    ['prompt', '$ git log --oneline | head -1'],
    ['output', '8bb50e5  feat: production deploy v4.2.1'],
    ['blank',  ''],
    ['prompt', '$ uptime'],
    ['output', '  99.987%   over 14 months'],
    ['blank',  ''],
    ['prompt', '$ kubectl get pods'],
    ['output', '  api          Running   847d'],
    ['output', '  worker       Running   847d'],
    ['output', '  scheduler    Running   847d'],
    ['output', '  ingestor     Running   847d'],
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={stagger}
      dir="ltr"
      className="border border-white/[0.08] bg-black/40 backdrop-blur-sm w-full text-left"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full border border-white/30" />
          <span className="w-2.5 h-2.5 rounded-full border border-white/30" />
          <span className="w-2.5 h-2.5 rounded-full border border-white/30" />
        </div>
        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">
          production.log
        </span>
      </div>

      {/* Body — always LTR (code) */}
      <div className="p-6 lg:p-8 font-mono text-xs lg:text-sm leading-relaxed whitespace-pre">
        {LINES.map(([type, text], i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className={
              type === 'prompt' ? 'text-white' :
              type === 'blank'  ? 'h-3' :
              'text-white/55'
            }
          >
            {text || '\u00A0'}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// useActiveSection — IntersectionObserver hook for scroll-spy navigation
// ---------------------------------------------------------------------------
function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        // Pick the topmost visible section
        visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        setActive(visible[0].target.id);
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}

// ---------------------------------------------------------------------------
// StackCodeBlock — monospace stack visualization, looks like a config file
// ---------------------------------------------------------------------------
const STACK_GROUPS = [
  ['languages',     'TypeScript · Python · Go · Rust · Java · .NET'],
  ['runtimes',      'Node.js · Bun · CPython · JVM · .NET CLR'],
  ['backends',      'NestJS · FastAPI · Django · Spring Boot · Express'],
  ['data',          'PostgreSQL · Redis · MongoDB · Elasticsearch · ClickHouse'],
  ['streaming',     'Apache Kafka · NATS · RabbitMQ · Redis Streams'],
  ['infra',         'Docker · Kubernetes · Terraform · Pulumi · Helm'],
  ['ci_cd',         'GitHub Actions · GitLab CI · ArgoCD · Flux'],
  ['cloud',         'AWS · GCP · Azure · Vercel · Cloudflare'],
  ['observability', 'Prometheus · Grafana · OpenTelemetry · Sentry · Loki'],
  ['testing',       'Jest · Pytest · Playwright · k6 · Vitest'],
];

function StackCodeBlock() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={stagger}
      dir="ltr"
      className="border border-white/[0.08] bg-black/40 backdrop-blur-sm text-left"
    >
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full border border-white/30" />
          <span className="w-2.5 h-2.5 rounded-full border border-white/30" />
          <span className="w-2.5 h-2.5 rounded-full border border-white/30" />
        </div>
        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">
          stack.config.ts
        </span>
      </div>

      {/* Body — always LTR (code) */}
      <div className="p-8 lg:p-12 font-mono text-sm lg:text-base leading-relaxed">
        <motion.div variants={fadeUp} className="text-white/35 mb-6">
          // SYMLOOP / SOFTWARE ENGINEERING
        </motion.div>

        {STACK_GROUPS.map(([key, value]) => (
          <motion.div
            key={key}
            variants={fadeUp}
            className="grid grid-cols-12 gap-4 lg:gap-6 py-2 group hover:bg-white/[0.02] transition-colors px-2 -mx-2"
          >
            <span className="col-span-4 lg:col-span-3 text-white/55">{key}</span>
            <span className="col-span-1 text-white/30">:</span>
            <span className="col-span-7 lg:col-span-8 text-white/85 group-hover:text-white transition-colors">
              {value}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// FaqTwoColumn — left list, right active answer pane (mobile = accordion)
// ---------------------------------------------------------------------------
function FaqTwoColumn({ faqs, t }) {
  const [active, setActive] = useState(faqs[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/[0.06] border border-white/[0.06]">
      {/* Left: questions list */}
      <div className="lg:col-span-5 bg-black p-6 lg:p-10">
        <ul className="space-y-px">
          {faqs.map((key) => {
            const isActive = active === key;
            return (
              <li key={key}>
                <button
                  type="button"
                  onClick={() => setActive(key)}
                  className={`group w-full text-start py-5 px-4 -mx-4 transition-colors duration-300 ${
                    isActive ? 'bg-white/[0.04]' : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <div className={`flex items-start gap-3 ${isActive ? 'text-white' : 'text-white/65 group-hover:text-white/90'} transition-colors`}>
                    <span className="font-mono text-[10px] tracking-[0.15em] mt-2 shrink-0 opacity-60">
                      {String(faqs.indexOf(key) + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base lg:text-lg font-light leading-snug">
                      {t(`software_engineering_page.faq.items.${key}.question`)}
                    </span>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right: active answer */}
      <div className="lg:col-span-7 bg-black p-8 lg:p-14 min-h-[300px] flex items-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/35 mb-6">
              {t(`software_engineering_page.faq.label`)}
            </div>
            <h4 className="text-2xl lg:text-3xl font-light text-white leading-snug tracking-tight mb-6">
              {t(`software_engineering_page.faq.items.${active}.question`)}
            </h4>
            <p className="text-base lg:text-lg text-white/60 leading-relaxed">
              {t(`software_engineering_page.faq.items.${active}.answer`)}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// ===========================================================================
// PAGE
// ===========================================================================
export default function SoftwareEngineeringPage() {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const isRtl = locale === 'ar';

  // What We Build categories — must match the section IDs
  const BUILD_CATEGORIES = ['saas', 'enterprise', 'apis', 'realtime', 'modernization'];
  const buildSectionIds = BUILD_CATEGORIES.map((k) => `build-${k}`);
  const activeBuild = useActiveSection(buildSectionIds);

  // Manifesto statements
  const MANIFESTO = ['m1', 'm2', 'm3'];

  // Engagement timeline phases
  const PHASES = ['discovery', 'pilot', 'production'];

  // FAQ keys
  const FAQS = ['cost', 'timeline', 'modernization', 'ip', 'support', 'team'];

  const seo = {
    title: t('software_engineering_page.seo.title'),
    description: t('software_engineering_page.seo.description'),
  };

  return (
    <>
      <Head>
        {/* Primary */}
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={t('software_engineering_page.seo.keywords')} />
        <meta name="author" content="Symloop Technology" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Canonical + hreflang */}
        <link rel="canonical" href="https://symloop.com/services/software-engineering/" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/services/software-engineering/" />
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/services/software-engineering/" />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/services/software-engineering/" />
        <link rel="alternate" hrefLang="x-default" href="https://symloop.com/services/software-engineering/" />

        {/* Open Graph */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content="https://symloop.com/services/software-engineering/" />
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
              '@id': 'https://symloop.com/services/software-engineering/#service',
              name: 'Symloop Software Engineering — Custom Systems & Platform Engineering',
              alternateName: ['Symloop Software Engineering', 'Custom Software Engineering Symloop'],
              serviceType: 'Custom software engineering, SaaS platform engineering, enterprise backend systems, APIs and microservices, real-time systems, system modernization',
              category: 'Software Engineering & Systems Integration',
              description: t('software_engineering_page.seo.description'),
              slogan: 'Software engineering for production.',
              url: 'https://symloop.com/services/software-engineering/',
              provider: {
                '@type': 'Organization',
                '@id': 'https://symloop.com/#organization',
                name: 'Symloop Technology',
                alternateName: ['Symloop', 'Symloop Technology'],
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
                audienceType: 'Enterprises, government agencies, scale-ups seeking custom software systems',
              },
              knowsAbout: [
                'Custom Software Engineering',
                'SaaS Platform Engineering',
                'Multi-tenant SaaS',
                'Enterprise Backend Systems',
                'ERP Systems',
                'CRM Systems',
                'HRMS Systems',
                'API Development',
                'Microservices Architecture',
                'GraphQL',
                'REST APIs',
                'Real-time Systems',
                'Event-driven Architecture',
                'Apache Kafka',
                'System Modernization',
                'Legacy Migration',
                'TypeScript', 'Python', 'Go', 'Rust', 'Node.js',
                'PostgreSQL', 'Redis', 'MongoDB', 'Elasticsearch',
                'Kubernetes', 'Docker', 'Terraform',
                'AWS', 'Google Cloud', 'Azure',
                'Government Software',
                'Industrial Systems',
                'Fintech Backends',
                'Healthcare Systems',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Software Engineering Capabilities',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SaaS & Platform Engineering' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Enterprise Backend Systems (ERP, CRM, HRMS)' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'APIs & Microservices' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Real-time & Event-Driven Systems' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'System Modernization & Migration' } },
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
                { '@type': 'ListItem', position: 3, name: 'Software Engineering', item: 'https://symloop.com/services/software-engineering/' },
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
                name: t(`software_engineering_page.faq.items.${key}.question`),
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: t(`software_engineering_page.faq.items.${key}.answer`),
                },
              })),
            }),
          }}
        />
      </Head>

      <div dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* HERO — split-screen: headline left, terminal right                */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 lg:pt-44 lg:pb-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left column — text */}
              <motion.div
                initial="hidden"
                animate="show"
                variants={stagger}
                className="lg:col-span-7"
              >
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                    {t('software_engineering_page.hero.eyebrow')}
                  </span>
                  <span className="h-px w-12 bg-white/20" />
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[0.95] mb-6"
                >
                  {t('software_engineering_page.hero.titleLine1')}
                </motion.h1>

                <motion.h2
                  variants={fadeUp}
                  className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.05] text-white/60 mb-10"
                >
                  {t('software_engineering_page.hero.titleLine2')}
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-xl mb-12"
                >
                  {t('software_engineering_page.hero.subtitle')}
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
                  <a
                    href="https://wa.me/213549575512"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
                  >
                    <span>{t('software_engineering_page.hero.ctaPrimary')}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
                  </a>
                  <a
                    href="#what-we-build"
                    className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors"
                  >
                    <span>{t('software_engineering_page.hero.ctaSecondary')}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                  </a>
                </motion.div>
              </motion.div>

              {/* Right column — terminal block */}
              <div className="lg:col-span-5">
                <TerminalBlock />
              </div>
            </div>
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
                  {t('software_engineering_page.video.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('software_engineering_page.video.title')}
              </motion.h2>
            </motion.div>

            <HeroVideo
              src={HAS_VIDEO ? HERO_VIDEO_SRC : null}
              label={t('software_engineering_page.video.label')}
            />
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* MANIFESTO — 3 numbered statements with hairlines                  */}
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
                  {t('software_engineering_page.manifesto.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('software_engineering_page.manifesto.title')}
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="border-t border-white/[0.08]"
            >
              {MANIFESTO.map((key, i) => (
                <motion.div
                  key={key}
                  variants={fadeUp}
                  className="border-b border-white/[0.08] py-12 lg:py-16 group hover:bg-white/[0.02] transition-colors duration-300 -mx-6 px-6 lg:-mx-10 lg:px-10"
                >
                  <div className="grid grid-cols-12 gap-4 lg:gap-8">
                    <div className="col-span-2 lg:col-span-1">
                      <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 group-hover:text-white/60 transition-colors duration-300">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="col-span-10 lg:col-span-11">
                      <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.1] tracking-tight">
                        {t(`software_engineering_page.manifesto.items.${key}`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* WHAT WE BUILD — sticky left nav + scrolling right content         */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <section id="what-we-build" className="border-b border-white/[0.06] scroll-mt-24">
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
                  {t('software_engineering_page.build.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('software_engineering_page.build.title')}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl">
                {t('software_engineering_page.build.subtitle')}
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

              {/* Left: sticky nav */}
              <aside className="lg:col-span-4 xl:col-span-3">
                <div className="lg:sticky lg:top-24">
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/35 mb-6">
                    {t('software_engineering_page.build.navLabel')}
                  </div>
                  <ul className="space-y-1">
                    {BUILD_CATEGORIES.map((key, i) => {
                      const id = `build-${key}`;
                      const isActive = activeBuild === id;
                      return (
                        <li key={key}>
                          <a
                            href={`#${id}`}
                            className={`group block py-3 border-s-2 ps-4 transition-all duration-300 ${
                              isActive
                                ? 'border-white text-white'
                                : 'border-white/10 text-white/45 hover:text-white/80 hover:border-white/30'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="font-mono text-[10px] tracking-[0.15em] opacity-60">
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <span className="text-sm font-light">
                                {t(`software_engineering_page.build.items.${key}.title`)}
                              </span>
                            </div>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </aside>

              {/* Right: scrolling content */}
              <div className="lg:col-span-8 xl:col-span-9 space-y-24 lg:space-y-32">
                {BUILD_CATEGORIES.map((key, i) => (
                  <article
                    key={key}
                    id={`build-${key}`}
                    className="scroll-mt-32"
                  >
                    <motion.div
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: '-100px' }}
                      variants={stagger}
                    >
                      <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                        <span className="font-mono text-[11px] tracking-[0.15em] text-white/35">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="h-px w-12 bg-white/15" />
                      </motion.div>

                      <motion.h3 variants={fadeUp} className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-white leading-[1.1] mb-6">
                        {t(`software_engineering_page.build.items.${key}.title`)}
                      </motion.h3>

                      <motion.p variants={fadeUp} className="text-base lg:text-lg text-white/60 leading-relaxed mb-8 max-w-2xl">
                        {t(`software_engineering_page.build.items.${key}.description`)}
                      </motion.p>

                      <motion.ul variants={stagger} className="border-t border-white/[0.08]">
                        {[0, 1, 2, 3, 4].map((idx) => {
                          const item = t(`software_engineering_page.build.items.${key}.examples.${idx}`, { defaultValue: '' });
                          if (!item) return null;
                          return (
                            <motion.li
                              key={idx}
                              variants={fadeUp}
                              className="border-b border-white/[0.08] py-4 flex items-start gap-4 text-white/70"
                            >
                              <span className="font-mono text-[10px] tracking-[0.15em] text-white/30 mt-1 shrink-0">
                                ─
                              </span>
                              <span className="text-base leading-relaxed">{item}</span>
                            </motion.li>
                          );
                        })}
                      </motion.ul>
                    </motion.div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* HOW WE WORK — vertical timeline with connecting line              */}
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
                  {t('software_engineering_page.how.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('software_engineering_page.how.title')}
              </motion.h2>
            </motion.div>

            <div className="relative max-w-4xl">
              {/* Vertical connecting line */}
              <div className="absolute start-4 lg:start-6 top-3 bottom-3 w-px bg-white/[0.12]" aria-hidden="true" />

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-100px' }}
                variants={stagger}
                className="space-y-16 lg:space-y-20"
              >
                {PHASES.map((key, i) => (
                  <motion.div
                    key={key}
                    variants={fadeUp}
                    className="relative ps-14 lg:ps-20"
                  >
                    {/* Milestone dot */}
                    <div className="absolute start-2.5 lg:start-4 top-2 w-3.5 h-3.5 lg:w-4 lg:h-4 rounded-full border-2 border-white bg-black z-10" />

                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-mono text-[11px] tracking-[0.15em] text-white/40">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-light text-white leading-tight tracking-tight">
                        {t(`software_engineering_page.how.steps.${key}.title`)}
                      </h3>
                      <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">
                        {t(`software_engineering_page.how.steps.${key}.duration`)}
                      </span>
                    </div>

                    <p className="text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl">
                      {t(`software_engineering_page.how.steps.${key}.description`)}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* PROOF — 3 big counters + centered client quote                    */}
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
                  {t('software_engineering_page.proof.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('software_engineering_page.proof.title')}
              </motion.h2>
            </motion.div>

            {/* 3 big counters */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] mb-20 lg:mb-24"
            >
              <motion.div variants={fadeUp} className="bg-black p-10 lg:p-14 text-center">
                <div className="text-5xl lg:text-7xl font-light text-white mb-3 tabular-nums">
                  <AnimatedCounter target={99.987} suffix="%" decimals={3} />
                </div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40">
                  {t('software_engineering_page.proof.stats.uptime')}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-black p-10 lg:p-14 text-center">
                <div className="text-5xl lg:text-7xl font-light text-white mb-3 tabular-nums">
                  <AnimatedCounter target={847} suffix="d" />
                </div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40">
                  {t('software_engineering_page.proof.stats.runtime')}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-black p-10 lg:p-14 text-center">
                <div className="text-5xl lg:text-7xl font-light text-white mb-3 tabular-nums">
                  5.0
                </div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40">
                  {t('software_engineering_page.proof.stats.clutch')}
                </div>
              </motion.div>
            </motion.div>

            {/* Centered pull quote */}
            <motion.figure
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div variants={fadeUp} className="flex justify-center mb-8">
                <Quote className="w-8 h-8 text-white/30" strokeWidth={1} />
              </motion.div>

              <motion.blockquote variants={fadeUp} className="text-2xl lg:text-3xl xl:text-4xl font-light text-white leading-[1.3] tracking-tight mb-8">
                {t('software_engineering_page.proof.quote')}
              </motion.blockquote>

              <motion.figcaption variants={fadeUp} className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                {t('software_engineering_page.proof.quoteAttribution')}
              </motion.figcaption>
            </motion.figure>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* TECH STACK — monospace code block                                 */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="max-w-3xl mb-12 lg:mb-16"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {t('software_engineering_page.stack.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('software_engineering_page.stack.title')}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl">
                {t('software_engineering_page.stack.subtitle')}
              </motion.p>
            </motion.div>

            <StackCodeBlock />
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* FAQ — two-column                                                  */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="max-w-3xl mb-12 lg:mb-16"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {t('software_engineering_page.faq.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('software_engineering_page.faq.title')}
              </motion.h2>
            </motion.div>

            <FaqTwoColumn faqs={FAQS} t={t} />
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
                  {t('software_engineering_page.cta.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05] mb-10">
                {t('software_engineering_page.cta.title')}
              </motion.h2>
              <motion.div variants={fadeUp}>
                <a
                  href="https://wa.me/213549575512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
                >
                  <span>{t('software_engineering_page.cta.button')}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <RelatedLinks
          services={['ai', 'cloud', 'product']}
          insights={['cost', 'erp']}
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
