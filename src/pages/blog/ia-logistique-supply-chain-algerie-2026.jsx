"use client";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Zap, CheckCircle, TrendingUp, MessageCircle, BarChart3, Target, Cpu, Rocket, Users, Building2, ChevronRight, Phone, Brain, Bot, Sparkles, Eye, Cog, LineChart, Shield, Globe, Star, Layers, Activity, Database, Mail, Share2, Lightbulb, Award, Timer, DollarSign, PieChart, Truck, Package, MapPin, Navigation, Warehouse, RefreshCw, Route, BarChart2, Boxes, Clock3 } from "lucide-react";
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

export default function IALogistiqueSupplyChainAlgerie2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const blog = getBlogBySlug('ia-logistique-supply-chain-algerie-2026');
  const relatedBlogs = getRelatedBlogs('ia-logistique-supply-chain-algerie-2026', 3);

  const costReduction = useCounter(30, 2500, statsInView);
  const deliverySpeed = useCounter(40, 2000, statsInView);
  const forecastAccuracy = useCounter(92, 2000, statsInView);

  const faqItems = [
    {
      question: "Comment l'IA optimise la logistique en Alg\u00e9rie ?",
      answer: "L'IA optimise la logistique alg\u00e9rienne \u00e0 plusieurs niveaux : optimisation des itin\u00e9raires de livraison en tenant compte du trafic, de l'\u00e9tat des routes et de la m\u00e9t\u00e9o (r\u00e9duction co\u00fbts carburant de 20-30%), pr\u00e9vision pr\u00e9cise de la demande (pr\u00e9cision 90%+), gestion intelligente des entrep\u00f4ts (productivit\u00e9 +50%), et suivi en temps r\u00e9el de la flotte. Symloop d\u00e9veloppe ces solutions pour le contexte alg\u00e9rien. Contact : +213 549 575 512."
    },
    {
      question: "L'IA peut-elle pr\u00e9voir la demande pour mes produits en Alg\u00e9rie ?",
      answer: "Oui, l'IA pr\u00e9dictive analyse l'historique des ventes, les tendances saisonni\u00e8res, les \u00e9v\u00e9nements (Ramadan, rentr\u00e9e scolaire, f\u00eates), les donn\u00e9es m\u00e9t\u00e9o et les indicateurs \u00e9conomiques pour pr\u00e9voir la demande avec une pr\u00e9cision de 85-95%. Cela permet d'optimiser les stocks, r\u00e9duire les ruptures de 60-80%, et \u00e9liminer le surstockage. Le mod\u00e8le s'adapte aux sp\u00e9cificit\u00e9s du march\u00e9 alg\u00e9rien."
    },
    {
      question: "Comment l'IA am\u00e9liore la gestion des entrep\u00f4ts ?",
      answer: "L'IA transforme la gestion des entrep\u00f4ts : placement intelligent des produits (les plus demand\u00e9s pr\u00e8s des zones de chargement), optimisation du picking (itin\u00e9raires optimaux pour les pr\u00e9parateurs), pr\u00e9vision des besoins en personnel, d\u00e9tection automatique des anomalies d'inventaire, et planification des r\u00e9ceptions. R\u00e9sultat : +50% de productivit\u00e9 et -35% d'erreurs de pr\u00e9paration."
    },
    {
      question: "L'optimisation des itin\u00e9raires IA fonctionne-t-elle en Alg\u00e9rie ?",
      answer: "Oui, notre solution d'optimisation d'itin\u00e9raires est sp\u00e9cifiquement adapt\u00e9e \u00e0 l'Alg\u00e9rie. Elle prend en compte l'\u00e9tat r\u00e9el des routes, les zones de trafic dense (Alger, Oran, Constantine), les restrictions de circulation, et m\u00eame les conditions m\u00e9t\u00e9o locales. Les chauffeurs re\u00e7oivent des itin\u00e9raires optimis\u00e9s en temps r\u00e9el sur leur smartphone. R\u00e9sultat : -25% de kilom\u00e8tres, -30% de carburant, +40% de livraisons par jour."
    },
    {
      question: "Combien de temps pour d\u00e9ployer une solution logistique IA ?",
      answer: "Le d\u00e9ploiement d'une solution logistique IA avec Symloop se fait en 3 \u00e0 8 semaines selon la complexit\u00e9. L'optimisation d'itin\u00e9raires peut \u00eatre op\u00e9rationnelle en 2-3 semaines. La pr\u00e9vision de demande n\u00e9cessite 4-6 semaines (temps de collecte de donn\u00e9es). Une solution compl\u00e8te (itin\u00e9raires + pr\u00e9vision + entrep\u00f4t + flotte) prend 6-8 semaines. Les r\u00e9sultats sont visibles d\u00e8s le premier mois. Contactez-nous au +213 549 575 512."
    }
  ];

  return (
    <>
      <Head>
        <title>IA pour la Logistique & Supply Chain Alg\u00e9rie 2026 | Optimisation & Pr\u00e9vision | Symloop</title>
        <meta name="description" content="Solutions IA pour la logistique et la supply chain en Alg\u00e9rie. Optimisation itin\u00e9raires, pr\u00e9vision demande, automatisation entrep\u00f4t, gestion flotte IA, pr\u00e9diction livraison. Symloop, expert IA logistique. Contact: +213 549 575 512." />
        <meta name="keywords" content="IA logistique alg\u00e9rie, supply chain IA alg\u00e9rie, optimisation itin\u00e9raires IA, pr\u00e9vision demande IA, gestion entrep\u00f4t IA, gestion flotte IA, livraison intelligente alg\u00e9rie 2026, logistique pr\u00e9dictive alg\u00e9rie" />
        <link rel="canonical" href="https://symloop.com/blog/ia-logistique-supply-chain-algerie-2026/" />

        <meta property="og:title" content="IA pour la Logistique & Supply Chain en Alg\u00e9rie 2026 | Symloop" />
        <meta property="og:description" content="Solutions IA logistique en Alg\u00e9rie. Optimisation itin\u00e9raires, pr\u00e9vision demande, gestion entrep\u00f4t et flotte IA." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/ia-logistique-supply-chain-algerie-2026/" />
        <meta property="og:site_name" content="Symloop" />
        <meta property="og:locale" content="fr_DZ" />
        <meta property="og:locale:alternate" content="ar_DZ" />
        <meta property="og:locale:alternate" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IA Logistique & Supply Chain Alg\u00e9rie 2026 | Symloop" />
        <meta name="twitter:description" content="Solutions IA logistique alg\u00e9rienne. Optimisation itin\u00e9raires, pr\u00e9vision demande, gestion flotte IA." />

        {/* Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "IA pour la Logistique & Supply Chain en Alg\u00e9rie 2026",
            "description": "Guide complet sur l'IA dans la logistique et la supply chain en Alg\u00e9rie. Optimisation itin\u00e9raires, pr\u00e9vision demande, gestion entrep\u00f4t, gestion flotte.",
            "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
            "publisher": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
            "datePublished": "2026-04-01",
            "dateModified": "2026-04-01",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://symloop.com/blog/ia-logistique-supply-chain-algerie-2026/" },
            "articleSection": "Logistique & IA",
            "inLanguage": "fr-DZ",
            "keywords": "IA logistique alg\u00e9rie, supply chain IA, optimisation itin\u00e9raires, pr\u00e9vision demande, gestion flotte IA"
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
              { "@type": "ListItem", "position": 3, "name": "IA Logistique & Supply Chain Alg\u00e9rie 2026", "item": "https://symloop.com/blog/ia-logistique-supply-chain-algerie-2026/" }
            ]
          })}
        </script>

        {/* Speakable */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "IA Logistique Supply Chain Alg\u00e9rie 2026",
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "[data-speakable]", "#faq"] },
            "url": "https://symloop.com/blog/ia-logistique-supply-chain-algerie-2026/"
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
            "knowsAbout": ["IA Logistique", "Supply Chain IA", "Optimisation Itin\u00e9raires", "Pr\u00e9vision Demande", "Gestion Flotte", "Gestion Entrep\u00f4t"],
            "areaServed": { "@type": "Country", "name": "Algeria" }
          })}
        </script>
      </Head>

      <div className={`min-h-screen bg-gray-950 ${isRTL ? 'rtl' : 'ltr'}`}>

        {/* ═══════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════ */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <FloatingOrb color="radial-gradient(circle, #14b8a6, transparent 70%)" size="650px" x="-8%" y="-10%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #f59e0b, transparent 70%)" size="550px" x="55%" y="5%" delay={2} />
          <FloatingOrb color="radial-gradient(circle, #8b5cf6, transparent 70%)" size="500px" x="25%" y="50%" delay={5} />
          <FloatingOrb color="radial-gradient(circle, #14b8a6, transparent 70%)" size="400px" x="75%" y="55%" delay={8} />
          <FloatingOrb color="radial-gradient(circle, #f59e0b, transparent 70%)" size="350px" x="5%" y="65%" delay={11} />

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
                  <li><Link href="/" className="hover:text-teal-400 transition-colors">Accueil</Link></li>
                  <li className="text-gray-700">/</li>
                  <li><Link href="/blog" className="hover:text-teal-400 transition-colors">Blog</Link></li>
                  <li className="text-gray-700">/</li>
                  <li className="text-teal-400">IA Logistique &amp; Supply Chain Alg&eacute;rie 2026</li>
                </ol>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="bg-teal-500/20 text-teal-300 backdrop-blur-md border border-teal-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5" />
                  Logistique IA
                </span>
                <span className="bg-amber-500/20 text-amber-300 backdrop-blur-md border border-amber-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                  2026
                </span>
                <span className="bg-purple-500/20 text-purple-300 backdrop-blur-md border border-purple-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                  Supply Chain
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                IA pour la{" "}
                <span className="bg-gradient-to-r from-teal-400 via-amber-400 to-purple-400 bg-clip-text text-transparent">
                  Logistique
                </span>{" "}
                &amp; Supply Chain
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl">
                  en{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-teal-400 bg-clip-text text-transparent">
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
                La logistique est le nerf de la guerre pour toute entreprise alg&eacute;rienne. L&apos;IA optimise
                chaque maillon de la cha&icirc;ne : itin&eacute;raires, stocks, entrep&ocirc;ts, flotte, pr&eacute;visions.
                R&eacute;duisez vos co&ucirc;ts de 30% et livrez 40% plus vite.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="flex items-center gap-8 text-xs text-gray-500 tracking-wide uppercase"
              >
                <div className="flex items-center gap-2"><User className="w-3.5 h-3.5" /> Symloop LogiTech Team</div>
                <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> 1 Avril 2026</div>
                <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> 22 min</div>
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
              <div data-speakable="summary" className="backdrop-blur-xl bg-white/[0.04] border border-teal-500/20 rounded-3xl p-8">
                <h2 className="text-sm font-bold text-teal-400 uppercase tracking-widest mb-3">En bref</h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  <strong className="text-white">Symloop</strong> d&eacute;veloppe des solutions IA pour la logistique et la supply chain en Alg&eacute;rie.
                  Optimisation itin&eacute;raires, pr&eacute;vision demande, automatisation entrep&ocirc;t, gestion flotte IA, pr&eacute;diction livraison.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">Contact :</strong> +213 549 575 512 &mdash; consultation gratuite.
                  Technologies : Machine Learning, OR (Operations Research), IoT, GPS, Big Data.
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
                    { num: "01", title: "L'IA r\u00e9volutionne la logistique en Alg\u00e9rie", id: "revolution" },
                    { num: "02", title: "Optimisation d'itin\u00e9raires & pr\u00e9vision demande", id: "optimisation" },
                    { num: "03", title: "Gestion entrep\u00f4t & flotte IA", id: "entrepot" },
                    { num: "04", title: "Pr\u00e9diction livraison & analytics", id: "prediction" },
                    { num: "05", title: "Pourquoi Symloop pour la logistique IA", id: "pourquoi" },
                    { num: "06", title: "Questions fr\u00e9quentes", id: "faq" },
                  ].map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group">
                      <span className="text-[10px] font-bold text-gray-600 tracking-widest group-hover:text-teal-400 transition-colors w-6">{item.num}</span>
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

            {/* ── Section 1: L'IA révolutionne la logistique ── */}
            <section id="revolution" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-teal-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    L&apos;IA R&eacute;volutionne la Logistique en Alg&eacute;rie
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="backdrop-blur-xl bg-teal-500/[0.06] border border-teal-500/20 rounded-2xl p-8 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                      <Truck className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">2,38 millions de km&sup2; &agrave; couvrir</h3>
                      <p className="text-gray-400 leading-relaxed">
                        L&apos;Alg&eacute;rie est le plus grand pays d&apos;Afrique. Livrer de S&eacute;tif &agrave; Tamanrasset,
                        d&apos;Oran &agrave; Annaba &mdash; la logistique est un d&eacute;fi monumental. Routes sinueuses, trafic
                        urbain, distances &eacute;normes. L&apos;IA transforme ce d&eacute;fi en
                        <strong className="text-white"> avantage comp&eacute;titif</strong> pour les entreprises qui l&apos;adoptent.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {[
                  { value: "-30%", label: "Co\u00fbts", sub: "logistiques avec IA" },
                  { value: "+40%", label: "Vitesse", sub: "livraison optimis\u00e9e" },
                  { value: "92%", label: "Pr\u00e9cision", sub: "pr\u00e9vision demande" },
                  { value: "+50%", label: "Productivit\u00e9", sub: "entrep\u00f4t IA" },
                ].map((stat, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <GlassCard className="p-6 text-center">
                      <div className="text-3xl font-extrabold bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent mb-1">
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
                  La logistique repr&eacute;sente <strong className="text-white">15 &agrave; 25% du co&ucirc;t des produits</strong> en Alg&eacute;rie.
                  Chaque pourcentage d&apos;optimisation se traduit par des millions de dinars &eacute;conomis&eacute;s.
                  L&apos;IA offre des gains de 20 &agrave; 30% sur l&apos;ensemble de la cha&icirc;ne logistique.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Imaginez : vos camions suivent des itin&eacute;raires optimis&eacute;s en temps r&eacute;el qui &eacute;vitent
                  les embouteillages. Vos entrep&ocirc;ts savent exactement quel produit stocker et o&ugrave;.
                  Vos stocks sont calibr&eacute;s au millim&egrave;tre gr&acirc;ce &agrave; la pr&eacute;vision de demande. Vos clients
                  savent pr&eacute;cis&eacute;ment quand leur colis arrivera.
                  <strong className="text-gray-300"> C&apos;est la supply chain 4.0.</strong>
                </p>
              </Reveal>
            </section>

            {/* ── Section 2: Optimisation itinéraires & prévision demande ── */}
            <section id="optimisation" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-px h-8 bg-gradient-to-b from-amber-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Optimisation d&apos;Itin&eacute;raires &amp; Pr&eacute;vision de Demande
                  </h2>
                </div>
                <p className="text-gray-500 mb-10 leading-relaxed ml-7">
                  Les deux piliers de la logistique intelligente : livrer plus vite et stocker juste.
                </p>
              </Reveal>

              <div className="space-y-6">
                <Reveal delay={0}>
                  <GlassCard className="p-8 border-amber-500/20">
                    <div className="flex items-start gap-6">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                          <Navigation className="w-7 h-7 text-amber-400" />
                        </div>
                        <div className="mt-3 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30">
                          <span className="text-amber-300 text-xs font-extrabold">-30%</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Optimisation des Itin&eacute;raires</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          L&apos;IA calcule les <strong className="text-white">itin&eacute;raires les plus efficaces</strong> en tenant
                          compte du trafic en temps r&eacute;el, de l&apos;&eacute;tat des routes, des fen&ecirc;tres de livraison,
                          de la capacit&eacute; des v&eacute;hicules, et des contraintes sp&eacute;cifiques. Chaque chauffeur
                          re&ccedil;oit un plan de tourn&eacute;e optimis&eacute; sur son smartphone.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Trafic temps r\u00e9el", "Multi-arr\u00eats", "\u00c9tat des routes DZ", "Capacit\u00e9 v\u00e9hicules", "Fen\u00eatres livraison"].map((tag) => (
                            <span key={tag} className="bg-amber-500/10 text-amber-400 px-3 py-1 rounded-lg text-xs font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>

                <Reveal delay={0.1}>
                  <GlassCard className="p-8 border-purple-500/20">
                    <div className="flex items-start gap-6">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                          <LineChart className="w-7 h-7 text-purple-400" />
                        </div>
                        <div className="mt-3 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                          <span className="text-purple-300 text-xs font-extrabold">92%</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Pr&eacute;vision de la Demande</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          L&apos;IA pr&eacute;dit la demande avec <strong className="text-white">85 &agrave; 95% de pr&eacute;cision</strong> en analysant
                          l&apos;historique des ventes, la saisonnalit&eacute; (Ramadan, rentr&eacute;e scolaire, &eacute;t&eacute;),
                          la m&eacute;t&eacute;o, et les indicateurs &eacute;conomiques. Plus de ruptures de stock, plus de
                          surstockage co&ucirc;teux. Juste ce qu&apos;il faut, quand il faut.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Pr\u00e9vision 90j", "Saisonnalit\u00e9 DZ", "Ramadan/rentr\u00e9e", "M\u00e9t\u00e9o", "Tendances march\u00e9"].map((tag) => (
                            <span key={tag} className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-lg text-xs font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>

                <Reveal delay={0.15}>
                  <GlassCard className="p-8 border-teal-500/20">
                    <div className="flex items-start gap-6">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                          <BarChart3 className="w-7 h-7 text-teal-400" />
                        </div>
                        <div className="mt-3 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/30">
                          <span className="text-teal-300 text-xs font-extrabold">DATA</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Analytics Supply Chain</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          Tableaux de bord en temps r&eacute;el couvrant toute la cha&icirc;ne logistique. KPIs automatis&eacute;s,
                          alertes sur les anomalies, identification des goulots d&apos;&eacute;tranglement,
                          <strong className="text-white"> benchmark par r&eacute;gion et par produit</strong>.
                          Des d&eacute;cisions bas&eacute;es sur les donn&eacute;es, pas sur l&apos;intuition.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Dashboard temps r\u00e9el", "Alertes anomalies", "KPIs automatis\u00e9s", "Benchmark", "Rapports auto"].map((tag) => (
                            <span key={tag} className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-lg text-xs font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>
              </div>
            </section>

            {/* ── Section 3: Entrepôt & flotte IA ── */}
            <section id="entrepot" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Gestion Entrep&ocirc;t &amp; Flotte IA
                  </h2>
                </div>
              </Reveal>

              <div className="grid lg:grid-cols-2 gap-5">
                <GlassCard className="p-8 border-cyan-500/20" delay={0}>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                    <Warehouse className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Entrep&ocirc;t Intelligent</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    L&apos;IA optimise chaque op&eacute;ration en entrep&ocirc;t : placement, picking, packing, inventaire. Productivit&eacute; +50%, erreurs -35%.
                  </p>
                  <ul className="space-y-2.5">
                    {["Placement produits optimis\u00e9 IA", "Itin\u00e9raires picking optimaux", "Pr\u00e9vision besoins personnel", "Inventaire pr\u00e9dictif", "D\u00e9tection anomalies stock", "Planification r\u00e9ceptions"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <GlassCard className="p-8 border-green-500/20" delay={0.1}>
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                    <Truck className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Gestion Flotte IA</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Suivi en temps r&eacute;el de chaque v&eacute;hicule. Maintenance pr&eacute;dictive, conduite &eacute;co, affectation optimale des v&eacute;hicules.
                  </p>
                  <ul className="space-y-2.5">
                    {["Suivi GPS temps r\u00e9el", "Maintenance pr\u00e9dictive", "Consommation carburant IA", "Affectation optimale", "Alertes comportement", "Rapports conducteurs"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-green-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>

              <Reveal delay={0.2}>
                <div className="mt-8 backdrop-blur-xl bg-teal-500/[0.04] border border-teal-500/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-teal-400" />
                    Impact financier concret
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Une flotte de 20 camions optimis&eacute;e par IA &eacute;conomise en moyenne 25-30% de carburant,
                    r&eacute;duit les pannes impr&eacute;vues de 50% gr&acirc;ce &agrave; la maintenance pr&eacute;dictive, et augmente le
                    nombre de livraisons par jour de 40%. L&apos;investissement IA est g&eacute;n&eacute;ralement rembours&eacute;
                    en 2 &agrave; 4 mois.
                  </p>
                </div>
              </Reveal>
            </section>

            {/* ── Section 4: Prédiction livraison & analytics ── */}
            <section id="prediction" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-px h-8 bg-gradient-to-b from-violet-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Pr&eacute;diction de Livraison &amp; Analytics Avanc&eacute;s
                  </h2>
                </div>
                <p className="text-gray-500 mb-10 leading-relaxed ml-7">
                  Donnez &agrave; vos clients une visibilit&eacute; totale et pilotez votre supply chain avec pr&eacute;cision.
                </p>
              </Reveal>

              <div className="space-y-4">
                <Reveal delay={0}>
                  <div className="flex gap-6 items-start group">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-violet-500/5 border border-violet-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Clock3 className="w-7 h-7 text-violet-400" />
                      </div>
                      <div className="w-px h-12 bg-gradient-to-b from-violet-500/40 to-amber-500/40 mt-2" />
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-gray-600 tracking-widest">ETA</span>
                        <h3 className="text-lg font-bold text-white">Pr&eacute;diction d&apos;Heure d&apos;Arriv&eacute;e</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">
                        L&apos;IA pr&eacute;dit l&apos;heure exacte d&apos;arriv&eacute;e de chaque livraison en tenant compte du trafic
                        en temps r&eacute;el, de la m&eacute;t&eacute;o, et de l&apos;historique des livraisons sur le m&ecirc;me trajet.
                        Vos clients re&ccedil;oivent des cr&eacute;neaux pr&eacute;cis, pas des fourchettes vagues.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-violet-500/10 text-violet-400 px-3 py-1 rounded-lg text-xs font-medium">ETA pr&eacute;cis</span>
                        <span className="bg-violet-500/10 text-violet-400 px-3 py-1 rounded-lg text-xs font-medium">Notifications auto</span>
                        <span className="bg-violet-500/10 text-violet-400 px-3 py-1 rounded-lg text-xs font-medium">Suivi client</span>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="flex gap-6 items-start group">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Boxes className="w-7 h-7 text-amber-400" />
                      </div>
                      <div className="w-px h-12 bg-gradient-to-b from-amber-500/40 to-teal-500/40 mt-2" />
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-gray-600 tracking-widest">STOCK</span>
                        <h3 className="text-lg font-bold text-white">Gestion de Stock Pr&eacute;dictive</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">
                        L&apos;IA d&eacute;termine automatiquement le stock optimal pour chaque produit, dans chaque
                        entrep&ocirc;t, &agrave; chaque p&eacute;riode. Commandes de r&eacute;approvisionnement g&eacute;n&eacute;r&eacute;es
                        automatiquement. Plus jamais de rupture, plus de surstockage.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-amber-500/10 text-amber-400 px-3 py-1 rounded-lg text-xs font-medium">Stock optimal</span>
                        <span className="bg-amber-500/10 text-amber-400 px-3 py-1 rounded-lg text-xs font-medium">R&eacute;appro auto</span>
                        <span className="bg-amber-500/10 text-amber-400 px-3 py-1 rounded-lg text-xs font-medium">Z&eacute;ro rupture</span>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="flex gap-6 items-start group">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-teal-500/5 border border-teal-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Activity className="w-7 h-7 text-teal-400" />
                      </div>
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-gray-600 tracking-widest">VISIBILIT&Eacute;</span>
                        <h3 className="text-lg font-bold text-white">Visibilit&eacute; End-to-End</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">
                        Suivez chaque produit du fournisseur au client final. L&apos;IA identifie les risques
                        de retard, les goulots d&apos;&eacute;tranglement, et sugg&egrave;re des actions correctives
                        avant que les probl&egrave;mes ne surviennent. Vision compl&egrave;te, en temps r&eacute;el.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-lg text-xs font-medium">Tracking complet</span>
                        <span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-lg text-xs font-medium">Alertes proactives</span>
                        <span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-lg text-xs font-medium">Temps r&eacute;el</span>
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
                    Pourquoi Symloop pour la Logistique IA
                  </h2>
                </div>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-3 mb-12">
                {[
                  { icon: MapPin, title: "Adapt\u00e9 au terrain DZ", desc: "Mod\u00e8les entra\u00een\u00e9s sur les routes, le trafic et les sp\u00e9cificit\u00e9s logistiques alg\u00e9riennes" },
                  { icon: Cpu, title: "IA logistique de pointe", desc: "Algorithmes d'optimisation, ML pr\u00e9dictif, Operations Research, int\u00e9gration IoT" },
                  { icon: Users, title: "\u00c9quipe locale", desc: "Bas\u00e9s \u00e0 S\u00e9tif, compr\u00e9hension des d\u00e9fis logistiques sp\u00e9cifiques \u00e0 l'Alg\u00e9rie" },
                  { icon: Globe, title: "Couverture 48 wilayas", desc: "Solutions test\u00e9es et valid\u00e9es sur l'ensemble du territoire national" },
                  { icon: Zap, title: "D\u00e9ploiement progressif", desc: "Commencez par l'optimisation itin\u00e9raires, \u00e9tendez progressivement" },
                  { icon: Shield, title: "Donn\u00e9es s\u00e9curis\u00e9es", desc: "Vos donn\u00e9es logistiques sont confidentielles et h\u00e9berg\u00e9es de mani\u00e8re s\u00e9curis\u00e9e" },
                  { icon: Star, title: "ROI garanti", desc: "-30% co\u00fbts, +40% vitesse livraison, ROI en 2-4 mois" },
                  { icon: Rocket, title: "Support et \u00e9volution", desc: "Maintenance continue, optimisation des mod\u00e8les, support technique permanent" },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/[0.02] transition-colors">
                      <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-teal-400" />
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
                  <h4 className="text-xl font-bold text-white mb-4">Notre promesse logistique</h4>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {[
                      { num: "01", text: "R\u00e9sultats mesurables en 30 jours : co\u00fbts, d\u00e9lais, productivit\u00e9" },
                      { num: "02", text: "Int\u00e9gration avec vos syst\u00e8mes existants (ERP, WMS, TMS)" },
                      { num: "03", text: "Formation \u00e9quipes terrain et support technique continu" },
                    ].map((item, i) => (
                      <div key={i} className="text-center">
                        <div className="text-3xl font-extrabold bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent mb-2">{item.num}</div>
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
                    Questions Fr&eacute;quentes sur l&apos;IA Logistique
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
                    { href: "/blog/logiciel-gestion-livraison-distribution-algerie-2026", label: "Logiciel Gestion Livraison & Distribution Alg\u00e9rie 2026" },
                    { href: "/blog/intelligence-artificielle-automatisation-business-algerie-2026", label: "Intelligence Artificielle & Automatisation Business Alg\u00e9rie 2026" },
                    { href: "/blog/developpement-application-mobile-algerie-2026", label: "D\u00e9veloppement Application Mobile Alg\u00e9rie 2026" },
                    { href: "/blog/solutions-informatiques-algerie-2026", label: "Solutions Informatiques Alg\u00e9rie 2026" },
                  ].map((link, i) => (
                    <Link key={i} href={link.href} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-teal-500/[0.06] hover:border-teal-500/20 transition-all text-sm text-gray-500 hover:text-teal-400">
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
                {(blog?.tags || ["IA logistique alg\u00e9rie", "supply chain IA", "optimisation itin\u00e9raires", "pr\u00e9vision demande IA", "gestion flotte IA", "entrep\u00f4t intelligent", "logistique pr\u00e9dictive alg\u00e9rie 2026"]).map((tag, i) => (
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
          <FloatingOrb color="radial-gradient(circle, #14b8a6, transparent 70%)" size="450px" x="5%" y="-25%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #f59e0b, transparent 70%)" size="400px" x="65%" y="15%" delay={4} />
          <FloatingOrb color="radial-gradient(circle, #8b5cf6, transparent 70%)" size="350px" x="35%" y="50%" delay={7} />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 backdrop-blur-md border border-teal-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-8">
                <Truck className="w-3.5 h-3.5" />
                Logistique IA
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Optimisez Votre Supply Chain avec{" "}
                <span className="bg-gradient-to-r from-teal-400 via-amber-400 to-purple-400 bg-clip-text text-transparent">
                  l&apos;Intelligence Artificielle
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-4 leading-relaxed">
                R&eacute;duisez vos co&ucirc;ts logistiques de 30%, livrez 40% plus vite, et anticipez
                la demande avec 92% de pr&eacute;cision.
              </p>
              <p className="text-gray-500 text-base mb-10 leading-relaxed">
                <strong className="text-white">Consultation gratuite.</strong> Appelez-nous pour discuter de votre projet logistique IA.
                Z&eacute;ro engagement, audit gratuit de votre supply chain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/213549575512?text=Bonjour, je veux optimiser ma logistique avec l'IA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-white text-gray-950 px-8 py-4 rounded-2xl font-semibold hover:bg-teal-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Consultation Logistique IA WhatsApp
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
                    <GlassCard className="p-6 h-full hover:border-teal-500/20 transition-colors">
                      <span className="text-[10px] font-bold text-teal-400 tracking-widest uppercase mb-3 block">{post.category}</span>
                      <h3 className="text-white font-semibold text-sm group-hover:text-teal-400 transition-colors mb-2">{post.title}</h3>
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
