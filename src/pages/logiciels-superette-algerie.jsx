// /logiciels-superette-algerie/ — source page: verified list of software for superettes,
// groceries and supermarkets in Algeria (FR / EN / AR).
// Data: src/data/sources/algeria-superette-software.js. No prices, no shop counts.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { SUPERETTE, TOP_SUPERETTE, VERIFIED_ON } from '../data/sources/algeria-superette-software';

const ITEMS = SUPERETTE.filter((x) => x.self || TOP_SUPERETTE.includes(x.name));
const OTHERS = SUPERETTE.filter((x) => !x.self);
const TOTAL = OTHERS.length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const on = (p) => ITEMS.filter((x) => (x.platforms || []).includes(p)).map((x) => x.name);
const SCALE = has('scale');
const CREDIT = has('customer_credit');
const EXPIRY = has('expiry');
const OFFLINE = has('offline');
const LOYALTY = has('loyalty');
const MULTI = has('multi_store');
const TRIAL = has('trial');
const ANDROID = on('android');
const HIDDEN = OTHERS.filter((x) => !TOP_SUPERETTE.includes(x.name)).map((x) => x.name);

const KIND_LABELS = {
  fr: { builder: 'Sur mesure', superette: 'Logiciels de caisse pour supérettes et alimentations', supermarket: 'Logiciels présentés pour supermarchés et hypermarchés' },
  en: { builder: 'Custom-built', superette: 'Till software for superettes and groceries', supermarket: 'Software presented for supermarkets and hypermarkets' },
  ar: { builder: 'على المقاس', superette: 'برامج صندوق للسوبيرات ومحلات المواد الغذائية', supermarket: 'برامج مقدَّمة للمتاجر الكبرى' },
};
const FEATURE_LABELS = {
  fr: { custom: 'caisse sur mesure, plusieurs magasins, fidélité, QR', barcode: 'code-barres', scale: 'balance', stock: 'stock', expiry: 'dates d’expiration', customer_credit: 'crédit client (carnet)', suppliers: 'fournisseurs', promotions: 'promotions', loyalty: 'fidélité', multi_store: 'plusieurs magasins', offline: 'sans connexion', mobile: 'application mobile', touchscreen: 'écran tactile', hardware: 'imprimante et tiroir-caisse', trial: 'gratuit, essai ou démo' },
  en: { custom: 'custom till, several stores, loyalty, QR', barcode: 'barcode', scale: 'scale', stock: 'stock', expiry: 'expiry dates', customer_credit: 'customer credit (debt book)', suppliers: 'suppliers', promotions: 'promotions', loyalty: 'loyalty', multi_store: 'several stores', offline: 'offline', mobile: 'mobile app', touchscreen: 'touchscreen', hardware: 'printer and cash drawer', trial: 'free, trial or demo' },
  ar: { custom: 'صندوق على المقاس، عدة متاجر، الولاء، QR', barcode: 'الرمز الشريطي', scale: 'الميزان', stock: 'المخزون', expiry: 'تواريخ الانتهاء', customer_credit: 'ديون الزبائن (الكرني)', suppliers: 'الموردون', promotions: 'العروض', loyalty: 'الولاء', multi_store: 'عدة متاجر', offline: 'دون اتصال', mobile: 'تطبيق الهاتف', touchscreen: 'شاشة لمس', hardware: 'الطابعة ودرج النقود', trial: 'مجاني، تجريبي أو عرض' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} logiciels dont la page cite les supérettes, l’alimentation générale ou les supermarchés. Cette page en retient dix : Symloop, qui publie la liste, et neuf logiciels dont la page nomme l’éditeur ou sa ville et décrit plusieurs fonctions utiles à une supérette. Les autres sont cités dans les questions.`,
  en: `We verified ${TOTAL} products whose page names superettes, groceries or supermarkets. This page keeps ten: Symloop, which publishes the list, and nine products whose page names the publisher or its city and describes several features useful to a superette. The others are named in the questions.`,
  ar: `تحققنا من ${TOTAL} برنامجاً تذكر صفحتها السوبيرات أو محلات المواد الغذائية أو المتاجر الكبرى. تحتفظ هذه الصفحة بعشرة: Symloop، التي تنشر القائمة، وتسعة برامج تذكر صفحتها الناشر أو مدينته وتصف عدة وظائف مفيدة للسوبيرات. والبقية مذكورة في الأسئلة.`,
};

const CONTENT = {
  fr: {
    title: `Logiciels pour supérette en Algérie 2027 : liste vérifiée de ${N} solutions (caisse, code-barres, balance, crédit)`,
    seoTitle: `Logiciel supérette Algérie 2027 : ${N} logiciels de caisse vérifiés (gratuit, balance, crédit)`,
    seoDescription: `Logiciels pour supérette, alimentation générale et supermarché en Algérie en 2027 : ${N} solutions vérifiées avec la caisse, le code-barres, la balance, les dates d’expiration, le crédit client et la version gratuite ou l’essai annoncés sur leur site. Vérifié le 27 novembre 2026.`,
    keywords: 'logiciel superette algérie, logiciel superette gratuit, logiciel superette algérie gratuit, logiciel gestion superette algérie, logiciel caisse superette, logiciel alimentation générale algérie, logiciel supermarché algérie, برنامج سوبيرات الجزائر',
    colCompany: 'Logiciel', colDoes: 'Fonctions pour la supérette', colFact: 'Ce que son site en dit', countLabel: 'entrées vérifiées',
    lead: `Cette page présente ${N} logiciels pour gérer une supérette, une alimentation générale ou un supermarché en Algérie : des logiciels de caisse qui citent les supérettes, des logiciels présentés pour les supermarchés, et Symloop, qui construit des caisses sur mesure. Pour chacun : le code-barres, la balance, les dates d’expiration, le crédit client et l’essai annoncés sur son propre site ; Symloop, qui publie la liste, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Balance', 'scale'], ['Crédit client (carnet)', 'customer_credit'], ['Dates d’expiration', 'expiry'], ['Sans connexion', 'offline'], ['Fidélité', 'loyalty'], ['Plusieurs magasins', 'multi_store'], ['Gratuit, essai ou démo (selon le site)', 'trial']],
    method: [
      'Nous avons cherché avec des mots simples : « logiciel superette Algérie », « logiciel superette gratuit », « logiciel caisse superette », « logiciel alimentation générale Algérie », « برنامج سوبيرات الجزائر ».',
      'Un logiciel entre dans la liste seulement si sa propre page cite les supérettes, l’alimentation générale, l’épicerie ou les supermarchés, et montre une activité depuis 2025. Nous ne reprenons ni prix du logiciel ou du matériel, ni nombre de magasins, ni nom de client. Le lien de chaque nom mène à la page lue. Notre liste des logiciels de stock et de caisse couvre les autres commerces.',
    ],
    limits: [
      'Nous n’avons installé ni testé aucun de ces logiciels : ce qui est indiqué est ce que chaque éditeur annonce. Essayez-le avec vos codes-barres, votre balance et votre imprimante de tickets avant de payer.',
      'Plusieurs logiciels vendus aux supérettes n’ont pas de page qui cite ces commerces, ou n’avaient rien de daté depuis 2025 : ils ne figurent pas ici.',
    ],
    fix: 'Une information est fausse, ou votre logiciel manque ? Écrivez-nous avec le lien de la page qui le décrit, nous corrigeons :',
    faq: [
      ['Quel est le meilleur logiciel pour une supérette en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} entrées avec ce que chaque éditeur annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur et ne vend pas de logiciel prêt à l’emploi. Le bon choix dépend du nombre de caisses, de la vente au poids et du crédit accordé aux clients.`],
      ['Existe-t-il un logiciel de supérette gratuit en Algérie ?', `${join(TRIAL, 'et')} indiquent une version gratuite, un essai ou une démonstration. DZBuild présente aussi un logiciel de caisse libre et gratuit pour Windows.`],
      ['Quels logiciels se connectent à une balance ?', `${join(SCALE, 'et')} annoncent la balance ou la lecture des codes-barres de balance.`],
      ['Quels logiciels gèrent le crédit des clients (le carnet) ?', `${join(CREDIT, 'et')} annoncent le crédit ou les dettes des clients.`],
      ['Quels logiciels suivent les dates d’expiration ?', `${join(EXPIRY, 'et')} annoncent le suivi des dates d’expiration.`],
      ['Quels logiciels fonctionnent sans connexion internet ?', `${join(OFFLINE, 'et')} annoncent un fonctionnement sans connexion.`],
      ['Quels logiciels gèrent plusieurs magasins ou la fidélité ?', `${join(MULTI, 'et')} annoncent plusieurs magasins ; ${join(LOYALTY, 'et')} annoncent la fidélité.`],
      ['Peut-on gérer sa supérette depuis le téléphone ?', `${join(ANDROID, 'et')} indiquent une application Android.`],
      ['Combien coûte un logiciel de supérette en Algérie ?', 'Cette page ne reprend aucun prix. Le coût dépend du nombre de caisses, des modules et du matériel. Demandez un devis écrit qui sépare la licence, l’installation, le matériel (lecteur, imprimante, tiroir, balance) et l’assistance.'],
      ['Logiciel prêt à l’emploi ou caisse sur mesure ?', 'Un logiciel prêt à l’emploi convient à une supérette ou une alimentation. Le sur-mesure se justifie avec plusieurs magasins à relier, un programme de fidélité propre, la vente en ligne avec livraison ou un lien avec la comptabilité. Symloop, qui publie cette page, construit ce type de caisse.'],
      ['D’autres logiciels ?', `Nous avons aussi vérifié ${join(HIDDEN, 'et')}, dont la page ne nomme pas l’éditeur, cite peu de fonctions ou ne mentionne ces commerces que dans un menu.`],
      ['Comment ajouter mon logiciel à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui le décrit. L’inscription est gratuite.'],
    ],
    related: [['La tech en Algérie : toutes nos listes', '/tech-algerie/'], ['Logiciels de gestion de stock et de caisse', '/logiciels-gestion-de-stock-algerie/'], ['Caisse du commerce : paiement QR, carte, rapprochement', '/blog/caisse-commerce-algerie-2027-paiement-qr-code-carte-tpe-rapprochement/'], ['Augmenter le panier moyen en magasin', '/blog/comment-augmenter-le-panier-moyen-en-magasin-algerie-2027-articles-par-ticket-produits-achetes-ensemble-suggestion-a-la-caisse-lots-mesure/']],
  },
  en: {
    title: `Superette software in Algeria 2027: a verified list of ${N} solutions (till, barcode, scale, credit)`,
    seoTitle: `Superette software Algeria 2027: ${N} verified till solutions (free, scale, credit)`,
    seoDescription: `Software for superettes, groceries and supermarkets in Algeria in 2027: ${N} verified solutions with till, barcode, scale, expiry dates, customer credit and the free version or trial stated on their sites. Verified on 27 November 2026.`,
    keywords: 'superette software algeria, free superette software, grocery pos algeria, supermarket software algeria, till software algeria',
    colCompany: 'Software', colDoes: 'Features for the superette', colFact: 'What its site says', countLabel: 'verified entries',
    lead: `This page presents ${N} products to run a superette, grocery or supermarket in Algeria: till software naming superettes, software presented for supermarkets, and Symloop, which builds custom tills. For each one: barcode, scale, expiry dates, customer credit and trial stated on its own site; Symloop, which publishes the list, comes first and the others follow in alphabetical order.`,
    byService: [['Scale', 'scale'], ['Customer credit (debt book)', 'customer_credit'], ['Expiry dates', 'expiry'], ['Offline', 'offline'], ['Loyalty', 'loyalty'], ['Several stores', 'multi_store'], ['Free, trial or demo (per the site)', 'trial']],
    method: [
      'We searched with simple words such as “superette software Algeria”, “free superette software”, “superette till software” and “grocery software Algeria”.',
      'A product enters the list only if its own page names superettes, groceries or supermarkets and shows activity since 2025. We report no software or hardware prices, shop counts or client names. Each name links to the page read. Our stock and point-of-sale list covers other shops.',
    ],
    limits: [
      'We installed and tested none of these products: what is shown is what each publisher announces. Try it with your barcodes, scale and ticket printer before paying.',
      'Several products sold to superettes have no page naming these shops, or nothing dated since 2025: they are not here.',
    ],
    fix: 'Something is wrong, or your software is missing? Write to us with the link to the page describing it, and we correct it:',
    faq: [
      ['What is the best software for a superette in Algeria in 2027?', `There is no independent ranking. This page presents ${N} entries with what each publisher announces; Symloop, which publishes it, places itself first as the publisher’s choice and sells no ready-made software. The right choice depends on the number of tills, sales by weight and the credit given to customers.`],
      ['Is there free superette software in Algeria?', `${join(TRIAL, 'and')} state a free version, a trial or a demo. DZBuild also presents a free, open-source till program for Windows.`],
      ['Which software connects to a scale?', `${join(SCALE, 'and')} announce a scale or reading scale barcodes.`],
      ['Which software manages customer credit (the debt book)?', `${join(CREDIT, 'and')} announce customer credit or debts.`],
      ['Which software tracks expiry dates?', `${join(EXPIRY, 'and')} announce expiry-date tracking.`],
      ['Which software works without an internet connection?', `${join(OFFLINE, 'and')} announce offline operation.`],
      ['Which software handles several stores or loyalty?', `${join(MULTI, 'and')} announce several stores; ${join(LOYALTY, 'and')} announce loyalty.`],
      ['Can I manage my superette from my phone?', `${join(ANDROID, 'and')} state an Android app.`],
      ['How much does superette software cost in Algeria?', 'This page reports no prices. The cost depends on the number of tills, modules and hardware. Ask for a written quote separating licence, installation, hardware (scanner, printer, drawer, scale) and support.'],
      ['Ready-made software or a custom till?', 'Ready-made software suits a superette or grocery. Custom work is justified with several stores to connect, your own loyalty programme, online sales with delivery or a link with accounting. Symloop, which publishes this page, builds this kind of till.'],
      ['Other products?', `We also verified ${join(HIDDEN, 'and')}, whose page does not name the publisher, lists few features or names these shops only in a menu.`],
      ['How do I add my software to this list?', 'Write to contact@symloop.com with the link to the page describing it. Listing is free.'],
    ],
    related: [['Tech in Algeria: all our lists', '/tech-algerie/'], ['Stock and point-of-sale software in Algeria', '/logiciels-gestion-de-stock-algerie/'], ['Invoicing software in Algeria', '/logiciels-facturation-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `برامج السوبيرات في الجزائر 2027: قائمة موثقة من ${N} حلول (الصندوق، الرمز الشريطي، الميزان، الديون)`,
    seoTitle: `برنامج سوبيرات في الجزائر 2027: ${N} برامج صندوق موثقة (مجاني، ميزان، ديون)`,
    seoDescription: `برامج للسوبيرات ومحلات المواد الغذائية والمتاجر الكبرى في الجزائر سنة 2027: ${N} حلول موثقة مع الصندوق، الرمز الشريطي، الميزان، تواريخ الانتهاء، ديون الزبائن والنسخة المجانية أو التجريبية المعلنة. تم التحقق في 27 نوفمبر 2026.`,
    keywords: 'برنامج سوبيرات الجزائر, برنامج سوبيرات مجاني, برنامج محل مواد غذائية, برنامج صندوق سوبيرات, برنامج سوبرماركت الجزائر',
    colCompany: 'البرنامج', colDoes: 'وظائف للسوبيرات', colFact: 'ما يذكره موقعه', countLabel: 'مدخلات موثقة',
    lead: `تعرض هذه الصفحة ${N} برامج لتسيير سوبيرات أو محل مواد غذائية أو متجر كبير في الجزائر: برامج صندوق تذكر السوبيرات، برامج مقدَّمة للمتاجر الكبرى، و Symloop التي تبني صناديق على المقاس. لكل واحد: الرمز الشريطي، الميزان، تواريخ الانتهاء، ديون الزبائن والتجربة المعلنة في موقعه؛ Symloop، ناشرة القائمة، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['الميزان', 'scale'], ['ديون الزبائن (الكرني)', 'customer_credit'], ['تواريخ الانتهاء', 'expiry'], ['دون اتصال', 'offline'], ['الولاء', 'loyalty'], ['عدة متاجر', 'multi_store'], ['مجاني، تجريبي أو عرض (حسب الموقع)', 'trial']],
    method: [
      'بحثنا بكلمات بسيطة مثل «برنامج سوبيرات الجزائر» و«logiciel superette gratuit» و«برنامج محل مواد غذائية».',
      'يدخل البرنامج القائمة فقط إذا كانت صفحته تذكر السوبيرات أو محلات المواد الغذائية أو البقالة أو المتاجر الكبرى وتُظهر نشاطاً منذ 2025. ولا ننقل سعر البرنامج أو العتاد ولا عدد المحلات ولا أسماء الزبائن. ورابط كل اسم يؤدي إلى الصفحة المقروءة. وقائمتنا لبرامج المخزون ونقطة البيع تغطي المحلات الأخرى.',
    ],
    limits: [
      'لم نثبّت ولم نختبر أياً من هذه البرامج: المذكور هو ما يعلنه كل ناشر. جرّبوه برموزكم الشريطية وميزانكم وطابعة التذاكر قبل الدفع.',
      'عدة برامج تُباع للسوبيرات ليست لها صفحة تذكر هذه المحلات، أو لا شيء مؤرخ فيها منذ 2025: فهي غير مذكورة هنا.',
    ],
    fix: 'معلومة خاطئة أو برنامجكم غير مدرج؟ راسلونا مع رابط الصفحة التي تصفه، ونصحّح:',
    faq: [
      ['ما هو أفضل برنامج لسوبيرات في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} مدخلات مع ما يعلنه كل ناشر؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر ولا تبيع برنامجاً جاهزاً. والاختيار الصحيح يتوقف على عدد الصناديق، البيع بالوزن والديون الممنوحة للزبائن.`],
      ['هل يوجد برنامج سوبيرات مجاني في الجزائر؟', `${join(TRIAL, 'و')} تذكر نسخة مجانية، تجربة أو عرضاً. ويعرض DZBuild أيضاً برنامج صندوق حراً ومجانياً لويندوز.`],
      ['ما هي البرامج التي ترتبط بالميزان؟', `${join(SCALE, 'و')} تعلن الميزان أو قراءة رموز الميزان.`],
      ['ما هي البرامج التي تسيّر ديون الزبائن (الكرني)؟', `${join(CREDIT, 'و')} تعلن ديون الزبائن.`],
      ['ما هي البرامج التي تتابع تواريخ الانتهاء؟', `${join(EXPIRY, 'و')} تعلن متابعة تواريخ الانتهاء.`],
      ['ما هي البرامج التي تعمل دون اتصال بالإنترنت؟', `${join(OFFLINE, 'و')} تعلن العمل دون اتصال.`],
      ['ما هي البرامج التي تسيّر عدة متاجر أو الولاء؟', `${join(MULTI, 'و')} تعلن عدة متاجر؛ و${join(LOYALTY, 'و')} تعلن الولاء.`],
      ['هل يمكن تسيير السوبيرات من الهاتف؟', `${join(ANDROID, 'و')} تذكر تطبيق أندرويد.`],
      ['كم يكلف برنامج سوبيرات في الجزائر؟', 'لا تنقل هذه الصفحة أي سعر. التكلفة تتوقف على عدد الصناديق، الوحدات والعتاد. اطلبوا عرضاً مكتوباً يفصل بين الرخصة، التثبيت، العتاد (القارئ، الطابعة، الدرج، الميزان) والمساعدة.'],
      ['برنامج جاهز أم صندوق على المقاس؟', 'البرنامج الجاهز يناسب سوبيرات أو محل مواد غذائية. والعمل على المقاس مبرَّر مع عدة متاجر يجب ربطها، برنامج ولاء خاص، البيع عبر الإنترنت مع التوصيل أو الربط بالمحاسبة. و Symloop، التي تنشر هذه الصفحة، تبني هذا النوع من الصناديق.'],
      ['برامج أخرى؟', `تحققنا أيضاً من ${join(HIDDEN, 'و')}، التي لا تذكر صفحتها الناشر، أو تعدّد وظائف قليلة، أو لا تذكر هذه المحلات إلا في قائمة.`],
      ['كيف أضيف برنامجي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصفه. الإدراج مجاني.'],
    ],
    related: [['التكنولوجيا في الجزائر: كل قوائمنا', '/tech-algerie/'], ['برامج المخزون ونقطة البيع', '/logiciels-gestion-de-stock-algerie/'], ['برامج الفوترة في الجزائر', '/logiciels-facturation-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="logiciels-superette-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
