// Tizi Ouzou — Kabyle tech entrepreneurial heart, Mouloud Mammeri University,
// strong diaspora-tech founder culture, agritech (olive oil), education tech.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import WilayaPage from '../../components/wilaya/WilayaPage';

const CONTENT = {
  fr: {
    eyebrow: 'Tizi Ouzou · Kabylie', publishedAt: 'Mis à jour Mai 2026',
    title: "Symloop à Tizi Ouzou — l'ingénierie pour la Kabylie qui exporte ses ingénieurs.",
    dek: "Tizi Ouzou est l'un des plus forts viviers d'ingénieurs informatiques du pays. Diaspora tech à Paris, Lyon et Montréal, agritech d'olive et de produits du terroir, edtech francophone — un tissu unique qui demande une ingénierie qui comprend ses spécificités.",
    meta: { one: 'Tizi Ouzou · Draâ Ben Khedda · Azazga', two: '1,1 million d\'habitants', three: '1 h depuis Alger' },
    intro: [
      "Tizi Ouzou est connue pour deux choses qui ne s'opposent jamais : un tissu agricole traditionnel ancien (olive, figue, raisin de la vallée du Sebaou) et une concentration exceptionnelle d'ingénieurs informatiques formés à l'Université Mouloud Mammeri qui partent ensuite peupler les équipes tech de Paris, Lyon, Montréal et de plus en plus Alger. Cette double identité — terroir ancien et ingénierie de pointe — définit le tissu économique de la wilaya.",
      "Cette page n'est pas un argumentaire commercial. C'est un portrait éditorial du travail que nous livrons en Kabylie — pour les coopératives agricoles, les scale-ups locales, les institutions culturelles berbères, et les sous-traitants qui alimentent l'écosystème tech d'Alger.",
    ],
    sections: [
      { heading: "Le tissu économique kabyle", body: [
        "L'économie de Tizi Ouzou repose sur trois piliers spécifiques. **Premier pilier : l'agritech et l'agroalimentaire** — coopératives d'huile d'olive, transformation de produits du terroir, traçabilité export, plateformes de vente directe au consommateur. **Deuxième pilier : la fabrication et la sous-traitance** — agroalimentaire, textile, électronique légère, autour de Draâ Ben Khedda et de la zone industrielle d'Oued Aissi.",
        "**Troisième pilier : l'écosystème tech kabyle** — startups locales, freelances seniors travaillant pour des clients européens, et sous-traitants de scale-ups algéroises qui ont délocalisé une partie de leur ingénierie en Kabylie pour le coût et l'accès au talent. Plusieurs des startups les plus financées du pays ont des co-fondateurs kabyles.",
      ] },
      { heading: "Ce que nous livrons à Tizi Ouzou", body: [
        "Nos engagements en Kabylie portent sur trois catégories. **Plateformes agricoles et de terroir** : traçabilité huile d'olive du producteur au consommateur, plateformes de vente directe vers la diaspora européenne, certification d'origine, intégration logistique export. **Systèmes pour scale-ups** : architecture backend à grande échelle, optimisation de coûts cloud, MLOps pour les startups IA kabyles.",
        "**Plateformes éducatives** : edtech francophone, plateformes de cours en ligne, intégrations avec l'Université Mouloud Mammeri. Aucun de ces engagements n'est packagé. Chacun commence par une discovery sur place — souvent dans les villages de la vallée plutôt qu'au centre-ville.",
      ] },
      { heading: "L'avantage culturel kabyle", body: [
        "La culture professionnelle kabyle a une caractéristique forte : la rigueur dans la livraison et un ethos d'ingénierie centré sur la simplicité et la robustesse. Cette culture s'aligne précisément avec notre méthode — pas d'over-engineering, livraison qui dure dix ans, documentation propre. Les conversations techniques avec un client kabyle vont vite à l'essentiel.",
        "Notre équipe inclut plusieurs ingénieurs formés à l'Université Mouloud Mammeri ou ayant travaillé en Kabylie avant de rejoindre Symloop. Cette continuité culturelle change la dynamique des relations clients — moins de réunions de cadrage, plus de livraison.",
      ] },
      { heading: "L'écosystème tech de la diaspora", body: [
        "La diaspora tech kabyle à Paris, Lyon, Montréal et de plus en plus Dubaï est l'une des plus actives au monde pour une population de cette taille. Plusieurs CTOs de scale-ups françaises et nord-américaines sont d'origine kabyle. Cette diaspora investit dans son pays d'origine — fonds early-stage, mentorat de startups locales, et de plus en plus retour entrepreneurial à Tizi Ouzou même.",
        "Nous travaillons régulièrement à l'interface entre cette diaspora et l'écosystème local — quand un fondateur basé à Paris veut monter une équipe à Tizi Ouzou, ou quand une scale-up algéroise veut recruter dans la vallée du Sebaou, nous connaissons le marché et les bons profils.",
      ] },
    ],
    related: {
      eyebrow: 'Pour aller plus loin',
      services: { label: 'Disciplines à Tizi Ouzou', items: [
        { key: 'software-engineering', name: 'Ingénierie logicielle' },
        { key: 'ai',                   name: 'Intelligence Artificielle' },
        { key: 'mobile',               name: 'Ingénierie mobile' },
        { key: 'product',              name: 'Ingénierie produit' },
      ] },
      insights: { label: 'Études liées', items: [
        { key: 'cost', name: "Le vrai coût du développement logiciel en Algérie" },
        { key: 'erp',  name: "ERP sur mesure pour PME algériennes — au-delà d'Odoo" },
        { key: 'ai',   name: "L'IA en production — adoption pratique" },
      ] },
    },
    cta: { eyebrow: 'Parlez à un ingénieur basé à Alger', title: 'Vous dirigez une coopérative, une scale-up ou une organisation à Tizi Ouzou, en Kabylie ? Décrivez votre situation.', button: 'Réserver un appel de 30 minutes' },
  },
  en: {
    eyebrow: 'Tizi Ouzou · Kabylia', publishedAt: 'Updated May 2026',
    title: "Symloop in Tizi Ouzou — engineering for the Kabylia that exports its engineers.",
    dek: "Tizi Ouzou is one of the strongest computer-engineering talent pools in the country. Tech diaspora in Paris, Lyon and Montréal, olive-oil agritech, francophone edtech — a unique fabric that needs engineering aware of its specificity.",
    meta: { one: 'Tizi Ouzou · Draâ Ben Khedda · Azazga', two: '1.1 million inhabitants', three: '1 h from Algiers' },
    intro: [
      "Tizi Ouzou is known for two things that never oppose each other: an ancient traditional agricultural fabric (olive, fig, grape from the Sebaou valley) and an exceptional concentration of computer engineers trained at Mouloud Mammeri University who go on to populate tech teams in Paris, Lyon, Montréal and increasingly Algiers. This double identity — ancient terroir and cutting-edge engineering — defines the wilaya's economic fabric.",
      "This page is not a sales pitch. It is an editorial portrait of the work we deliver in Kabylia — for agricultural cooperatives, local scale-ups, Berber cultural institutions, and the subcontractors that feed the Algiers tech ecosystem.",
    ],
    sections: [
      { heading: 'The Kabyle economic fabric', body: [
        "Tizi Ouzou's economy rests on three specific pillars. **First: agritech and food processing** — olive-oil cooperatives, terroir-product transformation, export traceability, direct-to-consumer platforms. **Second: manufacturing and subcontracting** — food, textile, light electronics, around Draâ Ben Khedda and the Oued Aissi industrial zone.",
        "**Third: the Kabyle tech ecosystem** — local startups, senior freelancers working for European clients, and subcontractors for Algiers scale-ups that have offshored part of their engineering to Kabylia for cost and talent access. Several of the most-funded startups in the country have Kabyle co-founders.",
      ] },
      { heading: 'What we deliver in Tizi Ouzou', body: [
        "Our Kabylia engagements cover three categories. **Agricultural and terroir platforms**: olive-oil traceability from producer to consumer, direct-sales platforms for the European diaspora, origin certification, export logistics integration. **Scale-up systems**: large-scale backend architecture, cloud cost optimization, MLOps for Kabyle AI startups.",
        "**Educational platforms**: francophone edtech, online course platforms, integration with Mouloud Mammeri University. None of these engagements are packaged. Each starts with on-site discovery — often in the valley villages rather than downtown.",
      ] },
      { heading: 'The Kabyle cultural advantage', body: [
        "Kabyle professional culture has a strong characteristic: rigor in delivery and an engineering ethos centered on simplicity and robustness. This culture aligns precisely with our method — no over-engineering, ten-year-lasting deliveries, clean documentation. Technical conversations with a Kabyle client go quickly to the point.",
        "Our team includes several engineers trained at Mouloud Mammeri University or who worked in Kabylia before joining Symloop. This cultural continuity changes client-relationship dynamics — fewer framing meetings, more delivery.",
      ] },
      { heading: 'The diaspora tech ecosystem', body: [
        "The Kabyle tech diaspora in Paris, Lyon, Montréal and increasingly Dubai is one of the most active in the world for a population this size. Several CTOs of French and North-American scale-ups are of Kabyle origin. This diaspora invests in its country of origin — early-stage funds, mentorship of local startups, and increasingly entrepreneurial return to Tizi Ouzou itself.",
        "We regularly work at the interface between this diaspora and the local ecosystem — when a Paris-based founder wants to set up a team in Tizi Ouzou, or an Algiers scale-up wants to recruit in the Sebaou valley, we know the market and the right profiles.",
      ] },
    ],
    related: {
      eyebrow: 'Going deeper',
      services: { label: 'Disciplines in Tizi Ouzou', items: [
        { key: 'software-engineering', name: 'Software Engineering' },
        { key: 'ai',                   name: 'Artificial Intelligence' },
        { key: 'mobile',               name: 'Mobile Engineering' },
        { key: 'product',              name: 'Product Engineering' },
      ] },
      insights: { label: 'Related insights', items: [
        { key: 'cost', name: 'The real cost of building software in Algeria' },
        { key: 'erp',  name: 'Custom ERP for Algerian SMEs — beyond Odoo' },
        { key: 'ai',   name: 'AI in production — pragmatic adoption' },
      ] },
    },
    cta: { eyebrow: 'Talk to an engineer based in Algiers', title: 'Run a cooperative, a scale-up or an organization in Tizi Ouzou, in Kabylia? Describe your situation.', button: 'Book a 30-minute call' },
  },
  ar: {
    eyebrow: 'تيزي وزو · القبائل', publishedAt: 'محدّث مايو 2026',
    title: 'سيملوب في تيزي وزو — هندسة لمنطقة القبائل التي تصدّر مهندسيها.',
    dek: 'تيزي وزو من أقوى مجمعات مهندسي الإعلام الآلي في البلد. مهجر تقني في باريس وليون ومونتريال، تكنولوجيا زراعية لزيت الزيتون، تكنولوجيا تعليمية فرنكوفونية — نسيج فريد يتطلّب هندسة تفهم خصوصيته.',
    meta: { one: 'تيزي وزو · ذراع بن خدة · عزازقة', two: '1.1 مليون نسمة', three: 'ساعة واحدة من الجزائر العاصمة' },
    intro: [
      'تيزي وزو معروفة بشيئين لا يتعارضان أبداً: نسيج زراعي تقليدي قديم (زيتون، تين، عنب من وادي الصومام) وتركّز استثنائي لمهندسي الإعلام الآلي المدرَّبين في جامعة مولود معمري الذين يذهبون لاحقاً ليعمّروا فِرَق التكنولوجيا في باريس وليون ومونتريال وبشكل متزايد الجزائر العاصمة. هذه الهوية المزدوجة — تربة قديمة وهندسة طليعية — تحدّد النسيج الاقتصادي للولاية.',
      'هذه الصفحة ليست عرضاً تجارياً. هي صورة تحريرية للعمل الذي نسلّمه في القبائل — للتعاونيات الزراعية والشركات الناشئة المحلية والمؤسسات الثقافية الأمازيغية والمقاولين الذين يغذّون النظام التقني للجزائر العاصمة.',
    ],
    sections: [
      { heading: 'النسيج الاقتصادي القبائلي', body: [
        'يقوم اقتصاد تيزي وزو على ثلاث ركائز محدّدة. **الأولى: التكنولوجيا الزراعية والصناعة الغذائية** — تعاونيات زيت الزيتون، تحويل منتجات التراب، تتبع التصدير، منصات البيع المباشر للمستهلك. **الثانية: التصنيع والمقاولة** — صناعة غذائية، نسيج، إلكترونيات خفيفة، حول ذراع بن خدة والمنطقة الصناعية لوادي عيسي.',
        '**الثالثة: النظام التقني القبائلي** — شركات ناشئة محلية، مستقلون كبار يعملون لعملاء أوروبيين، ومقاولون لشركات ناشئة جزائرية أبعدت جزءاً من هندستها إلى منطقة القبائل لأجل التكلفة والوصول للمواهب. عدة من أكثر الشركات الناشئة تمويلاً في البلد لها مؤسّسون مشاركون قبائليون.',
      ] },
      { heading: 'ما نسلّمه في تيزي وزو', body: [
        'تشمل مهامنا في القبائل ثلاث فئات. **منصات زراعية وتراثية**: تتبع زيت الزيتون من المنتج إلى المستهلك، منصات البيع المباشر للمهجر الأوروبي، شهادة المنشأ، تكامل اللوجستيك للتصدير. **أنظمة للشركات الناشئة**: معمارية خلفية على نطاق واسع، تحسين تكاليف السحابة، MLOps لشركات الذكاء الاصطناعي القبائلية.',
        '**منصات تعليمية**: تكنولوجيا تعليمية فرنكوفونية، منصات دروس عبر الإنترنت، تكامل مع جامعة مولود معمري. لا توجد من بينها مهمة معلّبة. كل واحدة تبدأ باكتشاف ميداني — غالباً في قرى الوادي بدلاً من وسط المدينة.',
      ] },
      { heading: 'الميزة الثقافية القبائلية', body: [
        'الثقافة المهنية القبائلية لها خاصية قوية: الصرامة في التسليم وأخلاقيات هندسة متمركزة على البساطة والمتانة. هذه الثقافة تتوافق بدقّة مع منهجنا — لا هندسة مفرطة، تسليمات تدوم عشر سنوات، توثيق نظيف. المحادثات التقنية مع عميل قبائلي تذهب بسرعة إلى الجوهر.',
        'فريقنا يضمّ عدة مهندسين مدرَّبين في جامعة مولود معمري أو عملوا في القبائل قبل الانضمام إلى سيملوب. هذه الاستمرارية الثقافية تغيّر ديناميكيات علاقات العملاء — اجتماعات تأطير أقل، تسليم أكثر.',
      ] },
      { heading: 'النظام التقني للمهجر', body: [
        'المهجر التقني القبائلي في باريس وليون ومونتريال وبشكل متزايد دبي هو من أكثر مهاجر العالم نشاطاً لسكان بهذا الحجم. عدة من رؤساء التقنية في الشركات الناشئة الفرنسية والأمريكية الشمالية من أصل قبائلي. هذا المهجر يستثمر في بلده الأصلي — صناديق مرحلة مبكرة، إرشاد للشركات الناشئة المحلية، وعودة ريادية متزايدة إلى تيزي وزو نفسها.',
        'نعمل بانتظام عند نقطة التواصل بين هذا المهجر والنظام المحلي — عندما يريد مؤسس مقرّه باريس تشكيل فريق في تيزي وزو، أو شركة ناشئة جزائرية توظيف في وادي الصومام، نعرف السوق والملفات المناسبة.',
      ] },
    ],
    related: {
      eyebrow: 'لقراءة المزيد',
      services: { label: 'التخصصات في تيزي وزو', items: [
        { key: 'software-engineering', name: 'هندسة البرمجيات' },
        { key: 'ai',                   name: 'الذكاء الاصطناعي' },
        { key: 'mobile',               name: 'هندسة الجوال' },
        { key: 'product',              name: 'هندسة المنتج' },
      ] },
      insights: { label: 'دراسات ذات صلة', items: [
        { key: 'cost', name: 'التكلفة الحقيقية لتطوير البرمجيات في الجزائر' },
        { key: 'erp',  name: 'ERP مخصص للشركات الصغيرة والمتوسطة الجزائرية — ما بعد Odoo' },
        { key: 'ai',   name: 'الذكاء الاصطناعي في الإنتاج — اعتماد عملي' },
      ] },
    },
    cta: { eyebrow: 'تحدث مع مهندس مقرّه الجزائر العاصمة', title: 'هل تدير تعاونية أو شركة ناشئة أو منظمة في تيزي وزو، في القبائل؟ صف وضعك.', button: 'احجز مكالمة 30 دقيقة' },
  },
};

const placeLd = {
  '@context': 'https://schema.org', '@type': 'LocalBusiness',
  name: 'Symloop — Tizi Ouzou and Kabylia region',
  description: CONTENT.fr.dek,
  url: 'https://symloop.com/locations/tizi-ouzou/',
  image: 'https://symloop.com/sym-logo.png',
  telephone: '+213549575512',
  address: { '@type': 'PostalAddress', streetAddress: 'Algiers HQ — serving Tizi Ouzou and Kabylia', addressLocality: 'Tizi Ouzou', addressRegion: 'Tizi Ouzou', postalCode: '15000', addressCountry: 'DZ' },
  geo: { '@type': 'GeoCoordinates', latitude: 36.7169, longitude: 4.0497 },
  areaServed: [{ '@type': 'City', name: 'Tizi Ouzou' }, { '@type': 'City', name: 'Draâ Ben Khedda' }, { '@type': 'City', name: 'Azazga' }, { '@type': 'AdministrativeArea', name: 'Kabylia' }],
  parentOrganization: { '@type': 'Organization', name: 'Symloop Technology', url: 'https://symloop.com' },
};

const breadcrumbs = [
  { name: 'Home',       url: 'https://symloop.com/' },
  { name: 'Locations',  url: 'https://symloop.com/locations/' },
  { name: 'Tizi Ouzou', url: 'https://symloop.com/locations/tizi-ouzou/' },
];

export default function LocationTiziOuzouPage() {
  return (
    <WilayaPage
      content={CONTENT}
      placeLd={placeLd}
      breadcrumbs={breadcrumbs}
      seoTitle="Software Engineering in Tizi Ouzou — Symloop"
      seoDescription="Editorial portrait of Symloop's work in Tizi Ouzou — Kabyle tech ecosystem, Mouloud Mammeri engineers, agritech, francophone edtech, diaspora tech."
      seoKeywords="agence developpement web tizi ouzou, software engineering tizi ouzou, ingenierie logicielle kabylie, mouloud mammeri university IT, kabyle tech, agritech olive oil algeria, edtech francophone, diaspora tech kabyle, custom erp tizi ouzou"
    />
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
