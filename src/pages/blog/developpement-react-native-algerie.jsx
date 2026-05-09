"use client";
import { useState } from 'react';
import { ArrowLeft, Smartphone, CheckCircle, MessageCircle, Zap, Code, Share2, Users, ChevronDown, AlertCircle, Layers, RefreshCw, Shield, Download, Star, ArrowRight, Apple, Gamepad2, Bell, Camera } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';

export default function ReactNativeAlgerie() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Quelle est la différence entre React Native et une app native ?",
      answer: "React Native utilise JavaScript pour créer des apps qui utilisent des composants natifs réels (pas de WebView). Les performances sont proches du natif (95%+) pour la plupart des cas d'usage. L'avantage : un seul code pour iOS et Android au lieu de deux projets séparés. Le natif pur (Swift/Kotlin) reste préférable pour les apps avec graphismes intensifs ou accès hardware très spécifique."
    },
    {
      question: "Combien coûte le développement d'une app React Native en Algérie ?",
      answer: "Une app simple (MVP) : à partir de 60,000 DA. Une app complète avec backend : 120,000-200,000 DA. Une app complexe avec fonctionnalités avancées : sur devis. L'avantage de React Native est que vous payez un seul développement pour iOS ET Android, ce qui réduit les coûts de 40-50% par rapport au développement natif séparé."
    },
    {
      question: "Quels types d'apps peut-on créer avec React Native ?",
      answer: "React Native est idéal pour : apps de e-commerce, réseaux sociaux, apps de livraison, marketplaces, apps de fitness/santé, apps de réservation, apps d'actualités/contenu, apps de chat/messagerie. Il est moins adapté pour : jeux 3D intensifs, apps de réalité augmentée complexes, ou apps nécessitant un accès hardware très spécifique."
    },
    {
      question: "Les apps React Native sont-elles publiables sur App Store et Play Store ?",
      answer: "Absolument ! Les apps React Native sont de vraies apps natives compilées et acceptées par les deux stores. Nous nous chargeons de tout le processus de publication : création des comptes développeur, préparation des assets (icônes, screenshots), configuration des fiches store, et soumission. Délai d'approbation : 1-7 jours selon les stores."
    },
    {
      question: "Pouvez-vous maintenir et mettre à jour une app existante ?",
      answer: "Oui, nous proposons des contrats de maintenance incluant : corrections de bugs, mises à jour pour nouvelles versions iOS/Android, améliorations de performance, ajout de fonctionnalités, et support technique. Nous pouvons aussi reprendre des projets React Native existants développés par d'autres équipes."
    },
    {
      question: "Qu'est-ce que les mises à jour OTA (Over-The-Air) ?",
      answer: "Les mises à jour OTA permettent de déployer des corrections et nouvelles fonctionnalités directement sur les appareils des utilisateurs sans passer par les stores. Cela permet des cycles de mise à jour rapides (en minutes au lieu de jours). Nous utilisons Expo Updates ou CodePush pour cette fonctionnalité. Idéal pour les fixes urgents et les tests A/B."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Développement React Native en Algérie - Apps iOS & Android",
        "description": "Expert développement React Native en Algérie. Applications mobiles cross-platform iOS et Android. Code partagé, performances natives. Devis gratuit.",
        "author": { "@type": "Organization", "name": "Symloop" },
        "publisher": {
          "@type": "Organization",
          "name": "Symloop",
          "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" }
        },
        "datePublished": "2024-01-15",
        "dateModified": "2024-12-01",
        "mainEntityOfPage": "https://symloop.com/blog/developpement-react-native-algerie"
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
        "@type": "Service",
        "serviceType": "Développement React Native",
        "provider": {
          "@type": "Organization",
          "name": "Symloop",
          "telephone": "+213549575512",
          "address": { "@type": "PostalAddress", "addressCountry": "DZ" }
        },
        "areaServed": ["Algérie", "Tunisie", "Maroc", "MENA"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services React Native",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "App React Native MVP" }, "price": "60000", "priceCurrency": "DZD" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "App React Native Complète" }, "price": "120000", "priceCurrency": "DZD" }
          ]
        }
      }
    ]
  };

  const services = [
    { icon: Smartphone, title: "Apps iOS & Android", desc: "Applications natives pour les deux plateformes avec un seul code source JavaScript/TypeScript.", features: ["iOS natif", "Android natif", "Un seul code"] },
    { icon: Share2, title: "Code Partagé 90%+", desc: "Économisez temps et budget avec jusqu'à 90% de code partagé entre plateformes.", features: ["Logique partagée", "UI adaptative", "Maintenance unique"] },
    { icon: RefreshCw, title: "Mises à Jour OTA", desc: "Déployez des corrections et nouvelles fonctionnalités sans passer par les stores.", features: ["Expo Updates", "CodePush", "Déploiement rapide"] },
    { icon: Layers, title: "UI/UX Native", desc: "Composants natifs réels, animations fluides 60fps, expérience utilisateur premium.", features: ["Native components", "Animations fluides", "Gestures"] },
    { icon: Bell, title: "Push Notifications", desc: "Notifications push iOS et Android avec Firebase Cloud Messaging.", features: ["FCM", "APNs", "Rich notifications"] },
    { icon: Camera, title: "Accès Hardware", desc: "Caméra, GPS, Bluetooth, stockage local et autres fonctionnalités natives.", features: ["Caméra/Galerie", "Géolocalisation", "Biométrie"] }
  ];

  const pricingPlans = [
    {
      name: "App MVP",
      price: "60,000",
      currency: "DA",
      description: "Application mobile simple pour valider votre idée",
      features: ["3-5 écrans principaux", "iOS + Android", "Authentification", "API REST intégrée", "Push notifications", "Publication stores", "Support 30 jours"],
      popular: false,
      cta: "Démarrer"
    },
    {
      name: "App Pro",
      price: "120,000",
      currency: "DA",
      description: "Application complète pour votre business",
      features: ["10+ écrans", "iOS + Android", "Auth social (Google, Facebook)", "Paiements intégrés", "Géolocalisation", "Chat in-app", "Analytics", "Mises à jour OTA", "Support 90 jours"],
      popular: true,
      cta: "Choisir Pro"
    },
    {
      name: "App Enterprise",
      price: "Sur devis",
      currency: "",
      description: "Solution mobile sur mesure",
      features: ["Fonctionnalités illimitées", "Architecture scalable", "Intégrations complexes", "Offline-first", "Multi-langue", "Admin dashboard web", "Formation équipe", "Maintenance annuelle", "SLA garanti"],
      popular: false,
      cta: "Nous Contacter"
    }
  ];

  const stats = [
    { value: "30+", label: "Apps React Native livrées" },
    { value: "90%", label: "Code partagé iOS/Android" },
    { value: "4.8★", label: "Note moyenne stores" },
    { value: "2M+", label: "Utilisateurs actifs" }
  ];

  const technologies = [
    { name: "React Native", desc: "Framework mobile" },
    { name: "Expo", desc: "Dev & build" },
    { name: "TypeScript", desc: "Typage sécurisé" },
    { name: "Redux/Zustand", desc: "State management" },
    { name: "React Navigation", desc: "Navigation" },
    { name: "Firebase", desc: "Backend & auth" },
    { name: "Reanimated", desc: "Animations" },
    { name: "CodePush", desc: "Updates OTA" },
    { name: "Jest", desc: "Testing" },
    { name: "Detox", desc: "E2E testing" },
    { name: "Fastlane", desc: "CI/CD" },
    { name: "Sentry", desc: "Crash reporting" }
  ];

  const famousApps = [
    { name: "Facebook", category: "Social" },
    { name: "Instagram", category: "Photo" },
    { name: "Uber Eats", category: "Delivery" },
    { name: "Discord", category: "Chat" },
    { name: "Pinterest", category: "Social" },
    { name: "Skype", category: "Communication" },
    { name: "Walmart", category: "E-commerce" },
    { name: "Bloomberg", category: "Finance" }
  ];

  const relatedArticles = [
    { title: "Développement Flutter Algérie", href: "/blog/developpement-flutter-algerie", tag: "Flutter" },
    { title: "Développement React & Next.js", href: "/blog/developpement-react-nextjs-algerie", tag: "React" },
    { title: "Coût Développement Application", href: "/blog/cout-developpement-application-algerie", tag: "Tarifs" }
  ];

  return (
    <>
      <Head>
        <title>Développement React Native Algérie | Apps iOS & Android | Symloop</title>
        <meta name="description" content="Expert développement React Native en Algérie. Applications mobiles cross-platform iOS et Android avec un seul code. JavaScript, TypeScript, Expo. Devis gratuit." />
        <meta name="keywords" content="react native algérie, application mobile cross-platform, développement javascript mobile, app ios android algérie, développeur react native" />
        <link rel="canonical" href="https://symloop.com/blog/developpement-react-native-algerie" />
        <meta property="og:title" content="Développement React Native Algérie | Apps iOS & Android" />
        <meta property="og:description" content="Applications mobiles React Native en Algérie. iOS et Android avec code partagé. Expo, TypeScript, Firebase." />
        <meta property="og:url" content="https://symloop.com/blog/developpement-react-native-algerie" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" },
              { "@type": "ListItem", "position": 3, "name": "Developpement React Native Algerie", "item": "https://symloop.com/blog/developpement-react-native-algerie" }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".en-bref-block", "h1", ".prose"]
            },
            "url": "https://symloop.com/blog/developpement-react-native-algerie"
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-violet-800 to-purple-900 text-white py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-purple-300 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Retour au blog
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-purple-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Smartphone className="w-4 h-4" /> Mobile
                </span>
                <span className="bg-purple-700/50 text-purple-200 px-4 py-1.5 rounded-full text-sm">Cross-Platform Expert</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Développement <span className="text-purple-400">React Native</span> en Algérie
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl">
                Applications mobiles iOS et Android avec un seul code.
                Performances natives, développement rapide, coûts réduits de 40%.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/213549575512?text=Bonjour, je souhaite développer une application React Native"
                   target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-white text-purple-700 px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-colors">
                  <MessageCircle className="w-5 h-5" /> Devis Gratuit
                </a>
                <a href="tel:+213549575512" className="inline-flex items-center gap-2 border-2 border-purple-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-800 transition-colors">
                  +213 549 57 55 12
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* En bref - LLM Optimized Block */}
        <section className="en-bref-block bg-purple-50 border-l-4 border-purple-500 py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-purple-800 mb-1">En bref</p>
            <p className="text-gray-800 leading-relaxed">
              Symloop developpe des applications React Native pour les entreprises algeriennes. iOS et Android avec une seule base de code. Base a Setif. Contact: +213 549 575 512.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-purple-50 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="text-3xl font-bold text-purple-600">{stat.value}</div>
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
                <span className="text-purple-600 font-semibold">React Native</span> permet de créer des applications mobiles natives pour iOS et Android
                avec un seul code JavaScript/TypeScript. Développé par <span className="text-purple-600 font-semibold">Meta (Facebook)</span>,
                il est utilisé par des géants comme Instagram, Discord, et Uber Eats.
                Chez Symloop, nous maîtrisons React Native pour livrer des apps performantes aux entreprises algériennes.
              </p>
            </div>

            {/* Famous Apps */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 rounded-r-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Apps Célèbres en React Native</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {famousApps.map((app, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 text-center shadow-sm">
                      <div className="text-lg font-bold text-purple-600">{app.name}</div>
                      <div className="text-xs text-gray-500">{app.category}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Services */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Services React Native</h2>
              <p className="text-gray-600 mb-8">De l'idée à la publication sur les stores</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                    className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-purple-200 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((f, j) => (
                        <span key={j} className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs">{f}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Why React Native */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Pourquoi Choisir React Native ?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Un seul code pour iOS et Android = 40% d'économies",
                  "Performances proches du natif (95%+)",
                  "Large communauté et écosystème riche",
                  "Mises à jour OTA sans passer par les stores",
                  "Équipe JavaScript peut développer mobile",
                  "Réutilisation de code avec apps web React",
                  "Hot reloading pour développement rapide",
                  "Maintenu par Meta (Facebook)"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Mid */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4">Vous avez une idée d'app mobile ?</h2>
                <p className="text-purple-100 mb-6">Discutons de votre projet et obtenez un devis gratuit sous 24h.</p>
                <a href="https://wa.me/213549575512?text=Bonjour, j'ai une idée d'application mobile React Native"
                   target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-colors">
                  <MessageCircle className="w-5 h-5" /> Discuter sur WhatsApp
                </a>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Tarifs Apps React Native</h2>
              <p className="text-gray-600 text-center mb-8">Des forfaits adaptés à votre projet mobile</p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif final dépend de la complexité des fonctionnalités, des intégrations et du design souhaité.
                  <strong> Contactez-nous pour un devis gratuit et personnalisé.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                    className={`relative bg-white rounded-2xl p-6 ${plan.popular ? 'border-2 border-purple-500 shadow-xl' : 'border border-gray-200'}`}>
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Populaire
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-purple-600">{plan.price}</span>
                      {plan.currency && <span className="text-gray-500 ml-1">{plan.currency}</span>}
                    </div>
                    <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={`https://wa.me/213549575512?text=Bonjour, je suis intéressé par le forfait ${plan.name} React Native`}
                       target="_blank" rel="noopener noreferrer"
                       className={`block text-center py-3 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
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
                  <div key={i} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-purple-50 transition-colors">
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
                  <Link key={i} href={article.href} className="group block bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                    <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded">{article.tag}</span>
                    <h3 className="font-semibold text-gray-900 mt-3 group-hover:text-purple-600 transition-colors">{article.title}</h3>
                    <span className="inline-flex items-center gap-1 text-sm text-purple-600 mt-2">
                      Lire <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Cross-links */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Articles recommandes</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/blog/developpement-application-mobile-algerie-2026" className="group block bg-purple-50 rounded-xl p-5 hover:bg-purple-100 transition-colors">
                  <span className="text-xs font-medium text-purple-600">Mobile 2026</span>
                  <h3 className="font-semibold text-gray-900 mt-1 group-hover:text-purple-600 transition-colors">Developpement Application Mobile Algerie 2026</h3>
                </Link>
                <Link href="/blog/solutions-informatiques-algerie-2026" className="group block bg-purple-50 rounded-xl p-5 hover:bg-purple-100 transition-colors">
                  <span className="text-xs font-medium text-purple-600">Solutions IT</span>
                  <h3 className="font-semibold text-gray-900 mt-1 group-hover:text-purple-600 transition-colors">Solutions Informatiques en Algerie 2026</h3>
                </Link>
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {["React Native", "Mobile", "iOS", "Android", "JavaScript", "TypeScript", "Cross-Platform", "Expo", "Algérie"].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à Lancer Votre App Mobile ?</h2>
            <p className="text-purple-100 mb-8 text-lg">iOS et Android avec un seul développement. Devis gratuit sous 24h.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/213549575512?text=Bonjour, je souhaite un devis pour une application React Native"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors">
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
