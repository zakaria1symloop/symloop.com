"use client";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Zap, CheckCircle, TrendingUp, MessageCircle, BarChart3, Target, Cpu, Rocket, Users, Building2, ChevronRight, Phone, Brain, Bot, Sparkles, Eye, Cog, LineChart, Shield, Globe, Star, Layers, Activity, Database, Mail, Share2, Factory, ShoppingCart, Lightbulb, Award, Timer, DollarSign, PieChart, Workflow, FileText, Settings, RefreshCw } from "lucide-react";
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

export default function IaAutomatisationProcessusRpaAlgerie2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const blog = getBlogBySlug('ia-automatisation-processus-rpa-algerie-2026');
  const relatedBlogs = getRelatedBlogs('ia-automatisation-processus-rpa-algerie-2026', 3);

  const manualReduction = useCounter(80, 2500, statsInView);
  const errorReduction = useCounter(95, 2000, statsInView);
  const productivity = useCounter(300, 2000, statsInView);

  const faqItems = [
    {
      question: "C'est quoi le RPA et comment l'IA l'am\u00e9liore pour les entreprises alg\u00e9riennes ?",
      answer: "Le RPA (Robotic Process Automation) utilise des robots logiciels pour automatiser les t\u00e2ches r\u00e9p\u00e9titives : saisie de donn\u00e9es, copier-coller entre syst\u00e8mes, g\u00e9n\u00e9ration de rapports. L'IA enrichit le RPA en ajoutant la compr\u00e9hension : lecture de documents non structur\u00e9s, prise de d\u00e9cision intelligente, classification automatique. Pour une entreprise alg\u00e9rienne, cela signifie r\u00e9duire le travail manuel de 80% et les erreurs de 95%. Symloop d\u00e9ploie des solutions RPA+IA sur mesure. Contact : +213 549 575 512."
    },
    {
      question: "Quels processus peuvent \u00eatre automatis\u00e9s par le RPA IA en Alg\u00e9rie ?",
      answer: "Pratiquement tout processus r\u00e9p\u00e9titif peut \u00eatre automatis\u00e9 : traitement des factures fournisseurs, rapprochement bancaire, g\u00e9n\u00e9ration de rapports, saisie de commandes, envoi d'emails personnalis\u00e9s, mise \u00e0 jour de bases de donn\u00e9es, classification de documents, extraction de donn\u00e9es, cr\u00e9ation de devis, suivi des imp\u00e9ratifs r\u00e9glementaires. Si un employ\u00e9 le fait de mani\u00e8re r\u00e9p\u00e9titive, un robot IA peut le faire mieux et plus vite."
    },
    {
      question: "Le RPA IA va-t-il remplacer les employ\u00e9s dans mon entreprise ?",
      answer: "Non. Le RPA IA lib\u00e8re vos employ\u00e9s des t\u00e2ches r\u00e9p\u00e9titives et ennuyeuses pour qu'ils se concentrent sur le travail \u00e0 haute valeur ajout\u00e9e : relation client, strat\u00e9gie, cr\u00e9ativit\u00e9, n\u00e9gociation. Vos employ\u00e9s deviennent 3 \u00e0 5 fois plus productifs. L'entreprise cro\u00eet sans avoir besoin d'embaucher massivement. C'est l'intelligence augment\u00e9e, pas le remplacement."
    },
    {
      question: "Combien de temps pour d\u00e9ployer une solution RPA IA ?",
      answer: "Un premier processus peut \u00eatre automatis\u00e9 en 2 \u00e0 4 semaines. L'approche Symloop est progressive : on commence par le processus le plus chronophage et le plus simple \u00e0 automatiser (quick win), puis on \u00e9tend. En 3 mois, 5 \u00e0 10 processus sont automatis\u00e9s. Le ROI est visible d\u00e8s le premier processus automatis\u00e9. Contactez-nous pour identifier vos quick wins : +213 549 575 512."
    },
    {
      question: "Est-ce que le RPA IA fonctionne avec mes logiciels existants ?",
      answer: "Oui. C'est justement l\u00e0 la force du RPA : il s'interface avec n'importe quel logiciel existant (ERP, CRM, Excel, email, applications web, logiciels m\u00e9tier) sans modification de vos syst\u00e8mes. Le robot IA interagit avec vos logiciels exactement comme un employ\u00e9 le ferait, mais 100 fois plus vite et sans erreur. Aucune migration n\u00e9cessaire."
    }
  ];

  return (
    <>
      <Head>
        <title>Automatisation des Processus & RPA IA Alg\u00e9rie 2026 | R\u00e9duisez 80% du Travail Manuel | Symloop</title>
        <meta name="description" content="Automatisation des processus m\u00e9tier et RPA par IA pour entreprises alg\u00e9riennes. Traitement automatique de documents, classification emails, automatisation facturation. R\u00e9duction du travail manuel de 80%. Symloop. Contact: +213 549 575 512." />
        <meta name="keywords" content="RPA alg\u00e9rie, automatisation processus IA alg\u00e9rie, robotic process automation alg\u00e9rie, automatisation facturation alg\u00e9rie, traitement documents IA alg\u00e9rie, classification emails IA, workflow automation alg\u00e9rie 2026, r\u00e9duction travail manuel IA" />
        <link rel="canonical" href="https://symloop.com/blog/ia-automatisation-processus-rpa-algerie-2026/" />

        <meta property="og:title" content="Automatisation des Processus & RPA par IA en Alg\u00e9rie 2026 | Symloop" />
        <meta property="og:description" content="RPA et automatisation IA pour entreprises alg\u00e9riennes. R\u00e9duction du travail manuel de 80%, z\u00e9ro erreurs, productivit\u00e9 x3." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/ia-automatisation-processus-rpa-algerie-2026/" />
        <meta property="og:site_name" content="Symloop" />
        <meta property="og:locale" content="fr_DZ" />
        <meta property="og:locale:alternate" content="ar_DZ" />
        <meta property="og:locale:alternate" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Automatisation Processus & RPA IA Alg\u00e9rie 2026 | Symloop" />
        <meta name="twitter:description" content="RPA et automatisation IA pour entreprises alg\u00e9riennes. R\u00e9duction 80% travail manuel, z\u00e9ro erreurs." />

        {/* Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Automatisation des Processus & RPA par IA en Alg\u00e9rie 2026",
            "description": "Guide complet sur l'automatisation des processus m\u00e9tier et le RPA par IA pour les entreprises alg\u00e9riennes. Traitement de documents, classification emails, facturation automatique.",
            "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
            "publisher": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
            "datePublished": "2026-04-01",
            "dateModified": "2026-04-01",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://symloop.com/blog/ia-automatisation-processus-rpa-algerie-2026/" },
            "articleSection": "Automatisation & RPA",
            "inLanguage": "fr-DZ",
            "keywords": "RPA alg\u00e9rie, automatisation processus IA, robotic process automation, workflow automation alg\u00e9rie"
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
              { "@type": "ListItem", "position": 3, "name": "Automatisation Processus & RPA IA Alg\u00e9rie 2026", "item": "https://symloop.com/blog/ia-automatisation-processus-rpa-algerie-2026/" }
            ]
          })}
        </script>

        {/* Speakable */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Automatisation Processus & RPA IA Alg\u00e9rie 2026",
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "[data-speakable]", "#faq"] },
            "url": "https://symloop.com/blog/ia-automatisation-processus-rpa-algerie-2026/"
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
            "knowsAbout": ["RPA", "Automatisation Processus", "Document AI", "Workflow Automation", "Classification IA", "OCR", "NLP"],
            "areaServed": { "@type": "Country", "name": "Algeria" }
          })}
        </script>
      </Head>

      <div className={`min-h-screen bg-gray-950 ${isRTL ? 'rtl' : 'ltr'}`}>

        {/* ═══════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════ */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <FloatingOrb color="radial-gradient(circle, #a855f7, transparent 70%)" size="650px" x="-8%" y="-10%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #22c55e, transparent 70%)" size="550px" x="55%" y="5%" delay={2} />
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="500px" x="25%" y="50%" delay={5} />
          <FloatingOrb color="radial-gradient(circle, #a855f7, transparent 70%)" size="400px" x="75%" y="55%" delay={8} />
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
                  <li><Link href="/" className="hover:text-purple-400 transition-colors">Accueil</Link></li>
                  <li className="text-gray-700">/</li>
                  <li><Link href="/blog" className="hover:text-purple-400 transition-colors">Blog</Link></li>
                  <li className="text-gray-700">/</li>
                  <li className="text-purple-400">Automatisation &amp; RPA IA Alg&eacute;rie 2026</li>
                </ol>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="bg-purple-500/20 text-purple-300 backdrop-blur-md border border-purple-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase flex items-center gap-2">
                  <Cog className="w-3.5 h-3.5" />
                  RPA & Automatisation
                </span>
                <span className="bg-green-500/20 text-green-300 backdrop-blur-md border border-green-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                  2026
                </span>
                <span className="bg-cyan-500/20 text-cyan-300 backdrop-blur-md border border-cyan-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                  -80% Manuel
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                Automatisation des Processus &amp;{" "}
                <span className="bg-gradient-to-r from-purple-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
                  RPA par IA
                </span>{" "}
                en Alg&eacute;rie 2026
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg sm:text-xl text-gray-400 max-w-3xl leading-relaxed mb-10"
              >
                Vos employ&eacute;s passent 80% de leur temps sur des t&acirc;ches r&eacute;p&eacute;titives :
                copier-coller, saisir des donn&eacute;es, classer des documents, g&eacute;n&eacute;rer des rapports.
                L&apos;IA fait tout &ccedil;a en 10 secondes &mdash; sans erreur.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="flex items-center gap-8 text-xs text-gray-500 tracking-wide uppercase"
              >
                <div className="flex items-center gap-2"><User className="w-3.5 h-3.5" /> Symloop Automation</div>
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
              <div data-speakable="summary" className="backdrop-blur-xl bg-white/[0.04] border border-purple-500/20 rounded-3xl p-8">
                <h2 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-3">En bref</h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  <strong className="text-white">Symloop</strong> automatise les processus m&eacute;tier des entreprises alg&eacute;riennes
                  gr&acirc;ce &agrave; l&apos;IA. RPA, traitement automatique de documents, classification emails,
                  automatisation facturation. R&eacute;duction du travail manuel de 80%.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">Contact :</strong> +213 549 575 512 &mdash; consultation gratuite.
                  Technologies : UiPath, Python, GPT-4, Tesseract OCR, LangChain, n8n.
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
                    { num: "01", title: "Le co\u00fbt cach\u00e9 du travail r\u00e9p\u00e9titif", id: "cout-cache" },
                    { num: "02", title: "Les 6 processus \u00e0 automatiser en priorit\u00e9", id: "processus" },
                    { num: "03", title: "RPA classique vs RPA + IA", id: "rpa-vs-ia" },
                    { num: "04", title: "Cas d'usage par d\u00e9partement", id: "departements" },
                    { num: "05", title: "Roadmap d'automatisation", id: "roadmap" },
                    { num: "06", title: "Questions fr\u00e9quentes", id: "faq" },
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

            {/* ── Section 1: Le coût caché ── */}
            <section id="cout-cache" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-purple-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Le Co&ucirc;t Cach&eacute; du Travail R&eacute;p&eacute;titif
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="backdrop-blur-xl bg-red-500/[0.06] border border-red-500/20 rounded-2xl p-8 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                      <Timer className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">80% du temps de vos employ&eacute;s est gaspill&eacute;</h3>
                      <p className="text-gray-400 leading-relaxed">
                        Copier-coller entre logiciels. Saisir manuellement des factures. Classer des emails.
                        G&eacute;n&eacute;rer des rapports Excel. V&eacute;rifier des donn&eacute;es. Ce sont des t&acirc;ches que l&apos;IA
                        fait en <strong className="text-white">10 secondes, sans erreur, 24h/24</strong>.
                        Pendant ce temps, vos employ&eacute;s talent&eacute;s s&apos;ennuient sur du travail sans valeur.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {[
                  { value: "80%", label: "R\u00e9duction", sub: "du travail manuel" },
                  { value: "95%", label: "Moins d'erreurs", sub: "z\u00e9ro faute humaine" },
                  { value: "3x", label: "Productivit\u00e9", sub: "gain moyen par employ\u00e9" },
                  { value: "2 mois", label: "ROI", sub: "retour sur investissement" },
                ].map((stat, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <GlassCard className="p-6 text-center">
                      <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent mb-1">
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
                  Chaque heure pass&eacute;e sur une t&acirc;che r&eacute;p&eacute;titive est une heure vol&eacute;e &agrave; la croissance.
                  <strong className="text-white"> L&apos;automatisation IA lib&egrave;re vos &eacute;quipes pour le travail qui compte vraiment</strong> :
                  strat&eacute;gie, relation client, innovation, n&eacute;gociation.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-lg text-gray-500 leading-relaxed mb-6">
                  Un comptable passe 3 jours &agrave; traiter les factures du mois. Avec le RPA IA,
                  c&apos;est fait en <strong className="text-gray-300">30 minutes</strong>. Un assistant saisit 200 commandes par jour.
                  Le robot IA en traite <strong className="text-gray-300">2000 en une heure</strong>. La diff&eacute;rence est brutale.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="backdrop-blur-xl bg-green-500/[0.04] border border-green-500/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    L&apos;automatisation compos&eacute;e
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Chaque processus automatis&eacute; lib&egrave;re du temps pour en automatiser un autre. L&apos;effet est
                    exponentiel : apr&egrave;s 6 mois, votre entreprise fonctionne avec une efficacit&eacute; que vos
                    concurrents ne peuvent m&ecirc;me pas imaginer.
                    <strong className="text-gray-300"> C&apos;est l&apos;avantage comp&eacute;titif ultime.</strong>
                  </p>
                </div>
              </Reveal>
            </section>

            {/* ── Section 2: Les 6 processus ── */}
            <section id="processus" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-px h-8 bg-gradient-to-b from-green-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Les 6 Processus &agrave; Automatiser en Priorit&eacute;
                  </h2>
                </div>
                <p className="text-gray-500 mb-10 leading-relaxed ml-7">
                  Commencez par les quick wins qui lib&egrave;rent le plus de temps et de valeur.
                </p>
              </Reveal>

              <div className="space-y-6">
                {[
                  { icon: Mail, color: "purple", title: "Traitement de Documents & Factures", desc: "Extraction automatique de donn\u00e9es depuis les factures, bons de commande, contrats. L'IA lit le document (m\u00eame manuscrit), extrait les montants, dates, r\u00e9f\u00e9rences, et les saisit dans votre ERP. Z\u00e9ro saisie manuelle, z\u00e9ro erreur, 10x plus rapide.", tags: ["OCR IA", "Extraction auto", "Int\u00e9gration ERP", "Z\u00e9ro saisie"] },
                  { icon: Mail, color: "green", title: "Classification d'Emails", desc: "L'IA lit chaque email entrant, comprend son contenu et le classe automatiquement : commande, r\u00e9clamation, demande de devis, facture, spam. Les emails urgents sont transf\u00e9r\u00e9s imm\u00e9diatement \u00e0 la bonne personne. Plus rien ne se perd dans la bo\u00eete de r\u00e9ception.", tags: ["Tri automatique", "Urgence d\u00e9tect\u00e9e", "Routage intelligent", "0 email perdu"] },
                  { icon: DollarSign, color: "cyan", title: "Automatisation Facturation", desc: "G\u00e9n\u00e9ration automatique des factures \u00e0 partir des bons de commande. V\u00e9rification de coh\u00e9rence, calcul automatique des taxes et remises, envoi au client, suivi des paiements, relances automatiques. Le cycle facturation complet sans intervention humaine.", tags: ["Factures auto", "Taxes calcul\u00e9es", "Relances auto", "Suivi paiements"] },
                  { icon: BarChart3, color: "orange", title: "G\u00e9n\u00e9ration de Rapports", desc: "Rapports journaliers, hebdomadaires, mensuels g\u00e9n\u00e9r\u00e9s automatiquement. L'IA collecte les donn\u00e9es de tous vos syst\u00e8mes, les analyse, g\u00e9n\u00e8re des graphiques et des insights, et envoie le rapport par email. Ce qui prenait 2 jours prend maintenant 2 minutes.", tags: ["Auto-g\u00e9n\u00e9r\u00e9s", "Multi-sources", "Insights IA", "Envoi auto"] },
                  { icon: Database, color: "pink", title: "Synchronisation de Donn\u00e9es", desc: "Synchronisation automatique entre tous vos syst\u00e8mes : ERP, CRM, comptabilit\u00e9, site web, WhatsApp. Quand une commande arrive sur le site, elle appara\u00eet dans l'ERP, le stock est mis \u00e0 jour, le client re\u00e7oit une confirmation. Z\u00e9ro copier-coller entre logiciels.", tags: ["Sync temps r\u00e9el", "Multi-syst\u00e8mes", "Z\u00e9ro doublon", "Automatique"] },
                  { icon: Workflow, color: "blue", title: "Workflows M\u00e9tier Complets", desc: "Automatisation de processus m\u00e9tier complets de bout en bout : onboarding client, cycle d'approbation, processus d'achat, gestion des cong\u00e9s, suivi des incidents. Chaque \u00e9tape est automatis\u00e9e, chaque partie prenante est notifi\u00e9e, chaque d\u00e9lai est respect\u00e9.", tags: ["Bout en bout", "Approbations auto", "Notifications", "SLA respect\u00e9s"] },
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

            {/* ── Section 3: RPA classique vs RPA + IA ── */}
            <section id="rpa-vs-ia" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    RPA Classique vs RPA + IA
                  </h2>
                </div>
              </Reveal>

              <div className="grid lg:grid-cols-2 gap-5 mb-10">
                <GlassCard className="p-8 border-gray-500/20" delay={0}>
                  <div className="w-12 h-12 rounded-2xl bg-gray-500/10 border border-gray-500/20 flex items-center justify-center mb-6">
                    <Cog className="w-6 h-6 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">RPA Classique</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Suit des r&egrave;gles fixes. Ne comprend pas le contenu. Fragile face aux changements.
                  </p>
                  <ul className="space-y-2.5">
                    {["R\u00e8gles rigides pr\u00e9d\u00e9finies", "Donn\u00e9es structur\u00e9es uniquement", "Casse si l'interface change", "Pas de compr\u00e9hension du contexte", "Maintenance fr\u00e9quente", "Limit\u00e9 \u00e0 des t\u00e2ches simples"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-gray-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <GlassCard className="p-8 border-purple-500/20" delay={0.1}>
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                    <Brain className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">RPA + IA (Symloop)</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Comprend, d&eacute;cide, s&apos;adapte. Traite les documents non structur&eacute;s. Intelligent.
                  </p>
                  <ul className="space-y-2.5">
                    {["Comprend le langage naturel", "Documents non structur\u00e9s (PDF, images)", "S'adapte aux changements", "Prise de d\u00e9cision intelligente", "Apprentissage continu", "Processus complexes de bout en bout"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-purple-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </section>

            {/* ── Section 4: Cas par département ── */}
            <section id="departements" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-orange-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Cas d&apos;Usage par D&eacute;partement
                  </h2>
                </div>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-3 mb-12">
                {[
                  { icon: DollarSign, title: "Comptabilit\u00e9 & Finance", desc: "Saisie factures auto, rapprochement bancaire, d\u00e9clarations fiscales, reporting financier, relances impay\u00e9s." },
                  { icon: Users, title: "Ressources Humaines", desc: "Onboarding automatis\u00e9, gestion cong\u00e9s, g\u00e9n\u00e9ration fiches de paie, suivi formations, pointage." },
                  { icon: ShoppingCart, title: "Commercial & Ventes", desc: "G\u00e9n\u00e9ration de devis auto, suivi commandes, CRM mis \u00e0 jour, rapports ventes, relances prospects." },
                  { icon: Factory, title: "Achats & Approvisionnement", desc: "Bons de commande automatiques, comparaison fournisseurs, suivi livraisons, gestion des stocks." },
                  { icon: Mail, title: "Service Client", desc: "Tri emails, r\u00e9ponses automatiques, escalade intelligente, suivi r\u00e9clamations, enqu\u00eates satisfaction." },
                  { icon: Building2, title: "Direction G\u00e9n\u00e9rale", desc: "Tableaux de bord automatiques, rapports consolid\u00e9s, alertes KPI, pr\u00e9paration r\u00e9unions." },
                  { icon: Shield, title: "Juridique & Conformit\u00e9", desc: "V\u00e9rification contrats, alertes \u00e9ch\u00e9ances, classification documents juridiques, conformit\u00e9 r\u00e9glementaire." },
                  { icon: Lightbulb, title: "Marketing", desc: "G\u00e9n\u00e9ration contenu, envoi newsletters personnalis\u00e9es, analyse campagnes, rapports ROI automatiques." },
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
            </section>

            {/* ── Section 5: Roadmap ── */}
            <section id="roadmap" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-px h-8 bg-gradient-to-b from-yellow-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Roadmap d&apos;Automatisation
                  </h2>
                </div>
                <p className="text-gray-500 mb-10 leading-relaxed ml-7">
                  Notre approche progressive : commencez petit, scalez vite, transformez tout.
                </p>
              </Reveal>

              <div className="space-y-4">
                {[
                  { phase: "SEMAINE 1-2", multiplier: "Quick Win", title: "Audit & Premier Processus", color: "purple", desc: "Analyse de tous vos processus, identification des 3 quick wins les plus impactants. D\u00e9ploiement du premier processus automatis\u00e9 (le plus r\u00e9p\u00e9titif et chronophage). R\u00e9sultats visibles imm\u00e9diatement." },
                  { phase: "SEMAINE 3-6", multiplier: "Scale", title: "5 Processus Automatis\u00e9s", color: "green", desc: "Extension \u00e0 5 processus cl\u00e9s : traitement factures, classification emails, g\u00e9n\u00e9ration rapports, synchronisation donn\u00e9es, et un workflow m\u00e9tier complet. Les \u00e9quipes sentent la diff\u00e9rence au quotidien." },
                  { phase: "MOIS 2-3", multiplier: "Transform", title: "Int\u00e9gration IA Avanc\u00e9e", color: "cyan", desc: "Ajout de l'intelligence : document AI pour lire les factures non structur\u00e9es, NLP pour comprendre les emails, pr\u00e9diction pour anticiper les besoins. Les robots ne suivent plus juste des r\u00e8gles \u2014 ils comprennent." },
                  { phase: "MOIS 3+", multiplier: "Dominate", title: "Entreprise Automatis\u00e9e", color: "yellow", desc: "80% des t\u00e2ches r\u00e9p\u00e9titives sont automatis\u00e9es. Vos \u00e9quipes se concentrent sur la cr\u00e9ation de valeur. L'entreprise fonctionne avec une efficacit\u00e9 in\u00e9gal\u00e9e. Expansion continue de l'automatisation." },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="flex gap-6 items-start group">
                      <div className="flex flex-col items-center">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-500/5 border border-${item.color}-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <span className={`text-${item.color}-400 text-[9px] font-extrabold text-center leading-tight`}>{item.multiplier}</span>
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
                <div className="mt-10 backdrop-blur-xl bg-gradient-to-r from-purple-500/[0.06] via-green-500/[0.06] to-cyan-500/[0.06] border border-white/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-purple-400" />
                    Premier processus automatis&eacute; en 2 semaines
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Pas besoin d&apos;attendre des mois. Le premier processus est automatis&eacute; et fonctionnel
                    en 2 semaines. Vous voyez le ROI imm&eacute;diatement et d&eacute;cidez de la suite.
                    <strong className="text-gray-300"> Z&eacute;ro risque. Contactez-nous au +213 549 575 512.</strong>
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
                    Questions Fr&eacute;quentes sur le RPA &amp; l&apos;Automatisation IA
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
                    { href: "/blog/erp-sur-mesure-saas-startup-pme-algerie-2026", label: "ERP Sur Mesure & SaaS pour PME Alg\u00e9rie 2026" },
                    { href: "/blog/chatbot-whatsapp-ia-entreprise-algerie-2026", label: "Chatbot WhatsApp IA pour Entreprises Alg\u00e9rie 2026" },
                    { href: "/blog/ia-analyse-predictive-business-intelligence-algerie-2026", label: "Analyse Pr\u00e9dictive & BI IA Alg\u00e9rie 2026" },
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
                {(blog?.tags || ["RPA alg\u00e9rie", "automatisation processus IA", "robotic process automation", "traitement documents IA", "classification emails", "automatisation facturation", "workflow automation", "r\u00e9duction travail manuel"]).map((tag, i) => (
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
          <FloatingOrb color="radial-gradient(circle, #a855f7, transparent 70%)" size="450px" x="5%" y="-25%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #22c55e, transparent 70%)" size="400px" x="65%" y="15%" delay={4} />
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="350px" x="35%" y="50%" delay={7} />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 backdrop-blur-md border border-purple-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-8">
                <Cog className="w-3.5 h-3.5" />
                Automatisation IA
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Lib&eacute;rez Vos &Eacute;quipes du{" "}
                <span className="bg-gradient-to-r from-purple-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
                  Travail R&eacute;p&eacute;titif
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-4 leading-relaxed">
                Chaque minute pass&eacute;e sur du copier-coller est une minute vol&eacute;e &agrave; la croissance.
                L&apos;automatisation IA r&eacute;cup&egrave;re ces heures perdues &mdash; imm&eacute;diatement.
              </p>
              <p className="text-gray-500 text-base mb-10 leading-relaxed">
                <strong className="text-white">Audit gratuit de vos processus.</strong> Identifions ensemble les
                t&acirc;ches &agrave; automatiser en priorit&eacute; pour un impact maximal imm&eacute;diat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/213549575512?text=Bonjour, je veux automatiser les processus de mon entreprise avec l'IA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-white text-gray-950 px-8 py-4 rounded-2xl font-semibold hover:bg-purple-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Audit Automatisation Gratuit
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
