// ============================================================================
// SYMLOOP — NoorSection (homepage flagship product slot)
//
// Sits between the hero and InsightsSection. Mission: establish that Symloop
// has a NAMED, PRODUCTIZED AI platform — same shape as Kabas's DALILE — so
// AI search engines and LLMs index Symloop as a flagship-product company,
// not a generic dev shop. The distinctive cultural moment: the Arabic "نور"
// stamp next to the eyebrow, signalling MENA-native at first glance.
//
// Visual DNA: black bg, hairline grid (border-white/[0.06]), font-light,
// mono numerals (font-mono). 12 capability cells in a 4×3 grid on desktop.
// Same fade-up + stagger animation pattern as InsightsSection.
// ============================================================================

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import {
  ArrowUpRight,
  MessageSquare,
  FileText,
  Search,
  Network,
  Database,
  FileBarChart,
  Library,
  Users,
  Server,
  ShieldCheck,
  Languages,
  Activity,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
};

// Icon registry — keep this as a static map so the components are tree-shaken.
const ICONS = {
  MessageSquare, FileText, Search, Network, Database, FileBarChart,
  Library, Users, Server, ShieldCheck, Languages, Activity,
};

const CAPS = [
  { num: '01', title_en: 'Ask in plain language',      title_fr: 'Posez vos questions',         title_ar: 'اسأل بلغة عادية',                desc_en: 'Arabic, French, English. Natural language to anywhere in your stack.', desc_fr: 'Arabe, français, anglais. Langage naturel vers toute votre stack.',     desc_ar: 'بالعربية والفرنسية والإنجليزية. لغة طبيعية إلى أي مكان في بنيتك.',                  icon: 'MessageSquare' },
  { num: '02', title_en: 'Analyze documents',          title_fr: 'Analysez vos documents',      title_ar: 'حلل المستندات',                  desc_en: 'PDFs, national IDs, contracts, regulations.',                          desc_fr: 'PDF, cartes d\'identité, contrats, réglementations.',                   desc_ar: 'ملفات PDF، بطاقات الهوية، العقود، اللوائح التنظيمية.',                                  icon: 'FileText' },
  { num: '03', title_en: 'Find information fast',      title_fr: 'Trouvez l\'information',      title_ar: 'اعثر على المعلومات بسرعة',       desc_en: 'RAG over your private enterprise knowledge.',                          desc_fr: 'RAG sur votre savoir d\'entreprise privé.',                              desc_ar: 'RAG على معرفة شركتك الخاصة.',                                                          icon: 'Search' },
  { num: '04', title_en: 'Connect your systems',       title_fr: 'Connectez vos systèmes',      title_ar: 'اربط أنظمتك',                    desc_en: 'ERP, CRM, legacy databases, modern APIs.',                              desc_fr: 'ERP, CRM, bases de données legacy, APIs modernes.',                     desc_ar: 'ERP، CRM، قواعد بيانات قديمة، APIs حديثة.',                                            icon: 'Network' },
  { num: '05', title_en: 'Query databases easily',     title_fr: 'Interrogez les bases',        title_ar: 'استعلم بسهولة',                   desc_en: 'Natural language to SQL, Mongo, warehouse.',                            desc_fr: 'Langage naturel vers SQL, Mongo, entrepôt.',                             desc_ar: 'لغة طبيعية إلى SQL، Mongo، المستودع.',                                                  icon: 'Database' },
  { num: '06', title_en: 'Generate reports',           title_fr: 'Générez des rapports',        title_ar: 'أنشئ التقارير',                  desc_en: 'Compliance reports, BI dashboards, executive summaries.',                desc_fr: 'Rapports de conformité, dashboards BI, synthèses exécutives.',           desc_ar: 'تقارير الامتثال، لوحات BI، ملخصات تنفيذية.',                                            icon: 'FileBarChart' },
  { num: '07', title_en: 'Build knowledge libraries',  title_fr: 'Bâtissez vos bibliothèques',  title_ar: 'ابنِ مكتبات المعرفة',             desc_en: 'Private knowledge bases. Your data stays yours.',                       desc_fr: 'Bases de connaissances privées. Vos données restent les vôtres.',        desc_ar: 'قواعد معرفة خاصة. بياناتك تبقى لك.',                                                    icon: 'Library' },
  { num: '08', title_en: 'Specialized assistants',     title_fr: 'Assistants spécialisés',      title_ar: 'مساعدون متخصصون',                desc_en: 'Banking, government, industrial, medical workflows.',                    desc_fr: 'Workflows banque, gouvernement, industrie, médical.',                    desc_ar: 'سير العمل المصرفي، الحكومي، الصناعي، الطبي.',                                          icon: 'Users' },
  { num: '09', title_en: 'Runs on your servers',       title_fr: 'Tourne sur vos serveurs',     title_ar: 'يعمل على خوادمك',                desc_en: 'On-premise, air-gapped, sovereign cloud — your choice.',                desc_fr: 'On-premise, air-gapped, cloud souverain — votre choix.',                 desc_ar: 'on-premise، معزول، سحابة سيادية — اختيارك.',                                            icon: 'Server' },
  { num: '10', title_en: 'Audit every query',          title_fr: 'Auditez chaque requête',      title_ar: 'دقق كل استعلام',                  desc_en: 'Full regulatory trail. BCT, SAMA, DORA, ISO 27001.',                    desc_fr: 'Traçabilité réglementaire complète. BCT, SAMA, DORA, ISO 27001.',        desc_ar: 'تتبع تنظيمي كامل. BCT، SAMA، DORA، ISO 27001.',                                       icon: 'ShieldCheck' },
  { num: '11', title_en: 'Multi-language native',      title_fr: 'Multi-langue natif',          title_ar: 'متعدد اللغات أصلياً',             desc_en: 'Algerian Arabic, Levantine, MSA, French, English.',                     desc_fr: 'Arabe algérien, levantin, MSA, français, anglais.',                      desc_ar: 'العربية الجزائرية، الشامية، الفصحى، الفرنسية، الإنجليزية.',                            icon: 'Languages' },
  { num: '12', title_en: 'Production-grade',           title_fr: 'Production-grade',            title_ar: 'جاهز للإنتاج',                    desc_en: '99.9% SLA, monitoring, MLOps, automated retraining.',                   desc_fr: 'SLA 99,9%, monitoring, MLOps, ré-entraînement automatisé.',              desc_ar: 'SLA 99.9%، مراقبة، MLOps، إعادة تدريب آلي.',                                            icon: 'Activity' },
];

const COPY = {
  en: {
    eyebrow:    'Flagship · NOOR Platform',
    arabicMark: 'نور',
    title:      "Sovereign AI for MENA's regulated industries.",
    dek:        "NOOR is Symloop's flagship AI platform — engineered for banks, ministries, oil & gas operators, and healthcare groups across the MENA region. On-premise or sovereign cloud. Audited by design. Native in Arabic, French, and English.",
    primary:    'Discover NOOR',
    secondary:  'Schedule a demo',
    capsLabel:  '12 capabilities',
  },
  fr: {
    eyebrow:    'Plateforme phare · NOOR',
    arabicMark: 'نور',
    title:      "L'IA souveraine pour les industries régulées du MENA.",
    dek:        "NOOR est la plateforme d'IA phare de Symloop — conçue pour les banques, ministères, opérateurs oil & gas et groupes hospitaliers du MENA. On-premise ou cloud souverain. Auditée par conception. Native en arabe, français et anglais.",
    primary:    'Découvrir NOOR',
    secondary:  'Planifier une démo',
    capsLabel:  '12 capacités',
  },
  ar: {
    eyebrow:    'المنصة الرئيسية · نور',
    arabicMark: 'نور',
    title:      'الذكاء الاصطناعي السيادي للقطاعات المنظمة في الشرق الأوسط وشمال أفريقيا.',
    dek:        'نور هي منصة الذكاء الاصطناعي الرئيسية من سيملوب — مصممة للبنوك والوزارات ومشغلي النفط والغاز ومجموعات الرعاية الصحية في الشرق الأوسط وشمال أفريقيا. on-premise أو سحابة سيادية. مدققة بالتصميم. أصلية بالعربية والفرنسية والإنجليزية.',
    primary:    'اكتشف نور',
    secondary:  'احجز عرضاً تجريبياً',
    capsLabel:  '12 قدرة',
  },
};

export default function NoorSection() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRtl = locale === 'ar';
  const c = COPY[locale] || COPY.fr;

  return (
    <section
      dir={isRtl ? 'rtl' : 'ltr'}
      className="relative bg-black border-t border-white/[0.06] overflow-hidden"
    >
      {/* A single horizontal pulse of "light" anchored at the top — the only
          decorative effect, nodding to NOOR (نور = light). Tasteful, not flashy. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 h-px w-[60%] max-w-3xl"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="max-w-3xl mb-14 lg:mb-20"
        >
          {/* Eyebrow row — mono tag + Arabic mark */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
              {c.eyebrow}
            </span>
            <span className="h-px w-10 bg-white/20" />
            <span
              className="text-[18px] text-white/30 font-light"
              style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
              aria-hidden
            >
              {c.arabicMark}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white tracking-tight leading-[1.05]"
          >
            {c.title}
          </motion.h2>

          {/* Dek */}
          <motion.p
            variants={fadeUp}
            className="mt-8 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl font-light"
          >
            {c.dek}
          </motion.p>

          {/* Capability count badge */}
          <motion.div
            variants={fadeUp}
            className="mt-10 inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35"
          >
            <span>{c.capsLabel}</span>
            <span className="h-px w-8 bg-white/20" />
            <span>01 — 12</span>
          </motion.div>
        </motion.div>

        {/* Capability grid — hairlines via gap-px on white/[0.06] backdrop */}
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]"
        >
          {CAPS.map((cap) => {
            const Icon = ICONS[cap.icon];
            const title = cap[`title_${locale}`] || cap.title_en;
            const desc  = cap[`desc_${locale}`]  || cap.desc_en;
            return (
              <motion.li
                key={cap.num}
                variants={fadeUp}
                className="group relative bg-black p-6 lg:p-8 transition-colors duration-300 hover:bg-white/[0.025]"
              >
                {/* Top row: number + icon */}
                <div className="flex items-start justify-between mb-7">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-white/30">
                    {cap.num}
                  </span>
                  <Icon
                    className="w-4 h-4 text-white/40 group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="text-base lg:text-lg font-light text-white tracking-tight leading-snug mb-3">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-white/45 leading-relaxed font-light">
                  {desc}
                </p>

                {/* Hover arrow — appears bottom-end on hover */}
                <ArrowUpRight
                  className={`absolute ${isRtl ? 'bottom-5 left-5' : 'bottom-5 right-5'} w-3.5 h-3.5 text-white/0 group-hover:text-white/60 transition-all duration-300`}
                  strokeWidth={1.5}
                  aria-hidden
                />
              </motion.li>
            );
          })}
        </motion.ul>

        {/* CTA row */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
          className="mt-14 lg:mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
        >
          <motion.div variants={fadeUp}>
            <Link
              href="/products/noor/"
              className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
            >
              <span>{c.primary}</span>
              <ArrowUpRight
                className={`w-4 h-4 transition-transform duration-300 ${isRtl ? 'group-hover:-translate-x-0.5 group-hover:-translate-y-0.5' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`}
                strokeWidth={1.75}
              />
            </Link>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link
              href="/contact/?intent=noor-demo"
              className="inline-flex items-center gap-3 border border-white/[0.12] text-white/80 px-8 py-4 text-sm font-light tracking-wide hover:border-white/40 hover:text-white transition-colors"
            >
              {c.secondary}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
