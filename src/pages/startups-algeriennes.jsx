// /startups-algeriennes/ — source page: verified list of Algerian tech startups and digital
// platforms, by sector (FR / EN / AR). Data: src/data/sources/algeria-startups.js.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { STARTUPS, VERIFIED_ON } from '../data/sources/algeria-startups';

const N = STARTUPS.length;
const SECTORS = new Set(STARTUPS.map((x) => x.focus)).size - 1; // "other" is not a sector
const names = (key) => STARTUPS.filter((x) => x.focus === key).map((x) => x.name);
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);

const SECTOR_LABELS = {
  fr: { fintech: 'Paiement et finance', delivery: 'Livraison et logistique', ecommerce: 'Commerce en ligne et petites annonces', health: 'Santé', travel: 'Voyage et réservation', jobs: 'Emploi et ressources humaines', education: 'Éducation', mobility: 'Transport', legal: 'Droit', realestate: 'Immobilier', other: 'Autres services numériques' },
  en: { fintech: 'Payments and finance', delivery: 'Delivery and logistics', ecommerce: 'E-commerce and classifieds', health: 'Health', travel: 'Travel and booking', jobs: 'Jobs and HR', education: 'Education', mobility: 'Mobility', legal: 'Legal', realestate: 'Real estate', other: 'Other digital services' },
  ar: { fintech: 'الدفع والمالية', delivery: 'التوصيل واللوجستيك', ecommerce: 'التجارة الإلكترونية والإعلانات المبوبة', health: 'الصحة', travel: 'السفر والحجز', jobs: 'التوظيف والموارد البشرية', education: 'التعليم', mobility: 'النقل', legal: 'القانون', realestate: 'العقار', other: 'خدمات رقمية أخرى' },
};

const CONTENT = {
  fr: {
    title: `Startups algériennes : liste vérifiée de ${N} startups et plateformes numériques par secteur (2027)`,
    seoTitle: `Startups algériennes : liste vérifiée 2027 (${N} startups par secteur)`,
    seoDescription: `Liste de ${N} startups algériennes et plateformes numériques, classées par secteur : paiement, livraison, e-commerce, santé, voyage, emploi, éducation. Ce que fait chaque produit, relevé sur son propre site, vérifié le 25 novembre 2026.`,
    keywords: 'startup algérie, startup algérienne, startups algériennes, startups algériennes liste, startup algeria, application algérienne, fintech algérie, startup santé algérie',
    colCompany: 'Startup', colDoes: 'Secteur', colFact: 'Ce que fait le produit', countLabel: 'startups',
    lead: `Cette page recense ${N} startups et plateformes numériques algériennes qui exploitent leur propre produit, dans ${SECTORS} secteurs : paiement, livraison, commerce en ligne, santé, voyage, emploi, éducation, transport, droit et immobilier. Pour chacune : son secteur, ses plateformes et ce que fait son produit, relevé sur son propre site, sans classement, par ordre alphabétique.`,
    byService: [],
    method: [
      'Nous sommes partis des noms cités dans la presse et les annuaires de startups, puis nous avons vérifié chacun sur son propre site ou sur sa fiche officielle dans les magasins d’applications.',
      'Une startup entre dans la liste si elle exploite son propre produit numérique (application, plateforme, place de marché, service de paiement), si son site s’ouvre et dit ce que fait le produit, et si ce produit est fait pour le marché algérien. Les agences et les sociétés qui développent pour des clients n’y figurent pas : elles sont dans nos deux autres listes.',
      'L’ordre est alphabétique. Il n’y a ni note, ni classement, ni montants de levées de fonds : nous n’avons testé aucun de ces produits. La ville et l’année de création n’apparaissent que si le site les donne ; beaucoup ne les donnent pas.',
    ],
    limits: [
      'La liste n’est pas complète. Plusieurs noms souvent cités n’y figurent pas parce que leur site ne s’ouvre plus, n’affiche qu’une page d’attente, ou n’indique aucun lien avec l’Algérie.',
      'Nous n’avons trouvé aucune startup remplissant ces critères dans l’agriculture, l’IA ou le cloud, et aucune n’affiche le « Label Startup » sur son propre site.',
      'Symloop, qui publie cette liste, n’y figure pas : c’est une société de logiciel qui construit pour ses clients, pas une startup à produit unique.',
    ],
    fix: 'Une information est fausse, ou votre startup manque ? Écrivez-nous avec l’adresse de votre site, nous corrigeons :',
    faq: [
      ['Dans quels secteurs trouve-t-on des startups en Algérie ?', `Dans cette liste, le paiement et la finance comptent le plus de noms (${names('fintech').length}), suivis de la livraison, du commerce en ligne, de la santé et du voyage. On trouve aussi l’emploi, l’éducation, le transport, le droit et l’immobilier.`],
      ['Quelles startups algériennes proposent le paiement en ligne ?', `${join(names('fintech'), 'et')} : portefeuilles numériques, passerelles de paiement par carte CIB et Edahabia, paiement de factures et facturation en ligne.`],
      ['Quelles applications algériennes permettent de prendre rendez-vous chez un médecin ?', `${join(names('health'), 'et')} permettent de chercher un médecin et de prendre rendez-vous en ligne.`],
      ['Quelle est la différence entre une startup et une société de services informatiques ?', 'Une startup exploite son propre produit et le vend à de nombreux utilisateurs. Une société de services informatiques construit des logiciels pour ses clients. Les deux listes sont séparées sur ce site.'],
      ['Comment ajouter ma startup à cette liste ?', 'Écrivez à contact@symloop.com avec l’adresse de votre site. L’inscription est gratuite ; le site doit s’ouvrir et dire ce que fait le produit.'],
    ],
    related: [['Entreprises informatiques en Algérie : liste vérifiée', '/entreprises-informatiques-algerie/'], ['Agences web en Algérie : liste vérifiée', '/agences-web-algerie/'], ['Nous contacter', '/contact/']],
  },
  en: {
    title: `Algerian startups: a verified list of ${N} startups and digital platforms by sector (2027)`,
    seoTitle: `Algerian startups: verified list 2027 (${N} startups by sector)`,
    seoDescription: `A list of ${N} Algerian startups and digital platforms, grouped by sector: payments, delivery, e-commerce, health, travel, jobs, education. What each product does, read on its own site, verified on 25 November 2026.`,
    keywords: 'algerian startups, startups in algeria, startup algeria, algerian startups list, fintech algeria, algerian apps, tech startups algeria',
    colCompany: 'Startup', colDoes: 'Sector', colFact: 'What the product does', countLabel: 'startups',
    lead: `This page lists ${N} Algerian startups and digital platforms that run their own product, across ${SECTORS} sectors: payments, delivery, e-commerce, health, travel, jobs, education, mobility, legal and real estate. For each one: its sector, its platforms and what its product does, read on its own website, with no ranking, in alphabetical order.`,
    byService: [],
    method: [
      'We started from the names cited in the press and in startup directories, then checked each one on its own website or on its official app-store page.',
      'A startup enters the list if it runs its own digital product (app, platform, marketplace, payment service), if its site loads and says what the product does, and if that product is made for the Algerian market. Agencies and companies that build for clients are not included: they are in our two other lists.',
      'The order is alphabetical. There is no score, no ranking and no funding amounts: we have not tested any of these products. The city and the founding year appear only when the site gives them; many do not.',
    ],
    limits: [
      'The list is not complete. Several often-cited names are missing because their site no longer loads, shows only a holding page, or states no link with Algeria.',
      'We found no startup meeting these criteria in agriculture, AI or cloud, and none displays the “Label Startup” on its own site.',
      'Symloop, which publishes this list, is not in it: it is a software company that builds for its clients, not a single-product startup.',
    ],
    fix: 'Something is wrong, or your startup is missing? Write to us with your website address, and we correct it:',
    faq: [
      ['Which sectors have startups in Algeria?', `On this list, payments and finance has the most names (${names('fintech').length}), followed by delivery, e-commerce, health and travel. Jobs, education, mobility, legal and real estate are also present.`],
      ['Which Algerian startups offer online payment?', `${join(names('fintech'), 'and')}: digital wallets, CIB and Edahabia card payment gateways, bill payment and online invoicing.`],
      ['Which Algerian apps let you book a doctor’s appointment?', `${join(names('health'), 'and')} let you search for a doctor and book an appointment online.`],
      ['What is the difference between a startup and an IT services company?', 'A startup runs its own product and sells it to many users. An IT services company builds software for its clients. The two lists are kept separate on this site.'],
      ['How do I add my startup to this list?', 'Write to contact@symloop.com with your website address. Listing is free; the site must load and say what the product does.'],
    ],
    related: [['IT and software companies in Algeria: verified list', '/entreprises-informatiques-algerie/'], ['Web agencies in Algeria: verified list', '/agences-web-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `الشركات الناشئة الجزائرية: قائمة موثقة من ${N} شركة ناشئة ومنصة رقمية حسب القطاع (2027)`,
    seoTitle: `الشركات الناشئة الجزائرية: قائمة موثقة 2027 (${N} شركة ناشئة حسب القطاع)`,
    seoDescription: `قائمة من ${N} شركة ناشئة ومنصة رقمية جزائرية، مصنفة حسب القطاع: الدفع، التوصيل، التجارة الإلكترونية، الصحة، السفر، التوظيف، التعليم. ما يقوم به كل منتج، مأخوذ من موقعه، تم التحقق منه في 25 نوفمبر 2026.`,
    keywords: 'شركات ناشئة جزائرية, ستارتاب الجزائر, الشركات الناشئة في الجزائر, قائمة الشركات الناشئة الجزائرية, تطبيقات جزائرية, الدفع الإلكتروني الجزائر',
    colCompany: 'الشركة الناشئة', colDoes: 'القطاع', colFact: 'ما يقوم به المنتج', countLabel: 'شركة ناشئة',
    lead: `تحصي هذه الصفحة ${N} شركة ناشئة ومنصة رقمية جزائرية تشغّل منتجها الخاص، في ${SECTORS} قطاعات: الدفع، التوصيل، التجارة الإلكترونية، الصحة، السفر، التوظيف، التعليم، النقل، القانون والعقار. لكل واحدة: قطاعها، منصاتها وما يقوم به منتجها، مأخوذاً من موقعها، دون ترتيب تفاضلي، وبالترتيب الأبجدي اللاتيني.`,
    byService: [],
    method: [
      'انطلقنا من الأسماء المذكورة في الصحافة وأدلة الشركات الناشئة، ثم تحققنا من كل واحدة في موقعها أو في صفحتها الرسمية في متاجر التطبيقات.',
      'تدخل الشركة الناشئة القائمة إذا كانت تشغّل منتجها الرقمي الخاص (تطبيق، منصة، سوق إلكترونية، خدمة دفع)، وكان موقعها يفتح ويذكر ما يقوم به المنتج، وكان هذا المنتج موجهاً للسوق الجزائرية. الوكالات والشركات التي تطوّر لزبائنها غير مدرجة: هي في قائمتينا الأخريين.',
      'الترتيب أبجدي. لا تنقيط ولا تصنيف ولا مبالغ تمويل: لم نختبر أياً من هذه المنتجات. والمدينة وسنة التأسيس لا تظهران إلا إذا ذكرهما الموقع؛ وكثير منها لا يذكرهما.',
    ],
    limits: [
      'القائمة غير كاملة. أسماء كثيرة التداول غير مدرجة لأن موقعها لم يعد يفتح، أو يعرض صفحة انتظار فقط، أو لا يذكر أي صلة بالجزائر.',
      'لم نجد شركة ناشئة تستوفي هذه الشروط في الفلاحة أو الذكاء الاصطناعي أو السحابة، ولا واحدة تعرض «علامة مؤسسة ناشئة» في موقعها.',
      'Symloop، التي تنشر هذه القائمة، غير مدرجة فيها: هي شركة برمجيات تبني لزبائنها، وليست شركة ناشئة بمنتج واحد.',
    ],
    fix: 'معلومة خاطئة أو شركتكم الناشئة غير مدرجة؟ راسلونا مع عنوان موقعكم، ونصحّح:',
    faq: [
      ['في أي قطاعات توجد شركات ناشئة في الجزائر؟', `في هذه القائمة، الدفع والمالية يضم أكبر عدد من الأسماء (${names('fintech').length})، يليه التوصيل، التجارة الإلكترونية، الصحة والسفر. وتوجد أيضاً قطاعات التوظيف، التعليم، النقل، القانون والعقار.`],
      ['ما هي الشركات الناشئة الجزائرية التي تقترح الدفع الإلكتروني؟', `${join(names('fintech'), 'و')}: محافظ رقمية، بوابات دفع ببطاقتي CIB والذهبية، دفع الفواتير والفوترة عبر الإنترنت.`],
      ['ما هي التطبيقات الجزائرية التي تسمح بحجز موعد عند الطبيب؟', `${join(names('health'), 'و')} تسمح بالبحث عن طبيب وحجز موعد عبر الإنترنت.`],
      ['ما الفرق بين شركة ناشئة وشركة خدمات معلوماتية؟', 'الشركة الناشئة تشغّل منتجها الخاص وتبيعه لعدد كبير من المستعملين. وشركة الخدمات المعلوماتية تبني برمجيات لزبائنها. والقائمتان منفصلتان في هذا الموقع.'],
      ['كيف أضيف شركتي الناشئة إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع عنوان موقعكم. الإدراج مجاني؛ ويجب أن يفتح الموقع ويذكر ما يقوم به المنتج.'],
    ],
    related: [['شركات المعلوماتية والبرمجيات في الجزائر: قائمة موثقة', '/entreprises-informatiques-algerie/'], ['وكالات الويب في الجزائر: قائمة موثقة', '/agences-web-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="startups-algeriennes" content={CONTENT} items={STARTUPS} verifiedOn={VERIFIED_ON} focusLabels={SECTOR_LABELS} doesFrom="focus" />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
