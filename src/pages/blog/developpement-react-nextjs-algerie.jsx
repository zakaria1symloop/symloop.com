"use client";
import { useState } from 'react';
import { ArrowLeft, Code, CheckCircle, MessageCircle, Zap, Globe, Server, Layers, ChevronDown, AlertCircle, Layout, Rocket, Shield, Search, Star, ArrowRight, Palette, Database, RefreshCw } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';

export default function ReactNextjsAlgerie() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Pourquoi choisir React et Next.js pour mon projet web ?",
      answer: "React est la bibliothèque JavaScript la plus populaire (#1 mondial), maintenue par Meta. Next.js ajoute le Server-Side Rendering (SSR) pour un SEO parfait, la génération statique pour des performances optimales, et les API Routes pour un backend intégré. Chez Symloop, nous maîtrisons React et Next.js pour créer des applications performantes adaptées aux entreprises algériennes. Contactez-nous au +213 549 575 512 pour discuter de votre projet."
    },
    {
      question: "Quelle est la différence entre Next.js et React seul ?",
      answer: "React seul est une bibliothèque pour créer des interfaces. Next.js est un framework complet qui ajoute : routing automatique, SSR/SSG pour le SEO, optimisation d'images automatique, API routes intégrées, et déploiement simplifié. Symloop recommande Next.js pour 90% des projets car il offre tout ce dont vous avez besoin out-of-the-box. Appelez le +213 549 575 512 pour un conseil personnalisé."
    },
    {
      question: "Next.js est-il bon pour le SEO ?",
      answer: "Excellent ! Next.js excelle en SEO grâce au Server-Side Rendering (le contenu est visible par Google dès le premier chargement), à la génération statique (pages ultra-rapides), aux métadonnées dynamiques, et à l'optimisation Core Web Vitals automatique. Les sites Next.js développés par Symloop obtiennent des scores Lighthouse de 95-100. Contactez-nous au +213 549 575 512 pour un audit SEO gratuit."
    },
    {
      question: "Combien coûte un site ou application Next.js en Algérie ?",
      answer: "Chez Symloop, nos tarifs sont compétitifs : site vitrine performant à partir de 35,000 DA, application web (dashboard, SaaS) 80,000-150,000 DA, plateforme e-commerce à partir de 120,000 DA, application complexe sur mesure sur devis. Ces prix incluent le design, développement, optimisation SEO et déploiement. Appelez le +213 549 575 512 pour un devis gratuit."
    },
    {
      question: "Pouvez-vous migrer mon site existant vers Next.js ?",
      answer: "Oui ! Symloop migre des sites WordPress, PHP, ou React classique vers Next.js. La migration inclut : audit du site existant, refonte du code en composants React, optimisation des performances, mise en place du SSR/SSG, et redirection des anciennes URLs pour préserver le SEO. Durée moyenne : 2-6 semaines selon la complexité. Contactez Symloop au +213 549 575 512 pour planifier votre migration."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Développement React & Next.js en Algérie - Applications Web Modernes",
        "description": "Expert développement React et Next.js en Algérie. Applications web performantes, SEO-optimisées. Server-Side Rendering, Static Generation. Devis gratuit.",
        "author": { "@type": "Organization", "name": "Symloop" },
        "publisher": {
          "@type": "Organization",
          "name": "Symloop",
          "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" }
        },
        "datePublished": "2024-01-15",
        "dateModified": "2024-12-01",
        "mainEntityOfPage": "https://symloop.com/blog/developpement-react-nextjs-algerie"
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Développement React & Next.js Algérie", "item": "https://symloop.com/blog/developpement-react-nextjs-algerie" }
        ]
      },
      {
        "@type": "WebPage",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".en-bref", "h1", ".prose"]
        },
        "url": "https://symloop.com/blog/developpement-react-nextjs-algerie"
      },
      {
        "@type": "Service",
        "serviceType": "Développement React & Next.js",
        "provider": {
          "@type": "Organization",
          "name": "Symloop",
          "telephone": "+213549575512",
          "address": { "@type": "PostalAddress", "addressCountry": "DZ" }
        },
        "areaServed": ["Algérie", "Tunisie", "Maroc", "MENA"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services React Next.js",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Site Next.js" }, "price": "35000", "priceCurrency": "DZD" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Application React" }, "price": "80000", "priceCurrency": "DZD" }
          ]
        }
      }
    ]
  };

  const services = [
    { icon: Layout, title: "Sites Vitrines Next.js", desc: "Sites ultra-rapides avec génération statique, SEO parfait et design moderne responsive.", features: ["SSG optimisé", "SEO 100%", "Lighthouse 95+"] },
    { icon: Layers, title: "Applications Web React", desc: "Dashboards, SaaS, portails clients avec interfaces réactives et state management avancé.", features: ["Redux/Zustand", "Real-time", "PWA ready"] },
    { icon: Server, title: "Full-Stack Next.js", desc: "Applications complètes avec API Routes intégrées, authentification et base de données.", features: ["API intégrée", "Auth NextAuth", "Prisma ORM"] },
    { icon: Rocket, title: "E-commerce Next.js", desc: "Boutiques en ligne performantes avec panier, paiements et gestion des stocks.", features: ["Headless CMS", "Paiements", "Inventory"] },
    { icon: RefreshCw, title: "Migration vers Next.js", desc: "Migration de sites WordPress, PHP ou React vers Next.js avec SEO préservé.", features: ["Audit complet", "Redirections", "0 downtime"] },
    { icon: Search, title: "Optimisation Performance", desc: "Audit et optimisation de sites React/Next.js existants pour des scores Lighthouse parfaits.", features: ["Core Web Vitals", "Bundle size", "Caching"] }
  ];

  const pricingPlans = [
    {
      name: "Site Vitrine",
      price: "35,000",
      currency: "DA",
      description: "Site Next.js performant pour PME",
      features: ["5-8 pages", "Design responsive", "SSG/ISR optimisé", "SEO on-page", "Formulaire contact", "Google Analytics", "Hébergement Vercel", "Support 30 jours"],
      popular: false,
      cta: "Démarrer"
    },
    {
      name: "App React Pro",
      price: "80,000",
      currency: "DA",
      description: "Application web complète",
      features: ["Application sur mesure", "Authentification users", "Dashboard admin", "API REST/GraphQL", "Base de données", "Real-time updates", "Tests automatisés", "CI/CD", "Support 90 jours"],
      popular: true,
      cta: "Choisir Pro"
    },
    {
      name: "Plateforme Enterprise",
      price: "Sur devis",
      currency: "",
      description: "Solution web sur mesure",
      features: ["Architecture scalable", "Multi-tenant", "Intégrations complexes", "Microservices", "SSO/SAML", "Audit sécurité", "Documentation", "Formation équipe", "SLA garanti"],
      popular: false,
      cta: "Nous Contacter"
    }
  ];

  const stats = [
    { value: "50+", label: "Projets React livrés" },
    { value: "95+", label: "Score Lighthouse moyen" },
    { value: "#1", label: "Framework JavaScript" },
    { value: "24h", label: "Réponse garantie" }
  ];

  const technologies = [
    { name: "React 18", desc: "Bibliothèque UI" },
    { name: "Next.js 14", desc: "Framework full-stack" },
    { name: "TypeScript", desc: "Typage statique" },
    { name: "Tailwind CSS", desc: "Styling utility" },
    { name: "Redux/Zustand", desc: "State management" },
    { name: "React Query", desc: "Server state" },
    { name: "Prisma", desc: "ORM moderne" },
    { name: "NextAuth.js", desc: "Authentification" },
    { name: "Vercel", desc: "Déploiement" },
    { name: "Jest/Vitest", desc: "Testing" },
    { name: "Storybook", desc: "UI components" },
    { name: "Framer Motion", desc: "Animations" }
  ];

  const famousSites = [
    { name: "Netflix", category: "Streaming" },
    { name: "TikTok", category: "Social" },
    { name: "Twitch", category: "Gaming" },
    { name: "Hulu", category: "Streaming" },
    { name: "Nike", category: "E-commerce" },
    { name: "Notion", category: "Productivité" },
    { name: "Airbnb", category: "Travel" },
    { name: "GitHub", category: "Dev tools" }
  ];

  const relatedArticles = [
    { title: "Développement React Native", href: "/blog/developpement-react-native-algerie", tag: "Mobile" },
    { title: "Développement Node.js Backend", href: "/blog/developpement-nodejs-backend-algerie", tag: "Backend" },
    { title: "SEO & Référencement Algérie", href: "/blog/seo-referencement-algerie-2024", tag: "SEO" },
    { title: "Développement Site Web Algérie 2026", href: "/blog/developpement-site-web-algerie-2026", tag: "Web" },
    { title: "DevOps & Développement Logiciel Algérie 2026", href: "/blog/devops-developpement-logiciel-algerie-2026", tag: "DevOps" }
  ];

  return (
    <>
      <Head>
        <title>Développement React & Next.js Algérie | Applications Web Modernes | Symloop</title>
        <meta name="description" content="Expert développement React et Next.js en Algérie. Applications web performantes, SEO-optimisées. Server-Side Rendering, TypeScript, Tailwind. Devis gratuit." />
        <meta name="keywords" content="react algérie, nextjs algérie, développement frontend, application web react, agence react alger, développeur next.js" />
        <link rel="canonical" href="https://symloop.com/blog/developpement-react-nextjs-algerie" />
        <meta property="og:title" content="Développement React & Next.js Algérie | Applications Web" />
        <meta property="og:description" content="Applications web React et Next.js en Algérie. SSR, SSG, SEO optimisé. TypeScript, Tailwind CSS." />
        <meta property="og:url" content="https://symloop.com/blog/developpement-react-nextjs-algerie" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-900 via-blue-800 to-cyan-900 text-white py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-cyan-300 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Retour au blog
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-cyan-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Code className="w-4 h-4" /> Web
                </span>
                <span className="bg-cyan-700/50 text-cyan-200 px-4 py-1.5 rounded-full text-sm">React Expert</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Développement <span className="text-cyan-400">React & Next.js</span> en Algérie
              </h1>
              <p className="text-xl text-cyan-100 mb-8 max-w-3xl">
                Applications web modernes, performantes et SEO-optimisées.
                Le framework #1 mondial pour des expériences utilisateur exceptionnelles.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/213549575512?text=Bonjour, j'ai un projet React/Next.js"
                   target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-white text-cyan-700 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-50 transition-colors">
                  <MessageCircle className="w-5 h-5" /> Devis Gratuit
                </a>
                <a href="tel:+213549575512" className="inline-flex items-center gap-2 border-2 border-cyan-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-800 transition-colors">
                  +213 549 57 55 12
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* En bref - LLM Optimized Summary */}
        <section className="en-bref bg-cyan-50 border-l-4 border-cyan-500 py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-gray-800 font-medium">
              <strong>En bref :</strong> Symloop développe des applications React et Next.js pour les entreprises algériennes. Sites web performants, SSR, SEO optimal. Basé à Sétif. Contact : +213 549 575 512.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-cyan-50 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-16">
              <p className="text-xl text-gray-600 leading-relaxed">
                <span className="text-cyan-600 font-semibold">React</span> est la bibliothèque JavaScript #1 mondiale, développée par Meta (Facebook).
                <span className="text-cyan-600 font-semibold"> Next.js</span> est le framework full-stack qui ajoute le Server-Side Rendering pour un SEO parfait.
                Utilisé par Netflix, TikTok, Twitch et Nike, c'est le choix des entreprises qui veulent des applications web performantes.
                Chez Symloop, nous sommes experts React/Next.js pour accompagner les entreprises algériennes.
              </p>
            </div>

            {/* Famous Sites */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 rounded-r-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Sites Célèbres en React/Next.js</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {famousSites.map((site, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 text-center shadow-sm">
                      <div className="text-lg font-bold text-cyan-600">{site.name}</div>
                      <div className="text-xs text-gray-500">{site.category}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Services */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Services React & Next.js</h2>
              <p className="text-gray-600 mb-8">Du site vitrine à la plateforme enterprise</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                    className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-cyan-200 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-cyan-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((f, j) => (
                        <span key={j} className="bg-cyan-50 text-cyan-700 px-2 py-1 rounded text-xs">{f}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Why Next.js */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Pourquoi Choisir Next.js ?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "SEO parfait avec Server-Side Rendering (SSR)",
                  "Performances optimales avec Static Generation (SSG)",
                  "Score Lighthouse 95-100 automatiquement",
                  "API Routes intégrées (pas besoin de backend séparé)",
                  "Optimisation d'images automatique",
                  "Routing basé sur les fichiers (simple et intuitif)",
                  "TypeScript natif pour un code robuste",
                  "Déploiement instantané sur Vercel"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Mid */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4">Vous avez un projet web ?</h2>
                <p className="text-cyan-100 mb-6">Discutons de vos besoins et obtenez un devis gratuit sous 24h.</p>
                <a href="https://wa.me/213549575512?text=Bonjour, j'ai un projet React/Next.js à discuter"
                   target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-50 transition-colors">
                  <MessageCircle className="w-5 h-5" /> Discuter sur WhatsApp
                </a>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Tarifs React & Next.js</h2>
              <p className="text-gray-600 text-center mb-8">Des forfaits adaptés à votre projet web</p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif final dépend du nombre de pages, des fonctionnalités et des intégrations requises.
                  <strong> Contactez-nous pour un devis gratuit et personnalisé.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                    className={`relative bg-white rounded-2xl p-6 ${plan.popular ? 'border-2 border-cyan-500 shadow-xl' : 'border border-gray-200'}`}>
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Populaire
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-cyan-600">{plan.price}</span>
                      {plan.currency && <span className="text-gray-500 ml-1">{plan.currency}</span>}
                    </div>
                    <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={`https://wa.me/213549575512?text=Bonjour, je suis intéressé par le forfait ${plan.name} React`}
                       target="_blank" rel="noopener noreferrer"
                       className={`block text-center py-3 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-cyan-600 text-white hover:bg-cyan-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                      {plan.cta}
                    </a>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Technologies */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies & Outils</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {technologies.map((tech, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-cyan-50 transition-colors">
                    <div className="font-semibold text-gray-900">{tech.name}</div>
                    <div className="text-xs text-gray-500">{tech.desc}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions Fréquentes</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors">
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Related Articles */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles Connexes</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((article, i) => (
                  <Link key={i} href={article.href} className="group block bg-gray-50 rounded-xl p-6 hover:bg-cyan-50 transition-colors">
                    <span className="text-xs font-medium text-cyan-600 bg-cyan-100 px-2 py-1 rounded">{article.tag}</span>
                    <h3 className="font-semibold text-gray-900 mt-3 group-hover:text-cyan-600 transition-colors">{article.title}</h3>
                    <span className="inline-flex items-center gap-1 text-sm text-cyan-600 mt-2">
                      Lire <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {["React", "Next.js", "JavaScript", "TypeScript", "Frontend", "SSR", "SSG", "Tailwind CSS", "Vercel", "Algérie"].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à Créer Votre Application Web ?</h2>
            <p className="text-cyan-100 mb-8 text-lg">Sites et applications React/Next.js performants. Devis gratuit sous 24h.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/213549575512?text=Bonjour, je souhaite un devis pour un projet React/Next.js"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-50 transition-colors">
                <MessageCircle className="w-5 h-5" /> Demander un Devis
              </a>
              <a href="tel:+213549575512" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Appeler Maintenant
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
