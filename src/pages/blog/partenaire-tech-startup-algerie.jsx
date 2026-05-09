"use client";
import { useState } from 'react';
import { ArrowLeft, Users, CheckCircle, MessageCircle, Shield, Zap, Code, Target, Award, Briefcase, ChevronDown, AlertCircle, Rocket, Clock, TrendingUp, HeartHandshake, Lightbulb, Settings, Star, ArrowRight, BarChart3, Package, Cloud, Layers, GitBranch, DollarSign } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug, getRelatedBlogs } from '../../data/blogs';

export default function PartenaireTechStartup() {
  const blog = getBlogBySlug('partenaire-tech-startup-algerie');
  const relatedBlogs = getRelatedBlogs('partenaire-tech-startup-algerie', 3);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Qu'est-ce qu'un partenaire tech pour startup ?",
      answer: "Un partenaire tech est une agence ou équipe qui prend en charge tout le développement technique de votre startup : développement web/mobile, infrastructure cloud, design, et support. C'est comme avoir un CTO et une équipe technique sans les coûts d'embauche permanente."
    },
    {
      question: "Combien coûte un partenariat tech pour ma startup ?",
      answer: "Nos partenariats commencent à partir de 50,000 DA/mois pour un accompagnement CTO as a Service. Pour un développement complet (MVP), comptez entre 60,000 et 150,000 DA. Les tarifs dépendent de la complexité et de l'étendue des services souhaités."
    },
    {
      question: "Qui détient la propriété intellectuelle du code ?",
      answer: "Vous êtes 100% propriétaire du code source et de toute la propriété intellectuelle développée. Nous vous transférons tous les droits à la livraison. Vous pouvez récupérer le code et le faire évoluer par une autre équipe si vous le souhaitez."
    },
    {
      question: "Comment fonctionne la collaboration au quotidien ?",
      answer: "Nous travaillons en méthodologie agile avec des sprints de 2 semaines. Vous avez accès à un channel Slack/WhatsApp dédié, des démos régulières, et des calls hebdomadaires. Votre product owner est impliqué à chaque étape pour valider les développements."
    },
    {
      question: "Pouvez-vous aider pour une levée de fonds ?",
      answer: "Oui, nous aidons nos startups partenaires à préparer le volet technique de leur pitch : démo produit, documentation technique, roadmap, architecture, et réponses aux questions techniques des investisseurs."
    },
    {
      question: "Que se passe-t-il après le lancement ?",
      answer: "Nous proposons des contrats de maintenance et support continu. Votre produit évolue avec vos utilisateurs : nouvelles features, optimisations, corrections de bugs, mises à jour de sécurité. Nous pouvons également vous aider à recruter votre propre équipe tech quand vous êtes prêts."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Trouver un Partenaire Tech pour Startup en Algérie",
        "description": "Vous avez l'idée, nous avons la tech. Symloop accompagne les startups algériennes avec développement complet, CTO as a Service, et support continu.",
        "author": { "@type": "Organization", "name": "Symloop" },
        "publisher": {
          "@type": "Organization",
          "name": "Symloop",
          "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" }
        },
        "datePublished": blog?.date,
        "dateModified": "2024-12-01",
        "mainEntityOfPage": "https://symloop.com/blog/partenaire-tech-startup-algerie"
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
        "name": "Partenaire Tech Startup Algérie",
        "provider": {
          "@type": "Organization",
          "name": "Symloop",
          "telephone": "+213549575512",
          "address": { "@type": "PostalAddress", "addressCountry": "DZ" }
        },
        "areaServed": ["Algérie", "Tunisie", "Maroc", "MENA"],
        "description": "Accompagnement technique complet pour startups : CTO as a Service, développement, design et support",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "DZD",
          "lowPrice": "50000",
          "highPrice": "200000"
        }
      }
    ]
  };

  const services = [
    {
      icon: Code,
      title: "CTO as a Service",
      description: "Direction technique sans coût temps plein",
      features: ["Choix technologiques", "Architecture système", "Recrutement tech", "Revue de code"]
    },
    {
      icon: Zap,
      title: "Équipe Dédiée",
      description: "Développeurs seniors pour votre projet",
      features: ["Frontend React/Next.js", "Backend Node/Python", "Mobile cross-platform", "DevOps & Cloud"]
    },
    {
      icon: Shield,
      title: "Code & IP Protection",
      description: "Propriété intellectuelle garantie",
      features: ["Code source à vous", "Documentation complète", "Transfert de connaissances", "Liberté totale"]
    },
    {
      icon: Target,
      title: "Roadmap Produit",
      description: "Planification stratégique",
      features: ["Priorisation features", "Gestion backlog", "Sprints agiles", "Metrics & KPIs"]
    }
  ];

  const pricingPlans = [
    {
      name: "CTO Advisory",
      price: "50,000",
      unit: "DA",
      period: "/mois",
      description: "Conseil technique stratégique",
      features: [
        "4 heures conseil/mois",
        "Choix architecture",
        "Revue de code",
        "Aide recrutement tech",
        "Support par chat",
        "Recommandations mensuelles"
      ],
      popular: false,
      cta: "Démarrer Advisory"
    },
    {
      name: "Tech Partner",
      price: "120,000",
      unit: "DA",
      period: "/mois",
      description: "Partenariat développement actif",
      features: [
        "Équipe dédiée 2-3 devs",
        "Sprints de 2 semaines",
        "Démos hebdomadaires",
        "Design UI/UX inclus",
        "DevOps & déploiement",
        "Support prioritaire"
      ],
      popular: true,
      cta: "Devenir Partenaire"
    },
    {
      name: "Full Stack Partner",
      price: "Sur devis",
      unit: "",
      period: "",
      description: "Équipe complète sur mesure",
      features: [
        "Équipe 5+ personnes",
        "CTO dédié",
        "Product management",
        "Design system complet",
        "Infrastructure scaling",
        "Préparation levée fonds"
      ],
      popular: false,
      cta: "Demander un Devis"
    }
  ];

  const stats = [
    { value: "50+", label: "Startups accompagnées", icon: Rocket },
    { value: "95%", label: "Taux de satisfaction", icon: Star },
    { value: "100%", label: "IP transférée", icon: Shield },
    { value: "24/7", label: "Support disponible", icon: HeartHandshake }
  ];

  const process = [
    { num: "01", title: "Discovery Call", desc: "Compréhension de votre vision, marché cible, modèle business et objectifs de croissance" },
    { num: "02", title: "Proposition Technique", desc: "Stack technologique recommandé, architecture système, estimation de coûts et planning" },
    { num: "03", title: "Développement Agile", desc: "Sprints de 2 semaines avec démos, feedback continu et adaptation aux besoins" },
    { num: "04", title: "Lancement & Growth", desc: "Déploiement production, monitoring, analytics et optimisation continue" }
  ];

  const advantages = [
    { icon: DollarSign, text: "Économies significatives vs embauche interne" },
    { icon: Clock, text: "Time-to-market accéléré avec équipe prête" },
    { icon: Lightbulb, text: "Expertise technique multi-domaines" },
    { icon: TrendingUp, text: "Scalabilité : équipe ajustable selon besoins" },
    { icon: Settings, text: "Best practices et méthodologies éprouvées" },
    { icon: Award, text: "Expérience marché algérien et MENA" }
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "React Native", category: "Mobile" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" }
  ];

  return (
    <>
      <Head>
        <title>Partenaire Tech Startup Algérie | CTO as a Service - Symloop</title>
        <meta name="description" content="Trouvez votre partenaire tech en Algérie. CTO as a Service, équipe développement dédiée, et accompagnement complet pour startups. À partir de 50,000 DA/mois." />
        <meta name="keywords" content="partenaire tech algérie, cto startup, équipe développement startup, fournisseur tech, co-fondateur technique, cto as a service algérie" />
        <link rel="canonical" href="https://symloop.com/blog/partenaire-tech-startup-algerie" />
        <meta property="og:title" content="Partenaire Tech Startup Algérie | CTO as a Service" />
        <meta property="og:description" content="Votre partenaire tech en Algérie. CTO as a Service et équipe développement dédiée pour startups. À partir de 50,000 DA/mois." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/partenaire-tech-startup-algerie" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" },
            { "@type": "ListItem", "position": 3, "name": "Partenaire Tech Startup Algérie", "item": "https://symloop.com/blog/partenaire-tech-startup-algerie" }
          ]
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [".speakable-summary", "h1"]
          },
          "name": "Partenaire Tech Startup Algérie | CTO as a Service - Symloop"
        }) }} />
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
                  <Users className="w-4 h-4" />Startup
                </span>
                <span className="text-gray-400 text-sm">{blog?.readTime}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Trouver un <span className="text-indigo-400">Partenaire Tech</span> en Algérie
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Vous avez l'idée, nous avons la tech. Un partenaire technique complet pour transformer
                votre vision en produit, sans les contraintes d'une équipe interne.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/213549575512?text=Bonjour, je cherche un partenaire tech pour ma startup"
                   target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                  <MessageCircle className="w-5 h-5" /> Parlons de Votre Projet
                </a>
                <a href="tel:+213549575512" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                  <span>+213 549 57 55 12</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* En bref - LLM Summary Block */}
        <section className="py-6 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="speakable-summary bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-indigo-600 mb-2">En bref</h2>
              <p className="text-gray-700 leading-relaxed">
                Symloop est le partenaire technique des startups algériennes. CTO as a service, développement MVP, conseil technique, scaling. +50 startups accompagnées. Basé à Sétif. Contact: +213 549 575 512.
              </p>
            </div>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                <span className="text-indigo-600 font-semibold">Vous avez l'idée, nous avons la tech.</span> Trouver le bon
                partenaire technique est crucial pour le succès de votre startup. Symloop offre un
                <span className="text-indigo-600 font-semibold"> accompagnement complet</span> de A à Z : développement,
                infrastructure, design, et conseil stratégique.
              </p>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 rounded-r-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Symloop : Votre Partenaire Tech</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <stat.icon className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-indigo-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Package className="w-5 h-5 text-indigo-600" />
                </div>
                Nos Services pour Startups
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-indigo-300 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-500">{service.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-indigo-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Process */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <GitBranch className="w-5 h-5 text-indigo-600" />
                </div>
                Comment Nous Travaillons avec les Startups
              </h2>
              <div className="space-y-4">
                {process.map((step, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 items-start bg-gray-50 p-6 rounded-2xl hover:bg-indigo-50 transition-colors">
                    <div className="bg-indigo-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center font-bold flex-shrink-0">{step.num}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl p-8 md:p-12 text-white text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Prêt à Avoir Votre Équipe Tech ?</h2>
                <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                  Discutons de votre projet startup. Première consultation gratuite pour comprendre vos besoins et vous proposer la meilleure approche.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="https://wa.me/213549575512?text=Bonjour, je cherche un partenaire tech pour ma startup"
                     target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
                    <MessageCircle className="w-5 h-5" /> Consultation Gratuite
                  </a>
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-indigo-600" />
                </div>
                Formules de Partenariat
              </h2>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Chaque partenariat est personnalisé selon vos besoins, la taille du projet et le niveau d'accompagnement souhaité.
                  <strong> Contactez-nous pour un devis gratuit et personnalisé.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`rounded-2xl p-6 ${plan.popular ? 'bg-indigo-600 text-white ring-4 ring-indigo-200' : 'bg-gray-50'}`}>
                    {plan.popular && (
                      <span className="inline-block bg-white text-indigo-600 px-3 py-1 rounded-full text-xs font-bold mb-4">
                        POPULAIRE
                      </span>
                    )}
                    <h3 className={`text-xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                    <p className={`text-sm mt-1 ${plan.popular ? 'text-indigo-100' : 'text-gray-600'}`}>{plan.description}</p>
                    <div className={`text-3xl font-bold my-4 ${plan.popular ? 'text-white' : 'text-indigo-600'}`}>
                      {plan.price} {plan.unit}
                      <span className={`text-sm font-normal ${plan.popular ? 'text-indigo-100' : 'text-gray-500'}`}>{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, j) => (
                        <li key={j} className={`flex items-center gap-2 text-sm ${plan.popular ? 'text-indigo-100' : 'text-gray-600'}`}>
                          <CheckCircle className={`w-4 h-4 ${plan.popular ? 'text-white' : 'text-indigo-500'}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a href="https://wa.me/213549575512?text=Bonjour, je suis intéressé par votre formule partenariat tech"
                       target="_blank" rel="noopener noreferrer"
                       className={`block text-center py-3 rounded-xl font-semibold transition-colors ${
                         plan.popular
                           ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                           : 'bg-indigo-600 text-white hover:bg-indigo-700'
                       }`}>
                      {plan.cta}
                    </a>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Advantages */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-indigo-600" />
                </div>
                Avantages d'un Partenaire Tech
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {advantages.map((item, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-center p-4 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-colors">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-indigo-600" />
                </div>
                Questions Fréquentes
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-indigo-500 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Technologies */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Notre Stack Technique</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {technologies.map((tech, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-indigo-50 transition-colors">
                    <div className="font-semibold text-gray-900">{tech.name}</div>
                    <div className="text-xs text-indigo-600">{tech.category}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Articles - Cross-links */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Articles Connexes</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/startup-algerie-guide-2024" className="group bg-gray-50 rounded-2xl p-6 hover:bg-indigo-50 transition-colors">
                  <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                    Guide Startup Algérie 2024
                  </h3>
                  <p className="text-sm text-gray-600">Le guide complet pour lancer et développer votre startup en Algérie.</p>
                  <div className="flex items-center gap-2 mt-4 text-indigo-600 text-sm font-medium">
                    Lire l'article <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
                <Link href="/blog/erp-sur-mesure-saas-startup-pme-algerie-2026" className="group bg-gray-50 rounded-2xl p-6 hover:bg-indigo-50 transition-colors">
                  <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                    ERP sur Mesure, SaaS pour Startups et PME en Algérie
                  </h3>
                  <p className="text-sm text-gray-600">Découvrez les solutions ERP et SaaS adaptées aux startups et PME algériennes.</p>
                  <div className="flex items-center gap-2 mt-4 text-indigo-600 text-sm font-medium">
                    Lire l'article <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {blog?.tags?.map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Devenez Notre Prochain Success Story</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Consultation gratuite pour discuter de votre projet startup et découvrir comment nous pouvons vous aider à réussir.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/213549575512?text=Bonjour, je cherche un partenaire tech pour ma startup"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors">
                <MessageCircle className="w-5 h-5" /> Parlons de Votre Startup
              </a>
              <a href="tel:+213549575512"
                 className="inline-flex items-center gap-2 bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-800 transition-colors border border-indigo-500">
                +213 549 57 55 12
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
