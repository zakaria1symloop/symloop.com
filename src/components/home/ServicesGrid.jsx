// ============================================================================
// SYMLOOP — ServicesGrid
// Clean, premium, no-gradient capability grid for the homepage.
// 8 service categories, solution-first language, AI-led positioning.
// Animation: scroll-triggered stagger reveal via Framer Motion.
// ============================================================================

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import {
  Brain,
  Cpu,
  Smartphone,
  Cloud,
  Radio,
  ShieldCheck,
  Compass,
  Boxes,
  ArrowUpRight,
} from 'lucide-react';

// NOTE: each service points to an EXISTING service page (we keep the working SEO).
// As we ship dedicated new pages later, we update these slugs.
// Slugs use the FR canonical (the site's primary content locale); Next.js [slug].jsx
// resolves all locales via getAllSlugPaths().
const SERVICES = [
  { key: 'ai',           slug: 'intelligence-artificielle-machine-learning-algerie', icon: Brain },
  { key: 'engineering',  slug: 'developpement-logiciel-sur-mesure-algerie',          icon: Cpu },
  { key: 'mobile',       slug: 'developpement-application-mobile-ios-android-algerie', icon: Smartphone },
  { key: 'cloud',        slug: 'devops-cloud-cybersecurite-algerie',                 icon: Cloud },
  { key: 'iot',          slug: 'solutions-iot-objets-connectes-algerie',             icon: Radio },
  { key: 'security',     slug: 'devops-cloud-cybersecurite-algerie',                 icon: ShieldCheck },
  { key: 'consulting',   slug: '',                                                    icon: Compass }, // → /services/ index until dedicated page exists
  { key: 'product',      slug: '',                                                    icon: Boxes },   // → /services/ index until dedicated page exists
];

const buildHref = (slug) => slug ? `/services/${slug}/` : '/services/';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export default function ServicesGrid() {
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
              {t('home.services.eyebrow', { defaultValue: '01 — Services' })}
            </span>
            <span className="h-px w-12 bg-white/20" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.1]"
          >
            {t('home.services.title', {
              defaultValue: 'Engineering services for organizations that build for outcomes.',
            })}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl"
          >
            {t('home.services.subtitle', {
              defaultValue: 'Eight capabilities, delivered end-to-end by a senior engineering team. Software, AI, mobile, cloud, IoT, security — under one roof.',
            })}
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]"
        >
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            const num = String(i + 1).padStart(2, '0');
            return (
              <motion.li key={service.key} variants={fadeUp} className="bg-black">
                <Link
                  href={buildHref(service.slug)}
                  className="group block h-full p-8 lg:p-10 transition-colors duration-300 hover:bg-white/[0.02] focus:outline-none focus:bg-white/[0.03]"
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
                    {t(`home.services.items.${service.key}.title`, {
                      defaultValue: service.key,
                    })}
                  </h3>

                  <p className="text-sm text-white/50 leading-relaxed mb-8 min-h-[3rem]">
                    {t(`home.services.items.${service.key}.description`, {
                      defaultValue: '',
                    })}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-white/40 group-hover:text-white transition-colors duration-300">
                    <span>
                      {t('home.services.cta', { defaultValue: 'Explore' })}
                    </span>
                    <ArrowUpRight
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.5}
                    />
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
