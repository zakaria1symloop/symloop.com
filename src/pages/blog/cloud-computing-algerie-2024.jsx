"use client";
import { ArrowLeft, Cloud, CheckCircle, MessageCircle, Server, Database, Zap, Globe, AlertCircle, Phone, Gift, Clock, Shield, Users, Award, ChevronDown, ChevronUp, HeadphonesIcon, TrendingUp, HardDrive, Lock, Settings, Cpu, BarChart3 } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug } from '../../data/blogs';
import { useState } from 'react';

export default function CloudComputingAlgerie() {
  const blog = getBlogBySlug('cloud-computing-algerie-2024');
  const [openFaq, setOpenFaq] = useState(0);

  const faqItems = [
    {
      question: "Qu'est-ce que le cloud computing et pourquoi en Algérie ?",
      answer: "Le cloud computing permet aux entreprises algériennes d'accéder à des serveurs, du stockage et des applications via internet, sans investir dans du matériel coûteux. En Algérie, le cloud résout les problèmes de maintenance locale, de pannes fréquentes et de coûts IT élevés. Avec des data centers à Marseille et Paris (latence ~30ms), les entreprises algériennes bénéficient de performances optimales tout en réduisant leurs dépenses de 30 à 50%."
    },
    {
      question: "Combien coûte la migration vers le cloud en Algérie ?",
      answer: "Une migration cloud pour une PME algérienne (1-5 serveurs) démarre à 80 000 DA. Pour une infrastructure moyenne (5-15 serveurs), comptez environ 200 000 DA. Les environnements complexes nécessitent un devis sur mesure. Les coûts mensuels cloud sont généralement 30 à 50% inférieurs à une infrastructure locale. Symloop offre un audit gratuit pour estimer précisément votre budget."
    },
    {
      question: "Le cloud est-il sécurisé pour les données algériennes ?",
      answer: "Oui, les grands fournisseurs cloud (AWS, Azure, Google Cloud) offrent une sécurité supérieure à la plupart des infrastructures locales : chiffrement AES-256, conformité ISO 27001 et SOC 2, pare-feu avancés et protection DDoS. Pour les données sensibles, nous recommandons un cloud privé ou hybride avec hébergement en Europe (France), garantissant la souveraineté des données."
    },
    {
      question: "Symloop propose-t-il des services cloud en Algérie ?",
      answer: "Oui, Symloop est spécialisé dans les services cloud pour les entreprises algériennes. Basés à Alger, nous proposons : migration cloud (AWS, Azure, Google Cloud), hébergement managé, infogérance 24/7, sauvegarde automatisée et optimisation des coûts. Notre équipe certifiée accompagne les PME et grandes entreprises dans toute l'Algérie. Contactez-nous au +213 549 575 512 pour un audit gratuit."
    },
    {
      question: "AWS, Azure ou Google Cloud : lequel choisir en Algérie ?",
      answer: "Le choix dépend de vos besoins. AWS (data center Marseille, ~30ms de latence) offre la plus grande flexibilité et le catalogue de services le plus riche. Azure (Paris, ~35ms) est idéal si vous utilisez déjà l'écosystème Microsoft (Office 365, Teams). Google Cloud (Paris, ~32ms) excelle en IA et machine learning. OVH (France, ~28ms) convient aux budgets serrés. Symloop vous conseille gratuitement sur le meilleur choix pour votre entreprise."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cloud Computing en Algérie 2024 - Migration et Hébergement",
    "description": "Guide complet cloud computing pour entreprises algériennes. AWS, Azure, Google Cloud. Migration, hébergement, infogérance. Prix compétitifs.",
    "author": {
      "@type": "Organization",
      "name": "Symloop",
      "url": "https://symloop.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Symloop",
      "logo": {
        "@type": "ImageObject",
        "url": "https://symloop.com/logo.png"
      }
    },
    "datePublished": "2024-01-15",
    "dateModified": "2024-12-01"
  };

  const faqStructuredData = {
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
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Cloud Computing Algérie 2024", "item": "https://symloop.com/blog/cloud-computing-algerie-2024" }
    ]
  };

  const speakableData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cloud Computing Algérie 2024 - Migration & Hébergement | Symloop",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".en-bref", "h1", ".prose"]
    },
    "url": "https://symloop.com/blog/cloud-computing-algerie-2024"
  };

  return (
    <>
      <Head>
        <title>Cloud Computing Algérie 2024 - Migration & Hébergement | Symloop</title>
        <meta name="description" content="Migration cloud pour entreprises algériennes. AWS, Azure, Google Cloud, OVH. Réduisez vos coûts IT de 40%. Audit gratuit et devis personnalisé." />
        <meta name="keywords" content="cloud computing algérie, aws algérie, azure algérie, google cloud algérie, hébergement cloud, migration cloud, infogérance cloud, serveur cloud algérie, ovh algérie" />
        <link rel="canonical" href="https://symloop.com/blog/cloud-computing-algerie-2024" />
        <meta property="og:title" content="Cloud Computing Algérie 2024 - Migration Cloud | Symloop" />
        <meta property="og:description" content="Migration cloud pour entreprises algériennes. AWS, Azure, Google Cloud. Réduisez vos coûts IT de 40%." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/cloud-computing-algerie-2024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableData) }} />
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
                <span className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Cloud className="w-4 h-4" />Cloud
                </span>
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                  Infrastructure 2024
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-blue-400">Cloud Computing</span> en Algérie 2024
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Migrez vers le cloud et réduisez vos coûts IT de 30-50%.
                AWS, Azure, Google Cloud - nous vous accompagnons.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/213549575512?text=Bonjour, je souhaite migrer vers le cloud"
                   className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600">
                  <MessageCircle className="w-5 h-5" /> Audit Gratuit
                </a>
                <a href="tel:+213549575512"
                   className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20">
                  <Phone className="w-5 h-5" /> +213 549 57 55 12
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Special Offer Banner */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Gift className="w-5 h-5" />
              <span className="font-semibold">Offre : Audit infrastructure GRATUIT + 1er mois cloud -50%</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Nouveaux clients</span>
            </div>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                Le <strong>cloud computing</strong> révolutionne les entreprises algériennes. Fini les serveurs
                coûteux à maintenir, les pannes qui paralysent l'activité, et les investissements IT massifs.
                Avec le cloud, vous payez <span className="text-blue-600 font-semibold">uniquement ce que vous utilisez</span>
                et bénéficiez d'une infrastructure de classe mondiale.
              </p>
              <p className="text-gray-600">
                Nos experts certifiés AWS et Azure vous accompagnent dans votre <strong>migration cloud</strong> :
                audit, stratégie, migration, optimisation et support continu. Une équipe locale à Alger,
                disponible quand vous en avez besoin.
              </p>
            </div>

            {/* En bref */}
            <aside className="en-bref bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-bold text-blue-800 mb-2">En bref</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Symloop accompagne les entreprises algériennes dans leur migration cloud. AWS, Google Cloud,
                infrastructure managée, sauvegarde, monitoring 24/7. Réduction des coûts IT de 40%,
                disponibilité 99.9%. Basé à Sétif. Contact&nbsp;: <a href="tel:+213549575512" className="text-blue-600 font-semibold hover:underline">+213 549 575 512</a>.
              </p>
            </aside>

            {/* Key Stats */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Avantages du Cloud pour votre Entreprise</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { value: "-40%", label: "Coûts IT", icon: TrendingUp },
                    { value: "99.9%", label: "Disponibilité", icon: Zap },
                    { value: "∞", label: "Scalabilité", icon: BarChart3 },
                    { value: "0", label: "Maintenance", icon: Settings }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Main Services */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Nos Services Cloud</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Cloud,
                    title: "Migration Cloud",
                    desc: "Migration complète vers AWS, Azure ou Google Cloud",
                    features: ["Audit de l'existant", "Plan de migration", "Migration sans interruption", "Tests et validation"]
                  },
                  {
                    icon: Server,
                    title: "Hébergement Cloud",
                    desc: "Serveurs virtuels haute performance",
                    features: ["VPS et serveurs dédiés", "Auto-scaling", "Load balancing", "CDN global"]
                  },
                  {
                    icon: Database,
                    title: "Bases de Données Cloud",
                    desc: "PostgreSQL, MySQL, MongoDB managés",
                    features: ["Haute disponibilité", "Backups automatiques", "Réplication temps réel", "Performance optimisée"]
                  },
                  {
                    icon: HardDrive,
                    title: "Stockage Cloud",
                    desc: "Stockage sécurisé et redondant",
                    features: ["Object storage (S3)", "File storage (NFS)", "Archivage long terme", "Synchronisation multi-sites"]
                  },
                  {
                    icon: Shield,
                    title: "Sécurité Cloud",
                    desc: "Protection complète de votre infrastructure",
                    features: ["Pare-feu cloud", "WAF & DDoS protection", "Chiffrement données", "Conformité (ISO, SOC)"]
                  },
                  {
                    icon: Settings,
                    title: "Infogérance Cloud",
                    desc: "Gestion complète de votre cloud",
                    features: ["Monitoring 24/7", "Optimisation coûts", "Mises à jour sécurité", "Support niveau 2-3"]
                  }
                ].map((service, i) => (
                  <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                    <ul className="space-y-1">
                      {service.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Cloud Providers Comparison */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Comparatif Fournisseurs Cloud</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="text-left p-4 rounded-tl-xl">Fournisseur</th>
                      <th className="text-center p-4">Data Center</th>
                      <th className="text-center p-4">Prix VM/mois</th>
                      <th className="text-center p-4">Latence DZ</th>
                      <th className="text-right p-4 rounded-tr-xl">Idéal pour</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { name: "AWS", dc: "Marseille, Paris", price: "~$20+", latency: "~30ms", ideal: "Flexibilité maximale", color: "text-orange-600" },
                      { name: "Azure", dc: "Paris, Amsterdam", price: "~$25+", latency: "~35ms", ideal: "Écosystème Microsoft", color: "text-blue-600" },
                      { name: "Google Cloud", dc: "Paris", price: "~$22+", latency: "~32ms", ideal: "IA & Machine Learning", color: "text-red-600" },
                      { name: "OVH", dc: "France", price: "~€5+", latency: "~28ms", ideal: "Budget serré", color: "text-indigo-600" }
                    ].map((provider, i) => (
                      <tr key={i} className="bg-white hover:bg-gray-50">
                        <td className={`p-4 font-bold ${provider.color}`}>{provider.name}</td>
                        <td className="p-4 text-center text-gray-600">{provider.dc}</td>
                        <td className="p-4 text-center text-gray-900 font-medium">{provider.price}</td>
                        <td className="p-4 text-center text-gray-600">{provider.latency}</td>
                        <td className="p-4 text-right text-gray-600">{provider.ideal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tarifs Services Cloud</h2>
              <p className="text-gray-600 mb-6">
                Nos tarifs incluent la migration, la configuration et le support. Les coûts cloud
                (AWS, Azure, etc.) sont facturés séparément selon votre consommation.
              </p>

              {/* Pricing Warning */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif exact dépend de la taille de votre infrastructure,
                  du nombre de serveurs, et de la complexité de la migration. <strong>Contactez-nous pour un
                  audit gratuit et une estimation personnalisée</strong> - nous analysons votre environnement sans engagement.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Migration PME",
                    price: "80 000",
                    period: "forfait",
                    desc: "Petite infrastructure",
                    features: ["1-5 serveurs", "Migration emails & fichiers", "Configuration cloud", "Formation équipe", "1 mois support"],
                    popular: false
                  },
                  {
                    name: "Migration Business",
                    price: "200 000",
                    period: "forfait",
                    desc: "Infrastructure moyenne",
                    features: ["5-15 serveurs", "Applications métier", "Base de données", "Haute disponibilité", "3 mois support"],
                    popular: true
                  },
                  {
                    name: "Migration Enterprise",
                    price: "Sur devis",
                    period: "selon périmètre",
                    desc: "Infrastructure complexe",
                    features: ["Serveurs illimités", "Multi-cloud", "Architecture sur mesure", "SLA garanti", "Support continu"],
                    popular: false
                  }
                ].map((plan, i) => (
                  <div key={i} className={`relative rounded-2xl p-6 ${plan.popular ? 'bg-blue-600 text-white ring-4 ring-blue-600 ring-offset-2' : 'bg-gray-50'}`}>
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Plus populaire
                      </span>
                    )}
                    <h3 className={`text-xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                    <p className={`text-sm mb-4 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>{plan.desc}</p>
                    <div className="mb-6">
                      <span className={`text-sm ${plan.popular ? 'text-blue-200' : 'text-gray-500'}`}>À partir de</span>
                      <div>
                        <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-blue-600'}`}>
                          {plan.price === "Sur devis" ? "Sur devis" : `${plan.price} DA`}
                        </span>
                      </div>
                      <div className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>{plan.period}</div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle className={`w-4 h-4 ${plan.popular ? 'text-blue-200' : 'text-blue-500'}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={`https://wa.me/213549575512?text=Bonjour, je suis intéressé par ${plan.name}`}
                       className={`block text-center py-3 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                      Demander un Audit
                    </a>
                  </div>
                ))}
              </div>

              {/* Infogérance mensuelle */}
              <div className="mt-8 bg-blue-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Infogérance Cloud Mensuelle</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { name: "Essentiel", price: "30 000 DA/mois", desc: "Monitoring + mises à jour sécurité" },
                    { name: "Business", price: "80 000 DA/mois", desc: "Support prioritaire + optimisation" },
                    { name: "Premium", price: "150 000 DA/mois", desc: "Équipe dédiée + SLA garanti" }
                  ].map((tier, i) => (
                    <div key={i} className="p-4 bg-white rounded-xl">
                      <div className="font-bold text-gray-900">{tier.name}</div>
                      <div className="text-blue-600 font-semibold">{tier.price}</div>
                      <div className="text-sm text-gray-600">{tier.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Migration Process */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Processus de Migration</h2>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Audit Infrastructure", desc: "Inventaire complet de vos serveurs, applications et données", duration: "1 semaine" },
                  { step: "02", title: "Stratégie Cloud", desc: "Choix du fournisseur, architecture cible, plan de migration", duration: "1 semaine" },
                  { step: "03", title: "Préparation", desc: "Configuration cloud, tests de compatibilité, sauvegardes", duration: "1-2 semaines" },
                  { step: "04", title: "Migration", desc: "Transfert des données et applications, par phases", duration: "2-4 semaines" },
                  { step: "05", title: "Validation & Optimisation", desc: "Tests complets, ajustements performance, documentation", duration: "1 semaine" }
                ].map((phase, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                      {phase.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-gray-900">{phase.title}</h3>
                        <span className="text-sm text-blue-600 font-medium">{phase.duration}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions Fréquentes</h2>
              <div className="space-y-3">
                {faqItems.map((item, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                    >
                      <span className="font-semibold text-gray-900">{item.question}</span>
                      {openFaq === i ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4 text-gray-600">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {blog?.tags?.map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Articles Connexes</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Cybersécurité Algérie", href: "/blog/cybersecurite-algerie-2024", desc: "Protégez votre infrastructure" },
                  { title: "DevOps & Déploiement", href: "/blog/devops-deployment-algerie-2024", desc: "CI/CD et automatisation" },
                  { title: "DevOps & Développement Logiciel en Algérie", href: "/blog/devops-developpement-logiciel-algerie-2026", desc: "CI/CD, pipelines, automatisation DevOps pour entreprises algériennes" },
                  { title: "Solutions Informatiques en Algérie", href: "/blog/solutions-informatiques-algerie-2026", desc: "ERP, digitalisation et transformation numérique des entreprises algériennes" }
                ].map((article, i) => (
                  <Link key={i} href={article.href} className="group p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">{article.title}</h3>
                    <p className="text-sm text-gray-600">{article.desc}</p>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Migrez Vers le Cloud</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Réduisez vos coûts IT et gagnez en flexibilité. Audit gratuit et estimation
              personnalisée sous 48h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/213549575512?text=Bonjour, je souhaite migrer mon infrastructure vers le cloud" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50">
                <MessageCircle className="w-5 h-5" /> Audit Gratuit
              </a>
              <a href="tel:+213549575512"
                 className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800">
                <Phone className="w-5 h-5" /> +213 549 57 55 12
              </a>
            </div>
            <p className="text-blue-200 text-sm mt-6">
              <HeadphonesIcon className="w-4 h-4 inline mr-1" />
              Équipe certifiée AWS & Azure à votre service
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
