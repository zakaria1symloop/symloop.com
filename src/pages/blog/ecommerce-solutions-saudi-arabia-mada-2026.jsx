"use client";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
      title: "E-commerce Solutions Saudi Arabia 2026 | MADA & STC Pay | Symloop",
      description: "Leading e-commerce development company in Saudi Arabia. Custom online stores with MADA, STC Pay, Tabby & Tamara integration. Shopify, WooCommerce & custom builds for KSA Vision 2030. From 20,000 SAR.",
      keywords: "e-commerce Saudi Arabia, online store KSA, MADA payment integration, STC Pay e-commerce, Shopify Saudi Arabia, WooCommerce KSA, e-commerce development Riyadh, online marketplace Jeddah, mobile commerce Saudi, e-commerce Dammam, BNPL Tabby Tamara, Vision 2030 digital commerce, Saudi e-commerce platform, Arabic online store, e-commerce solutions Gulf"
    },
    hero: {
      badge: "E-Commerce Saudi Arabia 2026",
      title: "E-commerce Solutions in Saudi Arabia",
      titleHighlight: "with MADA Integration",
      subtitle: "Build your high-converting online store in the Kingdom of Saudi Arabia. We deliver complete e-commerce solutions with MADA, STC Pay, Tabby, and Tamara payment integrations tailored for the $12B+ KSA digital market.",
      cta1: "Start Your Store",
      cta2: "View Pricing",
      date: "January 2026",
      readTime: "12 min read"
    },
    intro: {
      title: "The Saudi E-Commerce Boom: $12B+ Market Opportunity",
      paragraphs: [
        "Saudi Arabia's e-commerce market has exploded past $12 billion, driven by Vision 2030's digital transformation agenda and one of the youngest, most connected populations in the world. With over 36 million online shoppers and mobile penetration exceeding 98%, the Kingdom represents the largest e-commerce opportunity in the Middle East.",
        "From fashion and electronics to grocery delivery and luxury goods, Saudi consumers are embracing digital shopping at unprecedented rates. The introduction of MADA for seamless debit payments, STC Pay for mobile wallets, and Buy Now Pay Later services like Tabby and Tamara has removed the last barriers to online purchasing.",
        "At Symloop, we specialize in building conversion-optimized, Arabic-first e-commerce platforms that integrate natively with Saudi payment gateways, logistics providers, and regulatory frameworks. Whether you need a Shopify store, WooCommerce site, or fully custom marketplace, our team delivers solutions that drive real revenue in the KSA market."
      ]
    },
    stats: {
      title: "Saudi E-Commerce Market in Numbers",
      items: [
        { value: "$12B+", label: "E-Commerce Market Size", icon: "TrendingUp" },
        { value: "36M+", label: "Online Shoppers in KSA", icon: "Users" },
        { value: "45%+", label: "Annual Growth Rate", icon: "BarChart3" },
        { value: "80%+", label: "Mobile Shopping Share", icon: "Smartphone" }
      ]
    },
    services: {
      title: "Our E-Commerce Services",
      subtitle: "End-to-end e-commerce solutions for the Saudi market",
      items: [
        {
          icon: "ShoppingCart",
          title: "Custom Online Stores",
          description: "We build high-performance online stores on Shopify, WooCommerce, or fully custom platforms. Arabic-first design, mobile-optimized, with complete MADA and STC Pay integration ready to sell from day one.",
          features: ["Shopify Plus stores", "WooCommerce development", "Custom-built platforms", "Arabic RTL design", "Mobile-first approach"]
        },
        {
          icon: "Layers",
          title: "Marketplace Development",
          description: "Launch multi-vendor marketplaces and auction platforms for the Saudi market. Vendor management dashboards, commission systems, and automated payouts built for scale.",
          features: ["Multi-vendor platforms", "Auction & bidding sites", "Vendor dashboards", "Commission management", "Automated settlements"]
        },
        {
          icon: "Smartphone",
          title: "Mobile Commerce",
          description: "Native and progressive web apps for m-commerce. With 80%+ of Saudi shoppers buying on mobile, we ensure flawless checkout experiences on every device.",
          features: ["Native iOS & Android apps", "Progressive Web Apps", "One-tap checkout", "Push notifications", "Biometric payments"]
        },
        {
          icon: "TrendingUp",
          title: "E-Commerce Marketing",
          description: "Drive traffic and conversions with SEO, social commerce, and email marketing strategies built specifically for the Saudi consumer. We optimize for Google.com.sa and local search.",
          features: ["Arabic SEO optimization", "Social commerce integration", "Email marketing automation", "Google & Meta ads", "Influencer campaigns"]
        }
      ]
    },
    payments: {
      title: "Payment Gateway Integrations",
      subtitle: "We integrate all major Saudi payment methods your customers expect",
      items: [
        { name: "MADA", description: "Saudi national debit network - used by 70%+ of Saudi shoppers for online payments", type: "Debit Card" },
        { name: "STC Pay", description: "Leading mobile wallet in KSA with 8M+ users. Seamless one-tap mobile checkout", type: "Mobile Wallet" },
        { name: "Tabby", description: "Split payments into 4 interest-free installments. Increases average order value by 30%+", type: "Buy Now Pay Later" },
        { name: "Tamara", description: "Pay in 3 installments with no interest. Trusted by major Saudi retailers", type: "Buy Now Pay Later" },
        { name: "Apple Pay", description: "Fast, secure contactless payments for iOS users. One-touch checkout experience", type: "Digital Wallet" },
        { name: "Visa / Mastercard", description: "International credit and debit card processing with 3D Secure authentication", type: "Credit/Debit Card" }
      ]
    },
    cities: {
      title: "E-Commerce Projects Across Saudi Arabia",
      subtitle: "We serve businesses in every major Saudi city",
      items: [
        { name: "Riyadh", description: "Capital city - largest e-commerce market in KSA" },
        { name: "Jeddah", description: "Commercial hub & gateway to Hajj/Umrah market" },
        { name: "Dammam", description: "Eastern Province industrial & retail hub" },
        { name: "Mecca", description: "Religious tourism & specialty e-commerce" },
        { name: "Medina", description: "Growing digital retail market" }
      ]
    },
    sectors: {
      title: "E-Commerce Sectors We Serve",
      subtitle: "Industry-specific solutions for Saudi businesses",
      items: [
        { name: "Fashion & Apparel", icon: "Tag" },
        { name: "Electronics & Gadgets", icon: "Smartphone" },
        { name: "Grocery & F&B", icon: "Package" },
        { name: "Beauty & Cosmetics", icon: "Star" },
        { name: "Home & Furniture", icon: "Building2" },
        { name: "Automotive Parts", icon: "Truck" },
        { name: "Books & Education", icon: "Briefcase" },
        { name: "Health & Pharmacy", icon: "Shield" },
        { name: "Sports & Outdoor", icon: "Zap" }
      ]
    },
    whyUs: {
      title: "Why Choose Symloop for E-Commerce in Saudi Arabia",
      items: [
        { icon: "CreditCard", title: "MADA & Local Payment Experts", description: "Deep expertise in Saudi payment gateway integration including MADA, STC Pay, Tabby, and Tamara" },
        { icon: "Globe", title: "Arabic-First Design", description: "Native RTL layouts, Arabic typography, and culturally-aligned UX designed for Saudi consumers" },
        { icon: "Smartphone", title: "Mobile Commerce Focus", description: "80%+ of Saudi shoppers buy on mobile. Every store we build is mobile-first from the ground up" },
        { icon: "Rocket", title: "Fast Time to Market", description: "Launch your store in 4-8 weeks with our proven development process and pre-built Saudi market templates" },
        { icon: "Shield", title: "SAMA Compliance", description: "All payment integrations comply with Saudi Arabian Monetary Authority regulations and data protection laws" },
        { icon: "BarChart3", title: "Conversion Optimization", description: "Data-driven design and A/B testing to maximize your store's conversion rate and average order value" },
        { icon: "Database", title: "Scalable Architecture", description: "Cloud-hosted infrastructure that handles traffic spikes during Ramadan, White Friday, and Saudi National Day" },
        { icon: "Users", title: "Ongoing Support & Growth", description: "Dedicated account managers, 24/7 technical support, and quarterly optimization reviews" }
      ]
    },
    pricing: {
      title: "E-Commerce Packages for Saudi Arabia",
      subtitle: "Transparent pricing in Saudi Riyals",
      items: [
        {
          name: "Starter Store",
          price: "From 20,000",
          currency: "SAR",
          description: "Perfect for small businesses launching online",
          features: [
            "Up to 200 products",
            "MADA & Visa/MC integration",
            "Responsive Arabic design",
            "Basic SEO setup",
            "SSL & hosting included",
            "3 months support",
            "Training session"
          ],
          popular: false
        },
        {
          name: "Business Store",
          price: "From 45,000",
          currency: "SAR",
          description: "For growing brands ready to scale",
          features: [
            "Unlimited products",
            "All payment gateways",
            "Custom Arabic/English design",
            "Advanced SEO & analytics",
            "PWA mobile app",
            "6 months support",
            "Social commerce integration",
            "Inventory management"
          ],
          popular: true
        },
        {
          name: "Enterprise Marketplace",
          price: "From 100,000",
          currency: "SAR",
          description: "Multi-vendor platforms at scale",
          features: [
            "Everything in Business",
            "Multi-vendor system",
            "Custom API development",
            "ERP/CRM integration",
            "Dedicated account manager",
            "12 months premium support",
            "Performance optimization",
            "Custom analytics dashboard"
          ],
          popular: false
        },
        {
          name: "Custom Solution",
          price: "On Quote",
          currency: "",
          description: "Tailored to your exact requirements",
          features: [
            "Fully custom architecture",
            "Enterprise integrations",
            "AI-powered recommendations",
            "Multi-country deployment",
            "White-label solutions",
            "SLA guarantee",
            "Dedicated dev team",
            "Unlimited customization"
          ],
          popular: false
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How does MADA payment integration work for my online store?",
          answer: "MADA is Saudi Arabia's national debit card network used by over 70% of Saudi shoppers. We integrate MADA through certified payment gateways like HyperPay, PayTabs, or Moyasar. The integration includes 3D Secure authentication, tokenization for returning customers, and automatic settlement to your Saudi bank account within 1-2 business days."
        },
        {
          question: "Can you integrate delivery and logistics providers in Saudi Arabia?",
          answer: "Yes, we integrate all major Saudi logistics providers including SMSA Express, Aramex, Fetchr, Naqel, and J&T Express. Our integrations include real-time tracking, automated shipping label generation, COD (Cash on Delivery) management, and delivery zone configuration for all Saudi cities and regions."
        },
        {
          question: "Do you build fully Arabic e-commerce stores?",
          answer: "Absolutely. All our e-commerce solutions are built Arabic-first with proper RTL (Right-to-Left) layouts, Arabic typography, and culturally appropriate design. We also build bilingual Arabic/English stores with language switching, separate content management for each language, and locale-specific pricing and promotions."
        },
        {
          question: "How long does it take to launch an e-commerce store in Saudi Arabia?",
          answer: "A Starter Store typically launches in 3-4 weeks, a Business Store in 6-8 weeks, and an Enterprise Marketplace in 10-16 weeks. We follow an agile process with weekly milestones so you can see progress throughout. Rush delivery options are available for an additional fee."
        },
        {
          question: "Do you provide support after the store launches?",
          answer: "Yes, all packages include post-launch support ranging from 3 to 12 months. This covers bug fixes, minor updates, payment gateway support, and performance monitoring. We also offer ongoing retainer plans for continuous feature development, marketing optimization, and seasonal campaign support during peak periods like Ramadan and White Friday."
        }
      ]
    },
    cta: {
      title: "Ready to Launch Your E-Commerce Store in Saudi Arabia?",
      subtitle: "Join hundreds of Saudi businesses selling online with Symloop. Get a free consultation and custom quote for your project.",
      button: "Get Free Consultation",
      whatsapp: "Chat on WhatsApp",
      phone: "+213 549 57 55 12",
      email: "contact@symloop.com"
    },
    related: {
      title: "Related Articles",
      items: [
        { title: "Mobile App Development in Saudi Arabia 2026", slug: "mobile-app-development-saudi-arabia-2026" },
        { title: "Web Development Company Saudi Arabia 2026", slug: "web-development-company-saudi-arabia-2026" },
        { title: "ERP Business Software Saudi Arabia 2026", slug: "erp-business-software-saudi-arabia-2026" }
      ]
    },
    seoKeywords: [
      "e-commerce solutions Saudi Arabia",
      "online store development KSA",
      "MADA payment integration",
      "STC Pay e-commerce",
      "Shopify Saudi Arabia",
      "WooCommerce KSA",
      "e-commerce Riyadh",
      "online store Jeddah",
      "mobile commerce Saudi Arabia",
      "e-commerce Dammam",
      "Tabby BNPL integration",
      "Tamara payment Saudi",
      "Vision 2030 e-commerce",
      "Arabic online store development",
      "multi-vendor marketplace KSA",
      "e-commerce app Saudi Arabia",
      "Saudi e-commerce platform development",
      "online marketplace Saudi Arabia",
      "digital commerce KSA 2026",
      "e-commerce company Saudi Arabia"
    ]
  },
  ar: {
    meta: {
      title: "حلول التجارة الإلكترونية السعودية 2026 | مدى و STC Pay | سيملوب",
      description: "شركة رائدة في تطوير التجارة الإلكترونية في المملكة العربية السعودية. متاجر إلكترونية مخصصة مع تكامل مدى و STC Pay وتابي وتمارا. شوبيفاي ووكومرس وحلول مخصصة لرؤية 2030. من 20,000 ريال.",
      keywords: "تجارة إلكترونية السعودية, متجر إلكتروني المملكة, تكامل مدى, STC Pay تجارة إلكترونية, شوبيفاي السعودية, ووكومرس المملكة, تطوير تجارة إلكترونية الرياض, سوق إلكتروني جدة, تجارة الجوال السعودية, تجارة إلكترونية الدمام, تابي تمارا, رؤية 2030 التجارة الرقمية"
    },
    hero: {
      badge: "التجارة الإلكترونية السعودية 2026",
      title: "حلول التجارة الإلكترونية في السعودية",
      titleHighlight: "مع تكامل مدى",
      subtitle: "أنشئ متجرك الإلكتروني عالي التحويل في المملكة العربية السعودية. نقدم حلول تجارة إلكترونية متكاملة مع مدى و STC Pay وتابي وتمارا مصممة لسوق المملكة الرقمي الذي يتجاوز 12 مليار دولار.",
      cta1: "ابدأ متجرك",
      cta2: "عرض الأسعار",
      date: "يناير 2026",
      readTime: "12 دقيقة قراءة"
    },
    intro: {
      title: "طفرة التجارة الإلكترونية السعودية: فرصة سوقية بأكثر من 12 مليار دولار",
      paragraphs: [
        "تجاوز سوق التجارة الإلكترونية في المملكة العربية السعودية 12 مليار دولار، مدفوعاً بأجندة التحول الرقمي لرؤية 2030 وأحد أصغر السكان وأكثرهم اتصالاً في العالم. مع أكثر من 36 مليون متسوق عبر الإنترنت ونسبة انتشار الجوال التي تتجاوز 98%، تمثل المملكة أكبر فرصة للتجارة الإلكترونية في الشرق الأوسط.",
        "من الأزياء والإلكترونيات إلى توصيل البقالة والسلع الفاخرة، يتبنى المستهلكون السعوديون التسوق الرقمي بمعدلات غير مسبوقة. أدى إطلاق مدى للمدفوعات بالبطاقات المصرفية و STC Pay للمحافظ الإلكترونية وخدمات الشراء الآن والدفع لاحقاً مثل تابي وتمارا إلى إزالة آخر العوائق أمام الشراء عبر الإنترنت.",
        "في سيملوب، نتخصص في بناء منصات تجارة إلكترونية محسنة للتحويل وبتصميم عربي أولاً تتكامل أصلياً مع بوابات الدفع السعودية ومزودي الخدمات اللوجستية والأطر التنظيمية. سواء كنت تحتاج متجر شوبيفاي أو موقع ووكومرس أو سوق إلكتروني مخصص بالكامل، فريقنا يقدم حلولاً تحقق إيرادات حقيقية في سوق المملكة."
      ]
    },
    stats: {
      title: "سوق التجارة الإلكترونية السعودي بالأرقام",
      items: [
        { value: "$12B+", label: "حجم سوق التجارة الإلكترونية", icon: "TrendingUp" },
        { value: "36M+", label: "متسوق عبر الإنترنت في المملكة", icon: "Users" },
        { value: "45%+", label: "معدل النمو السنوي", icon: "BarChart3" },
        { value: "80%+", label: "حصة التسوق عبر الجوال", icon: "Smartphone" }
      ]
    },
    services: {
      title: "خدماتنا في التجارة الإلكترونية",
      subtitle: "حلول تجارة إلكترونية شاملة للسوق السعودي",
      items: [
        {
          icon: "ShoppingCart",
          title: "متاجر إلكترونية مخصصة",
          description: "نبني متاجر إلكترونية عالية الأداء على شوبيفاي أو ووكومرس أو منصات مخصصة بالكامل. تصميم عربي أولاً، محسن للجوال، مع تكامل مدى و STC Pay الكامل جاهز للبيع من اليوم الأول.",
          features: ["متاجر شوبيفاي بلس", "تطوير ووكومرس", "منصات مخصصة", "تصميم عربي RTL", "نهج الجوال أولاً"]
        },
        {
          icon: "Layers",
          title: "تطوير الأسواق الإلكترونية",
          description: "أطلق أسواقاً متعددة البائعين ومنصات المزادات للسوق السعودي. لوحات تحكم البائعين، أنظمة العمولات، والمدفوعات الآلية مبنية للتوسع.",
          features: ["منصات متعددة البائعين", "مواقع المزادات", "لوحات تحكم البائعين", "إدارة العمولات", "التسويات الآلية"]
        },
        {
          icon: "Smartphone",
          title: "التجارة عبر الجوال",
          description: "تطبيقات أصلية وتطبيقات ويب تقدمية للتجارة عبر الجوال. مع أكثر من 80% من المتسوقين السعوديين يشترون عبر الجوال، نضمن تجارب دفع سلسة على كل جهاز.",
          features: ["تطبيقات iOS و Android أصلية", "تطبيقات ويب تقدمية", "دفع بنقرة واحدة", "إشعارات فورية", "مدفوعات بيومترية"]
        },
        {
          icon: "TrendingUp",
          title: "تسويق التجارة الإلكترونية",
          description: "جلب الزيارات والتحويلات مع استراتيجيات تحسين محركات البحث والتجارة الاجتماعية والتسويق بالبريد الإلكتروني المصممة خصيصاً للمستهلك السعودي.",
          features: ["تحسين SEO بالعربية", "تكامل التجارة الاجتماعية", "أتمتة التسويق بالبريد", "إعلانات جوجل وميتا", "حملات المؤثرين"]
        }
      ]
    },
    payments: {
      title: "تكامل بوابات الدفع",
      subtitle: "نقوم بتكامل جميع طرق الدفع السعودية الرئيسية التي يتوقعها عملاؤك",
      items: [
        { name: "مدى", description: "شبكة البطاقات المصرفية الوطنية السعودية - يستخدمها أكثر من 70% من المتسوقين السعوديين للمدفوعات عبر الإنترنت", type: "بطاقة مصرفية" },
        { name: "STC Pay", description: "المحفظة الإلكترونية الرائدة في المملكة مع أكثر من 8 ملايين مستخدم. دفع بنقرة واحدة عبر الجوال", type: "محفظة إلكترونية" },
        { name: "تابي", description: "قسّم المدفوعات إلى 4 أقساط بدون فوائد. يزيد متوسط قيمة الطلب بنسبة 30%+", type: "اشترِ الآن وادفع لاحقاً" },
        { name: "تمارا", description: "ادفع على 3 أقساط بدون فوائد. موثوقة من كبار تجار التجزئة السعوديين", type: "اشترِ الآن وادفع لاحقاً" },
        { name: "Apple Pay", description: "مدفوعات سريعة وآمنة بدون تلامس لمستخدمي iOS. تجربة دفع بلمسة واحدة", type: "محفظة رقمية" },
        { name: "فيزا / ماستركارد", description: "معالجة بطاقات الائتمان والخصم الدولية مع مصادقة 3D Secure", type: "بطاقة ائتمان/خصم" }
      ]
    },
    cities: {
      title: "مشاريع التجارة الإلكترونية في أنحاء السعودية",
      subtitle: "نخدم الأعمال في كل مدينة سعودية رئيسية",
      items: [
        { name: "الرياض", description: "العاصمة - أكبر سوق تجارة إلكترونية في المملكة" },
        { name: "جدة", description: "المركز التجاري وبوابة سوق الحج والعمرة" },
        { name: "الدمام", description: "مركز المنطقة الشرقية الصناعي والتجاري" },
        { name: "مكة المكرمة", description: "السياحة الدينية والتجارة الإلكترونية المتخصصة" },
        { name: "المدينة المنورة", description: "سوق التجزئة الرقمي المتنامي" }
      ]
    },
    sectors: {
      title: "قطاعات التجارة الإلكترونية التي نخدمها",
      subtitle: "حلول متخصصة لكل صناعة سعودية",
      items: [
        { name: "الأزياء والملابس", icon: "Tag" },
        { name: "الإلكترونيات والأجهزة", icon: "Smartphone" },
        { name: "البقالة والأغذية", icon: "Package" },
        { name: "الجمال ومستحضرات التجميل", icon: "Star" },
        { name: "المنزل والأثاث", icon: "Building2" },
        { name: "قطع غيار السيارات", icon: "Truck" },
        { name: "الكتب والتعليم", icon: "Briefcase" },
        { name: "الصحة والصيدلة", icon: "Shield" },
        { name: "الرياضة والهواء الطلق", icon: "Zap" }
      ]
    },
    whyUs: {
      title: "لماذا تختار سيملوب للتجارة الإلكترونية في السعودية",
      items: [
        { icon: "CreditCard", title: "خبراء مدى والمدفوعات المحلية", description: "خبرة عميقة في تكامل بوابات الدفع السعودية بما في ذلك مدى و STC Pay وتابي وتمارا" },
        { icon: "Globe", title: "تصميم عربي أولاً", description: "تخطيطات RTL أصلية وخطوط عربية وتجربة مستخدم متوافقة ثقافياً مصممة للمستهلكين السعوديين" },
        { icon: "Smartphone", title: "التركيز على تجارة الجوال", description: "أكثر من 80% من المتسوقين السعوديين يشترون عبر الجوال. كل متجر نبنيه يعتمد نهج الجوال أولاً" },
        { icon: "Rocket", title: "سرعة الوصول للسوق", description: "أطلق متجرك في 4-8 أسابيع مع عمليتنا المثبتة وقوالب السوق السعودي الجاهزة" },
        { icon: "Shield", title: "امتثال ساما", description: "جميع تكاملات الدفع تمتثل للوائح مؤسسة النقد العربي السعودي وقوانين حماية البيانات" },
        { icon: "BarChart3", title: "تحسين التحويلات", description: "تصميم قائم على البيانات واختبار A/B لتعظيم معدل تحويل متجرك ومتوسط قيمة الطلب" },
        { icon: "Database", title: "بنية قابلة للتوسع", description: "بنية تحتية سحابية تتعامل مع ذروة الزيارات خلال رمضان والجمعة البيضاء واليوم الوطني السعودي" },
        { icon: "Users", title: "دعم مستمر ونمو", description: "مديرو حسابات مخصصون ودعم فني على مدار الساعة ومراجعات تحسين ربع سنوية" }
      ]
    },
    pricing: {
      title: "باقات التجارة الإلكترونية للسعودية",
      subtitle: "أسعار شفافة بالريال السعودي",
      items: [
        {
          name: "المتجر المبتدئ",
          price: "من 20,000",
          currency: "ريال",
          description: "مثالي للشركات الصغيرة التي تنطلق عبر الإنترنت",
          features: [
            "حتى 200 منتج",
            "تكامل مدى وفيزا/ماستركارد",
            "تصميم عربي متجاوب",
            "إعداد SEO أساسي",
            "SSL واستضافة مشمولة",
            "3 أشهر دعم",
            "جلسة تدريبية"
          ],
          popular: false
        },
        {
          name: "متجر الأعمال",
          price: "من 45,000",
          currency: "ريال",
          description: "للعلامات التجارية النامية المستعدة للتوسع",
          features: [
            "منتجات غير محدودة",
            "جميع بوابات الدفع",
            "تصميم عربي/إنجليزي مخصص",
            "SEO متقدم وتحليلات",
            "تطبيق جوال PWA",
            "6 أشهر دعم",
            "تكامل التجارة الاجتماعية",
            "إدارة المخزون"
          ],
          popular: true
        },
        {
          name: "سوق المؤسسات",
          price: "من 100,000",
          currency: "ريال",
          description: "منصات متعددة البائعين على نطاق واسع",
          features: [
            "كل ميزات الأعمال",
            "نظام متعدد البائعين",
            "تطوير API مخصص",
            "تكامل ERP/CRM",
            "مدير حساب مخصص",
            "12 شهر دعم مميز",
            "تحسين الأداء",
            "لوحة تحليلات مخصصة"
          ],
          popular: false
        },
        {
          name: "حل مخصص",
          price: "حسب الطلب",
          currency: "",
          description: "مصمم حسب متطلباتك بالضبط",
          features: [
            "بنية مخصصة بالكامل",
            "تكاملات مؤسسية",
            "توصيات بالذكاء الاصطناعي",
            "نشر متعدد البلدان",
            "حلول العلامة البيضاء",
            "ضمان SLA",
            "فريق تطوير مخصص",
            "تخصيص غير محدود"
          ],
          popular: false
        }
      ]
    },
    faq: {
      title: "أسئلة شائعة",
      items: [
        {
          question: "كيف يعمل تكامل الدفع بمدى لمتجري الإلكتروني؟",
          answer: "مدى هي شبكة البطاقات المصرفية الوطنية السعودية التي يستخدمها أكثر من 70% من المتسوقين السعوديين. نقوم بتكامل مدى من خلال بوابات دفع معتمدة مثل HyperPay وPayTabs وMoyasar. يشمل التكامل مصادقة 3D Secure والترميز للعملاء العائدين والتسوية الآلية لحسابك البنكي السعودي خلال 1-2 يوم عمل."
        },
        {
          question: "هل يمكنكم تكامل مزودي التوصيل والخدمات اللوجستية في السعودية؟",
          answer: "نعم، نقوم بتكامل جميع مزودي الخدمات اللوجستية الرئيسيين في السعودية بما في ذلك SMSA Express وأرامكس وFetchr وناقل وJ&T Express. تشمل التكاملات التتبع الفوري وإنشاء بطاقات الشحن الآلية وإدارة الدفع عند الاستلام وتكوين مناطق التوصيل لجميع المدن والمناطق السعودية."
        },
        {
          question: "هل تبنون متاجر إلكترونية عربية بالكامل؟",
          answer: "بالتأكيد. جميع حلول التجارة الإلكترونية لدينا مبنية بتصميم عربي أولاً مع تخطيطات RTL صحيحة وخطوط عربية وتصميم مناسب ثقافياً. نبني أيضاً متاجر ثنائية اللغة عربي/إنجليزي مع تبديل اللغة وإدارة محتوى منفصلة لكل لغة وتسعير وعروض ترويجية خاصة بكل لغة."
        },
        {
          question: "كم يستغرق إطلاق متجر إلكتروني في السعودية؟",
          answer: "المتجر المبتدئ يُطلق عادة في 3-4 أسابيع، ومتجر الأعمال في 6-8 أسابيع، وسوق المؤسسات في 10-16 أسبوع. نتبع عملية أجايل مع مراحل أسبوعية حتى تتمكن من رؤية التقدم طوال الوقت. تتوفر خيارات التسليم السريع مقابل رسوم إضافية."
        },
        {
          question: "هل تقدمون دعماً بعد إطلاق المتجر؟",
          answer: "نعم، جميع الباقات تشمل دعم ما بعد الإطلاق يتراوح من 3 إلى 12 شهراً. يشمل ذلك إصلاح الأخطاء والتحديثات الطفيفة ودعم بوابات الدفع ومراقبة الأداء. نقدم أيضاً خطط اشتراك مستمرة لتطوير الميزات المستمر وتحسين التسويق ودعم الحملات الموسمية خلال فترات الذروة مثل رمضان والجمعة البيضاء."
        }
      ]
    },
    cta: {
      title: "هل أنت مستعد لإطلاق متجرك الإلكتروني في السعودية؟",
      subtitle: "انضم إلى مئات الشركات السعودية التي تبيع عبر الإنترنت مع سيملوب. احصل على استشارة مجانية وعرض أسعار مخصص لمشروعك.",
      button: "احصل على استشارة مجانية",
      whatsapp: "تواصل عبر واتساب",
      phone: "+213 549 57 55 12",
      email: "contact@symloop.com"
    },
    related: {
      title: "مقالات ذات صلة",
      items: [
        { title: "تطوير تطبيقات الجوال في السعودية 2026", slug: "mobile-app-development-saudi-arabia-2026" },
        { title: "شركة تطوير مواقع الويب السعودية 2026", slug: "web-development-company-saudi-arabia-2026" },
        { title: "برامج ERP للأعمال السعودية 2026", slug: "erp-business-software-saudi-arabia-2026" }
      ]
    },
    seoKeywords: [
      "حلول التجارة الإلكترونية السعودية",
      "تطوير متجر إلكتروني المملكة",
      "تكامل مدى للدفع",
      "STC Pay تجارة إلكترونية",
      "شوبيفاي السعودية",
      "ووكومرس المملكة",
      "تجارة إلكترونية الرياض",
      "متجر إلكتروني جدة",
      "تجارة الجوال السعودية",
      "تجارة إلكترونية الدمام",
      "تابي أقساط",
      "تمارا دفع",
      "رؤية 2030 تجارة إلكترونية",
      "تطوير متجر عربي",
      "سوق متعدد البائعين المملكة",
      "تطبيق تجارة إلكترونية السعودية",
      "منصة تجارة إلكترونية سعودية",
      "سوق إلكتروني السعودية",
      "التجارة الرقمية المملكة 2026",
      "شركة تجارة إلكترونية السعودية"
    ]
  },
  fr: {
    meta: {
      title: "Solutions E-commerce Arabie Saoudite 2026 | MADA & STC Pay | Symloop",
      description: "Entreprise leader en développement e-commerce en Arabie Saoudite. Boutiques en ligne sur mesure avec intégration MADA, STC Pay, Tabby & Tamara. Shopify, WooCommerce & solutions personnalisées pour la Vision 2030. À partir de 20 000 SAR.",
      keywords: "e-commerce Arabie Saoudite, boutique en ligne KSA, intégration paiement MADA, STC Pay e-commerce, Shopify Arabie Saoudite, WooCommerce KSA, développement e-commerce Riyad, marketplace en ligne Djeddah, commerce mobile saoudien, e-commerce Dammam, BNPL Tabby Tamara, Vision 2030 commerce digital"
    },
    hero: {
      badge: "E-Commerce Arabie Saoudite 2026",
      title: "Solutions E-commerce en Arabie Saoudite",
      titleHighlight: "avec Intégration MADA",
      subtitle: "Créez votre boutique en ligne à haute conversion au Royaume d'Arabie Saoudite. Nous livrons des solutions e-commerce complètes avec intégrations MADA, STC Pay, Tabby et Tamara adaptées au marché digital de plus de 12 milliards $ du KSA.",
      cta1: "Lancer Votre Boutique",
      cta2: "Voir les Tarifs",
      date: "Janvier 2026",
      readTime: "12 min de lecture"
    },
    intro: {
      title: "Le Boom du E-Commerce Saoudien : Une Opportunité de Marché de Plus de 12 Milliards $",
      paragraphs: [
        "Le marché e-commerce de l'Arabie Saoudite a dépassé les 12 milliards de dollars, porté par l'agenda de transformation digitale de la Vision 2030 et l'une des populations les plus jeunes et les plus connectées au monde. Avec plus de 36 millions d'acheteurs en ligne et un taux de pénétration mobile dépassant 98%, le Royaume représente la plus grande opportunité e-commerce au Moyen-Orient.",
        "De la mode et l'électronique à la livraison de courses et les produits de luxe, les consommateurs saoudiens adoptent le shopping digital à des taux sans précédent. L'introduction de MADA pour les paiements par carte bancaire, STC Pay pour les portefeuilles mobiles, et les services Acheter Maintenant Payer Plus Tard comme Tabby et Tamara a supprimé les dernières barrières à l'achat en ligne.",
        "Chez Symloop, nous nous spécialisons dans la construction de plateformes e-commerce optimisées pour la conversion, avec un design arabe en priorité, qui s'intègrent nativement avec les passerelles de paiement saoudiennes, les prestataires logistiques et les cadres réglementaires. Que vous ayez besoin d'une boutique Shopify, d'un site WooCommerce ou d'une marketplace entièrement personnalisée, notre équipe livre des solutions qui génèrent de vrais revenus sur le marché KSA."
      ]
    },
    stats: {
      title: "Le Marché E-Commerce Saoudien en Chiffres",
      items: [
        { value: "$12B+", label: "Taille du Marché E-Commerce", icon: "TrendingUp" },
        { value: "36M+", label: "Acheteurs en Ligne au KSA", icon: "Users" },
        { value: "45%+", label: "Taux de Croissance Annuel", icon: "BarChart3" },
        { value: "80%+", label: "Part du Shopping Mobile", icon: "Smartphone" }
      ]
    },
    services: {
      title: "Nos Services E-Commerce",
      subtitle: "Solutions e-commerce de bout en bout pour le marché saoudien",
      items: [
        {
          icon: "ShoppingCart",
          title: "Boutiques en Ligne Sur Mesure",
          description: "Nous construisons des boutiques en ligne haute performance sur Shopify, WooCommerce ou des plateformes entièrement personnalisées. Design arabe en priorité, optimisé mobile, avec intégration MADA et STC Pay complète prête à vendre dès le premier jour.",
          features: ["Boutiques Shopify Plus", "Développement WooCommerce", "Plateformes sur mesure", "Design arabe RTL", "Approche mobile-first"]
        },
        {
          icon: "Layers",
          title: "Développement de Marketplaces",
          description: "Lancez des marketplaces multi-vendeurs et des plateformes d'enchères pour le marché saoudien. Tableaux de bord vendeurs, systèmes de commissions et paiements automatisés construits pour l'échelle.",
          features: ["Plateformes multi-vendeurs", "Sites d'enchères", "Tableaux de bord vendeurs", "Gestion des commissions", "Règlements automatisés"]
        },
        {
          icon: "Smartphone",
          title: "Commerce Mobile",
          description: "Applications natives et progressives pour le m-commerce. Avec plus de 80% des acheteurs saoudiens sur mobile, nous garantissons des expériences de paiement impeccables sur chaque appareil.",
          features: ["Applications iOS & Android natives", "Applications Web Progressives", "Paiement en un tap", "Notifications push", "Paiements biométriques"]
        },
        {
          icon: "TrendingUp",
          title: "Marketing E-Commerce",
          description: "Générez du trafic et des conversions avec des stratégies SEO, commerce social et email marketing conçues spécifiquement pour le consommateur saoudien. Nous optimisons pour Google.com.sa et la recherche locale.",
          features: ["Optimisation SEO arabe", "Intégration commerce social", "Automatisation email marketing", "Publicités Google & Meta", "Campagnes influenceurs"]
        }
      ]
    },
    payments: {
      title: "Intégrations de Passerelles de Paiement",
      subtitle: "Nous intégrons toutes les méthodes de paiement saoudiennes que vos clients attendent",
      items: [
        { name: "MADA", description: "Réseau national de cartes bancaires saoudien - utilisé par plus de 70% des acheteurs saoudiens en ligne", type: "Carte Bancaire" },
        { name: "STC Pay", description: "Premier portefeuille mobile au KSA avec plus de 8M d'utilisateurs. Paiement mobile en un tap", type: "Portefeuille Mobile" },
        { name: "Tabby", description: "Divisez les paiements en 4 versements sans intérêt. Augmente la valeur moyenne des commandes de plus de 30%", type: "Acheter Maintenant Payer Plus Tard" },
        { name: "Tamara", description: "Payez en 3 versements sans intérêt. Approuvé par les grands détaillants saoudiens", type: "Acheter Maintenant Payer Plus Tard" },
        { name: "Apple Pay", description: "Paiements rapides et sécurisés sans contact pour les utilisateurs iOS. Expérience de paiement en un toucher", type: "Portefeuille Digital" },
        { name: "Visa / Mastercard", description: "Traitement des cartes de crédit et débit internationales avec authentification 3D Secure", type: "Carte Crédit/Débit" }
      ]
    },
    cities: {
      title: "Projets E-Commerce à Travers l'Arabie Saoudite",
      subtitle: "Nous servons les entreprises dans chaque grande ville saoudienne",
      items: [
        { name: "Riyad", description: "Capitale - plus grand marché e-commerce du KSA" },
        { name: "Djeddah", description: "Hub commercial & porte d'entrée du marché Hajj/Omra" },
        { name: "Dammam", description: "Hub industriel & retail de la Province Est" },
        { name: "La Mecque", description: "Tourisme religieux & e-commerce spécialisé" },
        { name: "Médine", description: "Marché de retail digital en croissance" }
      ]
    },
    sectors: {
      title: "Secteurs E-Commerce que Nous Servons",
      subtitle: "Solutions spécifiques par industrie pour les entreprises saoudiennes",
      items: [
        { name: "Mode & Vêtements", icon: "Tag" },
        { name: "Électronique & Gadgets", icon: "Smartphone" },
        { name: "Épicerie & Restauration", icon: "Package" },
        { name: "Beauté & Cosmétiques", icon: "Star" },
        { name: "Maison & Mobilier", icon: "Building2" },
        { name: "Pièces Automobiles", icon: "Truck" },
        { name: "Livres & Éducation", icon: "Briefcase" },
        { name: "Santé & Pharmacie", icon: "Shield" },
        { name: "Sports & Plein Air", icon: "Zap" }
      ]
    },
    whyUs: {
      title: "Pourquoi Choisir Symloop pour le E-Commerce en Arabie Saoudite",
      items: [
        { icon: "CreditCard", title: "Experts MADA & Paiements Locaux", description: "Expertise approfondie en intégration de passerelles de paiement saoudiennes incluant MADA, STC Pay, Tabby et Tamara" },
        { icon: "Globe", title: "Design Arabe en Priorité", description: "Mises en page RTL natives, typographie arabe et UX culturellement adaptée conçue pour les consommateurs saoudiens" },
        { icon: "Smartphone", title: "Focus Commerce Mobile", description: "Plus de 80% des acheteurs saoudiens achètent sur mobile. Chaque boutique que nous construisons est mobile-first" },
        { icon: "Rocket", title: "Rapidité de Mise en Marché", description: "Lancez votre boutique en 4-8 semaines avec notre processus éprouvé et nos templates prêts pour le marché saoudien" },
        { icon: "Shield", title: "Conformité SAMA", description: "Toutes les intégrations de paiement conformes aux réglementations de l'Autorité Monétaire Saoudienne et aux lois de protection des données" },
        { icon: "BarChart3", title: "Optimisation des Conversions", description: "Design data-driven et tests A/B pour maximiser le taux de conversion et la valeur moyenne des commandes" },
        { icon: "Database", title: "Architecture Scalable", description: "Infrastructure cloud qui gère les pics de trafic pendant le Ramadan, le White Friday et la Fête Nationale Saoudienne" },
        { icon: "Users", title: "Support Continu & Croissance", description: "Gestionnaires de compte dédiés, support technique 24/7 et revues d'optimisation trimestrielles" }
      ]
    },
    pricing: {
      title: "Forfaits E-Commerce pour l'Arabie Saoudite",
      subtitle: "Tarification transparente en Riyals Saoudiens",
      items: [
        {
          name: "Boutique Starter",
          price: "À partir de 20 000",
          currency: "SAR",
          description: "Parfait pour les petites entreprises qui se lancent en ligne",
          features: [
            "Jusqu'à 200 produits",
            "Intégration MADA & Visa/MC",
            "Design arabe responsive",
            "Configuration SEO de base",
            "SSL & hébergement inclus",
            "3 mois de support",
            "Session de formation"
          ],
          popular: false
        },
        {
          name: "Boutique Business",
          price: "À partir de 45 000",
          currency: "SAR",
          description: "Pour les marques en croissance prêtes à scaler",
          features: [
            "Produits illimités",
            "Toutes les passerelles de paiement",
            "Design arabe/anglais sur mesure",
            "SEO avancé & analytics",
            "Application mobile PWA",
            "6 mois de support",
            "Intégration commerce social",
            "Gestion des stocks"
          ],
          popular: true
        },
        {
          name: "Marketplace Enterprise",
          price: "À partir de 100 000",
          currency: "SAR",
          description: "Plateformes multi-vendeurs à grande échelle",
          features: [
            "Tout de Business",
            "Système multi-vendeurs",
            "Développement API sur mesure",
            "Intégration ERP/CRM",
            "Gestionnaire de compte dédié",
            "12 mois support premium",
            "Optimisation des performances",
            "Dashboard analytics personnalisé"
          ],
          popular: false
        },
        {
          name: "Solution Sur Mesure",
          price: "Sur Devis",
          currency: "",
          description: "Adapté à vos besoins exacts",
          features: [
            "Architecture entièrement personnalisée",
            "Intégrations entreprise",
            "Recommandations IA",
            "Déploiement multi-pays",
            "Solutions en marque blanche",
            "Garantie SLA",
            "Équipe de dev dédiée",
            "Personnalisation illimitée"
          ],
          popular: false
        }
      ]
    },
    faq: {
      title: "Questions Fréquentes",
      items: [
        {
          question: "Comment fonctionne l'intégration du paiement MADA pour ma boutique en ligne ?",
          answer: "MADA est le réseau national de cartes bancaires saoudien utilisé par plus de 70% des acheteurs saoudiens. Nous intégrons MADA via des passerelles de paiement certifiées comme HyperPay, PayTabs ou Moyasar. L'intégration comprend l'authentification 3D Secure, la tokenisation pour les clients récurrents et le règlement automatique sur votre compte bancaire saoudien sous 1-2 jours ouvrables."
        },
        {
          question: "Pouvez-vous intégrer les prestataires de livraison et logistique en Arabie Saoudite ?",
          answer: "Oui, nous intégrons tous les principaux prestataires logistiques saoudiens incluant SMSA Express, Aramex, Fetchr, Naqel et J&T Express. Nos intégrations comprennent le suivi en temps réel, la génération automatique d'étiquettes d'expédition, la gestion du COD (paiement à la livraison) et la configuration des zones de livraison pour toutes les villes et régions saoudiennes."
        },
        {
          question: "Construisez-vous des boutiques e-commerce entièrement en arabe ?",
          answer: "Absolument. Toutes nos solutions e-commerce sont construites avec un design arabe en priorité avec des mises en page RTL (droite à gauche) correctes, une typographie arabe et un design culturellement approprié. Nous construisons aussi des boutiques bilingues arabe/anglais avec changement de langue, gestion de contenu séparée pour chaque langue et tarification et promotions spécifiques à chaque locale."
        },
        {
          question: "Combien de temps faut-il pour lancer une boutique e-commerce en Arabie Saoudite ?",
          answer: "Une Boutique Starter se lance typiquement en 3-4 semaines, une Boutique Business en 6-8 semaines et une Marketplace Enterprise en 10-16 semaines. Nous suivons un processus agile avec des jalons hebdomadaires pour que vous puissiez voir la progression. Des options de livraison accélérée sont disponibles moyennant un supplément."
        },
        {
          question: "Fournissez-vous du support après le lancement de la boutique ?",
          answer: "Oui, tous les forfaits incluent un support post-lancement allant de 3 à 12 mois. Cela couvre les corrections de bugs, les mises à jour mineures, le support des passerelles de paiement et le monitoring des performances. Nous proposons aussi des plans de maintenance continue pour le développement de fonctionnalités, l'optimisation marketing et le support des campagnes saisonnières pendant les périodes de pointe comme le Ramadan et le White Friday."
        }
      ]
    },
    cta: {
      title: "Prêt à Lancer Votre Boutique E-Commerce en Arabie Saoudite ?",
      subtitle: "Rejoignez des centaines d'entreprises saoudiennes qui vendent en ligne avec Symloop. Obtenez une consultation gratuite et un devis personnalisé pour votre projet.",
      button: "Obtenir une Consultation Gratuite",
      whatsapp: "Discuter sur WhatsApp",
      phone: "+213 549 57 55 12",
      email: "contact@symloop.com"
    },
    related: {
      title: "Articles Connexes",
      items: [
        { title: "Développement d'Applications Mobiles en Arabie Saoudite 2026", slug: "mobile-app-development-saudi-arabia-2026" },
        { title: "Entreprise de Développement Web Arabie Saoudite 2026", slug: "web-development-company-saudi-arabia-2026" },
        { title: "Logiciel ERP pour Entreprises Arabie Saoudite 2026", slug: "erp-business-software-saudi-arabia-2026" }
      ]
    },
    seoKeywords: [
      "solutions e-commerce Arabie Saoudite",
      "développement boutique en ligne KSA",
      "intégration paiement MADA",
      "STC Pay e-commerce",
      "Shopify Arabie Saoudite",
      "WooCommerce KSA",
      "e-commerce Riyad",
      "boutique en ligne Djeddah",
      "commerce mobile Arabie Saoudite",
      "e-commerce Dammam",
      "intégration Tabby BNPL",
      "paiement Tamara saoudien",
      "Vision 2030 e-commerce",
      "développement boutique arabe",
      "marketplace multi-vendeurs KSA",
      "application e-commerce Arabie Saoudite",
      "plateforme e-commerce saoudienne",
      "marketplace en ligne Arabie Saoudite",
      "commerce digital KSA 2026",
      "entreprise e-commerce Arabie Saoudite"
    ]
  }
};

const iconComponents = {
  ShoppingCart,
  Layers,
  Smartphone,
  TrendingUp,
  CreditCard,
  Globe,
  Rocket,
  Shield,
  BarChart3,
  Database,
  Users,
  Tag,
  Package,
  Star,
  Building2,
  Truck,
  Briefcase,
  Zap
};

export default function EcommerceSolutionsSaudiArabia2026() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;
  const isRTL = locale === 'ar';
  const c = content[locale] || content.en;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.hero.title + " " + c.hero.titleHighlight,
    "description": c.meta.description,
    "image": "https://symloop.com/images/blog/ecommerce-solutions-saudi-arabia-mada-2026.jpg",
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
    "datePublished": "2026-01-15",
    "dateModified": "2026-01-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://symloop.com/blog/ecommerce-solutions-saudi-arabia-mada-2026"
    },
    "inLanguage": locale,
    "keywords": c.seoKeywords.join(", ")
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
    "@id": "https://symloop.com/blog/ecommerce-solutions-saudi-arabia-mada-2026",
    "name": "Symloop - E-Commerce Solutions Saudi Arabia",
    "alternateName": ["سيملوب حلول التجارة الإلكترونية السعودية", "Symloop Solutions E-commerce Arabie Saoudite"],
    "description": c.meta.description,
    "url": "https://symloop.com/blog/ecommerce-solutions-saudi-arabia-mada-2026",
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
      { "@type": "Country", "name": "Saudi Arabia" },
      { "@type": "City", "name": "Riyadh" },
      { "@type": "City", "name": "Jeddah" },
      { "@type": "City", "name": "Dammam" },
      { "@type": "City", "name": "Mecca" },
      { "@type": "City", "name": "Medina" }
    ],
    "priceRange": "20000 SAR - 100000+ SAR",
    "openingHours": "Su-Th 09:00-18:00",
    "sameAs": [
      "https://www.linkedin.com/company/symloop",
      "https://www.instagram.com/symloop"
    ]
  };

  return (
    <>
      <Head>
        <title>{c.meta.title}</title>
        <meta name="description" content={c.meta.description} />
        <meta name="keywords" content={c.meta.keywords} />
        <link rel="canonical" href="https://symloop.com/blog/ecommerce-solutions-saudi-arabia-mada-2026" />

        {/* Geo Meta Tags */}
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content="Riyadh, Saudi Arabia" />
        <meta name="geo.position" content="24.7136;46.6753" />
        <meta name="ICBM" content="24.7136, 46.6753" />

        {/* Open Graph */}
        <meta property="og:title" content={c.meta.title} />
        <meta property="og:description" content={c.meta.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/ecommerce-solutions-saudi-arabia-mada-2026" />
        <meta property="og:image" content="https://symloop.com/logo.png" />
        <meta property="og:locale" content={locale === 'ar' ? 'ar_SA' : locale === 'fr' ? 'fr_FR' : 'en_US'} />
        <meta property="og:site_name" content="Symloop" />
        <meta property="article:published_time" content={c.hero.date || "2026-01-15"} />
        <meta property="article:modified_time" content="2026-02-07" />
        <meta property="article:section" content={c.hero.badge} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={c.meta.title} />
        <meta name="twitter:description" content={c.meta.description} />

        {/* Hreflang */}
        <link rel="alternate" hrefLang="en" href="https://symloop.com/en/blog/ecommerce-solutions-saudi-arabia-mada-2026" />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/blog/ecommerce-solutions-saudi-arabia-mada-2026" />
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/blog/ecommerce-solutions-saudi-arabia-mada-2026" />
        <link rel="alternate" hrefLang="x-default" href="https://symloop.com/blog/ecommerce-solutions-saudi-arabia-mada-2026" />

        {/* Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://symloop.com" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" }, { "@type": "ListItem", "position": 3, "name": c.hero.title + " " + c.hero.titleHighlight }] }) }} />
      </Head>

      <div className={`min-h-screen bg-slate-950 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>

        {/* ============================================= */}
        {/* SECTION 1: HERO                               */}
        {/* ============================================= */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-slate-950 to-teal-900/20" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              {/* Back to blog */}
              <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" />
                {locale === 'ar' ? 'العودة للمدونة' : locale === 'fr' ? 'Retour au Blog' : 'Back to Blog'}
              </Link>

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

              {/* Meta info */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400 mb-8">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {c.hero.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {c.hero.readTime}</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Saudi Arabia</span>
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> Symloop Team</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-500 hover:to-teal-500 transition-all shadow-lg shadow-emerald-500/25">
                  {c.hero.cta1}
                </Link>
                <a href="#pricing" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20">
                  {c.hero.cta2}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================= */}
        {/* INTRO SECTION                                 */}
        {/* ============================================= */}
        <section className="py-16 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{c.intro.title}</h2>
              {c.intro.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-slate-300 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            <p className="text-base text-gray-400 mt-6 leading-relaxed">
              {locale === 'ar'
                ? <>استكشف أيضاً <Link href="/services" className="text-cyan-400 hover:underline">خدماتنا الكاملة</Link> بما في ذلك <Link href="/blog/erp-business-software-saudi-arabia-2026" className="text-cyan-400 hover:underline">برنامج ERP للأعمال في السعودية</Link> و<Link href="/blog/ecommerce-solutions-kuwait-knet-2026" className="text-cyan-400 hover:underline">حلول التجارة الإلكترونية في الكويت</Link>.</>
                : <>Explore our full range of <Link href="/services" className="text-cyan-400 hover:underline">IT services</Link>, including <Link href="/blog/erp-business-software-saudi-arabia-2026" className="text-cyan-400 hover:underline">ERP business software in Saudi Arabia</Link> and <Link href="/blog/ecommerce-solutions-kuwait-knet-2026" className="text-cyan-400 hover:underline">e-commerce solutions in Kuwait</Link>.</>
              }
            </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* SECTION 2: STATS                              */}
        {/* ============================================= */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{c.stats.title}</h2>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {c.stats.items.map((stat, index) => {
                const Icon = iconComponents[stat.icon];
                return (
                  <div key={index} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all">
                    {Icon && <Icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />}
                    <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ============================================= */}
        {/* SECTION 3: SERVICES                           */}
        {/* ============================================= */}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.services.title}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">{c.services.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {c.services.items.map((service, index) => {
                const Icon = iconComponents[service.icon];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-5">
                      {Icon && <Icon className="w-7 h-7 text-emerald-400" />}
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-400 mb-5">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
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
        {/* SECTION 4: PAYMENTS                           */}
        {/* ============================================= */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.payments.title}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">{c.payments.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {c.payments.items.map((payment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <CreditCard className="w-6 h-6 text-emerald-400" />
                    <h3 className="text-xl font-semibold text-white">{payment.name}</h3>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-medium mb-3">
                    {payment.type}
                  </span>
                  <p className="text-slate-400 text-sm">{payment.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* SECTION 5: CITIES                             */}
        {/* ============================================= */}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.cities.title}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">{c.cities.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {c.cities.items.map((city, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 transition-all"
                >
                  <MapPin className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-1">{city.name}</h3>
                  <p className="text-slate-400 text-xs">{city.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* SECTION 6: SECTORS                            */}
        {/* ============================================= */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.sectors.title}</h2>
              <p className="text-slate-400">{c.sectors.subtitle}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {c.sectors.items.map((sector, index) => {
                const Icon = iconComponents[sector.icon];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 px-5 py-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 transition-all"
                  >
                    {Icon && <Icon className="w-5 h-5 text-emerald-400 flex-shrink-0" />}
                    <span className="text-slate-300 text-sm font-medium">{sector.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* SECTION 7: WHY US                             */}
        {/* ============================================= */}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{c.whyUs.title}</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {c.whyUs.items.map((item, index) => {
                const Icon = iconComponents[item.icon];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                      {Icon && <Icon className="w-6 h-6 text-emerald-400" />}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* SECTION 8: PRICING                            */}
        {/* ============================================= */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.pricing.title}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">{c.pricing.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {c.pricing.items.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative p-8 rounded-2xl ${
                    pkg.popular
                      ? 'bg-gradient-to-br from-emerald-900/50 to-teal-900/50 border-2 border-emerald-500/50'
                      : 'bg-slate-800/50 border border-slate-700/50'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-sm font-medium rounded-full">
                      {locale === 'ar' ? 'الأكثر شعبية' : locale === 'fr' ? 'Plus Populaire' : 'Most Popular'}
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{pkg.description}</p>

                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">{pkg.price}</span>
                    {pkg.currency && <span className="text-slate-400 ml-2">{pkg.currency}</span>}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full block text-center py-3 rounded-xl font-semibold transition-all ${
                      pkg.popular
                        ? 'bg-emerald-500 text-white hover:bg-emerald-400'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {locale === 'ar' ? 'اختر هذه الباقة' : locale === 'fr' ? 'Choisir Ce Forfait' : 'Choose This Package'}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* SECTION 9: FAQ                                */}
        {/* ============================================= */}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{c.faq.title}</h2>

            <div className="max-w-3xl mx-auto space-y-4">
              {c.faq.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{item.question}</h3>
                  <p className="text-slate-400">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* SECTION 10: CTA                               */}
        {/* ============================================= */}
        <section className="py-20 bg-gradient-to-br from-emerald-900/30 to-teal-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <MessageCircle className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.cta.title}</h2>
              <p className="text-slate-300 mb-8">{c.cta.subtitle}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="https://wa.me/213549575512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 rounded-xl text-white font-semibold hover:bg-green-500 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  {c.cta.whatsapp}
                </a>
                <a
                  href={`tel:${c.cta.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  {c.cta.phone}
                </a>
                <a
                  href={`mailto:${c.cta.email}`}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  {c.cta.email}
                </a>
              </div>

              <Link
                href="/contact"
                className="inline-flex px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-500 hover:to-teal-500 transition-all shadow-lg shadow-emerald-500/25"
              >
                {c.cta.button}
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* SECTION 11: RELATED ARTICLES                  */}
        {/* ============================================= */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{c.related.title}</h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {c.related.items.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/blog/${article.slug}`}
                    className="block p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 transition-all group"
                  >
                    <Rocket className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {article.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-emerald-400 text-sm mt-3">
                      {locale === 'ar' ? 'اقرأ المزيد' : locale === 'fr' ? 'Lire la suite' : 'Read more'} &rarr;
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-gray-400 mt-8 mb-4">
              {locale === 'ar' ? 'المزيد من خدماتنا في المنطقة' : 'More From Our Regional Coverage'}
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              <Link href="/blog/ecommerce-solutions-uae-dubai-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'حلول التجارة الإلكترونية في الإمارات' : 'E-Commerce Solutions in the UAE'}
                </h3>
                <span className="text-cyan-500 text-sm flex items-center gap-1">
                  {locale === 'ar' ? 'اقرأ المزيد' : 'Read more'}
                  <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? '' : 'rotate-180'}`} />
                </span>
              </Link>
              <Link href="/blog/erp-business-software-kuwait-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'برنامج ERP في الكويت' : 'ERP Software in Kuwait'}
                </h3>
                <span className="text-cyan-500 text-sm flex items-center gap-1">
                  {locale === 'ar' ? 'اقرأ المزيد' : 'Read more'}
                  <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? '' : 'rotate-180'}`} />
                </span>
              </Link>
              <Link href="/blog/web-development-company-saudi-arabia-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'تطوير المواقع في السعودية' : 'Web Development in Saudi Arabia'}
                </h3>
                <span className="text-cyan-500 text-sm flex items-center gap-1">
                  {locale === 'ar' ? 'اقرأ المزيد' : 'Read more'}
                  <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? '' : 'rotate-180'}`} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* SEO Hidden Keywords */}
        <div className="sr-only" aria-hidden="true">
          {c.seoKeywords.join(' | ')}
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
