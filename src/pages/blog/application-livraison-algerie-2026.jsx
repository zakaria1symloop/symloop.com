"use client";
import { useRef, useState, useEffect } from 'react';
import { Truck, MapPin, Smartphone, CheckCircle, MessageCircle, Users, DollarSign, Zap, ArrowLeft, ArrowRight, ChevronDown, Shield, Globe, CreditCard, Bell, BarChart3, Package, Clock, Star, Layers, Server, Code, Navigation, Route, Building, ShoppingCart, Phone, Cpu, Target, Award, TrendingUp, Settings, Wallet, Headphones } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion, useInView } from 'framer-motion';
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

/* ── Floating orb component ── */
function FloatingOrb({ color, size, x, y, delay = 0 }) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl opacity-30 pointer-events-none"
      style={{ background: color, width: size, height: size, left: x, top: y }}
      animate={{ x: [0, 30, -20, 40, -10, 0], y: [0, -40, 20, -30, 50, 0], scale: [1, 1.15, 0.9, 1.1, 0.95, 1] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay }}
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

export default function ApplicationLivraisonAlgerie() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });
  const [openFaq, setOpenFaq] = useState(null);

  const blog = getBlogBySlug('application-livraison-algerie-2026');
  const relatedBlogs = getRelatedBlogs('application-livraison-algerie-2026', 3);

  const apps = useCounter(50, 2000, statsInView);
  const clients = useCounter(200, 2500, statsInView);
  const satisfaction = useCounter(98, 2000, statsInView);

  const faqs = [
    {
      question: "Combien coute le developpement d'une application de livraison en Algerie ?",
      answer: "Le cout varie selon les fonctionnalites. Chez Symloop, une application de livraison basique (client + livreur) demarre a 150 000 DA. Une solution complete avec panel admin, tracking GPS temps reel, paiement CIB/Edahabia et notifications push est a partir de 350 000 DA. Les plateformes marketplace multi-commercants type Glovo sont sur devis. Contactez-nous au +213 549 575 512 pour un devis gratuit et personnalise."
    },
    {
      question: "Quel est le delai de developpement d'une app de livraison ?",
      answer: "Symloop livre un MVP fonctionnel en 6 a 8 semaines. Une application complete avec les 3 panels (client, livreur, admin) et toutes les integrations (GPS, paiement, notifications) prend 3 a 4 mois. Une marketplace multi-commercants necessite 4 a 6 mois. Nous utilisons Flutter pour accelerer le developpement cross-platform iOS et Android simultanement."
    },
    {
      question: "L'application fonctionne-t-elle avec le paiement CIB et Edahabia ?",
      answer: "Oui, Symloop integre tous les moyens de paiement locaux algeriens : CIB (carte interbancaire), Edahabia (Algerie Poste), ainsi que le paiement a la livraison (COD) qui represente encore 70% des transactions en Algerie. Nous integrons egalement les solutions de paiement mobile emergentes. Appelez le +213 549 575 512 pour une demonstration."
    },
    {
      question: "Peut-on creer une application comme Yassir ou Glovo en Algerie ?",
      answer: "Absolument. Symloop a l'expertise pour developper des plateformes de livraison multi-commercants similaires a Yassir, Glovo ou Uber Eats. Notre architecture technique supporte : gestion multi-restaurants/commercants, systeme de commission automatique, tracking GPS en temps reel, algorithme d'affectation intelligente des livreurs, et tableau de bord analytique complet. Contactez-nous au +213 549 575 512."
    },
    {
      question: "Comment fonctionne le suivi GPS des livreurs en temps reel ?",
      answer: "Notre systeme utilise Google Maps API et des WebSockets pour un tracking en temps reel. Le livreur partage sa position automatiquement via l'application. Le client suit sa commande en direct sur une carte, recoit des notifications a chaque etape (prise en charge, en route, arrive). Le panel admin permet de visualiser tous les livreurs simultanement. La precision est de 5 metres en zone urbaine."
    },
    {
      question: "L'application fonctionne-t-elle hors connexion en zones rurales ?",
      answer: "Symloop integre un mode offline intelligent. Les livreurs peuvent consulter leurs missions, scanner les colis et enregistrer les preuves de livraison meme sans connexion internet. Les donnees se synchronisent automatiquement des que le reseau est disponible. Crucial pour les livraisons en zones rurales algeriennes ou la 4G peut etre instable."
    },
    {
      question: "Quelles technologies utilisez-vous pour developper l'application ?",
      answer: "Nous utilisons Flutter pour les applications mobiles (iOS + Android avec un seul code), Node.js avec Express pour le backend API, Firebase pour les notifications push et le temps reel, PostgreSQL pour la base de donnees, Redis pour le cache et les sessions, Google Maps API pour la cartographie et le geocoding, et Socket.io pour le tracking GPS en temps reel."
    },
    {
      question: "Proposez-vous la maintenance et le support apres livraison ?",
      answer: "Oui, Symloop propose des contrats de maintenance mensuelle incluant : correction de bugs, mises a jour de securite, adaptation aux nouvelles versions iOS/Android, monitoring des performances, et support technique prioritaire. Nous offrons 3 a 6 mois de support gratuit selon la formule choisie. Contactez-nous au +213 549 575 512."
    }
  ];

  /* ── Client features panel ── */
  const clientFeatures = [
    { icon: ShoppingCart, title: "Catalogue & commande", desc: "Navigation intuitive par categorie, recherche, ajout au panier et checkout rapide" },
    { icon: MapPin, title: "Adresse & geolocalisation", desc: "Detection automatique de l'adresse, gestion de multiples adresses de livraison" },
    { icon: Navigation, title: "Suivi en temps reel", desc: "Carte interactive avec position du livreur, ETA et notifications push" },
    { icon: CreditCard, title: "Paiement flexible", desc: "CIB, Edahabia, paiement a la livraison, portefeuille integre" },
    { icon: Star, title: "Avis & notation", desc: "Systeme d'evaluation livreur et commercant, historique des commandes" },
    { icon: Bell, title: "Notifications", desc: "Alertes push pour promotions, suivi commande et offres personnalisees" }
  ];

  /* ── Driver features panel ── */
  const driverFeatures = [
    { icon: Route, title: "Missions optimisees", desc: "Affectation intelligente des commandes selon proximite et disponibilite" },
    { icon: Navigation, title: "Navigation GPS", desc: "Itineraire optimise vers point de collecte puis de livraison" },
    { icon: Phone, title: "Communication", desc: "Appel et messagerie integres avec le client sans reveler les numeros" },
    { icon: Wallet, title: "Suivi des gains", desc: "Tableau de bord revenus, commissions, pourboires et historique" },
    { icon: Shield, title: "Preuve de livraison", desc: "Photo, signature electronique et geolocalisation comme preuve" },
    { icon: Clock, title: "Disponibilite flexible", desc: "Le livreur choisit ses horaires et sa zone de travail" }
  ];

  /* ── Admin features panel ── */
  const adminFeatures = [
    { icon: BarChart3, title: "Dashboard analytique", desc: "KPIs en temps reel : commandes, CA, taux livraison, delais moyens" },
    { icon: Users, title: "Gestion des utilisateurs", desc: "Clients, livreurs, commercants : validation, suspension, statistiques" },
    { icon: Settings, title: "Configuration", desc: "Zones de livraison, tarification, commissions, promotions" },
    { icon: Target, title: "Dispatch intelligent", desc: "Algorithme d'affectation automatique ou manuelle des commandes" },
    { icon: DollarSign, title: "Comptabilite", desc: "Facturation, commissions, paiements livreurs, rapports financiers" },
    { icon: Headphones, title: "Support client", desc: "Gestion des reclamations, remboursements, litiges" }
  ];

  /* ── Tech stack ── */
  const techStack = [
    { category: "Mobile (iOS + Android)", techs: ["Flutter", "Dart", "Google Maps SDK", "Firebase Cloud Messaging"], color: "cyan" },
    { category: "Backend & API", techs: ["Node.js", "Express.js", "Socket.io", "REST API", "GraphQL"], color: "purple" },
    { category: "Base de donnees", techs: ["PostgreSQL", "Redis", "Firebase Realtime DB"], color: "green" },
    { category: "Infrastructure", techs: ["AWS / Google Cloud", "Docker", "Nginx", "CI/CD"], color: "amber" },
    { category: "Paiement & Services", techs: ["CIB Gateway", "Edahabia API", "Google Maps API", "OneSignal"], color: "rose" },
    { category: "Monitoring", techs: ["Sentry", "Grafana", "Google Analytics", "Firebase Crashlytics"], color: "blue" }
  ];

  /* ── Pricing tiers ── */
  const pricingTiers = [
    {
      name: "Essentiel",
      price: "150 000",
      unit: "DA",
      description: "Application basique client + livreur",
      features: [
        "App client (catalogue, commande, suivi)",
        "App livreur (missions, navigation)",
        "Panel admin basique",
        "Paiement a la livraison",
        "Notifications push",
        "Support 3 mois"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "350 000",
      unit: "DA",
      description: "Solution complete avec tracking GPS",
      features: [
        "Tout Essentiel +",
        "Tracking GPS temps reel",
        "Paiement CIB / Edahabia",
        "Algorithme d'affectation intelligent",
        "Dashboard analytique avance",
        "Programme fidelite client",
        "Mode offline livreur",
        "Support 6 mois"
      ],
      popular: true
    },
    {
      name: "Marketplace",
      price: "Sur devis",
      unit: "",
      description: "Plateforme multi-commercants type Glovo",
      features: [
        "Tout Business +",
        "Multi-commercants / restaurants",
        "Commission automatique",
        "Dashboard par commercant",
        "API tierces (Yalidine, ZR Express)",
        "Support prioritaire 12 mois"
      ],
      popular: false
    }
  ];

  /* ── Business models ── */
  const businessModels = [
    { icon: DollarSign, title: "Commission par commande", desc: "Prelevez 10 a 25% sur chaque transaction. Modele adopte par Yassir, Glovo et Uber Eats. Ideal pour les marketplaces multi-commercants.", color: "cyan" },
    { icon: CreditCard, title: "Abonnement commercant", desc: "Forfait mensuel fixe pour les commercants (5 000 a 30 000 DA/mois). Revenus previsibles et relation long terme.", color: "purple" },
    { icon: TrendingUp, title: "Frais de livraison", desc: "Facturation des frais de livraison au client (100 a 500 DA selon la distance). Peut etre subventionne pour l'acquisition.", color: "green" },
    { icon: Award, title: "Publicite & visibilite", desc: "Les commercants payent pour apparaitre en haut des resultats. Mise en avant, banniere, push sponsorise.", color: "amber" }
  ];

  /* ── Algerian services integration ── */
  const algerianServices = [
    { name: "CIB (Carte Interbancaire)", desc: "Paiement par carte bancaire algerienne. Integration via la passerelle SATIM pour des transactions securisees.", icon: CreditCard },
    { name: "Edahabia (Algerie Poste)", desc: "Paiement via la carte Edahabia, utilisee par des millions d'Algeriens. Integration API Algerie Poste.", icon: Wallet },
    { name: "Yalidine", desc: "Integration avec le leader de la livraison e-commerce en Algerie pour les livraisons inter-wilayas.", icon: Package },
    { name: "ZR Express", desc: "Partenaire logistique pour la livraison rapide dans les grandes villes algeriennes.", icon: Truck },
    { name: "Maystro Delivery", desc: "Integration API pour les livraisons e-commerce avec suivi et COD management.", icon: Route },
    { name: "BaridiMob", desc: "Paiement mobile via l'application Algerie Poste, de plus en plus adopte par les jeunes Algeriens.", icon: Smartphone }
  ];

  return (
    <>
      <Head>
        <title>Application de Livraison Algerie 2026 | Creer App Livraison comme Glovo | Symloop</title>
        <meta name="description" content="Comment creer une application de livraison en Algérie (Algeria) en 2026 ? Guide complet : fonctionnalites, technologies (Flutter, Node.js), cout, integration CIB/Edahabia. Symloop, +50 apps livrees. Devis gratuit." />
        <meta name="keywords" content="application livraison algerie, creer application livraison algerie, app livraison comme glovo algerie, application commande livraison algerie 2026, developpement application livraison, application livraison yassir, application livraison tempo algerie, creer app livraison algerie, developpement application livraison algerie, application suivi livraison gps algerie, delivery app Algeria, food delivery app Algeria, logistics app Algeria, create delivery application Algeria, last-mile delivery Algeria" />
        <link rel="canonical" href="https://symloop.com/blog/application-livraison-algerie-2026" />

        <meta property="og:title" content="Application de Livraison Algerie 2026 | Creer App comme Glovo | Symloop" />
        <meta property="og:description" content="Guide complet pour creer une application de livraison en Algérie (Algeria). Fonctionnalites, technologies, cout et integration paiement local. +50 apps livrees par Symloop." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/application-livraison-algerie-2026" />
        <meta property="og:site_name" content="Symloop" />
        <meta property="og:locale" content="fr_DZ" />
        <meta property="og:locale:alternate" content="ar_DZ" />
        <meta property="og:locale:alternate" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Application Livraison Algerie 2026 | Symloop" />
        <meta name="twitter:description" content="Creer une application de livraison en Algerie : guide complet 2026. Flutter, Node.js, GPS, CIB. Symloop." />

        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Comment Creer une Application de Livraison en Algerie en 2026 ?",
            "description": "Guide complet pour creer une application de livraison en Algerie : fonctionnalites essentielles, architecture technique, technologies recommandees, cout de developpement et integration avec les services algeriens.",
            "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
            "publisher": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
            "datePublished": "2026-04-05",
            "dateModified": "2026-04-05",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://symloop.com/blog/application-livraison-algerie-2026" },
            "articleSection": "Developpement Application Mobile",
            "inLanguage": "fr-DZ",
            "keywords": "application livraison algerie, creer application livraison, app livraison glovo algerie, developpement application livraison 2026"
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })}
        </script>

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com/" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog/" },
              { "@type": "ListItem", "position": 3, "name": "Application Livraison Algerie 2026", "item": "https://symloop.com/blog/application-livraison-algerie-2026" }
            ]
          })}
        </script>

        {/* Speakable Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Application de Livraison en Algerie 2026",
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "[data-speakable]", "#faq"] },
            "url": "https://symloop.com/blog/application-livraison-algerie-2026"
          })}
        </script>

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Symloop",
            "url": "https://symloop.com",
            "logo": "https://symloop.com/logo.png",
            "address": { "@type": "PostalAddress", "addressLocality": "Setif", "addressCountry": "DZ" },
            "telephone": "+213549575512",
            "knowsAbout": ["Application de livraison", "GPS tracking", "Flutter", "Node.js", "Paiement CIB Edahabia", "Logistique last-mile"],
            "areaServed": { "@type": "Country", "name": "Algeria" }
          })}
        </script>
      </Head>

      <div className={`min-h-screen bg-gray-950 ${isRTL ? 'rtl' : 'ltr'}`}>

        {/* ═══════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════ */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="600px" x="-5%" y="-15%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #a855f7, transparent 70%)" size="500px" x="60%" y="10%" delay={3} />
          <FloatingOrb color="radial-gradient(circle, #22c55e, transparent 70%)" size="450px" x="30%" y="55%" delay={6} />
          <FloatingOrb color="radial-gradient(circle, #f59e0b, transparent 70%)" size="350px" x="80%" y="60%" delay={9} />

          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }} />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition-colors text-sm tracking-wide uppercase">
                <ArrowLeft className="w-3.5 h-3.5" /> Blog
              </Link>

              <nav className="text-xs text-gray-600 mb-8 tracking-wide" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 flex-wrap">
                  <li><Link href="/" className="hover:text-cyan-400 transition-colors">Accueil</Link></li>
                  <li className="text-gray-700">/</li>
                  <li><Link href="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link></li>
                  <li className="text-gray-700">/</li>
                  <li className="text-cyan-400">Application Livraison Algerie 2026</li>
                </ol>
              </nav>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex items-center gap-3 mb-8">
                <span className="bg-cyan-500/20 text-cyan-300 backdrop-blur-md border border-cyan-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5" /> Livraison & Logistique
                </span>
                <span className="bg-purple-500/20 text-purple-300 backdrop-blur-md border border-purple-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                  2026
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                Comment Creer une{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                  Application de Livraison
                </span>{" "}
                en Algerie en 2026 ?
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg text-gray-400 max-w-3xl leading-relaxed mb-10"
                data-speakable="true"
              >
                Guide complet pour creer une application de livraison en Algerie : fonctionnalites client, livreur et admin,
                architecture technique avec GPS temps reel, integration paiement CIB/Edahabia, et cout de developpement.
                Par Symloop, +50 applications livrees en Algerie.
              </motion.p>

              {/* Hero stats */}
              <motion.div
                ref={statsRef}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {[
                  { value: `${apps}+`, label: "Applications livrees" },
                  { value: `${clients}+`, label: "Clients satisfaits" },
                  { value: `${satisfaction}%`, label: "Taux de satisfaction" },
                  { value: "4-8", label: "Semaines pour un MVP" }
                ].map((stat, i) => (
                  <GlassCard key={i} className="p-4 text-center" delay={0.1 * i}>
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </GlassCard>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            EN BREF — LLM Optimized Block
        ═══════════════════════════════════════════ */}
        <section className="en-bref-block relative py-8 border-b border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <GlassCard className="p-6 border-l-4 border-l-cyan-500">
              <p className="text-[10px] font-bold text-cyan-400 tracking-widest uppercase mb-2">En bref</p>
              <p className="text-gray-400 text-sm leading-relaxed" data-speakable="true">
                Symloop developpe des applications de livraison sur mesure en Algerie. Application client avec suivi GPS temps reel,
                application livreur avec navigation et preuve de livraison, dashboard admin avec analytics. Technologies : Flutter, Node.js,
                Firebase, Google Maps API. Integration paiement CIB, Edahabia, COD. A partir de 150 000 DA. Plus de 50 applications livrees.
                Basee a Setif, couverture nationale. Contact : +213 549 575 512.
              </p>
            </GlassCard>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            INTRODUCTION
        ═══════════════════════════════════════════ */}
        <section className="relative py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Le marche de la <strong className="text-cyan-400">livraison a domicile en Algerie</strong> connait une explosion sans precedent en 2026.
                  L'essor de plateformes comme <strong className="text-white">Yassir</strong>, <strong className="text-white">Tempo</strong> et les modeles inspires de
                  <strong className="text-white"> Glovo</strong> a transforme les habitudes de consommation des Algeriens. Avec plus de 25 millions d'utilisateurs
                  de smartphones et une penetration internet de 72%, le terrain est fertile pour lancer une <strong className="text-cyan-400">application de livraison en Algerie</strong>.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Que vous soyez un <strong className="text-white">entrepreneur</strong> souhaitant lancer votre propre service de livraison, un <strong className="text-white">restaurateur</strong> voulant
                  digitaliser ses commandes, ou une <strong className="text-white">entreprise de logistique</strong> cherchant a optimiser sa flotte, ce guide complet vous explique
                  comment <strong className="text-cyan-400">creer une application de livraison</strong> adaptee au marche algerien, etape par etape.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Chez <strong className="text-cyan-400">Symloop</strong>, nous avons developpe plus de 50 applications incluant des systemes de tracking GPS en temps reel,
                  des passerelles de paiement CIB/Edahabia et des architectures haute disponibilite. Decouvrez notre approche du <strong className="text-white">developpement
                  d'application de livraison</strong> en Algerie.
                </p>
              </div>
            </Reveal>

            {/* Stats box */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {[
                  { value: "$150 Mrd", label: "Marche mondial food delivery 2026" },
                  { value: "+340%", label: "Croissance e-commerce Algerie (5 ans)" },
                  { value: "25M+", label: "Utilisateurs smartphones Algerie" },
                  { value: "72%", label: "Penetration internet en Algerie" }
                ].map((stat, i) => (
                  <GlassCard key={i} className="p-5 text-center" delay={0.1 * i}>
                    <div className="text-xl font-bold text-cyan-400">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </GlassCard>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FONCTIONNALITES ESSENTIELLES — 3 PANELS
        ═══════════════════════════════════════════ */}
        <section className="relative py-20 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Les <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Fonctionnalites Essentielles</span> d'une App de Livraison
              </h2>
              <p className="text-gray-500 text-lg mb-12 max-w-3xl">
                Une application de livraison complete necessite trois interfaces distinctes qui communiquent en temps reel.
                Voici les fonctionnalites indispensables pour chaque panel.
              </p>
            </Reveal>

            {/* Panel Client */}
            <Reveal delay={0.1}>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Application Client</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {clientFeatures.map((feature, i) => (
                    <GlassCard key={i} className="p-5" delay={0.05 * i}>
                      <feature.icon className="w-5 h-5 text-cyan-400 mb-3" />
                      <h4 className="text-white font-semibold text-sm mb-1">{feature.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Panel Livreur */}
            <Reveal delay={0.2}>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <Truck className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Application Livreur</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {driverFeatures.map((feature, i) => (
                    <GlassCard key={i} className="p-5" delay={0.05 * i}>
                      <feature.icon className="w-5 h-5 text-purple-400 mb-3" />
                      <h4 className="text-white font-semibold text-sm mb-1">{feature.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Panel Admin */}
            <Reveal delay={0.3}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <Settings className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Panel Administrateur</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {adminFeatures.map((feature, i) => (
                    <GlassCard key={i} className="p-5" delay={0.05 * i}>
                      <feature.icon className="w-5 h-5 text-green-400 mb-3" />
                      <h4 className="text-white font-semibold text-sm mb-1">{feature.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            ARCHITECTURE TECHNIQUE
        ═══════════════════════════════════════════ */}
        <section className="relative py-20 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Architecture <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Technique</span> d'une Application de Livraison
              </h2>
              <p className="text-gray-500 text-lg mb-8 max-w-3xl">
                L'architecture d'une application de livraison doit supporter le temps reel, la haute disponibilite et la scalabilite.
                Voici les composants cles que Symloop met en place.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6">
                {/* GPS Real-time */}
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Navigation className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Tracking GPS en Temps Reel</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        Le systeme de tracking utilise des <strong className="text-white">WebSockets (Socket.io)</strong> pour une communication bidirectionnelle
                        en temps reel entre le livreur et le client. La position du livreur est mise a jour toutes les 3 secondes sur
                        la carte du client via <strong className="text-white">Google Maps API</strong>. L'ETA (temps d'arrivee estime) est recalcule dynamiquement
                        en tenant compte du trafic algerien en temps reel.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["WebSocket", "Google Maps SDK", "Geolocation API", "ETA dynamique", "Precision 5m"].map((tag, i) => (
                          <span key={i} className="bg-cyan-500/10 text-cyan-400 text-xs px-3 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>

                {/* Push notifications */}
                <GlassCard className="p-6" delay={0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Bell className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Notifications Push Intelligentes</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        Les notifications sont gerees via <strong className="text-white">Firebase Cloud Messaging (FCM)</strong> pour Android et
                        <strong className="text-white"> APNs</strong> pour iOS. Chaque etape de la commande declenche une notification automatique :
                        commande acceptee, livreur en route, arrive a proximite, livree. Les notifications marketing
                        sont segmentees par comportement utilisateur et geolocalisation.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["FCM", "APNs", "Segmentation", "Triggers auto", "Rich notifications"].map((tag, i) => (
                          <span key={i} className="bg-purple-500/10 text-purple-400 text-xs px-3 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>

                {/* Payment CIB */}
                <GlassCard className="p-6" delay={0.2}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Integration Paiement CIB / Edahabia</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        Symloop integre la <strong className="text-white">passerelle SATIM</strong> pour les paiements par carte CIB et l'API
                        <strong className="text-white"> Algerie Poste</strong> pour les paiements Edahabia. Le systeme gere egalement le paiement
                        a la livraison (COD) avec un module de reconciliation pour les livreurs. La securite des transactions est assuree
                        par un chiffrement SSL/TLS et la conformite PCI DSS.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["SATIM Gateway", "Edahabia API", "COD Management", "SSL/TLS", "PCI DSS"].map((tag, i) => (
                          <span key={i} className="bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>

                {/* Dispatch Algorithm */}
                <GlassCard className="p-6" delay={0.3}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Cpu className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Algorithme d'Affectation Intelligent</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        L'algorithme de dispatch analyse en temps reel la <strong className="text-white">proximite du livreur</strong>, sa
                        <strong className="text-white"> charge actuelle</strong>, son <strong className="text-white">score de performance</strong> et les
                        <strong className="text-white"> conditions de trafic</strong> pour affecter chaque commande au livreur optimal.
                        Le systeme supporte l'affectation automatique et manuelle, avec possibilite de regrouper les commandes
                        par zone pour optimiser les tournees.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Machine learning", "Optimisation tournees", "Batch delivery", "Score livreur", "Trafic temps reel"].map((tag, i) => (
                          <span key={i} className="bg-amber-500/10 text-amber-400 text-xs px-3 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            TECHNOLOGIES RECOMMANDEES
        ═══════════════════════════════════════════ */}
        <section className="relative py-20 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Les <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Technologies Recommandees</span> en 2026
              </h2>
              <p className="text-gray-500 text-lg mb-12 max-w-3xl">
                Symloop utilise les technologies les plus modernes et eprouvees pour garantir performance, scalabilite et maintenabilite
                de votre application de livraison.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStack.map((stack, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <GlassCard className="p-5 h-full">
                    <h3 className={`text-${stack.color}-400 font-semibold text-sm mb-3`}>{stack.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {stack.techs.map((tech, j) => (
                        <span key={j} className={`bg-${stack.color}-500/10 text-${stack.color}-400 text-xs px-3 py-1.5 rounded-full`}>{tech}</span>
                      ))}
                    </div>
                  </GlassCard>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-12 prose prose-invert max-w-none">
                <p className="text-gray-400 leading-relaxed">
                  <strong className="text-white">Pourquoi Flutter ?</strong> Flutter permet de developper une seule base de code pour iOS et Android,
                  reduisant les couts de 40% par rapport au developpement natif. Les performances sont quasi-natives grace au moteur de rendu Skia.
                  L'ecosysteme de packages (google_maps_flutter, geolocator, firebase_messaging) est mature et parfaitement adapte aux applications de livraison.
                </p>
                <p className="text-gray-400 leading-relaxed mt-4">
                  <strong className="text-white">Pourquoi Node.js ?</strong> Node.js est ideal pour les applications en temps reel grace a son architecture
                  event-driven non-bloquante. Socket.io tourne nativement sur Node.js pour le tracking GPS. L'ecosysteme npm offre des milliers de packages
                  pour accelerer le developpement. Le meme langage (JavaScript/TypeScript) est utilise cote serveur et cote client.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            COMBIEN COUTE UNE APPLICATION DE LIVRAISON ?
        ═══════════════════════════════════════════ */}
        <section className="relative py-20 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Combien <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Coute</span> une Application de Livraison ?
              </h2>
              <p className="text-gray-500 text-lg mb-12 max-w-3xl">
                Le cout depend de la complexite et des fonctionnalites souhaitees. Voici nos formules adaptees au marche algerien.
                Tous les prix incluent le design UI/UX, le developpement, les tests et le deploiement sur les stores.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-6">
              {pricingTiers.map((tier, i) => (
                <Reveal key={i} delay={0.1 * i}>
                  <GlassCard className={`p-6 h-full ${tier.popular ? 'border-cyan-500/30 ring-1 ring-cyan-500/20' : ''}`}>
                    {tier.popular && (
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full inline-block mb-4 tracking-wider uppercase">
                        Recommande
                      </div>
                    )}
                    <h3 className="text-white font-bold text-xl mb-1">{tier.name}</h3>
                    <p className="text-gray-500 text-xs mb-4">{tier.description}</p>
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-white">{tier.price}</span>
                      {tier.unit && <span className="text-gray-500 ml-1">{tier.unit}</span>}
                    </div>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://wa.me/213549575512?text=Bonjour, je suis interesse par la formule application de livraison"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-center py-3 px-6 rounded-xl text-sm font-semibold transition-all ${
                        tier.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:opacity-90'
                          : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      Demander un devis
                    </a>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            MODELE ECONOMIQUE
        ═══════════════════════════════════════════ */}
        <section className="relative py-20 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-amber-400 to-green-400 bg-clip-text text-transparent">Modele Economique</span> d'une Application de Livraison
              </h2>
              <p className="text-gray-500 text-lg mb-12 max-w-3xl">
                Avant de developper votre application, definissez votre modele de monetisation.
                La plupart des plateformes de livraison combinent plusieurs sources de revenus.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              {businessModels.map((model, i) => (
                <Reveal key={i} delay={0.1 * i}>
                  <GlassCard className="p-6 h-full">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 bg-${model.color}-500/20 rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <model.icon className={`w-5 h-5 text-${model.color}-400`} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-2">{model.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{model.desc}</p>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-10 prose prose-invert max-w-none">
                <p className="text-gray-400 leading-relaxed">
                  En Algerie, le modele le plus viable en 2026 combine la <strong className="text-white">commission par commande</strong> (15-20%) et les
                  <strong className="text-white"> frais de livraison</strong> (150-400 DA selon la distance). Le paiement a la livraison (COD) represente encore
                  environ 70% des transactions, ce qui necessite un systeme de reconciliation robuste pour les livreurs. Symloop vous accompagne dans la
                  definition du modele economique optimal pour votre marche cible.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            INTEGRATION SERVICES ALGERIENS
        ═══════════════════════════════════════════ */}
        <section className="relative py-20 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Integration avec les{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services Algeriens</span>
              </h2>
              <p className="text-gray-500 text-lg mb-12 max-w-3xl">
                Une application de livraison en Algerie doit s'integrer avec l'ecosysteme local :
                paiement, logistique, cartographie. Symloop maitrise toutes ces integrations.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {algerianServices.map((service, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <GlassCard className="p-5 h-full">
                    <div className="flex items-start gap-3">
                      <service.icon className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-white font-semibold text-sm mb-1">{service.name}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-10 prose prose-invert max-w-none">
                <p className="text-gray-400 leading-relaxed">
                  L'integration avec les services de <strong className="text-white">livraison inter-wilayas</strong> comme Yalidine et ZR Express permet
                  d'etendre votre couverture au-dela de votre ville. Symloop developpe des connecteurs API sur mesure pour chaque partenaire logistique.
                  Pour les applications de livraison de repas, nous integrons egalement les <strong className="text-white">systemes d'impression thermique</strong> pour
                  les tickets cuisine et les bons de livraison. Decouvrez notre{" "}
                  <Link href="/blog/application-restaurant-livraison-algerie" className="text-cyan-400 hover:text-cyan-300 underline">
                    guide application restaurant et livraison
                  </Link>{" "}
                  pour plus de details sur les integrations FoodTech.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            POURQUOI SYMLOOP
        ═══════════════════════════════════════════ */}
        <section className="relative py-20 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Pourquoi{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Symloop</span>{" "}
                pour Votre App de Livraison ?
              </h2>
              <p className="text-gray-500 text-lg mb-12 max-w-3xl">
                Symloop est l'agence de reference en Algerie pour le developpement d'applications de livraison et de logistique.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Award,
                  title: "+50 Applications Livrees",
                  desc: "Un portfolio prouve incluant des applications de livraison, e-commerce, logistique et gestion de flotte pour des clients en Algerie et au Maghreb."
                },
                {
                  icon: Navigation,
                  title: "Expertise GPS & Tracking",
                  desc: "Maitrise approfondie du tracking en temps reel, des algorithmes d'optimisation de tournees et de l'integration Google Maps pour le marche algerien."
                },
                {
                  icon: CreditCard,
                  title: "Integration Paiement Local",
                  desc: "Experience prouvee dans l'integration CIB, Edahabia et COD. Nous connaissons les specificites des passerelles de paiement algeriennes."
                },
                {
                  icon: Globe,
                  title: "Equipe Locale, Standards Internationaux",
                  desc: "Basee a Setif avec une couverture nationale. Code propre, documentation complete, et respect des meilleures pratiques internationales."
                },
                {
                  icon: Zap,
                  title: "MVP en 6-8 Semaines",
                  desc: "Methodologie agile pour livrer rapidement un produit fonctionnel. Iterations rapides basees sur les retours utilisateurs."
                },
                {
                  icon: Headphones,
                  title: "Support & Maintenance",
                  desc: "Accompagnement post-livraison : correction de bugs, mises a jour, monitoring, optimisation des performances. Support en francais et arabe."
                }
              ].map((item, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <GlassCard className="p-6 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FAQ
        ═══════════════════════════════════════════ */}
        <section id="faq" className="relative py-20 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Questions <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Frequentes</span>
              </h2>
              <p className="text-gray-500 text-lg mb-12 max-w-3xl">
                Tout ce que vous devez savoir sur le developpement d'une application de livraison en Algerie.
              </p>
            </Reveal>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <GlassCard className="overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4"
                    >
                      <span className="text-white font-medium text-sm">{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-5"
                      >
                        <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            ARTICLES CONNEXES
        ═══════════════════════════════════════════ */}
        <section className="relative py-20 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-3xl font-bold text-white mb-8">Articles Connexes</h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {[
                { title: "Application Restaurant et Livraison en Algerie", href: "/blog/application-restaurant-livraison-algerie", desc: "Solutions FoodTech : commande en ligne, livraison, gestion cuisine" },
                { title: "Gestion de Flotte et Suivi GPS en Algerie 2026", href: "/blog/gestion-flotte-livraison-suivi-gps-algerie-2026", desc: "Tracking livreurs, optimisation tournees, mode offline" },
                { title: "Developpement Application Mobile Algerie 2026", href: "/blog/developpement-application-mobile-algerie-2026", desc: "Flutter, React Native, +50 apps livrees par Symloop" },
                { title: "E-commerce Algerie : Paiement CIB & Edahabia", href: "/blog/ecommerce-algerie-paiement-cib-edahabia-2024", desc: "Integration paiement local pour boutiques en ligne" }
              ].map((article, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <Link href={article.href} className="group block">
                    <GlassCard className="p-5 h-full hover:border-cyan-500/20 transition-colors">
                      <h3 className="text-white font-semibold text-sm group-hover:text-cyan-400 transition-colors mb-1">{article.title}</h3>
                      <p className="text-gray-600 text-xs">{article.desc}</p>
                      <div className="flex items-center gap-1 mt-3 text-cyan-400 text-xs font-medium">
                        Lire l'article <ArrowRight className="w-3 h-3" />
                      </div>
                    </GlassCard>
                  </Link>
                </Reveal>
              ))}
            </div>

            {/* Related from data */}
            {relatedBlogs && relatedBlogs.length > 0 && (
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
            )}
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            TAGS
        ═══════════════════════════════════════════ */}
        <section className="py-10 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {[
                "application livraison algerie", "creer app livraison", "app comme glovo algerie", "livraison a domicile algerie",
                "tracking gps livreur", "paiement CIB livraison", "flutter algerie", "node.js backend", "yassir clone",
                "developpement application livraison", "marketplace livraison algerie", "application commande algerie"
              ].map((tag, i) => (
                <span key={i} className="bg-white/5 text-gray-500 text-xs px-4 py-2 rounded-full border border-white/5">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <p className="text-sm text-gray-500 mt-8">
          Symloop specializes in delivery app development in Algeria, building complete logistics platforms with real-time GPS tracking. From food delivery apps to last-mile delivery solutions across Algeria, we help businesses launch their own delivery platform. Whether you need a courier app, a grocery delivery app, or a multi-vendor delivery marketplace in Algeria, our team delivers end-to-end. Contact Symloop — the top delivery app developer in Algeria.
        </p>

        {/* ═══════════════════════════════════════════
            FINAL CTA
        ═══════════════════════════════════════════ */}
        <section className="relative py-20 border-t border-white/5 overflow-hidden">
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="400px" x="10%" y="-20%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #a855f7, transparent 70%)" size="350px" x="70%" y="20%" delay={5} />

          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Lancez Votre Application de Livraison
              </h2>
              <p className="text-gray-400 mb-10 text-lg">
                Vous avez un projet d'application de livraison en Algerie ? Contactez Symloop pour une consultation gratuite.
                Notre equipe vous accompagne de l'idee au deploiement sur les stores.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/213549575512?text=Bonjour, je souhaite creer une application de livraison en Algerie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
                <a
                  href="tel:+213549575512"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5" /> +213 549 575 512
                </a>
              </div>
            </Reveal>
          </div>
        </section>
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
