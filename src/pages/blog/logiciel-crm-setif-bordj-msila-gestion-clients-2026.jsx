"use client";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArrowLeft, Calendar, Clock, User,
  Users, TrendingUp, Target, BarChart3,
  CheckCircle, Phone, Mail, MessageCircle,
  Layers, Database, Settings, Zap,
  PieChart, FileText, Award, Building,
  ShoppingCart, UserPlus, Filter, Search
} from "lucide-react";

export default function LogicielCRMSetif2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const content = {
    fr: {
      title: "Logiciel CRM a Setif, Bordj Bou Arreridj et M'sila",
      subtitle: "Solution de Gestion de la Relation Client pour les Entreprises de l'Est Algerien",
      metaTitle: "Logiciel CRM Setif Bordj M'sila 2026 | Gestion Clients | Symloop",
      metaDesc: "Logiciel CRM pour entreprises a Setif, Bordj Bou Arreridj, M'sila. Gestion clients, suivi ventes, automatisation marketing. Support local. Demo gratuite.",
      date: "5 Janvier 2026",
      readTime: "12 min",
      author: "Symloop Team",
      category: "Logiciel CRM",

      intro: "Les entreprises de Setif, Bordj Bou Arreridj et M'sila ont besoin d'outils modernes pour gerer leurs relations clients. Un bon CRM (Customer Relationship Management) vous permet de centraliser vos contacts, suivre vos opportunites commerciales et automatiser vos actions marketing. Symloop propose une solution CRM adaptee aux realites du marche algerien.",

      tableOfContents: {
        title: "Dans cet article",
        items: [
          "Pourquoi un CRM pour votre entreprise ?",
          "Fonctionnalites cles de notre CRM",
          "Adaptation au marche local",
          "Cas d'usage par secteur",
          "Integration avec vos outils",
          "Tarification transparente",
          "Formation et support",
          "Comment demarrer"
        ]
      },

      section1: {
        title: "Pourquoi Votre Entreprise a Besoin d'un CRM ?",
        paragraphs: [
          "Dans un marche de plus en plus competitif, connaitre vos clients mieux que vos concurrents est un avantage decisif. Un CRM centralise toutes les informations sur vos clients et prospects : historique des interactions, preferences, achats precedents, et opportunites en cours.",
          "Sans CRM, les informations clients sont dispersees : carnets de notes, fichiers Excel, memoire des commerciaux. Quand un employe part, une partie de la connaissance client part avec lui. Le CRM resout ce probleme en creant une base de donnees partagee et perenne.",
          "Pour les entreprises de Setif et des wilayas environnantes, un CRM adapte au contexte local (support en arabe, integration avec les outils de paiement algeriens, interface intuitive) fait toute la difference."
        ],
        stats: [
          { value: "+29%", label: "Augmentation des ventes" },
          { value: "+34%", label: "Productivite commerciale" },
          { value: "+42%", label: "Retention clients" },
          { value: "-23%", label: "Cycle de vente" }
        ]
      },

      section2: {
        title: "Fonctionnalites Cles de Notre CRM",
        features: [
          {
            title: "Gestion des Contacts",
            description: "Base de donnees centralisee de tous vos clients et prospects avec historique complet des interactions.",
            items: ["Fiches clients detaillees", "Historique des echanges", "Segmentation avancee", "Import/export facile"],
            icon: Users
          },
          {
            title: "Pipeline Commercial",
            description: "Visualisez et gerez vos opportunites de vente de la prospection a la conclusion.",
            items: ["Etapes personnalisables", "Probabilite de closing", "Valeur du pipeline", "Previsions de vente"],
            icon: TrendingUp
          },
          {
            title: "Automatisation Marketing",
            description: "Automatisez vos campagnes email, SMS et actions de suivi pour ne jamais rater une opportunite.",
            items: ["Emails automatiques", "SMS marketing", "Rappels automatiques", "Sequences de nurturing"],
            icon: Zap
          },
          {
            title: "Rapports et Tableaux de Bord",
            description: "Suivez vos performances en temps reel avec des indicateurs cles et des graphiques clairs.",
            items: ["KPIs en temps reel", "Rapports personnalises", "Export PDF/Excel", "Objectifs et suivi"],
            icon: BarChart3
          },
          {
            title: "Gestion des Taches",
            description: "Ne manquez plus aucun suivi avec un systeme de taches et rappels integre.",
            items: ["Rappels automatiques", "Affectation aux equipes", "Calendrier integre", "Notifications push"],
            icon: CheckCircle
          },
          {
            title: "Application Mobile",
            description: "Acces a votre CRM depuis n'importe ou, meme hors ligne.",
            items: ["iOS et Android", "Mode hors ligne", "Synchronisation auto", "Scanner cartes visite"],
            icon: Phone
          }
        ]
      },

      section3: {
        title: "Adapte au Marche de Setif et de l'Est Algerien",
        intro: "Notre CRM est concu pour repondre aux besoins specifiques des entreprises locales :",
        adaptations: [
          {
            title: "Interface Bilingue",
            description: "Interface complete en francais et arabe, avec support de l'ecriture RTL."
          },
          {
            title: "Devises Locales",
            description: "Gestion native du Dinar algerien (DA), avec support multi-devises pour l'export."
          },
          {
            title: "Calendrier Algerien",
            description: "Prise en compte des jours feries algeriens et du calendrier hijri."
          },
          {
            title: "Support Local",
            description: "Equipe de support basee en Algerie, disponible par telephone, WhatsApp et email."
          },
          {
            title: "Formation sur Site",
            description: "Nos formateurs se deplacent a Setif, Bordj et M'sila pour former vos equipes."
          },
          {
            title: "Hebergement Local Option",
            description: "Possibilite d'hebergement sur serveurs en Algerie pour les donnees sensibles."
          }
        ]
      },

      section4: {
        title: "Cas d'Usage par Secteur d'Activite",
        sectors: [
          {
            name: "Commerce de Gros",
            description: "Gerez vos clients detaillants, suivez les commandes recurrentes, anticipez les reapprovisionnements.",
            benefits: ["Suivi des volumes par client", "Historique des commandes", "Rappels de renouvellement"]
          },
          {
            name: "Services aux Entreprises",
            description: "Suivez vos contrats, gerez les renouvellements, automatisez la facturation recurrente.",
            benefits: ["Gestion des contrats", "Alertes d'echeance", "Suivi de la satisfaction"]
          },
          {
            name: "Immobilier",
            description: "Gerez vos mandats, suivez les visites, matchez acheteurs et biens disponibles.",
            benefits: ["Base de biens", "Matching automatique", "Suivi des visites"]
          },
          {
            name: "Industrie et BTP",
            description: "Suivez vos appels d'offres, gerez les devis complexes, fiddelisez vos donneurs d'ordre.",
            benefits: ["Suivi des AO", "Historique des devis", "Gestion des projets"]
          },
          {
            name: "Sante et Bien-etre",
            description: "Gerez vos patients/clients, planifiez les rendez-vous, envoyez des rappels automatiques.",
            benefits: ["Dossiers patients", "Rappels RDV", "Historique des soins"]
          }
        ]
      },

      section5: {
        title: "Integration avec Vos Outils Existants",
        intro: "Notre CRM s'integre avec les outils que vous utilisez deja :",
        integrations: [
          { name: "Comptabilite", tools: ["Sage", "PC Compta", "Excel"], description: "Synchronisation des factures et paiements" },
          { name: "Communication", tools: ["WhatsApp Business", "SMS", "Email"], description: "Envoi de messages directement depuis le CRM" },
          { name: "E-commerce", tools: ["WooCommerce", "PrestaShop", "Shopify"], description: "Import automatique des commandes et clients" },
          { name: "Telephonie", tools: ["VoIP", "Standard telephonique"], description: "Click-to-call et historique des appels" }
        ]
      },

      section6: {
        title: "Tarification Transparente",
        intro: "Des formules adaptees a toutes les tailles d'entreprise :",
        plans: [
          {
            name: "Starter",
            price: "9,900 DA",
            period: "/mois",
            users: "Jusqu'a 3 utilisateurs",
            features: ["Gestion contacts illimitee", "Pipeline commercial", "Rapports de base", "Support email"]
          },
          {
            name: "Business",
            price: "24,900 DA",
            period: "/mois",
            users: "Jusqu'a 10 utilisateurs",
            features: ["Tout Starter +", "Automatisation marketing", "Rapports avances", "Support prioritaire", "Formation incluse"]
          },
          {
            name: "Enterprise",
            price: "Sur devis",
            period: "",
            users: "Utilisateurs illimites",
            features: ["Tout Business +", "Personnalisation complete", "API & integrations", "Support dedie", "Hebergement prive option"]
          }
        ]
      },

      section7: {
        title: "Formation et Accompagnement",
        phases: [
          {
            title: "1. Decouverte",
            description: "Analyse de vos besoins et demonstration personnalisee de la solution."
          },
          {
            title: "2. Configuration",
            description: "Parametrage du CRM selon vos processus : etapes du pipeline, champs personnalises, utilisateurs."
          },
          {
            title: "3. Import des Donnees",
            description: "Migration de vos donnees existantes (Excel, ancien logiciel) vers le nouveau CRM."
          },
          {
            title: "4. Formation",
            description: "Formation de vos equipes sur site ou a distance, avec supports en francais et arabe."
          },
          {
            title: "5. Accompagnement",
            description: "Suivi post-deploiement pour s'assurer de l'adoption et repondre aux questions."
          }
        ]
      },

      wilayas: {
        title: "Nous Intervenons dans Toute la Region",
        list: ["Setif", "Bordj Bou Arreridj", "M'sila", "Batna", "Bejaia", "Jijel", "Mila", "Constantine"]
      },

      cta: {
        title: "Pret a Mieux Gerer Vos Clients ?",
        description: "Demandez une demonstration gratuite de notre CRM. Nos consultants vous montreront comment la solution peut s'adapter a votre activite.",
        button: "Demander une Demo Gratuite",
        phone: "+213 549 575 512",
        email: "crm@symloop.com"
      },

      backToBlog: "Retour au Blog"
    },
    en: {
      title: "CRM Software in Setif, Bordj Bou Arreridj and M'sila",
      subtitle: "Customer Relationship Management Solution for Eastern Algerian Businesses",
      metaTitle: "CRM Software Setif Bordj M'sila 2026 | Customer Management | Symloop",
      metaDesc: "CRM software for businesses in Setif, Bordj Bou Arreridj, M'sila. Customer management, sales tracking, marketing automation. Local support. Free demo.",
      date: "January 5, 2026",
      readTime: "12 min",
      author: "Symloop Team",
      category: "CRM Software",

      intro: "Businesses in Setif, Bordj Bou Arreridj and M'sila need modern tools to manage their customer relationships. A good CRM (Customer Relationship Management) allows you to centralize your contacts, track sales opportunities and automate marketing actions. Symloop offers a CRM solution adapted to the realities of the Algerian market.",

      tableOfContents: {
        title: "In this article",
        items: [
          "Why a CRM for your business?",
          "Key features of our CRM",
          "Adaptation to local market",
          "Use cases by sector",
          "Integration with your tools",
          "Transparent pricing",
          "Training and support",
          "How to get started"
        ]
      },

      section1: {
        title: "Why Your Business Needs a CRM?",
        paragraphs: [
          "In an increasingly competitive market, knowing your customers better than your competitors is a decisive advantage. A CRM centralizes all information about your customers and prospects: interaction history, preferences, previous purchases, and ongoing opportunities.",
          "Without a CRM, customer information is scattered: notebooks, Excel files, salespeople's memory. When an employee leaves, part of the customer knowledge leaves with them. CRM solves this problem by creating a shared and permanent database.",
          "For businesses in Setif and surrounding wilayas, a CRM adapted to the local context (Arabic support, integration with Algerian payment tools, intuitive interface) makes all the difference."
        ],
        stats: [
          { value: "+29%", label: "Sales increase" },
          { value: "+34%", label: "Sales productivity" },
          { value: "+42%", label: "Customer retention" },
          { value: "-23%", label: "Sales cycle" }
        ]
      },

      section2: {
        title: "Key Features of Our CRM",
        features: [
          {
            title: "Contact Management",
            description: "Centralized database of all your customers and prospects with complete interaction history.",
            items: ["Detailed customer files", "Exchange history", "Advanced segmentation", "Easy import/export"],
            icon: Users
          },
          {
            title: "Sales Pipeline",
            description: "Visualize and manage your sales opportunities from prospecting to closing.",
            items: ["Customizable stages", "Closing probability", "Pipeline value", "Sales forecasts"],
            icon: TrendingUp
          },
          {
            title: "Marketing Automation",
            description: "Automate your email, SMS campaigns and follow-up actions to never miss an opportunity.",
            items: ["Automatic emails", "SMS marketing", "Automatic reminders", "Nurturing sequences"],
            icon: Zap
          },
          {
            title: "Reports and Dashboards",
            description: "Track your performance in real-time with key indicators and clear graphs.",
            items: ["Real-time KPIs", "Custom reports", "PDF/Excel export", "Goals and tracking"],
            icon: BarChart3
          },
          {
            title: "Task Management",
            description: "Never miss a follow-up with an integrated task and reminder system.",
            items: ["Automatic reminders", "Team assignment", "Integrated calendar", "Push notifications"],
            icon: CheckCircle
          },
          {
            title: "Mobile Application",
            description: "Access your CRM from anywhere, even offline.",
            items: ["iOS and Android", "Offline mode", "Auto sync", "Business card scanner"],
            icon: Phone
          }
        ]
      },

      section3: {
        title: "Adapted to Setif and Eastern Algeria Market",
        intro: "Our CRM is designed to meet the specific needs of local businesses:",
        adaptations: [
          {
            title: "Bilingual Interface",
            description: "Complete interface in French and Arabic, with RTL writing support."
          },
          {
            title: "Local Currencies",
            description: "Native management of Algerian Dinar (DA), with multi-currency support for export."
          },
          {
            title: "Algerian Calendar",
            description: "Takes into account Algerian holidays and Hijri calendar."
          },
          {
            title: "Local Support",
            description: "Support team based in Algeria, available by phone, WhatsApp and email."
          },
          {
            title: "On-Site Training",
            description: "Our trainers travel to Setif, Bordj and M'sila to train your teams."
          },
          {
            title: "Local Hosting Option",
            description: "Possibility of hosting on servers in Algeria for sensitive data."
          }
        ]
      },

      section4: {
        title: "Use Cases by Business Sector",
        sectors: [
          {
            name: "Wholesale Trade",
            description: "Manage your retail customers, track recurring orders, anticipate restocking.",
            benefits: ["Volume tracking by customer", "Order history", "Renewal reminders"]
          },
          {
            name: "Business Services",
            description: "Track your contracts, manage renewals, automate recurring billing.",
            benefits: ["Contract management", "Expiry alerts", "Satisfaction tracking"]
          },
          {
            name: "Real Estate",
            description: "Manage your listings, track visits, match buyers with available properties.",
            benefits: ["Property database", "Automatic matching", "Visit tracking"]
          },
          {
            name: "Industry and Construction",
            description: "Track your tenders, manage complex quotes, retain your clients.",
            benefits: ["Tender tracking", "Quote history", "Project management"]
          },
          {
            name: "Health and Wellness",
            description: "Manage your patients/clients, schedule appointments, send automatic reminders.",
            benefits: ["Patient files", "Appointment reminders", "Treatment history"]
          }
        ]
      },

      section5: {
        title: "Integration with Your Existing Tools",
        intro: "Our CRM integrates with the tools you already use:",
        integrations: [
          { name: "Accounting", tools: ["Sage", "PC Compta", "Excel"], description: "Invoice and payment synchronization" },
          { name: "Communication", tools: ["WhatsApp Business", "SMS", "Email"], description: "Send messages directly from CRM" },
          { name: "E-commerce", tools: ["WooCommerce", "PrestaShop", "Shopify"], description: "Automatic import of orders and customers" },
          { name: "Telephony", tools: ["VoIP", "PBX"], description: "Click-to-call and call history" }
        ]
      },

      section6: {
        title: "Transparent Pricing",
        intro: "Plans adapted to all business sizes:",
        plans: [
          {
            name: "Starter",
            price: "9,900 DA",
            period: "/month",
            users: "Up to 3 users",
            features: ["Unlimited contact management", "Sales pipeline", "Basic reports", "Email support"]
          },
          {
            name: "Business",
            price: "24,900 DA",
            period: "/month",
            users: "Up to 10 users",
            features: ["Everything in Starter +", "Marketing automation", "Advanced reports", "Priority support", "Training included"]
          },
          {
            name: "Enterprise",
            price: "Custom quote",
            period: "",
            users: "Unlimited users",
            features: ["Everything in Business +", "Full customization", "API & integrations", "Dedicated support", "Private hosting option"]
          }
        ]
      },

      section7: {
        title: "Training and Support",
        phases: [
          {
            title: "1. Discovery",
            description: "Analysis of your needs and personalized demonstration of the solution."
          },
          {
            title: "2. Configuration",
            description: "CRM setup according to your processes: pipeline stages, custom fields, users."
          },
          {
            title: "3. Data Import",
            description: "Migration of your existing data (Excel, old software) to the new CRM."
          },
          {
            title: "4. Training",
            description: "Training of your teams on-site or remotely, with French and Arabic materials."
          },
          {
            title: "5. Support",
            description: "Post-deployment follow-up to ensure adoption and answer questions."
          }
        ]
      },

      wilayas: {
        title: "We Serve the Entire Region",
        list: ["Setif", "Bordj Bou Arreridj", "M'sila", "Batna", "Bejaia", "Jijel", "Mila", "Constantine"]
      },

      cta: {
        title: "Ready to Better Manage Your Customers?",
        description: "Request a free demo of our CRM. Our consultants will show you how the solution can adapt to your business.",
        button: "Request a Free Demo",
        phone: "+213 549 575 512",
        email: "crm@symloop.com"
      },

      backToBlog: "Back to Blog"
    },
    ar: {
      title: "برنامج CRM في سطيف، برج بوعريريج والمسيلة",
      subtitle: "حل إدارة علاقات العملاء للشركات في شرق الجزائر",
      metaTitle: "برنامج CRM سطيف برج المسيلة 2026 | إدارة العملاء | Symloop",
      metaDesc: "برنامج CRM للشركات في سطيف، برج بوعريريج، المسيلة. إدارة العملاء، تتبع المبيعات، أتمتة التسويق. دعم محلي. عرض مجاني.",
      date: "5 يناير 2026",
      readTime: "12 دقيقة",
      author: "فريق Symloop",
      category: "برنامج CRM",

      intro: "تحتاج الشركات في سطيف وبرج بوعريريج والمسيلة إلى أدوات حديثة لإدارة علاقاتها مع العملاء. يتيح لك نظام CRM الجيد مركزة جهات الاتصال وتتبع فرص المبيعات وأتمتة إجراءات التسويق. تقدم Symloop حل CRM مكيف مع واقع السوق الجزائري.",

      tableOfContents: {
        title: "في هذا المقال",
        items: [
          "لماذا CRM لشركتك؟",
          "الميزات الرئيسية لـ CRM",
          "التكيف مع السوق المحلي",
          "حالات الاستخدام حسب القطاع",
          "التكامل مع أدواتك",
          "تسعير شفاف",
          "التدريب والدعم",
          "كيف تبدأ"
        ]
      },

      section1: {
        title: "لماذا تحتاج شركتك إلى CRM؟",
        paragraphs: [
          "في سوق تنافسي بشكل متزايد، معرفة عملائك أفضل من منافسيك ميزة حاسمة. يركز CRM جميع المعلومات عن عملائك والمحتملين: سجل التفاعلات، التفضيلات، المشتريات السابقة، والفرص الجارية.",
          "بدون CRM، معلومات العملاء متفرقة: دفاتر ملاحظات، ملفات Excel، ذاكرة البائعين. عندما يغادر موظف، جزء من معرفة العملاء يغادر معه. يحل CRM هذه المشكلة بإنشاء قاعدة بيانات مشتركة ودائمة.",
          "للشركات في سطيف والولايات المحيطة، CRM مكيف مع السياق المحلي (دعم عربي، تكامل مع أدوات الدفع الجزائرية، واجهة بديهية) يصنع كل الفرق."
        ],
        stats: [
          { value: "+29%", label: "زيادة المبيعات" },
          { value: "+34%", label: "إنتاجية المبيعات" },
          { value: "+42%", label: "الاحتفاظ بالعملاء" },
          { value: "-23%", label: "دورة المبيعات" }
        ]
      },

      section2: {
        title: "الميزات الرئيسية لـ CRM لدينا",
        features: [
          {
            title: "إدارة جهات الاتصال",
            description: "قاعدة بيانات مركزية لجميع عملائك والمحتملين مع سجل تفاعل كامل.",
            items: ["ملفات عملاء مفصلة", "سجل التبادلات", "تجزئة متقدمة", "استيراد/تصدير سهل"],
            icon: Users
          },
          {
            title: "خط أنابيب المبيعات",
            description: "تصور وإدارة فرص المبيعات من التنقيب إلى الإغلاق.",
            items: ["مراحل قابلة للتخصيص", "احتمالية الإغلاق", "قيمة خط الأنابيب", "توقعات المبيعات"],
            icon: TrendingUp
          },
          {
            title: "أتمتة التسويق",
            description: "أتمتة حملات البريد الإلكتروني والرسائل القصيرة وإجراءات المتابعة.",
            items: ["رسائل بريد تلقائية", "تسويق SMS", "تذكيرات تلقائية", "تسلسلات الرعاية"],
            icon: Zap
          },
          {
            title: "التقارير ولوحات المعلومات",
            description: "تتبع أدائك في الوقت الفعلي مع مؤشرات رئيسية ورسوم بيانية واضحة.",
            items: ["KPIs في الوقت الفعلي", "تقارير مخصصة", "تصدير PDF/Excel", "الأهداف والتتبع"],
            icon: BarChart3
          },
          {
            title: "إدارة المهام",
            description: "لا تفوت أي متابعة مع نظام مهام وتذكيرات متكامل.",
            items: ["تذكيرات تلقائية", "تعيين للفرق", "تقويم متكامل", "إشعارات فورية"],
            icon: CheckCircle
          },
          {
            title: "تطبيق الجوال",
            description: "الوصول إلى CRM من أي مكان، حتى بدون اتصال.",
            items: ["iOS و Android", "وضع عدم الاتصال", "مزامنة تلقائية", "ماسح بطاقات العمل"],
            icon: Phone
          }
        ]
      },

      section3: {
        title: "مكيف مع سوق سطيف وشرق الجزائر",
        intro: "تم تصميم CRM لدينا لتلبية الاحتياجات المحددة للشركات المحلية:",
        adaptations: [
          {
            title: "واجهة ثنائية اللغة",
            description: "واجهة كاملة بالفرنسية والعربية، مع دعم الكتابة RTL."
          },
          {
            title: "العملات المحلية",
            description: "إدارة أصلية للدينار الجزائري (دج)، مع دعم متعدد العملات للتصدير."
          },
          {
            title: "التقويم الجزائري",
            description: "يأخذ في الاعتبار العطل الجزائرية والتقويم الهجري."
          },
          {
            title: "دعم محلي",
            description: "فريق دعم مقره الجزائر، متاح عبر الهاتف وواتساب والبريد الإلكتروني."
          },
          {
            title: "تدريب في الموقع",
            description: "يتنقل مدربونا إلى سطيف وبرج والمسيلة لتدريب فرقك."
          },
          {
            title: "خيار الاستضافة المحلية",
            description: "إمكانية الاستضافة على خوادم في الجزائر للبيانات الحساسة."
          }
        ]
      },

      section4: {
        title: "حالات الاستخدام حسب قطاع النشاط",
        sectors: [
          {
            name: "تجارة الجملة",
            description: "إدارة عملاء التجزئة، تتبع الطلبات المتكررة، توقع إعادة التخزين.",
            benefits: ["تتبع الأحجام لكل عميل", "سجل الطلبات", "تذكيرات التجديد"]
          },
          {
            name: "خدمات الأعمال",
            description: "تتبع عقودك، إدارة التجديدات، أتمتة الفوترة المتكررة.",
            benefits: ["إدارة العقود", "تنبيهات انتهاء الصلاحية", "تتبع الرضا"]
          },
          {
            name: "العقارات",
            description: "إدارة قوائمك، تتبع الزيارات، مطابقة المشترين مع العقارات المتاحة.",
            benefits: ["قاعدة بيانات العقارات", "مطابقة تلقائية", "تتبع الزيارات"]
          },
          {
            name: "الصناعة والبناء",
            description: "تتبع مناقصاتك، إدارة عروض الأسعار المعقدة، الاحتفاظ بعملائك.",
            benefits: ["تتبع المناقصات", "سجل عروض الأسعار", "إدارة المشاريع"]
          },
          {
            name: "الصحة والعافية",
            description: "إدارة المرضى/العملاء، جدولة المواعيد، إرسال تذكيرات تلقائية.",
            benefits: ["ملفات المرضى", "تذكيرات المواعيد", "سجل العلاج"]
          }
        ]
      },

      section5: {
        title: "التكامل مع أدواتك الحالية",
        intro: "يتكامل CRM لدينا مع الأدوات التي تستخدمها بالفعل:",
        integrations: [
          { name: "المحاسبة", tools: ["Sage", "PC Compta", "Excel"], description: "مزامنة الفواتير والمدفوعات" },
          { name: "الاتصال", tools: ["WhatsApp Business", "SMS", "البريد"], description: "إرسال رسائل مباشرة من CRM" },
          { name: "التجارة الإلكترونية", tools: ["WooCommerce", "PrestaShop", "Shopify"], description: "استيراد تلقائي للطلبات والعملاء" },
          { name: "الهاتف", tools: ["VoIP", "مقسم"], description: "انقر للاتصال وسجل المكالمات" }
        ]
      },

      section6: {
        title: "تسعير شفاف",
        intro: "خطط مناسبة لجميع أحجام الشركات:",
        plans: [
          {
            name: "البداية",
            price: "9,900 دج",
            period: "/شهر",
            users: "حتى 3 مستخدمين",
            features: ["إدارة جهات اتصال غير محدودة", "خط أنابيب المبيعات", "تقارير أساسية", "دعم بالبريد"]
          },
          {
            name: "الأعمال",
            price: "24,900 دج",
            period: "/شهر",
            users: "حتى 10 مستخدمين",
            features: ["كل ميزات البداية +", "أتمتة التسويق", "تقارير متقدمة", "دعم ذو أولوية", "تدريب مشمول"]
          },
          {
            name: "المؤسسات",
            price: "عرض مخصص",
            period: "",
            users: "مستخدمون غير محدودين",
            features: ["كل ميزات الأعمال +", "تخصيص كامل", "API والتكاملات", "دعم مخصص", "خيار استضافة خاصة"]
          }
        ]
      },

      section7: {
        title: "التدريب والدعم",
        phases: [
          {
            title: "1. الاكتشاف",
            description: "تحليل احتياجاتك وعرض مخصص للحل."
          },
          {
            title: "2. التكوين",
            description: "إعداد CRM وفقًا لعملياتك: مراحل خط الأنابيب، الحقول المخصصة، المستخدمين."
          },
          {
            title: "3. استيراد البيانات",
            description: "ترحيل بياناتك الحالية (Excel، البرنامج القديم) إلى CRM الجديد."
          },
          {
            title: "4. التدريب",
            description: "تدريب فرقك في الموقع أو عن بُعد، مع مواد بالفرنسية والعربية."
          },
          {
            title: "5. المرافقة",
            description: "متابعة ما بعد النشر لضمان التبني والإجابة على الأسئلة."
          }
        ]
      },

      wilayas: {
        title: "نخدم المنطقة بأكملها",
        list: ["سطيف", "برج بوعريريج", "المسيلة", "باتنة", "بجاية", "جيجل", "ميلة", "قسنطينة"]
      },

      cta: {
        title: "مستعد لإدارة عملائك بشكل أفضل؟",
        description: "اطلب عرضًا مجانيًا لـ CRM لدينا. سيوضح لك مستشارونا كيف يمكن للحل أن يتكيف مع نشاطك.",
        button: "اطلب عرضًا مجانيًا",
        phone: "+213 549 575 512",
        email: "crm@symloop.com"
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
        <meta name="keywords" content="CRM Setif, logiciel gestion client, CRM Bordj Bou Arreridj, CRM M'sila, gestion commerciale, logiciel vente Algerie" />
        <link rel="canonical" href={`https://symloop.com/${locale === 'fr' ? '' : locale + '/'}blog/logiciel-crm-setif-bordj-msila-gestion-clients-2026`} />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDesc} />
        <meta property="og:type" content="article" />
      </Head>

      <main className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-black to-blue-500/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {t.backToBlog}
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
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
                <Layers className="w-5 h-5 text-green-400" />
                {t.tableOfContents.title}
              </h2>
              <ul className="space-y-3">
                {t.tableOfContents.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <span className="w-6 h-6 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-xs font-bold">{index + 1}</span>
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
                    <div className="text-2xl font-bold text-green-400">{stat.value}</div>
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
                      <div className="p-2 bg-green-500/20 rounded-lg"><f.icon className="w-5 h-5 text-green-400" /></div>
                      <h3 className="font-bold">{f.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{f.description}</p>
                    <ul className="space-y-1">
                      {f.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400" />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3 - Local Adaptation */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4">{t.section3.title}</h2>
              <p className="text-gray-300 mb-6">{t.section3.intro}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {t.section3.adaptations.map((a, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="font-bold mb-1 text-green-400">{a.title}</h3>
                    <p className="text-sm text-gray-400">{a.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4 - Sectors */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">{t.section4.title}</h2>
              <div className="space-y-4">
                {t.section4.sectors.map((s, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold mb-2">{s.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{s.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.benefits.map((b, j) => (
                        <span key={j} className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs">{b}</span>
                      ))}
                    </div>
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
                  <div key={i} className={`bg-white/5 border rounded-xl p-6 ${i === 1 ? 'border-green-500/50 ring-1 ring-green-500/20' : 'border-white/10'}`}>
                    <h3 className="font-bold text-xl mb-2">{p.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-green-400">{p.price}</span>
                      <span className="text-gray-400">{p.period}</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">{p.users}</p>
                    <ul className="space-y-2">
                      {p.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />{f}
                        </li>
                      ))}
                    </ul>
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
            <div className="bg-gradient-to-br from-green-500/20 via-blue-500/20 to-green-500/20 border border-green-500/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">{t.cta.title}</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">{t.cta.description}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={`tel:${t.cta.phone}`} className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors">
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
