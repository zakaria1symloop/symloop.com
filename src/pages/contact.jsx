// ============================================================================
// SYMLOOP — /contact/
//
// Real contact page. Before this file existed, every CTA button across the
// site (homepage, services/*, insights/*, case-studies/*, locations/*,
// blog/*) pointed to /contact/ and 404'd, which then rendered the custom
// 404 page that has its own runtime-locale hydration bug. Single root cause,
// single fix.
//
// Design discipline:
//   - Locale is resolved at build time via getStaticProps and passed as a
//     prop, so the same HTML is rendered on server and client. No
//     useRouter().locale || 'fr' fallback during render → no hydration drift.
//   - Dark monochrome aesthetic matches the rest of the engineering-brief
//     site (insights, services).
//   - ContactPage + Organization + LocalBusiness JSON-LD (the latter two
//     are injected by <SEO /> automatically).
// ============================================================================

import Link from 'next/link';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight, MessageCircle, Mail, MapPin, Phone, Clock, Globe } from 'lucide-react';
import SEO from '../components/SEO';

const WA = 'https://wa.me/213549575512';
const EMAIL = 'contact@symloop.com';
// Single source of truth — matches the format displayed in Header.jsx and
// Footer.jsx so the same string appears everywhere. <bdi> handles the
// RTL isolation when rendered inside Arabic copy.
const PHONE_DISPLAY = '+213 549 57 55 12';
const PHONE_TEL = 'tel:+213549575512';
const ADDRESS_LINE_1 = 'Alger, Algérie';
const ADDRESS_LINE_2 = '16000, Wilaya d\'Alger';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const CONTENT = {
  fr: {
    seoTitle:    'Contact — Symloop Technology · Ingénierie logicielle et IA, Alger Algérie',
    seoDek:      'Parlez à l\'équipe d\'ingénieurs Symloop. Ingénierie logicielle, IA, ERP, mobile, IoT, cloud — pour entreprises algériennes, MENA et Afrique. WhatsApp, email, ou rendez-vous à Alger.',
    eyebrow:     'Contact · Symloop Technology',
    title:       'Parlez à une équipe d\'ingénieurs, pas à un commercial.',
    dek:         'Décrivez votre projet en 5 minutes. Si nous pouvons livrer, vous parlerez à un architecte solution dans les 24 heures. Si nous ne sommes pas le bon choix, nous vous le dirons et orienterons vers quelqu\'un qui peut.',
    channels: {
      heading: 'Canaux de contact',
      items: [
        { icon: 'MessageCircle', label: 'WhatsApp', value: '+213 549 57 55 12', sub: 'Réponse en moins de 4 heures sur jours ouvrés.', href: WA,        external: true },
        { icon: 'Mail',          label: 'Email',    value: EMAIL,              sub: 'Pour les briefs détaillés et les NDA.',                    href: `mailto:${EMAIL}`, external: false },
        { icon: 'Phone',         label: 'Téléphone',value: PHONE_DISPLAY,      sub: 'Lun-Jeu 09:00–18:00, Dim 10:00–14:00 (heure d\'Alger).', href: PHONE_TEL,   external: false },
      ],
    },
    location: {
      heading: 'Où nous trouver',
      addressLabel: 'Bureau Alger',
      address: [ADDRESS_LINE_1, ADDRESS_LINE_2],
      hoursLabel: 'Horaires',
      hours: 'Dimanche – Jeudi · 09:00 – 18:00',
      coverageLabel: 'Couverture',
      coverage: 'Les 58 wilayas d\'Algérie · MENA · Afrique francophone · Europe & Amérique du Nord en remote.',
    },
    formNote: {
      heading: 'Pas de formulaire — par dessein',
      body: 'Les meilleurs projets ne commencent pas par un formulaire de site web. Ils commencent par une conversation. Envoyez-nous un WhatsApp ou un email avec : (1) ce que vous voulez résoudre, (2) qui en a besoin, (3) un délai si vous en avez un. Nous revenons sous 24h avec soit un appel, soit un refus honnête.',
    },
    why: {
      heading: 'Pourquoi nous écrire',
      items: [
        'Vous évaluez une transformation IA et voulez un diagnostic honnête avant d\'engager un budget.',
        'Vous avez un système legacy qui coûte cher à maintenir et vous évaluez build vs buy.',
        'Vous lancez un produit et cherchez un partenaire ingénierie qui sait livrer en production, pas en démo.',
        'Vous voulez un second avis sur un devis d\'éditeur international.',
        'Vous opérez en Algérie, Maroc, Tunisie, Libye, Mauritanie, Mali, Égypte, Arabie Saoudite, Émirats, Koweït ou Qatar et avez besoin d\'un partenaire avec le contexte régional.',
      ],
    },
    cta:        'Démarrer la conversation',
    backHome:   'Retour à l\'accueil',
  },
  en: {
    seoTitle:    'Contact — Symloop Technology · Software Engineering and AI, Algiers Algeria',
    seoDek:      'Talk to the Symloop engineering team. Software engineering, AI, ERP, mobile, IoT, cloud — for Algerian, MENA and African companies. WhatsApp, email, or visit our Algiers office.',
    eyebrow:     'Contact · Symloop Technology',
    title:       'Talk to an engineering team, not a sales rep.',
    dek:         'Describe your project in 5 minutes. If we can ship, you will speak with a solution architect within 24 hours. If we are not the right fit, we tell you and point you to someone who is.',
    channels: {
      heading: 'Contact channels',
      items: [
        { icon: 'MessageCircle', label: 'WhatsApp', value: '+213 549 57 55 12', sub: 'Reply within 4 hours on weekdays.',                          href: WA,        external: true },
        { icon: 'Mail',          label: 'Email',    value: EMAIL,              sub: 'For detailed briefs and NDAs.',                              href: `mailto:${EMAIL}`, external: false },
        { icon: 'Phone',         label: 'Phone',    value: PHONE_DISPLAY,      sub: 'Sun-Thu 10:00-14:00, Mon-Thu 09:00-18:00 (Algiers time).',  href: PHONE_TEL,   external: false },
      ],
    },
    location: {
      heading: 'Where to find us',
      addressLabel: 'Algiers office',
      address: [ADDRESS_LINE_1, ADDRESS_LINE_2],
      hoursLabel: 'Hours',
      hours: 'Sunday – Thursday · 09:00 – 18:00',
      coverageLabel: 'Coverage',
      coverage: 'All 58 wilayas of Algeria · MENA · Francophone Africa · Europe & North America remote.',
    },
    formNote: {
      heading: 'No form — by design',
      body: 'The best projects do not start from a web form. They start from a conversation. Send us a WhatsApp or an email with: (1) what you want to solve, (2) who needs it, (3) a timeline if you have one. We respond within 24 hours with either a call or an honest decline.',
    },
    why: {
      heading: 'Why write to us',
      items: [
        'You are evaluating an AI transformation and want an honest diagnostic before committing budget.',
        'You have a legacy system that is expensive to maintain and you are evaluating build vs buy.',
        'You are launching a product and need an engineering partner that ships to production, not to demo.',
        'You want a second opinion on an international vendor quote.',
        'You operate in Algeria, Morocco, Tunisia, Libya, Mauritania, Mali, Egypt, Saudi Arabia, UAE, Kuwait or Qatar and need a partner with regional context.',
      ],
    },
    cta:        'Start the conversation',
    backHome:   'Back to home',
  },
  ar: {
    seoTitle:    'تواصل — Symloop Technology · هندسة البرمجيات والذكاء الاصطناعي، الجزائر',
    seoDek:      'تحدّث مع فريق مهندسي Symloop. هندسة برمجيات، ذكاء اصطناعي، ERP، تطبيقات جوّال، إنترنت الأشياء، سحابة — للشركات الجزائرية والمنطقة وإفريقيا. WhatsApp أو بريد إلكتروني أو زيارة مكتبنا في الجزائر العاصمة.',
    eyebrow:     'تواصل · Symloop Technology',
    title:       'تحدّث مع فريق هندسي، لا مع موظّف مبيعات.',
    dek:         'صف مشروعك في 5 دقائق. إذا كان بإمكاننا الشحن، ستتحدّث مع مهندس حلول خلال 24 ساعة. إذا لم نكن الخيار الصحيح، نخبرك ونوجّهك إلى من يستطيع.',
    channels: {
      heading: 'قنوات التواصل',
      items: [
        { icon: 'MessageCircle', label: 'واتساب',    value: '+213 549 57 55 12', sub: 'الرد خلال 4 ساعات في أيّام العمل.',                          href: WA,        external: true },
        { icon: 'Mail',          label: 'بريد إلكتروني', value: EMAIL,           sub: 'للملخّصات التفصيلية واتفاقيات السرّية.',                       href: `mailto:${EMAIL}`, external: false },
        { icon: 'Phone',         label: 'هاتف',       value: PHONE_DISPLAY,      sub: 'الأحد-الخميس 09:00 – 18:00 (توقيت الجزائر).',                 href: PHONE_TEL,   external: false },
      ],
    },
    location: {
      heading: 'أين تجدنا',
      addressLabel: 'مكتب الجزائر العاصمة',
      address: [ADDRESS_LINE_1, ADDRESS_LINE_2],
      hoursLabel: 'ساعات العمل',
      hours: 'الأحد – الخميس · 09:00 – 18:00',
      coverageLabel: 'التغطية',
      coverage: 'جميع 58 ولاية في الجزائر · المنطقة · إفريقيا الفرنكوفونية · أوروبا وأمريكا الشمالية عن بُعد.',
    },
    formNote: {
      heading: 'لا نموذج — عن قصد',
      body: 'أفضل المشاريع لا تبدأ من نموذج موقع ويب. تبدأ من محادثة. أرسل لنا WhatsApp أو بريداً إلكترونياً مع: (1) ما تريد حلّه، (2) من يحتاجه، (3) جدول زمني إن وُجد. نرد خلال 24 ساعة بمكالمة أو برفض صادق.',
    },
    why: {
      heading: 'لماذا تكتب لنا',
      items: [
        'تقيّم تحوّلاً بالذكاء الاصطناعي وتريد تشخيصاً صادقاً قبل التزام الميزانية.',
        'لديك نظام قديم مكلف الصيانة وتقيّم البناء مقابل الشراء.',
        'تُطلق منتجاً وتحتاج شريكاً هندسياً يشحن إلى الإنتاج، لا إلى العرض التوضيحي.',
        'تريد رأياً ثانياً على عرض من بائع دولي.',
        'تعمل في الجزائر أو المغرب أو تونس أو ليبيا أو موريتانيا أو مالي أو مصر أو السعودية أو الإمارات أو الكويت أو قطر وتحتاج شريكاً بسياق إقليمي.',
      ],
    },
    cta:        'ابدأ المحادثة',
    backHome:   'العودة إلى الرئيسية',
  },
};

const iconMap = { MessageCircle, Mail, Phone, MapPin, Clock, Globe };

export default function ContactPage({ locale }) {
  // Locale is resolved at build time and passed via getStaticProps, so the
  // rendered HTML matches server and client → no hydration mismatch.
  const isRtl = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.fr;

  const contactPageLd = {
    '@context':      'https://schema.org',
    '@type':         'ContactPage',
    name:            c.seoTitle,
    description:     c.seoDek,
    url:             'https://symloop.com/contact/',
    mainEntity: {
      '@type': 'Organization',
      name:    'Symloop Technology',
      url:     'https://symloop.com',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+213-549-575-512',
          contactType: 'sales',
          availableLanguage: ['French', 'Arabic', 'English'],
          areaServed: ['DZ', 'TN', 'MA', 'LY', 'MR', 'ML', 'EG', 'SA', 'AE', 'QA', 'KW', 'BH', 'OM', 'JO', 'LB'],
          email: EMAIL,
        },
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS_LINE_1,
        addressLocality: 'Alger',
        addressRegion: 'Alger',
        postalCode: '16000',
        addressCountry: 'DZ',
      },
    },
  };

  const breadcrumbs = [
    { name: 'Home',    url: 'https://symloop.com/' },
    { name: 'Contact', url: 'https://symloop.com/contact/' },
  ];

  return (
    <>
      <SEO
        title={c.seoTitle}
        description={c.seoDek}
        keywords="contact symloop, contact symloop technology, ingénierie logicielle algérie contact, software engineering algeria contact, AI company algeria contact, devis logiciel algérie, quote software algeria, symloop alger, symloop bureau, symloop email, symloop whatsapp, symloop téléphone, contacter symloop, talk to symloop, symloop contact form, symloop MENA contact, contact developpeur algerie, contact agence digitale alger"
        structuredData={contactPageLd}
        breadcrumbs={breadcrumbs}
      />

      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white min-h-screen">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-20">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.eyebrow}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05] max-w-4xl">
                {c.title}
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-8 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">
                {c.dek}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── Contact channels grid ────────────────────────────────────── */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger}>

              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-12">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.channels.heading}</span>
                <span className="h-px flex-1 bg-white/10" />
              </motion.div>

              <ul className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]">
                {c.channels.items.map((item) => {
                  const Icon = iconMap[item.icon] || Mail;
                  const linkProps = item.external
                    ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
                    : { href: item.href };
                  return (
                    <motion.li key={item.label} variants={fadeUp} className="bg-black">
                      <a {...linkProps} className="group block p-8 lg:p-10 h-full transition-colors hover:bg-white/[0.025]">
                        <Icon className="w-5 h-5 text-white/40 group-hover:text-white mb-6 transition-colors" strokeWidth={1.5} />
                        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-3">{item.label}</div>
                        <h3 className="text-xl lg:text-2xl font-light text-white mb-4 leading-snug"><bdi>{item.value}</bdi></h3>
                        <p className="text-sm text-white/55 leading-relaxed">{item.sub}</p>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

            </motion.div>
          </div>
        </section>

        {/* ── Location + hours + coverage ──────────────────────────────── */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger}>

              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-12">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.location.heading}</span>
                <span className="h-px flex-1 bg-white/10" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                <motion.div variants={fadeUp}>
                  <MapPin className="w-5 h-5 text-white/40 mb-4" strokeWidth={1.5} />
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">{c.location.addressLabel}</div>
                  {c.location.address.map((line, i) => (
                    <p key={i} className="text-lg font-light text-white/85 leading-snug">{line}</p>
                  ))}
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Clock className="w-5 h-5 text-white/40 mb-4" strokeWidth={1.5} />
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">{c.location.hoursLabel}</div>
                  <p className="text-lg font-light text-white/85 leading-snug">{c.location.hours}</p>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Globe className="w-5 h-5 text-white/40 mb-4" strokeWidth={1.5} />
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">{c.location.coverageLabel}</div>
                  <p className="text-base font-light text-white/75 leading-relaxed">{c.location.coverage}</p>
                </motion.div>
              </div>

            </motion.div>
          </div>
        </section>

        {/* ── Form-note + why-write-us ─────────────────────────────────── */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="lg:col-span-5">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.formNote.heading}</span>
                <span className="h-px flex-1 bg-white/10" />
              </motion.div>
              <motion.p variants={fadeUp} className="text-lg lg:text-xl text-white/75 leading-relaxed font-light">
                {c.formNote.body}
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="lg:col-span-7">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.why.heading}</span>
                <span className="h-px flex-1 bg-white/10" />
              </motion.div>
              <ul className="space-y-4">
                {c.why.items.map((item, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-start gap-5">
                    <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 pt-1.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-base lg:text-lg text-white/75 leading-relaxed font-light">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </section>

        {/* ── Final CTA ────────────────────────────────────────────────── */}
        <section>
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="flex flex-col items-start gap-10">
              <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1] max-w-3xl">
                {c.cta} →
              </motion.h2>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <a href={WA} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors">
                  <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
                  <span>WhatsApp</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
                </a>
                <a href={`mailto:${EMAIL}`} className="group inline-flex items-center gap-3 border border-white/20 px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/5 transition-colors">
                  <Mail className="w-4 h-4" strokeWidth={1.75} />
                  <span>{EMAIL}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
                </a>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Link href="/" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors">
                  {isRtl ? <ArrowRight className="w-3.5 h-3.5 rotate-180" strokeWidth={1.5} /> : <ArrowRight className="w-3.5 h-3.5 rotate-180" strokeWidth={1.5} />}
                  <span>{c.backHome}</span>
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
  // Pass locale as a prop so the page renders deterministically on both
  // server and client. No useRouter().locale runtime fallback inside the
  // component → no hydration mismatch.
  return {
    props: {
      locale: locale || 'fr',
      ...(await serverSideTranslations(locale || 'fr', ['common'])),
    },
  };
}
