"use client";
import { useState } from 'react';
import { Calendar, User, ArrowLeft, Zap, CheckCircle, TrendingUp, MessageCircle, Globe, Target, Share2, DollarSign, ChevronDown, ChevronUp, Phone, AlertCircle, Users, Star, BarChart3, Eye, Mail, Search, Video, Instagram, Facebook, Smartphone, Megaphone, PieChart, LineChart } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug, getRelatedBlogs } from '../../data/blogs';

export default function MarketingDigitalAlgerie() {
  const blog = getBlogBySlug('marketing-digital-algerie-2024');
  const relatedBlogs = getRelatedBlogs('marketing-digital-algerie-2024', 3);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Quel budget prévoir pour une campagne Facebook Ads en Algérie ?",
      answer: "Pour une PME algérienne, un budget de 500-2000 DA/jour (15K-60K DA/mois) permet d'obtenir des résultats significatifs. Les CPM en Algérie sont très compétitifs (50-150 DA pour 1000 impressions). Contactez-nous pour une stratégie adaptée à votre budget."
    },
    {
      question: "Google Ads ou Facebook Ads : lequel choisir en Algérie ?",
      answer: "Cela dépend de votre objectif. Facebook Ads est idéal pour la notoriété et le B2C (coûts bas, large audience). Google Ads est meilleur pour capter les intentions d'achat (recherches actives). Souvent, une combinaison des deux est optimale."
    },
    {
      question: "Comment mesurer le ROI de mes campagnes marketing ?",
      answer: "Nous mettons en place un tracking complet : Google Analytics, Facebook Pixel, conversion tracking. Vous avez accès à un dashboard avec les KPIs clés : coût par lead, coût par conversion, ROAS (retour sur dépense publicitaire). Rapports hebdomadaires inclus."
    },
    {
      question: "Gérez-vous les campagnes ou formez-vous nos équipes ?",
      answer: "Les deux ! Nous proposons soit la gestion complète de vos campagnes (done-for-you), soit la formation de vos équipes internes avec accompagnement. Beaucoup de clients commencent par la gestion puis internalisent progressivement."
    },
    {
      question: "Quels résultats puis-je espérer avec le marketing digital ?",
      answer: "Les résultats varient selon le secteur, mais en moyenne nos clients voient : +50% de trafic web en 3 mois, coût par lead divisé par 2, et ROI positif dès le premier mois sur les campagnes bien optimisées. Nous garantissons la transparence des résultats."
    }
  ];

  return (
    <>
      <Head>
        <title>Marketing Digital Algérie 2024 | Facebook Ads, Google Ads, SEO | Symloop</title>
        <meta name="description" content="Services de marketing digital en Algérie : Facebook Ads, Google Ads, SEO, gestion réseaux sociaux. Agence marketing digital Alger. Boostez votre visibilité en ligne." />
        <meta name="keywords" content="marketing digital algérie, facebook ads algérie, google ads algérie, publicité en ligne, réseaux sociaux algérie, agence marketing alger, seo algérie, community management, publicité facebook, instagram ads" />
        <link rel="canonical" href="https://symloop.com/blog/marketing-digital-algerie-2024" />
        <meta property="og:title" content="Marketing Digital Algérie 2024 | Facebook & Google Ads" />
        <meta property="og:description" content="Boostez votre présence en ligne avec nos services de marketing digital : Facebook Ads, Google Ads, SEO, Social Media." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/marketing-digital-algerie-2024" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Marketing Digital Algérie 2024 : Guide Complet",
            "description": "Services de marketing digital en Algérie : Facebook Ads, Google Ads, SEO, Social Media.",
            "author": { "@type": "Organization", "name": "Symloop" },
            "publisher": { "@type": "Organization", "name": "Symloop", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
            "datePublished": "2024-10-20",
            "dateModified": "2024-11-15",
            "mainEntityOfPage": "https://symloop.com/blog/marketing-digital-algerie-2024"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })}
        </script>
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
                <span className="bg-cyan-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Megaphone className="w-4 h-4" />Marketing Digital
                </span>
                <span className="text-gray-400 text-sm">15 min de lecture</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Marketing <span className="text-cyan-400">Digital</span> en Algérie 2024
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Facebook Ads, Google Ads, SEO, Social Media : guide complet pour booster votre visibilité en ligne. Stratégies adaptées au marché algérien.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <span>Par l'équipe Symloop</span>
                <span>•</span>
                <span>Mis à jour : Novembre 2024</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Special Offer Banner */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="font-semibold">
              📊 Offre : <span className="underline">Audit Marketing Gratuit</span> + Stratégie personnalisée pour votre entreprise
              <a href="https://wa.me/213549575512?text=Bonjour, je souhaite un audit marketing digital gratuit" className="ml-3 bg-white text-cyan-600 px-4 py-1 rounded-full text-sm font-bold hover:bg-cyan-100">
                Demander →
              </a>
            </p>
          </div>
        </div>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                Le <span className="text-cyan-600 font-semibold">marketing digital en Algérie</span> explose avec
                23 millions d'utilisateurs Facebook, 8 millions sur Instagram et une croissance de 40% du e-commerce.
                Les entreprises algériennes qui maîtrisent le <span className="text-cyan-600 font-semibold">marketing en ligne</span>
                gagnent un avantage compétitif majeur. Ce guide vous montre comment.
              </p>
            </div>

            {/* Stats Box */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 rounded-r-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Réseaux Sociaux en Algérie 2024</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "Facebook", users: "23M", growth: "+5%" },
                  { name: "Instagram", users: "8M", growth: "+25%" },
                  { name: "TikTok", users: "6M", growth: "+60%" },
                  { name: "LinkedIn", users: "3M", growth: "+15%" }
                ].map((social, i) => (
                  <div key={i} className="text-center bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-3xl font-bold text-cyan-600">{social.users}</div>
                    <div className="text-sm font-medium text-gray-900">{social.name}</div>
                    <div className="text-xs text-green-600 font-medium">{social.growth}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Marketing Channels */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <Megaphone className="w-5 h-5 text-cyan-600" />
                </div>
                Canaux Marketing Efficaces en Algérie
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Facebook,
                    title: "Facebook & Instagram Ads",
                    desc: "Le duo incontournable pour toucher les consommateurs algériens. CPM très compétitifs, ciblage précis, formats variés.",
                    features: ["Audience de 23M+ utilisateurs", "CPM : 50-150 DA/1000 impressions", "Formats : Image, Vidéo, Carousel, Stories", "Ciblage démographique et par intérêts"],
                    budget: "500 - 5000 DA/jour",
                    roi: "ROAS moyen : 3-5x",
                    color: "blue"
                  },
                  {
                    icon: Search,
                    title: "Google Ads (Search & Display)",
                    desc: "Captez les utilisateurs qui recherchent activement vos produits/services. ROI élevé sur les intentions d'achat.",
                    features: ["Ciblage par mots-clés", "Réseau Display pour notoriété", "YouTube Ads inclus", "Remarketing puissant"],
                    budget: "1000 - 10000 DA/jour",
                    roi: "ROAS moyen : 4-8x",
                    color: "green"
                  },
                  {
                    icon: Video,
                    title: "TikTok Ads",
                    desc: "La plateforme qui monte en Algérie, idéale pour toucher les jeunes (18-35 ans) avec du contenu créatif et viral.",
                    features: ["Audience jeune et engagée", "Format vidéo court performant", "Coûts encore bas", "Potentiel viral élevé"],
                    budget: "500 - 3000 DA/jour",
                    roi: "ROAS moyen : 2-4x",
                    color: "pink"
                  },
                  {
                    icon: Globe,
                    title: "SEO (Référencement Naturel)",
                    desc: "Positionnez-vous durablement sur Google pour les recherches de vos clients potentiels en Algérie.",
                    features: ["Trafic gratuit et durable", "Crédibilité et confiance", "ROI long terme élevé", "SEO local pour Algérie"],
                    budget: "50K - 200K DA/mois",
                    roi: "ROI : 6-12 mois pour résultats",
                    color: "orange"
                  }
                ].map((channel, i) => (
                  <div key={i} className={`bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-${channel.color}-200 transition-all hover:shadow-lg`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-${channel.color}-100 rounded-xl flex items-center justify-center`}>
                        <channel.icon className={`w-6 h-6 text-${channel.color}-600`} />
                      </div>
                      <span className={`text-xs bg-${channel.color}-100 text-${channel.color}-700 px-3 py-1 rounded-full font-medium`}>{channel.roi}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{channel.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{channel.desc}</p>
                    <div className="space-y-2 mb-4">
                      {channel.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {f}
                        </div>
                      ))}
                    </div>
                    <div className={`text-sm font-bold text-${channel.color}-600 bg-${channel.color}-50 rounded-lg px-3 py-2`}>
                      Budget recommandé : {channel.budget}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Services */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-purple-600" />
                </div>
                Nos Services Marketing Digital
              </h2>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: BarChart3, title: "Gestion Publicités", desc: "Facebook, Instagram, Google, TikTok Ads", items: ["Création campagnes", "Optimisation continue", "A/B testing", "Reporting mensuel"] },
                  { icon: Share2, title: "Community Management", desc: "Gestion de vos réseaux sociaux", items: ["Calendrier éditorial", "Création contenu", "Animation communauté", "Veille concurrentielle"] },
                  { icon: Search, title: "SEO & Content", desc: "Référencement naturel et contenu", items: ["Audit SEO complet", "Optimisation technique", "Rédaction contenu", "Link building"] },
                  { icon: Mail, title: "Email Marketing", desc: "Campagnes email et newsletters", items: ["Design templates", "Automation", "Segmentation", "Analyse performance"] },
                  { icon: Video, title: "Production Contenu", desc: "Photos, vidéos, visuels publicitaires", items: ["Shooting produits", "Vidéos courtes", "Motion design", "Visuels social media"] },
                  { icon: LineChart, title: "Analytics & Reporting", desc: "Mesure et optimisation des performances", items: ["Dashboard temps réel", "KPIs personnalisés", "Rapports hebdo/mensuels", "Recommandations"] }
                ].map((service, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-5 hover:bg-cyan-50 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm">
                      <service.icon className="w-5 h-5 text-cyan-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-gray-500 text-sm mb-3">{service.desc}</p>
                    <ul className="space-y-1">
                      {service.items.map((item, j) => (
                        <li key={j} className="text-xs text-gray-600 flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                Tarifs Marketing Digital Algérie 2024
              </h2>

              {/* Pricing Warning */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs hors budget publicitaire.</strong> Le budget pub (Facebook, Google) est facturé directement par les plateformes.
                  <strong> Contactez-nous pour un audit gratuit et une stratégie sur mesure.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Starter",
                    price: "15K - 35K DA",
                    period: "/mois",
                    desc: "Idéal pour TPE et startups",
                    features: ["Gestion 1-2 plateformes", "4 publications/semaine", "Reporting mensuel", "1 campagne publicitaire", "Support email"],
                    notIncluded: ["Production vidéo", "SEO avancé"],
                    color: "green"
                  },
                  {
                    name: "Growth",
                    price: "40K - 80K DA",
                    period: "/mois",
                    desc: "PME en croissance",
                    features: ["Gestion 3-4 plateformes", "Contenu quotidien", "2-3 campagnes pub", "Community management", "Reporting hebdomadaire", "A/B testing", "Support prioritaire"],
                    notIncluded: [],
                    popular: true,
                    color: "cyan"
                  },
                  {
                    name: "Enterprise",
                    price: "Sur devis",
                    period: "",
                    desc: "Grandes entreprises",
                    features: ["Gestion tous canaux", "Stratégie 360°", "Production contenu", "Influence marketing", "SEO complet", "Reporting temps réel", "Account manager dédié"],
                    notIncluded: [],
                    color: "purple"
                  }
                ].map((plan, i) => (
                  <div key={i} className={`rounded-2xl p-6 ${plan.popular ? 'bg-gradient-to-br from-cyan-500 to-blue-500 text-white ring-4 ring-cyan-200' : 'bg-gray-50'}`}>
                    {plan.popular && <div className="text-xs font-bold uppercase tracking-wider mb-2">Le Plus Populaire</div>}
                    <h3 className={`text-xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                    <p className={`text-sm mb-3 ${plan.popular ? 'text-cyan-100' : 'text-gray-500'}`}>{plan.desc}</p>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-cyan-600'}`}>{plan.price}</span>
                      <span className={`text-sm ${plan.popular ? 'text-cyan-100' : 'text-gray-500'}`}>{plan.period}</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {plan.features.map((f, j) => (
                        <li key={j} className={`flex items-center gap-2 text-sm ${plan.popular ? 'text-white' : 'text-gray-600'}`}>
                          <CheckCircle className={`w-4 h-4 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                * Budget publicitaire (Facebook, Google) non inclus - À définir selon vos objectifs
              </p>
            </section>

            {/* Results */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                Résultats Attendus
              </h2>

              <div className="bg-gradient-to-br from-green-50 to-cyan-50 rounded-2xl p-8">
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  {[
                    { metric: "+50%", label: "Trafic web", period: "en 3 mois" },
                    { metric: "÷2", label: "Coût par lead", period: "vs moyenne" },
                    { metric: "3-5x", label: "ROAS", period: "retour sur pub" },
                    { metric: "+200%", label: "Engagement", period: "réseaux sociaux" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center bg-white rounded-xl p-4">
                      <div className="text-3xl font-bold text-green-600">{stat.metric}</div>
                      <div className="text-sm font-medium text-gray-900">{stat.label}</div>
                      <div className="text-xs text-gray-500">{stat.period}</div>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { sector: "E-commerce", result: "ROAS 5x sur Facebook Ads", detail: "Boutique mode Alger" },
                    { sector: "Restaurant", result: "+300% réservations", detail: "Campagne locale Instagram" },
                    { sector: "Agence immo", result: "50 leads/mois à 200 DA", detail: "Google Ads + Facebook" }
                  ].map((case_, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl">
                      <div className="text-cyan-600 font-bold text-sm mb-1">{case_.sector}</div>
                      <div className="font-bold text-gray-900 mb-1">{case_.result}</div>
                      <div className="text-gray-500 text-xs">{case_.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Why Symloop */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-purple-600" />
                </div>
                Pourquoi Symloop pour Votre Marketing Digital ?
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Target, title: "Expertise Locale", desc: "Connaissance approfondie du marché algérien et des comportements consommateurs" },
                  { icon: BarChart3, title: "Data-Driven", desc: "Décisions basées sur les données, optimisation continue, transparence totale" },
                  { icon: Users, title: "Équipe Certifiée", desc: "Experts certifiés Facebook Blueprint, Google Ads, et autres plateformes" },
                  { icon: Zap, title: "Résultats Rapides", desc: "Premières campagnes en 48h, résultats mesurables dès la première semaine" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <item.icon className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                </div>
                Questions Fréquentes - Marketing Digital
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-2 border-gray-100 rounded-xl overflow-hidden hover:border-cyan-200 transition-colors">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {["Marketing Digital Algérie", "Facebook Ads", "Google Ads", "SEO Algérie", "Publicité en Ligne", "Social Media", "Community Management", "Instagram Ads"].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Lancez Votre Campagne Marketing</h2>
            <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
              Stratégie personnalisée et gestion de vos campagnes publicitaires. Audit gratuit et recommandations sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/213549575512?text=Bonjour, je souhaite une stratégie marketing digital pour mon entreprise"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Consultation Gratuite
              </a>
              <a
                href="tel:+213549575512"
                className="inline-flex items-center justify-center gap-2 bg-cyan-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-cyan-800 transition-colors border border-cyan-500"
              >
                <Phone className="w-5 h-5" /> +213 549 57 55 12
              </a>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedBlogs && relatedBlogs.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Articles Connexes</h2>
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
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
