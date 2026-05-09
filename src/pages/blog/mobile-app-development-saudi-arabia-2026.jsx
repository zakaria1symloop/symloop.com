"use client";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArrowLeft, Calendar, Clock, User, MapPin, Code, Smartphone, Brain,
  CheckCircle, Phone, Mail, Building2, Rocket, Users, Shield, Zap,
  Star, Award, Globe, TrendingUp, Heart, Target, Cpu, Database,
  CreditCard, ShoppingCart, BarChart3, Layers, MessageCircle, Briefcase
} from "lucide-react";

export default function MobileAppDevelopmentSaudiArabia2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const content = {
    en: {
      metaTitle: "Mobile App Development in Saudi Arabia 2026 | iOS & Android | Symloop",
      metaDesc: "Leading mobile app development company in Saudi Arabia. Custom iOS, Android, Flutter & React Native apps for Riyadh, Jeddah, Dammam. MADA & STC Pay integration. Free consultation.",
      date: "January 15, 2026",
      readTime: "14 min",
      author: "Symloop Team",
      category: "Mobile App Development",

      hero: {
        title: "Mobile App Development in Saudi Arabia",
        subtitle: "Custom iOS & Android Applications Powering Vision 2030 Digital Transformation",
        backToBlog: "Back to Blog"
      },

      intro: "Saudi Arabia is experiencing an unprecedented digital revolution driven by Vision 2030. With over 36 million internet users, 98% mobile penetration, and a booming e-commerce market exceeding $12 billion, the Kingdom represents one of the most lucrative mobile app markets in the Middle East. Whether you are a startup in Riyadh, an enterprise in Jeddah, or a government entity in Dammam, Symloop delivers world-class mobile applications tailored to the Saudi market with full Arabic RTL support, MADA payment integration, and compliance with CITC regulations.",

      marketStats: {
        title: "Saudi Arabia Mobile Market 2026",
        stats: [
          { value: "36M+", label: "Internet Users (98% penetration)" },
          { value: "95%+", label: "Mobile Penetration Rate" },
          { value: "$12B+", label: "E-commerce Market Size" },
          { value: "75%+", label: "Smartphone Usage Rate" }
        ]
      },

      services: {
        title: "Our Mobile App Development Services",
        list: [
          {
            icon: "Smartphone",
            title: "iOS App Development",
            description: "Native Swift and SwiftUI applications for iPhone and iPad, optimized for the Saudi App Store with full Arabic localization and RTL layouts.",
            features: ["Swift & SwiftUI", "App Store Optimization", "Arabic RTL Support", "Apple Pay Integration", "Push Notifications", "Offline Mode"]
          },
          {
            icon: "Code",
            title: "Android App Development",
            description: "Native Kotlin and Jetpack Compose applications for the dominant Android market in Saudi Arabia, covering all device types and screen sizes.",
            features: ["Kotlin & Jetpack Compose", "Google Play Publishing", "Material Design 3", "MADA Payment Integration", "Firebase Analytics", "Background Services"]
          },
          {
            icon: "Layers",
            title: "Cross-Platform Development (Flutter & React Native)",
            description: "Build once, deploy everywhere. Cost-effective cross-platform solutions that deliver native performance on both iOS and Android simultaneously.",
            features: ["Flutter & Dart", "React Native & Expo", "Single Codebase", "Native Performance", "Hot Reload Development", "40% Faster Delivery"]
          },
          {
            icon: "Target",
            title: "App UI/UX Design",
            description: "User-centered design tailored for Saudi audiences with bilingual Arabic-English interfaces, cultural sensitivity, and accessibility compliance.",
            features: ["Bilingual UI (AR/EN)", "User Research & Testing", "Wireframes & Prototypes", "Design System Creation", "Accessibility (WCAG)", "Motion Design"]
          }
        ]
      },

      payments: {
        title: "Payment Integration for Saudi Arabia",
        description: "We integrate all major payment gateways and methods used in the Kingdom to maximize your app's conversion rates and user trust.",
        methods: [
          { name: "MADA", description: "Saudi Arabia's national payment network with over 30 million cards in circulation. Essential for any KSA-focused app." },
          { name: "STC Pay", description: "The leading digital wallet in Saudi Arabia with millions of active users. Seamless mobile-first payment experience." },
          { name: "Tabby", description: "Buy Now, Pay Later solution popular among Saudi consumers. Split payments into 4 interest-free installments." },
          { name: "Tamara", description: "BNPL platform licensed by SAMA. Trusted by major Saudi retailers for flexible payment options." },
          { name: "Apple Pay", description: "Contactless payment widely adopted in the Kingdom. One-tap checkout for iOS applications." }
        ]
      },

      cities: {
        title: "Cities We Serve Across Saudi Arabia",
        list: [
          { name: "Riyadh" },
          { name: "Jeddah" },
          { name: "Dammam" },
          { name: "Mecca" },
          { name: "Medina" }
        ]
      },

      sectors: {
        title: "Industry Sectors We Serve",
        list: [
          { icon: "ShoppingCart", name: "Retail & E-commerce" },
          { icon: "Heart", name: "Healthcare & Telemedicine" },
          { icon: "Brain", name: "Education & E-learning" },
          { icon: "CreditCard", name: "Finance & Fintech" },
          { icon: "Building2", name: "Real Estate & PropTech" },
          { icon: "Briefcase", name: "Logistics & Supply Chain" },
          { icon: "Shield", name: "Government & E-services" },
          { icon: "Globe", name: "Tourism & Hospitality" },
          { icon: "Database", name: "Oil & Gas / Energy" }
        ]
      },

      whyChoose: {
        title: "Why Choose Symloop for Your Saudi App Project",
        reasons: [
          "Deep expertise in Arabic RTL mobile interfaces and bilingual app architecture",
          "Full integration with MADA, STC Pay, Tabby, Tamara, and Apple Pay payment systems",
          "Compliance with CITC regulations and Saudi data residency requirements",
          "Proven track record with 150+ successful mobile projects in the Gulf region",
          "Agile development methodology with bi-weekly demos and transparent communication",
          "Post-launch support including App Store Optimization (ASO) for Saudi market",
          "Scalable cloud architecture on AWS Middle East (Bahrain) region for low latency",
          "Competitive pricing with 40-60% cost savings compared to local Saudi agencies"
        ]
      },

      pricing: {
        title: "Mobile App Development Pricing in Saudi Arabia",
        note: "Transparent pricing tailored for the Saudi market. All packages include Arabic RTL support.",
        currency: "SAR",
        packages: [
          {
            name: "Basic App",
            price: "From 15,000 SAR",
            features: ["5-8 screens", "Single platform (iOS or Android)", "Basic backend & API", "Arabic UI support", "3 months support", "App Store submission"]
          },
          {
            name: "Business App",
            price: "From 35,000 SAR",
            features: ["15-25 screens", "iOS + Android (cross-platform)", "Admin dashboard", "MADA & STC Pay integration", "Push notifications", "6 months support", "Analytics integration"]
          },
          {
            name: "Enterprise App",
            price: "From 75,000 SAR",
            features: ["Unlimited screens", "Native iOS + Android", "Advanced backend & microservices", "Multiple payment gateways", "Real-time features", "12 months support", "Custom integrations", "SLA guarantee"]
          },
          {
            name: "Custom Solution",
            price: "On Quote",
            features: ["Fully tailored architecture", "AI & ML integration", "IoT connectivity", "Enterprise SSO", "Multi-tenant platform", "Dedicated team", "24/7 priority support", "Source code ownership"]
          }
        ]
      },

      faq: {
        title: "Frequently Asked Questions",
        list: [
          {
            q: "How much does it cost to develop a mobile app in Saudi Arabia in 2026?",
            a: "Mobile app development costs in Saudi Arabia range from 15,000 SAR for a basic app to 75,000+ SAR for enterprise solutions. The final cost depends on complexity, number of features, platforms (iOS, Android, or both), and integrations required. We provide free detailed quotations tailored to your specific requirements."
          },
          {
            q: "How long does it take to build a mobile app for the Saudi market?",
            a: "A basic mobile app typically takes 2-3 months, a business app 4-6 months, and an enterprise solution 6-12 months. We use Agile methodology with bi-weekly sprints, so you see progress continuously. MVP (Minimum Viable Product) can be delivered in as little as 8 weeks."
          },
          {
            q: "Do you integrate MADA and STC Pay into mobile apps?",
            a: "Yes, we have extensive experience integrating all major Saudi payment methods including MADA (debit cards), STC Pay (digital wallet), Tabby and Tamara (BNPL), Apple Pay, and international gateways like Stripe and PayPal. We ensure PCI-DSS compliance for all payment processing."
          },
          {
            q: "Can you build apps that comply with Saudi CITC regulations?",
            a: "Absolutely. All our applications comply with CITC (Communications, Space & Technology Commission) regulations, PDPL (Personal Data Protection Law), and Saudi data residency requirements. We deploy on AWS Middle East region and follow all Kingdom-specific compliance standards."
          },
          {
            q: "Do you provide app maintenance and support after launch?",
            a: "Yes, every project includes post-launch support ranging from 3 to 12 months depending on the package. We handle OS updates, bug fixes, performance optimization, App Store and Google Play updates, and feature enhancements. Extended maintenance contracts are also available."
          }
        ]
      },

      cta: {
        title: "Ready to Build Your Mobile App in Saudi Arabia?",
        description: "Get a free consultation and detailed quote for your mobile app project. Our team specializes in the Saudi market with deep expertise in Vision 2030 digital initiatives.",
        button: "Get Free Consultation",
        whatsapp: "+213549575512",
        email: "contact@symloop.com"
      },

      related: {
        title: "Related Articles",
        links: [
          { title: "Web Development Company in Saudi Arabia 2026", slug: "web-development-company-saudi-arabia-2026" },
          { title: "E-commerce Solutions Saudi Arabia with MADA 2026", slug: "ecommerce-solutions-saudi-arabia-mada-2026" },
          { title: "Artificial Intelligence Solutions Saudi Arabia 2026", slug: "artificial-intelligence-solutions-saudi-arabia-2026" }
        ]
      },

      seoKeywords: [
        "mobile app development saudi arabia",
        "app development company riyadh",
        "ios android app development ksa",
        "flutter app development saudi arabia",
        "react native development riyadh",
        "mada payment integration app",
        "stc pay app integration",
        "mobile app development jeddah",
        "mobile app development dammam",
        "saudi arabia app development cost",
        "vision 2030 mobile apps",
        "arabic mobile app development",
        "cross platform app development ksa",
        "enterprise mobile solutions saudi",
        "mobile app agency saudi arabia 2026"
      ]
    },

    ar: {
      metaTitle: "تطوير تطبيقات الجوال في المملكة العربية السعودية 2026 | iOS و Android | Symloop",
      metaDesc: "شركة رائدة في تطوير تطبيقات الجوال في السعودية. تطبيقات iOS و Android و Flutter مخصصة للرياض وجدة والدمام. تكامل مدى وSTC Pay. استشارة مجانية.",
      date: "15 يناير 2026",
      readTime: "14 دقيقة",
      author: "فريق Symloop",
      category: "تطوير تطبيقات الجوال",

      hero: {
        title: "تطوير تطبيقات الجوال في المملكة العربية السعودية",
        subtitle: "تطبيقات iOS و Android مخصصة تدعم التحول الرقمي لرؤية 2030",
        backToBlog: "العودة إلى المدونة"
      },

      intro: "تشهد المملكة العربية السعودية ثورة رقمية غير مسبوقة مدفوعة برؤية 2030. مع أكثر من 36 مليون مستخدم للإنترنت ونسبة انتشار للهواتف المحمولة تتجاوز 98%، وسوق تجارة إلكترونية مزدهر يتجاوز 12 مليار دولار، تمثل المملكة أحد أكثر أسواق تطبيقات الجوال ربحية في الشرق الأوسط. سواء كنت شركة ناشئة في الرياض أو مؤسسة في جدة أو جهة حكومية في الدمام، تقدم Symloop تطبيقات جوال عالمية المستوى مصممة خصيصاً للسوق السعودي مع دعم كامل للغة العربية وواجهات RTL وتكامل الدفع عبر مدى والامتثال لأنظمة هيئة الاتصالات.",

      marketStats: {
        title: "سوق الجوال في المملكة العربية السعودية 2026",
        stats: [
          { value: "+36 مليون", label: "مستخدم إنترنت (نسبة انتشار 98%)" },
          { value: "+95%", label: "نسبة انتشار الهواتف المحمولة" },
          { value: "+12 مليار$", label: "حجم سوق التجارة الإلكترونية" },
          { value: "+75%", label: "نسبة استخدام الهواتف الذكية" }
        ]
      },

      services: {
        title: "خدمات تطوير تطبيقات الجوال",
        list: [
          {
            icon: "Smartphone",
            title: "تطوير تطبيقات iOS",
            description: "تطبيقات أصلية بلغة Swift و SwiftUI لأجهزة iPhone و iPad، محسّنة لمتجر App Store السعودي مع دعم كامل للعربية وتخطيطات RTL.",
            features: ["Swift و SwiftUI", "تحسين متجر التطبيقات", "دعم العربية RTL", "تكامل Apple Pay", "إشعارات فورية", "وضع عدم الاتصال"]
          },
          {
            icon: "Code",
            title: "تطوير تطبيقات Android",
            description: "تطبيقات أصلية بلغة Kotlin و Jetpack Compose لسوق Android المهيمن في المملكة العربية السعودية، تغطي جميع أنواع الأجهزة وأحجام الشاشات.",
            features: ["Kotlin و Jetpack Compose", "نشر Google Play", "Material Design 3", "تكامل الدفع مدى", "تحليلات Firebase", "خدمات الخلفية"]
          },
          {
            icon: "Layers",
            title: "التطوير متعدد المنصات (Flutter و React Native)",
            description: "ابنِ مرة واحدة وانشر في كل مكان. حلول فعالة من حيث التكلفة توفر أداءً أصلياً على iOS و Android في آن واحد.",
            features: ["Flutter و Dart", "React Native و Expo", "قاعدة كود واحدة", "أداء أصلي", "تطوير سريع", "توصيل أسرع بـ 40%"]
          },
          {
            icon: "Target",
            title: "تصميم واجهة وتجربة المستخدم",
            description: "تصميم يركز على المستخدم مصمم خصيصاً للجمهور السعودي مع واجهات ثنائية اللغة عربية-إنجليزية وحساسية ثقافية.",
            features: ["واجهة ثنائية اللغة (عربي/إنجليزي)", "بحث واختبار المستخدم", "إطارات سلكية ونماذج", "إنشاء نظام تصميم", "إمكانية الوصول (WCAG)", "تصميم الحركة"]
          }
        ]
      },

      payments: {
        title: "تكامل المدفوعات في المملكة العربية السعودية",
        description: "نقوم بتكامل جميع بوابات وطرق الدفع الرئيسية المستخدمة في المملكة لتعظيم معدلات التحويل وثقة المستخدمين.",
        methods: [
          { name: "مدى", description: "شبكة الدفع الوطنية السعودية مع أكثر من 30 مليون بطاقة متداولة. ضرورية لأي تطبيق يستهدف السوق السعودي." },
          { name: "STC Pay", description: "المحفظة الرقمية الرائدة في السعودية مع ملايين المستخدمين النشطين. تجربة دفع سلسة عبر الجوال." },
          { name: "تابي (Tabby)", description: "حل الشراء الآن والدفع لاحقاً الشائع بين المستهلكين السعوديين. تقسيم المدفوعات إلى 4 أقساط بدون فوائد." },
          { name: "تمارا (Tamara)", description: "منصة BNPL مرخصة من مؤسسة النقد العربي السعودي (ساما). موثوقة من كبار تجار التجزئة السعوديين." },
          { name: "Apple Pay", description: "الدفع اللاتلامسي المنتشر على نطاق واسع في المملكة. دفع بنقرة واحدة لتطبيقات iOS." }
        ]
      },

      cities: {
        title: "المدن التي نخدمها في المملكة العربية السعودية",
        list: [
          { name: "الرياض" },
          { name: "جدة" },
          { name: "الدمام" },
          { name: "مكة المكرمة" },
          { name: "المدينة المنورة" }
        ]
      },

      sectors: {
        title: "القطاعات الصناعية التي نخدمها",
        list: [
          { icon: "ShoppingCart", name: "التجزئة والتجارة الإلكترونية" },
          { icon: "Heart", name: "الرعاية الصحية والطب عن بُعد" },
          { icon: "Brain", name: "التعليم والتعليم الإلكتروني" },
          { icon: "CreditCard", name: "المالية والتكنولوجيا المالية" },
          { icon: "Building2", name: "العقارات والتكنولوجيا العقارية" },
          { icon: "Briefcase", name: "اللوجستيات وسلسلة التوريد" },
          { icon: "Shield", name: "الحكومة والخدمات الإلكترونية" },
          { icon: "Globe", name: "السياحة والضيافة" },
          { icon: "Database", name: "النفط والغاز / الطاقة" }
        ]
      },

      whyChoose: {
        title: "لماذا تختار Symloop لمشروع تطبيقك السعودي",
        reasons: [
          "خبرة عميقة في واجهات الجوال العربية RTL وهندسة التطبيقات ثنائية اللغة",
          "تكامل كامل مع أنظمة الدفع مدى و STC Pay وتابي وتمارا و Apple Pay",
          "الامتثال لأنظمة هيئة الاتصالات ومتطلبات إقامة البيانات السعودية",
          "سجل حافل بأكثر من 150 مشروع جوال ناجح في منطقة الخليج",
          "منهجية تطوير أجايل مع عروض كل أسبوعين وتواصل شفاف",
          "دعم ما بعد الإطلاق بما في ذلك تحسين متجر التطبيقات (ASO) للسوق السعودي",
          "بنية سحابية قابلة للتوسع على AWS الشرق الأوسط (البحرين) لزمن استجابة منخفض",
          "أسعار تنافسية مع توفير 40-60% مقارنة بالوكالات السعودية المحلية"
        ]
      },

      pricing: {
        title: "أسعار تطوير تطبيقات الجوال في المملكة العربية السعودية",
        note: "أسعار شفافة مصممة للسوق السعودي. جميع الباقات تشمل دعم العربية RTL.",
        currency: "ريال سعودي",
        packages: [
          {
            name: "تطبيق أساسي",
            price: "من 15,000 ريال",
            features: ["5-8 شاشات", "منصة واحدة (iOS أو Android)", "خلفية وAPI أساسي", "دعم واجهة عربية", "دعم 3 أشهر", "نشر في متجر التطبيقات"]
          },
          {
            name: "تطبيق أعمال",
            price: "من 35,000 ريال",
            features: ["15-25 شاشة", "iOS + Android (متعدد المنصات)", "لوحة تحكم إدارية", "تكامل مدى و STC Pay", "إشعارات فورية", "دعم 6 أشهر", "تكامل التحليلات"]
          },
          {
            name: "تطبيق مؤسسي",
            price: "من 75,000 ريال",
            features: ["شاشات غير محدودة", "iOS + Android أصلي", "خلفية متقدمة وخدمات مصغرة", "بوابات دفع متعددة", "ميزات الوقت الفعلي", "دعم 12 شهر", "تكاملات مخصصة", "ضمان SLA"]
          },
          {
            name: "حل مخصص",
            price: "حسب الطلب",
            features: ["هندسة مصممة بالكامل", "تكامل الذكاء الاصطناعي والتعلم الآلي", "اتصال إنترنت الأشياء", "SSO للمؤسسات", "منصة متعددة المستأجرين", "فريق مخصص", "دعم أولوية 24/7", "ملكية كود المصدر"]
          }
        ]
      },

      faq: {
        title: "الأسئلة الشائعة",
        list: [
          {
            q: "كم تكلفة تطوير تطبيق جوال في المملكة العربية السعودية في 2026؟",
            a: "تتراوح تكلفة تطوير تطبيقات الجوال في السعودية من 15,000 ريال للتطبيق الأساسي إلى 75,000+ ريال للحلول المؤسسية. تعتمد التكلفة النهائية على التعقيد وعدد الميزات والمنصات والتكاملات المطلوبة. نقدم عروض أسعار مفصلة مجانية حسب متطلباتك."
          },
          {
            q: "كم يستغرق بناء تطبيق جوال للسوق السعودي؟",
            a: "يستغرق التطبيق الأساسي عادة 2-3 أشهر، وتطبيق الأعمال 4-6 أشهر، والحل المؤسسي 6-12 شهراً. نستخدم منهجية أجايل مع دورات كل أسبوعين لترى التقدم باستمرار. يمكن تسليم MVP في 8 أسابيع فقط."
          },
          {
            q: "هل تقومون بتكامل مدى و STC Pay في تطبيقات الجوال؟",
            a: "نعم، لدينا خبرة واسعة في تكامل جميع طرق الدفع السعودية الرئيسية بما في ذلك مدى (بطاقات الخصم) و STC Pay (المحفظة الرقمية) وتابي وتمارا (اشتر الآن وادفع لاحقاً) و Apple Pay والبوابات الدولية. نضمن الامتثال لمعايير PCI-DSS."
          },
          {
            q: "هل يمكنكم بناء تطبيقات متوافقة مع أنظمة هيئة الاتصالات السعودية؟",
            a: "بالتأكيد. جميع تطبيقاتنا تتوافق مع أنظمة هيئة الاتصالات والفضاء والتقنية (CITC) ونظام حماية البيانات الشخصية (PDPL) ومتطلبات إقامة البيانات السعودية. ننشر على منطقة AWS الشرق الأوسط ونتبع جميع معايير الامتثال الخاصة بالمملكة."
          },
          {
            q: "هل توفرون صيانة ودعم التطبيق بعد الإطلاق؟",
            a: "نعم، كل مشروع يتضمن دعم ما بعد الإطلاق يتراوح من 3 إلى 12 شهراً حسب الباقة. نتعامل مع تحديثات نظام التشغيل وإصلاح الأخطاء وتحسين الأداء وتحديثات المتاجر وتحسينات الميزات. عقود الصيانة الممتدة متاحة أيضاً."
          }
        ]
      },

      cta: {
        title: "هل أنت مستعد لبناء تطبيقك في السعودية؟",
        description: "احصل على استشارة مجانية وعرض أسعار مفصل لمشروع تطبيقك. فريقنا متخصص في السوق السعودي مع خبرة عميقة في مبادرات رؤية 2030 الرقمية.",
        button: "احصل على استشارة مجانية",
        whatsapp: "+213549575512",
        email: "contact@symloop.com"
      },

      related: {
        title: "مقالات ذات صلة",
        links: [
          { title: "شركة تطوير الويب في المملكة العربية السعودية 2026", slug: "web-development-company-saudi-arabia-2026" },
          { title: "حلول التجارة الإلكترونية في السعودية مع مدى 2026", slug: "ecommerce-solutions-saudi-arabia-mada-2026" },
          { title: "حلول الذكاء الاصطناعي في المملكة العربية السعودية 2026", slug: "artificial-intelligence-solutions-saudi-arabia-2026" }
        ]
      },

      seoKeywords: [
        "تطوير تطبيقات الجوال السعودية",
        "شركة تطوير تطبيقات الرياض",
        "تطوير تطبيقات ios android السعودية",
        "تطوير تطبيقات flutter السعودية",
        "تكامل الدفع مدى",
        "تطوير تطبيقات جدة",
        "تطوير تطبيقات الدمام",
        "تكلفة تطوير التطبيقات السعودية",
        "تطبيقات رؤية 2030",
        "تطوير تطبيقات عربية"
      ]
    },

    fr: {
      metaTitle: "Developpement Application Mobile Arabie Saoudite 2026 | iOS & Android | Symloop",
      metaDesc: "Societe leader en developpement d'applications mobiles en Arabie Saoudite. Apps iOS, Android, Flutter personnalisees pour Riyadh, Jeddah, Dammam. Integration MADA & STC Pay. Consultation gratuite.",
      date: "15 Janvier 2026",
      readTime: "14 min",
      author: "Equipe Symloop",
      category: "Developpement Application Mobile",

      hero: {
        title: "Developpement Application Mobile en Arabie Saoudite",
        subtitle: "Applications iOS & Android Sur Mesure au Service de la Transformation Numerique Vision 2030",
        backToBlog: "Retour au Blog"
      },

      intro: "L'Arabie Saoudite connait une revolution numerique sans precedent portee par la Vision 2030. Avec plus de 36 millions d'utilisateurs Internet, un taux de penetration mobile de 98% et un marche e-commerce en plein essor depassant 12 milliards de dollars, le Royaume represente l'un des marches d'applications mobiles les plus lucratifs du Moyen-Orient. Que vous soyez une startup a Riyadh, une entreprise a Jeddah ou un organisme gouvernemental a Dammam, Symloop livre des applications mobiles de classe mondiale adaptees au marche saoudien avec un support complet de l'arabe RTL, l'integration des paiements MADA et la conformite aux reglementations CITC.",

      marketStats: {
        title: "Marche Mobile Arabie Saoudite 2026",
        stats: [
          { value: "36M+", label: "Utilisateurs Internet (98% de penetration)" },
          { value: "95%+", label: "Taux de Penetration Mobile" },
          { value: "$12Mds+", label: "Taille du Marche E-commerce" },
          { value: "75%+", label: "Taux d'Utilisation Smartphone" }
        ]
      },

      services: {
        title: "Nos Services de Developpement d'Applications Mobiles",
        list: [
          {
            icon: "Smartphone",
            title: "Developpement App iOS",
            description: "Applications natives Swift et SwiftUI pour iPhone et iPad, optimisees pour l'App Store saoudien avec localisation arabe complete et layouts RTL.",
            features: ["Swift & SwiftUI", "Optimisation App Store", "Support Arabe RTL", "Integration Apple Pay", "Notifications Push", "Mode Hors-ligne"]
          },
          {
            icon: "Code",
            title: "Developpement App Android",
            description: "Applications natives Kotlin et Jetpack Compose pour le marche Android dominant en Arabie Saoudite, couvrant tous les types d'appareils et tailles d'ecran.",
            features: ["Kotlin & Jetpack Compose", "Publication Google Play", "Material Design 3", "Integration Paiement MADA", "Analytics Firebase", "Services en Arriere-plan"]
          },
          {
            icon: "Layers",
            title: "Developpement Cross-Platform (Flutter & React Native)",
            description: "Developpez une fois, deployez partout. Solutions cross-platform rentables offrant des performances natives sur iOS et Android simultanement.",
            features: ["Flutter & Dart", "React Native & Expo", "Code Unique", "Performance Native", "Developpement Hot Reload", "Livraison 40% Plus Rapide"]
          },
          {
            icon: "Target",
            title: "Design UI/UX d'Application",
            description: "Design centre sur l'utilisateur adapte au public saoudien avec des interfaces bilingues arabe-anglais, sensibilite culturelle et conformite accessibilite.",
            features: ["UI Bilingue (AR/EN)", "Recherche & Tests Utilisateurs", "Wireframes & Prototypes", "Creation Design System", "Accessibilite (WCAG)", "Motion Design"]
          }
        ]
      },

      payments: {
        title: "Integration des Paiements pour l'Arabie Saoudite",
        description: "Nous integrons toutes les principales passerelles et methodes de paiement utilisees dans le Royaume pour maximiser vos taux de conversion et la confiance des utilisateurs.",
        methods: [
          { name: "MADA", description: "Reseau de paiement national saoudien avec plus de 30 millions de cartes en circulation. Essentiel pour toute application ciblent le marche KSA." },
          { name: "STC Pay", description: "Le portefeuille numerique leader en Arabie Saoudite avec des millions d'utilisateurs actifs. Experience de paiement mobile fluide." },
          { name: "Tabby", description: "Solution Achetez Maintenant Payez Plus Tard populaire aupres des consommateurs saoudiens. Paiements fractionnes en 4 sans interets." },
          { name: "Tamara", description: "Plateforme BNPL agreee par SAMA. Approuvee par les grands distributeurs saoudiens pour des options de paiement flexibles." },
          { name: "Apple Pay", description: "Paiement sans contact largement adopte dans le Royaume. Paiement en un clic pour les applications iOS." }
        ]
      },

      cities: {
        title: "Villes Desservies en Arabie Saoudite",
        list: [
          { name: "Riyadh" },
          { name: "Jeddah" },
          { name: "Dammam" },
          { name: "La Mecque" },
          { name: "Medine" }
        ]
      },

      sectors: {
        title: "Secteurs Industriels que Nous Servons",
        list: [
          { icon: "ShoppingCart", name: "Commerce & E-commerce" },
          { icon: "Heart", name: "Sante & Telemedecine" },
          { icon: "Brain", name: "Education & E-learning" },
          { icon: "CreditCard", name: "Finance & Fintech" },
          { icon: "Building2", name: "Immobilier & PropTech" },
          { icon: "Briefcase", name: "Logistique & Chaine d'Approvisionnement" },
          { icon: "Shield", name: "Gouvernement & E-services" },
          { icon: "Globe", name: "Tourisme & Hotellerie" },
          { icon: "Database", name: "Petrole & Gaz / Energie" }
        ]
      },

      whyChoose: {
        title: "Pourquoi Choisir Symloop pour Votre Projet App en Arabie Saoudite",
        reasons: [
          "Expertise approfondie en interfaces mobiles arabes RTL et architecture d'applications bilingues",
          "Integration complete avec les systemes de paiement MADA, STC Pay, Tabby, Tamara et Apple Pay",
          "Conformite aux reglementations CITC et exigences de residence des donnees saoudiennes",
          "Bilan eprouve avec plus de 150 projets mobiles reussis dans la region du Golfe",
          "Methodologie de developpement Agile avec demos bimensuelles et communication transparente",
          "Support post-lancement incluant l'optimisation App Store (ASO) pour le marche saoudien",
          "Architecture cloud evolutive sur AWS Moyen-Orient (Bahrein) pour une faible latence",
          "Prix competitifs avec 40-60% d'economies par rapport aux agences saoudiennes locales"
        ]
      },

      pricing: {
        title: "Tarifs Developpement Application Mobile en Arabie Saoudite",
        note: "Tarification transparente adaptee au marche saoudien. Tous les forfaits incluent le support arabe RTL.",
        currency: "SAR",
        packages: [
          {
            name: "App Basique",
            price: "A partir de 15 000 SAR",
            features: ["5-8 ecrans", "Plateforme unique (iOS ou Android)", "Backend & API basiques", "Support interface arabe", "Support 3 mois", "Soumission App Store"]
          },
          {
            name: "App Business",
            price: "A partir de 35 000 SAR",
            features: ["15-25 ecrans", "iOS + Android (cross-platform)", "Tableau de bord admin", "Integration MADA & STC Pay", "Notifications push", "Support 6 mois", "Integration analytics"]
          },
          {
            name: "App Entreprise",
            price: "A partir de 75 000 SAR",
            features: ["Ecrans illimites", "iOS + Android natif", "Backend avance & microservices", "Passerelles de paiement multiples", "Fonctionnalites temps reel", "Support 12 mois", "Integrations personnalisees", "Garantie SLA"]
          },
          {
            name: "Solution Sur Mesure",
            price: "Sur Devis",
            features: ["Architecture entierement personnalisee", "Integration IA & ML", "Connectivite IoT", "SSO Entreprise", "Plateforme multi-tenant", "Equipe dediee", "Support prioritaire 24/7", "Propriete du code source"]
          }
        ]
      },

      faq: {
        title: "Questions Frequentes",
        list: [
          {
            q: "Combien coute le developpement d'une application mobile en Arabie Saoudite en 2026 ?",
            a: "Les couts de developpement d'applications mobiles en Arabie Saoudite varient de 15 000 SAR pour une app basique a 75 000+ SAR pour les solutions entreprise. Le cout final depend de la complexite, du nombre de fonctionnalites, des plateformes et des integrations requises. Nous fournissons des devis detailles gratuits adaptes a vos besoins specifiques."
          },
          {
            q: "Combien de temps faut-il pour creer une application mobile pour le marche saoudien ?",
            a: "Une application basique prend generalement 2-3 mois, une app business 4-6 mois et une solution entreprise 6-12 mois. Nous utilisons la methodologie Agile avec des sprints bimensuels pour que vous voyiez les progres en continu. Un MVP peut etre livre en seulement 8 semaines."
          },
          {
            q: "Integrez-vous MADA et STC Pay dans les applications mobiles ?",
            a: "Oui, nous avons une vaste experience dans l'integration de toutes les principales methodes de paiement saoudiennes incluant MADA (cartes de debit), STC Pay (portefeuille numerique), Tabby et Tamara (BNPL), Apple Pay et les passerelles internationales. Nous assurons la conformite PCI-DSS pour tout traitement de paiement."
          },
          {
            q: "Pouvez-vous creer des applications conformes aux reglementations CITC saoudiennes ?",
            a: "Absolument. Toutes nos applications sont conformes aux reglementations CITC, au PDPL (loi sur la protection des donnees personnelles) et aux exigences de residence des donnees saoudiennes. Nous deployons sur la region AWS Moyen-Orient et suivons toutes les normes de conformite specifiques au Royaume."
          },
          {
            q: "Proposez-vous la maintenance et le support apres le lancement ?",
            a: "Oui, chaque projet inclut un support post-lancement allant de 3 a 12 mois selon le forfait. Nous gerons les mises a jour OS, corrections de bugs, optimisation des performances, mises a jour des stores et ameliorations fonctionnelles. Des contrats de maintenance etendus sont egalement disponibles."
          }
        ]
      },

      cta: {
        title: "Pret a Creer Votre Application Mobile en Arabie Saoudite ?",
        description: "Obtenez une consultation gratuite et un devis detaille pour votre projet d'application mobile. Notre equipe est specialisee dans le marche saoudien avec une expertise approfondie des initiatives numeriques Vision 2030.",
        button: "Obtenir une Consultation Gratuite",
        whatsapp: "+213549575512",
        email: "contact@symloop.com"
      },

      related: {
        title: "Articles Connexes",
        links: [
          { title: "Societe de Developpement Web en Arabie Saoudite 2026", slug: "web-development-company-saudi-arabia-2026" },
          { title: "Solutions E-commerce Arabie Saoudite avec MADA 2026", slug: "ecommerce-solutions-saudi-arabia-mada-2026" },
          { title: "Solutions Intelligence Artificielle Arabie Saoudite 2026", slug: "artificial-intelligence-solutions-saudi-arabia-2026" }
        ]
      },

      seoKeywords: [
        "developpement application mobile arabie saoudite",
        "societe developpement app riyadh",
        "developpement ios android ksa",
        "developpement flutter arabie saoudite",
        "developpement react native riyadh",
        "integration paiement mada",
        "integration stc pay app",
        "developpement application jeddah",
        "developpement application dammam",
        "cout developpement app arabie saoudite",
        "applications vision 2030",
        "developpement application arabe",
        "developpement cross platform ksa",
        "solutions mobiles entreprise saoudienne",
        "agence application mobile arabie saoudite 2026"
      ]
    }
  };

  const t = content[locale] || content.fr;

  const iconMap = {
    Smartphone, Code, Layers, Target, ShoppingCart, Heart, Brain,
    CreditCard, Building2, Briefcase, Shield, Globe, Database
  };

  const getIcon = (iconName) => iconMap[iconName] || Smartphone;

  // JSON-LD Structured Data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.hero.title,
    "description": t.metaDesc,
    "author": { "@type": "Organization", "name": "Symloop" },
    "publisher": {
      "@type": "Organization",
      "name": "Symloop",
      "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" }
    },
    "datePublished": "2026-01-15",
    "dateModified": "2026-01-15",
    "mainEntityOfPage": "https://symloop.com/blog/mobile-app-development-saudi-arabia-2026",
    "image": "https://symloop.com/logo.png",
    "inLanguage": locale,
    "keywords": t.seoKeywords ? t.seoKeywords.join(', ') : ''
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faq.list.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a }
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Symloop - Mobile App Development Saudi Arabia",
    "description": t.metaDesc,
    "url": "https://symloop.com/blog/mobile-app-development-saudi-arabia-2026",
    "telephone": "+213549575512",
    "email": "contact@symloop.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Riyadh",
      "addressCountry": "SA"
    },
    "areaServed": [
      { "@type": "City", "name": "Riyadh" },
      { "@type": "City", "name": "Jeddah" },
      { "@type": "City", "name": "Dammam" },
      { "@type": "City", "name": "Mecca" },
      { "@type": "City", "name": "Medina" }
    ],
    "priceRange": "15000 SAR - 75000+ SAR",
    "knowsLanguage": ["en", "ar", "fr"]
  };

  return (
    <>
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDesc} />
        <meta name="keywords" content={t.seoKeywords ? t.seoKeywords.join(', ') : ''} />
        <link rel="canonical" href="https://symloop.com/blog/mobile-app-development-saudi-arabia-2026" />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDesc} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/mobile-app-development-saudi-arabia-2026" />
        <meta property="og:image" content="https://symloop.com/logo.png" />
        <meta property="og:locale" content={locale === 'ar' ? 'ar_SA' : locale === 'en' ? 'en_US' : 'fr_FR'} />
        <meta property="og:site_name" content="Symloop" />
        <meta property="article:published_time" content={t.date || "2026-01-15"} />
        <meta property="article:modified_time" content="2026-02-07" />
        <meta property="article:section" content={t.category} />
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content="Riyadh" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Symloop" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/en/blog/mobile-app-development-saudi-arabia-2026" />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/blog/mobile-app-development-saudi-arabia-2026" />
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/blog/mobile-app-development-saudi-arabia-2026" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://symloop.com" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" }, { "@type": "ListItem", "position": 3, "name": t.hero.title }] }) }} />
      </Head>

      <main className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>

        {/* ============================================= */}
        {/* SECTION 1: HERO                               */}
        {/* ============================================= */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-black to-emerald-900/10" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-56 h-56 bg-emerald-600/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />{t.hero.backToBlog}
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4" />Saudi Arabia
              </span>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm flex items-center gap-2">
                <Smartphone className="w-4 h-4" />{t.category}
              </span>
              <span className="px-3 py-1 bg-green-700/30 text-green-300 rounded-full text-sm">Vision 2030</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">{t.hero.subtitle}</p>

            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{t.date}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{t.readTime}</span>
              <span className="flex items-center gap-2"><User className="w-4 h-4" />{t.author}</span>
            </div>
          </div>
        </section>

        {/* Intro Paragraph */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-xl text-gray-300 leading-relaxed">{t.intro}</p>
            <p className="text-base text-gray-400 mt-6 leading-relaxed">
              {locale === 'ar'
                ? <>استكشف أيضاً <Link href="/services" className="text-cyan-400 hover:underline">خدماتنا الكاملة</Link> بما في ذلك <Link href="/blog/web-development-company-saudi-arabia-2026" className="text-cyan-400 hover:underline">تطوير المواقع في السعودية</Link> و<Link href="/blog/mobile-app-development-kuwait-2026" className="text-cyan-400 hover:underline">تطوير التطبيقات في الكويت</Link>.</>
                : <>Explore our full range of <Link href="/services" className="text-cyan-400 hover:underline">IT services</Link>, including <Link href="/blog/web-development-company-saudi-arabia-2026" className="text-cyan-400 hover:underline">web development in Saudi Arabia</Link> and <Link href="/blog/mobile-app-development-kuwait-2026" className="text-cyan-400 hover:underline">mobile app development in Kuwait</Link>.</>
              }
            </p>
          </div>
        </section>

        {/* ============================================= */}
        {/* SECTION 2: MARKET STATS                       */}
        {/* ============================================= */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center flex items-center justify-center gap-3">
              <TrendingUp className="w-8 h-8 text-emerald-400" />
              {t.marketStats.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {t.marketStats.stats.map((stat, i) => (
                <div key={i} className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 text-center hover:border-emerald-500/40 transition-colors">
                  <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* SECTION 3: SERVICES                           */}
        {/* ============================================= */}
        <section className="py-16 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center">{t.services.title}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {t.services.list.map((service, i) => {
                const IconComponent = getIcon(service.icon);
                return (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-emerald-400" />
                      </div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-5 leading-relaxed">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, j) => (
                        <span key={j} className="px-3 py-1 bg-emerald-500/10 text-emerald-300 rounded-full text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* ==================== MID-CONTENT CTA ==================== */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-cyan-900/30 to-teal-900/20 border border-cyan-500/20 rounded-xl p-6 text-center">
              <p className="text-white text-lg mb-3">
                {locale === 'ar' ? 'هل تحتاج استشارة مجانية لمشروعك؟' : 'Need a free consultation for your project?'}
              </p>
              <Link href="/services" className="inline-flex items-center gap-2 bg-cyan-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-cyan-600 transition-colors text-sm">
                {locale === 'ar' ? 'تعرف على خدماتنا' : 'Explore Our Services'}
                <Rocket className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
        {/* ============================================= */}
        {/* SECTION 4: PAYMENT INTEGRATION                */}
        {/* ============================================= */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                <CreditCard className="w-8 h-8 text-emerald-400" />
                {t.payments.title}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">{t.payments.description}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.payments.methods.map((method, i) => (
                <div key={i} className={`bg-white/5 border rounded-2xl p-6 hover:border-emerald-500/40 transition-colors ${i === 0 ? 'border-emerald-500/30 md:col-span-2 lg:col-span-1' : 'border-white/10'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="font-bold text-lg">{method.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* SECTION 5: CITIES COVERED                     */}
        {/* ============================================= */}
        <section className="py-16 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center flex items-center justify-center gap-3">
              <MapPin className="w-8 h-8 text-emerald-400" />
              {t.cities.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {t.cities.list.map((city, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-emerald-500/30 transition-colors">
                  <MapPin className="w-6 h-6 text-emerald-400 mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-1">{city.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* SECTION 6: INDUSTRY SECTORS                   */}
        {/* ============================================= */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center">{t.sectors.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {t.sectors.list.map((sector, i) => {
                const SectorIcon = getIcon(sector.icon);
                return (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4 hover:border-emerald-500/30 transition-colors">
                    <div className="w-10 h-10 bg-emerald-500/15 rounded-lg flex items-center justify-center flex-shrink-0">
                      <SectorIcon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="font-medium text-sm">{sector.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* SECTION 7: WHY CHOOSE SYMLOOP                 */}
        {/* ============================================= */}
        <section className="py-16 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center flex items-center justify-center gap-3">
              <Award className="w-8 h-8 text-emerald-400" />
              {t.whyChoose.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {t.whyChoose.reasons.map((reason, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-500/20 transition-colors">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* SECTION 8: PRICING TABLE                      */}
        {/* ============================================= */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">{t.pricing.title}</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">{t.pricing.note}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.pricing.packages.map((pkg, i) => (
                <div key={i} className={`bg-white/5 border rounded-2xl p-6 flex flex-col ${i === 1 ? 'border-emerald-500/50 ring-1 ring-emerald-500/20' : 'border-white/10'}`}>
                  {i === 1 && (
                    <span className="bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-full self-start mb-4">
                      {locale === 'ar' ? 'الأكثر شيوعاً' : locale === 'fr' ? 'Populaire' : 'Popular'}
                    </span>
                  )}
                  <h3 className="font-bold text-xl mb-2">{pkg.name}</h3>
                  <div className="text-2xl font-bold text-emerald-400 mb-5">{pkg.price}</div>
                  <ul className="space-y-3 flex-grow">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/213549575512?text=${encodeURIComponent(locale === 'ar' ? `مرحباً، أود الاستفسار عن باقة ${pkg.name} لتطوير تطبيق جوال في السعودية` : locale === 'fr' ? `Bonjour, je suis interesse par le forfait ${pkg.name} pour le developpement d'une application mobile en Arabie Saoudite` : `Hello, I'm interested in the ${pkg.name} package for mobile app development in Saudi Arabia`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 block text-center py-3 rounded-xl font-medium transition-colors ${i === 1 ? 'bg-emerald-500 hover:bg-emerald-600 text-black' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                  >
                    {t.cta.button}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* SECTION 9: FAQ                                */}
        {/* ============================================= */}
        <section className="py-16 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center flex items-center justify-center gap-3">
              <MessageCircle className="w-8 h-8 text-emerald-400" />
              {t.faq.title}
            </h2>
            <div className="space-y-4">
              {t.faq.list.map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/20 transition-colors">
                  <h3 className="font-bold text-lg mb-3 text-emerald-300">{item.q}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* SECTION 10: CTA                               */}
        {/* ============================================= */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-br from-emerald-600/20 via-emerald-500/10 to-green-900/20 border border-emerald-500/30 rounded-3xl p-10 text-center">
              <Rocket className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">{t.cta.description}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={`https://wa.me/213549575512?text=${encodeURIComponent(locale === 'ar' ? 'مرحباً، أود استشارة بخصوص تطوير تطبيق جوال في السعودية' : locale === 'fr' ? 'Bonjour, je souhaite une consultation pour le developpement d\'une application mobile en Arabie Saoudite' : 'Hello, I would like a consultation about mobile app development in Saudi Arabia')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black rounded-xl font-semibold transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a
                  href={`tel:${t.cta.whatsapp}`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-medium transition-colors"
                >
                  <Phone className="w-5 h-5" />{t.cta.whatsapp}
                </a>
                <a
                  href={`mailto:${t.cta.email}`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-medium transition-colors"
                >
                  <Mail className="w-5 h-5" />{t.cta.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* SECTION 11: RELATED ARTICLES                  */}
        {/* ============================================= */}
        <section className="py-16 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8 text-center">{t.related.title}</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {t.related.links.map((link, i) => (
                <Link
                  key={i}
                  href={`/blog/${link.slug}`}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-500/30 hover:bg-white/[0.08] transition-colors group"
                >
                  <div className="flex items-center gap-2 text-emerald-400 text-xs mb-3">
                    <Globe className="w-4 h-4" />
                    Saudi Arabia
                  </div>
                  <h3 className="font-medium text-sm text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                    {link.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-emerald-400 text-xs mt-3">
                    {locale === 'ar' ? 'اقرأ المزيد' : locale === 'fr' ? 'Lire la suite' : 'Read more'} &rarr;
                  </span>
                </Link>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-gray-400 mt-8 mb-4">
              {locale === 'ar' ? 'المزيد من خدماتنا في المنطقة' : 'More From Our Regional Coverage'}
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              <Link href="/blog/mobile-app-development-uae-dubai-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'تطوير التطبيقات في الإمارات' : 'Mobile App Development in the UAE'}
                </h3>
                <span className="text-cyan-500 text-sm flex items-center gap-1">
                  {locale === 'ar' ? 'اقرأ المزيد' : 'Read more'}
                  <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? '' : 'rotate-180'}`} />
                </span>
              </Link>
              <Link href="/blog/web-development-company-kuwait-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'تطوير المواقع في الكويت' : 'Web Development in Kuwait'}
                </h3>
                <span className="text-cyan-500 text-sm flex items-center gap-1">
                  {locale === 'ar' ? 'اقرأ المزيد' : 'Read more'}
                  <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? '' : 'rotate-180'}`} />
                </span>
              </Link>
              <Link href="/blog/ecommerce-solutions-saudi-arabia-mada-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'حلول التجارة الإلكترونية في السعودية' : 'E-Commerce Solutions in Saudi Arabia'}
                </h3>
                <span className="text-cyan-500 text-sm flex items-center gap-1">
                  {locale === 'ar' ? 'اقرأ المزيد' : 'Read more'}
                  <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? '' : 'rotate-180'}`} />
                </span>
              </Link>
            </div>
          </div>
        </section>

      </main>
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
