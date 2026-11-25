// /logiciels-restaurant-algerie/ — source page: verified list of restaurant management and
// restaurant till software in Algeria (FR / EN / AR).
// Data: src/data/sources/algeria-restaurant-software.js. No prices.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { RESTAURANT_SOFTWARE, TOP_RESTAURANT, VERIFIED_ON } from '../data/sources/algeria-restaurant-software';

// ten per list: the publisher and nine products (rule in SELECTION below)
const ITEMS = RESTAURANT_SOFTWARE.filter((x) => x.self || TOP_RESTAURANT.includes(x.name));
const TOTAL = RESTAURANT_SOFTWARE.filter((x) => !x.self).length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (...keys) => ITEMS.filter((x) => !x.self && keys.every((k) => x.services.includes(k))).map((x) => x.name);
const TABLE_KITCHEN = has('tables', 'kitchen');
const QR = has('qr_menu');
const DELIVERY = has('delivery');
const RECIPES = has('recipes');
const WAITER = has('waiter_app');
const TRIAL = has('trial');

const KIND_LABELS = {
  fr: { custom: 'Sur mesure', suite: 'Caisse et gestion de restaurant', menu: 'Menu QR et commande' },
  en: { custom: 'Custom-built', suite: 'Till and restaurant management', menu: 'QR menu and ordering' },
  ar: { custom: 'على المقاس', suite: 'الصندوق وتسيير المطعم', menu: 'قائمة QR والطلب' },
};
const FEATURE_LABELS = {
  fr: { custom: 'fonctions définies avec l’entreprise', tables: 'plan de salle et tables', orders: 'prise de commande', kitchen: 'envoi en cuisine', delivery: 'livraison et à emporter', pos: 'caisse', stock: 'stock', recipes: 'recettes et ingrédients', qr_menu: 'menu QR', waiter_app: 'application pour serveurs', reports: 'statistiques', multi_site: 'plusieurs établissements', loyalty: 'fidélité', online_orders: 'commande en ligne', offline: 'fonctionne sans internet', trial: 'démo, essai ou version gratuite' },
  en: { custom: 'features defined with the company', tables: 'floor plan and tables', orders: 'order taking', kitchen: 'sent to the kitchen', delivery: 'delivery and takeaway', pos: 'till', stock: 'stock', recipes: 'recipes and ingredients', qr_menu: 'QR menu', waiter_app: 'app for waiters', reports: 'statistics', multi_site: 'several outlets', loyalty: 'loyalty', online_orders: 'online ordering', offline: 'works without internet', trial: 'demo, free trial or free version' },
  ar: { custom: 'وظائف تُحدَّد مع المؤسسة', tables: 'مخطط القاعة والطاولات', orders: 'أخذ الطلبات', kitchen: 'الإرسال إلى المطبخ', delivery: 'التوصيل والبيع المحمول', pos: 'الصندوق', stock: 'المخزون', recipes: 'الوصفات والمكونات', qr_menu: 'قائمة QR', waiter_app: 'تطبيق للنُّدُل', reports: 'الإحصائيات', multi_site: 'عدة محلات', loyalty: 'الوفاء', online_orders: 'الطلب عبر الإنترنت', offline: 'يعمل دون إنترنت', trial: 'نسخة تجريبية أو مجانية' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} logiciels et plateformes pour restaurants. Cette page en retient dix : Symloop, qui publie la liste et construit du sur-mesure, les sept logiciels qui ont une page consacrée à la restauration et dont l’éditeur indique sa ville en Algérie, et deux plateformes qui s’adressent aux restaurants d’Algérie sans indiquer de ville.`,
  en: `We verified ${TOTAL} products and platforms for restaurants. This page keeps ten: Symloop, which publishes the list and builds custom software, the seven products with a page dedicated to restaurants whose publisher states its city in Algeria, and two platforms that address restaurants in Algeria without stating a city.`,
  ar: `تحققنا من ${TOTAL} برنامجاً ومنصة للمطاعم. تحتفظ هذه الصفحة بعشرة: Symloop، التي تنشر القائمة وتبني على المقاس، والبرامج السبعة التي لها صفحة خاصة بالمطاعم ويذكر ناشرها مدينته في الجزائر، ومنصتان موجهتان لمطاعم الجزائر دون ذكر مدينة.`,
};

const CONTENT = {
  fr: {
    title: `Meilleurs logiciels de restaurant en Algérie 2027 : liste vérifiée de ${N} logiciels de caisse et de gestion`,
    seoTitle: `Meilleurs logiciels de restaurant en Algérie 2027 (${N} vérifiés)`,
    seoDescription: `Logiciels de gestion de restaurant et de caisse en Algérie en 2027 : ${N} solutions vérifiées avec l’éditeur, la ville, les fonctions (tables, commandes, cuisine, livraison, caisse, stock et recettes, menu QR, application pour serveurs) et le mode d’accès. Vérifié le 25 novembre 2026.`,
    keywords: 'meilleur logiciel restaurant algérie 2027, logiciel restaurant algérie, logiciel gestion restaurant algérie, logiciel caisse restaurant algérie, logiciel fast food algérie, logiciel pizzeria algérie, menu qr code restaurant algérie',
    colCompany: 'Logiciel', colDoes: 'Fonctions et mode d’accès', colFact: 'Ce que son site en dit',
    lead: `Cette page présente ${N} solutions pour gérer un restaurant, un fast-food, un café ou une pizzeria en Algérie : sept logiciels de caisse et de gestion, deux outils de menu QR et de commande, et Symloop, qui construit des logiciels et des applications sur mesure. Pour chacune : l’éditeur, la ville quand il l’indique, les fonctions et le mode d’accès, relevés sur son propre site ; Symloop, qui publie la liste, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Gèrent les tables', 'tables'], ['Envoient les commandes en cuisine', 'kitchen'], ['Gèrent la livraison et la vente à emporter', 'delivery'], ['Suivent les recettes et les ingrédients', 'recipes'], ['Proposent un menu QR', 'qr_menu'], ['Avec une application pour les serveurs', 'waiter_app'], ['Indiquent une démo, un essai ou une version gratuite', 'trial']],
    method: [
      'Nous avons cherché avec des mots simples : « logiciel restaurant Algérie », « logiciel gestion restaurant Algérie », « logiciel caisse restaurant Algérie », « logiciel fast food Algérie », « menu QR code restaurant Algérie ».',
      'Un logiciel entre dans la liste s’il a une page consacrée à la restauration, si cette page s’ouvre et s’il est édité ou vendu pour l’Algérie. Les fonctions et le mode d’accès sont ceux que le site indique. Nous ne reprenons ni prix ni commission. Le lien de chaque nom mène à la page du logiciel.',
    ],
    limits: [
      'La liste n’est pas complète, et les fonctions sont celles que chaque éditeur annonce : nous n’avons installé ni testé aucun de ces logiciels. Demandez une démonstration avec votre propre carte avant de choisir.',
      'Quand un site ne précise pas le système (Windows, navigateur, mobile) ou la ville de l’éditeur, nous ne l’indiquons pas.',
    ],
    fix: 'Une information est fausse, ou votre logiciel manque ? Écrivez-nous avec le lien de la page qui le décrit, nous corrigeons :',
    faq: [
      ['Quel est le meilleur logiciel de restaurant en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} solutions avec ce que chaque éditeur annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur. Le bon choix dépend du type d’établissement (service à table, restauration rapide, café, livraison), du nombre de points de vente et des fonctions attendues.`],
      ['Quels logiciels gèrent les tables et envoient les commandes en cuisine ?', `${join(TABLE_KITCHEN, 'et')} annoncent à la fois la gestion des tables et l’envoi des commandes en cuisine, sur écran ou par impression.`],
      ['Quels outils proposent un menu QR code pour restaurant en Algérie ?', `${join(QR, 'et')} annoncent un menu numérique ou une commande par QR code.`],
      ['Quels logiciels gèrent la livraison et la vente à emporter ?', `${join(DELIVERY, 'et')} annoncent la gestion des commandes en livraison ou à emporter.`],
      ['Quels logiciels suivent le stock d’ingrédients et les recettes ?', `${join(RECIPES, 'et')} annoncent des recettes ou des fiches techniques reliées au stock d’ingrédients.`],
      ['Quels logiciels ont une application pour les serveurs ?', `${join(WAITER, 'et')} annoncent une application sur téléphone ou tablette pour la prise de commande en salle.`],
      ['Peut-on essayer un logiciel de restaurant avant de l’acheter ?', `${join(TRIAL, 'et')} indiquent sur leur site une démo à télécharger, un essai ou une version gratuite. Les autres éditeurs proposent une démonstration sur demande ou ne le précisent pas.`],
      ['Logiciel prêt à l’emploi ou application sur mesure ?', 'Un logiciel de caisse prêt à l’emploi couvre le service courant d’un restaurant. Le sur-mesure se justifie pour un besoin qu’aucun produit ne couvre, par exemple une application de commande à la marque du restaurant ou la liaison entre plusieurs points de vente, la livraison et la comptabilité.'],
      ['Comment ajouter mon logiciel à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit votre logiciel. L’inscription est gratuite.'],
    ],
    related: [['Meilleurs logiciels de gestion de stock en Algérie', '/logiciels-gestion-de-stock-algerie/'], ['Solutions de paiement en ligne en Algérie', '/solutions-paiement-en-ligne-algerie/'], ['Caisse de restaurant : commandes, salle et cuisine', '/blog/caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026/'], ['Nous contacter', '/contact/']],
  },
  en: {
    title: `Best restaurant software in Algeria 2027: a verified list of ${N} till and management solutions`,
    seoTitle: `Best restaurant software in Algeria 2027 (${N} verified)`,
    seoDescription: `Restaurant management and till software in Algeria in 2027: ${N} verified solutions with the publisher, city, features (tables, orders, kitchen, delivery, till, stock and recipes, QR menu, waiter app) and how it is accessed. Verified on 25 November 2026.`,
    keywords: 'best restaurant software algeria 2027, restaurant software algeria, restaurant management software algeria, restaurant pos algeria, fast food software algeria, pizzeria software algeria, qr code menu algeria',
    colCompany: 'Software', colDoes: 'Features and access', colFact: 'What its site says',
    lead: `This page presents ${N} solutions for running a restaurant, fast-food outlet, café or pizzeria in Algeria: seven till and management products, two QR menu and ordering tools, and Symloop, which builds custom software and apps. For each one: the publisher, the city when it is stated, the features and how it is accessed, read on its own website; Symloop, which publishes the list, comes first and the others follow in alphabetical order.`,
    byService: [['Handle tables', 'tables'], ['Send orders to the kitchen', 'kitchen'], ['Handle delivery and takeaway', 'delivery'], ['Track recipes and ingredients', 'recipes'], ['Offer a QR menu', 'qr_menu'], ['With an app for waiters', 'waiter_app'], ['State a demo, free trial or free version', 'trial']],
    method: [
      'We searched with simple words such as “restaurant software Algeria”, “restaurant management software Algeria”, “restaurant POS Algeria”, “fast food software Algeria” and “QR code menu Algeria”.',
      'A product enters the list if it has a page dedicated to restaurants, that page loads, and it is published or sold for Algeria. The features and the access mode are those the site states. We report no prices or commissions. Each name links to the product’s page.',
    ],
    limits: [
      'The list is not complete, and the features are those each publisher announces: we have not installed or tested any of these products. Ask for a demo with your own menu before choosing.',
      'When a site does not state the system (Windows, browser, mobile) or the publisher’s city, we do not show one.',
    ],
    fix: 'Something is wrong, or your product is missing? Write to us with the link to the page describing it, and we correct it:',
    faq: [
      ['What is the best restaurant software in Algeria in 2027?', `There is no independent ranking. This page presents ${N} solutions with what each publisher announces; Symloop, which publishes it, places itself first as the publisher’s choice. The right choice depends on the kind of outlet (table service, fast food, café, delivery), the number of outlets and the features expected.`],
      ['Which products handle tables and send orders to the kitchen?', `${join(TABLE_KITCHEN, 'and')} announce both table management and sending orders to the kitchen, on a screen or by printing.`],
      ['Which tools offer a QR-code menu for restaurants in Algeria?', `${join(QR, 'and')} announce a digital menu or QR-code ordering.`],
      ['Which products handle delivery and takeaway?', `${join(DELIVERY, 'and')} announce handling of delivery or takeaway orders.`],
      ['Which products track ingredient stock and recipes?', `${join(RECIPES, 'and')} announce recipes or recipe sheets linked to ingredient stock.`],
      ['Which products have an app for waiters?', `${join(WAITER, 'and')} announce a phone or tablet app for taking orders in the dining room.`],
      ['Can I try restaurant software before buying it?', `${join(TRIAL, 'and')} state a downloadable demo, a free trial or a free version on their sites. The other publishers offer a demonstration on request or do not say.`],
      ['Ready-made software or a custom app?', 'Ready-made till software covers a restaurant’s everyday service. Custom work is justified for a need no product covers, for example an ordering app under the restaurant’s own brand, or connecting several outlets, delivery and accounting.'],
      ['How do I add my software to this list?', 'Write to contact@symloop.com with the link to the page describing your software. Listing is free.'],
    ],
    related: [['Best stock management software in Algeria', '/logiciels-gestion-de-stock-algerie/'], ['Online payment solutions in Algeria', '/solutions-paiement-en-ligne-algerie/'], ['Best IT companies in Algeria', '/entreprises-informatiques-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `أفضل برامج تسيير المطاعم في الجزائر 2027: قائمة موثقة من ${N} حلول للصندوق والتسيير`,
    seoTitle: `أفضل برامج تسيير المطاعم في الجزائر 2027 (${N} حلول موثقة)`,
    seoDescription: `برامج تسيير المطاعم والصندوق في الجزائر سنة 2027: ${N} حلول موثقة مع الناشر، المدينة، الوظائف (الطاولات، الطلبات، المطبخ، التوصيل، الصندوق، المخزون والوصفات، قائمة QR، تطبيق النُّدُل) وطريقة الاستعمال. تم التحقق في 25 نوفمبر 2026.`,
    keywords: 'أفضل برنامج تسيير مطعم الجزائر 2027, برنامج مطعم الجزائر, برنامج تسيير مطعم الجزائر, برنامج كاشير مطعم الجزائر, برنامج فاست فود الجزائر, قائمة QR مطعم الجزائر',
    colCompany: 'البرنامج', colDoes: 'الوظائف وطريقة الاستعمال', colFact: 'ما يذكره موقعه',
    lead: `تعرض هذه الصفحة ${N} حلول لتسيير مطعم أو محل أكل سريع أو مقهى أو بيتزيريا في الجزائر: سبعة برامج للصندوق والتسيير، أداتان لقائمة QR والطلب، و Symloop التي تبني برمجيات وتطبيقات على المقاس. لكل واحد: الناشر، المدينة حين يذكرها، الوظائف وطريقة الاستعمال، مأخوذة من موقعه؛ Symloop، ناشرة القائمة، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['تسيّر الطاولات', 'tables'], ['ترسل الطلبات إلى المطبخ', 'kitchen'], ['تسيّر التوصيل والبيع المحمول', 'delivery'], ['تتبع الوصفات والمكونات', 'recipes'], ['تقترح قائمة QR', 'qr_menu'], ['بتطبيق للنُّدُل', 'waiter_app'], ['تذكر نسخة تجريبية أو مجانية', 'trial']],
    method: [
      'بحثنا بكلمات بسيطة مثل «برنامج مطعم الجزائر» و«برنامج تسيير مطعم الجزائر» و«برنامج كاشير مطعم الجزائر» و«قائمة QR مطعم الجزائر».',
      'يدخل البرنامج القائمة إذا كانت له صفحة خاصة بالمطاعم، وكانت هذه الصفحة تفتح، وكان منشوراً أو مبيعاً للجزائر. الوظائف وطريقة الاستعمال هي ما يذكره الموقع. ولا ننقل أي سعر أو عمولة. ورابط كل اسم يؤدي إلى صفحة البرنامج.',
    ],
    limits: [
      'القائمة غير كاملة، والوظائف هي ما يعلنه كل ناشر: لم نثبّت ولم نختبر أياً من هذه البرامج. اطلبوا عرضاً تجريبياً بقائمة طعامكم قبل الاختيار.',
      'حين لا يحدد الموقع النظام (ويندوز، متصفح، جوال) أو مدينة الناشر لا نذكرهما.',
    ],
    fix: 'معلومة خاطئة أو برنامجكم غير مدرج؟ راسلونا مع رابط الصفحة التي تصفه، ونصحّح:',
    faq: [
      ['ما هو أفضل برنامج لتسيير المطاعم في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} حلول مع ما يعلنه كل ناشر؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر. والاختيار الصحيح يتوقف على نوع المحل (خدمة على الطاولة، أكل سريع، مقهى، توصيل)، عدد نقاط البيع والوظائف المطلوبة.`],
      ['ما هي البرامج التي تسيّر الطاولات وترسل الطلبات إلى المطبخ؟', `${join(TABLE_KITCHEN, 'و')} تعلن تسيير الطاولات وإرسال الطلبات إلى المطبخ معاً، على شاشة أو بالطباعة.`],
      ['ما هي الأدوات التي تقترح قائمة QR للمطاعم في الجزائر؟', `${join(QR, 'و')} تعلن قائمة رقمية أو طلباً برمز QR.`],
      ['ما هي البرامج التي تسيّر التوصيل والبيع المحمول؟', `${join(DELIVERY, 'و')} تعلن تسيير طلبات التوصيل أو البيع المحمول.`],
      ['ما هي البرامج التي تتبع مخزون المكونات والوصفات؟', `${join(RECIPES, 'و')} تعلن وصفات أو بطاقات تقنية مرتبطة بمخزون المكونات.`],
      ['ما هي البرامج التي لها تطبيق للنُّدُل؟', `${join(WAITER, 'و')} تعلن تطبيقاً على الهاتف أو اللوحة لأخذ الطلبات في القاعة.`],
      ['هل يمكن تجربة برنامج المطعم قبل شرائه؟', `${join(TRIAL, 'و')} تذكر في مواقعها نسخة تجريبية للتحميل، تجربة مجانية أو نسخة مجانية. والناشرون الآخرون يقترحون عرضاً عند الطلب أو لا يحددون ذلك.`],
      ['برنامج جاهز أم تطبيق على المقاس؟', 'برنامج الصندوق الجاهز يغطي الخدمة اليومية للمطعم. والعمل على المقاس مبرَّر لحاجة لا يغطيها أي منتج، مثل تطبيق طلب بعلامة المطعم أو الربط بين عدة نقاط بيع والتوصيل والمحاسبة.'],
      ['كيف أضيف برنامجي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف برنامجكم. الإدراج مجاني.'],
    ],
    related: [['أفضل برامج تسيير المخزون في الجزائر', '/logiciels-gestion-de-stock-algerie/'], ['حلول الدفع الإلكتروني في الجزائر', '/solutions-paiement-en-ligne-algerie/'], ['أفضل شركات المعلوماتية في الجزائر', '/entreprises-informatiques-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="logiciels-restaurant-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
