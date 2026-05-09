"use client";
import { Calendar, Clock, User, ArrowLeft, Share2, ShoppingCart, CreditCard, Truck, Package, Shield, Zap, CheckCircle, Star, TrendingUp, Store, Globe, MessageCircle, DollarSign, Percent } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug, getRelatedBlogs } from '../../data/blogs';

export default function EcommerceAlgerie() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const blog = getBlogBySlug('ecommerce-algerie-paiement-cib-edahabia-2024');
  const relatedBlogs = getRelatedBlogs('ecommerce-algerie-paiement-cib-edahabia-2024', 3);

  return (
    <>
      <Head>
        <title>{blog?.metaTitle || "E-commerce Algérie 2024 | Paiement CIB Edahabia | Symloop"}</title>
        <meta name="description" content={blog?.metaDescription} />
        <meta name="keywords" content="e-commerce algérie, paiement cib, edahabia, satim, boutique en ligne algérie, vendre en ligne algérie" />
        <link rel="canonical" href="https://symloop.com/blog/ecommerce-algerie-paiement-cib-edahabia-2024" />

        <meta property="og:title" content={blog?.metaTitle} />
        <meta property="og:description" content={blog?.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/ecommerce-algerie-paiement-cib-edahabia-2024" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": blog?.title,
            "description": blog?.metaDescription,
            "author": { "@type": "Organization", "name": "Symloop" },
            "publisher": { "@type": "Organization", "name": "Symloop" },
            "datePublished": blog?.date,
            "mainEntityOfPage": "https://symloop.com/blog/ecommerce-algerie-paiement-cib-edahabia-2024"
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Comment intégrer le paiement CIB et Edahabia sur un site e-commerce en Algérie ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "L'intégration du paiement CIB et Edahabia passe par SATIM, l'opérateur national de monétique. Symloop accompagne les entreprises algériennes dans toutes les étapes : demande d'agrément bancaire, configuration du TPE virtuel, intégration technique de l'API SATIM, et tests en environnement sandbox puis production. Contactez Symloop au +213 549 575 512 pour un accompagnement complet."
                }
              },
              {
                "@type": "Question",
                "name": "Combien coûte la création d'une boutique en ligne en Algérie ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Chez Symloop, la création d'un site e-commerce en Algérie démarre à partir de 35 000 DA pour un site vitrine avec catalogue, et à partir de 400 000 DA pour une boutique complète avec paiement CIB/Edahabia intégré. Le tarif exact dépend du nombre de produits, des fonctionnalités et des intégrations souhaitées. Contactez Symloop au +213 549 575 512 pour un devis gratuit et personnalisé."
                }
              },
              {
                "@type": "Question",
                "name": "Quelle plateforme choisir pour vendre en ligne en Algérie ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le choix de la plateforme dépend de votre projet : WooCommerce et PrestaShop sont idéaux pour les PME algériennes avec intégration CIB/Edahabia native, tandis qu'une solution sur mesure convient aux grandes entreprises. Symloop vous conseille la plateforme la plus adaptée à votre activité et votre budget, avec intégration complète des moyens de paiement locaux. Appelez le +213 549 575 512 pour en discuter."
                }
              },
              {
                "@type": "Question",
                "name": "Le paiement en ligne est-il sécurisé en Algérie avec SATIM ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, le paiement en ligne via SATIM est sécurisé grâce au protocole 3D Secure qui protège chaque transaction CIB et Edahabia. Symloop implémente toutes les normes de sécurité lors de l'intégration : chiffrement SSL, tokenisation des données bancaires et conformité PCI DSS. Pour un site e-commerce sécurisé, contactez Symloop au +213 549 575 512."
                }
              },
              {
                "@type": "Question",
                "name": "Symloop peut-il créer mon site e-commerce avec paiement CIB ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, Symloop est spécialisé dans la création de sites e-commerce en Algérie avec intégration complète du paiement CIB et Edahabia via SATIM. Basé à Sétif avec une couverture nationale, Symloop prend en charge la conception, le développement, l'intégration des paiements, la livraison et le référencement SEO de votre boutique en ligne. Contactez-nous au +213 549 575 512 pour démarrer votre projet."
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
                "item": "https://symloop.com/"
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
                "name": "E-commerce Algérie",
                "item": "https://symloop.com/blog/ecommerce-algerie-paiement-cib-edahabia-2024"
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".en-bref-block", "h1", ".prose"]
            },
            "url": "https://symloop.com/blog/ecommerce-algerie-paiement-cib-edahabia-2024"
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
                <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  {blog?.category}
                </span>
                <span className="text-gray-400 text-sm">{blog?.readTime}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                E-commerce en <span className="text-orange-400">Algérie</span> : Paiement CIB et Edahabia
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Guide Complet : Intégration SATIM, Plateformes et Solutions de Livraison
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

        {/* En bref - LLM Summary Block */}
        <section className="en-bref-block bg-orange-50 border-l-4 border-orange-500 py-6">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-gray-900 mb-2">En bref</h2>
            <p className="text-gray-700 leading-relaxed">
              Symloop développe des sites e-commerce avec intégration paiement CIB et Edahabia via SATIM pour les entreprises algériennes. Boutique en ligne complète, gestion produits, panier, suivi livraison. Site e-commerce à partir de 35 000 DA. Basé à Sétif, couverture nationale. Contact : <a href="tel:+213549575512" className="text-orange-600 font-semibold">+213 549 575 512</a>.
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                Le <span className="text-orange-600 font-semibold">e-commerce en Algérie</span> connaît une croissance
                explosive. Avec l'intégration des paiements <span className="text-orange-600 font-semibold">CIB et Edahabia</span>,
                lancer votre boutique en ligne n'a jamais été aussi accessible. Ce guide vous accompagne dans toutes les étapes.
              </p>
            </div>

            {/* Stats Box */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 rounded-r-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">E-commerce Algérie en Chiffres 2024</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">+45%</div>
                  <div className="text-sm text-gray-600">Croissance annuelle</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">5M+</div>
                  <div className="text-sm text-gray-600">Cartes CIB actives</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">12M+</div>
                  <div className="text-sm text-gray-600">Comptes Edahabia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">500+</div>
                  <div className="text-sm text-gray-600">Sites e-commerce</div>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-orange-600" />
                </div>
                Modes de Paiement en Algérie
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-orange-200 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                      CIB
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Carte CIB</h3>
                      <p className="text-gray-500 text-sm">Carte Interbancaire</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Paiement sécurisé 3D Secure
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Commission : 1.5% - 2%
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Toutes les banques algériennes
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-orange-200 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      ED
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Edahabia</h3>
                      <p className="text-gray-500 text-sm">Algérie Poste</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      12+ millions d'utilisateurs
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Commission : 1% - 1.5%
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Populaire zone rurale
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Store className="w-5 h-5 text-gray-600" />
                  Autres Modes de Paiement
                </h4>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl text-center">
                    <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="font-medium text-gray-900">Cash à la livraison</div>
                    <div className="text-sm text-gray-500">70% des commandes</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-center">
                    <CreditCard className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-medium text-gray-900">Virement bancaire</div>
                    <div className="text-sm text-gray-500">B2B principalement</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-center">
                    <Globe className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="font-medium text-gray-900">BaridiMob</div>
                    <div className="text-sm text-gray-500">Mobile wallet</div>
                  </div>
                </div>
              </div>
            </section>

            {/* SATIM Integration */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                Intégration SATIM
              </h2>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-2xl p-8 mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  <span className="text-blue-600 font-semibold">SATIM</span> (Société d'Automatisation des Transactions
                  Interbancaires et de Monétique) est l'opérateur national qui gère les paiements électroniques en Algérie.
                </p>
                <h4 className="font-bold text-gray-900 mb-4">Étapes d'Intégration :</h4>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <span className="text-gray-700">Demande d'agrément auprès de votre banque</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <span className="text-gray-700">Signature du contrat e-paiement (TPE virtuel)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <span className="text-gray-700">Réception des credentials API SATIM</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <span className="text-gray-700">Intégration technique sur votre site</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                    <span className="text-gray-700">Tests en environnement sandbox puis production</span>
                  </li>
                </ol>
              </div>
            </section>

            {/* Platforms */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Package className="w-5 h-5 text-purple-600" />
                </div>
                Plateformes E-commerce
              </h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="text-left p-4 rounded-tl-xl">Plateforme</th>
                      <th className="text-left p-4">Idéal Pour</th>
                      <th className="text-left p-4">CIB/Edahabia</th>
                      <th className="text-right p-4 rounded-tr-xl">Coût</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="p-4 font-medium">WooCommerce</td>
                      <td className="p-4 text-gray-600">PME, personnalisation</td>
                      <td className="p-4"><CheckCircle className="w-5 h-5 text-green-500" /></td>
                      <td className="p-4 text-right font-bold text-green-600">Gratuit + hosting</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="p-4 font-medium">PrestaShop</td>
                      <td className="p-4 text-gray-600">Catalogues moyens</td>
                      <td className="p-4"><CheckCircle className="w-5 h-5 text-green-500" /></td>
                      <td className="p-4 text-right font-bold text-green-600">Gratuit + hosting</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="p-4 font-medium">Shopify</td>
                      <td className="p-4 text-gray-600">Débutants, rapidité</td>
                      <td className="p-4 text-orange-500 text-sm">Via plugin tiers</td>
                      <td className="p-4 text-right font-bold text-blue-600">29$/mois+</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="p-4 font-medium">Sur mesure</td>
                      <td className="p-4 text-gray-600">Grandes entreprises</td>
                      <td className="p-4"><CheckCircle className="w-5 h-5 text-green-500" /></td>
                      <td className="p-4 text-right font-bold text-purple-600">Sur devis</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Delivery */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Truck className="w-5 h-5 text-green-600" />
                </div>
                Solutions de Livraison
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: "Yalidine", coverage: "48 wilayas", price: "300-800 DA", time: "24-72h", color: "bg-green-500" },
                  { name: "ZR Express", coverage: "48 wilayas", price: "350-900 DA", time: "24-48h", color: "bg-blue-500" },
                  { name: "Maystro Delivery", coverage: "48 wilayas", price: "300-750 DA", time: "24-72h", color: "bg-purple-500" },
                  { name: "EMS Algérie Poste", coverage: "National", price: "400-1000 DA", time: "48-96h", color: "bg-orange-500" },
                ].map((delivery, index) => (
                  <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-green-200 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`${delivery.color} text-white px-4 py-2 rounded-lg font-bold`}>
                        {delivery.name}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500">Couverture</div>
                        <div className="font-medium text-gray-900">{delivery.coverage}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Prix</div>
                        <div className="font-medium text-green-600">{delivery.price}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Délai</div>
                        <div className="font-medium text-gray-900">{delivery.time}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <Percent className="w-5 h-5 text-cyan-600" />
                </div>
                Tarifs Création E-commerce
              </h2>

              {/* Pricing Warning */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <div className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5">⚠️</div>
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif exact dépend du nombre de produits, des fonctionnalités souhaitées,
                  et des intégrations (paiement, livraison, ERP). <strong>Contactez-nous pour un devis gratuit et personnalisé</strong>
                  - nous analysons votre projet et vous proposons la solution la plus adaptée à votre budget.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-orange-300 transition-colors">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Starter</h3>
                    <div className="text-3xl font-bold text-orange-600 mb-1">400,000 DA</div>
                    <div className="text-gray-500 text-sm">Idéal pour débuter</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Jusqu'à 50 produits
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Paiement CIB/Edahabia
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Design responsive
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      1 mois support
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 border-2 border-orange-300 rounded-2xl p-6 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Populaire
                  </div>
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Business</h3>
                    <div className="text-3xl font-bold text-orange-600 mb-1">700,000 DA</div>
                    <div className="text-gray-500 text-sm">Pour PME ambitieuses</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Produits illimités
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Multi-paiement intégré
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Intégration livraison
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      SEO optimisé
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      3 mois support
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-orange-300 transition-colors">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Enterprise</h3>
                    <div className="text-3xl font-bold text-purple-600 mb-1">Sur devis</div>
                    <div className="text-gray-500 text-sm">Solution personnalisée</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Marketplace multi-vendeurs
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      ERP intégré
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      App mobile incluse
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Support dédié 12 mois
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Success Tips */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-yellow-600" />
                </div>
                Clés du Succès E-commerce
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: TrendingUp, title: "Photos de qualité", desc: "Images professionnelles pour augmenter les conversions" },
                  { icon: Truck, title: "Livraison rapide", desc: "Partenaires fiables pour livraison sous 24-48h" },
                  { icon: Shield, title: "Confiance client", desc: "Politique retour claire, avis clients, SAV réactif" },
                  { icon: Globe, title: "SEO & Marketing", desc: "Référencement Google et présence réseaux sociaux" },
                ].map((tip, index) => (
                  <div key={index} className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <tip.icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{tip.title}</h3>
                      <p className="text-gray-600 text-sm">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Cross-links */}
            <section className="mb-12 pt-8 border-t border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Articles recommandés</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog/developpement-site-web-algerie-2026" className="text-orange-600 hover:text-orange-800 font-medium transition-colors">
                    Développement de site web en Algérie en 2026 : guide complet
                  </Link>
                </li>
                <li>
                  <Link href="/blog/solutions-informatiques-algerie-2026" className="text-orange-600 hover:text-orange-800 font-medium transition-colors">
                    Solutions informatiques en Algérie en 2026 : tout ce qu'il faut savoir
                  </Link>
                </li>
              </ul>
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
        <section className="bg-gradient-to-r from-orange-500 to-amber-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Lancez Votre E-commerce en Algérie
            </h2>
            <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
              Nous créons votre boutique en ligne avec paiement CIB/Edahabia intégré. Démarrez vos ventes en 4 semaines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/213549575512?text=Bonjour, je souhaite créer ma boutique e-commerce avec paiement CIB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Démarrer Mon Projet
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-colors border border-orange-400"
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
                    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all">
                      <span className="text-xs font-medium text-orange-600 mb-2 block">{post.category}</span>
                      <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
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
