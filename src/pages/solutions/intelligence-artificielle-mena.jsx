"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  Brain,
  MessageSquare,
  Mic,
  Eye,
  TrendingUp,
  Shield,
  Cpu,
  Database,
  Bot,
  Sparkles,
  Phone,
  Mail,
  CheckCircle,
  ArrowRight,
  Building2,
  Factory,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Truck,
  Landmark,
  Briefcase,
  MapPin,
  Globe,
  Users,
  Network,
  Zap,
  Target,
  Award,
  Layers
} from "lucide-react";

export default function AIMENA() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isRTL = router.locale === 'ar';
  const [activeService, setActiveService] = useState(0);
  const currentLang = router.locale || 'fr';

  const aiServices = [
    {
      icon: MessageSquare,
      title: "Chatbots IA MENA",
      titleAr: "روبوتات الدردشة الذكية الشرق الأوسط",
      titleEn: "MENA AI Chatbots",
      description: "Chatbots multilingues pour la région MENA. Support arabe (MSA + dialectes), français, anglais. Intégration WhatsApp, Telegram, sites web.",
      descriptionAr: "روبوتات دردشة متعددة اللغات لمنطقة الشرق الأوسط وشمال أفريقيا. دعم العربية واللهجات والفرنسية والإنجليزية.",
      descriptionEn: "Multilingual chatbots for MENA region. Support for Arabic (MSA + dialects), French, English. WhatsApp, Telegram, website integration.",
      features: ["Service 24/7", "Multi-dialecte", "IA conversationnelle", "Intégrations API"],
      featuresAr: ["خدمة 24/7", "متعدد اللهجات", "ذكاء اصطناعي محادثة", "تكاملات API"],
      featuresEn: ["24/7 service", "Multi-dialect", "Conversational AI", "API integrations"]
    },
    {
      icon: Mic,
      title: "NLP Arabe Avancé",
      titleAr: "معالجة اللغة الطبيعية العربية",
      titleEn: "Advanced Arabic NLP",
      description: "Traitement du langage naturel pour l'arabe moderne et dialectal. Analyse sentiment, extraction entités, traduction automatique.",
      descriptionAr: "معالجة متقدمة للغة العربية الفصحى والعامية. تحليل المشاعر واستخراج الكيانات والترجمة الآلية.",
      descriptionEn: "Natural language processing for Modern Standard Arabic and dialects. Sentiment analysis, entity extraction, machine translation.",
      features: ["MSA + dialectes", "Analyse sentiment", "Traduction IA", "Speech-to-text"],
      featuresAr: ["الفصحى والعامية", "تحليل المشاعر", "ترجمة آلية", "تحويل الصوت لنص"],
      featuresEn: ["MSA + dialects", "Sentiment analysis", "AI translation", "Speech-to-text"]
    },
    {
      icon: Eye,
      title: "Vision IA Industries",
      titleAr: "الرؤية الذكية للصناعات",
      titleEn: "Industrial Computer Vision",
      description: "Solutions de vision par ordinateur pour pétrole, gaz, construction, manufacture. Détection anomalies, contrôle qualité, sécurité.",
      descriptionAr: "حلول رؤية حاسوبية للنفط والغاز والبناء والتصنيع. كشف الشذوذ ومراقبة الجودة والسلامة.",
      descriptionEn: "Computer vision for oil & gas, construction, manufacturing. Anomaly detection, quality control, safety monitoring.",
      features: ["Pétrole & Gaz", "Construction", "Manufacture", "Sécurité IA"],
      featuresAr: ["النفط والغاز", "البناء", "التصنيع", "السلامة بالذكاء"],
      featuresEn: ["Oil & Gas", "Construction", "Manufacturing", "AI Safety"]
    },
    {
      icon: TrendingUp,
      title: "IA Finance Islamique",
      titleAr: "الذكاء الاصطناعي للتمويل الإسلامي",
      titleEn: "Islamic Finance AI",
      description: "Solutions IA conformes à la Charia. Scoring crédit halal, détection fraude, robo-advisory islamique, zakat automation.",
      descriptionAr: "حلول ذكاء اصطناعي متوافقة مع الشريعة. تصنيف ائتماني حلال وكشف الاحتيال والاستشارات الآلية.",
      descriptionEn: "Sharia-compliant AI solutions. Halal credit scoring, fraud detection, Islamic robo-advisory, zakat automation.",
      features: ["Conformité Charia", "Scoring halal", "Zakat auto", "Robo-advisory"],
      featuresAr: ["توافق شرعي", "تصنيف حلال", "زكاة آلية", "استشارات آلية"],
      featuresEn: ["Sharia compliance", "Halal scoring", "Auto zakat", "Robo-advisory"]
    },
    {
      icon: Shield,
      title: "Cybersécurité MENA",
      titleAr: "الأمن السيبراني الشرق الأوسط",
      titleEn: "MENA Cybersecurity AI",
      description: "Protection avancée contre cybermenaces régionales. Détection APT, protection infrastructures critiques, conformité régionale.",
      descriptionAr: "حماية متقدمة من التهديدات السيبرانية الإقليمية. كشف التهديدات المستمرة وحماية البنية التحتية.",
      descriptionEn: "Advanced protection against regional cyber threats. APT detection, critical infrastructure protection, regional compliance.",
      features: ["Détection APT", "Infra critique", "Conformité", "SOC IA"],
      featuresAr: ["كشف APT", "البنية الحرجة", "الامتثال", "مركز عمليات"],
      featuresEn: ["APT detection", "Critical infra", "Compliance", "AI SOC"]
    },
    {
      icon: Database,
      title: "Big Data & Analytics",
      titleAr: "البيانات الضخمة والتحليلات",
      titleEn: "Big Data & Analytics",
      description: "Analyse de données massives pour gouvernements et entreprises MENA. Smart cities, e-gouvernement, business intelligence.",
      descriptionAr: "تحليل البيانات الضخمة للحكومات والشركات. المدن الذكية والحكومة الإلكترونية وذكاء الأعمال.",
      descriptionEn: "Massive data analysis for MENA governments and enterprises. Smart cities, e-government, business intelligence.",
      features: ["Smart cities", "E-gouvernement", "BI avancée", "Real-time analytics"],
      featuresAr: ["المدن الذكية", "الحكومة الإلكترونية", "ذكاء الأعمال", "تحليلات فورية"],
      featuresEn: ["Smart cities", "E-government", "Advanced BI", "Real-time analytics"]
    }
  ];

  const countries = [
    { name: "Algérie", nameAr: "الجزائر", nameEn: "Algeria", cities: "Alger, Oran, Constantine", flag: "🇩🇿" },
    { name: "Maroc", nameAr: "المغرب", nameEn: "Morocco", cities: "Casablanca, Rabat, Marrakech", flag: "🇲🇦" },
    { name: "Tunisie", nameAr: "تونس", nameEn: "Tunisia", cities: "Tunis, Sfax, Sousse", flag: "🇹🇳" },
    { name: "Égypte", nameAr: "مصر", nameEn: "Egypt", cities: "Le Caire, Alexandrie, Gizeh", flag: "🇪🇬" },
    { name: "Arabie Saoudite", nameAr: "السعودية", nameEn: "Saudi Arabia", cities: "Riyad, Djeddah, Dammam", flag: "🇸🇦" },
    { name: "EAU", nameAr: "الإمارات", nameEn: "UAE", cities: "Dubai, Abu Dhabi, Sharjah", flag: "🇦🇪" },
    { name: "Qatar", nameAr: "قطر", nameEn: "Qatar", cities: "Doha, Al Wakrah, Al Khor", flag: "🇶🇦" },
    { name: "Koweït", nameAr: "الكويت", nameEn: "Kuwait", cities: "Kuwait City, Hawalli, Salmiya", flag: "🇰🇼" },
    { name: "Bahreïn", nameAr: "البحرين", nameEn: "Bahrain", cities: "Manama, Muharraq, Riffa", flag: "🇧🇭" },
    { name: "Oman", nameAr: "عمان", nameEn: "Oman", cities: "Mascate, Salalah, Sohar", flag: "🇴🇲" },
    { name: "Jordanie", nameAr: "الأردن", nameEn: "Jordan", cities: "Amman, Zarqa, Irbid", flag: "🇯🇴" },
    { name: "Liban", nameAr: "لبنان", nameEn: "Lebanon", cities: "Beyrouth, Tripoli, Saida", flag: "🇱🇧" },
    { name: "Palestine", nameAr: "فلسطين", nameEn: "Palestine", cities: "Ramallah, Gaza, Naplouse", flag: "🇵🇸" },
    { name: "Irak", nameAr: "العراق", nameEn: "Iraq", cities: "Bagdad, Bassora, Erbil", flag: "🇮🇶" },
    { name: "Libye", nameAr: "ليبيا", nameEn: "Libya", cities: "Tripoli, Benghazi, Misrata", flag: "🇱🇾" },
    { name: "Soudan", nameAr: "السودان", nameEn: "Sudan", cities: "Khartoum, Omdurman, Kassala", flag: "🇸🇩" },
    { name: "Yémen", nameAr: "اليمن", nameEn: "Yemen", cities: "Sanaa, Aden, Taïz", flag: "🇾🇪" },
    { name: "Mauritanie", nameAr: "موريتانيا", nameEn: "Mauritania", cities: "Nouakchott, Nouadhibou", flag: "🇲🇷" }
  ];

  const industries = [
    { icon: Building2, name: "Pétrole & Gaz", nameAr: "النفط والغاز", examples: "Saudi Aramco, ADNOC, Sonatrach, QatarEnergy" },
    { icon: Landmark, name: "Banques", nameAr: "البنوك", examples: "QNB, Emirates NBD, NCB, Attijariwafa Bank" },
    { icon: Phone, name: "Télécom", nameAr: "الاتصالات", examples: "STC, Etisalat, Zain, Ooredoo, Orange" },
    { icon: HeartPulse, name: "Santé", nameAr: "الصحة", examples: "Saudi German Hospital, Mediclinic, Cleveland Clinic" },
    { icon: GraduationCap, name: "Éducation", nameAr: "التعليم", examples: "KAUST, AUC, NYU Abu Dhabi, Sorbonne Abu Dhabi" },
    { icon: Factory, name: "Industrie", nameAr: "الصناعة", examples: "SABIC, Ma'aden, Emirates Steel, OCP Group" },
    { icon: ShoppingBag, name: "Retail", nameAr: "التجزئة", examples: "Majid Al Futtaim, Alshaya, BinDawood, Carrefour" },
    { icon: Truck, name: "Logistique", nameAr: "اللوجستيات", examples: "DP World, Aramex, Agility, DHL MENA" }
  ];

  const stats = [
    { value: "500M+", label: "Population MENA", labelAr: "سكان المنطقة" },
    { value: "22", label: "Pays couverts", labelAr: "دولة مغطاة" },
    { value: "$4T", label: "PIB région", labelAr: "الناتج المحلي" },
    { value: "60%", label: "Jeunes <30 ans", labelAr: "شباب أقل من 30" }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Intelligence Artificielle MENA - Leader IA Moyen-Orient Afrique du Nord",
    "alternateName": ["IA MENA", "AI MENA", "الذكاء الاصطناعي الشرق الأوسط وشمال أفريقيا"],
    "description": "Leader des solutions d'intelligence artificielle dans la région MENA. Services IA pour 22 pays: Algérie, Maroc, Tunisie, Égypte, Arabie Saoudite, EAU, Qatar, et plus. Chatbots multilingues, NLP arabe, vision par ordinateur, finance islamique IA.",
    "provider": {
      "@type": "Organization",
      "name": "Symloop Technology",
      "url": "https://symloop.com",
      "logo": "https://symloop.com/sym-logo.png"
    },
    "areaServed": [
      { "@type": "Place", "name": "Middle East and North Africa" },
      { "@type": "Country", "name": "Algeria" },
      { "@type": "Country", "name": "Morocco" },
      { "@type": "Country", "name": "Tunisia" },
      { "@type": "Country", "name": "Egypt" },
      { "@type": "Country", "name": "Saudi Arabia" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "Qatar" },
      { "@type": "Country", "name": "Kuwait" },
      { "@type": "Country", "name": "Bahrain" },
      { "@type": "Country", "name": "Oman" },
      { "@type": "Country", "name": "Jordan" },
      { "@type": "Country", "name": "Lebanon" },
      { "@type": "Country", "name": "Iraq" },
      { "@type": "Country", "name": "Libya" },
      { "@type": "Country", "name": "Sudan" },
      { "@type": "Country", "name": "Yemen" },
      { "@type": "Country", "name": "Mauritania" }
    ],
    "serviceType": [
      "Artificial Intelligence MENA",
      "Machine Learning Middle East",
      "Deep Learning North Africa",
      "Arabic NLP Services",
      "Islamic Finance AI",
      "Smart Cities MENA",
      "E-Government AI Solutions"
    ]
  };

  return (
    <>
      <Head>
        <title>{
          currentLang === 'ar'
            ? "الذكاء الاصطناعي الشرق الأوسط وشمال أفريقيا | حلول IA متقدمة MENA"
            : currentLang === 'en'
            ? "MENA AI Solutions | Artificial Intelligence Middle East North Africa"
            : "Intelligence Artificielle MENA | Solutions IA Moyen-Orient Afrique du Nord"
        }</title>
        <meta name="description" content={
          currentLang === 'ar'
            ? "رائد حلول الذكاء الاصطناعي في منطقة الشرق الأوسط وشمال أفريقيا. خدمات IA لـ22 دولة عربية. معالجة اللغة العربية، رؤية حاسوبية، تمويل إسلامي ذكي."
            : currentLang === 'en'
            ? "Leading AI solutions provider in MENA region. AI services for 22 Arab countries. Arabic NLP, computer vision, Islamic finance AI, smart cities."
            : "Leader IA dans la région MENA. Services intelligence artificielle pour 22 pays arabes. NLP arabe, vision par ordinateur, finance islamique IA."
        } />
        <meta name="keywords" content="intelligence artificielle MENA, IA MENA, AI MENA, artificial intelligence middle east, artificial intelligence north africa, الذكاء الاصطناعي الشرق الأوسط, الذكاء الاصطناعي شمال أفريقيا, machine learning MENA, deep learning MENA, chatbot MENA, NLP arabe, arabic NLP, معالجة اللغة العربية الطبيعية, vision par ordinateur MENA, computer vision middle east, finance islamique IA, islamic finance AI, التمويل الإسلامي الذكي, smart cities MENA, المدن الذكية الشرق الأوسط, e-government MENA, الحكومة الإلكترونية, IA Algérie, IA Maroc, IA Tunisie, IA Égypte, IA Arabie Saoudite, IA EAU, IA Qatar, IA Koweït, IA Bahreïn, IA Oman, IA Jordanie, IA Liban, IA Palestine, IA Irak, IA Libye, IA Soudan, IA Yémen, IA Mauritanie, AI Algeria, AI Morocco, AI Tunisia, AI Egypt, AI Saudi Arabia, AI UAE, AI Qatar, AI Kuwait, AI Bahrain, AI Oman, AI Jordan, AI Lebanon, AI Palestine, AI Iraq, AI Libya, AI Sudan, AI Yemen, AI Mauritania, الذكاء الاصطناعي الجزائر, الذكاء الاصطناعي المغرب, الذكاء الاصطناعي تونس, الذكاء الاصطناعي مصر, الذكاء الاصطناعي السعودية, الذكاء الاصطناعي الإمارات, الذكاء الاصطناعي قطر, الذكاء الاصطناعي الكويت, الذكاء الاصطناعي البحرين, الذكاء الاصطناعي عمان, الذكاء الاصطناعي الأردن, الذكاء الاصطناعي لبنان, الذكاء الاصطناعي فلسطين, الذكاء الاصطناعي العراق, الذكاء الاصطناعي ليبيا, الذكاء الاصطناعي السودان, الذكاء الاصطناعي اليمن, الذكاء الاصطناعي موريتانيا, Saudi Aramco AI, ADNOC AI, Sonatrach AI, QatarEnergy AI, QNB AI, Emirates NBD AI, NCB AI, Attijariwafa Bank AI, STC AI, Etisalat AI, Zain AI, Ooredoo AI, Orange MENA AI, SABIC AI, Ma'aden AI, Emirates Steel AI, OCP Group AI, DP World AI, Aramex AI, Agility AI, DHL MENA AI, Majid Al Futtaim AI, Alshaya AI, BinDawood AI, Carrefour MENA AI, développeur IA MENA, expert IA Moyen-Orient, consultant IA Afrique du Nord, ingénieur IA pays arabes, data scientist MENA, ML engineer middle east, مطور الذكاء الاصطناعي, خبير الذكاء الاصطناعي, مهندس تعلم الآلة, عالم البيانات, transformation digitale MENA, digital transformation middle east, التحول الرقمي الشرق الأوسط, industrie 4.0 MENA, الصناعة 4.0, pétrole gaz IA, oil gas AI, النفط والغاز الذكاء الاصطناعي, banque islamique IA, islamic banking AI, المصرفية الإسلامية الذكية, halal fintech, حلال فينتك, sharia compliant AI, متوافق مع الشريعة, zakat automation, الزكاة الآلية, waqf technology, تقنية الوقف, sukuk AI, صكوك ذكية, takaful AI, التكافل الذكي, murabaha AI, المرابحة الذكية, ijara AI, الإجارة الذكية, musharaka AI, المشاركة الذكية, NEOM AI, نيوم الذكاء الاصطناعي, vision 2030 AI, رؤية 2030, expo 2020 AI, مصر 2030, maroc 2030, algérie 2030, tunisia 2030, GCC AI, مجلس التعاون الخليجي, ligue arabe AI, الجامعة العربية, union maghreb arabe AI, اتحاد المغرب العربي, MENA startup, startup ecosystem MENA, écosystème startup MENA, بيئة الشركات الناشئة, innovation MENA, ابتكار الشرق الأوسط, tech hub MENA, مركز التكنولوجيا, silicon oasis dubai, dubai internet city, KAUST AI, king abdullah university, masdar city AI, مدينة مصدر, cairo smart village, قرية ذكية القاهرة, casablanca finance city AI, technopole casablanca, cyber park maroc, tunisia tech, algerian tech, egyptian tech, saudi tech, emirati tech, qatari tech, lebanese tech, jordanian tech, R&D MENA, recherche développement MENA, البحث والتطوير, innovation lab MENA, مختبر الابتكار, incubateur MENA, حاضنة أعمال, accelerateur MENA, مسرع أعمال, venture capital MENA, رأس المال المخاطر, private equity MENA, الأسهم الخاصة, investissement IA MENA, استثمار الذكاء الاصطناعي, fonds souverain AI, صندوق سيادي, PIF saudi arabia, صندوق الاستثمارات العامة, mubadala AI, مبادلة, ADQ abu dhabi, QIA qatar, qatar investment authority, formation IA MENA, تدريب الذكاء الاصطناعي, certification IA MENA, شهادة الذكاء الاصطناعي, université IA MENA, جامعة الذكاء الاصطناعي, master IA MENA, ماجستير الذكاء الاصطناعي, doctorat IA MENA, دكتوراه الذكاء الاصطناعي, hackathon MENA, هاكاثون, conference IA MENA, مؤتمر الذكاء الاصطناعي, summit AI MENA, قمة الذكاء الاصطناعي, forum IA MENA, منتدى الذكاء الاصطناعي, expo IA MENA, معرض الذكاء الاصطناعي, gitex dubai AI, جيتكس دبي, cairo ICT, leap saudi, QITCOM qatar, meet ICT algeria, tunisia digital summit, morocco digital summit, régulation IA MENA, تنظيم الذكاء الاصطناعي, éthique IA MENA, أخلاقيات الذكاء الاصطناعي, gouvernance IA MENA, حوكمة الذكاء الاصطناعي, protection données MENA, حماية البيانات, GDPR MENA, cybersécurité MENA, الأمن السيبراني, souveraineté numérique MENA, السيادة الرقمية, localisation données MENA, توطين البيانات, cloud souverain MENA, السحابة السيادية, 5G MENA, شبكة الجيل الخامس, IoT MENA, إنترنت الأشياء, blockchain MENA, بلوك تشين, crypto MENA, العملات المشفرة, NFT MENA, metaverse MENA, ميتافيرس, web3 MENA, robotique MENA, الروبوتات, drone MENA, الطائرات بدون طيار, autonomous vehicles MENA, المركبات ذاتية القيادة, quantum computing MENA, الحوسبة الكمية, edge computing MENA, الحوسبة الطرفية, fog computing MENA, الحوسبة الضبابية, HPC MENA, الحوسبة عالية الأداء, supercomputer MENA, الحاسوب الفائق, data center MENA, مركز البيانات, green tech MENA, التكنولوجيا الخضراء, cleantech MENA, التكنولوجيا النظيفة, renewable energy AI, الطاقة المتجددة الذكية, solar AI MENA, الطاقة الشمسية الذكية, wind AI MENA, طاقة الرياح الذكية, water tech MENA, تكنولوجيا المياه, agritech MENA, التكنولوجيا الزراعية, foodtech MENA, تكنولوجيا الغذاء, healthtech MENA, تكنولوجيا الصحة, medtech MENA, التكنولوجيا الطبية, biotech MENA, التكنولوجيا الحيوية, pharmatech MENA, تكنولوجيا الأدوية, insurtech MENA, تكنولوجيا التأمين, proptech MENA, تكنولوجيا العقارات, legaltech MENA, التكنولوجيا القانونية, regtech MENA, تكنولوجيا التنظيم, govtech MENA, تكنولوجيا الحكومة, civic tech MENA, التكنولوجيا المدنية, social tech MENA, التكنولوجيا الاجتماعية, impact tech MENA, تكنولوجيا الأثر, SDG MENA, أهداف التنمية المستدامة, ESG MENA, الحوكمة البيئية والاجتماعية, CSR MENA, المسؤولية الاجتماعية, sustainability AI MENA, الاستدامة الذكية, circular economy MENA, الاقتصاد الدائري, sharing economy MENA, الاقتصاد التشاركي, gig economy MENA, اقتصاد الوظائف المؤقتة, creator economy MENA, اقتصاد المبدعين, knowledge economy MENA, اقتصاد المعرفة, API economy MENA, اقتصاد واجهات البرمجة, platform economy MENA, اقتصاد المنصات, data economy MENA, اقتصاد البيانات, attention economy MENA, اقتصاد الانتباه, experience economy MENA, اقتصاد التجربة" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://symloop.com/solutions/intelligence-artificielle-mena" />
        <meta property="og:title" content={
          currentLang === 'ar'
            ? "الذكاء الاصطناعي MENA - حلول IA متقدمة للشرق الأوسط وشمال أفريقيا"
            : currentLang === 'en'
            ? "MENA AI Solutions - Leading Artificial Intelligence Provider"
            : "Intelligence Artificielle MENA - Leader IA Moyen-Orient Afrique du Nord"
        } />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Symloop - Intelligence Artificielle MENA" />

        {/* Hreflang tags */}
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/solutions/intelligence-artificielle-mena" />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/solutions/intelligence-artificielle-mena" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/en/solutions/intelligence-artificielle-mena" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />

          <div className="max-w-7xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {currentLang === 'ar' ? "الذكاء الاصطناعي MENA" : currentLang === 'en' ? "MENA Artificial Intelligence" : "Intelligence Artificielle MENA"}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                {currentLang === 'ar'
                  ? "رائد حلول الذكاء الاصطناعي في منطقة الشرق الأوسط وشمال أفريقيا"
                  : currentLang === 'en'
                  ? "Leading AI Solutions Provider in Middle East & North Africa"
                  : "Leader des solutions IA au Moyen-Orient et en Afrique du Nord"}
              </p>

              {/* Countries Coverage */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {countries.map((country, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                    {country.flag} {currentLang === 'ar' ? country.nameAr : currentLang === 'en' ? country.nameEn : country.name}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg"
                  >
                    <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-gray-600 mt-2">
                      {currentLang === 'ar' ? stat.labelAr : stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              {currentLang === 'ar' ? "حلول الذكاء الاصطناعي" : currentLang === 'en' ? "AI Solutions" : "Solutions IA"}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiServices.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => setActiveService(idx)}
                >
                  <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">
                    {currentLang === 'ar' ? service.titleAr : currentLang === 'en' ? service.titleEn : service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {currentLang === 'ar' ? service.descriptionAr : currentLang === 'en' ? service.descriptionEn : service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(currentLang === 'ar' ? service.featuresAr : currentLang === 'en' ? service.featuresEn : service.features).map((feature, fidx) => (
                      <span key={fidx} className="px-3 py-1 bg-white/80 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              {currentLang === 'ar' ? "الصناعات المخدومة" : currentLang === 'en' ? "Industries Served" : "Industries Servies"}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all"
                >
                  <industry.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">
                    {currentLang === 'ar' ? industry.nameAr : industry.name}
                  </h3>
                  <p className="text-sm text-gray-600">{industry.examples}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              {currentLang === 'ar'
                ? "ابدأ رحلة الذكاء الاصطناعي في منطقة MENA"
                : currentLang === 'en'
                ? "Start Your MENA AI Journey"
                : "Commencez Votre Voyage IA dans la Région MENA"}
            </h2>
            <p className="text-xl mb-8 text-white/90">
              {currentLang === 'ar'
                ? "حلول ذكاء اصطناعي مخصصة لـ22 دولة عربية"
                : currentLang === 'en'
                ? "Custom AI solutions for 22 Arab countries"
                : "Solutions IA personnalisées pour 22 pays arabes"}
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center gap-2">
                <Phone className="w-5 h-5" />
                {currentLang === 'ar' ? "اتصل بنا" : currentLang === 'en' ? "Contact Us" : "Contactez-nous"}
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all flex items-center gap-2">
                <Mail className="w-5 h-5" />
                {currentLang === 'ar' ? "احجز استشارة" : currentLang === 'en' ? "Book Consultation" : "Réserver Consultation"}
              </button>
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