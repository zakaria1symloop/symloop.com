"use client";
import { useState } from 'react';
import { ArrowLeft, Truck, CheckCircle, MessageCircle, MapPin, Package, BarChart3, Clock, ChevronDown, AlertCircle, Smartphone, DollarSign, Globe, ArrowRight, Route, Warehouse, FileText, Users, Settings, Navigation, Shield, Fuel } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug } from '../../data/blogs';

export default function LogistiqueAlgerie() {
  const blog = getBlogBySlug('logistique-transport-algerie-2024');
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Combien coûte une solution de tracking GPS pour ma flotte ?",
      answer: "Une solution de tracking basique pour 10 véhicules démarre à 60 000 DA. Une plateforme TMS complète avec optimisation de tournées à partir de 150 000 DA. Les solutions enterprise avec WMS et intégrations sont sur devis."
    },
    {
      question: "Le tracking fonctionne-t-il dans toute l'Algérie ?",
      answer: "Oui, nos solutions utilisent le réseau GSM algérien (2G/3G/4G) et les satellites GPS. Couverture nationale complète, y compris les zones rurales et les wilayas du Sud."
    },
    {
      question: "Peut-on intégrer la solution avec notre e-commerce ?",
      answer: "Absolument. Nous intégrons avec toutes les plateformes e-commerce (WooCommerce, Shopify, PrestaShop, custom). Les commandes arrivent automatiquement dans le TMS pour expédition."
    },
    {
      question: "Les clients peuvent-ils suivre leur livraison ?",
      answer: "Oui, chaque client reçoit un lien de tracking par SMS/email. Ils voient la position en temps réel du livreur et l'heure estimée d'arrivée. Notifications à chaque étape."
    },
    {
      question: "Comment fonctionne l'optimisation des tournées ?",
      answer: "Notre algorithme analyse les adresses de livraison, la capacité des véhicules, les plages horaires, et le trafic pour calculer les routes optimales. Gain moyen de 25% sur les kilomètres parcourus."
    },
    {
      question: "Proposez-vous une app pour les chauffeurs ?",
      answer: "Oui, l'application mobile chauffeur (Android/iOS) permet de voir les livraisons, naviguer vers les adresses, capturer les signatures et photos, signaler les problèmes, et communiquer avec le dispatch."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Solutions Logistique et Transport en Algérie 2024",
        "description": "Développement de solutions logistiques en Algérie : tracking GPS, TMS, WMS, optimisation de tournées. Applications pour transport et livraison.",
        "image": "https://symloop.com/images/blog/logistics-algerie.jpg",
        "datePublished": "2024-03-05",
        "dateModified": "2024-12-01",
        "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
        "publisher": { "@type": "Organization", "name": "Symloop", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
        "mainEntityOfPage": "https://symloop.com/blog/logistique-transport-algerie-2024"
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
        "serviceType": "Solutions Logistique et Transport",
        "provider": { "@type": "Organization", "name": "Symloop", "telephone": "+213549575512" },
        "areaServed": ["DZ", "TN", "MA", "MENA"]
      }
    ]
  };

  const solutions = [
    {
      icon: Navigation,
      title: "Tracking GPS Temps Réel",
      desc: "Suivi en temps réel de tous vos véhicules et colis sur une carte",
      features: ["Position live", "Historique trajets", "Géofencing", "Alertes excès vitesse", "Kilométrage auto"]
    },
    {
      icon: Route,
      title: "Optimisation Tournées",
      desc: "Algorithmes intelligents pour calculer les routes les plus efficaces",
      features: ["Multi-stops", "Plages horaires", "Capacité véhicule", "Trafic temps réel", "Économie carburant"]
    },
    {
      icon: Warehouse,
      title: "Gestion Entrepôt (WMS)",
      desc: "Warehouse Management System pour stock, picking et expédition",
      features: ["Stock temps réel", "Picking optimisé", "Codes-barres/QR", "FIFO/LIFO", "Inventaire"]
    },
    {
      icon: Truck,
      title: "TMS Complet",
      desc: "Transport Management System intégré pour toutes les opérations",
      features: ["Gestion commandes", "Affectation auto", "Documents transport", "Facturation", "Reporting"]
    },
    {
      icon: Smartphone,
      title: "App Chauffeur Mobile",
      desc: "Application mobile pour les livreurs avec navigation et preuve de livraison",
      features: ["Navigation GPS", "Scan colis", "Signature digitale", "Photo livraison", "Chat dispatch"]
    },
    {
      icon: BarChart3,
      title: "Analytics & KPIs",
      desc: "Tableaux de bord et rapports pour optimiser vos opérations",
      features: ["Taux livraison", "Délais moyens", "Coût par livraison", "Performance chauffeurs", "Export Excel"]
    }
  ];

  const sectors = [
    { icon: Package, name: "E-commerce", desc: "Livraison colis, retours, last-mile" },
    { icon: Truck, name: "Transport Marchandises", desc: "Fret national, import-export" },
    { icon: Warehouse, name: "Distribution", desc: "Grossistes, distribution B2B" },
    { icon: Fuel, name: "Hydrocarbures", desc: "Distribution carburant, GPL" },
    { icon: Package, name: "Courrier Express", desc: "Envois rapides, documents" },
    { icon: Users, name: "Transport Voyageurs", desc: "Bus, minibus, navettes" }
  ];

  const pricingPlans = [
    {
      name: "Tracking",
      price: "60 000",
      unit: "DA",
      description: "GPS basique",
      features: [
        "Jusqu'à 10 véhicules",
        "Tracking temps réel",
        "Historique trajets",
        "Alertes basiques",
        "App chauffeur",
        "Support 3 mois"
      ],
      cta: "Commander",
      popular: false
    },
    {
      name: "TMS Pro",
      price: "150 000",
      unit: "DA",
      description: "Gestion complète",
      features: [
        "Véhicules illimités",
        "Tout Tracking +",
        "Optimisation tournées",
        "Gestion commandes",
        "App client tracking",
        "Intégration e-commerce",
        "Support 12 mois"
      ],
      cta: "Choisir Pro",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      unit: "",
      description: "Solution complète",
      features: [
        "Tout TMS Pro +",
        "WMS entrepôt",
        "Multi-dépôts",
        "API complète",
        "Formation équipe",
        "Support prioritaire 24/7",
        "Consulting logistique"
      ],
      cta: "Nous contacter",
      popular: false
    }
  ];

  const stats = [
    { value: "500+", label: "Véhicules trackés" },
    { value: "1M+", label: "Livraisons suivies" },
    { value: "25%", label: "Économie km moyen" },
    { value: "99%", label: "Uptime système" }
  ];

  const features = [
    "Tracking GPS temps réel véhicules",
    "Notifications livraison client SMS/email",
    "Preuve de livraison digitale (POD)",
    "Optimisation automatique des routes",
    "Gestion chauffeurs et plannings",
    "Intégration e-commerce complète",
    "Rapports performance et KPIs",
    "App mobile livreur iOS/Android",
    "Géofencing et alertes zones",
    "Gestion carburant et maintenance",
    "Documents de transport numériques",
    "API pour intégrations tierces"
  ];

  return (
    <>
      <Head>
        <title>Logistique Transport Algérie 2024 | Tracking GPS TMS | Symloop</title>
        <meta name="description" content="Solutions logistique en Algérie : tracking GPS, TMS, WMS, optimisation tournées. Applications pour transport et livraison à partir de 60 000 DA." />
        <meta name="keywords" content="logistique algérie, gestion flotte algérie, tracking gps véhicules, transport digital algérie, tms algérie, optimisation livraison" />
        <link rel="canonical" href="https://symloop.com/blog/logistique-transport-algerie-2024" />
        <meta property="og:title" content="Logistique Transport Algérie 2024 | Tracking GPS TMS" />
        <meta property="og:description" content="Solutions digitales pour transport et logistique : tracking GPS, optimisation tournées. À partir de 60 000 DA." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/logistique-transport-algerie-2024" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-black text-white py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8">
                <ArrowLeft className="w-4 h-4" /> Retour au blog
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-amber-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Truck className="w-4 h-4" />Logistics
                </span>
                <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">2024</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Solutions <span className="text-amber-400">Logistique</span> et Transport en Algérie
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Digitalisez votre logistique avec tracking GPS, TMS, WMS et optimisation de tournées.
                Augmentez l'efficacité de vos livraisons et réduisez vos coûts.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-gray-900/50 rounded-xl">
                    <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                La <strong className="text-amber-600">logistique en Algérie</strong> se digitalise pour répondre
                à l'explosion de l'e-commerce et aux exigences de traçabilité. Le <strong className="text-amber-600">tracking GPS</strong>,
                l'optimisation des tournées et les applications mobiles pour chauffeurs permettent de réduire les coûts
                et d'améliorer la satisfaction client. <strong>Symloop</strong> développe des solutions logistiques complètes.
              </p>
            </div>

            {/* Sectors */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Globe className="w-6 h-6 text-amber-600" />
                Secteurs d'Activité
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {sectors.map((sector, i) => (
                  <div key={i} className="bg-gradient-to-br from-gray-50 to-amber-50 rounded-xl p-4 text-center">
                    <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <sector.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900">{sector.name}</h3>
                    <p className="text-gray-600 text-sm">{sector.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Solutions */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Truck className="w-6 h-6 text-amber-600" />
                Solutions Logistique
              </h2>
              <div className="space-y-6">
                {solutions.map((solution, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-amber-200 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <solution.icon className="w-7 h-7 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                        <p className="text-gray-600 mb-4">{solution.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {solution.features.map((feature, j) => (
                            <span key={j} className="bg-amber-50 text-amber-700 text-xs px-3 py-1 rounded-full">{feature}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Features */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-amber-600" />
                Fonctionnalités Complètes
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {features.map((item, i) => (
                  <div key={i} className="flex gap-3 items-center p-3 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Mid */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl p-8 text-white text-center mb-16">
              <h3 className="text-2xl font-bold mb-3">Optimisez Votre Logistique</h3>
              <p className="text-amber-100 mb-6">Discutons de vos besoins en tracking et gestion de flotte</p>
              <a
                href="https://wa.me/213549575512?text=Bonjour, j'ai besoin d'une solution logistique"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-xl font-semibold hover:bg-amber-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Discuter sur WhatsApp
              </a>
            </div>

            {/* Pricing */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-amber-600" />
                Tarifs Solutions Logistique
              </h2>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif exact dépend du nombre de véhicules,
                  des fonctionnalités choisies, et des intégrations requises.
                  <strong> Contactez-nous pour un devis gratuit.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, i) => (
                  <div key={i} className={`relative bg-white rounded-2xl p-6 border-2 ${plan.popular ? 'border-amber-500 shadow-xl' : 'border-gray-100'}`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">POPULAIRE</span>
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
                      href={`https://wa.me/213549575512?text=Bonjour, je suis intéressé par le pack ${plan.name} logistique`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-center py-3 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-amber-600 text-white hover:bg-amber-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-amber-600" />
                Questions Fréquentes - Logistique
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
                {["React", "React Native", "Node.js", "PostgreSQL", "PostGIS", "Google Maps", "OpenStreetMap", "Redis", "Socket.io", "GraphHopper", "AWS", "Firebase"].map((tech, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">{tech}</span>
                ))}
              </div>
            </section>

            {/* Related */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles Connexes</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Application Restaurant Livraison", href: "/blog/application-restaurant-livraison-algerie" },
                  { title: "E-commerce en Algérie", href: "/blog/ecommerce-algerie-2024" },
                  { title: "Développement Mobile Algérie", href: "/blog/developpement-mobile-algerie-2024" },
                  { title: "DevOps et Cloud", href: "/blog/devops-deployment-algerie-2024" }
                ].map((article, i) => (
                  <Link key={i} href={article.href} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors group">
                    <span className="font-medium text-gray-900 group-hover:text-amber-600">{article.title}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {["logistique algérie", "tracking gps", "gestion flotte", "tms", "wms", "optimisation livraison"].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-amber-600 to-orange-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Digitalisez Votre Logistique</h2>
            <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
              Tracking GPS, optimisation de tournées, gestion d'entrepôt.
              Augmentez l'efficacité de vos opérations logistiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/213549575512?text=Bonjour, j'ai besoin d'une solution logistique" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold hover:bg-amber-50 transition-colors">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
              <a href="tel:+213549575512" className="inline-flex items-center justify-center gap-2 bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-amber-800 transition-colors">
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
