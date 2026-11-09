"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, animate } from "framer-motion";
import { useRouter } from 'next/router';
import { ArrowRight, ArrowLeft, MessageCircle, Check } from "lucide-react";
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
// v5 — "watch your product get built": the right half of the hero is a
// live stage where a product assembles itself over twelve weeks (brief →
// screens → first order → payment → WhatsApp agent → owner's dashboard and
// code in the client's repository). The headline follows each beat. The
// scenario is a typical B2B ordering portal; figures are illustrative and
// labelled as such.
const GOLD = '#E9CD86';

const CONTENT = {
  fr: {
    intro: 'Symloop construit des applications mobiles, des plateformes web, des SaaS et des agents IA pour les entreprises en Algérie et les fondateurs installés en France.',
    line1: 'Vous investissez dans un produit.',
    line2: 'Regardez-le se construire.',
    beats: [
      'Semaine 1 : le cahier des charges s’écrit avec vous, écran par écran.',
      'Semaine 3 : les premiers écrans tournent sur votre téléphone.',
      'Semaine 6 : votre premier client passe commande.',
      'Semaine 8 : le paiement en dinars est branché et vérifié.',
      'Semaine 10 : l’agent IA répond à vos clients sur WhatsApp, en arabe.',
      'Semaine 12 : le code est dans votre dépôt, les chiffres sur votre écran.',
    ],
    weeks: ['S1', 'S3', 'S6', 'S8', 'S10', 'S12'],
    ctaWhatsapp: 'Parler de votre produit',
    ctaProof: 'Voir ce qu’on peut vérifier',
    clutch: 'Clutch : 2 avis vérifiés, 5,0',
    products: 'Hajz, Sadia et TrackSera sont en ligne',
    stage: {
      spec: { title: 'Cahier des charges', lines: ['Catalogue et prix par client', 'Commande et plafond de crédit', 'Paiement CIB et Edahabia', 'Agent WhatsApp en arabe', 'Tableau de bord du gérant'] },
      app: { name: 'Portail commandes', sub: 'Grossiste alimentaire', items: [['Huile 5 L, carton de 4', '4 800 DA'], ['Semoule 25 kg', '2 150 DA'], ['Sucre 1 kg, carton de 10', '1 390 DA'], ['Lait UHT, pack de 6', '1 020 DA']], cart: 'Panier', cartValue: '24 500 DA' },
      order: { title: 'Nouvelle commande', line: 'Détaillant, Blida', amount: '24 500 DA' },
      pay: 'Paiement CIB confirmé',
      chat: { q: 'واش راه الطلبية تاعي؟', a: 'Livraison demain avant 9 h. Le bon de livraison est joint.' },
      dash: { label: 'Aujourd’hui', orders: 142, ordersLabel: 'commandes', rev: '1,24 M DA' },
      repo: 'Code livré dans votre dépôt',
      caption: 'Scénario type d’un portail de commande B2B. Chiffres illustratifs.',
    },
  },
  en: {
    intro: 'Symloop builds mobile apps, web platforms, SaaS and AI agents for companies in Algeria and founders settled in France.',
    line1: 'You are investing in a product.',
    line2: 'Watch it get built.',
    beats: [
      'Week 1: the specification is written with you, screen by screen.',
      'Week 3: the first screens run on your phone.',
      'Week 6: your first customer places an order.',
      'Week 8: payment in dinars is connected and verified.',
      'Week 10: the AI agent answers your customers on WhatsApp, in Arabic.',
      'Week 12: the code is in your repository, the figures on your screen.',
    ],
    weeks: ['W1', 'W3', 'W6', 'W8', 'W10', 'W12'],
    ctaWhatsapp: 'Talk about your product',
    ctaProof: 'See what can be verified',
    clutch: 'Clutch: 2 verified reviews, 5.0',
    products: 'Hajz, Sadia and TrackSera are live',
    stage: {
      spec: { title: 'Specification', lines: ['Catalogue and per-customer prices', 'Orders and credit limit', 'CIB and Edahabia payment', 'WhatsApp agent in Arabic', 'Owner’s dashboard'] },
      app: { name: 'Order portal', sub: 'Food wholesaler', items: [['Oil 5 L, box of 4', '4,800 DA'], ['Semolina 25 kg', '2,150 DA'], ['Sugar 1 kg, box of 10', '1,390 DA'], ['UHT milk, pack of 6', '1,020 DA']], cart: 'Cart', cartValue: '24,500 DA' },
      order: { title: 'New order', line: 'Retailer, Blida', amount: '24,500 DA' },
      pay: 'CIB payment confirmed',
      chat: { q: 'واش راه الطلبية تاعي؟', a: 'Delivery tomorrow before 9 am. Delivery note attached.' },
      dash: { label: 'Today', orders: 142, ordersLabel: 'orders', rev: '1.24 M DA' },
      repo: 'Code delivered to your repository',
      caption: 'Typical B2B ordering portal scenario. Figures are illustrative.',
    },
  },
  ar: {
    intro: 'تبني Symloop تطبيقات الهاتف والمنصات الإلكترونية وSaaS ووكلاء الذكاء الاصطناعي للشركات في الجزائر والمؤسسين المقيمين في فرنسا.',
    line1: 'أنتم تستثمرون في منتج.',
    line2: 'شاهدوه وهو يُبنى.',
    beats: [
      'الأسبوع 1: يُكتب دفتر الشروط معكم، شاشةً شاشة.',
      'الأسبوع 3: أولى الشاشات تعمل على هاتفكم.',
      'الأسبوع 6: أول زبون لكم يمرّر طلبية.',
      'الأسبوع 8: الدفع بالدينار موصول ومتحقَّق منه.',
      'الأسبوع 10: وكيل الذكاء الاصطناعي يجيب زبائنكم على WhatsApp بالعربية.',
      'الأسبوع 12: الكود في مستودعكم، والأرقام على شاشتكم.',
    ],
    weeks: ['أ1', 'أ3', 'أ6', 'أ8', 'أ10', 'أ12'],
    ctaWhatsapp: 'تحدثوا عن منتجكم',
    ctaProof: 'ما يمكن التحقق منه',
    clutch: 'Clutch: رأيان متحقَّق منهما، 5,0',
    products: 'Hajz وSadia وTrackSera على الإنترنت',
    stage: {
      spec: { title: 'دفتر الشروط', lines: ['الكتالوج والأسعار لكل زبون', 'الطلبية وسقف الائتمان', 'الدفع عبر CIB والذهبية', 'وكيل WhatsApp بالعربية', 'لوحة قيادة المسيّر'] },
      app: { name: 'بوابة الطلبيات', sub: 'تاجر جملة مواد غذائية', items: [['زيت 5 ل، كرتون 4', '4 800 دج'], ['سميد 25 كغ', '2 150 دج'], ['سكر 1 كغ، كرتون 10', '1 390 دج'], ['حليب، علبة 6', '1 020 دج']], cart: 'السلة', cartValue: '24 500 دج' },
      order: { title: 'طلبية جديدة', line: 'تاجر تجزئة، البليدة', amount: '24 500 دج' },
      pay: 'تأكّد الدفع عبر CIB',
      chat: { q: 'واش راه الطلبية تاعي؟', a: 'التوصيل غدوا قبل 9 صباحاً. وصل التسليم مرفق.' },
      dash: { label: 'اليوم', orders: 142, ordersLabel: 'طلبية', rev: '1,24 مليون دج' },
      repo: 'الكود مسلَّم في مستودعكم',
      caption: 'سيناريو نموذجي لبوابة طلبيات B2B. الأرقام توضيحية.',
    },
  },
};

const BEAT_MS = 2600;
const HOLD_MS = 3800;
const STEPS = 6;

function useBuildStep(reduced) {
  const [step, setStep] = useState(reduced ? STEPS - 1 : 0);
  useEffect(() => {
    if (reduced) return undefined;
    const t = setTimeout(() => setStep((s) => (s + 1) % STEPS), step === STEPS - 1 ? HOLD_MS : BEAT_MS);
    return () => clearTimeout(t);
  }, [step, reduced]);
  return step;
}

function Counter({ to, reduced }) {
  const [v, setV] = useState(reduced ? to : 0);
  useEffect(() => {
    if (reduced) return undefined;
    const c = animate(0, to, { duration: 1.8, ease: 'easeOut', onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [to, reduced]);
  return <>{v}</>;
}

const pop = { initial: { opacity: 0, y: 14, scale: 0.96 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, scale: 0.96, transition: { duration: 0.25 } }, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } };

// ── The build stage ─────────────────────────────────────────────────────
function BuildStage({ s, step, reduced, isRTL }) {
  return (
    <div className="relative mx-auto w-full max-w-[520px] h-[400px] sm:h-[600px]" aria-hidden="true">
     <div className="absolute left-1/2 top-0 w-[520px] h-[600px] -translate-x-1/2 origin-top scale-[0.66] sm:scale-100">
      {/* soft light behind the phone */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full" style={{ background: 'radial-gradient(closest-side, rgba(255,255,255,0.09), transparent)' }} />

      {/* phone */}
      <div className="absolute left-1/2 top-[20px] -translate-x-1/2 w-[236px] h-[480px] rounded-[2.4rem] border border-white/15 bg-[#060606] shadow-[0_30px_80px_rgba(0,0,0,0.7)] overflow-hidden">
        <div className="absolute left-1/2 top-2 -translate-x-1/2 w-20 h-5 rounded-full bg-black border border-white/10" />
        <div className="absolute inset-[6px] rounded-[2rem] overflow-hidden" style={{ background: 'linear-gradient(180deg,#121212 0%,#0b0b0b 100%)' }}>
          <AnimatePresence mode="wait">
            {step === 0 ? (
              <motion.div key="spec" {...pop} className="absolute inset-0 pt-12 px-5" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="text-white/50 text-[11px] mb-3">{s.spec.title}</div>
                <ul className="space-y-3">
                  {s.spec.lines.map((l, i) => (
                    <motion.li key={l} initial={{ opacity: 0, x: isRTL ? 10 : -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.32, duration: 0.45 }} className="flex items-start gap-2.5">
                      <span className="mt-[5px] w-3 h-3 rounded-sm border border-white/40 flex items-center justify-center shrink-0">
                        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 + i * 0.32, duration: 0.3 }} className="block w-1.5 h-1.5 bg-white" />
                      </span>
                      <span className="text-[13px] text-white/85 leading-snug">{l}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 2.1, ease: 'linear' }} className="absolute left-5 right-5 bottom-10 h-px bg-white/30 origin-left" />
              </motion.div>
            ) : (
              <motion.div key="app" {...pop} className="absolute inset-0 pt-10" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="px-4 pb-3 border-b border-white/10">
                  <div className="text-white text-[14px]">{s.app.name}</div>
                  <div className="text-white/40 text-[11px]">{s.app.sub}</div>
                </div>
                <ul className="px-4 pt-2 divide-y divide-white/[0.06]">
                  {s.app.items.map(([n, p], i) => (
                    <motion.li key={n} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.12, duration: 0.4 }} className="flex items-center justify-between py-2.5 gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="w-7 h-7 rounded-md bg-white/[0.07] shrink-0" />
                        <span className="text-[12px] text-white/80 truncate">{n}</span>
                      </div>
                      <span className="text-[12px] text-white/60 shrink-0">{p}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="absolute left-4 right-4 bottom-4 h-10 rounded-xl bg-white text-black flex items-center justify-between px-4 text-[12px]">
                  <span>{s.app.cart}</span><span className="font-medium">{s.app.cartValue}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* floating events — cumulative */}
      <AnimatePresence>
        {step >= 2 && (
          <motion.div key="order" {...pop} className="absolute top-[84px] right-0 w-[200px] rounded-xl bg-white text-black p-3 shadow-[0_20px_50px_rgba(0,0,0,0.6)]" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="flex items-center gap-2 text-[11px] text-black/55"><span className="w-1.5 h-1.5 rounded-full bg-black" />{s.order.title}</div>
            <div className="mt-1 text-[13px]">{s.order.line}</div>
            <div className="text-[18px] font-medium tracking-tight">{s.order.amount}</div>
          </motion.div>
        )}
        {step >= 3 && (
          <motion.div key="pay" {...pop} className="absolute top-[184px] right-0 w-[200px] rounded-xl border border-white/15 bg-black/80 backdrop-blur px-3 py-2.5 flex items-center gap-2.5" dir={isRTL ? 'rtl' : 'ltr'}>
            <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: GOLD }}><Check className="w-3 h-3 text-black" strokeWidth={3} /></span>
            <span className="text-[12px] text-white/90">{s.pay}</span>
          </motion.div>
        )}
        {step >= 4 && (
          <motion.div key="chat" {...pop} className="absolute top-[330px] left-0 w-[210px] space-y-1.5">
            <div className="ms-6 rounded-2xl rounded-tr-sm bg-white/10 border border-white/10 px-3 py-2 text-[12px] text-white/85" dir="rtl">{s.chat.q}</div>
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.45 }} className="me-6 rounded-2xl rounded-tl-sm bg-[#1f3b2a] border border-white/10 px-3 py-2 text-[12px] text-white/90 flex items-start gap-2" dir={isRTL ? 'rtl' : 'ltr'}>
              <MessageCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-white/70" strokeWidth={2} /><span>{s.chat.a}</span>
            </motion.div>
          </motion.div>
        )}
        {step >= 5 && (
          <motion.div key="dash" {...pop} className="absolute bottom-[20px] right-0 w-[210px] rounded-xl border border-white/15 bg-black/80 backdrop-blur p-3.5" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="text-[11px] text-white/45">{s.dash.label}</div>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-[30px] leading-none font-light tracking-tight" style={{ color: GOLD }}><Counter to={s.dash.orders} reduced={reduced} /></span>
              <span className="text-[12px] text-white/60">{s.dash.ordersLabel}</span>
            </div>
            <div className="text-[13px] text-white/85 mt-1">{s.dash.rev}</div>
            <div className="mt-2.5 pt-2.5 border-t border-white/10 flex items-center gap-2 text-[11px] text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />{s.repo}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
     </div>
    </div>
  );
}

function WeekRail({ s, step, reduced }) {
  return (
    <div className="mx-auto w-full max-w-[520px] mt-2 px-2">
      <div className="relative h-px bg-white/15">
        <motion.div key={step} initial={{ width: `${(step / (STEPS - 1)) * 100}%` }} animate={{ width: `${(Math.min(step + 1, STEPS - 1) / (STEPS - 1)) * 100}%` }} transition={{ duration: reduced ? 0 : BEAT_MS / 1000, ease: 'linear' }} className="absolute inset-y-0 start-0 bg-white/60" />
      </div>
      <div className="mt-2 flex justify-between text-[11px]">
        {s.weeks.map((w, i) => (
          <span key={w} className={`transition-colors duration-500 ${i === step ? 'text-white' : i < step ? 'text-white/50' : 'text-white/25'}`}>{w}</span>
        ))}
      </div>
      <p className="mt-3 text-[11px] text-white/30 text-center">{s.caption}</p>
    </div>
  );
}

export default function BusinessHeroSection() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.fr;
  const reduced = useReducedMotion();
  const step = useBuildStep(reduced);
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const arrowCls = `w-4 h-4 transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`;

  return (
    <section dir={isRTL ? 'rtl' : 'ltr'} className="relative min-h-screen bg-black overflow-hidden flex items-center pt-20 md:pt-28 pb-10">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: NOISE_BG }} />
        <LightOrbs />
        <AuroraWaves />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black z-[1]" />

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* copy */}
          <div className="lg:col-span-6">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="hidden sm:block text-[13px] text-white/45 leading-relaxed max-w-md mb-8">{c.intro}</motion.p>

            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.04]">
              <span className="text-white">{c.line1}</span>
              <br />
              <span className="text-white/45">{c.line2}</span>
            </motion.h1>

            {/* the sentence that follows the stage */}
            <div className="mt-8 min-h-[64px] border-s border-white/25 ps-5 max-w-xl">
              <AnimatePresence mode="wait">
                <motion.p key={step} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4 }} className="text-lg lg:text-xl text-white/80 font-light leading-relaxed">
                  {c.beats[step]}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-10 flex flex-wrap items-center gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white text-black px-7 py-4 text-sm font-medium hover:bg-white/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
                <span>{c.ctaWhatsapp}</span>
                <Arrow className={arrowCls} strokeWidth={1.75} />
              </a>
              <a href="#trust-title" className="group inline-flex items-center gap-3 border border-white/25 hover:border-white/70 text-white px-7 py-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <span>{c.ctaProof}</span>
                <Arrow className={arrowCls} strokeWidth={1.5} />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2 text-[13px]">
              <a href="https://clutch.co/profile/symloop-technology" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors border-b border-white/20 hover:border-white/60 pb-0.5">{c.clutch}</a>
              <Link href="/case-studies/" className="text-white/60 hover:text-white transition-colors border-b border-white/20 hover:border-white/60 pb-0.5">{c.products}</Link>
            </motion.div>
          </div>

          {/* stage */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-6">
            <BuildStage s={c.stage} step={step} reduced={reduced} isRTL={isRTL} />
            <WeekRail s={c} step={step} reduced={reduced} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
