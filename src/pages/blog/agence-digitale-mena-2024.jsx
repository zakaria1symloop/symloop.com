"use client";
import { useState } from 'react';
import { ArrowLeft, Globe, CheckCircle, MessageCircle, Languages, MapPin, Users, Zap, ChevronDown, AlertCircle, Building2, Banknote, Shield, Smartphone, Star, ArrowRight, Target, Briefcase, Award } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';

export default function AgenceMENA() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Qu'est-ce que la région MENA et pourquoi est-elle importante ?",
      answer: "MENA (Middle East & North Africa) comprend plus de 20 pays avec 400+ millions d'habitants. C'est un marché en forte croissance digitale avec une population jeune et connectée. La région inclut l'Algérie, Tunisie, Maroc, Égypte, EAU, Arabie Saoudite, Qatar, et d'autres. C'est un marché stratégique pour toute entreprise visant l'expansion internationale."
    },
    {
      question: "Comment gérez-vous le support RTL pour l'arabe ?",
      answer: "Nous implémentons le RTL (Right-to-Left) de manière native avec CSS logical properties, direction automatique, et adaptation complète de l'interface. Les formulaires, tableaux, navigation et tous les composants sont conçus pour fonctionner parfaitement en arabe. Nous testons avec des utilisateurs arabophones pour garantir une expérience fluide."
    },
    {
      question: "Quels systèmes de paiement régionaux intégrez-vous ?",
      answer: "Nous intégrons : CIB et EDAHABIA en Algérie, Flouci et D17 en Tunisie, CMI au Maroc, PayTabs et Telr pour le Golfe, ainsi que les paiements mobiles locaux. Nous supportons aussi les passerelles internationales (Stripe, PayPal) pour les clients avec cartes internationales. Multi-devises : DA, TND, MAD, AED, SAR, EUR, USD."
    },
    {
      question: "Proposez-vous la traduction professionnelle ?",
      answer: "Oui, nous travaillons avec des traducteurs natifs pour l'arabe dialectal (Maghrébin, Égyptien, Golfe) et l'arabe standard moderne (MSA). Nous proposons aussi la localisation complète : adaptation des contenus marketing, SEO multilingue, et révision culturelle pour éviter les faux-pas. Langues supportées : Arabe, Français, Anglais."
    },
    {
      question: "Pouvez-vous adapter une application existante pour le MENA ?",
      answer: "Absolument ! Nous proposons des services de localisation pour applications existantes : ajout du support RTL, intégration de langues, adaptation des paiements, conformité réglementaire locale, et optimisation SEO régional. Nous auditons votre application et fournissons un plan de migration détaillé."
    },
    {
      question: "Quels sont les délais pour un projet MENA multilingue ?",
      answer: "Un site multilingue simple (3 langues) : 4-6 semaines. Une application métier complète avec paiements locaux : 8-12 semaines. Une plateforme marketplace régionale : 3-5 mois. Ces délais incluent la traduction, les tests RTL, et l'intégration des paiements locaux."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Agence Digitale MENA - Applications Multilingues Arabe",
        "description": "Agence digitale spécialisée région MENA. Applications multilingues avec support RTL arabe natif. Intégration paiements locaux Algérie, Tunisie, Maroc, Golfe.",
        "author": { "@type": "Organization", "name": "Symloop" },
        "publisher": {
          "@type": "Organization",
          "name": "Symloop",
          "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" }
        },
        "datePublished": "2024-01-15",
        "dateModified": "2024-12-01",
        "mainEntityOfPage": "https://symloop.com/blog/agence-digitale-mena-2024"
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
        "serviceType": "Développement Digital MENA",
        "provider": {
          "@type": "Organization",
          "name": "Symloop",
          "telephone": "+213549575512",
          "address": { "@type": "PostalAddress", "addressCountry": "DZ" }
        },
        "areaServed": ["Algérie", "Tunisie", "Maroc", "Égypte", "EAU", "Arabie Saoudite", "Qatar", "Jordanie", "Koweït", "Bahreïn"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services Digitaux MENA",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Site Multilingue" }, "price": "50000", "priceCurrency": "DZD" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Application MENA" }, "price": "120000", "priceCurrency": "DZD" }
          ]
        }
      }
    ]
  };

  const services = [
    { icon: Languages, title: "Applications Multilingues", desc: "Sites et apps en Arabe, Français, Anglais avec switch de langue fluide et SEO par langue.", features: ["3+ langues", "SEO multilingue", "i18n complet"] },
    { icon: Globe, title: "Support RTL Natif", desc: "Interface Right-to-Left parfaite pour l'arabe. CSS logical properties et composants adaptés.", features: ["RTL natif", "UI mirrorée", "Tests arabophones"] },
    { icon: Banknote, title: "Paiements Régionaux", desc: "CIB, EDAHABIA, Flouci, PayTabs, CMI. Multi-devises DA, TND, MAD, AED, SAR.", features: ["Paiements locaux", "Multi-devises", "Sécurisé PCI"] },
    { icon: MapPin, title: "Localisation Complète", desc: "Adaptation culturelle, formats de date/heure, numéros de téléphone, adresses régionales.", features: ["Formats locaux", "Culture fit", "Conformité"] },
    { icon: Target, title: "SEO Régional", desc: "Optimisation pour Google.dz, Google.ae, référencement local par pays et ville.", features: ["SEO local", "Google My Business", "Citations"] },
    { icon: Shield, title: "Conformité Légale", desc: "RGPD, lois locales sur les données, mentions légales adaptées par pays.", features: ["RGPD/PDPA", "CGV locales", "Data privacy"] }
  ];

  const pricingPlans = [
    {
      name: "Site Multilingue",
      price: "50,000",
      currency: "DA",
      description: "Site vitrine multilingue pour la région MENA",
      features: ["Site 5-10 pages", "3 langues (AR/FR/EN)", "Support RTL complet", "SEO par langue", "Responsive design", "Formulaire contact", "Hébergement 1 an"],
      popular: false,
      cta: "Démarrer"
    },
    {
      name: "App MENA Pro",
      price: "120,000",
      currency: "DA",
      description: "Application complète pour le marché MENA",
      features: ["Application web complète", "4+ langues", "Paiements locaux", "Dashboard multilingue", "Multi-devises", "API REST", "Support technique", "Formation incluse"],
      popular: true,
      cta: "Choisir Pro"
    },
    {
      name: "Plateforme Régionale",
      price: "Sur devis",
      currency: "",
      description: "Marketplace ou plateforme multi-pays",
      features: ["Architecture multi-tenant", "Tous pays MENA", "Tous systèmes paiement", "Équipe dédiée", "Support 24/7", "SLA garanti", "Évolutions illimitées", "Partenariat long-terme"],
      popular: false,
      cta: "Nous Contacter"
    }
  ];

  const stats = [
    { value: "400M+", label: "Habitants MENA" },
    { value: "20+", label: "Pays couverts" },
    { value: "3", label: "Langues natives" },
    { value: "10+", label: "Devises supportées" }
  ];

  const countries = [
    { name: "Algérie", flag: "🇩🇿", currency: "DA", payment: "CIB, EDAHABIA" },
    { name: "Tunisie", flag: "🇹🇳", currency: "TND", payment: "Flouci, D17" },
    { name: "Maroc", flag: "🇲🇦", currency: "MAD", payment: "CMI, Maroc Telecommerce" },
    { name: "Égypte", flag: "🇪🇬", currency: "EGP", payment: "Fawry, Vodafone Cash" },
    { name: "EAU", flag: "🇦🇪", currency: "AED", payment: "PayTabs, Telr" },
    { name: "Arabie Saoudite", flag: "🇸🇦", currency: "SAR", payment: "Mada, STC Pay" },
    { name: "Qatar", flag: "🇶🇦", currency: "QAR", payment: "QPay" },
    { name: "Jordanie", flag: "🇯🇴", currency: "JOD", payment: "eFAWATEERcom" }
  ];

  const relatedArticles = [
    { title: "Développement Web Algérie", href: "/blog/developpement-web-algerie-2024", tag: "Algérie" },
    { title: "Applications E-commerce", href: "/blog/ecommerce-algerie-2024", tag: "E-commerce" },
    { title: "SEO & Référencement", href: "/blog/seo-referencement-algerie-2024", tag: "SEO" }
  ];

  return (
    <>
      <Head>
        <title>Agence Digitale MENA 2024 | Applications Multilingues Arabe RTL | Symloop</title>
        <meta name="description" content="Agence digitale spécialisée MENA. Applications multilingues arabe/français/anglais avec support RTL natif. Paiements locaux Algérie, Tunisie, Maroc, Golfe. Devis gratuit." />
        <meta name="keywords" content="agence digitale mena, développement arabe, rtl support, multilingue mena, middle east north africa, application arabe, paiement algérie tunisie maroc" />
        <link rel="canonical" href="https://symloop.com/blog/agence-digitale-mena-2024" />
        <meta property="og:title" content="Agence Digitale MENA | Applications Multilingues Arabe" />
        <meta property="og:description" content="Applications multilingues pour la région MENA. Support RTL arabe natif, paiements locaux, SEO régional." />
        <meta property="og:url" content="https://symloop.com/blog/agence-digitale-mena-2024" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 text-white py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-emerald-300 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Retour au blog
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-emerald-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Globe className="w-4 h-4" /> MENA
                </span>
                <span className="bg-emerald-700/50 text-emerald-200 px-4 py-1.5 rounded-full text-sm">Multilingue Expert</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Agence Digitale <span className="text-emerald-400">MENA</span> 2024
              </h1>
              <p className="text-xl text-emerald-100 mb-8 max-w-3xl">
                Applications multilingues avec support RTL arabe natif.
                Paiements locaux et localisation complète pour 20+ pays de la région MENA.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/213549575512?text=Bonjour, j'ai un projet pour la région MENA"
                   target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors">
                  <MessageCircle className="w-5 h-5" /> Devis Gratuit
                </a>
                <a href="tel:+213549575512" className="inline-flex items-center gap-2 border-2 border-emerald-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-800 transition-colors">
                  +213 549 57 55 12
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-emerald-50 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">{stat.value}</div>
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
                La région <span className="text-emerald-600 font-semibold">MENA (Middle East & North Africa)</span> représente un marché de plus de 400 millions d'habitants,
                avec une population jeune et une adoption digitale en forte croissance.
                Chez Symloop, nous sommes spécialisés dans la création d'applications <span className="text-emerald-600 font-semibold">multilingues avec support RTL natif</span> pour l'arabe,
                intégrant les systèmes de paiement locaux et respectant les spécificités culturelles de chaque pays.
              </p>
            </div>

            {/* Countries Grid */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pays Couverts & Paiements</h2>
              <p className="text-gray-600 mb-8">Expertise locale dans chaque marché de la région MENA</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {countries.map((country, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                    className="bg-white border border-gray-200 rounded-xl p-4 hover:border-emerald-300 hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{country.flag}</span>
                      <span className="font-semibold text-gray-900">{country.name}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div><strong>Devise:</strong> {country.currency}</div>
                      <div><strong>Paiements:</strong> {country.payment}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Services */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Services MENA</h2>
              <p className="text-gray-600 mb-8">Solutions complètes pour conquérir le marché MENA</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                    className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-emerald-200 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((f, j) => (
                        <span key={j} className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs">{f}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* RTL Features */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 rounded-r-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Support RTL Arabe Natif</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Interface mirrorée automatiquement",
                    "CSS logical properties (start/end)",
                    "Navigation et menus adaptés RTL",
                    "Formulaires et inputs RTL-ready",
                    "Tableaux et grilles inversés",
                    "Animations directionnelles",
                    "Typographie arabe optimisée",
                    "Tests avec utilisateurs arabophones"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Mid */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4">Prêt à conquérir le marché MENA ?</h2>
                <p className="text-emerald-100 mb-6">Discutons de votre projet d'expansion régionale. Devis gratuit sous 24h.</p>
                <a href="https://wa.me/213549575512?text=Bonjour, j'ai un projet d'application pour la région MENA"
                   target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors">
                  <MessageCircle className="w-5 h-5" /> Discuter sur WhatsApp
                </a>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Tarifs Services MENA</h2>
              <p className="text-gray-600 text-center mb-8">Des forfaits adaptés à votre stratégie régionale</p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif final dépend du nombre de langues, pays ciblés, et intégrations de paiement requises.
                  <strong> Contactez-nous pour un devis gratuit et personnalisé.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                    className={`relative bg-white rounded-2xl p-6 ${plan.popular ? 'border-2 border-emerald-500 shadow-xl' : 'border border-gray-200'}`}>
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Populaire
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-emerald-600">{plan.price}</span>
                      {plan.currency && <span className="text-gray-500 ml-1">{plan.currency}</span>}
                    </div>
                    <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={`https://wa.me/213549575512?text=Bonjour, je suis intéressé par le forfait ${plan.name} MENA`}
                       target="_blank" rel="noopener noreferrer"
                       className={`block text-center py-3 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                      {plan.cta}
                    </a>
                  </motion.div>
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
                  <Link key={i} href={article.href} className="group block bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded">{article.tag}</span>
                    <h3 className="font-semibold text-gray-900 mt-3 group-hover:text-emerald-600 transition-colors">{article.title}</h3>
                    <span className="inline-flex items-center gap-1 text-sm text-emerald-600 mt-2">
                      Lire <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {["MENA", "Multilingue", "RTL", "Arabe", "Algérie", "Tunisie", "Maroc", "Golfe", "Paiements locaux", "Localisation"].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à Conquérir la Région MENA ?</h2>
            <p className="text-emerald-100 mb-8 text-lg">Applications multilingues et paiements locaux pour 400 millions de clients potentiels.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/213549575512?text=Bonjour, je souhaite un devis pour un projet MENA"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors">
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
