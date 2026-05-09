"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import {
  Building2,
  FileText,
  Users,
  GraduationCap,
  HeartPulse,
  Scale,
  Landmark,
  Car,
  Home,
  Briefcase,
  Truck,
  Vote,
  Phone,
  Mail,
  CheckCircle,
  ArrowRight,
  Brain,
  Code,
  Database,
  Shield,
  Zap,
  Globe,
  Clock,
  TrendingUp,
  Award,
  Layers,
  Server,
  Smartphone,
  Monitor,
  Cloud,
  Lock,
  Settings,
  FileCheck,
  UserCheck,
  MapPin,
  BarChart3,
  Cpu,
  ChevronDown,
  ChevronUp,
  Star,
  Target,
  Rocket,
  Lightbulb,
  HandshakeIcon,
  BadgeCheck,
  CircleCheck,
  PlayCircle
} from "lucide-react";

export default function DigitalisationAlgerie() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isRTL = router.locale === 'ar';
  const currentLang = router.locale || 'fr';
  const [openFaq, setOpenFaq] = useState(null);

  // Government sectors that can be digitized
  const sectors = [
    {
      icon: FileText,
      name: "الحالة المدنية",
      nameFr: "État Civil",
      nameEn: "Civil Registry",
      description: "رقمنة شهادات الميلاد، الزواج، الوفاة. استخراج الوثائق إلكترونياً.",
      descriptionFr: "Digitalisation des actes de naissance, mariage, décès. Extraction électronique des documents.",
      descriptionEn: "Digitization of birth, marriage, death certificates. Electronic document extraction.",
      services: ["شهادة الميلاد الإلكترونية", "شهادة الزواج", "شهادة الوفاة", "السجل العائلي"],
      slug: "etat-civil"
    },
    {
      icon: Building2,
      name: "البلديات والدوائر",
      nameFr: "Communes & Daïras",
      nameEn: "Municipalities",
      description: "رقمنة الخدمات البلدية. طلبات التراخيص والشهادات عبر الإنترنت.",
      descriptionFr: "Digitalisation des services communaux. Demandes de permis et certificats en ligne.",
      descriptionEn: "Municipal services digitization. Online permit and certificate applications.",
      services: ["رخص البناء", "الشهادات الإدارية", "التصاريح", "الضرائب المحلية"],
      slug: "communes"
    },
    {
      icon: Scale,
      name: "العدالة والقضاء",
      nameFr: "Justice",
      nameEn: "Justice System",
      description: "رقمنة المحاكم. إدارة الملفات القضائية إلكترونياً. التقاضي عن بعد.",
      descriptionFr: "Digitalisation des tribunaux. Gestion électronique des dossiers judiciaires.",
      descriptionEn: "Courts digitization. Electronic case management. Remote litigation.",
      services: ["إدارة القضايا", "السجل العدلي", "التبليغات الإلكترونية", "المحاكمات عن بعد"],
      slug: "justice",
      hasPage: true,
      pageUrl: "/solutions/digitalisation-justice-algerie"
    },
    {
      icon: GraduationCap,
      name: "التربية والتعليم",
      nameFr: "Éducation",
      nameEn: "Education",
      description: "رقمنة المدارس والجامعات. منصات التعليم الإلكتروني. إدارة الطلاب.",
      descriptionFr: "Digitalisation des écoles et universités. Plateformes e-learning.",
      descriptionEn: "Schools and universities digitization. E-learning platforms.",
      services: ["كشوف النقاط", "التسجيل الإلكتروني", "المكتبة الرقمية", "التعليم عن بعد"],
      slug: "education",
      hasPage: true,
      pageUrl: "/solutions/digitalisation-education-algerie"
    },
    {
      icon: HeartPulse,
      name: "الصحة",
      nameFr: "Santé",
      nameEn: "Healthcare",
      description: "رقمنة المستشفيات والعيادات. الملف الطبي الإلكتروني. الحجز عبر الإنترنت.",
      descriptionFr: "Digitalisation des hôpitaux. Dossier médical électronique. Rendez-vous en ligne.",
      descriptionEn: "Hospital digitization. Electronic medical records. Online appointments.",
      services: ["الملف الطبي الموحد", "حجز المواعيد", "الروشتة الإلكترونية", "التطبيب عن بعد"],
      slug: "sante",
      hasPage: true,
      pageUrl: "/solutions/digitalisation-sante-algerie"
    },
    {
      icon: Landmark,
      name: "المالية والضرائب",
      nameFr: "Finances & Impôts",
      nameEn: "Finance & Taxes",
      description: "رقمنة التصريحات الضريبية. الدفع الإلكتروني. إدارة الميزانية.",
      descriptionFr: "Digitalisation des déclarations fiscales. Paiement électronique.",
      descriptionEn: "Tax declaration digitization. Electronic payment. Budget management.",
      services: ["التصريح الضريبي", "الدفع الإلكتروني", "جباية الجمارك", "الصفقات العمومية"],
      slug: "finances"
    },
    {
      icon: Users,
      name: "الوظيف العمومي",
      nameFr: "Fonction Publique",
      nameEn: "Public Service",
      description: "رقمنة إدارة الموظفين. التوظيف الإلكتروني. إدارة الرواتب.",
      descriptionFr: "Digitalisation GRH. Recrutement électronique. Gestion des salaires.",
      descriptionEn: "HR digitization. E-recruitment. Payroll management.",
      services: ["مسابقات التوظيف", "إدارة الحضور", "كشف الراتب", "طلبات العطل"],
      slug: "fonction-publique"
    },
    {
      icon: Car,
      name: "النقل والمرور",
      nameFr: "Transport",
      nameEn: "Transport",
      description: "رقمنة رخص السياقة. البطاقة الرمادية الإلكترونية. مخالفات المرور.",
      descriptionFr: "Permis de conduire numérique. Carte grise électronique. Contraventions.",
      descriptionEn: "Digital driving license. Electronic registration. Traffic violations.",
      services: ["رخصة السياقة", "البطاقة الرمادية", "مخالفات المرور", "حجز المواعيد"],
      slug: "transport"
    },
    {
      icon: Home,
      name: "السكن والعمران",
      nameFr: "Habitat & Urbanisme",
      nameEn: "Housing & Urban Planning",
      description: "رقمنة طلبات السكن. رخص البناء الإلكترونية. التعمير الذكي.",
      descriptionFr: "Demandes de logement en ligne. Permis de construire électroniques.",
      descriptionEn: "Online housing applications. Electronic building permits.",
      services: ["طلب السكن AADL/LPP", "رخصة البناء", "شهادة المطابقة", "التعمير"],
      slug: "habitat"
    },
    {
      icon: Briefcase,
      name: "التجارة والسجل التجاري",
      nameFr: "Commerce",
      nameEn: "Commerce",
      description: "رقمنة السجل التجاري. إنشاء المؤسسات إلكترونياً. التراخيص التجارية.",
      descriptionFr: "Registre de commerce numérique. Création d'entreprises en ligne.",
      descriptionEn: "Digital commercial registry. Online business creation.",
      services: ["السجل التجاري", "إنشاء المؤسسة", "التراخيص", "الاستيراد والتصدير"],
      slug: "commerce"
    },
    {
      icon: Vote,
      name: "الانتخابات",
      nameFr: "Élections",
      nameEn: "Elections",
      description: "رقمنة العملية الانتخابية. التصويت الإلكتروني. إدارة القوائم الانتخابية.",
      descriptionFr: "Digitalisation du processus électoral. Vote électronique.",
      descriptionEn: "Electoral process digitization. Electronic voting.",
      services: ["القوائم الانتخابية", "بطاقة الناخب", "نتائج الانتخابات", "الترشح الإلكتروني"],
      slug: "elections"
    },
    {
      icon: Shield,
      name: "الأمن والشرطة",
      nameFr: "Sécurité & Police",
      nameEn: "Security & Police",
      description: "رقمنة الخدمات الأمنية. جواز السفر البيومتري. بطاقة التعريف الإلكترونية.",
      descriptionFr: "Services de sécurité numériques. Passeport biométrique.",
      descriptionEn: "Digital security services. Biometric passport.",
      services: ["جواز السفر", "بطاقة التعريف", "شهادة السوابق", "التأشيرات"],
      slug: "securite"
    }
  ];

  // Symloop's digitization services
  const digitizationServices = [
    {
      icon: Code,
      title: "تطوير البرمجيات المخصصة",
      titleFr: "Développement sur mesure",
      titleEn: "Custom Software Development",
      description: "برمجيات مخصصة لكل قطاع حكومي. تطبيقات ويب وموبايل متكاملة.",
      descriptionFr: "Logiciels sur mesure pour chaque secteur gouvernemental.",
      descriptionEn: "Custom software for each government sector."
    },
    {
      icon: Brain,
      title: "الذكاء الاصطناعي",
      titleFr: "Intelligence Artificielle",
      titleEn: "Artificial Intelligence",
      description: "أتمتة المعاملات بالذكاء الاصطناعي. روبوتات الدردشة للمواطنين. OCR عربي.",
      descriptionFr: "Automatisation IA des procédures. Chatbots citoyens. OCR arabe.",
      descriptionEn: "AI automation of procedures. Citizen chatbots. Arabic OCR."
    },
    {
      icon: Database,
      title: "إدارة البيانات",
      titleFr: "Gestion des données",
      titleEn: "Data Management",
      description: "قواعد بيانات آمنة ومتكاملة. تحليلات البيانات الضخمة. لوحات القيادة.",
      descriptionFr: "Bases de données sécurisées. Big Data analytics. Tableaux de bord.",
      descriptionEn: "Secure databases. Big Data analytics. Dashboards."
    },
    {
      icon: Cloud,
      title: "الحوسبة السحابية",
      titleFr: "Cloud Computing",
      titleEn: "Cloud Computing",
      description: "استضافة سحابية سيادية. بنية تحتية قابلة للتوسع. نسخ احتياطي آمن.",
      descriptionFr: "Cloud souverain. Infrastructure scalable. Sauvegarde sécurisée.",
      descriptionEn: "Sovereign cloud. Scalable infrastructure. Secure backup."
    },
    {
      icon: Lock,
      title: "الأمن السيبراني",
      titleFr: "Cybersécurité",
      titleEn: "Cybersecurity",
      description: "حماية البيانات الحساسة. تشفير متقدم. مراقبة التهديدات 24/7.",
      descriptionFr: "Protection des données sensibles. Chiffrement avancé. Monitoring 24/7.",
      descriptionEn: "Sensitive data protection. Advanced encryption. 24/7 monitoring."
    },
    {
      icon: Smartphone,
      title: "تطبيقات المواطن",
      titleFr: "Applications Citoyen",
      titleEn: "Citizen Apps",
      description: "تطبيقات موبايل للخدمات الحكومية. واجهة سهلة الاستخدام. إشعارات فورية.",
      descriptionFr: "Apps mobiles services publics. Interface intuitive. Notifications.",
      descriptionEn: "Mobile apps for public services. Intuitive interface. Notifications."
    }
  ];

  // Process steps for HowTo schema
  const processSteps = [
    {
      step: 1,
      title: "تحليل الاحتياجات",
      titleFr: "Analyse des besoins",
      titleEn: "Needs Analysis",
      description: "دراسة شاملة للقطاع الحكومي وتحديد متطلبات الرقمنة",
      descriptionFr: "Étude complète du secteur et identification des besoins de digitalisation",
      descriptionEn: "Comprehensive study of the sector and identification of digitization needs"
    },
    {
      step: 2,
      title: "تصميم الحل",
      titleFr: "Conception de la solution",
      titleEn: "Solution Design",
      description: "تصميم البنية التقنية والواجهات وقواعد البيانات",
      descriptionFr: "Conception de l'architecture technique, interfaces et bases de données",
      descriptionEn: "Design of technical architecture, interfaces and databases"
    },
    {
      step: 3,
      title: "التطوير والبرمجة",
      titleFr: "Développement",
      titleEn: "Development",
      description: "برمجة التطبيقات والأنظمة باستخدام أحدث التقنيات",
      descriptionFr: "Programmation des applications avec les dernières technologies",
      descriptionEn: "Programming applications using the latest technologies"
    },
    {
      step: 4,
      title: "الاختبار والتدريب",
      titleFr: "Tests et formation",
      titleEn: "Testing & Training",
      description: "اختبار شامل وتدريب الموظفين على استخدام النظام",
      descriptionFr: "Tests complets et formation du personnel",
      descriptionEn: "Comprehensive testing and staff training"
    },
    {
      step: 5,
      title: "الإطلاق والدعم",
      titleFr: "Lancement et support",
      titleEn: "Launch & Support",
      description: "إطلاق النظام مع دعم فني مستمر 24/7",
      descriptionFr: "Lancement du système avec support technique 24/7",
      descriptionEn: "System launch with 24/7 technical support"
    }
  ];

  // Benefits of digitization
  const benefits = [
    { icon: Clock, value: "90%", label: "تقليص وقت المعاملات", labelFr: "Réduction délais", labelEn: "Time reduction" },
    { icon: TrendingUp, value: "70%", label: "زيادة الكفاءة", labelFr: "Gain efficacité", labelEn: "Efficiency gain" },
    { icon: Users, value: "100%", label: "وصول للمواطنين", labelFr: "Accès citoyens", labelEn: "Citizen access" },
    { icon: Shield, value: "99.9%", label: "أمان البيانات", labelFr: "Sécurité données", labelEn: "Data security" }
  ];

  // Extended FAQ for SEO
  const faqs = [
    {
      q: { ar: "ما هي الرقمنة؟", fr: "Qu'est-ce que la digitalisation ?", en: "What is digitization?" },
      a: {
        ar: "الرقمنة هي تحويل الخدمات والعمليات التقليدية إلى خدمات إلكترونية رقمية، مما يسهل الوصول إليها ويحسن كفاءتها ويقلل من الوقت والتكلفة. في الجزائر، تشمل الرقمنة تحويل جميع الخدمات الحكومية مثل الحالة المدنية والتعليم والصحة إلى منصات رقمية.",
        fr: "La digitalisation est la transformation des services traditionnels en services numériques électroniques, facilitant l'accès, améliorant l'efficacité et réduisant les délais et coûts. En Algérie, cela inclut la transformation de tous les services gouvernementaux.",
        en: "Digitization is the conversion of traditional services and processes into digital electronic services, making them easier to access, improving efficiency, and reducing time and cost."
      }
    },
    {
      q: { ar: "كيف تساعد Symloop في رقمنة القطاع الحكومي؟", fr: "Comment Symloop aide à digitaliser le secteur gouvernemental ?", en: "How does Symloop help digitize the government sector?" },
      a: {
        ar: "توفر Symloop حلولاً برمجية متكاملة وذكاء اصطناعي لرقمنة جميع القطاعات الحكومية. نقدم تطبيقات ويب وموبايل، قواعد بيانات آمنة، أنظمة إدارة إلكترونية، وروبوتات دردشة ذكية لخدمة المواطنين.",
        fr: "Symloop fournit des solutions logicielles intégrées et l'IA pour digitaliser tous les secteurs gouvernementaux avec des applications web et mobile sécurisées.",
        en: "Symloop provides integrated software solutions and AI for digitizing all government sectors with secure web and mobile applications."
      }
    },
    {
      q: { ar: "ما هي القطاعات التي يمكن رقمنتها؟", fr: "Quels secteurs peuvent être digitalisés ?", en: "What sectors can be digitized?" },
      a: {
        ar: "يمكن رقمنة جميع القطاعات الحكومية: الحالة المدنية، البلديات، العدالة، التعليم، الصحة، المالية والضرائب، الوظيف العمومي، النقل، السكن، التجارة، الانتخابات، والأمن. كل قطاع له متطلبات خاصة ونقدم حلولاً مخصصة لكل منها.",
        fr: "Tous les secteurs gouvernementaux: état civil, communes, justice, éducation, santé, finances, fonction publique, transport, habitat, commerce, élections, et sécurité.",
        en: "All government sectors: civil registry, municipalities, justice, education, health, finance, public service, transport, housing, commerce, elections, and security."
      }
    },
    {
      q: { ar: "هل البيانات آمنة في الأنظمة الرقمية؟", fr: "Les données sont-elles sécurisées ?", en: "Is data secure in digital systems?" },
      a: {
        ar: "نعم، نستخدم أحدث تقنيات الأمن السيبراني: تشفير AES-256، مصادقة متعددة العوامل، مراقبة 24/7، نسخ احتياطي منتظم، والامتثال للمعايير الدولية ISO 27001.",
        fr: "Oui, nous utilisons les dernières technologies de cybersécurité: chiffrement AES-256, authentification multi-facteurs, monitoring 24/7.",
        en: "Yes, we use the latest cybersecurity technologies: AES-256 encryption, multi-factor authentication, 24/7 monitoring."
      }
    },
    {
      q: { ar: "كم تكلفة مشروع الرقمنة؟", fr: "Combien coûte un projet de digitalisation ?", en: "How much does a digitization project cost?" },
      a: {
        ar: "تختلف التكلفة حسب حجم المشروع وتعقيده. نقدم استشارة مجانية ودراسة تفصيلية لتحديد الميزانية المناسبة. المشاريع الصغيرة تبدأ من 500,000 دج والمشاريع الكبيرة قد تصل إلى عدة ملايين.",
        fr: "Le coût varie selon la taille et la complexité. Nous offrons une consultation gratuite pour déterminer le budget approprié.",
        en: "Cost varies based on project size and complexity. We offer free consultation to determine the appropriate budget."
      }
    },
    {
      q: { ar: "ما هي مدة تنفيذ مشروع الرقمنة؟", fr: "Quelle est la durée d'un projet de digitalisation ?", en: "How long does a digitization project take?" },
      a: {
        ar: "تعتمد المدة على حجم المشروع: المشاريع الصغيرة 2-3 أشهر، المتوسطة 4-6 أشهر، والكبيرة 6-12 شهر. نستخدم منهجية أجايل للتسليم التدريجي.",
        fr: "La durée dépend de la taille: petits projets 2-3 mois, moyens 4-6 mois, grands 6-12 mois.",
        en: "Duration depends on size: small projects 2-3 months, medium 4-6 months, large 6-12 months."
      }
    },
    {
      q: { ar: "هل توفرون التدريب للموظفين؟", fr: "Offrez-vous une formation au personnel ?", en: "Do you provide staff training?" },
      a: {
        ar: "نعم، نقدم تدريباً شاملاً لجميع الموظفين على استخدام النظام الجديد، مع توفير أدلة استخدام ودعم فني مستمر بعد الإطلاق.",
        fr: "Oui, nous offrons une formation complète pour tout le personnel avec guides d'utilisation et support continu.",
        en: "Yes, we provide comprehensive training for all staff with user guides and ongoing support."
      }
    },
    {
      q: { ar: "ما هي التقنيات المستخدمة في الرقمنة؟", fr: "Quelles technologies utilisez-vous ?", en: "What technologies do you use?" },
      a: {
        ar: "نستخدم أحدث التقنيات: React/Next.js للويب، Flutter للموبايل، Laravel/Node.js للخوادم، PostgreSQL/MongoDB لقواعد البيانات، والذكاء الاصطناعي مع Python وTensorFlow.",
        fr: "Nous utilisons les dernières technologies: React/Next.js, Flutter, Laravel/Node.js, PostgreSQL/MongoDB, et l'IA avec Python.",
        en: "We use the latest technologies: React/Next.js, Flutter, Laravel/Node.js, PostgreSQL/MongoDB, and AI with Python."
      }
    },
    {
      q: { ar: "هل يمكن دمج النظام مع الأنظمة الموجودة؟", fr: "Le système peut-il s'intégrer aux systèmes existants ?", en: "Can the system integrate with existing systems?" },
      a: {
        ar: "نعم، نصمم جميع أنظمتنا مع واجهات برمجة التطبيقات (APIs) للتكامل السلس مع أي نظام موجود، سواء كان نظام إدارة أو قاعدة بيانات قديمة.",
        fr: "Oui, tous nos systèmes sont conçus avec des APIs pour une intégration transparente avec les systèmes existants.",
        en: "Yes, all our systems are designed with APIs for seamless integration with existing systems."
      }
    },
    {
      q: { ar: "ما هو الدعم الفني المقدم بعد الإطلاق؟", fr: "Quel support technique après le lancement ?", en: "What technical support after launch?" },
      a: {
        ar: "نقدم دعماً فنياً على مدار الساعة 24/7، مع صيانة دورية، تحديثات أمنية، ومراقبة مستمرة للأداء. نوفر أيضاً خط ساخن للطوارئ.",
        fr: "Support 24/7, maintenance régulière, mises à jour de sécurité, et monitoring continu des performances.",
        en: "24/7 support, regular maintenance, security updates, and continuous performance monitoring."
      }
    },
    {
      q: { ar: "كيف يتم حماية خصوصية المواطنين؟", fr: "Comment protégez-vous la vie privée des citoyens ?", en: "How do you protect citizen privacy?" },
      a: {
        ar: "نلتزم بأعلى معايير حماية البيانات الشخصية، مع تشفير كامل، صلاحيات وصول محددة، سجلات تتبع، والامتثال للقوانين الجزائرية والدولية لحماية الخصوصية.",
        fr: "Nous respectons les normes les plus élevées de protection des données avec chiffrement, contrôle d'accès et conformité légale.",
        en: "We comply with the highest data protection standards with encryption, access control, and legal compliance."
      }
    },
    {
      q: { ar: "هل يمكن الوصول للخدمات عبر الهاتف المحمول؟", fr: "Les services sont-ils accessibles sur mobile ?", en: "Are services accessible on mobile?" },
      a: {
        ar: "نعم، جميع أنظمتنا متوافقة مع الهواتف المحمولة، مع تطبيقات مخصصة لـ Android و iOS تتيح للمواطنين الوصول للخدمات من أي مكان.",
        fr: "Oui, tous nos systèmes sont mobile-friendly avec des applications dédiées Android et iOS.",
        en: "Yes, all our systems are mobile-friendly with dedicated Android and iOS applications."
      }
    },
    {
      q: { ar: "ما هي فوائد الرقمنة للمواطن الجزائري؟", fr: "Quels sont les avantages pour le citoyen algérien ?", en: "What are the benefits for Algerian citizens?" },
      a: {
        ar: "توفير الوقت والجهد، إنجاز المعاملات من المنزل، تقليل البيروقراطية، شفافية أكبر، متابعة حالة الطلبات إلكترونياً، وخدمة متاحة 24/7.",
        fr: "Gain de temps, démarches depuis chez soi, moins de bureaucratie, plus de transparence, suivi en ligne, service 24/7.",
        en: "Time saving, transactions from home, less bureaucracy, more transparency, online tracking, 24/7 service."
      }
    },
    {
      q: { ar: "هل تعملون مع القطاع الخاص أيضاً؟", fr: "Travaillez-vous aussi avec le secteur privé ?", en: "Do you work with the private sector too?" },
      a: {
        ar: "نعم، نقدم خدمات الرقمنة للقطاعين العام والخاص. الشركات الخاصة يمكنها الاستفادة من نفس التقنيات لتحسين عملياتها الداخلية وخدمة عملائها.",
        fr: "Oui, nous servons les secteurs public et privé avec les mêmes technologies de pointe.",
        en: "Yes, we serve both public and private sectors with the same cutting-edge technologies."
      }
    },
    {
      q: { ar: "كيف أبدأ مشروع الرقمنة مع Symloop؟", fr: "Comment démarrer un projet avec Symloop ?", en: "How to start a project with Symloop?" },
      a: {
        ar: "اتصل بنا للحصول على استشارة مجانية عبر الهاتف +213 549 57 55 12 أو البريد الإلكتروني contact@symloop.com. سنقوم بدراسة احتياجاتك وتقديم عرض مفصل.",
        fr: "Contactez-nous pour une consultation gratuite au +213 549 57 55 12 ou contact@symloop.com.",
        en: "Contact us for a free consultation at +213 549 57 55 12 or contact@symloop.com."
      }
    }
  ];

  // Algerian wilayas
  const wilayas = [
    "الجزائر", "وهران", "قسنطينة", "عنابة", "سطيف", "باتنة", "بجاية", "تلمسان",
    "البليدة", "مستغانم", "الشلف", "تيزي وزو", "سكيكدة", "سيدي بلعباس", "بسكرة",
    "الجلفة", "المسيلة", "ورقلة", "البويرة", "تيارت", "برج بوعريريج", "بومرداس"
  ];

  // Comprehensive Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    "name": currentLang === 'ar' ? "رقمنة الخدمات الحكومية في الجزائر - Symloop" : "Government Digitization Services Algeria - Symloop",
    "alternateName": ["رقمنة", "الرقمنة", "رقمنة أي قطاع", "التحول الرقمي الجزائر", "digitalisation Algérie", "e-gouvernement", "digitization Algeria"],
    "description": currentLang === 'ar'
      ? "سيملوب الشريك الرقمي للحكومة الجزائرية. رقمنة جميع القطاعات الحكومية: الحالة المدنية، العدالة، التعليم، الصحة، المالية. حلول برمجية وذكاء اصطناعي متقدم لخدمة 45 مليون مواطن جزائري."
      : "Symloop - Digital partner for Algerian government. Digitization of all sectors using AI and modern software.",
    "serviceType": ["رقمنة الخدمات الحكومية", "التحول الرقمي", "الحكومة الإلكترونية", "Government digitization", "E-government"],
    "provider": {
      "@type": "Organization",
      "name": "Symloop Technology",
      "url": "https://symloop.com",
      "logo": "https://symloop.com/sym-logo.png",
      "foundingDate": "2012",
      "address": { "@type": "PostalAddress", "addressLocality": "Alger", "addressCountry": "DZ" },
      "contactPoint": { "@type": "ContactPoint", "telephone": "+213-549-57-55-12", "contactType": "sales", "availableLanguage": ["Arabic", "French", "English"] },
      "sameAs": ["https://facebook.com/symloop", "https://linkedin.com/company/symloop"]
    },
    "areaServed": { "@type": "Country", "name": "Algeria" },
    "audience": { "@type": "GovernmentAudience", "audienceType": "Government Agencies" },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://symloop.com/solutions/digitalisation-algerie",
      "servicePhone": "+213-549-57-55-12"
    }
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": currentLang === 'ar' ? "كيفية رقمنة الخدمات الحكومية في الجزائر" : "How to Digitize Government Services in Algeria",
    "description": currentLang === 'ar' ? "دليل خطوة بخطوة لرقمنة أي قطاع حكومي مع Symloop" : "Step-by-step guide to digitize any government sector with Symloop",
    "totalTime": "P6M",
    "estimatedCost": { "@type": "MonetaryAmount", "currency": "DZD", "value": "500000-5000000" },
    "step": processSteps.map((step, idx) => ({
      "@type": "HowToStep",
      "position": idx + 1,
      "name": currentLang === 'ar' ? step.title : step.titleFr,
      "text": currentLang === 'ar' ? step.description : step.descriptionFr
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q[currentLang] || faq.q.fr,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a[currentLang] || faq.a.fr }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": currentLang === 'ar' ? "الرئيسية" : "Accueil", "item": "https://symloop.com" },
      { "@type": "ListItem", "position": 2, "name": currentLang === 'ar' ? "الحلول" : "Solutions", "item": "https://symloop.com/services" },
      { "@type": "ListItem", "position": 3, "name": currentLang === 'ar' ? "رقمنة الخدمات الحكومية" : "Digitalisation Gouvernementale", "item": "https://symloop.com/solutions/digitalisation-algerie" }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Symloop Technology",
    "alternateName": ["سيملوب", "Symloop"],
    "url": "https://symloop.com",
    "logo": "https://symloop.com/sym-logo.png",
    "description": currentLang === 'ar' ? "شركة تكنولوجيا جزائرية متخصصة في رقمنة الخدمات الحكومية والتحول الرقمي" : "Algerian technology company specialized in government digitization",
    "foundingDate": "2012",
    "founders": [{ "@type": "Person", "name": "Symloop Team" }],
    "address": { "@type": "PostalAddress", "streetAddress": "Alger Centre", "addressLocality": "Alger", "addressRegion": "Alger", "postalCode": "16000", "addressCountry": "DZ" },
    "contactPoint": [
      { "@type": "ContactPoint", "telephone": "+213-549-57-55-12", "contactType": "sales", "areaServed": "DZ", "availableLanguage": ["Arabic", "French", "English"] }
    ],
    "sameAs": ["https://facebook.com/symloop", "https://linkedin.com/company/symloop", "https://twitter.com/symloop"]
  };

  return (
    <>
      <Head>
        <title>{
          currentLang === 'ar'
            ? "رقمنة الخدمات الحكومية في الجزائر | رقمنة أي قطاع | التحول الرقمي - Symloop"
            : currentLang === 'en'
            ? "Government Digitization Algeria | Digitize Any Sector | E-Government - Symloop"
            : "Digitalisation Services Gouvernementaux Algérie | E-Gouvernement - Symloop"
        }</title>
        <meta name="description" content={
          currentLang === 'ar'
            ? "رقمنة جميع القطاعات الحكومية في الجزائر مع Symloop. الحالة المدنية، العدالة، التعليم، الصحة، المالية، النقل. حلول برمجية وذكاء اصطناعي متقدم. استشارة مجانية ☎ +213549575512"
            : currentLang === 'en'
            ? "Digitization of all government sectors in Algeria with Symloop. Civil registry, justice, education, health, finance. Advanced AI solutions. Free consultation ☎ +213549575512"
            : "Digitalisation de tous les secteurs gouvernementaux en Algérie avec Symloop. État civil, justice, éducation, santé. Solutions IA avancées. Consultation gratuite ☎ +213549575512"
        } />
        <meta name="keywords" content="رقمنة, الرقمنة, رقمنة أي قطاع, رقمنة الجزائر, رقمنة الخدمات الحكومية, التحول الرقمي الجزائر, الحكومة الإلكترونية الجزائر, رقمنة الحالة المدنية, رقمنة البلديات, رقمنة العدالة, رقمنة التعليم, رقمنة الصحة, رقمنة المالية, رقمنة النقل, رقمنة السكن, رقمنة التجارة, شهادة الميلاد الإلكترونية, السجل التجاري الإلكتروني, رخصة البناء الإلكترونية, الملف الطبي الإلكتروني, e-gouvernement algérie, digitalisation algérie, transformation digitale algérie, services publics numériques, administration électronique, dématérialisation, digitization algeria, e-government algeria, digital transformation algeria, government software, AI government, smart government, حكومة ذكية, الجزائر الرقمية, symloop, سيملوب" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://symloop.com/solutions/digitalisation-algerie" />
        <meta property="og:title" content={currentLang === 'ar' ? "رقمنة الخدمات الحكومية في الجزائر - Symloop" : "Government Digitization Algeria - Symloop"} />
        <meta property="og:description" content={currentLang === 'ar' ? "رقمنة جميع القطاعات الحكومية: الحالة المدنية، العدالة، التعليم، الصحة. حلول برمجية وذكاء اصطناعي." : "Digitization of all sectors: civil registry, justice, education, health. Software and AI solutions."} />
        <meta property="og:image" content="https://symloop.com/og-digitalization.png" />
        <meta property="og:locale" content={currentLang === 'ar' ? 'ar_DZ' : currentLang === 'en' ? 'en_US' : 'fr_DZ'} />
        <meta property="og:site_name" content="Symloop Technology" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@symloop" />
        <meta name="twitter:title" content="Symloop - رقمنة الخدمات الحكومية" />
        <meta name="twitter:description" content={currentLang === 'ar' ? "رقمنة أي قطاع حكومي مع Symloop" : "Digitalization of any government sector with Symloop"} />
        <meta name="twitter:image" content="https://symloop.com/og-digitalization.png" />

        {/* Hreflang for international SEO */}
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/solutions/digitalisation-algerie" />
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/solutions/digitalisation-algerie" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/en/solutions/digitalisation-algerie" />
        <link rel="alternate" hrefLang="ar-DZ" href="https://symloop.com/ar/solutions/digitalisation-algerie" />
        <link rel="alternate" hrefLang="fr-DZ" href="https://symloop.com/fr/solutions/digitalisation-algerie" />
        <link rel="alternate" hrefLang="x-default" href="https://symloop.com/solutions/digitalisation-algerie" />
        <link rel="canonical" href="https://symloop.com/solutions/digitalisation-algerie" />

        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Symloop Technology" />
        <meta name="geo.region" content="DZ" />
        <meta name="geo.placename" content="Algeria" />
        <meta name="geo.position" content="36.737232;3.086472" />
        <meta name="ICBM" content="36.737232, 3.086472" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </Head>

      <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>

        {/* Breadcrumb Navigation */}
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-emerald-600">{currentLang === 'ar' ? 'الرئيسية' : 'Accueil'}</Link></li>
            <li>/</li>
            <li><Link href="/services" className="hover:text-emerald-600">{currentLang === 'ar' ? 'الخدمات' : 'Services'}</Link></li>
            <li>/</li>
            <li className="text-emerald-600 font-medium">{currentLang === 'ar' ? 'رقمنة الخدمات الحكومية' : 'Digitalisation'}</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="relative py-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-blue-600/10 to-emerald-600/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto relative">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
                <Cpu className="w-4 h-4" />
                {currentLang === 'ar' ? "الشريك الرقمي للحكومة الجزائرية" : "Partenaire Digital du Gouvernement Algérien"}
              </div>

              {/* Main Title - H1 with target keywords */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  {currentLang === 'ar' ? "رقمنة أي قطاع حكومي" : currentLang === 'en' ? "Digitize Any Government Sector" : "Digitaliser Tout Secteur Gouvernemental"}
                </span>
              </h1>

              <h2 className="text-2xl md:text-3xl text-gray-700 mb-4">
                {currentLang === 'ar' ? "التحول الرقمي للخدمات الحكومية في الجزائر" : "Transformation Digitale des Services Gouvernementaux en Algérie"}
              </h2>

              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                {currentLang === 'ar'
                  ? "Symloop تساعد الهيئات الحكومية والإدارات العمومية على رقمنة خدماتها باستخدام أحدث تقنيات البرمجة والذكاء الاصطناعي. من الحالة المدنية إلى العدالة، من التعليم إلى الصحة - نرقمن أي قطاع لخدمة 45 مليون مواطن جزائري."
                  : "Symloop aide les organismes gouvernementaux à digitaliser leurs services avec les dernières technologies et l'IA. De l'état civil à la justice, de l'éducation à la santé - nous digitalisons tout secteur."}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <motion.a href="https://wa.me/213549575512" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                  <Phone className="w-5 h-5" />
                  {currentLang === 'ar' ? "استشارة مجانية" : "Consultation Gratuite"}
                </motion.a>
                <motion.a href="mailto:contact@symloop.com" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all border-2 border-emerald-200">
                  <Mail className="w-5 h-5" />
                  contact@symloop.com
                </motion.a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {benefits.map((stat, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <stat.icon className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-gray-600 mt-2 text-sm">{currentLang === 'ar' ? stat.label : stat.labelFr}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Government Sectors Section */}
        <section className="py-16 px-4 bg-white" id="sectors">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  {currentLang === 'ar' ? "القطاعات الحكومية التي نرقمنها" : "Secteurs Gouvernementaux que Nous Digitalisons"}
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {currentLang === 'ar' ? "نرقمن جميع الخدمات الحكومية لخدمة المواطن الجزائري بكفاءة وشفافية" : "Nous digitalisons tous les services pour servir le citoyen avec efficacité"}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((sector, idx) => {
                const CardContent = (
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-100 rounded-xl group-hover:bg-emerald-200 transition-colors">
                      <sector.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{currentLang === 'ar' ? sector.name : sector.nameFr}</h3>
                        {sector.hasPage && (
                          <span className="px-2 py-0.5 bg-emerald-600 text-white rounded-full text-xs font-medium">
                            {currentLang === 'ar' ? 'صفحة مخصصة' : 'Page dédiée'}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{currentLang === 'ar' ? sector.description : sector.descriptionFr}</p>
                      <div className="flex flex-wrap gap-2">
                        {sector.services.slice(0, 3).map((service, sidx) => (
                          <span key={sidx} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">{service}</span>
                        ))}
                      </div>
                      {sector.hasPage && (
                        <div className="mt-4 flex items-center gap-2 text-emerald-600 font-medium text-sm group-hover:text-emerald-700">
                          <span>{currentLang === 'ar' ? 'اكتشف المزيد' : 'En savoir plus'}</span>
                          <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                        </div>
                      )}
                    </div>
                  </div>
                );

                return sector.hasPage ? (
                  <Link href={sector.pageUrl} key={idx}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                      className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                      {CardContent}
                    </motion.div>
                  </Link>
                ) : (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                    className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300">
                    {CardContent}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section - HowTo */}
        <section className="py-16 px-4 bg-gradient-to-br from-emerald-50 to-blue-50" id="process">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  {currentLang === 'ar' ? "كيف نرقمن قطاعك الحكومي؟" : "Comment Digitalisons-Nous Votre Secteur ?"}
                </span>
              </h2>
              <p className="text-xl text-gray-600">{currentLang === 'ar' ? "5 خطوات لتحويل خدماتك إلى خدمات رقمية" : "5 étapes pour transformer vos services"}</p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-4">
              {processSteps.map((step, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg relative">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{step.step}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{currentLang === 'ar' ? step.title : step.titleFr}</h3>
                  <p className="text-gray-600 text-sm">{currentLang === 'ar' ? step.description : step.descriptionFr}</p>
                  {idx < processSteps.length - 1 && <ArrowRight className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 w-8 h-8 text-emerald-400 z-10" />}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-white" id="services">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  {currentLang === 'ar' ? "خدماتنا للرقمنة" : "Nos Services de Digitalisation"}
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {digitizationServices.map((service, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                  <div className="p-4 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl w-fit mb-6">
                    <service.icon className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentLang === 'ar' ? service.title : service.titleFr}</h3>
                  <p className="text-gray-600">{currentLang === 'ar' ? service.description : service.descriptionFr}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50" id="faq">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  {currentLang === 'ar' ? "الأسئلة الشائعة حول الرقمنة" : "Questions Fréquentes sur la Digitalisation"}
                </span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full px-6 py-4 flex items-center justify-between text-left">
                    <span className="font-semibold text-gray-900">{faq.q[currentLang] || faq.q.fr}</span>
                    {openFaq === idx ? <ChevronUp className="w-5 h-5 text-emerald-600" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.a[currentLang] || faq.a.fr}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {currentLang === 'ar' ? "تغطية جميع الولايات الـ 58" : "Couverture des 58 Wilayas"}
              </span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {wilayas.map((wilaya, idx) => (
                <span key={idx} className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-blue-50 text-gray-700 rounded-full text-sm font-medium border border-gray-200">
                  <MapPin className="w-3 h-3 inline mr-1" />{wilaya}
                </span>
              ))}
              <span className="px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-medium">+ 36 {currentLang === 'ar' ? "ولاية أخرى" : "autres wilayas"}</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {currentLang === 'ar' ? "ابدأ رحلة الرقمنة الآن" : "Commencez Votre Digitalisation Maintenant"}
            </h2>
            <p className="text-xl mb-8 text-white/90">
              {currentLang === 'ar' ? "استشارة مجانية + دراسة تفصيلية لمشروعك" : "Consultation gratuite + étude détaillée de votre projet"}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a href="tel:+213549575512" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 rounded-full font-semibold shadow-lg">
                <Phone className="w-5 h-5" /> +213 549 57 55 12
              </motion.a>
              <motion.a href="mailto:contact@symloop.com" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold">
                <Mail className="w-5 h-5" /> contact@symloop.com
              </motion.a>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{currentLang === 'ar' ? "رقمنة الخدمات الحكومية في الجزائر - التحول الرقمي الشامل" : "Digitalisation des Services Gouvernementaux en Algérie"}</h2>
            <p className="text-gray-600 mb-4">
              {currentLang === 'ar'
                ? "تقدم شركة Symloop حلولاً متكاملة لرقمنة جميع القطاعات الحكومية في الجزائر. نساعد الهيئات الحكومية على التحول الرقمي باستخدام أحدث تقنيات البرمجة والذكاء الاصطناعي. من رقمنة الحالة المدنية وشهادات الميلاد إلى رقمنة المحاكم والعدالة، من رقمنة التعليم والمدارس إلى رقمنة الصحة والمستشفيات، من رقمنة المالية والضرائب إلى رقمنة النقل والمرور."
                : "Symloop fournit des solutions intégrées pour digitaliser tous les secteurs gouvernementaux en Algérie avec les dernières technologies de programmation et l'IA."}
            </p>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{currentLang === 'ar' ? "لماذا تختار Symloop لرقمنة قطاعك الحكومي؟" : "Pourquoi Choisir Symloop ?"}</h3>
            <ul className="text-gray-600 space-y-2">
              <li>{currentLang === 'ar' ? "✓ خبرة +10 سنوات في تطوير البرمجيات الحكومية" : "✓ +10 ans d'expérience en développement gouvernemental"}</li>
              <li>{currentLang === 'ar' ? "✓ فريق مطورين محترفين متخصصين في الذكاء الاصطناعي" : "✓ Équipe d'experts en IA"}</li>
              <li>{currentLang === 'ar' ? "✓ أمان عالي وحماية البيانات الحكومية" : "✓ Haute sécurité et protection des données"}</li>
              <li>{currentLang === 'ar' ? "✓ دعم فني 24/7 في جميع الولايات الـ 58" : "✓ Support 24/7 dans les 58 wilayas"}</li>
            </ul>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-8 px-4 bg-white border-t">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">{currentLang === 'ar' ? "خدمات أخرى:" : "Autres Services:"}</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/solutions/intelligence-artificielle-algerie" className="text-emerald-600 hover:underline">{currentLang === 'ar' ? "الذكاء الاصطناعي في الجزائر" : "IA en Algérie"}</Link>
              <Link href="/services" className="text-emerald-600 hover:underline">{currentLang === 'ar' ? "جميع الخدمات" : "Tous les Services"}</Link>
              <Link href="/blog" className="text-emerald-600 hover:underline">{currentLang === 'ar' ? "المدونة" : "Blog"}</Link>
              <Link href="/locations/alger" className="text-emerald-600 hover:underline">{currentLang === 'ar' ? "الجزائر العاصمة" : "Alger"}</Link>
            </div>
          </div>
        </section>

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
