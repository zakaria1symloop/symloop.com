"use client";
import { Calendar, Clock, User, ArrowLeft, Globe, Smartphone, Shield, Zap, CheckCircle, TrendingUp, Server, MessageCircle, Award, BarChart3, Layers, Target, Cpu, Rocket, Users, ArrowRight, Building2, ChevronRight, Phone, AlertTriangle, XCircle, DollarSign, FileText, Package, Truck, ShoppingCart, PieChart, Receipt, ClipboardList, Timer, TrendingDown, Lock, Eye, Wrench, Database } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { getBlogBySlug, getRelatedBlogs } from '../../data/blogs';

/* ── Animated counter ── */
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

/* ── Floating orb ── */
function FloatingOrb({ color, size, x, y, delay = 0 }) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl opacity-25 pointer-events-none"
      style={{ background: color, width: size, height: size, left: x, top: y }}
      animate={{
        x: [0, 25, -15, 35, -10, 0],
        y: [0, -35, 15, -25, 40, 0],
        scale: [1, 1.1, 0.92, 1.08, 0.96, 1],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

/* ── Reveal wrapper ── */
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

/* ── Glass card ── */
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

export default function DigitaliserEntrepriseAlgerie() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const blog = getBlogBySlug('digitaliser-entreprise-algerie-ne-perdez-plus-1-dinar');
  const relatedBlogs = getRelatedBlogs('digitaliser-entreprise-algerie-ne-perdez-plus-1-dinar', 3);

  const lostRevenue = useCounter(37, 2000, statsInView);
  const efficiency = useCounter(65, 2200, statsInView);
  const errorReduction = useCounter(90, 2400, statsInView);

  const faqItems = [
    {
      question: "Combien perd une entreprise algérienne sans digitalisation ?",
      answer: "Selon nos analyses terrain, une PME algérienne non digitalisée perd en moyenne 15 à 37% de son chiffre d'affaires potentiel à cause d'erreurs manuelles, de stocks mal gérés, de clients perdus faute de suivi, et de décisions prises sans données fiables. La digitalisation avec Symloop permet de récupérer ces pertes dès les premiers mois."
    },
    {
      question: "Comment digitaliser son entreprise en Algérie en 2026 ?",
      answer: "Symloop propose un accompagnement complet : 1) Audit gratuit de votre entreprise pour identifier les pertes, 2) Plan de digitalisation sur mesure, 3) Déploiement des solutions (site web, application, ERP, CRM, IoT), 4) Formation de vos équipes, 5) Support continu. Chaque étape est adaptée à la réalité du marché algérien. Contactez-nous au +213 549 575 512."
    },
    {
      question: "La digitalisation coûte-t-elle cher pour une PME algérienne ?",
      answer: "Non. Symloop propose des solutions adaptées à tous les budgets. Un site web professionnel démarre à 32 000 DA, une application de gestion à partir de 2 000 DA/mois. Le retour sur investissement est généralement atteint en 2 à 6 mois grâce aux économies réalisées et aux revenus supplémentaires générés."
    },
    {
      question: "Quelles sont les solutions de digitalisation disponibles en Algérie ?",
      answer: "Symloop offre un écosystème complet : sites web et e-commerce, applications mobiles (Flutter, React Native), logiciels de gestion (ERP, CRM, comptabilité, RH), solutions IoT (smart home, industrie 4.0, agriculture connectée), intelligence artificielle, et cybersécurité. Tout est développé avec des technologies modernes et adapté au contexte algérien."
    },
    {
      question: "Symloop peut-il digitaliser mon entreprise à distance ?",
      answer: "Oui. Symloop travaille avec des clients dans toute l'Algérie et la région MENA, en présentiel et à distance. Notre équipe est basée à Sétif, mais nous avons accompagné des entreprises à Alger, Oran, Constantine, Annaba et dans toutes les wilayas. Les réunions se font en visio ou en personne selon vos préférences."
    },
    {
      question: "Quels résultats concrets attendre de la digitalisation ?",
      answer: "Nos clients constatent en moyenne : +40% de productivité, -90% d'erreurs de saisie, +30% de chiffre d'affaires la première année, 2h gagnées par employé par jour, et une visibilité client multipliée par 5 grâce au référencement en ligne. La digitalisation n'est pas une dépense, c'est l'investissement le plus rentable pour votre entreprise."
    }
  ];

  return (
    <>
      <Head>
        <title>Comment Digitaliser Votre Entreprise en Algérie et Ne Plus Perdre 1 Dinar | Symloop</title>
        <meta name="description" content="Découvrez comment Symloop aide les entreprises algériennes à se digitaliser et éliminer les pertes. Site web, application, ERP, CRM, IoT. Audit gratuit. Ne perdez plus un seul dinar." />
        <meta name="keywords" content="digitaliser entreprise algérie, transformation digitale algérie, digitalisation PME algérie, solutions digitales entreprise algérie 2026, comment digitaliser son entreprise, numérisation entreprise algérie, Symloop digitalisation, ERP algérie, CRM algérie, perte argent entreprise algérie, économie entreprise digitalisation, passage au numérique algérie" />
        <link rel="canonical" href="https://symloop.com/blog/digitaliser-entreprise-algerie-ne-perdez-plus-1-dinar/" />

        <meta property="og:title" content="Comment Symloop Aide Votre Entreprise à Ne Plus Perdre 1 Dinar | Digitalisation Algérie" />
        <meta property="og:description" content="Chaque jour sans digitalisation, votre entreprise perd de l'argent. Découvrez comment Symloop élimine ces pertes avec des solutions sur mesure." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/digitaliser-entreprise-algerie-ne-perdez-plus-1-dinar/" />
        <meta property="og:site_name" content="Symloop" />
        <meta property="og:locale" content="fr_DZ" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ne Perdez Plus 1 Dinar | Digitalisation Entreprise Algérie | Symloop" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Comment Digitaliser Votre Entreprise en Algérie et Ne Plus Perdre 1 Dinar",
            "description": "Guide complet pour digitaliser votre entreprise en Algérie. Éliminez les pertes, augmentez la productivité, boostez votre chiffre d'affaires.",
            "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
            "publisher": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
            "datePublished": "2026-04-01",
            "dateModified": "2026-04-01",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://symloop.com/blog/digitaliser-entreprise-algerie-ne-perdez-plus-1-dinar/" },
            "inLanguage": "fr-DZ"
          })}
        </script>

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

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com/" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog/" },
              { "@type": "ListItem", "position": 3, "name": "Digitaliser Entreprise Algérie", "item": "https://symloop.com/blog/digitaliser-entreprise-algerie-ne-perdez-plus-1-dinar/" }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Digitaliser Entreprise Algérie - Ne Perdez Plus 1 Dinar",
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "[data-speakable]", "#faq"] },
            "url": "https://symloop.com/blog/digitaliser-entreprise-algerie-ne-perdez-plus-1-dinar/"
          })}
        </script>
      </Head>

      <div className={`min-h-screen bg-gray-950 ${isRTL ? 'rtl' : 'ltr'}`}>

        {/* ═══ HERO ═══ */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <FloatingOrb color="radial-gradient(circle, #ef4444, transparent 70%)" size="550px" x="-8%" y="-10%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #22c55e, transparent 70%)" size="500px" x="65%" y="5%" delay={4} />
          <FloatingOrb color="radial-gradient(circle, #f59e0b, transparent 70%)" size="400px" x="25%" y="55%" delay={8} />
          <FloatingOrb color="radial-gradient(circle, #3b82f6, transparent 70%)" size="350px" x="80%" y="55%" delay={12} />

          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }} />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition-colors text-sm tracking-wide uppercase">
                <ArrowLeft className="w-3.5 h-3.5" /> Blog
              </Link>

              <nav className="text-xs text-gray-600 mb-8 tracking-wide" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 flex-wrap">
                  <li><Link href="/" className="hover:text-green-400 transition-colors">Accueil</Link></li>
                  <li className="text-gray-700">/</li>
                  <li><Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link></li>
                  <li className="text-gray-700">/</li>
                  <li className="text-green-400">Digitaliser Votre Entreprise</li>
                </ol>
              </nav>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex items-center gap-3 mb-8">
                <span className="bg-red-500/20 text-red-300 backdrop-blur-md border border-red-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase flex items-center gap-2">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Chaque Jour Compte
                </span>
                <span className="bg-green-500/20 text-green-300 backdrop-blur-md border border-green-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                  Digitalisation
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight"
              >
                Ne Perdez Plus{" "}
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  1 Dinar
                </span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-400 font-bold">
                  Digitalisez Votre Entreprise avec Symloop
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg sm:text-xl text-gray-400 max-w-3xl leading-relaxed mb-10"
              >
                Chaque jour sans digitalisation, votre entreprise perd de l&apos;argent.
                Erreurs manuelles, clients qui partent, stocks gaspillés, opportunités manquées.
                Symloop met fin à ces pertes — définitivement.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }} className="flex items-center gap-8 text-xs text-gray-500 tracking-wide uppercase">
                <div className="flex items-center gap-2"><User className="w-3.5 h-3.5" /> Symloop Team</div>
                <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> 1 Avril 2026</div>
                <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> 15 min</div>
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />
        </section>

        {/* ═══ EN BREF ═══ */}
        <section className="relative z-10 -mt-16 mb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div data-speakable="summary" className="backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-3xl p-8">
                <h2 className="text-sm font-bold text-green-400 uppercase tracking-widest mb-3">En bref</h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  <strong className="text-white">Symloop</strong> est une entreprise de solutions digitales basée à Sétif, Algérie.
                  Nous aidons les entreprises algériennes à éliminer les pertes causées par les processus manuels en déployant :
                  sites web et e-commerce, applications mobiles, logiciels de gestion (ERP, CRM), solutions IoT, et intelligence artificielle.
                  Nos clients constatent en moyenne +40% de productivité et -90% d&apos;erreurs dès les premiers mois.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">Audit gratuit :</strong> Nous analysons votre entreprise et identifions
                  exactement où vous perdez de l&apos;argent. Contact : <strong className="text-white">+213 549 575 512</strong>.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══ TABLE OF CONTENTS ═══ */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="backdrop-blur-xl bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8">
                <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-5">Sommaire</h2>
                <nav className="grid sm:grid-cols-2 gap-1.5">
                  {[
                    { num: "01", title: "Où votre entreprise perd de l'argent", id: "pertes" },
                    { num: "02", title: "La digitalisation : votre bouclier", id: "bouclier" },
                    { num: "03", title: "Solutions Symloop pour chaque problème", id: "solutions" },
                    { num: "04", title: "Résultats concrets de nos clients", id: "resultats" },
                    { num: "05", title: "Comment Symloop digitalise votre entreprise", id: "processus" },
                    { num: "06", title: "Questions fréquentes", id: "faq" },
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

        {/* ═══ ARTICLE ═══ */}
        <article className="relative pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* ── Section 1: Les pertes ── */}
            <section id="pertes" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-red-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Où Votre Entreprise Perd de l&apos;Argent Chaque Jour
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <p className="text-gray-400 leading-relaxed mb-10">
                  Si vous gérez encore votre entreprise avec des <strong className="text-white">cahiers, des fichiers Excel
                  et des appels téléphoniques</strong>, vous perdez de l&apos;argent — sans même le savoir.
                  Voici les fuites les plus courantes dans les entreprises algériennes non digitalisées :
                </p>
              </Reveal>

              <div className="space-y-4 mb-12">
                {[
                  {
                    icon: XCircle, title: "Erreurs de saisie et de comptabilité",
                    desc: "Une facture oubliée ici, un zéro en trop là. Les erreurs manuelles coûtent en moyenne 5 à 15% du chiffre d'affaires. Un logiciel de gestion les élimine à 90%.",
                    loss: "Perte : 5-15% du CA",
                    color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/10"
                  },
                  {
                    icon: Package, title: "Stocks mal gérés et gaspillage",
                    desc: "Produits périmés, ruptures de stock, sur-stockage. Sans système de gestion des stocks en temps réel, vous jetez littéralement de l'argent.",
                    loss: "Perte : 10-20% du stock",
                    color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/10"
                  },
                  {
                    icon: Users, title: "Clients perdus faute de suivi",
                    desc: "Un client appelle, personne ne rappelle. Un prospect intéressé, pas de suivi. Sans CRM, vous perdez des clients qui étaient prêts à acheter.",
                    loss: "Perte : 20-35% des prospects",
                    color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/10"
                  },
                  {
                    icon: Timer, title: "Temps gaspillé en tâches répétitives",
                    desc: "Vos employés passent 3 heures par jour à recopier des données, chercher des informations, faire des calculs manuels. Ce temps pourrait générer du revenu.",
                    loss: "Perte : 3h/employé/jour",
                    color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/10"
                  },
                  {
                    icon: Eye, title: "Invisibilité en ligne",
                    desc: "Pas de site web, pas de présence Google, pas de réseaux sociaux. Vos concurrents récupèrent les clients qui vous cherchent en ligne et ne vous trouvent pas.",
                    loss: "Perte : clients potentiels illimités",
                    color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/10"
                  },
                  {
                    icon: TrendingDown, title: "Décisions sans données",
                    desc: "Vous décidez au feeling, sans statistiques, sans tableaux de bord. Chaque mauvaise décision basée sur l'intuition plutôt que les données vous coûte cher.",
                    loss: "Perte : incalculable",
                    color: "text-gray-400", bg: "bg-gray-500/10", border: "border-gray-500/10"
                  },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className={`flex gap-5 items-start p-6 ${item.bg} border ${item.border} rounded-2xl hover:border-white/10 transition-all`}>
                      <div className={`${item.bg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-1.5">
                          <h3 className="text-white font-bold">{item.title}</h3>
                          <span className="text-[10px] font-bold text-red-400 tracking-wider uppercase bg-red-500/10 px-2.5 py-1 rounded-full flex-shrink-0 whitespace-nowrap">{item.loss}</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Shock stat */}
              <Reveal>
                <div ref={statsRef} className="backdrop-blur-xl bg-red-500/[0.06] border border-red-500/10 rounded-3xl p-8 text-center">
                  <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">Une PME algérienne non digitalisée perd en moyenne</p>
                  <div className="text-6xl sm:text-7xl font-extrabold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                    {lostRevenue}%
                  </div>
                  <p className="text-gray-400 text-lg">de son chiffre d&apos;affaires potentiel</p>
                </div>
              </Reveal>
            </section>

            {/* ── Section 2: La digitalisation comme bouclier ── */}
            <section id="bouclier" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-green-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    La Digitalisation : Votre Bouclier Contre les Pertes
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <p className="text-gray-400 leading-relaxed mb-10">
                  La digitalisation n&apos;est pas un luxe réservé aux grandes entreprises. C&apos;est
                  l&apos;<strong className="text-white">investissement le plus rentable</strong> que vous pouvez faire
                  pour votre business en Algérie en 2026. Voici comment chaque solution digitale
                  <strong className="text-green-400"> élimine une source de perte</strong> :
                </p>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { problem: "Erreurs de saisie", solution: "ERP & logiciel de gestion", result: "-90% d'erreurs", icon: ClipboardList, color: "from-green-500/20 to-emerald-500/20" },
                  { problem: "Stocks gaspillés", solution: "Gestion des stocks en temps réel", result: "-60% de pertes stock", icon: Package, color: "from-cyan-500/20 to-blue-500/20" },
                  { problem: "Clients perdus", solution: "CRM + site web + app mobile", result: "+35% de conversion", icon: Users, color: "from-purple-500/20 to-pink-500/20" },
                  { problem: "Temps gaspillé", solution: "Automatisation des processus", result: "+3h/employé/jour", icon: Zap, color: "from-yellow-500/20 to-orange-500/20" },
                  { problem: "Invisibilité", solution: "Site web SEO + Google Business", result: "x5 visibilité en ligne", icon: Globe, color: "from-blue-500/20 to-indigo-500/20" },
                  { problem: "Pas de données", solution: "Tableaux de bord analytics", result: "Décisions basées sur les données", icon: PieChart, color: "from-orange-500/20 to-red-500/20" },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className={`relative backdrop-blur-xl bg-gradient-to-br ${item.color} border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-all`}>
                      <div className="flex items-center gap-3 mb-4">
                        <item.icon className="w-5 h-5 text-green-400" />
                        <span className="text-[10px] font-bold text-red-400 line-through tracking-wider">{item.problem}</span>
                        <ArrowRight className="w-3 h-3 text-gray-600" />
                        <span className="text-[10px] font-bold text-green-400 tracking-wider">{item.solution}</span>
                      </div>
                      <div className="text-2xl font-extrabold text-white">{item.result}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* ── Section 3: Solutions ── */}
            <section id="solutions" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Solutions Symloop pour Chaque Problème
                  </h2>
                </div>
              </Reveal>

              <div className="grid lg:grid-cols-3 gap-5 mb-10">
                <GlassCard className="p-8" delay={0}>
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                    <Globe className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Présence en Ligne</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">Soyez visible pour les 33 millions d&apos;internautes algériens.</p>
                  <ul className="space-y-2">
                    {["Site web professionnel", "E-commerce avec CIB/Edahabia", "Référencement Google (SEO)", "Application mobile", "Réseaux sociaux"].map((s, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-green-400 flex-shrink-0" />{s}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <GlassCard className="p-8" delay={0.15}>
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                    <Database className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Gestion Intelligente</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">Automatisez et contrôlez chaque aspect de votre business.</p>
                  <ul className="space-y-2">
                    {["ERP sur mesure", "CRM gestion clients", "Comptabilité & facturation", "Gestion des stocks", "Ressources humaines"].map((s, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />{s}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <GlassCard className="p-8" delay={0.3}>
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                    <Cpu className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Innovation & IoT</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">Prenez une longueur d&apos;avance avec les technologies du futur.</p>
                  <ul className="space-y-2">
                    {["Intelligence artificielle", "IoT & objets connectés", "Maison intelligente", "Agriculture connectée", "Cybersécurité"].map((s, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-purple-400 flex-shrink-0" />{s}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </section>

            {/* ── Section 4: Résultats ── */}
            <section id="resultats" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-yellow-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Résultats Concrets de Nos Clients
                  </h2>
                </div>
              </Reveal>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {[
                  { value: `+${efficiency}%`, label: "Productivité", color: "from-green-400 to-emerald-400" },
                  { value: `-${errorReduction}%`, label: "Erreurs", color: "from-red-400 to-orange-400" },
                  { value: "+40%", label: "Chiffre d'affaires", color: "from-cyan-400 to-blue-400" },
                  { value: "+3h", label: "Gagnées / employé / jour", color: "from-purple-400 to-pink-400" },
                  { value: "x5", label: "Visibilité en ligne", color: "from-yellow-400 to-orange-400" },
                  { value: "2-6", label: "Mois pour le ROI", color: "from-blue-400 to-indigo-400" },
                ].map((stat, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <GlassCard className="p-6 text-center">
                      <div className={`text-3xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-500 text-xs tracking-wider uppercase">{stat.label}</div>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>

              {/* Testimonial-style */}
              <Reveal>
                <div className="backdrop-blur-xl bg-green-500/[0.04] border border-green-500/10 rounded-3xl p-8">
                  <div className="text-green-400 text-4xl mb-4">&ldquo;</div>
                  <p className="text-gray-300 text-lg leading-relaxed italic mb-4">
                    Avant Symloop, on perdait des commandes chaque semaine parce qu&apos;on gérait tout sur papier.
                    Depuis qu&apos;ils ont mis en place notre système de gestion et notre site e-commerce,
                    on ne perd plus une seule commande. Notre chiffre d&apos;affaires a augmenté de 45% en 6 mois.
                  </p>
                  <p className="text-gray-500 text-sm">— Gérant d&apos;une PME à Sétif, client Symloop</p>
                </div>
              </Reveal>
            </section>

            {/* ── Section 5: Processus ── */}
            <section id="processus" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Comment Symloop Digitalise Votre Entreprise
                  </h2>
                </div>
              </Reveal>

              <div className="space-y-4">
                {[
                  { num: "01", icon: Target, title: "Audit Gratuit", desc: "Nous analysons votre entreprise et identifions exactement où vous perdez de l'argent. Pas de jargon technique, juste des chiffres concrets.", color: "text-red-400", bg: "bg-red-500/10" },
                  { num: "02", icon: FileText, title: "Plan de Digitalisation", desc: "Un plan sur mesure avec les solutions prioritaires, les coûts et le calendrier. Vous validez chaque étape avant de commencer.", color: "text-orange-400", bg: "bg-orange-500/10" },
                  { num: "03", icon: Rocket, title: "Déploiement Rapide", desc: "Notre équipe développe et déploie les solutions. Site web, application, logiciel de gestion — tout est livré dans les délais.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
                  { num: "04", icon: Users, title: "Formation de Votre Équipe", desc: "Vos employés apprennent à utiliser les outils. Formation en français et arabe, en personne ou à distance.", color: "text-green-400", bg: "bg-green-500/10" },
                  { num: "05", icon: Shield, title: "Support Continu", desc: "Assistance technique, mises à jour, nouvelles fonctionnalités. Nous restons à vos côtés pour que votre entreprise ne cesse de grandir.", color: "text-purple-400", bg: "bg-purple-500/10" },
                ].map((step, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="flex gap-6 items-start group">
                      <div className={`${step.bg} border border-white/[0.06] w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <step.icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                      <div>
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

            {/* ── Section 6: FAQ ── */}
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
                    { href: "/blog/developpement-application-mobile-algerie-2026", label: "Développement App Mobile Algérie 2026" },
                    { href: "/blog/solutions-informatiques-algerie-2026", label: "Solutions Informatiques Algérie 2026" },
                    { href: "/blog/iot-internet-des-objets-algerie-2026", label: "IoT & Internet des Objets Algérie 2026" },
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
                {(blog?.tags || ["digitalisation entreprise algérie", "transformation digitale algérie", "ne perdez plus 1 dinar", "Symloop digitalisation", "PME algérie numérique"]).map((tag, i) => (
                  <span key={i} className="bg-white/[0.03] text-gray-600 px-3 py-1.5 rounded-lg text-xs">#{tag}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </article>

        {/* ═══ CTA ═══ */}
        <section className="relative overflow-hidden py-24">
          <FloatingOrb color="radial-gradient(circle, #22c55e, transparent 70%)" size="400px" x="5%" y="-20%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #f59e0b, transparent 70%)" size="350px" x="75%" y="10%" delay={4} />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Arrêtez de Perdre de l&apos;Argent
              </h2>
              <p className="text-gray-400 text-lg mb-4">Audit gratuit de votre entreprise. Nous identifions vos pertes en 48h.</p>
              <p className="text-green-400 font-bold text-xl mb-10">
                Chaque jour que vous attendez, c&apos;est de l&apos;argent en moins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/213549575512?text=Bonjour, je souhaite un audit gratuit pour digitaliser mon entreprise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-green-500 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-green-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Audit Gratuit WhatsApp
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

        {/* ═══ RELATED ═══ */}
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
