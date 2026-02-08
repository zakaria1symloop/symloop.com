import React, { useState, useRef, useEffect, useCallback } from "react";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ArrowLeft, Search, Palette, Code2, Rocket, Smartphone, Globe, Database, ShoppingCart, Building, TrendingUp, Zap, Shield, Users, Mail, MessageCircle, Phone } from 'lucide-react';

import ServicesHero from '../../components/services/ServicesHero';
import ServicesGrid from '../../components/services/ServicesGrid';
import QuoteModal from '../../components/services/QuoteModal';
import ConsultationModal from '../../components/services/ConsultationModal';

import { getServicesData, getStatsData, getIndustriesData } from '../../components/services/ServicesData';

/* ═══════════════════════════════════════════════════════════════
   INLINE SUB-COMPONENTS
═══════════════════════════════════════════════════════════════ */

/* 1. AnimatedCounter — counts 0→target when scrolled into view */
function AnimatedCounter({ target, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const numTarget = parseInt(target, 10);
    if (isNaN(numTarget)) { setCount(target); return; }
    const duration = 2000;
    const startTime = performance.now();
    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * numTarget));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* 2. SweepLines — 3 horizontal gradient lines sweeping across Trusted By */
function SweepLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[10, 14, 18].map((dur, i) => (
        <div
          key={i}
          className="absolute h-px w-1/2"
          style={{
            top: `${25 + i * 25}%`,
            background: `linear-gradient(90deg, transparent, rgba(99,102,241,${0.15 - i * 0.03}), transparent)`,
            animation: `sweep-line ${dur}s linear infinite`,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

/* 3. AuroraWavesPurple — 3 purple/magenta wave layers for Portfolio */
function AuroraWavesPurple() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] opacity-40"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(147,51,234,0.08), transparent)',
          animation: 'aurora-wave-1 12s ease-in-out infinite',
        }} />
      <div className="absolute -top-1/3 -right-1/4 w-[130%] h-[130%] opacity-30"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 60% 40%, rgba(236,72,153,0.06), transparent)',
          animation: 'aurora-wave-2 15s ease-in-out infinite',
        }} />
      <div className="absolute -bottom-1/4 left-1/4 w-[120%] h-[120%] opacity-25"
        style={{
          background: 'radial-gradient(ellipse 60% 70% at 40% 60%, rgba(147,51,234,0.07), transparent)',
          animation: 'aurora-wave-3 18s ease-in-out infinite',
        }} />
    </div>
  );
}

/* 4. OrbitRingsCompact — 2 rotating ring borders for Talk to Us */
function OrbitRingsCompact() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full border border-white/[0.04]"
        style={{ top: '50%', left: '50%', animation: 'orbit-spin 20s linear infinite' }} />
      <div className="absolute w-[700px] h-[700px] rounded-full border border-dashed border-white/[0.03]"
        style={{ top: '50%', left: '50%', animation: 'orbit-spin 30s linear infinite reverse' }} />
    </div>
  );
}

/* 5. GlowRingCTA — 2 rotating ring borders for Footer CTA */
function GlowRingCTA() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          top: '50%', left: '50%',
          border: '1px solid rgba(99,102,241,0.08)',
          animation: 'orbit-spin 20s linear infinite',
        }} />
      <div className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          top: '50%', left: '50%',
          border: '1px solid rgba(147,51,234,0.06)',
          animation: 'orbit-spin 25s linear infinite reverse',
        }} />
    </div>
  );
}

/* 6. TimelineGlowLine — Vertical line with traveling pulse dot */
function TimelineGlowLine() {
  return (
    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5">
      <div className="w-full h-full bg-gradient-to-b from-transparent via-blue-500/40 to-transparent" />
      <div
        className="absolute w-3 h-3 -left-[5px] rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
        style={{ animation: 'travelDown 4s ease-in-out infinite' }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STATIC DATA
═══════════════════════════════════════════════════════════════ */

const clientLogos = [
  { name: 'Renault', src: '/clients/Renault.png' },
  { name: 'Del Monte', src: '/clients/Logo_Del_Monte.svg.png' },
  { name: 'Sadia', src: '/clients/Logo-sadia.svg.png' },
  { name: 'Epson', src: '/clients/Epson.png' },
  { name: 'Offto', src: '/clients/Offto.png' },
  { name: 'Sunny', src: '/clients/Sunny.png' },
  { name: 'Barugzai', src: '/clients/barugzai.png' },
  { name: 'El Ibtissama', src: '/clients/el-ibtissama.png' },
  { name: 'SPN Events', src: '/clients/spn-events.jpg' },
  { name: 'Commune de Sétif', src: '/clients/commune-setif.jpeg' },
  { name: 'Synronose', src: '/clients/synronose.png' },
  { name: 'Avé', src: '/clients/ave.png' },
  { name: 'Clutch', src: '/Clutch-mobile-app-developers.png' },
];

const portfolioProjects = [
  {
    id: 1,
    category: 'erp',
    client: 'SAIDAL',
    technologies: ['Java Spring', 'Oracle', 'Angular', 'Docker'],
    results: { efficiency: '+45%', cost: '-30%', compliance: '100%' },
    color: 'from-blue-500 to-purple-600',
    shadowColor: 'rgba(99,102,241,0.3)',
    icon: Database,
  },
  {
    id: 2,
    category: 'mobile',
    client: 'CIB Bank',
    technologies: ['Flutter', 'Node.js', 'PostgreSQL', 'Redis'],
    results: { users: '500k+', transactions: '2M+/mo', rating: '4.8/5' },
    color: 'from-green-500 to-teal-600',
    shadowColor: 'rgba(34,197,94,0.3)',
    icon: Smartphone,
  },
  {
    id: 3,
    category: 'ecommerce',
    client: 'Jumia DZ',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'AWS'],
    results: { gmv: '$2.5M', vendors: '1000+', orders: '50k/mo' },
    color: 'from-orange-500 to-red-600',
    shadowColor: 'rgba(249,115,22,0.3)',
    icon: ShoppingCart,
  },
  {
    id: 5,
    category: 'mobile',
    client: 'Yassir',
    technologies: ['React Native', 'Node.js', 'Redis', 'PostgreSQL'],
    results: { users: '300k+', rides: '100k/mo', cities: '12' },
    color: 'from-indigo-500 to-purple-600',
    shadowColor: 'rgba(129,140,248,0.3)',
    icon: Globe,
  },
];

const industryColors = ['amber', 'red', 'blue', 'green', 'purple', 'lime'];
const industryGradients = [
  'from-amber-500/20 to-amber-600/5',
  'from-red-500/20 to-red-600/5',
  'from-blue-500/20 to-blue-600/5',
  'from-green-500/20 to-green-600/5',
  'from-purple-500/20 to-purple-600/5',
  'from-lime-500/20 to-lime-600/5',
];
const industryHoverShadows = [
  '0 0 40px rgba(245,158,11,0.15)',
  '0 0 40px rgba(239,68,68,0.15)',
  '0 0 40px rgba(59,130,246,0.15)',
  '0 0 40px rgba(34,197,94,0.15)',
  '0 0 40px rgba(147,51,234,0.15)',
  '0 0 40px rgba(132,204,22,0.15)',
];
const industryBorderColors = [
  'rgba(245,158,11,0.3)',
  'rgba(239,68,68,0.3)',
  'rgba(59,130,246,0.3)',
  'rgba(34,197,94,0.3)',
  'rgba(147,51,234,0.3)',
  'rgba(132,204,22,0.3)',
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
═══════════════════════════════════════════════════════════════ */

export default function SymloopITServicesPage() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isRTL = router.locale === 'ar';
  const locale = router.locale;

  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("tous");

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', locale || 'fr');
    }
  }, [isRTL, locale]);

  const services = getServicesData(t, router);
  const stats = getStatsData(t);
  const industries = getIndustriesData(t);

  /* i18n helper */
  const tx = (ar, en, fr) => locale === 'ar' ? ar : locale === 'en' ? en : fr;

  /* Portfolio i18n */
  const portfolioI18n = {
    1: {
      title: tx('نظام ERP للأدوية SAIDAL', 'SAIDAL Pharma ERP', 'ERP SAIDAL Pharmaceutiques'),
      desc: tx(
        'نظام تخطيط موارد متكامل لإدارة الإنتاج الصيدلاني وتتبع الأدوية عبر 58 ولاية.',
        'Complete ERP for pharmaceutical production management and drug traceability across 58 provinces.',
        'ERP complet pour la gestion de production pharmaceutique et traçabilité sur 58 wilayas.'
      ),
    },
    2: {
      title: tx('تطبيق CIB Bank للخدمات المصرفية', 'CIB Bank Mobile App', 'Application Mobile CIB Bank'),
      desc: tx(
        'تطبيق مصرفي مع المصادقة البيومترية والتحويلات الفورية ومدفوعات QR Code.',
        'Banking app with biometric auth, instant transfers, and QR Code merchant payments.',
        'App bancaire avec authentification biométrique, virements instantanés et paiement QR Code.'
      ),
    },
    3: {
      title: tx('منصة جوميا الجزائر للتجارة', 'Jumia DZ Marketplace', 'Plateforme E-commerce Jumia DZ'),
      desc: tx(
        'منصة تجارة إلكترونية متكاملة مع الدفع الإلكتروني والتوصيل في الوقت الحقيقي والتوصيات الذكية.',
        'Full e-commerce platform with integrated payments, real-time delivery tracking, and AI recommendations.',
        'Plateforme e-commerce complète avec paiement intégré, suivi livraison temps réel et recommandations IA.'
      ),
    },
    5: {
      title: tx('تطبيق Yassir الجزائر', 'Yassir Algeria App', 'App Mobile Yassir Algeria'),
      desc: tx(
        'تطبيق فائق للنقل والتوصيل مع تحديد المواقع في الوقت الحقيقي والدفع عبر الهاتف.',
        'Super app for transport & delivery with real-time GPS tracking and mobile payments.',
        'Super application transport & livraison avec GPS temps réel et paiement mobile intégré.'
      ),
    },
  };

  /* Process steps */
  const processSteps = [
    {
      icon: Search,
      title: tx('الاكتشاف', 'Discovery', 'Découverte'),
      desc: tx(
        'نحلل احتياجاتك وأهدافك ونحدد النطاق والمتطلبات التقنية.',
        'We analyze your needs, goals, and define the scope and technical requirements.',
        'Nous analysons vos besoins, objectifs, et définissons le périmètre et les exigences techniques.'
      ),
    },
    {
      icon: Palette,
      title: tx('التصميم', 'Design', 'Design'),
      desc: tx(
        'نصمم واجهات مستخدم أنيقة وتجربة سلسة مع نماذج أولية تفاعلية.',
        'We craft elegant UI/UX with interactive prototypes and seamless user journeys.',
        'Nous concevons des interfaces élégantes avec prototypes interactifs et parcours utilisateur fluides.'
      ),
    },
    {
      icon: Code2,
      title: tx('التطوير', 'Development', 'Développement'),
      desc: tx(
        'تطوير سريع مع أحدث التقنيات ومراجعة الشفرة المستمرة والاختبار الآلي.',
        'Agile development with cutting-edge tech, continuous code review, and automated testing.',
        'Développement agile avec technologies de pointe, revue de code continue et tests automatisés.'
      ),
    },
    {
      icon: Rocket,
      title: tx('التسليم', 'Delivery', 'Livraison'),
      desc: tx(
        'نشر وإطلاق مع مراقبة الأداء ودعم ما بعد الإطلاق على مدار الساعة.',
        'Deployment & launch with performance monitoring and 24/7 post-launch support.',
        'Déploiement & lancement avec monitoring de performance et support post-lancement 24/7.'
      ),
    },
  ];

  /* Industries names + descriptions (inline translations) */
  const industryNames = [
    tx('الصناعة', 'Manufacturing', 'Industrie'),
    tx('الصحة', 'Healthcare', 'Santé'),
    tx('التعليم', 'Education', 'Éducation'),
    tx('التجارة', 'Commerce', 'Commerce'),
    tx('البنوك', 'Banking', 'Banque'),
    tx('الزراعة', 'Agriculture', 'Agriculture'),
  ];
  const industryDescriptions = [
    tx('أنظمة إنتاج ومراقبة ذكية', 'Smart production & monitoring systems', 'Systèmes de production & monitoring intelligents'),
    tx('حلول رقمية صحية متوافقة', 'Compliant digital health solutions', 'Solutions e-santé conformes & sécurisées'),
    tx('منصات تعليم إلكتروني حديثة', 'Modern e-learning platforms', 'Plateformes e-learning modernes'),
    tx('متاجر إلكترونية متكاملة', 'Full-featured e-commerce stores', 'Boutiques e-commerce performantes'),
    tx('تطبيقات مصرفية آمنة', 'Secure banking applications', 'Applications bancaires sécurisées'),
    tx('أنظمة زراعة ذكية ومتصلة', 'Smart & connected agriculture systems', 'Agriculture intelligente & connectée'),
  ];

  /* Trusted By stats */
  const trustedStats = [
    { value: '50+', label: tx('عميل', 'Clients', 'Clients'), dotColor: 'bg-blue-400' },
    { value: '70+', label: tx('مشروع', 'Projects', 'Projets'), dotColor: 'bg-purple-400' },
    { value: '98%', label: tx('رضا العملاء', 'Satisfaction', 'Satisfaction'), dotColor: 'bg-green-400' },
    { value: 'MENA', label: tx('تغطية إقليمية', 'Coverage', 'Couverture'), dotColor: 'bg-amber-400' },
  ];

  /* Differentiators for "Why Choose Us" */
  const differentiators = [
    {
      icon: Zap,
      title: tx('تسليم سريع', 'Rapid Delivery', 'Livraison Rapide'),
      desc: tx(
        'دورات تطوير سريعة مع نتائج ملموسة في أسابيع.',
        'Fast development cycles with tangible results in weeks, not months.',
        'Cycles de développement rapides avec des résultats tangibles en semaines.'
      ),
      accentColor: 'from-amber-400 to-orange-500',
    },
    {
      icon: Shield,
      title: tx('أمان المؤسسات', 'Enterprise Security', 'Sécurité Enterprise'),
      desc: tx(
        'حماية على مستوى المؤسسات مع تشفير وتدقيق مستمر.',
        'Enterprise-grade protection with encryption, auditing, and compliance built-in.',
        'Protection de niveau entreprise avec chiffrement, audit et conformité intégrés.'
      ),
      accentColor: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Users,
      title: tx('دعم مخصص', 'Dedicated Support', 'Support Dédié'),
      desc: tx(
        'فريق مخصص متاح على مدار الساعة لضمان نجاح مشروعك.',
        'A dedicated team available 24/7 to ensure your project succeeds.',
        'Une équipe dédiée disponible 24/7 pour garantir le succès de votre projet.'
      ),
      accentColor: 'from-purple-400 to-pink-500',
    },
  ];

  /* Contact methods for "Talk to Us" */
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      desc: tx('راسلنا مباشرة عبر واتساب', 'Message us directly on WhatsApp', 'Écrivez-nous directement sur WhatsApp'),
      cta: tx('ابدأ المحادثة', 'Start Chat', 'Démarrer le Chat'),
      href: 'https://wa.me/213549575512',
      color: 'from-green-400 to-emerald-500',
      borderColor: 'rgba(34,197,94,0.3)',
      shadowColor: '0 0 30px rgba(34,197,94,0.15)',
    },
    {
      icon: Phone,
      title: tx('اتصل بنا', 'Call Us', 'Appelez-nous'),
      desc: tx('تحدث مع فريقنا مباشرة', 'Speak with our team directly', 'Parlez directement avec notre équipe'),
      cta: tx('اتصل الآن', 'Call Now', 'Appeler Maintenant'),
      href: 'tel:+213549575512',
      color: 'from-blue-400 to-indigo-500',
      borderColor: 'rgba(59,130,246,0.3)',
      shadowColor: '0 0 30px rgba(59,130,246,0.15)',
    },
    {
      icon: Mail,
      title: tx('البريد الإلكتروني', 'Email', 'Email'),
      desc: tx('أرسل لنا تفاصيل مشروعك', 'Send us your project details', 'Envoyez-nous les détails de votre projet'),
      cta: tx('أرسل بريد', 'Send Email', 'Envoyer un Email'),
      href: 'mailto:contact@symloop.com',
      color: 'from-purple-400 to-violet-500',
      borderColor: 'rgba(147,51,234,0.3)',
      shadowColor: '0 0 30px rgba(147,51,234,0.15)',
    },
  ];

  /* Why Choose Us stats */
  const whyStats = [
    { target: '70', suffix: '+', label: tx('مشروع', 'Projects', 'Projets'), borderColor: 'border-t-blue-500' },
    { target: '98', suffix: '%', label: tx('رضا العملاء', 'Satisfaction', 'Satisfaction'), borderColor: 'border-t-green-500' },
    { target: '5', suffix: '+', label: tx('سنوات خبرة', 'Years', 'Années'), borderColor: 'border-t-purple-500' },
    { target: '24/7', suffix: '', label: tx('دعم فني', 'Support', 'Support'), borderColor: 'border-t-amber-500' },
  ];

  /* 3D tilt handler for Portfolio */
  const handleTilt = useCallback((e, cardRef) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  }, []);

  const resetTilt = useCallback((cardRef) => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  }, []);

  return (
    <>
      <Head>
        <title>{t('servicesPage.title')}</title>
        <meta name="description" content={t('servicesPage.description')} />
        <meta name="keywords" content={t('servicesPage.keywords')} />
        <meta property="og:title" content={t('servicesPage.title')} />
        <meta property="og:description" content={t('servicesPage.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://symloop.com${router.asPath}`} />
        <meta property="og:image" content="https://symloop.com/assets/symloop-mena-services.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('servicesPage.title')} />
        <meta name="twitter:description" content={t('servicesPage.description')} />
        <link rel="canonical" href={`https://symloop.com${router.asPath}`} />

        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/services" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/en/services" />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/services" />
        <link rel="alternate" hrefLang="x-default" href="https://symloop.com/services" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Symloop",
              "url": "https://symloop.com",
              "description": t('servicesPage.description'),
              "serviceArea": {
                "@type": "Place",
                "name": "MENA"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": t('services.catalog.name'),
                "itemListElement": services.slice(0, 5).map(service => ({
                  "@type": "Offer",
                  "name": service.title,
                  "description": service.description,
                  "price": service.estimatedPrice,
                  "priceCurrency": locale === 'ar' ? 'SAR' : locale === 'en' ? 'USD' : 'EUR'
                }))
              }
            })
          }}
        />
      </Head>

      <div className={`min-h-screen bg-black ${isRTL ? 'font-arabic' : ''}`}>
        {/* ══════════════════════════════════════════════════════════
            1. HERO (kept)
        ══════════════════════════════════════════════════════════ */}
        <ServicesHero
          stats={stats}
          onConsultationClick={() => setConsultationModalOpen(true)}
          onQuoteClick={() => setQuoteModalOpen(true)}
        />

        {/* ══════════════════════════════════════════════════════════
            2. SERVICES GRID (kept)
        ══════════════════════════════════════════════════════════ */}
        <ServicesGrid
          services={services}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onConsultationClick={() => setConsultationModalOpen(true)}
        />

        {/* ══════════════════════════════════════════════════════════
            3. WHY CHOOSE US — Navy bg + dot matrix + floating orbs
               Animated counters left, differentiator cards right
        ══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-24 sm:py-32" style={{ backgroundColor: '#050510' }}>
          {/* Dot matrix background */}
          <div className="absolute inset-0 opacity-100" style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }} />

          {/* Floating orbs */}
          <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full animate-float1 opacity-100"
            style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />
          <div className="absolute bottom-20 right-[15%] w-80 h-80 rounded-full animate-float2 opacity-100"
            style={{ background: 'radial-gradient(circle, rgba(147,51,234,0.07) 0%, transparent 70%)', filter: 'blur(80px)' }} />

          <div className="relative z-10 container mx-auto px-6">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-indigo-400/60 mb-4">
                {tx('لماذا نحن', 'Why Choose Us', 'Pourquoi Nous Choisir')}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                {tx(
                  'أرقام تتحدث عن خبرتنا',
                  'Numbers That Speak for Our Expertise',
                  'Des Chiffres qui Parlent de Notre Expertise'
                )}
              </h2>
            </motion.div>

            {/* 2-column layout */}
            <div className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-start ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
              {/* Left: 2x2 stats grid with animated counters */}
              <div className="w-full lg:w-[40%]">
                <div className="grid grid-cols-2 gap-4">
                  {whyStats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative rounded-2xl bg-white/[0.04] border border-white/[0.08] p-6 text-center border-t-2 ${stat.borderColor} hover:bg-white/[0.07] transition-all duration-500`}
                    >
                      <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                        {stat.target === '24/7' ? (
                          <span>24/7</span>
                        ) : (
                          <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                        )}
                      </div>
                      <div className="text-sm text-white/40">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: 3 differentiator cards */}
              <div className="w-full lg:w-[60%] space-y-4">
                {differentiators.map((diff, i) => {
                  const DiffIcon = diff.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.15 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className={`relative flex items-start gap-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] p-6 hover:bg-white/[0.06] hover:border-white/[0.14] transition-all duration-500 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                        {/* Gradient accent bar */}
                        <div className={`absolute top-0 bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-1 rounded-full bg-gradient-to-b ${diff.accentColor}`} />

                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${diff.accentColor} flex items-center justify-center shadow-lg`}>
                          <DiffIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-white/90 transition-colors">{diff.title}</h3>
                          <p className="text-sm text-white/40 leading-relaxed">{diff.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            4. TRUSTED BY — Sweep lines + Marquee + Glass pill stats
        ══════════════════════════════════════════════════════════ */}
        <section className="relative bg-black overflow-hidden py-20 sm:py-28">
          {/* Animated sweep lines */}
          <SweepLines />

          <div className="relative z-10 container mx-auto px-6">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-white/30 mb-4">
                {tx('يثقون بنا', 'Trusted By', 'Ils nous font confiance')}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                {tx(
                  'شركاؤنا حول العالم',
                  'Our Partners Worldwide',
                  'Nos Partenaires dans le Monde'
                )}
              </h2>
            </motion.div>

            {/* Marquee Row 1 — scrolls left */}
            <div className="relative mb-6 overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
              <div className="flex animate-scroll-long" style={{ width: 'max-content' }}>
                {[...clientLogos, ...clientLogos].map((logo, i) => (
                  <div key={`row1-${i}`} className="flex-shrink-0 mx-6 sm:mx-10 flex items-center justify-center h-16 w-28 sm:w-36 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500">
                    <Image src={logo.src} alt={logo.name} width={120} height={48} className="object-contain max-h-12" />
                  </div>
                ))}
              </div>
            </div>

            {/* Marquee Row 2 — scrolls right */}
            <div className="relative mb-16 overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
              <div className="flex animate-scroll-long-reverse" style={{ width: 'max-content' }}>
                {[...clientLogos.slice().reverse(), ...clientLogos.slice().reverse()].map((logo, i) => (
                  <div key={`row2-${i}`} className="flex-shrink-0 mx-6 sm:mx-10 flex items-center justify-center h-16 w-28 sm:w-36 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500">
                    <Image src={logo.src} alt={logo.name} width={120} height={48} className="object-contain max-h-12" />
                  </div>
                ))}
              </div>
            </div>

            {/* Glass pill stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 sm:gap-6"
            >
              {trustedStats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3 rounded-full px-6 py-3 bg-white/[0.05] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/[0.14] transition-all duration-400">
                  <div className={`w-2 h-2 rounded-full ${stat.dotColor}`} />
                  <span className="text-lg font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">{stat.value}</span>
                  <span className="text-sm text-white/40">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Portfolio section removed for now */}

        {/* ══════════════════════════════════════════════════════════
            6. HOW WE WORK — Vertical Timeline
        ══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-24 sm:py-32" style={{ backgroundColor: '#030308' }}>
          <div className="relative z-10 container mx-auto px-6">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-blue-400/60 mb-4">
                {tx('منهجيتنا', 'Our Process', 'Notre Méthode')}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {tx(
                  'كيف نعمل',
                  'How We Work',
                  'Comment Nous Travaillons'
                )}
              </h2>
              <p className="text-lg text-white/40 max-w-2xl mx-auto">
                {tx(
                  'منهجية مثبتة تضمن نتائج استثنائية في كل مرة.',
                  'A proven methodology that delivers exceptional results every time.',
                  'Une méthodologie éprouvée qui garantit des résultats exceptionnels à chaque fois.'
                )}
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">
              {/* Center line — desktop only */}
              <div className="hidden lg:block">
                <TimelineGlowLine />
              </div>

              {/* Mobile line — left side */}
              <div className="lg:hidden absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />

              <div className="space-y-12 lg:space-y-16">
                {processSteps.map((step, index) => {
                  const StepIcon = step.icon;
                  const isEven = index % 2 === 0;
                  const sideClass = isRTL
                    ? (isEven ? 'lg:flex-row-reverse lg:text-left' : 'lg:flex-row lg:text-right')
                    : (isEven ? 'lg:flex-row lg:text-right' : 'lg:flex-row-reverse lg:text-left');

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isEven ? (isRTL ? 50 : -50) : (isRTL ? -50 : 50) }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative flex items-center gap-8 ${sideClass}`}
                    >
                      {/* Content card — desktop half */}
                      <div className="hidden lg:block w-[calc(50%-40px)]">
                        <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] p-6 hover:bg-white/[0.06] hover:border-white/[0.14] transition-all duration-500">
                          <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                          <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>

                      {/* Glowing node on center line — desktop */}
                      <div className="hidden lg:flex items-center justify-center relative z-10 flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                          <StepIcon className="w-5 h-5 text-white" />
                        </div>
                        {/* Pulsing ring */}
                        <div className="absolute w-12 h-12 rounded-full border border-blue-400/40" style={{ animation: 'pingSlow 3s ease-in-out infinite' }} />
                      </div>

                      {/* Empty spacer — desktop */}
                      <div className="hidden lg:block w-[calc(50%-40px)]" />

                      {/* Mobile layout: icon on left line + card */}
                      <div className="lg:hidden flex items-start gap-5 w-full">
                        <div className="relative z-10 flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                            <StepIcon className="w-5 h-5 text-white" />
                          </div>
                          <div className="absolute w-12 h-12 top-0 left-0 rounded-full border border-blue-400/40" style={{ animation: 'pingSlow 3s ease-in-out infinite' }} />
                        </div>
                        <div className="flex-1 rounded-2xl bg-white/[0.03] border border-white/[0.07] p-5">
                          <div className="text-xs text-blue-400/60 font-medium mb-1">
                            {tx('الخطوة', 'Step', 'Étape')} {index + 1}
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                          <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            7. INDUSTRIES — Crosshatch bg + Colored gradients + Scale-in
        ══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-24 sm:py-32" style={{ backgroundColor: '#050505' }}>
          {/* Crosshatch pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(255,255,255,0.5) 49px, rgba(255,255,255,0.5) 50px),
              repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(255,255,255,0.5) 49px, rgba(255,255,255,0.5) 50px)`,
          }} />

          <div className="relative z-10 container mx-auto px-6">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-white/30 mb-4">
                {tx('القطاعات', 'Industries', 'Secteurs')}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {tx(
                  'القطاعات التي نخدمها',
                  'Industries We Serve',
                  'Les Secteurs que Nous Servons'
                )}
              </h2>
              <p className="text-lg text-white/40 max-w-2xl mx-auto">
                {tx(
                  'نكيّف حلولنا لتتناسب مع متطلبات قطاعكم الخاص.',
                  'We adapt our solutions to match the specific needs of your industry.',
                  'Nous adaptons nos solutions aux exigences spécifiques de votre secteur.'
                )}
              </p>
            </motion.div>

            {/* Industries grid — 3x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div
                    className="relative rounded-2xl bg-white/[0.03] border border-white/[0.07] p-7 overflow-hidden transition-all duration-500 hover:bg-white/[0.05]"
                    style={{
                      '--hover-shadow': industryHoverShadows[index],
                      '--hover-border': industryBorderColors[index],
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = industryHoverShadows[index];
                      e.currentTarget.style.borderColor = industryBorderColors[index];
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                    }}
                  >
                    {/* Colored gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${industryGradients[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                    <div className="relative z-10">
                      {/* Emoji with glow ring behind */}
                      <div className="relative inline-block mb-5">
                        <div className="text-5xl group-hover:animate-wobble transition-transform">{industry.icon}</div>
                        <div
                          className="absolute inset-0 -m-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                          style={{ background: `radial-gradient(circle, ${industryBorderColors[index]}, transparent)` }}
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{industryNames[index]}</h3>
                      <p className="text-sm text-white/40 leading-relaxed">{industryDescriptions[index]}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            8. TALK TO US — Orbit rings + Contact cards
        ══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-24 sm:py-32" style={{ backgroundColor: '#020208' }}>
          <OrbitRingsCompact />

          <div className="relative z-10 container mx-auto px-6">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-white/30 mb-4">
                {tx('تواصل معنا', 'Get in Touch', 'Contactez-nous')}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {tx(
                  'دعنا نتحدث عن مشروعك',
                  'Let\'s Talk About Your Project',
                  'Parlons de Votre Projet'
                )}
              </h2>
              <p className="text-lg text-white/40 max-w-2xl mx-auto">
                {tx(
                  'اختر طريقة التواصل المفضلة لديك وسنرد في أسرع وقت.',
                  'Choose your preferred way to reach us — we\'ll respond quickly.',
                  'Choisissez votre mode de contact préféré — nous répondons rapidement.'
                )}
              </p>
            </motion.div>

            {/* 3 contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14">
              {contactMethods.map((method, i) => {
                const MethodIcon = method.icon;
                return (
                  <motion.a
                    key={i}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.15, type: 'spring', bounce: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    className="group block"
                  >
                    <div
                      className="relative rounded-2xl bg-white/[0.03] border border-white/[0.07] p-8 text-center transition-all duration-500 hover:bg-white/[0.06]"
                      style={{ '--card-border': method.borderColor }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = method.borderColor;
                        e.currentTarget.style.boxShadow = method.shadowColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {/* Icon circle */}
                      <div className={`w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <MethodIcon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                      <p className="text-sm text-white/40 mb-5 leading-relaxed">{method.desc}</p>

                      <span className="inline-flex items-center gap-2 text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                        {method.cta}
                        {isRTL ? (
                          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        ) : (
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        )}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Bottom tagline + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-white/30 mb-6 text-sm">
                {tx(
                  'أو احجز استشارة مجانية مع فريقنا',
                  'Or book a free consultation with our team',
                  'Ou réservez une consultation gratuite avec notre équipe'
                )}
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setConsultationModalOpen(true)}
                className="inline-flex items-center gap-3 bg-white/[0.08] border border-white/[0.12] text-white font-medium px-8 py-3.5 rounded-xl hover:bg-white/[0.14] hover:border-white/[0.2] transition-all duration-500 backdrop-blur-sm"
              >
                {tx('احجز استشارة مجانية', 'Book Free Consultation', 'Réserver une Consultation Gratuite')}
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            9. FOOTER CTA — Glow rings + Rotating gradient border + Shimmer
        ══════════════════════════════════════════════════════════ */}
        <section className="relative bg-black overflow-hidden">
          <GlowRingCTA />

          {/* Glow blobs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', filter: 'blur(80px)' }} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgba(147,51,234,0.12) 0%, transparent 70%)', filter: 'blur(80px)' }} />

          <div className="relative z-10 container mx-auto px-6 py-24 sm:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              {/* Card with animated gradient border */}
              <div className="relative p-[1px] rounded-3xl overflow-hidden">
                {/* Rotating conic gradient border */}
                <div
                  className="absolute inset-[-50%] z-0"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent, rgba(99,102,241,0.4), transparent, rgba(147,51,234,0.4), transparent)',
                    animation: 'rotate-border 6s linear infinite',
                  }}
                />

                <div className="relative z-10 p-12 sm:p-16 rounded-3xl bg-black/95 backdrop-blur-sm">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
                    {t('services.finalCta.title')}
                  </h2>
                  <p className="text-lg text-white/40 mb-10 max-w-2xl mx-auto leading-relaxed">
                    {t('services.finalCta.subtitle')}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                    {/* Primary CTA with shimmer */}
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setConsultationModalOpen(true)}
                      className="group relative inline-flex items-center justify-center gap-3 bg-white text-black font-semibold px-8 py-4 rounded-xl transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.12)] overflow-hidden"
                    >
                      {/* Shimmer sweep */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div
                          className="absolute inset-0 w-full h-full"
                          style={{
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                            animation: 'shimmer 1.5s ease-in-out infinite',
                          }}
                        />
                      </div>
                      <span className="relative z-10">{t('servicesPage.consultation')}</span>
                      {isRTL ? (
                        <ArrowLeft className="w-4 h-4 relative z-10 group-hover:-translate-x-1 transition-transform" />
                      ) : (
                        <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                      )}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setQuoteModalOpen(true)}
                      className="inline-flex items-center justify-center gap-3 border border-white/15 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/[0.07] hover:border-white/30 transition-all duration-500 backdrop-blur-sm"
                    >
                      {t('servicesPage.quote')}
                    </motion.button>
                  </div>

                  <div className="pt-8 border-t border-white/[0.06]">
                    <p className="text-sm text-white/25">
                      {t('services.finalCta.footer')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <ConsultationModal
          isOpen={consultationModalOpen}
          onClose={() => setConsultationModalOpen(false)}
        />

        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          services={services}
        />
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BENTO CARD SUB-COMPONENT (for Portfolio section)
   Extracted to use its own ref for 3D tilt
═══════════════════════════════════════════════════════════════ */
function BentoCard({ project, info, IconComp, isHero, isFullWidth, index, isRTL, handleTilt, resetTilt }) {
  const cardRef = useRef(null);

  const gridClass = isHero
    ? 'md:col-span-2 md:row-span-2'
    : isFullWidth
      ? 'md:col-span-3'
      : 'md:col-span-1';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group ${gridClass}`}
    >
      <div
        ref={cardRef}
        onMouseMove={(e) => handleTilt(e, cardRef)}
        onMouseLeave={() => resetTilt(cardRef)}
        className="relative h-full rounded-2xl bg-white/[0.03] border border-white/[0.07] p-6 sm:p-8 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
        style={{
          transition: 'transform 0.15s ease-out, background-color 0.5s, border-color 0.5s, box-shadow 0.5s',
          willChange: 'transform',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 40px ${project.shadowColor}`;
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Gradient accent bar */}
        <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} w-1 h-16 rounded-full bg-gradient-to-b ${project.color} opacity-60`} />

        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <IconComp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs uppercase tracking-wider text-white/30">{project.category}</span>
            </div>
            <h3 className={`${isHero ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'} font-bold text-white group-hover:text-white/90 transition-colors`}>
              {info.title}
            </h3>
            <p className="text-sm text-white/40 mt-1">{project.client}</p>
          </div>
        </div>

        {/* Description */}
        <p className={`text-white/50 text-sm leading-relaxed mb-6 ${isHero ? 'max-w-lg' : ''}`}>
          {info.desc}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-xs text-white/60">
              {tech}
            </span>
          ))}
        </div>

        {/* Results metrics */}
        <div className={`grid ${isHero ? 'grid-cols-3' : 'grid-cols-3'} gap-3`}>
          {Object.entries(project.results).map(([key, value]) => (
            <div key={key} className="text-center rounded-xl bg-white/[0.04] border border-white/[0.06] py-3 px-2">
              <div className={`${isHero ? 'text-xl' : 'text-lg'} font-bold text-white`}>{value}</div>
              <div className="text-[10px] uppercase tracking-wider text-white/30 mt-0.5">{key}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
