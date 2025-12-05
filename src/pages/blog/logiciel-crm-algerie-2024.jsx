"use client";
import { ArrowLeft, Users, CheckCircle, MessageCircle, Target, TrendingUp, Mail, Phone, AlertCircle, Star, Award, Clock, Zap, BarChart3, Globe, Smartphone, Shield, HeadphonesIcon, Gift, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug } from '../../data/blogs';
import { useState } from 'react';

export default function LogicielCRMAlgerie() {
  const blog = getBlogBySlug('logiciel-crm-algerie-2024');
  const [openFaq, setOpenFaq] = useState(0);

  const faqItems = [
    {
      question: "Qu'est-ce qu'un CRM et pourquoi en ai-je besoin ?",
      answer: "Un CRM (Customer Relationship Management) est un logiciel qui centralise toutes vos interactions clients. Il vous permet de ne jamais perdre un prospect, d'automatiser vos relances, et d'augmenter vos ventes de 25-40% en moyenne. Pour une entreprise algérienne qui veut croître, c'est devenu indispensable."
    },
    {
      question: "Combien coûte un CRM sur mesure en Algérie ?",
      answer: "Nos solutions CRM démarrent à partir de 180 000 DA pour les TPE (jusqu'à 5 utilisateurs). C'est 40-50% moins cher que les solutions étrangères comme Salesforce ou HubSpot, avec l'avantage d'être en français/arabe et adapté au marché algérien. Contactez-nous pour un devis personnalisé."
    },
    {
      question: "Combien de temps pour déployer un CRM ?",
      answer: "Un CRM standard est opérationnel en 2-4 semaines. Pour un CRM entièrement sur mesure avec intégrations spécifiques, comptez 6-10 semaines. Nous incluons toujours la formation de vos équipes et 3 mois de support inclus."
    },
    {
      question: "Le CRM fonctionne-t-il hors ligne ?",
      answer: "Oui ! Notre application mobile CRM fonctionne en mode hors ligne. Vos commerciaux terrain peuvent consulter et saisir des données sans connexion. La synchronisation se fait automatiquement dès que le réseau est disponible - parfait pour les zones à couverture limitée en Algérie."
    },
    {
      question: "Pouvez-vous intégrer mon système existant ?",
      answer: "Absolument. Nous intégrons votre CRM avec votre ERP, comptabilité, site web, téléphonie, WhatsApp Business, emails et tout autre système. Notre équipe technique s'assure que toutes vos données sont synchronisées en temps réel."
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "La sécurité est notre priorité. Hébergement sur serveurs en Algérie ou cloud sécurisé, chiffrement SSL, sauvegardes quotidiennes automatiques, et conformité totale avec la réglementation algérienne sur les données personnelles."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Logiciel CRM en Algérie 2024 - Gestion Relation Client",
    "description": "Solution CRM sur mesure pour entreprises algériennes. Gestion contacts, pipeline ventes, marketing automation. Prix compétitifs -40% vs solutions étrangères.",
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
        <title>Logiciel CRM Algérie 2024 - Gestion Relation Client | Symloop</title>
        <meta name="description" content="Solution CRM sur mesure pour entreprises algériennes. Gestion contacts, pipeline ventes, marketing automation. Prix -40% vs Salesforce/HubSpot. Devis gratuit." />
        <meta name="keywords" content="crm algérie, gestion client algérie, logiciel commercial, automatisation ventes, pipeline ventes, crm sur mesure, salesforce alternative algérie, hubspot alternative algérie, gestion prospect algérie, suivi client" />
        <link rel="canonical" href="https://symloop.com/blog/logiciel-crm-algerie-2024" />
        <meta property="og:title" content="Logiciel CRM Algérie 2024 - Solution Sur Mesure | Symloop" />
        <meta property="og:description" content="CRM adapté aux entreprises algériennes. Gestion contacts, ventes, marketing. -40% vs solutions étrangères. Devis gratuit." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/logiciel-crm-algerie-2024" />
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
                <span className="bg-green-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Users className="w-4 h-4" />CRM
                </span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                  Mise à jour 2024
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Logiciel <span className="text-green-400">CRM</span> en Algérie 2024
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Solution de gestion relation client sur mesure pour entreprises algériennes.
                Boostez vos ventes de 30% avec un CRM adapté à votre marché.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/213549575512?text=Bonjour, je souhaite une démo CRM"
                   className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600">
                  <MessageCircle className="w-5 h-5" /> Démo Gratuite
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
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Gift className="w-5 h-5" />
              <span className="font-semibold">Offre Spéciale : -30% sur votre premier CRM + Formation équipe OFFERTE</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Valable jusqu'au 31 Janvier 2025</span>
            </div>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                En Algérie, <strong>67% des entreprises</strong> perdent des clients faute d'un suivi structuré.
                Un <span className="text-green-600 font-semibold">CRM professionnel</span> vous permet de centraliser
                toutes vos interactions, automatiser vos relances, et augmenter votre chiffre d'affaires de
                <span className="text-green-600 font-semibold"> 25 à 40%</span> en moyenne.
              </p>
              <p className="text-gray-600">
                Chez Symloop, nous développons des CRM <strong>100% adaptés au marché algérien</strong> : interface
                français/arabe, intégration téléphonie locale, devise en Dinar, et support technique à Alger.
                Nos solutions coûtent <strong>40-50% moins cher</strong> que Salesforce ou HubSpot, avec une personnalisation
                complète selon vos processus de vente.
              </p>
            </div>

            {/* Why CRM Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi un CRM est Indispensable en 2024 ?</h2>
              <p className="text-gray-600 mb-8">
                Les entreprises qui utilisent un CRM augmentent leur taux de conversion de 300% et réduisent
                le cycle de vente de 8 à 14%. Voici ce qu'un CRM vous apporte concrètement :
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { value: "+35%", label: "Augmentation des ventes", icon: TrendingUp },
                  { value: "-50%", label: "Temps de suivi client", icon: Clock },
                  { value: "100%", label: "Prospects suivis", icon: Target }
                ].map((stat, i) => (
                  <div key={i} className="bg-green-50 rounded-2xl p-6 text-center">
                    <stat.icon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-green-600 mb-1">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Main Features */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">6 Modules CRM Essentiels</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Users,
                    title: "Gestion Contacts & Entreprises",
                    desc: "Base clients centralisée avec historique complet des interactions",
                    features: ["Fiches contacts détaillées", "Historique appels/emails/meetings", "Segmentation avancée", "Import/export Excel"]
                  },
                  {
                    icon: Target,
                    title: "Pipeline & Opportunités",
                    desc: "Suivez chaque prospect de la qualification à la signature",
                    features: ["Étapes personnalisables", "Prévisions de ventes", "Scoring automatique", "Alertes relance"]
                  },
                  {
                    icon: Mail,
                    title: "Marketing Automation",
                    desc: "Automatisez vos campagnes marketing et nurturing",
                    features: ["Campagnes email/SMS", "Séquences automatiques", "Templates personnalisés", "Tracking ouvertures"]
                  },
                  {
                    icon: BarChart3,
                    title: "Rapports & Tableaux de Bord",
                    desc: "Analysez vos performances en temps réel",
                    features: ["KPIs personnalisables", "Rapports automatiques", "Performance par commercial", "Prévisions CA"]
                  },
                  {
                    icon: Smartphone,
                    title: "Application Mobile",
                    desc: "Votre CRM partout avec vous, même hors ligne",
                    features: ["iOS & Android natif", "Mode hors connexion", "Géolocalisation clients", "Prise de notes vocales"]
                  },
                  {
                    icon: Zap,
                    title: "Intégrations & API",
                    desc: "Connectez votre CRM à tout votre écosystème",
                    features: ["WhatsApp Business", "Téléphonie IP", "ERP/Comptabilité", "Site web & formulaires"]
                  }
                ].map((feature, i) => (
                  <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-green-200 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{feature.desc}</p>
                    <ul className="space-y-1">
                      {feature.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tarifs CRM Algérie - Prix Compétitifs</h2>
              <p className="text-gray-600 mb-6">
                Nos CRM coûtent <strong>40-50% moins cher</strong> que les solutions internationales,
                avec tous les avantages d'une solution locale adaptée.
              </p>

              {/* Pricing Warning */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif exact dépend du nombre d'utilisateurs, des modules
                  choisis et de vos intégrations spécifiques. <strong>Contactez-nous pour un devis gratuit
                  et personnalisé</strong> - nous nous engageons à battre tout devis concurrent à fonctionnalités équivalentes.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "CRM TPE",
                    price: "45 000",
                    period: "licence perpétuelle",
                    users: "Jusqu'à 5 utilisateurs",
                    features: ["Gestion contacts illimitée", "Pipeline de ventes", "Rapports basiques", "App mobile", "Support email", "Formation incluse"],
                    popular: false
                  },
                  {
                    name: "CRM PME",
                    price: "120 000",
                    period: "licence perpétuelle",
                    users: "Jusqu'à 25 utilisateurs",
                    features: ["Tout TPE +", "Marketing automation", "API & Intégrations", "Rapports avancés", "Support prioritaire", "Formation sur site"],
                    popular: true
                  },
                  {
                    name: "CRM Enterprise",
                    price: "Sur devis",
                    period: "selon besoins",
                    users: "Utilisateurs illimités",
                    features: ["Tout PME +", "Personnalisation totale", "Intégrations sur mesure", "SLA garanti", "Account manager dédié", "Formation continue"],
                    popular: false
                  }
                ].map((plan, i) => (
                  <div key={i} className={`relative rounded-2xl p-6 ${plan.popular ? 'bg-green-600 text-white ring-4 ring-green-600 ring-offset-2' : 'bg-gray-50'}`}>
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Plus populaire
                      </span>
                    )}
                    <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                    <p className={`text-sm mb-4 ${plan.popular ? 'text-green-100' : 'text-gray-600'}`}>{plan.users}</p>
                    <div className="mb-6">
                      <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                        {plan.price === "Sur devis" ? "" : "À partir de "}
                      </span>
                      <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-green-600'}`}>{plan.price}</span>
                      {plan.price !== "Sur devis" && <span className={plan.popular ? 'text-green-100' : 'text-gray-600'}> DA</span>}
                      <div className={`text-sm ${plan.popular ? 'text-green-100' : 'text-gray-500'}`}>{plan.period}</div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle className={`w-4 h-4 ${plan.popular ? 'text-green-200' : 'text-green-500'}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="https://wa.me/213549575512?text=Bonjour, je suis intéressé par le CRM ${plan.name}"
                       className={`block text-center py-3 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-white text-green-600 hover:bg-green-50' : 'bg-green-600 text-white hover:bg-green-700'}`}>
                      Demander un Devis
                    </a>
                  </div>
                ))}
              </div>

              {/* Comparison with competitors */}
              <div className="mt-8 bg-green-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Comparaison avec les Solutions Internationales</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-green-200">
                        <th className="text-left py-2 text-gray-600">Solution</th>
                        <th className="text-center py-2 text-gray-600">Prix/utilisateur/mois</th>
                        <th className="text-center py-2 text-gray-600">Support local</th>
                        <th className="text-center py-2 text-gray-600">Langue arabe</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-green-100">
                        <td className="py-3 font-semibold text-green-600">Symloop CRM</td>
                        <td className="py-3 text-center font-bold text-green-600">~3 000 DA</td>
                        <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                        <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                      </tr>
                      <tr className="border-b border-green-100">
                        <td className="py-3 text-gray-600">Salesforce</td>
                        <td className="py-3 text-center text-gray-600">~10 000 DA</td>
                        <td className="py-3 text-center text-red-400">✕</td>
                        <td className="py-3 text-center text-red-400">✕</td>
                      </tr>
                      <tr className="border-b border-green-100">
                        <td className="py-3 text-gray-600">HubSpot</td>
                        <td className="py-3 text-center text-gray-600">~8 000 DA</td>
                        <td className="py-3 text-center text-red-400">✕</td>
                        <td className="py-3 text-center text-red-400">✕</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-gray-600">Zoho CRM</td>
                        <td className="py-3 text-center text-gray-600">~5 000 DA</td>
                        <td className="py-3 text-center text-red-400">✕</td>
                        <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Algerian Advantages */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Avantages d'un CRM 100% Algérien</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Globe, text: "Interface bilingue Français / Arabe" },
                  { icon: Phone, text: "Intégration téléphonie locale (Mobilis, Djezzy, Ooredoo)" },
                  { icon: Shield, text: "Données hébergées en Algérie - Conformité locale" },
                  { icon: MessageCircle, text: "Intégration WhatsApp Business native" },
                  { icon: Users, text: "Support technique à Alger en français/arabe" },
                  { icon: Award, text: "Formation sur site pour vos équipes commerciales" },
                  { icon: Zap, text: "Devise en Dinar Algérien (DA)" },
                  { icon: Clock, text: "Mises à jour et évolutions selon vos besoins" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-center p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ROI Section */}
            <section className="mb-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Retour sur Investissement (ROI)</h2>
              <p className="text-gray-600 mb-6">
                Nos clients constatent un ROI positif en moyenne <strong>4-6 mois</strong> après déploiement.
                Voici un exemple concret pour une PME de 15 commerciaux :
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Avant le CRM</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      30% des prospects oubliés
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      2h/jour pour reporting manuel
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      Pas de visibilité sur le pipeline
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      Relances clients incohérentes
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Après 6 mois avec CRM</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      +35% de taux de conversion
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Reporting automatique en temps réel
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Prévisions précises à 85%
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Relances automatisées à 100%
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Deployment Process */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Processus de Déploiement</h2>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Analyse des Besoins", desc: "Audit de vos processus commerciaux et définition du cahier des charges", duration: "1 semaine" },
                  { step: "02", title: "Configuration & Personnalisation", desc: "Paramétrage du CRM selon vos processus, import de vos données existantes", duration: "2-3 semaines" },
                  { step: "03", title: "Intégrations", desc: "Connexion avec vos outils existants (ERP, téléphonie, site web, WhatsApp)", duration: "1-2 semaines" },
                  { step: "04", title: "Formation & Go Live", desc: "Formation de vos équipes sur site et mise en production", duration: "1 semaine" },
                  { step: "05", title: "Support & Optimisation", desc: "Accompagnement continu et ajustements selon vos retours", duration: "3 mois inclus" }
                ].map((phase, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                      {phase.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-gray-900">{phase.title}</h3>
                        <span className="text-sm text-green-600 font-medium">{phase.duration}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Use Cases */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Secteurs d'Application</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Import-Export & Commerce International",
                  "Agences Immobilières",
                  "Sociétés de Services B2B",
                  "Distributeurs & Grossistes",
                  "Cabinets de Conseil",
                  "Industries & Fabricants",
                  "Agences de Voyage",
                  "Établissements de Formation",
                  "Cliniques & Centres Médicaux"
                ].map((sector, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {sector}
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
                  { title: "Logiciel RH Algérie", href: "/blog/logiciel-rh-algerie-2024", desc: "Gestion des ressources humaines" },
                  { title: "ERP sur mesure Algérie", href: "/blog/erp-sur-mesure-algerie-2024", desc: "Planification des ressources" }
                ].map((article, i) => (
                  <Link key={i} href={article.href} className="group p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
                    <h3 className="font-semibold text-gray-900 group-hover:text-green-600 mb-1">{article.title}</h3>
                    <p className="text-sm text-gray-600">{article.desc}</p>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à Transformer votre Gestion Client ?</h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Rejoignez les entreprises algériennes qui ont boosté leurs ventes avec notre CRM.
              Démo gratuite et devis personnalisé sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/213549575512?text=Bonjour, je souhaite une démo CRM pour mon entreprise" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50">
                <MessageCircle className="w-5 h-5" /> Demander une Démo
              </a>
              <a href="tel:+213549575512"
                 className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-800">
                <Phone className="w-5 h-5" /> +213 549 57 55 12
              </a>
            </div>
            <p className="text-green-200 text-sm mt-6">
              <HeadphonesIcon className="w-4 h-4 inline mr-1" />
              Support disponible du Dimanche au Jeudi, 9h-18h
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
