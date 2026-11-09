"use client";
import { motion } from "framer-motion";
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

const NOISE_BG = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")";

// ── Content per locale ──────────────────────────────────────────────────
// v4 — "what your money becomes": the buyer is investing in a product; the
// hero states the three outcomes they can check, not the capabilities we list.
const CONTENT = {
  fr: {
    eyebrow:  'Symloop · Alger et Sétif · depuis 2012',
    line1:    'Vous investissez dans un produit.',
    line2:    'Il doit exister, vous appartenir, et tenir.',
    dek:      "Nous construisons des applications mobiles, des plateformes web, des SaaS et des agents IA pour les entreprises en Algérie et les fondateurs installés en France. Trois choses que vous vérifiez vous-même, dès les premières semaines :",
    promises: [
      { k: 'Semaine 6', v: 'une version que vos premiers clients utilisent' },
      { k: 'Livraison 1', v: 'le code dans votre dépôt, les comptes à votre nom' },
      { k: 'Toutes les 2 semaines', v: 'une démonstration sur un environnement que vous ouvrez' },
    ],
    ctaWhatsapp: 'Parler de votre produit',
    ctaProof:    'Voir ce qu’on peut vérifier',
    ctaEmail:    'contact@symloop.com',
    clutch:      'Clutch · 2 avis vérifiés · 5,0',
    products:    'Hajz · Sadia · TrackSera en ligne',
    hq:          'Alger · Sétif',
    regions:     ['Algérie', 'France', 'MENA'],
  },
  en: {
    eyebrow:  'Symloop · Algiers and Sétif · since 2012',
    line1:    'You are investing in a product.',
    line2:    'It must exist, be yours, and hold.',
    dek:      'We build mobile apps, web platforms, SaaS and AI agents for companies in Algeria and founders settled in France. Three things you check yourself, from the first weeks:',
    promises: [
      { k: 'Week 6', v: 'a version your first customers use' },
      { k: 'Delivery 1', v: 'the code in your repository, the accounts in your name' },
      { k: 'Every 2 weeks', v: 'a demo on an environment you open yourself' },
    ],
    ctaWhatsapp: 'Talk about your product',
    ctaProof:    'See what can be verified',
    ctaEmail:    'contact@symloop.com',
    clutch:      'Clutch · 2 verified reviews · 5.0',
    products:    'Hajz · Sadia · TrackSera live',
    hq:          'Algiers · Sétif',
    regions:     ['Algeria', 'France', 'MENA'],
  },
  ar: {
    eyebrow:  'سيملوب · الجزائر العاصمة وسطيف · منذ 2012',
    line1:    'أنتم تستثمرون في منتج.',
    line2:    'يجب أن يوجد، وأن يكون لكم، وأن يصمد.',
    dek:      'نبني تطبيقات الهاتف والمنصات الإلكترونية وSaaS ووكلاء الذكاء الاصطناعي للشركات في الجزائر والمؤسسين المقيمين في فرنسا. ثلاثة أشياء تتحققون منها بأنفسكم منذ الأسابيع الأولى:',
    promises: [
      { k: 'الأسبوع 6', v: 'إصدار يستعمله زبائنكم الأوائل' },
      { k: 'التسليم 1', v: 'الكود في مستودعكم، والحسابات باسمكم' },
      { k: 'كل أسبوعين', v: 'عرض على بيئة تفتحونها بأنفسكم' },
    ],
    ctaWhatsapp: 'تحدثوا عن منتجكم',
    ctaProof:    'ما يمكن التحقق منه',
    ctaEmail:    'contact@symloop.com',
    clutch:      'Clutch · رأيان متحقَّق منهما · 5,0',
    products:    'Hajz · Sadia · TrackSera على الإنترنت',
    hq:          'الجزائر العاصمة · سطيف',
    regions:     ['الجزائر', 'فرنسا', 'الشرق الأوسط وشمال أفريقيا'],
  },
};

export default function BusinessHeroSection() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.fr;
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const arrowCls = `w-4 h-4 transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`;

  return (
    <section dir={isRTL ? 'rtl' : 'ltr'} className="relative min-h-screen bg-black overflow-hidden flex items-center pt-24 md:pt-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: NOISE_BG }} />
        <LightOrbs />
        <AuroraWaves />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black z-[1]" />

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
          <motion.div initial={false} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="max-w-5xl">
            <motion.div initial={{ y: 16 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-10">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.eyebrow}</span>
              <span className="h-px w-12 bg-white/20" />
            </motion.div>

            <motion.h1 initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-7xl xl:text-[5.5rem] font-light tracking-tight leading-[1.05]">
              <span className="text-white">{c.line1}</span>
              <br />
              <span className="text-white/45">{c.line2}</span>
            </motion.h1>

            <motion.p initial={{ y: 16 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-10 text-lg lg:text-xl text-white/55 leading-relaxed max-w-2xl font-light">
              {c.dek}
            </motion.p>

            {/* Three verifiable outcomes */}
            <motion.ul initial={{ y: 12 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.35 }} className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] max-w-4xl">
              {c.promises.map((p) => (
                <li key={p.k} className="bg-black/80 backdrop-blur-sm p-5">
                  <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 mb-2">{p.k}</div>
                  <div className="text-[15px] text-white/85 font-light leading-snug">{p.v}</div>
                </li>
              ))}
            </motion.ul>

            <motion.div initial={{ y: 12 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-10 flex flex-wrap items-center gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors">
                <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
                <span>{c.ctaWhatsapp}</span>
                <Arrow className={arrowCls} strokeWidth={1.75} />
              </a>
              <a href="#trust-title" className="group inline-flex items-center gap-3 border border-white/20 hover:border-white/60 text-white px-8 py-4 text-sm font-medium tracking-wide transition-colors">
                <span>{c.ctaProof}</span>
                <Arrow className={arrowCls} strokeWidth={1.5} />
              </a>
              <a href="mailto:contact@symloop.com" className="group inline-flex items-center gap-3 border border-white/20 hover:border-white/60 text-white px-8 py-4 text-sm font-medium tracking-wide transition-colors">
                <Mail className="w-4 h-4" strokeWidth={1.75} />
                <span>{c.ctaEmail}</span>
              </a>
            </motion.div>

            <motion.div initial={{ y: 12 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="mt-16 pt-8 border-t border-white/[0.06]">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <a href="https://clutch.co/profile/symloop-technology" target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors border-b border-white/20 hover:border-white/50 pb-0.5">{c.clutch}</a>
                <span className="w-px h-4 bg-white/10 hidden sm:block" />
                <Link href="/case-studies/" className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/45 hover:text-white transition-colors">{c.products}</Link>
                <span className="w-px h-4 bg-white/10 hidden sm:block" />
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">{c.hq}</span>
                <span className="w-px h-4 bg-white/10 hidden sm:block" />
                <div className="flex items-center font-mono text-[11px] tracking-[0.15em] uppercase text-white/30">
                  {c.regions.map((r, i) => (
                    <span key={i} className="flex items-center">{i > 0 && <span className="mx-1.5 text-white/15">·</span>}<span>{r}</span></span>
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
