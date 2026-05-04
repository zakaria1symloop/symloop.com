// Tlemcen — Andalusian-Moorish UNESCO heritage, Aboubekr Belkaid University,
// olive oil + leather + carpet exports, cross-border position with Morocco.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import WilayaPage from '../../components/wilaya/WilayaPage';

const CONTENT = {
  fr: {
    eyebrow: 'Tlemcen · Capitale culturelle ouest', publishedAt: 'Mis à jour Mai 2026',
    title: "Symloop à Tlemcen — l'ingénierie pour la cité andalouse, le terroir et l'export.",
    dek: "Tlemcen est la capitale culturelle de l'Ouest algérien — patrimoine UNESCO andalou-mauresque, université Aboubekr Belkaid, économie de terroir et d'export. Un tissu unique entre tradition et ouverture méditerranéenne.",
    meta: { one: 'Tlemcen · Mansourah · Maghnia', two: '950 000 habitants (wilaya)', three: '6 h depuis Alger' },
    intro: [
      "Tlemcen porte l'une des identités culturelles les plus fortes du Maghreb. Architecture andalouse, héritage soufi, université ancienne, et un tissu économique fait de produits de terroir exportables — huile d'olive, cuir, tapis, miel — combiné à une position frontalière avec le Maroc qui change la nature des chaînes logistiques régionales.",
      "Cette page n'est pas un argumentaire commercial. C'est un portrait éditorial du travail que nous livrons à Tlemcen — pour les coopératives de terroir, les artisans-exportateurs, les institutions culturelles et les PME qui composent le tissu de l'extrême ouest algérien.",
    ],
    sections: [
      { heading: "Le tissu tlemcénien — terroir et export", body: [
        "L'économie tlemcénienne repose sur trois piliers spécifiques. **Premier pilier : le terroir et l'agroalimentaire** — coopératives d'huile d'olive, miel de la région d'Aïn Témouchent, conserveries, produits de l'argan en partenariat avec les producteurs marocains. **Deuxième pilier : l'artisanat d'export** — cuir, tapis berbères et arabo-andalous, broderie, bijouterie traditionnelle, qui partent vers l'Europe et le Golfe.",
        "**Troisième pilier : le tissu PME et l'enseignement supérieur** — Université Aboubekr Belkaid, manufactures locales, distribution régionale couvrant l'ouest jusqu'à la frontière marocaine. Tous partagent une caractéristique : ils opèrent à une échelle qui exige des plateformes d'export, de traçabilité et de paiement international.",
      ] },
      { heading: "Ce que nous livrons à Tlemcen", body: [
        "Nos engagements tlemcéniens portent sur trois catégories. **Plateformes e-commerce d'export** : sites multilingues (français, arabe, anglais, espagnol), intégrations paiement international (Stripe, PayPal, virement SEPA), gestion logistique export, certification d'origine. **Systèmes de traçabilité** pour produits de terroir avec certification d'origine et anti-contrefaçon.",
        "**ERP et applications mobiles** pour les PME et les coopératives. Aucun de ces engagements n'est packagé. Chacun commence par une discovery sur place — visite aux producteurs dans les villages de l'arrière-pays, pas seulement au centre-ville.",
      ] },
      { heading: "L'avantage de la position frontalière", body: [
        "Tlemcen est à 40 kilomètres de la frontière marocaine. Bien que la frontière terrestre soit fermée depuis 1994, les flux économiques avec l'Ouest marocain et l'Andalousie espagnole structurent l'économie locale plus que ceux avec le centre du pays. Cette spécificité change la nature des projets que nous y livrons — beaucoup de nos missions tlemcéniennes ont une composante d'intégration internationale : intégration avec des transporteurs marocains via le port d'Oran, plateformes de vente vers l'Espagne, conformité douanière européenne.",
        "Notre équipe parle l'espagnol commercial en plus du français, de l'arabe et de l'anglais — un atout réel pour le tissu d'export tlemcénien.",
      ] },
      { heading: "Le patrimoine culturel comme actif numérique", body: [
        "Tlemcen possède un patrimoine UNESCO (palais Mechouar, Mansourah, Sidi Boumediene) qui est aussi un actif économique sous-exploité. Les institutions culturelles tlemcéniennes opèrent des plateformes de catalogage, de visite virtuelle, et de billetterie qui demandent une ingénierie de niveau musée européen. Nos missions dans ce domaine touchent à la numérisation 3D, la base de données patrimoine et l'expérience visiteur multilingue.",
      ] },
    ],
    related: {
      eyebrow: 'Pour aller plus loin',
      services: { label: 'Disciplines à Tlemcen', items: [
        { key: 'software-engineering', name: 'Ingénierie logicielle' },
        { key: 'mobile',               name: 'Ingénierie mobile' },
        { key: 'cloud',                name: 'Cloud & DevOps' },
        { key: 'product',              name: 'Ingénierie produit' },
      ] },
      insights: { label: 'Études liées', items: [
        { key: 'erp',  name: "ERP sur mesure pour PME algériennes — au-delà d'Odoo" },
        { key: 'cost', name: "Le vrai coût du développement logiciel en Algérie" },
        { key: 'ai',   name: "L'IA en production — adoption pratique" },
      ] },
    },
    cta: { eyebrow: 'Parlez à un ingénieur basé à Alger', title: 'Vous dirigez une coopérative, une manufacture ou une institution à Tlemcen ? Décrivez votre situation.', button: 'Réserver un appel de 30 minutes' },
  },
  en: {
    eyebrow: 'Tlemcen · Western cultural capital', publishedAt: 'Updated May 2026',
    title: "Symloop in Tlemcen — engineering for the Andalusian city, terroir, and export.",
    dek: "Tlemcen is the cultural capital of western Algeria — Andalusian-Moorish UNESCO heritage, Aboubekr Belkaid University, terroir and export economy. A unique fabric between tradition and Mediterranean openness.",
    meta: { one: 'Tlemcen · Mansourah · Maghnia', two: '950,000 inhabitants (wilaya)', three: '6 h from Algiers' },
    intro: [
      "Tlemcen carries one of the Maghreb's strongest cultural identities. Andalusian architecture, Sufi heritage, an ancient university, and an economic fabric of exportable terroir products — olive oil, leather, carpets, honey — combined with a border position with Morocco that changes the nature of regional logistics chains.",
      "This page is not a sales pitch. It is an editorial portrait of the work we deliver in Tlemcen — for terroir cooperatives, artisan-exporters, cultural institutions and SMEs that make up the fabric of the extreme Algerian west.",
    ],
    sections: [
      { heading: 'The Tlemcen fabric — terroir and export', body: [
        "The Tlemcen economy rests on three specific pillars. **First: terroir and food processing** — olive-oil cooperatives, honey from the Aïn Témouchent region, canneries, argan products in partnership with Moroccan producers. **Second: export crafts** — leather, Berber and Arabo-Andalusian carpets, embroidery, traditional jewelry, going to Europe and the Gulf.",
        "**Third: SME fabric and higher education** — Aboubekr Belkaid University, local manufacturing, regional distribution covering the west to the Moroccan border. All share one characteristic: they operate at a scale that demands export platforms, traceability and international payment.",
      ] },
      { heading: 'What we deliver in Tlemcen', body: [
        "Our Tlemcen engagements cover three categories. **Export e-commerce platforms**: multilingual sites (French, Arabic, English, Spanish), international payment integrations (Stripe, PayPal, SEPA wire), export logistics management, origin certification. **Traceability systems** for terroir products with origin certification and anti-counterfeit.",
        "**ERPs and mobile applications** for SMEs and cooperatives. None of these engagements are packaged. Each starts with on-site discovery — visiting producers in inland villages, not just downtown.",
      ] },
      { heading: 'The advantage of the border position', body: [
        "Tlemcen is 40 kilometers from the Moroccan border. Although the land border has been closed since 1994, economic flows with western Morocco and Spanish Andalusia structure the local economy more than those with the country's center. This specificity changes the nature of the projects we deliver here — many of our Tlemcen engagements have an international integration component: integration with Moroccan carriers via the Port of Oran, sales platforms to Spain, European customs compliance.",
        "Our team speaks commercial Spanish in addition to French, Arabic and English — a real asset for the Tlemcen export fabric.",
      ] },
      { heading: 'Cultural heritage as a digital asset', body: [
        "Tlemcen has a UNESCO heritage (Mechouar Palace, Mansourah, Sidi Boumediene) that is also an under-exploited economic asset. Tlemcen cultural institutions operate cataloguing, virtual-visit and ticketing platforms that demand engineering at European-museum level. Our engagements in this domain touch on 3D digitization, heritage databases and multilingual visitor experiences.",
      ] },
    ],
    related: {
      eyebrow: 'Going deeper',
      services: { label: 'Disciplines in Tlemcen', items: [
        { key: 'software-engineering', name: 'Software Engineering' },
        { key: 'mobile',               name: 'Mobile Engineering' },
        { key: 'cloud',                name: 'Cloud & DevOps' },
        { key: 'product',              name: 'Product Engineering' },
      ] },
      insights: { label: 'Related insights', items: [
        { key: 'erp',  name: 'Custom ERP for Algerian SMEs — beyond Odoo' },
        { key: 'cost', name: 'The real cost of building software in Algeria' },
        { key: 'ai',   name: 'AI in production — pragmatic adoption' },
      ] },
    },
    cta: { eyebrow: 'Talk to an engineer based in Algiers', title: 'Run a cooperative, a manufacturer or an institution in Tlemcen? Describe your situation.', button: 'Book a 30-minute call' },
  },
  ar: {
    eyebrow: 'تلمسان · العاصمة الثقافية للغرب', publishedAt: 'محدّث مايو 2026',
    title: 'سيملوب في تلمسان — هندسة للمدينة الأندلسية والتراب والتصدير.',
    dek: 'تلمسان هي العاصمة الثقافية لغرب الجزائر — تراث أندلسي-مغاربي يونسكو، جامعة أبو بكر بلقايد، اقتصاد تراب وتصدير. نسيج فريد بين التقليد والانفتاح المتوسطي.',
    meta: { one: 'تلمسان · المنصورة · مغنية', two: '950 ألف نسمة (ولاية)', three: '6 ساعات من الجزائر العاصمة' },
    intro: [
      'تحمل تلمسان إحدى أقوى الهويات الثقافية في المغرب العربي. عمارة أندلسية، تراث صوفي، جامعة قديمة، ونسيج اقتصادي مكوّن من منتجات تراب قابلة للتصدير — زيت زيتون، جلد، سجاد، عسل — مع موقع حدودي مع المغرب يغيّر طبيعة سلاسل اللوجستيك الإقليمية.',
      'هذه الصفحة ليست عرضاً تجارياً. هي صورة تحريرية للعمل الذي نسلّمه في تلمسان — للتعاونيات التراثية والحرفيين-المصدرين والمؤسسات الثقافية والشركات الصغيرة والمتوسطة التي تشكّل نسيج أقصى الغرب الجزائري.',
    ],
    sections: [
      { heading: 'النسيج التلمساني — التراب والتصدير', body: [
        'يقوم اقتصاد تلمسان على ثلاث ركائز محدّدة. **الأولى: التراب والصناعة الغذائية** — تعاونيات زيت الزيتون، عسل منطقة عين تموشنت، التعليب، منتجات الأركان بالشراكة مع المنتجين المغاربة. **الثانية: الحرف للتصدير** — جلد، سجاد أمازيغي وعربي-أندلسي، تطريز، مجوهرات تقليدية، تذهب إلى أوروبا والخليج.',
        '**الثالثة: نسيج الشركات الصغيرة والمتوسطة والتعليم العالي** — جامعة أبو بكر بلقايد، التصنيع المحلي، التوزيع الإقليمي الذي يغطّي الغرب حتى الحدود المغربية. تتشارك جميعها خاصية واحدة: تعمل على نطاق يتطلّب منصات تصدير وتتبع ودفع دولي.',
      ] },
      { heading: 'ما نسلّمه في تلمسان', body: [
        'تشمل مهامنا في تلمسان ثلاث فئات. **منصات التجارة الإلكترونية للتصدير**: مواقع متعددة اللغات (فرنسية، عربية، إنجليزية، إسبانية)، تكاملات دفع دولية (Stripe و PayPal وتحويل SEPA)، إدارة لوجستيك التصدير، شهادة المنشأ. **أنظمة التتبع** لمنتجات التراب مع شهادة المنشأ ومكافحة التزييف.',
        '**ERP وتطبيقات الجوال** للشركات الصغيرة والمتوسطة والتعاونيات. لا توجد من بينها مهمة معلّبة. كل واحدة تبدأ باكتشاف ميداني — زيارة المنتجين في القرى الداخلية، وليس فقط في وسط المدينة.',
      ] },
      { heading: 'ميزة الموقع الحدودي', body: [
        'تلمسان على بُعد 40 كيلومتراً من الحدود المغربية. رغم أن الحدود البرية مغلقة منذ 1994، فإن التدفقات الاقتصادية مع غرب المغرب والأندلس الإسبانية تشكّل الاقتصاد المحلي أكثر من تلك مع وسط البلد. هذه الخصوصية تغيّر طبيعة المشاريع التي نسلّمها هنا — كثير من مهامنا التلمسانية لها مكوّن تكامل دولي: تكامل مع ناقلين مغاربة عبر ميناء وهران، منصات بيع نحو إسبانيا، امتثال جمركي أوروبي.',
        'فريقنا يتحدث الإسبانية التجارية بالإضافة إلى الفرنسية والعربية والإنجليزية — أصل حقيقي لنسيج تصدير تلمسان.',
      ] },
      { heading: 'التراث الثقافي كأصل رقمي', body: [
        'تلمسان لها تراث يونسكو (قصر المشور، المنصورة، سيدي بومدين) هو أيضاً أصل اقتصادي مستغَل بشكل غير كافٍ. تشغّل المؤسسات الثقافية التلمسانية منصات الفهرسة والزيارة الافتراضية والتذاكر التي تتطلّب هندسة على مستوى متاحف أوروبية. مهامنا في هذا المجال تمسّ الرقمنة ثلاثية الأبعاد وقواعد بيانات التراث وتجربة الزائر متعددة اللغات.',
      ] },
    ],
    related: {
      eyebrow: 'لقراءة المزيد',
      services: { label: 'التخصصات في تلمسان', items: [
        { key: 'software-engineering', name: 'هندسة البرمجيات' },
        { key: 'mobile',               name: 'هندسة الجوال' },
        { key: 'cloud',                name: 'السحابة و DevOps' },
        { key: 'product',              name: 'هندسة المنتج' },
      ] },
      insights: { label: 'دراسات ذات صلة', items: [
        { key: 'erp',  name: 'ERP مخصص للشركات الصغيرة والمتوسطة الجزائرية — ما بعد Odoo' },
        { key: 'cost', name: 'التكلفة الحقيقية لتطوير البرمجيات في الجزائر' },
        { key: 'ai',   name: 'الذكاء الاصطناعي في الإنتاج — اعتماد عملي' },
      ] },
    },
    cta: { eyebrow: 'تحدث مع مهندس مقرّه الجزائر العاصمة', title: 'هل تدير تعاونية أو معملاً أو مؤسسة في تلمسان؟ صف وضعك.', button: 'احجز مكالمة 30 دقيقة' },
  },
};

const placeLd = {
  '@context': 'https://schema.org', '@type': 'LocalBusiness',
  name: 'Symloop — Tlemcen and western Algeria',
  description: CONTENT.fr.dek,
  url: 'https://www.symloop.com/locations/tlemcen/',
  image: 'https://www.symloop.com/sym-logo.png',
  telephone: '+213549575512',
  address: { '@type': 'PostalAddress', streetAddress: 'Algiers HQ — serving Tlemcen and western region', addressLocality: 'Tlemcen', addressRegion: 'Tlemcen', postalCode: '13000', addressCountry: 'DZ' },
  geo: { '@type': 'GeoCoordinates', latitude: 34.8782, longitude: -1.3170 },
  areaServed: [{ '@type': 'City', name: 'Tlemcen' }, { '@type': 'City', name: 'Mansourah' }, { '@type': 'City', name: 'Maghnia' }, { '@type': 'City', name: 'Aïn Témouchent' }],
  parentOrganization: { '@type': 'Organization', name: 'Symloop Technology', url: 'https://www.symloop.com' },
};

const breadcrumbs = [
  { name: 'Home',      url: 'https://www.symloop.com/' },
  { name: 'Locations', url: 'https://www.symloop.com/locations/' },
  { name: 'Tlemcen',   url: 'https://www.symloop.com/locations/tlemcen/' },
];

export default function LocationTlemcenPage() {
  return (
    <WilayaPage
      content={CONTENT}
      placeLd={placeLd}
      breadcrumbs={breadcrumbs}
      seoTitle="Software Engineering in Tlemcen — Symloop"
      seoDescription="Editorial portrait of Symloop's work in Tlemcen — terroir export e-commerce, leather and carpet platforms, UNESCO cultural heritage, Aboubekr Belkaid University."
      seoKeywords="agence developpement web tlemcen, software engineering tlemcen, ingenierie logicielle tlemcen, ecommerce export tlemcen, olive oil traceability software, tlemcen artisan platform, aboubekr belkaid university, custom erp tlemcen, mobile app tlemcen"
    />
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
