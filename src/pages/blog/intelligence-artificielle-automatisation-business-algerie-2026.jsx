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

export default function IntelligenceArtificielleAutomatisationBusinessAlgerie2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const blog = getBlogBySlug('intelligence-artificielle-automatisation-business-algerie-2026');
  const relatedBlogs = getRelatedBlogs('intelligence-artificielle-automatisation-business-algerie-2026', 3);

  const multiplier = useCounter(1000, 2500, statsInView);
  const aiClients = useCounter(150, 2000, statsInView);
  const efficiency = useCounter(300, 2000, statsInView);

  const faqItems = [
    {
      question: "Comment l'intelligence artificielle peut aider mon entreprise en Algérie ?",
      answer: "L'intelligence artificielle transforme les entreprises algériennes de multiples manières : chatbots IA pour automatiser le service client 24/7 (conversion +40%), automatisation des processus administratifs (productivité +300%), analyse prédictive pour anticiper la demande du marché, génération de contenu marketing à grande échelle, et computer vision pour le contrôle qualité industriel. Symloop développe des solutions IA sur mesure adaptées au contexte algérien. Contact : +213 549 575 512."
    },
    {
      question: "Combien coûte l'intelligence artificielle pour une PME en Algérie ?",
      answer: "Le coût d'une solution IA dépend de la complexité du projet. Un chatbot IA basique peut démarrer à un investissement modeste, tandis qu'une solution d'analyse prédictive complète représente un investissement plus conséquent. L'important est le ROI : nos clients récupèrent leur investissement en 2 à 6 mois grâce aux gains de productivité et à l'augmentation des ventes. Symloop propose une consultation gratuite pour évaluer vos besoins et votre budget. Contactez-nous au +213 549 575 512."
    },
    {
      question: "Quel est le ROI de l'intelligence artificielle pour les entreprises ?",
      answer: "Le retour sur investissement de l'IA est spectaculaire. En moyenne, les entreprises utilisant l'IA voient une augmentation de 40% de leur taux de conversion client, une réduction de 60% des coûts opérationnels, et une productivité multipliée par 3. Certains clients Symloop ont multiplié leur chiffre d'affaires par 10 en moins de 12 mois grâce à l'automatisation IA. Le ROI moyen est de 300% la première année."
    },
    {
      question: "Est-ce que l'IA peut remplacer les employés dans une entreprise algérienne ?",
      answer: "L'IA ne remplace pas les employés, elle les augmente. Un chatbot IA gère les questions répétitives (80% du volume) tandis que vos équipes se concentrent sur les cas complexes et à haute valeur ajoutée. L'automatisation IA supprime les tâches manuelles chronophages. Résultat : vos employés deviennent 3 à 5 fois plus productifs, votre entreprise peut croître sans embaucher massivement. C'est l'intelligence augmentée, pas le remplacement."
    },
    {
      question: "Quelles sont les meilleures applications de l'IA pour le business en Algérie en 2026 ?",
      answer: "En 2026, les applications IA les plus rentables pour les entreprises algériennes sont : 1) Chatbots IA multilingues (français/arabe/anglais) pour le service client WhatsApp et web, 2) Automatisation du traitement de données et de la comptabilité, 3) Marketing IA avec génération de contenu et ciblage prédictif, 4) Analyse prédictive des ventes et des stocks, 5) Computer vision pour le contrôle qualité industriel. Symloop maîtrise toutes ces technologies."
    },
    {
      question: "Comment démarrer avec l'intelligence artificielle pour mon entreprise en Algérie ?",
      answer: "Pour démarrer avec l'IA, suivez ces étapes : 1) Identifiez vos processus les plus chronophages et répétitifs, 2) Contactez Symloop pour une consultation gratuite (+213 549 575 512), 3) Nous analysons vos besoins et proposons une feuille de route IA personnalisée, 4) Commencez par un projet pilote (chatbot ou automatisation), 5) Mesurez les résultats et étendez progressivement. La plupart de nos clients voient des résultats dès le premier mois."
    }
  ];

  return (
    <>
      <Head>
        <title>Intelligence Artificielle Algérie 2026 | IA Entreprise, Automatisation & Chatbot | Symloop</title>
        <meta name="description" content="Solutions d'intelligence artificielle sur mesure pour les entreprises algériennes. Chatbots IA, automatisation des processus, analyse prédictive, computer vision. Multipliez votre CA par 10x à 1000x. Symloop, expert IA Algérie. Contact: +213 549 575 512." />
        <meta name="keywords" content="intelligence artificielle algérie, IA entreprise algérie, automatisation IA algérie, chatbot IA algérie, comment utiliser IA business algérie, IA PME algérie 2026, machine learning algérie, intelligence artificielle PME algérie, analyse prédictive algérie, computer vision algérie, IA marketing algérie, automatisation processus algérie, chatbot whatsapp algérie, IA service client algérie" />
        <link rel="canonical" href="https://symloop.com/blog/intelligence-artificielle-automatisation-business-algerie-2026/" />

        <meta property="og:title" content="Intelligence Artificielle Algérie 2026 : Multipliez Votre CA par 10x à 1000x | Symloop" />
        <meta property="og:description" content="Solutions IA sur mesure pour entreprises algériennes. Chatbots, automatisation, analyse prédictive. Expert IA Algérie." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/intelligence-artificielle-automatisation-business-algerie-2026/" />
        <meta property="og:site_name" content="Symloop" />
        <meta property="og:locale" content="fr_DZ" />
        <meta property="og:locale:alternate" content="ar_DZ" />
        <meta property="og:locale:alternate" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Intelligence Artificielle Algérie 2026 | Symloop" />
        <meta name="twitter:description" content="IA sur mesure pour entreprises algériennes. Chatbots, automatisation, analyse prédictive. Multipliez votre CA." />

        {/* Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Intelligence Artificielle en Algérie 2026 : Comment l'IA Peut Multiplier Votre Chiffre d'Affaires par 10, 100 ou 1000",
            "description": "Guide complet sur l'intelligence artificielle pour les entreprises algériennes. Chatbots IA, automatisation, analyse prédictive, computer vision. Stratégies pour multiplier votre CA.",
            "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
            "publisher": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
            "datePublished": "2026-04-01",
            "dateModified": "2026-04-01",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://symloop.com/blog/intelligence-artificielle-automatisation-business-algerie-2026/" },
            "articleSection": "Artificial Intelligence",
            "inLanguage": "fr-DZ",
            "keywords": "intelligence artificielle algérie, IA entreprise algérie, automatisation IA algérie, chatbot IA algérie, machine learning algérie"
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
              { "@type": "ListItem", "position": 3, "name": "Intelligence Artificielle Algérie 2026", "item": "https://symloop.com/blog/intelligence-artificielle-automatisation-business-algerie-2026/" }
            ]
          })}
        </script>

        {/* Speakable */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Intelligence Artificielle Algérie 2026",
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "[data-speakable]", "#faq"] },
            "url": "https://symloop.com/blog/intelligence-artificielle-automatisation-business-algerie-2026/"
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
            "address": { "@type": "PostalAddress", "addressLocality": "Sétif", "addressCountry": "DZ" },
            "telephone": "+213549575512",
            "knowsAbout": ["Intelligence Artificielle", "Machine Learning", "Chatbot IA", "Automatisation", "Analyse Prédictive", "Computer Vision", "NLP"],
            "areaServed": { "@type": "Country", "name": "Algeria" }
          })}
        </script>
      </Head>

      <div className={`min-h-screen bg-gray-950 ${isRTL ? 'rtl' : 'ltr'}`}>

        {/* ═══════════════════════════════════════════
            HERO — Animated Orbs + Aggressive AI Headline
        ═══════════════════════════════════════════ */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Orbs — purple/cyan/green AI palette */}
          <FloatingOrb color="radial-gradient(circle, #a855f7, transparent 70%)" size="650px" x="-8%" y="-10%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="550px" x="55%" y="5%" delay={2} />
          <FloatingOrb color="radial-gradient(circle, #22c55e, transparent 70%)" size="500px" x="25%" y="50%" delay={5} />
          <FloatingOrb color="radial-gradient(circle, #8b5cf6, transparent 70%)" size="400px" x="75%" y="55%" delay={8} />
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="350px" x="5%" y="65%" delay={11} />

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
                  <li><Link href="/" className="hover:text-purple-400 transition-colors">Accueil</Link></li>
                  <li className="text-gray-700">/</li>
                  <li><Link href="/blog" className="hover:text-purple-400 transition-colors">Blog</Link></li>
                  <li className="text-gray-700">/</li>
                  <li className="text-purple-400">Intelligence Artificielle Algérie 2026</li>
                </ol>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="bg-purple-500/20 text-purple-300 backdrop-blur-md border border-purple-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5" />
                  Intelligence Artificielle
                </span>
                <span className="bg-cyan-500/20 text-cyan-300 backdrop-blur-md border border-cyan-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                  2026
                </span>
                <span className="bg-green-500/20 text-green-300 backdrop-blur-md border border-green-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                  10x - 1000x
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                Intelligence Artificielle en{" "}
                <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Algérie
                </span>{" "}
                2026 :
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl">
                  Comment l&apos;IA Peut Multiplier Votre Chiffre d&apos;Affaires par{" "}
                  <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    10, 100 ou 1000
                  </span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg sm:text-xl text-gray-400 max-w-3xl leading-relaxed mb-10"
              >
                L&apos;IA n&apos;est pas un gadget. C&apos;est la machine la plus puissante jamais cr&eacute;&eacute;e
                pour g&eacute;n&eacute;rer du revenu. Les entreprises qui adoptent l&apos;IA maintenant
                domineront le march&eacute; alg&eacute;rien. Celles qui attendent disparaitront.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="flex items-center gap-8 text-xs text-gray-500 tracking-wide uppercase"
              >
                <div className="flex items-center gap-2"><User className="w-3.5 h-3.5" /> Symloop AI Team</div>
                <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> 1 Avril 2026</div>
                <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> 25 min</div>
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
              <div data-speakable="summary" className="backdrop-blur-xl bg-white/[0.04] border border-purple-500/20 rounded-3xl p-8">
                <h2 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-3">En bref</h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  <strong className="text-white">Symloop</strong> d&eacute;veloppe des solutions d&apos;intelligence artificielle sur mesure pour les entreprises alg&eacute;riennes.
                  Chatbots IA pour le service client (r&eacute;ponse 24/7, conversion +40%), automatisation des processus (productivit&eacute; +300%),
                  analyse pr&eacute;dictive (anticipez le march&eacute;), g&eacute;n&eacute;ration de contenu IA, computer vision pour l&apos;industrie.
                  Nos clients multiplient leur CA de 10x &agrave; 1000x gr&acirc;ce &agrave; l&apos;IA.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">Contact :</strong> +213 549 575 512 &mdash; consultation gratuite.
                  Technologies : GPT-4, LLaMA, TensorFlow, PyTorch, LangChain, OpenCV.
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
                    { num: "01", title: "L'IA n'est pas le futur, c'est maintenant", id: "urgence" },
                    { num: "02", title: "Comment l'IA multiplie votre revenue", id: "multiplicateur" },
                    { num: "03", title: "Solutions IA Symloop", id: "solutions" },
                    { num: "04", title: "Trajectoire de croissance IA", id: "trajectoire" },
                    { num: "05", title: "Pourquoi Symloop pour l'IA", id: "pourquoi" },
                    { num: "06", title: "Questions fréquentes", id: "faq" },
                  ].map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group">
                      <span className="text-[10px] font-bold text-gray-600 tracking-widest group-hover:text-purple-400 transition-colors w-6">{item.num}</span>
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

            {/* ── Section 1: L'IA n'est pas le futur, c'est maintenant ── */}
            <section id="urgence" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-purple-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    L&apos;IA N&apos;est Pas le Futur &mdash; C&apos;est Maintenant
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="backdrop-blur-xl bg-red-500/[0.06] border border-red-500/20 rounded-2xl p-8 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Chaque jour sans IA = de l&apos;argent laiss&eacute; sur la table</h3>
                      <p className="text-gray-400 leading-relaxed">
                        Pendant que vous lisez cet article, vos concurrents d&eacute;ploient d&eacute;j&agrave; des chatbots qui convertissent
                        des clients &agrave; 3h du matin. Ils automatisent des t&acirc;ches qui vous co&ucirc;tent 10 employ&eacute;s. Ils pr&eacute;disent
                        ce que vos clients veulent <strong className="text-white">avant m&ecirc;me qu&apos;ils ne le sachent</strong>.
                        L&apos;IA n&apos;est pas une option en 2026. C&apos;est une question de survie.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {[
                  { value: "3-5x", label: "Croissance", sub: "entreprises avec IA vs sans" },
                  { value: "40%", label: "Plus de leads", sub: "avec chatbot IA" },
                  { value: "300%", label: "Productivit\u00e9", sub: "gain moyen avec IA" },
                  { value: "87%", label: "PDG", sub: "investissent dans l'IA" },
                ].map((stat, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <GlassCard className="p-6 text-center">
                      <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-1">
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
                  Les chiffres ne mentent pas. Les entreprises qui int&egrave;grent l&apos;intelligence artificielle
                  <strong className="text-white"> croissent 3 &agrave; 5 fois plus vite</strong> que celles qui h&eacute;sitent encore.
                  En Alg&eacute;rie, le march&eacute; est encore jeune &mdash; ce qui signifie une <strong className="text-white">opportunit&eacute;
                  massive</strong> pour les premiers adopteurs.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-lg text-gray-500 leading-relaxed mb-6">
                  Imaginez : pendant que votre concurrent r&eacute;pond manuellement &agrave; 20 messages par jour,
                  votre chatbot IA en traite <strong className="text-gray-300">2000 simultan&eacute;ment</strong>.
                  Pendant qu&apos;il compile des rapports Excel pendant 3 jours, votre IA les g&eacute;n&egrave;re en
                  <strong className="text-gray-300"> 3 secondes</strong>. C&apos;est &ccedil;a, le pouvoir multiplicateur de l&apos;IA.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="backdrop-blur-xl bg-purple-500/[0.04] border border-purple-500/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-purple-400" />
                    L&apos;Alg&eacute;rie en 2026 : le moment parfait
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    La num&eacute;risation s&apos;acc&eacute;l&egrave;re, la jeunesse est tech-savvy, et le gouvernement pousse
                    la transformation digitale. Les PME qui adoptent l&apos;IA maintenant seront les leaders de demain.
                    Celles qui attendent &laquo; que ce soit plus mature &raquo; seront d&eacute;j&agrave; obsol&egrave;tes.
                    <strong className="text-gray-300"> Le train de l&apos;IA ne passe qu&apos;une fois.</strong>
                  </p>
                </div>
              </Reveal>
            </section>

            {/* ── Section 2: Comment l'IA Multiplie Votre Revenue ── */}
            <section id="multiplicateur" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-px h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Comment l&apos;IA Multiplie Votre Revenue
                  </h2>
                </div>
                <p className="text-gray-500 mb-10 leading-relaxed ml-7">
                  5 cas concrets avec des effets multiplicateurs r&eacute;els. Pas de th&eacute;orie, que des r&eacute;sultats.
                </p>
              </Reveal>

              <div className="space-y-6">
                {/* Use case 1: Chatbot */}
                <Reveal delay={0}>
                  <GlassCard className="p-8 border-cyan-500/20">
                    <div className="flex items-start gap-6">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                          <Bot className="w-7 h-7 text-cyan-400" />
                        </div>
                        <div className="mt-3 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30">
                          <span className="text-cyan-300 text-xs font-extrabold">10x</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Chatbot IA Service Client</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          Remplacez <strong className="text-white">5 employ&eacute;s service client</strong> par un chatbot IA
                          qui travaille <strong className="text-white">24 heures sur 24, 7 jours sur 7</strong>, ne dort jamais,
                          ne fait jamais d&apos;erreur, et r&eacute;pond en <strong className="text-white">moins de 2 secondes</strong>.
                          R&eacute;sultat : 40% de leads en plus convertis, car chaque visiteur re&ccedil;oit une r&eacute;ponse
                          instantan&eacute;e &mdash; m&ecirc;me &agrave; 3h du matin.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["WhatsApp", "Site web", "Messenger", "Multilingue FR/AR", "24/7"].map((tag) => (
                            <span key={tag} className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-lg text-xs font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>

                {/* Use case 2: Automatisation */}
                <Reveal delay={0.1}>
                  <GlassCard className="p-8 border-purple-500/20">
                    <div className="flex items-start gap-6">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                          <Cog className="w-7 h-7 text-purple-400" />
                        </div>
                        <div className="mt-3 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                          <span className="text-purple-300 text-xs font-extrabold">100x</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Automatisation des Processus</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          Ce qui n&eacute;cessite <strong className="text-white">10 employ&eacute;s &agrave; temps plein</strong> peut &ecirc;tre
                          accompli par <strong className="text-white">2 personnes + l&apos;IA</strong>. Facturation automatique,
                          traitement de donn&eacute;es, reporting, saisie, classification de documents &mdash; tout ce
                          qui est r&eacute;p&eacute;titif peut &ecirc;tre automatis&eacute;. Vos employ&eacute;s se concentrent enfin sur ce
                          qui cr&eacute;e vraiment de la valeur.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Workflows", "Data processing", "Reporting auto", "Facturation", "Classification"].map((tag) => (
                            <span key={tag} className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-lg text-xs font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>

                {/* Use case 3: Analyse prédictive */}
                <Reveal delay={0.15}>
                  <GlassCard className="p-8 border-green-500/20">
                    <div className="flex items-start gap-6">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                          <LineChart className="w-7 h-7 text-green-400" />
                        </div>
                        <div className="mt-3 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                          <span className="text-green-300 text-xs font-extrabold">50x</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Analyse Pr&eacute;dictive</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          <strong className="text-white">Pr&eacute;disez ce que vos clients veulent avant qu&apos;ils ne le demandent.</strong>{" "}
                          Stockez exactement ce qui se vend. Anticipez les tendances du march&eacute; alg&eacute;rien.
                          Supprimez les pertes de stock, optimisez vos achats, et prenez des d&eacute;cisions bas&eacute;es
                          sur les donn&eacute;es &mdash; pas sur l&apos;intuition. 50 fois moins de pertes, 50 fois plus de pr&eacute;cision.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Forecasting", "Tendances march\u00e9", "Comportement client", "Gestion stocks", "D\u00e9cisions data-driven"].map((tag) => (
                            <span key={tag} className="bg-green-500/10 text-green-400 px-3 py-1 rounded-lg text-xs font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>

                {/* Use case 4: IA Marketing */}
                <Reveal delay={0.2}>
                  <GlassCard className="p-8 border-pink-500/20">
                    <div className="flex items-start gap-6">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                          <Sparkles className="w-7 h-7 text-pink-400" />
                        </div>
                        <div className="mt-3 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/30">
                          <span className="text-pink-300 text-xs font-extrabold">1000x</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">IA Marketing &amp; Contenu</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          G&eacute;n&eacute;rez <strong className="text-white">100 articles de blog, 1000 posts r&eacute;seaux sociaux</strong>,
                          et personnalisez chaque email pour chaque client &mdash; automatiquement.
                          Scalez votre contenu &agrave; l&apos;infini. Un seul marketeur + l&apos;IA produit autant qu&apos;une
                          <strong className="text-white"> &eacute;quipe de 50 personnes</strong>. Votre marque est partout, tout le temps.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["G\u00e9n\u00e9ration contenu", "Email personnalis\u00e9", "Social media", "SEO automatis\u00e9", "Branding IA"].map((tag) => (
                            <span key={tag} className="bg-pink-500/10 text-pink-400 px-3 py-1 rounded-lg text-xs font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>

                {/* Use case 5: Computer Vision */}
                <Reveal delay={0.25}>
                  <GlassCard className="p-8 border-orange-500/20">
                    <div className="flex items-start gap-6">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                          <Eye className="w-7 h-7 text-orange-400" />
                        </div>
                        <div className="mt-3 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30">
                          <span className="text-orange-300 text-xs font-extrabold">10x</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Computer Vision Industrie</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          D&eacute;tectez les d&eacute;fauts de fabrication <strong className="text-white">avec une pr&eacute;cision de 99.9%</strong>.
                          Comptez l&apos;inventaire automatiquement. Surveillez la qualit&eacute; en temps r&eacute;el sans intervention
                          humaine. Ce qu&apos;un inspecteur qualit&eacute; fait en 8 heures, la computer vision le fait en
                          <strong className="text-white"> 8 minutes</strong> &mdash; avec plus de pr&eacute;cision.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Contr\u00f4le qualit\u00e9", "D\u00e9tection d\u00e9fauts", "Inventaire auto", "Surveillance", "OCR documents"].map((tag) => (
                            <span key={tag} className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-lg text-xs font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>
              </div>
            </section>

            {/* ── Section 3: Solutions IA Symloop ── */}
            <section id="solutions" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-green-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Solutions IA Symloop
                  </h2>
                </div>
              </Reveal>

              <div className="grid lg:grid-cols-3 gap-5">
                {/* Chatbots & Assistants */}
                <GlassCard className="p-8" delay={0}>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                    <Bot className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Chatbots &amp; Assistants IA</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Assistants intelligents qui comprennent le contexte, parlent fran&ccedil;ais et arabe, et convertissent les visiteurs en clients 24/7.
                  </p>
                  <ul className="space-y-2.5">
                    {["Chatbot WhatsApp intelligent", "Assistant site web IA", "Bot Messenger & Instagram", "Support client automatis\u00e9", "Qualification leads IA", "Int\u00e9gration CRM"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                {/* Automatisation Intelligente */}
                <GlassCard className="p-8 border-purple-500/20" delay={0.1}>
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                    <Cog className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Automatisation Intelligente</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Automatisez les processus r&eacute;p&eacute;titifs et lib&eacute;rez vos &eacute;quipes pour le travail &agrave; haute valeur ajout&eacute;e.
                  </p>
                  <ul className="space-y-2.5">
                    {["Workflows automatis\u00e9s", "Traitement de donn\u00e9es IA", "Reporting automatique", "Facturation intelligente", "Classification documents", "Int\u00e9gration API"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-purple-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                {/* Analyse Prédictive & BI */}
                <GlassCard className="p-8 border-green-500/20" delay={0.2}>
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                    <BarChart3 className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Analyse Pr&eacute;dictive &amp; BI</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Transformez vos donn&eacute;es en d&eacute;cisions strat&eacute;giques. Anticipez le march&eacute;, pas seulement r&eacute;agissez.
                  </p>
                  <ul className="space-y-2.5">
                    {["Pr\u00e9vision des ventes", "Analyse tendances march\u00e9", "Comportement client IA", "Tableaux de bord temps r\u00e9el", "Optimisation des stocks", "Scoring & segmentation"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-green-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                {/* IA Marketing */}
                <GlassCard className="p-8 border-pink-500/20" delay={0.1}>
                  <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-6">
                    <Sparkles className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">IA Marketing</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Scalez votre marketing &agrave; l&apos;infini. G&eacute;n&eacute;rez du contenu, personnalisez &agrave; grande &eacute;chelle.
                  </p>
                  <ul className="space-y-2.5">
                    {["G\u00e9n\u00e9ration de contenu IA", "Email personnalisation", "Social media automatis\u00e9", "SEO & r\u00e9daction IA", "A/B testing IA", "Ciblage pr\u00e9dictif"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-pink-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                {/* Computer Vision */}
                <GlassCard className="p-8 border-orange-500/20" delay={0.2}>
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Computer Vision</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Donnez des yeux &agrave; vos machines. Qualit&eacute;, s&eacute;curit&eacute;, inventaire &mdash; tout automatis&eacute;.
                  </p>
                  <ul className="space-y-2.5">
                    {["Contr\u00f4le qualit\u00e9 industriel", "Comptage inventaire auto", "Surveillance intelligente", "OCR & extraction documents", "D\u00e9tection d'anomalies", "Vision temps r\u00e9el"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-orange-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                {/* IA Sur Mesure */}
                <GlassCard className="p-8 border-yellow-500/20" delay={0.3}>
                  <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-6">
                    <Cpu className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">IA Sur Mesure</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Votre business est unique. Votre IA doit l&apos;&ecirc;tre aussi. Mod&egrave;les custom pour vos besoins sp&eacute;cifiques.
                  </p>
                  <ul className="space-y-2.5">
                    {["Mod\u00e8les ML personnalis\u00e9s", "Fine-tuning LLM m\u00e9tier", "Pipelines de donn\u00e9es", "API IA priv\u00e9es", "Int\u00e9gration syst\u00e8mes existants", "Formation \u00e9quipes IA"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-yellow-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </section>

            {/* ── Section 4: Trajectoire de Croissance IA ── */}
            <section id="trajectoire" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-px h-8 bg-gradient-to-b from-yellow-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    De 10 &agrave; 1000 : Trajectoire de Croissance IA
                  </h2>
                </div>
                <p className="text-gray-500 mb-10 leading-relaxed ml-7">
                  L&apos;IA ne produit pas des r&eacute;sultats lin&eacute;aires. Elle produit des r&eacute;sultats <strong className="text-gray-300">exponentiels</strong>.
                  Voici comment vos gains se composent au fil du temps.
                </p>
              </Reveal>

              <div className="space-y-4">
                {/* Phase 1 */}
                <Reveal delay={0}>
                  <div className="flex gap-6 items-start group">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-cyan-400 text-xs font-extrabold">2-5x</span>
                      </div>
                      <div className="w-px h-12 bg-gradient-to-b from-cyan-500/40 to-purple-500/40 mt-2" />
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-gray-600 tracking-widest">MOIS 1-3</span>
                        <h3 className="text-lg font-bold text-white">Chatbot + Automatisation Basique</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">
                        D&eacute;ploiement d&apos;un chatbot IA sur WhatsApp et votre site. Automatisation des t&acirc;ches
                        r&eacute;p&eacute;titives (emails, reporting, saisie). Impact imm&eacute;diat sur la productivit&eacute;.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-lg text-xs font-medium">Productivit&eacute; x2-5</span>
                        <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-lg text-xs font-medium">Leads +40%</span>
                        <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-lg text-xs font-medium">Co&ucirc;ts -30%</span>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Phase 2 */}
                <Reveal delay={0.1}>
                  <div className="flex gap-6 items-start group">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-purple-400 text-xs font-extrabold">10x</span>
                      </div>
                      <div className="w-px h-12 bg-gradient-to-b from-purple-500/40 to-green-500/40 mt-2" />
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-gray-600 tracking-widest">MOIS 3-6</span>
                        <h3 className="text-lg font-bold text-white">Data Analysis + Pr&eacute;diction</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">
                        Analyse pr&eacute;dictive de vos ventes et de votre march&eacute;. Segmentation client IA.
                        D&eacute;cisions strat&eacute;giques bas&eacute;es sur les donn&eacute;es. Vous ne devinez plus, vous savez.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-lg text-xs font-medium">D&eacute;cisions 10x meilleures</span>
                        <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-lg text-xs font-medium">Pertes -50%</span>
                        <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-lg text-xs font-medium">Ventes +60%</span>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Phase 3 */}
                <Reveal delay={0.15}>
                  <div className="flex gap-6 items-start group">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-green-400 text-xs font-extrabold">100x</span>
                      </div>
                      <div className="w-px h-12 bg-gradient-to-b from-green-500/40 to-yellow-500/40 mt-2" />
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-gray-600 tracking-widest">MOIS 6-12</span>
                        <h3 className="text-lg font-bold text-white">Int&eacute;gration IA Compl&egrave;te</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">
                        Marketing IA &agrave; grande &eacute;chelle. Computer vision pour la qualit&eacute;. Tous vos processus sont
                        optimis&eacute;s par l&apos;IA. Votre entreprise op&egrave;re avec une efficacit&eacute; que vos concurrents
                        ne peuvent m&ecirc;me pas imaginer.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-lg text-xs font-medium">Efficacit&eacute; x100</span>
                        <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-lg text-xs font-medium">CA x10</span>
                        <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-lg text-xs font-medium">Leader march&eacute;</span>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Phase 4 */}
                <Reveal delay={0.2}>
                  <div className="flex gap-6 items-start group">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border border-yellow-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-yellow-400 text-xs font-extrabold">1000x</span>
                      </div>
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-gray-600 tracking-widest">ANN&Eacute;E 2+</span>
                        <h3 className="text-lg font-bold text-white">Business AI-First</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">
                        Votre entreprise est d&eacute;sormais <strong className="text-gray-300">pilot&eacute;e par l&apos;IA</strong>.
                        Chaque d&eacute;cision est data-driven. Chaque processus est optimis&eacute;. Vous op&eacute;rez
                        &agrave; une &eacute;chelle que personne ne peut atteindre manuellement. Le potentiel est
                        litt&eacute;ralement <strong className="text-gray-300">1000 fois sup&eacute;rieur</strong> &agrave; o&ugrave; vous avez commenc&eacute;.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-lg text-xs font-medium">Potentiel x1000</span>
                        <span className="bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-lg text-xs font-medium">Domination march&eacute;</span>
                        <span className="bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-lg text-xs font-medium">Scalabilit&eacute; infinie</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.25}>
                <div className="mt-10 backdrop-blur-xl bg-gradient-to-r from-purple-500/[0.06] via-cyan-500/[0.06] to-green-500/[0.06] border border-white/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-cyan-400" />
                    Le secret : commencer MAINTENANT
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    La diff&eacute;rence entre une entreprise &agrave; 10x et une entreprise &agrave; 1000x ? <strong className="text-gray-300">Le timing.</strong>{" "}
                    Chaque mois de retard, c&apos;est un mois de croissance compos&eacute;e perdu. Les entreprises qui
                    commencent aujourd&apos;hui ont un avantage irr&eacute;cup&eacute;rable sur celles qui commencent dans 6 mois.
                    Ne laissez pas vos concurrents prendre cette avance.
                  </p>
                </div>
              </Reveal>
            </section>

            {/* ── Section 5: Pourquoi Symloop ── */}
            <section id="pourquoi" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Pourquoi Symloop pour l&apos;IA
                  </h2>
                </div>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-3 mb-12">
                {[
                  { icon: Cpu, title: "Expertise IA de pointe", desc: "GPT-4, LLaMA, TensorFlow, PyTorch, LangChain, OpenCV \u2014 on ma\u00eetrise tout l'\u00e9cosyst\u00e8me IA" },
                  { icon: Users, title: "\u00c9quipe locale", desc: "Bas\u00e9s \u00e0 S\u00e9tif, disponibles en fran\u00e7ais et arabe, r\u00e9unions en pr\u00e9sentiel possibles" },
                  { icon: Target, title: "Approche ROI-first", desc: "Chaque solution est con\u00e7ue pour g\u00e9n\u00e9rer du revenu, pas juste impressionner" },
                  { icon: Shield, title: "Donn\u00e9es s\u00e9curis\u00e9es", desc: "Vos donn\u00e9es restent priv\u00e9es. H\u00e9bergement local possible. Conformit\u00e9 totale" },
                  { icon: Zap, title: "D\u00e9ploiement rapide", desc: "Premier chatbot IA op\u00e9rationnel en 2 semaines. R\u00e9sultats mesurables d\u00e8s le mois 1" },
                  { icon: Globe, title: "Couverture nationale", desc: "Nous servons des clients dans toutes les wilayas d'Alg\u00e9rie, distance ou pr\u00e9sentiel" },
                  { icon: Star, title: "R\u00e9sultats prouv\u00e9s", desc: "Nos clients voient en moyenne +300% de productivit\u00e9 et +40% de conversion" },
                  { icon: Rocket, title: "Accompagnement complet", desc: "De la strat\u00e9gie IA \u00e0 l'impl\u00e9mentation, la formation et la maintenance continue" },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/[0.02] transition-colors">
                      <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-purple-400" />
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
                  <h4 className="text-xl font-bold text-white mb-4">Notre promesse</h4>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {[
                      { num: "01", text: "R\u00e9sultats mesurables en 30 jours ou on retravaille gratuitement" },
                      { num: "02", text: "Consultation gratuite et plan d'action IA personnalis\u00e9" },
                      { num: "03", text: "Support continu et optimisation apr\u00e8s d\u00e9ploiement" },
                    ].map((item, i) => (
                      <div key={i} className="text-center">
                        <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">{item.num}</div>
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
                    Questions Fr&eacute;quentes sur l&apos;IA en Alg&eacute;rie
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
                    { href: "/blog/developpement-site-web-algerie-2026", label: "D\u00e9veloppement Site Web Alg\u00e9rie 2026" },
                    { href: "/blog/developpement-application-mobile-algerie-2026", label: "D\u00e9veloppement Application Mobile Alg\u00e9rie 2026" },
                    { href: "/blog/solutions-informatiques-algerie-2026", label: "Solutions Informatiques Alg\u00e9rie 2026" },
                    { href: "/blog/iot-internet-des-objets-algerie-2026", label: "IoT & Internet des Objets Alg\u00e9rie 2026" },
                  ].map((link, i) => (
                    <Link key={i} href={link.href} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-purple-500/[0.06] hover:border-purple-500/20 transition-all text-sm text-gray-500 hover:text-purple-400">
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
                {(blog?.tags || ["intelligence artificielle alg\u00e9rie", "IA entreprise alg\u00e9rie", "automatisation IA alg\u00e9rie", "chatbot IA alg\u00e9rie", "machine learning alg\u00e9rie", "IA PME alg\u00e9rie 2026", "analyse pr\u00e9dictive alg\u00e9rie", "computer vision alg\u00e9rie"]).map((tag, i) => (
                  <span key={i} className="bg-white/[0.03] text-gray-600 px-3 py-1.5 rounded-lg text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </article>

        {/* ═══════════════════════════════════════════
            CTA — Urgent: Vos Concurrents Avancent
        ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-24">
          <FloatingOrb color="radial-gradient(circle, #a855f7, transparent 70%)" size="450px" x="5%" y="-25%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="400px" x="65%" y="15%" delay={4} />
          <FloatingOrb color="radial-gradient(circle, #22c55e, transparent 70%)" size="350px" x="35%" y="50%" delay={7} />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 backdrop-blur-md border border-red-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-8">
                <Activity className="w-3.5 h-3.5" />
                Urgence
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Chaque Jour Sans IA,{" "}
                <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Vos Concurrents Avancent
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-4 leading-relaxed">
                Ne laissez pas votre entreprise &agrave; la tra&icirc;ne. Chaque semaine sans IA, c&apos;est des clients
                perdus, de l&apos;argent gaspill&eacute;, et des opportunit&eacute;s manqu&eacute;es.
              </p>
              <p className="text-gray-500 text-base mb-10 leading-relaxed">
                <strong className="text-white">Consultation gratuite.</strong> Appelez-nous, expliquez votre business,
                et recevez un plan d&apos;action IA personnalis&eacute; en 48h. Z&eacute;ro engagement, z&eacute;ro risque.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/213549575512?text=Bonjour, je veux int%C3%A9grer l'IA dans mon entreprise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-white text-gray-950 px-8 py-4 rounded-2xl font-semibold hover:bg-purple-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Consultation IA Gratuite WhatsApp
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
                    <GlassCard className="p-6 h-full hover:border-purple-500/20 transition-colors">
                      <span className="text-[10px] font-bold text-purple-400 tracking-widest uppercase mb-3 block">{post.category}</span>
                      <h3 className="text-white font-semibold text-sm group-hover:text-purple-400 transition-colors mb-2">{post.title}</h3>
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
