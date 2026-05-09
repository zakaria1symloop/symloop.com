"use client";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Zap, CheckCircle, TrendingUp, MessageCircle, BarChart3, Target, Cpu, Rocket, Users, Building2, ChevronRight, Phone, Brain, Bot, Sparkles, Eye, Cog, LineChart, Shield, Globe, Star, Layers, Activity, Database, Mail, Share2, Factory, ShoppingCart, Lightbulb, Award, Timer, DollarSign, PieChart, Workflow } from "lucide-react";
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

export default function IaAnalysePredictiveBusinessIntelligenceAlgerie2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const blog = getBlogBySlug('ia-analyse-predictive-business-intelligence-algerie-2026');
  const relatedBlogs = getRelatedBlogs('ia-analyse-predictive-business-intelligence-algerie-2026', 3);

  const forecastAccuracy = useCounter(95, 2500, statsInView);
  const costReduction = useCounter(60, 2000, statsInView);
  const decisionSpeed = useCounter(50, 2000, statsInView);

  const faqItems = [
    {
      question: "C'est quoi l'analyse pr\u00e9dictive et comment \u00e7a aide les entreprises alg\u00e9riennes ?",
      answer: "L'analyse pr\u00e9dictive utilise le machine learning et les statistiques avanc\u00e9es pour pr\u00e9dire les \u00e9v\u00e9nements futurs \u00e0 partir de vos donn\u00e9es historiques. Pour une entreprise alg\u00e9rienne, cela signifie : pr\u00e9voir les ventes du mois prochain avec 95% de pr\u00e9cision, anticiper les ruptures de stock, identifier les clients \u00e0 risque de d\u00e9part, et optimiser les achats. Symloop d\u00e9veloppe des solutions d'analyse pr\u00e9dictive sur mesure. Contact : +213 549 575 512."
    },
    {
      question: "De quelles donn\u00e9es ai-je besoin pour l'analyse pr\u00e9dictive ?",
      answer: "Toute donn\u00e9e existante est exploitable : historique de ventes, donn\u00e9es clients, stocks, factures, logs de navigation web, interactions CRM. M\u00eame des donn\u00e9es basiques en Excel peuvent \u00eatre utilis\u00e9es pour d\u00e9marrer. Plus vous avez d'historique (id\u00e9alement 12+ mois), plus les pr\u00e9dictions sont pr\u00e9cises. Symloop vous aide \u00e0 structurer et nettoyer vos donn\u00e9es."
    },
    {
      question: "Quelle est la diff\u00e9rence entre Business Intelligence et analyse pr\u00e9dictive ?",
      answer: "La Business Intelligence (BI) traditionnelle montre ce qui s'est PASS\u00c9 (rapports, tableaux de bord historiques). L'analyse pr\u00e9dictive va plus loin : elle pr\u00e9dit ce qui VA SE PASSER. La BI vous dit 'les ventes ont baiss\u00e9 de 10% le mois dernier'. L'analyse pr\u00e9dictive vous dit 'les ventes vont baisser de 15% le mois prochain, voici pourquoi et comment l'\u00e9viter'. C'est passer du r\u00e9troviseur au GPS."
    },
    {
      question: "Combien de temps faut-il pour voir des r\u00e9sultats avec l'analyse pr\u00e9dictive ?",
      answer: "Les premiers dashboards BI sont op\u00e9rationnels en 2 \u00e0 4 semaines. Les mod\u00e8les pr\u00e9dictifs de base (pr\u00e9vision ventes, scoring clients) produisent des r\u00e9sultats exploitables en 4 \u00e0 6 semaines. Les mod\u00e8les avanc\u00e9s (churn prediction, optimisation stocks) n\u00e9cessitent 8 \u00e0 12 semaines. L'investissement est r\u00e9cup\u00e9r\u00e9 en moyenne en 3 mois gr\u00e2ce aux \u00e9conomies g\u00e9n\u00e9r\u00e9es."
    },
    {
      question: "Est-ce que l'analyse pr\u00e9dictive fonctionne pour les PME alg\u00e9riennes ?",
      answer: "Absolument. L'analyse pr\u00e9dictive n'est plus r\u00e9serv\u00e9e aux grandes entreprises. Gr\u00e2ce au cloud et aux outils modernes, une PME alg\u00e9rienne peut avoir des dashboards IA et des mod\u00e8les pr\u00e9dictifs performants. Symloop adapte les solutions \u00e0 la taille et au budget de chaque entreprise. M\u00eame un commerce avec 12 mois d'historique de ventes peut b\u00e9n\u00e9ficier de la pr\u00e9diction. Contactez-nous : +213 549 575 512."
    }
  ];

  return (
    <>
      <Head>
        <title>Analyse Pr\u00e9dictive & Business Intelligence IA Alg\u00e9rie 2026 | Symloop</title>
        <meta name="description" content="Solutions d'analyse pr\u00e9dictive et business intelligence IA pour les entreprises alg\u00e9riennes. Pr\u00e9vision des ventes, pr\u00e9diction de la demande, anti-churn, optimisation stocks. Dashboards IA temps r\u00e9el. Symloop. Contact: +213 549 575 512." />
        <meta name="keywords" content="analyse pr\u00e9dictive alg\u00e9rie, business intelligence alg\u00e9rie, BI IA alg\u00e9rie, pr\u00e9vision ventes IA alg\u00e9rie, dashboard analytique alg\u00e9rie, machine learning business alg\u00e9rie, data analytics alg\u00e9rie 2026, pr\u00e9diction demande alg\u00e9rie" />
        <link rel="canonical" href="https://symloop.com/blog/ia-analyse-predictive-business-intelligence-algerie-2026/" />

        <meta property="og:title" content="Analyse Pr\u00e9dictive & BI IA en Alg\u00e9rie 2026 | Symloop" />
        <meta property="og:description" content="Solutions d'analyse pr\u00e9dictive et business intelligence pour entreprises alg\u00e9riennes. Pr\u00e9vision ventes, anti-churn, optimisation stocks. Dashboards IA." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/ia-analyse-predictive-business-intelligence-algerie-2026/" />
        <meta property="og:site_name" content="Symloop" />
        <meta property="og:locale" content="fr_DZ" />
        <meta property="og:locale:alternate" content="ar_DZ" />
        <meta property="og:locale:alternate" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Analyse Pr\u00e9dictive & BI IA Alg\u00e9rie 2026 | Symloop" />
        <meta name="twitter:description" content="Analyse pr\u00e9dictive et BI IA pour entreprises alg\u00e9riennes. Pr\u00e9vision ventes, anti-churn, dashboards temps r\u00e9el." />

        {/* Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Analyse Pr\u00e9dictive & Business Intelligence IA en Alg\u00e9rie 2026",
            "description": "Guide complet sur l'analyse pr\u00e9dictive et la business intelligence IA pour les entreprises alg\u00e9riennes. Pr\u00e9vision des ventes, pr\u00e9diction de la demande, anti-churn, optimisation stocks.",
            "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
            "publisher": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
            "datePublished": "2026-04-01",
            "dateModified": "2026-04-01",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://symloop.com/blog/ia-analyse-predictive-business-intelligence-algerie-2026/" },
            "articleSection": "Analyse Pr\u00e9dictive & BI",
            "inLanguage": "fr-DZ",
            "keywords": "analyse pr\u00e9dictive alg\u00e9rie, business intelligence IA, pr\u00e9vision ventes, machine learning business alg\u00e9rie"
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
              { "@type": "ListItem", "position": 3, "name": "Analyse Pr\u00e9dictive & BI IA Alg\u00e9rie 2026", "item": "https://symloop.com/blog/ia-analyse-predictive-business-intelligence-algerie-2026/" }
            ]
          })}
        </script>

        {/* Speakable */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Analyse Pr\u00e9dictive & BI IA Alg\u00e9rie 2026",
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "[data-speakable]", "#faq"] },
            "url": "https://symloop.com/blog/ia-analyse-predictive-business-intelligence-algerie-2026/"
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
            "knowsAbout": ["Analyse Pr\u00e9dictive", "Business Intelligence", "Machine Learning", "Data Analytics", "Pr\u00e9vision Ventes", "Dashboard IA"],
            "areaServed": { "@type": "Country", "name": "Algeria" }
          })}
        </script>
      </Head>

      <div className={`min-h-screen bg-gray-950 ${isRTL ? 'rtl' : 'ltr'}`}>

        {/* ═══════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════ */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="650px" x="-8%" y="-10%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #22c55e, transparent 70%)" size="550px" x="55%" y="5%" delay={2} />
          <FloatingOrb color="radial-gradient(circle, #8b5cf6, transparent 70%)" size="500px" x="25%" y="50%" delay={5} />
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="400px" x="75%" y="55%" delay={8} />
          <FloatingOrb color="radial-gradient(circle, #22c55e, transparent 70%)" size="350px" x="5%" y="65%" delay={11} />

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
                  <li><Link href="/" className="hover:text-cyan-400 transition-colors">Accueil</Link></li>
                  <li className="text-gray-700">/</li>
                  <li><Link href="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link></li>
                  <li className="text-gray-700">/</li>
                  <li className="text-cyan-400">Analyse Pr&eacute;dictive &amp; BI IA Alg&eacute;rie 2026</li>
                </ol>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="bg-cyan-500/20 text-cyan-300 backdrop-blur-md border border-cyan-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase flex items-center gap-2">
                  <BarChart3 className="w-3.5 h-3.5" />
                  Analyse Pr&eacute;dictive
                </span>
                <span className="bg-green-500/20 text-green-300 backdrop-blur-md border border-green-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                  2026
                </span>
                <span className="bg-purple-500/20 text-purple-300 backdrop-blur-md border border-purple-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                  Data-Driven
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                Analyse Pr&eacute;dictive &amp;{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
                  Business Intelligence
                </span>{" "}
                IA en Alg&eacute;rie 2026
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg sm:text-xl text-gray-400 max-w-3xl leading-relaxed mb-10"
              >
                Arr&ecirc;tez de piloter votre entreprise au r&eacute;troviseur. L&apos;analyse pr&eacute;dictive IA vous
                donne le GPS : pr&eacute;voyez les ventes, anticipez la demande, &eacute;liminez le churn,
                et optimisez chaque d&eacute;cision &mdash; avant qu&apos;il ne soit trop tard.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="flex items-center gap-8 text-xs text-gray-500 tracking-wide uppercase"
              >
                <div className="flex items-center gap-2"><User className="w-3.5 h-3.5" /> Symloop Data Team</div>
                <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> 1 Avril 2026</div>
                <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> 20 min</div>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />
        </section>

        {/* ═══════════════════════════════════════════
            EN BREF
        ═══════════════════════════════════════════ */}
        <section className="relative z-10 -mt-16 mb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div data-speakable="summary" className="backdrop-blur-xl bg-white/[0.04] border border-cyan-500/20 rounded-3xl p-8">
                <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-3">En bref</h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  <strong className="text-white">Symloop</strong> d&eacute;veloppe des solutions d&apos;analyse pr&eacute;dictive et business intelligence
                  pour les entreprises alg&eacute;riennes. Pr&eacute;vision des ventes, pr&eacute;diction de la demande,
                  anti-churn, optimisation stocks. Dashboards IA temps r&eacute;el.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">Contact :</strong> +213 549 575 512 &mdash; consultation gratuite.
                  Technologies : TensorFlow, PyTorch, Scikit-learn, Power BI, Tableau, Python.
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
                    { num: "01", title: "Pourquoi vos donn\u00e9es sont votre plus grand actif", id: "donnees" },
                    { num: "02", title: "Les 5 piliers de l'analyse pr\u00e9dictive", id: "piliers" },
                    { num: "03", title: "Dashboards BI intelligents", id: "dashboards" },
                    { num: "04", title: "Cas concrets par secteur en Alg\u00e9rie", id: "secteurs" },
                    { num: "05", title: "Notre approche data-driven", id: "approche" },
                    { num: "06", title: "Questions fr\u00e9quentes", id: "faq" },
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

            {/* ── Section 1: Vos données ── */}
            <section id="donnees" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Vos Donn&eacute;es Sont Votre Plus Grand Actif
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="backdrop-blur-xl bg-cyan-500/[0.06] border border-cyan-500/20 rounded-2xl p-8 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <Database className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Vous avez une mine d&apos;or dans vos fichiers Excel</h3>
                      <p className="text-gray-400 leading-relaxed">
                        Chaque facture, chaque vente, chaque interaction client est une donn&eacute;e pr&eacute;cieuse.
                        Mais sans l&apos;IA, ces donn&eacute;es dorment dans des fichiers Excel et des syst&egrave;mes d&eacute;connect&eacute;s.
                        <strong className="text-white"> L&apos;analyse pr&eacute;dictive transforme vos donn&eacute;es mortes en d&eacute;cisions vivantes.</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {[
                  { value: "95%", label: "Pr\u00e9cision", sub: "pr\u00e9vision des ventes IA" },
                  { value: "60%", label: "R\u00e9duction co\u00fbts", sub: "gr\u00e2ce \u00e0 l'optimisation IA" },
                  { value: "50x", label: "Plus rapide", sub: "que l'analyse manuelle" },
                  { value: "3 mois", label: "ROI moyen", sub: "retour sur investissement" },
                ].map((stat, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <GlassCard className="p-6 text-center">
                      <div className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-1">
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
                  Les entreprises qui utilisent l&apos;analyse pr&eacute;dictive prennent des d&eacute;cisions
                  <strong className="text-white"> 50 fois plus vite et 95% plus pr&eacute;cises</strong> que celles qui
                  se fient &agrave; l&apos;intuition ou aux rapports Excel manuels.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-lg text-gray-500 leading-relaxed mb-6">
                  Votre concurrent commande ses stocks au feeling. Vous, vous savez exactement ce qui
                  va se vendre la semaine prochaine, dans quelle wilaya, et en quelle quantit&eacute;.
                  <strong className="text-gray-300"> C&apos;est &ccedil;a, l&apos;avantage de l&apos;analyse pr&eacute;dictive.</strong>
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="backdrop-blur-xl bg-green-500/[0.04] border border-green-500/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    Du r&eacute;troviseur au GPS
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    La BI traditionnelle vous montre o&ugrave; vous &ecirc;tes pass&eacute;. L&apos;analyse pr&eacute;dictive IA vous montre
                    o&ugrave; vous allez &mdash; et surtout, comment y aller plus vite. C&apos;est la diff&eacute;rence entre
                    subir le march&eacute; et le dominer. <strong className="text-gray-300">Chaque entreprise alg&eacute;rienne m&eacute;rite ce GPS.</strong>
                  </p>
                </div>
              </Reveal>
            </section>

            {/* ── Section 2: Les 5 piliers ── */}
            <section id="piliers" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-px h-8 bg-gradient-to-b from-green-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Les 5 Piliers de l&apos;Analyse Pr&eacute;dictive
                  </h2>
                </div>
                <p className="text-gray-500 mb-10 leading-relaxed ml-7">
                  5 applications concr&egrave;tes qui transforment les donn&eacute;es en avantage comp&eacute;titif.
                </p>
              </Reveal>

              <div className="space-y-6">
                {[
                  { icon: LineChart, color: "cyan", title: "Pr\u00e9vision des Ventes", desc: "Pr\u00e9diction du chiffre d'affaires par produit, par r\u00e9gion, par p\u00e9riode. Mod\u00e8les ML entra\u00een\u00e9s sur votre historique qui pr\u00e9voient les ventes avec 95% de pr\u00e9cision. Ajustement automatique selon la saisonnalit\u00e9, les tendances et les \u00e9v\u00e9nements (Ramadan, rentr\u00e9e, etc.).", tags: ["Forecasting", "Saisonnalit\u00e9", "Par produit", "Par r\u00e9gion"] },
                  { icon: Target, color: "green", title: "Pr\u00e9diction de la Demande", desc: "Anticipez ce que vos clients vont acheter avant qu'ils ne le sachent. Analyse des tendances du march\u00e9 alg\u00e9rien, d\u00e9tection des produits en hausse, pr\u00e9diction des quantit\u00e9s n\u00e9cessaires. Fini les ruptures de stock et les surstock co\u00fbteux.", tags: ["Tendances", "Stock optimal", "Z\u00e9ro rupture", "Anti-surstock"] },
                  { icon: Users, color: "purple", title: "Anti-Churn & Fid\u00e9lisation", desc: "Identifiez les clients \u00e0 risque de d\u00e9part 30 jours avant qu'ils ne partent. L'IA analyse les signaux faibles : baisse de fr\u00e9quence d'achat, recul du panier moyen, d\u00e9sengagement. Actions de r\u00e9tention cibl\u00e9es pour sauver chaque client \u00e0 risque.", tags: ["D\u00e9tection risque", "30j d'avance", "Actions cibl\u00e9es", "R\u00e9tention"] },
                  { icon: ShoppingCart, color: "orange", title: "Optimisation des Stocks", desc: "Stock optimal calcul\u00e9 par IA pour chaque produit, chaque point de vente. R\u00e9duction des co\u00fbts de stockage de 40%, \u00e9limination des ruptures de 90%. L'IA g\u00e8re les r\u00e9approvisionnements automatiquement en fonction des pr\u00e9visions de demande.", tags: ["Stock optimal", "-40% co\u00fbts", "-90% ruptures", "R\u00e9appro auto"] },
                  { icon: PieChart, color: "pink", title: "Segmentation Client IA", desc: "D\u00e9couvrez des segments de clients invisibles \u00e0 l'\u0153il humain. L'IA regroupe vos clients par comportement d'achat, valeur, pr\u00e9f\u00e9rences. Personnalisez vos offres et vos prix pour chaque segment. Augmentation du panier moyen de 25% en moyenne.", tags: ["Clustering IA", "Micro-segments", "Personnalisation", "+25% panier"] },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <GlassCard className={`p-8 border-${item.color}-500/20`}>
                      <div className="flex items-start gap-6">
                        <div className="flex flex-col items-center flex-shrink-0">
                          <div className={`w-14 h-14 rounded-2xl bg-${item.color}-500/10 border border-${item.color}-500/20 flex items-center justify-center`}>
                            <item.icon className={`w-7 h-7 text-${item.color}-400`} />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                          <p className="text-gray-400 leading-relaxed mb-4">{item.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span key={tag} className={`bg-${item.color}-500/10 text-${item.color}-400 px-3 py-1 rounded-lg text-xs font-medium`}>{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* ── Section 3: Dashboards BI ── */}
            <section id="dashboards" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-purple-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Dashboards BI Intelligents
                  </h2>
                </div>
              </Reveal>

              <div className="grid lg:grid-cols-3 gap-5 mb-10">
                <GlassCard className="p-8" delay={0}>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                    <BarChart3 className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Temps R&eacute;el</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Donn&eacute;es actualis&eacute;es en temps r&eacute;el. Vos KPI en un coup d&apos;&oelig;il, sur mobile ou desktop.
                  </p>
                  <ul className="space-y-2.5">
                    {["CA en temps r\u00e9el", "KPI dynamiques", "Alertes automatiques", "Mobile responsive", "Filtres avanc\u00e9s", "Export auto"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <GlassCard className="p-8 border-green-500/20" delay={0.1}>
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                    <Brain className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">IA Embarqu&eacute;e</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Le dashboard ne montre pas juste les chiffres. Il explique pourquoi et recommande quoi faire.
                  </p>
                  <ul className="space-y-2.5">
                    {["Insights automatiques", "Recommandations IA", "D\u00e9tection anomalies", "Tendances cach\u00e9es", "Questions en langage naturel", "Rapports auto"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-green-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <GlassCard className="p-8 border-purple-500/20" delay={0.2}>
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                    <LineChart className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Pr&eacute;dictif</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Visualisez le futur. Courbes de pr&eacute;vision, sc&eacute;narios what-if, alertes pr&eacute;dictives.
                  </p>
                  <ul className="space-y-2.5">
                    {["Courbes pr\u00e9vision", "Sc\u00e9narios what-if", "Alertes pr\u00e9dictives", "Comparaison r\u00e9el vs pr\u00e9vu", "Drill-down intelligent", "Partage \u00e9quipe"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-purple-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </section>

            {/* ── Section 4: Cas concrets ── */}
            <section id="secteurs" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-orange-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Cas Concrets par Secteur en Alg&eacute;rie
                  </h2>
                </div>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-3 mb-12">
                {[
                  { icon: ShoppingCart, title: "Retail & Distribution", desc: "Pr\u00e9vision de demande par point de vente, optimisation stocks, pricing dynamique, analyse du panier moyen." },
                  { icon: Factory, title: "Industrie & Manufacturing", desc: "Pr\u00e9diction de pannes machines, optimisation production, contr\u00f4le qualit\u00e9 pr\u00e9dictif, gestion approvisionnement." },
                  { icon: Building2, title: "Immobilier", desc: "Pr\u00e9diction des prix par quartier, analyse de la demande, scoring des acheteurs, tendances march\u00e9 local." },
                  { icon: DollarSign, title: "Finance & Banque", desc: "Scoring cr\u00e9dit IA, d\u00e9tection de fraude, pr\u00e9vision risques, analyse portefeuille client." },
                  { icon: Activity, title: "Sant\u00e9", desc: "Pr\u00e9diction des flux patients, optimisation plannings, gestion stocks m\u00e9dicaments, analyse \u00e9pid\u00e9miologique." },
                  { icon: Lightbulb, title: "Agriculture", desc: "Pr\u00e9vision des r\u00e9coltes, optimisation irrigation, analyse qualit\u00e9 sols, pr\u00e9diction prix march\u00e9." },
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

            {/* ── Section 5: Approche data-driven ── */}
            <section id="approche" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-px h-8 bg-gradient-to-b from-yellow-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Notre Approche Data-Driven
                  </h2>
                </div>
                <p className="text-gray-500 mb-10 leading-relaxed ml-7">
                  De la collecte des donn&eacute;es aux d&eacute;cisions strat&eacute;giques, notre processus &eacute;prouv&eacute;.
                </p>
              </Reveal>

              <div className="space-y-4">
                {[
                  { phase: "SEMAINE 1", multiplier: "01", title: "Audit Donn\u00e9es & Sources", color: "cyan", desc: "Inventaire de toutes vos sources de donn\u00e9es : ERP, CRM, Excel, bases de donn\u00e9es, logs. \u00c9valuation de la qualit\u00e9 et du volume. Identification des donn\u00e9es manquantes. Plan de collecte et de nettoyage." },
                  { phase: "SEMAINE 2-3", multiplier: "02", title: "Data Pipeline & Nettoyage", color: "green", desc: "Construction du pipeline de donn\u00e9es automatis\u00e9. Nettoyage, transformation, enrichissement. Cr\u00e9ation du data warehouse. Connexion de toutes vos sources en temps r\u00e9el." },
                  { phase: "SEMAINE 4-6", multiplier: "03", title: "Mod\u00e8les ML & Dashboards", color: "purple", desc: "Entra\u00eenement des mod\u00e8les pr\u00e9dictifs sur vos donn\u00e9es. Construction des dashboards BI interactifs. Validation des pr\u00e9dictions avec vos \u00e9quipes. It\u00e9rations et am\u00e9liorations." },
                  { phase: "SEMAINE 7-8", multiplier: "04", title: "D\u00e9ploiement & Formation", color: "yellow", desc: "Mise en production. Formation de vos \u00e9quipes sur les dashboards et les insights IA. Support continu. Optimisation des mod\u00e8les au fil du temps avec de nouvelles donn\u00e9es." },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="flex gap-6 items-start group">
                      <div className="flex flex-col items-center">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-500/5 border border-${item.color}-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <span className={`text-${item.color}-400 text-xs font-extrabold`}>{item.multiplier}</span>
                        </div>
                        {i < 3 && <div className={`w-px h-12 bg-gradient-to-b from-${item.color}-500/40 to-transparent mt-2`} />}
                      </div>
                      <div className="pb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[10px] font-bold text-gray-600 tracking-widest">{item.phase}</span>
                          <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.25}>
                <div className="mt-10 backdrop-blur-xl bg-gradient-to-r from-cyan-500/[0.06] via-green-500/[0.06] to-purple-500/[0.06] border border-white/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-cyan-400" />
                    Premiers insights en 2 semaines
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Vous n&apos;avez pas besoin d&apos;attendre des mois pour voir des r&eacute;sultats. D&egrave;s la deuxi&egrave;me semaine,
                    vous avez vos premiers dashboards et vos premiers insights exploitables.
                    <strong className="text-gray-300"> Les d&eacute;cisions data-driven commencent imm&eacute;diatement.</strong>
                  </p>
                </div>
              </Reveal>
            </section>

            {/* ── Section 6: FAQ ── */}
            <section id="faq" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Questions Fr&eacute;quentes sur l&apos;Analyse Pr&eacute;dictive
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
                    { href: "/blog/intelligence-artificielle-automatisation-business-algerie-2026", label: "Intelligence Artificielle & Automatisation Business Alg\u00e9rie 2026" },
                    { href: "/blog/digitaliser-entreprise-algerie-ne-perdez-plus-1-dinar", label: "Digitaliser Votre Entreprise : Ne Perdez Plus 1 Dinar" },
                    { href: "/blog/ia-saas-plateforme-algerie-2026", label: "Plateformes SaaS IA en Alg\u00e9rie 2026" },
                    { href: "/blog/ia-automatisation-processus-rpa-algerie-2026", label: "Automatisation des Processus & RPA par IA Alg\u00e9rie 2026" },
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
                {(blog?.tags || ["analyse pr\u00e9dictive alg\u00e9rie", "business intelligence IA", "pr\u00e9vision ventes", "machine learning business", "dashboard analytique", "data analytics alg\u00e9rie", "anti-churn IA", "optimisation stocks IA"]).map((tag, i) => (
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
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="450px" x="5%" y="-25%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #22c55e, transparent 70%)" size="400px" x="65%" y="15%" delay={4} />
          <FloatingOrb color="radial-gradient(circle, #8b5cf6, transparent 70%)" size="350px" x="35%" y="50%" delay={7} />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 backdrop-blur-md border border-cyan-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-8">
                <BarChart3 className="w-3.5 h-3.5" />
                Analyse Pr&eacute;dictive
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Vos Donn&eacute;es Ont des{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
                  R&eacute;ponses &agrave; Vos Questions
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-4 leading-relaxed">
                Ne laissez plus vos donn&eacute;es dormir dans des fichiers Excel.
                Transformez-les en d&eacute;cisions strat&eacute;giques et en avantage comp&eacute;titif.
              </p>
              <p className="text-gray-500 text-base mb-10 leading-relaxed">
                <strong className="text-white">Consultation gratuite.</strong> Envoyez-nous vos d&eacute;fis data,
                et recevez une analyse de potentiel IA personnalis&eacute;e en 48h.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/213549575512?text=Bonjour, je veux une solution d'analyse pr%C3%A9dictive pour mon entreprise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-white text-gray-950 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Consultation Data Gratuite
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
