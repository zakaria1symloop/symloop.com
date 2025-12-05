"use client";
import { ArrowLeft, Target, CheckCircle, MessageCircle, Lightbulb, Users, Clock, FileText, AlertTriangle, TrendingUp, Award, Phone, Rocket, BarChart3, Shield, Zap, Calendar, DollarSign, Star, ArrowRight, BookOpen, Briefcase, Settings } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug } from '../../data/blogs';

export default function ReussirProjetDigital() {
  const blog = getBlogBySlug('reussir-projet-digital-algerie');

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Comment Réussir Votre Projet Digital en Algérie - Guide Complet 2024",
    "description": "Guide complet pour réussir votre projet web ou mobile en Algérie. Méthodologie, bonnes pratiques, erreurs à éviter et conseils d'experts.",
    "author": { "@type": "Organization", "name": "Symloop" },
    "publisher": { "@type": "Organization", "name": "Symloop", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
    "datePublished": "2024-01-15",
    "dateModified": "2024-12-01",
    "mainEntityOfPage": "https://symloop.com/blog/reussir-projet-digital-algerie"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Combien de temps faut-il pour réaliser un projet digital en Algérie ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Un site vitrine prend 2-4 semaines, une application mobile 2-4 mois, et une plateforme complexe 4-8 mois selon la complexité et les fonctionnalités requises." }
      },
      {
        "@type": "Question",
        "name": "Quel budget prévoir pour un projet web en Algérie ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Les budgets varient : site vitrine 150K-400K DA, e-commerce 400K-1.5M DA, application mobile 800K-4M DA, plateforme sur mesure 2M-10M+ DA." }
      },
      {
        "@type": "Question",
        "name": "Comment choisir entre développement local et offshore ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Le développement local offre communication facilitée, compréhension du marché algérien et support réactif. L'offshore peut être moins cher mais implique des défis de communication et de fuseau horaire." }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Comment Réussir Votre Projet Digital en Algérie - Guide Complet 2024 | Symloop</title>
        <meta name="description" content="Guide complet pour réussir votre projet web ou mobile en Algérie. Méthodologie agile, bonnes pratiques, erreurs à éviter. Conseils d'experts Symloop." />
        <meta name="keywords" content="réussir projet digital algérie, gestion projet web algérie, méthodologie agile algérie, bonnes pratiques développement, cahier des charges projet web, réussir transformation digitale, projet digital PME algérie, accompagnement projet IT, développement web algérie, application mobile algérie" />
        <link rel="canonical" href="https://symloop.com/blog/reussir-projet-digital-algerie" />
        <meta property="og:title" content="Comment Réussir Votre Projet Digital en Algérie - Guide Complet 2024" />
        <meta property="og:description" content="Guide complet pour réussir votre projet web ou mobile en Algérie. Méthodologie, bonnes pratiques et conseils d'experts." />
        <meta property="og:url" content="https://symloop.com/blog/reussir-projet-digital-algerie" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Head>

      <div className="min-h-screen bg-white">
        <section className="bg-black text-white py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8">
                <ArrowLeft className="w-4 h-4" /> Retour au blog
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-emerald-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Target className="w-4 h-4" />Guide Complet
                </span>
                <span className="text-gray-400 text-sm flex items-center gap-1">
                  <Clock className="w-4 h-4" /> 15 min de lecture
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Comment <span className="text-emerald-400">Réussir</span> Votre Projet Digital en Algérie
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Guide complet pour mener à bien votre projet web ou mobile : méthodologie éprouvée,
                bonnes pratiques et erreurs à éviter pour garantir le succès de votre transformation digitale.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 px-4 py-2 rounded-lg">
                  <span className="text-emerald-400 font-bold">70%</span>
                  <span className="text-gray-300 text-sm ml-2">Taux d'échec des projets IT</span>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-lg">
                  <span className="text-emerald-400 font-bold">6 étapes</span>
                  <span className="text-gray-300 text-sm ml-2">Méthodologie Symloop</span>
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
                En Algérie, comme partout dans le monde, <span className="text-emerald-600 font-semibold">70% des projets digitaux
                échouent</span> ou dépassent largement leur budget initial. Cahier des charges flou, mauvaise communication,
                choix technologiques inadaptés... Les raisons sont nombreuses. Ce guide vous donne les clés pour faire
                partie des <span className="text-emerald-600 font-semibold">30% qui réussissent</span>.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Que vous soyez une <strong>startup</strong> lançant son premier produit, une <strong>PME</strong> cherchant à
                se digitaliser, ou une <strong>grande entreprise</strong> modernisant ses systèmes, ce guide vous accompagne
                étape par étape pour transformer votre vision en réalité.
              </p>
            </div>

            {/* Statistiques clés */}
            <section className="mb-16 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Pourquoi les Projets Échouent en Algérie</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { stat: "37%", label: "Cahier des charges flou", icon: FileText },
                  { stat: "29%", label: "Mauvaise communication", icon: Users },
                  { stat: "21%", label: "Budget sous-estimé", icon: DollarSign },
                  { stat: "13%", label: "Choix tech inadapté", icon: Settings }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 text-center shadow-sm">
                    <item.icon className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-emerald-600">{item.stat}</div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Les 4 Piliers du Succès */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Les 4 Piliers d'un Projet Digital Réussi</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Lightbulb,
                    title: "Vision Claire",
                    desc: "Définissez précisément vos objectifs business, le problème à résoudre et les KPIs de succès",
                    details: ["Objectifs SMART définis", "Persona utilisateur créé", "ROI attendu calculé", "Périmètre délimité"]
                  },
                  {
                    icon: Users,
                    title: "Communication",
                    desc: "Échanges réguliers et transparents avec votre équipe de développement",
                    details: ["Points hebdomadaires", "Outils collaboratifs", "Feedback continu", "Documentation partagée"]
                  },
                  {
                    icon: Clock,
                    title: "Planification Réaliste",
                    desc: "Jalons réalistes, priorités claires et flexibilité face aux imprévus",
                    details: ["Planning avec marges", "Priorisation MoSCoW", "Sprints itératifs", "Dates butoirs claires"]
                  },
                  {
                    icon: FileText,
                    title: "Documentation",
                    desc: "Spécifications écrites, validations formelles et traçabilité des décisions",
                    details: ["Cahier des charges", "Maquettes validées", "PV de réception", "Contrat clair"]
                  }
                ].map((pillar, i) => (
                  <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-emerald-200 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                      <pillar.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{pillar.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{pillar.desc}</p>
                    <ul className="space-y-1">
                      {pillar.details.map((detail, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Méthodologie en 6 étapes */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Méthodologie Symloop : 6 Étapes vers le Succès</h2>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Cadrage & Discovery",
                    desc: "Définir les objectifs, budget, délais et périmètre du projet",
                    duration: "1-2 semaines",
                    deliverables: "Brief projet, analyse concurrentielle, estimation budgétaire",
                    tips: "Impliquez toutes les parties prenantes dès cette phase"
                  },
                  {
                    step: "2",
                    title: "Conception UX/UI",
                    desc: "Maquettes, architecture technique, validation du design",
                    duration: "2-4 semaines",
                    deliverables: "Wireframes, maquettes Figma, prototype clickable",
                    tips: "Testez vos maquettes avec de vrais utilisateurs"
                  },
                  {
                    step: "3",
                    title: "Développement Agile",
                    desc: "Sprints itératifs avec démos régulières et feedback",
                    duration: "Variable selon projet",
                    deliverables: "Code source, démos bi-hebdomadaires, tests unitaires",
                    tips: "Priorisez les fonctionnalités par valeur business"
                  },
                  {
                    step: "4",
                    title: "Tests & QA",
                    desc: "Tests fonctionnels, corrections, validation utilisateur",
                    duration: "1-2 semaines",
                    deliverables: "Rapport de tests, corrections bugs, PV de recette",
                    tips: "Faites tester par des utilisateurs non impliqués dans le projet"
                  },
                  {
                    step: "5",
                    title: "Mise en Production",
                    desc: "Déploiement, formation, documentation utilisateur",
                    duration: "1 semaine",
                    deliverables: "Environnement live, documentation, sessions de formation",
                    tips: "Préparez un plan de rollback en cas de problème"
                  },
                  {
                    step: "6",
                    title: "Suivi & Évolution",
                    desc: "Maintenance, évolutions, support technique continu",
                    duration: "Continu",
                    deliverables: "Rapports de maintenance, mises à jour, support",
                    tips: "Analysez les métriques d'usage pour prioriser les évolutions"
                  }
                ].map((phase, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">
                        {phase.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="font-bold text-gray-900 text-lg">{phase.title}</h3>
                          <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs">{phase.duration}</span>
                        </div>
                        <p className="text-gray-600 mb-3">{phase.desc}</p>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">Livrables : </span>
                            <span className="text-gray-500">{phase.deliverables}</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Conseil : </span>
                            <span className="text-gray-500">{phase.tips}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Bonnes Pratiques */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">12 Bonnes Pratiques Essentielles</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Commencez par un MVP avant de tout développer",
                  "Priorisez les fonctionnalités par valeur business",
                  "Testez avec de vrais utilisateurs régulièrement",
                  "Documentez les décisions importantes",
                  "Prévoyez une marge budgétaire de 20-30%",
                  "Validez chaque étape avant de passer à la suivante",
                  "Gardez une communication ouverte avec l'équipe",
                  "Mesurez le succès avec des KPIs clairs",
                  "Choisissez des technologies éprouvées",
                  "Signez un contrat détaillé avec votre prestataire",
                  "Définissez clairement les responsabilités",
                  "Planifiez la maintenance dès le départ"
                ].map((practice, i) => (
                  <div key={i} className="flex gap-3 items-center p-3 bg-emerald-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700">{practice}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Erreurs à éviter */}
            <section className="mb-16 bg-red-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                10 Erreurs Fatales à Éviter
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { error: "Cahier des charges flou ou inexistant", impact: "Dépassement budget 50%+" },
                  { error: "Budget sous-estimé dès le départ", impact: "Projet abandonné" },
                  { error: "Trop de fonctionnalités au démarrage", impact: "Retard de plusieurs mois" },
                  { error: "Communication insuffisante", impact: "Résultat non conforme" },
                  { error: "Pas de tests utilisateurs", impact: "Produit inutilisable" },
                  { error: "Changements constants de périmètre", impact: "Projet qui n'en finit pas" },
                  { error: "Négliger la maintenance", impact: "Bugs et failles sécurité" },
                  { error: "Ignorer les retours utilisateurs", impact: "Adoption faible" },
                  { error: "Choisir le moins cher", impact: "Qualité médiocre" },
                  { error: "Pas de contrat écrit", impact: "Litiges et conflits" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start p-3 bg-white rounded-lg">
                    <span className="text-red-500 font-bold text-lg">✕</span>
                    <div>
                      <span className="text-gray-700 font-medium">{item.error}</span>
                      <span className="block text-red-600 text-sm">Impact : {item.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Budget indicatif */}
            <section className="mb-16 bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Budgets Indicatifs en Algérie 2024</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4">Type de Projet</th>
                      <th className="text-center py-3 px-4">Budget</th>
                      <th className="text-center py-3 px-4">Délai</th>
                      <th className="text-center py-3 px-4">Complexité</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Site vitrine", budget: "150K - 400K DA", delai: "2-4 semaines", complexite: "Faible" },
                      { type: "Site e-commerce", budget: "400K - 1.5M DA", delai: "1-3 mois", complexite: "Moyenne" },
                      { type: "Application mobile simple", budget: "800K - 2M DA", delai: "2-4 mois", complexite: "Moyenne" },
                      { type: "Application mobile complexe", budget: "2M - 5M DA", delai: "4-8 mois", complexite: "Haute" },
                      { type: "Plateforme SaaS", budget: "3M - 10M DA", delai: "6-12 mois", complexite: "Très haute" },
                      { type: "ERP/CRM sur mesure", budget: "5M - 20M DA", delai: "8-18 mois", complexite: "Très haute" }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-emerald-50">
                        <td className="py-3 px-4 font-medium">{row.type}</td>
                        <td className="text-center py-3 px-4 text-emerald-600 font-medium">{row.budget}</td>
                        <td className="text-center py-3 px-4">{row.delai}</td>
                        <td className="text-center py-3 px-4">
                          <span className={`px-2 py-1 rounded text-xs ${
                            row.complexite === "Faible" ? "bg-green-100 text-green-700" :
                            row.complexite === "Moyenne" ? "bg-yellow-100 text-yellow-700" :
                            "bg-red-100 text-red-700"
                          }`}>
                            {row.complexite}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-4">*Prix indicatifs basés sur le marché algérien en 2024. Peuvent varier selon la complexité et les fonctionnalités.</p>
            </section>

            {/* Checklist pré-lancement */}
            <section className="mb-16 bg-emerald-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Checklist Complète Pré-Lancement</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold text-emerald-800 mb-3">Technique</h3>
                  {[
                    "Tests fonctionnels validés",
                    "Tests de performance OK",
                    "Sécurité vérifiée",
                    "Responsive testé",
                    "Backups configurés"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 text-sm">
                      <div className="w-4 h-4 border-2 border-emerald-400 rounded"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="font-semibold text-emerald-800 mb-3">Marketing</h3>
                  {[
                    "SEO configuré",
                    "Analytics installé",
                    "Réseaux sociaux prêts",
                    "Plan de lancement",
                    "Contenus prêts"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 text-sm">
                      <div className="w-4 h-4 border-2 border-emerald-400 rounded"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="font-semibold text-emerald-800 mb-3">Opérationnel</h3>
                  {[
                    "Documentation à jour",
                    "Équipe formée",
                    "Support en place",
                    "Process définis",
                    "Monitoring actif"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 text-sm">
                      <div className="w-4 h-4 border-2 border-emerald-400 rounded"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions Fréquentes</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Combien de temps faut-il pour réaliser un projet digital en Algérie ?",
                    a: "Cela dépend de la complexité : un site vitrine prend 2-4 semaines, une application mobile 2-4 mois, et une plateforme complexe 4-8 mois. Prévoyez toujours une marge de 20% pour les imprévus."
                  },
                  {
                    q: "Quel budget prévoir pour un projet web en Algérie ?",
                    a: "Les budgets varient considérablement : site vitrine 150K-400K DA, e-commerce 400K-1.5M DA, application mobile 800K-4M DA, plateforme sur mesure 2M-10M+ DA. Méfiez-vous des prix trop bas."
                  },
                  {
                    q: "Comment choisir entre développement local et offshore ?",
                    a: "Le développement local en Algérie offre communication facilitée, compréhension du marché local et support réactif. L'offshore peut être moins cher mais implique des défis de communication, de fuseau horaire et de suivi."
                  },
                  {
                    q: "Faut-il signer un contrat avec son développeur ?",
                    a: "Absolument ! Un contrat détaillé protège les deux parties. Il doit inclure : périmètre, délais, prix, conditions de paiement, garantie, propriété intellectuelle et conditions de résiliation."
                  },
                  {
                    q: "Comment s'assurer que le projet respecte les délais ?",
                    a: "Utilisez une méthodologie agile avec des sprints courts, des démos régulières et une communication constante. Définissez des jalons clairs et n'hésitez pas à ajuster le périmètre si nécessaire."
                  },
                  {
                    q: "Que faire si le prestataire disparaît en cours de projet ?",
                    a: "Prévenez ce risque : exigez des livraisons régulières du code source, utilisez un dépôt Git partagé, documentez tout et gardez les accès aux serveurs. Incluez une clause de réversibilité dans le contrat."
                  }
                ].map((faq, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-6">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-2">
                      <span className="text-emerald-500">Q:</span> {faq.q}
                    </h3>
                    <p className="text-gray-600 pl-6">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {["projet digital", "méthodologie agile", "gestion projet", "développement web", "application mobile", "algérie", "bonnes pratiques", "transformation digitale", "PME"].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>

            {/* Articles liés */}
            <section className="mt-12 pt-8 border-t border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Articles Connexes</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Comment Choisir un Développeur", href: "/blog/comment-choisir-developpeur-algerie", icon: Users },
                  { title: "Freelance vs Agence", href: "/blog/freelance-vs-agence-algerie", icon: Briefcase },
                  { title: "Coût Développement App", href: "/blog/cout-developpement-application-algerie", icon: DollarSign }
                ].map((article, i) => (
                  <Link key={i} href={article.href} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors">
                    <article.icon className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700 font-medium text-sm">{article.title}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à Lancer Votre Projet Digital ?</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Symloop vous accompagne de A à Z avec une méthodologie éprouvée pour garantir le succès
              de votre transformation digitale en Algérie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/213549575512?text=Bonjour, j'ai un projet digital à lancer" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors">
                <MessageCircle className="w-5 h-5" /> Discuter du Projet
              </a>
              <Link href="/contact"
                 className="inline-flex items-center justify-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-800 transition-colors">
                <Phone className="w-5 h-5" /> Demander un Devis
              </Link>
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
