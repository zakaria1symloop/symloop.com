"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useRouter } from 'next/router';
import { ArrowRight, ArrowLeft, MessageCircle } from "lucide-react";

// ============================================================================
// SYMLOOP — BusinessHeroSection (v7 — the blueprint that builds itself)
//
// Right: an engineering drawing of a GENERIC product's architecture (a typical
// B2B ordering platform: specification, mobile app, API + database, web
// portal, dinar payment, WhatsApp agent, owner dashboard, code repository)
// strokes itself on week by week. The headline beat follows each week. At
// week 12 the drawing is complete and slow data pulses travel along the
// lines, then the cycle restarts. No named project, no device mock, no
// popping cards, no counters. Reduced motion: the finished drawing, static.
// Background: orbs / aurora / noise kept at the user's request.
// Under the buttons: three commitments, no numbers (Clutch and product
// counts removed at the user's request).
// ============================================================================

const WHATSAPP_URL = 'https://wa.me/213549575512';
const GOLD = '#E9CD86';

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
    beats: [
      'Semaine 1 : le cahier des charges s’écrit avec vous, écran par écran.',
      'Semaine 3 : les premiers écrans tournent sur votre téléphone, reliés à votre base.',
      'Semaine 6 : votre premier client passe commande sur le portail.',
      'Semaine 8 : le paiement en dinars est branché et vérifié.',
      'Semaine 10 : l’agent WhatsApp répond à vos clients, en arabe.',
      'Semaine 12 : le tableau de bord est à vous, et le code est dans votre dépôt.',
    ],
    ctaWhatsapp: 'Parler de votre produit',
    ctaProof: 'Voir ce qu’on peut vérifier',
    commitments: ['Le code dans votre dépôt', 'Des écrans sur votre téléphone chaque semaine', 'Le paiement vérifié avant la mise en ligne'],
    weeks: ['S1', 'S3', 'S6', 'S8', 'S10', 'S12'],
    nodes: {
      spec: ['Cahier des charges', 'écrit avec vous'],
      app: ['Application mobile', 'vos écrans'],
      api: ['API · base de données', 'hébergée, sauvegardée'],
      portal: ['Portail de commande', 'vos clients'],
      pay: ['Paiement en dinars', 'CIB · Edahabia'],
      agent: ['Agent WhatsApp', 'répond en arabe'],
      dash: ['Tableau de bord', 'vos chiffres'],
      repo: 'Dépôt de code : livré à vous',
    },
    caption: 'Exemple type : une plateforme de commande B2B. Architecture et calendrier illustratifs.',
  },
  en: {
    intro: 'Symloop builds mobile apps, web platforms, SaaS and AI agents for companies in Algeria and founders settled in France.',
    line1: 'You are investing in a product.',
    line2: 'Watch it get built.',
    beats: [
      'Week 1: the specification is written with you, screen by screen.',
      'Week 3: the first screens run on your phone, connected to your database.',
      'Week 6: your first customer places an order on the portal.',
      'Week 8: payment in dinars is connected and verified.',
      'Week 10: the WhatsApp agent answers your customers, in Arabic.',
      'Week 12: the dashboard is yours, and the code is in your repository.',
    ],
    ctaWhatsapp: 'Talk about your product',
    ctaProof: 'See what can be verified',
    commitments: ['The code in your repository', 'Screens on your phone every week', 'Payment verified before go-live'],
    weeks: ['W1', 'W3', 'W6', 'W8', 'W10', 'W12'],
    nodes: {
      spec: ['Specification', 'written with you'],
      app: ['Mobile app', 'your screens'],
      api: ['API · database', 'hosted, backed up'],
      portal: ['Ordering portal', 'your customers'],
      pay: ['Dinar payment', 'CIB · Edahabia'],
      agent: ['WhatsApp agent', 'answers in Arabic'],
      dash: ['Dashboard', 'your figures'],
      repo: 'Code repository: delivered to you',
    },
    caption: 'Typical example: a B2B ordering platform. Illustrative architecture and calendar.',
  },
  ar: {
    intro: 'تبني Symloop تطبيقات الهاتف والمنصات الإلكترونية وSaaS ووكلاء الذكاء الاصطناعي للشركات في الجزائر والمؤسسين المقيمين في فرنسا.',
    line1: 'أنتم تستثمرون في منتج.',
    line2: 'شاهدوه وهو يُبنى.',
    beats: [
      'الأسبوع 1: يُكتب دفتر الشروط معكم، شاشةً شاشة.',
      'الأسبوع 3: أولى الشاشات تعمل على هاتفكم، موصولة بقاعدة بياناتكم.',
      'الأسبوع 6: أول زبون لكم يمرّر طلبية على البوابة.',
      'الأسبوع 8: الدفع بالدينار موصول ومتحقَّق منه.',
      'الأسبوع 10: وكيل WhatsApp يجيب زبائنكم بالعربية.',
      'الأسبوع 12: لوحة القيادة لكم، والكود في مستودعكم.',
    ],
    ctaWhatsapp: 'تحدثوا عن منتجكم',
    ctaProof: 'ما يمكن التحقق منه',
    commitments: ['الكود في مستودعكم', 'شاشات على هاتفكم كل أسبوع', 'الدفع متحقَّق منه قبل الإطلاق'],
    weeks: ['أ1', 'أ3', 'أ6', 'أ8', 'أ10', 'أ12'],
    nodes: {
      spec: ['دفتر الشروط', 'يُكتب معكم'],
      app: ['تطبيق الهاتف', 'شاشاتكم'],
      api: ['API · قاعدة البيانات', 'مستضافة ومحفوظة'],
      portal: ['بوابة الطلبيات', 'زبائنكم'],
      pay: ['الدفع بالدينار', 'CIB · الذهبية'],
      agent: ['وكيل WhatsApp', 'يجيب بالعربية'],
      dash: ['لوحة القيادة', 'أرقامكم'],
      repo: 'مستودع الكود: مسلَّم إليكم',
    },
    caption: 'مثال نموذجي: منصة طلبيات B2B. البنية والتقويم توضيحيان.',
  },
};

// ── Timing ──────────────────────────────────────────────────────────────
const STEPS = 6;
const BEAT_MS = 2800;   // each week beat
const HOLD_MS = 6500;   // finished drawing with pulses

function useBuildStep(reduced) {
  const [step, setStep] = useState(reduced ? STEPS - 1 : 0);
  useEffect(() => {
    if (reduced) return undefined;
    const t = setTimeout(() => setStep((s) => (s + 1) % STEPS), step === STEPS - 1 ? HOLD_MS : BEAT_MS);
    return () => clearTimeout(t);
  }, [step, reduced]);
  return step;
}

// ── Blueprint geometry (viewBox 560 × 470) ──────────────────────────────
// node: id, step at which it appears, box x/y/w/h
const W = 164, H = 54;
const NODES = [
  { id: 'spec',   step: 0, x: 198, y: 14 },
  { id: 'app',    step: 1, x: 14,  y: 120 },
  { id: 'api',    step: 1, x: 198, y: 160 },
  { id: 'portal', step: 2, x: 382, y: 120 },
  { id: 'pay',    step: 3, x: 382, y: 262 },
  { id: 'agent',  step: 4, x: 14,  y: 262 },
  { id: 'dash',   step: 5, x: 198, y: 330 },
];
const C = (n) => ({ cx: n.x + W / 2, cy: n.y + H / 2 });
const N = Object.fromEntries(NODES.map((n) => [n.id, n]));
// edges as straight or elbow paths between node edges; step = when drawn
const EDGES = [
  { id: 'spec-api',   step: 1, d: `M ${C(N.spec).cx} ${N.spec.y + H} L ${C(N.api).cx} ${N.api.y}` },
  { id: 'app-api',    step: 1, d: `M ${N.app.x + W} ${C(N.app).cy} L ${N.api.x - 20} ${C(N.app).cy} L ${N.api.x - 20} ${C(N.api).cy} L ${N.api.x} ${C(N.api).cy}` },
  { id: 'portal-api', step: 2, d: `M ${N.portal.x} ${C(N.portal).cy} L ${N.api.x + W + 20} ${C(N.portal).cy} L ${N.api.x + W + 20} ${C(N.api).cy} L ${N.api.x + W} ${C(N.api).cy}` },
  { id: 'pay-api',    step: 3, d: `M ${N.pay.x} ${C(N.pay).cy} L ${N.api.x + W + 20} ${C(N.pay).cy} L ${N.api.x + W + 20} ${C(N.api).cy} L ${N.api.x + W} ${C(N.api).cy}` },
  { id: 'agent-api',  step: 4, d: `M ${N.agent.x + W} ${C(N.agent).cy} L ${N.api.x - 20} ${C(N.agent).cy} L ${N.api.x - 20} ${C(N.api).cy} L ${N.api.x} ${C(N.api).cy}` },
  { id: 'api-dash',   step: 5, d: `M ${C(N.api).cx} ${N.api.y + H} L ${C(N.dash).cx} ${N.dash.y}` },
];
const REPO_Y = 418;

const drawPath = (visible, reduced, delay = 0) => reduced
  ? { initial: false, animate: { pathLength: 1, opacity: 1 } }
  : { initial: { pathLength: 0, opacity: 0 }, animate: visible ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }, transition: { pathLength: { duration: 0.9, ease: 'easeInOut', delay }, opacity: { duration: 0.2, delay } } };

function Node({ n, label, step, reduced, weekTag, isRTL, accent }) {
  const visible = step >= n.step;
  const fresh = step === n.step && !reduced;
  const stroke = accent && visible ? GOLD : 'rgba(255,255,255,0.42)';
  return (
    <g>
      <motion.rect x={n.x} y={n.y} width={W} height={H} rx={2} fill="rgba(0,0,0,0.55)" stroke={stroke} strokeWidth={1}
        {...drawPath(visible, reduced)} style={{ pathLength: 1 }} />
      <motion.g initial={false} animate={{ opacity: visible ? 1 : 0 }} transition={{ duration: 0.45, delay: fresh ? 0.6 : 0 }}>
        <text x={isRTL ? n.x + W - 12 : n.x + 12} y={n.y + 23} fill="#fff" fontSize="12.5" fontWeight="500" textAnchor={isRTL ? 'end' : 'start'} direction={isRTL ? 'rtl' : 'ltr'}>{label[0]}</text>
        <text x={isRTL ? n.x + W - 12 : n.x + 12} y={n.y + 40} fill="rgba(255,255,255,0.5)" fontSize="10.5" textAnchor={isRTL ? 'end' : 'start'} direction={isRTL ? 'rtl' : 'ltr'}>{label[1]}</text>
        <text x={isRTL ? n.x + 10 : n.x + W - 10} y={n.y + 15} fill={fresh || accent ? GOLD : 'rgba(255,255,255,0.35)'} fontSize="9.5" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" textAnchor={isRTL ? 'start' : 'end'}>{weekTag}</text>
      </motion.g>
    </g>
  );
}

function Blueprint({ c, step, reduced, isRTL }) {
  const done = step === STEPS - 1;
  const pulses = done && !reduced;
  return (
    <div className="mx-auto w-full max-w-[560px]" aria-hidden="true">
      <svg viewBox="0 0 560 470" className="w-full h-auto block" style={{ overflow: 'visible' }}>
        <defs>
          <pattern id="bp-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.045)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="560" height="470" fill="url(#bp-grid)" />

        {/* edges */}
        {EDGES.map((e) => (
          <motion.path key={e.id} id={`bp-${e.id}`} d={e.d} fill="none" stroke="rgba(255,255,255,0.38)" strokeWidth="1" strokeLinejoin="round"
            {...drawPath(step >= e.step, reduced, step === e.step ? 0.35 : 0)} />
        ))}

        {/* pulses along the edges once the drawing is complete */}
        {pulses && EDGES.map((e, i) => (
          <circle key={`p-${e.id}`} r="2.6" fill={GOLD} opacity="0.9">
            <animateMotion dur="2.6s" begin={`${i * 0.45}s`} repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
              <mpath href={`#bp-${e.id}`} />
            </animateMotion>
          </circle>
        ))}

        {/* nodes */}
        {NODES.map((n, i) => (
          <Node key={n.id} n={n} label={c.nodes[n.id]} step={step} reduced={reduced} isRTL={isRTL} weekTag={c.weeks[n.step]} accent={n.id === 'dash' || n.id === 'api'} />
        ))}

        {/* repository bar at week 12 */}
        <motion.g initial={false} animate={{ opacity: done || reduced ? 1 : 0 }} transition={{ duration: 0.6, delay: reduced ? 0 : 1.1 }}>
          <line x1="14" y1={REPO_Y} x2="546" y2={REPO_Y} stroke={GOLD} strokeWidth="1" />
          <circle cx={isRTL ? 540 : 20} cy={REPO_Y + 24} r="3" fill={GOLD} />
          <text x={isRTL ? 530 : 30} y={REPO_Y + 28} fill="#fff" fontSize="12.5" textAnchor={isRTL ? 'end' : 'start'} direction={isRTL ? 'rtl' : 'ltr'}>{c.nodes.repo}</text>
        </motion.g>
      </svg>

      {/* week rail */}
      <div className="mt-3 px-1">
        <div className="relative h-px bg-white/15">
          <motion.div key={step} initial={{ width: `${(step / (STEPS - 1)) * 100}%` }} animate={{ width: `${(Math.min(step + 1, STEPS - 1) / (STEPS - 1)) * 100}%` }} transition={{ duration: reduced ? 0 : (done ? 0 : BEAT_MS / 1000), ease: 'linear' }} className="absolute inset-y-0 start-0 bg-white/60" />
        </div>
        <div className="mt-2 flex justify-between text-[11px] font-mono">
          {c.weeks.map((w, i) => (
            <span key={w} className={`transition-colors duration-500 ${i === step ? 'text-white' : i < step ? 'text-white/50' : 'text-white/25'}`}>{w}</span>
          ))}
        </div>
        <p className="mt-3 text-[11px] text-white/30">{c.caption}</p>
      </div>
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

            {/* the sentence that follows the drawing */}
            <div className="mt-8 min-h-[64px] border-s border-white/25 ps-5 max-w-xl">
              <AnimatePresence mode="wait">
                <motion.p key={step} initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4 }} className="text-lg lg:text-xl text-white/80 font-light leading-relaxed">
                  {c.beats[step]}
                </motion.p>
              </AnimatePresence>
            </div>

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

            <motion.ul {...fade(0.6)} className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-2 text-[13px] text-white/60">
              {c.commitments.map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: GOLD }} />
                  <span>{t}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* blueprint */}
          <motion.div {...fade(0.2, 16)} className="lg:col-span-6">
            <Blueprint c={c} step={step} reduced={reduced} isRTL={isRTL} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
