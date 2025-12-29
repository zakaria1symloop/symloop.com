"use client";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArrowLeft, Calendar, Clock, MapPin,
  Truck, Navigation, BarChart3, Smartphone,
  CheckCircle, Zap, Shield, Wifi, Bell,
  Route, DollarSign, TrendingUp, Eye, Settings
} from "lucide-react";

export default function GestionFlotteLivraisonSuiviGPS2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const content = {
    fr: {
      title: "Suivi GPS et Gestion de Flotte de Livraison en Algérie 2026",
      subtitle: "Comment Suivre Vos Livreurs en Temps Réel et Optimiser Vos Tournées",
      metaTitle: "Suivi GPS Flotte Livraison Algérie 2026 | Tracking Livreurs | Symloop",
      metaDesc: "Solution suivi GPS flotte de livraison en Algérie 2026. Tracking livreurs temps réel, optimisation tournées, calcul vitesse distance. Essai gratuit.",
      date: "3 Janvier 2026",
      readTime: "10 min",
      author: "Symloop Team",
      category: "Gestion Flotte",
      intro: "Le suivi GPS des livreurs est devenu indispensable pour les entreprises de distribution en Algérie. Savoir où se trouvent vos livreurs, optimiser leurs tournées et réduire les coûts de carburant sont des enjeux majeurs en 2026.",
      benefits: [
        {
          icon: Eye,
          title: "Visibilité Totale",
          desc: "Voyez tous vos livreurs sur une carte interactive en temps réel"
        },
        {
          icon: Route,
          title: "Optimisation Tournées",
          desc: "Calcul automatique des meilleurs itinéraires pour économiser temps et carburant"
        },
        {
          icon: Zap,
          title: "Réactivité Maximale",
          desc: "Réaffectez les livraisons en temps réel selon la position des livreurs"
        },
        {
          icon: Shield,
          title: "Sécurité Renforcée",
          desc: "Alertes de vitesse excessive, zones dangereuses, historique complet"
        }
      ],
      features: [
        "Position GPS temps réel de chaque livreur",
        "Vitesse actuelle et historique de conduite",
        "Distance parcourue et temps de trajet",
        "Alertes géofencing (zones autorisées)",
        "Historique des trajets sur 30 jours",
        "Export des données pour analyse"
      ],
      stats: [
        { value: "-25%", label: "Consommation carburant" },
        { value: "+35%", label: "Livraisons par jour" },
        { value: "-60%", label: "Temps de supervision" },
        { value: "99.9%", label: "Précision GPS" }
      ]
    },
    ar: {
      title: "تتبع GPS وإدارة أسطول التوصيل في الجزائر 2026",
      subtitle: "كيف تتابع سائقيك في الوقت الحقيقي وتحسن جولاتهم",
      metaTitle: "تتبع GPS أسطول التوصيل الجزائر 2026 | تتبع السائقين | Symloop",
      metaDesc: "حل تتبع GPS لأسطول التوصيل في الجزائر 2026. تتبع السائقين في الوقت الحقيقي، تحسين الجولات، حساب السرعة والمسافة. تجربة مجانية.",
      date: "3 يناير 2026",
      readTime: "10 دقائق",
      author: "فريق Symloop",
      category: "إدارة الأسطول",
      intro: "أصبح تتبع GPS للسائقين ضرورياً لشركات التوزيع في الجزائر. معرفة مواقع سائقيك، تحسين جولاتهم وخفض تكاليف الوقود هي تحديات رئيسية في 2026.",
      benefits: [
        {
          icon: Eye,
          title: "رؤية شاملة",
          desc: "شاهد جميع سائقيك على خريطة تفاعلية في الوقت الحقيقي"
        },
        {
          icon: Route,
          title: "تحسين الجولات",
          desc: "حساب تلقائي لأفضل المسارات لتوفير الوقت والوقود"
        },
        {
          icon: Zap,
          title: "استجابة فورية",
          desc: "أعد توزيع التوصيلات فوراً حسب موقع السائقين"
        },
        {
          icon: Shield,
          title: "أمان معزز",
          desc: "تنبيهات السرعة الزائدة، المناطق الخطرة، سجل كامل"
        }
      ],
      features: [
        "موقع GPS مباشر لكل سائق",
        "السرعة الحالية وسجل القيادة",
        "المسافة المقطوعة ووقت الرحلة",
        "تنبيهات السياج الجغرافي",
        "سجل الرحلات لـ 30 يوماً",
        "تصدير البيانات للتحليل"
      ],
      stats: [
        { value: "-25%", label: "استهلاك الوقود" },
        { value: "+35%", label: "توصيلات يومية" },
        { value: "-60%", label: "وقت الإشراف" },
        { value: "99.9%", label: "دقة GPS" }
      ]
    },
    en: {
      title: "GPS Tracking and Delivery Fleet Management in Algeria 2026",
      subtitle: "How to Track Your Drivers in Real-Time and Optimize Routes",
      metaTitle: "GPS Fleet Tracking Algeria 2026 | Driver Tracking | Symloop",
      metaDesc: "GPS fleet tracking solution for delivery in Algeria 2026. Real-time driver tracking, route optimization, speed and distance calculation. Free trial.",
      date: "January 3, 2026",
      readTime: "10 min",
      author: "Symloop Team",
      category: "Fleet Management",
      intro: "GPS driver tracking has become essential for distribution companies in Algeria. Knowing where your drivers are, optimizing their routes, and reducing fuel costs are key challenges in 2026."
    }
  };

  const t = content[locale] || content.fr;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
    "description": t.metaDesc,
    "author": { "@type": "Organization", "name": "Symloop" },
    "datePublished": "2026-01-03",
    "about": {
      "@type": "SoftwareApplication",
      "name": "Symloop Logistics - GPS Tracking",
      "applicationCategory": "BusinessApplication"
    }
  };

  return (
    <>
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDesc} />
        <meta name="keywords" content="suivi GPS livreur algérie, تتبع GPS السائق الجزائر, fleet tracking algeria, gestion flotte livraison, إدارة أسطول التوصيل, tracking temps réel, تتبع مباشر, optimisation tournées, تحسين الجولات, logiciel suivi véhicule algérie 2026" />
        <link rel="canonical" href="https://symloop.com/blog/gestion-flotte-livraison-suivi-gps-algerie-2026" />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDesc} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <article className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero */}
        <header className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white pt-28 pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <Link href="/blog" className={`inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              {locale === 'ar' ? 'العودة للمدونة' : locale === 'en' ? 'Back to Blog' : 'Retour au Blog'}
            </Link>

            <div className={`flex items-center gap-3 mb-4 flex-wrap ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <Navigation className="w-4 h-4" /> {t.category}
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {t.date}
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <Clock className="w-4 h-4" /> {t.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl text-white/90 mb-6">{t.subtitle}</p>
            <p className="text-white/80 leading-relaxed">{t.intro}</p>
          </div>
        </header>

        {/* Stats */}
        <section className="bg-gray-900 text-white py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {t.stats?.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className={`text-2xl font-bold text-gray-900 mb-8 ${isRTL ? 'text-right' : ''}`}>
            {locale === 'ar' ? 'مزايا تتبع GPS' : locale === 'en' ? 'GPS Tracking Benefits' : 'Avantages du Suivi GPS'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t.benefits?.map((benefit, i) => (
              <div key={i} className={`flex gap-4 p-6 bg-gray-50 rounded-xl ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features List */}
        <section className="bg-blue-50 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className={`text-2xl font-bold text-gray-900 mb-8 ${isRTL ? 'text-right' : ''}`}>
              {locale === 'ar' ? 'الميزات المتاحة' : locale === 'en' ? 'Available Features' : 'Fonctionnalités Disponibles'}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {t.features?.map((feature, i) => (
                <div key={i} className={`flex items-center gap-3 bg-white p-4 rounded-lg ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              {locale === 'ar' ? 'جرب تتبع GPS مجاناً' : locale === 'en' ? 'Try GPS Tracking Free' : 'Essayez le Suivi GPS Gratuitement'}
            </h2>
            <p className="text-white/90 mb-6">
              {locale === 'ar' ? '14 يوم تجربة مجانية • بدون التزام • دعم بالعربية' : locale === 'en' ? '14-day free trial • No commitment • Arabic support' : '14 jours d\'essai gratuit • Sans engagement • Support en arabe'}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <a href="https://wa.me/213549575512?text=Hello, je veux essayer le suivi GPS" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                {locale === 'ar' ? 'ابدأ التجربة المجانية' : locale === 'en' ? 'Start Free Trial' : 'Démarrer l\'Essai Gratuit'}
              </a>
              <Link href="/products/logistics-management" className="border-2 border-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                {locale === 'ar' ? 'تفاصيل المنتج' : locale === 'en' ? 'Product Details' : 'Détails du Produit'}
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
