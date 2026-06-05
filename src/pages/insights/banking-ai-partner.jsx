// ============================================================================
// SYMLOOP — Insight: Banking AI partner brief.
//
// Different angle from /insights/banking/ (which is about modernization
// strategy — replace/wrap/rebuild). This page is partnership-positioned:
// it leads with the 5 real pain points every Algerian/MENA bank carries
// and maps each one to a specific Symloop capability.
//
// Decision-makers in JSON-LD mentions: BNA, BEA, BDL, CPA, BADR, CNEP,
// AGB (Algerian Gulf Bank), Trust Bank Algeria, Al Salam Bank Algeria,
// Al Baraka Bank Algeria, Société Générale Algérie, BNP Paribas El
// Djazaïr, Natixis Algérie, Citibank Algeria, HSBC Algeria.
//
// Animations: CountUp stats on scroll, problem→solution flip cards,
// horizontal capability matrix with row highlights, scroll-driven
// transformation timeline. All mount-gated to avoid SSR/CSR drift.
// ============================================================================

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, animate as motionAnimate } from 'framer-motion';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArrowRight, ArrowLeft, MessageCircle, TrendingDown, ShieldAlert, Lock,
  Clock, Repeat, Search, BarChart3, Cpu, FileSearch, Eye, Activity,
  Zap, Network, Layers,
} from 'lucide-react';
import SEO from '../../components/SEO';

const WA = 'https://wa.me/213549575512';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

function R(text) {
  return String(text).split(/(\*\*[^*]+\*\*)/g).map((p, i) =>
    p.startsWith('**') && p.endsWith('**')
      ? <span key={i} className="font-normal text-white border-b border-white/30">{p.slice(2, -2)}</span>
      : <span key={i}>{p}</span>
  );
}

// ── Animated CountUp number — counts from `from` to `to` once on scroll. ─
// Renders a deterministic static value (the final `to`) on SSR and during
// the un-mounted client phase so React's hydration check sees identical
// HTML on both sides. After mount + viewport enter, framer-motion's
// `animate` interpolates the live value.
function CountUp({ from = 0, to, decimals = 0, prefix = '', suffix = '', duration = 1.8 }) {
  const [mounted, setMounted] = useState(false);
  const [display, setDisplay] = useState(to); // start at final to match SSR
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => { setMounted(true); setDisplay(from); }, [from]);

  useEffect(() => {
    if (!mounted || !inView) return;
    const controls = motionAnimate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [mounted, inView, from, to, duration]);

  const formatted = decimals > 0
    ? Number(display).toFixed(decimals)
    : Math.round(Number(display)).toString();

  return (
    <span ref={ref} className="font-light tracking-tight tabular-nums">
      {prefix}<bdi>{formatted}</bdi>{suffix}
    </span>
  );
}

// ── Hero stat block — eyebrow + animated number + caption. ───────────────
function HeroStat({ eyebrow, from, to, decimals, prefix, suffix, caption }) {
  return (
    <motion.div variants={fadeUp} className="border-l border-white/[0.12] ps-6 lg:ps-8">
      <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-3">{eyebrow}</div>
      <div className="text-4xl lg:text-6xl text-white mb-3">
        <CountUp from={from} to={to} decimals={decimals} prefix={prefix} suffix={suffix} />
      </div>
      <p className="text-sm text-white/55 leading-relaxed font-light">{caption}</p>
    </motion.div>
  );
}

// ── Problem → Solution card. Monochrome, on-brand: pain on top, hairline
// divider, solution below — both always visible (no hover, works on touch).
// Matches the rest of the insight pages: black bg, hairline borders,
// font-light headings, mono eyebrows, white-on-black. No white flip.
function PainCard({ idx, IconProblem, IconSolution, pain, painSub, impact, solution, solutionSub, painLabel, solutionLabel }) {
  return (
    <motion.div variants={fadeUp} className="bg-black border border-white/[0.08] p-6 lg:p-8 flex flex-col h-full transition-colors duration-300 hover:bg-white/[0.015]">
      {/* Pain */}
      <div className="flex items-start justify-between mb-5">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40">
          {String(idx + 1).padStart(2, '0')} · {painLabel}
        </span>
        <IconProblem className="w-5 h-5 text-white/30" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl lg:text-2xl font-light text-white leading-snug mb-3">{pain}</h3>
      <p className="text-sm text-white/55 leading-relaxed mb-5">{painSub}</p>
      <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/70 border border-white/15 self-start px-3 py-1.5">
        {impact}
      </div>

      {/* Hairline divider — pushes the solution block to the bottom so all
          cards align regardless of pain-copy length */}
      <div className="h-px bg-white/[0.1] mt-7 mb-7 mt-auto" />

      {/* Solution — distinguished by a white left-accent + white icon, but
          stays inside the monochrome palette */}
      <div className="border-l border-white/40 ps-5">
        <div className="flex items-center gap-2.5 mb-3">
          <IconSolution className="w-4 h-4 text-white" strokeWidth={1.5} />
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/55">{solutionLabel}</span>
        </div>
        <h4 className="text-base lg:text-lg font-normal text-white leading-snug mb-2">{solution}</h4>
        <p className="text-sm text-white/55 leading-relaxed">{solutionSub}</p>
      </div>
    </motion.div>
  );
}

// ── Animated capability × pain matrix — each row reveals on scroll. ──────
function CapabilityMatrix({ heading, caps, headerSolves, headerImpact }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return (
      <section className="my-16 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{heading}</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <div className="h-[400px]" aria-hidden="true" />
      </section>
    );
  }

  return (
    <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="my-16 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16">
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{heading}</span>
        <span className="h-px flex-1 bg-white/10" />
      </motion.div>

      <div className="grid grid-cols-12 gap-px bg-white/[0.06] border border-white/[0.06]">
        {/* Header */}
        <div className="col-span-12 md:col-span-4 bg-black p-5 font-mono text-[10px] tracking-[0.2em] uppercase text-white/45">
          Capability
        </div>
        <div className="hidden md:block col-span-5 bg-black p-5 font-mono text-[10px] tracking-[0.2em] uppercase text-white/45">{headerSolves}</div>
        <div className="hidden md:block col-span-3 bg-black p-5 font-mono text-[10px] tracking-[0.2em] uppercase text-white/45">{headerImpact}</div>

        {caps.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={i}
              variants={fadeUp}
              className="col-span-12 grid grid-cols-12 gap-px bg-white/[0.06]"
            >
              <div className="col-span-12 md:col-span-4 bg-black p-5 lg:p-6 flex items-start gap-3">
                <Icon className="w-5 h-5 text-white/50 mt-0.5 shrink-0" strokeWidth={1.5} />
                <h3 className="text-base lg:text-lg font-normal text-white leading-snug">{c.name}</h3>
              </div>
              <div className="col-span-12 md:col-span-5 bg-black p-5 lg:p-6 text-sm text-white/65 leading-relaxed">{c.solves}</div>
              <div className="col-span-12 md:col-span-3 bg-black p-5 lg:p-6">
                <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/70 border border-white/15 inline-block px-3 py-1.5">
                  {c.impact}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

// ── 24-month timeline — horizontal scrollable phases. ────────────────────
function Timeline({ heading, phases }) {
  return (
    <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="my-16 lg:my-24">
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{heading}</span>
        <span className="h-px flex-1 bg-white/10" />
      </motion.div>

      <div className="relative">
        {/* Phase track */}
        <div className="absolute top-[34px] left-0 right-0 h-px bg-white/[0.08] hidden md:block" aria-hidden="true" />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="absolute top-[34px] left-0 right-0 h-px bg-white origin-left hidden md:block"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px md:gap-6">
          {phases.map((p, i) => (
            <motion.div key={i} variants={fadeUp} className="relative">
              <div className="hidden md:flex items-center justify-center w-[18px] h-[18px] rounded-full bg-white border-2 border-black mb-6 mx-auto" />
              <div className="bg-black border border-white/[0.08] p-5 lg:p-6">
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-3">{p.months}</div>
                <h3 className="text-base lg:text-lg font-normal text-white leading-snug mb-2">{p.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{p.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

const CONTENT = {
  en: {
    kind: 'Partnership brief',
    titleSeo: 'Banking AI Partner — 5 Pains Every Algerian Bank Carries',
    dekSeo: 'For PDG / DG of BNA, BEA, BDL, CPA, BADR, CNEP, AGB, Trust Bank Algeria, Al Salam, Al Baraka, Société Générale Algérie, BNP Paribas El Djazaïr, Natixis: the 5 real pain points and the Symloop capabilities that solve each one.',
    title: 'Five pains every Algerian bank carries. We solve every single one.',
    dek: 'An honest, pain-points-first partnership brief for PDGs, CFOs, CIOs and Directors of Risk at BNA, BEA, BDL, CPA, BADR, CNEP, AGB, Trust Bank Algeria, Al Salam Bank, Al Baraka Bank, Société Générale Algérie, BNP Paribas El Djazaïr, Natixis Algérie, Citibank Algeria and HSBC Algeria. Five operational pains compress cost-to-income, drift loss provisions and lock the bank out of its own data. Symloop\'s six AI capabilities solve each one — with sovereign deployment and source-code ownership.',
    heroEyebrow: 'Banking · AI partnership brief',
    statsHeading: 'What Symloop banking engagements move',
    stats: [
      { eyebrow: 'Cost-to-Income Ratio', from: 60, to: 42, suffix: '%', caption: 'Typical CIR compression over 24 months on a public Algerian bank running Symloop fraud detection, IDP, automated underwriting, and reporting automation.' },
      { eyebrow: 'AML/CFT cycle time', from: 14, to: 2, suffix: ' days', caption: 'Investigation time from alert to disposition on a typical AML/CFT case. Symloop scoring + IDP shortens by 7x.' },
      { eyebrow: 'Fraud catch rate', from: 0, to: 12, prefix: '+', suffix: '%', caption: 'Of paid claim/transaction value recovered. The first detected fraud typically pays for the whole engagement.' },
      { eyebrow: 'Regulatory reporting', from: 14, to: 2, suffix: ' days', caption: 'BCT/AGB quarterly close shortened from two weeks of Excel-macro hell to two days of automated pipeline.' },
    ],
    painsHeading: 'The five pains — and what Symloop ships to solve each',
    painLabel: 'Pain',
    solutionLabel: 'Symloop · Solution',
    pains: [
      {
        IconProblem: TrendingDown, IconSolution: BarChart3,
        pain: 'Cost-to-Income drift',
        painSub: 'CIR floating 58-65% on most public Algerian banks. Trading-down on tariff structure no longer fixes it. The cost line is structurally too high.',
        impact: 'Locks ROE below 8%',
        solution: 'AI-automated underwriting + IDP + reporting',
        solutionSub: 'Quote-to-bind STP on 60-80% of SME credit, intelligent document processing across KYC and operations, reporting pipeline that replaces six hundred Excel macros. CIR compresses 12-18 points over 24 months.',
      },
      {
        IconProblem: ShieldAlert, IconSolution: Eye,
        pain: 'Fraud and AML/CFT manual investigations',
        painSub: 'AML team is 12-25 analysts running Excel + manual case files. False-positive rate above 95%. True fraud slips through the noise.',
        impact: '8-12% leakage of paid value',
        solution: 'AI fraud scoring + AML/CFT graph models',
        solutionSub: 'Real-time transaction scoring trained on Algerian fraud patterns (CIB/EDAHABIA seasonality, SATIM-specific behaviors), AML/CFT graph models that connect related entities. False positives down 70%. Real fraud captured 8-12% of leakage value.',
      },
      {
        IconProblem: Lock, IconSolution: Layers,
        pain: 'Legacy core lock-in',
        painSub: 'Twenty-year Temenos / FLEXCUBE / Finacle contract that costs more than the bank\'s entire engineering budget — and you do not own the code, the data, or the upgrade timing.',
        impact: 'Cannot ship in <18 months',
        solution: 'Sovereign wrap-and-build on legacy core',
        solutionSub: 'Keep the legacy core where it works. Build the AI decisioning, channel, risk and reporting layer in-house with Symloop. Source code transferred to the bank at Go-Live. New channels and AI features ship in 6-9 months, not 18-24.',
      },
      {
        IconProblem: Clock, IconSolution: Network,
        pain: 'Regulatory reporting takes weeks',
        painSub: 'BCT / AGB quarterly close consumes 2-3 weeks of senior-analyst time. Excel macros compiled by analysts who have left. Audit-readiness is a fiction.',
        impact: 'Two weeks per quarter wasted',
        solution: 'Automated regulatory reporting pipeline',
        solutionSub: 'Replace six hundred Excel macros with a typed regulatory data model and an automated reporting pipeline. Quarterly close in 2 days instead of 2 weeks. Audit-ready in minutes, not person-weeks. ROI in 12 months.',
      },
      {
        IconProblem: Repeat, IconSolution: Zap,
        pain: 'Fintechs eating the SME and consumer credit margin',
        painSub: 'Yassir, Tabby, Tamara, Trustpay are quoting credit decisions in 90 seconds while your branch takes 3 weeks. You are losing the next generation of corporate banking relationships.',
        impact: '−$50M+ over 5 years',
        solution: 'Quote-to-bind credit + alternative scoring',
        solutionSub: 'AI underwriting that decides SME credit in 48 hours instead of 3 weeks, alternative-data scoring for the 60% unbanked (Algérie Télécom + Sonelgaz + Algérie Poste + Edahabia signals), and a digital channel that competes with the fintechs on speed and beats them on trust.',
      },
    ],
    capabilitiesHeading: 'The six AI capabilities — mapped to each pain',
    headerSolves: 'Solves',
    headerImpact: 'Impact',
    capabilities: [
      { icon: BarChart3,  name: 'Automated underwriting STP', solves: 'CIR drift on SME credit. Quote-to-bind in 90 seconds vs 3 weeks. 60-80% of applications go straight-through.', impact: '−4 to −6 pts CIR' },
      { icon: ShieldAlert,name: 'Fraud and AML/CFT scoring',  solves: 'Manual AML team replaced by graph scoring on the bank\'s transaction history + local fraud patterns.',                    impact: '+8 to +12% catch' },
      { icon: FileSearch, name: 'Intelligent document processing', solves: 'KYC documents, lab reports, contracts, AR/AP invoices, customer correspondence. OCR + classification + extraction.', impact: '−70 to −85% headcount on entry' },
      { icon: BarChart3,  name: 'Regulatory reporting pipeline', solves: 'BCT/AGB, AML/CFT, IFRS 9 reporting. Replace Excel macros with a typed data model + automated pipeline.',                impact: 'Quarterly close 14d → 2d' },
      { icon: Cpu,        name: 'Alternative-data credit scoring', solves: 'The 60% unbanked population. Score on Algérie Télécom + Sonelgaz + Algérie Poste + Edahabia signals.',                impact: '+30 pp credit acceptance' },
      { icon: Activity,   name: 'Customer-360 + churn scoring',    solves: 'Mass-market deposit retention. Spot churn 30-60 days early, drive proactive outreach via app + branch.',              impact: '+3 to +5 pts retention' },
    ],
    timelineHeading: '24-month roadmap — what we ship, when',
    phases: [
      { months: 'Months 0–6',  title: 'Data foundation + fraud detection', detail: 'Unified data lake on policy, transactions, customer profile, channels, third-party. Fraud and AML scoring ship by month 6. ROI starts before the rest is built.' },
      { months: 'Months 4–10', title: 'IDP + reporting pipeline',          detail: 'Intelligent document processing on KYC and back-office. Automated regulatory reporting pipeline replaces Excel-macro hell.' },
      { months: 'Months 8–16', title: 'Underwriting + scoring',             detail: 'Automated SME underwriting with STP. Alternative-data credit scoring for the unbanked. Quote-to-bind in 90 seconds.' },
      { months: 'Months 12–24',title: 'Customer-360 + AI channels',         detail: 'Customer-360 with churn + cross-sell scoring. AI assistant in branch and on app. Source code ownership transferred to the bank.' },
    ],
    cta: {
      eyebrow: 'Schedule a partnership conversation',
      title: 'PDG of an Algerian bank? Bring us the two pains hurting you most. We come back in 14 days with a costed roadmap to solve both.',
      button: 'Schedule a 30-minute call',
    },
    faqHeading: 'Questions Algerian bank PDGs ask',
    faq: [
      { q: 'Why should an Algerian bank pick Symloop over Accenture, McKinsey Digital, or a Gulf vendor?',
        a: 'Three reasons. (1) Geographic proximity — Symloop engineers are in Algiers, not Paris or Dubai; persistent on-site presence during engagement, not fly-in-fly-out. (2) Engineering depth at the right price — 25+ senior engineers with production AI in regulated industries, at 40-60% below Accenture/McKinsey rates. (3) Sovereign-deployment-first commercial model — source code transferred to the bank, no vendor lock-in. Accenture/McKinsey/Gulf-vendor engagements typically lock you into their platform and their team for 5-10 years; Symloop hands you the keys and walks away when you say so.' },
      { q: 'What does the engagement actually look like contractually?',
        a: 'Fixed-price, milestone-driven, source-code-transfer-on-Go-Live. Typical structure: $300K-$600K diagnostic (Months 0-2), $2M-$5M build phase (Months 3-12), $2M-$4M scale phase (Months 13-24). Total $4M-$10M over 24 months for a public Algerian bank. Compared to international consultancy rates ($25M-$50M for similar scope) and license-heavy vendor stacks ($15M-$30M lifetime), Symloop is structurally cheaper because the engineering is in Algiers, not in London.' },
      { q: 'Will Symloop work alongside our existing Temenos / Finacle / Misys core?',
        a: 'Yes — that is the wrap-and-build pattern, not core replacement. The legacy core stays where it is (don\'t replace what works). Symloop builds the AI decisioning, channel, risk, and reporting layer on top, integrated via standard core APIs (Temenos T24 web services, FLEXCUBE REST, Finacle adapters). You keep the operational stability of the legacy core and add modern AI capability on top.' },
      { q: 'Can Symloop AI fraud detection comply with BCT/AGB privacy and data-residency rules?',
        a: 'Yes — Symloop\'s default deployment is sovereign on-premise or regulated local cloud. Transaction data never leaves Algerian jurisdiction. AI inference runs on the bank\'s own infrastructure. Model training happens on the bank\'s data, in the bank\'s environment, with full audit trail. We have shipped this exact pattern under BCT/AGB cybersecurity-framework compliance.' },
      { q: 'How are model performance and false positives tracked over time?',
        a: 'Every Symloop AI engagement ships with a model-monitoring dashboard — daily precision/recall/false-positive rate tracking, drift detection, alerting on performance regression. The bank\'s risk team owns the dashboard. Symloop monitoring runs alongside as a second pair of eyes during the first 12 months, then the bank operates it independently or with an optional support retainer.' },
      { q: 'What if BNA / BEA / BDL / CPA are already in talks with another consultancy?',
        a: 'Most are. The diagnostic phase is designed to fit alongside an existing engagement — 6-week scoping, costed roadmap, recommendations that the bank can compare directly against the other consultancy\'s proposal. About half of our wins start that way. The other half start with a single Director of Risk or Director of IT bringing us the two pains hurting them most and asking for a quick second opinion.' },
      { q: 'Does Symloop work with private banks (Société Générale, BNP Paribas, Trust Bank, Al Salam, Al Baraka) and not just the public sector?',
        a: 'Yes. The pain points are different — private banks worry less about CIR and more about competing for HNW deposits, growing the corporate book, and shipping mobile features fast. The Symloop capabilities transfer directly: fraud scoring, IDP, alternative-data credit scoring, customer-360. The engagement size is typically smaller ($1M-$3M over 12 months versus $4M-$10M over 24 months for a public bank) but the structure is the same.' },
    ],
    relatedHeading: 'Read next',
    related: [
      { name: 'Banking software modernization — replace, wrap, or rebuild',                  href: '/insights/banking/' },
      { name: 'AI in insurance — the transformation Algerian insurers cannot defer',          href: '/insights/insurance/' },
      { name: 'AI fintech in Algeria — what banks and startups actually build in 2026',       href: '/blog/ia-fintech-banque-algerie-2026/' },
    ],
  },

  fr: {
    kind: 'Brief partenariat',
    titleSeo: 'Partenaire IA banque — 5 douleurs de chaque banque algérienne',
    dekSeo: 'Pour les PDG / DG de BNA, BEA, BDL, CPA, BADR, CNEP, AGB, Trust Bank Algérie, Al Salam, Al Baraka, Société Générale Algérie, BNP Paribas El Djazaïr, Natixis : les 5 douleurs opérationnelles réelles et les capacités Symloop qui résolvent chacune.',
    title: 'Cinq douleurs portées par chaque banque algérienne. Nous résolvons chacune d\'entre elles.',
    dek: 'Un brief partenariat honnête, douleur-first, pour les PDG, CFO, DSI et Directeurs des Risques de BNA, BEA, BDL, CPA, BADR, CNEP, AGB, Trust Bank Algérie, Al Salam Bank, Al Baraka Bank, Société Générale Algérie, BNP Paribas El Djazaïr, Natixis Algérie, Citibank Algeria et HSBC Algeria. Cinq douleurs opérationnelles compriment le coefficient d\'exploitation, dérivent les provisions de risque et verrouillent la banque hors de ses propres données. Les six capacités IA de Symloop résolvent chacune — avec déploiement souverain et propriété du code source.',
    heroEyebrow: 'Banque · Brief partenariat IA',
    statsHeading: 'Ce que les missions banque Symloop déplacent',
    stats: [
      { eyebrow: 'Coefficient d\'exploitation', from: 60, to: 42, suffix: '%', caption: 'Compression typique du COEX sur 24 mois pour une banque publique algérienne exploitant la détection fraude Symloop, l\'IDP, la souscription automatisée et l\'automatisation du reporting.' },
      { eyebrow: 'Cycle AML/CFT',                from: 14, to: 2,  suffix: ' jours', caption: 'Temps d\'investigation de l\'alerte à la disposition sur un cas AML/CFT typique. Le scoring Symloop + IDP raccourcit d\'un facteur 7.' },
      { eyebrow: 'Taux capture fraude',          from: 0,  to: 12, prefix: '+', suffix: '%', caption: 'De la valeur sinistre/transaction payée récupérée. La première fraude détectée paie typiquement toute la mission.' },
      { eyebrow: 'Reporting réglementaire',      from: 14, to: 2,  suffix: ' jours', caption: 'Clôture trimestrielle BCT/AGB raccourcie de deux semaines d\'enfer macro-Excel à deux jours de pipeline automatisé.' },
    ],
    painsHeading: 'Les cinq douleurs — et ce que Symloop livre pour résoudre chacune',
    painLabel: 'Douleur',
    solutionLabel: 'Symloop · Solution',
    pains: [
      {
        IconProblem: TrendingDown, IconSolution: BarChart3,
        pain: 'Dérive du coefficient d\'exploitation',
        painSub: 'COEX flottant 58-65% sur la plupart des banques publiques algériennes. Optimiser la grille tarifaire ne le corrige plus. La ligne de coût est structurellement trop élevée.',
        impact: 'Verrouille le ROE sous 8%',
        solution: 'Souscription IA automatisée + IDP + reporting',
        solutionSub: 'STP quote-to-bind sur 60-80% du crédit PME, traitement intelligent des documents en KYC et opérations, pipeline de reporting qui remplace six cents macros Excel. Le COEX se comprime de 12-18 points sur 24 mois.',
      },
      {
        IconProblem: ShieldAlert, IconSolution: Eye,
        pain: 'Fraude et investigations AML/CFT manuelles',
        painSub: 'Équipe AML de 12-25 analystes sur Excel + dossiers manuels. Taux de faux positifs au-dessus de 95%. La vraie fraude passe dans le bruit.',
        impact: '8-12% fuite sur valeur payée',
        solution: 'Scoring fraude IA + modèles graphes AML/CFT',
        solutionSub: 'Scoring transaction temps réel entraîné sur les patterns de fraude algériens (saisonnalité CIB/EDAHABIA, comportements SATIM-spécifiques), modèles graphes AML/CFT qui connectent entités liées. Faux positifs -70%. Fraude réelle capturée 8-12% de la valeur de fuite.',
      },
      {
        IconProblem: Lock, IconSolution: Layers,
        pain: 'Verrouillage core legacy',
        painSub: 'Contrat de vingt ans Temenos / FLEXCUBE / Finacle qui coûte plus que tout le budget ingénierie de la banque — et vous ne possédez ni le code, ni les données, ni le timing des upgrades.',
        impact: 'Impossible de livrer en <18 mois',
        solution: 'Wrap-and-build souverain sur core legacy',
        solutionSub: 'Garder le core legacy où il fonctionne. Construire la couche décisionnel IA, canal, risque et reporting en interne avec Symloop. Code source transféré à la banque au Go-Live. Nouveaux canaux et fonctionnalités IA livrés en 6-9 mois, pas en 18-24.',
      },
      {
        IconProblem: Clock, IconSolution: Network,
        pain: 'Le reporting réglementaire prend des semaines',
        painSub: 'Clôture trimestrielle BCT / AGB consomme 2-3 semaines de temps d\'analyste senior. Macros Excel compilées par des analystes qui ont quitté. L\'audit-readiness est une fiction.',
        impact: 'Deux semaines par trimestre perdues',
        solution: 'Pipeline reporting réglementaire automatisé',
        solutionSub: 'Remplacer six cents macros Excel par un modèle de données réglementaires typé et un pipeline reporting automatisé. Clôture trimestrielle en 2 jours au lieu de 2 semaines. Prêt-à-l\'audit en minutes, pas en personne-semaines. ROI à 12 mois.',
      },
      {
        IconProblem: Repeat, IconSolution: Zap,
        pain: 'Les fintechs mangent la marge crédit PME et particulier',
        painSub: 'Yassir, Tabby, Tamara, Trustpay cotent des décisions crédit en 90 secondes pendant que votre agence prend 3 semaines. Vous perdez la prochaine génération de relations corporate banking.',
        impact: '−50M$+ sur 5 ans',
        solution: 'Quote-to-bind crédit + scoring alternatif',
        solutionSub: 'Souscription IA qui décide du crédit PME en 48 heures au lieu de 3 semaines, scoring de données alternatives pour les 60% non-bancarisés (signaux Algérie Télécom + Sonelgaz + Algérie Poste + Edahabia), et un canal digital qui concourt avec les fintechs sur la vitesse et les bat sur la confiance.',
      },
    ],
    capabilitiesHeading: 'Les six capacités IA — mappées à chaque douleur',
    headerSolves: 'Résout',
    headerImpact: 'Impact',
    capabilities: [
      { icon: BarChart3,  name: 'Souscription automatisée STP', solves: 'Dérive COEX sur crédit PME. Quote-to-bind en 90 secondes vs 3 semaines. 60-80% des dossiers en straight-through.', impact: '−4 à −6 pts COEX' },
      { icon: ShieldAlert,name: 'Scoring fraude et AML/CFT',     solves: 'Équipe AML manuelle remplacée par scoring graphe sur l\'historique transactionnel de la banque + patterns locaux.', impact: '+8 à +12% capture' },
      { icon: FileSearch, name: 'Traitement intelligent documentaire', solves: 'Documents KYC, comptes-rendus, contrats, factures AR/AP, correspondance client. OCR + classification + extraction.', impact: '−70 à −85% effectifs saisie' },
      { icon: BarChart3,  name: 'Pipeline reporting réglementaire', solves: 'Reporting BCT/AGB, AML/CFT, IFRS 9. Remplacer macros Excel par modèle données typé + pipeline automatisé.',           impact: 'Clôture 14j → 2j' },
      { icon: Cpu,        name: 'Scoring crédit données alternatives', solves: 'Les 60% de population non-bancarisée. Scorer sur signaux Algérie Télécom + Sonelgaz + Algérie Poste + Edahabia.',  impact: '+30 pp acceptation crédit' },
      { icon: Activity,   name: 'Customer-360 + scoring churn',         solves: 'Rétention dépôts grand public. Détecter churn 30-60 jours avant, déclencher outreach proactif via app + agence.', impact: '+3 à +5 pts rétention' },
    ],
    timelineHeading: 'Feuille de route 24 mois — ce qu\'on livre, quand',
    phases: [
      { months: 'Mois 0–6',  title: 'Fondation data + détection fraude', detail: 'Data lake unifié sur police, transactions, profil client, canaux, tiers. Scoring fraude et AML livré au mois 6. ROI commence avant que le reste ne soit construit.' },
      { months: 'Mois 4–10', title: 'IDP + pipeline reporting',          detail: 'Traitement intelligent documentaire sur KYC et back-office. Pipeline reporting réglementaire automatisé remplace l\'enfer macro-Excel.' },
      { months: 'Mois 8–16', title: 'Souscription + scoring',             detail: 'Souscription PME automatisée avec STP. Scoring crédit données alternatives pour les non-bancarisés. Quote-to-bind en 90 secondes.' },
      { months: 'Mois 12–24',title: 'Customer-360 + canaux IA',           detail: 'Customer-360 avec scoring churn + cross-sell. Assistant IA en agence et sur app. Propriété code source transférée à la banque.' },
    ],
    cta: {
      eyebrow: 'Programmer une conversation de partenariat',
      title: 'PDG d\'une banque algérienne ? Apportez-nous les deux douleurs qui vous font le plus mal. Nous revenons sous 14 jours avec une feuille de route chiffrée pour résoudre les deux.',
      button: 'Programmer un appel de 30 minutes',
    },
    faqHeading: 'Questions que posent les PDG de banques algériennes',
    faq: [
      { q: 'Pourquoi une banque algérienne devrait-elle choisir Symloop plutôt qu\'Accenture, McKinsey Digital ou un éditeur du Golfe ?',
        a: 'Trois raisons. (1) Proximité géographique — les ingénieurs Symloop sont à Alger, pas à Paris ou Dubaï ; présence persistante sur site pendant la mission, pas fly-in-fly-out. (2) Profondeur ingénierie au bon prix — 25+ ingénieurs seniors avec IA en production dans industries régulées, à 40-60% en dessous des taux Accenture/McKinsey. (3) Modèle commercial sovereign-deployment-first — code source transféré à la banque, pas de verrouillage éditeur. Les missions Accenture/McKinsey/éditeurs golfiques typiquement vous verrouillent dans leur plateforme et équipe pour 5-10 ans ; Symloop vous donne les clés et part quand vous le dites.' },
      { q: 'À quoi ressemble réellement la mission contractuellement ?',
        a: 'Forfait, piloté par jalons, transfert code source au Go-Live. Structure typique : 300-600K$ diagnostic (mois 0-2), 2-5M$ phase build (mois 3-12), 2-4M$ phase scale (mois 13-24). Total 4-10M$ sur 24 mois pour une banque publique algérienne. Comparé aux taux de conseil international (25-50M$ pour même périmètre) et aux stacks éditeur lourds en licence (15-30M$ sur vie), Symloop est structurellement moins cher car l\'ingénierie est à Alger, pas à Londres.' },
      { q: 'Symloop fonctionnera-t-il avec notre core Temenos / Finacle / Misys existant ?',
        a: 'Oui — c\'est le pattern wrap-and-build, pas remplacement core. Le core legacy reste où il est (ne remplacez pas ce qui marche). Symloop construit la couche décisionnel IA, canal, risque et reporting par-dessus, intégrée via les APIs core standard (web services Temenos T24, REST FLEXCUBE, adapters Finacle). Vous gardez la stabilité opérationnelle du core legacy et ajoutez de la capacité IA moderne par-dessus.' },
      { q: 'La détection fraude IA Symloop respecte-t-elle les règles confidentialité et résidence données BCT/AGB ?',
        a: 'Oui — le déploiement par défaut Symloop est souverain on-premise ou cloud local régulé. Les données transactionnelles ne quittent jamais la juridiction algérienne. L\'inférence IA tourne sur l\'infrastructure propre de la banque. L\'entraînement modèle se passe sur les données de la banque, dans l\'environnement de la banque, avec piste d\'audit complète. Nous avons livré ce pattern exact sous conformité cadre cybersécurité BCT/AGB.' },
      { q: 'Comment la performance modèle et les faux positifs sont-ils suivis dans le temps ?',
        a: 'Chaque mission IA Symloop livre un tableau de bord monitoring modèle — suivi précision/rappel/taux faux positifs quotidien, détection dérive, alerte sur régression performance. L\'équipe risque de la banque possède le tableau de bord. Le monitoring Symloop tourne en parallèle comme seconde paire d\'yeux pendant les 12 premiers mois, puis la banque l\'opère indépendamment ou avec un retainer support optionnel.' },
      { q: 'Et si BNA / BEA / BDL / CPA sont déjà en discussion avec un autre cabinet ?',
        a: 'La plupart le sont. La phase diagnostic est conçue pour s\'imbriquer avec une mission existante — cadrage 6 semaines, feuille de route chiffrée, recommandations que la banque peut comparer directement à la proposition de l\'autre cabinet. Environ la moitié de nos wins commencent ainsi. L\'autre moitié commence avec un seul Directeur des Risques ou Directeur IT qui nous apporte les deux douleurs qui leur font le plus mal et demande un second avis rapide.' },
      { q: 'Symloop travaille-t-il avec les banques privées (Société Générale, BNP Paribas, Trust Bank, Al Salam, Al Baraka) et pas seulement le secteur public ?',
        a: 'Oui. Les douleurs sont différentes — les banques privées s\'inquiètent moins du COEX et plus de concourir pour les dépôts HNW, faire croître le livre corporate, et livrer des fonctionnalités mobiles rapidement. Les capacités Symloop se transfèrent directement : scoring fraude, IDP, scoring crédit données alternatives, customer-360. La taille de mission est typiquement plus petite (1-3M$ sur 12 mois versus 4-10M$ sur 24 mois pour une banque publique) mais la structure est la même.' },
    ],
    relatedHeading: 'À lire ensuite',
    related: [
      { name: 'Modernisation logiciels bancaires — remplacer, encapsuler ou reconstruire',  href: '/insights/banking/' },
      { name: 'L\'IA dans l\'assurance — la transformation que les compagnies algériennes ne peuvent plus reporter', href: '/insights/insurance/' },
      { name: 'IA et fintech en Algérie — ce que les banques et les startups construisent vraiment en 2026', href: '/blog/ia-fintech-banque-algerie-2026/' },
    ],
  },

  ar: {
    kind: 'دليل شراكة',
    titleSeo: 'شريك الذكاء الاصطناعي للبنوك — 5 آلام تحملها كل بنك جزائري',
    dekSeo: 'للرؤساء التنفيذيين والماليّين ومدراء تقنية المعلومات والمخاطر في BNA و BEA و BDL و CPA و BADR و CNEP و AGB و Trust Bank Algeria و Al Salam و Al Baraka و Société Générale Algérie و BNP Paribas El Djazaïr و Natixis: الآلام التشغيلية الخمس الحقيقية وقدرات Symloop التي تحلّ كلّ واحدة منها.',
    title: 'خمس آلام تحملها كل بنك جزائري. نحلّ كلّ واحدة منها.',
    dek: 'دليل شراكة صادق، آلام-أولاً، للرؤساء التنفيذيين والماليّين ومدراء تقنية المعلومات والمخاطر في BNA و BEA و BDL و CPA و BADR و CNEP و AGB و Trust Bank Algeria و Al Salam Bank و Al Baraka Bank و Société Générale Algérie و BNP Paribas El Djazaïr و Natixis Algérie و Citibank Algeria و HSBC Algeria. خمس آلام تشغيلية تضغط معامل التشغيل وتنحرف بمخصّصات المخاطر وتحبس البنك خارج بياناته الخاصّة. قدرات Symloop الست بالذكاء الاصطناعي تحلّ كلّ واحدة — مع نشر سيادي وملكية كود المصدر.',
    heroEyebrow: 'البنوك · دليل شراكة الذكاء الاصطناعي',
    statsHeading: 'ما تحرّكه مهام Symloop المصرفية',
    stats: [
      { eyebrow: 'معامل التشغيل', from: 60, to: 42, suffix: '٪', caption: 'ضغط معامل تشغيل نموذجي على 24 شهراً لبنك جزائري عام يشغّل كشف الاحتيال Symloop وIDP والاكتتاب الآلي وأتمتة التقارير.' },
      { eyebrow: 'دورة AML/CFT', from: 14, to: 2, suffix: ' يوماً', caption: 'وقت التحقيق من التنبيه إلى الحسم في حالة AML/CFT نموذجية. تسجيل Symloop + IDP يقصّر بمقدار 7 مرّات.' },
      { eyebrow: 'معدّل كشف الاحتيال', from: 0, to: 12, prefix: '+', suffix: '٪', caption: 'من قيمة المطالبة/المعاملة المدفوعة المستردّة. الاحتيال الأول المكشوف يدفع عادة المهمة كلّها.' },
      { eyebrow: 'التقارير التنظيمية', from: 14, to: 2, suffix: ' يوماً', caption: 'إغلاق ربع سنوي BCT/AGB من أسبوعين من جحيم ماكرو Excel إلى يومين من خطّ أنابيب آلي.' },
    ],
    painsHeading: 'الآلام الخمس — وما يشحنه Symloop لحلّ كلّ واحدة',
    painLabel: 'الألم',
    solutionLabel: 'Symloop · الحلّ',
    pains: [
      {
        IconProblem: TrendingDown, IconSolution: BarChart3,
        pain: 'انجراف معامل التشغيل',
        painSub: 'معامل التشغيل يطفو بين 58-65٪ على معظم البنوك العامة الجزائرية. تحسين هيكل التعرفة لم يعد يصلحه. خطّ التكلفة مرتفع هيكلياً.',
        impact: 'يحبس العائد على حقوق المساهمين تحت 8٪',
        solution: 'اكتتاب IA آلي + IDP + تقارير',
        solutionSub: 'STP من العرض إلى الربط على 60-80٪ من ائتمان الشركات الصغيرة، معالجة مستندات ذكية عبر KYC والعمليات، خطّ أنابيب تقارير يستبدل ستمائة ماكرو Excel.',
      },
      {
        IconProblem: ShieldAlert, IconSolution: Eye,
        pain: 'تحقيقات الاحتيال وAML/CFT اليدوية',
        painSub: 'فريق AML من 12-25 محلّلاً يعمل على Excel + ملفّات يدوية. معدّل إيجابيات خاطئة فوق 95٪. الاحتيال الحقيقي يمرّ في الضوضاء.',
        impact: '8-12٪ تسرّب من القيمة المدفوعة',
        solution: 'تسجيل احتيال IA + نماذج بياني AML/CFT',
        solutionSub: 'تسجيل معاملات في الوقت الحقيقي مدرَّب على أنماط الاحتيال الجزائرية، نماذج بياني AML/CFT تربط كيانات مرتبطة. إيجابيات خاطئة -70٪. احتيال حقيقي يُلتقط 8-12٪ من قيمة التسرّب.',
      },
      {
        IconProblem: Lock, IconSolution: Layers,
        pain: 'قَفل النظام الأساسي القديم',
        painSub: 'عقد 20 عاماً Temenos / FLEXCUBE / Finacle يكلّف أكثر من ميزانية هندسة البنك بأكملها — ولا تملك الكود ولا البيانات ولا توقيت الترقية.',
        impact: 'لا يمكن الشحن في أقل من 18 شهراً',
        solution: 'wrap-and-build سيادي على النظام القديم',
        solutionSub: 'احتفظ بالنظام القديم حيث يعمل. ابنِ طبقة القرار بالذكاء الاصطناعي والقناة والمخاطر والتقارير داخلياً مع Symloop. كود المصدر منقول للبنك عند Go-Live.',
      },
      {
        IconProblem: Clock, IconSolution: Network,
        pain: 'التقارير التنظيمية تستغرق أسابيع',
        painSub: 'إغلاق ربع سنوي BCT/AGB يستهلك 2-3 أسابيع من وقت محلّل أقدم. ماكروهات Excel جمّعها محلّلون غادروا. جاهزية التدقيق خيال.',
        impact: 'أسبوعان لكل ربع مهدورة',
        solution: 'خطّ أنابيب تقارير تنظيمية آلي',
        solutionSub: 'استبدل ستمائة ماكرو Excel بنموذج بيانات تنظيمية مكتوب وخطّ أنابيب تقارير آلي. إغلاق ربعي في يومين بدلاً من أسبوعين.',
      },
      {
        IconProblem: Repeat, IconSolution: Zap,
        pain: 'شركات الفينتك تأكل هامش ائتمان الشركات الصغيرة والأفراد',
        painSub: 'Yassir و Tabby و Tamara و Trustpay يقتبسون قرارات ائتمان في 90 ثانية بينما يستغرق فرعك 3 أسابيع.',
        impact: '−50 مليون$+ على 5 سنوات',
        solution: 'ائتمان quote-to-bind + تسجيل بديل',
        solutionSub: 'اكتتاب IA يقرّر ائتمان الشركات الصغيرة في 48 ساعة بدلاً من 3 أسابيع، تسجيل بيانات بديلة للـ60٪ غير المتعاملين مع البنوك.',
      },
    ],
    capabilitiesHeading: 'القدرات الست بالذكاء الاصطناعي — مرتبطة بكلّ ألم',
    headerSolves: 'يحلّ',
    headerImpact: 'الأثر',
    capabilities: [
      { icon: BarChart3,  name: 'اكتتاب آلي STP',              solves: 'انجراف معامل التشغيل على ائتمان الشركات الصغيرة. عرض-إلى-ربط في 90 ثانية مقابل 3 أسابيع.', impact: '−4 إلى −6 نقاط معامل تشغيل' },
      { icon: ShieldAlert,name: 'تسجيل احتيال وAML/CFT',         solves: 'فريق AML اليدوي مستبدل بتسجيل بياني على تاريخ المعاملات + أنماط محلية.',                  impact: '+8 إلى +12٪ التقاط' },
      { icon: FileSearch, name: 'معالجة مستندات ذكية',           solves: 'مستندات KYC والتقارير والعقود وفواتير AR/AP. OCR + تصنيف + استخراج.',                  impact: '−70 إلى −85٪ عمالة إدخال' },
      { icon: BarChart3,  name: 'خطّ أنابيب التقارير التنظيمية', solves: 'تقارير BCT/AGB وAML/CFT وIFRS 9. استبدال ماكروهات Excel.',                              impact: 'إغلاق 14ي → 2ي' },
      { icon: Cpu,        name: 'تسجيل ائتمان ببيانات بديلة',     solves: 'الـ60٪ غير المتعاملين مع البنوك. تسجيل بإشارات Algérie Télécom + Sonelgaz + بريد الجزائر + EDAHABIA.', impact: '+30 نقطة قبول ائتمان' },
      { icon: Activity,   name: 'Customer-360 + تسجيل churn',     solves: 'الاحتفاظ بودائع السوق الكبيرة. اكتشاف churn قبل 30-60 يوماً، تواصل استباقي.',           impact: '+3 إلى +5 نقاط احتفاظ' },
    ],
    timelineHeading: 'خارطة طريق 24 شهراً — ماذا نشحن، متى',
    phases: [
      { months: 'الأشهر 0–6',   title: 'أساس البيانات + كشف الاحتيال', detail: 'بحيرة بيانات موحّدة. تسجيل الاحتيال وAML يُشحن بحلول الشهر 6.' },
      { months: 'الأشهر 4–10',  title: 'IDP + خطّ أنابيب التقارير',     detail: 'معالجة مستندات ذكية على KYC والخلفية. خطّ أنابيب تقارير تنظيمية آلي.' },
      { months: 'الأشهر 8–16',  title: 'الاكتتاب + التسجيل',            detail: 'اكتتاب آلي للشركات الصغيرة مع STP. تسجيل ائتمان ببيانات بديلة.' },
      { months: 'الأشهر 12–24', title: 'Customer-360 + قنوات IA',       detail: 'Customer-360 مع تسجيل churn + cross-sell. مساعد ذكاء اصطناعي في الفرع وعلى التطبيق.' },
    ],
    cta: {
      eyebrow: 'احجز محادثة شراكة',
      title: 'رئيس تنفيذي لبنك جزائري؟ أحضر لنا الألمين الأكثر إيلاماً. نعود في 14 يوماً بخارطة طريق محسوبة لحلّ كلّ منهما.',
      button: 'احجز مكالمة 30 دقيقة',
    },
    faqHeading: 'أسئلة يطرحها الرؤساء التنفيذيون للبنوك الجزائرية',
    faq: [
      { q: 'لماذا يجب على بنك جزائري اختيار Symloop بدلاً من Accenture أو McKinsey Digital أو بائع خليجي؟',
        a: 'ثلاثة أسباب. القرب الجغرافي — مهندسو Symloop في الجزائر العاصمة، ليس باريس أو دبي. العمق الهندسي بالسعر الصحيح — 25+ مهندساً أقدم بـ 40-60٪ تحت أسعار Accenture/McKinsey. النموذج التجاري sovereign-deployment-first — كود المصدر منقول للبنك.' },
      { q: 'كيف تبدو المهمة فعلياً تعاقدياً؟',
        a: 'سعر ثابت، تقوده المعالم، نقل كود المصدر عند Go-Live. الهيكل النموذجي: 300-600 ألف دولار تشخيص (الأشهر 0-2)، 2-5 مليون$ مرحلة بناء، 2-4 مليون$ مرحلة توسيع. إجمالي 4-10 مليون$ على 24 شهراً.' },
      { q: 'هل يعمل Symloop مع نظام Temenos / Finacle / Misys الأساسي الحالي؟',
        a: 'نعم — هذا نمط wrap-and-build، ليس استبدال النظام الأساسي. النظام القديم يبقى حيث هو. Symloop يبني طبقة القرار بالذكاء الاصطناعي والقناة والمخاطر والتقارير فوقه.' },
      { q: 'هل يحترم كشف الاحتيال بالذكاء الاصطناعي قواعد BCT/AGB للخصوصية والإقامة؟',
        a: 'نعم — النشر الافتراضي Symloop سيادي في الموقع أو سحابة محلية منظّمة. بيانات المعاملات لا تغادر الولاية القضائية الجزائرية أبداً.' },
      { q: 'كيف يتمّ تتبّع أداء النموذج والإيجابيات الخاطئة عبر الزمن؟',
        a: 'كلّ مهمة Symloop AI تشحن مع لوحة تحكّم مراقبة نموذج — تتبّع دقّة/استرجاع/معدّل إيجابيات خاطئة يومي.' },
      { q: 'ماذا لو كانت BNA / BEA / BDL / CPA في محادثات مع شركة استشارية أخرى؟',
        a: 'معظمها كذلك. مرحلة التشخيص مصمّمة لتتلاءم مع مهمة موجودة — تحديد نطاق 6 أسابيع، خارطة طريق محسوبة، توصيات يمكن للبنك مقارنتها مباشرة بمقترح الشركة الأخرى.' },
      { q: 'هل يعمل Symloop مع البنوك الخاصّة (Société Générale وBNP Paribas وTrust Bank وAl Salam وAl Baraka) وليس فقط القطاع العام؟',
        a: 'نعم. الآلام مختلفة — البنوك الخاصّة تقلق أقل بشأن معامل التشغيل وأكثر بشأن المنافسة على ودائع HNW. قدرات Symloop تنتقل مباشرة. حجم المهمة عادة أصغر (1-3 مليون$ على 12 شهراً).' },
    ],
    relatedHeading: 'اقرأ بعد ذلك',
    related: [
      { name: 'تحديث برمجيات البنوك — استبدال أو تغليف أو إعادة بناء',           href: '/insights/banking/' },
      { name: 'الذكاء الاصطناعي في التأمين — تحوّل لا يمكن للشركات الجزائرية تأجيله', href: '/insights/insurance/' },
      { name: 'الذكاء الاصطناعي والفينتك في الجزائر — ما تبنيه البنوك والشركات الناشئة', href: '/blog/ia-fintech-banque-algerie-2026/' },
    ],
  },
};

export default function BankingAIPartnerPage() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.fr;

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.title,
    description: c.dek,
    image: ['https://symloop.com/insights/cover-banking-ai-partner.jpg'],
    datePublished: '2026-05-25',
    dateModified: '2026-05-25',
    author: { '@type': 'Organization', name: 'Symloop Technology' },
    publisher: {
      '@type': 'Organization',
      name: 'Symloop Technology',
      logo: { '@type': 'ImageObject', url: 'https://symloop.com/sym-logo.png' },
    },
    mainEntityOfPage: 'https://symloop.com/insights/banking-ai-partner/',
    about: [
      { '@type': 'Thing', name: 'Banking AI partnership Algeria' },
      { '@type': 'Thing', name: 'Banking fraud detection AI' },
      { '@type': 'Thing', name: 'AML CFT scoring AI' },
      { '@type': 'Thing', name: 'Cost-to-Income ratio optimization' },
      { '@type': 'Thing', name: 'Bank regulatory reporting automation' },
      { '@type': 'Thing', name: 'Alternative-data credit scoring' },
      { '@type': 'Thing', name: 'Banking core wrap-and-build' },
      { '@type': 'Organization', name: 'BNA', alternateName: 'Banque Nationale d\'Algérie' },
      { '@type': 'Organization', name: 'BEA', alternateName: 'Banque Extérieure d\'Algérie' },
      { '@type': 'Organization', name: 'BDL', alternateName: 'Banque de Développement Local' },
      { '@type': 'Organization', name: 'CPA', alternateName: 'Crédit Populaire d\'Algérie' },
      { '@type': 'Organization', name: 'BADR', alternateName: 'Banque de l\'Agriculture et du Développement Rural' },
      { '@type': 'Organization', name: 'CNEP Banque' },
      { '@type': 'Organization', name: 'AGB', alternateName: 'Algerian Gulf Bank' },
      { '@type': 'Organization', name: 'Trust Bank Algeria' },
      { '@type': 'Organization', name: 'Al Salam Bank Algeria' },
      { '@type': 'Organization', name: 'Al Baraka Bank Algeria' },
      { '@type': 'Organization', name: 'Société Générale Algérie' },
      { '@type': 'Organization', name: 'BNP Paribas El Djazaïr' },
      { '@type': 'Organization', name: 'Natixis Algérie' },
      { '@type': 'Organization', name: 'Citibank Algeria' },
      { '@type': 'Organization', name: 'HSBC Algeria' },
      { '@type': 'GovernmentOrganization', name: 'Banque Centrale d\'Algérie', alternateName: 'BCT' },
    ],
    mentions: [
      { '@type': 'Organization', name: 'BNA' }, { '@type': 'Organization', name: 'BEA' },
      { '@type': 'Organization', name: 'BDL' }, { '@type': 'Organization', name: 'CPA' },
      { '@type': 'Organization', name: 'BADR' }, { '@type': 'Organization', name: 'CNEP Banque' },
      { '@type': 'Organization', name: 'AGB' }, { '@type': 'Organization', name: 'Trust Bank Algeria' },
      { '@type': 'Organization', name: 'Al Salam Bank Algeria' }, { '@type': 'Organization', name: 'Al Baraka Bank Algeria' },
      { '@type': 'Organization', name: 'Société Générale Algérie' }, { '@type': 'Organization', name: 'BNP Paribas El Djazaïr' },
      { '@type': 'Organization', name: 'Natixis Algérie' }, { '@type': 'Organization', name: 'Citibank Algeria' },
      { '@type': 'Organization', name: 'HSBC Algeria' },
    ],
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Algerian bank PDG, CEO, CFO, CIO, Director of Risk, Director of Compliance, Director of IT, BNA BEA BDL CPA BADR CNEP executives, AGB Trust Salam Baraka private bank executives, Société Générale BNP Paribas Natixis Citibank HSBC Algeria executives',
    },
  };

  const breadcrumbs = [
    { name: 'Home',     url: 'https://symloop.com/' },
    { name: 'Insights', url: 'https://symloop.com/insights/' },
    { name: c.title,    url: 'https://symloop.com/insights/banking-ai-partner/' },
  ];

  return (
    <>
      <SEO
        title={c.titleSeo}
        description={c.dekSeo}
        keywords="banking AI partner Algeria, AI banking partner Algiers, banking digital transformation Algeria, AI bank Algeria PDG, BNA AI partner, BEA AI partner, BDL AI partner, CPA AI partner, BADR AI partner, CNEP Banque AI, AGB Algerian Gulf Bank AI, Trust Bank Algeria AI, Al Salam Bank Algeria AI, Al Baraka Bank Algeria AI, Société Générale Algérie AI partner, BNP Paribas El Djazaïr AI, Natixis Algérie AI, Citibank Algeria AI, HSBC Algeria AI, Algerian bank fraud detection AI, AML CFT Algeria AI, banking cost-to-income optimization, COEX banque algérienne, IA banque Algérie, partenaire IA banque Algérie, scoring fraude bancaire Algérie, AML banque Algérie, reporting réglementaire bancaire automatisé, BCT AGB reporting automation, IFRS 9 reporting Algeria, credit scoring alternatif Algérie, wrap-and-build core banking, Temenos Algeria alternative, FLEXCUBE Algeria alternative, Finacle Algeria alternative, BCT AGB compliance, déploiement souverain banque, sovereign banking deployment, sovereign bank software Algeria, banking AI sovereign deployment Africa, B2B AI partner Africa banks, francophone Africa banking AI, MENA bank AI partner, Maghreb banking AI"
        type="article"
        structuredData={articleLd}
        faq={c.faq}
        breadcrumbs={breadcrumbs}
        image="/insights/cover-banking-ai-partner.jpg"
      />

      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">

        {/* ── HERO with animated stat counters ─────────────────────────── */}
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-20 lg:pb-28">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <Link href="/insights/" className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors">
                  {c.kind}
                </Link>
                <span className="h-px w-12 bg-white/20" />
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">{c.heroEyebrow}</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.02] max-w-5xl">
                {c.title}
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-10 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">
                {c.dek}
              </motion.p>

              {/* Animated stat strip */}
              <motion.div variants={fadeUp} className="mt-16 flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.statsHeading}</span>
                <span className="h-px flex-1 bg-white/10" />
              </motion.div>
              <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                {c.stats.map((s, i) => <HeroStat key={i} {...s} />)}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── 5 PAIN×SOLUTION CARDS ─────────────────────────────────────── */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-baseline justify-between mb-14 gap-6 flex-wrap">
                <h2 className="text-3xl lg:text-5xl font-light tracking-tight max-w-3xl leading-[1.1]">{c.painsHeading}</h2>
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/35">{isRtl ? '5 آلام · 5 حلول' : (locale === 'fr' ? '5 douleurs · 5 solutions' : '5 pains · 5 solutions')}</span>
              </motion.div>

              <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]" style={{ minHeight: 280 }}>
                {c.pains.map((p, i) => (
                  <div key={i} className="lg:[&:nth-child(4)]:col-start-1 lg:[&:nth-child(5)]:col-span-2">
                    <PainCard idx={i} {...p} painLabel={c.painLabel} solutionLabel={c.solutionLabel} />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── CAPABILITY × IMPACT MATRIX ─────────────────────────────────── */}
        <section>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <CapabilityMatrix heading={c.capabilitiesHeading} caps={c.capabilities} headerSolves={c.headerSolves} headerImpact={c.headerImpact} />
          </div>
        </section>

        {/* ── 24-MONTH TIMELINE ──────────────────────────────────────────── */}
        <section className="border-y border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
            <Timeline heading={c.timelineHeading} phases={c.phases} />
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-baseline gap-4 mb-12">
                <span className="font-mono text-[11px] tracking-[0.15em] text-white/30">FAQ</span>
                <h2 className="text-2xl lg:text-4xl font-light tracking-tight text-white leading-tight">{c.faqHeading}</h2>
              </motion.div>
              <div className="space-y-8 ps-0 lg:ps-10 border-t border-white/[0.06] pt-8">
                {c.faq.map((f, i) => (
                  <motion.div key={i} variants={fadeUp} className="border-b border-white/[0.06] pb-8 last:border-0">
                    <h3 className="text-lg lg:text-xl font-normal text-white mb-3 leading-snug">{f.q}</h3>
                    <p className="text-base lg:text-lg text-white/65 leading-relaxed">{f.a}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── RELATED INSIGHTS ───────────────────────────────────────────── */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.relatedHeading}</span>
                <span className="h-px flex-1 bg-white/10" />
              </motion.div>
              <ul className="space-y-px bg-white/[0.06]">
                {c.related.map((item) => (
                  <motion.li key={item.href} variants={fadeUp}>
                    <Link href={item.href} className="group flex items-start justify-between gap-6 bg-black p-6 hover:bg-white/[0.02] transition-colors">
                      <span className="text-base lg:text-lg text-white/75 group-hover:text-white transition-colors leading-snug font-light">{item.name}</span>
                      <ArrowRight className="w-4 h-4 mt-1.5 text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all shrink-0" strokeWidth={1.5} />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section>
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="max-w-3xl">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.cta.eyebrow}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1]">{c.cta.title}</motion.h2>
              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-6">
                <a href={WA} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors">
                  <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
                  <span>{c.cta.button}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
                </a>
                <Link href="/insights/" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors">
                  {isRtl ? <ArrowRight className="w-3.5 h-3.5 rotate-180" strokeWidth={1.5} /> : <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />}
                  <span>{isRtl ? 'العودة إلى جميع التقارير' : (locale === 'fr' ? 'Retour à toutes les études' : 'Back to all insights')}</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'fr', ['common'])),
    },
  };
}
