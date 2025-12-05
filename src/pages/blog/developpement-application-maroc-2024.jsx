"use client";
import { ArrowLeft, Smartphone, CheckCircle, MessageCircle, Globe, Zap, Shield, TrendingUp, Phone, Clock, DollarSign, MapPin, Users, Building, CreditCard, ShoppingCart, Briefcase, Star, ArrowRight, Target, Award, Layers, Database, Cloud, Code } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug } from '../../data/blogs';

export default function DeveloppementMaroc() {
  const blog = getBlogBySlug('developpement-application-maroc-2024');

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Développement Application Mobile & Web au Maroc 2024 - Agence Expert",
    "description": "Services de développement web et mobile pour le Maroc. Applications iOS/Android, sites e-commerce, intégration paiement CMI. Agence experte marché marocain.",
    "author": { "@type": "Organization", "name": "Symloop" },
    "publisher": { "@type": "Organization", "name": "Symloop", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
    "datePublished": "2024-02-01",
    "dateModified": "2024-12-01",
    "mainEntityOfPage": "https://symloop.com/blog/developpement-application-maroc-2024"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Combien coûte une application mobile au Maroc ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Le coût varie selon la complexité : application simple 30 000 - 80 000 MAD, application e-commerce 80 000 - 200 000 MAD, plateforme complexe 200 000 - 500 000+ MAD." }
      },
      {
        "@type": "Question",
        "name": "Comment intégrer le paiement en ligne au Maroc ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Nous intégrons CMI (Centre Monétique Interbancaire), PayZone, CashPlus, et les paiements carte bancaire marocains. Conformité totale avec la réglementation Bank Al-Maghrib." }
      },
      {
        "@type": "Question",
        "name": "Quels délais pour développer un site e-commerce au Maroc ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Un site e-commerce basique prend 4-6 semaines, une boutique complète avec paiement CMI 8-12 semaines, une marketplace complexe 3-6 mois." }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Développement Application Mobile & Web au Maroc 2024 | Symloop</title>
        <meta name="description" content="Services de développement web et mobile pour le Maroc. Applications iOS/Android, sites e-commerce avec paiement CMI, solutions entreprise. Agence experte marché marocain." />
        <meta name="keywords" content="développement application maroc, agence web casablanca, application mobile rabat, site e-commerce maroc, développeur web maroc, paiement CMI maroc, agence digitale marrakech, application iOS Android maroc, création site internet maroc, développement logiciel maroc" />
        <link rel="canonical" href="https://symloop.com/blog/developpement-application-maroc-2024" />
        <meta property="og:title" content="Développement Application Mobile & Web au Maroc 2024" />
        <meta property="og:description" content="Services de développement web et mobile pour le Maroc. Applications, e-commerce, solutions entreprise." />
        <meta property="og:url" content="https://symloop.com/blog/developpement-application-maroc-2024" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Head>

      <div className="min-h-screen bg-white">
        <section className="bg-black text-white py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8">
                <ArrowLeft className="w-4 h-4" /> Retour au blog
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-green-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Globe className="w-4 h-4" />Maroc
                </span>
                <span className="text-gray-400 text-sm flex items-center gap-1">
                  <Clock className="w-4 h-4" /> 12 min de lecture
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Développement <span className="text-green-400">Application</span> au Maroc 2024
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Votre partenaire tech pour le marché marocain. Applications mobiles, sites web,
                e-commerce avec intégration CMI et solutions entreprise adaptées au Royaume.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 px-4 py-2 rounded-lg">
                  <span className="text-green-400 font-bold">35M+</span>
                  <span className="text-gray-300 text-sm ml-2">Utilisateurs Internet</span>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-lg">
                  <span className="text-green-400 font-bold">80%</span>
                  <span className="text-gray-300 text-sm ml-2">Taux de Smartphone</span>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-lg">
                  <span className="text-green-400 font-bold">MAD</span>
                  <span className="text-gray-300 text-sm ml-2">Facturation en Dirham</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                Le <span className="text-green-600 font-semibold">Maroc</span> est l'un des marchés numériques les plus dynamiques
                d'Afrique avec plus de <strong>35 millions d'utilisateurs internet</strong> et un taux de pénétration smartphone
                de <strong>80%</strong>. <span className="text-green-600 font-semibold">Symloop</span> accompagne les entreprises
                marocaines et internationales dans leur conquête de ce marché prometteur.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                De <strong>Casablanca</strong> à <strong>Marrakech</strong>, de <strong>Rabat</strong> à <strong>Tanger</strong>,
                nous développons des solutions digitales adaptées aux spécificités du marché marocain : paiement local (CMI),
                langues (français, arabe, darija), réglementations Bank Al-Maghrib et habitudes utilisateurs.
              </p>
            </div>

            {/* Statistiques marché */}
            <section className="mb-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Le Marché Digital Marocain en Chiffres</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { stat: "35M+", label: "Utilisateurs Internet", icon: Globe },
                  { stat: "80%", label: "Taux Smartphone", icon: Smartphone },
                  { stat: "15M+", label: "Acheteurs E-commerce", icon: ShoppingCart },
                  { stat: "+25%", label: "Croissance Annuelle", icon: TrendingUp }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 text-center shadow-sm">
                    <item.icon className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">{item.stat}</div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Services détaillés */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Nos Services pour le Maroc</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Smartphone,
                    title: "Applications Mobiles",
                    desc: "iOS, Android et cross-platform pour entreprises marocaines",
                    features: ["Applications natives iOS/Android", "Flutter/React Native cross-platform", "Apps métier personnalisées", "Maintenance et mises à jour"]
                  },
                  {
                    icon: ShoppingCart,
                    title: "E-commerce & Boutiques",
                    desc: "Boutiques en ligne avec intégration paiement marocain",
                    features: ["Shopify, WooCommerce, sur mesure", "Paiement CMI intégré", "Click & Collect", "Gestion stocks et livraison"]
                  },
                  {
                    icon: Globe,
                    title: "Sites Web & Portails",
                    desc: "Sites vitrine, institutionnels et plateformes web",
                    features: ["Sites responsive", "Portails d'entreprise", "Intranets et extranets", "SEO local Maroc"]
                  },
                  {
                    icon: Database,
                    title: "Solutions Entreprise",
                    desc: "ERP, CRM et logiciels métier personnalisés",
                    features: ["ERP sur mesure", "CRM et gestion clients", "Logiciels métier", "Intégration SI existant"]
                  },
                  {
                    icon: Cloud,
                    title: "Cloud & Hébergement",
                    desc: "Infrastructure cloud optimisée pour l'Afrique",
                    features: ["Hébergement sécurisé", "CDN optimisé Afrique", "Backup et DR", "Conformité CNDP"]
                  },
                  {
                    icon: TrendingUp,
                    title: "Marketing Digital",
                    desc: "Stratégie digitale et acquisition clients",
                    features: ["SEO local Maroc", "Google Ads / Meta Ads", "Social Media", "Influence marketing"]
                  }
                ].map((service, i) => (
                  <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-green-200 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                    <ul className="space-y-1">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Intégrations paiement Maroc */}
            <section className="mb-16 bg-green-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-green-600" />
                Intégrations Paiement Maroc
              </h2>
              <p className="text-gray-600 mb-6">
                Nous intégrons toutes les solutions de paiement du marché marocain pour vos applications et e-commerces.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { name: "CMI", desc: "Centre Monétique Interbancaire", type: "Carte bancaire" },
                  { name: "PayZone", desc: "Paiement en ligne sécurisé", type: "Gateway" },
                  { name: "CashPlus", desc: "Points de paiement cash", type: "Cash" },
                  { name: "Maroc Telecommerce", desc: "E-commerce national", type: "Gateway" },
                  { name: "Wafacash", desc: "Transfert et paiement", type: "Mobile Money" },
                  { name: "M-Wallet", desc: "Portefeuilles mobiles", type: "Mobile Money" }
                ].map((payment, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900">{payment.name}</h3>
                      <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">{payment.type}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{payment.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Villes couvertes */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-green-600" />
                Villes Couvertes au Maroc
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { city: "Casablanca", desc: "Centre économique", featured: true },
                  { city: "Rabat", desc: "Capitale administrative", featured: true },
                  { city: "Marrakech", desc: "Tourisme & Tech", featured: true },
                  { city: "Tanger", desc: "Zone franche", featured: true },
                  { city: "Fès", desc: "Artisanat & Culture", featured: false },
                  { city: "Agadir", desc: "Tourisme balnéaire", featured: false },
                  { city: "Meknès", desc: "Agriculture & Industrie", featured: false },
                  { city: "Oujda", desc: "Région de l'Oriental", featured: false }
                ].map((item, i) => (
                  <div key={i} className={`p-4 rounded-xl text-center ${item.featured ? 'bg-green-100 border-2 border-green-200' : 'bg-gray-50'}`}>
                    <div className={`font-bold ${item.featured ? 'text-green-800' : 'text-gray-700'}`}>{item.city}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Secteurs d'activité */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Secteurs d'Activité au Maroc</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { sector: "Tourisme & Hôtellerie", desc: "Apps réservation, gestion hôtelière", icon: Building },
                  { sector: "Commerce & Distribution", desc: "E-commerce, retail, marketplace", icon: ShoppingCart },
                  { sector: "Banque & Assurance", desc: "Fintech, mobile banking, insurtech", icon: CreditCard },
                  { sector: "Immobilier", desc: "Portails immobiliers, PropTech", icon: Building },
                  { sector: "Industrie & OCP", desc: "Solutions industrielles, IoT", icon: Layers },
                  { sector: "Agriculture", desc: "AgriTech, gestion exploitation", icon: Zap },
                  { sector: "Transport & Logistique", desc: "TMS, tracking, livraison", icon: TrendingUp },
                  { sector: "Éducation", desc: "EdTech, e-learning, campus", icon: Award },
                  { sector: "Santé", desc: "HealthTech, télémédecine", icon: Shield }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl hover:bg-green-50 transition-colors">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.sector}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Avantages Symloop */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Pourquoi Choisir Symloop pour le Maroc ?</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Communication en français, arabe et darija",
                  "Intégration CMI et paiements marocains",
                  "Connaissance approfondie du marché marocain",
                  "Support technique réactif fuseau horaire",
                  "Tarification en Dirham Marocain (MAD)",
                  "Conformité CNDP et réglementations locales",
                  "Expérience avec entreprises marocaines",
                  "Infrastructure cloud optimisée Afrique",
                  "Partenariats locaux Casablanca et Rabat",
                  "Compréhension culture business marocaine"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Tarifs indicatifs */}
            <section className="mb-16 bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tarifs Indicatifs Maroc 2024</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4">Type de Projet</th>
                      <th className="text-center py-3 px-4">Prix (MAD)</th>
                      <th className="text-center py-3 px-4">Délai</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Site vitrine responsive", prix: "15 000 - 40 000 MAD", delai: "2-4 semaines" },
                      { type: "E-commerce avec CMI", prix: "40 000 - 120 000 MAD", delai: "6-12 semaines" },
                      { type: "Application mobile simple", prix: "50 000 - 120 000 MAD", delai: "8-12 semaines" },
                      { type: "Application mobile complexe", prix: "120 000 - 300 000 MAD", delai: "3-6 mois" },
                      { type: "Marketplace / Plateforme", prix: "200 000 - 500 000 MAD", delai: "4-8 mois" },
                      { type: "Solution entreprise (ERP/CRM)", prix: "300 000 - 1M+ MAD", delai: "6-12 mois" }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-green-50">
                        <td className="py-3 px-4 font-medium">{row.type}</td>
                        <td className="text-center py-3 px-4 text-green-600 font-medium">{row.prix}</td>
                        <td className="text-center py-3 px-4 text-gray-500">{row.delai}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-4">*Prix indicatifs en Dirham Marocain. Devis personnalisé sur demande.</p>
            </section>

            {/* Technologies */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Stack Technologique</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { cat: "Frontend", techs: ["React", "Next.js", "Vue.js", "Angular"] },
                  { cat: "Mobile", techs: ["Flutter", "React Native", "Swift", "Kotlin"] },
                  { cat: "Backend", techs: ["Node.js", "Python", "PHP", "Java"] },
                  { cat: "Cloud", techs: ["AWS", "Google Cloud", "Azure", "OVH"] }
                ].map((stack, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-bold text-gray-900 mb-3">{stack.cat}</h3>
                    <div className="flex flex-wrap gap-2">
                      {stack.techs.map((tech, j) => (
                        <span key={j} className="text-xs bg-white text-gray-600 px-2 py-1 rounded border">{tech}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions Fréquentes - Maroc</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Combien coûte une application mobile au Maroc ?",
                    a: "Le coût varie selon la complexité : application simple 50 000 - 120 000 MAD, application e-commerce 120 000 - 250 000 MAD, plateforme complexe 250 000 - 500 000+ MAD. Nous proposons des devis personnalisés gratuits."
                  },
                  {
                    q: "Comment intégrer le paiement en ligne au Maroc ?",
                    a: "Nous intégrons toutes les solutions de paiement marocaines : CMI (Centre Monétique Interbancaire), PayZone, CashPlus, Wafacash et les portefeuilles mobiles. Conformité totale avec la réglementation Bank Al-Maghrib."
                  },
                  {
                    q: "Quels délais pour développer un site e-commerce au Maroc ?",
                    a: "Un site e-commerce basique prend 4-6 semaines, une boutique complète avec paiement CMI 8-12 semaines, une marketplace avec fonctionnalités avancées 3-6 mois. Planning détaillé fourni avant démarrage."
                  },
                  {
                    q: "Travaillez-vous avec des entreprises au Maroc ?",
                    a: "Oui, nous travaillons avec de nombreuses entreprises marocaines à Casablanca, Rabat, Marrakech et autres villes. Communication en français et arabe, facturation en MAD, support fuseau horaire compatible."
                  },
                  {
                    q: "Comment garantissez-vous la conformité réglementaire ?",
                    a: "Nos solutions respectent la loi 09-08 sur la protection des données personnelles (CNDP), les réglementations Bank Al-Maghrib pour les paiements et les normes de l'OMPIC pour le commerce électronique."
                  }
                ].map((faq, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-6">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-2">
                      <span className="text-green-500">Q:</span> {faq.q}
                    </h3>
                    <p className="text-gray-600 pl-6">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {["développement maroc", "application mobile casablanca", "agence web rabat", "e-commerce maroc", "paiement CMI", "Flutter maroc", "startup maroc"].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>

            {/* Articles liés */}
            <section className="mt-12 pt-8 border-t border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Articles Connexes</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Développement Tunisie", href: "/blog/developpement-application-tunisie-2024", icon: Globe },
                  { title: "Agence Digitale MENA", href: "/blog/agence-digitale-mena-2024", icon: Building },
                  { title: "E-commerce Algérie", href: "/blog/ecommerce-algerie-paiement-cib-edahabia-2024", icon: ShoppingCart }
                ].map((article, i) => (
                  <Link key={i} href={article.href} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
                    <article.icon className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700 font-medium text-sm">{article.title}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Projet Digital au Maroc ?</h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Symloop est votre partenaire tech pour conquérir le marché marocain.
              Applications, e-commerce, solutions entreprise - discutons de votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/213549575512?text=Bonjour, j'ai un projet au Maroc" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors">
                <MessageCircle className="w-5 h-5" /> Discuter du Projet
              </a>
              <Link href="/contact"
                 className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-800 transition-colors">
                <Phone className="w-5 h-5" /> Demander un Devis
              </Link>
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
