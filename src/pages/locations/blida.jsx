// Blida — "City of Roses", Mitidja agriculture, citrus + olive oil + viticulture,
// pharma + plastics manufacturing, Saâd Dahlab University, 50km feeder to Algiers.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import WilayaPage from '../../components/wilaya/WilayaPage';

const CONTENT = {
  fr: {
    eyebrow: 'Blida · Mitidja agricole', publishedAt: 'Mis à jour Mai 2026',
    title: "Symloop à Blida — l'ingénierie pour la Mitidja, l'agriculture et la pharma.",
    dek: "Blida est le poumon agricole de la Mitidja — agrumes, olives, viticulture, maraîchage — et un pôle pharmaceutique et plastique. À 50 kilomètres d'Alger, c'est aussi une ville-feeder de la capitale qui demande des chaînes d'approvisionnement intégrées.",
    meta: { one: 'Blida · Boufarik · Beni Mered', two: '1 million d\'habitants (wilaya)', three: '1 h depuis Alger' },
    intro: [
      "La Mitidja est la plus grande plaine agricole d'Algérie et Blida en est la capitale. Agrumes (la moitié de la production nationale), olives, viticulture (Mascara historique), maraîchage maraîcher, et industries de transformation associées. À cela s'ajoute un tissu pharmaceutique (Saidal Blida, laboratoires privés) et un secteur plastique manufacturier qui alimente l'industrie algéroise voisine.",
      "Cette page n'est pas un argumentaire commercial. C'est un portrait éditorial du travail que nous livrons à Blida — pour les coopératives agricoles, les laboratoires pharma, les manufactures de plastique et les PME qui composent le tissu de la Mitidja.",
    ],
    sections: [
      { heading: "Le tissu blidéen — Mitidja, pharma, manufacture", body: [
        "L'économie blidéenne repose sur trois piliers. **Premier pilier : l'agriculture de la Mitidja** — agrumiculture (oranges, mandarines, citrons), oléiculture, viticulture, cultures maraîchères. Coopératives, fermes familiales modernes, intégrateurs aval (transformation, embouteillage, exportation). **Deuxième pilier : l'industrie pharmaceutique** — Saidal Blida, laboratoires privés du parc pharma de Blida, distribution régionale.",
        "**Troisième pilier : la manufacture plastique et l'industrie légère** — emballages, composants automobiles plastiques, biens de consommation. Le tissu PME blidéen est dense, jeune (beaucoup d'entreprises créées après 2010) et exigeant en termes de logiciel — ces entreprises ne se contentent plus d'Excel.",
      ] },
      { heading: "Ce que nous livrons à Blida", body: [
        "Nos engagements blidéens portent sur trois catégories. **Plateformes agricoles** : traçabilité agrumes, gestion de coopératives, plateformes de commercialisation directe, intégrations export vers le Golfe et l'Europe. **Systèmes pharma** : conformité réglementaire LPA, traçabilité production, gestion d'entrepôts, intégration distribution. **ERP industriels** pour les manufactures de plastique et les industries légères de la Mitidja.",
        "Aucun de ces engagements n'est packagé. Chacun commence par une discovery sur place — souvent dans une coopérative à Boufarik, un laboratoire à Beni Mered, ou une usine à Bouinan.",
      ] },
      { heading: "L'avantage de la proximité algéroise", body: [
        "Blida est à une heure de route d'Alger. Pour nos missions blidéennes, cette proximité change tout : visite sur site dans la matinée, retour à Alger pour l'après-midi, livraison continue sans contraintes logistiques. C'est aussi un avantage pour nos clients blidéens qui ont des partenaires commerciaux à Alger — leurs systèmes doivent s'intégrer aux plateformes algéroises (banques, ministères, distributeurs nationaux).",
        "Cette intégration capitale-Mitidja est le contexte dominant de nos projets blidéens. Beaucoup de nos clients blidéens ont une partie de leurs équipes commerciales à Alger et leur production en Mitidja — leurs systèmes doivent unifier les deux.",
      ] },
      { heading: "L'écosystème agritech émergent", body: [
        "L'agriculture algérienne est en pleine modernisation, et la Mitidja est en première ligne. Capteurs sol et climat, irrigation pilotée, fertigation, traçabilité phytosanitaire, ventes directes au consommateur urbain (Alger), exportations certifiées. Plusieurs scale-ups agritech algériennes opèrent à Blida ou y ont leurs partenaires producteurs. Notre équipe travaille avec elles à différents stades — du prototype IoT au déploiement multi-fermes.",
      ] },
    ],
    related: {
      eyebrow: 'Pour aller plus loin',
      services: { label: 'Disciplines à Blida', items: [
        { key: 'iot',                  name: 'IoT et systèmes industriels' },
        { key: 'software-engineering', name: 'Ingénierie logicielle' },
        { key: 'cloud',                name: 'Cloud & DevOps' },
        { key: 'consulting',           name: 'Conseil technologique' },
      ] },
      insights: { label: 'Études liées', items: [
        { key: 'erp',  name: "ERP sur mesure pour PME algériennes — au-delà d'Odoo" },
        { key: 'ai',   name: "L'IA en production — adoption pratique" },
        { key: 'cost', name: "Le vrai coût du développement logiciel en Algérie" },
      ] },
    },
    cta: { eyebrow: 'Parlez à un ingénieur basé à Alger', title: 'Vous dirigez une coopérative, un laboratoire, une manufacture en Mitidja ? Décrivez votre situation.', button: 'Réserver un appel de 30 minutes' },
  },
  en: {
    eyebrow: 'Blida · Mitidja agriculture', publishedAt: 'Updated May 2026',
    title: "Symloop in Blida — engineering for the Mitidja, agriculture, and pharma.",
    dek: "Blida is the agricultural lung of the Mitidja — citrus, olives, viticulture, market gardens — and a pharmaceutical and plastics pole. 50 kilometers from Algiers, it is also a feeder city to the capital demanding integrated supply chains.",
    meta: { one: 'Blida · Boufarik · Beni Mered', two: '1 million inhabitants (wilaya)', three: '1 h from Algiers' },
    intro: [
      "The Mitidja is Algeria's largest agricultural plain and Blida is its capital. Citrus (half the national production), olives, viticulture (historic Mascara), market gardens, and associated processing industries. Add to this a pharmaceutical fabric (Saidal Blida, private labs) and a manufacturing plastics sector feeding the neighboring Algiers industry.",
      "This page is not a sales pitch. It is an editorial portrait of the work we deliver in Blida — for agricultural cooperatives, pharma labs, plastics manufacturers and SMEs that make the Mitidja fabric.",
    ],
    sections: [
      { heading: 'The Blida fabric — Mitidja, pharma, manufacturing', body: [
        "Blida's economy rests on three pillars. **First: Mitidja agriculture** — citrus growing (oranges, mandarins, lemons), olive growing, viticulture, market gardens. Cooperatives, modern family farms, downstream integrators (processing, bottling, export). **Second: pharmaceutical industry** — Saidal Blida, private labs of the Blida pharma park, regional distribution.",
        "**Third: plastics manufacturing and light industry** — packaging, automotive plastic components, consumer goods. The Blida SME fabric is dense, young (many companies created post-2010) and demanding in software terms — these businesses no longer settle for Excel.",
      ] },
      { heading: 'What we deliver in Blida', body: [
        "Our Blida engagements cover three categories. **Agricultural platforms**: citrus traceability, cooperative management, direct-marketing platforms, export integrations to the Gulf and Europe. **Pharma systems**: regulatory compliance, production traceability, warehouse management, distribution integration. **Industrial ERPs** for Mitidja plastics manufacturers and light industries.",
        "None of these engagements are packaged. Each starts with on-site discovery — often in a Boufarik cooperative, a Beni Mered lab, or a Bouinan factory.",
      ] },
      { heading: 'The Algiers proximity advantage', body: [
        "Blida is an hour by road from Algiers. For our Blida engagements, this proximity changes everything: on-site visit in the morning, return to Algiers for the afternoon, continuous delivery without logistics constraints. It is also an advantage for our Blida clients who have commercial partners in Algiers — their systems must integrate with Algiers platforms (banks, ministries, national distributors).",
        "This capital-Mitidja integration is the dominant context of our Blida projects. Many of our Blida clients have part of their commercial teams in Algiers and their production in the Mitidja — their systems must unify both.",
      ] },
      { heading: 'The emerging agritech ecosystem', body: [
        "Algerian agriculture is in full modernization, and the Mitidja is on the front line. Soil and climate sensors, controlled irrigation, fertigation, phytosanitary traceability, direct sales to urban consumers (Algiers), certified exports. Several Algerian agritech scale-ups operate in Blida or have producer partners there. Our team works with them at various stages — from IoT prototype to multi-farm deployment.",
      ] },
    ],
    related: {
      eyebrow: 'Going deeper',
      services: { label: 'Disciplines in Blida', items: [
        { key: 'iot',                  name: 'IoT & Industrial Systems' },
        { key: 'software-engineering', name: 'Software Engineering' },
        { key: 'cloud',                name: 'Cloud & DevOps' },
        { key: 'consulting',           name: 'Technology Consulting' },
      ] },
      insights: { label: 'Related insights', items: [
        { key: 'erp',  name: 'Custom ERP for Algerian SMEs — beyond Odoo' },
        { key: 'ai',   name: 'AI in production — pragmatic adoption' },
        { key: 'cost', name: 'The real cost of building software in Algeria' },
      ] },
    },
    cta: { eyebrow: 'Talk to an engineer based in Algiers', title: 'Run a cooperative, a lab, a manufacturer in the Mitidja? Describe your situation.', button: 'Book a 30-minute call' },
  },
  ar: {
    eyebrow: 'البليدة · متيجة الزراعية', publishedAt: 'محدّث مايو 2026',
    title: 'سيملوب في البليدة — هندسة لمتيجة والزراعة والصيدلة.',
    dek: 'البليدة هي الرئة الزراعية لمتيجة — الحمضيات، الزيتون، الكروم، البستنة — وقطب صيدلي وبلاستيكي. على بُعد 50 كيلومتراً من الجزائر العاصمة، هي أيضاً مدينة-مغذّية للعاصمة تتطلّب سلاسل توريد متكاملة.',
    meta: { one: 'البليدة · بوفاريك · بني مراد', two: 'مليون نسمة (ولاية)', three: 'ساعة من الجزائر العاصمة' },
    intro: [
      'متيجة هي أكبر سهل زراعي في الجزائر، والبليدة عاصمتها. الحمضيات (نصف الإنتاج الوطني)، الزيتون، الكروم (مسكرة التاريخية)، البستنة، وصناعات التحويل المرتبطة. يُضاف إلى ذلك نسيج صيدلاني (صيدال البليدة، مختبرات خاصة) وقطاع صناعة بلاستيكية يغذّي الصناعة الجزائرية المجاورة.',
      'هذه الصفحة ليست عرضاً تجارياً. هي صورة تحريرية للعمل الذي نسلّمه في البليدة — للتعاونيات الزراعية والمختبرات الصيدلانية ومصانع البلاستيك والشركات الصغيرة والمتوسطة التي تشكّل نسيج متيجة.',
    ],
    sections: [
      { heading: 'النسيج البليدي — متيجة، صيدلة، تصنيع', body: [
        'يقوم اقتصاد البليدة على ثلاث ركائز. **الأولى: زراعة متيجة** — زراعة الحمضيات (برتقال، مندرين، ليمون)، زراعة الزيتون، الكروم، البستنة. التعاونيات، المزارع العائلية الحديثة، المتكاملون اللاحقون (التحويل، التعبئة، التصدير). **الثانية: الصناعة الصيدلية** — صيدال البليدة، المختبرات الخاصة في الحديقة الصيدلية للبليدة، التوزيع الإقليمي.',
        '**الثالثة: تصنيع البلاستيك والصناعة الخفيفة** — التعبئة، مكوّنات السيارات البلاستيكية، السلع الاستهلاكية. نسيج الشركات الصغيرة والمتوسطة في البليدة كثيف، شاب (الكثير من الشركات المنشأة بعد 2010) ومُلِحّ على البرمجيات — هذه الشركات لم تعد تكتفي بـ Excel.',
      ] },
      { heading: 'ما نسلّمه في البليدة', body: [
        'تشمل مهامنا في البليدة ثلاث فئات. **منصات زراعية**: تتبع الحمضيات، إدارة التعاونيات، منصات التسويق المباشر، تكاملات التصدير نحو الخليج وأوروبا. **أنظمة صيدلانية**: الامتثال التنظيمي، تتبع الإنتاج، إدارة المستودعات، تكامل التوزيع. **ERP صناعية** لمصنعي البلاستيك والصناعات الخفيفة في متيجة.',
        'لا توجد من بينها مهمة معلّبة. كل واحدة تبدأ باكتشاف ميداني — غالباً في تعاونية ببوفاريك، أو مختبر ببني مراد، أو مصنع ببوينان.',
      ] },
      { heading: 'ميزة القرب من الجزائر العاصمة', body: [
        'البليدة على بُعد ساعة بالطريق من الجزائر العاصمة. لمهامنا البليدية، هذا القرب يغيّر كل شيء: زيارة موقع في الصباح، عودة إلى الجزائر العاصمة بعد الظهر، تسليم مستمر دون قيود لوجستية. هي أيضاً ميزة لعملائنا في البليدة الذين لديهم شركاء تجاريون في الجزائر العاصمة — أنظمتهم يجب أن تتكامل مع منصات العاصمة (بنوك، وزارات، موزعون وطنيون).',
        'هذا التكامل عاصمة-متيجة هو السياق المهيمن لمشاريعنا البليدية. كثير من عملائنا في البليدة لديهم جزء من فِرَقهم التجارية في الجزائر العاصمة وإنتاجهم في متيجة — أنظمتهم يجب أن توحّدهما.',
      ] },
      { heading: 'النظام الزراعي التكنولوجي الناشئ', body: [
        'الزراعة الجزائرية في تحديث كامل، ومتيجة في الصف الأول. مستشعرات التربة والمناخ، الري المُتحكَّم به، الإخصاب، التتبع الصحي للنباتات، البيع المباشر للمستهلك الحضري (الجزائر العاصمة)، الصادرات المعتمَدة. عدة شركات ناشئة جزائرية في الزراعة التكنولوجية تعمل في البليدة أو لديها شركاء منتجون هناك. فريقنا يعمل معها في مراحل مختلفة — من النموذج الأولي IoT إلى النشر متعدد المزارع.',
      ] },
    ],
    related: {
      eyebrow: 'لقراءة المزيد',
      services: { label: 'التخصصات في البليدة', items: [
        { key: 'iot',                  name: 'IoT والأنظمة الصناعية' },
        { key: 'software-engineering', name: 'هندسة البرمجيات' },
        { key: 'cloud',                name: 'السحابة و DevOps' },
        { key: 'consulting',           name: 'الاستشارات التقنية' },
      ] },
      insights: { label: 'دراسات ذات صلة', items: [
        { key: 'erp',  name: 'ERP مخصص للشركات الصغيرة والمتوسطة الجزائرية — ما بعد Odoo' },
        { key: 'ai',   name: 'الذكاء الاصطناعي في الإنتاج — اعتماد عملي' },
        { key: 'cost', name: 'التكلفة الحقيقية لتطوير البرمجيات في الجزائر' },
      ] },
    },
    cta: { eyebrow: 'تحدث مع مهندس مقرّه الجزائر العاصمة', title: 'هل تدير تعاونية أو مختبراً أو مصنعاً في متيجة؟ صف وضعك.', button: 'احجز مكالمة 30 دقيقة' },
  },
};

const placeLd = {
  '@context': 'https://schema.org', '@type': 'LocalBusiness',
  name: 'Symloop — Blida and Mitidja',
  description: CONTENT.fr.dek,
  url: 'https://symloop.com/locations/blida/',
  image: 'https://symloop.com/sym-logo.png',
  telephone: '+213549575512',
  address: { '@type': 'PostalAddress', streetAddress: 'Algiers HQ — serving Blida and Mitidja', addressLocality: 'Blida', addressRegion: 'Blida', postalCode: '09000', addressCountry: 'DZ' },
  geo: { '@type': 'GeoCoordinates', latitude: 36.4708, longitude: 2.8278 },
  areaServed: [{ '@type': 'City', name: 'Blida' }, { '@type': 'City', name: 'Boufarik' }, { '@type': 'City', name: 'Beni Mered' }, { '@type': 'AdministrativeArea', name: 'Mitidja' }],
  parentOrganization: { '@type': 'Organization', name: 'Symloop Technology', url: 'https://symloop.com' },
};

const breadcrumbs = [
  { name: 'Home',      url: 'https://symloop.com/' },
  { name: 'Locations', url: 'https://symloop.com/locations/' },
  { name: 'Blida',     url: 'https://symloop.com/locations/blida/' },
];

export default function LocationBlidaPage() {
  return (
    <WilayaPage
      content={CONTENT}
      placeLd={placeLd}
      breadcrumbs={breadcrumbs}
      seoTitle="Software Engineering in Blida — Symloop"
      seoDescription="Editorial portrait of Symloop's work in Blida — Mitidja agriculture, citrus traceability, Saidal pharma, plastics manufacturing, agritech for Algerian agriculture."
      seoKeywords="agence developpement web blida, software engineering blida, ingenierie logicielle blida, agritech mitidja, citrus traceability software, saidal pharma IT, plastics manufacturing software, custom erp blida, mobile app blida"
    />
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
