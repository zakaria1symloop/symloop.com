"use client";
import { Calendar, Clock, User, Tag, Share2, ChevronLeft, Eye, Heart, Bookmark, ArrowRight, ShoppingCart, CreditCard, Shield, Zap, Target, DollarSign, Award, CheckCircle, Star, TrendingUp, Globe, Lock, Smartphone, Package, Truck } from "lucide-react";
import Link from "next/link";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Seo from "../../utils/seo";
import FAQSchema from "../../components/seo/FAQSchema";

// FAQ data for rich snippets - targeting "paiement CIB Edahabia e-commerce algérie"
const ecommerceFAQs = [
  {
    question: "Comment intégrer le paiement CIB sur mon site e-commerce en Algérie ?",
    answer: "Pour intégrer le paiement CIB, vous devez : 1) Ouvrir un compte commercial auprès d'une banque partenaire (BNA, BEA, CPA), 2) Demander un contrat VAD (Vente à Distance), 3) Intégrer l'API SATIM via votre développeur. Symloop gère toute l'intégration technique pour vous."
  },
  {
    question: "Quelle est la différence entre CIB et Edahabia pour le e-commerce ?",
    answer: "CIB est le réseau interbancaire pour cartes Visa/Mastercard algériennes. Edahabia est la carte prépayée d'Algérie Poste. Les deux sont essentiels : CIB pour les clients bancaires, Edahabia pour ceux sans compte bancaire. Accepter les deux maximise vos ventes."
  },
  {
    question: "Combien coûte la création d'un site e-commerce avec paiement en ligne en Algérie ?",
    answer: "Un site e-commerce complet avec CIB/Edahabia coûte entre 350,000 DA et 1,500,000 DA selon les fonctionnalités. Cela inclut design, catalogue produits, panier, paiement sécurisé, gestion commandes, et livraison 58 wilayas. Symloop offre des devis gratuits."
  },
  {
    question: "Quels sont les délais pour lancer une boutique en ligne en Algérie ?",
    answer: "Le développement prend 6-12 semaines. L'obtention du contrat VAD bancaire prend 2-4 semaines supplémentaires. Total : 8-16 semaines pour un lancement complet avec paiement en ligne fonctionnel. Symloop vous accompagne dans toutes les démarches."
  },
  {
    question: "Le paiement en ligne est-il sécurisé en Algérie ?",
    answer: "Oui, le paiement via SATIM utilise le protocole 3D Secure avec authentification SMS. Les données sont cryptées SSL/TLS. Les fonds sont garantis par la banque. Symloop implémente toutes les normes de sécurité PCI-DSS pour protéger vos clients."
  }
];

export default function EcommerceCIBEdahabiaBlog() {
  return (
    <>
      <Seo
        title="Créer Site E-commerce avec Paiement CIB Edahabia Algérie 2025 | Guide Complet"
        description="Guide complet pour créer votre boutique en ligne en Algérie avec paiement CIB et Edahabia. Intégration SATIM, contrat VAD, livraison 58 wilayas. Coûts, délais et étapes détaillées par Symloop."
        keywords="e-commerce algérie, paiement CIB algérie, paiement edahabia, boutique en ligne algérie, site e-commerce algérie, SATIM, contrat VAD, vente en ligne algérie, paiement en ligne algérie, création site marchand algérie"
        type="article"
        publishedTime="2025-01-18"
        articleTags={["e-commerce", "paiement CIB", "Edahabia", "Algérie", "SATIM", "boutique en ligne", "vente en ligne"]}
      />
      <FAQSchema faqs={ecommerceFAQs} />
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Back Navigation */}
      <div className="bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour au blog
          </Link>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 overflow-hidden">
        {/* Animated Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(34,197,94,0.1),transparent)]"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-green-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          {/* Achievement Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3">
              <ShoppingCart className="w-5 h-5 text-green-400" />
              <span className="text-sm font-semibold text-green-300">Guide E-commerce Algérie</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Meta Info with Icons */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 mb-8">
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
              <CreditCard className="w-4 h-4 text-green-400" />
              <span className="text-green-300 font-medium">Expert Paiement</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              18 janvier 2025
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              15 min de lecture
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              3,456 vues
            </div>
          </div>

          {/* Enhanced Title */}
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
              <span className="block mb-2">E-commerce Algérie</span>
              <span className="block bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                CIB & Edahabia
              </span>
            </h1>

            <p className="text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              🛒 Le guide ultime pour lancer votre <span className="text-white font-bold">boutique en ligne</span>
              avec paiement sécurisé et <span className="text-green-400 font-bold">livraison 58 wilayas</span>
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6">
                <CreditCard className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Paiement Sécurisé</h3>
                <p className="text-gray-400 text-sm">CIB + Edahabia intégrés</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6">
                <Truck className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">58 Wilayas</h3>
                <p className="text-gray-400 text-sm">Livraison nationale</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
                <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">+400% Ventes</h3>
                <p className="text-gray-400 text-sm">Avec paiement en ligne</p>
              </div>
            </div>
          </div>

          {/* Author Section Enhanced */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-black flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <p className="font-bold text-white text-xl">Youssef Hamdi</p>
                <p className="text-green-400 font-medium">Expert E-commerce & Paiement Digital</p>
              </div>
            </div>

            {/* Enhanced Social Actions */}
            <div className="flex items-center gap-3">
              <button className="group flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 px-6 py-3 rounded-full transition-all transform hover:scale-105">
                <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold">234</span>
              </button>
              <button className="group flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-6 py-3 rounded-full transition-all transform hover:scale-105">
                <Share2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span className="text-sm font-bold">89</span>
              </button>
              <button className="group bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 p-3 rounded-full transition-all transform hover:scale-105">
                <Bookmark className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image with Overlay */}
      <section className="bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden border border-gray-700">
            <img
              src="/blog/ecommerce-algeria.jpg"
              alt="E-commerce avec paiement CIB Edahabia en Algérie"
              className="w-full h-96 lg:h-[32rem] object-cover"
            />
            {/* Enhanced Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-black/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">🎯 Ce que vous allez maîtriser</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Intégration CIB/Edahabia complète</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Contrat VAD et démarches bancaires</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Gestion livraison 58 wilayas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Coûts et délais réels 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Content Section */}
      <section className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            {/* Main Content Card */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 lg:p-16">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-green/5 pointer-events-none rounded-3xl"></div>

              <div className="relative prose prose-xl prose-invert max-w-none">
                {/* Attention-Grabbing Intro */}
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-2xl p-8 mb-12">
                  <h2 className="text-3xl font-black text-white mb-4 flex items-center gap-3">
                    <Zap className="w-8 h-8 text-green-400" />
                    L'EXPLOSION DU E-COMMERCE ALGÉRIEN
                  </h2>
                  <p className="text-xl text-gray-200 leading-relaxed">
                    💰 Le marché e-commerce algérien atteint <strong className="text-green-300">2.5 milliards DA en 2025</strong>
                    avec une croissance de <strong className="text-blue-300">+65% par an</strong>. Les entreprises avec paiement
                    en ligne intégré captent <span className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent font-bold">4x plus de clients</span>
                    que leurs concurrents.
                  </p>
                </div>

                <h2 className="flex items-center gap-3 text-3xl font-bold text-white mb-6">
                  <Target className="w-8 h-8 text-red-400" />
                  Pourquoi le Paiement en Ligne est Indispensable en 2025
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  En Algérie, <strong className="text-green-400">73% des abandons de panier</strong> sont dus à l'absence
                  de paiement en ligne. Les consommateurs algériens sont prêts à payer en ligne, mais trop
                  peu de sites offrent cette option. C'est votre <strong className="text-yellow-400">opportunité en or</strong>.
                </p>

                {/* Statistics Section */}
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">📊 Le E-commerce Algérien en Chiffres</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-black text-green-400 mb-2">8M+</div>
                      <p className="text-gray-300 text-sm">Acheteurs en ligne</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-blue-400 mb-2">+65%</div>
                      <p className="text-gray-300 text-sm">Croissance annuelle</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-purple-400 mb-2">4.2M</div>
                      <p className="text-gray-300 text-sm">Cartes Edahabia actives</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-yellow-400 mb-2">73%</div>
                      <p className="text-gray-300 text-sm">Préfèrent payer en ligne</p>
                    </div>
                  </div>
                </div>

                <h2 className="flex items-center gap-3 text-3xl font-bold text-white mb-6">
                  <CreditCard className="w-8 h-8 text-green-400" />
                  Comprendre CIB et Edahabia
                </h2>

                <h3 className="text-2xl font-bold text-green-300 mb-4">💳 CIB (Carte Interbancaire)</h3>
                <p className="text-lg text-gray-300 mb-6">
                  Le réseau <strong>CIB</strong> connecte toutes les banques algériennes. Il permet aux détenteurs
                  de cartes Visa et Mastercard algériennes de payer en ligne. C'est le standard pour
                  les clients ayant un compte bancaire.
                </p>

                <div className="bg-gray-800/50 rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">🏦 Banques Partenaires CIB</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-3 text-center">
                      <div className="font-bold text-green-300">BNA</div>
                      <div className="text-xs text-gray-400">Banque Nationale</div>
                    </div>
                    <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-3 text-center">
                      <div className="font-bold text-blue-300">BEA</div>
                      <div className="text-xs text-gray-400">Banque Extérieure</div>
                    </div>
                    <div className="bg-purple-500/20 border border-purple-500/30 rounded-xl p-3 text-center">
                      <div className="font-bold text-purple-300">CPA</div>
                      <div className="text-xs text-gray-400">Crédit Populaire</div>
                    </div>
                    <div className="bg-orange-500/20 border border-orange-500/30 rounded-xl p-3 text-center">
                      <div className="font-bold text-orange-300">BADR</div>
                      <div className="text-xs text-gray-400">Banque Agriculture</div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-blue-300 mb-4">📮 Edahabia (Algérie Poste)</h3>
                <p className="text-lg text-gray-300 mb-6">
                  La carte <strong>Edahabia</strong> d'Algérie Poste est une carte prépayée accessible à tous,
                  même sans compte bancaire. Avec <strong className="text-yellow-400">plus de 4 millions de cartes actives</strong>,
                  c'est un canal de vente incontournable pour toucher toute la population algérienne.
                </p>

                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8 mb-12">
                  <h3 className="text-2xl font-bold text-yellow-300 mb-4">⚠️ ERREUR FATALE à Éviter</h3>
                  <p className="text-lg text-gray-200">
                    <strong>Ne proposez pas un seul mode de paiement !</strong> Les sites qui n'acceptent que CIB
                    perdent 40% des ventes potentielles. Ceux qui n'acceptent que Edahabia perdent les clients
                    bancaires. <strong className="text-green-300">Acceptez les deux</strong> pour maximiser vos conversions.
                  </p>
                </div>

                <h2 className="flex items-center gap-3 text-3xl font-bold text-white mb-6">
                  <Globe className="w-8 h-8 text-blue-400" />
                  Les 7 Étapes pour Lancer Votre E-commerce
                </h2>

                <div className="space-y-8 mb-12">
                  <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">Choix de la Plateforme</h3>
                        <p className="text-gray-300 mb-3">
                          Sélectionnez une solution adaptée : WooCommerce (WordPress), PrestaShop, ou développement
                          sur mesure. Symloop recommande le sur-mesure pour une intégration parfaite des
                          paiements locaux.
                        </p>
                        <div className="text-sm text-green-400 font-medium">✓ Performance • Sécurité • Personnalisation complète</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">Création du Registre de Commerce</h3>
                        <p className="text-gray-300 mb-3">
                          Enregistrez votre activité au CNRC avec le code APE approprié pour la vente en ligne.
                          Préparez les documents nécessaires : carte d'identité, extrait de naissance,
                          justificatif de domicile.
                        </p>
                        <div className="text-sm text-blue-400 font-medium">⏱️ Délai : 1-2 semaines</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">Ouverture Compte Commercial</h3>
                        <p className="text-gray-300 mb-3">
                          Ouvrez un compte commercial auprès d'une banque partenaire SATIM (BNA, BEA, CPA).
                          Ce compte recevra les fonds de vos ventes en ligne. Préparez votre registre de
                          commerce et carte fiscale.
                        </p>
                        <div className="text-sm text-purple-400 font-medium">⏱️ Délai : 1 semaine</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">Demande du Contrat VAD</h3>
                        <p className="text-gray-300 mb-3">
                          Demandez un contrat de Vente à Distance (VAD) à votre banque. Ce contrat vous
                          autorise à accepter les paiements en ligne via le réseau SATIM. Fournissez l'URL
                          de votre futur site.
                        </p>
                        <div className="text-sm text-orange-400 font-medium">⏱️ Délai : 2-4 semaines • Commission : 1.5-2.5%</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">5</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">Intégration Technique SATIM</h3>
                        <p className="text-gray-300 mb-3">
                          Intégrez l'API SATIM sur votre site. Cette étape technique requiert un développeur
                          expérimenté. Symloop maîtrise parfaitement cette intégration et gère le tunnel
                          de paiement sécurisé.
                        </p>
                        <div className="text-sm text-cyan-400 font-medium">✓ API SATIM • 3D Secure • Notifications temps réel</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">6</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">Configuration Livraison</h3>
                        <p className="text-gray-300 mb-3">
                          Intégrez des partenaires de livraison couvrant les 58 wilayas : Yalidine, ZR Express,
                          Maystro Delivery. Configurez les zones de livraison, tarifs par wilaya, et suivi
                          des colis en temps réel.
                        </p>
                        <div className="text-sm text-teal-400 font-medium">✓ 58 wilayas • Tracking temps réel • Stop desk</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">7</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">Tests et Lancement</h3>
                        <p className="text-gray-300 mb-3">
                          Effectuez des tests complets : paiements, remboursements, notifications, livraison.
                          SATIM fournit un environnement de test. Après validation, passez en production
                          et lancez votre marketing.
                        </p>
                        <div className="text-sm text-yellow-400 font-medium">✓ Tests en sandbox • Validation SATIM • Go live</div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="flex items-center gap-3 text-3xl font-bold text-white mb-6">
                  <DollarSign className="w-8 h-8 text-green-400" />
                  Combien Coûte un Site E-commerce en Algérie ?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-6 text-center">
                    <Package className="w-10 h-10 text-green-400 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-green-300 mb-2">Starter</h4>
                    <div className="text-3xl font-black text-white mb-4">350K - 600K DA</div>
                    <ul className="text-sm text-gray-300 space-y-2 mb-4 text-left">
                      <li>• Jusqu'à 100 produits</li>
                      <li>• CIB ou Edahabia</li>
                      <li>• Design responsive</li>
                      <li>• Gestion commandes basique</li>
                      <li>• Support 6 mois</li>
                    </ul>
                    <div className="text-xs text-green-400">⏱️ 6-8 semaines</div>
                  </div>

                  <div className="bg-blue-500/20 border border-blue-500/30 rounded-2xl p-6 text-center relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      POPULAIRE
                    </div>
                    <ShoppingCart className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-blue-300 mb-2">Business</h4>
                    <div className="text-3xl font-black text-white mb-4">600K - 1.2M DA</div>
                    <ul className="text-sm text-gray-300 space-y-2 mb-4 text-left">
                      <li>• Produits illimités</li>
                      <li>• CIB + Edahabia</li>
                      <li>• Multi-langues (FR/AR)</li>
                      <li>• Gestion stocks avancée</li>
                      <li>• Livraison 58 wilayas intégrée</li>
                      <li>• Support 12 mois</li>
                    </ul>
                    <div className="text-xs text-blue-400">⏱️ 8-12 semaines</div>
                  </div>

                  <div className="bg-purple-500/20 border border-purple-500/30 rounded-2xl p-6 text-center">
                    <Award className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-purple-300 mb-2">Enterprise</h4>
                    <div className="text-3xl font-black text-white mb-4">1.2M - 2.5M DA</div>
                    <ul className="text-sm text-gray-300 space-y-2 mb-4 text-left">
                      <li>• Multi-vendeurs (marketplace)</li>
                      <li>• Tous modes de paiement</li>
                      <li>• App mobile iOS/Android</li>
                      <li>• IA recommandations</li>
                      <li>• Analytics avancées</li>
                      <li>• Support dédié 24/7</li>
                    </ul>
                    <div className="text-xs text-purple-400">⏱️ 12-20 semaines</div>
                  </div>
                </div>

                <h2 className="flex items-center gap-3 text-3xl font-bold text-white mb-6">
                  <Shield className="w-8 h-8 text-blue-400" />
                  Sécurité des Paiements en Ligne
                </h2>

                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-8 mb-12">
                  <h3 className="text-2xl font-bold text-blue-300 mb-6">🔒 Les 5 Couches de Sécurité SATIM</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <Lock className="w-6 h-6 text-green-400 mt-1" />
                      <div>
                        <h4 className="font-bold text-white">Cryptage SSL/TLS</h4>
                        <p className="text-gray-400 text-sm">Toutes les données sont cryptées en transit</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-blue-400 mt-1" />
                      <div>
                        <h4 className="font-bold text-white">3D Secure</h4>
                        <p className="text-gray-400 text-sm">Authentification par SMS obligatoire</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-400 mt-1" />
                      <div>
                        <h4 className="font-bold text-white">Tokenisation</h4>
                        <p className="text-gray-400 text-sm">Les données carte ne sont jamais stockées</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-yellow-400 mt-1" />
                      <div>
                        <h4 className="font-bold text-white">Détection Fraude</h4>
                        <p className="text-gray-400 text-sm">Algorithmes anti-fraude en temps réel</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success Story */}
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-2xl p-8 mb-12">
                  <h3 className="text-2xl font-bold text-green-300 mb-4">🏆 Success Story : ModaShop DZ</h3>
                  <p className="text-lg text-gray-200 mb-4">
                    Boutique de mode lancée avec Symloop en 2024
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">+450%</div>
                      <p className="text-gray-300 text-sm">Ventes vs paiement à livraison</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">68%</div>
                      <p className="text-gray-300 text-sm">Paiements en ligne</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">12%</div>
                      <p className="text-gray-300 text-sm">Taux de retour (vs 35% avant)</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">58</div>
                      <p className="text-gray-300 text-sm">Wilayas livrées</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-4 italic">
                    "Le paiement en ligne a transformé notre business. Plus de clients qui ne répondent pas à la livraison !"
                  </p>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-2xl p-8 mb-12 text-center">
                  <h3 className="text-3xl font-bold text-white mb-4">🚀 Prêt à Lancer Votre E-commerce ?</h3>
                  <p className="text-xl text-gray-300 mb-6">
                    Symloop vous accompagne de A à Z : développement, intégration paiement,
                    contrat VAD, livraison. Devis gratuit sous 24h.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105"
                  >
                    Demander un Devis Gratuit
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Tags Enhanced */}
                <div className="mt-16 pt-8 border-t border-gray-700">
                  <h4 className="font-bold text-white mb-6 flex items-center gap-3 text-xl">
                    <Tag className="w-6 h-6 text-green-400" />
                    Tags E-commerce Algérie
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {["#EcommerceAlgérie", "#PaiementCIB", "#Edahabia", "#SATIM", "#BoutiqueEnLigne", "#VenteEnLigne", "#LivraisonAlgérie"].map((tag, index) => (
                      <span
                        key={index}
                        className="group bg-gradient-to-r from-green-500/20 to-blue-500/20 hover:from-green-500/30 hover:to-blue-500/30 text-green-300 hover:text-white px-6 py-3 rounded-full text-sm font-medium transition-all cursor-pointer border border-green-500/30 hover:border-green-400/50 transform hover:scale-105"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Author Bio */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-green-500/20 rounded-3xl p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl font-bold text-white mb-3">Youssef Hamdi</h3>
                <p className="text-xl text-green-400 font-medium mb-4">Expert E-commerce & Paiement Digital Algérie</p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Spécialiste e-commerce depuis 10 ans, Youssef a accompagné plus de <strong>200 boutiques en ligne</strong>
                  algériennes dans leur intégration de paiement CIB/Edahabia. Expert certifié SATIM et
                  formateur en e-commerce, il partage son expertise pour démocratiser la vente en ligne en Algérie.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-400">200+</div>
                    <div className="text-sm text-gray-400">Sites E-commerce</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">10</div>
                    <div className="text-sm text-gray-400">Ans Expertise</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">98%</div>
                    <div className="text-sm text-gray-400">Clients Satisfaits</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">500M DA</div>
                    <div className="text-sm text-gray-400">Transactions Gérées</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Related Posts */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">
              📚 Ressources Complémentaires
            </h3>
            <p className="text-xl text-gray-400">
              Continuez votre apprentissage du digital en Algérie
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Link href="/blog/app-cost-in-algeria" className="group block">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Smartphone className="w-3 h-3" />
                    MOBILE
                  </div>
                </div>

                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/blog/app-cost.jpg"
                    alt="Coût application mobile Algérie"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                <div className="p-8">
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors leading-tight">
                    Prix Application Mobile en Algérie 2025
                  </h4>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Guide complet des coûts de développement mobile en Algérie avec tarifs transparents.
                  </p>
                  <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">Lire l'article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/blog/seo-algerie" className="group block">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Target className="w-3 h-3" />
                    SEO
                  </div>
                </div>

                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/blog/seo-algeria.jpg"
                    alt="SEO Algérie"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                <div className="p-8">
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors leading-tight">
                    Guide SEO Algérie 2025
                  </h4>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Stratégies SEO pour dominer Google.dz et tripler votre trafic organique.
                  </p>
                  <div className="flex items-center gap-2 text-green-400 group-hover:text-green-300 transition-colors">
                    <span className="text-sm font-medium">Lire l'article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter CTA */}
      <section className="bg-black py-20 border-t border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent)]"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-12 lg:p-16">
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full font-bold text-sm mb-8">
                <ShoppingCart className="w-4 h-4" />
                NEWSLETTER E-COMMERCE
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                🛒 Boostez Vos Ventes en Ligne
              </h2>
              <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Recevez nos <span className="text-green-400 font-bold">stratégies e-commerce</span>,
                mises à jour paiement et <span className="text-blue-400 font-bold">conseils conversion</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
                <input
                  type="email"
                  placeholder="Votre email professionnel..."
                  className="flex-1 px-6 py-4 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-lg"
                />
                <button className="group bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                  <span>S'ABONNER</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <p className="text-gray-500 text-sm">
                📧 Rejoignez <strong className="text-green-400">5,000+ e-commerçants</strong> algériens
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'fr', ['common'])),
    },
  };
}
