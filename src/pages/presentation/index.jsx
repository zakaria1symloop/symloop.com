"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Code2,
  Smartphone,
  Brain,
  Globe,
  Users,
  Target,
  Sparkles,
  Rocket,
  Heart,
  Shield,
  Zap,
  Phone,
  Mail,
  MapPin,
  Home,
  Quote,
  Lightbulb
} from "lucide-react";

// Presentation content in 3 languages
const content = {
  fr: {
    meta: {
      title: "Symloop - Presentation | Innovation Digitale en Algerie",
      description: "Decouvrez Symloop, votre partenaire technologique de confiance en Algerie. Solutions digitales sur mesure, expertise IA, et engagement envers l'excellence."
    },
    navigation: {
      home: "Accueil",
      skip: "Passer",
      slide: "Diapositive"
    },
    slides: [
      {
        type: "cover",
        title: "SYMLOOP",
        subtitle: "L'Innovation Digitale",
        tagline: "Transformer les idees en solutions numeriques",
        cta: "Decouvrir notre histoire"
      },
      {
        type: "about",
        badge: "QUI SOMMES-NOUS",
        title: "Votre Partenaire Technologique de Confiance",
        paragraphs: [
          "Symloop est une entreprise technologique algerienne fondee avec une vision claire : democratiser l'acces aux solutions digitales de haute qualite pour les entreprises de toutes tailles.",
          "Basee a Alger, au coeur de l'Algerie, nous combinons expertise technique internationale et comprehension profonde du marche local pour creer des solutions qui font vraiment la difference."
        ],
        stats: [
          { value: "2020", label: "Annee de creation" },
          { value: "50+", label: "Projets realises" },
          { value: "98%", label: "Clients satisfaits" },
          { value: "24/7", label: "Support disponible" }
        ]
      },
      {
        type: "founder",
        badge: "MOT DU FONDATEUR",
        quote: "Notre mission est de construire un pont entre le potentiel enorme de l'Algerie et les possibilites infinies de la technologie. Chaque ligne de code que nous ecrivons, chaque solution que nous deployons, est un pas vers un avenir numerique plus brillant pour notre pays.",
        name: "Fondateur & CEO",
        company: "Symloop",
        message: "Ensemble, construisons l'avenir numerique de l'Algerie."
      },
      {
        type: "mission",
        badge: "NOTRE MISSION",
        title: "Accelerer la Transformation Digitale",
        vision: {
          title: "Vision",
          text: "Devenir le leader de l'innovation technologique en Afrique du Nord, en creant des solutions qui inspirent et transforment."
        },
        mission: {
          title: "Mission",
          text: "Accompagner les entreprises algeriennes dans leur transformation digitale avec des solutions sur mesure, accessibles et performantes."
        },
        values: {
          title: "Valeurs",
          items: ["Innovation", "Excellence", "Integrite", "Collaboration"]
        }
      },
      {
        type: "services",
        badge: "NOS SERVICES",
        title: "Solutions Digitales Completes",
        services: [
          {
            icon: "Code2",
            title: "Developpement Web",
            description: "Sites web et applications sur mesure avec les technologies les plus recentes."
          },
          {
            icon: "Smartphone",
            title: "Applications Mobiles",
            description: "Apps iOS et Android natives ou cross-platform pour toucher tous vos utilisateurs."
          },
          {
            icon: "Brain",
            title: "Intelligence Artificielle",
            description: "Chatbots, automatisation et solutions IA pour optimiser vos processus."
          },
          {
            icon: "Globe",
            title: "Transformation Digitale",
            description: "Accompagnement complet dans votre transition vers le numerique."
          }
        ]
      },
      {
        type: "values",
        badge: "NOS VALEURS",
        title: "Ce Qui Nous Guide",
        values: [
          {
            icon: "Lightbulb",
            title: "Innovation Continue",
            description: "Nous explorons constamment de nouvelles technologies pour vous offrir le meilleur."
          },
          {
            icon: "Heart",
            title: "Passion du Client",
            description: "Votre succes est notre priorite absolue. Nous ecoutons, comprenons et delivrons."
          },
          {
            icon: "Shield",
            title: "Qualite Sans Compromis",
            description: "Chaque projet respecte les plus hauts standards de l'industrie."
          },
          {
            icon: "Users",
            title: "Esprit d'Equipe",
            description: "Une equipe soudee et passionnee, prete a relever tous les defis."
          }
        ]
      },
      {
        type: "impact",
        badge: "NOTRE IMPACT",
        title: "Des Resultats Concrets",
        metrics: [
          { value: "500K+", label: "Utilisateurs touches", suffix: "" },
          { value: "15+", label: "Wilayas servies", suffix: "" },
          { value: "40%", label: "Economies realisees", suffix: "avg" },
          { value: "99.9%", label: "Uptime garanti", suffix: "" }
        ],
        testimonial: {
          quote: "Symloop a transforme notre facon de travailler. Leur solution a revolutionne notre productivite.",
          author: "Client Entreprise",
          company: "Alger, Algerie"
        }
      },
      {
        type: "cta",
        badge: "PRET A COMMENCER ?",
        title: "Construisons Ensemble Votre Avenir Digital",
        subtitle: "Contactez-nous pour discuter de votre projet et decouvrir comment nous pouvons vous aider a atteindre vos objectifs.",
        buttons: {
          primary: "Demander un Devis",
          secondary: "Nous Contacter"
        },
        contact: {
          phone: "+213 549 575 512",
          email: "contact@symloop.com",
          address: "Alger, Algerie"
        }
      }
    ]
  },
  en: {
    meta: {
      title: "Symloop - Presentation | Digital Innovation in Algeria",
      description: "Discover Symloop, your trusted technology partner in Algeria. Custom digital solutions, AI expertise, and commitment to excellence."
    },
    navigation: {
      home: "Home",
      skip: "Skip",
      slide: "Slide"
    },
    slides: [
      {
        type: "cover",
        title: "SYMLOOP",
        subtitle: "Digital Innovation",
        tagline: "Transforming ideas into digital solutions",
        cta: "Discover our story"
      },
      {
        type: "about",
        badge: "WHO WE ARE",
        title: "Your Trusted Technology Partner",
        paragraphs: [
          "Symloop is an Algerian technology company founded with a clear vision: to democratize access to high-quality digital solutions for businesses of all sizes.",
          "Based in Algiers, in the heart of Algeria, we combine international technical expertise with deep understanding of the local market to create solutions that truly make a difference."
        ],
        stats: [
          { value: "2020", label: "Year founded" },
          { value: "50+", label: "Projects delivered" },
          { value: "98%", label: "Satisfied clients" },
          { value: "24/7", label: "Support available" }
        ]
      },
      {
        type: "founder",
        badge: "FOUNDER'S WORD",
        quote: "Our mission is to build a bridge between Algeria's enormous potential and technology's infinite possibilities. Every line of code we write, every solution we deploy, is a step toward a brighter digital future for our country.",
        name: "Founder & CEO",
        company: "Symloop",
        message: "Together, let's build Algeria's digital future."
      },
      {
        type: "mission",
        badge: "OUR MISSION",
        title: "Accelerating Digital Transformation",
        vision: {
          title: "Vision",
          text: "To become the leader of technological innovation in North Africa, creating solutions that inspire and transform."
        },
        mission: {
          title: "Mission",
          text: "To support Algerian businesses in their digital transformation with custom, accessible, and high-performance solutions."
        },
        values: {
          title: "Values",
          items: ["Innovation", "Excellence", "Integrity", "Collaboration"]
        }
      },
      {
        type: "services",
        badge: "OUR SERVICES",
        title: "Complete Digital Solutions",
        services: [
          {
            icon: "Code2",
            title: "Web Development",
            description: "Custom websites and applications with the latest technologies."
          },
          {
            icon: "Smartphone",
            title: "Mobile Applications",
            description: "Native or cross-platform iOS and Android apps to reach all your users."
          },
          {
            icon: "Brain",
            title: "Artificial Intelligence",
            description: "Chatbots, automation, and AI solutions to optimize your processes."
          },
          {
            icon: "Globe",
            title: "Digital Transformation",
            description: "Complete support in your transition to digital."
          }
        ]
      },
      {
        type: "values",
        badge: "OUR VALUES",
        title: "What Guides Us",
        values: [
          {
            icon: "Lightbulb",
            title: "Continuous Innovation",
            description: "We constantly explore new technologies to offer you the best."
          },
          {
            icon: "Heart",
            title: "Client Passion",
            description: "Your success is our absolute priority. We listen, understand, and deliver."
          },
          {
            icon: "Shield",
            title: "Uncompromised Quality",
            description: "Every project meets the highest industry standards."
          },
          {
            icon: "Users",
            title: "Team Spirit",
            description: "A united and passionate team, ready to take on any challenge."
          }
        ]
      },
      {
        type: "impact",
        badge: "OUR IMPACT",
        title: "Concrete Results",
        metrics: [
          { value: "500K+", label: "Users reached", suffix: "" },
          { value: "15+", label: "Wilayas served", suffix: "" },
          { value: "40%", label: "Savings achieved", suffix: "avg" },
          { value: "99.9%", label: "Guaranteed uptime", suffix: "" }
        ],
        testimonial: {
          quote: "Symloop transformed the way we work. Their solution revolutionized our productivity.",
          author: "Enterprise Client",
          company: "Algiers, Algeria"
        }
      },
      {
        type: "cta",
        badge: "READY TO START?",
        title: "Let's Build Your Digital Future Together",
        subtitle: "Contact us to discuss your project and discover how we can help you achieve your goals.",
        buttons: {
          primary: "Request a Quote",
          secondary: "Contact Us"
        },
        contact: {
          phone: "+213 549 575 512",
          email: "contact@symloop.com",
          address: "Algiers, Algeria"
        }
      }
    ]
  },
  ar: {
    meta: {
      title: "Symloop - العرض التقديمي | الابتكار الرقمي في الجزائر",
      description: "اكتشف Symloop، شريكك التكنولوجي الموثوق في الجزائر. حلول رقمية مخصصة، خبرة في الذكاء الاصطناعي، والتزام بالتميز."
    },
    navigation: {
      home: "الرئيسية",
      skip: "تخطي",
      slide: "شريحة"
    },
    slides: [
      {
        type: "cover",
        title: "SYMLOOP",
        subtitle: "الابتكار الرقمي",
        tagline: "تحويل الأفكار إلى حلول رقمية",
        cta: "اكتشف قصتنا"
      },
      {
        type: "about",
        badge: "من نحن",
        title: "شريكك التكنولوجي الموثوق",
        paragraphs: [
          "Symloop هي شركة تكنولوجيا جزائرية تأسست برؤية واضحة: إتاحة الوصول إلى حلول رقمية عالية الجودة للشركات من جميع الأحجام.",
          "مقرنا في الجزائر العاصمة، في قلب الجزائر، نجمع بين الخبرة التقنية الدولية والفهم العميق للسوق المحلي لإنشاء حلول تحدث فرقاً حقيقياً."
        ],
        stats: [
          { value: "2020", label: "سنة التأسيس" },
          { value: "+50", label: "مشروع منجز" },
          { value: "98%", label: "عملاء راضون" },
          { value: "24/7", label: "دعم متاح" }
        ]
      },
      {
        type: "founder",
        badge: "كلمة المؤسس",
        quote: "مهمتنا هي بناء جسر بين الإمكانات الهائلة للجزائر والإمكانيات اللامحدودة للتكنولوجيا. كل سطر من الكود نكتبه، كل حل ننشره، هو خطوة نحو مستقبل رقمي أكثر إشراقاً لبلدنا.",
        name: "المؤسس والرئيس التنفيذي",
        company: "Symloop",
        message: "معاً، لنبني مستقبل الجزائر الرقمي."
      },
      {
        type: "mission",
        badge: "مهمتنا",
        title: "تسريع التحول الرقمي",
        vision: {
          title: "الرؤية",
          text: "أن نصبح رائدين في الابتكار التكنولوجي في شمال أفريقيا، بإنشاء حلول تلهم وتحول."
        },
        mission: {
          title: "المهمة",
          text: "دعم الشركات الجزائرية في تحولها الرقمي بحلول مخصصة وسهلة الوصول وعالية الأداء."
        },
        values: {
          title: "القيم",
          items: ["الابتكار", "التميز", "النزاهة", "التعاون"]
        }
      },
      {
        type: "services",
        badge: "خدماتنا",
        title: "حلول رقمية شاملة",
        services: [
          {
            icon: "Code2",
            title: "تطوير الويب",
            description: "مواقع وتطبيقات مخصصة بأحدث التقنيات."
          },
          {
            icon: "Smartphone",
            title: "تطبيقات الجوال",
            description: "تطبيقات iOS و Android أصلية أو متعددة المنصات للوصول إلى جميع المستخدمين."
          },
          {
            icon: "Brain",
            title: "الذكاء الاصطناعي",
            description: "روبوتات الدردشة والأتمتة وحلول الذكاء الاصطناعي لتحسين عملياتك."
          },
          {
            icon: "Globe",
            title: "التحول الرقمي",
            description: "مرافقة كاملة في انتقالك إلى العالم الرقمي."
          }
        ]
      },
      {
        type: "values",
        badge: "قيمنا",
        title: "ما يوجهنا",
        values: [
          {
            icon: "Lightbulb",
            title: "الابتكار المستمر",
            description: "نستكشف باستمرار تقنيات جديدة لنقدم لك الأفضل."
          },
          {
            icon: "Heart",
            title: "شغف العميل",
            description: "نجاحك هو أولويتنا المطلقة. نستمع، نفهم، ونقدم."
          },
          {
            icon: "Shield",
            title: "جودة بلا تنازل",
            description: "كل مشروع يلتزم بأعلى معايير الصناعة."
          },
          {
            icon: "Users",
            title: "روح الفريق",
            description: "فريق متحد وشغوف، مستعد لمواجهة أي تحدٍ."
          }
        ]
      },
      {
        type: "impact",
        badge: "تأثيرنا",
        title: "نتائج ملموسة",
        metrics: [
          { value: "+500K", label: "مستخدم", suffix: "" },
          { value: "+15", label: "ولاية مخدومة", suffix: "" },
          { value: "40%", label: "توفير محقق", suffix: "متوسط" },
          { value: "99.9%", label: "وقت تشغيل مضمون", suffix: "" }
        ],
        testimonial: {
          quote: "غيّر Symloop طريقة عملنا. حلهم أحدث ثورة في إنتاجيتنا.",
          author: "عميل مؤسسة",
          company: "الجزائر العاصمة، الجزائر"
        }
      },
      {
        type: "cta",
        badge: "مستعد للبدء؟",
        title: "لنبني معاً مستقبلك الرقمي",
        subtitle: "تواصل معنا لمناقشة مشروعك واكتشاف كيف يمكننا مساعدتك في تحقيق أهدافك.",
        buttons: {
          primary: "اطلب عرض سعر",
          secondary: "تواصل معنا"
        },
        contact: {
          phone: "+213 549 575 512",
          email: "contact@symloop.com",
          address: "الجزائر العاصمة، الجزائر"
        }
      }
    ]
  }
};

// Icon mapping
const iconMap = {
  Code2, Smartphone, Brain, Globe, Users, Target, Sparkles, Rocket,
  Heart, Shield, Zap, Lightbulb
};

// Slide components
const CoverSlide = ({ data, isActive }) => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    {/* Animated background */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)"
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)"
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
    </div>

    <div className="relative z-10 text-center px-6 max-w-5xl">
      <AnimatePresence>
        {isActive && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                {data.tagline}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-[clamp(4rem,15vw,12rem)] font-black tracking-tighter leading-none mb-6"
              style={{
                background: "linear-gradient(135deg, #fff 0%, #a5b4fc 50%, #f472b6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 80px rgba(99,102,241,0.3)"
              }}
            >
              {data.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl md:text-3xl text-gray-400 font-light tracking-wide mb-12"
            >
              {data.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center justify-center gap-3"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-gray-500"
              >
                <span className="text-sm">{data.cta}</span>
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  </div>
);

const AboutSlide = ({ data, isActive, isRTL }) => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900" />

    {/* Decorative elements */}
    <div className="absolute top-20 right-20 w-32 h-32 border border-indigo-500/20 rounded-full" />
    <div className="absolute bottom-20 left-20 w-48 h-48 border border-pink-500/10 rounded-full" />

    <div className={`relative z-10 max-w-6xl mx-auto px-6 py-20 ${isRTL ? 'text-right' : 'text-left'}`}>
      <AnimatePresence>
        {isActive && (
          <>
            <motion.span
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-8"
            >
              {data.badge}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-8 max-w-4xl"
            >
              {data.title}
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                {data.paragraphs.map((p, i) => (
                  <p key={i} className="text-lg text-gray-400 leading-relaxed">
                    {p}
                  </p>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                {data.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  </div>
);

const FounderSlide = ({ data, isActive, isRTL, founderImage }) => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    {/* Dramatic gradient background */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-black to-zinc-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.15),transparent_50%)]" />
    </div>

    <div className={`relative z-10 max-w-5xl mx-auto px-6 py-20 ${isRTL ? 'text-right' : 'text-left'}`}>
      <AnimatePresence>
        {isActive && (
          <>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-400 text-sm font-medium mb-12"
            >
              {data.badge}
            </motion.span>

            <div className={`flex flex-col md:flex-row gap-12 items-center ${isRTL ? 'md:flex-row-reverse' : ''}`}>
              {/* Founder image placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex-shrink-0"
              >
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 bg-gradient-to-br from-indigo-500/20 to-pink-500/20">
                  {founderImage ? (
                    <img src={founderImage} alt="Founder" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Users className="w-24 h-24 text-white/20" />
                    </div>
                  )}
                </div>
                <motion.div
                  className="absolute -bottom-2 -right-2 w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Quote className="w-8 h-8 text-white" />
                </motion.div>
              </motion.div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex-1"
              >
                <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 italic">
                  &ldquo;{data.quote}&rdquo;
                </blockquote>
                <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-0.5 bg-indigo-500" />
                  <div>
                    <div className="font-semibold text-white">{data.name}</div>
                    <div className="text-sm text-gray-500">{data.company}</div>
                  </div>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-8 text-lg text-indigo-400 font-medium"
                >
                  {data.message}
                </motion.p>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  </div>
);

const MissionSlide = ({ data, isActive, isRTL }) => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-black" />

    {/* Animated background shapes */}
    <motion.div
      className="absolute top-0 left-0 w-1/2 h-full"
      style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.1) 0%, transparent 50%)" }}
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 6, repeat: Infinity }}
    />

    <div className={`relative z-10 max-w-6xl mx-auto px-6 py-20 ${isRTL ? 'text-right' : 'text-left'}`}>
      <AnimatePresence>
        {isActive && (
          <>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-8"
            >
              {data.badge}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-16"
            >
              {data.title}
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20 rounded-3xl p-8"
              >
                <Target className="w-10 h-10 text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-indigo-400">{data.vision.title}</h3>
                <p className="text-gray-400 leading-relaxed">{data.vision.text}</p>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20 rounded-3xl p-8"
              >
                <Rocket className="w-10 h-10 text-pink-400 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-pink-400">{data.mission.title}</h3>
                <p className="text-gray-400 leading-relaxed">{data.mission.text}</p>
              </motion.div>

              {/* Values */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-3xl p-8"
              >
                <Heart className="w-10 h-10 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-emerald-400">{data.values.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {data.values.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-emerald-500/10 rounded-full text-sm text-emerald-400">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  </div>
);

const ServicesSlide = ({ data, isActive, isRTL }) => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />

    <div className={`relative z-10 max-w-6xl mx-auto px-6 py-20 ${isRTL ? 'text-right' : 'text-left'}`}>
      <AnimatePresence>
        {isActive && (
          <>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-400 text-sm font-medium mb-8"
            >
              {data.badge}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-16"
            >
              {data.title}
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {data.services.map((service, i) => {
                const Icon = iconMap[service.icon];
                const colors = [
                  { bg: "from-indigo-500/10", border: "border-indigo-500/20", icon: "text-indigo-400" },
                  { bg: "from-pink-500/10", border: "border-pink-500/20", icon: "text-pink-400" },
                  { bg: "from-amber-500/10", border: "border-amber-500/20", icon: "text-amber-400" },
                  { bg: "from-emerald-500/10", border: "border-emerald-500/20", icon: "text-emerald-400" }
                ][i];

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                    className={`group bg-gradient-to-br ${colors.bg} to-transparent border ${colors.border} rounded-2xl p-6 hover:scale-[1.02] transition-transform cursor-pointer`}
                  >
                    <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className={`p-3 bg-white/5 rounded-xl ${colors.icon}`}>
                        {Icon && <Icon className="w-6 h-6" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  </div>
);

const ValuesSlide = ({ data, isActive, isRTL }) => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-black" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_70%)]" />

    <div className={`relative z-10 max-w-6xl mx-auto px-6 py-20 ${isRTL ? 'text-right' : 'text-left'}`}>
      <AnimatePresence>
        {isActive && (
          <>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-400 text-sm font-medium mb-8"
            >
              {data.badge}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-16"
            >
              {data.title}
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {data.values.map((value, i) => {
                const Icon = iconMap[value.icon];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                    className={`flex items-start gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-indigo-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                      {Icon && <Icon className="w-7 h-7 text-white" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  </div>
);

const ImpactSlide = ({ data, isActive, isRTL }) => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-black to-pink-950" />

    <div className={`relative z-10 max-w-6xl mx-auto px-6 py-20 ${isRTL ? 'text-right' : 'text-left'}`}>
      <AnimatePresence>
        {isActive && (
          <>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-400 text-sm font-medium mb-8"
            >
              {data.badge}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-16"
            >
              {data.title}
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {data.metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                    className="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent mb-2"
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-sm text-gray-400">
                    {metric.label}
                    {metric.suffix && <span className="text-xs ml-1">({metric.suffix})</span>}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
            >
              <Quote className="w-10 h-10 text-indigo-400/50 mb-4" />
              <p className="text-xl text-gray-300 italic mb-6">&ldquo;{data.testimonial.quote}&rdquo;</p>
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full" />
                <div>
                  <div className="font-semibold">{data.testimonial.author}</div>
                  <div className="text-sm text-gray-500">{data.testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  </div>
);

const CTASlide = ({ data, isActive, isRTL }) => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    {/* Animated gradient background */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-black to-pink-900" />
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 30% 50%, rgba(99,102,241,0.3) 0%, transparent 50%)"
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 70% 50%, rgba(236,72,153,0.3) 0%, transparent 50%)"
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
    </div>

    <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
      <AnimatePresence>
        {isActive && (
          <>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium mb-8"
            >
              {data.badge}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              {data.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              {data.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-colors"
              >
                {data.buttons.primary}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${data.contact.phone}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-medium rounded-full hover:bg-white/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {data.buttons.secondary}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-8 text-gray-400"
            >
              <a href={`tel:${data.contact.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                {data.contact.phone}
              </a>
              <a href={`mailto:${data.contact.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                {data.contact.email}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {data.contact.address}
              </span>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  </div>
);

// Main Presentation Component
export default function Presentation() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';
  const t = content[locale] || content.fr;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [founderImage, setFounderImage] = useState(null);
  const touchStart = useRef(null);
  const totalSlides = t.slides.length;

  const goToSlide = useCallback((index) => {
    if (isTransitioning || index < 0 || index >= totalSlides) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning, totalSlides]);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(totalSlides - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, totalSlides]);

  // Mouse wheel navigation
  useEffect(() => {
    let lastScrollTime = 0;
    const handleWheel = (e) => {
      const now = Date.now();
      if (now - lastScrollTime < 1000) return;

      if (e.deltaY > 50) {
        nextSlide();
        lastScrollTime = now;
      } else if (e.deltaY < -50) {
        prevSlide();
        lastScrollTime = now;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [nextSlide, prevSlide]);

  // Touch navigation
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (!touchStart.current) return;
    const diff = touchStart.current - e.changedTouches[0].clientY;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStart.current = null;
  };

  // Render current slide
  const renderSlide = (slideData, index) => {
    const isActive = currentSlide === index;
    const props = { data: slideData, isActive, isRTL };

    switch (slideData.type) {
      case 'cover': return <CoverSlide {...props} />;
      case 'about': return <AboutSlide {...props} />;
      case 'founder': return <FounderSlide {...props} founderImage={founderImage} />;
      case 'mission': return <MissionSlide {...props} />;
      case 'services': return <ServicesSlide {...props} />;
      case 'values': return <ValuesSlide {...props} />;
      case 'impact': return <ImpactSlide {...props} />;
      case 'cta': return <CTASlide {...props} />;
      default: return null;
    }
  };

  return (
    <>
      <Head>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta property="og:title" content={t.meta.title} />
        <meta property="og:description" content={t.meta.description} />
        <link rel="canonical" href={`https://symloop.com/${locale === 'fr' ? '' : locale + '/'}presentation`} />
      </Head>

      <div
        className={`fixed inset-0 bg-black text-white overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}
        dir={isRTL ? 'rtl' : 'ltr'}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation header */}
        <div className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="hidden md:inline">{t.navigation.home}</span>
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-sm text-white/40">
              {t.navigation.slide} {currentSlide + 1} / {totalSlides}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="fixed top-0 left-0 right-0 z-40 h-1 bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 to-pink-500"
            initial={{ width: 0 }}
            animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-full"
          >
            {renderSlide(t.slides[currentSlide], currentSlide)}
          </motion.div>
        </AnimatePresence>

        {/* Side navigation dots */}
        <div className={`fixed top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 ${isRTL ? 'left-4 md:left-6' : 'right-4 md:right-6'}`}>
          {t.slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-white scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`${t.navigation.slide} ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom navigation arrows */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-3 rounded-full border transition-all ${
              currentSlide === 0
                ? 'border-white/10 text-white/20 cursor-not-allowed'
                : 'border-white/20 text-white hover:bg-white/10'
            }`}
          >
            <ChevronUp className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`p-3 rounded-full border transition-all ${
              currentSlide === totalSlides - 1
                ? 'border-white/10 text-white/20 cursor-not-allowed'
                : 'border-white/20 text-white hover:bg-white/10'
            }`}
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* Keyboard hint */}
        <div className="fixed bottom-6 right-6 hidden md:flex items-center gap-2 text-white/30 text-xs">
          <kbd className="px-2 py-1 bg-white/5 rounded">↑</kbd>
          <kbd className="px-2 py-1 bg-white/5 rounded">↓</kbd>
          <span>or scroll</span>
        </div>
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
