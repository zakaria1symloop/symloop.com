"use client";
import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  ArrowLeft,
  Truck,
  CheckCircle,
  MessageCircle,
  MapPin,
  Package,
  BarChart3,
  Clock,
  ChevronDown,
  AlertCircle,
  Smartphone,
  DollarSign,
  Globe,
  ArrowRight,
  Route,
  Warehouse,
  Users,
  Settings,
  Navigation,
  Shield,
  Wifi,
  WifiOff,
  Bell,
  Map,
  ClipboardList,
  UserCheck,
  Zap,
  Target,
  Play,
  Star,
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';

export default function LogisticsManagement() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';
  const [openFaq, setOpenFaq] = useState(null);

  const content = {
    fr: {
      badge: "Produit Symloop",
      title: "Symloop Logistics Management",
      subtitle: "Système Complet de Gestion des Livraisons et Flottes",
      description: "Solution tout-en-un pour gérer vos vendeurs, livreurs et livraisons. Suivi temps réel sur carte, mode offline, notifications push et analytics avancés.",
      liveDemo: "Voir Démo Live",
      contactUs: "Nous Contacter",
      watchVideo: "Voir la Vidéo",
      appsTitle: "3 Applications Connectées",
      appsSubtitle: "Un écosystème complet pour gérer tout le cycle de livraison",
      featuresTitle: "Fonctionnalités Avancées",
      featuresSubtitle: "Tout ce dont vous avez besoin pour optimiser vos livraisons",
      benefitsTitle: "Pourquoi Choisir Notre Solution ?",
      pricingTitle: "Tarification Flexible",
      pricingSubtitle: "Des plans adaptés à toutes les tailles d'entreprise",
      faqTitle: "Questions Fréquentes",
      ctaTitle: "Prêt à Optimiser Vos Livraisons ?",
      ctaSubtitle: "Démarrez avec notre solution logistique dès aujourd'hui",
      ctaButton: "Demander une Démo",
      backToProducts: "Retour aux Produits"
    },
    en: {
      badge: "Symloop Product",
      title: "Symloop Logistics Management",
      subtitle: "Complete Delivery & Fleet Management System",
      description: "All-in-one solution to manage your sellers, drivers and deliveries. Real-time map tracking, offline mode, push notifications and advanced analytics.",
      liveDemo: "Live Demo",
      contactUs: "Contact Us",
      watchVideo: "Watch Video",
      appsTitle: "3 Connected Applications",
      appsSubtitle: "A complete ecosystem to manage the entire delivery cycle",
      featuresTitle: "Advanced Features",
      featuresSubtitle: "Everything you need to optimize your deliveries",
      benefitsTitle: "Why Choose Our Solution?",
      pricingTitle: "Flexible Pricing",
      pricingSubtitle: "Plans adapted to all business sizes",
      faqTitle: "Frequently Asked Questions",
      ctaTitle: "Ready to Optimize Your Deliveries?",
      ctaSubtitle: "Start with our logistics solution today",
      ctaButton: "Request a Demo",
      backToProducts: "Back to Products"
    },
    ar: {
      badge: "منتج Symloop",
      title: "نظام إدارة اللوجستيات",
      subtitle: "نظام متكامل لإدارة التوصيل والأسطول",
      description: "حل شامل لإدارة البائعين والسائقين والتوصيلات. تتبع مباشر على الخريطة، وضع بدون إنترنت، إشعارات فورية وتحليلات متقدمة.",
      liveDemo: "عرض مباشر",
      contactUs: "اتصل بنا",
      watchVideo: "شاهد الفيديو",
      appsTitle: "3 تطبيقات متصلة",
      appsSubtitle: "نظام بيئي كامل لإدارة دورة التوصيل بأكملها",
      featuresTitle: "ميزات متقدمة",
      featuresSubtitle: "كل ما تحتاجه لتحسين عمليات التوصيل",
      benefitsTitle: "لماذا تختار حلنا؟",
      pricingTitle: "تسعير مرن",
      pricingSubtitle: "خطط تناسب جميع أحجام الشركات",
      faqTitle: "الأسئلة الشائعة",
      ctaTitle: "جاهز لتحسين عمليات التوصيل؟",
      ctaSubtitle: "ابدأ مع حلنا اللوجستي اليوم",
      ctaButton: "اطلب عرض توضيحي",
      backToProducts: "العودة للمنتجات"
    }
  };

  const t = content[locale] || content.fr;

  const apps = [
    {
      icon: ClipboardList,
      title: locale === 'ar' ? 'تطبيق البائع' : locale === 'en' ? 'Seller App' : 'App Vendeur',
      subtitle: locale === 'ar' ? 'جمع الطلبات وإدارة العملاء' : locale === 'en' ? 'Order Collection & Customer Management' : 'Collecte Commandes & Gestion Clients',
      color: 'from-blue-500 to-blue-600',
      features: locale === 'ar' ? [
        'إنشاء الطلبات بسرعة',
        'إدارة قاعدة العملاء',
        'تتبع حالة التوصيل',
        'إحصائيات المبيعات',
        'يعمل بدون إنترنت'
      ] : locale === 'en' ? [
        'Quick order creation',
        'Customer database management',
        'Delivery status tracking',
        'Sales statistics',
        'Works offline'
      ] : [
        'Création rapide de commandes',
        'Gestion base clients',
        'Suivi statut livraison',
        'Statistiques ventes',
        'Fonctionne hors ligne'
      ]
    },
    {
      icon: Truck,
      title: locale === 'ar' ? 'تطبيق السائق' : locale === 'en' ? 'Driver App' : 'App Livreur',
      subtitle: locale === 'ar' ? 'التنقل والتسليم والإثبات' : locale === 'en' ? 'Navigation, Delivery & Proof' : 'Navigation, Livraison & Preuve',
      color: 'from-green-500 to-green-600',
      features: locale === 'ar' ? [
        'تنقل GPS مدمج',
        'قائمة التوصيلات المحسنة',
        'إثبات التسليم (صورة/توقيع)',
        'إشعارات الطلبات الجديدة',
        'حساب المسافة والوقت تلقائياً'
      ] : locale === 'en' ? [
        'Built-in GPS navigation',
        'Optimized delivery list',
        'Proof of delivery (photo/signature)',
        'New order notifications',
        'Auto distance & time calculation'
      ] : [
        'Navigation GPS intégrée',
        'Liste livraisons optimisée',
        'Preuve de livraison (photo/signature)',
        'Notifications nouvelles commandes',
        'Calcul auto distance & temps'
      ]
    },
    {
      icon: Map,
      title: locale === 'ar' ? 'لوحة تحكم المدير' : locale === 'en' ? 'Admin Dashboard' : 'Dashboard Admin',
      subtitle: locale === 'ar' ? 'تتبع ومراقبة كل شيء' : locale === 'en' ? 'Track & Monitor Everything' : 'Suivez & Contrôlez Tout',
      color: 'from-purple-500 to-purple-600',
      features: locale === 'ar' ? [
        'خريطة تتبع مباشر',
        'موقع وسرعة السائقين',
        'إدارة جميع الطلبات',
        'تقارير وتحليلات مفصلة',
        'إدارة المستخدمين والصلاحيات'
      ] : locale === 'en' ? [
        'Real-time tracking map',
        'Driver location & speed',
        'All orders management',
        'Detailed reports & analytics',
        'User & permission management'
      ] : [
        'Carte suivi temps réel',
        'Position et vitesse livreurs',
        'Gestion toutes commandes',
        'Rapports et analytics détaillés',
        'Gestion utilisateurs et droits'
      ]
    }
  ];

  const features = [
    {
      icon: WifiOff,
      title: locale === 'ar' ? 'وضع بدون إنترنت' : locale === 'en' ? 'Offline Mode' : 'Mode Offline',
      desc: locale === 'ar' ? 'يعمل بدون اتصال بالإنترنت، مزامنة تلقائية عند الاتصال' : locale === 'en' ? 'Works without internet, auto-sync when connected' : 'Fonctionne sans connexion, synchronisation automatique'
    },
    {
      icon: Navigation,
      title: locale === 'ar' ? 'تتبع GPS مباشر' : locale === 'en' ? 'Real-time GPS' : 'GPS Temps Réel',
      desc: locale === 'ar' ? 'تتبع موقع وسرعة جميع السائقين على الخريطة' : locale === 'en' ? 'Track location & speed of all drivers on map' : 'Suivez position et vitesse de tous les livreurs sur carte'
    },
    {
      icon: Bell,
      title: locale === 'ar' ? 'إشعارات فورية' : locale === 'en' ? 'Push Notifications' : 'Notifications Push',
      desc: locale === 'ar' ? 'تنبيهات فورية للطلبات الجديدة وتغييرات الحالة' : locale === 'en' ? 'Instant alerts for new orders & status changes' : 'Alertes instantanées nouvelles commandes et changements statut'
    },
    {
      icon: BarChart3,
      title: locale === 'ar' ? 'تحليلات متقدمة' : locale === 'en' ? 'Advanced Analytics' : 'Analytics Avancés',
      desc: locale === 'ar' ? 'تقارير مفصلة عن الأداء والتوصيلات والمبيعات' : locale === 'en' ? 'Detailed reports on performance, deliveries & sales' : 'Rapports détaillés performance, livraisons et ventes'
    },
    {
      icon: Route,
      title: locale === 'ar' ? 'تحسين المسارات' : locale === 'en' ? 'Route Optimization' : 'Optimisation Routes',
      desc: locale === 'ar' ? 'حساب أفضل المسارات لتوفير الوقت والوقود' : locale === 'en' ? 'Calculate best routes to save time & fuel' : 'Calcul meilleures routes pour économiser temps et carburant'
    },
    {
      icon: Shield,
      title: locale === 'ar' ? 'أمان وموثوقية' : locale === 'en' ? 'Secure & Reliable' : 'Sécurisé & Fiable',
      desc: locale === 'ar' ? 'تشفير البيانات ونسخ احتياطي تلقائي' : locale === 'en' ? 'Data encryption & automatic backups' : 'Chiffrement données et sauvegardes automatiques'
    }
  ];

  const benefits = [
    { value: '+40%', label: locale === 'ar' ? 'زيادة الكفاءة' : locale === 'en' ? 'Efficiency Increase' : 'Gain Efficacité' },
    { value: '-30%', label: locale === 'ar' ? 'توفير التكاليف' : locale === 'en' ? 'Cost Reduction' : 'Réduction Coûts' },
    { value: '99%', label: locale === 'ar' ? 'دقة التتبع' : locale === 'en' ? 'Tracking Accuracy' : 'Précision Tracking' },
    { value: '24/7', label: locale === 'ar' ? 'دعم فني' : locale === 'en' ? 'Support' : 'Support' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: locale === 'ar' ? '99$' : '99$',
      period: locale === 'ar' ? '/شهر' : locale === 'en' ? '/month' : '/mois',
      description: locale === 'ar' ? 'للشركات الصغيرة' : locale === 'en' ? 'For small businesses' : 'Pour petites entreprises',
      features: locale === 'ar' ? [
        'حتى 5 سائقين',
        'حتى 3 بائعين',
        'تتبع GPS مباشر',
        'وضع بدون إنترنت',
        'دعم البريد الإلكتروني'
      ] : locale === 'en' ? [
        'Up to 5 drivers',
        'Up to 3 sellers',
        'Real-time GPS tracking',
        'Offline mode',
        'Email support'
      ] : [
        'Jusqu\'à 5 livreurs',
        'Jusqu\'à 3 vendeurs',
        'Tracking GPS temps réel',
        'Mode offline',
        'Support email'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: locale === 'ar' ? '249$' : '249$',
      period: locale === 'ar' ? '/شهر' : locale === 'en' ? '/month' : '/mois',
      description: locale === 'ar' ? 'للشركات المتوسطة' : locale === 'en' ? 'For medium businesses' : 'Pour entreprises moyennes',
      features: locale === 'ar' ? [
        'حتى 20 سائق',
        'حتى 10 بائعين',
        'جميع ميزات Starter',
        'تحسين المسارات',
        'تقارير متقدمة',
        'دعم أولوية'
      ] : locale === 'en' ? [
        'Up to 20 drivers',
        'Up to 10 sellers',
        'All Starter features',
        'Route optimization',
        'Advanced reports',
        'Priority support'
      ] : [
        'Jusqu\'à 20 livreurs',
        'Jusqu\'à 10 vendeurs',
        'Tout Starter inclus',
        'Optimisation routes',
        'Rapports avancés',
        'Support prioritaire'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: locale === 'ar' ? 'حسب الطلب' : locale === 'en' ? 'Custom' : 'Sur devis',
      period: '',
      description: locale === 'ar' ? 'للشركات الكبيرة' : locale === 'en' ? 'For large enterprises' : 'Pour grandes entreprises',
      features: locale === 'ar' ? [
        'سائقين وبائعين بلا حدود',
        'جميع ميزات Business',
        'تخصيص كامل',
        'API للتكامل',
        'تدريب الفريق',
        'مدير حساب مخصص'
      ] : locale === 'en' ? [
        'Unlimited drivers & sellers',
        'All Business features',
        'Full customization',
        'API integration',
        'Team training',
        'Dedicated account manager'
      ] : [
        'Livreurs et vendeurs illimités',
        'Tout Business inclus',
        'Personnalisation complète',
        'Intégration API',
        'Formation équipe',
        'Account manager dédié'
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: locale === 'ar' ? 'هل يعمل التطبيق بدون إنترنت؟' : locale === 'en' ? 'Does the app work offline?' : 'L\'application fonctionne-t-elle hors ligne ?',
      answer: locale === 'ar' ? 'نعم، جميع التطبيقات تعمل بدون إنترنت. يتم تخزين البيانات محلياً ومزامنتها تلقائياً عند الاتصال.' : locale === 'en' ? 'Yes, all apps work offline. Data is stored locally and automatically synced when connected.' : 'Oui, toutes les applications fonctionnent hors ligne. Les données sont stockées localement et synchronisées automatiquement à la connexion.'
    },
    {
      question: locale === 'ar' ? 'كم يستغرق التنفيذ؟' : locale === 'en' ? 'How long does implementation take?' : 'Combien de temps prend l\'implémentation ?',
      answer: locale === 'ar' ? 'عادة 1-2 أسبوع للإعداد والتدريب. يمكنك البدء باستخدام النظام في نفس اليوم.' : locale === 'en' ? 'Usually 1-2 weeks for setup and training. You can start using the system the same day.' : 'Généralement 1-2 semaines pour configuration et formation. Vous pouvez commencer à utiliser le système le jour même.'
    },
    {
      question: locale === 'ar' ? 'هل يمكن تخصيص النظام؟' : locale === 'en' ? 'Can the system be customized?' : 'Le système peut-il être personnalisé ?',
      answer: locale === 'ar' ? 'نعم، نقدم تخصيصاً كاملاً حسب احتياجات عملك. يمكننا إضافة ميزات خاصة وتعديل سير العمل.' : locale === 'en' ? 'Yes, we offer full customization based on your business needs. We can add custom features and modify workflows.' : 'Oui, nous offrons une personnalisation complète selon vos besoins. Nous pouvons ajouter des fonctionnalités et modifier les workflows.'
    },
    {
      question: locale === 'ar' ? 'ما اللغات المدعومة؟' : locale === 'en' ? 'What languages are supported?' : 'Quelles langues sont supportées ?',
      answer: locale === 'ar' ? 'النظام يدعم العربية والفرنسية والإنجليزية. يمكننا إضافة لغات أخرى حسب الطلب.' : locale === 'en' ? 'The system supports Arabic, French and English. We can add other languages on request.' : 'Le système supporte l\'arabe, le français et l\'anglais. Nous pouvons ajouter d\'autres langues sur demande.'
    },
    {
      question: locale === 'ar' ? 'هل هناك فترة تجريبية؟' : locale === 'en' ? 'Is there a trial period?' : 'Y a-t-il une période d\'essai ?',
      answer: locale === 'ar' ? 'نعم، نقدم عرضاً توضيحياً مجانياً وفترة تجريبية لمدة 14 يوماً لتجربة جميع الميزات.' : locale === 'en' ? 'Yes, we offer a free demo and a 14-day trial period to test all features.' : 'Oui, nous offrons une démo gratuite et une période d\'essai de 14 jours pour tester toutes les fonctionnalités.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Symloop Logistics Management",
        "description": "Complete delivery and fleet management system with seller app, driver app and admin dashboard",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "iOS, Android, Web",
        "offers": {
          "@type": "Offer",
          "price": "99",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "150"
        },
        "creator": {
          "@type": "Organization",
          "name": "Symloop",
          "url": "https://symloop.com"
        }
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
        "@type": "Product",
        "name": "Symloop Logistics Management System",
        "description": "Delivery management software for businesses",
        "brand": { "@type": "Brand", "name": "Symloop" },
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "99",
          "highPrice": "499",
          "priceCurrency": "USD"
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Logistics Management Software | Delivery & Fleet Tracking | Symloop</title>
        <meta name="description" content="Complete logistics management system. Seller app for orders, driver app with GPS navigation, admin dashboard with real-time tracking. Works offline. Multi-language support." />
        <meta name="keywords" content="logistics management software, delivery tracking app, fleet management system, driver app, delivery management, GPS tracking, offline delivery app, MENA logistics software" />
        <link rel="canonical" href="https://symloop.com/products/logistics-management" />
        <meta property="og:title" content="Symloop Logistics Management - Delivery & Fleet System" />
        <meta property="og:description" content="Complete delivery management with seller app, driver app and admin dashboard. Real-time GPS tracking, offline mode, multi-language." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://symloop.com/products/logistics-management" />
        <meta property="og:image" content="https://symloop.com/images/products/logistics-management-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/" className={`inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} /> {t.backToProducts}
              </Link>

              <div className="flex items-center gap-3 mb-6">
                <span className="bg-amber-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Truck className="w-4 h-4" />{t.badge}
                </span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">2026</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                {t.title}
              </h1>
              <p className="text-xl lg:text-2xl text-amber-400 mb-4">
                {t.subtitle}
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl">
                {t.description}
              </p>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 mb-12 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <a
                  href="https://logistics.symloop.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-amber-600 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" /> {t.liveDemo}
                </a>
                <a
                  href="https://wa.me/213549575512?text=Hello, I'm interested in Symloop Logistics Management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" /> {t.contactUs}
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {benefits.map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                    <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3 Apps Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.appsTitle}</h2>
              <p className="text-lg text-gray-600">{t.appsSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {apps.map((app, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`bg-gradient-to-r ${app.color} p-6 text-white`}>
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <app.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                    <p className="text-white/80">{app.subtitle}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {app.features.map((feature, j) => (
                        <li key={j} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.featuresTitle}</h2>
              <p className="text-lg text-gray-600">{t.featuresSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`bg-white border border-gray-200 rounded-xl p-6 hover:border-amber-300 hover:shadow-lg transition-all ${isRTL ? 'text-right' : ''}`}
                >
                  <div className={`w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 ${isRTL ? 'mr-auto' : ''}`}>
                    <feature.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.pricingTitle}</h2>
              <p className="text-lg text-gray-600">{t.pricingSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative bg-white rounded-2xl p-8 shadow-lg ${plan.popular ? 'ring-2 ring-amber-500' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-amber-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                        {locale === 'ar' ? 'الأكثر شعبية' : locale === 'en' ? 'Most Popular' : 'Plus Populaire'}
                      </span>
                    </div>
                  )}
                  <div className={`text-center mb-6 ${isRTL ? 'text-center' : ''}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/213549575512?text=Hello, I'm interested in the ${plan.name} plan for Logistics Management`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-3 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-amber-500 text-white hover:bg-amber-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                  >
                    {t.contactUs}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.faqTitle}</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className={`w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors ${isRTL ? 'flex-row-reverse text-right' : ''}`}
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className={`p-4 bg-gray-50 border-t border-gray-200 ${isRTL ? 'text-right' : ''}`}>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">{t.ctaTitle}</h2>
            <p className="text-amber-100 mb-8 max-w-2xl mx-auto">{t.ctaSubtitle}</p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <a
                href="https://logistics.symloop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold hover:bg-amber-50 transition-colors"
              >
                <ExternalLink className="w-5 h-5" /> {t.liveDemo}
              </a>
              <a
                href="https://wa.me/213549575512?text=Hello, I want a demo of Symloop Logistics Management"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-amber-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> {t.ctaButton}
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
