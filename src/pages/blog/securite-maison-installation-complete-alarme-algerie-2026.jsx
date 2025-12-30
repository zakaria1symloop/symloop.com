import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Link from "next/link";
import BlogSEO, { RelatedBlogs } from '../../components/seo/BlogSEO';
import {
  ArrowLeft, Calendar, Clock, User, Camera, Shield,
  CheckCircle, Home, Star, Smartphone, Wifi, AlertTriangle,
  Settings, Eye, Video, Lock, Users, Globe, Phone,
  Bell, MapPin, Wrench, Zap, ThumbsUp, Key,
  Building, Store, Radio, Volume2, Fingerprint
} from "lucide-react";

export default function SecurityInstallationBlog() {
  const { t: tCommon } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;
  const isRTL = locale === "ar";

  const blogData = {
    fr: {
      meta: {
        title: "Installation Système Sécurité Complet en Algérie | Alarme + Caméras | Symloop 2026",
        description: "Installation professionnelle de système de sécurité complet : alarme, caméras, capteurs, serrure connectée. Service clé en main par Symloop dans 48 wilayas.",
        keywords: "installation alarme maison algérie, système sécurité complet algérie, installation capteurs alarme, serrure connectée installation, Symloop sécurité, protection maison algérie"
      },
      hero: {
        badge: "Sécurité Complète",
        title: "Votre Maison Protégée de A à Z",
        subtitle: "Installation Système de Sécurité Complet",
        description: "Caméras, alarme, capteurs, serrure connectée... Nous installons et configurons tout votre système de sécurité. Tranquillité d'esprit garantie.",
        author: "Équipe Sécurité Symloop",
        date: "Décembre 2026",
        readTime: "10 min"
      },
      section1: {
        title: "Un Système de Sécurité Complet, C'est Quoi ?",
        intro: "Un vrai système de sécurité ne se limite pas à quelques caméras. C'est un écosystème intégré où chaque élément communique avec les autres pour une protection maximale.",
        components: [
          {
            name: "Caméras de Surveillance",
            description: "Yeux de votre système. Enregistrent 24/7, détectent les mouvements, envoient des alertes avec photos/vidéos.",
            icon: "Camera"
          },
          {
            name: "Centrale d'Alarme (Hub)",
            description: "Le cerveau. Reçoit les infos de tous les capteurs, décide des actions, vous alerte, active la sirène.",
            icon: "Radio"
          },
          {
            name: "Capteurs Porte/Fenêtre",
            description: "Détectent toute ouverture. Première ligne de défense contre les intrusions.",
            icon: "Lock"
          },
          {
            name: "Détecteurs de Mouvement",
            description: "Détectent les présences à l'intérieur. Distinguent humains et animaux.",
            icon: "Eye"
          },
          {
            name: "Sirène Intérieure/Extérieure",
            description: "Dissuade les intrus et alerte le voisinage. Jusqu'à 110 décibels.",
            icon: "Volume2"
          },
          {
            name: "Sonnette Vidéo",
            description: "Voyez et parlez avec vos visiteurs à distance. Enregistrement automatique.",
            icon: "Video"
          },
          {
            name: "Serrure Connectée",
            description: "Contrôlez qui entre chez vous. Code, empreinte, badge, ou smartphone.",
            icon: "Key"
          },
          {
            name: "Application Mobile",
            description: "Tout contrôler depuis votre téléphone. Alertes en temps réel. Accès mondial.",
            icon: "Smartphone"
          }
        ]
      },
      section2: {
        title: "Comment Tous Ces Éléments Travaillent Ensemble",
        scenario: {
          title: "Scénario : Tentative d'Intrusion à 22h",
          steps: [
            {
              time: "22:00:00",
              event: "Quelqu'un approche de votre fenêtre",
              action: "La caméra extérieure détecte un mouvement"
            },
            {
              time: "22:00:03",
              event: "Vous recevez une notification",
              action: "Photo de l'individu sur votre téléphone"
            },
            {
              time: "22:00:15",
              event: "L'individu tente d'ouvrir la fenêtre",
              action: "Le capteur fenêtre détecte l'ouverture"
            },
            {
              time: "22:00:16",
              event: "Alarme activée (vous êtes absent)",
              action: "Le hub vérifie le statut → Mode Absent actif"
            },
            {
              time: "22:00:17",
              event: "Sirène se déclenche à 110dB",
              action: "L'intrus fuit immédiatement"
            },
            {
              time: "22:00:18",
              event: "Toutes les caméras enregistrent",
              action: "Vidéo sauvegardée comme preuve"
            },
            {
              time: "22:00:20",
              event: "Vous recevez l'appel d'alerte",
              action: "Vous pouvez voir en direct, appeler la police si nécessaire"
            }
          ],
          conclusion: "Tout cela en moins de 20 secondes, automatiquement."
        }
      },
      section3: {
        title: "Nos Packs Installation Sécurité",
        intro: "Solutions complètes installées et configurées par nos experts :",
        packs: [
          {
            name: "Pack Appartement",
            ideal: "Studio, F2, F3",
            includes: [
              "Hub Symloop Security",
              "2 Caméras intérieures CAM-360",
              "1 Sonnette vidéo DOOR-V1",
              "3 Capteurs porte/fenêtre",
              "1 Détecteur de mouvement",
              "1 Sirène intérieure",
              "Installation complète",
              "Configuration app + alertes",
              "Formation 30 min"
            ]
          },
          {
            name: "Pack Maison",
            ideal: "Maison, F4+, Villa moyenne",
            includes: [
              "Hub Symloop Security PRO",
              "2 Caméras intérieures CAM-360",
              "2 Caméras extérieures CAM-EXT",
              "1 Sonnette vidéo DOOR-V1",
              "6 Capteurs porte/fenêtre",
              "2 Détecteurs de mouvement",
              "1 Sirène intérieure + 1 extérieure",
              "1 Serrure connectée LOCK-S1",
              "Installation professionnelle",
              "Configuration complète",
              "Formation 1h"
            ],
            popular: true
          },
          {
            name: "Pack Villa Premium",
            ideal: "Grande villa, plusieurs étages",
            includes: [
              "Hub Symloop Security PRO + 4G",
              "3 Caméras intérieures CAM-360",
              "4 Caméras extérieures CAM-EXT",
              "1 Sonnette vidéo DOOR-V1",
              "10 Capteurs porte/fenêtre",
              "4 Détecteurs de mouvement",
              "2 Sirènes (int + ext)",
              "2 Serrures connectées LOCK-S1",
              "Installation par 2 techniciens",
              "Configuration multi-zones",
              "Formation approfondie"
            ]
          },
          {
            name: "Pack Commerce",
            ideal: "Magasin, bureau, entrepôt",
            includes: [
              "Hub Symloop PRO + 4G backup",
              "4-8 Caméras selon surface",
              "Capteurs toutes ouvertures",
              "Détecteurs de mouvement zones",
              "Sirène extérieure puissante",
              "Contrôle d'accès optionnel",
              "Installation sur mesure",
              "Configuration horaires commerce",
              "Formation équipe"
            ]
          }
        ],
        note: "Chaque installation est personnalisée selon vos besoins spécifiques. Contactez-nous pour un devis gratuit."
      },
      section4: {
        title: "Le Déroulement de Votre Installation",
        steps: [
          {
            title: "Visite Gratuite",
            description: "Un expert sécurité visite votre domicile ou local. Il analyse les points d'entrée, zones à risque, et vos habitudes. Conseils personnalisés."
          },
          {
            title: "Plan de Sécurité",
            description: "Nous établissons un plan détaillé : emplacement de chaque équipement, couverture des zones, scénarios d'alerte. Vous validez avant installation."
          },
          {
            title: "Jour J : Installation",
            description: "Nos techniciens arrivent avec tout le matériel. Installation soignée, câblage propre, fixation solide. Vous n'avez rien à préparer."
          },
          {
            title: "Configuration & Tests",
            description: "Chaque équipement est configuré et testé. Caméras calibrées, capteurs vérifiés, alertes configurées. Nous simulons une intrusion pour valider."
          },
          {
            title: "Formation & Remise",
            description: "Nous vous montrons tout : armer/désarmer, voir les caméras, gérer les alertes, ajouter des utilisateurs. Vous repartez 100% autonome."
          }
        ]
      },
      section5: {
        title: "Pourquoi Symloop pour Votre Sécurité ?",
        reasons: [
          {
            title: "Produits Algériens",
            description: "Conçus et assemblés en Algérie. Support local en français et arabe. SAV rapide."
          },
          {
            title: "Données en Algérie",
            description: "Vos vidéos restent sur des serveurs en Algérie. Pas d'envoi de données à l'étranger."
          },
          {
            title: "Système Unifié",
            description: "Tous les équipements communiquent entre eux. Une seule app pour tout gérer."
          },
          {
            title: "Fonctionne Hors Ligne",
            description: "Coupure internet ? Le système continue localement. Batterie de secours 8h."
          },
          {
            title: "Évolutif",
            description: "Commencez petit, ajoutez des équipements au fil du temps. Tout reste compatible."
          },
          {
            title: "Installation Garantie",
            description: "1 an de garantie sur nos travaux. 2 ans sur les produits. Support 7j/7."
          }
        ]
      },
      section6: {
        title: "Questions Fréquentes",
        questions: [
          {
            q: "Combien de temps pour installer un système complet ?",
            a: "Pour un appartement (pack de base) : 3-4 heures. Pour une maison moyenne : une demi-journée. Pour une villa ou commerce : 1-2 jours. Nous vous donnons une estimation précise après la visite."
          },
          {
            q: "Est-ce que je peux surveiller depuis l'étranger ?",
            a: "Oui ! L'application Symloop fonctionne partout dans le monde. Beaucoup de nos clients surveillent leur maison en Algérie depuis la France, le Canada, ou les pays du Golfe."
          },
          {
            q: "Que se passe-t-il si internet coupe ?",
            a: "Le système continue de fonctionner en local. Les caméras enregistrent sur carte SD, l'alarme reste active, les capteurs fonctionnent. Dès le retour d'internet, tout se synchronise."
          },
          {
            q: "Puis-je ajouter des équipements plus tard ?",
            a: "Absolument. Le système Symloop est modulaire. Vous pouvez ajouter des caméras, capteurs, ou une serrure connectée à tout moment. Nous pouvons revenir pour l'installation ou vous guider à distance."
          },
          {
            q: "La police est-elle alertée automatiquement ?",
            a: "Non automatiquement (réglementation algérienne). Mais vous recevez les alertes instantanément avec vidéo, et vous pouvez décider d'appeler la police. Nous travaillons sur des partenariats avec des sociétés de télésurveillance."
          },
          {
            q: "Quelle est l'autonomie de la batterie de secours ?",
            a: "Le Hub PRO a une batterie de 8 heures. En cas de coupure de courant, il continue de fonctionner, maintient l'alarme active, et vous envoie une alerte."
          }
        ]
      },
      cta: {
        title: "Sécurisez Votre Maison Dès Aujourd'hui",
        subtitle: "Visite gratuite et devis personnalisé sans engagement",
        button: "Demander Ma Visite Gratuite",
        phone: "Ou appelez-nous : 0XXX XX XX XX",
        features: [
          "Visite sous 48h",
          "Devis gratuit",
          "Installation par experts"
        ]
      }
    },
    ar: {
      meta: {
        title: "تركيب نظام أمان كامل في الجزائر | إنذار + كاميرات | Symloop 2026",
        description: "تركيب احترافي لنظام أمان كامل: إنذار، كاميرات، مستشعرات، قفل متصل. خدمة متكاملة بواسطة Symloop في 48 ولاية.",
        keywords: "تركيب إنذار منزل الجزائر, نظام أمان كامل الجزائر, تركيب مستشعرات إنذار, قفل متصل تركيب, Symloop أمان, حماية منزل الجزائر"
      },
      hero: {
        badge: "أمان كامل",
        title: "منزلك محمي من الألف إلى الياء",
        subtitle: "تركيب نظام أمان متكامل",
        description: "كاميرات، إنذار، مستشعرات، قفل متصل... نركب ونضبط كل نظام الأمان الخاص بك. راحة بال مضمونة.",
        author: "فريق أمان Symloop",
        date: "ديسمبر 2026",
        readTime: "10 دقائق"
      },
      section1: {
        title: "ما هو نظام الأمان الكامل؟",
        intro: "نظام الأمان الحقيقي لا يقتصر على بضع كاميرات. إنه نظام متكامل حيث يتواصل كل عنصر مع الآخرين لحماية قصوى.",
        components: [
          {
            name: "كاميرات المراقبة",
            description: "عيون نظامك. تسجل 24/7، تكتشف الحركات، ترسل تنبيهات بصور/فيديو.",
            icon: "Camera"
          },
          {
            name: "مركز الإنذار (Hub)",
            description: "العقل. يستقبل المعلومات من جميع المستشعرات، يقرر الإجراءات، ينبهك، يُفعّل الصفارة.",
            icon: "Radio"
          },
          {
            name: "مستشعرات الباب/النافذة",
            description: "تكتشف أي فتح. خط الدفاع الأول ضد الاقتحام.",
            icon: "Lock"
          },
          {
            name: "كواشف الحركة",
            description: "تكتشف الوجود في الداخل. تميز بين البشر والحيوانات.",
            icon: "Eye"
          },
          {
            name: "صفارة داخلية/خارجية",
            description: "تردع المتسللين وتنبه الجيران. حتى 110 ديسيبل.",
            icon: "Volume2"
          },
          {
            name: "جرس فيديو",
            description: "شاهد وتحدث مع زوارك عن بُعد. تسجيل تلقائي.",
            icon: "Video"
          },
          {
            name: "قفل متصل",
            description: "تحكم بمن يدخل منزلك. رمز، بصمة، بطاقة، أو هاتف ذكي.",
            icon: "Key"
          },
          {
            name: "تطبيق الهاتف",
            description: "تحكم في كل شيء من هاتفك. تنبيهات فورية. وصول عالمي.",
            icon: "Smartphone"
          }
        ]
      },
      section2: {
        title: "كيف تعمل كل هذه العناصر معاً",
        scenario: {
          title: "سيناريو: محاولة اقتحام الساعة 22:00",
          steps: [
            {
              time: "22:00:00",
              event: "شخص يقترب من نافذتك",
              action: "الكاميرا الخارجية تكتشف حركة"
            },
            {
              time: "22:00:03",
              event: "تستلم إشعاراً",
              action: "صورة الشخص على هاتفك"
            },
            {
              time: "22:00:15",
              event: "الشخص يحاول فتح النافذة",
              action: "مستشعر النافذة يكتشف الفتح"
            },
            {
              time: "22:00:16",
              event: "الإنذار مُفعّل (أنت غائب)",
              action: "المحور يتحقق من الحالة → وضع الغياب نشط"
            },
            {
              time: "22:00:17",
              event: "الصفارة تنطلق 110dB",
              action: "المتسلل يفر فوراً"
            },
            {
              time: "22:00:18",
              event: "جميع الكاميرات تسجل",
              action: "الفيديو محفوظ كدليل"
            },
            {
              time: "22:00:20",
              event: "تستلم مكالمة التنبيه",
              action: "يمكنك المشاهدة مباشرة، الاتصال بالشرطة إذا لزم"
            }
          ],
          conclusion: "كل هذا في أقل من 20 ثانية، تلقائياً."
        }
      },
      section3: {
        title: "باقات تركيب الأمان",
        intro: "حلول كاملة مُركّبة ومُضبوطة بواسطة خبرائنا:",
        packs: [
          {
            name: "باقة الشقة",
            ideal: "استوديو، F2، F3",
            includes: [
              "محور Symloop Security",
              "2 كاميرا داخلية CAM-360",
              "1 جرس فيديو DOOR-V1",
              "3 مستشعر باب/نافذة",
              "1 كاشف حركة",
              "1 صفارة داخلية",
              "تركيب كامل",
              "إعداد التطبيق + التنبيهات",
              "تدريب 30 دقيقة"
            ]
          },
          {
            name: "باقة المنزل",
            ideal: "منزل، F4+، فيلا متوسطة",
            includes: [
              "محور Symloop Security PRO",
              "2 كاميرا داخلية CAM-360",
              "2 كاميرا خارجية CAM-EXT",
              "1 جرس فيديو DOOR-V1",
              "6 مستشعر باب/نافذة",
              "2 كاشف حركة",
              "1 صفارة داخلية + 1 خارجية",
              "1 قفل متصل LOCK-S1",
              "تركيب احترافي",
              "إعداد كامل",
              "تدريب ساعة"
            ],
            popular: true
          },
          {
            name: "باقة الفيلا بريميوم",
            ideal: "فيلا كبيرة، عدة طوابق",
            includes: [
              "محور Symloop Security PRO + 4G",
              "3 كاميرا داخلية CAM-360",
              "4 كاميرا خارجية CAM-EXT",
              "1 جرس فيديو DOOR-V1",
              "10 مستشعر باب/نافذة",
              "4 كاشف حركة",
              "2 صفارة (داخلية + خارجية)",
              "2 قفل متصل LOCK-S1",
              "تركيب بواسطة فنيين",
              "إعداد متعدد المناطق",
              "تدريب معمق"
            ]
          },
          {
            name: "باقة التجارة",
            ideal: "محل، مكتب، مستودع",
            includes: [
              "محور Symloop PRO + 4G احتياطي",
              "4-8 كاميرات حسب المساحة",
              "مستشعرات كل الفتحات",
              "كواشف حركة المناطق",
              "صفارة خارجية قوية",
              "تحكم وصول اختياري",
              "تركيب حسب الطلب",
              "إعداد جداول التجارة",
              "تدريب الفريق"
            ]
          }
        ],
        note: "كل تركيب مخصص حسب احتياجاتك الخاصة. اتصل بنا لعرض سعر مجاني."
      },
      section4: {
        title: "مراحل تركيبك",
        steps: [
          {
            title: "زيارة مجانية",
            description: "خبير أمان يزور منزلك أو محلك. يحلل نقاط الدخول، المناطق المعرضة، وعاداتك. نصائح مخصصة."
          },
          {
            title: "خطة الأمان",
            description: "نضع خطة مفصلة: مكان كل جهاز، تغطية المناطق، سيناريوهات التنبيه. تُصادق قبل التركيب."
          },
          {
            title: "يوم التركيب",
            description: "فنيونا يصلون بكل المعدات. تركيب أنيق، أسلاك نظيفة، تثبيت قوي. لا تحتاج لتحضير شيء."
          },
          {
            title: "الإعداد والاختبارات",
            description: "كل جهاز يُضبط ويُختبر. الكاميرات مُعايرة، المستشعرات مُتحقق منها، التنبيهات مُضبوطة. نحاكي اقتحاماً للتأكد."
          },
          {
            title: "التدريب والتسليم",
            description: "نريك كل شيء: التفعيل/إلغاء التفعيل، مشاهدة الكاميرات، إدارة التنبيهات، إضافة مستخدمين. تنطلق مستقلاً 100%."
          }
        ]
      },
      section5: {
        title: "لماذا Symloop لأمانك؟",
        reasons: [
          {
            title: "منتجات جزائرية",
            description: "مصممة ومُجمّعة في الجزائر. دعم محلي بالفرنسية والعربية. خدمة ما بعد البيع سريعة."
          },
          {
            title: "بيانات في الجزائر",
            description: "فيديوهاتك تبقى على خوادم في الجزائر. لا إرسال بيانات للخارج."
          },
          {
            title: "نظام موحد",
            description: "كل المعدات تتواصل مع بعضها. تطبيق واحد لإدارة كل شيء."
          },
          {
            title: "يعمل بدون اتصال",
            description: "انقطاع الإنترنت؟ النظام يستمر محلياً. بطارية احتياطية 8 ساعات."
          },
          {
            title: "قابل للتوسع",
            description: "ابدأ صغيراً، أضف معدات مع الوقت. كل شيء يبقى متوافقاً."
          },
          {
            title: "تركيب مضمون",
            description: "سنة ضمان على أعمالنا. سنتان على المنتجات. دعم 7/7."
          }
        ]
      },
      section6: {
        title: "الأسئلة الشائعة",
        questions: [
          {
            q: "كم يستغرق تركيب نظام كامل؟",
            a: "لشقة (باقة أساسية): 3-4 ساعات. لمنزل متوسط: نصف يوم. لفيلا أو تجارة: 1-2 يوم. نعطيك تقديراً دقيقاً بعد الزيارة."
          },
          {
            q: "هل يمكنني المراقبة من الخارج؟",
            a: "نعم! تطبيق Symloop يعمل في أي مكان في العالم. كثير من عملائنا يراقبون منازلهم في الجزائر من فرنسا أو كندا أو دول الخليج."
          },
          {
            q: "ماذا يحدث إذا انقطع الإنترنت؟",
            a: "النظام يستمر بالعمل محلياً. الكاميرات تسجل على بطاقة SD، الإنذار يبقى نشطاً، المستشعرات تعمل. فور عودة الإنترنت، كل شيء يتزامن."
          },
          {
            q: "هل يمكنني إضافة معدات لاحقاً؟",
            a: "بالتأكيد. نظام Symloop معياري. يمكنك إضافة كاميرات، مستشعرات، أو قفل متصل في أي وقت. يمكننا العودة للتركيب أو إرشادك عن بُعد."
          },
          {
            q: "هل الشرطة تُنبَّه تلقائياً؟",
            a: "ليس تلقائياً (اللوائح الجزائرية). لكن تستلم التنبيهات فوراً مع فيديو، ويمكنك قرار الاتصال بالشرطة. نعمل على شراكات مع شركات المراقبة عن بُعد."
          },
          {
            q: "ما هو عمر بطارية الاحتياط؟",
            a: "محور PRO له بطارية 8 ساعات. في حال انقطاع الكهرباء، يستمر بالعمل، يحافظ على الإنذار نشطاً، ويرسل لك تنبيهاً."
          }
        ]
      },
      cta: {
        title: "أمّن منزلك اليوم",
        subtitle: "زيارة مجانية وعرض سعر مخصص بدون التزام",
        button: "اطلب زيارتي المجانية",
        phone: "أو اتصل بنا: 0XXX XX XX XX",
        features: [
          "زيارة خلال 48 ساعة",
          "عرض سعر مجاني",
          "تركيب بواسطة خبراء"
        ]
      }
    }
  };

  const t = locale === "ar" ? blogData.ar : blogData.fr;

  const getIcon = (iconName) => {
    const icons = {
      Camera: <Camera className="w-6 h-6" />,
      Radio: <Radio className="w-6 h-6" />,
      Lock: <Lock className="w-6 h-6" />,
      Eye: <Eye className="w-6 h-6" />,
      Volume2: <Volume2 className="w-6 h-6" />,
      Video: <Video className="w-6 h-6" />,
      Key: <Key className="w-6 h-6" />,
      Smartphone: <Smartphone className="w-6 h-6" />
    };
    return icons[iconName] || <Shield className="w-6 h-6" />;
  };

  // Prepare FAQ data for SEO
  const faqsForSEO = t.faq.questions.map(q => ({
    question: q.q,
    answer: q.a
  }));

  // Products for schema
  const productsForSEO = t.packs.map(pack => ({
    name: pack.name,
    description: pack.ideal
  }));

  return (
    <>
      <BlogSEO
        title={t.meta.title}
        description={t.meta.description}
        keywords={locale === 'ar'
          ? 'تركيب إنذار منزل الجزائر, نظام أمان كامل, تركيب حساسات إنذار, قفل ذكي تركيب, symloop أمان, حماية منزل الجزائر'
          : 'installation alarme maison algérie, système sécurité complet, installation capteurs alarme, serrure connectée installation, symloop sécurité, protection maison algérie'}
        image="https://symloop.com/images/blog/securite-installation-algerie.jpg"
        slug="securite-maison-installation-complete-alarme-algerie-2026"
        datePublished="2025-12-30"
        dateModified="2025-12-30"
        author="Symloop Team"
        category={locale === 'ar' ? 'أمان المنزل' : 'Sécurité Maison'}
        readTime={t.hero.readTime}
        faqs={faqsForSEO}
        products={productsForSEO}
        locale={locale}
      />

      <main className={`min-h-screen bg-gradient-to-b from-slate-50 to-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-red-800 to-orange-700 text-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-red-200 hover:text-white mb-8 transition-colors">
              <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              {isRTL ? 'العودة للمدونة' : 'Retour au blog'}
            </Link>

            <span className="inline-block bg-yellow-500 text-yellow-900 text-sm font-bold px-4 py-1 rounded-full mb-6">
              {t.hero.badge}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.hero.title}</h1>
            <p className="text-2xl text-red-200 mb-6">{t.hero.subtitle}</p>
            <p className="text-lg opacity-90 mb-8 max-w-2xl">{t.hero.description}</p>

            <div className="flex flex-wrap gap-4 text-sm text-red-200">
              <span className="flex items-center gap-2"><User className="w-4 h-4" /> {t.hero.author}</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {t.hero.date}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {t.hero.readTime}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="container mx-auto px-4 max-w-4xl py-12">
          {/* Section 1: Components */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center">1</span>
              {t.section1.title}
            </h2>
            <p className="text-slate-700 mb-8">{t.section1.intro}</p>

            <div className="grid md:grid-cols-2 gap-4">
              {t.section1.components.map((component, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                    {getIcon(component.icon)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">{component.name}</h4>
                    <p className="text-slate-600 text-sm">{component.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Scenario */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-lg mb-12 text-white">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">2</span>
              {t.section2.title}
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                {t.section2.scenario.title}
              </h3>

              <div className="space-y-3">
                {t.section2.scenario.steps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <span className="bg-yellow-500 text-yellow-900 text-xs font-mono font-bold px-2 py-1 rounded flex-shrink-0">
                      {step.time}
                    </span>
                    <div className="flex-1">
                      <p className="font-medium">{step.event}</p>
                      <p className="text-sm opacity-70">{step.action}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-green-500/20 border border-green-400/30 rounded-lg p-4 text-center">
                <p className="text-green-400 font-bold">{t.section2.scenario.conclusion}</p>
              </div>
            </div>
          </div>

          {/* Section 3: Packs */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center">3</span>
              {t.section3.title}
            </h2>
            <p className="text-slate-700 mb-8">{t.section3.intro}</p>

            <div className="grid md:grid-cols-2 gap-6">
              {t.section3.packs.map((pack, idx) => (
                <div key={idx} className={`rounded-xl p-6 border-2 ${pack.popular ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50'}`}>
                  {pack.popular && (
                    <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                      {isRTL ? 'الأكثر شعبية' : 'Le plus populaire'}
                    </div>
                  )}
                  <h4 className="font-bold text-xl text-slate-800 mb-2">{pack.name}</h4>
                  <p className="text-sm text-slate-500 mb-4">{isRTL ? 'مثالي لـ:' : 'Idéal pour :'} {pack.ideal}</p>
                  <ul className="space-y-2">
                    {pack.includes.map((item, iIdx) => (
                      <li key={iIdx} className="text-sm text-slate-600 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-500 mt-6 text-sm">{t.section3.note}</p>
          </div>

          {/* Section 4: Process */}
          <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl p-8 shadow-lg mb-12 text-white">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">4</span>
              {t.section4.title}
            </h2>

            <div className="space-y-6">
              {t.section4.steps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 bg-white text-red-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                    <p className="opacity-90">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Why Symloop */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center">5</span>
              {t.section5.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {t.section5.reasons.map((reason, idx) => (
                <div key={idx} className="bg-red-50 rounded-xl p-5 border border-red-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                    <h4 className="font-bold text-slate-800">{reason.title}</h4>
                  </div>
                  <p className="text-slate-600 text-sm">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: FAQ */}
          <div className="bg-slate-50 rounded-2xl p-8 shadow-lg mb-12 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center">6</span>
              {t.section6.title}
            </h2>

            <div className="space-y-4">
              {t.section6.questions.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200">
                  <h4 className="font-bold text-slate-800 mb-2">{faq.q}</h4>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Blogs - Internal Linking for SEO */}
          <RelatedBlogs currentSlug="securite-maison-installation-complete-alarme-algerie-2026" locale={locale} />

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center">
            <Shield className="w-16 h-16 mx-auto mb-4 opacity-80" />
            <h2 className="text-2xl font-bold mb-2">{t.cta.title}</h2>
            <p className="opacity-90 mb-6">{t.cta.subtitle}</p>

            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {t.cta.features.map((feature, idx) => (
                <span key={idx} className="bg-white/20 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> {feature}
                </span>
              ))}
            </div>

            <Link href="/contact" className="inline-block bg-white text-red-600 font-bold px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
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
