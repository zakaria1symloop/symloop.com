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
  Target, Database, CreditCard, BarChart3,
  Layers, MessageCircle, Briefcase, Cloud,
  RefreshCw, Workflow, LineChart, Lightbulb
} from "lucide-react";

export default function TahawwulRaqamiSaudiArabiaRuiya2030() {
  const router = useRouter();
  const locale = router.locale || 'ar';
  const isRTL = locale === 'ar';

  const content = {
    ar: {
      metaTitle: "التحول الرقمي السعودية 2026 | رؤية 2030 | Symloop",
      metaDesc: "خدمات التحول الرقمي في المملكة العربية السعودية - رؤية 2030. استشارات استراتيجية رقمية، هجرة سحابية، أتمتة العمليات، تحليلات البيانات. استثمارات تقنية بأكثر من 100 مليار دولار. شريكك التقني الموثوق.",
      title: "التحول الرقمي في المملكة العربية السعودية - رؤية 2030",
      subtitle: "شريكك التقني الموثوق لقيادة التحول الرقمي في أكبر اقتصاد عربي",
      date: "7 فبراير 2026",
      readTime: "15 دقيقة",
      author: "Symloop للتحول الرقمي",
      category: "التحول الرقمي - السعودية",

      intro: "تقود المملكة العربية السعودية أكبر موجة تحول رقمي في المنطقة العربية ضمن رؤية 2030 الطموحة. مع استثمارات تقنية تتجاوز 100 مليار دولار، تتحول المملكة إلى مركز رقمي عالمي. من الحكومة الإلكترونية إلى المدن الذكية، ومن الذكاء الاصطناعي إلى الحوسبة السحابية - كل قطاع يشهد ثورة رقمية غير مسبوقة. Symloop تقدم خدمات التحول الرقمي الشاملة للمؤسسات السعودية الطامحة لقيادة المستقبل.",

      marketStats: {
        title: "السوق الرقمي السعودي في أرقام",
        stats: [
          { value: "$100B+", label: "استثمارات تقنية بحلول 2030", icon: TrendingUp },
          { value: "95%+", label: "هدف الخدمات الحكومية الرقمية", icon: Globe },
          { value: "70%+", label: "الشركات تتحول رقمياً", icon: RefreshCw },
          { value: "50%+", label: "هدف الناتج المحلي من الاقتصاد الرقمي", icon: BarChart3 }
        ]
      },

      services: {
        title: "خدماتنا في التحول الرقمي السعودي",
        list: [
          {
            icon: Lightbulb,
            title: "استشارات الاستراتيجية الرقمية",
            description: "نصمم خارطة طريق رقمية شاملة تتوافق مع رؤية 2030 وأهداف مؤسستك الاستراتيجية.",
            features: ["تقييم النضج الرقمي", "خارطة طريق التحول", "تحليل الفجوات التقنية", "استراتيجية الابتكار الرقمي"]
          },
          {
            icon: Cloud,
            title: "هجرة سحابية",
            description: "ننقل بنيتك التحتية إلى السحابة بأمان وكفاءة مع الامتثال لمتطلبات هيئة الحكومة الرقمية.",
            features: ["هجرة AWS / Azure / GCP", "بنية سحابية هجينة", "أمن البيانات السحابية", "تحسين التكاليف السحابية"]
          },
          {
            icon: Workflow,
            title: "أتمتة العمليات",
            description: "نؤتمت عملياتك التشغيلية باستخدام أحدث تقنيات RPA والذكاء الاصطناعي لتقليل التكاليف وزيادة الكفاءة.",
            features: ["أتمتة RPA ذكية", "تحسين سير العمل", "تكامل الأنظمة", "أتمتة بالذكاء الاصطناعي"]
          },
          {
            icon: Database,
            title: "البيانات والتحليلات",
            description: "نحول بياناتك إلى رؤى قابلة للتنفيذ باستخدام تحليلات متقدمة وذكاء أعمال مدعوم بالذكاء الاصطناعي.",
            features: ["مستودع بيانات مركزي", "لوحات تحكم تحليلية", "تحليلات تنبؤية", "ذكاء أعمال متقدم"]
          }
        ]
      },

      vision2030: {
        title: "ركائز رؤية 2030 الرقمية",
        pillars: [
          {
            icon: Users,
            title: "مجتمع حيوي",
            description: "تحول رقمي في التعليم والصحة والترفيه والثقافة. منصات رقمية للخدمات الاجتماعية، تطبيقات صحية ذكية، ومنظومة تعليم إلكتروني متكاملة.",
            highlights: ["منصة صحتي الرقمية", "نظام نور التعليمي", "تطبيقات الترفيه والسياحة", "الهوية الرقمية الوطنية"]
          },
          {
            icon: LineChart,
            title: "اقتصاد مزدهر",
            description: "تنويع الاقتصاد عبر التقنية والابتكار. فنتك، تجارة إلكترونية، اقتصاد رقمي، وشركات تقنية ناشئة تقود النمو غير النفطي.",
            highlights: ["منظومة الفنتك السعودية", "التجارة الإلكترونية المتقدمة", "الشركات التقنية الناشئة", "الاقتصاد الرقمي والبيانات"]
          },
          {
            icon: Target,
            title: "وطن طموح",
            description: "حكومة رقمية بالكامل، مدن ذكية، وبنية تحتية رقمية عالمية المستوى. من أبشر إلى نيوم، المملكة تبني مستقبلاً رقمياً.",
            highlights: ["منصة أبشر الحكومية", "مشروع نيوم الذكي", "البنية التحتية للجيل الخامس", "الحكومة الإلكترونية الشاملة"]
          }
        ]
      },

      cities: {
        title: "التحول الرقمي عبر المدن السعودية",
        description: "نخدم المؤسسات في كل أنحاء المملكة العربية السعودية:",
        list: [
          { name: "الرياض", description: "العاصمة ومركز التقنية والابتكار", highlight: true },
          { name: "جدة", description: "بوابة الأعمال والتجارة الإلكترونية" },
          { name: "الدمام", description: "محور الصناعة والطاقة الرقمية" },
          { name: "نيوم", description: "مدينة المستقبل الذكية" },
          { name: "مكة المكرمة", description: "الحلول الرقمية للحج والعمرة" }
        ]
      },

      sectors: {
        title: "القطاعات التي نخدمها في السعودية",
        list: [
          { icon: Building2, name: "القطاع الحكومي", description: "تحول رقمي حكومي متوافق مع معايير هيئة الحكومة الرقمية" },
          { icon: CreditCard, name: "القطاع المالي والبنكي", description: "حلول فنتك، مصرفية رقمية، ومدفوعات إلكترونية متقدمة" },
          { icon: Briefcase, name: "النفط والطاقة", description: "رقمنة عمليات الطاقة، IoT صناعي، وصيانة تنبؤية" },
          { icon: Users, name: "الرعاية الصحية", description: "سجلات طبية إلكترونية، طب عن بُعد، وتحليلات صحية ذكية" },
          { icon: Lightbulb, name: "التعليم والتدريب", description: "منصات تعلم إلكتروني، فصول افتراضية، وتقييم ذكي" },
          { icon: Globe, name: "التجارة والتجزئة", description: "تجارة إلكترونية متعددة القنوات، تجربة عميل رقمية" },
          { icon: Layers, name: "العقارات والبناء", description: "BIM رقمي، إدارة مشاريع ذكية، ومدن ذكية" },
          { icon: Rocket, name: "السياحة والترفيه", description: "منصات حجز ذكية، تجارب رقمية، وسياحة افتراضية" },
          { icon: Shield, name: "الأمن السيبراني", description: "حماية البنية التحتية الرقمية وامتثال للمعايير السعودية" }
        ]
      },

      whySymloop: {
        title: "لماذا Symloop لتحولك الرقمي في السعودية؟",
        reasons: [
          { icon: Award, title: "خبرة إقليمية عميقة", description: "نفهم السوق السعودي والتحديات الفريدة للتحول الرقمي في المنطقة" },
          { icon: Brain, title: "فريق تقني متميز", description: "مهندسون ومستشارون بخبرة في أحدث التقنيات العالمية" },
          { icon: Shield, title: "امتثال كامل للمعايير", description: "نلتزم بمعايير هيئة الحكومة الرقمية والأمن السيبراني السعودي" },
          { icon: Zap, title: "تنفيذ سريع وفعال", description: "منهجية أجايل مع تسليم تدريجي لضمان نتائج ملموسة" },
          { icon: Globe, title: "شراكات تقنية عالمية", description: "شركاء معتمدون لأكبر مزودي الخدمات السحابية والتقنية" },
          { icon: Users, title: "دعم عربي متكامل", description: "فريق دعم يتحدث العربية بطلاقة مع فهم ثقافي عميق" },
          { icon: LineChart, title: "نتائج قابلة للقياس", description: "مؤشرات أداء واضحة وتقارير تقدم دورية لكل مشروع" },
          { icon: Star, title: "عملاء راضون في المنطقة", description: "سجل حافل بمشاريع ناجحة في السعودية والخليج العربي" }
        ]
      },

      pricing: {
        title: "باقات التحول الرقمي",
        note: "الأسعار بالريال السعودي - عرض سعر مخصص حسب احتياجاتكم",
        packages: [
          {
            name: "تقييم رقمي",
            price: "ابتداءً من 10,000 ر.س",
            features: ["تقييم النضج الرقمي", "تحليل الفجوات التقنية", "تقرير توصيات مفصل", "خارطة طريق أولية", "جلسة استشارية مجانية"]
          },
          {
            name: "هجرة سحابية",
            price: "ابتداءً من 40,000 ر.س",
            features: ["تقييم البنية التحتية", "خطة هجرة مفصلة", "تنفيذ الهجرة السحابية", "اختبار وضمان الجودة", "تدريب الفريق التقني"]
          },
          {
            name: "تحول مؤسسي",
            price: "ابتداءً من 100,000 ر.س",
            features: ["استراتيجية تحول شاملة", "أتمتة العمليات الرئيسية", "تكامل الأنظمة", "لوحات تحكم تحليلية", "دعم مستمر 12 شهراً"]
          },
          {
            name: "استراتيجية رقمية شاملة",
            price: "حسب العرض",
            features: ["تحول رقمي متكامل", "هندسة بيانات متقدمة", "ذكاء اصطناعي ومؤتمتة", "استشارات تنفيذية", "شراكة استراتيجية طويلة"]
          }
        ]
      },

      faq: {
        title: "أسئلة شائعة حول التحول الرقمي في السعودية",
        questions: [
          {
            q: "ما هي المدة المتوقعة لمشروع تحول رقمي في السعودية؟",
            a: "تختلف المدة حسب نطاق المشروع. التقييم الرقمي يستغرق 2-4 أسابيع، الهجرة السحابية 2-4 أشهر، التحول المؤسسي الشامل 6-18 شهراً. نعمل بمنهجية أجايل لضمان تسليم تدريجي ونتائج ملموسة من الأسابيع الأولى."
          },
          {
            q: "هل تلتزمون بمعايير هيئة الحكومة الرقمية السعودية؟",
            a: "نعم بالتأكيد. نلتزم بجميع معايير هيئة الحكومة الرقمية (DGA) ومتطلبات الهيئة الوطنية للأمن السيبراني (NCA) وضوابط حماية البيانات الشخصية (PDPL). فريقنا مدرب على أحدث المعايير واللوائح السعودية."
          },
          {
            q: "هل يمكنكم العمل مع أنظمتنا الحالية أم نحتاج لاستبدالها بالكامل؟",
            a: "نؤمن بالتحول التدريجي وليس الاستبدال الكامل. نقيّم أنظمتكم الحالية ونبني عليها عبر التكامل والتحديث، مما يحمي استثماراتكم السابقة ويقلل المخاطر. نستبدل فقط الأنظمة التي لا يمكن تطويرها."
          },
          {
            q: "كيف تضمنون أمن بياناتنا أثناء عملية التحول الرقمي؟",
            a: "نطبق أعلى معايير الأمن السيبراني المعتمدة في السعودية. نستخدم التشفير المتقدم، إدارة الوصول المبنية على الأدوار، والمراقبة المستمرة. بياناتكم تبقى في مراكز بيانات معتمدة داخل المملكة حسب المتطلبات."
          },
          {
            q: "ما العائد المتوقع على الاستثمار في التحول الرقمي؟",
            a: "عملاؤنا يحققون عادة تخفيضاً في التكاليف التشغيلية بنسبة 30-50%، زيادة في الإنتاجية بنسبة 40-60%، وتحسن في تجربة العملاء يتجاوز 70%. نضع مؤشرات أداء واضحة قبل البدء ونقيس النتائج بشفافية."
          }
        ]
      },

      cta: {
        title: "ابدأ رحلة التحول الرقمي مع Symloop",
        description: "تواصل مع فريقنا المتخصص في التحول الرقمي للمؤسسات السعودية. استشارة أولية مجانية وخارطة طريق مخصصة.",
        button: "تواصل معنا عبر واتساب",
        whatsapp: "+213549575512",
        phone: "+213 549 575 512",
        email: "contact@symloop.com"
      },

      relatedTitle: "مقالات ذات صلة",
      related: [
        { slug: "tatwir-mawaqie-web-saudi-arabia-2026", title: "تطوير المواقع الإلكترونية في السعودية 2026" },
        { slug: "barnamij-erp-idarat-sharikaat-saudi-arabia-2026", title: "برنامج ERP لإدارة الشركات في السعودية 2026" },
        { slug: "hulul-dhakaa-istinai-saudi-arabia-2026", title: "حلول الذكاء الاصطناعي في السعودية 2026" }
      ],

      seoKeywords: [
        "التحول الرقمي السعودية",
        "رؤية 2030 التقنية",
        "خدمات التحول الرقمي الرياض",
        "هجرة سحابية السعودية",
        "أتمتة العمليات السعودية",
        "استشارات رقمية رؤية 2030",
        "شركة تحول رقمي جدة",
        "تحليلات البيانات السعودية",
        "حكومة رقمية السعودية",
        "ذكاء اصطناعي السعودية",
        "تقنية المعلومات السعودية",
        "حلول سحابية الرياض"
      ],

      backToBlog: "العودة للمدونة"
    },
    en: {
      metaTitle: "Digital Transformation Saudi Arabia 2026 | Vision 2030 | Symloop",
      metaDesc: "Digital transformation services in Saudi Arabia - Vision 2030. Digital strategy consulting, cloud migration, process automation, data analytics. Over $100 billion in tech investments. Your trusted technology partner.",
      title: "Digital Transformation in Saudi Arabia - Vision 2030",
      subtitle: "Your Trusted Technology Partner for Leading Digital Transformation in the Largest Arab Economy",
      date: "February 7, 2026",
      readTime: "15 min",
      author: "Symloop Digital Transformation",
      category: "Digital Transformation - KSA",

      intro: "Saudi Arabia is leading the largest wave of digital transformation in the Arab world under its ambitious Vision 2030. With tech investments exceeding $100 billion, the Kingdom is transforming into a global digital hub. From e-government to smart cities, from AI to cloud computing - every sector is witnessing an unprecedented digital revolution. Symloop delivers comprehensive digital transformation services for Saudi organizations aspiring to lead the future.",

      marketStats: {
        title: "Saudi Digital Market in Numbers",
        stats: [
          { value: "$100B+", label: "Tech investments by 2030", icon: TrendingUp },
          { value: "95%+", label: "Digital government services target", icon: Globe },
          { value: "70%+", label: "Companies undergoing digital transformation", icon: RefreshCw },
          { value: "50%+", label: "GDP target from digital economy", icon: BarChart3 }
        ]
      },

      services: {
        title: "Our Digital Transformation Services in KSA",
        list: [
          {
            icon: Lightbulb,
            title: "Digital Strategy Consulting",
            description: "We design a comprehensive digital roadmap aligned with Vision 2030 and your organization's strategic goals.",
            features: ["Digital maturity assessment", "Transformation roadmap", "Technical gap analysis", "Digital innovation strategy"]
          },
          {
            icon: Cloud,
            title: "Cloud Migration",
            description: "We migrate your infrastructure to the cloud securely and efficiently, complying with Digital Government Authority requirements.",
            features: ["AWS / Azure / GCP migration", "Hybrid cloud architecture", "Cloud data security", "Cloud cost optimization"]
          },
          {
            icon: Workflow,
            title: "Process Automation",
            description: "We automate your operational processes using the latest RPA and AI technologies to reduce costs and increase efficiency.",
            features: ["Smart RPA automation", "Workflow optimization", "Systems integration", "AI-powered automation"]
          },
          {
            icon: Database,
            title: "Data & Analytics",
            description: "We turn your data into actionable insights using advanced analytics and AI-powered business intelligence.",
            features: ["Centralized data warehouse", "Analytics dashboards", "Predictive analytics", "Advanced business intelligence"]
          }
        ]
      },

      vision2030: {
        title: "Vision 2030 Digital Pillars",
        pillars: [
          {
            icon: Users,
            title: "Vibrant Society",
            description: "Digital transformation in education, healthcare, entertainment, and culture. Digital platforms for social services, smart health apps, and integrated e-learning ecosystems.",
            highlights: ["Sehhaty digital platform", "Noor education system", "Entertainment & tourism apps", "National digital identity"]
          },
          {
            icon: LineChart,
            title: "Thriving Economy",
            description: "Economic diversification through technology and innovation. Fintech, e-commerce, digital economy, and tech startups driving non-oil growth.",
            highlights: ["Saudi fintech ecosystem", "Advanced e-commerce", "Tech startups", "Digital & data economy"]
          },
          {
            icon: Target,
            title: "Ambitious Nation",
            description: "Fully digital government, smart cities, and world-class digital infrastructure. From Absher to NEOM, the Kingdom is building a digital future.",
            highlights: ["Absher government platform", "NEOM smart project", "5G infrastructure", "Comprehensive e-government"]
          }
        ]
      },

      cities: {
        title: "Digital Transformation Across Saudi Cities",
        description: "We serve organizations across the Kingdom of Saudi Arabia:",
        list: [
          { name: "Riyadh", description: "Capital and technology innovation hub", highlight: true },
          { name: "Jeddah", description: "Business gateway and e-commerce hub" },
          { name: "Dammam", description: "Industry and digital energy hub" },
          { name: "NEOM", description: "The smart city of the future" },
          { name: "Makkah", description: "Digital solutions for Hajj and Umrah" }
        ]
      },

      sectors: {
        title: "Sectors We Serve in Saudi Arabia",
        list: [
          { icon: Building2, name: "Government Sector", description: "Government digital transformation compliant with DGA standards" },
          { icon: CreditCard, name: "Financial & Banking", description: "Fintech solutions, digital banking, and advanced electronic payments" },
          { icon: Briefcase, name: "Oil & Energy", description: "Energy operations digitization, industrial IoT, and predictive maintenance" },
          { icon: Users, name: "Healthcare", description: "Electronic medical records, telemedicine, and smart health analytics" },
          { icon: Lightbulb, name: "Education & Training", description: "E-learning platforms, virtual classrooms, and smart assessment" },
          { icon: Globe, name: "Commerce & Retail", description: "Omnichannel e-commerce, digital customer experience" },
          { icon: Layers, name: "Real Estate & Construction", description: "Digital BIM, smart project management, and smart cities" },
          { icon: Rocket, name: "Tourism & Entertainment", description: "Smart booking platforms, digital experiences, and virtual tourism" },
          { icon: Shield, name: "Cybersecurity", description: "Digital infrastructure protection and compliance with Saudi standards" }
        ]
      },

      whySymloop: {
        title: "Why Symloop for Your Digital Transformation in KSA?",
        reasons: [
          { icon: Award, title: "Deep Regional Expertise", description: "We understand the Saudi market and unique digital transformation challenges in the region" },
          { icon: Brain, title: "Outstanding Technical Team", description: "Engineers and consultants with expertise in the latest global technologies" },
          { icon: Shield, title: "Full Standards Compliance", description: "We comply with DGA and Saudi National Cybersecurity Authority standards" },
          { icon: Zap, title: "Fast and Efficient Execution", description: "Agile methodology with incremental delivery ensuring tangible results" },
          { icon: Globe, title: "Global Technology Partnerships", description: "Certified partners of the largest cloud and technology service providers" },
          { icon: Users, title: "Comprehensive Arabic Support", description: "Arabic-speaking support team with deep cultural understanding" },
          { icon: LineChart, title: "Measurable Results", description: "Clear KPIs and periodic progress reports for every project" },
          { icon: Star, title: "Satisfied Clients in the Region", description: "Proven track record of successful projects in Saudi Arabia and the Gulf" }
        ]
      },

      pricing: {
        title: "Digital Transformation Packages",
        note: "Prices in Saudi Riyals - Custom quote based on your needs",
        packages: [
          {
            name: "Digital Assessment",
            price: "Starting from SAR 10,000",
            features: ["Digital maturity assessment", "Technical gap analysis", "Detailed recommendations report", "Initial roadmap", "Free consultation session"]
          },
          {
            name: "Cloud Migration",
            price: "Starting from SAR 40,000",
            features: ["Infrastructure assessment", "Detailed migration plan", "Cloud migration execution", "Testing & QA", "Technical team training"]
          },
          {
            name: "Enterprise Transformation",
            price: "Starting from SAR 100,000",
            features: ["Comprehensive transformation strategy", "Key process automation", "Systems integration", "Analytics dashboards", "12-month continuous support"]
          },
          {
            name: "Comprehensive Digital Strategy",
            price: "Custom Quote",
            features: ["End-to-end digital transformation", "Advanced data engineering", "AI & automation", "Executive consulting", "Long-term strategic partnership"]
          }
        ]
      },

      faq: {
        title: "FAQs About Digital Transformation in Saudi Arabia",
        questions: [
          {
            q: "What is the expected timeline for a digital transformation project in KSA?",
            a: "Timelines vary by project scope. Digital assessment takes 2-4 weeks, cloud migration 2-4 months, comprehensive enterprise transformation 6-18 months. We use Agile methodology to ensure incremental delivery and tangible results from the first weeks."
          },
          {
            q: "Do you comply with Saudi Digital Government Authority standards?",
            a: "Absolutely. We comply with all DGA standards, NCA (National Cybersecurity Authority) requirements, and PDPL (Personal Data Protection Law) regulations. Our team is trained on the latest Saudi standards and regulations."
          },
          {
            q: "Can you work with our existing systems or do we need a complete replacement?",
            a: "We believe in gradual transformation, not complete replacement. We assess your current systems and build upon them through integration and modernization, protecting your previous investments and reducing risks."
          },
          {
            q: "How do you ensure data security during the digital transformation process?",
            a: "We apply the highest cybersecurity standards approved in Saudi Arabia. We use advanced encryption, role-based access management, and continuous monitoring. Your data remains in certified data centers within the Kingdom as required."
          },
          {
            q: "What is the expected ROI from digital transformation?",
            a: "Our clients typically achieve 30-50% reduction in operational costs, 40-60% increase in productivity, and over 70% improvement in customer experience. We set clear KPIs before starting and measure results transparently."
          }
        ]
      },

      cta: {
        title: "Start Your Digital Transformation Journey with Symloop",
        description: "Connect with our team specializing in digital transformation for Saudi organizations. Free initial consultation and customized roadmap.",
        button: "Contact Us via WhatsApp",
        whatsapp: "+213549575512",
        phone: "+213 549 575 512",
        email: "contact@symloop.com"
      },

      relatedTitle: "Related Articles",
      related: [
        { slug: "tatwir-mawaqie-web-saudi-arabia-2026", title: "Web Development in Saudi Arabia 2026" },
        { slug: "barnamij-erp-idarat-sharikaat-saudi-arabia-2026", title: "ERP Software for Company Management in Saudi Arabia 2026" },
        { slug: "hulul-dhakaa-istinai-saudi-arabia-2026", title: "AI Solutions in Saudi Arabia 2026" }
      ],

      seoKeywords: [
        "digital transformation Saudi Arabia",
        "Vision 2030 technology",
        "digital transformation services Riyadh",
        "cloud migration KSA",
        "process automation Saudi Arabia",
        "digital consulting Vision 2030",
        "digital transformation company Jeddah",
        "data analytics Saudi Arabia",
        "digital government Saudi Arabia",
        "artificial intelligence KSA",
        "IT solutions Saudi Arabia",
        "cloud solutions Riyadh"
      ],

      backToBlog: "Back to Blog"
    },
    fr: {
      metaTitle: "Transformation Digitale Arabie Saoudite 2026 | Vision 2030 | Symloop",
      metaDesc: "Services de transformation digitale en Arabie Saoudite - Vision 2030. Conseil en strategie numerique, migration cloud, automatisation des processus, analyse de donnees. Plus de 100 milliards de dollars d'investissements technologiques.",
      title: "Transformation Digitale en Arabie Saoudite - Vision 2030",
      subtitle: "Votre Partenaire Technologique de Confiance pour la Transformation Digitale dans la Plus Grande Economie Arabe",
      date: "7 Fevrier 2026",
      readTime: "15 min",
      author: "Symloop Transformation Digitale",
      category: "Transformation Digitale - KSA",

      intro: "L'Arabie Saoudite mene la plus grande vague de transformation digitale du monde arabe dans le cadre de son ambitieuse Vision 2030. Avec des investissements technologiques depassant 100 milliards de dollars, le Royaume se transforme en hub numerique mondial. Du e-gouvernement aux villes intelligentes, de l'IA au cloud computing - chaque secteur connait une revolution numerique sans precedent. Symloop propose des services complets de transformation digitale pour les organisations saoudiennes aspirant a mener l'avenir.",

      marketStats: {
        title: "Le Marche Numerique Saoudien en Chiffres",
        stats: [
          { value: "$100B+", label: "Investissements tech d'ici 2030", icon: TrendingUp },
          { value: "95%+", label: "Objectif services gouvernementaux numeriques", icon: Globe },
          { value: "70%+", label: "Entreprises en transformation digitale", icon: RefreshCw },
          { value: "50%+", label: "Objectif PIB de l'economie numerique", icon: BarChart3 }
        ]
      },

      services: {
        title: "Nos Services de Transformation Digitale en KSA",
        list: [
          {
            icon: Lightbulb,
            title: "Conseil en Strategie Digitale",
            description: "Nous concevons une feuille de route numerique complete alignee sur la Vision 2030 et les objectifs strategiques de votre organisation.",
            features: ["Evaluation de maturite digitale", "Feuille de route de transformation", "Analyse des ecarts techniques", "Strategie d'innovation digitale"]
          },
          {
            icon: Cloud,
            title: "Migration Cloud",
            description: "Nous migrons votre infrastructure vers le cloud en toute securite et efficacite, en conformite avec les exigences de la DGA.",
            features: ["Migration AWS / Azure / GCP", "Architecture cloud hybride", "Securite des donnees cloud", "Optimisation des couts cloud"]
          },
          {
            icon: Workflow,
            title: "Automatisation des Processus",
            description: "Nous automatisons vos processus operationnels avec les dernieres technologies RPA et IA pour reduire les couts et augmenter l'efficacite.",
            features: ["Automatisation RPA intelligente", "Optimisation des workflows", "Integration des systemes", "Automatisation par IA"]
          },
          {
            icon: Database,
            title: "Donnees et Analytique",
            description: "Nous transformons vos donnees en insights actionnables grace a des analyses avancees et une BI alimentee par l'IA.",
            features: ["Entrepot de donnees centralise", "Tableaux de bord analytiques", "Analytique predictive", "Business intelligence avancee"]
          }
        ]
      },

      vision2030: {
        title: "Les Piliers Numeriques de la Vision 2030",
        pillars: [
          {
            icon: Users,
            title: "Societe Dynamique",
            description: "Transformation digitale dans l'education, la sante, le divertissement et la culture. Plateformes numeriques pour les services sociaux, applications de sante intelligentes et ecosysteme e-learning integre.",
            highlights: ["Plateforme digitale Sehhaty", "Systeme educatif Noor", "Apps divertissement et tourisme", "Identite numerique nationale"]
          },
          {
            icon: LineChart,
            title: "Economie Florissante",
            description: "Diversification economique par la technologie et l'innovation. Fintech, e-commerce, economie numerique et startups tech moteurs de la croissance non-petroliere.",
            highlights: ["Ecosysteme fintech saoudien", "E-commerce avance", "Startups technologiques", "Economie numerique et donnees"]
          },
          {
            icon: Target,
            title: "Nation Ambitieuse",
            description: "Gouvernement entierement numerique, villes intelligentes et infrastructure numerique de classe mondiale. D'Absher a NEOM, le Royaume construit un avenir numerique.",
            highlights: ["Plateforme gouvernementale Absher", "Projet intelligent NEOM", "Infrastructure 5G", "E-gouvernement complet"]
          }
        ]
      },

      cities: {
        title: "Transformation Digitale a Travers les Villes Saoudiennes",
        description: "Nous servons les organisations dans tout le Royaume d'Arabie Saoudite :",
        list: [
          { name: "Riyad", description: "Capitale et hub d'innovation technologique", highlight: true },
          { name: "Djeddah", description: "Porte des affaires et du e-commerce" },
          { name: "Dammam", description: "Hub industrie et energie numerique" },
          { name: "NEOM", description: "La ville intelligente du futur" },
          { name: "La Mecque", description: "Solutions digitales pour le Hajj et la Omra" }
        ]
      },

      sectors: {
        title: "Secteurs que Nous Servons en Arabie Saoudite",
        list: [
          { icon: Building2, name: "Secteur Gouvernemental", description: "Transformation digitale gouvernementale conforme aux normes DGA" },
          { icon: CreditCard, name: "Finance et Banque", description: "Solutions fintech, banque digitale et paiements electroniques avances" },
          { icon: Briefcase, name: "Petrole et Energie", description: "Numerisation des operations energetiques, IoT industriel et maintenance predictive" },
          { icon: Users, name: "Sante", description: "Dossiers medicaux electroniques, telemedecine et analytique de sante intelligente" },
          { icon: Lightbulb, name: "Education et Formation", description: "Plateformes e-learning, classes virtuelles et evaluation intelligente" },
          { icon: Globe, name: "Commerce et Detail", description: "E-commerce omnicanal, experience client digitale" },
          { icon: Layers, name: "Immobilier et Construction", description: "BIM numerique, gestion de projets intelligente et villes intelligentes" },
          { icon: Rocket, name: "Tourisme et Divertissement", description: "Plateformes de reservation intelligentes, experiences digitales et tourisme virtuel" },
          { icon: Shield, name: "Cybersecurite", description: "Protection de l'infrastructure numerique et conformite aux normes saoudiennes" }
        ]
      },

      whySymloop: {
        title: "Pourquoi Symloop pour Votre Transformation Digitale en KSA ?",
        reasons: [
          { icon: Award, title: "Expertise Regionale Approfondie", description: "Nous comprenons le marche saoudien et les defis uniques de la transformation digitale dans la region" },
          { icon: Brain, title: "Equipe Technique Exceptionnelle", description: "Ingenieurs et consultants experts dans les dernieres technologies mondiales" },
          { icon: Shield, title: "Conformite Totale aux Normes", description: "Nous respectons les normes DGA et de l'Autorite nationale de cybersecurite saoudienne" },
          { icon: Zap, title: "Execution Rapide et Efficace", description: "Methodologie Agile avec livraison incrementale garantissant des resultats tangibles" },
          { icon: Globe, title: "Partenariats Technologiques Mondiaux", description: "Partenaires certifies des plus grands fournisseurs de services cloud et technologiques" },
          { icon: Users, title: "Support Arabe Complet", description: "Equipe de support arabophone avec une comprehension culturelle profonde" },
          { icon: LineChart, title: "Resultats Mesurables", description: "KPIs clairs et rapports de progression periodiques pour chaque projet" },
          { icon: Star, title: "Clients Satisfaits dans la Region", description: "Bilan eprouve de projets reussis en Arabie Saoudite et dans le Golfe" }
        ]
      },

      pricing: {
        title: "Forfaits de Transformation Digitale",
        note: "Prix en Riyals Saoudiens - Devis personnalise selon vos besoins",
        packages: [
          {
            name: "Evaluation Digitale",
            price: "A partir de 10 000 SAR",
            features: ["Evaluation de maturite digitale", "Analyse des ecarts techniques", "Rapport de recommandations detaille", "Feuille de route initiale", "Session de consultation gratuite"]
          },
          {
            name: "Migration Cloud",
            price: "A partir de 40 000 SAR",
            features: ["Evaluation de l'infrastructure", "Plan de migration detaille", "Execution de la migration cloud", "Tests et assurance qualite", "Formation equipe technique"]
          },
          {
            name: "Transformation Entreprise",
            price: "A partir de 100 000 SAR",
            features: ["Strategie de transformation complete", "Automatisation processus cles", "Integration des systemes", "Tableaux de bord analytiques", "Support continu 12 mois"]
          },
          {
            name: "Strategie Digitale Complete",
            price: "Sur Devis",
            features: ["Transformation digitale de bout en bout", "Ingenierie de donnees avancee", "IA et automatisation", "Conseil executif", "Partenariat strategique long terme"]
          }
        ]
      },

      faq: {
        title: "FAQ sur la Transformation Digitale en Arabie Saoudite",
        questions: [
          {
            q: "Quelle est la duree prevue d'un projet de transformation digitale en KSA ?",
            a: "Les delais varient selon la portee du projet. L'evaluation digitale prend 2-4 semaines, la migration cloud 2-4 mois, la transformation entreprise complete 6-18 mois. Nous utilisons la methodologie Agile pour garantir une livraison incrementale et des resultats tangibles des les premieres semaines."
          },
          {
            q: "Respectez-vous les normes de l'Autorite du Gouvernement Digital saoudienne ?",
            a: "Absolument. Nous respectons toutes les normes DGA, les exigences NCA (Autorite Nationale de Cybersecurite) et les reglementations PDPL (Loi sur la Protection des Donnees Personnelles). Notre equipe est formee aux dernieres normes et reglementations saoudiennes."
          },
          {
            q: "Pouvez-vous travailler avec nos systemes existants ou faut-il un remplacement complet ?",
            a: "Nous croyons en la transformation progressive, pas au remplacement total. Nous evaluons vos systemes actuels et construisons dessus par l'integration et la modernisation, protegeant vos investissements precedents et reduisant les risques."
          },
          {
            q: "Comment garantissez-vous la securite des donnees pendant la transformation ?",
            a: "Nous appliquons les plus hautes normes de cybersecurite approuvees en Arabie Saoudite. Nous utilisons le chiffrement avance, la gestion d'acces basee sur les roles et la surveillance continue. Vos donnees restent dans des centres de donnees certifies au sein du Royaume."
          },
          {
            q: "Quel est le ROI attendu de la transformation digitale ?",
            a: "Nos clients obtiennent generalement une reduction de 30-50% des couts operationnels, une augmentation de 40-60% de la productivite et une amelioration de plus de 70% de l'experience client. Nous definissons des KPIs clairs avant le demarrage et mesurons les resultats en toute transparence."
          }
        ]
      },

      cta: {
        title: "Commencez Votre Parcours de Transformation Digitale avec Symloop",
        description: "Contactez notre equipe specialisee en transformation digitale pour les organisations saoudiennes. Consultation initiale gratuite et feuille de route personnalisee.",
        button: "Contactez-nous via WhatsApp",
        whatsapp: "+213549575512",
        phone: "+213 549 575 512",
        email: "contact@symloop.com"
      },

      relatedTitle: "Articles Connexes",
      related: [
        { slug: "tatwir-mawaqie-web-saudi-arabia-2026", title: "Developpement Web en Arabie Saoudite 2026" },
        { slug: "barnamij-erp-idarat-sharikaat-saudi-arabia-2026", title: "Logiciel ERP pour la Gestion d'Entreprise en Arabie Saoudite 2026" },
        { slug: "hulul-dhakaa-istinai-saudi-arabia-2026", title: "Solutions d'Intelligence Artificielle en Arabie Saoudite 2026" }
      ],

      seoKeywords: [
        "transformation digitale Arabie Saoudite",
        "Vision 2030 technologie",
        "services transformation digitale Riyad",
        "migration cloud KSA",
        "automatisation processus Arabie Saoudite",
        "conseil numerique Vision 2030",
        "entreprise transformation digitale Djeddah",
        "analytique donnees Arabie Saoudite",
        "gouvernement numerique Arabie Saoudite",
        "intelligence artificielle KSA",
        "solutions IT Arabie Saoudite",
        "solutions cloud Riyad"
      ],

      backToBlog: "Retour au Blog"
    }
  };

  const t = content[locale] || content.ar;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
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
    "datePublished": "2026-02-07",
    "dateModified": "2026-02-07",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://symloop.com/ar/blog/tahawwul-raqami-saudi-arabia-ruiya-2030"
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
    "name": "Symloop - Digital Transformation Services",
    "@id": "https://symloop.com",
    "url": "https://symloop.com",
    "telephone": "+213549575512",
    "email": "contact@symloop.com",
    "description": t.metaDesc,
    "areaServed": {
      "@type": "Country",
      "name": "Saudi Arabia",
      "sameAs": "https://en.wikipedia.org/wiki/Saudi_Arabia"
    },
    "serviceArea": [
      { "@type": "City", "name": "Riyadh" },
      { "@type": "City", "name": "Jeddah" },
      { "@type": "City", "name": "Dammam" },
      { "@type": "City", "name": "NEOM" },
      { "@type": "City", "name": "Makkah" }
    ],
    "priceRange": "SAR 10,000 - SAR 100,000+",
    "knowsLanguage": ["ar", "en", "fr"]
  };

  return (
    <>
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDesc} />
        <meta name="keywords" content={t.seoKeywords?.join(', ')} />
        <link rel="canonical" href="https://symloop.com/ar/blog/tahawwul-raqami-saudi-arabia-ruiya-2030" />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDesc} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/ar/blog/tahawwul-raqami-saudi-arabia-ruiya-2030" />
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
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/blog/tahawwul-raqami-saudi-arabia-ruiya-2030" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/en/blog/tahawwul-raqami-saudi-arabia-ruiya-2030" />
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/blog/tahawwul-raqami-saudi-arabia-ruiya-2030" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
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
              <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              {t.backToBlog}
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {t.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{t.title}</h1>
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
            <p className="text-xl text-gray-300 leading-relaxed">{t.intro}</p>
            <p className="text-base text-gray-400 mt-6 leading-relaxed">
              {locale === 'ar'
                ? <>استكشف أيضاً <Link href="/services" className="text-cyan-400 hover:underline">خدماتنا الكاملة</Link> بما في ذلك <Link href="/blog/hulul-dhakaa-istinai-saudi-arabia-2026" className="text-cyan-400 hover:underline">حلول الذكاء الاصطناعي في السعودية</Link> و<Link href="/blog/tahawwul-raqami-kuwait-ruiya-2035" className="text-cyan-400 hover:underline">التحول الرقمي في الكويت</Link>.</>
                : <>Explore our full range of <Link href="/services" className="text-cyan-400 hover:underline">IT services</Link>, including <Link href="/blog/hulul-dhakaa-istinai-saudi-arabia-2026" className="text-cyan-400 hover:underline">AI solutions in Saudi Arabia</Link> and <Link href="/blog/tahawwul-raqami-kuwait-ruiya-2035" className="text-cyan-400 hover:underline">digital transformation in Kuwait</Link>.</>
              }
            </p>
          </div>
        </section>

        {/* Section 3: Market Stats */}
        <section className="py-16 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">{t.marketStats.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {t.marketStats.stats.map((stat, i) => (
                <div key={i} className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-2xl p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-emerald-500/20 rounded-xl">
                      <stat.icon className="w-7 h-7 text-emerald-400" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Services */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">{t.services.title}</h2>
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
        {/* Section 5: Vision 2030 Pillars */}
        <section className="py-16 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">{t.vision2030.title}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {t.vision2030.pillars.map((pillar, i) => (
                <div key={i} className="bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 border border-emerald-500/20 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-emerald-500/20 rounded-xl">
                      <pillar.icon className="w-7 h-7 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold">{pillar.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.highlights.map((h, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />{h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Cities */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4 text-center">{t.cities.title}</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">{t.cities.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {t.cities.list.map((city, i) => (
                <div key={i} className={`p-6 rounded-2xl text-center ${city.highlight ? 'bg-emerald-500/20 border-2 border-emerald-500/50' : 'bg-white/5 border border-white/10'}`}>
                  <div className="flex justify-center mb-3">
                    <MapPin className={`w-6 h-6 ${city.highlight ? 'text-emerald-400' : 'text-gray-500'}`} />
                  </div>
                  <div className={`font-bold text-lg mb-1 ${city.highlight ? 'text-emerald-400' : ''}`}>{city.name}</div>
                  <div className="text-xs text-gray-500">{city.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Sectors */}
        <section className="py-16 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">{t.sectors.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        </section>

        {/* Section 8: Why Symloop */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">{t.whySymloop.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.whySymloop.reasons.map((reason, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-emerald-500/30 transition-colors">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-emerald-500/20 rounded-xl">
                      <reason.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                  </div>
                  <h3 className="font-bold mb-2">{reason.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: Pricing */}
        <section className="py-16 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-2 text-center">{t.pricing.title}</h2>
            <p className="text-gray-400 mb-12 text-center">{t.pricing.note}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.pricing.packages.map((pkg, i) => (
                <div key={i} className={`border rounded-2xl p-6 ${i === 2 ? 'bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border-emerald-500/40' : 'bg-white/5 border-white/10'}`}>
                  {i === 2 && (
                    <div className="text-xs text-emerald-400 font-bold mb-2 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-emerald-400" />
                      {locale === 'ar' ? 'الأكثر طلباً' : locale === 'fr' ? 'Le plus demande' : 'Most Popular'}
                    </div>
                  )}
                  <h3 className="font-bold text-lg mb-2">{pkg.name}</h3>
                  <div className="text-emerald-400 font-bold text-lg mb-4">{pkg.price}</div>
                  <ul className="space-y-3">
                    {pkg.features.map((f, j) => (
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

        {/* Section 10: FAQ */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">{t.faq.title}</h2>
            <div className="space-y-4">
              {t.faq.questions.map((faq, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-500/20 transition-colors">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 11: CTA + Related */}
        <section className="py-16 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto px-6">
            {/* CTA */}
            <div className="bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-emerald-500/20 border border-emerald-500/30 rounded-2xl p-8 md:p-12 text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.cta.title}</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{t.cta.description}</p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <a
                  href={`https://wa.me/${t.cta.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-colors text-lg"
                >
                  <Phone className="w-5 h-5" />
                  {t.cta.button}
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <a href={`tel:${t.cta.phone}`} className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                  <Phone className="w-4 h-4" />{t.cta.phone}
                </a>
                <a href={`mailto:${t.cta.email}`} className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                  <Mail className="w-4 h-4" />{t.cta.email}
                </a>
              </div>
            </div>

            {/* Related Articles */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-center">{t.relatedTitle}</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {t.related.map((article, i) => (
                  <Link
                    key={i}
                    href={`/blog/${article.slug}`}
                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-colors group"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <ArrowLeft className={`w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                      <span className="text-xs text-emerald-400">{locale === 'ar' ? 'اقرأ المزيد' : locale === 'fr' ? 'Lire la suite' : 'Read more'}</span>
                    </div>
                    <h3 className="font-bold text-sm text-gray-200 group-hover:text-white transition-colors">{article.title}</h3>
                  </Link>
                ))}
              </div>

            <h3 className="text-lg font-semibold text-gray-400 mt-8 mb-4">
              {locale === 'ar' ? 'المزيد من خدماتنا في المنطقة' : 'More From Our Regional Coverage'}
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              <Link href="/blog/tahawwul-raqami-uae-hukuma-dhakiya-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'التحول الرقمي في الإمارات' : 'Digital Transformation in the UAE'}
                </h3>
                <span className="text-cyan-500 text-sm flex items-center gap-1">
                  {locale === 'ar' ? 'اقرأ المزيد' : 'Read more'}
                  <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? '' : 'rotate-180'}`} />
                </span>
              </Link>
              <Link href="/blog/hulul-dhakaa-istinai-kuwait-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'حلول الذكاء الاصطناعي في الكويت' : 'AI Solutions in Kuwait'}
                </h3>
                <span className="text-cyan-500 text-sm flex items-center gap-1">
                  {locale === 'ar' ? 'اقرأ المزيد' : 'Read more'}
                  <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? '' : 'rotate-180'}`} />
                </span>
              </Link>
              <Link href="/blog/tatwir-tatbiqat-jawwal-saudi-arabia-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'تطوير التطبيقات في السعودية' : 'Mobile App Development in Saudi Arabia'}
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
