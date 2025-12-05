"use client";
import { useState } from 'react';
import { ArrowLeft, Plug, CheckCircle, MessageCircle, Globe, Database, Zap, Shield, ChevronDown, AlertCircle, Server, Code, Lock, Clock, ArrowRight, RefreshCw, Settings, FileJson, Webhook, DollarSign, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug } from '../../data/blogs';

export default function APIIntegrationAlgerie() {
  const blog = getBlogBySlug('developpement-api-integration-algerie');
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Qu'est-ce qu'une API et pourquoi en ai-je besoin ?",
      answer: "Une API (Application Programming Interface) permet à vos applications de communiquer entre elles. Par exemple, intégrer votre site e-commerce avec SATIM/CIB pour les paiements, connecter votre CRM à vos emails, ou synchroniser votre stock avec votre comptabilité. Les APIs automatisent les échanges de données et éliminent les tâches manuelles."
    },
    {
      question: "Quelle différence entre API REST et GraphQL ?",
      answer: "REST est plus simple et standard, idéal pour la plupart des projets. GraphQL est plus flexible et permet de récupérer exactement les données nécessaires en une seule requête, parfait pour les applications mobiles ou les interfaces complexes. Nous vous conseillons selon vos besoins spécifiques."
    },
    {
      question: "Combien coûte le développement d'une API ?",
      answer: "Une API simple (CRUD basique) démarre à 35 000 DA. Une API complexe avec authentification, webhooks et intégrations tierces à partir de 80 000 DA. Les projets enterprise avec architecture microservices sont sur devis selon la complexité."
    },
    {
      question: "Pouvez-vous intégrer des APIs tierces existantes ?",
      answer: "Absolument. Nous intégrons toutes les APIs populaires : SATIM/CIB et Dahabia pour les paiements, Google Maps, Firebase, Twilio/Vonage pour les SMS, SendGrid pour les emails, réseaux sociaux, ERP, et bien d'autres. Nous créons aussi des connecteurs sur mesure."
    },
    {
      question: "Comment sécurisez-vous les APIs ?",
      answer: "Nous implémentons OAuth 2.0, JWT pour l'authentification, rate limiting contre les abus, validation des entrées, chiffrement HTTPS, et logging des accès. Pour les données sensibles, nous ajoutons le chiffrement AES et la conformité RGPD."
    },
    {
      question: "Quelle documentation fournissez-vous ?",
      answer: "Nous livrons une documentation complète : Swagger/OpenAPI pour tester les endpoints, guides d'intégration, exemples de code (Python, JavaScript, PHP), postman collections, et support technique pour vos développeurs."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Développement API et Intégration Systèmes en Algérie",
        "description": "Services de développement d'APIs REST, GraphQL, webhooks et intégration de systèmes en Algérie. Connectez vos applications avec des APIs robustes et sécurisées.",
        "image": "https://symloop.com/images/blog/api-development-algerie.jpg",
        "datePublished": "2024-02-01",
        "dateModified": "2024-12-01",
        "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
        "publisher": { "@type": "Organization", "name": "Symloop", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
        "mainEntityOfPage": "https://symloop.com/blog/developpement-api-integration-algerie"
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
        "serviceType": "Développement API",
        "provider": { "@type": "Organization", "name": "Symloop", "telephone": "+213549575512" },
        "areaServed": ["DZ", "TN", "MA", "MENA"]
      }
    ]
  };

  const services = [
    {
      icon: Globe,
      title: "API REST",
      desc: "APIs RESTful standards, documentées et versionnées pour une intégration facile",
      features: ["Endpoints CRUD complets", "Documentation Swagger/OpenAPI", "Versioning API (v1, v2...)", "Pagination et filtres", "Codes HTTP standards"]
    },
    {
      icon: Database,
      title: "GraphQL",
      desc: "APIs flexibles avec requêtes optimisées pour performances maximales",
      features: ["Requêtes sur mesure", "Moins de requêtes réseau", "Typage fort", "Subscriptions temps réel", "Introspection schema"]
    },
    {
      icon: Webhook,
      title: "Webhooks",
      desc: "Notifications temps réel pour événements et automatisation",
      features: ["Événements personnalisés", "Retry automatique", "Signatures sécurisées", "Logs et debugging", "Multiple endpoints"]
    },
    {
      icon: Lock,
      title: "API Security",
      desc: "Sécurisation complète avec authentification et protection avancée",
      features: ["OAuth 2.0 / JWT", "Rate limiting", "Encryption TLS/AES", "Validation entrées", "Audit logs"]
    },
    {
      icon: RefreshCw,
      title: "Intégration Systèmes",
      desc: "Connectez tous vos systèmes existants de manière fluide",
      features: ["ERP / CRM / Comptabilité", "Synchronisation bidirectionnelle", "Mapping de données", "Gestion des erreurs", "Monitoring"]
    },
    {
      icon: Settings,
      title: "API Gateway",
      desc: "Point d'entrée unique pour gérer toutes vos APIs",
      features: ["Routage intelligent", "Load balancing", "Caching", "Analytics", "Throttling"]
    }
  ];

  const integrations = [
    { name: "SATIM/CIB", category: "Paiement", desc: "Paiement par carte bancaire algérienne" },
    { name: "Dahabia", category: "Paiement", desc: "Paiement électronique Algérie Poste" },
    { name: "Stripe", category: "Paiement", desc: "Paiements internationaux" },
    { name: "Firebase", category: "Backend", desc: "Auth, database, notifications" },
    { name: "Twilio", category: "Communication", desc: "SMS et appels vocaux" },
    { name: "SendGrid", category: "Email", desc: "Emails transactionnels" },
    { name: "Google Maps", category: "Cartographie", desc: "Cartes et géolocalisation" },
    { name: "WhatsApp Business", category: "Messaging", desc: "API officielle WhatsApp" },
    { name: "Algérie Poste", category: "Logistique", desc: "Suivi colis et livraison" },
    { name: "SAP / Odoo", category: "ERP", desc: "Intégration gestion entreprise" },
    { name: "Salesforce", category: "CRM", desc: "Gestion relation client" },
    { name: "Zapier", category: "Automation", desc: "Connexion 5000+ apps" }
  ];

  const pricingPlans = [
    {
      name: "API Simple",
      price: "35 000",
      unit: "DA",
      description: "API CRUD basique",
      features: [
        "Endpoints CRUD (Create, Read, Update, Delete)",
        "Authentification JWT basique",
        "Documentation Swagger",
        "Validation des données",
        "Hébergement 3 mois inclus",
        "Support email"
      ],
      cta: "Commencer",
      popular: false
    },
    {
      name: "API Pro",
      price: "80 000",
      unit: "DA",
      description: "API avec intégrations",
      features: [
        "Tout API Simple +",
        "OAuth 2.0 complet",
        "Webhooks personnalisés",
        "2-3 intégrations tierces",
        "Rate limiting avancé",
        "Monitoring et alertes",
        "Support 6 mois"
      ],
      cta: "Choisir Pro",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      unit: "",
      description: "Architecture microservices",
      features: [
        "Tout API Pro +",
        "Architecture microservices",
        "API Gateway",
        "Intégrations illimitées",
        "CI/CD et tests auto",
        "SLA garanti 99.9%",
        "Support prioritaire 24/7"
      ],
      cta: "Nous contacter",
      popular: false
    }
  ];

  const stats = [
    { value: "150+", label: "APIs développées" },
    { value: "50+", label: "Intégrations tierces" },
    { value: "99.9%", label: "Uptime garanti" },
    { value: "24/7", label: "Monitoring" }
  ];

  const useCases = [
    { title: "E-commerce", desc: "Intégration paiement CIB/Dahabia, gestion stocks, livraison" },
    { title: "FinTech", desc: "APIs bancaires, transactions sécurisées, KYC" },
    { title: "Santé", desc: "Échange données patients, interopérabilité systèmes" },
    { title: "Logistique", desc: "Tracking temps réel, synchronisation flotte" },
    { title: "EdTech", desc: "Intégration LMS, authentication unique SSO" },
    { title: "IoT", desc: "APIs capteurs, données temps réel, dashboard" }
  ];

  return (
    <>
      <Head>
        <title>Développement API Algérie | REST, GraphQL, Intégrations | Symloop</title>
        <meta name="description" content="Services de développement d'APIs REST, GraphQL et intégration de systèmes en Algérie. APIs sécurisées, webhooks, intégration SATIM/CIB, Firebase, et plus. À partir de 35 000 DA." />
        <meta name="keywords" content="développement api algérie, api rest algérie, graphql algérie, intégration systèmes, webhooks, satim api, cib api, développeur api algérie" />
        <link rel="canonical" href="https://symloop.com/blog/developpement-api-integration-algerie" />
        <meta property="og:title" content="Développement API Algérie | REST, GraphQL, Intégrations" />
        <meta property="og:description" content="APIs REST, GraphQL et intégrations sur mesure pour entreprises algériennes. Sécurité, performance, documentation complète." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/developpement-api-integration-algerie" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-black text-white py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8">
                <ArrowLeft className="w-4 h-4" /> Retour au blog
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-violet-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Plug className="w-4 h-4" />API & Intégration
                </span>
                <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">Guide 2024</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Développement <span className="text-violet-400">API</span> et Intégrations en Algérie
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                APIs REST, GraphQL, webhooks et intégration de systèmes. Connectez vos applications,
                automatisez vos processus et créez des écosystèmes digitaux performants.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-gray-900/50 rounded-xl">
                    <div className="text-2xl font-bold text-violet-400">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                Les <strong className="text-violet-600">APIs</strong> sont le cœur des applications modernes.
                Elles permettent à vos systèmes de communiquer, d'échanger des données en temps réel,
                et d'automatiser des processus critiques. Chez <strong>Symloop</strong>, nous développons
                des APIs robustes, sécurisées et bien documentées pour les entreprises algériennes et de la région MENA.
              </p>
            </div>

            {/* Services API */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Code className="w-6 h-6 text-violet-600" />
                Nos Services API
              </h2>
              <div className="space-y-6">
                {services.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-violet-200 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-7 h-7 text-violet-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, j) => (
                            <span key={j} className="bg-violet-50 text-violet-700 text-xs px-3 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Integrations */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Plug className="w-6 h-6 text-violet-600" />
                Intégrations Populaires
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {integrations.map((integration, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 hover:bg-violet-50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-gray-900">{integration.name}</span>
                      <span className="text-xs bg-violet-100 text-violet-700 px-2 py-1 rounded-full">{integration.category}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{integration.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Use Cases */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-violet-600" />
                Cas d'Usage par Secteur
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {useCases.map((useCase, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-violet-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-violet-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900">{useCase.title}</h3>
                      <p className="text-gray-600 text-sm">{useCase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Mid */}
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white text-center mb-16">
              <h3 className="text-2xl font-bold mb-3">Besoin d'une API ?</h3>
              <p className="text-violet-100 mb-6">Discutons de votre projet d'intégration</p>
              <a
                href="https://wa.me/213549575512?text=Bonjour, j'ai besoin de développer une API"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-violet-600 px-6 py-3 rounded-xl font-semibold hover:bg-violet-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Discuter sur WhatsApp
              </a>
            </div>

            {/* Pricing */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-violet-600" />
                Tarifs Développement API
              </h2>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif exact dépend de la complexité de l'API,
                  du nombre d'endpoints, des intégrations tierces et des exigences de sécurité.
                  <strong> Contactez-nous pour un devis gratuit et personnalisé.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, i) => (
                  <div key={i} className={`relative bg-white rounded-2xl p-6 border-2 ${plan.popular ? 'border-violet-500 shadow-xl' : 'border-gray-100'}`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full">POPULAIRE</span>
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                      {plan.unit && <span className="text-gray-500 ml-1">{plan.unit}</span>}
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/213549575512?text=Bonjour, je suis intéressé par le pack ${plan.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-center py-3 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-violet-600 text-white hover:bg-violet-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-violet-600" />
                Questions Fréquentes - Développement API
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && (
                      <div className="p-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Technologies */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies Utilisées</h2>
              <div className="flex flex-wrap gap-3">
                {["Node.js", "Express", "NestJS", "Python", "FastAPI", "Django REST", "GraphQL", "Apollo", "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS Lambda", "Swagger", "Postman"].map((tech, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">{tech}</span>
                ))}
              </div>
            </section>

            {/* Related */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles Connexes</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "DevOps et Déploiement en Algérie", href: "/blog/devops-deployment-algerie-2024" },
                  { title: "Développement Backend Node.js", href: "/blog/developpement-nodejs-backend-algerie" },
                  { title: "Cybersécurité en Algérie", href: "/blog/cybersecurite-algerie-2024" },
                  { title: "Cloud Computing Algérie", href: "/blog/cloud-computing-algerie-2024" }
                ].map((article, i) => (
                  <Link key={i} href={article.href} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-violet-50 transition-colors group">
                    <span className="font-medium text-gray-900 group-hover:text-violet-600">{article.title}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-violet-600" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {["api rest", "graphql", "webhooks", "intégration systèmes", "satim api", "développeur api algérie", "oauth2", "jwt"].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Connectez Vos Systèmes</h2>
            <p className="text-violet-100 mb-8 max-w-2xl mx-auto">
              APIs robustes, intégrations sur mesure, documentation complète.
              Automatisez vos processus et créez un écosystème digital performant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/213549575512?text=Bonjour, j'ai un projet API à discuter" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-white text-violet-600 px-8 py-4 rounded-xl font-semibold hover:bg-violet-50 transition-colors">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
              <a href="tel:+213549575512" className="inline-flex items-center justify-center gap-2 bg-violet-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-violet-800 transition-colors">
                <span>📞</span> +213 549 57 55 12
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
