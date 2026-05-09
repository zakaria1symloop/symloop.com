"use client";
import { useState } from 'react';
import { ArrowLeft, UtensilsCrossed, CheckCircle, MessageCircle, Truck, ShoppingBag, Clock, Star, ChevronDown, AlertCircle, Smartphone, Users, DollarSign, Zap, MapPin, ArrowRight, CreditCard, Bell, BarChart3, Printer, Package } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug } from '../../data/blogs';

export default function RestaurantAlgerie() {
  const blog = getBlogBySlug('application-restaurant-livraison-algerie');
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Combien coûte une application de commande pour mon restaurant ?",
      answer: "Chez Symloop, une application de commande basique démarre à 60 000 DA. Avec gestion livraison et tracking, à partir de 120 000 DA. Les solutions marketplace multi-restaurants sont sur devis selon le nombre de restaurants et les fonctionnalités. Contactez-nous au +213 549 575 512 pour un devis gratuit."
    },
    {
      question: "L'application fonctionne-t-elle avec le paiement CIB/Dahabia ?",
      answer: "Oui, Symloop intègre tous les moyens de paiement locaux : CIB, Dahabia, ainsi que le paiement à la livraison (COD) qui reste très populaire en Algérie. Les clients peuvent choisir leur mode de paiement préféré. Appelez le +213 549 575 512 pour une démo."
    },
    {
      question: "Puis-je gérer les livraisons avec mes propres livreurs ?",
      answer: "Absolument. L'application développée par Symloop inclut un module de gestion des livreurs : affectation des commandes, tracking GPS en temps réel, calcul des zones de livraison, et rapports de performance par livreur. Contactez-nous au +213 549 575 512."
    },
    {
      question: "Comment mes clients passent-ils commande ?",
      answer: "Les clients peuvent commander via l'application mobile (iOS/Android), le site web, ou même WhatsApp (intégration chatbot). Ils reçoivent des notifications à chaque étape : commande reçue, en préparation, en livraison. Symloop vous accompagne de A à Z. Appelez le +213 549 575 512."
    },
    {
      question: "Quel est le délai de développement d'une application restaurant ?",
      answer: "Symloop livre une application restaurant basique en 4 à 6 semaines. Une solution complète avec livraison, tracking et fidélité prend 8 à 12 semaines. Contactez-nous au +213 549 575 512 pour planifier votre projet."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Application Restaurant et Livraison en Algérie - FoodTech",
        "description": "Développement d'applications de commande en ligne et livraison pour restaurants en Algérie. Solutions FoodTech complètes : menu digital, paiement, tracking livreurs.",
        "image": "https://symloop.com/images/blog/foodtech-algerie.jpg",
        "datePublished": "2024-03-01",
        "dateModified": "2024-12-01",
        "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
        "publisher": { "@type": "Organization", "name": "Symloop", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
        "mainEntityOfPage": "https://symloop.com/blog/application-restaurant-livraison-algerie"
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
        "serviceType": "Développement Application Restaurant",
        "provider": { "@type": "Organization", "name": "Symloop", "telephone": "+213549575512" },
        "areaServed": ["DZ", "TN", "MA", "MENA"]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Application Restaurant Livraison Algérie", "item": "https://symloop.com/blog/application-restaurant-livraison-algerie" }
        ]
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".en-bref-block", "h1", "meta[name='description']"]
      }
    ]
  };

  const solutions = [
    {
      icon: ShoppingBag,
      title: "Commande en Ligne",
      desc: "Menu digital, panier, checkout avec paiement CIB/Edahabia ou à la livraison",
      features: ["Menu avec photos HD", "Personnalisation plats", "Options et suppléments", "Multi-paiement", "Historique commandes"]
    },
    {
      icon: Truck,
      title: "Gestion Livraison",
      desc: "Tracking livreurs GPS, zones de livraison, optimisation des tournées",
      features: ["Affectation automatique", "Tracking temps réel", "Zones et tarifs", "Performance livreurs", "Notifications client"]
    },
    {
      icon: Printer,
      title: "Gestion Cuisine",
      desc: "Tickets cuisine, gestion stock, préparation optimisée",
      features: ["Imprimante thermique", "Écran cuisine", "Temps préparation", "Alertes stock", "Organisation postes"]
    },
    {
      icon: Star,
      title: "Fidélité & Marketing",
      desc: "Programme de fidélité, avis clients, promotions ciblées",
      features: ["Points fidélité", "Codes promo", "Avis et notes", "Push notifications", "SMS marketing"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Rapports",
      desc: "Statistiques ventes, performances, analyses détaillées",
      features: ["Chiffre d'affaires", "Plats populaires", "Heures de pointe", "Rapport livreurs", "Export Excel"]
    },
    {
      icon: Package,
      title: "Click & Collect",
      desc: "Commande en ligne et retrait sur place sans file d'attente",
      features: ["Créneaux horaires", "QR code retrait", "Notification prêt", "Pré-paiement", "File virtuelle"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "60 000",
      unit: "DA",
      description: "Commande en ligne basique",
      features: [
        "Site web responsive",
        "Menu digital complet",
        "Commande en ligne",
        "Paiement à la livraison",
        "Panel admin basique",
        "Support 3 mois"
      ],
      cta: "Commander",
      popular: false
    },
    {
      name: "Pro",
      price: "120 000",
      unit: "DA",
      description: "Avec gestion livraison",
      features: [
        "Tout Starter +",
        "App mobile client",
        "Paiement CIB/Dahabia",
        "Gestion livreurs GPS",
        "Programme fidélité",
        "Notifications push",
        "Support 6 mois"
      ],
      cta: "Choisir Pro",
      popular: true
    },
    {
      name: "Marketplace",
      price: "Sur devis",
      unit: "",
      description: "Multi-restaurants",
      features: [
        "Tout Pro +",
        "Multi-restaurants",
        "Commission automatique",
        "Dashboard propriétaire",
        "API intégrations",
        "Support prioritaire 24/7"
      ],
      cta: "Nous contacter",
      popular: false
    }
  ];

  const stats = [
    { value: "100+", label: "Restaurants équipés" },
    { value: "500K+", label: "Commandes traitées" },
    { value: "30%", label: "Augmentation CA moyen" },
    { value: "4.8/5", label: "Note moyenne apps" }
  ];

  const features = [
    "Menu digital avec photos et descriptions",
    "Commande click & collect ou livraison",
    "Paiement en ligne CIB/Edahabia ou à la livraison",
    "Notifications push pour promotions",
    "Tracking livraison en temps réel GPS",
    "Dashboard gestion commandes",
    "Rapports ventes et analytics",
    "Intégration imprimante cuisine thermique",
    "Programme fidélité et points",
    "Gestion des avis clients",
    "Multi-langue (Français, Arabe)",
    "Mode hors-ligne pour restaurants"
  ];

  return (
    <>
      <Head>
        <title>Application Restaurant Livraison Algérie | FoodTech | Symloop</title>
        <meta name="description" content="Développement d'applications de commande et livraison pour restaurants en Algérie. Menu digital, paiement CIB, tracking livreurs. Solutions FoodTech à partir de 60 000 DA." />
        <meta name="keywords" content="application restaurant algérie, livraison food algérie, commande en ligne restaurant, gestion restaurant algérie, foodtech algérie, menu digital" />
        <link rel="canonical" href="https://symloop.com/blog/application-restaurant-livraison-algerie" />
        <meta property="og:title" content="Application Restaurant Livraison Algérie | FoodTech" />
        <meta property="og:description" content="Solutions FoodTech pour restaurants : commande en ligne, livraison, gestion cuisine. À partir de 60 000 DA." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/application-restaurant-livraison-algerie" />
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
                  <UtensilsCrossed className="w-4 h-4" />FoodTech
                </span>
                <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">2024</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Applications <span className="text-orange-400">Restaurant</span> et Livraison en Algérie
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Digitalisez votre restaurant avec une app de commande en ligne et livraison sur mesure.
                Menu digital, paiement CIB, tracking livreurs, programme fidélité.
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

        {/* En bref - LLM Optimized Block */}
        <section className="en-bref-block bg-gray-50 border-l-4 border-orange-500 py-6">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-orange-600 mb-2">En bref</p>
            <p className="text-gray-700 leading-relaxed">
              Symloop developpe des applications de commande et livraison pour restaurants en Algerie. Menu digital, panier, paiement, suivi livreur. Application client + app livreur + dashboard restaurant. Base a Setif. Contact: +213 549 575 512.
            </p>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                La <strong className="text-orange-600">commande en ligne</strong> explose en Algérie.
                Les consommateurs veulent commander depuis leur smartphone et recevoir leur repas rapidement.
                Chez <strong>Symloop</strong>, nous développons des applications
                <strong className="text-orange-600"> FoodTech</strong> complètes adaptées au marché algérien.
              </p>
            </div>

            {/* Solutions */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <UtensilsCrossed className="w-6 h-6 text-orange-600" />
                Solutions FoodTech
              </h2>
              <div className="space-y-6">
                {solutions.map((solution, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-orange-200 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <solution.icon className="w-7 h-7 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                        <p className="text-gray-600 mb-4">{solution.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {solution.features.map((feature, j) => (
                            <span key={j} className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full">{feature}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Features */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-orange-600" />
                Fonctionnalités Complètes
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {features.map((item, i) => (
                  <div key={i} className="flex gap-3 items-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Mid */}
            <div className="bg-gradient-to-r from-orange-600 to-red-500 rounded-2xl p-8 text-white text-center mb-16">
              <h3 className="text-2xl font-bold mb-3">Digitalisez Votre Restaurant</h3>
              <p className="text-orange-100 mb-6">Discutons de votre application de commande</p>
              <a
                href="https://wa.me/213549575512?text=Bonjour, je souhaite digitaliser mon restaurant avec une application de commande"
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
                Tarifs Application Restaurant
              </h2>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif exact dépend du nombre de fonctionnalités,
                  des intégrations (paiement, imprimante, POS) et du design personnalisé.
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
                      href={`https://wa.me/213549575512?text=Bonjour, je suis intéressé par le pack ${plan.name} pour mon restaurant`}
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
                Questions Fréquentes - FoodTech
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

            {/* Technologies */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies Utilisées</h2>
              <div className="flex flex-wrap gap-3">
                {["React Native", "Next.js", "Node.js", "Firebase", "Google Maps", "CIB/Dahabia", "Stripe", "ESC/POS", "Socket.io", "Redis", "PostgreSQL", "AWS"].map((tech, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">{tech}</span>
                ))}
              </div>
            </section>

            {/* Related */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles Connexes</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Développement Application Mobile Algérie 2026", href: "/blog/developpement-application-mobile-algerie-2026" },
                  { title: "E-commerce Algérie : Paiement CIB & Edahabia", href: "/blog/ecommerce-algerie-paiement-cib-edahabia-2024" },
                  { title: "Logistique et Transport", href: "/blog/logistique-transport-algerie-2024" },
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
              {["application restaurant", "foodtech algérie", "livraison food", "commande en ligne", "menu digital", "tracking livreur"].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-orange-600 to-red-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Lancez Votre Application Restaurant</h2>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
              Commande en ligne, livraison, click & collect. Augmentez votre chiffre d'affaires
              avec une application sur mesure pour votre restaurant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/213549575512?text=Bonjour, je souhaite digitaliser mon restaurant" target="_blank" rel="noopener noreferrer"
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
