"use client";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Zap, CheckCircle, TrendingUp, MessageCircle, BarChart3, Target, Cpu, Rocket, Users, Building2, ChevronRight, Phone, Brain, Bot, Sparkles, Eye, Cog, LineChart, Shield, Globe, Star, Layers, Activity, Database, Mail, Share2, ShoppingCart, Lightbulb, Award, Timer, DollarSign, PieChart, Search, Heart, Package, RefreshCw, UserCheck, Tag } from "lucide-react";
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

export default function IAEcommercePersonnalisationAlgerie2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const blog = getBlogBySlug('ia-ecommerce-personnalisation-algerie-2026');
  const relatedBlogs = getRelatedBlogs('ia-ecommerce-personnalisation-algerie-2026', 3);

  const conversionBoost = useCounter(50, 2500, statsInView);
  const revenueGain = useCounter(30, 2000, statsInView);
  const cartRecovery = useCounter(35, 2000, statsInView);

  const faqItems = [
    {
      question: "Comment l'IA am\u00e9liore les ventes e-commerce en Alg\u00e9rie ?",
      answer: "L'IA transforme l'e-commerce alg\u00e9rien en personnalisant l'exp\u00e9rience d'achat pour chaque visiteur. Les recommandations produits IA augmentent le panier moyen de 30-50%, la recherche intelligente am\u00e9liore la d\u00e9couverte produits, et le pricing dynamique optimise les marges en temps r\u00e9el. Symloop int\u00e8gre ces technologies dans les plateformes e-commerce alg\u00e9riennes. Contact : +213 549 575 512."
    },
    {
      question: "Qu'est-ce que la personnalisation IA pour un site e-commerce ?",
      answer: "La personnalisation IA analyse le comportement de chaque visiteur (historique de navigation, achats pr\u00e9c\u00e9dents, pr\u00e9f\u00e9rences) pour afficher des produits, offres et contenus sur mesure. Chaque client voit une vitrine unique adapt\u00e9e \u00e0 ses go\u00fbts. R\u00e9sultat : +40% de taux de conversion et +35% de panier moyen. Symloop d\u00e9veloppe ces moteurs de recommandation pour le march\u00e9 alg\u00e9rien."
    },
    {
      question: "Comment r\u00e9cup\u00e9rer les paniers abandonn\u00e9s avec l'IA ?",
      answer: "L'IA analyse les raisons d'abandon (prix, timing, h\u00e9sitation) et d\u00e9clenche automatiquement des campagnes de r\u00e9cup\u00e9ration personnalis\u00e9es : emails cibl\u00e9s, notifications push, offres sp\u00e9ciales adapt\u00e9es au profil client. En moyenne, l'IA r\u00e9cup\u00e8re 25-35% des paniers abandonn\u00e9s, ce qui repr\u00e9sente un gain de revenus consid\u00e9rable pour les e-commer\u00e7ants alg\u00e9riens."
    },
    {
      question: "Le pricing dynamique IA est-il adapt\u00e9 au march\u00e9 alg\u00e9rien ?",
      answer: "Oui, le pricing dynamique IA est particuli\u00e8rement pertinent en Alg\u00e9rie o\u00f9 la concurrence en ligne s'intensifie. L'IA ajuste les prix en temps r\u00e9el selon la demande, les stocks, la concurrence et le profil client. Cela maximise les marges tout en restant comp\u00e9titif. Symloop configure ces algorithmes en respectant les sp\u00e9cificit\u00e9s du march\u00e9 local (pouvoir d'achat, saisonnalit\u00e9, habitudes de consommation)."
    },
    {
      question: "Combien de temps faut-il pour int\u00e9grer l'IA dans mon e-commerce ?",
      answer: "L'int\u00e9gration IA dans un e-commerce existant prend g\u00e9n\u00e9ralement 2 \u00e0 6 semaines selon la complexit\u00e9. Un moteur de recommandation basique peut \u00eatre d\u00e9ploy\u00e9 en 2 semaines. Une solution compl\u00e8te (recommandations + recherche IA + pricing dynamique + r\u00e9cup\u00e9ration paniers) n\u00e9cessite 4 \u00e0 6 semaines. Les r\u00e9sultats sont visibles d\u00e8s les premiers jours. Contactez Symloop au +213 549 575 512 pour une \u00e9valuation gratuite."
    }
  ];

  return (
    <>
      <Head>
        <title>IA pour E-commerce Alg\u00e9rie 2026 | Personnalisation & Recommandations IA | Symloop</title>
        <meta name="description" content="Int\u00e9grez l'IA dans votre e-commerce en Alg\u00e9rie. Recommandations produits personnalis\u00e9es, recherche intelligente, pricing dynamique, r\u00e9cup\u00e9ration paniers abandonn\u00e9s. Augmentez vos ventes de 30-50%. Symloop, expert IA e-commerce. Contact: +213 549 575 512." />
        <meta name="keywords" content="IA e-commerce alg\u00e9rie, personnalisation IA alg\u00e9rie, recommandation produits IA, recherche intelligente e-commerce, pricing dynamique alg\u00e9rie, r\u00e9cup\u00e9ration panier abandonn\u00e9 IA, segmentation clients IA, e-commerce alg\u00e9rie 2026, intelligence artificielle boutique en ligne" />
        <link rel="canonical" href="https://symloop.com/blog/ia-ecommerce-personnalisation-algerie-2026/" />

        <meta property="og:title" content="IA pour E-commerce : Personnalisation & Recommandations en Alg\u00e9rie 2026 | Symloop" />
        <meta property="og:description" content="Solutions IA pour e-commerce alg\u00e9rien. Recommandations, recherche intelligente, pricing dynamique. +30-50% ventes." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/ia-ecommerce-personnalisation-algerie-2026/" />
        <meta property="og:site_name" content="Symloop" />
        <meta property="og:locale" content="fr_DZ" />
        <meta property="og:locale:alternate" content="ar_DZ" />
        <meta property="og:locale:alternate" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IA pour E-commerce Alg\u00e9rie 2026 | Symloop" />
        <meta name="twitter:description" content="IA pour e-commerce alg\u00e9rien. Recommandations produits, pricing dynamique, r\u00e9cup\u00e9ration paniers. +30-50% ventes." />

        {/* Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "IA pour E-commerce : Personnalisation & Recommandations en Alg\u00e9rie 2026",
            "description": "Guide complet sur l'int\u00e9gration de l'IA dans les plateformes e-commerce alg\u00e9riennes. Recommandations produits, recherche intelligente, pricing dynamique, segmentation clients.",
            "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
            "publisher": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
            "datePublished": "2026-04-01",
            "dateModified": "2026-04-01",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://symloop.com/blog/ia-ecommerce-personnalisation-algerie-2026/" },
            "articleSection": "E-commerce & IA",
            "inLanguage": "fr-DZ",
            "keywords": "IA e-commerce alg\u00e9rie, personnalisation IA, recommandation produits, pricing dynamique, e-commerce alg\u00e9rie 2026"
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
              { "@type": "ListItem", "position": 3, "name": "IA E-commerce Alg\u00e9rie 2026", "item": "https://symloop.com/blog/ia-ecommerce-personnalisation-algerie-2026/" }
            ]
          })}
        </script>

        {/* Speakable */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "IA E-commerce Personnalisation Alg\u00e9rie 2026",
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "[data-speakable]", "#faq"] },
            "url": "https://symloop.com/blog/ia-ecommerce-personnalisation-algerie-2026/"
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
            "knowsAbout": ["IA E-commerce", "Personnalisation IA", "Recommandation Produits", "Pricing Dynamique", "Machine Learning", "Segmentation Clients"],
            "areaServed": { "@type": "Country", "name": "Algeria" }
          })}
        </script>
      </Head>

      <div className={`min-h-screen bg-gray-950 ${isRTL ? 'rtl' : 'ltr'}`}>

        {/* ═══════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════ */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <FloatingOrb color="radial-gradient(circle, #f59e0b, transparent 70%)" size="650px" x="-8%" y="-10%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="550px" x="55%" y="5%" delay={2} />
          <FloatingOrb color="radial-gradient(circle, #a855f7, transparent 70%)" size="500px" x="25%" y="50%" delay={5} />
          <FloatingOrb color="radial-gradient(circle, #22c55e, transparent 70%)" size="400px" x="75%" y="55%" delay={8} />
          <FloatingOrb color="radial-gradient(circle, #f59e0b, transparent 70%)" size="350px" x="5%" y="65%" delay={11} />

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
                  <li className="text-purple-400">IA E-commerce Alg&eacute;rie 2026</li>
                </ol>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="bg-amber-500/20 text-amber-300 backdrop-blur-md border border-amber-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase flex items-center gap-2">
                  <ShoppingCart className="w-3.5 h-3.5" />
                  E-commerce IA
                </span>
                <span className="bg-cyan-500/20 text-cyan-300 backdrop-blur-md border border-cyan-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                  2026
                </span>
                <span className="bg-green-500/20 text-green-300 backdrop-blur-md border border-green-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                  +30-50%
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                IA pour E-commerce :{" "}
                <span className="bg-gradient-to-r from-amber-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Personnalisation
                </span>{" "}
                &amp; Recommandations
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl">
                  en{" "}
                  <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent">
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
                Chaque visiteur de votre boutique en ligne m&eacute;rite une exp&eacute;rience unique. L&apos;IA transforme
                votre e-commerce en un vendeur intelligent qui conna&icirc;t chaque client personnellement
                et lui recommande exactement ce qu&apos;il veut acheter.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="flex items-center gap-8 text-xs text-gray-500 tracking-wide uppercase"
              >
                <div className="flex items-center gap-2"><User className="w-3.5 h-3.5" /> Symloop AI Team</div>
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
              <div data-speakable="summary" className="backdrop-blur-xl bg-white/[0.04] border border-amber-500/20 rounded-3xl p-8">
                <h2 className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-3">En bref</h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  <strong className="text-white">Symloop</strong> int&egrave;gre l&apos;IA dans les plateformes e-commerce alg&eacute;riennes.
                  Recommandations produits personnalis&eacute;es, recherche intelligente, pricing dynamique,
                  segmentation clients, r&eacute;cup&eacute;ration paniers abandonn&eacute;s. Augmentez vos ventes de 30-50%.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">Contact :</strong> +213 549 575 512 &mdash; consultation gratuite.
                  Technologies : TensorFlow, PyTorch, collaborative filtering, NLP, deep learning.
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
                    { num: "01", title: "Pourquoi l'IA est indispensable pour l'e-commerce", id: "pourquoi-ia" },
                    { num: "02", title: "Recommandations produits personnalis\u00e9es", id: "recommandations" },
                    { num: "03", title: "Recherche intelligente & pricing dynamique", id: "recherche-pricing" },
                    { num: "04", title: "Segmentation clients & paniers abandonn\u00e9s", id: "segmentation" },
                    { num: "05", title: "Support client IA pour e-commerce", id: "support-ia" },
                    { num: "06", title: "Questions fr\u00e9quentes", id: "faq" },
                  ].map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group">
                      <span className="text-[10px] font-bold text-gray-600 tracking-widest group-hover:text-amber-400 transition-colors w-6">{item.num}</span>
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

            {/* ── Section 1: Pourquoi l'IA est indispensable ── */}
            <section id="pourquoi-ia" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-amber-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Pourquoi l&apos;IA est Indispensable pour l&apos;E-commerce en Alg&eacute;rie
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="backdrop-blur-xl bg-amber-500/[0.06] border border-amber-500/20 rounded-2xl p-8 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Le e-commerce alg&eacute;rien explose en 2026</h3>
                      <p className="text-gray-400 leading-relaxed">
                        Le march&eacute; e-commerce alg&eacute;rien conna&icirc;t une croissance sans pr&eacute;c&eacute;dent. Avec la d&eacute;mocratisation
                        du paiement CIB/Edahabia et la confiance num&eacute;rique croissante, les boutiques en ligne
                        qui n&apos;utilisent pas l&apos;IA <strong className="text-white">perdent des clients chaque jour</strong> au profit
                        de concurrents plus intelligents.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {[
                  { value: "+50%", label: "Conversion", sub: "avec recommandations IA" },
                  { value: "+30%", label: "Panier moyen", sub: "gr\u00e2ce \u00e0 la personnalisation" },
                  { value: "35%", label: "Paniers r\u00e9cup\u00e9r\u00e9s", sub: "via IA automatique" },
                  { value: "24/7", label: "Support IA", sub: "chatbot e-commerce" },
                ].map((stat, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <GlassCard className="p-6 text-center">
                      <div className="text-3xl font-extrabold bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent mb-1">
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
                  Les g&eacute;ants comme Amazon et Alibaba g&eacute;n&egrave;rent <strong className="text-white">35% de leurs ventes
                  gr&acirc;ce aux recommandations IA</strong>. Cette m&ecirc;me technologie est maintenant accessible
                  aux e-commer&ccedil;ants alg&eacute;riens. Les premiers &agrave; l&apos;adopter captureront une part
                  disproportionn&eacute;e du march&eacute;.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-lg text-gray-500 leading-relaxed mb-6">
                  Imaginez : chaque visiteur de votre site voit une s&eacute;lection de produits con&ccedil;ue
                  sp&eacute;cifiquement pour lui. La recherche comprend ce qu&apos;il veut m&ecirc;me avec des
                  fautes de frappe. Les prix s&apos;ajustent dynamiquement pour maximiser vos marges.
                  Et quand un client abandonne son panier, l&apos;IA le ram&egrave;ne automatiquement.
                  <strong className="text-gray-300"> C&apos;est la puissance de l&apos;IA e-commerce.</strong>
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="backdrop-blur-xl bg-cyan-500/[0.04] border border-cyan-500/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-cyan-400" />
                    Le saviez-vous ?
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    91% des consommateurs pr&eacute;f&egrave;rent acheter sur des sites qui proposent des recommandations
                    personnalis&eacute;es. Sans IA, votre e-commerce offre la m&ecirc;me exp&eacute;rience g&eacute;n&eacute;rique &agrave; tout
                    le monde &mdash; comme un magasin o&ugrave; le vendeur ne conna&icirc;t aucun client.
                    <strong className="text-gray-300"> Avec l&apos;IA, chaque visiteur a son vendeur personnel.</strong>
                  </p>
                </div>
              </Reveal>
            </section>

            {/* ── Section 2: Recommandations produits ── */}
            <section id="recommandations" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-px h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Recommandations Produits Personnalis&eacute;es par IA
                  </h2>
                </div>
                <p className="text-gray-500 mb-10 leading-relaxed ml-7">
                  Le moteur de recommandation IA analyse le comportement de chaque visiteur pour proposer les produits les plus pertinents.
                </p>
              </Reveal>

              <div className="space-y-6">
                <Reveal delay={0}>
                  <GlassCard className="p-8 border-cyan-500/20">
                    <div className="flex items-start gap-6">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                          <Heart className="w-7 h-7 text-cyan-400" />
                        </div>
                        <div className="mt-3 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30">
                          <span className="text-cyan-300 text-xs font-extrabold">+40%</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Filtrage Collaboratif</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          <strong className="text-white">&laquo; Les clients qui ont achet&eacute; X ont aussi achet&eacute; Y &raquo;</strong> &mdash;
                          cette technique analyse les patterns d&apos;achat de milliers de clients pour pr&eacute;dire
                          ce que chaque nouveau visiteur va aimer. Plus votre base clients grandit,
                          plus les recommandations deviennent pr&eacute;cises. Le syst&egrave;me apprend en continu.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Cross-selling", "Up-selling", "Produits similaires", "Bundles intelligents", "Tendances"].map((tag) => (
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
                          <UserCheck className="w-7 h-7 text-purple-400" />
                        </div>
                        <div className="mt-3 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                          <span className="text-purple-300 text-xs font-extrabold">+35%</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Personnalisation en Temps R&eacute;el</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          D&egrave;s qu&apos;un visiteur arrive sur votre site, l&apos;IA analyse son comportement en temps
                          r&eacute;el : pages visit&eacute;es, temps pass&eacute;, clics, scrolls. La page d&apos;accueil, les cat&eacute;gories
                          et les r&eacute;sultats de recherche s&apos;adaptent <strong className="text-white">instantan&eacute;ment</strong> &agrave;
                          chaque visiteur. Chaque session est unique.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Homepage dynamique", "Cat\u00e9gories adaptatives", "Vitrine personnelle", "Historique IA", "Pr\u00e9f\u00e9rences auto"].map((tag) => (
                            <span key={tag} className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-lg text-xs font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>

                <Reveal delay={0.15}>
                  <GlassCard className="p-8 border-green-500/20">
                    <div className="flex items-start gap-6">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                          <Mail className="w-7 h-7 text-green-400" />
                        </div>
                        <div className="mt-3 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                          <span className="text-green-300 text-xs font-extrabold">+50%</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Emails &amp; Notifications Personnalis&eacute;s</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          Fini les newsletters g&eacute;n&eacute;riques que personne n&apos;ouvre. L&apos;IA g&eacute;n&egrave;re des emails
                          personnalis&eacute;s pour chaque client avec les produits qui l&apos;int&eacute;ressent vraiment.
                          Le bon produit, au bon moment, dans la bonne langue (fran&ccedil;ais ou arabe).
                          <strong className="text-white"> Taux d&apos;ouverture multipli&eacute; par 3.</strong>
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Emails IA", "Notifications push", "SMS cibl\u00e9s", "Moment optimal", "FR/AR auto"].map((tag) => (
                            <span key={tag} className="bg-green-500/10 text-green-400 px-3 py-1 rounded-lg text-xs font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>
              </div>
            </section>

            {/* ── Section 3: Recherche intelligente & pricing dynamique ── */}
            <section id="recherche-pricing" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-green-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Recherche Intelligente &amp; Pricing Dynamique
                  </h2>
                </div>
              </Reveal>

              <div className="grid lg:grid-cols-2 gap-5">
                <GlassCard className="p-8" delay={0}>
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                    <Search className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Recherche IA</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    La recherche comprend l&apos;intention du client, corrige les fautes, sugg&egrave;re des alternatives et affiche les r&eacute;sultats les plus pertinents.
                  </p>
                  <ul className="space-y-2.5">
                    {["Compr\u00e9hension du langage naturel", "Auto-correction fautes de frappe", "Recherche vocale FR/AR", "Suggestions intelligentes", "Filtres pr\u00e9dictifs", "Recherche visuelle (photo)"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-green-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <GlassCard className="p-8 border-amber-500/20" delay={0.1}>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6">
                    <DollarSign className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Pricing Dynamique</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    L&apos;IA ajuste vos prix en temps r&eacute;el pour maximiser les marges tout en restant comp&eacute;titif sur le march&eacute; alg&eacute;rien.
                  </p>
                  <ul className="space-y-2.5">
                    {["Ajustement temps r\u00e9el", "Analyse concurrence automatique", "Promotions cibl\u00e9es IA", "Optimisation des marges", "Saisonnalit\u00e9 intelligente", "A/B testing prix automatique"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-amber-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>

              <Reveal delay={0.2}>
                <div className="mt-8 backdrop-blur-xl bg-green-500/[0.04] border border-green-500/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    Impact mesurable
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    La recherche IA r&eacute;duit le taux de &laquo; z&eacute;ro r&eacute;sultat &raquo; de 30% &agrave; moins de 3%. Le pricing dynamique
                    augmente les marges de 15-25% en moyenne. Combin&eacute;s, ces deux outils transforment chaque visite
                    en opportunit&eacute; de vente optimis&eacute;e.
                  </p>
                </div>
              </Reveal>
            </section>

            {/* ── Section 4: Segmentation & paniers abandonnés ── */}
            <section id="segmentation" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-px h-8 bg-gradient-to-b from-purple-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Segmentation Clients &amp; R&eacute;cup&eacute;ration de Paniers
                  </h2>
                </div>
                <p className="text-gray-500 mb-10 leading-relaxed ml-7">
                  L&apos;IA identifie vos meilleurs clients et ram&egrave;ne ceux qui h&eacute;sitent.
                </p>
              </Reveal>

              <div className="space-y-4">
                <Reveal delay={0}>
                  <div className="flex gap-6 items-start group">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-7 h-7 text-purple-400" />
                      </div>
                      <div className="w-px h-12 bg-gradient-to-b from-purple-500/40 to-amber-500/40 mt-2" />
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-gray-600 tracking-widest">SEGMENTATION</span>
                        <h3 className="text-lg font-bold text-white">Clustering IA Avanc&eacute;</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">
                        L&apos;IA regroupe automatiquement vos clients en segments pr&eacute;cis : gros acheteurs, chasseurs de promos,
                        clients saisonniers, abandonneurs r&eacute;guliers, nouveaux clients &agrave; fort potentiel. Chaque segment
                        re&ccedil;oit une strat&eacute;gie marketing adapt&eacute;e automatiquement.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-lg text-xs font-medium">RFM automatis&eacute;</span>
                        <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-lg text-xs font-medium">Lifetime Value</span>
                        <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-lg text-xs font-medium">Churn prediction</span>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="flex gap-6 items-start group">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <ShoppingCart className="w-7 h-7 text-amber-400" />
                      </div>
                      <div className="w-px h-12 bg-gradient-to-b from-amber-500/40 to-green-500/40 mt-2" />
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-gray-600 tracking-widest">R&Eacute;CUP&Eacute;RATION</span>
                        <h3 className="text-lg font-bold text-white">Paniers Abandonn&eacute;s IA</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">
                        70% des paniers sont abandonn&eacute;s. L&apos;IA analyse les raisons (prix trop &eacute;lev&eacute;, frais de livraison,
                        h&eacute;sitation, probl&egrave;me technique) et d&eacute;clenche la bonne action au bon moment : email personnalis&eacute;,
                        notification push, offre sp&eacute;ciale cibl&eacute;e. R&eacute;sultat : 25-35% de paniers r&eacute;cup&eacute;r&eacute;s.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-amber-500/10 text-amber-400 px-3 py-1 rounded-lg text-xs font-medium">Email automatique</span>
                        <span className="bg-amber-500/10 text-amber-400 px-3 py-1 rounded-lg text-xs font-medium">Timing optimal</span>
                        <span className="bg-amber-500/10 text-amber-400 px-3 py-1 rounded-lg text-xs font-medium">Offres cibl&eacute;es</span>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="flex gap-6 items-start group">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Target className="w-7 h-7 text-green-400" />
                      </div>
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-gray-600 tracking-widest">FIDELISATION</span>
                        <h3 className="text-lg font-bold text-white">R&eacute;tention &amp; Fid&eacute;lisation IA</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">
                        L&apos;IA pr&eacute;dit quels clients risquent de partir et d&eacute;clenche automatiquement des
                        actions de r&eacute;tention personnalis&eacute;es. Programmes de fid&eacute;lit&eacute; dynamiques,
                        offres de r&eacute;activation, contenu personnalis&eacute;. Co&ucirc;t d&apos;acquisition r&eacute;duit de 50%.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-lg text-xs font-medium">Pr&eacute;diction churn</span>
                        <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-lg text-xs font-medium">Fid&eacute;lit&eacute; dynamique</span>
                        <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-lg text-xs font-medium">R&eacute;activation auto</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* ── Section 5: Support client IA ── */}
            <section id="support-ia" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Support Client IA pour E-commerce
                  </h2>
                </div>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-3 mb-12">
                {[
                  { icon: Bot, title: "Chatbot e-commerce intelligent", desc: "R\u00e9pond aux questions produits, suit les commandes, g\u00e8re les retours 24/7 en fran\u00e7ais et arabe" },
                  { icon: Package, title: "Suivi commande automatis\u00e9", desc: "Notifications proactives sur l'\u00e9tat de livraison, estimation pr\u00e9cise d'arriv\u00e9e par IA" },
                  { icon: RefreshCw, title: "Gestion retours IA", desc: "Processus de retour simplifi\u00e9 et automatis\u00e9 avec diagnostic IA des probl\u00e8mes produit" },
                  { icon: Star, title: "Avis & recommandations", desc: "Analyse sentiment des avis clients, r\u00e9ponses automatis\u00e9es, mise en avant des avis pertinents" },
                  { icon: MessageCircle, title: "WhatsApp Commerce", desc: "Vendez directement via WhatsApp avec un assistant IA qui conna\u00eet votre catalogue entier" },
                  { icon: BarChart3, title: "Analytics temps r\u00e9el", desc: "Tableau de bord IA avec insights actionables : tendances, anomalies, opportunit\u00e9s" },
                  { icon: Shield, title: "D\u00e9tection fraude", desc: "IA anti-fraude qui prot\u00e8ge vos transactions CIB/Edahabia contre les tentatives suspectes" },
                  { icon: Globe, title: "Multi-langue automatique", desc: "Contenu traduit et adapt\u00e9 automatiquement en fran\u00e7ais, arabe et anglais par l'IA" },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/[0.02] transition-colors">
                      <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-amber-400" />
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
                  <h4 className="text-xl font-bold text-white mb-4">Pourquoi choisir Symloop</h4>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {[
                      { num: "01", text: "Expertise e-commerce + IA : on conna\u00eet les deux mondes" },
                      { num: "02", text: "Int\u00e9gration avec CIB, Edahabia et paiements locaux" },
                      { num: "03", text: "R\u00e9sultats mesurables d\u00e8s le premier mois" },
                    ].map((item, i) => (
                      <div key={i} className="text-center">
                        <div className="text-3xl font-extrabold bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent mb-2">{item.num}</div>
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
                    Questions Fr&eacute;quentes sur l&apos;IA E-commerce
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
                    { href: "/blog/ecommerce-algerie-paiement-cib-edahabia-2024", label: "E-commerce Alg\u00e9rie : Paiement CIB & Edahabia" },
                    { href: "/blog/intelligence-artificielle-automatisation-business-algerie-2026", label: "Intelligence Artificielle & Automatisation Business Alg\u00e9rie 2026" },
                    { href: "/blog/developpement-site-web-algerie-2026", label: "D\u00e9veloppement Site Web Alg\u00e9rie 2026" },
                    { href: "/blog/solutions-informatiques-algerie-2026", label: "Solutions Informatiques Alg\u00e9rie 2026" },
                  ].map((link, i) => (
                    <Link key={i} href={link.href} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-amber-500/[0.06] hover:border-amber-500/20 transition-all text-sm text-gray-500 hover:text-amber-400">
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
                {(blog?.tags || ["IA e-commerce alg\u00e9rie", "personnalisation IA", "recommandation produits", "pricing dynamique alg\u00e9rie", "recherche intelligente", "panier abandonn\u00e9 IA", "segmentation clients IA", "e-commerce alg\u00e9rie 2026"]).map((tag, i) => (
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
          <FloatingOrb color="radial-gradient(circle, #f59e0b, transparent 70%)" size="450px" x="5%" y="-25%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="400px" x="65%" y="15%" delay={4} />
          <FloatingOrb color="radial-gradient(circle, #a855f7, transparent 70%)" size="350px" x="35%" y="50%" delay={7} />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 backdrop-blur-md border border-amber-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-8">
                <ShoppingCart className="w-3.5 h-3.5" />
                E-commerce IA
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Boostez Votre E-commerce avec{" "}
                <span className="bg-gradient-to-r from-amber-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  l&apos;Intelligence Artificielle
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-4 leading-relaxed">
                Ne laissez pas vos visiteurs partir sans acheter. L&apos;IA transforme chaque visite en opportunit&eacute;
                de vente personnalis&eacute;e.
              </p>
              <p className="text-gray-500 text-base mb-10 leading-relaxed">
                <strong className="text-white">Consultation gratuite.</strong> Appelez-nous, d&eacute;crivez votre e-commerce,
                et recevez un plan d&apos;action IA personnalis&eacute; en 48h. Z&eacute;ro engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/213549575512?text=Bonjour, je veux int%C3%A9grer l'IA dans mon e-commerce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-white text-gray-950 px-8 py-4 rounded-2xl font-semibold hover:bg-amber-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Consultation IA E-commerce WhatsApp
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
                    <GlassCard className="p-6 h-full hover:border-amber-500/20 transition-colors">
                      <span className="text-[10px] font-bold text-amber-400 tracking-widest uppercase mb-3 block">{post.category}</span>
                      <h3 className="text-white font-semibold text-sm group-hover:text-amber-400 transition-colors mb-2">{post.title}</h3>
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
