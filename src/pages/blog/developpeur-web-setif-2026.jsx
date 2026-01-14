import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Code,
  Terminal,
  Cpu,
  Server,
  Cloud,
  Shield,
  Users,
  GraduationCap,
  CheckCircle,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const content = {
  fr: {
    meta: {
      title: "Développeur Web Sétif | Expert Programmation Web & Applications | Symloop 2026",
      description: "Développeur web professionnel à Sétif. Expert en React, Next.js, Node.js, PHP, Python. +7 ans d'expérience. Création sites web, applications, e-commerce. Devis gratuit.",
      keywords: "développeur web sétif, programmeur sétif, développeur freelance sétif, expert web sétif, développeur react sétif, développeur php sétif, développeur python sétif, création site web sétif"
    },
    hero: {
      badge: "Développeur Expert à Sétif",
      title: "Développeur Web",
      titleHighlight: "Professionnel à Sétif",
      subtitle: "Équipe de développeurs seniors avec +7 ans d'expérience. Maîtrise complète des technologies modernes : React, Next.js, Node.js, PHP, Python, et plus.",
      cta1: "Discuter de Votre Projet",
      cta2: "Voir Nos Réalisations"
    },
    stats: [
      { value: "7+", label: "Années d'Expérience" },
      { value: "150+", label: "Projets Livrés" },
      { value: "50+", label: "Clients Satisfaits" },
      { value: "24h", label: "Temps de Réponse" }
    ],
    expertise: {
      title: "Nos Expertises Techniques",
      subtitle: "Stack technologique moderne pour des solutions performantes",
      categories: [
        {
          title: "Frontend",
          icon: "Code",
          skills: ["React.js / Next.js", "Vue.js / Nuxt.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
        },
        {
          title: "Backend",
          icon: "Server",
          skills: ["Node.js / Express", "PHP / Laravel", "Python / Django", "API REST / GraphQL", "WebSocket"]
        },
        {
          title: "Base de Données",
          icon: "Cpu",
          skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"]
        },
        {
          title: "DevOps & Cloud",
          icon: "Cloud",
          skills: ["AWS / GCP", "Docker / Kubernetes", "CI/CD Pipelines", "Linux Server", "Nginx / Apache"]
        }
      ]
    },
    services: {
      title: "Services de Développement",
      subtitle: "Solutions sur mesure pour tous vos besoins digitaux",
      items: [
        {
          title: "Sites Web Vitrine",
          description: "Sites professionnels optimisés SEO, responsive design, performances optimales.",
          price: "À partir de 80,000 DA"
        },
        {
          title: "Applications Web",
          description: "Plateformes complexes : dashboards, SaaS, systèmes de gestion internes.",
          price: "À partir de 250,000 DA"
        },
        {
          title: "E-Commerce",
          description: "Boutiques en ligne complètes avec paiement CIB/EDAHABIA, gestion stock.",
          price: "À partir de 180,000 DA"
        },
        {
          title: "API & Backend",
          description: "Développement API robustes, intégrations tierces, microservices.",
          price: "À partir de 150,000 DA"
        },
        {
          title: "Applications Mobile",
          description: "Apps iOS/Android natives ou cross-platform (React Native, Flutter).",
          price: "À partir de 300,000 DA"
        },
        {
          title: "Maintenance & Support",
          description: "Support technique continu, mises à jour, optimisations, sécurité.",
          price: "À partir de 15,000 DA/mois"
        }
      ]
    },
    process: {
      title: "Notre Méthodologie",
      subtitle: "Un processus éprouvé pour des résultats garantis",
      steps: [
        {
          number: "01",
          title: "Analyse & Conseil",
          description: "Étude approfondie de vos besoins, audit technique, recommandations personnalisées."
        },
        {
          number: "02",
          title: "Conception",
          description: "Architecture technique, maquettes, choix des technologies optimales."
        },
        {
          number: "03",
          title: "Développement",
          description: "Codage propre, tests unitaires, revue de code, documentation."
        },
        {
          number: "04",
          title: "Déploiement",
          description: "Mise en production, configuration serveur, optimisation performances."
        },
        {
          number: "05",
          title: "Support",
          description: "Maintenance continue, mises à jour, support technique réactif."
        }
      ]
    },
    whyUs: {
      title: "Pourquoi Choisir Nos Développeurs",
      reasons: [
        {
          title: "Expertise Locale",
          description: "Basés à Sétif, nous comprenons le marché algérien et ses spécificités."
        },
        {
          title: "Code Qualité",
          description: "Standards internationaux, code maintenable, documentation complète."
        },
        {
          title: "Communication",
          description: "Réunions régulières, rapports d'avancement, transparence totale."
        },
        {
          title: "Prix Compétitifs",
          description: "Tarifs adaptés au marché local, sans compromis sur la qualité."
        },
        {
          title: "Support Réactif",
          description: "Disponibilité en semaine, réponse sous 24h, urgences traitées rapidement."
        },
        {
          title: "Garantie",
          description: "3 mois de garantie sur tous les projets, corrections gratuites."
        }
      ]
    },
    coverage: {
      title: "Zone d'Intervention",
      description: "Nous intervenons sur Sétif et toutes les wilayas environnantes",
      areas: ["Sétif Centre", "El Eulma", "Ain Oulmene", "Bordj Bou Arréridj", "M'Sila", "Batna", "Constantine", "Béjaïa", "Jijel", "Mila"]
    },
    faq: {
      title: "Questions Fréquentes",
      items: [
        {
          question: "Quels langages de programmation maîtrisez-vous ?",
          answer: "Notre équipe maîtrise JavaScript (React, Node.js, Vue.js), PHP (Laravel, Symfony), Python (Django, Flask), ainsi que les technologies mobiles (React Native, Flutter, Swift, Kotlin)."
        },
        {
          question: "Combien de temps pour développer un site web ?",
          answer: "Un site vitrine prend 2-4 semaines, un site e-commerce 4-8 semaines, et une application complexe 2-4 mois selon les fonctionnalités."
        },
        {
          question: "Proposez-vous des contrats de maintenance ?",
          answer: "Oui, nous proposons des contrats de maintenance mensuelle incluant : mises à jour, sécurité, sauvegardes, support technique, et optimisations."
        },
        {
          question: "Travaillez-vous en freelance ou en équipe ?",
          answer: "Nous sommes une agence avec une équipe complète : développeurs frontend, backend, designers, et chefs de projet pour garantir la qualité."
        },
        {
          question: "Comment se passe le paiement ?",
          answer: "Paiement en 3 fois : 30% à la signature, 40% à mi-parcours, 30% à la livraison. Paiement par virement, CCP, ou espèces."
        }
      ]
    },
    cta: {
      title: "Besoin d'un Développeur Web à Sétif ?",
      subtitle: "Discutons de votre projet. Premier rendez-vous gratuit et sans engagement.",
      button: "Contactez-Nous",
      phone: "+213 549 57 55 12",
      email: "contact@symloop.com"
    }
  },
  ar: {
    meta: {
      title: "مطور ويب سطيف | خبير برمجة مواقع وتطبيقات | سيملوب 2026",
      description: "مطور ويب محترف في سطيف. خبير في React، Next.js، Node.js، PHP، Python. +7 سنوات خبرة. إنشاء مواقع، تطبيقات، متاجر إلكترونية. عرض أسعار مجاني.",
      keywords: "مطور ويب سطيف, مبرمج سطيف, مطور مستقل سطيف, خبير ويب سطيف, مطور react سطيف, مطور php سطيف, إنشاء موقع سطيف"
    },
    hero: {
      badge: "مطور خبير في سطيف",
      title: "مطور ويب",
      titleHighlight: "محترف في سطيف",
      subtitle: "فريق من المطورين ذوي الخبرة +7 سنوات. إتقان كامل للتقنيات الحديثة: React، Next.js، Node.js، PHP، Python والمزيد.",
      cta1: "ناقش مشروعك",
      cta2: "شاهد أعمالنا"
    },
    stats: [
      { value: "+7", label: "سنوات خبرة" },
      { value: "+150", label: "مشروع منجز" },
      { value: "+50", label: "عميل راضٍ" },
      { value: "24س", label: "وقت الاستجابة" }
    ],
    expertise: {
      title: "خبراتنا التقنية",
      subtitle: "تقنيات حديثة لحلول عالية الأداء",
      categories: [
        {
          title: "الواجهة الأمامية",
          icon: "Code",
          skills: ["React.js / Next.js", "Vue.js / Nuxt.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
        },
        {
          title: "الواجهة الخلفية",
          icon: "Server",
          skills: ["Node.js / Express", "PHP / Laravel", "Python / Django", "API REST / GraphQL", "WebSocket"]
        },
        {
          title: "قواعد البيانات",
          icon: "Cpu",
          skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"]
        },
        {
          title: "DevOps والسحابة",
          icon: "Cloud",
          skills: ["AWS / GCP", "Docker / Kubernetes", "CI/CD Pipelines", "Linux Server", "Nginx / Apache"]
        }
      ]
    },
    services: {
      title: "خدمات التطوير",
      subtitle: "حلول مخصصة لجميع احتياجاتك الرقمية",
      items: [
        {
          title: "مواقع تعريفية",
          description: "مواقع احترافية محسنة لمحركات البحث، تصميم متجاوب، أداء مثالي.",
          price: "ابتداءً من 80,000 دج"
        },
        {
          title: "تطبيقات الويب",
          description: "منصات معقدة: لوحات تحكم، SaaS، أنظمة إدارة داخلية.",
          price: "ابتداءً من 250,000 دج"
        },
        {
          title: "التجارة الإلكترونية",
          description: "متاجر إلكترونية كاملة مع دفع CIB/EDAHABIA، إدارة المخزون.",
          price: "ابتداءً من 180,000 دج"
        },
        {
          title: "API والخادم",
          description: "تطوير API قوية، تكامل مع أطراف ثالثة، خدمات مصغرة.",
          price: "ابتداءً من 150,000 دج"
        },
        {
          title: "تطبيقات الجوال",
          description: "تطبيقات iOS/Android أصلية أو متعددة المنصات (React Native, Flutter).",
          price: "ابتداءً من 300,000 دج"
        },
        {
          title: "الصيانة والدعم",
          description: "دعم تقني مستمر، تحديثات، تحسينات، أمان.",
          price: "ابتداءً من 15,000 دج/شهر"
        }
      ]
    },
    process: {
      title: "منهجيتنا",
      subtitle: "عملية مجربة لنتائج مضمونة",
      steps: [
        {
          number: "01",
          title: "التحليل والاستشارة",
          description: "دراسة معمقة لاحتياجاتك، تدقيق تقني، توصيات مخصصة."
        },
        {
          number: "02",
          title: "التصميم",
          description: "هندسة تقنية، نماذج أولية، اختيار التقنيات المثلى."
        },
        {
          number: "03",
          title: "التطوير",
          description: "برمجة نظيفة، اختبارات وحدة، مراجعة الكود، توثيق."
        },
        {
          number: "04",
          title: "النشر",
          description: "إطلاق للإنتاج، تكوين الخادم، تحسين الأداء."
        },
        {
          number: "05",
          title: "الدعم",
          description: "صيانة مستمرة، تحديثات، دعم تقني سريع."
        }
      ]
    },
    whyUs: {
      title: "لماذا تختار مطورينا",
      reasons: [
        {
          title: "خبرة محلية",
          description: "مقرنا في سطيف، نفهم السوق الجزائري وخصوصياته."
        },
        {
          title: "كود عالي الجودة",
          description: "معايير دولية، كود قابل للصيانة، توثيق كامل."
        },
        {
          title: "تواصل",
          description: "اجتماعات منتظمة، تقارير تقدم، شفافية كاملة."
        },
        {
          title: "أسعار تنافسية",
          description: "أسعار مناسبة للسوق المحلي، دون المساس بالجودة."
        },
        {
          title: "دعم سريع",
          description: "متاحون أيام العمل، رد خلال 24 ساعة، معالجة الطوارئ بسرعة."
        },
        {
          title: "ضمان",
          description: "3 أشهر ضمان على جميع المشاريع، تصحيحات مجانية."
        }
      ]
    },
    coverage: {
      title: "منطقة التدخل",
      description: "نتدخل في سطيف وجميع الولايات المجاورة",
      areas: ["سطيف المركز", "العلمة", "عين ولمان", "برج بوعريريج", "المسيلة", "باتنة", "قسنطينة", "بجاية", "جيجل", "ميلة"]
    },
    faq: {
      title: "أسئلة شائعة",
      items: [
        {
          question: "ما هي لغات البرمجة التي تتقنونها؟",
          answer: "فريقنا يتقن JavaScript (React, Node.js, Vue.js)، PHP (Laravel, Symfony)، Python (Django, Flask)، وكذلك تقنيات الجوال (React Native, Flutter, Swift, Kotlin)."
        },
        {
          question: "كم يستغرق تطوير موقع ويب؟",
          answer: "موقع تعريفي يأخذ 2-4 أسابيع، متجر إلكتروني 4-8 أسابيع، وتطبيق معقد 2-4 أشهر حسب الميزات."
        },
        {
          question: "هل تقدمون عقود صيانة؟",
          answer: "نعم، نقدم عقود صيانة شهرية تشمل: تحديثات، أمان، نسخ احتياطي، دعم تقني، وتحسينات."
        },
        {
          question: "هل تعملون بشكل مستقل أو كفريق؟",
          answer: "نحن وكالة مع فريق كامل: مطوري واجهة أمامية وخلفية، مصممين، ومديري مشاريع لضمان الجودة."
        },
        {
          question: "كيف يتم الدفع؟",
          answer: "الدفع على 3 مراحل: 30% عند التوقيع، 40% في منتصف المشروع، 30% عند التسليم. الدفع بالتحويل، CCP، أو نقداً."
        }
      ]
    },
    cta: {
      title: "تحتاج مطور ويب في سطيف؟",
      subtitle: "دعنا نناقش مشروعك. الاستشارة الأولى مجانية وبدون التزام.",
      button: "تواصل معنا",
      phone: "+213 549 57 55 12",
      email: "contact@symloop.com"
    }
  },
  en: {
    meta: {
      title: "Web Developer Setif | Expert Web Programming & Applications | Symloop 2026",
      description: "Professional web developer in Setif. Expert in React, Next.js, Node.js, PHP, Python. 7+ years experience. Website creation, applications, e-commerce. Free quote.",
      keywords: "web developer setif, programmer setif, freelance developer setif, web expert setif, react developer setif, php developer setif, python developer setif, website creation setif"
    },
    hero: {
      badge: "Expert Developer in Setif",
      title: "Professional",
      titleHighlight: "Web Developer in Setif",
      subtitle: "Team of senior developers with 7+ years experience. Complete mastery of modern technologies: React, Next.js, Node.js, PHP, Python, and more.",
      cta1: "Discuss Your Project",
      cta2: "View Our Work"
    },
    stats: [
      { value: "7+", label: "Years Experience" },
      { value: "150+", label: "Projects Delivered" },
      { value: "50+", label: "Happy Clients" },
      { value: "24h", label: "Response Time" }
    ],
    expertise: {
      title: "Our Technical Expertise",
      subtitle: "Modern tech stack for high-performance solutions",
      categories: [
        {
          title: "Frontend",
          icon: "Code",
          skills: ["React.js / Next.js", "Vue.js / Nuxt.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
        },
        {
          title: "Backend",
          icon: "Server",
          skills: ["Node.js / Express", "PHP / Laravel", "Python / Django", "REST API / GraphQL", "WebSocket"]
        },
        {
          title: "Database",
          icon: "Cpu",
          skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"]
        },
        {
          title: "DevOps & Cloud",
          icon: "Cloud",
          skills: ["AWS / GCP", "Docker / Kubernetes", "CI/CD Pipelines", "Linux Server", "Nginx / Apache"]
        }
      ]
    },
    services: {
      title: "Development Services",
      subtitle: "Custom solutions for all your digital needs",
      items: [
        {
          title: "Business Websites",
          description: "SEO-optimized professional sites, responsive design, optimal performance.",
          price: "From 80,000 DZD"
        },
        {
          title: "Web Applications",
          description: "Complex platforms: dashboards, SaaS, internal management systems.",
          price: "From 250,000 DZD"
        },
        {
          title: "E-Commerce",
          description: "Complete online stores with CIB/EDAHABIA payment, inventory management.",
          price: "From 180,000 DZD"
        },
        {
          title: "API & Backend",
          description: "Robust API development, third-party integrations, microservices.",
          price: "From 150,000 DZD"
        },
        {
          title: "Mobile Applications",
          description: "Native or cross-platform iOS/Android apps (React Native, Flutter).",
          price: "From 300,000 DZD"
        },
        {
          title: "Maintenance & Support",
          description: "Ongoing technical support, updates, optimizations, security.",
          price: "From 15,000 DZD/month"
        }
      ]
    },
    process: {
      title: "Our Methodology",
      subtitle: "A proven process for guaranteed results",
      steps: [
        {
          number: "01",
          title: "Analysis & Consulting",
          description: "In-depth study of your needs, technical audit, personalized recommendations."
        },
        {
          number: "02",
          title: "Design",
          description: "Technical architecture, mockups, optimal technology selection."
        },
        {
          number: "03",
          title: "Development",
          description: "Clean coding, unit tests, code review, documentation."
        },
        {
          number: "04",
          title: "Deployment",
          description: "Production launch, server configuration, performance optimization."
        },
        {
          number: "05",
          title: "Support",
          description: "Ongoing maintenance, updates, responsive technical support."
        }
      ]
    },
    whyUs: {
      title: "Why Choose Our Developers",
      reasons: [
        {
          title: "Local Expertise",
          description: "Based in Setif, we understand the Algerian market and its specifics."
        },
        {
          title: "Quality Code",
          description: "International standards, maintainable code, complete documentation."
        },
        {
          title: "Communication",
          description: "Regular meetings, progress reports, total transparency."
        },
        {
          title: "Competitive Prices",
          description: "Rates adapted to the local market, without compromising quality."
        },
        {
          title: "Responsive Support",
          description: "Available weekdays, 24h response, emergencies handled quickly."
        },
        {
          title: "Warranty",
          description: "3-month warranty on all projects, free corrections."
        }
      ]
    },
    coverage: {
      title: "Service Area",
      description: "We serve Setif and all surrounding wilayas",
      areas: ["Setif Center", "El Eulma", "Ain Oulmene", "Bordj Bou Arreridj", "M'Sila", "Batna", "Constantine", "Bejaia", "Jijel", "Mila"]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What programming languages do you master?",
          answer: "Our team masters JavaScript (React, Node.js, Vue.js), PHP (Laravel, Symfony), Python (Django, Flask), as well as mobile technologies (React Native, Flutter, Swift, Kotlin)."
        },
        {
          question: "How long does it take to develop a website?",
          answer: "A business website takes 2-4 weeks, an e-commerce site 4-8 weeks, and a complex application 2-4 months depending on features."
        },
        {
          question: "Do you offer maintenance contracts?",
          answer: "Yes, we offer monthly maintenance contracts including: updates, security, backups, technical support, and optimizations."
        },
        {
          question: "Do you work freelance or as a team?",
          answer: "We are an agency with a complete team: frontend and backend developers, designers, and project managers to guarantee quality."
        },
        {
          question: "How does payment work?",
          answer: "Payment in 3 installments: 30% at signing, 40% mid-project, 30% on delivery. Payment by transfer, CCP, or cash."
        }
      ]
    },
    cta: {
      title: "Need a Web Developer in Setif?",
      subtitle: "Let's discuss your project. First consultation free and no obligation.",
      button: "Contact Us",
      phone: "+213 549 57 55 12",
      email: "contact@symloop.com"
    }
  }
};

const iconComponents = {
  Code,
  Server,
  Cpu,
  Cloud
};

export default function DeveloppeurWebSetif() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;
  const isRTL = locale === 'ar';
  const c = content[locale] || content.fr;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://symloop.com/blog/developpeur-web-setif-2026",
    "name": "Symloop - Développeur Web Sétif",
    "alternateName": ["سيملوب مطور ويب سطيف", "Symloop Web Developer Setif"],
    "description": c.meta.description,
    "url": "https://symloop.com/blog/developpeur-web-setif-2026",
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
    "priceRange": "80000 DZD - 500000 DZD",
    "openingHours": "Su-Th 09:00-18:00",
    "sameAs": [
      "https://www.linkedin.com/company/symloop",
      "https://www.facebook.com/symloop",
      "https://www.instagram.com/symloop"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services Développement Web",
      "itemListElement": c.services.items.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
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
        <link rel="canonical" href={`https://symloop.com${locale !== 'fr' ? '/' + locale : ''}/blog/developpeur-web-setif-2026`} />

        {/* Geo Meta Tags */}
        <meta name="geo.region" content="DZ-19" />
        <meta name="geo.placename" content="Sétif, Algeria" />
        <meta name="geo.position" content="36.1919;5.4138" />
        <meta name="ICBM" content="36.1919, 5.4138" />

        {/* Open Graph */}
        <meta property="og:title" content={c.meta.title} />
        <meta property="og:description" content={c.meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://symloop.com/blog/developpeur-web-setif-2026`} />
        <meta property="og:locale" content={locale === 'ar' ? 'ar_DZ' : locale === 'en' ? 'en_US' : 'fr_DZ'} />

        {/* Hreflang */}
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/blog/developpeur-web-setif-2026" />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/blog/developpeur-web-setif-2026" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/en/blog/developpeur-web-setif-2026" />
        <link rel="alternate" hrefLang="x-default" href="https://symloop.com/blog/developpeur-web-setif-2026" />

        {/* Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <div className={`min-h-screen bg-slate-950 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-slate-950 to-indigo-900/20" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 text-violet-300 text-sm font-medium mb-6">
                <CommandLineIcon className="w-4 h-4" />
                {c.hero.badge}
              </span>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {c.hero.title}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                  {c.hero.titleHighlight}
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                {c.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-violet-500 hover:to-indigo-500 transition-all shadow-lg shadow-violet-500/25">
                  {c.hero.cta1}
                </Link>
                <Link href="/portfolio" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20">
                  {c.hero.cta2}
                </Link>
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
                  <div className="text-3xl md:text-4xl font-bold text-violet-400 mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.expertise.title}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">{c.expertise.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {c.expertise.categories.map((category, index) => {
                const Icon = iconComponents[category.icon];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-violet-500/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4">
                      {Icon && <Icon className="w-6 h-6 text-violet-400" />}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.skills.map((skill, i) => (
                        <li key={i} className="text-slate-400 text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.services.title}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">{c.services.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.services.items.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-violet-500/50 transition-all group"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-violet-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">{service.description}</p>
                  <div className="text-violet-400 font-semibold">{service.price}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.process.title}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">{c.process.subtitle}</p>
            </div>

            <div className="max-w-4xl mx-auto">
              {c.process.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
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

        {/* Why Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{c.whyUs.title}</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {c.whyUs.reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4">
                    <CheckBadgeIcon className="w-5 h-5 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                  <p className="text-slate-400 text-sm">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <MapPinIcon className="w-12 h-12 text-violet-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.coverage.title}</h2>
              <p className="text-slate-400 mb-8">{c.coverage.description}</p>

              <div className="flex flex-wrap justify-center gap-3">
                {c.coverage.areas.map((area, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-violet-500/20 text-violet-300 text-sm font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-violet-900/30 to-indigo-900/30">
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
                className="inline-flex px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-violet-500 hover:to-indigo-500 transition-all shadow-lg shadow-violet-500/25"
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
