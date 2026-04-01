"use client";
import { Calendar, Clock, User, ArrowLeft, Globe, Code, Search, Shield, Zap, CheckCircle, Star, TrendingUp, Server, MessageCircle, Award, BarChart3, Layers, Target, Cpu, Lock, Rocket, Users, ArrowRight, Building2, Factory, ChevronRight, Monitor, Wrench, Phone, FileText, Database, Settings, Package, Briefcase, CreditCard, ClipboardList, Cog, LayoutDashboard, GitBranch, Cloud, Box, Repeat, UserCheck, PieChart, Truck, Receipt, CalendarDays, ShieldCheck, Workflow } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { getBlogBySlug, getRelatedBlogs } from '../../data/blogs';

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

export default function ErpSurMesureSaasStartupPmeAlgerie2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const blog = getBlogBySlug('erp-sur-mesure-saas-startup-pme-algerie-2026');
  const relatedBlogs = getRelatedBlogs('erp-sur-mesure-saas-startup-pme-algerie-2026', 3);

  const faqItems = [
    {
      question: "Pourquoi choisir un ERP sur mesure plutôt qu'Odoo ou SAP en Algérie ?",
      answer: "Un ERP sur mesure s'adapte exactement à vos processus métier, sans compromis. Avec Odoo ou SAP, vous devez adapter votre entreprise au logiciel, payer des licences mensuelles croissantes, et supporter des fonctionnalités inutiles qui alourdissent le système. Un ERP sur mesure par Symloop vous donne un logiciel rapide, léger, conçu spécifiquement pour votre activité, sans frais de licence récurrents. Le code vous appartient entièrement."
    },
    {
      question: "Combien de temps faut-il pour développer un ERP sur mesure en Algérie ?",
      answer: "Le délai dépend de la complexité. Un module de gestion commerciale (devis, factures, commandes) peut être livré en 6 à 10 semaines. Un ERP complet avec gestion commerciale, stocks, RH et CRM prend généralement 3 à 6 mois. Chez Symloop, nous livrons par modules : vous commencez à utiliser les premières fonctionnalités dès les premières semaines, puis nous ajoutons progressivement les modules suivants."
    },
    {
      question: "Peut-on migrer depuis Odoo ou SAP vers un ERP sur mesure ?",
      answer: "Oui, absolument. Symloop accompagne les entreprises algériennes dans la migration depuis Odoo, SAP, Sage ou tout autre système vers un ERP sur mesure. Nous analysons votre configuration actuelle, exportons vos données (clients, produits, historique), et les intégrons dans votre nouveau système. La transition se fait progressivement pour éviter toute interruption d'activité."
    },
    {
      question: "Un ERP sur mesure coûte-t-il plus cher qu'Odoo ?",
      answer: "Sur le court terme, un ERP sur mesure peut sembler plus coûteux. Mais sur 3 à 5 ans, le coût total de possession (TCO) est souvent inférieur. Avec Odoo Enterprise, vous payez des licences mensuelles par utilisateur, des frais d'intégrateur pour chaque personnalisation, et des mises à jour qui cassent vos adaptations. Un ERP sur mesure n'a pas de licences récurrentes, évolue selon vos besoins, et le code vous appartient."
    },
    {
      question: "Symloop peut-il développer une plateforme SaaS pour ma startup en Algérie ?",
      answer: "Oui, Symloop développe des plateformes SaaS complètes pour les startups algériennes. Architecture multi-tenant, système d'abonnements et de facturation, dashboard administrateur, gestion des utilisateurs, API pour intégrations tierces. Nous utilisons React/Next.js pour le frontend, Node.js pour le backend, et PostgreSQL pour la base de données. Votre plateforme est déployée sur le cloud (AWS ou Vercel) avec scalabilité automatique."
    },
    {
      question: "Quelles technologies utilisez-vous pour développer des ERP en Algérie ?",
      answer: "Symloop utilise une stack moderne et éprouvée : React et Next.js pour les interfaces web, Node.js et Express pour les API backend, PostgreSQL pour la base de données relationnelle, Flutter pour les applications mobiles compagnon, Docker pour le déploiement, et AWS ou Vercel pour l'hébergement cloud. Cette stack garantit performance, sécurité et maintenabilité à long terme."
    }
  ];

  return (
    <>
      <Head>
        <title>ERP Sur Mesure &amp; Plateformes SaaS Algérie 2026 | Logiciel Gestion Entreprise | Symloop</title>
        <meta name="description" content="Développement ERP sur mesure et plateformes SaaS pour startups et PME en Algérie. Gestion commerciale, facturation, stocks, RH, CRM, production. Alternative Odoo/SAP. Symloop, Sétif." />
        <meta name="keywords" content="ERP sur mesure algérie, logiciel gestion entreprise algérie, SaaS algérie, développement logiciel personnalisé algérie, alternative Odoo algérie, ERP PME algérie 2026, plateforme SaaS startup algérie, logiciel facturation algérie, gestion commerciale algérie, CRM sur mesure algérie, gestion stocks algérie, logiciel RH paie algérie, ERP personnalisé algérie, développement ERP algérie" />
        <link rel="canonical" href="https://symloop.com/blog/erp-sur-mesure-saas-startup-pme-algerie-2026/" />

        <meta property="og:title" content="ERP Sur Mesure & Plateformes SaaS Algérie 2026 | Symloop" />
        <meta property="og:description" content="Développement ERP sur mesure et plateformes SaaS pour startups et PME en Algérie. Alternative Odoo/SAP. Logiciel conçu pour votre métier." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/erp-sur-mesure-saas-startup-pme-algerie-2026/" />
        <meta property="og:site_name" content="Symloop" />
        <meta property="og:locale" content="fr_DZ" />
        <meta property="og:locale:alternate" content="ar_DZ" />
        <meta property="og:locale:alternate" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ERP Sur Mesure & Plateformes SaaS Algérie 2026 | Symloop" />
        <meta name="twitter:description" content="Développement ERP sur mesure et plateformes SaaS pour startups et PME en Algérie. Alternative Odoo/SAP." />

        {/* Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "ERP Sur Mesure & Plateformes SaaS en Algérie 2026 : Logiciels Personnalisés pour Startups et PME",
            "description": "Guide complet sur le développement d'ERP sur mesure et plateformes SaaS pour startups et PME algériennes. Gestion commerciale, CRM, stocks, RH, production.",
            "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
            "publisher": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
            "datePublished": "2026-04-01",
            "dateModified": "2026-04-01",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://symloop.com/blog/erp-sur-mesure-saas-startup-pme-algerie-2026/" },
            "articleSection": "ERP & SaaS Development",
            "inLanguage": "fr-DZ",
            "keywords": "ERP sur mesure algérie, logiciel gestion entreprise algérie, SaaS algérie, développement logiciel personnalisé algérie, alternative Odoo algérie"
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
              { "@type": "ListItem", "position": 3, "name": "ERP Sur Mesure & SaaS Algérie 2026", "item": "https://symloop.com/blog/erp-sur-mesure-saas-startup-pme-algerie-2026/" }
            ]
          })}
        </script>

        {/* Speakable */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "ERP Sur Mesure & Plateformes SaaS Algérie 2026",
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "[data-speakable]", "#faq"] },
            "url": "https://symloop.com/blog/erp-sur-mesure-saas-startup-pme-algerie-2026/"
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
            "knowsAbout": ["ERP sur mesure", "Plateforme SaaS", "Développement logiciel personnalisé", "Gestion commerciale", "CRM", "Gestion des stocks", "Gestion RH et paie", "React", "Node.js", "PostgreSQL"],
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
          <FloatingOrb color="radial-gradient(circle, #3b82f6, transparent 70%)" size="600px" x="-5%" y="-15%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #6366f1, transparent 70%)" size="500px" x="60%" y="10%" delay={3} />
          <FloatingOrb color="radial-gradient(circle, #22c55e, transparent 70%)" size="450px" x="30%" y="55%" delay={6} />
          <FloatingOrb color="radial-gradient(circle, #f59e0b, transparent 70%)" size="350px" x="80%" y="60%" delay={9} />
          <FloatingOrb color="radial-gradient(circle, #818cf8, transparent 70%)" size="300px" x="10%" y="70%" delay={12} />

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
                  <li><Link href="/" className="hover:text-blue-400 transition-colors">Accueil</Link></li>
                  <li className="text-gray-700">/</li>
                  <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
                  <li className="text-gray-700">/</li>
                  <li className="text-blue-400">ERP Sur Mesure &amp; SaaS Algérie 2026</li>
                </ol>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="bg-blue-500/20 text-blue-300 backdrop-blur-md border border-blue-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase flex items-center gap-2">
                  <Database className="w-3.5 h-3.5" />
                  ERP &amp; SaaS
                </span>
                <span className="bg-indigo-500/20 text-indigo-300 backdrop-blur-md border border-indigo-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                  2026
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-8 leading-[1.08] tracking-tight"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                ERP Sur Mesure &amp; Plateformes
                <br />
                SaaS en{" "}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Algérie
                </span>{" "}
                2026
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-400 font-bold">
                  Logiciels Personnalisés pour Startups et PME
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg sm:text-xl text-gray-400 max-w-3xl leading-relaxed mb-10"
              >
                Votre logiciel, vos règles. ERP et plateformes SaaS construits
                spécifiquement pour votre métier — pas des solutions génériques qui vous imposent leurs limites.
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
                <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">En bref</h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  <strong className="text-white">Symloop</strong> développe des ERP sur mesure et des plateformes SaaS pour les startups et PME algériennes.
                  Contrairement aux solutions génériques (Odoo, SAP), nos logiciels sont construits spécifiquement pour votre métier :
                  gestion commerciale, facturation, stocks, RH, production, CRM. Technologie moderne (React, Node.js, Flutter).
                  Votre logiciel, vos règles.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">Contact :</strong> +213 549 575 512 — consultation gratuite pour analyser vos besoins
                  et concevoir votre solution sur mesure. Basés à Sétif, nous servons toute l&apos;Algérie.
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
                    { num: "01", title: "Pourquoi un ERP sur mesure", id: "pourquoi-erp" },
                    { num: "02", title: "Ce que Symloop développe", id: "modules" },
                    { num: "03", title: "Idéal pour startups", id: "startups" },
                    { num: "04", title: "Idéal pour PME", id: "pme" },
                    { num: "05", title: "Notre stack technique", id: "stack" },
                    { num: "06", title: "Processus de développement", id: "processus" },
                    { num: "07", title: "Questions fréquentes", id: "faq" },
                  ].map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group">
                      <span className="text-[10px] font-bold text-gray-600 tracking-widest group-hover:text-blue-400 transition-colors w-6">{item.num}</span>
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
                  En 2026, les entreprises algériennes font face à un choix crucial : continuer avec des logiciels génériques
                  qui ne correspondent pas à leurs processus, ou investir dans un <strong className="text-white">ERP sur mesure</strong> qui
                  s&apos;adapte parfaitement à leur métier. Les solutions comme Odoo et SAP promettent tout, mais imposent
                  leurs propres limites, leurs licences, et leur complexité.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed">
                  <strong className="text-gray-300">Symloop</strong> développe des logiciels de gestion entièrement personnalisés
                  pour les startups et PME algériennes. Pas de modules inutiles, pas de licences qui explosent, pas de compromis.
                  <strong className="text-gray-300"> Votre logiciel, construit pour votre métier.</strong>
                </p>
              </div>
            </Reveal>

            {/* ── Section 1: Pourquoi un ERP sur mesure ── */}
            <section id="pourquoi-erp" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Pourquoi un ERP Sur Mesure Plutôt qu&apos;Odoo ou SAP
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Les ERP génériques comme Odoo et SAP sont conçus pour fonctionner avec le plus grand nombre d&apos;entreprises possible.
                  Résultat : ils font beaucoup de choses, mais rien de parfait pour <strong className="text-white">votre</strong> entreprise.
                  Vous finissez par adapter vos processus au logiciel, au lieu de l&apos;inverse.
                </p>
              </Reveal>

              {/* Comparison table */}
              <Reveal delay={0.1}>
                <div className="backdrop-blur-xl bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden mb-10">
                  <div className="grid grid-cols-3 border-b border-white/[0.06]">
                    <div className="p-5 text-xs font-bold text-gray-600 uppercase tracking-widest">Critère</div>
                    <div className="p-5 text-xs font-bold text-gray-600 uppercase tracking-widest text-center border-x border-white/[0.06]">ERP Générique (Odoo/SAP)</div>
                    <div className="p-5 text-xs font-bold text-blue-400 uppercase tracking-widest text-center">ERP Sur Mesure (Symloop)</div>
                  </div>
                  {[
                    { critere: "Adaptation au métier", generic: "Vous adaptez votre travail au logiciel", custom: "Le logiciel s'adapte à votre travail" },
                    { critere: "Licences", generic: "Frais mensuels par utilisateur", custom: "Pas de licences récurrentes" },
                    { critere: "Fonctionnalités", generic: "Des centaines de modules inutiles", custom: "Uniquement ce dont vous avez besoin" },
                    { critere: "Performance", generic: "Lent à cause du code générique", custom: "Rapide car optimisé pour vous" },
                    { critere: "Propriété du code", generic: "Vous louez le logiciel", custom: "Le code vous appartient à 100%" },
                    { critere: "Évolution", generic: "Limité par l'éditeur", custom: "Évolution illimitée selon vos besoins" },
                    { critere: "Intégrations", generic: "Connecteurs standards limités", custom: "Intégrations sur mesure avec tout" },
                  ].map((row, i) => (
                    <div key={i} className={`grid grid-cols-3 ${i < 6 ? 'border-b border-white/[0.04]' : ''}`}>
                      <div className="p-4 text-sm text-white font-medium">{row.critere}</div>
                      <div className="p-4 text-sm text-gray-500 text-center border-x border-white/[0.04]">{row.generic}</div>
                      <div className="p-4 text-sm text-blue-300 text-center font-medium">{row.custom}</div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="backdrop-blur-xl bg-blue-500/[0.04] border border-blue-500/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-400" />
                    L&apos;essentiel
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Un ERP générique vous force à <strong className="text-gray-300">changer vos habitudes de travail</strong> pour correspondre au logiciel.
                    Un ERP sur mesure fait l&apos;inverse : il est <strong className="text-gray-300">construit autour de votre façon de travailler</strong>.
                    Pas de fonctionnalités en trop, pas de limitations, pas de frais de licence mensuels qui augmentent chaque année.
                  </p>
                </div>
              </Reveal>
            </section>

            {/* ── Section 2: Ce que Symloop développe ── */}
            <section id="modules" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-indigo-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Ce que Symloop Développe
                  </h2>
                </div>
              </Reveal>

              <div className="grid lg:grid-cols-2 gap-5">
                {/* ERP Gestion Commerciale */}
                <GlassCard className="p-8" delay={0}>
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                    <Receipt className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">ERP Gestion Commerciale</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    Gérez tout le cycle commercial de A à Z, du premier contact client à la livraison finale.
                  </p>
                  <ul className="space-y-2.5">
                    {["Devis et bons de commande automatisés", "Facturation avec conformité fiscale algérienne", "Suivi des livraisons et bons de sortie", "Gestion des prix et remises par client", "Tableau de bord chiffre d'affaires en temps réel", "Export comptable automatique"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                {/* CRM Sur Mesure */}
                <GlassCard className="p-8 border-indigo-500/20" delay={0.1}>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">CRM Sur Mesure</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    Suivez vos prospects, clients et opportunités avec un outil conçu pour votre processus de vente.
                  </p>
                  <ul className="space-y-2.5">
                    {["Pipeline de vente personnalisable", "Suivi des interactions clients", "Relances automatiques par email/SMS", "Scoring et priorisation des leads", "Historique complet par client", "Rapports de performance commerciale"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                {/* Gestion des Stocks */}
                <GlassCard className="p-8 border-green-500/20" delay={0.2}>
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                    <Package className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Gestion des Stocks</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    Contrôle total de vos stocks avec traçabilité complète et alertes intelligentes.
                  </p>
                  <ul className="space-y-2.5">
                    {["Gestion multi-entrepôts", "Alertes de stock minimum automatiques", "Traçabilité par lot et numéro de série", "Mouvements de stock en temps réel", "Inventaire physique simplifié", "Rapports de rotation et valorisation"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-green-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                {/* Gestion RH & Paie */}
                <GlassCard className="p-8 border-orange-500/20" delay={0.3}>
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                    <UserCheck className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Gestion RH &amp; Paie</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    Automatisez la gestion de vos ressources humaines, du pointage aux bulletins de paie.
                  </p>
                  <ul className="space-y-2.5">
                    {["Pointage et gestion du temps de travail", "Gestion des congés et absences", "Bulletins de paie conformes à la réglementation", "Déclarations CNAS et CASNOS automatiques", "Fiches employés et contrats", "Tableaux de bord RH"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-orange-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                {/* Gestion de Production */}
                <GlassCard className="p-8 border-purple-500/20" delay={0.4}>
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                    <Factory className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Gestion de Production</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    Pilotez votre production avec précision, de la planification au contrôle qualité.
                  </p>
                  <ul className="space-y-2.5">
                    {["Planification et ordonnancement", "Suivi des ordres de fabrication", "Gestion des nomenclatures (BOM)", "Contrôle qualité intégré", "Suivi des temps de production", "Indicateurs de performance (OEE)"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-purple-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                {/* Plateforme SaaS */}
                <GlassCard className="p-8 border-cyan-500/20" delay={0.5}>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                    <Cloud className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Plateforme SaaS</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    Lancez votre propre plateforme SaaS avec architecture multi-tenant et gestion d&apos;abonnements.
                  </p>
                  <ul className="space-y-2.5">
                    {["Architecture multi-tenant sécurisée", "Système d'abonnements et facturation", "Dashboard administrateur complet", "API pour intégrations tierces", "Gestion des rôles et permissions", "Scalabilité automatique sur le cloud"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </section>

            {/* ── Section 3: Idéal pour Startups ── */}
            <section id="startups" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-green-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Idéal pour Startups
                  </h2>
                </div>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Vous lancez une startup en Algérie ? Un logiciel sur mesure est votre meilleur investissement.
                  Plutôt que de payer des abonnements SaaS qui explosent avec la croissance, construisez un outil
                  qui vous appartient et qui évolue avec vous.
                </p>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Rocket,
                    title: "MVP rapide pour valider l'idée",
                    desc: "Nous développons un produit minimum viable en quelques semaines. Testez votre marché rapidement avant d'investir massivement. Itérez en fonction des retours utilisateurs.",
                    color: "text-green-400",
                    bg: "bg-green-500/10",
                    border: "border-green-500/20"
                  },
                  {
                    icon: TrendingUp,
                    title: "Scale progressivement",
                    desc: "Commencez petit, grandissez sans limites. L'architecture est pensée dès le départ pour supporter la croissance. Ajoutez des fonctionnalités au fur et à mesure.",
                    color: "text-blue-400",
                    bg: "bg-blue-500/10",
                    border: "border-blue-500/20"
                  },
                  {
                    icon: CreditCard,
                    title: "Pas de licences qui explosent",
                    desc: "Avec les SaaS génériques, vos coûts augmentent avec chaque utilisateur. Avec un logiciel sur mesure, vous payez le développement une fois. Le code vous appartient, sans frais mensuels.",
                    color: "text-orange-400",
                    bg: "bg-orange-500/10",
                    border: "border-orange-500/20"
                  },
                  {
                    icon: Lock,
                    title: "Code propriétaire = votre actif",
                    desc: "Le code source est votre propriété intellectuelle. C'est un actif valorisable pour vos levées de fonds. Aucune dépendance envers un éditeur tiers.",
                    color: "text-indigo-400",
                    bg: "bg-indigo-500/10",
                    border: "border-indigo-500/20"
                  },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <GlassCard className={`p-7 h-full ${item.border}`}>
                      <div className={`w-11 h-11 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center mb-5`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* ── Section 4: Idéal pour PME ── */}
            <section id="pme" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-orange-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Idéal pour PME
                  </h2>
                </div>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Les PME algériennes ont des processus métier uniques, forgés par des années d&apos;expérience.
                  Un ERP sur mesure respecte et optimise ces processus au lieu de les remplacer par des workflows génériques.
                </p>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Settings,
                    title: "Adaptez le logiciel à vos processus",
                    desc: "Votre entreprise a ses propres habitudes de travail, ses formulaires, ses circuits de validation. Le logiciel s'adapte à vous, pas l'inverse. Chaque écran est pensé pour votre équipe.",
                    color: "text-orange-400",
                    bg: "bg-orange-500/10",
                    border: "border-orange-500/20"
                  },
                  {
                    icon: GitBranch,
                    title: "Intégration avec vos outils existants",
                    desc: "Connectez votre ERP avec vos outils actuels : comptabilité, banque, email, téléphonie, e-commerce. Pas besoin de tout changer d'un coup. Migration progressive et sans interruption.",
                    color: "text-blue-400",
                    bg: "bg-blue-500/10",
                    border: "border-blue-500/20"
                  },
                  {
                    icon: Users,
                    title: "Formation simple car conçu pour vous",
                    desc: "Vos employés apprennent en quelques heures, pas en quelques semaines. L'interface est conçue avec votre vocabulaire métier, vos termes, votre logique. Pas de menus complexes inutiles.",
                    color: "text-green-400",
                    bg: "bg-green-500/10",
                    border: "border-green-500/20"
                  },
                  {
                    icon: Zap,
                    title: "Évolution illimitée",
                    desc: "Votre entreprise change, votre logiciel change avec elle. Ajoutez de nouveaux modules, de nouvelles fonctionnalités, de nouveaux rapports quand vous en avez besoin. Aucune limite imposée par un éditeur.",
                    color: "text-purple-400",
                    bg: "bg-purple-500/10",
                    border: "border-purple-500/20"
                  },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <GlassCard className={`p-7 h-full ${item.border}`}>
                      <div className={`w-11 h-11 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center mb-5`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* ── Section 5: Stack Technique ── */}
            <section id="stack" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Notre Stack Technique
                  </h2>
                </div>
              </Reveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {[
                  { name: "React / Next.js", desc: "Interfaces web modernes, réactives et performantes. Server-side rendering pour le SEO.", tag: "Frontend", color: "from-blue-500/20 to-indigo-500/20", border: "border-blue-500/10" },
                  { name: "Node.js / Express", desc: "API backend rapides et scalables. Architecture microservices ou monolithique selon le besoin.", tag: "Backend", color: "from-green-500/20 to-emerald-500/20", border: "border-green-500/10" },
                  { name: "PostgreSQL", desc: "Base de données relationnelle robuste. Transactions ACID, requêtes complexes, performance.", tag: "Database", color: "from-indigo-500/20 to-purple-500/20", border: "border-indigo-500/10" },
                  { name: "Flutter", desc: "Applications mobiles compagnon iOS et Android depuis une seule base de code.", tag: "Mobile", color: "from-cyan-500/20 to-blue-500/20", border: "border-cyan-500/10" },
                  { name: "Docker", desc: "Conteneurisation pour déploiements reproductibles et isolation des environnements.", tag: "DevOps", color: "from-orange-500/20 to-red-500/20", border: "border-orange-500/10" },
                  { name: "AWS / Vercel", desc: "Hébergement cloud avec scalabilité automatique, CDN global et haute disponibilité.", tag: "Cloud", color: "from-yellow-500/20 to-orange-500/20", border: "border-yellow-500/10" },
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
                <div className="backdrop-blur-xl bg-indigo-500/[0.04] border border-indigo-500/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-indigo-400" />
                    Pourquoi cette stack
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Chaque technologie est choisie pour sa <strong className="text-gray-300">fiabilité en production</strong>, sa communauté active,
                    et sa facilité de maintenance à long terme. React et Node.js sont les technologies les plus demandées au monde,
                    ce qui garantit que vous trouverez toujours des développeurs pour faire évoluer votre logiciel,
                    même si vous décidez un jour de travailler avec une autre équipe.
                  </p>
                </div>
              </Reveal>
            </section>

            {/* ── Section 6: Processus de développement ── */}
            <section id="processus" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-purple-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Processus de Développement
                  </h2>
                </div>
              </Reveal>

              <div className="space-y-4">
                {[
                  { num: "01", icon: MessageCircle, title: "Analyse & Cahier des Charges", desc: "Nous rencontrons votre équipe pour comprendre chaque processus métier en détail. Nous documentons vos besoins dans un cahier des charges fonctionnel précis, avec maquettes des écrans clés. Rien ne commence avant votre validation.", color: "text-blue-400", bg: "bg-blue-500/10", line: "from-blue-500" },
                  { num: "02", icon: Monitor, title: "Design UX/UI & Prototypage", desc: "Maquettes interactives sur Figma que vous pouvez tester avant le développement. Interface pensée pour vos utilisateurs, avec votre vocabulaire métier et vos couleurs. Validation écran par écran.", color: "text-indigo-400", bg: "bg-indigo-500/10", line: "from-indigo-500" },
                  { num: "03", icon: Code, title: "Développement par Modules", desc: "Développement itératif module par module. Vous recevez les premiers modules fonctionnels rapidement et commencez à les utiliser pendant que nous développons les suivants. Démos régulières et feedback continu.", color: "text-green-400", bg: "bg-green-500/10", line: "from-green-500" },
                  { num: "04", icon: Shield, title: "Tests & Sécurité", desc: "Tests fonctionnels, tests de performance, tests de sécurité. Chaque module est validé avec des données réelles avant mise en production. Chiffrement des données sensibles et contrôle d'accès par rôle.", color: "text-orange-400", bg: "bg-orange-500/10", line: "from-orange-500" },
                  { num: "05", icon: Rocket, title: "Déploiement & Formation", desc: "Mise en production sur votre serveur ou sur le cloud. Migration de vos données existantes. Formation de votre équipe sur chaque module. Documentation utilisateur complète. Support technique post-lancement.", color: "text-purple-400", bg: "bg-purple-500/10", line: "from-purple-500" },
                ].map((step, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="flex gap-6 items-start group">
                      <div className="flex flex-col items-center">
                        <div className={`${step.bg} border border-white/[0.06] w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <step.icon className={`w-6 h-6 ${step.color}`} />
                        </div>
                        {i < 4 && <div className={`w-px h-8 bg-gradient-to-b ${step.line} to-transparent opacity-20 mt-2`} />}
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

            {/* ── Section 7: FAQ ── */}
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
                    { href: "/blog/solutions-informatiques-algerie-2026", label: "Solutions Informatiques Algérie 2026" },
                    { href: "/blog/developpement-site-web-algerie-2026", label: "Développement Site Web Algérie 2026" },
                    { href: "/blog/developpement-application-mobile-algerie-2026", label: "Application Mobile Algérie 2026" },
                    { href: "/blog/iot-internet-des-objets-algerie-2026", label: "IoT & Internet des Objets Algérie 2026" },
                  ].map((link, i) => (
                    <Link key={i} href={link.href} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-blue-500/[0.06] hover:border-blue-500/20 transition-all text-sm text-gray-500 hover:text-blue-400">
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
                {(blog?.tags || [
                  "ERP sur mesure algérie",
                  "logiciel gestion entreprise algérie",
                  "SaaS algérie",
                  "développement logiciel personnalisé algérie",
                  "alternative Odoo algérie",
                  "ERP PME algérie 2026",
                  "plateforme SaaS startup algérie",
                  "CRM sur mesure algérie",
                  "gestion stocks algérie",
                  "logiciel RH paie algérie"
                ]).map((tag, i) => (
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
          <FloatingOrb color="radial-gradient(circle, #3b82f6, transparent 70%)" size="400px" x="10%" y="-20%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #6366f1, transparent 70%)" size="350px" x="70%" y="20%" delay={4} />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 tracking-tight">
                Prêt à Construire Votre ERP Sur Mesure ?
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Consultation gratuite avec nos experts. Décrivez-nous vos processus métier
                et nous vous proposons une solution technique adaptée. Pas d&apos;engagement, pas de frais cachés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/213549575512?text=Bonjour, je souhaite discuter d'un projet ERP sur mesure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-white text-gray-950 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-colors"
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
                    <GlassCard className="p-6 h-full hover:border-blue-500/20 transition-colors">
                      <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase mb-3 block">{post.category}</span>
                      <h3 className="text-white font-semibold text-sm group-hover:text-blue-400 transition-colors mb-2">{post.title}</h3>
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
