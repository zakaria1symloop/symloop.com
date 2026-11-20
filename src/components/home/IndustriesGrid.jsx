// ============================================================================
// SYMLOOP — IndustriesGrid
// Clean, premium, no-gradient industry verticals grid for the homepage.
// 7 industries where Symloop has delivered real projects.
// Animation: scroll-triggered stagger reveal via Framer Motion.
// ============================================================================

import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import {
  HeartPulse,
  Truck,
  ShoppingBag,
  Factory,
  Building2,
  Sprout,
  GraduationCap,
} from 'lucide-react';

// Industries are display-only — NOT clickable.
// Reason: each industry is a vertical of work, not a single deliverable.
// Linking each card would falsely imply a single project page per industry.
const INDUSTRIES = [
  { key: 'healthcare',  icon: HeartPulse },
  { key: 'logistics',   icon: Truck },
  { key: 'retail',      icon: ShoppingBag },
  { key: 'industrial',  icon: Factory },
  { key: 'realestate',  icon: Building2 },
  { key: 'agriculture', icon: Sprout },
  { key: 'education',   icon: GraduationCap },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

export default function IndustriesGrid() {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const isRtl = locale === 'ar';

  return (
    <section
      dir={isRtl ? 'rtl' : 'ltr'}
      className="relative bg-black border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
              {t('home.industries.eyebrow', { defaultValue: '02 — Industries' })}
            </span>
            <span className="h-px w-12 bg-white/20" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.1]"
          >
            {t('home.industries.title', {
              defaultValue: 'Built for industries, not for buzzwords.',
            })}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl"
          >
            {t('home.industries.subtitle', {
              defaultValue: 'Real projects shipped across seven verticals — locally in Algeria and internationally. Each engagement starts with how the industry actually operates, not with a tech stack.',
            })}
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]"
        >
          {INDUSTRIES.map((industry, i) => {
            const Icon = industry.icon;
            const num = String(i + 1).padStart(2, '0');
            return (
              <motion.li
                key={industry.key}
                variants={fadeUp}
                className="group bg-black p-8 lg:p-10 transition-colors duration-300 hover:bg-white/[0.02]"
              >
                <div className="flex items-start justify-between mb-10">
                  <Icon
                    className="w-7 h-7 text-white/70 group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.25}
                  />
                  <span className="font-mono text-[11px] tracking-[0.15em] text-white/30">
                    {num}
                  </span>
                </div>

                <h3 className="text-xl lg:text-2xl font-normal text-white leading-snug mb-3">
                  {t(`home.industries.items.${industry.key}.title`, {
                    defaultValue: industry.key,
                  })}
                </h3>

                <p className="text-sm text-white/50 leading-relaxed min-h-[3rem]">
                  {t(`home.industries.items.${industry.key}.description`, {
                    defaultValue: '',
                  })}
                </p>
              </motion.li>
            );
          })}
        </motion.ul>

      </div>
    </section>
  );
}
