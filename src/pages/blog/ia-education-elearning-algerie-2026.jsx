"use client";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Zap, CheckCircle, TrendingUp, MessageCircle, BarChart3, Target, Cpu, Rocket, Users, Building2, ChevronRight, Phone, Brain, Bot, Sparkles, Eye, Cog, LineChart, Shield, Globe, Star, Layers, Activity, Database, Mail, Share2, Lightbulb, Award, Timer, BookOpen, GraduationCap, PenTool, FileText, ClipboardList, Puzzle, MonitorPlay, BarChart2 } from "lucide-react";
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

export default function IAEducationElearningAlgerie2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const blog = getBlogBySlug('ia-education-elearning-algerie-2026');
  const relatedBlogs = getRelatedBlogs('ia-education-elearning-algerie-2026', 3);

  const studentEngagement = useCounter(85, 2500, statsInView);
  const gradingTime = useCounter(90, 2000, statsInView);
  const performanceBoost = useCounter(40, 2000, statsInView);

  const faqItems = [
    {
      question: "Comment l'IA peut am\u00e9liorer l'\u00e9ducation en Alg\u00e9rie ?",
      answer: "L'IA transforme l'\u00e9ducation alg\u00e9rienne en personnalisant l'apprentissage pour chaque \u00e9tudiant. L'apprentissage adaptatif ajuste le contenu et le rythme selon le niveau de chaque apprenant, la correction automatique lib\u00e8re les enseignants pour l'accompagnement individuel, et les tuteurs virtuels IA offrent un soutien 24/7 en fran\u00e7ais et arabe. Symloop d\u00e9veloppe ces solutions pour les \u00e9tablissements alg\u00e9riens. Contact : +213 549 575 512."
    },
    {
      question: "Qu'est-ce que l'apprentissage adaptatif par IA ?",
      answer: "L'apprentissage adaptatif utilise l'IA pour analyser en temps r\u00e9el les forces et faiblesses de chaque \u00e9tudiant. Le syst\u00e8me ajuste automatiquement la difficult\u00e9, le type de contenu (vid\u00e9o, texte, quiz), et le rythme de progression. Un \u00e9tudiant qui ma\u00eetrise un concept avance plus vite, tandis que celui qui a des difficult\u00e9s re\u00e7oit des exercices suppl\u00e9mentaires cibl\u00e9s. R\u00e9sultat : +40% de r\u00e9ussite en moyenne."
    },
    {
      question: "L'IA peut-elle corriger des copies en arabe et fran\u00e7ais ?",
      answer: "Oui, les syst\u00e8mes de correction automatique IA g\u00e8rent parfaitement le fran\u00e7ais et l'arabe. Pour les QCM et exercices structur\u00e9s, la correction est instantan\u00e9e avec 100% de pr\u00e9cision. Pour les r\u00e9dactions et questions ouvertes, l'IA \u00e9value la coh\u00e9rence, la grammaire, le contenu et donne un feedback d\u00e9taill\u00e9. L'enseignant peut valider et ajuster si n\u00e9cessaire. Gain de temps : 90% sur la correction."
    },
    {
      question: "Comment d\u00e9tecter le plagiat avec l'IA en Alg\u00e9rie ?",
      answer: "L'IA anti-plagiat analyse les travaux \u00e9tudiants en les comparant \u00e0 des millions de sources (internet, bases de donn\u00e9es acad\u00e9miques, travaux pr\u00e9c\u00e9dents). Elle d\u00e9tecte aussi le plagiat stylistique (texte r\u00e9\u00e9crit) et le contenu g\u00e9n\u00e9r\u00e9 par IA. Fonctionnel en fran\u00e7ais, arabe et anglais. Indispensable pour maintenir l'int\u00e9grit\u00e9 acad\u00e9mique dans les universit\u00e9s et lyc\u00e9es alg\u00e9riens."
    },
    {
      question: "Symloop peut-il d\u00e9velopper une plateforme e-learning compl\u00e8te ?",
      answer: "Oui, Symloop d\u00e9veloppe des plateformes e-learning compl\u00e8tes avec : cours interactifs, vid\u00e9os, quiz adaptatifs, correction automatique, tableau de bord enseignant, analytics \u00e9tudiants, certification, gamification, et application mobile. Le tout en fran\u00e7ais et arabe, optimis\u00e9 pour le r\u00e9seau mobile alg\u00e9rien. Contactez-nous au +213 549 575 512 pour discuter de votre projet \u00e9ducatif."
    }
  ];

  return (
    <>
      <Head>
        <title>IA pour l&apos;\u00c9ducation & E-learning Alg\u00e9rie 2026 | Apprentissage Adaptatif & Tuteurs IA | Symloop</title>
        <meta name="description" content="Solutions IA pour l'\u00e9ducation en Alg\u00e9rie. Apprentissage adaptatif, correction automatique, analyse des performances \u00e9tudiants, tuteurs virtuels IA. Plateformes e-learning intelligentes. Contact: +213 549 575 512." />
        <meta name="keywords" content="IA \u00e9ducation alg\u00e9rie, e-learning alg\u00e9rie, apprentissage adaptatif IA, correction automatique IA, tuteur virtuel IA, plateforme e-learning alg\u00e9rie 2026, edtech alg\u00e9rie, intelligence artificielle \u00e9ducation" />
        <link rel="canonical" href="https://symloop.com/blog/ia-education-elearning-algerie-2026/" />

        <meta property="og:title" content="IA pour l'\u00c9ducation & E-learning en Alg\u00e9rie 2026 | Symloop" />
        <meta property="og:description" content="Solutions IA pour l'\u00e9ducation alg\u00e9rienne. Apprentissage adaptatif, correction IA, tuteurs virtuels, analytics \u00e9tudiants." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/ia-education-elearning-algerie-2026/" />
        <meta property="og:site_name" content="Symloop" />
        <meta property="og:locale" content="fr_DZ" />
        <meta property="og:locale:alternate" content="ar_DZ" />
        <meta property="og:locale:alternate" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IA \u00c9ducation & E-learning Alg\u00e9rie 2026 | Symloop" />
        <meta name="twitter:description" content="Solutions IA pour l'\u00e9ducation en Alg\u00e9rie. Apprentissage adaptatif, correction automatique, tuteurs virtuels IA." />

        {/* Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "IA pour l'\u00c9ducation & E-learning en Alg\u00e9rie 2026",
            "description": "Guide complet sur l'IA dans l'\u00e9ducation en Alg\u00e9rie. Apprentissage adaptatif, correction automatique, tuteurs virtuels, analytics \u00e9tudiants, d\u00e9tection plagiat.",
            "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
            "publisher": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
            "datePublished": "2026-04-01",
            "dateModified": "2026-04-01",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://symloop.com/blog/ia-education-elearning-algerie-2026/" },
            "articleSection": "\u00c9ducation & IA",
            "inLanguage": "fr-DZ",
            "keywords": "IA \u00e9ducation alg\u00e9rie, e-learning alg\u00e9rie, apprentissage adaptatif, correction automatique IA, tuteur virtuel"
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
              { "@type": "ListItem", "position": 3, "name": "IA \u00c9ducation & E-learning Alg\u00e9rie 2026", "item": "https://symloop.com/blog/ia-education-elearning-algerie-2026/" }
            ]
          })}
        </script>

        {/* Speakable */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "IA \u00c9ducation E-learning Alg\u00e9rie 2026",
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "[data-speakable]", "#faq"] },
            "url": "https://symloop.com/blog/ia-education-elearning-algerie-2026/"
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
            "knowsAbout": ["IA \u00c9ducation", "E-learning", "Apprentissage Adaptatif", "Correction Automatique", "Tuteur Virtuel", "EdTech"],
            "areaServed": { "@type": "Country", "name": "Algeria" }
          })}
        </script>
      </Head>

      <div className={`min-h-screen bg-gray-950 ${isRTL ? 'rtl' : 'ltr'}`}>

        {/* ═══════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════ */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <FloatingOrb color="radial-gradient(circle, #3b82f6, transparent 70%)" size="650px" x="-8%" y="-10%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #8b5cf6, transparent 70%)" size="550px" x="55%" y="5%" delay={2} />
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="500px" x="25%" y="50%" delay={5} />
          <FloatingOrb color="radial-gradient(circle, #3b82f6, transparent 70%)" size="400px" x="75%" y="55%" delay={8} />
          <FloatingOrb color="radial-gradient(circle, #8b5cf6, transparent 70%)" size="350px" x="5%" y="65%" delay={11} />

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
                  <li><Link href="/" className="hover:text-blue-400 transition-colors">Accueil</Link></li>
                  <li className="text-gray-700">/</li>
                  <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
                  <li className="text-gray-700">/</li>
                  <li className="text-blue-400">IA &Eacute;ducation &amp; E-learning Alg&eacute;rie 2026</li>
                </ol>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="bg-blue-500/20 text-blue-300 backdrop-blur-md border border-blue-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5" />
                  &Eacute;ducation IA
                </span>
                <span className="bg-purple-500/20 text-purple-300 backdrop-blur-md border border-purple-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                  2026
                </span>
                <span className="bg-cyan-500/20 text-cyan-300 backdrop-blur-md border border-cyan-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                  E-learning
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                IA pour l&apos;{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  &Eacute;ducation
                </span>{" "}
                &amp; E-learning
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl">
                  en{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
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
                L&apos;IA personnalise l&apos;apprentissage pour chaque &eacute;tudiant alg&eacute;rien. Fini le mod&egrave;le
                unique &mdash; chaque apprenant progresse &agrave; son rythme, avec un contenu adapt&eacute; &agrave;
                ses forces et faiblesses, guid&eacute; par un tuteur IA disponible 24h/24.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="flex items-center gap-8 text-xs text-gray-500 tracking-wide uppercase"
              >
                <div className="flex items-center gap-2"><User className="w-3.5 h-3.5" /> Symloop EdTech Team</div>
                <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> 1 Avril 2026</div>
                <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> 20 min</div>
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
              <div data-speakable="summary" className="backdrop-blur-xl bg-white/[0.04] border border-blue-500/20 rounded-3xl p-8">
                <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">En bref</h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  <strong className="text-white">Symloop</strong> d&eacute;veloppe des solutions IA pour l&apos;&eacute;ducation en Alg&eacute;rie.
                  Apprentissage adaptatif, correction automatique, analyse des performances &eacute;tudiants,
                  tuteurs virtuels IA. Plateformes e-learning intelligentes.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">Contact :</strong> +213 549 575 512 &mdash; consultation gratuite.
                  Technologies : NLP, Machine Learning, Deep Learning, LLM, Analytics.
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
                    { num: "01", title: "L'IA transforme l'\u00e9ducation alg\u00e9rienne", id: "transformation" },
                    { num: "02", title: "Apprentissage adaptatif & tuteurs virtuels", id: "adaptatif" },
                    { num: "03", title: "Correction automatique & d\u00e9tection plagiat", id: "correction" },
                    { num: "04", title: "Analytics \u00e9tudiants & g\u00e9n\u00e9ration contenu", id: "analytics" },
                    { num: "05", title: "Pourquoi Symloop pour l'EdTech", id: "pourquoi" },
                    { num: "06", title: "Questions fr\u00e9quentes", id: "faq" },
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

            {/* ── Section 1: L'IA transforme l'éducation ── */}
            <section id="transformation" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    L&apos;IA Transforme l&apos;&Eacute;ducation Alg&eacute;rienne
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="backdrop-blur-xl bg-blue-500/[0.06] border border-blue-500/20 rounded-2xl p-8 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">11 millions d&apos;&eacute;l&egrave;ves, un syst&egrave;me &agrave; moderniser</h3>
                      <p className="text-gray-400 leading-relaxed">
                        L&apos;Alg&eacute;rie compte plus de 11 millions d&apos;&eacute;l&egrave;ves et &eacute;tudiants. Le mod&egrave;le &eacute;ducatif traditionnel,
                        o&ugrave; un seul enseignant g&egrave;re 40+ &eacute;l&egrave;ves avec le m&ecirc;me contenu, atteint ses limites.
                        L&apos;IA offre une solution : <strong className="text-white">un enseignement personnalis&eacute; pour chaque apprenant</strong>,
                        sans multiplier le nombre d&apos;enseignants.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {[
                  { value: "+40%", label: "R\u00e9ussite", sub: "avec apprentissage adaptatif" },
                  { value: "-90%", label: "Temps correction", sub: "gr\u00e2ce \u00e0 l'IA" },
                  { value: "85%", label: "Engagement", sub: "\u00e9tudiants avec tuteur IA" },
                  { value: "24/7", label: "Disponibilit\u00e9", sub: "tuteur virtuel IA" },
                ].map((stat, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <GlassCard className="p-6 text-center">
                      <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
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
                  Les pays leaders en &eacute;ducation (Finlande, Cor&eacute;e du Sud, Singapour) int&egrave;grent d&eacute;j&agrave; l&apos;IA
                  dans leurs syst&egrave;mes &eacute;ducatifs. <strong className="text-white">L&apos;Alg&eacute;rie peut faire un bond en
                  avant</strong> en adoptant ces technologies maintenant, sans passer par toutes les &eacute;tapes
                  interm&eacute;diaires.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Imaginez un &eacute;l&egrave;ve &agrave; Tamanrasset qui b&eacute;n&eacute;ficie du m&ecirc;me niveau de soutien p&eacute;dagogique
                  qu&apos;un &eacute;l&egrave;ve &agrave; Alger. Un tuteur IA disponible &agrave; minuit pendant les r&eacute;visions.
                  Un enseignant lib&eacute;r&eacute; de 90% de la correction pour se concentrer sur l&apos;accompagnement humain.
                  <strong className="text-gray-300"> C&apos;est l&apos;&eacute;cole du futur, et elle commence maintenant.</strong>
                </p>
              </Reveal>
            </section>

            {/* ── Section 2: Apprentissage adaptatif & tuteurs ── */}
            <section id="adaptatif" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-px h-8 bg-gradient-to-b from-purple-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Apprentissage Adaptatif &amp; Tuteurs Virtuels IA
                  </h2>
                </div>
                <p className="text-gray-500 mb-10 leading-relaxed ml-7">
                  Chaque &eacute;tudiant est unique. Son parcours d&apos;apprentissage devrait l&apos;&ecirc;tre aussi.
                </p>
              </Reveal>

              <div className="space-y-6">
                <Reveal delay={0}>
                  <GlassCard className="p-8 border-purple-500/20">
                    <div className="flex items-start gap-6">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                          <Brain className="w-7 h-7 text-purple-400" />
                        </div>
                        <div className="mt-3 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                          <span className="text-purple-300 text-xs font-extrabold">+40%</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Apprentissage Adaptatif</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          L&apos;IA analyse en temps r&eacute;el les r&eacute;ponses, le temps de r&eacute;flexion, les patterns d&apos;erreurs
                          et le style d&apos;apprentissage de chaque &eacute;tudiant. Elle ajuste automatiquement
                          <strong className="text-white"> la difficult&eacute;, le format du contenu et le rythme</strong>.
                          Un &eacute;l&egrave;ve qui ma&icirc;trise les maths avanc&eacute;es mais galère en physique aura un parcours
                          totalement diff&eacute;rent de son camarade.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Parcours personnalis\u00e9", "Difficult\u00e9 adaptive", "Multi-format", "Progression optimis\u00e9e", "FR/AR"].map((tag) => (
                            <span key={tag} className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-lg text-xs font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>

                <Reveal delay={0.1}>
                  <GlassCard className="p-8 border-blue-500/20">
                    <div className="flex items-start gap-6">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                          <Bot className="w-7 h-7 text-blue-400" />
                        </div>
                        <div className="mt-3 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30">
                          <span className="text-blue-300 text-xs font-extrabold">24/7</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Tuteurs Virtuels IA</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          Un tuteur personnel disponible <strong className="text-white">24h/24, 7j/7</strong>, qui ne perd
                          jamais patience. L&apos;&eacute;tudiant pose des questions en fran&ccedil;ais ou en arabe et
                          re&ccedil;oit des explications claires, des exemples adapt&eacute;s &agrave; son niveau, et
                          des exercices suppl&eacute;mentaires cibl&eacute;s sur ses difficult&eacute;s.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Chat intelligent", "Explications d\u00e9taill\u00e9es", "Exercices cibl\u00e9s", "Patience infinie", "Multilingue"].map((tag) => (
                            <span key={tag} className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-lg text-xs font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>

                <Reveal delay={0.15}>
                  <GlassCard className="p-8 border-cyan-500/20">
                    <div className="flex items-start gap-6">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                          <Puzzle className="w-7 h-7 text-cyan-400" />
                        </div>
                        <div className="mt-3 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30">
                          <span className="text-cyan-300 text-xs font-extrabold">FUN</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Gamification Intelligente</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          L&apos;IA rend l&apos;apprentissage engageant avec des <strong className="text-white">quiz interactifs,
                          des d&eacute;fis personnalis&eacute;s, des badges et des classements</strong>. Les m&eacute;canismes de jeu
                          sont calibr&eacute;s par l&apos;IA pour maintenir la motivation sans cr&eacute;er de frustration.
                          Chaque &eacute;tudiant progresse dans sa zone de challenge optimal.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Quiz adaptatifs", "Badges & r\u00e9compenses", "D\u00e9fis personnalis\u00e9s", "Classements", "Motivation IA"].map((tag) => (
                            <span key={tag} className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-lg text-xs font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>
              </div>
            </section>

            {/* ── Section 3: Correction automatique & plagiat ── */}
            <section id="correction" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-green-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Correction Automatique &amp; D&eacute;tection de Plagiat
                  </h2>
                </div>
              </Reveal>

              <div className="grid lg:grid-cols-2 gap-5">
                <GlassCard className="p-8 border-green-500/20" delay={0}>
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                    <PenTool className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Correction IA</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    L&apos;IA corrige les QCM instantan&eacute;ment et &eacute;value les r&eacute;dactions avec un feedback d&eacute;taill&eacute; personnalis&eacute;. Gain : 90% du temps de correction.
                  </p>
                  <ul className="space-y-2.5">
                    {["QCM & exercices instantan\u00e9s", "R\u00e9dactions FR/AR \u00e9valu\u00e9es", "Feedback d\u00e9taill\u00e9 personnalis\u00e9", "Bar\u00e8me intelligent", "Coh\u00e9rence inter-correcteurs", "Export notes automatique"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-green-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <GlassCard className="p-8 border-red-500/20" delay={0.1}>
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Anti-plagiat IA</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    D&eacute;tection avanc&eacute;e du plagiat, y compris le contenu r&eacute;&eacute;crit et g&eacute;n&eacute;r&eacute; par IA. Fonctionnel en fran&ccedil;ais, arabe et anglais.
                  </p>
                  <ul className="space-y-2.5">
                    {["Comparaison millions de sources", "D\u00e9tection plagiat stylistique", "D\u00e9tection contenu g\u00e9n\u00e9r\u00e9 IA", "Support FR/AR/EN", "Rapport d\u00e9taill\u00e9 avec sources", "Int\u00e9gration plateforme LMS"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-red-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>

              <Reveal delay={0.2}>
                <div className="mt-8 backdrop-blur-xl bg-blue-500/[0.04] border border-blue-500/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-blue-400" />
                    L&apos;enseignant augment&eacute;
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    L&apos;IA ne remplace pas l&apos;enseignant. Elle le lib&egrave;re des t&acirc;ches r&eacute;p&eacute;titives (correction, suivi administratif)
                    pour qu&apos;il se concentre sur ce qu&apos;il fait de mieux : inspirer, accompagner, et transmettre sa passion.
                    Un enseignant qui corrige 90% moins de copies a 90% plus de temps pour ses &eacute;l&egrave;ves.
                  </p>
                </div>
              </Reveal>
            </section>

            {/* ── Section 4: Analytics & génération contenu ── */}
            <section id="analytics" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-px h-8 bg-gradient-to-b from-amber-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Analytics &Eacute;tudiants &amp; G&eacute;n&eacute;ration de Contenu IA
                  </h2>
                </div>
                <p className="text-gray-500 mb-10 leading-relaxed ml-7">
                  Des donn&eacute;es actionables pour les enseignants et du contenu g&eacute;n&eacute;r&eacute; automatiquement.
                </p>
              </Reveal>

              <div className="space-y-4">
                <Reveal delay={0}>
                  <div className="flex gap-6 items-start group">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <BarChart3 className="w-7 h-7 text-amber-400" />
                      </div>
                      <div className="w-px h-12 bg-gradient-to-b from-amber-500/40 to-purple-500/40 mt-2" />
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-gray-600 tracking-widest">ANALYTICS</span>
                        <h3 className="text-lg font-bold text-white">Tableau de Bord Enseignant IA</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">
                        Vue compl&egrave;te des performances de chaque &eacute;tudiant et de la classe. L&apos;IA identifie les
                        &eacute;tudiants en difficult&eacute;, les concepts mal compris par la majorit&eacute;, et sugg&egrave;re des
                        actions correctives. Alertes automatiques pour les d&eacute;crocheurs potentiels.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-amber-500/10 text-amber-400 px-3 py-1 rounded-lg text-xs font-medium">Performance individuelle</span>
                        <span className="bg-amber-500/10 text-amber-400 px-3 py-1 rounded-lg text-xs font-medium">Alertes d&eacute;crochage</span>
                        <span className="bg-amber-500/10 text-amber-400 px-3 py-1 rounded-lg text-xs font-medium">Suggestions IA</span>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="flex gap-6 items-start group">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Sparkles className="w-7 h-7 text-purple-400" />
                      </div>
                      <div className="w-px h-12 bg-gradient-to-b from-purple-500/40 to-blue-500/40 mt-2" />
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-gray-600 tracking-widest">CONTENU</span>
                        <h3 className="text-lg font-bold text-white">G&eacute;n&eacute;ration de Contenu P&eacute;dagogique</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">
                        L&apos;IA g&eacute;n&egrave;re automatiquement des quiz, des exercices, des r&eacute;sum&eacute;s de cours, et des
                        explications adapt&eacute;es au niveau de l&apos;&eacute;tudiant. Les enseignants cr&eacute;ent 10x plus de
                        contenu p&eacute;dagogique en 10x moins de temps.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-lg text-xs font-medium">Quiz auto</span>
                        <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-lg text-xs font-medium">Exercices IA</span>
                        <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-lg text-xs font-medium">R&eacute;sum&eacute;s intelligents</span>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="flex gap-6 items-start group">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <MonitorPlay className="w-7 h-7 text-blue-400" />
                      </div>
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-gray-600 tracking-widest">PLATEFORME</span>
                        <h3 className="text-lg font-bold text-white">Plateforme E-learning Compl&egrave;te</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">
                        Solution e-learning tout-en-un : cours vid&eacute;o, documents interactifs, quiz adaptatifs,
                        forums de discussion IA, certification en ligne, gestion administrative. Accessible
                        sur mobile et optimis&eacute;e pour le r&eacute;seau alg&eacute;rien.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-lg text-xs font-medium">Tout-en-un</span>
                        <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-lg text-xs font-medium">Mobile-first</span>
                        <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-lg text-xs font-medium">Hors-ligne</span>
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
                  <div className="w-px h-8 bg-gradient-to-b from-indigo-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Pourquoi Symloop pour l&apos;EdTech IA
                  </h2>
                </div>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-3 mb-12">
                {[
                  { icon: Brain, title: "IA p\u00e9dagogique de pointe", desc: "Mod\u00e8les NLP et ML sp\u00e9cialement entra\u00een\u00e9s pour le contexte \u00e9ducatif alg\u00e9rien" },
                  { icon: Globe, title: "Bilingue FR/AR natif", desc: "Contenu et interface parfaitement adapt\u00e9s aux deux langues d'enseignement" },
                  { icon: Users, title: "Exp\u00e9rience \u00e9ducation", desc: "Compr\u00e9hension des besoins des \u00e9tablissements alg\u00e9riens, du primaire \u00e0 l'universit\u00e9" },
                  { icon: Shield, title: "Donn\u00e9es prot\u00e9g\u00e9es", desc: "Confidentialit\u00e9 des donn\u00e9es \u00e9tudiants garantie, h\u00e9bergement s\u00e9curis\u00e9" },
                  { icon: Zap, title: "Optimis\u00e9 r\u00e9seau DZ", desc: "Fonctionne sur connexions lentes, mode hors-ligne disponible, l\u00e9ger en bande passante" },
                  { icon: Rocket, title: "D\u00e9ploiement rapide", desc: "Premi\u00e8re version op\u00e9rationnelle en 3-4 semaines, am\u00e9liorations continues" },
                  { icon: Star, title: "R\u00e9sultats mesurables", desc: "KPIs \u00e9ducatifs d\u00e9finis ensemble : r\u00e9ussite, engagement, satisfaction" },
                  { icon: Target, title: "Accompagnement complet", desc: "Formation enseignants, support technique, \u00e9volutions p\u00e9dagogiques" },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/[0.02] transition-colors">
                      <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-blue-400" />
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
                  <h4 className="text-xl font-bold text-white mb-4">Notre vision &eacute;ducation</h4>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {[
                      { num: "01", text: "L'IA au service de l'\u00e9galit\u00e9 des chances \u2014 m\u00eame qualit\u00e9 partout en Alg\u00e9rie" },
                      { num: "02", text: "L'enseignant reste au centre \u2014 l'IA amplifie son impact" },
                      { num: "03", text: "R\u00e9sultats mesurables ou on retravaille gratuitement" },
                    ].map((item, i) => (
                      <div key={i} className="text-center">
                        <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">{item.num}</div>
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
                    Questions Fr&eacute;quentes sur l&apos;IA &Eacute;ducation
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
                    { href: "/blog/edtech-education-algerie-2024", label: "EdTech & \u00c9ducation en Alg\u00e9rie 2024" },
                    { href: "/blog/intelligence-artificielle-automatisation-business-algerie-2026", label: "Intelligence Artificielle & Automatisation Business Alg\u00e9rie 2026" },
                    { href: "/blog/developpement-application-mobile-algerie-2026", label: "D\u00e9veloppement Application Mobile Alg\u00e9rie 2026" },
                    { href: "/blog/solutions-informatiques-algerie-2026", label: "Solutions Informatiques Alg\u00e9rie 2026" },
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
                {(blog?.tags || ["IA \u00e9ducation alg\u00e9rie", "e-learning alg\u00e9rie", "apprentissage adaptatif", "correction automatique IA", "tuteur virtuel IA", "edtech alg\u00e9rie 2026", "plateforme e-learning", "d\u00e9tection plagiat IA"]).map((tag, i) => (
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
          <FloatingOrb color="radial-gradient(circle, #3b82f6, transparent 70%)" size="450px" x="5%" y="-25%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #8b5cf6, transparent 70%)" size="400px" x="65%" y="15%" delay={4} />
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="350px" x="35%" y="50%" delay={7} />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 backdrop-blur-md border border-blue-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-8">
                <GraduationCap className="w-3.5 h-3.5" />
                &Eacute;ducation IA
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Transformez l&apos;&Eacute;ducation avec{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  l&apos;Intelligence Artificielle
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-4 leading-relaxed">
                Que vous soyez &eacute;cole, universit&eacute;, centre de formation ou &eacute;diteur &eacute;ducatif,
                l&apos;IA peut personnaliser l&apos;apprentissage et am&eacute;liorer les r&eacute;sultats de vos &eacute;tudiants.
              </p>
              <p className="text-gray-500 text-base mb-10 leading-relaxed">
                <strong className="text-white">Consultation gratuite.</strong> Appelez-nous pour discuter de votre projet EdTech IA.
                Z&eacute;ro engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/213549575512?text=Bonjour, je veux d%C3%A9velopper une solution IA %C3%A9ducation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-white text-gray-950 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Consultation EdTech IA WhatsApp
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
