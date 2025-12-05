"use client";
import { ArrowLeft, Smartphone, CheckCircle, MessageCircle, Zap, Layers, Globe, Code } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug } from '../../data/blogs';

export default function FlutterAlgerie() {
  const blog = getBlogBySlug('developpement-flutter-algerie-2024');

  return (
    <>
      <Head>
        <title>{blog?.metaTitle}</title>
        <meta name="description" content={blog?.metaDescription} />
        <meta name="keywords" content="flutter algérie, développement mobile flutter, application ios android, dart flutter, agence flutter alger" />
        <link rel="canonical" href="https://symloop.com/blog/developpement-flutter-algerie-2024" />
        <meta property="og:title" content={blog?.metaTitle} />
        <meta property="og:description" content={blog?.metaDescription} />
      </Head>

      <div className="min-h-screen bg-white">
        <section className="bg-black text-white py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8">
                <ArrowLeft className="w-4 h-4" /> Retour au blog
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />Mobile
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Développement <span className="text-blue-400">Flutter</span> en Algérie 2024
              </h1>
              <p className="text-xl text-gray-300 mb-8">{blog?.subtitle}</p>
            </motion.div>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                <span className="text-blue-600 font-semibold">Flutter</span> permet de créer des applications
                <span className="text-blue-600 font-semibold"> iOS et Android</span> avec un seul code. Réduisez vos coûts de
                développement de <span className="text-blue-600 font-semibold">40%</span> tout en obtenant une qualité native.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flutter en Chiffres</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "40%", label: "Économie coûts" },
                  { value: "2x", label: "Plus rapide" },
                  { value: "1", label: "Code source" },
                  { value: "Google", label: "Créé par" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Pourquoi Choisir Flutter ?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Layers, title: "Un Seul Code", desc: "iOS, Android, Web et Desktop avec une seule base de code Dart" },
                  { icon: Zap, title: "Performance Native", desc: "Compilation native pour des performances identiques aux apps natives" },
                  { icon: Globe, title: "Hot Reload", desc: "Développement rapide avec prévisualisation instantanée des changements" },
                  { icon: Code, title: "UI Riche", desc: "Widgets personnalisables pour des interfaces utilisateur magnifiques" }
                ].map((adv, i) => (
                  <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-200">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <adv.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{adv.title}</h3>
                    <p className="text-gray-600 text-sm">{adv.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Types d'Apps Flutter</h2>
              <div className="space-y-3">
                {[
                  "Applications e-commerce avec paiement CIB/Edahabia",
                  "Apps de livraison et logistique",
                  "Réseaux sociaux et messagerie",
                  "Applications fintech et bancaires",
                  "Apps de réservation et booking",
                  "Applications entreprise (CRM, ERP mobile)"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-center p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16 bg-blue-900 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Comparatif Coûts</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-blue-700">
                      <th className="text-left py-3">Approche</th>
                      <th className="text-center py-3">Coût Estimé</th>
                      <th className="text-center py-3">Délai</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-blue-800">
                      <td className="py-3">Apps natives séparées (iOS + Android)</td>
                      <td className="text-center">2,000,000 DA</td>
                      <td className="text-center">4-6 mois</td>
                    </tr>
                    <tr className="bg-blue-800 rounded-lg">
                      <td className="py-3 font-bold">Flutter (iOS + Android)</td>
                      <td className="text-center font-bold">1,200,000 DA</td>
                      <td className="text-center font-bold">2-3 mois</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {blog?.tags?.map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">App Flutter pour Votre Business ?</h2>
            <p className="text-blue-100 mb-8">Experts Flutter en Algérie. iOS et Android avec un seul budget.</p>
            <a href="https://wa.me/213549575512?text=Bonjour, je souhaite développer une application Flutter" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50">
              <MessageCircle className="w-5 h-5" /> Devis Gratuit
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
