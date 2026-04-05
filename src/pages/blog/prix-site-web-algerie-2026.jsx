"use client";
import { DollarSign, Calculator, ArrowLeft, Clock, CheckCircle, AlertTriangle, Shield, Zap, TrendingUp, MessageCircle, Phone, Globe, Code, Layout, Server, Star, ArrowRight, Target, Users, Award, XCircle, FileText, Lock, RefreshCw, Layers, ShoppingCart, Smartphone, Search, Palette, HelpCircle } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug, getRelatedBlogs } from '../../data/blogs';

export default function PrixSiteWebAlgerie() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const blog = getBlogBySlug('prix-site-web-algerie-2026');
  const relatedBlogs = getRelatedBlogs('prix-site-web-algerie-2026', 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Combien Coûte un Site Web en Algérie en 2026 ? Prix & Tarifs Réels",
    "description": "Guide complet des prix de création de site web en Algérie en 2026. Tarifs réels site vitrine, e-commerce, application web. Comparatif freelance vs agence. Devis gratuit Symloop.",
    "author": { "@type": "Organization", "name": "Symloop" },
    "publisher": { "@type": "Organization", "name": "Symloop", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
    "datePublished": "2026-04-05",
    "dateModified": "2026-04-05",
    "mainEntityOfPage": "https://symloop.com/blog/prix-site-web-algerie-2026"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Combien coûte un site web en Algérie en 2026 ?",
        "acceptedAnswer": { "@type": "Answer", "text": "En 2026, le prix d'un site web en Algérie varie selon le type : site vitrine basique de 30 000 à 80 000 DA, site vitrine professionnel de 80 000 à 200 000 DA, site e-commerce de 150 000 à 500 000 DA, application web sur mesure de 300 000 à 1 500 000 DA. Chez Symloop, les tarifs commencent à 32 000 DA avec un excellent rapport qualité-prix. Contactez-nous au +213 549 575 512 pour un devis gratuit." }
      },
      {
        "@type": "Question",
        "name": "Quel est le prix d'un site vitrine en Algérie ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Un site vitrine en Algérie coûte entre 30 000 DA et 200 000 DA en 2026. Un site vitrine basique (1-5 pages) coûte 30 000-80 000 DA, tandis qu'un site vitrine professionnel avec design personnalisé, SEO et blog intégré coûte 80 000-200 000 DA. Symloop propose des sites vitrines à partir de 32 000 DA avec design responsive et optimisation SEO incluse. Appelez le +213 549 575 512." }
      },
      {
        "@type": "Question",
        "name": "Combien coûte un site e-commerce en Algérie avec paiement CIB/Edahabia ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Un site e-commerce en Algérie avec intégration des paiements CIB et Edahabia coûte entre 150 000 DA et 500 000 DA en 2026. Ce prix inclut le catalogue produits, le panier d'achat, l'intégration des passerelles de paiement algériennes (CIB, Edahabia, Baridi Mob), et le tableau de bord de gestion. Symloop intègre tous les moyens de paiement algériens. Devis gratuit : +213 549 575 512." }
      },
      {
        "@type": "Question",
        "name": "Pourquoi les prix des sites web varient autant en Algérie ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Les prix varient en fonction de plusieurs facteurs : le nombre de pages, la complexité du design (template vs sur mesure), les fonctionnalités requises (e-commerce, espace membre, blog), les intégrations tierces (paiement CIB, API), le niveau de SEO, et le prestataire choisi (freelance vs agence). Un freelance junior facture 30-50% moins cher qu'une agence, mais sans les mêmes garanties. Symloop offre des tarifs transparents et compétitifs." }
      },
      {
        "@type": "Question",
        "name": "Est-ce que Symloop offre des facilités de paiement pour la création de site web ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Oui, Symloop propose des facilités de paiement flexibles pour la création de site web en Algérie. Vous pouvez payer en 2 à 3 tranches selon le montant du projet. Un acompte de 30-50% est demandé au démarrage, le solde à la livraison. Contactez Symloop au +213 549 575 512 ou via WhatsApp pour discuter des modalités de paiement adaptées à votre budget." }
      },
      {
        "@type": "Question",
        "name": "Quels sont les coûts cachés d'un site web en Algérie ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Les coûts récurrents à prévoir pour un site web en Algérie incluent : l'hébergement (5 000-30 000 DA/an), le nom de domaine .dz (1 500-3 000 DA/an) ou .com (2 000-4 000 DA/an), le certificat SSL (gratuit à 15 000 DA/an), la maintenance et mises à jour (10 000-50 000 DA/an), et éventuellement le SEO continu. Symloop inclut l'hébergement et le SSL la première année dans ses offres. Détails : +213 549 575 512." }
      },
      {
        "@type": "Question",
        "name": "Comment obtenir un devis pour un site web chez Symloop ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Pour obtenir un devis gratuit chez Symloop, vous pouvez : 1) Nous contacter via WhatsApp au +213 549 575 512, 2) Remplir le formulaire sur symloop.com/contact, 3) Nous appeler directement. Nous répondons sous 24h avec un devis détaillé incluant le cahier des charges, les délais et le prix final sans surprise. Symloop est basée en Algérie avec une équipe locale." }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Prix Site Web Algérie 2026", "item": "https://symloop.com/blog/prix-site-web-algerie-2026" }
    ]
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".en-bref", "article p:first-of-type"]
  };

  return (
    <>
      <Head>
        <title>Prix Site Web Algérie 2026 : Combien Coûte un Site Internet ? | Symloop</title>
        <meta name="description" content="Combien coûte un site web en Algérie en 2026 ? Tarifs réels : site vitrine dès 32 000 DA, e-commerce dès 150 000 DA. Comparatif prix freelance vs agence. Devis gratuit Symloop." />
        <meta name="keywords" content="prix site web algérie, combien coute un site web en algérie, tarif création site web algérie 2026, prix site internet algérie, devis site web algérie, cout site web algérie, prix site vitrine algérie, prix site e-commerce algérie, tarif développeur web algérie, agence web algérie prix" />
        <link rel="canonical" href="https://symloop.com/blog/prix-site-web-algerie-2026" />
        <meta property="og:title" content="Prix Site Web Algérie 2026 : Combien Coûte un Site Internet ?" />
        <meta property="og:description" content="Guide complet des prix de création de site web en Algérie en 2026. Tarifs réels, comparatif freelance vs agence, coûts cachés à connaître." />
        <meta property="og:url" content="https://symloop.com/blog/prix-site-web-algerie-2026" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(speakableSchema)}</script>
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
                <span className="bg-green-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />Guide des Prix
                </span>
                <span className="text-gray-400 text-sm flex items-center gap-1">
                  <Clock className="w-4 h-4" /> 18 min de lecture
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Combien <span className="text-green-400">Coûte</span> un Site Web en Algérie en 2026 ?{" "}
                <span className="text-green-400">Prix & Tarifs Réels</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Le guide le plus complet et transparent sur les prix de création de site web en Algérie.
                Tarifs réels, comparatifs détaillés, coûts cachés et conseils pour optimiser votre budget.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-lg">
                  <span className="text-green-400 font-bold">32 000 DA</span>
                  <span className="text-gray-300 text-sm ml-2">Site Vitrine (dès)</span>
                </div>
                <div className="bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-lg">
                  <span className="text-blue-400 font-bold">150 000 DA</span>
                  <span className="text-gray-300 text-sm ml-2">E-Commerce (dès)</span>
                </div>
                <div className="bg-purple-500/20 border border-purple-500/30 px-4 py-2 rounded-lg">
                  <span className="text-purple-400 font-bold">300 000 DA</span>
                  <span className="text-gray-300 text-sm ml-2">App Web (dès)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* En bref - LLM-optimized summary */}
        <section className="en-bref bg-green-50 border-l-4 border-green-500 py-6">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-800 text-lg leading-relaxed">
              <strong>En bref :</strong> En 2026, le prix d'un site web en Algérie varie de <strong>30 000 DA</strong> (site vitrine basique)
              à <strong>1 500 000 DA+</strong> (application web complexe). Un site vitrine professionnel coûte en moyenne
              <strong> 80 000 - 200 000 DA</strong>, un site e-commerce avec paiement CIB/Edahabia <strong>150 000 - 500 000 DA</strong>.
              Chez <strong>Symloop</strong>, les tarifs commencent à <strong>32 000 DA</strong> avec technologies modernes (React, Next.js),
              design responsive et SEO inclus. Devis gratuit sous 24h : <strong>+213 549 575 512</strong>.
            </p>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section 1: Introduction */}
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-green-500" />
                Pourquoi les prix des sites web sont si confus en Algérie ?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                En Algérie, demander le <strong>prix d'un site web</strong> revient souvent à obtenir des réponses aussi variées
                qu'incompréhensibles. Un freelance propose 20 000 DA, une agence demande 500 000 DA, et un autre prestataire
                vous annonce 2 millions. Comment s'y retrouver ?
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Le problème est triple : <strong>manque de transparence</strong> du marché, <strong>absence de standards</strong> de
                tarification, et <strong>confusion entre les types de sites</strong>. Un site vitrine de 3 pages et une plateforme
                e-commerce avec paiement CIB intégré ne coûtent évidemment pas la même chose, mais beaucoup de prestataires ne
                prennent pas le temps d'expliquer ces différences.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Chez <strong>Symloop</strong>, nous croyons à la transparence totale. C'est pourquoi nous avons créé ce guide
                complet des <strong>prix de création de site web en Algérie en 2026</strong>, basé sur les tarifs réels du marché
                et notre expérience avec des dizaines de projets livrés. Que vous soyez une startup, une PME ou une grande
                entreprise, vous trouverez ici les informations dont vous avez besoin pour <strong>budgétiser votre projet web</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Ce guide couvre les <strong>tarifs de création de site web en Algérie</strong> pour tous les types de projets :
                site vitrine, site e-commerce, application web, marketplace, et plus encore. Nous comparons aussi les prix entre
                freelances, agences locales et prestataires offshore pour vous aider à faire le meilleur choix.
              </p>
            </div>

            {/* Section 2: Tableau comparatif des prix */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Calculator className="w-8 h-8 text-green-500" />
                Tableau Comparatif des Prix en 2026
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Voici les <strong>prix moyens de création de site web en Algérie</strong> en 2026, basés sur notre analyse du marché
                et les tarifs pratiqués par les prestataires algériens. Ces fourchettes de prix reflètent la réalité du marché.
              </p>

              {/* Pricing Table */}
              <div className="overflow-x-auto mb-10">
                <table className="w-full border-collapse rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="text-left px-6 py-4 font-semibold">Type de Site</th>
                      <th className="text-center px-6 py-4 font-semibold">Prix Min (DA)</th>
                      <th className="text-center px-6 py-4 font-semibold">Prix Max (DA)</th>
                      <th className="text-center px-6 py-4 font-semibold">Délai Moyen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Site Vitrine Basique", desc: "1-5 pages, template", min: "30 000", max: "80 000", delai: "1-2 semaines", color: "bg-green-50" },
                      { type: "Site Vitrine Pro", desc: "5-15 pages, design sur mesure, SEO", min: "80 000", max: "200 000", delai: "2-4 semaines", color: "bg-white" },
                      { type: "Site E-Commerce Starter", desc: "Jusqu'à 100 produits, CIB/Edahabia", min: "150 000", max: "350 000", delai: "3-5 semaines", color: "bg-green-50" },
                      { type: "Site E-Commerce Avancé", desc: "Illimité, multi-paiement, gestion stock", min: "350 000", max: "800 000", delai: "5-8 semaines", color: "bg-white" },
                      { type: "Application Web Sur Mesure", desc: "Dashboard, API, fonctionnalités custom", min: "300 000", max: "1 500 000", delai: "6-12 semaines", color: "bg-green-50" },
                      { type: "Marketplace / Plateforme", desc: "Multi-vendeurs, paiement intégré", min: "500 000", max: "3 000 000", delai: "8-16 semaines", color: "bg-white" },
                      { type: "Landing Page", desc: "1 page, conversion optimisée", min: "15 000", max: "50 000", delai: "3-7 jours", color: "bg-green-50" },
                    ].map((item, i) => (
                      <tr key={i} className={`${item.color} border-b border-gray-200 hover:bg-green-100/50 transition-colors`}>
                        <td className="px-6 py-4">
                          <span className="font-semibold text-gray-900">{item.type}</span>
                          <span className="block text-sm text-gray-500">{item.desc}</span>
                        </td>
                        <td className="text-center px-6 py-4 font-bold text-green-700">{item.min}</td>
                        <td className="text-center px-6 py-4 font-bold text-red-600">{item.max}</td>
                        <td className="text-center px-6 py-4 text-gray-600">{item.delai}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <p className="text-green-800 font-semibold flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-green-600" /> Tarifs Symloop 2026
                </p>
                <p className="text-gray-700">
                  Chez Symloop, nos tarifs commencent à <strong>32 000 DA</strong> pour un site vitrine et <strong>150 000 DA</strong> pour
                  un e-commerce avec intégration CIB/Edahabia. Tous nos projets incluent le design responsive, l'optimisation SEO de base,
                  et l'hébergement la première année. <strong>Devis gratuit et sans engagement</strong> sous 24h.
                </p>
              </div>
            </div>

            {/* Section 3: Détail par type de site */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Layers className="w-8 h-8 text-green-500" />
                Détail des Prix par Type de Site Web
              </h2>

              {/* Site Vitrine */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 mb-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Layout className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Site Vitrine</h3>
                    <p className="text-blue-600">30 000 DA - 200 000 DA</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Le <strong>site vitrine</strong> est le type le plus courant en Algérie. Il présente votre entreprise, vos services
                  et vos coordonnées. Idéal pour les PME, artisans, professionnels libéraux et startups qui veulent une présence en ligne professionnelle.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Basique (30 000 - 80 000 DA)</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> 1 à 5 pages</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Template personnalisé</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Design responsive mobile</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Formulaire de contact</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Intégration Google Maps</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Professionnel (80 000 - 200 000 DA)</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> 5 à 15 pages</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Design sur mesure (UI/UX)</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Animations et interactions</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Blog intégré + CMS</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> SEO avancé + Analytics</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Multilingue (FR/AR/EN)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* E-Commerce */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 mb-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center">
                    <ShoppingCart className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Site E-Commerce</h3>
                    <p className="text-orange-600">150 000 DA - 800 000 DA</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Un <strong>site e-commerce en Algérie</strong> permet de vendre en ligne avec intégration des paiements locaux
                  (CIB, Edahabia, Baridi Mob). Le prix dépend du nombre de produits, des fonctionnalités de gestion et des
                  intégrations de paiement. En 2026, le e-commerce algérien connaît une croissance de plus de 40% par an.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Starter (150 000 - 350 000 DA)</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Jusqu'à 100 produits</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Paiement CIB/Edahabia</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Panier + Checkout</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Gestion commandes basique</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Design responsive</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Avancé (350 000 - 800 000 DA)</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Produits illimités</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Multi-paiement + Livraison</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Gestion stock avancée</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Tableau de bord complet</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Codes promo + Marketing</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> SEO e-commerce avancé</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Application Web */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 mb-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center">
                    <Code className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Application Web Sur Mesure</h3>
                    <p className="text-purple-600">300 000 DA - 1 500 000 DA+</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Une <strong>application web sur mesure</strong> est un logiciel accessible via le navigateur, développé spécifiquement
                  pour votre entreprise. Cela inclut les ERP, CRM, plateformes de gestion, tableaux de bord, et tout outil métier personnalisé.
                  Le prix dépend de la complexité des fonctionnalités et du nombre d'utilisateurs.
                </p>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Exemples de tarifs</h4>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-600">
                    <div className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" /> <span><strong>Dashboard / Admin panel :</strong> 300 000 - 600 000 DA</span></div>
                    <div className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" /> <span><strong>CRM sur mesure :</strong> 400 000 - 800 000 DA</span></div>
                    <div className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" /> <span><strong>ERP complet :</strong> 800 000 - 2 000 000 DA</span></div>
                    <div className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" /> <span><strong>Plateforme SaaS :</strong> 1 000 000 - 3 000 000 DA</span></div>
                  </div>
                </div>
              </div>

              {/* Marketplace */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-indigo-500 rounded-xl flex items-center justify-center">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Marketplace / Plateforme Multi-vendeurs</h3>
                    <p className="text-indigo-600">500 000 DA - 3 000 000 DA+</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Les marketplaces (type Ouedkniss, Jumia) sont les projets les plus complexes. Elles nécessitent la gestion
                  multi-vendeurs, les commissions, les systèmes de notation, le chat intégré, et des performances optimisées
                  pour des milliers d'utilisateurs simultanés. Le prix minimum réaliste est de <strong>500 000 DA</strong> pour
                  une version MVP, et peut atteindre plusieurs millions pour une plateforme complète.
                </p>
              </div>
            </div>

            {/* Section 4: Facteurs qui influencent le prix */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-green-500" />
                Les Facteurs Qui Influencent le Prix d'un Site Web
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Comprendre ces facteurs vous permettra de mieux <strong>estimer le coût de votre site web en Algérie</strong> et
                de négocier avec les prestataires en connaissance de cause.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <FileText className="w-6 h-6 text-blue-500" />,
                    title: "Nombre de Pages",
                    desc: "Un site de 3 pages coûte logiquement moins qu'un site de 20 pages. Chaque page supplémentaire ajoute du travail de design, d'intégration et de contenu. Comptez 5 000 à 15 000 DA par page supplémentaire selon la complexité.",
                    impact: "Impact : +20-40% sur le prix total"
                  },
                  {
                    icon: <Palette className="w-6 h-6 text-pink-500" />,
                    title: "Design & UI/UX",
                    desc: "Un template personnalisé coûte beaucoup moins qu'un design entièrement sur mesure. Le design sur mesure inclut la recherche UX, les wireframes, les maquettes et les itérations. C'est l'un des plus gros postes de dépense.",
                    impact: "Impact : +30-100% sur le prix total"
                  },
                  {
                    icon: <Zap className="w-6 h-6 text-yellow-500" />,
                    title: "Fonctionnalités",
                    desc: "Espace membre, blog, formulaires avancés, chat en ligne, réservation, paiement en ligne... Chaque fonctionnalité ajoutée augmente le coût de développement. Les fonctionnalités sur mesure coûtent plus que les plugins standards.",
                    impact: "Impact : +20-200% selon la complexité"
                  },
                  {
                    icon: <Server className="w-6 h-6 text-green-500" />,
                    title: "Intégrations Tierces",
                    desc: "Intégration de passerelles de paiement (CIB, Edahabia), API externes, CRM, ERP, réseaux sociaux, Google Analytics, systèmes de livraison... Chaque intégration nécessite du temps de développement et de test.",
                    impact: "Impact : +10-50% par intégration"
                  },
                  {
                    icon: <Search className="w-6 h-6 text-orange-500" />,
                    title: "Référencement SEO",
                    desc: "Le SEO basique (balises meta, titres) est généralement inclus. Le SEO avancé (recherche de mots-clés, contenu optimisé, backlinks, SEO technique) est un investissement supplémentaire mais essentiel pour être visible sur Google.",
                    impact: "Impact : +15-40% si SEO avancé"
                  },
                  {
                    icon: <Globe className="w-6 h-6 text-indigo-500" />,
                    title: "Multilingue (FR/AR/EN)",
                    desc: "Rendre un site disponible en plusieurs langues (français, arabe, anglais) nécessite un travail de traduction, d'adaptation du design (RTL pour l'arabe) et de gestion de contenu. En Algérie, le bilingue FR/AR est très demandé.",
                    impact: "Impact : +30-60% par langue ajoutée"
                  }
                ].map((factor, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-green-200 transition-colors shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      {factor.icon}
                      <h3 className="text-lg font-bold text-gray-900">{factor.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{factor.desc}</p>
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                      {factor.impact}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Section 5: Freelance vs Agence vs Offshore */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Users className="w-8 h-8 text-green-500" />
                Freelance vs Agence vs Offshore : Comparaison des Prix
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Le choix du prestataire impacte fortement le <strong>prix de votre site web en Algérie</strong>. Voici un comparatif
                honnête des trois options principales. Pour un comparatif détaillé freelance vs agence, consultez notre{" "}
                <Link href="/blog/freelance-vs-agence-algerie" className="text-green-600 hover:text-green-700 underline">
                  guide complet freelance vs agence en Algérie
                </Link>.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="text-left px-5 py-4 font-semibold">Critère</th>
                      <th className="text-center px-5 py-4 font-semibold">Freelance</th>
                      <th className="text-center px-5 py-4 font-semibold">Agence Locale</th>
                      <th className="text-center px-5 py-4 font-semibold">Offshore</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { critere: "Site Vitrine", freelance: "20-100K DA", agence: "80-250K DA", offshore: "50-150K DA" },
                      { critere: "Site E-Commerce", freelance: "80-250K DA", agence: "150-600K DA", offshore: "100-350K DA" },
                      { critere: "App Web", freelance: "150-500K DA", agence: "300-1.5M DA", offshore: "200-800K DA" },
                      { critere: "Qualité Design", freelance: "Variable", agence: "Haute", offshore: "Moyenne" },
                      { critere: "Support après livraison", freelance: "Limité", agence: "Garanti", offshore: "Difficile" },
                      { critere: "Garantie & Contrat", freelance: "Rarement", agence: "Systématique", offshore: "Variable" },
                      { critere: "Communication", freelance: "Directe", agence: "Structurée", offshore: "Décalage horaire" },
                      { critere: "Code source fourni", freelance: "À négocier", agence: "Inclus", offshore: "À négocier" },
                    ].map((row, i) => (
                      <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-200`}>
                        <td className="px-5 py-3 font-semibold text-gray-900">{row.critere}</td>
                        <td className="text-center px-5 py-3 text-gray-600">{row.freelance}</td>
                        <td className="text-center px-5 py-3 text-green-700 font-medium">{row.agence}</td>
                        <td className="text-center px-5 py-3 text-gray-600">{row.offshore}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <p className="text-green-800 font-semibold flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-green-600" /> Le Positionnement Symloop
                </p>
                <p className="text-gray-700">
                  Symloop combine les avantages d'une agence (qualité, garantie, support) avec des <strong>tarifs compétitifs</strong> proches
                  du freelance. Notre équipe locale en Algérie utilise les technologies les plus modernes (React, Next.js, Node.js) pour
                  livrer des projets de haute qualité à des prix accessibles. C'est le meilleur des deux mondes.
                </p>
              </div>
            </div>

            {/* Section 6: Les coûts cachés */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-amber-500" />
                Les Coûts Cachés d'un Site Web en Algérie
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Le prix de création n'est que le début. Voici les <strong>coûts récurrents</strong> que beaucoup de prestataires
                ne mentionnent pas dans leur devis initial. Prévoyez ces dépenses pour éviter les mauvaises surprises.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: <Server className="w-6 h-6 text-blue-500" />,
                    title: "Hébergement Web",
                    prix: "5 000 - 30 000 DA/an",
                    desc: "L'hébergement est le loyer de votre site sur Internet. Un hébergement mutualisé (suffisant pour la plupart des sites vitrines) coûte 5 000 à 10 000 DA/an. Un VPS dédié (recommandé pour e-commerce et apps) coûte 15 000 à 30 000 DA/an. Certains hébergeurs algériens proposent des offres compétitives.",
                    symloop: "Symloop inclut l'hébergement la 1ère année dans toutes ses offres."
                  },
                  {
                    icon: <Globe className="w-6 h-6 text-green-500" />,
                    title: "Nom de Domaine",
                    prix: "1 500 - 4 000 DA/an",
                    desc: "Le nom de domaine est l'adresse de votre site (ex: votre-entreprise.dz). Un .dz coûte environ 1 500-3 000 DA/an (via le CERIST), un .com environ 2 000-4 000 DA/an. À renouveler chaque année sous peine de perdre votre adresse.",
                    symloop: "Assistance gratuite pour l'enregistrement de votre domaine."
                  },
                  {
                    icon: <Lock className="w-6 h-6 text-red-500" />,
                    title: "Certificat SSL (HTTPS)",
                    prix: "Gratuit - 15 000 DA/an",
                    desc: "Le SSL sécurise votre site et est obligatoire pour le référencement Google. Let's Encrypt offre des certificats gratuits, mais les certificats premium (EV/OV) coûtent 5 000-15 000 DA/an. Indispensable pour tout site e-commerce.",
                    symloop: "SSL Let's Encrypt gratuit inclus dans tous nos projets."
                  },
                  {
                    icon: <RefreshCw className="w-6 h-6 text-purple-500" />,
                    title: "Maintenance & Mises à Jour",
                    prix: "10 000 - 50 000 DA/an",
                    desc: "Un site web nécessite des mises à jour régulières pour la sécurité, la compatibilité navigateurs et les performances. Sans maintenance, votre site devient vulnérable aux piratages et aux bugs. Prévoyez 10-50K DA/an selon la complexité.",
                    symloop: "Forfaits maintenance à partir de 10 000 DA/an."
                  },
                  {
                    icon: <Search className="w-6 h-6 text-orange-500" />,
                    title: "SEO & Référencement Continu",
                    prix: "15 000 - 80 000 DA/mois",
                    desc: "Le SEO n'est pas un investissement ponctuel. Pour maintenir et améliorer votre positionnement sur Google, un travail continu est nécessaire : création de contenu, backlinks, optimisation technique. C'est un investissement rentable sur le long terme.",
                    symloop: "SEO de base inclus. Forfaits SEO avancé disponibles."
                  }
                ].map((cout, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 mt-1">{cout.icon}</div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{cout.title}</h3>
                          <span className="bg-red-50 text-red-700 text-sm font-semibold px-3 py-1 rounded-full">{cout.prix}</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{cout.desc}</p>
                        <p className="text-green-700 text-sm font-medium flex items-center gap-1">
                          <CheckCircle className="w-4 h-4" /> {cout.symloop}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
                <p className="text-amber-800 font-semibold mb-2">Budget annuel total à prévoir (hors création)</p>
                <p className="text-gray-700">
                  Pour un site vitrine : <strong>20 000 - 50 000 DA/an</strong>. Pour un site e-commerce : <strong>40 000 - 120 000 DA/an</strong>.
                  Pour une application web : <strong>60 000 - 200 000 DA/an</strong>. Ces coûts sont inévitables quel que soit le prestataire choisi.
                </p>
              </div>
            </div>

            {/* Section 7: Comment réduire le coût */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Target className="w-8 h-8 text-green-500" />
                Comment Réduire le Coût de Votre Site Web Sans Sacrifier la Qualité
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Il est tout à fait possible d'<strong>optimiser votre budget</strong> sans compromettre la qualité de votre site.
                Voici nos conseils pratiques, issus de notre expérience avec des dizaines de clients en Algérie.
              </p>

              <div className="space-y-6">
                {[
                  {
                    num: "01",
                    title: "Définissez clairement vos besoins avant de demander un devis",
                    desc: "Un cahier des charges précis évite les allers-retours coûteux. Listez vos pages, fonctionnalités et références visuelles. Plus votre brief est clair, plus le devis sera juste. Consultez notre guide sur comment choisir un développeur en Algérie.",
                    link: "/blog/comment-choisir-developpeur-algerie"
                  },
                  {
                    num: "02",
                    title: "Commencez avec un MVP (Produit Minimum Viable)",
                    desc: "Lancez d'abord une version simplifiée de votre site avec les fonctionnalités essentielles. Vous pourrez ajouter des features plus tard en fonction des retours utilisateurs et de votre budget. C'est la stratégie des startups qui réussissent."
                  },
                  {
                    num: "03",
                    title: "Utilisez des templates comme base de design",
                    desc: "Un template personnalisé coûte 50-70% moins cher qu'un design entièrement sur mesure, tout en offrant un résultat professionnel. L'important est de le personnaliser avec votre branding (couleurs, logo, contenu)."
                  },
                  {
                    num: "04",
                    title: "Préparez votre contenu à l'avance",
                    desc: "Textes, images, logo, vidéos... Si vous fournissez le contenu prêt à l'emploi, vous économisez les frais de rédaction et de création graphique. Cela peut représenter 15-25% du budget total."
                  },
                  {
                    num: "05",
                    title: "Choisissez les bonnes technologies",
                    desc: "Un site vitrine n'a pas besoin d'un framework complexe. À l'inverse, un e-commerce nécessite une technologie robuste. Le bon choix technique dès le départ évite les surcoûts de migration future. Consultez notre guide complet."
                  },
                  {
                    num: "06",
                    title: "Négociez un package tout-en-un",
                    desc: "Hébergement + domaine + SSL + maintenance dans un seul forfait revient souvent moins cher que de tout acheter séparément. Chez Symloop, nos packages incluent tout ce dont vous avez besoin."
                  }
                ].map((tip, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {tip.num}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                      <p className="text-gray-600">{tip.desc}</p>
                      {tip.link && (
                        <Link href={tip.link} className="text-green-600 hover:text-green-700 text-sm font-medium inline-flex items-center gap-1 mt-2">
                          Lire le guide <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 8: Les pièges à éviter */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Shield className="w-8 h-8 text-red-500" />
                Les Pièges à Éviter Lors de la Création de Votre Site Web
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Le marché algérien du développement web est encore peu réglementé. Voici les <strong>erreurs courantes</strong> et les
                pièges dans lesquels tombent de nombreux clients, et comment les éviter.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <XCircle className="w-6 h-6 text-red-500" />,
                    title: "Prix anormalement bas",
                    desc: "Méfiez-vous des offres à 10 000-15 000 DA pour un site « complet ». À ce prix, vous obtiendrez probablement un template WordPress non personnalisé, sans SEO, sans support, et avec un code de mauvaise qualité. Le résultat : un site qu'il faudra refaire dans 6 mois.",
                    conseil: "Un site vitrine professionnel ne peut pas coûter moins de 30 000 DA de manière réaliste."
                  },
                  {
                    icon: <XCircle className="w-6 h-6 text-red-500" />,
                    title: "Pas de contrat ni de cahier des charges",
                    desc: "Sans contrat écrit, vous n'avez aucune protection. Certains prestataires disparaissent en cours de projet, livrent un travail incomplet, ou demandent des suppléments non prévus. Exigez toujours un contrat détaillé avec les livrables et les délais.",
                    conseil: "Chez Symloop, chaque projet est accompagné d'un devis détaillé et d'un contrat clair."
                  },
                  {
                    icon: <XCircle className="w-6 h-6 text-red-500" />,
                    title: "Pas d'accès au code source",
                    desc: "Certains développeurs gardent le code source en otage. Sans accès au code, vous êtes dépendant à vie de votre prestataire. En cas de conflit, vous perdez tout et devez recommencer de zéro. Assurez-vous d'obtenir le code source complet.",
                    conseil: "Symloop fournit systématiquement le code source complet à ses clients."
                  },
                  {
                    icon: <XCircle className="w-6 h-6 text-red-500" />,
                    title: "Pas de responsive mobile",
                    desc: "En 2026, plus de 75% du trafic web en Algérie provient des smartphones. Un site non responsive perd la majorité de ses visiteurs. Vérifiez que votre site s'adapte parfaitement à tous les écrans (mobile, tablette, desktop).",
                    conseil: "Tous les sites Symloop sont 100% responsive et testés sur tous les appareils."
                  },
                  {
                    icon: <XCircle className="w-6 h-6 text-red-500" />,
                    title: "Ignorer le SEO dès le départ",
                    desc: "Un beau site sans SEO est comme un magasin sans enseigne dans une ruelle déserte. Le référencement doit être intégré dès la conception (structure, balises, performance, contenu). L'ajouter après coûte beaucoup plus cher.",
                    conseil: "Le SEO de base est inclus dans tous les projets Symloop."
                  },
                  {
                    icon: <XCircle className="w-6 h-6 text-red-500" />,
                    title: "Payer la totalité à l'avance",
                    desc: "Ne payez jamais 100% du montant avant la livraison. Un acompte de 30-50% au démarrage est normal, mais le solde doit être conditionné à la livraison et à la validation du projet. Cela protège les deux parties.",
                    conseil: "Symloop applique un paiement échelonné : 30-50% au démarrage, le solde à la livraison."
                  }
                ].map((piege, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="bg-white border border-red-100 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      {piege.icon}
                      <h3 className="text-lg font-bold text-gray-900">{piege.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{piege.desc}</p>
                    <p className="text-green-700 text-sm font-medium bg-green-50 rounded-lg px-3 py-2">
                      {piege.conseil}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Section 9: Pourquoi Symloop */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-green-500" />
                Pourquoi Symloop Offre le Meilleur Rapport Qualité-Prix en Algérie
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Symloop n'est pas l'option la moins chère du marché, et c'est volontaire. Nous croyons que la qualité a un prix juste.
                Mais nous sommes convaincus d'offrir le <strong>meilleur rapport qualité-prix</strong> pour la création de sites web en Algérie. Voici pourquoi.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    icon: <Code className="w-8 h-8 text-blue-500" />,
                    title: "Technologies Modernes",
                    desc: "React, Next.js, Node.js, Tailwind CSS. Nous utilisons les mêmes technologies que les géants du web (Airbnb, Netflix, Uber). Résultat : des sites ultra-rapides, sécurisés et évolutifs."
                  },
                  {
                    icon: <Palette className="w-8 h-8 text-pink-500" />,
                    title: "Design UI/UX Professionnel",
                    desc: "Chaque projet bénéficie d'un design réfléchi, centré sur l'expérience utilisateur. Des interfaces belles et fonctionnelles qui convertissent vos visiteurs en clients."
                  },
                  {
                    icon: <Search className="w-8 h-8 text-orange-500" />,
                    title: "SEO Intégré",
                    desc: "Le référencement naturel est intégré dès la conception. Structure optimisée, balises meta, performance, contenu structuré. Votre site est prêt à se positionner sur Google."
                  },
                  {
                    icon: <Shield className="w-8 h-8 text-green-500" />,
                    title: "Garantie & Support",
                    desc: "Contrat clair, code source fourni, support après livraison garanti. Nous ne disparaissons pas après le paiement. Votre tranquillité d'esprit est notre priorité."
                  },
                  {
                    icon: <DollarSign className="w-8 h-8 text-green-600" />,
                    title: "Tarifs Transparents",
                    desc: "Pas de frais cachés, pas de surprises. Le devis que nous vous envoyons est le prix final. Facilités de paiement disponibles pour s'adapter à votre budget."
                  },
                  {
                    icon: <Zap className="w-8 h-8 text-yellow-500" />,
                    title: "Livraison Rapide",
                    desc: "Grâce à nos processus optimisés et notre expertise technique, nous livrons dans les délais convenus. Un site vitrine en 1-2 semaines, un e-commerce en 3-5 semaines."
                  }
                ].map((avantage, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 text-center">
                    <div className="flex justify-center mb-4">{avantage.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{avantage.title}</h3>
                    <p className="text-gray-600 text-sm">{avantage.desc}</p>
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-600 text-lg">
                Nous avons également rédigé un guide complet sur la{" "}
                <Link href="/blog/creation-site-web-algerie-2024" className="text-green-600 hover:text-green-700 underline font-medium">
                  création de site web en Algérie
                </Link>{" "}
                qui détaille tout notre processus de travail, nos technologies et nos méthodologies.
              </p>
            </div>

            {/* Section 10: Process pour obtenir un devis */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <FileText className="w-8 h-8 text-green-500" />
                Comment Obtenir un Devis Chez Symloop (4 Étapes Simples)
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Obtenir un <strong>devis pour votre site web</strong> chez Symloop est simple, rapide et gratuit. Voici comment ça marche.
              </p>

              <div className="relative">
                {[
                  {
                    step: 1,
                    title: "Contactez-nous",
                    desc: "Appelez-nous au +213 549 575 512, envoyez-nous un message WhatsApp, ou remplissez notre formulaire de contact en ligne. Décrivez brièvement votre projet : type de site, fonctionnalités souhaitées, budget approximatif.",
                    icon: <Phone className="w-6 h-6 text-white" />,
                    color: "bg-blue-500"
                  },
                  {
                    step: 2,
                    title: "Consultation gratuite",
                    desc: "Un membre de notre équipe vous contacte sous 24h pour comprendre en détail vos besoins. Nous posons les bonnes questions pour cerner votre projet, vos objectifs business et votre budget. Cette consultation est 100% gratuite et sans engagement.",
                    icon: <MessageCircle className="w-6 h-6 text-white" />,
                    color: "bg-green-500"
                  },
                  {
                    step: 3,
                    title: "Devis détaillé sous 48h",
                    desc: "Nous vous envoyons un devis détaillé comprenant : la description des livrables, les technologies utilisées, le planning de livraison, les conditions de paiement, et le prix final sans surprise. Tout est clair et transparent.",
                    icon: <Calculator className="w-6 h-6 text-white" />,
                    color: "bg-purple-500"
                  },
                  {
                    step: 4,
                    title: "Lancement du projet",
                    desc: "Après validation du devis et signature du contrat, nous démarrons immédiatement. Vous recevez un accès à notre outil de suivi de projet pour suivre l'avancement en temps réel. Paiement en 2-3 tranches selon le montant.",
                    icon: <Zap className="w-6 h-6 text-white" />,
                    color: "bg-orange-500"
                  }
                ].map((etape, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    className="flex gap-6 mb-8">
                    <div className="shrink-0">
                      <div className={`w-14 h-14 ${etape.color} rounded-full flex items-center justify-center shadow-lg`}>
                        {etape.icon}
                      </div>
                      {i < 3 && <div className="w-0.5 h-8 bg-gray-200 mx-auto mt-2" />}
                    </div>
                    <div className="pb-4">
                      <span className="text-sm text-gray-400 font-medium">Étape {etape.step}</span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{etape.title}</h3>
                      <p className="text-gray-600">{etape.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-green-500" />
                Questions Fréquentes sur les Prix des Sites Web en Algérie
              </h2>

              <div className="space-y-4">
                {[
                  {
                    q: "Combien coûte un site web en Algérie en 2026 ?",
                    a: "En 2026, le prix d'un site web en Algérie varie selon le type : site vitrine basique de 30 000 à 80 000 DA, site vitrine professionnel de 80 000 à 200 000 DA, site e-commerce de 150 000 à 500 000 DA, application web sur mesure de 300 000 à 1 500 000 DA. Chez Symloop, les tarifs commencent à 32 000 DA."
                  },
                  {
                    q: "Quel est le prix d'un site vitrine en Algérie ?",
                    a: "Un site vitrine en Algérie coûte entre 30 000 DA et 200 000 DA. Le prix varie selon le nombre de pages (1-5 pages pour un basique, 5-15 pour un professionnel), la qualité du design (template vs sur mesure), et les fonctionnalités incluses (SEO, blog, multilingue)."
                  },
                  {
                    q: "Combien coûte un site e-commerce avec paiement CIB en Algérie ?",
                    a: "Un site e-commerce avec intégration CIB/Edahabia coûte entre 150 000 DA et 800 000 DA selon le nombre de produits, les fonctionnalités de gestion (stock, commandes, livraison), et le niveau de personnalisation. Symloop intègre tous les moyens de paiement algériens."
                  },
                  {
                    q: "Pourquoi les prix varient autant entre les prestataires ?",
                    a: "Les écarts de prix s'expliquent par la qualité du code, le niveau de design, les technologies utilisées, le support après livraison, et l'expérience du prestataire. Un freelance junior facturera moins qu'une agence expérimentée, mais la qualité et la fiabilité seront différentes."
                  },
                  {
                    q: "Est-ce que Symloop offre des facilités de paiement ?",
                    a: "Oui, Symloop propose des facilités de paiement flexibles. Paiement en 2 à 3 tranches selon le montant du projet. Un acompte de 30-50% au démarrage, le solde à la livraison. Contactez-nous au +213 549 575 512 pour discuter des modalités adaptées à votre budget."
                  },
                  {
                    q: "Quels sont les coûts annuels après la création du site ?",
                    a: "Les coûts récurrents incluent : hébergement (5 000-30 000 DA/an), domaine (1 500-4 000 DA/an), SSL (gratuit à 15 000 DA/an), maintenance (10 000-50 000 DA/an). Total : 20 000 à 120 000 DA/an selon le type de site. Symloop inclut l'hébergement et le SSL la première année."
                  },
                  {
                    q: "Comment obtenir un devis gratuit chez Symloop ?",
                    a: "Contactez-nous via WhatsApp au +213 549 575 512, par téléphone, ou via notre formulaire en ligne sur symloop.com/contact. Nous répondons sous 24h avec un devis détaillé gratuit et sans engagement, incluant les livrables, délais et prix final."
                  }
                ].map((faq, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-2">
                      <HelpCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      {faq.q}
                    </h3>
                    <p className="text-gray-600 ml-7">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 11: Articles connexes */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles Connexes</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Création de Site Web en Algérie : Guide Complet 2024",
                    desc: "Tout savoir sur la création de site web en Algérie. Technologies, processus, tarifs et conseils.",
                    slug: "/blog/creation-site-web-algerie-2024",
                    color: "bg-blue-500"
                  },
                  {
                    title: "Freelance vs Agence en Algérie : Comment Choisir ?",
                    desc: "Comparatif détaillé pour choisir entre un développeur freelance et une agence web en Algérie.",
                    slug: "/blog/freelance-vs-agence-algerie",
                    color: "bg-orange-500"
                  },
                  {
                    title: "Comment Choisir un Développeur Web en Algérie",
                    desc: "Les critères essentiels pour sélectionner le bon développeur pour votre projet web en Algérie.",
                    slug: "/blog/comment-choisir-developpeur-algerie",
                    color: "bg-purple-500"
                  }
                ].map((article, i) => (
                  <Link key={i} href={article.slug} className="group block bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-green-200 transition-colors shadow-sm">
                    <div className={`h-3 ${article.color}`} />
                    <div className="p-5">
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">{article.title}</h3>
                      <p className="text-gray-500 text-sm">{article.desc}</p>
                      <span className="inline-flex items-center gap-1 text-green-600 text-sm font-medium mt-3">
                        Lire l'article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {relatedBlogs && relatedBlogs.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Autres Articles Recommandés</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {relatedBlogs.map((related, i) => (
                      <Link key={i} href={`/blog/${related.slug}`} className="group block bg-gray-50 rounded-lg p-4 hover:bg-green-50 transition-colors">
                        <h4 className="font-semibold text-gray-900 text-sm group-hover:text-green-600 transition-colors mb-1">{related.title}</h4>
                        <p className="text-gray-500 text-xs line-clamp-2">{related.excerpt}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </article>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Obtenez Votre Devis Gratuit en 24h
              </h2>
              <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                Vous connaissez maintenant les prix du marché. Contactez Symloop pour un devis détaillé, transparent et sans engagement.
                Des tarifs compétitifs, des technologies modernes, et un support garanti.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/213549575512?text=Bonjour, je souhaite un devis pour la création d'un site web" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                  <MessageCircle className="w-5 h-5" /> WhatsApp : +213 549 575 512
                </a>
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                  <Phone className="w-5 h-5" /> Demander un Devis
                </Link>
              </div>
              <p className="text-green-200 text-sm mt-6">
                Appelez-nous directement : <a href="tel:+213549575512" className="text-white font-semibold hover:underline">+213 549 575 512</a>
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
