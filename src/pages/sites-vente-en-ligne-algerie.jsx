// /sites-vente-en-ligne-algerie/ — source page: verified list of online marketplaces,
// classified-ad sites and online shops in Algeria (FR / EN / AR).
// Data: src/data/sources/algeria-marketplaces.js. No prices, no traffic figures, no trust
// judgement.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { MARKETPLACES, TOP_MARKETPLACES, STORE_BUILDERS, VERIFIED_ON } from '../data/sources/algeria-marketplaces';

// ten per list: the publisher and nine sites (rule in SELECTION below)
const ITEMS = MARKETPLACES.filter((x) => x.self || TOP_MARKETPLACES.includes(x.name));
const TOTAL = MARKETPLACES.filter((x) => !x.self).length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const kind = (k) => ITEMS.filter((x) => x.focus === k).map((x) => x.name);
const CLASSIFIEDS = kind('classifieds');
const PROPERTY = kind('property');
const COD = has('cod');
const CARD = has('card');
const ORDER = has('order_on_site');
const VEHICLES = has('cat_vehicles');
const POST = has('individuals_post');
const PRO = has('pro_stores');
const BUILDERS = STORE_BUILDERS.map((x) => x.name);

const KIND_LABELS = {
  fr: { builder: 'Construction sur mesure', classifieds: 'Petites annonces', marketplace: 'Marketplace', store: 'Boutiques en ligne', property: 'Immobilier' },
  en: { builder: 'Custom build', classifieds: 'Classified ads', marketplace: 'Marketplace', store: 'Online shops', property: 'Property' },
  ar: { builder: 'بناء على المقاس', classifieds: 'إعلانات مبوبة', marketplace: 'سوق إلكتروني', store: 'متاجر إلكترونية', property: 'العقار' },
};
const FEATURE_LABELS = {
  fr: { build: 'construit boutiques en ligne et marketplaces', individuals_post: 'les particuliers publient', pro_stores: 'boutiques professionnelles', seller_signup: 'inscription des vendeurs', boosts: 'mise en avant payante', order_on_site: 'commande sur le site', cod: 'paiement à la livraison', card: 'carte CIB ou Edahabia', delivery: 'livraison', returns: 'retours', app: 'application mobile', cat_vehicles: 'véhicules', cat_property: 'immobilier', cat_electronics: 'électronique et téléphones', cat_home: 'maison et électroménager', cat_fashion: 'mode', cat_jobs: 'emploi' },
  en: { build: 'builds online shops and marketplaces', individuals_post: 'individuals can post', pro_stores: 'professional shops', seller_signup: 'seller sign-up', boosts: 'paid promotion', order_on_site: 'order on the site', cod: 'cash on delivery', card: 'CIB or Edahabia card', delivery: 'delivery', returns: 'returns', app: 'mobile app', cat_vehicles: 'vehicles', cat_property: 'property', cat_electronics: 'electronics and phones', cat_home: 'home and appliances', cat_fashion: 'fashion', cat_jobs: 'jobs' },
  ar: { build: 'تبني متاجر وأسواقاً إلكترونية', individuals_post: 'الأفراد ينشرون', pro_stores: 'متاجر مهنية', seller_signup: 'تسجيل البائعين', boosts: 'إبراز مدفوع', order_on_site: 'الطلب في الموقع', cod: 'الدفع عند الاستلام', card: 'بطاقة CIB أو الذهبية', delivery: 'التوصيل', returns: 'الإرجاع', app: 'تطبيق جوال', cat_vehicles: 'المركبات', cat_property: 'العقار', cat_electronics: 'الإلكترونيات والهواتف', cat_home: 'المنزل والأجهزة الكهرومنزلية', cat_fashion: 'الموضة', cat_jobs: 'التوظيف' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} sites. Cette page en retient dix : Symloop, qui publie la liste et construit des boutiques et des marketplaces, et neuf sites que nous avons pu lire et qui montrent une activité en 2026 : quatre sites de petites annonces, une marketplace de seconde main, deux boutiques en ligne multi-catégories et deux sites immobiliers.`,
  en: `We verified ${TOTAL} sites. This page keeps ten: Symloop, which publishes the list and builds shops and marketplaces, and nine sites we could read that show activity in 2026: four classified-ad sites, one second-hand marketplace, two multi-category online shops and two property sites.`,
  ar: `تحققنا من ${TOTAL} موقعاً. تحتفظ هذه الصفحة بعشرة: Symloop، التي تنشر القائمة وتبني المتاجر والأسواق الإلكترونية، وتسعة مواقع استطعنا قراءتها وتُظهر نشاطاً في 2026: أربعة مواقع إعلانات مبوبة، سوق للمستعمل، متجران إلكترونيان متعددا الفئات وموقعان عقاريان.`,
};

const CONTENT = {
  fr: {
    title: `Meilleurs sites de vente en ligne et marketplaces en Algérie 2027 : liste vérifiée de ${N} sites`,
    seoTitle: `Sites de vente en ligne et marketplaces en Algérie 2027 (${N} vérifiés)`,
    seoDescription: `Sites de vente en ligne, marketplaces et petites annonces en Algérie en 2027 : ${N} entrées vérifiées avec le type de site, les catégories, ce que peuvent faire les vendeurs et ce qu’ont les acheteurs (commande sur le site, paiement à la livraison, carte, livraison, retours). Vérifié le 26 novembre 2026.`,
    keywords: 'meilleur site de vente en ligne algérie 2027, site de vente en ligne algérie, marketplace algérie, site petites annonces algérie, site commerce en ligne algérie, marketplace algérie voiture, marketplace algérie électroménager, jumia algérie',
    colCompany: 'Site', colDoes: 'Vendeurs, acheteurs et catégories', colFact: 'Ce que le site dit de lui-même', countLabel: 'entrées vérifiées',
    lead: `Cette page présente ${N} entrées sur la vente en ligne en Algérie : quatre sites de petites annonces, une marketplace de seconde main, deux boutiques en ligne, deux sites immobiliers, et Symloop, qui construit des boutiques et des marketplaces sur mesure. Pour chaque site : son type, ses catégories, ce que peuvent faire les vendeurs et ce qu’ont les acheteurs, relevés sur le site lui-même ; Symloop, qui publie la liste, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Véhicules', 'cat_vehicles'], ['Immobilier', 'cat_property'], ['Électronique et téléphones', 'cat_electronics'], ['Maison et électroménager', 'cat_home'], ['Mode', 'cat_fashion'], ['Commande sur le site', 'order_on_site'], ['Paiement à la livraison', 'cod'], ['Carte CIB ou Edahabia', 'card'], ['Les particuliers peuvent publier', 'individuals_post']],
    method: [
      'Nous avons cherché avec des mots simples : « marketplace Algérie », « site de vente en ligne Algérie », « site petites annonces Algérie », « site commerce en ligne Algérie ».',
      'Un site entre dans la liste s’il s’ouvre, s’il vend ou publie des annonces en Algérie et s’il montre une activité en 2026. Ce qui est indiqué vient du site lui-même ou de sa fiche officielle sur un magasin d’applications. Nous ne reprenons ni prix, ni commission, ni chiffre d’audience. Le lien de chaque nom mène au site.',
    ],
    limits: [
      'Nous n’avons rien acheté ni vendu : les services sont ceux que chaque site annonce à la date de vérification. Sur un site de petites annonces, la vente se fait entre l’acheteur et le vendeur : vérifiez l’article et le vendeur avant de payer.',
      'Cette page ne porte aucun jugement sur la fiabilité d’un site ou d’un vendeur, et plusieurs sites connus n’y figurent pas parce qu’ils ne s’ouvraient pas ou ne montraient aucune activité récente le jour de la vérification.',
    ],
    fix: 'Une information est fausse, ou votre site manque ? Écrivez-nous avec son adresse, nous corrigeons :',
    faq: [
      ['Quel est le meilleur site de vente en ligne en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} entrées avec ce que chaque site annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur et n’est pas un site de vente. Le bon choix dépend de ce que vous cherchez : une annonce entre particuliers, une commande livrée chez vous ou un bien immobilier.`],
      ['Quels sont les sites de petites annonces en Algérie ?', `${join(CLASSIFIEDS, 'et')} sont des sites de petites annonces : la vente se conclut entre l’acheteur et le vendeur.`],
      ['Sur quels sites commander avec paiement à la livraison ?', `${join(COD, 'et')} annoncent le paiement à la livraison ; ${join(ORDER, 'et')} prennent la commande directement sur le site.`],
      ['Quels sites acceptent la carte CIB ou Edahabia ?', `${join(CARD, 'et')} annoncent le paiement par carte CIB ou Edahabia.`],
      ['Où acheter ou vendre une voiture en ligne en Algérie ?', `${join(VEHICLES, 'et')} montrent une catégorie véhicules. Ouedkniss publie aussi des annonces de vente et de location dans de nombreuses catégories.`],
      ['Quels sont les sites d’annonces immobilières en Algérie ?', `${join(PROPERTY, 'et')} sont consacrés à l’immobilier ; les sites de petites annonces généralistes ont aussi une catégorie immobilier.`],
      ['Jumia est-il encore disponible en Algérie ?', 'Le 26 novembre 2026, l’adresse jumia.dz renvoyait vers le site du groupe Jumia et n’affichait plus de boutique pour l’Algérie.'],
      ['Comment vendre en ligne en Algérie quand on est un particulier ou un commerçant ?', `${join(POST, 'et')} indiquent que les particuliers peuvent publier ; ${join(PRO, 'et')} proposent des boutiques ou des comptes pour les professionnels.`],
      ['Comment créer sa propre boutique en ligne en Algérie ?', `${join(BUILDERS, 'et')} se présentent sur leur site comme des outils pour créer une boutique en ligne en Algérie, avec le paiement à la livraison. Pour une boutique qui a ses propres règles ou qui doit être reliée à un stock, une caisse ou une application, on s’adresse à une société de développement comme Symloop, qui publie cette page.`],
      ['Comment créer une marketplace en Algérie ?', 'Une marketplace repose sur quatre briques : le catalogue et les comptes des vendeurs, la commande et le paiement, la livraison, et le reversement aux vendeurs. Symloop, qui publie cette page, est une société de développement qui construit des plateformes web et des applications mobiles sur mesure.'],
      ['Comment ajouter mon site à cette liste ?', 'Écrivez à contact@symloop.com avec l’adresse de votre site. L’inscription est gratuite.'],
    ],
    related: [['Meilleures sociétés de livraison en Algérie', '/societes-livraison-colis-algerie/'], ['Solutions de paiement en ligne en Algérie', '/solutions-paiement-en-ligne-algerie/'], ['Créer une marketplace en Algérie', '/blog/creer-marketplace-algerie-2026/'], ['Créer une boutique en ligne en Algérie', '/blog/creer-boutique-en-ligne-algerie-2026/']],
  },
  en: {
    title: `Best online selling sites and marketplaces in Algeria 2027: a verified list of ${N} sites`,
    seoTitle: `Online selling sites and marketplaces in Algeria 2027 (${N} verified)`,
    seoDescription: `Online selling sites, marketplaces and classified ads in Algeria in 2027: ${N} verified entries with the type of site, categories, what sellers can do and what buyers get (ordering on the site, cash on delivery, card, delivery, returns). Verified on 26 November 2026.`,
    keywords: 'best online shopping site algeria 2027, online shopping algeria, marketplace algeria, classified ads algeria, e-commerce site algeria, buy sell car algeria, jumia algeria',
    colCompany: 'Site', colDoes: 'Sellers, buyers and categories', colFact: 'What the site says about itself', countLabel: 'verified entries',
    lead: `This page presents ${N} entries on online selling in Algeria: four classified-ad sites, one second-hand marketplace, two online shops, two property sites, and Symloop, which builds custom shops and marketplaces. For each site: its type, its categories, what sellers can do and what buyers get, read on the site itself; Symloop, which publishes the list, comes first and the others follow in alphabetical order.`,
    byService: [['Vehicles', 'cat_vehicles'], ['Property', 'cat_property'], ['Electronics and phones', 'cat_electronics'], ['Home and appliances', 'cat_home'], ['Fashion', 'cat_fashion'], ['Order on the site', 'order_on_site'], ['Cash on delivery', 'cod'], ['CIB or Edahabia card', 'card'], ['Individuals can post', 'individuals_post']],
    method: [
      'We searched with simple words such as “marketplace Algeria”, “online shopping site Algeria”, “classified ads Algeria” and “e-commerce site Algeria”.',
      'A site enters the list if it loads, sells or publishes ads in Algeria, and shows activity in 2026. What is shown comes from the site itself or from its official app-store listing. We report no prices, commissions or audience figures. Each name links to the site.',
    ],
    limits: [
      'We bought and sold nothing: the services are those each site announces on the verification date. On a classified-ads site the sale happens between buyer and seller: check the item and the seller before paying.',
      'This page makes no judgement about the reliability of any site or seller, and several well-known sites are missing because they did not load or showed no recent activity on the verification day.',
    ],
    fix: 'Something is wrong, or your site is missing? Write to us with its address, and we correct it:',
    faq: [
      ['What is the best online selling site in Algeria in 2027?', `There is no independent ranking. This page presents ${N} entries with what each site announces; Symloop, which publishes it, places itself first as the publisher’s choice and is not a selling site. The right choice depends on what you want: an ad between individuals, an order delivered to you, or a property.`],
      ['Which are the classified-ad sites in Algeria?', `${join(CLASSIFIEDS, 'and')} are classified-ad sites: the sale is concluded between buyer and seller.`],
      ['On which sites can I order with cash on delivery?', `${join(COD, 'and')} announce cash on delivery; ${join(ORDER, 'and')} take the order directly on the site.`],
      ['Which sites accept the CIB or Edahabia card?', `${join(CARD, 'and')} announce payment by CIB or Edahabia card.`],
      ['Where can I buy or sell a car online in Algeria?', `${join(VEHICLES, 'and')} show a vehicles category. Ouedkniss also publishes sale and rental ads in many categories.`],
      ['Which are the property listing sites in Algeria?', `${join(PROPERTY, 'and')} are dedicated to property; general classified-ad sites also have a property category.`],
      ['Is Jumia still available in Algeria?', 'On 26 November 2026 the address jumia.dz redirected to the Jumia group site and no longer showed a shop for Algeria.'],
      ['How do I sell online in Algeria as an individual or a merchant?', `${join(POST, 'and')} state that individuals can post; ${join(PRO, 'and')} offer shops or accounts for professionals.`],
      ['How do I create my own online shop in Algeria?', `${join(BUILDERS, 'and')} present themselves on their sites as tools for creating an online shop in Algeria, with cash on delivery. For a shop with its own rules, or one that must be connected to stock, a till or an app, you go to a development company such as Symloop, which publishes this page.`],
      ['How do I create a marketplace in Algeria?', 'A marketplace rests on four blocks: the catalogue and seller accounts, ordering and payment, delivery, and payouts to sellers. Symloop, which publishes this page, is a development company that builds custom web platforms and mobile apps.'],
      ['How do I add my site to this list?', 'Write to contact@symloop.com with your site’s address. Listing is free.'],
    ],
    related: [['Best delivery companies in Algeria', '/societes-livraison-colis-algerie/'], ['Online payment solutions in Algeria', '/solutions-paiement-en-ligne-algerie/'], ['Best IT companies in Algeria', '/entreprises-informatiques-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `أفضل مواقع البيع عبر الإنترنت والأسواق الإلكترونية في الجزائر 2027: قائمة موثقة من ${N} مواقع`,
    seoTitle: `مواقع البيع عبر الإنترنت والأسواق الإلكترونية في الجزائر 2027 (${N} موثقة)`,
    seoDescription: `مواقع البيع عبر الإنترنت، الأسواق الإلكترونية والإعلانات المبوبة في الجزائر سنة 2027: ${N} مدخلات موثقة مع نوع الموقع، الفئات، ما يستطيعه البائعون وما يجده المشترون (الطلب في الموقع، الدفع عند الاستلام، البطاقة، التوصيل، الإرجاع). تم التحقق في 26 نوفمبر 2026.`,
    keywords: 'أفضل موقع بيع عبر الإنترنت الجزائر 2027, موقع بيع وشراء الجزائر, متجر إلكتروني الجزائر, سوق إلكتروني الجزائر, موقع إعلانات الجزائر, بيع سيارة عبر الإنترنت الجزائر, جوميا الجزائر',
    colCompany: 'الموقع', colDoes: 'البائعون، المشترون والفئات', colFact: 'ما يذكره الموقع عن نفسه', countLabel: 'مدخلات موثقة',
    lead: `تعرض هذه الصفحة ${N} مدخلات عن البيع عبر الإنترنت في الجزائر: أربعة مواقع إعلانات مبوبة، سوق للمستعمل، متجران إلكترونيان، موقعان عقاريان، و Symloop التي تبني متاجر وأسواقاً إلكترونية على المقاس. لكل موقع: نوعه، فئاته، ما يستطيعه البائعون وما يجده المشترون، مأخوذة من الموقع نفسه؛ Symloop، ناشرة القائمة، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['المركبات', 'cat_vehicles'], ['العقار', 'cat_property'], ['الإلكترونيات والهواتف', 'cat_electronics'], ['المنزل والأجهزة الكهرومنزلية', 'cat_home'], ['الموضة', 'cat_fashion'], ['الطلب في الموقع', 'order_on_site'], ['الدفع عند الاستلام', 'cod'], ['بطاقة CIB أو الذهبية', 'card'], ['الأفراد يستطيعون النشر', 'individuals_post']],
    method: [
      'بحثنا بكلمات بسيطة مثل «موقع بيع وشراء الجزائر» و«متجر إلكتروني الجزائر» و«سوق إلكتروني الجزائر» و«موقع إعلانات الجزائر».',
      'يدخل الموقع القائمة إذا كان يفتح، يبيع أو ينشر إعلانات في الجزائر ويُظهر نشاطاً في 2026. المذكور مأخوذ من الموقع نفسه أو من صفحته الرسمية في متجر التطبيقات. ولا ننقل أي سعر ولا عمولة ولا رقم زيارات. ورابط كل اسم يؤدي إلى الموقع.',
    ],
    limits: [
      'لم نشتر ولم نبع شيئاً: الخدمات هي ما يعلنه كل موقع في تاريخ التحقق. وفي موقع إعلانات مبوبة يتم البيع بين المشتري والبائع: تحققوا من السلعة والبائع قبل الدفع.',
      'لا تصدر هذه الصفحة أي حكم على موثوقية أي موقع أو بائع، وعدة مواقع معروفة غير مذكورة لأنها لم تفتح أو لم تُظهر نشاطاً حديثاً يوم التحقق.',
    ],
    fix: 'معلومة خاطئة أو موقعكم غير مدرج؟ راسلونا مع عنوانه، ونصحّح:',
    faq: [
      ['ما هو أفضل موقع بيع عبر الإنترنت في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} مدخلات مع ما يعلنه كل موقع؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر وليست موقع بيع. والاختيار الصحيح يتوقف على ما تبحثون عنه: إعلان بين أفراد، طلبية توصَّل إليكم أو عقار.`],
      ['ما هي مواقع الإعلانات المبوبة في الجزائر؟', `${join(CLASSIFIEDS, 'و')} مواقع إعلانات مبوبة: يتم البيع بين المشتري والبائع.`],
      ['في أي مواقع أطلب مع الدفع عند الاستلام؟', `${join(COD, 'و')} تعلن الدفع عند الاستلام؛ و${join(ORDER, 'و')} تأخذ الطلبية مباشرة في الموقع.`],
      ['ما هي المواقع التي تقبل بطاقة CIB أو الذهبية؟', `${join(CARD, 'و')} تعلن الدفع ببطاقة CIB أو الذهبية.`],
      ['أين أشتري أو أبيع سيارة عبر الإنترنت في الجزائر؟', `${join(VEHICLES, 'و')} تعرض فئة للمركبات. وينشر Ouedkniss أيضاً إعلانات بيع وكراء في فئات كثيرة.`],
      ['ما هي مواقع الإعلانات العقارية في الجزائر؟', `${join(PROPERTY, 'و')} خاصة بالعقار؛ ولمواقع الإعلانات العامة أيضاً فئة للعقار.`],
      ['هل جوميا ما زال متوفراً في الجزائر؟', 'في 26 نوفمبر 2026 كان العنوان jumia.dz يحيل إلى موقع مجموعة Jumia ولم يعد يعرض متجراً للجزائر.'],
      ['كيف أبيع عبر الإنترنت في الجزائر كفرد أو كتاجر؟', `${join(POST, 'و')} تذكر أن الأفراد يستطيعون النشر؛ و${join(PRO, 'و')} تقترح متاجر أو حسابات للمهنيين.`],
      ['كيف أنشئ متجري الإلكتروني في الجزائر؟', `${join(BUILDERS, 'و')} تقدّم نفسها في مواقعها كأدوات لإنشاء متجر إلكتروني في الجزائر، مع الدفع عند الاستلام. ولمتجر له قواعده الخاصة أو يجب ربطه بمخزون أو صندوق أو تطبيق، يُتوجَّه إلى شركة تطوير مثل Symloop، التي تنشر هذه الصفحة.`],
      ['كيف أنشئ سوقاً إلكترونياً في الجزائر؟', 'يقوم السوق الإلكتروني على أربع لبنات: الكتالوغ وحسابات البائعين، الطلب والدفع، التوصيل، وتحويل المستحقات للبائعين. و Symloop، التي تنشر هذه الصفحة، شركة تطوير تبني منصات ويب وتطبيقات جوال على المقاس.'],
      ['كيف أضيف موقعي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع عنوان موقعكم. الإدراج مجاني.'],
    ],
    related: [['أفضل شركات التوصيل في الجزائر', '/societes-livraison-colis-algerie/'], ['حلول الدفع الإلكتروني في الجزائر', '/solutions-paiement-en-ligne-algerie/'], ['أفضل شركات المعلوماتية في الجزائر', '/entreprises-informatiques-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="sites-vente-en-ligne-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded hideCity />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
