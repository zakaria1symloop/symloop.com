"use client";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArrowLeft, Calendar, Clock, User,
  Plane, Hotel, Users, Globe,
  CheckCircle, Phone, Mail, CreditCard,
  Layers, FileText, Star, Shield,
  Building, Briefcase, Map, Award
} from "lucide-react";

export default function LogicielAgenceVoyageGDS2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const content = {
    fr: {
      title: "Logiciel Agence de Voyage et GDS pour Setif et l'Est Algerien",
      subtitle: "Reservations Vols, Hotels, Omra et Hadj - Solution Complete pour Agences",
      metaTitle: "Logiciel Agence Voyage GDS Setif Est Algerien 2026 | Symloop",
      metaDesc: "Logiciel agence de voyage et GDS pour Setif et Est algerien. Reservations vols, hotels, Omra, Hadj. Integration Amadeus. Formation et support inclus.",
      date: "5 Janvier 2026",
      readTime: "13 min",
      author: "Symloop Team",
      category: "Logiciel Voyage",

      intro: "Les agences de voyage de Setif, Constantine, Batna et de l'Est algerien font face a des defis specifiques : gestion des reservations Omra et Hadj, billetterie aerienne, forfaits touristiques. Notre logiciel GDS integre vous permet de gerer toutes ces activites depuis une seule plateforme.",

      tableOfContents: {
        title: "Dans cet article",
        items: [
          "Besoins des agences de l'Est algerien",
          "Fonctionnalites GDS",
          "Gestion Omra et Hadj",
          "Billetterie aerienne",
          "Reservation hoteliere",
          "Gestion des groupes",
          "Facturation et comptabilite",
          "Formation et support"
        ]
      },

      section1: {
        title: "Les Besoins Specifiques des Agences de l'Est Algerien",
        paragraphs: [
          "L'Est algerien est une region dynamique pour le tourisme et les voyages. Les agences de Setif, Constantine, Batna, Biskra et Annaba gerent un volume important de voyageurs, notamment pour les pelerinages (Omra, Hadj), les voyages d'affaires et le tourisme.",
          "Ces agences ont besoin d'un outil qui comprend leurs specificites : gestion des quotas Omra/Hadj, integration avec les compagnies aeriennes locales et internationales, facturation en dinars avec gestion des devises, et interface en arabe.",
          "Notre solution a ete developpee en collaboration avec des agences algeriennes pour repondre exactement a ces besoins, tout en offrant les fonctionnalites d'un GDS professionnel."
        ],
        stats: [
          { value: "50+", label: "Agences utilisatrices" },
          { value: "100K+", label: "Reservations/an" },
          { value: "24/7", label: "Support technique" },
          { value: "99.9%", label: "Disponibilite" }
        ]
      },

      section2: {
        title: "Fonctionnalites GDS Completes",
        features: [
          {
            title: "Recherche Multi-Sources",
            description: "Recherchez simultanement sur plusieurs GDS et consolidateurs pour trouver les meilleurs tarifs.",
            items: ["Amadeus", "Sabre", "Galileo", "Consolidateurs locaux"]
          },
          {
            title: "Comparaison Tarifaire",
            description: "Comparez instantanement les prix entre differentes sources et choisissez la meilleure option.",
            items: ["Prix en temps reel", "Frais inclus", "Conditions tarifaires", "Historique des prix"]
          },
          {
            title: "Emission Instantanee",
            description: "Emettez vos billets directement depuis la plateforme, sans changer de systeme.",
            items: ["E-ticket automatique", "Envoi par email", "Archivage", "Duplicata"]
          },
          {
            title: "Gestion PNR",
            description: "Creez, modifiez et annulez vos PNR facilement avec un historique complet.",
            items: ["Creation rapide", "Modifications", "Annulations", "Historique complet"]
          }
        ]
      },

      section3: {
        title: "Gestion Omra et Hadj",
        intro: "Module specialise pour la gestion des pelerinages :",
        features: [
          {
            title: "Gestion des Quotas",
            description: "Suivez vos allocations de places Omra et Hadj en temps reel."
          },
          {
            title: "Packages Complets",
            description: "Creez des forfaits incluant vol, hotel, transferts et visites."
          },
          {
            title: "Documents Pelerins",
            description: "Generez automatiquement tous les documents necessaires : visas, attestations, programmes."
          },
          {
            title: "Gestion des Groupes",
            description: "Organisez vos groupes de pelerins avec listes, chambres et accompagnateurs."
          },
          {
            title: "Suivi des Paiements",
            description: "Echeanciers de paiement, relances automatiques, recus."
          },
          {
            title: "Communication",
            description: "SMS et emails groupes pour informer les pelerins."
          }
        ],
        hotels: ["Hotels La Mecque", "Hotels Medine", "Dar Al Tawhid", "Pullman ZamZam", "Hilton Suites", "Swissotel"]
      },

      section4: {
        title: "Billetterie Aerienne",
        intro: "Gerez toute votre billetterie depuis une interface unique :",
        airlines: [
          { name: "Air Algerie", routes: "Vols domestiques et internationaux" },
          { name: "Tassili Airlines", routes: "Vols interieurs" },
          { name: "Turkish Airlines", routes: "Hub Istanbul" },
          { name: "Air France", routes: "Europe et monde" },
          { name: "Emirates", routes: "Dubai et Asie" },
          { name: "Saudia", routes: "Arabie Saoudite" },
          { name: "EgyptAir", routes: "Afrique et Moyen-Orient" },
          { name: "Qatar Airways", routes: "Doha et monde" }
        ],
        features: ["Tarifs negocies", "BSP integre", "Void et remboursements", "Rapport IATA"]
      },

      section5: {
        title: "Reservation Hoteliere",
        intro: "Acces a un large inventaire d'hotels dans le monde entier :",
        features: [
          {
            title: "Inventaire Global",
            description: "Plus de 500,000 hotels dans 200 pays, des economiques aux 5 etoiles."
          },
          {
            title: "Tarifs Nets",
            description: "Acces aux tarifs B2B avec marges personnalisables."
          },
          {
            title: "Confirmation Instantanee",
            description: "Confirmation immediate pour la plupart des reservations."
          },
          {
            title: "Gestion des Vouchers",
            description: "Generation automatique des bons d'hebergement."
          }
        ]
      },

      section6: {
        title: "Gestion des Groupes",
        intro: "Outils dedies pour l'organisation de voyages en groupe :",
        features: [
          "Devis groupe avec options",
          "Rooming list automatique",
          "Gestion des options et deadlines",
          "Contrats fournisseurs",
          "Marges par dossier",
          "Documents de voyage",
          "Fiche technique detaillee",
          "Historique des modifications"
        ]
      },

      section7: {
        title: "Facturation et Comptabilite",
        features: [
          {
            title: "Facturation Automatique",
            description: "Generation automatique des factures conformes a la reglementation algerienne."
          },
          {
            title: "Multi-Devises",
            description: "Gestion des ventes en DA, EUR, USD avec conversion automatique."
          },
          {
            title: "Echeanciers",
            description: "Plans de paiement flexibles avec suivi des echeances."
          },
          {
            title: "Rapports Financiers",
            description: "Chiffre d'affaires, marges, commissions par periode et par agent."
          },
          {
            title: "Export Comptable",
            description: "Export vers Sage, PC Compta et autres logiciels comptables."
          },
          {
            title: "TVA et Taxes",
            description: "Gestion automatique de la TVA selon la reglementation."
          }
        ]
      },

      pricing: {
        title: "Formules Adaptees",
        plans: [
          {
            name: "Agence",
            price: "29,900 DA",
            period: "/mois",
            features: ["3 postes", "GDS basic", "Omra/Hadj", "Hotels", "Support email"]
          },
          {
            name: "Pro",
            price: "49,900 DA",
            period: "/mois",
            features: ["10 postes", "Multi-GDS", "Groupes", "Comptabilite", "Support prioritaire", "Formation"]
          },
          {
            name: "Reseau",
            price: "Sur devis",
            period: "",
            features: ["Postes illimites", "Multi-agences", "API", "Account manager", "Formation sur site"]
          }
        ]
      },

      wilayas: {
        title: "Agences Partenaires dans la Region",
        list: ["Setif", "Constantine", "Batna", "Biskra", "Annaba", "Bordj Bou Arreridj", "M'sila", "Jijel"]
      },

      cta: {
        title: "Modernisez Votre Agence de Voyage",
        description: "Rejoignez les agences qui ont choisi notre solution pour developper leur activite. Demonstration gratuite et sans engagement.",
        button: "Demander une Demo",
        phone: "+213 549 575 512",
        email: "contact@symloop.com"
      },

      backToBlog: "Retour au Blog"
    },
    en: {
      title: "Travel Agency and GDS Software for Setif and Eastern Algeria",
      subtitle: "Flight, Hotel, Omra and Hajj Bookings - Complete Solution for Agencies",
      metaTitle: "Travel Agency GDS Software Setif Eastern Algeria 2026 | Symloop",
      metaDesc: "Travel agency and GDS software for Setif and Eastern Algeria. Flight, hotel, Omra, Hajj bookings. Amadeus integration. Training and support included.",
      date: "January 5, 2026",
      readTime: "13 min",
      author: "Symloop Team",
      category: "Travel Software",

      intro: "Travel agencies in Setif, Constantine, Batna and Eastern Algeria face specific challenges: managing Omra and Hajj bookings, airline ticketing, tour packages. Our integrated GDS software allows you to manage all these activities from a single platform.",

      tableOfContents: {
        title: "In this article",
        items: [
          "Needs of Eastern Algerian agencies",
          "GDS features",
          "Omra and Hajj management",
          "Airline ticketing",
          "Hotel booking",
          "Group management",
          "Billing and accounting",
          "Training and support"
        ]
      },

      section1: {
        title: "Specific Needs of Eastern Algerian Agencies",
        paragraphs: [
          "Eastern Algeria is a dynamic region for tourism and travel. Agencies in Setif, Constantine, Batna, Biskra and Annaba handle a large volume of travelers, particularly for pilgrimages (Omra, Hajj), business travel and tourism.",
          "These agencies need a tool that understands their specifics: Omra/Hajj quota management, integration with local and international airlines, billing in dinars with currency management, and Arabic interface.",
          "Our solution was developed in collaboration with Algerian agencies to meet exactly these needs, while offering professional GDS features."
        ],
        stats: [
          { value: "50+", label: "Agencies using" },
          { value: "100K+", label: "Bookings/year" },
          { value: "24/7", label: "Technical support" },
          { value: "99.9%", label: "Availability" }
        ]
      },

      section2: {
        title: "Complete GDS Features",
        features: [
          {
            title: "Multi-Source Search",
            description: "Search simultaneously across multiple GDS and consolidators to find the best rates.",
            items: ["Amadeus", "Sabre", "Galileo", "Local consolidators"]
          },
          {
            title: "Rate Comparison",
            description: "Instantly compare prices between different sources and choose the best option.",
            items: ["Real-time prices", "Fees included", "Fare conditions", "Price history"]
          },
          {
            title: "Instant Ticketing",
            description: "Issue your tickets directly from the platform, without changing systems.",
            items: ["Automatic e-ticket", "Email sending", "Archiving", "Duplicate"]
          },
          {
            title: "PNR Management",
            description: "Create, modify and cancel your PNRs easily with complete history.",
            items: ["Quick creation", "Modifications", "Cancellations", "Complete history"]
          }
        ]
      },

      section3: {
        title: "Omra and Hajj Management",
        intro: "Specialized module for pilgrimage management:",
        features: [
          { title: "Quota Management", description: "Track your Omra and Hajj seat allocations in real time." },
          { title: "Complete Packages", description: "Create packages including flight, hotel, transfers and tours." },
          { title: "Pilgrim Documents", description: "Automatically generate all necessary documents: visas, certificates, programs." },
          { title: "Group Management", description: "Organize your pilgrim groups with lists, rooms and guides." },
          { title: "Payment Tracking", description: "Payment schedules, automatic reminders, receipts." },
          { title: "Communication", description: "Group SMS and emails to inform pilgrims." }
        ],
        hotels: ["Mecca Hotels", "Medina Hotels", "Dar Al Tawhid", "Pullman ZamZam", "Hilton Suites", "Swissotel"]
      },

      section4: {
        title: "Airline Ticketing",
        intro: "Manage all your ticketing from a single interface:",
        airlines: [
          { name: "Air Algerie", routes: "Domestic and international flights" },
          { name: "Tassili Airlines", routes: "Domestic flights" },
          { name: "Turkish Airlines", routes: "Istanbul hub" },
          { name: "Air France", routes: "Europe and world" },
          { name: "Emirates", routes: "Dubai and Asia" },
          { name: "Saudia", routes: "Saudi Arabia" },
          { name: "EgyptAir", routes: "Africa and Middle East" },
          { name: "Qatar Airways", routes: "Doha and world" }
        ],
        features: ["Negotiated rates", "Integrated BSP", "Void and refunds", "IATA report"]
      },

      section5: {
        title: "Hotel Booking",
        intro: "Access to a large inventory of hotels worldwide:",
        features: [
          { title: "Global Inventory", description: "Over 500,000 hotels in 200 countries, from budget to 5-star." },
          { title: "Net Rates", description: "Access to B2B rates with customizable margins." },
          { title: "Instant Confirmation", description: "Immediate confirmation for most bookings." },
          { title: "Voucher Management", description: "Automatic generation of accommodation vouchers." }
        ]
      },

      section6: {
        title: "Group Management",
        intro: "Dedicated tools for organizing group travel:",
        features: [
          "Group quote with options",
          "Automatic rooming list",
          "Options and deadline management",
          "Supplier contracts",
          "Margins per file",
          "Travel documents",
          "Detailed technical sheet",
          "Modification history"
        ]
      },

      section7: {
        title: "Billing and Accounting",
        features: [
          { title: "Automatic Invoicing", description: "Automatic generation of invoices compliant with Algerian regulations." },
          { title: "Multi-Currency", description: "Sales management in DA, EUR, USD with automatic conversion." },
          { title: "Payment Schedules", description: "Flexible payment plans with deadline tracking." },
          { title: "Financial Reports", description: "Revenue, margins, commissions by period and agent." },
          { title: "Accounting Export", description: "Export to Sage, PC Compta and other accounting software." },
          { title: "VAT and Taxes", description: "Automatic VAT management according to regulations." }
        ]
      },

      pricing: {
        title: "Adapted Plans",
        plans: [
          { name: "Agency", price: "29,900 DA", period: "/month", features: ["3 seats", "Basic GDS", "Omra/Hajj", "Hotels", "Email support"] },
          { name: "Pro", price: "49,900 DA", period: "/month", features: ["10 seats", "Multi-GDS", "Groups", "Accounting", "Priority support", "Training"] },
          { name: "Network", price: "Custom quote", period: "", features: ["Unlimited seats", "Multi-agency", "API", "Account manager", "On-site training"] }
        ]
      },

      wilayas: {
        title: "Partner Agencies in the Region",
        list: ["Setif", "Constantine", "Batna", "Biskra", "Annaba", "Bordj Bou Arreridj", "M'sila", "Jijel"]
      },

      cta: {
        title: "Modernize Your Travel Agency",
        description: "Join the agencies that have chosen our solution to grow their business. Free demo with no obligation.",
        button: "Request a Demo",
        phone: "+213 549 575 512",
        email: "contact@symloop.com"
      },

      backToBlog: "Back to Blog"
    },
    ar: {
      title: "برنامج وكالة السفر و GDS لسطيف وشرق الجزائر",
      subtitle: "حجوزات الطيران، الفنادق، العمرة والحج - حل كامل للوكالات",
      metaTitle: "برنامج وكالة السفر GDS سطيف شرق الجزائر 2026 | Symloop",
      metaDesc: "برنامج وكالة السفر و GDS لسطيف وشرق الجزائر. حجوزات الطيران والفنادق والعمرة والحج. تكامل Amadeus. التدريب والدعم مشمول.",
      date: "5 يناير 2026",
      readTime: "13 دقيقة",
      author: "فريق Symloop",
      category: "برنامج السفر",

      intro: "تواجه وكالات السفر في سطيف وقسنطينة وباتنة وشرق الجزائر تحديات محددة: إدارة حجوزات العمرة والحج، تذاكر الطيران، الباقات السياحية. برنامج GDS المتكامل لدينا يتيح لك إدارة كل هذه الأنشطة من منصة واحدة.",

      tableOfContents: {
        title: "في هذا المقال",
        items: [
          "احتياجات وكالات شرق الجزائر",
          "ميزات GDS",
          "إدارة العمرة والحج",
          "تذاكر الطيران",
          "حجز الفنادق",
          "إدارة المجموعات",
          "الفوترة والمحاسبة",
          "التدريب والدعم"
        ]
      },

      section1: {
        title: "الاحتياجات المحددة لوكالات شرق الجزائر",
        paragraphs: [
          "شرق الجزائر منطقة ديناميكية للسياحة والسفر. تتعامل وكالات سطيف وقسنطينة وباتنة وبسكرة وعنابة مع حجم كبير من المسافرين، خاصة للحج والعمرة ورحلات العمل والسياحة.",
          "تحتاج هذه الوكالات إلى أداة تفهم خصوصياتها: إدارة حصص العمرة/الحج، التكامل مع شركات الطيران المحلية والدولية، الفوترة بالدينار مع إدارة العملات، وواجهة عربية.",
          "تم تطوير حلنا بالتعاون مع وكالات جزائرية لتلبية هذه الاحتياجات بالضبط، مع تقديم ميزات GDS احترافية."
        ],
        stats: [
          { value: "+50", label: "وكالات مستخدمة" },
          { value: "+100 ألف", label: "حجز/سنة" },
          { value: "24/7", label: "دعم تقني" },
          { value: "99.9%", label: "التوفر" }
        ]
      },

      section2: {
        title: "ميزات GDS الكاملة",
        features: [
          { title: "بحث متعدد المصادر", description: "ابحث في عدة GDS وموحدين في آن واحد للعثور على أفضل الأسعار.", items: ["Amadeus", "Sabre", "Galileo", "موحدون محليون"] },
          { title: "مقارنة الأسعار", description: "قارن الأسعار فوراً بين مصادر مختلفة واختر الأفضل.", items: ["أسعار مباشرة", "رسوم مشمولة", "شروط التعرفة", "سجل الأسعار"] },
          { title: "إصدار فوري", description: "أصدر تذاكرك مباشرة من المنصة دون تغيير النظام.", items: ["تذكرة إلكترونية تلقائية", "إرسال بالبريد", "الأرشفة", "نسخة مكررة"] },
          { title: "إدارة PNR", description: "أنشئ وعدّل وألغِ PNR بسهولة مع سجل كامل.", items: ["إنشاء سريع", "تعديلات", "إلغاءات", "سجل كامل"] }
        ]
      },

      section3: {
        title: "إدارة العمرة والحج",
        intro: "وحدة متخصصة لإدارة الحج والعمرة:",
        features: [
          { title: "إدارة الحصص", description: "تتبع تخصيصات مقاعد العمرة والحج في الوقت الفعلي." },
          { title: "باقات كاملة", description: "أنشئ باقات تشمل الطيران والفندق والتنقلات والزيارات." },
          { title: "وثائق الحجاج", description: "أنشئ تلقائياً جميع الوثائق اللازمة: تأشيرات، شهادات، برامج." },
          { title: "إدارة المجموعات", description: "نظّم مجموعات الحجاج بالقوائم والغرف والمرافقين." },
          { title: "تتبع المدفوعات", description: "جداول الدفع، التذكيرات التلقائية، الإيصالات." },
          { title: "التواصل", description: "رسائل SMS وبريد جماعية لإبلاغ الحجاج." }
        ],
        hotels: ["فنادق مكة", "فنادق المدينة", "دار التوحيد", "بولمان زمزم", "هيلتون سويتس", "سويس أوتيل"]
      },

      section4: {
        title: "تذاكر الطيران",
        intro: "أدر كل تذاكرك من واجهة واحدة:",
        airlines: [
          { name: "الجزائرية", routes: "رحلات محلية ودولية" },
          { name: "طاسيلي", routes: "رحلات داخلية" },
          { name: "الخطوط التركية", routes: "محور إسطنبول" },
          { name: "إير فرانس", routes: "أوروبا والعالم" },
          { name: "طيران الإمارات", routes: "دبي وآسيا" },
          { name: "الخطوط السعودية", routes: "المملكة العربية السعودية" },
          { name: "مصر للطيران", routes: "أفريقيا والشرق الأوسط" },
          { name: "الخطوط القطرية", routes: "الدوحة والعالم" }
        ],
        features: ["أسعار تفاوضية", "BSP متكامل", "إلغاء واسترداد", "تقرير IATA"]
      },

      section5: {
        title: "حجز الفنادق",
        intro: "الوصول إلى مخزون كبير من الفنادق في جميع أنحاء العالم:",
        features: [
          { title: "مخزون عالمي", description: "أكثر من 500,000 فندق في 200 دولة، من الاقتصادية إلى 5 نجوم." },
          { title: "أسعار صافية", description: "الوصول لأسعار B2B مع هوامش قابلة للتخصيص." },
          { title: "تأكيد فوري", description: "تأكيد فوري لمعظم الحجوزات." },
          { title: "إدارة القسائم", description: "إنشاء تلقائي لقسائم الإقامة." }
        ]
      },

      section6: {
        title: "إدارة المجموعات",
        intro: "أدوات مخصصة لتنظيم السفر الجماعي:",
        features: ["عرض أسعار مجموعة بخيارات", "قائمة غرف تلقائية", "إدارة الخيارات والمواعيد", "عقود الموردين", "هوامش لكل ملف", "وثائق السفر", "ورقة تقنية مفصلة", "سجل التعديلات"]
      },

      section7: {
        title: "الفوترة والمحاسبة",
        features: [
          { title: "فوترة تلقائية", description: "إنشاء تلقائي للفواتير المتوافقة مع اللوائح الجزائرية." },
          { title: "متعدد العملات", description: "إدارة المبيعات بالدينار واليورو والدولار مع تحويل تلقائي." },
          { title: "جداول الدفع", description: "خطط دفع مرنة مع تتبع المواعيد." },
          { title: "تقارير مالية", description: "الإيرادات، الهوامش، العمولات حسب الفترة والوكيل." },
          { title: "تصدير محاسبي", description: "التصدير إلى Sage و PC Compta وبرامج محاسبة أخرى." },
          { title: "ضريبة القيمة المضافة", description: "إدارة تلقائية لضريبة القيمة المضافة وفق اللوائح." }
        ]
      },

      pricing: {
        title: "خطط مناسبة",
        plans: [
          { name: "وكالة", price: "29,900 دج", period: "/شهر", features: ["3 مقاعد", "GDS أساسي", "عمرة/حج", "فنادق", "دعم بالبريد"] },
          { name: "احترافي", price: "49,900 دج", period: "/شهر", features: ["10 مقاعد", "متعدد GDS", "مجموعات", "محاسبة", "دعم ذو أولوية", "تدريب"] },
          { name: "شبكة", price: "عرض مخصص", period: "", features: ["مقاعد غير محدودة", "متعدد الوكالات", "API", "مدير حساب", "تدريب في الموقع"] }
        ]
      },

      wilayas: {
        title: "الوكالات الشريكة في المنطقة",
        list: ["سطيف", "قسنطينة", "باتنة", "بسكرة", "عنابة", "برج بوعريريج", "المسيلة", "جيجل"]
      },

      cta: {
        title: "حدّث وكالة السفر الخاصة بك",
        description: "انضم للوكالات التي اختارت حلنا لتطوير نشاطها. عرض مجاني بدون التزام.",
        button: "اطلب عرضاً",
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
        <meta name="keywords" content="logiciel agence voyage Setif, GDS Algerie, reservation vol, Omra Hadj, agence voyage Constantine, Amadeus Algerie" />
        <link rel="canonical" href={`https://symloop.com/${locale === 'fr' ? '' : locale + '/'}blog/logiciel-agence-voyage-gds-setif-est-algerien-2026`} />
      </Head>

      <main className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-black to-purple-500/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />{t.backToBlog}
            </Link>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">{t.category}</span>
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

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-16">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-3"><Layers className="w-5 h-5 text-blue-400" />{t.tableOfContents.title}</h2>
              <ul className="space-y-3">
                {t.tableOfContents.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 1 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">{t.section1.title}</h2>
              {t.section1.paragraphs.map((p, i) => <p key={i} className="text-gray-300 mb-4 leading-relaxed">{p}</p>)}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {t.section1.stats.map((s, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400">{s.value}</div>
                    <div className="text-sm text-gray-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2 - GDS Features */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">{t.section2.title}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {t.section2.features.map((f, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold mb-2 text-blue-400">{f.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{f.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {f.items.map((item, j) => (
                        <span key={j} className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded text-xs">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3 - Omra/Hadj */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4">{t.section3.title}</h2>
              <p className="text-gray-300 mb-6">{t.section3.intro}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {t.section3.features.map((f, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="font-bold text-sm mb-1">{f.title}</h4>
                    <p className="text-xs text-gray-400">{f.description}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-4">
                <p className="text-sm text-gray-400 mb-2">Hotels partenaires Omra/Hadj:</p>
                <div className="flex flex-wrap gap-2">
                  {t.section3.hotels.map((h, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm">{h}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 4 - Airlines */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4">{t.section4.title}</h2>
              <p className="text-gray-300 mb-6">{t.section4.intro}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {t.section4.airlines.map((a, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <Plane className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <h4 className="font-bold text-sm">{a.name}</h4>
                    <p className="text-xs text-gray-400">{a.routes}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {t.section4.features.map((f, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">{f}</span>
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

            {/* Pricing */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{t.pricing.title}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {t.pricing.plans.map((p, i) => (
                  <div key={i} className={`bg-white/5 border rounded-xl p-6 ${i === 1 ? 'border-blue-500/50 ring-1 ring-blue-500/20' : 'border-white/10'}`}>
                    <h3 className="font-bold text-xl mb-2">{p.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-blue-400">{p.price}</span>
                      <span className="text-gray-400">{p.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {p.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-blue-400" />{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20 border border-blue-500/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">{t.cta.title}</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">{t.cta.description}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={`tel:${t.cta.phone}`} className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors">
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
