"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useAnimate,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  stagger,
} from "framer-motion";
import { useRouter } from 'next/router';
import { ArrowRight, ArrowLeft, MessageCircle, Mail } from "lucide-react";
import Link from "next/link";

// ============================================================================
// SYMLOOP — BusinessHeroSection (v6 — SEO copy KEPT, "Africa & MENA AI map" draw)
//
// Copy: the original high-performing deep-tech / sovereign-AI SEO headline and
// dek are KEPT verbatim (the keywords rank well — see CONTENT below). Only the
// background VISUAL changed.
//
// Visual: "AI network across Africa & MENA" — an invisible hand draws the map
// of Symloop's markets live. A pen-nib (driven by getPointAtLength) rides the
// leading edge as it inks the Africa + Arabian-Peninsula coastline; the market
// cities then seat in, and an AI network wires up — fanning out from Algiers
// (the HQ hub, with a pulsing ring) — with data travelling along the links.
// Real (lon, lat) coordinates via a fixed equirectangular projection; a fixed-
// seed feTurbulence wobble + faint construction underdrawing give it the hand-
// sketched feel. Strict monochrome (white on black), masked behind the headline
// on the trailing side. Deterministic geometry (module scope, no Date/
// Math.random) → SSR markup === first client markup, so it never triggers a
// hydration mismatch. Honours prefers-reduced-motion (renders the finished map).
// ============================================================================

const WHATSAPP_URL = 'https://wa.me/213549575512';

// ── Subtle depth orbs (kept light — the neural net is the focal visual) ──
function LightOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.25; }
          50% { transform: translate(40px, -30px) scale(1.15); opacity: 0.45; }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
          50% { transform: translate(-25px, 25px) scale(0.9); opacity: 0.4; }
        }
        .orb-1 { animation: float1 22s ease-in-out infinite; }
        .orb-2 { animation: float2 27s ease-in-out infinite 5s; }
      `}</style>
      <div className="orb-1 absolute rounded-full" style={{ width: 320, height: 320, left: '8%', top: '18%', background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)', filter: 'blur(50px)', willChange: 'transform, opacity' }} />
      <div className="orb-2 absolute rounded-full" style={{ width: 260, height: 260, left: '70%', top: '45%', background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)', filter: 'blur(50px)', willChange: 'transform, opacity' }} />
    </div>
  );
}

// ── "AI network across Africa & MENA" — deterministic geometry (module scope:
// no Date, no Math.random → hydration-safe). City + coastline coordinates are
// REAL (lon, lat); a fixed equirectangular projection maps them into the
// 560×480 viewBox and every coordinate is emitted via toFixed(2), so the SSR
// markup (Node) and the first client render (V8) are byte-identical. ────────
const AF_LON_MIN = -20;   // Atlantic edge, west of Dakar
const AF_LAT_MAX = 40;    // Mediterranean edge, north
const AF_SCALE = 5.6;     // px per degree (uniform → no distortion)
const AF_OX = 50;
const AF_OY = 20;
const AF_EASE = [0.22, 1, 0.36, 1];

// equirectangular projection: (lon, lat) → [x, y] in the viewBox
const afProj = (lon, lat) => [
  AF_OX + (lon - AF_LON_MIN) * AF_SCALE,
  AF_OY + (AF_LAT_MAX - lat) * AF_SCALE,
];

// ordered [lon, lat] waypoints → an SVG polyline "d"
const afPath = (pts) =>
  pts
    .map(([lon, lat], i) => {
      const [x, y] = afProj(lon, lat);
      return `${i ? "L" : "M"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");

// Africa coastline (clockwise from Tangier) — the Horn, the Cape, the Gulf of
// Guinea and the West-African bulge are kept so the silhouette reads as Africa.
const AF_AFRICA = [
  [-5.5, 35.9], [3, 36.9], [10.2, 37.1], [11.5, 33.5], [15.5, 31.8],
  [20, 32.1], [25, 31.5], [30, 31.2], [32.3, 31.2], [34.2, 28],
  [35, 24], [37, 19], [40, 15], [43.3, 11.5], [45, 10.4],
  [51, 11.8], [49, 5], [42, -1], [40, -4], [39.3, -7],
  [40.5, -15], [35, -20], [33, -26], [27, -34], [20, -34.8],
  [15, -27], [12, -17], [13, -8.8], [9, -1], [9.5, 4],
  [3.4, 6.4], [-0.2, 5.5], [-4, 5], [-10.8, 6], [-13.5, 9.5],
  [-16.5, 13.5], [-17.5, 14.7], [-16, 18], [-15, 21.5], [-12.5, 27.5],
  [-9.6, 30.4], [-7, 33.6], [-5.5, 35.9],
];

// Arabian Peninsula (clockwise from Aqaba) — the MENA half of the map.
const AF_ARABIA = [
  [34.8, 29.5], [37, 28], [39, 21.5], [43, 13], [45, 12.8],
  [52, 15.5], [55, 17], [58.5, 23.6], [56.4, 26.3], [54, 24],
  [51.5, 25.3], [50, 27], [48, 30], [44, 30.5], [40, 31],
  [37, 31.5], [34.8, 29.5],
];

const AF_AFRICA_D = afPath(AF_AFRICA);
const AF_ARABIA_D = afPath(AF_ARABIA);

// Market cities (real lon/lat) + small map labels. Algiers = the hub (HQ).
// `anchor`/`ldy` override the auto label placement where the north coast crowds.
const AF_CITY_SRC = [
  { name: "ALGIERS",      lon: 3.06,  lat: 36.75, hub: true }, // 0
  { name: "CASABLANCA",   lon: -7.6,  lat: 33.6, ldy: 12 },    // 1
  { name: "TUNIS",        lon: 10.2,  lat: 36.8, ldy: -7 },    // 2
  { name: "TRIPOLI",      lon: 13.2,  lat: 32.9 },             // 3
  { name: "CAIRO",        lon: 31.2,  lat: 30.0 },             // 4
  { name: "DAKAR",        lon: -17.4, lat: 14.7, anchor: "end" }, // 5
  { name: "LAGOS",        lon: 3.4,   lat: 6.5, ldy: 12 },     // 6
  { name: "ABIDJAN",      lon: -4.0,  lat: 5.3, anchor: "end" }, // 7
  { name: "NAIROBI",      lon: 36.8,  lat: -1.3 },             // 8
  { name: "KHARTOUM",     lon: 32.5,  lat: 15.6 },             // 9
  { name: "ADDIS ABABA",  lon: 38.7,  lat: 9.0 },              // 10
  { name: "JOHANNESBURG", lon: 28.0,  lat: -26.2 },            // 11
  { name: "RIYADH",       lon: 46.7,  lat: 24.6 },             // 12
  { name: "DUBAI",        lon: 55.3,  lat: 25.2, anchor: "end" }, // 13
  { name: "NOUAKCHOTT",   lon: -16.0, lat: 18.1, anchor: "end" }, // 14
];
const AF_CITIES = AF_CITY_SRC.map((c) => {
  const [x, y] = afProj(c.lon, c.lat);
  const rx = +x.toFixed(2), ry = +y.toFixed(2);
  const anchor = c.anchor || (c.hub ? "middle" : rx > 410 ? "end" : "start");
  const ldx = anchor === "end" ? -6 : anchor === "middle" ? 0 : 6;
  const ldy = c.ldy != null ? c.ldy : c.hub ? -10 : 3;
  return {
    x: rx, y: ry, hub: !!c.hub, name: c.name, anchor,
    lx: +(rx + ldx).toFixed(2), ly: +(ry + ldy).toFixed(2),
  };
});

// AI network edges — hub-and-spoke from Algiers (0) + regional corridors.
const AF_EDGES = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 12],
  [4, 12], [12, 13], [4, 9], [9, 10], [10, 8], [8, 11],
  [5, 14], [5, 7], [7, 6], [1, 5],
];
// Each edge → a gently bowed arc, sampled into points so a dot can WALK the
// exact curve (not cut across it). `hub` = touches Algiers → drawn brighter.
const AF_SAMPLES = 14;
const AF_CONNS = AF_EDGES.map(([a, b]) => {
  const A = AF_CITIES[a], B = AF_CITIES[b];
  const mx = (A.x + B.x) / 2, my = (A.y + B.y) / 2;
  const dx = B.x - A.x, dy = B.y - A.y;
  const len = Math.hypot(dx, dy) || 1;
  let px = -dy / len, py = dx / len;       // perpendicular…
  if (py > 0) { px = -px; py = -py; }      // …bowed upward → clean flight-map arc
  const k = Math.min(len * 0.18, 30);
  const cx = mx + px * k, cy = my + py * k;
  const xs = [], ys = [];                   // quadratic-bezier samples for the pulse
  for (let s = 0; s <= AF_SAMPLES; s++) {
    const t = s / AF_SAMPLES, it = 1 - t;
    xs.push(+(it * it * A.x + 2 * it * t * cx + t * t * B.x).toFixed(2));
    ys.push(+(it * it * A.y + 2 * it * t * cy + t * t * B.y).toFixed(2));
  }
  return {
    d: `M${A.x.toFixed(2)},${A.y.toFixed(2)} Q${cx.toFixed(2)},${cy.toFixed(2)} ${B.x.toFixed(2)},${B.y.toFixed(2)}`,
    xs, ys, hub: a === 0 || b === 0,
  };
});

// An invisible hand drafts the map of Symloop's markets: it inks the Africa +
// Arabian-Peninsula coastline (a pen-nib, driven by getPointAtLength, rides the
// leading edge as it draws), seats the market cities, then wires up an AI
// network that fans out from Algiers (the HQ hub) and pulses with travelling
// data. A fixed-seed feTurbulence wobble + faint construction underdrawing give
// the hand-sketched feel. Deterministic geometry → hydration-safe. Honours
// prefers-reduced-motion (renders the finished map, no motion).
function AfricaAINetwork() {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true, margin: "-15%" });
  const reduce = useReducedMotion();

  // Pen-nib: a shared progress value drives getPointAtLength on the coastline
  // being inked, so the dot literally rides the line as the hand draws it.
  const nibT = useMotionValue(0);
  const nibX = useMotionValue(AF_CITIES[0].x);
  const nibY = useMotionValue(AF_CITIES[0].y);
  const nibOpacity = useMotionValue(0);
  const nibEl = useRef(null);

  useMotionValueEvent(nibT, "change", (v) => {
    const el = nibEl.current;
    if (!el || typeof el.getTotalLength !== "function") return;
    const p = el.getPointAtLength(v * el.getTotalLength());
    nibX.set(p.x);
    nibY.set(p.y);
  });

  useEffect(() => {
    if (!inView || reduce || !scope.current) return;
    let alive = true;

    // Scoped animate that no-ops if the SVG is unmounted or the selector
    // matches nothing — prevents framer-motion "No valid elements provided"
    // when React fast-unmounts/remounts (e.g. dev StrictMode).
    const run = (sel, kf, opts) => {
      if (!alive || !scope.current) return Promise.resolve();
      const els = scope.current.querySelectorAll(sel);
      if (!els.length) return Promise.resolve();
      return animate(sel, kf, opts);
    };

    // Ink a coastline while the nib rides its leading edge in lockstep.
    const inkOutline = async (selector, opts) => {
      if (!scope.current) return;
      const node = scope.current.querySelector(selector);
      if (!node) return;
      nibEl.current = node;
      nibT.set(0);
      nibOpacity.set(1);
      await Promise.all([
        animate(node, { pathLength: 1, opacity: 1 }, opts),
        animate(nibT, 1, { duration: opts.duration, ease: opts.ease }),
      ]);
    };

    (async () => {
      // 1) the hand draws the map — Africa coastline, then the Arabian peninsula
      await inkOutline("[data-af-africa]", { duration: 1.5, ease: AF_EASE });
      if (!alive) return;
      await inkOutline("[data-af-arabia]", { duration: 0.7, ease: AF_EASE });
      if (!alive) return;
      animate(nibOpacity, 0, { duration: 0.3, ease: "easeOut" }); // hand lifts

      // 2) market cities seat in (overshoot); Algiers hub + glow ignite; labels fade in
      run("[data-af-node]", { scale: [0, 1.25, 1], opacity: 1 }, { duration: 0.4, delay: stagger(0.035), ease: AF_EASE });
      run("[data-af-hub]", { scale: [0, 1.35, 1], opacity: 1 }, { duration: 0.45, ease: AF_EASE });
      run("[data-af-hubglow]", { opacity: 0.5 }, { duration: 0.6, ease: "easeOut" });
      run("[data-af-label]", { opacity: 0.5 }, { duration: 0.45, delay: stagger(0.03), ease: "easeOut" });
      run("[data-af-hublabel]", { opacity: 0.9 }, { duration: 0.45, ease: "easeOut" });

      // 3) the AI network wires up — connections fan out, staggered
      await run("[data-af-conn]", { pathLength: 1, opacity: 1 }, { duration: 0.45, delay: stagger(0.04), ease: AF_EASE });
      if (!alive) return;

      // 4) perpetual life — nodes breathe, the Algiers hub emits pulse-rings.
      //    (the data dots that walk the lines run declaratively — see JSX below)
      run("[data-af-node]", { opacity: [0.55, 1, 0.55] }, { duration: 4, repeat: Infinity, delay: stagger(0.2), ease: "easeInOut" });
      run("[data-af-hub-ring]", { scale: [1, 2.8], opacity: [0.6, 0] }, { duration: 2.6, repeat: Infinity, ease: "easeOut" });
    })();

    return () => { alive = false; };
  }, [inView, reduce, animate, scope, nibT, nibOpacity, nibX, nibY]);

  const drawn = reduce; // reduced-motion → render the finished map, no motion
  const initLine = { pathLength: drawn ? 1 : 0, opacity: drawn ? 1 : 0 };
  const HUB = AF_CITIES[0];

  return (
    <svg
      ref={scope}
      viewBox="0 0 560 480"
      className="w-full h-full"
      fill="none"
      aria-hidden="true"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        {/* fixed seed → byte-identical SSR/CSR; scale collapses under reduced-motion */}
        <filter id="af-wobble" x="-4%" y="-4%" width="108%" height="108%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale={reduce ? 0 : 1.4} xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <radialGradient id="af-hub-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* the hand-drawn map (Africa + Arabia) — wobble filter for the sketched feel */}
      <g filter="url(#af-wobble)" fill="none">
        <path d={AF_AFRICA_D} stroke="white" strokeOpacity="0.06" strokeWidth="0.6" />
        <path d={AF_ARABIA_D} stroke="white" strokeOpacity="0.06" strokeWidth="0.6" />
        <motion.path data-af-africa d={AF_AFRICA_D} stroke="white" strokeOpacity="0.85" strokeWidth="1.1" initial={initLine} />
        <motion.path data-af-arabia d={AF_ARABIA_D} stroke="white" strokeOpacity="0.7" strokeWidth="1" initial={initLine} />
      </g>

      {/* AI network links — crisp (outside the wobble); Algiers spokes brighter */}
      <g fill="none">
        {AF_CONNS.map((c, i) => (
          <motion.path
            key={"conn" + i}
            data-af-conn
            d={c.d}
            stroke="white"
            strokeOpacity={c.hub ? 0.55 : 0.3}
            strokeWidth={c.hub ? 0.9 : 0.6}
            initial={initLine}
          />
        ))}
      </g>

      {/* data dots WALKING the links — glowing core + soft halo, following the exact arc */}
      {!reduce && inView &&
        AF_CONNS.map((c, i) => {
          const t = {
            duration: 1.5 + (i % 4) * 0.2,
            repeat: Infinity,
            repeatDelay: 0.35,
            delay: 1.7 + i * 0.07,
            ease: "linear",
          };
          return (
            <g key={"pulse" + i}>
              <motion.circle
                r="4.5" fill="white"
                style={{ filter: "blur(2px)" }}
                initial={{ cx: c.xs[0], cy: c.ys[0], opacity: 0 }}
                animate={{ cx: c.xs, cy: c.ys, opacity: [0, 0.22, 0.22, 0] }}
                transition={t}
              />
              <motion.circle
                r="2" fill="white"
                initial={{ cx: c.xs[0], cy: c.ys[0], opacity: 0 }}
                animate={{ cx: c.xs, cy: c.ys, opacity: [0, 1, 1, 0] }}
                transition={t}
              />
            </g>
          );
        })}

      {/* market-city nodes (hub rendered separately, below) */}
      {AF_CITIES.map((n, i) =>
        n.hub ? null : (
          <motion.circle
            key={"node" + i}
            data-af-node
            cx={n.x} cy={n.y} r="2.6"
            fill="#000" stroke="white" strokeWidth="0.9"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
            initial={{ scale: drawn ? 1 : 0, opacity: drawn ? 0.85 : 0 }}
          />
        )
      )}

      {/* Algiers — the HQ hub: soft glow + pulsing ring + solid marker */}
      <motion.circle
        data-af-hubglow
        cx={HUB.x} cy={HUB.y} r="24"
        fill="url(#af-hub-glow)"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        initial={{ opacity: drawn ? 0.5 : 0 }}
      />
      <motion.circle
        data-af-hub-ring
        cx={HUB.x} cy={HUB.y} r="6"
        fill="none" stroke="white" strokeWidth="0.8"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        initial={{ scale: 1, opacity: drawn ? 0.5 : 0 }}
      />
      <motion.circle
        data-af-hub
        cx={HUB.x} cy={HUB.y} r="3.6"
        fill="white"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        initial={{ scale: drawn ? 1 : 0, opacity: drawn ? 1 : 0 }}
      />

      {/* small capital labels — outside the wobble filter so the type stays crisp */}
      {AF_CITIES.map((n, i) => (
        <motion.text
          key={"label" + i}
          {...(n.hub ? { "data-af-hublabel": "" } : { "data-af-label": "" })}
          x={n.lx}
          y={n.ly}
          textAnchor={n.anchor}
          fill="white"
          style={{
            fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
            fontSize: n.hub ? 9.5 : 8,
            letterSpacing: 0.6,
          }}
          initial={{ opacity: drawn ? (n.hub ? 0.9 : 0.5) : 0 }}
        >
          {n.name}
        </motion.text>
      ))}

      {/* PEN-NIB — outside the wobble filter, rides the coastline as it inks */}
      {!reduce && (
        <motion.g style={{ x: nibX, y: nibY, opacity: nibOpacity }}>
          <circle r="6" fill="white" opacity="0.18" style={{ filter: "blur(3px)" }} />
          <circle r="2.4" fill="white" />
        </motion.g>
      )}
    </svg>
  );
}

// ── Content per locale — original SEO copy KEPT (keywords perform well) ──
const CONTENT = {
  fr: {
    eyebrow:   'Symloop · Deep-Tech IA · IA Souveraine · Alger',
    line1:     'Nous construisons des',
    rotating:  ['systèmes IA souverains', 'plateformes IA on-premise', 'IA bancaire production', 'IA industrielle', 'agents IA en arabe', 'IA gouvernementale'],
    line3:     'pour la production.',
    dek:       "Société algérienne de deep-tech IA, basée à Alger depuis 2012. Nous concevons NOOR — notre plateforme d'IA souveraine — et livrons des systèmes d'IA en production pour les banques, ministères, opérateurs oil & gas et hôpitaux. Déploiement on-premise ou cloud souverain. Le code source reste chez le client.",
    ctaWhatsapp: 'WhatsApp',
    ctaServices: 'Voir nos services',
    ctaEmail:    'contact@symloop.com',
    clutch:      'Clutch 5.0 / 5.0',
    disciplines: '8 disciplines',
    hq:          'Siège Alger',
    regions:     ['Algérie', 'Afrique', 'MENA', 'Europe', 'Golfe'],
  },
  en: {
    eyebrow:   'Symloop · Deep-Tech AI · Sovereign AI · Algiers',
    line1:     'We build',
    rotating:  ['sovereign AI systems', 'on-premise AI platforms', 'production banking AI', 'industrial AI', 'Arabic AI agents', 'sovereign government AI'],
    line3:     'for production.',
    dek:       "Deep-tech AI company headquartered in Algiers, Algeria, founded 2012. We build NOOR — our sovereign AI platform — and deliver production AI systems for banks, ministries, oil & gas operators and hospitals across MENA. On-premise or sovereign cloud deployment. Source code stays with the client.",
    ctaWhatsapp: 'WhatsApp',
    ctaServices: 'See our services',
    ctaEmail:    'contact@symloop.com',
    clutch:      'Clutch 5.0 / 5.0',
    disciplines: '8 disciplines',
    hq:          'Algiers HQ',
    regions:     ['Algeria', 'Africa', 'MENA', 'Europe', 'Gulf'],
  },
  ar: {
    eyebrow:   'سيملوب · Deep-Tech للذكاء الاصطناعي · ذكاء اصطناعي سيادي · الجزائر',
    line1:     'نبني',
    rotating:  ['أنظمة ذكاء اصطناعي سيادية', 'منصات IA on-premise', 'IA مصرفية للإنتاج', 'IA صناعية', 'وكلاء ذكاء اصطناعي بالعربية', 'IA حكومية سيادية'],
    line3:     'للإنتاج.',
    dek:       'شركة جزائرية لـ Deep-Tech الذكاء الاصطناعي، مقرها الجزائر العاصمة منذ 2012. نبني NOOR — منصتنا للذكاء الاصطناعي السيادي — ونسلم أنظمة ذكاء اصطناعي إنتاجية للبنوك والوزارات ومشغلي النفط والغاز والمستشفيات في المنطقة. نشر on-premise أو سحابة سيادية. الكود المصدري يبقى ملك للعميل.',
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
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <LightOrbs />

        {/* Africa & MENA AI network — full-bleed faint background on mobile,
            side panel on desktop. Always behind the headline (this whole
            background layer sits below the z-10 content). */}
        <div
          className={`pointer-events-none absolute inset-0 flex items-start md:items-center pt-20 md:pt-0 opacity-[0.30] md:opacity-60 ${
            isRTL ? 'justify-center md:justify-start' : 'justify-center md:justify-end'
          }`}
        >
          <div
            className="h-[60%] w-[96%] md:h-[78%] md:w-[58%] md:max-w-[760px]"
            style={{
              WebkitMaskImage: isRTL
                ? 'linear-gradient(to left, transparent 0%, black 45%)'
                : 'linear-gradient(to right, transparent 0%, black 45%)',
              maskImage: isRTL
                ? 'linear-gradient(to left, transparent 0%, black 45%)'
                : 'linear-gradient(to right, transparent 0%, black 45%)',
              transform: isRTL ? 'scaleX(-1)' : 'none',
            }}
          >
            <AfricaAINetwork />
          </div>
        </div>
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

            {/* Headline with rotating outcome */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[1.05]"
            >
              <span className="text-white/55">{c.line1}</span>
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

            {/* CTA row */}
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
