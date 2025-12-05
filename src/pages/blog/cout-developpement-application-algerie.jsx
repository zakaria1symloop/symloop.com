"use client";
import { useState } from 'react';
import { ArrowLeft, Calculator, CheckCircle, MessageCircle, Globe, Smartphone, ShoppingCart, Database, ChevronDown, AlertCircle, Code, Palette, Server, Clock, Star, ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';

export default function CoutDeveloppementAlgerie() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Pourquoi vos prix sont-ils plus abordables que la concurrence ?",
      answer: "Nous optimisons nos processus de développement avec des outils modernes et des frameworks réutilisables. Notre équipe basée en Algérie a des coûts opérationnels réduits par rapport aux agences européennes, ce qui nous permet de proposer des tarifs compétitifs tout en maintenant une qualité professionnelle. Nous privilégions les relations long-terme avec nos clients."
    },
    {
      question: "Le prix inclut-il l'hébergement et le nom de domaine ?",
      answer: "Oui, nos forfaits incluent généralement la première année d'hébergement et de nom de domaine (.dz, .com, etc.). Par la suite, le renouvellement coûte environ 5,000-10,000 DA/an pour l'hébergement basique et 2,000-5,000 DA/an pour le domaine selon l'extension choisie."
    },
    {
      question: "Comment fonctionne le paiement ?",
      answer: "Nous proposons un paiement en 2-3 fois : 40% à la signature pour démarrer, 30% à mi-parcours, et 30% à la livraison. Nous acceptons les virements bancaires CCP, BADR, et paiements en espèces. Pour les gros projets, des modalités personnalisées sont possibles."
    },
    {
      question: "Que se passe-t-il si je veux modifier le projet en cours de route ?",
      answer: "Les modifications mineures sont incluses gratuitement. Pour les changements majeurs (ajout de fonctionnalités, refonte de sections), nous proposons un avenant avec tarification transparente. Nous vous conseillons de bien définir le cahier des charges au départ pour éviter les surcoûts."
    },
    {
      question: "Proposez-vous des facilités pour les startups et étudiants ?",
      answer: "Oui ! Nous offrons 15-20% de réduction pour les startups en phase de lancement et les étudiants entrepreneurs. Nous proposons aussi des MVP simplifiés à budget réduit pour tester votre idée avant d'investir davantage. Contactez-nous pour discuter de votre situation."
    },
    {
      question: "Y a-t-il des coûts cachés ?",
      answer: "Non, nous sommes 100% transparents. Le devis détaille tous les coûts : développement, design, hébergement, domaine, et maintenance si applicable. Les seuls coûts additionnels possibles sont les demandes de modifications hors cahier des charges initial, toujours validées avec vous au préalable."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Coût Développement Application & Site Web en Algérie 2024",
        "description": "Guide complet des prix de développement web et mobile en Algérie. Tarifs sites vitrines, e-commerce, applications mobiles. Devis gratuit sous 24h.",
        "author": { "@type": "Organization", "name": "Symloop" },
        "publisher": {
          "@type": "Organization",
          "name": "Symloop",
          "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" }
        },
        "datePublished": "2024-01-15",
        "dateModified": "2024-12-01",
        "mainEntityOfPage": "https://symloop.com/blog/cout-developpement-application-algerie"
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
        "serviceType": "Développement Web et Mobile",
        "provider": {
          "@type": "Organization",
          "name": "Symloop",
          "telephone": "+213549575512",
          "address": { "@type": "PostalAddress", "addressCountry": "DZ" }
        },
        "areaServed": ["Algérie", "Tunisie", "Maroc", "MENA"]
      }
    ]
  };

  const pricingCategories = [
    {
      category: "Sites Web",
      icon: Globe,
      items: [
        { name: "Site Vitrine Simple", price: "35,000 - 50,000 DA", delay: "1-2 semaines", features: ["5-8 pages", "Responsive", "SEO basique", "Formulaire contact"] },
        { name: "Site Vitrine Pro", price: "50,000 - 80,000 DA", delay: "2-3 semaines", features: ["10+ pages", "Blog intégré", "SEO optimisé", "Analytics"] },
        { name: "Site E-commerce", price: "80,000 - 150,000 DA", delay: "3-6 semaines", features: ["Catalogue produits", "Panier", "Paiement CIB/EDAHABIA", "Gestion stocks"] }
      ]
    },
    {
      category: "Applications Mobiles",
      icon: Smartphone,
      items: [
        { name: "App MVP", price: "60,000 - 90,000 DA", delay: "3-5 semaines", features: ["iOS + Android", "3-5 écrans", "Auth", "API simple"] },
        { name: "App Complète", price: "120,000 - 200,000 DA", delay: "6-10 semaines", features: ["iOS + Android", "10+ écrans", "Paiements", "Push notifications"] },
        { name: "App Complexe", price: "Sur devis", delay: "3-6 mois", features: ["Fonctionnalités avancées", "Intégrations multiples", "Chat temps réel", "Offline mode"] }
      ]
    },
    {
      category: "Applications Web",
      icon: Code,
      items: [
        { name: "Dashboard Simple", price: "40,000 - 70,000 DA", delay: "2-4 semaines", features: ["CRUD basique", "Auth", "Rapports simples", "Export Excel"] },
        { name: "Application Métier", price: "80,000 - 150,000 DA", delay: "4-8 semaines", features: ["Multi-utilisateurs", "Workflows", "Dashboard analytics", "API REST"] },
        { name: "Plateforme SaaS", price: "Sur devis", delay: "3-6 mois", features: ["Multi-tenant", "Facturation", "Scalable", "Support intégré"] }
      ]
    }
  ];

  const factorsInfluencing = [
    { icon: Globe, title: "Complexité", desc: "Nombre de pages/écrans, fonctionnalités, logique métier", impact: "Impact élevé" },
    { icon: Smartphone, title: "Plateformes", desc: "Web seul, iOS, Android, ou les trois combinés", impact: "Impact moyen" },
    { icon: ShoppingCart, title: "Intégrations", desc: "Paiement (CIB/EDAHABIA), APIs tierces, ERP/CRM", impact: "Impact élevé" },
    { icon: Palette, title: "Design", desc: "Template adapté vs design 100% sur mesure", impact: "Impact moyen" },
    { icon: Database, title: "Backend", desc: "Complexité de la base de données et des traitements", impact: "Impact élevé" },
    { icon: Shield, title: "Sécurité", desc: "Authentification avancée, chiffrement, audits", impact: "Impact moyen" }
  ];

  const comparisonTable = [
    { type: "Freelance", price: "20,000 - 80,000 DA", pros: "Prix bas, flexibilité", cons: "Disponibilité variable, support limité" },
    { type: "Agence Locale (Symloop)", price: "35,000 - 200,000 DA", pros: "Qualité, support, équipe dédiée", cons: "Délais plus structurés" },
    { type: "Agence Étrangère", price: "500,000 - 2,000,000 DA", pros: "Réputation, portfolio", cons: "Prix très élevé, communication difficile" }
  ];

  const stats = [
    { value: "35K DA", label: "Prix minimum site" },
    { value: "60K DA", label: "Prix minimum app" },
    { value: "24h", label: "Devis gratuit" },
    { value: "15%", label: "Réduction startups" }
  ];

  const relatedArticles = [
    { title: "Développement Web Algérie", href: "/blog/developpement-web-algerie-2024", tag: "Web" },
    { title: "Développement Mobile Algérie", href: "/blog/developpement-application-mobile-algerie-2024", tag: "Mobile" },
    { title: "Choisir un Développeur", href: "/blog/comment-choisir-developpeur-algerie", tag: "Guide" }
  ];

  return (
    <>
      <Head>
        <title>Coût Développement Application & Site Web Algérie 2024 | Prix & Tarifs | Symloop</title>
        <meta name="description" content="Guide complet des prix de développement en Algérie. Sites vitrines à partir de 35,000 DA, applications mobiles dès 60,000 DA. Tarifs transparents, devis gratuit." />
        <meta name="keywords" content="prix site web algérie, coût application mobile algérie, tarif développement, budget digital, devis site internet, prix application algérie" />
        <link rel="canonical" href="https://symloop.com/blog/cout-developpement-application-algerie" />
        <meta property="og:title" content="Coût Développement Application & Site Web Algérie 2024" />
        <meta property="og:description" content="Guide des prix de développement en Algérie. Sites web dès 35,000 DA, apps dès 60,000 DA. Tarifs transparents." />
        <meta property="og:url" content="https://symloop.com/blog/cout-developpement-application-algerie" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 text-white py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-green-300 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Retour au blog
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-green-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Calculator className="w-4 h-4" /> Guide Tarifs
                </span>
                <span className="bg-green-700/50 text-green-200 px-4 py-1.5 rounded-full text-sm">2024</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-green-400">Coût</span> Développement Web & Mobile en Algérie
              </h1>
              <p className="text-xl text-green-100 mb-8 max-w-3xl">
                Guide complet des prix du marché algérien. Tarifs transparents et compétitifs
                pour votre projet digital : sites web, applications mobiles et logiciels.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/213549575512?text=Bonjour, je souhaite un devis pour mon projet digital"
                   target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors">
                  <MessageCircle className="w-5 h-5" /> Devis Gratuit 24h
                </a>
                <a href="tel:+213549575512" className="inline-flex items-center gap-2 border-2 border-green-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-800 transition-colors">
                  +213 549 57 55 12
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-green-50 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="text-3xl font-bold text-green-600">{stat.value}</div>
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
                <span className="text-green-600 font-semibold">Combien coûte</span> un site web ou une application mobile en Algérie ?
                Voici les <span className="text-green-600 font-semibold">prix réels et compétitifs</span> du marché algérien en 2024.
                Chez Symloop, nous proposons des tarifs transparents, sans surprises, adaptés aux PME et startups algériennes.
              </p>
            </div>

            {/* Yellow Warning Box */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-12">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-800">
                <strong>Prix indicatifs.</strong> Le tarif exact dépend de la complexité de votre projet, des fonctionnalités souhaitées, et des intégrations requises.
                <strong> Contactez-nous pour un devis gratuit, précis et personnalisé sous 24h.</strong>
              </p>
            </div>

            {/* Pricing Categories */}
            {pricingCategories.map((category, catIndex) => (
              <section key={catIndex} className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.items.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                      className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-green-300 hover:shadow-lg transition-all">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                      <div className="text-2xl font-bold text-green-600 mb-2">{item.price}</div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Clock className="w-4 h-4" />
                        <span>{item.delay}</span>
                      </div>
                      <ul className="space-y-2">
                        {item.features.map((feature, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </section>
            ))}

            {/* Factors Influencing Price */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Ce qui Influence le Prix</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {factorsInfluencing.map((factor, i) => (
                  <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-green-200 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <factor.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">{factor.impact}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{factor.title}</h3>
                    <p className="text-gray-600 text-sm">{factor.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Comparison Table */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Comparaison Freelance vs Agence</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-green-600 text-white">
                      <th className="text-left p-4">Type</th>
                      <th className="text-center p-4">Fourchette Prix</th>
                      <th className="text-left p-4">Avantages</th>
                      <th className="text-left p-4">Inconvénients</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {comparisonTable.map((row, i) => (
                      <tr key={i} className={`hover:bg-gray-50 ${row.type.includes('Symloop') ? 'bg-green-50' : ''}`}>
                        <td className="p-4 font-semibold">{row.type}</td>
                        <td className="p-4 text-center text-green-600 font-bold">{row.price}</td>
                        <td className="p-4 text-sm text-gray-600">{row.pros}</td>
                        <td className="p-4 text-sm text-gray-500">{row.cons}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* CTA Mid */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4">Obtenez Votre Devis Gratuit</h2>
                <p className="text-green-100 mb-6">Décrivez votre projet et recevez un devis détaillé sous 24h. Sans engagement.</p>
                <a href="https://wa.me/213549575512?text=Bonjour, je souhaite un devis détaillé pour mon projet"
                   target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors">
                  <MessageCircle className="w-5 h-5" /> Demander un Devis
                </a>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions Fréquentes sur les Tarifs</h2>
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
                  <Link key={i} href={article.href} className="group block bg-gray-50 rounded-xl p-6 hover:bg-green-50 transition-colors">
                    <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">{article.tag}</span>
                    <h3 className="font-semibold text-gray-900 mt-3 group-hover:text-green-600 transition-colors">{article.title}</h3>
                    <span className="inline-flex items-center gap-1 text-sm text-green-600 mt-2">
                      Lire <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {["Prix", "Tarifs", "Coût", "Développement", "Site Web", "Application", "Mobile", "Algérie", "Devis"].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à Lancer Votre Projet ?</h2>
            <p className="text-green-100 mb-8 text-lg">Tarifs compétitifs et qualité garantie. Devis gratuit sous 24h.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/213549575512?text=Bonjour, je souhaite un devis pour mon projet digital"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors">
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
