"use client";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArrowLeft, Calendar, Clock, User, MapPin, Code, Smartphone, Brain,
  CheckCircle, Phone, Mail, Building2, Rocket, Users, Shield, Zap,
  Star, Award, Globe, TrendingUp, Target, Database, CreditCard, ShoppingCart,
  BarChart3, Layers, MessageCircle, Briefcase, FileText, Settings, PieChart, Lock
} from "lucide-react";

export default function ErpBusinessSoftwareKuwait2026() {
  const router = useRouter();
  const locale = router.locale || 'en';
  const isRTL = locale === 'ar';

  const content = {
    en: {
      metaTitle: "ERP & Business Software Kuwait 2026 | Custom Solutions | Symloop",
      metaDescription: "Custom ERP and business software solutions in Kuwait. PIFSS compliant, New Kuwait 2035 ready. CRM, HR, accounting, inventory management. Kuwait City, Hawalli, Salmiya.",
      title: "ERP & Business Software Solutions in Kuwait",
      subtitle: "Enterprise Software for Kuwait's New Kuwait 2035 Digital Transformation",
      category: "Enterprise Software", readTime: "15 min", author: "Symloop Team", date: "2026-01-15", backLink: "Back to Blog",
      intro: "Kuwait's enterprise software market is experiencing significant growth, driven by the New Kuwait 2035 vision and the urgent need for businesses to modernize operations. With a population of 4.5 million and a digital economy exceeding $3 billion, over 65% of Kuwaiti businesses are actively digitalizing their processes. Despite 80%+ oil dependency, Kuwait is aggressively diversifying its economy, creating massive demand for ERP systems, CRM platforms, HR management, and accounting software. Whether you are an oil company in Kuwait City, a retail chain in Hawalli, or a growing SME in Salmiya, our enterprise software solutions are designed to meet Kuwait's unique business requirements including PIFSS compliance for social security.",
      statsTitle: "Kuwait Digital Economy 2026",
      stats: [{ value: "4.5M+", label: "Population" }, { value: "$3B+", label: "Digital Economy" }, { value: "65%+", label: "Businesses Digitalizing" }, { value: "80%+", label: "Oil Dependency" }],
      services: { title: "Our ERP & Business Software Solutions", subtitle: "Enterprise software tailored for Kuwait's market",
        list: [
          { icon: Database, title: "Custom ERP Systems", description: "Comprehensive ERP built for Kuwaiti businesses. Unified platform for all operations.", features: ["Inventory & warehouse management", "Procurement & supply chain", "Manufacturing & production planning", "Multi-branch & multi-company support"] },
          { icon: Users, title: "CRM Solutions", description: "Customer relationship management driving sales growth in Kuwait's competitive market.", features: ["Sales pipeline management", "Customer lifecycle tracking", "Marketing automation", "Arabic & English support"] },
          { icon: Briefcase, title: "HR & Payroll Systems", description: "Complete HR management compliant with Kuwait labor law and PIFSS social insurance.", features: ["Employee lifecycle management", "PIFSS compliance built-in", "Kuwaiti labor law adherence", "Kuwaitization tracking & reporting"] },
          { icon: FileText, title: "Accounting & Financial", description: "Comprehensive accounting software with Kuwait tax compliance and multi-currency reporting.", features: ["Kuwait tax compliance", "Multi-currency reporting", "Automated financial statements", "Real-time dashboards & analytics"] }
        ] },
      erpEcosystem: { title: "Kuwait Business Compliance & Integration", description: "Operating a business in Kuwait requires compliance with specific regulations including the Public Institution for Social Security (PIFSS), Kuwait labor law, and commercial registration requirements. Our ERP solutions are built from the ground up to handle Kuwait's unique business environment, from Kuwaitization quotas to PIFSS contribution calculations and commercial license management.",
        features: ["PIFSS social security integration and automated contributions", "Kuwait labor law compliance for contracts and leave management", "Kuwaitization quota tracking and reporting", "Commercial license and renewal management", "Multi-currency support with KWD as base currency", "Arabic-English bilingual document generation", "Integration with Kuwait banking systems", "VAT-ready financial module for future compliance"] },
      cities: { title: "Serving Businesses Across Kuwait", list: [{ name: "Kuwait City", desc: "Capital & business hub" }, { name: "Hawalli", desc: "Commercial center" }, { name: "Salmiya", desc: "Retail & lifestyle" }, { name: "Farwaniya", desc: "Industrial & commercial" }, { name: "Jahra", desc: "Growing market" }] },
      sectors: { title: "Industry-Specific ERP Solutions", subtitle: "Tailored enterprise software for Kuwait's sectors",
        list: [{ name: "Oil & Gas", icon: Layers, desc: "Asset management, HSE compliance, procurement" }, { name: "Banking & Finance", icon: CreditCard, desc: "Core banking, compliance, risk management" }, { name: "Government", icon: Globe, desc: "E-services, document management, compliance" }, { name: "Construction", icon: Building2, desc: "Project costing, subcontractor management" }, { name: "Real Estate", icon: Building2, desc: "Property management, tenant portals, accounting" }, { name: "Healthcare", icon: Shield, desc: "Patient records, billing, pharmacy management" }, { name: "Retail & Wholesale", icon: ShoppingCart, desc: "POS, inventory, multi-store management" }, { name: "Education", icon: Award, desc: "Student management, fees, e-learning" }, { name: "Telecommunications", icon: Smartphone, desc: "Subscriber management, billing, CRM" }] },
      whyUs: { title: "Why Choose Symloop for Your ERP Project", reasons: [
        { title: "Kuwait Compliance Experts", desc: "Deep expertise in PIFSS, Kuwait labor law, and local business regulations.", icon: Shield },
        { title: "Arabic-First Development", desc: "Full RTL support, Arabic UI/UX, and bilingual interfaces native to Kuwaiti users.", icon: Globe },
        { title: "Rapid Implementation", desc: "Get your ERP live in weeks, not months. Proven methodology for fast deployment.", icon: Zap },
        { title: "Scalable Architecture", desc: "Cloud-native solutions scaling from 10 to 10,000 users without performance issues.", icon: TrendingUp },
        { title: "Local Support", desc: "Arabic-speaking support team available during Kuwait business hours.", icon: MessageCircle },
        { title: "Integration Specialists", desc: "Seamless integration with banks, government portals, and third-party systems.", icon: Layers },
        { title: "Data Security", desc: "Enterprise-grade security compliant with Kuwait's data protection regulations.", icon: Lock },
        { title: "Proven Track Record", desc: "Hundreds of successful implementations across Kuwait with measurable ROI.", icon: Award }
      ] },
      pricing: { title: "ERP Software Pricing in Kuwait", subtitle: "Transparent pricing in KWD.",
        plans: [
          { name: "Basic ERP", price: "From 8,000 KWD", features: ["Core accounting", "Inventory management", "Basic HR module", "Up to 5 users", "3 months support"], color: "gray", popular: false },
          { name: "Business Suite", price: "From 20,000 KWD", features: ["Full ERP modules", "CRM integration", "HR & Payroll (PIFSS)", "Up to 25 users", "12 months support", "Custom reports"], color: "cyan", popular: true },
          { name: "Enterprise", price: "From 50,000 KWD", features: ["All Business features", "Multi-branch support", "Advanced analytics", "Unlimited users", "24/7 priority support", "Custom development"], color: "gray", popular: false },
          { name: "Custom Solution", price: "On Quote", features: ["Fully bespoke system", "Industry-specific modules", "Legacy migration", "Dedicated team", "SLA agreement", "On-premise option"], color: "gray", popular: false }
        ] },
      faq: { title: "Frequently Asked Questions", items: [
        { q: "Is your ERP software compliant with Kuwait regulations?", a: "Yes, all our solutions comply with PIFSS social security requirements, Kuwait labor law, and commercial regulations. We handle automated PIFSS contribution calculations, Kuwaitization tracking, and bilingual document generation." },
        { q: "How long does ERP implementation take?", a: "Basic ERP: 4-6 weeks. Business Suite: 2-4 months. Enterprise: 4-8 months. We follow agile methodology with phased go-live to minimize disruption." },
        { q: "Do you offer cloud or on-premise ERP?", a: "Both options available. Cloud ERP on secure servers with Kuwait-region hosting. On-premise for organizations requiring full infrastructure control. Hybrid models also supported." },
        { q: "Does the software support Arabic?", a: "Complete Arabic UI with RTL layout, Hijri calendar support, Arabic number formatting, and bilingual Arabic-English switching. Reports in both languages." },
        { q: "Can your ERP integrate with Kuwait banks?", a: "Yes, we integrate with Kuwait banking systems, KNET for payment processing, and government portals. Modern APIs for seamless data flow." }
      ] },
      cta: { title: "Ready to Transform with ERP?", subtitle: "Free consultation and demo for your industry", whatsapp: "Contact on WhatsApp", email: "Send Email", phone: "+213549575512", emailAddr: "contact@symloop.com" },
      related: { title: "Related Articles", posts: [{ title: "Web Development Company in Kuwait 2026", slug: "web-development-company-kuwait-2026" }, { title: "E-Commerce Solutions Kuwait KNET", slug: "ecommerce-solutions-kuwait-knet-2026" }, { title: "Digital Transformation Kuwait New Kuwait 2035", slug: "digital-transformation-kuwait-new-kuwait-2030" }] },
      seoKeywords: "ERP Kuwait, business software Kuwait, ERP Kuwait City, custom ERP Kuwait, CRM Kuwait, HR payroll Kuwait, PIFSS software, accounting software Kuwait, enterprise software Kuwait, New Kuwait 2035, ERP Hawalli, business management Kuwait, cloud ERP Kuwait, inventory management Kuwait, ERP cost Kuwait KWD"
    },
    ar: {
      metaTitle: "حلول ERP وبرامج الأعمال في الكويت 2026 | حلول مخصصة | سيملوب",
      metaDescription: "حلول ERP وبرامج أعمال مخصصة في الكويت. متوافقة مع المؤسسة العامة للتأمينات الاجتماعية. CRM، موارد بشرية، محاسبة. مدينة الكويت، حولي، السالمية.",
      title: "حلول ERP وبرامج الأعمال في الكويت",
      subtitle: "برامج مؤسسية للتحول الرقمي في كويت جديدة 2035",
      category: "برامج المؤسسات", readTime: "15 دقيقة", author: "فريق سيملوب", date: "2026-01-15", backLink: "العودة للمدونة",
      intro: "يشهد سوق البرامج المؤسسية في الكويت نمواً كبيراً، مدفوعاً برؤية كويت جديدة 2035 والحاجة الملحة لتحديث العمليات. مع سكان يبلغون 4.5 مليون واقتصاد رقمي يتجاوز 3 مليارات دولار، تعمل أكثر من 65% من الشركات الكويتية على رقمنة عملياتها. رغم الاعتماد على النفط بنسبة 80%+، تنوع الكويت اقتصادها بشكل مكثف مما يخلق طلباً هائلاً على أنظمة ERP ومنصات CRM وبرامج الموارد البشرية والمحاسبة.",
      statsTitle: "الاقتصاد الرقمي الكويتي 2026",
      stats: [{ value: "+4.5 مليون", label: "عدد السكان" }, { value: "+3 مليار$", label: "الاقتصاد الرقمي" }, { value: "+65%", label: "شركات تتحول رقمياً" }, { value: "+80%", label: "الاعتماد على النفط" }],
      services: { title: "حلول ERP وبرامج الأعمال لدينا", subtitle: "برامج مؤسسية مصممة للسوق الكويتي",
        list: [
          { icon: Database, title: "أنظمة ERP مخصصة", description: "تخطيط موارد المؤسسات الشامل للشركات الكويتية.", features: ["إدارة المخزون والمستودعات", "المشتريات وسلسلة التوريد", "تخطيط التصنيع", "دعم الفروع المتعددة"] },
          { icon: Users, title: "حلول CRM", description: "إدارة علاقات العملاء لنمو المبيعات في السوق الكويتي.", features: ["إدارة خط أنابيب المبيعات", "تتبع دورة حياة العميل", "أتمتة التسويق", "دعم عربي وإنجليزي"] },
          { icon: Briefcase, title: "الموارد البشرية والرواتب", description: "إدارة موارد بشرية متوافقة مع قانون العمل الكويتي والتأمينات الاجتماعية.", features: ["إدارة دورة حياة الموظف", "التوافق مع التأمينات (PIFSS)", "الالتزام بقانون العمل الكويتي", "تتبع وتقارير التكويت"] },
          { icon: FileText, title: "المحاسبة والمالية", description: "برنامج محاسبة شامل متوافق مع الضرائب الكويتية وتقارير متعددة العملات.", features: ["التوافق الضريبي الكويتي", "تقارير متعددة العملات", "بيانات مالية تلقائية", "لوحات معلومات فورية"] }
        ] },
      erpEcosystem: { title: "الامتثال والتكامل للأعمال الكويتية", description: "يتطلب تشغيل الأعمال في الكويت الامتثال للوائح محددة بما في ذلك المؤسسة العامة للتأمينات الاجتماعية (PIFSS) وقانون العمل الكويتي ومتطلبات السجل التجاري. حلول ERP لدينا مبنية للتعامل مع بيئة الأعمال الفريدة في الكويت.",
        features: ["تكامل التأمينات الاجتماعية PIFSS والاشتراكات التلقائية", "الامتثال لقانون العمل الكويتي للعقود وإدارة الإجازات", "تتبع وتقارير حصص التكويت", "إدارة الرخص التجارية والتجديد", "دعم متعدد العملات مع الدينار الكويتي كعملة أساسية", "إنشاء مستندات ثنائية اللغة عربي-إنجليزي", "التكامل مع الأنظمة المصرفية الكويتية", "وحدة مالية جاهزة لضريبة القيمة المضافة"] },
      cities: { title: "نخدم الشركات في الكويت", list: [{ name: "مدينة الكويت", desc: "العاصمة ومركز الأعمال" }, { name: "حولي", desc: "المركز التجاري" }, { name: "السالمية", desc: "التجزئة والحياة" }, { name: "الفروانية", desc: "صناعي وتجاري" }, { name: "الجهراء", desc: "سوق متنامي" }] },
      sectors: { title: "حلول ERP متخصصة حسب القطاع", subtitle: "برامج مؤسسية لقطاعات الكويت",
        list: [{ name: "النفط والغاز", icon: Layers, desc: "إدارة الأصول، السلامة، المشتريات" }, { name: "البنوك والتمويل", icon: CreditCard, desc: "الخدمات المصرفية، الامتثال، المخاطر" }, { name: "القطاع الحكومي", icon: Globe, desc: "الخدمات الإلكترونية، إدارة المستندات" }, { name: "البناء والتشييد", icon: Building2, desc: "تكاليف المشاريع، إدارة المقاولين" }, { name: "العقارات", icon: Building2, desc: "إدارة الممتلكات، بوابات المستأجرين" }, { name: "الرعاية الصحية", icon: Shield, desc: "سجلات المرضى، الفوترة، الصيدلية" }, { name: "التجزئة والجملة", icon: ShoppingCart, desc: "نقاط البيع، المخزون" }, { name: "التعليم", icon: Award, desc: "إدارة الطلاب، الرسوم" }, { name: "الاتصالات", icon: Smartphone, desc: "إدارة المشتركين، الفوترة" }] },
      whyUs: { title: "لماذا تختار سيملوب لمشروع ERP", reasons: [{ title: "خبراء الامتثال الكويتي", desc: "خبرة عميقة في التأمينات وقانون العمل الكويتي.", icon: Shield }, { title: "تطوير عربي أولاً", desc: "دعم RTL كامل وواجهات ثنائية اللغة.", icon: Globe }, { title: "تنفيذ سريع", desc: "نظام ERP في أسابيع وليس أشهر.", icon: Zap }, { title: "بنية قابلة للتوسع", desc: "حلول سحابية تنمو مع أعمالك.", icon: TrendingUp }, { title: "دعم محلي", desc: "فريق دعم يتحدث العربية.", icon: MessageCircle }, { title: "تكامل متخصص", desc: "تكامل مع البنوك والبوابات الحكومية.", icon: Layers }, { title: "أمان البيانات", desc: "أمان متوافق مع لوائح الكويت.", icon: Lock }, { title: "سجل حافل", desc: "مئات التطبيقات الناجحة في الكويت.", icon: Award }] },
      pricing: { title: "أسعار ERP في الكويت", subtitle: "أسعار شفافة بالدينار الكويتي.",
        plans: [
          { name: "ERP أساسي", price: "من 8,000 د.ك", features: ["محاسبة أساسية", "إدارة المخزون", "وحدة HR أساسية", "حتى 5 مستخدمين", "3 أشهر دعم"], color: "gray", popular: false },
          { name: "حزمة الأعمال", price: "من 20,000 د.ك", features: ["جميع وحدات ERP", "تكامل CRM", "HR والرواتب (PIFSS)", "حتى 25 مستخدم", "12 شهر دعم", "تقارير مخصصة"], color: "cyan", popular: true },
          { name: "المؤسسات", price: "من 50,000 د.ك", features: ["جميع ميزات الأعمال", "فروع متعددة", "تحليلات متقدمة", "مستخدمين غير محدودين", "دعم 24/7", "تطوير مخصص"], color: "gray", popular: false },
          { name: "حل مخصص", price: "حسب الطلب", features: ["نظام كامل حسب الطلب", "وحدات خاصة بالقطاع", "ترحيل الأنظمة", "فريق مخصص", "SLA", "تثبيت محلي"], color: "gray", popular: false }
        ] },
      faq: { title: "الأسئلة الشائعة", items: [
        { q: "هل نظام ERP متوافق مع اللوائح الكويتية؟", a: "نعم، جميع حلولنا متوافقة مع متطلبات التأمينات الاجتماعية PIFSS وقانون العمل الكويتي واللوائح التجارية." },
        { q: "كم يستغرق تطبيق ERP؟", a: "أساسي: 4-6 أسابيع. حزمة الأعمال: 2-4 أشهر. المؤسسات: 4-8 أشهر." },
        { q: "سحابي أم محلي؟", a: "كلا الخيارين متاح. سحابي مع استضافة في المنطقة أو تثبيت محلي كامل." },
        { q: "هل يدعم العربية؟", a: "نعم، واجهة عربية كاملة مع RTL والتقويم الهجري وتقارير ثنائية اللغة." },
        { q: "هل يتكامل مع بنوك الكويت؟", a: "نعم، نتكامل مع الأنظمة المصرفية الكويتية وKNET والبوابات الحكومية." }
      ] },
      cta: { title: "هل أنت مستعد للتحول مع ERP؟", subtitle: "استشارة مجانية وعرض توضيحي لقطاعك", whatsapp: "تواصل عبر واتساب", email: "أرسل بريداً", phone: "+213549575512", emailAddr: "contact@symloop.com" },
      related: { title: "مقالات ذات صلة", posts: [{ title: "تطوير مواقع ويب في الكويت", slug: "web-development-company-kuwait-2026" }, { title: "التجارة الإلكترونية الكويت KNET", slug: "ecommerce-solutions-kuwait-knet-2026" }, { title: "التحول الرقمي كويت جديدة 2035", slug: "digital-transformation-kuwait-new-kuwait-2030" }] },
      seoKeywords: "ERP الكويت, برامج أعمال الكويت, نظام ERP مدينة الكويت, CRM الكويت, موارد بشرية الكويت, PIFSS, برنامج محاسبة الكويت, كويت جديدة 2035"
    },
    fr: {
      metaTitle: "ERP & Logiciels de Gestion Koweït 2026 | Solutions Sur Mesure | Symloop",
      metaDescription: "Solutions ERP et logiciels sur mesure au Koweït. Conformes PIFSS, prêts Nouveau Koweït 2035. CRM, RH, comptabilité. Koweït City, Hawalli, Salmiya.",
      title: "Solutions ERP & Logiciels de Gestion au Koweït",
      subtitle: "Logiciels d'entreprise pour la transformation numérique du Nouveau Koweït 2035",
      category: "Logiciels d'entreprise", readTime: "15 min", author: "Equipe Symloop", date: "2026-01-15", backLink: "Retour au Blog",
      intro: "Le marché des logiciels d'entreprise au Koweït connaît une croissance significative portée par la vision Nouveau Koweït 2035. Avec 4,5 millions d'habitants et une économie numérique de 3 milliards de dollars, plus de 65% des entreprises koweïtiennes numérisent leurs processus. Malgré une dépendance pétrolière de 80%+, le Koweït diversifie activement son économie créant une demande massive pour les systèmes ERP.",
      statsTitle: "Économie Numérique Koweït 2026",
      stats: [{ value: "4,5M+", label: "Population" }, { value: "3Mds$+", label: "Économie numérique" }, { value: "65%+", label: "Entreprises en numérisation" }, { value: "80%+", label: "Dépendance pétrolière" }],
      services: { title: "Nos Solutions ERP", subtitle: "Logiciels adaptés au marché koweïtien", list: [
        { icon: Database, title: "ERP Sur Mesure", description: "ERP complet pour entreprises koweïtiennes.", features: ["Gestion stocks", "Achats et supply chain", "Planification production", "Multi-succursales"] },
        { icon: Users, title: "CRM", description: "Gestion relation client pour le marché koweïtien.", features: ["Pipeline commercial", "Cycle de vie client", "Marketing automation", "Bilingue arabe/anglais"] },
        { icon: Briefcase, title: "RH & Paie", description: "GRH conforme au droit du travail koweïtien et PIFSS.", features: ["Gestion employés", "Conformité PIFSS", "Droit du travail Koweït", "Suivi koweïtisation"] },
        { icon: FileText, title: "Comptabilité", description: "Comptabilité avec conformité fiscale Koweït.", features: ["Conformité fiscale", "Multi-devises", "États financiers auto", "Dashboards temps réel"] }
      ] },
      erpEcosystem: { title: "Conformité Business Koweït", description: "Nos solutions ERP gèrent l'environnement unique du Koweït: PIFSS, droit du travail et registre commercial.",
        features: ["Intégration PIFSS et cotisations automatiques", "Conformité droit du travail koweïtien", "Suivi quotas de koweïtisation", "Gestion licences commerciales", "Multi-devises avec KWD", "Documents bilingues arabe-anglais", "Intégration banques Koweït", "Module financier prêt TVA"] },
      cities: { title: "Au Service des Entreprises au Koweït", list: [{ name: "Koweït City", desc: "Capitale" }, { name: "Hawalli", desc: "Centre commercial" }, { name: "Salmiya", desc: "Retail" }, { name: "Farwaniya", desc: "Industriel" }, { name: "Jahra", desc: "En croissance" }] },
      sectors: { title: "ERP par Secteur", subtitle: "Solutions sectorielles Koweït", list: [{ name: "Pétrole & Gaz", icon: Layers, desc: "Actifs, HSE, achats" }, { name: "Banque", icon: CreditCard, desc: "Core banking, conformité" }, { name: "Gouvernement", icon: Globe, desc: "E-services, documents" }, { name: "Construction", icon: Building2, desc: "Coûts projet, sous-traitants" }, { name: "Immobilier", icon: Building2, desc: "Gestion propriétés, locataires" }, { name: "Santé", icon: Shield, desc: "Patients, facturation, pharmacie" }, { name: "Retail", icon: ShoppingCart, desc: "POS, stocks" }, { name: "Éducation", icon: Award, desc: "Étudiants, frais" }, { name: "Télécoms", icon: Smartphone, desc: "Abonnés, facturation" }] },
      whyUs: { title: "Pourquoi Symloop pour votre ERP", reasons: [{ title: "Conformité Koweït", desc: "Expertise PIFSS et droit du travail.", icon: Shield }, { title: "Arabe d'Abord", desc: "RTL complet, interfaces bilingues.", icon: Globe }, { title: "Rapide", desc: "ERP en semaines, pas mois.", icon: Zap }, { title: "Évolutif", desc: "Cloud-native, 10 à 10 000 utilisateurs.", icon: TrendingUp }, { title: "Support Local", desc: "Équipe arabophone.", icon: MessageCircle }, { title: "Intégration", desc: "Banques et portails gouvernementaux.", icon: Layers }, { title: "Sécurité", desc: "Conforme réglementations Koweït.", icon: Lock }, { title: "Prouvé", desc: "Centaines d'implémentations.", icon: Award }] },
      pricing: { title: "Tarifs ERP Koweït", subtitle: "Prix en KWD.", plans: [
        { name: "ERP Basique", price: "À partir de 8 000 KWD", features: ["Comptabilité", "Stocks", "RH basique", "5 utilisateurs", "3 mois support"], color: "gray", popular: false },
        { name: "Suite Business", price: "À partir de 20 000 KWD", features: ["Tous modules", "CRM", "RH & Paie (PIFSS)", "25 utilisateurs", "12 mois support", "Rapports"], color: "cyan", popular: true },
        { name: "Enterprise", price: "À partir de 50 000 KWD", features: ["Toutes fonctions", "Multi-succursales", "Analyses avancées", "Illimité", "Support 24/7", "Dev sur mesure"], color: "gray", popular: false },
        { name: "Sur Mesure", price: "Sur Devis", features: ["Système bespoke", "Modules sectoriels", "Migration", "Équipe dédiée", "SLA", "On-premise"], color: "gray", popular: false }
      ] },
      faq: { title: "Questions Fréquentes", items: [
        { q: "Conforme aux réglementations Koweït ?", a: "Oui, PIFSS, droit du travail et réglementations commerciales." },
        { q: "Délai d'implémentation ?", a: "Basique: 4-6 semaines. Business: 2-4 mois. Enterprise: 4-8 mois." },
        { q: "Cloud ou on-premise ?", a: "Les deux avec hébergement Koweït ou contrôle total." },
        { q: "Support arabe ?", a: "Interface arabe RTL complète avec Hijri et bilingue." },
        { q: "Intégration banques ?", a: "Oui, banques koweïtiennes, KNET et portails gouvernementaux." }
      ] },
      cta: { title: "Prêt pour votre ERP ?", subtitle: "Consultation et démo gratuites", whatsapp: "Contacter WhatsApp", email: "Envoyer Email", phone: "+213549575512", emailAddr: "contact@symloop.com" },
      related: { title: "Articles Connexes", posts: [{ title: "Développement Web Koweït", slug: "web-development-company-kuwait-2026" }, { title: "E-Commerce Koweït KNET", slug: "ecommerce-solutions-kuwait-knet-2026" }, { title: "Transformation Numérique Koweït 2035", slug: "digital-transformation-kuwait-new-kuwait-2030" }] },
      seoKeywords: "ERP Koweït, logiciel gestion Koweït, CRM Koweït, RH paie Koweït, PIFSS, comptabilité Koweït, Nouveau Koweït 2035"
    }
  };

  const c = content[locale] || content.en;
  const jsonLdArticle = { "@context": "https://schema.org", "@type": "Article", "headline": c.title, "description": c.metaDescription, "author": { "@type": "Organization", "name": "Symloop" }, "publisher": { "@type": "Organization", "name": "Symloop", "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" } }, "datePublished": "2026-01-15", "dateModified": "2026-01-15", "mainEntityOfPage": { "@type": "WebPage", "@id": "https://symloop.com/blog/erp-business-software-kuwait-2026" }, "image": "https://symloop.com/logo.png", "inLanguage": locale, "keywords": c.seoKeywords };
  const jsonLdFaq = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": c.faq.items.map(item => ({ "@type": "Question", "name": item.q, "acceptedAnswer": { "@type": "Answer", "text": item.a } })) };
  const jsonLdLocalBusiness = { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "Symloop", "description": "ERP & Business Software Provider in Kuwait", "url": "https://symloop.com", "telephone": "+213549575512", "email": "contact@symloop.com", "areaServed": { "@type": "Country", "name": "Kuwait" }, "serviceArea": [{ "@type": "City", "name": "Kuwait City" }, { "@type": "City", "name": "Hawalli" }, { "@type": "City", "name": "Salmiya" }, { "@type": "City", "name": "Farwaniya" }, { "@type": "City", "name": "Jahra" }], "priceRange": "$$" };

  return (
    <>
      <Head>
        <title>{c.metaTitle}</title><meta name="description" content={c.metaDescription} /><meta name="keywords" content={c.seoKeywords} /><link rel="canonical" href="https://symloop.com/blog/erp-business-software-kuwait-2026" />
        <meta property="og:title" content={c.title} /><meta property="og:description" content={c.metaDescription} /><meta property="og:type" content="article" /><meta property="og:url" content="https://symloop.com/blog/erp-business-software-kuwait-2026" /><meta property="og:site_name" content="Symloop" />
        <meta property="og:image" content="https://symloop.com/logo.png" />
        <meta property="og:locale" content={locale === 'ar' ? 'ar_KW' : locale === 'en' ? 'en_US' : 'fr_FR'} />
        <meta property="article:published_time" content={c.date || "2026-01-15"} />
        <meta property="article:modified_time" content="2026-02-07" />
        <meta property="article:section" content={c.category} />
        <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content={c.title} /><meta name="twitter:description" content={c.metaDescription} />
        <meta name="robots" content="index, follow" /><meta name="author" content="Symloop" /><meta name="geo.region" content="KW" /><meta name="geo.placename" content="Kuwait" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/en/blog/erp-business-software-kuwait-2026" /><link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/blog/erp-business-software-kuwait-2026" /><link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/blog/erp-business-software-kuwait-2026" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://symloop.com" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" }, { "@type": "ListItem", "position": 3, "name": c.title }] }) }} />
      </Head>
      <article className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <section className="relative py-16 lg:py-24 overflow-hidden"><div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-black to-teal-500/10" /><div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 mb-8 transition-colors"><ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />{c.backLink}</Link><div className="flex flex-wrap items-center gap-3 mb-6"><span className="bg-cyan-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2"><Database className="w-4 h-4" />{c.category}</span><span className="text-gray-400 text-sm flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{c.readTime}</span></div><h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">{c.title.split('ERP').length > 1 ? (<>{c.title.split('ERP')[0]}<span className="text-cyan-400">ERP</span>{c.title.split('ERP')[1]}</>) : c.title}</h1><p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-3xl">{c.subtitle}</p><div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm"><div className="flex items-center gap-2"><User className="w-4 h-4" />{c.author}</div><div className="flex items-center gap-2"><Calendar className="w-4 h-4" />{c.date}</div><div className="flex items-center gap-2"><MapPin className="w-4 h-4" />Kuwait</div></div></div></section>
        <section className="py-12"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><p className="text-lg text-gray-300 leading-relaxed">{c.intro}</p>
            <p className="text-base text-gray-400 mt-6 leading-relaxed">
              {locale === 'ar'
                ? <>استكشف أيضاً <Link href="/services" className="text-cyan-400 hover:underline">خدماتنا الكاملة</Link> بما في ذلك <Link href="/blog/ecommerce-solutions-kuwait-knet-2026" className="text-cyan-400 hover:underline">حلول التجارة الإلكترونية في الكويت</Link> و<Link href="/blog/erp-business-software-uae-2026" className="text-cyan-400 hover:underline">برنامج ERP في الإمارات</Link>.</>
                : <>Explore our full range of <Link href="/services" className="text-cyan-400 hover:underline">IT services</Link>, including <Link href="/blog/ecommerce-solutions-kuwait-knet-2026" className="text-cyan-400 hover:underline">e-commerce solutions in Kuwait</Link> and <Link href="/blog/erp-business-software-uae-2026" className="text-cyan-400 hover:underline">ERP software in the UAE</Link>.</>
              }
            </p></div></section>
        <section className="py-12"><div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><div className="bg-gradient-to-r from-cyan-900/40 to-teal-800/20 border border-cyan-500/30 rounded-2xl p-8"><h2 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3"><TrendingUp className="w-6 h-6 text-cyan-400" />{c.statsTitle}</h2><div className="grid grid-cols-2 md:grid-cols-4 gap-6">{c.stats.map((s, i) => (<div key={i} className="text-center"><div className="text-3xl lg:text-4xl font-bold text-cyan-400">{s.value}</div><div className="text-sm text-gray-400 mt-2">{s.label}</div></div>))}</div></div></div></section>
        <section className="py-16"><div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{c.services.title}</h2><p className="text-gray-400 text-lg">{c.services.subtitle}</p></div><div className="grid md:grid-cols-2 gap-6">{c.services.list.map((s, i) => { const I = s.icon; return (<div key={i} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"><div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4"><I className="w-6 h-6 text-cyan-400" /></div><h3 className="text-xl font-bold text-white mb-3">{s.title}</h3><p className="text-gray-400 mb-4">{s.description}</p><ul className="space-y-2">{s.features.map((f, j) => (<li key={j} className="flex items-center gap-2 text-gray-300 text-sm"><CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />{f}</li>))}</ul></div>); })}</div></div></section>

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
        <section className="py-16"><div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><div className="bg-gradient-to-br from-cyan-900/30 to-gray-900 border border-cyan-500/20 rounded-2xl p-8 lg:p-12"><div className="flex items-start gap-4 mb-6"><div className="w-14 h-14 bg-cyan-500/20 rounded-2xl flex items-center justify-center flex-shrink-0"><FileText className="w-7 h-7 text-cyan-400" /></div><div><h2 className="text-3xl font-bold text-white mb-2">{c.erpEcosystem.title}</h2></div></div><p className="text-gray-300 leading-relaxed mb-8">{c.erpEcosystem.description}</p><div className="grid sm:grid-cols-2 gap-3">{c.erpEcosystem.features.map((f, i) => (<div key={i} className="flex items-start gap-3 bg-black/30 rounded-xl p-3"><CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" /><span className="text-gray-300 text-sm">{f}</span></div>))}</div></div></div></section>
        <section className="py-16"><div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3"><MapPin className="w-6 h-6 text-cyan-400" />{c.cities.title}</h2><div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">{c.cities.list.map((city, i) => (<div key={i} className="bg-gray-900/60 border border-gray-800 rounded-xl p-4 text-center hover:border-cyan-500/50 transition-colors"><div className="text-white font-semibold mb-1">{city.name}</div><div className="text-gray-500 text-xs">{city.desc}</div></div>))}</div></div></section>
        <section className="py-16"><div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{c.sectors.title}</h2><p className="text-gray-400 text-lg">{c.sectors.subtitle}</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{c.sectors.list.map((s, i) => { const SI = s.icon; return (<div key={i} className="bg-gray-900/40 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group"><div className="flex items-center gap-3 mb-2"><div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors"><SI className="w-5 h-5 text-cyan-400" /></div><h3 className="text-white font-semibold">{s.name}</h3></div><p className="text-gray-500 text-sm">{s.desc}</p></div>); })}</div></div></section>
        <section className="py-16"><div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">{c.whyUs.title}</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{c.whyUs.reasons.map((r, i) => { const RI = r.icon; return (<div key={i} className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-all duration-300"><div className="w-11 h-11 bg-cyan-500/15 rounded-xl flex items-center justify-center mb-4"><RI className="w-5 h-5 text-cyan-400" /></div><h3 className="text-white font-bold mb-2 text-sm">{r.title}</h3><p className="text-gray-500 text-xs leading-relaxed">{r.desc}</p></div>); })}</div></div></section>
        <section className="py-16"><div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{c.pricing.title}</h2><p className="text-gray-400 text-lg">{c.pricing.subtitle}</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{c.pricing.plans.map((p, i) => (<div key={i} className={`relative rounded-2xl p-6 transition-all duration-300 ${p.popular ? 'bg-cyan-900/30 border-2 border-cyan-500' : 'bg-gray-900/60 border border-gray-800 hover:border-gray-700'}`}>{p.popular && (<div className="absolute -top-3 left-1/2 transform -translate-x-1/2"><span className="bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"><Star className="w-3 h-3" />{locale === 'ar' ? 'الأكثر طلباً' : locale === 'fr' ? 'Populaire' : 'Popular'}</span></div>)}<h3 className="text-lg font-bold text-white mb-2 mt-2">{p.name}</h3><div className={`text-xl font-bold mb-5 ${p.popular ? 'text-cyan-400' : 'text-gray-300'}`}>{p.price}</div><ul className="space-y-2.5">{p.features.map((f, j) => (<li key={j} className="flex items-start gap-2 text-gray-400 text-sm"><CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${p.popular ? 'text-cyan-500' : 'text-gray-600'}`} />{f}</li>))}</ul></div>))}</div></div></section>
        <section className="py-16"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold text-white mb-10 text-center">{c.faq.title}</h2><div className="space-y-6">{c.faq.items.map((item, i) => (<div key={i} className="bg-gray-900/40 border border-gray-800 rounded-xl p-6"><h3 className="text-lg font-semibold text-white mb-3 flex items-start gap-3"><span className="text-cyan-400 font-bold text-xl leading-none mt-0.5">Q</span>{item.q}</h3><p className="text-gray-400 leading-relaxed pl-8">{item.a}</p></div>))}</div></div></section>
        <section className="py-16"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div className="bg-gradient-to-r from-cyan-600 to-teal-500 rounded-2xl p-8 lg:p-12 text-center"><h2 className="text-3xl font-bold text-white mb-4">{c.cta.title}</h2><p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto">{c.cta.subtitle}</p><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><a href="https://wa.me/213549575512" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-cyan-700 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-50 transition-colors w-full sm:w-auto justify-center"><Phone className="w-5 h-5" />{c.cta.whatsapp}</a><a href={`mailto:${c.cta.emailAddr}`} className="inline-flex items-center gap-2 bg-cyan-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-cyan-800 transition-colors border border-cyan-400/30 w-full sm:w-auto justify-center"><Mail className="w-5 h-5" />{c.cta.email}</a></div><div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-cyan-100 text-sm"><span className="flex items-center gap-1"><Phone className="w-4 h-4" />{c.cta.phone}</span><span className="flex items-center gap-1"><Mail className="w-4 h-4" />{c.cta.emailAddr}</span></div></div></div></section>
        <section className="py-16 border-t border-gray-800"><div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="text-2xl font-bold text-white mb-8">{c.related.title}</h2><div className="grid md:grid-cols-3 gap-5">{c.related.posts.map((post, i) => (<Link key={i} href={`/blog/${post.slug}`} className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block"><h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">{post.title}</h3><span className="text-cyan-500 text-sm flex items-center gap-1">{locale === 'ar' ? 'اقرأ المزيد' : locale === 'fr' ? 'Lire la suite' : 'Read more'}<ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? '' : 'rotate-180'}`} /></span></Link>))}
            </div>

            <h3 className="text-lg font-semibold text-gray-400 mt-8 mb-4">
              {locale === 'ar' ? 'المزيد من خدماتنا في المنطقة' : 'More From Our Regional Coverage'}
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              <Link href="/blog/erp-business-software-saudi-arabia-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'برنامج ERP في السعودية' : 'ERP Software in Saudi Arabia'}
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
              <Link href="/blog/artificial-intelligence-solutions-kuwait-2026" className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-colors group block">
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                  {locale === 'ar' ? 'حلول الذكاء الاصطناعي في الكويت' : 'AI Solutions in Kuwait'}
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

export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
