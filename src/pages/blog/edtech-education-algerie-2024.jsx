"use client";
import { useState } from 'react';
import { ArrowLeft, GraduationCap, CheckCircle, MessageCircle, BookOpen, Video, Users, Award, ChevronDown, AlertCircle, Smartphone, DollarSign, Globe, Clock, ArrowRight, FileText, PlayCircle, PenTool, Monitor, BarChart3, Shield, Calendar } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug } from '../../data/blogs';

export default function EdtechAlgerie() {
  const blog = getBlogBySlug('edtech-education-algerie-2024');
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Combien coûte une plateforme e-learning ?",
      answer: "Une plateforme LMS basique démarre à 80 000 DA. Une solution complète avec classes virtuelles et app mobile à partir de 180 000 DA. Les projets pour universités ou grandes écoles avec fonctionnalités avancées sont sur devis selon les besoins."
    },
    {
      question: "Peut-on intégrer le paiement pour les cours payants ?",
      answer: "Oui, nous intégrons CIB, Dahabia, et même Stripe/PayPal pour les étudiants internationaux. Système d'abonnement, achat à l'unité, ou accès institutionnel (licence école). Facturation automatique et reçus."
    },
    {
      question: "La plateforme fonctionne-t-elle sur mobile ?",
      answer: "Absolument. Nous développons des applications mobiles natives iOS et Android avec lecture hors-ligne des cours, notifications de rappel, synchronisation des progrès, et mode économie de données."
    },
    {
      question: "Comment se passent les examens en ligne ?",
      answer: "Nos solutions incluent des quiz avec correction automatique, examens chronométrés, détection de triche (anti-copier-coller, surveillance caméra optionnelle), et génération automatique de certificats."
    },
    {
      question: "Peut-on organiser des cours en direct ?",
      answer: "Oui, les classes virtuelles permettent le streaming vidéo en direct, le chat en temps réel, le tableau blanc interactif, le partage d'écran, et l'enregistrement automatique pour revoir le cours."
    },
    {
      question: "La plateforme supporte-t-elle l'arabe ?",
      answer: "Oui, nos plateformes sont multilingues (Français, Arabe, Anglais) avec support complet RTL (right-to-left) pour l'arabe. Interface et contenu peuvent être dans n'importe quelle langue."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "EdTech et E-Learning en Algérie 2024 - Plateformes Éducatives",
        "description": "Développement de plateformes e-learning en Algérie : LMS, classes virtuelles, quiz, certifications. Solutions EdTech pour écoles, universités et formations professionnelles.",
        "image": "https://symloop.com/images/blog/edtech-algerie.jpg",
        "datePublished": "2024-02-25",
        "dateModified": "2024-12-01",
        "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
        "publisher": { "@type": "Organization", "name": "Symloop", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
        "mainEntityOfPage": "https://symloop.com/blog/edtech-education-algerie-2024"
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
        "serviceType": "Développement Plateforme E-Learning",
        "provider": { "@type": "Organization", "name": "Symloop", "telephone": "+213549575512" },
        "areaServed": ["DZ", "TN", "MA", "MENA"]
      }
    ]
  };

  const solutions = [
    {
      icon: BookOpen,
      title: "LMS Complet",
      desc: "Learning Management System avec cours, quiz, progression et certifications",
      features: ["Cours SCORM/xAPI", "Parcours personnalisés", "Quiz interactifs", "Progression tracking", "Certificats auto"]
    },
    {
      icon: Video,
      title: "Classes Virtuelles",
      desc: "Cours en direct avec vidéo HD, chat et outils interactifs",
      features: ["Streaming HD adaptatif", "Chat temps réel", "Tableau blanc", "Enregistrement", "Breakout rooms"]
    },
    {
      icon: Monitor,
      title: "Gestion École",
      desc: "Solution complète pour établissements scolaires et universitaires",
      features: ["Notes et bulletins", "Emplois du temps", "Absences", "Communication parents", "Inscriptions en ligne"]
    },
    {
      icon: Award,
      title: "Certifications",
      desc: "Système de badges, points et certificats automatisés",
      features: ["Badges gamification", "Certificats PDF", "Blockchain (opt.)", "LinkedIn intégration", "Portfolio apprenant"]
    },
    {
      icon: PenTool,
      title: "Création de Contenu",
      desc: "Outils pour créer facilement des cours et quiz engageants",
      features: ["Éditeur drag & drop", "Import PowerPoint", "Vidéos interactives", "Questions variées", "Templates"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Rapports",
      desc: "Statistiques détaillées sur les apprenants et les cours",
      features: ["Taux complétion", "Temps passé", "Performance quiz", "Rapports formateurs", "Export données"]
    }
  ];

  const audiences = [
    { icon: GraduationCap, name: "Universités", desc: "Cours hybrides, examens en ligne, gestion campus" },
    { icon: BookOpen, name: "Écoles", desc: "Primaire, moyen, secondaire, communication parents" },
    { icon: Users, name: "Centres de Formation", desc: "Formation professionnelle, certifications, corporate training" },
    { icon: Globe, name: "Formateurs Indépendants", desc: "Vente de cours en ligne, audience mondiale" },
    { icon: Award, name: "Entreprises", desc: "Formation interne, onboarding, compliance" },
    { icon: PlayCircle, name: "Créateurs de Contenu", desc: "Infopreneurs, coachs, experts" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "80 000",
      unit: "DA",
      description: "LMS basique",
      features: [
        "Jusqu'à 500 utilisateurs",
        "Cours illimités",
        "Quiz et évaluations",
        "Certificats basiques",
        "Support email",
        "Hébergement 1 an"
      ],
      cta: "Commander",
      popular: false
    },
    {
      name: "Pro",
      price: "180 000",
      unit: "DA",
      description: "Avec classes virtuelles",
      features: [
        "Tout Starter +",
        "Utilisateurs illimités",
        "Classes virtuelles live",
        "App mobile iOS/Android",
        "Paiement CIB/Dahabia",
        "Analytics avancés",
        "Support 12 mois"
      ],
      cta: "Choisir Pro",
      popular: true
    },
    {
      name: "Université",
      price: "Sur devis",
      unit: "",
      description: "Solution complète",
      features: [
        "Tout Pro +",
        "Gestion multi-campus",
        "Notes et bulletins",
        "Intégration SIS",
        "Examens sécurisés",
        "Formation équipe",
        "Support prioritaire 24/7"
      ],
      cta: "Nous contacter",
      popular: false
    }
  ];

  const stats = [
    { value: "50+", label: "Institutions équipées" },
    { value: "100K+", label: "Apprenants actifs" },
    { value: "500K+", label: "Cours suivis" },
    { value: "95%", label: "Satisfaction" }
  ];

  const features = [
    "Cours vidéo avec progression tracking",
    "Quiz et examens avec correction automatique",
    "Forum de discussion et Q&A",
    "Certificats personnalisables PDF",
    "Paiement cours (CIB/Dahabia/International)",
    "App mobile iOS et Android",
    "Rapports et analytics apprenants",
    "Support multilingue (FR, AR, EN)",
    "Classes virtuelles avec enregistrement",
    "Gamification (badges, points, classement)",
    "Notifications push et rappels",
    "Mode hors-ligne"
  ];

  return (
    <>
      <Head>
        <title>EdTech E-Learning Algérie 2024 | Plateforme LMS | Symloop</title>
        <meta name="description" content="Développement de plateformes e-learning en Algérie : LMS, classes virtuelles, quiz, certifications. Solutions EdTech pour écoles et universités à partir de 80 000 DA." />
        <meta name="keywords" content="edtech algérie, e-learning algérie, plateforme éducative, lms algérie, formation en ligne, classes virtuelles, cours en ligne algérie" />
        <link rel="canonical" href="https://symloop.com/blog/edtech-education-algerie-2024" />
        <meta property="og:title" content="EdTech E-Learning Algérie 2024 | Plateforme LMS" />
        <meta property="og:description" content="Solutions EdTech pour écoles et universités : LMS, classes virtuelles, certifications. À partir de 80 000 DA." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/edtech-education-algerie-2024" />
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
                <span className="bg-indigo-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />EdTech
                </span>
                <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">2024</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-indigo-400">EdTech</span> et E-Learning en Algérie 2024
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Plateformes e-learning sur mesure pour écoles, universités et centres de formation.
                LMS complet, classes virtuelles, quiz, certifications et applications mobiles.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-gray-900/50 rounded-xl">
                    <div className="text-2xl font-bold text-indigo-400">{stat.value}</div>
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
                L'<strong className="text-indigo-600">éducation digitale</strong> transforme l'apprentissage en Algérie.
                Que vous soyez une université, une école, un centre de formation ou un formateur indépendant,
                une plateforme <strong className="text-indigo-600">e-learning</strong> vous permet d'atteindre plus
                d'apprenants et d'offrir une expérience d'apprentissage moderne. <strong>Symloop</strong> développe
                des solutions EdTech complètes et adaptées au marché algérien.
              </p>
            </div>

            {/* Audiences */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Users className="w-6 h-6 text-indigo-600" />
                Pour Qui ?
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {audiences.map((audience, i) => (
                  <div key={i} className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-xl p-4 text-center">
                    <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <audience.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900">{audience.name}</h3>
                    <p className="text-gray-600 text-sm">{audience.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Solutions */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-indigo-600" />
                Solutions EdTech
              </h2>
              <div className="space-y-6">
                {solutions.map((solution, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-indigo-200 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <solution.icon className="w-7 h-7 text-indigo-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                        <p className="text-gray-600 mb-4">{solution.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {solution.features.map((feature, j) => (
                            <span key={j} className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full">{feature}</span>
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
                <CheckCircle className="w-6 h-6 text-indigo-600" />
                Fonctionnalités LMS Complètes
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {features.map((item, i) => (
                  <div key={i} className="flex gap-3 items-center p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
                    <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Mid */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center mb-16">
              <h3 className="text-2xl font-bold mb-3">Projet E-Learning ?</h3>
              <p className="text-indigo-100 mb-6">Créons votre plateforme éducative sur mesure</p>
              <a
                href="https://wa.me/213549575512?text=Bonjour, je souhaite créer une plateforme e-learning"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Discuter sur WhatsApp
              </a>
            </div>

            {/* Pricing */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-indigo-600" />
                Tarifs Plateforme E-Learning
              </h2>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif exact dépend du nombre d'utilisateurs,
                  des fonctionnalités choisies, et des intégrations requises.
                  <strong> Contactez-nous pour un devis gratuit.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, i) => (
                  <div key={i} className={`relative bg-white rounded-2xl p-6 border-2 ${plan.popular ? 'border-indigo-500 shadow-xl' : 'border-gray-100'}`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">POPULAIRE</span>
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
                      href={`https://wa.me/213549575512?text=Bonjour, je suis intéressé par le pack ${plan.name} pour ma plateforme e-learning`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-center py-3 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
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
                <MessageCircle className="w-6 h-6 text-indigo-600" />
                Questions Fréquentes - EdTech
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
                {["React", "React Native", "Next.js", "Node.js", "WebRTC", "HLS/DASH", "PostgreSQL", "Redis", "AWS", "Mux Video", "SCORM", "xAPI"].map((tech, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">{tech}</span>
                ))}
              </div>
            </section>

            {/* Related */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles Connexes</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Développement Application Mobile", href: "/blog/developpement-mobile-algerie-2024" },
                  { title: "SaaS et Abonnement", href: "/blog/saas-developpement-algerie-2024" },
                  { title: "Développement Web Algérie", href: "/blog/developpement-web-algerie-2024" },
                  { title: "Marketing Digital Algérie", href: "/blog/marketing-digital-algerie-2024" }
                ].map((article, i) => (
                  <Link key={i} href={article.href} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-colors group">
                    <span className="font-medium text-gray-900 group-hover:text-indigo-600">{article.title}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-600" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {["edtech algérie", "e-learning", "lms", "classes virtuelles", "formation en ligne", "plateforme éducative"].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Lancez Votre Plateforme E-Learning</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              LMS complet, classes virtuelles, quiz et certifications.
              Créons ensemble votre plateforme éducative sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/213549575512?text=Bonjour, je souhaite créer une plateforme e-learning" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
              <a href="tel:+213549575512" className="inline-flex items-center justify-center gap-2 bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-800 transition-colors">
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
