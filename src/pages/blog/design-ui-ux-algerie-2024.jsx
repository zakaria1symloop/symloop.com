"use client";
import { useState } from 'react';
import { ArrowLeft, Palette, CheckCircle, MessageCircle, Layers, Eye, Smartphone, Figma, ChevronDown, ChevronUp, Star, Users, Target, Zap, Clock, DollarSign, Phone, AlertCircle, Monitor, MousePointer, Lightbulb, Sparkles, BarChart3, Building } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug, getRelatedBlogs } from '../../data/blogs';

export default function DesignUIUXAlgerie() {
  const blog = getBlogBySlug('design-ui-ux-algerie-2024');
  const relatedBlogs = getRelatedBlogs('design-ui-ux-algerie-2024', 3);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Quelle est la différence entre UI et UX design ?",
      answer: "L'UI (User Interface) concerne l'aspect visuel : couleurs, typographie, boutons, icônes. L'UX (User Experience) concerne le parcours utilisateur : facilité d'utilisation, logique de navigation, satisfaction globale. Les deux sont complémentaires et essentiels pour un produit réussi."
    },
    {
      question: "Combien coûte une maquette Figma pour une application ?",
      answer: "Les tarifs varient selon la complexité : une landing page coûte entre 50K et 100K DA, une application mobile 150K-400K DA, et une application web complète 200K-600K DA. Contactez-nous pour un devis précis adapté à votre projet."
    },
    {
      question: "Combien de temps pour créer un design complet ?",
      answer: "Une landing page prend 3-5 jours, une application mobile 2-3 semaines, une application web complexe 3-5 semaines. Ce délai inclut les révisions et la finalisation du design system."
    },
    {
      question: "Fournissez-vous les fichiers sources Figma ?",
      answer: "Oui, vous recevez tous les fichiers sources Figma, le design system complet, les assets exportés (icônes, images) et la documentation d'utilisation. Vous êtes 100% propriétaire du design."
    },
    {
      question: "Faites-vous des tests utilisateurs en Algérie ?",
      answer: "Oui, nous organisons des sessions de tests avec de vrais utilisateurs algériens pour valider les parcours et identifier les points de friction avant le développement. C'est inclus dans nos formules Standard et Premium."
    }
  ];

  return (
    <>
      <Head>
        <title>Design UI/UX Algérie 2024 | Maquettes Figma, Interfaces Modernes | Symloop</title>
        <meta name="description" content="Services de design UI/UX en Algérie : maquettes Figma professionnelles, interfaces utilisateur modernes, design system complet. Tarifs compétitifs et qualité internationale." />
        <meta name="keywords" content="design ui ux algérie, interface utilisateur, maquette figma, expérience utilisateur, agence design alger, ux design algérie, ui designer, prototype figma, design system, conception interface" />
        <link rel="canonical" href="https://symloop.com/blog/design-ui-ux-algerie-2024" />
        <meta property="og:title" content="Design UI/UX Algérie 2024 | Maquettes Figma Professionnelles" />
        <meta property="og:description" content="Création d'interfaces utilisateur modernes et intuitives. Design UI/UX de qualité internationale à prix algérien." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/design-ui-ux-algerie-2024" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Design UI/UX Algérie 2024 : Guide Complet",
            "description": "Services de design UI/UX en Algérie : maquettes Figma, interfaces modernes, design system.",
            "author": { "@type": "Organization", "name": "Symloop" },
            "publisher": { "@type": "Organization", "name": "Symloop", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
            "datePublished": "2024-10-15",
            "dateModified": "2024-11-15",
            "mainEntityOfPage": "https://symloop.com/blog/design-ui-ux-algerie-2024"
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
                <span className="bg-pink-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Palette className="w-4 h-4" />Design
                </span>
                <span className="text-gray-400 text-sm">12 min de lecture</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Design <span className="text-pink-400">UI/UX</span> en Algérie 2024
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Créez des interfaces qui convertissent : maquettes Figma professionnelles, expérience utilisateur optimisée, design system complet. Qualité internationale, prix algérien.
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
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-4">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="font-semibold">
              🎨 Offre Design : <span className="underline">Audit UX Gratuit</span> de votre site ou application existante
              <a href="https://wa.me/213549575512?text=Bonjour, je souhaite un audit UX gratuit de mon site/application" className="ml-3 bg-white text-pink-600 px-4 py-1 rounded-full text-sm font-bold hover:bg-pink-100">
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
                Un bon <span className="text-pink-600 font-semibold">design UI/UX</span> peut augmenter votre
                taux de conversion de <span className="text-pink-600 font-semibold">200%</span>. Chez Symloop,
                nous créons des interfaces intuitives et esthétiques qui transforment vos visiteurs en clients.
                Notre équipe de designers algériens maîtrise <span className="text-pink-600 font-semibold">Figma</span>,
                les dernières tendances design et les spécificités du marché local.
              </p>
            </div>

            {/* Stats Box */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-l-4 border-pink-500 rounded-r-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Impact du Design sur les Conversions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "+200%", label: "Conversions", desc: "avec bon UX" },
                  { value: "94%", label: "Première impression", desc: "basée sur le design" },
                  { value: "88%", label: "Utilisateurs", desc: "partent si UX mauvais" },
                  { value: "3 sec", label: "Temps", desc: "pour convaincre" }
                ].map((stat, i) => (
                  <div key={i} className="text-center bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-3xl font-bold text-pink-600">{stat.value}</div>
                    <div className="text-sm font-medium text-gray-900">{stat.label}</div>
                    <div className="text-xs text-gray-500">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Design */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
                  <Palette className="w-5 h-5 text-pink-600" />
                </div>
                Nos Services Design UI/UX
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Eye,
                    title: "UI Design (Interface)",
                    desc: "Création d'interfaces visuellement attrayantes et cohérentes avec votre identité de marque.",
                    features: ["Maquettes haute fidélité Figma", "Design System complet", "Composants réutilisables", "Styleguide et guidelines"],
                    color: "pink"
                  },
                  {
                    icon: MousePointer,
                    title: "UX Design (Expérience)",
                    desc: "Conception de parcours utilisateurs optimisés pour maximiser les conversions et la satisfaction.",
                    features: ["Recherche utilisateur", "Wireframes et prototypes", "Tests d'utilisabilité", "Optimisation des parcours"],
                    color: "purple"
                  },
                  {
                    icon: Smartphone,
                    title: "Design Mobile-First",
                    desc: "Interfaces responsive pensées pour mobile d'abord, essentielles pour le marché algérien.",
                    features: ["Design iOS & Android", "Responsive Web Design", "Touch-friendly", "Performance optimisée"],
                    color: "blue"
                  },
                  {
                    icon: Layers,
                    title: "Design System",
                    desc: "Création de systèmes de design scalables pour assurer la cohérence de votre produit.",
                    features: ["Librairie de composants", "Documentation complète", "Tokens de design", "Guidelines d'utilisation"],
                    color: "green"
                  }
                ].map((service, i) => (
                  <div key={i} className={`bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-${service.color}-200 transition-all hover:shadow-lg`}>
                    <div className={`w-12 h-12 bg-${service.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                      <service.icon className={`w-6 h-6 text-${service.color}-600`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                    <div className="space-y-2">
                      {service.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Process Design */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-purple-600" />
                </div>
                Notre Processus Design
              </h2>

              <div className="space-y-4">
                {[
                  { step: "01", title: "Discovery & Research", desc: "Analyse de vos besoins, de votre cible et de vos concurrents. Création de personas et définition des objectifs.", duration: "2-3 jours", color: "bg-pink-500" },
                  { step: "02", title: "Wireframes & Architecture", desc: "Création de la structure de l'information et des wireframes basse fidélité pour valider les parcours.", duration: "3-5 jours", color: "bg-purple-500" },
                  { step: "03", title: "Maquettes UI Figma", desc: "Design haute fidélité de toutes les pages et états. Création du design system et des composants.", duration: "5-10 jours", color: "bg-blue-500" },
                  { step: "04", title: "Prototype & Tests", desc: "Prototype interactif cliquable et tests avec de vrais utilisateurs pour valider l'UX.", duration: "2-3 jours", color: "bg-green-500" },
                  { step: "05", title: "Livraison & Handoff", desc: "Export des assets, documentation pour développeurs, fichiers sources Figma et support.", duration: "1-2 jours", color: "bg-orange-500" }
                ].map((phase, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className={`${phase.color} text-white px-4 py-2 rounded-xl font-bold text-sm flex-shrink-0 min-w-[60px] text-center`}>
                      {phase.step}
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-gray-900 text-lg">{phase.title}</h3>
                        <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">{phase.duration}</span>
                      </div>
                      <p className="text-gray-600">{phase.desc}</p>
                    </div>
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
                Tarifs Design UI/UX Algérie 2024
              </h2>

              {/* Pricing Warning */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif final dépend du nombre d'écrans, de la complexité et des fonctionnalités spécifiques.
                  <strong> Contactez-nous pour un devis gratuit et personnalisé.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Landing Page",
                    price: "15K - 40K DA",
                    duration: "2-4 jours",
                    features: ["1 page responsive", "Design moderne", "Mobile-first", "Fichiers Figma", "Export assets"],
                    ideal: "Validation idée, MVP",
                    color: "green"
                  },
                  {
                    name: "Application Mobile",
                    price: "50K - 150K DA",
                    duration: "1-2 semaines",
                    features: ["10-30 écrans", "Design iOS/Android", "Wireframes inclus", "Design System", "Prototype interactif", "Tests UX"],
                    ideal: "App startup, MVP mobile",
                    popular: true,
                    color: "pink"
                  },
                  {
                    name: "Application Web",
                    price: "Sur devis",
                    duration: "Selon complexité",
                    features: ["Dashboard complet", "Design System avancé", "Responsive design", "Composants réutilisables", "Documentation", "Support 1 mois"],
                    ideal: "SaaS, ERP, Plateforme",
                    color: "purple"
                  }
                ].map((plan, i) => (
                  <div key={i} className={`rounded-2xl p-6 ${plan.popular ? 'bg-gradient-to-br from-pink-500 to-purple-500 text-white ring-4 ring-pink-200' : 'bg-gray-50'}`}>
                    {plan.popular && <div className="text-xs font-bold uppercase tracking-wider mb-2">Le Plus Demandé</div>}
                    <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                    <div className={`text-3xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-pink-600'}`}>{plan.price}</div>
                    <div className={`text-sm mb-4 ${plan.popular ? 'text-pink-100' : 'text-gray-500'}`}>{plan.duration}</div>
                    <ul className="space-y-2 mb-4">
                      {plan.features.map((f, j) => (
                        <li key={j} className={`flex items-center gap-2 text-sm ${plan.popular ? 'text-white' : 'text-gray-600'}`}>
                          <CheckCircle className={`w-4 h-4 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className={`text-xs ${plan.popular ? 'text-pink-100' : 'text-gray-500'}`}>Idéal pour : {plan.ideal}</div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                * Prix en Dinar Algérien - Devis gratuit sur demande
              </p>
            </section>

            {/* Tools We Use */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Figma className="w-5 h-5 text-blue-600" />
                </div>
                Nos Outils de Design
              </h2>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-bold text-pink-400 mb-4">Design & Prototypage</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Figma (principal)</li>
                      <li>• Adobe XD</li>
                      <li>• Sketch (si besoin)</li>
                      <li>• Framer</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-pink-400 mb-4">Illustration & Assets</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Adobe Illustrator</li>
                      <li>• Photoshop</li>
                      <li>• Lottie Animations</li>
                      <li>• Icon libraries</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-pink-400 mb-4">Collaboration</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• FigJam (workshops)</li>
                      <li>• Notion (documentation)</li>
                      <li>• Slack / WhatsApp</li>
                      <li>• Loom (présentations)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Symloop */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-purple-600" />
                </div>
                Pourquoi Choisir Symloop pour le Design ?
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Palette, title: "Designers Locaux Qualifiés", desc: "Équipe de designers algériens formés aux standards internationaux" },
                  { icon: Target, title: "Focus Conversion", desc: "Design orienté résultats : chaque écran est pensé pour convertir" },
                  { icon: Users, title: "Connaissance du Marché", desc: "Compréhension des habitudes utilisateurs algériens et MENA" },
                  { icon: Zap, title: "Livraison Rapide", desc: "Délais respectés, communication régulière, réactivité garantie" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <item.icon className="w-5 h-5 text-pink-600" />
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
                Questions Fréquentes - Design UI/UX
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-2 border-gray-100 rounded-xl overflow-hidden hover:border-pink-200 transition-colors">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-pink-600 flex-shrink-0" />
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
              {["Design UI UX", "Figma Algérie", "Interface Utilisateur", "Maquette Application", "Design System", "UX Design", "Prototype", "Web Design"].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Besoin d'un Design Pro ?</h2>
            <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
              Interfaces qui convertissent et fidélisent. Obtenez un audit UX gratuit de votre site ou application existante.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/213549575512?text=Bonjour, j'ai besoin de services design UI/UX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold hover:bg-pink-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Discuter du Projet
              </a>
              <a
                href="tel:+213549575512"
                className="inline-flex items-center justify-center gap-2 bg-pink-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-pink-800 transition-colors border border-pink-500"
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
                    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all">
                      <span className="text-xs font-medium text-pink-600 mb-2 block">{post.category}</span>
                      <h3 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors mb-2">
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
