import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShoppingCart,
  CreditCard,
  Truck,
  BarChart3,
  Smartphone,
  Shield,
  Package,
  DollarSign,
  Users,
  MapPin,
  Phone,
  Mail,
  CheckCircle
} from 'lucide-react';

const content = {
  fr: {
    meta: {
      title: "E-Commerce Sétif | Création Boutique en Ligne CIB EDAHABIA | Symloop 2026",
      description: "Création boutique en ligne à Sétif avec paiement CIB et EDAHABIA. Site e-commerce professionnel, gestion stock, livraison intégrée. Devis gratuit. +7 ans d'expérience.",
      keywords: "e-commerce sétif, boutique en ligne sétif, création site e-commerce sétif, paiement cib sétif, paiement edahabia sétif, vente en ligne sétif, site marchand sétif"
    },
    hero: {
      badge: "E-Commerce Algérie",
      title: "Boutique en Ligne",
      titleHighlight: "à Sétif",
      subtitle: "Lancez votre business en ligne avec une boutique e-commerce complète. Paiement CIB/EDAHABIA intégré, gestion des stocks, et suivi des livraisons.",
      cta1: "Créer Ma Boutique",
      cta2: "Voir Les Tarifs"
    },
    stats: [
      { value: "50+", label: "Boutiques Créées" },
      { value: "100K+", label: "Transactions Traitées" },
      { value: "99.9%", label: "Disponibilité" },
      { value: "24h", label: "Support Réactif" }
    ],
    features: {
      title: "Fonctionnalités E-Commerce",
      subtitle: "Tout ce dont vous avez besoin pour vendre en ligne",
      items: [
        {
          icon: "CreditCard",
          title: "Paiement CIB & EDAHABIA",
          description: "Acceptez les cartes CIB et EDAHABIA directement sur votre site. Intégration SATIM officielle et sécurisée."
        },
        {
          icon: "Package",
          title: "Gestion des Stocks",
          description: "Suivi en temps réel de vos stocks, alertes de rupture, gestion multi-entrepôts, inventaire automatisé."
        },
        {
          icon: "Truck",
          title: "Livraison Intégrée",
          description: "Connexion avec Yalidine, ZR Express, EMS. Calcul automatique des frais, suivi des colis en temps réel."
        },
        {
          icon: "Smartphone",
          title: "Mobile First",
          description: "Design responsive optimisé pour mobile. 70% de vos clients achèteront depuis leur smartphone."
        },
        {
          icon: "BarChart3",
          title: "Analytics & Rapports",
          description: "Tableau de bord complet : ventes, conversions, panier moyen, produits populaires, comportement clients."
        },
        {
          icon: "Shield",
          title: "Sécurité SSL",
          description: "Certificat SSL gratuit, protection des données clients, conformité aux normes de sécurité."
        }
      ]
    },
    packages: {
      title: "Forfaits E-Commerce",
      subtitle: "Choisissez le forfait adapté à votre activité",
      items: [
        {
          name: "Starter",
          price: "180,000",
          currency: "DA",
          description: "Idéal pour démarrer",
          features: [
            "Jusqu'à 100 produits",
            "Paiement CIB/EDAHABIA",
            "1 transporteur intégré",
            "Design responsive",
            "SSL gratuit",
            "3 mois support",
            "Formation incluse"
          ],
          popular: false
        },
        {
          name: "Business",
          price: "350,000",
          currency: "DA",
          description: "Pour les commerces établis",
          features: [
            "Produits illimités",
            "Tous les paiements",
            "Multi-transporteurs",
            "App mobile PWA",
            "Dashboard avancé",
            "6 mois support",
            "SEO optimisé",
            "Multi-langues"
          ],
          popular: true
        },
        {
          name: "Enterprise",
          price: "Sur devis",
          currency: "",
          description: "Solutions sur mesure",
          features: [
            "Tout de Business",
            "API personnalisée",
            "Intégration ERP",
            "Multi-boutiques",
            "Support prioritaire",
            "SLA garanti",
            "Formation équipe",
            "Développements custom"
          ],
          popular: false
        }
      ]
    },
    process: {
      title: "Comment Ça Marche",
      steps: [
        {
          number: "1",
          title: "Consultation Gratuite",
          description: "On discute de votre projet, vos produits, et vos objectifs commerciaux."
        },
        {
          number: "2",
          title: "Design & Développement",
          description: "Création de votre boutique avec votre charte graphique et vos produits."
        },
        {
          number: "3",
          title: "Configuration Paiements",
          description: "Intégration CIB/EDAHABIA et configuration des transporteurs."
        },
        {
          number: "4",
          title: "Formation & Lancement",
          description: "Formation sur la gestion de votre boutique et mise en ligne."
        }
      ]
    },
    sectors: {
      title: "Secteurs d'Activité",
      subtitle: "Solutions e-commerce pour tous les métiers",
      items: [
        "Mode & Vêtements",
        "Électronique & High-Tech",
        "Cosmétiques & Beauté",
        "Alimentation & Traiteur",
        "Artisanat & Fait Main",
        "Sports & Loisirs",
        "Maison & Décoration",
        "Bijoux & Accessoires",
        "Livres & Papeterie",
        "Bébé & Puériculture"
      ]
    },
    testimonials: {
      title: "Ils Nous Font Confiance",
      items: [
        {
          name: "Boutique Nour",
          sector: "Mode Féminine - Sétif",
          text: "Notre chiffre d'affaires a triplé depuis le lancement de notre boutique en ligne. Le paiement CIB a tout changé !"
        },
        {
          name: "Tech Zone 19",
          sector: "Électronique - El Eulma",
          text: "Excellente équipe, très réactive. Notre site génère plus de 200 commandes par mois maintenant."
        },
        {
          name: "Saveurs d'Orient",
          sector: "Traiteur - Sétif",
          text: "La gestion des commandes et livraisons est devenue un jeu d'enfant. Merci Symloop !"
        }
      ]
    },
    faq: {
      title: "Questions Fréquentes",
      items: [
        {
          question: "Comment fonctionne le paiement CIB/EDAHABIA ?",
          answer: "Symloop intègre la passerelle SATIM officielle. Vos clients paient directement sur votre site avec leur carte CIB ou EDAHABIA. Les fonds sont virés sur votre compte bancaire sous 24-48h. Contactez-nous au +213 549 575 512 pour en savoir plus."
        },
        {
          question: "Quels transporteurs sont intégrés ?",
          answer: "Symloop intègre Yalidine, ZR Express, EMS, et autres transporteurs sur demande. Le calcul des frais et le suivi des colis sont automatiques. Appelez le +213 549 575 512 pour discuter de vos besoins."
        },
        {
          question: "Puis-je gérer ma boutique moi-même ?",
          answer: "Oui ! L'interface d'administration Symloop est simple et intuitive. Nous vous formons sur l'ajout de produits, la gestion des commandes, et les rapports. Contactez le +213 549 575 512 pour une démo."
        },
        {
          question: "Combien de temps pour créer ma boutique ?",
          answer: "Chez Symloop, une boutique Starter est prête en 2-3 semaines. Un projet Business prend 4-6 semaines selon la complexité et le nombre de produits. Appelez le +213 549 575 512 pour démarrer."
        },
        {
          question: "Y a-t-il des frais mensuels ?",
          answer: "L'hébergement et le SSL sont inclus la première année chez Symloop. Ensuite, comptez environ 5,000 DA/mois pour l'hébergement professionnel. Contactez-nous au +213 549 575 512 pour les détails."
        }
      ]
    },
    coverage: {
      title: "Livraison Partout en Algérie",
      description: "Vos clients de Sétif, Alger, Oran ou n'importe quelle wilaya peuvent commander et payer en ligne",
      areas: ["Sétif", "Alger", "Oran", "Constantine", "Annaba", "Blida", "Batna", "Djelfa", "Tlemcen", "Béjaïa", "Toute l'Algérie"]
    },
    cta: {
      title: "Prêt à Vendre en Ligne ?",
      subtitle: "Rejoignez les centaines de commerçants qui ont digitalisé leur activité avec Symloop.",
      button: "Demander un Devis Gratuit",
      phone: "+213 549 57 55 12",
      email: "contact@symloop.com"
    }
  },
  ar: {
    meta: {
      title: "تجارة إلكترونية سطيف | إنشاء متجر إلكتروني CIB EDAHABIA | سيملوب 2026",
      description: "إنشاء متجر إلكتروني في سطيف مع دفع CIB و EDAHABIA. موقع تجارة إلكترونية احترافي، إدارة المخزون، التوصيل المدمج. عرض أسعار مجاني. +7 سنوات خبرة.",
      keywords: "تجارة إلكترونية سطيف, متجر إلكتروني سطيف, إنشاء موقع تجارة إلكترونية سطيف, دفع cib سطيف, دفع edahabia سطيف, بيع عبر الإنترنت سطيف"
    },
    hero: {
      badge: "التجارة الإلكترونية الجزائر",
      title: "متجر إلكتروني",
      titleHighlight: "في سطيف",
      subtitle: "أطلق عملك عبر الإنترنت مع متجر إلكتروني متكامل. دفع CIB/EDAHABIA مدمج، إدارة المخزون، وتتبع التوصيل.",
      cta1: "إنشاء متجري",
      cta2: "عرض الأسعار"
    },
    stats: [
      { value: "+50", label: "متجر تم إنشاؤه" },
      { value: "+100K", label: "معاملة معالجة" },
      { value: "99.9%", label: "توافرية" },
      { value: "24س", label: "دعم سريع" }
    ],
    features: {
      title: "ميزات التجارة الإلكترونية",
      subtitle: "كل ما تحتاجه للبيع عبر الإنترنت",
      items: [
        {
          icon: "CreditCard",
          title: "دفع CIB و EDAHABIA",
          description: "اقبل بطاقات CIB و EDAHABIA مباشرة على موقعك. تكامل SATIM الرسمي والآمن."
        },
        {
          icon: "Package",
          title: "إدارة المخزون",
          description: "تتبع فوري للمخزون، تنبيهات النفاد، إدارة متعددة المستودعات، جرد آلي."
        },
        {
          icon: "Truck",
          title: "التوصيل المدمج",
          description: "اتصال مع Yalidine، ZR Express، EMS. حساب آلي للتكاليف، تتبع الطرود في الوقت الحقيقي."
        },
        {
          icon: "Smartphone",
          title: "الجوال أولاً",
          description: "تصميم متجاوب محسن للجوال. 70% من عملائك سيشترون من هواتفهم الذكية."
        },
        {
          icon: "BarChart3",
          title: "التحليلات والتقارير",
          description: "لوحة تحكم شاملة: المبيعات، التحويلات، متوسط السلة، المنتجات الشائعة، سلوك العملاء."
        },
        {
          icon: "Shield",
          title: "أمان SSL",
          description: "شهادة SSL مجانية، حماية بيانات العملاء، امتثال لمعايير الأمان."
        }
      ]
    },
    packages: {
      title: "باقات التجارة الإلكترونية",
      subtitle: "اختر الباقة المناسبة لنشاطك",
      items: [
        {
          name: "المبتدئ",
          price: "180,000",
          currency: "دج",
          description: "مثالي للبداية",
          features: [
            "حتى 100 منتج",
            "دفع CIB/EDAHABIA",
            "شركة توصيل واحدة",
            "تصميم متجاوب",
            "SSL مجاني",
            "3 أشهر دعم",
            "تدريب مشمول"
          ],
          popular: false
        },
        {
          name: "الأعمال",
          price: "350,000",
          currency: "دج",
          description: "للتجار الراسخين",
          features: [
            "منتجات غير محدودة",
            "جميع طرق الدفع",
            "متعدد شركات التوصيل",
            "تطبيق PWA للجوال",
            "لوحة تحكم متقدمة",
            "6 أشهر دعم",
            "SEO محسن",
            "متعدد اللغات"
          ],
          popular: true
        },
        {
          name: "المؤسسات",
          price: "حسب الطلب",
          currency: "",
          description: "حلول مخصصة",
          features: [
            "كل ميزات الأعمال",
            "API مخصصة",
            "تكامل ERP",
            "متعدد المتاجر",
            "دعم أولوي",
            "SLA مضمون",
            "تدريب الفريق",
            "تطويرات مخصصة"
          ],
          popular: false
        }
      ]
    },
    process: {
      title: "كيف يعمل",
      steps: [
        {
          number: "1",
          title: "استشارة مجانية",
          description: "نناقش مشروعك، منتجاتك، وأهدافك التجارية."
        },
        {
          number: "2",
          title: "التصميم والتطوير",
          description: "إنشاء متجرك بهويتك البصرية ومنتجاتك."
        },
        {
          number: "3",
          title: "تكوين الدفع",
          description: "تكامل CIB/EDAHABIA وتكوين شركات التوصيل."
        },
        {
          number: "4",
          title: "التدريب والإطلاق",
          description: "تدريب على إدارة متجرك والإطلاق."
        }
      ]
    },
    sectors: {
      title: "قطاعات النشاط",
      subtitle: "حلول تجارة إلكترونية لجميع المهن",
      items: [
        "الموضة والملابس",
        "الإلكترونيات والتقنية",
        "مستحضرات التجميل والجمال",
        "الأغذية والطعام",
        "الحرف اليدوية",
        "الرياضة والترفيه",
        "المنزل والديكور",
        "المجوهرات والإكسسوارات",
        "الكتب والقرطاسية",
        "مستلزمات الأطفال"
      ]
    },
    testimonials: {
      title: "يثقون بنا",
      items: [
        {
          name: "بوتيك نور",
          sector: "أزياء نسائية - سطيف",
          text: "تضاعف حجم أعمالنا ثلاث مرات منذ إطلاق متجرنا الإلكتروني. دفع CIB غير كل شيء!"
        },
        {
          name: "تيك زون 19",
          sector: "إلكترونيات - العلمة",
          text: "فريق ممتاز، سريع الاستجابة. موقعنا يولد أكثر من 200 طلب شهرياً الآن."
        },
        {
          name: "نكهات الشرق",
          sector: "طعام - سطيف",
          text: "أصبحت إدارة الطلبات والتوصيل سهلة جداً. شكراً سيملوب!"
        }
      ]
    },
    faq: {
      title: "أسئلة شائعة",
      items: [
        {
          question: "كيف يعمل دفع CIB/EDAHABIA؟",
          answer: "نقوم بتكامل بوابة SATIM الرسمية. عملاؤك يدفعون مباشرة على موقعك ببطاقة CIB أو EDAHABIA. الأموال تحول لحسابك البنكي خلال 24-48 ساعة."
        },
        {
          question: "ما هي شركات التوصيل المدمجة؟",
          answer: "نقوم بتكامل Yalidine، ZR Express، EMS، وشركات أخرى حسب الطلب. حساب التكاليف وتتبع الطرود آلي."
        },
        {
          question: "هل يمكنني إدارة متجري بنفسي؟",
          answer: "نعم! واجهة الإدارة بسيطة وسهلة. ندربك على إضافة المنتجات، إدارة الطلبات، والتقارير."
        },
        {
          question: "كم يستغرق إنشاء متجري؟",
          answer: "متجر المبتدئ جاهز في 2-3 أسابيع. مشروع الأعمال يأخذ 4-6 أسابيع حسب التعقيد وعدد المنتجات."
        },
        {
          question: "هل هناك رسوم شهرية؟",
          answer: "الاستضافة و SSL مشمولة السنة الأولى. بعدها، حوالي 5,000 دج/شهر للاستضافة الاحترافية."
        }
      ]
    },
    coverage: {
      title: "توصيل لكل الجزائر",
      description: "عملاؤك من سطيف، الجزائر العاصمة، وهران أو أي ولاية يمكنهم الطلب والدفع عبر الإنترنت",
      areas: ["سطيف", "الجزائر", "وهران", "قسنطينة", "عنابة", "البليدة", "باتنة", "الجلفة", "تلمسان", "بجاية", "كل الجزائر"]
    },
    cta: {
      title: "جاهز للبيع عبر الإنترنت؟",
      subtitle: "انضم إلى مئات التجار الذين رقمنوا نشاطهم مع سيملوب.",
      button: "طلب عرض أسعار مجاني",
      phone: "+213 549 57 55 12",
      email: "contact@symloop.com"
    }
  },
  en: {
    meta: {
      title: "E-Commerce Setif | Online Store Creation CIB EDAHABIA | Symloop 2026",
      description: "Online store creation in Setif with CIB and EDAHABIA payment. Professional e-commerce website, inventory management, integrated delivery. Free quote. 7+ years experience.",
      keywords: "e-commerce setif, online store setif, e-commerce site creation setif, cib payment setif, edahabia payment setif, online selling setif, merchant site setif"
    },
    hero: {
      badge: "E-Commerce Algeria",
      title: "Online Store",
      titleHighlight: "in Setif",
      subtitle: "Launch your online business with a complete e-commerce store. Integrated CIB/EDAHABIA payment, inventory management, and delivery tracking.",
      cta1: "Create My Store",
      cta2: "View Pricing"
    },
    stats: [
      { value: "50+", label: "Stores Created" },
      { value: "100K+", label: "Transactions Processed" },
      { value: "99.9%", label: "Uptime" },
      { value: "24h", label: "Responsive Support" }
    ],
    features: {
      title: "E-Commerce Features",
      subtitle: "Everything you need to sell online",
      items: [
        {
          icon: "CreditCard",
          title: "CIB & EDAHABIA Payment",
          description: "Accept CIB and EDAHABIA cards directly on your site. Official and secure SATIM integration."
        },
        {
          icon: "Package",
          title: "Inventory Management",
          description: "Real-time stock tracking, out-of-stock alerts, multi-warehouse management, automated inventory."
        },
        {
          icon: "Truck",
          title: "Integrated Delivery",
          description: "Connection with Yalidine, ZR Express, EMS. Automatic cost calculation, real-time package tracking."
        },
        {
          icon: "Smartphone",
          title: "Mobile First",
          description: "Responsive design optimized for mobile. 70% of your customers will buy from their smartphone."
        },
        {
          icon: "BarChart3",
          title: "Analytics & Reports",
          description: "Complete dashboard: sales, conversions, average cart, popular products, customer behavior."
        },
        {
          icon: "Shield",
          title: "SSL Security",
          description: "Free SSL certificate, customer data protection, security standards compliance."
        }
      ]
    },
    packages: {
      title: "E-Commerce Packages",
      subtitle: "Choose the package suited to your business",
      items: [
        {
          name: "Starter",
          price: "180,000",
          currency: "DZD",
          description: "Ideal for getting started",
          features: [
            "Up to 100 products",
            "CIB/EDAHABIA payment",
            "1 integrated carrier",
            "Responsive design",
            "Free SSL",
            "3 months support",
            "Training included"
          ],
          popular: false
        },
        {
          name: "Business",
          price: "350,000",
          currency: "DZD",
          description: "For established businesses",
          features: [
            "Unlimited products",
            "All payment methods",
            "Multi-carriers",
            "PWA mobile app",
            "Advanced dashboard",
            "6 months support",
            "SEO optimized",
            "Multi-language"
          ],
          popular: true
        },
        {
          name: "Enterprise",
          price: "Custom quote",
          currency: "",
          description: "Custom solutions",
          features: [
            "Everything in Business",
            "Custom API",
            "ERP integration",
            "Multi-stores",
            "Priority support",
            "Guaranteed SLA",
            "Team training",
            "Custom developments"
          ],
          popular: false
        }
      ]
    },
    process: {
      title: "How It Works",
      steps: [
        {
          number: "1",
          title: "Free Consultation",
          description: "We discuss your project, products, and business goals."
        },
        {
          number: "2",
          title: "Design & Development",
          description: "Creating your store with your branding and products."
        },
        {
          number: "3",
          title: "Payment Configuration",
          description: "CIB/EDAHABIA integration and carrier configuration."
        },
        {
          number: "4",
          title: "Training & Launch",
          description: "Training on managing your store and going live."
        }
      ]
    },
    sectors: {
      title: "Business Sectors",
      subtitle: "E-commerce solutions for all trades",
      items: [
        "Fashion & Clothing",
        "Electronics & High-Tech",
        "Cosmetics & Beauty",
        "Food & Catering",
        "Crafts & Handmade",
        "Sports & Leisure",
        "Home & Decor",
        "Jewelry & Accessories",
        "Books & Stationery",
        "Baby & Childcare"
      ]
    },
    testimonials: {
      title: "They Trust Us",
      items: [
        {
          name: "Boutique Nour",
          sector: "Women's Fashion - Setif",
          text: "Our revenue tripled since launching our online store. CIB payment changed everything!"
        },
        {
          name: "Tech Zone 19",
          sector: "Electronics - El Eulma",
          text: "Excellent team, very responsive. Our site generates over 200 orders per month now."
        },
        {
          name: "Oriental Flavors",
          sector: "Catering - Setif",
          text: "Order and delivery management has become child's play. Thanks Symloop!"
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How does CIB/EDAHABIA payment work?",
          answer: "We integrate the official SATIM gateway. Your customers pay directly on your site with their CIB or EDAHABIA card. Funds are transferred to your bank account within 24-48h."
        },
        {
          question: "What carriers are integrated?",
          answer: "We integrate Yalidine, ZR Express, EMS, and other carriers on request. Cost calculation and package tracking are automatic."
        },
        {
          question: "Can I manage my store myself?",
          answer: "Yes! Our admin interface is simple and intuitive. We train you on adding products, managing orders, and reports."
        },
        {
          question: "How long to create my store?",
          answer: "A Starter store is ready in 2-3 weeks. A Business project takes 4-6 weeks depending on complexity and number of products."
        },
        {
          question: "Are there monthly fees?",
          answer: "Hosting and SSL are included the first year. After that, expect about 5,000 DZD/month for professional hosting."
        }
      ]
    },
    coverage: {
      title: "Delivery Everywhere in Algeria",
      description: "Your customers from Setif, Algiers, Oran or any wilaya can order and pay online",
      areas: ["Setif", "Algiers", "Oran", "Constantine", "Annaba", "Blida", "Batna", "Djelfa", "Tlemcen", "Bejaia", "All Algeria"]
    },
    cta: {
      title: "Ready to Sell Online?",
      subtitle: "Join hundreds of merchants who have digitized their business with Symloop.",
      button: "Request a Free Quote",
      phone: "+213 549 57 55 12",
      email: "contact@symloop.com"
    }
  }
};

const iconComponents = {
  CreditCard,
  Package,
  Truck,
  Smartphone,
  BarChart3,
  Shield
};

export default function ECommerceSetif() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;
  const isRTL = locale === 'ar';
  const c = content[locale] || content.fr;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://symloop.com/blog/e-commerce-setif-2026",
    "name": "Symloop - E-Commerce Sétif",
    "alternateName": ["سيملوب تجارة إلكترونية سطيف", "Symloop E-Commerce Setif"],
    "description": c.meta.description,
    "url": "https://symloop.com/blog/e-commerce-setif-2026",
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
    "areaServed": {
      "@type": "Country",
      "name": "Algeria"
    },
    "priceRange": "180000 DZD - 500000 DZD",
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "E-Commerce Sétif", "item": "https://symloop.com/blog/e-commerce-setif-2026" }
    ]
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".en-bref"]
    }
  };

  return (
    <>
      <Head>
        <title>{c.meta.title}</title>
        <meta name="description" content={c.meta.description} />
        <meta name="keywords" content={c.meta.keywords} />
        <link rel="canonical" href={`https://symloop.com${locale !== 'fr' ? '/' + locale : ''}/blog/e-commerce-setif-2026`} />

        {/* Geo Meta Tags */}
        <meta name="geo.region" content="DZ-19" />
        <meta name="geo.placename" content="Sétif, Algeria" />
        <meta name="geo.position" content="36.1919;5.4138" />
        <meta name="ICBM" content="36.1919, 5.4138" />

        {/* Open Graph */}
        <meta property="og:title" content={c.meta.title} />
        <meta property="og:description" content={c.meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://symloop.com/blog/e-commerce-setif-2026`} />
        <meta property="og:locale" content={locale === 'ar' ? 'ar_DZ' : locale === 'en' ? 'en_US' : 'fr_DZ'} />

        {/* Hreflang */}
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/blog/e-commerce-setif-2026" />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/blog/e-commerce-setif-2026" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/en/blog/e-commerce-setif-2026" />
        <link rel="alternate" hrefLang="x-default" href="https://symloop.com/blog/e-commerce-setif-2026" />

        {/* Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      </Head>

      <div className={`min-h-screen bg-slate-950 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-slate-950 to-teal-900/20" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium mb-6">
                <ShoppingCart className="w-4 h-4" />
                {c.hero.badge}
              </span>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {c.hero.title}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  {c.hero.titleHighlight}
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                {c.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-500 hover:to-teal-500 transition-all shadow-lg shadow-emerald-500/25">
                  {c.hero.cta1}
                </Link>
                <a href="#packages" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20">
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
                  <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* En bref - LLM Block */}
        <section className="py-6 bg-emerald-900/40 border-l-4 border-emerald-400">
          <div className="container mx-auto px-4">
            <p className="en-bref text-lg text-slate-200 font-medium max-w-4xl mx-auto">
              <strong className="text-emerald-300">En bref :</strong> Symloop crée des boutiques e-commerce à Sétif avec paiement CIB/Edahabia. Gestion produits, commandes, livraison. Basé à Sétif. Contact: +213 549 575 512.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.features.title}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">{c.features.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.features.items.map((feature, index) => {
                const Icon = iconComponents[feature.icon];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                      {Icon && <Icon className="w-6 h-6 text-emerald-400" />}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-slate-400">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section id="packages" className="py-20">
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
                      ? 'bg-gradient-to-br from-emerald-900/50 to-teal-900/50 border-2 border-emerald-500/50'
                      : 'bg-slate-800/50 border border-slate-700/50'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-sm font-medium rounded-full">
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
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full block text-center py-3 rounded-xl font-semibold transition-all ${
                      pkg.popular
                        ? 'bg-emerald-500 text-white hover:bg-emerald-400'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {locale === 'ar' ? 'اختر هذه الباقة' : locale === 'en' ? 'Choose This Package' : 'Choisir Ce Forfait'}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{c.process.title}</h2>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {c.process.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </motion.div>
              ))}
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

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {c.sectors.items.map((sector, index) => (
                <span
                  key={index}
                  className="px-5 py-3 rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:border-emerald-500/50 transition-all"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{c.testimonials.title}</h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {c.testimonials.items.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50"
                >
                  <p className="text-slate-300 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-emerald-400 text-sm">{testimonial.sector}</p>
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
              <Truck className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.coverage.title}</h2>
              <p className="text-slate-400 mb-8">{c.coverage.description}</p>

              <div className="flex flex-wrap justify-center gap-3">
                {c.coverage.areas.map((area, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Articles Connexes */}
        <section className="py-16 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Articles Connexes</h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <Link href="/blog/ecommerce-algerie-paiement-cib-edahabia-2024" className="block p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 transition-all group">
                <span className="font-semibold text-white group-hover:text-emerald-400 transition-colors">E-commerce Algérie - Paiement CIB/Edahabia</span>
                <p className="text-slate-400 text-sm mt-1">Guide complet du paiement en ligne en Algérie</p>
              </Link>
              <Link href="/blog/developpement-site-web-algerie-2026" className="block p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 transition-all group">
                <span className="font-semibold text-white group-hover:text-emerald-400 transition-colors">Développement Site Web Algérie 2026</span>
                <p className="text-slate-400 text-sm mt-1">Guide complet du développement web en Algérie</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-900/30 to-teal-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.cta.title}</h2>
              <p className="text-slate-300 mb-8">{c.cta.subtitle}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href={`tel:${c.cta.phone}`}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  {c.cta.phone}
                </a>
                <a
                  href={`mailto:${c.cta.email}`}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  {c.cta.email}
                </a>
              </div>

              <Link
                href="/contact"
                className="inline-flex px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-500 hover:to-teal-500 transition-all shadow-lg shadow-emerald-500/25"
              >
                {c.cta.button}
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
