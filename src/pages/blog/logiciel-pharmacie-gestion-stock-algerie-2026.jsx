"use client";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArrowLeft, Calendar, Clock, User,
  Package, TrendingUp, AlertTriangle, BarChart3,
  CheckCircle, Phone, Mail, Pill,
  Layers, FileText, Shield, Zap,
  QrCode, Truck, CreditCard, Bell,
  Users, Building2, Search, RefreshCw
} from "lucide-react";

export default function LogicielPharmacie2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const content = {
    fr: {
      title: "Logiciel de Gestion pour Pharmacies en Algerie",
      subtitle: "Solution Complete pour Officines : Stock, Ventes, Ordonnances et Conformite",
      metaTitle: "Logiciel Pharmacie Gestion Stock Algerie 2026 | Officine | Symloop",
      metaDesc: "Logiciel de gestion pour pharmacies en Algerie. Gestion stock, ventes, ordonnances, alertes peremption, tiers payant. Conforme reglementation. Demo gratuite.",
      date: "10 Janvier 2026",
      readTime: "13 min",
      author: "Symloop Team",
      category: "Logiciel Pharmacie",

      intro: "La gestion d'une pharmacie en Algerie exige precision et conformite. Notre logiciel de gestion pharmaceutique est concu pour les officines algeriennes : gestion des stocks avec alertes de peremption, dispensation des ordonnances, tiers payant CNAS/CASNOS, et traçabilite complete. Une solution qui vous fait gagner du temps tout en assurant la conformite reglementaire.",

      tableOfContents: {
        title: "Dans cet article",
        items: [
          "Pourquoi un logiciel de gestion pharmaceutique ?",
          "Fonctionnalites principales",
          "Gestion des stocks intelligente",
          "Dispensation et ordonnances",
          "Tiers payant et mutuelles",
          "Tarification et formules",
          "Formation et deploiement",
          "Comment demarrer"
        ]
      },

      section1: {
        title: "Pourquoi Votre Pharmacie a Besoin d'un Logiciel de Gestion ?",
        paragraphs: [
          "Les pharmacies modernes font face a des defis complexes : gestion de milliers de references, suivi des dates de peremption, gestion du tiers payant, et conformite avec les reglementations du ministere de la Sante. Un logiciel adapte est devenu indispensable.",
          "Sans outil performant, les pertes liees aux medicaments perimes, les erreurs de stock, et le temps passe en taches administratives impactent directement la rentabilite de votre officine. Notre solution automatise ces processus critiques.",
          "Concu specifiquement pour le marche algerien, notre logiciel integre la nomenclature nationale des medicaments, les tarifs conventionnes, et les procedures de remboursement CNAS/CASNOS."
        ],
        stats: [
          { value: "-80%", label: "Pertes peremption" },
          { value: "+35%", label: "Rotation stock" },
          { value: "-60%", label: "Temps de caisse" },
          { value: "100%", label: "Traçabilite" }
        ]
      },

      section2: {
        title: "Fonctionnalites Principales du Logiciel",
        features: [
          {
            title: "Gestion des Stocks",
            description: "Suivi en temps reel de votre inventaire avec alertes intelligentes.",
            items: ["Stock en temps reel", "Alertes stock minimum", "Alertes peremption", "Historique mouvements"],
            icon: Package
          },
          {
            title: "Point de Vente (POS)",
            description: "Caisse rapide et intuitive avec lecteur code-barres.",
            items: ["Scan code-barres", "Multi-modes paiement", "Ticket personnalise", "Gestion des retours"],
            icon: QrCode
          },
          {
            title: "Ordonnances",
            description: "Saisie et dispensation des ordonnances avec controle des interactions.",
            items: ["Saisie ordonnance", "Verification interactions", "Substitution generiques", "Historique patient"],
            icon: FileText
          },
          {
            title: "Tiers Payant",
            description: "Gestion complete du tiers payant CNAS, CASNOS et mutuelles.",
            items: ["CNAS / CASNOS", "Mutuelles privees", "Bordereaux automatiques", "Suivi remboursements"],
            icon: CreditCard
          },
          {
            title: "Commandes Fournisseurs",
            description: "Optimisation des commandes et suivi des livraisons.",
            items: ["Commande automatique", "Multi-fournisseurs", "Reception et controle", "Historique prix"],
            icon: Truck
          },
          {
            title: "Rapports et Statistiques",
            description: "Tableaux de bord pour piloter votre activite.",
            items: ["Ventes par periode", "Marge par produit", "Produits les plus vendus", "Analyse fournisseurs"],
            icon: BarChart3
          }
        ]
      },

      section3: {
        title: "Gestion des Stocks Intelligente",
        intro: "Notre systeme de gestion des stocks est concu pour minimiser les pertes et optimiser votre tresorerie :",
        adaptations: [
          {
            title: "Alertes Peremption",
            description: "Notifications automatiques 6, 3 et 1 mois avant expiration pour action preventive."
          },
          {
            title: "Seuils de Reapprovisionnement",
            description: "Alertes automatiques quand le stock atteint le seuil minimum defini."
          },
          {
            title: "Analyse Rotation",
            description: "Identification des produits a faible rotation pour ajuster vos commandes."
          },
          {
            title: "Inventaire Simplifie",
            description: "Inventaire par scanner, partiel ou complet, avec ecarts automatiques."
          },
          {
            title: "Multi-emplacements",
            description: "Gestion de plusieurs zones de stockage (reserve, frigo, comptoir)."
          },
          {
            title: "Traçabilite Lots",
            description: "Suivi complet par numero de lot pour les rappels produits."
          }
        ]
      },

      section4: {
        title: "Types de Produits Geres",
        sectors: [
          {
            name: "Medicaments",
            description: "Gestion complete des specialites pharmaceutiques avec DCI, dosages et formes.",
            benefits: ["Base nationale actualisee", "Generiques/Princeps", "Tableau des stupefiants"]
          },
          {
            name: "Parapharmacie",
            description: "Cosmetiques, hygiene, nutrition et produits de bien-etre.",
            benefits: ["Codes-barres EAN", "Marges libres", "Promotions"]
          },
          {
            name: "Dispositifs Medicaux",
            description: "Materiel medical, orthopedique et aides techniques.",
            benefits: ["Tarifs LPP", "Location materiel", "SAV suivi"]
          },
          {
            name: "Preparations Magistrales",
            description: "Gestion des matieres premieres et formules de preparation.",
            benefits: ["Stock matieres premieres", "Fiche de preparation", "Prix de revient"]
          },
          {
            name: "Veterinaire",
            description: "Medicaments et produits pour animaux si activite mixte.",
            benefits: ["Stock separe", "Ordonnances veto", "Traçabilite"]
          }
        ]
      },

      section5: {
        title: "Integration Tiers Payant Algerie",
        intro: "Notre logiciel gere nativement les organismes de remboursement algeriens :",
        integrations: [
          { name: "CNAS", tools: ["Bordereaux", "Teleprocedures", "Suivi"], description: "Caisse Nationale des Assurances Sociales" },
          { name: "CASNOS", tools: ["Bordereaux", "Suivi paiements", "Relances"], description: "Caisse des Non-Salaries" },
          { name: "Mutuelles", tools: ["Conventions", "Teletransmission", "Rapprochement"], description: "MGFA, CNMA, mutuelles privees" },
          { name: "Accidents Travail", tools: ["AT/MP", "Facturation", "Suivi"], description: "Prise en charge accidents du travail" }
        ]
      },

      section6: {
        title: "Tarification Adaptee aux Pharmacies",
        intro: "Des formules conçues pour les officines algeriennes :",
        plans: [
          {
            name: "Officine",
            price: "19,900 DA",
            period: "/mois",
            users: "2 postes",
            features: ["Stock illimite", "POS + code-barres", "Ordonnances", "Tiers payant CNAS", "Alertes peremption", "Support email"]
          },
          {
            name: "Officine Plus",
            price: "34,900 DA",
            period: "/mois",
            users: "5 postes",
            features: ["Tout Officine +", "Multi-postes", "Toutes mutuelles", "Statistiques avancees", "Commandes auto", "Support prioritaire"]
          },
          {
            name: "Groupe",
            price: "Sur devis",
            period: "",
            users: "Multi-pharmacies",
            features: ["Tout Officine Plus +", "Multi-sites", "Consolidation stocks", "Transferts inter-officines", "API fournisseurs", "Support dedie"]
          }
        ]
      },

      section7: {
        title: "Deploiement et Formation",
        phases: [
          {
            title: "1. Audit de l'Officine",
            description: "Analyse de votre organisation actuelle, volume de stock, et besoins specifiques."
          },
          {
            title: "2. Installation",
            description: "Installation du logiciel et configuration des postes, imprimantes et lecteurs."
          },
          {
            title: "3. Import du Stock",
            description: "Migration de votre stock existant avec historique et seuils d'alerte."
          },
          {
            title: "4. Formation Equipe",
            description: "Formation pratique de tous les collaborateurs : pharmaciens et preparateurs."
          },
          {
            title: "5. Accompagnement",
            description: "Support pendant les premieres semaines et optimisation continue."
          }
        ]
      },

      wilayas: {
        title: "Nous Equipons les Pharmacies dans Toute l'Algerie",
        list: ["Alger", "Oran", "Constantine", "Annaba", "Setif", "Blida", "Batna", "Tlemcen", "Bejaia", "Djelfa"]
      },

      cta: {
        title: "Optimisez la Gestion de Votre Pharmacie",
        description: "Demandez une demonstration gratuite de notre logiciel de gestion pharmaceutique. Nos consultants vous montreront comment gagner du temps et reduire les pertes.",
        button: "Demander une Demo Gratuite",
        phone: "+213 549 575 512",
        email: "contact@symloop.com"
      },

      backToBlog: "Retour au Blog"
    },
    en: {
      title: "Pharmacy Management Software in Algeria",
      subtitle: "Complete Solution for Pharmacies: Inventory, Sales, Prescriptions and Compliance",
      metaTitle: "Pharmacy Management Software Algeria 2026 | Inventory | Symloop",
      metaDesc: "Pharmacy management software in Algeria. Inventory management, sales, prescriptions, expiry alerts, insurance claims. Compliant with regulations. Free demo.",
      date: "January 10, 2026",
      readTime: "13 min",
      author: "Symloop Team",
      category: "Pharmacy Software",

      intro: "Managing a pharmacy in Algeria requires precision and compliance. Our pharmaceutical management software is designed for Algerian pharmacies: inventory management with expiry alerts, prescription dispensing, CNAS/CASNOS insurance claims, and complete traceability. A solution that saves you time while ensuring regulatory compliance.",

      tableOfContents: {
        title: "In this article",
        items: [
          "Why pharmaceutical management software?",
          "Main features",
          "Smart inventory management",
          "Dispensing and prescriptions",
          "Insurance and claims",
          "Pricing and plans",
          "Training and deployment",
          "How to get started"
        ]
      },

      section1: {
        title: "Why Your Pharmacy Needs Management Software?",
        paragraphs: [
          "Modern pharmacies face complex challenges: managing thousands of products, tracking expiry dates, handling insurance claims, and complying with Ministry of Health regulations. Adapted software has become essential.",
          "Without efficient tools, losses from expired medications, inventory errors, and time spent on administrative tasks directly impact your pharmacy's profitability. Our solution automates these critical processes.",
          "Designed specifically for the Algerian market, our software integrates the national medication nomenclature, agreed rates, and CNAS/CASNOS reimbursement procedures."
        ],
        stats: [
          { value: "-80%", label: "Expiry losses" },
          { value: "+35%", label: "Stock rotation" },
          { value: "-60%", label: "Checkout time" },
          { value: "100%", label: "Traceability" }
        ]
      },

      section2: {
        title: "Main Software Features",
        features: [
          {
            title: "Inventory Management",
            description: "Real-time tracking of your inventory with smart alerts.",
            items: ["Real-time stock", "Minimum stock alerts", "Expiry alerts", "Movement history"],
            icon: Package
          },
          {
            title: "Point of Sale (POS)",
            description: "Fast and intuitive checkout with barcode reader.",
            items: ["Barcode scanning", "Multi-payment modes", "Custom receipt", "Returns management"],
            icon: QrCode
          },
          {
            title: "Prescriptions",
            description: "Prescription entry and dispensing with interaction control.",
            items: ["Prescription entry", "Interaction check", "Generic substitution", "Patient history"],
            icon: FileText
          },
          {
            title: "Insurance Claims",
            description: "Complete management of CNAS, CASNOS and insurance claims.",
            items: ["CNAS / CASNOS", "Private insurances", "Automatic claims", "Reimbursement tracking"],
            icon: CreditCard
          },
          {
            title: "Supplier Orders",
            description: "Order optimization and delivery tracking.",
            items: ["Auto ordering", "Multi-suppliers", "Receipt and control", "Price history"],
            icon: Truck
          },
          {
            title: "Reports and Statistics",
            description: "Dashboards to manage your business.",
            items: ["Sales by period", "Margin by product", "Best sellers", "Supplier analysis"],
            icon: BarChart3
          }
        ]
      },

      section3: {
        title: "Smart Inventory Management",
        intro: "Our inventory management system is designed to minimize losses and optimize your cash flow:",
        adaptations: [
          {
            title: "Expiry Alerts",
            description: "Automatic notifications 6, 3 and 1 month before expiration for preventive action."
          },
          {
            title: "Reorder Thresholds",
            description: "Automatic alerts when stock reaches the defined minimum threshold."
          },
          {
            title: "Rotation Analysis",
            description: "Identification of slow-moving products to adjust your orders."
          },
          {
            title: "Simplified Inventory",
            description: "Scanner inventory, partial or complete, with automatic discrepancies."
          },
          {
            title: "Multi-location",
            description: "Management of multiple storage areas (reserve, fridge, counter)."
          },
          {
            title: "Batch Traceability",
            description: "Complete tracking by batch number for product recalls."
          }
        ]
      },

      section4: {
        title: "Types of Products Managed",
        sectors: [
          {
            name: "Medications",
            description: "Complete management of pharmaceutical specialties with INN, dosages and forms.",
            benefits: ["Updated national database", "Generics/Branded", "Controlled substances"]
          },
          {
            name: "Parapharmacy",
            description: "Cosmetics, hygiene, nutrition and wellness products.",
            benefits: ["EAN barcodes", "Free margins", "Promotions"]
          },
          {
            name: "Medical Devices",
            description: "Medical equipment, orthopedic and technical aids.",
            benefits: ["Regulated prices", "Equipment rental", "After-sales tracking"]
          },
          {
            name: "Compounded Preparations",
            description: "Management of raw materials and preparation formulas.",
            benefits: ["Raw material stock", "Preparation form", "Cost price"]
          },
          {
            name: "Veterinary",
            description: "Medications and products for animals if mixed activity.",
            benefits: ["Separate stock", "Vet prescriptions", "Traceability"]
          }
        ]
      },

      section5: {
        title: "Algeria Insurance Integration",
        intro: "Our software natively manages Algerian reimbursement organizations:",
        integrations: [
          { name: "CNAS", tools: ["Claims", "Telematics", "Tracking"], description: "National Social Insurance Fund" },
          { name: "CASNOS", tools: ["Claims", "Payment tracking", "Reminders"], description: "Self-Employed Insurance Fund" },
          { name: "Insurances", tools: ["Agreements", "Electronic submission", "Reconciliation"], description: "MGFA, CNMA, private insurances" },
          { name: "Work Accidents", tools: ["AT/MP", "Billing", "Tracking"], description: "Work accident coverage" }
        ]
      },

      section6: {
        title: "Pharmacy-Adapted Pricing",
        intro: "Plans designed for Algerian pharmacies:",
        plans: [
          {
            name: "Pharmacy",
            price: "19,900 DA",
            period: "/month",
            users: "2 workstations",
            features: ["Unlimited stock", "POS + barcode", "Prescriptions", "CNAS claims", "Expiry alerts", "Email support"]
          },
          {
            name: "Pharmacy Plus",
            price: "34,900 DA",
            period: "/month",
            users: "5 workstations",
            features: ["Everything in Pharmacy +", "Multi-workstation", "All insurances", "Advanced statistics", "Auto orders", "Priority support"]
          },
          {
            name: "Group",
            price: "Custom quote",
            period: "",
            users: "Multi-pharmacy",
            features: ["Everything in Plus +", "Multi-site", "Stock consolidation", "Inter-pharmacy transfers", "Supplier API", "Dedicated support"]
          }
        ]
      },

      section7: {
        title: "Deployment and Training",
        phases: [
          {
            title: "1. Pharmacy Audit",
            description: "Analysis of your current organization, stock volume, and specific needs."
          },
          {
            title: "2. Installation",
            description: "Software installation and configuration of workstations, printers and scanners."
          },
          {
            title: "3. Stock Import",
            description: "Migration of your existing stock with history and alert thresholds."
          },
          {
            title: "4. Team Training",
            description: "Practical training for all staff: pharmacists and technicians."
          },
          {
            title: "5. Support",
            description: "Support during the first weeks and continuous optimization."
          }
        ]
      },

      wilayas: {
        title: "We Equip Pharmacies Across Algeria",
        list: ["Algiers", "Oran", "Constantine", "Annaba", "Setif", "Blida", "Batna", "Tlemcen", "Bejaia", "Djelfa"]
      },

      cta: {
        title: "Optimize Your Pharmacy Management",
        description: "Request a free demo of our pharmaceutical management software. Our consultants will show you how to save time and reduce losses.",
        button: "Request a Free Demo",
        phone: "+213 549 575 512",
        email: "contact@symloop.com"
      },

      backToBlog: "Back to Blog"
    },
    ar: {
      title: "برنامج إدارة الصيدليات في الجزائر",
      subtitle: "حل شامل للصيدليات: المخزون، المبيعات، الوصفات والامتثال",
      metaTitle: "برنامج صيدلية إدارة المخزون الجزائر 2026 | Symloop",
      metaDesc: "برنامج إدارة الصيدليات في الجزائر. إدارة المخزون، المبيعات، الوصفات، تنبيهات انتهاء الصلاحية، الطرف الثالث الدافع. متوافق مع اللوائح. عرض مجاني.",
      date: "10 يناير 2026",
      readTime: "13 دقيقة",
      author: "فريق Symloop",
      category: "برنامج صيدلية",

      intro: "تتطلب إدارة صيدلية في الجزائر الدقة والامتثال. برنامج الإدارة الصيدلانية لدينا مصمم للصيدليات الجزائرية: إدارة المخزون مع تنبيهات انتهاء الصلاحية، صرف الوصفات، الطرف الثالث الدافع CNAS/CASNOS، والتتبع الكامل. حل يوفر لك الوقت مع ضمان الامتثال التنظيمي.",

      tableOfContents: {
        title: "في هذا المقال",
        items: [
          "لماذا برنامج إدارة صيدلانية؟",
          "الميزات الرئيسية",
          "إدارة المخزون الذكية",
          "الصرف والوصفات",
          "الطرف الثالث الدافع والتأمين",
          "التسعير والخطط",
          "التدريب والنشر",
          "كيف تبدأ"
        ]
      },

      section1: {
        title: "لماذا تحتاج صيدليتك إلى برنامج إدارة؟",
        paragraphs: [
          "تواجه الصيدليات الحديثة تحديات معقدة: إدارة آلاف المراجع، تتبع تواريخ انتهاء الصلاحية، إدارة الطرف الثالث الدافع، والامتثال لأنظمة وزارة الصحة. أصبح البرنامج المناسب ضروريًا.",
          "بدون أداة فعالة، تؤثر الخسائر المتعلقة بالأدوية منتهية الصلاحية وأخطاء المخزون والوقت المستغرق في المهام الإدارية مباشرة على ربحية صيدليتك. حلنا يؤتمت هذه العمليات الحرجة.",
          "مصمم خصيصًا للسوق الجزائري، يدمج برنامجنا نظام تسمية الأدوية الوطني، والأسعار المتفق عليها، وإجراءات التعويض CNAS/CASNOS."
        ],
        stats: [
          { value: "-80%", label: "خسائر انتهاء الصلاحية" },
          { value: "+35%", label: "دوران المخزون" },
          { value: "-60%", label: "وقت الصندوق" },
          { value: "100%", label: "التتبع" }
        ]
      },

      section2: {
        title: "الميزات الرئيسية للبرنامج",
        features: [
          {
            title: "إدارة المخزون",
            description: "تتبع في الوقت الفعلي لمخزونك مع تنبيهات ذكية.",
            items: ["مخزون في الوقت الفعلي", "تنبيهات الحد الأدنى", "تنبيهات انتهاء الصلاحية", "سجل الحركات"],
            icon: Package
          },
          {
            title: "نقطة البيع (POS)",
            description: "صندوق سريع وبديهي مع قارئ الباركود.",
            items: ["مسح الباركود", "طرق دفع متعددة", "إيصال مخصص", "إدارة المرتجعات"],
            icon: QrCode
          },
          {
            title: "الوصفات الطبية",
            description: "إدخال وصرف الوصفات مع مراقبة التفاعلات.",
            items: ["إدخال الوصفة", "فحص التفاعلات", "استبدال بالبدائل", "سجل المريض"],
            icon: FileText
          },
          {
            title: "الطرف الثالث الدافع",
            description: "إدارة كاملة للطرف الثالث CNAS وCASNOS والتأمينات.",
            items: ["CNAS / CASNOS", "التأمينات الخاصة", "كشوف تلقائية", "تتبع التعويضات"],
            icon: CreditCard
          },
          {
            title: "طلبات الموردين",
            description: "تحسين الطلبات ومتابعة التسليمات.",
            items: ["طلب تلقائي", "موردين متعددين", "الاستلام والمراقبة", "سجل الأسعار"],
            icon: Truck
          },
          {
            title: "التقارير والإحصائيات",
            description: "لوحات معلومات لإدارة نشاطك.",
            items: ["المبيعات حسب الفترة", "الهامش حسب المنتج", "الأكثر مبيعًا", "تحليل الموردين"],
            icon: BarChart3
          }
        ]
      },

      section3: {
        title: "إدارة المخزون الذكية",
        intro: "تم تصميم نظام إدارة المخزون لدينا لتقليل الخسائر وتحسين التدفق النقدي:",
        adaptations: [
          {
            title: "تنبيهات انتهاء الصلاحية",
            description: "إشعارات تلقائية 6 و3 وشهر واحد قبل انتهاء الصلاحية للعمل الوقائي."
          },
          {
            title: "حدود إعادة الطلب",
            description: "تنبيهات تلقائية عندما يصل المخزون إلى الحد الأدنى المحدد."
          },
          {
            title: "تحليل الدوران",
            description: "تحديد المنتجات بطيئة الحركة لضبط طلباتك."
          },
          {
            title: "جرد مبسط",
            description: "جرد بالماسح، جزئي أو كامل، مع فروقات تلقائية."
          },
          {
            title: "مواقع متعددة",
            description: "إدارة عدة مناطق تخزين (المخزن، الثلاجة، المنضدة)."
          },
          {
            title: "تتبع الدفعات",
            description: "تتبع كامل برقم الدفعة لسحب المنتجات."
          }
        ]
      },

      section4: {
        title: "أنواع المنتجات المُدارة",
        sectors: [
          {
            name: "الأدوية",
            description: "إدارة كاملة للتخصصات الصيدلانية مع DCI والجرعات والأشكال.",
            benefits: ["قاعدة وطنية محدثة", "بدائل/أصلية", "جدول المخدرات"]
          },
          {
            name: "شبه الصيدلة",
            description: "مستحضرات التجميل والنظافة والتغذية ومنتجات العافية.",
            benefits: ["باركود EAN", "هوامش حرة", "العروض الترويجية"]
          },
          {
            name: "الأجهزة الطبية",
            description: "المعدات الطبية وأجهزة تقويم العظام والمساعدات التقنية.",
            benefits: ["أسعار منظمة", "تأجير المعدات", "متابعة ما بعد البيع"]
          },
          {
            name: "التحضيرات المركبة",
            description: "إدارة المواد الأولية وصيغ التحضير.",
            benefits: ["مخزون المواد الأولية", "بطاقة التحضير", "سعر التكلفة"]
          },
          {
            name: "البيطري",
            description: "الأدوية ومنتجات الحيوانات إذا كان النشاط مختلطًا.",
            benefits: ["مخزون منفصل", "وصفات بيطرية", "التتبع"]
          }
        ]
      },

      section5: {
        title: "تكامل التأمين في الجزائر",
        intro: "برنامجنا يدير أصلاً منظمات التعويض الجزائرية:",
        integrations: [
          { name: "CNAS", tools: ["الكشوف", "الإجراءات عن بُعد", "التتبع"], description: "الصندوق الوطني للتأمينات الاجتماعية" },
          { name: "CASNOS", tools: ["الكشوف", "تتبع المدفوعات", "التذكيرات"], description: "صندوق غير الأجراء" },
          { name: "التأمينات", tools: ["الاتفاقيات", "الإرسال الإلكتروني", "المطابقة"], description: "MGFA، CNMA، تأمينات خاصة" },
          { name: "حوادث العمل", tools: ["AT/MP", "الفوترة", "التتبع"], description: "تغطية حوادث العمل" }
        ]
      },

      section6: {
        title: "تسعير مناسب للصيدليات",
        intro: "خطط مصممة للصيدليات الجزائرية:",
        plans: [
          {
            name: "صيدلية",
            price: "19,900 دج",
            period: "/شهر",
            users: "نقطتين عمل",
            features: ["مخزون غير محدود", "نقطة بيع + باركود", "وصفات", "طرف ثالث CNAS", "تنبيهات انتهاء الصلاحية", "دعم بالبريد"]
          },
          {
            name: "صيدلية بلس",
            price: "34,900 دج",
            period: "/شهر",
            users: "5 نقاط عمل",
            features: ["كل ميزات الصيدلية +", "نقاط متعددة", "جميع التأمينات", "إحصائيات متقدمة", "طلبات تلقائية", "دعم ذو أولوية"]
          },
          {
            name: "مجموعة",
            price: "عرض مخصص",
            period: "",
            users: "صيدليات متعددة",
            features: ["كل ميزات بلس +", "مواقع متعددة", "توحيد المخزون", "تحويلات بين الصيدليات", "API موردين", "دعم مخصص"]
          }
        ]
      },

      section7: {
        title: "النشر والتدريب",
        phases: [
          {
            title: "1. تدقيق الصيدلية",
            description: "تحليل تنظيمك الحالي وحجم المخزون واحتياجاتك الخاصة."
          },
          {
            title: "2. التثبيت",
            description: "تثبيت البرنامج وتكوين نقاط العمل والطابعات والماسحات."
          },
          {
            title: "3. استيراد المخزون",
            description: "ترحيل مخزونك الحالي مع السجل وحدود التنبيه."
          },
          {
            title: "4. تدريب الفريق",
            description: "تدريب عملي لجميع الموظفين: صيادلة ومساعدين."
          },
          {
            title: "5. الدعم",
            description: "دعم خلال الأسابيع الأولى وتحسين مستمر."
          }
        ]
      },

      wilayas: {
        title: "نجهز الصيدليات في جميع أنحاء الجزائر",
        list: ["الجزائر", "وهران", "قسنطينة", "عنابة", "سطيف", "البليدة", "باتنة", "تلمسان", "بجاية", "الجلفة"]
      },

      cta: {
        title: "حسّن إدارة صيدليتك",
        description: "اطلب عرضًا مجانيًا لبرنامج الإدارة الصيدلانية. سيوضح لك مستشارونا كيفية توفير الوقت وتقليل الخسائر.",
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
        <meta name="keywords" content="logiciel pharmacie algerie, gestion stock pharmacie, logiciel officine, tiers payant CNAS, gestion medicaments, caisse pharmacie algerie" />
        <link rel="canonical" href={`https://symloop.com/${locale === 'fr' ? '' : locale + '/'}blog/logiciel-pharmacie-gestion-stock-algerie-2026`} />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDesc} />
        <meta property="og:type" content="article" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quel est le meilleur logiciel de gestion pour pharmacie en Alg\u00e9rie ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le meilleur logiciel de gestion pour pharmacie en Alg\u00e9rie doit int\u00e9grer la nomenclature nationale des m\u00e9dicaments, le tiers payant CNAS/CASNOS, et les alertes de p\u00e9remption. Symloop propose une solution compl\u00e8te con\u00e7ue sp\u00e9cifiquement pour les officines alg\u00e9riennes, avec interface fran\u00e7ais/arabe et support local bas\u00e9 \u00e0 S\u00e9tif."
                }
              },
              {
                "@type": "Question",
                "name": "Combien co\u00fbte un logiciel de gestion de pharmacie en Alg\u00e9rie ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Les tarifs varient selon la formule choisie. Chez Symloop, la formule Officine d\u00e9marre \u00e0 19 900 DA/mois pour 2 postes (stock illimit\u00e9, POS, ordonnances, tiers payant CNAS). La formule Officine Plus \u00e0 34 900 DA/mois inclut 5 postes et toutes les mutuelles. Un devis sur mesure est disponible pour les groupes multi-pharmacies."
                }
              },
              {
                "@type": "Question",
                "name": "Comment g\u00e9rer le stock et les p\u00e9remptions dans une pharmacie en Alg\u00e9rie ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Un logiciel de gestion pharmaceutique comme celui de Symloop automatise le suivi des stocks avec des alertes de p\u00e9remption \u00e0 6, 3 et 1 mois avant expiration. Il g\u00e8re \u00e9galement les seuils de r\u00e9approvisionnement, l\u2019analyse de rotation des produits, la tra\u00e7abilit\u00e9 par lot et l\u2019inventaire par scanner. R\u00e9sultat : -80% de pertes li\u00e9es aux p\u00e9remptions."
                }
              },
              {
                "@type": "Question",
                "name": "Que propose Symloop comme solution pour les pharmacies alg\u00e9riennes ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Symloop d\u00e9veloppe un logiciel de gestion complet pour pharmacies en Alg\u00e9rie : gestion des stocks avec alertes p\u00e9remption, point de vente avec code-barres, dispensation d\u2019ordonnances, tiers payant CNAS/CASNOS/mutuelles, commandes fournisseurs et statistiques. L\u2019\u00e9quipe assure l\u2019installation, la formation et le support continu. Contact : +213 549 575 512."
                }
              },
              {
                "@type": "Question",
                "name": "Le logiciel Symloop est-il conforme \u00e0 la r\u00e9glementation pharmaceutique alg\u00e9rienne ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui. Le logiciel Symloop est con\u00e7u sp\u00e9cifiquement pour le march\u00e9 alg\u00e9rien. Il int\u00e8gre la nomenclature nationale des m\u00e9dicaments, les tarifs conventionn\u00e9s, les proc\u00e9dures de remboursement CNAS/CASNOS, le tableau des stup\u00e9fiants, et assure une tra\u00e7abilit\u00e9 compl\u00e8te conforme aux exigences du minist\u00e8re de la Sant\u00e9."
                }
              }
            ]
          })}}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com/" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" },
              { "@type": "ListItem", "position": 3, "name": "Logiciel Pharmacie Gestion Stock Alg\u00e9rie 2026", "item": "https://symloop.com/blog/logiciel-pharmacie-gestion-stock-algerie-2026" }
            ]
          })}}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Logiciel Pharmacie Gestion Stock Alg\u00e9rie 2026 | Symloop",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", ".en-bref-block", "article h2"]
            },
            "url": "https://symloop.com/blog/logiciel-pharmacie-gestion-stock-algerie-2026"
          })}}
        />
      </Head>

      <main className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-black to-teal-500/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {t.backToBlog}
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
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

        {/* En bref — summary block for LLM / featured snippet / speakable */}
        <section className="max-w-4xl mx-auto px-6 -mt-6 mb-8 relative z-10">
          <div className="en-bref-block bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-emerald-400" />
              <h2 className="text-lg font-bold text-emerald-400">{isRTL ? '\u0628\u0627\u062E\u062A\u0635\u0627\u0631' : locale === 'en' ? 'In brief' : 'En bref'}</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {isRTL
                ? 'Symloop \u062A\u0637\u0648\u0631 \u0628\u0631\u0627\u0645\u062C \u0625\u062F\u0627\u0631\u0629 \u0644\u0644\u0635\u064A\u062F\u0644\u064A\u0627\u062A \u0641\u064A \u0627\u0644\u062C\u0632\u0627\u0626\u0631. \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062E\u0632\u0648\u0646\u060C \u062A\u0646\u0628\u064A\u0647 \u0627\u0646\u062A\u0647\u0627\u0621 \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0629\u060C \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A\u060C \u0627\u0644\u0645\u0648\u0631\u062F\u0648\u0646\u060C \u0627\u0644\u0648\u0635\u0641\u0627\u062A. \u0645\u062A\u0648\u0627\u0641\u0642 \u0645\u0639 \u0627\u0644\u062A\u0646\u0638\u064A\u0645 \u0627\u0644\u0635\u064A\u062F\u0644\u0627\u0646\u064A \u0627\u0644\u062C\u0632\u0627\u0626\u0631\u064A. \u0648\u0627\u062C\u0647\u0629 FR/AR. \u0645\u0642\u0631\u0646\u0627 \u0641\u064A \u0633\u0637\u064A\u0641. \u0627\u062A\u0635\u0644: +213 549 575 512.'
                : locale === 'en'
                ? 'Symloop develops management software for pharmacies in Algeria. Stock management, expiry alerts, sales, suppliers, prescriptions. Compliant with Algerian pharmaceutical regulations. FR/AR interface. Based in Setif. Contact: +213 549 575 512.'
                : 'Symloop d\u00e9veloppe des logiciels de gestion pour pharmacies en Alg\u00e9rie. Gestion des stocks, alerte p\u00e9remption, ventes, fournisseurs, ordonnances. Conforme \u00e0 la r\u00e9glementation pharmaceutique alg\u00e9rienne. Interface FR/AR. Bas\u00e9 \u00e0 S\u00e9tif. Contact\u00a0: +213 549 575 512.'}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-xl text-gray-300 leading-relaxed mb-16">{t.intro}</p>

            {/* TOC */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-16">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Layers className="w-5 h-5 text-emerald-400" />
                {t.tableOfContents.title}
              </h2>
              <ul className="space-y-3">
                {t.tableOfContents.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <span className="w-6 h-6 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-xs font-bold">{index + 1}</span>
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
                    <div className="text-2xl font-bold text-emerald-400">{stat.value}</div>
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
                      <div className="p-2 bg-emerald-500/20 rounded-lg"><f.icon className="w-5 h-5 text-emerald-400" /></div>
                      <h3 className="font-bold">{f.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{f.description}</p>
                    <ul className="space-y-1">
                      {f.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-emerald-400" />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3 - Stock Management */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4">{t.section3.title}</h2>
              <p className="text-gray-300 mb-6">{t.section3.intro}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {t.section3.adaptations.map((a, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="font-bold mb-1 text-emerald-400">{a.title}</h3>
                    <p className="text-sm text-gray-400">{a.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4 - Products */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">{t.section4.title}</h2>
              <div className="space-y-4">
                {t.section4.sectors.map((s, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold mb-2">{s.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{s.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.benefits.map((b, j) => (
                        <span key={j} className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs">{b}</span>
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
                        <span key={j} className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded text-xs">{tool}</span>
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
                  <div key={i} className={`bg-white/5 border rounded-xl p-6 ${i === 1 ? 'border-emerald-500/50 ring-1 ring-emerald-500/20' : 'border-white/10'}`}>
                    <h3 className="font-bold text-xl mb-2">{p.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-emerald-400">{p.price}</span>
                      <span className="text-gray-400">{p.period}</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">{p.users}</p>
                    <ul className="space-y-2">
                      {p.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />{f}
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
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-400 font-bold">{i + 1}</span>
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

            {/* Articles associes - Cross-links */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">{isRTL ? '\u0645\u0642\u0627\u0644\u0627\u062A \u0630\u0627\u062A \u0635\u0644\u0629' : locale === 'en' ? 'Related Articles' : 'Articles associes'}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/erp-sur-mesure-saas-startup-pme-algerie-2026" className="group bg-white/5 border border-white/10 hover:border-emerald-500/40 rounded-xl p-5 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <Layers className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm text-emerald-400 font-medium">{isRTL ? 'ERP / SaaS' : 'ERP / SaaS'}</span>
                  </div>
                  <h3 className="font-bold group-hover:text-emerald-400 transition-colors">
                    {isRTL ? 'ERP مخصص و SaaS للشركات الناشئة والمؤسسات الصغيرة في الجزائر' : locale === 'en' ? 'Custom ERP & SaaS for Startups and SMEs in Algeria 2026' : 'ERP Sur Mesure & SaaS pour Startups et PME en Algerie 2026'}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {isRTL ? 'حلول برمجية مخصصة لتحسين إدارة أعمالك' : locale === 'en' ? 'Custom software solutions to optimize your business management' : 'Solutions logicielles sur mesure pour optimiser la gestion de votre entreprise'}
                  </p>
                </Link>
                <Link href="/blog/solutions-informatiques-algerie-2026" className="group bg-white/5 border border-white/10 hover:border-emerald-500/40 rounded-xl p-5 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm text-emerald-400 font-medium">{isRTL ? 'حلول تقنية' : locale === 'en' ? 'IT Solutions' : 'Solutions IT'}</span>
                  </div>
                  <h3 className="font-bold group-hover:text-emerald-400 transition-colors">
                    {isRTL ? 'حلول تكنولوجيا المعلومات في الجزائر 2026' : locale === 'en' ? 'IT Solutions in Algeria 2026' : 'Solutions Informatiques en Algerie 2026'}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {isRTL ? 'دليل شامل للحلول التقنية للشركات الجزائرية' : locale === 'en' ? 'Comprehensive guide to IT solutions for Algerian businesses' : 'Guide complet des solutions informatiques pour les entreprises algeriennes'}
                  </p>
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-emerald-500/20 border border-emerald-500/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">{t.cta.title}</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">{t.cta.description}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={`tel:${t.cta.phone}`} className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors">
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
