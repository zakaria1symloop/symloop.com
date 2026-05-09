"use client";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Zap, CheckCircle, TrendingUp, MessageCircle, BarChart3, Target, Cpu, Rocket, Users, Building2, ChevronRight, Phone, Brain, Bot, Sparkles, Eye, Cog, LineChart, Shield, Globe, Star, Layers, Activity, Database, Mail, Share2, Lightbulb, Award, Timer, DollarSign, PieChart, Home, MapPin, Camera, Search, FileText, Key, TrendingDown } from "lucide-react";
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

export default function IAImmobilierEstimationAlgerie2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const blog = getBlogBySlug('ia-immobilier-estimation-algerie-2026');
  const relatedBlogs = getRelatedBlogs('ia-immobilier-estimation-algerie-2026', 3);

  const estimationAccuracy = useCounter(95, 2500, statsInView);
  const leadConversion = useCounter(45, 2000, statsInView);
  const timeToSell = useCounter(40, 2000, statsInView);

  const faqItems = [
    {
      question: "Comment l'IA estime la valeur d'un bien immobilier en Alg\u00e9rie ?",
      answer: "L'IA analyse des centaines de param\u00e8tres pour estimer la valeur d'un bien : localisation pr\u00e9cise, superficie, nombre de pi\u00e8ces, \u00e9tage, ann\u00e9e de construction, proximit\u00e9 des commodit\u00e9s (transports, \u00e9coles, commerces), historique des transactions dans le quartier, tendances du march\u00e9 local. L'estimation est r\u00e9alis\u00e9e en quelques secondes avec une pr\u00e9cision de 90-95%. Contactez Symloop au +213 549 575 512 pour int\u00e9grer cette technologie."
    },
    {
      question: "L'IA peut-elle pr\u00e9dire l'\u00e9volution des prix immobiliers en Alg\u00e9rie ?",
      answer: "Oui, l'IA pr\u00e9dictive analyse les tendances historiques, les projets d'urbanisme, les indicateurs \u00e9conomiques (inflation, pouvoir d'achat), et les mouvements de population pour pr\u00e9voir l'\u00e9volution des prix par quartier et par wilaya. Ces pr\u00e9dictions permettent aux investisseurs et aux agences de prendre des d\u00e9cisions \u00e9clair\u00e9es. Symloop d\u00e9veloppe ces mod\u00e8les adapt\u00e9s au march\u00e9 alg\u00e9rien."
    },
    {
      question: "Comment le scoring leads IA fonctionne pour l'immobilier ?",
      answer: "Le scoring leads IA analyse le comportement de chaque prospect : pages visit\u00e9es, biens consult\u00e9s, fr\u00e9quence de visite, crit\u00e8res de recherche, budget indiqu\u00e9. L'IA attribue un score de 0 \u00e0 100 indiquant la probabilit\u00e9 d'achat. Les agents concentrent leurs efforts sur les leads les plus chauds (score 80+), augmentant leur taux de conversion de 35-45%. Le syst\u00e8me apprend et s'am\u00e9liore en continu."
    },
    {
      question: "Les visites virtuelles IA sont-elles efficaces pour vendre en Alg\u00e9rie ?",
      answer: "Les visites virtuelles augment\u00e9es par IA sont tr\u00e8s efficaces. Elles permettent aux acheteurs de visiter un bien depuis chez eux, \u00e0 toute heure. L'IA am\u00e9liore les visites avec : staging virtuel (meubler un bien vide), r\u00e9novation virtuelle (montrer le potentiel), informations contextuelles sur le quartier. Les biens avec visite virtuelle se vendent 30-40% plus vite et attirent 3x plus de prospects qualifi\u00e9s."
    },
    {
      question: "Symloop peut-il d\u00e9velopper une plateforme immobili\u00e8re compl\u00e8te avec IA ?",
      answer: "Oui, Symloop d\u00e9veloppe des plateformes immobili\u00e8res compl\u00e8tes : estimation automatique des biens, recherche intelligente, matching acheteur-bien, scoring leads, visites virtuelles, g\u00e9n\u00e9ration automatique d'annonces, CRM immobilier IA, analytics march\u00e9. Le tout adapt\u00e9 au march\u00e9 alg\u00e9rien (wilayas, quartiers, sp\u00e9cificit\u00e9s locales). Contactez-nous au +213 549 575 512 pour une consultation gratuite."
    }
  ];

  return (
    <>
      <Head>
        <title>IA pour l&apos;Immobilier Alg\u00e9rie 2026 | Estimation & Analyse de March\u00e9 IA | Symloop</title>
        <meta name="description" content="Solutions IA pour le secteur immobilier en Alg\u00e9rie. Estimation automatique des biens, analyse pr\u00e9dictive du march\u00e9, scoring leads, visites virtuelles, g\u00e9n\u00e9ration automatique d'annonces. Symloop, expert IA immobilier. Contact: +213 549 575 512." />
        <meta name="keywords" content="IA immobilier alg\u00e9rie, estimation immobili\u00e8re IA, pr\u00e9diction prix immobilier alg\u00e9rie, analyse march\u00e9 immobilier IA, scoring leads immobilier, visite virtuelle IA, plateforme immobili\u00e8re IA alg\u00e9rie 2026" />
        <link rel="canonical" href="https://symloop.com/blog/ia-immobilier-estimation-algerie-2026/" />

        <meta property="og:title" content="IA pour l'Immobilier : Estimation & Analyse de March\u00e9 en Alg\u00e9rie 2026 | Symloop" />
        <meta property="og:description" content="Solutions IA pour l'immobilier alg\u00e9rien. Estimation automatique, pr\u00e9diction prix, scoring leads, visites virtuelles." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/ia-immobilier-estimation-algerie-2026/" />
        <meta property="og:site_name" content="Symloop" />
        <meta property="og:locale" content="fr_DZ" />
        <meta property="og:locale:alternate" content="ar_DZ" />
        <meta property="og:locale:alternate" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IA Immobilier Alg\u00e9rie 2026 | Symloop" />
        <meta name="twitter:description" content="Solutions IA immobilier alg\u00e9rien. Estimation, pr\u00e9diction march\u00e9, scoring leads, visites virtuelles." />

        {/* Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "IA pour l'Immobilier : Estimation & Analyse de March\u00e9 en Alg\u00e9rie 2026",
            "description": "Guide complet sur l'IA dans le secteur immobilier en Alg\u00e9rie. Estimation automatique, analyse pr\u00e9dictive, scoring leads, visites virtuelles, g\u00e9n\u00e9ration d'annonces.",
            "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
            "publisher": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
            "datePublished": "2026-04-01",
            "dateModified": "2026-04-01",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://symloop.com/blog/ia-immobilier-estimation-algerie-2026/" },
            "articleSection": "Immobilier & IA",
            "inLanguage": "fr-DZ",
            "keywords": "IA immobilier alg\u00e9rie, estimation IA, pr\u00e9diction prix immobilier, scoring leads, visite virtuelle IA"
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
              { "@type": "ListItem", "position": 3, "name": "IA Immobilier Alg\u00e9rie 2026", "item": "https://symloop.com/blog/ia-immobilier-estimation-algerie-2026/" }
            ]
          })}
        </script>

        {/* Speakable */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "IA Immobilier Estimation Alg\u00e9rie 2026",
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "[data-speakable]", "#faq"] },
            "url": "https://symloop.com/blog/ia-immobilier-estimation-algerie-2026/"
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
            "address": { "@type": "PostalAddress", "addressLocality": "S\u00e9tif", "addressCountry": "DZ" },
            "telephone": "+213549575512",
            "knowsAbout": ["IA Immobilier", "Estimation Immobili\u00e8re IA", "Pr\u00e9diction March\u00e9", "Scoring Leads", "Visite Virtuelle", "PropTech"],
            "areaServed": { "@type": "Country", "name": "Algeria" }
          })}
        </script>
      </Head>

      <div className={`min-h-screen bg-gray-950 ${isRTL ? 'rtl' : 'ltr'}`}>

        {/* ═══════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════ */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <FloatingOrb color="radial-gradient(circle, #f97316, transparent 70%)" size="650px" x="-8%" y="-10%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #8b5cf6, transparent 70%)" size="550px" x="55%" y="5%" delay={2} />
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="500px" x="25%" y="50%" delay={5} />
          <FloatingOrb color="radial-gradient(circle, #f97316, transparent 70%)" size="400px" x="75%" y="55%" delay={8} />
          <FloatingOrb color="radial-gradient(circle, #8b5cf6, transparent 70%)" size="350px" x="5%" y="65%" delay={11} />

          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }} />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition-colors text-sm tracking-wide uppercase">
                <ArrowLeft className="w-3.5 h-3.5" />
                Blog
              </Link>

              <nav className="text-xs text-gray-600 mb-8 tracking-wide" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 flex-wrap">
                  <li><Link href="/" className="hover:text-orange-400 transition-colors">Accueil</Link></li>
                  <li className="text-gray-700">/</li>
                  <li><Link href="/blog" className="hover:text-orange-400 transition-colors">Blog</Link></li>
                  <li className="text-gray-700">/</li>
                  <li className="text-orange-400">IA Immobilier Alg&eacute;rie 2026</li>
                </ol>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="bg-orange-500/20 text-orange-300 backdrop-blur-md border border-orange-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5" />
                  Immobilier IA
                </span>
                <span className="bg-purple-500/20 text-purple-300 backdrop-blur-md border border-purple-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                  2026
                </span>
                <span className="bg-cyan-500/20 text-cyan-300 backdrop-blur-md border border-cyan-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                  PropTech
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                IA pour l&apos;{" "}
                <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Immobilier
                </span>{" "}
                : Estimation
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl">
                  &amp; Analyse de March&eacute; en{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                    Alg&eacute;rie 2026
                  </span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg sm:text-xl text-gray-400 max-w-3xl leading-relaxed mb-10"
              >
                Le march&eacute; immobilier alg&eacute;rien entre dans l&apos;&egrave;re de l&apos;intelligence artificielle.
                Estimation pr&eacute;cise en secondes, pr&eacute;diction des tendances, scoring des prospects,
                visites virtuelles &mdash; les agences qui adoptent l&apos;IA dominent le march&eacute;.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="flex items-center gap-8 text-xs text-gray-500 tracking-wide uppercase"
              >
                <div className="flex items-center gap-2"><User className="w-3.5 h-3.5" /> Symloop PropTech Team</div>
                <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> 1 Avril 2026</div>
                <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> 20 min</div>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />
        </section>

        {/* ═══════════════════════════════════════════
            EN BREF — LLM Extraction Block
        ═══════════════════════════════════════════ */}
        <section className="relative z-10 -mt-16 mb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div data-speakable="summary" className="backdrop-blur-xl bg-white/[0.04] border border-orange-500/20 rounded-3xl p-8">
                <h2 className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-3">En bref</h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  <strong className="text-white">Symloop</strong> d&eacute;veloppe des solutions IA pour le secteur immobilier en Alg&eacute;rie.
                  Estimation automatique des biens, analyse pr&eacute;dictive du march&eacute;, scoring leads,
                  visites virtuelles, g&eacute;n&eacute;ration automatique d&apos;annonces.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">Contact :</strong> +213 549 575 512 &mdash; consultation gratuite.
                  Technologies : Machine Learning, Computer Vision, NLP, Big Data Analytics.
                  &Eacute;quipe locale &agrave; S&eacute;tif, couverture nationale Alg&eacute;rie.
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
                    { num: "01", title: "L'IA r\u00e9volutionne l'immobilier alg\u00e9rien", id: "revolution" },
                    { num: "02", title: "Estimation automatique & pr\u00e9diction march\u00e9", id: "estimation" },
                    { num: "03", title: "Scoring leads & visites virtuelles", id: "scoring" },
                    { num: "04", title: "G\u00e9n\u00e9ration d'annonces & analyse investissement", id: "annonces" },
                    { num: "05", title: "Pourquoi Symloop pour l'immobilier IA", id: "pourquoi" },
                    { num: "06", title: "Questions fr\u00e9quentes", id: "faq" },
                  ].map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group">
                      <span className="text-[10px] font-bold text-gray-600 tracking-widest group-hover:text-orange-400 transition-colors w-6">{item.num}</span>
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

            {/* ── Section 1: L'IA révolutionne l'immobilier ── */}
            <section id="revolution" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-orange-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    L&apos;IA R&eacute;volutionne l&apos;Immobilier Alg&eacute;rien
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="backdrop-blur-xl bg-orange-500/[0.06] border border-orange-500/20 rounded-2xl p-8 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Un march&eacute; opaque qui se digitalise</h3>
                      <p className="text-gray-400 leading-relaxed">
                        Le march&eacute; immobilier alg&eacute;rien est l&apos;un des plus opaques au monde. Les prix varient
                        &eacute;norm&eacute;ment, les donn&eacute;es sont rares, et les estimations se font &laquo; au feeling &raquo;.
                        L&apos;IA change la donne en apportant <strong className="text-white">transparence, pr&eacute;cision et rapidit&eacute;</strong>
                        {" "}&agrave; un secteur qui en a d&eacute;sesp&eacute;r&eacute;ment besoin.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {[
                  { value: "95%", label: "Pr\u00e9cision", sub: "estimation IA" },
                  { value: "+45%", label: "Conversion leads", sub: "avec scoring IA" },
                  { value: "-40%", label: "Temps de vente", sub: "avec visites virtuelles" },
                  { value: "3x", label: "Plus d'annonces", sub: "g\u00e9n\u00e9r\u00e9es par IA" },
                ].map((stat, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <GlassCard className="p-6 text-center">
                      <div className="text-3xl font-extrabold bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-white text-sm font-semibold">{stat.label}</div>
                      <div className="text-gray-600 text-xs">{stat.sub}</div>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <p className="text-xl text-gray-400 leading-relaxed mb-6">
                  Les agences immobili&egrave;res qui int&egrave;grent l&apos;IA vendent <strong className="text-white">40% plus vite</strong>
                  {" "}et convertissent <strong className="text-white">45% plus de prospects</strong>. Sur un march&eacute; aussi
                  comp&eacute;titif que l&apos;immobilier alg&eacute;rien, ces chiffres font la diff&eacute;rence entre les leaders
                  et ceux qui stagnent.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Imaginez estimer un bien en 30 secondes au lieu de 3 jours. Savoir quels quartiers
                  vont prendre de la valeur avant tout le monde. Identifier instantan&eacute;ment les acheteurs
                  les plus chauds parmi vos centaines de contacts. G&eacute;n&eacute;rer des annonces parfaites
                  automatiquement. <strong className="text-gray-300">C&apos;est le pouvoir de l&apos;IA immobili&egrave;re.</strong>
                </p>
              </Reveal>
            </section>

            {/* ── Section 2: Estimation & prédiction ── */}
            <section id="estimation" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-px h-8 bg-gradient-to-b from-purple-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Estimation Automatique &amp; Pr&eacute;diction de March&eacute;
                  </h2>
                </div>
                <p className="text-gray-500 mb-10 leading-relaxed ml-7">
                  Des algorithmes entra&icirc;n&eacute;s sur les donn&eacute;es du march&eacute; alg&eacute;rien pour des estimations pr&eacute;cises.
                </p>
              </Reveal>

              <div className="space-y-6">
                <Reveal delay={0}>
                  <GlassCard className="p-8 border-purple-500/20">
                    <div className="flex items-start gap-6">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                          <DollarSign className="w-7 h-7 text-purple-400" />
                        </div>
                        <div className="mt-3 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                          <span className="text-purple-300 text-xs font-extrabold">95%</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Estimation Immobili&egrave;re IA</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          L&apos;IA analyse <strong className="text-white">des centaines de param&egrave;tres</strong> : localisation exacte,
                          superficie, &eacute;tat du bien, proximit&eacute; transports/&eacute;coles/commerces, historique des
                          transactions dans le quartier, tendances du march&eacute;. R&eacute;sultat : une estimation
                          pr&eacute;cise en <strong className="text-white">30 secondes</strong> au lieu de 3 jours.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Estimation instantan\u00e9e", "Multi-crit\u00e8res", "48 wilayas", "Historique transactions", "Comparables"].map((tag) => (
                            <span key={tag} className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-lg text-xs font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>

                <Reveal delay={0.1}>
                  <GlassCard className="p-8 border-cyan-500/20">
                    <div className="flex items-start gap-6">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                          <TrendingUp className="w-7 h-7 text-cyan-400" />
                        </div>
                        <div className="mt-3 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30">
                          <span className="text-cyan-300 text-xs font-extrabold">PRED</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Pr&eacute;diction des Tendances de March&eacute;</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          L&apos;IA croise les donn&eacute;es immobili&egrave;res avec les indicateurs &eacute;conomiques, les projets
                          d&apos;urbanisme, et les mouvements de population pour <strong className="text-white">pr&eacute;dire l&apos;&eacute;volution
                          des prix par quartier</strong>. Anticipez les zones &agrave; fort potentiel avant la concurrence.
                          Identifiez les secteurs &agrave; &eacute;viter.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["\u00c9volution prix", "Zones \u00e0 potentiel", "Projets urbanisme", "Indicateurs \u00e9conomiques", "Pr\u00e9vision 12 mois"].map((tag) => (
                            <span key={tag} className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-lg text-xs font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>

                <Reveal delay={0.15}>
                  <GlassCard className="p-8 border-green-500/20">
                    <div className="flex items-start gap-6">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                          <MapPin className="w-7 h-7 text-green-400" />
                        </div>
                        <div className="mt-3 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                          <span className="text-green-300 text-xs font-extrabold">GEO</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Analyse G&eacute;ospatiale IA</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          Cartographie interactive des prix par zone, heatmaps de la demande, analyse
                          d&apos;accessibilit&eacute; (distance transports, &eacute;coles, h&ocirc;pitaux), et comparaison entre
                          quartiers. <strong className="text-white">Visualisez le march&eacute; comme jamais auparavant</strong> avec
                          des donn&eacute;es g&eacute;olocalis&eacute;es pr&eacute;cises.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Carte des prix", "Heatmap demande", "Accessibilit\u00e9", "Comparaison quartiers", "Donn\u00e9es satellite"].map((tag) => (
                            <span key={tag} className="bg-green-500/10 text-green-400 px-3 py-1 rounded-lg text-xs font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>
              </div>
            </section>

            {/* ── Section 3: Scoring leads & visites virtuelles ── */}
            <section id="scoring" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-amber-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Scoring Leads &amp; Visites Virtuelles IA
                  </h2>
                </div>
              </Reveal>

              <div className="grid lg:grid-cols-2 gap-5">
                <GlassCard className="p-8 border-amber-500/20" delay={0}>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Scoring Leads IA</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    L&apos;IA identifie les prospects les plus chauds parmi vos contacts pour que vos agents concentrent leurs efforts sur les meilleurs leads.
                  </p>
                  <ul className="space-y-2.5">
                    {["Score 0-100 par prospect", "Analyse comportementale", "Budget & capacit\u00e9 d'achat", "Matching bien-acheteur IA", "Alertes leads chauds", "Historique interactions"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-amber-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <GlassCard className="p-8 border-pink-500/20" delay={0.1}>
                  <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-6">
                    <Camera className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Visites Virtuelles IA</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Visites immersives 360&deg; augment&eacute;es par l&apos;IA. Staging virtuel, r&eacute;novation simul&eacute;e, informations contextuelles.
                  </p>
                  <ul className="space-y-2.5">
                    {["Visite 360\u00b0 immersive", "Staging virtuel (meubler)", "R\u00e9novation simul\u00e9e", "Infos quartier int\u00e9gr\u00e9es", "Partage WhatsApp/social", "Compatible mobile"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-pink-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>

              <Reveal delay={0.2}>
                <div className="mt-8 backdrop-blur-xl bg-amber-500/[0.04] border border-amber-500/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-amber-400" />
                    R&eacute;sultats concrets
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Les agences utilisant le scoring leads IA convertissent 45% plus de prospects. Les biens
                    avec visite virtuelle se vendent 40% plus vite. Combin&eacute;s avec l&apos;estimation IA et la
                    g&eacute;n&eacute;ration d&apos;annonces, c&apos;est une transformation compl&egrave;te de la productivit&eacute; de l&apos;agence.
                  </p>
                </div>
              </Reveal>
            </section>

            {/* ── Section 4: Annonces & analyse investissement ── */}
            <section id="annonces" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-px h-8 bg-gradient-to-b from-violet-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    G&eacute;n&eacute;ration d&apos;Annonces &amp; Analyse d&apos;Investissement
                  </h2>
                </div>
                <p className="text-gray-500 mb-10 leading-relaxed ml-7">
                  L&apos;IA cr&eacute;e des annonces parfaites et analyse la rentabilit&eacute; de chaque investissement.
                </p>
              </Reveal>

              <div className="space-y-4">
                <Reveal delay={0}>
                  <div className="flex gap-6 items-start group">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-violet-500/5 border border-violet-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <FileText className="w-7 h-7 text-violet-400" />
                      </div>
                      <div className="w-px h-12 bg-gradient-to-b from-violet-500/40 to-orange-500/40 mt-2" />
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-gray-600 tracking-widest">ANNONCES</span>
                        <h3 className="text-lg font-bold text-white">G&eacute;n&eacute;ration Automatique d&apos;Annonces</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">
                        L&apos;IA g&eacute;n&egrave;re des descriptions de biens compl&egrave;tes et attractives en fran&ccedil;ais et arabe.
                        &Agrave; partir de quelques caract&eacute;ristiques et photos, elle cr&eacute;e un texte optimis&eacute;
                        pour le SEO et les portails immobiliers. 3x plus d&apos;annonces publi&eacute;es, 3x plus
                        de visibilit&eacute;.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-violet-500/10 text-violet-400 px-3 py-1 rounded-lg text-xs font-medium">G&eacute;n&eacute;ration FR/AR</span>
                        <span className="bg-violet-500/10 text-violet-400 px-3 py-1 rounded-lg text-xs font-medium">SEO optimis&eacute;</span>
                        <span className="bg-violet-500/10 text-violet-400 px-3 py-1 rounded-lg text-xs font-medium">Multi-plateforme</span>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="flex gap-6 items-start group">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <LineChart className="w-7 h-7 text-orange-400" />
                      </div>
                      <div className="w-px h-12 bg-gradient-to-b from-orange-500/40 to-cyan-500/40 mt-2" />
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-gray-600 tracking-widest">INVESTISSEMENT</span>
                        <h3 className="text-lg font-bold text-white">Analyse de Rentabilit&eacute; IA</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">
                        L&apos;IA calcule le rendement locatif attendu, le potentiel de plus-value, le cashflow
                        pr&eacute;visionnel, et le risque associ&eacute; &agrave; chaque investissement immobilier.
                        Des d&eacute;cisions d&apos;investissement bas&eacute;es sur les donn&eacute;es, pas sur l&apos;intuition.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-lg text-xs font-medium">Rendement locatif</span>
                        <span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-lg text-xs font-medium">Plus-value pr&eacute;vue</span>
                        <span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-lg text-xs font-medium">Analyse risque</span>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="flex gap-6 items-start group">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Bot className="w-7 h-7 text-cyan-400" />
                      </div>
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-gray-600 tracking-widest">CRM</span>
                        <h3 className="text-lg font-bold text-white">CRM Immobilier IA</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">
                        CRM sp&eacute;cialis&eacute; immobilier avec IA int&eacute;gr&eacute;e : matching automatique acheteur-bien,
                        relances intelligentes, pipeline de vente pr&eacute;dictif, rapports automatiques,
                        int&eacute;gration WhatsApp pour la communication client.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-lg text-xs font-medium">Matching IA</span>
                        <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-lg text-xs font-medium">Pipeline pr&eacute;dictif</span>
                        <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-lg text-xs font-medium">WhatsApp</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* ── Section 5: Pourquoi Symloop ── */}
            <section id="pourquoi" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Pourquoi Symloop pour l&apos;Immobilier IA
                  </h2>
                </div>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-3 mb-12">
                {[
                  { icon: MapPin, title: "Donn\u00e9es march\u00e9 DZ", desc: "Mod\u00e8les IA entra\u00een\u00e9s sur les donn\u00e9es immobili\u00e8res alg\u00e9riennes, 48 wilayas couvertes" },
                  { icon: Cpu, title: "IA de pointe", desc: "Machine Learning, Computer Vision, NLP pour une solution compl\u00e8te et performante" },
                  { icon: Users, title: "\u00c9quipe locale", desc: "Bas\u00e9s \u00e0 S\u00e9tif, disponibles en fran\u00e7ais et arabe, compr\u00e9hension du march\u00e9 local" },
                  { icon: Globe, title: "Bilingue FR/AR", desc: "Interface et g\u00e9n\u00e9ration de contenu en fran\u00e7ais et arabe natifs" },
                  { icon: Zap, title: "D\u00e9ploiement rapide", desc: "Premi\u00e8re version op\u00e9rationnelle en 3-4 semaines, \u00e9volutions continues" },
                  { icon: Shield, title: "Donn\u00e9es s\u00e9curis\u00e9es", desc: "Confidentialit\u00e9 des donn\u00e9es clients et transactions garantie" },
                  { icon: Star, title: "R\u00e9sultats prouv\u00e9s", desc: "+45% conversion leads, -40% temps de vente, estimations 95% pr\u00e9cises" },
                  { icon: Rocket, title: "Support complet", desc: "Formation \u00e9quipes, support technique, optimisation continue des mod\u00e8les" },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/[0.02] transition-colors">
                      <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm mb-0.5">{item.title}</h3>
                        <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <div className="backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-white mb-4">Notre approche immobilier</h4>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {[
                      { num: "01", text: "Adapt\u00e9 au march\u00e9 alg\u00e9rien \u2014 pas une solution g\u00e9n\u00e9rique import\u00e9e" },
                      { num: "02", text: "Int\u00e9gration avec les portails immobiliers existants en Alg\u00e9rie" },
                      { num: "03", text: "R\u00e9sultats mesurables d\u00e8s le premier mois d'utilisation" },
                    ].map((item, i) => (
                      <div key={i} className="text-center">
                        <div className="text-3xl font-extrabold bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent mb-2">{item.num}</div>
                        <p className="text-gray-500 text-xs leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ── Section 6: FAQ ── */}
            <section id="faq" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Questions Fr&eacute;quentes sur l&apos;IA Immobilier
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
                    { href: "/blog/logiciel-immobilier-agence-algerie-2026", label: "Logiciel Immobilier & Agence Alg\u00e9rie 2026" },
                    { href: "/blog/intelligence-artificielle-automatisation-business-algerie-2026", label: "Intelligence Artificielle & Automatisation Business Alg\u00e9rie 2026" },
                    { href: "/blog/developpement-site-web-algerie-2026", label: "D\u00e9veloppement Site Web Alg\u00e9rie 2026" },
                    { href: "/blog/solutions-informatiques-algerie-2026", label: "Solutions Informatiques Alg\u00e9rie 2026" },
                  ].map((link, i) => (
                    <Link key={i} href={link.href} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-orange-500/[0.06] hover:border-orange-500/20 transition-all text-sm text-gray-500 hover:text-orange-400">
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
                {(blog?.tags || ["IA immobilier alg\u00e9rie", "estimation immobili\u00e8re IA", "pr\u00e9diction prix immobilier", "scoring leads immobilier", "visite virtuelle IA", "PropTech alg\u00e9rie 2026", "CRM immobilier IA"]).map((tag, i) => (
                  <span key={i} className="bg-white/[0.03] text-gray-600 px-3 py-1.5 rounded-lg text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </article>

        {/* ═══════════════════════════════════════════
            CTA
        ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-24">
          <FloatingOrb color="radial-gradient(circle, #f97316, transparent 70%)" size="450px" x="5%" y="-25%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #8b5cf6, transparent 70%)" size="400px" x="65%" y="15%" delay={4} />
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="350px" x="35%" y="50%" delay={7} />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 backdrop-blur-md border border-orange-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-8">
                <Building2 className="w-3.5 h-3.5" />
                Immobilier IA
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Transformez Votre Agence avec{" "}
                <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  l&apos;Intelligence Artificielle
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-4 leading-relaxed">
                Estimation instantan&eacute;e, scoring leads, visites virtuelles, pr&eacute;diction de march&eacute; &mdash;
                l&apos;IA donne &agrave; votre agence un avantage d&eacute;cisif.
              </p>
              <p className="text-gray-500 text-base mb-10 leading-relaxed">
                <strong className="text-white">Consultation gratuite.</strong> Appelez-nous pour discuter de votre projet immobilier IA.
                Z&eacute;ro engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/213549575512?text=Bonjour, je veux int%C3%A9grer l'IA dans mon agence immobili%C3%A8re"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-white text-gray-950 px-8 py-4 rounded-2xl font-semibold hover:bg-orange-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Consultation Immobilier IA WhatsApp
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
                    <GlassCard className="p-6 h-full hover:border-orange-500/20 transition-colors">
                      <span className="text-[10px] font-bold text-orange-400 tracking-widest uppercase mb-3 block">{post.category}</span>
                      <h3 className="text-white font-semibold text-sm group-hover:text-orange-400 transition-colors mb-2">{post.title}</h3>
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
