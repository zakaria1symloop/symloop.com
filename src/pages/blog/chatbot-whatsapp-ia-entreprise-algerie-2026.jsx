"use client";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Zap, CheckCircle, TrendingUp, MessageCircle, BarChart3, Target, Cpu, Rocket, Users, Building2, ChevronRight, Phone, Brain, Bot, Sparkles, Eye, Cog, LineChart, Shield, Globe, Star, Layers, Activity, Database, Mail, Share2, Factory, ShoppingCart, Lightbulb, Award, Timer, DollarSign, PieChart, Workflow } from "lucide-react";
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

export default function ChatbotWhatsappIaEntrepriseAlgerie2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const blog = getBlogBySlug('chatbot-whatsapp-ia-entreprise-algerie-2026');
  const relatedBlogs = getRelatedBlogs('chatbot-whatsapp-ia-entreprise-algerie-2026', 3);

  const conversations = useCounter(50000, 2500, statsInView);
  const satisfaction = useCounter(97, 2000, statsInView);
  const conversion = useCounter(40, 2000, statsInView);

  const faqItems = [
    {
      question: "Comment fonctionne un chatbot WhatsApp IA pour une entreprise en Alg\u00e9rie ?",
      answer: "Un chatbot WhatsApp IA utilise l'intelligence artificielle conversationnelle pour comprendre les messages de vos clients en fran\u00e7ais, arabe et darja alg\u00e9rienne. Il r\u00e9pond automatiquement 24h/24 et 7j/7, qualifie les prospects, prend des rendez-vous, suit les commandes et transf\u00e8re vers un agent humain uniquement pour les cas complexes. Symloop d\u00e9veloppe des chatbots WhatsApp sur mesure pour les entreprises alg\u00e9riennes. Contact : +213 549 575 512."
    },
    {
      question: "Le chatbot WhatsApp peut-il parler en darja alg\u00e9rienne ?",
      answer: "Oui, nos chatbots IA sont entra\u00een\u00e9s pour comprendre et r\u00e9pondre en darja alg\u00e9rienne, en fran\u00e7ais et en arabe standard. L'IA d\u00e9tecte automatiquement la langue utilis\u00e9e par le client et r\u00e9pond dans la m\u00eame langue. C'est un avantage majeur pour les entreprises alg\u00e9riennes qui servent une client\u00e8le diversifi\u00e9e."
    },
    {
      question: "Combien de messages un chatbot WhatsApp IA peut-il traiter par jour ?",
      answer: "Un chatbot WhatsApp IA peut traiter des milliers de conversations simultan\u00e9ment, sans limite pratique. Contrairement \u00e0 un employ\u00e9 qui g\u00e8re 30-50 conversations par jour, le chatbot peut en g\u00e9rer 5000+ en parall\u00e8le, avec un temps de r\u00e9ponse de moins de 2 secondes. C'est l'\u00e9quivalent d'une \u00e9quipe de 100 agents disponibles 24/7."
    },
    {
      question: "Est-ce que le chatbot WhatsApp peut prendre des commandes et des rendez-vous ?",
      answer: "Absolument. Le chatbot WhatsApp IA peut g\u00e9rer le cycle complet : pr\u00e9sentation du catalogue, prise de commande, confirmation, suivi de livraison, prise de rendez-vous avec synchronisation calendrier, rappels automatiques et collecte de paiements. Tout est automatis\u00e9 et int\u00e9gr\u00e9 \u00e0 votre syst\u00e8me existant."
    },
    {
      question: "Comment mesurer le ROI d'un chatbot WhatsApp IA en Alg\u00e9rie ?",
      answer: "Le ROI se mesure sur plusieurs axes : r\u00e9duction des co\u00fbts service client (60-80%), augmentation du taux de conversion (+40% en moyenne), disponibilit\u00e9 24/7 (capturer les leads hors heures de bureau), temps de r\u00e9ponse (de 30 min \u00e0 2 secondes), et satisfaction client (+35%). La plupart de nos clients r\u00e9cup\u00e8rent leur investissement en 2 \u00e0 4 mois. Contactez Symloop pour une estimation personnalis\u00e9e : +213 549 575 512."
    }
  ];

  return (
    <>
      <Head>
        <title>Chatbot WhatsApp IA Entreprise Alg\u00e9rie 2026 | Service Client 24/7 | Symloop</title>
        <meta name="description" content="Chatbot WhatsApp IA pour entreprises alg\u00e9riennes. Service client 24/7, qualification leads, suivi commandes, prise de rendez-vous. IA conversationnelle en arabe, fran\u00e7ais et darja. Symloop, expert chatbot IA Alg\u00e9rie. Contact: +213 549 575 512." />
        <meta name="keywords" content="chatbot whatsapp alg\u00e9rie, chatbot IA entreprise alg\u00e9rie, whatsapp business IA alg\u00e9rie, chatbot service client alg\u00e9rie, IA conversationnelle alg\u00e9rie, bot whatsapp arabe darja, chatbot lead qualification alg\u00e9rie, automatisation whatsapp alg\u00e9rie 2026" />
        <link rel="canonical" href="https://symloop.com/blog/chatbot-whatsapp-ia-entreprise-algerie-2026/" />

        <meta property="og:title" content="Chatbot WhatsApp IA pour Entreprises en Alg\u00e9rie 2026 | Symloop" />
        <meta property="og:description" content="Chatbot WhatsApp IA pour entreprises alg\u00e9riennes. Service client 24/7, qualification leads, suivi commandes. IA en arabe, fran\u00e7ais et darja." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/chatbot-whatsapp-ia-entreprise-algerie-2026/" />
        <meta property="og:site_name" content="Symloop" />
        <meta property="og:locale" content="fr_DZ" />
        <meta property="og:locale:alternate" content="ar_DZ" />
        <meta property="og:locale:alternate" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chatbot WhatsApp IA Entreprise Alg\u00e9rie 2026 | Symloop" />
        <meta name="twitter:description" content="Chatbot WhatsApp IA pour entreprises alg\u00e9riennes. Service client 24/7, qualification leads, IA en arabe/fran\u00e7ais/darja." />

        {/* Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Chatbot WhatsApp IA pour Entreprises en Alg\u00e9rie 2026",
            "description": "Guide complet sur les chatbots WhatsApp IA pour entreprises alg\u00e9riennes. Service client 24/7, qualification leads, suivi commandes, prise de rendez-vous. IA conversationnelle multilingue.",
            "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
            "publisher": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
            "datePublished": "2026-04-01",
            "dateModified": "2026-04-01",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://symloop.com/blog/chatbot-whatsapp-ia-entreprise-algerie-2026/" },
            "articleSection": "Chatbot & IA Conversationnelle",
            "inLanguage": "fr-DZ",
            "keywords": "chatbot whatsapp alg\u00e9rie, chatbot IA entreprise alg\u00e9rie, whatsapp business IA, IA conversationnelle alg\u00e9rie, bot whatsapp arabe darja"
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
              { "@type": "ListItem", "position": 3, "name": "Chatbot WhatsApp IA Alg\u00e9rie 2026", "item": "https://symloop.com/blog/chatbot-whatsapp-ia-entreprise-algerie-2026/" }
            ]
          })}
        </script>

        {/* Speakable */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Chatbot WhatsApp IA Alg\u00e9rie 2026",
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "[data-speakable]", "#faq"] },
            "url": "https://symloop.com/blog/chatbot-whatsapp-ia-entreprise-algerie-2026/"
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
            "knowsAbout": ["Chatbot WhatsApp", "IA Conversationnelle", "NLP", "Service Client IA", "Lead Qualification", "Automatisation"],
            "areaServed": { "@type": "Country", "name": "Algeria" }
          })}
        </script>
      </Head>

      <div className={`min-h-screen bg-gray-950 ${isRTL ? 'rtl' : 'ltr'}`}>

        {/* ═══════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════ */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <FloatingOrb color="radial-gradient(circle, #22c55e, transparent 70%)" size="650px" x="-8%" y="-10%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="550px" x="55%" y="5%" delay={2} />
          <FloatingOrb color="radial-gradient(circle, #a855f7, transparent 70%)" size="500px" x="25%" y="50%" delay={5} />
          <FloatingOrb color="radial-gradient(circle, #22c55e, transparent 70%)" size="400px" x="75%" y="55%" delay={8} />
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
                  <li><Link href="/" className="hover:text-green-400 transition-colors">Accueil</Link></li>
                  <li className="text-gray-700">/</li>
                  <li><Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link></li>
                  <li className="text-gray-700">/</li>
                  <li className="text-green-400">Chatbot WhatsApp IA Alg&eacute;rie 2026</li>
                </ol>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="bg-green-500/20 text-green-300 backdrop-blur-md border border-green-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5" />
                  Chatbot WhatsApp
                </span>
                <span className="bg-cyan-500/20 text-cyan-300 backdrop-blur-md border border-cyan-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                  2026
                </span>
                <span className="bg-purple-500/20 text-purple-300 backdrop-blur-md border border-purple-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                  24/7
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                Chatbot WhatsApp IA pour{" "}
                <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Entreprises en Alg&eacute;rie
                </span>{" "}
                2026
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg sm:text-xl text-gray-400 max-w-3xl leading-relaxed mb-10"
              >
                Vos clients envoient des messages WhatsApp &agrave; 23h, le week-end, pendant le Ramadan.
                Qui leur r&eacute;pond ? Un chatbot IA intelligent qui parle fran&ccedil;ais, arabe et darja,
                qualifie les leads et convertit &mdash; pendant que vous dormez.
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
              <div data-speakable="summary" className="backdrop-blur-xl bg-white/[0.04] border border-green-500/20 rounded-3xl p-8">
                <h2 className="text-sm font-bold text-green-400 uppercase tracking-widest mb-3">En bref</h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  <strong className="text-white">Symloop</strong> d&eacute;veloppe des chatbots WhatsApp intelligents pour les entreprises alg&eacute;riennes.
                  Service client 24/7, qualification leads, suivi commandes, prise de rendez-vous.
                  IA conversationnelle en arabe, fran&ccedil;ais et darja.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">Contact :</strong> +213 549 575 512 &mdash; consultation gratuite.
                  Technologies : GPT-4, LLaMA, WhatsApp Business API, NLP multilingue.
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
                    { num: "01", title: "Pourquoi WhatsApp est incontournable en Alg\u00e9rie", id: "pourquoi-whatsapp" },
                    { num: "02", title: "Les 6 fonctions cl\u00e9s d'un chatbot WhatsApp IA", id: "fonctions" },
                    { num: "03", title: "IA multilingue : fran\u00e7ais, arabe et darja", id: "multilingue" },
                    { num: "04", title: "Cas d'usage par secteur", id: "secteurs" },
                    { num: "05", title: "Comment Symloop d\u00e9ploie votre chatbot", id: "deploiement" },
                    { num: "06", title: "Questions fr\u00e9quentes", id: "faq" },
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

            {/* ── Section 1: Pourquoi WhatsApp ── */}
            <section id="pourquoi-whatsapp" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-green-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Pourquoi WhatsApp Est Incontournable en Alg&eacute;rie
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="backdrop-blur-xl bg-green-500/[0.06] border border-green-500/20 rounded-2xl p-8 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">+30 millions d&apos;utilisateurs WhatsApp en Alg&eacute;rie</h3>
                      <p className="text-gray-400 leading-relaxed">
                        WhatsApp est l&apos;application n&deg;1 en Alg&eacute;rie. Vos clients y passent en moyenne 3 heures par jour.
                        Ils pr&eacute;f&egrave;rent envoyer un message WhatsApp plut&ocirc;t qu&apos;appeler ou envoyer un email.
                        <strong className="text-white"> Si vous n&apos;&ecirc;tes pas sur WhatsApp avec un chatbot IA, vous perdez des clients chaque heure.</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {[
                  { value: "30M+", label: "Utilisateurs", sub: "WhatsApp en Alg\u00e9rie" },
                  { value: "98%", label: "Taux d'ouverture", sub: "des messages WhatsApp" },
                  { value: "24/7", label: "Disponibilit\u00e9", sub: "z\u00e9ro pause, z\u00e9ro absence" },
                  { value: "<2s", label: "Temps r\u00e9ponse", sub: "chatbot IA vs 30min humain" },
                ].map((stat, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <GlassCard className="p-6 text-center">
                      <div className="text-3xl font-extrabold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-1">
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
                  Le comportement du consommateur alg&eacute;rien a radicalement chang&eacute;. Il veut une r&eacute;ponse
                  <strong className="text-white"> imm&eacute;diate, &agrave; n&apos;importe quelle heure</strong>. Le premier qui r&eacute;pond
                  gagne la vente. Avec un chatbot WhatsApp IA, vous &ecirc;tes toujours le premier.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-lg text-gray-500 leading-relaxed mb-6">
                  Un client envoie un message &agrave; 23h pour demander un produit. Sans chatbot, il attend
                  le lendemain matin &mdash; et entre-temps, il a d&eacute;j&agrave; achet&eacute; chez votre concurrent.
                  Avec un chatbot IA Symloop, il re&ccedil;oit une r&eacute;ponse en <strong className="text-gray-300">2 secondes</strong>,
                  le produit est pr&eacute;sent&eacute;, la commande est prise, et la vente est conclue.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="backdrop-blur-xl bg-cyan-500/[0.04] border border-cyan-500/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    WhatsApp Business API + IA = Machine &agrave; Vendre
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    La WhatsApp Business API permet d&apos;automatiser les conversations &agrave; grande &eacute;chelle.
                    Coupl&eacute;e &agrave; l&apos;IA conversationnelle, elle devient une v&eacute;ritable machine &agrave; convertir.
                    Catalogue interactif, paiement int&eacute;gr&eacute;, suivi en temps r&eacute;el, relances automatiques.
                    <strong className="text-gray-300"> C&apos;est votre meilleur vendeur, disponible 24/7.</strong>
                  </p>
                </div>
              </Reveal>
            </section>

            {/* ── Section 2: Les 6 fonctions clés ── */}
            <section id="fonctions" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-px h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Les 6 Fonctions Cl&eacute;s d&apos;un Chatbot WhatsApp IA
                  </h2>
                </div>
                <p className="text-gray-500 mb-10 leading-relaxed ml-7">
                  Pas un simple FAQ bot. Un v&eacute;ritable assistant intelligent qui comprend, d&eacute;cide et agit.
                </p>
              </Reveal>

              <div className="space-y-6">
                {[
                  { icon: MessageCircle, color: "green", title: "Service Client 24/7", desc: "R\u00e9ponse automatique \u00e0 toutes les questions fr\u00e9quentes. Gestion des r\u00e9clamations, informations produits, horaires, localisations. Le chatbot g\u00e8re 80% des demandes sans intervention humaine. Les cas complexes sont transf\u00e9r\u00e9s vers un agent avec tout le contexte de la conversation.", tags: ["R\u00e9ponse instantan\u00e9e", "Escalade intelligente", "Historique client", "Multi-conversation"] },
                  { icon: Target, color: "cyan", title: "Qualification de Leads", desc: "Le chatbot pose les bonnes questions pour identifier les prospects qualifi\u00e9s. Budget, besoin, urgence, localisation \u2014 tout est collect\u00e9 automatiquement. Les leads chauds sont alert\u00e9s \u00e0 votre \u00e9quipe commerciale en temps r\u00e9el avec un score de qualification.", tags: ["Scoring leads", "Alerte temps r\u00e9el", "Segmentation", "CRM int\u00e9gr\u00e9"] },
                  { icon: ShoppingCart, color: "purple", title: "Suivi de Commandes", desc: "Vos clients suivent leurs commandes directement dans WhatsApp. Statut de livraison, num\u00e9ro de suivi, estimation d'arriv\u00e9e \u2014 tout est automatis\u00e9. Plus besoin d'appeler pour savoir o\u00f9 en est le colis. R\u00e9duction de 70% des appels au service client.", tags: ["Tracking temps r\u00e9el", "Notifications auto", "Int\u00e9gration livraison", "Confirmation"] },
                  { icon: Calendar, color: "orange", title: "Prise de Rendez-vous", desc: "R\u00e9servation automatique avec synchronisation calendrier. Le chatbot propose les cr\u00e9neaux disponibles, confirme le rendez-vous, envoie des rappels automatiques 24h et 1h avant. Id\u00e9al pour m\u00e9decins, salons, consultants, agences.", tags: ["Sync calendrier", "Rappels auto", "Confirmation", "Annulation facile"] },
                  { icon: Sparkles, color: "pink", title: "Catalogue & Vente", desc: "Pr\u00e9sentez votre catalogue produits directement dans WhatsApp. Le chatbot recommande des produits selon les pr\u00e9f\u00e9rences du client, g\u00e8re le panier, et facilite le paiement. Exp\u00e9rience e-commerce compl\u00e8te sans quitter WhatsApp.", tags: ["Catalogue interactif", "Recommandation IA", "Panier", "Paiement"] },
                  { icon: BarChart3, color: "blue", title: "Analytics & Insights", desc: "Chaque conversation est analys\u00e9e. Quelles questions reviennent le plus ? Quels produits int\u00e9ressent ? O\u00f9 les clients abandonnent ? Le chatbot collecte des donn\u00e9es pr\u00e9cieuses pour optimiser votre strat\u00e9gie commerciale.", tags: ["Rapports auto", "Tendances", "Feedback client", "Optimisation"] },
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

            {/* ── Section 3: IA Multilingue ── */}
            <section id="multilingue" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-px h-8 bg-gradient-to-b from-purple-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    IA Multilingue : Fran&ccedil;ais, Arabe et Darja
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                  Le d&eacute;fi unique de l&apos;Alg&eacute;rie : vos clients parlent <strong className="text-white">fran&ccedil;ais, arabe standard,
                  et darja alg&eacute;rienne</strong> &mdash; souvent dans le m&ecirc;me message. Notre IA comprend tout.
                </p>
              </Reveal>

              <div className="grid lg:grid-cols-3 gap-5 mb-10">
                <GlassCard className="p-8" delay={0}>
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                    <Globe className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Fran&ccedil;ais</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Compr&eacute;hension parfaite du fran&ccedil;ais alg&eacute;rien avec ses expressions locales.
                    R&eacute;ponses professionnelles et naturelles en fran&ccedil;ais.
                  </p>
                </GlassCard>

                <GlassCard className="p-8 border-green-500/20" delay={0.1}>
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                    <Globe className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Arabe Standard</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Support complet de l&apos;arabe standard (MSA). Id&eacute;al pour les communications
                    formelles, le secteur public et les clients du monde arabe.
                  </p>
                </GlassCard>

                <GlassCard className="p-8 border-orange-500/20" delay={0.2}>
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                    <Globe className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Darja Alg&eacute;rienne</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Notre IA comprend la darja &eacute;crite en lettres latines et arabes.
                    &laquo; Wech kayen &raquo;, &laquo; Chhal &raquo;, &laquo; Ki raki &raquo; &mdash; rien ne lui &eacute;chappe.
                  </p>
                </GlassCard>
              </div>

              <Reveal delay={0.15}>
                <div className="backdrop-blur-xl bg-purple-500/[0.04] border border-purple-500/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-purple-400" />
                    D&eacute;tection automatique de langue
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    L&apos;IA d&eacute;tecte automatiquement la langue utilis&eacute;e par le client et r&eacute;pond dans la m&ecirc;me langue.
                    Un client qui &eacute;crit en darja re&ccedil;oit une r&eacute;ponse en darja. Un client qui &eacute;crit en fran&ccedil;ais
                    re&ccedil;oit une r&eacute;ponse en fran&ccedil;ais. <strong className="text-gray-300">Z&eacute;ro configuration, 100% automatique.</strong>
                  </p>
                </div>
              </Reveal>
            </section>

            {/* ── Section 4: Cas d'usage par secteur ── */}
            <section id="secteurs" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-px h-8 bg-gradient-to-b from-orange-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Cas d&apos;Usage par Secteur
                  </h2>
                </div>
                <p className="text-gray-500 mb-10 leading-relaxed ml-7">
                  Le chatbot WhatsApp IA s&apos;adapte &agrave; votre m&eacute;tier. Voici comment il transforme chaque secteur.
                </p>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-3 mb-12">
                {[
                  { icon: ShoppingCart, title: "E-commerce & Retail", desc: "Catalogue WhatsApp, prise de commande, suivi livraison, recommandations IA. Conversion +40%." },
                  { icon: Building2, title: "Immobilier", desc: "Qualification des acheteurs, visites virtuelles, envoi de fiches biens, prise de RDV automatique." },
                  { icon: Activity, title: "Sant\u00e9 & M\u00e9decins", desc: "Prise de rendez-vous, rappels, r\u00e9sultats d'analyses, renouvellement ordonnances. Z\u00e9ro appels perdus." },
                  { icon: Factory, title: "Industrie & B2B", desc: "Demandes de devis automatis\u00e9es, suivi commandes fournisseurs, support technique 24/7." },
                  { icon: Lightbulb, title: "Services & Consulting", desc: "Qualification prospects, planification consultations, envoi de documents, suivi dossiers." },
                  { icon: Users, title: "Restauration & H\u00f4tellerie", desc: "R\u00e9servations, menu digital, commande livraison, avis clients, programme fid\u00e9lit\u00e9." },
                  { icon: Award, title: "\u00c9ducation & Formation", desc: "Inscription en ligne, planning cours, rappels, partage de supports, suivi p\u00e9dagogique." },
                  { icon: DollarSign, title: "Finance & Assurance", desc: "Soumission de sinistres, suivi dossiers, simulation cr\u00e9dit, documents automatiques." },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/[0.02] transition-colors">
                      <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-green-400" />
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

            {/* ── Section 5: Comment Symloop déploie votre chatbot ── */}
            <section id="deploiement" className="mb-24 scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-px h-8 bg-gradient-to-b from-yellow-500 to-transparent" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Comment Symloop D&eacute;ploie Votre Chatbot
                  </h2>
                </div>
                <p className="text-gray-500 mb-10 leading-relaxed ml-7">
                  De l&apos;id&eacute;e au chatbot op&eacute;rationnel en 2 semaines. Voici notre processus &eacute;prouv&eacute;.
                </p>
              </Reveal>

              <div className="space-y-4">
                {[
                  { phase: "JOUR 1-3", multiplier: "Analyse", title: "Audit & Strat\u00e9gie", color: "cyan", desc: "Analyse de vos flux clients, identification des cas d'usage prioritaires, d\u00e9finition du ton et de la personnalit\u00e9 du chatbot. Mapping complet des sc\u00e9narios conversationnels." },
                  { phase: "JOUR 4-8", multiplier: "Build", title: "D\u00e9veloppement & Entra\u00eenement IA", color: "purple", desc: "Construction du chatbot avec l'IA conversationnelle. Entra\u00eenement sur vos donn\u00e9es m\u00e9tier, int\u00e9gration WhatsApp Business API, connexion \u00e0 vos syst\u00e8mes (CRM, ERP, site web)." },
                  { phase: "JOUR 9-12", multiplier: "Test", title: "Tests & Optimisation", color: "green", desc: "Tests intensifs en conditions r\u00e9elles. Correction des sc\u00e9narios, am\u00e9lioration des r\u00e9ponses, optimisation du taux de r\u00e9solution. Tests multilingues fran\u00e7ais/arabe/darja." },
                  { phase: "JOUR 13-14", multiplier: "Live", title: "D\u00e9ploiement & Formation", color: "yellow", desc: "Mise en production. Formation de votre \u00e9quipe sur le tableau de bord. Monitoring en temps r\u00e9el. Support continu et optimisation post-lancement." },
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
                <div className="mt-10 backdrop-blur-xl bg-gradient-to-r from-green-500/[0.06] via-cyan-500/[0.06] to-purple-500/[0.06] border border-white/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-green-400" />
                    R&eacute;sultats garantis d&egrave;s le jour 1
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    D&egrave;s l&apos;activation, votre chatbot commence &agrave; r&eacute;pondre aux clients, qualifier les leads
                    et g&eacute;n&eacute;rer des ventes. Pas besoin d&apos;attendre des mois pour voir des r&eacute;sultats.
                    <strong className="text-gray-300"> La plupart de nos clients voient un ROI positif d&egrave;s le premier mois.</strong>
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
                    Questions Fr&eacute;quentes sur les Chatbots WhatsApp IA
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
                    { href: "/blog/ia-generative-chatgpt-claude-algerie-2026", label: "IA G\u00e9n\u00e9rative ChatGPT & Claude en Alg\u00e9rie 2026" },
                    { href: "/blog/ia-automatisation-processus-rpa-algerie-2026", label: "Automatisation des Processus & RPA par IA en Alg\u00e9rie 2026" },
                    { href: "/blog/ia-saas-plateforme-algerie-2026", label: "Plateformes SaaS IA en Alg\u00e9rie 2026" },
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
                {(blog?.tags || ["chatbot whatsapp alg\u00e9rie", "chatbot IA entreprise", "whatsapp business IA", "IA conversationnelle alg\u00e9rie", "bot whatsapp arabe", "chatbot darja", "service client IA", "lead qualification chatbot"]).map((tag, i) => (
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
          <FloatingOrb color="radial-gradient(circle, #22c55e, transparent 70%)" size="450px" x="5%" y="-25%" delay={0} />
          <FloatingOrb color="radial-gradient(circle, #06b6d4, transparent 70%)" size="400px" x="65%" y="15%" delay={4} />
          <FloatingOrb color="radial-gradient(circle, #a855f7, transparent 70%)" size="350px" x="35%" y="50%" delay={7} />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 backdrop-blur-md border border-green-500/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-8">
                <MessageCircle className="w-3.5 h-3.5" />
                Chatbot WhatsApp IA
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Vos Clients Vous &Eacute;crivent,{" "}
                <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Votre IA R&eacute;pond
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-4 leading-relaxed">
                Ne laissez plus aucun message sans r&eacute;ponse. Chaque minute sans chatbot IA,
                c&apos;est un client qui part chez la concurrence.
              </p>
              <p className="text-gray-500 text-base mb-10 leading-relaxed">
                <strong className="text-white">Consultation gratuite.</strong> Appelez-nous, expliquez votre business,
                et recevez une d&eacute;mo personnalis&eacute;e de votre chatbot WhatsApp IA en 48h.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/213549575512?text=Bonjour, je veux un chatbot WhatsApp IA pour mon entreprise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-white text-gray-950 px-8 py-4 rounded-2xl font-semibold hover:bg-green-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  D&eacute;mo Chatbot Gratuite WhatsApp
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
