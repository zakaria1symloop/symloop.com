import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Settings,
  BarChart3,
  FileText,
  Users,
  DollarSign,
  ClipboardList,
  Building2,
  Truck,
  ShoppingBag,
  Wrench,
  Calendar,
  Cloud,
  MapPin,
  Phone,
  Mail,
  CheckCircle
} from 'lucide-react';

const content = {
  fr: {
    meta: {
      title: "Logiciel de Gestion Sétif | ERP, Facturation, Stock, Comptabilité | Symloop 2026",
      description: "Logiciel de gestion sur mesure à Sétif. Solutions ERP, facturation, gestion stock, comptabilité, RH. Adapté aux entreprises algériennes. Devis gratuit. +7 ans d'expérience.",
      keywords: "logiciel gestion sétif, erp sétif, logiciel facturation sétif, gestion stock sétif, logiciel comptabilité sétif, logiciel entreprise sétif, progiciel sétif"
    },
    hero: {
      badge: "Solutions de Gestion",
      title: "Logiciel de Gestion",
      titleHighlight: "Sur Mesure à Sétif",
      subtitle: "Digitalisez votre entreprise avec des solutions de gestion adaptées au marché algérien. ERP, facturation, stocks, comptabilité, RH - tout en un.",
      cta1: "Demander une Démo",
      cta2: "Voir Nos Solutions"
    },
    stats: [
      { value: "100+", label: "Entreprises Équipées" },
      { value: "15+", label: "Secteurs Couverts" },
      { value: "99%", label: "Taux de Satisfaction" },
      { value: "24/7", label: "Support Disponible" }
    ],
    solutions: {
      title: "Nos Solutions de Gestion",
      subtitle: "Des outils complets pour chaque aspect de votre entreprise",
      items: [
        {
          icon: "FileText",
          title: "Facturation & Devis",
          description: "Créez factures et devis conformes à la réglementation algérienne. Gestion des clients, relances automatiques, rapports de ventes.",
          features: ["Factures conformes DGI", "Devis en 1 clic", "Relances automatiques", "Multi-devises DA/EUR"]
        },
        {
          icon: "ClipboardList",
          title: "Gestion des Stocks",
          description: "Suivi en temps réel de vos stocks, alertes de seuil, gestion multi-dépôts, inventaire automatisé, traçabilité complète.",
          features: ["Stock temps réel", "Alertes rupture", "Multi-entrepôts", "Code-barres"]
        },
        {
          icon: "DollarSign",
          title: "Comptabilité",
          description: "Plan comptable algérien (PCN), journal des ventes/achats, déclarations fiscales, bilan, compte de résultat.",
          features: ["PCN intégré", "TVA automatique", "Déclarations G50", "Rapports fiscaux"]
        },
        {
          icon: "Users",
          title: "Gestion RH & Paie",
          description: "Gestion des employés, calcul de paie conforme CNAS/CACOBATPH, congés, absences, fiches de paie.",
          features: ["Paie CNAS/CASNOS", "Gestion congés", "Fiches de paie", "Déclarations sociales"]
        },
        {
          icon: "Truck",
          title: "Gestion des Achats",
          description: "Bons de commande, suivi fournisseurs, comparaison des prix, réceptions, contrôle qualité.",
          features: ["Bons de commande", "Suivi fournisseurs", "Comparaison prix", "Réceptions"]
        },
        {
          icon: "BarChart3",
          title: "Tableaux de Bord",
          description: "Indicateurs clés en temps réel, analyses de performance, rapports personnalisables, export Excel/PDF.",
          features: ["KPIs temps réel", "Graphiques", "Export Excel", "Rapports automatiques"]
        }
      ]
    },
    sectors: {
      title: "Secteurs d'Activité",
      subtitle: "Solutions adaptées à chaque métier",
      items: [
        { icon: "ShoppingBag", name: "Commerce & Distribution", description: "Gestion des ventes, caisse, fidélité client" },
        { icon: "Wrench", name: "Industrie & Production", description: "Gestion de production, maintenance, qualité" },
        { icon: "Building2", name: "BTP & Construction", description: "Chantiers, situations, métré, sous-traitance" },
        { icon: "Truck", name: "Transport & Logistique", description: "Flotte, livraisons, tournées, traçabilité" }
      ]
    },
    packages: {
      title: "Formules & Tarifs",
      subtitle: "Choisissez la solution adaptée à votre taille",
      items: [
        {
          name: "Essentiel",
          price: "150,000",
          currency: "DA",
          description: "Pour les petites entreprises",
          features: [
            "Facturation & Devis",
            "Gestion Clients",
            "Stocks de base",
            "1 utilisateur",
            "Formation incluse",
            "3 mois support"
          ],
          popular: false
        },
        {
          name: "Professionnel",
          price: "350,000",
          currency: "DA",
          description: "Pour les PME en croissance",
          features: [
            "Tout de Essentiel",
            "Comptabilité complète",
            "Gestion RH & Paie",
            "5 utilisateurs",
            "Multi-dépôts",
            "6 mois support",
            "Personnalisation"
          ],
          popular: true
        },
        {
          name: "Entreprise",
          price: "Sur devis",
          currency: "",
          description: "Solutions sur mesure",
          features: [
            "Tout de Professionnel",
            "Utilisateurs illimités",
            "Modules sur mesure",
            "Intégrations API",
            "Support prioritaire",
            "SLA garanti",
            "Formation équipe"
          ],
          popular: false
        }
      ]
    },
    features: {
      title: "Avantages de Nos Logiciels",
      items: [
        {
          title: "100% Algérien",
          description: "Conçu pour le marché algérien : plan comptable PCN, déclarations fiscales DGI, calculs CNAS/CASNOS."
        },
        {
          title: "Cloud ou Local",
          description: "Installez sur vos serveurs ou accédez en ligne. Vos données restent en Algérie, sécurisées."
        },
        {
          title: "Multi-Agences",
          description: "Gérez plusieurs points de vente ou agences depuis une interface centralisée."
        },
        {
          title: "Sans Connexion",
          description: "Mode hors ligne disponible. Synchronisation automatique dès que la connexion revient."
        },
        {
          title: "Support Local",
          description: "Équipe basée à Sétif, support en français et arabe, intervention sur site possible."
        },
        {
          title: "Mises à Jour",
          description: "Mises à jour régulières, conformité aux nouvelles réglementations, nouvelles fonctionnalités."
        }
      ]
    },
    process: {
      title: "Notre Approche",
      steps: [
        {
          number: "01",
          title: "Audit Gratuit",
          description: "Analyse de vos processus actuels, identification des besoins, recommandations."
        },
        {
          number: "02",
          title: "Configuration",
          description: "Paramétrage du logiciel selon votre activité, import des données existantes."
        },
        {
          number: "03",
          title: "Formation",
          description: "Formation de votre équipe sur site ou en ligne, documentation complète."
        },
        {
          number: "04",
          title: "Accompagnement",
          description: "Support continu, assistance au démarrage, optimisations selon vos retours."
        }
      ]
    },
    faq: {
      title: "Questions Fréquentes",
      items: [
        {
          question: "Le logiciel est-il conforme à la réglementation algérienne ?",
          answer: "Oui, nos solutions intègrent le plan comptable national (PCN), les déclarations fiscales (G50, IBS, TAP), et les calculs sociaux CNAS/CACOBATPH/CASNOS."
        },
        {
          question: "Puis-je migrer mes données depuis un autre logiciel ?",
          answer: "Oui, nous assurons la migration de vos données depuis Excel, Sage, ou tout autre logiciel. L'import est inclus dans l'installation."
        },
        {
          question: "Le logiciel fonctionne-t-il hors connexion ?",
          answer: "Oui, notre solution dispose d'un mode hors ligne complet. Les données se synchronisent automatiquement quand la connexion revient."
        },
        {
          question: "Combien d'utilisateurs peuvent accéder ?",
          answer: "Selon la formule choisie : 1 utilisateur (Essentiel), 5 utilisateurs (Professionnel), ou illimité (Entreprise)."
        },
        {
          question: "Proposez-vous des formations ?",
          answer: "Oui, la formation est incluse dans tous nos forfaits. Nous formons sur site à Sétif ou en ligne selon vos préférences."
        }
      ]
    },
    coverage: {
      title: "Zone de Service",
      description: "Installation et support sur Sétif et les wilayas environnantes",
      areas: ["Sétif", "El Eulma", "Ain Oulmene", "Bordj Bou Arréridj", "M'Sila", "Batna", "Constantine", "Béjaïa", "Jijel", "Mila"]
    },
    cta: {
      title: "Prêt à Digitaliser Votre Entreprise ?",
      subtitle: "Demandez une démonstration gratuite de nos solutions de gestion.",
      button: "Demander une Démo Gratuite",
      phone: "+213 549 57 55 12",
      email: "contact@symloop.com"
    }
  },
  ar: {
    meta: {
      title: "برنامج إدارة سطيف | ERP، فوترة، مخزون، محاسبة | سيملوب 2026",
      description: "برنامج إدارة مخصص في سطيف. حلول ERP، فوترة، إدارة مخزون، محاسبة، موارد بشرية. مكيف للشركات الجزائرية. عرض أسعار مجاني. +7 سنوات خبرة.",
      keywords: "برنامج إدارة سطيف, erp سطيف, برنامج فوترة سطيف, إدارة مخزون سطيف, برنامج محاسبة سطيف, برنامج شركات سطيف"
    },
    hero: {
      badge: "حلول الإدارة",
      title: "برنامج إدارة",
      titleHighlight: "مخصص في سطيف",
      subtitle: "رقمن شركتك مع حلول إدارة مكيفة للسوق الجزائري. ERP، فوترة، مخزون، محاسبة، موارد بشرية - الكل في واحد.",
      cta1: "طلب عرض توضيحي",
      cta2: "عرض حلولنا"
    },
    stats: [
      { value: "+100", label: "شركة مجهزة" },
      { value: "+15", label: "قطاع مغطى" },
      { value: "99%", label: "معدل الرضا" },
      { value: "24/7", label: "دعم متاح" }
    ],
    solutions: {
      title: "حلول الإدارة لدينا",
      subtitle: "أدوات كاملة لكل جانب من جوانب شركتك",
      items: [
        {
          icon: "FileText",
          title: "الفوترة والعروض",
          description: "إنشاء فواتير وعروض مطابقة للتنظيم الجزائري. إدارة العملاء، تذكيرات آلية، تقارير المبيعات.",
          features: ["فواتير مطابقة DGI", "عروض بنقرة واحدة", "تذكيرات آلية", "متعدد العملات دج/يورو"]
        },
        {
          icon: "ClipboardList",
          title: "إدارة المخزون",
          description: "تتبع فوري للمخزون، تنبيهات الحد الأدنى، إدارة متعددة المستودعات، جرد آلي، تتبع كامل.",
          features: ["مخزون فوري", "تنبيهات النفاد", "متعدد المستودعات", "باركود"]
        },
        {
          icon: "DollarSign",
          title: "المحاسبة",
          description: "المخطط المحاسبي الجزائري (PCN)، يومية المبيعات/المشتريات، التصريحات الضريبية، الميزانية.",
          features: ["PCN مدمج", "TVA آلية", "تصريحات G50", "تقارير ضريبية"]
        },
        {
          icon: "Users",
          title: "إدارة الموارد البشرية والرواتب",
          description: "إدارة الموظفين، حساب الرواتب المطابق لـ CNAS/CACOBATPH، الإجازات، الغيابات، كشوف الرواتب.",
          features: ["رواتب CNAS/CASNOS", "إدارة الإجازات", "كشوف الرواتب", "التصريحات الاجتماعية"]
        },
        {
          icon: "Truck",
          title: "إدارة المشتريات",
          description: "أوامر الشراء، متابعة الموردين، مقارنة الأسعار، الاستلام، مراقبة الجودة.",
          features: ["أوامر الشراء", "متابعة الموردين", "مقارنة الأسعار", "الاستلام"]
        },
        {
          icon: "BarChart3",
          title: "لوحات التحكم",
          description: "مؤشرات رئيسية فورية، تحليلات الأداء، تقارير قابلة للتخصيص، تصدير Excel/PDF.",
          features: ["KPIs فورية", "رسوم بيانية", "تصدير Excel", "تقارير آلية"]
        }
      ]
    },
    sectors: {
      title: "قطاعات النشاط",
      subtitle: "حلول مكيفة لكل مهنة",
      items: [
        { icon: "ShoppingBag", name: "التجارة والتوزيع", description: "إدارة المبيعات، الصندوق، ولاء العملاء" },
        { icon: "Wrench", name: "الصناعة والإنتاج", description: "إدارة الإنتاج، الصيانة، الجودة" },
        { icon: "Building2", name: "البناء والأشغال", description: "الورشات، الوضعيات، القياس، المقاولة الفرعية" },
        { icon: "Truck", name: "النقل واللوجستيك", description: "الأسطول، التوصيل، الجولات، التتبع" }
      ]
    },
    packages: {
      title: "العروض والأسعار",
      subtitle: "اختر الحل المناسب لحجمك",
      items: [
        {
          name: "الأساسي",
          price: "150,000",
          currency: "دج",
          description: "للشركات الصغيرة",
          features: [
            "الفوترة والعروض",
            "إدارة العملاء",
            "مخزون أساسي",
            "مستخدم واحد",
            "تدريب مشمول",
            "3 أشهر دعم"
          ],
          popular: false
        },
        {
          name: "المحترف",
          price: "350,000",
          currency: "دج",
          description: "للمؤسسات المتوسطة",
          features: [
            "كل الأساسي",
            "محاسبة كاملة",
            "إدارة الموارد البشرية والرواتب",
            "5 مستخدمين",
            "متعدد المستودعات",
            "6 أشهر دعم",
            "تخصيص"
          ],
          popular: true
        },
        {
          name: "المؤسسات",
          price: "حسب الطلب",
          currency: "",
          description: "حلول مخصصة",
          features: [
            "كل المحترف",
            "مستخدمين غير محدودين",
            "وحدات مخصصة",
            "تكامل API",
            "دعم أولوي",
            "SLA مضمون",
            "تدريب الفريق"
          ],
          popular: false
        }
      ]
    },
    features: {
      title: "مزايا برامجنا",
      items: [
        {
          title: "100% جزائري",
          description: "مصمم للسوق الجزائري: مخطط محاسبي PCN، تصريحات ضريبية DGI، حسابات CNAS/CASNOS."
        },
        {
          title: "سحابي أو محلي",
          description: "ثبت على خوادمك أو اوصل عبر الإنترنت. بياناتك تبقى في الجزائر، آمنة."
        },
        {
          title: "متعدد الوكالات",
          description: "أدر عدة نقاط بيع أو وكالات من واجهة مركزية."
        },
        {
          title: "بدون اتصال",
          description: "وضع غير متصل متاح. مزامنة آلية عند عودة الاتصال."
        },
        {
          title: "دعم محلي",
          description: "فريق مقره سطيف، دعم بالفرنسية والعربية، تدخل في الموقع ممكن."
        },
        {
          title: "تحديثات",
          description: "تحديثات منتظمة، امتثال للتنظيمات الجديدة، ميزات جديدة."
        }
      ]
    },
    process: {
      title: "نهجنا",
      steps: [
        {
          number: "01",
          title: "تدقيق مجاني",
          description: "تحليل عملياتك الحالية، تحديد الاحتياجات، توصيات."
        },
        {
          number: "02",
          title: "التكوين",
          description: "إعداد البرنامج حسب نشاطك، استيراد البيانات الموجودة."
        },
        {
          number: "03",
          title: "التدريب",
          description: "تدريب فريقك في الموقع أو عبر الإنترنت، وثائق كاملة."
        },
        {
          number: "04",
          title: "المرافقة",
          description: "دعم مستمر، مساعدة في البداية، تحسينات حسب ملاحظاتك."
        }
      ]
    },
    faq: {
      title: "أسئلة شائعة",
      items: [
        {
          question: "هل البرنامج مطابق للتنظيم الجزائري؟",
          answer: "نعم، حلولنا تدمج المخطط المحاسبي الوطني (PCN)، التصريحات الضريبية (G50, IBS, TAP)، والحسابات الاجتماعية CNAS/CACOBATPH/CASNOS."
        },
        {
          question: "هل يمكنني نقل بياناتي من برنامج آخر؟",
          answer: "نعم، نضمن نقل بياناتك من Excel، Sage، أو أي برنامج آخر. الاستيراد مشمول في التثبيت."
        },
        {
          question: "هل يعمل البرنامج بدون اتصال؟",
          answer: "نعم، حلنا يحتوي على وضع غير متصل كامل. البيانات تتزامن آلياً عند عودة الاتصال."
        },
        {
          question: "كم عدد المستخدمين يمكنهم الوصول؟",
          answer: "حسب العرض المختار: مستخدم واحد (الأساسي)، 5 مستخدمين (المحترف)، أو غير محدود (المؤسسات)."
        },
        {
          question: "هل تقدمون تدريبات؟",
          answer: "نعم، التدريب مشمول في جميع عروضنا. ندرب في الموقع بسطيف أو عبر الإنترنت حسب تفضيلاتك."
        }
      ]
    },
    coverage: {
      title: "منطقة الخدمة",
      description: "تثبيت ودعم في سطيف والولايات المجاورة",
      areas: ["سطيف", "العلمة", "عين ولمان", "برج بوعريريج", "المسيلة", "باتنة", "قسنطينة", "بجاية", "جيجل", "ميلة"]
    },
    cta: {
      title: "جاهز لرقمنة شركتك؟",
      subtitle: "اطلب عرضاً توضيحياً مجانياً لحلول الإدارة لدينا.",
      button: "طلب عرض توضيحي مجاني",
      phone: "+213 549 57 55 12",
      email: "contact@symloop.com"
    }
  },
  en: {
    meta: {
      title: "Management Software Setif | ERP, Invoicing, Inventory, Accounting | Symloop 2026",
      description: "Custom management software in Setif. ERP solutions, invoicing, inventory management, accounting, HR. Adapted for Algerian businesses. Free quote. 7+ years experience.",
      keywords: "management software setif, erp setif, invoicing software setif, inventory management setif, accounting software setif, business software setif"
    },
    hero: {
      badge: "Management Solutions",
      title: "Custom Management",
      titleHighlight: "Software in Setif",
      subtitle: "Digitize your business with management solutions adapted to the Algerian market. ERP, invoicing, inventory, accounting, HR - all in one.",
      cta1: "Request a Demo",
      cta2: "View Our Solutions"
    },
    stats: [
      { value: "100+", label: "Businesses Equipped" },
      { value: "15+", label: "Sectors Covered" },
      { value: "99%", label: "Satisfaction Rate" },
      { value: "24/7", label: "Support Available" }
    ],
    solutions: {
      title: "Our Management Solutions",
      subtitle: "Complete tools for every aspect of your business",
      items: [
        {
          icon: "FileText",
          title: "Invoicing & Quotes",
          description: "Create invoices and quotes compliant with Algerian regulations. Customer management, automatic reminders, sales reports.",
          features: ["DGI compliant invoices", "1-click quotes", "Automatic reminders", "Multi-currency DZD/EUR"]
        },
        {
          icon: "ClipboardList",
          title: "Inventory Management",
          description: "Real-time inventory tracking, threshold alerts, multi-warehouse management, automated inventory, complete traceability.",
          features: ["Real-time stock", "Stock-out alerts", "Multi-warehouse", "Barcode"]
        },
        {
          icon: "DollarSign",
          title: "Accounting",
          description: "Algerian chart of accounts (PCN), sales/purchase journals, tax declarations, balance sheet, income statement.",
          features: ["PCN integrated", "Automatic VAT", "G50 declarations", "Tax reports"]
        },
        {
          icon: "Users",
          title: "HR & Payroll Management",
          description: "Employee management, CNAS/CACOBATPH compliant payroll calculation, leaves, absences, pay slips.",
          features: ["CNAS/CASNOS payroll", "Leave management", "Pay slips", "Social declarations"]
        },
        {
          icon: "Truck",
          title: "Purchase Management",
          description: "Purchase orders, supplier tracking, price comparison, receipts, quality control.",
          features: ["Purchase orders", "Supplier tracking", "Price comparison", "Receipts"]
        },
        {
          icon: "BarChart3",
          title: "Dashboards",
          description: "Real-time key indicators, performance analytics, customizable reports, Excel/PDF export.",
          features: ["Real-time KPIs", "Charts", "Excel export", "Automatic reports"]
        }
      ]
    },
    sectors: {
      title: "Business Sectors",
      subtitle: "Solutions adapted to each trade",
      items: [
        { icon: "ShoppingBag", name: "Retail & Distribution", description: "Sales management, POS, customer loyalty" },
        { icon: "Wrench", name: "Industry & Manufacturing", description: "Production management, maintenance, quality" },
        { icon: "Building2", name: "Construction & Building", description: "Projects, progress billing, measurements, subcontracting" },
        { icon: "Truck", name: "Transport & Logistics", description: "Fleet, deliveries, routes, tracking" }
      ]
    },
    packages: {
      title: "Plans & Pricing",
      subtitle: "Choose the solution adapted to your size",
      items: [
        {
          name: "Essential",
          price: "150,000",
          currency: "DZD",
          description: "For small businesses",
          features: [
            "Invoicing & Quotes",
            "Customer Management",
            "Basic Inventory",
            "1 user",
            "Training included",
            "3 months support"
          ],
          popular: false
        },
        {
          name: "Professional",
          price: "350,000",
          currency: "DZD",
          description: "For growing SMEs",
          features: [
            "Everything in Essential",
            "Full Accounting",
            "HR & Payroll Management",
            "5 users",
            "Multi-warehouse",
            "6 months support",
            "Customization"
          ],
          popular: true
        },
        {
          name: "Enterprise",
          price: "Custom quote",
          currency: "",
          description: "Custom solutions",
          features: [
            "Everything in Professional",
            "Unlimited users",
            "Custom modules",
            "API integrations",
            "Priority support",
            "Guaranteed SLA",
            "Team training"
          ],
          popular: false
        }
      ]
    },
    features: {
      title: "Advantages of Our Software",
      items: [
        {
          title: "100% Algerian",
          description: "Designed for the Algerian market: PCN chart of accounts, DGI tax declarations, CNAS/CASNOS calculations."
        },
        {
          title: "Cloud or Local",
          description: "Install on your servers or access online. Your data stays in Algeria, secure."
        },
        {
          title: "Multi-Branch",
          description: "Manage multiple points of sale or branches from a centralized interface."
        },
        {
          title: "Offline Mode",
          description: "Offline mode available. Automatic synchronization when connection returns."
        },
        {
          title: "Local Support",
          description: "Team based in Setif, support in French and Arabic, on-site intervention possible."
        },
        {
          title: "Updates",
          description: "Regular updates, compliance with new regulations, new features."
        }
      ]
    },
    process: {
      title: "Our Approach",
      steps: [
        {
          number: "01",
          title: "Free Audit",
          description: "Analysis of your current processes, needs identification, recommendations."
        },
        {
          number: "02",
          title: "Configuration",
          description: "Software setup according to your business, import of existing data."
        },
        {
          number: "03",
          title: "Training",
          description: "Training your team on-site or online, complete documentation."
        },
        {
          number: "04",
          title: "Support",
          description: "Ongoing support, startup assistance, optimizations based on your feedback."
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Is the software compliant with Algerian regulations?",
          answer: "Yes, our solutions integrate the national chart of accounts (PCN), tax declarations (G50, IBS, TAP), and social calculations CNAS/CACOBATPH/CASNOS."
        },
        {
          question: "Can I migrate my data from another software?",
          answer: "Yes, we ensure migration of your data from Excel, Sage, or any other software. Import is included in the installation."
        },
        {
          question: "Does the software work offline?",
          answer: "Yes, our solution has a complete offline mode. Data synchronizes automatically when connection returns."
        },
        {
          question: "How many users can access?",
          answer: "According to the chosen plan: 1 user (Essential), 5 users (Professional), or unlimited (Enterprise)."
        },
        {
          question: "Do you offer training?",
          answer: "Yes, training is included in all our packages. We train on-site in Setif or online according to your preferences."
        }
      ]
    },
    coverage: {
      title: "Service Area",
      description: "Installation and support in Setif and surrounding wilayas",
      areas: ["Setif", "El Eulma", "Ain Oulmene", "Bordj Bou Arreridj", "M'Sila", "Batna", "Constantine", "Bejaia", "Jijel", "Mila"]
    },
    cta: {
      title: "Ready to Digitize Your Business?",
      subtitle: "Request a free demonstration of our management solutions.",
      button: "Request a Free Demo",
      phone: "+213 549 57 55 12",
      email: "contact@symloop.com"
    }
  }
};

const iconComponents = {
  FileText,
  ClipboardList,
  DollarSign,
  Users,
  Truck,
  BarChart3,
  ShoppingBag,
  Wrench,
  Building2
};

export default function LogicielGestionSetif() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;
  const isRTL = locale === 'ar';
  const c = content[locale] || content.fr;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://symloop.com/blog/logiciel-gestion-setif-2026",
    "name": "Symloop - Logiciel de Gestion Sétif",
    "alternateName": ["سيملوب برنامج إدارة سطيف", "Symloop Management Software Setif"],
    "description": c.meta.description,
    "url": "https://symloop.com/blog/logiciel-gestion-setif-2026",
    "telephone": "+213549575512",
    "email": "contact@symloop.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cité 1000 Logements",
      "addressLocality": "Sétif",
      "addressRegion": "Sétif",
      "postalCode": "19000",
      "addressCountry": "DZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1919",
      "longitude": "5.4138"
    },
    "areaServed": [
      { "@type": "City", "name": "Sétif" },
      { "@type": "City", "name": "El Eulma" },
      { "@type": "City", "name": "Bordj Bou Arréridj" },
      { "@type": "City", "name": "M'Sila" },
      { "@type": "City", "name": "Batna" },
      { "@type": "City", "name": "Constantine" }
    ],
    "priceRange": "150000 DZD - 500000 DZD",
    "openingHours": "Su-Th 09:00-18:00"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": c.faq.items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <Head>
        <title>{c.meta.title}</title>
        <meta name="description" content={c.meta.description} />
        <meta name="keywords" content={c.meta.keywords} />
        <link rel="canonical" href={`https://symloop.com${locale !== 'fr' ? '/' + locale : ''}/blog/logiciel-gestion-setif-2026`} />

        {/* Geo Meta Tags */}
        <meta name="geo.region" content="DZ-19" />
        <meta name="geo.placename" content="Sétif, Algeria" />
        <meta name="geo.position" content="36.1919;5.4138" />
        <meta name="ICBM" content="36.1919, 5.4138" />

        {/* Open Graph */}
        <meta property="og:title" content={c.meta.title} />
        <meta property="og:description" content={c.meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://symloop.com/blog/logiciel-gestion-setif-2026`} />
        <meta property="og:locale" content={locale === 'ar' ? 'ar_DZ' : locale === 'en' ? 'en_US' : 'fr_DZ'} />

        {/* Hreflang */}
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/blog/logiciel-gestion-setif-2026" />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/blog/logiciel-gestion-setif-2026" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/en/blog/logiciel-gestion-setif-2026" />
        <link rel="alternate" hrefLang="x-default" href="https://symloop.com/blog/logiciel-gestion-setif-2026" />

        {/* Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <div className={`min-h-screen bg-slate-950 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>


        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-slate-950 to-orange-900/20" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 text-sm font-medium mb-6">
                <Settings className="w-4 h-4" />
                {c.hero.badge}
              </span>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {c.hero.title}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  {c.hero.titleHighlight}
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                {c.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-xl hover:from-amber-500 hover:to-orange-500 transition-all shadow-lg shadow-amber-500/25">
                  {c.hero.cta1}
                </Link>
                <a href="#solutions" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20">
                  {c.hero.cta2}
                </a>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
            >
              {c.stats.map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.solutions.title}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">{c.solutions.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.solutions.items.map((solution, index) => {
                const Icon = iconComponents[solution.icon];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-amber-500/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                      {Icon && <Icon className="w-6 h-6 text-amber-400" />}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                          <CheckCircleIcon className="w-4 h-4 text-amber-400 flex-shrink-0" />
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

        {/* Sectors Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.sectors.title}</h2>
              <p className="text-slate-400">{c.sectors.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {c.sectors.items.map((sector, index) => {
                const Icon = iconComponents[sector.icon];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 text-center"
                  >
                    <div className="w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                      {Icon && <Icon className="w-7 h-7 text-amber-400" />}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{sector.name}</h3>
                    <p className="text-slate-400 text-sm">{sector.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.packages.title}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">{c.packages.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {c.packages.items.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative p-8 rounded-2xl ${
                    pkg.popular
                      ? 'bg-gradient-to-br from-amber-900/50 to-orange-900/50 border-2 border-amber-500/50'
                      : 'bg-slate-800/50 border border-slate-700/50'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-white text-sm font-medium rounded-full">
                      {locale === 'ar' ? 'الأكثر شعبية' : locale === 'en' ? 'Most Popular' : 'Plus Populaire'}
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-slate-400 mb-4">{pkg.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{pkg.price}</span>
                    {pkg.currency && <span className="text-slate-400 ml-2">{pkg.currency}</span>}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300">
                        <CheckCircleIcon className="w-5 h-5 text-amber-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full block text-center py-3 rounded-xl font-semibold transition-all ${
                      pkg.popular
                        ? 'bg-amber-500 text-white hover:bg-amber-400'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {locale === 'ar' ? 'اختر هذا العرض' : locale === 'en' ? 'Choose This Plan' : 'Choisir Cette Formule'}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{c.features.title}</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {c.features.items.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{c.process.title}</h2>

            <div className="max-w-4xl mx-auto">
              {c.process.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{c.faq.title}</h2>

            <div className="max-w-3xl mx-auto space-y-4">
              {c.faq.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{item.question}</h3>
                  <p className="text-slate-400">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <MapPinIcon className="w-12 h-12 text-amber-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.coverage.title}</h2>
              <p className="text-slate-400 mb-8">{c.coverage.description}</p>

              <div className="flex flex-wrap justify-center gap-3">
                {c.coverage.areas.map((area, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 text-sm font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-amber-900/30 to-orange-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.cta.title}</h2>
              <p className="text-slate-300 mb-8">{c.cta.subtitle}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href={`tel:${c.cta.phone}`}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-all"
                >
                  <PhoneIcon className="w-5 h-5" />
                  {c.cta.phone}
                </a>
                <a
                  href={`mailto:${c.cta.email}`}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-all"
                >
                  <EnvelopeIcon className="w-5 h-5" />
                  {c.cta.email}
                </a>
              </div>

              <Link
                href="/contact"
                className="inline-flex px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-xl hover:from-amber-500 hover:to-orange-500 transition-all shadow-lg shadow-amber-500/25"
              >
                {c.cta.button}
              </Link>
            </div>
          </div>
        </section>

        <Footer />
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
