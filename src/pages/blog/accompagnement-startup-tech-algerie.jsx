"use client";
import { useState } from 'react';
import { ArrowLeft, Rocket, CheckCircle, MessageCircle, Package, Cloud, Settings, HeartHandshake, ChevronDown, AlertCircle, Users, TrendingUp, Zap, Shield, Code, Smartphone, Globe, Database, Layers, GitBranch, Lightbulb, Target, Clock, Star, ArrowRight, Award, BarChart3 } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug, getRelatedBlogs } from '../../data/blogs';

export default function AccompagnementStartup() {
  const blog = getBlogBySlug('accompagnement-startup-tech-algerie');
  const relatedBlogs = getRelatedBlogs('accompagnement-startup-tech-algerie', 3);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Quel est le budget minimum pour lancer une startup tech en Algérie ?",
      answer: "Avec Symloop, vous pouvez démarrer avec un MVP fonctionnel à partir de 60,000 DA. Ce budget inclut le développement d'une feature core, un design basique et 1 mois de support. Pour une application plus complète avec web et mobile, comptez entre 120,000 et 200,000 DA."
    },
    {
      question: "Combien de temps pour développer un MVP ?",
      answer: "Un MVP simple peut être développé en 4 à 6 semaines. Pour une application plus complexe avec plusieurs features, comptez 2 à 3 mois. Nous travaillons en méthodologie agile avec des livraisons régulières pour que vous puissiez tester rapidement."
    },
    {
      question: "Pourquoi choisir un fournisseur unique pour ma startup ?",
      answer: "Un fournisseur unique simplifie la communication, garantit une cohérence technique, élimine les problèmes de coordination entre prestataires, et vous permet d'avoir un seul responsable du succès de votre projet. C'est plus efficace et souvent moins cher."
    },
    {
      question: "Quelles technologies utilisez-vous pour les startups ?",
      answer: "Nous utilisons des technologies modernes et éprouvées : React/Next.js pour le web, React Native pour le mobile cross-platform, Node.js ou Python pour le backend, PostgreSQL ou MongoDB pour les bases de données, et AWS/Vercel pour l'hébergement cloud."
    },
    {
      question: "Proposez-vous un accompagnement après le lancement ?",
      answer: "Oui, tous nos packages incluent une période de support. Nous proposons également des contrats de maintenance mensuelle pour assurer la stabilité, les mises à jour de sécurité, et les évolutions de votre produit."
    },
    {
      question: "Comment fonctionne le paiement pour les startups ?",
      answer: "Nous comprenons les contraintes des startups. Le paiement se fait généralement en 3 fois : 30% au démarrage, 40% à mi-parcours, et 30% à la livraison. Nous acceptons les paiements CIB, EDAHABIA, virement bancaire et espèces."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Accompagnement Tech Complet pour Startups en Algérie",
        "description": "Un seul fournisseur pour tous vos besoins tech startup : développement web, mobile, design, hébergement et support. Packages à partir de 60,000 DA.",
        "author": { "@type": "Organization", "name": "Symloop" },
        "publisher": {
          "@type": "Organization",
          "name": "Symloop",
          "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" }
        },
        "datePublished": blog?.date,
        "dateModified": "2024-12-01",
        "mainEntityOfPage": "https://symloop.com/blog/accompagnement-startup-tech-algerie"
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
        "name": "Accompagnement Tech Startup Algérie",
        "provider": {
          "@type": "Organization",
          "name": "Symloop",
          "telephone": "+213549575512",
          "address": { "@type": "PostalAddress", "addressCountry": "DZ" }
        },
        "areaServed": ["Algérie", "Tunisie", "Maroc", "MENA"],
        "description": "Accompagnement complet pour startups : développement, design, hébergement et support",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "DZD",
          "lowPrice": "60000",
          "highPrice": "200000"
        }
      }
    ]
  };

  const services = [
    {
      icon: Package,
      title: "Développement",
      description: "Applications web et mobile sur mesure",
      items: ["Web App React/Next.js", "Mobile iOS/Android", "Backend & APIs", "Base de données"]
    },
    {
      icon: Cloud,
      title: "Infrastructure",
      description: "Hébergement et DevOps clé en main",
      items: ["Hébergement Cloud", "CI/CD Pipeline", "Monitoring 24/7", "Backup & Sécurité"]
    },
    {
      icon: Layers,
      title: "Design",
      description: "UI/UX et identité visuelle",
      items: ["UI/UX Design", "Branding complet", "Prototypes Figma", "Design System"]
    },
    {
      icon: HeartHandshake,
      title: "Support",
      description: "Accompagnement continu",
      items: ["Maintenance mensuelle", "Support réactif", "Mises à jour", "Évolutions produit"]
    }
  ];

  const pricingPlans = [
    {
      name: "MVP Starter",
      price: "60,000",
      unit: "DA",
      description: "Lancez votre idée rapidement",
      features: [
        "Landing page moderne",
        "1 feature core développée",
        "Design UI responsive",
        "Hébergement 1 an inclus",
        "1 mois de support",
        "Livraison 4-6 semaines"
      ],
      popular: false,
      cta: "Lancer Mon MVP"
    },
    {
      name: "Startup Growth",
      price: "150,000",
      unit: "DA",
      description: "Web + Mobile pour croître",
      features: [
        "Web App complète",
        "App Mobile cross-platform",
        "5 features développées",
        "UI/UX professionnel",
        "Backend robuste",
        "3 mois de support"
      ],
      popular: true,
      cta: "Développer Ma Startup"
    },
    {
      name: "Scale Enterprise",
      price: "Sur devis",
      unit: "",
      description: "Solution complète sur mesure",
      features: [
        "Architecture scalable",
        "Features illimitées",
        "Équipe dédiée",
        "Infrastructure premium",
        "Support continu",
        "Accompagnement stratégique"
      ],
      popular: false,
      cta: "Demander un Devis"
    }
  ];

  const stats = [
    { value: "50+", label: "Startups accompagnées", icon: Rocket },
    { value: "4-6", label: "Semaines pour un MVP", icon: Clock },
    { value: "100%", label: "Projets livrés", icon: Target },
    { value: "24/7", label: "Support disponible", icon: HeartHandshake }
  ];

  const advantages = [
    { icon: MessageCircle, text: "Communication simplifiée - un seul interlocuteur" },
    { icon: Settings, text: "Cohérence technique - stack unifié et optimisé" },
    { icon: Zap, text: "Réactivité maximale - pas de ping-pong entre prestataires" },
    { icon: Shield, text: "Coûts maîtrisés - packages tout inclus sans surprise" },
    { icon: Lightbulb, text: "Vision globale - compréhension complète de votre projet" },
    { icon: Award, text: "Responsabilité claire - un seul responsable du succès" }
  ];

  const process = [
    { num: "01", title: "Discovery", desc: "Analyse de vos besoins, définition du scope et planification" },
    { num: "02", title: "Design", desc: "Wireframes, maquettes UI/UX et validation avec vous" },
    { num: "03", title: "Développement", desc: "Sprints agiles avec démos régulières et feedback continu" },
    { num: "04", title: "Tests & QA", desc: "Tests complets, corrections et optimisation performance" },
    { num: "05", title: "Lancement", desc: "Déploiement production, formation et support post-launch" }
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "React Native", category: "Mobile" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Vercel", category: "Hosting" }
  ];

  return (
    <>
      <Head>
        <title>Accompagnement Tech Startup Algérie | Développement Complet - Symloop</title>
        <meta name="description" content="Accompagnement tech complet pour startups en Algérie. Développement web, mobile, design, hébergement et support. Packages à partir de 60,000 DA. Devis gratuit." />
        <meta name="keywords" content="accompagnement startup algérie, développement startup, mvp algérie, tech startup alger, agence startup, fournisseur tech algérie" />
        <link rel="canonical" href="https://symloop.com/blog/accompagnement-startup-tech-algerie" />
        <meta property="og:title" content="Accompagnement Tech Startup Algérie | Symloop" />
        <meta property="og:description" content="Un seul fournisseur pour tous vos besoins tech startup. Développement, design, hébergement et support. À partir de 60,000 DA." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/accompagnement-startup-tech-algerie" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
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
                <span className="bg-emerald-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Rocket className="w-4 h-4" />Startup
                </span>
                <span className="text-gray-400 text-sm">{blog?.readTime}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-emerald-400">Accompagnement Tech</span> Complet pour Startups
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Un seul fournisseur pour tous vos besoins tech. De l'idée au produit lancé, nous vous accompagnons
                à chaque étape avec des solutions adaptées aux budgets des startups algériennes.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/213549575512?text=Bonjour, je cherche un accompagnement tech pour ma startup"
                   target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                  <MessageCircle className="w-5 h-5" /> Discuter de Mon Projet
                </a>
                <a href="tel:+213549575512" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                  <span>+213 549 57 55 12</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                <span className="text-emerald-600 font-semibold">Un seul fournisseur pour tous vos besoins tech.</span> De l'idée
                initiale au déploiement en production, Symloop fournit <span className="text-emerald-600 font-semibold">tout ce dont
                votre startup a besoin</span> pour réussir dans l'écosystème tech algérien et au-delà.
              </p>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 rounded-r-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Symloop pour les Startups</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <stat.icon className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-emerald-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Package className="w-5 h-5 text-emerald-600" />
                </div>
                Tout ce dont Votre Startup a Besoin
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-500">{service.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {service.items.map((item, j) => (
                        <li key={j} className="text-sm text-gray-600 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Process Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <GitBranch className="w-5 h-5 text-emerald-600" />
                </div>
                Notre Processus en 5 Étapes
              </h2>
              <div className="space-y-4">
                {process.map((step, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 items-start bg-gray-50 p-6 rounded-2xl hover:bg-emerald-50 transition-colors">
                    <div className="bg-emerald-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center font-bold flex-shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-8 md:p-12 text-white text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Prêt à Lancer Votre Startup ?</h2>
                <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                  Discutons de votre projet. Nous vous proposons un plan sur mesure adapté à votre budget et vos objectifs.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="https://wa.me/213549575512?text=Bonjour, j'ai une idée de startup et je cherche un accompagnement tech complet"
                     target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-colors">
                    <MessageCircle className="w-5 h-5" /> Obtenir un Devis Gratuit
                  </a>
                </div>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-emerald-600" />
                </div>
                Nos Packages Startup
              </h2>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif exact dépend de la complexité de votre projet, des features requises et du délai souhaité.
                  <strong> Contactez-nous pour un devis gratuit et personnalisé.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`rounded-2xl p-6 ${plan.popular ? 'bg-emerald-600 text-white ring-4 ring-emerald-200' : 'bg-gray-50'}`}>
                    {plan.popular && (
                      <span className="inline-block bg-white text-emerald-600 px-3 py-1 rounded-full text-xs font-bold mb-4">
                        POPULAIRE
                      </span>
                    )}
                    <h3 className={`text-xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                    <p className={`text-sm mt-1 ${plan.popular ? 'text-emerald-100' : 'text-gray-600'}`}>{plan.description}</p>
                    <div className={`text-3xl font-bold my-4 ${plan.popular ? 'text-white' : 'text-emerald-600'}`}>
                      {plan.price} {plan.unit}
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, j) => (
                        <li key={j} className={`flex items-center gap-2 text-sm ${plan.popular ? 'text-emerald-100' : 'text-gray-600'}`}>
                          <CheckCircle className={`w-4 h-4 ${plan.popular ? 'text-white' : 'text-emerald-500'}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a href="https://wa.me/213549575512?text=Bonjour, je suis intéressé par votre package startup"
                       target="_blank" rel="noopener noreferrer"
                       className={`block text-center py-3 rounded-xl font-semibold transition-colors ${
                         plan.popular
                           ? 'bg-white text-emerald-600 hover:bg-emerald-50'
                           : 'bg-emerald-600 text-white hover:bg-emerald-700'
                       }`}>
                      {plan.cta}
                    </a>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Advantages Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-emerald-600" />
                </div>
                Pourquoi un Fournisseur Unique ?
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {advantages.map((item, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-center p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
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
                      <ChevronDown className={`w-5 h-5 text-emerald-500 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
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
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Technologies que Nous Maîtrisons</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {technologies.map((tech, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-emerald-50 transition-colors">
                    <div className="font-semibold text-gray-900">{tech.name}</div>
                    <div className="text-xs text-emerald-600">{tech.category}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Articles */}
            {relatedBlogs && relatedBlogs.length > 0 && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Articles Connexes</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedBlogs.map((article, i) => (
                    <Link key={i} href={`/blog/${article.slug}`}
                          className="group bg-gray-50 rounded-2xl p-6 hover:bg-emerald-50 transition-colors">
                      <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{article.subtitle}</p>
                      <div className="flex items-center gap-2 mt-4 text-emerald-600 text-sm font-medium">
                        Lire l'article <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {blog?.tags?.map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à Démarrer Votre Aventure Startup ?</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Obtenez un devis personnalisé pour votre projet. Notre équipe vous accompagne de A à Z.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/213549575512?text=Bonjour, je cherche un accompagnement tech complet pour ma startup"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors">
                <MessageCircle className="w-5 h-5" /> Obtenir un Devis Gratuit
              </a>
              <a href="tel:+213549575512"
                 className="inline-flex items-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-800 transition-colors border border-emerald-500">
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
