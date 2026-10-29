// ============================================================================
// SYMLOOP — /services/cloud/   (Cloud & DevOps)
//
// 4th distinct template, same visual language.
// Sections (different patterns from AI tabs / SE manifesto+sticky / Mobile table):
//   1.  Bento hero — H1 left + live status panel right
//   2.  Logo marquee (cloud/devops logos)
//   3.  Video slot
//   4.  Principles — 4 short statements (different from manifesto + checklist)
//   5.  What we run — STACK LAYERS visualization (vertical layered rows)
//   6.  Ceremonies — 4-card deployment cadence (daily/weekly/monthly/quarterly)
//   7.  Proof — SINGLE HUGE centered uptime + 3 inline supporting stats + quote
//   8.  Stack — TAXONOMY by category (Compute/Networking/Data/Observability/Security)
//   9.  FAQ — 2-column GRID rows (question left, answer right)
//   10. CTA
//
// Constraints (locked):
//   • Pure black, monochrome white, hairline borders, NO gradients
//   • Premium font-light huge headlines, mono numerals
//   • Framer Motion scroll-stagger reveals
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
  CircleCheck,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// HERO VIDEO CONFIG
// ---------------------------------------------------------------------------
const HERO_VIDEO_SRC = '/videos/symloop-cloud-devops.mp4';
const HAS_VIDEO      = true;

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
// AnimatedCounter — supports floats + decimals
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
// HeroVideo — muted autoplay + sound toggle, OR placeholder
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
// LogoMarquee — cloud + devops + observability stack
// ---------------------------------------------------------------------------
const MARQUEE_LOGOS = [
  { slug: 'kubernetes',       name: 'Kubernetes' },
  { slug: 'docker',           name: 'Docker' },
  { slug: 'terraform',        name: 'Terraform' },
  { slug: 'githubactions',    name: 'GitHub Actions' },
  { slug: 'prometheus',       name: 'Prometheus' },
  { slug: 'grafana',          name: 'Grafana' },
  { slug: 'helm',             name: 'Helm' },
  { slug: 'argo',             name: 'ArgoCD' },
  { slug: 'amazonwebservices',name: 'AWS' },
  { slug: 'googlecloud',      name: 'Google Cloud' },
  { slug: 'nginx',            name: 'NGINX' },
  { slug: 'cloudflare',       name: 'Cloudflare' },
  { slug: 'sentry',           name: 'Sentry' },
  { slug: 'datadog',          name: 'Datadog' },
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
// LiveStatusPanel — small "all systems operational" panel for the hero
// Shows 5 fake-but-realistic services with green checkmarks
// (purely visual — establishes the "we run reliable infra" promise)
// ---------------------------------------------------------------------------
function LiveStatusPanel({ t }) {
  const SERVICES = ['api', 'workers', 'database', 'cache', 'observability'];

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
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-30 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/60">
            {t('cloud_devops_page.hero.statusLive')}
          </span>
        </div>
        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">
          status.symloop
        </span>
      </div>

      {/* Body — 5 services */}
      <div className="p-6 lg:p-8 font-mono text-xs lg:text-sm leading-relaxed">
        {SERVICES.map((key, i) => (
          <motion.div
            key={key}
            variants={fadeUp}
            className="flex items-center justify-between py-3 border-b border-white/[0.06] last:border-b-0"
          >
            <span className="text-white/80 lowercase">{key}</span>
            <span className="flex items-center gap-2 text-white/60">
              <CircleCheck className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-[10px] tracking-[0.15em] uppercase">
                {t('cloud_devops_page.hero.operational')}
              </span>
            </span>
          </motion.div>
        ))}

        <motion.div variants={fadeUp} className="pt-5 mt-3 border-t border-white/[0.08]">
          <div className="flex items-baseline justify-between">
            <span className="text-white/40 text-[10px] tracking-[0.15em] uppercase">
              {t('cloud_devops_page.hero.uptime')}
            </span>
            <span className="text-2xl font-light text-white tabular-nums">
              <AnimatedCounter target={99.987} decimals={3} suffix="%" />
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// StackLayer — horizontal layered row for "what we run"
// ---------------------------------------------------------------------------
function StackLayer({ index, layerKey, t }) {
  const num = String(index + 1).padStart(2, '0');
  return (
    <motion.div
      variants={fadeUp}
      className="group border-b border-white/[0.08] last:border-b-0 hover:bg-white/[0.02] transition-colors duration-300 -mx-6 px-6 lg:-mx-10 lg:px-10 py-10 lg:py-14"
    >
      <div className="grid grid-cols-12 gap-4 lg:gap-8">
        <div className="col-span-2 lg:col-span-1">
          <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 group-hover:text-white/60 transition-colors">
            L{num}
          </span>
        </div>
        <div className="col-span-10 lg:col-span-4">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-light text-white leading-tight tracking-tight mb-2">
            {t(`cloud_devops_page.run.layers.${layerKey}.name`)}
          </h3>
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">
            {t(`cloud_devops_page.run.layers.${layerKey}.shortLabel`)}
          </span>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <p className="text-base lg:text-lg text-white/55 leading-relaxed group-hover:text-white/75 transition-colors duration-300">
            {t(`cloud_devops_page.run.layers.${layerKey}.description`)}
          </p>
        </div>
        <div className="col-span-12 lg:col-span-3 lg:text-end">
          <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/35 mb-2">
            {t('cloud_devops_page.run.toolsLabel')}
          </div>
          <p className="font-mono text-xs lg:text-sm text-white/65 leading-relaxed group-hover:text-white/85 transition-colors duration-300">
            {t(`cloud_devops_page.run.layers.${layerKey}.tools`)}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ===========================================================================
// PAGE
// ===========================================================================
export default function CloudDevOpsPage() {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const isRtl = locale === 'ar';

  const PRINCIPLES = ['p1', 'p2', 'p3', 'p4'];
  const LAYERS     = ['edge', 'orchestration', 'data', 'observability', 'security'];
  const CEREMONIES = ['daily', 'weekly', 'monthly', 'quarterly'];
  const STACK_KEYS = ['compute', 'networking', 'data', 'observability', 'security'];
  const FAQS       = ['cost', 'sla', 'migration', 'oncall', 'multicloud', 'security'];

  const seo = {
    title: t('cloud_devops_page.seo.title'),
    description: t('cloud_devops_page.seo.description'),
  };

  return (
    <>
      <Head>
        {/* Primary */}
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={t('cloud_devops_page.seo.keywords')} />
        <meta name="author" content="Symloop Technology" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Canonical + hreflang */}
        <link rel="canonical" href="https://symloop.com/services/cloud/" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/services/cloud/" />
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/services/cloud/" />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/services/cloud/" />
        <link rel="alternate" hrefLang="x-default" href="https://symloop.com/services/cloud/" />

        {/* OG */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content="https://symloop.com/services/cloud/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Symloop" />
        <meta property="og:locale" content={locale === 'fr' ? 'fr_FR' : locale === 'ar' ? 'ar_DZ' : 'en_US'} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />

        {/* Geo */}
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
              '@id': 'https://symloop.com/services/cloud/#service',
              name: 'Symloop Cloud & DevOps — Production Infrastructure Engineering',
              alternateName: ['Symloop Cloud Engineering', 'Symloop DevOps', 'Symloop SRE'],
              serviceType: 'Cloud architecture, container orchestration, CI/CD pipelines, observability, infrastructure as code, site reliability engineering, FinOps',
              category: 'Cloud Engineering & DevOps',
              description: t('cloud_devops_page.seo.description'),
              slogan: 'Cloud engineering for production.',
              url: 'https://symloop.com/services/cloud/',
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
                { '@type': 'Country', name: 'United Arab Emirates' },
                { '@type': 'Country', name: 'Saudi Arabia' },
                { '@type': 'Country', name: 'France' },
                { '@type': 'Country', name: 'Spain' },
                { '@type': 'Country', name: 'Germany' },
                { '@type': 'Country', name: 'Italy' },
                { '@type': 'Country', name: 'United Kingdom' },
              ],
              audience: {
                '@type': 'BusinessAudience',
                audienceType: 'Engineering teams, scale-ups, and enterprises needing reliable production infrastructure',
              },
              knowsAbout: [
                'Cloud Engineering',
                'DevOps',
                'Site Reliability Engineering',
                'Kubernetes',
                'Docker',
                'Container Orchestration',
                'Helm',
                'ArgoCD',
                'Flux',
                'Service Mesh',
                'Istio',
                'Linkerd',
                'Terraform',
                'Pulumi',
                'Infrastructure as Code',
                'GitOps',
                'CI/CD',
                'GitHub Actions',
                'GitLab CI',
                'Jenkins',
                'Observability',
                'Prometheus',
                'Grafana',
                'Loki',
                'OpenTelemetry',
                'Sentry',
                'Datadog',
                'AWS',
                'Google Cloud',
                'Azure',
                'Vercel',
                'Cloudflare',
                'Multi-cloud Architecture',
                'Cloud Cost Optimization',
                'FinOps',
                'GPU Cost Optimization',
                'Disaster Recovery',
                'High Availability',
                'Blue-Green Deployment',
                'Canary Deployment',
                'Zero-Downtime Deployment',
                'Cloud Security',
                'Vault',
                'Consul',
                'NGINX',
                'Load Balancing',
                'CDN Configuration',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Cloud & DevOps Capabilities',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Container Orchestration & Kubernetes' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CI/CD Pipelines & GitOps' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Observability & SRE' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Infrastructure as Code' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Cost Optimization (FinOps)' } },
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
                { '@type': 'ListItem', position: 3, name: 'Cloud & DevOps', item: 'https://symloop.com/services/cloud/' },
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
                name: t(`cloud_devops_page.faq.items.${key}.question`),
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: t(`cloud_devops_page.faq.items.${key}.answer`),
                },
              })),
            }),
          }}
        />
      </Head>

      <div dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* HERO — bento layout: H1 left, live status panel right             */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 lg:pt-44 lg:pb-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

              {/* Left: text */}
              <motion.div
                initial="hidden"
                animate="show"
                variants={stagger}
                className="lg:col-span-7"
              >
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                    {t('cloud_devops_page.hero.eyebrow')}
                  </span>
                  <span className="h-px w-12 bg-white/20" />
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[0.95] mb-6"
                >
                  {t('cloud_devops_page.hero.titleLine1')}
                </motion.h1>

                <motion.h2
                  variants={fadeUp}
                  className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.05] text-white/60 mb-10"
                >
                  {t('cloud_devops_page.hero.titleLine2')}
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-xl mb-12"
                >
                  {t('cloud_devops_page.hero.subtitle')}
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
                  <a
                    href="https://wa.me/213549575512"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
                  >
                    <span>{t('cloud_devops_page.hero.ctaPrimary')}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
                  </a>
                  <a
                    href="#run"
                    className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors"
                  >
                    <span>{t('cloud_devops_page.hero.ctaSecondary')}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                  </a>
                </motion.div>
              </motion.div>

              {/* Right: live status panel */}
              <div className="lg:col-span-5 lg:pt-12">
                <LiveStatusPanel t={t} />
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
                  {t('cloud_devops_page.video.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('cloud_devops_page.video.title')}
              </motion.h2>
            </motion.div>

            <HeroVideo
              src={HAS_VIDEO ? HERO_VIDEO_SRC : null}
              label={t('cloud_devops_page.video.label')}
            />
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* PRINCIPLES — 4 hairline statements                                */}
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
                  {t('cloud_devops_page.principles.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('cloud_devops_page.principles.title')}
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="border-t border-white/[0.08]"
            >
              {PRINCIPLES.map((key, i) => (
                <motion.div
                  key={key}
                  variants={fadeUp}
                  className="border-b border-white/[0.08] py-10 lg:py-14 group hover:bg-white/[0.02] transition-colors duration-300 -mx-6 px-6 lg:-mx-10 lg:px-10"
                >
                  <div className="grid grid-cols-12 gap-4 lg:gap-8 items-baseline">
                    <div className="col-span-2 lg:col-span-1">
                      <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 group-hover:text-white/60 transition-colors">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="col-span-10 lg:col-span-11">
                      <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.1] tracking-tight">
                        {t(`cloud_devops_page.principles.items.${key}`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* WHAT WE RUN — 5 stack layers (vertical layered rows)              */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <section id="run" className="border-b border-white/[0.06] scroll-mt-24">
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
                  {t('cloud_devops_page.run.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('cloud_devops_page.run.title')}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl">
                {t('cloud_devops_page.run.subtitle')}
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="border-t border-white/[0.08]"
            >
              {LAYERS.map((key, i) => (
                <StackLayer key={key} index={i} layerKey={key} t={t} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* CEREMONIES — 4 deployment cadence cards                           */}
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
                  {t('cloud_devops_page.ceremonies.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('cloud_devops_page.ceremonies.title')}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl">
                {t('cloud_devops_page.ceremonies.subtitle')}
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]"
            >
              {CEREMONIES.map((key, i) => (
                <motion.div
                  key={key}
                  variants={fadeUp}
                  className="group bg-black p-8 lg:p-10 hover:bg-white/[0.025] transition-colors duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 h-px w-0 bg-white group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />

                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/35 group-hover:text-white/60 mb-2 transition-colors duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40 mb-6">
                    {t(`cloud_devops_page.ceremonies.items.${key}.frequency`)}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-light text-white leading-tight tracking-tight mb-4">
                    {t(`cloud_devops_page.ceremonies.items.${key}.title`)}
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                    {t(`cloud_devops_page.ceremonies.items.${key}.description`)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* PROOF — single huge centered uptime number                       */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32 lg:py-40">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="text-center max-w-5xl mx-auto"
            >
              <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-10">
                <span className="h-px w-12 bg-white/20" />
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {t('cloud_devops_page.proof.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="text-[6rem] sm:text-[9rem] lg:text-[12rem] xl:text-[14rem] font-light text-white leading-[0.85] tracking-tight tabular-nums mb-6"
              >
                <AnimatedCounter target={99.987} suffix="%" decimals={3} />
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="font-mono text-xs lg:text-sm tracking-[0.2em] uppercase text-white/40 mb-12"
              >
                {t('cloud_devops_page.proof.mainLabel')}
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-16"
              >
                {t('cloud_devops_page.proof.context')}
              </motion.p>

              {/* 3 supporting inline stats */}
              <motion.div
                variants={stagger}
                className="grid grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] max-w-4xl mx-auto mb-20"
              >
                {[
                  { v: t('cloud_devops_page.proof.support.deploys.value'),  l: t('cloud_devops_page.proof.support.deploys.label') },
                  { v: t('cloud_devops_page.proof.support.pages.value'),    l: t('cloud_devops_page.proof.support.pages.label') },
                  { v: t('cloud_devops_page.proof.support.mttr.value'),     l: t('cloud_devops_page.proof.support.mttr.label') },
                ].map((s, i) => (
                  <motion.div key={i} variants={fadeUp} className="bg-black p-6 lg:p-10">
                    <div className="text-3xl lg:text-4xl font-light text-white mb-3 tabular-nums">
                      {s.v}
                    </div>
                    <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">
                      {s.l}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Quote */}
              <motion.figure variants={fadeUp} className="max-w-3xl mx-auto">
                <blockquote className="text-2xl lg:text-3xl font-light text-white leading-[1.3] tracking-tight mb-6">
                  {t('cloud_devops_page.proof.quote')}
                </blockquote>
                <figcaption className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {t('cloud_devops_page.proof.quoteAttribution')}
                </figcaption>
              </motion.figure>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* STACK — taxonomy by category                                      */}
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
                  {t('cloud_devops_page.stack.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('cloud_devops_page.stack.title')}
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="border-t border-white/[0.08]"
            >
              {STACK_KEYS.map((key, i) => (
                <motion.div
                  key={key}
                  variants={fadeUp}
                  className="group border-b border-white/[0.08] py-8 lg:py-10 hover:bg-white/[0.02] transition-colors duration-300 -mx-6 px-6 lg:-mx-10 lg:px-10"
                >
                  <div className="grid grid-cols-12 gap-4 lg:gap-8 items-baseline">
                    <div className="col-span-12 lg:col-span-3">
                      <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/30 mb-2">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-light text-white leading-tight tracking-tight">
                        {t(`cloud_devops_page.stack.groups.${key}.category`)}
                      </h3>
                    </div>
                    <div className="col-span-12 lg:col-span-9">
                      <p className="font-mono text-sm lg:text-base text-white/65 leading-relaxed group-hover:text-white/85 transition-colors duration-300">
                        {t(`cloud_devops_page.stack.groups.${key}.tools`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* FAQ — 2-column grid (question left, answer right)                 */}
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
                  {t('cloud_devops_page.faq.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('cloud_devops_page.faq.title')}
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="border-t border-white/[0.08]"
            >
              {FAQS.map((key, i) => (
                <motion.div
                  key={key}
                  variants={fadeUp}
                  className="group border-b border-white/[0.08] py-10 lg:py-14 hover:bg-white/[0.02] transition-colors duration-300 -mx-6 px-6 lg:-mx-10 lg:px-10"
                >
                  <div className="grid grid-cols-12 gap-4 lg:gap-8">
                    <div className="col-span-12 lg:col-span-5 flex items-start gap-4">
                      <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 group-hover:text-white/60 transition-colors mt-2 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-light text-white leading-snug tracking-tight">
                        {t(`cloud_devops_page.faq.items.${key}.question`)}
                      </h3>
                    </div>
                    <div className="col-span-12 lg:col-span-7 lg:ps-8 lg:border-s lg:border-white/[0.08]">
                      <p className="text-base lg:text-lg text-white/55 leading-relaxed">
                        {t(`cloud_devops_page.faq.items.${key}.answer`)}
                      </p>
                    </div>
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
                  {t('cloud_devops_page.cta.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05] mb-10">
                {t('cloud_devops_page.cta.title')}
              </motion.h2>
              <motion.div variants={fadeUp}>
                <a
                  href="https://wa.me/213549575512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
                >
                  <span>{t('cloud_devops_page.cta.button')}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <RelatedLinks
          services={['software-engineering', 'cybersecurity', 'ai']}
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
