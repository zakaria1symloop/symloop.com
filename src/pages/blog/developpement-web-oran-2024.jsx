"use client";
import { useState } from 'react';
import { ArrowLeft, Globe, CheckCircle, MessageCircle, MapPin, Building, Users, Zap, ChevronDown, AlertCircle, ShoppingCart, Smartphone, Code, Star, Clock, ArrowRight, DollarSign, Ship, Plane, Factory, Hotel, Briefcase, TrendingUp } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug } from '../../data/blogs';

export default function DeveloppementOran() {
  const blog = getBlogBySlug('developpement-web-oran-2024');
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Travaillez-vous avec des entreprises basées à Oran ?",
      answer: "Absolument. Nous accompagnons de nombreuses entreprises oranaises et de l'Ouest algérien. Nos équipes travaillent en remote avec des réunions en visioconférence régulières. Pour les projets importants, nous pouvons nous déplacer à Oran."
    },
    {
      question: "Quels sont les délais pour créer un site web à Oran ?",
      answer: "Un site vitrine prend 2-4 semaines, un e-commerce 4-8 semaines, une application métier 2-4 mois selon la complexité. Nous respectons les délais convenus et vous tenons informés à chaque étape."
    },
    {
      question: "Combien coûte un site web pour une entreprise à Oran ?",
      answer: "Un site vitrine professionnel démarre à 40 000 DA. Un e-commerce à partir de 80 000 DA. Les applications sur mesure sont établies sur devis. Nos tarifs sont compétitifs pour le marché de l'Ouest."
    },
    {
      question: "Proposez-vous des solutions pour l'import-export ?",
      answer: "Oui, nous avons une expertise dans le secteur import-export, très présent à Oran. Plateformes de sourcing, gestion de commandes internationales, intégration avec les transitaires et douanes."
    },
    {
      question: "Pouvez-vous créer un site multilingue pour le tourisme ?",
      answer: "Bien sûr. Nous créons des sites multilingues (Français, Arabe, Anglais, Espagnol) pour hôtels, agences de voyage et restaurants. Optimisés pour le SEO international et les réservations en ligne."
    },
    {
      question: "Offrez-vous la maintenance et le support technique ?",
      answer: "Oui, nous proposons des contrats de maintenance incluant mises à jour, sécurité, sauvegardes et support technique. Forfaits à partir de 8 000 DA/mois selon la taille du projet."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Développement Web à Oran - Agence Digitale Ouest Algérien",
        "description": "Services de développement web à Oran et dans l'Ouest algérien. Sites vitrines, e-commerce, applications pour entreprises d'Oran, Tlemcen, Mostaganem.",
        "image": "https://symloop.com/images/blog/oran-web-development.jpg",
        "datePublished": "2024-01-25",
        "dateModified": "2024-12-01",
        "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
        "publisher": { "@type": "Organization", "name": "Symloop", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
        "mainEntityOfPage": "https://symloop.com/blog/developpement-web-oran-2024"
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
        "@type": "LocalBusiness",
        "name": "Symloop - Développement Web Oran",
        "description": "Agence de développement web pour Oran et l'Ouest algérien",
        "telephone": "+213549575512",
        "areaServed": ["Oran", "Tlemcen", "Mostaganem", "Sidi Bel Abbès", "Mascara", "Aïn Témouchent"]
      }
    ]
  };

  const services = [
    {
      icon: Globe,
      title: "Sites Web Professionnels",
      desc: "Sites vitrines modernes pour entreprises oranaises, artisans et professionnels",
      features: ["Design responsive", "SEO optimisé", "Multi-langue FR/AR/EN", "Formulaires contact", "Google Maps"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Marketplace",
      desc: "Boutiques en ligne avec paiement CIB/Dahabia pour commerçants d'Oran",
      features: ["Catalogue produits", "Paiement sécurisé", "Gestion stocks", "Livraison locale", "Multi-vendeurs"]
    },
    {
      icon: Ship,
      title: "Solutions Import-Export",
      desc: "Plateformes pour le commerce international, très présent à Oran",
      features: ["Gestion commandes", "Suivi shipping", "Documents douanes", "Multi-devises", "Sourcing fournisseurs"]
    },
    {
      icon: Hotel,
      title: "Tourisme & Hôtellerie",
      desc: "Sites de réservation pour hôtels, restaurants et agences de voyage",
      features: ["Réservation en ligne", "Channel manager", "Avis clients", "Multi-langue", "Paiement international"]
    },
    {
      icon: Factory,
      title: "Industrie & Manufacturing",
      desc: "Applications de gestion pour usines et zones industrielles d'Oran",
      features: ["Suivi production", "Gestion stocks", "Maintenance", "Qualité", "Planning équipes"]
    },
    {
      icon: Zap,
      title: "Marketing Digital",
      desc: "Services SEO, publicité et réseaux sociaux pour visibilité locale",
      features: ["SEO local Oran", "Google Ads", "Facebook Ads", "Community management", "Email marketing"]
    }
  ];

  const cities = [
    { name: "Oran", desc: "Capitale de l'Ouest, hub économique", clients: "80+ clients" },
    { name: "Tlemcen", desc: "Patrimoine et artisanat", clients: "25+ clients" },
    { name: "Mostaganem", desc: "Agriculture et port", clients: "20+ clients" },
    { name: "Sidi Bel Abbès", desc: "Industrie et commerce", clients: "15+ clients" },
    { name: "Mascara", desc: "Agriculture et agroalimentaire", clients: "12+ clients" },
    { name: "Aïn Témouchent", desc: "Tourisme balnéaire", clients: "10+ clients" }
  ];

  const sectors = [
    { icon: Ship, name: "Import-Export", desc: "Commerce international, transitaires, freight" },
    { icon: Factory, name: "Industrie", desc: "Manufacturing, zones industrielles, production" },
    { icon: Hotel, name: "Tourisme", desc: "Hôtels, restaurants, agences de voyage" },
    { icon: ShoppingCart, name: "Commerce", desc: "Retail, grossistes, distribution" },
    { icon: Building, name: "Immobilier", desc: "Promoteurs, agences, construction" },
    { icon: Briefcase, name: "Services", desc: "Consulting, formation, professions libérales" }
  ];

  const pricingPlans = [
    {
      name: "Site Vitrine",
      price: "40 000",
      unit: "DA",
      description: "Présence web professionnelle",
      features: [
        "5-7 pages",
        "Design moderne responsive",
        "Formulaire de contact",
        "SEO de base",
        "Google Maps",
        "Hébergement 1 an"
      ],
      cta: "Commander",
      popular: false
    },
    {
      name: "E-commerce",
      price: "80 000",
      unit: "DA",
      description: "Boutique en ligne complète",
      features: [
        "Catalogue illimité",
        "Paiement CIB/Dahabia",
        "Gestion commandes/stocks",
        "Livraison Oran et environs",
        "Panel vendeur",
        "Support 6 mois"
      ],
      cta: "Commander",
      popular: true
    },
    {
      name: "Sur Mesure",
      price: "Sur devis",
      unit: "",
      description: "Application personnalisée",
      features: [
        "Analyse des besoins",
        "Fonctionnalités custom",
        "Import-export / Industrie",
        "Formation équipe",
        "Maintenance incluse",
        "Support prioritaire"
      ],
      cta: "Nous contacter",
      popular: false
    }
  ];

  const stats = [
    { value: "200+", label: "Clients Ouest Algérien" },
    { value: "6", label: "Wilayas couvertes" },
    { value: "5+", label: "Années d'expérience" },
    { value: "98%", label: "Satisfaction client" }
  ];

  return (
    <>
      <Head>
        <title>Développement Web Oran 2024 | Agence Digitale Ouest Algérien | Symloop</title>
        <meta name="description" content="Développement web à Oran et Ouest algérien. Sites vitrines, e-commerce, solutions import-export. Agence digitale pour Tlemcen, Mostaganem. À partir de 40 000 DA." />
        <meta name="keywords" content="développement web oran, agence web oran, site internet oran, création site web ouest algérie, e-commerce oran, développeur oran" />
        <link rel="canonical" href="https://symloop.com/blog/developpement-web-oran-2024" />
        <meta property="og:title" content="Développement Web Oran 2024 | Agence Digitale Ouest Algérien" />
        <meta property="og:description" content="Services web pour Oran, Tlemcen, Mostaganem. Sites vitrines, e-commerce, applications sur mesure." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/developpement-web-oran-2024" />
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
                <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4" />Oran & Ouest
                </span>
                <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">2024</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Développement Web à <span className="text-orange-400">Oran</span> et l'Ouest Algérien
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Agence digitale au service des entreprises d'Oran, Tlemcen, Mostaganem et tout l'Ouest algérien.
                Sites web, e-commerce, solutions import-export et applications métier.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-gray-900/50 rounded-xl">
                    <div className="text-2xl font-bold text-orange-400">{stat.value}</div>
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
                <strong className="text-orange-600">Oran</strong>, deuxième ville d'Algérie et capitale de l'Ouest,
                est un hub économique majeur avec son port, ses zones industrielles et son dynamisme commercial.
                Le secteur de l'import-export, le tourisme et l'industrie font d'Oran une place stratégique.
                <strong> Symloop</strong> accompagne les entreprises oranaises dans leur transformation digitale.
              </p>
            </div>

            {/* Services */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Code className="w-6 h-6 text-orange-600" />
                Services pour Oran et l'Ouest
              </h2>
              <div className="space-y-6">
                {services.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-orange-200 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-7 h-7 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, j) => (
                            <span key={j} className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full">{feature}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Sectors */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-orange-600" />
                Secteurs Clés à Oran
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {sectors.map((sector, i) => (
                  <div key={i} className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-xl p-4 text-center">
                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <sector.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900">{sector.name}</h3>
                    <p className="text-gray-600 text-sm">{sector.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Cities */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-orange-600" />
                Wilayas de l'Ouest Couvertes
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {cities.map((city, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors">
                    <div>
                      <h3 className="font-bold text-gray-900">{city.name}</h3>
                      <p className="text-gray-600 text-sm">{city.desc}</p>
                    </div>
                    <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">{city.clients}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Mid */}
            <div className="bg-gradient-to-r from-orange-600 to-amber-500 rounded-2xl p-8 text-white text-center mb-16">
              <h3 className="text-2xl font-bold mb-3">Entreprise à Oran ?</h3>
              <p className="text-orange-100 mb-6">Discutons de votre projet de digitalisation</p>
              <a
                href="https://wa.me/213549575512?text=Bonjour, je suis à Oran et j'ai besoin d'un site web"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Discuter sur WhatsApp
              </a>
            </div>

            {/* Pricing */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-orange-600" />
                Tarifs Développement Web Oran
              </h2>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif exact dépend du nombre de pages, des fonctionnalités,
                  et de la complexité. Tarifs compétitifs pour le marché de l'Ouest algérien.
                  <strong> Contactez-nous pour un devis gratuit.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, i) => (
                  <div key={i} className={`relative bg-white rounded-2xl p-6 border-2 ${plan.popular ? 'border-orange-500 shadow-xl' : 'border-gray-100'}`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">POPULAIRE</span>
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
                      href={`https://wa.me/213549575512?text=Bonjour, je suis intéressé par le pack ${plan.name} pour Oran`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-center py-3 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-orange-600 text-white hover:bg-orange-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
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
                <MessageCircle className="w-6 h-6 text-orange-600" />
                Questions Fréquentes - Oran
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

            {/* Related */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Voir Aussi</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Développement Web Constantine", href: "/blog/developpement-web-constantine-2024" },
                  { title: "E-commerce en Algérie", href: "/blog/ecommerce-algerie-2024" },
                  { title: "Coût Site Web Algérie", href: "/blog/cout-developpement-application-algerie" },
                  { title: "Marketing Digital Algérie", href: "/blog/marketing-digital-algerie-2024" }
                ].map((article, i) => (
                  <Link key={i} href={article.href} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors group">
                    <span className="font-medium text-gray-900 group-hover:text-orange-600">{article.title}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-600" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {["développement web oran", "agence digitale ouest", "site web tlemcen", "e-commerce oran", "import export digital", "développeur oran"].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-orange-600 to-amber-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Digitalisez Votre Entreprise</h2>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
              Oran, Tlemcen, Mostaganem... Quelle que soit votre ville dans l'Ouest algérien,
              nous créons votre présence digitale sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/213549575512?text=Bonjour, je suis dans l'Ouest algérien et j'ai besoin d'un site web" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
              <a href="tel:+213549575512" className="inline-flex items-center justify-center gap-2 bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-800 transition-colors">
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
