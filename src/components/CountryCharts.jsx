// ============================================================================
// SYMLOOP — Country-specific chart components.
//
// Each country insight gets a distinct hero visualization. All three are
// client-only mount-gated (same fix as the insurance/pharma charts) to
// avoid framer-motion height:0 SSR/CSR mismatch.
//
//   OpportunityStackChart — Libya. Horizontal stacked bar of the
//                           reconstruction-economy opportunity by vertical.
//                           Visualizes total + per-segment $ size at once.
//   MiningStackChart      — Mauritania. Three vertically-stacked sector
//                           cards (mining, gas, Nouakchott densification),
//                           each with its own animated size bar. Radically
//                           different layout from a side-by-side comparison.
//   DualModeDemandChart   — Mali. Twelve-month occupancy curve with
//                           AU-summit demand spikes drawn as filled peaks.
//                           Pure SVG path animation, no bars.
//
// Each component takes its own data shape because the underlying story is
// different per country. No abstraction over them — that's what gives the
// pages visual identity.
// ============================================================================

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

// ──────────────────────────────────────────────────────────────────────────
// LIBYA — Horizontal stacked-bar of the reconstruction-economy opportunity.
// Total at top, each vertical's slice expands underneath on scroll.
// ──────────────────────────────────────────────────────────────────────────
export function OpportunityStackChart({ label, totalLabel, totalValue, segments, note }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const sum = segments.reduce((acc, s) => acc + s.value, 0);

  if (!mounted) {
    return (
      <figure className="relative my-16 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{label}</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <div className="h-[260px] lg:h-[340px] mb-8" aria-hidden="true" />
        <figcaption className="mt-10 text-xs lg:text-sm text-white/40 leading-relaxed max-w-2xl mx-auto text-center font-light">{note}</figcaption>
      </figure>
    );
  }

  return (
    <motion.figure
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
      className="relative my-16 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16"
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{label}</span>
        <span className="h-px flex-1 bg-white/10" />
      </motion.div>

      {/* Total headline */}
      <motion.div variants={fadeUp} className="mb-10 text-center">
        <div className="font-mono text-[10px] lg:text-[11px] tracking-[0.2em] uppercase text-white/40 mb-4">{totalLabel}</div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl lg:text-7xl font-light tracking-tight text-white"
        >
          {totalValue}
        </motion.div>
      </motion.div>

      {/* Horizontal stacked bar */}
      <div className="max-w-3xl mx-auto">
        <div className="flex items-stretch h-14 lg:h-16 mb-6 border border-white/[0.08] overflow-hidden">
          {segments.map((s, i) => (
            <motion.div
              key={i}
              initial={{ flexGrow: 0, opacity: 0 }}
              whileInView={{ flexGrow: s.value / sum, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.0, delay: 0.5 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              className={`relative ${i === 0 ? 'bg-white' : i === 1 ? 'bg-white/[0.55]' : 'bg-white/[0.25]'} ${i > 0 ? 'border-l border-black/40' : ''} group flex items-center justify-center`}
              style={{ flexBasis: 0 }}
            >
              <span className={`font-mono text-[10px] lg:text-[11px] tracking-[0.15em] uppercase ${i === 0 ? 'text-black/70' : i === 1 ? 'text-black/85' : 'text-white/70'}`}>
                {s.shortLabel}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Legend with full labels and values */}
        <motion.ul variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.08]">
          {segments.map((s, i) => (
            <motion.li key={i} variants={fadeUp} className="bg-black p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className={`w-3 h-3 ${i === 0 ? 'bg-white' : i === 1 ? 'bg-white/[0.55]' : 'bg-white/[0.25] border border-white/30'}`} />
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">{s.label}</span>
              </div>
              <div className="text-2xl lg:text-3xl font-light text-white tracking-tight">{s.formattedValue}</div>
              <div className="text-xs text-white/50 mt-2 leading-relaxed">{s.sub}</div>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <motion.figcaption variants={fadeUp} className="mt-10 text-xs lg:text-sm text-white/40 leading-relaxed max-w-2xl mx-auto text-center font-light">
        {note}
      </motion.figcaption>
    </motion.figure>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// MAURITANIA — Stacked sector cards. Each layer (Mining / Gas / Capital
// densification) is a card that animates its own length bar inward as the
// reader scrolls past. Composition is vertical, not side-by-side.
// ──────────────────────────────────────────────────────────────────────────
export function SectorStackChart({ label, layers, note }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const max = Math.max(...layers.map(l => l.value));

  if (!mounted) {
    return (
      <figure className="relative my-16 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{label}</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <div className="h-[360px] lg:h-[440px] mb-8" aria-hidden="true" />
        <figcaption className="mt-10 text-xs lg:text-sm text-white/40 leading-relaxed max-w-2xl mx-auto text-center font-light">{note}</figcaption>
      </figure>
    );
  }

  return (
    <motion.figure
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
      className="relative my-16 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16"
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{label}</span>
        <span className="h-px flex-1 bg-white/10" />
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-px bg-white/[0.06]">
        {layers.map((layer, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="relative bg-black p-6 lg:p-8 overflow-hidden"
          >
            {/* Background growth bar */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(layer.value / max) * 100}%` }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.2, delay: 0.3 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-0 left-0 bg-white/[0.04] pointer-events-none"
            />

            {/* Foreground content */}
            <div className="relative flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[10px] lg:text-[11px] tracking-[0.2em] uppercase text-white/40">
                    {String(i + 1).padStart(2, '0')} · {layer.label}
                  </span>
                </div>
                <h3 className="text-xl lg:text-2xl font-light text-white leading-snug mb-2">{layer.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed max-w-xl">{layer.sub}</p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 + i * 0.2 }}
                className="text-right shrink-0"
              >
                <div className="text-2xl lg:text-3xl font-light tracking-tight text-white">{layer.formattedValue}</div>
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/35 mt-1">{layer.unit}</div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.figcaption variants={fadeUp} className="mt-10 text-xs lg:text-sm text-white/40 leading-relaxed max-w-2xl mx-auto text-center font-light">
        {note}
      </motion.figcaption>
    </motion.figure>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// MALI — Animated demand curve. Twelve-month SVG path showing baseline
// hotel occupancy with AU/ECOWAS summit spikes. Path stroke animates from
// 0 to 1 on scroll using motion.path's pathLength + strokeDashoffset trick.
// Plus a filled area under the curve that fades in.
// ──────────────────────────────────────────────────────────────────────────
export function DemandCurveChart({ label, monthsLabel, points, summits, note }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return (
      <figure className="relative my-16 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{label}</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <div className="h-[280px] lg:h-[360px] mb-8" aria-hidden="true" />
        <figcaption className="mt-10 text-xs lg:text-sm text-white/40 leading-relaxed max-w-2xl mx-auto text-center font-light">{note}</figcaption>
      </figure>
    );
  }

  // Build SVG path from points. Points are 0..100 occupancy percentages.
  // x grows linearly across 12 months; y inverts so high occupancy is up.
  const W = 800;
  const H = 280;
  const PAD = { l: 50, r: 20, t: 20, b: 40 };
  const innerW = W - PAD.l - PAD.r;
  const innerH = H - PAD.t - PAD.b;
  const xAt = (i) => PAD.l + (i / (points.length - 1)) * innerW;
  const yAt = (v) => PAD.t + (1 - v / 100) * innerH;

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${xAt(i)} ${yAt(p)}`).join(' ');
  const areaPath = linePath + ` L ${xAt(points.length - 1)} ${H - PAD.b} L ${PAD.l} ${H - PAD.b} Z`;

  return (
    <motion.figure
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
      className="relative my-16 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16"
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{label}</span>
        <span className="h-px flex-1 bg-white/10" />
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
          {/* Y-axis gridlines at 0, 25, 50, 75, 100 */}
          {[0, 25, 50, 75, 100].map((y) => (
            <g key={y}>
              <line
                x1={PAD.l}
                x2={W - PAD.r}
                y1={yAt(y)}
                y2={yAt(y)}
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="1"
                strokeDasharray="2 4"
              />
              <text
                x={PAD.l - 8}
                y={yAt(y) + 4}
                fill="rgba(255,255,255,0.35)"
                fontSize="10"
                fontFamily="ui-monospace, monospace"
                textAnchor="end"
              >
                {y}%
              </text>
            </g>
          ))}

          {/* Filled area under the curve */}
          <motion.path
            d={areaPath}
            fill="url(#mali-area-gradient)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.5, delay: 1.5 }}
          />
          <defs>
            <linearGradient id="mali-area-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.20)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>

          {/* Curve itself, drawn on scroll */}
          <motion.path
            d={linePath}
            stroke="white"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Highlight markers at summit peaks */}
          {summits.map((s, i) => (
            <motion.g
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: 2.0 + i * 0.18 }}
            >
              <circle cx={xAt(s.idx)} cy={yAt(s.value)} r="5" fill="white" />
              <circle cx={xAt(s.idx)} cy={yAt(s.value)} r="9" fill="none" stroke="white" strokeOpacity="0.4" strokeWidth="1" />
              <text
                x={xAt(s.idx)}
                y={yAt(s.value) - 14}
                fill="white"
                fontSize="10"
                fontFamily="ui-monospace, monospace"
                textAnchor="middle"
              >
                {s.label}
              </text>
            </motion.g>
          ))}

          {/* X-axis month labels */}
          {points.map((_, i) => (
            <text
              key={i}
              x={xAt(i)}
              y={H - PAD.b + 16}
              fill="rgba(255,255,255,0.35)"
              fontSize="9"
              fontFamily="ui-monospace, monospace"
              textAnchor="middle"
            >
              {monthsLabel[i]}
            </text>
          ))}
        </svg>
      </div>

      <motion.figcaption variants={fadeUp} className="mt-10 text-xs lg:text-sm text-white/40 leading-relaxed max-w-2xl mx-auto text-center font-light">
        {note}
      </motion.figcaption>
    </motion.figure>
  );
}
