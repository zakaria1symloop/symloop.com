// Bejaia — Kabyle coastal port (oil pipeline terminal Hassi Messaoud → Bejaia),
// Mediterranean tourism, Soummam valley, Ibn Khaldun heritage, agribusiness.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import WilayaPage from '../../components/wilaya/WilayaPage';

const CONTENT = {
  fr: {
    eyebrow: 'Bejaia · Port méditerranéen', publishedAt: 'Mis à jour Mai 2026',
    title: "Symloop à Bejaia — l'ingénierie pour le port pétrolier, le tourisme et l'agribusiness.",
    dek: "Bejaia combine trois économies rarement réunies : un port commercial et pétrolier (terminal de l'oléoduc Hassi Messaoud), un littoral touristique méditerranéen, et la vallée de la Soummam — agribusiness, olive et industries kabyles.",
    meta: { one: 'Bejaia · Akbou · Sidi Aïch', two: '920 000 habitants (wilaya)', three: '4 h depuis Alger' },
    intro: [
      "Bejaia est un nœud économique souvent sous-estimé. Le port reçoit l'oléoduc qui descend de Hassi Messaoud — une part significative du pétrole algérien transite par ici avant d'être exporté. Le littoral entre Cap Carbon et la Côte de Sidi Yahia est l'un des secteurs touristiques les plus actifs du pays. La vallée de la Soummam concentre une industrie agroalimentaire et textile autour d'Akbou. Trois économies, trois logiques de logiciel.",
      "Cette page n'est pas un argumentaire commercial. C'est un portrait éditorial du travail que nous livrons à Bejaia — pour les opérateurs portuaires, les acteurs touristiques, les industriels de la Soummam et les coopératives kabyles côtières.",
    ],
    sections: [
      { heading: "Le tissu béjaoui — port, tourisme, vallée", body: [
        "L'économie de Bejaia repose sur trois piliers. **Premier pilier : les opérations portuaires et pétrolières** — terminal pétrolier (Sonatrach), port commercial (vraquiers, conteneurs), services douaniers, services portuaires associés. Ces opérations exigent un logiciel à la hauteur — gestion des opérations 24/7, intégration douanière, traçabilité hydrocarbures.",
        "**Deuxième pilier : le tourisme méditerranéen** — hôtels du littoral, agences de voyage, opérateurs de plongée et nautisme, restauration. Les opérateurs touristiques béjaouis ont besoin de PMS modernes, channel managers vers les OTAs européennes, plateformes de réservation directe. **Troisième pilier : la vallée de la Soummam** — agroalimentaire (Cevital), textile, sous-traitance industrielle. Tissu PME exigeant des ERP sur mesure.",
      ] },
      { heading: "Ce que nous livrons à Bejaia", body: [
        "Nos engagements béjaouis portent sur trois catégories. **Plateformes portuaires et pétrolières** : gestion d'opérations terminal pétrolier, intégration SCADA, conformité HSE, dématérialisation douanière. **Plateformes touristiques** : PMS hôteliers, channel managers, moteurs de réservation directe, applications mobiles guest, plateformes de catalogue d'opérateurs nautiques.",
        "**ERP industriels** pour la vallée de la Soummam — production agroalimentaire, traçabilité, multi-sites, conformité fiscale algérienne. Aucun de ces engagements n'est packagé. Chacun commence par une discovery sur place — au terminal pétrolier, dans un hôtel du littoral, ou dans une usine d'Akbou.",
      ] },
      { heading: "L'avantage maritime kabyle", body: [
        "Bejaia partage avec Tizi Ouzou la culture kabyle d'ingénierie — rigueur, simplicité, livraison qui dure. Mais Bejaia ajoute une dimension maritime et internationale : le port reçoit des navires européens et africains, le tourisme touche des clients européens, l'oléoduc connecte Hassi Messaoud aux exportations méditerranéennes. Cette ouverture maritime change la nature des projets — beaucoup de nos missions béjaouies ont une composante d'intégration internationale.",
      ] },
      { heading: "L'écosystème de la vallée de la Soummam", body: [
        "Akbou et la vallée de la Soummam concentrent l'un des tissus industriels les plus dynamiques d'Algérie. Cevital y opère plusieurs unités industrielles (sucre, huile, agroalimentaire). Plusieurs centaines de PME industrielles y travaillent en sous-traitance ou en production directe. Cette concentration crée un écosystème d'ingénierie auxiliaire — automaticiens, techniciens supérieurs, ingénieurs d'usine — que nos missions béjaouies utilisent comme partenaires terrain.",
      ] },
    ],
    related: {
      eyebrow: 'Pour aller plus loin',
      services: { label: 'Disciplines à Bejaia', items: [
        { key: 'iot',                  name: 'IoT et systèmes industriels' },
        { key: 'software-engineering', name: 'Ingénierie logicielle' },
        { key: 'cloud',                name: 'Cloud & DevOps' },
        { key: 'mobile',               name: 'Ingénierie mobile' },
      ] },
      insights: { label: 'Études liées', items: [
        { key: 'oil-gas',     name: 'Pétrole et gaz IT — du verrouillage fournisseur au contrôle indépendant' },
        { key: 'hospitality', name: 'Ingénierie hôtellerie — du PMS à la conversion en réservation directe' },
        { key: 'erp',         name: "ERP sur mesure pour PME algériennes — au-delà d'Odoo" },
      ] },
    },
    cta: { eyebrow: 'Parlez à un ingénieur basé à Alger', title: 'Vous dirigez un opérateur portuaire, un hôtel du littoral, une industrie de la Soummam ? Décrivez votre situation.', button: 'Réserver un appel de 30 minutes' },
  },
  en: {
    eyebrow: 'Bejaia · Mediterranean port', publishedAt: 'Updated May 2026',
    title: "Symloop in Bejaia — engineering for the oil port, tourism, and agribusiness.",
    dek: "Bejaia combines three rarely-united economies: a commercial and oil port (Hassi Messaoud pipeline terminal), a Mediterranean tourist coast, and the Soummam valley — agribusiness, olive oil, and Kabyle industries.",
    meta: { one: 'Bejaia · Akbou · Sidi Aïch', two: '920,000 inhabitants (wilaya)', three: '4 h from Algiers' },
    intro: [
      "Bejaia is a frequently-underestimated economic node. The port receives the pipeline coming down from Hassi Messaoud — a significant share of Algerian oil transits here before export. The coastline between Cap Carbon and the Côte de Sidi Yahia is one of the country's most active tourist zones. The Soummam valley concentrates food-processing and textile industry around Akbou. Three economies, three software logics.",
      "This page is not a sales pitch. It is an editorial portrait of the work we deliver in Bejaia — for port operators, tourism actors, Soummam industrials and Kabyle coastal cooperatives.",
    ],
    sections: [
      { heading: 'The Bejaia fabric — port, tourism, valley', body: [
        "Bejaia's economy rests on three pillars. **First: port and oil operations** — oil terminal (Sonatrach), commercial port (bulk carriers, containers), customs services, associated port services. These operations demand software at their level — 24/7 operations management, customs integration, hydrocarbon traceability.",
        "**Second: Mediterranean tourism** — coastal hotels, travel agencies, diving and nautical operators, restaurants. Bejaia tourism operators need modern PMS, channel managers to European OTAs, direct-booking platforms. **Third: the Soummam valley** — agribusiness (Cevital), textile, industrial subcontracting. SME fabric demanding custom ERPs.",
      ] },
      { heading: 'What we deliver in Bejaia', body: [
        "Our Bejaia engagements cover three categories. **Port and oil platforms**: oil-terminal operations management, SCADA integration, HSE compliance, customs dematerialization. **Tourism platforms**: hotel PMS, channel managers, direct-booking engines, guest mobile apps, catalog platforms for nautical operators.",
        "**Industrial ERPs** for the Soummam valley — food-processing production, traceability, multi-site, Algerian tax compliance. None of these engagements are packaged. Each starts with on-site discovery — at the oil terminal, in a coastal hotel, or in an Akbou factory.",
      ] },
      { heading: 'The Kabyle maritime advantage', body: [
        "Bejaia shares with Tizi Ouzou the Kabyle engineering culture — rigor, simplicity, lasting delivery. But Bejaia adds a maritime and international dimension: the port receives European and African ships, tourism reaches European clients, the pipeline connects Hassi Messaoud to Mediterranean exports. This maritime openness changes the nature of projects — many of our Bejaia engagements have an international integration component.",
      ] },
      { heading: 'The Soummam valley ecosystem', body: [
        "Akbou and the Soummam valley concentrate one of the most dynamic industrial fabrics in Algeria. Cevital operates several industrial units there (sugar, oil, food processing). Hundreds of industrial SMEs work in subcontracting or direct production. This concentration creates an auxiliary engineering ecosystem — automation engineers, technicians, factory engineers — that our Bejaia engagements use as ground partners.",
      ] },
    ],
    related: {
      eyebrow: 'Going deeper',
      services: { label: 'Disciplines in Bejaia', items: [
        { key: 'iot',                  name: 'IoT & Industrial Systems' },
        { key: 'software-engineering', name: 'Software Engineering' },
        { key: 'cloud',                name: 'Cloud & DevOps' },
        { key: 'mobile',               name: 'Mobile Engineering' },
      ] },
      insights: { label: 'Related insights', items: [
        { key: 'oil-gas',     name: 'Oil and gas IT — from vendor lock-in to independent control' },
        { key: 'hospitality', name: 'Hospitality engineering — from PMS lock-in to direct-booking conversion' },
        { key: 'erp',         name: 'Custom ERP for Algerian SMEs — beyond Odoo' },
      ] },
    },
    cta: { eyebrow: 'Talk to an engineer based in Algiers', title: 'Run a port operator, a coastal hotel, a Soummam industrial? Describe your situation.', button: 'Book a 30-minute call' },
  },
  ar: {
    eyebrow: 'بجاية · ميناء متوسطي', publishedAt: 'محدّث مايو 2026',
    title: 'سيملوب في بجاية — هندسة للميناء النفطي والسياحة والأعمال الزراعية.',
    dek: 'بجاية تجمع ثلاثة اقتصادات نادراً ما تجتمع: ميناء تجاري ونفطي (محطة خط أنابيب حاسي مسعود)، ساحل سياحي متوسطي، ووادي الصومام — أعمال زراعية وزيت زيتون وصناعات قبائلية.',
    meta: { one: 'بجاية · أقبو · سيدي عيش', two: '920 ألف نسمة (ولاية)', three: '4 ساعات من الجزائر العاصمة' },
    intro: [
      'بجاية عقدة اقتصادية تُستهان كثيراً. يستقبل الميناء خط الأنابيب القادم من حاسي مسعود — حصة كبيرة من النفط الجزائري تعبر من هنا قبل التصدير. الساحل بين رأس كاربون والساحل الجنوبي هو أحد أكثر المناطق السياحية نشاطاً في البلد. وادي الصومام يركّز الصناعة الغذائية والنسيج حول أقبو. ثلاثة اقتصادات، ثلاث منطقيّات برمجية.',
      'هذه الصفحة ليست عرضاً تجارياً. هي صورة تحريرية للعمل الذي نسلّمه في بجاية — لمشغّلي الموانئ والفاعلين السياحيين وصناعيي الصومام والتعاونيات القبائلية الساحلية.',
    ],
    sections: [
      { heading: 'النسيج البجاوي — ميناء، سياحة، وادي', body: [
        'يقوم اقتصاد بجاية على ثلاث ركائز. **الأولى: عمليات الميناء والنفط** — محطة نفطية (سوناطراك)، ميناء تجاري (سفن سوائب، حاويات)، خدمات جمركية، خدمات مينائية مرتبطة. تتطلّب هذه العمليات برمجيات على مستواها — إدارة عمليات 24/7، تكامل جمركي، تتبع المحروقات.',
        '**الثانية: السياحة المتوسطية** — فنادق الساحل، وكالات سفر، مشغّلو الغطس والملاحة، المطاعم. مشغّلو السياحة البجاويون يحتاجون PMS حديثة و channel managers نحو OTAs الأوروبية ومنصات حجز مباشر. **الثالثة: وادي الصومام** — أعمال زراعية (سيفيتال)، نسيج، مقاولة صناعية. نسيج شركات صغيرة ومتوسطة يتطلّب ERP مخصصة.',
      ] },
      { heading: 'ما نسلّمه في بجاية', body: [
        'تشمل مهامنا في بجاية ثلاث فئات. **منصات مينائية ونفطية**: إدارة عمليات المحطة النفطية، تكامل SCADA، الامتثال HSE، رقمنة الجمارك. **منصات سياحية**: PMS للفنادق، channel managers، محركات حجز مباشر، تطبيقات جوال للضيوف، منصات كتالوج لمشغّلي البحر.',
        '**ERP صناعية** لوادي الصومام — إنتاج صناعة غذائية، تتبع، متعدد المواقع، امتثال ضريبي جزائري. لا توجد من بينها مهمة معلّبة. كل واحدة تبدأ باكتشاف ميداني — في المحطة النفطية، أو في فندق ساحلي، أو في مصنع بأقبو.',
      ] },
      { heading: 'الميزة البحرية القبائلية', body: [
        'تتشارك بجاية مع تيزي وزو ثقافة الهندسة القبائلية — صرامة، بساطة، تسليم يدوم. لكن بجاية تضيف بُعداً بحرياً ودولياً: الميناء يستقبل سفناً أوروبية وأفريقية، السياحة تصل إلى عملاء أوروبيين، خط الأنابيب يربط حاسي مسعود بالصادرات المتوسطية. هذا الانفتاح البحري يغيّر طبيعة المشاريع — كثير من مهامنا البجاوية لها مكوّن تكامل دولي.',
      ] },
      { heading: 'نظام وادي الصومام', body: [
        'أقبو ووادي الصومام يركّزان أحد أكثر الأنسجة الصناعية ديناميكية في الجزائر. تشغّل سيفيتال هناك عدة وحدات صناعية (سكر، زيت، صناعة غذائية). مئات الشركات الصغيرة والمتوسطة الصناعية تعمل في المقاولة أو الإنتاج المباشر. هذا التركّز يخلق نظاماً هندسياً مساعداً — مهندسي أتمتة، تقنيين سامين، مهندسي مصنع — تستخدمهم مهامنا البجاوية كشركاء ميدانيين.',
      ] },
    ],
    related: {
      eyebrow: 'لقراءة المزيد',
      services: { label: 'التخصصات في بجاية', items: [
        { key: 'iot',                  name: 'IoT والأنظمة الصناعية' },
        { key: 'software-engineering', name: 'هندسة البرمجيات' },
        { key: 'cloud',                name: 'السحابة و DevOps' },
        { key: 'mobile',               name: 'هندسة الجوال' },
      ] },
      insights: { label: 'دراسات ذات صلة', items: [
        { key: 'oil-gas',     name: 'تكنولوجيا المعلومات في النفط والغاز — من قَفل المورّد إلى التحكم المستقل' },
        { key: 'hospitality', name: 'هندسة الضيافة — من قَفل PMS إلى تحويل الحجز المباشر' },
        { key: 'erp',         name: 'ERP مخصص للشركات الصغيرة والمتوسطة الجزائرية — ما بعد Odoo' },
      ] },
    },
    cta: { eyebrow: 'تحدث مع مهندس مقرّه الجزائر العاصمة', title: 'هل تدير مشغّل ميناء أو فندقاً ساحلياً أو صناعياً في الصومام؟ صف وضعك.', button: 'احجز مكالمة 30 دقيقة' },
  },
};

const placeLd = {
  '@context': 'https://schema.org', '@type': 'LocalBusiness',
  name: 'Symloop — Bejaia and Soummam valley',
  description: CONTENT.fr.dek,
  url: 'https://symloop.com/locations/bejaia/',
  image: 'https://symloop.com/sym-logo.png',
  telephone: '+213549575512',
  address: { '@type': 'PostalAddress', streetAddress: 'Algiers HQ — serving Bejaia and Soummam', addressLocality: 'Bejaia', addressRegion: 'Bejaia', postalCode: '06000', addressCountry: 'DZ' },
  geo: { '@type': 'GeoCoordinates', latitude: 36.7525, longitude: 5.0567 },
  areaServed: [{ '@type': 'City', name: 'Bejaia' }, { '@type': 'City', name: 'Akbou' }, { '@type': 'City', name: 'Sidi Aïch' }, { '@type': 'AdministrativeArea', name: 'Soummam Valley' }],
  parentOrganization: { '@type': 'Organization', name: 'Symloop Technology', url: 'https://symloop.com' },
};

const breadcrumbs = [
  { name: 'Home',      url: 'https://symloop.com/' },
  { name: 'Locations', url: 'https://symloop.com/locations/' },
  { name: 'Bejaia',    url: 'https://symloop.com/locations/bejaia/' },
];

export default function LocationBejaiaPage() {
  return (
    <WilayaPage
      content={CONTENT}
      placeLd={placeLd}
      breadcrumbs={breadcrumbs}
      seoTitle="Software Engineering in Bejaia — Symloop"
      seoDescription="Editorial portrait of Symloop's work in Bejaia — Hassi Messaoud oil terminal, Mediterranean tourism, Soummam valley agribusiness, Cevital industrials."
      seoKeywords="agence developpement web bejaia, software engineering bejaia, ingenierie logicielle bejaia, port bejaia logistics, sonatrach pipeline terminal IT, hotel software bejaia tourism, soummam industrial software, cevital IT, custom erp bejaia akbou"
    />
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
