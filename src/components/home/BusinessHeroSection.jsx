"use client";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

// ============================================================================
// SYMLOOP — BusinessHeroSection (editorial redesign)
//
// The first thing a visitor sees. Must communicate "engineering firm that
// builds serious systems" in under 3 seconds. Not "agency that grows your
// revenue with digital".
//
// Design DNA: matches insights/services pages — hairline borders, font-mono
// eyebrow, font-light headline, no gradients, no glow, no aurora, no orbs.
// The background is clean black. The typography does the work.
//
// What was removed:
//   - AuroraWaves, LightOrbs, GlowRing, AnimatedLines, NoiseTexture
//   - Rotating word animation ("Revenus" → "Ventes" → "Clients")
//   - Fake stats (340% ROI, 200+ Clients, 98% Satisfaction)
//   - Gradient text effects
//   - Rounded-xl buttons
//   - "Augmentez vos revenus avec la technologie" sales language
//
// What was added:
//   - One bold engineering statement as H1
//   - One-line dek explaining what Symloop actually does
//   - Clutch 5.0 as the single verifiable proof point
//   - Clean mono region tags (Algérie · MENA · Europe · Golfe)
//   - WhatsApp + Contact dual CTA (prominent, editorial)
//   - Hairline border structure matching the rest of the site
// ============================================================================

const WHATSAPP_URL = 'https://wa.me/213549575512';

const CONTENT = {
  fr: {
    eyebrow:   'Symloop · Ingénierie logicielle & IA · Alger',
    headline:  'Nous construisons les systèmes sur lesquels vous pariez votre entreprise.',
    dek:       "Ingénierie logicielle sur mesure, intelligence artificielle appliquée, IoT industriel, cloud et cybersécurité — livrés par une équipe d'ingénieurs seniors basée à Alger, pour des clients en Algérie, en MENA, en Europe et dans le Golfe.",
    regions:   ['Algérie', 'MENA', 'Europe', 'Golfe'],
    clutch:    'Clutch 5.0 / 5.0 — Vérifié',
    ctaPrimary: 'Réserver un appel',
    ctaWhatsapp: 'WhatsApp',
    disciplines: '8 disciplines · 25+ ingénieurs seniors · 7 ans',
  },
  en: {
    eyebrow:   'Symloop · Software Engineering & AI · Algiers',
    headline:  'We build the systems you bet your business on.',
    dek:       'Custom software engineering, applied artificial intelligence, industrial IoT, cloud and cybersecurity — delivered by a senior engineering team headquartered in Algiers, for clients across Algeria, MENA, Europe and the Gulf.',
    regions:   ['Algeria', 'MENA', 'Europe', 'Gulf'],
    clutch:    'Clutch 5.0 / 5.0 — Verified',
    ctaPrimary: 'Book a call',
    ctaWhatsapp: 'WhatsApp',
    disciplines: '8 disciplines · 25+ senior engineers · 7 years',
  },
  ar: {
    eyebrow:   'سيملوب · هندسة البرمجيات والذكاء الاصطناعي · الجزائر العاصمة',
    headline:  'نبني الأنظمة التي تراهن عليها بأعمالك.',
    dek:       'هندسة برمجيات مخصصة، ذكاء اصطناعي تطبيقي، إنترنت أشياء صناعي، سحابة وأمن سيبراني — يسلّمها فريق مهندسين كبار مقره الجزائر العاصمة، لعملاء في الجزائر ومنطقة الشرق الأوسط وشمال أفريقيا وأوروبا والخليج.',
    regions:   ['الجزائر', 'الشرق الأوسط وشمال أفريقيا', 'أوروبا', 'الخليج'],
    clutch:    'Clutch 5.0 / 5.0 — مُوثَّق',
    ctaPrimary: 'احجز مكالمة',
    ctaWhatsapp: 'واتساب',
    disciplines: '8 تخصصات · +25 مهندس كبير · 7 سنوات',
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function BusinessHeroSection() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.fr;

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      className="relative min-h-screen bg-black flex items-center overflow-hidden"
    >
      {/* Subtle grid texture — barely visible, adds depth without gimmicks */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-20 lg:pb-28">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-5xl"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                {c.eyebrow}
              </span>
              <span className="h-px w-12 bg-white/20" />
            </motion.div>

            {/* Headline — the one sentence that does all the work */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-8xl xl:text-[8.5rem] font-light tracking-tight leading-[0.95] text-white"
            >
              {c.headline}
            </motion.h1>

            {/* Dek */}
            <motion.p
              variants={fadeUp}
              className="mt-10 text-xl lg:text-2xl text-white/60 leading-[1.5] font-light max-w-3xl"
            >
              {c.dek}
            </motion.p>

            {/* CTA row — WhatsApp prominent + Contact bordered */}
            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
              >
                <span>{c.ctaWhatsapp}</span>
                {isRTL
                  ? <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" strokeWidth={1.75} />
                  : <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
                }
              </a>

              <Link
                href="/contact/"
                className="group inline-flex items-center gap-3 border border-white/20 hover:border-white/60 text-white px-8 py-4 text-sm font-medium tracking-wide transition-colors"
              >
                <span>{c.ctaPrimary}</span>
                {isRTL
                  ? <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" strokeWidth={1.5} />
                  : <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                }
              </Link>
            </motion.div>

            {/* Meta strip — regions + Clutch + disciplines */}
            <motion.div
              variants={fadeUp}
              className="mt-16 pt-8 border-t border-white/[0.06]"
            >
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">

                {/* Regions */}
                <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">
                  {c.regions.map((r, i) => (
                    <span key={i} className="flex items-center">
                      {i > 0 && <span className="mx-2 text-white/15">·</span>}
                      <span>{r}</span>
                    </span>
                  ))}
                </div>

                {/* Separator */}
                <span className="hidden lg:block w-px h-4 bg-white/10" />

                {/* Clutch — the ONE real proof point */}
                <a
                  href="https://clutch.co/profile/symloop-technology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors border-b border-white/20 hover:border-white/50 pb-0.5"
                >
                  {c.clutch}
                </a>

                {/* Separator */}
                <span className="hidden lg:block w-px h-4 bg-white/10" />

                {/* Disciplines count */}
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">
                  {c.disciplines}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
