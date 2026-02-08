"use client";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArrowLeft, Calendar, Clock, User, MapPin, Code, Smartphone, Brain,
  CheckCircle, Phone, Mail, Building2, Rocket, Users, Shield, Zap,
  Star, Award, Globe, TrendingUp, Heart, Target, Cpu, Database,
  CreditCard, ShoppingCart, BarChart3, Layers, MessageCircle, Briefcase,
  Layout, Monitor, Search, PenTool
} from "lucide-react";

export default function WebDevelopmentSaudiArabia2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const content = {
    en: {
      metaTitle: "Web Development Company in Saudi Arabia 2026 | Professional Websites & Apps | Symloop",
      metaDesc: "Leading web development company in Saudi Arabia. Custom websites, web applications, e-commerce with MADA integration. Vision 2030 aligned digital solutions. Riyadh, Jeddah, Dammam. Free consultation.",
      date: "February 1, 2026",
      readTime: "13 min",
      author: "Symloop Team",
      category: "Web Development",
      backToBlog: "Back to Blog",

      title: "Web Development Company in Saudi Arabia",
      subtitle: "Professional Websites, Web Applications & E-commerce Solutions for the Saudi Market - Vision 2030 Digital Excellence",

      intro: "Saudi Arabia is undergoing an unprecedented digital transformation driven by Vision 2030. With over 36 million internet users and a rapidly expanding digital economy valued at over $12 billion, the Kingdom presents immense opportunities for businesses investing in professional web presence. From Riyadh's thriving tech hub to Jeddah's commercial heartland, Saudi enterprises need world-class websites and web applications to compete in today's digital-first marketplace. Symloop delivers cutting-edge web development solutions tailored specifically for the Saudi market, combining international quality standards with deep understanding of local business requirements, Arabic-first UX design, and seamless integration with Saudi payment systems like MADA.",

      marketStats: {
        title: "Saudi Arabia Digital Market Overview",
        stats: [
          { value: "36M+", label: "Internet Users" },
          { value: "98%", label: "Internet Penetration" },
          { value: "$12B+", label: "Digital Economy Size" },
          { value: "85%+", label: "Mobile Web Traffic" }
        ]
      },

      services: {
        title: "Our Web Development Services in Saudi Arabia",
        list: [
          {
            icon: Globe,
            name: "Corporate Websites",
            desc: "Professional bilingual (Arabic/English) corporate websites with modern responsive design. Built for brand credibility, optimized for Saudi search engines, and compliant with local regulations.",
            features: ["Arabic & English bilingual support", "Responsive mobile-first design", "Brand identity integration", "Saudi hosting & fast CDN"]
          },
          {
            icon: Monitor,
            name: "Web Applications",
            desc: "Custom SaaS platforms, business dashboards, client portals, and real-time applications. Enterprise-grade solutions built with scalable modern technology stacks.",
            features: ["SaaS platform development", "Real-time dashboards & analytics", "Client & employee portals", "API integrations & automation"]
          },
          {
            icon: ShoppingCart,
            name: "E-commerce Websites",
            desc: "Full-featured online stores with MADA payment integration, product catalogs, inventory management, and multi-currency support for the Saudi and GCC market.",
            features: ["MADA & STC Pay integration", "Product catalog management", "Order & inventory tracking", "Multi-currency GCC support"]
          },
          {
            icon: Search,
            name: "Landing Pages & SEO",
            desc: "High-converting landing pages optimized for Google Ads and Arabic SEO. Data-driven design with A/B testing, conversion tracking, and performance optimization.",
            features: ["Arabic & English SEO optimization", "Google Ads landing pages", "Conversion rate optimization", "Performance & speed tuning"]
          }
        ]
      },

      techStack: {
        title: "Technology Stack We Use",
        technologies: [
          { name: "Next.js / React", description: "Modern frontend framework for fast, SEO-friendly, server-rendered web applications with exceptional user experience." },
          { name: "Node.js", description: "Scalable backend runtime for building high-performance APIs, microservices, and real-time server applications." },
          { name: "Python / Django", description: "Robust backend framework ideal for data-driven applications, AI integration, and complex business logic." },
          { name: "PostgreSQL / MongoDB", description: "Enterprise-grade databases for structured and unstructured data, ensuring reliability, security, and performance." },
          { name: "AWS / Azure", description: "Cloud infrastructure with Saudi region availability for low-latency hosting, auto-scaling, and data residency compliance." },
          { name: "Tailwind CSS", description: "Utility-first CSS framework for building custom, responsive, and visually stunning user interfaces with RTL support." }
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
        title: "Industries We Serve in Saudi Arabia",
        list: [
          { icon: Building2, name: "Government" },
          { icon: CreditCard, name: "Banking & Finance" },
          { icon: Heart, name: "Healthcare" },
          { icon: Award, name: "Education" },
          { icon: Layers, name: "Real Estate" },
          { icon: ShoppingCart, name: "Retail" },
          { icon: Globe, name: "Tourism & Hospitality" },
          { icon: Briefcase, name: "Logistics" },
          { icon: Zap, name: "Energy & Utilities" }
        ]
      },

      whyChoose: {
        title: "Why Choose Symloop for Web Development in Saudi Arabia",
        reasons: [
          "Bilingual Arabic/English development team with native RTL expertise",
          "MADA, STC Pay, and Saudi payment gateway integration specialists",
          "Vision 2030 aligned digital transformation methodology",
          "Agile development with weekly progress demos and transparent reporting",
          "Post-launch support, maintenance, and performance monitoring included",
          "Cloud hosting on AWS Middle East (Bahrain) region for ultra-low latency",
          "ISO-compliant security practices and Saudi data residency compliance",
          "Proven track record with 500+ successful projects across the GCC"
        ]
      },

      pricing: {
        title: "Web Development Pricing in Saudi Arabia",
        note: "Prices in SAR (Saudi Riyal)",
        packages: [
          { name: "Landing Page", price: "From 5,000 SAR", features: ["Single-page responsive design", "Arabic/English content", "SEO basics & analytics", "Contact form integration"] },
          { name: "Corporate Website", price: "From 15,000 SAR", features: ["Multi-page bilingual site", "CMS admin panel", "Full SEO optimization", "1 year hosting & support"] },
          { name: "Web Application", price: "From 40,000 SAR", features: ["Custom SaaS / Portal", "User authentication & roles", "API integrations", "Dashboard & reporting"] },
          { name: "Enterprise Portal", price: "On Quote", features: ["Full enterprise solution", "Legacy system integration", "Custom workflow automation", "Dedicated project manager"] }
        ]
      },

      faq: {
        title: "Frequently Asked Questions",
        list: [
          { q: "How long does it take to build a website in Saudi Arabia?", a: "A landing page takes 1-2 weeks, a corporate website 3-6 weeks, and a custom web application 2-4 months depending on complexity. We provide detailed timelines during the free consultation." },
          { q: "Do you build Arabic-first websites with full RTL support?", a: "Absolutely. All our websites are built with native Arabic RTL support from the ground up. We ensure perfect bilingual Arabic/English switching with proper typography, layout mirroring, and cultural adaptation." },
          { q: "Can you integrate MADA and Saudi payment gateways?", a: "Yes, we integrate all major Saudi payment methods including MADA, STC Pay, Apple Pay, Visa/Mastercard, and popular gateways like HyperPay, Moyasar, and Tap Payments." },
          { q: "Do you provide hosting and ongoing maintenance?", a: "Yes, all our packages include hosting on cloud infrastructure with Saudi region availability. We offer monthly and annual maintenance plans covering updates, security patches, backups, and performance monitoring." },
          { q: "Can you help with SEO and digital marketing for the Saudi market?", a: "Yes, we provide comprehensive Arabic and English SEO services tailored to the Saudi market. This includes keyword research, on-page optimization, content strategy, Google Business Profile setup, and ongoing performance tracking." }
        ]
      },

      cta: {
        title: "Start Your Web Development Project in Saudi Arabia",
        desc: "Get a free consultation and detailed proposal for your web development project. Our team is ready to help you build a powerful digital presence in the Saudi market.",
        button: "Get Free Consultation",
        whatsapp: "+213549575512",
        email: "contact@symloop.com"
      },

      related: {
        title: "Related Articles",
        articles: [
          { title: "Mobile App Development in Saudi Arabia 2026", slug: "mobile-app-development-saudi-arabia-2026" },
          { title: "E-commerce Solutions in Saudi Arabia with MADA Integration", slug: "ecommerce-solutions-saudi-arabia-mada-2026" },
          { title: "Digital Transformation in Saudi Arabia - Vision 2030", slug: "digital-transformation-saudi-arabia-vision-2030" }
        ]
      },

      seoKeywords: [
        "web development company Saudi Arabia",
        "website development Riyadh",
        "web developer Jeddah",
        "Saudi Arabia web design",
        "custom website Saudi Arabia",
        "e-commerce development Saudi",
        "MADA payment integration website",
        "Arabic website development",
        "web application Saudi Arabia",
        "Vision 2030 digital solutions",
        "corporate website Riyadh",
        "web development Dammam",
        "Saudi web agency",
        "responsive website Saudi Arabia",
        "bilingual website Arabic English"
      ]
    },

    ar: {
      metaTitle: "شركة تطوير مواقع ويب في المملكة العربية السعودية 2026 | مواقع واحترافية | Symloop",
      metaDesc: "شركة تطوير مواقع ويب رائدة في المملكة العربية السعودية. مواقع مخصصة، تطبيقات ويب، تجارة إلكترونية مع تكامل مدى. حلول رقمية متوافقة مع رؤية 2030. الرياض، جدة، الدمام. استشارة مجانية.",
      date: "1 فبراير 2026",
      readTime: "13 دقيقة",
      author: "فريق Symloop",
      category: "تطوير الويب",
      backToBlog: "العودة للمدونة",

      title: "شركة تطوير مواقع ويب في المملكة العربية السعودية",
      subtitle: "مواقع احترافية وتطبيقات ويب وحلول تجارة إلكترونية للسوق السعودي - التميز الرقمي لرؤية 2030",

      intro: "تشهد المملكة العربية السعودية تحولاً رقمياً غير مسبوق مدفوعاً برؤية 2030. مع أكثر من 36 مليون مستخدم للإنترنت واقتصاد رقمي سريع النمو تتجاوز قيمته 12 مليار دولار، تقدم المملكة فرصاً هائلة للشركات التي تستثمر في التواجد الرقمي المهني. من مركز الرياض التقني المزدهر إلى قلب جدة التجاري، تحتاج المؤسسات السعودية إلى مواقع ويب وتطبيقات عالمية المستوى للمنافسة في سوق اليوم الرقمي. تقدم Symloop حلول تطوير ويب متطورة مصممة خصيصاً للسوق السعودي، تجمع بين معايير الجودة الدولية والفهم العميق لمتطلبات الأعمال المحلية وتصميم تجربة المستخدم بالعربية أولاً والتكامل السلس مع أنظمة الدفع السعودية مثل مدى.",

      marketStats: {
        title: "نظرة عامة على السوق الرقمي السعودي",
        stats: [
          { value: "+36 مليون", label: "مستخدم إنترنت" },
          { value: "98%", label: "نسبة انتشار الإنترنت" },
          { value: "+12 مليار $", label: "حجم الاقتصاد الرقمي" },
          { value: "+85%", label: "حركة الويب عبر الجوال" }
        ]
      },

      services: {
        title: "خدمات تطوير الويب في المملكة العربية السعودية",
        list: [
          {
            icon: Globe,
            name: "مواقع الشركات",
            desc: "مواقع شركات احترافية ثنائية اللغة (عربي/إنجليزي) بتصميم عصري متجاوب. مبنية لتعزيز مصداقية العلامة التجارية ومحسنة لمحركات البحث السعودية.",
            features: ["دعم ثنائي اللغة عربي وإنجليزي", "تصميم متجاوب للجوال أولاً", "تكامل هوية العلامة التجارية", "استضافة سعودية وشبكة CDN سريعة"]
          },
          {
            icon: Monitor,
            name: "تطبيقات الويب",
            desc: "منصات SaaS مخصصة ولوحات تحكم الأعمال وبوابات العملاء والتطبيقات الفورية. حلول مؤسسية مبنية بتقنيات حديثة قابلة للتوسع.",
            features: ["تطوير منصات SaaS", "لوحات تحكم وتحليلات فورية", "بوابات العملاء والموظفين", "تكامل API والأتمتة"]
          },
          {
            icon: ShoppingCart,
            name: "مواقع التجارة الإلكترونية",
            desc: "متاجر إلكترونية متكاملة مع تكامل دفع مدى وكتالوجات المنتجات وإدارة المخزون ودعم العملات المتعددة للسوق السعودي والخليجي.",
            features: ["تكامل مدى و STC Pay", "إدارة كتالوج المنتجات", "تتبع الطلبات والمخزون", "دعم عملات متعددة للخليج"]
          },
          {
            icon: Search,
            name: "صفحات الهبوط وتحسين محركات البحث",
            desc: "صفحات هبوط عالية التحويل محسنة لإعلانات Google وتحسين محركات البحث بالعربية. تصميم مبني على البيانات مع اختبار A/B وتتبع التحويلات.",
            features: ["تحسين SEO بالعربية والإنجليزية", "صفحات هبوط لإعلانات Google", "تحسين معدل التحويل", "تحسين الأداء والسرعة"]
          }
        ]
      },

      techStack: {
        title: "التقنيات التي نستخدمها",
        technologies: [
          { name: "Next.js / React", description: "إطار عمل واجهة أمامية حديث لتطبيقات ويب سريعة ومحسنة لمحركات البحث مع تجربة مستخدم استثنائية." },
          { name: "Node.js", description: "بيئة تشغيل خلفية قابلة للتوسع لبناء واجهات برمجة تطبيقات عالية الأداء وخدمات مصغرة." },
          { name: "Python / Django", description: "إطار عمل خلفي قوي مثالي للتطبيقات القائمة على البيانات وتكامل الذكاء الاصطناعي." },
          { name: "PostgreSQL / MongoDB", description: "قواعد بيانات مؤسسية للبيانات المهيكلة وغير المهيكلة تضمن الموثوقية والأمان والأداء." },
          { name: "AWS / Azure", description: "بنية تحتية سحابية مع توفر في المنطقة السعودية لاستضافة منخفضة التأخير وامتثال إقامة البيانات." },
          { name: "Tailwind CSS", description: "إطار عمل CSS لبناء واجهات مستخدم مخصصة ومتجاوبة وجذابة بصرياً مع دعم RTL." }
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
        title: "القطاعات التي نخدمها في المملكة العربية السعودية",
        list: [
          { icon: Building2, name: "القطاع الحكومي" },
          { icon: CreditCard, name: "البنوك والمالية" },
          { icon: Heart, name: "الرعاية الصحية" },
          { icon: Award, name: "التعليم" },
          { icon: Layers, name: "العقارات" },
          { icon: ShoppingCart, name: "التجزئة" },
          { icon: Globe, name: "السياحة والضيافة" },
          { icon: Briefcase, name: "الخدمات اللوجستية" },
          { icon: Zap, name: "الطاقة والمرافق" }
        ]
      },

      whyChoose: {
        title: "لماذا تختار Symloop لتطوير الويب في المملكة العربية السعودية",
        reasons: [
          "فريق تطوير ثنائي اللغة عربي/إنجليزي مع خبرة أصلية في RTL",
          "متخصصون في تكامل مدى و STC Pay وبوابات الدفع السعودية",
          "منهجية تحول رقمي متوافقة مع رؤية 2030",
          "تطوير رشيق مع عروض تقدم أسبوعية وتقارير شفافة",
          "دعم ما بعد الإطلاق والصيانة ومراقبة الأداء مشمولة",
          "استضافة سحابية على AWS الشرق الأوسط (البحرين) لتأخير فائق الانخفاض",
          "ممارسات أمنية متوافقة مع ISO وامتثال إقامة البيانات السعودية",
          "سجل حافل بأكثر من 500 مشروع ناجح في دول مجلس التعاون الخليجي"
        ]
      },

      pricing: {
        title: "أسعار تطوير الويب في المملكة العربية السعودية",
        note: "الأسعار بالريال السعودي",
        packages: [
          { name: "صفحة هبوط", price: "ابتداءً من 5,000 ريال", features: ["تصميم متجاوب صفحة واحدة", "محتوى عربي/إنجليزي", "أساسيات SEO والتحليلات", "نموذج اتصال متكامل"] },
          { name: "موقع شركة", price: "ابتداءً من 15,000 ريال", features: ["موقع متعدد الصفحات ثنائي اللغة", "لوحة تحكم CMS", "تحسين SEO كامل", "استضافة ودعم سنة"] },
          { name: "تطبيق ويب", price: "ابتداءً من 40,000 ريال", features: ["SaaS / بوابة مخصصة", "مصادقة المستخدمين والأدوار", "تكامل API", "لوحة تحكم وتقارير"] },
          { name: "بوابة مؤسسية", price: "حسب الطلب", features: ["حل مؤسسي كامل", "تكامل الأنظمة القديمة", "أتمتة سير العمل المخصص", "مدير مشروع مخصص"] }
        ]
      },

      faq: {
        title: "الأسئلة الشائعة",
        list: [
          { q: "كم يستغرق بناء موقع ويب في المملكة العربية السعودية؟", a: "صفحة هبوط تستغرق 1-2 أسبوع، موقع شركة 3-6 أسابيع، وتطبيق ويب مخصص 2-4 أشهر حسب التعقيد. نقدم جداول زمنية مفصلة خلال الاستشارة المجانية." },
          { q: "هل تبنون مواقع عربية أولاً مع دعم RTL كامل؟", a: "بالتأكيد. جميع مواقعنا مبنية بدعم RTL عربي أصلي من الأساس. نضمن تبديلاً مثالياً ثنائي اللغة عربي/إنجليزي مع خط مناسب وعكس التخطيط والتكيف الثقافي." },
          { q: "هل يمكنكم تكامل مدى وبوابات الدفع السعودية؟", a: "نعم، نقوم بتكامل جميع طرق الدفع السعودية الرئيسية بما في ذلك مدى و STC Pay و Apple Pay و Visa/Mastercard وبوابات شهيرة مثل HyperPay و Moyasar و Tap Payments." },
          { q: "هل توفرون استضافة وصيانة مستمرة؟", a: "نعم، جميع باقاتنا تشمل استضافة على بنية سحابية مع توفر في المنطقة السعودية. نقدم خطط صيانة شهرية وسنوية تشمل التحديثات والأمان والنسخ الاحتياطي ومراقبة الأداء." },
          { q: "هل يمكنكم المساعدة في SEO والتسويق الرقمي للسوق السعودي؟", a: "نعم، نقدم خدمات SEO شاملة بالعربية والإنجليزية مصممة للسوق السعودي. يشمل ذلك بحث الكلمات المفتاحية والتحسين على الصفحة واستراتيجية المحتوى وإعداد ملف Google Business والتتبع المستمر." }
        ]
      },

      cta: {
        title: "ابدأ مشروع تطوير الويب في المملكة العربية السعودية",
        desc: "احصل على استشارة مجانية وعرض تفصيلي لمشروع تطوير الويب الخاص بك. فريقنا جاهز لمساعدتك في بناء حضور رقمي قوي في السوق السعودي.",
        button: "احصل على استشارة مجانية",
        whatsapp: "+213549575512",
        email: "contact@symloop.com"
      },

      related: {
        title: "مقالات ذات صلة",
        articles: [
          { title: "تطوير تطبيقات الجوال في المملكة العربية السعودية 2026", slug: "mobile-app-development-saudi-arabia-2026" },
          { title: "حلول التجارة الإلكترونية في السعودية مع تكامل مدى", slug: "ecommerce-solutions-saudi-arabia-mada-2026" },
          { title: "التحول الرقمي في المملكة العربية السعودية - رؤية 2030", slug: "digital-transformation-saudi-arabia-vision-2030" }
        ]
      },

      seoKeywords: [
        "شركة تطوير مواقع ويب السعودية",
        "تطوير مواقع الرياض",
        "مطور ويب جدة",
        "تصميم مواقع المملكة العربية السعودية",
        "موقع مخصص السعودية",
        "تطوير تجارة إلكترونية السعودية",
        "تكامل مدى موقع ويب",
        "تطوير مواقع عربية",
        "تطبيق ويب السعودية",
        "رؤية 2030 حلول رقمية"
      ]
    },

    fr: {
      metaTitle: "Societe de Developpement Web en Arabie Saoudite 2026 | Sites & Applications Pro | Symloop",
      metaDesc: "Societe leader de developpement web en Arabie Saoudite. Sites personnalises, applications web, e-commerce avec integration MADA. Solutions digitales Vision 2030. Riyad, Djeddah, Dammam. Consultation gratuite.",
      date: "1 Fevrier 2026",
      readTime: "13 min",
      author: "Equipe Symloop",
      category: "Developpement Web",
      backToBlog: "Retour au Blog",

      title: "Societe de Developpement Web en Arabie Saoudite",
      subtitle: "Sites Web Professionnels, Applications Web et Solutions E-commerce pour le Marche Saoudien - Excellence Digitale Vision 2030",

      intro: "L'Arabie Saoudite connait une transformation digitale sans precedent portee par la Vision 2030. Avec plus de 36 millions d'utilisateurs Internet et une economie numerique en pleine expansion evaluee a plus de 12 milliards de dollars, le Royaume offre d'immenses opportunites aux entreprises investissant dans une presence web professionnelle. Du hub technologique florissant de Riyad au coeur commercial de Djeddah, les entreprises saoudiennes ont besoin de sites web et d'applications de classe mondiale pour rivaliser sur le marche numerique actuel. Symloop fournit des solutions de developpement web de pointe adaptees specifiquement au marche saoudien, combinant des normes de qualite internationales avec une comprehension approfondie des exigences commerciales locales, un design UX arabe d'abord et une integration transparente avec les systemes de paiement saoudiens comme MADA.",

      marketStats: {
        title: "Apercu du Marche Digital Saoudien",
        stats: [
          { value: "36M+", label: "Utilisateurs Internet" },
          { value: "98%", label: "Penetration Internet" },
          { value: "12 Mrd$+", label: "Taille de l'Economie Digitale" },
          { value: "85%+", label: "Trafic Web Mobile" }
        ]
      },

      services: {
        title: "Nos Services de Developpement Web en Arabie Saoudite",
        list: [
          {
            icon: Globe,
            name: "Sites Web d'Entreprise",
            desc: "Sites web d'entreprise professionnels bilingues (arabe/anglais) avec un design moderne et responsive. Concu pour la credibilite de marque, optimise pour les moteurs de recherche saoudiens.",
            features: ["Support bilingue arabe et anglais", "Design mobile-first responsive", "Integration d'identite de marque", "Hebergement saoudien et CDN rapide"]
          },
          {
            icon: Monitor,
            name: "Applications Web",
            desc: "Plateformes SaaS personnalisees, tableaux de bord, portails clients et applications temps reel. Solutions enterprise construites avec des technologies modernes et scalables.",
            features: ["Developpement de plateformes SaaS", "Tableaux de bord et analytiques temps reel", "Portails clients et employes", "Integrations API et automatisation"]
          },
          {
            icon: ShoppingCart,
            name: "Sites E-commerce",
            desc: "Boutiques en ligne completes avec integration de paiement MADA, catalogues produits, gestion des stocks et support multi-devises pour le marche saoudien et du Golfe.",
            features: ["Integration MADA et STC Pay", "Gestion de catalogue produits", "Suivi commandes et inventaire", "Support multi-devises GCC"]
          },
          {
            icon: Search,
            name: "Pages d'Atterrissage et SEO",
            desc: "Pages d'atterrissage a forte conversion optimisees pour Google Ads et le SEO arabe. Design base sur les donnees avec tests A/B et suivi des conversions.",
            features: ["Optimisation SEO arabe et anglais", "Pages d'atterrissage Google Ads", "Optimisation du taux de conversion", "Optimisation performance et vitesse"]
          }
        ]
      },

      techStack: {
        title: "Technologies Utilisees",
        technologies: [
          { name: "Next.js / React", description: "Framework frontend moderne pour des applications web rapides, SEO-friendly, avec un rendu serveur et une experience utilisateur exceptionnelle." },
          { name: "Node.js", description: "Runtime backend scalable pour construire des APIs haute performance, des microservices et des applications serveur temps reel." },
          { name: "Python / Django", description: "Framework backend robuste ideal pour les applications basees sur les donnees, l'integration IA et la logique metier complexe." },
          { name: "PostgreSQL / MongoDB", description: "Bases de donnees enterprise pour donnees structurees et non structurees, garantissant fiabilite, securite et performance." },
          { name: "AWS / Azure", description: "Infrastructure cloud avec disponibilite dans la region saoudienne pour un hebergement a faible latence et la conformite de residence des donnees." },
          { name: "Tailwind CSS", description: "Framework CSS utilitaire pour construire des interfaces utilisateur personnalisees, responsives et visuellement impressionnantes avec support RTL." }
        ]
      },

      cities: {
        title: "Villes Desservies en Arabie Saoudite",
        list: [
          { name: "Riyad" },
          { name: "Djeddah" },
          { name: "Dammam" },
          { name: "La Mecque" },
          { name: "Medine" }
        ]
      },

      sectors: {
        title: "Secteurs Desservis en Arabie Saoudite",
        list: [
          { icon: Building2, name: "Gouvernement" },
          { icon: CreditCard, name: "Banque et Finance" },
          { icon: Heart, name: "Sante" },
          { icon: Award, name: "Education" },
          { icon: Layers, name: "Immobilier" },
          { icon: ShoppingCart, name: "Commerce de Detail" },
          { icon: Globe, name: "Tourisme et Hotellerie" },
          { icon: Briefcase, name: "Logistique" },
          { icon: Zap, name: "Energie et Services Publics" }
        ]
      },

      whyChoose: {
        title: "Pourquoi Choisir Symloop pour le Developpement Web en Arabie Saoudite",
        reasons: [
          "Equipe de developpement bilingue arabe/anglais avec expertise RTL native",
          "Specialistes en integration MADA, STC Pay et passerelles de paiement saoudiennes",
          "Methodologie de transformation digitale alignee sur la Vision 2030",
          "Developpement agile avec demos hebdomadaires et rapports transparents",
          "Support post-lancement, maintenance et surveillance des performances inclus",
          "Hebergement cloud sur AWS Moyen-Orient (Bahrein) pour une latence ultra-faible",
          "Pratiques de securite conformes ISO et conformite de residence des donnees saoudiennes",
          "Bilan eprouve avec plus de 500 projets reussis dans le GCC"
        ]
      },

      pricing: {
        title: "Tarifs de Developpement Web en Arabie Saoudite",
        note: "Prix en SAR (Riyal Saoudien)",
        packages: [
          { name: "Page d'Atterrissage", price: "A partir de 5 000 SAR", features: ["Design responsive une page", "Contenu arabe/anglais", "SEO de base et analytiques", "Formulaire de contact integre"] },
          { name: "Site d'Entreprise", price: "A partir de 15 000 SAR", features: ["Site multi-pages bilingue", "Panneau d'administration CMS", "Optimisation SEO complete", "Hebergement et support 1 an"] },
          { name: "Application Web", price: "A partir de 40 000 SAR", features: ["SaaS / Portail personnalise", "Authentification et roles", "Integrations API", "Tableau de bord et rapports"] },
          { name: "Portail Enterprise", price: "Sur Devis", features: ["Solution enterprise complete", "Integration systemes existants", "Automatisation workflows", "Chef de projet dedie"] }
        ]
      },

      faq: {
        title: "Questions Frequentes",
        list: [
          { q: "Combien de temps faut-il pour creer un site web en Arabie Saoudite ?", a: "Une page d'atterrissage prend 1-2 semaines, un site d'entreprise 3-6 semaines, et une application web personnalisee 2-4 mois selon la complexite. Nous fournissons des delais detailles lors de la consultation gratuite." },
          { q: "Construisez-vous des sites web arabe d'abord avec support RTL complet ?", a: "Absolument. Tous nos sites sont construits avec un support RTL arabe natif des le depart. Nous garantissons un basculement bilingue arabe/anglais parfait avec typographie appropriee, miroir de mise en page et adaptation culturelle." },
          { q: "Pouvez-vous integrer MADA et les passerelles de paiement saoudiennes ?", a: "Oui, nous integrons toutes les methodes de paiement saoudiennes majeures incluant MADA, STC Pay, Apple Pay, Visa/Mastercard, et des passerelles populaires comme HyperPay, Moyasar et Tap Payments." },
          { q: "Proposez-vous l'hebergement et la maintenance continue ?", a: "Oui, tous nos packages incluent l'hebergement sur infrastructure cloud avec disponibilite dans la region saoudienne. Nous offrons des plans de maintenance mensuels et annuels couvrant mises a jour, correctifs de securite, sauvegardes et surveillance des performances." },
          { q: "Pouvez-vous aider avec le SEO et le marketing digital pour le marche saoudien ?", a: "Oui, nous fournissons des services SEO complets en arabe et anglais adaptes au marche saoudien. Cela inclut la recherche de mots-cles, l'optimisation on-page, la strategie de contenu, la configuration Google Business Profile et le suivi continu." }
        ]
      },

      cta: {
        title: "Lancez Votre Projet de Developpement Web en Arabie Saoudite",
        desc: "Obtenez une consultation gratuite et une proposition detaillee pour votre projet de developpement web. Notre equipe est prete a vous aider a batir une presence digitale puissante sur le marche saoudien.",
        button: "Consultation Gratuite",
        whatsapp: "+213549575512",
        email: "contact@symloop.com"
      },

      related: {
        title: "Articles Connexes",
        articles: [
          { title: "Developpement d'Applications Mobiles en Arabie Saoudite 2026", slug: "mobile-app-development-saudi-arabia-2026" },
          { title: "Solutions E-commerce en Arabie Saoudite avec Integration MADA", slug: "ecommerce-solutions-saudi-arabia-mada-2026" },
          { title: "Transformation Digitale en Arabie Saoudite - Vision 2030", slug: "digital-transformation-saudi-arabia-vision-2030" }
        ]
      },

      seoKeywords: [
        "societe developpement web Arabie Saoudite",
        "developpement site web Riyad",
        "developpeur web Djeddah",
        "creation site web Arabie Saoudite",
        "site web personnalise Arabie Saoudite",
        "developpement e-commerce Arabie Saoudite",
        "integration paiement MADA",
        "developpement site web arabe",
        "application web Arabie Saoudite",
        "Vision 2030 solutions digitales"
      ]
    }
  };

  const t = content[locale] || content.fr;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
    "description": t.metaDesc,
    "datePublished": "2026-02-01",
    "dateModified": "2026-02-01",
    "author": { "@type": "Organization", "name": "Symloop" },
    "publisher": {
      "@type": "Organization",
      "name": "Symloop",
      "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" }
    },
    "mainEntityOfPage": "https://symloop.com/blog/web-development-company-saudi-arabia-2026",
    "image": "https://symloop.com/logo.png",
    "inLanguage": locale,
    "keywords": t.seoKeywords.join(', ')
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
    "name": "Symloop - Web Development Saudi Arabia",
    "description": t.metaDesc,
    "url": "https://symloop.com/blog/web-development-company-saudi-arabia-2026",
    "telephone": "+213549575512",
    "email": "contact@symloop.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Riyadh",
      "addressRegion": "Riyadh",
      "addressCountry": "SA"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": "24.7136", "longitude": "46.6753" },
    "areaServed": [
      { "@type": "Country", "name": "Saudi Arabia" },
      { "@type": "City", "name": "Riyadh" },
      { "@type": "City", "name": "Jeddah" },
      { "@type": "City", "name": "Dammam" }
    ],
    "priceRange": "5000 SAR - 200000 SAR",
    "openingHours": "Su-Th 08:00-18:00"
  };

  return (
    <>
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDesc} />
        <meta name="keywords" content={t.seoKeywords.join(', ')} />
        <link rel="canonical" href="https://symloop.com/blog/web-development-company-saudi-arabia-2026" />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDesc} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/web-development-company-saudi-arabia-2026" />
        <meta property="og:image" content="https://symloop.com/logo.png" />
        <meta property="og:locale" content={locale === 'ar' ? 'ar_SA' : locale === 'en' ? 'en_US' : 'fr_FR'} />
        <meta property="og:site_name" content="Symloop" />
        <meta property="article:published_time" content={t.date || "2026-02-01"} />
        <meta property="article:modified_time" content="2026-02-07" />
        <meta property="article:section" content={t.category} />
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content="Riyadh" />
        <meta name="geo.position" content="24.7136;46.6753" />
        <meta name="ICBM" content="24.7136, 46.6753" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://symloop.com" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" }, { "@type": "ListItem", "position": 3, "name": t.title }] }) }} />
      </Head>

      <main className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-black to-green-600/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />{t.backToBlog}
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4" />Saudi Arabia
              </span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm flex items-center gap-2">
                <Code className="w-4 h-4" />{t.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{t.title}</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">{t.subtitle}</p>

            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{t.date}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{t.readTime}</span>
              <span className="flex items-center gap-2"><User className="w-4 h-4" />{t.author}</span>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">

            {/* Intro */}
            <p className="text-xl text-gray-300 leading-relaxed mb-16">{t.intro}</p>
            <p className="text-base text-gray-400 mt-6 leading-relaxed">
              {locale === 'ar'
                ? <>استكشف أيضاً <Link href="/services" className="text-cyan-400 hover:underline">خدماتنا الكاملة</Link> بما في ذلك <Link href="/blog/mobile-app-development-saudi-arabia-2026" className="text-cyan-400 hover:underline">تطوير التطبيقات في السعودية</Link> و<Link href="/blog/web-development-company-kuwait-2026" className="text-cyan-400 hover:underline">تطوير المواقع في الكويت</Link>.</>
                : <>Explore our full range of <Link href="/services" className="text-cyan-400 hover:underline">IT services</Link>, including <Link href="/blog/mobile-app-development-saudi-arabia-2026" className="text-cyan-400 hover:underline">mobile app development in Saudi Arabia</Link> and <Link href="/blog/web-development-company-kuwait-2026" className="text-cyan-400 hover:underline">web development in Kuwait</Link>.</>
              }
            </p>

            {/* Market Stats */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-emerald-400" />{t.marketStats.title}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {t.marketStats.stats.map((stat, i) => (
                  <div key={i} className="bg-gradient-to-br from-emerald-500/10 to-green-500/5 border border-emerald-500/20 rounded-xl p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Layers className="w-8 h-8 text-emerald-400" />{t.services.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {t.services.list.map((service, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-500/50 transition-colors">
                    <service.icon className="w-10 h-10 text-emerald-400 mb-4" />
                    <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
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

            {/* Tech Stack */}
            <div className="mb-16 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Cpu className="w-7 h-7 text-emerald-400" />{t.techStack.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {t.techStack.technologies.map((tech, i) => (
                  <div key={i} className="bg-black/30 rounded-lg p-4">
                    <h3 className="font-bold text-emerald-400 mb-1">{tech.name}</h3>
                    <p className="text-sm text-gray-400">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cities */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <MapPin className="w-8 h-8 text-emerald-400" />{t.cities.title}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {t.cities.list.map((city, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:border-emerald-500/40 transition-colors">
                    <MapPin className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                    <h3 className="font-bold text-lg mb-1">{city.name}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Sectors */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Target className="w-8 h-8 text-emerald-400" />{t.sectors.title}
              </h2>
              <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                {t.sectors.list.map((sector, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-emerald-500/40 transition-colors">
                    <sector.icon className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                    <span className="text-sm font-medium">{sector.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Symloop */}
            <div className="mb-16 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-7 h-7 text-emerald-400" />{t.whyChoose.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {t.whyChoose.reasons.map((reason, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                <CreditCard className="w-8 h-8 text-emerald-400" />{t.pricing.title}
              </h2>
              <p className="text-gray-400 text-sm mb-8">{t.pricing.note}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {t.pricing.packages.map((pkg, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-500/50 transition-colors flex flex-col">
                    <h3 className="text-lg font-bold mb-2">{pkg.name}</h3>
                    <p className="text-emerald-400 font-bold text-xl mb-4">{pkg.price}</p>
                    <ul className="space-y-2 flex-1">
                      {pkg.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-gray-400">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <MessageCircle className="w-8 h-8 text-emerald-400" />{t.faq.title}
              </h2>
              <div className="space-y-4">
                {t.faq.list.map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
                    <h3 className="font-bold mb-3 flex items-start gap-2">
                      <span className="text-emerald-400 font-bold text-lg">{i + 1}.</span>
                      {item.q}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mb-16 bg-gradient-to-r from-emerald-600/20 to-green-600/20 border border-emerald-500/30 rounded-2xl p-8 text-center">
              <Rocket className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.cta.title}</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{t.cta.desc}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={`https://wa.me/${t.cta.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-medium transition-colors"
                >
                  <Phone className="w-5 h-5" />{t.cta.button}
                </a>
                <a
                  href={`mailto:${t.cta.email}`}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors"
                >
                  <Mail className="w-5 h-5" />{t.cta.email}
                </a>
              </div>
              <p className="text-gray-500 text-sm mt-4">WhatsApp: {t.cta.whatsapp}</p>
            </div>

            {/* Related Articles */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="w-7 h-7 text-emerald-400" />{t.related.title}
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {t.related.articles.map((article, i) => (
                  <Link
                    key={i}
                    href={`/blog/${article.slug}`}
                    className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-500/50 transition-colors block"
                  >
                    <h3 className="font-medium text-sm text-gray-300 hover:text-emerald-400 transition-colors">{article.title}</h3>
                    <span className="text-emerald-400 text-xs mt-2 inline-block">{locale === 'ar' ? 'اقرأ المزيد' : locale === 'fr' ? 'Lire la suite' : 'Read more'} &rarr;</span>
                  </Link>
                ))}
              </div>

            <h3 className="text-lg font-semibold text-gray-400 mt-8 mb-4">
              {locale === 'ar' ? 'المزيد من خدماتنا في المنطقة' : 'More From Our Regional Coverage'}
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              <Link href="/blog/web-development-company-uae-dubai-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'تطوير المواقع في الإمارات' : 'Web Development in the UAE'}
                </h3>
                <span className="text-cyan-500 text-sm flex items-center gap-1">
                  {locale === 'ar' ? 'اقرأ المزيد' : 'Read more'}
                  <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? '' : 'rotate-180'}`} />
                </span>
              </Link>
              <Link href="/blog/mobile-app-development-kuwait-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'تطوير التطبيقات في الكويت' : 'Mobile App Development in Kuwait'}
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
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
