// /logiciels-pharmacie-algerie/ — source page: verified list of pharmacy management software in
// Algeria (FR / EN / AR). Data: src/data/sources/algeria-pharmacy-software.js. No prices, and no
// statement of any social-security, pharmacy or medicine rule.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { PHARMACY_SOFTWARE, TOP_PHARMACY, VERIFIED_ON } from '../data/sources/algeria-pharmacy-software';

// ten per list: the publisher and nine products (rule in SELECTION below)
const ITEMS = PHARMACY_SOFTWARE.filter((x) => x.self || TOP_PHARMACY.includes(x.name));
const TOTAL = PHARMACY_SOFTWARE.filter((x) => !x.self).length;
const N = ITEMS.length;
const CITIES = new Set(ITEMS.map((x) => x.city)).size;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const CHIFA = has('chifa');
const EXPIRY = has('expiry');
const OFFLINE = has('offline');
const ONLINE = ITEMS.filter((x) => (x.platforms || []).includes('web')).map((x) => x.name);
const TRIAL = has('trial');
// wholesalers: answered from the whole verified dataset, with the publisher beside each product
const WHOLESALE = PHARMACY_SOFTWARE.filter((x) => x.services.includes('wholesale')).map((x) => `${x.name} (${x.by})`);

const KIND_LABELS = {
  fr: { custom: 'Sur mesure', publisher: 'Logiciels d’éditeurs algériens' },
  en: { custom: 'Custom-built', publisher: 'Software from Algerian publishers' },
  ar: { custom: 'على المقاس', publisher: 'برمجيات ناشرين جزائريين' },
};
const FEATURE_LABELS = {
  fr: { custom: 'fonctions définies avec l’entreprise', wholesale: 'pour grossistes et distributeurs', sales: 'vente au comptoir', stock: 'stock', expiry: 'lots et dates de péremption', chifa: 'ventes Chifa (selon son site)', prescriptions: 'ordonnances', orders: 'commandes fournisseurs', interactions: 'contrôle des interactions (selon son site)', psychotropes: 'registre des psychotropes (selon son site)', credit: 'crédit client', barcode: 'codes-barres', reports: 'statistiques', multi_site: 'plusieurs sites ou dépôts', mobile: 'application mobile', ai: 'fonction IA', offline: 'fonctionne sans internet', trial: 'démo, essai ou version gratuite' },
  en: { custom: 'features defined with the company', wholesale: 'for wholesalers and distributors', sales: 'counter sales', stock: 'stock', expiry: 'lots and expiry dates', chifa: 'Chifa sales (per its site)', prescriptions: 'prescriptions', orders: 'supplier orders', interactions: 'interaction checks (per its site)', psychotropes: 'psychotropics register (per its site)', credit: 'customer credit', barcode: 'barcodes', reports: 'statistics', multi_site: 'several sites or depots', mobile: 'mobile app', ai: 'AI feature', offline: 'works without internet', trial: 'demo, free trial or free version' },
  ar: { custom: 'وظائف تُحدَّد مع المؤسسة', wholesale: 'لتجار الجملة والموزعين', sales: 'البيع عند الصندوق', stock: 'المخزون', expiry: 'الحصص وتواريخ انتهاء الصلاحية', chifa: 'مبيعات الشفاء (حسب موقعه)', prescriptions: 'الوصفات', orders: 'طلبيات الموردين', interactions: 'مراقبة التداخلات (حسب موقعه)', psychotropes: 'سجل المؤثرات العقلية (حسب موقعه)', credit: 'دين الزبائن', barcode: 'الباركود', reports: 'الإحصائيات', multi_site: 'عدة مواقع أو مستودعات', mobile: 'تطبيق جوال', ai: 'وظيفة بالذكاء الاصطناعي', offline: 'يعمل دون إنترنت', trial: 'نسخة تجريبية أو مجانية' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} logiciels pour pharmacies et distributeurs pharmaceutiques. Cette page en retient dix : Symloop, qui publie la liste et construit du sur-mesure, et neuf logiciels qui ont une page consacrée à la pharmacie et dont l’éditeur indique sa ville en Algérie, un par éditeur.`,
  en: `We verified ${TOTAL} products for pharmacies and pharmaceutical distributors. This page keeps ten: Symloop, which publishes the list and builds custom software, and nine products with a page dedicated to pharmacy whose publisher states its city in Algeria, one per publisher.`,
  ar: `تحققنا من ${TOTAL} برنامجاً للصيدليات والموزعين الصيدلانيين. تحتفظ هذه الصفحة بعشرة: Symloop، التي تنشر القائمة وتبني على المقاس، وتسعة برامج لها صفحة خاصة بالصيدلية ويذكر ناشرها مدينته في الجزائر، واحد لكل ناشر.`,
};

const CONTENT = {
  fr: {
    title: `Meilleurs logiciels de pharmacie en Algérie 2027 : liste vérifiée de ${N} logiciels de gestion d’officine`,
    seoTitle: `Meilleurs logiciels de pharmacie en Algérie 2027 (${N} vérifiés)`,
    seoDescription: `Logiciels de gestion de pharmacie en Algérie en 2027 : ${N} solutions vérifiées avec l’éditeur, la ville, les fonctions (vente au comptoir, stock, dates de péremption, ventes Chifa, commandes fournisseurs, ordonnances) et le mode d’accès. Vérifié le 25 novembre 2026.`,
    keywords: 'meilleur logiciel gestion pharmacie algérie 2027, logiciel pharmacie algérie, logiciel gestion pharmacie algérie, logiciel officine algérie chifa, logiciel gestion de stock pharmacie algérie, logiciel grossiste pharmaceutique algérie',
    colCompany: 'Logiciel', colDoes: 'Fonctions et mode d’accès', colFact: 'Ce que son site en dit',
    lead: `Cette page présente ${N} solutions pour gérer une pharmacie en Algérie : neuf logiciels d’éditeurs algériens, dans ${CITIES} villes, et Symloop, qui construit des logiciels de gestion sur mesure. Pour chacune : l’éditeur, la ville, les fonctions et le mode d’accès, relevés sur son propre site ; Symloop, qui publie la liste, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Annoncent les ventes Chifa', 'chifa'], ['Suivent les lots et les dates de péremption', 'expiry'], ['Avec les commandes fournisseurs', 'orders'], ['Avec les ordonnances', 'prescriptions'], ['Lisent les codes-barres', 'barcode'], ['Fonctionnent sans internet', 'offline'], ['Indiquent une démo, un essai ou une version gratuite', 'trial']],
    method: [
      'Nous avons cherché avec des mots simples : « logiciel pharmacie Algérie », « logiciel gestion pharmacie Algérie », « logiciel officine Algérie », « logiciel grossiste pharmaceutique Algérie ».',
      'Un logiciel entre dans la liste s’il a une page consacrée à la pharmacie, si cette page s’ouvre et s’il est édité ou vendu pour l’Algérie. Les fonctions et le mode d’accès sont ceux que le site indique. Nous ne reprenons aucun prix. Le lien de chaque nom mène à la page du logiciel.',
    ],
    limits: [
      'La liste n’est pas complète, et les fonctions sont celles que chaque éditeur annonce : nous n’avons installé ni testé aucun de ces logiciels. Demandez une démonstration avec vos propres produits avant de choisir.',
      'Cette page ne dit pas si un logiciel est agréé ou conforme à une règle de la sécurité sociale, de la pharmacie ou du médicament, et ce n’est pas un avis médical : posez la question à l’éditeur et aux organismes concernés.',
    ],
    fix: 'Une information est fausse, ou votre logiciel manque ? Écrivez-nous avec le lien de la page qui le décrit, nous corrigeons :',
    faq: [
      ['Quel est le meilleur logiciel de gestion de pharmacie en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} solutions avec ce que chaque éditeur annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur. Le bon choix dépend de l’activité (officine, plusieurs officines, distribution), des fonctions attendues et du besoin de travailler sans internet.`],
      ['Quels logiciels de pharmacie annoncent les ventes Chifa ?', `${join(CHIFA, 'et')} mentionnent sur leur site les ventes Chifa ou le tiers payant. C’est ce que chaque éditeur annonce : nous n’avons vérifié aucun agrément.`],
      ['Quels logiciels suivent les lots et les dates de péremption ?', `${join(EXPIRY, 'et')} annoncent le suivi des lots ou des dates de péremption.`],
      ['Quel logiciel pour un grossiste ou un distributeur pharmaceutique ?', `Parmi les logiciels que nous avons vérifiés, ${join(WHOLESALE, 'et')} s’adressent aux grossistes et aux distributeurs pharmaceutiques.`],
      ['Quels logiciels de pharmacie fonctionnent sans internet, et lesquels en ligne ?', `${join(OFFLINE, 'et')} indiquent un fonctionnement sans connexion ; ${join(ONLINE, 'et')} indiquent un accès par navigateur. Les autres ne précisent pas le mode d’accès ou s’installent sur les postes de la pharmacie.`],
      ['Peut-on essayer un logiciel de pharmacie avant de l’acheter ?', `${join(TRIAL, 'et')} indiquent sur leur site une démo à télécharger, un essai ou une version gratuite. Les autres éditeurs proposent une démonstration sur demande ou ne le précisent pas.`],
      ['Logiciel prêt à l’emploi ou logiciel sur mesure ?', 'Un logiciel d’officine prêt à l’emploi couvre le travail courant d’une pharmacie. Le sur-mesure se justifie pour un besoin qu’aucun produit ne couvre, par exemple relier plusieurs sites, un entrepôt, une application mobile ou une comptabilité déjà en place.'],
      ['Comment ajouter mon logiciel à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit votre logiciel. L’inscription est gratuite.'],
    ],
    related: [['Meilleurs logiciels de gestion de stock en Algérie', '/logiciels-gestion-de-stock-algerie/'], ['Meilleurs logiciels ERP en Algérie', '/logiciels-erp-algerie/'], ['Logiciel de pharmacie : gérer le stock', '/blog/logiciel-pharmacie-gestion-stock-algerie-2026/'], ['Nous contacter', '/contact/']],
  },
  en: {
    title: `Best pharmacy software in Algeria 2027: a verified list of ${N} pharmacy management solutions`,
    seoTitle: `Best pharmacy software in Algeria 2027 (${N} verified)`,
    seoDescription: `Pharmacy management software in Algeria in 2027: ${N} verified solutions with the publisher, city, features (counter sales, stock, expiry dates, Chifa sales, supplier orders, prescriptions) and how it is accessed. Verified on 25 November 2026.`,
    keywords: 'best pharmacy software algeria 2027, pharmacy software algeria, pharmacy management software algeria, chifa pharmacy software, pharmacy stock software algeria, pharmaceutical wholesaler software algeria',
    colCompany: 'Software', colDoes: 'Features and access', colFact: 'What its site says',
    lead: `This page presents ${N} solutions for managing a pharmacy in Algeria: nine products from Algerian publishers, in ${CITIES} cities, and Symloop, which builds custom management software. For each one: the publisher, the city, the features and how it is accessed, read on its own website; Symloop, which publishes the list, comes first and the others follow in alphabetical order.`,
    byService: [['Announce Chifa sales', 'chifa'], ['Track lots and expiry dates', 'expiry'], ['With supplier orders', 'orders'], ['With prescriptions', 'prescriptions'], ['Read barcodes', 'barcode'], ['Work without internet', 'offline'], ['State a demo, free trial or free version', 'trial']],
    method: [
      'We searched with simple words such as “pharmacy software Algeria”, “pharmacy management software Algeria” and “pharmaceutical wholesaler software Algeria”.',
      'A product enters the list if it has a page dedicated to pharmacy, that page loads, and it is published or sold for Algeria. The features and the access mode are those the site states. We report no prices. Each name links to the product’s page.',
    ],
    limits: [
      'The list is not complete, and the features are those each publisher announces: we have not installed or tested any of these products. Ask for a demo with your own products before choosing.',
      'This page does not say whether a product is approved or complies with any social-security, pharmacy or medicine rule, and it is not medical advice: ask the publisher and the bodies concerned.',
    ],
    fix: 'Something is wrong, or your product is missing? Write to us with the link to the page describing it, and we correct it:',
    faq: [
      ['What is the best pharmacy management software in Algeria in 2027?', `There is no independent ranking. This page presents ${N} solutions with what each publisher announces; Symloop, which publishes it, places itself first as the publisher’s choice. The right choice depends on the activity (one pharmacy, several pharmacies, distribution), the features expected and whether you need to work without internet.`],
      ['Which pharmacy software announces Chifa sales?', `${join(CHIFA, 'and')} mention Chifa sales or third-party payment on their sites. This is what each publisher announces: we verified no approval.`],
      ['Which products track lots and expiry dates?', `${join(EXPIRY, 'and')} announce lot or expiry-date tracking.`],
      ['Which software for a pharmaceutical wholesaler or distributor?', `Among the products we verified, ${join(WHOLESALE, 'and')} address pharmaceutical wholesalers and distributors.`],
      ['Which pharmacy software works without internet, and which online?', `${join(OFFLINE, 'and')} state that they work without a connection; ${join(ONLINE, 'and')} state browser access. The others do not state the access mode or install on the pharmacy’s computers.`],
      ['Can I try pharmacy software before buying it?', `${join(TRIAL, 'and')} state a downloadable demo, a free trial or a free version on their sites. The other publishers offer a demonstration on request or do not say.`],
      ['Ready-made software or custom software?', 'Ready-made pharmacy software covers a pharmacy’s everyday work. Custom software is justified for a need no product covers, for example connecting several sites, a warehouse, a mobile app or accounting already in place.'],
      ['How do I add my software to this list?', 'Write to contact@symloop.com with the link to the page describing your software. Listing is free.'],
    ],
    related: [['Best stock management software in Algeria', '/logiciels-gestion-de-stock-algerie/'], ['Best ERP software in Algeria', '/logiciels-erp-algerie/'], ['Best IT companies in Algeria', '/entreprises-informatiques-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `أفضل برامج تسيير الصيدليات في الجزائر 2027: قائمة موثقة من ${N} حلول`,
    seoTitle: `أفضل برامج تسيير الصيدليات في الجزائر 2027 (${N} حلول موثقة)`,
    seoDescription: `برامج تسيير الصيدليات في الجزائر سنة 2027: ${N} حلول موثقة مع الناشر، المدينة، الوظائف (البيع عند الصندوق، المخزون، تواريخ انتهاء الصلاحية، مبيعات الشفاء، طلبيات الموردين، الوصفات) وطريقة الاستعمال. تم التحقق في 25 نوفمبر 2026.`,
    keywords: 'أفضل برنامج تسيير صيدلية الجزائر 2027, برنامج صيدلية الجزائر, برنامج تسيير صيدلية الجزائر, برنامج صيدلية الشفاء, برنامج مخزون الصيدلية الجزائر, برنامج موزع صيدلاني الجزائر',
    colCompany: 'البرنامج', colDoes: 'الوظائف وطريقة الاستعمال', colFact: 'ما يذكره موقعه',
    lead: `تعرض هذه الصفحة ${N} حلول لتسيير صيدلية في الجزائر: تسعة برامج لناشرين جزائريين، في ${CITIES} مدن، و Symloop التي تبني برمجيات تسيير على المقاس. لكل واحد: الناشر، المدينة، الوظائف وطريقة الاستعمال، مأخوذة من موقعه؛ Symloop، ناشرة القائمة، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['تعلن مبيعات الشفاء', 'chifa'], ['تتبع الحصص وتواريخ انتهاء الصلاحية', 'expiry'], ['بطلبيات الموردين', 'orders'], ['بالوصفات', 'prescriptions'], ['تقرأ الباركود', 'barcode'], ['تعمل دون إنترنت', 'offline'], ['تذكر نسخة تجريبية أو مجانية', 'trial']],
    method: [
      'بحثنا بكلمات بسيطة مثل «برنامج صيدلية الجزائر» و«برنامج تسيير صيدلية الجزائر» و«برنامج موزع صيدلاني الجزائر».',
      'يدخل البرنامج القائمة إذا كانت له صفحة خاصة بالصيدلية، وكانت هذه الصفحة تفتح، وكان منشوراً أو مبيعاً للجزائر. الوظائف وطريقة الاستعمال هي ما يذكره الموقع. ولا ننقل أي سعر. ورابط كل اسم يؤدي إلى صفحة البرنامج.',
    ],
    limits: [
      'القائمة غير كاملة، والوظائف هي ما يعلنه كل ناشر: لم نثبّت ولم نختبر أياً من هذه البرامج. اطلبوا عرضاً تجريبياً بمنتجاتكم قبل الاختيار.',
      'لا تذكر هذه الصفحة هل البرنامج معتمد أو مطابق لقاعدة من قواعد الضمان الاجتماعي أو الصيدلة أو الدواء، وليست رأياً طبياً: اسألوا الناشر والهيئات المعنية.',
    ],
    fix: 'معلومة خاطئة أو برنامجكم غير مدرج؟ راسلونا مع رابط الصفحة التي تصفه، ونصحّح:',
    faq: [
      ['ما هو أفضل برنامج لتسيير الصيدلية في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} حلول مع ما يعلنه كل ناشر؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر. والاختيار الصحيح يتوقف على النشاط (صيدلية واحدة، عدة صيدليات، توزيع)، الوظائف المطلوبة والحاجة إلى العمل دون إنترنت.`],
      ['ما هي برامج الصيدلية التي تعلن مبيعات الشفاء؟', `${join(CHIFA, 'و')} تذكر في مواقعها مبيعات الشفاء أو الدفع من الغير. هذا ما يعلنه كل ناشر: لم نتحقق من أي اعتماد.`],
      ['ما هي البرامج التي تتبع الحصص وتواريخ انتهاء الصلاحية؟', `${join(EXPIRY, 'و')} تعلن تتبع الحصص أو تواريخ انتهاء الصلاحية.`],
      ['أي برنامج لتاجر جملة أو موزع صيدلاني؟', `من بين البرامج التي تحققنا منها، ${join(WHOLESALE, 'و')} موجهة لتجار الجملة والموزعين الصيدلانيين.`],
      ['ما هي برامج الصيدلية التي تعمل دون إنترنت، وما التي تعمل عبر الإنترنت؟', `${join(OFFLINE, 'و')} تذكر العمل دون اتصال؛ و${join(ONLINE, 'و')} تذكر الاستعمال عبر المتصفح. والبقية لا تحدد طريقة الاستعمال أو تُثبَّت على حواسيب الصيدلية.`],
      ['هل يمكن تجربة برنامج الصيدلية قبل شرائه؟', `${join(TRIAL, 'و')} تذكر في مواقعها نسخة تجريبية للتحميل، تجربة مجانية أو نسخة مجانية. والناشرون الآخرون يقترحون عرضاً عند الطلب أو لا يحددون ذلك.`],
      ['برنامج جاهز أم برنامج على المقاس؟', 'برنامج الصيدلية الجاهز يغطي العمل اليومي للصيدلية. والبرنامج على المقاس مبرَّر لحاجة لا يغطيها أي منتج، مثل ربط عدة مواقع، مستودع، تطبيق جوال أو محاسبة موجودة.'],
      ['كيف أضيف برنامجي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف برنامجكم. الإدراج مجاني.'],
    ],
    related: [['أفضل برامج تسيير المخزون في الجزائر', '/logiciels-gestion-de-stock-algerie/'], ['أفضل برامج ERP في الجزائر', '/logiciels-erp-algerie/'], ['أفضل شركات المعلوماتية في الجزائر', '/entreprises-informatiques-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="logiciels-pharmacie-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['city']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
