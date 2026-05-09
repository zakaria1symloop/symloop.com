import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import SeoEnhanced from '../utils/seo-enhanced';
import { Globe, MapPin, Users, Award, TrendingUp, Shield, Zap, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function MenaPage() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const locale = router.locale || 'fr';

  const menaCountries = [
    { name: { fr: "Algérie", en: "Algeria", ar: "الجزائر" }, flag: "🇩🇿", clients: "40+", projects: "70+" },
    { name: { fr: "Maroc", en: "Morocco", ar: "المغرب" }, flag: "🇲🇦", clients: "8+", projects: "15+" },
    { name: { fr: "Tunisie", en: "Tunisia", ar: "تونس" }, flag: "🇹🇳", clients: "5+", projects: "12+" },
    { name: { fr: "Égypte", en: "Egypt", ar: "مصر" }, flag: "🇪🇬", clients: "3+", projects: "8+" },
    { name: { fr: "Émirats Arabes Unis", en: "UAE", ar: "الإمارات" }, flag: "🇦🇪", clients: "2+", projects: "5+" },
    { name: { fr: "Arabie Saoudite", en: "Saudi Arabia", ar: "السعودية" }, flag: "🇸🇦", clients: "2+", projects: "4+" },
    { name: { fr: "Qatar", en: "Qatar", ar: "قطر" }, flag: "🇶🇦", clients: "1+", projects: "2+" },
    { name: { fr: "Koweït", en: "Kuwait", ar: "الكويت" }, flag: "🇰🇼", clients: "1+", projects: "2+" },
    { name: { fr: "Bahreïn", en: "Bahrain", ar: "البحرين" }, flag: "🇧🇭", clients: "1+", projects: "1+" },
    { name: { fr: "Libye", en: "Libya", ar: "ليبيا" }, flag: "🇱🇾", clients: "1+", projects: "2+" }
  ];

  const services = [
    {
      title: { fr: "Solutions Enterprise", en: "Enterprise Solutions", ar: "حلول المؤسسات" },
      description: {
        fr: "ERP, CRM, et systèmes intégrés pour grandes entreprises MENA",
        en: "ERP, CRM, and integrated systems for large MENA enterprises",
        ar: "ERP وCRM وأنظمة متكاملة للشركات الكبرى في منطقة MENA"
      },
      icon: "Building"
    },
    {
      title: { fr: "Transformation Digitale", en: "Digital Transformation", ar: "التحول الرقمي" },
      description: {
        fr: "Modernisation complète pour l'Industry 4.0 dans la région MENA",
        en: "Complete modernization for Industry 4.0 in MENA region",
        ar: "التحديث الكامل للصناعة 4.0 في منطقة MENA"
      },
      icon: "TrendingUp"
    },
    {
      title: { fr: "Solutions Cloud", en: "Cloud Solutions", ar: "حلول السحابة" },
      description: {
        fr: "Infrastructure cloud hybride avec data sovereignty MENA",
        en: "Hybrid cloud infrastructure with MENA data sovereignty",
        ar: "بنية تحتية سحابية هجينة مع سيادة البيانات في MENA"
      },
      icon: "Cloud"
    },
    {
      title: { fr: "FinTech & Banking", en: "FinTech & Banking", ar: "التكنولوجيا المالية" },
      description: {
        fr: "Solutions bancaires digitales conformes aux régulations MENA",
        en: "Digital banking solutions compliant with MENA regulations",
        ar: "حلول مصرفية رقمية متوافقة مع لوائح MENA"
      },
      icon: "DollarSign"
    },
    {
      title: { fr: "E-Government", en: "E-Government", ar: "الحكومة الإلكترونية" },
      description: {
        fr: "Digitalisation des services publics pour gouvernements MENA",
        en: "Public service digitalization for MENA governments",
        ar: "رقمنة الخدمات العامة لحكومات MENA"
      },
      icon: "Government"
    },
    {
      title: { fr: "Smart Cities", en: "Smart Cities", ar: "المدن الذكية" },
      description: {
        fr: "IoT et solutions intelligentes pour villes MENA",
        en: "IoT and smart solutions for MENA cities",
        ar: "إنترنت الأشياء والحلول الذكية لمدن MENA"
      },
      icon: "City"
    }
  ];

  const content = {
    fr: {
      title: "Leader Technologique dans la Région MENA",
      subtitle: "Solutions IT d'Excellence pour le Moyen-Orient et l'Afrique du Nord",
      description: "Symloop Technology est votre partenaire technologique de confiance dans la région MENA. De l'Algérie aux Émirats, nous déployons des solutions digitales qui transforment les entreprises et stimulent la croissance économique.",
      whyMena: "Pourquoi Symloop pour la Région MENA ?",
      ourPresence: "Notre Présence MENA",
      services: "Services Régionaux",
      stats: "Impact MENA en Chiffres",
      partners: "Nos Partenaires Régionaux",
      cta: "Lancez Votre Projet MENA",
      contact: "Contact Régional"
    },
    en: {
      title: "Technology Leader in MENA Region",
      subtitle: "Excellence in IT Solutions for Middle East and North Africa",
      description: "Symloop Technology is your trusted technology partner in the MENA region. From Algeria to the UAE, we deploy digital solutions that transform businesses and drive economic growth.",
      whyMena: "Why Symloop for MENA Region?",
      ourPresence: "Our MENA Presence",
      services: "Regional Services",
      stats: "MENA Impact in Numbers",
      partners: "Our Regional Partners",
      cta: "Launch Your MENA Project",
      contact: "Regional Contact"
    },
    ar: {
      title: "الرائد التقني في منطقة MENA",
      subtitle: "حلول تقنية متميزة للشرق الأوسط وشمال أفريقيا",
      description: "سيملوب تكنولوجي هي شريكك التقني الموثوق في منطقة MENA. من الجزائر إلى الإمارات، نقوم بنشر حلول رقمية تحول الأعمال وتدفع النمو الاقتصادي.",
      whyMena: "لماذا سيملوب لمنطقة MENA؟",
      ourPresence: "تواجدنا في MENA",
      services: "الخدمات الإقليمية",
      stats: "تأثير MENA بالأرقام",
      partners: "شركاؤنا الإقليميون",
      cta: "ابدأ مشروعك في MENA",
      contact: "الاتصال الإقليمي"
    }
  };

  const currentContent = content[locale];

  const seoTitle = `${currentContent.title} | Symloop Technology`;
  const seoDescription = currentContent.description;
  const seoKeywords = `MENA technology solutions, Middle East North Africa IT, ${menaCountries.map(c => `${c.name[locale]} technology`).join(', ')}, MENA digital transformation, MENA cloud computing, MENA cybersecurity, MENA enterprise solutions, MENA e-government, MENA smart cities, MENA fintech, développement logiciel MENA, تطوير البرمجيات MENA, software development MENA, IT services MENA region, technology consulting MENA, digital solutions Middle East, North Africa tech company, Gulf countries IT services, Maghreb technology partner, Arab world digital transformation`;

  return (
    <>
      <SeoEnhanced
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
      />

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/mena-map.svg')] bg-center bg-no-repeat opacity-10" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
            <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full border border-white/20">
                <Globe className="w-5 h-5" />
                <span className="font-semibold">MENA Region Leader</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                {currentContent.title}
              </h1>

              <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                {currentContent.subtitle}
              </p>

              <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
                {currentContent.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
                >
                  {currentContent.cta}
                </Link>
                <a
                  href="tel:+213549575512"
                  className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
                >
                  <Phone className="inline-block w-5 h-5 mr-2" />
                  +213 549-57-55-12
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MENA Stats */}
        <div className="bg-gradient-to-r from-purple-900/10 to-blue-900/10 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">{currentContent.stats}</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-gray-400 mt-2">
                  {locale === 'ar' ? 'دول MENA' : locale === 'en' ? 'MENA Countries' : 'Pays MENA'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  60+
                </div>
                <div className="text-gray-400 mt-2">
                  {locale === 'ar' ? 'عملاء' : locale === 'en' ? 'Clients' : 'Clients'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                  120+
                </div>
                <div className="text-gray-400 mt-2">
                  {locale === 'ar' ? 'مشاريع' : locale === 'en' ? 'Projects' : 'Projets'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-gray-400 mt-2">
                  {locale === 'ar' ? 'دعم' : locale === 'en' ? 'Support' : 'Support'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MENA Presence */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">{currentContent.ourPresence}</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {menaCountries.map((country, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-400 hover:bg-white/10 transition-all text-center group"
                >
                  <div className="text-4xl mb-3">{country.flag}</div>
                  <h3 className="font-bold mb-2">{country.name[locale]}</h3>
                  <div className="text-sm text-gray-400 space-y-1">
                    <div>{country.clients} {locale === 'ar' ? 'عملاء' : 'clients'}</div>
                    <div>{country.projects} {locale === 'ar' ? 'مشاريع' : locale === 'en' ? 'projects' : 'projets'}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Regional Services */}
        <div className="bg-white/5 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">{currentContent.services}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="bg-black border border-white/10 rounded-xl p-8 hover:border-purple-400 transition-all group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title[locale]}</h3>
                  <p className="text-gray-400">{service.description[locale]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why MENA */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">{currentContent.whyMena}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {locale === 'ar' ? 'خبرة إقليمية' : locale === 'en' ? 'Regional Expertise' : 'Expertise Régionale'}
                </h3>
                <p className="text-gray-400">
                  {locale === 'ar'
                    ? 'فهم عميق للثقافات والأسواق المحلية في جميع أنحاء MENA'
                    : locale === 'en'
                    ? 'Deep understanding of local cultures and markets across MENA'
                    : 'Compréhension approfondie des cultures et marchés locaux à travers MENA'}
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {locale === 'ar' ? 'فريق متعدد اللغات' : locale === 'en' ? 'Multilingual Team' : 'Équipe Multilingue'}
                </h3>
                <p className="text-gray-400">
                  {locale === 'ar'
                    ? 'خبراء يتحدثون العربية والفرنسية والإنجليزية'
                    : locale === 'en'
                    ? 'Experts speaking Arabic, French, and English'
                    : 'Experts parlant arabe, français et anglais'}
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {locale === 'ar' ? 'امتثال محلي' : locale === 'en' ? 'Local Compliance' : 'Conformité Locale'}
                </h3>
                <p className="text-gray-400">
                  {locale === 'ar'
                    ? 'حلول متوافقة مع اللوائح المحلية في كل دولة'
                    : locale === 'en'
                    ? 'Solutions compliant with local regulations in each country'
                    : 'Solutions conformes aux réglementations locales de chaque pays'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Partners */}
        <div className="bg-gradient-to-br from-purple-900/10 to-blue-900/10 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">{currentContent.partners}</h2>

            <div className="flex flex-wrap gap-8 justify-center">
              {['Microsoft', 'AWS', 'Google Cloud', 'Oracle', 'SAP', 'IBM', 'Cisco', 'Dell', 'HP', 'Huawei'].map((partner, i) => (
                <div
                  key={i}
                  className="px-8 py-4 bg-white/10 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold mb-6">
              {locale === 'ar'
                ? 'جاهز لتحويل عملك في MENA؟'
                : locale === 'en'
                ? 'Ready to Transform Your MENA Business?'
                : 'Prêt à Transformer Votre Business MENA ?'}
            </h2>

            <p className="text-2xl mb-12 text-white/90">
              {locale === 'ar'
                ? 'انضم إلى الشركات التي تثق بسيملوب'
                : locale === 'en'
                ? 'Join companies that trust Symloop'
                : 'Rejoignez les entreprises qui font confiance à Symloop'}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+213549575512"
                className="px-10 py-5 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all text-xl"
              >
                <Phone className="inline-block w-6 h-6 mr-3" />
                {locale === 'ar' ? 'اتصل الآن' : locale === 'en' ? 'Call Now' : 'Appelez Maintenant'}
              </a>

              <a
                href="mailto:mena@symloop.com"
                className="px-10 py-5 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition-all text-xl"
              >
                <Mail className="inline-block w-6 h-6 mr-3" />
                mena@symloop.com
              </a>
            </div>
          </div>
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