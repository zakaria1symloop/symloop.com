"use client";
import { ArrowLeft, Calculator, CheckCircle, MessageCircle, FileText, Receipt, PieChart, Building, AlertCircle, Phone, Gift, Clock, Shield, Globe, Users, Award, Zap, ChevronDown, ChevronUp, HeadphonesIcon, TrendingUp, Banknote, FileCheck, Scale, Landmark } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug } from '../../data/blogs';
import { useState } from 'react';

export default function LogicielComptabiliteAlgerie() {
  const blog = getBlogBySlug('logiciel-comptabilite-algerie-2024');
  const [openFaq, setOpenFaq] = useState(0);

  const faqItems = [
    {
      question: "Le logiciel est-il conforme au Plan Comptable National (PCN) ?",
      answer: "Oui, notre logiciel est 100% conforme au PCN algérien (version 2010). Tous les comptes, journaux et états financiers respectent la nomenclature officielle. Nous mettons à jour le logiciel à chaque évolution réglementaire pour garantir votre conformité permanente."
    },
    {
      question: "Comment gérez-vous la déclaration G50 ?",
      answer: "Notre module génère automatiquement la déclaration G50 mensuelle. Il calcule la TVA (19%, 9%, exonéré), la TAP, les retenues à la source et prépare le fichier au format requis par l'administration fiscale. Vous n'avez plus qu'à valider et déposer."
    },
    {
      question: "Combien coûte un logiciel de comptabilité ?",
      answer: "Nos solutions démarrent à partir de 120 000 DA pour les TPE/auto-entrepreneurs, avec toutes les fonctionnalités essentielles. Pour les PME avec comptabilité analytique et multi-sociétés, comptez à partir de 350 000 DA. Contactez-nous pour un devis personnalisé selon vos besoins exacts."
    },
    {
      question: "Puis-je migrer mes données depuis un autre logiciel ?",
      answer: "Absolument. Nous assurons la migration depuis Excel, Sage, PC Compta, et tout autre logiciel. Notre équipe s'occupe de l'import, du contrôle de cohérence et de la formation de vos équipes. La migration est généralement incluse dans le prix."
    },
    {
      question: "Le logiciel gère-t-il la paie et les déclarations CNAS/CASNOS ?",
      answer: "Oui, notre module Paie gère les bulletins de salaire conformes, les déclarations CNAS employeur/employé, CASNOS pour les gérants, IRG sur salaires, et génère les fichiers de télédéclaration. Tout est automatisé selon la législation algérienne."
    },
    {
      question: "Mes données sont-elles sécurisées et archivées ?",
      answer: "Vos données sont chiffrées, sauvegardées quotidiennement, et archivées pendant 10 ans conformément à la loi. Hébergement possible en Algérie ou sur cloud sécurisé selon vos préférences. Vous gardez toujours la propriété totale de vos données."
    },
    {
      question: "Quel est le meilleur logiciel de comptabilité en Algérie ?",
      answer: "Le meilleur logiciel de comptabilité en Algérie est celui qui est nativement conforme au PCN (Plan Comptable National), génère automatiquement la G50, gère la TVA algérienne et offre un support local. Symloop développe des solutions sur mesure qui répondent à tous ces critères, avec interface français/arabe et hébergement en Algérie."
    },
    {
      question: "Combien coûte un logiciel de comptabilité en Algérie ?",
      answer: "Le prix d'un logiciel de comptabilité en Algérie varie selon les fonctionnalités : à partir de 35 000 DA pour une TPE (comptabilité générale + facturation + G50), environ 90 000 DA pour une PME (paie, analytique, gestion commerciale), et sur devis pour les groupes multi-sociétés. Les solutions Symloop sont 40 à 60 % moins chères que les logiciels importés."
    },
    {
      question: "Logiciel de comptabilité conforme à la réglementation algérienne ?",
      answer: "Symloop développe des logiciels 100 % conformes à la réglementation algérienne : Plan Comptable National (PCN 2010), déclarations fiscales G50, TVA (19 %, 9 %, exonéré), TAP, IBS, liasse fiscale, état 104, et export au format JIBAYA. Chaque mise à jour réglementaire est intégrée automatiquement."
    },
    {
      question: "Symloop développe-t-il des logiciels de comptabilité ?",
      answer: "Oui, Symloop est une entreprise algérienne basée à Sétif spécialisée dans le développement de logiciels de comptabilité, facturation et gestion commerciale sur mesure. Nos solutions sont conçues nativement pour le marché algérien avec conformité PCN, G50 automatique, interface bilingue FR/AR, et support local. Contact : +213 549 575 512."
    },
    {
      question: "Peut-on avoir un logiciel de facturation avec TVA algérienne ?",
      answer: "Absolument. Symloop développe des logiciels de facturation intégrant la TVA algérienne (taux de 19 %, 9 % et exonéré), la numérotation légale des factures, le timbre fiscal, et la gestion multi-devises (DA, EUR, USD). Le module facturation peut fonctionner seul ou être intégré à la comptabilité générale et à la gestion commerciale."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Logiciel Comptabilité Algérie 2024 - Conforme PCN et G50",
    "description": "Solution comptable conforme au Plan Comptable National algérien. Gestion G50, TVA, TAP, IBS, facturation électronique. Prix compétitifs.",
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

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://symloop.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://symloop.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Logiciel Comptabilité Algérie 2024",
        "item": "https://symloop.com/blog/logiciel-comptabilite-algerie-2024"
      }
    ]
  };

  const speakableData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Logiciel Comptabilité Algérie 2024 - Conforme PCN & G50 | Symloop",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".en-bref-block", "h1", "article .prose"]
    },
    "url": "https://symloop.com/blog/logiciel-comptabilite-algerie-2024"
  };

  return (
    <>
      <Head>
        <title>Logiciel Comptabilité Algérie 2024 - Conforme PCN & G50 | Symloop</title>
        <meta name="description" content="Logiciel comptable conforme PCN algérien. Génération automatique G50, TVA, TAP, IBS, bilan, TCR. Prix -40% vs solutions étrangères. Devis gratuit." />
        <meta name="keywords" content="logiciel comptabilité algérie, pcn algérie, g50 déclaration, facturation électronique algérie, comptabilité pme algérie, logiciel gestion commerciale algérie, tap algérie, tva algérie, ibs algérie, sage alternative algérie" />
        <link rel="canonical" href="https://symloop.com/blog/logiciel-comptabilite-algerie-2024" />
        <meta property="og:title" content="Logiciel Comptabilité Algérie 2024 - Conforme PCN | Symloop" />
        <meta property="og:description" content="Solution comptable 100% conforme au PCN algérien. G50 automatique, facturation, états financiers. Devis gratuit." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/logiciel-comptabilite-algerie-2024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableData) }} />
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
                <span className="bg-amber-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Calculator className="w-4 h-4" />Comptabilité
                </span>
                <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm">
                  Conforme PCN 2024
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Logiciel <span className="text-amber-400">Comptabilité</span> Algérie 2024
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Solution comptable 100% conforme au Plan Comptable National.
                G50, TVA, bilan, TCR - tout automatisé pour votre entreprise algérienne.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/213549575512?text=Bonjour, je souhaite un logiciel de comptabilité"
                   className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-600">
                  <MessageCircle className="w-5 h-5" /> Demander une Démo
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
        <section className="bg-gradient-to-r from-amber-600 to-orange-500 text-white py-4">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Gift className="w-5 h-5" />
              <span className="font-semibold">Offre Spéciale : -25% + Migration données GRATUITE</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Jusqu'au 31 Janvier 2025</span>
            </div>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                La comptabilité en Algérie exige une <strong>conformité stricte au PCN</strong> (Plan Comptable National)
                et aux obligations fiscales locales. Notre logiciel est conçu spécifiquement pour le
                <span className="text-amber-600 font-semibold"> contexte algérien</span> : déclarations G50 automatiques,
                calcul TVA/TAP/IBS, et états financiers conformes.
              </p>
              <p className="text-gray-600">
                Contrairement aux solutions étrangères (Sage, Ciel, etc.) qui nécessitent des adaptations coûteuses,
                notre logiciel est <strong>nativement algérien</strong> : interface français/arabe, plan de comptes PCN
                pré-configuré, et mises à jour automatiques selon les évolutions réglementaires.
              </p>
            </div>

            {/* En Bref */}
            <div className="en-bref-block mb-12 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3">En bref</h2>
              <p className="text-gray-700 leading-relaxed">
                Symloop développe des logiciels de comptabilité et facturation sur mesure pour les entreprises algériennes.
                Conformes à la réglementation fiscale algérienne, gestion TVA, bilan, journal, grand livre.
                Interface FR/AR. Alternative locale aux solutions importées. Basé à Sétif.
                Contact : <a href="tel:+213549575512" className="text-amber-600 font-semibold hover:underline">+213 549 575 512</a>.
              </p>
            </div>

            {/* Key Stats */}
            <section className="mb-16">
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { value: "100%", label: "Conforme PCN", icon: FileCheck },
                  { value: "-70%", label: "Temps déclarations", icon: Clock },
                  { value: "0", label: "Erreur de calcul", icon: Calculator },
                  { value: "10 ans", label: "Archivage légal", icon: Shield }
                ].map((stat, i) => (
                  <div key={i} className="bg-amber-50 rounded-xl p-5 text-center">
                    <stat.icon className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-amber-600">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Main Features */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Modules Comptables Complets</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: FileText,
                    title: "Comptabilité Générale PCN",
                    desc: "Plan comptable national intégré avec tous les comptes normalisés",
                    features: ["Plan de comptes PCN 2010", "Journaux & Grand Livre", "Balance & Brouillard", "Lettrage automatique"]
                  },
                  {
                    icon: Receipt,
                    title: "Facturation & Gestion Commerciale",
                    desc: "Devis, factures, avoirs conformes à la réglementation",
                    features: ["Numérotation légale", "Facturation électronique", "Gestion stock (optionnel)", "Multi-devises DA/EUR/USD"]
                  },
                  {
                    icon: Landmark,
                    title: "Déclarations Fiscales",
                    desc: "Génération automatique de toutes vos obligations fiscales",
                    features: ["G50 mensuelle automatique", "TVA (19%, 9%, exonéré)", "TAP & IBS", "Export format JIBAYA"]
                  },
                  {
                    icon: PieChart,
                    title: "États Financiers",
                    desc: "Bilan, TCR et annexes conformes aux normes algériennes",
                    features: ["Bilan actif/passif", "Tableau Compte Résultat", "Flux de trésorerie", "Ratios financiers"]
                  },
                  {
                    icon: Users,
                    title: "Paie & Déclarations Sociales",
                    desc: "Gestion complète de la paie selon le droit algérien",
                    features: ["Bulletins de salaire", "CNAS employeur/salarié", "CASNOS gérants", "IRG sur salaires"]
                  },
                  {
                    icon: Building,
                    title: "Immobilisations & Amortissements",
                    desc: "Suivi complet du patrimoine de l'entreprise",
                    features: ["Registre immobilisations", "Amortissements automatiques", "Cessions & sorties", "Inventaire physique"]
                  }
                ].map((feature, i) => (
                  <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-amber-200 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{feature.desc}</p>
                    <ul className="space-y-1">
                      {feature.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-amber-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Fiscal Compliance Detail */}
            <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Conformité Fiscale Algérienne Garantie</h2>
              <p className="text-gray-600 mb-6">
                Notre équipe suit de près les évolutions réglementaires pour garantir votre conformité permanente.
                Toutes les déclarations sont générées aux formats officiels acceptés par l'administration fiscale.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-amber-600" /> Obligations Mensuelles
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Déclaration G50 avec calcul automatique",
                      "TVA collectée et déductible",
                      "TAP (Taxe sur Activité Professionnelle)",
                      "Retenues à la source (IRG, TAP fournisseurs)",
                      "Fichier télédéclaration format DGI"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-amber-600" /> Obligations Annuelles
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Liasse fiscale complète",
                      "IBS (Impôt sur Bénéfices des Sociétés)",
                      "État 104 (clients/fournisseurs)",
                      "Déclaration annuelle des salaires",
                      "Rapport commissaire aux comptes (si applicable)"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tarifs Logiciel Comptabilité - Prix Algérie</h2>
              <p className="text-gray-600 mb-6">
                Nos solutions sont <strong>40-60% moins chères</strong> que les logiciels importés,
                avec l'avantage d'être nativement conformes à la réglementation algérienne.
              </p>

              {/* Pricing Warning */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif final dépend du nombre de postes, des modules choisis,
                  et de la complexité de votre activité. <strong>Contactez-nous pour un devis gratuit et personnalisé</strong>
                  - nous incluons la migration de vos données existantes.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Comptabilité TPE",
                    price: "35 000",
                    period: "licence perpétuelle",
                    desc: "Auto-entrepreneurs & petites structures",
                    features: ["1 poste inclus", "Comptabilité générale PCN", "Facturation & devis", "G50 automatique", "Support email", "Formation initiale"],
                    popular: false
                  },
                  {
                    name: "Comptabilité PME",
                    price: "90 000",
                    period: "licence perpétuelle",
                    desc: "PME avec besoins complets",
                    features: ["5 postes inclus", "Tout TPE +", "Paie & CNAS/CASNOS", "Gestion commerciale", "Comptabilité analytique", "Support prioritaire"],
                    popular: true
                  },
                  {
                    name: "Comptabilité Groupe",
                    price: "Sur devis",
                    period: "selon périmètre",
                    desc: "Multi-sociétés & consolidation",
                    features: ["Postes illimités", "Tout PME +", "Multi-sociétés", "Consolidation", "API & intégrations", "Account manager dédié"],
                    popular: false
                  }
                ].map((plan, i) => (
                  <div key={i} className={`relative rounded-2xl p-6 ${plan.popular ? 'bg-amber-600 text-white ring-4 ring-amber-600 ring-offset-2' : 'bg-gray-50'}`}>
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-400 text-green-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Plus populaire
                      </span>
                    )}
                    <h3 className={`text-xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                    <p className={`text-sm mb-4 ${plan.popular ? 'text-amber-100' : 'text-gray-600'}`}>{plan.desc}</p>
                    <div className="mb-6">
                      <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-amber-600'}`}>
                        {plan.price === "Sur devis" ? "Sur devis" : `${plan.price} DA`}
                      </span>
                      <div className={`text-sm ${plan.popular ? 'text-amber-100' : 'text-gray-500'}`}>{plan.period}</div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle className={`w-4 h-4 ${plan.popular ? 'text-amber-200' : 'text-amber-500'}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={`https://wa.me/213549575512?text=Bonjour, je suis intéressé par ${plan.name}`}
                       className={`block text-center py-3 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-white text-amber-600 hover:bg-amber-50' : 'bg-amber-600 text-white hover:bg-amber-700'}`}>
                      Demander un Devis
                    </a>
                  </div>
                ))}
              </div>

              {/* Comparison */}
              <div className="mt-8 bg-amber-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Comparaison avec les Solutions du Marché</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-amber-200">
                        <th className="text-left py-2 text-gray-600">Solution</th>
                        <th className="text-center py-2 text-gray-600">Prix moyen</th>
                        <th className="text-center py-2 text-gray-600">PCN natif</th>
                        <th className="text-center py-2 text-gray-600">G50 auto</th>
                        <th className="text-center py-2 text-gray-600">Support local</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-amber-100">
                        <td className="py-3 font-semibold text-amber-600">Symloop Compta</td>
                        <td className="py-3 text-center font-bold text-amber-600">35-90K DA</td>
                        <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                        <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                        <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                      </tr>
                      <tr className="border-b border-amber-100">
                        <td className="py-3 text-gray-600">Sage Algérie</td>
                        <td className="py-3 text-center text-gray-600">400-800K DA</td>
                        <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                        <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                        <td className="py-3 text-center text-amber-400">Limité</td>
                      </tr>
                      <tr className="border-b border-amber-100">
                        <td className="py-3 text-gray-600">PC Compta</td>
                        <td className="py-3 text-center text-gray-600">80-200K DA</td>
                        <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                        <td className="py-3 text-center text-red-400">✕</td>
                        <td className="py-3 text-center text-amber-400">Limité</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-gray-600">Solutions étrangères</td>
                        <td className="py-3 text-center text-gray-600">500K+ DA</td>
                        <td className="py-3 text-center text-red-400">✕</td>
                        <td className="py-3 text-center text-red-400">✕</td>
                        <td className="py-3 text-center text-red-400">✕</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Algerian Advantages */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Avantages d'une Solution 100% Algérienne</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: FileText, text: "Plan comptable PCN 2010 pré-configuré" },
                  { icon: Globe, text: "Interface bilingue Français / Arabe" },
                  { icon: Landmark, text: "Déclarations fiscales formats DGI" },
                  { icon: Shield, text: "Données hébergées en Algérie" },
                  { icon: Users, text: "Support technique local réactif" },
                  { icon: Award, text: "Formation sur site disponible" },
                  { icon: Banknote, text: "Gestion multi-devises (DA, EUR, USD)" },
                  { icon: Clock, text: "Mises à jour réglementaires automatiques" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-center p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ROI Section */}
            <section className="mb-16 bg-gradient-to-br from-gray-50 to-amber-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Retour sur Investissement</h2>
              <p className="text-gray-600 mb-6">
                Nos clients économisent en moyenne <strong>15-20 heures par mois</strong> sur la gestion comptable
                et réduisent les risques d'erreurs fiscales. Exemple pour une PME :
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: "Temps gagné / mois", value: "20h", detail: "Sur déclarations & reporting" },
                  { label: "Économie annuelle", value: "~500K DA", detail: "Vs comptable externe" },
                  { label: "ROI atteint en", value: "6 mois", detail: "En moyenne" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-1">{stat.value}</div>
                    <div className="font-semibold text-gray-900">{stat.label}</div>
                    <div className="text-sm text-gray-500">{stat.detail}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Deployment Process */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Processus de Mise en Place</h2>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Audit & Configuration", desc: "Analyse de votre activité, configuration du plan comptable et des journaux", duration: "1-2 jours" },
                  { step: "02", title: "Migration des Données", desc: "Import de votre historique comptable depuis Excel ou ancien logiciel", duration: "2-5 jours" },
                  { step: "03", title: "Paramétrage Fiscal", desc: "Configuration TVA, TAP, régimes fiscaux selon votre activité", duration: "1 jour" },
                  { step: "04", title: "Formation Équipe", desc: "Formation pratique sur site ou à distance de vos collaborateurs", duration: "1-2 jours" },
                  { step: "05", title: "Mise en Production", desc: "Accompagnement au premier mois de production et clôture", duration: "1 mois" }
                ].map((phase, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors">
                    <div className="w-12 h-12 bg-amber-600 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                      {phase.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-gray-900">{phase.title}</h3>
                        <span className="text-sm text-amber-600 font-medium">{phase.duration}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Sectors */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Secteurs d'Activité Couverts</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Commerce & Distribution",
                  "Services & Consulting",
                  "BTP & Construction",
                  "Import-Export",
                  "Industries & Production",
                  "Professions Libérales",
                  "Restaurants & Hôtellerie",
                  "Santé & Pharmacies",
                  "Associations & ONG"
                ].map((sector, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
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
                  { title: "Logiciel RH Algérie", href: "/blog/logiciel-rh-algerie-2024", desc: "Gestion paie et ressources humaines" },
                  { title: "ERP sur mesure Algérie", href: "/blog/erp-sur-mesure-algerie-2024", desc: "Solution intégrée pour entreprises" },
                  { title: "ERP sur mesure & SaaS pour startup et PME en Algérie", href: "/blog/erp-sur-mesure-saas-startup-pme-algerie-2026", desc: "Créez votre ERP ou SaaS sur mesure adapté au marché algérien" },
                  { title: "Ne Perdez Plus 1 Dinar - Digitalisez votre entreprise", href: "/blog/digitaliser-entreprise-algerie-ne-perdez-plus-1-dinar", desc: "Comment la digitalisation transforme les entreprises algériennes" }
                ].map((article, i) => (
                  <Link key={i} href={article.href} className="group p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors">
                    <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 mb-1">{article.title}</h3>
                    <p className="text-sm text-gray-600">{article.desc}</p>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-amber-600 to-orange-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Simplifiez votre Comptabilité</h2>
            <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
              Rejoignez les entreprises algériennes qui ont automatisé leur comptabilité.
              Démo gratuite et devis personnalisé sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/213549575512?text=Bonjour, je souhaite un logiciel de comptabilité pour mon entreprise" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold hover:bg-amber-50">
                <MessageCircle className="w-5 h-5" /> Demander une Démo
              </a>
              <a href="tel:+213549575512"
                 className="inline-flex items-center justify-center gap-2 bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-amber-800">
                <Phone className="w-5 h-5" /> +213 549 57 55 12
              </a>
            </div>
            <p className="text-amber-200 text-sm mt-6">
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
