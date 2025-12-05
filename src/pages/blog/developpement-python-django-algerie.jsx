"use client";
import { useState } from 'react';
import { ArrowLeft, Code, CheckCircle, MessageCircle, Database, Brain, Shield, Zap, ChevronDown, AlertCircle, Server, BarChart3, Cog, Lock, Clock, Users, Star, ArrowRight, FileCode, Cpu, Globe } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';

export default function PythonDjangoAlgerie() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Pourquoi choisir Python et Django pour mon projet ?",
      answer: "Python est le langage le plus polyvalent : #1 en data science, #1 en machine learning, et excellent pour le web. Django offre un framework complet avec ORM, authentification, admin et sécurité intégrés. C'est le choix d'Instagram, Pinterest, Spotify et NASA. Pour les entreprises algériennes, c'est idéal car il permet de démarrer rapidement tout en étant scalable."
    },
    {
      question: "Quelle est la différence entre Django et FastAPI ?",
      answer: "Django est un framework full-stack avec tout inclus (admin, ORM, templates, auth). Idéal pour les applications web complètes. FastAPI est spécialisé pour les APIs REST ultra-performantes avec documentation automatique. Nous utilisons Django pour les projets web complets et FastAPI pour les microservices et APIs qui nécessitent haute performance."
    },
    {
      question: "Pouvez-vous intégrer de l'IA/Machine Learning dans mon application ?",
      answer: "Absolument ! Python excelle en IA avec TensorFlow, PyTorch, et Scikit-learn. Nous intégrons des modèles de prédiction, traitement du langage naturel (NLP), vision par ordinateur, et systèmes de recommandation. Ces modèles sont ensuite exposés via des APIs pour votre application web ou mobile."
    },
    {
      question: "Django est-il sécurisé pour les applications sensibles ?",
      answer: "Django est réputé pour sa sécurité. Il protège nativement contre : injections SQL, XSS, CSRF, clickjacking. Il offre une gestion sécurisée des sessions et mots de passe (PBKDF2/bcrypt). Utilisé par des banques et gouvernements, Django suit les meilleures pratiques OWASP par défaut."
    },
    {
      question: "Combien de temps pour développer une application Django ?",
      answer: "Un MVP (site vitrine avec admin) : 2-3 semaines. Une application métier complète : 6-10 semaines. Une plateforme avec IA/ML intégrée : 3-4 mois. Django accélère le développement grâce à son admin généré automatiquement et ses nombreux packages réutilisables."
    },
    {
      question: "Proposez-vous des services de data science et analyse ?",
      answer: "Oui ! Nous proposons : analyse et visualisation de données avec Pandas/Matplotlib, création de dashboards interactifs, modèles prédictifs personnalisés, automatisation de rapports, et ETL (extraction/transformation de données). Idéal pour les entreprises algériennes qui veulent exploiter leurs données."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Développement Python & Django en Algérie - Data Science & Web",
        "description": "Services de développement Python et Django en Algérie. Applications web robustes, data science, machine learning, APIs FastAPI. Experts Python certifiés.",
        "author": { "@type": "Organization", "name": "Symloop" },
        "publisher": {
          "@type": "Organization",
          "name": "Symloop",
          "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" }
        },
        "datePublished": "2024-01-15",
        "dateModified": "2024-12-01",
        "mainEntityOfPage": "https://symloop.com/blog/developpement-python-django-algerie"
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
        "serviceType": "Développement Python & Django",
        "provider": {
          "@type": "Organization",
          "name": "Symloop",
          "telephone": "+213549575512",
          "address": { "@type": "PostalAddress", "addressCountry": "DZ" }
        },
        "areaServed": ["Algérie", "Tunisie", "Maroc", "MENA"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services Python Django",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Application Django" }, "price": "45000", "priceCurrency": "DZD" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Projet Data Science" }, "price": "90000", "priceCurrency": "DZD" }
          ]
        }
      }
    ]
  };

  const services = [
    { icon: Globe, title: "Applications Web Django", desc: "Sites web et applications métier avec admin automatique, authentification et ORM puissant.", features: ["Admin généré", "Auth intégrée", "ORM performant"] },
    { icon: Zap, title: "APIs FastAPI", desc: "APIs REST ultra-rapides avec validation automatique, documentation Swagger intégrée.", features: ["Async/await", "Auto-validation", "OpenAPI docs"] },
    { icon: Brain, title: "Data Science & Analytics", desc: "Analyse de données, visualisations, dashboards et rapports automatisés.", features: ["Pandas/NumPy", "Dashboards", "ETL pipelines"] },
    { icon: Cpu, title: "Machine Learning & IA", desc: "Modèles prédictifs, NLP, vision par ordinateur et systèmes de recommandation.", features: ["TensorFlow", "Scikit-learn", "PyTorch"] },
    { icon: Cog, title: "Automatisation & Scripts", desc: "Scripts d'automatisation, web scraping éthique, traitements batch.", features: ["Selenium", "Scrapy", "Celery"] },
    { icon: Database, title: "ETL & Data Pipelines", desc: "Extraction, transformation et chargement de données. Intégrations multi-sources.", features: ["Apache Airflow", "Luigi", "dbt"] }
  ];

  const pricingPlans = [
    {
      name: "Django Starter",
      price: "45,000",
      currency: "DA",
      description: "Application web Django pour PME",
      features: ["Site avec 5-10 pages", "Admin personnalisé", "Authentification users", "Base PostgreSQL", "Formulaires dynamiques", "Responsive design", "Déploiement inclus"],
      popular: false,
      cta: "Démarrer"
    },
    {
      name: "Django Pro",
      price: "90,000",
      currency: "DA",
      description: "Application métier complète",
      features: ["Application complète", "API REST intégrée", "Multi-utilisateurs/rôles", "Dashboard analytics", "Export PDF/Excel", "Celery tasks async", "Tests automatisés", "CI/CD pipeline"],
      popular: true,
      cta: "Choisir Pro"
    },
    {
      name: "Data & IA",
      price: "Sur devis",
      currency: "",
      description: "Projets data science et machine learning",
      features: ["Analyse exploratoire", "Modèles ML personnalisés", "Dashboards interactifs", "Intégration API ML", "Formation équipes", "Maintenance modèles", "Support dédié", "Évolutions continues"],
      popular: false,
      cta: "Nous Contacter"
    }
  ];

  const stats = [
    { value: "#1", label: "Langage Data Science" },
    { value: "40+", label: "Projets Python livrés" },
    { value: "Instagram", label: "Utilise Django" },
    { value: "98%", label: "Clients satisfaits" }
  ];

  const technologies = [
    { name: "Django", desc: "Framework web" },
    { name: "FastAPI", desc: "APIs modernes" },
    { name: "Flask", desc: "Micro-framework" },
    { name: "Pandas", desc: "Data analysis" },
    { name: "NumPy", desc: "Calcul scientifique" },
    { name: "Scikit-learn", desc: "Machine Learning" },
    { name: "TensorFlow", desc: "Deep Learning" },
    { name: "Celery", desc: "Tasks async" },
    { name: "PostgreSQL", desc: "Base de données" },
    { name: "Redis", desc: "Cache & queues" },
    { name: "Docker", desc: "Conteneurisation" },
    { name: "Pytest", desc: "Testing" }
  ];

  const relatedArticles = [
    { title: "Développement Node.js Backend", href: "/blog/developpement-nodejs-backend-algerie", tag: "Backend" },
    { title: "DevOps & Déploiement Cloud", href: "/blog/devops-deployment-algerie-2024", tag: "DevOps" },
    { title: "API & Intégration Algérie", href: "/blog/developpement-api-integration-algerie", tag: "API" }
  ];

  return (
    <>
      <Head>
        <title>Développement Python Django Algérie | Data Science & Web | Symloop</title>
        <meta name="description" content="Expert Python Django en Algérie. Applications web robustes, data science, machine learning, APIs FastAPI. TensorFlow, Pandas, Scikit-learn. Devis gratuit." />
        <meta name="keywords" content="python algérie, django algérie, développement web python, data science algérie, machine learning, fastapi, développeur python" />
        <link rel="canonical" href="https://symloop.com/blog/developpement-python-django-algerie" />
        <meta property="og:title" content="Développement Python Django Algérie | Data Science & IA" />
        <meta property="og:description" content="Services Python Django en Algérie. Applications web, data science, machine learning. FastAPI, TensorFlow, Pandas." />
        <meta property="og:url" content="https://symloop.com/blog/developpement-python-django-algerie" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-900 via-amber-800 to-yellow-900 text-white py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-yellow-300 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Retour au blog
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-yellow-500 text-black px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Code className="w-4 h-4" /> Python
                </span>
                <span className="bg-yellow-700/50 text-yellow-200 px-4 py-1.5 rounded-full text-sm">Django Expert</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Développement <span className="text-yellow-400">Python & Django</span> en Algérie
              </h1>
              <p className="text-xl text-yellow-100 mb-8 max-w-3xl">
                Applications web robustes, data science, machine learning et APIs performantes.
                La puissance de Python pour transformer vos données en valeur.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/213549575512?text=Bonjour, je souhaite développer un projet Python/Django"
                   target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-white text-yellow-700 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-50 transition-colors">
                  <MessageCircle className="w-5 h-5" /> Devis Gratuit
                </a>
                <a href="tel:+213549575512" className="inline-flex items-center gap-2 border-2 border-yellow-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-yellow-800 transition-colors">
                  +213 549 57 55 12
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-yellow-50 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">{stat.value}</div>
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
                <span className="text-yellow-600 font-semibold">Python</span> domine le monde de la programmation : #1 en data science, #1 en machine learning, et un excellent choix pour le développement web.
                Avec <span className="text-yellow-600 font-semibold">Django</span>, le framework utilisé par Instagram, Pinterest et Spotify, nous créons des applications web puissantes et sécurisées.
                Chez Symloop, nos experts Python accompagnent les entreprises algériennes dans leur transformation digitale.
              </p>
            </div>

            {/* Why Python */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 rounded-r-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Pourquoi Python ?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { icon: BarChart3, title: "#1 Data Science", desc: "Pandas, NumPy, Matplotlib" },
                    { icon: Brain, title: "#1 Machine Learning", desc: "TensorFlow, PyTorch, Sklearn" },
                    { icon: Shield, title: "Sécurité Intégrée", desc: "Django protège nativement" },
                    { icon: Zap, title: "Développement Rapide", desc: "Productivité maximale" }
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <item.icon className="w-6 h-6 text-yellow-600" />
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Services Python & Django</h2>
              <p className="text-gray-600 mb-8">De l'application web à l'intelligence artificielle</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                    className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-yellow-200 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((f, j) => (
                        <span key={j} className="bg-yellow-50 text-yellow-700 px-2 py-1 rounded text-xs">{f}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CTA Mid */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4">Un projet Python ou Data Science ?</h2>
                <p className="text-yellow-100 mb-6">Discutons de vos besoins et obtenez un devis gratuit sous 24h.</p>
                <a href="https://wa.me/213549575512?text=Bonjour, j'ai un projet Python/Data Science à discuter"
                   target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-white text-yellow-600 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-50 transition-colors">
                  <MessageCircle className="w-5 h-5" /> Discuter sur WhatsApp
                </a>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Tarifs Python & Django</h2>
              <p className="text-gray-600 text-center mb-8">Des forfaits compétitifs pour les entreprises algériennes</p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif final dépend de la complexité du projet, des fonctionnalités et des données à traiter.
                  <strong> Contactez-nous pour un devis gratuit et personnalisé.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                    className={`relative bg-white rounded-2xl p-6 ${plan.popular ? 'border-2 border-yellow-500 shadow-xl' : 'border border-gray-200'}`}>
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Populaire
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-yellow-600">{plan.price}</span>
                      {plan.currency && <span className="text-gray-500 ml-1">{plan.currency}</span>}
                    </div>
                    <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={`https://wa.me/213549575512?text=Bonjour, je suis intéressé par le forfait ${plan.name} Python`}
                       target="_blank" rel="noopener noreferrer"
                       className={`block text-center py-3 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-yellow-500 text-white hover:bg-yellow-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
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
                  <div key={i} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-yellow-50 transition-colors">
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
                  <Link key={i} href={article.href} className="group block bg-gray-50 rounded-xl p-6 hover:bg-yellow-50 transition-colors">
                    <span className="text-xs font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded">{article.tag}</span>
                    <h3 className="font-semibold text-gray-900 mt-3 group-hover:text-yellow-600 transition-colors">{article.title}</h3>
                    <span className="inline-flex items-center gap-1 text-sm text-yellow-600 mt-2">
                      Lire <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {["Python", "Django", "FastAPI", "Data Science", "Machine Learning", "TensorFlow", "Pandas", "PostgreSQL", "Algérie"].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à Exploiter la Puissance de Python ?</h2>
            <p className="text-yellow-100 mb-8 text-lg">Applications Django robustes et solutions data science sur mesure. Devis gratuit sous 24h.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/213549575512?text=Bonjour, je souhaite un devis pour un projet Python/Django"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-white text-yellow-600 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-50 transition-colors">
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
