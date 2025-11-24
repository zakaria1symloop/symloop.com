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
  Globe
} from "lucide-react";

export default function AITunisie() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isRTL = router.locale === 'ar';
  const [activeService, setActiveService] = useState(0);

  const aiServices = [
    {
      icon: MessageSquare,
      title: "Chatbots IA Tunisie",
      titleAr: "روبوتات الدردشة الذكية تونس",
      titleEn: "AI Chatbots Tunisia",
      description: "Développez des chatbots intelligents pour entreprises tunisiennes. Support dialecte tunisien, français, anglais. Intégration WhatsApp Business, Messenger, sites web.",
      descriptionAr: "طور روبوتات دردشة ذكية للشركات التونسية. دعم اللهجة التونسية والفرنسية والإنجليزية. تكامل واتساب بيزنس وماسنجر والمواقع.",
      descriptionEn: "Develop intelligent chatbots for Tunisian companies. Support for Tunisian dialect, French, English. WhatsApp Business, Messenger, website integration.",
      features: ["Service client 24/7", "Dialecte tunisien", "Qualification leads", "Support multilingue"],
      featuresAr: ["خدمة عملاء 24/7", "اللهجة التونسية", "تأهيل العملاء", "دعم متعدد اللغات"],
      featuresEn: ["24/7 customer service", "Tunisian dialect", "Lead qualification", "Multilingual support"]
    },
    {
      icon: Mic,
      title: "Assistant Vocal Tunisie",
      titleAr: "المساعد الصوتي تونس",
      titleEn: "Voice Assistant Tunisia",
      description: "Assistants vocaux en dialecte tunisien (الدارجة التونسية). Reconnaissance vocale adaptée à l'accent tunisien. Applications pour centres d'appels Tunis.",
      descriptionAr: "مساعدون صوتيون باللهجة التونسية. التعرف الصوتي المتكيف مع اللكنة التونسية. تطبيقات لمراكز الاتصال في تونس.",
      descriptionEn: "Voice assistants in Tunisian dialect. Speech recognition adapted to Tunisian accent. Applications for Tunis call centers.",
      features: ["Dialecte tunisien", "Centres d'appels", "Commandes vocales", "Transcription audio"],
      featuresAr: ["اللهجة التونسية", "مراكز الاتصال", "الأوامر الصوتية", "نسخ الصوت"],
      featuresEn: ["Tunisian dialect", "Call centers", "Voice commands", "Audio transcription"]
    },
    {
      icon: Eye,
      title: "Vision IA Tunisie",
      titleAr: "الرؤية الذكية تونس",
      titleEn: "Computer Vision Tunisia",
      description: "Solutions de vision par ordinateur pour l'industrie tunisienne. Contrôle qualité textile, agroalimentaire. OCR documents administratifs tunisiens.",
      descriptionAr: "حلول الرؤية الحاسوبية للصناعة التونسية. مراقبة جودة النسيج والصناعات الغذائية. التعرف الضوئي على الوثائق الإدارية التونسية.",
      descriptionEn: "Computer vision solutions for Tunisian industry. Textile and food quality control. OCR for Tunisian administrative documents.",
      features: ["Industrie textile", "Agroalimentaire", "OCR documents", "Détection défauts"],
      featuresAr: ["صناعة النسيج", "الصناعات الغذائية", "التعرف على الوثائق", "كشف العيوب"],
      featuresEn: ["Textile industry", "Food industry", "Document OCR", "Defect detection"]
    },
    {
      icon: TrendingUp,
      title: "Analyse Prédictive",
      titleAr: "التحليل التنبؤي",
      titleEn: "Predictive Analytics",
      description: "Prédisez les tendances du marché tunisien. Analyse du comportement consommateur tunisien. Optimisation des stocks pour le commerce en Tunisie.",
      descriptionAr: "توقع اتجاهات السوق التونسي. تحليل سلوك المستهلك التونسي. تحسين المخزون للتجارة في تونس.",
      descriptionEn: "Predict Tunisian market trends. Analysis of Tunisian consumer behavior. Inventory optimization for trade in Tunisia.",
      features: ["Prévision ventes", "Analyse marché", "Comportement client", "Optimisation stock"],
      featuresAr: ["توقع المبيعات", "تحليل السوق", "سلوك العملاء", "تحسين المخزون"],
      featuresEn: ["Sales forecast", "Market analysis", "Customer behavior", "Stock optimization"]
    },
    {
      icon: Shield,
      title: "IA Cybersécurité",
      titleAr: "الأمن السيبراني بالذكاء الاصطناعي",
      titleEn: "AI Cybersecurity",
      description: "Protection des entreprises tunisiennes contre les cybermenaces. Détection de fraude bancaire. Conformité ANSI (Agence Nationale de la Sécurité Informatique).",
      descriptionAr: "حماية الشركات التونسية من التهديدات السيبرانية. كشف الاحتيال المصرفي. الامتثال للوكالة الوطنية للسلامة المعلوماتية.",
      descriptionEn: "Protect Tunisian companies from cyber threats. Banking fraud detection. ANSI compliance (National Computer Security Agency).",
      features: ["Détection fraude", "Conformité ANSI", "Protection données", "Analyse menaces"],
      featuresAr: ["كشف الاحتيال", "الامتثال ANSI", "حماية البيانات", "تحليل التهديدات"],
      featuresEn: ["Fraud detection", "ANSI compliance", "Data protection", "Threat analysis"]
    },
    {
      icon: Database,
      title: "Big Data Tunisie",
      titleAr: "البيانات الضخمة تونس",
      titleEn: "Big Data Tunisia",
      description: "Solutions Big Data pour entreprises tunisiennes. Analyse des données télécom, bancaire, tourisme. Dashboards intelligents et KPIs temps réel.",
      descriptionAr: "حلول البيانات الضخمة للشركات التونسية. تحليل بيانات الاتصالات والبنوك والسياحة. لوحات معلومات ذكية ومؤشرات أداء فورية.",
      descriptionEn: "Big Data solutions for Tunisian companies. Telecom, banking, tourism data analysis. Smart dashboards and real-time KPIs.",
      features: ["Analyse télécom", "Données bancaires", "Tourisme insights", "Dashboards BI"],
      featuresAr: ["تحليل الاتصالات", "البيانات المصرفية", "رؤى السياحة", "لوحات المعلومات"],
      featuresEn: ["Telecom analysis", "Banking data", "Tourism insights", "BI dashboards"]
    }
  ];

  const industries = [
    { icon: Landmark, name: "Banques", nameAr: "البنوك", examples: "STB, BH, BIAT, Amen Bank, Zitouna Bank" },
    { icon: Phone, name: "Télécom", nameAr: "الاتصالات", examples: "Tunisie Telecom, Ooredoo, Orange" },
    { icon: HeartPulse, name: "Santé", nameAr: "الصحة", examples: "Cliniques privées, Hôpitaux, Pharmacies" },
    { icon: GraduationCap, name: "Éducation", nameAr: "التعليم", examples: "Universités, Écoles privées, Formation" },
    { icon: Factory, name: "Industrie", nameAr: "الصناعة", examples: "Textile, Agroalimentaire, Automobile" },
    { icon: ShoppingBag, name: "Commerce", nameAr: "التجارة", examples: "Retail, E-commerce, Distribution" },
    { icon: Building2, name: "Tourisme", nameAr: "السياحة", examples: "Hôtels, Agences voyage, Restaurants" },
    { icon: Briefcase, name: "Services", nameAr: "الخدمات", examples: "Consulting, IT, Marketing" }
  ];

  const cities = [
    "Tunis", "Sfax", "Sousse", "Kairouan", "Bizerte",
    "Gabès", "Ariana", "Monastir", "Ben Arous", "Nabeul"
  ];

  const stats = [
    { value: "30+", label: "Projets IA Tunisie", labelAr: "مشروع ذكاء اصطناعي بتونس" },
    { value: "15+", label: "Entreprises tunisiennes", labelAr: "شركة تونسية" },
    { value: "95%", label: "Satisfaction clients", labelAr: "رضا العملاء" },
    { value: "24/7", label: "Support en Tunisie", labelAr: "دعم في تونس" }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Intelligence Artificielle Tunisie - Solutions IA pour Entreprises Tunisiennes",
    "alternateName": ["IA Tunisie", "AI Tunisia", "الذكاء الاصطناعي تونس"],
    "description": "Leader des solutions d'intelligence artificielle en Tunisie. Chatbots dialecte tunisien, machine learning, deep learning, vision par ordinateur. Service à Tunis, Sfax, Sousse, Monastir, Bizerte. Expert IA pour entreprises tunisiennes.",
    "provider": {
      "@type": "Organization",
      "name": "Symloop Technology",
      "url": "https://symloop.com",
      "logo": "https://symloop.com/sym-logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "TN"
      },
      "telephone": "+213549575512"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Tunisia"
      },
      {
        "@type": "City",
        "name": "Tunis"
      },
      {
        "@type": "City",
        "name": "Sfax"
      },
      {
        "@type": "City",
        "name": "Sousse"
      }
    ],
    "serviceType": [
      "Intelligence Artificielle Tunisie",
      "Machine Learning Tunisia",
      "Deep Learning Tunisia",
      "Chatbot Development Tunisia",
      "Natural Language Processing Arabic Tunisia",
      "Computer Vision Tunisia",
      "Predictive Analytics Tunisia",
      "AI Consulting Tunisia"
    ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "TND",
      "priceRange": "$$"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Combien coûte une solution IA en Tunisie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le coût d'une solution IA en Tunisie varie de 500 TND à 50,000 TND selon la complexité. Un chatbot simple coûte 500-2000 TND, une solution de machine learning 5000-20,000 TND. Devis gratuit adapté au marché tunisien."
        }
      },
      {
        "@type": "Question",
        "name": "L'IA peut-elle comprendre le dialecte tunisien (الدارجة التونسية)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui! Nos solutions IA sont spécialement entraînées pour comprendre le dialecte tunisien. Nous supportons l'arabe tunisien, le français, et les mélanges linguistiques courants en Tunisie."
        }
      },
      {
        "@type": "Question",
        "name": "Quels sont les secteurs qui utilisent l'IA en Tunisie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les banques tunisiennes (STB, BH, BIAT), les opérateurs télécom (Tunisie Telecom, Ooredoo), le secteur touristique, l'industrie textile, et les services utilisent déjà l'IA pour améliorer leurs opérations."
        }
      },
      {
        "@type": "Question",
        "name": "Comment Symloop peut-il aider les entreprises tunisiennes avec l'IA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous offrons des solutions IA sur mesure: chatbots pour service client, analyse prédictive pour les ventes, vision par ordinateur pour le contrôle qualité, et assistants vocaux en dialecte tunisien. Support local à Tunis et dans toute la Tunisie."
        }
      }
    ]
  };

  const currentLang = router.locale || 'fr';

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          {currentLang === 'ar'
            ? "الذكاء الاصطناعي تونس | شات بوت، تعلم الآلة | Symloop"
            : currentLang === 'en'
            ? "Artificial Intelligence Tunisia | AI Chatbot, Machine Learning | Symloop"
            : "Intelligence Artificielle Tunisie | IA, Chatbot, Machine Learning | Symloop"}
        </title>
        <meta name="title" content={
          currentLang === 'ar'
            ? "الذكاء الاصطناعي تونس | شات بوت، تعلم الآلة | Symloop"
            : currentLang === 'en'
            ? "Artificial Intelligence Tunisia | AI Chatbot, Machine Learning | Symloop"
            : "Intelligence Artificielle Tunisie | IA, Chatbot, Machine Learning | Symloop"
        } />
        <meta name="description" content={
          currentLang === 'ar'
            ? "رائد الذكاء الاصطناعي في تونس. حلول ذكاء اصطناعي مخصصة: شات بوت باللهجة التونسية، تعلم الآلة، التعلم العميق. خدمة في تونس، صفاقس، سوسة، المنستير."
            : currentLang === 'en'
            ? "Leading AI company in Tunisia. Custom AI solutions: chatbots in Tunisian dialect, machine learning, deep learning. Service in Tunis, Sfax, Sousse, Monastir."
            : "Leader de l'intelligence artificielle en Tunisie. Solutions IA sur mesure: chatbots dialecte tunisien, machine learning, deep learning. Service à Tunis, Sfax, Sousse, Monastir."
        } />
        <meta name="keywords" content="intelligence artificielle tunisie, IA tunisie, AI tunisia, machine learning tunisie, deep learning tunisie, chatbot tunisie, assistant virtuel tunisie, GPT tunisie, ChatGPT tunisie, NLP tunisie, vision par ordinateur tunisie, reconnaissance vocale tunisie, الذكاء الاصطناعي تونس, شات بوت تونس, تعلم الآلة تونس, dialecte tunisien IA, الدارجة التونسية, développeur IA tunis, expert IA sfax sousse, robot conversationnel tunisie, agent IA tunisie, algorithme IA tunisie, réseau de neurones tunisie, tensorflow tunisie, pytorch tunisie, keras tunisie, scikit-learn tunisie, transformation digitale IA tunisie, startup IA tunisie, formation IA tunisie, cours IA tunisie, certification IA tunisie, emploi IA tunisie, stage IA tunisie, hackathon IA tunisie, innovation IA tunisie, recherche IA tunisie, laboratoire IA tunisie, université IA tunisie, master IA tunisie, doctorat IA tunisie, conférence IA tunisie, événement IA tunisie, communauté IA tunisie, forum IA tunisie, blog IA tunisie, actualité IA tunisie, projet IA tunisie, solution IA tunisie, plateforme IA tunisie, API IA tunisie, SDK IA tunisie, framework IA tunisie, bibliothèque IA tunisie, outil IA tunisie, logiciel IA tunisie, application IA tunisie, système IA tunisie, architecture IA tunisie, infrastructure IA tunisie, cloud IA tunisie, edge IA tunisie, IoT IA tunisie, blockchain IA tunisie, quantum IA tunisie, 5G IA tunisie, robotique IA tunisie, drone IA tunisie, voiture autonome tunisie, smart city tunisie, ville intelligente tunisie, carthage smart city, tunis smart city, sfax smart city, sousse smart city, santé IA tunisie, médecine IA tunisie, diagnostic IA tunisie, imagerie médicale IA tunisie, télémédecine IA tunisie, clinique la soukra IA, clinique carthage IA, clinique el manar IA, polyclinique centrale IA, finance IA tunisie, banque IA tunisie, assurance IA tunisie, trading IA tunisie, crédit scoring IA tunisie, anti-fraude IA tunisie, KYC IA tunisie, AML IA tunisie, compliance IA tunisie, régulation IA tunisie, ANSI tunisie IA, agence nationale sécurité informatique, STB bank IA, BH bank IA, BIAT IA tunisie, amen bank IA, zitouna bank IA, attijari bank tunisie IA, UIB tunisie IA, BTE tunisie IA, BT tunisie IA, QNB tunisie IA, tunisie telecom IA, ooredoo tunisie IA, orange tunisie IA, lycamobile tunisie IA, globalnet tunisie IA, topnet tunisie IA, hexabyte tunisie IA, 3S tunisie IA, ATI tunisie IA, ATB tunisie IA, STAR assurance IA, comar assurance IA, GAT assurances IA, maghrebia assurance IA, carte assurances IA, lloyd tunisien IA, CTAMA IA tunisie, MAE assurances IA, zitouna takaful IA, el amana takaful IA, bourse tunis IA, BVMT IA tunisie, tunisie valeurs IA, MAC SA tunisie IA, AFC tunisie IA, maxula bourse IA, CGI tunisie IA, smart tunisie IA, tunisie clearing IA, industrie textile tunisie IA, SITEX tunisie IA, groupe benetton tunisie IA, big ben textile IA, MNS textile tunisie IA, demco group tunisie IA, marathon textile IA, SARTEX tunisie IA, tourisme tunisie IA, ONTT tunisie IA, office national tourisme tunisien, hôtel laico tunis IA, movenpick gammarth IA, four seasons tunis IA, la villa bleue sidi bou said IA, dar el jeld tunis IA, la maison blanche tunis IA, restaurant le golfe gammarth IA, restaurant dar el jeld IA, restaurant la closerie IA, restaurant le baroque IA, université tunis el manar IA, université carthage IA, université sfax IA, université sousse IA, université monastir IA, université manouba IA, université jendouba IA, université kairouan IA, université gabès IA, université gafsa IA, ENIT tunisie IA, école nationale ingénieurs tunis, ENSI tunisie IA, SUP'COM tunisie IA, INSAT tunisie IA, EPT tunisie IA, école polytechnique tunisie, ENIS sfax IA, ENIM monastir IA, ENISo sousse IA, ISI tunisie IA, institut supérieur informatique, ISG tunis IA, IHEC carthage IA, ISCAE tunisie IA, ESC tunisie IA, ESPRIT tunisie IA, TEK-UP tunisie IA, université centrale IA, université libre tunis IA, UIK tunisie IA, université internationale kairouan, MSB tunisie IA, mediterranean school business, tunisie digitale IA, smart tunisia IA, tunisia tech IA, digital tunisia 2020, tunisian startups IA, startup tunisia IA, tunisian startup ecosystem, flat6labs tunis IA, wiki startup tunisia IA, cogite coworking space IA, the dot tunisie IA, novation city tunisie IA, technopole el ghazala IA, technopole sfax IA, technopole sousse IA, technopole borj cedria IA, technopole sidi thabet IA, pôle competitivité monastir IA, AFI tunisie IA, agence foncière industrielle, APII tunisie IA, API tunisie IA, APIA tunisie IA, CEPEX tunisie IA, FIPA tunisie IA, invest in tunisia IA, tunisia investment authority, tunisia export IA, made in tunisia IA, label tunisia IA, tunisie industrie IA, tunisie commerce IA, tunisie services IA, secteur privé tunisie IA, UTICA tunisie IA, CONECT tunisie IA, IACE tunisie IA, ATUGE tunisie IA, chambre commerce tunis IA, CCIS sfax IA, CCI tuniso-française IA, chambre commerce tuniso-allemande, chambre commerce tuniso-italienne, business france tunisie IA, delegation UE tunisie IA, ambassade france tunisie IA, ambassade allemagne tunisie IA, ambassade italie tunisie IA, ambassade usa tunisie IA, ambassade canada tunisie IA, ambassade uk tunisie IA, ambassade chine tunisie IA, ambassade japon tunisie IA, ambassade corée tunisie IA, coopération internationale tunisie IA, AFD tunisie IA, GIZ tunisie IA, banque mondiale tunisie IA, BAD tunisie IA, BEI tunisie IA, BERD tunisie IA, FMI tunisie IA, PNUD tunisie IA, UNESCO tunisie IA, UNICEF tunisie IA, OMS tunisie IA, OIT tunisie IA, FAO tunisie IA, PAM tunisie IA, HCR tunisie IA, OIM tunisie IA, croissant rouge tunisien IA, tunisie 2025 IA, tunisie 2030 IA, vision tunisie 2035 IA, plan développement tunisie IA, stratégie nationale IA tunisie, transformation digitale tunisie, e-gov tunisie IA, administration électronique tunisie, identifiant unique citoyen tunisie, e-dinar tunisie IA, monnaie digitale tunisie, blockchain tunisie IA, crypto tunisie IA, bitcoin tunisie IA, ethereum tunisie IA, NFT tunisie IA, metaverse tunisie IA, web3 tunisie IA, industrie 4.0 tunisie IA, usine intelligente tunisie, agriculture 4.0 tunisie IA, agriculture précision tunisie, smart farming tunisie IA, agritech tunisie IA, foodtech tunisie IA, healthtech tunisie IA, fintech tunisie IA, edtech tunisie IA, legaltech tunisie IA, proptech tunisie IA, insurtech tunisie IA, regtech tunisie IA, govtech tunisie IA, cleantech tunisie IA, greentech tunisie IA, energie renouvelable tunisie IA, solaire tunisie IA, éolien tunisie IA, STEG tunisie IA, SONEDE tunisie IA, ONAS tunisie IA, ANGED tunisie IA, CITET tunisie IA, ANME tunisie IA, transport tunisie IA, tunisair IA, nouvelair tunisie IA, tunisie express IA, CTN tunisie IA, SNCFT tunisie IA, société nationale chemins fer tunisiens, TRANSTU tunisie IA, métro léger tunis IA, TGM tunisie IA, train banlieue tunis, bus tunis IA, taxi tunisie IA, uber tunisie IA, bolt tunisie IA, heetch tunisie IA, indriver tunisie IA, yassir tunisie IA, covoiturage tunisie IA, autoroute tunisie IA, tunisie autoroutes IA, las tunisie IA, société autoroutes, port tunis IA, port radès IA, port sfax IA, port sousse IA, port bizerte IA, port gabès IA, port zarzis IA, aéroport tunis carthage IA, aéroport monastir IA, aéroport djerba IA, aéroport sfax IA, aéroport tozeur IA, aéroport tabarka IA, aéroport enfidha IA, TAV tunisie IA, media tunisie IA, watania 1 IA, watania 2 IA, nessma TV IA, el hiwar ettounsi IA, carthage+ IA, hannibal TV IA, attessia TV IA, al janoubia TV IA, telvza TV IA, IFM tunisie IA, mosaique FM IA, shems FM IA, express FM IA, jawhara FM IA, radio nationale tunisie IA, RTCI tunisie IA, radio jeunes IA, radio culture IA, cap FM IA, sabra FM IA, oxygène FM IA, la presse tunisie IA, le temps tunisie IA, assabah tunisie IA, alchourouk tunisie IA, essahafa tunisie IA, le quotidien tunisie IA, le maghreb tunisie IA, réalités tunisie IA, leaders tunisie IA, manager tunisie IA, african manager IA, nawaat tunisie IA, inkyfada tunisie IA, business news tunisie IA, kapitalis tunisie IA, webdo tunisie IA, huffpost tunisie IA, tunisie numérique IA, tekiano tunisie IA, tuniscope IA, babnet tunisie IA, jawharafm.net IA, TAP tunisie IA, agence tunis afrique presse, culture tunisie IA, ministère culture tunisie IA, cité culture tunis IA, théâtre municipal tunis IA, théâtre opéra tunis IA, carthage festival IA, festival hammamet IA, festival el jem IA, festival tabarka jazz IA, festival douz sahara IA, JCC tunisie IA, journées cinématographiques carthage, FIC tunisie IA, foire internationale livre tunis, musée bardo IA, musée carthage IA, musée sousse IA, musée sfax IA, musée el jem IA, site carthage IA, site dougga IA, site el jem IA, site kairouan IA, site sidi bou said IA, médina tunis IA, médina sousse IA, médina sfax IA, médina kairouan IA, patrimoine UNESCO tunisie IA, tourisme culturel tunisie IA, tourisme médical tunisie IA, tourisme saharien tunisie IA, tourisme balnéaire tunisie IA, tourisme écologique tunisie IA, tourisme sportif tunisie IA, golf tunisie IA, thalasso tunisie IA, plongée tunisie IA, sport tunisie IA, football tunisie IA, espérance tunis IA, club africain IA, étoile sahel IA, CS sfaxien IA, US monastir IA, CA bizertin IA, stade tunisien IA, FTF tunisie IA, équipe tunisie football IA, aigles carthage IA, handball tunisie IA, volleyball tunisie IA, basketball tunisie IA, tennis tunisie IA, ons jabeur IA, malek jaziri IA, athlétisme tunisie IA, natation tunisie IA, boxe tunisie IA, judo tunisie IA, taekwondo tunisie IA, karaté tunisie IA, jeux méditerranéens tunisie IA, jeux africains tunisie IA, jeux olympiques tunisie IA, gastronomie tunisie IA, cuisine tunisienne IA, couscous tunisien IA, brik tunisie IA, tajine tunisien IA, lablabi tunisie IA, ojja tunisie IA, makroud tunisie IA, bambalouni tunisie IA, thé menthe tunisie IA, huile olive tunisie IA, harissa tunisie IA, deglet nour tunisie IA, vin tunisie IA, boukha tunisie IA, artisanat tunisie IA, tapis kairouan IA, poterie nabeul IA, céramique tunisie IA, cuivre tunisie IA, cuir tunisie IA, bijoux tunisie IA, khomsa tunisie IA, chechia tunisie IA, jebba tunisie IA, burnous tunisie IA, fouta tunisie IA, mode tunisie IA, fashion tunisie IA, design tunisie IA, architecture tunisie IA, urbanisme tunisie IA, immobilier tunisie IA, AFH tunisie IA, arru tunisie IA, SNIT tunisie IA, SPROLS tunisie IA, promoteurs immobiliers tunisie IA, lac tunisie IA, les berges du lac IA, lac 2 tunisie IA, lac 3 tunisie IA, centre urbain nord IA, ennasr tunisie IA, el menzah tunisie IA, manar tunisie IA, marsa tunisie IA, sidi bou said IA, carthage tunisie IA, la goulette tunisie IA, mutuelleville tunisie IA, lafayette tunisie IA, montplaisir tunisie IA, belvédère tunisie IA, el omrane tunisie IA, el mourouj tunisie IA, el manar tunisie IA, ariana tunisie IA, ben arous tunisie IA, manouba tunisie IA, nabeul tunisie IA, hammamet tunisie IA, sousse tunisie IA, monastir tunisie IA, mahdia tunisie IA, sfax tunisie IA, gabès tunisie IA, médenine tunisie IA, djerba tunisie IA, zarzis tunisie IA, tataouine tunisie IA, kébili tunisie IA, tozeur tunisie IA, gafsa tunisie IA, kasserine tunisie IA, sidi bouzid tunisie IA, kairouan tunisie IA, zaghouan tunisie IA, siliana tunisie IA, le kef tunisie IA, jendouba tunisie IA, béja tunisie IA, bizerte tunisie IA, tabarka tunisie IA, ain draham tunisie IA, hammamet yasmine IA, port el kantaoui IA, monastir marina IA, mahdia zone touristique IA, djerba zone touristique IA, zarzis zone touristique IA, tabarka zone touristique IA, gammarth zone touristique IA, la marsa plage IA, sidi bou said marina IA, startup act tunisie IA, label startup tunisie, smart capital tunisie IA, anava tunisie IA, CDC tunisie IA, caisse dépôts consignations, BFPME tunisie IA, BTS tunisie IA, SOTUGAR tunisie IA, SODIS tunisie IA, SICAR tunisie IA, fonds investissement tunisie IA, capital risque tunisie IA, private equity tunisie IA, crowdfunding tunisie IA, business angels tunisie IA, carthage business angels IA, UGFS tunisie IA, union générale tunisienne, maxula capital IA, africinvest tunisie IA, tuninvest IA, MPEF tunisie IA, meninx fund tunisie IA, flat6labs tunisia IA, 216 capital ventures IA, enda tamweel tunisie IA, advans tunisie IA, microcred tunisie IA, taysir microfinance IA, CFE tunisie IA, centre affaires tunisie, API tunisie IA, guichet unique tunisie, one stop shop tunisia IA, registre commerce tunisie IA, patente tunisie IA, CNSS tunisie IA, CNRPS tunisie IA, CNAM tunisie IA, douane tunisie IA, TTN tunisie IA, liasse unique tunisie, e-filing tunisie IA, déclaration en ligne tunisie, paiement en ligne tunisie, e-commerce tunisie IA, jumia tunisie IA, tayara tunisie IA, tunisianet IA, mytek tunisie IA, sbs tunisie IA, tunisie annonces IA, affare tunisie IA, automobile.tn IA, tunisie automobiles IA, tunisie booking IA, réservation en ligne tunisie, livraison tunisie IA, glovo tunisie IA, jumia food tunisie IA, monresto tunisie IA, klikeat tunisie IA, rapidoo tunisie IA, e-payment tunisie IA, clicktopay tunisie IA, sobflous tunisie IA, e-dinar smart IA, flouci tunisie IA, d17 tunisie IA, paymee tunisie IA, SMT tunisie IA, monétique tunisie, carte technologique tunisienne, CTI tunisie IA, e-banking tunisie IA, mobile banking tunisie IA, attijaribank mobile IA, amen mobile IA, biat mobile IA, bh mobile IA, zitouna mobile IA, STBdirect IA, QNB mobile tunisie IA, UIB mobile IA, BT mobile tunisie IA, BTE mobile IA, ABC mobile tunisie IA, ATB mobile IA, wifak mobile IA, al baraka mobile IA, carte jeune tunisie IA, carte universitaire tunisie, carte transport tunisie IA, carte santé tunisie IA, carte identité biométrique tunisie, CIN électronique tunisie IA, passeport biométrique tunisie IA, visa tunisie IA, e-visa tunisie IA, sejour tunisie IA, permis travail tunisie IA, carte séjour tunisie IA, registre national entreprises tunisie, RNE tunisie IA, identifiant fiscal tunisie, matricule fiscal tunisie IA, code TVA tunisie IA, certification electronique tunisie, signature electronique tunisie IA, ANCE tunisie IA, tuntrust tunisie IA, certification ISO tunisie IA, ISO 9001 tunisie IA, ISO 27001 tunisie IA, ISO 14001 tunisie IA, INNORPI tunisie IA, UTICA certification IA, marque NF tunisie IA, CE marking tunisie IA, halal tunisie IA, bio tunisie IA, label qualité tunisie IA, origine tunisie garantie IA, intelligence économique tunisie IA, veille stratégique tunisie IA, compétitivité tunisie IA, innovation tunisie IA, R&D tunisie IA, recherche développement tunisie, brevet tunisie IA, INNORPI brevets IA, propriété intellectuelle tunisie, marque déposée tunisie IA, droit auteur tunisie IA, OTDAV tunisie IA, COSAP tunisie IA, transfert technologie tunisie IA, valorisation recherche tunisie, incubateur tunisie IA, accélérateur tunisie IA, pépinière entreprises tunisie, espace coworking tunisie IA, fablab tunisie IA, hackerspace tunisie IA, makerspace tunisie IA, entrepreneuriat tunisie IA, entrepreneuriat social tunisie, entrepreneuriat féminin tunisie, jeune entrepreneur tunisie IA, auto-entrepreneur tunisie IA, freelance tunisie IA, consultant indépendant tunisie, portage salarial tunisie IA, télétravail tunisie IA, remote work tunisia IA, digital nomad tunisia IA, outsourcing tunisie IA, offshoring tunisie IA, nearshoring tunisie IA, BPO tunisie IA, call center tunisie IA, centre appel tunisie IA, télémarketing tunisie IA, support client tunisie IA, service client tunisie IA, help desk tunisie IA, IT support tunisie IA, développement logiciel tunisie, développement web tunisie IA, développement mobile tunisie IA, développement application tunisie, agence digitale tunisie IA, agence web tunisie IA, agence communication tunisie IA, agence marketing tunisie IA, agence publicité tunisie IA, agence événementiel tunisie IA, agence RP tunisie IA, agence SEO tunisie IA, agence social media tunisie IA, community management tunisie IA, influence marketing tunisie IA, content marketing tunisie IA, inbound marketing tunisie IA, growth hacking tunisie IA, marketing automation tunisie IA, CRM tunisie IA, ERP tunisie IA, BI tunisie IA, business intelligence tunisie, big data tunisie IA, data analytics tunisie IA, data science tunisie IA, data engineering tunisie IA, cloud computing tunisie IA, cybersécurité tunisie IA, sécurité informatique tunisie, protection données tunisie IA, RGPD tunisie IA, loi 2004-63 tunisie IA, instance protection données personnelles, INPDP tunisie IA, audit sécurité tunisie IA, test intrusion tunisie IA, SOC tunisie IA, CERT tunisie IA, tunCERT IA, incident response tunisie IA, forensics tunisie IA, cryptographie tunisie IA, blockchain sécurité tunisie IA, IoT sécurité tunisie IA, OT sécurité tunisie IA, SCADA tunisie IA, infrastructure critique tunisie IA, résilience cyber tunisie IA, continuité activité tunisie IA, PCA tunisie IA, PRA tunisie IA, disaster recovery tunisie IA, backup tunisie IA, archivage électronique tunisie IA, GED tunisie IA, ECM tunisie IA, dématérialisation tunisie IA, workflow tunisie IA, BPM tunisie IA, RPA tunisie IA, low-code tunisie IA, no-code tunisie IA, citizen developer tunisie IA, digital workplace tunisie IA, collaboration tunisie IA, visioconférence tunisie IA, teams tunisie IA, slack tunisie IA, zoom tunisie IA, google workspace tunisie IA, microsoft 365 tunisie IA, sharepoint tunisie IA, SAP tunisie IA, oracle tunisie IA, microsoft tunisie IA, google tunisie IA, amazon tunisie IA, IBM tunisie IA, cisco tunisie IA, huawei tunisie IA, dell tunisie IA, HP tunisie IA, lenovo tunisie IA, asus tunisie IA, acer tunisie IA, apple tunisie IA, samsung tunisie IA, LG tunisie IA, sony tunisie IA, xiaomi tunisie IA, oppo tunisie IA, vivo tunisie IA, realme tunisie IA, oneplus tunisie IA, honor tunisie IA, nokia tunisie IA, alcatel tunisie IA, condor tunisie IA, evertek tunisie IA, logicom tunisie IA, versus tunisie IA, pearl tunisie IA, i-tech tunisie IA, x-tech tunisie IA, mega PC tunisie IA, zoom informatique tunisie IA, wiki tunisie IA, tunisianet IA, mytek tunisie IA, sbs informatique tunisie IA, best buy tunisie IA, fnac tunisie IA, darty tunisie IA, boulanger tunisie IA, électroménager tunisie IA, MG tunisie IA, samsung shop tunisie IA, LG brand shop tunisie IA, sony center tunisie IA, istore tunisie IA, orange shop tunisie IA, ooredoo shop tunisie IA, tunisie telecom shop IA, espace TT tunisie IA, la poste tunisienne IA, rapid poste tunisie IA, aramex tunisie IA, DHL tunisie IA, fedex tunisie IA, UPS tunisie IA, chronopost tunisie IA, colissimo tunisie IA, colis postaux tunisie IA, e-commerce logistics tunisie IA, fulfillment tunisie IA, last mile delivery tunisie IA, same day delivery tunisie IA, click and collect tunisie IA, drive tunisie IA, marketplace tunisie IA, dropshipping tunisie IA, affiliation tunisie IA, influenceur tunisie IA, youtubeur tunisie IA, instagrameur tunisie IA, tiktokeur tunisie IA, podcasteur tunisie IA, blogueur tunisie IA, vlogueur tunisie IA, streamer tunisie IA, gamer tunisie IA, esport tunisie IA, gaming tunisie IA, réalité virtuelle tunisie IA, réalité augmentée tunisie IA, metaverse tunisie IA, NFT tunisie IA, crypto art tunisie IA, DeFi tunisie IA, Web3 tunisie IA, DAO tunisie IA, tokenisation tunisie IA, smart contracts tunisie IA, dApps tunisie IA, DEX tunisie IA, CEX tunisie IA, wallet crypto tunisie IA, mining crypto tunisie IA, trading crypto tunisie IA, forex tunisie IA, bourse en ligne tunisie IA, investissement tunisie IA, épargne tunisie IA, crédit tunisie IA, leasing tunisie IA, factoring tunisie IA, crowdlending tunisie IA, P2P lending tunisie IA, néobanque tunisie IA, banque digitale tunisie IA, compte sans banque tunisie IA, carte prépayée tunisie IA, wallet tunisie IA, mobile money tunisie IA, transfert argent tunisie IA, remittance tunisie IA, western union tunisie IA, moneygram tunisie IA, ria tunisie IA, small world tunisie IA, tap cash tunisie IA, carte edinar tunisie IA, recharge mobile tunisie IA, facture en ligne tunisie IA, STEG online IA, SONEDE online IA, TT online IA, ooredoo online IA, orange online IA, abonnement tunisie IA, streaming tunisie IA, IPTV tunisie IA, VOD tunisie IA, netflix tunisie IA, shahid tunisie IA, watch it tunisie IA, artify tunisie IA, cinéma tunisie IA, pathé tunisie IA, ciné madart tunisie IA, le colisée tunisie IA, culture box tunisie IA, théâtre tunisie IA, musique tunisie IA, concert tunisie IA, festival tunisie IA, exposition tunisie IA, galerie art tunisie IA, musée tunisie IA, patrimoine tunisie IA, archéologie tunisie IA, histoire tunisie IA, carthage antique IA, phéniciens tunisie IA, romains tunisie IA, byzantins tunisie IA, arabes tunisie IA, ottomans tunisie IA, husseinites tunisie IA, protectorat français tunisie IA, indépendance tunisie 1956 IA, bourguiba tunisie IA, ben ali tunisie IA, révolution jasmin 2011 IA, printemps arabe tunisie IA, transition démocratique tunisie IA, constitution 2014 tunisie IA, élections tunisie IA, démocratie tunisie IA, société civile tunisie IA, UGTT tunisie IA, LTDH tunisie IA, ATFD tunisie IA, forum social tunisie IA, quartier général tunisie IA, assemblée représentants peuple IA, ARP tunisie IA, présidence tunisie IA, gouvernement tunisie IA, ministères tunisie IA, administration tunisie IA, fonction publique tunisie IA, collectivités locales tunisie IA, municipalité tunisie IA, gouvernorat tunisie IA, délégation tunisie IA, omda tunisie IA, secteur tunisie IA, quartier tunisie IA, avenue bourguiba tunis IA, avenue mohamed 5 tunis IA, avenue liberté tunis IA, avenue paris tunisie IA, rue rome tunis IA, rue marseille tunis IA, passage tunis IA, souk tunis IA, médina tunis patrimoine IA, bab bhar tunis IA, bab jedid tunis IA, bab souika tunis IA, halfaouine tunis IA, sidi el béchir tunis IA, tourbet el bey tunis IA, dar ben abdallah tunis IA, dar lasram tunis IA, dar othman tunis IA, palais kheireddine tunis IA, bibliothèque nationale tunisie IA, archives nationales tunisie IA, INP tunisie IA, institut national patrimoine, AMVPPC tunisie IA, ASM tunisie IA, association sauvegarde médina, mosquée zitouna tunis IA, mosquée hammouda pacha IA, mosquée youssef dey IA, mosquée sidi mahrez IA, cathédrale tunis IA, synagogue tunis IA, cimetière jellaz tunis IA, cimetière borgel tunis IA, TGM la marsa IA, train la marsa IA, métro léger tunis IA, tramway tunis IA, bus tunis IA, transport public tunisie IA, mobilité urbaine tunisie IA, smart mobility tunisia IA, vélo tunisie IA, trottinette tunisie IA, mobilité douce tunisie IA, piéton tunisie IA, accessibilité tunisie IA, handicap tunisie IA, inclusion tunisie IA, égalité tunisie IA, parité tunisie IA, genre tunisie IA, femmes tunisie IA, jeunesse tunisie IA, enfance tunisie IA, famille tunisie IA, social tunisie IA, solidarité tunisie IA, UTSS tunisie IA, ONFP tunisie IA, ANETI tunisie IA, emploi tunisie IA, travail tunisie IA, chômage tunisie IA, formation professionnelle tunisie IA, apprentissage tunisie IA, stage tunisie IA, alternance tunisie IA, reconversion tunisie IA, compétences tunisie IA, soft skills tunisie IA, hard skills tunisie IA, certification tunisie IA, diplôme tunisie IA, VAE tunisie IA, LMD tunisie IA, licence tunisie IA, master tunisie IA, doctorat tunisie IA, ingénieur tunisie IA, technicien tunisie IA, ouvrier qualifié tunisie IA, cadre tunisie IA, manager tunisie IA, dirigeant tunisie IA, entrepreneur tunisie IA, investisseur tunisie IA, actionnaire tunisie IA, associé tunisie IA, partenaire tunisie IA, client tunisie IA, fournisseur tunisie IA, sous-traitant tunisie IA, prestataire tunisie IA, consultant tunisie IA, expert tunisie IA, avocat tunisie IA, notaire tunisie IA, huissier tunisie IA, expert-comptable tunisie IA, commissaire comptes tunisie IA, auditeur tunisie IA, contrôleur gestion tunisie IA, analyste financier tunisie IA, trader tunisie IA, broker tunisie IA, assureur tunisie IA, agent immobilier tunisie IA, promoteur tunisie IA, architecte tunisie IA, ingénieur BTP tunisie IA, urbaniste tunisie IA, paysagiste tunisie IA, designer tunisie IA, styliste tunisie IA, photographe tunisie IA, vidéaste tunisie IA, réalisateur tunisie IA, producteur tunisie IA, acteur tunisie IA, musicien tunisie IA, chanteur tunisie IA, danseur tunisie IA, artiste tunisie IA, écrivain tunisie IA, journaliste tunisie IA, éditeur tunisie IA, imprimeur tunisie IA, libraire tunisie IA, professeur tunisie IA, enseignant tunisie IA, chercheur tunisie IA, scientifique tunisie IA, médecin tunisie IA, pharmacien tunisie IA, dentiste tunisie IA, infirmier tunisie IA, kinésithérapeute tunisie IA, psychologue tunisie IA, nutritionniste tunisie IA, coach tunisie IA, formateur tunisie IA, traducteur tunisie IA, interprète tunisie IA, guide touristique tunisie IA, agent voyage tunisie IA, hôtelier tunisie IA, restaurateur tunisie IA, chef cuisinier tunisie IA, barista tunisie IA, serveur tunisie IA, vendeur tunisie IA, commercial tunisie IA, marketeur tunisie IA, publicitaire tunisie IA, graphiste tunisie IA, webmaster tunisie IA, développeur tunisie IA, programmeur tunisie IA, data scientist tunisie IA, DevOps tunisie IA, sysadmin tunisie IA, DBA tunisie IA, analyste tunisie IA, testeur tunisie IA, support IT tunisie IA, technicien réseau tunisie IA, technicien télécom tunisie IA, électricien tunisie IA, plombier tunisie IA, menuisier tunisie IA, maçon tunisie IA, peintre tunisie IA, carreleur tunisie IA, mécanicien tunisie IA, garagiste tunisie IA, chauffeur tunisie IA, livreur tunisie IA, transporteur tunisie IA, logisticien tunisie IA, magasinier tunisie IA, docker tunisie IA, agriculteur tunisie IA, éleveur tunisie IA, pêcheur tunisie IA, artisan tunisie IA, commerçant tunisie IA, industriel tunisie IA, import export tunisie IA, douanier tunisie IA, transitaire tunisie IA, commissionnaire tunisie IA, courtier tunisie IA, négociant tunisie IA, distributeur tunisie IA, grossiste tunisie IA, détaillant tunisie IA, franchise tunisie IA, licence tunisie IA, concession tunisie IA, représentation tunisie IA, délégation commerciale tunisie IA, succursale tunisie IA, filiale tunisie IA, joint venture tunisie IA, partenariat tunisie IA, alliance stratégique tunisie IA, consortium tunisie IA, groupement tunisie IA, cluster tunisie IA, pôle compétitivité tunisie IA, écosystème tunisie IA, innovation ecosystem tunisia IA, tech ecosystem tunisia IA, startup ecosystem tunisia IA" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://symloop.com/solutions/intelligence-artificielle-tunisie" />
        <meta property="og:title" content={
          currentLang === 'ar'
            ? "الذكاء الاصطناعي تونس | Symloop Technology"
            : currentLang === 'en'
            ? "Artificial Intelligence Tunisia | Symloop Technology"
            : "Intelligence Artificielle Tunisie | Symloop Technology"
        } />
        <meta property="og:description" content={
          currentLang === 'ar'
            ? "حلول ذكاء اصطناعي متقدمة للشركات التونسية. شات بوت، مساعد صوتي، تعلم الآلة."
            : currentLang === 'en'
            ? "Advanced AI solutions for Tunisian companies. Chatbot, voice assistant, machine learning."
            : "Solutions IA avancées pour entreprises tunisiennes. Chatbot, assistant vocal, machine learning."
        } />
        <meta property="og:image" content="https://symloop.com/assets/symloop-ai-tunisia.png" />
        <meta property="og:locale" content={currentLang === 'ar' ? 'ar_TN' : currentLang === 'en' ? 'en_US' : 'fr_TN'} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://symloop.com/solutions/intelligence-artificielle-tunisie" />
        <meta name="twitter:title" content={
          currentLang === 'ar'
            ? "الذكاء الاصطناعي تونس | Symloop"
            : currentLang === 'en'
            ? "AI Tunisia | Symloop"
            : "IA Tunisie | Symloop"
        } />
        <meta name="twitter:description" content={
          currentLang === 'ar'
            ? "حلول الذكاء الاصطناعي للشركات التونسية"
            : currentLang === 'en'
            ? "AI solutions for Tunisian companies"
            : "Solutions IA pour entreprises tunisiennes"
        } />

        {/* Canonical */}
        <link rel="canonical" href="https://symloop.com/solutions/intelligence-artificielle-tunisie" />

        {/* Alternate languages */}
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/solutions/intelligence-artificielle-tunisie" />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/solutions/intelligence-artificielle-tunisie" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/en/solutions/intelligence-artificielle-tunisie" />
        <link rel="alternate" hrefLang="x-default" href="https://symloop.com/solutions/intelligence-artificielle-tunisie" />

        {/* Geo Tags */}
        <meta name="geo.region" content="TN" />
        <meta name="geo.placename" content="Tunisia" />
        <meta name="geo.position" content="36.8065;10.1815" />
        <meta name="ICBM" content="36.8065, 10.1815" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Head>

      <div className={`min-h-screen bg-black text-white ${isRTL ? 'font-arabic' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/10 rounded-full blur-[150px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-white/10 rounded-full border border-red-500/30 mb-6">
                <MapPin className="w-5 h-5 text-red-400" />
                <span className="text-sm bg-gradient-to-r from-red-200 via-white to-red-200 bg-clip-text text-transparent">
                  {currentLang === 'ar' ? "#1 الذكاء الاصطناعي في تونس" : currentLang === 'en' ? "#1 AI in Tunisia" : "#1 Intelligence Artificielle en Tunisie"}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  {currentLang === 'ar' ? "الذكاء الاصطناعي" : currentLang === 'en' ? "Artificial Intelligence" : "Intelligence Artificielle"}
                </span>
                <br />
                <span className="text-red-400">
                  {currentLang === 'ar' ? "للشركات التونسية" : currentLang === 'en' ? "For Tunisian Companies" : "Pour Entreprises Tunisiennes"}
                </span>
              </h1>

              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                {currentLang === 'ar'
                  ? "حلول ذكاء اصطناعي متطورة مصممة خصيصًا للسوق التونسي. شات بوت باللهجة التونسية، مساعدين صوتيين، تعلم الآلة، والتحليل التنبؤي."
                  : currentLang === 'en'
                  ? "Advanced AI solutions designed specifically for the Tunisian market. Chatbots in Tunisian dialect, voice assistants, machine learning, and predictive analytics."
                  : "Solutions IA avancées conçues spécifiquement pour le marché tunisien. Chatbots en dialecte tunisien, assistants vocaux, machine learning et analyse prédictive."
                }
              </p>

              {/* City badges */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {cities.slice(0, 5).map((city, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60 border border-white/10">
                    {city}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="https://wa.me/213549575512?text=Je%20suis%20intéressé%20par%20vos%20solutions%20IA%20pour%20la%20Tunisie"
                  target="_blank"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-600 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  {currentLang === 'ar' ? "استشارة مجانية" : currentLang === 'en' ? "Free Consultation" : "Consultation Gratuite"}
                </motion.a>
                <motion.a
                  href="mailto:contact@symloop.com?subject=Solutions%20IA%20Tunisie"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  {currentLang === 'ar' ? "راسلنا" : currentLang === 'en' ? "Contact Us" : "Nous Contacter"}
                </motion.a>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">{stat.value}</div>
                  <div className="text-white/60 text-sm">{currentLang === 'ar' ? stat.labelAr : stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  {currentLang === 'ar' ? "خدمات الذكاء الاصطناعي لتونس" : currentLang === 'en' ? "AI Services for Tunisia" : "Services IA pour la Tunisie"}
                </span>
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                {currentLang === 'ar'
                  ? "حلول مصممة خصيصًا للشركات والمؤسسات التونسية"
                  : currentLang === 'en'
                  ? "Solutions designed specifically for Tunisian companies and institutions"
                  : "Solutions conçues spécifiquement pour les entreprises et institutions tunisiennes"
                }
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, i) => {
                const Icon = service.icon;
                const title = currentLang === 'ar' ? service.titleAr : currentLang === 'en' ? service.titleEn : service.title;
                const description = currentLang === 'ar' ? service.descriptionAr : currentLang === 'en' ? service.descriptionEn : service.description;
                const features = currentLang === 'ar' ? service.featuresAr : currentLang === 'en' ? service.featuresEn : service.features;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-red-500/30 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{title}</h3>
                    <p className="text-white/60 mb-4 text-sm leading-relaxed">
                      {description}
                    </p>
                    <ul className="space-y-2">
                      {features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-white/70">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
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

        {/* Industries Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  {currentLang === 'ar' ? "قطاعات نخدمها في تونس" : currentLang === 'en' ? "Sectors We Serve in Tunisia" : "Secteurs Que Nous Servons en Tunisie"}
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, i) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-red-500/50 hover:bg-red-500/5 transition-all text-center group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-red-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-white/70 group-hover:text-red-400 transition-colors" />
                    </div>
                    <h3 className="font-bold mb-2">{currentLang === 'ar' ? industry.nameAr : industry.name}</h3>
                    <p className="text-white/50 text-xs">{industry.examples}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  {currentLang === 'ar' ? "الأسئلة الشائعة" : currentLang === 'en' ? "Frequently Asked Questions" : "Questions Fréquentes"}
                </span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqJsonLd.mainEntity.map((faq, i) => (
                <motion.details
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white/5 rounded-xl border border-white/10 overflow-hidden"
                >
                  <summary className="p-6 cursor-pointer list-none flex justify-between items-center font-medium hover:bg-white/5 transition-colors">
                    <span>{faq.name}</span>
                    <ArrowRight className="w-5 h-5 transform group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-white/60">
                    {faq.acceptedAnswer.text}
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Globe className="w-16 h-16 text-red-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  {currentLang === 'ar' ? "ابدأ مشروعك الذكي في تونس" : currentLang === 'en' ? "Start Your AI Project in Tunisia" : "Lancez Votre Projet IA en Tunisie"}
                </span>
              </h2>
              <p className="text-white/60 mb-8 text-lg">
                {currentLang === 'ar'
                  ? "استشارة مجانية مع خبراء الذكاء الاصطناعي. حلول مخصصة للسوق التونسي."
                  : currentLang === 'en'
                  ? "Free consultation with AI experts. Solutions tailored for the Tunisian market."
                  : "Consultation gratuite avec nos experts IA. Solutions adaptées au marché tunisien."
                }
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="https://wa.me/213549575512?text=Consultation%20IA%20Tunisie"
                  target="_blank"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  {currentLang === 'ar' ? "واتساب" : "WhatsApp"}: +213 549 575 512
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEO Content - Hidden but crawlable */}
        <section className="py-12 bg-black border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-invert prose-sm max-w-none">
              <h2 className="text-xl font-bold mb-4 text-white/80">Intelligence Artificielle en Tunisie: Solutions Complètes</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Symloop Technology est le partenaire de confiance pour l'intelligence artificielle en Tunisie. Nous offrons des solutions IA adaptées au contexte tunisien, incluant le support complet du dialecte tunisien (الدارجة التونسية) et la compréhension des spécificités du marché tunisien.
              </p>
              <h3 className="text-lg font-bold mb-3 text-white/70">Services IA pour les entreprises tunisiennes</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Nos solutions couvrent Tunis, Sfax, Sousse, Monastir, Bizerte, Kairouan et toutes les régions de Tunisie. Nous travaillons avec les banques tunisiennes (STB, BH, BIAT, Amen Bank), les opérateurs télécom (Tunisie Telecom, Ooredoo, Orange), le secteur touristique, et l'industrie textile.
              </p>
              <h3 className="text-lg font-bold mb-3 text-white/70">Technologies IA avancées pour la Tunisie</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Machine learning, deep learning, traitement du langage naturel en arabe tunisien, vision par ordinateur pour l'industrie, chatbots intelligents, assistants vocaux, analyse prédictive, big data analytics. Solutions conformes aux régulations tunisiennes et ANSI (Agence Nationale de la Sécurité Informatique).
              </p>
            </article>
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