"use client";
import { Calendar, Clock, User, ArrowLeft, Cpu, Brain, Bot, Sparkles, Zap, BarChart3, MessageSquare, Image, Shield, CheckCircle, Star, TrendingUp, Building, Globe, MessageCircle, Eye, Mic, FileText, Search, AlertCircle } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug, getRelatedBlogs } from '../../data/blogs';

export default function IntelligenceArtificielleAlgerie() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const blog = getBlogBySlug('intelligence-artificielle-algerie-mena-2024');
  const relatedBlogs = getRelatedBlogs('intelligence-artificielle-algerie-mena-2024', 3);

  return (
    <>
      <Head>
        <title>{blog?.metaTitle || "Intelligence Artificielle Algérie MENA 2024 | Solutions IA | Symloop"}</title>
        <meta name="description" content={blog?.metaDescription} />
        <meta name="keywords" content="intelligence artificielle algérie, ia mena, chatbot arabe, machine learning algérie, automatisation ia, gpt algérie" />
        <link rel="canonical" href="https://symloop.com/blog/intelligence-artificielle-algerie-mena-2024" />

        <meta property="og:title" content={blog?.metaTitle} />
        <meta property="og:description" content={blog?.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/intelligence-artificielle-algerie-mena-2024" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": blog?.title,
            "description": blog?.metaDescription,
            "author": { "@type": "Organization", "name": "Symloop" },
            "publisher": { "@type": "Organization", "name": "Symloop" },
            "datePublished": blog?.date,
            "mainEntityOfPage": "https://symloop.com/blog/intelligence-artificielle-algerie-mena-2024"
          })}
        </script>
      </Head>

      <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
        {/* Hero Section */}
        <section className="bg-black text-white py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Retour au blog
              </Link>

              <div className="flex items-center gap-3 mb-6">
                <span className="bg-purple-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  {blog?.category}
                </span>
                <span className="text-gray-400 text-sm">{blog?.readTime}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Intelligence <span className="text-purple-400">Artificielle</span> en Algérie et MENA
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Solutions IA pour Entreprises : Chatbots, Analyse Prédictive, Automatisation
              </p>

              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {blog?.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(blog?.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                L'<span className="text-purple-600 font-semibold">Intelligence Artificielle</span> révolutionne
                le monde des affaires. En Algérie et dans la région MENA, les entreprises qui adoptent l'IA
                gagnent un <span className="text-purple-600 font-semibold">avantage compétitif majeur</span>.
                Découvrez comment intégrer l'IA dans votre business.
              </p>
            </div>

            {/* Stats Box */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 rounded-r-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">L'IA dans le Monde des Affaires</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">+40%</div>
                  <div className="text-sm text-gray-600">Productivité avec IA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">$15.7T</div>
                  <div className="text-sm text-gray-600">Impact économique 2030</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">80%</div>
                  <div className="text-sm text-gray-600">Entreprises adoptent IA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600">Service client IA</div>
                </div>
              </div>
            </div>

            {/* AI Solutions */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Brain className="w-5 h-5 text-purple-600" />
                </div>
                Solutions IA pour Entreprises
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-purple-200 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Bot className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Chatbots Intelligents</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Assistants virtuels multilingues (français, arabe, anglais) pour service client 24/7.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Support arabe dialectal
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Intégration WhatsApp, Facebook
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Réponses instantanées
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-purple-200 transition-colors">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Analyse Prédictive</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Prédisez les tendances, anticipez la demande et optimisez vos stocks grâce au Machine Learning.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Prévision des ventes
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Détection de fraude
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Scoring clients
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-purple-200 transition-colors">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Automatisation RPA + IA</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Automatisez les tâches répétitives avec des robots intelligents qui apprennent et s'améliorent.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Traitement documents
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Saisie automatique
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Workflows intelligents
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-purple-200 transition-colors">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">IA Générative</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Créez du contenu, des images et des réponses personnalisées avec les derniers modèles GPT.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Génération de contenu
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Résumé automatique
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Personnalisation avancée
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* AI Capabilities */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Eye className="w-5 h-5 text-blue-600" />
                </div>
                Capacités IA Disponibles
              </h2>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: MessageSquare, name: "NLP / Traitement Langage", desc: "Compréhension texte FR/AR/EN", color: "bg-blue-100 text-blue-600" },
                  { icon: Eye, name: "Vision par Ordinateur", desc: "Reconnaissance images, OCR", color: "bg-green-100 text-green-600" },
                  { icon: Mic, name: "Reconnaissance Vocale", desc: "Speech-to-text multilingue", color: "bg-orange-100 text-orange-600" },
                  { icon: BarChart3, name: "Machine Learning", desc: "Modèles prédictifs sur mesure", color: "bg-purple-100 text-purple-600" },
                  { icon: FileText, name: "Extraction Documents", desc: "Lecture intelligente PDF, factures", color: "bg-cyan-100 text-cyan-600" },
                  { icon: Search, name: "Recherche Sémantique", desc: "Recherche intelligente dans vos données", color: "bg-yellow-100 text-yellow-600" },
                ].map((capability, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${capability.color.split(' ')[0]}`}>
                      <capability.icon className={`w-6 h-6 ${capability.color.split(' ')[1]}`} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{capability.name}</h3>
                    <p className="text-gray-500 text-xs">{capability.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Use Cases */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Building className="w-5 h-5 text-green-600" />
                </div>
                Cas d'Usage par Secteur
              </h2>

              <div className="space-y-4">
                {[
                  { sector: "Banque & Finance", uses: ["Scoring crédit IA", "Détection fraude", "Chatbot support"], color: "bg-blue-500" },
                  { sector: "E-commerce", uses: ["Recommandations produits", "Pricing dynamique", "Support client 24/7"], color: "bg-orange-500" },
                  { sector: "Industrie", uses: ["Maintenance prédictive", "Contrôle qualité vision", "Optimisation production"], color: "bg-gray-700" },
                  { sector: "Santé", uses: ["Aide au diagnostic", "Analyse d'images médicales", "Gestion RDV intelligente"], color: "bg-green-500" },
                  { sector: "Services", uses: ["Automatisation back-office", "Analyse de sentiment", "Génération de rapports"], color: "bg-purple-500" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start bg-white border border-gray-100 rounded-xl p-4 hover:border-purple-200 transition-colors">
                    <div className={`${item.color} text-white px-4 py-2 rounded-lg font-bold text-sm min-w-[140px] text-center`}>
                      {item.sector}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.uses.map((use, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Arabic AI */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-orange-600" />
                </div>
                IA et Langue Arabe
              </h2>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 rounded-r-2xl p-8 mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  La région MENA représente un marché unique avec ses spécificités linguistiques.
                  Nous développons des solutions IA qui comprennent l'<span className="text-orange-600 font-semibold">arabe standard et dialectal</span> (algérien, marocain, tunisien...).
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Chatbots en Darija algérienne</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">OCR pour documents arabes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Analyse sentiment réseaux sociaux</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Traduction automatique FR/AR</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-cyan-600" />
                </div>
                Tarifs Solutions IA
              </h2>

              {/* Pricing Warning */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le tarif exact dépend de la complexité du projet, du volume de données et des intégrations nécessaires.
                  <strong> Contactez-nous pour une consultation gratuite et un devis personnalisé.</strong>
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="text-left p-4 rounded-tl-xl">Solution</th>
                      <th className="text-left p-4">Inclus</th>
                      <th className="text-left p-4">Délai</th>
                      <th className="text-right p-4 rounded-tr-xl">Prix</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="p-4 font-medium">Chatbot Standard</td>
                      <td className="p-4 text-gray-600">FAQ, WhatsApp, multilingue</td>
                      <td className="p-4 text-gray-600">2-3 semaines</td>
                      <td className="p-4 text-right font-bold text-purple-600">300K - 500K DA</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="p-4 font-medium">Chatbot IA Avancé</td>
                      <td className="p-4 text-gray-600">GPT-4, contexte, intégrations</td>
                      <td className="p-4 text-gray-600">4-6 semaines</td>
                      <td className="p-4 text-right font-bold text-purple-600">700K - 1.2M DA</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="p-4 font-medium">Analyse Prédictive</td>
                      <td className="p-4 text-gray-600">Modèle ML sur mesure, dashboards</td>
                      <td className="p-4 text-gray-600">6-10 semaines</td>
                      <td className="p-4 text-right font-bold text-purple-600">1M - 3M DA</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="p-4 font-medium">Solution IA Complète</td>
                      <td className="p-4 text-gray-600">Multi-modules, formation, support</td>
                      <td className="p-4 text-gray-600">3-6 mois</td>
                      <td className="p-4 text-right font-bold text-blue-600">Sur devis</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Why Symloop */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                Pourquoi Symloop pour l'IA ?
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Brain, title: "Expertise IA & ML", desc: "Équipe formée aux dernières technologies OpenAI, TensorFlow, PyTorch" },
                  { icon: Globe, title: "Spécialistes MENA", desc: "Maîtrise des spécificités linguistiques arabes et maghrébines" },
                  { icon: Shield, title: "Données Sécurisées", desc: "Hébergement local possible, conformité RGPD" },
                  { icon: TrendingUp, title: "ROI Prouvé", desc: "Méthodologie axée résultats, KPIs mesurables" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <item.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12 pt-8 border-t border-gray-100">
              {blog?.tags?.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à Intégrer l'IA dans Votre Business ?
            </h2>
            <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
              Discutons de vos cas d'usage et découvrez comment l'IA peut transformer votre entreprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/213549575512?text=Bonjour, je souhaite discuter d'une solution IA pour mon entreprise"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Consultation Gratuite
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-800 transition-colors border border-purple-500"
              >
                Demander un Devis
              </Link>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedBlogs.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Articles Similaires</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedBlogs.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
                      <span className="text-xs font-medium text-purple-600 mb-2 block">{post.category}</span>
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
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
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
