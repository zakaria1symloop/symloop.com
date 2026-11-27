// Verified dataset: fintech in Algeria beyond payment gateways (wallets, transfers between users,
// payment apps, payment platforms for professionals) and the infrastructure named in the FAQ.
//
// Method: each fact below was read on the company's own website or its official App Store listing
// on the date in VERIFIED_ON; `url` is the page read. Directories and news were leads only. What a
// site does not state is left out. Fees, interest rates, funding, valuations, user or transaction
// counts, investors, clients and founders are never reported; no licence or law is explained and
// nothing here is financial advice. Crypto, trading and investment services are excluded; banks'
// own apps are on /applications-bancaires-algerie/ and card gateways on
// /solutions-paiement-en-ligne-algerie/. No ranking. To correct or add: contact@symloop.com.
//
// focus:    builder | wallet (wallet and transfer apps) | business (payment platform for
//           professionals)
// services: wallet, p2p_transfer, qr_payment, payment_links, bills (bills and top-ups), gateway,
//           api, invoicing, kyc, merchant_dashboard, diaspora
// platforms: android | ios | web, as stated
// Entries without a `note` are verified but not shown on the page (named in the FAQ).

export const VERIFIED_ON = '2026-11-26';

export const FINTECH = [
  { name: 'Symloop', url: 'https://symloop.com/services/', city: 'alger', focus: 'builder', self: true, services: ['custom'],
    note: { fr: 'Éditeur de cette liste. N’est pas une fintech : société de logiciel qui construit pour d’autres entreprises des applications et plateformes avec paiement en ligne par CIB et Edahabia, facturation et suivi des encaissements, avec des équipes à Alger et à Sétif.', en: 'Publisher of this list. Not a fintech: a software company building apps and platforms for other businesses with online CIB and Edahabia payment, invoicing and collection tracking, with teams in Algiers and Sétif.', ar: 'ناشر هذه القائمة. ليست شركة تكنولوجيا مالية: شركة برمجيات تبني لمؤسسات أخرى تطبيقات ومنصات بالدفع عبر الإنترنت بـ CIB والذهبية، الفوترة ومتابعة التحصيل، بفرق في الجزائر العاصمة وسطيف.' } },
  { name: 'ALPAY', url: 'https://alpay.dz/fr', city: null, focus: 'business', platforms: ['web'], services: ['gateway', 'wallet', 'api', 'invoicing', 'merchant_dashboard'],
    note: { fr: 'Plateforme de paiement pour les professionnels qui couvre le paiement en ligne et en magasin, des modules pour sites web ou du code sur mesure, des outils de facturation et une application de portefeuille.', en: 'Payment platform for professionals covering online and in-store payment, website plugins or custom code, invoicing tools and a wallet app.', ar: 'منصة دفع للمهنيين تغطي الدفع عبر الإنترنت وفي المتجر، إضافات للمواقع أو برمجة على المقاس، أدوات فوترة وتطبيق محفظة.' } },
  { name: 'Chargily', url: 'https://chargily.com/app', city: null, focus: 'wallet', platforms: ['ios', 'web'], services: ['wallet', 'p2p_transfer', 'qr_payment', 'bills'],
    note: { fr: 'Application de portefeuille pour les particuliers : recharges mobiles, cartes de jeux et de streaming, paiement de factures par QR et envoi de crédit Chargily à ses contacts ; la passerelle de l’entreprise figure sur notre page des paiements en ligne.', en: 'Consumer wallet app: mobile top-ups, gaming and streaming cards, QR bill payment and sending Chargily credit to contacts; the company’s gateway is on our online payment page.', ar: 'تطبيق محفظة للأفراد: تعبئة الهاتف، بطاقات الألعاب والبث، دفع الفواتير برمز QR وإرسال رصيد Chargily إلى جهات الاتصال؛ وبوابة الشركة مذكورة في صفحتنا عن الدفع الإلكتروني.' } },
  { name: 'GIFTY', url: 'https://gifty.dz', city: 'Dely Ibrahim', focus: 'wallet', platforms: ['android', 'ios'], services: ['wallet', 'p2p_transfer', 'qr_payment', 'payment_links', 'bills', 'merchant_dashboard'],
    note: { fr: 'Application avec un solde prépayé, rechargé par carte, dans l’application ou chez des commerçants partenaires, pour payer des factures, des recharges mobiles et des achats, envoyer par QR et offrir des cadeaux.', en: 'App with a prepaid balance, topped up by card, in the app or at partner shops, to pay bills, mobile top-ups and purchases, send by QR and give gifts.', ar: 'تطبيق برصيد مسبق الدفع، يُعبّأ بالبطاقة، داخل التطبيق أو لدى تجار شركاء، لدفع الفواتير، تعبئة الهاتف والمشتريات، الإرسال برمز QR وتقديم الهدايا.' } },
  { name: 'SlickPay', url: 'https://apps.apple.com/mx/app/slickpay/id1617071440', city: null, focus: 'wallet', platforms: ['ios'], services: ['wallet', 'p2p_transfer', 'qr_payment', 'payment_links', 'invoicing', 'bills'],
    note: { fr: 'La fiche de l’application décrit l’ajout de cartes bancaires et postales, les virements à des bénéficiaires, le paiement par QR, les liens de paiement, les factures et les recharges ; le compte professionnel figure sur notre page des paiements en ligne.', en: 'The app listing describes linking bank and postal cards, transfers to beneficiaries, QR payment, payment links, invoices and top-ups; the business account is on our online payment page.', ar: 'تصف صفحة التطبيق ربط البطاقات البنكية والبريدية، التحويلات إلى المستفيدين، الدفع برمز QR، روابط الدفع، الفواتير والتعبئة؛ والحساب المهني مذكور في صفحتنا عن الدفع الإلكتروني.' } },
  { name: 'UbexPay', url: 'https://ubexpay.com', city: 'Dublin (Irlande)', focus: 'wallet', platforms: ['android', 'ios', 'web'], services: ['wallet', 'p2p_transfer', 'qr_payment', 'gateway', 'api', 'kyc', 'bills'],
    note: { fr: 'Compte en ligne pour envoyer et recevoir de l’argent par e-mail, téléphone ou QR, alimenté par carte bancaire ou postale, avec paiement de factures, outils pour boutiques et API ; son siège est indiqué à Dublin.', en: 'Online account to send and receive money by email, phone or QR, topped up by bank or postal card, with bill payment, shop tools and an API; its head office is stated in Dublin.', ar: 'حساب عبر الإنترنت لإرسال واستقبال المال بالبريد أو الهاتف أو QR، يُعبّأ بالبطاقة البنكية أو البريدية، مع دفع الفواتير، أدوات للمتاجر وواجهة برمجية؛ ومقره مذكور في دبلن.' } },
  { name: 'Yassir Cash', by: 'Yassir', url: 'https://yassir.com/en/algeria/yassir-cash', city: null, focus: 'wallet', platforms: ['android', 'ios'], services: ['wallet', 'p2p_transfer'],
    note: { fr: 'Portefeuille intégré à l’application Yassir pour les courses, les repas et les achats, rechargé dans l’application ou chez des agents, avec partage de crédit entre titulaires de compte.', en: 'Wallet inside the Yassir app for rides, food and shopping, topped up in the app or through agents, with credit sharing between account holders.', ar: 'محفظة داخل تطبيق Yassir للتنقل، الوجبات والمشتريات، تُعبّأ داخل التطبيق أو لدى وكلاء، مع تقاسم الرصيد بين أصحاب الحسابات.' } },
];

export const TOP_FINTECH = ['ALPAY', 'Chargily', 'GIFTY', 'SlickPay', 'UbexPay', 'Yassir Cash'];

// Read on their own sites but not shown in the table: latest date seen before 2025, or
// infrastructure rather than a product sold to the public.
export const OLDER = [
  { name: 'SATIM', url: 'https://satim.dz/index.php/fr/', year: '2024' },
  { name: 'AMENTECH', url: 'https://amentech.dz', year: '2023' },
  { name: 'DZ PAY', url: 'https://apps.apple.com/py/app/dz-pay/id1635700013', year: '2022' },
  { name: 'Digital Finance Algeria', url: 'https://dzpay.digital', year: '2021' },
];
