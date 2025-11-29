"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import {
  GraduationCap,
  BookOpen,
  Users,
  Monitor,
  FileText,
  Award,
  Phone,
  Mail,
  CheckCircle,
  ArrowRight,
  Brain,
  Code,
  Database,
  Shield,
  Zap,
  Globe,
  Clock,
  TrendingUp,
  Layers,
  Server,
  Smartphone,
  Cloud,
  ChevronDown,
  ChevronUp,
  Star,
  Target,
  Rocket,
  BadgeCheck,
  School,
  Library,
  PenTool,
  ClipboardList
} from "lucide-react";

export default function DigitalisationEducationAlgerie() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isRTL = router.locale === 'ar';
  const currentLang = router.locale || 'fr';
  const [openFaq, setOpenFaq] = useState(null);

  const content = {
    ar: {
      pageTitle: "رقمنة قطاع التعليم في الجزائر | Symloop",
      metaDescription: "رقمنة التعليم في الجزائر - منصات e-learning للمدارس والجامعات. إدارة الطلاب والشهادات الرقمية. اتصل الآن!",
      heroTitle: "رقمنة قطاع التعليم",
      heroSubtitle: "التحول الرقمي للمؤسسات التعليمية في الجزائر",
      heroDescription: "نساعد المدارس والجامعات والمعاهد على تحقيق التحول الرقمي الكامل باستخدام أحدث التقنيات والذكاء الاصطناعي",
      ctaButton: "ابدأ مشروع رقمنة التعليم",
      services: [
        { icon: Monitor, title: "منصات التعلم الإلكتروني", description: "تطوير منصات e-learning تفاعلية مع دعم الفيديو والاختبارات" },
        { icon: Users, title: "إدارة شؤون الطلاب", description: "نظام متكامل لإدارة التسجيلات والدرجات والحضور" },
        { icon: FileText, title: "الشهادات الرقمية", description: "إصدار وتوثيق الشهادات إلكترونياً مع رمز QR للتحقق" },
        { icon: Library, title: "المكتبات الرقمية", description: "رقمنة المكتبات وإتاحة المراجع إلكترونياً" },
        { icon: ClipboardList, title: "الامتحانات الإلكترونية", description: "منصات امتحانات آمنة مع تصحيح آلي بالذكاء الاصطناعي" },
        { icon: Brain, title: "الذكاء الاصطناعي في التعليم", description: "مساعدين تعليميين ذكيين وتحليل أداء الطلاب" }
      ],
      benefits: [
        "تقليل استخدام الورق بنسبة 90%",
        "توفير الوقت في المعاملات الإدارية",
        "تحسين جودة التعليم",
        "متابعة أداء الطلاب في الوقت الفعلي",
        "التعلم عن بعد في أي وقت",
        "أرشفة رقمية آمنة"
      ],
      stats: [
        { value: "50+", label: "مؤسسة تعليمية" },
        { value: "100K+", label: "طالب مستفيد" },
        { value: "95%", label: "رضا العملاء" }
      ]
    },
    fr: {
      pageTitle: "Digitalisation du Secteur Éducatif en Algérie | Symloop",
      metaDescription: "Digitalisation éducation Algérie - E-learning, gestion étudiants, certificats numériques pour écoles et universités. Devis gratuit!",
      heroTitle: "Digitalisation du Secteur Éducatif",
      heroSubtitle: "Transformation numérique des établissements éducatifs en Algérie",
      heroDescription: "Nous accompagnons les écoles, universités et instituts dans leur transformation numérique complète avec les dernières technologies et l'IA",
      ctaButton: "Démarrer votre projet de digitalisation",
      services: [
        { icon: Monitor, title: "Plateformes E-Learning", description: "Développement de plateformes e-learning interactives avec vidéo et quiz" },
        { icon: Users, title: "Gestion des Étudiants", description: "Système intégré de gestion des inscriptions, notes et présences" },
        { icon: FileText, title: "Certificats Numériques", description: "Émission et authentification électronique avec QR code" },
        { icon: Library, title: "Bibliothèques Numériques", description: "Digitalisation des bibliothèques et accès aux références en ligne" },
        { icon: ClipboardList, title: "Examens Électroniques", description: "Plateformes d'examens sécurisées avec correction IA automatique" },
        { icon: Brain, title: "IA dans l'Éducation", description: "Assistants pédagogiques intelligents et analyse de performance" }
      ],
      benefits: [
        "Réduction de 90% de l'utilisation du papier",
        "Gain de temps administratif",
        "Amélioration de la qualité éducative",
        "Suivi en temps réel des étudiants",
        "Apprentissage à distance flexible",
        "Archivage numérique sécurisé"
      ],
      stats: [
        { value: "50+", label: "Établissements" },
        { value: "100K+", label: "Étudiants" },
        { value: "95%", label: "Satisfaction" }
      ]
    },
    en: {
      pageTitle: "Education Sector Digitization in Algeria | Symloop",
      metaDescription: "Education digitization Algeria - E-learning platforms, student management, digital certificates for schools. Free consultation!",
      heroTitle: "Education Sector Digitization",
      heroSubtitle: "Digital transformation for educational institutions in Algeria",
      heroDescription: "We help schools, universities and institutes achieve complete digital transformation using the latest technologies and AI",
      ctaButton: "Start Your Education Digitization Project",
      services: [
        { icon: Monitor, title: "E-Learning Platforms", description: "Interactive e-learning platform development with video and quizzes" },
        { icon: Users, title: "Student Management", description: "Integrated system for enrollment, grades and attendance management" },
        { icon: FileText, title: "Digital Certificates", description: "Electronic certificate issuance with QR code verification" },
        { icon: Library, title: "Digital Libraries", description: "Library digitization and online reference access" },
        { icon: ClipboardList, title: "Electronic Exams", description: "Secure exam platforms with AI-powered auto-grading" },
        { icon: Brain, title: "AI in Education", description: "Smart teaching assistants and student performance analytics" }
      ],
      benefits: [
        "90% reduction in paper usage",
        "Administrative time savings",
        "Improved education quality",
        "Real-time student tracking",
        "Flexible remote learning",
        "Secure digital archiving"
      ],
      stats: [
        { value: "50+", label: "Institutions" },
        { value: "100K+", label: "Students" },
        { value: "95%", label: "Satisfaction" }
      ]
    }
  };

  const faqs = {
    ar: [
      { q: "ما هي تكلفة رقمنة مدرسة أو جامعة؟", a: "تختلف التكلفة حسب حجم المؤسسة واحتياجاتها. نقدم دراسة مجانية وعرض سعر مخصص." },
      { q: "كم يستغرق تنفيذ مشروع رقمنة التعليم؟", a: "عادة من 2 إلى 6 أشهر حسب نطاق المشروع ومتطلبات المؤسسة." },
      { q: "هل تدعمون اللغة العربية في المنصات؟", a: "نعم، جميع منصاتنا تدعم اللغة العربية بالكامل مع واجهة RTL." },
      { q: "هل يمكن دمج النظام مع الأنظمة الحكومية؟", a: "نعم، نوفر تكاملاً كاملاً مع أنظمة وزارة التربية والتعليم العالي." },
      { q: "ما هي التقنيات المستخدمة؟", a: "نستخدم أحدث التقنيات: React, Node.js, Python, AI/ML, وقواعد بيانات آمنة." }
    ],
    fr: [
      { q: "Quel est le coût de digitalisation d'une école ou université?", a: "Le coût varie selon la taille et les besoins. Nous offrons une étude gratuite et un devis personnalisé." },
      { q: "Combien de temps prend un projet de digitalisation?", a: "Généralement 2 à 6 mois selon l'étendue du projet et les exigences." },
      { q: "Supportez-vous l'arabe dans les plateformes?", a: "Oui, toutes nos plateformes supportent l'arabe avec interface RTL." },
      { q: "Peut-on intégrer avec les systèmes gouvernementaux?", a: "Oui, nous assurons l'intégration avec les systèmes du Ministère de l'Éducation." },
      { q: "Quelles technologies utilisez-vous?", a: "Technologies modernes: React, Node.js, Python, AI/ML, bases de données sécurisées." }
    ],
    en: [
      { q: "What is the cost of digitizing a school or university?", a: "Cost varies based on size and needs. We offer free assessment and custom quotes." },
      { q: "How long does an education digitization project take?", a: "Usually 2 to 6 months depending on project scope and requirements." },
      { q: "Do you support Arabic in platforms?", a: "Yes, all our platforms fully support Arabic with RTL interface." },
      { q: "Can it integrate with government systems?", a: "Yes, we provide full integration with Ministry of Education systems." },
      { q: "What technologies do you use?", a: "Modern stack: React, Node.js, Python, AI/ML, secure databases." }
    ]
  };

  const c = content[currentLang] || content.fr;
  const faqList = faqs[currentLang] || faqs.fr;

  // Schema.org structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": c.pageTitle,
    "description": c.metaDescription,
    "provider": {
      "@type": "Organization",
      "name": "Symloop",
      "url": "https://symloop.com"
    },
    "serviceType": "Education Digitization",
    "areaServed": {
      "@type": "Country",
      "name": "Algeria"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Education Digitization Services",
      "itemListElement": c.services.map((service, i) => ({
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
    "mainEntity": faqList.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <Head>
        <title>{c.pageTitle}</title>
        <meta name="description" content={c.metaDescription} />
        <meta name="keywords" content="رقمنة التعليم, رقمنة المدارس الجزائر, e-learning Algérie, digitalisation éducation, منصات التعلم الإلكتروني, education digitization Algeria" />
        <link rel="canonical" href={`https://symloop.com${router.asPath}`} />
        <meta property="og:title" content={c.pageTitle} />
        <meta property="og:description" content={c.metaDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/solutions/digitalisation-education-algerie" />
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/solutions/digitalisation-education-algerie" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/en/solutions/digitalisation-education-algerie" />
        <link rel="alternate" hrefLang="x-default" href="https://symloop.com/solutions/digitalisation-education-algerie" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <main className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-black to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Symloop</Link>
              <span>/</span>
              <Link href="/solutions/digitalisation-algerie" className="hover:text-white transition-colors">
                {currentLang === 'ar' ? 'الرقمنة' : 'Digitalisation'}
              </Link>
              <span>/</span>
              <span className="text-emerald-400">{currentLang === 'ar' ? 'التعليم' : 'Éducation'}</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">
                  {currentLang === 'ar' ? 'قطاع التعليم' : 'Secteur Éducatif'}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {c.heroTitle}
              </h1>

              <p className="text-xl text-gray-300 mb-4">{c.heroSubtitle}</p>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">{c.heroDescription}</p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+213549575512"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
                >
                  <Phone className="w-5 h-5" />
                  {c.ctaButton}
                </a>
                <a
                  href="mailto:contact@symloop.com"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-8 py-4 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  contact@symloop.com
                </a>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
            >
              {c.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-emerald-400">{stat.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {currentLang === 'ar' ? 'خدمات رقمنة التعليم' : 'Services de Digitalisation Éducative'}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {currentLang === 'ar' ? 'فوائد رقمنة التعليم' : 'Avantages de la Digitalisation'}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {c.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-white/5 rounded-xl p-4"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {currentLang === 'ar' ? 'الأسئلة الشائعة' : 'Questions Fréquentes'}
            </h2>

            <div className="space-y-4">
              {faqList.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="border border-white/10 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-medium">{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 text-gray-400">
                      {faq.a}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-900/20 to-cyan-900/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {currentLang === 'ar' ? 'هل أنتم مستعدون لرقمنة مؤسستكم التعليمية؟' : 'Prêt à digitaliser votre établissement?'}
            </h2>
            <p className="text-gray-400 mb-8">
              {currentLang === 'ar'
                ? 'تواصلوا معنا اليوم للحصول على استشارة مجانية ودراسة احتياجاتكم'
                : 'Contactez-nous pour une consultation gratuite et une étude de vos besoins'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+213549575512"
                className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +213 549 575 512
              </a>
              <Link
                href="/solutions/digitalisation-algerie"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-8 py-4 rounded-xl hover:bg-white/20 transition-colors"
              >
                {currentLang === 'ar' ? 'عرض جميع القطاعات' : 'Voir tous les secteurs'}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
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
