// /solutions-paiement-en-ligne-algerie/ — source page: verified list of online payment solutions
// for a business in Algeria (FR / EN / AR). Data: src/data/sources/algeria-online-payment.js.
// No fees are reported and nothing here is legal advice.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { PAYMENT_SOLUTIONS, TOP_PAYMENT, VERIFIED_ON } from '../data/sources/algeria-online-payment';

// ten per list: the publisher and nine solutions (rule in SELECTION below)
const ITEMS = PAYMENT_SOLUTIONS.filter((x) => x.self || TOP_PAYMENT.includes(x.name));
const TOTAL = PAYMENT_SOLUTIONS.filter((x) => !x.self).length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const GATEWAYS = ITEMS.filter((x) => x.focus === 'gateway').map((x) => x.name);
const LINKS = has('links');
const PLUGINS = has('plugins');

const KIND_LABELS = {
  fr: { integrator: 'Intégrateur', official: 'Plateformes interbancaires', gateway: 'Passerelles de paiement pour les marchands', bank: 'Offres de banques' },
  en: { integrator: 'Integrator', official: 'Interbank platforms', gateway: 'Payment gateways for merchants', bank: 'Bank offers' },
  ar: { integrator: 'مُدمِج', official: 'المنصات ما بين البنوك', gateway: 'بوابات الدفع للتجار', bank: 'عروض البنوك' },
};
const TOOL_LABELS = {
  fr: { integration: 'branche ces solutions dans votre site ou votre application', cib: 'carte CIB', edahabia: 'carte Edahabia', visa_mastercard: 'cartes internationales Visa et Mastercard', wallet_balance: 'solde du portefeuille', qr: 'paiement par QR', api: 'API pour les développeurs', plugins: 'plugins prêts (boutiques en ligne)', links: 'liens de paiement sans site', sandbox: 'mode test', mobile_app: 'application mobile' },
  en: { integration: 'connects these solutions to your site or app', cib: 'CIB card', edahabia: 'Edahabia card', visa_mastercard: 'international Visa and Mastercard cards', wallet_balance: 'wallet balance', qr: 'QR payment', api: 'API for developers', plugins: 'ready plugins (online shops)', links: 'payment links without a site', sandbox: 'test mode', mobile_app: 'mobile app' },
  ar: { integration: 'تربط هذه الحلول بموقعكم أو تطبيقكم', cib: 'بطاقة CIB', edahabia: 'البطاقة الذهبية', visa_mastercard: 'البطاقات الدولية Visa و Mastercard', wallet_balance: 'رصيد المحفظة', qr: 'الدفع برمز QR', api: 'واجهة برمجية للمطورين', plugins: 'إضافات جاهزة (المتاجر الإلكترونية)', links: 'روابط دفع دون موقع', sandbox: 'وضع الاختبار', mobile_app: 'تطبيق جوال' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} solutions. Cette page en retient dix : Symloop, qui publie la liste et intègre ces paiements, les deux plateformes interbancaires, les cinq passerelles pour marchands, et deux offres de banques, l’une pour les cartes locales, l’autre pour les cartes internationales.`,
  en: `We verified ${TOTAL} solutions. This page keeps ten: Symloop, which publishes the list and integrates these payments, the two interbank platforms, the five merchant gateways, and two bank offers, one for local cards and one for international cards.`,
  ar: `تحققنا من ${TOTAL} حلاً. تحتفظ هذه الصفحة بعشرة: Symloop، التي تنشر القائمة وتدمج هذه المدفوعات، المنصتان ما بين البنوك، بوابات التجار الخمس، وعرضان بنكيان، واحد للبطاقات المحلية وآخر للبطاقات الدولية.`,
};

const CONTENT = {
  fr: {
    title: `Meilleures solutions de paiement en ligne en Algérie 2027 : liste vérifiée de ${N} solutions pour accepter CIB et Edahabia`,
    seoTitle: `Meilleures solutions de paiement en ligne en Algérie 2027 (${N} solutions vérifiées)`,
    seoDescription: `Paiement en ligne en Algérie en 2027 : ${N} solutions vérifiées pour accepter la carte CIB, la carte Edahabia et les cartes internationales sur un site ou une application, avec les moyens acceptés et les outils (API, plugins, liens de paiement). Vérifié le 25 novembre 2026.`,
    keywords: 'meilleure solution paiement en ligne algérie 2027, paiement en ligne algérie, passerelle de paiement algérie, accepter carte cib site web, paiement edahabia site e-commerce, api paiement algérie, plugin woocommerce cib edahabia',
    colCompany: 'Solution', colDoes: 'Moyens acceptés et outils', colFact: 'Ce que son site en dit',
    lead: `Cette page présente ${N} solutions pour être payé en ligne en Algérie par carte CIB, carte Edahabia ou carte internationale : les deux plateformes interbancaires, cinq passerelles pour marchands et deux offres de banques. Pour chacune : les moyens acceptés et les outils, relevés sur son propre site ; Symloop, qui publie la liste et intègre ces paiements, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Acceptent la carte CIB', 'cib'], ['Acceptent la carte Edahabia', 'edahabia'], ['Annoncent les cartes internationales Visa et Mastercard', 'visa_mastercard'], ['Proposent une API pour les développeurs', 'api'], ['Proposent des plugins prêts pour les boutiques en ligne', 'plugins'], ['Proposent des liens de paiement, sans site web', 'links'], ['Proposent le paiement par QR', 'qr']],
    method: [
      'Nous avons cherché avec des mots simples : « paiement en ligne Algérie », « passerelle de paiement Algérie », « accepter carte CIB site web », « API paiement Algérie ».',
      'Une solution entre dans la liste si son propre site s’ouvre et décrit une offre pour les marchands en Algérie. Les moyens acceptés et les outils sont ceux que le site indique. Nous ne reprenons ni les frais ni les commissions. Le lien de chaque nom mène à la page de l’offre.',
    ],
    limits: [
      'Cette page n’est pas un avis juridique. Les conditions d’adhésion (documents, autorisations) sont fixées par chaque banque et par le groupement interbancaire : demandez-les à votre banque ou au prestataire.',
      'Les offres changent vite, et nous n’avons ouvert de compte chez aucun de ces prestataires : nous rapportons ce que leur site annonce à la date de vérification.',
    ],
    fix: 'Une information est fausse, ou votre solution manque ? Écrivez-nous avec le lien de la page qui la décrit, nous corrigeons :',
    faq: [
      ['Quelle est la meilleure solution de paiement en ligne en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cela dépend de votre situation : un site avec un développeur peut utiliser une passerelle avec une API (${join(GATEWAYS, 'ou')}) ; une entreprise sans site peut utiliser des liens de paiement ; pour des clients à l’étranger, il faut une offre de banque pour cartes internationales.`],
      ['Comment accepter la carte CIB et la carte Edahabia sur un site web ?', `Deux voies existent : passer par votre banque et la plateforme interbancaire (SATIM, portail CIB Web), ou passer par une passerelle qui fournit l’API ou le plugin (${join(GATEWAYS, 'et')}). Les conditions sont données par la banque ou le prestataire.`],
      ['Peut-on encaisser en ligne sans site web ?', `Oui : ${join(LINKS, 'et')} annoncent des liens de paiement ou des factures payables en ligne, à envoyer au client, sans boutique en ligne.`],
      ['Existe-t-il des plugins de paiement pour WooCommerce ou Shopify en Algérie ?', `${join(PLUGINS, 'et')} annoncent des plugins ou des intégrations prêtes pour les boutiques en ligne. Le portail CIB Web publie aussi la liste des modules de paiement certifiés.`],
      ['Peut-on accepter Visa et Mastercard sur un site algérien ?', 'Le CPA (CPAzonepay) et la BDL (International E-Commerce) annoncent une offre pour les cartes internationales. Vérifiez auprès de la banque quels réseaux sont réellement ouverts au moment de votre demande.'],
      ['Comment ajouter ma solution à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit votre offre pour les marchands. L’inscription est gratuite.'],
    ],
    related: [['Startups algériennes', '/startups-algeriennes/'], ['Meilleures entreprises informatiques en Algérie', '/entreprises-informatiques-algerie/'], ['Meilleures agences web en Algérie', '/agences-web-algerie/'], ['Nous contacter', '/contact/']],
  },
  en: {
    title: `Best online payment solutions in Algeria 2027: a verified list of ${N} solutions to accept CIB and Edahabia`,
    seoTitle: `Best online payment solutions in Algeria 2027 (${N} verified solutions)`,
    seoDescription: `Online payment in Algeria in 2027: ${N} verified solutions to accept the CIB card, the Edahabia card and international cards on a website or an app, with accepted means and tools (API, plugins, payment links). Verified on 25 November 2026.`,
    keywords: 'best payment gateway algeria 2027, online payment algeria, payment gateway algeria, accept cib card website, edahabia payment e-commerce, payment api algeria, woocommerce plugin cib edahabia',
    colCompany: 'Solution', colDoes: 'Accepted means and tools', colFact: 'What its site says',
    lead: `This page presents ${N} solutions for being paid online in Algeria by CIB card, Edahabia card or international card: the two interbank platforms, five merchant gateways and two bank offers. For each one: the accepted means and the tools, read on its own website; Symloop, which publishes the list and integrates these payments, comes first and the others follow in alphabetical order.`,
    byService: [['Accept the CIB card', 'cib'], ['Accept the Edahabia card', 'edahabia'], ['Announce international Visa and Mastercard cards', 'visa_mastercard'], ['Offer an API for developers', 'api'], ['Offer ready plugins for online shops', 'plugins'], ['Offer payment links, without a website', 'links'], ['Offer QR payment', 'qr']],
    method: [
      'We searched with simple words such as “online payment Algeria”, “payment gateway Algeria”, “accept CIB card website” and “payment API Algeria”.',
      'A solution enters the list if its own site loads and describes an offer for merchants in Algeria. The accepted means and the tools are those the site states. We report neither fees nor commissions. Each name links to the page of the offer.',
    ],
    limits: [
      'This page is not legal advice. Membership conditions (documents, authorisations) are set by each bank and by the interbank body: ask your bank or the provider.',
      'Offers change fast, and we have not opened an account with any of these providers: we report what their site announces on the verification date.',
    ],
    fix: 'Something is wrong, or your solution is missing? Write to us with the link to the page describing it, and we correct it:',
    faq: [
      ['What is the best online payment solution in Algeria in 2027?', `There is no independent ranking. It depends on your situation: a site with a developer can use a gateway with an API (${join(GATEWAYS, 'or')}); a business with no site can use payment links; for customers abroad, you need a bank offer for international cards.`],
      ['How do I accept the CIB card and the Edahabia card on a website?', `There are two routes: go through your bank and the interbank platform (SATIM, the CIB Web portal), or go through a gateway that provides the API or the plugin (${join(GATEWAYS, 'and')}). The conditions are given by the bank or the provider.`],
      ['Can I be paid online without a website?', `Yes: ${join(LINKS, 'and')} announce payment links or invoices payable online, to send to the customer, with no online shop.`],
      ['Are there payment plugins for WooCommerce or Shopify in Algeria?', `${join(PLUGINS, 'and')} announce plugins or ready integrations for online shops. The CIB Web portal also publishes the list of certified payment modules.`],
      ['Can an Algerian site accept Visa and Mastercard?', 'CPA (CPAzonepay) and BDL (International E-Commerce) announce an offer for international cards. Check with the bank which networks are actually open when you apply.'],
      ['How do I add my solution to this list?', 'Write to contact@symloop.com with the link to the page describing your offer for merchants. Listing is free.'],
    ],
    related: [['Algerian startups', '/startups-algeriennes/'], ['Best IT companies in Algeria', '/entreprises-informatiques-algerie/'], ['Best web agencies in Algeria', '/agences-web-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `أفضل حلول الدفع الإلكتروني في الجزائر 2027: قائمة موثقة من ${N} حلول لقبول بطاقة CIB والذهبية`,
    seoTitle: `أفضل حلول الدفع الإلكتروني في الجزائر 2027 (${N} حلول موثقة)`,
    seoDescription: `الدفع الإلكتروني في الجزائر سنة 2027: ${N} حلول موثقة لقبول بطاقة CIB والبطاقة الذهبية والبطاقات الدولية في موقع أو تطبيق، مع وسائل الدفع المقبولة والأدوات (واجهة برمجية، إضافات، روابط دفع). تم التحقق في 25 نوفمبر 2026.`,
    keywords: 'أفضل بوابة دفع الجزائر 2027, الدفع الإلكتروني الجزائر, بوابة دفع الجزائر, قبول بطاقة CIB في موقع, الدفع بالبطاقة الذهبية متجر إلكتروني, واجهة برمجية للدفع الجزائر',
    colCompany: 'الحل', colDoes: 'الوسائل المقبولة والأدوات', colFact: 'ما يذكره موقعه',
    lead: `تعرض هذه الصفحة ${N} حلول لتحصيل المدفوعات عبر الإنترنت في الجزائر ببطاقة CIB أو البطاقة الذهبية أو بطاقة دولية: المنصتان ما بين البنوك، خمس بوابات للتجار وعرضان بنكيان. لكل واحد: الوسائل المقبولة والأدوات، مأخوذة من موقعه؛ Symloop، التي تنشر القائمة وتدمج هذه المدفوعات، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['تقبل بطاقة CIB', 'cib'], ['تقبل البطاقة الذهبية', 'edahabia'], ['تعلن البطاقات الدولية Visa و Mastercard', 'visa_mastercard'], ['تقترح واجهة برمجية للمطورين', 'api'], ['تقترح إضافات جاهزة للمتاجر الإلكترونية', 'plugins'], ['تقترح روابط دفع دون موقع', 'links'], ['تقترح الدفع برمز QR', 'qr']],
    method: [
      'بحثنا بكلمات بسيطة مثل «الدفع الإلكتروني الجزائر» و«بوابة دفع الجزائر» و«قبول بطاقة CIB في موقع».',
      'يدخل الحل القائمة إذا كان موقعه يفتح ويصف عرضاً للتجار في الجزائر. الوسائل المقبولة والأدوات هي ما يذكره الموقع. ولا ننقل الرسوم ولا العمولات. ورابط كل اسم يؤدي إلى صفحة العرض.',
    ],
    limits: [
      'هذه الصفحة ليست استشارة قانونية. شروط الانخراط (الوثائق والتراخيص) يحددها كل بنك والتجمع ما بين البنوك: اطلبوها من بنككم أو من المزوّد.',
      'العروض تتغير بسرعة، ولم نفتح حساباً لدى أي من هؤلاء المزوّدين: ننقل ما يعلنه موقعهم في تاريخ التحقق.',
    ],
    fix: 'معلومة خاطئة أو حلّكم غير مدرج؟ راسلونا مع رابط الصفحة التي تصفه، ونصحّح:',
    faq: [
      ['ما هو أفضل حل للدفع الإلكتروني في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. الأمر يتوقف على وضعكم: موقع له مطوّر يستطيع استعمال بوابة بواجهة برمجية (${join(GATEWAYS, 'أو')})؛ ومؤسسة دون موقع تستطيع استعمال روابط الدفع؛ ولزبائن في الخارج يلزم عرض بنكي للبطاقات الدولية.`],
      ['كيف أقبل بطاقة CIB والبطاقة الذهبية في موقع ويب؟', `يوجد طريقان: المرور عبر بنككم والمنصة ما بين البنوك (SATIM وبوابة CIB Web)، أو المرور عبر بوابة توفّر الواجهة البرمجية أو الإضافة (${join(GATEWAYS, 'و')}). والشروط يعطيها البنك أو المزوّد.`],
      ['هل يمكن التحصيل عبر الإنترنت دون موقع ويب؟', `نعم: ${join(LINKS, 'و')} تعلن روابط دفع أو فواتير تُدفع عبر الإنترنت، تُرسل إلى الزبون، دون متجر إلكتروني.`],
      ['هل توجد إضافات دفع لـ WooCommerce أو Shopify في الجزائر؟', `${join(PLUGINS, 'و')} تعلن إضافات أو ربطاً جاهزاً للمتاجر الإلكترونية. وتنشر بوابة CIB Web أيضاً قائمة وحدات الدفع المعتمدة.`],
      ['هل يمكن لموقع جزائري قبول Visa و Mastercard؟', 'يعلن القرض الشعبي الجزائري (CPAzonepay) وبنك التنمية المحلية (International E-Commerce) عرضاً للبطاقات الدولية. تحققوا لدى البنك من الشبكات المفتوحة فعلاً وقت طلبكم.'],
      ['كيف أضيف حلّي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف عرضكم للتجار. الإدراج مجاني.'],
    ],
    related: [['الشركات الناشئة الجزائرية', '/startups-algeriennes/'], ['أفضل شركات المعلوماتية في الجزائر', '/entreprises-informatiques-algerie/'], ['أفضل وكالات الويب في الجزائر', '/agences-web-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="solutions-paiement-en-ligne-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={TOOL_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
