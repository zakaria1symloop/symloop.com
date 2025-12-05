"use client";
import { Calendar, Clock, User, ArrowLeft, Zap, Target, Users, BarChart3, Cloud, Settings, CheckCircle, Star, TrendingUp, Building, Globe, MessageCircle, Lightbulb, Layers, ArrowRight, PieChart, AlertCircle } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { getBlogBySlug, getRelatedBlogs } from '../../data/blogs';

export default function TransformationDigitaleAlgerie() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const blog = getBlogBySlug('transformation-digitale-algerie-2024');
  const relatedBlogs = getRelatedBlogs('transformation-digitale-algerie-2024', 3);

  return (
    <>
      <Head>
        <title>{blog?.metaTitle || "Transformation Digitale Algérie 2024 | Stratégie & Accompagnement | Symloop"}</title>
        <meta name="description" content={blog?.metaDescription} />
        <meta name="keywords" content="transformation digitale algérie, digitalisation entreprise, stratégie digitale, consulting digital algérie, accompagnement digital" />
        <link rel="canonical" href="https://symloop.com/blog/transformation-digitale-algerie-2024" />

        <meta property="og:title" content={blog?.metaTitle} />
        <meta property="og:description" content={blog?.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/transformation-digitale-algerie-2024" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": blog?.title,
            "description": blog?.metaDescription,
            "author": { "@type": "Organization", "name": "Symloop" },
            "publisher": { "@type": "Organization", "name": "Symloop" },
            "datePublished": blog?.date,
            "mainEntityOfPage": "https://symloop.com/blog/transformation-digitale-algerie-2024"
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
                <span className="bg-cyan-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  {blog?.category}
                </span>
                <span className="text-gray-400 text-sm">{blog?.readTime}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Transformation <span className="text-cyan-400">Digitale</span> en Algérie
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Guide Stratégique pour Entreprises : Outils, Budget et ROI
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
                La <span className="text-cyan-600 font-semibold">transformation digitale</span> n'est plus une option
                pour les entreprises algériennes. Face à une concurrence accrue et des clients de plus en plus
                connectés, <span className="text-cyan-600 font-semibold">digitaliser vos processus</span> est devenu
                essentiel pour rester compétitif.
              </p>
            </div>

            {/* Stats Box */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 rounded-r-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transformation Digitale en Algérie</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">72%</div>
                  <div className="text-sm text-gray-600">PME non digitalisées</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">+35%</div>
                  <div className="text-sm text-gray-600">Gain productivité</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">-40%</div>
                  <div className="text-sm text-gray-600">Réduction coûts</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">2x</div>
                  <div className="text-sm text-gray-600">ROI en 18 mois</div>
                </div>
              </div>
            </div>

            {/* What is Digital Transformation */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-cyan-600" />
                </div>
                Qu'est-ce que la Transformation Digitale ?
              </h2>

              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  La transformation digitale est l'intégration des technologies numériques dans tous les domaines
                  d'une entreprise, changeant fondamentalement la façon dont vous opérez et apportez de la valeur
                  à vos clients.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl text-center">
                    <Settings className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                    <div className="font-medium text-gray-900">Processus</div>
                    <div className="text-sm text-gray-500">Automatisation des tâches</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-center">
                    <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="font-medium text-gray-900">Culture</div>
                    <div className="text-sm text-gray-500">Mindset digital</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-center">
                    <Target className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <div className="font-medium text-gray-900">Expérience</div>
                    <div className="text-sm text-gray-500">Client au centre</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Pillars */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Layers className="w-5 h-5 text-purple-600" />
                </div>
                Les 4 Piliers de la Digitalisation
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-cyan-200 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Cloud className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">1. Infrastructure Cloud</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Migration vers le cloud pour flexibilité, sécurité et réduction des coûts infrastructure.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Google Cloud / AWS / Azure
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      SaaS & PaaS solutions
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-cyan-200 transition-colors">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Settings className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">2. Automatisation</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Automatiser les tâches répétitives pour gagner en efficacité et réduire les erreurs.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      RPA (Robotic Process Automation)
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Workflows automatisés
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-cyan-200 transition-colors">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">3. Data & Analytics</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Exploiter vos données pour prendre des décisions éclairées et prédire les tendances.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Business Intelligence
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Tableaux de bord temps réel
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-cyan-200 transition-colors">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">4. Présence Digitale</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Site web, e-commerce, réseaux sociaux pour atteindre vos clients où qu'ils soient.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Site web & E-commerce
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Marketing digital
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Roadmap */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-orange-600" />
                </div>
                Feuille de Route Transformation Digitale
              </h2>

              <div className="space-y-6">
                {[
                  { phase: "Phase 1", title: "Audit & Diagnostic", duration: "2-4 semaines", tasks: ["Analyse de l'existant", "Identification des opportunités", "Définition des objectifs"], color: "bg-blue-500" },
                  { phase: "Phase 2", title: "Stratégie & Roadmap", duration: "2-3 semaines", tasks: ["Priorisation des projets", "Budget et ressources", "Planning de déploiement"], color: "bg-purple-500" },
                  { phase: "Phase 3", title: "Déploiement Outils", duration: "2-6 mois", tasks: ["Mise en place ERP/CRM", "Migration cloud", "Intégrations"], color: "bg-green-500" },
                  { phase: "Phase 4", title: "Formation & Adoption", duration: "Continu", tasks: ["Formation équipes", "Accompagnement au changement", "Support utilisateurs"], color: "bg-orange-500" },
                  { phase: "Phase 5", title: "Optimisation", duration: "Continu", tasks: ["Mesure des KPIs", "Amélioration continue", "Nouvelles fonctionnalités"], color: "bg-cyan-500" },
                ].map((phase, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className={`${phase.color} text-white px-4 py-2 rounded-xl font-bold text-sm flex-shrink-0 min-w-[80px] text-center`}>
                      {phase.phase}
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-gray-900 text-lg">{phase.title}</h3>
                        <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">{phase.duration}</span>
                      </div>
                      <ul className="space-y-2">
                        {phase.tasks.map((task, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600">
                            <ArrowRight className="w-4 h-4 text-cyan-500" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tools */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Settings className="w-5 h-5 text-green-600" />
                </div>
                Outils Recommandés
              </h2>

              {/* Pricing Warning */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Prix indicatifs.</strong> Le coût exact dépend de votre taille d'entreprise, nombre d'utilisateurs et besoins spécifiques.
                  <strong> Contactez-nous pour un diagnostic gratuit et une estimation personnalisée.</strong>
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="text-left p-4 rounded-tl-xl">Catégorie</th>
                      <th className="text-left p-4">Outils</th>
                      <th className="text-left p-4">Usage</th>
                      <th className="text-right p-4 rounded-tr-xl">Budget/mois</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="p-4 font-medium">CRM</td>
                      <td className="p-4 text-gray-600">HubSpot, Salesforce, Zoho</td>
                      <td className="p-4 text-gray-600">Gestion clients</td>
                      <td className="p-4 text-right font-bold text-cyan-600">0 - 50€</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="p-4 font-medium">ERP</td>
                      <td className="p-4 text-gray-600">Odoo, SAP, Sage</td>
                      <td className="p-4 text-gray-600">Gestion entreprise</td>
                      <td className="p-4 text-right font-bold text-cyan-600">50 - 500€</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="p-4 font-medium">Collaboration</td>
                      <td className="p-4 text-gray-600">Slack, Teams, Notion</td>
                      <td className="p-4 text-gray-600">Communication équipe</td>
                      <td className="p-4 text-right font-bold text-green-600">0 - 15€/user</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="p-4 font-medium">Marketing</td>
                      <td className="p-4 text-gray-600">Mailchimp, SEMrush, Hootsuite</td>
                      <td className="p-4 text-gray-600">Marketing digital</td>
                      <td className="p-4 text-right font-bold text-cyan-600">20 - 200€</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="p-4 font-medium">Analytics</td>
                      <td className="p-4 text-gray-600">Google Analytics, Tableau, Power BI</td>
                      <td className="p-4 text-gray-600">Analyse données</td>
                      <td className="p-4 text-right font-bold text-green-600">0 - 100€</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ROI */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <PieChart className="w-5 h-5 text-yellow-600" />
                </div>
                Retour sur Investissement (ROI)
              </h2>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-r-2xl p-8 mb-8">
                <h3 className="font-bold text-gray-900 mb-6">Bénéfices Mesurables</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">+35%</div>
                      <div className="text-gray-600">Productivité employés</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">-40%</div>
                      <div className="text-gray-600">Coûts opérationnels</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">+50%</div>
                      <div className="text-gray-600">Satisfaction client</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <BarChart3 className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">+25%</div>
                      <div className="text-gray-600">Chiffre d'affaires</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Symloop */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Building className="w-5 h-5 text-blue-600" />
                </div>
                Accompagnement Symloop
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Target, title: "Audit Gratuit", desc: "Diagnostic complet de votre maturité digitale" },
                  { icon: Lightbulb, title: "Stratégie Sur Mesure", desc: "Roadmap adaptée à vos objectifs et budget" },
                  { icon: Settings, title: "Déploiement Clé en Main", desc: "Installation et configuration des outils" },
                  { icon: Users, title: "Formation Équipes", desc: "Accompagnement au changement et support" },
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
        <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à Digitaliser Votre Entreprise ?
            </h2>
            <p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto">
              Bénéficiez d'un diagnostic gratuit et d'une feuille de route personnalisée pour votre transformation digitale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/213549575512?text=Bonjour, je souhaite un diagnostic gratuit pour la transformation digitale de mon entreprise"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Diagnostic Gratuit
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-cyan-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-cyan-800 transition-colors border border-cyan-500"
              >
                Nous Contacter
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
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
