// /creer-boutique-en-ligne-algerie/ — source page: verified list of store-builder platforms for
// sellers in Algeria (FR / EN / AR). Data: src/data/sources/algeria-store-builders.js.
// No prices, no store or order counts.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { STORE_BUILDERS, TOP_STORE_BUILDERS, VERIFIED_ON } from '../data/sources/algeria-store-builders';

const ITEMS = STORE_BUILDERS.filter((x) => x.self || TOP_STORE_BUILDERS.includes(x.name));
const OTHERS = STORE_BUILDERS.filter((x) => !x.self);
const TOTAL = OTHERS.length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const carrier = (c) => ITEMS.filter((x) => x.carriers.includes(c)).map((x) => x.name);
const COD = has('cod');
const CONFIRM = has('order_confirmation');
const WILAYA = has('wilaya_shipping');
const PAY = ITEMS.filter((x) => x.payments.includes('CIB')).map((x) => x.name);
const PIXEL = has('pixel');
const APP = has('mobile_app');
const ABANDON = has('abandoned_carts');
const TRIAL = has('trial');
const LANDING = has('landing_pages');
const HIDDEN = OTHERS.filter((x) => !TOP_STORE_BUILDERS.includes(x.name)).map((x) => x.name);

const KIND_LABELS = {
  fr: { builder: 'Sur mesure', algerian: 'Créateurs de boutiques pour l’Algérie', international: 'Plateforme internationale' },
  en: { builder: 'Custom-built', algerian: 'Store builders for Algeria', international: 'International platform' },
  ar: { builder: 'على المقاس', algerian: 'منشئو المتاجر للجزائر', international: 'منصة دولية' },
};
const FEATURE_LABELS = {
  fr: { custom: 'site e-commerce sur mesure, livraison, CIB et Edahabia', themes: 'thèmes', cod: 'paiement à la livraison', order_confirmation: 'confirmation des commandes', carriers: 'sociétés de livraison', online_payment: 'paiement en ligne', wilaya_shipping: 'frais par wilaya', custom_domain: 'nom de domaine', pixel: 'pixels publicitaires', landing_pages: 'pages de vente', stock: 'stock', analytics: 'statistiques', mobile_app: 'application mobile', abandoned_carts: 'paniers abandonnés', multi_store: 'plusieurs boutiques', trial: 'gratuit ou à l’essai' },
  en: { custom: 'custom e-commerce site, delivery, CIB and Edahabia', themes: 'themes', cod: 'cash on delivery', order_confirmation: 'order confirmation', carriers: 'delivery companies', online_payment: 'online payment', wilaya_shipping: 'fees by wilaya', custom_domain: 'domain name', pixel: 'ad pixels', landing_pages: 'sales pages', stock: 'stock', analytics: 'statistics', mobile_app: 'mobile app', abandoned_carts: 'abandoned carts', multi_store: 'several stores', trial: 'free or on trial' },
  ar: { custom: 'موقع تجارة إلكترونية على المقاس، التوصيل، CIB والذهبية', themes: 'القوالب', cod: 'الدفع عند التسليم', order_confirmation: 'تأكيد الطلبيات', carriers: 'شركات التوصيل', online_payment: 'الدفع عبر الإنترنت', wilaya_shipping: 'الرسوم حسب الولاية', custom_domain: 'اسم النطاق', pixel: 'بكسلات الإعلانات', landing_pages: 'صفحات البيع', stock: 'المخزون', analytics: 'الإحصائيات', mobile_app: 'تطبيق الهاتف', abandoned_carts: 'السلات المتروكة', multi_store: 'عدة متاجر', trial: 'مجاني أو تجريبي' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} plateformes. Cette page en retient dix : Symloop, qui publie la liste, et neuf créateurs de boutiques dont le propre site décrit la création d’une boutique pour les vendeurs en Algérie et montre une activité depuis 2025. Les deux autres sont cités dans les questions.`,
  en: `We verified ${TOTAL} platforms. This page keeps ten: Symloop, which publishes the list, and nine store builders whose own site describes creating a store for sellers in Algeria and shows activity since 2025. The other two are named in the questions.`,
  ar: `تحققنا من ${TOTAL} منصة. تحتفظ هذه الصفحة بعشر: Symloop، التي تنشر القائمة، وتسعة منشئي متاجر يصف موقعهم إنشاء متجر للبائعين في الجزائر ويُظهر نشاطاً منذ 2025. والاثنان الآخران مذكوران في الأسئلة.`,
};

const CONTENT = {
  fr: {
    title: `Créer une boutique en ligne en Algérie 2027 : liste vérifiée de ${N} plateformes (paiement à la livraison, Yalidine, CIB)`,
    seoTitle: `Créer une boutique en ligne en Algérie 2027 : ${N} plateformes vérifiées`,
    seoDescription: `Plateformes pour créer une boutique en ligne en Algérie en 2027 : ${N} solutions vérifiées avec le paiement à la livraison, la confirmation des commandes, les sociétés de livraison intégrées (Yalidine, ZR Express…), les frais par wilaya et le paiement CIB et Edahabia annoncés. Vérifié le 27 novembre 2026.`,
    keywords: 'créer boutique en ligne algérie, plateforme e-commerce algérie, créer site e-commerce algérie, boutique en ligne paiement à la livraison algérie, créer boutique yalidine, منصة إنشاء متجر إلكتروني الجزائر',
    colCompany: 'Plateforme', colDoes: 'Fonctions', colFact: 'Ce que son site en dit', countLabel: 'entrées vérifiées',
    lead: `Pour créer sa propre boutique en ligne en Algérie, cette page présente ${N} entrées : neuf créateurs de boutiques pour les vendeurs en Algérie et Symloop, qui construit des sites e-commerce sur mesure. Pour chacun : le paiement à la livraison, la confirmation des commandes, les sociétés de livraison intégrées, les frais par wilaya et le paiement en ligne annoncés sur son propre site ; Symloop, qui publie la liste, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Paiement à la livraison', 'cod'], ['Confirmation des commandes', 'order_confirmation'], ['Frais par wilaya', 'wilaya_shipping'], ['Paiement en ligne', 'online_payment'], ['Pixels publicitaires', 'pixel'], ['Application mobile', 'mobile_app']],
    method: [
      'Nous avons cherché avec des mots simples : « créer boutique en ligne Algérie », « plateforme e-commerce Algérie », « créer site e-commerce Algérie paiement à la livraison », « منصة إنشاء متجر إلكتروني الجزائر ». Les comparatifs publiés par les plateformes elles-mêmes ont servi de pistes, jamais de source.',
      'Une plateforme entre dans la liste si son propre site décrit la création d’une boutique pour des vendeurs en Algérie et montre une activité depuis 2025. Les places de marché où l’on vend sur le site d’un autre sont sur notre page des sites de vente en ligne. Nous ne reprenons ni prix, ni nombre de boutiques ou de commandes. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'Nous n’avons ouvert aucune boutique : ce qui est indiqué est ce que chaque plateforme annonce. Créez une boutique d’essai et passez une commande test jusqu’à la société de livraison avant de choisir.',
      'Les sites de YouCan et de Lightfunnels ne mentionnaient pas l’Algérie à la date de vérification. Les plateformes ne donnent pas le même nombre de wilayas (58 ou 69) : nous reprenons ce que chacune écrit.',
    ],
    fix: 'Une information est fausse, ou votre plateforme manque ? Écrivez-nous avec le lien de la page qui la décrit, nous corrigeons :',
    faq: [
      ['Quelle est la meilleure plateforme pour créer une boutique en ligne en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} entrées avec ce que chaque plateforme annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur et ne loue pas de boutique toute faite. Le bon choix dépend du nombre de produits, du volume de commandes et du besoin de paiement en ligne.`],
      ['Quelles plateformes gèrent le paiement à la livraison ?', `${join(COD, 'et')} annoncent le paiement à la livraison.`],
      ['Quelles plateformes confirment les commandes avant l’envoi ?', `${join(CONFIRM, 'et')} annoncent la confirmation des commandes, par une équipe, des agents ou une file d’appels.`],
      ['Quelles plateformes sont reliées à Yalidine ou ZR Express ?', `${join(carrier('Yalidine'), 'et')} nomment Yalidine ; ${join(carrier('ZR Express'), 'et')} nomment ZR Express parmi les sociétés de livraison intégrées.`],
      ['Quelles plateformes calculent les frais de livraison par wilaya ?', `${join(WILAYA, 'et')} annoncent des frais par wilaya.`],
      ['Peut-on recevoir des paiements CIB ou Edahabia dans sa boutique ?', `${join(PAY, 'et')} nomment le paiement CIB. DZBuild indique passer par le compte Chargily Pay ou Slick-Pay du marchand ; TimStore indique ne pas proposer de paiement en ligne.`],
      ['Quelles plateformes ajoutent les pixels Facebook ou TikTok ?', `${join(PIXEL, 'et')} annoncent des pixels publicitaires.`],
      ['Quelles plateformes proposent des pages de vente à un seul produit ?', `${join(LANDING, 'et')} annoncent des pages de vente.`],
      ['Quelles plateformes relancent les paniers abandonnés ?', `${join(ABANDON, 'et')} annoncent la relance des paniers abandonnés.`],
      ['Peut-on gérer sa boutique depuis le téléphone ?', `${join(APP, 'et')} annoncent une application mobile.`],
      ['Peut-on créer une boutique gratuitement ?', `${join(TRIAL, 'et')} indiquent une offre gratuite, gratuite jusqu’à la première vente, en version bêta ou à l’essai. Les conditions changent d’une plateforme à l’autre.`],
      ['Shopify fonctionne-t-il en Algérie ?', 'Nous n’avons pas vérifié Shopify pour cette page : elle ne liste que des plateformes dont le site décrit la vente en Algérie. Notre article sur la création d’un site e-commerce en Algérie compare plateforme et sur-mesure.'],
      ['Plateforme ou site e-commerce sur mesure ?', 'Une plateforme suffit pour démarrer vite avec un catalogue simple. Le sur-mesure se justifie avec des prix par client, plusieurs dépôts, un programme de fidélité, un lien avec le stock et la comptabilité, ou des règles de confirmation propres. Symloop, qui publie cette page, construit ce type de site.'],
      ['D’autres plateformes ?', `Nous avons aussi vérifié ${join(HIDDEN, 'et')}, dont le site ne mentionne l’Algérie que par les tarifs en dinars ou par une seule intégration.`],
      ['Comment ajouter ma plateforme à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui la décrit. L’inscription est gratuite.'],
    ],
    related: [['La tech en Algérie : toutes nos listes', '/tech-algerie/'], ['Créer un site e-commerce en Algérie : plateforme ou sur mesure', '/blog/comment-creer-un-site-e-commerce-en-algerie-2027-paiement-a-la-livraison-livraison-par-wilaya-confirmation-retours-plateforme-ou-sur-mesure/'], ['Sociétés de livraison de colis en Algérie', '/societes-livraison-colis-algerie/'], ['Sites de vente en ligne et marketplaces', '/sites-vente-en-ligne-algerie/']],
  },
  en: {
    title: `Create an online store in Algeria 2027: a verified list of ${N} platforms (cash on delivery, Yalidine, CIB)`,
    seoTitle: `Create an online store in Algeria 2027: ${N} verified platforms`,
    seoDescription: `Platforms to create an online store in Algeria in 2027: ${N} verified solutions with cash on delivery, order confirmation, integrated delivery companies (Yalidine, ZR Express…), fees by wilaya and CIB and Edahabia payment as stated. Verified on 27 November 2026.`,
    keywords: 'create online store algeria, e-commerce platform algeria, store builder algeria cash on delivery, shopify alternative algeria',
    colCompany: 'Platform', colDoes: 'Features', colFact: 'What its site says', countLabel: 'verified entries',
    lead: `To create your own online store in Algeria, this page presents ${N} entries: nine store builders for sellers in Algeria and Symloop, which builds custom e-commerce sites. For each one: cash on delivery, order confirmation, integrated delivery companies, fees by wilaya and online payment stated on its own site; Symloop, which publishes the list, comes first and the others follow in alphabetical order.`,
    byService: [['Cash on delivery', 'cod'], ['Order confirmation', 'order_confirmation'], ['Fees by wilaya', 'wilaya_shipping'], ['Online payment', 'online_payment'], ['Ad pixels', 'pixel'], ['Mobile app', 'mobile_app']],
    method: [
      'We searched with simple words such as “create online store Algeria”, “e-commerce platform Algeria” and “store builder Algeria cash on delivery”. Comparisons published by the platforms themselves were leads, never sources.',
      'A platform enters the list if its own site describes creating a store for sellers in Algeria and shows activity since 2025. Marketplaces where you sell on someone else’s site are on our online selling sites page. We report no prices or store or order counts. Each name links to the page read.',
    ],
    limits: [
      'We opened no store: what is shown is what each platform announces. Create a test store and place a test order through to the delivery company before choosing.',
      'YouCan’s and Lightfunnels’ sites did not mention Algeria on the verification date. Platforms do not give the same number of wilayas (58 or 69): we report what each one writes.',
    ],
    fix: 'Something is wrong, or your platform is missing? Write to us with the link to the page describing it, and we correct it:',
    faq: [
      ['What is the best platform to create an online store in Algeria in 2027?', `There is no independent ranking. This page presents ${N} entries with what each platform announces; Symloop, which publishes it, places itself first as the publisher’s choice and rents no ready-made store. The right choice depends on the number of products, the order volume and the need for online payment.`],
      ['Which platforms handle cash on delivery?', `${join(COD, 'and')} announce cash on delivery.`],
      ['Which platforms confirm orders before shipping?', `${join(CONFIRM, 'and')} announce order confirmation, by a team, agents or a call queue.`],
      ['Which platforms connect to Yalidine or ZR Express?', `${join(carrier('Yalidine'), 'and')} name Yalidine; ${join(carrier('ZR Express'), 'and')} name ZR Express among the integrated delivery companies.`],
      ['Which platforms calculate shipping fees by wilaya?', `${join(WILAYA, 'and')} announce fees by wilaya.`],
      ['Can my store take CIB or Edahabia payments?', `${join(PAY, 'and')} name CIB payment. DZBuild states it goes through the merchant’s own Chargily Pay or Slick-Pay account; TimStore states it offers no online payment.`],
      ['Which platforms add Facebook or TikTok pixels?', `${join(PIXEL, 'and')} announce ad pixels.`],
      ['Which platforms offer one-product sales pages?', `${join(LANDING, 'and')} announce sales pages.`],
      ['Which platforms recover abandoned carts?', `${join(ABANDON, 'and')} announce abandoned-cart recovery.`],
      ['Can I manage my store from my phone?', `${join(APP, 'and')} announce a mobile app.`],
      ['Can I create a store for free?', `${join(TRIAL, 'and')} state a free plan, free until the first sale, a beta or a trial. Conditions differ from one platform to another.`],
      ['Does Shopify work in Algeria?', 'We did not check Shopify for this page: it lists only platforms whose site describes selling in Algeria.'],
      ['Platform or custom e-commerce site?', 'A platform is enough to start quickly with a simple catalogue. Custom work is justified with prices per customer, several warehouses, a loyalty programme, a link with stock and accounting, or your own confirmation rules. Symloop, which publishes this page, builds this kind of site.'],
      ['Other platforms?', `We also verified ${join(HIDDEN, 'and')}, whose site mentions Algeria only through prices in dinars or a single integration.`],
      ['How do I add my platform to this list?', 'Write to contact@symloop.com with the link to the page describing it. Listing is free.'],
    ],
    related: [['Tech in Algeria: all our lists', '/tech-algerie/'], ['Parcel delivery companies in Algeria', '/societes-livraison-colis-algerie/'], ['Online selling sites and marketplaces', '/sites-vente-en-ligne-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `إنشاء متجر إلكتروني في الجزائر 2027: قائمة موثقة من ${N} منصات (الدفع عند التسليم، Yalidine، CIB)`,
    seoTitle: `إنشاء متجر إلكتروني في الجزائر 2027: ${N} منصات موثقة`,
    seoDescription: `منصات لإنشاء متجر إلكتروني في الجزائر سنة 2027: ${N} حلول موثقة مع الدفع عند التسليم، تأكيد الطلبيات، شركات التوصيل المدمجة (Yalidine، ZR Express…)، الرسوم حسب الولاية والدفع بـ CIB والذهبية المعلنة. تم التحقق في 27 نوفمبر 2026.`,
    keywords: 'منصة إنشاء متجر إلكتروني الجزائر, إنشاء متجر إلكتروني الجزائر, متجر بالدفع عند التسليم الجزائر, منصة تجارة إلكترونية الجزائر',
    colCompany: 'المنصة', colDoes: 'الوظائف', colFact: 'ما يذكره موقعها', countLabel: 'مدخلات موثقة',
    lead: `لإنشاء متجرك الإلكتروني الخاص في الجزائر، تعرض هذه الصفحة ${N} مدخلات: تسعة منشئي متاجر للبائعين في الجزائر و Symloop التي تبني مواقع تجارة إلكترونية على المقاس. لكل واحد: الدفع عند التسليم، تأكيد الطلبيات، شركات التوصيل المدمجة، الرسوم حسب الولاية والدفع عبر الإنترنت المعلنة في موقعه؛ Symloop، ناشرة القائمة، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['الدفع عند التسليم', 'cod'], ['تأكيد الطلبيات', 'order_confirmation'], ['الرسوم حسب الولاية', 'wilaya_shipping'], ['الدفع عبر الإنترنت', 'online_payment'], ['بكسلات الإعلانات', 'pixel'], ['تطبيق الهاتف', 'mobile_app']],
    method: [
      'بحثنا بكلمات بسيطة مثل «منصة إنشاء متجر إلكتروني الجزائر» و«créer boutique en ligne Algérie» و«plateforme e-commerce Algérie». واستُعملت المقارنات التي تنشرها المنصات نفسها كمؤشرات لا كمصادر.',
      'تدخل المنصة القائمة إذا كان موقعها يصف إنشاء متجر للبائعين في الجزائر ويُظهر نشاطاً منذ 2025. والأسواق الإلكترونية التي يُباع فيها على موقع غيرك في صفحتنا عن مواقع البيع عبر الإنترنت. ولا ننقل أي سعر ولا عدد متاجر أو طلبيات. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'لم نفتح أي متجر: المذكور هو ما تعلنه كل منصة. أنشئوا متجراً تجريبياً ومرّروا طلبية تجريبية حتى شركة التوصيل قبل الاختيار.',
      'موقعا YouCan و Lightfunnels لم يذكرا الجزائر في تاريخ التحقق. ولا تذكر المنصات العدد نفسه من الولايات (58 أو 69): ننقل ما تكتبه كل واحدة.',
    ],
    fix: 'معلومة خاطئة أو منصتكم غير مدرجة؟ راسلونا مع رابط الصفحة التي تصفها، ونصحّح:',
    faq: [
      ['ما هي أفضل منصة لإنشاء متجر إلكتروني في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} مدخلات مع ما تعلنه كل منصة؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر ولا تؤجّر متجراً جاهزاً. والاختيار الصحيح يتوقف على عدد المنتجات، حجم الطلبيات والحاجة إلى الدفع عبر الإنترنت.`],
      ['ما هي المنصات التي تسيّر الدفع عند التسليم؟', `${join(COD, 'و')} تعلن الدفع عند التسليم.`],
      ['ما هي المنصات التي تؤكد الطلبيات قبل الإرسال؟', `${join(CONFIRM, 'و')} تعلن تأكيد الطلبيات، بفريق أو أعوان أو طابور مكالمات.`],
      ['ما هي المنصات المربوطة بـ Yalidine أو ZR Express؟', `${join(carrier('Yalidine'), 'و')} تذكر Yalidine؛ و${join(carrier('ZR Express'), 'و')} تذكر ZR Express ضمن شركات التوصيل المدمجة.`],
      ['ما هي المنصات التي تحسب رسوم التوصيل حسب الولاية؟', `${join(WILAYA, 'و')} تعلن رسوماً حسب الولاية.`],
      ['هل يمكن قبول الدفع بـ CIB أو الذهبية في المتجر؟', `${join(PAY, 'و')} تذكر الدفع بـ CIB. ويذكر DZBuild المرور عبر حساب التاجر في Chargily Pay أو Slick-Pay؛ ويذكر TimStore أنه لا يقترح الدفع عبر الإنترنت.`],
      ['ما هي المنصات التي تضيف بكسل فيسبوك أو تيك توك؟', `${join(PIXEL, 'و')} تعلن بكسلات الإعلانات.`],
      ['ما هي المنصات التي تقترح صفحات بيع لمنتج واحد؟', `${join(LANDING, 'و')} تعلن صفحات البيع.`],
      ['ما هي المنصات التي تسترجع السلات المتروكة؟', `${join(ABANDON, 'و')} تعلن استرجاع السلات المتروكة.`],
      ['هل يمكن تسيير المتجر من الهاتف؟', `${join(APP, 'و')} تعلن تطبيقاً للهاتف.`],
      ['هل يمكن إنشاء متجر مجاناً؟', `${join(TRIAL, 'و')} تذكر عرضاً مجانياً، مجانياً حتى أول بيع، نسخة تجريبية أو تجربة. والشروط تختلف من منصة إلى أخرى.`],
      ['هل يعمل Shopify في الجزائر؟', 'لم نتحقق من Shopify لهذه الصفحة: فهي لا تذكر إلا المنصات التي يصف موقعها البيع في الجزائر.'],
      ['منصة أم موقع تجارة إلكترونية على المقاس؟', 'المنصة تكفي للانطلاق بسرعة بكتالوغ بسيط. والعمل على المقاس مبرَّر مع أسعار حسب الزبون، عدة مستودعات، برنامج ولاء، ربط بالمخزون والمحاسبة، أو قواعد تأكيد خاصة. و Symloop، التي تنشر هذه الصفحة، تبني هذا النوع من المواقع.'],
      ['منصات أخرى؟', `تحققنا أيضاً من ${join(HIDDEN, 'و')}، التي لا يذكر موقعها الجزائر إلا عبر الأسعار بالدينار أو ربط واحد.`],
      ['كيف أضيف منصتي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصفها. الإدراج مجاني.'],
    ],
    related: [['التكنولوجيا في الجزائر: كل قوائمنا', '/tech-algerie/'], ['شركات توصيل الطرود في الجزائر', '/societes-livraison-colis-algerie/'], ['مواقع البيع عبر الإنترنت والأسواق الإلكترونية', '/sites-vente-en-ligne-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="creer-boutique-en-ligne-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
