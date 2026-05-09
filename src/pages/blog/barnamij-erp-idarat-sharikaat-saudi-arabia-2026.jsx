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

export default function BarnamijErpIdaratSharikaatSaudiArabia2026() {
  const router = useRouter();
  const locale = router.locale || 'ar';
  const isRTL = locale === 'ar';

  const content = {
    ar: {
      metaTitle: "برنامج ERP وإدارة الشركات السعودية 2026 | حلول مخصصة | Symloop",
      metaDesc: "برنامج ERP متكامل لإدارة الشركات في المملكة العربية السعودية. أنظمة تخطيط موارد المؤسسات، CRM، محاسبة، فوترة إلكترونية ZATCA، موارد بشرية. حلول مخصصة لرؤية 2030. عرض أسعار مجاني.",
      title: "برنامج ERP وإدارة الشركات في المملكة العربية السعودية",
      subtitle: "حلول تخطيط موارد المؤسسات المتكاملة - متوافقة مع ZATCA ورؤية 2030",
      date: "7 فبراير 2026",
      readTime: "15 دقيقة قراءة",
      author: "فريق Symloop",
      category: "ERP والحلول المؤسسية",
      backToBlog: "العودة للمدونة",

      intro: "يشهد سوق البرمجيات المؤسسية في المملكة العربية السعودية نمواً غير مسبوق مدفوعاً برؤية 2030 ومتطلبات التحول الرقمي. مع إلزام هيئة الزكاة والضريبة والجمارك (ZATCA) بالفوترة الإلكترونية لجميع المنشآت، أصبح اعتماد أنظمة ERP متكاملة ضرورة حتمية وليس خياراً. تقدم Symloop حلول ERP مخصصة تجمع بين أفضل الممارسات العالمية والامتثال الكامل للمتطلبات السعودية، مما يمكّن الشركات من تحقيق الكفاءة التشغيلية والنمو المستدام.",

      marketStats: {
        title: "سوق البرمجيات المؤسسية في السعودية - أرقام 2026",
        stats: [
          { value: "36M+", label: "عدد السكان", icon: Users },
          { value: "$12B+", label: "الاقتصاد الرقمي", icon: TrendingUp },
          { value: "95%+", label: "الامتثال لـ ZATCA مطلوب", icon: Shield },
          { value: "70%+", label: "الشركات تتحول رقمياً", icon: Rocket }
        ]
      },

      services: {
        title: "خدمات ERP وإدارة الأعمال",
        list: [
          {
            icon: Database,
            title: "أنظمة ERP مخصصة",
            description: "تصميم وتطوير أنظمة تخطيط موارد المؤسسات بالكامل حسب متطلبات شركتك، مع تكامل جميع الأقسام في منصة واحدة.",
            features: ["إدارة المخزون والمشتريات", "تخطيط الإنتاج والتصنيع", "إدارة سلسلة التوريد", "تقارير ولوحات معلومات ذكية", "تكامل مع أنظمة الدفع السعودية"]
          },
          {
            icon: Users,
            title: "حلول CRM",
            description: "أنظمة إدارة علاقات العملاء المتقدمة لتتبع المبيعات وتحسين خدمة العملاء وزيادة الإيرادات.",
            features: ["إدارة العملاء المحتملين", "أتمتة المبيعات والتسويق", "خدمة العملاء والدعم الفني", "تحليلات وتقارير الأداء", "تكامل واتساب API"]
          },
          {
            icon: Briefcase,
            title: "الموارد البشرية والرواتب",
            description: "نظام شامل لإدارة الموارد البشرية متوافق مع نظام العمل السعودي ومنصة مُدد.",
            features: ["إدارة شؤون الموظفين", "مسير الرواتب وحماية الأجور WPS", "إدارة الإجازات والحضور", "التوظيف والتدريب", "تكامل مع منصة مُدد والتأمينات"]
          },
          {
            icon: FileText,
            title: "المحاسبة والفوترة الإلكترونية",
            description: "نظام محاسبة متكامل مع فوترة إلكترونية معتمدة من ZATCA بالمرحلتين الأولى والثانية.",
            features: ["فاتورة إلكترونية ZATCA المرحلة 2", "محاسبة عامة وتحليلية", "إدارة ضريبة القيمة المضافة VAT", "تقارير مالية وميزانيات", "ربط مع البنوك السعودية"]
          }
        ]
      },

      zatca: {
        title: "الامتثال لمتطلبات الفوترة الإلكترونية ZATCA",
        subtitle: "جميع حلولنا متوافقة بالكامل مع لوائح هيئة الزكاة والضريبة والجمارك",
        requirements: [
          { title: "المرحلة الأولى - الإصدار", description: "إصدار وحفظ الفواتير الإلكترونية بصيغة محددة مع جميع الحقول المطلوبة.", icon: FileText },
          { title: "المرحلة الثانية - الربط والتكامل", description: "ربط أنظمة الفوترة مع منصة فاتورة التابعة لـ ZATCA وإرسال الفواتير في الوقت الفعلي.", icon: Lock },
          { title: "رمز الاستجابة QR", description: "تضمين رمز QR في كل فاتورة يحتوي على بيانات البائع والمبلغ وضريبة القيمة المضافة.", icon: Smartphone },
          { title: "التوقيع الرقمي", description: "توقيع إلكتروني لكل فاتورة لضمان سلامتها ومصداقيتها وعدم التلاعب بها.", icon: Shield },
          { title: "UUID والتسلسل", description: "معرف فريد عالمي لكل فاتورة مع رقم تسلسلي متتابع غير قابل للتكرار.", icon: Database },
          { title: "حفظ السجلات", description: "حفظ جميع الفواتير والسجلات الإلكترونية لمدة لا تقل عن 6 سنوات وفق النظام.", icon: Layers }
        ]
      },

      cities: {
        title: "نخدم الشركات في جميع أنحاء المملكة",
        description: "فريقنا يقدم خدمات تطوير ودعم ERP في جميع المدن الرئيسية في المملكة العربية السعودية:",
        list: [
          { name: "الرياض", clients: "200+", description: "العاصمة ومركز الأعمال - الشركات الكبرى والوزارات", highlight: true },
          { name: "جدة", clients: "160+", description: "بوابة التجارة والاستيراد - الشركات التجارية والملاحية", highlight: true },
          { name: "الدمام", clients: "110+", description: "المنطقة الشرقية - شركات النفط والغاز والصناعة", highlight: false },
          { name: "مكة المكرمة", clients: "75+", description: "قطاع الضيافة والحج والعمرة والخدمات", highlight: false },
          { name: "المدينة المنورة", clients: "60+", description: "السياحة الدينية والتجارة والخدمات", highlight: false }
        ]
      },

      sectors: {
        title: "قطاعات نخدمها بحلول ERP متخصصة",
        list: [
          { icon: Settings, name: "التصنيع والإنتاج", description: "تخطيط إنتاج، إدارة مصانع، مراقبة جودة، صيانة المعدات" },
          { icon: ShoppingCart, name: "التجزئة والتوزيع", description: "نقاط بيع POS، إدارة مخزون متعدد الفروع، تجارة إلكترونية" },
          { icon: Building2, name: "المقاولات والبناء", description: "إدارة مشاريع، عقود، مقاولين من الباطن، تكاليف المشروع" },
          { icon: Brain, name: "الرعاية الصحية", description: "إدارة مستشفيات، سجلات طبية إلكترونية، فوترة تأمين" },
          { icon: Award, name: "التعليم والتدريب", description: "إدارة مدارس وجامعات، نظام تعلم LMS، تسجيل ورسوم" },
          { icon: Star, name: "الضيافة والسياحة", description: "إدارة فنادق، حجوزات، مطاعم، خدمات الحج والعمرة" },
          { icon: Rocket, name: "اللوجستيك والنقل", description: "إدارة أسطول، تتبع شحنات، مستودعات، سلسلة توريد" },
          { icon: Zap, name: "النفط والغاز والطاقة", description: "إدارة أصول، صيانة وقائية، سلامة، امتثال بيئي" },
          { icon: Globe, name: "القطاع الحكومي", description: "أنظمة حوكمة، إدارة موارد، شفافية، خدمات إلكترونية" }
        ]
      },

      whySymloop: {
        title: "لماذا تختار Symloop لنظام ERP شركتك؟",
        reasons: [
          { icon: Shield, title: "امتثال كامل لـ ZATCA", description: "جميع أنظمتنا معتمدة ومتوافقة مع متطلبات الفوترة الإلكترونية السعودية بالمرحلتين." },
          { icon: Code, title: "تطوير مخصص 100%", description: "لا نستخدم قوالب جاهزة. كل نظام مصمم خصيصاً لاحتياجات شركتك وقطاعك." },
          { icon: Globe, title: "دعم ثلاثي اللغات", description: "واجهات وتقارير بالعربية والإنجليزية والفرنسية مع دعم RTL كامل." },
          { icon: Lock, title: "أمان وحماية متقدمة", description: "تشفير البيانات، نسخ احتياطي تلقائي، استضافة على خوادم سعودية معتمدة." },
          { icon: Smartphone, title: "تطبيقات جوال مدمجة", description: "وصول كامل لنظام ERP من الهاتف الذكي مع إشعارات فورية وتقارير محمولة." },
          { icon: Brain, title: "ذكاء اصطناعي مدمج", description: "تحليلات تنبؤية، أتمتة ذكية للعمليات، وتوصيات مبنية على البيانات." },
          { icon: Zap, title: "تكامل سلس مع الأنظمة", description: "ربط مع مُدد، GOSI، قوى، مقيم، وجميع المنصات الحكومية السعودية." },
          { icon: MessageCircle, title: "دعم فني مستمر 24/7", description: "فريق دعم متخصص على مدار الساعة عبر الهاتف والواتساب والبريد الإلكتروني." }
        ]
      },

      pricing: {
        title: "باقات وأسعار أنظمة ERP",
        note: "الأسعار بالريال السعودي - عرض أسعار مخصص حسب احتياجاتك",
        packages: [
          {
            name: "ERP أساسي",
            price: "ابتداءً من 25,000 ر.س",
            description: "للشركات الصغيرة والناشئة",
            popular: false,
            features: ["محاسبة وفوترة إلكترونية ZATCA", "إدارة المخزون الأساسية", "حتى 10 مستخدمين", "تقارير أساسية", "دعم فني 6 أشهر", "تدريب الفريق"]
          },
          {
            name: "حزمة أعمال",
            price: "ابتداءً من 60,000 ر.س",
            description: "للشركات المتوسطة النامية",
            popular: true,
            features: ["جميع مميزات الباقة الأساسية", "CRM وإدارة المبيعات", "موارد بشرية ورواتب", "حتى 50 مستخدم", "تطبيق جوال", "تقارير متقدمة ولوحات معلومات", "دعم فني سنة كاملة"]
          },
          {
            name: "مؤسسي",
            price: "ابتداءً من 150,000 ر.س",
            description: "للشركات الكبيرة والمجموعات",
            popular: false,
            features: ["جميع مميزات حزمة الأعمال", "تصنيع وإنتاج", "إدارة مشاريع متقدمة", "مستخدمين غير محدودين", "ذكاء اصطناعي وتحليلات", "تكامل حكومي كامل", "دعم 24/7 مخصص", "SLA مضمون"]
          },
          {
            name: "مخصص",
            price: "حسب العرض",
            description: "حلول مفصّلة حسب الطلب",
            popular: false,
            features: ["تحليل احتياجات شامل", "هندسة معمارية مخصصة", "تكاملات خاصة", "استشارات أعمال", "إدارة مشروع مخصصة", "اتفاقية مستوى خدمة VIP"]
          }
        ]
      },

      faq: {
        title: "الأسئلة الشائعة حول أنظمة ERP في السعودية",
        questions: [
          {
            q: "كم يستغرق تطبيق نظام ERP في شركتي؟",
            a: "تعتمد المدة على حجم الشركة وتعقيد العمليات. عادةً يستغرق نظام ERP أساسي من 4 إلى 8 أسابيع، بينما قد يستغرق النظام المؤسسي المتكامل من 3 إلى 6 أشهر. نعمل بمنهجية أجايل مع تسليمات مرحلية لضمان الحصول على قيمة سريعة."
          },
          {
            q: "هل أنظمتكم متوافقة مع الفوترة الإلكترونية ZATCA المرحلة الثانية؟",
            a: "نعم، جميع أنظمة المحاسبة والفوترة لدينا متوافقة بالكامل مع متطلبات ZATCA بما في ذلك المرحلة الثانية (الربط والتكامل). نضمن إصدار فواتير إلكترونية صحيحة مع رمز QR والتوقيع الرقمي والمعرف الفريد UUID، مع ربط مباشر بمنصة فاتورة."
          },
          {
            q: "هل يمكن ربط نظام ERP مع المنصات الحكومية السعودية؟",
            a: "بالتأكيد. نوفر تكاملاً سلساً مع جميع المنصات الحكومية الرئيسية: منصة مُدد لحماية الأجور، التأمينات الاجتماعية GOSI، منصة قوى لإدارة العمالة، نظام مقيم، بالإضافة إلى ربط مع البنوك السعودية وأنظمة الدفع مدى وSADAD."
          },
          {
            q: "ما هي تكلفة نظام ERP لشركة في السعودية؟",
            a: "تبدأ أسعارنا من 25,000 ريال سعودي للنظام الأساسي وتصل إلى 150,000 ريال للحلول المؤسسية المتكاملة. التكلفة النهائية تعتمد على عدد المستخدمين والوحدات المطلوبة والتخصيصات الخاصة. نقدم عروض أسعار مجانية ومفصّلة بعد تحليل احتياجاتك."
          },
          {
            q: "هل توفرون دعماً فنياً بعد التسليم؟",
            a: "نعم، نقدم دعماً فنياً شاملاً على مدار الساعة 24/7 عبر الهاتف والواتساب والبريد الإلكتروني. تشمل عقود الدعم: تحديثات النظام، إصلاح الأخطاء، تدريب المستخدمين الجدد، والتحديث المستمر لمتطلبات ZATCA واللوائح السعودية. نقدم ضمان استجابة خلال ساعة واحدة للحالات الحرجة."
          }
        ]
      },

      cta: {
        title: "ابدأ رحلة التحول الرقمي لشركتك في السعودية",
        description: "احصل على استشارة مجانية وعرض أسعار مخصص لنظام ERP يناسب شركتك. فريقنا جاهز لمساعدتك في تحقيق الامتثال لـ ZATCA وتحسين كفاءة أعمالك.",
        whatsapp: "+213549575512",
        email: "contact@symloop.com",
        button: "تواصل معنا عبر واتساب",
        emailButton: "راسلنا عبر البريد الإلكتروني"
      },

      related: {
        title: "مقالات ذات صلة",
        articles: [
          {
            slug: "tatwir-tatbiqat-jawwal-saudi-arabia-2026",
            title: "تطوير تطبيقات الجوال في السعودية 2026"
          },
          {
            slug: "tijara-iliktruniya-saudi-arabia-mada-2026",
            title: "التجارة الإلكترونية في السعودية - مدى 2026"
          },
          {
            slug: "tahawwul-raqami-saudi-arabia-ruiya-2030",
            title: "التحول الرقمي في السعودية - رؤية 2030"
          }
        ]
      },

      seoKeywords: [
        "برنامج ERP السعودية",
        "نظام إدارة الشركات السعودية",
        "برنامج محاسبة سعودي",
        "فوترة إلكترونية ZATCA",
        "نظام ERP الرياض",
        "برنامج إدارة موارد بشرية السعودية",
        "نظام CRM سعودي",
        "برنامج نقاط بيع السعودية",
        "تخطيط موارد المؤسسات",
        "برنامج إدارة المخزون السعودية",
        "نظام محاسبة سحابي السعودية",
        "برنامج رواتب سعودي مُدد",
        "حلول ERP رؤية 2030",
        "نظام فوترة إلكترونية معتمد"
      ]
    },
    en: {
      metaTitle: "ERP Software & Business Management Saudi Arabia 2026 | Custom Solutions | Symloop",
      metaDesc: "Comprehensive ERP software for business management in Saudi Arabia. Enterprise resource planning, CRM, accounting, ZATCA e-invoicing, HR. Custom solutions for Vision 2030. Free quote.",
      title: "ERP Software & Business Management in Saudi Arabia",
      subtitle: "Integrated Enterprise Resource Planning Solutions - ZATCA & Vision 2030 Compliant",
      date: "February 7, 2026",
      readTime: "15 min read",
      author: "Symloop Team",
      category: "ERP & Enterprise Solutions",
      backToBlog: "Back to Blog",

      intro: "The enterprise software market in Saudi Arabia is experiencing unprecedented growth driven by Vision 2030 and digital transformation mandates. With ZATCA (Zakat, Tax and Customs Authority) mandating e-invoicing for all businesses, adopting integrated ERP systems has become an absolute necessity rather than an option. Symloop delivers custom ERP solutions combining global best practices with full compliance to Saudi requirements, empowering businesses to achieve operational efficiency and sustainable growth.",

      marketStats: {
        title: "Saudi Enterprise Software Market - 2026 Figures",
        stats: [
          { value: "36M+", label: "Population", icon: Users },
          { value: "$12B+", label: "Digital Economy", icon: TrendingUp },
          { value: "95%+", label: "ZATCA Compliance Required", icon: Shield },
          { value: "70%+", label: "Companies Going Digital", icon: Rocket }
        ]
      },

      services: {
        title: "ERP & Business Management Services",
        list: [
          {
            icon: Database,
            title: "Custom ERP Systems",
            description: "Full design and development of enterprise resource planning systems tailored to your company requirements, integrating all departments into one platform.",
            features: ["Inventory & procurement management", "Production & manufacturing planning", "Supply chain management", "Smart dashboards & reports", "Saudi payment system integration"]
          },
          {
            icon: Users,
            title: "CRM Solutions",
            description: "Advanced customer relationship management systems to track sales, improve customer service, and increase revenue.",
            features: ["Lead management", "Sales & marketing automation", "Customer service & support", "Performance analytics & reports", "WhatsApp API integration"]
          },
          {
            icon: Briefcase,
            title: "HR & Payroll",
            description: "Comprehensive HR management system compliant with Saudi labor law and Mudad platform.",
            features: ["Employee management", "Payroll & WPS wage protection", "Leave & attendance management", "Recruitment & training", "Mudad & GOSI integration"]
          },
          {
            icon: FileText,
            title: "Accounting & E-Invoicing",
            description: "Integrated accounting system with ZATCA-certified e-invoicing for Phase 1 and Phase 2 compliance.",
            features: ["ZATCA Phase 2 e-invoicing", "General & analytical accounting", "VAT management", "Financial reports & budgets", "Saudi bank integration"]
          }
        ]
      },

      zatca: {
        title: "ZATCA E-Invoicing Compliance",
        subtitle: "All our solutions are fully compliant with Zakat, Tax and Customs Authority regulations",
        requirements: [
          { title: "Phase 1 - Generation", description: "Generate and store electronic invoices in a specified format with all required fields.", icon: FileText },
          { title: "Phase 2 - Integration", description: "Connect invoicing systems with ZATCA's Fatoora platform and send invoices in real-time.", icon: Lock },
          { title: "QR Code", description: "Embed QR code in every invoice containing seller data, amount, and VAT information.", icon: Smartphone },
          { title: "Digital Signature", description: "Electronic signature for each invoice ensuring integrity, authenticity, and tamper-proof records.", icon: Shield },
          { title: "UUID & Sequencing", description: "Globally unique identifier for each invoice with sequential non-repeatable numbering.", icon: Database },
          { title: "Record Keeping", description: "Preserve all invoices and electronic records for a minimum of 6 years as per regulations.", icon: Layers }
        ]
      },

      cities: {
        title: "Serving Businesses Across the Kingdom",
        description: "Our team delivers ERP development and support services in all major cities across Saudi Arabia:",
        list: [
          { name: "Riyadh", clients: "200+", description: "Capital & business hub - Major corporations & ministries", highlight: true },
          { name: "Jeddah", clients: "160+", description: "Trade & import gateway - Commercial & shipping companies", highlight: true },
          { name: "Dammam", clients: "110+", description: "Eastern Province - Oil, gas & industrial companies", highlight: false },
          { name: "Mecca", clients: "75+", description: "Hospitality, Hajj, Umrah & services sector", highlight: false },
          { name: "Medina", clients: "60+", description: "Religious tourism, trade & services", highlight: false }
        ]
      },

      sectors: {
        title: "Industries We Serve with Specialized ERP Solutions",
        list: [
          { icon: Settings, name: "Manufacturing & Production", description: "Production planning, factory management, quality control, equipment maintenance" },
          { icon: ShoppingCart, name: "Retail & Distribution", description: "POS systems, multi-branch inventory, e-commerce integration" },
          { icon: Building2, name: "Construction & Contracting", description: "Project management, contracts, subcontractors, project costing" },
          { icon: Brain, name: "Healthcare", description: "Hospital management, electronic medical records, insurance billing" },
          { icon: Award, name: "Education & Training", description: "School & university management, LMS, enrollment & fees" },
          { icon: Star, name: "Hospitality & Tourism", description: "Hotel management, reservations, restaurants, Hajj & Umrah services" },
          { icon: Rocket, name: "Logistics & Transport", description: "Fleet management, shipment tracking, warehousing, supply chain" },
          { icon: Zap, name: "Oil, Gas & Energy", description: "Asset management, preventive maintenance, safety, environmental compliance" },
          { icon: Globe, name: "Government Sector", description: "Governance systems, resource management, transparency, e-services" }
        ]
      },

      whySymloop: {
        title: "Why Choose Symloop for Your ERP System?",
        reasons: [
          { icon: Shield, title: "Full ZATCA Compliance", description: "All our systems are certified and compliant with Saudi e-invoicing requirements for both phases." },
          { icon: Code, title: "100% Custom Development", description: "We don't use templates. Every system is designed specifically for your company needs and industry." },
          { icon: Globe, title: "Trilingual Support", description: "Interfaces and reports in Arabic, English, and French with full RTL support." },
          { icon: Lock, title: "Advanced Security", description: "Data encryption, automatic backups, hosting on certified Saudi servers." },
          { icon: Smartphone, title: "Integrated Mobile Apps", description: "Full ERP access from smartphones with real-time notifications and mobile reports." },
          { icon: Brain, title: "Built-in AI", description: "Predictive analytics, intelligent process automation, and data-driven recommendations." },
          { icon: Zap, title: "Seamless System Integration", description: "Connect with Mudad, GOSI, Qiwa, Muqeem, and all Saudi government platforms." },
          { icon: MessageCircle, title: "24/7 Technical Support", description: "Dedicated support team around the clock via phone, WhatsApp, and email." }
        ]
      },

      pricing: {
        title: "ERP System Packages & Pricing",
        note: "Prices in Saudi Riyals - Custom quotes based on your needs",
        packages: [
          {
            name: "Basic ERP",
            price: "Starting from SAR 25,000",
            description: "For small businesses and startups",
            popular: false,
            features: ["ZATCA e-invoicing & accounting", "Basic inventory management", "Up to 10 users", "Basic reports", "6-month support", "Team training"]
          },
          {
            name: "Business Package",
            price: "Starting from SAR 60,000",
            description: "For growing medium businesses",
            popular: true,
            features: ["All Basic features", "CRM & sales management", "HR & payroll", "Up to 50 users", "Mobile app", "Advanced reports & dashboards", "Full year support"]
          },
          {
            name: "Enterprise",
            price: "Starting from SAR 150,000",
            description: "For large companies & groups",
            popular: false,
            features: ["All Business features", "Manufacturing & production", "Advanced project management", "Unlimited users", "AI & analytics", "Full government integration", "24/7 dedicated support", "Guaranteed SLA"]
          },
          {
            name: "Custom",
            price: "On Quote",
            description: "Tailored solutions on demand",
            popular: false,
            features: ["Comprehensive needs analysis", "Custom architecture", "Special integrations", "Business consulting", "Dedicated project management", "VIP SLA agreement"]
          }
        ]
      },

      faq: {
        title: "Frequently Asked Questions About ERP in Saudi Arabia",
        questions: [
          {
            q: "How long does it take to implement an ERP system?",
            a: "Duration depends on company size and process complexity. A basic ERP typically takes 4-8 weeks, while an integrated enterprise system may take 3-6 months. We use Agile methodology with phased deliveries to ensure quick value."
          },
          {
            q: "Are your systems compliant with ZATCA Phase 2 e-invoicing?",
            a: "Yes, all our accounting and invoicing systems fully comply with ZATCA requirements including Phase 2 (Integration). We ensure correct e-invoice generation with QR codes, digital signatures, UUID, and direct connection to the Fatoora platform."
          },
          {
            q: "Can the ERP integrate with Saudi government platforms?",
            a: "Absolutely. We provide seamless integration with all major government platforms: Mudad for wage protection, GOSI social insurance, Qiwa for labor management, Muqeem, plus Saudi bank connections and mada/SADAD payment systems."
          },
          {
            q: "What is the cost of an ERP system for a Saudi company?",
            a: "Our prices start from SAR 25,000 for the basic system up to SAR 150,000 for integrated enterprise solutions. Final cost depends on user count, required modules, and custom features. We provide free detailed quotes after analyzing your needs."
          },
          {
            q: "Do you provide technical support after delivery?",
            a: "Yes, we offer comprehensive 24/7 support via phone, WhatsApp, and email. Support contracts include system updates, bug fixes, new user training, and continuous updates for ZATCA compliance and Saudi regulations. Critical cases get a 1-hour response guarantee."
          }
        ]
      },

      cta: {
        title: "Start Your Digital Transformation Journey in Saudi Arabia",
        description: "Get a free consultation and custom ERP quote for your business. Our team is ready to help you achieve ZATCA compliance and optimize your operations.",
        whatsapp: "+213549575512",
        email: "contact@symloop.com",
        button: "Contact Us on WhatsApp",
        emailButton: "Email Us"
      },

      related: {
        title: "Related Articles",
        articles: [
          {
            slug: "tatwir-tatbiqat-jawwal-saudi-arabia-2026",
            title: "Mobile App Development in Saudi Arabia 2026"
          },
          {
            slug: "tijara-iliktruniya-saudi-arabia-mada-2026",
            title: "E-Commerce in Saudi Arabia - mada 2026"
          },
          {
            slug: "tahawwul-raqami-saudi-arabia-ruiya-2030",
            title: "Digital Transformation in Saudi Arabia - Vision 2030"
          }
        ]
      },

      seoKeywords: [
        "ERP software Saudi Arabia",
        "business management system KSA",
        "Saudi accounting software",
        "ZATCA e-invoicing",
        "ERP system Riyadh",
        "HR management software Saudi",
        "CRM Saudi Arabia",
        "POS system Saudi Arabia",
        "enterprise resource planning KSA",
        "inventory management Saudi Arabia",
        "cloud accounting Saudi",
        "payroll software Mudad",
        "ERP solutions Vision 2030",
        "certified e-invoicing system"
      ]
    },
    fr: {
      metaTitle: "Logiciel ERP & Gestion d'Entreprise Arabie Saoudite 2026 | Solutions Sur Mesure | Symloop",
      metaDesc: "Logiciel ERP complet pour la gestion d'entreprise en Arabie Saoudite. Planification des ressources, CRM, comptabilite, facturation electronique ZATCA, RH. Solutions adaptees Vision 2030. Devis gratuit.",
      title: "Logiciel ERP et Gestion d'Entreprise en Arabie Saoudite",
      subtitle: "Solutions ERP Integrees - Conformes ZATCA et Vision 2030",
      date: "7 Fevrier 2026",
      readTime: "15 min de lecture",
      author: "Equipe Symloop",
      category: "ERP & Solutions Entreprise",
      backToBlog: "Retour au Blog",

      intro: "Le marche des logiciels d'entreprise en Arabie Saoudite connait une croissance sans precedent, porte par la Vision 2030 et les exigences de transformation numerique. Avec l'obligation de facturation electronique imposee par la ZATCA (Autorite de la Zakat, de la Taxe et des Douanes), l'adoption de systemes ERP integres est devenue une necessite absolue. Symloop propose des solutions ERP sur mesure combinant les meilleures pratiques mondiales et la conformite totale aux exigences saoudiennes.",

      marketStats: {
        title: "Marche des Logiciels d'Entreprise en Arabie Saoudite - Chiffres 2026",
        stats: [
          { value: "36M+", label: "Population", icon: Users },
          { value: "$12B+", label: "Economie Numerique", icon: TrendingUp },
          { value: "95%+", label: "Conformite ZATCA Requise", icon: Shield },
          { value: "70%+", label: "Entreprises en Transition", icon: Rocket }
        ]
      },

      services: {
        title: "Services ERP & Gestion d'Entreprise",
        list: [
          {
            icon: Database,
            title: "Systemes ERP Sur Mesure",
            description: "Conception et developpement complet de systemes de planification des ressources adaptes a votre entreprise, integrant tous les departements.",
            features: ["Gestion des stocks et achats", "Planification de production", "Gestion de la chaine logistique", "Tableaux de bord intelligents", "Integration systemes de paiement saoudiens"]
          },
          {
            icon: Users,
            title: "Solutions CRM",
            description: "Systemes avances de gestion de la relation client pour suivre les ventes et ameliorer le service.",
            features: ["Gestion des prospects", "Automatisation ventes et marketing", "Service client et support", "Analytique et rapports", "Integration WhatsApp API"]
          },
          {
            icon: Briefcase,
            title: "RH & Paie",
            description: "Systeme RH complet conforme au droit du travail saoudien et a la plateforme Mudad.",
            features: ["Gestion du personnel", "Paie et protection des salaires WPS", "Conges et presences", "Recrutement et formation", "Integration Mudad et GOSI"]
          },
          {
            icon: FileText,
            title: "Comptabilite & Facturation Electronique",
            description: "Systeme comptable integre avec facturation electronique certifiee ZATCA Phase 1 et Phase 2.",
            features: ["E-facturation ZATCA Phase 2", "Comptabilite generale et analytique", "Gestion TVA", "Rapports financiers et budgets", "Integration banques saoudiennes"]
          }
        ]
      },

      zatca: {
        title: "Conformite Facturation Electronique ZATCA",
        subtitle: "Toutes nos solutions sont entierement conformes aux reglementations de la ZATCA",
        requirements: [
          { title: "Phase 1 - Generation", description: "Generation et stockage des factures electroniques dans un format specifie avec tous les champs requis.", icon: FileText },
          { title: "Phase 2 - Integration", description: "Connexion des systemes de facturation avec la plateforme Fatoora de la ZATCA en temps reel.", icon: Lock },
          { title: "Code QR", description: "Inclusion d'un code QR dans chaque facture contenant les donnees du vendeur, le montant et la TVA.", icon: Smartphone },
          { title: "Signature Numerique", description: "Signature electronique pour chaque facture garantissant l'integrite et l'authenticite.", icon: Shield },
          { title: "UUID & Sequencage", description: "Identifiant unique universel pour chaque facture avec numerotation sequentielle non repetable.", icon: Database },
          { title: "Conservation des Registres", description: "Conservation de toutes les factures et registres electroniques pendant minimum 6 ans.", icon: Layers }
        ]
      },

      cities: {
        title: "Nous Servons les Entreprises dans Tout le Royaume",
        description: "Notre equipe offre des services de developpement et support ERP dans toutes les grandes villes d'Arabie Saoudite :",
        list: [
          { name: "Riyad", clients: "200+", description: "Capitale et centre d'affaires - Grandes entreprises et ministeres", highlight: true },
          { name: "Djeddah", clients: "160+", description: "Porte du commerce et de l'import - Societes commerciales et maritimes", highlight: true },
          { name: "Dammam", clients: "110+", description: "Province orientale - Petrole, gaz et industrie", highlight: false },
          { name: "La Mecque", clients: "75+", description: "Hotellerie, Hajj, Omra et services", highlight: false },
          { name: "Medine", clients: "60+", description: "Tourisme religieux, commerce et services", highlight: false }
        ]
      },

      sectors: {
        title: "Secteurs Servis avec des Solutions ERP Specialisees",
        list: [
          { icon: Settings, name: "Fabrication & Production", description: "Planification de production, gestion d'usine, controle qualite, maintenance" },
          { icon: ShoppingCart, name: "Commerce & Distribution", description: "Systemes POS, inventaire multi-sites, e-commerce" },
          { icon: Building2, name: "Construction & BTP", description: "Gestion de projets, contrats, sous-traitants, couts de projet" },
          { icon: Brain, name: "Sante", description: "Gestion hospitaliere, dossiers medicaux, facturation assurance" },
          { icon: Award, name: "Education & Formation", description: "Gestion ecoles et universites, LMS, inscriptions et frais" },
          { icon: Star, name: "Hotellerie & Tourisme", description: "Gestion hoteliere, reservations, restaurants, services Hajj et Omra" },
          { icon: Rocket, name: "Logistique & Transport", description: "Gestion de flotte, suivi expeditions, entreposage, chaine logistique" },
          { icon: Zap, name: "Petrole, Gaz & Energie", description: "Gestion d'actifs, maintenance preventive, securite, conformite environnementale" },
          { icon: Globe, name: "Secteur Public", description: "Systemes de gouvernance, gestion des ressources, transparence, e-services" }
        ]
      },

      whySymloop: {
        title: "Pourquoi Choisir Symloop pour Votre Systeme ERP ?",
        reasons: [
          { icon: Shield, title: "Conformite ZATCA Totale", description: "Tous nos systemes sont certifies et conformes aux exigences de facturation electronique saoudiennes." },
          { icon: Code, title: "Developpement 100% Sur Mesure", description: "Pas de templates. Chaque systeme est concu specifiquement pour vos besoins et votre secteur." },
          { icon: Globe, title: "Support Trilingue", description: "Interfaces et rapports en arabe, anglais et francais avec support RTL complet." },
          { icon: Lock, title: "Securite Avancee", description: "Chiffrement des donnees, sauvegardes automatiques, hebergement sur serveurs saoudiens certifies." },
          { icon: Smartphone, title: "Applications Mobiles Integrees", description: "Acces complet a l'ERP depuis le smartphone avec notifications et rapports mobiles." },
          { icon: Brain, title: "IA Integree", description: "Analyses predictives, automatisation intelligente et recommandations basees sur les donnees." },
          { icon: Zap, title: "Integration Systemes Transparente", description: "Connexion avec Mudad, GOSI, Qiwa, Muqeem et toutes les plateformes gouvernementales." },
          { icon: MessageCircle, title: "Support Technique 24/7", description: "Equipe de support dediee 24h/24 par telephone, WhatsApp et email." }
        ]
      },

      pricing: {
        title: "Forfaits et Tarifs Systemes ERP",
        note: "Prix en Riyals Saoudiens - Devis personnalise selon vos besoins",
        packages: [
          {
            name: "ERP Basique",
            price: "A partir de 25 000 SAR",
            description: "Pour les petites entreprises et startups",
            popular: false,
            features: ["Comptabilite et e-facturation ZATCA", "Gestion de stock basique", "Jusqu'a 10 utilisateurs", "Rapports basiques", "Support 6 mois", "Formation equipe"]
          },
          {
            name: "Pack Business",
            price: "A partir de 60 000 SAR",
            description: "Pour les entreprises moyennes en croissance",
            popular: true,
            features: ["Toutes les fonctions basiques", "CRM et gestion des ventes", "RH et paie", "Jusqu'a 50 utilisateurs", "Application mobile", "Rapports et tableaux avances", "Support annuel complet"]
          },
          {
            name: "Entreprise",
            price: "A partir de 150 000 SAR",
            description: "Pour les grandes entreprises et groupes",
            popular: false,
            features: ["Toutes les fonctions Business", "Fabrication et production", "Gestion de projets avancee", "Utilisateurs illimites", "IA et analytique", "Integration gouvernementale", "Support 24/7 dedie", "SLA garanti"]
          },
          {
            name: "Sur Mesure",
            price: "Sur Devis",
            description: "Solutions personnalisees a la demande",
            popular: false,
            features: ["Analyse complete des besoins", "Architecture personnalisee", "Integrations speciales", "Conseil en entreprise", "Gestion de projet dediee", "SLA VIP"]
          }
        ]
      },

      faq: {
        title: "Questions Frequentes sur les ERP en Arabie Saoudite",
        questions: [
          {
            q: "Combien de temps prend l'implementation d'un ERP ?",
            a: "La duree depend de la taille de l'entreprise et de la complexite. Un ERP basique prend 4-8 semaines, tandis qu'un systeme entreprise integre peut prendre 3-6 mois. Nous utilisons la methodologie Agile avec des livraisons par phases."
          },
          {
            q: "Vos systemes sont-ils conformes a la Phase 2 de la ZATCA ?",
            a: "Oui, tous nos systemes de comptabilite et facturation sont entierement conformes aux exigences ZATCA y compris la Phase 2 (Integration). Nous garantissons la generation correcte avec code QR, signature numerique, UUID et connexion directe a Fatoora."
          },
          {
            q: "L'ERP peut-il s'integrer aux plateformes gouvernementales saoudiennes ?",
            a: "Absolument. Nous offrons une integration transparente avec Mudad, GOSI, Qiwa, Muqeem, ainsi que les banques saoudiennes et les systemes de paiement mada/SADAD."
          },
          {
            q: "Quel est le cout d'un ERP en Arabie Saoudite ?",
            a: "Nos prix commencent a 25 000 SAR pour le systeme basique jusqu'a 150 000 SAR pour les solutions entreprise. Le cout final depend du nombre d'utilisateurs, des modules et des personnalisations. Devis gratuit et detaille apres analyse."
          },
          {
            q: "Proposez-vous un support technique apres livraison ?",
            a: "Oui, nous offrons un support 24/7 par telephone, WhatsApp et email. Les contrats incluent les mises a jour, corrections, formation et conformite continue ZATCA. Garantie de reponse en 1 heure pour les cas critiques."
          }
        ]
      },

      cta: {
        title: "Demarrez Votre Transformation Numerique en Arabie Saoudite",
        description: "Obtenez une consultation gratuite et un devis ERP personnalise pour votre entreprise. Notre equipe est prete a vous accompagner.",
        whatsapp: "+213549575512",
        email: "contact@symloop.com",
        button: "Contactez-nous sur WhatsApp",
        emailButton: "Envoyez-nous un Email"
      },

      related: {
        title: "Articles Connexes",
        articles: [
          {
            slug: "tatwir-tatbiqat-jawwal-saudi-arabia-2026",
            title: "Developpement d'Applications Mobiles en Arabie Saoudite 2026"
          },
          {
            slug: "tijara-iliktruniya-saudi-arabia-mada-2026",
            title: "E-Commerce en Arabie Saoudite - mada 2026"
          },
          {
            slug: "tahawwul-raqami-saudi-arabia-ruiya-2030",
            title: "Transformation Numerique en Arabie Saoudite - Vision 2030"
          }
        ]
      },

      seoKeywords: [
        "logiciel ERP Arabie Saoudite",
        "systeme gestion entreprise KSA",
        "logiciel comptabilite saoudien",
        "facturation electronique ZATCA",
        "systeme ERP Riyad",
        "logiciel RH Arabie Saoudite",
        "CRM Arabie Saoudite",
        "systeme POS Arabie Saoudite",
        "planification ressources entreprise",
        "gestion stock Arabie Saoudite"
      ]
    }
  };

  const t = content[locale] || content.ar;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
    "description": t.metaDesc,
    "author": { "@type": "Organization", "name": "Symloop" },
    "publisher": {
      "@type": "Organization",
      "name": "Symloop",
      "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" }
    },
    "datePublished": "2026-02-07",
    "dateModified": "2026-02-07",
    "mainEntityOfPage": "https://symloop.com/ar/blog/barnamij-erp-idarat-sharikaat-saudi-arabia-2026",
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
    "name": "Symloop - ERP & Business Solutions Saudi Arabia",
    "description": t.metaDesc,
    "url": "https://symloop.com",
    "telephone": "+213549575512",
    "email": "contact@symloop.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SA",
      "addressRegion": "Riyadh"
    },
    "areaServed": [
      { "@type": "Country", "name": "Saudi Arabia" }
    ],
    "priceRange": "SAR 25,000 - SAR 150,000+",
    "serviceType": ["ERP Software", "CRM Solutions", "E-Invoicing ZATCA", "HR & Payroll Systems", "Custom Business Software"]
  };

  return (
    <>
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDesc} />
        <meta name="keywords" content={t.seoKeywords?.join(', ')} />
        <link rel="canonical" href="https://symloop.com/ar/blog/barnamij-erp-idarat-sharikaat-saudi-arabia-2026" />

        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDesc} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/ar/blog/barnamij-erp-idarat-sharikaat-saudi-arabia-2026" />
        <meta property="og:locale" content={locale === 'ar' ? 'ar_SA' : locale === 'fr' ? 'fr_FR' : 'en_US'} />
        <meta property="og:site_name" content="Symloop" />
        <meta property="og:image" content="https://symloop.com/logo.png" />
        <meta property="article:published_time" content={t.date || "2026-01-15"} />
        <meta property="article:modified_time" content="2026-02-07" />
        <meta property="article:section" content={t.category} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.metaTitle} />
        <meta name="twitter:description" content={t.metaDesc} />

        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content="Saudi Arabia" />

        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/blog/barnamij-erp-idarat-sharikaat-saudi-arabia-2026" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/en/blog/barnamij-erp-idarat-sharikaat-saudi-arabia-2026" />
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/blog/barnamij-erp-idarat-sharikaat-saudi-arabia-2026" />

        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://symloop.com" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" }, { "@type": "ListItem", "position": 3, "name": t.title }] }) }} />
      </Head>

      <main className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>

        {/* Section 1: Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-black to-teal-500/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {t.backToBlog}
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium flex items-center gap-2">
                <Database className="w-4 h-4" />
                {t.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">{t.subtitle}</p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />{t.date}</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" />{t.readTime}</div>
              <div className="flex items-center gap-2"><User className="w-4 h-4" />{t.author}</div>
            </div>
          </div>
        </section>

        {/* Section 2: Intro */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-xl text-gray-300 leading-relaxed mb-16">{t.intro}</p>
            <p className="text-base text-gray-400 mt-6 leading-relaxed">
              {locale === 'ar'
                ? <>استكشف أيضاً <Link href="/services" className="text-cyan-400 hover:underline">خدماتنا الكاملة</Link> بما في ذلك <Link href="/blog/tijara-iliktruniya-saudi-arabia-mada-2026" className="text-cyan-400 hover:underline">التجارة الإلكترونية في السعودية</Link> و<Link href="/blog/barnamij-erp-idarat-sharikaat-kuwait-2026" className="text-cyan-400 hover:underline">برنامج ERP في الكويت</Link>.</>
                : <>Explore our full range of <Link href="/services" className="text-cyan-400 hover:underline">IT services</Link>, including <Link href="/blog/tijara-iliktruniya-saudi-arabia-mada-2026" className="text-cyan-400 hover:underline">e-commerce solutions in Saudi Arabia</Link> and <Link href="/blog/barnamij-erp-idarat-sharikaat-kuwait-2026" className="text-cyan-400 hover:underline">ERP software in Kuwait</Link>.</>
              }
            </p>

            {/* Section 3: Market Stats */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{t.marketStats.title}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {t.marketStats.stats.map((stat, i) => (
                  <div key={i} className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-xl p-6 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-2 bg-emerald-500/20 rounded-lg">
                        <stat.icon className="w-6 h-6 text-emerald-400" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Services */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{t.services.title}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {t.services.list.map((service, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
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

            {/* Section 5: ZATCA Compliance */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-2">{t.zatca.title}</h2>
              <p className="text-gray-400 mb-8">{t.zatca.subtitle}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {t.zatca.requirements.map((req, i) => (
                  <div key={i} className="bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-emerald-500/20 rounded-lg">
                        <req.icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <h3 className="font-bold text-sm">{req.title}</h3>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">{req.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 6: Cities */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4">{t.cities.title}</h2>
              <p className="text-gray-300 mb-8">{t.cities.description}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {t.cities.list.map((city, i) => (
                  <div key={i} className={`p-5 rounded-xl ${city.highlight ? 'bg-emerald-500/15 border-2 border-emerald-500/40' : 'bg-white/5 border border-white/10'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <MapPin className={`w-4 h-4 ${city.highlight ? 'text-emerald-400' : 'text-gray-500'}`} />
                        <h3 className={`font-bold ${city.highlight ? 'text-emerald-400' : ''}`}>{city.name}</h3>
                      </div>
                      <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-emerald-400 font-medium">{city.clients}</span>
                    </div>
                    <p className="text-gray-400 text-xs">{city.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 7: Sectors */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{t.sectors.title}</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {t.sectors.list.map((sector, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-500/30 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-emerald-500/20 rounded-lg">
                        <sector.icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <h3 className="font-bold text-sm">{sector.name}</h3>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">{sector.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 8: Why Symloop */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{t.whySymloop.title}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {t.whySymloop.reasons.map((reason, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-emerald-500/20 rounded-lg">
                        <reason.icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <h3 className="font-bold">{reason.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{reason.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 9: Pricing */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-2">{t.pricing.title}</h2>
              <p className="text-gray-400 mb-8">{t.pricing.note}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {t.pricing.packages.map((pkg, i) => (
                  <div key={i} className={`rounded-xl p-5 relative ${pkg.popular ? 'bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border-2 border-emerald-500/50' : 'bg-white/5 border border-white/10'}`}>
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                        {locale === 'ar' ? 'الأكثر طلباً' : locale === 'fr' ? 'Populaire' : 'Most Popular'}
                      </div>
                    )}
                    <h3 className="font-bold mb-1">{pkg.name}</h3>
                    <p className="text-xs text-gray-500 mb-3">{pkg.description}</p>
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

            {/* Section 10: FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{t.faq.title}</h2>
              <div className="space-y-4">
                {t.faq.questions.map((faq, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold mb-2 flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      {faq.q}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 11: CTA */}
            <div className="mb-16 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-emerald-500/20 border border-emerald-500/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">{t.cta.title}</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">{t.cta.description}</p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <a
                  href={`https://wa.me/${t.cta.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />{t.cta.button}
                </a>
                <a
                  href={`mailto:${t.cta.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors"
                >
                  <Mail className="w-5 h-5" />{t.cta.emailButton}
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />{t.cta.whatsapp}
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />{t.cta.email}
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{t.related.title}</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {t.related.articles.map((article, i) => (
                  <Link
                    key={i}
                    href={`/blog/${article.slug}`}
                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-colors group"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-5 h-5 text-emerald-400" />
                      <span className="text-xs text-gray-500">2026</span>
                    </div>
                    <h3 className="font-bold text-sm group-hover:text-emerald-400 transition-colors">{article.title}</h3>
                    <div className="mt-3 text-emerald-400 text-xs flex items-center gap-1">
                      <ArrowLeft className={`w-3 h-3 ${isRTL ? 'rotate-180' : ''}`} />
                      {locale === 'ar' ? 'اقرأ المقال' : locale === 'fr' ? 'Lire l\'article' : 'Read article'}
                    </div>
                  </Link>
                ))}
              </div>

            <h3 className="text-lg font-semibold text-gray-400 mt-8 mb-4">
              {locale === 'ar' ? 'المزيد من خدماتنا في المنطقة' : 'More From Our Regional Coverage'}
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              <Link href="/blog/barnamij-erp-idarat-sharikaat-uae-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'برنامج ERP في الإمارات' : 'ERP Software in the UAE'}
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
              <Link href="/blog/hulul-dhakaa-istinai-saudi-arabia-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'حلول الذكاء الاصطناعي في السعودية' : 'AI Solutions in Saudi Arabia'}
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
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
