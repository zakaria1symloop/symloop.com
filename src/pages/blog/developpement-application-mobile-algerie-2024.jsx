import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Share2, ChevronRight, Smartphone, Code, DollarSign, CheckCircle } from 'lucide-react';
import { getBlogBySlug, getRelatedBlogs } from '../../data/blogs';

export default function MobileAppBlog() {
  const router = useRouter();
  const { t } = useTranslation('common');
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const blog = getBlogBySlug('developpement-application-mobile-algerie-2024');
  const relatedBlogs = getRelatedBlogs(blog.slug);

  return (
    <>
      <Head>
        <title>{blog.metaTitle}</title>
        <meta name="description" content={blog.metaDescription} />
        <meta name="keywords" content={blog.tags.join(', ')} />
        <link rel="canonical" href={`https://symloop.com/blog/${blog.slug}`} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:type" content="article" />
      </Head>

      <article className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
        {/* Hero */}
        <div className="bg-black text-white py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Retour au Blog
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                {blog.category}
              </span>
              <span className="text-gray-400 text-sm">{blog.readTime} de lecture</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {blog.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {blog.subtitle}
            </p>

            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {blog.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(blog.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-16">

          {/* Intro */}
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            Le marché des applications mobiles en Algérie connaît une <strong className="text-black">croissance exceptionnelle</strong>.
            Avec plus de <span className="text-blue-600 font-semibold">45 millions d'abonnés mobiles</span> et un taux de pénétration
            smartphone dépassant les 80%, les entreprises algériennes ont une opportunité unique de toucher leurs clients via des
            applications performantes.
          </p>

          {/* Stats Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-xl p-8 mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Smartphone className="w-6 h-6 text-blue-500" />
              Chiffres Clés du Mobile en Algérie 2024
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">25M+</div>
                <div className="text-sm text-gray-600 mt-1">Smartphones actifs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">80%</div>
                <div className="text-sm text-gray-600 mt-1">Pénétration mobile</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">4G/5G</div>
                <div className="text-sm text-gray-600 mt-1">Couverture urbaine</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">60%</div>
                <div className="text-sm text-gray-600 mt-1">Trafic web mobile</div>
              </div>
            </div>
          </div>

          {/* Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-100">
              Pourquoi Développer une Application Mobile ?
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fidélisation Client Maximale</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Une application mobile permet de rester en <span className="text-green-600 font-medium">contact permanent</span> avec
                    vos clients grâce aux notifications push. Contrairement à un site web, votre application est toujours présente sur
                    l'écran de vos utilisateurs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expérience Utilisateur Supérieure</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Les applications natives offrent une <span className="text-purple-600 font-medium">fluidité et des performances</span> impossibles
                    à atteindre avec un site web. Animations fluides, accès hors-ligne, intégration caméra et GPS.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Canal de Vente Direct</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Avec l'intégration des paiements <span className="text-orange-600 font-medium">CIB et Edahabia</span>, votre application
                    devient un véritable canal de vente e-commerce avec des transactions sécurisées.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Technologies Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-100">
              Technologies de Développement Mobile
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Flutter */}
              <div className="border-2 border-blue-200 rounded-2xl p-6 hover:border-blue-400 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Flutter</h3>
                    <span className="text-sm text-blue-600 font-medium">Recommandé</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Framework cross-platform de Google. Un seul code pour iOS et Android.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Performance native
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Hot Reload rapide
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    UI personnalisable
                  </li>
                </ul>
              </div>

              {/* React Native */}
              <div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-gray-400 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">React Native</h3>
                    <span className="text-sm text-gray-500 font-medium">Alternative</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Framework de Meta (Facebook). Idéal si vous utilisez déjà React.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Écosystème JavaScript
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Large communauté
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Code partagé avec le web
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing Table */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-100">
              Coûts de Développement en Algérie
            </h2>

            {/* Pricing Warning */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
              <div className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5">⚠️</div>
              <p className="text-sm text-yellow-800">
                <strong>Prix indicatifs.</strong> Le coût exact dépend des fonctionnalités souhaitées, du nombre d'écrans,
                des intégrations (paiement, GPS, notifications), et de la complexité du backend. <strong>Contactez-nous pour
                un devis gratuit et personnalisé</strong> - nous analysons votre projet et vous proposons le meilleur rapport qualité/prix.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="text-left p-4 rounded-tl-xl">Type d'Application</th>
                    <th className="text-left p-4">Budget Estimé</th>
                    <th className="text-left p-4 rounded-tr-xl">Délai</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <strong className="text-gray-900">Application Simple</strong>
                      <br />
                      <span className="text-sm text-gray-500">Vitrine, catalogue, formulaires</span>
                    </td>
                    <td className="p-4">
                      <span className="text-green-600 font-semibold">300,000 - 800,000 DA</span>
                    </td>
                    <td className="p-4 text-gray-600">4-8 semaines</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <strong className="text-gray-900">Application Moyenne</strong>
                      <br />
                      <span className="text-sm text-gray-500">E-commerce, réservation, chat</span>
                    </td>
                    <td className="p-4">
                      <span className="text-blue-600 font-semibold">800,000 - 2,000,000 DA</span>
                    </td>
                    <td className="p-4 text-gray-600">8-16 semaines</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <strong className="text-gray-900">Application Complexe</strong>
                      <br />
                      <span className="text-sm text-gray-500">Marketplace, IA, temps réel</span>
                    </td>
                    <td className="p-4">
                      <span className="text-purple-600 font-semibold">2,000,000 - 5,000,000+ DA</span>
                    </td>
                    <td className="p-4 text-gray-600">16-32 semaines</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Process Steps */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-100">
              Les Étapes de Développement
            </h2>

            <div className="space-y-6">
              {[
                { step: "01", title: "Analyse et Conception", desc: "Définition des besoins, wireframes, maquettes UI/UX", color: "blue" },
                { step: "02", title: "Développement", desc: "Codage de l'application avec Flutter ou React Native", color: "purple" },
                { step: "03", title: "Tests Qualité", desc: "Tests unitaires, tests d'intégration, beta testing", color: "green" },
                { step: "04", title: "Déploiement", desc: "Publication sur Google Play Store et Apple App Store", color: "orange" },
                { step: "05", title: "Maintenance", desc: "Mises à jour, corrections de bugs, nouvelles fonctionnalités", color: "red" }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className={`flex-shrink-0 w-14 h-14 bg-${item.color}-100 rounded-xl flex items-center justify-center`}>
                    <span className={`text-${item.color}-600 font-bold text-lg`}>{item.step}</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 lg:p-12 text-center text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Prêt à Créer Votre Application Mobile ?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Symloop développe des applications mobiles performantes pour les entreprises algériennes.
              Obtenez une consultation gratuite et un devis personnalisé.
            </p>
            <a
              href="https://wa.me/213549575512"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Contactez-nous sur WhatsApp
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
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
