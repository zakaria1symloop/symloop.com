// Verified dataset: online payment solutions a business in Algeria can use to be paid.
//
// Method: each fact below was read on the provider's own website on the date in VERIFIED_ON;
// `url` is the page that describes the merchant offer. What a site does not state is left out.
// Fees and commissions are never reported, and nothing here is legal advice: membership
// conditions are set by each bank and by the interbank body. No ranking, no personal data.
// To correct or add an entry: contact@symloop.com.
//
// focus:    integrator | official | gateway | bank
// services: accepted means and tools (labels in the page file)
// Entries without a `note` are verified but not shown on the page (ten per list).

export const VERIFIED_ON = '2026-11-25';

export const PAYMENT_SOLUTIONS = [
  { name: 'Symloop', url: 'https://symloop.com/contact/', city: 'alger', focus: 'integrator', self: true, services: ['integration'],
    note: { fr: 'Éditeur de cette liste. N’est pas un prestataire de paiement : société de logiciel qui branche ces solutions dans un site, une application mobile ou un logiciel de gestion, avec des équipes à Alger et à Sétif.', en: 'Publisher of this list. Not a payment provider: a software company that connects these solutions to a website, a mobile app or management software, with teams in Algiers and Sétif.', ar: 'ناشر هذه القائمة. ليست مزوّد دفع: شركة برمجيات تربط هذه الحلول بموقع أو تطبيق جوال أو برنامج تسيير، بفرق في الجزائر العاصمة وسطيف.' } },
  { name: 'Chargily Pay', by: 'Chargily', url: 'https://chargily.com/business/pay', city: null, focus: 'gateway', services: ['cib', 'edahabia', 'api', 'plugins', 'links', 'sandbox'],
    note: { fr: 'Passerelle qui permet aux marchands d’accepter les cartes CIB et Edahabia par une API, des plugins ou des liens de paiement qui ne demandent pas de boutique en ligne ; les comptes commencent en mode test.', en: 'Gateway letting merchants accept CIB and Edahabia cards through an API, plugins, or payment links that need no online store; accounts start in test mode.', ar: 'بوابة تسمح للتجار بقبول بطاقتي CIB والذهبية عبر واجهة برمجية، إضافات أو روابط دفع لا تتطلب متجراً إلكترونياً؛ وتبدأ الحسابات في وضع الاختبار.' } },
  { name: 'CIB Web', by: 'GIE Monétique', url: 'https://cibweb.dz', city: 'alger', focus: 'official', services: ['cib'],
    note: { fr: 'Portail du groupement interbancaire où les marchands en ligne demandent leur intégration, passent les tests de la plateforme et reçoivent l’autorisation d’exploiter ; il publie la liste des modules de paiement certifiés.', en: 'Portal of the interbank body where web merchants request integration, pass the platform tests and receive authorisation to operate; it publishes the list of certified payment modules.', ar: 'بوابة التجمع ما بين البنوك حيث يطلب تجار الويب الإدماج، يجتازون اختبارات المنصة ويحصلون على الإذن بالاستغلال؛ وتنشر قائمة وحدات الدفع المعتمدة.' } },
  { name: 'CPAzonepay', by: 'Crédit Populaire d’Algérie (CPA)', url: 'https://www.cpa-bank.dz/index.php/en/marchand-en/cpazonepay-en', city: null, focus: 'bank', services: ['visa_mastercard'],
    note: { fr: 'Offre de la banque pour que des marchands algériens acceptent en ligne des paiements par cartes internationales Visa et Mastercard, sur un site ou une plateforme mobile.', en: 'Bank offer for Algerian merchants to accept international Visa and Mastercard payments online, on a website or mobile platform.', ar: 'عرض من البنك ليقبل التجار الجزائريون مدفوعات عبر الإنترنت بالبطاقات الدولية Visa و Mastercard، في موقع أو منصة جوال.' } },
  { name: 'Guiddini epay', by: 'Guiddini', url: 'https://guiddini.dz', city: 'alger', focus: 'gateway', services: ['cib', 'edahabia', 'qr', 'api', 'links', 'sandbox'],
    note: { fr: 'API de paiement pour les sites web avec un environnement de test et un tableau de bord, plus des factures eFawtara, des liens de paiement et le paiement par QR pour les entreprises sans site.', en: 'Payment API for websites with a test environment and dashboard, plus eFawtara invoices, payment links and QR payment for businesses without a website.', ar: 'واجهة برمجية للدفع موجهة للمواقع مع بيئة اختبار ولوحة قيادة، وفواتير eFawtara، روابط دفع والدفع برمز QR للمؤسسات التي ليس لها موقع.' } },
  { name: 'Paiement en ligne SATIM', by: 'SATIM', url: 'https://www.satim.dz/index.php/fr/services-cib/paiement-en-ligne', city: 'alger', focus: 'official', services: ['cib'],
    note: { fr: 'Solution interbancaire de paiement en ligne par carte CIB : l’adhésion du marchand passe par sa banque, puis par une certification technique de SATIM.', en: 'Interbank online payment solution for CIB cards: the merchant joins through its bank, then passes a technical certification by SATIM.', ar: 'حل ما بين البنوك للدفع عبر الإنترنت ببطاقة CIB: ينخرط التاجر عن طريق بنكه، ثم يجتاز اعتماداً تقنياً لدى SATIM.' } },
  { name: 'PayPart', by: 'SARL PayPart', url: 'https://paypart.dz/business/', city: null, focus: 'gateway', services: ['cib', 'edahabia', 'api', 'plugins', 'links', 'sandbox'],
    note: { fr: 'Acceptation des cartes CIB et Edahabia par une API avec serveur de test, un plugin WooCommerce, une application Shopify et des liens de paiement ou des pages produit à partager.', en: 'CIB and Edahabia card acceptance through an API with test server, a WooCommerce plugin, a Shopify app, and shareable payment links or product pages.', ar: 'قبول بطاقتي CIB والذهبية عبر واجهة برمجية بخادم اختبار، إضافة WooCommerce، تطبيق Shopify وروابط دفع أو صفحات منتجات قابلة للمشاركة.' } },
  { name: 'SlickPay', by: 'SlickPay', url: 'https://slick-pay.com/en/business', city: null, focus: 'gateway', services: ['cib', 'edahabia', 'wallet_balance', 'qr', 'api', 'links', 'sandbox'],
    note: { fr: 'Compte professionnel avec liens de paiement, factures, codes QR au comptoir payés depuis l’application SlickPay, une API avec bac à sable et un tableau de bord web.', en: 'Business account with payment links, invoices, counter QR codes paid from the SlickPay app, an API with sandbox, and a web dashboard.', ar: 'حساب مهني يضم روابط دفع، فواتير، رموز QR عند الصندوق تُدفع من تطبيق SlickPay، واجهة برمجية ببيئة تجريبية ولوحة قيادة على الويب.' } },
  { name: 'SofizPay', by: 'SofizPay', url: 'https://www.sofizpay.com/en/algeria-payment-gateway/', city: null, focus: 'gateway', services: ['cib', 'edahabia', 'qr', 'api', 'plugins', 'links', 'sandbox'],
    note: { fr: 'Passerelle pour les cartes Edahabia et CIB avec API, SDK, bac à sable, intégrations WooCommerce, Shopify et PrestaShop, liens de paiement, factures et paiement par QR ; son site la situe à Mecheria (Naâma).', en: 'Gateway for Edahabia and CIB cards with API, SDKs, sandbox, WooCommerce, Shopify and PrestaShop integrations, payment links, invoices and QR payments; its site places it in Mecheria (Naâma).', ar: 'بوابة لبطاقتي الذهبية و CIB مع واجهة برمجية، SDK، بيئة تجريبية، ربط بـ WooCommerce و Shopify و PrestaShop، روابط دفع، فواتير والدفع برمز QR؛ وموقعها يحددها في المشرية (النعامة).' } },
  { name: 'Webmarchand', by: 'Banque de Développement Local (BDL)', url: 'https://www.bdl.dz/en/webmarchand/', city: 'alger', focus: 'bank', services: ['cib', 'edahabia'],
    note: { fr: 'Offre de la banque pour encaisser des ventes en ligne par cartes CIB et Edahabia, avec un accompagnement jusqu’à la certification du site et le suivi des encaissements par e-banking.', en: 'Bank offer to collect online sales by CIB and Edahabia cards, with support through site certification and monitoring of receipts via e-banking.', ar: 'عرض من البنك لتحصيل المبيعات عبر الإنترنت ببطاقتي CIB والذهبية، مع مرافقة إلى غاية اعتماد الموقع ومتابعة التحصيلات عبر الخدمات البنكية الإلكترونية.' } },
  // verified, not shown on the page
  { name: 'International E-Commerce', by: 'Banque de Développement Local (BDL)', url: 'https://www.bdl.dz/en/?p=11443', city: 'alger', focus: 'bank', services: ['visa_mastercard'] },
  { name: 'WIMPAY BDL', by: 'Banque de Développement Local (BDL)', url: 'https://www.bdl.dz/en/wimpay/', city: 'alger', focus: 'bank', services: ['qr', 'mobile_app'] },
  { name: 'WIMPAY Marchand', by: 'Crédit Populaire d’Algérie (CPA)', url: 'https://www.cpa-bank.dz/index.php/en/payment-methods/wimpay-en/wimpay-marchand-en', city: null, focus: 'bank', services: ['qr', 'mobile_app'] },
  { name: 'WIMPAY BNA Marchand', by: 'Banque Nationale d’Algérie (BNA)', url: 'https://www.bna.dz/', city: 'alger', focus: 'bank', services: ['qr', 'mobile_app'] },
  { name: 'PAYFON-BEA', by: 'Banque Extérieure d’Algérie (BEA)', url: 'https://www.bea.dz/wimpay', city: 'alger', focus: 'bank', services: ['qr', 'mobile_app'] },
  { name: 'Web Rocket', by: 'Web Rocket', url: 'https://web-rocket.dz/activation-du-paiement-en-ligne-par-cib-dahabia/', city: null, focus: 'integrator', services: ['cib', 'edahabia', 'plugins'] },
];

// The nine shown beside the publisher: the two official platforms, the five gateways and two
// bank offers (one for local cards, one for international cards).
export const TOP_PAYMENT = ['Chargily Pay', 'CIB Web', 'CPAzonepay', 'Guiddini epay', 'Paiement en ligne SATIM', 'PayPart', 'SlickPay', 'SofizPay', 'Webmarchand'];
