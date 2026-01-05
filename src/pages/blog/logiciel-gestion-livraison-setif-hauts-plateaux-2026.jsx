"use client";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArrowLeft, Calendar, Clock, User,
  Truck, MapPin, Navigation, Package,
  CheckCircle, Phone, Mail, Smartphone,
  Layers, Route, Timer, DollarSign,
  BarChart3, Users, Bell, Camera,
  FileText, Shield, Zap, Map
} from "lucide-react";

export default function LogicielLivraisonSetif2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const content = {
    fr: {
      title: "Logiciel Gestion Livraison pour Setif et les Hauts Plateaux",
      subtitle: "Optimisez vos Livraisons : Suivi GPS, Gestion Livreurs, Facturation Automatique",
      metaTitle: "Logiciel Gestion Livraison Setif Hauts Plateaux 2026 | Symloop",
      metaDesc: "Logiciel gestion livraison pour Setif et Hauts Plateaux. Suivi GPS livreurs, affectation automatique, facturation. Ideal e-commerce et distribution. Essai gratuit.",
      date: "5 Janvier 2026",
      readTime: "14 min",
      author: "Symloop Team",
      category: "Logiciel Livraison",

      intro: "Vous gerez des livraisons a Setif, Bordj Bou Arreridj, M'sila, Batna ou dans les Hauts Plateaux ? Vous savez combien il est difficile de coordonner les livreurs, suivre les colis et satisfaire des clients exigeants. Notre logiciel de gestion de livraison vous donne le controle total sur vos operations.",

      tableOfContents: {
        title: "Dans cet article",
        items: [
          "Defis de la livraison dans la region",
          "Fonctionnalites du logiciel",
          "Suivi GPS en temps reel",
          "Gestion des livreurs",
          "Application livreur mobile",
          "Facturation automatique",
          "Integration e-commerce",
          "Tarifs et demo"
        ]
      },

      section1: {
        title: "Les Defis de la Livraison dans les Hauts Plateaux",
        paragraphs: [
          "La region de Setif et les Hauts Plateaux presentent des defis uniques pour la livraison : grandes distances entre les villes, routes parfois difficiles, clients disperses. Sans outil adapte, vous perdez du temps, de l'argent et des clients.",
          "Les entreprises de e-commerce, les distributeurs et les commercants locaux ont besoin d'une solution qui comprend ces realites : optimisation des tournees pour reduire les kilometres, suivi en temps reel pour rassurer les clients, preuve de livraison pour eviter les litiges.",
          "Notre logiciel a ete concu en pensant aux specificites du marche algerien : interface en arabe et francais, cartographie precise de la region, integration avec les modes de paiement locaux."
        ],
        challenges: [
          { icon: MapPin, title: "Grandes distances", desc: "Setif-Batna: 120km, Setif-M'sila: 130km" },
          { icon: Route, title: "Tournees complexes", desc: "Multiples points de livraison par jour" },
          { icon: Phone, title: "Clients exigeants", desc: "Veulent savoir ou est leur colis" },
          { icon: DollarSign, title: "Couts eleves", desc: "Carburant et temps mal optimises" }
        ]
      },

      section2: {
        title: "Fonctionnalites Principales",
        features: [
          {
            title: "Suivi GPS Temps Reel",
            description: "Voyez ou sont tous vos livreurs sur une carte en temps reel. Suivez leur progression, leur vitesse, leurs arrets.",
            benefits: ["Position en direct", "Historique des trajets", "Alertes de deviation", "Geofencing"]
          },
          {
            title: "Optimisation des Tournees",
            description: "L'algorithme calcule le meilleur itineraire pour minimiser les kilometres et maximiser les livraisons.",
            benefits: ["Calcul automatique", "Prise en compte du trafic", "Plusieurs criteres", "Economies carburant"]
          },
          {
            title: "Affectation Intelligente",
            description: "Affectez automatiquement les livraisons aux livreurs selon leur zone, charge et disponibilite.",
            benefits: ["Affectation auto", "Equilibrage charge", "Par zone geographique", "Respect des priorites"]
          },
          {
            title: "Preuve de Livraison",
            description: "Photo, signature electronique et geolocalisation pour prouver chaque livraison effectuee.",
            benefits: ["Photo du colis", "Signature client", "Horodatage GPS", "Stockage cloud"]
          },
          {
            title: "Notifications Client",
            description: "SMS et WhatsApp automatiques pour informer le client de l'avancement de sa livraison.",
            benefits: ["SMS automatique", "WhatsApp Business", "Lien de suivi", "ETA en temps reel"]
          },
          {
            title: "Tableau de Bord Analytics",
            description: "Statistiques detaillees : taux de livraison, temps moyen, performance par livreur.",
            benefits: ["KPIs en temps reel", "Comparaison periodes", "Export rapports", "Objectifs"]
          }
        ]
      },

      section3: {
        title: "Application Livreur Mobile",
        intro: "Chaque livreur dispose d'une application mobile simple et efficace :",
        appFeatures: [
          { title: "Liste des livraisons", desc: "Toutes les livraisons du jour avec details et priorites" },
          { title: "Navigation integree", desc: "Guidage GPS vers chaque point de livraison" },
          { title: "Scan code-barres", desc: "Scanner le colis pour confirmation" },
          { title: "Photo et signature", desc: "Capturer la preuve de livraison" },
          { title: "Appel client", desc: "Appeler le client directement depuis l'app" },
          { title: "Signaler probleme", desc: "Absent, adresse incorrecte, colis refuse..." },
          { title: "Mode hors ligne", desc: "Fonctionne meme sans connexion internet" },
          { title: "Multi-langues", desc: "Interface en francais et arabe" }
        ]
      },

      section4: {
        title: "Facturation et Paiement",
        intro: "Gerez facilement la facturation de vos livraisons :",
        features: [
          {
            title: "Tarification Flexible",
            description: "Definissez vos tarifs par zone, par poids, par type de produit ou forfaitaire."
          },
          {
            title: "Encaissement a la Livraison",
            description: "Le livreur peut encaisser en especes. Le montant est enregistre automatiquement."
          },
          {
            title: "Facturation Automatique",
            description: "Generez automatiquement les factures pour vos clients professionnels."
          },
          {
            title: "Rapprochement Comptable",
            description: "Exportez les donnees vers votre logiciel comptable (Sage, Excel, etc.)."
          }
        ]
      },

      section5: {
        title: "Integration E-commerce",
        intro: "Connectez votre boutique en ligne pour automatiser le flux de commandes :",
        integrations: [
          { name: "WooCommerce", desc: "Import automatique des commandes WordPress" },
          { name: "PrestaShop", desc: "Synchronisation bidirectionnelle" },
          { name: "Shopify", desc: "Webhook pour nouvelles commandes" },
          { name: "API REST", desc: "Integration avec n'importe quel systeme" }
        ],
        workflow: [
          "Commande passee sur votre site",
          "Import automatique dans le logiciel",
          "Affectation au livreur",
          "Notification client",
          "Livraison avec preuve",
          "Statut mis a jour sur le site"
        ]
      },

      section6: {
        title: "Zones Couvertes",
        intro: "Notre logiciel est optimise pour la livraison dans toute la region :",
        zones: [
          { name: "Setif", communes: "Setif, El Eulma, Ain Oulmene, Ain Arnat..." },
          { name: "Bordj Bou Arreridj", communes: "BBA, Ras El Oued, Bordj Ghedir..." },
          { name: "M'sila", communes: "M'sila, Bou Saada, Sidi Aissa..." },
          { name: "Batna", communes: "Batna, Barika, Ain Touta, N'gaous..." },
          { name: "Bejaia", communes: "Bejaia, Akbou, Sidi Aich..." },
          { name: "Jijel", communes: "Jijel, Taher, El Milia..." }
        ]
      },

      pricing: {
        title: "Tarification Simple",
        plans: [
          {
            name: "Starter",
            price: "14,900 DA",
            period: "/mois",
            desc: "Ideal pour demarrer",
            features: ["Jusqu'a 5 livreurs", "500 livraisons/mois", "Suivi GPS", "App mobile", "Support email"]
          },
          {
            name: "Pro",
            price: "34,900 DA",
            period: "/mois",
            desc: "Pour les professionnels",
            features: ["Jusqu'a 20 livreurs", "2000 livraisons/mois", "Optimisation tournees", "Integration e-commerce", "Support prioritaire"]
          },
          {
            name: "Enterprise",
            price: "Sur devis",
            period: "",
            desc: "Solutions sur mesure",
            features: ["Livreurs illimites", "Livraisons illimitees", "API complete", "Formation sur site", "Account manager dedie"]
          }
        ]
      },

      cta: {
        title: "Optimisez Vos Livraisons Des Aujourd'hui",
        description: "Demandez une demonstration gratuite et decouvrez comment notre logiciel peut transformer vos operations de livraison.",
        button: "Demander une Demo",
        phone: "+213 549 575 512",
        email: "livraison@symloop.com"
      },

      backToBlog: "Retour au Blog"
    },
    en: {
      title: "Delivery Management Software for Setif and High Plateaus",
      subtitle: "Optimize Your Deliveries: GPS Tracking, Driver Management, Automatic Billing",
      metaTitle: "Delivery Management Software Setif High Plateaus 2026 | Symloop",
      metaDesc: "Delivery management software for Setif and High Plateaus. GPS driver tracking, automatic assignment, billing. Ideal for e-commerce and distribution. Free trial.",
      date: "January 5, 2026",
      readTime: "14 min",
      author: "Symloop Team",
      category: "Delivery Software",

      intro: "Do you manage deliveries in Setif, Bordj Bou Arreridj, M'sila, Batna or the High Plateaus? You know how difficult it is to coordinate drivers, track packages and satisfy demanding customers. Our delivery management software gives you total control over your operations.",

      tableOfContents: {
        title: "In this article",
        items: [
          "Delivery challenges in the region",
          "Software features",
          "Real-time GPS tracking",
          "Driver management",
          "Mobile driver app",
          "Automatic billing",
          "E-commerce integration",
          "Pricing and demo"
        ]
      },

      section1: {
        title: "Delivery Challenges in the High Plateaus",
        paragraphs: [
          "The Setif region and High Plateaus present unique delivery challenges: long distances between cities, sometimes difficult roads, scattered customers. Without an adapted tool, you lose time, money and customers.",
          "E-commerce businesses, distributors and local merchants need a solution that understands these realities: route optimization to reduce kilometers, real-time tracking to reassure customers, proof of delivery to avoid disputes.",
          "Our software was designed with the specifics of the Algerian market in mind: Arabic and French interface, precise mapping of the region, integration with local payment methods."
        ],
        challenges: [
          { icon: MapPin, title: "Long distances", desc: "Setif-Batna: 120km, Setif-M'sila: 130km" },
          { icon: Route, title: "Complex routes", desc: "Multiple delivery points per day" },
          { icon: Phone, title: "Demanding customers", desc: "Want to know where their package is" },
          { icon: DollarSign, title: "High costs", desc: "Poorly optimized fuel and time" }
        ]
      },

      section2: {
        title: "Main Features",
        features: [
          {
            title: "Real-Time GPS Tracking",
            description: "See where all your drivers are on a real-time map. Track their progress, speed, and stops.",
            benefits: ["Live position", "Route history", "Deviation alerts", "Geofencing"]
          },
          {
            title: "Route Optimization",
            description: "The algorithm calculates the best route to minimize kilometers and maximize deliveries.",
            benefits: ["Automatic calculation", "Traffic consideration", "Multiple criteria", "Fuel savings"]
          },
          {
            title: "Smart Assignment",
            description: "Automatically assign deliveries to drivers based on their zone, load and availability.",
            benefits: ["Auto assignment", "Load balancing", "By geographic zone", "Priority respect"]
          },
          {
            title: "Proof of Delivery",
            description: "Photo, electronic signature and geolocation to prove each delivery made.",
            benefits: ["Package photo", "Customer signature", "GPS timestamp", "Cloud storage"]
          },
          {
            title: "Customer Notifications",
            description: "Automatic SMS and WhatsApp to inform the customer of their delivery progress.",
            benefits: ["Automatic SMS", "WhatsApp Business", "Tracking link", "Real-time ETA"]
          },
          {
            title: "Analytics Dashboard",
            description: "Detailed statistics: delivery rate, average time, performance per driver.",
            benefits: ["Real-time KPIs", "Period comparison", "Report export", "Goals"]
          }
        ]
      },

      section3: {
        title: "Mobile Driver App",
        intro: "Each driver has a simple and efficient mobile application:",
        appFeatures: [
          { title: "Delivery list", desc: "All day's deliveries with details and priorities" },
          { title: "Integrated navigation", desc: "GPS guidance to each delivery point" },
          { title: "Barcode scan", desc: "Scan package for confirmation" },
          { title: "Photo and signature", desc: "Capture proof of delivery" },
          { title: "Call customer", desc: "Call customer directly from app" },
          { title: "Report problem", desc: "Absent, incorrect address, refused package..." },
          { title: "Offline mode", desc: "Works even without internet connection" },
          { title: "Multi-language", desc: "Interface in French and Arabic" }
        ]
      },

      section4: {
        title: "Billing and Payment",
        intro: "Easily manage your delivery billing:",
        features: [
          {
            title: "Flexible Pricing",
            description: "Set your rates by zone, by weight, by product type or flat rate."
          },
          {
            title: "Cash on Delivery",
            description: "The driver can collect cash. The amount is automatically recorded."
          },
          {
            title: "Automatic Invoicing",
            description: "Automatically generate invoices for your business customers."
          },
          {
            title: "Accounting Reconciliation",
            description: "Export data to your accounting software (Sage, Excel, etc.)."
          }
        ]
      },

      section5: {
        title: "E-commerce Integration",
        intro: "Connect your online store to automate the order flow:",
        integrations: [
          { name: "WooCommerce", desc: "Automatic import of WordPress orders" },
          { name: "PrestaShop", desc: "Bidirectional synchronization" },
          { name: "Shopify", desc: "Webhook for new orders" },
          { name: "REST API", desc: "Integration with any system" }
        ],
        workflow: [
          "Order placed on your site",
          "Automatic import into software",
          "Assignment to driver",
          "Customer notification",
          "Delivery with proof",
          "Status updated on site"
        ]
      },

      section6: {
        title: "Covered Areas",
        intro: "Our software is optimized for delivery throughout the region:",
        zones: [
          { name: "Setif", communes: "Setif, El Eulma, Ain Oulmene, Ain Arnat..." },
          { name: "Bordj Bou Arreridj", communes: "BBA, Ras El Oued, Bordj Ghedir..." },
          { name: "M'sila", communes: "M'sila, Bou Saada, Sidi Aissa..." },
          { name: "Batna", communes: "Batna, Barika, Ain Touta, N'gaous..." },
          { name: "Bejaia", communes: "Bejaia, Akbou, Sidi Aich..." },
          { name: "Jijel", communes: "Jijel, Taher, El Milia..." }
        ]
      },

      pricing: {
        title: "Simple Pricing",
        plans: [
          {
            name: "Starter",
            price: "14,900 DA",
            period: "/month",
            desc: "Ideal to start",
            features: ["Up to 5 drivers", "500 deliveries/month", "GPS tracking", "Mobile app", "Email support"]
          },
          {
            name: "Pro",
            price: "34,900 DA",
            period: "/month",
            desc: "For professionals",
            features: ["Up to 20 drivers", "2000 deliveries/month", "Route optimization", "E-commerce integration", "Priority support"]
          },
          {
            name: "Enterprise",
            price: "Custom quote",
            period: "",
            desc: "Custom solutions",
            features: ["Unlimited drivers", "Unlimited deliveries", "Full API", "On-site training", "Dedicated account manager"]
          }
        ]
      },

      cta: {
        title: "Optimize Your Deliveries Today",
        description: "Request a free demo and discover how our software can transform your delivery operations.",
        button: "Request a Demo",
        phone: "+213 549 575 512",
        email: "livraison@symloop.com"
      },

      backToBlog: "Back to Blog"
    },
    ar: {
      title: "برنامج إدارة التوصيل لسطيف والهضاب العليا",
      subtitle: "حسّن توصيلاتك: تتبع GPS، إدارة السائقين، فوترة تلقائية",
      metaTitle: "برنامج إدارة التوصيل سطيف الهضاب العليا 2026 | Symloop",
      metaDesc: "برنامج إدارة التوصيل لسطيف والهضاب العليا. تتبع GPS للسائقين، تعيين تلقائي، فوترة. مثالي للتجارة الإلكترونية والتوزيع. تجربة مجانية.",
      date: "5 يناير 2026",
      readTime: "14 دقيقة",
      author: "فريق Symloop",
      category: "برنامج التوصيل",

      intro: "هل تدير التوصيلات في سطيف، برج بوعريريج، المسيلة، باتنة أو الهضاب العليا؟ أنت تعلم مدى صعوبة تنسيق السائقين وتتبع الطرود وإرضاء العملاء المتطلبين. برنامج إدارة التوصيل لدينا يمنحك السيطرة الكاملة على عملياتك.",

      tableOfContents: {
        title: "في هذا المقال",
        items: [
          "تحديات التوصيل في المنطقة",
          "ميزات البرنامج",
          "تتبع GPS في الوقت الفعلي",
          "إدارة السائقين",
          "تطبيق السائق للجوال",
          "الفوترة التلقائية",
          "التكامل مع التجارة الإلكترونية",
          "الأسعار والعرض"
        ]
      },

      section1: {
        title: "تحديات التوصيل في الهضاب العليا",
        paragraphs: [
          "تقدم منطقة سطيف والهضاب العليا تحديات فريدة للتوصيل: مسافات طويلة بين المدن، طرق صعبة أحياناً، عملاء متفرقون. بدون أداة مناسبة، تخسر الوقت والمال والعملاء.",
          "تحتاج شركات التجارة الإلكترونية والموزعون والتجار المحليون إلى حل يفهم هذه الحقائق: تحسين المسارات لتقليل الكيلومترات، التتبع في الوقت الفعلي لطمأنة العملاء، إثبات التسليم لتجنب النزاعات.",
          "تم تصميم برنامجنا مع مراعاة خصوصيات السوق الجزائري: واجهة بالعربية والفرنسية، خرائط دقيقة للمنطقة، تكامل مع طرق الدفع المحلية."
        ],
        challenges: [
          { icon: MapPin, title: "مسافات طويلة", desc: "سطيف-باتنة: 120 كم، سطيف-المسيلة: 130 كم" },
          { icon: Route, title: "مسارات معقدة", desc: "نقاط توصيل متعددة يومياً" },
          { icon: Phone, title: "عملاء متطلبون", desc: "يريدون معرفة أين طردهم" },
          { icon: DollarSign, title: "تكاليف عالية", desc: "وقود ووقت غير محسّنين" }
        ]
      },

      section2: {
        title: "الميزات الرئيسية",
        features: [
          {
            title: "تتبع GPS في الوقت الفعلي",
            description: "شاهد أين يتواجد جميع سائقيك على خريطة مباشرة. تتبع تقدمهم وسرعتهم وتوقفاتهم.",
            benefits: ["موقع مباشر", "سجل المسارات", "تنبيهات الانحراف", "تحديد المناطق"]
          },
          {
            title: "تحسين المسارات",
            description: "تحسب الخوارزمية أفضل مسار لتقليل الكيلومترات وزيادة التوصيلات.",
            benefits: ["حساب تلقائي", "مراعاة حركة المرور", "معايير متعددة", "توفير الوقود"]
          },
          {
            title: "التعيين الذكي",
            description: "تعيين التوصيلات تلقائياً للسائقين حسب منطقتهم وحمولتهم وتوفرهم.",
            benefits: ["تعيين تلقائي", "موازنة الحمولة", "حسب المنطقة", "احترام الأولويات"]
          },
          {
            title: "إثبات التسليم",
            description: "صورة، توقيع إلكتروني وتحديد الموقع لإثبات كل توصيل.",
            benefits: ["صورة الطرد", "توقيع العميل", "طابع زمني GPS", "تخزين سحابي"]
          },
          {
            title: "إشعارات العملاء",
            description: "رسائل SMS وواتساب تلقائية لإبلاغ العميل بتقدم توصيله.",
            benefits: ["SMS تلقائي", "WhatsApp Business", "رابط التتبع", "وقت الوصول المتوقع"]
          },
          {
            title: "لوحة تحليلات",
            description: "إحصائيات مفصلة: معدل التوصيل، الوقت المتوسط، أداء كل سائق.",
            benefits: ["KPIs مباشرة", "مقارنة الفترات", "تصدير التقارير", "الأهداف"]
          }
        ]
      },

      section3: {
        title: "تطبيق السائق للجوال",
        intro: "كل سائق لديه تطبيق جوال بسيط وفعال:",
        appFeatures: [
          { title: "قائمة التوصيلات", desc: "جميع توصيلات اليوم مع التفاصيل والأولويات" },
          { title: "الملاحة المدمجة", desc: "توجيه GPS لكل نقطة توصيل" },
          { title: "مسح الباركود", desc: "مسح الطرد للتأكيد" },
          { title: "صورة وتوقيع", desc: "التقاط إثبات التسليم" },
          { title: "الاتصال بالعميل", desc: "الاتصال بالعميل مباشرة من التطبيق" },
          { title: "الإبلاغ عن مشكلة", desc: "غائب، عنوان خاطئ، طرد مرفوض..." },
          { title: "وضع عدم الاتصال", desc: "يعمل حتى بدون إنترنت" },
          { title: "متعدد اللغات", desc: "واجهة بالفرنسية والعربية" }
        ]
      },

      section4: {
        title: "الفوترة والدفع",
        intro: "إدارة سهلة لفوترة التوصيلات:",
        features: [
          {
            title: "تسعير مرن",
            description: "حدد أسعارك حسب المنطقة، الوزن، نوع المنتج أو بسعر ثابت."
          },
          {
            title: "الدفع عند الاستلام",
            description: "يمكن للسائق تحصيل النقد. يتم تسجيل المبلغ تلقائياً."
          },
          {
            title: "فوترة تلقائية",
            description: "إنشاء الفواتير تلقائياً لعملائك المحترفين."
          },
          {
            title: "التسوية المحاسبية",
            description: "تصدير البيانات لبرنامج المحاسبة (Sage، Excel، إلخ)."
          }
        ]
      },

      section5: {
        title: "التكامل مع التجارة الإلكترونية",
        intro: "اربط متجرك الإلكتروني لأتمتة تدفق الطلبات:",
        integrations: [
          { name: "WooCommerce", desc: "استيراد تلقائي لطلبات WordPress" },
          { name: "PrestaShop", desc: "مزامنة ثنائية الاتجاه" },
          { name: "Shopify", desc: "Webhook للطلبات الجديدة" },
          { name: "REST API", desc: "تكامل مع أي نظام" }
        ],
        workflow: [
          "طلب على موقعك",
          "استيراد تلقائي للبرنامج",
          "تعيين للسائق",
          "إشعار العميل",
          "توصيل مع إثبات",
          "تحديث الحالة على الموقع"
        ]
      },

      section6: {
        title: "المناطق المغطاة",
        intro: "برنامجنا محسّن للتوصيل في جميع أنحاء المنطقة:",
        zones: [
          { name: "سطيف", communes: "سطيف، العلمة، عين ولمان، عين أرنات..." },
          { name: "برج بوعريريج", communes: "برج، راس الوادي، برج الغدير..." },
          { name: "المسيلة", communes: "المسيلة، بوسعادة، سيدي عيسى..." },
          { name: "باتنة", communes: "باتنة، بريكة، عين التوتة، نقاوس..." },
          { name: "بجاية", communes: "بجاية، أقبو، سيدي عيش..." },
          { name: "جيجل", communes: "جيجل، الطاهير، الميلية..." }
        ]
      },

      pricing: {
        title: "تسعير بسيط",
        plans: [
          {
            name: "البداية",
            price: "14,900 دج",
            period: "/شهر",
            desc: "مثالي للبدء",
            features: ["حتى 5 سائقين", "500 توصيل/شهر", "تتبع GPS", "تطبيق جوال", "دعم بالبريد"]
          },
          {
            name: "احترافي",
            price: "34,900 دج",
            period: "/شهر",
            desc: "للمحترفين",
            features: ["حتى 20 سائق", "2000 توصيل/شهر", "تحسين المسارات", "تكامل e-commerce", "دعم ذو أولوية"]
          },
          {
            name: "المؤسسات",
            price: "عرض مخصص",
            period: "",
            desc: "حلول مخصصة",
            features: ["سائقون غير محدودين", "توصيلات غير محدودة", "API كامل", "تدريب في الموقع", "مدير حساب مخصص"]
          }
        ]
      },

      cta: {
        title: "حسّن توصيلاتك اليوم",
        description: "اطلب عرضاً مجانياً واكتشف كيف يمكن لبرنامجنا تحويل عمليات التوصيل لديك.",
        button: "اطلب عرضاً",
        phone: "+213 549 575 512",
        email: "livraison@symloop.com"
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
        <meta name="keywords" content="logiciel livraison Setif, gestion livreurs, suivi GPS, delivery management, e-commerce Setif, distribution Hauts Plateaux" />
        <link rel="canonical" href={`https://symloop.com/${locale === 'fr' ? '' : locale + '/'}blog/logiciel-gestion-livraison-setif-hauts-plateaux-2026`} />
      </Head>

      <main className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-black to-red-500/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />{t.backToBlog}
            </Link>
            <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">{t.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-6 leading-tight">{t.title}</h1>
            <p className="text-xl text-gray-300 mb-8">{t.subtitle}</p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />{t.date}</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" />{t.readTime}</div>
              <div className="flex items-center gap-2"><User className="w-4 h-4" />{t.author}</div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-xl text-gray-300 leading-relaxed mb-16">{t.intro}</p>

            {/* TOC */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-16">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Layers className="w-5 h-5 text-orange-400" />{t.tableOfContents.title}
              </h2>
              <ul className="space-y-3">
                {t.tableOfContents.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="w-6 h-6 bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 1 - Challenges */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">{t.section1.title}</h2>
              {t.section1.paragraphs.map((p, i) => <p key={i} className="text-gray-300 mb-4 leading-relaxed">{p}</p>)}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {t.section1.challenges.map((c, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <c.icon className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                    <div className="font-bold text-sm mb-1">{c.title}</div>
                    <div className="text-xs text-gray-400">{c.desc}</div>
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
                    <h3 className="font-bold mb-2 text-orange-400">{f.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{f.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {f.benefits.map((b, j) => (
                        <span key={j} className="px-2 py-1 bg-orange-500/10 text-orange-300 rounded text-xs">{b}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3 - Mobile App */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4">{t.section3.title}</h2>
              <p className="text-gray-300 mb-6">{t.section3.intro}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {t.section3.appFeatures.map((f, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="font-bold text-sm mb-1">{f.title}</h4>
                    <p className="text-xs text-gray-400">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 6 - Zones */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4">{t.section6.title}</h2>
              <p className="text-gray-300 mb-6">{t.section6.intro}</p>
              <div className="grid md:grid-cols-3 gap-4">
                {t.section6.zones.map((z, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="font-bold mb-1 text-orange-400">{z.name}</h4>
                    <p className="text-xs text-gray-400">{z.communes}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{t.pricing.title}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {t.pricing.plans.map((p, i) => (
                  <div key={i} className={`bg-white/5 border rounded-xl p-6 ${i === 1 ? 'border-orange-500/50 ring-1 ring-orange-500/20' : 'border-white/10'}`}>
                    <h3 className="font-bold text-xl mb-1">{p.name}</h3>
                    <p className="text-sm text-gray-400 mb-2">{p.desc}</p>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-orange-400">{p.price}</span>
                      <span className="text-gray-400">{p.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {p.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-orange-400" />{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-orange-500/20 via-red-500/20 to-orange-500/20 border border-orange-500/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">{t.cta.title}</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">{t.cta.description}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={`tel:${t.cta.phone}`} className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors">
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
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
