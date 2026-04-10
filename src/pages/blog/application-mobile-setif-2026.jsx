"use client";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArrowLeft, Calendar, Clock, User, MapPin, Smartphone, CheckCircle, Phone, Mail,
  Star, TrendingUp, Zap, Shield, Apple, PlayCircle, Code, Rocket, ArrowRight
} from "lucide-react";

export default function ApplicationMobileSetif2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const content = {
    fr: {
      metaTitle: "Developpement Application Mobile Setif 2026 | iOS Android | Symloop",
      metaDesc: "Developpement application mobile a Setif. Apps iOS iPhone, Android, React Native, Flutter. Agence locale, expertise internationale. Devis gratuit. Symloop Setif.",
      title: "Developpement Application Mobile a Setif",
      subtitle: "Apps iOS & Android Sur Mesure - Agence Mobile Locale depuis 2020",
      category: "Application Mobile Setif",
      date: "13 Janvier 2026",
      readTime: "9 min",
      author: "Symloop Setif",

      intro: "Besoin d'une application mobile a Setif ? Symloop developpe des apps iOS et Android pour les entreprises des Hauts-Plateaux. Application metier, app client, e-commerce mobile - nous transformons votre idee en application performante disponible sur App Store et Google Play.",

      platforms: {
        title: "Plateformes de Developpement",
        list: [
          { icon: Apple, name: "iOS / iPhone", desc: "Applications natives Swift pour iPhone et iPad. Publication App Store.", tech: "Swift, SwiftUI" },
          { icon: PlayCircle, name: "Android", desc: "Applications natives Kotlin pour tous smartphones Android. Publication Play Store.", tech: "Kotlin, Jetpack" },
          { icon: Code, name: "React Native", desc: "Une seule codebase pour iOS et Android. Developpement rapide et economique.", tech: "React Native, Expo" },
          { icon: Rocket, name: "Flutter", desc: "Applications cross-platform haute performance. UI fluide et moderne.", tech: "Flutter, Dart" }
        ]
      },

      types: {
        title: "Types d'Applications",
        list: [
          { name: "App E-commerce", desc: "Catalogue, panier, paiement CIB, notifications push, suivi commandes.", price: "A partir de 400,000 DA" },
          { name: "App Metier", desc: "Gestion stock, CRM mobile, facturation, reporting temps reel.", price: "A partir de 350,000 DA" },
          { name: "App Service", desc: "Reservation, livraison, mise en relation. Geolocalisation GPS.", price: "A partir de 450,000 DA" },
          { name: "App Interne", desc: "Communication equipe, gestion RH, pointage, workflows.", price: "A partir de 300,000 DA" }
        ]
      },

      features: {
        title: "Fonctionnalites Incluses",
        list: [
          "Notifications push",
          "Mode hors-ligne",
          "Geolocalisation GPS",
          "Paiement integre CIB",
          "Authentification securisee",
          "Analytics et stats",
          "Backend cloud",
          "Panel administration web"
        ]
      },

      portfolio: {
        title: "Applications Realisees a Setif",
        apps: [
          { name: "SetifExpress", type: "Livraison", result: "5000+ telechargements", rating: "4.7/5" },
          { name: "GestionPro", type: "App Metier", result: "15 entreprises equipees", rating: "4.8/5" },
          { name: "ShopSetif", type: "E-commerce", result: "+200 commandes/jour", rating: "4.6/5" }
        ]
      },

      process: {
        title: "Etapes de Developpement",
        steps: [
          { num: "1", title: "Analyse", desc: "Rencontre a Setif, definition fonctionnalites, cahier des charges." },
          { num: "2", title: "Design UI/UX", desc: "Maquettes interactives, experience utilisateur optimale." },
          { num: "3", title: "Developpement", desc: "Sprints 2 semaines, demos regulieres, tests qualite." },
          { num: "4", title: "Publication", desc: "Mise en ligne stores, formation, support continu." }
        ]
      },

      pricing: {
        title: "Tarifs Applications Mobiles Setif",
        packages: [
          { name: "App Basique", price: "300,000 DA", features: ["5-10 ecrans", "Backend simple", "1 plateforme", "Support 3 mois"] },
          { name: "App Standard", price: "450,000 DA", features: ["15-25 ecrans", "Backend complet", "iOS + Android", "Support 6 mois"] },
          { name: "App Premium", price: "Sur devis", features: ["Illimite", "Architecture scalable", "Multi-plateforme", "Support 12 mois"] }
        ]
      },

      zones: ["Setif", "El Eulma", "Ain Oulmene", "Ain Arnat", "Bougaa", "Ain Azel", "Salah Bey", "Hammam Soukhna"],

      faq: [
        { q: "Combien coute une application mobile a Setif ?", a: "A partir de 300,000 DA pour une app basique. Devis gratuit personnalise selon vos besoins." },
        { q: "Quel est le delai de developpement ?", a: "3-4 mois pour une app standard. Methode agile avec livrables toutes les 2 semaines." },
        { q: "Gerez-vous la publication sur les stores ?", a: "Oui, nous publions sur App Store et Google Play et gerons les mises a jour." },
        { q: "L'app fonctionnera-t-elle hors connexion ?", a: "Oui, nous integrons un mode offline pour les fonctionnalites critiques." }
      ],

      cta: {
        title: "Creez Votre Application Mobile a Setif",
        desc: "Rencontrez notre equipe dans nos bureaux a Setif. Consultation gratuite et devis detaille.",
        phone: "+213 549 575 512",
        email: "contact@symloop.com"
      },

      keywords: "application mobile setif, developpement app setif, creer application setif, developpeur mobile setif, app ios setif, app android setif, agence mobile setif",
      backToBlog: "Retour au Blog"
    },
    en: {
      metaTitle: "Mobile App Development Setif 2026 | iOS Android | Symloop",
      metaDesc: "Mobile app development in Setif. iOS iPhone, Android, React Native, Flutter apps. Local agency, international expertise. Free quote. Symloop Setif.",
      title: "Mobile Application Development in Setif",
      subtitle: "Custom iOS & Android Apps - Local Mobile Agency since 2020",
      category: "Mobile App Setif",
      date: "January 13, 2026",
      readTime: "9 min",
      author: "Symloop Setif",
      intro: "Need a mobile application in Setif? Symloop develops iOS and Android apps for High Plains businesses.",
      platforms: { title: "Development Platforms", list: [
        { icon: Apple, name: "iOS / iPhone", desc: "Native Swift applications for iPhone and iPad.", tech: "Swift, SwiftUI" },
        { icon: PlayCircle, name: "Android", desc: "Native Kotlin applications for Android smartphones.", tech: "Kotlin, Jetpack" },
        { icon: Code, name: "React Native", desc: "Single codebase for iOS and Android.", tech: "React Native, Expo" },
        { icon: Rocket, name: "Flutter", desc: "High-performance cross-platform applications.", tech: "Flutter, Dart" }
      ]},
      types: { title: "App Types", list: [
        { name: "E-commerce App", desc: "Catalog, cart, payment, push notifications.", price: "From 400,000 DA" },
        { name: "Business App", desc: "Inventory, mobile CRM, invoicing, reporting.", price: "From 350,000 DA" }
      ]},
      features: { title: "Included Features", list: ["Push notifications", "Offline mode", "GPS", "CIB payment", "Secure auth", "Analytics", "Cloud backend", "Web admin panel"] },
      portfolio: { title: "Apps Built in Setif", apps: [{ name: "SetifExpress", type: "Delivery", result: "5000+ downloads", rating: "4.7/5" }] },
      process: { title: "Development Steps", steps: [{ num: "1", title: "Analysis", desc: "Meeting in Setif, feature definition." }] },
      pricing: { title: "Mobile App Rates Setif", packages: [{ name: "Basic App", price: "300,000 DA", features: ["5-10 screens", "Simple backend"] }] },
      zones: ["Setif", "El Eulma", "Ain Oulmene"],
      faq: [{ q: "How much does a mobile app cost in Setif?", a: "From 300,000 DA for a basic app." }],
      cta: { title: "Create Your Mobile App in Setif", desc: "Meet our team at our Setif offices.", phone: "+213 549 575 512", email: "contact@symloop.com" },
      keywords: "mobile app setif, app development setif",
      backToBlog: "Back to Blog"
    },
    ar: {
      metaTitle: "تطوير تطبيقات الجوال سطيف 2026 | iOS Android | Symloop",
      metaDesc: "تطوير تطبيقات جوال في سطيف. iOS، Android، React Native. وكالة محلية. عرض مجاني.",
      title: "تطوير تطبيقات الجوال في سطيف",
      subtitle: "تطبيقات iOS و Android مخصصة",
      category: "تطبيق جوال سطيف",
      date: "13 يناير 2026",
      readTime: "9 دقائق",
      author: "Symloop سطيف",
      intro: "تحتاج تطبيق جوال في سطيف؟ Symloop تطور تطبيقات للشركات المحلية.",
      platforms: { title: "منصات التطوير", list: [{ icon: Apple, name: "iOS", desc: "تطبيقات أصلية.", tech: "Swift" }] },
      types: { title: "أنواع التطبيقات", list: [{ name: "تطبيق تجارة", desc: "كتالوج، سلة، دفع.", price: "من 400,000 دج" }] },
      features: { title: "الميزات", list: ["إشعارات push", "وضع offline", "GPS"] },
      portfolio: { title: "تطبيقات منجزة", apps: [] },
      process: { title: "خطوات التطوير", steps: [] },
      pricing: { title: "أسعار التطبيقات", packages: [] },
      zones: ["سطيف"],
      faq: [{ q: "كم يكلف التطبيق؟", a: "من 300,000 دج." }],
      cta: { title: "أنشئ تطبيقك في سطيف", desc: "قابل فريقنا.", phone: "+213 549 575 512", email: "contact@symloop.com" },
      keywords: "تطبيق جوال سطيف",
      backToBlog: "العودة للمدونة"
    }
  };

  const t = content[locale] || content.fr;

  const faqsForSchema = [
    {
      question: "Combien coute une application mobile a Setif ?",
      answer: "Chez Symloop a Setif, une application mobile demarre a partir de 300,000 DA pour une app basique. Le prix varie selon la complexite et les fonctionnalites. Contactez Symloop au +213 549 575 512 pour un devis gratuit personnalise."
    },
    {
      question: "Quel est le delai de developpement d'une app a Setif ?",
      answer: "Symloop livre une application standard en 3-4 mois avec methode agile et livrables toutes les 2 semaines. Les apps simples peuvent etre realisees en 6-8 semaines. Appelez le +213 549 575 512 pour planifier votre projet."
    },
    {
      question: "Symloop gere-t-il la publication sur App Store et Play Store ?",
      answer: "Oui, Symloop gere integralement la publication de votre application sur App Store (iOS) et Google Play (Android), ainsi que toutes les mises a jour futures. Contact : +213 549 575 512."
    },
    {
      question: "Quelles technologies utilise Symloop pour les apps mobiles ?",
      answer: "Symloop utilise React Native, Flutter, Swift (iOS) et Kotlin (Android) selon les besoins du projet. Notre equipe a Setif maitrise les technologies cross-platform et natives. Appelez le +213 549 575 512 pour un conseil technique."
    },
    {
      question: "L'application fonctionnera-t-elle sans connexion internet ?",
      answer: "Oui, Symloop integre un mode hors-ligne pour les fonctionnalites critiques de votre application. Les donnees se synchronisent automatiquement a la reconnexion. Contactez-nous au +213 549 575 512 pour en savoir plus."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Symloop - Developpement Application Mobile Setif",
        "description": t.metaDesc,
        "url": "https://symloop.com/blog/application-mobile-setif-2026",
        "telephone": "+213549575512",
        "address": { "@type": "PostalAddress", "addressLocality": "Alger", "addressCountry": "DZ" },
        "geo": { "@type": "GeoCoordinates", "latitude": "36.7538", "longitude": "3.0588" },
        "areaServed": { "@type": "City", "name": "Setif" },
        "priceRange": "300000 DA - 800000 DA"
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqsForSchema.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Application Mobile Setif 2026", "item": "https://symloop.com/blog/application-mobile-setif-2026" }
        ]
      },
      {
        "@type": "Article",
        "headline": t.title,
        "description": t.metaDesc,
        "author": { "@type": "Organization", "name": "Symloop" },
        "publisher": {
          "@type": "Organization",
          "name": "Symloop",
          "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" }
        },
        "datePublished": "2026-01-13",
        "mainEntityOfPage": "https://symloop.com/blog/application-mobile-setif-2026",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".en-bref", "h1"]
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDesc} />
        <meta name="keywords" content={t.keywords} />
        <link rel="canonical" href="https://symloop.com/blog/application-mobile-setif-2026" />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDesc} />
        <meta name="geo.region" content="DZ-19" />
        <meta name="geo.placename" content="Setif" />
        <meta name="geo.position" content="36.1919;5.4138" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>

      <main className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-black to-pink-600/10" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8">
              <ArrowLeft className="w-4 h-4" />{t.backToBlog}
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm flex items-center gap-2">
                <Smartphone className="w-4 h-4" />{t.category}
              </span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">iOS + Android</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h1>
            <p className="text-xl text-gray-300 mb-8">{t.subtitle}</p>

            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{t.date}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{t.readTime}</span>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            {/* En bref - LLM Optimized Summary */}
            <div className="en-bref bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-bold text-purple-300 mb-2">En bref</h2>
              <p className="text-gray-300">
                Symloop développe des applications mobiles à Sétif et dans l'Est algérien. Flutter, React Native. Apps entreprise, commerce, santé, éducation. Basé à Sétif. Contact&nbsp;: <a href="tel:+213549575512" className="text-purple-400 font-semibold">+213 549 575 512</a>.
              </p>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed mb-12">{t.intro}</p>

            {/* Platforms */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{t.platforms.title}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {t.platforms.list.map((p, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <p.icon className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                    <p className="text-gray-400 text-sm mb-2">{p.desc}</p>
                    <span className="text-xs text-purple-400 bg-purple-500/10 px-2 py-1 rounded">{p.tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Types */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{t.types.title}</h2>
              <div className="space-y-4">
                {t.types.list.map((type, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold mb-1">{type.name}</h3>
                      <p className="text-gray-400 text-sm">{type.desc}</p>
                    </div>
                    <span className="text-purple-400 font-semibold whitespace-nowrap">{type.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-16 bg-purple-500/10 border border-purple-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">{t.features.title}</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {t.features.list.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Portfolio */}
            {t.portfolio.apps.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">{t.portfolio.title}</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {t.portfolio.apps.map((app, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                      <h3 className="font-bold mb-2">{app.name}</h3>
                      <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">{app.type}</span>
                      <div className="mt-3 text-green-400 text-sm">{app.result}</div>
                      <div className="flex items-center justify-center gap-1 mt-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{app.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pricing */}
            {t.pricing.packages.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">{t.pricing.title}</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {t.pricing.packages.map((pkg, i) => (
                    <div key={i} className={`bg-white/5 border rounded-xl p-6 ${i === 1 ? 'border-purple-500/50' : 'border-white/10'}`}>
                      <h3 className="font-bold text-xl mb-2">{pkg.name}</h3>
                      <div className="text-2xl font-bold text-purple-400 mb-4">{pkg.price}</div>
                      <ul className="space-y-2">
                        {pkg.features.map((f, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-purple-400" />{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Zones */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">Zones Servies</h2>
              <div className="flex flex-wrap gap-2">
                {t.zones.map((z, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">{z}</span>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">FAQ</h2>
              <div className="space-y-4">
                {t.faq.map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold mb-2">{item.q}</h3>
                    <p className="text-gray-400">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cross-links */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Articles Recommandés</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/developpement-application-mobile-algerie-2026" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-colors">
                  <h3 className="font-bold group-hover:text-purple-400 transition-colors mb-2">Développement Application Mobile Algérie 2026</h3>
                  <p className="text-sm text-gray-400">Guide complet du développement d'applications mobiles en Algérie.</p>
                  <span className="flex items-center gap-2 mt-3 text-purple-400 text-sm font-medium">Lire l'article <ArrowRight className="w-4 h-4" /></span>
                </Link>
                <Link href="/blog/solutions-informatiques-algerie-2026" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-colors">
                  <h3 className="font-bold group-hover:text-purple-400 transition-colors mb-2">Solutions Informatiques Algérie 2026</h3>
                  <p className="text-sm text-gray-400">Les meilleures solutions informatiques pour les entreprises algériennes.</p>
                  <span className="flex items-center gap-2 mt-3 text-purple-400 text-sm font-medium">Lire l'article <ArrowRight className="w-4 h-4" /></span>
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">{t.cta.title}</h2>
              <p className="text-gray-300 mb-6">{t.cta.desc}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={`tel:${t.cta.phone}`} className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-medium">
                  <Phone className="w-5 h-5" />{t.cta.phone}
                </a>
                <a href={`mailto:${t.cta.email}`} className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg">
                  <Mail className="w-5 h-5" />{t.cta.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
