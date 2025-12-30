import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import {
  ArrowLeft, Calendar, Clock, User, Camera, Shield,
  CheckCircle, Home, Star, Package, Smartphone, Wifi,
  Settings, Eye, Video, Lock, Users, Globe, Phone,
  Rocket, Award, MapPin, Wrench, Zap, ThumbsUp,
  Building, Store, Factory, HardHat, ClipboardCheck
} from "lucide-react";

export default function CameraInstallationBlog() {
  const { t: tCommon } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;
  const isRTL = locale === "ar";

  const blogData = {
    fr: {
      meta: {
        title: "Installation Caméras de Surveillance Professionnelle en Algérie | Symloop 2026",
        description: "Installation complète de caméras de surveillance par Symloop. Service clé en main de A à Z : étude, installation, configuration, formation. Couverture 48 wilayas.",
        keywords: "installation caméras surveillance algérie, installer caméras maison algérie, installation vidéosurveillance professionnelle, caméras sécurité installation, Symloop installation, technicien caméras algérie"
      },
      hero: {
        badge: "Service Installation Pro",
        title: "Installation Caméras de Surveillance",
        subtitle: "De A à Z par des Experts Symloop",
        description: "Vous n'avez rien à faire. Nos techniciens s'occupent de tout : étude de vos besoins, installation professionnelle, configuration complète, et formation à l'utilisation.",
        author: "Équipe Installation Symloop",
        date: "Décembre 2026",
        readTime: "8 min"
      },
      section1: {
        title: "Pourquoi Choisir l'Installation Professionnelle Symloop ?",
        intro: "L'installation de caméras de surveillance ne s'improvise pas. Un mauvais positionnement, un câblage défaillant, ou une configuration incorrecte peuvent rendre votre système inefficace.",
        reasons: [
          {
            title: "Expertise Technique",
            description: "Nos techniciens sont formés sur tous les produits Symloop. Ils connaissent les meilleures pratiques pour chaque type d'installation.",
            icon: "HardHat"
          },
          {
            title: "Étude Personnalisée",
            description: "Avant toute installation, nous visitons votre site pour identifier les zones à couvrir, les angles morts, et les besoins spécifiques.",
            icon: "ClipboardCheck"
          },
          {
            title: "Installation Propre",
            description: "Câblage dissimulé, finitions soignées, pas de fils apparents. Votre maison reste esthétique.",
            icon: "Wrench"
          },
          {
            title: "Configuration Complète",
            description: "Caméras, app, alertes, enregistrement cloud - tout est configuré et testé avant notre départ.",
            icon: "Settings"
          },
          {
            title: "Formation Incluse",
            description: "Nous vous formons à l'utilisation de l'application et du système. Vous repartez autonome.",
            icon: "Users"
          },
          {
            title: "Garantie Travaux",
            description: "En plus de la garantie produits, nos travaux d'installation sont garantis 1 an.",
            icon: "Shield"
          }
        ]
      },
      section2: {
        title: "Notre Processus d'Installation en 5 Étapes",
        steps: [
          {
            step: "1",
            title: "Prise de Contact",
            description: "Vous nous contactez par téléphone, WhatsApp ou formulaire. Nous discutons de vos besoins et planifions une visite.",
            duration: "Même jour"
          },
          {
            step: "2",
            title: "Visite & Étude",
            description: "Un technicien se déplace chez vous gratuitement. Il analyse les lieux, identifie les points stratégiques, et vous conseille sur le nombre de caméras nécessaires.",
            duration: "30-60 min"
          },
          {
            step: "3",
            title: "Devis Personnalisé",
            description: "Vous recevez un devis détaillé avec le matériel recommandé et le coût de l'installation. Aucune surprise, tout est inclus.",
            duration: "24-48h"
          },
          {
            step: "4",
            title: "Installation",
            description: "Nos techniciens arrivent avec tout le matériel. Installation, câblage, configuration, tests. Vous n'avez rien à faire.",
            duration: "2-6h selon projet"
          },
          {
            step: "5",
            title: "Formation & Remise",
            description: "Nous vous montrons comment utiliser l'application, visualiser les caméras, recevoir les alertes. Vous signez le PV de réception.",
            duration: "30 min"
          }
        ]
      },
      section3: {
        title: "Types d'Installations que Nous Réalisons",
        types: [
          {
            name: "Maison Individuelle",
            description: "Protection périmétrique complète : entrées, jardin, garage, terrasse. Caméras intérieures optionnelles.",
            cameras: "3 à 8 caméras",
            duration: "Demi-journée",
            icon: "Home"
          },
          {
            name: "Appartement",
            description: "Caméra d'entrée, sonnette vidéo, caméras intérieures. Installation sans perçage possible.",
            cameras: "2 à 4 caméras",
            duration: "2-3 heures",
            icon: "Building"
          },
          {
            name: "Commerce / Magasin",
            description: "Surveillance de la zone de vente, caisse, réserve, entrée/sortie. Système anti-vol intégré.",
            cameras: "4 à 12 caméras",
            duration: "Journée complète",
            icon: "Store"
          },
          {
            name: "Entrepôt / Usine",
            description: "Grandes surfaces, zones de stockage, quais de chargement. Caméras longue portée et PTZ.",
            cameras: "8 à 32 caméras",
            duration: "1-3 jours",
            icon: "Factory"
          },
          {
            name: "Bureau / Entreprise",
            description: "Accueil, couloirs, salles de réunion, parking. Contrôle d'accès intégré optionnel.",
            cameras: "4 à 16 caméras",
            duration: "1-2 jours",
            icon: "Building"
          }
        ]
      },
      section4: {
        title: "Ce Qui Est Inclus Dans Notre Service",
        included: [
          "Visite technique gratuite et sans engagement",
          "Devis détaillé transparent",
          "Fourniture de tout le matériel Symloop",
          "Installation et fixation professionnelle",
          "Câblage propre et dissimulé",
          "Configuration complète du système",
          "Création de votre compte Symloop",
          "Configuration des alertes personnalisées",
          "Test de toutes les caméras",
          "Formation à l'utilisation de l'application",
          "Documentation et guide utilisateur",
          "Support prioritaire 3 mois",
          "Garantie installation 1 an"
        ],
        notIncluded: [
          "Travaux de maçonnerie lourde (sur devis séparé)",
          "Passage de gaines dans murs porteurs",
          "Alimentation électrique nouvelle (électricien requis)"
        ]
      },
      section5: {
        title: "Nos Garanties",
        guarantees: [
          {
            title: "Satisfaction Garantie",
            description: "Si l'installation ne vous convient pas, nous revenons gratuitement pour ajuster le positionnement des caméras."
          },
          {
            title: "Propreté du Chantier",
            description: "Nous nettoyons tout après l'installation. Votre maison est aussi propre qu'avant notre arrivée."
          },
          {
            title: "Fonctionnement 100%",
            description: "Nous ne partons que lorsque tout fonctionne parfaitement. Tests en direct avec vous."
          },
          {
            title: "Support Réactif",
            description: "Un problème après l'installation ? Nous intervenons sous 24-48h."
          }
        ]
      },
      section6: {
        title: "Couverture Géographique",
        intro: "Nos équipes d'installation couvrent tout le territoire national :",
        regions: [
          {
            name: "Grand Alger",
            wilayas: "Alger, Blida, Tipaza, Boumerdès",
            delay: "Intervention sous 48h"
          },
          {
            name: "Est",
            wilayas: "Constantine, Annaba, Sétif, Batna, Skikda",
            delay: "Intervention sous 72h"
          },
          {
            name: "Ouest",
            wilayas: "Oran, Tlemcen, Mostaganem, Sidi Bel Abbès",
            delay: "Intervention sous 72h"
          },
          {
            name: "Centre",
            wilayas: "Béjaïa, Tizi Ouzou, Bouira, M'Sila",
            delay: "Intervention sous 72h"
          },
          {
            name: "Sud",
            wilayas: "Ghardaïa, Biskra, Ouargla, Laghouat",
            delay: "Intervention sous 5 jours"
          }
        ],
        note: "Pour les wilayas non listées, contactez-nous pour vérifier la disponibilité."
      },
      section7: {
        title: "Questions Fréquentes",
        questions: [
          {
            q: "La visite technique est-elle vraiment gratuite ?",
            a: "Oui, 100% gratuite et sans engagement. Le technicien évalue vos besoins, vous conseille, et vous recevez un devis. Vous êtes libre d'accepter ou non."
          },
          {
            q: "Combien de temps dure l'installation ?",
            a: "Pour une maison standard (4-6 caméras), comptez une demi-journée. Pour un commerce ou une grande villa, prévoir une journée complète. Nous vous donnons une estimation précise dans le devis."
          },
          {
            q: "Faut-il que je sois présent pendant l'installation ?",
            a: "Idéalement oui, au moins au début et à la fin. Nous avons besoin de valider les emplacements avec vous, et de vous former à l'utilisation du système."
          },
          {
            q: "Que se passe-t-il si j'ai un problème après l'installation ?",
            a: "Vous bénéficiez de 3 mois de support prioritaire. Pour tout problème lié à l'installation, nous intervenons gratuitement sous 48h. Après 3 mois, le support standard Symloop prend le relais."
          },
          {
            q: "Proposez-vous des contrats de maintenance ?",
            a: "Oui, nous proposons des contrats annuels incluant : vérification du système, nettoyage des caméras, mise à jour firmware, et intervention prioritaire. Contactez-nous pour les détails."
          },
          {
            q: "Installez-vous des caméras d'autres marques ?",
            a: "Nous nous spécialisons dans les produits Symloop pour garantir la meilleure qualité de service. Cependant, nous pouvons intégrer votre système existant si compatible."
          }
        ]
      },
      cta: {
        title: "Prêt pour une Installation Professionnelle ?",
        subtitle: "Demandez votre visite technique gratuite",
        button: "Demander une Visite",
        phone: "Ou appelez-nous : 0XXX XX XX XX",
        features: [
          "Visite gratuite sous 48h",
          "Devis sans engagement",
          "Installation par experts certifiés"
        ]
      }
    },
    ar: {
      meta: {
        title: "تركيب كاميرات مراقبة احترافية في الجزائر | Symloop 2026",
        description: "تركيب كامل لكاميرات المراقبة بواسطة Symloop. خدمة متكاملة من الألف إلى الياء: دراسة، تركيب، إعداد، تدريب. تغطية 48 ولاية.",
        keywords: "تركيب كاميرات مراقبة الجزائر, تركيب كاميرات منزل الجزائر, تركيب مراقبة فيديو احترافي, كاميرات أمن تركيب, Symloop تركيب, فني كاميرات الجزائر"
      },
      hero: {
        badge: "خدمة التركيب الاحترافي",
        title: "تركيب كاميرات المراقبة",
        subtitle: "من الألف إلى الياء بواسطة خبراء Symloop",
        description: "لا تحتاج لفعل أي شيء. فنيونا يتولون كل شيء: دراسة احتياجاتك، التركيب الاحترافي، الإعداد الكامل، والتدريب على الاستخدام.",
        author: "فريق تركيب Symloop",
        date: "ديسمبر 2026",
        readTime: "8 دقائق"
      },
      section1: {
        title: "لماذا تختار التركيب الاحترافي من Symloop؟",
        intro: "تركيب كاميرات المراقبة لا يُرتجل. التموضع السيئ، الأسلاك المعيبة، أو الإعداد الخاطئ يمكن أن يجعل نظامك غير فعال.",
        reasons: [
          {
            title: "خبرة تقنية",
            description: "فنيونا مدربون على جميع منتجات Symloop. يعرفون أفضل الممارسات لكل نوع تركيب.",
            icon: "HardHat"
          },
          {
            title: "دراسة مخصصة",
            description: "قبل أي تركيب، نزور موقعك لتحديد المناطق المطلوب تغطيتها، النقاط العمياء، والاحتياجات الخاصة.",
            icon: "ClipboardCheck"
          },
          {
            title: "تركيب نظيف",
            description: "أسلاك مخفية، تشطيبات أنيقة، لا أسلاك ظاهرة. منزلك يبقى جمالياً.",
            icon: "Wrench"
          },
          {
            title: "إعداد كامل",
            description: "الكاميرات، التطبيق، التنبيهات، التسجيل السحابي - كل شيء مُعدّ ومُختبر قبل مغادرتنا.",
            icon: "Settings"
          },
          {
            title: "تدريب مشمول",
            description: "ندربك على استخدام التطبيق والنظام. تنطلق مستقلاً.",
            icon: "Users"
          },
          {
            title: "ضمان الأعمال",
            description: "بالإضافة لضمان المنتجات، أعمال التركيب مضمونة سنة.",
            icon: "Shield"
          }
        ]
      },
      section2: {
        title: "عملية التركيب في 5 خطوات",
        steps: [
          {
            step: "1",
            title: "التواصل",
            description: "تتصل بنا عبر الهاتف، واتساب أو النموذج. نناقش احتياجاتك ونحدد موعد زيارة.",
            duration: "نفس اليوم"
          },
          {
            step: "2",
            title: "الزيارة والدراسة",
            description: "فني يتنقل إليك مجاناً. يحلل المكان، يحدد النقاط الاستراتيجية، وينصحك بعدد الكاميرات اللازمة.",
            duration: "30-60 دقيقة"
          },
          {
            step: "3",
            title: "عرض سعر مخصص",
            description: "تستلم عرض سعر مفصل بالمعدات الموصى بها وتكلفة التركيب. لا مفاجآت، كل شيء مشمول.",
            duration: "24-48 ساعة"
          },
          {
            step: "4",
            title: "التركيب",
            description: "فنيونا يصلون بكل المعدات. تركيب، أسلاك، إعداد، اختبارات. لا تحتاج لفعل شيء.",
            duration: "2-6 ساعات حسب المشروع"
          },
          {
            step: "5",
            title: "التدريب والتسليم",
            description: "نريك كيف تستخدم التطبيق، تشاهد الكاميرات، تستلم التنبيهات. توقع محضر الاستلام.",
            duration: "30 دقيقة"
          }
        ]
      },
      section3: {
        title: "أنواع التركيبات التي نقوم بها",
        types: [
          {
            name: "منزل فردي",
            description: "حماية محيطية كاملة: مداخل، حديقة، مرآب، شرفة. كاميرات داخلية اختيارية.",
            cameras: "3 إلى 8 كاميرات",
            duration: "نصف يوم",
            icon: "Home"
          },
          {
            name: "شقة",
            description: "كاميرا مدخل، جرس فيديو، كاميرات داخلية. تركيب بدون حفر ممكن.",
            cameras: "2 إلى 4 كاميرات",
            duration: "2-3 ساعات",
            icon: "Building"
          },
          {
            name: "متجر / محل",
            description: "مراقبة منطقة البيع، الصندوق، المخزن، الدخول/الخروج. نظام مكافحة السرقة مدمج.",
            cameras: "4 إلى 12 كاميرا",
            duration: "يوم كامل",
            icon: "Store"
          },
          {
            name: "مستودع / مصنع",
            description: "مساحات كبيرة، مناطق تخزين، أرصفة تحميل. كاميرات بعيدة المدى و PTZ.",
            cameras: "8 إلى 32 كاميرا",
            duration: "1-3 أيام",
            icon: "Factory"
          },
          {
            name: "مكتب / شركة",
            description: "استقبال، ممرات، قاعات اجتماع، موقف سيارات. تحكم وصول مدمج اختياري.",
            cameras: "4 إلى 16 كاميرا",
            duration: "1-2 يوم",
            icon: "Building"
          }
        ]
      },
      section4: {
        title: "ما هو مشمول في خدمتنا",
        included: [
          "زيارة تقنية مجانية وبدون التزام",
          "عرض سعر مفصل وشفاف",
          "توفير كل معدات Symloop",
          "تركيب وتثبيت احترافي",
          "أسلاك نظيفة ومخفية",
          "إعداد كامل للنظام",
          "إنشاء حسابك Symloop",
          "إعداد التنبيهات المخصصة",
          "اختبار جميع الكاميرات",
          "تدريب على استخدام التطبيق",
          "توثيق ودليل المستخدم",
          "دعم أولوية 3 أشهر",
          "ضمان التركيب سنة"
        ],
        notIncluded: [
          "أعمال بناء ثقيلة (بعرض سعر منفصل)",
          "تمرير قنوات في جدران حاملة",
          "تغذية كهربائية جديدة (كهربائي مطلوب)"
        ]
      },
      section5: {
        title: "ضماناتنا",
        guarantees: [
          {
            title: "رضا مضمون",
            description: "إذا لم يعجبك التركيب، نعود مجاناً لتعديل وضع الكاميرات."
          },
          {
            title: "نظافة الورشة",
            description: "ننظف كل شيء بعد التركيب. منزلك نظيف كما قبل وصولنا."
          },
          {
            title: "تشغيل 100%",
            description: "لا نغادر إلا عندما يعمل كل شيء بشكل مثالي. اختبارات مباشرة معك."
          },
          {
            title: "دعم متجاوب",
            description: "مشكلة بعد التركيب؟ نتدخل خلال 24-48 ساعة."
          }
        ]
      },
      section6: {
        title: "التغطية الجغرافية",
        intro: "فرق التركيب لدينا تغطي كل التراب الوطني:",
        regions: [
          {
            name: "الجزائر الكبرى",
            wilayas: "الجزائر، البليدة، تيبازة، بومرداس",
            delay: "تدخل خلال 48 ساعة"
          },
          {
            name: "الشرق",
            wilayas: "قسنطينة، عنابة، سطيف، باتنة، سكيكدة",
            delay: "تدخل خلال 72 ساعة"
          },
          {
            name: "الغرب",
            wilayas: "وهران، تلمسان، مستغانم، سيدي بلعباس",
            delay: "تدخل خلال 72 ساعة"
          },
          {
            name: "الوسط",
            wilayas: "بجاية، تيزي وزو، البويرة، المسيلة",
            delay: "تدخل خلال 72 ساعة"
          },
          {
            name: "الجنوب",
            wilayas: "غرداية، بسكرة، ورقلة، الأغواط",
            delay: "تدخل خلال 5 أيام"
          }
        ],
        note: "للولايات غير المذكورة، اتصل بنا للتحقق من التوفر."
      },
      section7: {
        title: "الأسئلة الشائعة",
        questions: [
          {
            q: "هل الزيارة التقنية مجانية فعلاً؟",
            a: "نعم، 100% مجانية وبدون التزام. الفني يقيّم احتياجاتك، ينصحك، وتستلم عرض سعر. أنت حر في القبول أو الرفض."
          },
          {
            q: "كم يستغرق التركيب؟",
            a: "لمنزل عادي (4-6 كاميرات)، احسب نصف يوم. لمتجر أو فيلا كبيرة، يوم كامل. نعطيك تقديراً دقيقاً في عرض السعر."
          },
          {
            q: "هل يجب أن أكون حاضراً أثناء التركيب؟",
            a: "مثالياً نعم، على الأقل في البداية والنهاية. نحتاج للتحقق من الأماكن معك، وتدريبك على استخدام النظام."
          },
          {
            q: "ماذا يحدث إذا واجهت مشكلة بعد التركيب؟",
            a: "تستفيد من 3 أشهر دعم أولوية. لأي مشكلة متعلقة بالتركيب، نتدخل مجاناً خلال 48 ساعة. بعد 3 أشهر، دعم Symloop العادي يتولى."
          },
          {
            q: "هل تقدمون عقود صيانة؟",
            a: "نعم، نقدم عقوداً سنوية تشمل: فحص النظام، تنظيف الكاميرات، تحديث firmware، وتدخل أولوية. اتصل بنا للتفاصيل."
          },
          {
            q: "هل تركبون كاميرات ماركات أخرى؟",
            a: "نتخصص في منتجات Symloop لضمان أفضل جودة خدمة. لكن يمكننا دمج نظامك الحالي إذا كان متوافقاً."
          }
        ]
      },
      cta: {
        title: "مستعد للتركيب الاحترافي؟",
        subtitle: "اطلب زيارتك التقنية المجانية",
        button: "طلب زيارة",
        phone: "أو اتصل بنا: 0XXX XX XX XX",
        features: [
          "زيارة مجانية خلال 48 ساعة",
          "عرض سعر بدون التزام",
          "تركيب بواسطة خبراء معتمدين"
        ]
      }
    }
  };

  const t = locale === "ar" ? blogData.ar : blogData.fr;

  const getIcon = (iconName) => {
    const icons = {
      HardHat: <HardHat className="w-6 h-6" />,
      ClipboardCheck: <ClipboardCheck className="w-6 h-6" />,
      Wrench: <Wrench className="w-6 h-6" />,
      Settings: <Settings className="w-6 h-6" />,
      Users: <Users className="w-6 h-6" />,
      Shield: <Shield className="w-6 h-6" />,
      Home: <Home className="w-6 h-6" />,
      Building: <Building className="w-6 h-6" />,
      Store: <Store className="w-6 h-6" />,
      Factory: <Factory className="w-6 h-6" />
    };
    return icons[iconName] || <Camera className="w-6 h-6" />;
  };

  return (
    <>
      <Head>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="keywords" content={t.meta.keywords} />
        <link rel="canonical" href={`https://www.symloop.com/blog/installation-cameras-surveillance-professionnelle-algerie-2026`} />
        <meta property="og:title" content={t.meta.title} />
        <meta property="og:description" content={t.meta.description} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t.hero.title,
            "description": t.meta.description,
            "author": { "@type": "Organization", "name": "Symloop" },
            "publisher": { "@type": "Organization", "name": "Symloop" }
          })}
        </script>
      </Head>

      <main className={`min-h-screen bg-gradient-to-b from-slate-50 to-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-8 transition-colors">
              <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              {isRTL ? 'العودة للمدونة' : 'Retour au blog'}
            </Link>

            <span className="inline-block bg-yellow-500 text-yellow-900 text-sm font-bold px-4 py-1 rounded-full mb-6">
              {t.hero.badge}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.hero.title}</h1>
            <p className="text-2xl text-blue-200 mb-6">{t.hero.subtitle}</p>
            <p className="text-lg opacity-90 mb-8 max-w-2xl">{t.hero.description}</p>

            <div className="flex flex-wrap gap-4 text-sm text-blue-200">
              <span className="flex items-center gap-2"><User className="w-4 h-4" /> {t.hero.author}</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {t.hero.date}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {t.hero.readTime}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="container mx-auto px-4 max-w-4xl py-12">
          {/* Section 1: Why Professional */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center">1</span>
              {t.section1.title}
            </h2>
            <p className="text-slate-700 mb-8">{t.section1.intro}</p>

            <div className="grid md:grid-cols-2 gap-4">
              {t.section1.reasons.map((reason, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                      {getIcon(reason.icon)}
                    </div>
                    <h4 className="font-bold text-slate-800">{reason.title}</h4>
                  </div>
                  <p className="text-slate-600 text-sm">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Process */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-lg mb-12 text-white">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">2</span>
              {t.section2.title}
            </h2>

            <div className="space-y-6">
              {t.section2.steps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg">{step.title}</h4>
                      <span className="bg-yellow-500 text-yellow-900 text-xs font-bold px-2 py-1 rounded">{step.duration}</span>
                    </div>
                    <p className="opacity-90">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Types */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <span className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center">3</span>
              {t.section3.title}
            </h2>

            <div className="space-y-4">
              {t.section3.types.map((type, idx) => (
                <div key={idx} className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-5 border border-blue-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                      {getIcon(type.icon)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800 text-lg mb-2">{type.name}</h4>
                      <p className="text-slate-600 mb-3">{type.description}</p>
                      <div className="flex flex-wrap gap-3">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm flex items-center gap-1">
                          <Camera className="w-4 h-4" /> {type.cameras}
                        </span>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm flex items-center gap-1">
                          <Clock className="w-4 h-4" /> {type.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Included */}
          <div className="bg-green-50 rounded-2xl p-8 shadow-lg mb-12 border border-green-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center">4</span>
              {t.section4.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {t.section4.included.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="font-semibold text-amber-800 mb-2">{isRTL ? 'غير مشمول:' : 'Non inclus :'}</p>
              <ul className="space-y-1">
                {t.section4.notIncluded.map((item, idx) => (
                  <li key={idx} className="text-amber-700 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 5: Guarantees */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center">5</span>
              {t.section5.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {t.section5.guarantees.map((guarantee, idx) => (
                <div key={idx} className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <ThumbsUp className="w-5 h-5 text-blue-600" />
                    <h4 className="font-bold text-slate-800">{guarantee.title}</h4>
                  </div>
                  <p className="text-slate-600 text-sm">{guarantee.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Coverage */}
          <div className="bg-slate-800 rounded-2xl p-8 shadow-lg mb-12 text-white">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">6</span>
              {t.section6.title}
            </h2>
            <p className="opacity-80 mb-8">{t.section6.intro}</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {t.section6.regions.map((region, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                    <h4 className="font-bold">{region.name}</h4>
                  </div>
                  <p className="text-sm opacity-80 mb-2">{region.wilayas}</p>
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">{region.delay}</span>
                </div>
              ))}
            </div>

            <p className="text-sm opacity-60 text-center">{t.section6.note}</p>
          </div>

          {/* Section 7: FAQ */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center">7</span>
              {t.section7.title}
            </h2>

            <div className="space-y-4">
              {t.section7.questions.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h4 className="font-bold text-slate-800 mb-2">{faq.q}</h4>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-2">{t.cta.title}</h2>
            <p className="opacity-90 mb-6">{t.cta.subtitle}</p>

            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {t.cta.features.map((feature, idx) => (
                <span key={idx} className="bg-white/20 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> {feature}
                </span>
              ))}
            </div>

            <Link href="/contact" className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              {t.cta.button}
            </Link>
            <p className="mt-4 text-sm opacity-80">{t.cta.phone}</p>
          </div>
        </article>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
