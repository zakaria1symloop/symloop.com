// /applications-bancaires-algerie/ — source page: verified list of mobile banking apps of banks
// and of the post office in Algeria (FR / EN / AR).
// Data: src/data/sources/algeria-banking-apps.js. No fees, no rates, no financial advice.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { BANKING_APPS, TOP_BANKING, VERIFIED_ON } from '../data/sources/algeria-banking-apps';

// ten per list: the publisher and nine apps (rule in SELECTION below)
const ITEMS = BANKING_APPS.filter((x) => x.self || TOP_BANKING.includes(x.name));
const OTHERS = BANKING_APPS.filter((x) => !x.self);
const TOTAL = OTHERS.length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
// answered from the whole verified dataset, with the bank beside each app
const all = (key) => OTHERS.filter((x) => x.services.includes(key)).map((x) => `${x.name} (${x.by})`);
const BANKS = [...new Set(OTHERS.map((x) => x.by))];
const OPEN = all('open_online');
const QR = all('qr');
const INTERBANK = all('interbank');
const CARDS = all('cards');
const BILLS = all('bills');
const BIO = all('biometric');
const BUSINESS = all('business');

const KIND_LABELS = {
  fr: { builder: 'Construction d’applications', post: 'Poste', public: 'Banques publiques', private: 'Banques privées' },
  en: { builder: 'App building', post: 'Post office', public: 'Public banks', private: 'Private banks' },
  ar: { builder: 'بناء التطبيقات', post: 'البريد', public: 'بنوك عمومية', private: 'بنوك خاصة' },
};
const FEATURE_LABELS = {
  fr: { build: 'construit des applications mobiles sur mesure', balances: 'soldes et historique', transfers: 'virements', interbank: 'virements vers d’autres banques', cards: 'gestion des cartes', bills: 'factures et recharges', qr: 'paiement par QR code', merchant: 'paiement chez les commerçants', open_online: 'ouverture de compte dans l’application', savings: 'épargne', loans: 'simulation de crédit', cheques: 'chéquiers', locator: 'agences et distributeurs', biometric: 'connexion biométrique', alerts: 'notifications', business: 'profil professionnel', branch_signup: 'activation en agence', self_signup: 'activation par le client' },
  en: { build: 'builds custom mobile apps', balances: 'balances and history', transfers: 'transfers', interbank: 'transfers to other banks', cards: 'card management', bills: 'bills and top-ups', qr: 'QR code payment', merchant: 'payment at merchants', open_online: 'in-app account opening', savings: 'savings', loans: 'credit simulation', cheques: 'cheque books', locator: 'branches and ATMs', biometric: 'biometric login', alerts: 'notifications', business: 'business profile', branch_signup: 'activated at a branch', self_signup: 'activated by the customer' },
  ar: { build: 'تبني تطبيقات جوال على المقاس', balances: 'الأرصدة والسجل', transfers: 'التحويلات', interbank: 'تحويلات نحو بنوك أخرى', cards: 'تسيير البطاقات', bills: 'الفواتير والتعبئة', qr: 'الدفع برمز QR', merchant: 'الدفع عند التجار', open_online: 'فتح الحساب داخل التطبيق', savings: 'الادخار', loans: 'محاكاة القرض', cheques: 'دفاتر الشيكات', locator: 'الوكالات والموزعات', biometric: 'الدخول البيومتري', alerts: 'الإشعارات', business: 'ملف مهني', branch_signup: 'التفعيل في الوكالة', self_signup: 'التفعيل من طرف الزبون' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} applications. Cette page en retient dix : Symloop, qui publie la liste et construit des applications mobiles, l’application principale des huit banques dont la page qui la décrit s’ouvrait, et l’application de la poste, lue sur sa fiche officielle. Les autres applications, dont celles de paiement par QR code, sont citées dans les questions.`,
  en: `We verified ${TOTAL} apps. This page keeps ten: Symloop, which publishes the list and builds mobile apps, the main app of the eight banks whose own page describing it loaded, and the post office’s app, read on its official listing. The other apps, including the QR code payment apps, are named in the questions.`,
  ar: `تحققنا من ${TOTAL} تطبيقاً. تحتفظ هذه الصفحة بعشرة: Symloop، التي تنشر القائمة وتبني تطبيقات الجوال، التطبيق الرئيسي للبنوك الثمانية التي كانت صفحتها التي تصفه تفتح، وتطبيق البريد، المقروء في صفحته الرسمية. والتطبيقات الأخرى، ومنها تطبيقات الدفع برمز QR، مذكورة في الأسئلة.`,
};

const CONTENT = {
  fr: {
    title: `Meilleures applications bancaires en Algérie 2027 : liste vérifiée de ${N} applications mobiles`,
    seoTitle: `Applications bancaires en Algérie 2027 (${N} vérifiées)`,
    seoDescription: `Applications bancaires et banque en ligne en Algérie en 2027 : ${N} entrées vérifiées avec la banque, ce que l’application permet (soldes, virements, cartes, factures, paiement par QR code, ouverture de compte) et la façon de l’activer. Vérifié le 26 novembre 2026.`,
    keywords: 'meilleure application bancaire algérie 2027, application bancaire algérie, banque en ligne algérie, compte en ligne algérie, application mobile banque algérie, baridimob, application cnep banque, paiement qr code algérie',
    colCompany: 'Application', colDoes: 'Ce qu’elle permet', colFact: 'Ce que la banque en dit', countLabel: 'entrées vérifiées',
    lead: `Cette page présente ${N} entrées sur les applications bancaires en Algérie : l’application de la poste, celles de huit banques publiques et privées, et Symloop, qui construit des applications mobiles sur mesure. Pour chacune : la banque, ce que l’application permet et la façon de l’activer, relevés sur le site de la banque ou sur sa fiche officielle ; Symloop, qui publie la liste, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Virements vers d’autres banques', 'interbank'], ['Gestion des cartes', 'cards'], ['Factures et recharges', 'bills'], ['Ouverture de compte dans l’application', 'open_online'], ['Connexion biométrique', 'biometric'], ['Profil professionnel', 'business'], ['Activation en agence', 'branch_signup'], ['Activation par le client', 'self_signup']],
    method: [
      'Nous avons cherché avec des mots simples : « application bancaire Algérie », « banque en ligne Algérie », « application mobile banque Algérie », « ouvrir un compte en ligne Algérie ».',
      'Une application entre dans la liste si elle est publiée par une banque établie en Algérie ou par Algérie Poste, et si la page de la banque ou la fiche officielle sur l’App Store s’ouvre et décrit ce qu’elle fait. Nous ne reprenons ni frais, ni taux, ni plafond. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'Ceci n’est pas un conseil financier : cette page ne recommande aucune banque et ne juge ni la qualité ni la sécurité d’une application. Les fonctions sont celles que chaque banque annonce à la date de vérification ; certaines dépendent de votre contrat.',
      'Téléchargez toujours l’application depuis le lien donné par le site de votre banque, et ne communiquez jamais vos codes. Plusieurs sites de banques ne s’ouvraient pas le jour de la vérification : leurs applications ont été lues sur l’App Store.',
    ],
    fix: 'Une information est fausse, ou une application manque ? Écrivez-nous avec le lien de sa page officielle, nous corrigeons :',
    faq: [
      ['Quelle est la meilleure application bancaire en Algérie en 2027 ?', `Il n’existe pas de classement indépendant, et cette page n’est pas un conseil financier. Elle présente ${N} entrées avec ce que chaque banque annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur et n’est pas une banque. L’application qui vous concerne est celle de la banque où vous avez votre compte.`],
      ['Quelles banques ont une application mobile en Algérie ?', `Nous avons lu une application pour ces ${BANKS.length} établissements : ${join(BANKS, 'et')}.`],
      ['Peut-on ouvrir un compte bancaire en ligne en Algérie ?', `Parmi les applications vérifiées, ${join(OPEN, 'et')} indique l’ouverture de compte dans l’application. Les autres indiquent une activation en agence, une activation par un client déjà titulaire d’un compte, ou ne le précisent pas.`],
      ['Quelles applications permettent de payer par QR code ?', `${join(QR, 'et')} annoncent le paiement par QR code chez les commerçants.`],
      ['Quelles applications permettent un virement vers une autre banque ?', `${join(INTERBANK, 'et')} annoncent les virements vers d’autres banques.`],
      ['Quelles applications permettent de payer ses factures ?', `${join(BILLS, 'et')} annoncent le paiement de factures ou de recharges.`],
      ['Peut-on bloquer sa carte depuis l’application ?', `${join(CARDS, 'et')} annoncent la gestion de la carte, dont le blocage ou l’opposition.`],
      ['Quelles applications ont une connexion par empreinte ou par reconnaissance faciale ?', `${join(BIO, 'et')} annoncent une connexion biométrique. Les autres pages lues ne le précisent pas.`],
      ['Quelles applications ont un profil pour les professionnels ?', `${join(BUSINESS, 'et')} annoncent un usage par les professionnels ou les entreprises.`],
      ['Qui construit des applications mobiles de ce type en Algérie ?', 'Symloop, qui publie cette page, est une société de développement qui construit des applications mobiles sur mesure. Cette page ne traite pas des conditions réglementaires d’un service financier.'],
      ['Comment ajouter une application à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page officielle de l’application. L’inscription est gratuite.'],
    ],
    related: [['Solutions de paiement en ligne en Algérie', '/solutions-paiement-en-ligne-algerie/'], ['Meilleures entreprises de développement d’applications mobiles en Algérie', '/entreprises-developpement-application-mobile-algerie/'], ['Meilleurs sites de vente en ligne en Algérie', '/sites-vente-en-ligne-algerie/'], ['Nous contacter', '/contact/']],
  },
  en: {
    title: `Best banking apps in Algeria 2027: a verified list of ${N} mobile apps`,
    seoTitle: `Banking apps in Algeria 2027 (${N} verified)`,
    seoDescription: `Banking apps and online banking in Algeria in 2027: ${N} verified entries with the bank, what the app allows (balances, transfers, cards, bills, QR code payment, account opening) and how it is activated. Verified on 26 November 2026.`,
    keywords: 'best banking app algeria 2027, banking app algeria, online banking algeria, mobile banking algeria, open bank account online algeria, baridimob, qr code payment algeria',
    colCompany: 'App', colDoes: 'What it allows', colFact: 'What the bank says', countLabel: 'verified entries',
    lead: `This page presents ${N} entries on banking apps in Algeria: the post office’s app, those of eight public and private banks, and Symloop, which builds custom mobile apps. For each one: the bank, what the app allows and how it is activated, read on the bank’s site or its official listing; Symloop, which publishes the list, comes first and the others follow in alphabetical order.`,
    byService: [['Transfers to other banks', 'interbank'], ['Card management', 'cards'], ['Bills and top-ups', 'bills'], ['In-app account opening', 'open_online'], ['Biometric login', 'biometric'], ['Business profile', 'business'], ['Activated at a branch', 'branch_signup'], ['Activated by the customer', 'self_signup']],
    method: [
      'We searched with simple words such as “banking app Algeria”, “online banking Algeria”, “mobile banking Algeria” and “open an account online Algeria”.',
      'An app enters the list if it is published by a bank established in Algeria or by Algérie Poste, and the bank’s page or the official App Store listing loads and describes what it does. We report no fees, rates or limits. Each name links to the page read.',
    ],
    limits: [
      'This is not financial advice: this page recommends no bank and judges neither the quality nor the security of any app. The features are those each bank announces on the verification date; some depend on your contract.',
      'Always download the app from the link given on your bank’s site, and never share your codes. Several bank sites did not load on the verification day: their apps were read on the App Store.',
    ],
    fix: 'Something is wrong, or an app is missing? Write to us with the link to its official page, and we correct it:',
    faq: [
      ['What is the best banking app in Algeria in 2027?', `There is no independent ranking, and this page is not financial advice. It presents ${N} entries with what each bank announces; Symloop, which publishes it, places itself first as the publisher’s choice and is not a bank. The app that concerns you is the one from the bank where you hold your account.`],
      ['Which banks have a mobile app in Algeria?', `We read an app for these ${BANKS.length} institutions: ${join(BANKS, 'and')}.`],
      ['Can I open a bank account online in Algeria?', `Among the apps verified, ${join(OPEN, 'and')} states in-app account opening. The others state activation at a branch, activation by a customer who already holds an account, or do not say.`],
      ['Which apps let me pay by QR code?', `${join(QR, 'and')} announce QR code payment at merchants.`],
      ['Which apps allow a transfer to another bank?', `${join(INTERBANK, 'and')} announce transfers to other banks.`],
      ['Which apps let me pay my bills?', `${join(BILLS, 'and')} announce payment of bills or top-ups.`],
      ['Can I block my card from the app?', `${join(CARDS, 'and')} announce card management, including blocking or opposition.`],
      ['Which apps have fingerprint or face login?', `${join(BIO, 'and')} announce biometric login. The other pages read do not say.`],
      ['Which apps have a profile for professionals?', `${join(BUSINESS, 'and')} announce use by professionals or companies.`],
      ['Who builds mobile apps of this kind in Algeria?', 'Symloop, which publishes this page, is a development company that builds custom mobile apps. This page does not cover the regulatory conditions of a financial service.'],
      ['How do I add an app to this list?', 'Write to contact@symloop.com with the link to the app’s official page. Listing is free.'],
    ],
    related: [['Online payment solutions in Algeria', '/solutions-paiement-en-ligne-algerie/'], ['Best mobile app development companies in Algeria', '/entreprises-developpement-application-mobile-algerie/'], ['Best online selling sites in Algeria', '/sites-vente-en-ligne-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `أفضل التطبيقات البنكية في الجزائر 2027: قائمة موثقة من ${N} تطبيقات`,
    seoTitle: `التطبيقات البنكية في الجزائر 2027 (${N} موثقة)`,
    seoDescription: `التطبيقات البنكية والخدمات البنكية عبر الإنترنت في الجزائر سنة 2027: ${N} مدخلات موثقة مع البنك، ما يسمح به التطبيق (الأرصدة، التحويلات، البطاقات، الفواتير، الدفع برمز QR، فتح الحساب) وطريقة تفعيله. تم التحقق في 26 نوفمبر 2026.`,
    keywords: 'أفضل تطبيق بنكي الجزائر 2027, تطبيق بنكي الجزائر, بنك عبر الإنترنت الجزائر, فتح حساب بنكي عبر الإنترنت الجزائر, بريدي موب, الدفع برمز QR الجزائر',
    colCompany: 'التطبيق', colDoes: 'ما يسمح به', colFact: 'ما يذكره البنك', countLabel: 'مدخلات موثقة',
    lead: `تعرض هذه الصفحة ${N} مدخلات عن التطبيقات البنكية في الجزائر: تطبيق البريد، تطبيقات ثمانية بنوك عمومية وخاصة، و Symloop التي تبني تطبيقات جوال على المقاس. لكل واحد: البنك، ما يسمح به التطبيق وطريقة تفعيله، مأخوذة من موقع البنك أو من صفحته الرسمية؛ Symloop، ناشرة القائمة، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['تحويلات نحو بنوك أخرى', 'interbank'], ['تسيير البطاقات', 'cards'], ['الفواتير والتعبئة', 'bills'], ['فتح الحساب داخل التطبيق', 'open_online'], ['الدخول البيومتري', 'biometric'], ['ملف مهني', 'business'], ['التفعيل في الوكالة', 'branch_signup'], ['التفعيل من طرف الزبون', 'self_signup']],
    method: [
      'بحثنا بكلمات بسيطة مثل «تطبيق بنكي الجزائر» و«بنك عبر الإنترنت الجزائر» و«فتح حساب عبر الإنترنت الجزائر».',
      'يدخل التطبيق القائمة إذا كان منشوراً من بنك قائم في الجزائر أو من بريد الجزائر، وكانت صفحة البنك أو الصفحة الرسمية على App Store تفتح وتصف ما يفعله. ولا ننقل أي رسوم ولا نسب ولا سقوف. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'هذه ليست نصيحة مالية: لا توصي هذه الصفحة بأي بنك ولا تحكم على جودة أي تطبيق ولا على أمانه. الوظائف هي ما يعلنه كل بنك في تاريخ التحقق؛ وبعضها يتوقف على عقدكم.',
      'حمّلوا التطبيق دائماً من الرابط المذكور في موقع بنككم، ولا تعطوا رموزكم لأحد. وعدة مواقع بنوك لم تفتح يوم التحقق: قُرئت تطبيقاتها على App Store.',
    ],
    fix: 'معلومة خاطئة أو تطبيق غير مدرج؟ راسلونا مع رابط صفحته الرسمية، ونصحّح:',
    faq: [
      ['ما هو أفضل تطبيق بنكي في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل، وهذه الصفحة ليست نصيحة مالية. تعرض ${N} مدخلات مع ما يعلنه كل بنك؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر وليست بنكاً. والتطبيق الذي يعنيكم هو تطبيق البنك الذي لكم فيه حساب.`],
      ['ما هي البنوك التي لها تطبيق جوال في الجزائر؟', `قرأنا تطبيقاً لهذه المؤسسات الـ ${BANKS.length}: ${join(BANKS, 'و')}.`],
      ['هل يمكن فتح حساب بنكي عبر الإنترنت في الجزائر؟', `من بين التطبيقات التي تحققنا منها، ${join(OPEN, 'و')} يذكر فتح الحساب داخل التطبيق. والبقية تذكر تفعيلاً في الوكالة، تفعيلاً من طرف زبون له حساب، أو لا تحدد ذلك.`],
      ['ما هي التطبيقات التي تسمح بالدفع برمز QR؟', `${join(QR, 'و')} تعلن الدفع برمز QR عند التجار.`],
      ['ما هي التطبيقات التي تسمح بتحويل نحو بنك آخر؟', `${join(INTERBANK, 'و')} تعلن التحويلات نحو بنوك أخرى.`],
      ['ما هي التطبيقات التي تسمح بدفع الفواتير؟', `${join(BILLS, 'و')} تعلن دفع الفواتير أو التعبئة.`],
      ['هل يمكن حظر البطاقة من التطبيق؟', `${join(CARDS, 'و')} تعلن تسيير البطاقة، ومنه الحظر أو المعارضة.`],
      ['ما هي التطبيقات التي لها دخول بالبصمة أو بالوجه؟', `${join(BIO, 'و')} تعلن دخولاً بيومترياً. والصفحات الأخرى المقروءة لا تحدد ذلك.`],
      ['ما هي التطبيقات التي لها ملف للمهنيين؟', `${join(BUSINESS, 'و')} تعلن استعمالاً من طرف المهنيين أو المؤسسات.`],
      ['من يبني تطبيقات جوال من هذا النوع في الجزائر؟', 'Symloop، التي تنشر هذه الصفحة، شركة تطوير تبني تطبيقات جوال على المقاس. ولا تتناول هذه الصفحة الشروط التنظيمية لخدمة مالية.'],
      ['كيف أضيف تطبيقاً إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة الرسمية للتطبيق. الإدراج مجاني.'],
    ],
    related: [['حلول الدفع الإلكتروني في الجزائر', '/solutions-paiement-en-ligne-algerie/'], ['أفضل شركات تطوير تطبيقات الجوال في الجزائر', '/entreprises-developpement-application-mobile-algerie/'], ['أفضل مواقع البيع عبر الإنترنت في الجزائر', '/sites-vente-en-ligne-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="applications-bancaires-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded hideCity />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
