"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import {
  HeartPulse,
  Stethoscope,
  Users,
  Monitor,
  FileText,
  Pill,
  Phone,
  Mail,
  CheckCircle,
  ArrowRight,
  Brain,
  Database,
  Shield,
  Clock,
  Activity,
  Syringe,
  ClipboardList,
  UserCheck,
  Hospital,
  Ambulance,
  ChevronDown,
  ChevronUp,
  Calendar,
  QrCode,
  Smartphone
} from "lucide-react";

export default function DigitalisationSanteAlgerie() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isRTL = router.locale === 'ar';
  const currentLang = router.locale || 'fr';
  const [openFaq, setOpenFaq] = useState(null);

  const content = {
    ar: {
      pageTitle: "رقمنة قطاع الصحة في الجزائر | Symloop",
      metaDescription: "رقمنة الصحة في الجزائر - حلول رقمية شاملة للمستشفيات والعيادات والصيدليات. السجل الصحي الإلكتروني، حجز المواعيد، الطب عن بعد.",
      heroTitle: "رقمنة قطاع الصحة",
      heroSubtitle: "التحول الرقمي للمؤسسات الصحية في الجزائر",
      heroDescription: "نساعد المستشفيات والعيادات والصيدليات على تحقيق التحول الرقمي الكامل لتحسين رعاية المرضى",
      ctaButton: "ابدأ مشروع رقمنة الصحة",
      services: [
        { icon: FileText, title: "السجل الصحي الإلكتروني", description: "نظام متكامل لإدارة ملفات المرضى إلكترونياً بشكل آمن" },
        { icon: Calendar, title: "حجز المواعيد الإلكتروني", description: "منصة حجز مواعيد الأطباء عبر الإنترنت والتطبيقات" },
        { icon: Stethoscope, title: "الطب عن بعد", description: "منصات استشارات طبية عن بعد بالفيديو" },
        { icon: Pill, title: "إدارة الصيدليات", description: "نظام متكامل لإدارة المخزون والوصفات الطبية" },
        { icon: Activity, title: "مراقبة المرضى", description: "أنظمة مراقبة حيوية المرضى في الوقت الفعلي" },
        { icon: Brain, title: "الذكاء الاصطناعي في الطب", description: "تشخيص بالذكاء الاصطناعي وتحليل الصور الطبية" }
      ],
      benefits: [
        "تقليل أخطاء الوصفات الطبية",
        "تسريع الخدمات الصحية",
        "تحسين متابعة المرضى",
        "توفير الوقت للأطباء",
        "أرشفة آمنة للملفات الطبية",
        "تقارير وإحصائيات دقيقة"
      ],
      stats: [
        { value: "30+", label: "مستشفى وعيادة" },
        { value: "500K+", label: "مريض مسجل" },
        { value: "99%", label: "وقت التشغيل" }
      ]
    },
    fr: {
      pageTitle: "Digitalisation du Secteur Santé en Algérie | Symloop",
      metaDescription: "Digitalisation de la santé en Algérie - Solutions numériques complètes pour hôpitaux, cliniques et pharmacies. Dossier médical électronique, rendez-vous en ligne, télémédecine.",
      heroTitle: "Digitalisation du Secteur Santé",
      heroSubtitle: "Transformation numérique des établissements de santé en Algérie",
      heroDescription: "Nous accompagnons les hôpitaux, cliniques et pharmacies dans leur transformation numérique pour améliorer les soins aux patients",
      ctaButton: "Démarrer votre projet santé",
      services: [
        { icon: FileText, title: "Dossier Médical Électronique", description: "Système intégré de gestion sécurisée des dossiers patients" },
        { icon: Calendar, title: "Rendez-vous en Ligne", description: "Plateforme de prise de rendez-vous médicaux en ligne" },
        { icon: Stethoscope, title: "Télémédecine", description: "Consultations médicales à distance par vidéo" },
        { icon: Pill, title: "Gestion Pharmacies", description: "Système intégré de gestion des stocks et ordonnances" },
        { icon: Activity, title: "Monitoring Patients", description: "Surveillance en temps réel des signes vitaux" },
        { icon: Brain, title: "IA Médicale", description: "Diagnostic IA et analyse d'imagerie médicale" }
      ],
      benefits: [
        "Réduction des erreurs de prescription",
        "Accélération des services de santé",
        "Meilleur suivi des patients",
        "Gain de temps pour les médecins",
        "Archivage sécurisé des dossiers",
        "Rapports et statistiques précis"
      ],
      stats: [
        { value: "30+", label: "Hôpitaux & Cliniques" },
        { value: "500K+", label: "Patients enregistrés" },
        { value: "99%", label: "Disponibilité" }
      ]
    },
    en: {
      pageTitle: "Healthcare Sector Digitization in Algeria | Symloop",
      metaDescription: "Healthcare digitization in Algeria - Complete digital solutions for hospitals, clinics and pharmacies. Electronic health records, online appointments, telemedicine.",
      heroTitle: "Healthcare Sector Digitization",
      heroSubtitle: "Digital transformation for healthcare facilities in Algeria",
      heroDescription: "We help hospitals, clinics and pharmacies achieve complete digital transformation to improve patient care",
      ctaButton: "Start Your Healthcare Digitization Project",
      services: [
        { icon: FileText, title: "Electronic Health Records", description: "Integrated secure patient file management system" },
        { icon: Calendar, title: "Online Appointments", description: "Medical appointment booking platform online and mobile" },
        { icon: Stethoscope, title: "Telemedicine", description: "Remote medical consultations via video" },
        { icon: Pill, title: "Pharmacy Management", description: "Integrated inventory and prescription management system" },
        { icon: Activity, title: "Patient Monitoring", description: "Real-time vital signs monitoring systems" },
        { icon: Brain, title: "Medical AI", description: "AI-powered diagnosis and medical imaging analysis" }
      ],
      benefits: [
        "Reduced prescription errors",
        "Faster healthcare services",
        "Better patient follow-up",
        "Time savings for doctors",
        "Secure medical file archiving",
        "Accurate reports and statistics"
      ],
      stats: [
        { value: "30+", label: "Hospitals & Clinics" },
        { value: "500K+", label: "Registered patients" },
        { value: "99%", label: "Uptime" }
      ]
    }
  };

  const faqs = {
    ar: [
      { q: "هل النظام متوافق مع معايير الصحة الجزائرية؟", a: "نعم، جميع أنظمتنا متوافقة مع معايير وزارة الصحة الجزائرية ومعايير الأمان الدولية." },
      { q: "كيف يتم تأمين بيانات المرضى؟", a: "نستخدم تشفير متقدم وقواعد بيانات آمنة مع نسخ احتياطي يومي ومراقبة 24/7." },
      { q: "هل يمكن دمج النظام مع التأمينات الصحية؟", a: "نعم، نوفر تكاملاً كاملاً مع CNAS وCASNOS والتأمينات الخاصة." },
      { q: "هل تدعمون التطبيقات على الهواتف؟", a: "نعم، نوفر تطبيقات للأطباء والمرضى على iOS وAndroid." },
      { q: "ما هي تكلفة رقمنة مستشفى؟", a: "التكلفة تعتمد على حجم المستشفى وعدد الأقسام. نقدم دراسة مجانية." }
    ],
    fr: [
      { q: "Le système est-il conforme aux normes sanitaires algériennes?", a: "Oui, tous nos systèmes sont conformes aux normes du Ministère de la Santé et aux standards internationaux." },
      { q: "Comment les données patients sont-elles sécurisées?", a: "Cryptage avancé, bases de données sécurisées, sauvegardes quotidiennes et surveillance 24/7." },
      { q: "Peut-on intégrer avec les assurances santé?", a: "Oui, intégration complète avec CNAS, CASNOS et assurances privées." },
      { q: "Supportez-vous les applications mobiles?", a: "Oui, applications pour médecins et patients sur iOS et Android." },
      { q: "Quel est le coût pour un hôpital?", a: "Le coût dépend de la taille et du nombre de services. Étude gratuite disponible." }
    ],
    en: [
      { q: "Is the system compliant with Algerian health standards?", a: "Yes, all our systems comply with Ministry of Health standards and international security standards." },
      { q: "How is patient data secured?", a: "Advanced encryption, secure databases, daily backups and 24/7 monitoring." },
      { q: "Can it integrate with health insurance?", a: "Yes, full integration with CNAS, CASNOS and private insurance." },
      { q: "Do you support mobile applications?", a: "Yes, apps for doctors and patients on iOS and Android." },
      { q: "What is the cost for a hospital?", a: "Cost depends on size and number of departments. Free assessment available." }
    ]
  };

  const c = content[currentLang] || content.fr;
  const faqList = faqs[currentLang] || faqs.fr;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Symloop - Healthcare Digitization",
    "description": c.metaDescription,
    "url": "https://symloop.com/solutions/digitalisation-sante-algerie",
    "medicalSpecialty": "Healthcare IT Solutions",
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
        <meta name="keywords" content="رقمنة الصحة, رقمنة المستشفيات الجزائر, digitalisation santé Algérie, e-santé, السجل الصحي الإلكتروني, healthcare digitization Algeria" />
        <link rel="canonical" href={`https://symloop.com/${currentLang}/solutions/digitalisation-sante-algerie`} />
        <meta property="og:title" content={c.pageTitle} />
        <meta property="og:description" content={c.metaDescription} />
        <link rel="alternate" hrefLang="ar" href="https://symloop.com/ar/solutions/digitalisation-sante-algerie" />
        <link rel="alternate" hrefLang="fr" href="https://symloop.com/fr/solutions/digitalisation-sante-algerie" />
        <link rel="alternate" hrefLang="en" href="https://symloop.com/en/solutions/digitalisation-sante-algerie" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <main className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-pink-900/20" />
          <div className="relative max-w-7xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Symloop</Link>
              <span>/</span>
              <Link href="/solutions/digitalisation-algerie" className="hover:text-white transition-colors">
                {currentLang === 'ar' ? 'الرقمنة' : 'Digitalisation'}
              </Link>
              <span>/</span>
              <span className="text-red-400">{currentLang === 'ar' ? 'الصحة' : 'Santé'}</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
                <HeartPulse className="w-5 h-5 text-red-400" />
                <span className="text-red-400 text-sm font-medium">
                  {currentLang === 'ar' ? 'قطاع الصحة' : 'Secteur Santé'}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                {c.heroTitle}
              </h1>

              <p className="text-xl text-gray-300 mb-4">{c.heroSubtitle}</p>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">{c.heroDescription}</p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+213549575512"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
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
                  <div className="text-3xl md:text-4xl font-bold text-red-400">{stat.value}</div>
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
              {currentLang === 'ar' ? 'خدمات رقمنة الصحة' : 'Services de Digitalisation Santé'}
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
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-red-500/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-red-400" />
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
              {currentLang === 'ar' ? 'فوائد رقمنة الصحة' : 'Avantages de la Digitalisation'}
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
                  <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
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
                      <ChevronUp className="w-5 h-5 text-red-400" />
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
        <section className="py-20 bg-gradient-to-r from-red-900/20 to-pink-900/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {currentLang === 'ar' ? 'هل أنتم مستعدون لرقمنة مؤسستكم الصحية؟' : 'Prêt à digitaliser votre établissement de santé?'}
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
