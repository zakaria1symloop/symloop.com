"use client";
import { ArrowLeft, Cloud, CheckCircle, MessageCircle, Users, CreditCard, BarChart3, Layers, AlertCircle, Phone, Gift, Clock, Shield, Globe, Award, Zap, ChevronDown, ChevronUp, HeadphonesIcon, TrendingUp, Server, Database, Lock, Settings, Repeat, PieChart, Code } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug } from '../../data/blogs';
import { useState } from 'react';

export default function SaaSAlgerie() {
  const blog = getBlogBySlug('saas-developpement-algerie-2024');
  const [openFaq, setOpenFaq] = useState(0);

  const faqItems = [
    {
      question: "Qu'est-ce qu'un SaaS exactement ?",
      answer: "Un SaaS (Software as a Service) est un logiciel accessible via internet avec un modèle d'abonnement mensuel ou annuel. Vos clients n'installent rien, ils utilisent votre service via leur navigateur. Exemples : Slack, Dropbox, Zoom. C'est le modèle le plus rentable du secteur logiciel."
    },
    {
      question: "Combien coûte le développement d'un SaaS ?",
      answer: "Un MVP SaaS fonctionnel démarre à partir de 2 000 000 DA (avec authentification, billing, dashboard). Pour une plateforme complète avec toutes les fonctionnalités avancées, comptez 5-10 millions DA. Contactez-nous pour évaluer précisément votre projet."
    },
    {
      question: "Combien de temps pour développer un SaaS ?",
      answer: "Un MVP (Minimum Viable Product) peut être livré en 3-4 mois. Une version complète prend généralement 6-12 mois selon la complexité. Nous recommandons toujours de commencer par un MVP pour valider le marché avant d'investir massivement."
    },
    {
      question: "Quelle technologie utilisez-vous ?",
      answer: "Nous développons avec des technologies modernes et scalables : Next.js ou React pour le frontend, Node.js ou Python pour le backend, PostgreSQL pour la base de données, et AWS/Google Cloud pour l'hébergement. Tout est choisi pour la performance et l'évolutivité."
    },
    {
      question: "Comment gérer les paiements récurrents en Algérie ?",
      answer: "Pour les clients algériens, nous intégrons CIB et Edahabia avec facturation manuelle ou semi-automatique. Pour l'international, nous utilisons Stripe qui gère automatiquement les abonnements, essais gratuits, et relances. Nous pouvons combiner les deux."
    },
    {
      question: "Le SaaS peut-il évoluer avec ma croissance ?",
      answer: "Absolument. L'architecture que nous mettons en place est conçue pour la scalabilité : auto-scaling cloud, bases de données optimisées, microservices si nécessaire. Votre SaaS peut passer de 10 à 10 000 utilisateurs sans refonte majeure."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Développement SaaS en Algérie 2024 - Création Logiciel Cloud",
    "description": "Créez votre SaaS en Algérie : architecture multi-tenant, billing récurrent, analytics. Du MVP au scale-up. Prix compétitifs.",
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
    "datePublished": "2024-01-15",
    "dateModified": "2024-12-01"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <Head>
        <title>Développement SaaS Algérie 2024 - Logiciel Cloud Sur Mesure | Symloop</title>
        <meta name="description" content="Créez votre SaaS en Algérie : architecture multi-tenant, billing récurrent, analytics. MVP à partir de 2M DA. Du concept au lancement. Devis gratuit." />
        <meta name="keywords" content="développement saas algérie, logiciel cloud algérie, multi-tenant, abonnement, saas b2b, application cloud, stripe algérie, billing saas, startup saas algérie" />
        <link rel="canonical" href="https://symloop.com/blog/saas-developpement-algerie-2024" />
        <meta property="og:title" content="Développement SaaS Algérie 2024 - Logiciel Cloud | Symloop" />
        <meta property="og:description" content="Créez votre SaaS en Algérie. Architecture scalable, paiement récurrent, analytics. Devis gratuit." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/saas-developpement-algerie-2024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
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
                <span className="bg-indigo-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Cloud className="w-4 h-4" />SaaS
                </span>
                <span className="bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-sm">
                  Business Model 2024
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Développement <span className="text-indigo-400">SaaS</span> en Algérie 2024
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Créez votre logiciel cloud avec abonnements récurrents.
                Du MVP au scale-up, nous vous accompagnons à chaque étape.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/213549575512?text=Bonjour, je souhaite développer un SaaS"
                   className="inline-flex items-center gap-2 bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-600">
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
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Gift className="w-5 h-5" />
              <span className="font-semibold">Offre Startup : -20% sur le MVP + Audit business model GRATUIT</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Projets innovants</span>
            </div>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                Le modèle <strong>SaaS (Software as a Service)</strong> est le plus rentable du secteur logiciel.
                Revenus récurrents, scalabilité illimitée, et coûts marginaux faibles.
                <span className="text-indigo-600 font-semibold"> Des entreprises comme Slack, Notion ou Dropbox</span>
                ont bâti des empires milliardaires sur ce modèle.
              </p>
              <p className="text-gray-600">
                En Algérie et dans la région MENA, le marché SaaS B2B est encore naissant - c'est le moment idéal
                pour lancer votre solution cloud. Nous vous accompagnons de la <strong>validation de l'idée</strong>
                jusqu'au <strong>scale-up</strong> avec une architecture technique robuste.
              </p>
            </div>

            {/* Key Stats */}
            <section className="mb-16">
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { value: "20-30%", label: "Marge nette typique", icon: TrendingUp },
                  { value: "∞", label: "Scalabilité", icon: Repeat },
                  { value: "100%", label: "Revenus récurrents", icon: CreditCard },
                  { value: "80%", label: "Taux de rétention cible", icon: Users }
                ].map((stat, i) => (
                  <div key={i} className="bg-indigo-50 rounded-xl p-5 text-center">
                    <stat.icon className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-indigo-600">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Main Features */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Composants Essentiels d'un SaaS</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Users,
                    title: "Architecture Multi-Tenant",
                    desc: "Un seul code, multiples clients isolés",
                    features: ["Isolation des données par client", "Personnalisation par tenant", "Scalabilité horizontale", "Gestion des permissions"]
                  },
                  {
                    icon: CreditCard,
                    title: "Système de Billing",
                    desc: "Gestion complète des abonnements",
                    features: ["Plans et pricing tiers", "Essais gratuits (trials)", "Upgrades/downgrades", "Facturation automatique"]
                  },
                  {
                    icon: BarChart3,
                    title: "Analytics & Métriques SaaS",
                    desc: "Suivez la santé de votre business",
                    features: ["MRR / ARR", "Churn rate", "Customer LTV", "Cohort analysis"]
                  },
                  {
                    icon: Layers,
                    title: "API & Intégrations",
                    desc: "Connectez-vous à l'écosystème",
                    features: ["API REST documentée", "Webhooks temps réel", "OAuth 2.0", "Marketplace d'intégrations"]
                  },
                  {
                    icon: Shield,
                    title: "Sécurité & Conformité",
                    desc: "Protection des données utilisateurs",
                    features: ["Authentification 2FA", "Chiffrement données", "Audit logs", "RGPD compliant"]
                  },
                  {
                    icon: Settings,
                    title: "Admin & Onboarding",
                    desc: "Gestion autonome par les clients",
                    features: ["Dashboard admin", "Gestion équipe", "Onboarding guidé", "Self-service"]
                  }
                ].map((feature, i) => (
                  <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-indigo-200 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{feature.desc}</p>
                    <ul className="space-y-1">
                      {feature.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-indigo-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* SaaS Types */}
            <section className="mb-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Types de SaaS que nous Développons</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: "SaaS B2B Vertical", desc: "Solution spécialisée pour un secteur (immobilier, santé, RH...)" },
                  { name: "SaaS B2B Horizontal", desc: "Outils transversaux (CRM, gestion projet, collaboration...)" },
                  { name: "SaaS B2C", desc: "Applications grand public avec freemium" },
                  { name: "Platform as a Service", desc: "Infrastructure technique en marque blanche" }
                ].map((type, i) => (
                  <div key={i} className="p-4 bg-white rounded-xl">
                    <h3 className="font-bold text-gray-900">{type.name}</h3>
                    <p className="text-sm text-gray-600">{type.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tarifs Développement SaaS</h2>
              <p className="text-gray-600 mb-6">
                Nous proposons une approche itérative : commencez par un MVP pour valider le marché,
                puis investissez dans les fonctionnalités avancées selon la traction.
              </p>

              {/* Pricing Warning */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Chaque SaaS est unique. Le tarif dépend du nombre de modules,
                  de la complexité métier, et des intégrations requises. <strong>Contactez-nous pour une estimation
                  gratuite de votre projet</strong> - nous analysons votre business model et définissons ensemble le périmètre.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "MVP SaaS",
                    price: "200 000",
                    period: "développement",
                    desc: "Valider votre idée sur le marché",
                    features: ["Authentification & users", "1 module core", "Billing basique", "Dashboard client", "API simple", "3 mois support"],
                    popular: false
                  },
                  {
                    name: "SaaS Complet",
                    price: "Sur devis",
                    period: "selon complexité",
                    desc: "Plateforme prête au scale",
                    features: ["Multi-tenant avancé", "Modules illimités", "Billing Stripe/CIB", "Analytics SaaS", "API documentée", "6 mois support"],
                    popular: true
                  },
                  {
                    name: "SaaS Enterprise",
                    price: "Sur devis",
                    period: "selon périmètre",
                    desc: "Architecture sur mesure",
                    features: ["Microservices", "Multi-région", "SSO Enterprise", "SLA garanti", "Équipe dédiée", "Support continu"],
                    popular: false
                  }
                ].map((plan, i) => (
                  <div key={i} className={`relative rounded-2xl p-6 ${plan.popular ? 'bg-indigo-600 text-white ring-4 ring-indigo-600 ring-offset-2' : 'bg-gray-50'}`}>
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Recommandé
                      </span>
                    )}
                    <h3 className={`text-xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                    <p className={`text-sm mb-4 ${plan.popular ? 'text-indigo-100' : 'text-gray-600'}`}>{plan.desc}</p>
                    <div className="mb-6">
                      <span className={`text-sm ${plan.popular ? 'text-indigo-200' : 'text-gray-500'}`}>À partir de</span>
                      <div>
                        <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-indigo-600'}`}>
                          {plan.price === "Sur devis" ? "Sur devis" : `${plan.price} DA`}
                        </span>
                      </div>
                      <div className={`text-sm ${plan.popular ? 'text-indigo-100' : 'text-gray-500'}`}>{plan.period}</div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle className={`w-4 h-4 ${plan.popular ? 'text-indigo-200' : 'text-indigo-500'}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={`https://wa.me/213549575512?text=Bonjour, je suis intéressé par ${plan.name}`}
                       className={`block text-center py-3 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-white text-indigo-600 hover:bg-indigo-50' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}>
                      Discuter du Projet
                    </a>
                  </div>
                ))}
              </div>

              {/* Technology Stack */}
              <div className="mt-8 bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Stack Technique</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { category: "Frontend", techs: "Next.js, React, Tailwind" },
                    { category: "Backend", techs: "Node.js, Python, PostgreSQL" },
                    { category: "Cloud", techs: "AWS, Google Cloud, Vercel" },
                    { category: "Billing", techs: "Stripe, CIB, Custom" }
                  ].map((stack, i) => (
                    <div key={i} className="p-3 bg-white rounded-lg">
                      <div className="font-semibold text-indigo-600 text-sm">{stack.category}</div>
                      <div className="text-gray-700 text-sm">{stack.techs}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Process */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Processus de Développement</h2>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Discovery & Business Model", desc: "Validation de l'idée, étude de marché, définition du pricing et des personas", duration: "1-2 semaines" },
                  { step: "02", title: "Design & Architecture", desc: "Maquettes UI/UX, architecture technique, choix des technologies", duration: "2-3 semaines" },
                  { step: "03", title: "MVP Development", desc: "Développement des fonctionnalités core pour valider le product-market fit", duration: "8-12 semaines" },
                  { step: "04", title: "Beta Testing", desc: "Tests avec early adopters, collecte de feedback, itérations", duration: "4-6 semaines" },
                  { step: "05", title: "Launch & Growth", desc: "Mise en production, onboarding clients, optimisation conversion", duration: "Continu" }
                ].map((phase, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-colors">
                    <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                      {phase.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-gray-900">{phase.title}</h3>
                        <span className="text-sm text-indigo-600 font-medium">{phase.duration}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SaaS Metrics */}
            <section className="mb-16 bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Métriques SaaS que nous Intégrons</h2>
              <p className="text-gray-600 mb-6">
                Un bon SaaS se pilote avec les bonnes métriques. Nous intégrons un dashboard avec :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { metric: "MRR / ARR", desc: "Revenus mensuels/annuels récurrents" },
                  { metric: "Churn Rate", desc: "Taux d'attrition clients" },
                  { metric: "Customer LTV", desc: "Valeur vie client" },
                  { metric: "CAC", desc: "Coût d'acquisition client" },
                  { metric: "NPS", desc: "Net Promoter Score (satisfaction)" },
                  { metric: "Activation Rate", desc: "% d'utilisateurs qui atteignent le 'Aha moment'" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-3 bg-white rounded-xl">
                    <PieChart className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900">{item.metric}</span>
                      <span className="text-gray-500 text-sm"> - {item.desc}</span>
                    </div>
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
                  { title: "MVP Startup Algérie", href: "/blog/mvp-startup-algerie-2024", desc: "Lancez votre startup rapidement" },
                  { title: "Cloud Computing Algérie", href: "/blog/cloud-computing-algerie-2024", desc: "Hébergement et infrastructure" }
                ].map((article, i) => (
                  <Link key={i} href={article.href} className="group p-4 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-colors">
                    <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 mb-1">{article.title}</h3>
                    <p className="text-sm text-gray-600">{article.desc}</p>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Lancez Votre SaaS</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              De l'idée au produit rentable. Audit business model gratuit et estimation
              personnalisée sous 48h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/213549575512?text=Bonjour, j'ai une idée de SaaS et je souhaite en discuter" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50">
                <MessageCircle className="w-5 h-5" /> Discuter de Mon Idée
              </a>
              <a href="tel:+213549575512"
                 className="inline-flex items-center justify-center gap-2 bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-800">
                <Phone className="w-5 h-5" /> +213 549 57 55 12
              </a>
            </div>
            <p className="text-indigo-200 text-sm mt-6">
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
