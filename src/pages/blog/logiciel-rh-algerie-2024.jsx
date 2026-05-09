"use client";
import { ArrowLeft, Users, CheckCircle, MessageCircle, Calendar, FileText, DollarSign, BarChart3, Phone, Clock, Shield, Zap, Award, TrendingUp, ArrowRight, Building, Target, Settings, Globe, Database, Lock, Smartphone, Cloud, HeadphonesIcon, Gift, Percent, Star, AlertCircle } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug } from '../../data/blogs';

export default function LogicielRHAlgerie() {
  const blog = getBlogBySlug('logiciel-rh-algerie-2024');

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Logiciel RH et Paie Algérie 2024 - SIRH Conforme CNAS/CASNOS",
    "description": "Solution SIRH complète pour entreprises algériennes. Gestion paie CNAS/CASNOS/IRG, congés, recrutement, évaluations. Prix compétitifs, démo gratuite.",
    "author": { "@type": "Organization", "name": "Symloop" },
    "publisher": { "@type": "Organization", "name": "Symloop", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
    "datePublished": "2024-01-15",
    "dateModified": "2024-12-01",
    "mainEntityOfPage": "https://symloop.com/blog/logiciel-rh-algerie-2024"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quel est le meilleur SIRH pour les entreprises en Algérie ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Le meilleur SIRH en Algérie est celui qui intègre nativement les règles CNAS (9% salarié, 26% employeur), CASNOS, IRG selon le barème fiscal algérien, et qui génère les déclarations sociales conformes. Symloop propose un SIRH 100% adapté au droit du travail algérien, avec interface français/arabe, déployé en 2 à 4 semaines." }
      },
      {
        "@type": "Question",
        "name": "Combien coûte un logiciel RH et paie en Algérie ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Un logiciel RH en Algérie coûte à partir de 150 000 DA pour les TPE (1-20 employés) et à partir de 450 000 DA pour les PME (21-100 employés). Les grandes entreprises (100+ employés) bénéficient de tarifs sur mesure. C'est en moyenne 40% moins cher que les solutions étrangères comme SAP ou Sage RH." }
      },
      {
        "@type": "Question",
        "name": "Comment Symloop gère-t-il la paie et les déclarations sociales en Algérie ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Symloop automatise le calcul de la paie conforme à la législation algérienne : cotisations CNAS employeur (26%) et salarié (9%), CASNOS pour indépendants et gérants (15%), IRG selon le barème fiscal en vigueur. Le logiciel génère les bulletins de paie, les déclarations sociales trimestrielles et annuelles, et les virements bancaires. Basé à Sétif, Symloop assure un support local réactif." }
      },
      {
        "@type": "Question",
        "name": "Le logiciel RH Symloop est-il conforme au droit du travail algérien ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Oui, le SIRH Symloop est 100% conforme au code du travail algérien et à la réglementation sociale. Il applique automatiquement : les taux CNAS/CASNOS en vigueur, le barème IRG, les règles de congés payés (2,5 jours/mois), les majorations d'heures supplémentaires (50% et 100%), et les indemnités légales. Les mises à jour réglementaires sont incluses." }
      },
      {
        "@type": "Question",
        "name": "Quelles fonctionnalités de paie sont incluses dans le logiciel RH algérien ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Le logiciel RH Symloop inclut : calcul automatique des salaires brut/net, gestion des primes et indemnités, retenues CNAS et IRG, déclarations CASNOS, génération des bulletins de paie personnalisables, virements bancaires automatisés, gestion des heures supplémentaires, calcul des congés payés, et export comptable. Toutes les fonctionnalités sont conformes à la législation algérienne." }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Logiciel RH et Paie Algérie", "item": "https://symloop.com/blog/logiciel-rh-algerie-2024" }
    ]
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Logiciel RH et Paie Algérie 2024 - SIRH Conforme CNAS/CASNOS",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".en-bref-block", "h1", ".prose"]
    },
    "url": "https://symloop.com/blog/logiciel-rh-algerie-2024"
  };

  return (
    <>
      <Head>
        <title>Logiciel RH et Paie Algérie 2024 - SIRH Conforme CNAS/CASNOS | Symloop</title>
        <meta name="description" content="Solution SIRH complète pour entreprises algériennes. Gestion paie CNAS/CASNOS/IRG, congés, recrutement, évaluations. Prix à partir de 150K DA. Démo gratuite." />
        <meta name="keywords" content="logiciel rh algérie, sirh algérie, gestion paie algérie, logiciel paie cnas, logiciel casnos, gestion ressources humaines, logiciel pointage, gestion congés, bulletin paie algérie, déclaration sociale algérie, irg algérie, logiciel rh prix" />
        <link rel="canonical" href="https://symloop.com/blog/logiciel-rh-algerie-2024" />
        <meta property="og:title" content="Logiciel RH et Paie Algérie 2024 - SIRH Conforme CNAS/CASNOS" />
        <meta property="og:description" content="Solution SIRH complète pour entreprises algériennes. Gestion paie, congés, recrutement. Prix compétitifs." />
        <meta property="og:url" content="https://symloop.com/blog/logiciel-rh-algerie-2024" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(speakableSchema)}</script>
      </Head>

      <div className="min-h-screen bg-white">
        <section className="bg-black text-white py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8">
                <ArrowLeft className="w-4 h-4" /> Retour au blog
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Users className="w-4 h-4" />SIRH Entreprise
                </span>
                <span className="text-gray-400 text-sm flex items-center gap-1">
                  <Clock className="w-4 h-4" /> 15 min de lecture
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Logiciel <span className="text-blue-400">RH et Paie</span> en Algérie 2024
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Solution SIRH complète et conforme à la législation algérienne. Automatisez votre gestion
                RH : paie CNAS/CASNOS, congés, recrutement, évaluations. Prix compétitifs, démo gratuite.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-lg">
                  <span className="text-green-400 font-bold">-40%</span>
                  <span className="text-gray-300 text-sm ml-2">vs solutions étrangères</span>
                </div>
                <div className="bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-lg">
                  <span className="text-blue-400 font-bold">100%</span>
                  <span className="text-gray-300 text-sm ml-2">Conforme législation DZ</span>
                </div>
                <div className="bg-purple-500/20 border border-purple-500/30 px-4 py-2 rounded-lg">
                  <span className="text-purple-400 font-bold">2-4 sem</span>
                  <span className="text-gray-300 text-sm ml-2">Déploiement rapide</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction détaillée */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                La gestion des <span className="text-blue-600 font-semibold">ressources humaines</span> en Algérie nécessite
                une solution adaptée aux spécificités locales : calcul de paie conforme <span className="text-blue-600 font-semibold">CNAS/CASNOS</span>,
                déclarations sociales, IRG selon le barème fiscal algérien. Notre SIRH vous fait économiser
                <strong> jusqu'à 40% par rapport aux solutions étrangères</strong>, tout en garantissant une conformité totale.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Plus de <strong>500 entreprises algériennes</strong> font confiance à notre solution RH : PME, grandes entreprises,
                administrations. Que vous ayez 10 ou 5000 employés, nous avons la formule adaptée à vos besoins et votre budget.
                <strong> Contactez-nous pour un devis personnalisé gratuit.</strong>
              </p>
            </div>

            {/* En bref */}
            <section className="en-bref-block mb-12 bg-blue-50 border-l-4 border-blue-500 rounded-xl p-6">
              <h2 className="text-lg font-bold text-blue-900 mb-2">En bref</h2>
              <p className="text-gray-700 leading-relaxed">
                Symloop developpe des logiciels RH et paie sur mesure pour les entreprises algeriennes.
                Gestion employes, pointage, conges, bulletins de paie, declarations CNAS/CASNOS.
                Conforme au droit du travail algerien. Interface FR/AR. Base a Setif.
                Contact&nbsp;: <a href="tel:+213549575512" className="text-blue-600 font-semibold hover:underline">+213 549 575 512</a>.
              </p>
            </section>

            {/* Offre spéciale */}
            <section className="mb-16 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Offre Spéciale Entreprises Algériennes</h2>
                  <p className="text-gray-600 mb-4">
                    <strong className="text-green-600">-30% sur votre première année</strong> + Formation équipe offerte +
                    3 mois de support premium gratuit. Offre valable pour toute signature avant fin 2024.
                  </p>
                  <a href="https://wa.me/213549575512?text=Bonjour, je suis intéressé par l'offre spéciale logiciel RH"
                     className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    <Phone className="w-5 h-5" /> Profiter de l'Offre
                  </a>
                </div>
              </div>
            </section>

            {/* Fonctionnalités détaillées */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Fonctionnalités Complètes du SIRH</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: DollarSign,
                    title: "Gestion Paie Complète",
                    desc: "Calcul automatique 100% conforme législation algérienne",
                    features: ["Calcul CNAS (9% salarié, 26% employeur)", "Déclarations CASNOS automatiques", "IRG selon barème fiscal 2024", "Bulletins de paie personnalisables", "Primes, indemnités, heures sup", "Virements bancaires automatisés"]
                  },
                  {
                    icon: Calendar,
                    title: "Congés & Absences",
                    desc: "Gestion complète du temps de travail",
                    features: ["Demandes en ligne avec workflow", "Validation manager multi-niveaux", "Calcul automatique des soldes", "Calendrier équipe partagé", "Gestion RTT, maladie, maternité", "Alertes et notifications"]
                  },
                  {
                    icon: FileText,
                    title: "Dossiers Employés",
                    desc: "Centralisation de toutes les informations RH",
                    features: ["Fiche employé complète", "Documents administratifs", "Historique carrière et salaires", "Contrats et avenants", "Certificats de travail auto", "Archivage légal sécurisé"]
                  },
                  {
                    icon: BarChart3,
                    title: "Évaluations & Formation",
                    desc: "Développement et suivi des compétences",
                    features: ["Entretiens annuels digitalisés", "Objectifs SMART et suivi", "Plans de formation individuels", "Catalogue formations intégré", "Évaluations 360°", "Rapports et analytics RH"]
                  },
                  {
                    icon: Users,
                    title: "Recrutement",
                    desc: "Gérez tout le processus de recrutement",
                    features: ["Publication offres multi-sites", "CVthèque et tri automatique", "Workflow de candidature", "Planification entretiens", "Scoring candidats", "Onboarding digital"]
                  },
                  {
                    icon: Clock,
                    title: "Pointage & Présence",
                    desc: "Suivi précis du temps de travail",
                    features: ["Pointeuse physique ou mobile", "Géolocalisation terrain", "Calcul heures automatique", "Gestion planning équipes", "Export vers paie", "Alertes retards/absences"]
                  }
                ].map((feature, i) => (
                  <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{feature.desc}</p>
                    <ul className="space-y-1">
                      {feature.features.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Conformité algérienne détaillée */}
            <section className="mb-16 bg-blue-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-600" />
                100% Conforme à la Législation Algérienne
              </h2>
              <p className="text-gray-600 mb-6">
                Notre SIRH est développé spécifiquement pour le marché algérien. Toutes les règles de calcul
                sont mises à jour automatiquement selon les évolutions légales.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "CNAS Employeur", value: "26%", desc: "Calculé automatiquement" },
                  { title: "CNAS Salarié", value: "9%", desc: "Retenue sur salaire brut" },
                  { title: "CASNOS", value: "15%", desc: "Pour indépendants/gérants" },
                  { title: "IRG", value: "Barème 2024", desc: "Tranches fiscales à jour" },
                  { title: "Congés Payés", value: "2.5j/mois", desc: "Calcul automatique droits" },
                  { title: "Heures Sup", value: "+50/100%", desc: "Majoration légale appliquée" }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{item.value}</div>
                      <div className="text-xs text-gray-500">{item.title}</div>
                    </div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tarification */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tarification Compétitive - Économisez jusqu'à 40%</h2>
              <p className="text-gray-600 mb-8">
                Nos prix sont <strong>40% moins chers que les solutions étrangères</strong> (SAP, Sage RH, etc.)
                tout en offrant une conformité parfaite à la législation algérienne.
                <span className="text-blue-600 font-semibold"> Contactez-nous pour un devis exact adapté à votre entreprise.</span>
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    name: "TPE",
                    employees: "1-20 employés",
                    price: "À partir de 150 000 DA",
                    period: "licence perpétuelle",
                    features: ["Paie + Congés + Dossiers", "1 utilisateur admin", "Mises à jour 1 an", "Support email"],
                    highlight: false,
                    savings: "Économisez 200K DA/an"
                  },
                  {
                    name: "PME",
                    employees: "21-100 employés",
                    price: "À partir de 450 000 DA",
                    period: "licence perpétuelle",
                    features: ["Toutes fonctionnalités", "5 utilisateurs", "Pointage inclus", "Support prioritaire", "Formation sur site"],
                    highlight: true,
                    savings: "Économisez 500K DA/an"
                  },
                  {
                    name: "Grande Entreprise",
                    employees: "100+ employés",
                    price: "Sur devis",
                    period: "adapté à vos besoins",
                    features: ["Solution sur mesure", "Utilisateurs illimités", "Intégrations ERP", "Support dédié 24/7", "Déploiement accompagné"],
                    highlight: false,
                    savings: "Économisez jusqu'à 2M DA/an"
                  }
                ].map((plan, i) => (
                  <div key={i} className={`rounded-2xl p-6 ${plan.highlight ? 'bg-blue-600 text-white ring-4 ring-blue-200' : 'bg-gray-50 border-2 border-gray-100'}`}>
                    {plan.highlight && (
                      <div className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                        PLUS POPULAIRE
                      </div>
                    )}
                    <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                    <p className={`text-sm mb-4 ${plan.highlight ? 'text-blue-100' : 'text-gray-500'}`}>{plan.employees}</p>
                    <div className="mb-4">
                      <span className={`text-2xl font-bold ${plan.highlight ? 'text-white' : 'text-blue-600'}`}>{plan.price}</span>
                      <span className={`text-sm ${plan.highlight ? 'text-blue-100' : 'text-gray-500'}`}> / {plan.period}</span>
                    </div>
                    <div className={`text-sm font-medium mb-4 ${plan.highlight ? 'text-green-300' : 'text-green-600'}`}>
                      {plan.savings}
                    </div>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, j) => (
                        <li key={j} className={`flex items-center gap-2 text-sm ${plan.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                          <CheckCircle className={`w-4 h-4 ${plan.highlight ? 'text-green-300' : 'text-blue-500'}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a href="https://wa.me/213549575512?text=Bonjour, je souhaite un devis pour le pack RH {plan.name}"
                       className={`block text-center py-3 rounded-xl font-semibold transition-colors ${
                         plan.highlight
                           ? 'bg-white text-blue-600 hover:bg-blue-50'
                           : 'bg-blue-600 text-white hover:bg-blue-700'
                       }`}>
                      Demander un Devis
                    </a>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif exact dépend de votre effectif, des modules choisis et de vos besoins spécifiques.
                  <strong> Contactez-nous pour un devis gratuit et personnalisé</strong> - nous nous engageons à battre tout devis concurrent à fonctionnalités équivalentes.
                </p>
              </div>
            </section>

            {/* ROI et bénéfices */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Retour sur Investissement</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { stat: "-70%", label: "Temps de traitement paie", icon: Clock },
                  { stat: "-50%", label: "Erreurs de calcul", icon: Shield },
                  { stat: "+40%", label: "Productivité RH", icon: TrendingUp },
                  { stat: "3 mois", label: "ROI moyen constaté", icon: DollarSign }
                ].map((item, i) => (
                  <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
                    <item.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-blue-600">{item.stat}</div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Processus de déploiement */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Déploiement en 4 Étapes</h2>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Analyse & Devis", desc: "Étude de vos besoins, démonstration personnalisée, devis détaillé gratuit", duration: "1-2 jours" },
                  { step: "2", title: "Configuration", desc: "Paramétrage selon votre convention collective, import de vos données existantes", duration: "3-5 jours" },
                  { step: "3", title: "Formation", desc: "Formation de votre équipe RH sur site ou à distance, documentation complète", duration: "1-2 jours" },
                  { step: "4", title: "Go Live + Support", desc: "Mise en production, accompagnement premier mois de paie, support continu", duration: "1 mois" }
                ].map((phase, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {phase.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-gray-900">{phase.title}</h3>
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">{phase.duration}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Intégrations */}
            <section className="mb-16 bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Intégrations Disponibles</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { name: "Sage Comptabilité", type: "Comptabilité" },
                  { name: "PC Compta", type: "Comptabilité" },
                  { name: "Odoo", type: "ERP" },
                  { name: "Microsoft 365", type: "Productivité" },
                  { name: "Google Workspace", type: "Productivité" },
                  { name: "Pointeuses ZKTeco", type: "Matériel" },
                  { name: "Banques DZ", type: "Virements" },
                  { name: "API personnalisée", type: "Sur mesure" }
                ].map((integration, i) => (
                  <div key={i} className="bg-white rounded-lg p-3 text-center">
                    <div className="font-medium text-gray-900 text-sm">{integration.name}</div>
                    <div className="text-xs text-gray-500">{integration.type}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions Fréquentes</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Combien coûte un logiciel RH en Algérie ?",
                    a: "Nos solutions SIRH démarrent à partir de 150 000 DA pour les TPE (1-20 employés). Pour les PME (21-100 employés), comptez à partir de 450 000 DA. Les grandes entreprises bénéficient de tarifs sur mesure. Contactez-nous pour un devis exact adapté à votre effectif et vos besoins spécifiques."
                  },
                  {
                    q: "Le logiciel est-il conforme à la législation algérienne ?",
                    a: "Absolument. Notre SIRH est 100% conforme : calcul CNAS (9% salarié, 26% employeur), déclarations CASNOS automatiques, IRG selon le barème fiscal 2024, bulletins de paie conformes au code du travail. Les mises à jour légales sont incluses."
                  },
                  {
                    q: "Combien de temps pour déployer le logiciel RH ?",
                    a: "Le déploiement complet prend 2-4 semaines pour une PME standard : installation, configuration selon votre convention collective, import de vos données existantes, formation équipe. Nous vous accompagnons sur votre premier mois de paie."
                  },
                  {
                    q: "Puis-je migrer depuis mon ancien logiciel ?",
                    a: "Oui, nous assurons la migration complète de vos données depuis tout logiciel existant (Sage, Excel, etc.) : historiques de paie, dossiers employés, soldes de congés. La migration est incluse dans nos forfaits PME et Entreprise."
                  },
                  {
                    q: "Le logiciel fonctionne-t-il hors connexion ?",
                    a: "Nous proposons deux versions : Cloud (accessible partout, mises à jour automatiques) et On-premise (installé sur vos serveurs, fonctionne hors ligne). La version Cloud est recommandée pour la plupart des entreprises."
                  },
                  {
                    q: "Quel support est inclus ?",
                    a: "Tous nos forfaits incluent : support par email et téléphone, mises à jour légales automatiques, documentation en ligne. Les forfaits PME et Entreprise incluent un support prioritaire et un accompagnement personnalisé."
                  }
                ].map((faq, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-6">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-2">
                      <span className="text-blue-500">Q:</span> {faq.q}
                    </h3>
                    <p className="text-gray-600 pl-6">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA intermédiaire */}
            <section className="mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Obtenez Votre Devis Personnalisé Gratuit</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Décrivez-nous votre entreprise et vos besoins, nous vous envoyons un devis détaillé sous 24h.
                Sans engagement, avec démonstration gratuite incluse.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/213549575512?text=Bonjour, je souhaite un devis pour un logiciel RH. Mon entreprise compte X employés."
                   className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                  <MessageCircle className="w-5 h-5" /> Devis WhatsApp Rapide
                </a>
                <Link href="/contact"
                   className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition-colors">
                  <Phone className="w-5 h-5" /> Appeler Maintenant
                </Link>
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {["logiciel rh", "sirh algérie", "gestion paie", "cnas", "casnos", "ressources humaines", "pointage", "congés", "irg"].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>

            {/* Articles liés */}
            <section className="mt-12 pt-8 border-t border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Solutions Entreprise Connexes</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Logiciel CRM Algérie", href: "/blog/logiciel-crm-algerie-2024", icon: Users },
                  { title: "Logiciel Comptabilité", href: "/blog/logiciel-comptabilite-algerie-2024", icon: DollarSign },
                  { title: "ERP sur Mesure", href: "/blog/logiciel-erp-algerie-2024", icon: Database },
                  { title: "ERP sur Mesure & SaaS pour PME/Startup", href: "/blog/erp-sur-mesure-saas-startup-pme-algerie-2026", icon: Settings },
                  { title: "Solutions Informatiques en Algerie", href: "/blog/solutions-informatiques-algerie-2026", icon: Globe }
                ].map((article, i) => (
                  <Link key={i} href={article.href} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                    <article.icon className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-medium text-sm">{article.title}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>

        {/* CTA Final */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à Moderniser Votre Gestion RH ?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Rejoignez les 500+ entreprises algériennes qui ont optimisé leur gestion RH avec Symloop.
              Démo gratuite, devis sous 24h, déploiement en 2-4 semaines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/213549575512?text=Bonjour, je souhaite une démo du logiciel RH" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                <MessageCircle className="w-5 h-5" /> Demander une Démo Gratuite
              </a>
              <a href="tel:+213549575512"
                 className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition-colors">
                <Phone className="w-5 h-5" /> +213 549 57 55 12
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
