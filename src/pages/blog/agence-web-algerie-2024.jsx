"use client";
import { Calendar, User, ArrowLeft, Globe, CheckCircle, Star, MessageCircle, Users, Award, Clock, Shield, Zap } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug, getRelatedBlogs } from '../../data/blogs';

export default function AgenceWebAlgerie() {
  const router = useRouter();
  const blog = getBlogBySlug('agence-web-algerie-2024');
  const relatedBlogs = getRelatedBlogs('agence-web-algerie-2024', 3);

  return (
    <>
      <Head>
        <title>{blog?.metaTitle}</title>
        <meta name="description" content={blog?.metaDescription} />
        <meta name="keywords" content="agence web algérie, agence digitale alger, agence web oran, création site web algérie, meilleure agence web" />
        <link rel="canonical" href="https://symloop.com/blog/agence-web-algerie-2024" />
        <meta property="og:title" content={blog?.metaTitle} />
        <meta property="og:description" content={blog?.metaDescription} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": blog?.title,
            "description": blog?.metaDescription,
            "author": { "@type": "Organization", "name": "Symloop" },
            "datePublished": blog?.date
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-white">
        <section className="bg-black text-white py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8">
                <ArrowLeft className="w-4 h-4" /> Retour au blog
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-green-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Globe className="w-4 h-4" />{blog?.category}
                </span>
                <span className="text-gray-400 text-sm">{blog?.readTime}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Agence Web en <span className="text-green-400">Algérie</span> 2024
              </h1>
              <p className="text-xl text-gray-300 mb-8">{blog?.subtitle}</p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2"><User className="w-4 h-4" />{blog?.author}</div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />{new Date(blog?.date).toLocaleDateString('fr-FR')}</div>
              </div>
            </motion.div>
          </div>
        </section>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                Choisir la bonne <span className="text-green-600 font-semibold">agence web en Algérie</span> est crucial
                pour la réussite de votre projet digital. Que vous soyez à <span className="text-green-600 font-semibold">Alger, Oran ou Constantine</span>,
                ce guide vous aide à faire le bon choix.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-r-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Critères de Sélection</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {["Portfolio et références clients", "Expertise technique (React, Next.js, etc.)", "Connaissance du marché algérien", "Support en français et arabe", "Prix transparents", "Délais respectés"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                Types d'Agences Web en Algérie
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Agences Full-Service", desc: "Web, mobile, marketing, SEO - solution complète", price: "Budget moyen-élevé" },
                  { title: "Agences Spécialisées", desc: "Expertise pointue dans un domaine", price: "Variable selon spécialité" },
                  { title: "Freelances", desc: "Flexibilité et coûts réduits", price: "Budget économique" },
                  { title: "Agences Internationales", desc: "Standards internationaux, présence locale", price: "Budget élevé" }
                ].map((type, i) => (
                  <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-green-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{type.desc}</p>
                    <span className="text-green-600 font-medium text-sm">{type.price}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions à Poser à Votre Agence</h2>
              <div className="space-y-4">
                {[
                  "Pouvez-vous montrer des projets similaires au mien ?",
                  "Quelles technologies utilisez-vous ?",
                  "Comment gérez-vous le SEO et la performance ?",
                  "Quel est le processus de communication ?",
                  "Offrez-vous une maintenance après livraison ?",
                  "Quels sont vos délais et conditions de paiement ?"
                ].map((q, i) => (
                  <div key={i} className="flex gap-4 items-center bg-gray-50 rounded-xl p-4">
                    <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">{i+1}</span>
                    <span className="text-gray-700">{q}</span>
                  </div>
                ))}
              </div>
            </section>

            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
              {blog?.tags?.map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </article>

        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Symloop : Votre Agence Web de Confiance</h2>
            <p className="text-green-100 mb-8">+100 projets réalisés en Algérie. Expertise locale, standards internationaux.</p>
            <a href="https://wa.me/213549575512?text=Bonjour, je cherche une agence web pour mon projet" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50">
              <MessageCircle className="w-5 h-5" /> Discuter de Mon Projet
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
