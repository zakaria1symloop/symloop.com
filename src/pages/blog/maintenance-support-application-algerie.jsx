"use client";
import { ArrowLeft, Wrench, CheckCircle, MessageCircle, Shield, Clock, AlertTriangle, RefreshCw, AlertCircle, Phone, Gift, Globe, Users, Award, Zap, ChevronDown, ChevronUp, HeadphonesIcon, TrendingUp, Server, Activity, FileCode, Bug, Gauge, Bell, Database, Lock } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug } from '../../data/blogs';
import { useState } from 'react';

export default function MaintenanceSupportAlgerie() {
  const blog = getBlogBySlug('maintenance-support-application-algerie');
  const [openFaq, setOpenFaq] = useState(0);

  const faqItems = [
    {
      question: "Qu'est-ce que la TMA (Tierce Maintenance Applicative) ?",
      answer: "La TMA est un service externalisé de maintenance de vos applications. Au lieu d'avoir une équipe interne dédiée, vous confiez à un prestataire spécialisé (comme Symloop) la correction des bugs, les mises à jour de sécurité, le monitoring et les évolutions mineures de vos applications."
    },
    {
      question: "Combien coûte un contrat de maintenance ?",
      answer: "Nos forfaits de maintenance démarrent à partir de 25 000 DA/mois pour les petites applications. Pour une application complexe avec support prioritaire et SLA garanti, comptez 80 000-150 000 DA/mois. Contactez-nous pour un audit gratuit et un devis personnalisé selon votre application."
    },
    {
      question: "Quelle est votre garantie de temps de réponse ?",
      answer: "Selon votre forfait : incidents critiques (application hors service) traités en moins de 2h, incidents majeurs en moins de 4h, incidents mineurs en moins de 24h. Nous proposons aussi des options d'astreinte 24/7 et week-end pour les applications critiques."
    },
    {
      question: "Pouvez-vous reprendre une application développée par un autre prestataire ?",
      answer: "Oui, c'est notre spécialité. Nous réalisons d'abord un audit technique complet pour évaluer l'état du code, la dette technique, et les risques. Ensuite nous vous proposons un plan de reprise avec recommandations d'améliorations prioritaires."
    },
    {
      question: "Comment se passe le monitoring de mon application ?",
      answer: "Nous installons des outils de surveillance qui vérifient en permanence : disponibilité (uptime), performances (temps de réponse), erreurs, ressources serveur (CPU, RAM, disque). En cas d'anomalie, nous sommes alertés automatiquement et intervenons avant que le problème n'impacte vos utilisateurs."
    },
    {
      question: "Que comprend exactement le support technique ?",
      answer: "Selon votre forfait : correction de bugs, mises à jour de sécurité, sauvegardes vérifiées, monitoring 24/7, support utilisateurs (niveau 2-3), documentation technique, rapports mensuels. Les évolutions fonctionnelles majeures sont facturées séparément ou incluses dans un forfait d'heures."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Maintenance et Support Applications en Algérie - TMA",
    "description": "Services de maintenance applicative (TMA) en Algérie. Support technique 24/7, correction bugs, monitoring, mises à jour sécurité. SLA garanti.",
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
        <title>Maintenance Application Algérie - Support Technique TMA | Symloop</title>
        <meta name="description" content="Services de maintenance applicative en Algérie. Support 24/7, correction bugs, monitoring, mises à jour sécurité. Forfaits à partir de 25 000 DA/mois. Devis gratuit." />
        <meta name="keywords" content="maintenance application algérie, support technique algérie, tma algérie, monitoring application, correction bugs, maintenance logiciel, support 24/7, sla algérie, infogérance application" />
        <link rel="canonical" href="https://symloop.com/blog/maintenance-support-application-algerie" />
        <meta property="og:title" content="Maintenance Application Algérie - TMA & Support | Symloop" />
        <meta property="og:description" content="Support technique professionnel pour vos applications. Monitoring 24/7, SLA garanti, équipe locale." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/maintenance-support-application-algerie" />
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
                <span className="bg-red-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Wrench className="w-4 h-4" />Support & TMA
                </span>
                <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
                  24/7 Disponible
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-red-400">Maintenance</span> et Support Applications
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Services de TMA (Tierce Maintenance Applicative) en Algérie.
                Gardez vos applications performantes, sécurisées et disponibles 24/7.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/213549575512?text=Bonjour, j'ai besoin de maintenance pour mon application"
                   className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-600">
                  <MessageCircle className="w-5 h-5" /> Demander un Audit
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
              <span className="font-semibold">Offre : Audit technique GRATUIT + 1er mois de maintenance -50%</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Pour nouveaux contrats</span>
            </div>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                Votre application est <strong>le cœur de votre business</strong>. Un bug critique, une faille de sécurité
                ou une panne peuvent vous coûter des milliers de dinars en perte de chiffre d'affaires et en réputation.
                Notre service de <span className="text-red-600 font-semibold">maintenance applicative (TMA)</span>
                garantit la disponibilité, la performance et la sécurité de vos applications.
              </p>
              <p className="text-gray-600">
                Que votre application ait été développée par nous ou par un autre prestataire, nous assurons sa
                maintenance avec des <strong>engagements SLA stricts</strong>. Une équipe technique locale,
                francophone, disponible quand vous en avez besoin.
              </p>
            </div>

            {/* Key Stats */}
            <section className="mb-16">
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { value: "99.9%", label: "Disponibilité garantie", icon: Activity },
                  { value: "<2h", label: "Réponse critique", icon: Clock },
                  { value: "24/7", label: "Monitoring actif", icon: Bell },
                  { value: "100%", label: "Données sécurisées", icon: Shield }
                ].map((stat, i) => (
                  <div key={i} className="bg-red-50 rounded-xl p-5 text-center">
                    <stat.icon className="w-6 h-6 text-red-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-red-600">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Main Services */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Services de Maintenance Complets</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Bug,
                    title: "Correction de Bugs",
                    desc: "Résolution rapide des anomalies et dysfonctionnements",
                    features: ["Diagnostic et analyse", "Correction code source", "Tests de non-régression", "Déploiement sécurisé"]
                  },
                  {
                    icon: Shield,
                    title: "Mises à Jour Sécurité",
                    desc: "Protection continue contre les vulnérabilités",
                    features: ["Patches sécurité urgents", "Mise à jour dépendances", "Audit sécurité régulier", "Protection OWASP Top 10"]
                  },
                  {
                    icon: Activity,
                    title: "Monitoring 24/7",
                    desc: "Surveillance continue de vos applications",
                    features: ["Uptime monitoring", "Alertes automatiques", "Métriques performances", "Logs centralisés"]
                  },
                  {
                    icon: RefreshCw,
                    title: "Évolutions & Améliorations",
                    desc: "Faites évoluer votre application selon vos besoins",
                    features: ["Nouvelles fonctionnalités", "Optimisation performances", "Amélioration UX", "Intégrations nouvelles"]
                  },
                  {
                    icon: Database,
                    title: "Sauvegardes & Restauration",
                    desc: "Vos données toujours protégées et récupérables",
                    features: ["Backups quotidiens", "Tests restauration", "Rétention 30 jours+", "Plan de reprise (PRA)"]
                  },
                  {
                    icon: Server,
                    title: "Gestion Infrastructure",
                    desc: "Administration serveurs et hébergement",
                    features: ["Supervision serveurs", "Scaling automatique", "SSL/TLS & DNS", "CDN & cache"]
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

            {/* SLA Commitments */}
            <section className="mb-16 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Engagements SLA (Service Level Agreement)</h2>
              <p className="text-gray-600 mb-6">
                Nos engagements contractuels pour garantir la qualité de service :
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-red-200">
                      <th className="text-left py-3 text-gray-600">Niveau d'incident</th>
                      <th className="text-center py-3 text-gray-600">Temps réponse</th>
                      <th className="text-center py-3 text-gray-600">Temps résolution</th>
                      <th className="text-left py-3 text-gray-600">Exemple</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-red-100">
                      <td className="py-3 font-semibold text-red-600">Critique (P1)</td>
                      <td className="py-3 text-center font-bold">{"<"} 2h</td>
                      <td className="py-3 text-center">{"<"} 8h</td>
                      <td className="py-3 text-gray-600">Application hors service</td>
                    </tr>
                    <tr className="border-b border-red-100">
                      <td className="py-3 font-semibold text-orange-600">Majeur (P2)</td>
                      <td className="py-3 text-center font-bold">{"<"} 4h</td>
                      <td className="py-3 text-center">{"<"} 24h</td>
                      <td className="py-3 text-gray-600">Fonctionnalité majeure KO</td>
                    </tr>
                    <tr className="border-b border-red-100">
                      <td className="py-3 font-semibold text-yellow-600">Mineur (P3)</td>
                      <td className="py-3 text-center font-bold">{"<"} 24h</td>
                      <td className="py-3 text-center">{"<"} 72h</td>
                      <td className="py-3 text-gray-600">Bug non bloquant</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-gray-600">Évolution (P4)</td>
                      <td className="py-3 text-center font-bold">{"<"} 48h</td>
                      <td className="py-3 text-center">Planifié</td>
                      <td className="py-3 text-gray-600">Amélioration, question</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Forfaits Maintenance - Tarifs Algérie</h2>
              <p className="text-gray-600 mb-6">
                Des forfaits adaptés à la taille et criticité de votre application.
                Tous les forfaits incluent le monitoring de base et les mises à jour de sécurité.
              </p>

              {/* Pricing Warning */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif exact dépend de la complexité de votre application,
                  de l'ancienneté du code, et du niveau de service souhaité. <strong>Contactez-nous pour un audit
                  gratuit</strong> - nous évaluerons votre application et vous proposerons le forfait adapté.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Maintenance Essentielle",
                    price: "10 000",
                    period: "DA/mois",
                    desc: "Pour petites applications",
                    features: ["1 application", "Monitoring uptime", "Mises à jour sécurité", "2h support/mois", "Réponse < 24h", "Rapport mensuel"],
                    popular: false
                  },
                  {
                    name: "Maintenance Business",
                    price: "30 000",
                    period: "DA/mois",
                    desc: "Pour applications critiques",
                    features: ["1-3 applications", "Monitoring avancé", "Support prioritaire", "8h support/mois", "Réponse < 4h", "Sauvegardes quotidiennes"],
                    popular: true
                  },
                  {
                    name: "Maintenance Enterprise",
                    price: "Sur devis",
                    period: "",
                    desc: "Service complet dédié",
                    features: ["Applications illimitées", "Astreinte 24/7", "Équipe dédiée", "20h support/mois", "Réponse < 2h", "SLA garanti pénalités"],
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

              {/* Add-ons */}
              <div className="mt-8 bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Options Additionnelles</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { option: "Astreinte week-end & jours fériés", price: "+15 000 DA/mois" },
                    { option: "Heures support supplémentaires", price: "5 000 DA/heure" },
                    { option: "Audit sécurité trimestriel", price: "+20 000 DA/trimestre" },
                    { option: "Hébergement cloud géré", price: "Sur devis" }
                  ].map((addon, i) => (
                    <div key={i} className="flex justify-between p-3 bg-white rounded-lg">
                      <span className="text-gray-700">{addon.option}</span>
                      <span className="font-semibold text-red-600">{addon.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* What We Maintain */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Technologies que nous Maintenons</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "React, Next.js, Vue.js",
                  "Node.js, Express, NestJS",
                  "PHP, Laravel, Symfony",
                  "Python, Django, FastAPI",
                  "Applications mobiles React Native",
                  "WordPress, WooCommerce",
                  "Bases de données SQL & NoSQL",
                  "AWS, Google Cloud, Azure",
                  "Applications legacy & personnalisées"
                ].map((tech, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg text-gray-700 text-sm">
                    <FileCode className="w-4 h-4 text-red-500 flex-shrink-0" />
                    {tech}
                  </div>
                ))}
              </div>
            </section>

            {/* Onboarding Process */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Processus de Prise en Charge</h2>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Audit Initial Gratuit", desc: "Analyse de votre application : code, architecture, sécurité, dette technique", duration: "1-3 jours" },
                  { step: "02", title: "Proposition & Contrat", desc: "Recommandations, forfait adapté, SLA et conditions détaillées", duration: "24-48h" },
                  { step: "03", title: "Transfert & Documentation", desc: "Récupération accès, documentation de l'existant, mise en place monitoring", duration: "1 semaine" },
                  { step: "04", title: "Stabilisation", desc: "Correction des problèmes urgents, mise à jour sécurité, optimisation", duration: "2-4 semaines" },
                  { step: "05", title: "Maintenance Continue", desc: "Support régulier, évolutions, rapports mensuels, améliorations continues", duration: "Continu" }
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

            {/* Why Choose Us */}
            <section className="mb-16 bg-gradient-to-br from-gray-50 to-red-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi Choisir Symloop pour la Maintenance ?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Users, text: "Équipe technique locale à Alger, francophone" },
                  { icon: Clock, text: "Temps de réponse rapide, même fuseau horaire" },
                  { icon: Award, text: "10+ ans d'expérience en maintenance applicative" },
                  { icon: Shield, text: "Processus de sécurité rigoureux" },
                  { icon: Gauge, text: "Outils de monitoring professionnels" },
                  { icon: Lock, text: "Confidentialité et NDA systématique" },
                  { icon: TrendingUp, text: "Force de proposition sur les améliorations" },
                  { icon: HeadphonesIcon, text: "Interlocuteur unique et dédié" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-center p-4 bg-white rounded-xl">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
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
                  { title: "Développement Web Algérie", href: "/blog/developpement-web-algerie-2024", desc: "Création de nouvelles applications" },
                  { title: "Hébergement Cloud Algérie", href: "/blog/hebergement-cloud-algerie", desc: "Solutions d'hébergement sécurisées" }
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
            <h2 className="text-3xl font-bold mb-4">Votre Application Mérite un Support Pro</h2>
            <p className="text-red-100 mb-8 max-w-2xl mx-auto">
              Ne laissez pas les bugs et les pannes impacter votre business.
              Audit gratuit et proposition de maintenance sous 48h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/213549575512?text=Bonjour, j'ai besoin de maintenance pour mon application" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-50">
                <MessageCircle className="w-5 h-5" /> Demander un Audit Gratuit
              </a>
              <a href="tel:+213549575512"
                 className="inline-flex items-center justify-center gap-2 bg-red-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-800">
                <Phone className="w-5 h-5" /> +213 549 57 55 12
              </a>
            </div>
            <p className="text-red-200 text-sm mt-6">
              <HeadphonesIcon className="w-4 h-4 inline mr-1" />
              Support disponible du Dimanche au Jeudi, 9h-18h (astreinte 24/7 disponible)
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
