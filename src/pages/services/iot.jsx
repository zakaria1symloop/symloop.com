// ============================================================================
// SYMLOOP — /services/iot/   (IoT & Industrial Systems)
//
// 5th distinct template, same visual language.
// Sections (different patterns from AI / SE / Mobile / Cloud):
//   1.  Spec-sheet HERO — H1 left + "device datasheet" card on the right
//   2.  Logo marquee (embedded/IoT logos)
//   3.  Video slot
//   4.  Engineering specs — 4 spec rows formatted like hardware datasheet
//   5.  Product catalog — 5 hairline rows with mono model codes
//   6.  Production line — horizontal 5-step pipeline (Design→Prototype→Make→Deploy→Operate)
//   7.  Vertical integration stack — 4-column matrix (HW · Firmware · Cloud · Apps)
//   8.  Proof — 3 big counters + deployment map list
//   9.  FAQ — numbered REF spec-style
//   10. CTA
//
// Constraints (locked):
//   • Pure black, monochrome white, hairline borders, NO gradients
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
  ArrowRight,
  Play,
  Volume2,
  VolumeX,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// HERO VIDEO CONFIG
// ---------------------------------------------------------------------------
const HERO_VIDEO_SRC = '/videos/symloop-iot-industrial.mp4';
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
// AnimatedCounter
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
// HeroVideo — same as before
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
// LogoMarquee — embedded/IoT stack
// ---------------------------------------------------------------------------
const MARQUEE_LOGOS = [
  { slug: 'arduino',          name: 'Arduino' },
  { slug: 'raspberrypi',      name: 'Raspberry Pi' },
  { slug: 'freertos',         name: 'FreeRTOS' },
  { slug: 'mqtt',             name: 'MQTT' },
  { slug: 'c',                name: 'C' },
  { slug: 'rust',             name: 'Rust' },
  { slug: 'python',           name: 'Python' },
  { slug: 'postgresql',       name: 'PostgreSQL' },
  { slug: 'grafana',          name: 'Grafana' },
  { slug: 'amazonwebservices',name: 'AWS IoT' },
  { slug: 'googlecloud',      name: 'GCP IoT' },
  { slug: 'react',            name: 'React' },
  { slug: 'flutter',          name: 'Flutter' },
  { slug: 'kubernetes',       name: 'Kubernetes' },
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
// DeviceSpecCard — hardware-datasheet style card for the hero right column
// ---------------------------------------------------------------------------
function DeviceSpecCard({ t }) {
  const SPECS = [
    { key: 'model',    valKey: 'mobile_model' },
    { key: 'mcu',      valKey: 'mobile_mcu' },
    { key: 'temp',     valKey: 'mobile_temp' },
    { key: 'power',    valKey: 'mobile_power' },
    { key: 'connect',  valKey: 'mobile_connect' },
    { key: 'uptime',   valKey: 'mobile_uptime' },
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
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/60">
          {t('iot_industrial_page.hero.spec.label')}
        </span>
        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">
          v2.4.1
        </span>
      </div>

      {/* Body */}
      <div className="p-6 lg:p-8 font-mono text-xs lg:text-sm leading-relaxed">
        <motion.div variants={fadeUp} className="text-white text-2xl lg:text-3xl mb-1 tracking-tight">
          {t('iot_industrial_page.hero.spec.modelName')}
        </motion.div>
        <motion.div variants={fadeUp} className="text-white/40 text-[10px] tracking-[0.15em] uppercase mb-6">
          {t('iot_industrial_page.hero.spec.modelTagline')}
        </motion.div>

        {SPECS.map((s) => (
          <motion.div
            key={s.key}
            variants={fadeUp}
            className="flex items-baseline justify-between py-3 border-b border-white/[0.06] last:border-b-0"
          >
            <span className="text-white/45 text-[10px] tracking-[0.15em] uppercase">
              {t(`iot_industrial_page.hero.spec.${s.key}`)}
            </span>
            <span className="text-white/85 text-right ms-4">
              {t(`iot_industrial_page.hero.spec.${s.valKey}`)}
            </span>
          </motion.div>
        ))}

        <motion.div variants={fadeUp} className="mt-6 pt-4 border-t border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-30 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span className="text-[10px] tracking-[0.15em] uppercase text-white/70">
              {t('iot_industrial_page.hero.spec.status')}
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// ProductCatalogRow — hairline row with mono model code + name + spec
// ---------------------------------------------------------------------------
function ProductCatalogRow({ index, productKey, t }) {
  const code = `SY-HW-${String(index + 1).padStart(3, '0')}`;
  return (
    <motion.div
      variants={fadeUp}
      className="group border-b border-white/[0.08] last:border-b-0 hover:bg-white/[0.02] transition-colors duration-300 -mx-6 px-6 lg:-mx-10 lg:px-10 py-10 lg:py-14"
    >
      <div className="grid grid-cols-12 gap-4 lg:gap-8 items-start">
        <div className="col-span-12 lg:col-span-2">
          <div className="font-mono text-[11px] tracking-[0.15em] text-white/30 group-hover:text-white/60 transition-colors mb-1">
            {code}
          </div>
          <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">
            {t(`iot_industrial_page.products.items.${productKey}.tag`)}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-light text-white leading-tight tracking-tight mb-3">
            {t(`iot_industrial_page.products.items.${productKey}.name`)}
          </h3>
          <p className="text-base lg:text-lg text-white/55 leading-relaxed group-hover:text-white/75 transition-colors duration-300">
            {t(`iot_industrial_page.products.items.${productKey}.description`)}
          </p>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:text-end">
          <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/35 mb-2">
            {t('iot_industrial_page.products.deployedLabel')}
          </div>
          <p className="text-base text-white/65 leading-relaxed group-hover:text-white/85 transition-colors duration-300">
            {t(`iot_industrial_page.products.items.${productKey}.deployed`)}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ===========================================================================
// PAGE
// ===========================================================================
export default function IoTIndustrialPage() {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const isRtl = locale === 'ar';

  const SPECS_ENG  = ['environment', 'power', 'uptime', 'recovery'];
  const PRODUCTS   = ['smarthome', 'industrial', 'pos', 'agriculture', 'custom'];
  const PIPELINE   = ['design', 'prototype', 'manufacture', 'deploy', 'operate'];
  const STACK_COLS = ['hardware', 'firmware', 'cloud', 'apps'];
  const FAQS       = ['cost', 'manufacturing', 'protocols', 'fleet', 'compliance', 'lifetime'];

  const seo = {
    title: t('iot_industrial_page.seo.title'),
    description: t('iot_industrial_page.seo.description'),
  };

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={t('iot_industrial_page.seo.keywords')} />
        <meta name="author" content="Symloop Technology" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        <link rel="canonical" href="https://symloop.com/services/iot/" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/services/iot/" />
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/services/iot/" />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/services/iot/" />
        <link rel="alternate" hrefLang="x-default" href="https://symloop.com/services/iot/" />

        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content="https://symloop.com/services/iot/" />
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

        {/* JSON-LD: Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              '@id': 'https://symloop.com/services/iot/#service',
              name: 'Symloop IoT & Industrial Systems — Hardware Engineering, Firmware, Connected Devices',
              alternateName: ['Symloop IoT', 'Symloop Embedded', 'Symloop Hardware Engineering'],
              serviceType: 'IoT hardware engineering, PCB design, firmware development, embedded systems, connected device manufacturing, industrial monitoring, SCADA integration',
              category: 'IoT & Embedded Systems Engineering',
              description: t('iot_industrial_page.seo.description'),
              slogan: 'Hardware engineering for production.',
              url: 'https://symloop.com/services/iot/',
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
              ],
              audience: {
                '@type': 'BusinessAudience',
                audienceType: 'Industrial groups, real estate developers, agricultural operators, retailers, and product companies needing connected hardware',
              },
              knowsAbout: [
                'IoT', 'Internet of Things',
                'Embedded Systems', 'Hardware Engineering',
                'PCB Design', 'PCB Manufacturing',
                'Firmware Development',
                'ESP32', 'STM32', 'Arduino', 'Raspberry Pi',
                'C Programming', 'C++', 'Rust',
                'FreeRTOS', 'Embedded Linux', 'Yocto',
                'MQTT', 'CoAP', 'LoRa', 'LoRaWAN', 'Sigfox', 'NB-IoT', 'LTE-M',
                'Bluetooth Low Energy', 'BLE', 'WiFi', 'Zigbee', 'Z-Wave',
                'OTA Updates', 'Over-the-air firmware',
                'Smart Home Engineering',
                'Industrial IoT',
                'SCADA Integration',
                'PLC Integration',
                'Predictive Maintenance Hardware',
                'Sensor Networks',
                'Edge Computing',
                'POS Hardware',
                'Kiosk Hardware',
                'Connected Agriculture',
                'Smart Irrigation',
                'Livestock Monitoring',
                'AWS IoT Core', 'Google Cloud IoT', 'Azure IoT Hub',
                'Time-series Databases', 'InfluxDB', 'TimescaleDB',
                'Grafana Dashboards',
                'Hardware Manufacturing Algeria',
                'IoT Hardware Algeria',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'IoT & Industrial Capabilities',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Smart Home & Smart Buildings' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Industrial Monitoring & SCADA' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'POS & Kiosk Hardware' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Connected Agriculture' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Embedded Products' } },
                ],
              },
            }),
          }}
        />

        {/* BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home',     item: 'https://symloop.com/' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://symloop.com/services/' },
                { '@type': 'ListItem', position: 3, name: 'IoT & Industrial Systems', item: 'https://symloop.com/services/iot/' },
              ],
            }),
          }}
        />

        {/* FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: FAQS.map((key) => ({
                '@type': 'Question',
                name: t(`iot_industrial_page.faq.items.${key}.question`),
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: t(`iot_industrial_page.faq.items.${key}.answer`),
                },
              })),
            }),
          }}
        />
      </Head>

      <div dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* HERO — spec-sheet bento (left text + right device card)          */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 lg:pt-44 lg:pb-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

              <motion.div
                initial="hidden"
                animate="show"
                variants={stagger}
                className="lg:col-span-7"
              >
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                    {t('iot_industrial_page.hero.eyebrow')}
                  </span>
                  <span className="h-px w-12 bg-white/20" />
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[0.95] mb-6"
                >
                  {t('iot_industrial_page.hero.titleLine1')}
                </motion.h1>

                <motion.h2
                  variants={fadeUp}
                  className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.05] text-white/60 mb-10"
                >
                  {t('iot_industrial_page.hero.titleLine2')}
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-xl mb-12"
                >
                  {t('iot_industrial_page.hero.subtitle')}
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
                  <a
                    href="https://wa.me/213549575512"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
                  >
                    <span>{t('iot_industrial_page.hero.ctaPrimary')}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
                  </a>
                  <a
                    href="#products"
                    className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors"
                  >
                    <span>{t('iot_industrial_page.hero.ctaSecondary')}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                  </a>
                </motion.div>
              </motion.div>

              <div className="lg:col-span-5 lg:pt-12">
                <DeviceSpecCard t={t} />
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
                  {t('iot_industrial_page.video.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('iot_industrial_page.video.title')}
              </motion.h2>
            </motion.div>

            <HeroVideo
              src={HAS_VIDEO ? HERO_VIDEO_SRC : null}
              label={t('iot_industrial_page.video.label')}
            />
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* ENGINEERING SPECS — datasheet rows                                */}
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
                  {t('iot_industrial_page.specs.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('iot_industrial_page.specs.title')}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl">
                {t('iot_industrial_page.specs.subtitle')}
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="border-t border-white/[0.08] max-w-5xl"
            >
              {SPECS_ENG.map((key, i) => (
                <motion.div
                  key={key}
                  variants={fadeUp}
                  className="group border-b border-white/[0.08] py-8 lg:py-10 hover:bg-white/[0.02] transition-colors duration-300 -mx-6 px-6 lg:-mx-10 lg:px-10"
                >
                  <div className="grid grid-cols-12 gap-4 lg:gap-8 items-baseline">
                    <div className="col-span-12 lg:col-span-3">
                      <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/30 group-hover:text-white/60 transition-colors mb-2">
                        {String(i + 1).padStart(2, '0')} · {t(`iot_industrial_page.specs.items.${key}.refId`)}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-light text-white leading-tight tracking-tight">
                        {t(`iot_industrial_page.specs.items.${key}.title`)}
                      </h3>
                    </div>
                    <div className="col-span-12 lg:col-span-9">
                      <div className="font-mono text-base lg:text-lg text-white/85 mb-2">
                        {t(`iot_industrial_page.specs.items.${key}.value`)}
                      </div>
                      <p className="text-sm text-white/55 leading-relaxed">
                        {t(`iot_industrial_page.specs.items.${key}.description`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* PRODUCT CATALOG — 5 rows with mono model codes                    */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <section id="products" className="border-b border-white/[0.06] scroll-mt-24">
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
                  {t('iot_industrial_page.products.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('iot_industrial_page.products.title')}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl">
                {t('iot_industrial_page.products.subtitle')}
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="border-t border-white/[0.08]"
            >
              {PRODUCTS.map((key, i) => (
                <ProductCatalogRow key={key} index={i} productKey={key} t={t} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* PRODUCTION LINE — 5 horizontal pipeline cards with arrows         */}
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
                  {t('iot_industrial_page.pipeline.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('iot_industrial_page.pipeline.title')}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl">
                {t('iot_industrial_page.pipeline.subtitle')}
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/[0.06] border border-white/[0.06]"
            >
              {PIPELINE.map((step, i) => (
                <motion.div
                  key={step}
                  variants={fadeUp}
                  className="group bg-black p-6 lg:p-8 hover:bg-white/[0.025] transition-colors duration-300 relative"
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 group-hover:text-white/60 transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {i < PIPELINE.length - 1 && (
                      <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-white/20 group-hover:text-white/50 transition-colors" strokeWidth={1.5} />
                    )}
                  </div>
                  <h3 className="text-lg lg:text-xl font-normal text-white leading-tight mb-3">
                    {t(`iot_industrial_page.pipeline.steps.${step}.title`)}
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                    {t(`iot_industrial_page.pipeline.steps.${step}.description`)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* VERTICAL INTEGRATION STACK — 4-column matrix                      */}
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
                  {t('iot_industrial_page.stack.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('iot_industrial_page.stack.title')}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl">
                {t('iot_industrial_page.stack.subtitle')}
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]"
            >
              {STACK_COLS.map((key, i) => (
                <motion.div
                  key={key}
                  variants={fadeUp}
                  className="group bg-black p-8 lg:p-10 hover:bg-white/[0.025] transition-colors duration-300"
                >
                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/35 mb-4">
                    {String(i + 1).padStart(2, '0')} · {t(`iot_industrial_page.stack.layers.${key}.label`)}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-normal text-white leading-tight mb-6">
                    {t(`iot_industrial_page.stack.layers.${key}.title`)}
                  </h3>
                  <p className="font-mono text-xs lg:text-sm text-white/65 leading-relaxed group-hover:text-white/85 transition-colors duration-300">
                    {t(`iot_industrial_page.stack.layers.${key}.tools`)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* PROOF — 3 counters + deployment list                              */}
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
                  {t('iot_industrial_page.proof.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('iot_industrial_page.proof.title')}
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] mb-16"
            >
              <motion.div variants={fadeUp} className="bg-black p-10 lg:p-14 text-center">
                <div className="text-5xl lg:text-7xl font-light text-white mb-3 tabular-nums">
                  <AnimatedCounter target={500} suffix="+" />
                </div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40">
                  {t('iot_industrial_page.proof.stats.apartments')}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-black p-10 lg:p-14 text-center">
                <div className="text-5xl lg:text-7xl font-light text-white mb-3 tabular-nums">
                  <AnimatedCounter target={1247} suffix="d" />
                </div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40">
                  {t('iot_industrial_page.proof.stats.uptime')}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-black p-10 lg:p-14 text-center">
                <div className="text-5xl lg:text-7xl font-light text-white mb-3 tabular-nums">
                  5.0
                </div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40">
                  {t('iot_industrial_page.proof.stats.clutch')}
                </div>
              </motion.div>
            </motion.div>

            {/* Deployment map list */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="border-t border-white/[0.08] pt-10"
            >
              <motion.div variants={fadeUp} className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-6">
                {t('iot_industrial_page.proof.deployedLabel')}
              </motion.div>
              <motion.p variants={fadeUp} className="text-2xl lg:text-3xl xl:text-4xl font-light text-white leading-snug tracking-tight max-w-5xl">
                {t('iot_industrial_page.proof.deployedList')}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* FAQ — numbered REF spec-style                                     */}
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
                  {t('iot_industrial_page.faq.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('iot_industrial_page.faq.title')}
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="border-t border-white/[0.08] max-w-5xl"
            >
              {FAQS.map((key, i) => (
                <motion.div
                  key={key}
                  variants={fadeUp}
                  className="group border-b border-white/[0.08] py-10 lg:py-14 hover:bg-white/[0.02] transition-colors duration-300 -mx-6 px-6 lg:-mx-10 lg:px-10"
                >
                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/30 group-hover:text-white/60 transition-colors mb-3">
                    REF.{String(i + 1).padStart(3, '0')}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-light text-white leading-snug tracking-tight mb-4">
                    {t(`iot_industrial_page.faq.items.${key}.question`)}
                  </h3>
                  <p className="text-base lg:text-lg text-white/55 leading-relaxed max-w-3xl">
                    {t(`iot_industrial_page.faq.items.${key}.answer`)}
                  </p>
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
                  {t('iot_industrial_page.cta.eyebrow')}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05] mb-10">
                {t('iot_industrial_page.cta.title')}
              </motion.h2>
              <motion.div variants={fadeUp}>
                <a
                  href="https://wa.me/213549575512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
                >
                  <span>{t('iot_industrial_page.cta.button')}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <RelatedLinks
          services={['software-engineering', 'ai', 'cloud']}
          insights={['ai']}
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
