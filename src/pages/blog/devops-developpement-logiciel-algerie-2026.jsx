"use client";
import { Calendar, Clock, User, ArrowLeft, Globe, Code, Search, Shield, Zap, CheckCircle, Star, TrendingUp, Server, MessageCircle, Award, BarChart3, Layers, Target, Cpu, Lock, Rocket, Users, ArrowRight, Building2, ChevronRight, Monitor, TestTube, Wrench, Phone, FileText, GitBranch, Activity, Database, Cloud, RefreshCw, Terminal, Box, Eye, AlertTriangle, Repeat, Settings, Workflow, Container, Radio } from "lucide-react";
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

export default function DevOpsDeveloppementLogicielAlgerie2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const blog = getBlogBySlug('devops-developpement-logiciel-algerie-2026');
  const relatedBlogs = getRelatedBlogs('devops-developpement-logiciel-algerie-2026', 3);

  const uptime = useCounter(99, 2000, statsInView);
  const deploys = useCounter(300, 2500, statsInView);
  const bugReduction = useCounter(80, 2000, statsInView);

  const faqItems = [
    {
      question: "Qu'est-ce que le DevOps exactement ?",
      answer: "Le DevOps est une approche qui combine le d\u00e9veloppement logiciel (Dev) et les op\u00e9rations informatiques (Ops). L'objectif est de livrer des logiciels plus rapidement, avec moins de bugs et sans interruption de service. Chez Symloop, nous utilisons l'automatisation CI/CD, l'infrastructure cloud et le monitoring continu pour garantir des d\u00e9ploiements fiables et rapides pour les entreprises alg\u00e9riennes."
    },
    {
      question: "Pourquoi le DevOps est-il important pour mon entreprise en Alg\u00e9rie ?",
      answer: "Le DevOps permet \u00e0 votre entreprise de livrer des fonctionnalit\u00e9s plus vite, de r\u00e9duire les pannes et les temps d'arr\u00eat, et d'am\u00e9liorer la qualit\u00e9 de vos logiciels. Dans le contexte alg\u00e9rien o\u00f9 la transformation num\u00e9rique s'acc\u00e9l\u00e8re, adopter le DevOps vous donne un avantage comp\u00e9titif majeur : vous pouvez r\u00e9agir plus vite aux besoins du march\u00e9 et offrir une exp\u00e9rience utilisateur sans interruption."
    },
    {
      question: "Symloop peut-il g\u00e9rer mon infrastructure cloud ?",
      answer: "Absolument. Symloop g\u00e8re l'infrastructure cloud de bout en bout : conception, d\u00e9ploiement, monitoring et maintenance. Nous travaillons avec AWS, Vercel, Docker et Kubernetes pour construire des architectures r\u00e9silientes et scalables. Nous configurons \u00e9galement les sauvegardes automatiques, les certificats SSL, les firewalls et le monitoring 24/7 pour garantir la s\u00e9curit\u00e9 et la disponibilit\u00e9 de vos services."
    },
    {
      question: "Quels types de logiciels Symloop d\u00e9veloppe-t-il ?",
      answer: "Symloop d\u00e9veloppe tous types de logiciels : applications web (dashboards, portails, plateformes), API et microservices (REST, GraphQL, temps r\u00e9el), applications mobiles (Flutter, React Native), logiciels de gestion (ERP, CRM, outils personnalis\u00e9s), plateformes SaaS (multi-tenant, abonnements) et syst\u00e8mes IoT (firmware, dashboards, pipelines de donn\u00e9es). Chaque projet b\u00e9n\u00e9ficie de notre pipeline DevOps automatis\u00e9."
    },
    {
      question: "Combien de temps faut-il pour mettre en place un pipeline DevOps ?",
      answer: "La mise en place d'un pipeline DevOps de base (CI/CD, tests automatis\u00e9s, d\u00e9ploiement automatique) prend g\u00e9n\u00e9ralement 1 \u00e0 2 semaines. Pour une infrastructure compl\u00e8te avec monitoring, alertes, sauvegardes et s\u00e9curit\u00e9 avanc\u00e9e, comptez 2 \u00e0 4 semaines. Chez Symloop, nous int\u00e9grons le DevOps d\u00e8s le premier jour de chaque projet pour une qualit\u00e9 optimale d\u00e8s le d\u00e9part."
    },
    {
      question: "Le DevOps co\u00fbte-t-il plus cher que le d\u00e9veloppement classique ?",
      answer: "Non, c'est m\u00eame l'inverse \u00e0 moyen terme. Le DevOps r\u00e9duit les co\u00fbts en automatisant les t\u00e2ches r\u00e9p\u00e9titives, en d\u00e9tectant les bugs plus t\u00f4t (quand ils co\u00fbtent moins \u00e0 corriger), et en \u00e9vitant les pannes co\u00fbteuses. Les entreprises qui adoptent le DevOps constatent en moyenne une r\u00e9duction de 60% des co\u00fbts de maintenance et une acc\u00e9l\u00e9ration de 200% des livraisons. Contactez Symloop pour une consultation gratuite."
    }
  ];

  return (
    <>
      <Head>
        <title>DevOps &amp; D\u00e9veloppement Logiciel Alg\u00e9rie 2026 | Livraison Rapide, Z\u00e9ro Downtime | Symloop</title>
        <meta name="description" content="Symloop applique les pratiques DevOps modernes pour d\u00e9velopper et d\u00e9ployer des logiciels fiables pour les entreprises alg\u00e9riennes. CI/CD automatis\u00e9, infrastructure cloud AWS, monitoring 24/7, d\u00e9ploiements sans interruption." />
        <meta name="keywords" content="DevOps alg\u00e9rie, d\u00e9veloppement logiciel alg\u00e9rie, CI/CD alg\u00e9rie, infrastructure cloud alg\u00e9rie, d\u00e9ploiement automatis\u00e9 alg\u00e9rie, d\u00e9veloppement logiciel sur mesure alg\u00e9rie 2026, devops alg\u00e9rie 2026, logiciel sur mesure alg\u00e9rie, microservices alg\u00e9rie, kubernetes alg\u00e9rie, docker alg\u00e9rie" />
        <link rel="canonical" href="https://symloop.com/blog/devops-developpement-logiciel-algerie-2026/" />

        <meta property="og:title" content="DevOps & D\u00e9veloppement Logiciel Alg\u00e9rie 2026 | Symloop" />
        <meta property="og:description" content="Pratiques DevOps modernes pour les entreprises alg\u00e9riennes. CI/CD, cloud, monitoring 24/7. Livraison rapide, z\u00e9ro downtime." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/devops-developpement-logiciel-algerie-2026/" />
        <meta property="og:site_name" content="Symloop" />
        <meta property="og:locale" content="fr_DZ" />
        <meta property="og:locale:alternate" content="ar_DZ" />
        <meta property="og:locale:alternate" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DevOps & D\u00e9veloppement Logiciel Alg\u00e9rie 2026 | Symloop" />
        <meta name="twitter:description" content="Pratiques DevOps modernes pour les entreprises alg\u00e9riennes. CI/CD, cloud, monitoring 24/7." />

        {/* Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "DevOps & D\u00e9veloppement Logiciel en Alg\u00e9rie 2026 : Livraison Rapide, Z\u00e9ro Downtime",
            "description": "Symloop applique les pratiques DevOps modernes pour d\u00e9velopper et d\u00e9ployer des logiciels fiables pour les entreprises alg\u00e9riennes. CI/CD automatis\u00e9, infrastructure cloud, monitoring 24/7.",
            "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
            "publisher": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
            "datePublished": "2026-04-01",
            "dateModified": "2026-04-01",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://symloop.com/blog/devops-developpement-logiciel-algerie-2026/" },
            "articleSection": "DevOps & Software Development",
            "inLanguage": "fr-DZ",
            "keywords": "DevOps alg\u00e9rie, d\u00e9veloppement logiciel alg\u00e9rie, CI/CD alg\u00e9rie, infrastructure cloud alg\u00e9rie, d\u00e9ploiement automatis\u00e9 alg\u00e9rie 2026"
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
              { "@type": "ListItem", "position": 3, "name": "DevOps & D\u00e9veloppement Logiciel Alg\u00e9rie 2026", "item": "https://symloop.com/blog/devops-developpement-logiciel-algerie-2026/" }
            ]
          })}
        </script>

        {/* Speakable */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "DevOps & D\u00e9veloppement Logiciel Alg\u00e9rie 2026",
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "[data-speakable]", "#faq"] },
            "url": "https://symloop.com/blog/devops-developpement-logiciel-algerie-2026/"
          })}
        </script>
      </Head>

      <div className={`min-h-screen bg-gray-950 ${isRTL ? 'rtl' : 'ltr'}`}>

        {/* ═══════════════════════════════════════════
            HERO — Animated Orbs + Glass
        ═══════════════════════════════════════════ */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Orbs — orange/cyan/green scheme */}
          <FloatingOrb color="radial-gradient(circle, #f97316, transparent 70%)" size="600px" x="-5%" y="-15%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="500px" x="60%" y="10%" delay={3} />
          <FloatingOrb color="radial-gradient(circle, #22c55e, transparent 70%)" size="450px" x="30%" y="55%" delay={6} />
          <FloatingOrb color="radial-gradient(circle, #f59e0b, transparent 70%)" size="350px" x="80%" y="60%" delay={9} />
          <FloatingOrb color="radial-gradient(circle, #fb923c, transparent 70%)" size="300px" x="10%" y="70%" delay={12} />

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
                  <li><Link href="/" className="hover:text-orange-400 transition-colors">Accueil</Link></li>
                  <li className="text-gray-700">/</li>
                  <li><Link href="/blog" className="hover:text-orange-400 transition-colors">Blog</Link></li>
                  <li className="text-gray-700">/</li>
                  <li className="text-orange-400">DevOps &amp; D&eacute;veloppement Logiciel Alg&eacute;rie 2026</li>
                </ol>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="bg-orange-500/20 text-orange-300 backdrop-blur-md border border-orange-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5" />
                  DevOps
                </span>
                <span className="bg-amber-500/20 text-amber-300 backdrop-blur-md border border-amber-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
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
                DevOps &amp; D&eacute;veloppement
                <br />
                Logiciel en{" "}
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  Alg&eacute;rie
                </span>{" "}
                2026
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-400">
                  Livraison Rapide, Z&eacute;ro Downtime
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg sm:text-xl text-gray-400 max-w-3xl leading-relaxed mb-10"
              >
                Des logiciels fiables, d&eacute;ploy&eacute;s en continu, surveill&eacute;s 24/7.
                Symloop construit et op&egrave;re vos solutions avec les pratiques DevOps les plus avanc&eacute;es.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="flex items-center gap-8 text-xs text-gray-500 tracking-wide uppercase"
              >
                <div className="flex items-center gap-2"><User className="w-3.5 h-3.5" /> Symloop Team</div>
                <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> 1 Avril 2026</div>
                <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> 18 min</div>
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
                <h2 className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-3">En bref</h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  <strong className="text-white">Symloop</strong> applique les pratiques DevOps modernes pour d&eacute;velopper et d&eacute;ployer
                  des logiciels fiables pour les entreprises alg&eacute;riennes. CI/CD automatis&eacute;, infrastructure cloud (AWS, Vercel),
                  monitoring 24/7, d&eacute;ploiements sans interruption. Applications web, API, microservices, applications mobiles.
                  Livraison rapide, qualit&eacute; garantie.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">Contact :</strong> +213 549 575 512 &mdash; consultation gratuite.
                  Technologies : GitHub Actions, Docker, Kubernetes, AWS, Vercel, Node.js, Next.js.
                  &Eacute;quipe locale &agrave; S&eacute;tif, support en fran&ccedil;ais et arabe.
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
                    { num: "01", title: "Qu'est-ce que le DevOps", id: "devops-definition" },
                    { num: "02", title: "Notre stack DevOps", id: "stack" },
                    { num: "03", title: "Types de logiciels", id: "types" },
                    { num: "04", title: "Notre processus DevOps", id: "processus" },
                    { num: "05", title: "R\u00e9sultats DevOps", id: "resultats" },
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

            {/* ── Introduction ── */}
            <Reveal>
              <div className="mb-20">
                <p className="text-xl text-gray-400 leading-relaxed mb-6">
                  Dans le monde du logiciel en 2026, la vitesse et la fiabilit&eacute; ne sont plus des options &mdash;
                  ce sont des <strong className="text-white">exigences de survie</strong>. Les entreprises alg&eacute;riennes
                  qui adoptent le DevOps livrent plus vite, cassent moins, et dorment mieux la nuit.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed">
                  <strong className="text-gray-300">Symloop</strong> int&egrave;gre les pratiques DevOps dans chaque projet
                  de d&eacute;veloppement logiciel : de la premi&egrave;re ligne de code au monitoring en production.
                  Le r&eacute;sultat ? Des logiciels qui marchent, qui scalent, et qui ne tombent pas.
                </p>
              </div>
            </Reveal>

            {/* ═══════════════════════════════════════════
                Section 1: Qu'est-ce que le DevOps
            ═══════════════════════════════════════════ */}
            <section id="devops-definition" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-orange-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Qu&apos;est-ce que le DevOps et Pourquoi C&apos;est Important
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <GlassCard className="p-8 mb-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <Repeat className="w-7 h-7 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">DevOps en termes simples</h3>
                      <p className="text-gray-400 leading-relaxed mb-4">
                        Imaginez une <strong className="text-gray-300">usine qui tourne 24/7 et ne tombe jamais en panne</strong>.
                        C&apos;est exactement ce que le DevOps fait pour le logiciel. Au lieu de livrer des mises &agrave; jour
                        une fois par mois (en croisant les doigts), le DevOps permet de livrer des am&eacute;liorations
                        <strong className="text-gray-300"> plusieurs fois par jour</strong>, de mani&egrave;re automatique et s&ucirc;re.
                      </p>
                      <p className="text-gray-400 leading-relaxed">
                        Le DevOps = <strong className="text-orange-300">livrer du logiciel plus vite, avec moins de bugs</strong>.
                        Chaque changement de code est automatiquement test&eacute;, valid&eacute; et d&eacute;ploy&eacute;.
                        Si un probl&egrave;me est d&eacute;tect&eacute;, le syst&egrave;me revient automatiquement &agrave; la version pr&eacute;c&eacute;dente
                        en quelques secondes. Z&eacute;ro stress, z&eacute;ro downtime.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: Zap, title: "Sans DevOps", items: ["D\u00e9ploiements manuels risqu\u00e9s", "Bugs d\u00e9couverts par les clients", "Pannes fr\u00e9quentes, longues \u00e0 r\u00e9soudre", "Mises \u00e0 jour lentes et stressantes"], color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" },
                  { icon: ArrowRight, title: "Transition", items: ["Automatisation progressive", "Culture de collaboration", "Monitoring des premiers services", "Tests automatis\u00e9s basiques"], color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
                  { icon: Rocket, title: "Avec DevOps", items: ["D\u00e9ploiements automatiques en minutes", "Bugs d\u00e9tect\u00e9s avant la production", "99.9% de disponibilit\u00e9", "Livraisons continues et s\u00e9reines"], color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
                ].map((col, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className={`${col.bg} border ${col.border} rounded-2xl p-6`}>
                      <div className="flex items-center gap-3 mb-4">
                        <col.icon className={`w-5 h-5 ${col.color}`} />
                        <h4 className="text-white font-bold text-sm">{col.title}</h4>
                      </div>
                      <ul className="space-y-2.5">
                        {col.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-gray-400 text-sm">
                            <div className={`w-1 h-1 rounded-full ${col.color.replace('text-', 'bg-')} flex-shrink-0 mt-2`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* ═══════════════════════════════════════════
                Section 2: Notre Stack DevOps
            ═══════════════════════════════════════════ */}
            <section id="stack" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Notre Stack DevOps
                  </h2>
                </div>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* CI/CD */}
                <GlassCard className="p-8" delay={0}>
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                    <GitBranch className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">CI/CD</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    Int&eacute;gration et d&eacute;ploiement continus. Chaque commit d&eacute;clenche automatiquement
                    les tests, la validation et le d&eacute;ploiement.
                  </p>
                  <ul className="space-y-2.5">
                    {["GitHub Actions & Workflows", "Tests automatis\u00e9s (unit, integration, e2e)", "D\u00e9ploiement automatique sur staging & production", "Rollback instantan\u00e9 en cas de probl\u00e8me"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-orange-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                {/* Cloud Infrastructure */}
                <GlassCard className="p-8 border-cyan-500/20" delay={0.15}>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                    <Cloud className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Infrastructure Cloud</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    Architecture cloud moderne, scalable et r&eacute;siliente. Votre application
                    s&apos;adapte automatiquement &agrave; la charge.
                  </p>
                  <ul className="space-y-2.5">
                    {["AWS (EC2, S3, RDS, Lambda, CloudFront)", "Vercel pour le d\u00e9ploiement frontend", "Docker & conteneurisation", "Kubernetes pour l'orchestration"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                {/* Monitoring */}
                <GlassCard className="p-8 border-green-500/20" delay={0.3}>
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                    <Activity className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Monitoring</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    Surveillance en temps r&eacute;el de vos applications. Nous d&eacute;tectons les probl&egrave;mes
                    avant que vos utilisateurs ne les remarquent.
                  </p>
                  <ul className="space-y-2.5">
                    {["Uptime monitoring 24/7", "Error tracking & alertes instantan\u00e9es", "Performance monitoring (temps de r\u00e9ponse, CPU, m\u00e9moire)", "Tableaux de bord en temps r\u00e9el"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-green-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                {/* Security */}
                <GlassCard className="p-8 border-amber-500/20" delay={0.45}>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">S&eacute;curit&eacute;</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    La s&eacute;curit&eacute; n&apos;est pas un ajout &mdash; elle est int&eacute;gr&eacute;e dans chaque &eacute;tape
                    de notre pipeline DevOps (DevSecOps).
                  </p>
                  <ul className="space-y-2.5">
                    {["Certificats SSL/TLS automatis\u00e9s", "Firewalls & r\u00e8gles d'acc\u00e8s", "Scan de vuln\u00e9rabilit\u00e9s automatis\u00e9", "Sauvegardes automatiques chiffr\u00e9es"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-amber-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </section>

            {/* ═══════════════════════════════════════════
                Section 3: Types de Logiciels
            ═══════════════════════════════════════════ */}
            <section id="types" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-amber-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Types de Logiciels que Nous D&eacute;veloppons
                  </h2>
                </div>
              </Reveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Applications Web */}
                <GlassCard className="p-7" delay={0}>
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5">
                    <Monitor className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Applications Web</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    Dashboards, portails clients, plateformes m&eacute;tier. Interfaces modernes,
                    rapides et responsives.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Next.js", "React", "Node.js", "TypeScript"].map((tech, i) => (
                      <span key={i} className="text-[10px] text-orange-400/80 bg-orange-500/10 px-2 py-0.5 rounded-md">{tech}</span>
                    ))}
                  </div>
                </GlassCard>

                {/* API & Microservices */}
                <GlassCard className="p-7" delay={0.1}>
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5">
                    <Server className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">API &amp; Microservices</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    REST, GraphQL, WebSockets. Architectures d&eacute;coupl&eacute;es qui scalent
                    ind&eacute;pendamment.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["REST", "GraphQL", "WebSocket", "gRPC"].map((tech, i) => (
                      <span key={i} className="text-[10px] text-cyan-400/80 bg-cyan-500/10 px-2 py-0.5 rounded-md">{tech}</span>
                    ))}
                  </div>
                </GlassCard>

                {/* Applications Mobiles */}
                <GlassCard className="p-7" delay={0.2}>
                  <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5">
                    <Layers className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Applications Mobiles</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    iOS et Android depuis une seule base de code. Performance native,
                    d&eacute;ploiement automatis&eacute; sur les stores.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Flutter", "React Native", "Firebase"].map((tech, i) => (
                      <span key={i} className="text-[10px] text-green-400/80 bg-green-500/10 px-2 py-0.5 rounded-md">{tech}</span>
                    ))}
                  </div>
                </GlassCard>

                {/* Logiciels de Gestion */}
                <GlassCard className="p-7" delay={0.3}>
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5">
                    <Database className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Logiciels de Gestion</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    ERP, CRM, outils personnalis&eacute;s. Automatis&eacute;z vos processus m&eacute;tier
                    et centralisez vos donn&eacute;es.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["ERP", "CRM", "Custom Tools"].map((tech, i) => (
                      <span key={i} className="text-[10px] text-purple-400/80 bg-purple-500/10 px-2 py-0.5 rounded-md">{tech}</span>
                    ))}
                  </div>
                </GlassCard>

                {/* Plateformes SaaS */}
                <GlassCard className="p-7" delay={0.4}>
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
                    <Globe className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Plateformes SaaS</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    Multi-tenant, abonnements, facturation. Lancez votre produit SaaS
                    avec une architecture &eacute;prouv&eacute;e.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Multi-tenant", "Stripe", "Auth0"].map((tech, i) => (
                      <span key={i} className="text-[10px] text-blue-400/80 bg-blue-500/10 px-2 py-0.5 rounded-md">{tech}</span>
                    ))}
                  </div>
                </GlassCard>

                {/* Syst\u00e8mes IoT */}
                <GlassCard className="p-7" delay={0.5}>
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5">
                    <Cpu className="w-5 h-5 text-teal-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Syst&egrave;mes IoT</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    Firmware, dashboards temps r&eacute;el, pipelines de donn&eacute;es. Connectez
                    le monde physique au num&eacute;rique.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["MQTT", "InfluxDB", "Grafana"].map((tech, i) => (
                      <span key={i} className="text-[10px] text-teal-400/80 bg-teal-500/10 px-2 py-0.5 rounded-md">{tech}</span>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </section>

            {/* ═══════════════════════════════════════════
                Section 4: Notre Processus DevOps
            ═══════════════════════════════════════════ */}
            <section id="processus" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-green-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Notre Processus DevOps
                  </h2>
                </div>
                <p className="text-gray-500 mb-10 leading-relaxed">
                  Un cycle continu : chaque &eacute;tape alimente la suivante. Pas de fin, que de l&apos;am&eacute;lioration.
                </p>
              </Reveal>

              {/* Pipeline Visual */}
              <Reveal delay={0.1}>
                <div className="backdrop-blur-xl bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 mb-10 overflow-x-auto">
                  <div className="flex items-center gap-2 min-w-[600px] justify-between">
                    {[
                      { label: "Code", icon: Code, color: "text-orange-400", bg: "bg-orange-500/15" },
                      { label: "Build", icon: Box, color: "text-amber-400", bg: "bg-amber-500/15" },
                      { label: "Test", icon: TestTube, color: "text-yellow-400", bg: "bg-yellow-500/15" },
                      { label: "Deploy", icon: Rocket, color: "text-green-400", bg: "bg-green-500/15" },
                      { label: "Monitor", icon: Activity, color: "text-cyan-400", bg: "bg-cyan-500/15" },
                      { label: "Feedback", icon: MessageCircle, color: "text-blue-400", bg: "bg-blue-500/15" },
                      { label: "Repeat", icon: RefreshCw, color: "text-orange-400", bg: "bg-orange-500/15" },
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="flex flex-col items-center gap-2">
                          <div className={`w-12 h-12 rounded-xl ${step.bg} flex items-center justify-center`}>
                            <step.icon className={`w-5 h-5 ${step.color}`} />
                          </div>
                          <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">{step.label}</span>
                        </div>
                        {i < 6 && <ArrowRight className="w-4 h-4 text-gray-700 mx-1 flex-shrink-0" />}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Detailed steps */}
              <div className="space-y-4">
                {[
                  { num: "01", icon: Code, title: "Code", desc: "Les d\u00e9veloppeurs \u00e9crivent du code propre dans des branches isol\u00e9es. Chaque fonctionnalit\u00e9 est d\u00e9velopp\u00e9e s\u00e9par\u00e9ment. Les pull requests sont revues par un pair avant fusion.", color: "text-orange-400", bg: "bg-orange-500/10", line: "from-orange-500" },
                  { num: "02", icon: Box, title: "Build", desc: "D\u00e8s qu'un code est fusionn\u00e9, le syst\u00e8me CI compile automatiquement l'application, v\u00e9rifie les d\u00e9pendances et cr\u00e9e un artefact pr\u00eat au d\u00e9ploiement. Conteneurisation Docker pour une reproductibilit\u00e9 parfaite.", color: "text-amber-400", bg: "bg-amber-500/10", line: "from-amber-500" },
                  { num: "03", icon: TestTube, title: "Test", desc: "Tests unitaires, tests d'int\u00e9gration, tests end-to-end automatis\u00e9s. Aucun code ne passe en production sans avoir \u00e9t\u00e9 valid\u00e9 par notre suite de tests. Couverture de code surveill\u00e9e.", color: "text-yellow-400", bg: "bg-yellow-500/10", line: "from-yellow-500" },
                  { num: "04", icon: Rocket, title: "Deploy", desc: "D\u00e9ploiement automatis\u00e9 sur l'environnement cible. D'abord staging pour validation, puis production avec strat\u00e9gie blue-green ou canary. Z\u00e9ro downtime garanti.", color: "text-green-400", bg: "bg-green-500/10", line: "from-green-500" },
                  { num: "05", icon: Activity, title: "Monitor", desc: "Surveillance en temps r\u00e9el : temps de r\u00e9ponse, taux d'erreur, utilisation des ressources. Alertes automatiques sur Slack/email si un seuil est d\u00e9pass\u00e9. Logs centralis\u00e9s.", color: "text-cyan-400", bg: "bg-cyan-500/10", line: "from-cyan-500" },
                  { num: "06", icon: MessageCircle, title: "Feedback", desc: "Les donn\u00e9es de monitoring et les retours utilisateurs alimentent le prochain cycle. Am\u00e9lioration continue bas\u00e9e sur des donn\u00e9es r\u00e9elles, pas des suppositions. Le cycle recommence.", color: "text-blue-400", bg: "bg-blue-500/10", line: "from-blue-500" },
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

            {/* ═══════════════════════════════════════════
                Section 5: R\u00e9sultats DevOps
            ═══════════════════════════════════════════ */}
            <section id="resultats" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-yellow-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    R&eacute;sultats DevOps
                  </h2>
                </div>
              </Reveal>

              <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {[
                  { value: `${uptime}.9%`, label: "Uptime", sub: "disponibilit\u00e9 garantie", color: "from-green-400 to-emerald-400" },
                  { value: "Minutes", label: "D\u00e9ploiements", sub: "pas en jours", color: "from-orange-400 to-amber-400" },
                  { value: `-${bugReduction}%`, label: "Bugs", sub: "en production", color: "from-cyan-400 to-blue-400" },
                  { value: "Instantan\u00e9", label: "Rollback", sub: "retour arri\u00e8re imm\u00e9diat", color: "from-purple-400 to-pink-400" },
                ].map((stat, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <GlassCard className="p-6 text-center">
                      <div className={`text-3xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-white text-sm font-semibold">{stat.label}</div>
                      <div className="text-gray-600 text-xs">{stat.sub}</div>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <div className="backdrop-blur-xl bg-orange-500/[0.04] border border-orange-500/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-orange-400" />
                    L&apos;impact concret du DevOps
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Nos clients qui adoptent le DevOps voient une <strong className="text-gray-300">r&eacute;duction de 80% des bugs en production</strong>,
                    des <strong className="text-gray-300">d&eacute;ploiements en minutes au lieu de jours</strong>, et une disponibilit&eacute;
                    de <strong className="text-gray-300">99.9%</strong>. En cas de probl&egrave;me critique, le rollback automatique restaure
                    la version pr&eacute;c&eacute;dente en quelques secondes &mdash; sans intervention humaine.
                  </p>
                </div>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {[
                  { icon: Zap, title: "Livraison acc\u00e9l\u00e9r\u00e9e", desc: "De l'id\u00e9e \u00e0 la production en quelques heures, pas en semaines" },
                  { icon: Shield, title: "Moins de risques", desc: "Tests automatis\u00e9s et d\u00e9ploiements progressifs r\u00e9duisent les incidents" },
                  { icon: RefreshCw, title: "Am\u00e9lioration continue", desc: "Chaque cycle apporte des donn\u00e9es pour optimiser le suivant" },
                  { icon: Users, title: "Collaboration renforc\u00e9e", desc: "D\u00e9veloppeurs et op\u00e9rateurs travaillent main dans la main" },
                  { icon: BarChart3, title: "Visibilit\u00e9 totale", desc: "Dashboards en temps r\u00e9el sur la sant\u00e9 de vos applications" },
                  { icon: Lock, title: "S\u00e9curit\u00e9 int\u00e9gr\u00e9e", desc: "Scans de vuln\u00e9rabilit\u00e9s et conformit\u00e9 v\u00e9rifi\u00e9s \u00e0 chaque d\u00e9ploiement" },
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
            </section>

            {/* ═══════════════════════════════════════════
                Section 6: FAQ
            ═══════════════════════════════════════════ */}
            <section id="faq" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Questions Fr&eacute;quentes
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
                    { href: "/blog/solutions-informatiques-algerie-2026", label: "Solutions Informatiques Alg\u00e9rie 2026" },
                    { href: "/blog/erp-sur-mesure-algerie-2026", label: "ERP sur Mesure Alg\u00e9rie 2026" },
                    { href: "/blog/developpement-application-mobile-algerie-2026", label: "D\u00e9veloppement Application Mobile Alg\u00e9rie 2026" },
                    { href: "/blog/iot-internet-des-objets-algerie-2026", label: "IoT & Internet des Objets Alg\u00e9rie 2026" },
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
                {(blog?.tags || ["DevOps alg\u00e9rie", "d\u00e9veloppement logiciel alg\u00e9rie", "CI/CD alg\u00e9rie", "infrastructure cloud alg\u00e9rie", "d\u00e9ploiement automatis\u00e9 alg\u00e9rie", "d\u00e9veloppement logiciel sur mesure alg\u00e9rie 2026"]).map((tag, i) => (
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
          <FloatingOrb color="radial-gradient(circle, #f97316, transparent 70%)" size="400px" x="10%" y="-20%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #f59e0b, transparent 70%)" size="350px" x="70%" y="20%" delay={4} />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 tracking-tight">
                Construisons Votre Logiciel Ensemble
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Consultation gratuite avec nos experts DevOps. Parlez-nous de votre projet
                et d&eacute;couvrez comment nous pouvons livrer plus vite, avec z&eacute;ro downtime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/213549575512?text=Bonjour, je souhaite discuter d'un projet de d%C3%A9veloppement logiciel avec DevOps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-white text-gray-950 px-8 py-4 rounded-2xl font-semibold hover:bg-orange-50 transition-colors"
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
