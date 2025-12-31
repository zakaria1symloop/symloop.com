import { useRouter } from "next/router";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from "next/head";
import Link from "next/link";
import {
  Camera, Shield, Wifi, Smartphone, Video, Eye, Lock,
  CheckCircle2, Star, Phone, Mail, MapPin, Clock,
  ArrowRight, Play, Award, Users, Zap, Home, Building, Store, Factory
} from "lucide-react";

// All 48 Algerian wilayas with camera service data
const cityData = {
  "alger": {
    name: { fr: "Alger", en: "Algiers", ar: "الجزائر العاصمة" },
    population: "3.5M",
    coordinates: { lat: 36.7538, lng: 3.0588 },
    priority: 1,
    interventionDelay: "24h",
    localAreas: ["Bab El Oued", "Hussein Dey", "Kouba", "El Harrach", "Bir Mourad Raïs", "Cheraga", "Draria", "Bab Ezzouar", "Rouiba", "Dar El Beida"]
  },
  "oran": {
    name: { fr: "Oran", en: "Oran", ar: "وهران" },
    population: "1.5M",
    coordinates: { lat: 35.6987, lng: -0.6349 },
    priority: 1,
    interventionDelay: "48h",
    localAreas: ["Es Senia", "Bir El Djir", "Arzew", "Ain Turk", "Mers El Kebir", "Gdyel", "Bethioua"]
  },
  "constantine": {
    name: { fr: "Constantine", en: "Constantine", ar: "قسنطينة" },
    population: "950K",
    coordinates: { lat: 36.3650, lng: 6.6147 },
    priority: 1,
    interventionDelay: "48h",
    localAreas: ["El Khroub", "Ain Smara", "Didouche Mourad", "Hamma Bouziane", "Zighoud Youcef"]
  },
  "setif": {
    name: { fr: "Sétif", en: "Setif", ar: "سطيف" },
    population: "450K",
    coordinates: { lat: 36.1919, lng: 5.4138 },
    priority: 1,
    interventionDelay: "24h",
    headquarters: true,
    localAreas: ["El Eulma", "Ain Oulmene", "Ain Arnat", "Bougaa", "Guellal"]
  },
  "annaba": {
    name: { fr: "Annaba", en: "Annaba", ar: "عنابة" },
    population: "640K",
    coordinates: { lat: 36.9000, lng: 7.7667 },
    priority: 1,
    interventionDelay: "48h",
    localAreas: ["El Bouni", "Sidi Amar", "El Hadjar", "Berrahal", "Ain Berda"]
  },
  "blida": {
    name: { fr: "Blida", en: "Blida", ar: "البليدة" },
    population: "420K",
    coordinates: { lat: 36.4703, lng: 2.8278 },
    priority: 1,
    interventionDelay: "24h",
    localAreas: ["Boufarik", "Mouzaia", "Beni Mered", "Oued El Alleug", "Chréa"]
  },
  "batna": {
    name: { fr: "Batna", en: "Batna", ar: "باتنة" },
    population: "380K",
    coordinates: { lat: 35.5560, lng: 6.1742 },
    priority: 2,
    interventionDelay: "72h",
    localAreas: ["Barika", "Ain Touta", "N'Gaous", "Merouana", "Arris"]
  },
  "djelfa": {
    name: { fr: "Djelfa", en: "Djelfa", ar: "الجلفة" },
    population: "490K",
    coordinates: { lat: 34.6728, lng: 3.2630 },
    priority: 2,
    interventionDelay: "72h",
    localAreas: ["Ain Oussera", "Messaad", "Hassi Bahbah", "Dar Chioukh"]
  },
  "tlemcen": {
    name: { fr: "Tlemcen", en: "Tlemcen", ar: "تلمسان" },
    population: "350K",
    coordinates: { lat: 34.8784, lng: -1.3150 },
    priority: 2,
    interventionDelay: "72h",
    localAreas: ["Maghnia", "Ghazaouet", "Remchi", "Sebdou", "Nedroma"]
  },
  "bejaia": {
    name: { fr: "Béjaïa", en: "Bejaia", ar: "بجاية" },
    population: "360K",
    coordinates: { lat: 36.7509, lng: 5.0843 },
    priority: 2,
    interventionDelay: "48h",
    localAreas: ["Akbou", "El Kseur", "Amizour", "Tichy", "Aokas", "Sidi Aich"]
  },
  "tizi-ouzou": {
    name: { fr: "Tizi Ouzou", en: "Tizi Ouzou", ar: "تيزي وزو" },
    population: "400K",
    coordinates: { lat: 36.7169, lng: 4.0497 },
    priority: 2,
    interventionDelay: "48h",
    localAreas: ["Azazga", "Draa El Mizan", "Tigzirt", "Ain El Hammam", "Larbaa Nath Irathen"]
  },
  "biskra": {
    name: { fr: "Biskra", en: "Biskra", ar: "بسكرة" },
    population: "310K",
    coordinates: { lat: 34.8480, lng: 5.7286 },
    priority: 2,
    interventionDelay: "72h",
    localAreas: ["Tolga", "Ouled Djellal", "Sidi Okba", "El Kantara", "Zeribet El Oued"]
  },
  "skikda": {
    name: { fr: "Skikda", en: "Skikda", ar: "سكيكدة" },
    population: "280K",
    coordinates: { lat: 36.8667, lng: 6.9000 },
    priority: 2,
    interventionDelay: "72h",
    localAreas: ["Azzaba", "Collo", "El Harrouch", "Tamalous", "Ramdane Djamel"]
  },
  "sidi-bel-abbes": {
    name: { fr: "Sidi Bel Abbès", en: "Sidi Bel Abbes", ar: "سيدي بلعباس" },
    population: "290K",
    coordinates: { lat: 35.1903, lng: -0.6308 },
    priority: 2,
    interventionDelay: "72h",
    localAreas: ["Telagh", "Ben Badis", "Sfisef", "Ain El Berd", "Tessala"]
  },
  "mostaganem": {
    name: { fr: "Mostaganem", en: "Mostaganem", ar: "مستغانم" },
    population: "250K",
    coordinates: { lat: 35.9333, lng: 0.0833 },
    priority: 2,
    interventionDelay: "72h",
    localAreas: ["Ain Tedles", "Hassi Mameche", "Mazagran", "Kheir Eddine"]
  },
  "msila": {
    name: { fr: "M'sila", en: "M'sila", ar: "المسيلة" },
    population: "320K",
    coordinates: { lat: 35.7000, lng: 4.5500 },
    priority: 2,
    interventionDelay: "72h",
    localAreas: ["Bou Saada", "Ain El Hadjel", "Sidi Aissa", "Hammam Dalaa"]
  },
  "chlef": {
    name: { fr: "Chlef", en: "Chlef", ar: "الشلف" },
    population: "280K",
    coordinates: { lat: 36.1650, lng: 1.3317 },
    priority: 2,
    interventionDelay: "72h",
    localAreas: ["Tenes", "Ouled Fares", "Chettia", "Boukadir", "El Karimia"]
  },
  "bouira": {
    name: { fr: "Bouira", en: "Bouira", ar: "البويرة" },
    population: "220K",
    coordinates: { lat: 36.3833, lng: 3.9000 },
    priority: 2,
    interventionDelay: "48h",
    localAreas: ["Lakhdaria", "Sour El Ghozlane", "M'Chedallah", "Ain Bessem", "Haizer"]
  },
  "medea": {
    name: { fr: "Médéa", en: "Medea", ar: "المدية" },
    population: "200K",
    coordinates: { lat: 36.2647, lng: 2.7540 },
    priority: 2,
    interventionDelay: "48h",
    localAreas: ["Berrouaghia", "Ksar El Boukhari", "Tablat", "Ain Boucif"]
  },
  "tipaza": {
    name: { fr: "Tipaza", en: "Tipaza", ar: "تيبازة" },
    population: "180K",
    coordinates: { lat: 36.5897, lng: 2.4472 },
    priority: 1,
    interventionDelay: "24h",
    localAreas: ["Kolea", "Cherchell", "Hadjout", "Bou Ismail", "Fouka"]
  },
  "boumerdes": {
    name: { fr: "Boumerdès", en: "Boumerdes", ar: "بومرداس" },
    population: "220K",
    coordinates: { lat: 36.7594, lng: 3.4722 },
    priority: 1,
    interventionDelay: "24h",
    localAreas: ["Bordj Menaiel", "Dellys", "Thenia", "Khemis El Khechna", "Boudouaou"]
  },
  "ghardaia": {
    name: { fr: "Ghardaïa", en: "Ghardaia", ar: "غرداية" },
    population: "180K",
    coordinates: { lat: 32.4900, lng: 3.6700 },
    priority: 3,
    interventionDelay: "5 jours",
    localAreas: ["Berriane", "Metlili", "Guerrara", "El Meniaa", "Zelfana"]
  },
  "ouargla": {
    name: { fr: "Ouargla", en: "Ouargla", ar: "ورقلة" },
    population: "220K",
    coordinates: { lat: 31.9500, lng: 5.3167 },
    priority: 3,
    interventionDelay: "5 jours",
    localAreas: ["Hassi Messaoud", "Touggourt", "Temacine", "Rouissat", "Ain Beida"]
  },
  "laghouat": {
    name: { fr: "Laghouat", en: "Laghouat", ar: "الأغواط" },
    population: "170K",
    coordinates: { lat: 33.8000, lng: 2.8650 },
    priority: 3,
    interventionDelay: "5 jours",
    localAreas: ["Aflou", "Ksar El Hirane", "Hassi R'Mel", "Ain Mahdi"]
  }
};

// Camera products data
const cameraProducts = [
  {
    name: { fr: "Caméra Dôme Intérieure CAM-360", en: "Indoor Dome Camera CAM-360", ar: "كاميرا قبة داخلية CAM-360" },
    features: {
      fr: ["Full HD 1080p", "Vision nocturne 15m", "Détection mouvement", "Stockage local SD"],
      en: ["Full HD 1080p", "15m night vision", "Motion detection", "Local SD storage"],
      ar: ["فل اتش دي 1080p", "رؤية ليلية 15م", "كشف الحركة", "تخزين محلي SD"]
    },
    ideal: { fr: "Intérieur maison/bureau", en: "Indoor home/office", ar: "داخلي منزل/مكتب" }
  },
  {
    name: { fr: "Caméra Bullet Extérieure CAM-EXT", en: "Outdoor Bullet Camera CAM-EXT", ar: "كاميرا بوليت خارجية CAM-EXT" },
    features: {
      fr: ["4K Ultra HD", "Vision nocturne 30m", "IP67 étanche", "Audio bidirectionnel"],
      en: ["4K Ultra HD", "30m night vision", "IP67 waterproof", "Two-way audio"],
      ar: ["4K الترا اتش دي", "رؤية ليلية 30م", "IP67 مقاوم للماء", "صوت ثنائي الاتجاه"]
    },
    ideal: { fr: "Extérieur/Jardin/Parking", en: "Outdoor/Garden/Parking", ar: "خارجي/حديقة/موقف" }
  },
  {
    name: { fr: "Caméra PTZ Professionnelle CAM-PTZ", en: "Professional PTZ Camera CAM-PTZ", ar: "كاميرا PTZ احترافية CAM-PTZ" },
    features: {
      fr: ["Zoom optique 30x", "Rotation 360°", "Suivi automatique", "IA détection personnes"],
      en: ["30x optical zoom", "360° rotation", "Auto tracking", "AI person detection"],
      ar: ["تكبير بصري 30x", "دوران 360°", "تتبع تلقائي", "كشف أشخاص بالذكاء الاصطناعي"]
    },
    ideal: { fr: "Grandes surfaces/Entrepôts", en: "Large areas/Warehouses", ar: "مساحات كبيرة/مستودعات" }
  },
  {
    name: { fr: "Sonnette Vidéo DOOR-V1", en: "Video Doorbell DOOR-V1", ar: "جرس فيديو DOOR-V1" },
    features: {
      fr: ["Caméra HD", "Interphone", "Détection visiteur", "Déblocage à distance"],
      en: ["HD camera", "Intercom", "Visitor detection", "Remote unlock"],
      ar: ["كاميرا HD", "انتركم", "كشف الزوار", "فتح عن بعد"]
    },
    ideal: { fr: "Entrée maison/Appartement", en: "Home/Apartment entrance", ar: "مدخل المنزل/الشقة" }
  }
];

export default function CameraSurveillanceCityPage() {
  const router = useRouter();
  const { city: citySlug } = router.query;
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  if (!citySlug || !cityData[citySlug]) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">
            {locale === 'ar' ? 'المدينة غير موجودة' : locale === 'en' ? 'City not found' : 'Ville non trouvée'}
          </h1>
          <Link href="/" className="text-blue-400 hover:underline">
            {locale === 'ar' ? 'العودة للرئيسية' : locale === 'en' ? 'Back to home' : 'Retour à l\'accueil'}
          </Link>
        </div>
      </div>
    );
  }

  const city = cityData[citySlug];
  const cityName = city.name[locale] || city.name.fr;

  const content = {
    fr: {
      badge: "Installation Caméras Surveillance",
      heroTitle: `Installation Caméras de Surveillance à ${cityName}`,
      heroSubtitle: `Service professionnel de vidéosurveillance #1 à ${cityName} - Installation, Configuration, Maintenance`,
      heroDescription: `Symloop installe vos caméras de surveillance à ${cityName} et dans toute la wilaya. Caméras HD/4K, vision nocturne, accès smartphone. Devis gratuit, intervention en ${city.interventionDelay}.`,

      whyTitle: `Pourquoi Choisir Symloop pour Vos Caméras à ${cityName} ?`,
      servicesTitle: `Nos Services Caméras à ${cityName}`,
      productsTitle: "Nos Caméras de Surveillance",
      areasTitle: `Zones Couvertes à ${cityName}`,
      pricingTitle: "Nos Formules Installation",
      faqTitle: "Questions Fréquentes",
      ctaTitle: "Demandez Votre Devis Gratuit",

      stats: {
        installations: "500+ installations",
        satisfaction: "98% satisfaction",
        intervention: city.interventionDelay,
        warranty: "2 ans garantie"
      },

      services: [
        { title: "Installation Résidentielle", desc: `Caméras pour maisons et villas à ${cityName}. Protection périmétrique complète.`, icon: "Home" },
        { title: "Installation Commerciale", desc: `Magasins, boutiques, restaurants à ${cityName}. Surveillance anti-vol.`, icon: "Store" },
        { title: "Installation Entreprise", desc: `Bureaux, entrepôts, usines à ${cityName}. Systèmes professionnels.`, icon: "Building" },
        { title: "Installation Industrielle", desc: `Sites industriels, zones sensibles à ${cityName}. Haute sécurité.`, icon: "Factory" }
      ],

      packages: [
        { name: "Pack Essentiel", cameras: "2 caméras", ideal: "Studio/Petit commerce", includes: ["2 Caméras dôme HD", "Enregistreur 4 canaux", "Installation complète", "App smartphone"] },
        { name: "Pack Maison", cameras: "4 caméras", ideal: "Maison/Appartement F4", includes: ["4 Caméras HD mixtes", "Enregistreur 8 canaux", "Installation + câblage", "App + Cloud 1 mois"], popular: true },
        { name: "Pack Villa", cameras: "8 caméras", ideal: "Villa/Grande maison", includes: ["8 Caméras 4K", "Enregistreur 16 canaux", "Installation pro", "Cloud 3 mois inclus"] },
        { name: "Pack Business", cameras: "Sur mesure", ideal: "Commerce/Entreprise", includes: ["Caméras selon besoins", "Enregistreur adapté", "Installation complète", "Contrat maintenance"] }
      ],

      faqs: [
        { q: `Combien coûte l'installation de caméras à ${cityName} ?`, a: `Les prix varient selon le nombre de caméras et la complexité. Comptez entre 25 000 DA pour 2 caméras basiques jusqu'à 150 000 DA+ pour un système complet villa. Devis gratuit et personnalisé.` },
        { q: `Livrez-vous et installez-vous partout à ${cityName} ?`, a: `Oui, nous couvrons ${cityName} et toute la wilaya : ${city.localAreas?.join(', ')}. Intervention en ${city.interventionDelay}.` },
        { q: "Puis-je voir mes caméras depuis mon téléphone ?", a: "Absolument ! Toutes nos installations incluent l'application Symloop Home gratuite. Visionnez en direct, recevez des alertes, parlez via l'interphone, depuis n'importe où dans le monde." },
        { q: "Que se passe-t-il si internet coupe ?", a: "Les caméras continuent d'enregistrer localement sur l'enregistreur ou carte SD. Dès le retour d'internet, l'accès distant est rétabli automatiquement." },
        { q: `Proposez-vous un service après-vente à ${cityName} ?`, a: `Oui, notre équipe technique est basée localement. Support 7j/7, intervention en ${city.interventionDelay} maximum en cas de problème. Garantie 2 ans sur tous les produits.` },
        { q: "Combien de temps dure l'installation ?", a: "Pour une maison standard (4-6 caméras) : une demi-journée. Pour une villa ou commerce : une journée complète. Nous vous donnons un créneau précis." }
      ]
    },
    en: {
      badge: "Surveillance Camera Installation",
      heroTitle: `Surveillance Camera Installation in ${cityName}`,
      heroSubtitle: `#1 Professional Video Surveillance Service in ${cityName} - Installation, Configuration, Maintenance`,
      heroDescription: `Symloop installs your surveillance cameras in ${cityName} and throughout the wilaya. HD/4K cameras, night vision, smartphone access. Free quote, intervention within ${city.interventionDelay}.`,

      whyTitle: `Why Choose Symloop for Your Cameras in ${cityName}?`,
      servicesTitle: `Our Camera Services in ${cityName}`,
      productsTitle: "Our Surveillance Cameras",
      areasTitle: `Areas Covered in ${cityName}`,
      pricingTitle: "Our Installation Packages",
      faqTitle: "Frequently Asked Questions",
      ctaTitle: "Request Your Free Quote",

      stats: {
        installations: "500+ installations",
        satisfaction: "98% satisfaction",
        intervention: city.interventionDelay,
        warranty: "2 years warranty"
      },

      services: [
        { title: "Residential Installation", desc: `Cameras for homes and villas in ${cityName}. Complete perimeter protection.`, icon: "Home" },
        { title: "Commercial Installation", desc: `Stores, shops, restaurants in ${cityName}. Anti-theft surveillance.`, icon: "Store" },
        { title: "Business Installation", desc: `Offices, warehouses, factories in ${cityName}. Professional systems.`, icon: "Building" },
        { title: "Industrial Installation", desc: `Industrial sites, sensitive areas in ${cityName}. High security.`, icon: "Factory" }
      ],

      packages: [
        { name: "Essential Pack", cameras: "2 cameras", ideal: "Studio/Small shop", includes: ["2 HD dome cameras", "4-channel recorder", "Complete installation", "Smartphone app"] },
        { name: "Home Pack", cameras: "4 cameras", ideal: "House/4-room apartment", includes: ["4 Mixed HD cameras", "8-channel recorder", "Installation + wiring", "App + 1 month cloud"], popular: true },
        { name: "Villa Pack", cameras: "8 cameras", ideal: "Villa/Large house", includes: ["8 4K cameras", "16-channel recorder", "Pro installation", "3 months cloud included"] },
        { name: "Business Pack", cameras: "Custom", ideal: "Shop/Company", includes: ["Cameras as needed", "Adapted recorder", "Complete installation", "Maintenance contract"] }
      ],

      faqs: [
        { q: `How much does camera installation cost in ${cityName}?`, a: `Prices vary by number of cameras and complexity. Expect 25,000 DA for 2 basic cameras up to 150,000 DA+ for a complete villa system. Free personalized quote.` },
        { q: `Do you deliver and install everywhere in ${cityName}?`, a: `Yes, we cover ${cityName} and the entire wilaya: ${city.localAreas?.join(', ')}. Intervention within ${city.interventionDelay}.` },
        { q: "Can I view my cameras from my phone?", a: "Absolutely! All our installations include the free Symloop Home app. View live, receive alerts, talk via intercom, from anywhere in the world." },
        { q: "What happens if internet goes down?", a: "Cameras continue recording locally on the recorder or SD card. As soon as internet returns, remote access is automatically restored." },
        { q: `Do you offer after-sales service in ${cityName}?`, a: `Yes, our technical team is locally based. 7-day support, intervention within ${city.interventionDelay} maximum if there's a problem. 2-year warranty on all products.` },
        { q: "How long does installation take?", a: "For a standard home (4-6 cameras): half a day. For a villa or shop: a full day. We give you a specific time slot." }
      ]
    },
    ar: {
      badge: "تركيب كاميرات المراقبة",
      heroTitle: `تركيب كاميرات مراقبة في ${cityName}`,
      heroSubtitle: `خدمة المراقبة بالفيديو الاحترافية رقم 1 في ${cityName} - تركيب، إعداد، صيانة`,
      heroDescription: `سيملوب تركب كاميرات المراقبة في ${cityName} وفي كل الولاية. كاميرات HD/4K، رؤية ليلية، وصول من الهاتف. عرض سعر مجاني، تدخل في ${city.interventionDelay}.`,

      whyTitle: `لماذا تختار سيملوب لكاميراتك في ${cityName}؟`,
      servicesTitle: `خدمات الكاميرات في ${cityName}`,
      productsTitle: "كاميرات المراقبة لدينا",
      areasTitle: `المناطق المغطاة في ${cityName}`,
      pricingTitle: "باقات التركيب",
      faqTitle: "الأسئلة الشائعة",
      ctaTitle: "اطلب عرض سعر مجاني",

      stats: {
        installations: "+500 تركيب",
        satisfaction: "98% رضا",
        intervention: city.interventionDelay,
        warranty: "ضمان سنتين"
      },

      services: [
        { title: "تركيب سكني", desc: `كاميرات للمنازل والفيلات في ${cityName}. حماية محيطية كاملة.`, icon: "Home" },
        { title: "تركيب تجاري", desc: `محلات، متاجر، مطاعم في ${cityName}. مراقبة ضد السرقة.`, icon: "Store" },
        { title: "تركيب للشركات", desc: `مكاتب، مستودعات، مصانع في ${cityName}. أنظمة احترافية.`, icon: "Building" },
        { title: "تركيب صناعي", desc: `مواقع صناعية، مناطق حساسة في ${cityName}. أمان عالي.`, icon: "Factory" }
      ],

      packages: [
        { name: "الباقة الأساسية", cameras: "2 كاميرات", ideal: "استوديو/محل صغير", includes: ["2 كاميرا قبة HD", "مسجل 4 قنوات", "تركيب كامل", "تطبيق هاتف"] },
        { name: "باقة المنزل", cameras: "4 كاميرات", ideal: "منزل/شقة F4", includes: ["4 كاميرات HD متنوعة", "مسجل 8 قنوات", "تركيب + تمديد", "تطبيق + سحابة شهر"], popular: true },
        { name: "باقة الفيلا", cameras: "8 كاميرات", ideal: "فيلا/منزل كبير", includes: ["8 كاميرات 4K", "مسجل 16 قناة", "تركيب احترافي", "سحابة 3 أشهر"] },
        { name: "باقة الأعمال", cameras: "حسب الطلب", ideal: "محل/شركة", includes: ["كاميرات حسب الحاجة", "مسجل مناسب", "تركيب كامل", "عقد صيانة"] }
      ],

      faqs: [
        { q: `كم تكلفة تركيب الكاميرات في ${cityName}؟`, a: `الأسعار تختلف حسب عدد الكاميرات والتعقيد. توقع من 25,000 دج لكاميرتين أساسيتين إلى 150,000 دج+ لنظام فيلا كامل. عرض سعر مجاني ومخصص.` },
        { q: `هل تقومون بالتوصيل والتركيب في كل ${cityName}؟`, a: `نعم، نغطي ${cityName} وكل الولاية: ${city.localAreas?.join('، ')}. تدخل في ${city.interventionDelay}.` },
        { q: "هل يمكنني مشاهدة كاميراتي من هاتفي؟", a: "بالتأكيد! كل تركيباتنا تشمل تطبيق Symloop Home المجاني. شاهد مباشرة، استقبل تنبيهات، تحدث عبر الانتركم، من أي مكان في العالم." },
        { q: "ماذا يحدث إذا انقطع الإنترنت؟", a: "الكاميرات تستمر في التسجيل محلياً على المسجل أو بطاقة SD. فور عودة الإنترنت، يتم استعادة الوصول عن بعد تلقائياً." },
        { q: `هل تقدمون خدمة ما بعد البيع في ${cityName}؟`, a: `نعم، فريقنا التقني موجود محلياً. دعم 7 أيام/7، تدخل في ${city.interventionDelay} كحد أقصى في حالة مشكلة. ضمان سنتين على كل المنتجات.` },
        { q: "كم يستغرق التركيب؟", a: "لمنزل عادي (4-6 كاميرات): نصف يوم. لفيلا أو محل: يوم كامل. نعطيك موعداً محدداً." }
      ]
    }
  };

  const t = content[locale];

  // SEO data
  const seoTitle = {
    fr: `Installation Caméras Surveillance ${cityName} | Symloop 2026`,
    en: `Surveillance Camera Installation ${cityName} | Symloop 2026`,
    ar: `تركيب كاميرات مراقبة ${cityName} | Symloop 2026`
  };

  const seoDescription = t.heroDescription;

  const seoKeywords = {
    fr: `installation caméra ${cityName}, caméra surveillance ${cityName}, vidéosurveillance ${cityName}, CCTV ${cityName}, caméra sécurité ${cityName}, installer caméra ${cityName}, prix caméra surveillance ${cityName}, technicien caméra ${cityName}, installation vidéosurveillance ${cityName}, caméra HD ${cityName}, caméra 4K ${cityName}, système surveillance ${cityName}, caméra wifi ${cityName}, caméra IP ${cityName}, enregistreur DVR ${cityName}, NVR ${cityName}, caméra extérieure ${cityName}, caméra intérieure ${cityName}, vision nocturne ${cityName}, détection mouvement ${cityName}, accès smartphone ${cityName}, Symloop ${cityName}, meilleur installateur caméra ${cityName}, devis caméra ${cityName} 2025 2026`,
    en: `camera installation ${cityName}, surveillance camera ${cityName}, CCTV ${cityName}, security camera ${cityName}, install camera ${cityName}, camera surveillance price ${cityName}, camera technician ${cityName}, video surveillance installation ${cityName}, HD camera ${cityName}, 4K camera ${cityName}, surveillance system ${cityName}, wifi camera ${cityName}, IP camera ${cityName}, DVR recorder ${cityName}, NVR ${cityName}, outdoor camera ${cityName}, indoor camera ${cityName}, night vision ${cityName}, motion detection ${cityName}, smartphone access ${cityName}, Symloop ${cityName}, best camera installer ${cityName}, camera quote ${cityName} 2025 2026`,
    ar: `تركيب كاميرا ${cityName}، كاميرا مراقبة ${cityName}، CCTV ${cityName}، كاميرا أمان ${cityName}، تركيب كاميرا ${cityName}، سعر كاميرا مراقبة ${cityName}، فني كاميرات ${cityName}، تركيب مراقبة بالفيديو ${cityName}، كاميرا HD ${cityName}، كاميرا 4K ${cityName}، نظام مراقبة ${cityName}، كاميرا واي فاي ${cityName}، كاميرا IP ${cityName}، مسجل DVR ${cityName}، NVR ${cityName}، كاميرا خارجية ${cityName}، كاميرا داخلية ${cityName}، رؤية ليلية ${cityName}، كشف حركة ${cityName}، وصول من الهاتف ${cityName}، Symloop ${cityName}، أفضل مركب كاميرات ${cityName}، عرض سعر كاميرا ${cityName} 2025 2026`
  };

  // Structured data schemas
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://symloop.com/services/cameras-surveillance/${citySlug}#business`,
    "name": `Symloop - Installation Caméras ${cityName}`,
    "description": seoDescription,
    "url": `https://symloop.com/services/cameras-surveillance/${citySlug}`,
    "telephone": "+213549575512",
    "email": "contact@symloop.com",
    "image": "https://symloop.com/images/camera-installation-algeria.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressRegion": cityName,
      "addressCountry": "DZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.coordinates.lat,
      "longitude": city.coordinates.lng
    },
    "areaServed": [
      { "@type": "City", "name": cityName },
      ...(city.localAreas || []).map(area => ({ "@type": "Place", "name": area }))
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": city.coordinates.lat,
        "longitude": city.coordinates.lng
      },
      "geoRadius": "50000"
    },
    "priceRange": "$$",
    "currenciesAccepted": "DZD",
    "paymentAccepted": "Cash, CIB, Edahabia, Bank Transfer",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Services Caméras Surveillance ${cityName}`,
      "itemListElement": t.services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.desc
        }
      }))
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Installation Caméras Surveillance ${cityName}`,
    "description": seoDescription,
    "provider": {
      "@type": "Organization",
      "name": "Symloop Technology",
      "url": "https://symloop.com"
    },
    "areaServed": {
      "@type": "City",
      "name": cityName,
      "containedInPlace": {
        "@type": "Country",
        "name": "Algeria"
      }
    },
    "serviceType": "Surveillance Camera Installation",
    "category": "Security Systems"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://symloop.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Caméras Surveillance", "item": "https://symloop.com/services/cameras-surveillance" },
      { "@type": "ListItem", "position": 4, "name": cityName, "item": `https://symloop.com/services/cameras-surveillance/${citySlug}` }
    ]
  };

  const IconComponent = ({ name }) => {
    const icons = { Home, Building, Store, Factory, Camera, Shield, Wifi, Video, Eye, Lock };
    const Icon = icons[name] || Camera;
    return <Icon className="w-6 h-6" />;
  };

  return (
    <>
      <Head>
        <title>{seoTitle[locale]}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords[locale]} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={`https://symloop.com/services/cameras-surveillance/${citySlug}`} />

        {/* Hreflang */}
        <link rel="alternate" hrefLang="fr" href={`https://symloop.com/fr/services/cameras-surveillance/${citySlug}`} />
        <link rel="alternate" hrefLang="en" href={`https://symloop.com/en/services/cameras-surveillance/${citySlug}`} />
        <link rel="alternate" hrefLang="ar" href={`https://symloop.com/ar/services/cameras-surveillance/${citySlug}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://symloop.com/fr/services/cameras-surveillance/${citySlug}`} />

        {/* Open Graph */}
        <meta property="og:title" content={seoTitle[locale]} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://symloop.com/services/cameras-surveillance/${citySlug}`} />
        <meta property="og:image" content="https://symloop.com/images/camera-installation-algeria.jpg" />
        <meta property="og:locale" content={locale === 'ar' ? 'ar_DZ' : locale === 'en' ? 'en_US' : 'fr_DZ'} />

        {/* Geo tags */}
        <meta name="geo.region" content="DZ" />
        <meta name="geo.placename" content={cityName} />
        <meta name="geo.position" content={`${city.coordinates.lat};${city.coordinates.lng}`} />
        <meta name="ICBM" content={`${city.coordinates.lat}, ${city.coordinates.lng}`} />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <div className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-900/30 via-black to-purple-900/30">
          <div className="absolute inset-0 bg-[url('/images/camera-pattern.svg')] opacity-5" />
          <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 text-sm">
                <Camera className="w-4 h-4" />
                <span>{t.badge}</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t.heroTitle}
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t.heroSubtitle}
              </p>

              <p className="text-lg text-gray-400 max-w-4xl mx-auto">
                {t.heroDescription}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-blue-400">{t.stats.installations}</div>
                  <div className="text-sm text-gray-400">{locale === 'ar' ? 'في الجزائر' : locale === 'en' ? 'in Algeria' : 'en Algérie'}</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-green-400">{t.stats.satisfaction}</div>
                  <div className="text-sm text-gray-400">{locale === 'ar' ? 'عملاء راضون' : locale === 'en' ? 'happy clients' : 'clients satisfaits'}</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-purple-400">{t.stats.intervention}</div>
                  <div className="text-sm text-gray-400">{locale === 'ar' ? 'وقت التدخل' : locale === 'en' ? 'intervention time' : 'intervention'}</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-yellow-400">{t.stats.warranty}</div>
                  <div className="text-sm text-gray-400">{locale === 'ar' ? 'على المنتجات' : locale === 'en' ? 'on products' : 'sur produits'}</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <a href="tel:+213549575512" className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  0549-57-55-12
                </a>
                <a href={`https://wa.me/213549575512?text=Bonjour, je souhaite un devis pour installation caméras à ${cityName}`} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20 bg-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">{t.servicesTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.services.map((service, i) => (
                <div key={i} className="p-6 bg-black border border-white/10 rounded-xl hover:border-blue-400 transition-all group">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-all">
                    <IconComponent name={service.icon} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">{t.productsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cameraProducts.map((product, i) => (
                <div key={i} className="p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl">
                  <Camera className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-lg font-bold mb-2">{product.name[locale]}</h3>
                  <ul className="space-y-1 mb-4">
                    {product.features[locale].map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm text-blue-400 font-medium">{product.ideal[locale]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Packages Section */}
        <div className="py-20 bg-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">{t.pricingTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.packages.map((pkg, i) => (
                <div key={i} className={`p-6 rounded-xl border ${pkg.popular ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-400' : 'bg-black border-white/10'} relative`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                      {locale === 'ar' ? 'الأكثر طلباً' : locale === 'en' ? 'Most Popular' : 'Le plus populaire'}
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-2xl font-bold text-blue-400 mb-2">{pkg.cameras}</div>
                  <div className="text-sm text-gray-400 mb-4">{pkg.ideal}</div>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Areas Covered */}
        {city.localAreas && (
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-8">{t.areasTitle}</h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {city.localAreas.map((area, i) => (
                  <div key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="py-20 bg-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">{t.faqTitle}</h2>
            <div className="space-y-4">
              {t.faqs.map((faq, i) => (
                <div key={i} className="p-6 bg-black border border-white/10 rounded-xl">
                  <h3 className="text-lg font-bold text-blue-400 mb-2">{faq.q}</h3>
                  <p className="text-gray-300">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Blogs */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              {locale === 'ar' ? 'مقالات ذات صلة' : locale === 'en' ? 'Related Articles' : 'Articles Connexes'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/blog/securite-maison-intelligente-cameras-alarmes-algerie-2026" className="group">
                <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-400 transition-all">
                  <Camera className="w-10 h-10 text-blue-400 mb-4" />
                  <h3 className="font-bold mb-2 group-hover:text-blue-400 transition-all">
                    {locale === 'ar' ? 'كاميرات مراقبة ذكية 2026' : locale === 'en' ? 'Smart Security Cameras 2026' : 'Caméras Sécurité Intelligentes 2026'}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {locale === 'ar' ? 'دليل شامل للكاميرات الذكية' : locale === 'en' ? 'Complete guide to smart cameras' : 'Guide complet des caméras intelligentes'}
                  </p>
                </div>
              </Link>
              <Link href="/blog/installation-cameras-surveillance-professionnelle-algerie-2026" className="group">
                <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-400 transition-all">
                  <Video className="w-10 h-10 text-green-400 mb-4" />
                  <h3 className="font-bold mb-2 group-hover:text-green-400 transition-all">
                    {locale === 'ar' ? 'تركيب احترافي للكاميرات' : locale === 'en' ? 'Professional Camera Installation' : 'Installation Professionnelle Caméras'}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {locale === 'ar' ? 'خدمة التركيب من الألف إلى الياء' : locale === 'en' ? 'A to Z installation service' : 'Service installation de A à Z'}
                  </p>
                </div>
              </Link>
              <Link href="/blog/securite-maison-installation-complete-alarme-algerie-2026" className="group">
                <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-400 transition-all">
                  <Shield className="w-10 h-10 text-purple-400 mb-4" />
                  <h3 className="font-bold mb-2 group-hover:text-purple-400 transition-all">
                    {locale === 'ar' ? 'نظام أمان كامل' : locale === 'en' ? 'Complete Security System' : 'Système Sécurité Complet'}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {locale === 'ar' ? 'كاميرات + إنذار + أقفال ذكية' : locale === 'en' ? 'Cameras + alarm + smart locks' : 'Caméras + alarme + serrures connectées'}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">{t.ctaTitle}</h2>
            <p className="text-xl mb-8">
              {locale === 'ar'
                ? `احصل على عرض سعر مجاني لتركيب كاميراتك في ${cityName}`
                : locale === 'en'
                ? `Get a free quote for your camera installation in ${cityName}`
                : `Obtenez un devis gratuit pour votre installation caméras à ${cityName}`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+213549575512" className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                0549-57-55-12
              </a>
              <a href={`mailto:contact@symloop.com?subject=Devis Caméras ${cityName}`} className="px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition-all flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                contact@symloop.com
              </a>
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

  return { paths, fallback: false };
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
