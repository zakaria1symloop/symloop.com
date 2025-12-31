import { useRouter } from "next/router";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from "next/head";
import Link from "next/link";
import {
  Home, Lightbulb, Thermometer, Lock, Smartphone, Wifi, Shield,
  CheckCircle2, Star, Phone, Mail, MapPin, Clock, Zap,
  Sun, Moon, Volume2, Eye, Radio, Speaker, Tv, Power
} from "lucide-react";

// All Algerian cities with smart home service data
const cityData = {
  "alger": {
    name: { fr: "Alger", en: "Algiers", ar: "الجزائر العاصمة" },
    population: "3.5M",
    coordinates: { lat: 36.7538, lng: 3.0588 },
    priority: 1,
    interventionDelay: "24h",
    localAreas: ["Bab El Oued", "Hussein Dey", "Kouba", "El Harrach", "Bir Mourad Raïs", "Cheraga", "Draria", "Bab Ezzouar", "Rouiba", "Dar El Beida", "Hydra", "El Biar", "Ben Aknoun"]
  },
  "oran": {
    name: { fr: "Oran", en: "Oran", ar: "وهران" },
    population: "1.5M",
    coordinates: { lat: 35.6987, lng: -0.6349 },
    priority: 1,
    interventionDelay: "48h",
    localAreas: ["Es Senia", "Bir El Djir", "Arzew", "Ain Turk", "Mers El Kebir", "Gdyel", "Bethioua", "Canastel"]
  },
  "constantine": {
    name: { fr: "Constantine", en: "Constantine", ar: "قسنطينة" },
    population: "950K",
    coordinates: { lat: 36.3650, lng: 6.6147 },
    priority: 1,
    interventionDelay: "48h",
    localAreas: ["El Khroub", "Ain Smara", "Didouche Mourad", "Hamma Bouziane", "Zighoud Youcef", "Ali Mendjeli"]
  },
  "setif": {
    name: { fr: "Sétif", en: "Setif", ar: "سطيف" },
    population: "450K",
    coordinates: { lat: 36.1919, lng: 5.4138 },
    priority: 1,
    interventionDelay: "24h",
    headquarters: true,
    localAreas: ["El Eulma", "Ain Oulmene", "Ain Arnat", "Bougaa", "Guellal", "Ain Azel"]
  },
  "annaba": {
    name: { fr: "Annaba", en: "Annaba", ar: "عنابة" },
    population: "640K",
    coordinates: { lat: 36.9000, lng: 7.7667 },
    priority: 1,
    interventionDelay: "48h",
    localAreas: ["El Bouni", "Sidi Amar", "El Hadjar", "Berrahal", "Ain Berda", "Seraidi"]
  },
  "blida": {
    name: { fr: "Blida", en: "Blida", ar: "البليدة" },
    population: "420K",
    coordinates: { lat: 36.4703, lng: 2.8278 },
    priority: 1,
    interventionDelay: "24h",
    localAreas: ["Boufarik", "Mouzaia", "Beni Mered", "Oued El Alleug", "Chréa", "Ouled Yaich"]
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
    localAreas: ["Tolga", "Ouled Djellal", "Sidi Okba", "El Kantara"]
  },
  "skikda": {
    name: { fr: "Skikda", en: "Skikda", ar: "سكيكدة" },
    population: "280K",
    coordinates: { lat: 36.8667, lng: 6.9000 },
    priority: 2,
    interventionDelay: "72h",
    localAreas: ["Azzaba", "Collo", "El Harrouch", "Tamalous"]
  },
  "sidi-bel-abbes": {
    name: { fr: "Sidi Bel Abbès", en: "Sidi Bel Abbes", ar: "سيدي بلعباس" },
    population: "290K",
    coordinates: { lat: 35.1903, lng: -0.6308 },
    priority: 2,
    interventionDelay: "72h",
    localAreas: ["Telagh", "Ben Badis", "Sfisef", "Ain El Berd"]
  },
  "mostaganem": {
    name: { fr: "Mostaganem", en: "Mostaganem", ar: "مستغانم" },
    population: "250K",
    coordinates: { lat: 35.9333, lng: 0.0833 },
    priority: 2,
    interventionDelay: "72h",
    localAreas: ["Ain Tedles", "Hassi Mameche", "Mazagran"]
  },
  "msila": {
    name: { fr: "M'sila", en: "M'sila", ar: "المسيلة" },
    population: "320K",
    coordinates: { lat: 35.7000, lng: 4.5500 },
    priority: 2,
    interventionDelay: "72h",
    localAreas: ["Bou Saada", "Ain El Hadjel", "Sidi Aissa"]
  },
  "chlef": {
    name: { fr: "Chlef", en: "Chlef", ar: "الشلف" },
    population: "280K",
    coordinates: { lat: 36.1650, lng: 1.3317 },
    priority: 2,
    interventionDelay: "72h",
    localAreas: ["Tenes", "Ouled Fares", "Chettia", "Boukadir"]
  },
  "bouira": {
    name: { fr: "Bouira", en: "Bouira", ar: "البويرة" },
    population: "220K",
    coordinates: { lat: 36.3833, lng: 3.9000 },
    priority: 2,
    interventionDelay: "48h",
    localAreas: ["Lakhdaria", "Sour El Ghozlane", "M'Chedallah"]
  },
  "medea": {
    name: { fr: "Médéa", en: "Medea", ar: "المدية" },
    population: "200K",
    coordinates: { lat: 36.2647, lng: 2.7540 },
    priority: 2,
    interventionDelay: "48h",
    localAreas: ["Berrouaghia", "Ksar El Boukhari", "Tablat"]
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
    localAreas: ["Berriane", "Metlili", "Guerrara", "El Meniaa"]
  },
  "ouargla": {
    name: { fr: "Ouargla", en: "Ouargla", ar: "ورقلة" },
    population: "220K",
    coordinates: { lat: 31.9500, lng: 5.3167 },
    priority: 3,
    interventionDelay: "5 jours",
    localAreas: ["Hassi Messaoud", "Touggourt", "Temacine"]
  },
  "laghouat": {
    name: { fr: "Laghouat", en: "Laghouat", ar: "الأغواط" },
    population: "170K",
    coordinates: { lat: 33.8000, lng: 2.8650 },
    priority: 3,
    interventionDelay: "5 jours",
    localAreas: ["Aflou", "Ksar El Hirane", "Hassi R'Mel"]
  }
};

// Smart home products
const smartHomeProducts = [
  {
    name: { fr: "Hub Symloop Central", en: "Symloop Central Hub", ar: "هب سيملوب المركزي" },
    features: {
      fr: ["Cerveau de la maison", "Compatible tous appareils", "Batterie secours 8h", "WiFi + Zigbee + Bluetooth"],
      en: ["Home brain", "All devices compatible", "8h backup battery", "WiFi + Zigbee + Bluetooth"],
      ar: ["عقل المنزل", "متوافق مع جميع الأجهزة", "بطارية احتياطية 8 ساعات", "WiFi + Zigbee + Bluetooth"]
    },
    icon: "Radio"
  },
  {
    name: { fr: "Ampoules LED Connectées", en: "Smart LED Bulbs", ar: "لمبات LED ذكية" },
    features: {
      fr: ["16 millions couleurs", "Programmables", "25 000h durée vie", "85% économie énergie"],
      en: ["16 million colors", "Programmable", "25,000h lifespan", "85% energy savings"],
      ar: ["16 مليون لون", "قابلة للبرمجة", "عمر 25,000 ساعة", "توفير 85% طاقة"]
    },
    icon: "Lightbulb"
  },
  {
    name: { fr: "Thermostat Intelligent TH-200", en: "Smart Thermostat TH-200", ar: "ثرموستات ذكي TH-200" },
    features: {
      fr: ["Contrôle climatisation", "Apprentissage automatique", "Économie 30%", "Géolocalisation"],
      en: ["AC control", "Auto learning", "30% savings", "Geolocation"],
      ar: ["تحكم في المكيف", "تعلم تلقائي", "توفير 30%", "تحديد موقع جغرافي"]
    },
    icon: "Thermometer"
  },
  {
    name: { fr: "Serrure Connectée LOCK-S1", en: "Smart Lock LOCK-S1", ar: "قفل ذكي LOCK-S1" },
    features: {
      fr: ["Code + Empreinte + Badge", "Historique accès", "Déblocage à distance", "Batterie 1 an"],
      en: ["Code + Fingerprint + Badge", "Access history", "Remote unlock", "1 year battery"],
      ar: ["كود + بصمة + بادج", "سجل الوصول", "فتح عن بعد", "بطارية سنة"]
    },
    icon: "Lock"
  }
];

export default function SmartHomeCityPage() {
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
          <Link href="/" className="text-emerald-400 hover:underline">
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
      badge: "Smart Home - Maison Intelligente",
      heroTitle: `Maison Intelligente à ${cityName}`,
      heroSubtitle: `Solutions domotique #1 à ${cityName} - Installation Smart Home Algérienne`,
      heroDescription: `Transformez votre maison en maison intelligente à ${cityName}. Éclairage connecté, thermostat intelligent, sécurité, tout contrôlé depuis votre smartphone. Produits Symloop fabriqués en Algérie.`,

      whyTitle: `Pourquoi la Maison Intelligente à ${cityName} ?`,
      servicesTitle: `Nos Solutions Smart Home à ${cityName}`,
      productsTitle: "Nos Produits Domotiques",
      benefitsTitle: "Avantages de la Maison Intelligente",
      pricingTitle: "Nos Packs Domotique",
      faqTitle: "Questions Fréquentes",
      ctaTitle: "Rendez Votre Maison Intelligente",

      stats: {
        savings: "30-50% économies",
        clients: "1000+ maisons",
        local: "100% algérien",
        support: "Support 7j/7"
      },

      benefits: [
        { title: "Économies d'Énergie", desc: "Réduisez vos factures d'électricité de 30-50% avec la gestion automatique.", icon: "Zap" },
        { title: "Sécurité Renforcée", desc: "Alertes en temps réel, caméras, serrures connectées. Surveillez de partout.", icon: "Shield" },
        { title: "Confort Optimal", desc: "La maison s'adapte à vos habitudes. Climatisation, éclairage, automatiques.", icon: "Sun" },
        { title: "Contrôle à Distance", desc: "Une seule application pour tout contrôler, même à l'étranger.", icon: "Smartphone" }
      ],

      services: [
        { title: "Éclairage Intelligent", desc: `Ampoules LED connectées, scénarios d'ambiance, économies d'énergie à ${cityName}.`, icon: "Lightbulb" },
        { title: "Climatisation Connectée", desc: `Thermostat intelligent pour climatiseurs split. 30% économies garanties à ${cityName}.`, icon: "Thermometer" },
        { title: "Sécurité Smart", desc: `Caméras, alarmes, serrures connectées. Votre maison à ${cityName} sous contrôle.`, icon: "Shield" },
        { title: "Automatisation Complète", desc: `Scénarios automatiques : réveil, départ, retour, nuit. Vie simplifiée à ${cityName}.`, icon: "Radio" }
      ],

      packages: [
        { name: "Pack Découverte", ideal: "Studio/Chambre", includes: ["1 Hub Mini", "4 Ampoules LED", "2 Prises connectées", "App Symloop"] },
        { name: "Pack Famille", ideal: "Appartement F3-F4", includes: ["1 Hub Pro", "8 Ampoules LED", "1 Thermostat TH-200", "4 Prises connectées", "2 Détecteurs mouvement"], popular: true },
        { name: "Pack Villa", ideal: "Villa/Grande maison", includes: ["1 Hub Pro+", "15 Ampoules LED", "2 Thermostats", "1 Serrure LOCK-S1", "6 Prises", "Interrupteurs muraux"] },
        { name: "Pack Prestige", ideal: "Villa luxe", includes: ["Hub Pro+ 4G", "Éclairage complet", "Climatisation zones", "Sécurité totale", "Home cinéma", "Installation VIP"] }
      ],

      faqs: [
        { q: `Peut-on installer la domotique dans une ancienne maison à ${cityName} ?`, a: `Oui ! Nos produits sont sans fil (WiFi/Zigbee). Pas besoin de travaux. Les ampoules se vissent, les prises se branchent. Installation possible dans toute maison à ${cityName}.` },
        { q: "Est-ce que ça fonctionne sans internet ?", a: "Oui, le Hub Symloop garde les automatisations locales même sans internet. L'accès distant nécessite une connexion, mais vos scénarios locaux fonctionnent toujours." },
        { q: "Combien puis-je vraiment économiser ?", a: "Nos clients économisent en moyenne 30-50% sur leur facture d'électricité. Le thermostat intelligent seul peut économiser 25-35% sur la climatisation en été." },
        { q: `Livrez-vous à ${cityName} et environs ?`, a: `Oui, nous livrons partout à ${cityName} et dans toute la wilaya : ${city.localAreas?.join(', ')}. Livraison gratuite. Installation disponible.` },
        { q: "Les produits sont vraiment fabriqués en Algérie ?", a: "Oui, 100% conçus et assemblés en Algérie. Notre usine est à Blida. C'est pourquoi nous offrons 2 ans de garantie avec SAV local rapide." },
        { q: "Puis-je ajouter des équipements plus tard ?", a: "Absolument ! Notre système est modulaire. Commencez avec le Pack Découverte, ajoutez des appareils au fil du temps. Tout reste compatible." }
      ]
    },
    en: {
      badge: "Smart Home",
      heroTitle: `Smart Home in ${cityName}`,
      heroSubtitle: `#1 Home Automation Solutions in ${cityName} - Algerian Smart Home Installation`,
      heroDescription: `Transform your home into a smart home in ${cityName}. Connected lighting, smart thermostat, security, all controlled from your smartphone. Symloop products made in Algeria.`,

      whyTitle: `Why Smart Home in ${cityName}?`,
      servicesTitle: `Our Smart Home Solutions in ${cityName}`,
      productsTitle: "Our Home Automation Products",
      benefitsTitle: "Smart Home Benefits",
      pricingTitle: "Our Home Automation Packs",
      faqTitle: "Frequently Asked Questions",
      ctaTitle: "Make Your Home Smart",

      stats: {
        savings: "30-50% savings",
        clients: "1000+ homes",
        local: "100% Algerian",
        support: "7-day support"
      },

      benefits: [
        { title: "Energy Savings", desc: "Reduce your electricity bills by 30-50% with automatic management.", icon: "Zap" },
        { title: "Enhanced Security", desc: "Real-time alerts, cameras, smart locks. Monitor from anywhere.", icon: "Shield" },
        { title: "Optimal Comfort", desc: "The home adapts to your habits. AC, lighting, automatic.", icon: "Sun" },
        { title: "Remote Control", desc: "One app to control everything, even abroad.", icon: "Smartphone" }
      ],

      services: [
        { title: "Smart Lighting", desc: `Connected LED bulbs, ambiance scenarios, energy savings in ${cityName}.`, icon: "Lightbulb" },
        { title: "Connected AC", desc: `Smart thermostat for split AC. 30% savings guaranteed in ${cityName}.`, icon: "Thermometer" },
        { title: "Smart Security", desc: `Cameras, alarms, smart locks. Your home in ${cityName} under control.`, icon: "Shield" },
        { title: "Complete Automation", desc: `Automatic scenarios: wake up, leave, return, night. Simplified life in ${cityName}.`, icon: "Radio" }
      ],

      packages: [
        { name: "Discovery Pack", ideal: "Studio/Bedroom", includes: ["1 Mini Hub", "4 LED Bulbs", "2 Smart plugs", "Symloop App"] },
        { name: "Family Pack", ideal: "3-4 room apartment", includes: ["1 Pro Hub", "8 LED Bulbs", "1 TH-200 Thermostat", "4 Smart plugs", "2 Motion detectors"], popular: true },
        { name: "Villa Pack", ideal: "Villa/Large house", includes: ["1 Pro+ Hub", "15 LED Bulbs", "2 Thermostats", "1 LOCK-S1 Lock", "6 Plugs", "Wall switches"] },
        { name: "Prestige Pack", ideal: "Luxury villa", includes: ["Pro+ 4G Hub", "Complete lighting", "Zone AC", "Total security", "Home cinema", "VIP installation"] }
      ],

      faqs: [
        { q: `Can home automation be installed in an old house in ${cityName}?`, a: `Yes! Our products are wireless (WiFi/Zigbee). No renovation needed. Bulbs screw in, plugs plug in. Installation possible in any house in ${cityName}.` },
        { q: "Does it work without internet?", a: "Yes, the Symloop Hub keeps local automations even without internet. Remote access requires a connection, but your local scenarios always work." },
        { q: "How much can I really save?", a: "Our customers save on average 30-50% on their electricity bill. The smart thermostat alone can save 25-35% on AC in summer." },
        { q: `Do you deliver to ${cityName} and surroundings?`, a: `Yes, we deliver everywhere in ${cityName} and throughout the wilaya: ${city.localAreas?.join(', ')}. Free delivery. Installation available.` },
        { q: "Are the products really made in Algeria?", a: "Yes, 100% designed and assembled in Algeria. Our factory is in Blida. That's why we offer 2 years warranty with fast local after-sales service." },
        { q: "Can I add equipment later?", a: "Absolutely! Our system is modular. Start with the Discovery Pack, add devices over time. Everything stays compatible." }
      ]
    },
    ar: {
      badge: "المنزل الذكي",
      heroTitle: `منزل ذكي في ${cityName}`,
      heroSubtitle: `حلول الأتمتة المنزلية رقم 1 في ${cityName} - تركيب منزل ذكي جزائري`,
      heroDescription: `حوّل منزلك إلى منزل ذكي في ${cityName}. إضاءة متصلة، ثرموستات ذكي، أمان، كل شيء يتحكم به من هاتفك. منتجات سيملوب مصنوعة في الجزائر.`,

      whyTitle: `لماذا المنزل الذكي في ${cityName}؟`,
      servicesTitle: `حلول المنزل الذكي في ${cityName}`,
      productsTitle: "منتجات الأتمتة المنزلية",
      benefitsTitle: "فوائد المنزل الذكي",
      pricingTitle: "باقات الأتمتة المنزلية",
      faqTitle: "الأسئلة الشائعة",
      ctaTitle: "اجعل منزلك ذكياً",

      stats: {
        savings: "توفير 30-50%",
        clients: "+1000 منزل",
        local: "100% جزائري",
        support: "دعم 7 أيام"
      },

      benefits: [
        { title: "توفير الطاقة", desc: "خفض فواتير الكهرباء بنسبة 30-50% مع الإدارة التلقائية.", icon: "Zap" },
        { title: "أمان معزز", desc: "تنبيهات فورية، كاميرات، أقفال ذكية. راقب من أي مكان.", icon: "Shield" },
        { title: "راحة مثالية", desc: "المنزل يتكيف مع عاداتك. تكييف، إضاءة، تلقائية.", icon: "Sun" },
        { title: "تحكم عن بعد", desc: "تطبيق واحد للتحكم في كل شيء، حتى من الخارج.", icon: "Smartphone" }
      ],

      services: [
        { title: "إضاءة ذكية", desc: `لمبات LED متصلة، سيناريوهات أجواء، توفير طاقة في ${cityName}.`, icon: "Lightbulb" },
        { title: "تكييف متصل", desc: `ثرموستات ذكي لمكيفات سبليت. توفير 30% مضمون في ${cityName}.`, icon: "Thermometer" },
        { title: "أمان ذكي", desc: `كاميرات، إنذارات، أقفال ذكية. منزلك في ${cityName} تحت السيطرة.`, icon: "Shield" },
        { title: "أتمتة كاملة", desc: `سيناريوهات تلقائية: استيقاظ، مغادرة، عودة، ليل. حياة مبسطة في ${cityName}.`, icon: "Radio" }
      ],

      packages: [
        { name: "باقة الاكتشاف", ideal: "استوديو/غرفة", includes: ["1 هب ميني", "4 لمبات LED", "2 مقابس ذكية", "تطبيق Symloop"] },
        { name: "باقة العائلة", ideal: "شقة F3-F4", includes: ["1 هب برو", "8 لمبات LED", "1 ثرموستات TH-200", "4 مقابس ذكية", "2 كاشف حركة"], popular: true },
        { name: "باقة الفيلا", ideal: "فيلا/منزل كبير", includes: ["1 هب برو+", "15 لمبة LED", "2 ثرموستات", "1 قفل LOCK-S1", "6 مقابس", "مفاتيح حائط"] },
        { name: "باقة بريستيج", ideal: "فيلا فاخرة", includes: ["هب برو+ 4G", "إضاءة كاملة", "تكييف مناطق", "أمان شامل", "سينما منزلية", "تركيب VIP"] }
      ],

      faqs: [
        { q: `هل يمكن تركيب الأتمتة في منزل قديم في ${cityName}؟`, a: `نعم! منتجاتنا لاسلكية (WiFi/Zigbee). لا حاجة لأعمال تجديد. اللمبات تُربط، المقابس تُوصل. التركيب ممكن في أي منزل في ${cityName}.` },
        { q: "هل يعمل بدون إنترنت؟", a: "نعم، هب سيملوب يحافظ على الأتمتة المحلية حتى بدون إنترنت. الوصول عن بعد يتطلب اتصالاً، لكن سيناريوهاتك المحلية تعمل دائماً." },
        { q: "كم يمكنني التوفير فعلاً؟", a: "عملاؤنا يوفرون في المتوسط 30-50% على فاتورة الكهرباء. الثرموستات الذكي وحده يمكن أن يوفر 25-35% على التكييف في الصيف." },
        { q: `هل تقومون بالتوصيل إلى ${cityName} والمناطق المجاورة؟`, a: `نعم، نوصل إلى كل ${cityName} وفي كل الولاية: ${city.localAreas?.join('، ')}. توصيل مجاني. التركيب متاح.` },
        { q: "هل المنتجات مصنوعة فعلاً في الجزائر؟", a: "نعم، 100% مصممة ومجمعة في الجزائر. مصنعنا في البليدة. لهذا نقدم ضمان سنتين مع خدمة ما بعد البيع محلية سريعة." },
        { q: "هل يمكنني إضافة معدات لاحقاً؟", a: "بالتأكيد! نظامنا قابل للتوسيع. ابدأ بباقة الاكتشاف، أضف أجهزة مع الوقت. كل شيء يبقى متوافقاً." }
      ]
    }
  };

  const t = content[locale];

  // SEO data
  const seoTitle = {
    fr: `Maison Intelligente ${cityName} | Smart Home Algérie | Symloop 2026`,
    en: `Smart Home ${cityName} | Home Automation Algeria | Symloop 2026`,
    ar: `منزل ذكي ${cityName} | أتمتة المنزل الجزائر | Symloop 2026`
  };

  const seoDescription = t.heroDescription;

  const seoKeywords = {
    fr: `maison intelligente ${cityName}, smart home ${cityName}, domotique ${cityName}, éclairage connecté ${cityName}, thermostat intelligent ${cityName}, ampoule LED ${cityName}, prise connectée ${cityName}, automatisation maison ${cityName}, contrôle vocal ${cityName}, économie énergie ${cityName}, Symloop ${cityName}, installation domotique ${cityName}, maison connectée ${cityName}, home automation ${cityName}, objets connectés ${cityName}, IoT ${cityName}, serrure connectée ${cityName}, alarme intelligente ${cityName}, prix domotique ${cityName} 2025 2026`,
    en: `smart home ${cityName}, home automation ${cityName}, connected lighting ${cityName}, smart thermostat ${cityName}, LED bulb ${cityName}, smart plug ${cityName}, home automation ${cityName}, voice control ${cityName}, energy savings ${cityName}, Symloop ${cityName}, home automation installation ${cityName}, connected home ${cityName}, IoT ${cityName}, smart lock ${cityName}, smart alarm ${cityName}, home automation price ${cityName} 2025 2026`,
    ar: `منزل ذكي ${cityName}، أتمتة المنزل ${cityName}، إضاءة متصلة ${cityName}، ثرموستات ذكي ${cityName}، لمبة LED ${cityName}، مقبس ذكي ${cityName}، أتمتة المنزل ${cityName}، تحكم صوتي ${cityName}، توفير الطاقة ${cityName}، Symloop ${cityName}، تركيب أتمتة منزلية ${cityName}، منزل متصل ${cityName}، IoT ${cityName}، قفل ذكي ${cityName}، إنذار ذكي ${cityName}، سعر الأتمتة ${cityName} 2025 2026`
  };

  // Structured data schemas
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://symloop.com/services/smart-home/${citySlug}#business`,
    "name": `Symloop - Smart Home ${cityName}`,
    "description": seoDescription,
    "url": `https://symloop.com/services/smart-home/${citySlug}`,
    "telephone": "+213549575512",
    "email": "contact@symloop.com",
    "image": "https://symloop.com/images/smart-home-algeria.jpg",
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
    "priceRange": "$$",
    "currenciesAccepted": "DZD",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200",
      "bestRating": "5"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Smart Home Installation ${cityName}`,
    "description": seoDescription,
    "provider": {
      "@type": "Organization",
      "name": "Symloop Technology",
      "url": "https://symloop.com"
    },
    "areaServed": { "@type": "City", "name": cityName },
    "serviceType": "Smart Home Installation",
    "category": "Home Automation"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://symloop.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Smart Home", "item": "https://symloop.com/services/smart-home" },
      { "@type": "ListItem", "position": 4, "name": cityName, "item": `https://symloop.com/services/smart-home/${citySlug}` }
    ]
  };

  const IconComponent = ({ name }) => {
    const icons = { Home, Lightbulb, Thermometer, Lock, Smartphone, Wifi, Shield, Sun, Moon, Radio, Zap, Speaker };
    const Icon = icons[name] || Home;
    return <Icon className="w-6 h-6" />;
  };

  return (
    <>
      <Head>
        <title>{seoTitle[locale]}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords[locale]} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={`https://symloop.com/services/smart-home/${citySlug}`} />

        {/* Hreflang */}
        <link rel="alternate" hrefLang="fr" href={`https://symloop.com/fr/services/smart-home/${citySlug}`} />
        <link rel="alternate" hrefLang="en" href={`https://symloop.com/en/services/smart-home/${citySlug}`} />
        <link rel="alternate" hrefLang="ar" href={`https://symloop.com/ar/services/smart-home/${citySlug}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://symloop.com/fr/services/smart-home/${citySlug}`} />

        {/* Open Graph */}
        <meta property="og:title" content={seoTitle[locale]} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://symloop.com/services/smart-home/${citySlug}`} />
        <meta property="og:image" content="https://symloop.com/images/smart-home-algeria.jpg" />
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
        <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900/30 via-black to-teal-900/30">
          <div className="absolute inset-0 bg-[url('/images/smart-home-pattern.svg')] opacity-5" />
          <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-400 text-sm">
                <Home className="w-4 h-4" />
                <span>{t.badge}</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
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
                  <div className="text-2xl font-bold text-emerald-400">{t.stats.savings}</div>
                  <div className="text-sm text-gray-400">{locale === 'ar' ? 'فاتورة الكهرباء' : locale === 'en' ? 'on electricity' : 'sur électricité'}</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-teal-400">{t.stats.clients}</div>
                  <div className="text-sm text-gray-400">{locale === 'ar' ? 'مجهزة' : locale === 'en' ? 'equipped' : 'équipées'}</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-cyan-400">{t.stats.local}</div>
                  <div className="text-sm text-gray-400">{locale === 'ar' ? 'منتجات' : locale === 'en' ? 'products' : 'produits'}</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-green-400">{t.stats.support}</div>
                  <div className="text-sm text-gray-400">{locale === 'ar' ? 'دعم محلي' : locale === 'en' ? 'local support' : 'support local'}</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <a href="tel:+213549575512" className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  0549-57-55-12
                </a>
                <a href={`https://wa.me/213549575512?text=Bonjour, je souhaite des informations sur la domotique à ${cityName}`} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20 bg-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">{t.benefitsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.benefits.map((benefit, i) => (
                <div key={i} className="text-center p-6">
                  <div className="w-16 h-16 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                    <IconComponent name={benefit.icon} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">{t.servicesTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.services.map((service, i) => (
                <div key={i} className="p-6 bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-white/10 rounded-xl hover:border-emerald-400 transition-all group">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-all">
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
        <div className="py-20 bg-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">{t.productsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {smartHomeProducts.map((product, i) => (
                <div key={i} className="p-6 bg-black border border-white/10 rounded-xl">
                  <IconComponent name={product.icon} />
                  <h3 className="text-lg font-bold mb-2 mt-4">{product.name[locale]}</h3>
                  <ul className="space-y-1">
                    {product.features[locale].map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Packages Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">{t.pricingTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.packages.map((pkg, i) => (
                <div key={i} className={`p-6 rounded-xl border ${pkg.popular ? 'bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border-emerald-400' : 'bg-white/5 border-white/10'} relative`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                      {locale === 'ar' ? 'الأكثر طلباً' : locale === 'en' ? 'Most Popular' : 'Le plus populaire'}
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-sm text-gray-400 mb-4">{pkg.ideal}</div>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
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
          <div className="py-20 bg-white/5">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-8">
                {locale === 'ar' ? `مناطق التغطية في ${cityName}` : locale === 'en' ? `Areas Covered in ${cityName}` : `Zones Couvertes à ${cityName}`}
              </h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {city.localAreas.map((area, i) => (
                  <div key={i} className="px-4 py-2 bg-emerald-500/10 rounded-full text-sm border border-emerald-500/30">
                    <MapPin className="w-4 h-4 inline mr-1 text-emerald-400" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">{t.faqTitle}</h2>
            <div className="space-y-4">
              {t.faqs.map((faq, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <h3 className="text-lg font-bold text-emerald-400 mb-2">{faq.q}</h3>
                  <p className="text-gray-300">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Blogs */}
        <div className="py-20 bg-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              {locale === 'ar' ? 'مقالات ذات صلة' : locale === 'en' ? 'Related Articles' : 'Articles Connexes'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/blog/maison-intelligente-smart-home-algerie-2026" className="group">
                <div className="p-6 bg-black border border-white/10 rounded-xl hover:border-emerald-400 transition-all">
                  <Home className="w-10 h-10 text-emerald-400 mb-4" />
                  <h3 className="font-bold mb-2 group-hover:text-emerald-400 transition-all">
                    {locale === 'ar' ? 'دليل المنزل الذكي 2026' : locale === 'en' ? 'Smart Home Guide 2026' : 'Guide Maison Intelligente 2026'}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {locale === 'ar' ? 'كل ما تحتاج معرفته عن الدوموتيك' : locale === 'en' ? 'Everything about home automation' : 'Tout sur la domotique'}
                  </p>
                </div>
              </Link>
              <Link href="/blog/economie-energie-maison-intelligente-climatisation-algerie-2026" className="group">
                <div className="p-6 bg-black border border-white/10 rounded-xl hover:border-emerald-400 transition-all">
                  <Zap className="w-10 h-10 text-yellow-400 mb-4" />
                  <h3 className="font-bold mb-2 group-hover:text-yellow-400 transition-all">
                    {locale === 'ar' ? 'توفير الطاقة الذكي' : locale === 'en' ? 'Smart Energy Savings' : 'Économies Énergie Intelligentes'}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {locale === 'ar' ? 'وفر 30-50% على فواتيرك' : locale === 'en' ? 'Save 30-50% on your bills' : 'Économisez 30-50% sur vos factures'}
                  </p>
                </div>
              </Link>
              <Link href="/blog/securite-maison-intelligente-cameras-alarmes-algerie-2026" className="group">
                <div className="p-6 bg-black border border-white/10 rounded-xl hover:border-emerald-400 transition-all">
                  <Shield className="w-10 h-10 text-blue-400 mb-4" />
                  <h3 className="font-bold mb-2 group-hover:text-blue-400 transition-all">
                    {locale === 'ar' ? 'أمان المنزل الذكي' : locale === 'en' ? 'Smart Home Security' : 'Sécurité Maison Intelligente'}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {locale === 'ar' ? 'كاميرات وإنذارات ذكية' : locale === 'en' ? 'Smart cameras and alarms' : 'Caméras et alarmes intelligentes'}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">{t.ctaTitle}</h2>
            <p className="text-xl mb-8">
              {locale === 'ar'
                ? `احصل على استشارة مجانية للمنزل الذكي في ${cityName}`
                : locale === 'en'
                ? `Get a free smart home consultation in ${cityName}`
                : `Obtenez une consultation gratuite maison intelligente à ${cityName}`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+213549575512" className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                0549-57-55-12
              </a>
              <a href={`mailto:contact@symloop.com?subject=Smart Home ${cityName}`} className="px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition-all flex items-center justify-center gap-2">
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
