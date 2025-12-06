"use client";
import { Calendar, User, ArrowLeft, Cpu, Brain, Bot, Sparkles, Zap, BarChart3, MessageSquare, Shield, CheckCircle, TrendingUp, Building, Globe, MessageCircle, Rocket, Target, Users, Lightbulb, Award } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';

export default function IntelligenceArtificielleAlgerie2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const content = {
    fr: {
      backToBlog: "Retour au blog",
      category: "Intelligence Artificielle",
      readTime: "15 min de lecture",
      title: "Intelligence Artificielle",
      titleHighlight: "Algérie 2026",
      subtitle: "Tendances, Opportunités et Guide Stratégique pour les Entreprises Algériennes",
      author: "Symloop Team",
      date: "5 décembre 2025",
      intro: "L'année 2026 marque un tournant décisif pour l'Intelligence Artificielle en Algérie. Avec l'adoption croissante des technologies IA par les entreprises et le gouvernement, l'Algérie se positionne comme un hub technologique émergent dans la région MENA.",
      stats: {
        title: "L'IA en Algérie : Chiffres Clés 2026",
        items: [
          { value: "+65%", label: "Croissance marché IA" },
          { value: "$2.5B", label: "Investissement prévu" },
          { value: "85%", label: "PME adoptent l'IA" },
          { value: "10K+", label: "Emplois IA créés" }
        ]
      },
      trends: {
        title: "Tendances IA Majeures 2026",
        items: [
          {
            icon: Brain,
            title: "IA Générative Avancée",
            desc: "GPT-5, Claude 4 et modèles locaux pour le contenu arabe dialectal algérien. Génération de texte, images et code automatisée.",
            features: ["Contenu marketing automatisé", "Assistants virtuels intelligents", "Génération de code"]
          },
          {
            icon: Bot,
            title: "Agents IA Autonomes",
            desc: "Des agents capables d'exécuter des tâches complexes de bout en bout : recherche, analyse, prise de décision.",
            features: ["Automatisation workflow", "Analyse de données avancée", "Décisions en temps réel"]
          },
          {
            icon: Globe,
            title: "IA Multilingue MENA",
            desc: "Modèles spécialisés pour l'arabe standard et dialectal (Darija algérienne), français et anglais.",
            features: ["NLP arabe dialectal", "Traduction contextuelle", "Reconnaissance vocale locale"]
          },
          {
            icon: Shield,
            title: "IA Souveraine & Sécurisée",
            desc: "Hébergement local des données, conformité aux réglementations algériennes, IA de confiance.",
            features: ["Data centers locaux", "Conformité RGPD", "Audit IA éthique"]
          }
        ]
      },
      sectors: {
        title: "Secteurs Transformés par l'IA en 2026",
        items: [
          { sector: "Gouvernement", uses: ["رقمنة Services publics", "Chatbots citoyens", "Prédiction trafic"], color: "bg-blue-600" },
          { sector: "Banque & Finance", uses: ["Scoring crédit IA", "Détection fraude", "Finance islamique IA"], color: "bg-green-600" },
          { sector: "Santé", uses: ["Diagnostic assisté", "Dossier patient IA", "Télémédecine intelligente"], color: "bg-red-500" },
          { sector: "E-commerce", uses: ["Recommandations personnalisées", "Pricing dynamique", "Support 24/7"], color: "bg-orange-500" },
          { sector: "Industrie", uses: ["Maintenance prédictive", "Contrôle qualité vision", "Optimisation production"], color: "bg-gray-700" },
          { sector: "Éducation", uses: ["Tuteurs IA personnalisés", "Évaluation automatique", "Contenu adaptatif"], color: "bg-purple-600" }
        ]
      },
      opportunities: {
        title: "Opportunités pour les Entreprises Algériennes",
        items: [
          { icon: Rocket, title: "Premiers Adopteurs", desc: "Les entreprises qui adoptent l'IA maintenant auront 3 ans d'avance sur leurs concurrents." },
          { icon: Target, title: "Marché MENA", desc: "L'Algérie peut devenir un exportateur de solutions IA vers les 400M+ habitants de la région MENA." },
          { icon: Users, title: "Talents Locaux", desc: "Formation et attraction de talents IA algériens pour construire un écosystème durable." },
          { icon: Award, title: "Excellence Régionale", desc: "Positionnement comme leader IA maghrébin et africain avec des solutions adaptées localement." }
        ]
      },
      pricing: {
        title: "Investissement IA en 2026",
        warning: "Tarifs indicatifs. Le coût exact dépend de la complexité et des intégrations requises.",
        items: [
          { solution: "Chatbot IA Standard", includes: "GPT-4, WhatsApp, multilingue", delay: "2-3 semaines", price: "400K - 700K DA" },
          { solution: "Agent IA Autonome", includes: "Workflows complexes, intégrations", delay: "4-8 semaines", price: "1M - 2.5M DA" },
          { solution: "Solution IA Entreprise", includes: "Multi-modules, ML personnalisé", delay: "2-4 mois", price: "3M - 10M DA" },
          { solution: "Transformation IA Complète", includes: "Stratégie, formation, déploiement", delay: "6-12 mois", price: "Sur devis" }
        ]
      },
      cta: {
        title: "Préparez Votre Entreprise pour l'IA 2026",
        desc: "Obtenez une consultation gratuite pour évaluer comment l'IA peut transformer votre business.",
        button1: "Consultation Gratuite",
        button2: "Demander un Devis"
      },
      whatsappMessage: "Bonjour, je souhaite préparer mon entreprise pour l'IA en 2026"
    },
    en: {
      backToBlog: "Back to blog",
      category: "Artificial Intelligence",
      readTime: "15 min read",
      title: "Artificial Intelligence",
      titleHighlight: "Algeria 2026",
      subtitle: "Trends, Opportunities and Strategic Guide for Algerian Businesses",
      author: "Symloop Team",
      date: "December 5, 2025",
      intro: "2026 marks a decisive turning point for Artificial Intelligence in Algeria. With increasing adoption of AI technologies by businesses and government, Algeria is positioning itself as an emerging tech hub in the MENA region.",
      stats: {
        title: "AI in Algeria: Key Figures 2026",
        items: [
          { value: "+65%", label: "AI Market Growth" },
          { value: "$2.5B", label: "Expected Investment" },
          { value: "85%", label: "SMEs Adopting AI" },
          { value: "10K+", label: "AI Jobs Created" }
        ]
      },
      trends: {
        title: "Major AI Trends 2026",
        items: [
          {
            icon: Brain,
            title: "Advanced Generative AI",
            desc: "GPT-5, Claude 4 and local models for Algerian Arabic dialect content. Automated text, image and code generation.",
            features: ["Automated marketing content", "Intelligent virtual assistants", "Code generation"]
          },
          {
            icon: Bot,
            title: "Autonomous AI Agents",
            desc: "Agents capable of executing complex end-to-end tasks: research, analysis, decision-making.",
            features: ["Workflow automation", "Advanced data analysis", "Real-time decisions"]
          },
          {
            icon: Globe,
            title: "MENA Multilingual AI",
            desc: "Specialized models for standard and dialectal Arabic (Algerian Darija), French and English.",
            features: ["Dialectal Arabic NLP", "Contextual translation", "Local speech recognition"]
          },
          {
            icon: Shield,
            title: "Sovereign & Secure AI",
            desc: "Local data hosting, compliance with Algerian regulations, trustworthy AI.",
            features: ["Local data centers", "GDPR compliance", "Ethical AI audit"]
          }
        ]
      },
      sectors: {
        title: "Sectors Transformed by AI in 2026",
        items: [
          { sector: "Government", uses: ["Public service digitization", "Citizen chatbots", "Traffic prediction"], color: "bg-blue-600" },
          { sector: "Banking & Finance", uses: ["AI credit scoring", "Fraud detection", "Islamic finance AI"], color: "bg-green-600" },
          { sector: "Healthcare", uses: ["Assisted diagnosis", "AI patient records", "Smart telemedicine"], color: "bg-red-500" },
          { sector: "E-commerce", uses: ["Personalized recommendations", "Dynamic pricing", "24/7 support"], color: "bg-orange-500" },
          { sector: "Industry", uses: ["Predictive maintenance", "Vision quality control", "Production optimization"], color: "bg-gray-700" },
          { sector: "Education", uses: ["Personalized AI tutors", "Auto evaluation", "Adaptive content"], color: "bg-purple-600" }
        ]
      },
      opportunities: {
        title: "Opportunities for Algerian Businesses",
        items: [
          { icon: Rocket, title: "Early Adopters", desc: "Companies adopting AI now will have a 3-year head start on competitors." },
          { icon: Target, title: "MENA Market", desc: "Algeria can become an AI solution exporter to the 400M+ MENA region population." },
          { icon: Users, title: "Local Talent", desc: "Training and attracting Algerian AI talent to build a sustainable ecosystem." },
          { icon: Award, title: "Regional Excellence", desc: "Positioning as Maghreb and African AI leader with locally adapted solutions." }
        ]
      },
      pricing: {
        title: "AI Investment in 2026",
        warning: "Indicative prices. Actual cost depends on complexity and required integrations.",
        items: [
          { solution: "Standard AI Chatbot", includes: "GPT-4, WhatsApp, multilingual", delay: "2-3 weeks", price: "400K - 700K DA" },
          { solution: "Autonomous AI Agent", includes: "Complex workflows, integrations", delay: "4-8 weeks", price: "1M - 2.5M DA" },
          { solution: "Enterprise AI Solution", includes: "Multi-module, custom ML", delay: "2-4 months", price: "3M - 10M DA" },
          { solution: "Complete AI Transformation", includes: "Strategy, training, deployment", delay: "6-12 months", price: "On quote" }
        ]
      },
      cta: {
        title: "Prepare Your Business for AI 2026",
        desc: "Get a free consultation to assess how AI can transform your business.",
        button1: "Free Consultation",
        button2: "Request Quote"
      },
      whatsappMessage: "Hello, I want to prepare my business for AI in 2026"
    },
    ar: {
      backToBlog: "العودة إلى المدونة",
      category: "الذكاء الاصطناعي",
      readTime: "15 دقيقة قراءة",
      title: "الذكاء الاصطناعي",
      titleHighlight: "الجزائر 2026",
      subtitle: "الاتجاهات والفرص والدليل الاستراتيجي للشركات الجزائرية",
      author: "فريق سيملوب",
      date: "5 ديسمبر 2025",
      intro: "يمثل عام 2026 نقطة تحول حاسمة للذكاء الاصطناعي في الجزائر. مع تزايد اعتماد تقنيات الذكاء الاصطناعي من قبل الشركات والحكومة، تتموقع الجزائر كمركز تقني ناشئ في منطقة مينا.",
      stats: {
        title: "الذكاء الاصطناعي في الجزائر: أرقام رئيسية 2026",
        items: [
          { value: "+65%", label: "نمو سوق الذكاء الاصطناعي" },
          { value: "$2.5B", label: "الاستثمار المتوقع" },
          { value: "85%", label: "الشركات الصغيرة تتبنى الذكاء الاصطناعي" },
          { value: "10K+", label: "وظائف ذكاء اصطناعي جديدة" }
        ]
      },
      trends: {
        title: "اتجاهات الذكاء الاصطناعي الرئيسية 2026",
        items: [
          {
            icon: Brain,
            title: "الذكاء الاصطناعي التوليدي المتقدم",
            desc: "GPT-5 و Claude 4 ونماذج محلية للمحتوى باللهجة الجزائرية. توليد النصوص والصور والكود آليًا.",
            features: ["محتوى تسويقي آلي", "مساعدون افتراضيون أذكياء", "توليد الكود"]
          },
          {
            icon: Bot,
            title: "وكلاء ذكاء اصطناعي مستقلون",
            desc: "وكلاء قادرون على تنفيذ مهام معقدة من البداية للنهاية: البحث والتحليل واتخاذ القرار.",
            features: ["أتمتة سير العمل", "تحليل بيانات متقدم", "قرارات في الوقت الفعلي"]
          },
          {
            icon: Globe,
            title: "ذكاء اصطناعي متعدد اللغات لمنطقة مينا",
            desc: "نماذج متخصصة للعربية الفصحى والدارجة الجزائرية والفرنسية والإنجليزية.",
            features: ["معالجة اللغة العربية الدارجة", "ترجمة سياقية", "التعرف على الصوت المحلي"]
          },
          {
            icon: Shield,
            title: "ذكاء اصطناعي سيادي وآمن",
            desc: "استضافة محلية للبيانات، الامتثال للوائح الجزائرية، ذكاء اصطناعي موثوق.",
            features: ["مراكز بيانات محلية", "امتثال RGPD", "تدقيق أخلاقي للذكاء الاصطناعي"]
          }
        ]
      },
      sectors: {
        title: "القطاعات المتحولة بالذكاء الاصطناعي في 2026",
        items: [
          { sector: "الحكومة", uses: ["رقمنة الخدمات العامة", "روبوتات دردشة للمواطنين", "توقع حركة المرور"], color: "bg-blue-600" },
          { sector: "البنوك والمالية", uses: ["تقييم ائتماني بالذكاء الاصطناعي", "كشف الاحتيال", "المالية الإسلامية"], color: "bg-green-600" },
          { sector: "الصحة", uses: ["تشخيص مساعد", "سجلات المرضى بالذكاء الاصطناعي", "طب عن بعد ذكي"], color: "bg-red-500" },
          { sector: "التجارة الإلكترونية", uses: ["توصيات مخصصة", "تسعير ديناميكي", "دعم 24/7"], color: "bg-orange-500" },
          { sector: "الصناعة", uses: ["صيانة تنبؤية", "مراقبة جودة بالرؤية", "تحسين الإنتاج"], color: "bg-gray-700" },
          { sector: "التعليم", uses: ["مدرسون ذكاء اصطناعي مخصصون", "تقييم آلي", "محتوى تكيفي"], color: "bg-purple-600" }
        ]
      },
      opportunities: {
        title: "فرص للشركات الجزائرية",
        items: [
          { icon: Rocket, title: "المتبنون الأوائل", desc: "الشركات التي تتبنى الذكاء الاصطناعي الآن ستتقدم 3 سنوات على منافسيها." },
          { icon: Target, title: "سوق مينا", desc: "يمكن للجزائر أن تصبح مصدرة لحلول الذكاء الاصطناعي لأكثر من 400 مليون نسمة في المنطقة." },
          { icon: Users, title: "المواهب المحلية", desc: "تدريب واستقطاب مواهب الذكاء الاصطناعي الجزائرية لبناء نظام بيئي مستدام." },
          { icon: Award, title: "التميز الإقليمي", desc: "التموقع كقائد للذكاء الاصطناعي في المغرب العربي وأفريقيا بحلول محلية." }
        ]
      },
      pricing: {
        title: "استثمار الذكاء الاصطناعي في 2026",
        warning: "أسعار إرشادية. التكلفة الفعلية تعتمد على التعقيد والتكاملات المطلوبة.",
        items: [
          { solution: "روبوت دردشة ذكاء اصطناعي قياسي", includes: "GPT-4، واتساب، متعدد اللغات", delay: "2-3 أسابيع", price: "400K - 700K DA" },
          { solution: "وكيل ذكاء اصطناعي مستقل", includes: "سير عمل معقد، تكاملات", delay: "4-8 أسابيع", price: "1M - 2.5M DA" },
          { solution: "حل ذكاء اصطناعي للمؤسسات", includes: "وحدات متعددة، تعلم آلي مخصص", delay: "2-4 أشهر", price: "3M - 10M DA" },
          { solution: "تحول ذكاء اصطناعي كامل", includes: "استراتيجية، تدريب، نشر", delay: "6-12 شهر", price: "حسب الطلب" }
        ]
      },
      cta: {
        title: "جهز شركتك للذكاء الاصطناعي 2026",
        desc: "احصل على استشارة مجانية لتقييم كيف يمكن للذكاء الاصطناعي تحويل عملك.",
        button1: "استشارة مجانية",
        button2: "طلب عرض سعر"
      },
      whatsappMessage: "مرحبا، أريد تجهيز شركتي للذكاء الاصطناعي في 2026"
    }
  };

  const t = content[locale] || content.fr;

  return (
    <>
      <Head>
        <title>Intelligence Artificielle Algérie 2026 | Tendances IA MENA | Symloop</title>
        <meta name="description" content="Guide complet sur l'Intelligence Artificielle en Algérie 2026. Tendances IA, opportunités business, solutions chatbot, agents IA autonomes. Expert IA Algérie." />
        <meta name="keywords" content="intelligence artificielle algérie 2026, ia algérie, ai algeria 2026, chatbot algérie, agent ia, machine learning algérie, deep learning, gpt algérie, claude algérie" />
        <link rel="canonical" href="https://symloop.com/blog/intelligence-artificielle-algerie-2026" />

        <meta property="og:title" content="Intelligence Artificielle Algérie 2026 | Tendances IA | Symloop" />
        <meta property="og:description" content="Guide complet sur l'IA en Algérie 2026. Tendances, opportunités et solutions pour les entreprises algériennes." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://symloop.com/blog/intelligence-artificielle-algerie-2026" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Intelligence Artificielle Algérie 2026 - Tendances et Opportunités",
            "description": "Guide complet sur l'Intelligence Artificielle en Algérie 2026. Tendances IA, opportunités business, solutions chatbot, agents IA autonomes.",
            "author": { "@type": "Organization", "name": "Symloop" },
            "publisher": { "@type": "Organization", "name": "Symloop" },
            "datePublished": "2025-12-05",
            "mainEntityOfPage": "https://symloop.com/blog/intelligence-artificielle-algerie-2026"
          })}
        </script>
      </Head>

      <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                {t.backToBlog}
              </Link>

              <div className="flex items-center gap-3 mb-6">
                <span className="bg-purple-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  {t.category}
                </span>
                <span className="text-gray-400 text-sm">{t.readTime}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {t.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t.titleHighlight}</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">{t.subtitle}</p>

              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {t.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {t.date}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">{t.intro}</p>
            </div>

            {/* Stats Box */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 rounded-r-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{t.stats.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {t.stats.items.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-purple-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trends */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                </div>
                {t.trends.title}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {t.trends.items.map((trend, index) => (
                  <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-purple-200 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4">
                      <trend.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{trend.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{trend.desc}</p>
                    <ul className="space-y-2 text-sm">
                      {trend.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Sectors */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Building className="w-5 h-5 text-green-600" />
                </div>
                {t.sectors.title}
              </h2>

              <div className="space-y-4">
                {t.sectors.items.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start bg-white border border-gray-100 rounded-xl p-4 hover:border-purple-200 transition-colors">
                    <div className={`${item.color} text-white px-4 py-2 rounded-lg font-bold text-sm min-w-[140px] text-center`}>
                      {item.sector}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.uses.map((use, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Opportunities */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-orange-600" />
                </div>
                {t.opportunities.title}
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {t.opportunities.items.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start p-4 bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <item.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-cyan-600" />
                </div>
                {t.pricing.title}
              </h2>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-8">
                <Sparkles className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">{t.pricing.warning}</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="text-left p-4 rounded-tl-xl">Solution</th>
                      <th className="text-left p-4">Inclus</th>
                      <th className="text-left p-4">Délai</th>
                      <th className="text-right p-4 rounded-tr-xl">Prix</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {t.pricing.items.map((item, index) => (
                      <tr key={index} className="bg-white hover:bg-gray-50">
                        <td className="p-4 font-medium">{item.solution}</td>
                        <td className="p-4 text-gray-600">{item.includes}</td>
                        <td className="p-4 text-gray-600">{item.delay}</td>
                        <td className="p-4 text-right font-bold text-purple-600">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12 pt-8 border-t border-gray-100">
              {["intelligence artificielle algérie 2026", "ia algérie", "ai algeria", "chatbot", "agent ia", "machine learning", "deep learning", "gpt", "رقمنة", "الذكاء الاصطناعي"].map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
            <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">{t.cta.desc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/213549575512?text=${encodeURIComponent(t.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                {t.cta.button1}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-800 transition-colors border border-purple-500"
              >
                {t.cta.button2}
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
