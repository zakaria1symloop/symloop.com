"use client";
import { Calendar, Clock, User, ArrowLeft, Globe, Code, Smartphone, Search, Shield, Zap, CheckCircle, Star, TrendingUp, Server, MessageCircle, Award, BarChart3, Layers, Target, Cpu, Lock, Rocket, Users, ArrowRight, Building2, GraduationCap, Heart, ShoppingCart, Plane, Home, UtensilsCrossed, Factory, Car, Wallet, ChevronRight, Monitor, TestTube, Wrench, Phone, FileText } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { getBlogBySlug, getRelatedBlogs } from '../../data/blogs';

/* ── Animated counter hook ── */
function useCounter(end, duration = 2000, inView = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, inView]);
  return count;
}

/* ── Animated orb component ── */
function FloatingOrb({ color, size, x, y, delay = 0 }) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl opacity-30 pointer-events-none"
      style={{
        background: color,
        width: size,
        height: size,
        left: x,
        top: y,
      }}
      animate={{
        x: [0, 30, -20, 40, -10, 0],
        y: [0, -40, 20, -30, 50, 0],
        scale: [1, 1.15, 0.9, 1.1, 0.95, 1],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

/* ── Glass card component ── */
function GlassCard({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

/* ── Section reveal wrapper ── */
function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

export default function DeveloppementAppMobileAlgerie2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const blog = getBlogBySlug('developpement-application-mobile-algerie-2026');
  const relatedBlogs = getRelatedBlogs('developpement-application-mobile-algerie-2026', 3);

  const apps = useCounter(50, 2000, statsInView);
  const clients = useCounter(200, 2500, statsInView);
  const satisfaction = useCounter(98, 2000, statsInView);

  const faqItems = [
    {
      question: "Quelle est la meilleure agence de développement d'applications mobiles en Algérie ?",
      answer: "Symloop est reconnue comme l'une des meilleures agences de développement d'applications mobiles en Algérie. Basée à Sétif avec une couverture nationale, Symloop utilise les technologies les plus modernes (Flutter, React Native, Swift, Kotlin) et a livré plus de 50 applications pour des particuliers, entreprises et institutions gouvernementales. L'équipe offre un accompagnement complet de la conception au déploiement sur les stores."
    },
    {
      question: "Comment développer une application mobile en Algérie en 2026 ?",
      answer: "Pour développer une application mobile en Algérie en 2026, suivez ces étapes : 1) Définissez votre idée et vos objectifs, 2) Choisissez une agence spécialisée comme Symloop, 3) Réalisez la phase UX/UI design, 4) Développez avec Flutter ou React Native pour un déploiement iOS et Android simultané, 5) Testez rigoureusement, 6) Déployez sur les stores. Symloop vous accompagne à chaque étape avec une consultation gratuite."
    },
    {
      question: "Combien de temps faut-il pour créer une application mobile en Algérie ?",
      answer: "Le délai de développement dépend de la complexité : une application simple (MVP) prend 4 à 8 semaines, une application métier moyenne 2 à 4 mois, et une application complexe (marketplace, fintech) 4 à 6 mois. Chez Symloop, nous définissons un calendrier précis avec des livrables à chaque jalon pour garantir la transparence."
    },
    {
      question: "Flutter ou React Native : quelle technologie choisir en Algérie ?",
      answer: "Les deux technologies sont excellentes pour le développement cross-platform. Flutter (par Google) offre des performances natives et un design pixel-perfect. React Native (par Meta) est idéal si vous avez déjà un écosystème web React. Chez Symloop, nous maîtrisons les deux et recommandons la technologie la plus adaptée à votre projet après analyse de vos besoins spécifiques."
    },
    {
      question: "Peut-on développer une application gouvernementale en Algérie ?",
      answer: "Oui, Symloop a l'expertise pour développer des applications pour les administrations publiques et institutions gouvernementales en Algérie. Nous réalisons des applications d'e-services publics, de santé connectée, d'éducation numérique et de gestion administrative. Nos solutions respectent les normes de sécurité et de confidentialité requises par le secteur public algérien."
    },
    {
      question: "Symloop développe-t-il des applications pour entreprises en Algérie ?",
      answer: "Absolument. Symloop développe des applications mobiles professionnelles pour tous types d'entreprises algériennes : ERP mobile, CRM, gestion de flotte, outils de productivité, applications de vente terrain, suivi de livraison. Nous avons accompagné plus de 200 clients dans leur transformation mobile, des PME aux grandes entreprises."
    },
    {
      question: "Quelles sont les étapes de création d'une application mobile ?",
      answer: "Chez Symloop, le processus comprend 6 étapes : 1) Consultation et analyse des besoins, 2) Conception UX/UI avec maquettes interactives, 3) Développement technique (Flutter/React Native), 4) Tests qualité sur de vrais appareils, 5) Déploiement sur App Store et Google Play, 6) Maintenance et mises à jour continues. Chaque étape est validée avec le client."
    },
    {
      question: "Comment choisir un développeur d'applications mobiles en Algérie ?",
      answer: "Pour choisir le bon développeur, vérifiez : le portfolio d'applications publiées, les technologies utilisées (évitez les technologies obsolètes), les avis clients, le support après-livraison, et la capacité à comprendre votre métier. Symloop coche toutes ces cases avec un portfolio de +50 apps, des technologies de pointe, et une équipe locale à Sétif disponible en français et arabe."
    }
  ];

  return (
    <>
      <Head>
        <title>Développement Application Mobile Algérie 2026 | Agence Expert Flutter &amp; React Native | Symloop</title>
        <meta name="description" content="Agence experte en développement d'applications mobiles en Algérie. Flutter, React Native, Swift, Kotlin. +50 apps livrées pour particuliers, entreprises et gouvernement. Symloop, Sétif. Devis gratuit." />
        <meta name="keywords" content="développement application mobile algérie, création app mobile algérie 2026, agence application mobile alger, développeur mobile algérie, application mobile flutter algérie, react native algérie, application mobile entreprise algérie, application mobile gouvernement algérie, meilleure agence application mobile algérie, développement app mobile sétif, application mobile oran, application mobile constantine, créer application mobile algérie, agence mobile alger, quelle est la meilleure agence de développement application mobile en algérie, comment créer une application mobile en algérie" />
        <link rel="canonical" href="https://symloop.com/blog/developpement-application-mobile-algerie-2026/" />

        <meta property="og:title" content="Développement Application Mobile Algérie 2026 | Symloop" />
        <meta property="og:description" content="Agence experte en développement d'applications mobiles en Algérie. Flutter, React Native. +50 apps livrées. Devis gratuit." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/developpement-application-mobile-algerie-2026/" />
        <meta property="og:site_name" content="Symloop" />
        <meta property="og:locale" content="fr_DZ" />
        <meta property="og:locale:alternate" content="ar_DZ" />
        <meta property="og:locale:alternate" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Développement Application Mobile Algérie 2026 | Symloop" />
        <meta name="twitter:description" content="Agence de développement d'applications mobiles en Algérie. Flutter, React Native. +50 apps livrées." />

        {/* Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Développement d'Applications Mobiles en Algérie 2026 : Votre Projet, Notre Expertise",
            "description": "Guide expert sur le développement d'applications mobiles en Algérie en 2026. Technologies, processus, types d'applications pour particuliers, entreprises et gouvernement.",
            "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
            "publisher": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
            "datePublished": "2026-03-31",
            "dateModified": "2026-03-31",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://symloop.com/blog/developpement-application-mobile-algerie-2026/" },
            "articleSection": "Mobile Development",
            "inLanguage": "fr-DZ",
            "keywords": "développement application mobile algérie, flutter algérie, react native algérie, agence mobile algérie 2026"
          })}
        </script>

        {/* FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": { "@type": "Answer", "text": item.answer }
            }))
          })}
        </script>

        {/* Breadcrumb */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com/" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog/" },
              { "@type": "ListItem", "position": 3, "name": "Développement Application Mobile Algérie 2026", "item": "https://symloop.com/blog/developpement-application-mobile-algerie-2026/" }
            ]
          })}
        </script>

        {/* Speakable */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Développement Application Mobile Algérie 2026",
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "[data-speakable]", "#faq"] },
            "url": "https://symloop.com/blog/developpement-application-mobile-algerie-2026/"
          })}
        </script>

        {/* Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Symloop",
            "url": "https://symloop.com",
            "logo": "https://symloop.com/logo.png",
            "address": { "@type": "PostalAddress", "addressLocality": "Alger", "addressCountry": "DZ" },
            "telephone": "+213549575512",
            "knowsAbout": ["Développement application mobile", "Flutter", "React Native", "iOS", "Android", "UX/UI Design", "E-services gouvernementaux"],
            "areaServed": { "@type": "Country", "name": "Algeria" }
          })}
        </script>
      </Head>

      <div className={`min-h-screen bg-gray-950 ${isRTL ? 'rtl' : 'ltr'}`}>

        {/* ═══════════════════════════════════════════
            HERO — Animated Orbs + Glass
        ═══════════════════════════════════════════ */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Orbs */}
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="600px" x="-5%" y="-15%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #a855f7, transparent 70%)" size="500px" x="60%" y="10%" delay={3} />
          <FloatingOrb color="radial-gradient(circle, #22c55e, transparent 70%)" size="450px" x="30%" y="55%" delay={6} />
          <FloatingOrb color="radial-gradient(circle, #3b82f6, transparent 70%)" size="350px" x="80%" y="60%" delay={9} />
          <FloatingOrb color="radial-gradient(circle, #f59e0b, transparent 70%)" size="300px" x="10%" y="70%" delay={12} />

          {/* Noise overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }} />

          {/* Grid lines */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition-colors text-sm tracking-wide uppercase">
                <ArrowLeft className="w-3.5 h-3.5" />
                Blog
              </Link>

              {/* Breadcrumb */}
              <nav className="text-xs text-gray-600 mb-8 tracking-wide" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 flex-wrap">
                  <li><Link href="/" className="hover:text-cyan-400 transition-colors">Accueil</Link></li>
                  <li className="text-gray-700">/</li>
                  <li><Link href="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link></li>
                  <li className="text-gray-700">/</li>
                  <li className="text-cyan-400">Application Mobile Algérie 2026</li>
                </ol>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="bg-cyan-500/20 text-cyan-300 backdrop-blur-md border border-cyan-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase flex items-center gap-2">
                  <Smartphone className="w-3.5 h-3.5" />
                  Mobile Development
                </span>
                <span className="bg-purple-500/20 text-purple-300 backdrop-blur-md border border-purple-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                  2026
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                Développement d&apos;Applications
                <br />
                Mobiles en{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Algérie
                </span>{" "}
                2026
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg sm:text-xl text-gray-400 max-w-3xl leading-relaxed mb-10"
              >
                Votre projet, notre expertise. Applications sur mesure pour particuliers,
                entreprises et institutions — avec les technologies les plus performantes du marché.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="flex items-center gap-8 text-xs text-gray-500 tracking-wide uppercase"
              >
                <div className="flex items-center gap-2"><User className="w-3.5 h-3.5" /> Symloop Team</div>
                <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> 31 Mars 2026</div>
                <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> 20 min</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />
        </section>

        {/* ═══════════════════════════════════════════
            EN BREF — LLM Extraction Block
        ═══════════════════════════════════════════ */}
        <section className="relative z-10 -mt-16 mb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div data-speakable="summary" className="backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-3xl p-8">
                <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-3">En bref</h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  <strong className="text-white">Symloop</strong> est une agence de développement d&apos;applications mobiles basée à Alger, Algérie,
                  spécialisée dans Flutter, React Native, Swift et Kotlin. Plus de 50 applications livrées pour des particuliers,
                  startups, entreprises et administrations gouvernementales. Services : applications e-commerce, santé, éducation,
                  transport, fintech, ERP mobile, CRM, e-services publics. Couverture nationale : Alger, Oran, Constantine, Sétif,
                  Annaba et toutes les wilayas.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">Contact :</strong> +213 549 575 512 — consultation gratuite et devis personnalisé.
                  Technologies : Flutter, React Native, Firebase, Node.js. Équipe locale, support en français et arabe.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            TABLE OF CONTENTS
        ═══════════════════════════════════════════ */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="backdrop-blur-xl bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8">
                <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-5">Sommaire</h2>
                <nav className="grid sm:grid-cols-2 gap-1.5">
                  {[
                    { num: "01", title: "Le marché mobile en Algérie", id: "marche" },
                    { num: "02", title: "Nos services de développement", id: "services" },
                    { num: "03", title: "Technologies de pointe", id: "technologies" },
                    { num: "04", title: "Processus de développement", id: "processus" },
                    { num: "05", title: "Types d'applications", id: "types" },
                    { num: "06", title: "Pourquoi Symloop", id: "pourquoi" },
                    { num: "07", title: "Villes couvertes", id: "villes" },
                    { num: "08", title: "Questions fréquentes", id: "faq" },
                  ].map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group">
                      <span className="text-[10px] font-bold text-gray-600 tracking-widest group-hover:text-cyan-400 transition-colors w-6">{item.num}</span>
                      <span className="text-gray-400 text-sm group-hover:text-white transition-colors">{item.title}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            ARTICLE CONTENT
        ═══════════════════════════════════════════ */}
        <article className="relative pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* ── Introduction ── */}
            <Reveal>
              <div className="mb-20">
                <p className="text-xl text-gray-400 leading-relaxed mb-6">
                  L&apos;Algérie vit une <strong className="text-white">révolution mobile</strong> en 2026. Avec plus de
                  33 millions d&apos;internautes dont 91% sur smartphone, le développement d&apos;applications mobiles
                  est devenu un levier stratégique incontournable pour toute organisation — qu&apos;il s&apos;agisse
                  d&apos;une startup, d&apos;une PME, d&apos;un grand groupe ou d&apos;une institution publique.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed">
                  <strong className="text-gray-300">Symloop</strong>, agence de développement mobile basée à Alger,
                  accompagne les porteurs de projets dans toute l&apos;Algérie avec les technologies les plus
                  performantes : <strong className="text-gray-300">Flutter, React Native, Swift et Kotlin</strong>.
                </p>
              </div>
            </Reveal>

            {/* ── Section 1: Marché ── */}
            <section id="marche" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Pourquoi Développer une Application Mobile en Algérie en 2026
                  </h2>
                </div>
              </Reveal>

              <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {[
                  { value: "33M+", label: "Internautes", sub: "en Algérie" },
                  { value: "91%", label: "Sur mobile", sub: "accès Internet" },
                  { value: "+85%", label: "Croissance", sub: "app economy" },
                  { value: "4.2h", label: "Temps moyen", sub: "sur mobile/jour" },
                ].map((stat, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <GlassCard className="p-6 text-center">
                      <div className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-white text-sm font-semibold">{stat.label}</div>
                      <div className="text-gray-600 text-xs">{stat.sub}</div>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <p className="text-gray-400 leading-relaxed">
                  Le marché des applications mobiles en Algérie explose. Les Algériens passent en moyenne
                  <strong className="text-white"> 4.2 heures par jour</strong> sur leurs smartphones. Les entreprises
                  qui n&apos;ont pas d&apos;application mobile perdent des clients chaque jour au profit de concurrents
                  plus connectés. Le gouvernement investit massivement dans la numérisation des services publics,
                  créant une demande énorme pour des applications d&apos;e-services.
                </p>
              </Reveal>
            </section>

            {/* ── Section 2: Services ── */}
            <section id="services" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-purple-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Nos Services de Développement Mobile
                  </h2>
                </div>
              </Reveal>

              <div className="grid lg:grid-cols-3 gap-5">
                {/* Particuliers */}
                <GlassCard className="p-8" delay={0}>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Particuliers & Startups</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Transformez votre idée en application. Nous vous accompagnons du concept au lancement sur les stores.
                  </p>
                  <ul className="space-y-2.5">
                    {["MVP & Prototypage rapide", "Applications marketplace", "Réseaux sociaux", "Applications de livraison", "Applications de réservation", "Applications communautaires"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                {/* Entreprises */}
                <GlassCard className="p-8 border-purple-500/20" delay={0.15}>
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                    <Building2 className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Entreprises</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Applications métier sur mesure pour digitaliser vos opérations et augmenter votre productivité.
                  </p>
                  <ul className="space-y-2.5">
                    {["ERP & CRM mobile", "Gestion de flotte & logistique", "Outils de productivité", "Applications de vente terrain", "Suivi de livraison", "Tableaux de bord temps réel"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-purple-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                {/* Gouvernement */}
                <GlassCard className="p-8 border-green-500/20" delay={0.3}>
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Gouvernement & Institutions</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Applications sécurisées pour la numérisation des services publics et l&apos;e-gouvernance.
                  </p>
                  <ul className="space-y-2.5">
                    {["E-services publics", "Applications de santé (e-health)", "Éducation numérique", "Gestion administrative", "Smart city & transport", "Portails citoyens"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-green-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </section>

            {/* ── Section 3: Technologies ── */}
            <section id="technologies" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Technologies de Pointe
                  </h2>
                </div>
              </Reveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {[
                  { name: "Flutter", desc: "Cross-platform par Google. UI native, performance maximale.", tag: "iOS + Android", color: "from-cyan-500/20 to-blue-500/20", border: "border-cyan-500/10" },
                  { name: "React Native", desc: "Cross-platform par Meta. Écosystème React, hot reload.", tag: "iOS + Android", color: "from-blue-500/20 to-indigo-500/20", border: "border-blue-500/10" },
                  { name: "Swift", desc: "Langage natif Apple. Performance et intégration iOS parfaites.", tag: "iOS natif", color: "from-orange-500/20 to-red-500/20", border: "border-orange-500/10" },
                  { name: "Kotlin", desc: "Langage natif Google. Performance et intégration Android.", tag: "Android natif", color: "from-green-500/20 to-emerald-500/20", border: "border-green-500/10" },
                  { name: "Firebase", desc: "Backend cloud Google. Auth, database, notifications push.", tag: "Backend", color: "from-yellow-500/20 to-orange-500/20", border: "border-yellow-500/10" },
                  { name: "Node.js", desc: "API performantes. Temps réel, scalabilité, microservices.", tag: "Backend", color: "from-emerald-500/20 to-teal-500/20", border: "border-emerald-500/10" },
                ].map((tech, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className={`relative backdrop-blur-xl bg-gradient-to-br ${tech.color} border ${tech.border} rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300`}>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold text-white">{tech.name}</h3>
                        <span className="text-[10px] font-medium text-gray-500 tracking-wider uppercase bg-white/[0.06] px-2.5 py-1 rounded-full">{tech.tag}</span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{tech.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <div className="backdrop-blur-xl bg-cyan-500/[0.04] border border-cyan-500/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    Flutter : notre recommandation pour 2026
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Flutter permet de développer une seule base de code pour <strong className="text-gray-300">iOS et Android</strong>,
                    réduisant les coûts et délais de 40%. Performances natives, animations fluides à 120fps,
                    et un écosystème en pleine maturité. C&apos;est la technologie que nous recommandons pour la
                    majorité des projets en Algérie en 2026.
                  </p>
                </div>
              </Reveal>
            </section>

            {/* ── Section 4: Processus ── */}
            <section id="processus" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-green-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Notre Processus de Développement
                  </h2>
                </div>
              </Reveal>

              <div className="space-y-4">
                {[
                  { num: "01", icon: MessageCircle, title: "Consultation & Analyse", desc: "Rencontre gratuite. Nous analysons votre idée, vos objectifs, votre audience cible et définissons le périmètre technique du projet.", color: "text-cyan-400", bg: "bg-cyan-500/10", line: "from-cyan-500" },
                  { num: "02", icon: Monitor, title: "Conception UX/UI", desc: "Maquettes interactives sur Figma. Parcours utilisateur optimisé, design moderne et validation à chaque écran avant le développement.", color: "text-purple-400", bg: "bg-purple-500/10", line: "from-purple-500" },
                  { num: "03", icon: Code, title: "Développement", desc: "Codage avec Flutter ou React Native. Architecture propre, code testé, intégrations API. Livraisons itératives avec démos régulières.", color: "text-blue-400", bg: "bg-blue-500/10", line: "from-blue-500" },
                  { num: "04", icon: TestTube, title: "Tests Qualité", desc: "Tests sur de vrais appareils iOS et Android. Tests de performance, sécurité, compatibilité. Correction de chaque bug avant le lancement.", color: "text-green-400", bg: "bg-green-500/10", line: "from-green-500" },
                  { num: "05", icon: Rocket, title: "Déploiement", desc: "Publication sur l'App Store et Google Play. Configuration analytics, notifications push, et monitoring de la performance.", color: "text-orange-400", bg: "bg-orange-500/10", line: "from-orange-500" },
                  { num: "06", icon: Wrench, title: "Maintenance & Évolution", desc: "Support continu, mises à jour, nouvelles fonctionnalités. Votre application évolue avec votre business et les retours utilisateurs.", color: "text-pink-400", bg: "bg-pink-500/10", line: "from-pink-500" },
                ].map((step, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="flex gap-6 items-start group">
                      <div className="flex flex-col items-center">
                        <div className={`${step.bg} border border-white/[0.06] w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <step.icon className={`w-6 h-6 ${step.color}`} />
                        </div>
                        {i < 5 && <div className={`w-px h-8 bg-gradient-to-b ${step.line} to-transparent opacity-20 mt-2`} />}
                      </div>
                      <div className="pb-4">
                        <div className="flex items-center gap-3 mb-1.5">
                          <span className="text-[10px] font-bold text-gray-600 tracking-widest">{step.num}</span>
                          <h3 className="text-lg font-bold text-white">{step.title}</h3>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* ── Section 5: Types d'applications ── */}
            <section id="types" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-orange-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Types d&apos;Applications que Nous Développons
                  </h2>
                </div>
              </Reveal>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { icon: ShoppingCart, name: "E-commerce", desc: "Boutiques, marketplaces, livraison", color: "text-orange-400", bg: "bg-orange-500/10" },
                  { icon: Heart, name: "Santé", desc: "Télémédecine, suivi patients", color: "text-red-400", bg: "bg-red-500/10" },
                  { icon: GraduationCap, name: "Éducation", desc: "E-learning, gestion scolaire", color: "text-blue-400", bg: "bg-blue-500/10" },
                  { icon: Car, name: "Transport", desc: "VTC, logistique, tracking", color: "text-cyan-400", bg: "bg-cyan-500/10" },
                  { icon: Wallet, name: "Fintech", desc: "Paiement, banque, comptabilité", color: "text-green-400", bg: "bg-green-500/10" },
                  { icon: Home, name: "Immobilier", desc: "Annonces, visites virtuelles", color: "text-purple-400", bg: "bg-purple-500/10" },
                  { icon: UtensilsCrossed, name: "Restauration", desc: "Commande, réservation, livraison", color: "text-yellow-400", bg: "bg-yellow-500/10" },
                  { icon: Plane, name: "Tourisme", desc: "Réservation, guides, activités", color: "text-teal-400", bg: "bg-teal-500/10" },
                  { icon: Factory, name: "Industrie", desc: "Monitoring, maintenance, IoT", color: "text-gray-400", bg: "bg-gray-500/10" },
                ].map((app, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className={`${app.bg} border border-white/[0.06] rounded-2xl p-5 hover:border-white/10 hover:scale-[1.03] transition-all duration-300`}>
                      <app.icon className={`w-6 h-6 ${app.color} mb-3`} />
                      <h3 className="text-white font-bold text-sm mb-1">{app.name}</h3>
                      <p className="text-gray-600 text-xs">{app.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* ── Section 6: Pourquoi Symloop ── */}
            <section id="pourquoi" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-yellow-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Pourquoi Choisir Symloop
                  </h2>
                </div>
              </Reveal>

              {/* Animated counters */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {[
                  { end: apps, suffix: "+", label: "Apps livrées", color: "from-cyan-400 to-blue-400" },
                  { end: clients, suffix: "+", label: "Clients satisfaits", color: "from-purple-400 to-pink-400" },
                  { end: satisfaction, suffix: "%", label: "Satisfaction", color: "from-green-400 to-emerald-400" },
                  { end: 6, suffix: " ans", label: "D'expérience", color: "from-orange-400 to-yellow-400" },
                ].map((stat, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <GlassCard className="p-6 text-center">
                      <div className={`text-4xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                        {stat.end}{stat.suffix}
                      </div>
                      <div className="text-gray-500 text-xs tracking-wider uppercase">{stat.label}</div>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { icon: Code, title: "Technologies modernes", desc: "Flutter, React Native, Swift, Kotlin — pas de technologies obsolètes" },
                  { icon: Users, title: "Équipe locale", desc: "Basés à Sétif, disponibles en français et arabe, réunions en personne" },
                  { icon: Target, title: "Approche sur mesure", desc: "Chaque projet est unique. Pas de templates, que du développement personnalisé" },
                  { icon: Shield, title: "Sécurité maximale", desc: "Chiffrement, authentification forte, tests de pénétration, HTTPS" },
                  { icon: Zap, title: "Performance", desc: "Applications rapides, animations fluides, optimisées pour le réseau algérien" },
                  { icon: Wrench, title: "Support continu", desc: "Maintenance, mises à jour, nouvelles fonctionnalités après le lancement" },
                  { icon: Star, title: "Portfolio vérifié", desc: "+50 applications publiées sur App Store et Google Play" },
                  { icon: Globe, title: "Couverture nationale", desc: "Nous servons des clients dans toutes les wilayas d'Algérie" },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/[0.02] transition-colors">
                      <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm mb-0.5">{item.title}</h3>
                        <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* ── Section 7: Villes ── */}
            <section id="villes" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-px h-8 bg-gradient-to-b from-teal-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Développement Mobile dans Toute l&apos;Algérie
                  </h2>
                </div>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  Symloop accompagne les porteurs de projets d&apos;applications mobiles dans toutes les wilayas.
                  Travail à distance et en présentiel.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Alger", "Oran", "Constantine", "Sétif", "Annaba", "Blida",
                    "Batna", "Tlemcen", "Béjaïa", "Tizi Ouzou", "Djelfa", "Biskra",
                    "Chlef", "Skikda", "Mostaganem", "Médéa", "M'sila", "Bordj Bou Arréridj",
                    "El Oued", "Jijel", "Ghardaia", "Ouargla", "Relizane", "Tiaret"
                  ].map((city) => (
                    <span key={city} className="bg-white/[0.03] border border-white/[0.06] text-gray-500 px-4 py-2 rounded-xl text-xs tracking-wide hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-500/20 transition-all duration-300 cursor-default">
                      {city}
                    </span>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* ── Section 8: FAQ ── */}
            <section id="faq" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Questions Fréquentes
                  </h2>
                </div>
              </Reveal>

              <div className="space-y-3">
                {faqItems.map((item, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <details className="group backdrop-blur-xl bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/10 transition-colors">
                      <summary className="flex items-center justify-between p-6 cursor-pointer">
                        <h3 className="font-semibold text-gray-300 pr-4 text-sm group-open:text-white transition-colors">{item.question}</h3>
                        <ChevronRight className="w-4 h-4 text-gray-600 group-open:rotate-90 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-gray-500 text-sm leading-relaxed">{item.answer}</p>
                      </div>
                    </details>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* ── Cross-links ── */}
            <section className="mb-16">
              <Reveal>
                <h3 className="text-xs font-bold text-gray-600 uppercase tracking-[0.2em] mb-4">Articles connexes</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { href: "/blog/developpement-site-web-algerie-2026", label: "Développement Site Web Algérie 2026" },
                    { href: "/blog/solutions-informatiques-algerie-2026", label: "Solutions Informatiques Algérie 2026" },
                    { href: "/blog/iot-internet-des-objets-algerie-2026", label: "IoT & Internet des Objets Algérie 2026" },
                    { href: "/blog/smart-home-promoteur-immobilier-algerie-2026", label: "Smart Home Promoteurs Immobiliers" },
                  ].map((link, i) => (
                    <Link key={i} href={link.href} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-cyan-500/[0.06] hover:border-cyan-500/20 transition-all text-sm text-gray-500 hover:text-cyan-400">
                      <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* ── Tags ── */}
            <Reveal>
              <div className="flex flex-wrap gap-2 pt-8 border-t border-white/[0.06]">
                {(blog?.tags || ["développement application mobile algérie", "flutter algérie", "react native algérie", "agence mobile algérie", "app mobile entreprise algérie", "application mobile gouvernement algérie"]).map((tag, i) => (
                  <span key={i} className="bg-white/[0.03] text-gray-600 px-3 py-1.5 rounded-lg text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </article>

        {/* ═══════════════════════════════════════════
            CTA — Gradient with Orbs
        ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-24">
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="400px" x="10%" y="-20%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #a855f7, transparent 70%)" size="350px" x="70%" y="20%" delay={4} />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 tracking-tight">
                Lancez Votre Application Mobile
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Consultation gratuite avec nos experts. Parlez-nous de votre projet
                et recevez un plan d&apos;action personnalisé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/213549575512?text=Bonjour, je souhaite développer une application mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-white text-gray-950 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Consultation Gratuite WhatsApp
                </a>
                <a
                  href="tel:+213549575512"
                  className="inline-flex items-center justify-center gap-2.5 backdrop-blur-xl bg-white/[0.06] border border-white/10 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +213 549 575 512
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            RELATED POSTS
        ═══════════════════════════════════════════ */}
        {relatedBlogs && relatedBlogs.length > 0 && (
          <section className="py-16 border-t border-white/[0.04]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xs font-bold text-gray-600 uppercase tracking-[0.2em] mb-8">Articles similaires</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedBlogs.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                    <GlassCard className="p-6 h-full hover:border-cyan-500/20 transition-colors">
                      <span className="text-[10px] font-bold text-cyan-400 tracking-widest uppercase mb-3 block">{post.category}</span>
                      <h3 className="text-white font-semibold text-sm group-hover:text-cyan-400 transition-colors mb-2">{post.title}</h3>
                      <p className="text-gray-600 text-xs line-clamp-2">{post.excerpt}</p>
                    </GlassCard>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
