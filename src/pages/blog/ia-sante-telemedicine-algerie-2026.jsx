"use client";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Zap, CheckCircle, TrendingUp, MessageCircle, BarChart3, Target, Cpu, Rocket, Users, Building2, ChevronRight, Phone, Brain, Bot, Sparkles, Eye, Cog, LineChart, Shield, Globe, Star, Layers, Activity, Database, Mail, Share2, Heart, Lightbulb, Award, Timer, Stethoscope, Pill, FileText, Microscope, Video, ClipboardList, Thermometer, UserCheck } from "lucide-react";
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

export default function IASanteTelemedicineAlgerie2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const blog = getBlogBySlug('ia-sante-telemedicine-algerie-2026');
  const relatedBlogs = getRelatedBlogs('ia-sante-telemedicine-algerie-2026', 3);

  const diagnosticAccuracy = useCounter(95, 2500, statsInView);
  const timeReduction = useCounter(60, 2000, statsInView);
  const patientSatisfaction = useCounter(92, 2000, statsInView);

  const faqItems = [
    {
      question: "Comment l'IA peut aider les m\u00e9decins en Alg\u00e9rie ?",
      answer: "L'IA assiste les m\u00e9decins alg\u00e9riens de multiples fa\u00e7ons : aide au diagnostic avec analyse d'images m\u00e9dicales (radiographies, IRM, scanners) avec une pr\u00e9cision de 95%+, triage intelligent des patients urgents, v\u00e9rification automatique des interactions m\u00e9dicamenteuses, g\u00e9n\u00e9ration de comptes rendus m\u00e9dicaux, et suivi patient \u00e0 distance. L'IA ne remplace pas le m\u00e9decin, elle le rend 10x plus efficace. Contact Symloop : +213 549 575 512."
    },
    {
      question: "La t\u00e9l\u00e9m\u00e9decine IA est-elle l\u00e9gale en Alg\u00e9rie ?",
      answer: "La t\u00e9l\u00e9m\u00e9decine est reconnue en Alg\u00e9rie et le cadre r\u00e9glementaire \u00e9volue pour accompagner la transformation digitale de la sant\u00e9. Les solutions d\u00e9velopp\u00e9es par Symloop respectent les normes m\u00e9dicales en vigueur, la confidentialit\u00e9 des donn\u00e9es patients, et int\u00e8grent les protocoles de s\u00e9curit\u00e9 n\u00e9cessaires. Nous travaillons en \u00e9troite collaboration avec les professionnels de sant\u00e9 pour garantir la conformit\u00e9."
    },
    {
      question: "L'IA peut-elle vraiment analyser des images m\u00e9dicales ?",
      answer: "Oui, l'IA atteint d\u00e9sormais des niveaux de pr\u00e9cision sup\u00e9rieurs \u00e0 95% pour la d\u00e9tection de certaines pathologies sur les images m\u00e9dicales. Elle excelle particuli\u00e8rement dans la d\u00e9tection pr\u00e9coce des tumeurs, l'analyse des radiographies pulmonaires, la lecture des r\u00e9tinographies pour le diab\u00e8te, et l'interpr\u00e9tation des ECG. L'IA fonctionne comme un deuxi\u00e8me avis m\u00e9dical instantan\u00e9 pour le praticien."
    },
    {
      question: "Comment fonctionne le triage patient par IA ?",
      answer: "Le triage IA analyse les sympt\u00f4mes d\u00e9clar\u00e9s par le patient (via chatbot ou formulaire), les croise avec son dossier m\u00e9dical et les protocoles cliniques, puis attribue un niveau d'urgence. Les cas critiques sont orient\u00e9s imm\u00e9diatement vers les urgences, les cas mod\u00e9r\u00e9s vers la t\u00e9l\u00e9consultation, et les cas l\u00e9gers vers l'autosoins guid\u00e9. Cela r\u00e9duit les temps d'attente de 60% et sauve des vies."
    },
    {
      question: "Symloop peut-il d\u00e9velopper une plateforme de t\u00e9l\u00e9m\u00e9decine compl\u00e8te ?",
      answer: "Oui, Symloop d\u00e9veloppe des plateformes de t\u00e9l\u00e9m\u00e9decine compl\u00e8tes avec : vid\u00e9oconsultation s\u00e9curis\u00e9e, dossier patient \u00e9lectronique, aide au diagnostic IA, prescription \u00e9lectronique, paiement en ligne (CIB/Edahabia), gestion de rendez-vous, et suivi patient \u00e0 distance. Le tout conforme aux normes m\u00e9dicales et s\u00e9curis\u00e9. Contactez-nous au +213 549 575 512 pour discuter de votre projet."
    }
  ];

  return (
    <>
      <Head>
        <title>IA pour la Sant\u00e9 & T\u00e9l\u00e9m\u00e9decine Alg\u00e9rie 2026 | Diagnostic IA & Plateformes M\u00e9dicales | Symloop</title>
        <meta name="description" content="Solutions IA pour le secteur de la sant\u00e9 en Alg\u00e9rie. Aide au diagnostic, analyse d'images m\u00e9dicales, triage patients, t\u00e9l\u00e9m\u00e9decine intelligente. Conforme aux normes m\u00e9dicales. Symloop, expert IA sant\u00e9. Contact: +213 549 575 512." />
        <meta name="keywords" content="IA sant\u00e9 alg\u00e9rie, t\u00e9l\u00e9m\u00e9decine alg\u00e9rie, intelligence artificielle m\u00e9decine alg\u00e9rie, diagnostic IA, analyse images m\u00e9dicales IA, triage patients IA, plateforme t\u00e9l\u00e9m\u00e9decine alg\u00e9rie 2026, logiciel m\u00e9dical IA alg\u00e9rie" />
        <link rel="canonical" href="https://symloop.com/blog/ia-sante-telemedicine-algerie-2026/" />

        <meta property="og:title" content="IA pour la Sant\u00e9 & T\u00e9l\u00e9m\u00e9decine en Alg\u00e9rie 2026 | Symloop" />
        <meta property="og:description" content="Solutions IA pour la sant\u00e9 en Alg\u00e9rie. Diagnostic assist\u00e9, analyse d'images, triage IA, t\u00e9l\u00e9m\u00e9decine intelligente." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/ia-sante-telemedicine-algerie-2026/" />
        <meta property="og:site_name" content="Symloop" />
        <meta property="og:locale" content="fr_DZ" />
        <meta property="og:locale:alternate" content="ar_DZ" />
        <meta property="og:locale:alternate" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IA Sant\u00e9 & T\u00e9l\u00e9m\u00e9decine Alg\u00e9rie 2026 | Symloop" />
        <meta name="twitter:description" content="Solutions IA pour la sant\u00e9 alg\u00e9rienne. Diagnostic assist\u00e9, t\u00e9l\u00e9m\u00e9decine, analyse images m\u00e9dicales." />

        {/* Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "IA pour la Sant\u00e9 & T\u00e9l\u00e9m\u00e9decine en Alg\u00e9rie 2026",
            "description": "Guide complet sur l'IA dans le secteur de la sant\u00e9 en Alg\u00e9rie. Aide au diagnostic, analyse d'images m\u00e9dicales, triage patients, t\u00e9l\u00e9m\u00e9decine intelligente.",
            "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
            "publisher": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
            "datePublished": "2026-04-01",
            "dateModified": "2026-04-01",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://symloop.com/blog/ia-sante-telemedicine-algerie-2026/" },
            "articleSection": "Sant\u00e9 & IA",
            "inLanguage": "fr-DZ",
            "keywords": "IA sant\u00e9 alg\u00e9rie, t\u00e9l\u00e9m\u00e9decine alg\u00e9rie, diagnostic IA, analyse images m\u00e9dicales"
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
              { "@type": "ListItem", "position": 3, "name": "IA Sant\u00e9 & T\u00e9l\u00e9m\u00e9decine Alg\u00e9rie 2026", "item": "https://symloop.com/blog/ia-sante-telemedicine-algerie-2026/" }
            ]
          })}
        </script>

        {/* Speakable */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "IA Sant\u00e9 T\u00e9l\u00e9m\u00e9decine Alg\u00e9rie 2026",
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "[data-speakable]", "#faq"] },
            "url": "https://symloop.com/blog/ia-sante-telemedicine-algerie-2026/"
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
            "knowsAbout": ["IA Sant\u00e9", "T\u00e9l\u00e9m\u00e9decine", "Diagnostic IA", "Analyse Images M\u00e9dicales", "Triage Patients", "Logiciel M\u00e9dical"],
            "areaServed": { "@type": "Country", "name": "Algeria" }
          })}
        </script>
      </Head>

      <div className={`min-h-screen bg-gray-950 ${isRTL ? 'rtl' : 'ltr'}`}>

        {/* ═══════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════ */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <FloatingOrb color="radial-gradient(circle, #10b981, transparent 70%)" size="650px" x="-8%" y="-10%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="550px" x="55%" y="5%" delay={2} />
          <FloatingOrb color="radial-gradient(circle, #8b5cf6, transparent 70%)" size="500px" x="25%" y="50%" delay={5} />
          <FloatingOrb color="radial-gradient(circle, #10b981, transparent 70%)" size="400px" x="75%" y="55%" delay={8} />
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="350px" x="5%" y="65%" delay={11} />

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
                  <li><Link href="/" className="hover:text-emerald-400 transition-colors">Accueil</Link></li>
                  <li className="text-gray-700">/</li>
                  <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link></li>
                  <li className="text-gray-700">/</li>
                  <li className="text-emerald-400">IA Sant&eacute; &amp; T&eacute;l&eacute;m&eacute;decine Alg&eacute;rie 2026</li>
                </ol>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="bg-emerald-500/20 text-emerald-300 backdrop-blur-md border border-emerald-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase flex items-center gap-2">
                  <Heart className="w-3.5 h-3.5" />
                  Sant&eacute; &amp; IA
                </span>
                <span className="bg-cyan-500/20 text-cyan-300 backdrop-blur-md border border-cyan-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                  2026
                </span>
                <span className="bg-purple-500/20 text-purple-300 backdrop-blur-md border border-purple-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                  T&eacute;l&eacute;m&eacute;decine
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
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Sant&eacute;
                </span>{" "}
                &amp; T&eacute;l&eacute;m&eacute;decine
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl">
                  en{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
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
                L&apos;intelligence artificielle r&eacute;volutionne la sant&eacute; en Alg&eacute;rie. Diagnostic assist&eacute; par IA,
                analyse d&apos;images m&eacute;dicales, triage intelligent, t&eacute;l&eacute;m&eacute;decine avanc&eacute;e &mdash; des technologies
                qui sauvent des vies et am&eacute;liorent l&apos;acc&egrave;s aux soins pour tous les Alg&eacute;riens.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="flex items-center gap-8 text-xs text-gray-500 tracking-wide uppercase"
              >
                <div className="flex items-center gap-2"><User className="w-3.5 h-3.5" /> Symloop HealthTech Team</div>
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
              <div data-speakable="summary" className="backdrop-blur-xl bg-white/[0.04] border border-emerald-500/20 rounded-3xl p-8">
                <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-3">En bref</h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  <strong className="text-white">Symloop</strong> d&eacute;veloppe des solutions IA pour le secteur de la sant&eacute; en Alg&eacute;rie.
                  Aide au diagnostic, analyse d&apos;images m&eacute;dicales, triage patients, t&eacute;l&eacute;m&eacute;decine intelligente.
                  Conforme aux normes m&eacute;dicales.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">Contact :</strong> +213 549 575 512 &mdash; consultation gratuite.
                  Technologies : Deep Learning, Computer Vision m&eacute;dicale, NLP, TensorFlow, PyTorch.
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
                    { num: "01", title: "L'IA r\u00e9volutionne la sant\u00e9 en Alg\u00e9rie", id: "revolution" },
                    { num: "02", title: "Aide au diagnostic & analyse d'images", id: "diagnostic" },
                    { num: "03", title: "Triage intelligent & interactions m\u00e9dicamenteuses", id: "triage" },
                    { num: "04", title: "T\u00e9l\u00e9m\u00e9decine intelligente", id: "telemedecine" },
                    { num: "05", title: "Pourquoi Symloop pour la sant\u00e9 IA", id: "pourquoi" },
                    { num: "06", title: "Questions fr\u00e9quentes", id: "faq" },
                  ].map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group">
                      <span className="text-[10px] font-bold text-gray-600 tracking-widest group-hover:text-emerald-400 transition-colors w-6">{item.num}</span>
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

            {/* ── Section 1: L'IA révolutionne la santé ── */}
            <section id="revolution" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-emerald-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    L&apos;IA R&eacute;volutionne la Sant&eacute; en Alg&eacute;rie
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="backdrop-blur-xl bg-emerald-500/[0.06] border border-emerald-500/20 rounded-2xl p-8 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Un syst&egrave;me de sant&eacute; en transformation</h3>
                      <p className="text-gray-400 leading-relaxed">
                        L&apos;Alg&eacute;rie fait face &agrave; des d&eacute;fis de sant&eacute; majeurs : d&eacute;serts m&eacute;dicaux dans le Sud,
                        surcharge des h&ocirc;pitaux dans les grandes villes, p&eacute;nurie de sp&eacute;cialistes.
                        L&apos;IA et la t&eacute;l&eacute;m&eacute;decine offrent des solutions concr&egrave;tes pour
                        <strong className="text-white"> d&eacute;mocratiser l&apos;acc&egrave;s aux soins de qualit&eacute;</strong> sur tout le territoire.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {[
                  { value: "95%+", label: "Pr\u00e9cision", sub: "diagnostic assist\u00e9 IA" },
                  { value: "-60%", label: "Temps d'attente", sub: "avec triage IA" },
                  { value: "92%", label: "Satisfaction", sub: "patients t\u00e9l\u00e9m\u00e9decine" },
                  { value: "24/7", label: "Disponibilit\u00e9", sub: "suivi patient IA" },
                ].map((stat, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <GlassCard className="p-6 text-center">
                      <div className="text-3xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-1">
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
                  L&apos;IA m&eacute;dicale n&apos;est plus de la science-fiction. Des h&ocirc;pitaux dans le monde entier
                  l&apos;utilisent d&eacute;j&agrave; pour <strong className="text-white">d&eacute;tecter des cancers plus t&ocirc;t</strong>,
                  trier les urgences plus rapidement, et offrir des soins &agrave; distance aux patients
                  isol&eacute;s. L&apos;Alg&eacute;rie peut et doit en b&eacute;n&eacute;ficier.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Imaginez un m&eacute;decin g&eacute;n&eacute;raliste &agrave; Gharda&iuml;a qui peut obtenir un deuxi&egrave;me avis d&apos;un
                  sp&eacute;cialiste IA en 30 secondes. Un patient diabétique suivi &agrave; distance avec des alertes
                  automatiques. Un service d&apos;urgences o&ugrave; le triage est fait par IA en 2 minutes au lieu de 45.
                  <strong className="text-gray-300"> C&apos;est possible aujourd&apos;hui.</strong>
                </p>
              </Reveal>
            </section>

            {/* ── Section 2: Diagnostic & analyse d'images ── */}
            <section id="diagnostic" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-px h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Aide au Diagnostic &amp; Analyse d&apos;Images M&eacute;dicales
                  </h2>
                </div>
                <p className="text-gray-500 mb-10 leading-relaxed ml-7">
                  L&apos;IA comme deuxi&egrave;me avis m&eacute;dical instantan&eacute; pour les praticiens alg&eacute;riens.
                </p>
              </Reveal>

              <div className="space-y-6">
                <Reveal delay={0}>
                  <GlassCard className="p-8 border-cyan-500/20">
                    <div className="flex items-start gap-6">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                          <Eye className="w-7 h-7 text-cyan-400" />
                        </div>
                        <div className="mt-3 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30">
                          <span className="text-cyan-300 text-xs font-extrabold">95%+</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Analyse d&apos;Images M&eacute;dicales par IA</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          Notre IA analyse les <strong className="text-white">radiographies, IRM, scanners et &eacute;chographies</strong>
                          {" "}avec une pr&eacute;cision sup&eacute;rieure &agrave; 95%. D&eacute;tection pr&eacute;coce de tumeurs, analyse
                          des radiographies pulmonaires, lecture des r&eacute;tinographies diab&eacute;tiques,
                          interpr&eacute;tation des ECG. Un deuxi&egrave;me regard qui ne fatigue jamais.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Radiographie", "IRM", "Scanner", "R\u00e9tinographie", "ECG", "D\u00e9tection tumeurs"].map((tag) => (
                            <span key={tag} className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-lg text-xs font-medium">{tag}</span>
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
                          <Brain className="w-7 h-7 text-purple-400" />
                        </div>
                        <div className="mt-3 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                          <span className="text-purple-300 text-xs font-extrabold">IA</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Aide au Diagnostic Clinique</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          Le m&eacute;decin saisit les sympt&ocirc;mes, l&apos;historique m&eacute;dical et les r&eacute;sultats d&apos;examens.
                          L&apos;IA propose une <strong className="text-white">liste de diagnostics diff&eacute;rentiels class&eacute;s par probabilit&eacute;</strong>,
                          avec les examens compl&eacute;mentaires recommand&eacute;s. Le m&eacute;decin reste d&eacute;cisionnaire,
                          mais avec un assistant qui conna&icirc;t toute la litt&eacute;rature m&eacute;dicale mondiale.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Diagnostic diff\u00e9rentiel", "Probabilit\u00e9s", "Litt\u00e9rature m\u00e9dicale", "Examens sugg\u00e9r\u00e9s", "Historique patient"].map((tag) => (
                            <span key={tag} className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-lg text-xs font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>

                <Reveal delay={0.15}>
                  <GlassCard className="p-8 border-emerald-500/20">
                    <div className="flex items-start gap-6">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                          <Microscope className="w-7 h-7 text-emerald-400" />
                        </div>
                        <div className="mt-3 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                          <span className="text-emerald-300 text-xs font-extrabold">LAB</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Analyse de Laboratoire IA</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          L&apos;IA interpr&egrave;te automatiquement les r&eacute;sultats de laboratoire en les croisant
                          avec le dossier patient. D&eacute;tection d&apos;anomalies subtiles, alertes sur les valeurs
                          critiques, tendances longitudinales. <strong className="text-white">Les r&eacute;sultats sont analys&eacute;s
                          en secondes</strong> au lieu d&apos;heures.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["H\u00e9matologie", "Biochimie", "Alertes critiques", "Tendances", "Cross-r\u00e9f\u00e9rence"].map((tag) => (
                            <span key={tag} className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-lg text-xs font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>
              </div>
            </section>

            {/* ── Section 3: Triage & interactions médicamenteuses ── */}
            <section id="triage" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-red-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Triage Intelligent &amp; V&eacute;rification des Interactions
                  </h2>
                </div>
              </Reveal>

              <div className="grid lg:grid-cols-2 gap-5">
                <GlassCard className="p-8 border-red-500/20" delay={0}>
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
                    <Activity className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Triage Patients IA</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    L&apos;IA analyse les sympt&ocirc;mes et attribue un niveau d&apos;urgence pour r&eacute;duire les temps d&apos;attente de 60% et prioriser les cas critiques.
                  </p>
                  <ul className="space-y-2.5">
                    {["Analyse sympt\u00f4mes en temps r\u00e9el", "Classification urgence 5 niveaux", "Orientation sp\u00e9cialiste automatique", "Int\u00e9gration dossier patient", "Alertes cas critiques", "Protocoles cliniques int\u00e9gr\u00e9s"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-red-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <GlassCard className="p-8 border-orange-500/20" delay={0.1}>
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                    <Pill className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">V&eacute;rification Interactions</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    L&apos;IA v&eacute;rifie automatiquement les interactions m&eacute;dicamenteuses et alerte le m&eacute;decin avant la prescription.
                  </p>
                  <ul className="space-y-2.5">
                    {["Interactions m\u00e9dicament-m\u00e9dicament", "Contre-indications patient", "Allergies crois\u00e9es", "Posologie intelligente", "Alertes temps r\u00e9el", "Base de donn\u00e9es DZ + internationale"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-orange-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>

              <Reveal delay={0.2}>
                <div className="mt-8 backdrop-blur-xl bg-red-500/[0.04] border border-red-500/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-red-400" />
                    S&eacute;curit&eacute; et conformit&eacute;
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Toutes nos solutions IA sant&eacute; sont d&eacute;velopp&eacute;es avec la s&eacute;curit&eacute; des donn&eacute;es patients comme
                    priorit&eacute; absolue. Chiffrement de bout en bout, h&eacute;bergement s&eacute;curis&eacute;, tra&ccedil;abilit&eacute; compl&egrave;te,
                    et conformit&eacute; aux r&eacute;glementations en vigueur. L&apos;IA assiste, le m&eacute;decin d&eacute;cide toujours.
                  </p>
                </div>
              </Reveal>
            </section>

            {/* ── Section 4: Télémédecine intelligente ── */}
            <section id="telemedecine" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    T&eacute;l&eacute;m&eacute;decine Intelligente
                  </h2>
                </div>
                <p className="text-gray-500 mb-10 leading-relaxed ml-7">
                  Des plateformes compl&egrave;tes de t&eacute;l&eacute;m&eacute;decine augment&eacute;es par l&apos;intelligence artificielle.
                </p>
              </Reveal>

              <div className="space-y-4">
                <Reveal delay={0}>
                  <div className="flex gap-6 items-start group">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Video className="w-7 h-7 text-cyan-400" />
                      </div>
                      <div className="w-px h-12 bg-gradient-to-b from-cyan-500/40 to-purple-500/40 mt-2" />
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-gray-600 tracking-widest">CONSULTATION</span>
                        <h3 className="text-lg font-bold text-white">Vid&eacute;oconsultation IA</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">
                        Plateforme de vid&eacute;oconsultation s&eacute;curis&eacute;e avec assistance IA int&eacute;gr&eacute;e. L&apos;IA transcrit
                        la consultation en temps r&eacute;el, sugg&egrave;re des questions au m&eacute;decin, et g&eacute;n&egrave;re
                        automatiquement le compte rendu m&eacute;dical. Compatible mobile pour les zones rurales.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-lg text-xs font-medium">HD s&eacute;curis&eacute;e</span>
                        <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-lg text-xs font-medium">Transcription IA</span>
                        <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-lg text-xs font-medium">Mobile-first</span>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="flex gap-6 items-start group">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <FileText className="w-7 h-7 text-purple-400" />
                      </div>
                      <div className="w-px h-12 bg-gradient-to-b from-purple-500/40 to-emerald-500/40 mt-2" />
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-gray-600 tracking-widest">DOSSIER</span>
                        <h3 className="text-lg font-bold text-white">Dossier Patient &Eacute;lectronique IA</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">
                        Dossier m&eacute;dical &eacute;lectronique enrichi par l&apos;IA. Synth&egrave;se automatique de l&apos;historique,
                        alertes sur les risques, rappels de suivi, tendances des constantes vitales.
                        Accessible de mani&egrave;re s&eacute;curis&eacute;e par le patient et ses m&eacute;decins autoris&eacute;s.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-lg text-xs font-medium">Synth&egrave;se auto</span>
                        <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-lg text-xs font-medium">Alertes risques</span>
                        <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-lg text-xs font-medium">Acc&egrave;s s&eacute;curis&eacute;</span>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="flex gap-6 items-start group">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Bot className="w-7 h-7 text-emerald-400" />
                      </div>
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-gray-600 tracking-widest">SUIVI</span>
                        <h3 className="text-lg font-bold text-white">Chatbot M&eacute;dical &amp; Suivi &agrave; Distance</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">
                        Chatbot m&eacute;dical intelligent pour le pr&eacute;-diagnostic, la prise de rendez-vous,
                        les rappels de m&eacute;dicaments, et le suivi post-consultation. Disponible en
                        fran&ccedil;ais et arabe, 24h/24, sur WhatsApp et web. Escalade automatique vers
                        un m&eacute;decin si n&eacute;cessaire.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-lg text-xs font-medium">WhatsApp</span>
                        <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-lg text-xs font-medium">FR/AR</span>
                        <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-lg text-xs font-medium">24/7</span>
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
                    Pourquoi Symloop pour la Sant&eacute; IA
                  </h2>
                </div>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-3 mb-12">
                {[
                  { icon: Shield, title: "S\u00e9curit\u00e9 des donn\u00e9es patients", desc: "Chiffrement de bout en bout, h\u00e9bergement s\u00e9curis\u00e9, conformit\u00e9 aux normes m\u00e9dicales" },
                  { icon: Cpu, title: "IA de pointe en imagerie", desc: "Mod\u00e8les deep learning entra\u00een\u00e9s sur des millions d'images m\u00e9dicales valid\u00e9es" },
                  { icon: Users, title: "\u00c9quipe sant\u00e9 + tech", desc: "Collaboration avec des professionnels de sant\u00e9 pour valider chaque solution" },
                  { icon: Globe, title: "Adapt\u00e9 \u00e0 l'Alg\u00e9rie", desc: "Solutions bilingues FR/AR, compatible r\u00e9seau mobile, accessible zones rurales" },
                  { icon: Zap, title: "D\u00e9ploiement progressif", desc: "Int\u00e9gration avec les syst\u00e8mes existants, formation \u00e9quipes m\u00e9dicales incluse" },
                  { icon: Star, title: "Validation clinique", desc: "Chaque module IA est test\u00e9 et valid\u00e9 par des praticiens avant d\u00e9ploiement" },
                  { icon: Target, title: "Impact mesurable", desc: "KPIs sant\u00e9 d\u00e9finis ensemble : temps d'attente, pr\u00e9cision diagnostic, satisfaction" },
                  { icon: Rocket, title: "Support continu", desc: "Maintenance, mises \u00e0 jour des mod\u00e8les IA, et support technique permanent" },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/[0.02] transition-colors">
                      <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-emerald-400" />
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
                  <h4 className="text-xl font-bold text-white mb-4">Notre engagement sant&eacute;</h4>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {[
                      { num: "01", text: "L'IA assiste, le m\u00e9decin d\u00e9cide toujours \u2014 z\u00e9ro compromis sur la s\u00e9curit\u00e9 patient" },
                      { num: "02", text: "Donn\u00e9es patients chiffr\u00e9es et h\u00e9berg\u00e9es en conformit\u00e9 totale" },
                      { num: "03", text: "Validation clinique de chaque module avant mise en production" },
                    ].map((item, i) => (
                      <div key={i} className="text-center">
                        <div className="text-3xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">{item.num}</div>
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
                    Questions Fr&eacute;quentes sur l&apos;IA Sant&eacute;
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
                    { href: "/blog/logiciel-clinique-cabinet-medical-algerie-2026", label: "Logiciel Clinique & Cabinet M\u00e9dical Alg\u00e9rie 2026" },
                    { href: "/blog/intelligence-artificielle-automatisation-business-algerie-2026", label: "Intelligence Artificielle & Automatisation Business Alg\u00e9rie 2026" },
                    { href: "/blog/developpement-application-mobile-algerie-2026", label: "D\u00e9veloppement Application Mobile Alg\u00e9rie 2026" },
                    { href: "/blog/solutions-informatiques-algerie-2026", label: "Solutions Informatiques Alg\u00e9rie 2026" },
                  ].map((link, i) => (
                    <Link key={i} href={link.href} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-emerald-500/[0.06] hover:border-emerald-500/20 transition-all text-sm text-gray-500 hover:text-emerald-400">
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
                {(blog?.tags || ["IA sant\u00e9 alg\u00e9rie", "t\u00e9l\u00e9m\u00e9decine alg\u00e9rie", "diagnostic IA", "analyse images m\u00e9dicales", "triage patients IA", "logiciel m\u00e9dical IA", "e-sant\u00e9 alg\u00e9rie 2026"]).map((tag, i) => (
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
          <FloatingOrb color="radial-gradient(circle, #10b981, transparent 70%)" size="450px" x="5%" y="-25%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="400px" x="65%" y="15%" delay={4} />
          <FloatingOrb color="radial-gradient(circle, #8b5cf6, transparent 70%)" size="350px" x="35%" y="50%" delay={7} />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 backdrop-blur-md border border-emerald-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-8">
                <Heart className="w-3.5 h-3.5" />
                Sant&eacute; IA
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Transformez la Sant&eacute; avec{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  l&apos;Intelligence Artificielle
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-4 leading-relaxed">
                Que vous soyez clinique, h&ocirc;pital, laboratoire ou professionnel de sant&eacute;, l&apos;IA peut
                am&eacute;liorer vos diagnostics, optimiser vos processus et sauver des vies.
              </p>
              <p className="text-gray-500 text-base mb-10 leading-relaxed">
                <strong className="text-white">Consultation gratuite.</strong> Appelez-nous pour discuter de votre projet sant&eacute; IA.
                Z&eacute;ro engagement, confidentialit&eacute; totale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/213549575512?text=Bonjour, je veux d%C3%A9velopper une solution IA sant%C3%A9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-white text-gray-950 px-8 py-4 rounded-2xl font-semibold hover:bg-emerald-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Consultation Sant&eacute; IA WhatsApp
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
                    <GlassCard className="p-6 h-full hover:border-emerald-500/20 transition-colors">
                      <span className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase mb-3 block">{post.category}</span>
                      <h3 className="text-white font-semibold text-sm group-hover:text-emerald-400 transition-colors mb-2">{post.title}</h3>
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
