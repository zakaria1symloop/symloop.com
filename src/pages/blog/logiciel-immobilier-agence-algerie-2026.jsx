"use client";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArrowLeft, Calendar, Clock, User,
  Home, TrendingUp, MapPin, BarChart3,
  CheckCircle, Phone, Mail, Building2,
  Layers, FileText, Shield, Zap,
  Camera, Users, Key, Search,
  DollarSign, Globe, Bell, Eye
} from "lucide-react";

export default function LogicielImmobilier2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const content = {
    fr: {
      title: "Logiciel de Gestion Immobiliere en Algerie",
      subtitle: "Solution CRM Complete pour Agences Immobilieres, Promoteurs et Agents Independants",
      metaTitle: "Logiciel Immobilier Agence CRM Algerie 2026 | Gestion Biens | Symloop",
      metaDesc: "Logiciel de gestion immobiliere pour agences en Algerie. Gestion biens, clients, mandats, visites. Publication automatique. Interface arabe/francais. Demo gratuite.",
      date: "10 Janvier 2026",
      readTime: "13 min",
      author: "Symloop Team",
      category: "Logiciel Immobilier",

      intro: "Le marche immobilier algerien est en pleine transformation digitale. Notre logiciel de gestion immobiliere permet aux agences, promoteurs et agents independants de gerer efficacement leur portefeuille de biens : annonces, mandats, clients acheteurs/locataires, visites, et diffusion multi-portails. Une solution qui accelere vos transactions.",

      tableOfContents: {
        title: "Dans cet article",
        items: [
          "Pourquoi un logiciel immobilier ?",
          "Fonctionnalites principales",
          "Gestion des biens",
          "Matching clients-biens",
          "Diffusion multi-portails",
          "Tarification adaptee",
          "Formation et support",
          "Comment demarrer"
        ]
      },

      section1: {
        title: "Pourquoi Digitaliser Votre Activite Immobiliere ?",
        paragraphs: [
          "La gestion manuelle d'une agence immobiliere est source d'erreurs : biens oublies, clients non relances, mandats expires, et opportunites manquees. Un logiciel CRM immobilier centralise toutes ces informations et automatise les taches repetitives.",
          "Les acheteurs et locataires algeriens recherchent des biens en ligne avant de contacter une agence. Une presence digitale forte avec des annonces a jour sur tous les portails est devenue indispensable pour capter les meilleurs prospects.",
          "Notre solution est adaptee au marche algerien : types de biens locaux (F3, F4, duplex, haouche...), prix en dinars, quartiers et wilayas, et interface complete en arabe et francais."
        ],
        stats: [
          { value: "+45%", label: "Transactions conclues" },
          { value: "-60%", label: "Temps de vente" },
          { value: "3x", label: "Visibilite annonces" },
          { value: "100%", label: "Mandats suivis" }
        ]
      },

      section2: {
        title: "Fonctionnalites Principales",
        features: [
          {
            title: "Gestion des Biens",
            description: "Base de donnees complete de tous vos biens en vente ou location.",
            items: ["Fiches detaillees", "Photos illimitees", "Plans et videos", "Geolocalisation"],
            icon: Home
          },
          {
            title: "CRM Clients",
            description: "Suivi complet de vos clients acheteurs, vendeurs et locataires.",
            items: ["Fiches clients", "Historique contacts", "Criteres recherche", "Scoring prospects"],
            icon: Users
          },
          {
            title: "Gestion des Mandats",
            description: "Suivi des mandats avec alertes d'echeance et renouvellement.",
            items: ["Mandats exclusifs/simples", "Dates d'echeance", "Documents signes", "Commissions"],
            icon: FileText
          },
          {
            title: "Planning Visites",
            description: "Organisation des visites avec rappels automatiques.",
            items: ["Agenda partage", "Confirmations SMS", "Compte-rendu visite", "Historique"],
            icon: Calendar
          },
          {
            title: "Diffusion Annonces",
            description: "Publication automatique sur les portails immobiliers.",
            items: ["Ouedkniss", "Jumia House", "Votre site web", "Reseaux sociaux"],
            icon: Globe
          },
          {
            title: "Rapports et Statistiques",
            description: "Indicateurs de performance de votre activite.",
            items: ["Ventes par periode", "Performance agents", "Taux de conversion", "Analyse marche"],
            icon: BarChart3
          }
        ]
      },

      section3: {
        title: "Gestion Avancee des Biens Immobiliers",
        intro: "Des outils complets pour gerer votre portefeuille de biens :",
        adaptations: [
          {
            title: "Fiches Biens Detaillees",
            description: "Surface, pieces, etage, orientation, equipements, et tous les criteres algeriens."
          },
          {
            title: "Galerie Photos Pro",
            description: "Upload illimite, watermark automatique, et organisation par pieces."
          },
          {
            title: "Estimation Prix",
            description: "Outil d'estimation base sur les transactions recentes du quartier."
          },
          {
            title: "Historique du Bien",
            description: "Toutes les actions : visites, offres, baisses de prix, contacts."
          },
          {
            title: "Documents",
            description: "Stockage des documents : titre de propriete, plans, certificats."
          },
          {
            title: "Alertes Automatiques",
            description: "Notifications pour mandats expirant, biens sans visite, prix a reviser."
          }
        ]
      },

      section4: {
        title: "Types de Biens et Transactions",
        sectors: [
          {
            name: "Vente Appartements",
            description: "F2, F3, F4, F5, duplex, penthouse dans toutes les wilayas.",
            benefits: ["Tous types F2-F5+", "Neuf et ancien", "Promoteurs partenaires"]
          },
          {
            name: "Vente Maisons",
            description: "Villas, maisons individuelles, haouche, et terrains.",
            benefits: ["Villas et maisons", "Haouche traditionnels", "Terrains a batir"]
          },
          {
            name: "Location Residentielle",
            description: "Appartements et maisons en location longue duree.",
            benefits: ["Etat des lieux", "Gestion loyers", "Quittances"]
          },
          {
            name: "Immobilier Commercial",
            description: "Locaux commerciaux, bureaux, entrepots.",
            benefits: ["Locaux commerciaux", "Bureaux", "Entrepots"]
          },
          {
            name: "Promotion Immobiliere",
            description: "Gestion des programmes neufs et VEFA.",
            benefits: ["Plans de vente", "Reservations", "Appels de fonds"]
          }
        ]
      },

      section5: {
        title: "Diffusion Multi-Portails",
        intro: "Publiez automatiquement sur tous les portails algeriens :",
        integrations: [
          { name: "Ouedkniss", tools: ["Immobilier", "Auto-publication", "Stats"], description: "Le leader des petites annonces en Algerie" },
          { name: "Jumia House", tools: ["Publication", "Synchronisation", "Analytics"], description: "Portail immobilier specialise" },
          { name: "Site Web Agence", tools: ["Votre site", "SEO", "Leads"], description: "Votre vitrine en ligne personnalisee" },
          { name: "Reseaux Sociaux", tools: ["Facebook", "Instagram", "WhatsApp"], description: "Diffusion sur les reseaux" }
        ]
      },

      section6: {
        title: "Tarification pour Professionnels de l'Immobilier",
        intro: "Des formules adaptees a votre activite :",
        plans: [
          {
            name: "Agent",
            price: "9,900 DA",
            period: "/mois",
            users: "1 utilisateur",
            features: ["100 biens", "CRM clients", "Diffusion 2 portails", "Rapports de base", "Support email"]
          },
          {
            name: "Agence",
            price: "24,900 DA",
            period: "/mois",
            users: "Jusqu'a 5 agents",
            features: ["Biens illimites", "Tout Agent +", "Diffusion multi-portails", "Site web inclus", "Statistiques avancees", "Support prioritaire"]
          },
          {
            name: "Promoteur",
            price: "Sur devis",
            period: "",
            users: "Equipe illimitee",
            features: ["Tout Agence +", "Gestion programmes", "Plans de vente", "Reservations en ligne", "API", "Support dedie"]
          }
        ]
      },

      section7: {
        title: "Deploiement et Formation",
        phases: [
          {
            title: "1. Audit de l'Agence",
            description: "Analyse de votre portefeuille, processus actuels et besoins specifiques."
          },
          {
            title: "2. Configuration",
            description: "Parametrage : types de biens, zones geographiques, agents, modeles documents."
          },
          {
            title: "3. Import des Donnees",
            description: "Migration de vos biens et clients existants vers le nouveau systeme."
          },
          {
            title: "4. Formation",
            description: "Formation pratique de tous les agents et de l'administration."
          },
          {
            title: "5. Lancement",
            description: "Mise en production avec accompagnement renforce les premieres semaines."
          }
        ]
      },

      wilayas: {
        title: "Nous Equipons les Agences Immobilieres dans Toute l'Algerie",
        list: ["Alger", "Oran", "Constantine", "Annaba", "Setif", "Blida", "Tlemcen", "Bejaia", "Tipaza", "Boumerdes"]
      },

      cta: {
        title: "Boostez Votre Activite Immobiliere",
        description: "Demandez une demonstration gratuite de notre logiciel immobilier. Nos consultants vous montreront comment accelerer vos ventes et locations.",
        button: "Demander une Demo Gratuite",
        phone: "+213 549 575 512",
        email: "contact@symloop.com"
      },

      backToBlog: "Retour au Blog"
    },
    en: {
      title: "Real Estate Management Software in Algeria",
      subtitle: "Complete CRM Solution for Real Estate Agencies, Developers and Independent Agents",
      metaTitle: "Real Estate Software Agency CRM Algeria 2026 | Property Management | Symloop",
      metaDesc: "Real estate management software for agencies in Algeria. Property, client, mandate, visit management. Auto-publishing. Arabic/French interface. Free demo.",
      date: "January 10, 2026",
      readTime: "13 min",
      author: "Symloop Team",
      category: "Real Estate Software",

      intro: "The Algerian real estate market is undergoing digital transformation. Our real estate management software enables agencies, developers and independent agents to efficiently manage their property portfolio: listings, mandates, buyer/tenant clients, visits, and multi-portal distribution. A solution that accelerates your transactions.",

      tableOfContents: {
        title: "In this article",
        items: [
          "Why real estate software?",
          "Main features",
          "Property management",
          "Client-property matching",
          "Multi-portal distribution",
          "Adapted pricing",
          "Training and support",
          "How to get started"
        ]
      },

      section1: {
        title: "Why Digitalize Your Real Estate Business?",
        paragraphs: [
          "Manual real estate agency management leads to errors: forgotten properties, unfollowed clients, expired mandates, and missed opportunities. A real estate CRM centralizes all this information and automates repetitive tasks.",
          "Algerian buyers and tenants search for properties online before contacting an agency. A strong digital presence with up-to-date listings on all portals has become essential to capture the best prospects.",
          "Our solution is adapted to the Algerian market: local property types (F3, F4, duplex, haouche...), prices in dinars, neighborhoods and wilayas, and complete Arabic and French interface."
        ],
        stats: [
          { value: "+45%", label: "Closed transactions" },
          { value: "-60%", label: "Selling time" },
          { value: "3x", label: "Listing visibility" },
          { value: "100%", label: "Mandates tracked" }
        ]
      },

      section2: {
        title: "Main Features",
        features: [
          {
            title: "Property Management",
            description: "Complete database of all your properties for sale or rent.",
            items: ["Detailed listings", "Unlimited photos", "Plans and videos", "Geolocation"],
            icon: Home
          },
          {
            title: "Client CRM",
            description: "Complete tracking of your buyer, seller and tenant clients.",
            items: ["Client files", "Contact history", "Search criteria", "Prospect scoring"],
            icon: Users
          },
          {
            title: "Mandate Management",
            description: "Mandate tracking with expiry alerts and renewal.",
            items: ["Exclusive/open mandates", "Expiry dates", "Signed documents", "Commissions"],
            icon: FileText
          },
          {
            title: "Visit Planning",
            description: "Visit organization with automatic reminders.",
            items: ["Shared calendar", "SMS confirmations", "Visit report", "History"],
            icon: Calendar
          },
          {
            title: "Listing Distribution",
            description: "Automatic publishing on real estate portals.",
            items: ["Ouedkniss", "Jumia House", "Your website", "Social media"],
            icon: Globe
          },
          {
            title: "Reports and Statistics",
            description: "Performance indicators for your business.",
            items: ["Sales by period", "Agent performance", "Conversion rate", "Market analysis"],
            icon: BarChart3
          }
        ]
      },

      section3: {
        title: "Advanced Property Management",
        intro: "Complete tools to manage your property portfolio:",
        adaptations: [
          {
            title: "Detailed Property Listings",
            description: "Area, rooms, floor, orientation, amenities, and all Algerian criteria."
          },
          {
            title: "Pro Photo Gallery",
            description: "Unlimited upload, automatic watermark, and room organization."
          },
          {
            title: "Price Estimation",
            description: "Estimation tool based on recent neighborhood transactions."
          },
          {
            title: "Property History",
            description: "All actions: visits, offers, price drops, contacts."
          },
          {
            title: "Documents",
            description: "Document storage: property title, plans, certificates."
          },
          {
            title: "Automatic Alerts",
            description: "Notifications for expiring mandates, unvisited properties, prices to revise."
          }
        ]
      },

      section4: {
        title: "Property Types and Transactions",
        sectors: [
          {
            name: "Apartment Sales",
            description: "F2, F3, F4, F5, duplex, penthouse in all wilayas.",
            benefits: ["All types F2-F5+", "New and old", "Partner developers"]
          },
          {
            name: "House Sales",
            description: "Villas, single-family homes, haouche, and land.",
            benefits: ["Villas and houses", "Traditional haouche", "Building land"]
          },
          {
            name: "Residential Rental",
            description: "Apartments and houses for long-term rent.",
            benefits: ["Move-in inspection", "Rent management", "Receipts"]
          },
          {
            name: "Commercial Real Estate",
            description: "Commercial premises, offices, warehouses.",
            benefits: ["Commercial premises", "Offices", "Warehouses"]
          },
          {
            name: "Property Development",
            description: "Management of new programs and off-plan sales.",
            benefits: ["Sales plans", "Reservations", "Payment calls"]
          }
        ]
      },

      section5: {
        title: "Multi-Portal Distribution",
        intro: "Automatically publish on all Algerian portals:",
        integrations: [
          { name: "Ouedkniss", tools: ["Real Estate", "Auto-publish", "Stats"], description: "The leader in classifieds in Algeria" },
          { name: "Jumia House", tools: ["Publishing", "Sync", "Analytics"], description: "Specialized real estate portal" },
          { name: "Agency Website", tools: ["Your site", "SEO", "Leads"], description: "Your personalized online showcase" },
          { name: "Social Networks", tools: ["Facebook", "Instagram", "WhatsApp"], description: "Distribution on networks" }
        ]
      },

      section6: {
        title: "Pricing for Real Estate Professionals",
        intro: "Plans adapted to your business:",
        plans: [
          {
            name: "Agent",
            price: "9,900 DA",
            period: "/month",
            users: "1 user",
            features: ["100 properties", "Client CRM", "2 portal distribution", "Basic reports", "Email support"]
          },
          {
            name: "Agency",
            price: "24,900 DA",
            period: "/month",
            users: "Up to 5 agents",
            features: ["Unlimited properties", "Everything in Agent +", "Multi-portal distribution", "Website included", "Advanced statistics", "Priority support"]
          },
          {
            name: "Developer",
            price: "Custom quote",
            period: "",
            users: "Unlimited team",
            features: ["Everything in Agency +", "Program management", "Sales plans", "Online reservations", "API", "Dedicated support"]
          }
        ]
      },

      section7: {
        title: "Deployment and Training",
        phases: [
          {
            title: "1. Agency Audit",
            description: "Analysis of your portfolio, current processes and specific needs."
          },
          {
            title: "2. Configuration",
            description: "Setup: property types, geographic areas, agents, document templates."
          },
          {
            title: "3. Data Import",
            description: "Migration of your existing properties and clients to the new system."
          },
          {
            title: "4. Training",
            description: "Practical training for all agents and administration."
          },
          {
            title: "5. Launch",
            description: "Production launch with enhanced support in the first weeks."
          }
        ]
      },

      wilayas: {
        title: "We Equip Real Estate Agencies Across Algeria",
        list: ["Algiers", "Oran", "Constantine", "Annaba", "Setif", "Blida", "Tlemcen", "Bejaia", "Tipaza", "Boumerdes"]
      },

      cta: {
        title: "Boost Your Real Estate Business",
        description: "Request a free demo of our real estate software. Our consultants will show you how to accelerate your sales and rentals.",
        button: "Request a Free Demo",
        phone: "+213 549 575 512",
        email: "contact@symloop.com"
      },

      backToBlog: "Back to Blog"
    },
    ar: {
      title: "برنامج إدارة العقارات في الجزائر",
      subtitle: "حل CRM شامل للوكالات العقارية والمطورين والوكلاء المستقلين",
      metaTitle: "برنامج عقارات وكالة CRM الجزائر 2026 | إدارة العقارات | Symloop",
      metaDesc: "برنامج إدارة عقارية للوكالات في الجزائر. إدارة العقارات، العملاء، التفويضات، الزيارات. نشر تلقائي. واجهة عربية/فرنسية. عرض مجاني.",
      date: "10 يناير 2026",
      readTime: "13 دقيقة",
      author: "فريق Symloop",
      category: "برنامج عقاري",

      intro: "يشهد سوق العقارات الجزائري تحولاً رقميًا. يتيح برنامج الإدارة العقارية لدينا للوكالات والمطورين والوكلاء المستقلين إدارة محفظة عقاراتهم بكفاءة: الإعلانات، التفويضات، عملاء المشترين/المستأجرين، الزيارات، والنشر على بوابات متعددة. حل يسرّع معاملاتك.",

      tableOfContents: {
        title: "في هذا المقال",
        items: [
          "لماذا برنامج عقاري؟",
          "الميزات الرئيسية",
          "إدارة العقارات",
          "مطابقة العملاء والعقارات",
          "النشر على بوابات متعددة",
          "تسعير مناسب",
          "التدريب والدعم",
          "كيف تبدأ"
        ]
      },

      section1: {
        title: "لماذا رقمنة نشاطك العقاري؟",
        paragraphs: [
          "تؤدي الإدارة اليدوية للوكالة العقارية إلى أخطاء: عقارات منسية، عملاء غير متابعين، تفويضات منتهية، وفرص ضائعة. يركز نظام CRM العقاري جميع هذه المعلومات ويؤتمت المهام المتكررة.",
          "يبحث المشترون والمستأجرون الجزائريون عن العقارات عبر الإنترنت قبل الاتصال بالوكالة. أصبح التواجد الرقمي القوي مع إعلانات محدثة على جميع البوابات ضروريًا لجذب أفضل العملاء المحتملين.",
          "حلنا متكيف مع السوق الجزائري: أنواع العقارات المحلية (F3، F4، دوبلكس، حوش...)، الأسعار بالدينار، الأحياء والولايات، وواجهة كاملة بالعربية والفرنسية."
        ],
        stats: [
          { value: "+45%", label: "صفقات مُنجزة" },
          { value: "-60%", label: "وقت البيع" },
          { value: "3x", label: "ظهور الإعلانات" },
          { value: "100%", label: "تفويضات متتبعة" }
        ]
      },

      section2: {
        title: "الميزات الرئيسية",
        features: [
          {
            title: "إدارة العقارات",
            description: "قاعدة بيانات كاملة لجميع عقاراتك للبيع أو الإيجار.",
            items: ["بطاقات مفصلة", "صور غير محدودة", "مخططات وفيديوهات", "تحديد الموقع"],
            icon: Home
          },
          {
            title: "CRM العملاء",
            description: "متابعة كاملة لعملاء المشترين والبائعين والمستأجرين.",
            items: ["بطاقات العملاء", "سجل الاتصالات", "معايير البحث", "تقييم العملاء المحتملين"],
            icon: Users
          },
          {
            title: "إدارة التفويضات",
            description: "متابعة التفويضات مع تنبيهات انتهاء الصلاحية والتجديد.",
            items: ["تفويضات حصرية/بسيطة", "تواريخ الانتهاء", "وثائق موقعة", "العمولات"],
            icon: FileText
          },
          {
            title: "جدولة الزيارات",
            description: "تنظيم الزيارات مع تذكيرات تلقائية.",
            items: ["تقويم مشترك", "تأكيدات SMS", "تقرير الزيارة", "السجل"],
            icon: Calendar
          },
          {
            title: "نشر الإعلانات",
            description: "نشر تلقائي على البوابات العقارية.",
            items: ["واد كنيس", "جوميا هاوس", "موقعك", "شبكات التواصل"],
            icon: Globe
          },
          {
            title: "التقارير والإحصائيات",
            description: "مؤشرات أداء نشاطك.",
            items: ["المبيعات حسب الفترة", "أداء الوكلاء", "معدل التحويل", "تحليل السوق"],
            icon: BarChart3
          }
        ]
      },

      section3: {
        title: "إدارة متقدمة للعقارات",
        intro: "أدوات شاملة لإدارة محفظة عقاراتك:",
        adaptations: [
          {
            title: "بطاقات عقارات مفصلة",
            description: "المساحة، الغرف، الطابق، الاتجاه، التجهيزات، وجميع المعايير الجزائرية."
          },
          {
            title: "معرض صور احترافي",
            description: "رفع غير محدود، علامة مائية تلقائية، وتنظيم حسب الغرف."
          },
          {
            title: "تقدير الأسعار",
            description: "أداة تقدير بناءً على المعاملات الأخيرة في الحي."
          },
          {
            title: "سجل العقار",
            description: "جميع الإجراءات: الزيارات، العروض، تخفيضات الأسعار، الاتصالات."
          },
          {
            title: "الوثائق",
            description: "تخزين الوثائق: سند الملكية، المخططات، الشهادات."
          },
          {
            title: "تنبيهات تلقائية",
            description: "إشعارات للتفويضات المنتهية، العقارات بدون زيارات، الأسعار المراد مراجعتها."
          }
        ]
      },

      section4: {
        title: "أنواع العقارات والمعاملات",
        sectors: [
          {
            name: "بيع الشقق",
            description: "F2، F3، F4، F5، دوبلكس، بنتهاوس في جميع الولايات.",
            benefits: ["جميع الأنواع F2-F5+", "جديد وقديم", "مطورون شركاء"]
          },
          {
            name: "بيع المنازل",
            description: "فيلات، منازل فردية، حوش، وأراضي.",
            benefits: ["فيلات ومنازل", "حوش تقليدية", "أراضي للبناء"]
          },
          {
            name: "الإيجار السكني",
            description: "شقق ومنازل للإيجار طويل المدى.",
            benefits: ["محضر الحالة", "إدارة الإيجارات", "الإيصالات"]
          },
          {
            name: "العقارات التجارية",
            description: "محلات تجارية، مكاتب، مستودعات.",
            benefits: ["محلات تجارية", "مكاتب", "مستودعات"]
          },
          {
            name: "الترقية العقارية",
            description: "إدارة البرامج الجديدة والبيع على المخطط.",
            benefits: ["مخططات البيع", "الحجوزات", "طلبات الدفع"]
          }
        ]
      },

      section5: {
        title: "النشر على بوابات متعددة",
        intro: "انشر تلقائيًا على جميع البوابات الجزائرية:",
        integrations: [
          { name: "واد كنيس", tools: ["عقارات", "نشر تلقائي", "إحصائيات"], description: "الرائد في الإعلانات المبوبة في الجزائر" },
          { name: "جوميا هاوس", tools: ["نشر", "مزامنة", "تحليلات"], description: "بوابة عقارية متخصصة" },
          { name: "موقع الوكالة", tools: ["موقعك", "SEO", "عملاء محتملون"], description: "واجهتك المخصصة عبر الإنترنت" },
          { name: "شبكات التواصل", tools: ["فيسبوك", "إنستغرام", "واتساب"], description: "التوزيع على الشبكات" }
        ]
      },

      section6: {
        title: "تسعير للمحترفين العقاريين",
        intro: "خطط مناسبة لنشاطك:",
        plans: [
          {
            name: "وكيل",
            price: "9,900 دج",
            period: "/شهر",
            users: "مستخدم واحد",
            features: ["100 عقار", "CRM عملاء", "نشر على بوابتين", "تقارير أساسية", "دعم بالبريد"]
          },
          {
            name: "وكالة",
            price: "24,900 دج",
            period: "/شهر",
            users: "حتى 5 وكلاء",
            features: ["عقارات غير محدودة", "كل ميزات الوكيل +", "نشر متعدد البوابات", "موقع مشمول", "إحصائيات متقدمة", "دعم ذو أولوية"]
          },
          {
            name: "مطور",
            price: "عرض مخصص",
            period: "",
            users: "فريق غير محدود",
            features: ["كل ميزات الوكالة +", "إدارة البرامج", "مخططات البيع", "حجوزات عبر الإنترنت", "API", "دعم مخصص"]
          }
        ]
      },

      section7: {
        title: "النشر والتدريب",
        phases: [
          {
            title: "1. تدقيق الوكالة",
            description: "تحليل محفظتك، العمليات الحالية، والاحتياجات الخاصة."
          },
          {
            title: "2. التكوين",
            description: "الإعداد: أنواع العقارات، المناطق الجغرافية، الوكلاء، قوالب الوثائق."
          },
          {
            title: "3. استيراد البيانات",
            description: "ترحيل عقاراتك وعملائك الحاليين إلى النظام الجديد."
          },
          {
            title: "4. التدريب",
            description: "تدريب عملي لجميع الوكلاء والإدارة."
          },
          {
            title: "5. الإطلاق",
            description: "بدء الإنتاج مع دعم معزز في الأسابيع الأولى."
          }
        ]
      },

      wilayas: {
        title: "نجهز الوكالات العقارية في جميع أنحاء الجزائر",
        list: ["الجزائر", "وهران", "قسنطينة", "عنابة", "سطيف", "البليدة", "تلمسان", "بجاية", "تيبازة", "بومرداس"]
      },

      cta: {
        title: "عزز نشاطك العقاري",
        description: "اطلب عرضًا مجانيًا لبرنامجنا العقاري. سيوضح لك مستشارونا كيفية تسريع مبيعاتك وإيجاراتك.",
        button: "اطلب عرضًا مجانيًا",
        phone: "+213 549 575 512",
        email: "contact@symloop.com"
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
        <meta name="keywords" content="logiciel immobilier algerie, CRM immobilier, gestion agence immobiliere, logiciel annonces, diffusion ouedkniss, logiciel promoteur" />
        <link rel="canonical" href={`https://symloop.com/${locale === 'fr' ? '' : locale + '/'}blog/logiciel-immobilier-agence-algerie-2026`} />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDesc} />
        <meta property="og:type" content="article" />
      </Head>

      <main className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-black to-purple-500/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {t.backToBlog}
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-violet-500/20 text-violet-400 rounded-full text-sm font-medium">
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
                <Layers className="w-5 h-5 text-violet-400" />
                {t.tableOfContents.title}
              </h2>
              <ul className="space-y-3">
                {t.tableOfContents.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <span className="w-6 h-6 bg-violet-500/20 text-violet-400 rounded-full flex items-center justify-center text-xs font-bold">{index + 1}</span>
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
                    <div className="text-2xl font-bold text-violet-400">{stat.value}</div>
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
                      <div className="p-2 bg-violet-500/20 rounded-lg"><f.icon className="w-5 h-5 text-violet-400" /></div>
                      <h3 className="font-bold">{f.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{f.description}</p>
                    <ul className="space-y-1">
                      {f.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-violet-400" />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4">{t.section3.title}</h2>
              <p className="text-gray-300 mb-6">{t.section3.intro}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {t.section3.adaptations.map((a, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="font-bold mb-1 text-violet-400">{a.title}</h3>
                    <p className="text-sm text-gray-400">{a.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">{t.section4.title}</h2>
              <div className="space-y-4">
                {t.section4.sectors.map((s, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold mb-2">{s.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{s.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.benefits.map((b, j) => (
                        <span key={j} className="px-3 py-1 bg-violet-500/10 text-violet-400 rounded-full text-xs">{b}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4">{t.section5.title}</h2>
              <p className="text-gray-300 mb-6">{t.section5.intro}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {t.section5.integrations.map((intg, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="font-bold mb-2">{intg.name}</h3>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {intg.tools.map((tool, j) => (
                        <span key={j} className="px-2 py-0.5 bg-violet-500/10 text-violet-400 rounded text-xs">{tool}</span>
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
                  <div key={i} className={`bg-white/5 border rounded-xl p-6 ${i === 1 ? 'border-violet-500/50 ring-1 ring-violet-500/20' : 'border-white/10'}`}>
                    <h3 className="font-bold text-xl mb-2">{p.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-violet-400">{p.price}</span>
                      <span className="text-gray-400">{p.period}</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">{p.users}</p>
                    <ul className="space-y-2">
                      {p.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-violet-400" />{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">{t.section7.title}</h2>
              <div className="space-y-4">
                {t.section7.phases.map((phase, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-violet-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-violet-400 font-bold">{i + 1}</span>
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
            <div className="bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-violet-500/20 border border-violet-500/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">{t.cta.title}</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">{t.cta.description}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={`tel:${t.cta.phone}`} className="inline-flex items-center gap-2 px-6 py-3 bg-violet-500 hover:bg-violet-600 text-white font-medium rounded-lg transition-colors">
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
