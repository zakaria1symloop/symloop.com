"use client";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArrowLeft, Calendar, Clock, User,
  MapPin, Code, Smartphone, Brain,
  CheckCircle, Phone, Mail, Building2,
  Rocket, Users, Shield, Zap,
  Star, Award, Globe, TrendingUp,
  Heart, Target, Cpu, Database,
  Video, Headphones, FileCheck, Banknote
} from "lucide-react";

export default function AgenceWebAlger2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const content = {
    fr: {
      title: "Agence de Developpement Web et Mobile pour Alger",
      subtitle: "Solutions Digitales Premium pour Entreprises Algeroises - Expertise Nationale, Tarifs Competitifs",
      metaTitle: "Agence Web Alger 2026 | Developpement Site Web & Application Mobile | Symloop",
      metaDesc: "Agence de developpement web pour entreprises d'Alger. Creation site internet, application mobile, logiciel sur mesure. Qualite premium, prix competitifs. Devis gratuit sous 24h.",
      date: "13 Janvier 2026",
      readTime: "11 min",
      author: "Symloop",
      category: "Agence Web Alger",

      intro: "Vous etes une entreprise basee a Alger et cherchez un partenaire digital fiable ? Symloop accompagne les entreprises algeroises dans leur transformation numerique. Beneficiez d'une expertise technique de haut niveau a des tarifs 30-40% plus competitifs que les agences de la capitale, sans compromis sur la qualite.",

      advantages: {
        title: "Pourquoi les Entreprises d'Alger Nous Choisissent",
        list: [
          {
            icon: Banknote,
            title: "Tarifs 30-40% Plus Competitifs",
            description: "Meme qualite, meilleur prix. Notre siege hors Alger nous permet de vous offrir des tarifs plus attractifs sans sacrifier l'excellence."
          },
          {
            icon: Video,
            title: "Collaboration Transparente",
            description: "Visioconferences quotidiennes, acces en temps reel a votre projet, demos hebdomadaires. Comme si nous etions dans vos bureaux."
          },
          {
            icon: Headphones,
            title: "Support 24/7",
            description: "Ligne directe, WhatsApp, email. Notre equipe est disponible pour vous accompagner a chaque etape."
          },
          {
            icon: FileCheck,
            title: "References Solides",
            description: "Nous travaillons deja avec des entreprises d'Alger, des ministeres et des multinationales presentes dans la capitale."
          }
        ]
      },

      clients: {
        title: "Ils Nous Font Confiance depuis Alger",
        description: "Des entreprises algeroises de premier plan nous font confiance :",
        sectors: ["Banques et Assurances", "Ministeres et Administrations", "Operateurs Telecoms", "Groupes Industriels", "Startups Tech", "E-commerce"]
      },

      services: {
        title: "Nos Services pour les Entreprises d'Alger",
        list: [
          {
            icon: Globe,
            title: "Sites Web Professionnels",
            description: "Sites vitrines, institutionnels, e-commerce. Optimises pour le marche algerien.",
            features: ["Site corporate multilingue", "E-commerce CIB/Edahabia", "Portail institutionnel", "Site catalogue produits"]
          },
          {
            icon: Smartphone,
            title: "Applications Mobiles",
            description: "Apps iOS et Android pour toucher la clientele algeroise, tres mobile-first.",
            features: ["App grand public", "App B2B/entreprise", "App interne/RH", "Maintenance evolutive"]
          },
          {
            icon: Database,
            title: "Solutions Entreprise",
            description: "ERP, CRM, BI, automatisation. Pour les moyennes et grandes entreprises.",
            features: ["ERP sur mesure", "CRM Salesforce-like", "Business Intelligence", "Workflow automation"]
          },
          {
            icon: Brain,
            title: "Intelligence Artificielle",
            description: "Chatbots, analyse de donnees, automatisation intelligente.",
            features: ["Chatbot service client", "Analyse predictive", "Traitement documents", "Assistant vocal"]
          }
        ]
      },

      process: {
        title: "Comment Travailler avec Nous depuis Alger",
        steps: [
          {
            number: "01",
            title: "Premier Contact",
            description: "Appelez-nous ou envoyez un email. Reponse garantie sous 2 heures ouvrees."
          },
          {
            number: "02",
            title: "Reunion de Cadrage",
            description: "Visioconference ou deplacement a Alger pour les grands projets. Analyse approfondie de vos besoins."
          },
          {
            number: "03",
            title: "Proposition Detaillee",
            description: "Devis complet sous 48h avec planning, specifications et garanties."
          },
          {
            number: "04",
            title: "Developpement Agile",
            description: "Sprints de 2 semaines, demos regulieres, acces a notre plateforme de suivi."
          },
          {
            number: "05",
            title: "Livraison et Accompagnement",
            description: "Formation, documentation, support. Nous restons votre partenaire long terme."
          }
        ]
      },

      portfolio: {
        title: "Projets Realises pour des Clients d'Alger",
        projects: [
          {
            name: "Portail Gouvernemental",
            sector: "Administration",
            description: "Plateforme de services en ligne pour administration centrale",
            results: "500K+ utilisateurs"
          },
          {
            name: "App Bancaire Mobile",
            sector: "Finance",
            description: "Application mobile banking pour etablissement financier",
            results: "4.8/5 sur stores"
          },
          {
            name: "Plateforme B2B",
            sector: "Commerce",
            description: "Marketplace B2B pour grossiste de la capitale",
            results: "+300% commandes"
          },
          {
            name: "Systeme RH Unifie",
            sector: "Industrie",
            description: "Solution SIRH pour groupe industriel (siege Alger)",
            results: "2000+ employes"
          }
        ]
      },

      pricing: {
        title: "Tarifs pour Entreprises d'Alger",
        note: "Prix en Dinars Algeriens - 30-40% moins cher que les agences d'Alger",
        comparison: "Comparatif avec tarifs moyens des agences de la capitale :",
        packages: [
          {
            name: "Site Vitrine Pro",
            ourPrice: "150,000 DA",
            algerPrice: "250,000 DA",
            savings: "-40%",
            features: ["10 pages", "Design premium", "SEO avance", "Responsive", "Formation"]
          },
          {
            name: "E-Commerce Complet",
            ourPrice: "350,000 DA",
            algerPrice: "550,000 DA",
            savings: "-36%",
            features: ["Catalogue illimite", "Paiement integre", "Gestion stock", "Analytics", "Support 1 an"]
          },
          {
            name: "Application Mobile",
            ourPrice: "500,000 DA",
            algerPrice: "800,000 DA",
            savings: "-37%",
            features: ["iOS + Android", "Backend complet", "Push notifications", "Analytics", "Maintenance"]
          },
          {
            name: "Solution Entreprise",
            ourPrice: "Sur devis",
            algerPrice: "-",
            savings: "Negociable",
            features: ["Analyse sur mesure", "Architecture robuste", "Integration SI", "SLA garanti", "Support 24/7"]
          }
        ]
      },

      guarantees: {
        title: "Nos Garanties",
        list: [
          { title: "Satisfaction ou Reprise", description: "Si le livrable ne correspond pas au cahier des charges, nous reprenons gratuitement." },
          { title: "Delais Respectes", description: "Penalites de retard incluses dans nos contrats. Nous nous engageons sur les dates." },
          { title: "Code Source Fourni", description: "Vous etes proprietaire de tout le code. Aucune dependance, aucun lock-in." },
          { title: "Support Reactif", description: "Temps de reponse garanti : 2h en heures ouvrees, 8h le week-end." }
        ]
      },

      testimonials: {
        title: "Temoignages de Clients Algerois",
        reviews: [
          {
            text: "Nous avons economise 40% par rapport aux devis des agences d'Alger, pour une qualite equivalente voire superieure.",
            author: "DG",
            company: "Societe Import-Export, Alger"
          },
          {
            text: "Malgre la distance, la collaboration etait fluide. Visios quotidiennes et livraisons dans les temps.",
            author: "DSI",
            company: "Groupe Industriel, Alger"
          },
          {
            text: "Leur expertise IA nous a permis d'automatiser 70% de notre service client. ROI atteint en 4 mois.",
            author: "Directeur Digital",
            company: "Banque, Alger"
          }
        ]
      },

      faq: {
        title: "Questions des Entreprises d'Alger",
        questions: [
          {
            q: "Pouvez-vous vous deplacer a Alger ?",
            a: "Oui, pour les projets importants, nous nous deplacons a Alger pour les reunions cles : lancement, demos majeures, formation. Frais inclus dans le devis."
          },
          {
            q: "Comment se passe la communication au quotidien ?",
            a: "Visioconference, WhatsApp, email, telephone. Vous avez un chef de projet dedie joignable en permanence. Reunions planifiees selon vos disponibilites."
          },
          {
            q: "Vos tarifs sont vraiment 30-40% moins chers ?",
            a: "Oui, notre implantation hors capitale reduit nos charges fixes. Nous repercutons cette economie sur nos clients sans rogner sur la qualite."
          },
          {
            q: "Qui sont vos references a Alger ?",
            a: "Nous travaillons avec des administrations centrales, des banques, des operateurs telecom et des groupes industriels. References disponibles sur demande (NDA)."
          },
          {
            q: "Quid de la maintenance et du support ?",
            a: "Contrats de maintenance SLA avec temps de reponse garantis. Support par ticket, telephone et WhatsApp. Interventions critiques 24/7."
          }
        ]
      },

      zones: {
        title: "Zones Couvertes a Alger et Environs",
        areas: ["Alger Centre", "Bab Ezzouar", "Hydra", "Cheraga", "Bir Mourad Rais", "El Harrach", "Rouiba", "Blida", "Boumerdes", "Tipaza"]
      },

      cta: {
        title: "Discutons de Votre Projet",
        description: "Appelez-nous ou envoyez un email. Premier echange gratuit et sans engagement. Devis detaille sous 48h.",
        button: "Demander un Devis Gratuit",
        phone: "+213 549 575 512",
        email: "contact@symloop.com",
        badge: "Reponse sous 2h"
      },

      seoKeywords: [
        "agence web alger",
        "developpement web alger",
        "creation site internet alger",
        "application mobile alger",
        "developpeur web alger",
        "agence digitale alger",
        "site e-commerce alger",
        "societe informatique alger",
        "developpement application alger",
        "agence creation site alger"
      ],

      backToBlog: "Retour au Blog"
    },
    en: {
      title: "Web and Mobile Development Agency for Algiers",
      subtitle: "Premium Digital Solutions for Algiers Businesses - National Expertise, Competitive Rates",
      metaTitle: "Web Agency Algiers 2026 | Website & Mobile App Development | Symloop",
      metaDesc: "Web development agency for Algiers businesses. Website creation, mobile apps, custom software. Premium quality, competitive prices. Free quote within 24h.",
      date: "January 13, 2026",
      readTime: "11 min",
      author: "Symloop",
      category: "Web Agency Algiers",

      intro: "Are you an Algiers-based business looking for a reliable digital partner? Symloop supports Algerian companies in their digital transformation. Benefit from high-level technical expertise at rates 30-40% more competitive than capital agencies, without compromising on quality.",

      advantages: {
        title: "Why Algiers Businesses Choose Us",
        list: [
          {
            icon: Banknote,
            title: "30-40% More Competitive Rates",
            description: "Same quality, better price. Our location outside Algiers allows us to offer more attractive rates without sacrificing excellence."
          },
          {
            icon: Video,
            title: "Transparent Collaboration",
            description: "Daily video calls, real-time access to your project, weekly demos. As if we were in your offices."
          },
          {
            icon: Headphones,
            title: "24/7 Support",
            description: "Direct line, WhatsApp, email. Our team is available to support you at every step."
          },
          {
            icon: FileCheck,
            title: "Solid References",
            description: "We already work with Algiers companies, ministries and multinationals present in the capital."
          }
        ]
      },

      clients: {
        title: "They Trust Us from Algiers",
        description: "Leading Algerian companies trust us:",
        sectors: ["Banks and Insurance", "Ministries and Administrations", "Telecom Operators", "Industrial Groups", "Tech Startups", "E-commerce"]
      },

      services: {
        title: "Our Services for Algiers Businesses",
        list: [
          {
            icon: Globe,
            title: "Professional Websites",
            description: "Showcase, corporate, e-commerce sites. Optimized for the Algerian market.",
            features: ["Multilingual corporate site", "CIB/Edahabia e-commerce", "Institutional portal", "Product catalog site"]
          },
          {
            icon: Smartphone,
            title: "Mobile Applications",
            description: "iOS and Android apps to reach the Algerian clientele, very mobile-first.",
            features: ["Consumer app", "B2B/enterprise app", "Internal/HR app", "Evolutionary maintenance"]
          },
          {
            icon: Database,
            title: "Enterprise Solutions",
            description: "ERP, CRM, BI, automation. For medium and large enterprises.",
            features: ["Custom ERP", "Salesforce-like CRM", "Business Intelligence", "Workflow automation"]
          },
          {
            icon: Brain,
            title: "Artificial Intelligence",
            description: "Chatbots, data analysis, intelligent automation.",
            features: ["Customer service chatbot", "Predictive analysis", "Document processing", "Voice assistant"]
          }
        ]
      },

      process: {
        title: "How to Work with Us from Algiers",
        steps: [
          { number: "01", title: "First Contact", description: "Call us or send an email. Response guaranteed within 2 business hours." },
          { number: "02", title: "Scoping Meeting", description: "Video conference or travel to Algiers for large projects. In-depth analysis of your needs." },
          { number: "03", title: "Detailed Proposal", description: "Complete quote within 48h with timeline, specifications and guarantees." },
          { number: "04", title: "Agile Development", description: "2-week sprints, regular demos, access to our tracking platform." },
          { number: "05", title: "Delivery and Support", description: "Training, documentation, support. We remain your long-term partner." }
        ]
      },

      portfolio: {
        title: "Projects for Algiers Clients",
        projects: [
          { name: "Government Portal", sector: "Administration", description: "Online services platform for central administration", results: "500K+ users" },
          { name: "Mobile Banking App", sector: "Finance", description: "Mobile banking application for financial institution", results: "4.8/5 on stores" },
          { name: "B2B Platform", sector: "Commerce", description: "B2B marketplace for capital wholesaler", results: "+300% orders" },
          { name: "Unified HR System", sector: "Industry", description: "HRIS solution for industrial group (Algiers HQ)", results: "2000+ employees" }
        ]
      },

      pricing: {
        title: "Rates for Algiers Businesses",
        note: "Prices in Algerian Dinars - 30-40% cheaper than Algiers agencies",
        comparison: "Comparison with average rates of capital agencies:",
        packages: [
          { name: "Pro Showcase Site", ourPrice: "150,000 DA", algerPrice: "250,000 DA", savings: "-40%", features: ["10 pages", "Premium design", "Advanced SEO", "Responsive", "Training"] },
          { name: "Complete E-Commerce", ourPrice: "350,000 DA", algerPrice: "550,000 DA", savings: "-36%", features: ["Unlimited catalog", "Integrated payment", "Stock management", "Analytics", "1 year support"] },
          { name: "Mobile Application", ourPrice: "500,000 DA", algerPrice: "800,000 DA", savings: "-37%", features: ["iOS + Android", "Full backend", "Push notifications", "Analytics", "Maintenance"] },
          { name: "Enterprise Solution", ourPrice: "On quote", algerPrice: "-", savings: "Negotiable", features: ["Custom analysis", "Robust architecture", "SI integration", "Guaranteed SLA", "24/7 support"] }
        ]
      },

      guarantees: {
        title: "Our Guarantees",
        list: [
          { title: "Satisfaction or Redo", description: "If the deliverable doesn't match specifications, we redo it for free." },
          { title: "Respected Deadlines", description: "Delay penalties included in our contracts. We commit to dates." },
          { title: "Source Code Provided", description: "You own all the code. No dependency, no lock-in." },
          { title: "Responsive Support", description: "Guaranteed response time: 2h during business hours, 8h on weekends." }
        ]
      },

      testimonials: {
        title: "Testimonials from Algiers Clients",
        reviews: [
          { text: "We saved 40% compared to quotes from Algiers agencies, for equivalent or superior quality.", author: "CEO", company: "Import-Export Company, Algiers" },
          { text: "Despite the distance, collaboration was smooth. Daily video calls and on-time deliveries.", author: "CIO", company: "Industrial Group, Algiers" },
          { text: "Their AI expertise allowed us to automate 70% of our customer service. ROI reached in 4 months.", author: "Digital Director", company: "Bank, Algiers" }
        ]
      },

      faq: {
        title: "Questions from Algiers Businesses",
        questions: [
          { q: "Can you travel to Algiers?", a: "Yes, for important projects, we travel to Algiers for key meetings: launch, major demos, training. Costs included in quote." },
          { q: "How does daily communication work?", a: "Video conference, WhatsApp, email, phone. You have a dedicated project manager available at all times." },
          { q: "Are your rates really 30-40% cheaper?", a: "Yes, our location outside the capital reduces our fixed costs. We pass these savings on to our clients." },
          { q: "Who are your references in Algiers?", a: "We work with central administrations, banks, telecom operators and industrial groups. References available on request (NDA)." },
          { q: "What about maintenance and support?", a: "SLA maintenance contracts with guaranteed response times. Support by ticket, phone and WhatsApp." }
        ]
      },

      zones: {
        title: "Areas Covered in Algiers and Surroundings",
        areas: ["Algiers Center", "Bab Ezzouar", "Hydra", "Cheraga", "Bir Mourad Rais", "El Harrach", "Rouiba", "Blida", "Boumerdes", "Tipaza"]
      },

      cta: {
        title: "Let's Discuss Your Project",
        description: "Call us or send an email. Free and no-obligation first exchange. Detailed quote within 48h.",
        button: "Request a Free Quote",
        phone: "+213 549 575 512",
        email: "contact@symloop.com",
        badge: "Response within 2h"
      },

      seoKeywords: ["web agency algiers", "web development algiers", "website creation algiers", "mobile app algiers"],

      backToBlog: "Back to Blog"
    },
    ar: {
      title: "وكالة تطوير الويب والموبايل للجزائر العاصمة",
      subtitle: "حلول رقمية متميزة للشركات الجزائرية - خبرة وطنية، أسعار تنافسية",
      metaTitle: "وكالة ويب الجزائر 2026 | تطوير مواقع وتطبيقات | Symloop",
      metaDesc: "وكالة تطوير ويب لشركات الجزائر العاصمة. إنشاء مواقع، تطبيقات جوال، برمجيات مخصصة. جودة عالية، أسعار تنافسية. عرض مجاني.",
      date: "13 يناير 2026",
      readTime: "11 دقيقة",
      author: "Symloop",
      category: "وكالة ويب الجزائر",

      intro: "هل أنت شركة في الجزائر العاصمة وتبحث عن شريك رقمي موثوق؟ Symloop ترافق الشركات الجزائرية في تحولها الرقمي. استفد من خبرة تقنية عالية المستوى بأسعار أقل 30-40% من وكالات العاصمة.",

      advantages: {
        title: "لماذا تختارنا شركات الجزائر",
        list: [
          { icon: Banknote, title: "أسعار أقل 30-40%", description: "نفس الجودة، سعر أفضل. موقعنا خارج العاصمة يتيح لنا تقديم أسعار أكثر تنافسية." },
          { icon: Video, title: "تعاون شفاف", description: "مكالمات فيديو يومية، وصول مباشر لمشروعك، عروض أسبوعية." },
          { icon: Headphones, title: "دعم 24/7", description: "خط مباشر، واتساب، بريد. فريقنا متاح لمرافقتك في كل خطوة." },
          { icon: FileCheck, title: "مراجع قوية", description: "نعمل بالفعل مع شركات الجزائر، وزارات وشركات متعددة الجنسيات." }
        ]
      },

      clients: {
        title: "يثقون بنا من الجزائر",
        description: "شركات جزائرية رائدة تثق بنا:",
        sectors: ["البنوك والتأمين", "الوزارات والإدارات", "مشغلو الاتصالات", "مجموعات صناعية", "شركات ناشئة", "التجارة الإلكترونية"]
      },

      services: {
        title: "خدماتنا لشركات الجزائر",
        list: [
          { icon: Globe, title: "مواقع احترافية", description: "مواقع عرض، مؤسسية، تجارة إلكترونية. محسنة للسوق الجزائري.", features: ["موقع مؤسسي متعدد اللغات", "تجارة CIB/Edahabia", "بوابة مؤسسية", "كتالوج منتجات"] },
          { icon: Smartphone, title: "تطبيقات جوال", description: "تطبيقات iOS و Android للوصول للعملاء الجزائريين.", features: ["تطبيق للجمهور", "تطبيق B2B", "تطبيق داخلي/HR", "صيانة تطورية"] },
          { icon: Database, title: "حلول المؤسسات", description: "ERP، CRM، BI، أتمتة. للشركات المتوسطة والكبيرة.", features: ["ERP مخصص", "CRM شبيه Salesforce", "ذكاء الأعمال", "أتمتة سير العمل"] },
          { icon: Brain, title: "الذكاء الاصطناعي", description: "روبوتات دردشة، تحليل بيانات، أتمتة ذكية.", features: ["روبوت خدمة عملاء", "تحليل تنبؤي", "معالجة وثائق", "مساعد صوتي"] }
        ]
      },

      process: {
        title: "كيف تعمل معنا من الجزائر",
        steps: [
          { number: "01", title: "أول اتصال", description: "اتصل بنا أو أرسل بريداً. رد مضمون خلال ساعتين عمل." },
          { number: "02", title: "اجتماع تأطيري", description: "مكالمة فيديو أو زيارة للجزائر للمشاريع الكبيرة." },
          { number: "03", title: "عرض مفصل", description: "عرض أسعار كامل خلال 48 ساعة مع جدول زمني ومواصفات." },
          { number: "04", title: "تطوير رشيق", description: "سباقات أسبوعين، عروض منتظمة، وصول لمنصة المتابعة." },
          { number: "05", title: "تسليم ومرافقة", description: "تدريب، توثيق، دعم. نبقى شريكك على المدى الطويل." }
        ]
      },

      portfolio: {
        title: "مشاريع لعملاء الجزائر",
        projects: [
          { name: "بوابة حكومية", sector: "الإدارة", description: "منصة خدمات إلكترونية لإدارة مركزية", results: "+500K مستخدم" },
          { name: "تطبيق بنكي", sector: "المالية", description: "تطبيق خدمات بنكية لمؤسسة مالية", results: "4.8/5 على المتاجر" },
          { name: "منصة B2B", sector: "التجارة", description: "سوق B2B لتاجر جملة من العاصمة", results: "+300% طلبات" },
          { name: "نظام HR موحد", sector: "الصناعة", description: "حل SIRH لمجموعة صناعية (مقر الجزائر)", results: "+2000 موظف" }
        ]
      },

      pricing: {
        title: "أسعار لشركات الجزائر",
        note: "أسعار بالدينار الجزائري - أقل 30-40% من وكالات الجزائر",
        comparison: "مقارنة مع متوسط أسعار وكالات العاصمة:",
        packages: [
          { name: "موقع عرض احترافي", ourPrice: "150,000 دج", algerPrice: "250,000 دج", savings: "-40%", features: ["10 صفحات", "تصميم مميز", "SEO متقدم", "متجاوب", "تدريب"] },
          { name: "تجارة إلكترونية كاملة", ourPrice: "350,000 دج", algerPrice: "550,000 دج", savings: "-36%", features: ["كتالوج غير محدود", "دفع مدمج", "إدارة مخزون", "تحليلات", "دعم سنة"] },
          { name: "تطبيق جوال", ourPrice: "500,000 دج", algerPrice: "800,000 دج", savings: "-37%", features: ["iOS + Android", "Backend كامل", "إشعارات", "تحليلات", "صيانة"] },
          { name: "حل مؤسسي", ourPrice: "حسب العرض", algerPrice: "-", savings: "قابل للتفاوض", features: ["تحليل مخصص", "هندسة متينة", "تكامل SI", "SLA مضمون", "دعم 24/7"] }
        ]
      },

      guarantees: {
        title: "ضماناتنا",
        list: [
          { title: "رضا أو إعادة", description: "إذا لم يتوافق التسليم مع المواصفات، نعيده مجاناً." },
          { title: "مواعيد محترمة", description: "غرامات تأخير مضمنة في عقودنا. نلتزم بالتواريخ." },
          { title: "كود مصدري مقدم", description: "أنت مالك كل الكود. لا تبعية، لا حصر." },
          { title: "دعم سريع", description: "وقت رد مضمون: ساعتان في أوقات العمل، 8 ساعات في عطلة الأسبوع." }
        ]
      },

      testimonials: {
        title: "شهادات عملاء الجزائر",
        reviews: [
          { text: "وفرنا 40% مقارنة بعروض وكالات الجزائر، لجودة مكافئة أو أفضل.", author: "مدير عام", company: "شركة استيراد-تصدير، الجزائر" },
          { text: "رغم المسافة، كان التعاون سلساً. مكالمات فيديو يومية وتسليمات في الوقت.", author: "مدير أنظمة", company: "مجموعة صناعية، الجزائر" },
          { text: "خبرتهم في الذكاء الاصطناعي أتاحت لنا أتمتة 70% من خدمة العملاء.", author: "مدير رقمي", company: "بنك، الجزائر" }
        ]
      },

      faq: {
        title: "أسئلة شركات الجزائر",
        questions: [
          { q: "هل يمكنكم التنقل للجزائر؟", a: "نعم، للمشاريع المهمة، نتنقل للجزائر للاجتماعات الرئيسية. التكاليف مشمولة في العرض." },
          { q: "كيف يتم التواصل اليومي؟", a: "مكالمات فيديو، واتساب، بريد، هاتف. لديك مدير مشروع مخصص متاح دائماً." },
          { q: "هل أسعاركم فعلاً أقل 30-40%؟", a: "نعم، موقعنا خارج العاصمة يقلل تكاليفنا الثابتة. ننقل هذا التوفير لعملائنا." },
          { q: "من هي مراجعكم في الجزائر؟", a: "نعمل مع إدارات مركزية، بنوك، مشغلي اتصالات ومجموعات صناعية. المراجع متاحة عند الطلب." },
          { q: "ماذا عن الصيانة والدعم؟", a: "عقود صيانة SLA مع أوقات رد مضمونة. دعم بالتذاكر والهاتف والواتساب." }
        ]
      },

      zones: {
        title: "المناطق المغطاة في الجزائر ومحيطها",
        areas: ["الجزائر الوسط", "باب الزوار", "حيدرة", "الشراقة", "بئر مراد رايس", "الحراش", "الرويبة", "البليدة", "بومرداس", "تيبازة"]
      },

      cta: {
        title: "لنناقش مشروعك",
        description: "اتصل بنا أو أرسل بريداً. تبادل أول مجاني وبدون التزام. عرض مفصل خلال 48 ساعة.",
        button: "اطلب عرض مجاني",
        phone: "+213 549 575 512",
        email: "contact@symloop.com",
        badge: "رد خلال ساعتين"
      },

      seoKeywords: ["وكالة ويب الجزائر", "تطوير مواقع الجزائر", "تطبيقات جوال الجزائر"],

      backToBlog: "العودة للمدونة"
    }
  };

  const t = content[locale] || content.fr;

  return (
    <>
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDesc} />
        <meta name="keywords" content={t.seoKeywords?.join(', ')} />
        <link rel="canonical" href={`https://symloop.com/${locale === 'fr' ? '' : locale + '/'}blog/agence-developpement-web-alger-2026`} />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDesc} />
        <meta property="og:type" content="article" />
        <meta name="geo.region" content="DZ-16" />
        <meta name="geo.placename" content="Algiers" />
      </Head>

      <main className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-black to-indigo-500/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {t.backToBlog}
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {t.category}
              </span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                -30% vs Alger
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

            {/* Advantages */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{t.advantages.title}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {t.advantages.list.map((adv, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <adv.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="font-bold">{adv.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{adv.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Clients Sectors */}
            <div className="mb-16 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">{t.clients.title}</h2>
              <p className="text-gray-300 mb-6">{t.clients.description}</p>
              <div className="flex flex-wrap gap-3">
                {t.clients.sectors.map((sector, i) => (
                  <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm">{sector}</span>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{t.services.title}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {t.services.list.map((service, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <service.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="font-bold">{service.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-blue-400" />{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Portfolio */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{t.portfolio.title}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {t.portfolio.projects.map((project, i) => (
                  <div key={i} className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold">{project.name}</h3>
                      <span className="px-2 py-1 bg-white/10 rounded text-xs">{project.sector}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                    <div className="flex items-center gap-2 text-blue-400 font-medium">
                      <TrendingUp className="w-4 h-4" />
                      {project.results}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing with Comparison */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-2">{t.pricing.title}</h2>
              <p className="text-gray-400 mb-2">{t.pricing.note}</p>
              <p className="text-gray-500 mb-8 text-sm">{t.pricing.comparison}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {t.pricing.packages.map((pkg, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <h3 className="font-bold mb-3">{pkg.name}</h3>
                    <div className="mb-1">
                      <span className="text-blue-400 font-bold text-lg">{pkg.ourPrice}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-gray-500 text-sm line-through">{pkg.algerPrice}</span>
                      <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs font-medium">{pkg.savings}</span>
                    </div>
                    <ul className="space-y-2">
                      {pkg.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-gray-400">
                          <CheckCircle className="w-3 h-3 text-blue-400" />{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantees */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{t.guarantees.title}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {t.guarantees.list.map((g, i) => (
                  <div key={i} className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
                    <Shield className="w-8 h-8 text-blue-400 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">{g.title}</h3>
                      <p className="text-gray-400 text-sm">{g.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{t.testimonials.title}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {t.testimonials.reviews.map((review, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-blue-400 text-blue-400" />)}
                    </div>
                    <p className="text-gray-300 text-sm mb-4 italic">"{review.text}"</p>
                    <div className="text-sm">
                      <div className="font-medium">{review.author}</div>
                      <div className="text-gray-500">{review.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{t.faq.title}</h2>
              <div className="space-y-4">
                {t.faq.questions.map((faq, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold mb-2">{faq.q}</h3>
                    <p className="text-gray-400 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Zones */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{t.zones.title}</h2>
              <div className="flex flex-wrap gap-2">
                {t.zones.areas.map((area, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">{area}</span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-blue-500/20 border border-blue-500/30 rounded-2xl p-8 text-center">
              <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-4">{t.cta.badge}</span>
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
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
