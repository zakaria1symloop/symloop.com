"use client";
import { useState } from 'react';
import { Calendar, User, ArrowLeft, Search, CheckCircle, TrendingUp, MessageCircle, Globe, BarChart3, Target, Zap, ChevronDown, AlertCircle, Award, Eye, MousePointer, FileSearch, Link2, Gauge, Smartphone, Clock, Users, Star, ArrowRight, MapPin, Languages, Settings, PenTool } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug, getRelatedBlogs } from '../../data/blogs';

export default function SeoAlgerie() {
  const router = useRouter();
  const blog = getBlogBySlug('seo-referencement-algerie-2024');
  const relatedBlogs = getRelatedBlogs('seo-referencement-algerie-2024', 3);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Combien de temps pour voir des résultats SEO en Algérie ?",
      answer: "Les premiers résultats SEO apparaissent généralement entre 3 et 6 mois. Pour les mots-clés très concurrentiels, comptez 6 à 12 mois. Le SEO local en Algérie peut donner des résultats plus rapides car la concurrence est moins forte qu'en Europe."
    },
    {
      question: "Quel budget prévoir pour le SEO en Algérie ?",
      answer: "Un audit SEO complet coûte entre 15,000 et 30,000 DA. Pour un accompagnement mensuel, comptez 25,000 à 60,000 DA/mois selon l'ampleur du projet. C'est un investissement rentable car le SEO génère du trafic gratuit sur le long terme."
    },
    {
      question: "SEO ou publicité Google Ads : que choisir ?",
      answer: "Le SEO est idéal pour le long terme avec un ROI élevé une fois positionné. Google Ads donne des résultats immédiats mais coûte cher à maintenir. La stratégie idéale combine les deux : Ads pour démarrer, SEO pour la pérennité."
    },
    {
      question: "Comment optimiser mon site pour le SEO local en Algérie ?",
      answer: "Créez une fiche Google My Business optimisée, ajoutez vos coordonnées sur chaque page, utilisez des mots-clés géolocalisés (Alger, Oran, Constantine...), obtenez des backlinks locaux, et collectez des avis clients."
    },
    {
      question: "Le contenu en arabe est-il important pour le SEO ?",
      answer: "Oui ! Plus de 40% des recherches en Algérie sont en arabe (darija ou arabe standard). Un site bilingue français/arabe touche un public plus large et améliore votre référencement pour ces requêtes."
    },
    {
      question: "Comment Symloop peut améliorer mon référencement ?",
      answer: "Nous proposons un audit SEO complet, l'optimisation technique de votre site, la création de contenu optimisé, la stratégie de backlinks locaux, et un suivi mensuel avec rapports détaillés. Nos experts connaissent le marché algérien."
    }
  ];

  const faqsSchema = [
    {
      "@type": "Question",
      "name": "Comment être premier sur Google en Algérie ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Pour être premier sur Google en Algérie, il faut combiner un audit SEO technique, une optimisation on-page avec des mots-clés locaux (algérie, alger, oran...), du contenu de qualité régulier, des backlinks depuis des sites algériens de confiance, et une fiche Google Business optimisée. Un accompagnement par une agence SEO locale comme Symloop accélère les résultats." }
    },
    {
      "@type": "Question",
      "name": "Combien coûte le référencement SEO en Algérie ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un audit SEO en Algérie coûte entre 15 000 et 30 000 DA. Un accompagnement SEO mensuel revient entre 25 000 et 60 000 DA/mois selon la taille du site et la concurrence. Le SEO est un investissement rentable sur le long terme car il génère du trafic organique gratuit une fois les positions acquises." }
    },
    {
      "@type": "Question",
      "name": "Quelle agence SEO choisir en Algérie ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Choisissez une agence SEO algérienne qui connaît le marché local, propose un audit gratuit, partage des études de cas vérifiables et offre un suivi mensuel transparent. Symloop, basée à Sétif, accompagne des entreprises dans toute l'Algérie avec des résultats mesurables et un reporting détaillé." }
    },
    {
      "@type": "Question",
      "name": "Combien de temps pour voir les résultats SEO en Algérie ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Les premiers résultats SEO en Algérie apparaissent généralement entre 2 et 4 mois pour les mots-clés peu concurrentiels, et entre 4 et 8 mois pour les requêtes plus compétitives. Le SEO local donne souvent des résultats plus rapides car la concurrence en ligne en Algérie reste moins forte qu'en Europe." }
    },
    {
      "@type": "Question",
      "name": "Symloop fait-il du référencement Google en Algérie ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Oui, Symloop est une agence spécialisée en référencement Google en Algérie. Nous proposons l'audit SEO, l'optimisation technique, la création de contenu optimisé, le netlinking local et le SEO Google Business. Basés à Sétif, nous accompagnons des clients dans toute l'Algérie. Contactez-nous au +213 549 575 512." }
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "SEO & Référencement en Algérie 2024 - Guide Complet",
        "description": "Guide complet du SEO en Algérie : stratégies de référencement, optimisation Google, mots-clés locaux. Dominez la première page Google avec nos experts.",
        "author": { "@type": "Organization", "name": "Symloop" },
        "publisher": {
          "@type": "Organization",
          "name": "Symloop",
          "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" }
        },
        "datePublished": blog?.date,
        "dateModified": "2024-12-01",
        "mainEntityOfPage": "https://symloop.com/blog/seo-referencement-algerie-2024"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          ...faqsSchema,
          ...faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
          }))
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "SEO & Référencement Algérie 2024", "item": "https://symloop.com/blog/seo-referencement-algerie-2024" }
        ]
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".en-bref", "article p:first-of-type"]
      },
      {
        "@type": "Service",
        "name": "SEO & Référencement Algérie",
        "provider": {
          "@type": "Organization",
          "name": "Symloop",
          "telephone": "+213549575512",
          "address": { "@type": "PostalAddress", "addressCountry": "DZ" }
        },
        "areaServed": ["Algérie", "Alger", "Oran", "Constantine", "Annaba"],
        "description": "Services de référencement naturel et optimisation SEO pour entreprises algériennes",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "DZD",
          "lowPrice": "15000",
          "highPrice": "60000"
        }
      }
    ]
  };

  const services = [
    {
      icon: FileSearch,
      title: "Audit SEO Complet",
      description: "Analyse technique, contenu et backlinks de votre site",
      features: ["Analyse de 100+ critères", "Rapport détaillé PDF", "Plan d'action priorité", "Audit concurrents"]
    },
    {
      icon: Target,
      title: "Recherche Mots-Clés",
      description: "Identification des opportunités de positionnement",
      features: ["Mots-clés locaux", "Volume de recherche", "Intention utilisateur", "Opportunités niches"]
    },
    {
      icon: PenTool,
      title: "Contenu Optimisé",
      description: "Rédaction SEO pour blogs et pages",
      features: ["Articles optimisés", "Pages de vente", "Contenu multilingue", "Optimisation existant"]
    },
    {
      icon: Link2,
      title: "Netlinking Algérie",
      description: "Acquisition de backlinks locaux de qualité",
      features: ["Annuaires algériens", "Partenariats locaux", "Guest posting", "Presse en ligne"]
    },
    {
      icon: Settings,
      title: "SEO Technique",
      description: "Optimisation technique de votre site",
      features: ["Vitesse chargement", "Mobile-first", "Structure URLs", "Données structurées"]
    },
    {
      icon: MapPin,
      title: "SEO Local",
      description: "Dominez les recherches locales",
      features: ["Google My Business", "Citations locales", "Avis clients", "Géolocalisation"]
    }
  ];

  const pricingPlans = [
    {
      name: "Audit SEO",
      price: "15,000",
      unit: "DA",
      period: "unique",
      description: "Diagnostic complet de votre site",
      features: [
        "Audit technique complet",
        "Analyse des mots-clés",
        "Audit de la concurrence",
        "Rapport PDF détaillé",
        "Plan d'action prioritaire",
        "1h de consultation"
      ],
      popular: false,
      cta: "Commander l'Audit"
    },
    {
      name: "SEO Mensuel Pro",
      price: "35,000",
      unit: "DA",
      period: "/mois",
      description: "Accompagnement SEO continu",
      features: [
        "Optimisation continue",
        "2 articles SEO/mois",
        "Suivi positions",
        "Netlinking local",
        "Rapport mensuel",
        "Support prioritaire"
      ],
      popular: true,
      cta: "Démarrer Maintenant"
    },
    {
      name: "SEO Complet",
      price: "Sur devis",
      unit: "",
      period: "",
      description: "Stratégie SEO 360°",
      features: [
        "Audit + optimisation complète",
        "Contenu illimité",
        "Netlinking premium",
        "SEO local multi-villes",
        "Formation équipe",
        "Account manager dédié"
      ],
      popular: false,
      cta: "Demander un Devis"
    }
  ];

  const stats = [
    { value: "28M+", label: "Internautes algériens", icon: Users },
    { value: "90%", label: "Utilisent Google", icon: Search },
    { value: "75%", label: "Cliquent page 1", icon: MousePointer },
    { value: "+300%", label: "ROI moyen SEO", icon: TrendingUp }
  ];

  const strategies = [
    { num: "01", title: "Recherche de Mots-Clés Locaux", desc: "Identifier les termes recherchés par les Algériens : 'prix algérie', 'alger', 'livraison algérie', 'paiement CIB'", icon: Search },
    { num: "02", title: "Contenu Multilingue", desc: "Contenu en français, arabe (darija/standard) et anglais pour maximiser la portée et toucher tous les segments", icon: Languages },
    { num: "03", title: "SEO Technique", desc: "Vitesse de chargement optimale, design mobile-first, structure des URLs claire et données structurées", icon: Settings },
    { num: "04", title: "Backlinks Locaux", desc: "Liens depuis sites algériens de qualité : annuaires, partenaires, presse locale, blogs influents", icon: Link2 },
    { num: "05", title: "Google My Business", desc: "Fiche optimisée avec photos, avis clients, posts réguliers pour le référencement local", icon: MapPin }
  ];

  const keywords = [
    "création site web algérie", "agence web alger", "e-commerce algérie", "application mobile algérie",
    "développeur algérie", "prix site web", "paiement cib", "livraison algérie", "startup algérie",
    "marketing digital algérie", "référencement google", "seo oran", "site internet constantine"
  ];

  const technologies = [
    { name: "Google Search Console", category: "Analyse" },
    { name: "Google Analytics 4", category: "Tracking" },
    { name: "Ahrefs", category: "Backlinks" },
    { name: "SEMrush", category: "Keywords" },
    { name: "Screaming Frog", category: "Audit" },
    { name: "PageSpeed Insights", category: "Performance" },
    { name: "Google My Business", category: "Local" },
    { name: "Schema.org", category: "Structured Data" }
  ];

  return (
    <>
      <Head>
        <title>SEO & Référencement Algérie 2024 | Agence SEO Alger - Symloop</title>
        <meta name="description" content="Expert SEO en Algérie. Audit SEO, référencement Google, optimisation site web. Dominez la première page Google avec notre agence SEO à Alger. Devis gratuit." />
        <meta name="keywords" content="seo algérie, référencement google algérie, agence seo alger, optimisation site web, première page google, audit seo algérie, mots-clés algérie" />
        <link rel="canonical" href="https://symloop.com/blog/seo-referencement-algerie-2024" />
        <meta property="og:title" content="SEO & Référencement Algérie 2024 | Agence SEO Alger" />
        <meta property="og:description" content="Expert SEO en Algérie. Audit SEO, référencement Google, optimisation site web. Dominez la première page Google." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/seo-referencement-algerie-2024" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-black text-white py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8">
                <ArrowLeft className="w-4 h-4" /> Retour au blog
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Search className="w-4 h-4" />SEO
                </span>
                <span className="text-gray-400 text-sm">{blog?.readTime}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                SEO & Référencement en <span className="text-orange-400">Algérie</span> 2024
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Guide complet pour dominer la première page Google. Stratégies locales, mots-clés algériens,
                et techniques d'optimisation adaptées au marché MENA.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/213549575512?text=Bonjour, je souhaite un audit SEO gratuit pour mon site"
                   target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                  <MessageCircle className="w-5 h-5" /> Audit SEO Gratuit
                </a>
                <a href="tel:+213549575512" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                  <span>+213 549 57 55 12</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                Le <span className="text-orange-600 font-semibold">SEO en Algérie</span> est devenu essentiel pour toute entreprise souhaitant
                développer sa visibilité en ligne. Avec plus de <span className="text-orange-600 font-semibold">28 millions d'internautes algériens</span> dont
                90% utilisent Google, être positionné en <span className="text-orange-600 font-semibold">première page</span> peut
                transformer radicalement votre business.
              </p>
            </div>

            {/* En bref - LLM Snippet */}
            <section className="en-bref bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-12" aria-label="En bref">
              <h2 className="text-lg font-bold text-orange-700 mb-2">En bref</h2>
              <p className="text-gray-700 leading-relaxed">
                Symloop propose des services de référencement SEO pour les entreprises algériennes.
                Audit SEO, optimisation technique, contenu optimisé, backlinks, SEO local Google Business.
                Résultats visibles en 2-4 mois. Basé à Sétif, clients dans toute l'Algérie.
                Contact&nbsp;: <a href="tel:+213549575512" className="text-orange-600 font-semibold">+213 549 575 512</a>.
              </p>
            </section>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 rounded-r-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">SEO Algérie en Chiffres</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-orange-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategies Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-orange-600" />
                </div>
                5 Stratégies SEO Clés pour l'Algérie
              </h2>
              <div className="space-y-6">
                {strategies.map((step, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 items-start bg-gray-50 p-6 rounded-2xl hover:bg-orange-50 transition-colors">
                    <div className="bg-orange-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center font-bold flex-shrink-0">{step.num}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                        <step.icon className="w-5 h-5 text-orange-500" />
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Services Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-orange-600" />
                </div>
                Nos Services SEO en Algérie
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-orange-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 text-white text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Audit SEO Gratuit de Votre Site</h2>
                <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                  Découvrez les opportunités d'amélioration de votre référencement. Nos experts analysent
                  votre site et vous proposent un plan d'action personnalisé.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="https://wa.me/213549575512?text=Bonjour, je souhaite un audit SEO gratuit pour mon site web"
                     target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-orange-50 transition-colors">
                    <MessageCircle className="w-5 h-5" /> Demander Mon Audit Gratuit
                  </a>
                </div>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-orange-600" />
                </div>
                Tarifs SEO Algérie
              </h2>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif exact dépend de la taille de votre site, la concurrence dans votre secteur, et vos objectifs.
                  <strong> Contactez-nous pour un devis gratuit et personnalisé.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`rounded-2xl p-6 ${plan.popular ? 'bg-orange-600 text-white ring-4 ring-orange-200' : 'bg-gray-50'}`}>
                    {plan.popular && (
                      <span className="inline-block bg-white text-orange-600 px-3 py-1 rounded-full text-xs font-bold mb-4">
                        RECOMMANDÉ
                      </span>
                    )}
                    <h3 className={`text-xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                    <p className={`text-sm mt-1 ${plan.popular ? 'text-orange-100' : 'text-gray-600'}`}>{plan.description}</p>
                    <div className={`text-3xl font-bold my-4 ${plan.popular ? 'text-white' : 'text-orange-600'}`}>
                      {plan.price} {plan.unit}
                      <span className={`text-sm font-normal ${plan.popular ? 'text-orange-100' : 'text-gray-500'}`}>{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, j) => (
                        <li key={j} className={`flex items-center gap-2 text-sm ${plan.popular ? 'text-orange-100' : 'text-gray-600'}`}>
                          <CheckCircle className={`w-4 h-4 ${plan.popular ? 'text-white' : 'text-orange-500'}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a href="https://wa.me/213549575512?text=Bonjour, je suis intéressé par votre offre SEO"
                       target="_blank" rel="noopener noreferrer"
                       className={`block text-center py-3 rounded-xl font-semibold transition-colors ${
                         plan.popular
                           ? 'bg-white text-orange-600 hover:bg-orange-50'
                           : 'bg-orange-600 text-white hover:bg-orange-700'
                       }`}>
                      {plan.cta}
                    </a>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Keywords Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Mots-Clés Populaires en Algérie</h2>
              <div className="flex flex-wrap gap-3">
                {keywords.map((kw, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors cursor-default">
                    {kw}
                  </motion.span>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-orange-600" />
                </div>
                Questions Fréquentes sur le SEO en Algérie
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Technologies */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Outils SEO que Nous Utilisons</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {technologies.map((tech, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-orange-50 transition-colors">
                    <div className="font-semibold text-gray-900">{tech.name}</div>
                    <div className="text-xs text-orange-600">{tech.category}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Cross-links */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles Recommandés</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/developpement-site-web-algerie-2026" className="group flex items-center gap-4 bg-gray-50 hover:bg-orange-50 rounded-2xl p-6 transition-colors border border-gray-200 hover:border-orange-300">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Développement Site Web en Algérie 2026</h3>
                    <p className="text-sm text-gray-500">Guide complet pour créer votre site web professionnel</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-orange-400 flex-shrink-0 ml-auto" />
                </Link>
                <Link href="/blog/digitaliser-entreprise-algerie-ne-perdez-plus-1-dinar" className="group flex items-center gap-4 bg-gray-50 hover:bg-orange-50 rounded-2xl p-6 transition-colors border border-gray-200 hover:border-orange-300">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Digitaliser Votre Entreprise en Algérie</h3>
                    <p className="text-sm text-gray-500">Ne perdez plus 1 dinar — passez au digital</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-orange-400 flex-shrink-0 ml-auto" />
                </Link>
              </div>
            </section>

            {/* Related Articles */}
            {relatedBlogs && relatedBlogs.length > 0 && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Articles Connexes</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedBlogs.map((article, i) => (
                    <Link key={i} href={`/blog/${article.slug}`}
                          className="group bg-gray-50 rounded-2xl p-6 hover:bg-orange-50 transition-colors">
                      <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{article.subtitle}</p>
                      <div className="flex items-center gap-2 mt-4 text-orange-600 text-sm font-medium">
                        Lire l'article <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {blog?.tags?.map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-orange-500 to-amber-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à Dominer Google en Algérie ?</h2>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
              Nos experts SEO analysent votre site et vous proposent une stratégie personnalisée pour atteindre la première page.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/213549575512?text=Bonjour, je souhaite améliorer mon référencement Google en Algérie"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors">
                <MessageCircle className="w-5 h-5" /> Demander Mon Audit Gratuit
              </a>
              <a href="tel:+213549575512"
                 className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-colors border border-orange-400">
                +213 549 57 55 12
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
