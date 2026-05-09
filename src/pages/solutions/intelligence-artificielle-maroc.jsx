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

export default function AIMaroc() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isRTL = router.locale === 'ar';
  const [activeService, setActiveService] = useState(0);

  const aiServices = [
    {
      icon: MessageSquare,
      title: "Chatbots IA Maroc",
      titleAr: "روبوتات الدردشة الذكية المغرب",
      titleEn: "AI Chatbots Morocco",
      description: "Chatbots intelligents pour entreprises marocaines. Support darija marocaine, français, anglais. Intégration CRM, WhatsApp Business, sites web. Conformité CNDP Maroc.",
      descriptionAr: "روبوتات دردشة ذكية للشركات المغربية. دعم الدارجة المغربية والفرنسية والإنجليزية. تكامل CRM وواتساب بيزنس والمواقع. امتثال CNDP المغرب.",
      descriptionEn: "Smart chatbots for Moroccan companies. Moroccan Darija, French, English support. CRM integration, WhatsApp Business, websites. CNDP Morocco compliance.",
      features: ["Darija marocaine", "Service client 24/7", "Intégration CRM", "Conformité CNDP"],
      featuresAr: ["الدارجة المغربية", "خدمة العملاء 24/7", "تكامل CRM", "امتثال CNDP"],
      featuresEn: ["Moroccan Darija", "24/7 customer service", "CRM integration", "CNDP compliance"]
    },
    {
      icon: Mic,
      title: "Assistant Vocal Maroc",
      titleAr: "المساعد الصوتي المغرب",
      titleEn: "Voice Assistant Morocco",
      description: "Assistants vocaux en darija marocaine (الدارجة المغربية). Reconnaissance vocale adaptée à l'accent marocain. Applications pour centres d'appels Casablanca, Rabat.",
      descriptionAr: "مساعدون صوتيون بالدارجة المغربية. التعرف الصوتي المتكيف مع اللكنة المغربية. تطبيقات لمراكز الاتصال الدار البيضاء، الرباط.",
      descriptionEn: "Voice assistants in Moroccan Darija. Speech recognition adapted to Moroccan accent. Applications for call centers Casablanca, Rabat.",
      features: ["Darija marocaine", "Amazigh/Berbère", "Centres d'appels", "API vocale"],
      featuresAr: ["الدارجة المغربية", "الأمازيغية", "مراكز الاتصال", "واجهة برمجية صوتية"],
      featuresEn: ["Moroccan Darija", "Amazigh/Berber", "Call centers", "Voice API"]
    },
    {
      icon: Eye,
      title: "Vision IA Maroc",
      titleAr: "الرؤية الذكية المغرب",
      titleEn: "Computer Vision Morocco",
      description: "Solutions vision par ordinateur pour l'industrie marocaine. Automobile (Renault, PSA), textile, agroalimentaire. Contrôle qualité automatisé, OCR documents marocains.",
      descriptionAr: "حلول الرؤية الحاسوبية للصناعة المغربية. السيارات (رينو، PSA)، النسيج، الصناعات الغذائية. مراقبة الجودة الآلية، التعرف على الوثائق المغربية.",
      descriptionEn: "Computer vision solutions for Moroccan industry. Automotive (Renault, PSA), textile, agri-food. Automated quality control, Moroccan documents OCR.",
      features: ["Industrie automobile", "Textile", "Agroalimentaire", "OCR arabe/français"],
      featuresAr: ["صناعة السيارات", "النسيج", "الصناعات الغذائية", "التعرف الضوئي عربي/فرنسي"],
      featuresEn: ["Automotive industry", "Textile", "Agri-food", "Arabic/French OCR"]
    },
    {
      icon: TrendingUp,
      title: "Analyse Prédictive Maroc",
      titleAr: "التحليل التنبؤي المغرب",
      titleEn: "Predictive Analytics Morocco",
      description: "Prédiction des tendances du marché marocain. Analyse comportement consommateur, optimisation supply chain, prévision demande. Secteurs: retail, immobilier, tourisme.",
      descriptionAr: "توقع اتجاهات السوق المغربي. تحليل سلوك المستهلك، تحسين سلسلة التوريد، توقع الطلب. القطاعات: التجزئة، العقار، السياحة.",
      descriptionEn: "Moroccan market trends prediction. Consumer behavior analysis, supply chain optimization, demand forecasting. Sectors: retail, real estate, tourism.",
      features: ["Prévision marché", "Analyse consommateur", "Supply chain", "Secteur immobilier"],
      featuresAr: ["توقع السوق", "تحليل المستهلك", "سلسلة التوريد", "قطاع العقارات"],
      featuresEn: ["Market forecast", "Consumer analysis", "Supply chain", "Real estate sector"]
    },
    {
      icon: Shield,
      title: "IA Cybersécurité Maroc",
      titleAr: "الأمن السيبراني بالذكاء الاصطناعي المغرب",
      titleEn: "AI Cybersecurity Morocco",
      description: "Protection des entreprises marocaines. Détection fraude bancaire (Attijariwafa, BMCE, CIH). Conformité CNDP et loi 09-08 protection données personnelles.",
      descriptionAr: "حماية الشركات المغربية. كشف الاحتيال المصرفي (التجاري وفا، BMCE، CIH). الامتثال CNDP وقانون 09-08 حماية البيانات الشخصية.",
      descriptionEn: "Moroccan business protection. Bank fraud detection (Attijariwafa, BMCE, CIH). CNDP compliance and law 09-08 personal data protection.",
      features: ["Détection fraude", "Conformité CNDP", "Loi 09-08", "SOC as a Service"],
      featuresAr: ["كشف الاحتيال", "امتثال CNDP", "قانون 09-08", "مركز عمليات الأمن"],
      featuresEn: ["Fraud detection", "CNDP compliance", "Law 09-08", "SOC as a Service"]
    },
    {
      icon: Database,
      title: "Big Data & BI Maroc",
      titleAr: "البيانات الضخمة المغرب",
      titleEn: "Big Data & BI Morocco",
      description: "Solutions Big Data pour grandes entreprises marocaines. OCP, Maroc Telecom, RAM, ONCF. Analytics avancé, dashboards temps réel, data lakes.",
      descriptionAr: "حلول البيانات الضخمة للشركات المغربية الكبرى. OCP، اتصالات المغرب، RAM، ONCF. تحليلات متقدمة، لوحات معلومات فورية.",
      descriptionEn: "Big Data solutions for major Moroccan companies. OCP, Maroc Telecom, RAM, ONCF. Advanced analytics, real-time dashboards, data lakes.",
      features: ["Data lakes", "Analytics temps réel", "BI dashboards", "Machine learning"],
      featuresAr: ["بحيرات البيانات", "تحليلات فورية", "لوحات BI", "تعلم الآلة"],
      featuresEn: ["Data lakes", "Real-time analytics", "BI dashboards", "Machine learning"]
    }
  ];

  const industries = [
    { icon: Landmark, name: "Banques", nameAr: "البنوك", examples: "Attijariwafa Bank, BMCE, Bank Al-Maghrib, CIH Bank" },
    { icon: Factory, name: "Industrie", nameAr: "الصناعة", examples: "OCP, Renault Maroc, PSA Kenitra, LafargeHolcim" },
    { icon: Phone, name: "Télécom", nameAr: "الاتصالات", examples: "Maroc Telecom, Orange, Inwi" },
    { icon: Building2, name: "Immobilier", nameAr: "العقارات", examples: "Addoha, Alliances, Résidences Dar Saada" },
    { icon: ShoppingBag, name: "Retail", nameAr: "التجزئة", examples: "Marjane, Carrefour, Label'Vie, Aswak Assalam" },
    { icon: HeartPulse, name: "Santé", nameAr: "الصحة", examples: "Cliniques privées, CHU, Pharmacies" },
    { icon: GraduationCap, name: "Éducation", nameAr: "التعليم", examples: "Universités, ISCAE, ENCG, HEM" },
    { icon: Briefcase, name: "Tourisme", nameAr: "السياحة", examples: "Hôtels, Atlas Voyages, RAM Holidays" }
  ];

  const cities = [
    "Casablanca", "Rabat", "Marrakech", "Fès", "Tanger",
    "Agadir", "Meknès", "Oujda", "Kenitra", "Tétouan"
  ];

  const stats = [
    { value: "40+", label: "Projets IA Maroc", labelAr: "مشروع ذكاء اصطناعي بالمغرب" },
    { value: "20+", label: "Entreprises marocaines", labelAr: "شركة مغربية" },
    { value: "97%", label: "Satisfaction clients", labelAr: "رضا العملاء" },
    { value: "24/7", label: "Support au Maroc", labelAr: "دعم في المغرب" }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Intelligence Artificielle Maroc - Solutions IA pour Entreprises Marocaines",
    "alternateName": ["IA Maroc", "AI Morocco", "الذكاء الاصطناعي المغرب"],
    "description": "Leader solutions intelligence artificielle au Maroc. Chatbots darija marocaine, machine learning, deep learning, vision par ordinateur. Service Casablanca, Rabat, Marrakech, Fès, Tanger. Expert IA entreprises marocaines.",
    "provider": {
      "@type": "Organization",
      "name": "Symloop Technology",
      "url": "https://symloop.com",
      "logo": "https://symloop.com/sym-logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "MA"
      },
      "telephone": "+213549575512"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Morocco"
      },
      {
        "@type": "City",
        "name": "Casablanca"
      },
      {
        "@type": "City",
        "name": "Rabat"
      },
      {
        "@type": "City",
        "name": "Marrakech"
      }
    ],
    "serviceType": [
      "Intelligence Artificielle Maroc",
      "Machine Learning Morocco",
      "Deep Learning Morocco",
      "Chatbot Development Morocco",
      "Natural Language Processing Darija Morocco",
      "Computer Vision Morocco",
      "Predictive Analytics Morocco",
      "AI Consulting Morocco"
    ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "MAD",
      "priceRange": "$$"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Combien coûte une solution IA au Maroc?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le coût d'une solution IA au Maroc varie de 5,000 MAD à 500,000 MAD selon la complexité. Un chatbot simple coûte 5,000-20,000 MAD, une solution de machine learning 50,000-200,000 MAD. Devis gratuit adapté au marché marocain."
        }
      },
      {
        "@type": "Question",
        "name": "L'IA peut-elle comprendre la darija marocaine (الدارجة المغربية)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui! Nos solutions IA sont spécialement entraînées pour comprendre la darija marocaine, l'amazigh/berbère, le français, et les mélanges linguistiques courants au Maroc. Support complet des accents régionaux marocains."
        }
      },
      {
        "@type": "Question",
        "name": "Quelles entreprises marocaines utilisent l'IA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les grandes entreprises marocaines comme OCP, Attijariwafa Bank, Maroc Telecom, Royal Air Maroc, ONCF utilisent déjà l'IA. Les PME marocaines adoptent rapidement les chatbots et l'analyse prédictive."
        }
      },
      {
        "@type": "Question",
        "name": "Vos solutions IA sont-elles conformes à la loi marocaine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, nos solutions sont 100% conformes à la loi 09-08 sur la protection des données personnelles et aux directives de la CNDP (Commission Nationale de contrôle de la protection des Données à caractère Personnel)."
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
            ? "الذكاء الاصطناعي المغرب | شات بوت دارجة، تعلم الآلة | Symloop"
            : currentLang === 'en'
            ? "Artificial Intelligence Morocco | AI Chatbot Darija, Machine Learning | Symloop"
            : "Intelligence Artificielle Maroc | IA, Chatbot Darija, Machine Learning | Symloop"}
        </title>
        <meta name="title" content={
          currentLang === 'ar'
            ? "الذكاء الاصطناعي المغرب | شات بوت دارجة، تعلم الآلة | Symloop"
            : currentLang === 'en'
            ? "Artificial Intelligence Morocco | AI Chatbot Darija, Machine Learning | Symloop"
            : "Intelligence Artificielle Maroc | IA, Chatbot Darija, Machine Learning | Symloop"
        } />
        <meta name="description" content={
          currentLang === 'ar'
            ? "رائد الذكاء الاصطناعي في المغرب. حلول ذكاء اصطناعي: شات بوت بالدارجة المغربية، تعلم الآلة، التعلم العميق. خدمة في الدار البيضاء، الرباط، مراكش، فاس، طنجة."
            : currentLang === 'en'
            ? "Leading AI company in Morocco. Custom AI solutions: chatbots in Moroccan Darija, machine learning, deep learning. Service in Casablanca, Rabat, Marrakech, Fez, Tangier."
            : "Leader intelligence artificielle au Maroc. Solutions IA sur mesure: chatbots darija marocaine, machine learning, deep learning. Service Casablanca, Rabat, Marrakech, Fès, Tanger."
        } />
        <meta name="keywords" content="intelligence artificielle maroc, IA maroc, AI morocco, machine learning maroc, deep learning maroc, chatbot maroc, assistant virtuel maroc, GPT maroc, ChatGPT maroc, NLP maroc, vision par ordinateur maroc, reconnaissance vocale maroc, الذكاء الاصطناعي المغرب, شات بوت المغرب, تعلم الآلة المغرب, darija marocaine IA, الدارجة المغربية, développeur IA casablanca, expert IA rabat marrakech, OCP IA, Attijariwafa Bank AI, robot conversationnel maroc, agent IA maroc, algorithme IA maroc, réseau de neurones maroc, tensorflow maroc, pytorch maroc, keras maroc, scikit-learn maroc, transformation digitale IA maroc, startup IA maroc, formation IA maroc, cours IA maroc, certification IA maroc, emploi IA maroc, stage IA maroc, hackathon IA maroc, innovation IA maroc, recherche IA maroc, laboratoire IA maroc, université IA maroc, master IA maroc, doctorat IA maroc, conférence IA maroc, événement IA maroc, communauté IA maroc, forum IA maroc, blog IA maroc, actualité IA maroc, projet IA maroc, solution IA maroc, plateforme IA maroc, API IA maroc, SDK IA maroc, framework IA maroc, bibliothèque IA maroc, outil IA maroc, logiciel IA maroc, application IA maroc, système IA maroc, architecture IA maroc, infrastructure IA maroc, cloud IA maroc, edge IA maroc, IoT IA maroc, blockchain IA maroc, quantum IA maroc, 5G IA maroc, robotique IA maroc, drone IA maroc, voiture autonome maroc, smart city maroc, ville intelligente maroc, casablanca smart city, rabat smart city, marrakech smart city, tanger smart city, fes smart city, santé IA maroc, médecine IA maroc, diagnostic IA maroc, imagerie médicale IA maroc, télémédecine IA maroc, clinique internationale marrakech IA, clinique ghandi casablanca IA, hôpital cheikh khalifa IA, CHU casablanca IA, CHU rabat IA, finance IA maroc, banque IA maroc, assurance IA maroc, trading IA maroc, crédit scoring IA maroc, anti-fraude IA maroc, KYC IA maroc, AML IA maroc, compliance IA maroc, régulation IA maroc, CNDP maroc IA, commission nationale contrôle protection données personnelles, loi 09-08 maroc IA, OCP group IA, office chérifien phosphates, attijariwafa bank IA, banque populaire maroc IA, BMCE bank of africa IA, bank of africa maroc IA, crédit agricole maroc IA, CIH bank maroc IA, crédit du maroc IA, société générale maroc IA, BMCI BNP paribas maroc IA, al barid bank maroc IA, CFG bank maroc IA, arab bank maroc IA, CDG capital maroc IA, caisse dépôt gestion maroc, maroc telecom IA, orange maroc IA, inwi maroc IA, ONEE maroc IA, office national électricité eau potable, ONCF maroc IA, office national chemins fer, RAM royal air maroc IA, casa transport IA, alsa maroc IA, CTM maroc IA, supratours maroc IA, oncf voyages IA, tanger med port IA, marsa maroc IA, ONDA maroc IA, office national aéroports, ADM autoroutes maroc IA, lydec casablanca IA, redal rabat IA, amendis tanger tétouan IA, radeema marrakech IA, rak eau électricité, radeef fès IA, ramsa agadir IA, radees settat IA, radeej el jadida IA, radeem meknès IA, label vie maroc IA, marjane holding IA, aswak assalam IA, bim stores maroc IA, electroplanet maroc IA, cosmos électroménager maroc, virgin megastore maroc IA, fnac maroc IA, decathlon maroc IA, ikea maroc IA, jumia maroc IA, hmizate.ma IA, avito maroc IA, souk.ma IA, bikhir maroc IA, kaymu maroc IA, vendo.ma IA, wandaloo maroc IA, moteur.ma IA, sarouty.ma IA, mubawab maroc IA, booking maroc IA, hotels.com maroc IA, airbnb maroc IA, staycation maroc IA, glovo maroc IA, uber eats maroc IA, jumia food maroc IA, happybox maroc IA, zomato maroc IA, la fourchette maroc IA, careem maroc IA, uber maroc IA, heetch maroc IA, yango maroc IA, inwi money IA, orange money maroc IA, mt cash maroc IA, jibi maroc IA, wafacash maroc IA, cash plus maroc IA, hps maroc IA, hightech payment systems, m2m group maroc IA, s2m maroc IA, microdata maroc IA, cmi maroc IA, centre monétique interbancaire, naps maroc IA, maroc numeric fund IA, mitc maroc IA, morocco IT cluster, apebi maroc IA, fédération technologies information, casa nearshore park IA, technopolis rabat IA, fès shore IA, oujda shore IA, tétouan shore IA, atlantic free zone IA, midparc casablanca IA, casa green town IA, zenata eco city IA, mazagan beach resort IA, saïdia resort IA, taghazout bay IA, mohammed VI polytechnic university IA, UM6P ben guerir, université mohammed V rabat IA, université hassan II casablanca IA, université cadi ayyad marrakech IA, université sidi mohammed ben abdellah fès IA, université ibn tofail kénitra IA, université abdelmalek essaadi tanger IA, université chouaib doukkali el jadida IA, université sultan moulay slimane béni mellal IA, université mohammed premier oujda IA, université ibn zohr agadir IA, ISCAE casablanca IA, institut supérieur commerce administration entreprises, ENCG maroc IA, école nationale commerce gestion, ENSA maroc IA, école nationale sciences appliquées, ENSAM maroc IA, école nationale supérieure arts métiers, EMI rabat IA, école mohammadia ingénieurs, INPT rabat IA, institut national postes télécommunications, EHTP casablanca IA, école hassania travaux publics, ESI rabat IA, école sciences information, ENSIAS rabat IA, école nationale supérieure informatique analyse systèmes, ENSMR rabat IA, école nationale supérieure mines rabat, INSEA rabat IA, institut national statistique économie appliquée, EMSI maroc IA, école marocaine sciences ingénieur, UIR rabat IA, université internationale rabat, mundiapolis casablanca IA, université mundiapolis, UIC casablanca IA, université internationale casablanca, AUI ifrane IA, al akhawayn university, HEM maroc IA, hautes études management, HEEC marrakech IA, école des hautes études économiques commerciales, sup de co marrakech IA, ESA marrakech IA, école supérieure affaires, université privée marrakech IA, UPM marrakech, université privée fès IA, UEMF fès IA, université euromed fès, ISGA maroc IA, institut supérieur génie appliqué, supinfo maroc IA, epitech maroc IA, 1337 school IA, école 42 maroc, youcode IA, simplon maroc IA, le wagon maroc IA, gomycode maroc IA, arkx talent factory IA, 3w academy maroc IA, orange digital center maroc IA, samsung innovation campus maroc IA, microsoft maroc IA, google maroc IA, amazon maroc IA, oracle maroc IA, IBM maroc IA, cisco maroc IA, huawei maroc IA, dell maroc IA, HP maroc IA, lenovo maroc IA, asus maroc IA, acer maroc IA, apple maroc IA, samsung maroc IA, LG maroc IA, sony maroc IA, xiaomi maroc IA, oppo maroc IA, vivo maroc IA, realme maroc IA, oneplus maroc IA, honor maroc IA, nokia maroc IA, alcatel maroc IA, condor maroc IA, smartphone.ma IA, pc portable maroc IA, bestmark maroc IA, microchoix maroc IA, ultra pc maroc IA, electro bousfiha IA, derb ghallef casablanca IA, quartier habous casablanca IA, médina marrakech IA, médina fès IA, médina rabat IA, médina tétouan IA, patrimoine UNESCO maroc IA, volubilis maroc IA, aït benhaddou maroc IA, essaouira médina IA, el jadida cité portugaise IA, startup maroc IA, auto-entrepreneur maroc IA, statut auto-entrepreneur maroc, OMPIC maroc IA, office marocain propriété industrielle commerciale, CRI maroc IA, centre régional investissement, invest in morocco IA, AMDIE maroc IA, agence marocaine développement investissements exports, ANAPEC maroc IA, agence nationale promotion emploi compétences, CNSS maroc IA, caisse nationale sécurité sociale, AMO maroc IA, assurance maladie obligatoire, RAMED maroc IA, régime assistance médicale, IR maroc IA, impôt sur revenu, IS maroc IA, impôt sociétés, TVA maroc IA, taxe valeur ajoutée, DGI maroc IA, direction générale impôts, ADII maroc IA, administration douanes impôts indirects, barid maroc IA, poste maroc, amana messagerie maroc IA, DHL maroc IA, fedex maroc IA, UPS maroc IA, aramex maroc IA, chronopost maroc IA, CTM messagerie IA, ONCF logistique IA, SNTL maroc IA, société nationale transport logistique, la voie express maroc IA, economy booking maroc IA, colis privé maroc IA, e-commerce maroc IA, paiement en ligne maroc IA, CMI paiement maroc IA, payzone maroc IA, fatourati maroc IA, maroc pay IA, paypal maroc IA, 2M maroc IA, al aoula maroc IA, medi1 TV IA, télé maroc IA, arryadia maroc IA, tamazight TV maroc IA, al maghribiya IA, assadissa maroc IA, aflam TV maroc IA, chada TV maroc IA, hit radio maroc IA, medi1 radio IA, radio mars maroc IA, cap radio maroc IA, med radio maroc IA, atlantic radio maroc IA, luxe radio maroc IA, radio plus maroc IA, chada FM maroc IA, MFM radio maroc IA, aswat maroc IA, radio nationale maroc IA, radio mohammed VI coran, hespress maroc IA, le360 maroc IA, yabiladi maroc IA, bladi.net IA, medias24 maroc IA, telquel maroc IA, leconomiste maroc IA, aujourdhui le maroc IA, le matin maroc IA, libération maroc IA, al ahdath al maghribia IA, assabah maroc IA, akhbar al yaoum IA, al massae maroc IA, al ittihad al ichtiraki IA, bayane al yaoum IA, rissalat al oumma IA, al haraka maroc IA, al alam maroc IA, menara.ma IA, goud.ma IA, hibapress maroc IA, rue20.com IA, anfaspress maroc IA, alyaoum24 maroc IA, chouf TV maroc IA, snrt maroc IA, société nationale radiodiffusion télévision, HCA maroc IA, haute autorité communication audiovisuelle, MAP maroc IA, maghreb arabe presse, festival mawazine rabat IA, festival gnaoua essaouira IA, festival film marrakech IA, FIFM marrakech IA, festival casa festival IA, jazzablanca IA, visa for music rabat IA, festival timitar agadir IA, festival fès musiques sacrées monde, festival tanjazz tanger IA, L'boulevard maroc IA, festival boulevard jeunes musiciens, théâtre mohammed V rabat IA, théâtre national mohammed V, grand théâtre casablanca IA, studio des arts vivants casablanca IA, la fabrique culturelle casablanca IA, institut français maroc IA, institut cervantes maroc IA, british council maroc IA, goethe institut maroc IA, institut confucius maroc IA, centre culturel russe maroc IA, fondation OCP maroc IA, fondation attijariwafa bank IA, fondation banque populaire IA, fondation BMCE bank IA, fondation CDG IA, fondation mohammed V solidarité IA, fondation mohammed VI protection environnement, fondation lalla salma cancer IA, fondation hassan II marocains résidant étranger, association initiatives maroc IA, injaz al maghrib IA, association marocaine solidarité développement, startup weekend maroc IA, hackathon maroc IA, morocco tech tour IA, africa tech summit maroc IA, gitex africa maroc IA, emerging valley maroc IA, africa digital summit IA, ai expo africa maroc IA, big data & ai world maroc IA, smart city expo casablanca IA, siam salon agriculture meknès IA, pollutec maroc IA, elec expo maroc IA, solaire expo maroc IA, logismed maroc IA, maroc in mode IA, morocco mall casablanca IA, anfaplace mall casablanca IA, tachfine center casablanca IA, marina shopping casablanca IA, racine casablanca IA, méga mall rabat IA, arribat center rabat IA, agdal shopping rabat IA, borj fez IA, al mazar fès IA, carré eden marrakech IA, menara mall marrakech IA, almazar marrakech IA, socco alto mall tanger IA, tanger city mall IA, tanger city center IA, ibn battouta mall tanger IA, forum el jadida IA, marjane mall agadir IA, sport maroc IA, football maroc IA, équipe nationale maroc IA, lions de l'atlas IA, wydad casablanca IA, WAC casablanca IA, raja casablanca IA, RCA casablanca IA, FAR rabat IA, MAS fès IA, kawkab marrakech IA, KACM marrakech, ittihad tanger IA, IRT tanger IA, difaa el jadida IA, DHJ el jadida, hassania agadir IA, HUSA agadir, FUS rabat IA, MCO oujda IA, mouloudia oujda, OCS safi IA, OCK khouribga IA, RSB berkane IA, renaissance berkane, botola pro maroc IA, FRMF maroc IA, fédération royale marocaine football, ligue nationale football professionnel maroc, coupe du trône maroc IA, champions league africaine maroc IA, coupe CAF maroc IA, achraf hakimi IA, hakim ziyech IA, youssef en-nesyri IA, sofyan amrabat IA, noussair mazraoui IA, yassine bounou IA, romain saïss IA, sofiane boufal IA, munir el kajoui IA, abderrazak hamdallah IA, basket maroc IA, handball maroc IA, volleyball maroc IA, athlétisme maroc IA, hicham el guerrouj IA, nawal el moutawakel IA, saïd aouita IA, khalid skah IA, nezha bidouane IA, hasna benhassi IA, abdalaati iguider IA, soufiane el bakkali IA, boxe maroc IA, mohammed rabii IA, hassan saada IA, tennis maroc IA, younes el aynaoui IA, hicham arazi IA, karim alami IA, golf maroc IA, royal golf dar es salam rabat IA, royal golf marrakech IA, mazagan golf el jadida IA, golf saïdia IA, golf cabo negro IA, cuisine marocaine IA, tajine maroc IA, couscous marocain IA, pastilla maroc IA, harira maroc IA, rfissa maroc IA, mrouzia maroc IA, tangia marrakchia IA, méchoui maroc IA, bissara maroc IA, harcha maroc IA, msemen maroc IA, baghrir maroc IA, chebakia maroc IA, sellou maroc IA, ghriba maroc IA, cornes gazelle maroc IA, thé à la menthe maroc IA, atay maroc IA, artisanat maroc IA, tapis maroc IA, zellige maroc IA, poterie fès IA, cuir maroc IA, maroquinerie maroc IA, babouche maroc IA, caftan maroc IA, takchita maroc IA, djellaba maroc IA, gandoura maroc IA, haik maroc IA, henné maroc IA, argan maroc IA, huile argan maroc IA, safran taliouine IA, rose kelaat mgouna IA, coopérative maroc IA, économie sociale solidaire maroc, commerce équitable maroc IA, label maroc IA, IGP maroc IA, indication géographique protégée, AOP maroc IA, appellation origine protégée, bio maroc IA, agriculture biologique maroc, AMABIO maroc IA, association marocaine agriculture biologique, COMADER maroc IA, confédération marocaine agriculture développement rural, crédit agricole maroc IA, plan maroc vert IA, PMV maroc, génération green maroc IA, stratégie génération green 2020-2030, ONCA maroc IA, office national conseil agricole, ADA maroc IA, agence développement agricole, ANDZOA maroc IA, agence nationale développement zones oasiennes arganier, INRA maroc IA, institut national recherche agronomique, IAV hassan II IA, institut agronomique vétérinaire, ENA meknès IA, école nationale agriculture, ENAM maroc IA, école nationale agriculture meknès, energie maroc IA, MASEN maroc IA, moroccan agency sustainable energy, ONEE branche électricité IA, ONEE branche eau IA, SIE maroc IA, société investissements énergétiques, IRESEN maroc IA, institut recherche energie solaire énergies nouvelles, noor ouarzazate IA, centrale solaire noor, noor midelt IA, noor tafilalet IA, éolien maroc IA, parc éolien tanger IA, parc éolien tarfaya IA, parc éolien midelt IA, barrage maroc IA, barrage bin el ouidane IA, barrage al wahda IA, barrage idriss premier IA, barrage hassan II IA, barrage youssef ben tachfine IA, dessalement eau mer maroc IA, station dessalement agadir IA, station dessalement casablanca IA, station dessalement laayoune IA, environnement maroc IA, cop22 marrakech IA, coalition eau maroc IA, économie bleue maroc IA, plan national eau maroc IA, programme national assainissement liquide mutualisé, PNAM maroc IA, programme national déchets ménagers, PNDM maroc IA, coalition climat air propre maroc, CCAC maroc IA, NDC maroc IA, contribution déterminée nationale, AMEE maroc IA, agence marocaine efficacité énergétique, industrie maroc IA, CGEM maroc IA, confédération générale entreprises maroc, AMICA maroc IA, association marocaine industries chimiques, AMITH maroc IA, association marocaine industries textile habillement, ASMEX maroc IA, association marocaine exportateurs, FENAGRI maroc IA, fédération nationale agroalimentaire, FIMME maroc IA, fédération industries métallurgiques mécaniques électriques, FCS maroc IA, fédération chimie santé, FDIM maroc IA, fédération interprofessionnelle marocaine, APC maroc IA, association professionnelle cimentiers, zones industrielles maroc IA, zone franche tanger IA, atlantic free zone kénitra IA, midparc free zone IA, casablanca finance city IA, CFC casablanca, technopole oujda IA, haliopolis agadir IA, agropole meknès IA, p2i casablanca IA, plateforme industrielle intégrée, écocité zenata IA, vallée verte mohammed VI IA, cité mohammed VI tanger tech IA, benguerir smart city IA, chrafate smart city IA, casa anfa IA, wessal casablanca bouregreg IA, lagune marchica nador IA, taghazout eco resort IA, mazagan resort el jadida IA, lixus eco resort larache IA, plage blanche guelmim IA, oued chbika tan tan IA, dragon island dakhla IA, marchica sport city IA, BO50 casablanca IA, berkeley casablanca IA, diplomatique rabat IA, hay riad rabat IA, souissi rabat IA, agdal rabat IA, hassan rabat IA, océan rabat IA, les orangers rabat IA, dar es salam rabat IA, aviation rabat IA, ambassadeurs casablanca IA, oasis casablanca IA, californie casablanca IA, racine casablanca IA, gauthier casablanca IA, palmier casablanca IA, bourgogne casablanca IA, anfa casablanca IA, maârif casablanca IA, sidi maârouf casablanca IA, ain diab casablanca IA, ain sebaa casablanca IA, hay mohammadi casablanca IA, sidi bernoussi casablanca IA, sidi moumen casablanca IA, derb sultan casablanca IA, mers sultan casablanca IA, hay hassani casablanca IA, sbata casablanca IA, oulfa casablanca IA, sidi othmane casablanca IA, guéliz marrakech IA, hivernage marrakech IA, palmeraie marrakech IA, route de fès marrakech IA, route ourika marrakech IA, route amizmiz marrakech IA, targa marrakech IA, saâda marrakech IA, m'hamid marrakech IA, daoudiate marrakech IA, massira marrakech IA, azli marrakech IA, socoma marrakech IA, sidi youssef ben ali marrakech IA, sidi ghanem marrakech IA, tassoultante marrakech IA, loudaya marrakech IA, ville nouvelle fès IA, fès el bali IA, fès jdid IA, saïss fès IA, route immouzer fès IA, bensouda fès IA, narjis fès IA, adarissa fès IA, mont fleuri fès IA, hay riad tanger IA, val fleuri tanger IA, iberia tanger IA, malabata tanger IA, marchan tanger IA, moujahidine tanger IA, branes tanger IA, casa barata tanger IA, mesnana tanger IA, boubana tanger IA, california tanger IA, achakar tanger IA, médina tanger IA, kasbah tanger IA, marshan tanger IA, socco tanger IA, place nations tanger IA, boulevard pasteur tanger IA, boulevard mohammed V tanger IA, corniche tanger IA, tanja marina bay IA, tanger city center IA, zone franche tanger IA, tanger automotive city IA, tanger med zones IA, renault tanger IA, PSA tanger IA, yazaki maroc IA, sumitomo maroc IA, lear corporation maroc IA, valeo maroc IA, faurecia maroc IA, magneti marelli maroc IA, saint gobain maroc IA, nexans maroc IA, leoni maroc IA, delphi maroc IA, te connectivity maroc IA, kromberg schubert maroc IA, fujikura maroc IA, sews maroc IA, aptiv maroc IA, visteon maroc IA, johnson controls maroc IA, denso maroc IA, continental maroc IA, plastic omnium maroc IA, snop maroc IA, socafix maroc IA, gestamp maroc IA, hands corporation maroc IA, GMD maroc IA, groupe diffusion automobile, sopriam maroc IA, retail holding maroc IA, ynna holding maroc IA, groupe akwa IA, groupe saham IA, groupe alliances IA, groupe palmeraie IA, groupe addoha IA, groupe CDG IA, groupe ONA IA, SNI maroc IA, al mada holding IA, groupe managem IA, groupe cosumar IA, groupe lesieur cristal IA, groupe centrale danone IA, groupe bel maroc IA, groupe savola maroc IA, nestlé maroc IA, unilever maroc IA, procter gamble maroc IA, colgate palmolive maroc IA, henkel maroc IA, l'oréal maroc IA, groupe OCP IA, lafargeholcim maroc IA, ciments maroc IA, cimat maroc IA, jet contractors maroc IA, TGCC maroc IA, travaux généraux construction casablanca, groupe vinci maroc IA, bouygues maroc IA, china railway maroc IA, china communications construction maroc, CCCC maroc IA, somagec maroc IA, sgtm maroc IA, houar maroc IA, seprob maroc IA, LPEE maroc IA, laboratoire public essais études, CID maroc IA, CMKD maroc IA, cabinet KPMG maroc IA, PWC maroc IA, deloitte maroc IA, EY maroc IA, ernst young maroc, mazars maroc IA, grant thornton maroc IA, BDO maroc IA, fidaroc grant thornton IA, hdid consultants maroc IA, afrique conseil maroc IA, valyans consulting maroc IA, LMS CSA maroc IA, marketing communication, shem's publicité maroc IA, klem euro rscg maroc IA, saga communication maroc IA, ddb casablanca IA, leo burnett casablanca IA, mcann casablanca IA, tbwa maroc IA, ogilvy maroc IA, havas maroc IA, mindshare maroc IA, OMD maroc IA, PHD maroc IA, zenith maroc IA, blue moon maroc IA, mosaik maroc IA, we are maroc IA, marocmetrie IA, imperium media maroc IA, IPSOS maroc IA, kantar TNS maroc IA, nielsen maroc IA, GFK maroc IA, sunergia maroc IA, economia HEM research center IA, policy center new south IA, PCNS rabat IA, OCP policy center IA, IRES maroc IA, institut royal études stratégiques, DEPF maroc IA, direction études prévisions financières, HCP maroc IA, haut commissariat plan, CESE maroc IA, conseil économique social environnemental, CMC maroc IA, centre marocain conjoncture, IMRI maroc IA, institut marocain relations internationales, amadeus maroc IA, institut amadeus, CDG institute IA, attijariwafa bank research IA, BMCE capital research IA, CFG research maroc IA, industrie pharmaceutique maroc IA, cooper pharma maroc IA, laprophan maroc IA, sothema maroc IA, pharma 5 maroc IA, polymedic maroc IA, zenith pharma maroc IA, iberma maroc IA, steripharma maroc IA, promopharm maroc IA, galenica maroc IA, bottu maroc IA, laboratoires injaz IA, afric phar maroc IA, pharma life maroc IA, phi santé maroc IA, maphar maroc IA, medicament maroc IA, pharmacie maroc IA, parapharmacie maroc IA, 1001 pharmacies maroc IA, pharma.ma IA, santé maroc IA, CNOPS maroc IA, caisse nationale organismes prévoyance sociale, mutuelle maroc IA, saham assurance maroc IA, wafa assurance maroc IA, atlanta assurance maroc IA, axa assurance maroc IA, allianz maroc IA, mamda mcma maroc IA, cat maroc IA, compagnie assurances transport, zurich assurance maroc IA, fédération marocaine sociétés assurances réassurance, FMSAR maroc IA, association courtiers assureurs maroc, ACAM maroc IA, tourisme maroc IA, ONMT maroc IA, office national marocain tourisme, vision 2020 tourisme maroc, vision 2023 tourisme maroc, CRT maroc IA, conseil régional tourisme, CPT maroc IA, conseil provincial tourisme, FNIH maroc IA, fédération nationale industrie hôtelière, FNT maroc IA, fédération nationale tourisme, FNAVM maroc IA, fédération nationale agences voyages, CNT maroc IA, confédération nationale tourisme, atlas hospitality maroc IA, mazagan beach golf resort IA, royal mansour marrakech IA, la mamounia marrakech IA, four seasons marrakech IA, mandarin oriental marrakech IA, fairmont royal palm marrakech IA, sofitel marrakech IA, movenpick marrakech IA, le méridien marrakech IA, radisson blu marrakech IA, hyatt regency casablanca IA, sheraton casablanca IA, marriott rabat IA, hilton tanger IA, ritz carlton maroc IA, transport aérien maroc IA, aéroport mohammed V casablanca IA, aéroport rabat salé IA, aéroport marrakech menara IA, aéroport fès saïss IA, aéroport tanger ibn battouta IA, aéroport agadir al massira IA, aéroport oujda angads IA, aéroport nador aroui IA, aéroport tétouan sania ramel IA, aéroport al hoceima chérif idrissi IA, aéroport essaouira mogador IA, aéroport ouarzazate IA, aéroport errachidia moulay ali cherif IA, aéroport laayoune hassan premier IA, aéroport dakhla IA, aéroport guelmim IA, aéroport tan tan IA, aéroport zagora IA, aéroport béni mellal IA, aéroport bouarfa IA, arabia maroc IA, air arabia maroc IA, ryanair maroc IA, easyjet maroc IA, transavia maroc IA, vueling maroc IA, tui fly maroc IA, jet4you maroc IA, helitours maroc IA, binter canarias maroc IA, air france maroc IA, emirates maroc IA, qatar airways maroc IA, turkish airlines maroc IA, lufthansa maroc IA, iberia maroc IA, tap portugal maroc IA, alitalia maroc IA, egyptair maroc IA, tunisair maroc IA, air algérie maroc IA, saudia maroc IA, kuwait airways maroc IA, etihad airways maroc IA, air canada maroc IA, train maroc IA, al boraq maroc IA, LGV maroc IA, ligne grande vitesse maroc, al atlas maroc IA, train rapide maroc, TER maroc IA, train express régional, TNR maroc IA, train navette rapide, train ordinaire maroc IA, fret ONCF maroc IA, gare casa voyageurs IA, gare casa port IA, gare rabat agdal IA, gare rabat ville IA, gare kenitra IA, gare tanger ville IA, gare fès IA, gare meknès IA, gare marrakech IA, gare oujda IA, gare sidi kacem IA, gare khouribga IA, gare benguerir IA, gare settat IA, gare el jadida IA, gare safi IA, gare nador IA, maritime maroc IA, FRS maroc IA, balearia maroc IA, trasmediterranea maroc IA, naviera armas maroc IA, grimaldi lines maroc IA, grandi navi veloci maroc IA, GNV maroc IA, intershipping maroc IA, comanav maroc IA, comarit maroc IA, limadet ferry IA, ferry maroc espagne IA, ferry maroc france IA, ferry maroc italie IA, ferry tanger algésiras IA, ferry tanger tarifa IA, ferry tanger barcelone IA, ferry tanger sète IA, ferry tanger gênes IA, ferry nador almeria IA, ferry nador motril IA, ferry al hoceima motril IA, ferry casablanca portimão IA, croisière maroc IA, port casablanca IA, port tanger med IA, port mohammedia IA, port agadir IA, port safi IA, port jorf lasfar IA, port laayoune IA, port dakhla IA, port tan tan IA, port tarfaya IA, port nador west med IA, port kenitra atlantique IA, somagec port IA, marsa maroc IA, tanger med port authority IA, agence nationale ports maroc, ANP maroc IA, capitainerie maroc IA, pilotage portuaire maroc IA, remorquage portuaire maroc IA, manutention portuaire maroc IA, SODEP maroc IA, SOMAPORT IA, mass céréales al maghreb IA, terminal conteneurs maroc, APM terminals tangier IA, eurogate tanger IA, tanger alliance IA, horizon terminals maroc IA, international maritime transit IA, IMT maroc IA, intercéréales maroc IA, maritime transit food IA, MTF maroc IA, pétrole maroc IA, samir maroc IA, société anonyme marocaine industrie raffinage, total maroc IA, shell maroc IA, vivo energy maroc IA, petrom maroc IA, winxo maroc IA, oilibya maroc IA, ziz maroc IA, afriquia gaz IA, vitogaz maroc IA, butagaz maroc IA, tissirgaz maroc IA, gazafric maroc IA, salam gaz maroc IA, national gaz maroc IA, primagaz maroc IA, SNEP maroc IA, société nationale produits pétroliers, GPM maroc IA, groupement pétroliers maroc, mines maroc IA, ONHYM maroc IA, office national hydrocarbures mines, managem maroc IA, CMG maroc IA, compagnie minière guemassa, CTT maroc IA, compagnie tifnout tiranimine, SMI maroc IA, société métallurgique imiter, AGM maroc IA, akka gold mining, SAMINE maroc IA, CADETAF maroc IA, COMABAR maroc IA, SOMIFER maroc IA, CMT maroc IA, compagnie minière touissit, SACEM maroc IA, CMBA maroc IA, compagnie minière bleida, phosboucraa maroc IA, CIMR maroc IA, caisse interprofessionnelle marocaine retraites, CDG prévoyance IA, AXA crédit maroc IA, wafa immobilier maroc IA, salafin maroc IA, taslif maroc IA, dar salaf maroc IA, vivalis salaf maroc IA, fnac maroc IA, fonds national crédit agricole, tamwilcom maroc IA, jaida maroc IA, association microcrédit, al amana microfinance maroc IA, attawfiq micro-finance maroc IA, al karama maroc IA, AIMC maroc IA, ARDI maroc IA, bab rizk jameel maroc IA, INMAA maroc IA, tawada maroc IA, FNAM maroc IA, fédération nationale associations microcrédit, centre mohammed VI soutien microfinance solidaire, investissement maroc IA, CDG invest maroc IA, fipar holding maroc IA, O capital maroc IA, BMCE capital maroc IA, attijariwafa bank capital IA, upline group maroc IA, CFG bank capital IA, valoris capital maroc IA, red med capital IA, capital invest maroc IA, CDG capital private equity IA, atlamed capital IA, mediterrania capital partners IA, abraaj maroc IA, actis maroc IA, development partners international maroc, DPI maroc IA, azur partners maroc IA, north africa capital partners IA, NACP maroc IA, afric invest maroc IA, SPE capital partners maroc IA, brookstone partners maroc IA, alta investment maroc IA, private equity initiative maroc IA, PEI maroc IA, MENA capital maroc IA, agram invest maroc IA, atlas capital maroc IA, fonds igrane maroc IA, fonds sindibad maroc IA, fonds acamsa maroc IA, fonds moussahama IA, fonds dayam maroc IA, fonds emergence maroc IA, bourse casablanca IA, MASI maroc IA, morocco all shares index, MADEX maroc IA, morocco most active shares, FTSE CSE morocco IA, MSI20 maroc IA, CFG25 maroc IA, société bourse casablanca IA, AMMC maroc IA, autorité marocaine marché capitaux, dépositaire central maroc, maroclear IA, association professionnelle sociétés bourse, APSB maroc IA, association marocaine sociétés gestion actifs, AMSGP maroc IA, société bourse valeurs casablanca, upline securities maroc IA, attijari intermédiation IA, CFG marchés IA, BMCE capital bourse IA, crédit du maroc capital IA, CDG capital bourse IA, valoris securities IA, capital trust securities IA, CTS maroc IA, artbourse maroc IA, ICF al wassit IA, MSIN maroc IA, maroc services intermédiation, sogécapital bourse IA, alma finance group maroc IA, atlas capital bourse IA, eurobourse maroc IA, finergy maroc IA, IPO maroc IA, introduction bourse maroc, OPA maroc IA, offre publique achat, OPV maroc IA, offre publique vente, OPE maroc IA, offre publique échange, OPR maroc IA, offre publique retrait, augmentation capital maroc IA, split action maroc IA, dividende maroc IA, obligation maroc IA, emprunt obligataire maroc IA, green bonds maroc IA, obligations vertes maroc, sukuk maroc IA, finance islamique maroc IA, mourabaha maroc IA, ijara maroc IA, moucharaka maroc IA, takaful maroc IA, wafa assurance takaful IA, banque participative maroc IA, umnia bank maroc IA, al yusr maroc IA, al akhdar bank maroc IA, bank assafa maroc IA, bank al tamweel wal inmaa IA, BTI bank maroc, dar al amane maroc IA, najmah maroc IA, arreda maroc IA, conseil supérieur oulémas maroc IA, CSO maroc IA, comité charia finance participative maroc, window islamique maroc IA, guichet islamique maroc, halal maroc IA, IMANOR maroc IA, institut marocain normalisation, certification halal maroc IA, expo halal maroc IA, morocco halal expo IA, startup ecosystem maroc IA, techpark casablanca IA, morocco startup ecosystem IA, startupblink maroc IA, startup grind maroc IA, founder institute maroc IA, entrepreneurship ecosystem maroc IA, réseau entreprendre maroc IA, centre jeunes dirigeants maroc, CJD maroc IA, association jeunes entrepreneurs maroc, AJE maroc IA, club entrepreneurs maroc IA, CEED maroc IA, center emerging economies development, endeavor maroc IA, bidaya maroc IA, social entrepreneurship maroc IA, enactus maroc IA, pulse maroc IA, impact lab maroc IA, switchmed maroc IA, green entrepreneurship maroc IA, cleantech maroc IA, greentech maroc IA, agritech maroc IA, foodtech maroc IA, fintech maroc IA, insurtech maroc IA, healthtech maroc IA, edtech maroc IA, e-learning maroc IA, MOOC maroc IA, morocco MOOC IA, université numérique maroc, ONE maroc IA, office national électricité, ONEP maroc IA, office national eau potable, régies maroc IA, RADEEMA marrakech IA, RADEEF fès IA, RAK eau électricité kenitra, RADEES séttat IA, RADEEJ el jadida IA, RADEEM meknès IA, RADEET tanger IA, RAMSA agadir IA, LYDEC casablanca IA, REDAL rabat IA, amendis tanger tétouan IA, veolia maroc IA, suez maroc IA, quadrant maroc IA, derichebourg maroc IA, sita maroc IA, averda maroc IA, ozone maroc IA, segor maroc IA, SOS NDD maroc IA, tecmed maroc IA, urbaser maroc IA, pizzorno maroc IA, mecomar maroc IA, ecodas maroc IA, ecoval maroc IA, athisa maroc IA, GPC maroc IA, generale polyvalente construction, économie circulaire maroc IA, recyclage maroc IA, valorisation déchets maroc IA, compostage maroc IA, méthanisation maroc IA, incinération maroc IA, enfouissement maroc IA, décharge contrôlée maroc IA, centre enfouissement valorisation maroc, CEV maroc IA, tri sélectif maroc IA, collecte sélective maroc IA, economie verte maroc IA, croissance verte maroc IA, finance verte maroc IA, green economy maroc IA, développement durable maroc IA, RSE maroc IA, responsabilité sociale entreprises, label RSE maroc IA, CGEM label RSE IA, ISO 26000 maroc IA, global compact maroc IA, pacte mondial maroc IA, ODD maroc IA, objectifs développement durable, agenda 2030 maroc IA, NDC maroc IA, contribution nationale déterminée, SNDD maroc IA, stratégie nationale développement durable, charte environnement développement durable maroc, CEDD maroc IA, fondation mohammed VI environnement IA, éco-école maroc IA, pavillon bleu maroc IA, clef verte maroc IA, compensation carbone maroc IA, crédit carbone maroc IA, marché carbone maroc IA, bilan carbone maroc IA, empreinte carbone maroc IA, neutralité carbone maroc IA, adaptation changement climatique maroc IA, atténuation changement climatique maroc IA, résilience climatique maroc IA, justice climatique maroc IA, transition énergétique maroc IA, transition écologique maroc IA, transition juste maroc IA, économie sociale maroc IA, ESS maroc IA, économie sociale solidaire maroc, coopérative maroc IA, mutuelle maroc IA, association maroc IA, fondation maroc IA, entreprise sociale maroc IA, innovation sociale maroc IA, impact social maroc IA, entrepreneuriat social maroc IA, investissement impact maroc IA, finance solidaire maroc IA, microcrédit maroc IA, crowdfunding maroc IA, crowdlending maroc IA, crowdequity maroc IA, cotizi maroc IA, smala co maroc IA, afineety maroc IA, wuluj maroc IA, chrono24 maroc IA, hmizate maroc IA, chari maroc IA, epicerie verte maroc IA, glovo maroc IA, dabadoc maroc IA, 7ob maroc IA, welovebuzz maroc IA, forsa maroc IA, stagiaires.ma IA, rekrute.com IA, emploi.ma IA, bayt.com maroc IA, indeed maroc IA, linkedin maroc IA, viadeo maroc IA, tanmia.ma IA, anapec portail IA, skillsnet maroc IA, ofppt maroc IA, office formation professionnelle promotion travail, ista maroc IA, institut spécialisé technologie appliquée, ita maroc IA, institut technologie appliquée, cfm maroc IA, centre formation métiers, cfa maroc IA, centre formation apprentis, greta maroc IA, groupement établissements, ifm maroc IA, institut formation métiers, efp maroc IA, établissement formation professionnelle, centre formation continue maroc IA, université citoyenne maroc IA, université tous âges maroc IA, mooc maroc IA, massive open online course, formation distance maroc IA, e-learning maroc IA, formation ligne maroc IA, certification maroc IA, validation acquis expérience maroc, VAE maroc IA, bilan compétences maroc IA, coaching maroc IA, mentoring maroc IA, soft skills maroc IA, leadership maroc IA, management maroc IA, gestion projet maroc IA, communication maroc IA, négociation maroc IA, vente maroc IA, marketing maroc IA, digital marketing maroc IA, transformation digitale maroc IA, industrie 4.0 maroc IA, lean management maroc IA, six sigma maroc IA, kaizen maroc IA, agile maroc IA, scrum maroc IA, design thinking maroc IA, innovation maroc IA, créativité maroc IA, entrepreneurship maroc IA, intrapreneurship maroc IA, startup maroc IA, scaleup maroc IA, licorne maroc IA, exit maroc IA, M&A maroc IA, fusion acquisition maroc, LBO maroc IA, leveraged buyout maroc, MBO maroc IA, management buyout maroc, MBI maroc IA, management buy-in maroc, spin off maroc IA, joint venture maroc IA, partenariat stratégique maroc IA, alliance stratégique maroc IA, consortium maroc IA, GIE maroc IA, groupement intérêt économique, cluster maroc IA, pôle compétitivité maroc IA, écosystème maroc IA, hub maroc IA, living lab maroc IA, fab lab maroc IA, maker space maroc IA, coworking maroc IA, incubateur maroc IA, accélérateur maroc IA, pépinière entreprises maroc IA, venture builder maroc IA, company builder maroc IA, startup studio maroc IA, innovation lab maroc IA, corporate venture maroc IA, corporate accelerator maroc IA, open innovation maroc IA, R&D maroc IA, recherche développement maroc, innovation maroc IA, brevet maroc IA, propriété intellectuelle maroc IA, marque maroc IA, design maroc IA, modèle utilité maroc IA, secret affaires maroc IA, savoir-faire maroc IA, transfert technologie maroc IA, licence maroc IA, franchise maroc IA, concession maroc IA, distribution maroc IA, agent commercial maroc IA, commissionnaire maroc IA, courtier maroc IA, VRP maroc IA, voyageur représentant placier, B2B maroc IA, business to business maroc, B2C maroc IA, business to consumer maroc, B2B2C maroc IA, B2G maroc IA, business to government maroc, C2C maroc IA, consumer to consumer maroc, P2P maroc IA, peer to peer maroc, marketplace maroc IA, place de marché maroc, plateforme maroc IA, agrégateur maroc IA, comparateur maroc IA, moteur recherche maroc IA, annuaire maroc IA, portail maroc IA, site vitrine maroc IA, site e-commerce maroc IA, site institutionnel maroc IA, blog maroc IA, forum maroc IA, wiki maroc IA, réseau social maroc IA, application mobile maroc IA, PWA maroc IA, progressive web app maroc, SaaS maroc IA, software as a service maroc, PaaS maroc IA, platform as a service maroc, IaaS maroc IA, infrastructure as a service maroc, cloud maroc IA, cloud computing maroc, cloud public maroc IA, cloud privé maroc IA, cloud hybride maroc IA, multi cloud maroc IA, edge computing maroc IA, fog computing maroc IA, serverless maroc IA, microservices maroc IA, API maroc IA, application programming interface, SDK maroc IA, software development kit, framework maroc IA, librairie maroc IA, open source maroc IA, logiciel libre maroc IA, propriétaire maroc IA, licence maroc IA, GPL maroc IA, MIT maroc IA, apache maroc IA, creative commons maroc IA, domaine public maroc IA, droit auteur maroc IA, copyright maroc IA, ONDA maroc IA, office national droits auteur, BMDA maroc IA, bureau marocain droits auteur" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://symloop.com/solutions/intelligence-artificielle-maroc" />
        <meta property="og:title" content={
          currentLang === 'ar'
            ? "الذكاء الاصطناعي المغرب | Symloop Technology"
            : currentLang === 'en'
            ? "Artificial Intelligence Morocco | Symloop Technology"
            : "Intelligence Artificielle Maroc | Symloop Technology"
        } />
        <meta property="og:description" content={
          currentLang === 'ar'
            ? "حلول ذكاء اصطناعي متقدمة للشركات المغربية. شات بوت، مساعد صوتي، تعلم الآلة."
            : currentLang === 'en'
            ? "Advanced AI solutions for Moroccan companies. Chatbot, voice assistant, machine learning."
            : "Solutions IA avancées pour entreprises marocaines. Chatbot, assistant vocal, machine learning."
        } />
        <meta property="og:image" content="https://symloop.com/assets/symloop-ai-morocco.png" />
        <meta property="og:locale" content={currentLang === 'ar' ? 'ar_MA' : currentLang === 'en' ? 'en_US' : 'fr_MA'} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://symloop.com/solutions/intelligence-artificielle-maroc" />
        <meta name="twitter:title" content={
          currentLang === 'ar'
            ? "الذكاء الاصطناعي المغرب | Symloop"
            : currentLang === 'en'
            ? "AI Morocco | Symloop"
            : "IA Maroc | Symloop"
        } />
        <meta name="twitter:description" content={
          currentLang === 'ar'
            ? "حلول الذكاء الاصطناعي للشركات المغربية"
            : currentLang === 'en'
            ? "AI solutions for Moroccan companies"
            : "Solutions IA pour entreprises marocaines"
        } />

        {/* Canonical */}
        <link rel="canonical" href="https://symloop.com/solutions/intelligence-artificielle-maroc" />

        {/* Alternate languages */}
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/solutions/intelligence-artificielle-maroc" />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/solutions/intelligence-artificielle-maroc" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/en/solutions/intelligence-artificielle-maroc" />
        <link rel="alternate" hrefLang="x-default" href="https://symloop.com/solutions/intelligence-artificielle-maroc" />

        {/* Geo Tags */}
        <meta name="geo.region" content="MA" />
        <meta name="geo.placename" content="Morocco" />
        <meta name="geo.position" content="33.5731;-7.5898" />
        <meta name="ICBM" content="33.5731, -7.5898" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Head>

      <div className={`min-h-screen bg-black text-white ${isRTL ? 'font-arabic' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-[150px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-red-500/20 rounded-full border border-green-500/30 mb-6">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-sm bg-gradient-to-r from-green-200 via-white to-red-200 bg-clip-text text-transparent">
                  {currentLang === 'ar' ? "#1 الذكاء الاصطناعي في المغرب" : currentLang === 'en' ? "#1 AI in Morocco" : "#1 Intelligence Artificielle au Maroc"}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  {currentLang === 'ar' ? "الذكاء الاصطناعي" : currentLang === 'en' ? "Artificial Intelligence" : "Intelligence Artificielle"}
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-400 to-red-400 bg-clip-text text-transparent">
                  {currentLang === 'ar' ? "للشركات المغربية" : currentLang === 'en' ? "For Moroccan Companies" : "Pour Entreprises Marocaines"}
                </span>
              </h1>

              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                {currentLang === 'ar'
                  ? "حلول ذكاء اصطناعي متطورة مصممة خصيصًا للسوق المغربي. شات بوت بالدارجة المغربية، مساعدين صوتيين، تعلم الآلة، والتحليل التنبؤي."
                  : currentLang === 'en'
                  ? "Advanced AI solutions designed specifically for the Moroccan market. Chatbots in Moroccan Darija, voice assistants, machine learning, and predictive analytics."
                  : "Solutions IA avancées conçues spécifiquement pour le marché marocain. Chatbots en darija marocaine, assistants vocaux, machine learning et analyse prédictive."
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
                  href="https://wa.me/213549575512?text=Je%20suis%20intéressé%20par%20vos%20solutions%20IA%20pour%20le%20Maroc"
                  target="_blank"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-red-600 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  {currentLang === 'ar' ? "استشارة مجانية" : currentLang === 'en' ? "Free Consultation" : "Consultation Gratuite"}
                </motion.a>
                <motion.a
                  href="mailto:contact@symloop.com?subject=Solutions%20IA%20Maroc"
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
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-red-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
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
                  {currentLang === 'ar' ? "خدمات الذكاء الاصطناعي للمغرب" : currentLang === 'en' ? "AI Services for Morocco" : "Services IA pour le Maroc"}
                </span>
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                {currentLang === 'ar'
                  ? "حلول مصممة خصيصًا للشركات والمؤسسات المغربية"
                  : currentLang === 'en'
                  ? "Solutions designed specifically for Moroccan companies and institutions"
                  : "Solutions conçues spécifiquement pour les entreprises et institutions marocaines"
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
                    className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-green-500/30 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-green-400" />
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
                  {currentLang === 'ar' ? "قطاعات نخدمها في المغرب" : currentLang === 'en' ? "Sectors We Serve in Morocco" : "Secteurs Que Nous Servons au Maroc"}
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
                    className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-green-500/50 hover:bg-gradient-to-br hover:from-green-500/5 hover:to-red-500/5 transition-all text-center group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-gradient-to-br group-hover:from-green-500/20 group-hover:to-red-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-white/70 group-hover:text-green-400 transition-colors" />
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
              <Globe className="w-16 h-16 bg-gradient-to-r from-green-400 to-red-400 bg-clip-text text-transparent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  {currentLang === 'ar' ? "ابدأ مشروعك الذكي في المغرب" : currentLang === 'en' ? "Start Your AI Project in Morocco" : "Lancez Votre Projet IA au Maroc"}
                </span>
              </h2>
              <p className="text-white/60 mb-8 text-lg">
                {currentLang === 'ar'
                  ? "استشارة مجانية مع خبراء الذكاء الاصطناعي. حلول مخصصة للسوق المغربي."
                  : currentLang === 'en'
                  ? "Free consultation with AI experts. Solutions tailored for the Moroccan market."
                  : "Consultation gratuite avec nos experts IA. Solutions adaptées au marché marocain."
                }
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="https://wa.me/213549575512?text=Consultation%20IA%20Maroc"
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
              <h2 className="text-xl font-bold mb-4 text-white/80">Intelligence Artificielle au Maroc: Solutions Innovantes</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Symloop Technology est le leader de l'intelligence artificielle au Maroc. Nous offrons des solutions IA adaptées au contexte marocain, incluant le support complet de la darija marocaine (الدارجة المغربية) et de l'amazigh/berbère. Nos solutions sont conformes à la loi 09-08 et aux directives CNDP.
              </p>
              <h3 className="text-lg font-bold mb-3 text-white/70">Services IA pour les entreprises marocaines</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Nous servons Casablanca, Rabat, Marrakech, Fès, Tanger, Agadir et toutes les villes du Maroc. Nos clients incluent OCP, Attijariwafa Bank, Maroc Telecom, Royal Air Maroc, et de nombreuses PME marocaines. Solutions pour l'industrie automobile (Renault, PSA), textile, tourisme, immobilier.
              </p>
              <h3 className="text-lg font-bold mb-3 text-white/70">Technologies IA avancées pour le Maroc</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Machine learning, deep learning, traitement du langage naturel en darija marocaine, vision par ordinateur pour l'industrie, chatbots intelligents multilingues, assistants vocaux, analyse prédictive, big data analytics. Conformité totale avec la réglementation marocaine sur la protection des données.
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