"use client";
import { useState } from 'react';
import { Calendar, User, ArrowLeft, Zap, CheckCircle, Rocket, MessageCircle, DollarSign, Users, Building, Award, ChevronDown, ChevronUp, Target, Lightbulb, TrendingUp, Shield, Globe, Phone, AlertCircle, FileText, Briefcase, Star, BarChart3, BookOpen, GraduationCap, Handshake, Clock } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug, getRelatedBlogs } from '../../data/blogs';

export default function StartupAlgerie() {
  const blog = getBlogBySlug('startup-algerie-guide-2024');
  const relatedBlogs = getRelatedBlogs('startup-algerie-guide-2024', 3);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Comment obtenir le label Startup en Algérie ?",
      answer: "Pour obtenir le label Startup, vous devez déposer un dossier auprès du Comité National de Labellisation (CNL). Critères : entreprise innovante, moins de 8 ans, chiffre d'affaires < 500M DA. Le processus prend 30-60 jours. Symloop peut vous aider à préparer votre dossier et développer votre MVP."
    },
    {
      question: "Quels financements sont disponibles pour les startups en Algérie ?",
      answer: "Les principales sources sont : ANADE (crédits sans intérêt jusqu'à 10M DA), Algeria Venture (capital risque), Business Angels, subventions ministérielles, et concours comme DZ Startup Challenge. Contactez-nous pour vous orienter vers le financement adapté à votre projet."
    },
    {
      question: "Combien coûte la création d'un MVP en Algérie ?",
      answer: "Un MVP mobile coûte entre 500K et 1.5M DA selon la complexité. Un MVP web est généralement moins cher (300K-800K DA). Symloop propose des tarifs compétitifs pour les startups avec possibilité de paiement échelonné."
    },
    {
      question: "Quels incubateurs recommandez-vous en Algérie ?",
      answer: "Les meilleurs incubateurs : Sylabs (ESI), NUMA Alger, Algeria Venture, Orange Digital Center, GIZ TechBridge. Chacun a ses spécialités. Nous pouvons vous mettre en relation avec l'incubateur adapté à votre domaine."
    },
    {
      question: "Startup Act : quels avantages fiscaux en Algérie ?",
      answer: "Le Startup Act offre : exonération d'impôt (IBS, TAP, IRG) pendant 4 ans, TVA réduite sur les achats, facilités d'importation de matériel, et accès simplifié aux marchés publics. Ces avantages sont conditionnés à l'obtention du label Startup."
    },
    {
      question: "Comment lancer une startup tech en Algérie ?",
      answer: "Pour lancer une startup tech en Algérie, commencez par valider votre idée avec une étude de marché, puis créez votre structure juridique (SARL ou EURL). Demandez le label Startup auprès du CNL pour bénéficier du Startup Act. Développez un MVP avec un partenaire tech comme Symloop, puis recherchez un financement (ANADE, Algeria Venture, Business Angels). Symloop vous accompagne de l'idée au produit."
    },
    {
      question: "Combien coûte la création d'une startup en Algérie ?",
      answer: "Le coût total dépend de votre secteur. Frais administratifs : 30K-50K DA (registre de commerce, CASNOS, impôts). Développement MVP : de 80K DA (landing page) à 500K+ DA (application mobile complète). Hébergement et domaine : 10K-30K DA/an. Symloop propose des tarifs préférentiels startup et des facilités de paiement pour réduire la barrière financière."
    },
    {
      question: "Comment trouver un développeur pour ma startup en Algérie ?",
      answer: "Plusieurs options : recruter un développeur freelance (Mostaql, Khamsat), faire appel à une agence tech spécialisée startup comme Symloop, ou rejoindre un incubateur pour rencontrer des profils techniques. Symloop est basé à Alger et accompagne les startups algériennes avec des équipes full-stack expérimentées. Contactez-nous au +213 549 575 512."
    },
    {
      question: "Symloop accompagne-t-il les startups algériennes ?",
      answer: "Oui, Symloop est le partenaire tech de référence pour les startups algériennes. Nous proposons : développement MVP (web et mobile), conception UI/UX, conseil technique, accompagnement pour le label Startup, et support post-lancement. Plus de 50 projets startup accompagnés depuis Sétif. Tarifs adaptés et facilités de paiement."
    },
    {
      question: "Quel est le meilleur partenaire tech pour une startup en Algérie ?",
      answer: "Le meilleur partenaire tech comprend les contraintes des startups : budget limité, besoin de rapidité, itérations fréquentes. Symloop coche toutes les cases avec +50 projets startup accompagnés, des tarifs adaptés, une méthodologie agile, et un accompagnement de l'idée au lancement. Basé à Sétif, nous intervenons sur tout le territoire algérien. Contact : +213 549 575 512."
    }
  ];

  return (
    <>
      <Head>
        <title>Créer une Startup en Algérie 2024 | Guide Complet : Financement, Label, Incubateurs | Symloop</title>
        <meta name="description" content="Guide complet pour créer votre startup en Algérie 2024 : Label Startup, financement ANADE, incubateurs, Startup Act, étapes de création et accompagnement technique." />
        <meta name="keywords" content="startup algérie, créer startup, entrepreneuriat algérie, anade, ansej, financement startup, incubateur algérie, label startup, startup act algérie, mvp startup, algeria venture" />
        <link rel="canonical" href="https://symloop.com/blog/startup-algerie-guide-2024" />
        <meta property="og:title" content="Créer une Startup en Algérie 2024 | Guide Complet" />
        <meta property="og:description" content="Financement, Label Startup, Incubateurs - Tout pour lancer votre startup en Algérie." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/startup-algerie-guide-2024" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Créer une Startup en Algérie 2024 : Guide Complet",
            "description": "Guide complet pour créer votre startup en Algérie : financement, label, incubateurs, accompagnement.",
            "author": { "@type": "Organization", "name": "Symloop" },
            "publisher": { "@type": "Organization", "name": "Symloop", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
            "datePublished": "2024-11-01",
            "dateModified": "2024-11-15",
            "mainEntityOfPage": "https://symloop.com/blog/startup-algerie-guide-2024"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com/" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" },
              { "@type": "ListItem", "position": 3, "name": "Créer une Startup en Algérie 2024", "item": "https://symloop.com/blog/startup-algerie-guide-2024" }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Créer une Startup en Algérie 2024 | Guide Complet",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", ".en-bref-block", ".prose"]
            }
          })}
        </script>
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
                  <Rocket className="w-4 h-4" />Startup
                </span>
                <span className="text-gray-400 text-sm">20 min de lecture</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Créer une <span className="text-purple-400">Startup</span> en Algérie 2024
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Guide complet : Financement ANADE, Label Startup, Incubateurs, Startup Act et développement MVP. Tout ce qu'il faut savoir pour réussir.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <span>Par l'équipe Symloop</span>
                <span>•</span>
                <span>Mis à jour : Novembre 2024</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Special Offer Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="font-semibold">
              🚀 Offre Startup : <span className="underline">-20% sur votre MVP</span> + accompagnement gratuit pour le label
              <a href="https://wa.me/213549575512?text=Bonjour, je suis intéressé par l'offre startup -20% sur le MVP" className="ml-3 bg-white text-purple-600 px-4 py-1 rounded-full text-sm font-bold hover:bg-purple-100">
                J'en profite →
              </a>
            </p>
          </div>
        </div>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                L'écosystème <span className="text-purple-600 font-semibold">startup en Algérie</span> est en pleine expansion.
                Avec des dispositifs comme <span className="text-purple-600 font-semibold">ANADE</span>, le
                <span className="text-purple-600 font-semibold"> Startup Act</span> et plus de 50 incubateurs, lancer votre projet
                n'a jamais été aussi accessible. Ce guide vous accompagne étape par étape.
              </p>
            </div>

            {/* En bref */}
            <div className="en-bref-block bg-purple-50 border-l-4 border-purple-600 rounded-r-2xl p-6 mb-12">
              <h2 className="text-lg font-bold text-purple-800 mb-2">En bref</h2>
              <p className="text-gray-700 leading-relaxed">
                Symloop est le partenaire tech des startups algériennes. Développement MVP, applications mobiles, plateformes SaaS, conseil technique. De l'idée au produit en quelques semaines. +50 projets startup accompagnés. Basé à Sétif. Contact&nbsp;: <a href="tel:+213549575512" className="text-purple-700 font-semibold underline">+213 549 575 512</a>.
              </p>
            </div>

            {/* Stats Box */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 rounded-r-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Écosystème Startup Algérie 2024</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "3000+", label: "Startups labellisées", desc: "en croissance" },
                  { value: "50+", label: "Incubateurs", desc: "actifs en Algérie" },
                  { value: "10M DA", label: "Financement ANADE", desc: "maximum" },
                  { value: "4 ans", label: "Exonération fiscale", desc: "Startup Act" }
                ].map((stat, i) => (
                  <div key={i} className="text-center bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-3xl font-bold text-purple-600">{stat.value}</div>
                    <div className="text-sm font-medium text-gray-900">{stat.label}</div>
                    <div className="text-xs text-gray-500">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Label Startup Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-purple-600" />
                </div>
                Obtenir le Label Startup : Guide Étape par Étape
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
                <h3 className="font-bold text-blue-800 mb-2">Pourquoi le Label Startup ?</h3>
                <p className="text-blue-700">
                  Le label vous donne accès aux avantages fiscaux du Startup Act, aux financements ANADE,
                  aux marchés publics simplifiés et à la crédibilité auprès des investisseurs.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="font-bold text-gray-900">Critères d'Éligibilité</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Lightbulb, text: "Caractère innovant du projet", desc: "Technologie, produit ou service nouveau" },
                    { icon: Clock, text: "Moins de 8 ans d'existence", desc: "Ou 10 ans pour les projets R&D" },
                    { icon: DollarSign, text: "CA < 500 millions DA", desc: "Chiffre d'affaires plafonné" },
                    { icon: Users, text: "Effectif < 250 employés", desc: "PME innovante" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start p-4 bg-gray-50 rounded-xl">
                      <item.icon className="w-5 h-5 text-purple-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-900">{item.text}</div>
                        <div className="text-sm text-gray-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-gray-900">Processus de Labellisation</h3>
                {[
                  { step: 1, title: "Créer un compte sur startup.dz", desc: "Plateforme officielle du Ministère de l'Économie de la Connaissance", duration: "1 jour" },
                  { step: 2, title: "Préparer le dossier", desc: "Business plan, pitch deck, description technique, équipe, preuves d'innovation", duration: "1-2 semaines" },
                  { step: 3, title: "Soumettre la demande", desc: "Upload des documents sur la plateforme, paiement des frais (gratuit)", duration: "1 jour" },
                  { step: 4, title: "Évaluation par le CNL", desc: "Comité National de Labellisation examine le dossier", duration: "30-60 jours" },
                  { step: 5, title: "Obtention du label", desc: "Si accepté, certificat officiel et inscription au registre des startups", duration: "Immédiat" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white border border-gray-100 rounded-xl p-4">
                    <span className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">{item.step}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{item.duration}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Funding Sources */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                Sources de Financement Startup Algérie
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Building,
                    title: "ANADE",
                    subtitle: "Agence Nationale d'Appui au Développement de l'Entrepreneuriat",
                    desc: "Crédits sans intérêt jusqu'à 10M DA pour les porteurs de projets. Accompagnement et formation inclus.",
                    amount: "Jusqu'à 10M DA",
                    type: "Prêt sans intérêt",
                    conditions: ["Label Startup ou projet innovant", "Plan d'affaires solide", "Apport personnel 1-5%"],
                    color: "blue"
                  },
                  {
                    icon: TrendingUp,
                    title: "Algeria Venture",
                    subtitle: "Fonds d'investissement public",
                    desc: "Capital risque pour startups tech à fort potentiel. Investissement en equity avec accompagnement stratégique.",
                    amount: "50M - 500M DA",
                    type: "Capital risque",
                    conditions: ["Startup labellisée", "Traction prouvée", "Marché scalable"],
                    color: "purple"
                  },
                  {
                    icon: Users,
                    title: "Business Angels",
                    subtitle: "Investisseurs privés algériens",
                    desc: "Réseau d'entrepreneurs qui investissent leur propre capital et leur expertise dans les startups prometteuses.",
                    amount: "5M - 50M DA",
                    type: "Equity + Mentorat",
                    conditions: ["MVP fonctionnel", "Équipe solide", "Vision claire"],
                    color: "orange"
                  },
                  {
                    icon: Award,
                    title: "Concours & Grants",
                    subtitle: "DZ Startup Challenge, Orange Corners, etc.",
                    desc: "Compétitions et subventions non-remboursables pour les startups innovantes. Prix en cash et accompagnement.",
                    amount: "500K - 5M DA",
                    type: "Subvention / Prix",
                    conditions: ["Pitch convaincant", "Innovation démontrable", "Impact social/économique"],
                    color: "green"
                  }
                ].map((source, i) => (
                  <div key={i} className={`bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-${source.color}-200 transition-all hover:shadow-lg`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-${source.color}-100 rounded-xl flex items-center justify-center`}>
                        <source.icon className={`w-6 h-6 text-${source.color}-600`} />
                      </div>
                      <span className={`text-xs bg-${source.color}-100 text-${source.color}-700 px-3 py-1 rounded-full font-medium`}>{source.type}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{source.title}</h3>
                    <p className="text-xs text-gray-500 mb-3">{source.subtitle}</p>
                    <p className="text-gray-600 text-sm mb-4">{source.desc}</p>
                    <div className={`text-xl font-bold text-${source.color}-600 mb-4`}>{source.amount}</div>
                    <div className="space-y-2">
                      {source.conditions.map((cond, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs text-gray-500">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          {cond}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Startup Act Benefits */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-cyan-600" />
                </div>
                Avantages du Startup Act Algérie
              </h2>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 mb-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: Shield, title: "Exonération IBS", desc: "Impôt sur les bénéfices : 0% pendant 4 ans", value: "4 ans" },
                    { icon: DollarSign, title: "Exonération TAP", desc: "Taxe sur l'activité professionnelle : 0%", value: "4 ans" },
                    { icon: FileText, title: "TVA Réduite", desc: "TVA avantageuse sur les achats professionnels", value: "Taux réduit" },
                    { icon: Globe, title: "Import Facilité", desc: "Procédures simplifiées pour équipements", value: "Fast track" },
                    { icon: Building, title: "Marchés Publics", desc: "Accès privilégié aux appels d'offres publics", value: "25% réservé" },
                    { icon: Users, title: "Visa Tech", desc: "Facilités de visa pour talents étrangers", value: "Procédure rapide" }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-4 items-start bg-white rounded-xl p-4">
                      <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-cyan-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                          <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded">{benefit.value}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Incubators */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-orange-600" />
                </div>
                Top Incubateurs & Accélérateurs Algérie
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="text-left p-4 rounded-tl-xl">Incubateur</th>
                      <th className="text-left p-4">Localisation</th>
                      <th className="text-left p-4">Spécialité</th>
                      <th className="text-left p-4 rounded-tr-xl">Programme</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { name: "Sylabs (ESI)", location: "Alger", specialty: "Tech, IA, Software", program: "6 mois + financement" },
                      { name: "NUMA Alger", location: "Alger", specialty: "Digital, Fintech", program: "4 mois + mentorat" },
                      { name: "Algeria Venture", location: "National", specialty: "All sectors", program: "Investment + support" },
                      { name: "Orange Digital Center", location: "Alger", specialty: "Digital, Mobile", program: "Formation + espace" },
                      { name: "GIZ TechBridge", location: "Multiple", specialty: "Tech, Impact", program: "Accélération + réseau" },
                      { name: "Incubateur USTHB", location: "Alger", specialty: "Deep Tech, Biotech", program: "R&D + accompagnement" },
                      { name: "Sherpa Lab", location: "Alger", specialty: "Fintech, E-commerce", program: "3 mois intensif" }
                    ].map((incub, i) => (
                      <tr key={i} className="bg-white hover:bg-gray-50">
                        <td className="p-4 font-medium text-gray-900">{incub.name}</td>
                        <td className="p-4 text-gray-600">{incub.location}</td>
                        <td className="p-4 text-gray-600">{incub.specialty}</td>
                        <td className="p-4 text-purple-600 font-medium">{incub.program}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* MVP Development Pricing */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-purple-600" />
                </div>
                Développement MVP : Tarifs Startup
              </h2>

              {/* Pricing Warning */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs avec tarif startup.</strong> Le coût final dépend de la complexité, des fonctionnalités et du délai.
                  <strong> Contactez-nous pour un devis gratuit et personnalisé adapté à votre budget startup.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "MVP Landing",
                    price: "30K - 80K DA",
                    duration: "1-2 semaines",
                    features: ["Site vitrine moderne", "Formulaire de contact", "SEO optimisé", "Hébergement 1 an", "Responsive mobile"],
                    ideal: "Validation idée",
                    color: "green"
                  },
                  {
                    name: "MVP Web App",
                    price: "150K - 350K DA",
                    duration: "4-8 semaines",
                    features: ["Application web complète", "Authentification users", "Dashboard admin", "Base de données", "API intégrées", "3 mois support"],
                    ideal: "SaaS, Marketplace",
                    popular: true,
                    color: "purple"
                  },
                  {
                    name: "MVP Mobile",
                    price: "Sur devis",
                    duration: "Selon projet",
                    features: ["App iOS + Android", "Backend complet", "Push notifications", "Paiement intégré", "Analytics", "Publication stores"],
                    ideal: "B2C, On-demand",
                    color: "blue"
                  }
                ].map((plan, i) => (
                  <div key={i} className={`rounded-2xl p-6 ${plan.popular ? 'bg-gradient-to-br from-purple-500 to-indigo-500 text-white ring-4 ring-purple-200' : 'bg-gray-50'}`}>
                    {plan.popular && <div className="text-xs font-bold uppercase tracking-wider mb-2">Le Plus Demandé</div>}
                    <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                    <div className={`text-3xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-purple-600'}`}>{plan.price}</div>
                    <div className={`text-sm mb-4 ${plan.popular ? 'text-purple-100' : 'text-gray-500'}`}>{plan.duration}</div>
                    <ul className="space-y-2 mb-4">
                      {plan.features.map((f, j) => (
                        <li key={j} className={`flex items-center gap-2 text-sm ${plan.popular ? 'text-white' : 'text-gray-600'}`}>
                          <CheckCircle className={`w-4 h-4 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className={`text-xs ${plan.popular ? 'text-purple-100' : 'text-gray-500'}`}>Idéal pour : {plan.ideal}</div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                * Tarifs préférentiels startup - Facilités de paiement disponibles
              </p>
            </section>

            {/* Roadmap Startup */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                Roadmap : De l'Idée au Lancement
              </h2>

              <div className="space-y-6">
                {[
                  { phase: "Phase 1", title: "Validation Idée", duration: "2-4 semaines", tasks: ["Étude de marché", "Entretiens clients", "Analyse concurrence", "Canvas business model"], color: "bg-blue-500" },
                  { phase: "Phase 2", title: "Label & Structure", duration: "4-8 semaines", tasks: ["Création SARL/EURL", "Demande label Startup", "Ouverture compte pro", "Recherche financement"], color: "bg-green-500" },
                  { phase: "Phase 3", title: "Développement MVP", duration: "6-12 semaines", tasks: ["Design UI/UX", "Développement technique", "Tests utilisateurs", "Itérations"], color: "bg-orange-500" },
                  { phase: "Phase 4", title: "Lancement & Growth", duration: "Continu", tasks: ["Go-to-market", "Acquisition premiers clients", "Métriques & KPIs", "Levée de fonds"], color: "bg-purple-500" }
                ].map((phase, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className={`${phase.color} text-white px-4 py-2 rounded-xl font-bold text-sm flex-shrink-0 min-w-[80px] text-center`}>
                      {phase.phase}
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-gray-900 text-lg">{phase.title}</h3>
                        <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">{phase.duration}</span>
                      </div>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {phase.tasks.map((task, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Symloop */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-purple-600" />
                </div>
                Pourquoi Symloop pour Votre Startup ?
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Rocket, title: "Expérience Startup", desc: "20+ MVPs développés, nous comprenons les contraintes des fondateurs" },
                  { icon: DollarSign, title: "Tarifs Startup", desc: "Prix adaptés aux jeunes entreprises, facilités de paiement" },
                  { icon: Handshake, title: "Partenaire, pas Prestataire", desc: "Nous nous impliquons dans votre réussite, conseils stratégiques inclus" },
                  { icon: Zap, title: "Rapidité d'Exécution", desc: "MVP en 6-10 semaines, méthodologie agile, itérations rapides" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <item.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                </div>
                Questions Fréquentes - Startup Algérie
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-2 border-gray-100 rounded-xl overflow-hidden hover:border-purple-200 transition-colors">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Cross-links */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Articles recommandés</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/blog/developpement-application-mobile-algerie-2026" className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all group">
                  <Phone className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Développement Application Mobile en Algérie 2026</span>
                    <p className="text-sm text-gray-500 mt-1">Tout savoir pour créer votre application mobile en Algérie.</p>
                  </div>
                </Link>
                <Link href="/blog/erp-sur-mesure-saas-startup-pme-algerie-2026" className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all group">
                  <Building className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">ERP sur Mesure & SaaS pour Startups et PME en Algérie 2026</span>
                    <p className="text-sm text-gray-500 mt-1">Solutions ERP et SaaS adaptées aux entreprises algériennes.</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {["Startup Algérie", "ANADE", "Label Startup", "Startup Act", "Financement Startup", "MVP", "Incubateur", "Algeria Venture", "Entrepreneuriat"].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Besoin d'Accompagnement Tech ?</h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Nous développons le MVP de votre startup avec les meilleures technologies. Tarifs adaptés, expertise prouvée, accompagnement complet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/213549575512?text=Bonjour, j'ai une idée de startup et je cherche un partenaire tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Discuter de Mon Projet
              </a>
              <a
                href="tel:+213549575512"
                className="inline-flex items-center justify-center gap-2 bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-800 transition-colors border border-purple-500"
              >
                <Phone className="w-5 h-5" /> +213 549 57 55 12
              </a>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedBlogs && relatedBlogs.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Articles Connexes</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedBlogs.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
                      <span className="text-xs font-medium text-purple-600 mb-2 block">{post.category}</span>
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm line-clamp-2">{post.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
