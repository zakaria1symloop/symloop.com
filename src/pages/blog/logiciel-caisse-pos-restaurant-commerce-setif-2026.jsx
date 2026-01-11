import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

export default function LogicielCaissePOSSetif() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;
  const isRTL = locale === 'ar';

  const content = {
    fr: {
      title: "Logiciel de Caisse POS pour Restaurants et Commerces a Setif - Solution Complete 2026",
      metaDescription: "Logiciel de caisse enregistreuse POS pour restaurants, cafes, fast-food et commerces a Setif. Gestion des ventes, stocks, tickets de caisse et rapports. Installation et formation sur site.",
      keywords: "logiciel caisse Setif, POS restaurant Setif, caisse enregistreuse Algerie, logiciel point de vente, POS fast food, caisse tactile restaurant, logiciel commerce Setif, gestion restaurant Setif",

      heroTitle: "Logiciel de Caisse POS pour Restaurants et Commerces",
      heroSubtitle: "Solution complete de point de vente pour la restauration et le commerce de detail a Setif et dans l'Est algerien",

      introTitle: "Modernisez Votre Point de Vente a Setif",
      introText: "Dans le secteur competitif de la restauration et du commerce a Setif, un systeme de caisse performant fait toute la difference. Notre logiciel POS est specifiquement concu pour repondre aux besoins des restaurants, cafes, fast-foods, pizzerias, patisseries et commerces de detail algeriens. Avec une interface intuitive en arabe et francais, des fonctionnalites adaptees aux habitudes locales et un support technique de proximite, nous accompagnons les commercants de Setif vers la digitalisation de leur activite.",

      tocTitle: "Sommaire",
      tocItems: [
        "Pourquoi un logiciel POS moderne ?",
        "Fonctionnalites pour la restauration",
        "Solution pour le commerce de detail",
        "Materiel compatible",
        "Tarification transparente",
        "Zones d'intervention"
      ],

      whyPOSTitle: "Pourquoi Passer a un Logiciel POS Moderne ?",
      whyPOSItems: [
        {
          title: "Rapidite de Service",
          description: "Reduisez le temps d'attente de vos clients avec une prise de commande rapide sur ecran tactile. Ideal pour les heures de pointe dans les restaurants de Setif."
        },
        {
          title: "Zero Erreur de Caisse",
          description: "Eliminez les erreurs de calcul et les pertes. Chaque transaction est enregistree automatiquement avec tracabilite complete."
        },
        {
          title: "Gestion des Stocks en Temps Reel",
          description: "Suivez vos stocks automatiquement. Recevez des alertes quand un produit atteint le seuil minimum. Evitez les ruptures."
        },
        {
          title: "Rapports et Analyses",
          description: "Visualisez vos ventes par jour, semaine, mois. Identifiez vos produits stars et optimisez votre menu ou catalogue."
        },
        {
          title: "Conformite Fiscale",
          description: "Tickets de caisse conformes a la reglementation algerienne. Export des donnees pour votre comptable."
        },
        {
          title: "Fidelisation Client",
          description: "Integrez un programme de fidelite. Offrez des remises aux clients reguliers et boostez vos ventes."
        }
      ],

      restaurantTitle: "Solution POS Complete pour la Restauration",
      restaurantSubtitle: "Gerez votre restaurant, cafe ou fast-food avec efficacite",
      restaurantFeatures: [
        {
          title: "Gestion des Tables",
          items: [
            "Plan de salle interactif et personnalisable",
            "Statut des tables en temps reel (libre, occupee, a nettoyer)",
            "Fusion et separation de tables",
            "Reservation de tables avec rappels"
          ]
        },
        {
          title: "Prise de Commande",
          items: [
            "Commande sur tablette par le serveur",
            "Modifications et supplements faciles",
            "Notes speciales pour la cuisine (sans sel, bien cuit...)",
            "Envoi direct en cuisine sur ecran ou imprimante"
          ]
        },
        {
          title: "Cuisine Connectee",
          items: [
            "Ecran cuisine (KDS) pour les commandes",
            "Prioritisation des commandes",
            "Temps de preparation affiche",
            "Notification quand le plat est pret"
          ]
        },
        {
          title: "Gestion Menu",
          items: [
            "Creation de menus et formules",
            "Prix differents midi/soir",
            "Plats du jour facilement modifiables",
            "Photos des plats pour faciliter la vente"
          ]
        }
      ],

      retailTitle: "Solution pour le Commerce de Detail",
      retailSubtitle: "Gerez votre boutique, superette ou magasin",
      retailFeatures: [
        {
          title: "Gestion des Articles",
          items: [
            "Catalogue produits illimite",
            "Scan code-barres rapide",
            "Gestion des variantes (taille, couleur)",
            "Prix par quantite et promotions"
          ]
        },
        {
          title: "Gestion des Stocks",
          items: [
            "Inventaire automatise",
            "Alertes stock minimum",
            "Gestion multi-depots",
            "Historique des mouvements"
          ]
        },
        {
          title: "Ventes et Encaissements",
          items: [
            "Encaissement rapide",
            "Multi-moyens de paiement",
            "Vente a credit avec suivi",
            "Retours et echanges"
          ]
        },
        {
          title: "Clients et Fidelite",
          items: [
            "Fichier clients complet",
            "Historique d'achats",
            "Points de fidelite",
            "SMS promotionnels"
          ]
        }
      ],

      hardwareTitle: "Materiel POS Compatible",
      hardwareSubtitle: "Nous fournissons et installons tout l'equipement necessaire",
      hardwareItems: [
        {
          name: "Caisse Tactile",
          description: "Ecran tactile 15\" resistant, ideal pour environnement restaurant",
          price: "A partir de 85,000 DA"
        },
        {
          name: "Imprimante Tickets",
          description: "Impression thermique rapide 80mm, auto-cutter",
          price: "A partir de 25,000 DA"
        },
        {
          name: "Tiroir-Caisse",
          description: "Tiroir metallique robuste, ouverture automatique",
          price: "A partir de 15,000 DA"
        },
        {
          name: "Lecteur Code-Barres",
          description: "Scanner laser ou 2D, filaire ou sans fil",
          price: "A partir de 12,000 DA"
        },
        {
          name: "Tablette Serveur",
          description: "Tablette Android pour prise de commande mobile",
          price: "A partir de 35,000 DA"
        },
        {
          name: "Ecran Cuisine",
          description: "Ecran 19\" pour affichage des commandes en cuisine",
          price: "A partir de 45,000 DA"
        }
      ],

      sectorsTitle: "Secteurs d'Activite",
      sectorsSubtitle: "Notre POS s'adapte a votre metier",
      sectors: [
        { name: "Restaurants", icon: "🍽️", examples: "Restaurants traditionnels, grillades, restaurants familiaux" },
        { name: "Fast-Food", icon: "🍔", examples: "Pizzerias, tacos, sandwicheries, chawarma" },
        { name: "Cafes", icon: "☕", examples: "Cafes, salons de the, glaciers" },
        { name: "Patisseries", icon: "🍰", examples: "Patisseries, boulangeries, confiseries" },
        { name: "Superettes", icon: "🛒", examples: "Alimentation generale, epiceries, mini-markets" },
        { name: "Boutiques", icon: "👕", examples: "Vetements, chaussures, accessoires, cadeaux" },
        { name: "Pharmacies", icon: "💊", examples: "Pharmacies, parapharmacies (module specifique)" },
        { name: "Autres", icon: "🏪", examples: "Quincailleries, librairies, papeteries" }
      ],

      pricingTitle: "Tarification Claire et Accessible",
      pricingSubtitle: "Des formules adaptees a la taille de votre commerce",
      pricingPlans: [
        {
          name: "Starter",
          price: "35,000",
          period: "DA/an",
          description: "Ideal pour les petits commerces",
          features: [
            "1 point de caisse",
            "Gestion des ventes",
            "Tickets de caisse",
            "Rapports basiques",
            "Support telephonique"
          ],
          highlighted: false
        },
        {
          name: "Business",
          price: "65,000",
          period: "DA/an",
          description: "Pour restaurants et commerces actifs",
          features: [
            "Jusqu'a 3 points de caisse",
            "Gestion des stocks",
            "Gestion des tables (resto)",
            "Fidelite client",
            "Rapports avances",
            "Support prioritaire"
          ],
          highlighted: true
        },
        {
          name: "Premium",
          price: "120,000",
          period: "DA/an",
          description: "Multi-sites et chaines",
          features: [
            "Points de caisse illimites",
            "Multi-etablissements",
            "Ecran cuisine (KDS)",
            "API integrations",
            "Rapports personnalises",
            "Support dedie 24/7"
          ],
          highlighted: false
        }
      ],
      pricingNote: "Installation et formation incluses. Materiel en option.",

      servicesTitle: "Services Inclus",
      services: [
        {
          title: "Installation sur Site",
          description: "Nos techniciens se deplacent a Setif et environs pour installer et configurer votre systeme POS."
        },
        {
          title: "Formation Complete",
          description: "Formation de votre equipe (gerants, serveurs, caissiers) a l'utilisation du logiciel."
        },
        {
          title: "Migration des Donnees",
          description: "Transfert de votre catalogue produits depuis votre ancien systeme ou fichiers Excel."
        },
        {
          title: "Support Technique",
          description: "Assistance telephonique et intervention sur site en cas de probleme."
        }
      ],

      zonesTitle: "Zones d'Intervention",
      zonesSubtitle: "Installation et support de proximite",
      zones: [
        { name: "Setif", description: "Centre-ville, El Eulma, Ain Oulmene, Ain Arnat" },
        { name: "Bordj Bou Arreridj", description: "Ville, Ras El Oued, Bordj Ghedir" },
        { name: "M'sila", description: "Ville, Bou Saada, Sidi Aissa" },
        { name: "Batna", description: "Ville, Barika, Ain Touta" },
        { name: "Bejaia", description: "Ville, Akbou, Sidi Aich" },
        { name: "Constantine", description: "Ville, El Khroub, Ain Smara" }
      ],

      testimonialsTitle: "Ils Nous Font Confiance",
      testimonials: [
        {
          text: "Depuis qu'on a installe le POS Symloop, le service est beaucoup plus rapide. Les clients sont satisfaits et on ne fait plus d'erreurs de caisse.",
          author: "Karim B.",
          role: "Gerant de pizzeria, Setif"
        },
        {
          text: "La gestion des stocks est un vrai plus. Je sais exactement ce qu'il me reste et je ne rate plus jamais une vente par manque de produit.",
          author: "Samia M.",
          role: "Proprietaire boutique, El Eulma"
        }
      ],

      ctaTitle: "Digitalisez Votre Commerce des Aujourd'hui",
      ctaText: "Demandez une demonstration gratuite de notre solution POS. Nos commerciaux se deplacent a Setif et dans toute la region.",
      ctaButton: "Demander une Demo",
      ctaPhone: "+213 549 575 512",
      ctaEmail: "contact@symloop.com",

      faqTitle: "Questions Frequentes",
      faqItems: [
        {
          question: "Le logiciel fonctionne-t-il hors connexion ?",
          answer: "Oui, notre POS fonctionne en mode hors ligne. Les donnees se synchronisent automatiquement des que la connexion internet revient."
        },
        {
          question: "Peut-on utiliser notre materiel existant ?",
          answer: "Dans la plupart des cas, oui. Nous evaluons votre equipement et vous conseillons. Les imprimantes et tiroirs-caisse standards sont generalement compatibles."
        },
        {
          question: "Combien de temps prend l'installation ?",
          answer: "L'installation et la configuration prennent generalement une demi-journee. La formation de base peut etre faite le meme jour."
        },
        {
          question: "Y a-t-il un engagement de duree ?",
          answer: "L'abonnement est annuel mais sans engagement de reconduction. Vous pouvez arreter a la fin de votre periode."
        }
      ],

      relatedTitle: "Articles Connexes",
      backToBlog: "Retour au Blog"
    },
    en: {
      title: "POS Software for Restaurants and Retail in Setif - Complete Solution 2026",
      metaDescription: "POS cash register software for restaurants, cafes, fast-food and retail stores in Setif. Sales management, inventory, receipts and reports. On-site installation and training.",
      keywords: "POS software Setif, restaurant POS Algeria, cash register software, point of sale, fast food POS, touch screen register, retail software Setif, restaurant management",

      heroTitle: "POS Software for Restaurants and Retail",
      heroSubtitle: "Complete point of sale solution for restaurants and retail in Setif and Eastern Algeria",

      introTitle: "Modernize Your Point of Sale in Setif",
      introText: "In the competitive restaurant and retail sector in Setif, a high-performance POS system makes all the difference. Our POS software is specifically designed to meet the needs of Algerian restaurants, cafes, fast-food outlets, pizzerias, bakeries, and retail stores. With an intuitive interface in Arabic and French, features adapted to local habits, and nearby technical support, we help Setif merchants digitalize their business.",

      tocTitle: "Table of Contents",
      tocItems: [
        "Why modern POS software?",
        "Restaurant features",
        "Retail solution",
        "Compatible hardware",
        "Transparent pricing",
        "Service areas"
      ],

      whyPOSTitle: "Why Switch to Modern POS Software?",
      whyPOSItems: [
        {
          title: "Speed of Service",
          description: "Reduce customer wait times with quick touchscreen ordering. Ideal for peak hours in Setif restaurants."
        },
        {
          title: "Zero Cash Errors",
          description: "Eliminate calculation errors and losses. Every transaction is automatically recorded with full traceability."
        },
        {
          title: "Real-Time Inventory Management",
          description: "Track your stock automatically. Receive alerts when a product reaches minimum level. Avoid stockouts."
        },
        {
          title: "Reports and Analytics",
          description: "View your sales by day, week, month. Identify your star products and optimize your menu or catalog."
        },
        {
          title: "Tax Compliance",
          description: "Receipts compliant with Algerian regulations. Data export for your accountant."
        },
        {
          title: "Customer Loyalty",
          description: "Integrate a loyalty program. Offer discounts to regular customers and boost your sales."
        }
      ],

      restaurantTitle: "Complete POS Solution for Restaurants",
      restaurantSubtitle: "Efficiently manage your restaurant, cafe or fast-food",
      restaurantFeatures: [
        {
          title: "Table Management",
          items: [
            "Interactive and customizable floor plan",
            "Real-time table status (free, occupied, to clean)",
            "Merge and split tables",
            "Table reservations with reminders"
          ]
        },
        {
          title: "Order Taking",
          items: [
            "Tablet ordering by server",
            "Easy modifications and add-ons",
            "Special notes for kitchen (no salt, well done...)",
            "Direct send to kitchen on screen or printer"
          ]
        },
        {
          title: "Connected Kitchen",
          items: [
            "Kitchen display system (KDS)",
            "Order prioritization",
            "Preparation time displayed",
            "Notification when dish is ready"
          ]
        },
        {
          title: "Menu Management",
          items: [
            "Create menus and combos",
            "Different lunch/dinner prices",
            "Easily changeable daily specials",
            "Dish photos to facilitate sales"
          ]
        }
      ],

      retailTitle: "Retail Solution",
      retailSubtitle: "Manage your shop, convenience store or retail outlet",
      retailFeatures: [
        {
          title: "Item Management",
          items: [
            "Unlimited product catalog",
            "Fast barcode scanning",
            "Variant management (size, color)",
            "Quantity pricing and promotions"
          ]
        },
        {
          title: "Stock Management",
          items: [
            "Automated inventory",
            "Low stock alerts",
            "Multi-warehouse management",
            "Movement history"
          ]
        },
        {
          title: "Sales and Checkout",
          items: [
            "Fast checkout",
            "Multiple payment methods",
            "Credit sales with tracking",
            "Returns and exchanges"
          ]
        },
        {
          title: "Customers and Loyalty",
          items: [
            "Complete customer file",
            "Purchase history",
            "Loyalty points",
            "Promotional SMS"
          ]
        }
      ],

      hardwareTitle: "Compatible POS Hardware",
      hardwareSubtitle: "We supply and install all necessary equipment",
      hardwareItems: [
        {
          name: "Touch POS Terminal",
          description: "15\" resistant touchscreen, ideal for restaurant environment",
          price: "From 85,000 DA"
        },
        {
          name: "Receipt Printer",
          description: "Fast 80mm thermal printing, auto-cutter",
          price: "From 25,000 DA"
        },
        {
          name: "Cash Drawer",
          description: "Robust metal drawer, automatic opening",
          price: "From 15,000 DA"
        },
        {
          name: "Barcode Scanner",
          description: "Laser or 2D scanner, wired or wireless",
          price: "From 12,000 DA"
        },
        {
          name: "Server Tablet",
          description: "Android tablet for mobile order taking",
          price: "From 35,000 DA"
        },
        {
          name: "Kitchen Display",
          description: "19\" screen for displaying orders in kitchen",
          price: "From 45,000 DA"
        }
      ],

      sectorsTitle: "Business Sectors",
      sectorsSubtitle: "Our POS adapts to your business",
      sectors: [
        { name: "Restaurants", icon: "🍽️", examples: "Traditional restaurants, grills, family restaurants" },
        { name: "Fast-Food", icon: "🍔", examples: "Pizzerias, tacos, sandwich shops, shawarma" },
        { name: "Cafes", icon: "☕", examples: "Coffee shops, tea rooms, ice cream parlors" },
        { name: "Bakeries", icon: "🍰", examples: "Pastry shops, bakeries, confectioneries" },
        { name: "Convenience", icon: "🛒", examples: "General food stores, groceries, mini-markets" },
        { name: "Boutiques", icon: "👕", examples: "Clothing, shoes, accessories, gifts" },
        { name: "Pharmacies", icon: "💊", examples: "Pharmacies, health stores (specific module)" },
        { name: "Others", icon: "🏪", examples: "Hardware stores, bookstores, stationery" }
      ],

      pricingTitle: "Clear and Accessible Pricing",
      pricingSubtitle: "Plans adapted to your business size",
      pricingPlans: [
        {
          name: "Starter",
          price: "35,000",
          period: "DA/year",
          description: "Ideal for small businesses",
          features: [
            "1 POS station",
            "Sales management",
            "Receipts",
            "Basic reports",
            "Phone support"
          ],
          highlighted: false
        },
        {
          name: "Business",
          price: "65,000",
          period: "DA/year",
          description: "For active restaurants and stores",
          features: [
            "Up to 3 POS stations",
            "Stock management",
            "Table management (restaurant)",
            "Customer loyalty",
            "Advanced reports",
            "Priority support"
          ],
          highlighted: true
        },
        {
          name: "Premium",
          price: "120,000",
          period: "DA/year",
          description: "Multi-site and chains",
          features: [
            "Unlimited POS stations",
            "Multi-location",
            "Kitchen display (KDS)",
            "API integrations",
            "Custom reports",
            "Dedicated 24/7 support"
          ],
          highlighted: false
        }
      ],
      pricingNote: "Installation and training included. Hardware optional.",

      servicesTitle: "Included Services",
      services: [
        {
          title: "On-Site Installation",
          description: "Our technicians come to Setif and surroundings to install and configure your POS system."
        },
        {
          title: "Complete Training",
          description: "Training for your team (managers, servers, cashiers) on using the software."
        },
        {
          title: "Data Migration",
          description: "Transfer of your product catalog from your old system or Excel files."
        },
        {
          title: "Technical Support",
          description: "Phone support and on-site intervention in case of problems."
        }
      ],

      zonesTitle: "Service Areas",
      zonesSubtitle: "Local installation and support",
      zones: [
        { name: "Setif", description: "City center, El Eulma, Ain Oulmene, Ain Arnat" },
        { name: "Bordj Bou Arreridj", description: "City, Ras El Oued, Bordj Ghedir" },
        { name: "M'sila", description: "City, Bou Saada, Sidi Aissa" },
        { name: "Batna", description: "City, Barika, Ain Touta" },
        { name: "Bejaia", description: "City, Akbou, Sidi Aich" },
        { name: "Constantine", description: "City, El Khroub, Ain Smara" }
      ],

      testimonialsTitle: "They Trust Us",
      testimonials: [
        {
          text: "Since we installed Symloop POS, service is much faster. Customers are satisfied and we no longer make cash errors.",
          author: "Karim B.",
          role: "Pizzeria Manager, Setif"
        },
        {
          text: "Stock management is a real plus. I know exactly what I have left and never miss a sale due to lack of product.",
          author: "Samia M.",
          role: "Shop Owner, El Eulma"
        }
      ],

      ctaTitle: "Digitalize Your Business Today",
      ctaText: "Request a free demonstration of our POS solution. Our sales team travels to Setif and throughout the region.",
      ctaButton: "Request a Demo",
      ctaPhone: "+213 549 575 512",
      ctaEmail: "contact@symloop.com",

      faqTitle: "Frequently Asked Questions",
      faqItems: [
        {
          question: "Does the software work offline?",
          answer: "Yes, our POS works in offline mode. Data syncs automatically as soon as internet connection returns."
        },
        {
          question: "Can we use our existing equipment?",
          answer: "In most cases, yes. We evaluate your equipment and advise you. Standard printers and cash drawers are generally compatible."
        },
        {
          question: "How long does installation take?",
          answer: "Installation and configuration usually take half a day. Basic training can be done the same day."
        },
        {
          question: "Is there a commitment period?",
          answer: "The subscription is annual but with no renewal commitment. You can stop at the end of your period."
        }
      ],

      relatedTitle: "Related Articles",
      backToBlog: "Back to Blog"
    },
    ar: {
      title: "برنامج نقاط البيع POS للمطاعم والتجارة في سطيف - حل متكامل 2026",
      metaDescription: "برنامج صندوق الدفع POS للمطاعم والمقاهي والوجبات السريعة والمحلات التجارية في سطيف. إدارة المبيعات والمخزون والفواتير والتقارير. تثبيت وتدريب في الموقع.",
      keywords: "برنامج صندوق سطيف, POS مطعم الجزائر, برنامج نقاط البيع, كاشير مطعم, برنامج محل تجاري, إدارة مطعم سطيف",

      heroTitle: "برنامج نقاط البيع للمطاعم والتجارة",
      heroSubtitle: "حل متكامل لنقاط البيع للمطاعم والتجارة بالتجزئة في سطيف وشرق الجزائر",

      introTitle: "حدّث نقطة البيع الخاصة بك في سطيف",
      introText: "في قطاع المطاعم والتجارة التنافسي في سطيف، يصنع نظام نقاط البيع الفعال كل الفرق. برنامج POS الخاص بنا مصمم خصيصاً لتلبية احتياجات المطاعم والمقاهي والوجبات السريعة والمخابز والمحلات التجارية الجزائرية. مع واجهة سهلة الاستخدام بالعربية والفرنسية، وميزات مكيفة للعادات المحلية، ودعم فني قريب، نساعد تجار سطيف في رقمنة نشاطهم.",

      tocTitle: "الفهرس",
      tocItems: [
        "لماذا برنامج POS حديث؟",
        "ميزات المطاعم",
        "حل التجارة بالتجزئة",
        "الأجهزة المتوافقة",
        "التسعير الشفاف",
        "مناطق الخدمة"
      ],

      whyPOSTitle: "لماذا التحول إلى برنامج POS حديث؟",
      whyPOSItems: [
        {
          title: "سرعة الخدمة",
          description: "قلل وقت انتظار العملاء مع أخذ الطلبات السريع على الشاشة اللمسية. مثالي لأوقات الذروة في مطاعم سطيف."
        },
        {
          title: "صفر أخطاء في الصندوق",
          description: "تخلص من أخطاء الحساب والخسائر. كل معاملة مسجلة تلقائياً مع إمكانية التتبع الكامل."
        },
        {
          title: "إدارة المخزون في الوقت الفعلي",
          description: "تتبع مخزونك تلقائياً. استلم تنبيهات عندما يصل منتج للحد الأدنى. تجنب نفاد المخزون."
        },
        {
          title: "التقارير والتحليلات",
          description: "اعرض مبيعاتك يومياً وأسبوعياً وشهرياً. حدد منتجاتك النجمة وحسّن قائمتك أو كتالوجك."
        },
        {
          title: "التوافق الضريبي",
          description: "فواتير متوافقة مع اللوائح الجزائرية. تصدير البيانات لمحاسبك."
        },
        {
          title: "ولاء العملاء",
          description: "ادمج برنامج ولاء. قدم خصومات للعملاء المنتظمين وعزز مبيعاتك."
        }
      ],

      restaurantTitle: "حل POS متكامل للمطاعم",
      restaurantSubtitle: "أدر مطعمك أو مقهاك أو مطعم الوجبات السريعة بكفاءة",
      restaurantFeatures: [
        {
          title: "إدارة الطاولات",
          items: [
            "مخطط القاعة التفاعلي والقابل للتخصيص",
            "حالة الطاولات في الوقت الفعلي",
            "دمج وفصل الطاولات",
            "حجز الطاولات مع التذكيرات"
          ]
        },
        {
          title: "أخذ الطلبات",
          items: [
            "طلب على الجهاز اللوحي من النادل",
            "تعديلات وإضافات سهلة",
            "ملاحظات خاصة للمطبخ",
            "إرسال مباشر للمطبخ"
          ]
        },
        {
          title: "المطبخ المتصل",
          items: [
            "شاشة عرض المطبخ (KDS)",
            "تحديد أولويات الطلبات",
            "عرض وقت التحضير",
            "إشعار عندما يكون الطبق جاهز"
          ]
        },
        {
          title: "إدارة القائمة",
          items: [
            "إنشاء قوائم وعروض",
            "أسعار مختلفة غداء/عشاء",
            "أطباق اليوم قابلة للتغيير بسهولة",
            "صور الأطباق لتسهيل البيع"
          ]
        }
      ],

      retailTitle: "حل التجارة بالتجزئة",
      retailSubtitle: "أدر متجرك أو محلك التجاري",
      retailFeatures: [
        {
          title: "إدارة المنتجات",
          items: [
            "كتالوج منتجات غير محدود",
            "مسح الباركود السريع",
            "إدارة المتغيرات (الحجم، اللون)",
            "تسعير الكمية والعروض"
          ]
        },
        {
          title: "إدارة المخزون",
          items: [
            "جرد آلي",
            "تنبيهات المخزون المنخفض",
            "إدارة متعددة المستودعات",
            "سجل الحركات"
          ]
        },
        {
          title: "المبيعات والدفع",
          items: [
            "دفع سريع",
            "طرق دفع متعددة",
            "بيع بالائتمان مع التتبع",
            "الإرجاع والاستبدال"
          ]
        },
        {
          title: "العملاء والولاء",
          items: [
            "ملف عملاء كامل",
            "سجل المشتريات",
            "نقاط الولاء",
            "رسائل SMS ترويجية"
          ]
        }
      ],

      hardwareTitle: "أجهزة POS المتوافقة",
      hardwareSubtitle: "نوفر ونركب جميع المعدات اللازمة",
      hardwareItems: [
        {
          name: "شاشة لمسية POS",
          description: "شاشة لمسية 15 بوصة مقاومة، مثالية لبيئة المطاعم",
          price: "ابتداءً من 85,000 دج"
        },
        {
          name: "طابعة فواتير",
          description: "طباعة حرارية سريعة 80 ملم، قص تلقائي",
          price: "ابتداءً من 25,000 دج"
        },
        {
          name: "درج النقود",
          description: "درج معدني متين، فتح تلقائي",
          price: "ابتداءً من 15,000 دج"
        },
        {
          name: "قارئ الباركود",
          description: "ماسح ليزر أو 2D، سلكي أو لاسلكي",
          price: "ابتداءً من 12,000 دج"
        },
        {
          name: "جهاز لوحي للنادل",
          description: "جهاز لوحي أندرويد لأخذ الطلبات المتنقلة",
          price: "ابتداءً من 35,000 دج"
        },
        {
          name: "شاشة المطبخ",
          description: "شاشة 19 بوصة لعرض الطلبات في المطبخ",
          price: "ابتداءً من 45,000 دج"
        }
      ],

      sectorsTitle: "قطاعات الأعمال",
      sectorsSubtitle: "نظام POS يتكيف مع عملك",
      sectors: [
        { name: "مطاعم", icon: "🍽️", examples: "مطاعم تقليدية، مشاوي، مطاعم عائلية" },
        { name: "وجبات سريعة", icon: "🍔", examples: "بيتزا، تاكوس، سندويتشات، شاورما" },
        { name: "مقاهي", icon: "☕", examples: "مقاهي، صالونات شاي، محلات آيس كريم" },
        { name: "حلويات", icon: "🍰", examples: "حلويات، مخابز، حلوى" },
        { name: "محلات غذائية", icon: "🛒", examples: "بقالة عامة، ميني ماركت" },
        { name: "بوتيكات", icon: "👕", examples: "ملابس، أحذية، إكسسوارات، هدايا" },
        { name: "صيدليات", icon: "💊", examples: "صيدليات (وحدة خاصة)" },
        { name: "أخرى", icon: "🏪", examples: "خردوات، مكتبات، قرطاسية" }
      ],

      pricingTitle: "تسعير واضح وميسر",
      pricingSubtitle: "باقات مكيفة لحجم عملك",
      pricingPlans: [
        {
          name: "Starter",
          price: "35,000",
          period: "دج/سنة",
          description: "مثالي للأعمال الصغيرة",
          features: [
            "نقطة بيع واحدة",
            "إدارة المبيعات",
            "الفواتير",
            "تقارير أساسية",
            "دعم هاتفي"
          ],
          highlighted: false
        },
        {
          name: "Business",
          price: "65,000",
          period: "دج/سنة",
          description: "للمطاعم والمحلات النشطة",
          features: [
            "حتى 3 نقاط بيع",
            "إدارة المخزون",
            "إدارة الطاولات (مطعم)",
            "ولاء العملاء",
            "تقارير متقدمة",
            "دعم أولوية"
          ],
          highlighted: true
        },
        {
          name: "Premium",
          price: "120,000",
          period: "دج/سنة",
          description: "متعدد المواقع والسلاسل",
          features: [
            "نقاط بيع غير محدودة",
            "متعدد الفروع",
            "شاشة المطبخ (KDS)",
            "تكاملات API",
            "تقارير مخصصة",
            "دعم مخصص 24/7"
          ],
          highlighted: false
        }
      ],
      pricingNote: "التثبيت والتدريب مشمولان. الأجهزة اختيارية.",

      servicesTitle: "الخدمات المشمولة",
      services: [
        {
          title: "تثبيت في الموقع",
          description: "فنيونا يتنقلون إلى سطيف والمناطق المجاورة لتثبيت وتكوين نظام POS."
        },
        {
          title: "تدريب كامل",
          description: "تدريب فريقك (مديرين، نادلين، صرافين) على استخدام البرنامج."
        },
        {
          title: "ترحيل البيانات",
          description: "نقل كتالوج منتجاتك من نظامك القديم أو ملفات Excel."
        },
        {
          title: "دعم فني",
          description: "دعم هاتفي وتدخل في الموقع في حالة المشاكل."
        }
      ],

      zonesTitle: "مناطق الخدمة",
      zonesSubtitle: "تثبيت ودعم محلي",
      zones: [
        { name: "سطيف", description: "وسط المدينة، العلمة، عين ولمان، عين أرنات" },
        { name: "برج بوعريريج", description: "المدينة، راس الوادي، برج الغدير" },
        { name: "المسيلة", description: "المدينة، بوسعادة، سيدي عيسى" },
        { name: "باتنة", description: "المدينة، بريكة، عين التوتة" },
        { name: "بجاية", description: "المدينة، أقبو، سيدي عيش" },
        { name: "قسنطينة", description: "المدينة، الخروب، عين السمارة" }
      ],

      testimonialsTitle: "يثقون بنا",
      testimonials: [
        {
          text: "منذ تثبيت POS Symloop، الخدمة أسرع بكثير. العملاء راضون ولم نعد نرتكب أخطاء في الصندوق.",
          author: "كريم ب.",
          role: "مدير بيتزيريا، سطيف"
        },
        {
          text: "إدارة المخزون إضافة حقيقية. أعرف بالضبط ما تبقى لدي ولم أعد أفقد بيع بسبب نقص المنتج.",
          author: "سامية م.",
          role: "صاحبة متجر، العلمة"
        }
      ],

      ctaTitle: "رقمن عملك اليوم",
      ctaText: "اطلب عرضاً توضيحياً مجانياً لحل POS الخاص بنا. فريق المبيعات يتنقل إلى سطيف وفي جميع أنحاء المنطقة.",
      ctaButton: "اطلب عرضاً",
      ctaPhone: "+213 549 575 512",
      ctaEmail: "contact@symloop.com",

      faqTitle: "الأسئلة الشائعة",
      faqItems: [
        {
          question: "هل يعمل البرنامج بدون إنترنت؟",
          answer: "نعم، نظام POS يعمل في وضع عدم الاتصال. تتزامن البيانات تلقائياً بمجرد عودة الاتصال بالإنترنت."
        },
        {
          question: "هل يمكننا استخدام معداتنا الحالية؟",
          answer: "في معظم الحالات، نعم. نقيّم معداتك وننصحك. الطابعات وأدراج النقود القياسية متوافقة بشكل عام."
        },
        {
          question: "كم يستغرق التثبيت؟",
          answer: "التثبيت والتكوين يستغرقان عادة نصف يوم. يمكن إجراء التدريب الأساسي في نفس اليوم."
        },
        {
          question: "هل هناك التزام بفترة؟",
          answer: "الاشتراك سنوي ولكن بدون التزام بالتجديد. يمكنك التوقف في نهاية فترتك."
        }
      ],

      relatedTitle: "مقالات ذات صلة",
      backToBlog: "العودة للمدونة"
    }
  };

  const c = content[locale] || content.fr;

  return (
    <>
      <Head>
        <title>{c.title} | Symloop</title>
        <meta name="description" content={c.metaDescription} />
        <meta name="keywords" content={c.keywords} />
        <link rel="canonical" href={`https://symloop.com/${locale}/blog/logiciel-caisse-pos-restaurant-commerce-setif-2026`} />
        <meta property="og:title" content={c.title} />
        <meta property="og:description" content={c.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://symloop.com/${locale}/blog/logiciel-caisse-pos-restaurant-commerce-setif-2026`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={c.title} />
        <meta name="twitter:description" content={c.metaDescription} />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="DZ-19" />
        <meta name="geo.placename" content="Setif" />
        <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'} />
      </Head>

      <div className={`min-h-screen bg-gradient-to-br from-symloop-dark via-symloop-dark-lighter to-symloop-dark ${isRTL ? 'rtl' : 'ltr'}`}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-teal-500/10 to-cyan-500/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-6">
                POS & Point de Vente
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {c.heroTitle}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {c.heroSubtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={`tel:${c.ctaPhone}`} className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                  {c.ctaPhone}
                </a>
                <a href={`mailto:${c.ctaEmail}`} className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                  {c.ctaEmail}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-6">{c.introTitle}</h2>
                <p className="text-gray-300 text-lg leading-relaxed">{c.introText}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-2xl p-6 border border-green-500/20">
                <h3 className="text-xl font-bold text-white mb-4">{c.tocTitle}</h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {c.tocItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300">
                      <span className="w-6 h-6 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm">{index + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why POS */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{c.whyPOSTitle}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {c.whyPOSItems.map((item, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-white text-xl font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Restaurant Features */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.restaurantTitle}</h2>
                <p className="text-xl text-gray-400">{c.restaurantSubtitle}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {c.restaurantFeatures.map((feature, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </span>
                      {feature.title}
                    </h3>
                    <ul className="space-y-2">
                      {feature.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Retail Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.retailTitle}</h2>
                <p className="text-xl text-gray-400">{c.retailSubtitle}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {c.retailFeatures.map((feature, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                      </span>
                      {feature.title}
                    </h3>
                    <ul className="space-y-2">
                      {feature.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <svg className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hardware */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.hardwareTitle}</h2>
                <p className="text-xl text-gray-400">{c.hardwareSubtitle}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {c.hardwareItems.map((item, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300">
                    <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                    <p className="text-green-400 font-semibold">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.sectorsTitle}</h2>
                <p className="text-xl text-gray-400">{c.sectorsSubtitle}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {c.sectors.map((sector, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center hover:border-green-500/30 transition-all duration-300">
                    <span className="text-4xl mb-3 block">{sector.icon}</span>
                    <h3 className="text-white font-semibold mb-1">{sector.name}</h3>
                    <p className="text-gray-400 text-xs">{sector.examples}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.pricingTitle}</h2>
                <p className="text-xl text-gray-400">{c.pricingSubtitle}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {c.pricingPlans.map((plan, index) => (
                  <div key={index} className={`rounded-2xl p-8 border ${plan.highlighted ? 'bg-gradient-to-b from-green-500/20 to-teal-500/20 border-green-500/50' : 'bg-white/5 border-white/10'}`}>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300">
                          <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a href={`tel:${c.ctaPhone}`} className={`block text-center py-3 rounded-xl font-semibold transition-all duration-300 ${plan.highlighted ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white hover:shadow-lg hover:shadow-green-500/25' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                      {c.ctaButton}
                    </a>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-400 mt-6">{c.pricingNote}</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{c.servicesTitle}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {c.services.map((service, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Zones */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.zonesTitle}</h2>
                <p className="text-xl text-gray-400">{c.zonesSubtitle}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {c.zones.map((zone, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <h3 className="text-lg font-bold text-white">{zone.name}</h3>
                    </div>
                    <p className="text-gray-400">{zone.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{c.testimonialsTitle}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {c.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <svg className="w-8 h-8 text-green-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <p className="text-white font-semibold">{testimonial.author}</p>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{c.faqTitle}</h2>
              <div className="space-y-4">
                {c.faqItems.map((faq, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-green-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl p-12 border border-green-500/30 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.ctaTitle}</h2>
                <p className="text-xl text-gray-300 mb-8">{c.ctaText}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href={`tel:${c.ctaPhone}`} className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {c.ctaPhone}
                  </a>
                  <a href={`mailto:${c.ctaEmail}`} className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {c.ctaEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Blog */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link href="/blog" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                {c.backToBlog}
              </Link>
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
