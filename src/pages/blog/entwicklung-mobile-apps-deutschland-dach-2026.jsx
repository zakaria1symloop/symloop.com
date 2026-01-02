import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function MobileAppDevelopmentGermanyDACH() {
  const router = useRouter();
  const { locale } = router;

  // Multi-language content
  const content = {
    fr: {
      title: "Développement d'Applications Mobiles en Allemagne et DACH 2026",
      metaTitle: "Développement Applications Mobiles Allemagne DACH 2026 | iOS Android | Symloop",
      metaDescription: "Agence de développement d'applications mobiles pour l'Allemagne, l'Autriche et la Suisse. Applications iOS, Android et cross-platform. Devis gratuit. Berlin, Munich, Vienne, Zurich.",
      heroSubtitle: "Votre partenaire technologique pour le marché germanophone",
      intro: "Le marché DACH (Allemagne, Autriche, Suisse) représente la plus grande économie d'Europe avec plus de 100 millions de consommateurs à fort pouvoir d'achat. Le développement d'applications mobiles de qualité allemande est devenu un standard d'excellence reconnu mondialement, offrant des opportunités exceptionnelles pour les entreprises ambitieuses.",

      whyDACHTitle: "Pourquoi le Marché DACH en 2026 ?",
      whyDACHPoints: [
        "L'Allemagne est la 4ème économie mondiale et le plus grand marché européen",
        "La Suisse a le PIB par habitant parmi les plus élevés au monde",
        "Le marché des apps DACH atteindra 15 milliards d'euros en 2026",
        "Taux de pénétration smartphone de 88% avec des utilisateurs exigeants",
        "Standards de qualité et de sécurité des données parmi les plus stricts (RGPD)"
      ],

      servicesTitle: "Nos Services de Développement Mobile",
      services: [
        {
          title: "Applications iOS Native",
          description: "Développement Swift et SwiftUI pour iPhone et iPad, conforme aux standards allemands de qualité et sécurité."
        },
        {
          title: "Applications Android Native",
          description: "Développement Kotlin haute performance pour le marché Android dominant en Allemagne (65% de part de marché)."
        },
        {
          title: "Applications Cross-Platform",
          description: "React Native et Flutter pour un déploiement rapide iOS/Android avec code partagé et performance native."
        },
        {
          title: "Applications Enterprise B2B",
          description: "Solutions mobiles professionnelles pour l'industrie allemande : Industrie 4.0, logistique, finance."
        }
      ],

      citiesTitle: "Nous Intervenons Dans Toute la Région DACH",
      cities: [
        { name: "Berlin", description: "Capitale des startups et de l'innovation" },
        { name: "Munich", description: "Hub technologique et siège de BMW, Siemens" },
        { name: "Francfort", description: "Centre financier européen" },
        { name: "Hambourg", description: "Port et commerce international" },
        { name: "Vienne", description: "Capitale autrichienne, smart city" },
        { name: "Zurich", description: "Centre financier suisse, fintech" },
        { name: "Düsseldorf", description: "Centre d'affaires Rhénanie" },
        { name: "Stuttgart", description: "Industrie automobile de pointe" }
      ],

      processTitle: "Notre Méthodologie de Développement",
      process: [
        { step: "1", title: "Analyse Approfondie", description: "Étude du marché DACH et analyse de vos besoins spécifiques" },
        { step: "2", title: "Conception UX/UI", description: "Design sobre et fonctionnel adapté aux préférences germaniques" },
        { step: "3", title: "Développement Agile", description: "Sprints de 2 semaines avec documentation technique complète" },
        { step: "4", title: "Tests Rigoureux", description: "Tests unitaires, d'intégration et conformité RGPD" },
        { step: "5", title: "Déploiement", description: "Publication stores avec localisation allemande parfaite" },
        { step: "6", title: "Support Continu", description: "Maintenance et évolutions avec SLA garanti" }
      ],

      pricingTitle: "Tarifs Développement Mobile Allemagne DACH",
      pricingSubtitle: "Investissement transparent pour votre projet",
      pricingPlans: [
        {
          name: "MVP Startup",
          price: "18 000€",
          duration: "8-10 semaines",
          features: ["Application iOS ou Android", "5-8 écrans", "Backend sécurisé", "Design UI allemand", "Publication store"]
        },
        {
          name: "Application Business",
          price: "45 000€",
          duration: "12-16 semaines",
          features: ["iOS + Android", "15-25 écrans", "Backend robuste", "Conformité RGPD", "Analytics avancés", "Multi-langue DE/EN"]
        },
        {
          name: "Solution Enterprise",
          price: "Sur mesure",
          duration: "20+ semaines",
          features: ["Architecture enterprise", "Haute disponibilité", "Sécurité renforcée", "Intégrations SAP/ERP", "Support dédié 24/7", "SLA premium"]
        }
      ],

      faqTitle: "Questions Fréquentes",
      faqs: [
        {
          question: "Combien coûte une application mobile en Allemagne ?",
          answer: "Le coût d'une application mobile en Allemagne varie de 18 000€ pour un MVP à plus de 150 000€ pour une application enterprise complexe. Nos tarifs sont 30-40% plus compétitifs que les agences berlinoises tout en garantissant une qualité allemande."
        },
        {
          question: "Comment assurez-vous la conformité RGPD ?",
          answer: "Nous intégrons la protection des données dès la conception (Privacy by Design). Nos applications respectent le RGPD, la BDSG allemande et les exigences du BfDI. Documentation complète et DPO consulting inclus."
        },
        {
          question: "Développez-vous des applications en allemand ?",
          answer: "Oui, nous développons des applications multilingues allemand, anglais, français et autres langues. Nos traductions sont réalisées par des locuteurs natifs pour une expérience utilisateur authentique."
        },
        {
          question: "Proposez-vous des intégrations SAP et ERP ?",
          answer: "Oui, nous avons une expertise en intégration SAP, Microsoft Dynamics, Salesforce et autres systèmes ERP. Essentiel pour les applications B2B dans le marché allemand."
        },
        {
          question: "Quelle est la durée de développement typique ?",
          answer: "Un MVP nécessite 8-10 semaines, une application business 12-16 semaines. Les projets enterprise complexes prennent 5-8 mois selon les intégrations requises."
        }
      ],

      ctaTitle: "Lancez Votre Application en Allemagne et DACH",
      ctaDescription: "Obtenez un devis gratuit en 24h pour votre projet d'application mobile.",
      ctaButton: "Demander un Devis Gratuit",

      relatedTitle: "Articles Connexes",
      publishedDate: "Janvier 2026",
      readTime: "12 min de lecture",
      author: "Équipe Symloop"
    },
    en: {
      title: "Mobile App Development in Germany and DACH 2026",
      metaTitle: "Mobile App Development Germany DACH 2026 | iOS Android | Symloop",
      metaDescription: "Mobile app development agency for Germany, Austria and Switzerland. iOS, Android and cross-platform applications. Free quote. Berlin, Munich, Vienna, Zurich.",
      heroSubtitle: "Your technology partner for the German-speaking market",
      intro: "The DACH market (Germany, Austria, Switzerland) represents Europe's largest economy with over 100 million high-purchasing-power consumers. German-quality mobile app development has become a globally recognized standard of excellence, offering exceptional opportunities for ambitious businesses.",

      whyDACHTitle: "Why the DACH Market in 2026?",
      whyDACHPoints: [
        "Germany is the 4th largest economy in the world and the largest European market",
        "Switzerland has one of the highest GDP per capita in the world",
        "The DACH app market will reach 15 billion euros in 2026",
        "88% smartphone penetration rate with demanding users",
        "Among the strictest data quality and security standards (GDPR)"
      ],

      servicesTitle: "Our Mobile Development Services",
      services: [
        {
          title: "Native iOS Applications",
          description: "Swift and SwiftUI development for iPhone and iPad, compliant with German quality and security standards."
        },
        {
          title: "Native Android Applications",
          description: "High-performance Kotlin development for the dominant Android market in Germany (65% market share)."
        },
        {
          title: "Cross-Platform Applications",
          description: "React Native and Flutter for rapid iOS/Android deployment with shared code and native performance."
        },
        {
          title: "B2B Enterprise Applications",
          description: "Professional mobile solutions for German industry: Industry 4.0, logistics, finance."
        }
      ],

      citiesTitle: "We Operate Throughout the DACH Region",
      cities: [
        { name: "Berlin", description: "Startup and innovation capital" },
        { name: "Munich", description: "Tech hub and BMW, Siemens headquarters" },
        { name: "Frankfurt", description: "European financial center" },
        { name: "Hamburg", description: "Port and international trade" },
        { name: "Vienna", description: "Austrian capital, smart city" },
        { name: "Zurich", description: "Swiss financial center, fintech" },
        { name: "Düsseldorf", description: "Rhineland business center" },
        { name: "Stuttgart", description: "Cutting-edge automotive industry" }
      ],

      processTitle: "Our Development Methodology",
      process: [
        { step: "1", title: "In-depth Analysis", description: "DACH market study and analysis of your specific needs" },
        { step: "2", title: "UX/UI Design", description: "Clean and functional design adapted to Germanic preferences" },
        { step: "3", title: "Agile Development", description: "2-week sprints with complete technical documentation" },
        { step: "4", title: "Rigorous Testing", description: "Unit tests, integration tests and GDPR compliance" },
        { step: "5", title: "Deployment", description: "Store publication with perfect German localization" },
        { step: "6", title: "Ongoing Support", description: "Maintenance and updates with guaranteed SLA" }
      ],

      pricingTitle: "Mobile Development Pricing Germany DACH",
      pricingSubtitle: "Transparent investment for your project",
      pricingPlans: [
        {
          name: "MVP Startup",
          price: "€18,000",
          duration: "8-10 weeks",
          features: ["iOS or Android app", "5-8 screens", "Secure backend", "German UI design", "Store publication"]
        },
        {
          name: "Business Application",
          price: "€45,000",
          duration: "12-16 weeks",
          features: ["iOS + Android", "15-25 screens", "Robust backend", "GDPR compliance", "Advanced analytics", "Multi-language DE/EN"]
        },
        {
          name: "Enterprise Solution",
          price: "Custom",
          duration: "20+ weeks",
          features: ["Enterprise architecture", "High availability", "Enhanced security", "SAP/ERP integrations", "24/7 dedicated support", "Premium SLA"]
        }
      ],

      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "How much does a mobile app cost in Germany?",
          answer: "The cost of a mobile app in Germany ranges from €18,000 for an MVP to over €150,000 for a complex enterprise application. Our rates are 30-40% more competitive than Berlin agencies while guaranteeing German quality."
        },
        {
          question: "How do you ensure GDPR compliance?",
          answer: "We integrate data protection from design (Privacy by Design). Our applications comply with GDPR, German BDSG and BfDI requirements. Complete documentation and DPO consulting included."
        },
        {
          question: "Do you develop German-language applications?",
          answer: "Yes, we develop multilingual applications in German, English, French and other languages. Our translations are done by native speakers for an authentic user experience."
        },
        {
          question: "Do you offer SAP and ERP integrations?",
          answer: "Yes, we have expertise in SAP, Microsoft Dynamics, Salesforce and other ERP system integrations. Essential for B2B applications in the German market."
        },
        {
          question: "What is the typical development time?",
          answer: "An MVP requires 8-10 weeks, a business application 12-16 weeks. Complex enterprise projects take 5-8 months depending on required integrations."
        }
      ],

      ctaTitle: "Launch Your App in Germany and DACH",
      ctaDescription: "Get a free quote within 24h for your mobile app project.",
      ctaButton: "Request Free Quote",

      relatedTitle: "Related Articles",
      publishedDate: "January 2026",
      readTime: "12 min read",
      author: "Symloop Team"
    },
    ar: {
      title: "تطوير تطبيقات الهاتف المحمول في ألمانيا ومنطقة DACH 2026",
      metaTitle: "تطوير تطبيقات الهاتف المحمول ألمانيا DACH 2026 | iOS Android | Symloop",
      metaDescription: "وكالة تطوير تطبيقات الهاتف المحمول لألمانيا والنمسا وسويسرا. تطبيقات iOS و Android ومتعددة المنصات. عرض أسعار مجاني. برلين، ميونخ، فيينا، زيورخ.",
      heroSubtitle: "شريكك التكنولوجي للسوق الناطق بالألمانية",
      intro: "يمثل سوق DACH (ألمانيا والنمسا وسويسرا) أكبر اقتصاد في أوروبا مع أكثر من 100 مليون مستهلك بقوة شرائية عالية. أصبح تطوير تطبيقات الهاتف المحمول بجودة ألمانية معيارًا للتميز معترفًا به عالميًا، ويوفر فرصًا استثنائية للشركات الطموحة.",

      whyDACHTitle: "لماذا سوق DACH في 2026؟",
      whyDACHPoints: [
        "ألمانيا هي رابع أكبر اقتصاد في العالم وأكبر سوق أوروبي",
        "سويسرا لديها واحد من أعلى الناتج المحلي الإجمالي للفرد في العالم",
        "سيصل سوق تطبيقات DACH إلى 15 مليار يورو في 2026",
        "معدل انتشار الهواتف الذكية 88% مع مستخدمين متطلبين",
        "من أكثر معايير جودة البيانات والأمان صرامة (GDPR)"
      ],

      servicesTitle: "خدمات تطوير الهاتف المحمول لدينا",
      services: [
        {
          title: "تطبيقات iOS الأصلية",
          description: "تطوير Swift و SwiftUI لـ iPhone و iPad، متوافق مع معايير الجودة والأمان الألمانية."
        },
        {
          title: "تطبيقات Android الأصلية",
          description: "تطوير Kotlin عالي الأداء لسوق Android المهيمن في ألمانيا (65% حصة السوق)."
        },
        {
          title: "تطبيقات متعددة المنصات",
          description: "React Native و Flutter للنشر السريع على iOS/Android مع كود مشترك وأداء أصلي."
        },
        {
          title: "تطبيقات المؤسسات B2B",
          description: "حلول محمولة احترافية للصناعة الألمانية: الصناعة 4.0، اللوجستيات، التمويل."
        }
      ],

      citiesTitle: "نعمل في جميع أنحاء منطقة DACH",
      cities: [
        { name: "برلين", description: "عاصمة الشركات الناشئة والابتكار" },
        { name: "ميونخ", description: "مركز تقني ومقر BMW و Siemens" },
        { name: "فرانكفورت", description: "المركز المالي الأوروبي" },
        { name: "هامبورغ", description: "الميناء والتجارة الدولية" },
        { name: "فيينا", description: "العاصمة النمساوية، المدينة الذكية" },
        { name: "زيورخ", description: "المركز المالي السويسري، التكنولوجيا المالية" },
        { name: "دوسلدورف", description: "مركز أعمال الراين" },
        { name: "شتوتغارت", description: "صناعة السيارات المتقدمة" }
      ],

      processTitle: "منهجية التطوير لدينا",
      process: [
        { step: "1", title: "تحليل معمق", description: "دراسة سوق DACH وتحليل احتياجاتك المحددة" },
        { step: "2", title: "تصميم UX/UI", description: "تصميم نظيف ووظيفي مكيف للتفضيلات الألمانية" },
        { step: "3", title: "التطوير الرشيق", description: "سباقات لمدة أسبوعين مع توثيق تقني كامل" },
        { step: "4", title: "اختبار صارم", description: "اختبارات الوحدة والتكامل والامتثال لـ GDPR" },
        { step: "5", title: "النشر", description: "النشر على المتاجر مع توطين ألماني مثالي" },
        { step: "6", title: "الدعم المستمر", description: "الصيانة والتحديثات مع SLA مضمون" }
      ],

      pricingTitle: "أسعار تطوير الهاتف المحمول ألمانيا DACH",
      pricingSubtitle: "استثمار شفاف لمشروعك",
      pricingPlans: [
        {
          name: "MVP للشركات الناشئة",
          price: "18,000€",
          duration: "8-10 أسابيع",
          features: ["تطبيق iOS أو Android", "5-8 شاشات", "خلفية آمنة", "تصميم UI ألماني", "نشر في المتجر"]
        },
        {
          name: "تطبيق الأعمال",
          price: "45,000€",
          duration: "12-16 أسبوع",
          features: ["iOS + Android", "15-25 شاشة", "خلفية قوية", "امتثال GDPR", "تحليلات متقدمة", "متعدد اللغات DE/EN"]
        },
        {
          name: "حل المؤسسات",
          price: "مخصص",
          duration: "20+ أسبوع",
          features: ["هندسة المؤسسات", "توفر عالي", "أمان معزز", "تكاملات SAP/ERP", "دعم مخصص 24/7", "SLA متميز"]
        }
      ],

      faqTitle: "الأسئلة الشائعة",
      faqs: [
        {
          question: "كم تكلفة تطبيق الهاتف المحمول في ألمانيا؟",
          answer: "تتراوح تكلفة تطبيق الهاتف المحمول في ألمانيا من 18,000€ لـ MVP إلى أكثر من 150,000€ لتطبيق مؤسسي معقد. أسعارنا أكثر تنافسية بنسبة 30-40% من وكالات برلين مع ضمان الجودة الألمانية."
        },
        {
          question: "كيف تضمنون الامتثال لـ GDPR؟",
          answer: "نقوم بدمج حماية البيانات من التصميم (Privacy by Design). تمتثل تطبيقاتنا لـ GDPR و BDSG الألماني ومتطلبات BfDI. التوثيق الكامل واستشارات DPO مشمولة."
        },
        {
          question: "هل تطورون تطبيقات باللغة الألمانية؟",
          answer: "نعم، نطور تطبيقات متعددة اللغات بالألمانية والإنجليزية والفرنسية ولغات أخرى. يتم إجراء ترجماتنا بواسطة متحدثين أصليين لتجربة مستخدم أصيلة."
        },
        {
          question: "هل تقدمون تكاملات SAP و ERP؟",
          answer: "نعم، لدينا خبرة في تكامل SAP و Microsoft Dynamics و Salesforce وأنظمة ERP الأخرى. ضروري لتطبيقات B2B في السوق الألماني."
        },
        {
          question: "ما هو وقت التطوير النموذجي؟",
          answer: "يتطلب MVP 8-10 أسابيع، وتطبيق الأعمال 12-16 أسبوعًا. تستغرق مشاريع المؤسسات المعقدة 5-8 أشهر حسب التكاملات المطلوبة."
        }
      ],

      ctaTitle: "أطلق تطبيقك في ألمانيا ومنطقة DACH",
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
      "@id": `https://symloop.com/${locale}/blog/entwicklung-mobile-apps-deutschland-dach-2026`
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
    "name": "Symloop - Mobile App Development Germany DACH",
    "description": c.metaDescription,
    "url": "https://symloop.com",
    "areaServed": ["Germany", "Austria", "Switzerland", "Berlin", "Munich", "Vienna", "Zurich"],
    "serviceType": "Mobile Application Development",
    "priceRange": "€€€"
  };

  return (
    <>
      <Head>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDescription} />
        <meta name="keywords" content="App Entwicklung Deutschland, mobile app development Germany, Entwicklung mobiler Anwendungen, iOS Android Berlin Munich, développement application mobile Allemagne, React Native Deutschland, Flutter Schweiz, app developer DACH 2026" />

        {/* Open Graph */}
        <meta property="og:title" content={c.metaTitle} />
        <meta property="og:description" content={c.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://symloop.com/${locale}/blog/entwicklung-mobile-apps-deutschland-dach-2026`} />
        <meta property="og:image" content="https://symloop.com/images/blog/mobile-app-germany-dach-2026.jpg" />
        <meta property="og:locale" content={locale === 'fr' ? 'fr_FR' : locale === 'ar' ? 'ar_AR' : 'en_US'} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={c.metaTitle} />
        <meta name="twitter:description" content={c.metaDescription} />

        {/* Canonical & Hreflang */}
        <link rel="canonical" href={`https://symloop.com/${locale}/blog/entwicklung-mobile-apps-deutschland-dach-2026`} />
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/blog/entwicklung-mobile-apps-deutschland-dach-2026" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/en/blog/entwicklung-mobile-apps-deutschland-dach-2026" />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/blog/entwicklung-mobile-apps-deutschland-dach-2026" />
        <link rel="alternate" hrefLang="x-default" href="https://symloop.com/fr/blog/entwicklung-mobile-apps-deutschland-dach-2026" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }} />
      </Head>

      <article className={`min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-yellow-500/5 to-black/10" />
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
                <span className="text-red-400">{locale === 'fr' ? 'Allemagne DACH' : locale === 'ar' ? 'ألمانيا DACH' : 'Germany DACH'}</span>
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

            {/* Why DACH Market */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">{c.whyDACHTitle}</h2>
              <div className="bg-gradient-to-r from-red-500/10 to-yellow-500/10 rounded-2xl p-8 border border-red-500/20">
                <ul className="space-y-4">
                  {c.whyDACHPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <svg className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-red-500/30 transition-colors">
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
                    <h3 className="text-lg font-semibold text-red-400 mb-1">{city.name}</h3>
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
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
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
                  <div key={index} className={`rounded-2xl p-6 border ${index === 1 ? 'bg-gradient-to-b from-red-500/20 to-yellow-500/10 border-red-500/30' : 'bg-gray-800/50 border-gray-700/50'}`}>
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-red-400 mb-1">{plan.price}</div>
                    <div className="text-sm text-gray-500 mb-6">{plan.duration}</div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                          <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              className="bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 rounded-2xl p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-4">{c.ctaTitle}</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">{c.ctaDescription}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
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
