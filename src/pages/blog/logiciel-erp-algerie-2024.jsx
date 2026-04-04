"use client";
import { Calendar, Clock, User, ArrowLeft, Server, Database, Settings, FileText, ShoppingCart, Users, CheckCircle, Star, TrendingUp, Building, Calculator, MessageCircle, BarChart3, Package, DollarSign, Shield } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug, getRelatedBlogs } from '../../data/blogs';

export default function LogicielERPAlgerie() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const blog = getBlogBySlug('logiciel-erp-algerie-2024');
  const relatedBlogs = getRelatedBlogs('logiciel-erp-algerie-2024', 3);

  return (
    <>
      <Head>
        <title>{blog?.metaTitle || "ERP Algérie 2024 | Sage, Odoo, SAP | Comparatif & Prix | Symloop"}</title>
        <meta name="description" content={blog?.metaDescription} />
        <meta name="keywords" content="erp algérie, sage algérie, odoo algérie, logiciel gestion, logiciel comptabilité algérie, sap algérie" />
        <link rel="canonical" href="https://symloop.com/blog/logiciel-erp-algerie-2024" />

        <meta property="og:title" content={blog?.metaTitle} />
        <meta property="og:description" content={blog?.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/logiciel-erp-algerie-2024" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": blog?.title,
            "description": blog?.metaDescription,
            "author": { "@type": "Organization", "name": "Symloop" },
            "publisher": { "@type": "Organization", "name": "Symloop" },
            "datePublished": blog?.date,
            "mainEntityOfPage": "https://symloop.com/blog/logiciel-erp-algerie-2024"
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quel est le meilleur ERP pour une entreprise en Algérie ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le meilleur ERP dépend de votre taille et budget. Odoo est recommandé pour les PME (gratuit en Community), Sage 100 domine la comptabilité algérienne, et SAP convient aux grands groupes. Un ERP sur mesure développé par Symloop offre la meilleure adéquation métier sans coûts de licence récurrents."
                }
              },
              {
                "@type": "Question",
                "name": "Combien coûte un ERP en Algérie ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Les prix varient selon la solution : Odoo Community à partir de 400 000 DA (implémentation incluse), Sage 100 entre 900 000 et 2,5 millions DA, SAP Business One à partir de 5 millions DA. Un ERP sur mesure Symloop démarre à 800 000 DA avec zéro frais de licence."
                }
              },
              {
                "@type": "Question",
                "name": "Odoo ou ERP sur mesure : lequel choisir en Algérie ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Odoo est modulaire et rapide à déployer, mais les personnalisations complexes deviennent coûteuses. Un ERP sur mesure, comme ceux développés par Symloop, est conçu exactement pour vos processus métier, conforme à la fiscalité algérienne (SCF, G50, TVA), sans licence annuelle et avec un support local en français et arabe."
                }
              },
              {
                "@type": "Question",
                "name": "Pourquoi choisir Symloop pour un ERP en Algérie ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Symloop, basé à Sétif, développe des ERP sur mesure avec des technologies modernes (React, Node.js, cloud). Nos logiciels couvrent la gestion commerciale, stocks, facturation, RH et production, 100% conformes à la réglementation fiscale algérienne. Support local, pas de licence récurrente, et accompagnement complet."
                }
              },
              {
                "@type": "Question",
                "name": "Combien de temps faut-il pour implémenter un ERP en Algérie ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "L'implémentation prend généralement 2 à 4 mois pour une PME : audit des besoins (1-2 semaines), choix et paramétrage (3-5 semaines), migration des données (1-2 semaines), formation (1-2 semaines) et déploiement. Les projets complexes ou multi-sites peuvent nécessiter 6 à 12 mois."
                }
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" },
              { "@type": "ListItem", "position": 3, "name": "Logiciel ERP Algérie 2024", "item": "https://symloop.com/blog/logiciel-erp-algerie-2024" }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Logiciel ERP Algérie 2024 - Comparatif & Prix",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".en-bref-block", "article h1", "article h2"]
            },
            "url": "https://symloop.com/blog/logiciel-erp-algerie-2024"
          })}
        </script>
      </Head>

      <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
        {/* Hero Section */}
        <section className="bg-black text-white py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Retour au blog
              </Link>

              <div className="flex items-center gap-3 mb-6">
                <span className="bg-red-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Server className="w-4 h-4" />
                  {blog?.category}
                </span>
                <span className="text-gray-400 text-sm">{blog?.readTime}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Logiciel <span className="text-red-400">ERP</span> en Algérie
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Guide Complet : Sage, Odoo, SAP - Comparatif et Prix
              </p>

              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {blog?.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(blog?.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                Un <span className="text-red-600 font-semibold">ERP (Enterprise Resource Planning)</span> est le
                système nerveux de votre entreprise. Il centralise la gestion comptable, commerciale, RH et
                production. En Algérie, choisir le bon ERP adapté à la <span className="text-red-600 font-semibold">réglementation fiscale locale</span> est crucial.
              </p>
            </div>

            {/* En bref */}
            <div className="en-bref-block bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 mb-12 border-l-4 border-red-500">
              <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-red-400">En bref</span>
              </h2>
              <p className="text-gray-200 leading-relaxed">
                Symloop développe des ERP sur mesure pour les entreprises algériennes. Alternative à Odoo et SAP, nos logiciels sont construits pour votre métier. Gestion commerciale, stocks, facturation, RH, production. Technologie moderne. Basé à Sétif. Contact : <a href="tel:+213549575512" className="text-red-400 font-semibold hover:text-red-300">+213 549 575 512</a>.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <Link href="/blog/erp-sur-mesure-saas-startup-pme-algerie-2026" className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
                  ERP sur mesure vs SaaS pour PME
                </Link>
                <Link href="/blog/digitaliser-entreprise-algerie-ne-perdez-plus-1-dinar" className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Digitaliser votre entreprise en Algérie
                </Link>
              </div>
            </div>

            {/* Stats Box */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Impact d'un ERP sur Votre Entreprise</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">-30%</div>
                  <div className="text-sm text-gray-600">Coûts opérationnels</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">+40%</div>
                  <div className="text-sm text-gray-600">Productivité</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">-50%</div>
                  <div className="text-sm text-gray-600">Erreurs saisie</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">100%</div>
                  <div className="text-sm text-gray-600">Conformité fiscale</div>
                </div>
              </div>
            </div>

            {/* ERP Modules */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                  <Database className="w-5 h-5 text-red-600" />
                </div>
                Modules d'un ERP
              </h2>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: Calculator, name: "Comptabilité", desc: "Comptabilité générale, analytique, trésorerie", color: "bg-blue-100 text-blue-600" },
                  { icon: ShoppingCart, name: "Commercial", desc: "Devis, factures, clients, fournisseurs", color: "bg-green-100 text-green-600" },
                  { icon: Package, name: "Stock", desc: "Inventaire, mouvements, valorisation", color: "bg-orange-100 text-orange-600" },
                  { icon: Users, name: "RH & Paie", desc: "Gestion personnel, bulletins, CNAS", color: "bg-purple-100 text-purple-600" },
                  { icon: BarChart3, name: "Production", desc: "Planification, OF, gammes, nomenclatures", color: "bg-cyan-100 text-cyan-600" },
                  { icon: FileText, name: "Reporting", desc: "Tableaux de bord, états, décisions", color: "bg-yellow-100 text-yellow-600" },
                ].map((module, index) => (
                  <div key={index} className="bg-white border-2 border-gray-100 rounded-xl p-4 hover:border-red-200 transition-colors">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${module.color.split(' ')[0]}`}>
                      <module.icon className={`w-5 h-5 ${module.color.split(' ')[1]}`} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{module.name}</h3>
                    <p className="text-gray-500 text-sm">{module.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ERP Comparison */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-purple-600" />
                </div>
                Comparatif ERP Algérie
              </h2>

              <div className="space-y-6">
                {/* Odoo */}
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-purple-200 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        Odoo
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Odoo</h3>
                        <p className="text-gray-500">Open Source • Modulaire</p>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Recommandé PME</span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Avantages</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Version Community gratuite
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Interface moderne et intuitive
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Localisation algérienne disponible
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Idéal Pour</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• PME en croissance</li>
                        <li>• Startups</li>
                        <li>• E-commerce</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
                    <span className="text-gray-600">Prix indicatif</span>
                    <span className="text-xl font-bold text-purple-600">0 - 600€/mois</span>
                  </div>
                </div>

                {/* Sage */}
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-green-200 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        Sage
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Sage 100</h3>
                        <p className="text-gray-500">Leader comptabilité • Algérie</p>
                      </div>
                    </div>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Leader Algérie</span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Avantages</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          100% conforme fiscalité algérienne
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Réseau partenaires local
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Robuste et éprouvé
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Idéal Pour</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Comptabilité pure</li>
                        <li>• PME traditionnelles</li>
                        <li>• Cabinets comptables</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
                    <span className="text-gray-600">Prix indicatif</span>
                    <span className="text-xl font-bold text-green-600">800K - 3M DA</span>
                  </div>
                </div>

                {/* SAP */}
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-200 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        SAP
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">SAP Business One</h3>
                        <p className="text-gray-500">Enterprise • International</p>
                      </div>
                    </div>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">Grands Groupes</span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Avantages</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Solution complète et intégrée
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Standard international
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Scalabilité maximale
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Idéal Pour</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Grandes entreprises</li>
                        <li>• Multi-sites</li>
                        <li>• International</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
                    <span className="text-gray-600">Prix indicatif</span>
                    <span className="text-xl font-bold text-blue-600">5M+ DA</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Algerian Compliance */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                Conformité Fiscale Algérie
              </h2>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-r-2xl p-8 mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Tout ERP en Algérie doit respecter les <span className="text-green-600 font-semibold">obligations fiscales locales</span> :
                  plan comptable SCF, déclarations TVA, G50, états financiers réglementaires.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Plan Comptable SCF intégré</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Déclarations G50, G50A</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Gestion TVA, TAP, IBS</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">États financiers normalisés</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Gestion CNAS, CASNOS</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Facturation électronique</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing Table */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-orange-600" />
                </div>
                Tarifs Implémentation ERP
              </h2>

              {/* Pricing Warning */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <div className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5">⚠️</div>
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif exact dépend du nombre d'utilisateurs, des modules choisis,
                  et de la complexité de votre activité. <strong>Contactez-nous pour un audit gratuit et un devis personnalisé</strong>
                  - nous vous accompagnons dans le choix de la meilleure solution pour votre budget.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="text-left p-4 rounded-tl-xl">Solution</th>
                      <th className="text-left p-4">Licence</th>
                      <th className="text-left p-4">Implémentation</th>
                      <th className="text-left p-4">Formation</th>
                      <th className="text-right p-4 rounded-tr-xl">Total Estimé</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="p-4 font-medium">Odoo Community</td>
                      <td className="p-4 text-green-600 font-bold">Gratuit</td>
                      <td className="p-4 text-gray-600">300-600K DA</td>
                      <td className="p-4 text-gray-600">100-200K DA</td>
                      <td className="p-4 text-right font-bold text-red-600">400K - 800K DA</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="p-4 font-medium">Odoo Enterprise</td>
                      <td className="p-4 text-gray-600">200-600K/an</td>
                      <td className="p-4 text-gray-600">500K-1M DA</td>
                      <td className="p-4 text-gray-600">150-300K DA</td>
                      <td className="p-4 text-right font-bold text-red-600">850K - 2M DA</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="p-4 font-medium">Sage 100</td>
                      <td className="p-4 text-gray-600">500K-1.5M DA</td>
                      <td className="p-4 text-gray-600">300-800K DA</td>
                      <td className="p-4 text-gray-600">100-300K DA</td>
                      <td className="p-4 text-right font-bold text-red-600">900K - 2.5M DA</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="p-4 font-medium">SAP Business One</td>
                      <td className="p-4 text-gray-600">2-5M DA</td>
                      <td className="p-4 text-gray-600">2-5M DA</td>
                      <td className="p-4 text-gray-600">500K-1M DA</td>
                      <td className="p-4 text-right font-bold text-red-600">5M - 12M DA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Implementation Steps */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Settings className="w-5 h-5 text-blue-600" />
                </div>
                Étapes d'Implémentation
              </h2>

              <div className="space-y-4">
                {[
                  { num: "01", title: "Audit des Besoins", desc: "Analyse de vos processus actuels et définition des objectifs", duration: "1-2 sem" },
                  { num: "02", title: "Choix Solution", desc: "Sélection de l'ERP adapté à votre activité et budget", duration: "1 sem" },
                  { num: "03", title: "Paramétrage", desc: "Configuration de l'ERP selon vos spécificités métier", duration: "2-4 sem" },
                  { num: "04", title: "Migration Données", desc: "Import de vos données existantes (clients, produits, comptabilité)", duration: "1-2 sem" },
                  { num: "05", title: "Formation", desc: "Formation des utilisateurs clés et documentation", duration: "1-2 sem" },
                  { num: "06", title: "Déploiement", desc: "Mise en production et accompagnement au démarrage", duration: "1-2 sem" },
                ].map((step, index) => (
                  <div key={index} className="flex gap-4 items-center bg-gray-50 rounded-xl p-4">
                    <div className="bg-red-500 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                      {step.num}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-lg">{step.duration}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Symloop */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <Building className="w-5 h-5 text-cyan-600" />
                </div>
                Notre Expertise ERP
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: CheckCircle, title: "Intégrateur Odoo", desc: "Partenaire certifié, +50 projets réalisés" },
                  { icon: Shield, title: "Conformité Algérie", desc: "Maîtrise parfaite de la réglementation fiscale" },
                  { icon: Users, title: "Équipe Locale", desc: "Support en français et arabe, proximité client" },
                  { icon: TrendingUp, title: "Accompagnement", desc: "Formation et support post-implémentation" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <item.icon className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Cross-links */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles Connexes</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/blog/erp-sur-mesure-saas-startup-pme-algerie-2026" className="group block bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 hover:border-red-400 hover:shadow-md transition-all">
                  <span className="text-xs font-medium text-red-600 mb-2 block">ERP & SaaS</span>
                  <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-2">ERP Sur Mesure vs SaaS : Le Guide pour les PME et Startups en Algérie</h3>
                  <p className="text-gray-500 text-sm">Découvrez quelle approche ERP convient le mieux à votre entreprise algérienne : solution sur mesure ou SaaS.</p>
                </Link>
                <Link href="/blog/digitaliser-entreprise-algerie-ne-perdez-plus-1-dinar" className="group block bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 hover:border-green-400 hover:shadow-md transition-all">
                  <span className="text-xs font-medium text-green-600 mb-2 block">Digitalisation</span>
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">Ne Perdez Plus 1 Dinar : Digitalisez Votre Entreprise en Algérie</h3>
                  <p className="text-gray-500 text-sm">Pourquoi la digitalisation est indispensable pour les entreprises algériennes et comment s'y prendre.</p>
                </Link>
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12 pt-8 border-t border-gray-100">
              {blog?.tags?.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Besoin d'un ERP pour Votre Entreprise ?
            </h2>
            <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
              Obtenez un audit gratuit de vos besoins et une recommandation personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/213549575512?text=Bonjour, je souhaite un audit gratuit pour le choix d'un ERP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Audit Gratuit
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-red-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-800 transition-colors border border-red-400"
              >
                Demander un Devis
              </Link>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedBlogs.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Articles Similaires</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedBlogs.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all">
                      <span className="text-xs font-medium text-red-600 mb-2 block">{post.category}</span>
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
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
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
