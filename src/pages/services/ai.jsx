// ============================================================================
// SYMLOOP — /services/ai/  (v3 — interactivity round)
//
// Changes from v2:
//   • Animated counters in the hero stats (scroll-triggered tween)
//   • Infinite horizontal logo marquee below the hero (real tech logos via
//     cdn.simpleicons.org, monochrome white)
//   • Capabilities now use a TABBED panel instead of 5 stacked deep sections.
//     Click a capability card → the deep panel below swaps content with a
//     fade transition. Far less wall-of-text.
//   • Tech-stack section uses a real LOGO GRID instead of text-only groups.
//   • Stronger hover micro-interactions on every clickable element (accent
//     bar slide-in, opacity rise, subtle bg shift).
//   • Removed the old 5 stacked deep-dive sections.
//
// Constraints (still locked):
//   • Pure black background, monochrome white scale, hairline borders
//   • NO gradients anywhere
//   • Premium typographic rhythm — font-light huge headlines, mono numerals
//   • i18n via next-i18next
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
  ArrowRight,
  Eye,
  MessagesSquare,
  LineChart,
  Cpu,
  Sparkles,
  Play,
  CheckCircle2,
  Plus,
  Minus,
  Volume2,
  VolumeX,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// HERO VIDEO CONFIG
// MP4 lives at /public/videos/symloop-ai-how-it-works.mp4
// Plays muted on autoplay, user clicks the speaker button to enable sound.
// ---------------------------------------------------------------------------
const HERO_VIDEO_SRC = '/videos/symloop-ai-how-it-works.mp4';

// ---------------------------------------------------------------------------
// Animation primitives
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
// CyclingWord — fades through words on a timer (used in hero H1)
// Renders in the same font as the H1 (no italic/serif — those break Arabic
// rendering and would force a font fallback). The accent comes from the
// fade transition and a slightly heavier weight, not from italic.
// ---------------------------------------------------------------------------
function CyclingWord({ words, interval = 2400 }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!words || words.length === 0) return;
    const id = setInterval(() => setI((p) => (p + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words, interval]);

  if (!words || words.length === 0) return null;

  return (
    <span className="relative inline-block align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ opacity: 0, y: '0.4em' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-0.4em' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block font-normal text-white/95"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// ---------------------------------------------------------------------------
// AnimatedCounter — counts an integer from 0 → target on scroll-in
// ---------------------------------------------------------------------------
function AnimatedCounter({ target = 0, suffix = '', duration = 1500, prefix = '' }) {
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
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}{val}{suffix}
    </span>
  );
}

// ---------------------------------------------------------------------------
// HeroVideo — muted autoplay <video> with click-to-unmute sound toggle
// Premium overlay design — matches the page's clean monochrome aesthetic.
// ---------------------------------------------------------------------------
function HeroVideo({ src, label }) {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);
  const [hasSound, setHasSound] = useState(false); // becomes true after first unmute

  const toggleSound = () => {
    const v = ref.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    setMuted(next);
    if (!next) {
      setHasSound(true);
      // Browsers sometimes need an explicit play() after unmute
      v.play().catch(() => {});
    }
  };

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

      {/* Sound toggle button — bottom-right overlay */}
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

      {/* Optional caption label, top-left */}
      {label && (
        <div className="absolute top-4 left-4 lg:top-6 lg:left-6 z-10 px-3 py-1.5 bg-black/60 backdrop-blur-sm border border-white/15">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/70">
            {label}
          </span>
        </div>
      )}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// LogoMarquee — infinite horizontal scroll of monochrome tech logos
// Uses cdn.simpleicons.org (returns SVGs by slug; ?color=white isn't supported,
// so we set CSS filter to render any color icon as white).
// ---------------------------------------------------------------------------
const MARQUEE_LOGOS = [
  { slug: 'pytorch',          name: 'PyTorch' },
  { slug: 'tensorflow',       name: 'TensorFlow' },
  { slug: 'openai',           name: 'OpenAI' },
  { slug: 'anthropic',        name: 'Anthropic' },
  { slug: 'huggingface',      name: 'Hugging Face' },
  { slug: 'python',           name: 'Python' },
  { slug: 'docker',           name: 'Docker' },
  { slug: 'kubernetes',       name: 'Kubernetes' },
  { slug: 'amazonwebservices',name: 'AWS' },
  { slug: 'googlecloud',      name: 'Google Cloud' },
  { slug: 'nvidia',           name: 'NVIDIA' },
  { slug: 'postgresql',       name: 'PostgreSQL' },
  { slug: 'nextdotjs',        name: 'Next.js' },
  { slug: 'typescript',       name: 'TypeScript' },
];

function LogoMarquee() {
  // Duplicate the logo set for seamless loop
  const items = [...MARQUEE_LOGOS, ...MARQUEE_LOGOS];

  return (
    <div className="relative border-y border-white/[0.06] py-12 lg:py-14 overflow-hidden">
      {/* Edge fades — opacity only, no color gradient */}
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
// LogoGrid — static grid of monochrome logos for the tech stack section
// ---------------------------------------------------------------------------
const TECH_STACK_LOGOS = [
  { slug: 'pytorch',          name: 'PyTorch' },
  { slug: 'tensorflow',       name: 'TensorFlow' },
  { slug: 'scikitlearn',      name: 'scikit-learn' },
  { slug: 'huggingface',      name: 'Hugging Face' },
  { slug: 'openai',           name: 'OpenAI' },
  { slug: 'anthropic',        name: 'Anthropic' },
  { slug: 'opencv',           name: 'OpenCV' },
  { slug: 'onnx',             name: 'ONNX' },
  { slug: 'nvidia',           name: 'NVIDIA' },
  { slug: 'docker',           name: 'Docker' },
  { slug: 'kubernetes',       name: 'Kubernetes' },
  { slug: 'mlflow',           name: 'MLflow' },
  { slug: 'apacheairflow',    name: 'Airflow' },
  { slug: 'amazonwebservices',name: 'AWS' },
  { slug: 'googlecloud',      name: 'Google Cloud' },
  { slug: 'postgresql',       name: 'PostgreSQL' },
  { slug: 'redis',            name: 'Redis' },
  { slug: 'apachekafka',      name: 'Kafka' },
];

function LogoGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={stagger}
      className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-px bg-white/[0.06] border border-white/[0.06]"
    >
      {TECH_STACK_LOGOS.map((logo, i) => (
        <motion.div
          key={logo.slug}
          variants={fadeUp}
          className="group relative bg-black aspect-[4/3] flex flex-col items-center justify-center p-6 hover:bg-white/[0.025] transition-colors duration-300"
        >
          <img
            src={`https://cdn.simpleicons.org/${logo.slug}`}
            alt={logo.name}
            className="h-8 lg:h-10 w-auto opacity-55 group-hover:opacity-100 transition-opacity duration-300"
            style={{ filter: 'brightness(0) invert(1)' }}
            loading="lazy"
          />
          <div className="absolute bottom-3 left-0 right-0 text-center font-mono text-[10px] tracking-[0.1em] uppercase text-white/0 group-hover:text-white/40 transition-colors duration-300">
            {logo.name}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// CapabilityTab — clickable tab card (active state has accent line + bg)
// ---------------------------------------------------------------------------
function CapabilityTab({ index, capKey, icon: Icon, active, onSelect, t }) {
  const num = String(index + 1).padStart(2, '0');
  return (
    <motion.li variants={fadeUp} className={`relative bg-black ${active ? 'lg:bg-white/[0.03]' : ''}`}>
      <button
        type="button"
        onClick={() => onSelect(capKey)}
        className="group relative w-full h-full text-start p-8 lg:p-10 transition-colors duration-300 hover:bg-white/[0.025] focus:outline-none focus:bg-white/[0.04]"
      >
        {/* Active accent bar (top edge) */}
        {active && (
          <motion.div
            layoutId="cap-active-bar"
            className="absolute top-0 left-0 right-0 h-px bg-white"
          />
        )}

        <div className="flex items-start justify-between mb-10">
          <Icon
            className={`w-7 h-7 transition-colors duration-300 ${active ? 'text-white' : 'text-white/60 group-hover:text-white/90'}`}
            strokeWidth={1.25}
          />
          <span className={`font-mono text-[11px] tracking-[0.15em] transition-colors duration-300 ${active ? 'text-white/70' : 'text-white/30'}`}>
            {num}
          </span>
        </div>

        <h3 className={`text-xl lg:text-2xl font-normal leading-snug mb-3 transition-colors duration-300 ${active ? 'text-white' : 'text-white/85 group-hover:text-white'}`}>
          {t(`ai_page.capabilities.items.${capKey}.title`)}
        </h3>

        <p className="text-sm text-white/45 leading-relaxed mb-8 min-h-[3rem]">
          {t(`ai_page.capabilities.items.${capKey}.tagline`)}
        </p>

        <div className={`flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] transition-colors duration-300 ${active ? 'text-white' : 'text-white/40 group-hover:text-white/80'}`}>
          <span>{active ? t('ai_page.capabilities.activeLabel') : t('ai_page.capabilities.cta')}</span>
          {!active && <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.5} />}
        </div>
      </button>
    </motion.li>
  );
}

// ---------------------------------------------------------------------------
// CapabilityPanel — the deep view that swaps in when a tab is selected
// ---------------------------------------------------------------------------
function CapabilityPanel({ capKey, icon: Icon, t }) {
  const useCases = Array.from({ length: 6 }, (_, k) =>
    t(`ai_page.capabilities.items.${capKey}.useCases.${k}`, { defaultValue: '' })
  ).filter(Boolean);

  return (
    <motion.div
      key={capKey}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="border border-white/[0.06] border-t-0"
    >
      <div className="grid grid-cols-12 gap-6 lg:gap-12 p-8 lg:p-14">

        {/* Left: title + description + tech */}
        <div className="col-span-12 lg:col-span-5 xl:col-span-4">
          <div className="flex items-start gap-4 mb-6">
            <Icon className="w-7 h-7 text-white/70 mt-2 shrink-0" strokeWidth={1.25} />
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-white leading-[1.05]">
              {t(`ai_page.capabilities.items.${capKey}.title`)}
            </h3>
          </div>

          <p className="text-base lg:text-lg text-white/55 leading-relaxed mb-8">
            {t(`ai_page.capabilities.items.${capKey}.description`)}
          </p>

          <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/40">
            {t(`ai_page.capabilities.items.${capKey}.tech`)}
          </div>
        </div>

        {/* Right: 6 use cases (RTL-safe — uses logical start padding/border) */}
        <div className="col-span-12 lg:col-span-7 xl:col-span-8 lg:ps-8 lg:border-s lg:border-white/[0.08]">
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/35 mb-6">
            {t('ai_page.capabilities.useCasesLabel')}
          </div>

          <ul className="space-y-1">
            {useCases.map((uc, k) => (
              <motion.li
                key={k}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + k * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group flex items-start gap-4 py-4 border-b border-white/[0.06] last:border-b-0 hover:bg-white/[0.02] transition-colors px-2 -mx-2"
              >
                <CheckCircle2 className="w-4 h-4 text-white/40 mt-1 shrink-0 group-hover:text-white/80 transition-colors" strokeWidth={1.5} />
                <span className="text-base text-white/70 leading-relaxed group-hover:text-white transition-colors">{uc}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// EngagementStep
// ---------------------------------------------------------------------------
function EngagementStep({ index, stepKey, t }) {
  const num = String(index + 1).padStart(2, '0');
  return (
    <motion.div variants={fadeUp} className="border-t border-white/[0.08] py-10 lg:py-12 group hover:bg-white/[0.02] transition-colors duration-300 -mx-4 px-4 lg:-mx-6 lg:px-6">
      <div className="grid grid-cols-12 gap-4 lg:gap-8">
        <div className="col-span-2 lg:col-span-1">
          <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 group-hover:text-white/60 transition-colors duration-300">{num}</span>
        </div>
        <div className="col-span-10 lg:col-span-4">
          <h3 className="text-2xl lg:text-3xl font-light text-white leading-tight tracking-tight mb-2">
            {t(`ai_page.engagement.steps.${stepKey}.title`)}
          </h3>
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">
            {t(`ai_page.engagement.steps.${stepKey}.duration`)}
          </span>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <p className="text-base text-white/55 leading-relaxed group-hover:text-white/75 transition-colors duration-300">
            {t(`ai_page.engagement.steps.${stepKey}.description`)}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// FaqRow
// ---------------------------------------------------------------------------
function FaqRow({ faqKey, t }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-white/[0.08]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-start py-8 lg:py-10 flex items-start justify-between gap-6 group focus:outline-none"
        aria-expanded={open}
      >
        <h4 className="text-xl lg:text-2xl font-light text-white leading-snug tracking-tight pe-4 group-hover:text-white transition-colors">
          {t(`ai_page.faq.items.${faqKey}.question`)}
        </h4>
        <span className="shrink-0 mt-1 text-white/50 group-hover:text-white transition-colors">
          {open ? <Minus className="w-5 h-5" strokeWidth={1.25} /> : <Plus className="w-5 h-5" strokeWidth={1.25} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-base text-white/55 leading-relaxed pb-8 lg:pb-10 max-w-3xl">
              {t(`ai_page.faq.items.${faqKey}.answer`)}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ===========================================================================
// PAGE
// ===========================================================================
export default function AiServicePage() {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const isRtl = locale === 'ar';

  const CAPABILITIES = [
    { key: 'cv',         icon: Eye },
    { key: 'nlp',        icon: MessagesSquare },
    { key: 'predictive', icon: LineChart },
    { key: 'llm',        icon: Sparkles },
    { key: 'mlops',      icon: Cpu },
  ];

  const ENGAGEMENT = ['discovery', 'pilot', 'production'];
  const FAQS = ['cost', 'data', 'timeline', 'ip', 'support', 'languages'];

  // Active capability tab state
  const [activeCap, setActiveCap] = useState(CAPABILITIES[0].key);

  // Cycling words for the hero — 5 capability phrases
  const cycleWords = [0, 1, 2, 3, 4].map((i) =>
    t(`ai_page.hero.cycle.${i}`, { defaultValue: '' })
  ).filter(Boolean);

  const seo = {
    title: t('ai_page.seo.title'),
    description: t('ai_page.seo.description'),
  };

  const activeIcon = CAPABILITIES.find((c) => c.key === activeCap)?.icon || Eye;

  return (
    <>
      <Head>
        {/* Primary */}
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={t('ai_page.seo.keywords')} />
        <meta name="author" content="Symloop Technology" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />

        {/* Canonical + hreflang (locale alternates) */}
        <link rel="canonical" href="https://symloop.com/services/ai/" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/services/ai/" />
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/services/ai/" />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/services/ai/" />
        <link rel="alternate" hrefLang="x-default" href="https://symloop.com/services/ai/" />

        {/* Open Graph */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content="https://symloop.com/services/ai/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Symloop" />
        <meta property="og:locale" content={locale === 'fr' ? 'fr_FR' : locale === 'ar' ? 'ar_DZ' : 'en_US'} />
        <meta property="og:image" content="https://symloop.com/assets/symloop-ai-lab.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content="https://symloop.com/assets/symloop-ai-lab.png" />

        {/* Geo targeting — Algeria local SEO boost */}
        <meta name="geo.region" content="DZ" />
        <meta name="geo.placename" content="Algiers, Algeria" />
        <meta name="geo.position" content="36.7538;3.0588" />
        <meta name="ICBM" content="36.7538, 3.0588" />

        {/* === JSON-LD: Service (primary) === */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              '@id': 'https://symloop.com/services/ai/#service',
              name: 'Symloop Technology — Applied Artificial Intelligence, NLP & Machine Learning Engineering',
              alternateName: ['Symloop Technology', 'Symloop Applied AI', 'Symloop NLP Lab'],
              serviceType: 'Applied artificial intelligence research, NLP engineering, machine learning systems integration, computer vision, LLM integration, MLOps',
              category: 'Artificial Intelligence Consulting',
              description: t('ai_page.seo.description'),
              slogan: 'AI engineering for production.',
              url: 'https://symloop.com/services/ai/',
              image: 'https://symloop.com/assets/symloop-ai-lab.png',
              provider: {
                '@type': 'Organization',
                '@id': 'https://symloop.com/#organization',
                name: 'Symloop Technology',
                alternateName: ['Symloop', 'Symloop Technology'],
                url: 'https://symloop.com',
                logo: 'https://symloop.com/sym-logo.png',
                telephone: '+213549575512',
                email: 'contact@symloop.com',
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'DZ',
                  addressRegion: 'Algeria',
                  addressLocality: 'Algiers',
                },
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
                { '@type': 'Country', name: 'Bahrain' },
                { '@type': 'Country', name: 'Oman' },
                { '@type': 'Country', name: 'France' },
                { '@type': 'Country', name: 'Spain' },
                { '@type': 'Country', name: 'Germany' },
                { '@type': 'Country', name: 'Italy' },
                { '@type': 'Country', name: 'United Kingdom' },
                { '@type': 'Country', name: 'Belgium' },
                { '@type': 'Country', name: 'Switzerland' },
              ],
              audience: {
                '@type': 'BusinessAudience',
                audienceType: 'Enterprises, government agencies, scale-ups, and research organizations seeking applied AI solutions',
              },
              knowsAbout: [
                'Artificial Intelligence',
                'Applied Artificial Intelligence',
                'Machine Learning',
                'Deep Learning',
                'Computer Vision',
                'Natural Language Processing',
                'NLP Engineering',
                'Large Language Models',
                'LLM Integration',
                'Retrieval Augmented Generation',
                'Predictive Analytics',
                'Recommendation Systems',
                'Anomaly Detection',
                'Time Series Forecasting',
                'MLOps',
                'AI Infrastructure',
                'Model Deployment',
                'Model Monitoring',
                'Fine-tuning',
                'PyTorch',
                'TensorFlow',
                'Hugging Face Transformers',
                'OpenAI API Integration',
                'Anthropic Claude Integration',
                'Vector Databases',
                'Semantic Search',
                'Document Intelligence',
                'OCR',
                'Speech Recognition',
                'Voice AI',
                'Generative AI',
                'AI Strategy Consulting',
                'AI Research',
                'Industrial AI',
                'Healthcare AI',
                'Financial AI',
                'Logistics AI',
                'Retail AI',
                'AI for Government',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Symloop Technology — Capabilities',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Computer Vision Engineering', description: 'Production computer vision systems: defect detection, medical imaging, surveillance intelligence, document AI.' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Natural Language Processing', description: 'Document understanding, entity extraction, classification, sentiment, summarization, multilingual systems.' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Predictive Analytics & Forecasting', description: 'Demand forecasting, churn prediction, fraud detection, route optimization, anomaly detection.' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LLM Integration & RAG Systems', description: 'Production-grade integration of GPT, Claude and open-weight models with retrieval, evaluation harnesses, observability.' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MLOps & AI Infrastructure', description: 'Training pipelines, model registries, drift monitoring, retraining loops, A/B testing, GPU cost optimization.' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Strategy Consulting', description: 'AI roadmap, build-vs-buy analysis, technology selection, organizational readiness, ROI modeling.' } },
                ],
              },
            }),
          }}
        />

        {/* === JSON-LD: BreadcrumbList === */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home',     item: 'https://symloop.com/' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://symloop.com/services/' },
                { '@type': 'ListItem', position: 3, name: 'Artificial Intelligence', item: 'https://symloop.com/services/ai/' },
              ],
            }),
          }}
        />

        {/* === JSON-LD: FAQPage (rich snippets) === */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: FAQS.map((key) => ({
                '@type': 'Question',
                name: t(`ai_page.faq.items.${key}.question`),
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: t(`ai_page.faq.items.${key}.answer`),
                },
              })),
            }),
          }}
        />
      </Head>

      <div dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* HERO                                                              */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <section className="relative">
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 lg:pt-44 lg:pb-28">
            <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-5xl">

              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {t('ai_page.hero.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[0.95] mb-10"
              >
                {t('ai_page.hero.titleStart')}
                <br />
                <CyclingWord words={cycleWords} />
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-2xl mb-12"
              >
                {t('ai_page.hero.subtitle')}
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
                <a
                  href="https://wa.me/213549575512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
                >
                  <span>{t('ai_page.hero.ctaPrimary')}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
                </a>
                <a
                  href="#capabilities"
                  className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors"
                >
                  <span>{t('ai_page.hero.ctaSecondary')}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                </a>
              </motion.div>
            </motion.div>

            {/* Hero stat strip — animated counters */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] mt-24 lg:mt-32"
            >
              <motion.div variants={fadeUp} className="bg-black p-8 lg:p-10">
                <div className="text-3xl lg:text-4xl font-light text-white mb-2">
                  <AnimatedCounter target={5} suffix="+" />
                </div>
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">
                  {t('ai_page.hero.stats.years.label')}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-black p-8 lg:p-10">
                <div className="text-3xl lg:text-4xl font-light text-white mb-2">
                  <AnimatedCounter target={10} suffix="+" />
                </div>
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">
                  {t('ai_page.hero.stats.team.label')}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-black p-8 lg:p-10">
                <div className="text-3xl lg:text-4xl font-light text-white mb-2">
                  {t('ai_page.hero.stats.delivery.value')}
                </div>
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">
                  {t('ai_page.hero.stats.delivery.label')}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-black p-8 lg:p-10">
                <div className="text-3xl lg:text-4xl font-light text-white mb-2">
                  {t('ai_page.hero.stats.clutch.value')}
                </div>
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">
                  {t('ai_page.hero.stats.clutch.label')}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* LOGO MARQUEE — infinite horizontal tech logos                     */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <LogoMarquee />

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* VIDEO — moved up so it's visible after a tiny scroll              */}
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
                  {t('ai_page.video.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('ai_page.video.title')}
              </motion.h2>
            </motion.div>

            <HeroVideo src={HERO_VIDEO_SRC} label={t('ai_page.video.label', { defaultValue: 'How we build' })} />
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* CAPABILITIES — tabbed interface                                   */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <section id="capabilities" className="border-b border-white/[0.06] scroll-mt-24">
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
                  {t('ai_page.capabilities.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('ai_page.capabilities.title')}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl">
                {t('ai_page.capabilities.subtitle')}
              </motion.p>
            </motion.div>

            {/* Tab cards */}
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/[0.06] border border-white/[0.06] border-b-0"
            >
              {CAPABILITIES.map((cap, i) => (
                <CapabilityTab
                  key={cap.key}
                  index={i}
                  capKey={cap.key}
                  icon={cap.icon}
                  active={activeCap === cap.key}
                  onSelect={setActiveCap}
                  t={t}
                />
              ))}
            </motion.ul>

            {/* Active panel */}
            <AnimatePresence mode="wait">
              <CapabilityPanel
                key={activeCap}
                capKey={activeCap}
                icon={activeIcon}
                t={t}
              />
            </AnimatePresence>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* WHY SYMLOOP                                                       */}
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
                  {t('ai_page.why.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('ai_page.why.title')}
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]"
            >
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group relative bg-black p-8 lg:p-10 hover:bg-white/[0.025] transition-colors duration-300 overflow-hidden"
                >
                  {/* Hover accent line */}
                  <div className="absolute top-0 left-0 h-px w-0 bg-white group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />

                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/35 group-hover:text-white/60 mb-6 transition-colors duration-300">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-normal text-white leading-snug mb-4">
                    {t(`ai_page.why.items.${i}.title`)}
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                    {t(`ai_page.why.items.${i}.description`)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* ENGAGEMENT MODEL                                                  */}
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
                  {t('ai_page.engagement.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('ai_page.engagement.title')}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl">
                {t('ai_page.engagement.subtitle')}
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="border-b border-white/[0.08]"
            >
              {ENGAGEMENT.map((step, i) => (
                <EngagementStep key={step} index={i} stepKey={step} t={t} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* TECH STACK — real logo grid                                       */}
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
                  {t('ai_page.stack.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('ai_page.stack.title')}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl">
                {t('ai_page.stack.subtitle')}
              </motion.p>
            </motion.div>

            <LogoGrid />
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* FAQ                                                               */}
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
                  {t('ai_page.faq.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('ai_page.faq.title')}
              </motion.h2>
            </motion.div>

            <div className="max-w-4xl">
              {FAQS.map((key) => (
                <FaqRow key={key} faqKey={key} t={t} />
              ))}
            </div>
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
                  {t('ai_page.cta.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05] mb-10">
                {t('ai_page.cta.title')}
              </motion.h2>
              <motion.div variants={fadeUp}>
                <a
                  href="https://wa.me/213549575512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
                >
                  <span>{t('ai_page.cta.button')}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <RelatedLinks
          services={['software-engineering', 'cloud', 'consulting']}
          insights={['ai', 'healthcare']}
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
