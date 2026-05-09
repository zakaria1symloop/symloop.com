"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import {
  Scale,
  Gavel,
  FileText,
  Users,
  Monitor,
  Phone,
  Mail,
  CheckCircle,
  ArrowRight,
  Brain,
  Database,
  Shield,
  Clock,
  Building2,
  BookOpen,
  Search,
  Lock,
  ChevronDown,
  ChevronUp,
  Video,
  Folder,
  UserCheck,
  FileSearch,
  AlertCircle
} from "lucide-react";

export default function DigitalisationJusticeAlgerie() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isRTL = router.locale === 'ar';
  const currentLang = router.locale || 'fr';
  const [openFaq, setOpenFaq] = useState(null);

  const content = {
    ar: {
      pageTitle: "رقمنة قطاع العدالة في الجزائر | Symloop",
      metaDescription: "رقمنة العدالة في الجزائر - إدارة القضايا للمحاكم، السجل العدلي الرقمي، المحاكمات عن بعد. اتصل الآن!",
      heroTitle: "رقمنة قطاع العدالة",
      heroSubtitle: "التحول الرقمي للمنظومة القضائية في الجزائر",
      heroDescription: "نساعد المحاكم ومؤسسات العدالة على تحقيق التحول الرقمي الكامل لتسريع إجراءات التقاضي وتحسين الخدمات",
      ctaButton: "ابدأ مشروع رقمنة العدالة",
      services: [
        { icon: Folder, title: "إدارة القضايا إلكترونياً", description: "نظام متكامل لإدارة الملفات القضائية وتتبع القضايا" },
        { icon: FileSearch, title: "السجل العدلي الرقمي", description: "استخراج السجل العدلي إلكترونياً مع رمز QR للتحقق" },
        { icon: Video, title: "المحاكمات عن بعد", description: "منصات محاكمات آمنة عبر الفيديو" },
        { icon: AlertCircle, title: "التبليغات الإلكترونية", description: "نظام تبليغات قضائية إلكتروني موثوق" },
        { icon: BookOpen, title: "الأرشيف القضائي", description: "رقمنة وأرشفة المحفوظات القضائية" },
        { icon: Brain, title: "الذكاء الاصطناعي القانوني", description: "تحليل القضايا والبحث القانوني بالذكاء الاصطناعي" }
      ],
      benefits: [
        "تسريع إجراءات التقاضي",
        "تقليل التنقل للمحاكم",
        "شفافية أكبر في المعاملات",
        "أرشفة رقمية آمنة للقضايا",
        "تتبع القضايا في الوقت الفعلي",
        "تقليل الأخطاء الإدارية"
      ],
      stats: [
        { value: "20+", label: "محكمة ومجلس قضائي" },
        { value: "50K+", label: "قضية رقمية" },
        { value: "98%", label: "دقة المعاملات" }
      ]
    },
    fr: {
      pageTitle: "Digitalisation du Secteur Justice en Algérie | Symloop",
      metaDescription: "Digitalisation justice Algérie - Gestion des affaires, casier judiciaire numérique, audiences à distance pour tribunaux. Devis gratuit!",
      heroTitle: "Digitalisation du Secteur Justice",
      heroSubtitle: "Transformation numérique du système judiciaire en Algérie",
      heroDescription: "Nous accompagnons les tribunaux et institutions judiciaires dans leur transformation numérique pour accélérer les procédures",
      ctaButton: "Démarrer votre projet justice",
      services: [
        { icon: Folder, title: "Gestion Électronique des Affaires", description: "Système intégré de gestion des dossiers judiciaires" },
        { icon: FileSearch, title: "Casier Judiciaire Numérique", description: "Extraction électronique avec QR code de vérification" },
        { icon: Video, title: "Audiences à Distance", description: "Plateformes d'audiences sécurisées par vidéo" },
        { icon: AlertCircle, title: "Notifications Électroniques", description: "Système de notifications judiciaires électroniques" },
        { icon: BookOpen, title: "Archives Judiciaires", description: "Numérisation et archivage des archives judiciaires" },
        { icon: Brain, title: "IA Juridique", description: "Analyse de cas et recherche juridique par IA" }
      ],
      benefits: [
        "Accélération des procédures",
        "Réduction des déplacements",
        "Plus de transparence",
        "Archivage numérique sécurisé",
        "Suivi en temps réel des affaires",
        "Réduction des erreurs administratives"
      ],
      stats: [
        { value: "20+", label: "Tribunaux & Cours" },
        { value: "50K+", label: "Affaires numériques" },
        { value: "98%", label: "Précision" }
      ]
    },
    en: {
      pageTitle: "Justice Sector Digitization in Algeria | Symloop",
      metaDescription: "Justice digitization Algeria - Case management, digital criminal records, remote hearings for courts. Free consultation!",
      heroTitle: "Justice Sector Digitization",
      heroSubtitle: "Digital transformation for the judicial system in Algeria",
      heroDescription: "We help courts and justice institutions achieve complete digital transformation to accelerate legal procedures",
      ctaButton: "Start Your Justice Digitization Project",
      services: [
        { icon: Folder, title: "Electronic Case Management", description: "Integrated judicial file management and case tracking system" },
        { icon: FileSearch, title: "Digital Criminal Records", description: "Electronic extraction with QR code verification" },
        { icon: Video, title: "Remote Hearings", description: "Secure video-based court hearing platforms" },
        { icon: AlertCircle, title: "Electronic Notifications", description: "Reliable electronic judicial notification system" },
        { icon: BookOpen, title: "Judicial Archives", description: "Digitization and archiving of judicial records" },
        { icon: Brain, title: "Legal AI", description: "AI-powered case analysis and legal research" }
      ],
      benefits: [
        "Accelerated legal procedures",
        "Reduced court visits",
        "Greater transparency",
        "Secure digital case archiving",
        "Real-time case tracking",
        "Reduced administrative errors"
      ],
      stats: [
        { value: "20+", label: "Courts & Councils" },
        { value: "50K+", label: "Digital cases" },
        { value: "98%", label: "Accuracy" }
      ]
    }
  };

  const faqs = {
    ar: [
      { q: "هل النظام معتمد من وزارة العدل؟", a: "نعم، جميع أنظمتنا متوافقة مع معايير وزارة العدل الجزائرية ومتطلبات الأمان." },
      { q: "كيف يتم تأمين البيانات القضائية؟", a: "تشفير عسكري، خوادم آمنة في الجزائر، نسخ احتياطي متعدد، ومراقبة 24/7." },
      { q: "هل يمكن التكامل مع الأنظمة الموجودة؟", a: "نعم، نوفر تكاملاً سلساً مع جميع الأنظمة القضائية الحالية." },
      { q: "ما هي مدة تنفيذ مشروع رقمنة محكمة؟", a: "عادة من 3 إلى 9 أشهر حسب حجم المحكمة ومتطلبات المشروع." },
      { q: "هل توفرون تدريباً للموظفين؟", a: "نعم، نقدم تدريباً شاملاً لجميع المستخدمين مع دعم فني مستمر." }
    ],
    fr: [
      { q: "Le système est-il homologué par le Ministère de la Justice?", a: "Oui, tous nos systèmes sont conformes aux normes du Ministère de la Justice algérien." },
      { q: "Comment les données judiciaires sont-elles sécurisées?", a: "Cryptage militaire, serveurs sécurisés en Algérie, sauvegardes multiples, surveillance 24/7." },
      { q: "Peut-on intégrer avec les systèmes existants?", a: "Oui, intégration transparente avec tous les systèmes judiciaires actuels." },
      { q: "Quelle est la durée d'un projet de digitalisation?", a: "Généralement 3 à 9 mois selon la taille du tribunal et les exigences." },
      { q: "Proposez-vous une formation?", a: "Oui, formation complète pour tous les utilisateurs avec support technique continu." }
    ],
    en: [
      { q: "Is the system approved by the Ministry of Justice?", a: "Yes, all our systems comply with Algerian Ministry of Justice standards and security requirements." },
      { q: "How is judicial data secured?", a: "Military-grade encryption, secure servers in Algeria, multiple backups, 24/7 monitoring." },
      { q: "Can it integrate with existing systems?", a: "Yes, seamless integration with all current judicial systems." },
      { q: "How long does a court digitization project take?", a: "Usually 3 to 9 months depending on court size and project requirements." },
      { q: "Do you provide training?", a: "Yes, comprehensive training for all users with ongoing technical support." }
    ]
  };

  const c = content[currentLang] || content.fr;
  const faqList = faqs[currentLang] || faqs.fr;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    "name": "Symloop - Justice Digitization",
    "description": c.metaDescription,
    "url": "https://symloop.com/solutions/digitalisation-justice-algerie",
    "serviceType": "Justice System Digitization",
    "areaServed": { "@type": "Country", "name": "Algeria" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  return (
    <>
      <Head>
        <title>{c.pageTitle}</title>
        <meta name="description" content={c.metaDescription} />
        <meta name="keywords" content="رقمنة العدالة, رقمنة المحاكم الجزائر, digitalisation justice Algérie, e-justice, السجل العدلي الرقمي, justice digitization Algeria" />
        <link rel="canonical" href={`https://symloop.com${router.asPath}`} />
        <meta property="og:title" content={c.pageTitle} />
        <meta property="og:description" content={c.metaDescription} />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/solutions/digitalisation-justice-algerie" />
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/solutions/digitalisation-justice-algerie" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/en/solutions/digitalisation-justice-algerie" />
        <link rel="alternate" hrefLang="x-default" href="https://symloop.com/solutions/digitalisation-justice-algerie" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <main className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-black to-yellow-900/20" />
          <div className="relative max-w-7xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Symloop</Link>
              <span>/</span>
              <Link href="/solutions/digitalisation-algerie" className="hover:text-white transition-colors">
                {currentLang === 'ar' ? 'الرقمنة' : 'Digitalisation'}
              </Link>
              <span>/</span>
              <span className="text-amber-400">{currentLang === 'ar' ? 'العدالة' : 'Justice'}</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
                <Scale className="w-5 h-5 text-amber-400" />
                <span className="text-amber-400 text-sm font-medium">
                  {currentLang === 'ar' ? 'قطاع العدالة' : 'Secteur Justice'}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {c.heroTitle}
              </h1>

              <p className="text-xl text-gray-300 mb-4">{c.heroSubtitle}</p>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">{c.heroDescription}</p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+213549575512"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
            >
              {c.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-amber-400">{stat.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {currentLang === 'ar' ? 'خدمات رقمنة العدالة' : 'Services de Digitalisation Justice'}
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
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-amber-500/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {currentLang === 'ar' ? 'فوائد رقمنة العدالة' : 'Avantages de la Digitalisation'}
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
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
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
                      <ChevronUp className="w-5 h-5 text-amber-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 text-gray-400">{faq.a}</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-amber-900/20 to-yellow-900/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {currentLang === 'ar' ? 'هل أنتم مستعدون لرقمنة منظومتكم القضائية؟' : 'Prêt à digitaliser votre système judiciaire?'}
            </h2>
            <p className="text-gray-400 mb-8">
              {currentLang === 'ar'
                ? 'تواصلوا معنا اليوم للحصول على استشارة مجانية'
                : 'Contactez-nous pour une consultation gratuite'}
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
