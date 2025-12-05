"use client";
import { ArrowLeft, Smartphone, CheckCircle, MessageCircle, Globe, Zap, Shield, Users, MapPin, TrendingUp, CreditCard, Building, Code, Layers, DollarSign, Star } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug } from '../../data/blogs';

export default function DeveloppementTunisie() {
  const blog = getBlogBySlug('developpement-application-tunisie-2024');

  return (
    <>
      <Head>
        <title>{blog?.metaTitle}</title>
        <meta name="description" content={blog?.metaDescription} />
        <meta name="keywords" content="développement tunisie, application mobile tunisie, agence web tunis, développement web tunisie, création site web tunisie, e-commerce tunisie, startup tunisie, agence digitale tunis, développeur tunisie, flutter tunisie, react native tunisie" />
        <link rel="canonical" href="https://symloop.com/blog/developpement-application-tunisie-2024" />
        <meta property="og:title" content={blog?.metaTitle} />
        <meta property="og:description" content={blog?.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/developpement-application-tunisie-2024" />
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
                <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Globe className="w-4 h-4" />Tunisie
                </span>
                <span className="text-gray-400 text-sm">12 min de lecture</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Développement <span className="text-red-400">Application</span> en Tunisie 2024
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Votre partenaire tech maghrébin pour le marché tunisien. Web, Mobile, E-commerce et Solutions Digitales.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <span>Par Symloop Team</span>
                <span>•</span>
                <span>Mis à jour le 28 Nov 2024</span>
              </div>
            </motion.div>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                <strong className="text-red-600">Symloop</strong> accompagne les entreprises tunisiennes dans leur transformation digitale.
                Basée au Maghreb, notre équipe comprend les spécificités du <strong className="text-red-600">marché tunisien</strong>
                et développe des solutions <strong>web et mobile</strong> adaptées aux besoins locaux, avec intégration des
                <strong className="text-red-600"> systèmes de paiement tunisiens</strong> (D17, Flouci, Sobflous, etc.).
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Que vous soyez une <strong>startup à Tunis</strong>, une <strong>PME à Sousse</strong> ou une grande entreprise
                à Sfax, nous avons l'expertise pour concrétiser votre projet digital. Notre proximité culturelle et linguistique
                garantit une communication fluide et une compréhension parfaite de vos besoins.
              </p>
            </div>

            {/* Stats Box */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Le Marché Digital Tunisien en 2024</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "8M+", label: "Internautes", desc: "population connectée" },
                  { value: "75%", label: "Smartphone", desc: "pénétration mobile" },
                  { value: "+35%", label: "E-commerce", desc: "croissance annuelle" },
                  { value: "1500+", label: "Startups", desc: "écosystème tech" }
                ].map((stat, i) => (
                  <div key={i} className="text-center bg-white rounded-xl p-4">
                    <div className="text-3xl font-bold text-red-600">{stat.value}</div>
                    <div className="text-sm font-medium text-gray-900">{stat.label}</div>
                    <div className="text-xs text-gray-500">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Nos Services pour le Marché Tunisien</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Smartphone,
                    title: "Applications Mobiles",
                    desc: "Développement iOS et Android avec Flutter et React Native. Intégration des paiements tunisiens et publication sur les stores.",
                    features: ["Flutter / React Native", "iOS & Android", "Paiement D17 / Flouci", "Push notifications"]
                  },
                  {
                    icon: Globe,
                    title: "Sites Web & E-commerce",
                    desc: "Sites vitrines, boutiques en ligne, marketplaces. Design moderne responsive avec paiement local intégré.",
                    features: ["Next.js / WordPress", "E-commerce Tunisie", "Multi-devises TND/EUR", "SEO optimisé"]
                  },
                  {
                    icon: Building,
                    title: "Solutions Entreprise",
                    desc: "ERP, CRM, applications métier sur mesure. Digitalisation des processus adaptée au contexte tunisien.",
                    features: ["ERP personnalisé", "CRM adapté", "Comptabilité tunisienne", "RH & Paie"]
                  },
                  {
                    icon: Shield,
                    title: "Maintenance & Support",
                    desc: "Support technique continu, mises à jour, hébergement cloud. Équipe francophone disponible.",
                    features: ["Support 7j/7", "Hébergement cloud", "Backups quotidiens", "Mises à jour sécurité"]
                  }
                ].map((service, i) => (
                  <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-red-200 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs text-gray-500">
                          <CheckCircle className="w-3 h-3 text-red-500" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Paiements Tunisie */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Intégration Paiement Tunisie</h2>
              <p className="text-gray-600 mb-6">
                Nous intégrons tous les moyens de paiement utilisés en Tunisie pour vos applications et sites e-commerce.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { name: "D17", desc: "Carte bancaire tunisienne", color: "bg-blue-500" },
                  { name: "Flouci", desc: "Paiement mobile", color: "bg-yellow-500" },
                  { name: "Sobflous", desc: "Wallet électronique", color: "bg-green-500" },
                  { name: "Paymee", desc: "Gateway e-commerce", color: "bg-purple-500" },
                  { name: "Carte ENDA", desc: "Microfinance", color: "bg-orange-500" },
                  { name: "Virement", desc: "Bancaire IBAN", color: "bg-gray-500" }
                ].map((payment, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 flex items-center gap-4">
                    <div className={`w-12 h-12 ${payment.color} rounded-xl flex items-center justify-center text-white font-bold text-xs`}>
                      {payment.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{payment.name}</div>
                      <div className="text-xs text-gray-500">{payment.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Villes couvertes */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Villes Couvertes en Tunisie</h2>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                <p className="text-gray-300 mb-6">
                  Nous accompagnons des clients dans toutes les grandes villes tunisiennes. Notre connaissance du marché
                  local nous permet de proposer des solutions adaptées à chaque région.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { city: "Tunis", type: "Capitale", projects: "50+" },
                    { city: "Sousse", type: "Tourisme", projects: "25+" },
                    { city: "Sfax", type: "Industrie", projects: "20+" },
                    { city: "Monastir", type: "Textile", projects: "15+" },
                    { city: "Bizerte", type: "Port", projects: "10+" },
                    { city: "Nabeul", type: "Commerce", projects: "12+" },
                    { city: "Gabès", type: "Industrie", projects: "8+" },
                    { city: "Djerba", type: "Tourisme", projects: "18+" }
                  ].map((loc, i) => (
                    <div key={i} className="bg-gray-800 rounded-xl p-4 text-center">
                      <MapPin className="w-5 h-5 text-red-400 mx-auto mb-2" />
                      <div className="font-bold text-white">{loc.city}</div>
                      <div className="text-xs text-gray-400">{loc.type}</div>
                      <div className="text-xs text-red-400 mt-1">{loc.projects} projets</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Secteurs */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Secteurs d'Activité</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { sector: "Tourisme & Hôtellerie", desc: "Réservation, guides, hôtels" },
                  { sector: "E-commerce & Retail", desc: "Boutiques en ligne, marketplaces" },
                  { sector: "Services Financiers", desc: "Banques, assurances, fintech" },
                  { sector: "Santé & Bien-être", desc: "Cliniques, pharmacies, fitness" },
                  { sector: "Éducation & Formation", desc: "E-learning, écoles, certifications" },
                  { sector: "Transport & Logistique", desc: "Livraison, tracking, flotte" },
                  { sector: "Agroalimentaire", desc: "Agriculture, export, distribution" },
                  { sector: "Textile & Mode", desc: "Confection, e-commerce mode" },
                  { sector: "Startups Tech", desc: "MVP, SaaS, applications innovantes" }
                ].map((item, i) => (
                  <div key={i} className="bg-red-50 rounded-xl p-4 hover:bg-red-100 transition-colors">
                    <h3 className="font-bold text-gray-900 mb-1">{item.sector}</h3>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Pourquoi Symloop */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Pourquoi Choisir Symloop pour la Tunisie ?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Équipe 100% francophone et arabophone",
                  "Connaissance approfondie du marché maghrébin",
                  "Intégration de tous les paiements tunisiens (D17, Flouci, Sobflous)",
                  "Support technique en français disponible",
                  "Tarification compétitive en Dinar Tunisien (TND)",
                  "Respect des délais avec méthodologie agile",
                  "Expérience avec +30 entreprises tunisiennes",
                  "Conformité aux réglementations tunisiennes",
                  "Proximité culturelle et fuseau horaire identique",
                  "Possibilité de rencontres en personne"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start p-4 bg-green-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Tarifs */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tarifs Indicatifs pour la Tunisie</h2>
              <p className="text-gray-600 mb-8">
                Nos tarifs sont adaptés au marché tunisien tout en garantissant une qualité internationale.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="text-left p-4">Type de Projet</th>
                      <th className="text-center p-4">Budget TND</th>
                      <th className="text-center p-4">Budget EUR</th>
                      <th className="text-center p-4">Délai</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { type: "Site vitrine", tnd: "3,000 - 8,000", eur: "900 - 2,400", delay: "2-3 sem" },
                      { type: "Site e-commerce", tnd: "8,000 - 20,000", eur: "2,400 - 6,000", delay: "4-8 sem" },
                      { type: "Application mobile", tnd: "15,000 - 50,000", eur: "4,500 - 15,000", delay: "8-16 sem" },
                      { type: "Solution entreprise", tnd: "Sur devis", eur: "Sur devis", delay: "Variable" }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="p-4 font-medium text-gray-900">{row.type}</td>
                        <td className="p-4 text-center text-red-600 font-bold">{row.tnd} TND</td>
                        <td className="p-4 text-center text-gray-600">{row.eur}</td>
                        <td className="p-4 text-center text-gray-500">{row.delay}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">*Tarifs indicatifs. Devis personnalisé gratuit sur demande.</p>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions Fréquentes - Tunisie</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Êtes-vous basés en Tunisie ?",
                    a: "Nous sommes basés au Maghreb avec une équipe qui travaille régulièrement avec des clients tunisiens. Nous pouvons nous déplacer pour des réunions importantes et communiquons quotidiennement via WhatsApp, Zoom ou téléphone."
                  },
                  {
                    q: "Acceptez-vous le paiement en Dinar Tunisien ?",
                    a: "Oui, nous acceptons les paiements en TND par virement bancaire. Nous pouvons également facturer en EUR si vous préférez. Des facilités de paiement sont disponibles pour les projets importants."
                  },
                  {
                    q: "Pouvez-vous intégrer les paiements tunisiens dans mon app ?",
                    a: "Absolument. Nous intégrons D17, Flouci, Sobflous, Paymee et tous les autres moyens de paiement utilisés en Tunisie. Nous avons l'expérience de ces intégrations."
                  },
                  {
                    q: "Quel support proposez-vous après livraison ?",
                    a: "Nous offrons un support inclus de 1 à 3 mois selon les projets. Ensuite, des contrats de maintenance mensuelle sont disponibles. Notre équipe francophone répond dans la journée."
                  }
                ].map((faq, i) => (
                  <div key={i} className="border-2 border-gray-100 rounded-xl p-6 hover:border-red-200 transition-colors">
                    <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {["Développement Tunisie", "Application Mobile Tunis", "E-commerce Tunisie", "Agence Web Tunisie", "Flutter Tunisie", "Startup Tunisia", "D17 Flouci", "Site Web Tunisie"].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm hover:bg-red-100 transition-colors">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Projet Digital en Tunisie ?</h2>
            <p className="text-red-100 mb-8 max-w-2xl mx-auto">
              Discutons de votre projet gratuitement. Équipe francophone, tarifs adaptés au marché tunisien, qualité internationale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/213549575512?text=Bonjour, j'ai un projet en Tunisie" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-50 transition-colors">
                <MessageCircle className="w-5 h-5" /> Discuter sur WhatsApp
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-red-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-800 transition-colors border-2 border-red-400">
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
                { title: "Développement Maroc", slug: "developpement-application-maroc-2024", desc: "Services digitaux pour le Maroc" },
                { title: "E-commerce Maghreb", slug: "ecommerce-algerie-paiement-cib-edahabia-2024", desc: "Vendre en ligne au Maghreb" },
                { title: "Agence Digitale MENA", slug: "agence-digitale-mena-2024", desc: "Services pour la région MENA" }
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
