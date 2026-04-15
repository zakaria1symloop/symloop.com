"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';
import { ArrowRight, ArrowLeft, MessageCircle, Mail } from "lucide-react";
import Link from "next/link";

// ============================================================================
// SYMLOOP — BusinessHeroSection (v3 — smart company targeting)
//
// Strategy: the hero rotates through CAPABILITIES that company buyers
// recognize as their specific need (ERP, AI, mobile, IoT, cloud) instead
// of sales outcomes (revenue, sales, clients). Each rotating word is a
// keyword that matches a real buyer intent.
//
// Visual: keeps the aurora/orb background energy the user likes, removes
// excessive effects (glow rings, sweep lines). Clean typography over
// atmospheric background.
//
// Content architecture:
//   Line 1: "Nous construisons des"
//   Line 2: [rotating: ERP sur mesure / IA appliquée / Apps mobiles / ...]
//   Line 3: "pour la production."
//   Dek:    one-line engineering firm statement
//   CTA:    WhatsApp (primary) + Services (secondary)
//   Proof:  Clutch 5.0 + disciplines + HQ
//   Geo:    Algérie · MENA · Europe · Golfe
// ============================================================================

const WHATSAPP_URL = 'https://wa.me/213549575512';

// ── Background effects (kept from original — user liked the energy) ─────
function AuroraWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <style jsx>{`
        @keyframes wave1 {
          0%, 100% { transform: translateX(-10%) rotate(-5deg); opacity: 0.4; }
          50% { transform: translateX(10%) rotate(-5deg); opacity: 0.7; }
        }
        @keyframes wave2 {
          0%, 100% { transform: translateX(10%) rotate(3deg); opacity: 0.5; }
          50% { transform: translateX(-10%) rotate(3deg); opacity: 0.8; }
        }
        .aurora-wave-1 { animation: wave1 12s ease-in-out infinite; }
        .aurora-wave-2 { animation: wave2 15s ease-in-out infinite; }
      `}</style>
      <div className="aurora-wave-1 absolute w-[200%] h-[300px]" style={{ top: '20%', left: '-50%', background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 20%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.05) 80%, transparent 100%)', filter: 'blur(30px)', willChange: 'transform, opacity' }} />
      <div className="aurora-wave-2 absolute w-[200%] h-[200px]" style={{ top: '50%', left: '-50%', background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.04) 70%, transparent 100%)', filter: 'blur(40px)', willChange: 'transform, opacity' }} />
    </div>
  );
}

function LightOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(50px, -40px) scale(1.2); opacity: 0.6; }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(-30px, 30px) scale(0.9); opacity: 0.5; }
        }
        .orb-1 { animation: float1 20s ease-in-out infinite; }
        .orb-2 { animation: float2 25s ease-in-out infinite 5s; }
      `}</style>
      <div className="orb-1 absolute rounded-full" style={{ width: 300, height: 300, left: '10%', top: '15%', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)', filter: 'blur(40px)', willChange: 'transform, opacity' }} />
      <div className="orb-2 absolute rounded-full" style={{ width: 250, height: 250, left: '75%', top: '40%', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)', filter: 'blur(40px)', willChange: 'transform, opacity' }} />
    </div>
  );
}

// ── Content per locale ──────────────────────────────────────────────────
const CONTENT = {
  fr: {
    eyebrow:   'Symloop · Ingénierie logicielle & IA · Alger',
    line1:     'Nous construisons des',
    rotating:  ['ERP sur mesure', 'systèmes IA', 'apps mobiles', 'plateformes IoT', 'infrastructures cloud', 'solutions cybersécurité', 'MVPs pour startups'],
    line3:     'pour la production.',
    dek:       "Atelier d'ingénierie basé à Alger, livrant en Algérie, en Afrique, au Moyen-Orient et en Europe. Logiciel, IA, mobile, cloud, IoT, cybersécurité — huit disciplines, des startups aux grandes entreprises.",
    ctaWhatsapp: 'WhatsApp',
    ctaServices: 'Voir nos services',
    ctaEmail:    'contact@symloop.com',
    clutch:      'Clutch 5.0 / 5.0',
    disciplines: '8 disciplines',
    hq:          'Siège Alger',
    regions:     ['Algérie', 'Afrique', 'MENA', 'Europe', 'Golfe'],
  },
  en: {
    eyebrow:   'Symloop · Software Engineering & AI · Algiers',
    line1:     'We build',
    rotating:  ['custom ERPs', 'AI systems', 'mobile apps', 'IoT platforms', 'cloud infrastructure', 'cybersecurity solutions', 'startup MVPs'],
    line3:     'for production.',
    dek:       'Engineering firm headquartered in Algiers, delivering across Algeria, Africa, the Middle East and Europe. Software, AI, mobile, cloud, IoT, cybersecurity — eight disciplines, from startups to enterprises.',
    ctaWhatsapp: 'WhatsApp',
    ctaServices: 'See our services',
    ctaEmail:    'contact@symloop.com',
    clutch:      'Clutch 5.0 / 5.0',
    disciplines: '8 disciplines',
    hq:          'Algiers HQ',
    regions:     ['Algeria', 'Africa', 'MENA', 'Europe', 'Gulf'],
  },
  ar: {
    eyebrow:   'سيملوب · هندسة البرمجيات والذكاء الاصطناعي · الجزائر العاصمة',
    line1:     'نبني',
    rotating:  ['أنظمة ERP مخصصة', 'أنظمة ذكاء اصطناعي', 'تطبيقات جوال', 'منصات IoT', 'بنى تحتية سحابية', 'حلول أمن سيبراني', 'MVPs للشركات الناشئة'],
    line3:     'للإنتاج.',
    dek:       'فريق مهندسين كبار مقره الجزائر العاصمة. برمجيات، ذكاء اصطناعي، جوال، سحابة، إنترنت الأشياء، أمن سيبراني — ثمانية تخصصات تحت سقف واحد، لعملاء في الجزائر ودولياً.',
    ctaWhatsapp: 'واتساب',
    ctaServices: 'عرض خدماتنا',
    ctaEmail:    'contact@symloop.com',
    clutch:      'Clutch 5.0 / 5.0',
    disciplines: '8 تخصصات',
    hq:          'مقر الجزائر العاصمة',
    regions:     ['الجزائر', 'أفريقيا', 'الشرق الأوسط وشمال أفريقيا', 'أوروبا', 'الخليج'],
  },
};

export default function BusinessHeroSection() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.fr;
  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWord(prev => (prev + 1) % c.rotating.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [c.rotating.length]);

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      className="relative min-h-screen bg-black overflow-hidden flex items-center pt-24 md:pt-28"
    >
      {/* Background energy — toned down from original but still atmospheric */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <LightOrbs />
        <AuroraWaves />
      </div>

      {/* Depth overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black z-[1]" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-10"
            >
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                {c.eyebrow}
              </span>
              <span className="h-px w-12 bg-white/20" />
            </motion.div>

            {/* Headline with rotating capability */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[1.05]"
            >
              <span className="text-white/60">{c.line1}</span>
              <br />
              <span className="relative inline-block min-h-[1.15em] w-full">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeWord}
                    initial={{ y: 40, opacity: 0, filter: 'blur(8px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -40, opacity: 0, filter: 'blur(8px)' }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block text-white"
                  >
                    {c.rotating[activeWord]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              <span className="text-white/40">{c.line3}</span>
            </motion.h1>

            {/* Dek */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 text-lg lg:text-xl text-white/55 leading-relaxed max-w-2xl font-light"
            >
              {c.dek}
            </motion.p>

            {/* CTA row — WhatsApp big + Services bordered */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
                <span>{c.ctaWhatsapp}</span>
                {isRTL
                  ? <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" strokeWidth={1.75} />
                  : <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
                }
              </a>

              <Link
                href="/services/"
                className="group inline-flex items-center gap-3 border border-white/20 hover:border-white/60 text-white px-8 py-4 text-sm font-medium tracking-wide transition-colors"
              >
                <span>{c.ctaServices}</span>
                {isRTL
                  ? <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" strokeWidth={1.5} />
                  : <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                }
              </Link>

              <a
                href="mailto:contact@symloop.com"
                className="group inline-flex items-center gap-3 border border-white/20 hover:border-white/60 text-white px-8 py-4 text-sm font-medium tracking-wide transition-colors"
              >
                <Mail className="w-4 h-4" strokeWidth={1.75} />
                <span>{c.ctaEmail}</span>
                {isRTL
                  ? <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" strokeWidth={1.5} />
                  : <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                }
              </a>
            </motion.div>

            {/* Proof + geo strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-16 pt-8 border-t border-white/[0.06]"
            >
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                {/* Clutch — real, linked, verifiable */}
                <a
                  href="https://clutch.co/profile/symloop-technology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors border-b border-white/20 hover:border-white/50 pb-0.5"
                >
                  {c.clutch}
                </a>

                <span className="w-px h-4 bg-white/10 hidden sm:block" />

                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">
                  {c.disciplines}
                </span>

                <span className="w-px h-4 bg-white/10 hidden sm:block" />

                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">
                  {c.hq}
                </span>

                <span className="w-px h-4 bg-white/10 hidden sm:block" />

                {/* Regions */}
                <div className="flex items-center font-mono text-[11px] tracking-[0.15em] uppercase text-white/30">
                  {c.regions.map((r, i) => (
                    <span key={i} className="flex items-center">
                      {i > 0 && <span className="mx-1.5 text-white/15">·</span>}
                      <span>{r}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
