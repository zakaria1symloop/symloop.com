"use client";
import { Calendar, Clock, User, ArrowLeft, Share2, Globe, Smartphone, Shield, Zap, CheckCircle, Star, TrendingUp, MessageCircle, Award, BarChart3, Layers, Eye, Target, Lock, Rocket, Users, DollarSign, ArrowRight, Home, Wifi, ThermometerSun, Video, Lightbulb, Building2, MapPin, Wrench, Package, Phone } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug, getRelatedBlogs } from '../../data/blogs';

export default function SmartHomePromoteurImmobilierAlgerie2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const blog = getBlogBySlug('smart-home-promoteur-immobilier-algerie-2026');
  const relatedBlogs = getRelatedBlogs('smart-home-promoteur-immobilier-algerie-2026', 3);

  const faqItems = [
    {
      question: "Combien co\u00fbte l'int\u00e9gration smart home par appartement en Alg\u00e9rie ?",
      answer: "Chez Symloop, l'int\u00e9gration smart home par appartement en Alg\u00e9rie d\u00e9marre \u00e0 45 000 DA pour un F2 (2 pi\u00e8ces), 65 000 DA pour un F3, 85 000 DA pour un F4, et 120 000 DA pour une villa. Ce tarif inclut l'\u00e9clairage intelligent, la climatisation connect\u00e9e, l'interphone vid\u00e9o IP, les capteurs de s\u00e9curit\u00e9, les prises connect\u00e9es et l'application de contr\u00f4le Symloop. Devis gratuit pour les promoteurs immobiliers sur demande : +213 549 575 512."
    },
    {
      question: "Comment int\u00e9grer la domotique dans un programme immobilier en Alg\u00e9rie ?",
      answer: "Symloop propose un processus en 5 \u00e9tapes pour les promoteurs immobiliers : 1) \u00c9tude technique gratuite du programme immobilier, 2) C\u00e2blage pr\u00e9-installation int\u00e9gr\u00e9 au gros \u0153uvre, 3) Installation des \u00e9quipements domotiques (interrupteurs, capteurs, cam\u00e9ras), 4) Configuration et tests de chaque appartement, 5) Formation du gardien et remise de la documentation. Le processus d\u00e9marre d\u00e8s la phase de construction pour un co\u00fbt optimis\u00e9."
    },
    {
      question: "Quels sont les avantages du smart home pour un promoteur immobilier ?",
      answer: "Les avantages pour un promoteur immobilier en Alg\u00e9rie sont majeurs : augmentation de la valeur des biens de 15 \u00e0 25%, argument de vente diff\u00e9renciant face \u00e0 la concurrence, acc\u00e9l\u00e9ration des ventes (les logements smart home se vendent 30% plus vite), attraction d'une client\u00e8le premium pr\u00eate \u00e0 payer plus, image de marque innovante et moderne. En 2026, la domotique est devenue un crit\u00e8re de choix pour les acheteurs alg\u00e9riens."
    },
    {
      question: "Symloop installe-t-il la domotique dans les nouvelles constructions ?",
      answer: "Oui, Symloop est sp\u00e9cialis\u00e9 dans l'int\u00e9gration domotique pour les nouvelles constructions et les programmes immobiliers neufs en Alg\u00e9rie. Nous intervenons d\u00e8s la phase de gros \u0153uvre pour le pr\u00e9-c\u00e2blage, ce qui r\u00e9duit les co\u00fbts de 40% par rapport \u00e0 une installation post-construction. Plus de 500 logements \u00e9quip\u00e9s \u00e0 travers l'Alg\u00e9rie. Contact : +213 549 575 512."
    },
    {
      question: "Quelles villes en Alg\u00e9rie sont couvertes par Symloop pour le smart home ?",
      answer: "Symloop couvre les principales villes d'Alg\u00e9rie pour l'installation smart home : Alger, S\u00e9tif, Oran, Constantine, Annaba, Blida, Batna, Tlemcen, B\u00e9ja\u00efa, Tizi Ouzou, Djelfa, Biskra, M'sila et Bordj Bou Arr\u00e9ridj. Notre si\u00e8ge est bas\u00e9 \u00e0 S\u00e9tif, avec des \u00e9quipes d'intervention mobiles pour tout le territoire national. Les promoteurs immobiliers de toutes les wilayas peuvent b\u00e9n\u00e9ficier de nos services."
    },
    {
      question: "Le smart home augmente-t-il la valeur d'un bien immobilier en Alg\u00e9rie ?",
      answer: "Oui, les donn\u00e9es du march\u00e9 immobilier alg\u00e9rien en 2026 montrent qu'un logement \u00e9quip\u00e9 en domotique se vend entre 15 et 25% plus cher qu'un logement classique \u00e9quivalent. Pour un F3 vendu \u00e0 2 500 000 DA, l'int\u00e9gration smart home co\u00fbte 65 000 DA mais permet de vendre 375 000 \u00e0 625 000 DA de plus. Le retour sur investissement pour le promoteur est de 5x \u00e0 10x le co\u00fbt d'installation."
    }
  ];

  return (
    <>
      <Head>
        <title>Smart Home pour Promoteurs Immobiliers en Alg\u00e9rie 2026 | Solutions Domotiques Cl\u00e9 en Main | Symloop</title>
        <meta name="description" content="Solutions smart home cl\u00e9 en main pour promoteurs immobiliers en Alg\u00e9rie. Domotique par appartement \u00e0 partir de 45 000 DA. \u00c9clairage, climatisation, s\u00e9curit\u00e9, interphone vid\u00e9o. +500 logements \u00e9quip\u00e9s. Symloop S\u00e9tif." />
        <meta name="keywords" content="smart home promoteur immobilier alg\u00e9rie, domotique programme immobilier alg\u00e9rie, maison intelligente r\u00e9sidence alg\u00e9rie, solutions domotiques promoteur alg\u00e9rie 2026, int\u00e9gration smart home logements alg\u00e9rie, smart home real estate algeria, domotique appartement alg\u00e9rie, promoteur immobilier domotique s\u00e9tif, smart home alger oran constantine, \u00e9quipement domotique immeuble alg\u00e9rie, interphone vid\u00e9o ip alg\u00e9rie, \u00e9clairage intelligent appartement alg\u00e9rie" />
        <link rel="canonical" href="https://symloop.com/blog/smart-home-promoteur-immobilier-algerie-2026/" />

        <meta property="og:title" content="Smart Home pour Promoteurs Immobiliers en Alg\u00e9rie 2026 | Solutions Domotiques Cl\u00e9 en Main" />
        <meta property="og:description" content="Symloop propose des solutions domotiques cl\u00e9 en main pour promoteurs immobiliers en Alg\u00e9rie. \u00c0 partir de 45 000 DA/appartement. +500 logements \u00e9quip\u00e9s." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/smart-home-promoteur-immobilier-algerie-2026/" />
        <meta property="og:site_name" content="Symloop" />
        <meta property="og:locale" content="fr_DZ" />
        <meta property="og:locale:alternate" content="ar_DZ" />
        <meta property="og:locale:alternate" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Smart Home Promoteurs Immobiliers Alg\u00e9rie 2026 | Symloop" />
        <meta name="twitter:description" content="Solutions domotiques cl\u00e9 en main pour programmes immobiliers en Alg\u00e9rie. \u00c0 partir de 45 000 DA/appartement." />

        {/* Article structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Smart Home pour Promoteurs Immobiliers en Alg\u00e9rie 2026 : Solutions Domotiques Cl\u00e9 en Main",
            "description": "Solutions smart home cl\u00e9 en main pour promoteurs immobiliers en Alg\u00e9rie. Int\u00e9gration domotique compl\u00e8te par appartement \u00e0 partir de 45 000 DA.",
            "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
            "publisher": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
            "datePublished": "2026-03-31",
            "dateModified": "2026-03-31",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://symloop.com/blog/smart-home-promoteur-immobilier-algerie-2026/" },
            "articleSection": "Smart Home & IoT",
            "inLanguage": "fr-DZ",
            "keywords": "smart home promoteur immobilier alg\u00e9rie, domotique programme immobilier alg\u00e9rie, solutions domotiques promoteur alg\u00e9rie 2026"
          })}
        </script>

        {/* FAQ structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })}
        </script>

        {/* BreadcrumbList structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com/" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog/" },
              { "@type": "ListItem", "position": 3, "name": "Smart Home Promoteurs Immobiliers Alg\u00e9rie 2026", "item": "https://symloop.com/blog/smart-home-promoteur-immobilier-algerie-2026/" }
            ]
          })}
        </script>

        {/* SpeakableSpecification for AI/voice search */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Smart Home pour Promoteurs Immobiliers en Alg\u00e9rie 2026",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", ".prose p", "#faq"]
            },
            "url": "https://symloop.com/blog/smart-home-promoteur-immobilier-algerie-2026/"
          })}
        </script>

        {/* Product structured data for B2B offering */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Solutions Smart Home pour Promoteurs Immobiliers - Symloop Alg\u00e9rie",
            "description": "Int\u00e9gration domotique cl\u00e9 en main pour programmes immobiliers en Alg\u00e9rie. \u00c9clairage intelligent, climatisation connect\u00e9e, s\u00e9curit\u00e9, interphone vid\u00e9o IP, application de contr\u00f4le.",
            "brand": { "@type": "Brand", "name": "Symloop" },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "DZD",
              "lowPrice": "45000",
              "highPrice": "120000",
              "offerCount": "4",
              "offers": [
                { "@type": "Offer", "name": "Pack Smart Home F2", "price": "45000", "priceCurrency": "DZD", "description": "Domotique compl\u00e8te pour appartement F2 (2 pi\u00e8ces)" },
                { "@type": "Offer", "name": "Pack Smart Home F3", "price": "65000", "priceCurrency": "DZD", "description": "Domotique compl\u00e8te pour appartement F3 (3 pi\u00e8ces)" },
                { "@type": "Offer", "name": "Pack Smart Home F4", "price": "85000", "priceCurrency": "DZD", "description": "Domotique compl\u00e8te pour appartement F4 (4 pi\u00e8ces)" },
                { "@type": "Offer", "name": "Pack Smart Home Villa", "price": "120000", "priceCurrency": "DZD", "description": "Domotique compl\u00e8te pour villa individuelle" }
              ]
            },
            "areaServed": {
              "@type": "Country",
              "name": "Alg\u00e9rie"
            },
            "provider": {
              "@type": "Organization",
              "name": "Symloop",
              "url": "https://symloop.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "S\u00e9tif",
                "addressCountry": "DZ"
              },
              "telephone": "+213549575512"
            }
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

              {/* Breadcrumb */}
              <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 flex-wrap">
                  <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
                  <li>/</li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li>/</li>
                  <li className="text-cyan-400">Smart Home Promoteurs Immobiliers Alg&eacute;rie 2026</li>
                </ol>
              </nav>

              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="bg-cyan-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  {blog?.category || "Smart Home"}
                </span>
                <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-xs font-medium">
                  B2B Promoteurs
                </span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                  Mis &agrave; jour Mars 2026
                </span>
                <span className="text-gray-400 text-sm">{blog?.readTime || "15 min"}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Smart Home pour Promoteurs Immobiliers en <span className="text-cyan-400">Alg&eacute;rie</span> 2026 : Solutions Domotiques Cl&eacute; en Main
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Int&eacute;grez la domotique dans vos programmes immobiliers d&egrave;s la construction. &Eacute;clairage intelligent, climatisation connect&eacute;e, s&eacute;curit&eacute;, interphone vid&eacute;o IP. &Agrave; partir de 45 000 DA par appartement.
              </p>

              <div className="flex items-center gap-6 text-sm text-gray-400 flex-wrap">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {blog?.author || "Symloop Team"}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  31 Mars 2026
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  15 min de lecture
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-600" />
              Sommaire de l&apos;article
            </h2>
            <nav className="grid sm:grid-cols-2 gap-2">
              {[
                { num: "1", title: "Pourquoi int\u00e9grer la domotique dans vos programmes", id: "pourquoi" },
                { num: "2", title: "Solutions Symloop pour promoteurs", id: "solutions" },
                { num: "3", title: "\u00c9quipements domotiques inclus", id: "equipements" },
                { num: "4", title: "Prix par appartement (F2, F3, F4, Villa)", id: "prix" },
                { num: "5", title: "Processus d'int\u00e9gration en 5 \u00e9tapes", id: "processus" },
                { num: "6", title: "Villes couvertes en Alg\u00e9rie", id: "villes" },
                { num: "7", title: "Questions fr\u00e9quentes (FAQ)", id: "faq" },
              ].map((item) => (
                <a key={item.id} href={`#${item.id}`} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group">
                  <span className="w-7 h-7 bg-cyan-100 text-cyan-700 rounded-lg flex items-center justify-center text-sm font-bold group-hover:bg-cyan-500 group-hover:text-white transition-colors">{item.num}</span>
                  <span className="text-gray-700 text-sm group-hover:text-cyan-700 transition-colors">{item.title}</span>
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Content */}
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* AI/LLM-optimized quick answer block */}
            <div className="bg-gradient-to-r from-cyan-50 to-teal-50 border border-cyan-200 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-bold text-gray-900 mb-3">En bref : Smart Home pour Promoteurs Immobiliers en Alg&eacute;rie</h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                <strong>Symloop</strong> propose des solutions smart home cl&eacute; en main pour promoteurs immobiliers en Alg&eacute;rie.
                Int&eacute;gration domotique compl&egrave;te par appartement &agrave; partir de <strong>45 000 DA/unit&eacute;</strong>.
                &Eacute;clairage intelligent, climatisation connect&eacute;e, s&eacute;curit&eacute;, interphone vid&eacute;o IP,
                contr&ocirc;le via application. Plus de <strong>500 logements &eacute;quip&eacute;s</strong> &agrave; travers l&apos;Alg&eacute;rie.
                Contact : <strong>+213 549 575 512</strong>.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Pour qui :</strong> Promoteurs immobiliers, entreprises de construction, soci&eacute;t&eacute;s de promotion immobili&egrave;re
                dans toute l&apos;Alg&eacute;rie (Alger, S&eacute;tif, Oran, Constantine, Annaba, Blida, et toutes les wilayas).
                <strong> ROI :</strong> +15 &agrave; 25% sur la valeur de revente des biens &eacute;quip&eacute;s. Logements smart home vendus 30% plus rapidement.
              </p>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                Le march&eacute; immobilier alg&eacute;rien en 2026 conna&icirc;t une transformation profonde. Les acheteurs
                recherchent des <strong className="text-cyan-600">logements intelligents</strong> avec &eacute;clairage connect&eacute;,
                s&eacute;curit&eacute; avanc&eacute;e et confort automatis&eacute;. Pour les <strong>promoteurs immobiliers en Alg&eacute;rie</strong>,
                int&eacute;grer la domotique d&egrave;s la construction est devenu un avantage comp&eacute;titif d&eacute;cisif
                qui augmente la valeur des biens de <strong>15 &agrave; 25%</strong>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                <strong>Symloop</strong>, entreprise technologique bas&eacute;e &agrave; <strong>S&eacute;tif</strong>, accompagne les
                promoteurs immobiliers dans l&apos;int&eacute;gration de solutions <strong>smart home cl&eacute; en main</strong> pour
                leurs programmes r&eacute;sidentiels. Plus de <strong>500 logements &eacute;quip&eacute;s</strong> en Alg&eacute;rie,
                des packages adapt&eacute;s du F2 &agrave; la villa, et un processus optimis&eacute; pour les chantiers neufs.
              </p>
            </div>

            {/* Section 1: Pourquoi */}
            <section id="pourquoi" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-cyan-600" />
                </div>
                1. Pourquoi Int&eacute;grer la Domotique dans Vos Programmes Immobiliers ?
              </h2>

              <div className="bg-gradient-to-r from-cyan-50 to-teal-50 border-l-4 border-cyan-500 rounded-r-2xl p-8 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Retour sur Investissement pour le Promoteur</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600">+15-25%</div>
                    <div className="text-sm text-gray-600">Plus-value sur le bien</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600">30%</div>
                    <div className="text-sm text-gray-600">Vente plus rapide</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600">500+</div>
                    <div className="text-sm text-gray-600">Logements &eacute;quip&eacute;s</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600">5-10x</div>
                    <div className="text-sm text-gray-600">ROI pour le promoteur</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: DollarSign,
                    title: "Augmentation de la Valeur des Biens (+15 \u00e0 25%)",
                    desc: "Un appartement \u00e9quip\u00e9 en domotique se vend significativement plus cher. Pour un F3 \u00e0 2 500 000 DA, l'int\u00e9gration smart home co\u00fbte 65 000 DA mais g\u00e9n\u00e8re une plus-value de 375 000 \u00e0 625 000 DA. Le retour sur investissement est de 5 \u00e0 10 fois le co\u00fbt d'installation.",
                    color: "bg-green-100",
                    iconColor: "text-green-600"
                  },
                  {
                    icon: Rocket,
                    title: "Acc\u00e9l\u00e9ration des Ventes (30% Plus Rapide)",
                    desc: "Les programmes immobiliers proposant la domotique se vendent plus vite. En 2026, les acheteurs alg\u00e9riens comparent activement les r\u00e9sidences et privil\u00e9gient celles offrant des fonctionnalit\u00e9s smart home. C'est un argument de vente imm\u00e9diat sur plan.",
                    color: "bg-cyan-100",
                    iconColor: "text-cyan-600"
                  },
                  {
                    icon: Award,
                    title: "Diff\u00e9renciation Face \u00e0 la Concurrence",
                    desc: "Sur un march\u00e9 immobilier alg\u00e9rien de plus en plus concurrentiel, la domotique est un \u00e9l\u00e9ment diff\u00e9renciant majeur. Quand tous les promoteurs proposent le m\u00eame type de finitions, le smart home fait la diff\u00e9rence et positionne votre marque en haut de gamme.",
                    color: "bg-purple-100",
                    iconColor: "text-purple-600"
                  },
                  {
                    icon: Users,
                    title: "Attraction d'une Client\u00e8le Premium",
                    desc: "La domotique attire une client\u00e8le \u00e0 plus fort pouvoir d'achat : cadres, m\u00e9decins, diaspora alg\u00e9rienne, entrepreneurs. Ces acheteurs sont pr\u00eats \u00e0 payer un premium significatif pour un logement connect\u00e9 et moderne.",
                    color: "bg-orange-100",
                    iconColor: "text-orange-600"
                  },
                  {
                    icon: Star,
                    title: "Image de Marque Innovante",
                    desc: "En tant que promoteur proposant le smart home, vous vous positionnez comme un acteur innovant et tourn\u00e9 vers l'avenir. Cela renforce la confiance des acheteurs et facilite la commercialisation de vos futurs programmes.",
                    color: "bg-teal-100",
                    iconColor: "text-teal-600"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-5 items-start p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-md transition-shadow">
                    <div className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2: Solutions Symloop */}
            <section id="solutions" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                  <Package className="w-5 h-5 text-teal-600" />
                </div>
                2. Solutions Symloop pour Promoteurs Immobiliers
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Symloop propose des <strong>packages domotiques adapt&eacute;s</strong> &agrave; chaque type de logement dans votre
                programme immobilier. Chaque package est con&ccedil;u pour maximiser la valeur ajout&eacute;e tout en maintenant
                un co&ucirc;t d&apos;int&eacute;gration optimal pour le promoteur.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-cyan-200 transition-colors relative overflow-hidden">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                    <Home className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Pack Smart Home F2</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Appartement 2 pi&egrave;ces : 4 interrupteurs intelligents, 1 thermostat connect&eacute;, 1 d&eacute;tecteur de mouvement,
                    1 interphone vid&eacute;o IP, 2 prises connect&eacute;es, application Symloop.
                  </p>
                  <div className="text-cyan-600 font-bold text-lg">45 000 DA / appartement</div>
                  <div className="text-xs text-gray-500 mt-1">Installation : 1 jour par unit&eacute;</div>
                </div>

                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-teal-200 transition-colors relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-teal-500 text-white text-xs px-2 py-1 rounded-full font-medium">Populaire</div>
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                    <Home className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Pack Smart Home F3</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Appartement 3 pi&egrave;ces : 6 interrupteurs intelligents, 2 thermostats, 2 d&eacute;tecteurs de mouvement,
                    1 interphone vid&eacute;o IP, 1 cam&eacute;ra int&eacute;rieure, 3 prises connect&eacute;es, application Symloop.
                  </p>
                  <div className="text-teal-600 font-bold text-lg">65 000 DA / appartement</div>
                  <div className="text-xs text-gray-500 mt-1">Installation : 1,5 jours par unit&eacute;</div>
                </div>

                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-200 transition-colors relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">Premium</div>
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Pack Smart Home F4</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Appartement 4 pi&egrave;ces : 8 interrupteurs intelligents, 3 thermostats, 3 d&eacute;tecteurs, 1 interphone vid&eacute;o IP,
                    2 cam&eacute;ras, capteur d&apos;ouverture porte, 4 prises connect&eacute;es, application Symloop.
                  </p>
                  <div className="text-blue-600 font-bold text-lg">85 000 DA / appartement</div>
                  <div className="text-xs text-gray-500 mt-1">Installation : 2 jours par unit&eacute;</div>
                </div>

                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-purple-200 transition-colors relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-medium">Haut de Gamme</div>
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Pack Smart Home Villa</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Villa individuelle : 12+ interrupteurs, 4+ thermostats, syst&egrave;me d&apos;alarme complet, 4 cam&eacute;ras ext&eacute;rieures,
                    portail motoris&eacute; connect&eacute;, arrosage intelligent, volets roulants, application Symloop.
                  </p>
                  <div className="text-purple-600 font-bold text-lg">120 000 DA / villa</div>
                  <div className="text-xs text-gray-500 mt-1">Installation : 3 jours par unit&eacute;</div>
                </div>
              </div>

              {/* Volume discount */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-cyan-400" />
                  Tarifs d&eacute;gressifs pour les promoteurs (volume)
                </h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-white/10 rounded-xl">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">10-50 unit&eacute;s</div>
                    <div className="text-gray-300 text-sm">-10% sur le tarif unitaire</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl">
                    <div className="text-2xl font-bold text-teal-400 mb-1">50-100 unit&eacute;s</div>
                    <div className="text-gray-300 text-sm">-15% sur le tarif unitaire</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl">
                    <div className="text-2xl font-bold text-green-400 mb-1">100+ unit&eacute;s</div>
                    <div className="text-gray-300 text-sm">Tarif n&eacute;goci&eacute; sur mesure</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-4 text-center">
                  Contactez-nous pour un devis promoteur personnalis&eacute; : <strong className="text-white">+213 549 575 512</strong>
                </p>
              </div>
            </section>

            {/* Section 3: Equipements */}
            <section id="equipements" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Wifi className="w-5 h-5 text-blue-600" />
                </div>
                3. &Eacute;quipements Domotiques Inclus dans Chaque Pack
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Chaque pack smart home Symloop int&egrave;gre des &eacute;quipements de <strong>qualit&eacute; professionnelle</strong> con&ccedil;us
                pour une dur&eacute;e de vie de 10 ans minimum. Tous les &eacute;quipements sont compatibles entre eux et
                contr&ocirc;lables via l&apos;application Symloop.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                {[
                  {
                    icon: Lightbulb,
                    title: "\u00c9clairage Intelligent",
                    desc: "Interrupteurs connect\u00e9s WiFi/Zigbee, sc\u00e9narios d'\u00e9clairage (jour, nuit, cin\u00e9ma), allumage/extinction automatique par d\u00e9tection de pr\u00e9sence, contr\u00f4le vocal.",
                    color: "bg-yellow-100",
                    iconColor: "text-yellow-600"
                  },
                  {
                    icon: ThermometerSun,
                    title: "Climatisation Connect\u00e9e",
                    desc: "Thermostats intelligents avec programmation horaire, contr\u00f4le \u00e0 distance du climatiseur, gestion zone par zone, \u00e9conomie d'\u00e9nergie automatique de 20-30%.",
                    color: "bg-red-100",
                    iconColor: "text-red-600"
                  },
                  {
                    icon: Shield,
                    title: "S\u00e9curit\u00e9 Avanc\u00e9e",
                    desc: "D\u00e9tecteurs de mouvement, capteurs d'ouverture porte/fen\u00eatre, alarme intrusion, d\u00e9tecteur de fum\u00e9e connect\u00e9, notifications en temps r\u00e9el sur smartphone.",
                    color: "bg-red-100",
                    iconColor: "text-red-600"
                  },
                  {
                    icon: Video,
                    title: "Interphone Vid\u00e9o IP",
                    desc: "Interphone vid\u00e9o HD avec ouverture \u00e0 distance, historique des visites, communication bidirectionnelle, compatible 4G. Remplacement de l'interphone classique.",
                    color: "bg-blue-100",
                    iconColor: "text-blue-600"
                  },
                  {
                    icon: Zap,
                    title: "Prises Connect\u00e9es",
                    desc: "Prises intelligentes avec suivi de consommation \u00e9lectrique, programmation horaire, coupure \u00e0 distance, protection contre les surtensions.",
                    color: "bg-green-100",
                    iconColor: "text-green-600"
                  },
                  {
                    icon: Smartphone,
                    title: "Application Symloop",
                    desc: "Application mobile iOS/Android pour contr\u00f4ler tous les \u00e9quipements. Interface intuitive en fran\u00e7ais et arabe. Sc\u00e9narios personnalis\u00e9s, partage familial, historique.",
                    color: "bg-cyan-100",
                    iconColor: "text-cyan-600"
                  }
                ].map((item, index) => (
                  <div key={index} className="p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-md transition-shadow">
                    <div className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                      <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Wifi className="w-5 h-5 text-cyan-600" />
                  Protocoles et compatibilit&eacute;
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tous les &eacute;quipements Symloop utilisent les protocoles <strong>WiFi, Zigbee et Z-Wave</strong> pour une
                  communication fiable et s&eacute;curis&eacute;e. Compatible avec les assistants vocaux (Google Home, Alexa).
                  Hub central inclus dans chaque appartement pour une gestion centralis&eacute;e. Garantie 2 ans sur tous les &eacute;quipements.
                </p>
              </div>
            </section>

            {/* Section 4: Prix */}
            <section id="prix" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                4. Prix de l&apos;Int&eacute;gration Smart Home par Appartement en Alg&eacute;rie
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Voici les <strong>tarifs d&eacute;taill&eacute;s</strong> pour l&apos;int&eacute;gration smart home Symloop en 2026.
                Ces prix incluent les &eacute;quipements, l&apos;installation, la configuration, les tests et la garantie 2 ans.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-cyan-600 text-white">
                      <th className="px-6 py-4 text-left font-semibold">Type de Logement</th>
                      <th className="px-6 py-4 text-left font-semibold">&Eacute;quipements</th>
                      <th className="px-6 py-4 text-left font-semibold">Prix/Unit&eacute;</th>
                      <th className="px-6 py-4 text-left font-semibold">Installation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="px-6 py-4 font-medium text-gray-900">F2 (2 pi&egrave;ces)</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">4 interrupteurs, 1 thermostat, 1 interphone vid&eacute;o, 2 prises</td>
                      <td className="px-6 py-4 font-bold text-cyan-600">45 000 DA</td>
                      <td className="px-6 py-4 text-gray-500 text-sm">1 jour</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-cyan-50/50">
                      <td className="px-6 py-4 font-medium text-gray-900">F3 (3 pi&egrave;ces)</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">6 interrupteurs, 2 thermostats, 1 cam&eacute;ra, 1 interphone, 3 prises</td>
                      <td className="px-6 py-4 font-bold text-cyan-600">65 000 DA</td>
                      <td className="px-6 py-4 text-gray-500 text-sm">1,5 jours</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-6 py-4 font-medium text-gray-900">F4 (4 pi&egrave;ces)</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">8 interrupteurs, 3 thermostats, 2 cam&eacute;ras, 1 interphone, 4 prises</td>
                      <td className="px-6 py-4 font-bold text-cyan-600">85 000 DA</td>
                      <td className="px-6 py-4 text-gray-500 text-sm">2 jours</td>
                    </tr>
                    <tr className="bg-purple-50/50">
                      <td className="px-6 py-4 font-medium text-gray-900">Villa</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">12+ interrupteurs, 4+ thermostats, alarme, 4 cam&eacute;ras, portail connect&eacute;</td>
                      <td className="px-6 py-4 font-bold text-purple-600">120 000 DA</td>
                      <td className="px-6 py-4 text-gray-500 text-sm">3 jours</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* ROI Calculator */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                  Calcul du ROI pour un Programme de 50 Appartements F3
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Co&ucirc;t d&apos;int&eacute;gration</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex justify-between"><span>50 x 65 000 DA</span><strong>3 250 000 DA</strong></li>
                      <li className="flex justify-between"><span>Remise volume (-10%)</span><strong>-325 000 DA</strong></li>
                      <li className="flex justify-between border-t pt-2 font-bold text-gray-900"><span>Total investissement</span><span>2 925 000 DA</span></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Plus-value g&eacute;n&eacute;r&eacute;e</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex justify-between"><span>Plus-value min. (+15%)</span><strong>18 750 000 DA</strong></li>
                      <li className="flex justify-between"><span>Plus-value max. (+25%)</span><strong>31 250 000 DA</strong></li>
                      <li className="flex justify-between border-t pt-2 font-bold text-green-600"><span>ROI net minimum</span><span>15 825 000 DA</span></li>
                    </ul>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">* Calcul bas&eacute; sur un prix moyen de vente F3 de 2 500 000 DA. ROI = plus-value - co&ucirc;t d&apos;int&eacute;gration.</p>
              </div>

              {/* Pricing Warning */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mt-6">
                <div className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5">&#x26A0;&#xFE0F;</div>
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs 2026.</strong> Le tarif exact d&eacute;pend du nombre d&apos;unit&eacute;s et des sp&eacute;cificit&eacute;s du programme. <strong>
                  <a href="https://wa.me/213549575512?text=Bonjour, je suis promoteur immobilier et je souhaite un devis pour l'int%C3%A9gration smart home dans mon programme" className="text-cyan-700 underline">
                  Contactez Symloop pour un devis promoteur gratuit</a></strong>.
                </p>
              </div>
            </section>

            {/* Section 5: Processus */}
            <section id="processus" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-indigo-600" />
                </div>
                5. Processus d&apos;Int&eacute;gration Domotique pour Promoteurs
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Symloop a d&eacute;velopp&eacute; un <strong>processus en 5 &eacute;tapes</strong> sp&eacute;cialement con&ccedil;u pour les
                promoteurs immobiliers. L&apos;int&eacute;gration d&eacute;marre d&egrave;s la phase de gros &oelig;uvre pour optimiser
                les co&ucirc;ts et garantir une installation propre et invisible.
              </p>

              <div className="space-y-6">
                {[
                  { num: "01", title: "\u00c9tude Technique Gratuite", desc: "Visite du chantier, analyse des plans architecturaux, identification des besoins par type de logement (F2, F3, F4, villa). Livraison d'un cahier des charges technique d\u00e9taill\u00e9 et d'un devis personnalis\u00e9 sous 48h.", color: "bg-cyan-500", duration: "2-3 jours" },
                  { num: "02", title: "Pr\u00e9-c\u00e2blage Int\u00e9gr\u00e9 au Gros \u0152uvre", desc: "Pose des gaines, c\u00e2bles et bo\u00eetiers d'encastrement pendant la phase de construction. Co\u00fbt r\u00e9duit de 40% vs installation post-construction. Coordination avec votre \u00e9quipe de chantier.", color: "bg-teal-500", duration: "Pendant le gros \u0153uvre" },
                  { num: "03", title: "Installation des \u00c9quipements", desc: "Pose des interrupteurs intelligents, thermostats, capteurs, cam\u00e9ras, interphones vid\u00e9o IP et hub central. Travail propre et soign\u00e9, compatible avec toutes les finitions.", color: "bg-blue-500", duration: "1-3 jours/unit\u00e9" },
                  { num: "04", title: "Configuration et Tests", desc: "Programmation de chaque \u00e9quipement, cr\u00e9ation des sc\u00e9narios par d\u00e9faut (arriv\u00e9e, d\u00e9part, nuit, \u00e9conomie d'\u00e9nergie), tests complets de chaque appartement. Rapport de test livr\u00e9.", color: "bg-indigo-500", duration: "0,5 jour/unit\u00e9" },
                  { num: "05", title: "Formation et Remise Documentation", desc: "Formation du gardien/concierge \u00e0 la gestion du syst\u00e8me. Guide utilisateur en fran\u00e7ais et arabe pour chaque acheteur. Support t\u00e9l\u00e9phonique inclus pendant 6 mois apr\u00e8s livraison.", color: "bg-purple-500", duration: "1 jour" },
                ].map((step, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className={`${step.color} text-white w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                      {step.num}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <h3 className="font-bold text-gray-900 text-lg">{step.title}</h3>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{step.duration}</span>
                      </div>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mt-8">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-teal-600" />
                  Avantage du pr&eacute;-c&acirc;blage : -40% sur les co&ucirc;ts
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  En int&eacute;grant le c&acirc;blage domotique pendant la phase de gros &oelig;uvre, le co&ucirc;t est r&eacute;duit de
                  <strong> 40%</strong> par rapport &agrave; une installation apr&egrave;s construction. Pas de saign&eacute;es dans les murs,
                  pas de c&acirc;bles apparents, finition parfaite. C&apos;est pourquoi Symloop recommande aux promoteurs de nous
                  contacter d&egrave;s la phase de planification du programme immobilier.
                </p>
              </div>
            </section>

            {/* Section 6: Villes couvertes */}
            <section id="villes" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-600" />
                </div>
                6. Villes Couvertes par Symloop pour le Smart Home en Alg&eacute;rie
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Symloop installe des solutions smart home pour promoteurs immobiliers dans les principales villes
                d&apos;Alg&eacute;rie. Notre si&egrave;ge est &agrave; <strong>S&eacute;tif</strong>, avec des &eacute;quipes
                d&apos;intervention mobiles couvrant tout le territoire national.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Alger", "S\u00e9tif", "Oran", "Constantine", "Annaba", "Blida",
                  "Batna", "Tlemcen", "B\u00e9ja\u00efa", "Tizi Ouzou", "Djelfa", "Biskra",
                  "Chlef", "Skikda", "Mostaganem", "M\u00e9d\u00e9a", "M'sila", "Bordj Bou Arr\u00e9ridj"
                ].map((city) => (
                  <span key={city} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-cyan-100 hover:text-cyan-700 transition-colors">
                    {city}
                  </span>
                ))}
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-cyan-600" />
                  Intervention sur tout le territoire national
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  M&ecirc;me si votre programme immobilier est situ&eacute; dans une wilaya non list&eacute;e, Symloop peut intervenir.
                  Nos &eacute;quipes se d&eacute;placent sur l&apos;ensemble du territoire alg&eacute;rien pour les projets de plus de 20 unit&eacute;s.
                  Frais de d&eacute;placement inclus pour les programmes de plus de 50 logements.
                </p>
              </div>
            </section>

            {/* Section 7: FAQ */}
            <section id="faq" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-gray-600" />
                </div>
                7. Questions Fr&eacute;quentes sur le Smart Home pour Promoteurs en Alg&eacute;rie
              </h2>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <details key={index} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                      <h3 className="font-semibold text-gray-900 pr-4">{item.question}</h3>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Why Symloop for Promoteurs */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-cyan-400" />
                  Pourquoi les Promoteurs Immobiliers Choisissent Symloop
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Plus de 500 logements \u00e9quip\u00e9s en Alg\u00e9rie",
                    "Intervention d\u00e8s la phase gros \u0153uvre (-40% co\u00fbt)",
                    "Packages adapt\u00e9s : F2, F3, F4, Villa",
                    "Tarifs d\u00e9gressifs pour gros volumes",
                    "\u00c9quipe technique bas\u00e9e \u00e0 S\u00e9tif, Alg\u00e9rie",
                    "Garantie 2 ans sur tous les \u00e9quipements",
                    "Application mobile en fran\u00e7ais et arabe",
                    "Support t\u00e9l\u00e9phonique 6 mois post-livraison"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Internal links */}
            <section className="mb-12">
              <h3 className="font-bold text-gray-900 mb-4">Articles connexes</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/blog/maison-intelligente-smart-home-algerie-2026" className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-colors text-sm text-gray-700 hover:text-cyan-700">
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                  Maison Intelligente &amp; Smart Home en Alg&eacute;rie 2026
                </Link>
                <Link href="/blog/iot-internet-des-objets-algerie-2026" className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-colors text-sm text-gray-700 hover:text-cyan-700">
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                  IoT &amp; Internet des Objets en Alg&eacute;rie 2026
                </Link>
                <Link href="/blog/developpement-site-web-algerie-2026" className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-colors text-sm text-gray-700 hover:text-cyan-700">
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                  D&eacute;veloppement de Site Web en Alg&eacute;rie 2026
                </Link>
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12 pt-8 border-t border-gray-100">
              {(blog?.tags || [
                "smart home", "domotique", "promoteur immobilier", "alg\u00e9rie", "maison intelligente",
                "interphone vid\u00e9o", "\u00e9clairage intelligent", "s\u00e9curit\u00e9 connect\u00e9e", "S\u00e9tif",
                "IoT", "climatisation connect\u00e9e", "programme immobilier"
              ]).map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Promoteur Immobilier ? Int&eacute;grez le Smart Home dans Votre Programme
            </h2>
            <p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto">
              Obtenez un devis promoteur gratuit et personnalis&eacute; sous 48h. Notre &eacute;quipe technique se d&eacute;place
              sur votre chantier pour une &eacute;tude technique compl&egrave;te. Plus de 500 logements d&eacute;j&agrave; &eacute;quip&eacute;s en Alg&eacute;rie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/213549575512?text=Bonjour, je suis promoteur immobilier et je souhaite int%C3%A9grer le smart home dans mon programme. Merci de me contacter."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Devis Promoteur WhatsApp
              </a>
              <a
                href="tel:+213549575512"
                className="inline-flex items-center justify-center gap-2 bg-cyan-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-cyan-800 transition-colors border border-cyan-500"
              >
                <Phone className="w-5 h-5" />
                +213 549 575 512
              </a>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedBlogs && relatedBlogs.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Articles Similaires</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedBlogs.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all">
                      <span className="text-xs font-medium text-cyan-600 mb-2 block">{post.category}</span>
                      <h3 className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors mb-2">
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
