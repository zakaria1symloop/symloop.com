"use client";
import { ArrowLeft, CreditCard, CheckCircle, MessageCircle, Wallet, Shield, Smartphone, TrendingUp, Lock, Globe, Zap, Users, Building, AlertTriangle, DollarSign, BarChart3, Banknote, QrCode, Fingerprint, AlertCircle } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug } from '../../data/blogs';

export default function FintechAlgerie() {
  const blog = getBlogBySlug('fintech-algerie-solutions-2024');

  return (
    <>
      <Head>
        <title>{blog?.metaTitle}</title>
        <meta name="description" content={blog?.metaDescription} />
        <meta name="keywords" content="fintech algérie, paiement mobile algérie, application bancaire, cib edahabia, finance digitale, satim, baridimob, portefeuille électronique, mobile banking algérie, startup fintech, paiement en ligne algérie, intégration paiement" />
        <link rel="canonical" href="https://symloop.com/blog/fintech-algerie-solutions-2024" />
        <meta property="og:title" content={blog?.metaTitle} />
        <meta property="og:description" content={blog?.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/fintech-algerie-solutions-2024" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": blog?.title,
            "description": blog?.metaDescription,
            "author": { "@type": "Organization", "name": "Symloop" },
            "publisher": { "@type": "Organization", "name": "Symloop" },
            "datePublished": blog?.date
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
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />Fintech
                </span>
                <span className="text-gray-400 text-sm">15 min de lecture</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Solutions <span className="text-emerald-400">Fintech</span> en Algérie 2024
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Applications Bancaires, Paiement Mobile et Finance Digitale. Guide complet pour développer votre solution fintech.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <span>Par Symloop Team</span>
                <span>•</span>
                <span>Mis à jour le 8 Nov 2024</span>
              </div>
            </motion.div>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                Le secteur <strong className="text-emerald-600">Fintech en Algérie</strong> connaît une croissance sans précédent.
                Avec plus de <strong>15 millions de cartes CIB actives</strong>, l'essor de <strong className="text-emerald-600">BaridiMob</strong>
                et l'ouverture progressive du marché financier, les opportunités pour les startups et entreprises sont immenses.
                <strong className="text-emerald-600"> Symloop</strong> accompagne les acteurs de la finance digitale dans le développement
                de solutions conformes aux réglementations algériennes.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Que vous souhaitiez lancer une <strong>application de paiement mobile</strong>, un <strong>portefeuille électronique</strong>,
                une <strong>plateforme de transfert d'argent</strong> ou une solution de <strong>mobile banking</strong>, notre expertise
                technique et notre connaissance du cadre réglementaire algérien font de nous le partenaire idéal.
              </p>
            </div>

            {/* Stats Box */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-l-4 border-emerald-500 rounded-r-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Le Marché Fintech Algérien en Chiffres 2024</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "15M+", label: "Cartes CIB actives", desc: "en circulation" },
                  { value: "12M+", label: "Comptes Edahabia", desc: "Algérie Poste" },
                  { value: "5M+", label: "Utilisateurs BaridiMob", desc: "paiement mobile" },
                  { value: "+45%", label: "Croissance annuelle", desc: "transactions digitales" }
                ].map((stat, i) => (
                  <div key={i} className="text-center bg-white rounded-xl p-4">
                    <div className="text-3xl font-bold text-emerald-600">{stat.value}</div>
                    <div className="text-sm font-medium text-gray-900">{stat.label}</div>
                    <div className="text-xs text-gray-500">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Opportunités */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pourquoi la Fintech en Algérie Maintenant ?</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl mb-8">
                <h3 className="font-bold text-yellow-800 mb-2">Un Marché à Fort Potentiel</h3>
                <p className="text-yellow-700">
                  L'Algérie compte <strong>45 millions d'habitants</strong> dont une grande partie n'a pas accès aux services bancaires
                  traditionnels. Les solutions fintech représentent une opportunité unique de servir cette population non-bancarisée
                  avec des services financiers accessibles via smartphone.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Faible Bancarisation", desc: "Seulement 35% de la population a un compte bancaire actif. Énorme potentiel pour les solutions de paiement mobile." },
                  { title: "Pénétration Smartphone", desc: "Plus de 80% de pénétration smartphone. La population est prête pour les services financiers digitaux." },
                  { title: "Réglementation Favorable", desc: "La Banque d'Algérie encourage l'innovation fintech avec un cadre réglementaire en évolution." },
                  { title: "Jeunesse Connectée", desc: "60% de la population a moins de 30 ans et adopte rapidement les nouvelles technologies." }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Solutions Fintech */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Solutions Fintech que Nous Développons</h2>
              <p className="text-gray-600 mb-8">
                Notre équipe a l'expertise pour développer tous types de solutions fintech conformes aux exigences
                réglementaires algériennes et aux standards de sécurité internationaux.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Wallet,
                    title: "Portefeuilles Électroniques (E-Wallet)",
                    desc: "Applications de paiement mobile avec intégration CIB/Edahabia. Permet aux utilisateurs de payer, envoyer et recevoir de l'argent depuis leur smartphone.",
                    features: ["Recharge via CIB/Edahabia", "Paiement marchand QR Code", "Transferts P2P", "Historique transactions"]
                  },
                  {
                    icon: Building,
                    title: "Mobile Banking",
                    desc: "Applications bancaires mobiles pour banques et institutions financières. Interface moderne pour gérer comptes, virements et services bancaires.",
                    features: ["Consultation solde en temps réel", "Virements nationaux", "Paiement factures", "Demande de crédit en ligne"]
                  },
                  {
                    icon: TrendingUp,
                    title: "Plateformes de Trading",
                    desc: "Applications de gestion de portefeuille et investissement. Conformes aux réglementations COSOB pour les marchés financiers algériens.",
                    features: ["Suivi cours en temps réel", "Passage d'ordres", "Analyses et graphiques", "Alertes personnalisées"]
                  },
                  {
                    icon: Fingerprint,
                    title: "Solutions KYC & Anti-Fraude",
                    desc: "Systèmes de vérification d'identité et de conformité. Essentiels pour toute solution fintech en Algérie.",
                    features: ["Vérification identité biométrique", "OCR documents algériens", "Détection fraude ML", "Conformité Banque d'Algérie"]
                  },
                  {
                    icon: QrCode,
                    title: "Paiement Marchand",
                    desc: "Solutions de paiement pour commerçants. TPE virtuels, QR codes, et intégrations e-commerce.",
                    features: ["TPE virtuel SATIM", "Paiement QR Code", "Dashboard marchand", "Réconciliation automatique"]
                  },
                  {
                    icon: Banknote,
                    title: "Transfert d'Argent",
                    desc: "Plateformes de transfert national et international. Solutions de remittance pour la diaspora algérienne.",
                    features: ["Transferts instantanés", "Taux compétitifs", "Multi-devises", "Réseau partenaires"]
                  }
                ].map((solution, i) => (
                  <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-emerald-200 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                      <solution.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{solution.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{solution.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {solution.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs text-gray-500">
                          <CheckCircle className="w-3 h-3 text-emerald-500" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Intégrations Paiement */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Intégrations Paiement Algérie</h2>
              <p className="text-gray-600 mb-8">
                Nous maîtrisons toutes les <strong>passerelles de paiement algériennes</strong> et pouvons intégrer
                les solutions suivantes dans votre application fintech.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* CIB Card */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-blue-600 font-bold text-xl">
                      CIB
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Carte CIB</h3>
                      <p className="text-blue-200 text-sm">Carte Interbancaire</p>
                    </div>
                  </div>
                  <p className="text-blue-100 text-sm mb-4">
                    Intégration complète du système de paiement CIB via SATIM. Toutes les banques algériennes.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Paiement sécurisé 3D Secure</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Commission : 1.5% - 2%</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> 15M+ cartes actives</li>
                  </ul>
                </div>

                {/* Edahabia Card */}
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-yellow-600 font-bold text-xl">
                      ED
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Edahabia</h3>
                      <p className="text-yellow-100 text-sm">Algérie Poste</p>
                    </div>
                  </div>
                  <p className="text-yellow-100 text-sm mb-4">
                    Intégration Edahabia pour toucher les 12M+ utilisateurs d'Algérie Poste, notamment en zone rurale.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Large couverture nationale</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Commission : 1% - 1.5%</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Population non-bancarisée</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Autres Intégrations Disponibles</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { name: "BaridiMob", desc: "Paiement mobile Poste", icon: Smartphone },
                    { name: "SATIM API", desc: "Gateway e-commerce", icon: Globe },
                    { name: "QR Code Payment", desc: "Paiement sans contact", icon: QrCode }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl flex items-center gap-3">
                      <item.icon className="w-8 h-8 text-emerald-600" />
                      <div>
                        <div className="font-medium text-gray-900">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Réglementation */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Cadre Réglementaire Fintech Algérie</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-xl mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  <h3 className="font-bold text-red-800">Important : Conformité Réglementaire</h3>
                </div>
                <p className="text-red-700">
                  Toute solution fintech en Algérie doit être conforme aux réglementations de la <strong>Banque d'Algérie</strong>
                  et obtenir les agréments nécessaires. Notre équipe vous accompagne dans ces démarches.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Agrément Établissement de Paiement", desc: "Requis pour les portefeuilles électroniques et services de paiement. Démarche auprès de la Banque d'Algérie." },
                  { title: "Conformité SATIM", desc: "Certification technique obligatoire pour l'intégration des paiements CIB/Edahabia." },
                  { title: "Protection des Données", desc: "Conformité avec la loi algérienne sur la protection des données personnelles (loi 18-07)." },
                  { title: "Anti-Blanchiment (LCB-FT)", desc: "Mise en place de procédures KYC et de surveillance des transactions suspectes." },
                  { title: "Sécurité PCI-DSS", desc: "Standard de sécurité international pour le traitement des données de cartes bancaires." }
                ].map((reg, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl">
                    <Shield className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900">{reg.title}</h3>
                      <p className="text-gray-600 text-sm">{reg.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Technologies */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies Utilisées</h2>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                <p className="text-gray-300 mb-6">
                  Nous utilisons les technologies les plus fiables et sécurisées pour le développement de solutions fintech.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-bold text-emerald-400 mb-4">Mobile</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Flutter (iOS & Android)</li>
                      <li>• React Native</li>
                      <li>• Biométrie (Face ID, Touch ID)</li>
                      <li>• Secure Enclave</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-400 mb-4">Backend</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Node.js / Python</li>
                      <li>• Microservices Architecture</li>
                      <li>• PostgreSQL / MongoDB</li>
                      <li>• Redis (cache & sessions)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-400 mb-4">Sécurité</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Encryption AES-256</li>
                      <li>• HSM (Hardware Security Module)</li>
                      <li>• API Security (OAuth 2.0)</li>
                      <li>• Audit logs & monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Tarifs */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tarifs Développement Fintech</h2>
              <p className="text-gray-600 mb-6">
                Les projets fintech sont complexes et nécessitent une attention particulière à la sécurité et la conformité.
                Voici une estimation des budgets selon le type de projet.
              </p>

              {/* Pricing Warning */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le coût final dépend des fonctionnalités, des intégrations (CIB, Edahabia, SATIM), et du niveau de conformité requis.
                  <strong> Contactez-nous pour un devis gratuit et un audit de votre projet fintech.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "MVP E-Wallet",
                    price: "3M - 5M DA",
                    duration: "12-16 semaines",
                    features: ["Application mobile iOS/Android", "Intégration CIB/Edahabia", "KYC basique", "Dashboard utilisateur", "Support 3 mois"],
                    ideal: "Validation concept"
                  },
                  {
                    name: "Solution Complète",
                    price: "8M - 15M DA",
                    duration: "20-30 semaines",
                    features: ["App mobile + Admin web", "Multi-paiement intégré", "KYC avancé (biométrie)", "Anti-fraude ML", "Conformité complète", "Support 12 mois"],
                    ideal: "Lancement commercial",
                    popular: true
                  },
                  {
                    name: "Enterprise",
                    price: "Sur devis",
                    duration: "Variable",
                    features: ["Solution sur mesure", "Intégration core banking", "Multi-pays", "Équipe dédiée", "SLA garanti", "Maintenance continue"],
                    ideal: "Banques & grandes entreprises"
                  }
                ].map((plan, i) => (
                  <div key={i} className={`rounded-2xl p-6 ${plan.popular ? 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white ring-4 ring-emerald-200' : 'bg-gray-50'}`}>
                    {plan.popular && <div className="text-xs font-bold uppercase tracking-wider mb-2">Le Plus Demandé</div>}
                    <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                    <div className={`text-3xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-emerald-600'}`}>{plan.price}</div>
                    <div className={`text-sm mb-4 ${plan.popular ? 'text-emerald-100' : 'text-gray-500'}`}>{plan.duration}</div>
                    <ul className="space-y-2 mb-4">
                      {plan.features.map((f, j) => (
                        <li key={j} className={`flex items-center gap-2 text-sm ${plan.popular ? 'text-white' : 'text-gray-600'}`}>
                          <CheckCircle className={`w-4 h-4 ${plan.popular ? 'text-white' : 'text-emerald-500'}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className={`text-xs ${plan.popular ? 'text-emerald-100' : 'text-gray-500'}`}>Idéal pour : {plan.ideal}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions Fréquentes Fintech Algérie</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Faut-il un agrément pour lancer une application de paiement en Algérie ?",
                    a: "Oui, toute solution qui gère des fonds ou effectue des transactions de paiement nécessite un agrément de la Banque d'Algérie. Le type d'agrément dépend de l'activité (établissement de paiement, agent de paiement, etc.). Nous vous accompagnons dans les démarches administratives."
                  },
                  {
                    q: "Combien de temps pour intégrer le paiement CIB/Edahabia ?",
                    a: "L'intégration technique prend 2-4 semaines. Cependant, l'obtention du contrat TPE virtuel auprès de votre banque peut prendre 4-8 semaines selon les établissements. Il est conseillé de démarrer les démarches administratives en parallèle du développement."
                  },
                  {
                    q: "Quelles sont les commissions sur les paiements CIB ?",
                    a: "Les commissions SATIM varient de 1.5% à 2.5% selon le volume de transactions et la négociation avec votre banque. Pour Edahabia, les commissions sont généralement plus basses (1% - 1.5%)."
                  },
                  {
                    q: "Pouvez-vous développer une solution de transfert d'argent international ?",
                    a: "Oui, nous développons des solutions de remittance. Cependant, les transferts internationaux nécessitent des partenariats avec des opérateurs agréés (Western Union, etc.) et des licences spécifiques. Nous vous guidons dans le choix de la meilleure architecture."
                  },
                  {
                    q: "Comment garantir la sécurité d'une application fintech ?",
                    a: "Nous appliquons les standards de sécurité les plus stricts : encryption bout-en-bout, authentification biométrique, détection de fraude par ML, audit des transactions, tests de pénétration réguliers, et conformité PCI-DSS pour les données de cartes."
                  }
                ].map((faq, i) => (
                  <div key={i} className="border-2 border-gray-100 rounded-xl p-6 hover:border-emerald-200 transition-colors">
                    <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {["Fintech Algérie", "Paiement Mobile", "CIB", "Edahabia", "SATIM", "Mobile Banking", "E-Wallet", "KYC", "Startup Fintech", "Finance Digitale"].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm hover:bg-emerald-100 transition-colors">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Projet Fintech en Algérie ?</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Experts en développement de solutions fintech conformes. Intégration CIB/Edahabia, KYC, et conformité Banque d'Algérie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/213549575512?text=Bonjour, j'ai un projet fintech en Algérie" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors">
                <MessageCircle className="w-5 h-5" /> Discuter du Projet
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-800 transition-colors border-2 border-emerald-400">
                Demander un Devis
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Articles Connexes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "E-commerce & Paiement CIB", slug: "ecommerce-algerie-paiement-cib-edahabia-2024", desc: "Guide intégration paiement en ligne" },
                { title: "Développement Application Mobile", slug: "developpement-application-mobile-algerie-2024", desc: "Guide complet développement mobile" },
                { title: "Cybersécurité en Algérie", slug: "cybersecurite-algerie-2024", desc: "Protégez votre entreprise" }
              ].map((article, i) => (
                <Link key={i} href={`/blog/${article.slug}`} className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm">{article.desc}</p>
                </Link>
              ))}
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
