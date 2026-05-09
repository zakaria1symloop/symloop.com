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
  Target, Database, CreditCard, ShoppingCart,
  BarChart3, Layers, MessageCircle, Briefcase,
  FileText, Settings, PieChart, Lock
} from "lucide-react";

export default function TatwirMawaqieWebKuwait2026() {
  const router = useRouter();
  const locale = router.locale || 'ar';
  const isRTL = locale === 'ar';

  const content = {
    ar: {
      metaTitle: "شركة تطوير مواقع ويب في الكويت 2026 | مواقع وتطبيقات مخصصة | سيملوب",
      metaDescription: "شركة تطوير مواقع ويب احترافية في الكويت. مواقع مخصصة، تطبيقات ويب، تجارة إلكترونية. دعم RTL العربية. مدينة الكويت، حولي، السالمية. جاهز لكويت جديدة 2035.",
      title: "شركة تطوير مواقع ويب في الكويت",
      subtitle: "مواقع ويب وتطبيقات مخصصة للاقتصاد الرقمي المتنامي في الكويت",
      category: "تطوير الويب",
      readTime: "15 دقيقة",
      author: "فريق سيملوب",
      date: "2026-01-15",
      backLink: "العودة للمدونة",
      intro: "يتطور المشهد الرقمي في الكويت بسرعة، مع 4.5 مليون مستخدم إنترنت ونسبة انتشار 99% مما يجعلها واحدة من أكثر الدول اتصالاً في منطقة الخليج. من مواقع الشركات التي تمثل المؤسسات الكويتية الكبرى إلى تطبيقات الويب المتطورة التي تشغل الخدمات الحكومية ومنصات التجارة الإلكترونية، لم يكن الطلب على تطوير الويب الاحترافي أعلى من أي وقت مضى. مع رؤية كويت جديدة 2035 التي تقود التحول الرقمي عبر جميع القطاعات، تحتاج الشركات إلى حلول ويب حديثة وسريعة وعربية أولاً تقدم تجارب مستخدم استثنائية. يبني فريقنا مواقع ويب وتطبيقات متطورة مصممة خصيصاً للسوق الكويتي.",
      statsTitle: "الاقتصاد الرقمي الكويتي 2026",
      stats: [
        { value: "+4.5 مليون", label: "مستخدم إنترنت" },
        { value: "99%", label: "انتشار الإنترنت" },
        { value: "+3 مليار$", label: "الاقتصاد الرقمي" },
        { value: "+88%", label: "حركة مرور الويب عبر الجوال" }
      ],
      services: {
        title: "خدمات تطوير الويب لدينا",
        subtitle: "حلول ويب شاملة للاقتصاد الرقمي الكويتي",
        list: [
          {
            icon: Globe,
            title: "مواقع الشركات",
            description: "مواقع شركات احترافية ومتجاوبة تمثل علامتك التجارية في سوق الكويت التنافسي. محسّنة لمحركات البحث وثنائية اللغة.",
            features: ["تصميم متجاوب لجميع الأجهزة", "عربي وإنجليزي ثنائي اللغة", "تحسين SEO للكويت", "تكامل CMS (WordPress، headless)"]
          },
          {
            icon: Code,
            title: "تطبيقات الويب",
            description: "تطبيقات ويب مخصصة مبنية بأحدث الأطر. قابلة للتوسع وآمنة ومصممة لسير العمل المعقد.",
            features: ["React, Next.js, Vue.js", "لوحات تحكم وبوابات مخصصة", "تطوير وتكامل API", "معالجة البيانات في الوقت الفعلي"]
          },
          {
            icon: ShoppingCart,
            title: "مواقع التجارة الإلكترونية",
            description: "متاجر إلكترونية عالية التحويل مع تكامل KNET والدفع المتعدد. محسّنة لسوق الكويت المتنامي.",
            features: ["تكامل KNET و Apple Pay", "إدارة كتالوج المنتجات", "إدارة المخزون والطلبات", "عملية دفع محسّنة للجوال"]
          },
          {
            icon: Rocket,
            title: "صفحات الهبوط والمواقع الصغيرة",
            description: "صفحات هبوط عالية الأداء مصممة للتحويل. مثالية لحملات التسويق التي تستهدف الجمهور الكويتي.",
            features: ["تصميم محسّن للتحويل", "جاهز لاختبار A/B", "تكامل التحليلات", "تحميل سريع (أقل من 2 ثانية)"]
          }
        ]
      },
      webTech: {
        title: "تقنيات ويب حديثة للكويت",
        description: "نستخدم أحدث تقنيات الويب لبناء مواقع سريعة وآمنة وقابلة للتوسع للشركات الكويتية. يتم اختيار مجموعة التقنيات خصيصاً لتقديم أداء مثالي في بيئة الإنترنت عالية السرعة في الكويت، مع دعم كامل لتخطيطات RTL العربية وإدارة المحتوى الثنائي اللغة.",
        features: [
          "Next.js و React للعرض من جانب الخادم وSEO المثالي",
          "Tailwind CSS لتصميمات متجاوبة جاهزة لـ RTL العربية",
          "Node.js و Python للواجهات الخلفية القوية وتطوير API",
          "PostgreSQL و MongoDB لإدارة البيانات المرنة",
          "استضافة AWS و Vercel مع CDN في منطقة الكويت",
          "دعم PWA (تطبيق ويب تقدمي) لتجربة شبيهة بالتطبيق",
          "CMS بدون رأس لإدارة المحتوى الثنائي اللغة بسهولة",
          "شهادات SSL وأمان على مستوى المؤسسات"
        ]
      },
      cities: {
        title: "نخدم الشركات في جميع أنحاء الكويت",
        list: [
          { name: "مدينة الكويت", desc: "العاصمة ومركز الأعمال" },
          { name: "حولي", desc: "المركز التجاري" },
          { name: "السالمية", desc: "مركز التجزئة والحياة" },
          { name: "الفروانية", desc: "سكني وتجاري" },
          { name: "الجهراء", desc: "سوق تقني متنامي" }
        ]
      },
      sectors: {
        title: "حلول ويب لكل قطاع",
        subtitle: "تطوير ويب متخصص لقطاعات الكويت الرئيسية",
        list: [
          { name: "النفط والغاز", icon: Layers, desc: "بوابات إنترانت، لوحات بيانات، منصات السلامة" },
          { name: "البنوك والتمويل", icon: CreditCard, desc: "الخدمات المصرفية عبر الإنترنت، منصات التكنولوجيا المالية" },
          { name: "القطاع الحكومي", icon: Globe, desc: "بوابات الحكومة الإلكترونية، خدمات المواطنين" },
          { name: "البناء والتشييد", icon: Building2, desc: "بوابات إدارة المشاريع، منصات المناقصات" },
          { name: "العقارات", icon: Building2, desc: "مواقع قوائم العقارات، منصات الجولات الافتراضية" },
          { name: "الرعاية الصحية", icon: Shield, desc: "بوابات المرضى، منصات الطب عن بعد" },
          { name: "التجزئة والتجارة الإلكترونية", icon: ShoppingCart, desc: "متاجر إلكترونية، منصات أسواق، أنظمة ولاء" },
          { name: "التعليم", icon: Award, desc: "منصات LMS، مواقع المدارس، بوابات التعلم" },
          { name: "الاتصالات", icon: Smartphone, desc: "بوابات العملاء، منصات الخدمة الذاتية" }
        ]
      },
      whyUs: {
        title: "لماذا تختار سيملوب لتطوير الويب",
        reasons: [
          { title: "خبراء السوق الكويتي", desc: "فهم عميق للسلوك الرقمي الكويتي ومتطلبات السوق المحلية لمشاريع الويب.", icon: Globe },
          { title: "متخصصون في RTL العربية", desc: "تطوير ويب خبير بـ RTL العربية مع تخطيطات ثنائية اللغة مثالية البكسل.", icon: Target },
          { title: "التركيز على الأداء", desc: "مُحسّن لـ Core Web Vitals. كل موقع يتم تحميله في أقل من 2 ثانية مع نقاط Lighthouse 90+.", icon: Zap },
          { title: "خبرة SEO", desc: "استراتيجيات SEO ثنائية اللغة تصنف موقعك على Google للبحث الكويتي والإقليمي.", icon: TrendingUp },
          { title: "تصميم متجاوب", desc: "نهج تصميم الجوال أولاً يضمن عرضاً مثالياً على جميع الأجهزة.", icon: Smartphone },
          { title: "دعم مستمر", desc: "خطط صيانة ودعم مخصصة للحفاظ على موقعك آمناً وسريعاً ومحدثاً.", icon: MessageCircle },
          { title: "الأمان أولاً", desc: "أمان على مستوى المؤسسات مع SSL وحماية DDoS والامتثال للوائح الكويت.", icon: Lock },
          { title: "سجل حافل", desc: "مئات مشاريع الويب الناجحة للشركات في الكويت ومنطقة الخليج.", icon: Award }
        ]
      },
      pricing: {
        title: "أسعار تطوير الويب في الكويت",
        subtitle: "أسعار شفافة بدون رسوم خفية. جميع الأسعار بالدينار الكويتي.",
        plans: [
          {
            name: "موقع أعمال",
            price: "من 1,500 د.ك",
            features: ["حتى 10 صفحات", "تصميم متجاوب", "عربي وإنجليزي", "SEO أساسي", "3 أشهر دعم"],
            color: "gray",
            popular: false
          },
          {
            name: "ويب احترافي",
            price: "من 5,000 د.ك",
            features: ["حتى 25 صفحة", "تصميم مخصص", "تكامل CMS", "SEO متقدم", "6 أشهر دعم", "إعداد التحليلات"],
            color: "cyan",
            popular: true
          },
          {
            name: "تطبيق ويب",
            price: "من 12,000 د.ك",
            features: ["تطبيق ويب مخصص", "مصادقة المستخدمين", "تكامل API", "لوحة تحكم إدارية", "12 شهر دعم", "تصميم قاعدة بيانات"],
            color: "gray",
            popular: false
          },
          {
            name: "حل مؤسسي",
            price: "حسب الطلب",
            features: ["منصة مخصصة بالكامل", "تكاملات معقدة", "بنية قابلة للتوسع", "فريق مخصص", "اتفاقية SLA", "دعم أولوية"],
            color: "gray",
            popular: false
          }
        ]
      },
      faq: {
        title: "الأسئلة الشائعة",
        items: [
          {
            q: "كم يستغرق بناء موقع ويب في الكويت؟",
            a: "موقع الأعمال القياسي يستغرق 3-6 أسابيع. الموقع الاحترافي مع CMS يستغرق 6-10 أسابيع. تطبيقات الويب المخصصة تتراوح من 2-6 أشهر حسب التعقيد."
          },
          {
            q: "هل تبنون مواقع ويب مع دعم كامل لـ RTL العربية؟",
            a: "نعم، دعم RTL العربية هو كفاءة أساسية. جميع مواقعنا تتميز بتخطيطات من اليمين إلى اليسار صحيحة، وطباعة عربية، وتبديل محتوى ثنائي اللغة."
          },
          {
            q: "هل يمكنكم تكامل KNET وبوابات الدفع الأخرى؟",
            a: "بالتأكيد. لدينا خبرة واسعة في تكامل KNET و Apple Pay و Tap Payments و MyFatoorah في مواقع التجارة الإلكترونية."
          },
          {
            q: "هل تقدمون صيانة واستضافة المواقع؟",
            a: "نعم، نقدم خطط صيانة شاملة تشمل تحديثات الأمان ومراقبة الأداء والاستضافة على خوادم سريعة مع CDN في منطقة الكويت."
          },
          {
            q: "هل سيكون موقعي محسّناً لمحركات البحث؟",
            a: "جميع مواقعنا مبنية مع أفضل ممارسات SEO بما في ذلك SEO التقني والبيانات المنظمة وسرعة الصفحة والتوافق مع الجوال. نقدم أيضاً SEO ثنائي اللغة مستمر."
          }
        ]
      },
      cta: {
        title: "هل أنت مستعد لبناء موقعك الإلكتروني؟",
        subtitle: "احصل على استشارة مجانية وعرض سعر لمشروع تطوير الويب في الكويت",
        whatsapp: "تواصل عبر واتساب",
        email: "أرسل بريداً إلكترونياً",
        phone: "+213549575512",
        emailAddr: "contact@symloop.com"
      },
      related: {
        title: "مقالات ذات صلة",
        posts: [
          { title: "تطوير تطبيقات الجوال في الكويت 2026", slug: "tatwir-tatbiqat-jawwal-kuwait-2026" },
          { title: "التجارة الإلكترونية في الكويت مع KNET", slug: "tijara-iliktruniya-kuwait-knet-2026" },
          { title: "التحول الرقمي في الكويت - كويت جديدة 2035", slug: "tahawwul-raqami-kuwait-ruiya-2035" }
        ]
      },
      seoKeywords: "تطوير مواقع ويب الكويت, شركة تطوير ويب الكويت, تصميم مواقع الكويت, موقع مخصص مدينة الكويت, تطبيق ويب الكويت, تطوير مواقع عربية, تصميم RTL, مطور ويب حولي, كويت جديدة 2035"
    },
    en: {
      metaTitle: "Web Development Company Kuwait 2026 | Custom Websites & Web Apps | Symloop",
      metaDescription: "Professional web development company in Kuwait. Custom websites, web applications, e-commerce. Arabic RTL support. Kuwait City, Hawalli, Salmiya.",
      title: "Web Development Company in Kuwait",
      subtitle: "Custom Websites & Web Applications for Kuwait's Growing Digital Economy",
      category: "Web Development",
      readTime: "15 min",
      author: "Symloop Team",
      date: "2026-01-15",
      backLink: "Back to Blog",
      intro: "Kuwait's digital landscape is evolving rapidly, with 4.5 million internet users and 99% internet penetration. The demand for professional web development has never been higher as New Kuwait 2035 drives digital transformation across all sectors. Our team builds cutting-edge websites and web applications tailored for the Kuwaiti market.",
      statsTitle: "Kuwait Digital Economy 2026",
      stats: [
        { value: "4.5M+", label: "Internet Users" },
        { value: "99%", label: "Internet Penetration" },
        { value: "$3B+", label: "Digital Economy" },
        { value: "88%+", label: "Mobile Web Traffic" }
      ],
      services: {
        title: "Our Web Development Services",
        subtitle: "End-to-end web solutions for Kuwait's digital economy",
        list: [
          { icon: Globe, title: "Corporate Websites", description: "Professional responsive websites for the Kuwaiti market. SEO-optimized and bilingual.", features: ["Responsive design", "Arabic & English", "SEO optimization", "CMS integration"] },
          { icon: Code, title: "Web Applications", description: "Custom web apps built with modern frameworks. Scalable, secure, and designed for complex workflows.", features: ["React, Next.js, Vue.js", "Custom dashboards", "API integration", "Real-time processing"] },
          { icon: ShoppingCart, title: "E-Commerce Websites", description: "High-converting online stores with KNET and multi-payment integration.", features: ["KNET & Apple Pay", "Product catalog", "Inventory management", "Mobile checkout"] },
          { icon: Rocket, title: "Landing Pages", description: "High-performance landing pages designed for conversion targeting Kuwaiti audiences.", features: ["Conversion-optimized", "A/B testing ready", "Analytics integration", "Fast loading"] }
        ]
      },
      webTech: {
        title: "Modern Web Technologies for Kuwait",
        description: "We leverage the latest web technologies to build fast, secure, and scalable websites for Kuwaiti businesses with full Arabic RTL support.",
        features: ["Next.js & React for SSR and SEO", "Tailwind CSS for responsive RTL designs", "Node.js & Python backends", "PostgreSQL & MongoDB", "AWS & Vercel hosting with Kuwait CDN", "PWA support", "Headless CMS for bilingual content", "SSL and enterprise security"]
      },
      cities: {
        title: "Serving Businesses Across Kuwait",
        list: [
          { name: "Kuwait City", desc: "Capital & business hub" },
          { name: "Hawalli", desc: "Commercial center" },
          { name: "Salmiya", desc: "Retail & lifestyle hub" },
          { name: "Farwaniya", desc: "Residential & commercial" },
          { name: "Jahra", desc: "Growing tech market" }
        ]
      },
      sectors: {
        title: "Web Solutions for Every Industry",
        subtitle: "Industry-specific web development for Kuwait",
        list: [
          { name: "Oil & Gas", icon: Layers, desc: "Intranet portals, dashboards, HSE" },
          { name: "Banking & Finance", icon: CreditCard, desc: "Online banking, fintech platforms" },
          { name: "Government", icon: Globe, desc: "E-government portals, citizen services" },
          { name: "Construction", icon: Building2, desc: "Project management, bid platforms" },
          { name: "Real Estate", icon: Building2, desc: "Property listings, virtual tours" },
          { name: "Healthcare", icon: Shield, desc: "Patient portals, telemedicine" },
          { name: "Retail & E-commerce", icon: ShoppingCart, desc: "Online stores, marketplaces" },
          { name: "Education", icon: Award, desc: "LMS platforms, school websites" },
          { name: "Telecommunications", icon: Smartphone, desc: "Customer portals, self-service" }
        ]
      },
      whyUs: {
        title: "Why Choose Symloop for Web Development",
        reasons: [
          { title: "Kuwait Market Expertise", desc: "Deep understanding of Kuwaiti digital behavior and local requirements.", icon: Globe },
          { title: "Arabic RTL Specialists", desc: "Expert Arabic RTL development with pixel-perfect bilingual layouts.", icon: Target },
          { title: "Performance Focused", desc: "Core Web Vitals optimized. Every site loads in under 2 seconds.", icon: Zap },
          { title: "SEO Expertise", desc: "Bilingual SEO strategies for Google rankings in Kuwait.", icon: TrendingUp },
          { title: "Responsive Design", desc: "Mobile-first ensuring perfect display on all devices.", icon: Smartphone },
          { title: "Ongoing Support", desc: "Dedicated maintenance plans for security and performance.", icon: MessageCircle },
          { title: "Security First", desc: "Enterprise security with SSL and Kuwait compliance.", icon: Lock },
          { title: "Proven Track Record", desc: "Hundreds of web projects across Kuwait and the GCC.", icon: Award }
        ]
      },
      pricing: {
        title: "Web Development Pricing in Kuwait",
        subtitle: "Transparent pricing. All prices in KWD.",
        plans: [
          { name: "Business Website", price: "From 1,500 KWD", features: ["Up to 10 pages", "Responsive", "Bilingual", "Basic SEO", "3 months support"], color: "gray", popular: false },
          { name: "Professional Web", price: "From 5,000 KWD", features: ["Up to 25 pages", "Custom design", "CMS", "Advanced SEO", "6 months support", "Analytics"], color: "cyan", popular: true },
          { name: "Web Application", price: "From 12,000 KWD", features: ["Custom web app", "Auth system", "API integrations", "Admin dashboard", "12 months support", "Database"], color: "gray", popular: false },
          { name: "Enterprise", price: "On Quote", features: ["Fully custom", "Complex integrations", "Scalable", "Dedicated team", "SLA", "Priority support"], color: "gray", popular: false }
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          { q: "How long to build a website in Kuwait?", a: "Business sites: 3-6 weeks. Professional with CMS: 6-10 weeks. Custom web apps: 2-6 months." },
          { q: "Do you build Arabic RTL websites?", a: "Yes, Arabic RTL is our core competency with proper layouts and bilingual switching." },
          { q: "Can you integrate KNET?", a: "Yes, we integrate KNET, Apple Pay, Tap Payments, and MyFatoorah." },
          { q: "Do you offer maintenance?", a: "Yes, comprehensive plans including security, content updates, and hosting." },
          { q: "Will my site be SEO optimized?", a: "All sites are built with SEO best practices including bilingual SEO." }
        ]
      },
      cta: { title: "Ready to Build Your Website?", subtitle: "Free consultation for your Kuwait web project", whatsapp: "Contact on WhatsApp", email: "Send Email", phone: "+213549575512", emailAddr: "contact@symloop.com" },
      related: {
        title: "Related Articles",
        posts: [
          { title: "Mobile App Development Kuwait 2026", slug: "tatwir-tatbiqat-jawwal-kuwait-2026" },
          { title: "E-Commerce Solutions Kuwait KNET", slug: "tijara-iliktruniya-kuwait-knet-2026" },
          { title: "Digital Transformation Kuwait 2035", slug: "tahawwul-raqami-kuwait-ruiya-2035" }
        ]
      },
      seoKeywords: "web development Kuwait, website design Kuwait, custom website Kuwait, web application Kuwait, Arabic RTL web, KNET integration, New Kuwait 2035"
    },
    fr: {
      metaTitle: "Société de Développement Web Koweït 2026 | Sites & Apps Web | Symloop",
      metaDescription: "Société de développement web au Koweït. Sites sur mesure, applications web, e-commerce. Support RTL arabe. Koweït City, Hawalli, Salmiya.",
      title: "Société de Développement Web au Koweït",
      subtitle: "Sites web et applications sur mesure pour l'économie numérique du Koweït",
      category: "Développement Web",
      readTime: "15 min",
      author: "Equipe Symloop",
      date: "2026-01-15",
      backLink: "Retour au Blog",
      intro: "Le paysage numérique du Koweït évolue rapidement avec 4,5 millions d'utilisateurs internet et 99% de pénétration. La vision Nouveau Koweït 2035 entraîne une demande forte de solutions web professionnelles. Notre équipe construit des sites et applications adaptés au marché koweïtien.",
      statsTitle: "Économie Numérique du Koweït 2026",
      stats: [
        { value: "4,5M+", label: "Utilisateurs Internet" },
        { value: "99%", label: "Pénétration Internet" },
        { value: "3Mds$+", label: "Économie Numérique" },
        { value: "88%+", label: "Trafic Web Mobile" }
      ],
      services: {
        title: "Nos Services de Développement Web",
        subtitle: "Solutions web complètes pour le Koweït",
        list: [
          { icon: Globe, title: "Sites Corporatifs", description: "Sites professionnels responsifs pour le marché koweïtien.", features: ["Design responsive", "Bilingue arabe/anglais", "SEO Koweït", "Intégration CMS"] },
          { icon: Code, title: "Applications Web", description: "Apps web sur mesure avec frameworks modernes.", features: ["React, Next.js, Vue.js", "Tableaux de bord", "API", "Temps réel"] },
          { icon: ShoppingCart, title: "Sites E-Commerce", description: "Boutiques en ligne avec KNET et multi-paiement.", features: ["KNET & Apple Pay", "Catalogue produits", "Gestion stocks", "Checkout mobile"] },
          { icon: Rocket, title: "Landing Pages", description: "Pages haute performance pour conversion.", features: ["Optimisé conversion", "Tests A/B", "Analytics", "Chargement rapide"] }
        ]
      },
      webTech: {
        title: "Technologies Web Modernes pour le Koweït",
        description: "Nous utilisons les dernières technologies pour des sites rapides, sécurisés et évolutifs avec support RTL arabe complet.",
        features: ["Next.js & React pour SSR et SEO", "Tailwind CSS pour RTL", "Node.js & Python", "PostgreSQL & MongoDB", "AWS & Vercel avec CDN Koweït", "Support PWA", "CMS headless bilingue", "SSL et sécurité entreprise"]
      },
      cities: {
        title: "Au Service des Entreprises au Koweït",
        list: [
          { name: "Koweït City", desc: "Capitale et centre d'affaires" },
          { name: "Hawalli", desc: "Centre commercial" },
          { name: "Salmiya", desc: "Pôle retail" },
          { name: "Farwaniya", desc: "Résidentiel et commercial" },
          { name: "Jahra", desc: "Marché tech en croissance" }
        ]
      },
      sectors: {
        title: "Solutions Web par Industrie",
        subtitle: "Développement web spécifique par secteur",
        list: [
          { name: "Pétrole & Gaz", icon: Layers, desc: "Portails, tableaux de bord, HSE" },
          { name: "Banque & Finance", icon: CreditCard, desc: "Banque en ligne, fintech" },
          { name: "Gouvernement", icon: Globe, desc: "E-gouvernement, services citoyens" },
          { name: "Construction", icon: Building2, desc: "Gestion de projet, appels d'offres" },
          { name: "Immobilier", icon: Building2, desc: "Annonces, visites virtuelles" },
          { name: "Santé", icon: Shield, desc: "Portails patients, télémédecine" },
          { name: "Commerce", icon: ShoppingCart, desc: "Boutiques, marketplaces" },
          { name: "Éducation", icon: Award, desc: "LMS, sites scolaires" },
          { name: "Télécoms", icon: Smartphone, desc: "Portails clients, self-service" }
        ]
      },
      whyUs: {
        title: "Pourquoi Choisir Symloop",
        reasons: [
          { title: "Expertise Koweït", desc: "Compréhension du marché koweïtien.", icon: Globe },
          { title: "Spécialistes RTL", desc: "Développement RTL arabe expert.", icon: Target },
          { title: "Performance", desc: "Sites rapides, Lighthouse 90+.", icon: Zap },
          { title: "SEO", desc: "SEO bilingue pour Google Koweït.", icon: TrendingUp },
          { title: "Responsive", desc: "Mobile-first, tous appareils.", icon: Smartphone },
          { title: "Support", desc: "Maintenance et mises à jour dédiées.", icon: MessageCircle },
          { title: "Sécurité", desc: "SSL, DDoS, conformité Koweït.", icon: Lock },
          { title: "Expérience", desc: "Centaines de projets au Koweït.", icon: Award }
        ]
      },
      pricing: {
        title: "Tarifs Développement Web Koweït",
        subtitle: "Prix transparents en KWD.",
        plans: [
          { name: "Site Business", price: "À partir de 1 500 KWD", features: ["10 pages", "Responsive", "Bilingue", "SEO basique", "3 mois support"], color: "gray", popular: false },
          { name: "Web Pro", price: "À partir de 5 000 KWD", features: ["25 pages", "Design sur mesure", "CMS", "SEO avancé", "6 mois support", "Analytics"], color: "cyan", popular: true },
          { name: "App Web", price: "À partir de 12 000 KWD", features: ["App sur mesure", "Auth", "API", "Admin", "12 mois support", "BDD"], color: "gray", popular: false },
          { name: "Enterprise", price: "Sur Devis", features: ["Sur mesure", "Intégrations complexes", "Évolutive", "Équipe dédiée", "SLA", "Support prioritaire"], color: "gray", popular: false }
        ]
      },
      faq: {
        title: "Questions Fréquentes",
        items: [
          { q: "Délai pour un site web au Koweït ?", a: "Site business: 3-6 semaines. Professionnel: 6-10 semaines. App web: 2-6 mois." },
          { q: "Supportez-vous le RTL arabe ?", a: "Oui, c'est notre compétence clé avec layouts bilingues parfaits." },
          { q: "Intégration KNET possible ?", a: "Oui, KNET, Apple Pay, Tap Payments, MyFatoorah." },
          { q: "Maintenance proposée ?", a: "Oui, plans complets incluant sécurité, contenu et hébergement." },
          { q: "SEO inclus ?", a: "Oui, SEO technique et bilingue intégrés." }
        ]
      },
      cta: { title: "Prêt à Construire Votre Site ?", subtitle: "Consultation gratuite pour votre projet web au Koweït", whatsapp: "Contacter sur WhatsApp", email: "Envoyer un Email", phone: "+213549575512", emailAddr: "contact@symloop.com" },
      related: {
        title: "Articles Connexes",
        posts: [
          { title: "Développement Mobile Koweït 2026", slug: "tatwir-tatbiqat-jawwal-kuwait-2026" },
          { title: "E-Commerce Koweït KNET", slug: "tijara-iliktruniya-kuwait-knet-2026" },
          { title: "Transformation Numérique Koweït 2035", slug: "tahawwul-raqami-kuwait-ruiya-2035" }
        ]
      },
      seoKeywords: "développement web Koweït, société web Koweït, création site Koweït, app web Koweït, RTL arabe, KNET, Nouveau Koweït 2035"
    }
  };

  const c = content[locale] || content.ar;

  const jsonLdArticle = { "@context": "https://schema.org", "@type": "Article", "headline": c.title, "description": c.metaDescription, "author": { "@type": "Organization", "name": "Symloop" }, "publisher": { "@type": "Organization", "name": "Symloop", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } }, "datePublished": "2026-01-15", "dateModified": "2026-01-15", "mainEntityOfPage": { "@type": "WebPage", "@id": "https://symloop.com/ar/blog/tatwir-mawaqie-web-kuwait-2026" }, "image": "https://symloop.com/logo.png", "inLanguage": locale, "keywords": c.seoKeywords };
  const jsonLdFaq = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": c.faq.items.map(item => ({ "@type": "Question", "name": item.q, "acceptedAnswer": { "@type": "Answer", "text": item.a } })) };
  const jsonLdLocalBusiness = { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "Symloop", "description": "Web Development Company in Kuwait", "url": "https://symloop.com", "telephone": "+213549575512", "email": "contact@symloop.com", "areaServed": { "@type": "Country", "name": "Kuwait" }, "serviceArea": [ { "@type": "City", "name": "Kuwait City" }, { "@type": "City", "name": "Hawalli" }, { "@type": "City", "name": "Salmiya" }, { "@type": "City", "name": "Farwaniya" }, { "@type": "City", "name": "Jahra" } ], "priceRange": "$$" };

  return (
    <>
      <Head>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDescription} />
        <meta name="keywords" content={c.seoKeywords} />
        <link rel="canonical" href="https://symloop.com/ar/blog/tatwir-mawaqie-web-kuwait-2026" />
        <meta property="og:title" content={c.title} />
        <meta property="og:description" content={c.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/ar/blog/tatwir-mawaqie-web-kuwait-2026" />
        <meta property="og:site_name" content="Symloop" />
        <meta property="og:image" content="https://symloop.com/logo.png" />
        <meta property="og:locale" content={locale === 'ar' ? 'ar_SA' : locale === 'en' ? 'en_US' : 'fr_FR'} />
        <meta property="article:published_time" content={c.date || "2026-01-15"} />
        <meta property="article:modified_time" content="2026-02-07" />
        <meta property="article:section" content={c.category} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={c.title} />
        <meta name="twitter:description" content={c.metaDescription} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Symloop" />
        <meta name="geo.region" content="KW" />
        <meta name="geo.placename" content="Kuwait" />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/blog/tatwir-mawaqie-web-kuwait-2026" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/en/blog/web-development-company-kuwait-2026" />
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/blog/web-development-company-kuwait-2026" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://symloop.com" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" }, { "@type": "ListItem", "position": 3, "name": c.title }] }) }} />
      </Head>

      <article className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-black to-teal-500/10" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 mb-8 transition-colors">
              <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />{c.backLink}
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-cyan-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2"><Code className="w-4 h-4" />{c.category}</span>
              <span className="text-gray-400 text-sm flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{c.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              <span className="text-cyan-400">{locale === 'ar' ? 'شركة تطوير مواقع ويب' : locale === 'fr' ? 'Société de Développement Web' : 'Web Development Company'}</span>
              {locale === 'ar' ? ' في الكويت' : locale === 'fr' ? ' au Koweït' : ' in Kuwait'}
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-3xl">{c.subtitle}</p>
            <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2"><User className="w-4 h-4" />{c.author}</div>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />{c.date}</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />{locale === 'ar' ? 'الكويت' : 'Kuwait'}</div>
            </div>
          </div>
        </section>

        <section className="py-12"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><p className="text-lg text-gray-300 leading-relaxed">{c.intro}</p>
            <p className="text-base text-gray-400 mt-6 leading-relaxed">
              {locale === 'ar'
                ? <>استكشف أيضاً <Link href="/services" className="text-cyan-400 hover:underline">خدماتنا الكاملة</Link> بما في ذلك <Link href="/blog/tatwir-tatbiqat-jawwal-kuwait-2026" className="text-cyan-400 hover:underline">تطوير التطبيقات في الكويت</Link> و<Link href="/blog/tatwir-mawaqie-web-uae-dubai-2026" className="text-cyan-400 hover:underline">تطوير المواقع في الإمارات</Link>.</>
                : <>Explore our full range of <Link href="/services" className="text-cyan-400 hover:underline">IT services</Link>, including <Link href="/blog/tatwir-tatbiqat-jawwal-kuwait-2026" className="text-cyan-400 hover:underline">mobile app development in Kuwait</Link> and <Link href="/blog/tatwir-mawaqie-web-uae-dubai-2026" className="text-cyan-400 hover:underline">web development in the UAE</Link>.</>
              }
            </p></div></section>

        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-cyan-900/40 to-teal-800/20 border border-cyan-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3"><TrendingUp className="w-6 h-6 text-cyan-400" />{c.statsTitle}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {c.stats.map((stat, i) => (<div key={i} className="text-center"><div className="text-3xl lg:text-4xl font-bold text-cyan-400">{stat.value}</div><div className="text-sm text-gray-400 mt-2">{stat.label}</div></div>))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12"><h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{c.services.title}</h2><p className="text-gray-400 text-lg">{c.services.subtitle}</p></div>
            <div className="grid md:grid-cols-2 gap-6">
              {c.services.list.map((service, i) => { const IconComp = service.icon; return (
                <div key={i} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4"><IconComp className="w-6 h-6 text-cyan-400" /></div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">{service.features.map((feature, j) => (<li key={j} className="flex items-center gap-2 text-gray-300 text-sm"><CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />{feature}</li>))}</ul>
                </div>
              ); })}
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
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-cyan-900/30 to-gray-900 border border-cyan-500/20 rounded-2xl p-8 lg:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-cyan-500/20 rounded-2xl flex items-center justify-center flex-shrink-0"><Code className="w-7 h-7 text-cyan-400" /></div>
                <div><h2 className="text-3xl font-bold text-white mb-2">{c.webTech.title}</h2></div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-8">{c.webTech.description}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {c.webTech.features.map((feature, i) => (<div key={i} className="flex items-start gap-3 bg-black/30 rounded-xl p-3"><CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" /><span className="text-gray-300 text-sm">{feature}</span></div>))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3"><MapPin className="w-6 h-6 text-cyan-400" />{c.cities.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {c.cities.list.map((city, i) => (<div key={i} className="bg-gray-900/60 border border-gray-800 rounded-xl p-4 text-center hover:border-cyan-500/50 transition-colors"><div className="text-white font-semibold mb-1">{city.name}</div><div className="text-gray-500 text-xs">{city.desc}</div></div>))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12"><h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{c.sectors.title}</h2><p className="text-gray-400 text-lg">{c.sectors.subtitle}</p></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {c.sectors.list.map((sector, i) => { const SectorIcon = sector.icon; return (
                <div key={i} className="bg-gray-900/40 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group">
                  <div className="flex items-center gap-3 mb-2"><div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors"><SectorIcon className="w-5 h-5 text-cyan-400" /></div><h3 className="text-white font-semibold">{sector.name}</h3></div>
                  <p className="text-gray-500 text-sm">{sector.desc}</p>
                </div>
              ); })}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">{c.whyUs.title}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {c.whyUs.reasons.map((reason, i) => { const ReasonIcon = reason.icon; return (
                <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="w-11 h-11 bg-cyan-500/15 rounded-xl flex items-center justify-center mb-4"><ReasonIcon className="w-5 h-5 text-cyan-400" /></div>
                  <h3 className="text-white font-bold mb-2 text-sm">{reason.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{reason.desc}</p>
                </div>
              ); })}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12"><h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{c.pricing.title}</h2><p className="text-gray-400 text-lg">{c.pricing.subtitle}</p></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {c.pricing.plans.map((plan, i) => (
                <div key={i} className={`relative rounded-2xl p-6 transition-all duration-300 ${plan.popular ? 'bg-cyan-900/30 border-2 border-cyan-500' : 'bg-gray-900/60 border border-gray-800 hover:border-gray-700'}`}>
                  {plan.popular && (<div className="absolute -top-3 left-1/2 transform -translate-x-1/2"><span className="bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"><Star className="w-3 h-3" />{locale === 'ar' ? 'الأكثر طلباً' : locale === 'fr' ? 'Populaire' : 'Popular'}</span></div>)}
                  <h3 className="text-lg font-bold text-white mb-2 mt-2">{plan.name}</h3>
                  <div className={`text-xl font-bold mb-5 ${plan.popular ? 'text-cyan-400' : 'text-gray-300'}`}>{plan.price}</div>
                  <ul className="space-y-2.5">{plan.features.map((feature, j) => (<li key={j} className="flex items-start gap-2 text-gray-400 text-sm"><CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-cyan-500' : 'text-gray-600'}`} />{feature}</li>))}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">{c.faq.title}</h2>
            <div className="space-y-6">
              {c.faq.items.map((item, i) => (<div key={i} className="bg-gray-900/40 border border-gray-800 rounded-xl p-6"><h3 className="text-lg font-semibold text-white mb-3 flex items-start gap-3"><span className="text-cyan-400 font-bold text-xl leading-none mt-0.5">Q</span>{item.q}</h3><p className="text-gray-400 leading-relaxed pl-8">{item.a}</p></div>))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-cyan-600 to-teal-500 rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">{c.cta.title}</h2>
              <p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto">{c.cta.subtitle}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://wa.me/213549575512" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-cyan-700 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-50 transition-colors w-full sm:w-auto justify-center"><Phone className="w-5 h-5" />{c.cta.whatsapp}</a>
                <a href={`mailto:${c.cta.emailAddr}`} className="inline-flex items-center gap-2 bg-cyan-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-cyan-800 transition-colors border border-cyan-400/30 w-full sm:w-auto justify-center"><Mail className="w-5 h-5" />{c.cta.email}</a>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-cyan-100 text-sm">
                <span className="flex items-center gap-1"><Phone className="w-4 h-4" />{c.cta.phone}</span>
                <span className="flex items-center gap-1"><Mail className="w-4 h-4" />{c.cta.emailAddr}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-gray-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">{c.related.title}</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {c.related.posts.map((post, i) => (
                <Link key={i} href={`/blog/${post.slug}`} className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                  <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">{post.title}</h3>
                  <span className="text-cyan-500 text-sm flex items-center gap-1">{locale === 'ar' ? 'اقرأ المزيد' : locale === 'fr' ? 'Lire la suite' : 'Read more'}<ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? '' : 'rotate-180'}`} /></span>
                </Link>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-gray-400 mt-8 mb-4">
              {locale === 'ar' ? 'المزيد من خدماتنا في المنطقة' : 'More From Our Regional Coverage'}
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              <Link href="/blog/tatwir-mawaqie-web-saudi-arabia-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'تطوير المواقع في السعودية' : 'Web Development in Saudi Arabia'}
                </h3>
                <span className="text-cyan-500 text-sm flex items-center gap-1">
                  {locale === 'ar' ? 'اقرأ المزيد' : 'Read more'}
                  <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? '' : 'rotate-180'}`} />
                </span>
              </Link>
              <Link href="/blog/tatwir-tatbiqat-jawwal-uae-dubai-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'تطوير التطبيقات في الإمارات' : 'Mobile App Development in the UAE'}
                </h3>
                <span className="text-cyan-500 text-sm flex items-center gap-1">
                  {locale === 'ar' ? 'اقرأ المزيد' : 'Read more'}
                  <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? '' : 'rotate-180'}`} />
                </span>
              </Link>
              <Link href="/blog/tijara-iliktruniya-kuwait-knet-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'التجارة الإلكترونية في الكويت' : 'E-Commerce in Kuwait'}
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
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
