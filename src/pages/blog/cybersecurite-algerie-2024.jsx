"use client";
import { ArrowLeft, Shield, CheckCircle, MessageCircle, AlertTriangle, Lock, Eye, Server, AlertCircle, Phone, Gift, Clock, Users, Award, ChevronDown, ChevronUp, HeadphonesIcon, TrendingUp, Bug, FileWarning, Database, Wifi, Key, Search, Activity } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug } from '../../data/blogs';
import { useState } from 'react';

export default function CybersecuriteAlgerie() {
  const blog = getBlogBySlug('cybersecurite-algerie-2024');
  const [openFaq, setOpenFaq] = useState(0);

  const faqItems = [
    {
      question: "Quels sont les risques de cybersécurité pour les entreprises algériennes ?",
      answer: "Les entreprises algériennes font face à des risques majeurs : ransomware (35% des attaques), phishing (28%), malware (20%) et DDoS (17%). Les attaques ont augmenté de +300% en 2024. Le coût moyen d'une violation de données dépasse 50 millions de DA. 60% des entreprises n'ont pas de pare-feu avancé, ce qui en fait des cibles faciles pour les cybercriminels."
    },
    {
      question: "Comment protéger mon entreprise contre les cyberattaques en Algérie ?",
      answer: "Pour protéger votre entreprise : 1) Réalisez un audit de sécurité pour identifier les failles, 2) Installez un pare-feu nouvelle génération et un antivirus endpoint, 3) Activez l'authentification 2FA, 4) Mettez en place des sauvegardes quotidiennes chiffrées, 5) Formez vos employés au phishing, 6) Activez un monitoring continu (SOC). Symloop propose tous ces services avec un accompagnement personnalisé."
    },
    {
      question: "Combien coûte un audit de cybersécurité en Algérie ?",
      answer: "Un audit de sécurité basique (scan de vulnérabilités, rapport) coûte à partir de 25 000 DA. Un audit complet avec test d'intrusion (pentest) coûte entre 300 000 et 800 000 DA selon la taille de l'infrastructure. Symloop propose un audit de vulnérabilités gratuit pour évaluer vos risques sans engagement. Contactez-nous pour un devis personnalisé."
    },
    {
      question: "Symloop propose-t-il des services de cybersécurité ?",
      answer: "Oui, Symloop propose une gamme complète de services de cybersécurité : audit de sécurité, test d'intrusion (pentest), pare-feu et protection réseau, SOC et monitoring 24/7, backup et recovery, formation et sensibilisation des employés. Nous accompagnons les PME et grandes entreprises algériennes avec des solutions adaptées. Basé à Sétif, nous intervenons sur tout le territoire national. Contact : +213 549 575 512."
    },
    {
      question: "La cybersécurité est-elle obligatoire pour les entreprises en Algérie ?",
      answer: "Bien que la réglementation algérienne évolue, la protection des données et la cybersécurité deviennent de plus en plus encadrées. Les entreprises manipulant des données personnelles ou financières ont l'obligation de les protéger. Un audit de sécurité annuel est fortement recommandé. Ne pas investir dans la cybersécurité expose votre entreprise à des pertes financières (50M+ DA en moyenne), des sanctions réglementaires et une atteinte à la réputation."
    },
    {
      question: "Pourquoi les entreprises algériennes sont-elles ciblées ?",
      answer: "Les entreprises algériennes sont ciblées car elles manquent souvent de protection adéquate (60% n'ont pas de pare-feu avancé). Les hackers cherchent les cibles faciles. De plus, la croissance du digital en Algérie attire les cybercriminels qui voient un marché vulnérable."
    },
    {
      question: "Qu'est-ce qu'un pentest et pourquoi en ai-je besoin ?",
      answer: "Un pentest (test d'intrusion) simule une attaque réelle sur votre infrastructure pour identifier les failles de sécurité AVANT qu'un hacker ne les exploite. C'est comme engager un cambrioleur professionnel pour tester vos serrures. Recommandé au moins une fois par an."
    },
    {
      question: "Combien de temps pour sécuriser mon entreprise ?",
      answer: "Une sécurisation de base (pare-feu, antivirus, backups) peut être mise en place en 1-2 semaines. Une sécurité complète (SOC, monitoring 24/7, formation employés) prend 1-2 mois. Nous procédons par priorité : d'abord les risques critiques, puis les améliorations continues."
    },
    {
      question: "Proposez-vous une surveillance 24/7 ?",
      answer: "Oui, notre service SOC (Security Operations Center) surveille votre infrastructure 24h/24, 7j/7. En cas d'incident, nous intervenons immédiatement. C'est essentiel car 60% des attaques se produisent en dehors des heures de bureau."
    },
    {
      question: "Comment former mes employés à la cybersécurité ?",
      answer: "Nous proposons des formations interactives adaptées au niveau technique de vos équipes : sensibilisation phishing, bonnes pratiques mots de passe, détection des menaces. Sessions de 2-4h, en présentiel ou en ligne. 90% des attaques réussies exploitent l'erreur humaine."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cybersécurité en Algérie 2024 - Protection & Audit",
    "description": "Services de cybersécurité pour entreprises algériennes. Audit sécurité, pentest, SOC 24/7, pare-feu, formation. Protégez votre entreprise.",
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
        "name": "Cybersécurité Algérie 2024",
        "item": "https://symloop.com/blog/cybersecurite-algerie-2024"
      }
    ]
  };

  const speakableData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cybersécurité Algérie 2024 - Audit & Protection | Symloop",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".prose", "h1", "h2"]
    },
    "url": "https://symloop.com/blog/cybersecurite-algerie-2024"
  };

  return (
    <>
      <Head>
        <title>Cybersécurité Algérie 2024 - Audit & Protection | Symloop</title>
        <meta name="description" content="Services de cybersécurité pour entreprises algériennes. Audit sécurité, pentest, SOC 24/7, pare-feu, anti-ransomware. Audit gratuit. Devis personnalisé." />
        <meta name="keywords" content="cybersécurité algérie, sécurité informatique algérie, audit sécurité, pentest algérie, protection données, antivirus entreprise, pare-feu, ransomware protection, soc algérie" />
        <link rel="canonical" href="https://symloop.com/blog/cybersecurite-algerie-2024" />
        <meta property="og:title" content="Cybersécurité Algérie 2024 - Audit & Protection | Symloop" />
        <meta property="og:description" content="Services cybersécurité pour entreprises algériennes. Audit, pentest, SOC 24/7. Audit gratuit." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/cybersecurite-algerie-2024" />
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
                <span className="bg-red-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Shield className="w-4 h-4" />Sécurité
                </span>
                <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
                  Critique 2024
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-red-400">Cybersécurité</span> en Algérie 2024
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Protégez votre entreprise contre les cybermenaces. +300% d'attaques en Algérie
                cette année. Ne soyez pas la prochaine victime.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/213549575512?text=Bonjour, je souhaite un audit de sécurité"
                   className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-600">
                  <MessageCircle className="w-5 h-5" /> Audit Gratuit
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
        <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-4">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Gift className="w-5 h-5" />
              <span className="font-semibold">Offre : Audit de vulnérabilités GRATUIT + Rapport détaillé</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Valeur 100 000 DA</span>
            </div>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                La <strong>cybersécurité en Algérie</strong> est devenue critique. Les attaques ont augmenté de
                <span className="text-red-600 font-semibold"> +300% en 2024</span>, et le coût moyen d'une violation
                de données dépasse <span className="text-red-600 font-semibold">50 millions de DA</span>. PME, banques,
                institutions publiques - personne n'est à l'abri.
              </p>
              <p className="text-gray-600">
                Nos experts en sécurité vous protègent : audit de vulnérabilités, tests d'intrusion, mise en place
                de pare-feu nouvelle génération, monitoring 24/7, et formation de vos équipes. Une approche complète
                pour <strong>sécuriser votre entreprise</strong> contre toutes les menaces.
              </p>
            </div>

            {/* En bref - LLM Discovery Block */}
            <section className="mb-12 bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3">En bref</h2>
              <p className="text-gray-700 leading-relaxed">
                Symloop propose des services de cybersécurité pour les entreprises algériennes.
                Audit de sécurité, protection des données, SSL, pare-feu, monitoring 24/7,
                conformité réglementaire. Protection contre ransomware, phishing et fuites de données.
                Basé à Sétif. Contact&nbsp;: +213 549 575 512.
              </p>
            </section>

            {/* Threat Stats */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Menaces en Algérie 2024</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { threat: "Ransomware", percent: "35%", icon: FileWarning },
                    { threat: "Phishing", percent: "28%", icon: Bug },
                    { threat: "Malware", percent: "20%", icon: AlertTriangle },
                    { threat: "DDoS", percent: "17%", icon: Wifi }
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <item.icon className="w-8 h-8 text-red-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-red-600">{item.percent}</div>
                      <div className="text-sm text-gray-600">{item.threat}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Main Services */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Nos Services de Cybersécurité</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Search,
                    title: "Audit de Sécurité",
                    desc: "Évaluation complète de votre posture sécurité",
                    features: ["Scan de vulnérabilités", "Analyse des risques", "Rapport détaillé", "Plan d'action prioritaire"]
                  },
                  {
                    icon: Bug,
                    title: "Test d'Intrusion (Pentest)",
                    desc: "Simulation d'attaques réelles sur votre infrastructure",
                    features: ["Pentest externe/interne", "Test applications web", "Social engineering", "Rapport et corrections"]
                  },
                  {
                    icon: Shield,
                    title: "Pare-feu & Protection",
                    desc: "Sécurisation de votre périmètre réseau",
                    features: ["Pare-feu nouvelle génération", "Anti-malware endpoint", "DDoS protection", "VPN sécurisé"]
                  },
                  {
                    icon: Activity,
                    title: "SOC & Monitoring 24/7",
                    desc: "Surveillance continue de votre infrastructure",
                    features: ["SIEM & log analysis", "Détection d'intrusion", "Réponse aux incidents", "Alertes temps réel"]
                  },
                  {
                    icon: Database,
                    title: "Backup & Recovery",
                    desc: "Protection contre la perte de données",
                    features: ["Sauvegardes chiffrées", "Réplication off-site", "Test de restauration", "Plan de reprise (PRA)"]
                  },
                  {
                    icon: Users,
                    title: "Formation & Sensibilisation",
                    desc: "Vos employés, première ligne de défense",
                    features: ["Formation phishing", "Bonnes pratiques", "Simulations d'attaques", "Certification interne"]
                  }
                ].map((service, i) => (
                  <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-red-200 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                    <ul className="space-y-1">
                      {service.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-red-500" />
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tarifs Cybersécurité</h2>
              <p className="text-gray-600 mb-6">
                Des solutions adaptées à toutes les tailles d'entreprise. De l'audit ponctuel
                à la protection complète 24/7.
              </p>

              {/* Pricing Warning */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif exact dépend de la taille de votre infrastructure,
                  du nombre de postes, et du niveau de protection souhaité. <strong>Contactez-nous pour un
                  audit gratuit et une estimation personnalisée</strong> - nous évaluons vos risques sans engagement.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Audit Sécurité",
                    price: "25 000",
                    period: "ponctuel",
                    desc: "Évaluation de base",
                    features: ["Scan de vulnérabilités", "Rapport de risques", "Recommandations", "1 session de restitution"],
                    popular: false
                  },
                  {
                    name: "Protection PME",
                    price: "15 000",
                    period: "DA/mois",
                    desc: "Sécurité complète",
                    features: ["Pare-feu géré", "Antivirus endpoint", "Backup quotidien", "Support prioritaire", "Monitoring 8h-18h"],
                    popular: true
                  },
                  {
                    name: "SOC Enterprise",
                    price: "Sur devis",
                    period: "",
                    desc: "Protection maximale",
                    features: ["Tout PME +", "Monitoring 24/7", "SIEM & alertes", "Réponse incidents", "Pentest annuel inclus"],
                    popular: false
                  }
                ].map((plan, i) => (
                  <div key={i} className={`relative rounded-2xl p-6 ${plan.popular ? 'bg-red-600 text-white ring-4 ring-red-600 ring-offset-2' : 'bg-gray-50'}`}>
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Plus populaire
                      </span>
                    )}
                    <h3 className={`text-xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                    <p className={`text-sm mb-4 ${plan.popular ? 'text-red-100' : 'text-gray-600'}`}>{plan.desc}</p>
                    <div className="mb-6">
                      <span className={`text-sm ${plan.popular ? 'text-red-200' : 'text-gray-500'}`}>À partir de</span>
                      <div>
                        <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-red-600'}`}>{plan.price}</span>
                        <span className={`text-sm ${plan.popular ? 'text-red-100' : 'text-gray-500'}`}> {plan.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle className={`w-4 h-4 ${plan.popular ? 'text-red-200' : 'text-red-500'}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={`https://wa.me/213549575512?text=Bonjour, je suis intéressé par ${plan.name}`}
                       className={`block text-center py-3 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-white text-red-600 hover:bg-red-50' : 'bg-red-600 text-white hover:bg-red-700'}`}>
                      Demander un Devis
                    </a>
                  </div>
                ))}
              </div>

              {/* Additional Services */}
              <div className="mt-8 bg-red-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Services à la Carte</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { service: "Pentest complet", price: "300 000 - 800 000 DA" },
                    { service: "Formation équipe (demi-journée)", price: "50 000 DA" },
                    { service: "Réponse incident urgent", price: "20 000 DA/h" },
                    { service: "Analyse forensique", price: "Sur devis" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between p-3 bg-white rounded-lg">
                      <span className="text-gray-700">{item.service}</span>
                      <span className="font-semibold text-red-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Security Checklist */}
            <section className="mb-16 bg-gradient-to-br from-gray-50 to-red-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Checklist Sécurité Entreprise</h2>
              <p className="text-gray-600 mb-6">
                Les mesures minimales que toute entreprise algérienne devrait avoir en place :
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Pare-feu nouvelle génération configuré",
                  "Antivirus sur tous les postes",
                  "Sauvegardes quotidiennes testées",
                  "Authentification 2FA activée",
                  "Mises à jour automatiques",
                  "Politique de mots de passe forts",
                  "Formation employés au phishing",
                  "Plan de réponse aux incidents",
                  "Chiffrement des données sensibles",
                  "Audit de sécurité annuel"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-center p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Process */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Notre Approche</h2>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Audit Initial", desc: "Évaluation complète de votre posture sécurité actuelle", duration: "1-2 jours" },
                  { step: "02", title: "Analyse des Risques", desc: "Identification et priorisation des vulnérabilités", duration: "2-3 jours" },
                  { step: "03", title: "Plan de Remédiation", desc: "Recommandations concrètes avec budget et planning", duration: "1 jour" },
                  { step: "04", title: "Mise en Œuvre", desc: "Déploiement des solutions de sécurité", duration: "1-4 semaines" },
                  { step: "05", title: "Monitoring Continu", desc: "Surveillance et amélioration continue", duration: "Continu" }
                ].map((phase, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                      {phase.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-gray-900">{phase.title}</h3>
                        <span className="text-sm text-red-600 font-medium">{phase.duration}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{phase.desc}</p>
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
                  { title: "Cloud Computing Algérie", href: "/blog/cloud-computing-algerie-2024", desc: "Hébergement sécurisé" },
                  { title: "Maintenance Applications", href: "/blog/maintenance-support-application-algerie", desc: "Support et monitoring" },
                  { title: "DevOps & Développement Logiciel en Algérie", href: "/blog/devops-developpement-logiciel-algerie-2026", desc: "CI/CD, automatisation et déploiement sécurisé" },
                  { title: "Solutions Informatiques en Algérie", href: "/blog/solutions-informatiques-algerie-2026", desc: "Digitalisation et transformation numérique" }
                ].map((article, i) => (
                  <Link key={i} href={article.href} className="group p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-600 mb-1">{article.title}</h3>
                    <p className="text-sm text-gray-600">{article.desc}</p>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Protégez Votre Entreprise</h2>
            <p className="text-red-100 mb-8 max-w-2xl mx-auto">
              Ne soyez pas la prochaine victime. Audit de sécurité gratuit et rapport
              de vulnérabilités sous 48h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/213549575512?text=Bonjour, je souhaite un audit de sécurité pour mon entreprise" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-50">
                <MessageCircle className="w-5 h-5" /> Audit Gratuit
              </a>
              <a href="tel:+213549575512"
                 className="inline-flex items-center justify-center gap-2 bg-red-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-800">
                <Phone className="w-5 h-5" /> +213 549 57 55 12
              </a>
            </div>
            <p className="text-red-200 text-sm mt-6">
              <HeadphonesIcon className="w-4 h-4 inline mr-1" />
              Experts certifiés en sécurité - Réponse urgente disponible
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
