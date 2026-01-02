import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function MobileAppDevelopmentSpainPortugal() {
  const router = useRouter();
  const { locale } = router;

  // Multi-language content
  const content = {
    fr: {
      title: "Développement d'Applications Mobiles en Espagne et au Portugal 2026",
      metaTitle: "Développement Applications Mobiles Espagne Portugal 2026 | iOS Android | Symloop",
      metaDescription: "Agence de développement d'applications mobiles pour l'Espagne et le Portugal. Applications iOS, Android et cross-platform. Devis gratuit. Madrid, Barcelone, Lisbonne, Porto.",
      heroSubtitle: "Votre partenaire technologique pour le marché ibérique",
      intro: "Le marché ibérique représente une opportunité majeure pour les entreprises souhaitant digitaliser leurs services. Avec plus de 58 millions d'habitants en Espagne et au Portugal, et un taux de pénétration smartphone dépassant 85%, le développement d'applications mobiles est devenu essentiel pour conquérir ces marchés dynamiques.",

      whyIberianTitle: "Pourquoi le Marché Ibérique en 2026 ?",
      whyIberianPoints: [
        "L'Espagne est le 5ème marché e-commerce européen avec une croissance de 25% par an",
        "Le Portugal est un hub technologique émergent avec des startups innovantes",
        "Les utilisateurs ibériques passent en moyenne 4h par jour sur leurs applications",
        "Le marché des applications mobiles ibérique atteindra 8 milliards d'euros en 2026",
        "Fort potentiel d'expansion vers l'Amérique Latine grâce à la langue commune"
      ],

      servicesTitle: "Nos Services de Développement Mobile",
      services: [
        {
          title: "Applications iOS Native",
          description: "Développement Swift et SwiftUI pour iPhone et iPad, optimisé pour le marché premium espagnol et portugais."
        },
        {
          title: "Applications Android Native",
          description: "Développement Kotlin performant pour atteindre 70% des utilisateurs mobiles ibériques."
        },
        {
          title: "Applications Cross-Platform",
          description: "React Native et Flutter pour un déploiement rapide sur les deux plateformes avec un budget optimisé."
        },
        {
          title: "Applications E-commerce",
          description: "Solutions mobiles de vente en ligne avec paiement sécurisé adapté au marché espagnol et portugais."
        }
      ],

      citiesTitle: "Nous Intervenons Dans Toute la Péninsule Ibérique",
      cities: [
        { name: "Madrid", description: "Capitale économique espagnole, hub fintech et startups" },
        { name: "Barcelone", description: "Centre technologique méditerranéen et ville smart city" },
        { name: "Lisbonne", description: "Capitale portugaise, écosystème Web Summit" },
        { name: "Porto", description: "Hub tech émergent du nord du Portugal" },
        { name: "Valence", description: "Pôle d'innovation et d'entrepreneuriat" },
        { name: "Séville", description: "Centre économique de l'Andalousie" },
        { name: "Bilbao", description: "Industrie 4.0 et transformation digitale" },
        { name: "Malaga", description: "Silicon Valley européenne émergente" }
      ],

      processTitle: "Notre Méthodologie de Développement",
      process: [
        { step: "1", title: "Analyse du Marché", description: "Étude approfondie du marché ibérique et de vos concurrents locaux" },
        { step: "2", title: "Conception UX/UI", description: "Design adapté aux préférences des utilisateurs espagnols et portugais" },
        { step: "3", title: "Développement Agile", description: "Sprints de 2 semaines avec démonstrations régulières" },
        { step: "4", title: "Tests Localisés", description: "Tests avec des utilisateurs réels en Espagne et au Portugal" },
        { step: "5", title: "Lancement", description: "Publication sur les stores avec ASO optimisé pour l'ibérique" },
        { step: "6", title: "Maintenance", description: "Support continu et mises à jour régulières" }
      ],

      pricingTitle: "Tarifs Développement Mobile Espagne Portugal",
      pricingSubtitle: "Investissement transparent pour votre projet",
      pricingPlans: [
        {
          name: "MVP Startup",
          price: "15 000€",
          duration: "6-8 semaines",
          features: ["Application iOS ou Android", "5-8 écrans", "Backend basique", "Design UI moderne", "Publication store"]
        },
        {
          name: "Application Business",
          price: "35 000€",
          duration: "10-14 semaines",
          features: ["iOS + Android", "15-25 écrans", "Backend robuste", "Intégration API", "Analytics avancés", "Multi-langue ES/PT"]
        },
        {
          name: "Solution Enterprise",
          price: "Sur mesure",
          duration: "16+ semaines",
          features: ["Architecture complexe", "Haute disponibilité", "Sécurité renforcée", "Intégrations multiples", "Support dédié", "SLA garanti"]
        }
      ],

      faqTitle: "Questions Fréquentes",
      faqs: [
        {
          question: "Combien coûte une application mobile en Espagne ?",
          answer: "Le coût d'une application mobile en Espagne varie de 15 000€ pour un MVP à plus de 100 000€ pour une application enterprise complexe. Nos tarifs sont 30-40% plus compétitifs que les agences madrilènes tout en garantissant une qualité européenne."
        },
        {
          question: "Quelle est la durée de développement d'une app en 2026 ?",
          answer: "Un MVP peut être développé en 6-8 semaines, une application business en 10-14 semaines. Les projets enterprise nécessitent généralement 4-6 mois selon la complexité."
        },
        {
          question: "Développez-vous des applications bilingues espagnol/portugais ?",
          answer: "Oui, nous développons des applications multilingues espagnol, portugais, catalan, basque et galicien. La localisation est essentielle pour réussir sur le marché ibérique."
        },
        {
          question: "Comment gérez-vous les paiements pour le marché ibérique ?",
          answer: "Nous intégrons les solutions de paiement préférées des Ibériques : Bizum (Espagne), MB Way (Portugal), cartes bancaires, PayPal et Apple/Google Pay."
        },
        {
          question: "Proposez-vous la maintenance après le lancement ?",
          answer: "Oui, nous proposons des contrats de maintenance incluant les mises à jour de sécurité, corrections de bugs, optimisations et nouvelles fonctionnalités."
        }
      ],

      ctaTitle: "Lancez Votre Application en Espagne et au Portugal",
      ctaDescription: "Obtenez un devis gratuit en 24h pour votre projet d'application mobile.",
      ctaButton: "Demander un Devis Gratuit",

      relatedTitle: "Articles Connexes",
      publishedDate: "Janvier 2026",
      readTime: "12 min de lecture",
      author: "Équipe Symloop"
    },
    en: {
      title: "Mobile App Development in Spain and Portugal 2026",
      metaTitle: "Mobile App Development Spain Portugal 2026 | iOS Android | Symloop",
      metaDescription: "Mobile app development agency for Spain and Portugal. iOS, Android and cross-platform applications. Free quote. Madrid, Barcelona, Lisbon, Porto.",
      heroSubtitle: "Your technology partner for the Iberian market",
      intro: "The Iberian market represents a major opportunity for companies looking to digitize their services. With over 58 million inhabitants in Spain and Portugal, and a smartphone penetration rate exceeding 85%, mobile app development has become essential to conquer these dynamic markets.",

      whyIberianTitle: "Why the Iberian Market in 2026?",
      whyIberianPoints: [
        "Spain is the 5th largest e-commerce market in Europe with 25% annual growth",
        "Portugal is an emerging tech hub with innovative startups",
        "Iberian users spend an average of 4 hours per day on their apps",
        "The Iberian mobile app market will reach 8 billion euros in 2026",
        "Strong potential for expansion to Latin America through common language"
      ],

      servicesTitle: "Our Mobile Development Services",
      services: [
        {
          title: "Native iOS Applications",
          description: "Swift and SwiftUI development for iPhone and iPad, optimized for the Spanish and Portuguese premium market."
        },
        {
          title: "Native Android Applications",
          description: "High-performance Kotlin development to reach 70% of Iberian mobile users."
        },
        {
          title: "Cross-Platform Applications",
          description: "React Native and Flutter for rapid deployment on both platforms with an optimized budget."
        },
        {
          title: "E-commerce Applications",
          description: "Mobile online sales solutions with secure payment adapted to the Spanish and Portuguese market."
        }
      ],

      citiesTitle: "We Operate Throughout the Iberian Peninsula",
      cities: [
        { name: "Madrid", description: "Spanish economic capital, fintech and startup hub" },
        { name: "Barcelona", description: "Mediterranean tech center and smart city" },
        { name: "Lisbon", description: "Portuguese capital, Web Summit ecosystem" },
        { name: "Porto", description: "Emerging tech hub in northern Portugal" },
        { name: "Valencia", description: "Innovation and entrepreneurship hub" },
        { name: "Seville", description: "Economic center of Andalusia" },
        { name: "Bilbao", description: "Industry 4.0 and digital transformation" },
        { name: "Malaga", description: "Emerging European Silicon Valley" }
      ],

      processTitle: "Our Development Methodology",
      process: [
        { step: "1", title: "Market Analysis", description: "In-depth study of the Iberian market and your local competitors" },
        { step: "2", title: "UX/UI Design", description: "Design adapted to Spanish and Portuguese user preferences" },
        { step: "3", title: "Agile Development", description: "2-week sprints with regular demonstrations" },
        { step: "4", title: "Localized Testing", description: "Testing with real users in Spain and Portugal" },
        { step: "5", title: "Launch", description: "Store publication with ASO optimized for Iberia" },
        { step: "6", title: "Maintenance", description: "Ongoing support and regular updates" }
      ],

      pricingTitle: "Mobile Development Pricing Spain Portugal",
      pricingSubtitle: "Transparent investment for your project",
      pricingPlans: [
        {
          name: "MVP Startup",
          price: "€15,000",
          duration: "6-8 weeks",
          features: ["iOS or Android app", "5-8 screens", "Basic backend", "Modern UI design", "Store publication"]
        },
        {
          name: "Business Application",
          price: "€35,000",
          duration: "10-14 weeks",
          features: ["iOS + Android", "15-25 screens", "Robust backend", "API integration", "Advanced analytics", "Multi-language ES/PT"]
        },
        {
          name: "Enterprise Solution",
          price: "Custom",
          duration: "16+ weeks",
          features: ["Complex architecture", "High availability", "Enhanced security", "Multiple integrations", "Dedicated support", "Guaranteed SLA"]
        }
      ],

      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "How much does a mobile app cost in Spain?",
          answer: "The cost of a mobile app in Spain ranges from €15,000 for an MVP to over €100,000 for a complex enterprise application. Our rates are 30-40% more competitive than Madrid agencies while guaranteeing European quality."
        },
        {
          question: "What is the development time for an app in 2026?",
          answer: "An MVP can be developed in 6-8 weeks, a business application in 10-14 weeks. Enterprise projects typically require 4-6 months depending on complexity."
        },
        {
          question: "Do you develop bilingual Spanish/Portuguese applications?",
          answer: "Yes, we develop multilingual applications in Spanish, Portuguese, Catalan, Basque and Galician. Localization is essential for success in the Iberian market."
        },
        {
          question: "How do you handle payments for the Iberian market?",
          answer: "We integrate payment solutions preferred by Iberians: Bizum (Spain), MB Way (Portugal), bank cards, PayPal and Apple/Google Pay."
        },
        {
          question: "Do you offer maintenance after launch?",
          answer: "Yes, we offer maintenance contracts including security updates, bug fixes, optimizations and new features."
        }
      ],

      ctaTitle: "Launch Your App in Spain and Portugal",
      ctaDescription: "Get a free quote within 24h for your mobile app project.",
      ctaButton: "Request Free Quote",

      relatedTitle: "Related Articles",
      publishedDate: "January 2026",
      readTime: "12 min read",
      author: "Symloop Team"
    },
    ar: {
      title: "تطوير تطبيقات الهاتف المحمول في إسبانيا والبرتغال 2026",
      metaTitle: "تطوير تطبيقات الهاتف المحمول إسبانيا البرتغال 2026 | iOS Android | Symloop",
      metaDescription: "وكالة تطوير تطبيقات الهاتف المحمول لإسبانيا والبرتغال. تطبيقات iOS و Android ومتعددة المنصات. عرض أسعار مجاني. مدريد، برشلونة، لشبونة، بورتو.",
      heroSubtitle: "شريكك التكنولوجي للسوق الإيبيري",
      intro: "يمثل السوق الإيبيري فرصة كبيرة للشركات التي تسعى لرقمنة خدماتها. مع أكثر من 58 مليون نسمة في إسبانيا والبرتغال، ومعدل انتشار الهواتف الذكية يتجاوز 85%، أصبح تطوير تطبيقات الهاتف المحمول ضروريًا للنجاح في هذه الأسواق الديناميكية.",

      whyIberianTitle: "لماذا السوق الإيبيري في 2026؟",
      whyIberianPoints: [
        "إسبانيا هي خامس أكبر سوق للتجارة الإلكترونية في أوروبا بنمو 25% سنويًا",
        "البرتغال مركز تقني ناشئ مع شركات ناشئة مبتكرة",
        "يقضي المستخدمون الإيبيريون 4 ساعات يوميًا في المتوسط على تطبيقاتهم",
        "سيصل سوق تطبيقات الهاتف المحمول الإيبيري إلى 8 مليارات يورو في 2026",
        "إمكانية قوية للتوسع إلى أمريكا اللاتينية بفضل اللغة المشتركة"
      ],

      servicesTitle: "خدمات تطوير الهاتف المحمول لدينا",
      services: [
        {
          title: "تطبيقات iOS الأصلية",
          description: "تطوير Swift و SwiftUI لـ iPhone و iPad، محسّن للسوق الإسباني والبرتغالي المميز."
        },
        {
          title: "تطبيقات Android الأصلية",
          description: "تطوير Kotlin عالي الأداء للوصول إلى 70% من مستخدمي الهاتف المحمول الإيبيريين."
        },
        {
          title: "تطبيقات متعددة المنصات",
          description: "React Native و Flutter للنشر السريع على كلا المنصتين بميزانية محسّنة."
        },
        {
          title: "تطبيقات التجارة الإلكترونية",
          description: "حلول البيع عبر الإنترنت للهاتف المحمول مع دفع آمن مكيف للسوق الإسباني والبرتغالي."
        }
      ],

      citiesTitle: "نعمل في جميع أنحاء شبه الجزيرة الإيبيرية",
      cities: [
        { name: "مدريد", description: "العاصمة الاقتصادية الإسبانية، مركز التكنولوجيا المالية والشركات الناشئة" },
        { name: "برشلونة", description: "مركز التقنية المتوسطي والمدينة الذكية" },
        { name: "لشبونة", description: "العاصمة البرتغالية، نظام Web Summit البيئي" },
        { name: "بورتو", description: "مركز تقني ناشئ في شمال البرتغال" },
        { name: "فالنسيا", description: "مركز الابتكار وريادة الأعمال" },
        { name: "إشبيلية", description: "المركز الاقتصادي للأندلس" },
        { name: "بلباو", description: "الصناعة 4.0 والتحول الرقمي" },
        { name: "ملقة", description: "وادي السيليكون الأوروبي الناشئ" }
      ],

      processTitle: "منهجية التطوير لدينا",
      process: [
        { step: "1", title: "تحليل السوق", description: "دراسة معمقة للسوق الإيبيري ومنافسيك المحليين" },
        { step: "2", title: "تصميم UX/UI", description: "تصميم مكيف مع تفضيلات المستخدمين الإسبان والبرتغاليين" },
        { step: "3", title: "التطوير الرشيق", description: "سباقات لمدة أسبوعين مع عروض توضيحية منتظمة" },
        { step: "4", title: "اختبار محلي", description: "اختبار مع مستخدمين حقيقيين في إسبانيا والبرتغال" },
        { step: "5", title: "الإطلاق", description: "النشر على المتاجر مع ASO محسّن لإيبيريا" },
        { step: "6", title: "الصيانة", description: "دعم مستمر وتحديثات منتظمة" }
      ],

      pricingTitle: "أسعار تطوير الهاتف المحمول إسبانيا البرتغال",
      pricingSubtitle: "استثمار شفاف لمشروعك",
      pricingPlans: [
        {
          name: "MVP للشركات الناشئة",
          price: "15,000€",
          duration: "6-8 أسابيع",
          features: ["تطبيق iOS أو Android", "5-8 شاشات", "خلفية أساسية", "تصميم UI حديث", "نشر في المتجر"]
        },
        {
          name: "تطبيق الأعمال",
          price: "35,000€",
          duration: "10-14 أسبوع",
          features: ["iOS + Android", "15-25 شاشة", "خلفية قوية", "تكامل API", "تحليلات متقدمة", "متعدد اللغات ES/PT"]
        },
        {
          name: "حل المؤسسات",
          price: "مخصص",
          duration: "16+ أسبوع",
          features: ["هندسة معقدة", "توفر عالي", "أمان معزز", "تكاملات متعددة", "دعم مخصص", "SLA مضمون"]
        }
      ],

      faqTitle: "الأسئلة الشائعة",
      faqs: [
        {
          question: "كم تكلفة تطبيق الهاتف المحمول في إسبانيا؟",
          answer: "تتراوح تكلفة تطبيق الهاتف المحمول في إسبانيا من 15,000€ لـ MVP إلى أكثر من 100,000€ لتطبيق مؤسسي معقد. أسعارنا أكثر تنافسية بنسبة 30-40% من وكالات مدريد مع ضمان الجودة الأوروبية."
        },
        {
          question: "ما هو وقت تطوير التطبيق في 2026؟",
          answer: "يمكن تطوير MVP في 6-8 أسابيع، وتطبيق الأعمال في 10-14 أسبوعًا. تتطلب مشاريع المؤسسات عادةً 4-6 أشهر حسب التعقيد."
        },
        {
          question: "هل تطورون تطبيقات ثنائية اللغة إسبانية/برتغالية؟",
          answer: "نعم، نطور تطبيقات متعددة اللغات بالإسبانية والبرتغالية والكتالونية والباسكية والجاليكية. التوطين ضروري للنجاح في السوق الإيبيري."
        },
        {
          question: "كيف تتعاملون مع المدفوعات للسوق الإيبيري؟",
          answer: "نقوم بدمج حلول الدفع المفضلة لدى الإيبيريين: Bizum (إسبانيا)، MB Way (البرتغال)، البطاقات المصرفية، PayPal و Apple/Google Pay."
        },
        {
          question: "هل تقدمون الصيانة بعد الإطلاق؟",
          answer: "نعم، نقدم عقود صيانة تشمل تحديثات الأمان وإصلاح الأخطاء والتحسينات والميزات الجديدة."
        }
      ],

      ctaTitle: "أطلق تطبيقك في إسبانيا والبرتغال",
      ctaDescription: "احصل على عرض أسعار مجاني خلال 24 ساعة لمشروع تطبيقك المحمول.",
      ctaButton: "اطلب عرض أسعار مجاني",

      relatedTitle: "مقالات ذات صلة",
      publishedDate: "يناير 2026",
      readTime: "12 دقيقة قراءة",
      author: "فريق Symloop"
    }
  };

  const c = content[locale] || content.fr;
  const isRTL = locale === 'ar';

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.metaTitle,
    "description": c.metaDescription,
    "author": {
      "@type": "Organization",
      "name": "Symloop",
      "url": "https://symloop.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Symloop",
      "logo": {
        "@type": "ImageObject",
        "url": "https://symloop.com/images/logo.png"
      }
    },
    "datePublished": "2026-01-01",
    "dateModified": "2026-01-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://symloop.com/${locale}/blog/desarrollo-aplicaciones-moviles-espana-portugal-2026`
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": c.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Symloop - Mobile App Development Spain Portugal",
    "description": c.metaDescription,
    "url": "https://symloop.com",
    "areaServed": ["Spain", "Portugal", "Madrid", "Barcelona", "Lisbon", "Porto"],
    "serviceType": "Mobile Application Development",
    "priceRange": "€€€"
  };

  return (
    <>
      <Head>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDescription} />
        <meta name="keywords" content="desarrollo aplicaciones móviles España, mobile app development Portugal, aplicaciones iOS Android Madrid, développement application mobile Espagne, React Native Barcelona, Flutter Lisbonne, app developer Spain 2026" />

        {/* Open Graph */}
        <meta property="og:title" content={c.metaTitle} />
        <meta property="og:description" content={c.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://symloop.com/${locale}/blog/desarrollo-aplicaciones-moviles-espana-portugal-2026`} />
        <meta property="og:image" content="https://symloop.com/images/blog/mobile-app-spain-portugal-2026.jpg" />
        <meta property="og:locale" content={locale === 'fr' ? 'fr_FR' : locale === 'ar' ? 'ar_AR' : 'en_US'} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={c.metaTitle} />
        <meta name="twitter:description" content={c.metaDescription} />

        {/* Canonical & Hreflang */}
        <link rel="canonical" href={`https://symloop.com/${locale}/blog/desarrollo-aplicaciones-moviles-espana-portugal-2026`} />
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/blog/desarrollo-aplicaciones-moviles-espana-portugal-2026" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/en/blog/desarrollo-aplicaciones-moviles-espana-portugal-2026" />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/blog/desarrollo-aplicaciones-moviles-espana-portugal-2026" />
        <link rel="alternate" hrefLang="x-default" href="https://symloop.com/fr/blog/desarrollo-aplicaciones-moviles-espana-portugal-2026" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }} />
      </Head>

      <article className={`min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-yellow-500/5 to-red-500/10" />
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
                <Link href="/" className="hover:text-white transition-colors">Symloop</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                <span>/</span>
                <span className="text-orange-400">{locale === 'fr' ? 'Espagne Portugal' : locale === 'ar' ? 'إسبانيا البرتغال' : 'Spain Portugal'}</span>
              </nav>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {c.publishedDate}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {c.readTime}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {c.author}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {c.title}
              </h1>
              <p className="text-xl text-gray-300">
                {c.heroSubtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg prose-invert max-w-none mb-16"
            >
              <p className="text-xl text-gray-300 leading-relaxed">
                {c.intro}
              </p>
            </motion.div>

            {/* Why Iberian Market */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">{c.whyIberianTitle}</h2>
              <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl p-8 border border-orange-500/20">
                <ul className="space-y-4">
                  {c.whyIberianPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <svg className="w-6 h-6 text-orange-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">{c.servicesTitle}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {c.services.map((service, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/30 transition-colors">
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Cities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">{c.citiesTitle}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {c.cities.map((city, index) => (
                  <div key={index} className="bg-gray-800/30 rounded-lg p-4 text-center hover:bg-gray-800/50 transition-colors">
                    <h3 className="text-lg font-semibold text-orange-400 mb-1">{city.name}</h3>
                    <p className="text-sm text-gray-500">{city.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">{c.processTitle}</h2>
              <div className="space-y-4">
                {c.process.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 bg-gray-800/30 rounded-xl p-6">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-2">{c.pricingTitle}</h2>
              <p className="text-gray-400 mb-8">{c.pricingSubtitle}</p>
              <div className="grid md:grid-cols-3 gap-6">
                {c.pricingPlans.map((plan, index) => (
                  <div key={index} className={`rounded-2xl p-6 border ${index === 1 ? 'bg-gradient-to-b from-orange-500/20 to-yellow-500/10 border-orange-500/30' : 'bg-gray-800/50 border-gray-700/50'}`}>
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-orange-400 mb-1">{plan.price}</div>
                    <div className="text-sm text-gray-500 mb-6">{plan.duration}</div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                          <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">{c.faqTitle}</h2>
              <div className="space-y-4">
                {c.faqs.map((faq, index) => (
                  <details key={index} className="group bg-gray-800/50 rounded-xl border border-gray-700/50">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                      <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-400">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 rounded-2xl p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-4">{c.ctaTitle}</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">{c.ctaDescription}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                {c.ctaButton}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>
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
