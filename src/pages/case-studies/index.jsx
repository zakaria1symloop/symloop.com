// ============================================================================
// SYMLOOP — Case Studies hub (Coming Soon)
//
// Temporarily replaced with a Coming Soon stub while the case-studies
// catalog is being curated. Individual case-study pages
// (/case-studies/hajz, /case-studies/sadia, /case-studies/tracksera)
// remain reachable directly.
// ============================================================================

import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';

const PAGE = {
  en: {
    eyebrow:  'Case Studies · Coming Soon',
    title:    'Production work — coming soon.',
    dek:      'We are curating a new case-studies catalog with deeper engineering detail on every project. Until then, get in touch and we will walk you through relevant production work in person.',
    metaTitle: 'Case Studies — Coming Soon | Symloop Technology',
    metaDesc:  'A new Symloop Technology case-studies catalog is coming soon. Contact us to see relevant production work for your sector.',
    contact:   'Contact us',
    home:      'Back to home',
  },
  fr: {
    eyebrow:  'Études de cas · Bientôt disponible',
    title:    'Nos livraisons en production — bientôt disponibles.',
    dek:      "Nous préparons un nouveau catalogue d'études de cas avec plus de détail d'ingénierie sur chaque projet. En attendant, contactez-nous et nous vous présenterons en direct les travaux de production pertinents pour votre secteur.",
    metaTitle: 'Études de cas — Bientôt disponible | Symloop Technology',
    metaDesc:  "Un nouveau catalogue d'études de cas Symloop Technology arrive bientôt. Contactez-nous pour découvrir des projets en production pertinents pour votre secteur.",
    contact:   'Nous contacter',
    home:      "Retour à l'accueil",
  },
  ar: {
    eyebrow:  'دراسات الحالة · قريباً',
    title:    'أعمال الإنتاج — قريباً.',
    dek:      'نقوم بتنسيق كتالوج جديد لدراسات الحالة بتفاصيل هندسية أعمق لكل مشروع. حتى ذلك الحين، تواصل معنا وسنطلعك مباشرةً على أعمال إنتاج ذات صلة بقطاعك.',
    metaTitle: 'دراسات الحالة — قريباً | سيملوب تكنولوجي',
    metaDesc:  'كتالوج جديد لدراسات حالة سيملوب تكنولوجي قادم قريباً. تواصل معنا لاستعراض أعمال إنتاج ذات صلة بقطاعك.',
    contact:   'تواصل معنا',
    home:      'العودة إلى الرئيسية',
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function CaseStudiesComingSoon() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const p = PAGE[locale] || PAGE.en;

  return (
    <>
      <SEO
        title={p.metaTitle}
        description={p.metaDesc}
        canonical="https://symloop.com/case-studies/"
        noindex
      />

      <main
        dir={isRtl ? 'rtl' : 'ltr'}
        className="min-h-screen bg-black text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
             style={{ backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.5), transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.4), transparent 50%)' }} />

        <section className="relative max-w-4xl mx-auto px-6 lg:px-10 pt-40 pb-32">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-10">
              {p.eyebrow}
            </div>

            <h1 className="text-[44px] md:text-[64px] leading-[1.05] font-light tracking-tight text-white mb-10 max-w-3xl">
              {p.title}
            </h1>

            <p className="text-[17px] md:text-[19px] leading-[1.65] text-white/60 font-light max-w-2xl mb-14">
              {p.dek}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact/"
                className="group inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/60 transition-colors text-[13px] tracking-[0.05em]"
              >
                <span>{p.contact}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 text-white/50 hover:text-white text-[13px] tracking-[0.05em] transition-colors"
              >
                {p.home}
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}
