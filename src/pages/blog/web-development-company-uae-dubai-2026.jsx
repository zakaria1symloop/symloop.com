"use client";
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArrowLeft, Calendar, Clock, User, MapPin, Code, Smartphone, Brain,
  CheckCircle, Phone, Mail, Building2, Rocket, Users, Shield, Zap,
  Star, Award, Globe, TrendingUp, Target, Database, CreditCard,
  ShoppingCart, BarChart3, Layers, MessageCircle, Briefcase, Layout,
  Monitor, Search, PenTool
} from 'lucide-react';

export default function WebDevelopmentUaeDubai2026() {
  const router = useRouter();
  const locale = router.locale || 'en';
  const isRTL = locale === 'ar';
  const [openFaq, setOpenFaq] = useState(null);

  const content = {
    en: {
      metaTitle: "Web Development Company UAE & Dubai 2026 | Website Design | Symloop",
      metaDescription: "Leading web development company in UAE & Dubai 2026. Custom websites, web applications, e-commerce solutions. Bilingual AR/EN. Next.js, React, Node.js. Free consultation.",
      title: "Web Development Company in UAE & Dubai",
      subtitle: "Custom websites, web applications & e-commerce solutions for the Gulf's most dynamic digital market",
      category: "Web Development",
      readTime: "14 min",
      author: "Symloop Team",
      date: "2026-02-01",
      backLink: "Back to Blog",
      intro: "Dubai and Abu Dhabi have cemented their positions as global technology hubs, with the UAE's smart city initiatives driving unprecedented demand for world-class web solutions. From DIFC fintech portals to Dubai Mall e-commerce platforms, businesses across the Emirates require bilingual Arabic/English websites that deliver exceptional user experiences across desktop and mobile. With 99% internet penetration and a digitally-savvy population of over 10 million, the UAE represents one of the most connected markets on the planet -- and Symloop is here to build the web infrastructure that powers it.",
      statsTitle: "UAE Digital Market 2026",
      stats: [
        { value: "10M+", label: "Internet Users (99%)" },
        { value: "98%", label: "Internet Penetration" },
        { value: "$8B+", label: "Digital Economy" },
        { value: "90%+", label: "Mobile Web Traffic" }
      ],
      servicesTitle: "Our Web Development Services",
      servicesSubtitle: "End-to-end digital solutions tailored for the UAE market",
      services: [
        { icon: "Globe", title: "Corporate Websites", desc: "Professional bilingual Arabic/English corporate websites with responsive design, advanced SEO optimization, and culturally adapted content. Perfect for companies establishing their digital presence in the Emirates.", features: ["Bilingual AR/EN", "Responsive Design", "SEO Optimized", "RTL Support"] },
        { icon: "Monitor", title: "Web Applications", desc: "Custom SaaS platforms, business dashboards, client portals, and internal management systems. Built with modern frameworks for maximum performance and scalability in the Gulf market.", features: ["SaaS Platforms", "Admin Dashboards", "Client Portals", "API Integration"] },
        { icon: "ShoppingCart", title: "E-commerce Websites", desc: "Full-featured online stores with multi-currency support (AED, USD, EUR), payment gateway integration (Network International, PayTabs, Telr), and Arabic product catalogs.", features: ["Online Stores", "Payment Gateways", "Multi-Currency", "Arabic Catalog"] },
        { icon: "Search", title: "Landing Pages & SEO", desc: "High-converting landing pages optimized for the UAE market. Arabic SEO, Google Ads landing pages, conversion rate optimization, and A/B testing for maximum ROI.", features: ["Conversion Optimization", "Arabic SEO", "A/B Testing", "Google Ads Ready"] }
      ],
      techTitle: "Technology Stack",
      techSubtitle: "We use the latest technologies trusted by global enterprises",
      techStack: [
        { name: "Next.js / React", desc: "Server-side rendering, blazing-fast performance", category: "Frontend" },
        { name: "Node.js / Express", desc: "Scalable backend APIs and microservices", category: "Backend" },
        { name: "Python / Django", desc: "AI integration, data processing, automation", category: "Backend" },
        { name: "PostgreSQL / MongoDB", desc: "Reliable data storage, flexible schemas", category: "Database" },
        { name: "AWS / Azure", desc: "UAE region data centers, cloud infrastructure", category: "Cloud" },
        { name: "Tailwind CSS", desc: "Modern UI design, RTL-ready styling", category: "Styling" }
      ],
      citiesTitle: "Serving All Emirates",
      citiesSubtitle: "Web development expertise across the UAE",
      cities: [
        { name: "Dubai" },
        { name: "Abu Dhabi" },
        { name: "Sharjah" },
        { name: "Ajman" },
        { name: "Ras Al Khaimah" }
      ],
      sectorsTitle: "Industries We Serve",
      sectorsSubtitle: "Deep expertise across UAE's key economic sectors",
      sectors: [
        { name: "Tourism & Hospitality", icon: "Globe", desc: "Hotel booking platforms, travel portals, tour operator websites" },
        { name: "Real Estate", icon: "Building2", desc: "Property listing portals, virtual tours, CRM dashboards" },
        { name: "Finance & Fintech", icon: "CreditCard", desc: "Banking portals, payment solutions, investment platforms" },
        { name: "Healthcare", icon: "Shield", desc: "Patient portals, telemedicine, clinic management systems" },
        { name: "Government & Smart City", icon: "Award", desc: "E-government services, smart city dashboards, public portals" },
        { name: "Retail & E-commerce", icon: "ShoppingCart", desc: "Online stores, marketplace platforms, inventory systems" },
        { name: "Education & EdTech", icon: "Brain", desc: "LMS platforms, online course portals, student management" },
        { name: "Media & Entertainment", icon: "Layout", desc: "Content platforms, streaming portals, news websites" },
        { name: "Free Zones & Business Setup", icon: "Briefcase", desc: "License portals, business setup platforms, investor dashboards" }
      ],
      whyTitle: "Why Choose Symloop for Web Development in UAE",
      whyReasons: [
        { icon: "Globe", title: "Native Arabic & English Support", desc: "Full RTL implementation with culturally adapted content for both Arabic and English-speaking audiences in the UAE." },
        { icon: "Zap", title: "Lightning-Fast Performance", desc: "Core Web Vitals optimized websites with sub-2-second load times, critical for UAE's mobile-first users." },
        { icon: "Shield", title: "Enterprise-Grade Security", desc: "SSL, WAF, DDoS protection, and compliance with UAE data protection regulations (PDPL)." },
        { icon: "TrendingUp", title: "SEO That Drives Results", desc: "Bilingual SEO strategy targeting both Arabic and English search queries in the UAE market." },
        { icon: "Users", title: "Dedicated Project Team", desc: "A dedicated project manager, UI/UX designer, and development team for every project." },
        { icon: "Rocket", title: "Agile Delivery", desc: "2-week sprint cycles with regular demos, transparent communication, and on-time delivery." },
        { icon: "Star", title: "Post-Launch Support", desc: "12-month warranty, ongoing maintenance, performance monitoring, and continuous improvement." },
        { icon: "Award", title: "Proven Track Record", desc: "Trusted by businesses across the MENA region with a portfolio spanning multiple industries." }
      ],
      pricingTitle: "Web Development Pricing (AED)",
      pricingSubtitle: "Transparent pricing tailored for the UAE market",
      pricingNote: "Prices are indicative. Final quote depends on project scope, complexity, and specific requirements. Contact us for a free detailed estimate.",
      pricing: [
        { name: "Landing Page", price: "From 8,000 AED", desc: "High-converting single page", features: ["1-3 page design", "Responsive layout", "Contact form", "Basic SEO", "1 language", "2-3 weeks delivery"], popular: false },
        { name: "Corporate Website", price: "From 20,000 AED", desc: "Professional business presence", features: ["5-15 pages", "Bilingual AR/EN", "CMS Dashboard", "Advanced SEO", "RTL Support", "Blog system", "4-6 weeks delivery"], popular: true },
        { name: "Web Application", price: "From 55,000 AED", desc: "Custom SaaS or portal", features: ["Custom features", "User authentication", "Admin dashboard", "API integrations", "Database design", "Cloud hosting", "8-16 weeks delivery"], popular: false },
        { name: "Enterprise Portal", price: "On Quote", desc: "Large-scale enterprise solution", features: ["Unlimited features", "Multi-tenant architecture", "Enterprise security", "Dedicated team", "SLA guarantee", "24/7 support", "Custom timeline"], popular: false }
      ],
      faqTitle: "Frequently Asked Questions",
      faq: [
        { q: "How much does website development cost in Dubai/UAE in 2026?", a: "Website development costs in the UAE range from 8,000 AED for a simple landing page to 55,000+ AED for complex web applications. Corporate bilingual websites typically cost between 20,000-40,000 AED. Enterprise portals are quoted based on specific requirements. We provide free detailed estimates within 24 hours." },
        { q: "How long does it take to build a website in the UAE?", a: "A landing page takes 2-3 weeks. A corporate bilingual website requires 4-6 weeks. Web applications typically take 8-16 weeks depending on complexity. We follow Agile methodology with 2-week sprints and regular demos to keep you informed throughout the process." },
        { q: "Do you build bilingual Arabic/English websites?", a: "Yes, bilingual and multilingual websites are our specialty. We implement native RTL (Right-to-Left) support for Arabic, culturally adapted designs, and bilingual SEO optimization. Our websites seamlessly switch between Arabic and English with proper typography, layout mirroring, and content adaptation." },
        { q: "Can you help with SEO for the UAE market?", a: "Absolutely. We implement comprehensive bilingual SEO strategies targeting both Arabic and English search queries. This includes local SEO for specific Emirates, Google Business Profile optimization, structured data markup, and content strategies tailored to UAE search behavior." },
        { q: "Do you provide ongoing support after the website launches?", a: "Yes, all our projects include a 12-month warranty covering bug fixes and minor updates. We also offer ongoing maintenance packages that include hosting management, security updates, content updates, performance monitoring, and feature enhancements." }
      ],
      ctaTitle: "Ready to Build Your Website in UAE?",
      ctaSubtitle: "Get a free consultation and detailed project estimate within 24 hours",
      ctaWhatsApp: "Chat on WhatsApp",
      ctaEmail: "Send Email",
      ctaPhone: "Call Us",
      relatedTitle: "Related Articles",
      related: [
        { title: "Mobile App Development UAE & Dubai 2026", href: "/blog/mobile-app-development-uae-dubai-2026", tag: "Mobile" },
        { title: "E-commerce Solutions UAE & Dubai 2026", href: "/blog/ecommerce-solutions-uae-dubai-2026", tag: "E-commerce" },
        { title: "Digital Transformation UAE Smart Government 2026", href: "/blog/digital-transformation-uae-smart-government-2026", tag: "Digital" }
      ],
      tagsLabel: "Tags"
    },
    ar: {
      metaTitle: "شركة تطوير مواقع الإمارات ودبي 2026 | تصميم مواقع | سيملوب",
      metaDescription: "شركة رائدة في تطوير المواقع في الإمارات ودبي 2026. مواقع مخصصة، تطبيقات ويب، حلول تجارة إلكترونية. ثنائي اللغة عربي/إنجليزي. Next.js، React، Node.js. استشارة مجانية.",
      title: "شركة تطوير مواقع الويب في الإمارات ودبي",
      subtitle: "مواقع مخصصة وتطبيقات ويب وحلول تجارة إلكترونية لأكثر أسواق الخليج ديناميكية",
      category: "تطوير الويب",
      readTime: "14 دقيقة",
      author: "فريق سيملوب",
      date: "2026-02-01",
      backLink: "العودة للمدونة",
      intro: "رسّخت دبي وأبوظبي مكانتهما كمراكز تقنية عالمية، حيث تدفع مبادرات المدن الذكية في الإمارات طلباً غير مسبوق على حلول الويب العالمية. من بوابات التكنولوجيا المالية في مركز دبي المالي العالمي إلى منصات التجارة الإلكترونية لدبي مول، تحتاج الشركات في جميع أنحاء الإمارات إلى مواقع ثنائية اللغة عربي/إنجليزي توفر تجارب مستخدم استثنائية عبر الحاسوب والجوال. مع نسبة انتشار إنترنت 99% وسكان رقميين يتجاوزون 10 ملايين، تمثل الإمارات أحد أكثر الأسواق اتصالاً على وجه الأرض -- وسيملوب هنا لبناء البنية التحتية الرقمية التي تشغّلها.",
      statsTitle: "سوق الإمارات الرقمي 2026",
      stats: [
        { value: "10M+", label: "مستخدمي إنترنت (99%)" },
        { value: "98%", label: "نسبة انتشار الإنترنت" },
        { value: "$8B+", label: "الاقتصاد الرقمي" },
        { value: "90%+", label: "حركة الويب عبر الجوال" }
      ],
      servicesTitle: "خدمات تطوير الويب لدينا",
      servicesSubtitle: "حلول رقمية شاملة مصممة لسوق الإمارات",
      services: [
        { icon: "Globe", title: "مواقع الشركات", desc: "مواقع شركات احترافية ثنائية اللغة عربي/إنجليزي مع تصميم متجاوب وتحسين SEO متقدم ومحتوى مكيّف ثقافياً. مثالية للشركات التي تؤسس حضورها الرقمي في الإمارات.", features: ["ثنائي اللغة عربي/إنجليزي", "تصميم متجاوب", "محسّن لمحركات البحث", "دعم RTL"] },
        { icon: "Monitor", title: "تطبيقات الويب", desc: "منصات SaaS مخصصة ولوحات معلومات الأعمال وبوابات العملاء وأنظمة الإدارة الداخلية. مبنية بأحدث الأطر لأقصى أداء وقابلية توسع في سوق الخليج.", features: ["منصات SaaS", "لوحات إدارة", "بوابات العملاء", "تكامل API"] },
        { icon: "ShoppingCart", title: "مواقع التجارة الإلكترونية", desc: "متاجر إلكترونية كاملة الميزات مع دعم متعدد العملات (درهم، دولار، يورو) وتكامل بوابات الدفع (Network International، PayTabs، Telr) وكتالوجات منتجات عربية.", features: ["متاجر إلكترونية", "بوابات الدفع", "متعدد العملات", "كتالوج عربي"] },
        { icon: "Search", title: "صفحات الهبوط و SEO", desc: "صفحات هبوط عالية التحويل محسّنة لسوق الإمارات. SEO عربي، صفحات إعلانات جوجل، تحسين معدل التحويل، واختبار A/B لأقصى عائد استثمار.", features: ["تحسين التحويل", "SEO عربي", "اختبار A/B", "جاهز لإعلانات جوجل"] }
      ],
      techTitle: "المكدس التقني",
      techSubtitle: "نستخدم أحدث التقنيات المعتمدة من المؤسسات العالمية",
      techStack: [
        { name: "Next.js / React", desc: "تصيير من جانب الخادم، أداء فائق السرعة", category: "الواجهة الأمامية" },
        { name: "Node.js / Express", desc: "واجهات API قابلة للتوسع وخدمات مصغرة", category: "الخلفية" },
        { name: "Python / Django", desc: "تكامل الذكاء الاصطناعي، معالجة البيانات", category: "الخلفية" },
        { name: "PostgreSQL / MongoDB", desc: "تخزين بيانات موثوق، مخططات مرنة", category: "قاعدة البيانات" },
        { name: "AWS / Azure", desc: "مراكز بيانات في منطقة الإمارات، بنية سحابية", category: "السحابة" },
        { name: "Tailwind CSS", desc: "تصميم UI حديث، تنسيق جاهز لـ RTL", category: "التنسيق" }
      ],
      citiesTitle: "نخدم جميع الإمارات",
      citiesSubtitle: "خبرة في تطوير الويب عبر الإمارات",
      cities: [
        { name: "دبي" },
        { name: "أبوظبي" },
        { name: "الشارقة" },
        { name: "عجمان" },
        { name: "رأس الخيمة" }
      ],
      sectorsTitle: "القطاعات التي نخدمها",
      sectorsSubtitle: "خبرة عميقة في القطاعات الاقتصادية الرئيسية في الإمارات",
      sectors: [
        { name: "السياحة والضيافة", icon: "Globe", desc: "منصات حجز فنادق، بوابات سفر، مواقع منظمي الرحلات" },
        { name: "العقارات", icon: "Building2", desc: "بوابات قوائم العقارات، جولات افتراضية، لوحات CRM" },
        { name: "المالية والتكنولوجيا المالية", icon: "CreditCard", desc: "بوابات مصرفية، حلول دفع، منصات استثمار" },
        { name: "الرعاية الصحية", icon: "Shield", desc: "بوابات المرضى، الطب عن بُعد، أنظمة إدارة العيادات" },
        { name: "الحكومة والمدينة الذكية", icon: "Award", desc: "خدمات حكومية إلكترونية، لوحات المدن الذكية، بوابات عامة" },
        { name: "التجزئة والتجارة الإلكترونية", icon: "ShoppingCart", desc: "متاجر إلكترونية، منصات سوق، أنظمة مخزون" },
        { name: "التعليم وتقنية التعليم", icon: "Brain", desc: "منصات LMS، بوابات دورات عبر الإنترنت، إدارة الطلاب" },
        { name: "الإعلام والترفيه", icon: "Layout", desc: "منصات محتوى، بوابات بث، مواقع أخبار" },
        { name: "المناطق الحرة وتأسيس الأعمال", icon: "Briefcase", desc: "بوابات تراخيص، منصات تأسيس أعمال، لوحات المستثمرين" }
      ],
      whyTitle: "لماذا تختار سيملوب لتطوير الويب في الإمارات",
      whyReasons: [
        { icon: "Globe", title: "دعم أصلي للعربية والإنجليزية", desc: "تنفيذ RTL كامل مع محتوى مكيّف ثقافياً لجمهور الإمارات الناطق بالعربية والإنجليزية." },
        { icon: "Zap", title: "أداء فائق السرعة", desc: "مواقع محسّنة لمؤشرات Core Web Vitals مع أوقات تحميل أقل من ثانيتين، حاسمة لمستخدمي الإمارات على الجوال." },
        { icon: "Shield", title: "أمان على مستوى المؤسسات", desc: "SSL، WAF، حماية DDoS، والامتثال لأنظمة حماية البيانات في الإمارات (PDPL)." },
        { icon: "TrendingUp", title: "SEO يحقق نتائج", desc: "استراتيجية SEO ثنائية اللغة تستهدف استعلامات البحث العربية والإنجليزية في سوق الإمارات." },
        { icon: "Users", title: "فريق مشروع مخصص", desc: "مدير مشروع مخصص ومصمم UI/UX وفريق تطوير لكل مشروع." },
        { icon: "Rocket", title: "تسليم رشيق", desc: "دورات سبرنت أسبوعين مع عروض منتظمة وتواصل شفاف وتسليم في الوقت المحدد." },
        { icon: "Star", title: "دعم ما بعد الإطلاق", desc: "ضمان 12 شهراً، صيانة مستمرة، مراقبة الأداء، وتحسين مستمر." },
        { icon: "Award", title: "سجل حافل", desc: "موثوق من الشركات عبر منطقة الشرق الأوسط وشمال أفريقيا مع محفظة تمتد لعدة صناعات." }
      ],
      pricingTitle: "أسعار تطوير الويب (درهم إماراتي)",
      pricingSubtitle: "أسعار شفافة مصممة لسوق الإمارات",
      pricingNote: "الأسعار إرشادية. يعتمد العرض النهائي على نطاق المشروع وتعقيده ومتطلباته المحددة. تواصل معنا للحصول على تقدير مفصل مجاني.",
      pricing: [
        { name: "صفحة هبوط", price: "من 8,000 درهم", desc: "صفحة واحدة عالية التحويل", features: ["تصميم 1-3 صفحات", "تخطيط متجاوب", "نموذج اتصال", "SEO أساسي", "لغة واحدة", "تسليم 2-3 أسابيع"], popular: false },
        { name: "موقع شركة", price: "من 20,000 درهم", desc: "حضور أعمال احترافي", features: ["5-15 صفحة", "ثنائي اللغة عربي/إنجليزي", "لوحة إدارة CMS", "SEO متقدم", "دعم RTL", "نظام مدونة", "تسليم 4-6 أسابيع"], popular: true },
        { name: "تطبيق ويب", price: "من 55,000 درهم", desc: "SaaS أو بوابة مخصصة", features: ["ميزات مخصصة", "مصادقة المستخدمين", "لوحة إدارة", "تكاملات API", "تصميم قاعدة بيانات", "استضافة سحابية", "تسليم 8-16 أسبوع"], popular: false },
        { name: "بوابة مؤسسية", price: "عند الطلب", desc: "حل مؤسسي واسع النطاق", features: ["ميزات غير محدودة", "بنية متعددة المستأجرين", "أمان مؤسسي", "فريق مخصص", "ضمان SLA", "دعم 24/7", "جدول زمني مخصص"], popular: false }
      ],
      faqTitle: "الأسئلة الشائعة",
      faq: [
        { q: "كم تكلفة تطوير موقع في دبي/الإمارات في 2026؟", a: "تتراوح تكاليف تطوير المواقع في الإمارات من 8,000 درهم لصفحة هبوط بسيطة إلى 55,000+ درهم لتطبيقات الويب المعقدة. المواقع المؤسسية ثنائية اللغة عادة ما تكلف بين 20,000-40,000 درهم. البوابات المؤسسية تُسعّر بناءً على المتطلبات المحددة. نقدم تقديرات مفصلة مجانية خلال 24 ساعة." },
        { q: "كم يستغرق بناء موقع في الإمارات؟", a: "صفحة الهبوط تستغرق 2-3 أسابيع. موقع شركة ثنائي اللغة يتطلب 4-6 أسابيع. تطبيقات الويب عادة تستغرق 8-16 أسبوع حسب التعقيد. نتبع منهجية Agile بدورات سبرنت أسبوعين وعروض منتظمة لإبقائك على اطلاع طوال العملية." },
        { q: "هل تبنون مواقع ثنائية اللغة عربي/إنجليزي؟", a: "نعم، المواقع ثنائية ومتعددة اللغات هي تخصصنا. ننفذ دعم RTL أصلي للعربية وتصاميم مكيّفة ثقافياً وتحسين SEO ثنائي اللغة. مواقعنا تتحول بسلاسة بين العربية والإنجليزية مع طباعة مناسبة وتخطيط معكوس وتكييف المحتوى." },
        { q: "هل يمكنكم المساعدة في SEO لسوق الإمارات؟", a: "بالتأكيد. ننفذ استراتيجيات SEO ثنائية اللغة شاملة تستهدف استعلامات البحث العربية والإنجليزية. يشمل ذلك SEO محلي لإمارات محددة وتحسين Google Business Profile وبيانات منظمة واستراتيجيات محتوى مصممة لسلوك البحث في الإمارات." },
        { q: "هل تقدمون دعماً مستمراً بعد إطلاق الموقع؟", a: "نعم، جميع مشاريعنا تشمل ضمان 12 شهراً يغطي إصلاح الأخطاء والتحديثات الطفيفة. كما نقدم حزم صيانة مستمرة تشمل إدارة الاستضافة وتحديثات الأمان وتحديثات المحتوى ومراقبة الأداء وتحسينات الميزات." }
      ],
      ctaTitle: "هل أنت مستعد لبناء موقعك في الإمارات؟",
      ctaSubtitle: "احصل على استشارة مجانية وتقدير مفصل للمشروع خلال 24 ساعة",
      ctaWhatsApp: "تواصل عبر واتساب",
      ctaEmail: "أرسل بريد إلكتروني",
      ctaPhone: "اتصل بنا",
      relatedTitle: "مقالات ذات صلة",
      related: [
        { title: "تطوير تطبيقات الجوال الإمارات ودبي 2026", href: "/blog/mobile-app-development-uae-dubai-2026", tag: "موبايل" },
        { title: "حلول التجارة الإلكترونية الإمارات ودبي 2026", href: "/blog/ecommerce-solutions-uae-dubai-2026", tag: "تجارة إلكترونية" },
        { title: "التحول الرقمي الإمارات الحكومة الذكية 2026", href: "/blog/digital-transformation-uae-smart-government-2026", tag: "رقمي" }
      ],
      tagsLabel: "الوسوم"
    },
    fr: {
      metaTitle: "Entreprise de Developpement Web EAU & Dubai 2026 | Conception Web | Symloop",
      metaDescription: "Entreprise leader en developpement web aux EAU et Dubai 2026. Sites web sur mesure, applications web, solutions e-commerce. Bilingue AR/EN. Next.js, React, Node.js. Consultation gratuite.",
      title: "Entreprise de Developpement Web aux EAU & Dubai",
      subtitle: "Sites web sur mesure, applications web et solutions e-commerce pour le marche digital le plus dynamique du Golfe",
      category: "Developpement Web",
      readTime: "14 min",
      author: "Equipe Symloop",
      date: "2026-02-01",
      backLink: "Retour au Blog",
      intro: "Dubai et Abu Dhabi ont consolide leur position de centres technologiques mondiaux, les initiatives de villes intelligentes des EAU generant une demande sans precedent pour des solutions web de classe mondiale. Des portails fintech du DIFC aux plateformes e-commerce du Dubai Mall, les entreprises a travers les Emirats ont besoin de sites web bilingues arabe/anglais offrant des experiences utilisateur exceptionnelles sur desktop et mobile. Avec 99% de penetration Internet et une population numerique de plus de 10 millions, les EAU representent l'un des marches les plus connectes de la planete -- et Symloop est la pour construire l'infrastructure web qui l'alimente.",
      statsTitle: "Marche Numerique EAU 2026",
      stats: [
        { value: "10M+", label: "Utilisateurs Internet (99%)" },
        { value: "98%", label: "Penetration Internet" },
        { value: "$8B+", label: "Economie Numerique" },
        { value: "90%+", label: "Trafic Web Mobile" }
      ],
      servicesTitle: "Nos Services de Developpement Web",
      servicesSubtitle: "Solutions numeriques completes adaptees au marche des EAU",
      services: [
        { icon: "Globe", title: "Sites Corporate", desc: "Sites web d'entreprise professionnels bilingues arabe/anglais avec design responsive, optimisation SEO avancee et contenu culturellement adapte. Parfait pour les entreprises etablissant leur presence numerique aux Emirats.", features: ["Bilingue AR/EN", "Design Responsive", "SEO Optimise", "Support RTL"] },
        { icon: "Monitor", title: "Applications Web", desc: "Plateformes SaaS personnalisees, tableaux de bord metier, portails clients et systemes de gestion internes. Construits avec des frameworks modernes pour des performances maximales et une scalabilite sur le marche du Golfe.", features: ["Plateformes SaaS", "Tableaux de Bord", "Portails Clients", "Integration API"] },
        { icon: "ShoppingCart", title: "Sites E-commerce", desc: "Boutiques en ligne completes avec support multi-devises (AED, USD, EUR), integration de passerelles de paiement (Network International, PayTabs, Telr) et catalogues produits en arabe.", features: ["Boutiques en Ligne", "Passerelles Paiement", "Multi-Devises", "Catalogue Arabe"] },
        { icon: "Search", title: "Landing Pages & SEO", desc: "Pages d'atterrissage a haute conversion optimisees pour le marche des EAU. SEO arabe, pages Google Ads, optimisation du taux de conversion et tests A/B pour un ROI maximum.", features: ["Optimisation Conversion", "SEO Arabe", "Tests A/B", "Pret Google Ads"] }
      ],
      techTitle: "Stack Technologique",
      techSubtitle: "Nous utilisons les dernieres technologies de confiance des entreprises mondiales",
      techStack: [
        { name: "Next.js / React", desc: "Rendu cote serveur, performances ultra-rapides", category: "Frontend" },
        { name: "Node.js / Express", desc: "APIs backend scalables et microservices", category: "Backend" },
        { name: "Python / Django", desc: "Integration IA, traitement de donnees, automatisation", category: "Backend" },
        { name: "PostgreSQL / MongoDB", desc: "Stockage fiable, schemas flexibles", category: "Base de Donnees" },
        { name: "AWS / Azure", desc: "Centres de donnees region EAU, infrastructure cloud", category: "Cloud" },
        { name: "Tailwind CSS", desc: "Design UI moderne, stylisation prete pour RTL", category: "Stylisation" }
      ],
      citiesTitle: "Nous Servons Tous les Emirats",
      citiesSubtitle: "Expertise en developpement web a travers les EAU",
      cities: [
        { name: "Dubai" },
        { name: "Abu Dhabi" },
        { name: "Sharjah" },
        { name: "Ajman" },
        { name: "Ras Al Khaimah" }
      ],
      sectorsTitle: "Secteurs que Nous Servons",
      sectorsSubtitle: "Expertise approfondie dans les secteurs economiques cles des EAU",
      sectors: [
        { name: "Tourisme et Hotellerie", icon: "Globe", desc: "Plateformes de reservation d'hotels, portails de voyage, sites de tour-operateurs" },
        { name: "Immobilier", icon: "Building2", desc: "Portails d'annonces immobilieres, visites virtuelles, tableaux de bord CRM" },
        { name: "Finance et Fintech", icon: "CreditCard", desc: "Portails bancaires, solutions de paiement, plateformes d'investissement" },
        { name: "Sante", icon: "Shield", desc: "Portails patients, telemedecine, systemes de gestion de cliniques" },
        { name: "Gouvernement et Ville Intelligente", icon: "Award", desc: "Services e-gouvernement, tableaux de bord smart city, portails publics" },
        { name: "Commerce et E-commerce", icon: "ShoppingCart", desc: "Boutiques en ligne, plateformes marketplace, systemes d'inventaire" },
        { name: "Education et EdTech", icon: "Brain", desc: "Plateformes LMS, portails de cours en ligne, gestion des etudiants" },
        { name: "Medias et Divertissement", icon: "Layout", desc: "Plateformes de contenu, portails de streaming, sites d'actualites" },
        { name: "Zones Franches et Creation d'Entreprise", icon: "Briefcase", desc: "Portails de licences, plateformes de creation d'entreprise, tableaux de bord investisseurs" }
      ],
      whyTitle: "Pourquoi Choisir Symloop pour le Developpement Web aux EAU",
      whyReasons: [
        { icon: "Globe", title: "Support Natif Arabe et Anglais", desc: "Implementation RTL complete avec contenu culturellement adapte pour les publics arabophone et anglophone des EAU." },
        { icon: "Zap", title: "Performances Ultra-Rapides", desc: "Sites optimises Core Web Vitals avec des temps de chargement inferieurs a 2 secondes, essentiels pour les utilisateurs mobiles des EAU." },
        { icon: "Shield", title: "Securite Niveau Entreprise", desc: "SSL, WAF, protection DDoS et conformite aux reglementations de protection des donnees des EAU (PDPL)." },
        { icon: "TrendingUp", title: "SEO qui Genere des Resultats", desc: "Strategie SEO bilingue ciblant les requetes de recherche arabes et anglaises sur le marche des EAU." },
        { icon: "Users", title: "Equipe Projet Dediee", desc: "Un chef de projet dedie, un designer UI/UX et une equipe de developpement pour chaque projet." },
        { icon: "Rocket", title: "Livraison Agile", desc: "Cycles de sprint de 2 semaines avec demos regulieres, communication transparente et livraison dans les delais." },
        { icon: "Star", title: "Support Post-Lancement", desc: "Garantie 12 mois, maintenance continue, surveillance des performances et amelioration continue." },
        { icon: "Award", title: "Bilan Eprouve", desc: "Approuve par des entreprises de toute la region MENA avec un portfolio couvrant plusieurs industries." }
      ],
      pricingTitle: "Tarifs Developpement Web (AED)",
      pricingSubtitle: "Tarification transparente adaptee au marche des EAU",
      pricingNote: "Les prix sont indicatifs. Le devis final depend de la portee du projet, de sa complexite et des exigences specifiques. Contactez-nous pour une estimation detaillee gratuite.",
      pricing: [
        { name: "Landing Page", price: "A partir de 8 000 AED", desc: "Page unique a haute conversion", features: ["Design 1-3 pages", "Layout responsive", "Formulaire contact", "SEO basique", "1 langue", "Livraison 2-3 semaines"], popular: false },
        { name: "Site Corporate", price: "A partir de 20 000 AED", desc: "Presence professionnelle", features: ["5-15 pages", "Bilingue AR/EN", "CMS Dashboard", "SEO avance", "Support RTL", "Systeme blog", "Livraison 4-6 semaines"], popular: true },
        { name: "Application Web", price: "A partir de 55 000 AED", desc: "SaaS ou portail sur mesure", features: ["Fonctionnalites sur mesure", "Authentification utilisateurs", "Dashboard admin", "Integrations API", "Design base de donnees", "Hebergement cloud", "Livraison 8-16 semaines"], popular: false },
        { name: "Portail Entreprise", price: "Sur Devis", desc: "Solution entreprise grande echelle", features: ["Fonctionnalites illimitees", "Architecture multi-tenant", "Securite entreprise", "Equipe dediee", "Garantie SLA", "Support 24/7", "Planning personnalise"], popular: false }
      ],
      faqTitle: "Questions Frequemment Posees",
      faq: [
        { q: "Combien coute le developpement d'un site web a Dubai/EAU en 2026 ?", a: "Les couts de developpement web aux EAU vont de 8 000 AED pour une landing page simple a 55 000+ AED pour des applications web complexes. Les sites corporate bilingues coutent generalement entre 20 000 et 40 000 AED. Les portails entreprise sont devis sur mesure. Nous fournissons des estimations detaillees gratuites sous 24 heures." },
        { q: "Combien de temps faut-il pour construire un site web aux EAU ?", a: "Une landing page prend 2-3 semaines. Un site corporate bilingue necessite 4-6 semaines. Les applications web prennent generalement 8-16 semaines selon la complexite. Nous suivons la methodologie Agile avec des sprints de 2 semaines et des demos regulieres." },
        { q: "Construisez-vous des sites bilingues arabe/anglais ?", a: "Oui, les sites bilingues et multilingues sont notre specialite. Nous implementons le support RTL natif pour l'arabe, des designs culturellement adaptes et une optimisation SEO bilingue. Nos sites passent harmonieusement entre l'arabe et l'anglais avec une typographie appropriee." },
        { q: "Pouvez-vous aider avec le SEO pour le marche des EAU ?", a: "Absolument. Nous implementons des strategies SEO bilingues completes ciblant les requetes arabes et anglaises. Cela inclut le SEO local, l'optimisation Google Business Profile, le balisage de donnees structurees et des strategies de contenu adaptees." },
        { q: "Offrez-vous un support continu apres le lancement ?", a: "Oui, tous nos projets incluent une garantie de 12 mois couvrant les corrections de bugs et mises a jour mineures. Nous proposons egalement des forfaits de maintenance incluant la gestion de l'hebergement, les mises a jour de securite et la surveillance des performances." }
      ],
      ctaTitle: "Pret a Construire Votre Site Web aux EAU ?",
      ctaSubtitle: "Obtenez une consultation gratuite et un devis detaille sous 24 heures",
      ctaWhatsApp: "Discuter sur WhatsApp",
      ctaEmail: "Envoyer un Email",
      ctaPhone: "Appelez-Nous",
      relatedTitle: "Articles Connexes",
      related: [
        { title: "Developpement App Mobile EAU & Dubai 2026", href: "/blog/mobile-app-development-uae-dubai-2026", tag: "Mobile" },
        { title: "Solutions E-commerce EAU & Dubai 2026", href: "/blog/ecommerce-solutions-uae-dubai-2026", tag: "E-commerce" },
        { title: "Transformation Numerique EAU Gouvernement Intelligent 2026", href: "/blog/digital-transformation-uae-smart-government-2026", tag: "Numerique" }
      ],
      tagsLabel: "Tags"
    }
  };

  const c = content[locale] || content.en;

  const seoKeywords = "web development company UAE, web development Dubai 2026, website design UAE, website development Abu Dhabi, web development company Dubai, best web developer UAE, bilingual website Arabic English, RTL website design, e-commerce Dubai, web application UAE, Next.js React UAE, corporate website Dubai, landing page Dubai, SEO Dubai, Arabic website development, smart city web solutions UAE, DIFC web development, free zone website Dubai, responsive web design UAE, SaaS development Dubai, web agency UAE, website cost Dubai, affordable web development UAE, custom web application Dubai, تطوير مواقع الإمارات, تصميم مواقع دبي, شركة تطوير ويب أبوظبي, entreprise developpement web dubai, creation site web emirats";

  const iconMap = {
    Globe, Monitor, ShoppingCart, Search, Building2, CreditCard, Shield,
    Award, Brain, Layout, Briefcase, Zap, TrendingUp, Users, Rocket, Star
  };

  const getIcon = (iconName) => iconMap[iconName] || Globe;

  const structuredDataArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.title,
    "description": c.metaDescription,
    "author": { "@type": "Organization", "name": "Symloop" },
    "publisher": {
      "@type": "Organization",
      "name": "Symloop",
      "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" }
    },
    "datePublished": "2026-02-01",
    "dateModified": "2026-02-01",
    "mainEntityOfPage": "https://symloop.com/blog/web-development-company-uae-dubai-2026",
    "image": "https://symloop.com/images/blog/web-development-uae-dubai-2026.jpg",
    "inLanguage": locale,
    "keywords": seoKeywords
  };

  const structuredDataFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": c.faq.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a }
    }))
  };

  const structuredDataLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Symloop",
    "description": "Web development company serving UAE & Dubai. Custom websites, web applications, and e-commerce solutions.",
    "url": "https://symloop.com",
    "telephone": "+213549575512",
    "email": "contact@symloop.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AE",
      "addressRegion": "Dubai"
    },
    "areaServed": [
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "City", "name": "Dubai" },
      { "@type": "City", "name": "Abu Dhabi" },
      { "@type": "City", "name": "Sharjah" }
    ],
    "priceRange": "AED 8,000 - AED 200,000+",
    "openingHours": "Mo-Sa 09:00-18:00",
    "sameAs": ["https://wa.me/213549575512"]
  };

  return (
    <>
      <Head>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDescription} />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href="https://symloop.com/blog/web-development-company-uae-dubai-2026" />
        <meta property="og:title" content={c.metaTitle} />
        <meta property="og:description" content={c.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/web-development-company-uae-dubai-2026" />
        <meta property="og:image" content="https://symloop.com/images/blog/web-development-uae-dubai-2026.jpg" />
        <meta property="og:locale" content={locale === 'ar' ? 'ar_AE' : locale === 'fr' ? 'fr_FR' : 'en_AE'} />
        <meta property="article:published_time" content={c.date || "2026-01-15"} />
        <meta property="article:modified_time" content="2026-02-07" />
        <meta property="article:section" content={c.category} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={c.metaTitle} />
        <meta name="twitter:description" content={c.metaDescription} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Symloop" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="Dubai, United Arab Emirates" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/en/blog/web-development-company-uae-dubai-2026" />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/blog/web-development-company-uae-dubai-2026" />
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/blog/web-development-company-uae-dubai-2026" />
        <link rel="alternate" hrefLang="x-default" href="https://symloop.com/blog/web-development-company-uae-dubai-2026" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataArticle) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataFAQ) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataLocalBusiness) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://symloop.com" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" }, { "@type": "ListItem", "position": 3, "name": c.title }] }) }} />
      </Head>

      <article className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>

        {/* ===== SECTION 1: Hero ===== */}
        <section className="relative bg-gradient-to-br from-amber-500/10 via-black to-red-500/10 py-16 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />
          <div className="relative max-w-5xl mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-500 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {c.backLink}
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-amber-500 text-black px-4 py-1.5 rounded-full text-sm font-bold">{c.category}</span>
              <span className="flex items-center gap-1 text-gray-400 text-sm"><Clock className="w-3.5 h-3.5" />{c.readTime}</span>
              <span className="flex items-center gap-1 text-gray-400 text-sm"><MapPin className="w-3.5 h-3.5" />UAE & Dubai</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              {c.title.split('UAE').length > 1 ? (
                <>{c.title.split('UAE')[0]}<span className="text-amber-500">UAE</span>{c.title.split('UAE')[1].split('Dubai').length > 1 ? (<> & <span className="text-red-500">Dubai</span>{c.title.split('UAE')[1].split('Dubai')[1]}</>) : c.title.split('UAE')[1]}</>
              ) : (
                <>{c.title}</>
              )}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">{c.subtitle}</p>

            <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2"><User className="w-4 h-4" />{c.author}</div>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />{c.date}</div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="https://wa.me/213549575512?text=Hello, I need web development services in UAE/Dubai"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-amber-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-amber-400 transition-colors">
                <MessageCircle className="w-5 h-5" /> {c.ctaWhatsApp}
              </a>
              <a href="mailto:contact@symloop.com"
                 className="inline-flex items-center gap-2 border-2 border-amber-500/50 text-amber-500 px-6 py-3 rounded-xl font-semibold hover:bg-amber-500/10 transition-colors">
                <Mail className="w-5 h-5" /> {c.ctaEmail}
              </a>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: Market Stats ===== */}
        <section className="bg-amber-500/5 border-y border-amber-500/10 py-12">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-xl font-bold text-amber-500 mb-8 text-center flex items-center justify-center gap-2">
              <TrendingUp className="w-6 h-6" />
              {c.statsTitle}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {c.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl lg:text-4xl font-extrabold text-amber-500">{stat.value}</div>
                  <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: Intro ===== */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">{c.intro}</p>
            <p className="text-base text-gray-400 mt-6 leading-relaxed">
              {locale === 'ar'
                ? <>استكشف أيضاً <Link href="/services" className="text-cyan-400 hover:underline">خدماتنا الكاملة</Link> بما في ذلك <Link href="/blog/mobile-app-development-uae-dubai-2026" className="text-cyan-400 hover:underline">تطوير التطبيقات في الإمارات</Link> و<Link href="/blog/web-development-company-saudi-arabia-2026" className="text-cyan-400 hover:underline">تطوير المواقع في السعودية</Link>.</>
                : <>Explore our full range of <Link href="/services" className="text-cyan-400 hover:underline">IT services</Link>, including <Link href="/blog/mobile-app-development-uae-dubai-2026" className="text-cyan-400 hover:underline">mobile app development in the UAE</Link> and <Link href="/blog/web-development-company-saudi-arabia-2026" className="text-cyan-400 hover:underline">web development in Saudi Arabia</Link>.</>
              }
            </p>
          </div>
        </section>

        {/* ===== SECTION 4: Services (4 Cards) ===== */}
        <section className="py-16 bg-gray-950">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 text-center">{c.servicesTitle}</h2>
            <p className="text-gray-400 text-center mb-12">{c.servicesSubtitle}</p>
            <div className="grid md:grid-cols-2 gap-6">
              {c.services.map((service, i) => {
                const IconComp = getIcon(service.icon);
                return (
                  <div key={i} className="bg-black border border-amber-500/20 rounded-2xl p-8 hover:border-amber-500/50 transition-all group">
                    <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-500/20 transition-colors">
                      <IconComp className="w-7 h-7 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-5 leading-relaxed">{service.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((f, j) => (
                        <span key={j} className="bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full text-xs font-medium">{f}</span>
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
        {/* ===== SECTION 5: Tech Stack ===== */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 text-center">{c.techTitle}</h2>
            <p className="text-gray-400 text-center mb-12">{c.techSubtitle}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {c.techStack.map((tech, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <Code className="w-5 h-5 text-amber-500" />
                    <span className="text-xs font-medium text-amber-500/70 bg-amber-500/10 px-2 py-0.5 rounded">{tech.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{tech.name}</h3>
                  <p className="text-gray-500 text-sm">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 6: Cities / Emirates ===== */}
        <section className="py-16 bg-gray-950">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 text-center">{c.citiesTitle}</h2>
            <p className="text-gray-400 text-center mb-12">{c.citiesSubtitle}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {c.cities.map((city, i) => (
                <div key={i} className="bg-black border border-amber-500/20 rounded-xl p-6 text-center hover:border-amber-500/50 transition-colors">
                  <MapPin className="w-6 h-6 text-amber-500 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white mb-1">{city.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 7: Industry Sectors (9) ===== */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 text-center">{c.sectorsTitle}</h2>
            <p className="text-gray-400 text-center mb-12">{c.sectorsSubtitle}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {c.sectors.map((sector, i) => {
                const SectorIcon = getIcon(sector.icon);
                return (
                  <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-amber-500/30 transition-all group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                        <SectorIcon className="w-5 h-5 text-amber-500" />
                      </div>
                      <h3 className="text-base font-bold text-white">{sector.name}</h3>
                    </div>
                    <p className="text-gray-500 text-sm">{sector.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== SECTION 8: Why Symloop (8 Reasons) ===== */}
        <section className="py-16 bg-gray-950">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">{c.whyTitle}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {c.whyReasons.map((reason, i) => {
                const ReasonIcon = getIcon(reason.icon);
                return (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                      <ReasonIcon className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== SECTION 9: Pricing (AED) ===== */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 text-center">{c.pricingTitle}</h2>
            <p className="text-gray-400 text-center mb-8">{c.pricingSubtitle}</p>

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-10 max-w-3xl mx-auto">
              <p className="text-sm text-amber-200 text-center">{c.pricingNote}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {c.pricing.map((plan, i) => (
                <div key={i} className={`relative bg-gray-900 rounded-2xl p-6 border-2 transition-all ${plan.popular ? 'border-amber-500 shadow-lg shadow-amber-500/10' : 'border-gray-800 hover:border-gray-700'}`}>
                  {plan.popular && (
                    <span className={`absolute -top-3 ${isRTL ? 'right-4' : 'left-4'} bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold`}>
                      {locale === 'ar' ? 'الأكثر طلباً' : locale === 'fr' ? 'Populaire' : 'Most Popular'}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{plan.desc}</p>
                  <div className="text-2xl font-extrabold text-amber-500 mb-5">{plan.price}</div>
                  <ul className="space-y-2.5">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={`https://wa.me/213549575512?text=${encodeURIComponent(`Hello, I'm interested in the ${plan.name} package for UAE`)}`}
                     target="_blank" rel="noopener noreferrer"
                     className={`block text-center mt-6 py-3 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-amber-500 text-black hover:bg-amber-400' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>
                    {locale === 'ar' ? 'تواصل معنا' : locale === 'fr' ? 'Nous Contacter' : 'Get Started'}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 10: FAQ (5 Questions) ===== */}
        <section className="py-16 bg-gray-950">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-10 text-center">{c.faqTitle}</h2>
            <div className="space-y-4">
              {c.faq.map((item, i) => (
                <div key={i} className="border border-gray-800 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-900/50 transition-colors"
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-white pr-4">{item.q}</span>
                    <svg className={`w-5 h-5 text-amber-500 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-400 leading-relaxed">{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 11: CTA + Related + Tags ===== */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">

            {/* CTA */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-10 text-center mb-16">
              <h2 className="text-3xl font-bold text-black mb-3">{c.ctaTitle}</h2>
              <p className="text-amber-900 mb-8 text-lg">{c.ctaSubtitle}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://wa.me/213549575512?text=Hello, I need web development services for my business in UAE/Dubai"
                   target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-black text-amber-500 px-8 py-4 rounded-xl font-bold hover:bg-gray-900 transition-colors">
                  <MessageCircle className="w-5 h-5" /> {c.ctaWhatsApp}
                </a>
                <a href="mailto:contact@symloop.com"
                   className="inline-flex items-center gap-2 bg-black/20 text-black px-8 py-4 rounded-xl font-bold hover:bg-black/30 transition-colors">
                  <Mail className="w-5 h-5" /> {c.ctaEmail}
                </a>
                <a href="tel:+213549575512"
                   className="inline-flex items-center gap-2 border-2 border-black/30 text-black px-8 py-4 rounded-xl font-bold hover:bg-black/10 transition-colors">
                  <Phone className="w-5 h-5" /> {c.ctaPhone}
                </a>
              </div>
              <div className="mt-6 text-amber-900 text-sm">
                <span className="font-semibold">WhatsApp:</span> +213 549 57 55 12 &nbsp;|&nbsp; <span className="font-semibold">Email:</span> contact@symloop.com
              </div>
            </div>

            {/* Related Articles */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">{c.relatedTitle}</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {c.related.map((article, i) => (
                  <Link key={i} href={article.href} className="group block bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-amber-500/30 transition-all">
                    <span className="text-xs font-medium text-amber-500 bg-amber-500/10 px-2 py-1 rounded">{article.tag}</span>
                    <h3 className="font-semibold text-white mt-3 group-hover:text-amber-500 transition-colors">{article.title}</h3>
                    <span className="inline-flex items-center gap-1 text-sm text-amber-500 mt-3">
                      {locale === 'ar' ? 'اقرأ المزيد' : locale === 'fr' ? 'Lire la suite' : 'Read more'} →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-800">
              <span className="text-gray-500 text-sm mr-2">{c.tagsLabel}:</span>
              {["Web Development UAE", "Dubai Website", "Arabic Website", "RTL Design", "E-commerce UAE", "Next.js", "React", "Node.js", "SEO Dubai", "Abu Dhabi", "Sharjah", "Corporate Website", "Web Application", "SaaS UAE", "Smart City"].map((tag, i) => (
                <span key={i} className="bg-gray-900 text-gray-500 px-3 py-1.5 rounded-lg text-xs border border-gray-800">#{tag.replace(/\s/g, '')}</span>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-gray-400 mt-8 mb-4">
              {locale === 'ar' ? 'المزيد من خدماتنا في المنطقة' : 'More From Our Regional Coverage'}
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              <Link href="/blog/web-development-company-kuwait-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'تطوير المواقع في الكويت' : 'Web Development in Kuwait'}
                </h3>
                <span className="text-cyan-500 text-sm flex items-center gap-1">
                  {locale === 'ar' ? 'اقرأ المزيد' : 'Read more'}
                  <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? '' : 'rotate-180'}`} />
                </span>
              </Link>
              <Link href="/blog/mobile-app-development-saudi-arabia-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'تطوير التطبيقات في السعودية' : 'Mobile App Development in Saudi Arabia'}
                </h3>
                <span className="text-cyan-500 text-sm flex items-center gap-1">
                  {locale === 'ar' ? 'اقرأ المزيد' : 'Read more'}
                  <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? '' : 'rotate-180'}`} />
                </span>
              </Link>
              <Link href="/blog/ecommerce-solutions-uae-dubai-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'حلول التجارة الإلكترونية في الإمارات' : 'E-Commerce Solutions in the UAE'}
                </h3>
                <span className="text-cyan-500 text-sm flex items-center gap-1">
                  {locale === 'ar' ? 'اقرأ المزيد' : 'Read more'}
                  <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? '' : 'rotate-180'}`} />
                </span>
              </Link>
            </div>
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
