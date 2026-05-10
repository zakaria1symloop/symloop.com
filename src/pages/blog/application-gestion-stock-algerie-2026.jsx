"use client";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Package, BarChart3, CheckCircle, MessageCircle, Phone, ChevronRight, Warehouse, ScanBarcode, Bell, Building2, Layers, TrendingUp, Smartphone, Monitor, Cloud, Settings, ShoppingCart, Pill, UtensilsCrossed, Factory, Tractor, Zap, Shield, Database, Receipt, Truck, RefreshCw, Globe, FileText, Target, AlertTriangle, DollarSign, Lock } from "lucide-react";
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

export default function ApplicationGestionStockAlgerie() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const blog = getBlogBySlug('application-gestion-stock-algerie-2026');
  const relatedBlogs = getRelatedBlogs('application-gestion-stock-algerie-2026', 3);

  const faqItems = [
    {
      question: "Quelle est la meilleure application de gestion de stock en Algérie en 2026 ?",
      answer: "La meilleure application dépend de votre secteur et de vos besoins spécifiques. Pour les PME algériennes, une solution sur mesure développée par Symloop offre le meilleur rapport qualité-prix car elle s'adapte exactement à vos processus métier, intègre la réglementation algérienne (facturation conforme, TVA, devises DA), et ne nécessite pas de licences mensuelles récurrentes. Contrairement aux solutions génériques comme Sage ou Odoo, un logiciel sur mesure ne vous impose pas de fonctionnalités inutiles."
    },
    {
      question: "Combien coûte une application de gestion de stock en Algérie ?",
      answer: "Les prix varient considérablement. Une solution SaaS standard coûte entre 5 000 et 15 000 DA par mois. Un logiciel sur mesure basique démarre à partir de 350 000 DA en one-shot (sans frais mensuels). Un système complet multi-dépôts avec application mobile peut aller de 800 000 à 2 500 000 DA. L'avantage du sur mesure : vous payez une fois et le code vous appartient, sans abonnement qui augmente chaque année."
    },
    {
      question: "Peut-on gérer plusieurs dépôts et magasins avec une seule application ?",
      answer: "Oui, absolument. Les solutions modernes de gestion de stock permettent la gestion multi-dépôts centralisée. Vous pouvez suivre les stocks de chaque entrepôt, magasin ou point de vente en temps réel, effectuer des transferts inter-dépôts, et consolider les rapports. Symloop développe des systèmes multi-sites avec synchronisation en temps réel, même avec une connexion internet instable grâce au mode hors-ligne."
    },
    {
      question: "Est-il possible d'utiliser l'application de stock hors-ligne en Algérie ?",
      answer: "Oui, c'est même essentiel en Algérie où la connexion internet peut être instable dans certaines zones. Les applications développées par Symloop intègrent un mode hors-ligne complet : vous pouvez scanner des produits, enregistrer des entrées et sorties de stock, et effectuer des ventes même sans connexion. Les données se synchronisent automatiquement dès que la connexion revient."
    },
    {
      question: "Comment migrer depuis Excel vers une application de gestion de stock ?",
      answer: "La migration depuis Excel est un processus que Symloop maîtrise parfaitement. Nous importons vos fichiers Excel existants (produits, fournisseurs, historique), nettoyons les données en doublon, structurons les catégories, et configurons les seuils d'alerte. La migration prend généralement 1 à 3 jours selon le volume de données. Vous continuez à travailler normalement pendant la transition."
    },
    {
      question: "L'application intègre-t-elle le lecteur code-barres et la facturation ?",
      answer: "Oui. Nos applications de gestion de stock intègrent nativement la lecture de codes-barres (EAN-13, Code 128, QR Code) via scanner USB ou caméra de smartphone. Le module de facturation est conforme à la réglementation fiscale algérienne : numérotation séquentielle, TVA, timbre fiscal, et export comptable. L'intégration avec les imprimantes thermiques pour les étiquettes et les tickets de caisse est également incluse."
    },
    {
      question: "Peut-on connecter l'application de stock à un logiciel de comptabilité ?",
      answer: "Oui, l'intégration comptable est fondamentale. Nos solutions s'intègrent avec les logiciels de comptabilité utilisés en Algérie (PC Compta, Sage, ou tout logiciel via API). Les écritures comptables liées aux mouvements de stock (achats, ventes, ajustements) sont générées automatiquement. Cela élimine la double saisie et réduit les erreurs comptables."
    },
    {
      question: "Symloop peut-il développer une application mobile de gestion de stock ?",
      answer: "Oui, Symloop développe des applications mobiles de gestion de stock en Flutter (iOS et Android) avec une seule base de code. L'application mobile permet le scan de codes-barres via la caméra, la réception de marchandises sur le terrain, les inventaires physiques avec scan, et la consultation des niveaux de stock en temps réel. Le tout synchronisé avec votre système central."
    }
  ];

  return (
    <>
      <Head>
        <title>Application Gestion de Stock Algérie 2026 | Logiciel Inventaire Entreprise | Symloop</title>
        <meta name="description" content="Application de gestion de stock en Algérie 2026. Logiciel inventaire, code-barres, multi-dépôts, alertes stock, facturation. Solution sur mesure pour entreprises algériennes. Symloop." />
        <meta name="keywords" content="application gestion stock algérie, logiciel gestion stock algérie 2026, gestion inventaire algérie, application stock entreprise algérie, logiciel gestion magasin algérie, logiciel stock algérie, gestion entrepôt algérie, application inventaire algérie, logiciel gestion commerciale stock algérie, gestion stock multi-dépôts algérie, inventory management app Algeria, stock management software Algeria, warehouse management Algeria, inventory tracking Algeria" />
        <link rel="canonical" href="https://symloop.com/blog/application-gestion-stock-algerie-2026" />

        <meta property="og:title" content="Application Gestion de Stock Algérie 2026 | Symloop" />
        <meta property="og:description" content="Application de gestion de stock pour entreprises algériennes (Algeria). Inventaire, code-barres, multi-dépôts, alertes, facturation. Solution sur mesure par Symloop." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/application-gestion-stock-algerie-2026" />
        <meta property="og:site_name" content="Symloop" />
        <meta property="og:locale" content="fr_DZ" />
        <meta property="og:locale:alternate" content="ar_DZ" />
        <meta property="og:locale:alternate" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Application Gestion de Stock Algérie 2026 | Symloop" />
        <meta name="twitter:description" content="Application de gestion de stock pour entreprises algériennes. Inventaire, code-barres, multi-dépôts, alertes, facturation." />

        {/* Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Application de Gestion de Stock en Algérie : Quelle Solution Choisir en 2026 ?",
            "description": "Guide complet sur les applications de gestion de stock en Algérie. Comparatif solutions, fonctionnalités essentielles, prix, et conseils pour choisir le meilleur logiciel inventaire.",
            "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
            "publisher": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
            "datePublished": "2026-04-05",
            "dateModified": "2026-04-05",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://symloop.com/blog/application-gestion-stock-algerie-2026" },
            "articleSection": "Gestion de Stock",
            "inLanguage": "fr-DZ",
            "keywords": "application gestion stock algérie, logiciel gestion stock algérie 2026, gestion inventaire algérie, application stock entreprise algérie, logiciel gestion magasin algérie"
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
              { "@type": "ListItem", "position": 3, "name": "Application Gestion Stock Algérie 2026", "item": "https://symloop.com/blog/application-gestion-stock-algerie-2026" }
            ]
          })}
        </script>

        {/* Speakable */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Application Gestion de Stock Algérie 2026",
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "[data-speakable]", "#faq"] },
            "url": "https://symloop.com/blog/application-gestion-stock-algerie-2026"
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
            "knowsAbout": ["Gestion de stock", "Application inventaire", "Logiciel gestion magasin", "ERP sur mesure", "Développement logiciel", "Application mobile", "Code-barres", "Multi-dépôts"],
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
          <FloatingOrb color="radial-gradient(circle, #22c55e, transparent 70%)" size="600px" x="-5%" y="-15%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #3b82f6, transparent 70%)" size="500px" x="60%" y="10%" delay={3} />
          <FloatingOrb color="radial-gradient(circle, #f59e0b, transparent 70%)" size="450px" x="30%" y="55%" delay={6} />
          <FloatingOrb color="radial-gradient(circle, #6366f1, transparent 70%)" size="350px" x="80%" y="60%" delay={9} />
          <FloatingOrb color="radial-gradient(circle, #10b981, transparent 70%)" size="300px" x="10%" y="70%" delay={12} />

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
                  <li><Link href="/" className="hover:text-green-400 transition-colors">Accueil</Link></li>
                  <li className="text-gray-700">/</li>
                  <li><Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link></li>
                  <li className="text-gray-700">/</li>
                  <li className="text-green-400">Application Gestion Stock Algérie 2026</li>
                </ol>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="bg-green-500/20 text-green-300 backdrop-blur-md border border-green-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase flex items-center gap-2">
                  <Package className="w-3.5 h-3.5" />
                  Gestion de Stock
                </span>
                <span className="bg-blue-500/20 text-blue-300 backdrop-blur-md border border-blue-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
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
                Application de Gestion de Stock
                <br />
                en{" "}
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Algérie
                </span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-400 font-bold">
                  Quelle Solution Choisir en 2026 ?
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg sm:text-xl text-gray-400 max-w-3xl leading-relaxed mb-10"
              >
                Guide complet pour choisir la meilleure application de gestion de stock
                en Algérie. Fonctionnalités, comparatifs, prix et solutions adaptées
                aux entreprises algériennes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="flex items-center gap-8 text-xs text-gray-500 tracking-wide uppercase"
              >
                <div className="flex items-center gap-2"><User className="w-3.5 h-3.5" /> Symloop Team</div>
                <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> 5 Avril 2026</div>
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
                <h2 className="text-sm font-bold text-green-400 uppercase tracking-widest mb-3">En bref</h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  <strong className="text-white">Symloop</strong> développe des applications de gestion de stock sur mesure pour les entreprises algériennes.
                  Suivi des entrées/sorties en temps réel, lecture code-barres, gestion multi-dépôts, alertes de stock minimum,
                  rapports et tableaux de bord, facturation intégrée. Solution cloud ou locale, avec application mobile.
                  Alternative aux logiciels génériques type Sage ou Odoo : un outil conçu pour votre métier, sans licences récurrentes.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">Contact :</strong> +213 549 575 512 — consultation gratuite pour analyser vos besoins
                  en gestion de stock et concevoir votre solution sur mesure. Basés à Sétif, nous servons toute l&apos;Algérie.
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
                    { num: "01", title: "Défis de la gestion de stock en Algérie", id: "defis" },
                    { num: "02", title: "Chiffres clés et statistiques", id: "stats" },
                    { num: "03", title: "Fonctionnalités essentielles", id: "fonctionnalites" },
                    { num: "04", title: "Solutions existantes vs sur mesure", id: "comparatif" },
                    { num: "05", title: "Mobile, desktop ou cloud ?", id: "plateformes" },
                    { num: "06", title: "Intégration avec d'autres systèmes", id: "integrations" },
                    { num: "07", title: "Combien ça coûte ?", id: "prix" },
                    { num: "08", title: "Cas d'usage par secteur", id: "secteurs" },
                    { num: "09", title: "Pourquoi choisir Symloop", id: "symloop" },
                    { num: "10", title: "Questions fréquentes", id: "faq" },
                  ].map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group">
                      <span className="text-[10px] font-bold text-gray-600 tracking-widest group-hover:text-green-400 transition-colors w-6">{item.num}</span>
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
                  En 2026, la <strong className="text-white">gestion de stock</strong> reste le talon d&apos;Achille de milliers d&apos;entreprises algériennes.
                  Fichiers Excel éparpillés, comptages manuels approximatifs, pertes de marchandises non détectées,
                  ruptures de stock imprévues qui font perdre des clients. Le constat est alarmant : la majorité des PME
                  algériennes gèrent encore leur inventaire avec des méthodes dépassées qui leur coûtent des millions de dinars chaque année.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed mb-6">
                  Pourtant, les solutions existent. Une <strong className="text-gray-300">application de gestion de stock</strong> moderne peut transformer
                  radicalement la façon dont votre entreprise gère ses produits, ses entrepôts et ses approvisionnements.
                  Mais face à la multitude d&apos;options disponibles — logiciels génériques, solutions cloud, applications mobiles,
                  développement sur mesure — comment faire le bon choix ?
                </p>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Ce guide complet vous aide à naviguer dans l&apos;écosystème des <strong className="text-gray-300">logiciels de gestion de stock en Algérie</strong>.
                  Fonctionnalités indispensables, comparatifs de solutions, grille tarifaire, et cas d&apos;usage par secteur d&apos;activité.
                  Tout ce qu&apos;il faut pour prendre une décision éclairée.
                </p>
              </div>
            </Reveal>

            {/* ── Section 1: Défis de la gestion de stock ── */}
            <section id="defis" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-red-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Les Défis de la Gestion de Stock pour les Entreprises Algériennes
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <p className="text-gray-400 leading-relaxed mb-8">
                  La gestion de stock en Algérie présente des défis spécifiques liés au contexte économique local.
                  Les entreprises font face à des problématiques que les logiciels internationaux ne prennent pas toujours en compte :
                  fluctuations des prix d&apos;importation, réglementations douanières changeantes, gestion en dinar algérien,
                  et infrastructure internet parfois limitée dans certaines wilayas.
                </p>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  {
                    icon: AlertTriangle,
                    title: "Gestion manuelle avec Excel",
                    desc: "Plus de 65% des PME algériennes utilisent encore Excel pour gérer leur stock. Fichiers corrompus, formules cassées, versions multiples contradictoires. Les erreurs de saisie entraînent des écarts d'inventaire de 15 à 30% en moyenne.",
                    color: "text-red-400",
                    bg: "bg-red-500/10",
                    border: "border-red-500/20"
                  },
                  {
                    icon: TrendingUp,
                    title: "Pertes financières invisibles",
                    desc: "Les pertes liées à une mauvaise gestion de stock représentent en moyenne 8 à 12% du chiffre d'affaires des entreprises algériennes. Produits périmés, surstockage, vol non détecté, et ruptures qui font fuir les clients.",
                    color: "text-orange-400",
                    bg: "bg-orange-500/10",
                    border: "border-orange-500/20"
                  },
                  {
                    icon: RefreshCw,
                    title: "Ruptures et surstockage",
                    desc: "Sans visibilité en temps réel, les commandes fournisseurs sont soit trop tardives (rupture de stock) soit trop anticipées (surstockage et trésorerie immobilisée). Le coût d'une rupture est estimé à 3 fois la valeur de la vente perdue.",
                    color: "text-yellow-400",
                    bg: "bg-yellow-500/10",
                    border: "border-yellow-500/20"
                  },
                  {
                    icon: Clock,
                    title: "Temps perdu en inventaires",
                    desc: "Les inventaires physiques manuels mobilisent des équipes entières pendant des jours. Avec un outil adapté, le même inventaire se fait en quelques heures grâce au scan code-barres et à la mise à jour automatique des écarts.",
                    color: "text-blue-400",
                    bg: "bg-blue-500/10",
                    border: "border-blue-500/20"
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

              <Reveal delay={0.2}>
                <div className="backdrop-blur-xl bg-red-500/[0.04] border border-red-500/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-red-400" />
                    Le coût de l&apos;inaction
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Une entreprise algérienne avec un stock de <strong className="text-gray-300">50 millions de DA</strong> perd en moyenne
                    <strong className="text-gray-300"> 4 à 6 millions de DA par an</strong> à cause d&apos;une gestion de stock défaillante.
                    C&apos;est plus que le coût d&apos;une application de gestion de stock sur mesure qui, elle, s&apos;amortit en 3 à 6 mois.
                  </p>
                </div>
              </Reveal>
            </section>

            {/* ── Section 2: Stats ── */}
            <section id="stats" className="mb-24 scroll-mt-24" ref={statsRef}>
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Gestion de Stock en Algérie : Les Chiffres Clés
                  </h2>
                </div>
              </Reveal>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {[
                  { value: "65%", label: "des PME utilisent encore Excel pour gérer leur stock", color: "from-red-500 to-orange-500" },
                  { value: "8-12%", label: "du CA perdu à cause d'une mauvaise gestion d'inventaire", color: "from-orange-500 to-yellow-500" },
                  { value: "30%", label: "d'écarts d'inventaire moyens constatés sans outil dédié", color: "from-yellow-500 to-green-500" },
                  { value: "3-6 mois", label: "de retour sur investissement avec une application adaptée", color: "from-green-500 to-blue-500" },
                ].map((stat, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <GlassCard className="p-6 text-center">
                      <div className={`text-3xl sm:text-4xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>
                        {stat.value}
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed">{stat.label}</p>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Ces chiffres révèlent une réalité préoccupante pour le tissu économique algérien. Pourtant, la transformation
                  digitale de la gestion de stock est l&apos;un des investissements les plus rentables qu&apos;une entreprise puisse faire.
                  Les entreprises qui ont adopté un <strong className="text-white">logiciel de gestion de stock</strong> rapportent une réduction de 40 à 60%
                  de leurs pertes d&apos;inventaire dès la première année.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { value: "-45%", label: "Réduction des ruptures de stock", icon: Package },
                    { value: "+35%", label: "Amélioration de la rotation des stocks", icon: RefreshCw },
                    { value: "-70%", label: "Temps d'inventaire physique réduit", icon: Clock },
                  ].map((item, i) => (
                    <GlassCard key={i} className="p-5 text-center" delay={i * 0.1}>
                      <item.icon className="w-6 h-6 text-green-400 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-green-400 mb-1">{item.value}</div>
                      <p className="text-gray-500 text-xs">{item.label}</p>
                    </GlassCard>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* ── Section 3: Fonctionnalités essentielles ── */}
            <section id="fonctionnalites" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-green-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Fonctionnalités Essentielles d&apos;une Application de Gestion de Stock
                  </h2>
                </div>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Une application de gestion de stock performante pour le marché algérien doit intégrer
                  un ensemble de fonctionnalités adaptées aux réalités locales. Voici les modules indispensables
                  que toute solution sérieuse doit proposer.
                </p>
              </Reveal>

              <div className="grid lg:grid-cols-2 gap-5">
                {[
                  {
                    icon: Package,
                    title: "Entrées et Sorties de Stock",
                    desc: "Enregistrement de chaque mouvement de stock en temps réel avec traçabilité complète.",
                    items: ["Bons de réception fournisseurs", "Bons de sortie et livraison", "Transferts inter-dépôts", "Retours clients et fournisseurs", "Historique complet des mouvements", "Ajustements et régularisations"],
                    color: "text-green-400",
                    bg: "bg-green-500/10",
                    border: "border-green-500/20",
                    dot: "bg-green-400"
                  },
                  {
                    icon: ScanBarcode,
                    title: "Lecture Code-Barres et QR Code",
                    desc: "Identification instantanée des produits par scan pour éliminer les erreurs de saisie.",
                    items: ["Scan EAN-13, Code 128, QR Code", "Scanner USB et caméra smartphone", "Génération d'étiquettes personnalisées", "Impression thermique code-barres", "Inventaire par scan rapide", "Association produit automatique"],
                    color: "text-blue-400",
                    bg: "bg-blue-500/10",
                    border: "border-blue-500/20",
                    dot: "bg-blue-400"
                  },
                  {
                    icon: Bell,
                    title: "Alertes et Notifications Intelligentes",
                    desc: "Ne manquez plus jamais une rupture de stock ou une date de péremption.",
                    items: ["Alerte stock minimum automatique", "Notification de péremption avancée", "Alerte surstockage détecté", "Rappel commande fournisseur", "Notification par SMS/email/push", "Seuils personnalisables par produit"],
                    color: "text-yellow-400",
                    bg: "bg-yellow-500/10",
                    border: "border-yellow-500/20",
                    dot: "bg-yellow-400"
                  },
                  {
                    icon: Warehouse,
                    title: "Gestion Multi-Dépôts",
                    desc: "Pilotez plusieurs entrepôts, magasins et points de vente depuis une seule interface.",
                    items: ["Vue consolidée tous dépôts", "Transferts inter-entrepôts", "Stock par emplacement/rayon", "Gestion des zones de stockage", "Valorisation par dépôt", "Droits d'accès par site"],
                    color: "text-purple-400",
                    bg: "bg-purple-500/10",
                    border: "border-purple-500/20",
                    dot: "bg-purple-400"
                  },
                  {
                    icon: BarChart3,
                    title: "Rapports et Tableaux de Bord",
                    desc: "Analysez vos données de stock pour prendre des décisions éclairées.",
                    items: ["État de stock en temps réel", "Analyse de rotation (ABC/XYZ)", "Valorisation du stock (CUMP, FIFO)", "Historique des prix d'achat", "Rapports de mouvement par période", "Export Excel et PDF"],
                    color: "text-cyan-400",
                    bg: "bg-cyan-500/10",
                    border: "border-cyan-500/20",
                    dot: "bg-cyan-400"
                  },
                  {
                    icon: Receipt,
                    title: "Facturation et Bon de Commande",
                    desc: "Intégration complète du cycle achat-vente avec conformité fiscale algérienne.",
                    items: ["Devis et bons de commande", "Factures conformes TVA/timbre", "Bons de livraison automatiques", "Gestion des avoirs et retours", "Numérotation séquentielle légale", "Relances paiement automatiques"],
                    color: "text-orange-400",
                    bg: "bg-orange-500/10",
                    border: "border-orange-500/20",
                    dot: "bg-orange-400"
                  },
                ].map((feature, i) => (
                  <GlassCard key={i} className={`p-8 ${feature.border}`} delay={i * 0.1}>
                    <div className={`w-12 h-12 rounded-2xl ${feature.bg} border ${feature.border} flex items-center justify-center mb-6`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{feature.desc}</p>
                    <ul className="space-y-2.5">
                      {feature.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2.5 text-gray-400 text-sm">
                          <div className={`w-1 h-1 rounded-full ${feature.dot} flex-shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                ))}
              </div>
            </section>

            {/* ── Section 4: Solutions existantes vs sur mesure ── */}
            <section id="comparatif" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-indigo-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Solutions Existantes vs Développement Sur Mesure
                  </h2>
                </div>
                <p className="text-gray-400 leading-relaxed mb-8">
                  En Algérie, trois approches principales existent pour la gestion de stock : les logiciels prêts à l&apos;emploi,
                  les solutions SaaS, et le développement sur mesure. Chacune a ses avantages et ses limites selon votre contexte.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="backdrop-blur-xl bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden mb-10">
                  <div className="grid grid-cols-4 border-b border-white/[0.06]">
                    <div className="p-5 text-xs font-bold text-gray-600 uppercase tracking-widest">Critère</div>
                    <div className="p-5 text-xs font-bold text-gray-600 uppercase tracking-widest text-center border-x border-white/[0.06]">Logiciel Standard</div>
                    <div className="p-5 text-xs font-bold text-gray-600 uppercase tracking-widest text-center border-r border-white/[0.06]">SaaS (Abonnement)</div>
                    <div className="p-5 text-xs font-bold text-green-400 uppercase tracking-widest text-center">Sur Mesure (Symloop)</div>
                  </div>
                  {[
                    { critere: "Adaptation métier", standard: "Limitée, paramétrage basique", saas: "Moyenne, modules génériques", custom: "Totale, conçu pour vous" },
                    { critere: "Coût initial", standard: "50 000 — 200 000 DA", saas: "Gratuit ou faible", custom: "350 000 — 2 500 000 DA" },
                    { critere: "Coût mensuel", standard: "0 DA (mais mises à jour payantes)", saas: "5 000 — 30 000 DA/mois", custom: "0 DA (hébergement seul)" },
                    { critere: "Propriété du code", standard: "Non, licence d'utilisation", saas: "Non, location de service", custom: "Oui, 100% votre propriété" },
                    { critere: "Mode hors-ligne", standard: "Souvent oui", saas: "Rarement", custom: "Oui, personnalisable" },
                    { critere: "Multi-dépôts", standard: "Limité ou version premium", saas: "Selon la formule", custom: "Illimité, architecture adaptée" },
                    { critere: "Intégrations", standard: "Limitées", saas: "API standards", custom: "Sur mesure avec tout système" },
                    { critere: "Support local", standard: "Revendeur si disponible", saas: "Support en ligne", custom: "Équipe locale dédiée" },
                  ].map((row, i) => (
                    <div key={i} className={`grid grid-cols-4 ${i < 7 ? 'border-b border-white/[0.04]' : ''}`}>
                      <div className="p-4 text-sm text-white font-medium">{row.critere}</div>
                      <div className="p-4 text-sm text-gray-500 text-center border-x border-white/[0.04]">{row.standard}</div>
                      <div className="p-4 text-sm text-gray-500 text-center border-r border-white/[0.04]">{row.saas}</div>
                      <div className="p-4 text-sm text-green-300 text-center font-medium">{row.custom}</div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="backdrop-blur-xl bg-green-500/[0.04] border border-green-500/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-400" />
                    Notre recommandation
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Pour les <strong className="text-gray-300">petites structures</strong> avec un budget limité, un SaaS peut convenir comme point de départ.
                    Pour les <strong className="text-gray-300">PME et entreprises en croissance</strong>, le sur mesure est l&apos;investissement le plus rentable à moyen terme :
                    pas de licences récurrentes, adaptation parfaite à vos processus, et un outil qui évolue avec vous sans limitation.
                    Sur 3 ans, le coût total du sur mesure est souvent <strong className="text-gray-300">inférieur</strong> à celui d&apos;un SaaS.
                  </p>
                </div>
              </Reveal>
            </section>

            {/* ── Section 5: Mobile vs Desktop vs Cloud ── */}
            <section id="plateformes" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Application Mobile, Desktop ou Cloud : Quel Choix pour l&apos;Algérie ?
                  </h2>
                </div>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Le choix de la plateforme dépend de votre activité, de votre infrastructure et de vos habitudes de travail.
                  En Algérie, chaque option présente des avantages spécifiques liés au contexte local.
                </p>
              </Reveal>

              <div className="grid lg:grid-cols-3 gap-5">
                {[
                  {
                    icon: Smartphone,
                    title: "Application Mobile",
                    desc: "Idéale pour les équipes terrain, les commerciaux et les inventaires physiques.",
                    pros: ["Scan code-barres via caméra", "Inventaire physique sur le terrain", "Consultation stock en déplacement", "Notifications push en temps réel"],
                    cons: ["Écran limité pour les rapports", "Saisie intensive moins confortable"],
                    ideal: "Commerciaux, livreurs, inventaires terrain",
                    color: "text-blue-400",
                    bg: "bg-blue-500/10",
                    border: "border-blue-500/20"
                  },
                  {
                    icon: Monitor,
                    title: "Application Desktop",
                    desc: "Parfaite pour les postes de travail fixes en entrepôt ou en magasin.",
                    pros: ["Fonctionne sans internet", "Performance maximale", "Grand écran pour les tableaux", "Scanner USB professionnel"],
                    cons: ["Limité au poste installé", "Mises à jour manuelles"],
                    ideal: "Magasins, entrepôts, caisses POS",
                    color: "text-purple-400",
                    bg: "bg-purple-500/10",
                    border: "border-purple-500/20"
                  },
                  {
                    icon: Cloud,
                    title: "Application Cloud (Web)",
                    desc: "Accessible partout, idéale pour la gestion multi-sites centralisée.",
                    pros: ["Accès depuis n'importe où", "Multi-utilisateurs natif", "Mises à jour automatiques", "Sauvegardes cloud sécurisées"],
                    cons: ["Nécessite internet stable", "Latence possible en 3G/4G"],
                    ideal: "Multi-dépôts, gestion centralisée, dirigeants",
                    color: "text-green-400",
                    bg: "bg-green-500/10",
                    border: "border-green-500/20"
                  },
                ].map((platform, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <GlassCard className={`p-7 h-full ${platform.border}`}>
                      <div className={`w-12 h-12 rounded-2xl ${platform.bg} border ${platform.border} flex items-center justify-center mb-6`}>
                        <platform.icon className={`w-6 h-6 ${platform.color}`} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{platform.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5">{platform.desc}</p>

                      <h4 className="text-xs font-bold text-green-400 uppercase tracking-widest mb-3">Avantages</h4>
                      <ul className="space-y-2 mb-5">
                        {platform.pros.map((pro, j) => (
                          <li key={j} className="flex items-center gap-2 text-gray-400 text-sm">
                            <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>

                      <h4 className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Limites</h4>
                      <ul className="space-y-2 mb-5">
                        {platform.cons.map((con, j) => (
                          <li key={j} className="flex items-center gap-2 text-gray-500 text-sm">
                            <AlertTriangle className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>

                      <div className="bg-white/[0.03] rounded-xl p-3">
                        <p className="text-xs text-gray-500"><strong className="text-gray-300">Idéal pour :</strong> {platform.ideal}</p>
                      </div>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.3}>
                <div className="mt-8 backdrop-blur-xl bg-blue-500/[0.04] border border-blue-500/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-400" />
                    L&apos;approche hybride Symloop
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Chez <strong className="text-gray-300">Symloop</strong>, nous recommandons une approche hybride : une application web cloud
                    comme système central, complétée par une application mobile pour les opérations terrain.
                    Le mode hors-ligne est intégré nativement pour garantir le fonctionnement même sans connexion internet.
                    La synchronisation se fait automatiquement dès que la connexion revient.
                  </p>
                </div>
              </Reveal>
            </section>

            {/* ── Section 6: Intégrations ── */}
            <section id="integrations" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-purple-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Intégration avec Vos Autres Systèmes
                  </h2>
                </div>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Une application de gestion de stock isolée perd une grande partie de sa valeur. L&apos;intégration avec
                  vos autres outils — comptabilité, facturation, point de vente, e-commerce — est ce qui transforme
                  un simple outil de suivi en un véritable système de gestion intégré.
                </p>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: FileText,
                    title: "Comptabilité",
                    desc: "Synchronisation automatique des écritures comptables liées aux mouvements de stock. Achats, ventes, ajustements d'inventaire, tout est reporté dans votre comptabilité sans double saisie. Compatible PC Compta, Sage et autres logiciels algériens.",
                    color: "text-blue-400",
                    bg: "bg-blue-500/10",
                    border: "border-blue-500/20"
                  },
                  {
                    icon: Receipt,
                    title: "Facturation",
                    desc: "Chaque vente décrémente automatiquement le stock. Chaque achat l'incrémente. Les devis, bons de commande et factures sont liés aux mouvements de stock en temps réel. Conformité fiscale algérienne (TVA, timbre) intégrée.",
                    color: "text-green-400",
                    bg: "bg-green-500/10",
                    border: "border-green-500/20"
                  },
                  {
                    icon: ShoppingCart,
                    title: "Point de Vente (POS)",
                    desc: "Intégration avec votre caisse enregistreuse ou terminal de point de vente. Chaque vente met à jour le stock instantanément. Gestion des tickets, des retours, et des échanges avec impact direct sur l'inventaire.",
                    color: "text-orange-400",
                    bg: "bg-orange-500/10",
                    border: "border-orange-500/20"
                  },
                  {
                    icon: Globe,
                    title: "E-commerce",
                    desc: "Synchronisation bidirectionnelle avec votre boutique en ligne (WooCommerce, Shopify, PrestaShop). Le stock affiché sur votre site reflète le stock réel en temps réel. Plus de survente ni de commandes impossibles à honorer.",
                    color: "text-purple-400",
                    bg: "bg-purple-500/10",
                    border: "border-purple-500/20"
                  },
                  {
                    icon: Truck,
                    title: "Fournisseurs et Achats",
                    desc: "Gestion automatisée des commandes fournisseurs. Quand le stock atteint le seuil minimum, le bon de commande se génère automatiquement. Suivi des délais de livraison, comparatif prix fournisseurs, historique des achats.",
                    color: "text-cyan-400",
                    bg: "bg-cyan-500/10",
                    border: "border-cyan-500/20"
                  },
                  {
                    icon: Database,
                    title: "ERP et CRM",
                    desc: "Connexion avec votre ERP existant ou votre CRM pour une vue à 360° de votre activité. Les données de stock alimentent les rapports de vente, les prévisions commerciales et les tableaux de bord de direction.",
                    color: "text-indigo-400",
                    bg: "bg-indigo-500/10",
                    border: "border-indigo-500/20"
                  },
                ].map((integration, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <GlassCard className={`p-7 h-full ${integration.border}`}>
                      <div className={`w-11 h-11 rounded-xl ${integration.bg} border ${integration.border} flex items-center justify-center mb-5`}>
                        <integration.icon className={`w-5 h-5 ${integration.color}`} />
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2">{integration.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{integration.desc}</p>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* ── Section 7: Prix ── */}
            <section id="prix" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-yellow-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Combien Coûte une Application de Gestion de Stock en Algérie ?
                  </h2>
                </div>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Les prix varient considérablement selon le type de solution et le niveau de personnalisation.
                  Voici une grille tarifaire indicative pour le marché algérien en 2026.
                </p>
              </Reveal>

              <div className="grid lg:grid-cols-3 gap-5 mb-10">
                {[
                  {
                    name: "Essentiel",
                    price: "350 000 DA",
                    period: "one-shot",
                    target: "Petites entreprises, 1 dépôt",
                    features: [
                      "Entrées / sorties de stock",
                      "Fiche produit avec code-barres",
                      "Alertes stock minimum",
                      "Rapports de stock basiques",
                      "Facturation simple",
                      "1 utilisateur inclus",
                      "Formation + support 3 mois"
                    ],
                    color: "border-gray-500/20",
                    badge: ""
                  },
                  {
                    name: "Business",
                    price: "800 000 DA",
                    period: "one-shot",
                    target: "PME, multi-dépôts",
                    features: [
                      "Tout Essentiel +",
                      "Multi-dépôts et transferts",
                      "Application mobile (iOS + Android)",
                      "Intégration comptabilité",
                      "Rapports avancés et exports",
                      "Mode hors-ligne",
                      "5 utilisateurs inclus",
                      "Support 6 mois prioritaire"
                    ],
                    color: "border-green-500/20",
                    badge: "Populaire"
                  },
                  {
                    name: "Enterprise",
                    price: "Sur devis",
                    period: "projet complet",
                    target: "Grandes entreprises, besoins complexes",
                    features: [
                      "Tout Business +",
                      "Intégration ERP complète",
                      "API et connecteurs sur mesure",
                      "Gestion de production (GPAO)",
                      "E-commerce intégré",
                      "Utilisateurs illimités",
                      "SLA et support dédié",
                      "Formation équipe complète"
                    ],
                    color: "border-blue-500/20",
                    badge: ""
                  },
                ].map((plan, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <GlassCard className={`p-8 h-full ${plan.color} relative`}>
                      {plan.badge && (
                        <div className="absolute top-4 right-4 bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                          {plan.badge}
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-3xl font-extrabold text-white">{plan.price}</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{plan.period}</p>
                      <p className="text-sm text-gray-500 mb-6">{plan.target}</p>
                      <ul className="space-y-3">
                        {plan.features.map((feature, j) => (
                          <li key={j} className="flex items-center gap-2.5 text-gray-400 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <div className="backdrop-blur-xl bg-yellow-500/[0.04] border border-yellow-500/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-yellow-400" />
                    Pas de frais cachés
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Contrairement aux solutions SaaS qui facturent par mois et par utilisateur, les tarifs Symloop sont en <strong className="text-gray-300">one-shot</strong>.
                    Vous payez une fois, le code vous appartient. Les seuls frais récurrents sont l&apos;hébergement cloud
                    (environ 3 000 à 8 000 DA/mois selon la charge) et la maintenance optionnelle.
                    Sur 3 ans, vous économisez en moyenne <strong className="text-gray-300">40 à 60%</strong> par rapport à une solution SaaS équivalente.
                  </p>
                </div>
              </Reveal>
            </section>

            {/* ── Section 8: Cas d'usage par secteur ── */}
            <section id="secteurs" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-orange-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Cas d&apos;Usage par Secteur d&apos;Activité
                  </h2>
                </div>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Chaque secteur a des besoins spécifiques en matière de gestion de stock. Voici comment une application
                  sur mesure s&apos;adapte aux réalités de chaque métier en Algérie.
                </p>
              </Reveal>

              <div className="space-y-4">
                {[
                  {
                    icon: ShoppingCart,
                    title: "Commerce de Gros et Détail",
                    desc: "Le commerce en Algérie nécessite une gestion fine des prix d'achat fluctuants, des remises par client, et des promotions saisonnières. L'application gère les catalogues produits volumineux (5 000 à 50 000 références), les grilles tarifaires multiples, et les commandes fournisseurs avec suivi des délais d'importation.",
                    features: ["Multi-tarifs (gros, demi-gros, détail)", "Gestion des lots et DLC", "Fidélité client et remises", "Catalogue + photos produits"],
                    color: "text-blue-400",
                    border: "border-blue-500/20"
                  },
                  {
                    icon: Pill,
                    title: "Pharmacies et Parapharmacie",
                    desc: "La gestion de stock pharmaceutique exige une traçabilité absolue : dates de péremption, numéros de lot, substances réglementées. L'application intègre la nomenclature nationale des médicaments, les alertes de péremption avancées (6, 3, 1 mois), et la gestion des stupéfiants avec registre conforme.",
                    features: ["Alertes péremption automatiques", "Registre substances réglementées", "Tiers payant CNAS/CASNOS", "Substitution générique"],
                    color: "text-green-400",
                    border: "border-green-500/20"
                  },
                  {
                    icon: UtensilsCrossed,
                    title: "Restauration et Alimentation",
                    desc: "La restauration et l'agroalimentaire doivent gérer la chaîne du froid, les dates limites de consommation, et les fiches techniques de production. L'application calcule les besoins en matières premières à partir des recettes, suit les coûts de revient par plat, et gère les inventaires de cuisine.",
                    features: ["Fiches techniques et recettes", "Coût de revient par plat", "Gestion chaîne du froid", "Inventaire cuisine quotidien"],
                    color: "text-orange-400",
                    border: "border-orange-500/20"
                  },
                  {
                    icon: Factory,
                    title: "Industrie et Production",
                    desc: "L'industrie algérienne a besoin de gérer les matières premières, les produits semi-finis, et les produits finis dans un flux de production continu. L'application intègre les nomenclatures (BOM), les ordres de fabrication, et le suivi des consommations par ordre de production.",
                    features: ["Nomenclatures de production (BOM)", "Ordres de fabrication", "Stock MP, semi-finis, finis", "Traçabilité lot complet"],
                    color: "text-purple-400",
                    border: "border-purple-500/20"
                  },
                  {
                    icon: Tractor,
                    title: "Agriculture et Élevage",
                    desc: "Le secteur agricole algérien nécessite la gestion des intrants (semences, engrais, phytosanitaires), du matériel agricole, et des récoltes. L'application suit les stocks par parcelle, les traitements appliqués, et calcule les coûts de production par culture ou par tête de bétail.",
                    features: ["Stock par parcelle/exploitation", "Suivi intrants et traitements", "Coût de production par culture", "Gestion matériel agricole"],
                    color: "text-emerald-400",
                    border: "border-emerald-500/20"
                  },
                ].map((sector, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <GlassCard className={`p-7 ${sector.border}`}>
                      <div className="flex items-start gap-5">
                        <div className={`w-12 h-12 rounded-2xl bg-white/[0.05] border ${sector.border} flex items-center justify-center flex-shrink-0`}>
                          <sector.icon className={`w-6 h-6 ${sector.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-2">{sector.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed mb-4">{sector.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {sector.features.map((feat, j) => (
                              <span key={j} className="bg-white/[0.04] text-gray-400 px-3 py-1.5 rounded-lg text-xs">
                                {feat}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* ── Section 9: Pourquoi Symloop ── */}
            <section id="symloop" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-green-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Pourquoi Choisir Symloop pour Votre Gestion de Stock
                  </h2>
                </div>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Symloop n&apos;est pas un revendeur de logiciels. Nous sommes une équipe de développement basée en Algérie
                  qui conçoit des applications de gestion de stock sur mesure, adaptées à chaque client et à chaque secteur.
                </p>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  {
                    icon: Settings,
                    title: "Développement 100% sur mesure",
                    desc: "Chaque application est conçue de zéro pour votre entreprise. Pas de personnalisation d'un logiciel existant — un outil entièrement nouveau, construit autour de vos processus métier et de votre vocabulaire.",
                    color: "text-green-400",
                    bg: "bg-green-500/10",
                    border: "border-green-500/20"
                  },
                  {
                    icon: Layers,
                    title: "Expertise ERP et inventaire",
                    desc: "Nous avons développé des systèmes de gestion de stock pour des entreprises de toutes tailles en Algérie. Commerce, industrie, pharmacie, restauration — chaque secteur a ses spécificités que nous maîtrisons.",
                    color: "text-blue-400",
                    bg: "bg-blue-500/10",
                    border: "border-blue-500/20"
                  },
                  {
                    icon: Cloud,
                    title: "Architecture cloud-native",
                    desc: "Nos applications sont conçues pour le cloud dès le départ. React et Next.js pour l'interface, Node.js pour le backend, PostgreSQL pour les données, Flutter pour le mobile. Performance, sécurité et scalabilité garanties.",
                    color: "text-cyan-400",
                    bg: "bg-cyan-500/10",
                    border: "border-cyan-500/20"
                  },
                  {
                    icon: Shield,
                    title: "Code propriétaire et support local",
                    desc: "Le code source vous appartient à 100%. Pas de dépendance envers un éditeur. Et en cas de besoin, notre équipe basée à Alger est disponible pour le support, la formation et les évolutions futures.",
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

              <Reveal>
                <div className="backdrop-blur-xl bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8">
                  <h3 className="text-white font-bold text-lg mb-4">Notre processus de développement</h3>
                  <div className="grid sm:grid-cols-5 gap-4">
                    {[
                      { step: "01", title: "Audit", desc: "Analyse de vos processus de stock actuels" },
                      { step: "02", title: "Conception", desc: "Architecture et maquettes UI/UX" },
                      { step: "03", title: "Développement", desc: "Codage par sprints avec démos régulières" },
                      { step: "04", title: "Migration", desc: "Import de vos données existantes" },
                      { step: "05", title: "Formation", desc: "Formation équipe + support continu" },
                    ].map((phase, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-extrabold text-green-400 mb-2">{phase.step}</div>
                        <h4 className="text-white font-bold text-sm mb-1">{phase.title}</h4>
                        <p className="text-gray-600 text-xs">{phase.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ── Section 10: FAQ ── */}
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
                    { href: "/blog/logiciel-erp-algerie-2024", label: "Logiciel ERP Algérie 2024 : Guide Complet" },
                    { href: "/blog/logiciel-comptabilite-algerie-2024", label: "Logiciel Comptabilité Algérie 2024" },
                    { href: "/blog/erp-sur-mesure-saas-startup-pme-algerie-2026", label: "ERP Sur Mesure & SaaS pour PME Algérie 2026" },
                    { href: "/blog/logiciel-pharmacie-gestion-stock-algerie-2026", label: "Logiciel Pharmacie Gestion Stock Algérie" },
                  ].map((link, i) => (
                    <Link key={i} href={link.href} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-green-500/[0.06] hover:border-green-500/20 transition-all text-sm text-gray-500 hover:text-green-400">
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
                  "application gestion stock algérie",
                  "logiciel gestion stock algérie 2026",
                  "gestion inventaire algérie",
                  "application stock entreprise algérie",
                  "logiciel gestion magasin algérie",
                  "gestion multi-dépôts algérie",
                  "logiciel code-barres stock algérie",
                  "application mobile stock algérie",
                  "ERP gestion stock algérie",
                  "logiciel inventaire sur mesure algérie"
                ]).map((tag, i) => (
                  <span key={i} className="bg-white/[0.03] text-gray-600 px-3 py-1.5 rounded-lg text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </article>

        <p className="text-sm text-gray-500 mt-8">
          Symloop develops custom inventory management applications in Algeria for businesses of all sizes. Our stock management software for Algeria includes barcode scanning, multi-warehouse tracking, and real-time alerts. Whether you run a retail chain, a pharmacy, or a manufacturing plant in Algeria, we build tailored inventory solutions. Symloop is your trusted partner for stock management software development in Algeria.
        </p>

        {/* ═══════════════════════════════════════════
            CTA — Gradient with Orbs
        ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-24">
          <FloatingOrb color="radial-gradient(circle, #22c55e, transparent 70%)" size="400px" x="10%" y="-20%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #3b82f6, transparent 70%)" size="350px" x="70%" y="20%" delay={4} />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 tracking-tight">
                Prêt à Digitaliser Votre Gestion de Stock ?
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Consultation gratuite avec nos experts. Décrivez-nous votre activité et vos besoins en gestion de stock,
                et nous vous proposons une solution technique sur mesure. Pas d&apos;engagement, pas de frais cachés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/213549575512?text=Bonjour, je souhaite discuter d'un projet d'application de gestion de stock"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-white text-gray-950 px-8 py-4 rounded-2xl font-semibold hover:bg-green-50 transition-colors"
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
                    <GlassCard className="p-6 h-full hover:border-green-500/20 transition-colors">
                      <span className="text-[10px] font-bold text-green-400 tracking-widest uppercase mb-3 block">{post.category}</span>
                      <h3 className="text-white font-semibold text-sm group-hover:text-green-400 transition-colors mb-2">{post.title}</h3>
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
