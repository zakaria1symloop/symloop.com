"use client";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArrowLeft, Calendar, Clock, User, Tag, Share2,
  Truck, MapPin, Package, BarChart3, Smartphone,
  CheckCircle, Users, Zap, Shield, Wifi, Bell,
  Navigation, ClipboardList, DollarSign, TrendingUp,
  Building, ShoppingCart, Warehouse, Route
} from "lucide-react";

export default function LogicielGestionLivraisonDistribution2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const content = {
    fr: {
      title: "Logiciel de Gestion de Livraison et Distribution en Algérie 2026",
      subtitle: "Guide Complet : Digitalisez Votre Flotte de Livraison avec Symloop Logistics",
      metaTitle: "Logiciel Gestion Livraison Algérie 2026 | Distribution & Flotte | Symloop",
      metaDesc: "Meilleur logiciel de gestion de livraison en Algérie 2026. Application livreur, suivi GPS, gestion flotte, mode offline. Solution pour entreprises de distribution.",
      date: "2 Janvier 2026",
      readTime: "12 min",
      author: "Symloop Team",
      category: "Logistique",
      intro: "En 2026, la transformation digitale de la logistique en Algérie n'est plus une option mais une nécessité. Les entreprises de distribution qui adoptent des solutions technologiques modernes gagnent en efficacité, réduisent leurs coûts et améliorent la satisfaction client. Découvrez comment Symloop Logistics Management révolutionne la gestion des livraisons.",
      sections: [
        {
          title: "Pourquoi Digitaliser Votre Gestion de Livraison ?",
          icon: TrendingUp,
          content: [
            "Le marché algérien de la livraison connaît une croissance explosive avec l'essor du e-commerce et la demande croissante de livraison rapide.",
            "Les entreprises de distribution traditionnelles font face à des défis majeurs : suivi manuel des livreurs, perte de temps, erreurs de livraison, et manque de visibilité sur les opérations."
          ],
          stats: [
            { value: "+340%", label: "Croissance e-commerce Algérie" },
            { value: "67%", label: "Clients exigent suivi temps réel" },
            { value: "-40%", label: "Réduction coûts avec digitalisation" }
          ]
        },
        {
          title: "Les 3 Applications Symloop Logistics",
          icon: Smartphone,
          apps: [
            {
              name: "Application Vendeur",
              desc: "Collecte des commandes terrain, gestion clients, synchronisation automatique",
              features: ["Création commandes rapide", "Base clients locale", "Historique ventes", "Mode offline"]
            },
            {
              name: "Application Livreur",
              desc: "Navigation GPS, gestion tournées, preuve de livraison digitale",
              features: ["Navigation intégrée", "Liste optimisée", "Photo/Signature POD", "Notifications temps réel"]
            },
            {
              name: "Dashboard Admin",
              desc: "Vue d'ensemble temps réel, suivi flotte sur carte, analytics",
              features: ["Carte live livreurs", "Vitesse et position", "Rapports détaillés", "Gestion droits"]
            }
          ]
        },
        {
          title: "Secteurs Cibles : Qui Utilise Notre Solution ?",
          icon: Building,
          sectors: [
            { name: "Distribution Alimentaire", desc: "Grossistes, distributeurs FMCG, livraison épiceries", icon: ShoppingCart },
            { name: "Distribution Pharmaceutique", desc: "Livraison pharmacies, traçabilité produits", icon: Shield },
            { name: "E-commerce & Marketplace", desc: "Livraison colis, gestion retours", icon: Package },
            { name: "Distribution Industrielle", desc: "Pièces détachées, équipements", icon: Warehouse },
            { name: "Livraison Restaurant", desc: "Food delivery, dark kitchens", icon: Truck },
            { name: "Distribution Boissons", desc: "Livraison boissons, gestion consignes", icon: Package }
          ]
        },
        {
          title: "Fonctionnalités Clés pour la Distribution",
          icon: CheckCircle,
          features: [
            { title: "Mode Offline Complet", desc: "Fonctionne sans connexion internet. Idéal pour les zones rurales en Algérie.", icon: Wifi },
            { title: "Suivi GPS Temps Réel", desc: "Visualisez tous vos livreurs sur une carte. Position, vitesse, historique.", icon: Navigation },
            { title: "Optimisation Tournées", desc: "Calcul automatique des meilleurs itinéraires pour économiser temps et carburant.", icon: Route },
            { title: "Preuve de Livraison", desc: "Photo, signature digitale, géolocalisation. Zéro litige.", icon: ClipboardList },
            { title: "Notifications Push", desc: "Alertes nouvelles commandes, retards, livraisons effectuées.", icon: Bell },
            { title: "Analytics Avancés", desc: "Tableaux de bord, KPIs, rapports exportables.", icon: BarChart3 }
          ]
        },
        {
          title: "ROI : Retour sur Investissement",
          icon: DollarSign,
          benefits: [
            { metric: "+40%", label: "Productivité livreurs" },
            { metric: "-30%", label: "Coûts opérationnels" },
            { metric: "99%", label: "Taux livraison réussie" },
            { metric: "-50%", label: "Temps administratif" }
          ],
          testimonial: {
            text: "Depuis l'adoption de Symloop Logistics, nous avons réduit nos coûts de 35% et doublé notre capacité de livraison sans embaucher.",
            author: "Directeur Distribution",
            company: "Entreprise FMCG - Alger"
          }
        }
      ],
      pricing: {
        title: "Tarification Simple et Transparente",
        plans: [
          { name: "Starter", price: "4,500 DA/mois", desc: "1 livreur, vendeurs illimités, sans GPS" },
          { name: "Business", price: "6,500 DA/mois", desc: "1 livreur, GPS + Offline inclus", popular: true },
          { name: "Enterprise", price: "Sur devis", desc: "Livreurs illimités, personnalisation" }
        ]
      },
      cta: {
        title: "Prêt à Digitaliser Votre Distribution ?",
        subtitle: "Démo gratuite • Installation en 24h • Support en français et arabe",
        button: "Demander une Démo Gratuite",
        demo: "Voir la Démo Live"
      }
    },
    en: {
      title: "Delivery & Distribution Management Software in Algeria 2026",
      subtitle: "Complete Guide: Digitize Your Delivery Fleet with Symloop Logistics",
      metaTitle: "Delivery Management Software Algeria 2026 | Distribution & Fleet | Symloop",
      metaDesc: "Best delivery management software in Algeria 2026. Driver app, GPS tracking, fleet management, offline mode. Solution for distribution companies.",
      date: "January 2, 2026",
      readTime: "12 min",
      author: "Symloop Team",
      category: "Logistics",
      intro: "In 2026, digital transformation of logistics in Algeria is no longer optional but essential. Distribution companies adopting modern tech solutions gain efficiency, reduce costs, and improve customer satisfaction. Discover how Symloop Logistics Management revolutionizes delivery management.",
      cta: {
        title: "Ready to Digitize Your Distribution?",
        subtitle: "Free demo • 24h setup • Support in French and Arabic",
        button: "Request Free Demo",
        demo: "See Live Demo"
      }
    },
    ar: {
      title: "برنامج إدارة التوصيل والتوزيع في الجزائر 2026",
      subtitle: "دليل شامل: رقمنة أسطول التوصيل الخاص بك مع Symloop Logistics",
      metaTitle: "برنامج إدارة التوصيل الجزائر 2026 | التوزيع والأسطول | Symloop",
      metaDesc: "أفضل برنامج إدارة التوصيل في الجزائر 2026. تطبيق السائق، تتبع GPS، إدارة الأسطول، وضع بدون إنترنت. حل لشركات التوزيع.",
      date: "2 يناير 2026",
      readTime: "12 دقيقة",
      author: "فريق Symloop",
      category: "اللوجستيات",
      intro: "في عام 2026، أصبح التحول الرقمي للوجستيات في الجزائر ضرورة وليس خياراً. الشركات التي تتبنى الحلول التقنية الحديثة تكسب في الكفاءة وتخفض التكاليف وتحسن رضا العملاء. اكتشف كيف يُحدث Symloop Logistics Management ثورة في إدارة التوصيل.",
      sections: [
        {
          title: "لماذا رقمنة إدارة التوصيل؟",
          icon: TrendingUp,
          content: [
            "يشهد سوق التوصيل الجزائري نمواً هائلاً مع ازدهار التجارة الإلكترونية والطلب المتزايد على التوصيل السريع.",
            "تواجه شركات التوزيع التقليدية تحديات كبيرة: تتبع يدوي للسائقين، ضياع الوقت، أخطاء التوصيل، وغياب الرؤية على العمليات."
          ],
          stats: [
            { value: "+340%", label: "نمو التجارة الإلكترونية" },
            { value: "67%", label: "العملاء يطلبون التتبع المباشر" },
            { value: "-40%", label: "خفض التكاليف مع الرقمنة" }
          ]
        },
        {
          title: "تطبيقات Symloop Logistics الثلاثة",
          icon: Smartphone,
          apps: [
            {
              name: "تطبيق البائع",
              desc: "جمع الطلبات الميدانية، إدارة العملاء، مزامنة تلقائية",
              features: ["إنشاء طلبات سريع", "قاعدة عملاء محلية", "سجل المبيعات", "وضع بدون إنترنت"]
            },
            {
              name: "تطبيق السائق",
              desc: "تنقل GPS، إدارة الجولات، إثبات التسليم الرقمي",
              features: ["تنقل مدمج", "قائمة محسنة", "صورة/توقيع POD", "إشعارات فورية"]
            },
            {
              name: "لوحة تحكم المدير",
              desc: "رؤية شاملة مباشرة، تتبع الأسطول على الخريطة، تحليلات",
              features: ["خريطة السائقين مباشرة", "السرعة والموقع", "تقارير مفصلة", "إدارة الصلاحيات"]
            }
          ]
        },
        {
          title: "القطاعات المستهدفة",
          icon: Building,
          sectors: [
            { name: "توزيع المواد الغذائية", desc: "تجار الجملة، موزعو FMCG", icon: ShoppingCart },
            { name: "التوزيع الصيدلاني", desc: "توصيل الصيدليات، تتبع المنتجات", icon: Shield },
            { name: "التجارة الإلكترونية", desc: "توصيل الطرود، إدارة المرتجعات", icon: Package },
            { name: "التوزيع الصناعي", desc: "قطع الغيار، المعدات", icon: Warehouse },
            { name: "توصيل المطاعم", desc: "توصيل الطعام، المطابخ السحابية", icon: Truck },
            { name: "توزيع المشروبات", desc: "توصيل المشروبات، إدارة العبوات", icon: Package }
          ]
        }
      ],
      pricing: {
        title: "تسعير بسيط وشفاف",
        plans: [
          { name: "Starter", price: "4,500 د.ج/شهر", desc: "سائق واحد، بائعين بلا حدود، بدون GPS" },
          { name: "Business", price: "6,500 د.ج/شهر", desc: "سائق واحد، GPS + Offline", popular: true },
          { name: "Enterprise", price: "حسب الطلب", desc: "سائقين بلا حدود، تخصيص" }
        ]
      },
      cta: {
        title: "جاهز لرقمنة التوزيع الخاص بك؟",
        subtitle: "عرض مجاني • تثبيت في 24 ساعة • دعم بالفرنسية والعربية",
        button: "اطلب عرض مجاني",
        demo: "شاهد العرض المباشر"
      }
    }
  };

  const t = content[locale] || content.fr;
  const fullContent = content.fr; // Use French for full content structure

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
    "description": t.metaDesc,
    "author": { "@type": "Organization", "name": "Symloop" },
    "publisher": {
      "@type": "Organization",
      "name": "Symloop",
      "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" }
    },
    "datePublished": "2026-01-02",
    "dateModified": "2026-01-02",
    "mainEntityOfPage": "https://symloop.com/blog/logiciel-gestion-livraison-distribution-algerie-2026",
    "about": {
      "@type": "SoftwareApplication",
      "name": "Symloop Logistics Management",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "iOS, Android, Web"
    }
  };

  return (
    <>
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDesc} />
        <meta name="keywords" content="logiciel gestion livraison algérie, برنامج إدارة التوصيل الجزائر, delivery management software algeria, application livreur, تطبيق السائق, fleet management, gestion flotte, suivi GPS, تتبع GPS, distribution algérie, توزيع الجزائر, logiciel distribution 2026" />
        <link rel="canonical" href="https://symloop.com/blog/logiciel-gestion-livraison-distribution-algerie-2026" />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDesc} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/logiciel-gestion-livraison-distribution-algerie-2026" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <article className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero */}
        <header className="bg-gradient-to-br from-amber-600 via-orange-500 to-red-500 text-white pt-28 pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <Link href="/blog" className={`inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              {locale === 'ar' ? 'العودة للمدونة' : locale === 'en' ? 'Back to Blog' : 'Retour au Blog'}
            </Link>

            <div className={`flex items-center gap-3 mb-4 flex-wrap ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <Truck className="w-4 h-4" /> {t.category}
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

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Section 1: Why Digitize */}
          <section className="mb-16">
            <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {locale === 'ar' ? 'لماذا رقمنة إدارة التوصيل؟' : locale === 'en' ? 'Why Digitize Delivery Management?' : 'Pourquoi Digitaliser Votre Gestion de Livraison ?'}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { value: "+340%", label: locale === 'ar' ? 'نمو التجارة الإلكترونية' : locale === 'en' ? 'E-commerce Growth Algeria' : 'Croissance e-commerce Algérie' },
                { value: "67%", label: locale === 'ar' ? 'العملاء يطلبون التتبع' : locale === 'en' ? 'Clients want real-time tracking' : 'Clients exigent suivi temps réel' },
                { value: "-40%", label: locale === 'ar' ? 'خفض التكاليف' : locale === 'en' ? 'Cost reduction with digitization' : 'Réduction coûts avec digitalisation' }
              ].map((stat, i) => (
                <div key={i} className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-amber-600">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: 3 Apps */}
          <section className="mb-16">
            <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {locale === 'ar' ? '3 تطبيقات متكاملة' : locale === 'en' ? '3 Integrated Applications' : 'Les 3 Applications Symloop Logistics'}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: ClipboardList,
                  name: locale === 'ar' ? 'تطبيق البائع' : locale === 'en' ? 'Seller App' : 'App Vendeur',
                  color: 'blue',
                  features: locale === 'ar' ? ['إنشاء طلبات سريع', 'قاعدة عملاء', 'وضع offline'] : locale === 'en' ? ['Quick order creation', 'Customer database', 'Offline mode'] : ['Création commandes', 'Base clients', 'Mode offline']
                },
                {
                  icon: Truck,
                  name: locale === 'ar' ? 'تطبيق السائق' : locale === 'en' ? 'Driver App' : 'App Livreur',
                  color: 'green',
                  features: locale === 'ar' ? ['تنقل GPS', 'إثبات التسليم', 'إشعارات'] : locale === 'en' ? ['GPS Navigation', 'Proof of delivery', 'Notifications'] : ['Navigation GPS', 'Preuve livraison', 'Notifications']
                },
                {
                  icon: BarChart3,
                  name: locale === 'ar' ? 'لوحة التحكم' : locale === 'en' ? 'Admin Dashboard' : 'Dashboard Admin',
                  color: 'purple',
                  features: locale === 'ar' ? ['خريطة مباشرة', 'تقارير', 'تحليلات'] : locale === 'en' ? ['Live map', 'Reports', 'Analytics'] : ['Carte live', 'Rapports', 'Analytics']
                }
              ].map((app, i) => (
                <div key={i} className={`border-2 border-${app.color}-200 rounded-xl p-6 hover:border-${app.color}-400 transition-colors`}>
                  <div className={`w-12 h-12 bg-${app.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                    <app.icon className={`w-6 h-6 text-${app.color}-600`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{app.name}</h3>
                  <ul className="space-y-2">
                    {app.features.map((f, j) => (
                      <li key={j} className={`flex items-center gap-2 text-gray-600 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <CheckCircle className="w-4 h-4 text-green-500" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Target Sectors */}
          <section className="mb-16">
            <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Building className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {locale === 'ar' ? 'القطاعات المستهدفة' : locale === 'en' ? 'Target Sectors' : 'Secteurs Cibles'}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: ShoppingCart, name: locale === 'ar' ? 'توزيع المواد الغذائية' : locale === 'en' ? 'Food Distribution' : 'Distribution Alimentaire' },
                { icon: Shield, name: locale === 'ar' ? 'التوزيع الصيدلاني' : locale === 'en' ? 'Pharmaceutical' : 'Distribution Pharmaceutique' },
                { icon: Package, name: locale === 'ar' ? 'التجارة الإلكترونية' : locale === 'en' ? 'E-commerce' : 'E-commerce & Marketplace' },
                { icon: Warehouse, name: locale === 'ar' ? 'التوزيع الصناعي' : locale === 'en' ? 'Industrial Distribution' : 'Distribution Industrielle' },
                { icon: Truck, name: locale === 'ar' ? 'توصيل المطاعم' : locale === 'en' ? 'Restaurant Delivery' : 'Livraison Restaurant' },
                { icon: Package, name: locale === 'ar' ? 'توزيع المشروبات' : locale === 'en' ? 'Beverage Distribution' : 'Distribution Boissons' }
              ].map((sector, i) => (
                <div key={i} className={`flex items-center gap-3 p-4 bg-gray-50 rounded-xl ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <sector.icon className="w-8 h-8 text-amber-500" />
                  <span className="font-medium text-gray-800">{sector.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">{t.cta?.title || fullContent.cta.title}</h2>
            <p className="text-white/90 mb-6">{t.cta?.subtitle || fullContent.cta.subtitle}</p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <a href="https://wa.me/213549575512?text=Hello, je veux une démo du logiciel de gestion de livraison" target="_blank" rel="noopener noreferrer" className="bg-white text-amber-600 px-8 py-3 rounded-xl font-semibold hover:bg-amber-50 transition-colors">
                {t.cta?.button || fullContent.cta.button}
              </a>
              <a href="https://logistics.symloop.com" target="_blank" rel="noopener noreferrer" className="border-2 border-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                {t.cta?.demo || fullContent.cta.demo}
              </a>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
