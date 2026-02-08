"use client";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArrowLeft, Calendar, Clock, User,
  MapPin, Code, Smartphone, Brain,
  CheckCircle, Phone, Mail, Building2,
  Rocket, Users, Shield, Zap,
  Star, Award, Globe, TrendingUp,
  Heart, Target, Cpu, Database,
  CreditCard, ShoppingCart, BarChart3, Layers,
  MessageCircle, Briefcase, Layout, Monitor,
  Search, PenTool
} from "lucide-react";

export default function TatwirMawaqieWebSaudiArabia2026() {
  const router = useRouter();
  const locale = router.locale || 'ar';
  const isRTL = locale === 'ar';

  const content = {
    ar: {
      metaTitle: "تطوير مواقع ويب السعودية 2026 | تصميم مواقع احترافية | Symloop",
      metaDesc: "خدمات تطوير مواقع ويب احترافية في المملكة العربية السعودية 2026. تصميم مواقع شركات، تطبيقات ويب، متاجر إلكترونية، صفحات هبوط وتحسين محركات البحث. خبرة رؤية 2030 الرقمية. عرض أسعار مجاني.",
      date: "5 فبراير 2026",
      readTime: "15 دقيقة",
      author: "Symloop للحلول الرقمية",
      category: "تطوير ويب السعودية",

      heroTitle: "تطوير مواقع ويب في المملكة العربية السعودية",
      heroSubtitle: "خدمات تصميم وبرمجة مواقع ويب احترافية تواكب رؤية 2030 - حلول رقمية متكاملة للشركات والمؤسسات السعودية",

      intro: "تشهد المملكة العربية السعودية تحولاً رقمياً غير مسبوق في إطار رؤية 2030، حيث أصبح الحضور الرقمي ضرورة حتمية لكل شركة ومؤسسة. مع أكثر من 36 مليون مستخدم إنترنت ومعدل انتشار يتجاوز 98%، يمثل السوق السعودي فرصة هائلة للأعمال الرقمية. في Symloop، نقدم خدمات تطوير مواقع ويب متكاملة تجمع بين أحدث التقنيات العالمية وفهم عميق لاحتياجات السوق السعودي.",

      marketStats: {
        title: "السوق الرقمي السعودي بالأرقام",
        stats: [
          { value: "+36 مليون", label: "مستخدم إنترنت نشط", icon: Users },
          { value: "98%+", label: "نسبة انتشار الإنترنت", icon: Globe },
          { value: "+12 مليار$", label: "حجم الاقتصاد الرقمي", icon: TrendingUp },
          { value: "85%+", label: "تصفح عبر الجوال", icon: Smartphone }
        ]
      },

      services: {
        title: "خدمات تطوير الويب في السعودية",
        list: [
          {
            icon: Building2,
            title: "مواقع الشركات والمؤسسات",
            description: "مواقع احترافية تعكس هوية شركتك وتعزز مصداقيتك في السوق السعودي. تصميم عصري متجاوب مع تجربة مستخدم سلسة.",
            features: ["تصميم UI/UX احترافي", "دعم كامل للعربية و RTL", "تحسين محركات البحث SEO", "استضافة سحابية سعودية", "لوحة تحكم سهلة الاستخدام", "شهادة SSL مجانية"]
          },
          {
            icon: Code,
            title: "تطبيقات الويب المتقدمة",
            description: "أنظمة ويب متكاملة لإدارة العمليات، البوابات الإلكترونية، ومنصات SaaS. تقنيات حديثة وأداء عالي.",
            features: ["بوابات حكومية إلكترونية", "أنظمة إدارة المحتوى CMS", "منصات SaaS سحابية", "لوحات بيانات تفاعلية", "تكامل مع أنظمة ERP", "API مفتوحة ومرنة"]
          },
          {
            icon: ShoppingCart,
            title: "المتاجر الإلكترونية",
            description: "منصات تجارة إلكترونية متكاملة مع بوابات الدفع السعودية مدى وApple Pay وSTC Pay. تجربة تسوق سلسة وآمنة.",
            features: ["تكامل مدى و Apple Pay", "إدارة المنتجات والمخزون", "نظام شحن وتتبع", "تقارير مبيعات تفصيلية", "برامج الولاء والخصومات", "دعم العملات المتعددة"]
          },
          {
            icon: Layout,
            title: "صفحات الهبوط وتحسين SEO",
            description: "صفحات هبوط عالية التحويل مع استراتيجيات SEO متقدمة لضمان ظهور أعمالك في نتائج البحث الأولى في السعودية.",
            features: ["تصميم محسّن للتحويل", "سرعة تحميل فائقة", "SEO تقني متقدم", "تحسين للبحث المحلي", "تتبع وتحليل الأداء", "اختبارات A/B"]
          }
        ]
      },

      techStack: {
        title: "التقنيات المستخدمة",
        description: "نستخدم أحدث التقنيات العالمية لبناء مواقع وتطبيقات ويب عالية الأداء والأمان.",
        technologies: [
          { name: "Next.js / React", category: "الواجهة الأمامية", icon: Monitor },
          { name: "Node.js / Express", category: "الخادم الخلفي", icon: Cpu },
          { name: "Python / Django", category: "الخادم الخلفي", icon: Code },
          { name: "PostgreSQL / MongoDB", category: "قواعد البيانات", icon: Database },
          { name: "AWS / Azure", category: "الاستضافة السحابية", icon: Layers },
          { name: "Tailwind CSS", category: "التصميم", icon: PenTool }
        ]
      },

      cities: {
        title: "تغطيتنا في المدن السعودية",
        description: "نخدم الشركات والمؤسسات في جميع أنحاء المملكة العربية السعودية مع خبرة محلية في كل مدينة.",
        list: [
          { name: "الرياض", description: "العاصمة ومركز الأعمال الرئيسي", highlight: true },
          { name: "جدة", description: "بوابة التجارة والسياحة", highlight: true },
          { name: "الدمام", description: "قلب المنطقة الشرقية الصناعية", highlight: false },
          { name: "مكة المكرمة", description: "خدمات الحج والعمرة الرقمية", highlight: false },
          { name: "المدينة المنورة", description: "حلول السياحة الدينية والخدمات", highlight: false }
        ]
      },

      sectors: {
        title: "القطاعات التي نخدمها",
        description: "نمتلك خبرة واسعة في تطوير حلول رقمية مخصصة لأبرز القطاعات في المملكة العربية السعودية.",
        list: [
          { name: "القطاع الحكومي", icon: Building2, description: "بوابات إلكترونية، خدمات المواطنين، أنظمة حكومية ذكية" },
          { name: "البنوك والتمويل", icon: CreditCard, description: "منصات بنكية رقمية، محافظ إلكترونية، أنظمة الامتثال" },
          { name: "الرعاية الصحية", icon: Heart, description: "بوابات المرضى، حجز المواعيد، السجلات الطبية الإلكترونية" },
          { name: "التعليم", icon: Brain, description: "منصات تعليمية، أنظمة إدارة التعلم LMS، اختبارات إلكترونية" },
          { name: "العقارات", icon: MapPin, description: "منصات عقارية، جولات افتراضية، أنظمة إدارة الممتلكات" },
          { name: "التجزئة", icon: ShoppingCart, description: "متاجر إلكترونية، أنظمة نقاط البيع، إدارة المخزون" },
          { name: "السياحة والضيافة", icon: Globe, description: "منصات حجز، إدارة الفنادق، تجارب سياحية رقمية" },
          { name: "اللوجستيك والنقل", icon: Briefcase, description: "أنظمة تتبع، إدارة الأسطول، منصات الشحن" },
          { name: "الطاقة", icon: Zap, description: "أنظمة مراقبة، إدارة الطاقة الذكية، تقارير الاستدامة" }
        ]
      },

      whyUs: {
        title: "لماذا تختار Symloop لتطوير موقعك في السعودية؟",
        reasons: [
          { icon: Award, title: "خبرة مثبتة في السوق السعودي", description: "سنوات من العمل مع شركات ومؤسسات سعودية في مختلف القطاعات ونفهم متطلبات السوق المحلي." },
          { icon: Shield, title: "أمان وحماية بيانات على مستوى عالمي", description: "نلتزم بأعلى معايير أمن المعلومات وحماية البيانات وفقاً لأنظمة الهيئة الوطنية للأمن السيبراني." },
          { icon: Rocket, title: "أداء فائق وسرعة تحميل", description: "مواقع محسنة للسرعة مع استضافة على خوادم قريبة من المستخدمين في المملكة لأفضل تجربة." },
          { icon: Search, title: "خبرة في SEO للسوق السعودي", description: "استراتيجيات تحسين محركات البحث مخصصة للسوق السعودي بالعربية والإنجليزية." },
          { icon: MessageCircle, title: "دعم فني مستمر بالعربية", description: "فريق دعم يتحدث العربية متاح لمساعدتك في أي وقت مع ضمان استجابة سريعة." },
          { icon: Target, title: "تصميم يراعي الثقافة المحلية", description: "تصاميم تحترم القيم والعادات السعودية مع دعم كامل للغة العربية واتجاه RTL." },
          { icon: BarChart3, title: "تحليلات وتقارير متقدمة", description: "لوحات بيانات ذكية لقياس أداء موقعك وتحليل سلوك الزوار واتخاذ قرارات مبنية على البيانات." },
          { icon: Layers, title: "حلول قابلة للتوسع", description: "بنية تقنية مرنة تنمو مع نمو أعمالك من شركة ناشئة إلى مؤسسة كبرى." }
        ]
      },

      pricing: {
        title: "باقات الأسعار",
        note: "الأسعار بالريال السعودي - عرض أسعار مخصص مجاني",
        packages: [
          {
            name: "صفحة هبوط",
            price: "ابتداءً من 5,000 ر.س",
            features: ["صفحة واحدة متجاوبة", "تصميم عصري جذاب", "نموذج تواصل", "تحسين SEO أساسي", "استضافة 6 أشهر", "شهادة SSL"],
            icon: Layout,
            popular: false
          },
          {
            name: "موقع شركات",
            price: "ابتداءً من 15,000 ر.س",
            features: ["5-15 صفحة احترافية", "تصميم UI/UX مخصص", "لوحة تحكم كاملة", "SEO متقدم", "استضافة سنة كاملة", "دعم فني 3 أشهر"],
            icon: Building2,
            popular: true
          },
          {
            name: "تطبيق ويب",
            price: "ابتداءً من 40,000 ر.س",
            features: ["تطبيق ويب متكامل", "لوحات بيانات تفاعلية", "تكامل API", "قاعدة بيانات مخصصة", "استضافة سحابية", "دعم فني 6 أشهر"],
            icon: Code,
            popular: false
          },
          {
            name: "حل مؤسسي",
            price: "حسب العرض",
            features: ["تحليل احتياجات شامل", "هندسة مخصصة بالكامل", "تكامل أنظمة متعدد", "تدريب الفرق", "SLA مخصص", "دعم مميز 24/7"],
            icon: Briefcase,
            popular: false
          }
        ]
      },

      faq: {
        title: "الأسئلة الشائعة",
        questions: [
          {
            q: "كم تستغرق مدة تطوير موقع ويب في السعودية؟",
            a: "تختلف المدة حسب حجم المشروع وتعقيده. صفحة هبوط بسيطة تستغرق 1-2 أسبوع، موقع شركات 3-6 أسابيع، تطبيق ويب متكامل 8-16 أسبوعاً، والحلول المؤسسية الكبرى قد تحتاج 3-6 أشهر. نلتزم بجداول زمنية واضحة ونقدم تحديثات دورية."
          },
          {
            q: "هل تدعمون بوابات الدفع السعودية مثل مدى و STC Pay؟",
            a: "نعم بالتأكيد. ندعم جميع بوابات الدفع الرئيسية في المملكة بما في ذلك مدى، Apple Pay، STC Pay، Tabby، Tamara، وبطاقات الائتمان الدولية. نضمن تكاملاً آمناً ومتوافقاً مع معايير PCI DSS."
          },
          {
            q: "هل تلتزمون بمتطلبات الهيئة الوطنية للأمن السيبراني NCA؟",
            a: "نعم، نلتزم بجميع متطلبات الأمن السيبراني والخصوصية المعمول بها في المملكة. نطبق أفضل الممارسات الأمنية بما في ذلك التشفير، جدران الحماية، المراقبة المستمرة، واختبارات الاختراق الدورية."
          },
          {
            q: "هل يمكنكم استضافة الموقع على خوادم داخل المملكة؟",
            a: "نعم، نوفر خيارات استضافة على خوادم AWS وAzure في منطقة الشرق الأوسط (البحرين/الإمارات) مع إمكانية الاستضافة المحلية عبر شركاء سعوديين معتمدين. هذا يضمن سرعة فائقة وتوافقاً مع متطلبات إقامة البيانات."
          },
          {
            q: "هل تقدمون خدمات صيانة ودعم بعد إطلاق الموقع؟",
            a: "بالتأكيد. نقدم باقات صيانة ودعم فني مستمر تشمل: التحديثات الأمنية، النسخ الاحتياطي اليومي، مراقبة الأداء، إصلاح الأخطاء، وإضافة ميزات جديدة. فريقنا متاح بالعربية والإنجليزية مع ضمان استجابة خلال ساعات."
          }
        ]
      },

      cta: {
        title: "ابدأ مشروعك الرقمي في السعودية اليوم",
        description: "تواصل معنا للحصول على استشارة مجانية وعرض أسعار مخصص لمشروعك. فريقنا جاهز لمساعدتك في بناء حضور رقمي قوي يواكب رؤية 2030.",
        whatsapp: "تواصل عبر واتساب",
        emailBtn: "راسلنا عبر البريد",
        phone: "+213549575512",
        email: "contact@symloop.com"
      },

      related: {
        title: "مقالات ذات صلة",
        articles: [
          { title: "تطوير تطبيقات الجوال في السعودية 2026", slug: "tatwir-tatbiqat-jawwal-saudi-arabia-2026" },
          { title: "التجارة الإلكترونية في السعودية ومدى 2026", slug: "tijara-iliktruniya-saudi-arabia-mada-2026" },
          { title: "التحول الرقمي في السعودية ورؤية 2030", slug: "tahawwul-raqami-saudi-arabia-ruiya-2030" }
        ]
      },

      seoKeywords: [
        "تطوير مواقع ويب السعودية",
        "تصميم مواقع احترافية السعودية",
        "شركة تصميم مواقع الرياض",
        "تطوير مواقع جدة",
        "برمجة مواقع الدمام",
        "تصميم متاجر إلكترونية السعودية",
        "تطوير تطبيقات ويب السعودية",
        "شركة برمجة مواقع السعودية",
        "تصميم مواقع رؤية 2030",
        "أفضل شركة تطوير ويب السعودية",
        "تصميم مواقع مكة المدينة",
        "تطوير ويب المملكة العربية السعودية"
      ],

      backToBlog: "العودة للمدونة"
    },

    en: {
      metaTitle: "Web Development Saudi Arabia 2026 | Professional Website Design | Symloop",
      metaDesc: "Professional web development services in Saudi Arabia 2026. Corporate websites, web applications, e-commerce, landing pages & SEO. Vision 2030 digital expertise. Free quote.",
      date: "February 5, 2026",
      readTime: "15 min",
      author: "Symloop Digital Solutions",
      category: "Web Development KSA",

      heroTitle: "Web Development in Saudi Arabia",
      heroSubtitle: "Professional web design and development services aligned with Vision 2030 - Comprehensive digital solutions for Saudi businesses and enterprises",

      intro: "Saudi Arabia is undergoing an unprecedented digital transformation under Vision 2030, making digital presence essential for every business and organization. With over 36 million internet users and a penetration rate exceeding 98%, the Saudi market represents a massive opportunity for digital businesses. At Symloop, we deliver comprehensive web development services combining cutting-edge global technologies with deep understanding of the Saudi market.",

      marketStats: {
        title: "Saudi Digital Market by the Numbers",
        stats: [
          { value: "36M+", label: "Active internet users", icon: Users },
          { value: "98%+", label: "Internet penetration rate", icon: Globe },
          { value: "$12B+", label: "Digital economy size", icon: TrendingUp },
          { value: "85%+", label: "Mobile web browsing", icon: Smartphone }
        ]
      },

      services: {
        title: "Web Development Services in Saudi Arabia",
        list: [
          {
            icon: Building2,
            title: "Corporate & Enterprise Websites",
            description: "Professional websites that reflect your brand identity and boost credibility in the Saudi market. Modern responsive design with seamless user experience.",
            features: ["Professional UI/UX design", "Full Arabic & RTL support", "SEO optimization", "Saudi cloud hosting", "Easy-to-use CMS panel", "Free SSL certificate"]
          },
          {
            icon: Code,
            title: "Advanced Web Applications",
            description: "Comprehensive web systems for operations management, e-government portals, and SaaS platforms. Modern technologies and high performance.",
            features: ["E-government portals", "Content Management Systems", "Cloud SaaS platforms", "Interactive dashboards", "ERP system integration", "Flexible open APIs"]
          },
          {
            icon: ShoppingCart,
            title: "E-Commerce Platforms",
            description: "Complete e-commerce platforms integrated with Saudi payment gateways Mada, Apple Pay, and STC Pay. Smooth and secure shopping experience.",
            features: ["Mada & Apple Pay integration", "Product & inventory management", "Shipping & tracking system", "Detailed sales reports", "Loyalty & discount programs", "Multi-currency support"]
          },
          {
            icon: Layout,
            title: "Landing Pages & SEO",
            description: "High-converting landing pages with advanced SEO strategies to ensure your business appears in top search results in Saudi Arabia.",
            features: ["Conversion-optimized design", "Ultra-fast loading speed", "Advanced technical SEO", "Local search optimization", "Performance tracking & analytics", "A/B testing"]
          }
        ]
      },

      techStack: {
        title: "Technologies We Use",
        description: "We use the latest global technologies to build high-performance, secure websites and web applications.",
        technologies: [
          { name: "Next.js / React", category: "Frontend", icon: Monitor },
          { name: "Node.js / Express", category: "Backend", icon: Cpu },
          { name: "Python / Django", category: "Backend", icon: Code },
          { name: "PostgreSQL / MongoDB", category: "Databases", icon: Database },
          { name: "AWS / Azure", category: "Cloud Hosting", icon: Layers },
          { name: "Tailwind CSS", category: "Styling", icon: PenTool }
        ]
      },

      cities: {
        title: "Our Coverage Across Saudi Cities",
        description: "We serve businesses and organizations throughout the Kingdom of Saudi Arabia with local expertise in every city.",
        list: [
          { name: "Riyadh", description: "Capital and main business hub", highlight: true },
          { name: "Jeddah", description: "Gateway for trade and tourism", highlight: true },
          { name: "Dammam", description: "Heart of the Eastern industrial region", highlight: false },
          { name: "Makkah", description: "Digital Hajj and Umrah services", highlight: false },
          { name: "Madinah", description: "Religious tourism and services solutions", highlight: false }
        ]
      },

      sectors: {
        title: "Industries We Serve",
        description: "We have extensive experience developing custom digital solutions for the leading sectors in Saudi Arabia.",
        list: [
          { name: "Government", icon: Building2, description: "E-portals, citizen services, smart government systems" },
          { name: "Banking & Finance", icon: CreditCard, description: "Digital banking platforms, e-wallets, compliance systems" },
          { name: "Healthcare", icon: Heart, description: "Patient portals, appointment booking, electronic medical records" },
          { name: "Education", icon: Brain, description: "E-learning platforms, LMS systems, online examinations" },
          { name: "Real Estate", icon: MapPin, description: "Real estate platforms, virtual tours, property management" },
          { name: "Retail", icon: ShoppingCart, description: "E-commerce stores, POS systems, inventory management" },
          { name: "Tourism & Hospitality", icon: Globe, description: "Booking platforms, hotel management, digital experiences" },
          { name: "Logistics & Transport", icon: Briefcase, description: "Tracking systems, fleet management, shipping platforms" },
          { name: "Energy", icon: Zap, description: "Monitoring systems, smart energy management, sustainability reports" }
        ]
      },

      whyUs: {
        title: "Why Choose Symloop for Your Website in Saudi Arabia?",
        reasons: [
          { icon: Award, title: "Proven Saudi Market Expertise", description: "Years of working with Saudi companies and organizations across various sectors with deep local market understanding." },
          { icon: Shield, title: "World-Class Data Security", description: "We comply with the highest information security and data protection standards per NCA cybersecurity regulations." },
          { icon: Rocket, title: "Superior Performance & Speed", description: "Speed-optimized websites hosted on servers close to users in the Kingdom for the best experience." },
          { icon: Search, title: "Saudi Market SEO Expertise", description: "Search engine optimization strategies tailored for the Saudi market in both Arabic and English." },
          { icon: MessageCircle, title: "Continuous Arabic Support", description: "Arabic-speaking support team available to help you anytime with guaranteed fast response." },
          { icon: Target, title: "Culturally Sensitive Design", description: "Designs that respect Saudi values and customs with full Arabic language and RTL direction support." },
          { icon: BarChart3, title: "Advanced Analytics & Reports", description: "Smart dashboards to measure website performance, analyze visitor behavior, and make data-driven decisions." },
          { icon: Layers, title: "Scalable Solutions", description: "Flexible technical architecture that grows with your business from startup to enterprise." }
        ]
      },

      pricing: {
        title: "Pricing Packages",
        note: "Prices in Saudi Riyals (SAR) - Free custom quote available",
        packages: [
          {
            name: "Landing Page",
            price: "Starting from 5,000 SAR",
            features: ["Single responsive page", "Modern attractive design", "Contact form", "Basic SEO optimization", "6-month hosting", "SSL certificate"],
            icon: Layout,
            popular: false
          },
          {
            name: "Corporate Website",
            price: "Starting from 15,000 SAR",
            features: ["5-15 professional pages", "Custom UI/UX design", "Full admin panel", "Advanced SEO", "1-year hosting", "3-month tech support"],
            icon: Building2,
            popular: true
          },
          {
            name: "Web Application",
            price: "Starting from 40,000 SAR",
            features: ["Full web application", "Interactive dashboards", "API integration", "Custom database", "Cloud hosting", "6-month tech support"],
            icon: Code,
            popular: false
          },
          {
            name: "Enterprise Solution",
            price: "Custom Quote",
            features: ["Comprehensive needs analysis", "Fully custom architecture", "Multi-system integration", "Team training", "Custom SLA", "24/7 premium support"],
            icon: Briefcase,
            popular: false
          }
        ]
      },

      faq: {
        title: "Frequently Asked Questions",
        questions: [
          {
            q: "How long does it take to develop a website in Saudi Arabia?",
            a: "Duration varies by project size and complexity. A simple landing page takes 1-2 weeks, corporate website 3-6 weeks, full web application 8-16 weeks, and large enterprise solutions may need 3-6 months. We commit to clear timelines with regular updates."
          },
          {
            q: "Do you support Saudi payment gateways like Mada and STC Pay?",
            a: "Absolutely. We support all major payment gateways in the Kingdom including Mada, Apple Pay, STC Pay, Tabby, Tamara, and international credit cards. We ensure secure, PCI DSS-compliant integration."
          },
          {
            q: "Do you comply with NCA cybersecurity requirements?",
            a: "Yes, we comply with all applicable cybersecurity and privacy requirements in the Kingdom. We implement best security practices including encryption, firewalls, continuous monitoring, and regular penetration testing."
          },
          {
            q: "Can you host the website on servers within the Kingdom?",
            a: "Yes, we offer hosting on AWS and Azure servers in the Middle East region (Bahrain/UAE) with local hosting options through certified Saudi partners. This ensures ultra-fast speeds and compliance with data residency requirements."
          },
          {
            q: "Do you provide maintenance and support after website launch?",
            a: "Absolutely. We offer ongoing maintenance and technical support packages including: security updates, daily backups, performance monitoring, bug fixes, and new feature additions. Our team is available in Arabic and English with guaranteed response within hours."
          }
        ]
      },

      cta: {
        title: "Start Your Digital Project in Saudi Arabia Today",
        description: "Contact us for a free consultation and custom quote for your project. Our team is ready to help you build a strong digital presence aligned with Vision 2030.",
        whatsapp: "Chat on WhatsApp",
        emailBtn: "Email Us",
        phone: "+213549575512",
        email: "contact@symloop.com"
      },

      related: {
        title: "Related Articles",
        articles: [
          { title: "Mobile App Development in Saudi Arabia 2026", slug: "tatwir-tatbiqat-jawwal-saudi-arabia-2026" },
          { title: "E-Commerce in Saudi Arabia & Mada 2026", slug: "tijara-iliktruniya-saudi-arabia-mada-2026" },
          { title: "Digital Transformation in Saudi Arabia & Vision 2030", slug: "tahawwul-raqami-saudi-arabia-ruiya-2030" }
        ]
      },

      seoKeywords: [
        "web development Saudi Arabia",
        "website design KSA",
        "web development company Riyadh",
        "website development Jeddah",
        "web design Dammam",
        "e-commerce website Saudi Arabia",
        "web application development KSA",
        "website programming Saudi Arabia",
        "Vision 2030 website design",
        "best web development company Saudi Arabia"
      ],

      backToBlog: "Back to Blog"
    },

    fr: {
      metaTitle: "Developpement Web Arabie Saoudite 2026 | Conception Sites Professionnels | Symloop",
      metaDesc: "Services de developpement web professionnels en Arabie Saoudite 2026. Sites corporate, applications web, e-commerce, landing pages et SEO. Expertise Vision 2030. Devis gratuit.",
      date: "5 Fevrier 2026",
      readTime: "15 min",
      author: "Symloop Solutions Digitales",
      category: "Developpement Web KSA",

      heroTitle: "Developpement Web en Arabie Saoudite",
      heroSubtitle: "Services professionnels de conception et developpement web alignes sur la Vision 2030 - Solutions digitales completes pour les entreprises saoudiennes",

      intro: "L'Arabie Saoudite connait une transformation digitale sans precedent dans le cadre de la Vision 2030, rendant la presence numerique essentielle pour chaque entreprise. Avec plus de 36 millions d'utilisateurs internet et un taux de penetration depassant 98%, le marche saoudien represente une opportunite massive. Chez Symloop, nous offrons des services complets de developpement web combinant technologies de pointe et comprehension profonde du marche saoudien.",

      marketStats: {
        title: "Le Marche Digital Saoudien en Chiffres",
        stats: [
          { value: "36M+", label: "Utilisateurs internet actifs", icon: Users },
          { value: "98%+", label: "Taux de penetration internet", icon: Globe },
          { value: "12Md$+", label: "Taille de l'economie digitale", icon: TrendingUp },
          { value: "85%+", label: "Navigation web mobile", icon: Smartphone }
        ]
      },

      services: {
        title: "Services de Developpement Web en Arabie Saoudite",
        list: [
          {
            icon: Building2,
            title: "Sites Corporate et Institutionnels",
            description: "Sites professionnels refletant l'identite de votre marque et renforçant votre credibilite sur le marche saoudien. Design moderne responsive avec experience utilisateur fluide.",
            features: ["Design UI/UX professionnel", "Support complet arabe & RTL", "Optimisation SEO", "Hebergement cloud saoudien", "Panel admin facile", "Certificat SSL gratuit"]
          },
          {
            icon: Code,
            title: "Applications Web Avancees",
            description: "Systemes web complets pour la gestion des operations, portails e-gouvernement et plateformes SaaS. Technologies modernes et haute performance.",
            features: ["Portails e-gouvernement", "Systemes de gestion de contenu", "Plateformes SaaS cloud", "Tableaux de bord interactifs", "Integration systemes ERP", "APIs ouvertes et flexibles"]
          },
          {
            icon: ShoppingCart,
            title: "Plateformes E-Commerce",
            description: "Plateformes e-commerce completes integrees avec les passerelles de paiement saoudiennes Mada, Apple Pay et STC Pay. Experience d'achat fluide et securisee.",
            features: ["Integration Mada & Apple Pay", "Gestion produits & inventaire", "Systeme d'expedition & suivi", "Rapports de ventes detailles", "Programmes fidelite & remises", "Support multidevises"]
          },
          {
            icon: Layout,
            title: "Landing Pages & SEO",
            description: "Pages d'atterrissage a haute conversion avec strategies SEO avancees pour assurer la visibilite de votre entreprise dans les premiers resultats en Arabie Saoudite.",
            features: ["Design optimise conversion", "Vitesse de chargement ultra-rapide", "SEO technique avance", "Optimisation recherche locale", "Suivi et analyse performance", "Tests A/B"]
          }
        ]
      },

      techStack: {
        title: "Technologies Utilisees",
        description: "Nous utilisons les dernieres technologies mondiales pour construire des sites et applications web performants et securises.",
        technologies: [
          { name: "Next.js / React", category: "Frontend", icon: Monitor },
          { name: "Node.js / Express", category: "Backend", icon: Cpu },
          { name: "Python / Django", category: "Backend", icon: Code },
          { name: "PostgreSQL / MongoDB", category: "Bases de donnees", icon: Database },
          { name: "AWS / Azure", category: "Hebergement Cloud", icon: Layers },
          { name: "Tailwind CSS", category: "Design", icon: PenTool }
        ]
      },

      cities: {
        title: "Notre Couverture dans les Villes Saoudiennes",
        description: "Nous servons les entreprises et organisations dans tout le Royaume d'Arabie Saoudite avec une expertise locale dans chaque ville.",
        list: [
          { name: "Riyad", description: "Capitale et principal centre d'affaires", highlight: true },
          { name: "Djeddah", description: "Porte d'entree du commerce et du tourisme", highlight: true },
          { name: "Dammam", description: "Coeur de la region industrielle orientale", highlight: false },
          { name: "La Mecque", description: "Services numeriques Hajj et Omra", highlight: false },
          { name: "Medine", description: "Solutions tourisme religieux et services", highlight: false }
        ]
      },

      sectors: {
        title: "Secteurs que Nous Servons",
        description: "Nous possedons une vaste experience dans le developpement de solutions digitales sur mesure pour les principaux secteurs en Arabie Saoudite.",
        list: [
          { name: "Gouvernement", icon: Building2, description: "Portails electroniques, services citoyens, systemes gouvernementaux intelligents" },
          { name: "Banque & Finance", icon: CreditCard, description: "Plateformes bancaires digitales, portefeuilles electroniques, systemes de conformite" },
          { name: "Sante", icon: Heart, description: "Portails patients, prise de rendez-vous, dossiers medicaux electroniques" },
          { name: "Education", icon: Brain, description: "Plateformes e-learning, systemes LMS, examens en ligne" },
          { name: "Immobilier", icon: MapPin, description: "Plateformes immobilieres, visites virtuelles, gestion de proprietes" },
          { name: "Commerce de Detail", icon: ShoppingCart, description: "Boutiques en ligne, systemes POS, gestion des stocks" },
          { name: "Tourisme & Hotellerie", icon: Globe, description: "Plateformes de reservation, gestion hoteliere, experiences digitales" },
          { name: "Logistique & Transport", icon: Briefcase, description: "Systemes de suivi, gestion de flotte, plateformes d'expedition" },
          { name: "Energie", icon: Zap, description: "Systemes de surveillance, gestion intelligente de l'energie, rapports de durabilite" }
        ]
      },

      whyUs: {
        title: "Pourquoi Choisir Symloop pour Votre Site en Arabie Saoudite ?",
        reasons: [
          { icon: Award, title: "Expertise Prouvee du Marche Saoudien", description: "Des annees de travail avec des entreprises saoudiennes dans divers secteurs avec une comprehension profonde du marche local." },
          { icon: Shield, title: "Securite des Donnees de Niveau Mondial", description: "Nous respectons les plus hautes normes de securite et protection des donnees selon les reglementations de la NCA." },
          { icon: Rocket, title: "Performance et Vitesse Superieures", description: "Sites optimises pour la vitesse heberges sur des serveurs proches des utilisateurs dans le Royaume." },
          { icon: Search, title: "Expertise SEO Marche Saoudien", description: "Strategies d'optimisation pour les moteurs de recherche adaptees au marche saoudien en arabe et anglais." },
          { icon: MessageCircle, title: "Support Continu en Arabe", description: "Equipe de support arabophone disponible pour vous aider a tout moment avec une reponse rapide garantie." },
          { icon: Target, title: "Design Culturellement Adapte", description: "Designs respectant les valeurs et coutumes saoudiennes avec support complet de la langue arabe et direction RTL." },
          { icon: BarChart3, title: "Analytiques et Rapports Avances", description: "Tableaux de bord intelligents pour mesurer la performance et analyser le comportement des visiteurs." },
          { icon: Layers, title: "Solutions Evolutives", description: "Architecture technique flexible qui grandit avec votre entreprise, de la startup a la grande entreprise." }
        ]
      },

      pricing: {
        title: "Forfaits et Tarifs",
        note: "Prix en Riyals Saoudiens (SAR) - Devis personnalise gratuit",
        packages: [
          {
            name: "Landing Page",
            price: "A partir de 5 000 SAR",
            features: ["Page unique responsive", "Design moderne attractif", "Formulaire de contact", "SEO de base", "Hebergement 6 mois", "Certificat SSL"],
            icon: Layout,
            popular: false
          },
          {
            name: "Site Corporate",
            price: "A partir de 15 000 SAR",
            features: ["5-15 pages professionnelles", "Design UI/UX personnalise", "Panel admin complet", "SEO avance", "Hebergement 1 an", "Support tech 3 mois"],
            icon: Building2,
            popular: true
          },
          {
            name: "Application Web",
            price: "A partir de 40 000 SAR",
            features: ["Application web complete", "Tableaux de bord interactifs", "Integration API", "Base de donnees personnalisee", "Hebergement cloud", "Support tech 6 mois"],
            icon: Code,
            popular: false
          },
          {
            name: "Solution Entreprise",
            price: "Sur Devis",
            features: ["Analyse complete des besoins", "Architecture entierement personnalisee", "Integration multi-systemes", "Formation des equipes", "SLA personnalise", "Support premium 24/7"],
            icon: Briefcase,
            popular: false
          }
        ]
      },

      faq: {
        title: "Questions Frequentes",
        questions: [
          {
            q: "Combien de temps faut-il pour developper un site web en Arabie Saoudite ?",
            a: "La duree varie selon la taille et la complexite du projet. Landing page : 1-2 semaines, site corporate : 3-6 semaines, application web : 8-16 semaines, solutions entreprise : 3-6 mois. Nous respectons des delais clairs avec mises a jour regulieres."
          },
          {
            q: "Supportez-vous les passerelles de paiement saoudiennes comme Mada et STC Pay ?",
            a: "Absolument. Nous supportons toutes les principales passerelles au Royaume : Mada, Apple Pay, STC Pay, Tabby, Tamara et cartes internationales. Integration securisee et conforme PCI DSS."
          },
          {
            q: "Respectez-vous les exigences de la NCA en matiere de cybersecurite ?",
            a: "Oui, nous respectons toutes les exigences applicables en matiere de cybersecurite et confidentialite. Nous appliquons les meilleures pratiques : chiffrement, pare-feu, surveillance continue et tests de penetration reguliers."
          },
          {
            q: "Pouvez-vous heberger le site sur des serveurs dans le Royaume ?",
            a: "Oui, nous proposons l'hebergement sur AWS et Azure au Moyen-Orient (Bahrein/EAU) avec options d'hebergement local via des partenaires saoudiens certifies. Vitesse optimale et conformite aux exigences de residence des donnees."
          },
          {
            q: "Proposez-vous maintenance et support apres le lancement ?",
            a: "Absolument. Nous offrons des forfaits de maintenance et support technique continu : mises a jour securite, sauvegardes quotidiennes, surveillance performance, corrections de bugs et nouvelles fonctionnalites. Equipe disponible en arabe et anglais."
          }
        ]
      },

      cta: {
        title: "Lancez Votre Projet Digital en Arabie Saoudite",
        description: "Contactez-nous pour une consultation gratuite et un devis personnalise. Notre equipe est prete a vous aider a construire une presence digitale forte alignee sur la Vision 2030.",
        whatsapp: "Contacter via WhatsApp",
        emailBtn: "Envoyer un Email",
        phone: "+213549575512",
        email: "contact@symloop.com"
      },

      related: {
        title: "Articles Connexes",
        articles: [
          { title: "Developpement Apps Mobiles Arabie Saoudite 2026", slug: "tatwir-tatbiqat-jawwal-saudi-arabia-2026" },
          { title: "E-Commerce Arabie Saoudite & Mada 2026", slug: "tijara-iliktruniya-saudi-arabia-mada-2026" },
          { title: "Transformation Digitale Arabie Saoudite & Vision 2030", slug: "tahawwul-raqami-saudi-arabia-ruiya-2030" }
        ]
      },

      seoKeywords: [
        "developpement web Arabie Saoudite",
        "creation site internet Arabie Saoudite",
        "agence web Riyad",
        "developpement site web Djeddah",
        "e-commerce Arabie Saoudite",
        "application web KSA",
        "agence digitale Arabie Saoudite",
        "Vision 2030 site web",
        "meilleure agence web Arabie Saoudite"
      ],

      backToBlog: "Retour au Blog"
    }
  };

  const t = content[locale] || content.ar;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.heroTitle,
    "description": t.metaDesc,
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
        "url": "https://symloop.com/logo.png"
      }
    },
    "datePublished": "2026-02-05",
    "dateModified": "2026-02-05",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://symloop.com/ar/blog/tatwir-mawaqie-web-saudi-arabia-2026"
    },
    "image": "https://symloop.com/logo.png",
    "inLanguage": locale,
    "keywords": t.seoKeywords
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faq.questions.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Symloop - Web Development Saudi Arabia",
    "description": t.metaDesc,
    "url": "https://symloop.com",
    "telephone": "+213549575512",
    "email": "contact@symloop.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SA",
      "addressRegion": "Riyadh"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.7136",
      "longitude": "46.6753"
    },
    "areaServed": [
      { "@type": "Country", "name": "Saudi Arabia" },
      { "@type": "City", "name": "Riyadh" },
      { "@type": "City", "name": "Jeddah" },
      { "@type": "City", "name": "Dammam" },
      { "@type": "City", "name": "Makkah" },
      { "@type": "City", "name": "Madinah" }
    ],
    "priceRange": "SAR 5000 - SAR 100000+",
    "openingHours": "Mo-Sa 09:00-18:00",
    "sameAs": [
      "https://www.linkedin.com/company/symloop",
      "https://twitter.com/symloop"
    ]
  };

  return (
    <>
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDesc} />
        <meta name="keywords" content={t.seoKeywords?.join(', ')} />
        <link rel="canonical" href="https://symloop.com/ar/blog/tatwir-mawaqie-web-saudi-arabia-2026" />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDesc} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/ar/blog/tatwir-mawaqie-web-saudi-arabia-2026" />
        <meta property="og:locale" content={locale === 'ar' ? 'ar_SA' : locale === 'fr' ? 'fr_FR' : 'en_US'} />
        <meta property="og:image" content="https://symloop.com/logo.png" />
        <meta property="article:published_time" content={t.date || "2026-01-15"} />
        <meta property="article:modified_time" content="2026-02-07" />
        <meta property="article:section" content={t.category} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.metaTitle} />
        <meta name="twitter:description" content={t.metaDesc} />
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content="Saudi Arabia" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-language" content={locale === 'ar' ? 'ar-SA' : locale === 'fr' ? 'fr-FR' : 'en-US'} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://symloop.com" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" }, { "@type": "ListItem", "position": 3, "name": t.heroTitle }] }) }} />
      </Head>

      <main className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>

        {/* Section 1: Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-black to-teal-500/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              {t.backToBlog}
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium flex items-center gap-2">
                <Globe className="w-4 h-4" />
                {t.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{t.heroTitle}</h1>
            <p className="text-xl text-gray-300 mb-8">{t.heroSubtitle}</p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />{t.date}</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" />{t.readTime}</div>
              <div className="flex items-center gap-2"><User className="w-4 h-4" />{t.author}</div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-xl text-gray-300 leading-relaxed">{t.intro}</p>
            <p className="text-base text-gray-400 mt-6 leading-relaxed">
              {locale === 'ar'
                ? <>استكشف أيضاً <Link href="/services" className="text-cyan-400 hover:underline">خدماتنا الكاملة</Link> بما في ذلك <Link href="/blog/tatwir-tatbiqat-jawwal-saudi-arabia-2026" className="text-cyan-400 hover:underline">تطوير التطبيقات في السعودية</Link> و<Link href="/blog/tatwir-mawaqie-web-kuwait-2026" className="text-cyan-400 hover:underline">تطوير المواقع في الكويت</Link>.</>
                : <>Explore our full range of <Link href="/services" className="text-cyan-400 hover:underline">IT services</Link>, including <Link href="/blog/tatwir-tatbiqat-jawwal-saudi-arabia-2026" className="text-cyan-400 hover:underline">mobile app development in Saudi Arabia</Link> and <Link href="/blog/tatwir-mawaqie-web-kuwait-2026" className="text-cyan-400 hover:underline">web development in Kuwait</Link>.</>
              }
            </p>
          </div>
        </section>

        {/* Section 2: Market Stats */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center">{t.marketStats.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {t.marketStats.stats.map((stat, i) => (
                <div key={i} className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-emerald-500/20 rounded-lg">
                      <stat.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Services */}
        <section className="py-16 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10">{t.services.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {t.services.list.map((service, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-500/20 rounded-lg">
                      <service.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="font-bold text-lg">{service.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
        {/* Section 4: Tech Stack */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-3">{t.techStack.title}</h2>
            <p className="text-gray-400 mb-10">{t.techStack.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {t.techStack.technologies.map((tech, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4 hover:border-emerald-500/30 transition-colors">
                  <div className="p-2 bg-emerald-500/20 rounded-lg flex-shrink-0">
                    <tech.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">{tech.name}</div>
                    <div className="text-xs text-gray-500">{tech.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Cities */}
        <section className="py-16 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-3">{t.cities.title}</h2>
            <p className="text-gray-400 mb-10">{t.cities.description}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.cities.list.map((city, i) => (
                <div key={i} className={`rounded-xl p-5 ${city.highlight ? 'bg-gradient-to-br from-emerald-500/15 to-teal-500/10 border-2 border-emerald-500/40' : 'bg-white/5 border border-white/10'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className={`w-5 h-5 ${city.highlight ? 'text-emerald-400' : 'text-gray-500'}`} />
                    <h3 className={`font-bold ${city.highlight ? 'text-emerald-400' : 'text-white'}`}>{city.name}</h3>
                  </div>
                  <p className="text-gray-500 text-xs">{city.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Sectors */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-3">{t.sectors.title}</h2>
            <p className="text-gray-400 mb-10">{t.sectors.description}</p>
            <div className="grid md:grid-cols-3 gap-4">
              {t.sectors.list.map((sector, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-emerald-500/20 rounded-lg">
                      <sector.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="font-bold text-sm">{sector.name}</h3>
                  </div>
                  <p className="text-gray-500 text-xs">{sector.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Why Us */}
        <section className="py-16 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10">{t.whyUs.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {t.whyUs.reasons.map((reason, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-emerald-500/20 rounded-lg">
                      <reason.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="font-bold text-emerald-400">{reason.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Pricing */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-2">{t.pricing.title}</h2>
            <p className="text-gray-400 mb-10">{t.pricing.note}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.pricing.packages.map((pkg, i) => (
                <div key={i} className={`rounded-xl p-5 relative ${pkg.popular ? 'bg-gradient-to-br from-emerald-500/15 to-teal-500/10 border-2 border-emerald-500/40' : 'bg-white/5 border border-white/10'}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {locale === 'ar' ? 'الأكثر طلباً' : locale === 'fr' ? 'Populaire' : 'Most Popular'}
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-3 mt-1">
                    <pkg.icon className="w-5 h-5 text-emerald-400" />
                    <h3 className="font-bold">{pkg.name}</h3>
                  </div>
                  <div className="text-emerald-400 font-bold mb-4 text-lg">{pkg.price}</div>
                  <ul className="space-y-2">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: FAQ */}
        <section className="py-16 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10">{t.faq.title}</h2>
            <div className="space-y-4">
              {t.faq.questions.map((faq, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="font-bold mb-3 text-emerald-400">{faq.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 10: CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-emerald-500/20 border border-emerald-500/30 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.cta.title}</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{t.cta.description}</p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <a
                  href={`https://wa.me/${t.cta.phone.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {t.cta.whatsapp}
                </a>
                <a
                  href={`mailto:${t.cta.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  {t.cta.emailBtn}
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {t.cta.phone}
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {t.cta.email}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 11: Related Articles */}
        <section className="py-16 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">{t.related.title}</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {t.related.articles.map((article, i) => (
                <Link
                  key={i}
                  href={`/blog/${article.slug}`}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-500/30 transition-colors group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Rocket className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="font-bold text-sm group-hover:text-emerald-400 transition-colors">{article.title}</h3>
                  <div className="mt-3 text-xs text-emerald-400 flex items-center gap-1">
                    {locale === 'ar' ? 'اقرأ المزيد' : locale === 'fr' ? 'Lire la suite' : 'Read more'}
                    <ArrowLeft className={`w-3 h-3 ${isRTL ? 'rotate-180' : ''}`} />
                  </div>
                </Link>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-gray-400 mt-8 mb-4">
              {locale === 'ar' ? 'المزيد من خدماتنا في المنطقة' : 'More From Our Regional Coverage'}
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              <Link href="/blog/tatwir-mawaqie-web-uae-dubai-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'تطوير المواقع في الإمارات' : 'Web Development in the UAE'}
                </h3>
                <span className="text-cyan-500 text-sm flex items-center gap-1">
                  {locale === 'ar' ? 'اقرأ المزيد' : 'Read more'}
                  <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? '' : 'rotate-180'}`} />
                </span>
              </Link>
              <Link href="/blog/tatwir-tatbiqat-jawwal-kuwait-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'تطوير التطبيقات في الكويت' : 'Mobile App Development in Kuwait'}
                </h3>
                <span className="text-cyan-500 text-sm flex items-center gap-1">
                  {locale === 'ar' ? 'اقرأ المزيد' : 'Read more'}
                  <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? '' : 'rotate-180'}`} />
                </span>
              </Link>
              <Link href="/blog/tijara-iliktruniya-saudi-arabia-mada-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'التجارة الإلكترونية في السعودية' : 'E-Commerce in Saudi Arabia'}
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
