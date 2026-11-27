// /societes-livraison-colis-algerie/ — source page: verified list of parcel delivery companies in
// Algeria for online sellers (FR / EN / AR). Data: src/data/sources/algeria-parcel-carriers.js.
// No delivery rates, no delivery-time promises, no reliability judgement.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { PARCEL_CARRIERS, TOP_CARRIERS, VERIFIED_ON } from '../data/sources/algeria-parcel-carriers';

// ten per list: the publisher and nine carriers (rule in SELECTION below)
const ITEMS = PARCEL_CARRIERS.filter((x) => x.self || TOP_CARRIERS.includes(x.name));
const TOTAL = PARCEL_CARRIERS.filter((x) => !x.self).length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const COD = has('cod');
const STOPDESK = has('stopdesk');
const STORAGE = has('storage');
const CONFIRM = has('confirmation');
const RETURNS = has('returns');
const CONNECT = ITEMS.filter((x) => !x.self && (x.services.includes('api') || x.services.includes('plugins'))).map((x) => x.name);
const WILAYAS = ITEMS.filter((x) => !x.self && x.wilayas).map((x) => `${x.name} ${x.wilayas}`);
const INTERNATIONAL = PARCEL_CARRIERS.filter((x) => x.services.includes('international')).map((x) => x.name);

const KIND_LABELS = {
  fr: { integrator: 'Intégration', network: 'Réseaux de livraison e-commerce', postal: 'Service postal express', express: 'Courrier express', international: 'Express international' },
  en: { integrator: 'Integration', network: 'E-commerce delivery networks', postal: 'Postal express service', express: 'Express courier', international: 'International express' },
  ar: { integrator: 'الربط', network: 'شبكات توصيل التجارة الإلكترونية', postal: 'خدمة البريد السريع', express: 'بريد سريع', international: 'سريع دولي' },
};
const FEATURE_LABELS = {
  fr: { integration: 'relie boutiques et applications aux transporteurs', home_delivery: 'livraison à domicile', stopdesk: 'stop desk et points relais', cod: 'paiement à la livraison', pickup: 'ramassage chez le vendeur', returns: 'retours', storage: 'stockage', express: 'express', documents: 'documents', international: 'international', confirmation: 'confirmation des commandes', tracking: 'suivi en ligne', dashboard: 'espace vendeur', app: 'application mobile', api: 'API', plugins: 'connexion aux boutiques en ligne', signup: 'inscription en ligne' },
  en: { integration: 'connects shops and apps to carriers', home_delivery: 'home delivery', stopdesk: 'stop desk and relay points', cod: 'cash on delivery', pickup: 'pickup at the seller', returns: 'returns', storage: 'storage', express: 'express', documents: 'documents', international: 'international', confirmation: 'order confirmation', tracking: 'online tracking', dashboard: 'seller account', app: 'mobile app', api: 'API', plugins: 'online shop connections', signup: 'online sign-up' },
  ar: { integration: 'تربط المتاجر والتطبيقات بشركات التوصيل', home_delivery: 'التوصيل إلى المنزل', stopdesk: 'مكتب الاستلام ونقاط الترحيل', cod: 'الدفع عند الاستلام', pickup: 'الجمع عند البائع', returns: 'المرتجعات', storage: 'التخزين', express: 'سريع', documents: 'الوثائق', international: 'دولي', confirmation: 'تأكيد الطلبيات', tracking: 'التتبع عبر الإنترنت', dashboard: 'فضاء البائع', app: 'تطبيق جوال', api: 'واجهة برمجية', plugins: 'ربط بالمتاجر الإلكترونية', signup: 'تسجيل عبر الإنترنت' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} transporteurs. Cette page en retient dix : Symloop, qui publie la liste et relie les boutiques aux transporteurs, les huit réseaux dont le site décrit la livraison de colis pour les vendeurs en ligne, et le service express de la poste. Les coursiers express d’entreprise et internationaux sont cités dans les questions.`,
  en: `We verified ${TOTAL} carriers. This page keeps ten: Symloop, which publishes the list and connects shops to carriers, the eight networks whose site describes parcel delivery for online sellers, and the postal express service. Business and international express couriers are named in the questions.`,
  ar: `تحققنا من ${TOTAL} شركة توصيل. تحتفظ هذه الصفحة بعشرة: Symloop، التي تنشر القائمة وتربط المتاجر بشركات التوصيل، والشبكات الثماني التي يصف موقعها توصيل الطرود للبائعين عبر الإنترنت، وخدمة البريد السريع. وشركات البريد السريع للمؤسسات والدولي مذكورة في الأسئلة.`,
};

const CONTENT = {
  fr: {
    title: `Meilleures sociétés de livraison en Algérie 2027 : liste vérifiée de ${N} solutions pour livrer des colis`,
    seoTitle: `Meilleures sociétés de livraison en Algérie 2027 (${N} vérifiées)`,
    seoDescription: `Sociétés de livraison de colis en Algérie en 2027 : ${N} solutions vérifiées avec le nombre de wilayas annoncé, les services (domicile, stop desk, paiement à la livraison, ramassage, retours, stockage) et les outils pour vendeurs (suivi, espace vendeur, API). Vérifié le 26 novembre 2026.`,
    keywords: 'meilleure société de livraison algérie 2027, société de livraison algérie, livraison colis algérie, livraison e-commerce algérie, paiement à la livraison algérie, société de livraison alger, transport colis algérie, livraison 58 wilayas',
    colCompany: 'Société', colDoes: 'Services et outils pour vendeurs', colFact: 'Ce que son site en dit', countLabel: 'entrées vérifiées',
    lead: `Cette page présente ${N} entrées sur la livraison de colis en Algérie : huit réseaux de livraison pour les vendeurs en ligne, le service express de la poste, et Symloop, qui relie les boutiques et les applications à ces transporteurs. Pour chacun : le nombre de wilayas qu’il annonce, ses services et ses outils pour vendeurs, relevés sur son propre site ; Symloop, qui publie la liste, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Paiement à la livraison', 'cod'], ['Stop desk et points relais', 'stopdesk'], ['Ramassage chez le vendeur', 'pickup'], ['Gèrent les retours', 'returns'], ['Stockent la marchandise', 'storage'], ['Confirment les commandes par téléphone', 'confirmation'], ['Espace vendeur en ligne', 'dashboard'], ['API ou connexion aux boutiques en ligne', 'plugins'], ['Envois internationaux', 'international']],
    method: [
      'Nous avons cherché avec des mots simples : « société de livraison Algérie », « livraison colis Algérie », « livraison e-commerce Algérie », « paiement à la livraison Algérie ».',
      'Un transporteur entre dans la liste si son propre site s’ouvre et indique qu’il livre des colis en Algérie. Le nombre de wilayas est celui que le site annonce, pas un décompte de notre part ; quand deux pages du même site donnent des nombres différents, nous donnons les deux. Nous ne reprenons ni tarif ni délai. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'Nous n’avons expédié aucun colis : la couverture, les services et les outils sont ceux que chaque transporteur annonce à la date de vérification. Demandez la liste des communes livrées et les conditions de retour avant de vous engager.',
      'Cette page ne porte aucun jugement sur la fiabilité, les délais ou les prix, et certains transporteurs connus n’y figurent pas parce que leur site ne s’ouvrait pas le jour de la vérification.',
    ],
    fix: 'Une information est fausse, ou votre société manque ? Écrivez-nous avec le lien de la page qui décrit vos services, nous corrigeons :',
    faq: [
      ['Quelle est la meilleure société de livraison en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} entrées avec ce que chaque transporteur annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur et n’est pas un transporteur. Le bon choix dépend des wilayas où vous vendez, du volume de colis et des outils dont vous avez besoin.`],
      ['Quelles sociétés livrent avec paiement à la livraison ?', `${join(COD, 'et')} annoncent le paiement à la livraison, avec l’encaissement pour le compte du vendeur.`],
      ['Combien de wilayas chaque société couvre-t-elle ?', `Nombre de wilayas annoncé par chaque site : ${WILAYAS.join(', ')}. Elogistia dit être présente dans toutes les wilayas sans donner de nombre ; EMS Champion Post indique 43 wilayas pour son offre web-marchands.`],
      ['Quelles sociétés proposent le retrait en stop desk ou en point relais ?', `${join(STOPDESK, 'et')} annoncent un retrait en stop desk, en agence ou en point relais.`],
      ['Quelles sociétés stockent la marchandise et confirment les commandes ?', `${join(STORAGE, 'et')} annoncent le stockage ; ${join(CONFIRM, 'et')} annonce la confirmation des commandes par un centre d’appels.`],
      ['Quelles sociétés gèrent les retours ?', `${join(RETURNS, 'et')} annoncent la gestion des retours ou des échanges.`],
      ['Quelle société pour envoyer un colis à l’étranger depuis l’Algérie ?', `Parmi les sociétés que nous avons vérifiées, ${join(INTERNATIONAL, 'et')} décrivent des envois internationaux. Conexlog se présente sur son site comme le prestataire agréé d’UPS en Algérie.`],
      ['Comment connecter ma boutique en ligne à une société de livraison ?', `${join(CONNECT, 'et')} annoncent une API ou des connexions aux boutiques en ligne ; les sites de DHD et de NOEST EXPRESS renvoient vers un espace vendeur nommé Ecotrack. Symloop, qui publie cette page, est une société de développement qui relie une boutique, une application ou un logiciel de gestion aux transporteurs.`],
      ['Comment ajouter ma société à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit vos services de livraison. L’inscription est gratuite.'],
    ],
    related: [['Meilleures applications de livraison en Algérie', '/applications-livraison-algerie/'], ['Solutions de paiement en ligne en Algérie', '/solutions-paiement-en-ligne-algerie/'], ['Meilleurs logiciels de gestion de stock en Algérie', '/logiciels-gestion-de-stock-algerie/'], ['Nous contacter', '/contact/']],
  },
  en: {
    title: `Best delivery companies in Algeria 2027: a verified list of ${N} parcel delivery solutions`,
    seoTitle: `Best delivery companies in Algeria 2027 (${N} verified)`,
    seoDescription: `Parcel delivery companies in Algeria in 2027: ${N} verified solutions with the number of wilayas each announces, services (home, stop desk, cash on delivery, pickup, returns, storage) and seller tools (tracking, seller account, API). Verified on 26 November 2026.`,
    keywords: 'best delivery company algeria 2027, delivery company algeria, parcel delivery algeria, e-commerce delivery algeria, cash on delivery algeria, courier company algiers, shipping company algeria',
    colCompany: 'Company', colDoes: 'Services and seller tools', colFact: 'What its site says', countLabel: 'verified entries',
    lead: `This page presents ${N} entries on parcel delivery in Algeria: eight delivery networks for online sellers, the postal express service, and Symloop, which connects shops and apps to these carriers. For each one: the number of wilayas it announces, its services and its seller tools, read on its own website; Symloop, which publishes the list, comes first and the others follow in alphabetical order.`,
    byService: [['Cash on delivery', 'cod'], ['Stop desk and relay points', 'stopdesk'], ['Pickup at the seller', 'pickup'], ['Handle returns', 'returns'], ['Store goods', 'storage'], ['Confirm orders by phone', 'confirmation'], ['Online seller account', 'dashboard'], ['API or online shop connections', 'plugins'], ['International shipping', 'international']],
    method: [
      'We searched with simple words such as “delivery company Algeria”, “parcel delivery Algeria”, “e-commerce delivery Algeria” and “cash on delivery Algeria”.',
      'A carrier enters the list if its own site loads and states that it delivers parcels in Algeria. The number of wilayas is the one the site announces, not a count of ours; when two pages of the same site give different numbers, we give both. We report no rates or delivery times. Each name links to the page read.',
    ],
    limits: [
      'We shipped no parcel: coverage, services and tools are those each carrier announces on the verification date. Ask for the list of communes served and the return conditions before committing.',
      'This page makes no judgement about reliability, delivery times or prices, and some well-known carriers are missing because their site did not load on the verification day.',
    ],
    fix: 'Something is wrong, or your company is missing? Write to us with the link to the page describing your services, and we correct it:',
    faq: [
      ['What is the best delivery company in Algeria in 2027?', `There is no independent ranking. This page presents ${N} entries with what each carrier announces; Symloop, which publishes it, places itself first as the publisher’s choice and is not a carrier. The right choice depends on the wilayas you sell in, your parcel volume and the tools you need.`],
      ['Which companies deliver with cash on delivery?', `${join(COD, 'and')} announce cash on delivery, with collection on the seller’s behalf.`],
      ['How many wilayas does each company cover?', `Number of wilayas announced by each site: ${WILAYAS.join(', ')}. Elogistia says it is present in all wilayas without giving a number; EMS Champion Post states 43 wilayas for its web-merchant offer.`],
      ['Which companies offer collection at a stop desk or relay point?', `${join(STOPDESK, 'and')} announce collection at a stop desk, agency or relay point.`],
      ['Which companies store goods and confirm orders?', `${join(STORAGE, 'and')} announce storage; ${join(CONFIRM, 'and')} announces order confirmation by a call centre.`],
      ['Which companies handle returns?', `${join(RETURNS, 'and')} announce handling of returns or exchanges.`],
      ['Which company to send a parcel abroad from Algeria?', `Among the companies we verified, ${join(INTERNATIONAL, 'and')} describe international shipping. Conexlog presents itself on its site as UPS’s authorised contractor in Algeria.`],
      ['How do I connect my online shop to a delivery company?', `${join(CONNECT, 'and')} announce an API or connections to online shops; the DHD and NOEST EXPRESS sites point to a seller account named Ecotrack. Symloop, which publishes this page, is a development company that connects a shop, an app or management software to carriers.`],
      ['How do I add my company to this list?', 'Write to contact@symloop.com with the link to the page describing your delivery services. Listing is free.'],
    ],
    related: [['Best delivery apps in Algeria', '/applications-livraison-algerie/'], ['Online payment solutions in Algeria', '/solutions-paiement-en-ligne-algerie/'], ['Best stock management software in Algeria', '/logiciels-gestion-de-stock-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `أفضل شركات التوصيل في الجزائر 2027: قائمة موثقة من ${N} حلول لتوصيل الطرود`,
    seoTitle: `أفضل شركات التوصيل في الجزائر 2027 (${N} موثقة)`,
    seoDescription: `شركات توصيل الطرود في الجزائر سنة 2027: ${N} حلول موثقة مع عدد الولايات المعلن، الخدمات (المنزل، مكتب الاستلام، الدفع عند الاستلام، الجمع، المرتجعات، التخزين) وأدوات البائعين (التتبع، فضاء البائع، واجهة برمجية). تم التحقق في 26 نوفمبر 2026.`,
    keywords: 'أفضل شركة توصيل الجزائر 2027, شركة توصيل الجزائر, توصيل الطرود الجزائر, توصيل التجارة الإلكترونية الجزائر, الدفع عند الاستلام الجزائر, شركة توصيل 58 ولاية',
    colCompany: 'الشركة', colDoes: 'الخدمات وأدوات البائعين', colFact: 'ما يذكره موقعها', countLabel: 'مدخلات موثقة',
    lead: `تعرض هذه الصفحة ${N} مدخلات عن توصيل الطرود في الجزائر: ثماني شبكات توصيل للبائعين عبر الإنترنت، خدمة البريد السريع، و Symloop التي تربط المتاجر والتطبيقات بهذه الشركات. لكل واحدة: عدد الولايات الذي تعلنه، خدماتها وأدواتها للبائعين، مأخوذة من موقعها؛ Symloop، ناشرة القائمة، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['الدفع عند الاستلام', 'cod'], ['مكتب الاستلام ونقاط الترحيل', 'stopdesk'], ['الجمع عند البائع', 'pickup'], ['تسيّر المرتجعات', 'returns'], ['تخزّن البضاعة', 'storage'], ['تؤكد الطلبيات بالهاتف', 'confirmation'], ['فضاء البائع عبر الإنترنت', 'dashboard'], ['واجهة برمجية أو ربط بالمتاجر الإلكترونية', 'plugins'], ['إرساليات دولية', 'international']],
    method: [
      'بحثنا بكلمات بسيطة مثل «شركة توصيل الجزائر» و«توصيل الطرود الجزائر» و«الدفع عند الاستلام الجزائر».',
      'تدخل الشركة القائمة إذا كان موقعها يفتح ويذكر أنها توصّل الطرود في الجزائر. عدد الولايات هو ما يعلنه الموقع وليس إحصاء منا؛ وحين تعطي صفحتان من الموقع نفسه عددين مختلفين نذكرهما معاً. ولا ننقل أي سعر ولا أجل. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'لم نرسل أي طرد: التغطية، الخدمات والأدوات هي ما تعلنه كل شركة في تاريخ التحقق. اطلبوا قائمة البلديات المخدومة وشروط الإرجاع قبل الالتزام.',
      'لا تصدر هذه الصفحة أي حكم على الموثوقية أو الآجال أو الأسعار، وبعض الشركات المعروفة غير مذكورة لأن موقعها لم يفتح يوم التحقق.',
    ],
    fix: 'معلومة خاطئة أو شركتكم غير مدرجة؟ راسلونا مع رابط الصفحة التي تصف خدماتكم، ونصحّح:',
    faq: [
      ['ما هي أفضل شركة توصيل في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} مدخلات مع ما تعلنه كل شركة؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر وليست شركة توصيل. والاختيار الصحيح يتوقف على الولايات التي تبيعون فيها، حجم الطرود والأدوات التي تحتاجونها.`],
      ['ما هي الشركات التي توصّل مع الدفع عند الاستلام؟', `${join(COD, 'و')} تعلن الدفع عند الاستلام، مع التحصيل لحساب البائع.`],
      ['كم ولاية تغطي كل شركة؟', `عدد الولايات المعلن في كل موقع: ${WILAYAS.join('، ')}. وتذكر Elogistia أنها حاضرة في كل الولايات دون إعطاء عدد؛ ويذكر EMS Champion Post 43 ولاية لعرضه الخاص بتجار الويب.`],
      ['ما هي الشركات التي تقترح الاستلام من مكتب أو نقطة ترحيل؟', `${join(STOPDESK, 'و')} تعلن الاستلام من مكتب، وكالة أو نقطة ترحيل.`],
      ['ما هي الشركات التي تخزّن البضاعة وتؤكد الطلبيات؟', `${join(STORAGE, 'و')} تعلن التخزين؛ و${join(CONFIRM, 'و')} تعلن تأكيد الطلبيات عبر مركز اتصال.`],
      ['ما هي الشركات التي تسيّر المرتجعات؟', `${join(RETURNS, 'و')} تعلن تسيير المرتجعات أو الاستبدال.`],
      ['أي شركة لإرسال طرد إلى الخارج من الجزائر؟', `من بين الشركات التي تحققنا منها، ${join(INTERNATIONAL, 'و')} تصف إرساليات دولية. وتقدّم Conexlog نفسها في موقعها على أنها المتعامل المعتمد لـ UPS في الجزائر.`],
      ['كيف أربط متجري الإلكتروني بشركة توصيل؟', `${join(CONNECT, 'و')} تعلن واجهة برمجية أو ربطاً بالمتاجر الإلكترونية؛ وموقعا DHD و NOEST EXPRESS يحيلان إلى فضاء بائع اسمه Ecotrack. و Symloop، التي تنشر هذه الصفحة، شركة تطوير تربط متجراً أو تطبيقاً أو برنامج تسيير بشركات التوصيل.`],
      ['كيف أضيف شركتي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف خدمات التوصيل لديكم. الإدراج مجاني.'],
    ],
    related: [['أفضل تطبيقات التوصيل في الجزائر', '/applications-livraison-algerie/'], ['حلول الدفع الإلكتروني في الجزائر', '/solutions-paiement-en-ligne-algerie/'], ['أفضل برامج تسيير المخزون في الجزائر', '/logiciels-gestion-de-stock-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="societes-livraison-colis-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={[]} hideFounded hideCity />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
