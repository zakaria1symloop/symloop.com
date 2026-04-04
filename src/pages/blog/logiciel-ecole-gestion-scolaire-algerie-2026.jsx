"use client";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArrowLeft, Calendar, Clock, User,
  GraduationCap, TrendingUp, BookOpen, BarChart3,
  CheckCircle, Phone, Mail, Users,
  Layers, FileText, Shield, Zap,
  CalendarCheck, ClipboardList, CreditCard, Bell,
  UserPlus, Building2, MessageCircle, Award
} from "lucide-react";

export default function LogicielEcole2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const content = {
    fr: {
      title: "Logiciel de Gestion Scolaire en Algerie",
      subtitle: "Solution Complete pour Ecoles, Lycees, CEM et Etablissements Prives",
      metaTitle: "Logiciel Ecole Gestion Scolaire Algerie 2026 | Administration | Symloop",
      metaDesc: "Logiciel de gestion scolaire pour ecoles en Algerie. Inscriptions, notes, emplois du temps, absences, paiements. Interface arabe/francais. Demo gratuite.",
      date: "10 Janvier 2026",
      readTime: "14 min",
      author: "Symloop Team",
      category: "Logiciel Education",

      intro: "La digitalisation des etablissements scolaires algeriens est devenue une priorite. Notre logiciel de gestion scolaire permet aux ecoles primaires, CEM, lycees et etablissements prives de moderniser leur administration : inscriptions en ligne, gestion des notes, emplois du temps, suivi des absences, et communication avec les parents.",

      tableOfContents: {
        title: "Dans cet article",
        items: [
          "Pourquoi un logiciel de gestion scolaire ?",
          "Fonctionnalites principales",
          "Gestion pedagogique",
          "Communication parents-ecole",
          "Administration et finances",
          "Tarification par etablissement",
          "Formation et deploiement",
          "Comment demarrer"
        ]
      },

      section1: {
        title: "Pourquoi Digitaliser Votre Etablissement Scolaire ?",
        paragraphs: [
          "La gestion manuelle d'un etablissement scolaire genere des inefficacites : dossiers papier volumineux, erreurs dans les bulletins, difficultes de communication avec les parents, et perte de temps en taches administratives repetitives.",
          "Les parents algeriens attendent desormais un acces digital aux informations scolaires de leurs enfants : notes, absences, emploi du temps, et communication directe avec les enseignants. Un logiciel moderne repond a ces attentes.",
          "Notre solution est concue pour le systeme educatif algerien : nomenclature des matieres, systeme de notation national, calendrier scolaire, et interface complete en arabe et francais."
        ],
        stats: [
          { value: "-70%", label: "Paperasse administrative" },
          { value: "+85%", label: "Satisfaction parents" },
          { value: "-50%", label: "Erreurs bulletins" },
          { value: "24/7", label: "Acces informations" }
        ]
      },

      section2: {
        title: "Fonctionnalites Principales",
        features: [
          {
            title: "Gestion des Eleves",
            description: "Dossiers eleves complets avec historique scolaire.",
            items: ["Inscriptions en ligne", "Dossiers numeriques", "Photos et documents", "Historique complet"],
            icon: Users
          },
          {
            title: "Notes et Bulletins",
            description: "Saisie des notes et generation automatique des bulletins.",
            items: ["Saisie par enseignant", "Calcul automatique moyennes", "Bulletins PDF", "Classements"],
            icon: Award
          },
          {
            title: "Emplois du Temps",
            description: "Creation et gestion des emplois du temps classes et enseignants.",
            items: ["Generateur automatique", "Gestion des salles", "Remplacements", "Export PDF"],
            icon: CalendarCheck
          },
          {
            title: "Absences et Retards",
            description: "Suivi quotidien des presences avec alertes parents.",
            items: ["Appel numerique", "SMS parents", "Justificatifs", "Statistiques"],
            icon: ClipboardList
          },
          {
            title: "Communication",
            description: "Messagerie integree entre ecole, enseignants et parents.",
            items: ["Messages groupes", "Notifications push", "Annonces", "Reunions parents"],
            icon: MessageCircle
          },
          {
            title: "Facturation Scolarite",
            description: "Gestion des frais de scolarite et paiements.",
            items: ["Echeanciers", "Rappels automatiques", "Recus", "Suivi paiements"],
            icon: CreditCard
          }
        ]
      },

      section3: {
        title: "Gestion Pedagogique Avancee",
        intro: "Des outils puissants pour le suivi pedagogique :",
        adaptations: [
          {
            title: "Cahier de Textes Numerique",
            description: "Les enseignants saisissent les cours et devoirs, visibles par eleves et parents."
          },
          {
            title: "Suivi des Programmes",
            description: "Progression dans le programme officiel avec indicateurs visuels."
          },
          {
            title: "Ressources Pedagogiques",
            description: "Bibliotheque de documents partages : cours, exercices, corriges."
          },
          {
            title: "Evaluations en Ligne",
            description: "QCM et exercices en ligne avec correction automatique."
          },
          {
            title: "Conseils de Classe",
            description: "Preparation et PV des conseils de classe numeriques."
          },
          {
            title: "Orientation",
            description: "Suivi de l'orientation et des voeux des eleves (3eme, Terminale)."
          }
        ]
      },

      section4: {
        title: "Types d'Etablissements Supportes",
        sectors: [
          {
            name: "Ecoles Primaires",
            description: "Gestion adaptee au cycle primaire avec interface simplifiee.",
            benefits: ["Carnet de correspondance", "Livret scolaire", "Communication parents"]
          },
          {
            name: "CEM (Colleges)",
            description: "Gestion complete du cycle moyen avec suivi BEM.",
            benefits: ["Gestion matieres CEM", "Preparation BEM", "Conseils de classe"]
          },
          {
            name: "Lycees",
            description: "Toutes les filieres avec gestion du Baccalaureat.",
            benefits: ["Filieres (Lettres, Sciences, Tech)", "Preparation BAC", "Orientation"]
          },
          {
            name: "Ecoles Privees",
            description: "Fonctionnalites avancees pour etablissements prives.",
            benefits: ["Facturation complete", "Multi-langues", "Transport scolaire"]
          },
          {
            name: "Centres de Formation",
            description: "Formation professionnelle et continue.",
            benefits: ["Modules et certifications", "Stages", "Suivi stagiaires"]
          }
        ]
      },

      section5: {
        title: "Application Parents et Enseignants",
        intro: "Des applications mobiles pour tous les acteurs :",
        integrations: [
          { name: "App Parents", tools: ["Notes", "Absences", "Messages", "Paiements"], description: "Suivi complet de la scolarite depuis le smartphone" },
          { name: "App Enseignants", tools: ["Saisie notes", "Appel", "Cahier textes", "Messages"], description: "Gestion de classe mobile" },
          { name: "Portail Eleves", tools: ["Emploi du temps", "Devoirs", "Ressources", "Notes"], description: "Espace personnel eleve" },
          { name: "SMS Gateway", tools: ["Absences", "Notes", "Rappels", "Urgences"], description: "Notifications SMS automatiques" }
        ]
      },

      section6: {
        title: "Tarification par Type d'Etablissement",
        intro: "Des formules adaptees a la taille de votre etablissement :",
        plans: [
          {
            name: "Primaire",
            price: "14,900 DA",
            period: "/mois",
            users: "Jusqu'a 300 eleves",
            features: ["Gestion eleves", "Notes et bulletins", "Absences", "Communication parents", "Support email"]
          },
          {
            name: "CEM / Lycee",
            price: "29,900 DA",
            period: "/mois",
            users: "Jusqu'a 800 eleves",
            features: ["Tout Primaire +", "Emplois du temps", "Examens", "Conseils de classe", "App mobile", "Support prioritaire"]
          },
          {
            name: "Etablissement Prive",
            price: "Sur devis",
            period: "",
            users: "Eleves illimites",
            features: ["Tout CEM/Lycee +", "Facturation avancee", "Multi-sites", "Transport scolaire", "API", "Support dedie"]
          }
        ]
      },

      section7: {
        title: "Deploiement et Formation",
        phases: [
          {
            title: "1. Analyse des Besoins",
            description: "Etude de votre etablissement : cycles, effectifs, besoins specifiques."
          },
          {
            title: "2. Configuration",
            description: "Parametrage : annee scolaire, classes, matieres, enseignants, eleves."
          },
          {
            title: "3. Import des Donnees",
            description: "Migration des donnees existantes (eleves, historique notes)."
          },
          {
            title: "4. Formation",
            description: "Formation du personnel administratif, enseignants et direction."
          },
          {
            title: "5. Lancement",
            description: "Mise en production avec accompagnement renforce."
          }
        ]
      },

      wilayas: {
        title: "Nous Equipons les Etablissements Scolaires dans Toute l'Algerie",
        list: ["Alger", "Oran", "Constantine", "Annaba", "Setif", "Blida", "Batna", "Tlemcen", "Bejaia", "Tizi Ouzou"]
      },

      cta: {
        title: "Modernisez Votre Etablissement Scolaire",
        description: "Demandez une demonstration gratuite de notre logiciel de gestion scolaire. Nos consultants education vous accompagneront dans votre transformation digitale.",
        button: "Demander une Demo Gratuite",
        phone: "+213 549 575 512",
        email: "contact@symloop.com"
      },

      backToBlog: "Retour au Blog"
    },
    en: {
      title: "School Management Software in Algeria",
      subtitle: "Complete Solution for Primary Schools, Middle Schools, High Schools and Private Institutions",
      metaTitle: "School Management Software Algeria 2026 | Administration | Symloop",
      metaDesc: "School management software for schools in Algeria. Enrollment, grades, schedules, attendance, payments. Arabic/French interface. Free demo.",
      date: "January 10, 2026",
      readTime: "14 min",
      author: "Symloop Team",
      category: "Education Software",

      intro: "The digitalization of Algerian educational institutions has become a priority. Our school management software enables primary schools, middle schools, high schools and private institutions to modernize their administration: online enrollment, grade management, schedules, attendance tracking, and parent communication.",

      tableOfContents: {
        title: "In this article",
        items: [
          "Why school management software?",
          "Main features",
          "Pedagogical management",
          "Parent-school communication",
          "Administration and finances",
          "Pricing by institution",
          "Training and deployment",
          "How to get started"
        ]
      },

      section1: {
        title: "Why Digitalize Your School?",
        paragraphs: [
          "Manual school management creates inefficiencies: bulky paper files, report card errors, difficulties communicating with parents, and time lost on repetitive administrative tasks.",
          "Algerian parents now expect digital access to their children's school information: grades, absences, schedule, and direct communication with teachers. Modern software meets these expectations.",
          "Our solution is designed for the Algerian education system: subject nomenclature, national grading system, school calendar, and complete Arabic and French interface."
        ],
        stats: [
          { value: "-70%", label: "Administrative paperwork" },
          { value: "+85%", label: "Parent satisfaction" },
          { value: "-50%", label: "Report card errors" },
          { value: "24/7", label: "Information access" }
        ]
      },

      section2: {
        title: "Main Features",
        features: [
          {
            title: "Student Management",
            description: "Complete student files with academic history.",
            items: ["Online enrollment", "Digital files", "Photos and documents", "Complete history"],
            icon: Users
          },
          {
            title: "Grades and Report Cards",
            description: "Grade entry and automatic report card generation.",
            items: ["Teacher entry", "Auto average calculation", "PDF report cards", "Rankings"],
            icon: Award
          },
          {
            title: "Schedules",
            description: "Creation and management of class and teacher schedules.",
            items: ["Auto generator", "Room management", "Substitutions", "PDF export"],
            icon: CalendarCheck
          },
          {
            title: "Attendance and Tardiness",
            description: "Daily attendance tracking with parent alerts.",
            items: ["Digital roll call", "Parent SMS", "Excuses", "Statistics"],
            icon: ClipboardList
          },
          {
            title: "Communication",
            description: "Integrated messaging between school, teachers and parents.",
            items: ["Group messages", "Push notifications", "Announcements", "Parent meetings"],
            icon: MessageCircle
          },
          {
            title: "Tuition Billing",
            description: "Management of tuition fees and payments.",
            items: ["Payment plans", "Auto reminders", "Receipts", "Payment tracking"],
            icon: CreditCard
          }
        ]
      },

      section3: {
        title: "Advanced Pedagogical Management",
        intro: "Powerful tools for pedagogical monitoring:",
        adaptations: [
          {
            title: "Digital Class Diary",
            description: "Teachers enter lessons and homework, visible to students and parents."
          },
          {
            title: "Curriculum Tracking",
            description: "Progress in the official curriculum with visual indicators."
          },
          {
            title: "Teaching Resources",
            description: "Library of shared documents: lessons, exercises, solutions."
          },
          {
            title: "Online Assessments",
            description: "MCQ and online exercises with automatic grading."
          },
          {
            title: "Class Councils",
            description: "Preparation and digital minutes of class councils."
          },
          {
            title: "Career Guidance",
            description: "Tracking guidance and student choices (9th grade, Senior year)."
          }
        ]
      },

      section4: {
        title: "Supported Institution Types",
        sectors: [
          {
            name: "Primary Schools",
            description: "Management adapted to primary cycle with simplified interface.",
            benefits: ["Correspondence book", "School report", "Parent communication"]
          },
          {
            name: "Middle Schools (CEM)",
            description: "Complete middle cycle management with BEM tracking.",
            benefits: ["CEM subjects", "BEM preparation", "Class councils"]
          },
          {
            name: "High Schools",
            description: "All streams with Baccalaureate management.",
            benefits: ["Streams (Arts, Sciences, Tech)", "BAC preparation", "Guidance"]
          },
          {
            name: "Private Schools",
            description: "Advanced features for private institutions.",
            benefits: ["Complete billing", "Multi-language", "School transport"]
          },
          {
            name: "Training Centers",
            description: "Professional and continuing education.",
            benefits: ["Modules and certifications", "Internships", "Trainee tracking"]
          }
        ]
      },

      section5: {
        title: "Parent and Teacher Apps",
        intro: "Mobile apps for all stakeholders:",
        integrations: [
          { name: "Parent App", tools: ["Grades", "Attendance", "Messages", "Payments"], description: "Complete school tracking from smartphone" },
          { name: "Teacher App", tools: ["Grade entry", "Roll call", "Class diary", "Messages"], description: "Mobile classroom management" },
          { name: "Student Portal", tools: ["Schedule", "Homework", "Resources", "Grades"], description: "Personal student space" },
          { name: "SMS Gateway", tools: ["Absences", "Grades", "Reminders", "Emergencies"], description: "Automatic SMS notifications" }
        ]
      },

      section6: {
        title: "Pricing by Institution Type",
        intro: "Plans adapted to your institution size:",
        plans: [
          {
            name: "Primary",
            price: "14,900 DA",
            period: "/month",
            users: "Up to 300 students",
            features: ["Student management", "Grades and reports", "Attendance", "Parent communication", "Email support"]
          },
          {
            name: "Middle / High School",
            price: "29,900 DA",
            period: "/month",
            users: "Up to 800 students",
            features: ["Everything in Primary +", "Schedules", "Exams", "Class councils", "Mobile app", "Priority support"]
          },
          {
            name: "Private Institution",
            price: "Custom quote",
            period: "",
            users: "Unlimited students",
            features: ["Everything in Middle/High +", "Advanced billing", "Multi-site", "School transport", "API", "Dedicated support"]
          }
        ]
      },

      section7: {
        title: "Deployment and Training",
        phases: [
          {
            title: "1. Needs Analysis",
            description: "Study of your institution: cycles, enrollment, specific needs."
          },
          {
            title: "2. Configuration",
            description: "Setup: school year, classes, subjects, teachers, students."
          },
          {
            title: "3. Data Import",
            description: "Migration of existing data (students, grade history)."
          },
          {
            title: "4. Training",
            description: "Training for administrative staff, teachers and management."
          },
          {
            title: "5. Launch",
            description: "Production launch with enhanced support."
          }
        ]
      },

      wilayas: {
        title: "We Equip Schools Across Algeria",
        list: ["Algiers", "Oran", "Constantine", "Annaba", "Setif", "Blida", "Batna", "Tlemcen", "Bejaia", "Tizi Ouzou"]
      },

      cta: {
        title: "Modernize Your School",
        description: "Request a free demo of our school management software. Our education consultants will support your digital transformation.",
        button: "Request a Free Demo",
        phone: "+213 549 575 512",
        email: "contact@symloop.com"
      },

      backToBlog: "Back to Blog"
    },
    ar: {
      title: "برنامج إدارة المدارس في الجزائر",
      subtitle: "حل شامل للمدارس الابتدائية والمتوسطات والثانويات والمؤسسات الخاصة",
      metaTitle: "برنامج مدرسة إدارة مدرسية الجزائر 2026 | إدارة | Symloop",
      metaDesc: "برنامج إدارة مدرسية للمدارس في الجزائر. التسجيلات، الدرجات، الجداول، الغيابات، المدفوعات. واجهة عربية/فرنسية. عرض مجاني.",
      date: "10 يناير 2026",
      readTime: "14 دقيقة",
      author: "فريق Symloop",
      category: "برنامج تعليمي",

      intro: "أصبحت رقمنة المؤسسات التعليمية الجزائرية أولوية. يتيح برنامج الإدارة المدرسية لدينا للمدارس الابتدائية والمتوسطات والثانويات والمؤسسات الخاصة تحديث إدارتها: التسجيل عبر الإنترنت، إدارة الدرجات، الجداول، متابعة الغيابات، والتواصل مع الأولياء.",

      tableOfContents: {
        title: "في هذا المقال",
        items: [
          "لماذا برنامج إدارة مدرسية؟",
          "الميزات الرئيسية",
          "الإدارة البيداغوجية",
          "التواصل بين الأولياء والمدرسة",
          "الإدارة والمالية",
          "التسعير حسب المؤسسة",
          "التدريب والنشر",
          "كيف تبدأ"
        ]
      },

      section1: {
        title: "لماذا رقمنة مؤسستك التعليمية؟",
        paragraphs: [
          "تولد الإدارة اليدوية للمؤسسة التعليمية عدم كفاءة: ملفات ورقية ضخمة، أخطاء في الكشوف، صعوبات في التواصل مع الأولياء، وضياع الوقت في المهام الإدارية المتكررة.",
          "يتوقع الأولياء الجزائريون الآن وصولاً رقميًا إلى المعلومات المدرسية لأبنائهم: الدرجات، الغيابات، الجدول، والتواصل المباشر مع المعلمين. البرنامج الحديث يلبي هذه التوقعات.",
          "حلنا مصمم للنظام التعليمي الجزائري: تسمية المواد، نظام التنقيط الوطني، الروزنامة المدرسية، وواجهة كاملة بالعربية والفرنسية."
        ],
        stats: [
          { value: "-70%", label: "الأعمال الورقية" },
          { value: "+85%", label: "رضا الأولياء" },
          { value: "-50%", label: "أخطاء الكشوف" },
          { value: "24/7", label: "الوصول للمعلومات" }
        ]
      },

      section2: {
        title: "الميزات الرئيسية",
        features: [
          {
            title: "إدارة التلاميذ",
            description: "ملفات تلاميذ كاملة مع السجل الدراسي.",
            items: ["تسجيل عبر الإنترنت", "ملفات رقمية", "صور ووثائق", "سجل كامل"],
            icon: Users
          },
          {
            title: "الدرجات والكشوف",
            description: "إدخال الدرجات وإنشاء الكشوف تلقائيًا.",
            items: ["إدخال من المعلم", "حساب المعدلات تلقائيًا", "كشوف PDF", "الترتيب"],
            icon: Award
          },
          {
            title: "الجداول الزمنية",
            description: "إنشاء وإدارة جداول الأقسام والمعلمين.",
            items: ["مولد تلقائي", "إدارة القاعات", "الاستخلاف", "تصدير PDF"],
            icon: CalendarCheck
          },
          {
            title: "الغيابات والتأخر",
            description: "متابعة يومية للحضور مع تنبيهات للأولياء.",
            items: ["نداء رقمي", "رسائل SMS للأولياء", "التبريرات", "إحصائيات"],
            icon: ClipboardList
          },
          {
            title: "التواصل",
            description: "مراسلة متكاملة بين المدرسة والمعلمين والأولياء.",
            items: ["رسائل جماعية", "إشعارات فورية", "إعلانات", "اجتماعات الأولياء"],
            icon: MessageCircle
          },
          {
            title: "فوترة الرسوم",
            description: "إدارة رسوم الدراسة والمدفوعات.",
            items: ["جداول الدفع", "تذكيرات تلقائية", "إيصالات", "تتبع المدفوعات"],
            icon: CreditCard
          }
        ]
      },

      section3: {
        title: "إدارة بيداغوجية متقدمة",
        intro: "أدوات قوية للمتابعة البيداغوجية:",
        adaptations: [
          {
            title: "دفتر النصوص الرقمي",
            description: "يدخل المعلمون الدروس والواجبات، مرئية للتلاميذ والأولياء."
          },
          {
            title: "متابعة البرامج",
            description: "التقدم في البرنامج الرسمي مع مؤشرات بصرية."
          },
          {
            title: "الموارد البيداغوجية",
            description: "مكتبة وثائق مشتركة: دروس، تمارين، حلول."
          },
          {
            title: "التقييمات عبر الإنترنت",
            description: "اختيار من متعدد وتمارين عبر الإنترنت مع تصحيح تلقائي."
          },
          {
            title: "مجالس الأقسام",
            description: "تحضير ومحاضر مجالس الأقسام الرقمية."
          },
          {
            title: "التوجيه",
            description: "متابعة التوجيه ورغبات التلاميذ (الرابعة متوسط، نهائي)."
          }
        ]
      },

      section4: {
        title: "أنواع المؤسسات المدعومة",
        sectors: [
          {
            name: "المدارس الابتدائية",
            description: "إدارة مكيفة للطور الابتدائي مع واجهة مبسطة.",
            benefits: ["دفتر المراسلات", "الدفتر المدرسي", "التواصل مع الأولياء"]
          },
          {
            name: "المتوسطات (CEM)",
            description: "إدارة كاملة للطور المتوسط مع متابعة شهادة التعليم المتوسط.",
            benefits: ["مواد المتوسط", "تحضير BEM", "مجالس الأقسام"]
          },
          {
            name: "الثانويات",
            description: "جميع الشعب مع إدارة البكالوريا.",
            benefits: ["الشعب (آداب، علوم، تقني)", "تحضير BAC", "التوجيه"]
          },
          {
            name: "المدارس الخاصة",
            description: "ميزات متقدمة للمؤسسات الخاصة.",
            benefits: ["فوترة كاملة", "متعدد اللغات", "النقل المدرسي"]
          },
          {
            name: "مراكز التكوين",
            description: "التكوين المهني والمستمر.",
            benefits: ["الوحدات والشهادات", "التربصات", "متابعة المتربصين"]
          }
        ]
      },

      section5: {
        title: "تطبيقات الأولياء والمعلمين",
        intro: "تطبيقات جوال لجميع الأطراف:",
        integrations: [
          { name: "تطبيق الأولياء", tools: ["الدرجات", "الغيابات", "الرسائل", "المدفوعات"], description: "متابعة كاملة للدراسة من الهاتف" },
          { name: "تطبيق المعلمين", tools: ["إدخال الدرجات", "النداء", "دفتر النصوص", "الرسائل"], description: "إدارة القسم عبر الجوال" },
          { name: "بوابة التلاميذ", tools: ["الجدول", "الواجبات", "الموارد", "الدرجات"], description: "فضاء التلميذ الشخصي" },
          { name: "بوابة SMS", tools: ["الغيابات", "الدرجات", "التذكيرات", "الطوارئ"], description: "إشعارات SMS تلقائية" }
        ]
      },

      section6: {
        title: "التسعير حسب نوع المؤسسة",
        intro: "خطط مناسبة لحجم مؤسستك:",
        plans: [
          {
            name: "ابتدائي",
            price: "14,900 دج",
            period: "/شهر",
            users: "حتى 300 تلميذ",
            features: ["إدارة التلاميذ", "الدرجات والكشوف", "الغيابات", "التواصل مع الأولياء", "دعم بالبريد"]
          },
          {
            name: "متوسط / ثانوي",
            price: "29,900 دج",
            period: "/شهر",
            users: "حتى 800 تلميذ",
            features: ["كل ميزات الابتدائي +", "الجداول", "الامتحانات", "مجالس الأقسام", "تطبيق جوال", "دعم ذو أولوية"]
          },
          {
            name: "مؤسسة خاصة",
            price: "عرض مخصص",
            period: "",
            users: "تلاميذ غير محدودين",
            features: ["كل ميزات المتوسط/الثانوي +", "فوترة متقدمة", "مواقع متعددة", "النقل المدرسي", "API", "دعم مخصص"]
          }
        ]
      },

      section7: {
        title: "النشر والتدريب",
        phases: [
          {
            title: "1. تحليل الاحتياجات",
            description: "دراسة مؤسستك: الأطوار، الأعداد، الاحتياجات الخاصة."
          },
          {
            title: "2. التكوين",
            description: "الإعداد: السنة الدراسية، الأقسام، المواد، المعلمين، التلاميذ."
          },
          {
            title: "3. استيراد البيانات",
            description: "ترحيل البيانات الموجودة (التلاميذ، سجل الدرجات)."
          },
          {
            title: "4. التدريب",
            description: "تدريب الموظفين الإداريين والمعلمين والإدارة."
          },
          {
            title: "5. الإطلاق",
            description: "بدء الإنتاج مع دعم معزز."
          }
        ]
      },

      wilayas: {
        title: "نجهز المؤسسات التعليمية في جميع أنحاء الجزائر",
        list: ["الجزائر", "وهران", "قسنطينة", "عنابة", "سطيف", "البليدة", "باتنة", "تلمسان", "بجاية", "تيزي وزو"]
      },

      cta: {
        title: "حدّث مؤسستك التعليمية",
        description: "اطلب عرضًا مجانيًا لبرنامج الإدارة المدرسية. سيرافقك مستشارونا في التعليم في تحولك الرقمي.",
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
        <meta name="keywords" content="logiciel ecole algerie, gestion scolaire, logiciel college lycee, notes bulletins, emploi du temps, logiciel education algerie" />
        <link rel="canonical" href={`https://symloop.com/${locale === 'fr' ? '' : locale + '/'}blog/logiciel-ecole-gestion-scolaire-algerie-2026`} />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDesc} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/logiciel-ecole-gestion-scolaire-algerie-2026/" />
        <meta property="og:site_name" content="Symloop" />

        {/* FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quel est le meilleur logiciel de gestion scolaire en Alg\u00e9rie ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Symloop propose un logiciel de gestion scolaire complet, con\u00e7u pour le syst\u00e8me \u00e9ducatif alg\u00e9rien. Il couvre les inscriptions, notes, bulletins, emplois du temps, absences et communication parents, avec une interface en fran\u00e7ais et en arabe." }
              },
              {
                "@type": "Question",
                "name": "Combien co\u00fbte un logiciel de gestion scolaire en Alg\u00e9rie ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Les tarifs commencent \u00e0 14 900 DA/mois pour une \u00e9cole primaire (jusqu'\u00e0 300 \u00e9l\u00e8ves) et 29 900 DA/mois pour un CEM ou lyc\u00e9e (jusqu'\u00e0 800 \u00e9l\u00e8ves). Les \u00e9tablissements priv\u00e9s b\u00e9n\u00e9ficient d'un devis personnalis\u00e9." }
              },
              {
                "@type": "Question",
                "name": "Quelles fonctionnalit\u00e9s propose un logiciel de gestion scolaire ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Les fonctionnalit\u00e9s principales incluent : gestion des \u00e9l\u00e8ves et inscriptions, saisie des notes et g\u00e9n\u00e9ration de bulletins, emplois du temps, suivi des absences avec alertes SMS aux parents, cahier de textes num\u00e9rique, facturation de la scolarit\u00e9 et messagerie int\u00e9gr\u00e9e." }
              },
              {
                "@type": "Question",
                "name": "Symloop d\u00e9veloppe-t-il des logiciels pour \u00e9coles et universit\u00e9s en Alg\u00e9rie ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Oui, Symloop d\u00e9veloppe des logiciels de gestion scolaire sur mesure pour les \u00e9coles primaires, CEM, lyc\u00e9es, \u00e9tablissements priv\u00e9s et centres de formation en Alg\u00e9rie. L'\u00e9quipe est bas\u00e9e \u00e0 S\u00e9tif avec une couverture nationale." }
              },
              {
                "@type": "Question",
                "name": "Le logiciel inclut-il un portail parents ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Oui, le logiciel inclut une application mobile pour les parents permettant de consulter les notes, absences, emploi du temps, messages et paiements. Un syst\u00e8me de notifications SMS automatiques est \u00e9galement int\u00e9gr\u00e9 pour les alertes d'absences et de notes." }
              }
            ]
          })}
        </script>

        {/* BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com/" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog/" },
              { "@type": "ListItem", "position": 3, "name": "Logiciel Gestion Scolaire Alg\u00e9rie 2026", "item": "https://symloop.com/blog/logiciel-ecole-gestion-scolaire-algerie-2026/" }
            ]
          })}
        </script>

        {/* SpeakableSpecification */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Logiciel de Gestion Scolaire en Alg\u00e9rie 2026",
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "[data-speakable]", "#faq"] },
            "url": "https://symloop.com/blog/logiciel-ecole-gestion-scolaire-algerie-2026/"
          })}
        </script>
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
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
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

            {/* En bref — LLM Extraction Block */}
            <div data-speakable="summary" className="bg-white/5 border border-blue-500/20 rounded-2xl p-8 mb-16">
              <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">En bref</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                <strong className="text-white">Symloop</strong> d&eacute;veloppe des logiciels de gestion scolaire pour &eacute;coles et universit&eacute;s en Alg&eacute;rie.
                Notes, emploi du temps, absences, bulletins, portail parents, e-learning.
                Interface FR/AR. Bas&eacute; &agrave; S&eacute;tif.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-white">Contact :</strong> +213 549 575 512
              </p>
            </div>

            {/* TOC */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-16">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Layers className="w-5 h-5 text-blue-400" />
                {t.tableOfContents.title}
              </h2>
              <ul className="space-y-3">
                {t.tableOfContents.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <span className="w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-xs font-bold">{index + 1}</span>
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
                    <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
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
                      <div className="p-2 bg-blue-500/20 rounded-lg"><f.icon className="w-5 h-5 text-blue-400" /></div>
                      <h3 className="font-bold">{f.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{f.description}</p>
                    <ul className="space-y-1">
                      {f.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-blue-400" />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4">{t.section3.title}</h2>
              <p className="text-gray-300 mb-6">{t.section3.intro}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {t.section3.adaptations.map((a, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="font-bold mb-1 text-blue-400">{a.title}</h3>
                    <p className="text-sm text-gray-400">{a.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">{t.section4.title}</h2>
              <div className="space-y-4">
                {t.section4.sectors.map((s, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold mb-2">{s.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{s.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.benefits.map((b, j) => (
                        <span key={j} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">{b}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4">{t.section5.title}</h2>
              <p className="text-gray-300 mb-6">{t.section5.intro}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {t.section5.integrations.map((intg, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="font-bold mb-2">{intg.name}</h3>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {intg.tools.map((tool, j) => (
                        <span key={j} className="px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded text-xs">{tool}</span>
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
                  <div key={i} className={`bg-white/5 border rounded-xl p-6 ${i === 1 ? 'border-blue-500/50 ring-1 ring-blue-500/20' : 'border-white/10'}`}>
                    <h3 className="font-bold text-xl mb-2">{p.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-blue-400">{p.price}</span>
                      <span className="text-gray-400">{p.period}</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">{p.users}</p>
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

            {/* Section 7 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">{t.section7.title}</h2>
              <div className="space-y-4">
                {t.section7.phases.map((phase, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-400 font-bold">{i + 1}</span>
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

            {/* Cross-links */}
            <div className="mb-16">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Articles connexes</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/blog/solutions-informatiques-algerie-2026" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-500/10 hover:border-blue-500/20 transition-all text-sm text-gray-400 hover:text-blue-400">
                  <ArrowLeft className="w-4 h-4 flex-shrink-0 rotate-180" />
                  Solutions Informatiques Alg&eacute;rie 2026
                </Link>
                <Link href="/blog/digitaliser-entreprise-algerie-ne-perdez-plus-1-dinar" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-500/10 hover:border-blue-500/20 transition-all text-sm text-gray-400 hover:text-blue-400">
                  <ArrowLeft className="w-4 h-4 flex-shrink-0 rotate-180" />
                  Digitaliser Votre Entreprise &mdash; Ne Perdez Plus 1 Dinar
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-blue-500/20 border border-blue-500/30 rounded-2xl p-8 text-center">
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
