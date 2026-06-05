// ============================================================================
// SYMLOOP — RelatedLinks
//
// Editorial cross-link block dropped into the bottom of each /services/{slug}/
// page. Two columns:
//   1. Related services — 3 sibling capabilities (you-might-also-need)
//   2. Related insights — 1-2 published research pieces from this practice
//
// Internal cross-linking is one of the strongest SEO signals Google uses, and
// it gives LLM crawlers a semantic neighborhood for each service. The block
// also doubles as a "next step" navigation for human readers who finish a
// service page and would otherwise hit the CTA cold.
//
// USAGE
//   <RelatedLinks
//     services={['ai', 'cloud', 'consulting']}     // 3 service keys
//     insights={['ai', 'healthcare']}              // 1-2 insight keys
//   />
//
// Service keys must match a /services/{key}/ route. Insight keys must match
// a /insights/{key}/ route AND have strings under home.insights.items.{key}
// in the locale files.
// ============================================================================

import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { ArrowUpRight } from 'lucide-react';

// ── Service catalogue (only the 3 fields we render — keep it tiny) ────────
const SERVICE_LABELS = {
  ai: {
    en: { kind: 'Discipline', title: 'Artificial Intelligence' },
    fr: { kind: 'Discipline', title: 'Intelligence Artificielle' },
    ar: { kind: 'تخصص',       title: 'الذكاء الاصطناعي' },
  },
  'software-engineering': {
    en: { kind: 'Discipline', title: 'Software Engineering' },
    fr: { kind: 'Discipline', title: 'Ingénierie Logicielle' },
    ar: { kind: 'تخصص',       title: 'هندسة البرمجيات' },
  },
  mobile: {
    en: { kind: 'Discipline', title: 'Mobile Engineering' },
    fr: { kind: 'Discipline', title: 'Ingénierie Mobile' },
    ar: { kind: 'تخصص',       title: 'هندسة الجوال' },
  },
  cloud: {
    en: { kind: 'Discipline', title: 'Cloud & DevOps' },
    fr: { kind: 'Discipline', title: 'Cloud & DevOps' },
    ar: { kind: 'تخصص',       title: 'السحابة و DevOps' },
  },
  iot: {
    en: { kind: 'Discipline', title: 'IoT & Industrial Systems' },
    fr: { kind: 'Discipline', title: 'IoT & Systèmes Industriels' },
    ar: { kind: 'تخصص',       title: 'إنترنت الأشياء والأنظمة الصناعية' },
  },
  cybersecurity: {
    en: { kind: 'Discipline', title: 'Cybersecurity' },
    fr: { kind: 'Discipline', title: 'Cybersécurité' },
    ar: { kind: 'تخصص',       title: 'الأمن السيبراني' },
  },
  consulting: {
    en: { kind: 'Discipline', title: 'Technology Consulting' },
    fr: { kind: 'Discipline', title: 'Conseil Technologique' },
    ar: { kind: 'تخصص',       title: 'الاستشارات التقنية' },
  },
  product: {
    en: { kind: 'Discipline', title: 'Product Engineering' },
    fr: { kind: 'Discipline', title: 'Ingénierie Produit' },
    ar: { kind: 'تخصص',       title: 'هندسة المنتج' },
  },
};

// ── Block-level copy in 3 locales (kept inline so the component is drop-in) ─
const COPY = {
  en: {
    sectionEyebrow:    '— Related',
    servicesHeading:   'Related disciplines',
    insightsHeading:   'Insights from this practice',
    allInsights:       'All insights',
    read:              'Read',
    explore:           'Explore',
  },
  fr: {
    sectionEyebrow:    '— En lien',
    servicesHeading:   'Disciplines liées',
    insightsHeading:   'Études publiées par cette pratique',
    allInsights:       'Toutes les études',
    read:              'Lire',
    explore:           'Découvrir',
  },
  ar: {
    sectionEyebrow:    '— ذات صلة',
    servicesHeading:   'تخصصات ذات صلة',
    insightsHeading:   'دراسات من هذه الممارسة',
    allInsights:       'كل الدراسات',
    read:              'اقرأ',
    explore:           'اكتشف',
  },
};

export default function RelatedLinks({ services = [], insights = [] }) {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const c = COPY[locale] || COPY.en;
  const isRtl = locale === 'ar';

  return (
    <section
      dir={isRtl ? 'rtl' : 'ltr'}
      className="relative bg-black border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

        {/* Section header */}
        <div className="flex items-center gap-3 mb-14 lg:mb-16">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
            {c.sectionEyebrow}
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* ── LEFT: related services ───────────────────────────── */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-white mb-10">
              {c.servicesHeading}
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]">
              {services.slice(0, 3).map((key, i) => {
                const meta  = SERVICE_LABELS[key]?.[locale] || SERVICE_LABELS[key]?.en;
                if (!meta) return null;
                const num   = String(i + 1).padStart(2, '0');
                return (
                  <li key={key} className="bg-black">
                    <Link
                      href={`/services/${key}/`}
                      className="group block h-full p-6 lg:p-7 transition-colors hover:bg-white/[0.025]"
                    >
                      <div className="flex items-start justify-between mb-8">
                        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 group-hover:text-white/70 transition-colors">
                          {meta.kind}
                        </span>
                        <span className="font-mono text-[10px] tracking-[0.15em] text-white/30">
                          {num}
                        </span>
                      </div>
                      <h3 className="text-lg lg:text-xl font-light text-white leading-snug tracking-tight mb-6 min-h-[3rem]">
                        {meta.title}
                      </h3>
                      <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
                        <span>{c.explore}</span>
                        <ArrowUpRight
                          className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          strokeWidth={1.5}
                        />
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ── RIGHT: related insights ──────────────────────────── */}
          {insights.length > 0 && (
            <div className="lg:col-span-5">
              <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-white mb-10">
                {c.insightsHeading}
              </h2>

              <ul className="space-y-px bg-white/[0.06] border border-white/[0.06]">
                {insights.slice(0, 2).map((key) => (
                  <li key={key} className="bg-black">
                    <Link
                      href={`/insights/${key}/`}
                      className="group block p-6 lg:p-7 transition-colors hover:bg-white/[0.025]"
                    >
                      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 group-hover:text-white/70 transition-colors">
                        {t(`home.insights.items.${key}.kind`)}
                      </span>
                      <h3 className="mt-4 text-base lg:text-lg font-light text-white leading-snug tracking-tight">
                        {t(`home.insights.items.${key}.title`)}
                      </h3>
                      <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
                        <span>{t(`home.insights.items.${key}.meta`)}</span>
                        <ArrowUpRight
                          className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          strokeWidth={1.5}
                        />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  href="/insights/"
                  className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors"
                >
                  <span>{c.allInsights}</span>
                  <ArrowUpRight
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
