"use client";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArrowLeft, Calendar, Clock, User,
  BedDouble, TrendingUp, Star, BarChart3,
  CheckCircle, Phone, Mail, Building2,
  Layers, CreditCard, Shield, Zap,
  CalendarCheck, Users, Key, Wifi,
  Coffee, Globe, Bell, DollarSign
} from "lucide-react";

export default function LogicielHotel2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const content = {
    fr: {
      title: "Logiciel de Gestion Hoteliere en Algerie",
      subtitle: "Solution PMS Complete pour Hotels, Riads, Maisons d'Hotes et Residences",
      metaTitle: "Logiciel Hotel PMS Reservation Algerie 2026 | Gestion Hoteliere | Symloop",
      metaDesc: "Logiciel de gestion hoteliere pour hotels en Algerie. Reservations, check-in/out, facturation, channel manager OTA. Interface arabe/francais. Demo gratuite.",
      date: "10 Janvier 2026",
      readTime: "14 min",
      author: "Symloop Team",
      category: "Logiciel Hotellerie",

      intro: "L'industrie hoteliere algerienne connait une croissance importante avec le developpement du tourisme domestique et international. Notre logiciel de gestion hoteliere (PMS) est concu pour les etablissements algeriens : gestion des reservations, check-in/check-out, facturation, et connexion aux plateformes de reservation en ligne (Booking, Expedia, Airbnb).",

      tableOfContents: {
        title: "Dans cet article",
        items: [
          "Pourquoi un PMS pour votre hotel ?",
          "Fonctionnalites principales",
          "Gestion des reservations",
          "Integration Channel Manager",
          "Facturation et paiement",
          "Tarification adaptee",
          "Formation et support",
          "Comment demarrer"
        ]
      },

      section1: {
        title: "Pourquoi Votre Etablissement a Besoin d'un PMS ?",
        paragraphs: [
          "La gestion manuelle d'un hotel engendre des erreurs couteuses : surbooking, chambres non preparees, factures incorrectes, et opportunites de revenus manquees. Un PMS (Property Management System) centralise et automatise toutes ces operations.",
          "Avec l'essor des plateformes de reservation en ligne (OTA), les hotels doivent gerer plusieurs canaux simultanement. Sans outil adapte, synchroniser les disponibilites sur Booking, Expedia et votre site devient un cauchemar operationnel.",
          "Notre solution est adaptee au contexte algerien : interface bilingue arabe/francais, facturation en dinars conformement a la reglementation, et integration avec les moyens de paiement locaux (CIB, Edahabia)."
        ],
        stats: [
          { value: "+25%", label: "Taux d'occupation" },
          { value: "-90%", label: "Surbooking" },
          { value: "+40%", label: "Revenus directs" },
          { value: "-50%", label: "Temps check-in" }
        ]
      },

      section2: {
        title: "Fonctionnalites Principales du PMS",
        features: [
          {
            title: "Planning et Reservations",
            description: "Vue calendrier intuitive de toutes vos chambres et reservations.",
            items: ["Planning visuel drag & drop", "Statut chambres en temps reel", "Reservations directes", "Gestion des groupes"],
            icon: CalendarCheck
          },
          {
            title: "Check-in / Check-out",
            description: "Accueil rapide des clients avec toutes les informations necessaires.",
            items: ["Fiche police integree", "Attribution automatique", "Pre-check-in en ligne", "Express check-out"],
            icon: Key
          },
          {
            title: "Gestion des Chambres",
            description: "Suivi du statut de chaque chambre et coordination avec le housekeeping.",
            items: ["Statut menage", "Maintenance", "Inventaire minibar", "Historique chambre"],
            icon: BedDouble
          },
          {
            title: "Facturation Complete",
            description: "Facturation automatisee conforme a la reglementation algerienne.",
            items: ["Factures conformes", "Multi-devises", "Extras et consommations", "Comptes debiteurs"],
            icon: CreditCard
          },
          {
            title: "Channel Manager",
            description: "Synchronisation automatique avec les plateformes de reservation.",
            items: ["Booking.com", "Expedia", "Airbnb", "Votre site web"],
            icon: Globe
          },
          {
            title: "Rapports et Statistiques",
            description: "Indicateurs cles pour optimiser votre performance.",
            items: ["RevPAR, ADR, TO", "Rapport journalier", "Analyse par segment", "Previsions"],
            icon: BarChart3
          }
        ]
      },

      section3: {
        title: "Gestion Avancee des Reservations",
        intro: "Un systeme de reservation puissant pour maximiser votre occupation :",
        adaptations: [
          {
            title: "Moteur de Reservation",
            description: "Reservations directes depuis votre site web sans commission."
          },
          {
            title: "Tarification Dynamique",
            description: "Ajustez vos prix selon la demande, la saison et les evenements."
          },
          {
            title: "Gestion des Allotements",
            description: "Allocations de chambres pour agences et tour-operateurs."
          },
          {
            title: "Packages et Offres",
            description: "Creez des forfaits (chambre + petit-dejeuner, spa, excursions)."
          },
          {
            title: "Politique d'Annulation",
            description: "Regles flexibles par tarif avec gestion automatique des penalites."
          },
          {
            title: "Liste d'Attente",
            description: "Gestion automatique des demandes en cas de complet."
          }
        ]
      },

      section4: {
        title: "Types d'Etablissements Supportes",
        sectors: [
          {
            name: "Hotels",
            description: "Hotels de toutes categories, de l'economique au luxe.",
            benefits: ["Multi-batiments", "Room service", "Gestion conferences"]
          },
          {
            name: "Riads et Maisons d'Hotes",
            description: "Etablissements de charme avec gestion personnalisee.",
            benefits: ["Chambres uniques", "Services sur mesure", "Ambiance familiale"]
          },
          {
            name: "Residences Touristiques",
            description: "Appartements et villas avec services hoteliers.",
            benefits: ["Sejours longs", "Kitchenette", "Services menage"]
          },
          {
            name: "Auberges de Jeunesse",
            description: "Gestion des dortoirs et lits individuels.",
            benefits: ["Lits en dortoir", "Tarifs jeunes", "Espaces communs"]
          },
          {
            name: "Complexes Touristiques",
            description: "Grands etablissements avec multiples activites.",
            benefits: ["Multi-points de vente", "All inclusive", "Activites integrees"]
          }
        ]
      },

      section5: {
        title: "Integrations et Connectivite",
        intro: "Notre PMS se connecte a votre ecosysteme :",
        integrations: [
          { name: "OTA", tools: ["Booking.com", "Expedia", "Airbnb", "Hotels.com"], description: "Synchronisation bidirectionnelle en temps reel" },
          { name: "Paiement", tools: ["CIB", "Edahabia", "SATIM", "Especes"], description: "Tous les moyens de paiement algeriens" },
          { name: "Comptabilite", tools: ["Sage", "PC Compta", "Export"], description: "Export automatique des ecritures" },
          { name: "Serrures", tools: ["Assa Abloy", "Salto", "Onity"], description: "Encodage automatique des cles" }
        ]
      },

      section6: {
        title: "Tarification selon Votre Etablissement",
        intro: "Des formules adaptees a la taille de votre hotel :",
        plans: [
          {
            name: "Petit Hotel",
            price: "24,900 DA",
            period: "/mois",
            users: "Jusqu'a 20 chambres",
            features: ["PMS complet", "Reservations directes", "Check-in/out", "Facturation", "Rapports de base", "Support email"]
          },
          {
            name: "Hotel",
            price: "49,900 DA",
            period: "/mois",
            users: "Jusqu'a 50 chambres",
            features: ["Tout Petit Hotel +", "Channel Manager 2 OTA", "Tarification dynamique", "Statistiques avancees", "Multi-utilisateurs", "Support prioritaire"]
          },
          {
            name: "Grand Hotel",
            price: "Sur devis",
            period: "",
            users: "50+ chambres",
            features: ["Tout Hotel +", "Channel Manager illimite", "Multi-etablissements", "Revenue Management", "API & integrations", "Support dedie 24/7"]
          }
        ]
      },

      section7: {
        title: "Deploiement et Accompagnement",
        phases: [
          {
            title: "1. Audit de l'Etablissement",
            description: "Analyse de vos besoins : nombre de chambres, services, canaux de distribution."
          },
          {
            title: "2. Configuration",
            description: "Parametrage complet : types de chambres, tarifs, politiques, utilisateurs."
          },
          {
            title: "3. Migration",
            description: "Import de vos reservations existantes et historique clients."
          },
          {
            title: "4. Formation",
            description: "Formation de la reception, du housekeeping et de la direction."
          },
          {
            title: "5. Go-Live",
            description: "Mise en production avec accompagnement intensif les premieres semaines."
          }
        ]
      },

      wilayas: {
        title: "Nous Equipons les Hotels dans Toutes les Regions Touristiques",
        list: ["Alger", "Oran", "Constantine", "Annaba", "Tlemcen", "Bejaia", "Tipaza", "Ghardaia", "Tamanrasset", "Djanet"]
      },

      cta: {
        title: "Modernisez la Gestion de Votre Hotel",
        description: "Demandez une demonstration gratuite de notre PMS. Nos consultants hotellerie vous montreront comment augmenter votre occupation et vos revenus.",
        button: "Demander une Demo Gratuite",
        phone: "+213 549 575 512",
        email: "hotellerie@symloop.com"
      },

      backToBlog: "Retour au Blog"
    },
    en: {
      title: "Hotel Management Software in Algeria",
      subtitle: "Complete PMS Solution for Hotels, Riads, Guest Houses and Residences",
      metaTitle: "Hotel PMS Reservation Software Algeria 2026 | Hotel Management | Symloop",
      metaDesc: "Hotel management software for hotels in Algeria. Reservations, check-in/out, billing, OTA channel manager. Arabic/French interface. Free demo.",
      date: "January 10, 2026",
      readTime: "14 min",
      author: "Symloop Team",
      category: "Hotel Software",

      intro: "The Algerian hotel industry is experiencing significant growth with the development of domestic and international tourism. Our hotel management software (PMS) is designed for Algerian establishments: reservation management, check-in/check-out, billing, and connection to online booking platforms (Booking, Expedia, Airbnb).",

      tableOfContents: {
        title: "In this article",
        items: [
          "Why a PMS for your hotel?",
          "Main features",
          "Reservation management",
          "Channel Manager integration",
          "Billing and payment",
          "Adapted pricing",
          "Training and support",
          "How to get started"
        ]
      },

      section1: {
        title: "Why Your Establishment Needs a PMS?",
        paragraphs: [
          "Manual hotel management leads to costly errors: overbooking, unprepared rooms, incorrect invoices, and missed revenue opportunities. A PMS (Property Management System) centralizes and automates all these operations.",
          "With the rise of online booking platforms (OTA), hotels must manage multiple channels simultaneously. Without proper tools, synchronizing availability on Booking, Expedia and your site becomes an operational nightmare.",
          "Our solution is adapted to the Algerian context: Arabic/French bilingual interface, billing in dinars in compliance with regulations, and integration with local payment methods (CIB, Edahabia)."
        ],
        stats: [
          { value: "+25%", label: "Occupancy rate" },
          { value: "-90%", label: "Overbooking" },
          { value: "+40%", label: "Direct revenue" },
          { value: "-50%", label: "Check-in time" }
        ]
      },

      section2: {
        title: "Main PMS Features",
        features: [
          {
            title: "Planning and Reservations",
            description: "Intuitive calendar view of all your rooms and reservations.",
            items: ["Visual drag & drop planning", "Real-time room status", "Direct bookings", "Group management"],
            icon: CalendarCheck
          },
          {
            title: "Check-in / Check-out",
            description: "Fast guest welcome with all necessary information.",
            items: ["Integrated police form", "Automatic assignment", "Online pre-check-in", "Express check-out"],
            icon: Key
          },
          {
            title: "Room Management",
            description: "Track each room's status and coordinate with housekeeping.",
            items: ["Cleaning status", "Maintenance", "Minibar inventory", "Room history"],
            icon: BedDouble
          },
          {
            title: "Complete Billing",
            description: "Automated billing compliant with Algerian regulations.",
            items: ["Compliant invoices", "Multi-currency", "Extras and consumption", "Accounts receivable"],
            icon: CreditCard
          },
          {
            title: "Channel Manager",
            description: "Automatic synchronization with booking platforms.",
            items: ["Booking.com", "Expedia", "Airbnb", "Your website"],
            icon: Globe
          },
          {
            title: "Reports and Statistics",
            description: "Key indicators to optimize your performance.",
            items: ["RevPAR, ADR, OCC", "Daily report", "Segment analysis", "Forecasts"],
            icon: BarChart3
          }
        ]
      },

      section3: {
        title: "Advanced Reservation Management",
        intro: "A powerful reservation system to maximize your occupancy:",
        adaptations: [
          {
            title: "Booking Engine",
            description: "Direct bookings from your website without commission."
          },
          {
            title: "Dynamic Pricing",
            description: "Adjust your prices based on demand, season and events."
          },
          {
            title: "Allotment Management",
            description: "Room allocations for agencies and tour operators."
          },
          {
            title: "Packages and Offers",
            description: "Create packages (room + breakfast, spa, excursions)."
          },
          {
            title: "Cancellation Policy",
            description: "Flexible rules by rate with automatic penalty management."
          },
          {
            title: "Waiting List",
            description: "Automatic management of requests when fully booked."
          }
        ]
      },

      section4: {
        title: "Supported Establishment Types",
        sectors: [
          {
            name: "Hotels",
            description: "Hotels of all categories, from budget to luxury.",
            benefits: ["Multi-building", "Room service", "Conference management"]
          },
          {
            name: "Riads and Guest Houses",
            description: "Boutique establishments with personalized management.",
            benefits: ["Unique rooms", "Custom services", "Family atmosphere"]
          },
          {
            name: "Tourist Residences",
            description: "Apartments and villas with hotel services.",
            benefits: ["Long stays", "Kitchenette", "Cleaning services"]
          },
          {
            name: "Youth Hostels",
            description: "Dormitory and individual bed management.",
            benefits: ["Dormitory beds", "Youth rates", "Common areas"]
          },
          {
            name: "Tourist Complexes",
            description: "Large establishments with multiple activities.",
            benefits: ["Multi-outlets", "All inclusive", "Integrated activities"]
          }
        ]
      },

      section5: {
        title: "Integrations and Connectivity",
        intro: "Our PMS connects to your ecosystem:",
        integrations: [
          { name: "OTA", tools: ["Booking.com", "Expedia", "Airbnb", "Hotels.com"], description: "Bidirectional real-time synchronization" },
          { name: "Payment", tools: ["CIB", "Edahabia", "SATIM", "Cash"], description: "All Algerian payment methods" },
          { name: "Accounting", tools: ["Sage", "PC Compta", "Export"], description: "Automatic export of entries" },
          { name: "Locks", tools: ["Assa Abloy", "Salto", "Onity"], description: "Automatic key encoding" }
        ]
      },

      section6: {
        title: "Pricing Based on Your Establishment",
        intro: "Plans adapted to your hotel size:",
        plans: [
          {
            name: "Small Hotel",
            price: "24,900 DA",
            period: "/month",
            users: "Up to 20 rooms",
            features: ["Complete PMS", "Direct bookings", "Check-in/out", "Billing", "Basic reports", "Email support"]
          },
          {
            name: "Hotel",
            price: "49,900 DA",
            period: "/month",
            users: "Up to 50 rooms",
            features: ["Everything in Small +", "Channel Manager 2 OTA", "Dynamic pricing", "Advanced statistics", "Multi-users", "Priority support"]
          },
          {
            name: "Large Hotel",
            price: "Custom quote",
            period: "",
            users: "50+ rooms",
            features: ["Everything in Hotel +", "Unlimited Channel Manager", "Multi-property", "Revenue Management", "API & integrations", "24/7 dedicated support"]
          }
        ]
      },

      section7: {
        title: "Deployment and Support",
        phases: [
          {
            title: "1. Establishment Audit",
            description: "Analysis of your needs: number of rooms, services, distribution channels."
          },
          {
            title: "2. Configuration",
            description: "Complete setup: room types, rates, policies, users."
          },
          {
            title: "3. Migration",
            description: "Import of your existing reservations and guest history."
          },
          {
            title: "4. Training",
            description: "Training for reception, housekeeping and management."
          },
          {
            title: "5. Go-Live",
            description: "Production launch with intensive support in the first weeks."
          }
        ]
      },

      wilayas: {
        title: "We Equip Hotels in All Tourist Regions",
        list: ["Algiers", "Oran", "Constantine", "Annaba", "Tlemcen", "Bejaia", "Tipaza", "Ghardaia", "Tamanrasset", "Djanet"]
      },

      cta: {
        title: "Modernize Your Hotel Management",
        description: "Request a free demo of our PMS. Our hospitality consultants will show you how to increase your occupancy and revenue.",
        button: "Request a Free Demo",
        phone: "+213 549 575 512",
        email: "hotellerie@symloop.com"
      },

      backToBlog: "Back to Blog"
    },
    ar: {
      title: "برنامج إدارة الفنادق في الجزائر",
      subtitle: "حل PMS شامل للفنادق والرياض ودور الضيافة والإقامات",
      metaTitle: "برنامج فندق PMS حجز الجزائر 2026 | إدارة فندقية | Symloop",
      metaDesc: "برنامج إدارة فندقية للفنادق في الجزائر. الحجوزات، تسجيل الدخول/الخروج، الفوترة، مدير القنوات OTA. واجهة عربية/فرنسية. عرض مجاني.",
      date: "10 يناير 2026",
      readTime: "14 دقيقة",
      author: "فريق Symloop",
      category: "برنامج فندقي",

      intro: "تشهد صناعة الفنادق الجزائرية نموًا كبيرًا مع تطور السياحة المحلية والدولية. برنامج إدارة الفنادق (PMS) لدينا مصمم للمنشآت الجزائرية: إدارة الحجوزات، تسجيل الدخول/الخروج، الفوترة، والاتصال بمنصات الحجز عبر الإنترنت (Booking, Expedia, Airbnb).",

      tableOfContents: {
        title: "في هذا المقال",
        items: [
          "لماذا PMS لفندقك؟",
          "الميزات الرئيسية",
          "إدارة الحجوزات",
          "تكامل مدير القنوات",
          "الفوترة والدفع",
          "تسعير مناسب",
          "التدريب والدعم",
          "كيف تبدأ"
        ]
      },

      section1: {
        title: "لماذا تحتاج منشأتك إلى PMS؟",
        paragraphs: [
          "تؤدي الإدارة اليدوية للفندق إلى أخطاء مكلفة: الحجز الزائد، الغرف غير المجهزة، الفواتير غير الصحيحة، وفرص الإيرادات الضائعة. يركز نظام PMS (Property Management System) ويؤتمت جميع هذه العمليات.",
          "مع صعود منصات الحجز عبر الإنترنت (OTA)، يجب على الفنادق إدارة قنوات متعددة في وقت واحد. بدون أداة مناسبة، تصبح مزامنة التوافر على Booking وExpedia وموقعك كابوسًا تشغيليًا.",
          "حلنا متكيف مع السياق الجزائري: واجهة ثنائية اللغة عربي/فرنسي، فوترة بالدينار وفقًا للوائح، وتكامل مع وسائل الدفع المحلية (CIB، Edahabia)."
        ],
        stats: [
          { value: "+25%", label: "معدل الإشغال" },
          { value: "-90%", label: "الحجز الزائد" },
          { value: "+40%", label: "الإيرادات المباشرة" },
          { value: "-50%", label: "وقت تسجيل الدخول" }
        ]
      },

      section2: {
        title: "الميزات الرئيسية لـ PMS",
        features: [
          {
            title: "التخطيط والحجوزات",
            description: "عرض تقويم بديهي لجميع غرفك وحجوزاتك.",
            items: ["تخطيط مرئي بالسحب والإفلات", "حالة الغرف في الوقت الفعلي", "حجوزات مباشرة", "إدارة المجموعات"],
            icon: CalendarCheck
          },
          {
            title: "تسجيل الدخول / الخروج",
            description: "استقبال سريع للضيوف مع جميع المعلومات اللازمة.",
            items: ["استمارة الشرطة المدمجة", "التخصيص التلقائي", "تسجيل مسبق عبر الإنترنت", "خروج سريع"],
            icon: Key
          },
          {
            title: "إدارة الغرف",
            description: "تتبع حالة كل غرفة والتنسيق مع خدمة التنظيف.",
            items: ["حالة التنظيف", "الصيانة", "مخزون الميني بار", "سجل الغرفة"],
            icon: BedDouble
          },
          {
            title: "فوترة كاملة",
            description: "فوترة آلية متوافقة مع اللوائح الجزائرية.",
            items: ["فواتير متوافقة", "عملات متعددة", "الإضافات والاستهلاك", "حسابات مدينة"],
            icon: CreditCard
          },
          {
            title: "مدير القنوات",
            description: "مزامنة تلقائية مع منصات الحجز.",
            items: ["Booking.com", "Expedia", "Airbnb", "موقعك"],
            icon: Globe
          },
          {
            title: "التقارير والإحصائيات",
            description: "مؤشرات رئيسية لتحسين أدائك.",
            items: ["RevPAR, ADR, OCC", "التقرير اليومي", "تحليل القطاعات", "التوقعات"],
            icon: BarChart3
          }
        ]
      },

      section3: {
        title: "إدارة متقدمة للحجوزات",
        intro: "نظام حجز قوي لتعظيم الإشغال:",
        adaptations: [
          {
            title: "محرك الحجز",
            description: "حجوزات مباشرة من موقعك بدون عمولة."
          },
          {
            title: "التسعير الديناميكي",
            description: "اضبط أسعارك حسب الطلب والموسم والأحداث."
          },
          {
            title: "إدارة التخصيصات",
            description: "تخصيصات غرف للوكالات ومنظمي الرحلات."
          },
          {
            title: "الباقات والعروض",
            description: "أنشئ باقات (غرفة + إفطار، سبا، رحلات)."
          },
          {
            title: "سياسة الإلغاء",
            description: "قواعد مرنة حسب السعر مع إدارة آلية للعقوبات."
          },
          {
            title: "قائمة الانتظار",
            description: "إدارة تلقائية للطلبات عند الامتلاء."
          }
        ]
      },

      section4: {
        title: "أنواع المنشآت المدعومة",
        sectors: [
          {
            name: "الفنادق",
            description: "فنادق من جميع الفئات، من الاقتصادية إلى الفاخرة.",
            benefits: ["متعدد المباني", "خدمة الغرف", "إدارة المؤتمرات"]
          },
          {
            name: "الرياض ودور الضيافة",
            description: "منشآت ساحرة مع إدارة شخصية.",
            benefits: ["غرف فريدة", "خدمات مخصصة", "أجواء عائلية"]
          },
          {
            name: "الإقامات السياحية",
            description: "شقق وفيلات مع خدمات فندقية.",
            benefits: ["إقامات طويلة", "مطبخ صغير", "خدمات التنظيف"]
          },
          {
            name: "بيوت الشباب",
            description: "إدارة المهاجع والأسرّة الفردية.",
            benefits: ["أسرّة في المهجع", "أسعار الشباب", "المساحات المشتركة"]
          },
          {
            name: "المجمعات السياحية",
            description: "منشآت كبيرة مع أنشطة متعددة.",
            benefits: ["نقاط بيع متعددة", "شامل كليًا", "أنشطة متكاملة"]
          }
        ]
      },

      section5: {
        title: "التكاملات والاتصال",
        intro: "يتصل PMS لدينا بنظامك البيئي:",
        integrations: [
          { name: "OTA", tools: ["Booking.com", "Expedia", "Airbnb", "Hotels.com"], description: "مزامنة ثنائية الاتجاه في الوقت الفعلي" },
          { name: "الدفع", tools: ["CIB", "Edahabia", "SATIM", "نقدًا"], description: "جميع وسائل الدفع الجزائرية" },
          { name: "المحاسبة", tools: ["Sage", "PC Compta", "تصدير"], description: "تصدير تلقائي للقيود" },
          { name: "الأقفال", tools: ["Assa Abloy", "Salto", "Onity"], description: "ترميز تلقائي للمفاتيح" }
        ]
      },

      section6: {
        title: "تسعير حسب منشأتك",
        intro: "خطط مناسبة لحجم فندقك:",
        plans: [
          {
            name: "فندق صغير",
            price: "24,900 دج",
            period: "/شهر",
            users: "حتى 20 غرفة",
            features: ["PMS كامل", "حجوزات مباشرة", "تسجيل دخول/خروج", "فوترة", "تقارير أساسية", "دعم بالبريد"]
          },
          {
            name: "فندق",
            price: "49,900 دج",
            period: "/شهر",
            users: "حتى 50 غرفة",
            features: ["كل ميزات الصغير +", "مدير قنوات 2 OTA", "تسعير ديناميكي", "إحصائيات متقدمة", "مستخدمون متعددون", "دعم ذو أولوية"]
          },
          {
            name: "فندق كبير",
            price: "عرض مخصص",
            period: "",
            users: "50+ غرفة",
            features: ["كل ميزات الفندق +", "مدير قنوات غير محدود", "منشآت متعددة", "إدارة الإيرادات", "API والتكاملات", "دعم مخصص 24/7"]
          }
        ]
      },

      section7: {
        title: "النشر والدعم",
        phases: [
          {
            title: "1. تدقيق المنشأة",
            description: "تحليل احتياجاتك: عدد الغرف، الخدمات، قنوات التوزيع."
          },
          {
            title: "2. التكوين",
            description: "إعداد كامل: أنواع الغرف، الأسعار، السياسات، المستخدمين."
          },
          {
            title: "3. الترحيل",
            description: "استيراد حجوزاتك الحالية وسجل الضيوف."
          },
          {
            title: "4. التدريب",
            description: "تدريب الاستقبال وخدمة التنظيف والإدارة."
          },
          {
            title: "5. الإطلاق",
            description: "بدء الإنتاج مع دعم مكثف في الأسابيع الأولى."
          }
        ]
      },

      wilayas: {
        title: "نجهز الفنادق في جميع المناطق السياحية",
        list: ["الجزائر", "وهران", "قسنطينة", "عنابة", "تلمسان", "بجاية", "تيبازة", "غرداية", "تمنراست", "جانت"]
      },

      cta: {
        title: "حدّث إدارة فندقك",
        description: "اطلب عرضًا مجانيًا لـ PMS لدينا. سيوضح لك مستشارو الضيافة كيفية زيادة الإشغال والإيرادات.",
        button: "اطلب عرضًا مجانيًا",
        phone: "+213 549 575 512",
        email: "hotellerie@symloop.com"
      },

      backToBlog: "العودة للمدونة"
    }
  };

  const t = content[locale] || content.fr;

  return (
    <>
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDesc} />
        <meta name="keywords" content="logiciel hotel algerie, PMS hotel, gestion hoteliere, channel manager algerie, reservation hotel, logiciel hebergement" />
        <link rel="canonical" href={`https://symloop.com/${locale === 'fr' ? '' : locale + '/'}blog/logiciel-hotel-reservation-hebergement-algerie-2026`} />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDesc} />
        <meta property="og:type" content="article" />
      </Head>

      <main className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-black to-orange-500/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {t.backToBlog}
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium">
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

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-xl text-gray-300 leading-relaxed mb-16">{t.intro}</p>

            {/* TOC */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-16">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Layers className="w-5 h-5 text-amber-400" />
                {t.tableOfContents.title}
              </h2>
              <ul className="space-y-3">
                {t.tableOfContents.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <span className="w-6 h-6 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center text-xs font-bold">{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 1 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">{t.section1.title}</h2>
              {t.section1.paragraphs.map((p, i) => <p key={i} className="text-gray-300 mb-4 leading-relaxed">{p}</p>)}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {t.section1.stats.map((stat, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2 - Features */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">{t.section2.title}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {t.section2.features.map((f, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-amber-500/20 rounded-lg"><f.icon className="w-5 h-5 text-amber-400" /></div>
                      <h3 className="font-bold">{f.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{f.description}</p>
                    <ul className="space-y-1">
                      {f.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-amber-400" />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3 - Reservations */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4">{t.section3.title}</h2>
              <p className="text-gray-300 mb-6">{t.section3.intro}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {t.section3.adaptations.map((a, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="font-bold mb-1 text-amber-400">{a.title}</h3>
                    <p className="text-sm text-gray-400">{a.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4 - Establishments */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">{t.section4.title}</h2>
              <div className="space-y-4">
                {t.section4.sectors.map((s, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold mb-2">{s.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{s.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.benefits.map((b, j) => (
                        <span key={j} className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-xs">{b}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5 - Integrations */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4">{t.section5.title}</h2>
              <p className="text-gray-300 mb-6">{t.section5.intro}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {t.section5.integrations.map((intg, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="font-bold mb-2">{intg.name}</h3>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {intg.tools.map((tool, j) => (
                        <span key={j} className="px-2 py-0.5 bg-amber-500/10 text-amber-400 rounded text-xs">{tool}</span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-400">{intg.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 6 - Pricing */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4">{t.section6.title}</h2>
              <p className="text-gray-300 mb-8">{t.section6.intro}</p>
              <div className="grid md:grid-cols-3 gap-6">
                {t.section6.plans.map((p, i) => (
                  <div key={i} className={`bg-white/5 border rounded-xl p-6 ${i === 1 ? 'border-amber-500/50 ring-1 ring-amber-500/20' : 'border-white/10'}`}>
                    <h3 className="font-bold text-xl mb-2">{p.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-amber-400">{p.price}</span>
                      <span className="text-gray-400">{p.period}</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">{p.users}</p>
                    <ul className="space-y-2">
                      {p.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-amber-400" />{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 7 - Training */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">{t.section7.title}</h2>
              <div className="space-y-4">
                {t.section7.phases.map((phase, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-400 font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold">{phase.title}</h3>
                      <p className="text-gray-400 text-sm">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wilayas */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{t.wilayas.title}</h2>
              <div className="flex flex-wrap gap-2">
                {t.wilayas.list.map((w, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">{w}</span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-500/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">{t.cta.title}</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">{t.cta.description}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={`tel:${t.cta.phone}`} className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors">
                  <Phone className="w-5 h-5" />{t.cta.phone}
                </a>
                <a href={`mailto:${t.cta.email}`} className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors">
                  <Mail className="w-5 h-5" />{t.cta.email}
                </a>
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
