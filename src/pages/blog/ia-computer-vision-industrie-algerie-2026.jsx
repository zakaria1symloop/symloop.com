"use client";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Zap, CheckCircle, TrendingUp, MessageCircle, BarChart3, Target, Cpu, Rocket, Users, Building2, ChevronRight, Phone, Brain, Bot, Sparkles, Eye, Cog, LineChart, Shield, Globe, Star, Layers, Activity, Database, Mail, Share2, Factory, ShoppingCart, Lightbulb, Award, Timer, DollarSign, PieChart, Workflow, Camera, ScanLine, AlertTriangle } from "lucide-react";
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

export default function IaComputerVisionIndustrieAlgerie2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const blog = getBlogBySlug('ia-computer-vision-industrie-algerie-2026');
  const relatedBlogs = getRelatedBlogs('ia-computer-vision-industrie-algerie-2026', 3);

  const defectAccuracy = useCounter(99, 2500, statsInView);
  const inspectionSpeed = useCounter(100, 2000, statsInView);
  const costReduction = useCounter(70, 2000, statsInView);

  const faqItems = [
    {
      question: "C'est quoi la computer vision et comment elle peut aider l'industrie alg\u00e9rienne ?",
      answer: "La computer vision est une branche de l'intelligence artificielle qui permet aux machines de 'voir' et d'analyser des images et vid\u00e9os. Pour l'industrie alg\u00e9rienne, cela signifie : contr\u00f4le qualit\u00e9 automatique avec 99.9% de pr\u00e9cision, d\u00e9tection de d\u00e9fauts invisible \u00e0 l'\u0153il humain, comptage d'inventaire instantan\u00e9, surveillance de s\u00e9curit\u00e9 intelligente, et OCR pour num\u00e9riser les documents. Symloop d\u00e9veloppe des solutions de computer vision sur mesure. Contact : +213 549 575 512."
    },
    {
      question: "Quels types de d\u00e9fauts la computer vision peut-elle d\u00e9tecter ?",
      answer: "La computer vision d\u00e9tecte tout type de d\u00e9faut visuel : fissures, rayures, d\u00e9colorations, d\u00e9formations, pi\u00e8ces manquantes, mauvais assemblage, impuret\u00e9s, d\u00e9fauts d'emballage, erreurs d'\u00e9tiquetage, et m\u00eame des d\u00e9fauts microscopiques invisibles \u00e0 l'\u0153il nu. La pr\u00e9cision atteint 99.9%, contre 85-90% pour l'inspection humaine. Et la machine ne fatigue jamais."
    },
    {
      question: "Est-ce que la computer vision n\u00e9cessite des cam\u00e9ras co\u00fbteuses ?",
      answer: "Non. Les cam\u00e9ras industrielles modernes sont devenues tr\u00e8s abordables. Pour de nombreuses applications, des cam\u00e9ras standard suffisent. Le vrai investissement est dans le logiciel IA qui analyse les images. Symloop optimise chaque solution pour utiliser le mat\u00e9riel le plus adapt\u00e9 et le plus \u00e9conomique. Dans certains cas, m\u00eame un smartphone peut suffire pour un POC (Proof of Concept)."
    },
    {
      question: "Combien de temps pour d\u00e9ployer une solution de computer vision ?",
      answer: "Un POC (preuve de concept) peut \u00eatre r\u00e9alis\u00e9 en 2 \u00e0 4 semaines avec des r\u00e9sultats mesurables. Un syst\u00e8me de production complet prend 6 \u00e0 12 semaines selon la complexit\u00e9 (nombre de cam\u00e9ras, types de d\u00e9fauts, int\u00e9grations). L'entra\u00eenement du mod\u00e8le IA s'am\u00e9liore continuellement avec de nouvelles images. Symloop vous accompagne de la conception au d\u00e9ploiement."
    },
    {
      question: "La computer vision peut-elle fonctionner dans un environnement industriel difficile ?",
      answer: "Absolument. Nos solutions sont con\u00e7ues pour les environnements industriels : poussi\u00e8re, vibrations, variations de lumi\u00e8re, temp\u00e9ratures extr\u00eames. Nous utilisons des cam\u00e9ras industrielles certifi\u00e9es, des \u00e9clairages adapt\u00e9s, et des algorithmes robustes aux conditions variables. Que ce soit une usine agroalimentaire, une cha\u00eene de montage automobile ou un chantier de construction, la computer vision s'adapte. Contactez Symloop : +213 549 575 512."
    }
  ];

  return (
    <>
      <Head>
        <title>Computer Vision & IA Industrielle Alg\u00e9rie 2026 | Contr\u00f4le Qualit\u00e9 IA | Symloop</title>
        <meta name="description" content="Solutions de computer vision et IA industrielle pour les entreprises alg\u00e9riennes. Contr\u00f4le qualit\u00e9 automatique, d\u00e9tection de d\u00e9fauts, comptage inventaire, surveillance s\u00e9curit\u00e9, OCR. Symloop. Contact: +213 549 575 512." />
        <meta name="keywords" content="computer vision alg\u00e9rie, IA industrielle alg\u00e9rie, contr\u00f4le qualit\u00e9 IA alg\u00e9rie, d\u00e9tection d\u00e9fauts IA, vision par ordinateur alg\u00e9rie, OCR alg\u00e9rie, surveillance IA alg\u00e9rie, inspection automatique alg\u00e9rie 2026" />
        <link rel="canonical" href="https://symloop.com/blog/ia-computer-vision-industrie-algerie-2026/" />

        <meta property="og:title" content="Computer Vision & IA Industrielle en Alg\u00e9rie 2026 | Symloop" />
        <meta property="og:description" content="Solutions de computer vision pour l'industrie alg\u00e9rienne. Contr\u00f4le qualit\u00e9 99.9%, d\u00e9tection d\u00e9fauts, comptage inventaire, OCR." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/ia-computer-vision-industrie-algerie-2026/" />
        <meta property="og:site_name" content="Symloop" />
        <meta property="og:locale" content="fr_DZ" />
        <meta property="og:locale:alternate" content="ar_DZ" />
        <meta property="og:locale:alternate" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Computer Vision & IA Industrielle Alg\u00e9rie 2026 | Symloop" />
        <meta name="twitter:description" content="Computer vision pour l'industrie alg\u00e9rienne. Contr\u00f4le qualit\u00e9, d\u00e9tection d\u00e9fauts, surveillance, OCR." />

        {/* Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Computer Vision & IA Industrielle en Alg\u00e9rie 2026",
            "description": "Guide complet sur la computer vision et l'IA industrielle pour les entreprises alg\u00e9riennes. Contr\u00f4le qualit\u00e9, d\u00e9tection d\u00e9fauts, comptage inventaire, surveillance, OCR.",
            "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
            "publisher": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
            "datePublished": "2026-04-01",
            "dateModified": "2026-04-01",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://symloop.com/blog/ia-computer-vision-industrie-algerie-2026/" },
            "articleSection": "Computer Vision & IA Industrielle",
            "inLanguage": "fr-DZ",
            "keywords": "computer vision alg\u00e9rie, IA industrielle alg\u00e9rie, contr\u00f4le qualit\u00e9 IA, d\u00e9tection d\u00e9fauts, OCR alg\u00e9rie"
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
              { "@type": "ListItem", "position": 3, "name": "Computer Vision & IA Industrielle Alg\u00e9rie 2026", "item": "https://symloop.com/blog/ia-computer-vision-industrie-algerie-2026/" }
            ]
          })}
        </script>

        {/* Speakable */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Computer Vision & IA Industrielle Alg\u00e9rie 2026",
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "[data-speakable]", "#faq"] },
            "url": "https://symloop.com/blog/ia-computer-vision-industrie-algerie-2026/"
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
            "knowsAbout": ["Computer Vision", "IA Industrielle", "Contr\u00f4le Qualit\u00e9", "OpenCV", "D\u00e9tection D\u00e9fauts", "OCR", "YOLO", "TensorFlow"],
            "areaServed": { "@type": "Country", "name": "Algeria" }
          })}
        </script>
      </Head>

      <div className={`min-h-screen bg-gray-950 ${isRTL ? 'rtl' : 'ltr'}`}>

        {/* ═══════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════ */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <FloatingOrb color="radial-gradient(circle, #f97316, transparent 70%)" size="650px" x="-8%" y="-10%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="550px" x="55%" y="5%" delay={2} />
          <FloatingOrb color="radial-gradient(circle, #a855f7, transparent 70%)" size="500px" x="25%" y="50%" delay={5} />
          <FloatingOrb color="radial-gradient(circle, #f97316, transparent 70%)" size="400px" x="75%" y="55%" delay={8} />
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
                  <li><Link href="/" className="hover:text-orange-400 transition-colors">Accueil</Link></li>
                  <li className="text-gray-700">/</li>
                  <li><Link href="/blog" className="hover:text-orange-400 transition-colors">Blog</Link></li>
                  <li className="text-gray-700">/</li>
                  <li className="text-orange-400">Computer Vision &amp; IA Industrielle Alg&eacute;rie 2026</li>
                </ol>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="bg-orange-500/20 text-orange-300 backdrop-blur-md border border-orange-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase flex items-center gap-2">
                  <Eye className="w-3.5 h-3.5" />
                  Computer Vision
                </span>
                <span className="bg-cyan-500/20 text-cyan-300 backdrop-blur-md border border-cyan-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                  2026
                </span>
                <span className="bg-purple-500/20 text-purple-300 backdrop-blur-md border border-purple-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                  99.9%
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                Computer Vision &amp;{" "}
                <span className="bg-gradient-to-r from-orange-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  IA Industrielle
                </span>{" "}
                en Alg&eacute;rie 2026
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg sm:text-xl text-gray-400 max-w-3xl leading-relaxed mb-10"
              >
                Donnez des yeux &agrave; vos machines. D&eacute;tectez les d&eacute;fauts avec 99.9% de pr&eacute;cision,
                comptez l&apos;inventaire en un clic, surveillez la s&eacute;curit&eacute; 24/7, et num&eacute;risez
                tous vos documents &mdash; automatiquement, sans intervention humaine.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="flex items-center gap-8 text-xs text-gray-500 tracking-wide uppercase"
              >
                <div className="flex items-center gap-2"><User className="w-3.5 h-3.5" /> Symloop Vision Team</div>
                <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> 1 Avril 2026</div>
                <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> 18 min</div>
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
              <div data-speakable="summary" className="backdrop-blur-xl bg-white/[0.04] border border-orange-500/20 rounded-3xl p-8">
                <h2 className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-3">En bref</h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  <strong className="text-white">Symloop</strong> d&eacute;veloppe des solutions de computer vision et IA industrielle
                  pour les entreprises alg&eacute;riennes. Contr&ocirc;le qualit&eacute; automatique, d&eacute;tection de d&eacute;fauts,
                  comptage inventaire, surveillance s&eacute;curit&eacute;, OCR.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">Contact :</strong> +213 549 575 512 &mdash; consultation gratuite.
                  Technologies : OpenCV, YOLO, TensorFlow, PyTorch, Detectron2, Tesseract.
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
                    { num: "01", title: "L'\u0153il qui ne fatigue jamais", id: "oeil" },
                    { num: "02", title: "Les 5 applications cl\u00e9s de la computer vision", id: "applications" },
                    { num: "03", title: "Technologies utilis\u00e9es", id: "technologies" },
                    { num: "04", title: "Secteurs industriels en Alg\u00e9rie", id: "secteurs" },
                    { num: "05", title: "Processus de d\u00e9ploiement", id: "deploiement" },
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

            {/* ── Section 1: L'œil qui ne fatigue jamais ── */}
            <section id="oeil" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-orange-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    L&apos;&OElig;il Qui Ne Fatigue Jamais
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="backdrop-blur-xl bg-orange-500/[0.06] border border-orange-500/20 rounded-2xl p-8 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">L&apos;inspection humaine a ses limites</h3>
                      <p className="text-gray-400 leading-relaxed">
                        Un inspecteur qualit&eacute; fatigue apr&egrave;s 2 heures. Il manque des d&eacute;fauts. Il est subjectif.
                        Il ne peut inspecter qu&apos;un produit &agrave; la fois. La computer vision IA inspecte
                        <strong className="text-white"> des milliers de produits par heure, avec 99.9% de pr&eacute;cision, 24h/24, sans jamais fatiguer.</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {[
                  { value: "99.9%", label: "Pr\u00e9cision", sub: "d\u00e9tection de d\u00e9fauts" },
                  { value: "100x", label: "Plus rapide", sub: "que l'inspection humaine" },
                  { value: "70%", label: "R\u00e9duction co\u00fbts", sub: "contr\u00f4le qualit\u00e9" },
                  { value: "24/7", label: "Non-stop", sub: "z\u00e9ro pause, z\u00e9ro fatigue" },
                ].map((stat, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <GlassCard className="p-6 text-center">
                      <div className="text-3xl font-extrabold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-1">
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
                  L&apos;industrie alg&eacute;rienne est en pleine modernisation. Les entreprises qui adoptent la
                  computer vision <strong className="text-white">r&eacute;duisent leurs co&ucirc;ts de qualit&eacute; de 70%</strong> tout en
                  am&eacute;liorant la qualit&eacute; de leurs produits. C&apos;est l&apos;avantage comp&eacute;titif ultime.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-lg text-gray-500 leading-relaxed mb-6">
                  Imaginez : chaque produit qui sort de votre cha&icirc;ne de production est inspect&eacute;
                  automatiquement. Les d&eacute;fauts sont d&eacute;tect&eacute;s en temps r&eacute;el. Les produits d&eacute;fectueux
                  sont retir&eacute;s avant d&apos;atteindre le client.
                  <strong className="text-gray-300"> Z&eacute;ro retour, z&eacute;ro plainte, z&eacute;ro perte.</strong>
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="backdrop-blur-xl bg-cyan-500/[0.04] border border-cyan-500/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    Au-del&agrave; du contr&ocirc;le qualit&eacute;
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    La computer vision ne se limite pas au contr&ocirc;le qualit&eacute;. Elle compte l&apos;inventaire
                    instantan&eacute;ment, surveille la s&eacute;curit&eacute; des travailleurs, lit les documents et factures,
                    et m&ecirc;me guide les robots autonomes. <strong className="text-gray-300">C&apos;est la base de l&apos;industrie 4.0.</strong>
                  </p>
                </div>
              </Reveal>
            </section>

            {/* ── Section 2: Les 5 applications clés ── */}
            <section id="applications" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-px h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Les 5 Applications Cl&eacute;s de la Computer Vision
                  </h2>
                </div>
                <p className="text-gray-500 mb-10 leading-relaxed ml-7">
                  Des yeux IA qui transforment chaque aspect de votre activit&eacute; industrielle.
                </p>
              </Reveal>

              <div className="space-y-6">
                {[
                  { icon: CheckCircle, color: "orange", title: "Contr\u00f4le Qualit\u00e9 Automatique", desc: "Inspection visuelle de chaque produit en temps r\u00e9el. D\u00e9tection de fissures, rayures, d\u00e9colorations, d\u00e9formations avec 99.9% de pr\u00e9cision. Tri automatique des produits conformes et non-conformes. Rapports qualit\u00e9 g\u00e9n\u00e9r\u00e9s automatiquement.", tags: ["99.9% pr\u00e9cision", "Temps r\u00e9el", "Tri auto", "Rapports auto"] },
                  { icon: Eye, color: "cyan", title: "D\u00e9tection de D\u00e9fauts", desc: "D\u00e9tection de d\u00e9fauts microscopiques invisibles \u00e0 l'\u0153il humain. L'IA apprend \u00e0 reconna\u00eetre chaque type de d\u00e9faut sp\u00e9cifique \u00e0 votre produit. Classification automatique par type et s\u00e9v\u00e9rit\u00e9. Alertes en temps r\u00e9el quand un probl\u00e8me syst\u00e9mique est d\u00e9tect\u00e9.", tags: ["Microscopique", "Classification", "Alertes", "Apprentissage continu"] },
                  { icon: Database, color: "purple", title: "Comptage Inventaire", desc: "Comptez des milliers d'articles en quelques secondes avec une simple cam\u00e9ra. Inventaire automatique des entrep\u00f4ts, rayonnages, palettes. Plus besoin de comptage manuel fastidieux. Pr\u00e9cision de 99%+ et gain de temps de 95%.", tags: ["Comptage instantan\u00e9", "99%+ pr\u00e9cision", "-95% temps", "Entrep\u00f4ts"] },
                  { icon: Shield, color: "green", title: "Surveillance S\u00e9curit\u00e9", desc: "D\u00e9tection automatique des situations dangereuses : absence de casque, zone interdite, chute, incendie. Alertes imm\u00e9diates aux responsables s\u00e9curit\u00e9. R\u00e9duction des accidents de travail de 80%. Conformit\u00e9 HSE automatis\u00e9e.", tags: ["D\u00e9tection danger", "Alertes temps r\u00e9el", "-80% accidents", "HSE"] },
                  { icon: Mail, color: "pink", title: "OCR & Traitement Documents", desc: "Extraction automatique de texte depuis les factures, bons de commande, documents administratifs. L'IA lit les documents en fran\u00e7ais et arabe, extrait les donn\u00e9es cl\u00e9s et les int\u00e8gre directement dans vos syst\u00e8mes. Fini la saisie manuelle.", tags: ["OCR multilingue", "Factures auto", "Extraction donn\u00e9es", "Int\u00e9gration ERP"] },
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

            {/* ── Section 3: Technologies ── */}
            <section id="technologies" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-purple-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Technologies de Computer Vision
                  </h2>
                </div>
              </Reveal>

              <div className="grid lg:grid-cols-3 gap-5 mb-10">
                <GlassCard className="p-8" delay={0}>
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">D&eacute;tection d&apos;Objets</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Localisation et identification d&apos;objets en temps r&eacute;el dans les images et vid&eacute;os.
                  </p>
                  <ul className="space-y-2.5">
                    {["YOLO v8/v9", "Detectron2", "SSD/RetinaNet", "Tracking multi-objets", "Segmentation instance", "Edge AI"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-orange-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <GlassCard className="p-8 border-cyan-500/20" delay={0.1}>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                    <Brain className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Deep Learning Vision</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    R&eacute;seaux de neurones profonds entra&icirc;n&eacute;s sur vos donn&eacute;es pour une pr&eacute;cision maximale.
                  </p>
                  <ul className="space-y-2.5">
                    {["CNN personnalis\u00e9s", "Transfer learning", "TensorFlow/PyTorch", "Data augmentation", "Mod\u00e8les l\u00e9gers (edge)", "Entra\u00eenement continu"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <GlassCard className="p-8 border-purple-500/20" delay={0.2}>
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                    <Cpu className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Infrastructure</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Mat&eacute;riel et logiciel optimis&eacute;s pour le traitement d&apos;images en temps r&eacute;el.
                  </p>
                  <ul className="space-y-2.5">
                    {["Cam\u00e9ras industrielles", "GPU edge computing", "NVIDIA Jetson", "OpenCV optimis\u00e9", "\u00c9clairage adapt\u00e9", "Dashboard temps r\u00e9el"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-purple-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </section>

            {/* ── Section 4: Secteurs industriels ── */}
            <section id="secteurs" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-green-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Secteurs Industriels en Alg&eacute;rie
                  </h2>
                </div>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-3 mb-12">
                {[
                  { icon: Factory, title: "Agroalimentaire", desc: "Tri automatique des produits, d\u00e9tection de contaminants, contr\u00f4le emballage, tra\u00e7abilit\u00e9 visuelle." },
                  { icon: Cog, title: "Automobile & M\u00e9canique", desc: "Inspection pi\u00e8ces, v\u00e9rification assemblage, d\u00e9tection de soudures d\u00e9fectueuses, mesure dimensionnelle." },
                  { icon: Building2, title: "Construction & BTP", desc: "Surveillance chantier, d\u00e9tection de fissures structures, contr\u00f4le EPI, suivi avancement." },
                  { icon: Lightbulb, title: "Pharmaceutique", desc: "Inspection blisters, v\u00e9rification \u00e9tiquetage, contr\u00f4le remplissage, conformit\u00e9 r\u00e9glementaire." },
                  { icon: ShoppingCart, title: "Textile & Confection", desc: "D\u00e9tection d\u00e9fauts tissus, contr\u00f4le couture, v\u00e9rification couleurs, tri qualit\u00e9 automatique." },
                  { icon: Zap, title: "\u00c9nergie & P\u00e9trole", desc: "Inspection pipelines, d\u00e9tection de corrosion, surveillance installations, maintenance pr\u00e9dictive visuelle." },
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

            {/* ── Section 5: Processus de déploiement ── */}
            <section id="deploiement" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-px h-8 bg-gradient-to-b from-yellow-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Processus de D&eacute;ploiement
                  </h2>
                </div>
                <p className="text-gray-500 mb-10 leading-relaxed ml-7">
                  De l&apos;audit terrain au syst&egrave;me en production, notre m&eacute;thodologie industrielle.
                </p>
              </Reveal>

              <div className="space-y-4">
                {[
                  { phase: "SEMAINE 1-2", multiplier: "01", title: "Audit Terrain & Collecte Images", color: "orange", desc: "Visite sur site, analyse du processus de production, identification des points de contr\u00f4le. Collecte d'images d'\u00e9chantillons conformes et non-conformes. D\u00e9finition des crit\u00e8res de qualit\u00e9." },
                  { phase: "SEMAINE 3-5", multiplier: "02", title: "Entra\u00eenement du Mod\u00e8le IA", color: "cyan", desc: "Annotation des images, entra\u00eenement du mod\u00e8le de d\u00e9tection, optimisation de la pr\u00e9cision. Tests en conditions r\u00e9elles. It\u00e9rations jusqu'\u00e0 atteindre 99%+ de pr\u00e9cision." },
                  { phase: "SEMAINE 6-8", multiplier: "03", title: "Int\u00e9gration & Installation", color: "purple", desc: "Installation des cam\u00e9ras et du syst\u00e8me de traitement sur votre ligne de production. Int\u00e9gration avec vos syst\u00e8mes existants (ERP, MES). Configuration des alertes et rapports." },
                  { phase: "SEMAINE 9-10", multiplier: "04", title: "Production & Optimisation", color: "green", desc: "Mise en production. Formation de vos op\u00e9rateurs. Monitoring des performances. Am\u00e9lioration continue du mod\u00e8le avec de nouvelles donn\u00e9es. Support technique continu." },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="flex gap-6 items-start group">
                      <div className="flex flex-col items-center">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-500/5 border border-${item.color}-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <span className={`text-${item.color}-400 text-xs font-extrabold`}>{item.multiplier}</span>
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
                <div className="mt-10 backdrop-blur-xl bg-gradient-to-r from-orange-500/[0.06] via-cyan-500/[0.06] to-purple-500/[0.06] border border-white/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-orange-400" />
                    POC en 2 semaines
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Pas convaincu ? Nous r&eacute;alisons un POC (Proof of Concept) en 2 semaines sur vos propres
                    produits. Vous voyez les r&eacute;sultats avant de vous engager.
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
                    Questions Fr&eacute;quentes sur la Computer Vision
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
                    { href: "/blog/iot-internet-des-objets-algerie-2026", label: "IoT & Internet des Objets Alg\u00e9rie 2026" },
                    { href: "/blog/ia-analyse-predictive-business-intelligence-algerie-2026", label: "Analyse Pr\u00e9dictive & BI IA Alg\u00e9rie 2026" },
                    { href: "/blog/ia-automatisation-processus-rpa-algerie-2026", label: "Automatisation des Processus & RPA par IA Alg\u00e9rie 2026" },
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
                {(blog?.tags || ["computer vision alg\u00e9rie", "IA industrielle", "contr\u00f4le qualit\u00e9 IA", "d\u00e9tection d\u00e9fauts", "OCR alg\u00e9rie", "surveillance IA", "inspection automatique", "industrie 4.0 alg\u00e9rie"]).map((tag, i) => (
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
          <FloatingOrb color="radial-gradient(circle, #f97316, transparent 70%)" size="450px" x="5%" y="-25%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="400px" x="65%" y="15%" delay={4} />
          <FloatingOrb color="radial-gradient(circle, #a855f7, transparent 70%)" size="350px" x="35%" y="50%" delay={7} />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 backdrop-blur-md border border-orange-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-8">
                <Eye className="w-3.5 h-3.5" />
                Computer Vision
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Donnez des Yeux IA &agrave;{" "}
                <span className="bg-gradient-to-r from-orange-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Vos Machines
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-4 leading-relaxed">
                Chaque produit d&eacute;fectueux qui passe, c&apos;est un client perdu et de l&apos;argent gaspill&eacute;.
                La computer vision &eacute;limine ce probl&egrave;me &mdash; d&eacute;finitivement.
              </p>
              <p className="text-gray-500 text-base mb-10 leading-relaxed">
                <strong className="text-white">POC gratuit en 2 semaines.</strong> Envoyez-nous des &eacute;chantillons de vos produits,
                et nous vous montrons ce que la computer vision peut faire pour vous.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/213549575512?text=Bonjour, je veux une solution de computer vision pour mon entreprise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-white text-gray-950 px-8 py-4 rounded-2xl font-semibold hover:bg-orange-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  POC Computer Vision Gratuit
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
