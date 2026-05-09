"use client";
import { useState } from 'react';
import { ArrowLeft, Home, CheckCircle, MessageCircle, Search, MapPin, Key, BarChart3, ChevronDown, AlertCircle, Building2, Camera, FileText, Users, DollarSign, Shield, Smartphone, Globe, Clock, Star, ArrowRight, TrendingUp, Calculator } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug } from '../../data/blogs';

export default function ImmobilierAlgerie() {
  const blog = getBlogBySlug('application-immobilier-algerie-2024');
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Combien coûte le développement d'une application immobilière en Algérie ?",
      answer: "Chez Symloop, un portail d'annonces basique démarre à 80 000 DA, une plateforme avec gestion locative à partir de 180 000 DA. Les plateformes complètes type marketplace sont sur devis. Contactez-nous au +213 549 575 512 pour un devis gratuit."
    },
    {
      question: "Quelles fonctionnalités sont essentielles pour une plateforme immobilière ?",
      answer: "Symloop intègre toutes les fonctionnalités clés : recherche multicritères avancée, carte interactive, système de favoris, messagerie intégrée, alertes email/push, galerie photos HD, visite virtuelle 360°, estimation automatique des prix. Appelez le +213 549 575 512 pour en discuter."
    },
    {
      question: "Quel délai pour développer une application PropTech ?",
      answer: "Symloop livre un portail d'annonces basique en 4-6 semaines. Une plateforme avec gestion locative complète nécessite 8-12 semaines. Une marketplace immobilière full-stack peut prendre 3-6 mois. Contactez-nous au +213 549 575 512 pour planifier."
    },
    {
      question: "Peut-on intégrer le paiement en ligne des loyers ?",
      answer: "Oui, Symloop intègre CIB/Dahabia pour les paiements locaux et Stripe/PayPal pour les clients internationaux. Le système génère automatiquement les quittances de loyer et envoie des rappels de paiement. Appelez le +213 549 575 512."
    },
    {
      question: "Proposez-vous des visites virtuelles 360° pour l'immobilier ?",
      answer: "Oui, Symloop intègre des solutions de visite virtuelle avec support des photos 360°, tours virtuels interactifs, et réalité augmentée. Compatible avec tous les smartphones modernes. Basé à Sétif, contactez-nous au +213 549 575 512."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Applications Immobilier PropTech en Algérie 2024 - Développement Plateforme",
        "description": "Développement d'applications immobilières en Algérie : portail d'annonces, gestion locative, CRM agence, visite virtuelle 360°. Solutions PropTech sur mesure.",
        "image": "https://symloop.com/images/blog/proptech-algerie.jpg",
        "datePublished": "2024-01-15",
        "dateModified": "2024-12-01",
        "author": {
          "@type": "Organization",
          "name": "Symloop",
          "url": "https://symloop.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Symloop",
          "logo": {
            "@type": "ImageObject",
            "url": "https://symloop.com/logo.png"
          }
        },
        "mainEntityOfPage": "https://symloop.com/blog/application-immobilier-algerie-2024"
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "Service",
        "serviceType": "Développement Application Immobilière",
        "provider": {
          "@type": "Organization",
          "name": "Symloop",
          "telephone": "+213549575512",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "DZ",
            "addressLocality": "Algérie"
          }
        },
        "areaServed": ["DZ", "TN", "MA", "MENA"],
        "description": "Développement de plateformes immobilières PropTech sur mesure en Algérie"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Application Immobilier Algérie 2024", "item": "https://symloop.com/blog/application-immobilier-algerie-2024" }
        ]
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".en-bref-block", "h1", "meta[name='description']"]
      }
    ]
  };

  const solutions = [
    {
      icon: Search,
      title: "Portail Annonces Immobilières",
      desc: "Plateforme type Ouedkniss spécialisée immobilier avec recherche avancée multicritères",
      features: ["Recherche par ville, quartier, prix", "Filtres surface, pièces, étage", "Carte interactive Leaflet/Google Maps", "Alertes nouvelles annonces", "Favoris et comparaison"]
    },
    {
      icon: Key,
      title: "Gestion Locative Complète",
      desc: "Solution complète pour propriétaires et gestionnaires de biens locatifs",
      features: ["Suivi des loyers et quittances", "État des lieux numérique", "Gestion des contrats", "Rappels paiements automatiques", "Historique locataires"]
    },
    {
      icon: Camera,
      title: "Visite Virtuelle 360°",
      desc: "Tours immersifs pour visiter les biens à distance sans déplacement",
      features: ["Photos 360° interactives", "Plans 3D des appartements", "Réalité augmentée meubles", "Compatible VR/casques", "Partage sur réseaux sociaux"]
    },
    {
      icon: BarChart3,
      title: "CRM Agence Immobilière",
      desc: "Outil complet pour agences : mandats, clients, pipeline de ventes",
      features: ["Gestion portefeuille mandats", "Suivi prospects et clients", "Pipeline ventes visuel", "Rapports et statistiques", "Multi-agents et équipes"]
    },
    {
      icon: Calculator,
      title: "Estimation Prix Automatique",
      desc: "Algorithme d'estimation basé sur les données du marché algérien",
      features: ["Analyse prix au m²", "Comparaison quartiers", "Historique des ventes", "Tendances du marché", "Rapport d'estimation PDF"]
    },
    {
      icon: Building2,
      title: "Promotion Immobilière",
      desc: "Solution pour promoteurs : vente sur plan, gestion projets neufs",
      features: ["Catalogue programmes neufs", "Réservation en ligne", "Suivi avancement travaux", "Plans appartements interactifs", "Gestion paiements échelonnés"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "80 000",
      unit: "DA",
      description: "Portail d'annonces basique",
      features: [
        "Site web responsive",
        "Jusqu'à 500 annonces",
        "Recherche multicritères",
        "Formulaire de contact",
        "Panel admin basique",
        "Hébergement 1 an inclus"
      ],
      cta: "Démarrer",
      popular: false
    },
    {
      name: "Professionnel",
      price: "180 000",
      unit: "DA",
      description: "Plateforme gestion locative",
      features: [
        "Tout Starter +",
        "Gestion locative complète",
        "Paiement loyers en ligne",
        "Quittances automatiques",
        "Messagerie intégrée",
        "App mobile iOS/Android",
        "Support 6 mois"
      ],
      cta: "Choisir Pro",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      unit: "",
      description: "Marketplace complète",
      features: [
        "Tout Professionnel +",
        "Visite virtuelle 360°",
        "CRM agence multi-utilisateurs",
        "Estimation prix IA",
        "API partenaires",
        "Formation équipe",
        "Support prioritaire 24/7"
      ],
      cta: "Nous contacter",
      popular: false
    }
  ];

  const stats = [
    { value: "50+", label: "Projets PropTech livrés" },
    { value: "15M+", label: "Annonces gérées" },
    { value: "200+", label: "Agences clientes" },
    { value: "98%", label: "Satisfaction client" }
  ];

  const marketTrends = [
    {
      title: "Digitalisation du secteur",
      desc: "70% des recherches immobilières commencent en ligne en Algérie. Les agences sans présence digitale perdent des opportunités.",
      icon: TrendingUp
    },
    {
      title: "Mobile-first obligatoire",
      desc: "85% des utilisateurs algériens consultent les annonces sur mobile. L'application doit être optimisée smartphone.",
      icon: Smartphone
    },
    {
      title: "Confiance et transparence",
      desc: "Les acheteurs veulent des informations vérifiées : photos réelles, prix affichés, documents légaux accessibles.",
      icon: Shield
    },
    {
      title: "Visites virtuelles en hausse",
      desc: "Depuis 2020, la demande de visites virtuelles 360° a explosé. Gain de temps pour agents et clients.",
      icon: Camera
    }
  ];

  return (
    <>
      <Head>
        <title>Application Immobilier Algérie 2024 | Développement PropTech | Symloop</title>
        <meta name="description" content="Développement d'applications immobilières en Algérie : portail annonces, gestion locative, CRM agence, visite virtuelle 360°. Solutions PropTech sur mesure à partir de 80 000 DA." />
        <meta name="keywords" content="application immobilier algérie, proptech algérie, plateforme immobilière, gestion locative algérie, annonces immobilier, visite virtuelle 360, CRM agence immobilière, développement immobilier algérie" />
        <link rel="canonical" href="https://symloop.com/blog/application-immobilier-algerie-2024" />
        <meta property="og:title" content="Application Immobilier Algérie 2024 | Développement PropTech" />
        <meta property="og:description" content="Développement d'applications immobilières en Algérie : portail annonces, gestion locative, visite virtuelle. Solutions PropTech sur mesure." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/application-immobilier-algerie-2024" />
        <meta property="og:image" content="https://symloop.com/images/blog/proptech-algerie.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Application Immobilier Algérie 2024 | PropTech" />
        <meta name="twitter:description" content="Solutions PropTech sur mesure pour l'immobilier algérien" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
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
                <span className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Home className="w-4 h-4" />PropTech
                </span>
                <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                  Mis à jour 2024
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Applications <span className="text-blue-400">Immobilier</span> en Algérie 2024
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Développement de plateformes PropTech sur mesure : portail d'annonces, gestion locative,
                CRM agence, visite virtuelle 360°. Transformez votre activité immobilière avec le digital.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-gray-900/50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* En bref - LLM Optimized Block */}
        <section className="en-bref-block bg-gray-50 border-l-4 border-blue-500 py-6">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-blue-600 mb-2">En bref</p>
            <p className="text-gray-700 leading-relaxed">
              Symloop developpe des applications immobilieres pour agences et promoteurs en Algerie. Annonces, recherche, visites virtuelles, gestion locative. Base a Setif. Contact: +213 549 575 512.
            </p>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                Le secteur <strong className="text-blue-600">immobilier en Algérie</strong> connaît une transformation
                digitale majeure. Les agences traditionnelles évoluent vers des modèles hybrides, les promoteurs
                lancent des plateformes de réservation en ligne, et les particuliers recherchent des outils
                modernes pour gérer leurs biens. Chez <strong>Symloop</strong>, nous développons des
                solutions <strong className="text-blue-600">PropTech</strong> adaptées au marché algérien.
              </p>
            </div>

            {/* Market Trends */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                Tendances du Marché Immobilier Digital en Algérie
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {marketTrends.map((trend, i) => (
                  <div key={i} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <trend.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{trend.title}</h3>
                    <p className="text-gray-600 text-sm">{trend.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Solutions PropTech */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Building2 className="w-6 h-6 text-blue-600" />
                Nos Solutions PropTech
              </h2>
              <div className="space-y-6">
                {solutions.map((solution, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <solution.icon className="w-7 h-7 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                        <p className="text-gray-600 mb-4">{solution.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {solution.features.map((feature, j) => (
                            <span key={j} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Features List */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                Fonctionnalités Plateforme Immobilière Complète
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Recherche multicritères (ville, prix, surface, type...)",
                  "Carte interactive des biens avec clustering",
                  "Alertes personnalisées nouvelles annonces",
                  "Messagerie propriétaire-locataire sécurisée",
                  "Estimation prix automatique par IA",
                  "Gestion documents (bail, état des lieux, quittances)",
                  "Paiement loyer en ligne (CIB/Dahabia)",
                  "App mobile iOS et Android natives",
                  "Visite virtuelle 360° et plans 3D",
                  "Système de favoris et comparaison",
                  "Notifications push temps réel",
                  "Multi-langue (Français, Arabe, Anglais)",
                  "Panel admin complet avec statistiques",
                  "API pour intégration partenaires",
                  "SEO optimisé pour chaque annonce",
                  "Partage réseaux sociaux intégré"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Mid-page */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center mb-16">
              <h3 className="text-2xl font-bold mb-3">Projet Immobilier Digital ?</h3>
              <p className="text-blue-100 mb-6">Discutons de votre plateforme PropTech sur mesure</p>
              <a
                href="https://wa.me/213549575512?text=Bonjour, je souhaite développer une application immobilière"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Discuter sur WhatsApp
              </a>
            </div>

            {/* Pricing Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-blue-600" />
                Tarifs Développement Application Immobilière
              </h2>

              {/* Pricing Warning */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif exact dépend des fonctionnalités choisies,
                  du nombre d'annonces, des intégrations (paiement, cartographie, visite virtuelle) et du design personnalisé.
                  <strong> Contactez-nous pour un devis gratuit et personnalisé.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, i) => (
                  <div
                    key={i}
                    className={`relative bg-white rounded-2xl p-6 border-2 ${
                      plan.popular ? 'border-blue-500 shadow-xl' : 'border-gray-100'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          POPULAIRE
                        </span>
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                      {plan.unit && <span className="text-gray-500 ml-1">{plan.unit}</span>}
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://wa.me/213549575512?text=Bonjour, je suis intéressé par le pack immobilier ${plan.name}"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-center py-3 rounded-xl font-semibold transition-colors ${
                        plan.popular
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Process Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Clock className="w-6 h-6 text-blue-600" />
                Notre Processus de Développement
              </h2>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Analyse des besoins", desc: "Compréhension de votre activité, cible, et fonctionnalités prioritaires", duration: "2-3 jours" },
                  { step: "2", title: "Maquettes & Design", desc: "Création des wireframes et design UI/UX adapté à votre charte graphique", duration: "1-2 semaines" },
                  { step: "3", title: "Développement", desc: "Codage de la plateforme, tests unitaires, optimisation performances", duration: "4-12 semaines" },
                  { step: "4", title: "Tests & Validation", desc: "Tests utilisateurs, corrections bugs, validation fonctionnelle complète", duration: "1-2 semaines" },
                  { step: "5", title: "Déploiement", desc: "Mise en production, configuration serveur, formation utilisateurs", duration: "3-5 jours" },
                  { step: "6", title: "Support & Évolutions", desc: "Maintenance, mises à jour sécurité, nouvelles fonctionnalités", duration: "Continu" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                        <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">{item.duration}</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-blue-600" />
                Questions Fréquentes - Application Immobilière
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && (
                      <div className="p-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Technologies */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies Utilisées</h2>
              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "React Native", "Node.js", "PostgreSQL", "MongoDB", "Google Maps API", "Leaflet", "Stripe", "CIB/Dahabia", "Three.js (3D)", "AWS/Vercel", "Firebase", "Elasticsearch"].map((tech, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Related Articles */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles Connexes</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Logiciel Immobilier & Agence Algérie 2026", href: "/blog/logiciel-immobilier-agence-algerie-2026" },
                  { title: "Smart Home & Promoteur Immobilier Algérie 2026", href: "/blog/smart-home-promoteur-immobilier-algerie-2026" },
                  { title: "Marketplace B2B en Algérie", href: "/blog/plateforme-b2b-marketplace-algerie" },
                  { title: "Coût Développement Application", href: "/blog/cout-developpement-application-algerie" }
                ].map((article, i) => (
                  <Link
                    key={i}
                    href={article.href}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group"
                  >
                    <span className="font-medium text-gray-900 group-hover:text-blue-600">{article.title}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {["application immobilier", "proptech algérie", "gestion locative", "visite virtuelle", "CRM immobilier", "portail annonces", "marketplace immobilier", "développement web algérie"].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Lancez Votre Projet PropTech</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Portail d'annonces, gestion locative, CRM agence ou marketplace immobilière.
              Créons ensemble la solution digitale adaptée à votre activité immobilière en Algérie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/213549575512?text=Bonjour, j'ai un projet immobilier digital à discuter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
              <a
                href="tel:+213549575512"
                className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition-colors"
              >
                <span>📞</span> +213 549 57 55 12
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
