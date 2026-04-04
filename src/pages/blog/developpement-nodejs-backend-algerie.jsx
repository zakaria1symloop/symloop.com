"use client";
import { useState } from 'react';
import { ArrowLeft, Server, CheckCircle, MessageCircle, Zap, Database, Globe, Shield, ChevronDown, AlertCircle, Code, Layers, Cpu, Lock, Clock, Users, Star, ArrowRight, GitBranch, Box, Cloud } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';

export default function NodejsBackendAlgerie() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Pourquoi choisir Node.js pour mon backend en Algérie ?",
      answer: "Node.js offre des performances exceptionnelles grâce à son I/O non-bloquant, idéal pour les applications temps réel et les APIs à fort trafic. Son écosystème NPM avec plus d'1 million de packages accélère le développement. Symloop est spécialisé en Node.js et accompagne les entreprises algériennes dans leurs projets backend. Contactez-nous au +213 549 575 512 pour en discuter."
    },
    {
      question: "Quelle est la différence entre Express.js et NestJS ?",
      answer: "Express.js est minimaliste et flexible, parfait pour les petites APIs et prototypes rapides. NestJS est un framework complet avec TypeScript, injection de dépendances et architecture modulaire, idéal pour les grandes applications d'entreprise. Symloop recommande NestJS pour les projets complexes et Express pour les MVPs. Appelez le +213 549 575 512 pour un conseil adapté."
    },
    {
      question: "Comment sécurisez-vous les APIs Node.js ?",
      answer: "Chez Symloop, nous implémentons plusieurs couches de sécurité : authentification JWT/OAuth2, rate limiting, validation des entrées avec Joi/Zod, protection CORS, headers de sécurité (Helmet), chiffrement des données sensibles, et audit de sécurité régulier. Toutes nos APIs suivent les meilleures pratiques OWASP. Contactez-nous au +213 549 575 512 pour un audit sécurité."
    },
    {
      question: "Node.js peut-il gérer des millions de requêtes ?",
      answer: "Absolument ! Node.js est utilisé par Netflix, PayPal, LinkedIn et Uber pour gérer des milliards de requêtes. Chez Symloop, nous construisons des backends qui scalent horizontalement sans limite grâce à une architecture microservices, du load balancing, du caching Redis et une base de données optimisée. Appelez le +213 549 575 512 pour discuter de votre architecture."
    },
    {
      question: "Proposez-vous la maintenance et le support ?",
      answer: "Oui, Symloop offre des contrats de maintenance incluant : monitoring 24/7, mises à jour de sécurité, optimisation des performances, support technique réactif, et évolutions fonctionnelles. Le support peut être en français ou en arabe selon vos préférences. Contactez-nous au +213 549 575 512 pour connaître nos offres de maintenance."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Développement Node.js Backend en Algérie - APIs Performantes",
        "description": "Services de développement backend Node.js en Algérie. APIs REST, GraphQL, microservices et applications temps réel par des experts JavaScript.",
        "author": { "@type": "Organization", "name": "Symloop" },
        "publisher": {
          "@type": "Organization",
          "name": "Symloop",
          "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" }
        },
        "datePublished": "2024-01-15",
        "dateModified": "2024-12-01",
        "mainEntityOfPage": "https://symloop.com/blog/developpement-nodejs-backend-algerie"
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
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Développement Node.js Backend Algérie", "item": "https://symloop.com/blog/developpement-nodejs-backend-algerie" }
        ]
      },
      {
        "@type": "WebPage",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".en-bref", "h1", ".prose"]
        },
        "url": "https://symloop.com/blog/developpement-nodejs-backend-algerie"
      },
      {
        "@type": "Service",
        "serviceType": "Développement Backend Node.js",
        "provider": {
          "@type": "Organization",
          "name": "Symloop",
          "telephone": "+213549575512",
          "address": { "@type": "PostalAddress", "addressCountry": "DZ" }
        },
        "areaServed": ["Algérie", "Tunisie", "Maroc", "MENA"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services Backend Node.js",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "API REST/GraphQL" }, "price": "35000", "priceCurrency": "DZD" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Backend Complet" }, "price": "80000", "priceCurrency": "DZD" }
          ]
        }
      }
    ]
  };

  const services = [
    { icon: Globe, title: "APIs REST & GraphQL", desc: "APIs documentées avec Swagger/OpenAPI, versionnées et sécurisées. Support REST et GraphQL selon vos besoins.", features: ["Documentation auto", "Versioning", "Rate limiting"] },
    { icon: Layers, title: "Architecture Microservices", desc: "Systèmes distribués avec communication par messages, résilients et facilement scalables.", features: ["Event-driven", "Service mesh", "Circuit breaker"] },
    { icon: Zap, title: "Applications Temps Réel", desc: "WebSockets, Server-Sent Events pour chat, notifications push, tableaux de bord live.", features: ["Socket.io", "Redis Pub/Sub", "Live updates"] },
    { icon: Lock, title: "Authentification & Sécurité", desc: "JWT, OAuth2, SSO, gestion fine des permissions et rôles utilisateurs.", features: ["Multi-factor auth", "RBAC/ABAC", "Audit logs"] },
    { icon: Database, title: "Bases de Données", desc: "PostgreSQL, MongoDB, Redis. Design optimisé, migrations, réplication et backups.", features: ["ORM Prisma/TypeORM", "Indexation", "Sharding"] },
    { icon: Cloud, title: "Intégrations Cloud", desc: "Déploiement AWS, GCP, Azure. Serverless avec Lambda/Cloud Functions.", features: ["Auto-scaling", "CDN", "Monitoring"] }
  ];

  const pricingPlans = [
    {
      name: "API Simple",
      price: "35,000",
      currency: "DA",
      description: "API REST basique pour MVP et petits projets",
      features: ["5-10 endpoints CRUD", "Authentification JWT", "Base PostgreSQL/MongoDB", "Documentation Swagger", "Validation des données", "Tests unitaires", "Déploiement inclus"],
      popular: false,
      cta: "Démarrer"
    },
    {
      name: "Backend Pro",
      price: "80,000",
      currency: "DA",
      description: "Backend complet pour applications métier",
      features: ["20+ endpoints", "Auth OAuth2 + rôles", "API REST + GraphQL", "Caching Redis", "File upload S3", "Webhooks", "Tests E2E", "CI/CD pipeline", "Monitoring"],
      popular: true,
      cta: "Choisir Pro"
    },
    {
      name: "Microservices",
      price: "Sur devis",
      currency: "",
      description: "Architecture distribuée pour grandes entreprises",
      features: ["Architecture microservices", "Message queues (RabbitMQ)", "Service discovery", "API Gateway", "Load balancing", "Kubernetes ready", "Haute disponibilité", "Support 24/7", "SLA garanti"],
      popular: false,
      cta: "Nous Contacter"
    }
  ];

  const stats = [
    { value: "50+", label: "APIs développées" },
    { value: "10M+", label: "Requêtes/jour gérées" },
    { value: "99.9%", label: "Uptime garanti" },
    { value: "24h", label: "Support réactif" }
  ];

  const technologies = [
    { name: "Express.js", desc: "Framework minimaliste" },
    { name: "NestJS", desc: "Framework entreprise" },
    { name: "Fastify", desc: "Ultra performant" },
    { name: "PostgreSQL", desc: "Base relationnelle" },
    { name: "MongoDB", desc: "NoSQL flexible" },
    { name: "Redis", desc: "Cache & sessions" },
    { name: "RabbitMQ", desc: "Message broker" },
    { name: "Docker", desc: "Conteneurisation" },
    { name: "Prisma", desc: "ORM moderne" },
    { name: "TypeScript", desc: "Typage statique" },
    { name: "Jest", desc: "Testing" },
    { name: "Swagger", desc: "Documentation API" }
  ];

  const relatedArticles = [
    { title: "Développement API & Intégration", href: "/blog/developpement-api-integration-algerie", tag: "API" },
    { title: "DevOps & Déploiement Cloud", href: "/blog/devops-deployment-algerie-2024", tag: "DevOps" },
    { title: "Développement Python Django", href: "/blog/developpement-python-django-algerie", tag: "Backend" },
    { title: "DevOps & Développement Logiciel Algérie 2026", href: "/blog/devops-developpement-logiciel-algerie-2026", tag: "DevOps" },
    { title: "Solutions Informatiques Algérie 2026", href: "/blog/solutions-informatiques-algerie-2026", tag: "Solutions" }
  ];

  return (
    <>
      <Head>
        <title>Développement Node.js Backend Algérie | APIs REST & Microservices | Symloop</title>
        <meta name="description" content="Expert développement Node.js en Algérie. APIs REST, GraphQL, microservices, applications temps réel. Express, NestJS, PostgreSQL, MongoDB. Devis gratuit." />
        <meta name="keywords" content="nodejs algérie, développement backend algérie, api rest algérie, microservices, express.js, nestjs, graphql algérie, développeur node.js" />
        <link rel="canonical" href="https://symloop.com/blog/developpement-nodejs-backend-algerie" />
        <meta property="og:title" content="Développement Node.js Backend Algérie | APIs Performantes" />
        <meta property="og:description" content="Services de développement backend Node.js en Algérie. APIs REST, GraphQL, microservices. Express, NestJS, PostgreSQL." />
        <meta property="og:url" content="https://symloop.com/blog/developpement-nodejs-backend-algerie" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-green-300 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Retour au blog
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-green-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Server className="w-4 h-4" /> Backend
                </span>
                <span className="bg-green-700/50 text-green-200 px-4 py-1.5 rounded-full text-sm">Node.js Expert</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Développement <span className="text-green-400">Node.js</span> Backend en Algérie
              </h1>
              <p className="text-xl text-green-100 mb-8 max-w-3xl">
                APIs REST & GraphQL performantes, microservices scalables et applications temps réel.
                L'expertise JavaScript full-stack pour vos projets ambitieux.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/213549575512?text=Bonjour, je souhaite développer un backend Node.js"
                   target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors">
                  <MessageCircle className="w-5 h-5" /> Devis Gratuit
                </a>
                <a href="tel:+213549575512" className="inline-flex items-center gap-2 border-2 border-green-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-800 transition-colors">
                  +213 549 57 55 12
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* En bref - LLM Optimized Summary */}
        <section className="en-bref bg-green-50 border-l-4 border-green-500 py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-gray-800 font-medium">
              <strong>En bref :</strong> Symloop développe des backends Node.js et API pour les entreprises algériennes. REST, GraphQL, microservices, temps réel. Basé à Sétif. Contact : +213 549 575 512.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-green-50 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="text-3xl font-bold text-green-600">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-16">
              <p className="text-xl text-gray-600 leading-relaxed">
                <span className="text-green-600 font-semibold">Node.js</span> est devenu la plateforme incontournable pour le développement backend moderne.
                Utilisé par <span className="text-green-600 font-semibold">Netflix, PayPal, LinkedIn et Uber</span>,
                Node.js offre des performances exceptionnelles grâce à son architecture événementielle non-bloquante.
                Chez Symloop, nous maîtrisons l'écosystème Node.js pour créer des backends robustes et scalables adaptés au marché algérien.
              </p>
            </div>

            {/* Why Node.js */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-r-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Pourquoi Choisir Node.js ?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { icon: Zap, title: "I/O Non-Bloquant", desc: "Gère des milliers de connexions simultanées" },
                    { icon: Box, title: "NPM Ecosystem", desc: "1M+ packages prêts à l'emploi" },
                    { icon: Code, title: "JavaScript Full-Stack", desc: "Un seul langage front et back" },
                    { icon: Cpu, title: "Performance", desc: "Moteur V8 ultra-rapide de Google" }
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <item.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Services */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Services Backend Node.js</h2>
              <p className="text-gray-600 mb-8">Des solutions complètes pour tous vos besoins en développement serveur</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                    className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-green-200 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((f, j) => (
                        <span key={j} className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs">{f}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CTA Mid */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4">Vous avez un projet backend ?</h2>
                <p className="text-green-100 mb-6">Discutons de votre architecture et obtenez un devis gratuit sous 24h.</p>
                <a href="https://wa.me/213549575512?text=Bonjour, j'ai un projet backend Node.js à discuter"
                   target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors">
                  <MessageCircle className="w-5 h-5" /> Discuter sur WhatsApp
                </a>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Tarifs Développement Node.js</h2>
              <p className="text-gray-600 text-center mb-8">Des forfaits adaptés à tous les budgets algériens</p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif final dépend de la complexité de l'API, du nombre d'endpoints, et des intégrations requises.
                  <strong> Contactez-nous pour un devis gratuit et personnalisé.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                    className={`relative bg-white rounded-2xl p-6 ${plan.popular ? 'border-2 border-green-500 shadow-xl' : 'border border-gray-200'}`}>
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Populaire
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-green-600">{plan.price}</span>
                      {plan.currency && <span className="text-gray-500 ml-1">{plan.currency}</span>}
                    </div>
                    <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={`https://wa.me/213549575512?text=Bonjour, je suis intéressé par le forfait ${plan.name} Node.js`}
                       target="_blank" rel="noopener noreferrer"
                       className={`block text-center py-3 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                      {plan.cta}
                    </a>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Technologies */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies & Outils</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {technologies.map((tech, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-green-50 transition-colors">
                    <div className="font-semibold text-gray-900">{tech.name}</div>
                    <div className="text-xs text-gray-500">{tech.desc}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions Fréquentes</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors">
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Related Articles */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles Connexes</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((article, i) => (
                  <Link key={i} href={article.href} className="group block bg-gray-50 rounded-xl p-6 hover:bg-green-50 transition-colors">
                    <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">{article.tag}</span>
                    <h3 className="font-semibold text-gray-900 mt-3 group-hover:text-green-600 transition-colors">{article.title}</h3>
                    <span className="inline-flex items-center gap-1 text-sm text-green-600 mt-2">
                      Lire <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {["Node.js", "Backend", "API REST", "GraphQL", "Express.js", "NestJS", "Microservices", "PostgreSQL", "MongoDB", "Algérie"].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à Construire un Backend Performant ?</h2>
            <p className="text-green-100 mb-8 text-lg">APIs robustes et scalables pour votre application. Devis gratuit sous 24h.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/213549575512?text=Bonjour, je souhaite un devis pour un développement backend Node.js"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors">
                <MessageCircle className="w-5 h-5" /> Demander un Devis
              </a>
              <a href="tel:+213549575512" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Appeler Maintenant
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
