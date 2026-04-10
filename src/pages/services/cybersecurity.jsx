// ============================================================================
// SYMLOOP — /services/cybersecurity/
//
// 6th distinct template. Same visual language.
// Sections:
//   1.  Threat-statement HERO + RISK-METER card right
//   2.  Logo marquee (security tools)
//   3.  Video slot
//   4.  Threats catalogue — 6 numbered threats with severity badges
//   5.  Compliance frameworks grid — 6 framework cards
//   6.  Engagement (4 phases — Audit → Pentest → Harden → Monitor)
//   7.  Tools split — Defensive | Offensive (2-col code block)
//   8.  Proof — single huge "0" stat (breaches in client base) + context
//   9.  FAQ — numbered with severity tag
//   10. CTA
// ============================================================================

import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RelatedLinks from '../../components/services/RelatedLinks';
import { ArrowUpRight, Play, Volume2, VolumeX, Shield } from 'lucide-react';

const HERO_VIDEO_SRC = '/videos/symloop-cybersecurity.mp4';
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
  { slug: 'owasp',          name: 'OWASP' },
  { slug: 'kalilinux',      name: 'Kali Linux' },
  { slug: 'wireshark',      name: 'Wireshark' },
  { slug: 'snyk',           name: 'Snyk' },
  { slug: 'sonarqube',      name: 'SonarQube' },
  { slug: 'cloudflare',     name: 'Cloudflare' },
  { slug: 'oneplus',        name: 'OPNsense' },
  { slug: 'letsencrypt',    name: "Let's Encrypt" },
  { slug: 'duckduckgo',     name: 'Privacy' },
  { slug: 'protonvpn',      name: 'ProtonVPN' },
  { slug: 'githubactions',  name: 'GitHub Actions' },
  { slug: 'docker',         name: 'Docker' },
  { slug: 'kubernetes',     name: 'Kubernetes' },
  { slug: 'sentry',         name: 'Sentry' },
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

// RiskMeterCard — 4 risk levels with hairline bar fills
function RiskMeterCard({ t }) {
  const LEVELS = [
    { key: 'critical', fill: 92 },
    { key: 'high',     fill: 74 },
    { key: 'medium',   fill: 48 },
    { key: 'low',      fill: 22 },
  ];
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} dir="ltr" className="border border-white/[0.08] bg-black/40 backdrop-blur-sm w-full text-left">
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <Shield className="w-3.5 h-3.5 text-white/60" strokeWidth={1.5} />
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/60">{t('cybersecurity_page.hero.meter.label')}</span>
        </div>
        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">audit.report</span>
      </div>
      <div className="p-6 lg:p-8 font-mono text-xs leading-relaxed">
        <motion.div variants={fadeUp} className="text-white text-2xl lg:text-3xl mb-1 tracking-tight">
          {t('cybersecurity_page.hero.meter.target')}
        </motion.div>
        <motion.div variants={fadeUp} className="text-white/40 text-[10px] tracking-[0.15em] uppercase mb-6">
          {t('cybersecurity_page.hero.meter.summary')}
        </motion.div>
        {LEVELS.map((lvl) => (
          <motion.div key={lvl.key} variants={fadeUp} className="mb-4 last:mb-0">
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-white/55 text-[10px] tracking-[0.15em] uppercase">{t(`cybersecurity_page.hero.meter.${lvl.key}`)}</span>
              <span className="text-white/85 tabular-nums">{lvl.fill}%</span>
            </div>
            <div className="h-px bg-white/[0.08] relative overflow-hidden">
              <motion.div initial={{ width: 0 }} whileInView={{ width: `${lvl.fill}%` }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-y-0 left-0 bg-white" />
            </div>
          </motion.div>
        ))}
        <motion.div variants={fadeUp} className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
          <span className="text-[10px] tracking-[0.15em] uppercase text-white/40">{t('cybersecurity_page.hero.meter.posture')}</span>
          <span className="text-white text-base">A+</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function CybersecurityPage() {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const isRtl = locale === 'ar';

  const THREATS     = ['ransomware', 'supply', 'identity', 'web', 'insider', 'cloud'];
  const FRAMEWORKS  = ['iso27001', 'soc2', 'gdpr', 'pcidss', 'hipaa', 'nis2'];
  const PHASES      = ['audit', 'pentest', 'harden', 'monitor'];
  const FAQS        = ['cost', 'pentest', 'compliance', 'incident', 'remediation', 'training'];

  const seo = {
    title: t('cybersecurity_page.seo.title'),
    description: t('cybersecurity_page.seo.description'),
  };

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={t('cybersecurity_page.seo.keywords')} />
        <meta name="author" content="Symloop Technology" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://symloop.com/services/cybersecurity/" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/services/cybersecurity/" />
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/services/cybersecurity/" />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/services/cybersecurity/" />
        <link rel="alternate" hrefLang="x-default" href="https://symloop.com/services/cybersecurity/" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content="https://symloop.com/services/cybersecurity/" />
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
          '@id': 'https://symloop.com/services/cybersecurity/#service',
          name: 'Symloop Cybersecurity — Audits, Penetration Testing, Compliance',
          alternateName: ['Symloop Security', 'Symloop Pentest'],
          serviceType: 'Cybersecurity audits, penetration testing, security hardening, compliance frameworks (SOC 2, ISO 27001, GDPR, PCI DSS), incident response, security operations',
          category: 'Cybersecurity & Compliance',
          description: t('cybersecurity_page.seo.description'),
          slogan: 'We assume you are already compromised. We engineer for the day after.',
          url: 'https://symloop.com/services/cybersecurity/',
          provider: {
            '@type': 'Organization', '@id': 'https://symloop.com/#organization',
            name: 'Symloop Technology', url: 'https://symloop.com', logo: 'https://symloop.com/sym-logo.png',
            telephone: '+213549575512', email: 'contact@symloop.com',
            sameAs: ['https://clutch.co/profile/symloop-technology', 'https://www.linkedin.com/company/symloop-technology'],
          },
          areaServed: [
            { '@type': 'Country', name: 'Algeria' }, { '@type': 'Country', name: 'Morocco' }, { '@type': 'Country', name: 'Tunisia' },
            { '@type': 'Country', name: 'Egypt' }, { '@type': 'Country', name: 'United Arab Emirates' }, { '@type': 'Country', name: 'Saudi Arabia' },
            { '@type': 'Country', name: 'Qatar' }, { '@type': 'Country', name: 'Kuwait' },
            { '@type': 'Country', name: 'France' }, { '@type': 'Country', name: 'Spain' }, { '@type': 'Country', name: 'Germany' },
            { '@type': 'Country', name: 'Italy' }, { '@type': 'Country', name: 'United Kingdom' },
          ],
          knowsAbout: [
            'Cybersecurity', 'Information Security', 'Penetration Testing', 'Vulnerability Assessment',
            'Security Audits', 'Threat Modeling', 'Red Team Operations', 'Blue Team Operations',
            'OWASP Top 10', 'OWASP ASVS', 'API Security', 'Web Application Security', 'Mobile Security',
            'Cloud Security', 'Kubernetes Security', 'Container Security', 'Supply Chain Security',
            'SOC 2', 'ISO 27001', 'GDPR Compliance', 'HIPAA Compliance', 'PCI DSS', 'NIS2',
            'Incident Response', 'Digital Forensics', 'Security Monitoring', 'SIEM',
            'Identity and Access Management', 'IAM', 'OAuth', 'OIDC', 'SAML', 'Zero Trust',
            'Cryptography', 'TLS', 'Secrets Management', 'HashiCorp Vault',
            'Infrastructure Hardening', 'Network Security', 'Firewall Configuration',
            'DDoS Protection', 'Cloudflare', 'WAF',
            'Cybersecurity Algeria', 'Cybersecurity MENA', 'Pentest Algeria', 'Compliance Algeria',
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog', name: 'Cybersecurity Capabilities',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Security Audit & Risk Assessment' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Penetration Testing (Web, Mobile, Cloud, API)' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Infrastructure & Code Hardening' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Continuous Security Monitoring' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compliance Frameworks (SOC 2, ISO 27001, GDPR, PCI DSS)' } },
            ],
          },
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://symloop.com/' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://symloop.com/services/' },
            { '@type': 'ListItem', position: 3, name: 'Cybersecurity', item: 'https://symloop.com/services/cybersecurity/' },
          ],
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'FAQPage',
          mainEntity: FAQS.map((key) => ({
            '@type': 'Question',
            name: t(`cybersecurity_page.faq.items.${key}.question`),
            acceptedAnswer: { '@type': 'Answer', text: t(`cybersecurity_page.faq.items.${key}.answer`) },
          })),
        }) }} />
      </Head>

      <div dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">

        {/* HERO */}
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 lg:pt-44 lg:pb-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <motion.div initial="hidden" animate="show" variants={stagger} className="lg:col-span-7">
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{t('cybersecurity_page.hero.eyebrow')}</span>
                  <span className="h-px w-12 bg-white/20" />
                </motion.div>
                <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[0.95] mb-6">
                  {t('cybersecurity_page.hero.titleLine1')}
                </motion.h1>
                <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.05] text-white/60 mb-10">
                  {t('cybersecurity_page.hero.titleLine2')}
                </motion.h2>
                <motion.p variants={fadeUp} className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-xl mb-12">
                  {t('cybersecurity_page.hero.subtitle')}
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
                  <a href="https://wa.me/213549575512" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors">
                    <span>{t('cybersecurity_page.hero.ctaPrimary')}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
                  </a>
                  <a href="#threats" className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors">
                    <span>{t('cybersecurity_page.hero.ctaSecondary')}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                  </a>
                </motion.div>
              </motion.div>
              <div className="lg:col-span-5 lg:pt-12">
                <RiskMeterCard t={t} />
              </div>
            </div>
          </div>
        </section>

        <LogoMarquee />

        {/* VIDEO */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="max-w-3xl mb-10 lg:mb-12">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{t('cybersecurity_page.video.eyebrow')}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('cybersecurity_page.video.title')}
              </motion.h2>
            </motion.div>
            <HeroVideo src={HAS_VIDEO ? HERO_VIDEO_SRC : null} label={t('cybersecurity_page.video.label')} />
          </div>
        </section>

        {/* THREATS — 6 numbered with severity badge */}
        <section id="threats" className="border-b border-white/[0.06] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="max-w-3xl mb-16 lg:mb-20">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{t('cybersecurity_page.threats.eyebrow')}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('cybersecurity_page.threats.title')}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl">
                {t('cybersecurity_page.threats.subtitle')}
              </motion.p>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="border-t border-white/[0.08]">
              {THREATS.map((key, i) => (
                <motion.div key={key} variants={fadeUp} className="group border-b border-white/[0.08] py-10 lg:py-14 hover:bg-white/[0.02] transition-colors duration-300 -mx-6 px-6 lg:-mx-10 lg:px-10">
                  <div className="grid grid-cols-12 gap-4 lg:gap-8 items-start">
                    <div className="col-span-2 lg:col-span-1">
                      <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 group-hover:text-white/60 transition-colors">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="col-span-10 lg:col-span-5">
                      <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40 mb-2">
                        SEV · {t(`cybersecurity_page.threats.items.${key}.severity`)}
                      </div>
                      <h3 className="text-2xl lg:text-3xl xl:text-4xl font-light text-white leading-tight tracking-tight">
                        {t(`cybersecurity_page.threats.items.${key}.title`)}
                      </h3>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                      <p className="text-base lg:text-lg text-white/55 leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                        {t(`cybersecurity_page.threats.items.${key}.description`)}
                      </p>
                      <div className="mt-4 font-mono text-[11px] tracking-[0.15em] uppercase text-white/40">
                        {t('cybersecurity_page.threats.howWeStop')} → {t(`cybersecurity_page.threats.items.${key}.defense`)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* COMPLIANCE FRAMEWORKS GRID */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="max-w-3xl mb-16 lg:mb-20">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{t('cybersecurity_page.compliance.eyebrow')}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('cybersecurity_page.compliance.title')}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl">
                {t('cybersecurity_page.compliance.subtitle')}
              </motion.p>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]">
              {FRAMEWORKS.map((key) => (
                <motion.div key={key} variants={fadeUp} className="group bg-black p-8 lg:p-10 hover:bg-white/[0.025] transition-colors duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-px w-0 bg-white group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/35 group-hover:text-white/60 mb-4 transition-colors duration-300">
                    {t(`cybersecurity_page.compliance.items.${key}.acronym`)}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-normal text-white leading-snug mb-4">
                    {t(`cybersecurity_page.compliance.items.${key}.fullName`)}
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                    {t(`cybersecurity_page.compliance.items.${key}.description`)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ENGAGEMENT — 4 phases */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="max-w-3xl mb-16 lg:mb-20">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{t('cybersecurity_page.engagement.eyebrow')}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('cybersecurity_page.engagement.title')}
              </motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="border-t border-white/[0.08]">
              {PHASES.map((phase, i) => (
                <motion.div key={phase} variants={fadeUp} className="border-b border-white/[0.08] py-10 lg:py-14 group hover:bg-white/[0.02] transition-colors duration-300 -mx-6 px-6 lg:-mx-10 lg:px-10">
                  <div className="grid grid-cols-12 gap-4 lg:gap-8">
                    <div className="col-span-2 lg:col-span-1">
                      <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 group-hover:text-white/60 transition-colors">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="col-span-10 lg:col-span-4">
                      <h3 className="text-2xl lg:text-3xl font-light text-white leading-tight tracking-tight mb-2">
                        {t(`cybersecurity_page.engagement.steps.${phase}.title`)}
                      </h3>
                      <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">
                        {t(`cybersecurity_page.engagement.steps.${phase}.duration`)}
                      </span>
                    </div>
                    <div className="col-span-12 lg:col-span-7">
                      <p className="text-base lg:text-lg text-white/55 leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                        {t(`cybersecurity_page.engagement.steps.${phase}.description`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PROOF — single huge "0" stat */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32 lg:py-40">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="text-center max-w-5xl mx-auto">
              <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-10">
                <span className="h-px w-12 bg-white/20" />
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{t('cybersecurity_page.proof.eyebrow')}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.div variants={fadeUp} className="text-[8rem] sm:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-light text-white leading-[0.85] tracking-tight tabular-nums mb-6">
                <AnimatedCounter target={0} />
              </motion.div>
              <motion.div variants={fadeUp} className="font-mono text-xs lg:text-sm tracking-[0.2em] uppercase text-white/40 mb-12">
                {t('cybersecurity_page.proof.mainLabel')}
              </motion.div>
              <motion.p variants={fadeUp} className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
                {t('cybersecurity_page.proof.context')}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="max-w-3xl mb-16 lg:mb-20">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{t('cybersecurity_page.faq.eyebrow')}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05]">
                {t('cybersecurity_page.faq.title')}
              </motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="border-t border-white/[0.08] max-w-5xl">
              {FAQS.map((key, i) => (
                <motion.div key={key} variants={fadeUp} className="group border-b border-white/[0.08] py-10 lg:py-14 hover:bg-white/[0.02] transition-colors duration-300 -mx-6 px-6 lg:-mx-10 lg:px-10">
                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/30 group-hover:text-white/60 transition-colors mb-3">
                    CVE.{String(i + 1).padStart(3, '0')}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-light text-white leading-snug tracking-tight mb-4">
                    {t(`cybersecurity_page.faq.items.${key}.question`)}
                  </h3>
                  <p className="text-base lg:text-lg text-white/55 leading-relaxed max-w-3xl">
                    {t(`cybersecurity_page.faq.items.${key}.answer`)}
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
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{t('cybersecurity_page.cta.eyebrow')}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.05] mb-10">
                {t('cybersecurity_page.cta.title')}
              </motion.h2>
              <motion.div variants={fadeUp}>
                <a href="https://wa.me/213549575512" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors">
                  <span>{t('cybersecurity_page.cta.button')}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <RelatedLinks
          services={['cloud', 'software-engineering', 'consulting']}
          insights={['cost']}
        />
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
