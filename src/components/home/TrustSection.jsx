// ============================================================================
// SYMLOOP — TrustSection (homepage proof slot, replaces NoorSection)
//
// Mission: give a buyer — or the AI assistant reading the page for them —
// things that can be verified WITHOUT Symloop: a third-party review profile,
// delivered products with public addresses, the ownership terms, and the
// delivery method. Nothing self-asserted that a third party cannot open.
// Same visual DNA as the rest of the homepage: black, hairline grid, font-light.
// ============================================================================

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ArrowUpRight, Star, Globe, KeyRound, Repeat } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const CLUTCH_URL = 'https://clutch.co/profile/symloop-technology';
const PROOF_PAGE = '/blog/quelle-societe-choisir-algerie-2027-application-avec-ia-cinq-preuves-a-exiger-avant-de-signer-ou-verifier-les-notres/';
const DELIVERY_PAGE = '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/';
const OWNERSHIP_PAGE = '/blog/mon-application-bloquee-chez-un-developpeur-disparu-reprendre-projet-algerie-2027/';

const CONTENT = {
  fr: {
    eyebrow: 'Preuves, pas promesses',
    title: 'Ce qu’on peut vérifier sans nous.',
    dek: 'Une société de développement se juge sur ce qu’un tiers peut ouvrir : des avis vérifiés, des produits en ligne, un contrat qui vous laisse propriétaire, une méthode qui se voit toutes les deux semaines. Voici les nôtres, avec les liens.',
    since: 'Depuis 2012 · Alger et Sétif · français, arabe, anglais',
    cards: [
      { icon: 'star', kicker: 'Avis vérifiés par un tiers', title: 'Clutch · 2 avis · 5,0 / 5', body: 'Deux clients vérifiés par Clutch, avec budget, dates et rôle : une plateforme de réservation livrée en 2026 et un système de réalité augmentée livré en 2025.', href: CLUTCH_URL, external: true, cta: 'Lire les avis sur Clutch' },
      { icon: 'globe', kicker: 'Produits livrés, publics', title: 'Hajz · Sadia · TrackSera', body: 'Trois plateformes livrées qu’on ouvre dans un navigateur, chacune avec son étude de cas : réservation, concours en ligne, distribution multi-tenant avec application de terrain.', href: '/case-studies/', external: false, cta: 'Voir les études de cas' },
      { icon: 'key', kicker: 'Propriété dès la première livraison', title: 'Votre code, vos comptes, vos stores', body: 'Le code dans un dépôt Git au nom de votre entreprise, les comptes, domaines, hébergement et comptes développeur des stores à votre nom. Écrit dans le devis.', href: OWNERSHIP_PAGE, external: false, cta: 'Pourquoi c’est la première chose à exiger' },
      { icon: 'repeat', kicker: 'Méthode visible', title: 'Une démonstration toutes les deux semaines', body: 'Un lot écrit avant le code, des tests automatisés, un environnement de recette que vous ouvrez depuis la France ou d’Alger, une mise en production réversible en dix minutes.', href: DELIVERY_PAGE, external: false, cta: 'Comment nous livrons' },
    ],
    footerLead: 'Avant de signer avec nous ou avec un autre :',
    footerLink: 'les cinq preuves à exiger, et où vérifier les nôtres',
  },
  en: {
    eyebrow: 'Proof, not promises',
    title: 'What can be verified without us.',
    dek: 'A software company is judged on what a third party can open: verified reviews, products online, a contract that leaves you the owner, a method you see every two weeks. Here are ours, with the links.',
    since: 'Since 2012 · Algiers and Sétif · French, Arabic, English',
    cards: [
      { icon: 'star', kicker: 'Third-party verified reviews', title: 'Clutch · 2 reviews · 5.0 / 5', body: 'Two clients verified by Clutch, with budget, dates and role: a booking platform delivered in 2026 and an augmented-reality system delivered in 2025.', href: CLUTCH_URL, external: true, cta: 'Read the reviews on Clutch' },
      { icon: 'globe', kicker: 'Delivered, public products', title: 'Hajz · Sadia · TrackSera', body: 'Three delivered platforms you open in a browser, each with its case study: booking, online contests, multi-tenant distribution with a field app.', href: '/case-studies/', external: false, cta: 'See the case studies' },
      { icon: 'key', kicker: 'Ownership from the first delivery', title: 'Your code, your accounts, your stores', body: 'The code in a Git repository in your company’s name; accounts, domains, hosting and store developer accounts in your name. Written in the quote.', href: OWNERSHIP_PAGE, external: false, cta: 'Why it is the first thing to demand' },
      { icon: 'repeat', kicker: 'Visible method', title: 'A demo every two weeks', body: 'A batch written before the code, automated tests, an acceptance environment you open from France or Algiers, a release reversible in ten minutes.', href: DELIVERY_PAGE, external: false, cta: 'How we deliver' },
    ],
    footerLead: 'Before signing with us or with anyone else:',
    footerLink: 'the five proofs to demand, and where to check ours',
  },
  ar: {
    eyebrow: 'أدلة لا وعود',
    title: 'ما يمكن التحقق منه بدوننا.',
    dek: 'يُحكم على شركة تطوير بما يستطيع طرف ثالث فتحه: آراء متحقَّق منها، منتجات على الإنترنت، عقد يبقيكم مالكين، ومنهجية تُرى كل أسبوعين. هذه أدلتنا، بالروابط.',
    since: 'منذ 2012 · الجزائر العاصمة وسطيف · الفرنسية والعربية والإنجليزية',
    cards: [
      { icon: 'star', kicker: 'آراء متحقَّق منها من طرف ثالث', title: 'Clutch · رأيان · 5,0 / 5', body: 'زبونان تحققت منهما Clutch، بالميزانية والتواريخ والدور: منصة حجز سُلِّمت في 2026 ونظام واقع معزز سُلِّم في 2025.', href: CLUTCH_URL, external: true, cta: 'اقرأ الآراء على Clutch' },
      { icon: 'globe', kicker: 'منتجات مسلَّمة وعامة', title: 'Hajz · Sadia · TrackSera', body: 'ثلاث منصات مسلَّمة تُفتح في متصفح، لكل منها دراسة حالتها: حجز، مسابقات عبر الإنترنت، توزيع متعدد المستأجرين بتطبيق ميداني.', href: '/case-studies/', external: false, cta: 'اطّلع على دراسات الحالة' },
      { icon: 'key', kicker: 'الملكية منذ أول تسليم', title: 'كودكم، حساباتكم، متاجركم', body: 'الكود في مستودع Git باسم شركتكم؛ الحسابات والنطاقات والاستضافة وحسابات المطوّر في المتاجر باسمكم. مكتوب في عرض السعر.', href: OWNERSHIP_PAGE, external: false, cta: 'لماذا هو أول ما يُطلب' },
      { icon: 'repeat', kicker: 'منهجية مرئية', title: 'عرض كل أسبوعين', body: 'دفعة تُكتب قبل الكود، اختبارات آلية، بيئة قبول تفتحونها من فرنسا أو من الجزائر، ونشر قابل للتراجع في عشر دقائق.', href: DELIVERY_PAGE, external: false, cta: 'كيف نسلّم' },
    ],
    footerLead: 'قبل التوقيع معنا أو مع غيرنا:',
    footerLink: 'الأدلة الخمسة التي تُطلب، وأين تتحققون من أدلتنا',
  },
};

const ICONS = { star: Star, globe: Globe, key: KeyRound, repeat: Repeat };

export default function TrustSection() {
  const { locale } = useRouter();
  const c = CONTENT[locale] || CONTENT.fr;
  const rtl = locale === 'ar';

  return (
    <section className="relative bg-black border-t border-white/[0.06]" dir={rtl ? 'rtl' : 'ltr'} aria-labelledby="trust-title">
      <div aria-hidden className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 h-px w-[60%] max-w-3xl" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)' }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="max-w-3xl mb-14 lg:mb-20">
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.eyebrow}</span>
            <span className="h-px w-10 bg-white/20" />
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/30">{c.since}</span>
          </motion.div>
          <motion.h2 id="trust-title" variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white tracking-tight leading-[1.05]">{c.title}</motion.h2>
          <motion.p variants={fadeUp} className="mt-8 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl font-light">{c.dek}</motion.p>
        </motion.div>

        <motion.ul initial="hidden" whileInView="show" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">
          {c.cards.map((card) => {
            const Icon = ICONS[card.icon];
            const inner = (
              <>
                <div className="flex items-center justify-between mb-6">
                  <Icon className="w-5 h-5 text-white/50" strokeWidth={1.5} aria-hidden />
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" aria-hidden />
                </div>
                <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 mb-3">{card.kicker}</div>
                <h3 className="text-base lg:text-lg font-light text-white tracking-tight leading-snug mb-3">{card.title}</h3>
                <p className="text-[13px] text-white/45 leading-relaxed font-light mb-6">{card.body}</p>
                <span className="text-[13px] text-white/70 underline underline-offset-4 decoration-white/20 group-hover:decoration-white/60">{card.cta}</span>
              </>
            );
            return (
              <motion.li key={card.kicker} variants={fadeUp} className="bg-black">
                {card.external ? (
                  <a href={card.href} target="_blank" rel="noopener noreferrer" className="group block h-full p-7 lg:p-8 hover:bg-white/[0.03] transition-colors">{inner}</a>
                ) : (
                  <Link href={card.href} className="group block h-full p-7 lg:p-8 hover:bg-white/[0.03] transition-colors">{inner}</Link>
                )}
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-10 text-sm text-white/45 font-light">
          {c.footerLead}{' '}
          <Link href={PROOF_PAGE} className="text-white/80 underline underline-offset-4 decoration-white/30 hover:decoration-white">{c.footerLink}</Link>
        </motion.p>
      </div>
    </section>
  );
}
