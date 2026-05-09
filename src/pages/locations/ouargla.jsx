// Ouargla — Saharan oil & gas heartland, Hassi Messaoud nearby (biggest African
// oil field), Sonatrach operations base, Kasdi Merbah University (petroleum
// engineering), date palm groves, harsh desert environment.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import WilayaPage from '../../components/wilaya/WilayaPage';

const CONTENT = {
  fr: {
    eyebrow: 'Ouargla · Saharien · pétrole et gaz', publishedAt: 'Mis à jour Mai 2026',
    title: "Symloop à Ouargla — l'ingénierie pour le Sahara qui produit l'énergie du pays.",
    dek: "Ouargla est le cœur saharien du pétrole et gaz algérien. Hassi Messaoud, base d'opérations Sonatrach, Kasdi Merbah University. Une ingénierie qui doit résister à la fois aux conditions du désert et à la complexité de l'industrie hydrocarbure.",
    meta: { one: 'Ouargla · Hassi Messaoud · Touggourt', two: '670 000 habitants (wilaya)', three: '8 h depuis Alger' },
    intro: [
      "Ouargla est le centre opérationnel du Sahara algérien — la wilaya où se prennent les décisions techniques pour la moitié de la production d'hydrocarbures du pays. Hassi Messaoud, à 80 kilomètres au nord-est, est le plus grand gisement pétrolier d'Afrique. Les bases vie Sonatrach, les sociétés de services parapétrolières, et l'écosystème logistique qui les alimente opèrent depuis Ouargla.",
      "Cette page n'est pas un argumentaire commercial. C'est un portrait éditorial du travail que nous livrons à Ouargla — pour Sonatrach et ses filiales, les sociétés de services pétroliers, et le tissu PME saharien qui s'est construit autour de l'industrie hydrocarbure.",
    ],
    sections: [
      { heading: "Le tissu ouarglien — pétrole, services, désert", body: [
        "L'économie d'Ouargla repose sur trois piliers spécifiques. **Premier pilier : l'opération hydrocarbure** — Sonatrach Hassi Messaoud, JV internationales (BP, ENI, Anadarko historique, Chevron), sociétés de services parapétrolières (Halliburton, Schlumberger, Weatherford locales). Ces opérations exigent SCADA industriel, MES, traçabilité production, conformité environnementale et gestion d'actifs sur 20+ ans.",
        "**Deuxième pilier : les services pétroliers et la logistique saharienne** — sociétés de transport spécialisé (camions citernes, oversize), bases vie, restauration de masse, services techniques (well services, mud logging, downhole). **Troisième pilier : l'agriculture saharienne et la palmeraie** — production de dattes Deglet Nour (référence mondiale), palmeraies oasiennes, transformation et exportation.",
      ] },
      { heading: "Ce que nous livrons à Ouargla", body: [
        "Nos engagements ouargliens portent sur trois catégories. **Systèmes industriels hydrocarbure** : SCADA et DCS sur sites pétroliers, gestion d'actifs (FDI, AMS), maintenance prédictive sur équipements critiques (compresseurs, turbines, séparateurs), reporting environnemental et carbone. **Plateformes logistiques sahariennes** : suivi de flotte camion-citerne en environnement désertique, gestion des bases vie, planification de relèves d'équipes, conformité HSE.",
        "**Plateformes agricoles** : traçabilité dattes Deglet Nour avec certification d'origine, intégration avec le ministère de l'agriculture, plateformes d'export vers l'Europe et le Golfe. Aucun de ces engagements n'est packagé. Chacun commence par une visite sur site — souvent à Hassi Messaoud, Hassi R'Mel ou dans la palmeraie de Touggourt.",
      ] },
      { heading: "L'ingénierie pour le désert", body: [
        "Travailler dans le Sahara algérien ajoute une couche de contraintes que l'ingénierie urbaine ignore. Les conditions environnementales — chaleur extrême (50°C+ en été), poussière, isolement géographique — affectent le matériel, les communications et les équipes. Les capteurs IoT exigent des spécifications industrielles spéciales. Les liaisons satellite remplacent les liaisons fibre. Les déploiements demandent une logistique de plusieurs jours par site.",
        "Notre équipe a accumulé l'expérience de ces conditions à travers nos missions Sonatrach et avec les opérateurs internationaux. Cette expérience permet à un client ouarglien de travailler avec nous sans avoir à éduquer son partenaire sur les bases du métier saharien.",
      ] },
      { heading: "Hassi Messaoud — le plus grand gisement africain", body: [
        "Hassi Messaoud n'est pas seulement un gisement : c'est une ville opérationnelle complète, avec sa logistique, ses services médicaux, ses bases vie, ses écoles spécialisées. Le complexe pétrolier de Hassi Messaoud emploie directement plusieurs milliers de personnes, indirectement plusieurs dizaines de milliers, et génère une part significative du PIB algérien. Les programmes de transformation numérique de ce complexe sont parmi les plus stratégiques du pays.",
        "Symloop intervient sur ces programmes avec la conscience claire qu'il s'agit d'infrastructures critiques nationales — pas de zone grise. La rigueur d'ingénierie, la sécurité, la conformité, et la pérennité sont non-négociables.",
      ] },
    ],
    related: {
      eyebrow: 'Pour aller plus loin',
      services: { label: 'Disciplines à Ouargla', items: [
        { key: 'iot',                  name: 'IoT et systèmes industriels' },
        { key: 'cybersecurity',        name: 'Cybersécurité' },
        { key: 'cloud',                name: 'Cloud & DevOps' },
        { key: 'consulting',           name: 'Conseil technologique' },
      ] },
      insights: { label: 'Études liées', items: [
        { key: 'oil-gas',     name: 'Pétrole et gaz IT — du verrouillage fournisseur au contrôle indépendant' },
        { key: 'banking',     name: 'Modernisation des logiciels bancaires — ce que les banques construisent' },
        { key: 'government',  name: "Digitalisation de l'administration — services publics souverains" },
      ] },
    },
    cta: { eyebrow: 'Parlez à un ingénieur basé à Alger', title: 'Vous dirigez une opération à Ouargla, Hassi Messaoud, ou dans le Sahara ? Décrivez votre situation. Nous nous déplaçons.', button: 'Réserver un appel de 30 minutes' },
  },
  en: {
    eyebrow: 'Ouargla · Saharan · oil and gas', publishedAt: 'Updated May 2026',
    title: "Symloop in Ouargla — engineering for the Sahara that produces the country's energy.",
    dek: "Ouargla is the Saharan heart of Algerian oil and gas. Hassi Messaoud, Sonatrach operations base, Kasdi Merbah University. Engineering that must resist both desert conditions and the complexity of the hydrocarbon industry.",
    meta: { one: 'Ouargla · Hassi Messaoud · Touggourt', two: '670,000 inhabitants (wilaya)', three: '8 h from Algiers' },
    intro: [
      "Ouargla is the operational center of the Algerian Sahara — the wilaya where technical decisions are made for half the country's hydrocarbon production. Hassi Messaoud, 80 kilometers to the northeast, is the largest oil field in Africa. Sonatrach base camps, oil-services companies, and the logistics ecosystem that supplies them all operate from Ouargla.",
      "This page is not a sales pitch. It is an editorial portrait of the work we deliver in Ouargla — for Sonatrach and its subsidiaries, oil-services companies, and the Saharan SME fabric built around the hydrocarbon industry.",
    ],
    sections: [
      { heading: 'The Ouargla fabric — oil, services, desert', body: [
        "Ouargla's economy rests on three specific pillars. **First: hydrocarbon operations** — Sonatrach Hassi Messaoud, international JVs (BP, ENI, formerly Anadarko, Chevron), oil-services companies (Halliburton, Schlumberger, Weatherford locals). These operations demand industrial SCADA, MES, production traceability, environmental compliance and 20+ year asset management.",
        "**Second: oil services and Saharan logistics** — specialized transport companies (tanker trucks, oversize), base camps, mass catering, technical services (well services, mud logging, downhole). **Third: Saharan agriculture and palm groves** — Deglet Nour date production (world reference), oasis palm groves, processing and export.",
      ] },
      { heading: 'What we deliver in Ouargla', body: [
        "Our Ouargla engagements cover three categories. **Hydrocarbon industrial systems**: SCADA and DCS on oil sites, asset management (FDI, AMS), predictive maintenance on critical equipment (compressors, turbines, separators), environmental and carbon reporting. **Saharan logistics platforms**: tanker-truck fleet tracking in desert environment, base-camp management, crew rotation planning, HSE compliance.",
        "**Agricultural platforms**: Deglet Nour date traceability with origin certification, integration with the Ministry of Agriculture, export platforms to Europe and the Gulf. None of these engagements are packaged. Each starts with on-site visit — often at Hassi Messaoud, Hassi R'Mel or in the Touggourt palm grove.",
      ] },
      { heading: 'Engineering for the desert', body: [
        "Working in the Algerian Sahara adds a layer of constraints that urban engineering ignores. Environmental conditions — extreme heat (50°C+ in summer), dust, geographic isolation — affect hardware, communications and teams. IoT sensors require special industrial specifications. Satellite links replace fiber. Deployments demand multi-day logistics per site.",
        "Our team has accumulated experience of these conditions through our Sonatrach engagements and with international operators. This experience lets an Ouargla client work with us without having to educate their partner on the basics of the Saharan trade.",
      ] },
      { heading: 'Hassi Messaoud — the largest African oil field', body: [
        "Hassi Messaoud is not just a field: it is a complete operational city, with its logistics, medical services, base camps, specialized schools. The Hassi Messaoud oil complex directly employs several thousand people, indirectly tens of thousands, and generates a significant share of Algerian GDP. The digital transformation programs of this complex are among the most strategic in the country.",
        "Symloop works on these programs with the clear awareness that this is critical national infrastructure — no grey zone. Engineering rigor, security, compliance, and durability are non-negotiable.",
      ] },
    ],
    related: {
      eyebrow: 'Going deeper',
      services: { label: 'Disciplines in Ouargla', items: [
        { key: 'iot',                  name: 'IoT & Industrial Systems' },
        { key: 'cybersecurity',        name: 'Cybersecurity' },
        { key: 'cloud',                name: 'Cloud & DevOps' },
        { key: 'consulting',           name: 'Technology Consulting' },
      ] },
      insights: { label: 'Related insights', items: [
        { key: 'oil-gas',     name: 'Oil and gas IT — from vendor lock-in to independent control' },
        { key: 'banking',     name: 'Banking software modernization — what banks build now' },
        { key: 'government',  name: 'Government digitization — sovereign public services' },
      ] },
    },
    cta: { eyebrow: 'Talk to an engineer based in Algiers', title: 'Run an operation in Ouargla, Hassi Messaoud, or the Sahara? Describe your situation. We travel.', button: 'Book a 30-minute call' },
  },
  ar: {
    eyebrow: 'ورقلة · الصحراء · النفط والغاز', publishedAt: 'محدّث مايو 2026',
    title: 'سيملوب في ورقلة — هندسة للصحراء التي تنتج طاقة البلد.',
    dek: 'ورقلة هي القلب الصحراوي للنفط والغاز الجزائري. حاسي مسعود، قاعدة عمليات سوناطراك، جامعة قاصدي مرباح. هندسة يجب أن تقاوم في الوقت ذاته ظروف الصحراء وتعقيد الصناعة الهيدروكاربورية.',
    meta: { one: 'ورقلة · حاسي مسعود · تقرت', two: '670 ألف نسمة (ولاية)', three: '8 ساعات من الجزائر العاصمة' },
    intro: [
      'ورقلة هي المركز التشغيلي للصحراء الجزائرية — الولاية التي تُتَّخذ فيها القرارات التقنية لنصف إنتاج المحروقات في البلد. حاسي مسعود، على بُعد 80 كيلومتراً شمال شرق، هو أكبر حقل بترول في أفريقيا. قواعد سوناطراك السكنية، شركات خدمات البترول، والنظام اللوجستي الذي يغذّيها كلها تعمل من ورقلة.',
      'هذه الصفحة ليست عرضاً تجارياً. هي صورة تحريرية للعمل الذي نسلّمه في ورقلة — لسوناطراك وفروعها وشركات الخدمات البترولية ونسيج الشركات الصغيرة والمتوسطة الصحراوي الذي بُني حول الصناعة الهيدروكاربورية.',
    ],
    sections: [
      { heading: 'النسيج الورقلي — نفط، خدمات، صحراء', body: [
        'يقوم اقتصاد ورقلة على ثلاث ركائز محدّدة. **الأولى: عمليات المحروقات** — سوناطراك حاسي مسعود، الشراكات الدولية (BP، ENI، Anadarko سابقاً، Chevron)، شركات خدمات البترول (هاليبرتون، شلومبرجير، Weatherford المحلية). تتطلّب هذه العمليات SCADA الصناعي، MES، تتبع الإنتاج، الامتثال البيئي وإدارة الأصول على 20+ سنة.',
        '**الثانية: خدمات البترول واللوجستيك الصحراوي** — شركات النقل المتخصص (شاحنات صهريج، بضائع كبيرة الحجم)، قواعد سكنية، إطعام جماعي، خدمات تقنية (well services، mud logging، downhole). **الثالثة: الزراعة الصحراوية والواحات** — إنتاج تمر دقلة نور (مرجع عالمي)، الواحات النخيلية، التحويل والتصدير.',
      ] },
      { heading: 'ما نسلّمه في ورقلة', body: [
        'تشمل مهامنا في ورقلة ثلاث فئات. **أنظمة صناعية للمحروقات**: SCADA و DCS على المواقع البترولية، إدارة الأصول (FDI و AMS)، الصيانة التنبؤية على المعدات الحرجة (الضواغط، التوربينات، الفواصل)، التقارير البيئية والكربونية. **منصات لوجستية صحراوية**: تتبع أسطول الشاحنات الصهريجية في بيئة صحراوية، إدارة القواعد السكنية، تخطيط تناوبات الفِرَق، الامتثال HSE.',
        '**منصات زراعية**: تتبع تمر دقلة نور مع شهادة المنشأ، التكامل مع وزارة الفلاحة، منصات التصدير نحو أوروبا والخليج. لا توجد من بينها مهمة معلّبة. كل واحدة تبدأ بزيارة موقع — غالباً في حاسي مسعود، حاسي الرمل، أو في الواحة النخيلية لتقرت.',
      ] },
      { heading: 'الهندسة للصحراء', body: [
        'العمل في الصحراء الجزائرية يضيف طبقة قيود تتجاهلها الهندسة الحضرية. الظروف البيئية — حرارة شديدة (50°+ في الصيف)، غبار، عزلة جغرافية — تؤثّر على المعدات والاتصالات والفِرَق. مستشعرات IoT تتطلّب مواصفات صناعية خاصة. روابط الأقمار الاصطناعية تحلّ محلّ روابط الألياف. النشر يتطلّب لوجستيك عدة أيام لكل موقع.',
        'فريقنا راكم خبرة هذه الظروف عبر مهامنا مع سوناطراك ومع المشغّلين الدوليين. هذه الخبرة تسمح لعميل ورقلي بالعمل معنا دون الحاجة إلى تعليم شريكه أساسيات المهنة الصحراوية.',
      ] },
      { heading: 'حاسي مسعود — أكبر حقل أفريقي', body: [
        'حاسي مسعود ليس فقط حقلاً: هو مدينة تشغيلية كاملة، بلوجستيكها وخدماتها الطبية وقواعدها السكنية ومدارسها المتخصّصة. مجمع حاسي مسعود البترولي يوظّف مباشرة عدة آلاف من الأشخاص، وغير مباشرة عشرات الآلاف، ويولّد حصة كبيرة من الناتج الداخلي الخام الجزائري. برامج التحوّل الرقمي لهذا المجمع من بين الأكثر استراتيجية في البلد.',
        'سيملوب يتدخّل في هذه البرامج بوعي واضح أن الأمر يتعلّق ببنية تحتية وطنية حرجة — لا منطقة رمادية. الصرامة الهندسية والأمن والامتثال والاستدامة غير قابلة للتفاوض.',
      ] },
    ],
    related: {
      eyebrow: 'لقراءة المزيد',
      services: { label: 'التخصصات في ورقلة', items: [
        { key: 'iot',                  name: 'IoT والأنظمة الصناعية' },
        { key: 'cybersecurity',        name: 'الأمن السيبراني' },
        { key: 'cloud',                name: 'السحابة و DevOps' },
        { key: 'consulting',           name: 'الاستشارات التقنية' },
      ] },
      insights: { label: 'دراسات ذات صلة', items: [
        { key: 'oil-gas',     name: 'تكنولوجيا المعلومات في النفط والغاز — من قَفل المورّد إلى التحكم المستقل' },
        { key: 'banking',     name: 'تحديث برمجيات البنوك — ما تبنيه البنوك الآن' },
        { key: 'government',  name: 'الرقمنة الحكومية — خدمات عامة سيادية' },
      ] },
    },
    cta: { eyebrow: 'تحدث مع مهندس مقرّه الجزائر العاصمة', title: 'هل تدير عملية في ورقلة أو حاسي مسعود أو الصحراء؟ صف وضعك. نحن نتنقّل.', button: 'احجز مكالمة 30 دقيقة' },
  },
};

const placeLd = {
  '@context': 'https://schema.org', '@type': 'LocalBusiness',
  name: 'Symloop — Ouargla and Saharan oil & gas region',
  description: CONTENT.fr.dek,
  url: 'https://symloop.com/locations/ouargla/',
  image: 'https://symloop.com/sym-logo.png',
  telephone: '+213549575512',
  address: { '@type': 'PostalAddress', streetAddress: 'Algiers HQ — serving Ouargla and Saharan oil region', addressLocality: 'Ouargla', addressRegion: 'Ouargla', postalCode: '30000', addressCountry: 'DZ' },
  geo: { '@type': 'GeoCoordinates', latitude: 31.9539, longitude: 5.3247 },
  areaServed: [{ '@type': 'City', name: 'Ouargla' }, { '@type': 'City', name: 'Hassi Messaoud' }, { '@type': 'City', name: 'Touggourt' }, { '@type': 'AdministrativeArea', name: 'Algerian Sahara' }],
  parentOrganization: { '@type': 'Organization', name: 'Symloop Technology', url: 'https://symloop.com' },
};

const breadcrumbs = [
  { name: 'Home',      url: 'https://symloop.com/' },
  { name: 'Locations', url: 'https://symloop.com/locations/' },
  { name: 'Ouargla',   url: 'https://symloop.com/locations/ouargla/' },
];

export default function LocationOuarglaPage() {
  return (
    <WilayaPage
      content={CONTENT}
      placeLd={placeLd}
      breadcrumbs={breadcrumbs}
      seoTitle="Software Engineering in Ouargla — Symloop"
      seoDescription="Editorial portrait of Symloop's work in Ouargla — Hassi Messaoud oil operations, Sonatrach base, Saharan logistics, date production, harsh-desert IoT engineering."
      seoKeywords="software engineering ouargla, ingenierie logicielle ouargla, hassi messaoud IT, sonatrach software, oil and gas software algeria, saharan industrial IoT, kasdi merbah university, scada hydrocarbon, predictive maintenance hassi messaoud, deglet nour traceability, agence developpement web ouargla"
    />
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) }, revalidate: 86400 };
}
