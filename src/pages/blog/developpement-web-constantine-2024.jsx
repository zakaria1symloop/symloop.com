"use client";
import { useState } from 'react';
import { ArrowLeft, Globe, CheckCircle, MessageCircle, MapPin, Building, GraduationCap, Briefcase, ChevronDown, AlertCircle, ShoppingCart, Smartphone, Code, Users, Star, Clock, ArrowRight, DollarSign, Landmark, Factory, Stethoscope, Truck } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug } from '../../data/blogs';

export default function DeveloppementConstantine() {
  const blog = getBlogBySlug('developpement-web-constantine-2024');
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Travaillez-vous avec des entreprises basées à Constantine ?",
      answer: "Absolument. Bien que notre équipe travaille en remote, nous accompagnons de nombreuses entreprises de Constantine et de l'Est algérien. Nous organisons des réunions en visioconférence et pouvons nous déplacer pour les projets importants. Notre connaissance du marché local est un atout."
    },
    {
      question: "Quels types de sites web développez-vous pour les entreprises de Constantine ?",
      answer: "Nous créons tous types de sites : sites vitrines pour PME, e-commerce avec paiement CIB/Dahabia, plateformes e-learning pour universités (Constantine 1, 2, 3), applications de gestion pour industries, et solutions sur mesure pour le secteur médical."
    },
    {
      question: "Combien coûte un site web à Constantine ?",
      answer: "Un site vitrine professionnel démarre à 40 000 DA. Un e-commerce à partir de 80 000 DA. Les plateformes complexes (e-learning, gestion) sont sur devis selon les fonctionnalités. Nous proposons des tarifs compétitifs adaptés au marché de l'Est."
    },
    {
      question: "Proposez-vous la maintenance après livraison ?",
      answer: "Oui, nous offrons des contrats de maintenance incluant les mises à jour de sécurité, corrections de bugs, sauvegardes régulières, et évolutions mineures. Forfaits à partir de 8 000 DA/mois selon la taille du projet."
    },
    {
      question: "Pouvez-vous refondre un site existant ?",
      answer: "Bien sûr. Nous analysons votre site actuel, identifions les points d'amélioration (design, performance, SEO), et proposons une refonte complète ou partielle. Migration des données et redirection des URLs incluses."
    },
    {
      question: "Travaillez-vous avec les secteurs spécifiques de Constantine ?",
      answer: "Oui, nous avons une expertise dans les secteurs clés de Constantine : universités et établissements d'enseignement, cliniques et cabinets médicaux, industries et usines de la zone industrielle, commerces du centre-ville, et services professionnels."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Développement Web à Constantine - Agence Digitale Est Algérien",
        "description": "Services de développement web à Constantine et dans l'Est algérien. Sites vitrines, e-commerce, applications web pour entreprises de Constantine, Sétif, Annaba.",
        "image": "https://symloop.com/images/blog/constantine-web-development.jpg",
        "datePublished": "2024-01-20",
        "dateModified": "2024-12-01",
        "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
        "publisher": { "@type": "Organization", "name": "Symloop", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
        "mainEntityOfPage": "https://symloop.com/blog/developpement-web-constantine-2024"
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
        "name": "Symloop - Développement Web Constantine",
        "description": "Agence de développement web pour Constantine et l'Est algérien",
        "telephone": "+213549575512",
        "areaServed": ["Constantine", "Sétif", "Annaba", "Batna", "Biskra", "Jijel", "Skikda"]
      }
    ]
  };

  const services = [
    {
      icon: Globe,
      title: "Sites Web Professionnels",
      desc: "Sites vitrines modernes pour PME, artisans et professionnels de Constantine",
      features: ["Design responsive", "SEO optimisé", "Multi-langue FR/AR", "Formulaires contact", "Google Maps intégré"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Local",
      desc: "Boutiques en ligne avec paiement CIB/Dahabia pour commerçants",
      features: ["Catalogue produits", "Paiement sécurisé", "Gestion stocks", "Livraison Algérie", "Panel vendeur"]
    },
    {
      icon: GraduationCap,
      title: "E-Learning & Universités",
      desc: "Plateformes éducatives pour universités et centres de formation",
      features: ["Cours en ligne", "Quiz & examens", "Suivi étudiants", "Certificats", "Visioconférence"]
    },
    {
      icon: Building,
      title: "Solutions Business",
      desc: "ERP, CRM et applications de gestion pour entreprises",
      features: ["Gestion clients", "Facturation", "Inventaire", "Rapports", "Multi-utilisateurs"]
    },
    {
      icon: Stethoscope,
      title: "Santé & Cliniques",
      desc: "Solutions digitales pour le secteur médical",
      features: ["Prise RDV en ligne", "Dossiers patients", "Téléconsultation", "Ordonnances", "Laboratoires"]
    },
    {
      icon: Factory,
      title: "Industrie & Production",
      desc: "Applications pour zones industrielles et usines",
      features: ["Suivi production", "Maintenance", "Qualité", "Stock matières", "Planning équipes"]
    }
  ];

  const cities = [
    { name: "Constantine", desc: "Capitale de l'Est, ville universitaire", clients: "50+ clients" },
    { name: "Sétif", desc: "Pôle économique dynamique", clients: "30+ clients" },
    { name: "Annaba", desc: "Port et industrie sidérurgique", clients: "25+ clients" },
    { name: "Batna", desc: "Hauts plateaux et commerce", clients: "20+ clients" },
    { name: "Biskra", desc: "Porte du Sahara, agriculture", clients: "15+ clients" },
    { name: "Jijel", desc: "Tourisme et pêche", clients: "10+ clients" },
    { name: "Skikda", desc: "Pétrochimie et port", clients: "15+ clients" },
    { name: "M'sila", desc: "Agriculture et industrie", clients: "10+ clients" }
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
        "Intégration Google Maps",
        "SEO de base",
        "Hébergement 1 an inclus"
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
        "Gestion commandes",
        "Suivi livraisons",
        "Panel administration",
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
        "Intégrations systèmes",
        "Formation équipe",
        "Maintenance incluse",
        "Support prioritaire"
      ],
      cta: "Nous contacter",
      popular: false
    }
  ];

  const stats = [
    { value: "175+", label: "Clients Est Algérien" },
    { value: "8", label: "Wilayas couvertes" },
    { value: "5+", label: "Années d'expérience" },
    { value: "98%", label: "Satisfaction client" }
  ];

  const sectors = [
    { icon: GraduationCap, name: "Éducation", desc: "Universités, écoles, centres de formation" },
    { icon: Stethoscope, name: "Santé", desc: "Cliniques, cabinets, pharmacies, laboratoires" },
    { icon: Factory, name: "Industrie", desc: "Usines, zones industrielles, production" },
    { icon: ShoppingCart, name: "Commerce", desc: "Boutiques, grossistes, importateurs" },
    { icon: Truck, name: "Transport", desc: "Logistique, livraison, transport voyageurs" },
    { icon: Landmark, name: "Services", desc: "Avocats, comptables, assurances, banques" }
  ];

  return (
    <>
      <Head>
        <title>Développement Web Constantine 2024 | Agence Digitale Est Algérien | Symloop</title>
        <meta name="description" content="Développement web à Constantine et Est algérien. Sites vitrines, e-commerce, e-learning pour universités. Agence digitale pour Sétif, Annaba, Batna. À partir de 40 000 DA." />
        <meta name="keywords" content="développement web constantine, agence digitale constantine, site web sétif, création site annaba, e-commerce est algérien, développeur constantine" />
        <link rel="canonical" href="https://symloop.com/blog/developpement-web-constantine-2024" />
        <meta property="og:title" content="Développement Web Constantine 2024 | Agence Digitale Est Algérien" />
        <meta property="og:description" content="Services web pour Constantine, Sétif, Annaba. Sites vitrines, e-commerce, applications sur mesure." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/developpement-web-constantine-2024" />
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
                <span className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4" />Constantine & Est
                </span>
                <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">2024</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Développement Web à <span className="text-blue-400">Constantine</span> et l'Est Algérien
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Agence digitale au service des entreprises de Constantine, Sétif, Annaba et toutes les wilayas de l'Est.
                Sites web, e-commerce, applications métier adaptés au marché local.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-gray-900/50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
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
                <strong className="text-blue-600">Constantine</strong>, capitale de l'Est algérien et ville aux ponts suspendus,
                représente un bassin économique majeur. Avec ses 3 universités, ses zones industrielles et son tissu de PME dynamiques,
                la région de l'Est a un potentiel digital énorme. <strong>Symloop</strong> accompagne les entreprises constantinoises
                et de l'Est dans leur transformation numérique.
              </p>
            </div>

            {/* Services */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Code className="w-6 h-6 text-blue-600" />
                Services pour Constantine et l'Est
              </h2>
              <div className="space-y-6">
                {services.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-7 h-7 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, j) => (
                            <span key={j} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">{feature}</span>
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
                <Building className="w-6 h-6 text-blue-600" />
                Secteurs d'Activité Servis
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {sectors.map((sector, i) => (
                  <div key={i} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
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
                <MapPin className="w-6 h-6 text-blue-600" />
                Wilayas Couvertes
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {cities.map((city, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                    <div>
                      <h3 className="font-bold text-gray-900">{city.name}</h3>
                      <p className="text-gray-600 text-sm">{city.desc}</p>
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{city.clients}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Mid */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center mb-16">
              <h3 className="text-2xl font-bold mb-3">Entreprise à Constantine ?</h3>
              <p className="text-blue-100 mb-6">Discutons de votre projet de digitalisation</p>
              <a
                href="https://wa.me/213549575512?text=Bonjour, je suis à Constantine et j'ai besoin d'un site web"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Discuter sur WhatsApp
              </a>
            </div>

            {/* Pricing */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-blue-600" />
                Tarifs Développement Web Constantine
              </h2>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif exact dépend du nombre de pages, des fonctionnalités,
                  et de la complexité du design. Tarifs compétitifs adaptés au marché de l'Est.
                  <strong> Contactez-nous pour un devis gratuit.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, i) => (
                  <div key={i} className={`relative bg-white rounded-2xl p-6 border-2 ${plan.popular ? 'border-blue-500 shadow-xl' : 'border-gray-100'}`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">POPULAIRE</span>
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
                      href={`https://wa.me/213549575512?text=Bonjour, je suis intéressé par le pack ${plan.name} pour Constantine`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-center py-3 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
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
                <MessageCircle className="w-6 h-6 text-blue-600" />
                Questions Fréquentes - Constantine
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
                  { title: "Développement Web Oran", href: "/blog/developpement-web-oran-2024" },
                  { title: "E-commerce en Algérie", href: "/blog/ecommerce-algerie-2024" },
                  { title: "Coût Site Web Algérie", href: "/blog/cout-developpement-application-algerie" },
                  { title: "Design UI/UX Algérie", href: "/blog/design-ui-ux-algerie-2024" }
                ].map((article, i) => (
                  <Link key={i} href={article.href} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group">
                    <span className="font-medium text-gray-900 group-hover:text-blue-600">{article.title}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {["développement web constantine", "agence digitale sétif", "site web annaba", "e-commerce est algérien", "application batna", "développeur constantine"].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Digitalisez Votre Entreprise</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Constantine, Sétif, Annaba, Batna... Quelle que soit votre ville dans l'Est algérien,
              nous créons votre présence digitale sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/213549575512?text=Bonjour, je suis dans l'Est algérien et j'ai besoin d'un site web" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
              <a href="tel:+213549575512" className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition-colors">
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
