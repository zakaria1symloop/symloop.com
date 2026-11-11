"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useRouter } from 'next/router';
import { ArrowRight, ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";

// ============================================================================
// SYMLOOP — BusinessHeroSection (v6 — delivery record)
//
// Left: the headline ("You are investing in a product. Watch it get built."),
// one static line, two CTAs, two proof links.
// Right: a quiet, dated delivery record for a GENERIC scenario (a typical
// B2B ordering platform, illustrative figures). No named project, no device
// mock, no popping cards, no counters, no loops: the record fades in once.
// Background: the orbs / aurora / noise the user asked to keep.
// ============================================================================

const WHATSAPP_URL = 'https://wa.me/213549575512';

// ── Background effects (kept at the user's request) ─────────────────────
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
const CONTENT = {
  fr: {
    intro: 'Symloop construit des applications mobiles, des plateformes web, des SaaS et des agents IA pour les entreprises en Algérie et les fondateurs installés en France.',
    line1: 'Vous investissez dans un produit.',
    line2: 'Regardez-le se construire.',
    lead: 'Six livraisons que vous pouvez vérifier vous-même, semaine après semaine, et le code chez vous à la fin.',
    ctaWhatsapp: 'Parler de votre produit',
    ctaProof: 'Voir ce qu’on peut vérifier',
    clutch: 'Clutch : 2 avis vérifiés, 5,0',
    products: 'Trois produits en ligne, à consulter',
    record: {
      title: 'Ce que votre investissement devient',
      sub: 'Exemple type : une plateforme de commande B2B, en douze semaines',
      weekHead: 'Semaine',
      rowHead: 'Ce qui est livré',
      rows: [
        ['1', 'Le cahier des charges est écrit avec vous, écran par écran'],
        ['3', 'Les premiers écrans tournent sur votre téléphone'],
        ['6', 'Un premier client passe commande sur la plateforme'],
        ['8', 'Le paiement en dinars est branché et vérifié'],
        ['10', 'L’agent WhatsApp répond à vos clients, en arabe'],
        ['12', 'Le code est dans votre dépôt, les chiffres sur votre écran'],
      ],
      foot: 'Calendrier et chiffres illustratifs, écrits avec vous avant le premier jour',
    },
  },
  en: {
    intro: 'Symloop builds mobile apps, web platforms, SaaS and AI agents for companies in Algeria and founders settled in France.',
    line1: 'You are investing in a product.',
    line2: 'Watch it get built.',
    lead: 'Six deliveries you can check yourself, week after week, and the code in your hands at the end.',
    ctaWhatsapp: 'Talk about your product',
    ctaProof: 'See what can be verified',
    clutch: 'Clutch: 2 verified reviews, 5.0',
    products: 'Three products live, open to inspection',
    record: {
      title: 'What your investment becomes',
      sub: 'Typical example: a B2B ordering platform, in twelve weeks',
      weekHead: 'Week',
      rowHead: 'What is delivered',
      rows: [
        ['1', 'The specification is written with you, screen by screen'],
        ['3', 'The first screens run on your phone'],
        ['6', 'A first customer places an order on the platform'],
        ['8', 'Payment in dinars is connected and verified'],
        ['10', 'The WhatsApp agent answers your customers, in Arabic'],
        ['12', 'The code is in your repository, the figures on your screen'],
      ],
      foot: 'Illustrative calendar and figures, written with you before day one',
    },
  },
  ar: {
    intro: 'تبني Symloop تطبيقات الهاتف والمنصات الإلكترونية وSaaS ووكلاء الذكاء الاصطناعي للشركات في الجزائر والمؤسسين المقيمين في فرنسا.',
    line1: 'أنتم تستثمرون في منتج.',
    line2: 'شاهدوه وهو يُبنى.',
    lead: 'ست تسليمات تتحققون منها بأنفسكم، أسبوعاً بعد أسبوع، والكود بين أيديكم في النهاية.',
    ctaWhatsapp: 'تحدثوا عن منتجكم',
    ctaProof: 'ما يمكن التحقق منه',
    clutch: 'Clutch: رأيان متحقَّق منهما، 5,0',
    products: 'ثلاثة منتجات على الإنترنت، متاحة للاطلاع',
    record: {
      title: 'ما يصير إليه استثماركم',
      sub: 'مثال نموذجي: منصة طلبيات B2B، في اثني عشر أسبوعاً',
      weekHead: 'الأسبوع',
      rowHead: 'ما يُسلَّم',
      rows: [
        ['1', 'يُكتب دفتر الشروط معكم، شاشةً شاشة'],
        ['3', 'أولى الشاشات تعمل على هاتفكم'],
        ['6', 'أول زبون يمرّر طلبية على المنصة'],
        ['8', 'الدفع بالدينار موصول ومتحقَّق منه'],
        ['10', 'وكيل WhatsApp يجيب زبائنكم بالعربية'],
        ['12', 'الكود في مستودعكم، والأرقام على شاشتكم'],
      ],
      foot: 'تقويم وأرقام توضيحية، تُكتب معكم قبل اليوم الأول',
    },
  },
};

// ── The delivery record ─────────────────────────────────────────────────
function DeliveryRecord({ r, reduced, isRTL }) {
  const rowAnim = (i) => reduced
    ? {}
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5, delay: 0.35 + i * 0.09 } };
  return (
    <div className="mx-auto w-full max-w-[560px] border border-white/15 bg-black/60 backdrop-blur-[2px]" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="px-6 pt-6 pb-5 border-b border-white/15">
        <div className="text-white text-lg sm:text-xl font-light tracking-tight">{r.title}</div>
        <div className="mt-1.5 text-[13px] text-white/50">{r.sub}</div>
      </div>
      <div className="px-6 pt-4 pb-1 flex text-[11px] uppercase tracking-[0.12em] text-white/35">
        <span className="w-20 shrink-0">{r.weekHead}</span>
        <span>{r.rowHead}</span>
      </div>
      <ul className="px-6 divide-y divide-white/[0.08]">
        {r.rows.map(([w, t], i) => (
          <motion.li key={w} {...rowAnim(i)} className="flex items-baseline py-3.5 gap-3">
            <span className="w-20 shrink-0 text-[13px] text-white/45 tabular-nums">{w}</span>
            <span className="text-[15px] text-white/90 leading-snug">{t}</span>
          </motion.li>
        ))}
      </ul>
      <div className="px-6 py-4 border-t border-white/15 text-[12px] text-white/40">{r.foot}</div>
    </div>
  );
}

export default function BusinessHeroSection() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.fr;
  const reduced = useReducedMotion();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const arrowCls = `w-4 h-4 transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`;
  const fade = (delay, y = 0) => reduced ? {} : { initial: { opacity: 0, y }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay } };

  return (
    <section dir={isRTL ? 'rtl' : 'ltr'} className="relative min-h-screen bg-black overflow-hidden flex items-center pt-20 md:pt-28 pb-10">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: NOISE_BG }} />
        <LightOrbs />
        <AuroraWaves />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black z-[1]" />

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* copy */}
          <div className="lg:col-span-6">
            <motion.p {...fade(0)} className="hidden sm:block text-[13px] text-white/45 leading-relaxed max-w-md mb-8">{c.intro}</motion.p>

            <motion.h1 {...fade(0.1, 16)} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.04]">
              <span className="text-white">{c.line1}</span>
              <br />
              <span className="text-white/45">{c.line2}</span>
            </motion.h1>

            <motion.p {...fade(0.25, 8)} className="mt-8 border-s border-white/25 ps-5 max-w-xl text-lg lg:text-xl text-white/80 font-light leading-relaxed">
              {c.lead}
            </motion.p>

            <motion.div {...fade(0.4, 12)} className="mt-10 flex flex-wrap items-center gap-4">
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

            <motion.div {...fade(0.6)} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2 text-[13px]">
              <a href="https://clutch.co/profile/symloop-technology" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors border-b border-white/20 hover:border-white/60 pb-0.5">{c.clutch}</a>
              <Link href="/case-studies/" className="text-white/60 hover:text-white transition-colors border-b border-white/20 hover:border-white/60 pb-0.5">{c.products}</Link>
            </motion.div>
          </div>

          {/* record */}
          <motion.div {...fade(0.2, 16)} className="lg:col-span-6">
            <DeliveryRecord r={c.record} reduced={reduced} isRTL={isRTL} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
