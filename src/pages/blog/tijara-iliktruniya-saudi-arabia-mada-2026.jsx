"use client";

import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  MapPin,
  Code,
  Smartphone,
  Brain,
  CheckCircle,
  Phone,
  Mail,
  Building2,
  Rocket,
  Users,
  Shield,
  Zap,
  Star,
  Award,
  Globe,
  TrendingUp,
  Target,
  Database,
  CreditCard,
  ShoppingCart,
  BarChart3,
  Layers,
  MessageCircle,
  Briefcase,
  Package,
  Truck,
  Tag
} from 'lucide-react';

const content = {
  en: {
    meta: {
      title: "Saudi Arabia E-Commerce 2026 | Mada & STC Pay Integration | Symloop",
      description: "Professional e-commerce development in Saudi Arabia with Mada, STC Pay, Tabby & Tamara integration. Custom online stores, multi-vendor platforms, mobile commerce. Vision 2030 aligned. Free consultation.",
      keywords: "e-commerce saudi arabia, online store ksa, mada payment integration, stc pay e-commerce, saudi e-commerce development, shopify saudi arabia, multi-vendor marketplace ksa, mobile commerce saudi"
    },
    hero: {
      badge: "E-Commerce KSA 2026",
      title: "E-Commerce in Saudi Arabia",
      titleHighlight: "with Mada Integration",
      subtitle: "Saudi Arabia's e-commerce market exceeds $12 billion, driven by Vision 2030 digital transformation. We build world-class online stores with full Mada, STC Pay, Tabby, and Tamara payment integration for the Saudi market.",
      cta1: "Start Your Project",
      cta2: "View Pricing"
    },
    intro: {
      title: "The Saudi E-Commerce Revolution",
      text: "Saudi Arabia's e-commerce market has surpassed $12 billion, making it the largest in the MENA region. With over 36 million online shoppers and 80%+ mobile penetration, Vision 2030 is accelerating digital commerce transformation. Symloop delivers enterprise-grade e-commerce solutions tailored for the Saudi market with complete local payment gateway integration.",
      highlight: "The KSA e-commerce market is projected to reach $20 billion by 2028, with 45% annual growth."
    },
    stats: [
      { value: "$12B+", label: "E-Commerce Market" },
      { value: "36M+", label: "Online Shoppers" },
      { value: "45%+", label: "Annual Growth" },
      { value: "80%+", label: "Mobile Shopping" }
    ],
    services: {
      title: "Our E-Commerce Services",
      subtitle: "End-to-end e-commerce solutions for the Saudi market",
      items: [
        {
          icon: "ShoppingCart",
          title: "Custom Online Stores",
          description: "Bespoke e-commerce stores built with modern technologies. Fully responsive, SEO-optimized, and integrated with Saudi payment gateways including Mada, STC Pay, and BNPL solutions."
        },
        {
          icon: "Layers",
          title: "Multi-Vendor Platform Development",
          description: "Build your own marketplace like Noon or Jarir. Multi-vendor management, commission systems, seller dashboards, and automated payouts for the Saudi market."
        },
        {
          icon: "Smartphone",
          title: "Mobile Commerce",
          description: "Native and PWA mobile shopping apps optimized for Saudi consumers. Push notifications, in-app payments, AR product preview, and seamless checkout experiences."
        },
        {
          icon: "TrendingUp",
          title: "E-Commerce Marketing",
          description: "Data-driven digital marketing strategies for Saudi audiences. SEO in Arabic & English, Google Ads, social media campaigns, and influencer marketing integration."
        }
      ]
    },
    payments: {
      title: "Payment Gateway Integration",
      subtitle: "All Saudi-preferred payment methods",
      items: [
        { name: "Mada", description: "Saudi national debit network - mandatory for KSA e-commerce" },
        { name: "STC Pay", description: "Leading Saudi digital wallet with 10M+ users" },
        { name: "Tabby", description: "Buy now, pay later - most popular BNPL in Saudi" },
        { name: "Tamara", description: "Split payments in 3 installments - Saudi-founded fintech" },
        { name: "Apple Pay", description: "Seamless mobile payments for iOS users in KSA" },
        { name: "Visa/Mastercard", description: "International credit and debit card processing" }
      ]
    },
    cities: {
      title: "E-Commerce Coverage Across Saudi Arabia",
      subtitle: "Serving businesses in all major Saudi cities",
      items: [
        { name: "Riyadh" },
        { name: "Jeddah" },
        { name: "Dammam" },
        { name: "Makkah" },
        { name: "Madinah" }
      ]
    },
    sectors: {
      title: "Industry Sectors",
      subtitle: "E-commerce solutions across all sectors",
      items: [
        "Fashion & Apparel",
        "Electronics & Gadgets",
        "Grocery & Food Delivery",
        "Beauty & Cosmetics",
        "Furniture & Home Decor",
        "Automotive & Parts",
        "Books & Education",
        "Health & Pharmacy",
        "Sports & Fitness"
      ]
    },
    whyUs: {
      title: "Why Choose Symloop",
      items: [
        { icon: "Shield", text: "CITC & ZATCA compliant e-commerce solutions" },
        { icon: "CreditCard", text: "Full Mada, STC Pay, Tabby & Tamara integration" },
        { icon: "Globe", text: "Arabic-first UI/UX with RTL support" },
        { icon: "Zap", text: "High-performance stores with sub-2s load times" },
        { icon: "Database", text: "Saudi-hosted infrastructure (AWS Bahrain)" },
        { icon: "Users", text: "Dedicated Saudi market specialists" },
        { icon: "Award", text: "7+ years MENA e-commerce experience" },
        { icon: "Rocket", text: "Vision 2030 aligned digital solutions" }
      ]
    },
    pricing: {
      title: "E-Commerce Packages",
      subtitle: "Transparent pricing in SAR",
      items: [
        {
          name: "Starter Store",
          price: "Starting from 20,000 SAR",
          description: "Perfect for small businesses",
          features: [
            "Up to 500 products",
            "Mada & STC Pay integration",
            "Responsive design",
            "Basic SEO setup",
            "3 months support",
            "SSL & hosting included"
          ],
          popular: false
        },
        {
          name: "Business Store",
          price: "Starting from 45,000 SAR",
          description: "For growing businesses",
          features: [
            "Unlimited products",
            "All payment gateways",
            "Mobile app (PWA)",
            "Advanced analytics",
            "Tabby & Tamara BNPL",
            "6 months support",
            "Multi-language (AR/EN)",
            "Marketing tools"
          ],
          popular: true
        },
        {
          name: "Enterprise Platform",
          price: "Starting from 100,000 SAR",
          description: "For large-scale operations",
          features: [
            "Everything in Business",
            "Multi-vendor marketplace",
            "Custom API development",
            "ERP/CRM integration",
            "Priority 24/7 support",
            "Dedicated account manager",
            "Custom development",
            "SLA guarantee"
          ],
          popular: false
        },
        {
          name: "Custom Solution",
          price: "Custom Quote",
          description: "Tailored to your needs",
          features: [
            "Fully custom architecture",
            "Enterprise integrations",
            "Dedicated team",
            "Ongoing development",
            "Strategic consulting",
            "Performance optimization",
            "Security audits",
            "Scalability planning"
          ],
          popular: false
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What payment gateways do you integrate for Saudi e-commerce?",
          answer: "We integrate all major Saudi payment gateways including Mada (mandatory for KSA), STC Pay, Tabby, Tamara, Apple Pay, Visa, and Mastercard. We also support Sadad for government payments and custom gateway integrations."
        },
        {
          question: "How long does it take to build an e-commerce store for the Saudi market?",
          answer: "A starter store typically takes 4-6 weeks. Business-level stores take 8-12 weeks, and enterprise platforms can take 3-6 months depending on complexity, integrations, and custom features required."
        },
        {
          question: "Do you handle ZATCA e-invoicing compliance?",
          answer: "Yes, all our e-commerce solutions are ZATCA Phase 2 compliant with automated e-invoicing, QR code generation, and seamless integration with the Fatoora platform."
        },
        {
          question: "Can you build a marketplace like Noon or Jarir?",
          answer: "Absolutely. We specialize in multi-vendor marketplace platforms with vendor management, commission systems, automated payouts, product approvals, and comprehensive admin dashboards."
        },
        {
          question: "Do you provide ongoing support and maintenance?",
          answer: "Yes, all packages include support. We offer 24/7 monitoring, regular updates, security patches, performance optimization, and dedicated account management for enterprise clients."
        }
      ]
    },
    cta: {
      title: "Ready to Launch Your Saudi E-Commerce Store?",
      subtitle: "Join hundreds of successful Saudi businesses selling online with Symloop.",
      button: "Get a Free Consultation",
      whatsapp: "Chat on WhatsApp",
      phone: "+213549575512",
      email: "contact@symloop.com"
    },
    related: {
      title: "Related Articles",
      items: [
        {
          slug: "tatwir-tatbiqat-jawwal-saudi-arabia-2026",
          title: "Mobile App Development in Saudi Arabia 2026"
        },
        {
          slug: "tatwir-mawaqie-web-saudi-arabia-2026",
          title: "Web Development in Saudi Arabia 2026"
        },
        {
          slug: "barnamij-erp-idarat-sharikaat-saudi-arabia-2026",
          title: "ERP Software for Saudi Companies 2026"
        }
      ]
    },
    backToBlog: "Back to Blog",
    readMore: "Read More",
    publishedOn: "Published on",
    readTime: "15 min read",
    author: "Symloop Team"
  },
  ar: {
    meta: {
      title: "التجارة الإلكترونية السعودية 2026 | مدى و STC Pay | Symloop",
      description: "تطوير متاجر إلكترونية احترافية في السعودية مع تكامل مدى و STC Pay و تابي و تمارا. متاجر مخصصة، منصات متعددة البائعين، تجارة عبر الجوال. متوافقة مع رؤية 2030. استشارة مجانية.",
      keywords: "تجارة إلكترونية السعودية, متجر إلكتروني السعودية, تكامل مدى, STC Pay تجارة إلكترونية, تطوير متاجر إلكترونية السعودية, منصة متعددة البائعين السعودية, تجارة جوال السعودية, رؤية 2030 تجارة إلكترونية"
    },
    hero: {
      badge: "التجارة الإلكترونية السعودية 2026",
      title: "التجارة الإلكترونية في السعودية",
      titleHighlight: "مع تكامل مدى",
      subtitle: "سوق التجارة الإلكترونية في السعودية يتجاوز 12 مليار دولار، مدفوعاً بالتحول الرقمي لرؤية 2030. نبني متاجر إلكترونية عالمية المستوى مع تكامل كامل لبوابات الدفع مدى و STC Pay و تابي و تمارا للسوق السعودي.",
      cta1: "ابدأ مشروعك",
      cta2: "عرض الأسعار"
    },
    intro: {
      title: "ثورة التجارة الإلكترونية السعودية",
      text: "تجاوز سوق التجارة الإلكترونية في السعودية 12 مليار دولار، مما يجعله الأكبر في منطقة الشرق الأوسط وشمال أفريقيا. مع أكثر من 36 مليون متسوق عبر الإنترنت وانتشار الهاتف المحمول بنسبة تفوق 80%، تسرّع رؤية 2030 التحول في التجارة الرقمية. تقدم Symloop حلول تجارة إلكترونية على مستوى المؤسسات مصممة خصيصاً للسوق السعودي مع تكامل كامل لبوابات الدفع المحلية.",
      highlight: "من المتوقع أن يصل سوق التجارة الإلكترونية السعودي إلى 20 مليار دولار بحلول 2028، بنمو سنوي يبلغ 45%."
    },
    stats: [
      { value: "$12B+", label: "سوق التجارة الإلكترونية" },
      { value: "36M+", label: "متسوقون عبر الإنترنت" },
      { value: "45%+", label: "نمو سنوي" },
      { value: "80%+", label: "تسوق عبر الجوال" }
    ],
    services: {
      title: "خدمات التجارة الإلكترونية",
      subtitle: "حلول تجارة إلكترونية متكاملة للسوق السعودي",
      items: [
        {
          icon: "ShoppingCart",
          title: "متاجر إلكترونية مخصصة",
          description: "متاجر إلكترونية مبنية بتقنيات حديثة. متجاوبة بالكامل، محسنة لمحركات البحث، ومتكاملة مع بوابات الدفع السعودية بما في ذلك مدى و STC Pay وحلول الشراء الآن والدفع لاحقاً."
        },
        {
          icon: "Layers",
          title: "تطوير منصات متعددة البائعين",
          description: "ابنِ سوقك الإلكتروني مثل نون أو جرير. إدارة متعددة البائعين، أنظمة عمولات، لوحات تحكم للبائعين، ودفعات آلية للسوق السعودي."
        },
        {
          icon: "Smartphone",
          title: "التجارة عبر الجوال",
          description: "تطبيقات تسوق أصلية و PWA محسنة للمستهلك السعودي. إشعارات فورية، دفع داخل التطبيق، معاينة المنتجات بالواقع المعزز، وتجربة شراء سلسة."
        },
        {
          icon: "TrendingUp",
          title: "تسويق التجارة الإلكترونية",
          description: "استراتيجيات تسويق رقمي مبنية على البيانات للجمهور السعودي. تحسين محركات البحث بالعربية والإنجليزية، إعلانات جوجل، حملات التواصل الاجتماعي، والتسويق عبر المؤثرين."
        }
      ]
    },
    payments: {
      title: "تكامل بوابات الدفع",
      subtitle: "جميع طرق الدفع المفضلة في السعودية",
      items: [
        { name: "مدى", description: "شبكة الخصم الوطنية السعودية - إلزامية للتجارة الإلكترونية في المملكة" },
        { name: "STC Pay", description: "المحفظة الرقمية الرائدة في السعودية مع أكثر من 10 ملايين مستخدم" },
        { name: "تابي", description: "اشترِ الآن وادفع لاحقاً - الأكثر شعبية في السعودية" },
        { name: "تمارا", description: "تقسيط الدفع على 3 أقساط - شركة تقنية مالية سعودية" },
        { name: "Apple Pay", description: "دفع سلس عبر الجوال لمستخدمي iOS في المملكة" },
        { name: "فيزا/ماستركارد", description: "معالجة بطاقات الائتمان والخصم الدولية" }
      ]
    },
    cities: {
      title: "تغطية التجارة الإلكترونية في السعودية",
      subtitle: "نخدم الشركات في جميع المدن السعودية الرئيسية",
      items: [
        { name: "الرياض" },
        { name: "جدة" },
        { name: "الدمام" },
        { name: "مكة المكرمة" },
        { name: "المدينة المنورة" }
      ]
    },
    sectors: {
      title: "القطاعات الصناعية",
      subtitle: "حلول تجارة إلكترونية لجميع القطاعات",
      items: [
        "أزياء وملابس",
        "إلكترونيات وأجهزة",
        "بقالة وتوصيل أغذية",
        "تجميل ومستحضرات",
        "أثاث وديكور منزلي",
        "سيارات وقطع غيار",
        "كتب وتعليم",
        "صحة وصيدلة",
        "رياضة ولياقة"
      ]
    },
    whyUs: {
      title: "لماذا تختار Symloop",
      items: [
        { icon: "Shield", text: "حلول تجارة إلكترونية متوافقة مع هيئة الاتصالات وهيئة الزكاة والضريبة والجمارك" },
        { icon: "CreditCard", text: "تكامل كامل مع مدى و STC Pay و تابي و تمارا" },
        { icon: "Globe", text: "واجهة مستخدم عربية أولاً مع دعم RTL" },
        { icon: "Zap", text: "متاجر عالية الأداء بسرعة تحميل أقل من ثانيتين" },
        { icon: "Database", text: "بنية تحتية مستضافة في السعودية (AWS البحرين)" },
        { icon: "Users", text: "متخصصون مكرسون للسوق السعودي" },
        { icon: "Award", text: "أكثر من 7 سنوات خبرة في التجارة الإلكترونية بالمنطقة" },
        { icon: "Rocket", text: "حلول رقمية متوافقة مع رؤية 2030" }
      ]
    },
    pricing: {
      title: "باقات التجارة الإلكترونية",
      subtitle: "أسعار شفافة بالريال السعودي",
      items: [
        {
          name: "متجر مبتدئ",
          price: "ابتداءً من 20,000 ر.س",
          description: "مثالي للمشاريع الصغيرة",
          features: [
            "حتى 500 منتج",
            "تكامل مدى و STC Pay",
            "تصميم متجاوب",
            "إعداد SEO أساسي",
            "3 أشهر دعم فني",
            "SSL واستضافة مشمولة"
          ],
          popular: false
        },
        {
          name: "متجر أعمال",
          price: "ابتداءً من 45,000 ر.س",
          description: "للشركات النامية",
          features: [
            "منتجات غير محدودة",
            "جميع بوابات الدفع",
            "تطبيق جوال (PWA)",
            "تحليلات متقدمة",
            "تابي و تمارا BNPL",
            "6 أشهر دعم فني",
            "متعدد اللغات (عربي/إنجليزي)",
            "أدوات تسويق"
          ],
          popular: true
        },
        {
          name: "منصة مؤسسية",
          price: "ابتداءً من 100,000 ر.س",
          description: "للعمليات واسعة النطاق",
          features: [
            "كل ميزات الأعمال",
            "سوق متعدد البائعين",
            "تطوير API مخصص",
            "تكامل ERP/CRM",
            "دعم أولوي 24/7",
            "مدير حساب مخصص",
            "تطوير مخصص",
            "ضمان SLA"
          ],
          popular: false
        },
        {
          name: "حل مخصص",
          price: "حسب العرض",
          description: "مصمم حسب احتياجاتك",
          features: [
            "بنية مخصصة بالكامل",
            "تكاملات مؤسسية",
            "فريق مخصص",
            "تطوير مستمر",
            "استشارات استراتيجية",
            "تحسين الأداء",
            "تدقيق أمني",
            "تخطيط قابلية التوسع"
          ],
          popular: false
        }
      ]
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        {
          question: "ما بوابات الدفع التي تدمجونها للتجارة الإلكترونية السعودية؟",
          answer: "نقوم بتكامل جميع بوابات الدفع السعودية الرئيسية بما في ذلك مدى (إلزامي في المملكة)، STC Pay، تابي، تمارا، Apple Pay، فيزا، وماستركارد. كما ندعم سداد للمدفوعات الحكومية وتكاملات بوابات مخصصة."
        },
        {
          question: "كم يستغرق بناء متجر إلكتروني للسوق السعودي؟",
          answer: "المتجر المبتدئ يستغرق عادةً 4-6 أسابيع. متاجر مستوى الأعمال تأخذ 8-12 أسبوعاً، والمنصات المؤسسية قد تستغرق 3-6 أشهر حسب التعقيد والتكاملات والميزات المخصصة المطلوبة."
        },
        {
          question: "هل تتعاملون مع امتثال الفوترة الإلكترونية لهيئة الزكاة والضريبة؟",
          answer: "نعم، جميع حلول التجارة الإلكترونية لدينا متوافقة مع المرحلة الثانية من هيئة الزكاة والضريبة والجمارك مع فوترة إلكترونية آلية، توليد رمز QR، وتكامل سلس مع منصة فاتورة."
        },
        {
          question: "هل يمكنكم بناء سوق إلكتروني مثل نون أو جرير؟",
          answer: "بالتأكيد. نحن متخصصون في منصات الأسواق متعددة البائعين مع إدارة البائعين، أنظمة العمولات، الدفعات الآلية، الموافقة على المنتجات، ولوحات تحكم إدارية شاملة."
        },
        {
          question: "هل تقدمون دعماً وصيانة مستمرة؟",
          answer: "نعم، جميع الباقات تشمل دعماً فنياً. نقدم مراقبة على مدار الساعة، تحديثات منتظمة، تصحيحات أمنية، تحسين الأداء، وإدارة حساب مخصصة لعملاء المؤسسات."
        }
      ]
    },
    cta: {
      title: "جاهز لإطلاق متجرك الإلكتروني السعودي؟",
      subtitle: "انضم إلى مئات الشركات السعودية الناجحة التي تبيع عبر الإنترنت مع Symloop.",
      button: "احصل على استشارة مجانية",
      whatsapp: "تواصل عبر واتساب",
      phone: "+213549575512",
      email: "contact@symloop.com"
    },
    related: {
      title: "مقالات ذات صلة",
      items: [
        {
          slug: "tatwir-tatbiqat-jawwal-saudi-arabia-2026",
          title: "تطوير تطبيقات الجوال في السعودية 2026"
        },
        {
          slug: "tatwir-mawaqie-web-saudi-arabia-2026",
          title: "تطوير مواقع الويب في السعودية 2026"
        },
        {
          slug: "barnamij-erp-idarat-sharikaat-saudi-arabia-2026",
          title: "برنامج ERP لإدارة الشركات في السعودية 2026"
        }
      ]
    },
    backToBlog: "العودة للمدونة",
    readMore: "اقرأ المزيد",
    publishedOn: "نُشر في",
    readTime: "15 دقيقة قراءة",
    author: "فريق Symloop"
  },
  fr: {
    meta: {
      title: "E-Commerce Arabie Saoudite 2026 | Intégration Mada & STC Pay | Symloop",
      description: "Développement e-commerce professionnel en Arabie Saoudite avec intégration Mada, STC Pay, Tabby & Tamara. Boutiques en ligne personnalisées, plateformes multi-vendeurs, commerce mobile. Aligné Vision 2030. Consultation gratuite.",
      keywords: "e-commerce arabie saoudite, boutique en ligne ksa, intégration paiement mada, stc pay e-commerce, développement e-commerce saoudien, marketplace multi-vendeurs ksa, commerce mobile saoudien"
    },
    hero: {
      badge: "E-Commerce KSA 2026",
      title: "E-Commerce en Arabie Saoudite",
      titleHighlight: "avec Intégration Mada",
      subtitle: "Le marché e-commerce saoudien dépasse 12 milliards de dollars, porté par la transformation numérique de Vision 2030. Nous construisons des boutiques en ligne de classe mondiale avec intégration complète des paiements Mada, STC Pay, Tabby et Tamara pour le marché saoudien.",
      cta1: "Démarrer Votre Projet",
      cta2: "Voir Les Tarifs"
    },
    intro: {
      title: "La Révolution E-Commerce Saoudienne",
      text: "Le marché e-commerce d'Arabie Saoudite a dépassé 12 milliards de dollars, ce qui en fait le plus grand de la région MENA. Avec plus de 36 millions d'acheteurs en ligne et une pénétration mobile de plus de 80%, Vision 2030 accélère la transformation du commerce numérique. Symloop fournit des solutions e-commerce de niveau entreprise adaptées au marché saoudien avec une intégration complète des passerelles de paiement locales.",
      highlight: "Le marché e-commerce du KSA devrait atteindre 20 milliards de dollars d'ici 2028, avec une croissance annuelle de 45%."
    },
    stats: [
      { value: "$12B+", label: "Marché E-Commerce" },
      { value: "36M+", label: "Acheteurs en Ligne" },
      { value: "45%+", label: "Croissance Annuelle" },
      { value: "80%+", label: "Shopping Mobile" }
    ],
    services: {
      title: "Nos Services E-Commerce",
      subtitle: "Solutions e-commerce complètes pour le marché saoudien",
      items: [
        {
          icon: "ShoppingCart",
          title: "Boutiques en Ligne Personnalisées",
          description: "Boutiques e-commerce sur mesure construites avec des technologies modernes. Entièrement responsive, optimisées SEO, et intégrées aux passerelles de paiement saoudiennes incluant Mada, STC Pay et solutions BNPL."
        },
        {
          icon: "Layers",
          title: "Développement Plateforme Multi-Vendeurs",
          description: "Construisez votre propre marketplace comme Noon ou Jarir. Gestion multi-vendeurs, systèmes de commission, tableaux de bord vendeurs et paiements automatisés pour le marché saoudien."
        },
        {
          icon: "Smartphone",
          title: "Commerce Mobile",
          description: "Applications shopping natives et PWA optimisées pour les consommateurs saoudiens. Notifications push, paiements in-app, aperçu produits AR et expériences checkout fluides."
        },
        {
          icon: "TrendingUp",
          title: "Marketing E-Commerce",
          description: "Stratégies marketing digital basées sur les données pour les audiences saoudiennes. SEO en arabe et anglais, Google Ads, campagnes réseaux sociaux et intégration marketing d'influence."
        }
      ]
    },
    payments: {
      title: "Intégration Passerelles de Paiement",
      subtitle: "Toutes les méthodes de paiement préférées en Arabie Saoudite",
      items: [
        { name: "Mada", description: "Réseau de débit national saoudien - obligatoire pour le e-commerce KSA" },
        { name: "STC Pay", description: "Premier portefeuille numérique saoudien avec 10M+ utilisateurs" },
        { name: "Tabby", description: "Achetez maintenant, payez plus tard - BNPL le plus populaire en Arabie" },
        { name: "Tamara", description: "Paiement en 3 fois - fintech fondée en Arabie Saoudite" },
        { name: "Apple Pay", description: "Paiements mobiles fluides pour les utilisateurs iOS au KSA" },
        { name: "Visa/Mastercard", description: "Traitement des cartes de crédit et débit internationales" }
      ]
    },
    cities: {
      title: "Couverture E-Commerce en Arabie Saoudite",
      subtitle: "Service aux entreprises dans toutes les grandes villes saoudiennes",
      items: [
        { name: "Riyad" },
        { name: "Djeddah" },
        { name: "Dammam" },
        { name: "La Mecque" },
        { name: "Médine" }
      ]
    },
    sectors: {
      title: "Secteurs d'Activité",
      subtitle: "Solutions e-commerce pour tous les secteurs",
      items: [
        "Mode & Vêtements",
        "Électronique & Gadgets",
        "Épicerie & Livraison Alimentaire",
        "Beauté & Cosmétiques",
        "Meubles & Décoration",
        "Automobile & Pièces",
        "Livres & Éducation",
        "Santé & Pharmacie",
        "Sports & Fitness"
      ]
    },
    whyUs: {
      title: "Pourquoi Choisir Symloop",
      items: [
        { icon: "Shield", text: "Solutions e-commerce conformes CITC & ZATCA" },
        { icon: "CreditCard", text: "Intégration complète Mada, STC Pay, Tabby & Tamara" },
        { icon: "Globe", text: "UI/UX arabe-first avec support RTL" },
        { icon: "Zap", text: "Boutiques haute performance avec temps de chargement < 2s" },
        { icon: "Database", text: "Infrastructure hébergée en Arabie Saoudite (AWS Bahreïn)" },
        { icon: "Users", text: "Spécialistes dédiés du marché saoudien" },
        { icon: "Award", text: "7+ ans d'expérience e-commerce MENA" },
        { icon: "Rocket", text: "Solutions numériques alignées Vision 2030" }
      ]
    },
    pricing: {
      title: "Forfaits E-Commerce",
      subtitle: "Tarification transparente en SAR",
      items: [
        {
          name: "Boutique Starter",
          price: "À partir de 20,000 SAR",
          description: "Parfait pour les petites entreprises",
          features: [
            "Jusqu'à 500 produits",
            "Intégration Mada & STC Pay",
            "Design responsive",
            "Configuration SEO basique",
            "3 mois de support",
            "SSL & hébergement inclus"
          ],
          popular: false
        },
        {
          name: "Boutique Business",
          price: "À partir de 45,000 SAR",
          description: "Pour les entreprises en croissance",
          features: [
            "Produits illimités",
            "Toutes les passerelles de paiement",
            "Application mobile (PWA)",
            "Analytics avancés",
            "Tabby & Tamara BNPL",
            "6 mois de support",
            "Multi-langues (AR/EN)",
            "Outils marketing"
          ],
          popular: true
        },
        {
          name: "Plateforme Enterprise",
          price: "À partir de 100,000 SAR",
          description: "Pour les opérations à grande échelle",
          features: [
            "Tout de Business",
            "Marketplace multi-vendeurs",
            "Développement API custom",
            "Intégration ERP/CRM",
            "Support prioritaire 24/7",
            "Account manager dédié",
            "Développement custom",
            "Garantie SLA"
          ],
          popular: false
        },
        {
          name: "Solution Sur Mesure",
          price: "Sur Devis",
          description: "Adaptée à vos besoins",
          features: [
            "Architecture entièrement custom",
            "Intégrations enterprise",
            "Équipe dédiée",
            "Développement continu",
            "Consulting stratégique",
            "Optimisation performance",
            "Audits sécurité",
            "Planification scalabilité"
          ],
          popular: false
        }
      ]
    },
    faq: {
      title: "Questions Fréquentes",
      items: [
        {
          question: "Quelles passerelles de paiement intégrez-vous pour le e-commerce saoudien ?",
          answer: "Nous intégrons toutes les passerelles de paiement saoudiennes majeures incluant Mada (obligatoire au KSA), STC Pay, Tabby, Tamara, Apple Pay, Visa et Mastercard. Nous supportons aussi Sadad pour les paiements gouvernementaux et les intégrations personnalisées."
        },
        {
          question: "Combien de temps faut-il pour construire un e-commerce pour le marché saoudien ?",
          answer: "Une boutique starter prend généralement 4-6 semaines. Les boutiques niveau Business prennent 8-12 semaines, et les plateformes enterprise peuvent prendre 3-6 mois selon la complexité, les intégrations et les fonctionnalités personnalisées requises."
        },
        {
          question: "Gérez-vous la conformité e-facturation ZATCA ?",
          answer: "Oui, toutes nos solutions e-commerce sont conformes ZATCA Phase 2 avec facturation électronique automatisée, génération de QR code et intégration fluide avec la plateforme Fatoora."
        },
        {
          question: "Pouvez-vous construire une marketplace comme Noon ou Jarir ?",
          answer: "Absolument. Nous sommes spécialisés dans les plateformes marketplace multi-vendeurs avec gestion des vendeurs, systèmes de commission, paiements automatisés, approbation des produits et tableaux de bord admin complets."
        },
        {
          question: "Fournissez-vous un support et une maintenance continue ?",
          answer: "Oui, tous les forfaits incluent du support. Nous offrons une surveillance 24/7, des mises à jour régulières, des correctifs de sécurité, l'optimisation des performances et une gestion de compte dédiée pour les clients enterprise."
        }
      ]
    },
    cta: {
      title: "Prêt à Lancer Votre E-Commerce Saoudien ?",
      subtitle: "Rejoignez des centaines d'entreprises saoudiennes prospères qui vendent en ligne avec Symloop.",
      button: "Obtenir une Consultation Gratuite",
      whatsapp: "Discuter sur WhatsApp",
      phone: "+213549575512",
      email: "contact@symloop.com"
    },
    related: {
      title: "Articles Connexes",
      items: [
        {
          slug: "tatwir-tatbiqat-jawwal-saudi-arabia-2026",
          title: "Développement d'Applications Mobiles en Arabie Saoudite 2026"
        },
        {
          slug: "tatwir-mawaqie-web-saudi-arabia-2026",
          title: "Développement Web en Arabie Saoudite 2026"
        },
        {
          slug: "barnamij-erp-idarat-sharikaat-saudi-arabia-2026",
          title: "Logiciel ERP pour Entreprises Saoudiennes 2026"
        }
      ]
    },
    backToBlog: "Retour au Blog",
    readMore: "Lire la Suite",
    publishedOn: "Publié le",
    readTime: "15 min de lecture",
    author: "Équipe Symloop"
  }
};

const seoKeywords = [
  "تجارة إلكترونية السعودية",
  "متجر إلكتروني مدى",
  "STC Pay تجارة إلكترونية",
  "تابي تمارا دفع",
  "إنشاء متجر إلكتروني الرياض",
  "تطوير متجر إلكتروني جدة",
  "منصة متعددة البائعين السعودية",
  "تجارة جوال السعودية",
  "رؤية 2030 تجارة إلكترونية",
  "حلول دفع إلكتروني السعودية",
  "متجر إلكتروني الدمام",
  "تسويق إلكتروني السعودية",
  "تصميم متجر إلكتروني احترافي",
  "بوابة دفع مدى",
  "شوبيفاي السعودية",
  "سلة متجر إلكتروني",
  "زد متجر إلكتروني",
  "ZATCA فوترة إلكترونية",
  "هيئة الزكاة والضريبة",
  "تجارة إلكترونية مكة المدينة"
];

const iconComponents = {
  ShoppingCart,
  Layers,
  Smartphone,
  TrendingUp,
  Shield,
  CreditCard,
  Globe,
  Zap,
  Database,
  Users,
  Award,
  Rocket
};

export default function TijaraIliktruniyaSaudiArabiaMada2026() {
  const router = useRouter();
  const { locale } = router;
  const isRTL = locale === 'ar';
  const c = content[locale] || content.en;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.meta.title,
    "description": c.meta.description,
    "image": "https://symloop.com/images/blog/ecommerce-saudi-arabia-mada-2026.jpg",
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
    "datePublished": "2026-02-01",
    "dateModified": "2026-02-07",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://symloop.com/ar/blog/tijara-iliktruniya-saudi-arabia-mada-2026"
    },
    "inLanguage": ["ar", "en", "fr"],
    "keywords": seoKeywords.join(", "),
    "about": {
      "@type": "Thing",
      "name": "E-Commerce in Saudi Arabia",
      "description": "Professional e-commerce development services for the Saudi Arabian market with Mada and STC Pay payment integration"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": c.faq.items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://symloop.com/ar/blog/tijara-iliktruniya-saudi-arabia-mada-2026",
    "name": "Symloop - E-Commerce Saudi Arabia",
    "alternateName": ["سيملوب التجارة الإلكترونية السعودية", "Symloop E-Commerce KSA", "Symloop E-Commerce Arabie Saoudite"],
    "description": c.meta.description,
    "url": "https://symloop.com/ar/blog/tijara-iliktruniya-saudi-arabia-mada-2026",
    "telephone": "+213549575512",
    "email": "contact@symloop.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Riyadh",
      "addressRegion": "Riyadh",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.7136",
      "longitude": "46.6753"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Saudi Arabia"
      },
      {
        "@type": "City",
        "name": "Riyadh"
      },
      {
        "@type": "City",
        "name": "Jeddah"
      },
      {
        "@type": "City",
        "name": "Dammam"
      },
      {
        "@type": "City",
        "name": "Makkah"
      },
      {
        "@type": "City",
        "name": "Madinah"
      }
    ],
    "priceRange": "20000 SAR - 100000+ SAR",
    "openingHours": "Su-Th 09:00-18:00",
    "sameAs": [
      "https://www.linkedin.com/company/symloop",
      "https://www.instagram.com/symloop",
      "https://twitter.com/symloop"
    ]
  };

  return (
    <>
      <Head>
        <title>{c.meta.title}</title>
        <meta name="description" content={c.meta.description} />
        <meta name="keywords" content={c.meta.keywords} />
        <link rel="canonical" href="https://symloop.com/ar/blog/tijara-iliktruniya-saudi-arabia-mada-2026" />

        {/* Geo Meta Tags */}
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content="Riyadh, Saudi Arabia" />
        <meta name="geo.position" content="24.7136;46.6753" />
        <meta name="ICBM" content="24.7136, 46.6753" />

        {/* Open Graph */}
        <meta property="og:title" content={c.meta.title} />
        <meta property="og:description" content={c.meta.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/ar/blog/tijara-iliktruniya-saudi-arabia-mada-2026" />
        <meta property="og:image" content="https://symloop.com/logo.png" />
        <meta property="og:locale" content={locale === 'ar' ? 'ar_SA' : locale === 'fr' ? 'fr_FR' : 'en_US'} />
        <meta property="og:site_name" content="Symloop" />
        <meta property="article:published_time" content="2026-02-01T00:00:00+03:00" />
        <meta property="article:modified_time" content="2026-02-07T00:00:00+03:00" />
        <meta property="article:author" content="Symloop" />
        <meta property="article:section" content="E-Commerce" />
        <meta property="article:tag" content="e-commerce saudi arabia mada stc pay" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={c.meta.title} />
        <meta name="twitter:description" content={c.meta.description} />

        {/* Hreflang */}
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/blog/tijara-iliktruniya-saudi-arabia-mada-2026" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/en/blog/tijara-iliktruniya-saudi-arabia-mada-2026" />
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/blog/tijara-iliktruniya-saudi-arabia-mada-2026" />
        <link rel="alternate" hrefLang="x-default" href="https://symloop.com/ar/blog/tijara-iliktruniya-saudi-arabia-mada-2026" />

        {/* Schema JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://symloop.com" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" }, { "@type": "ListItem", "position": 3, "name": c.meta.title }] }) }} />
      </Head>

      <div className={`min-h-screen bg-slate-950 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>

        {/* Section 1: Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-slate-950 to-teal-900/20" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="absolute top-40 right-20 w-64 h-64 bg-emerald-400/5 rounded-full blur-2xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Back to Blog */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              {c.backToBlog}
            </Link>

            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium mb-6">
                <ShoppingCart className="w-4 h-4" />
                {c.hero.badge}
              </span>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {c.hero.title}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  {c.hero.titleHighlight}
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-6 max-w-3xl mx-auto">
                {c.hero.subtitle}
              </p>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400 text-sm mb-8">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {c.publishedOn} 2026-02-01
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {c.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {c.author}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {locale === 'ar' ? 'السعودية' : locale === 'fr' ? 'Arabie Saoudite' : 'Saudi Arabia'}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/213549575512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-500 hover:to-teal-500 transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  {c.cta.whatsapp}
                </a>
                <a href="#pricing" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20">
                  {c.hero.cta2}
                </a>
              </div>
            </div>

            {/* Market Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              {c.stats.map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all">
                  <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Introduction */}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-emerald-400" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">{c.intro.title}</h2>
              </div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                {c.intro.text}
              </p>
            <p className="text-base text-gray-400 mt-6 leading-relaxed">
              {locale === 'ar'
                ? <>استكشف أيضاً <Link href="/services" className="text-cyan-400 hover:underline">خدماتنا الكاملة</Link> بما في ذلك <Link href="/blog/barnamij-erp-idarat-sharikaat-saudi-arabia-2026" className="text-cyan-400 hover:underline">برنامج ERP لإدارة الشركات في السعودية</Link> و<Link href="/blog/tijara-iliktruniya-kuwait-knet-2026" className="text-cyan-400 hover:underline">التجارة الإلكترونية في الكويت</Link>.</>
                : <>Explore our full range of <Link href="/services" className="text-cyan-400 hover:underline">IT services</Link>, including <Link href="/blog/barnamij-erp-idarat-sharikaat-saudi-arabia-2026" className="text-cyan-400 hover:underline">ERP business software in Saudi Arabia</Link> and <Link href="/blog/tijara-iliktruniya-kuwait-knet-2026" className="text-cyan-400 hover:underline">e-commerce solutions in Kuwait</Link>.</>
              }
            </p>
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-emerald-200 font-medium">{c.intro.highlight}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.services.title}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">{c.services.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {c.services.items.map((service, index) => {
                const Icon = iconComponents[service.icon];
                return (
                  <div
                    key={index}
                    className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-5 group-hover:bg-emerald-500/30 transition-all">
                      {Icon && <Icon className="w-7 h-7 text-emerald-400" />}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{service.description}</p>
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
        {/* Section 4: Payment Gateways */}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <CreditCard className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.payments.title}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">{c.payments.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {c.payments.items.map((payment, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{payment.name}</h3>
                  </div>
                  <p className="text-slate-400 text-sm">{payment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Cities Coverage */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <MapPin className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.cities.title}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">{c.cities.subtitle}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {c.cities.items.map((city, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 transition-all"
                >
                  <MapPin className="w-6 h-6 text-emerald-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-1">{city.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Industry Sectors */}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Briefcase className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.sectors.title}</h2>
              <p className="text-slate-400">{c.sectors.subtitle}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {c.sectors.items.map((sector, index) => (
                <span
                  key={index}
                  className="px-6 py-3 rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:border-emerald-500/50 hover:text-emerald-300 transition-all text-sm font-medium"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Why Symloop */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Award className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.whyUs.title}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {c.whyUs.items.map((item, index) => {
                const Icon = iconComponents[item.icon];
                return (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 transition-all text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                      {Icon && <Icon className="w-6 h-6 text-emerald-400" />}
                    </div>
                    <p className="text-slate-300 text-sm">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 8: Pricing */}
        <section id="pricing" className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Tag className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.pricing.title}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">{c.pricing.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {c.pricing.items.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative p-8 rounded-2xl ${
                    pkg.popular
                      ? 'bg-gradient-to-br from-emerald-900/50 to-teal-900/50 border-2 border-emerald-500/50'
                      : 'bg-slate-800/50 border border-slate-700/50'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-sm font-medium rounded-full whitespace-nowrap">
                      {locale === 'ar' ? 'الأكثر طلباً' : locale === 'fr' ? 'Plus Populaire' : 'Most Popular'}
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{pkg.description}</p>

                  <div className="mb-6">
                    <span className="text-lg font-bold text-emerald-400">{pkg.price}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/213549575512"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full block text-center py-3 rounded-xl font-semibold transition-all text-sm ${
                      pkg.popular
                        ? 'bg-emerald-500 text-white hover:bg-emerald-400'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {locale === 'ar' ? 'اختر هذه الباقة' : locale === 'fr' ? 'Choisir Ce Forfait' : 'Choose This Package'}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <MessageCircle className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.faq.title}</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {c.faq.items.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/30 transition-all"
                >
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400 text-sm font-bold">
                      {index + 1}
                    </span>
                    {item.question}
                  </h3>
                  <p className="text-slate-400 leading-relaxed {isRTL ? 'pr-11' : 'pl-11'}">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 10: CTA */}
        <section className="py-20 bg-gradient-to-br from-emerald-900/30 to-teal-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Rocket className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.cta.title}</h2>
              <p className="text-slate-300 mb-8 text-lg">{c.cta.subtitle}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="https://wa.me/213549575512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-500 hover:to-teal-500 transition-all shadow-lg shadow-emerald-500/25"
                >
                  <MessageCircle className="w-5 h-5" />
                  {c.cta.whatsapp}
                </a>
                <a
                  href={`tel:${c.cta.phone}`}
                  className="flex items-center gap-2 px-6 py-4 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-all border border-white/20"
                >
                  <Phone className="w-5 h-5" />
                  {c.cta.phone}
                </a>
                <a
                  href={`mailto:${c.cta.email}`}
                  className="flex items-center gap-2 px-6 py-4 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-all border border-white/20"
                >
                  <Mail className="w-5 h-5" />
                  {c.cta.email}
                </a>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
              >
                <Building2 className="w-5 h-5" />
                {c.cta.button}
              </Link>
            </div>
          </div>
        </section>

        {/* Section 11: Related Articles */}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.related.title}</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {c.related.items.map((article, index) => (
                <Link
                  key={index}
                  href={`/blog/${article.slug}`}
                  className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-all">
                    <ArrowLeft className={`w-5 h-5 text-emerald-400 ${isRTL ? '' : 'rotate-180'}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {article.title}
                  </h3>
                  <span className="text-emerald-400 text-sm font-medium">
                    {c.readMore} &rarr;
                  </span>
                </Link>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-gray-400 mt-8 mb-4">
              {locale === 'ar' ? 'المزيد من خدماتنا في المنطقة' : 'More From Our Regional Coverage'}
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              <Link href="/blog/tijara-iliktruniya-uae-dubai-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'التجارة الإلكترونية في الإمارات' : 'E-Commerce in the UAE'}
                </h3>
                <span className="text-cyan-500 text-sm flex items-center gap-1">
                  {locale === 'ar' ? 'اقرأ المزيد' : 'Read more'}
                  <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? '' : 'rotate-180'}`} />
                </span>
              </Link>
              <Link href="/blog/barnamij-erp-idarat-sharikaat-kuwait-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'برنامج ERP في الكويت' : 'ERP Software in Kuwait'}
                </h3>
                <span className="text-cyan-500 text-sm flex items-center gap-1">
                  {locale === 'ar' ? 'اقرأ المزيد' : 'Read more'}
                  <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? '' : 'rotate-180'}`} />
                </span>
              </Link>
              <Link href="/blog/tatwir-mawaqie-web-saudi-arabia-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'تطوير المواقع في السعودية' : 'Web Development in Saudi Arabia'}
                </h3>
                <span className="text-cyan-500 text-sm flex items-center gap-1">
                  {locale === 'ar' ? 'اقرأ المزيد' : 'Read more'}
                  <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? '' : 'rotate-180'}`} />
                </span>
              </Link>
            </div>

            {/* Back to Blog */}
            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {c.backToBlog}
              </Link>
            </div>
          </div>
        </section>

        {/* Hidden SEO Keywords */}
        <div className="sr-only" aria-hidden="true">
          {seoKeywords.map((keyword, index) => (
            <span key={index}>{keyword}</span>
          ))}
        </div>
      </div>
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
