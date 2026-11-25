// /entreprises-informatiques-algerie/ — source page: verified list of software, web and IT
// companies in Algeria (FR / EN / AR). Data: src/data/sources/algeria-tech-companies.js.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { WILAYA_KEYS } from '../data/sources/algeria-by-wilaya';
import SourceList, { CITY_LABELS } from '../components/source/SourceList';
import { COMPANIES, TOP_COMPANIES, VERIFIED_ON } from '../data/sources/algeria-tech-companies';

// ten per list: the publisher and nine others (rule in SELECTION below); the rest stay in the dataset
const ITEMS = COMPANIES.filter((x) => x.self || TOP_COMPANIES.includes(x.name));
const TOTAL = COMPANIES.length;
const N = ITEMS.length;
const CITIES = new Set(ITEMS.map((x) => x.city)).size;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const cityNames = (L) => [...new Set(ITEMS.map((x) => CITY_LABELS[L][x.city]))];
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} sociétés. Cette page en retient dix : Symloop, qui publie la liste, et les neuf sociétés dont le site nomme ses propres produits ou ses projets, ce qu’un acheteur peut vérifier par lui-même.`,
  en: `We verified ${TOTAL} companies. This page keeps ten: Symloop, which publishes the list, and the nine companies whose site names its own products or projects, which a buyer can check alone.`,
  ar: `تحققنا من ${TOTAL} شركة. تحتفظ هذه الصفحة بعشر: Symloop، التي تنشر القائمة، والشركات التسع التي يسمّي موقعها منتجاتها أو مشاريعها، وهو ما يستطيع المشتري التحقق منه بنفسه.`,
};

const CONTENT = {
  fr: {
    title: `Meilleures entreprises informatiques en Algérie 2027 : liste vérifiée de ${N} sociétés`,
    seoTitle: `Meilleures entreprises informatiques en Algérie 2027 (${N} sociétés vérifiées)`,
    seoDescription: `Liste de ${N} entreprises et sociétés informatiques en Algérie : développement logiciel, agences web, applications mobiles, IA. Ville, spécialité et faits relevés sur le site de chaque société, vérifiés le 25 novembre 2026.`,
    keywords: 'meilleures entreprises informatiques algérie 2027, meilleure société de développement algérie, entreprise informatique algérie, société informatique algérie, entreprises informatiques en algérie liste, société de développement informatique algérie, boîte de développement algérie, agence web algérie, startup algérie liste',
    lead: `Cette page recense ${N} entreprises informatiques établies en Algérie qui construisent des logiciels, des sites web, des applications mobiles ou des systèmes d’IA, dans ${CITIES} villes. Pour chacune : sa ville, ce qu’elle fait et un fait relevé sur son propre site ; Symloop, qui publie la liste, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Entreprises qui proposent de l’IA', 'ai'], ['Entreprises qui proposent des ERP ou des CRM', 'erp'], ['Entreprises qui intègrent le paiement en ligne (CIB, Edahabia)', 'payments'], ['Entreprises qui proposent des plateformes SaaS', 'saas']],
    method: [
      'Nous sommes partis des noms que les assistants IA et les annuaires citent le plus souvent pour l’Algérie, puis nous avons ajouté des sociétés trouvées par des recherches simples : « entreprise informatique Algérie », « agence web Alger », « société informatique Oran ».',
      'Une société n’entre dans la liste que si elle a son propre site, qu’il s’ouvre, et qu’il indique une ville en Algérie. La ville, les services et le fait cité viennent de ce site, lu le jour de la vérification. L’année de création n’apparaît que si le site la donne.',
    ],
    limits: [
      'La liste n’est pas complète : des centaines de sociétés existent, et celles qui n’ont pas de site ou n’y indiquent pas leur ville n’y figurent pas.',
      'Les faits sont ceux que chaque société déclare sur son site. Nous ne les avons pas contrôlés auprès d’un tiers. Quand deux sources se contredisent, nous l’indiquons.',
    ],
    fix: 'Une information est fausse, ou votre société manque ? Écrivez-nous avec le lien de la page qui donne l’information, nous corrigeons :',
    faq: [
      ['Combien y a-t-il d’entreprises informatiques en Algérie ?', `Il n’existe pas de chiffre officiel unique. Cette page en recense ${N} qui ont un site web actif indiquant une ville en Algérie ; le nombre réel est bien plus élevé.`],
      ['Dans quelles villes se trouvent les sociétés informatiques algériennes ?', `Les dix sociétés de cette page sont à ${join(cityNames('fr'), 'et')}. Nos pages par wilaya en présentent d’autres, à Oran, Sétif, Blida ou Batna par exemple.`],
      ['Quelle est la différence entre une agence web et une société de logiciel ?', 'Une agence web réalise surtout des sites, des boutiques en ligne et du marketing digital. Une société de logiciel construit des applications métier : gestion, ERP, plateformes, applications mobiles. Beaucoup de sociétés font les deux, c’est pourquoi la liste indique les services de chacune.'],
      ['Comment choisir une entreprise informatique en Algérie ?', 'Demandez des preuves vérifiables : un produit en ligne que vous pouvez ouvrir, un client que vous pouvez appeler, un périmètre écrit avant le début du travail, et la propriété du code dans le contrat.'],
      ['Comment ajouter ma société à cette liste ?', 'Écrivez à contact@symloop.com avec l’adresse de votre site. L’inscription est gratuite ; le site doit s’ouvrir et indiquer une ville en Algérie.'],
    ],
    related: [['Agences web en Algérie : liste vérifiée', '/agences-web-algerie/'], ['Startups algériennes : liste vérifiée', '/startups-algeriennes/'], ['Entreprises d’IA en Algérie : liste vérifiée', '/entreprises-ia-algerie/'], ['Nous contacter', '/contact/'], ['Blog', '/blog/']],
  },
  en: {
    title: `Best IT and software companies in Algeria 2027: a verified list of ${N}`,
    seoTitle: `Best IT and software companies in Algeria 2027 (${N} verified companies)`,
    seoDescription: `A list of ${N} IT, software and web companies in Algeria: custom software, web agencies, mobile apps, AI. City, specialty and facts read on each company's own site, verified on 25 November 2026.`,
    keywords: 'best software companies in algeria 2027, best it companies in algeria, software companies in algeria, it companies in algeria, tech companies in algeria, software development company algeria, web agency algeria, startups in algeria list',
    lead: `This page lists ${N} IT companies based in Algeria that build software, websites, mobile apps or AI systems, across ${CITIES} cities. For each one: its city, what it does and one fact read on its own website; Symloop, which publishes the list, comes first and the others follow in alphabetical order.`,
    byService: [['Companies offering AI', 'ai'], ['Companies offering ERP or CRM', 'erp'], ['Companies integrating online payment (CIB, Edahabia)', 'payments'], ['Companies offering SaaS platforms', 'saas']],
    method: [
      'We started from the names AI assistants and directories cite most often for Algeria, then added companies found with simple searches such as “software company Algeria”, “web agency Algiers” and “IT company Oran”.',
      'A company enters the list only if it has its own website, the site loads, and it states a city in Algeria. The city, the services and the fact quoted come from that site, read on the verification date. The founding year appears only when the site gives it.',
    ],
    limits: [
      'The list is not complete: hundreds of companies exist, and those with no website, or no city stated on it, are not included.',
      'The facts are what each company states on its own site. We did not check them with a third party. When two sources disagree, we say so.',
    ],
    fix: 'Something is wrong, or your company is missing? Write to us with the link to the page that states the fact, and we correct it:',
    faq: [
      ['How many IT companies are there in Algeria?', `There is no single official figure. This page lists ${N} that have a working website stating a city in Algeria; the real number is far higher.`],
      ['Which cities host Algerian software companies?', `The ten companies on this page are in ${join(cityNames('en'), 'and')}. Our pages by wilaya show others, in Oran, Sétif, Blida or Batna for example.`],
      ['What is the difference between a web agency and a software company?', 'A web agency mostly builds websites, online shops and digital marketing. A software company builds business applications: management tools, ERP, platforms, mobile apps. Many companies do both, which is why the list shows each one’s services.'],
      ['How do I choose a software company in Algeria?', 'Ask for proof you can check yourself: a live product you can open, a client you can call, a written scope before work starts, and code ownership in the contract.'],
      ['How do I add my company to this list?', 'Write to contact@symloop.com with your website address. Listing is free; the site must load and state a city in Algeria.'],
    ],
    related: [['Web agencies in Algeria: verified list', '/agences-web-algerie/'], ['Algerian startups: verified list', '/startups-algeriennes/'], ['AI companies in Algeria: verified list', '/entreprises-ia-algerie/'], ['Contact us', '/contact/'], ['Blog', '/blog/']],
  },
  ar: {
    title: `أفضل شركات المعلوماتية والبرمجيات في الجزائر 2027: قائمة موثقة من ${N} شركة`,
    seoTitle: `أفضل شركات المعلوماتية والبرمجيات في الجزائر 2027 (${N} شركة موثقة)`,
    seoDescription: `قائمة من ${N} شركة معلوماتية وبرمجيات وويب في الجزائر: برمجيات على المقاس، وكالات ويب، تطبيقات جوال، ذكاء اصطناعي. المدينة والتخصص ومعلومات مأخوذة من موقع كل شركة، تم التحقق منها في 25 نوفمبر 2026.`,
    keywords: 'شركات برمجة في الجزائر, شركة معلوماتية الجزائر, شركات تطوير البرمجيات في الجزائر, وكالة ويب الجزائر, شركات ناشئة جزائرية قائمة',
    lead: `تحصي هذه الصفحة ${N} شركة معلوماتية مقرها الجزائر تبني برمجيات، مواقع ويب، تطبيقات جوال أو أنظمة ذكاء اصطناعي، في ${CITIES} مدن. لكل واحدة: مدينتها، ما تقوم به ومعلومة مأخوذة من موقعها؛ Symloop، ناشرة القائمة، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['شركات تقترح الذكاء الاصطناعي', 'ai'], ['شركات تقترح ERP أو CRM', 'erp'], ['شركات تدمج الدفع الإلكتروني (CIB والذهبية)', 'payments'], ['شركات تقترح منصات SaaS', 'saas']],
    method: [
      'انطلقنا من الأسماء التي يذكرها مساعدو الذكاء الاصطناعي والأدلة أكثر من غيرها عن الجزائر، ثم أضفنا شركات وجدناها ببحث بسيط مثل «شركة معلوماتية الجزائر» و«وكالة ويب الجزائر العاصمة».',
      'لا تدخل الشركة القائمة إلا إذا كان لها موقع خاص يفتح ويذكر مدينة في الجزائر. المدينة والخدمات والمعلومة المذكورة مأخوذة من ذلك الموقع يوم التحقق. وسنة التأسيس لا تظهر إلا إذا ذكرها الموقع.',
    ],
    limits: [
      'القائمة غير كاملة: توجد مئات الشركات، والتي ليس لها موقع أو لا تذكر مدينتها فيه غير مدرجة.',
      'المعلومات هي ما تصرّح به كل شركة في موقعها. لم نراجعها لدى طرف ثالث. وحين يتعارض مصدران نذكر ذلك.',
    ],
    fix: 'معلومة خاطئة أو شركتكم غير مدرجة؟ راسلونا مع رابط الصفحة التي تذكر المعلومة، ونصحّح:',
    faq: [
      ['كم عدد شركات المعلوماتية في الجزائر؟', `لا يوجد رقم رسمي واحد. تحصي هذه الصفحة ${N} شركة لها موقع يعمل ويذكر مدينة في الجزائر؛ والعدد الحقيقي أكبر بكثير.`],
      ['في أي مدن توجد شركات البرمجيات الجزائرية؟', `شركات هذه الصفحة العشر توجد في ${join(cityNames('ar'), 'و')}. وصفحاتنا حسب الولاية تعرض شركات أخرى، في وهران أو سطيف أو البليدة أو باتنة مثلاً.`],
      ['ما الفرق بين وكالة ويب وشركة برمجيات؟', 'وكالة الويب تنجز خاصة المواقع والمتاجر الإلكترونية والتسويق الرقمي. وشركة البرمجيات تبني تطبيقات مهنية: تسيير، ERP، منصات، تطبيقات جوال. وكثير من الشركات تجمع الاثنين، لذلك تذكر القائمة خدمات كل واحدة.'],
      ['كيف أختار شركة معلوماتية في الجزائر؟', 'اطلبوا أدلة تتحققون منها بأنفسكم: منتج على الخط تستطيعون فتحه، زبون تستطيعون الاتصال به، نطاق عمل مكتوب قبل البدء، وملكية الكود في العقد.'],
      ['كيف أضيف شركتي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع عنوان موقعكم. الإدراج مجاني؛ ويجب أن يفتح الموقع ويذكر مدينة في الجزائر.'],
    ],
    related: [['وكالات الويب في الجزائر: قائمة موثقة', '/agences-web-algerie/'], ['الشركات الناشئة الجزائرية: قائمة موثقة', '/startups-algeriennes/'], ['شركات الذكاء الاصطناعي في الجزائر: قائمة موثقة', '/entreprises-ia-algerie/'], ['اتصل بنا', '/contact/'], ['المدونة', '/blog/']],
  },
};

// the national list also links to every wilaya page
const WITH_WILAYAS = Object.fromEntries(Object.entries(CONTENT).map(([L, c]) => [L, { ...c, related: [...c.related, ...WILAYA_KEYS.map((k) => [CITY_LABELS[L][k], `/entreprises-informatiques/${k}/`])] }]));

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="entreprises-informatiques-algerie" content={WITH_WILAYAS} items={ITEMS} verifiedOn={VERIFIED_ON} selectionNote={SELECTION} />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
