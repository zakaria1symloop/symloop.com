"use client";
import { ArrowLeft, Store, CheckCircle, MessageCircle, Users, ShoppingCart, CreditCard, BarChart3, AlertCircle, Phone, Gift, Clock, Shield, Globe, Award, Zap, ChevronDown, ChevronUp, HeadphonesIcon, TrendingUp, Package, Truck, Search, Settings, Building, Layers } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug } from '../../data/blogs';
import { useState } from 'react';

export default function MarketplaceB2BAlgerie() {
  const blog = getBlogBySlug('plateforme-b2b-marketplace-algerie');
  const [openFaq, setOpenFaq] = useState(0);

  const faqItems = [
    {
      question: "Qu'est-ce qu'une marketplace B2B exactement ?",
      answer: "Une marketplace B2B est une plateforme en ligne où plusieurs vendeurs professionnels proposent leurs produits/services à d'autres entreprises. Symloop développe ces plateformes sur mesure pour le marché algérien. Contactez-nous au +213 549 575 512 pour en discuter."
    },
    {
      question: "Combien coûte le développement d'une marketplace ?",
      answer: "Chez Symloop, une marketplace B2B sur mesure démarre à partir de 250 000 DA pour un MVP. Pour une plateforme complète, les tarifs sont sur devis. Nous proposons aussi des solutions en marque blanche plus économiques. Contactez-nous au +213 549 575 512 pour un devis adapté."
    },
    {
      question: "Quels moyens de paiement intégrez-vous ?",
      answer: "Symloop intègre tous les moyens de paiement algériens : CIB, Edahabia, virement bancaire, paiement à la livraison. Pour l'international, nous ajoutons PayPal, Stripe, et paiements par lettre de crédit. Appelez le +213 549 575 512 pour une démo."
    },
    {
      question: "Combien de temps pour lancer une marketplace ?",
      answer: "Avec Symloop, une marketplace en marque blanche peut être lancée en 4-6 semaines. Un développement sur mesure complet prend 3-5 mois. Nous procédons par phases : MVP d'abord, puis évolutions. Basé à Sétif, contactez-nous au +213 549 575 512."
    },
    {
      question: "Qui gère la logistique et les livraisons ?",
      answer: "Dans un modèle marketplace, chaque vendeur gère sa propre logistique. Symloop intègre des partenaires logistiques (Yalidine, Express Algérie, etc.) pour faciliter les livraisons et le suivi. Contactez-nous au +213 549 575 512 pour discuter de votre projet."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Plateforme B2B Marketplace Algérie - Création Sur Mesure",
        "description": "Créez votre marketplace B2B en Algérie. Plateforme multi-vendeurs avec gestion commandes, paiements CIB/Edahabia, et commissions automatiques.",
        "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
        "publisher": { "@type": "Organization", "name": "Symloop", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
        "datePublished": "2024-01-15",
        "dateModified": "2024-12-01",
        "mainEntityOfPage": "https://symloop.com/blog/plateforme-b2b-marketplace-algerie"
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": { "@type": "Answer", "text": item.answer }
        }))
      },
      {
        "@type": "Service",
        "serviceType": "Développement Marketplace B2B",
        "provider": { "@type": "Organization", "name": "Symloop", "telephone": "+213549575512" },
        "areaServed": ["DZ", "TN", "MA", "MENA"]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Plateforme B2B Marketplace Algérie", "item": "https://symloop.com/blog/plateforme-b2b-marketplace-algerie" }
        ]
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".en-bref-block", "h1", "meta[name='description']"]
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Marketplace B2B Algérie - Plateforme Multi-Vendeurs | Symloop</title>
        <meta name="description" content="Créez votre marketplace B2B en Algérie. Plateforme multi-vendeurs avec paiements CIB/Edahabia, gestion commissions, logistique intégrée. Devis gratuit." />
        <meta name="keywords" content="marketplace b2b algérie, plateforme multi-vendeurs algérie, e-commerce b2b, place de marché algérie, créer marketplace, alibaba algérie, marketplace grossiste, plateforme import export" />
        <link rel="canonical" href="https://symloop.com/blog/plateforme-b2b-marketplace-algerie" />
        <meta property="og:title" content="Marketplace B2B Algérie - Créez Votre Plateforme | Symloop" />
        <meta property="og:description" content="Développement marketplace B2B sur mesure en Algérie. Multi-vendeurs, paiements intégrés, commissions automatiques." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/plateforme-b2b-marketplace-algerie" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
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
                <span className="bg-purple-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Store className="w-4 h-4" />Marketplace
                </span>
                <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                  B2B & Multi-Vendeurs
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Plateforme <span className="text-purple-400">B2B Marketplace</span> Algérie
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Créez votre place de marché B2B en Algérie. Connectez acheteurs et vendeurs
                professionnels sur une plateforme sécurisée avec paiements intégrés.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/213549575512?text=Bonjour, je souhaite créer une marketplace B2B"
                   className="inline-flex items-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-600">
                  <MessageCircle className="w-5 h-5" /> Discuter du Projet
                </a>
                <a href="tel:+213549575512"
                   className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20">
                  <Phone className="w-5 h-5" /> +213 549 57 55 12
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Special Offer Banner */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Gift className="w-5 h-5" />
              <span className="font-semibold">Offre Lancement : -20% sur le développement + 3 mois support OFFERTS</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Jusqu'au 31 Janvier 2025</span>
            </div>
          </div>
        </section>

        {/* En bref - LLM Optimized Block */}
        <section className="en-bref-block bg-gray-50 border-l-4 border-purple-500 py-6">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-purple-600 mb-2">En bref</p>
            <p className="text-gray-700 leading-relaxed">
              Symloop developpe des plateformes B2B et marketplaces pour le marche algerien. Multi-vendeurs, paiement securise, gestion commandes, logistique integree. Base a Setif. Contact: +213 549 575 512.
            </p>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                Le modèle <strong>marketplace B2B</strong> est l'avenir du commerce inter-entreprises en Algérie.
                Plutôt que de vendre vos propres produits, vous créez une
                <span className="text-purple-600 font-semibold"> plateforme où des vendeurs professionnels</span>
                proposent leurs produits à des acheteurs professionnels. Vous prenez une commission sur chaque transaction.
              </p>
              <p className="text-gray-600">
                Ce modèle a fait le succès d'Alibaba, Amazon Business, et Ankorstore. En Algérie, le marché B2B
                est encore largement offline - c'est le moment idéal pour <strong>digitaliser les échanges commerciaux</strong>
                de votre secteur avec une marketplace sur mesure.
              </p>
            </div>

            {/* Key Stats */}
            <section className="mb-16">
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { value: "5-15%", label: "Commission moyenne", icon: TrendingUp },
                  { value: "0", label: "Stock à gérer", icon: Package },
                  { value: "∞", label: "Potentiel vendeurs", icon: Users },
                  { value: "24/7", label: "Ventes automatiques", icon: Clock }
                ].map((stat, i) => (
                  <div key={i} className="bg-purple-50 rounded-xl p-5 text-center">
                    <stat.icon className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-600">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Main Features */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Fonctionnalités Marketplace Complètes</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Users,
                    title: "Gestion Multi-Vendeurs",
                    desc: "Onboarding complet des vendeurs avec validation",
                    features: ["Inscription & vérification vendeurs", "Dashboards vendeurs individuels", "Gestion documents légaux", "Niveaux de vendeurs (Bronze, Silver, Gold)"]
                  },
                  {
                    icon: Package,
                    title: "Catalogue Produits Avancé",
                    desc: "Gestion complète des produits par les vendeurs",
                    features: ["Fiches produits détaillées", "Variantes (taille, couleur, etc.)", "Prix de gros par quantité", "Import/export catalogue Excel"]
                  },
                  {
                    icon: CreditCard,
                    title: "Paiements Sécurisés",
                    desc: "Tous les moyens de paiement algériens intégrés",
                    features: ["CIB & Edahabia", "Virement bancaire", "Paiement à la livraison", "Escrow (séquestre) automatique"]
                  },
                  {
                    icon: BarChart3,
                    title: "Commissions & Analytics",
                    desc: "Gestion automatique des commissions et reporting",
                    features: ["Commissions fixes ou %", "Rapports par vendeur", "Analytics temps réel", "Exports comptables"]
                  },
                  {
                    icon: Truck,
                    title: "Logistique Intégrée",
                    desc: "Connectez vos partenaires de livraison",
                    features: ["Intégration Yalidine, Express", "Suivi colis en temps réel", "Calcul frais automatique", "Gestion retours"]
                  },
                  {
                    icon: Search,
                    title: "Recherche & Filtres",
                    desc: "Navigation optimisée pour les acheteurs",
                    features: ["Recherche full-text", "Filtres multicritères", "Catégories & sous-catégories", "Suggestions personnalisées"]
                  }
                ].map((feature, i) => (
                  <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-purple-200 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{feature.desc}</p>
                    <ul className="space-y-1">
                      {feature.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-purple-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Marketplace Types */}
            <section className="mb-16 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Types de Marketplaces B2B que nous Développons</h2>
              <p className="text-gray-600 mb-6">
                Chaque secteur a ses spécificités. Nous adaptons la plateforme à votre marché.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Building, name: "Marketplace Grossiste-Détaillant", desc: "Connectez grossistes et commerces de détail" },
                  { icon: Globe, name: "Plateforme Import-Export", desc: "Facilitez le commerce international" },
                  { icon: Settings, name: "Marketplace Industrielle", desc: "Pièces détachées, équipements, machines" },
                  { icon: Package, name: "Marketplace Agroalimentaire", desc: "Producteurs, transformateurs, distributeurs" },
                  { icon: Layers, name: "Marketplace BTP & Construction", desc: "Matériaux, équipements, sous-traitance" },
                  { icon: Users, name: "Marketplace Services B2B", desc: "Prestataires et entreprises clientes" }
                ].map((type, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white rounded-xl">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <type.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{type.name}</h3>
                      <p className="text-sm text-gray-600">{type.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tarifs Développement Marketplace</h2>
              <p className="text-gray-600 mb-6">
                Le coût dépend de la complexité et des fonctionnalités souhaitées.
                Nous proposons différentes formules selon votre budget et ambitions.
              </p>

              {/* Pricing Warning */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Chaque marketplace est unique. Le tarif final dépend du nombre
                  de fonctionnalités, des intégrations, et de la complexité de votre secteur.
                  <strong> Contactez-nous pour une étude gratuite de votre projet</strong> - nous vous proposerons
                  la solution la plus adaptée à votre budget.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Marketplace Starter",
                    price: "250 000",
                    period: "développement",
                    desc: "MVP pour valider votre concept",
                    features: ["Jusqu'à 20 vendeurs", "Catalogue produits basique", "Paiement CIB intégré", "Dashboard admin", "App responsive", "3 mois support"],
                    popular: false
                  },
                  {
                    name: "Marketplace Pro",
                    price: "Sur devis",
                    period: "selon fonctionnalités",
                    desc: "Plateforme complète évolutive",
                    features: ["Vendeurs illimités", "Toutes fonctionnalités", "Multi-paiements", "Logistique intégrée", "Analytics avancés", "6 mois support"],
                    popular: true
                  },
                  {
                    name: "Marketplace Enterprise",
                    price: "Sur devis",
                    period: "selon périmètre",
                    desc: "Solution sur mesure complète",
                    features: ["Architecture personnalisée", "Intégrations ERP/SI", "Apps mobiles natives", "Multi-pays/devises", "SLA garanti", "Support dédié"],
                    popular: false
                  }
                ].map((plan, i) => (
                  <div key={i} className={`relative rounded-2xl p-6 ${plan.popular ? 'bg-purple-600 text-white ring-4 ring-purple-600 ring-offset-2' : 'bg-gray-50'}`}>
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Recommandé
                      </span>
                    )}
                    <h3 className={`text-xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                    <p className={`text-sm mb-4 ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>{plan.desc}</p>
                    <div className="mb-6">
                      <span className={`text-sm ${plan.popular ? 'text-purple-200' : 'text-gray-500'}`}>À partir de</span>
                      <div>
                        <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-purple-600'}`}>
                          {plan.price === "Sur devis" ? "Sur devis" : `${plan.price} DA`}
                        </span>
                      </div>
                      <div className={`text-sm ${plan.popular ? 'text-purple-100' : 'text-gray-500'}`}>{plan.period}</div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle className={`w-4 h-4 ${plan.popular ? 'text-purple-200' : 'text-purple-500'}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={`https://wa.me/213549575512?text=Bonjour, je suis intéressé par ${plan.name}`}
                       className={`block text-center py-3 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-white text-purple-600 hover:bg-purple-50' : 'bg-purple-600 text-white hover:bg-purple-700'}`}>
                      Discuter du Projet
                    </a>
                  </div>
                ))}
              </div>

              {/* Revenue Model */}
              <div className="mt-8 bg-purple-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Modèle de Revenus d'une Marketplace</h3>
                <p className="text-gray-600 mb-4">
                  Voici comment vous rentabilisez votre investissement :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { source: "Commission sur ventes", rate: "5-15% par transaction" },
                    { source: "Abonnement vendeurs", rate: "5 000-50 000 DA/mois" },
                    { source: "Mise en avant produits", rate: "Publicité sponsorisée" },
                    { source: "Services additionnels", rate: "Logistique, assurance, etc." }
                  ].map((rev, i) => (
                    <div key={i} className="flex justify-between p-3 bg-white rounded-lg">
                      <span className="text-gray-700">{rev.source}</span>
                      <span className="font-semibold text-purple-600">{rev.rate}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Process */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Processus de Création</h2>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Étude & Stratégie", desc: "Analyse de votre marché, définition du modèle économique et des fonctionnalités prioritaires", duration: "1-2 semaines" },
                  { step: "02", title: "Design UX/UI", desc: "Maquettes des parcours vendeurs et acheteurs, validation avant développement", duration: "2-3 semaines" },
                  { step: "03", title: "Développement MVP", desc: "Développement de la première version avec fonctionnalités essentielles", duration: "6-10 semaines" },
                  { step: "04", title: "Tests & Recrutement", desc: "Tests avec premiers vendeurs pilotes, ajustements selon retours", duration: "2-4 semaines" },
                  { step: "05", title: "Lancement & Croissance", desc: "Mise en ligne, recrutement vendeurs, accompagnement marketing", duration: "Continu" }
                ].map((phase, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                      {phase.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-gray-900">{phase.title}</h3>
                        <span className="text-sm text-purple-600 font-medium">{phase.duration}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Success Factors */}
            <section className="mb-16 bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Clés de Succès d'une Marketplace</h2>
              <p className="text-gray-600 mb-6">
                Le développement technique n'est qu'une partie du succès. Voici ce qui fait la différence :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Problème réel résolu", desc: "Votre marketplace doit résoudre un vrai problème pour vendeurs ET acheteurs" },
                  { title: "Masse critique vendeurs", desc: "Recrutez 50-100 vendeurs avant le lancement pour attirer les acheteurs" },
                  { title: "Confiance & sécurité", desc: "Vérification vendeurs, avis, garanties - les entreprises doivent avoir confiance" },
                  { title: "Service client réactif", desc: "Résolvez rapidement les litiges entre vendeurs et acheteurs" }
                ].map((factor, i) => (
                  <div key={i} className="p-4 bg-white rounded-xl">
                    <h3 className="font-bold text-gray-900 mb-1">{factor.title}</h3>
                    <p className="text-sm text-gray-600">{factor.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions Fréquentes</h2>
              <div className="space-y-3">
                {faqItems.map((item, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                    >
                      <span className="font-semibold text-gray-900">{item.question}</span>
                      {openFaq === i ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4 text-gray-600">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {blog?.tags?.map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Articles Connexes</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "E-commerce Algérie : Paiement CIB & Edahabia", href: "/blog/ecommerce-algerie-paiement-cib-edahabia-2024", desc: "Boutique en ligne avec paiement local" },
                  { title: "ERP Sur Mesure & SaaS pour PME Algérie 2026", href: "/blog/erp-sur-mesure-saas-startup-pme-algerie-2026", desc: "Solutions ERP et SaaS" }
                ].map((article, i) => (
                  <Link key={i} href={article.href} className="group p-4 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors">
                    <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 mb-1">{article.title}</h3>
                    <p className="text-sm text-gray-600">{article.desc}</p>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Lancez Votre Marketplace B2B</h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Digitalisez les échanges B2B de votre secteur. Étude gratuite et proposition
              personnalisée sous 48h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/213549575512?text=Bonjour, je souhaite créer une marketplace B2B pour [votre secteur]" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50">
                <MessageCircle className="w-5 h-5" /> Discuter du Projet
              </a>
              <a href="tel:+213549575512"
                 className="inline-flex items-center justify-center gap-2 bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-800">
                <Phone className="w-5 h-5" /> +213 549 57 55 12
              </a>
            </div>
            <p className="text-purple-200 text-sm mt-6">
              <HeadphonesIcon className="w-4 h-4 inline mr-1" />
              Consultation gratuite pour évaluer votre projet
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
