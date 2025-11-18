import { useRouter } from "next/router";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import SeoEnhanced from "../../utils/seo-enhanced";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Star, Users, TrendingUp, Award, Zap } from "lucide-react";
import Link from "next/link";

// Major Algerian cities data
const cityData = {
  "alger": {
    name: { fr: "Alger", en: "Algiers", ar: "الجزائر" },
    region: { fr: "Centre", en: "Center", ar: "الوسط" },
    population: "3.5M",
    coordinates: { lat: 36.7538, lng: 3.0588 },
    localPartners: ["Sonatrach", "Djezzy", "Air Algérie", "BNA", "CPA"],
    techHub: true,
    specializations: ["Fintech", "E-government", "Enterprise Solutions"]
  },
  "oran": {
    name: { fr: "Oran", en: "Oran", ar: "وهران" },
    region: { fr: "Ouest", en: "West", ar: "الغرب" },
    population: "1.5M",
    coordinates: { lat: 35.6987, lng: -0.6349 },
    localPartners: ["Ooredoo", "Condor", "Henkel"],
    techHub: true,
    specializations: ["Industry 4.0", "Logistics", "Port Solutions"]
  },
  "constantine": {
    name: { fr: "Constantine", en: "Constantine", ar: "قسنطينة" },
    region: { fr: "Est", en: "East", ar: "الشرق" },
    population: "950K",
    coordinates: { lat: 36.3650, lng: 6.6147 },
    localPartners: ["Mobilis", "Biopharm", "NCA Rouiba"],
    specializations: ["Healthcare Tech", "Education Tech", "Smart City"]
  },
  "setif": {
    name: { fr: "Sétif", en: "Setif", ar: "سطيف" },
    region: { fr: "Hauts-Plateaux", en: "High Plains", ar: "الهضاب العليا" },
    population: "450K",
    coordinates: { lat: 36.1919, lng: 5.4138 },
    localPartners: ["Iris", "Eniem", "Local SMEs"],
    headquarters: true,
    specializations: ["Agritech", "Manufacturing", "Retail Tech"]
  },
  "annaba": {
    name: { fr: "Annaba", en: "Annaba", ar: "عنابة" },
    region: { fr: "Nord-Est", en: "Northeast", ar: "الشمال الشرقي" },
    population: "640K",
    coordinates: { lat: 36.9000, lng: 7.7667 },
    localPartners: ["ArcelorMittal", "Port Authority"],
    specializations: ["Industrial IoT", "Supply Chain", "Maritime Tech"]
  },
  "blida": {
    name: { fr: "Blida", en: "Blida", ar: "البليدة" },
    region: { fr: "Centre", en: "Center", ar: "الوسط" },
    population: "420K",
    coordinates: { lat: 36.4703, lng: 2.8278 },
    localPartners: ["Saidal", "Local Industries"],
    specializations: ["Pharmaceutical Tech", "Agriculture", "Commerce"]
  },
  "batna": {
    name: { fr: "Batna", en: "Batna", ar: "باتنة" },
    region: { fr: "Aurès", en: "Aures", ar: "الأوراس" },
    population: "380K",
    coordinates: { lat: 35.5560, lng: 6.1742 },
    specializations: ["Tourism Tech", "Cultural Heritage", "E-commerce"]
  },
  "djelfa": {
    name: { fr: "Djelfa", en: "Djelfa", ar: "الجلفة" },
    region: { fr: "Hauts-Plateaux", en: "High Plains", ar: "الهضاب العليا" },
    population: "490K",
    coordinates: { lat: 34.6728, lng: 3.2630 },
    specializations: ["Renewable Energy", "Livestock Tech", "Rural Solutions"]
  },
  "tlemcen": {
    name: { fr: "Tlemcen", en: "Tlemcen", ar: "تلمسان" },
    region: { fr: "Nord-Ouest", en: "Northwest", ar: "الشمال الغربي" },
    population: "350K",
    coordinates: { lat: 34.8784, lng: -1.3150 },
    specializations: ["Tourism", "Heritage Tech", "Border Trade Solutions"]
  },
  "bejaia": {
    name: { fr: "Béjaïa", en: "Bejaia", ar: "بجاية" },
    region: { fr: "Kabylie", en: "Kabylie", ar: "القبائل" },
    population: "360K",
    coordinates: { lat: 36.7509, lng: 5.0843 },
    localPartners: ["Cevital", "Port Béjaïa"],
    specializations: ["Food Tech", "Maritime", "Oil & Gas Tech"]
  }
};

export default function CityPage() {
  const router = useRouter();
  const { city: citySlug } = router.query;
  const { t } = useTranslation('common');
  const locale = router.locale || 'fr';

  if (!citySlug || !cityData[citySlug]) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Ville non trouvée</h1>
          <Link href="/" className="text-blue-400 hover:underline">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const city = cityData[citySlug];
  const cityName = city.name[locale] || city.name.fr;

  const content = {
    fr: {
      heroTitle: `Services IT & Développement Web à ${cityName}`,
      heroSubtitle: `Votre partenaire technologique local #1 à ${cityName} et région ${city.region.fr}`,
      heroDescription: `Symloop Technology offre des solutions digitales complètes à ${cityName}: développement web, applications mobiles, transformation digitale, cybersécurité, et plus. Expertise locale, standards internationaux.`,
      whyTitle: `Pourquoi Choisir Symloop à ${cityName} ?`,
      servicesTitle: `Nos Services à ${cityName}`,
      clientsTitle: `Nos Clients à ${cityName}`,
      contactTitle: `Contactez Notre Bureau ${cityName}`,
      statsTitle: `Symloop à ${cityName} en Chiffres`,
      testimonialTitle: `Ce Que Disent Nos Clients à ${cityName}`,
      ctaTitle: "Prêt à Transformer Votre Business ?",
      ctaButton: "Consultation Gratuite"
    },
    en: {
      heroTitle: `IT Services & Web Development in ${cityName}`,
      heroSubtitle: `Your #1 local technology partner in ${cityName} and ${city.region.en} region`,
      heroDescription: `Symloop Technology offers complete digital solutions in ${cityName}: web development, mobile apps, digital transformation, cybersecurity, and more. Local expertise, international standards.`,
      whyTitle: `Why Choose Symloop in ${cityName}?`,
      servicesTitle: `Our Services in ${cityName}`,
      clientsTitle: `Our Clients in ${cityName}`,
      contactTitle: `Contact Our ${cityName} Office`,
      statsTitle: `Symloop in ${cityName} by Numbers`,
      testimonialTitle: `What Our ${cityName} Clients Say`,
      ctaTitle: "Ready to Transform Your Business?",
      ctaButton: "Free Consultation"
    },
    ar: {
      heroTitle: `خدمات تكنولوجيا المعلومات وتطوير الويب في ${cityName}`,
      heroSubtitle: `شريكك التقني المحلي رقم 1 في ${cityName} ومنطقة ${city.region.ar}`,
      heroDescription: `تقدم سيملوب تكنولوجي حلولاً رقمية كاملة في ${cityName}: تطوير الويب، تطبيقات الجوال، التحول الرقمي، الأمن السيبراني، والمزيد. خبرة محلية، معايير عالمية.`,
      whyTitle: `لماذا تختار سيملوب في ${cityName}؟`,
      servicesTitle: `خدماتنا في ${cityName}`,
      clientsTitle: `عملاؤنا في ${cityName}`,
      contactTitle: `اتصل بمكتبنا في ${cityName}`,
      statsTitle: `سيملوب في ${cityName} بالأرقام`,
      testimonialTitle: `ماذا يقول عملاؤنا في ${cityName}`,
      ctaTitle: "مستعد لتحويل عملك؟",
      ctaButton: "استشارة مجانية"
    }
  };

  const currentContent = content[locale];

  const services = [
    {
      title: { fr: "Développement Web", en: "Web Development", ar: "تطوير الويب" },
      description: {
        fr: `Sites web professionnels et e-commerce pour entreprises à ${cityName}`,
        en: `Professional websites and e-commerce for businesses in ${cityName}`,
        ar: `مواقع ويب احترافية والتجارة الإلكترونية للشركات في ${cityName}`
      },
      icon: "Globe"
    },
    {
      title: { fr: "Applications Mobiles", en: "Mobile Apps", ar: "تطبيقات الجوال" },
      description: {
        fr: `Apps iOS et Android pour votre business local à ${cityName}`,
        en: `iOS and Android apps for your local business in ${cityName}`,
        ar: `تطبيقات iOS و Android لأعمالك المحلية في ${cityName}`
      },
      icon: "Smartphone"
    },
    {
      title: { fr: "Transformation Digitale", en: "Digital Transformation", ar: "التحول الرقمي" },
      description: {
        fr: `Modernisez votre entreprise avec l'Industry 4.0 à ${cityName}`,
        en: `Modernize your business with Industry 4.0 in ${cityName}`,
        ar: `حدّث عملك مع الصناعة 4.0 في ${cityName}`
      },
      icon: "TrendingUp"
    },
    {
      title: { fr: "Cybersécurité", en: "Cybersecurity", ar: "الأمن السيبراني" },
      description: {
        fr: `Protégez vos données et systèmes à ${cityName}`,
        en: `Protect your data and systems in ${cityName}`,
        ar: `احمِ بياناتك وأنظمتك في ${cityName}`
      },
      icon: "Shield"
    }
  ];

  const seoTitle = {
    fr: `${currentContent.heroTitle} | Symloop Technology`,
    en: `${currentContent.heroTitle} | Symloop Technology`,
    ar: `${currentContent.heroTitle} | سيملوب تكنولوجي`
  };

  const seoDescription = currentContent.heroDescription;

  const seoKeywords = {
    fr: `${cityName} développement web, ${cityName} création site internet, agence web ${cityName}, développeur ${cityName}, ${cityName} application mobile, ${cityName} transformation digitale, ${cityName} cybersécurité, ${cityName} SEO, ${cityName} marketing digital, ${cityName} e-commerce, ${cityName} logiciel sur mesure, ${cityName} ERP CRM, ${cityName} cloud computing, ${cityName} intelligence artificielle, ${cityName} IoT, entreprise IT ${cityName}, services informatiques ${cityName}, consultant IT ${cityName}, ${cityName} 2025, ${cityName} 2024, meilleur développeur ${cityName}, prix développement ${cityName}, devis gratuit ${cityName}`,
    en: `${cityName} web development, ${cityName} website creation, web agency ${cityName}, developer ${cityName}, ${cityName} mobile app, ${cityName} digital transformation, ${cityName} cybersecurity, ${cityName} SEO, ${cityName} digital marketing, ${cityName} e-commerce, ${cityName} custom software, ${cityName} ERP CRM, ${cityName} cloud computing, ${cityName} artificial intelligence, ${cityName} IoT, IT company ${cityName}, IT services ${cityName}, IT consultant ${cityName}, ${cityName} 2025, ${cityName} 2024, best developer ${cityName}, development price ${cityName}, free quote ${cityName}`,
    ar: `${cityName} تطوير الويب، ${cityName} إنشاء موقع، وكالة ويب ${cityName}، مطور ${cityName}، ${cityName} تطبيق جوال، ${cityName} التحول الرقمي، ${cityName} الأمن السيبراني، ${cityName} SEO، ${cityName} التسويق الرقمي، ${cityName} التجارة الإلكترونية، ${cityName} برمجيات مخصصة، ${cityName} ERP CRM، ${cityName} الحوسبة السحابية، ${cityName} الذكاء الاصطناعي، ${cityName} IoT، شركة IT ${cityName}، خدمات تقنية ${cityName}، استشاري IT ${cityName}، ${cityName} 2025، ${cityName} 2024، أفضل مطور ${cityName}، سعر التطوير ${cityName}، عرض سعر مجاني ${cityName}`
  };

  return (
    <>
      <SeoEnhanced
        title={seoTitle[locale]}
        description={seoDescription}
        keywords={seoKeywords[locale]}
        city={cityName}
      />

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
          <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
            <div className="text-center space-y-6">
              {city.headquarters && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full text-green-400 text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>Siège Social Symloop</span>
                </div>
              )}
              {city.techHub && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 text-sm mb-4">
                  <Zap className="w-4 h-4" />
                  <span>Tech Hub</span>
                </div>
              )}
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {currentContent.heroTitle}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {currentContent.heroSubtitle}
              </p>
              <p className="text-lg text-gray-400 max-w-4xl mx-auto">
                {currentContent.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <a
                  href="tel:+213549575512"
                  className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all"
                >
                  <Phone className="inline-block w-5 h-5 mr-2" />
                  0549-57-55-12
                </a>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all"
                >
                  {currentContent.ctaButton}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white/5 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">{currentContent.statsTitle}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400">50+</div>
                <div className="text-gray-400 mt-2">
                  {locale === 'ar' ? 'عملاء' : locale === 'en' ? 'Clients' : 'Clients'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400">100+</div>
                <div className="text-gray-400 mt-2">
                  {locale === 'ar' ? 'مشاريع' : locale === 'en' ? 'Projects' : 'Projets'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400">24/7</div>
                <div className="text-gray-400 mt-2">
                  {locale === 'ar' ? 'دعم' : locale === 'en' ? 'Support' : 'Support'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400">5⭐</div>
                <div className="text-gray-400 mt-2">
                  {locale === 'ar' ? 'تقييم' : locale === 'en' ? 'Rating' : 'Évaluation'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">{currentContent.servicesTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-400 transition-all">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title[locale]}</h3>
                  <p className="text-gray-400">{service.description[locale]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specializations */}
        {city.specializations && (
          <div className="bg-white/5 py-16">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-12">
                {locale === 'ar' ? 'تخصصاتنا' : locale === 'en' ? 'Our Specializations' : 'Nos Spécialisations'}
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                {city.specializations.map((spec, i) => (
                  <div key={i} className="px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-white/20">
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Local Partners */}
        {city.localPartners && (
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-12">{currentContent.clientsTitle}</h2>
              <div className="flex flex-wrap gap-8 justify-center">
                {city.localPartners.map((partner, i) => (
                  <div key={i} className="px-8 py-4 bg-white/10 rounded-lg text-lg font-semibold">
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">{currentContent.whyTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  {locale === 'ar' ? 'فريق محلي' : locale === 'en' ? 'Local Team' : 'Équipe Locale'}
                </h3>
                <p className="text-gray-400">
                  {locale === 'ar'
                    ? `خبراء محليون يفهمون سوق ${cityName}`
                    : locale === 'en'
                    ? `Local experts who understand ${cityName} market`
                    : `Experts locaux qui comprennent le marché de ${cityName}`}
                </p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  {locale === 'ar' ? 'معايير عالمية' : locale === 'en' ? 'Global Standards' : 'Standards Mondiaux'}
                </h3>
                <p className="text-gray-400">
                  {locale === 'ar'
                    ? 'جودة عالمية بأسعار محلية'
                    : locale === 'en'
                    ? 'International quality at local prices'
                    : 'Qualité internationale à prix locaux'}
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  {locale === 'ar' ? 'دعم 24/7' : locale === 'en' ? '24/7 Support' : 'Support 24/7'}
                </h3>
                <p className="text-gray-400">
                  {locale === 'ar'
                    ? 'دعم مستمر بلغتك المحلية'
                    : locale === 'en'
                    ? 'Continuous support in your local language'
                    : 'Support continu dans votre langue locale'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">{currentContent.testimonialTitle}</h2>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg text-gray-300 italic mb-6">
                {locale === 'ar'
                  ? `"سيملوب تكنولوجي حولت عملنا بالكامل. خبرتهم المحلية في ${cityName} مع معايير عالمية جعلتهم الشريك المثالي لتحولنا الرقمي."`
                  : locale === 'en'
                  ? `"Symloop Technology completely transformed our business. Their local expertise in ${cityName} combined with global standards made them the perfect partner for our digital transformation."`
                  : `"Symloop Technology a complètement transformé notre entreprise. Leur expertise locale à ${cityName} combinée aux standards mondiaux en fait le partenaire idéal pour notre transformation digitale."`}
              </p>
              <div className="font-bold">
                {city.localPartners && city.localPartners[0]
                  ? `- Directeur IT, ${city.localPartners[0]}`
                  : `- Directeur IT, Entreprise Leader à ${cityName}`}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">{currentContent.ctaTitle}</h2>
            <p className="text-xl mb-8">
              {locale === 'ar'
                ? `ابدأ مشروعك الرقمي في ${cityName} مع سيملوب اليوم`
                : locale === 'en'
                ? `Start your digital project in ${cityName} with Symloop today`
                : `Lancez votre projet digital à ${cityName} avec Symloop aujourd'hui`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+213549575512"
                className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all"
              >
                <Phone className="inline-block w-5 h-5 mr-2" />
                0549-57-55-12
              </a>
              <a
                href={`mailto:contact@symloop.com?subject=Projet ${cityName}`}
                className="px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition-all"
              >
                <Mail className="inline-block w-5 h-5 mr-2" />
                contact@symloop.com
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="py-16 bg-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-8">{currentContent.contactTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <div className="font-bold mb-2">
                  {locale === 'ar' ? 'العنوان' : locale === 'en' ? 'Address' : 'Adresse'}
                </div>
                <div className="text-gray-400">
                  {city.headquarters
                    ? "Cité 1000 Logements, Sétif 19000"
                    : `Service disponible à ${cityName}`}
                </div>
              </div>
              <div>
                <Phone className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <div className="font-bold mb-2">
                  {locale === 'ar' ? 'الهاتف' : locale === 'en' ? 'Phone' : 'Téléphone'}
                </div>
                <div className="text-gray-400">
                  +213 549-57-55-12<br/>
                  +213 555-12-34-56
                </div>
              </div>
              <div>
                <Clock className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <div className="font-bold mb-2">
                  {locale === 'ar' ? 'ساعات العمل' : locale === 'en' ? 'Working Hours' : 'Horaires'}
                </div>
                <div className="text-gray-400">
                  {locale === 'ar'
                    ? 'الأحد - الخميس: 8:00 - 18:00'
                    : locale === 'en'
                    ? 'Sun - Thu: 8:00 AM - 6:00 PM'
                    : 'Dim - Jeu: 8h00 - 18h00'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const cities = Object.keys(cityData);
  const locales = ['fr', 'en', 'ar'];

  const paths = [];
  cities.forEach(city => {
    locales.forEach(locale => {
      paths.push({ params: { city }, locale });
    });
  });

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ locale, params }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}