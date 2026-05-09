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

export default function ErpBusinessSoftwareSaudiArabia2026() {
  const router = useRouter();
  const locale = router.locale || 'en';
  const isRTL = locale === 'ar';

  const content = {
    en: {
      metaTitle: "ERP & Business Software Saudi Arabia 2026 | Custom Solutions | Symloop",
      metaDescription: "Custom ERP and business software solutions in Saudi Arabia. ZATCA e-invoicing compliant, Vision 2030 ready. CRM, HR, accounting, inventory management. Riyadh, Jeddah, Dammam.",
      title: "ERP & Business Software Solutions in Saudi Arabia",
      subtitle: "ZATCA-Compliant Enterprise Software for Vision 2030 Digital Transformation",
      category: "Enterprise Software",
      readTime: "15 min",
      author: "Symloop Team",
      date: "2026-01-15",
      backLink: "Back to Blog",
      intro: "Saudi Arabia's enterprise software market is experiencing unprecedented growth, driven by Vision 2030's aggressive digitization mandate and ZATCA's Phase 2 e-invoicing requirements. With over 70% of Saudi businesses now actively pursuing digital transformation, the demand for robust ERP systems, CRM platforms, and integrated business software has never been higher. Whether you are a manufacturing giant in Jubail, a retail chain in Riyadh, or a growing SME in Jeddah, choosing the right enterprise software partner is critical to your compliance, efficiency, and competitive advantage in the Kingdom's rapidly evolving digital economy.",
      statsTitle: "Saudi Arabia Digital Economy 2026",
      stats: [
        { value: "36M+", label: "Population" },
        { value: "$12B+", label: "Digital Economy" },
        { value: "95%+", label: "ZATCA Compliance Needed" },
        { value: "70%+", label: "Businesses Digitalizing" }
      ],
      services: {
        title: "Our ERP & Business Software Solutions",
        subtitle: "End-to-end enterprise software tailored for the Saudi market",
        list: [
          {
            icon: Database,
            title: "Custom ERP Systems",
            description: "Comprehensive enterprise resource planning built for Saudi businesses. Unified platform for all your operations.",
            features: ["Inventory & warehouse management", "Procurement & supply chain", "Manufacturing & production planning", "Multi-branch & multi-company support"]
          },
          {
            icon: Users,
            title: "CRM Solutions",
            description: "Customer relationship management that drives sales growth and builds lasting relationships in the GCC market.",
            features: ["Sales pipeline management", "Customer lifecycle tracking", "Marketing automation", "Arabic & English support"]
          },
          {
            icon: Briefcase,
            title: "HR & Payroll Systems",
            description: "Complete human resources management compliant with Saudi labor law and social insurance requirements.",
            features: ["Employee lifecycle management", "GOSI compliance built-in", "WPS (Wage Protection System) ready", "Saudization tracking & reporting"]
          },
          {
            icon: FileText,
            title: "Accounting & E-Invoicing",
            description: "ZATCA Phase 2 compliant accounting software with full VAT support and real-time financial reporting.",
            features: ["ZATCA Phase 2 e-invoicing", "15% VAT automated calculation", "Multi-currency financial reporting", "Real-time dashboards & analytics"]
          }
        ]
      },
      zatca: {
        title: "ZATCA E-Invoicing Compliance",
        description: "The Zakat, Tax and Customs Authority (ZATCA) mandates that all businesses in Saudi Arabia comply with Phase 2 (Integration Phase) of the e-invoicing regulation. Our software solutions are built from the ground up to ensure full ZATCA compliance, eliminating the risk of penalties and ensuring seamless integration with the Fatoora platform.",
        features: [
          "Full Phase 2 Integration Phase compliance",
          "Real-time invoice reporting to ZATCA Fatoora portal",
          "QR code generation on all invoices",
          "Cryptographic stamping & digital signatures",
          "XML format (UBL 2.1) support",
          "Credit & debit note management",
          "Automated VAT calculation & filing",
          "Bilingual Arabic-English invoice templates"
        ]
      },
      cities: {
        title: "Serving Businesses Across Saudi Arabia",
        list: [
          { name: "Riyadh", desc: "Capital & business hub" },
          { name: "Jeddah", desc: "Commercial gateway" },
          { name: "Dammam", desc: "Eastern Province center" },
          { name: "Mecca", desc: "Holy city & tourism" },
          { name: "Medina", desc: "Heritage & growth" }
        ]
      },
      sectors: {
        title: "Industry-Specific ERP Solutions",
        subtitle: "Tailored enterprise software for every sector in Saudi Arabia",
        list: [
          { name: "Manufacturing", icon: Settings, desc: "Production planning, BOM, quality control" },
          { name: "Retail & Wholesale", icon: ShoppingCart, desc: "POS, inventory, multi-store management" },
          { name: "Construction", icon: Building2, desc: "Project costing, subcontractor management" },
          { name: "Healthcare", icon: Shield, desc: "Patient records, billing, pharmacy management" },
          { name: "Education", icon: Award, desc: "Student management, fees, e-learning" },
          { name: "Hospitality", icon: Star, desc: "Reservations, F&B, housekeeping" },
          { name: "Logistics", icon: Rocket, desc: "Fleet management, warehousing, tracking" },
          { name: "Oil & Gas", icon: Layers, desc: "Asset management, HSE compliance, procurement" },
          { name: "Government", icon: Globe, desc: "E-services, document management, compliance" }
        ]
      },
      whyUs: {
        title: "Why Choose Symloop for Your ERP Project",
        reasons: [
          { title: "ZATCA Compliance Experts", desc: "Deep expertise in Saudi tax regulations and e-invoicing requirements. Every solution we build is ZATCA Phase 2 certified.", icon: Shield },
          { title: "Arabic-First Development", desc: "Full RTL support, Arabic UI/UX, and bilingual interfaces that feel native to Saudi users.", icon: Globe },
          { title: "Rapid Implementation", desc: "Get your ERP system live in weeks, not months. Our proven methodology ensures fast deployment with minimal disruption.", icon: Zap },
          { title: "Scalable Architecture", desc: "Cloud-native solutions that grow with your business. From 10 users to 10,000 without performance issues.", icon: TrendingUp },
          { title: "Local Support Team", desc: "Dedicated Arabic-speaking support team available during Saudi business hours with guaranteed response times.", icon: MessageCircle },
          { title: "Integration Specialists", desc: "Seamless integration with existing systems, banks, government portals, and third-party applications.", icon: Layers },
          { title: "Data Security & Privacy", desc: "Enterprise-grade security compliant with Saudi PDPL (Personal Data Protection Law) and international standards.", icon: Lock },
          { title: "Proven Track Record", desc: "Hundreds of successful implementations across Saudi Arabia with measurable ROI for every client.", icon: Award }
        ]
      },
      pricing: {
        title: "ERP Software Pricing in Saudi Arabia",
        subtitle: "Transparent pricing with no hidden fees. All prices in SAR.",
        plans: [
          {
            name: "Basic ERP",
            price: "From 25,000 SAR",
            features: ["Core accounting module", "Inventory management", "ZATCA e-invoicing", "Up to 5 users", "3 months support"],
            color: "gray",
            popular: false
          },
          {
            name: "Business Suite",
            price: "From 60,000 SAR",
            features: ["Full ERP modules", "CRM integration", "HR & Payroll", "Up to 25 users", "12 months support", "Custom reports"],
            color: "emerald",
            popular: true
          },
          {
            name: "Enterprise",
            price: "From 150,000 SAR",
            features: ["All Business features", "Multi-branch support", "Advanced analytics", "Unlimited users", "24/7 priority support", "Custom development"],
            color: "gray",
            popular: false
          },
          {
            name: "Custom Solution",
            price: "On Quote",
            features: ["Fully bespoke system", "Industry-specific modules", "Legacy system migration", "Dedicated project team", "SLA agreement", "On-premise option"],
            color: "gray",
            popular: false
          }
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            q: "Is your ERP software fully ZATCA Phase 2 compliant?",
            a: "Yes, all our ERP and accounting solutions are fully compliant with ZATCA Phase 2 (Integration Phase) e-invoicing requirements. We handle QR code generation, cryptographic stamping, XML format (UBL 2.1), and real-time reporting to the Fatoora portal. Our systems are regularly updated to reflect any changes in ZATCA regulations."
          },
          {
            q: "How long does ERP implementation take in Saudi Arabia?",
            a: "Implementation timelines vary based on complexity. A Basic ERP can be deployed in 4-6 weeks. A Business Suite typically takes 2-4 months. Enterprise implementations range from 4-8 months. We follow an agile methodology with phased go-live to minimize business disruption."
          },
          {
            q: "Do you offer cloud-based or on-premise ERP solutions?",
            a: "We offer both options. Our cloud ERP is hosted on secure servers in the Saudi Arabia region (AWS/Azure), ensuring data sovereignty compliance. On-premise deployment is available for organizations that require full control over their infrastructure. Hybrid models are also supported."
          },
          {
            q: "Does the software support full Arabic user interface?",
            a: "Absolutely. All our solutions feature complete Arabic UI with proper RTL (Right-to-Left) layout, Arabic date formats (Hijri calendar support), Arabic number formatting, and bilingual Arabic-English switching. Reports and invoices can be generated in both languages."
          },
          {
            q: "Can your ERP integrate with our existing systems and Saudi banks?",
            a: "Yes, we specialize in system integration. Our ERP can connect with popular Saudi payment gateways (Mada, STC Pay, Tabby), banking systems for automated reconciliation, government portals (ZATCA, GOSI, Mudad), e-commerce platforms, and third-party logistics providers. We use modern APIs and middleware for seamless data flow."
          }
        ]
      },
      cta: {
        title: "Ready to Transform Your Business with ERP?",
        subtitle: "Get a free consultation and demo tailored to your industry",
        whatsapp: "Contact on WhatsApp",
        email: "Send Email",
        phone: "+213549575512",
        emailAddr: "contact@symloop.com"
      },
      related: {
        title: "Related Articles",
        posts: [
          { title: "Web Development Company in Saudi Arabia 2026", slug: "web-development-company-saudi-arabia-2026" },
          { title: "E-Commerce Solutions Saudi Arabia with Mada Payment", slug: "ecommerce-solutions-saudi-arabia-mada-2026" },
          { title: "Digital Transformation Saudi Arabia Vision 2030", slug: "digital-transformation-saudi-arabia-vision-2030" }
        ]
      },
      seoKeywords: "ERP Saudi Arabia, business software Saudi Arabia, ZATCA e-invoicing software, ERP Riyadh, ERP Jeddah, custom ERP Saudi, CRM Saudi Arabia, HR payroll Saudi, accounting software ZATCA, enterprise software KSA, Vision 2030 digital transformation, ERP Dammam, business management software Saudi, cloud ERP Saudi Arabia, SAP alternative Saudi, inventory management Saudi Arabia, e-invoicing Saudi Arabia, Fatoora compliance, GOSI payroll software, Saudi business solutions 2026"
    },
    ar: {
      metaTitle: "برامج ERP وأنظمة الأعمال في السعودية 2026 | حلول مخصصة | سيملوب",
      metaDescription: "حلول ERP وبرامج أعمال مخصصة في المملكة العربية السعودية. متوافقة مع الفوترة الإلكترونية لهيئة الزكاة والضريبة والجمارك. CRM، موارد بشرية، محاسبة. الرياض، جدة، الدمام.",
      title: "حلول برامج ERP وأنظمة الأعمال في المملكة العربية السعودية",
      subtitle: "برامج مؤسسية متوافقة مع هيئة الزكاة والضريبة والجمارك للتحول الرقمي في رؤية 2030",
      category: "برامج المؤسسات",
      readTime: "15 دقيقة",
      author: "فريق سيملوب",
      date: "2026-01-15",
      backLink: "العودة للمدونة",
      intro: "يشهد سوق البرامج المؤسسية في المملكة العربية السعودية نمواً غير مسبوق، مدفوعاً بتوجيهات التحول الرقمي الطموحة لرؤية 2030 ومتطلبات المرحلة الثانية للفوترة الإلكترونية من هيئة الزكاة والضريبة والجمارك. مع أكثر من 70% من الشركات السعودية التي تسعى حالياً للتحول الرقمي، لم يكن الطلب على أنظمة ERP القوية ومنصات CRM وبرامج الأعمال المتكاملة أعلى من أي وقت مضى. سواء كنت مصنعاً كبيراً في الجبيل، أو سلسلة تجزئة في الرياض، أو شركة صغيرة ومتوسطة نامية في جدة، فإن اختيار شريك البرمجيات المؤسسية المناسب أمر حاسم لامتثالك وكفاءتك وميزتك التنافسية في الاقتصاد الرقمي سريع التطور في المملكة.",
      statsTitle: "الاقتصاد الرقمي السعودي 2026",
      stats: [
        { value: "+36 مليون", label: "عدد السكان" },
        { value: "+12 مليار$", label: "الاقتصاد الرقمي" },
        { value: "+95%", label: "يحتاجون امتثال ZATCA" },
        { value: "+70%", label: "شركات تتحول رقمياً" }
      ],
      services: {
        title: "حلول ERP وبرامج الأعمال لدينا",
        subtitle: "برامج مؤسسية شاملة مصممة للسوق السعودي",
        list: [
          {
            icon: Database,
            title: "أنظمة ERP مخصصة",
            description: "تخطيط موارد المؤسسات الشامل المبني للشركات السعودية. منصة موحدة لجميع عملياتك.",
            features: ["إدارة المخزون والمستودعات", "المشتريات وسلسلة التوريد", "تخطيط التصنيع والإنتاج", "دعم الفروع والشركات المتعددة"]
          },
          {
            icon: Users,
            title: "حلول CRM",
            description: "إدارة علاقات العملاء التي تدفع نمو المبيعات وتبني علاقات دائمة في سوق الخليج.",
            features: ["إدارة خط أنابيب المبيعات", "تتبع دورة حياة العميل", "أتمتة التسويق", "دعم العربية والإنجليزية"]
          },
          {
            icon: Briefcase,
            title: "أنظمة الموارد البشرية والرواتب",
            description: "إدارة موارد بشرية كاملة متوافقة مع نظام العمل السعودي ومتطلبات التأمينات الاجتماعية.",
            features: ["إدارة دورة حياة الموظف", "التوافق مع التأمينات الاجتماعية (GOSI)", "جاهز لنظام حماية الأجور (WPS)", "تتبع وتقارير السعودة"]
          },
          {
            icon: FileText,
            title: "المحاسبة والفوترة الإلكترونية",
            description: "برنامج محاسبة متوافق مع المرحلة الثانية لهيئة الزكاة والضريبة مع دعم كامل لضريبة القيمة المضافة.",
            features: ["الفوترة الإلكترونية المرحلة الثانية", "حساب تلقائي لضريبة 15%", "تقارير مالية متعددة العملات", "لوحات معلومات وتحليلات فورية"]
          }
        ]
      },
      zatca: {
        title: "التوافق مع الفوترة الإلكترونية لهيئة الزكاة والضريبة",
        description: "تفرض هيئة الزكاة والضريبة والجمارك (ZATCA) على جميع الشركات في المملكة العربية السعودية الامتثال للمرحلة الثانية (مرحلة الربط والتكامل) من نظام الفوترة الإلكترونية. حلولنا البرمجية مبنية من الأساس لضمان الامتثال الكامل لهيئة الزكاة والضريبة، مما يلغي مخاطر الغرامات ويضمن التكامل السلس مع منصة فاتورة.",
        features: [
          "امتثال كامل للمرحلة الثانية - مرحلة الربط والتكامل",
          "إرسال الفواتير في الوقت الفعلي لبوابة فاتورة",
          "توليد رمز QR على جميع الفواتير",
          "الختم التشفيري والتوقيعات الرقمية",
          "دعم تنسيق XML (UBL 2.1)",
          "إدارة الإشعارات الدائنة والمدينة",
          "حساب وتقديم ضريبة القيمة المضافة تلقائياً",
          "قوالب فواتير ثنائية اللغة عربي-إنجليزي"
        ]
      },
      cities: {
        title: "نخدم الشركات في جميع أنحاء المملكة العربية السعودية",
        list: [
          { name: "الرياض", desc: "العاصمة ومركز الأعمال" },
          { name: "جدة", desc: "البوابة التجارية" },
          { name: "الدمام", desc: "مركز المنطقة الشرقية" },
          { name: "مكة المكرمة", desc: "المدينة المقدسة والسياحة" },
          { name: "المدينة المنورة", desc: "التراث والنمو" }
        ]
      },
      sectors: {
        title: "حلول ERP متخصصة حسب القطاع",
        subtitle: "برامج مؤسسية مصممة لكل قطاع في المملكة العربية السعودية",
        list: [
          { name: "التصنيع", icon: Settings, desc: "تخطيط الإنتاج، قوائم المواد، مراقبة الجودة" },
          { name: "التجزئة والجملة", icon: ShoppingCart, desc: "نقاط البيع، المخزون، إدارة المتاجر المتعددة" },
          { name: "البناء والتشييد", icon: Building2, desc: "تكاليف المشاريع، إدارة المقاولين" },
          { name: "الرعاية الصحية", icon: Shield, desc: "سجلات المرضى، الفوترة، إدارة الصيدلية" },
          { name: "التعليم", icon: Award, desc: "إدارة الطلاب، الرسوم، التعلم الإلكتروني" },
          { name: "الضيافة", icon: Star, desc: "الحجوزات، المطاعم، خدمات النزلاء" },
          { name: "الخدمات اللوجستية", icon: Rocket, desc: "إدارة الأسطول، التخزين، التتبع" },
          { name: "النفط والغاز", icon: Layers, desc: "إدارة الأصول، السلامة المهنية، المشتريات" },
          { name: "القطاع الحكومي", icon: Globe, desc: "الخدمات الإلكترونية، إدارة المستندات، الامتثال" }
        ]
      },
      whyUs: {
        title: "لماذا تختار سيملوب لمشروع ERP الخاص بك",
        reasons: [
          { title: "خبراء امتثال ZATCA", desc: "خبرة عميقة في اللوائح الضريبية السعودية ومتطلبات الفوترة الإلكترونية. كل حل نبنيه معتمد للمرحلة الثانية.", icon: Shield },
          { title: "تطوير بالعربية أولاً", desc: "دعم كامل لـ RTL، واجهة مستخدم عربية، وواجهات ثنائية اللغة تبدو طبيعية للمستخدمين السعوديين.", icon: Globe },
          { title: "تنفيذ سريع", desc: "احصل على نظام ERP الخاص بك في أسابيع وليس أشهر. منهجيتنا المثبتة تضمن نشراً سريعاً مع أقل تعطيل.", icon: Zap },
          { title: "بنية قابلة للتوسع", desc: "حلول سحابية أصلية تنمو مع أعمالك. من 10 مستخدمين إلى 10,000 بدون مشاكل أداء.", icon: TrendingUp },
          { title: "فريق دعم محلي", desc: "فريق دعم يتحدث العربية متاح خلال ساعات العمل السعودية مع أوقات استجابة مضمونة.", icon: MessageCircle },
          { title: "متخصصون في التكامل", desc: "تكامل سلس مع الأنظمة الحالية والبنوك والبوابات الحكومية والتطبيقات الخارجية.", icon: Layers },
          { title: "أمان وخصوصية البيانات", desc: "أمان على مستوى المؤسسات متوافق مع نظام حماية البيانات الشخصية السعودي والمعايير الدولية.", icon: Lock },
          { title: "سجل حافل بالنجاح", desc: "مئات التطبيقات الناجحة في جميع أنحاء المملكة مع عائد استثمار قابل للقياس لكل عميل.", icon: Award }
        ]
      },
      pricing: {
        title: "أسعار برامج ERP في المملكة العربية السعودية",
        subtitle: "أسعار شفافة بدون رسوم خفية. جميع الأسعار بالريال السعودي.",
        plans: [
          {
            name: "ERP أساسي",
            price: "من 25,000 ريال",
            features: ["وحدة المحاسبة الأساسية", "إدارة المخزون", "الفوترة الإلكترونية ZATCA", "حتى 5 مستخدمين", "3 أشهر دعم"],
            color: "gray",
            popular: false
          },
          {
            name: "حزمة الأعمال",
            price: "من 60,000 ريال",
            features: ["جميع وحدات ERP", "تكامل CRM", "الموارد البشرية والرواتب", "حتى 25 مستخدم", "12 شهر دعم", "تقارير مخصصة"],
            color: "emerald",
            popular: true
          },
          {
            name: "المؤسسات",
            price: "من 150,000 ريال",
            features: ["جميع ميزات الأعمال", "دعم الفروع المتعددة", "تحليلات متقدمة", "مستخدمين غير محدودين", "دعم أولوية 24/7", "تطوير مخصص"],
            color: "gray",
            popular: false
          },
          {
            name: "حل مخصص",
            price: "حسب الطلب",
            features: ["نظام مبني بالكامل حسب الطلب", "وحدات خاصة بالقطاع", "ترحيل الأنظمة القديمة", "فريق مشروع مخصص", "اتفاقية مستوى خدمة", "خيار التثبيت المحلي"],
            color: "gray",
            popular: false
          }
        ]
      },
      faq: {
        title: "الأسئلة الشائعة",
        items: [
          {
            q: "هل برنامج ERP الخاص بكم متوافق بالكامل مع المرحلة الثانية لهيئة الزكاة والضريبة؟",
            a: "نعم، جميع حلول ERP والمحاسبة لدينا متوافقة بالكامل مع متطلبات المرحلة الثانية (مرحلة الربط والتكامل) للفوترة الإلكترونية. نتعامل مع توليد رمز QR والختم التشفيري وتنسيق XML (UBL 2.1) والإرسال في الوقت الفعلي لبوابة فاتورة. يتم تحديث أنظمتنا بانتظام لتعكس أي تغييرات في لوائح الهيئة."
          },
          {
            q: "كم يستغرق تطبيق نظام ERP في المملكة العربية السعودية؟",
            a: "تختلف مدة التنفيذ حسب التعقيد. يمكن نشر ERP الأساسي في 4-6 أسابيع. حزمة الأعمال تستغرق عادة 2-4 أشهر. تطبيقات المؤسسات تتراوح من 4-8 أشهر. نتبع منهجية أجايل مع إطلاق مرحلي لتقليل تعطيل الأعمال."
          },
          {
            q: "هل تقدمون حلول ERP سحابية أم محلية؟",
            a: "نقدم كلا الخيارين. نظام ERP السحابي مستضاف على خوادم آمنة في منطقة المملكة العربية السعودية (AWS/Azure)، مما يضمن الامتثال لسيادة البيانات. التثبيت المحلي متاح للمؤسسات التي تتطلب سيطرة كاملة على بنيتها التحتية. النماذج الهجينة مدعومة أيضاً."
          },
          {
            q: "هل يدعم البرنامج واجهة مستخدم عربية كاملة؟",
            a: "بالتأكيد. جميع حلولنا تتميز بواجهة مستخدم عربية كاملة مع تخطيط RTL صحيح، وتنسيقات التاريخ العربي (دعم التقويم الهجري)، وتنسيق الأرقام العربية، والتبديل الثنائي عربي-إنجليزي. يمكن إنشاء التقارير والفواتير بكلتا اللغتين."
          },
          {
            q: "هل يمكن لنظام ERP التكامل مع أنظمتنا الحالية والبنوك السعودية؟",
            a: "نعم، نحن متخصصون في تكامل الأنظمة. يمكن لنظام ERP الاتصال ببوابات الدفع السعودية الشائعة (مدى، STC Pay، تابي)، والأنظمة المصرفية للمطابقة التلقائية، والبوابات الحكومية (ZATCA، GOSI، مُدد)، ومنصات التجارة الإلكترونية، ومزودي الخدمات اللوجستية."
          }
        ]
      },
      cta: {
        title: "هل أنت مستعد لتحويل أعمالك مع ERP؟",
        subtitle: "احصل على استشارة مجانية وعرض توضيحي مصمم لقطاعك",
        whatsapp: "تواصل عبر واتساب",
        email: "أرسل بريداً إلكترونياً",
        phone: "+213549575512",
        emailAddr: "contact@symloop.com"
      },
      related: {
        title: "مقالات ذات صلة",
        posts: [
          { title: "شركة تطوير ويب في المملكة العربية السعودية 2026", slug: "web-development-company-saudi-arabia-2026" },
          { title: "حلول التجارة الإلكترونية السعودية مع مدى", slug: "ecommerce-solutions-saudi-arabia-mada-2026" },
          { title: "التحول الرقمي السعودية رؤية 2030", slug: "digital-transformation-saudi-arabia-vision-2030" }
        ]
      },
      seoKeywords: "ERP السعودية, برامج أعمال السعودية, الفوترة الإلكترونية ZATCA, نظام ERP الرياض, ERP جدة, CRM السعودية, برنامج موارد بشرية سعودي, برنامج محاسبة ZATCA, رؤية 2030 التحول الرقمي, نظام ERP الدمام, حلول أعمال سعودية 2026"
    },
    fr: {
      metaTitle: "ERP & Logiciels de Gestion Arabie Saoudite 2026 | Solutions Sur Mesure | Symloop",
      metaDescription: "Solutions ERP et logiciels de gestion sur mesure en Arabie Saoudite. Conformes e-facturation ZATCA, prêts Vision 2030. CRM, RH, comptabilité. Riyad, Djeddah, Dammam.",
      title: "Solutions ERP & Logiciels de Gestion en Arabie Saoudite",
      subtitle: "Logiciels d'entreprise conformes ZATCA pour la transformation numérique Vision 2030",
      category: "Logiciels d'entreprise",
      readTime: "15 min",
      author: "Equipe Symloop",
      date: "2026-01-15",
      backLink: "Retour au Blog",
      intro: "Le marche des logiciels d'entreprise en Arabie Saoudite connait une croissance sans precedent, porté par le mandat de numérisation ambitieux de la Vision 2030 et les exigences de la Phase 2 de facturation electronique de la ZATCA. Avec plus de 70% des entreprises saoudiennes poursuivant activement leur transformation numerique, la demande de systemes ERP robustes, de plateformes CRM et de logiciels de gestion integres n'a jamais ete aussi forte. Que vous soyez un geant industriel a Jubail, une chaine de distribution a Riyad ou une PME en croissance a Djeddah, choisir le bon partenaire logiciel est essentiel pour votre conformite, votre efficacite et votre avantage competitif dans l'economie numerique du Royaume.",
      statsTitle: "Economie Numerique Saoudienne 2026",
      stats: [
        { value: "36M+", label: "Population" },
        { value: "12Mds$+", label: "Economie numerique" },
        { value: "95%+", label: "Conformite ZATCA requise" },
        { value: "70%+", label: "Entreprises en numerisation" }
      ],
      services: {
        title: "Nos Solutions ERP & Logiciels de Gestion",
        subtitle: "Logiciels d'entreprise complets adaptes au marche saoudien",
        list: [
          {
            icon: Database,
            title: "Systemes ERP Sur Mesure",
            description: "Planification des ressources d'entreprise complete construite pour les entreprises saoudiennes. Plateforme unifiee pour toutes vos operations.",
            features: ["Gestion des stocks et entrepots", "Achats et chaine d'approvisionnement", "Planification de fabrication et production", "Support multi-succursales et multi-societes"]
          },
          {
            icon: Users,
            title: "Solutions CRM",
            description: "Gestion de la relation client qui stimule la croissance des ventes et construit des relations durables sur le marche du Golfe.",
            features: ["Gestion du pipeline commercial", "Suivi du cycle de vie client", "Automatisation marketing", "Support arabe et anglais"]
          },
          {
            icon: Briefcase,
            title: "Systemes RH & Paie",
            description: "Gestion complete des ressources humaines conforme au droit du travail saoudien et aux exigences d'assurance sociale.",
            features: ["Gestion du cycle de vie employe", "Conformite GOSI integree", "Pret pour WPS (Protection des Salaires)", "Suivi et rapports de saudiisation"]
          },
          {
            icon: FileText,
            title: "Comptabilite & E-Facturation",
            description: "Logiciel comptable conforme Phase 2 ZATCA avec support TVA complet et reporting financier en temps reel.",
            features: ["E-facturation ZATCA Phase 2", "Calcul automatique TVA 15%", "Reporting financier multi-devises", "Tableaux de bord et analyses en temps reel"]
          }
        ]
      },
      zatca: {
        title: "Conformite E-Facturation ZATCA",
        description: "L'Autorite de la Zakat, des Impots et des Douanes (ZATCA) exige que toutes les entreprises en Arabie Saoudite se conforment a la Phase 2 (Phase d'Integration) de la reglementation de facturation electronique. Nos solutions logicielles sont construites des le depart pour assurer une conformite ZATCA complete, eliminant le risque de penalites et garantissant une integration transparente avec la plateforme Fatoora.",
        features: [
          "Conformite complete Phase 2 - Phase d'Integration",
          "Envoi de factures en temps reel au portail Fatoora ZATCA",
          "Generation de code QR sur toutes les factures",
          "Tampon cryptographique et signatures numeriques",
          "Support format XML (UBL 2.1)",
          "Gestion des avoirs et notes de debit",
          "Calcul et declaration TVA automatiques",
          "Modeles de factures bilingues arabe-anglais"
        ]
      },
      cities: {
        title: "Au Service des Entreprises dans toute l'Arabie Saoudite",
        list: [
          { name: "Riyad", desc: "Capitale et centre d'affaires" },
          { name: "Djeddah", desc: "Porte commerciale" },
          { name: "Dammam", desc: "Centre de la Province Est" },
          { name: "La Mecque", desc: "Ville sainte et tourisme" },
          { name: "Medine", desc: "Patrimoine et croissance" }
        ]
      },
      sectors: {
        title: "Solutions ERP Specifiques par Secteur",
        subtitle: "Logiciels d'entreprise adaptes a chaque secteur en Arabie Saoudite",
        list: [
          { name: "Industrie", icon: Settings, desc: "Planification production, nomenclatures, controle qualite" },
          { name: "Commerce de detail & gros", icon: ShoppingCart, desc: "Points de vente, stocks, gestion multi-magasins" },
          { name: "Construction & BTP", icon: Building2, desc: "Couts de projet, gestion sous-traitants" },
          { name: "Sante", icon: Shield, desc: "Dossiers patients, facturation, gestion pharmacie" },
          { name: "Education", icon: Award, desc: "Gestion etudiants, frais, e-learning" },
          { name: "Hotellerie", icon: Star, desc: "Reservations, restauration, entretien" },
          { name: "Logistique", icon: Rocket, desc: "Gestion de flotte, entreposage, suivi" },
          { name: "Petrole & Gaz", icon: Layers, desc: "Gestion des actifs, conformite HSE, achats" },
          { name: "Gouvernement", icon: Globe, desc: "E-services, gestion documentaire, conformite" }
        ]
      },
      whyUs: {
        title: "Pourquoi Choisir Symloop pour Votre Projet ERP",
        reasons: [
          { title: "Experts Conformite ZATCA", desc: "Expertise approfondie des reglementations fiscales saoudiennes et exigences de facturation electronique. Chaque solution est certifiee ZATCA Phase 2.", icon: Shield },
          { title: "Developpement Arabe d'Abord", desc: "Support RTL complet, interface utilisateur arabe, et interfaces bilingues naturelles pour les utilisateurs saoudiens.", icon: Globe },
          { title: "Implementation Rapide", desc: "Obtenez votre systeme ERP en semaines, pas en mois. Notre methodologie eprouvee assure un deploiement rapide avec un minimum de perturbation.", icon: Zap },
          { title: "Architecture Evolutive", desc: "Solutions cloud-natives qui grandissent avec votre entreprise. De 10 a 10 000 utilisateurs sans problemes de performance.", icon: TrendingUp },
          { title: "Equipe Support Locale", desc: "Equipe de support arabophone disponible pendant les heures de bureau saoudiennes avec des temps de reponse garantis.", icon: MessageCircle },
          { title: "Specialistes Integration", desc: "Integration transparente avec les systemes existants, banques, portails gouvernementaux et applications tierces.", icon: Layers },
          { title: "Securite & Confidentialite", desc: "Securite de niveau entreprise conforme au PDPL saoudien (Protection des Donnees Personnelles) et normes internationales.", icon: Lock },
          { title: "Bilan Eprouve", desc: "Des centaines d'implementations reussies dans toute l'Arabie Saoudite avec un ROI mesurable pour chaque client.", icon: Award }
        ]
      },
      pricing: {
        title: "Tarifs ERP en Arabie Saoudite",
        subtitle: "Tarification transparente sans frais caches. Tous les prix en SAR.",
        plans: [
          {
            name: "ERP Basique",
            price: "A partir de 25 000 SAR",
            features: ["Module comptabilite de base", "Gestion des stocks", "E-facturation ZATCA", "Jusqu'a 5 utilisateurs", "3 mois de support"],
            color: "gray",
            popular: false
          },
          {
            name: "Suite Business",
            price: "A partir de 60 000 SAR",
            features: ["Tous les modules ERP", "Integration CRM", "RH & Paie", "Jusqu'a 25 utilisateurs", "12 mois de support", "Rapports personnalises"],
            color: "emerald",
            popular: true
          },
          {
            name: "Enterprise",
            price: "A partir de 150 000 SAR",
            features: ["Toutes les fonctions Business", "Support multi-succursales", "Analyses avancees", "Utilisateurs illimites", "Support prioritaire 24/7", "Developpement sur mesure"],
            color: "gray",
            popular: false
          },
          {
            name: "Solution Sur Mesure",
            price: "Sur Devis",
            features: ["Systeme entierement personnalise", "Modules specifiques secteur", "Migration systemes existants", "Equipe projet dediee", "Accord SLA", "Option sur site"],
            color: "gray",
            popular: false
          }
        ]
      },
      faq: {
        title: "Questions Frequemment Posees",
        items: [
          {
            q: "Votre logiciel ERP est-il entierement conforme a la Phase 2 ZATCA ?",
            a: "Oui, toutes nos solutions ERP et comptables sont entierement conformes aux exigences de la Phase 2 (Phase d'Integration) de facturation electronique ZATCA. Nous gerons la generation de code QR, le tampon cryptographique, le format XML (UBL 2.1) et le reporting en temps reel au portail Fatoora. Nos systemes sont regulierement mis a jour."
          },
          {
            q: "Combien de temps prend l'implementation ERP en Arabie Saoudite ?",
            a: "Les delais varient selon la complexite. Un ERP basique peut etre deploye en 4-6 semaines. Une Suite Business prend generalement 2-4 mois. Les implementations Enterprise vont de 4 a 8 mois. Nous suivons une methodologie agile avec mise en production par phases."
          },
          {
            q: "Proposez-vous des solutions ERP cloud ou sur site ?",
            a: "Nous proposons les deux options. Notre ERP cloud est heberge sur des serveurs securises dans la region Arabie Saoudite (AWS/Azure), garantissant la conformite de souverainete des donnees. Le deploiement sur site est disponible pour les organisations necessitant un controle total. Les modeles hybrides sont egalement supportes."
          },
          {
            q: "Le logiciel supporte-t-il une interface utilisateur entierement arabe ?",
            a: "Absolument. Toutes nos solutions proposent une interface arabe complete avec mise en page RTL, formats de date arabes (calendrier Hijri), formatage des nombres arabes et basculement bilingue arabe-anglais. Les rapports et factures peuvent etre generes dans les deux langues."
          },
          {
            q: "Votre ERP peut-il s'integrer avec nos systemes existants et les banques saoudiennes ?",
            a: "Oui, nous sommes specialistes de l'integration. Notre ERP se connecte aux passerelles de paiement saoudiennes (Mada, STC Pay, Tabby), systemes bancaires, portails gouvernementaux (ZATCA, GOSI, Mudad), plateformes e-commerce et prestataires logistiques. Nous utilisons des APIs modernes pour un flux de donnees transparent."
          }
        ]
      },
      cta: {
        title: "Pret a Transformer Votre Entreprise avec un ERP ?",
        subtitle: "Obtenez une consultation gratuite et une demo adaptee a votre secteur",
        whatsapp: "Contacter sur WhatsApp",
        email: "Envoyer un Email",
        phone: "+213549575512",
        emailAddr: "contact@symloop.com"
      },
      related: {
        title: "Articles Connexes",
        posts: [
          { title: "Societe de Developpement Web en Arabie Saoudite 2026", slug: "web-development-company-saudi-arabia-2026" },
          { title: "Solutions E-Commerce Arabie Saoudite avec Paiement Mada", slug: "ecommerce-solutions-saudi-arabia-mada-2026" },
          { title: "Transformation Numerique Arabie Saoudite Vision 2030", slug: "digital-transformation-saudi-arabia-vision-2030" }
        ]
      },
      seoKeywords: "ERP Arabie Saoudite, logiciel gestion Arabie Saoudite, e-facturation ZATCA, ERP Riyad, ERP Djeddah, CRM Arabie Saoudite, logiciel RH saoudien, comptabilite ZATCA, Vision 2030 transformation numerique, solutions entreprise saoudiennes 2026"
    }
  };

  const c = content[locale] || content.en;

  const jsonLdArticle = {
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
    "datePublished": "2026-01-15",
    "dateModified": "2026-01-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://symloop.com/blog/erp-business-software-saudi-arabia-2026"
    },
    "image": "https://symloop.com/logo.png",
    "inLanguage": locale,
    "keywords": c.seoKeywords
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": c.faq.items.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a }
    }))
  };

  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Symloop",
    "description": "ERP & Business Software Solutions Provider in Saudi Arabia",
    "url": "https://symloop.com",
    "telephone": "+213549575512",
    "email": "contact@symloop.com",
    "areaServed": {
      "@type": "Country",
      "name": "Saudi Arabia"
    },
    "serviceArea": [
      { "@type": "City", "name": "Riyadh" },
      { "@type": "City", "name": "Jeddah" },
      { "@type": "City", "name": "Dammam" },
      { "@type": "City", "name": "Mecca" },
      { "@type": "City", "name": "Medina" }
    ],
    "priceRange": "$$"
  };

  return (
    <>
      <Head>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDescription} />
        <meta name="keywords" content={c.seoKeywords} />
        <link rel="canonical" href="https://symloop.com/blog/erp-business-software-saudi-arabia-2026" />

        <meta property="og:title" content={c.title} />
        <meta property="og:description" content={c.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/erp-business-software-saudi-arabia-2026" />
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
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content="Saudi Arabia" />

        <link rel="alternate" hrefLang="en" href="https://symloop.com/en/blog/erp-business-software-saudi-arabia-2026" />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/blog/erp-business-software-saudi-arabia-2026" />
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/blog/erp-business-software-saudi-arabia-2026" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://symloop.com" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" }, { "@type": "ListItem", "position": 3, "name": c.title }] }) }} />
      </Head>

      <article className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>

        {/* ==================== HERO SECTION ==================== */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 to-black" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 mb-8 transition-colors">
              <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              {c.backLink}
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-emerald-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                <Database className="w-4 h-4" />
                {c.category}
              </span>
              <span className="text-gray-400 text-sm flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {c.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              {c.title.split('ERP').length > 1 ? (
                <>
                  {c.title.split('ERP')[0]}
                  <span className="text-emerald-400">ERP</span>
                  {c.title.split('ERP')[1]}
                </>
              ) : (
                c.title
              )}
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-3xl">{c.subtitle}</p>

            <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {c.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {c.date}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Saudi Arabia
              </div>
            </div>
          </div>
        </section>

        {/* ==================== INTRO ==================== */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-gray-300 leading-relaxed">{c.intro}</p>
            <p className="text-base text-gray-400 mt-6 leading-relaxed">
              {locale === 'ar'
                ? <>استكشف أيضاً <Link href="/services" className="text-cyan-400 hover:underline">خدماتنا الكاملة</Link> بما في ذلك <Link href="/blog/ecommerce-solutions-saudi-arabia-mada-2026" className="text-cyan-400 hover:underline">حلول التجارة الإلكترونية في السعودية</Link> و<Link href="/blog/erp-business-software-kuwait-2026" className="text-cyan-400 hover:underline">برنامج ERP في الكويت</Link>.</>
                : <>Explore our full range of <Link href="/services" className="text-cyan-400 hover:underline">IT services</Link>, including <Link href="/blog/ecommerce-solutions-saudi-arabia-mada-2026" className="text-cyan-400 hover:underline">e-commerce solutions in Saudi Arabia</Link> and <Link href="/blog/erp-business-software-kuwait-2026" className="text-cyan-400 hover:underline">ERP software in Kuwait</Link>.</>
              }
            </p>
          </div>
        </section>

        {/* ==================== STATS SECTION ==================== */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-emerald-900/40 to-emerald-800/20 border border-emerald-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
                <TrendingUp className="w-6 h-6 text-emerald-400" />
                {c.statsTitle}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {c.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-emerald-400">{stat.value}</div>
                    <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SERVICES SECTION ==================== */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{c.services.title}</h2>
              <p className="text-gray-400 text-lg">{c.services.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {c.services.list.map((service, i) => {
                const IconComp = service.icon;
                return (
                  <div key={i} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                      <IconComp className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
        {/* ==================== ZATCA COMPLIANCE SECTION ==================== */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-emerald-900/30 to-gray-900 border border-emerald-500/20 rounded-2xl p-8 lg:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-7 h-7 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{c.zatca.title}</h2>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-8">{c.zatca.description}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {c.zatca.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 bg-black/30 rounded-xl p-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================== CITIES SECTION ==================== */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6 text-emerald-400" />
              {c.cities.title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {c.cities.list.map((city, i) => (
                <div key={i} className="bg-gray-900/60 border border-gray-800 rounded-xl p-4 text-center hover:border-emerald-500/50 transition-colors">
                  <div className="text-white font-semibold mb-1">{city.name}</div>
                  <div className="text-gray-500 text-xs">{city.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== SECTORS SECTION ==================== */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{c.sectors.title}</h2>
              <p className="text-gray-400 text-lg">{c.sectors.subtitle}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {c.sectors.list.map((sector, i) => {
                const SectorIcon = sector.icon;
                return (
                  <div key={i} className="bg-gray-900/40 border border-gray-800 rounded-xl p-5 hover:border-emerald-500/40 transition-colors group">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                        <SectorIcon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <h3 className="text-white font-semibold">{sector.name}</h3>
                    </div>
                    <p className="text-gray-500 text-sm">{sector.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================== WHY US SECTION ==================== */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">{c.whyUs.title}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {c.whyUs.reasons.map((reason, i) => {
                const ReasonIcon = reason.icon;
                return (
                  <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-emerald-500/40 transition-all duration-300">
                    <div className="w-11 h-11 bg-emerald-500/15 rounded-xl flex items-center justify-center mb-4">
                      <ReasonIcon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-white font-bold mb-2 text-sm">{reason.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{reason.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================== PRICING SECTION ==================== */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{c.pricing.title}</h2>
              <p className="text-gray-400 text-lg">{c.pricing.subtitle}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {c.pricing.plans.map((plan, i) => (
                <div key={i} className={`relative rounded-2xl p-6 transition-all duration-300 ${plan.popular ? 'bg-emerald-900/30 border-2 border-emerald-500' : 'bg-gray-900/60 border border-gray-800 hover:border-gray-700'}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {locale === 'ar' ? 'الأكثر طلباً' : locale === 'fr' ? 'Populaire' : 'Popular'}
                      </span>
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-white mb-2 mt-2">{plan.name}</h3>
                  <div className={`text-xl font-bold mb-5 ${plan.popular ? 'text-emerald-400' : 'text-gray-300'}`}>{plan.price}</div>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                        <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-emerald-500' : 'text-gray-600'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== FAQ SECTION ==================== */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">{c.faq.title}</h2>
            <div className="space-y-6">
              {c.faq.items.map((item, i) => (
                <div key={i} className="bg-gray-900/40 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-start gap-3">
                    <span className="text-emerald-400 font-bold text-xl leading-none mt-0.5">Q</span>
                    {item.q}
                  </h3>
                  <p className="text-gray-400 leading-relaxed pl-8">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== CTA SECTION ==================== */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">{c.cta.title}</h2>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">{c.cta.subtitle}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/213549575512`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors w-full sm:w-auto justify-center"
                >
                  <Phone className="w-5 h-5" />
                  {c.cta.whatsapp}
                </a>
                <a
                  href={`mailto:${c.cta.emailAddr}`}
                  className="inline-flex items-center gap-2 bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-800 transition-colors border border-emerald-400/30 w-full sm:w-auto justify-center"
                >
                  <Mail className="w-5 h-5" />
                  {c.cta.email}
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-emerald-100 text-sm">
                <span className="flex items-center gap-1"><Phone className="w-4 h-4" />{c.cta.phone}</span>
                <span className="flex items-center gap-1"><Mail className="w-4 h-4" />{c.cta.emailAddr}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== RELATED SECTION ==================== */}
        <section className="py-16 border-t border-gray-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">{c.related.title}</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {c.related.posts.map((post, i) => (
                <Link
                  key={i}
                  href={`/blog/${post.slug}`}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-emerald-500/40 transition-colors group block"
                >
                  <h3 className="text-white font-semibold group-hover:text-emerald-400 transition-colors mb-2">{post.title}</h3>
                  <span className="text-emerald-500 text-sm flex items-center gap-1">
                    {locale === 'ar' ? 'اقرأ المزيد' : locale === 'fr' ? 'Lire la suite' : 'Read more'}
                    <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? '' : 'rotate-180'}`} />
                  </span>
                </Link>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-gray-400 mt-8 mb-4">
              {locale === 'ar' ? 'المزيد من خدماتنا في المنطقة' : 'More From Our Regional Coverage'}
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              <Link href="/blog/erp-business-software-uae-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'برنامج ERP في الإمارات' : 'ERP Software in the UAE'}
                </h3>
                <span className="text-cyan-500 text-sm flex items-center gap-1">
                  {locale === 'ar' ? 'اقرأ المزيد' : 'Read more'}
                  <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? '' : 'rotate-180'}`} />
                </span>
              </Link>
              <Link href="/blog/ecommerce-solutions-kuwait-knet-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'حلول التجارة الإلكترونية في الكويت' : 'E-Commerce Solutions in Kuwait'}
                </h3>
                <span className="text-cyan-500 text-sm flex items-center gap-1">
                  {locale === 'ar' ? 'اقرأ المزيد' : 'Read more'}
                  <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? '' : 'rotate-180'}`} />
                </span>
              </Link>
              <Link href="/blog/artificial-intelligence-solutions-saudi-arabia-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
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
