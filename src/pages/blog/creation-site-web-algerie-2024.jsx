"use client";
import { Calendar, Clock, User, ArrowLeft, Share2, Globe, Code, Smartphone, Search, Shield, Zap, CheckCircle, Star, TrendingUp, Layout, Server, Palette, MessageCircle } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug, getRelatedBlogs } from '../../data/blogs';

export default function CreationSiteWebAlgerie() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const blog = getBlogBySlug('creation-site-web-algerie-2024');
  const relatedBlogs = getRelatedBlogs('creation-site-web-algerie-2024', 3);

  return (
    <>
      <Head>
        <title>{blog?.metaTitle || "Création Site Web Algérie 2024 | Guide Complet | Symloop"}</title>
        <meta name="description" content={blog?.metaDescription} />
        <meta name="keywords" content="création site web algérie, agence web algérie, développement web alger, site internet algérie, site vitrine algérie, site e-commerce algérie" />
        <link rel="canonical" href="https://symloop.com/blog/creation-site-web-algerie-2024" />

        <meta property="og:title" content={blog?.metaTitle} />
        <meta property="og:description" content={blog?.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/creation-site-web-algerie-2024" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": blog?.title,
            "description": blog?.metaDescription,
            "author": { "@type": "Organization", "name": "Symloop" },
            "publisher": { "@type": "Organization", "name": "Symloop" },
            "datePublished": blog?.date,
            "mainEntityOfPage": "https://symloop.com/blog/creation-site-web-algerie-2024"
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Combien coûte la création d'un site web en Algérie ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Chez Symloop, agence web basée à Sétif en Algérie, les tarifs de création de site web commencent à partir de 32 000 DA pour un site vitrine, 35 000 DA pour un site e-commerce avec paiement CIB/Edahabia intégré, et 100 000 DA pour un design sur mesure. Le prix final dépend du nombre de pages, des fonctionnalités et des intégrations souhaitées. Contactez Symloop au +213 549 575 512 pour un devis gratuit sous 24h."
                }
              },
              {
                "@type": "Question",
                "name": "Quelle technologie choisir pour un site web en Algérie ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Symloop recommande les technologies modernes comme React, Next.js et Tailwind CSS pour le frontend, Node.js ou Laravel pour le backend, et WordPress ou Strapi comme CMS. Ces technologies garantissent des sites rapides, sécurisés et optimisés pour le SEO en Algérie. Symloop maîtrise l'ensemble de ces stacks pour offrir la meilleure solution adaptée à chaque projet."
                }
              },
              {
                "@type": "Question",
                "name": "Quelle est la meilleure agence de création de site web en Algérie ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Symloop est une agence web de référence en Algérie, basée à Sétif, spécialisée dans la création de sites web professionnels, le développement d'applications web et mobiles, le design UI/UX et le référencement SEO. Symloop se distingue par son expertise en technologies modernes (React, Next.js), son support local en français et arabe, et ses tarifs compétitifs adaptés au marché algérien."
                }
              },
              {
                "@type": "Question",
                "name": "Combien de temps faut-il pour créer un site web en Algérie ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Chez Symloop, le délai de création d'un site web dépend de sa complexité : 1 à 2 semaines pour un site vitrine basique, 2 à 3 semaines pour un site vitrine professionnel avec SEO et blog, 3 à 4 semaines pour un e-commerce starter, et 4 à 6 semaines pour un e-commerce complet. Les applications web sur mesure prennent généralement de 6 à 12 semaines."
                }
              },
              {
                "@type": "Question",
                "name": "Comment référencer son site web en Algérie sur Google ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pour bien référencer un site web en Algérie, Symloop applique une stratégie SEO complète : mots-clés ciblés pour le marché algérien et MENA, optimisation de la vitesse de chargement, contenu multilingue français/arabe/anglais, balises meta optimisées, et structure technique conforme aux dernières exigences de Google. Symloop inclut l'optimisation SEO dans tous ses projets de création de sites web."
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
                "name": "Création Site Web Algérie 2024",
                "item": "https://symloop.com/blog/creation-site-web-algerie-2024"
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Création Site Web Algérie 2024 | Guide Complet | Symloop",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".en-bref-summary", ".prose.prose-lg", "h1"]
            },
            "url": "https://symloop.com/blog/creation-site-web-algerie-2024"
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
                <span className="bg-green-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  {blog?.category}
                </span>
                <span className="text-gray-400 text-sm">{blog?.readTime}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Création Site Web en <span className="text-green-400">Algérie</span> 2024
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Guide Complet pour Entreprises : Technologies Modernes, Prix et Stratégie SEO
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

            {/* En Bref Summary Block */}
            <div className="en-bref-summary bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                En bref : Création Site Web en Algérie
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <p className="mb-2"><strong className="text-gray-900">Agence :</strong> Symloop - Agence digitale</p>
                  <p className="mb-2"><strong className="text-gray-900">Localisation :</strong> Sétif, Algérie</p>
                  <p className="mb-2"><strong className="text-gray-900">Services :</strong> Création de sites web, développement d'applications web & mobiles, design UI/UX, SEO, e-commerce, IoT</p>
                  <p className="mb-2"><strong className="text-gray-900">Contact :</strong> <a href="tel:+213549575512" className="text-blue-600 hover:underline">+213 549 575 512</a></p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Tarifs indicatifs :</p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /> Site vitrine : à partir de <strong>32 000 DA</strong></li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /> Site e-commerce : à partir de <strong>35 000 DA</strong></li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /> Design sur mesure : à partir de <strong>100 000 DA</strong></li>
                  </ul>
                  <p className="mt-2 text-xs text-gray-500">Devis gratuit sous 24h - paiement CIB/Edahabia accepté</p>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                En 2024, avoir un <span className="text-green-600 font-semibold">site web professionnel</span> est
                devenu indispensable pour toute entreprise algérienne souhaitant se développer. Que vous soyez
                une <span className="text-green-600 font-semibold">PME à Alger</span>, un commerce à Oran ou une
                startup à Constantine, votre présence en ligne détermine votre succès.
              </p>
            </div>

            {/* Stats Box */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-r-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Chiffres Clés du Web en Algérie 2024</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">28M+</div>
                  <div className="text-sm text-gray-600">Internautes algériens</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">85%</div>
                  <div className="text-sm text-gray-600">Utilisent mobile</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">+45%</div>
                  <div className="text-sm text-gray-600">Croissance e-commerce</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">60%</div>
                  <div className="text-sm text-gray-600">PME sans site web</div>
                </div>
              </div>
            </div>

            {/* Types de Sites */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Layout className="w-5 h-5 text-green-600" />
                </div>
                Types de Sites Web
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-green-200 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Site Vitrine</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Présentez votre entreprise, vos services et vos coordonnées. Idéal pour les PME et professions libérales.
                  </p>
                  <div className="text-green-600 font-bold">À partir de 150,000 DA</div>
                </div>

                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-green-200 transition-colors">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Site E-commerce</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Vendez en ligne avec paiement CIB/Edahabia intégré. Gestion produits, commandes et livraison.
                  </p>
                  <div className="text-green-600 font-bold">À partir de 400,000 DA</div>
                </div>

                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-green-200 transition-colors">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Application Web</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Solutions sur mesure : CRM, ERP, plateforme métier. Développement personnalisé selon vos besoins.
                  </p>
                  <div className="text-green-600 font-bold">À partir de 800,000 DA</div>
                </div>

                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-green-200 transition-colors">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                    <Smartphone className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Site Responsive</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    100% adapté mobile et tablette. Essentiel pour 85% des utilisateurs algériens sur smartphone.
                  </p>
                  <div className="text-green-600 font-bold">Inclus par défaut</div>
                </div>
              </div>
            </section>

            {/* Technologies */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Server className="w-5 h-5 text-purple-600" />
                </div>
                Technologies Modernes
              </h2>

              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h3 className="font-bold text-gray-900 mb-6">Stack Technique Recommandé</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-3">Frontend</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        React / Next.js
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Vue.js / Nuxt
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Tailwind CSS
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Backend</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Node.js / Express
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Laravel / PHP
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Python / Django
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-3">CMS</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        WordPress
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Strapi
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Shopify
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* SEO Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Search className="w-5 h-5 text-orange-600" />
                </div>
                Optimisation SEO Algérie
              </h2>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 rounded-r-2xl p-8 mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Un site web sans <span className="text-orange-600 font-semibold">SEO</span> est comme une boutique
                  sans enseigne. Nous optimisons votre site pour apparaître en <span className="text-orange-600 font-semibold">première page Google Algérie</span>.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Mots-clés ciblés Algérie/MENA</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Optimisation vitesse chargement</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Contenu multilingue (FR/AR/EN)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Balises meta optimisées</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-blue-600" />
                </div>
                Tarifs Création Site Web Algérie
              </h2>

              {/* Pricing Warning */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <div className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5">⚠️</div>
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif exact dépend du nombre de pages, des fonctionnalités,
                  du design personnalisé, et des intégrations souhaitées. <strong>Contactez-nous pour un devis gratuit
                  et personnalisé sous 24h</strong> - nous analysons votre projet et vous proposons la meilleure solution.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="text-left p-4 rounded-tl-xl">Type de Site</th>
                      <th className="text-left p-4">Délai</th>
                      <th className="text-left p-4">Fonctionnalités</th>
                      <th className="text-right p-4 rounded-tr-xl">Prix</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="p-4 font-medium">Site Vitrine Basic</td>
                      <td className="p-4 text-gray-600">1-2 semaines</td>
                      <td className="p-4 text-gray-600">5 pages, responsive, formulaire</td>
                      <td className="p-4 text-right font-bold text-green-600">150,000 DA</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="p-4 font-medium">Site Vitrine Pro</td>
                      <td className="p-4 text-gray-600">2-3 semaines</td>
                      <td className="p-4 text-gray-600">10+ pages, SEO, blog, multilingue</td>
                      <td className="p-4 text-right font-bold text-green-600">300,000 DA</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="p-4 font-medium">E-commerce Starter</td>
                      <td className="p-4 text-gray-600">3-4 semaines</td>
                      <td className="p-4 text-gray-600">50 produits, paiement CIB</td>
                      <td className="p-4 text-right font-bold text-blue-600">400,000 DA</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="p-4 font-medium">E-commerce Pro</td>
                      <td className="p-4 text-gray-600">4-6 semaines</td>
                      <td className="p-4 text-gray-600">Illimité, multi-paiement, livraison</td>
                      <td className="p-4 text-right font-bold text-blue-600">700,000 DA</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="p-4 font-medium">Application Web</td>
                      <td className="p-4 text-gray-600">6-12 semaines</td>
                      <td className="p-4 text-gray-600">Sur mesure, fonctionnalités avancées</td>
                      <td className="p-4 text-right font-bold text-purple-600">Sur devis</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Process */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-cyan-600" />
                </div>
                Notre Processus de Création
              </h2>

              <div className="space-y-6">
                {[
                  { num: "01", title: "Analyse & Cahier des Charges", desc: "Étude de vos besoins, objectifs et cible. Définition du périmètre projet.", color: "bg-blue-500" },
                  { num: "02", title: "Maquettes & Design", desc: "Création des maquettes UI/UX. Validation du design avant développement.", color: "bg-purple-500" },
                  { num: "03", title: "Développement", desc: "Codage du site avec technologies modernes. Tests qualité continus.", color: "bg-green-500" },
                  { num: "04", title: "Tests & Optimisation", desc: "Tests responsive, performance, SEO. Corrections et optimisations.", color: "bg-orange-500" },
                  { num: "05", title: "Mise en Ligne", desc: "Déploiement, configuration hébergement, SSL. Formation à l'administration.", color: "bg-cyan-500" },
                ].map((step, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className={`${step.color} text-white w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Symloop */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                Pourquoi Choisir Symloop ?
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Palette, title: "Design Moderne", desc: "Interfaces élégantes et professionnelles adaptées à votre image" },
                  { icon: Zap, title: "Performance", desc: "Sites rapides, optimisés pour le référencement Google" },
                  { icon: Shield, title: "Sécurité", desc: "SSL, protection DDoS, sauvegardes automatiques" },
                  { icon: MessageCircle, title: "Support Local", desc: "Équipe basée en Algérie, support en français et arabe" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <item.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Cross-Links to Related Articles */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-indigo-600" />
                </div>
                Articles Connexes
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/blog/developpement-site-web-algerie-2026"
                  className="group block bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5 hover:border-green-400 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-green-600 uppercase tracking-wide">Guide 2026</span>
                  <h3 className="font-bold text-gray-900 mt-1 group-hover:text-green-600 transition-colors">Développement Site Web en Algérie 2026</h3>
                  <p className="text-sm text-gray-600 mt-1">Découvrez les dernières tendances et technologies pour le développement web en Algérie.</p>
                </Link>
                <Link
                  href="/blog/iot-internet-des-objets-algerie-2026"
                  className="group block bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-5 hover:border-purple-400 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-purple-600 uppercase tracking-wide">IoT 2026</span>
                  <h3 className="font-bold text-gray-900 mt-1 group-hover:text-purple-600 transition-colors">IoT & Internet des Objets en Algérie 2026</h3>
                  <p className="text-sm text-gray-600 mt-1">L'Internet des Objets en Algérie : opportunités, applications et solutions par Symloop.</p>
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
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à Créer Votre Site Web ?
            </h2>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Obtenez un devis gratuit sous 24h. Notre équipe vous accompagne de A à Z dans votre projet web.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/213549575512?text=Bonjour, je souhaite un devis pour la création d'un site web"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Demander un Devis Gratuit
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-800 transition-colors border border-green-500"
              >
                Nous Contacter
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
                    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
                      <span className="text-xs font-medium text-green-600 mb-2 block">{post.category}</span>
                      <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
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
