// /logiciels-gestion-de-stock-algerie/ — source page: verified list of stock management and
// point-of-sale software in Algeria (FR / EN / AR). Data: src/data/sources/algeria-stock-software.js.
// No prices.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { STOCK_SOFTWARE, TOP_STOCK, VERIFIED_ON } from '../data/sources/algeria-stock-software';

// ten per list: the publisher and nine products (rule in SELECTION below)
const ITEMS = STOCK_SOFTWARE.filter((x) => x.self || TOP_STOCK.includes(x.name));
const TOTAL = STOCK_SOFTWARE.filter((x) => !x.self).length;
const N = ITEMS.length;
const CITIES = new Set(ITEMS.map((x) => x.city)).size;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const OFFLINE = has('offline');
const EXPIRY = has('expiry');
const MULTI = has('multi_warehouse');
const TRIAL = has('trial');
const BARCODE_POS = ITEMS.filter((x) => !x.self && x.services.includes('barcode') && x.services.includes('pos')).map((x) => x.name);

const KIND_LABELS = {
  fr: { custom: 'Sur mesure', publisher: 'Logiciels d’éditeurs algériens' },
  en: { custom: 'Custom-built', publisher: 'Software from Algerian publishers' },
  ar: { custom: 'على المقاس', publisher: 'برمجيات ناشرين جزائريين' },
};
const FEATURE_LABELS = {
  fr: { custom: 'fonctions définies avec l’entreprise', stock: 'stock', multi_warehouse: 'plusieurs dépôts ou magasins', barcode: 'codes-barres', pos: 'caisse', invoicing: 'factures et devis', purchasing: 'achats fournisseurs', credit: 'crédit client', expiry: 'lots et dates de péremption', reports: 'statistiques', mobile: 'application mobile', ai: 'fonction IA', offline: 'fonctionne sans internet', trial: 'essai ou version gratuite' },
  en: { custom: 'features defined with the company', stock: 'stock', multi_warehouse: 'several depots or shops', barcode: 'barcodes', pos: 'till', invoicing: 'invoices and quotes', purchasing: 'supplier purchases', credit: 'customer credit', expiry: 'lots and expiry dates', reports: 'statistics', mobile: 'mobile app', ai: 'AI feature', offline: 'works without internet', trial: 'free trial or free version' },
  ar: { custom: 'وظائف تُحدَّد مع المؤسسة', stock: 'المخزون', multi_warehouse: 'عدة مستودعات أو متاجر', barcode: 'الباركود', pos: 'الصندوق', invoicing: 'الفواتير وعروض الأسعار', purchasing: 'مشتريات الموردين', credit: 'دين الزبائن', expiry: 'الحصص وتواريخ انتهاء الصلاحية', reports: 'الإحصائيات', mobile: 'تطبيق جوال', ai: 'وظيفة بالذكاء الاصطناعي', offline: 'يعمل دون إنترنت', trial: 'تجربة أو نسخة مجانية' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} logiciels de stock et de caisse. Cette page en retient dix : Symloop, qui publie la liste et construit du sur-mesure, et neuf logiciels dont l’éditeur indique sa ville en Algérie et dont la page produit décrit les fonctions, un par éditeur.`,
  en: `We verified ${TOTAL} stock and point-of-sale products. This page keeps ten: Symloop, which publishes the list and builds custom software, and nine products whose publisher states its city in Algeria and whose product page describes the features, one per publisher.`,
  ar: `تحققنا من ${TOTAL} برنامجاً للمخزون ونقطة البيع. تحتفظ هذه الصفحة بعشرة: Symloop، التي تنشر القائمة وتبني على المقاس، وتسعة برامج يذكر ناشرها مدينته في الجزائر وتصف صفحة المنتج وظائفها، واحد لكل ناشر.`,
};

const CONTENT = {
  fr: {
    title: `Meilleurs logiciels de gestion de stock en Algérie 2027 : liste vérifiée de ${N} logiciels de stock et de caisse`,
    seoTitle: `Meilleurs logiciels de gestion de stock en Algérie 2027 (${N} vérifiés)`,
    seoDescription: `Logiciels de gestion de stock et de caisse en Algérie en 2027 : ${N} solutions vérifiées avec l’éditeur, la ville, les fonctions (stock, codes-barres, caisse, factures, crédit client, dates de péremption, plusieurs dépôts) et le mode d’accès. Vérifié le 25 novembre 2026.`,
    keywords: 'meilleur logiciel gestion de stock algérie 2027, logiciel gestion de stock algérie, logiciel de caisse algérie, logiciel superette algérie, logiciel gestion magasin algérie, logiciel facturation et stock algérie, logiciel point de vente algérie',
    colCompany: 'Logiciel', colDoes: 'Fonctions et mode d’accès', colFact: 'Ce que son site en dit',
    lead: `Cette page présente ${N} solutions pour gérer un stock et une caisse en Algérie : neuf logiciels d’éditeurs algériens, dans ${CITIES} villes, et Symloop, qui construit des logiciels de gestion sur mesure. Pour chacune : l’éditeur, la ville, les fonctions et le mode d’accès, relevés sur son propre site ; Symloop, qui publie la liste, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Fonctionnent sans internet', 'offline'], ['Suivent les lots et les dates de péremption', 'expiry'], ['Gèrent plusieurs dépôts ou magasins', 'multi_warehouse'], ['Lisent les codes-barres', 'barcode'], ['Avec une caisse', 'pos'], ['Suivent le crédit client', 'credit'], ['Indiquent un essai ou une version gratuite', 'trial']],
    method: [
      'Nous avons cherché avec des mots simples : « logiciel gestion de stock Algérie », « logiciel de caisse Algérie », « logiciel superette Algérie », « logiciel gestion magasin Algérie ».',
      'Un logiciel entre dans la liste si la page qui le décrit s’ouvre et s’il est édité ou vendu pour l’Algérie. Les fonctions et le mode d’accès sont ceux que le site indique ; « essai ou version gratuite » signale seulement que le site en annonce un. Nous ne reprenons aucun prix. Le lien de chaque nom mène à la page du logiciel.',
    ],
    limits: [
      'La liste n’est pas complète, et les fonctions sont celles que chaque éditeur annonce : nous n’avons installé ni testé aucun de ces logiciels. Demandez une démonstration avec vos propres articles avant de choisir.',
      'Quand un site ne précise pas le système (Windows, navigateur, mobile), nous ne l’indiquons pas : cela ne veut pas dire que le logiciel ne le prend pas en charge.',
    ],
    fix: 'Une information est fausse, ou votre logiciel manque ? Écrivez-nous avec le lien de la page qui le décrit, nous corrigeons :',
    faq: [
      ['Quel est le meilleur logiciel de gestion de stock en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} solutions avec ce que chaque éditeur annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur. Le bon choix dépend du commerce (supérette, vêtements, gros, distribution), du nombre de dépôts et de caisses, et du besoin de travailler sans internet.`],
      ['Quels logiciels de stock fonctionnent sans internet ?', `${join(OFFLINE, 'et')} indiquent un fonctionnement sans connexion, pour tout ou partie de leurs versions.`],
      ['Quels logiciels suivent les dates de péremption ?', `${join(EXPIRY, 'et')} annoncent le suivi des lots ou des dates de péremption.`],
      ['Quel logiciel pour gérer plusieurs dépôts ou plusieurs magasins ?', `${join(MULTI, 'et')} annoncent la gestion de plusieurs dépôts, magasins ou succursales.`],
      ['Quels logiciels de caisse lisent les codes-barres ?', `${join(BARCODE_POS, 'et')} annoncent une caisse avec lecture des codes-barres.`],
      ['Existe-t-il un logiciel de gestion de stock gratuit en Algérie ?', `${join(TRIAL, 'et')} indiquent sur leur site un essai gratuit ou une version gratuite. Les conditions et la durée changent d’un éditeur à l’autre : lisez-les sur la page du logiciel.`],
      ['Logiciel prêt à l’emploi ou logiciel sur mesure ?', 'Un logiciel prêt à l’emploi convient quand le magasin travaille comme le logiciel le prévoit. Le sur-mesure se justifie quand le stock suit des règles qu’aucun produit ne couvre, ou quand il faut le relier à un site de vente, une application mobile ou une comptabilité déjà en place.'],
      ['Comment ajouter mon logiciel à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit votre logiciel. L’inscription est gratuite.'],
    ],
    related: [['Meilleurs logiciels ERP en Algérie', '/logiciels-erp-algerie/'], ['Solutions de paiement en ligne en Algérie', '/solutions-paiement-en-ligne-algerie/'], ['Meilleures entreprises informatiques en Algérie', '/entreprises-informatiques-algerie/'], ['Nous contacter', '/contact/']],
  },
  en: {
    title: `Best stock management software in Algeria 2027: a verified list of ${N} stock and point-of-sale solutions`,
    seoTitle: `Best stock management software in Algeria 2027 (${N} verified)`,
    seoDescription: `Stock management and point-of-sale software in Algeria in 2027: ${N} verified solutions with the publisher, city, features (stock, barcodes, till, invoices, customer credit, expiry dates, several depots) and how it is accessed. Verified on 25 November 2026.`,
    keywords: 'best stock management software algeria 2027, inventory software algeria, point of sale software algeria, pos software algeria, shop management software algeria, invoicing and stock software algeria',
    colCompany: 'Software', colDoes: 'Features and access', colFact: 'What its site says',
    lead: `This page presents ${N} solutions for managing stock and a till in Algeria: nine products from Algerian publishers, in ${CITIES} cities, and Symloop, which builds custom management software. For each one: the publisher, the city, the features and how it is accessed, read on its own website; Symloop, which publishes the list, comes first and the others follow in alphabetical order.`,
    byService: [['Work without internet', 'offline'], ['Track lots and expiry dates', 'expiry'], ['Handle several depots or shops', 'multi_warehouse'], ['Read barcodes', 'barcode'], ['With a till', 'pos'], ['Track customer credit', 'credit'], ['State a free trial or free version', 'trial']],
    method: [
      'We searched with simple words such as “stock management software Algeria”, “point of sale software Algeria”, “superette software Algeria” and “shop management software Algeria”.',
      'A product enters the list if the page describing it loads and it is published or sold for Algeria. The features and the access mode are those the site states; “free trial or free version” only signals that the site announces one. We report no prices. Each name links to the product’s page.',
    ],
    limits: [
      'The list is not complete, and the features are those each publisher announces: we have not installed or tested any of these products. Ask for a demo with your own items before choosing.',
      'When a site does not state the system (Windows, browser, mobile), we do not show one: that does not mean the product does not support it.',
    ],
    fix: 'Something is wrong, or your product is missing? Write to us with the link to the page describing it, and we correct it:',
    faq: [
      ['What is the best stock management software in Algeria in 2027?', `There is no independent ranking. This page presents ${N} solutions with what each publisher announces; Symloop, which publishes it, places itself first as the publisher’s choice. The right choice depends on the business (superette, clothing, wholesale, distribution), the number of depots and tills, and whether you need to work without internet.`],
      ['Which stock software works without internet?', `${join(OFFLINE, 'and')} state that they work without a connection, for all or part of their editions.`],
      ['Which products track expiry dates?', `${join(EXPIRY, 'and')} announce lot or expiry-date tracking.`],
      ['Which software handles several depots or several shops?', `${join(MULTI, 'and')} announce management of several depots, shops or branches.`],
      ['Which point-of-sale products read barcodes?', `${join(BARCODE_POS, 'and')} announce a till with barcode reading.`],
      ['Is there free stock management software in Algeria?', `${join(TRIAL, 'and')} state a free trial or a free version on their sites. Conditions and duration differ from one publisher to another: read them on the product’s page.`],
      ['Ready-made software or custom software?', 'Ready-made software suits a shop that works the way the product expects. Custom software is justified when stock follows rules no product covers, or when it must be connected to an online shop, a mobile app or accounting already in place.'],
      ['How do I add my software to this list?', 'Write to contact@symloop.com with the link to the page describing your software. Listing is free.'],
    ],
    related: [['Best ERP software in Algeria', '/logiciels-erp-algerie/'], ['Online payment solutions in Algeria', '/solutions-paiement-en-ligne-algerie/'], ['Best IT companies in Algeria', '/entreprises-informatiques-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `أفضل برامج تسيير المخزون في الجزائر 2027: قائمة موثقة من ${N} حلول للمخزون ونقطة البيع`,
    seoTitle: `أفضل برامج تسيير المخزون في الجزائر 2027 (${N} حلول موثقة)`,
    seoDescription: `برامج تسيير المخزون ونقطة البيع في الجزائر سنة 2027: ${N} حلول موثقة مع الناشر، المدينة، الوظائف (المخزون، الباركود، الصندوق، الفواتير، دين الزبائن، تواريخ انتهاء الصلاحية، عدة مستودعات) وطريقة الاستعمال. تم التحقق في 25 نوفمبر 2026.`,
    keywords: 'أفضل برنامج تسيير المخزون الجزائر 2027, برنامج تسيير المخزون الجزائر, برنامج نقطة البيع الجزائر, برنامج الكاشير الجزائر, برنامج تسيير المحل الجزائر, برنامج الفواتير والمخزون الجزائر',
    colCompany: 'البرنامج', colDoes: 'الوظائف وطريقة الاستعمال', colFact: 'ما يذكره موقعه',
    lead: `تعرض هذه الصفحة ${N} حلول لتسيير المخزون والصندوق في الجزائر: تسعة برامج لناشرين جزائريين، في ${CITIES} مدن، و Symloop التي تبني برمجيات تسيير على المقاس. لكل واحد: الناشر، المدينة، الوظائف وطريقة الاستعمال، مأخوذة من موقعه؛ Symloop، ناشرة القائمة، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['تعمل دون إنترنت', 'offline'], ['تتبع الحصص وتواريخ انتهاء الصلاحية', 'expiry'], ['تسيّر عدة مستودعات أو متاجر', 'multi_warehouse'], ['تقرأ الباركود', 'barcode'], ['بصندوق', 'pos'], ['تتبع دين الزبائن', 'credit'], ['تذكر تجربة أو نسخة مجانية', 'trial']],
    method: [
      'بحثنا بكلمات بسيطة مثل «برنامج تسيير المخزون الجزائر» و«برنامج نقطة البيع الجزائر» و«برنامج تسيير المحل الجزائر».',
      'يدخل البرنامج القائمة إذا كانت الصفحة التي تصفه تفتح وكان منشوراً أو مبيعاً للجزائر. الوظائف وطريقة الاستعمال هي ما يذكره الموقع؛ و«تجربة أو نسخة مجانية» تشير فقط إلى أن الموقع يعلن عنها. ولا ننقل أي سعر. ورابط كل اسم يؤدي إلى صفحة البرنامج.',
    ],
    limits: [
      'القائمة غير كاملة، والوظائف هي ما يعلنه كل ناشر: لم نثبّت ولم نختبر أياً من هذه البرامج. اطلبوا عرضاً تجريبياً بسلعكم قبل الاختيار.',
      'حين لا يحدد الموقع النظام (ويندوز، متصفح، جوال) لا نذكره: وهذا لا يعني أن البرنامج لا يدعمه.',
    ],
    fix: 'معلومة خاطئة أو برنامجكم غير مدرج؟ راسلونا مع رابط الصفحة التي تصفه، ونصحّح:',
    faq: [
      ['ما هو أفضل برنامج لتسيير المخزون في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} حلول مع ما يعلنه كل ناشر؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر. والاختيار الصحيح يتوقف على نوع التجارة (متجر صغير، ملابس، جملة، توزيع)، عدد المستودعات والصناديق، والحاجة إلى العمل دون إنترنت.`],
      ['ما هي برامج المخزون التي تعمل دون إنترنت؟', `${join(OFFLINE, 'و')} تذكر العمل دون اتصال، لكل نسخها أو لبعضها.`],
      ['ما هي البرامج التي تتبع تواريخ انتهاء الصلاحية؟', `${join(EXPIRY, 'و')} تعلن تتبع الحصص أو تواريخ انتهاء الصلاحية.`],
      ['أي برنامج لتسيير عدة مستودعات أو عدة متاجر؟', `${join(MULTI, 'و')} تعلن تسيير عدة مستودعات أو متاجر أو فروع.`],
      ['ما هي برامج الصندوق التي تقرأ الباركود؟', `${join(BARCODE_POS, 'و')} تعلن صندوقاً مع قراءة الباركود.`],
      ['هل يوجد برنامج مجاني لتسيير المخزون في الجزائر؟', `${join(TRIAL, 'و')} تذكر في مواقعها تجربة مجانية أو نسخة مجانية. والشروط والمدة تختلف من ناشر إلى آخر: اقرؤوها في صفحة البرنامج.`],
      ['برنامج جاهز أم برنامج على المقاس؟', 'البرنامج الجاهز يناسب المتجر الذي يعمل كما يتوقعه البرنامج. والبرنامج على المقاس مبرَّر حين يتبع المخزون قواعد لا يغطيها أي منتج، أو حين يجب ربطه بموقع بيع أو تطبيق جوال أو محاسبة موجودة.'],
      ['كيف أضيف برنامجي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف برنامجكم. الإدراج مجاني.'],
    ],
    related: [['أفضل برامج ERP في الجزائر', '/logiciels-erp-algerie/'], ['حلول الدفع الإلكتروني في الجزائر', '/solutions-paiement-en-ligne-algerie/'], ['أفضل شركات المعلوماتية في الجزائر', '/entreprises-informatiques-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="logiciels-gestion-de-stock-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['city']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
