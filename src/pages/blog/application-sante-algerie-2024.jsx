"use client";
import { useState } from 'react';
import { ArrowLeft, Heart, CheckCircle, MessageCircle, Video, FileText, Calendar, Users, ChevronDown, AlertCircle, Smartphone, DollarSign, Shield, Clock, ArrowRight, Activity, Stethoscope, Pill, TestTube, Building2, ClipboardList, Lock } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug } from '../../data/blogs';

export default function SanteAlgerie() {
  const blog = getBlogBySlug('application-sante-algerie-2024');
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Combien coûte une application de télémédecine ?",
      answer: "Chez Symloop, une application de prise de RDV basique démarre à 70 000 DA. Une plateforme complète avec téléconsultation vidéo à partir de 150 000 DA. Les systèmes de gestion de clinique complets sont sur devis. Contactez-nous au +213 549 575 512 pour un devis gratuit."
    },
    {
      question: "Les données médicales sont-elles sécurisées ?",
      answer: "Absolument. Symloop applique les normes les plus strictes : chiffrement AES-256, hébergement sécurisé, authentification forte, audit trail complet. Conformité aux réglementations sur les données de santé. Appelez le +213 549 575 512 pour en savoir plus."
    },
    {
      question: "Peut-on intégrer la CNAS/CASNOS ?",
      answer: "Oui, Symloop développe des modules d'intégration avec les organismes de sécurité sociale algériens pour la télétransmission des feuilles de soins et le tiers payant. Contactez-nous au +213 549 575 512."
    },
    {
      question: "La téléconsultation fonctionne-t-elle bien en Algérie ?",
      answer: "Oui, Symloop utilise des technologies de visioconférence optimisées pour les connexions à bande passante variable. Mode audio disponible si la connexion vidéo est instable. Fonctionne sur 3G/4G. Appelez le +213 549 575 512 pour une démo."
    },
    {
      question: "Quel est le délai de développement d'une application santé ?",
      answer: "Symloop livre une application de prise de RDV en 4 à 6 semaines. Une plateforme de téléconsultation complète nécessite 8 à 14 semaines. Basé à Sétif, contactez-nous au +213 549 575 512 pour planifier votre projet e-health."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Applications Santé et E-Health en Algérie 2024",
        "description": "Développement d'applications de santé en Algérie : télémédecine, dossiers médicaux électroniques, gestion de clinique. Solutions e-health sur mesure.",
        "image": "https://symloop.com/images/blog/ehealth-algerie.jpg",
        "datePublished": "2024-02-20",
        "dateModified": "2024-12-01",
        "author": { "@type": "Organization", "name": "Symloop", "url": "https://symloop.com" },
        "publisher": { "@type": "Organization", "name": "Symloop", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } },
        "mainEntityOfPage": "https://symloop.com/blog/application-sante-algerie-2024"
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
        "serviceType": "Développement Application Santé",
        "provider": { "@type": "Organization", "name": "Symloop", "telephone": "+213549575512" },
        "areaServed": ["DZ", "TN", "MA", "MENA"]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Application Santé Algérie 2024", "item": "https://symloop.com/blog/application-sante-algerie-2024" }
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
      icon: Video,
      title: "Téléconsultation",
      desc: "Consultations vidéo HD sécurisées entre médecins et patients",
      features: ["Vidéo HD adaptative", "Partage d'écran/documents", "Prescription électronique", "Enregistrement (opt.)", "Multi-participant"]
    },
    {
      icon: FileText,
      title: "Dossiers Médicaux (DME)",
      desc: "Dossiers Médicaux Électroniques centralisés et sécurisés",
      features: ["Historique complet", "Antécédents", "Allergies/traitements", "Documents scannés", "Partage inter-médecins"]
    },
    {
      icon: Calendar,
      title: "Gestion Cabinet",
      desc: "Prise de RDV en ligne, planning, facturation automatisée",
      features: ["Agenda en ligne 24/7", "Rappels SMS/email", "Salle d'attente virtuelle", "Facturation CNAS", "Multi-praticiens"]
    },
    {
      icon: Building2,
      title: "Gestion Clinique",
      desc: "Logiciel complet pour cliniques et établissements de santé",
      features: ["Accueil patients", "Parcours de soins", "Bloc opératoire", "Hospitalisation", "Facturation"]
    },
    {
      icon: TestTube,
      title: "Laboratoires",
      desc: "Gestion des analyses, résultats et traçabilité",
      features: ["Prélèvements", "Automates (LIS)", "Résultats en ligne", "Traçabilité", "Alertes valeurs"]
    },
    {
      icon: Pill,
      title: "Pharmacies",
      desc: "Gestion officine, stock, ordonnances électroniques",
      features: ["Stock temps réel", "Ordonnances QR", "Alertes péremption", "Tiers payant", "Statistiques"]
    }
  ];

  const pricingPlans = [
    {
      name: "Cabinet",
      price: "70 000",
      unit: "DA",
      description: "Médecin individuel",
      features: [
        "Prise de RDV en ligne",
        "Agenda et planning",
        "Dossiers patients basiques",
        "Rappels SMS automatiques",
        "Facturation simple",
        "Support 6 mois"
      ],
      cta: "Commander",
      popular: false
    },
    {
      name: "Pro",
      price: "150 000",
      unit: "DA",
      description: "Avec téléconsultation",
      features: [
        "Tout Cabinet +",
        "Téléconsultation vidéo HD",
        "DME complet",
        "Ordonnances électroniques",
        "App patient mobile",
        "Intégration CNAS",
        "Support 12 mois"
      ],
      cta: "Choisir Pro",
      popular: true
    },
    {
      name: "Clinique",
      price: "Sur devis",
      unit: "",
      description: "Établissement complet",
      features: [
        "Tout Pro +",
        "Multi-médecins/spécialités",
        "Gestion hospitalisation",
        "Bloc opératoire",
        "Laboratoire intégré",
        "Formation équipe",
        "Support prioritaire 24/7"
      ],
      cta: "Nous contacter",
      popular: false
    }
  ];

  const stats = [
    { value: "50+", label: "Médecins équipés" },
    { value: "100K+", label: "Consultations" },
    { value: "15+", label: "Cliniques" },
    { value: "99.9%", label: "Uptime" }
  ];

  const features = [
    "Prise de rendez-vous en ligne 24/7",
    "Téléconsultation vidéo HD sécurisée",
    "Ordonnances électroniques signées",
    "Historique médical complet du patient",
    "Alertes et rappels automatiques",
    "Intégration CNAS/CASNOS",
    "Conformité données médicales",
    "Application mobile patient iOS/Android",
    "Certificats médicaux numériques",
    "Résultats d'analyses en ligne",
    "Messagerie sécurisée médecin-patient",
    "Dashboard et statistiques"
  ];

  const sectors = [
    { icon: Stethoscope, name: "Médecins", desc: "Généralistes et spécialistes" },
    { icon: Building2, name: "Cliniques", desc: "Polycliniques et centres médicaux" },
    { icon: TestTube, name: "Laboratoires", desc: "Analyses biologiques" },
    { icon: Pill, name: "Pharmacies", desc: "Officines et parapharmacies" },
    { icon: Activity, name: "Centres Imagerie", desc: "Radio, IRM, scanner" },
    { icon: Heart, name: "Spécialités", desc: "Dentistes, ophtalmo, cardio..." }
  ];

  return (
    <>
      <Head>
        <title>Application Santé Algérie 2024 | Télémédecine E-Health | Symloop</title>
        <meta name="description" content="Développement d'applications de santé en Algérie : télémédecine, dossiers médicaux électroniques, gestion clinique. Solutions e-health sécurisées à partir de 70 000 DA." />
        <meta name="keywords" content="e-health algérie, télémédecine algérie, application santé, gestion clinique algérie, dossier médical électronique, DME algérie" />
        <link rel="canonical" href="https://symloop.com/blog/application-sante-algerie-2024" />
        <meta property="og:title" content="Application Santé Algérie 2024 | Télémédecine E-Health" />
        <meta property="og:description" content="Solutions e-health pour médecins et cliniques : téléconsultation, DME, gestion cabinet. À partir de 70 000 DA." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/application-sante-algerie-2024" />
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
                <span className="bg-red-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Heart className="w-4 h-4" />E-Health
                </span>
                <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">2024</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Applications <span className="text-red-400">Santé</span> en Algérie 2024
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Solutions e-health pour médecins, cliniques et établissements de santé.
                Téléconsultation, dossiers médicaux électroniques, gestion de cabinet.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-gray-900/50 rounded-xl">
                    <div className="text-2xl font-bold text-red-400">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* En bref - LLM Optimized Block */}
        <section className="en-bref-block bg-gray-50 border-l-4 border-red-500 py-6">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-red-600 mb-2">En bref</p>
            <p className="text-gray-700 leading-relaxed">
              Symloop developpe des applications de sante et telemedecine pour le secteur medical algerien. Prise de rendez-vous, dossier patient, teleconsultation, ordonnances numeriques. Base a Setif. Contact: +213 549 575 512.
            </p>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                Le secteur <strong className="text-red-600">e-health en Algérie</strong> se digitalise rapidement.
                La pandémie a accéléré l'adoption de la <strong className="text-red-600">télémédecine</strong>,
                et les professionnels de santé recherchent des outils modernes pour gérer leurs cabinets et cliniques.
                <strong> Symloop</strong> développe des solutions santé complètes et sécurisées.
              </p>
            </div>

            {/* Security Banner */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3 mb-12">
              <Lock className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-red-800">Sécurité des Données Médicales</h3>
                <p className="text-sm text-red-700">
                  Toutes nos solutions sont conformes aux normes de sécurité des données de santé :
                  chiffrement AES-256, authentification forte, hébergement sécurisé, audit trail complet.
                </p>
              </div>
            </div>

            {/* Sectors */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Stethoscope className="w-6 h-6 text-red-600" />
                Professionnels de Santé Servis
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {sectors.map((sector, i) => (
                  <div key={i} className="bg-gradient-to-br from-gray-50 to-red-50 rounded-xl p-4 text-center">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <sector.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900">{sector.name}</h3>
                    <p className="text-gray-600 text-sm">{sector.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Solutions */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Heart className="w-6 h-6 text-red-600" />
                Solutions E-Health
              </h2>
              <div className="space-y-6">
                {solutions.map((solution, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-red-200 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <solution.icon className="w-7 h-7 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                        <p className="text-gray-600 mb-4">{solution.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {solution.features.map((feature, j) => (
                            <span key={j} className="bg-red-50 text-red-700 text-xs px-3 py-1 rounded-full">{feature}</span>
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
                <CheckCircle className="w-6 h-6 text-red-600" />
                Fonctionnalités Clés
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {features.map((item, i) => (
                  <div key={i} className="flex gap-3 items-center p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Mid */}
            <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-white text-center mb-16">
              <h3 className="text-2xl font-bold mb-3">Projet E-Health ?</h3>
              <p className="text-red-100 mb-6">Discutons de vos besoins en digitalisation santé</p>
              <a
                href="https://wa.me/213549575512?text=Bonjour, j'ai un projet e-health à discuter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Discuter sur WhatsApp
              </a>
            </div>

            {/* Pricing */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-red-600" />
                Tarifs Solutions E-Health
              </h2>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif exact dépend des modules choisis,
                  du nombre d'utilisateurs, et des intégrations requises (CNAS, laboratoires...).
                  <strong> Contactez-nous pour un devis gratuit.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, i) => (
                  <div key={i} className={`relative bg-white rounded-2xl p-6 border-2 ${plan.popular ? 'border-red-500 shadow-xl' : 'border-gray-100'}`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">POPULAIRE</span>
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
                      href={`https://wa.me/213549575512?text=Bonjour, je suis intéressé par le pack ${plan.name} pour mon cabinet/clinique`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-center py-3 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
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
                <MessageCircle className="w-6 h-6 text-red-600" />
                Questions Fréquentes - E-Health
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
                {["React", "React Native", "Node.js", "PostgreSQL", "WebRTC", "FHIR HL7", "AWS HIPAA", "AES-256", "OAuth 2.0", "Socket.io", "Redis", "Docker"].map((tech, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">{tech}</span>
                ))}
              </div>
            </section>

            {/* Related */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles Connexes</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Logiciel Clinique & Cabinet Médical Algérie 2026", href: "/blog/logiciel-clinique-cabinet-medical-algerie-2026" },
                  { title: "Développement Application Mobile Algérie 2026", href: "/blog/developpement-application-mobile-algerie-2026" },
                  { title: "SaaS et Abonnement", href: "/blog/saas-developpement-algerie-2024" },
                  { title: "Cloud Computing Algérie", href: "/blog/cloud-computing-algerie-2024" }
                ].map((article, i) => (
                  <Link key={i} href={article.href} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors group">
                    <span className="font-medium text-gray-900 group-hover:text-red-600">{article.title}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {["e-health algérie", "télémédecine", "dossier médical", "gestion clinique", "application santé", "DME"].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Digitalisez Votre Pratique Médicale</h2>
            <p className="text-red-100 mb-8 max-w-2xl mx-auto">
              Téléconsultation, dossiers médicaux, gestion de cabinet ou de clinique.
              Solutions e-health sécurisées et conformes pour les professionnels de santé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/213549575512?text=Bonjour, j'ai un projet e-health à discuter" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-50 transition-colors">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
              <a href="tel:+213549575512" className="inline-flex items-center justify-center gap-2 bg-red-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-800 transition-colors">
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
