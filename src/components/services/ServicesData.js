import { 
  Code2, 
  Smartphone, 
  Globe, 
  Wifi, 
  Network,
  Database,
  Cloud,
  Shield
} from "lucide-react";

export const getServicesData = (t, router) => {
  const isRTL = router?.locale === 'ar';
  const currency = router?.locale === 'ar' ? 'SAR' : 
                  router?.locale === 'en' ? 'USD' : 
                  'EUR';
  
  const formatPrice = (min, max, currency) => {
    if (min === null || max === null) {
      return t('servicesPage.priceOnQuote');
    }
    
    const formatter = {
      'USD': { min: Math.round(min/400), max: Math.round(max/400), symbol: '$' },
      'EUR': { min: Math.round(min/450), max: Math.round(max/450), symbol: '€' },
      'SAR': { min: Math.round(min/100), max: Math.round(max/100), symbol: 'SAR' }
    };
    
    const formatted = formatter[currency];
    return `${formatted.symbol}${formatted.min.toLocaleString()} - ${formatted.symbol}${formatted.max.toLocaleString()}`;
  };

  const getFeatures = (translationKey) => {
    const features = t(translationKey);
    if (Array.isArray(features)) return features;
    if (typeof features === 'object' && features !== null) return Object.values(features);
    return [];
  };

  return [
    {
      id: "dev-logiciel",
      title: t('servicesData.software.title'),
      slug: router?.locale === 'fr' ? "developpement-logiciel-sur-mesure-mena" :
            router?.locale === 'ar' ? "تطوير-البرمجيات-المخصصة-مينا" :
            "custom-software-development-mena",
      subtitle: t('servicesData.software.subtitle'),
      description: t('servicesData.software.description'),
      longDescription: t('servicesData.software.description'),
      features: getFeatures('servicesData.software.features'),
      keywords: router?.locale === 'fr' 
        ? ["développement logiciel sur mesure Algérie", "ERP personnalisé MENA", "CRM sur mesure Algérie", "applications métier DZ", "logiciel entreprise MENA"]
        : router?.locale === 'ar' 
        ? ["تطوير البرمجيات المخصصة مينا", "نظام تخطيط موارد المؤسسات مينا", "إدارة علاقات العملاء مينا", "تطبيقات الأعمال مينا", "برمجيات الشركات مينا"]
        : ["custom software development MENA", "ERP systems MENA", "CRM solutions MENA", "business applications MENA", "enterprise software MENA"],
      icon: Code2,
      color: "from-blue-500 to-purple-600",
      priceMin: 120000,
      priceMax: 800000,
      estimatedPrice: formatPrice(120000, 800000, currency),
      deliveryTime: t('servicesData.software.duration'),
      category: t('servicesPage.categories.développement')
    },
    {
      id: "app-mobile-flutter",
      title: t('servicesData.mobile.title'),
      slug: router?.locale === 'fr' ? "developpement-application-mobile-flutter-mena" :
            router?.locale === 'ar' ? "تطوير-تطبيقات-الهاتف-فلاتر-مينا" :
            "flutter-mobile-app-development-mena",
      subtitle: t('servicesData.mobile.subtitle'),
      description: t('servicesData.mobile.description'),
      longDescription: t('servicesData.mobile.description'),
      features: getFeatures('servicesData.mobile.features'),
      keywords: router?.locale === 'fr' 
        ? ["développeur Flutter Algérie MENA", "application mobile cross-platform", "React Native Algérie", "développement iOS Android DZ", "app mobile sur mesure MENA"]
        : router?.locale === 'ar' 
        ? ["مطور فلاتر مينا", "تطبيق هاتف متعدد المنصات مينا", "تطوير iOS Android مينا", "تطبيق جوال مخصص مينا", "برمجة التطبيقات مينا"]
        : ["Flutter developer MENA", "cross-platform mobile apps MENA", "React Native MENA", "iOS Android development MENA", "custom mobile app MENA"],
      icon: Smartphone,
      color: "from-green-500 to-teal-600",
      priceMin: 180000,
      priceMax: 1200000,
      estimatedPrice: formatPrice(180000, 1200000, currency),
      deliveryTime: t('servicesData.mobile.duration'),
      category: t('servicesPage.categories.mobile')
    },
    {
      id: "site-web-ecommerce",
      title: t('servicesData.web.title'),
      slug: router?.locale === 'fr' ? "creation-site-web-ecommerce-mena" :
            router?.locale === 'ar' ? "تطوير-مواقع-التجارة-الالكترونية-مينا" :
            "website-ecommerce-development-mena",
      subtitle: t('servicesData.web.subtitle'),
      description: t('servicesData.web.description'),
      longDescription: t('servicesData.web.description'),
      features: getFeatures('servicesData.web.features'),
      keywords: router?.locale === 'fr' 
        ? ["création site web Algérie MENA", "e-commerce DZ", "développement web responsive", "site vitrine Algérie", "SEO Algérie MENA"]
        : router?.locale === 'ar' 
        ? ["تطوير مواقع الويب مينا", "التجارة الإلكترونية مينا", "تصميم مواقع متجاوبة مينا", "مواقع الشركات مينا", "تحسين محركات البحث مينا"]
        : ["website development MENA", "ecommerce MENA", "responsive web design MENA", "business websites MENA", "SEO optimization MENA"],
      icon: Globe,
      color: "from-orange-500 to-red-600",
      priceMin: 60000,
      priceMax: 500000,
      estimatedPrice: formatPrice(60000, 500000, currency),
      deliveryTime: t('servicesData.web.duration'),
      category: t('servicesPage.categories.web')
    },
    {
      id: "infrastructure-reseau-iot",
      title: t('servicesData.iot.title'),
      slug: router?.locale === 'fr' ? "solutions-iot-esp32-objets-connectes-mena" :
            router?.locale === 'ar' ? "حلول-انترنت-الاشياء-ESP32-مينا" :
            "iot-solutions-esp32-connected-objects-mena",
      subtitle: t('servicesData.iot.subtitle'),
      description: t('servicesData.iot.description'),
      longDescription: t('servicesData.iot.description'),
      features: getFeatures('servicesData.iot.features'),
      keywords: router?.locale === 'fr' 
        ? ["solutions IoT Algérie MENA", "ESP32 développement", "objets connectés DZ", "agriculture intelligente", "monitoring industriel MENA"]
        : router?.locale === 'ar' 
        ? ["حلول إنترنت الأشياء مينا", "تطوير ESP32 مينا", "الأجهزة المتصلة مينا", "الزراعة الذكية مينا", "المراقبة الصناعية مينا"]
        : ["IoT solutions MENA", "ESP32 development MENA", "connected devices MENA", "smart agriculture MENA", "industrial monitoring MENA"],
      icon: Wifi,
      color: "from-purple-500 to-blue-600",
      priceMin: null,
      priceMax: null,
      estimatedPrice: t('servicesPage.priceOnQuote'),
      pricing: "custom",
      deliveryTime: t('servicesData.iot.duration'),
      category: t('servicesPage.categories.infrastructure'),
      customPricing: true,
      priceDescription: t('servicesData.iot.applications.0')
    },
    {
      id: "intelligence-artificielle",
      title: t('servicesData.ai.title'),
      slug: router?.locale === 'fr' ? "intelligence-artificielle-chatgpt-machine-learning-mena" :
            router?.locale === 'ar' ? "الذكاء-الاصطناعي-ChatGPT-تعلم-الآلة-مينا" :
            "artificial-intelligence-chatgpt-machine-learning-mena",
      subtitle: t('servicesData.ai.subtitle'),
      description: t('servicesData.ai.description'),
      longDescription: t('servicesData.ai.description'),
      features: getFeatures('servicesData.ai.features'),
      keywords: router?.locale === 'fr' 
        ? ["intelligence artificielle Algérie MENA", "ChatGPT intégration", "machine learning DZ", "vision par ordinateur", "IA pour entreprises MENA"]
        : router?.locale === 'ar' 
        ? ["الذكاء الاصطناعي مينا", "تكامل ChatGPT مينا", "تعلم الآلة مينا", "رؤية الحاسوب مينا", "الذكاء الاصطناعي للشركات مينا"]
        : ["artificial intelligence MENA", "ChatGPT integration MENA", "machine learning MENA", "computer vision MENA", "AI for enterprises MENA"],
      icon: Database,
      color: "from-indigo-500 to-purple-600",
      priceMin: 300000,
      priceMax: 3000000,
      estimatedPrice: formatPrice(300000, 3000000, currency),
      deliveryTime: t('servicesData.ai.duration'),
      category: t('servicesPage.categories.développement')
    },
    {
      id: "cybersecurity",
      title: t('servicesData.cybersecurity.title'),
      slug: router?.locale === 'fr' ? "cybersecurite-entreprise-protection-donnees-mena" :
            router?.locale === 'ar' ? "الأمن-السيبراني-للشركات-حماية-البيانات-مينا" :
            "enterprise-cybersecurity-data-protection-mena",
      subtitle: t('servicesData.cybersecurity.subtitle'),
      description: t('servicesData.cybersecurity.description'),
      longDescription: t('servicesData.cybersecurity.description'),
      features: getFeatures('servicesData.cybersecurity.features'),
      keywords: router?.locale === 'fr' 
        ? ["cybersécurité Algérie MENA", "protection données DZ", "sécurité réseau", "audit sécurité", "conformité PME MENA"]
        : router?.locale === 'ar' 
        ? ["الأمن السيبراني مينا", "حماية البيانات مينا", "أمان الشبكات مينا", "تدقيق الأمان مينا", "امتثال الشركات مينا"]
        : ["cybersecurity MENA", "data protection MENA", "network security MENA", "security audit MENA", "SME compliance MENA"],
      icon: Shield,
      color: "from-red-500 to-pink-600",
      priceMin: 100000,
      priceMax: 1000000,
      estimatedPrice: formatPrice(100000, 1000000, currency),
      deliveryTime: t('servicesData.cybersecurity.duration'),
      category: t('servicesPage.categories.infrastructure')
    }
  ];
};

export const getStatsData = (t) => [
  { number: "70+", label: t('hero.stats.projects') },
  { number: "98%", label: t('hero.stats.satisfaction') },
  { number: "5+", label: t('hero.stats.experience') },
  { number: "24/7", label: t('hero.stats.support') }
];

export const getIndustriesData = (t) => [
  {
    name: t('services.industries.manufacturing'),
    icon: "🏭",
    description: t('services.industries.manufacturing')
  },
  {
    name: t('services.industries.health'),
    icon: "🏥",
    description: t('services.industries.health')
  },
  {
    name: t('services.industries.education'),
    icon: "🎓", 
    description: t('services.industries.education')
  },
  {
    name: t('services.industries.commerce'),
    icon: "🏪",
    description: t('services.industries.commerce')
  },
  {
    name: t('services.industries.banking'),
    icon: "🏦",
    description: t('services.industries.banking')
  },
  {
    name: t('services.industries.agriculture'),
    icon: "🌾",
    description: t('services.industries.agriculture')
  }
];