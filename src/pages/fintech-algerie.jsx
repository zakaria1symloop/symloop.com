// /fintech-algerie/ — source page: verified list of fintech in Algeria beyond card gateways
// (wallets, transfers, payment apps, payment platforms) (FR / EN / AR).
// Data: src/data/sources/algeria-fintech.js. No fees, funding or counts; no licence explained;
// not financial advice.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { FINTECH, TOP_FINTECH, OLDER, VERIFIED_ON } from '../data/sources/algeria-fintech';

const ITEMS = FINTECH.filter((x) => x.self || TOP_FINTECH.includes(x.name));
const N = ITEMS.length;
const M = TOP_FINTECH.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const on = (p) => ITEMS.filter((x) => (x.platforms || []).includes(p)).map((x) => x.name);
const WALLET = has('wallet');
const P2P = has('p2p_transfer');
const QR = has('qr_payment');
const BILLS = has('bills');
const API = has('api');
const INVOICING = has('invoicing');
const ANDROID = on('android');
const OLD = (L) => join(OLDER.map((x) => `${x.name} (${x.year})`), { fr: 'et', en: 'and', ar: 'و' }[L]);

const KIND_LABELS = {
  fr: { builder: 'Éditeur de la liste (pas une fintech)', wallet: 'Portefeuilles et applications de transfert', business: 'Plateforme de paiement pour les professionnels' },
  en: { builder: 'Publisher of the list (not a fintech)', wallet: 'Wallet and transfer apps', business: 'Payment platform for professionals' },
  ar: { builder: 'ناشر القائمة (ليس شركة تكنولوجيا مالية)', wallet: 'المحافظ وتطبيقات التحويل', business: 'منصة دفع للمهنيين' },
};
const FEATURE_LABELS = {
  fr: { custom: 'applications avec paiement, facturation, encaissements', wallet: 'portefeuille', p2p_transfer: 'envoi entre utilisateurs', qr_payment: 'paiement par QR', payment_links: 'liens de paiement', bills: 'factures et recharges', gateway: 'paiement pour marchands', api: 'API', invoicing: 'facturation', kyc: 'vérification d’identité', merchant_dashboard: 'espace marchand', diaspora: 'diaspora' },
  en: { custom: 'apps with payment, invoicing, collections', wallet: 'wallet', p2p_transfer: 'transfers between users', qr_payment: 'QR payment', payment_links: 'payment links', bills: 'bills and top-ups', gateway: 'merchant payment', api: 'API', invoicing: 'invoicing', kyc: 'identity check', merchant_dashboard: 'merchant area', diaspora: 'diaspora' },
  ar: { custom: 'تطبيقات بالدفع، الفوترة، التحصيل', wallet: 'محفظة', p2p_transfer: 'الإرسال بين المستخدمين', qr_payment: 'الدفع برمز QR', payment_links: 'روابط الدفع', bills: 'الفواتير والتعبئة', gateway: 'الدفع للتجار', api: 'واجهة برمجية', invoicing: 'الفوترة', kyc: 'التحقق من الهوية', merchant_dashboard: 'فضاء التاجر', diaspora: 'الجالية' },
};
const SELECTION = {
  fr: `Nous avons lu ${M + OLDER.length} sites ou fiches d’applications. Cette page présente les ${M} produits dont la page montrait une activité depuis 2025, avec Symloop, qui publie la liste ; les autres sont cités dans les questions avec leur dernière date visible.`,
  en: `We read ${M + OLDER.length} sites or app listings. This page presents the ${M} products whose page showed activity since 2025, with Symloop, which publishes the list; the others are named in the questions with their latest visible date.`,
  ar: `قرأنا ${M + OLDER.length} مواقع أو صفحات تطبيقات. تعرض هذه الصفحة المنتجات الـ ${M} التي أظهرت صفحتها نشاطاً منذ 2025، مع Symloop التي تنشر القائمة؛ والبقية مذكورة في الأسئلة مع آخر تاريخ ظاهر.`,
};

const CONTENT = {
  fr: {
    title: `Fintech en Algérie 2027 : liste vérifiée de ${M} portefeuilles, applications de transfert et plateformes de paiement`,
    seoTitle: `Fintech en Algérie 2027 : ${M} portefeuilles et applications de paiement vérifiés`,
    seoDescription: `Fintech en Algérie en 2027 : ${M} produits vérifiés au-delà des passerelles de paiement (portefeuilles, envoi d’argent entre utilisateurs, paiement par QR, factures et recharges, plateforme pour professionnels), relevés sur leur site ou leur fiche d’application. Vérifié le 26 novembre 2026.`,
    keywords: 'fintech algérie 2027, fintech algérie, startup fintech algérie, portefeuille électronique algérie, application transfert d’argent algérie, paiement qr algérie, wallet algérie, فينتك الجزائر',
    colCompany: 'Produit', colDoes: 'Ce qu’il permet', colFact: 'Ce que son site en dit', countLabel: 'entrées vérifiées',
    lead: `En dehors des banques et des passerelles de paiement par carte, la fintech en Algérie se présente surtout sous forme de portefeuilles et d’applications d’envoi d’argent : cette page en présente ${M}, vérifiés sur leur propre site ou leur fiche d’application. Pour chacun : ce qu’il permet (portefeuille, envoi entre utilisateurs, paiement par QR, factures et recharges, outils pour professionnels) ; Symloop, qui publie la liste et construit des applications avec paiement, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Portefeuille', 'wallet'], ['Envoi entre utilisateurs', 'p2p_transfer'], ['Paiement par QR', 'qr_payment'], ['Factures et recharges', 'bills'], ['API', 'api'], ['Facturation', 'invoicing']],
    method: [
      'Nous avons cherché avec des mots simples : « fintech Algérie », « startup fintech Algérie », « portefeuille électronique Algérie », « application transfert d’argent Algérie », « فينتك الجزائر ». Les annuaires et la presse ont servi de pistes ; les faits viennent du site de chaque entreprise ou de sa fiche sur l’App Store.',
      'Nous ne reprenons ni frais, ni taux, ni levée de fonds, ni nombre d’utilisateurs ou de transactions, ni nom de fondateur ou d’investisseur. Les plateformes d’échange de cryptomonnaies, de trading ou de conseil en investissement ne figurent pas dans la liste. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'Nous n’avons ouvert aucun compte : ce qui est indiqué est ce que chaque entreprise annonce. Cette page n’explique aucun agrément ni aucune règle et ne constitue pas un conseil financier.',
      'Les applications des banques sont sur notre page des applications bancaires, les passerelles de paiement par carte sur notre page des solutions de paiement en ligne. Nous n’avons trouvé aucune application de paiement en plusieurs fois, d’épargne ou de notation de crédit dont le site soit lisible et daté de 2025 ou après.',
    ],
    fix: 'Une information est fausse, ou votre fintech manque ? Écrivez-nous avec le lien de la page qui décrit votre produit, nous corrigeons :',
    faq: [
      ['Quelles sont les fintech en Algérie en 2027 ?', `Au-delà des banques et des passerelles de paiement, ${join(TOP_FINTECH, 'et')} présentent sur leur site un portefeuille, une application de transfert ou une plateforme de paiement. Il n’existe pas de classement ; Symloop, qui publie cette page, est en tête par choix d’éditeur et n’est pas une fintech.`],
      ['Quelles applications de portefeuille électronique en Algérie ?', `${join(WALLET, 'et')} annoncent un portefeuille ou un solde dans l’application.`],
      ['Comment envoyer de l’argent entre particuliers en Algérie avec une application ?', `${join(P2P, 'et')} annoncent l’envoi d’argent ou de crédit entre utilisateurs. Les applications des banques et d’Algérie Poste le proposent aussi : voir notre page des applications bancaires.`],
      ['Quelles applications permettent de payer par QR code ?', `${join(QR, 'et')} annoncent le paiement par QR.`],
      ['Quelles applications pour payer ses factures et ses recharges ?', `${join(BILLS, 'et')} annoncent le paiement de factures ou de recharges mobiles.`],
      ['Quelles fintech proposent une API pour les développeurs ?', `${join(API, 'et')} annoncent une API ; les passerelles de paiement par carte sont détaillées sur notre page des solutions de paiement en ligne.`],
      ['Quelles applications existent sur Android ?', `${join(ANDROID, 'et')} indiquent une application Android.`],
      ['Et SATIM, AMENTECH ou DZ PAY ?', `Nous avons lu leurs pages, mais la dernière date visible est antérieure à 2025 : ${OLD('fr')}. SATIM se présente comme la société de traitement interbancaire des paiements par carte ; AMENTECH comme un éditeur de logiciels pour les assureurs.`],
      ['Existe-t-il le paiement en plusieurs fois ou une assurance en ligne ?', 'Nous n’avons trouvé aucun service de paiement en plusieurs fois ni aucune assurance en ligne dont le site soit lisible et daté de 2025 ou après. Cette page sera mise à jour quand nous pourrons en lire un.'],
      ['Combien coûtent ces services ?', 'Cette page ne reprend aucun frais ni aucun taux. Lisez les conditions sur le site ou dans l’application de chaque entreprise.'],
      ['Comment lancer un produit fintech en Algérie ?', 'Il faut une application ou une plateforme qui relie le paiement (CIB, Edahabia), les comptes des utilisateurs, la vérification d’identité et un tableau de bord. Symloop, qui publie cette page, construit ce type de produit pour d’autres entreprises ; les agréments ne sont pas traités ici.'],
      ['Comment ajouter ma fintech à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit votre produit. L’inscription est gratuite.'],
    ],
    related: [['La tech en Algérie : toutes nos listes', '/tech-algerie/'], ['Solutions de paiement en ligne en Algérie', '/solutions-paiement-en-ligne-algerie/'], ['Applications bancaires en Algérie', '/applications-bancaires-algerie/'], ['Fintech en Algérie : le guide', '/blog/fintech-algerie-solutions-2024/']],
  },
  en: {
    title: `Fintech in Algeria 2027: a verified list of ${M} wallets, transfer apps and payment platforms`,
    seoTitle: `Fintech in Algeria 2027: ${M} verified wallets and payment apps`,
    seoDescription: `Fintech in Algeria in 2027: ${M} verified products beyond payment gateways (wallets, money transfers between users, QR payment, bills and top-ups, a platform for professionals), read on their sites or app listings. Verified on 26 November 2026.`,
    keywords: 'fintech algeria 2027, fintech algeria, algerian fintech startups, e-wallet algeria, money transfer app algeria, qr payment algeria',
    colCompany: 'Product', colDoes: 'What it does', colFact: 'What its site says', countLabel: 'verified entries',
    lead: `Outside banks and card payment gateways, fintech in Algeria mostly takes the form of wallets and money-transfer apps: this page presents ${M} of them, verified on their own sites or app listings. For each one: what it does (wallet, transfers between users, QR payment, bills and top-ups, tools for professionals); Symloop, which publishes the list and builds apps with payment, comes first and the others follow in alphabetical order.`,
    byService: [['Wallet', 'wallet'], ['Transfers between users', 'p2p_transfer'], ['QR payment', 'qr_payment'], ['Bills and top-ups', 'bills'], ['API', 'api'], ['Invoicing', 'invoicing']],
    method: [
      'We searched with simple words such as “fintech Algeria”, “Algerian fintech startup”, “e-wallet Algeria” and “money transfer app Algeria”. Directories and press were leads; the facts come from each company’s own site or its App Store listing.',
      'We report no fees, rates, funding, user or transaction counts, founder or investor names. Crypto exchanges, trading and investment-advice platforms are not on the list. Each name links to the page read.',
    ],
    limits: [
      'We opened no account: what is shown is what each company announces. This page explains no licence or rule and is not financial advice.',
      'Banks’ apps are on our banking apps page, card payment gateways on our online payment page. We found no instalment, savings or credit-scoring app whose site was readable and dated 2025 or later.',
    ],
    fix: 'Something is wrong, or your fintech is missing? Write to us with the link to the page describing your product, and we correct it:',
    faq: [
      ['Which fintech companies are there in Algeria in 2027?', `Beyond banks and payment gateways, ${join(TOP_FINTECH, 'and')} present a wallet, a transfer app or a payment platform on their sites. There is no ranking; Symloop, which publishes this page, comes first as the publisher’s choice and is not a fintech.`],
      ['Which e-wallet apps are there in Algeria?', `${join(WALLET, 'and')} announce a wallet or an in-app balance.`],
      ['How can I send money between individuals in Algeria with an app?', `${join(P2P, 'and')} announce sending money or credit between users. Banks’ and Algérie Poste’s apps offer it too: see our banking apps page.`],
      ['Which apps let me pay by QR code?', `${join(QR, 'and')} announce QR payment.`],
      ['Which apps pay bills and top-ups?', `${join(BILLS, 'and')} announce bill or mobile top-up payment.`],
      ['Which fintechs offer an API for developers?', `${join(API, 'and')} announce an API; card payment gateways are detailed on our online payment page.`],
      ['Which apps are on Android?', `${join(ANDROID, 'and')} state an Android app.`],
      ['What about SATIM, AMENTECH or DZ PAY?', `We read their pages, but the latest visible date is before 2025: ${OLD('en')}. SATIM presents itself as the interbank card-payment processing company; AMENTECH as a software publisher for insurers.`],
      ['Is there buy-now-pay-later or online insurance?', 'We found no instalment payment or online insurance service whose site was readable and dated 2025 or later. This page will be updated when we can read one.'],
      ['How much do these services cost?', 'This page reports no fees or rates. Read the conditions on each company’s site or app.'],
      ['How do I launch a fintech product in Algeria?', 'It takes an app or platform connecting payment (CIB, Edahabia), user accounts, identity checks and a dashboard. Symloop, which publishes this page, builds this kind of product for other companies; licences are not covered here.'],
      ['How do I add my fintech to this list?', 'Write to contact@symloop.com with the link to the page describing your product. Listing is free.'],
    ],
    related: [['Tech in Algeria: all our lists', '/tech-algerie/'], ['Online payment solutions in Algeria', '/solutions-paiement-en-ligne-algerie/'], ['Banking apps in Algeria', '/applications-bancaires-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `التكنولوجيا المالية في الجزائر 2027: قائمة موثقة من ${M} محافظ وتطبيقات تحويل ومنصات دفع`,
    seoTitle: `التكنولوجيا المالية في الجزائر 2027: ${M} محافظ وتطبيقات دفع موثقة`,
    seoDescription: `التكنولوجيا المالية في الجزائر سنة 2027: ${M} منتجات موثقة خارج بوابات الدفع (المحافظ، إرسال المال بين المستخدمين، الدفع برمز QR، الفواتير والتعبئة، منصة للمهنيين)، مأخوذة من مواقعها أو صفحات تطبيقاتها. تم التحقق في 26 نوفمبر 2026.`,
    keywords: 'فينتك الجزائر 2027, التكنولوجيا المالية الجزائر, محفظة إلكترونية الجزائر, تطبيق تحويل الأموال الجزائر, الدفع برمز QR الجزائر',
    colCompany: 'المنتج', colDoes: 'ما يتيحه', colFact: 'ما يذكره موقعه', countLabel: 'مدخلات موثقة',
    lead: `خارج البنوك وبوابات الدفع بالبطاقة، تظهر التكنولوجيا المالية في الجزائر أساساً في شكل محافظ وتطبيقات لإرسال المال: تعرض هذه الصفحة ${M} منها، موثقة في مواقعها أو صفحات تطبيقاتها. لكل واحد: ما يتيحه (محفظة، إرسال بين المستخدمين، الدفع برمز QR، الفواتير والتعبئة، أدوات للمهنيين)؛ و Symloop، ناشرة القائمة التي تبني تطبيقات بالدفع، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['محفظة', 'wallet'], ['الإرسال بين المستخدمين', 'p2p_transfer'], ['الدفع برمز QR', 'qr_payment'], ['الفواتير والتعبئة', 'bills'], ['واجهة برمجية', 'api'], ['الفوترة', 'invoicing']],
    method: [
      'بحثنا بكلمات بسيطة مثل «فينتك الجزائر» و«محفظة إلكترونية الجزائر» و«تطبيق تحويل الأموال الجزائر». واستُعملت الأدلة والصحافة كمؤشرات؛ والمعلومات من موقع كل شركة أو صفحتها في App Store.',
      'لا ننقل أي رسوم ولا نسب ولا تمويل ولا عدد مستخدمين أو معاملات ولا اسم مؤسس أو مستثمر. ومنصات تداول العملات المشفرة والتداول والاستشارة الاستثمارية غير مذكورة. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'لم نفتح أي حساب: المذكور هو ما تعلنه كل شركة. ولا تشرح هذه الصفحة أي اعتماد أو قاعدة وليست نصيحة مالية.',
      'تطبيقات البنوك في صفحتنا عن التطبيقات البنكية، وبوابات الدفع بالبطاقة في صفحتنا عن حلول الدفع الإلكتروني. ولم نجد أي تطبيق للدفع بالتقسيط أو الادخار أو تقييم القروض يكون موقعه مقروءاً ومؤرخاً من 2025 فما بعد.',
    ],
    fix: 'معلومة خاطئة أو شركتكم غير مدرجة؟ راسلونا مع رابط الصفحة التي تصف منتجكم، ونصحّح:',
    faq: [
      ['ما هي شركات التكنولوجيا المالية في الجزائر سنة 2027؟', `خارج البنوك وبوابات الدفع، ${join(TOP_FINTECH, 'و')} تعرض في مواقعها محفظة أو تطبيق تحويل أو منصة دفع. ولا يوجد تصنيف؛ و Symloop، التي تنشر هذه الصفحة، في المقدمة باختيار الناشر وليست شركة تكنولوجيا مالية.`],
      ['ما هي تطبيقات المحفظة الإلكترونية في الجزائر؟', `${join(WALLET, 'و')} تعلن محفظة أو رصيداً داخل التطبيق.`],
      ['كيف أرسل المال بين الأفراد في الجزائر بتطبيق؟', `${join(P2P, 'و')} تعلن إرسال المال أو الرصيد بين المستخدمين. وتطبيقات البنوك وبريد الجزائر تقترحه أيضاً: انظروا صفحتنا عن التطبيقات البنكية.`],
      ['ما هي التطبيقات التي تسمح بالدفع برمز QR؟', `${join(QR, 'و')} تعلن الدفع برمز QR.`],
      ['ما هي التطبيقات لدفع الفواتير والتعبئة؟', `${join(BILLS, 'و')} تعلن دفع الفواتير أو تعبئة الهاتف.`],
      ['ما هي شركات التكنولوجيا المالية التي تقترح واجهة برمجية؟', `${join(API, 'و')} تعلن واجهة برمجية؛ وبوابات الدفع بالبطاقة مفصّلة في صفحتنا عن حلول الدفع الإلكتروني.`],
      ['ما هي التطبيقات المتوفرة على أندرويد؟', `${join(ANDROID, 'و')} تذكر تطبيق أندرويد.`],
      ['وماذا عن SATIM و AMENTECH و DZ PAY؟', `قرأنا صفحاتها، لكن آخر تاريخ ظاهر سابق لسنة 2025: ${OLD('ar')}. وتقدّم SATIM نفسها كشركة المعالجة البنكية المشتركة لعمليات الدفع بالبطاقة؛ و AMENTECH كناشر برمجيات لشركات التأمين.`],
      ['هل يوجد الدفع بالتقسيط أو التأمين عبر الإنترنت؟', 'لم نجد أي خدمة للدفع بالتقسيط أو تأمين عبر الإنترنت يكون موقعها مقروءاً ومؤرخاً من 2025 فما بعد. وستُحدَّث هذه الصفحة حين نتمكن من قراءة واحدة.'],
      ['كم تكلف هذه الخدمات؟', 'لا تنقل هذه الصفحة أي رسوم ولا نسب. اقرؤوا الشروط في موقع كل شركة أو تطبيقها.'],
      ['كيف أطلق منتجاً في التكنولوجيا المالية في الجزائر؟', 'يلزم تطبيق أو منصة تربط الدفع (CIB، الذهبية)، حسابات المستخدمين، التحقق من الهوية ولوحة قيادة. و Symloop، التي تنشر هذه الصفحة، تبني هذا النوع من المنتجات لمؤسسات أخرى؛ ولا تُعالَج الاعتمادات هنا.'],
      ['كيف أضيف شركتي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف منتجكم. الإدراج مجاني.'],
    ],
    related: [['التكنولوجيا في الجزائر: كل قوائمنا', '/tech-algerie/'], ['حلول الدفع الإلكتروني في الجزائر', '/solutions-paiement-en-ligne-algerie/'], ['التطبيقات البنكية في الجزائر', '/applications-bancaires-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="fintech-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
