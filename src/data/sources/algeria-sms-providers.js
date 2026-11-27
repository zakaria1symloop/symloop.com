// Verified dataset: providers that let a business send SMS to Algerian numbers (bulk SMS, SMS
// API, one-time codes, sender name).
//
// Method: each fact below was read on the provider's own website or the operator's own business
// page on the date in VERIFIED_ON; `url` is the page read (for international platforms, their page
// about Algeria). Directories and news were leads only. What a site does not state is left out.
// Prices per SMS, volumes, client names and counts are never reported, and no law or
// authorisation is explained: what a provider says about sender names in Algeria is reported as
// that provider's statement. No ranking, no personal data. To correct or add: contact@symloop.com.
//
// focus:    builder | operator | local (provider based in Algeria) | international (platform with
//           a page about Algeria)
// city:     as the site states it (shown as written)
// services: bulk, api, otp, sender_name, scheduling, personalisation, reports, two_way, whatsapp,
//           voice, plugins, docs, trial
// sender:   what the provider's Algeria page says about sender-name registration:
//           'required' | 'not_required' | null
// Entries without a `note` are verified but not shown on the page (named in the FAQ).

export const VERIFIED_ON = '2026-11-27';

export const SMS_PROVIDERS = [
  { name: 'Symloop', url: 'https://symloop.com/services/', city: 'alger', focus: 'builder', self: true, services: ['custom'],
    note: { fr: 'Éditeur de cette liste. N’envoie pas de SMS pour des tiers : société de logiciel qui relie les SMS, les codes de connexion (OTP) et WhatsApp aux applications qu’elle construit, en passant par le fournisseur choisi avec le client, avec des équipes à Alger et à Sétif.', en: 'Publisher of this list. It sends no SMS for others: a software company that connects SMS, login codes (OTP) and WhatsApp to the apps it builds, through the provider chosen with the client, with teams in Algiers and Sétif.', ar: 'ناشر هذه القائمة. لا ترسل رسائل قصيرة لحساب الغير: شركة برمجيات تربط الرسائل القصيرة، رموز الدخول (OTP) وواتساب بالتطبيقات التي تبنيها، عبر المزوّد المختار مع الزبون، بفرق في الجزائر العاصمة وسطيف.' } },
  { name: 'Africala', url: 'https://africala.net/dz/bulk-sms-algeria/', city: 'Lusaka', focus: 'international', sender: null, services: ['bulk', 'api', 'otp', 'sender_name', 'reports', 'two_way', 'whatsapp', 'voice', 'docs', 'trial'],
    note: { fr: 'Sa page sur l’Algérie énumère l’envoi en masse, les codes OTP et les SMS avec réponse, des rapports de remise par opérateur, WhatsApp et la voix, et indique des connexions vers Mobilis, Djezzy et Ooredoo.', en: 'Its Algeria page lists bulk, OTP and two-way SMS, delivery reports by operator, WhatsApp and voice, and states connections to Mobilis, Djezzy and Ooredoo.', ar: 'تعدّد صفحته عن الجزائر الإرسال الجماعي، رموز OTP والرسائل ذات الرد، تقارير التسليم حسب المتعامل، واتساب والصوت، وتذكر اتصالات بموبيليس وجازي وأوريدو.' } },
  { name: 'B-SMS', by: 'Mobilis', url: 'https://mobilis.dz/b_sms', city: null, focus: 'operator', sender: null, services: ['bulk', 'sender_name', 'scheduling'],
    note: { fr: 'L’opérateur présente B-SMS comme une plateforme web d’envoi de SMS en masse pour les entreprises, avec un nom d’expéditeur personnalisé et une heure d’envoi choisie.', en: 'The operator presents B-SMS as a web platform for bulk business SMS, with a custom sender name and a chosen sending time.', ar: 'يقدّم المتعامل B-SMS كمنصة ويب لإرسال الرسائل القصيرة الجماعية للمؤسسات، باسم مرسل مخصص ووقت إرسال مختار.' } },
  { name: 'D7 Networks', url: 'https://d7networks.com/sms/algeria/', city: 'Dubaï', focus: 'international', sender: 'not_required', services: ['bulk', 'api', 'otp', 'whatsapp', 'docs', 'trial'],
    note: { fr: 'Sa page sur l’Algérie présente une API SMS, l’envoi marketing, une API de vérification par OTP et l’API WhatsApp Business, avec un acheminement par les trois opérateurs ; elle indique que l’enregistrement du nom d’expéditeur n’est pas demandé.', en: 'Its Algeria page presents an SMS API, marketing sending, an OTP verification API and the WhatsApp Business API, routed through the three operators; it states sender-name registration is not required.', ar: 'تعرض صفحته عن الجزائر واجهة برمجية للرسائل، الإرسال التسويقي، واجهة للتحقق برموز OTP وواجهة واتساب للأعمال، عبر المتعاملين الثلاثة؛ وتذكر أن تسجيل اسم المرسل غير مطلوب.' } },
  { name: 'eliteSMS', by: 'SOFTART', url: 'https://www.sms-algerie.com', city: 'Mohammadia', focus: 'local', sender: null, services: ['bulk', 'api', 'scheduling', 'personalisation', 'reports', 'two_way', 'trial'],
    note: { fr: 'Envoi depuis le web, un logiciel de bureau, une API HTTP ou par e-mail, avec groupes de contacts, variables, envois programmés, suivi de remise et gestion des réponses ; le site indique la prise en charge de l’arabe.', en: 'Sending from the web, desktop software, an HTTP API or by email, with contact groups, variables, scheduled sends, delivery tracking and reply handling; the site states Arabic support.', ar: 'الإرسال من الويب، برنامج مكتبي، واجهة HTTP أو عبر البريد، مع مجموعات جهات الاتصال، المتغيرات، الإرسال المبرمج، متابعة التسليم وتسيير الردود؛ ويذكر الموقع دعم العربية.' } },
  { name: 'NOTIF+', by: 'ICOSNET', url: 'https://icosnet.com.dz/en/notif/', city: 'Chéraga', focus: 'local', sender: null, services: ['bulk', 'api', 'sender_name', 'personalisation', 'reports'],
    note: { fr: 'Plateforme qui permet d’importer des listes de contacts, de personnaliser les campagnes, d’utiliser un nom d’expéditeur de 11 caractères, de se connecter par API et de lire les rapports de remise ; paiement par carte CIB ou Edahabia.', en: 'Platform for importing contact lists, personalising campaigns, using an 11-character sender name, connecting by API and reading delivery reports; payment by CIB or Edahabia card.', ar: 'منصة تسمح باستيراد قوائم جهات الاتصال، تخصيص الحملات، استعمال اسم مرسل من 11 حرفاً، الربط عبر واجهة برمجية وقراءة تقارير التسليم؛ الدفع ببطاقة CIB أو الذهبية.' } },
  { name: 'SMS Partner', url: 'https://www.smspartner.fr/envoi-sms-international/afrique/algerie/', city: 'Paris', focus: 'international', sender: null, services: ['bulk', 'api', 'otp', 'sender_name', 'scheduling', 'reports', 'two_way', 'plugins', 'docs', 'trial'],
    note: { fr: 'Sa page sur l’Algérie énumère une plateforme web, une API HTTP, les codes OTP, l’envoi par e-mail et un module CRM, nomme Djezzy, Mobilis et Ooredoo et demande le préfixe +213.', en: 'Its Algeria page lists a web platform, an HTTP API, OTP codes, email-to-SMS and a CRM module, names Djezzy, Mobilis and Ooredoo and asks for the +213 prefix.', ar: 'تعدّد صفحته عن الجزائر منصة ويب، واجهة HTTP، رموز OTP، الإرسال عبر البريد ووحدة CRM، وتذكر جازي وموبيليس وأوريدو وتطلب البادئة ‎+213.' } },
  { name: 'SMS.to', url: 'https://sms.to/bulk/algeria', city: 'Paphos', focus: 'international', sender: null, services: ['bulk', 'api', 'otp', 'scheduling', 'reports', 'whatsapp', 'plugins', 'docs', 'trial'],
    note: { fr: 'Ses pages sur l’Algérie décrivent les campagnes par fichier CSV, les envois programmés, les rapports de remise, une API REST et une API de vérification ; l’équipe examine le nom d’expéditeur avant la première campagne.', en: 'Its Algeria pages describe CSV campaigns, scheduled sends, delivery reports, a REST API and a verification API; the team reviews the sender name before the first campaign.', ar: 'تصف صفحاته عن الجزائر الحملات بملفات CSV، الإرسال المبرمج، تقارير التسليم، واجهة REST وواجهة للتحقق؛ ويراجع الفريق اسم المرسل قبل الحملة الأولى.' } },
  { name: 'TextMe', by: 'COMPUSAVE', url: 'https://textmedz.com', city: 'Alger', focus: 'local', sender: 'required', services: ['bulk', 'api', 'otp', 'sender_name', 'scheduling', 'personalisation', 'reports', 'docs'],
    note: { fr: 'Campagnes par fichier CSV, type de message OTP, nom d’expéditeur validé sur le compte, accusés de remise des opérateurs et API REST documentée ; le site nomme Mobilis, Djezzy et Ooredoo et indique un hébergement en Algérie.', en: 'CSV campaigns, an OTP message type, a sender name approved on the account, operator delivery receipts and a documented REST API; the site names Mobilis, Djezzy and Ooredoo and states hosting in Algeria.', ar: 'حملات بملفات CSV، نوع رسالة OTP، اسم مرسل مصادق عليه في الحساب، إشعارات تسليم المتعاملين وواجهة REST موثقة؛ ويذكر الموقع موبيليس وجازي وأوريدو واستضافة في الجزائر.' } },
  { name: 'Twilio', url: 'https://www.twilio.com/en-us/guidelines/dz/sms', city: null, focus: 'international', sender: 'required', services: ['api', 'sender_name'],
    note: { fr: 'Sa fiche sur l’Algérie conseille un nom d’expéditeur alphanumérique enregistré au préalable, indique que les SMS avec réponse et les codes courts ne sont pas proposés et que les lignes fixes ne reçoivent pas de SMS.', en: 'Its Algeria guidelines advise a pre-registered alphanumeric sender name, state that two-way SMS and short codes are not offered and that landlines cannot receive SMS.', ar: 'تنصح صفحته عن الجزائر باسم مرسل أبجدي رقمي مسجل مسبقاً، وتذكر أن الرسائل ذات الرد والأرقام القصيرة غير متاحة وأن الخطوط الثابتة لا تستقبل الرسائل.' } },
  // verified, not shown on the page (named in the FAQ)
  { name: 'Telnyx', url: 'https://support.telnyx.com/en/articles/6592441-algeria-sms-guidelines', city: null, focus: 'international', sender: 'required', services: ['sender_name'] },
  { name: 'LINK Mobility', url: 'https://docs.linkmobility.com/regulatory-guidelines/sender-id/algeria', city: null, focus: 'international', sender: 'not_required', services: ['sender_name'] },
  { name: 'Messente', url: 'https://support.messente.com/algeria-sms-regulations', city: null, focus: 'international', sender: 'not_required', services: ['sender_name', 'reports'] },
  { name: 'BulkSMS.com', url: 'https://www.bulksms.com/countries/a/algeria', city: null, focus: 'international', sender: null, services: ['bulk', 'api', 'trial'] },
];

// Shown beside the publisher: the operator offer and local providers whose site describes business
// SMS sending, and international platforms whose own page about Algeria describes several services.
export const TOP_SMS = ['Africala', 'B-SMS', 'D7 Networks', 'eliteSMS', 'NOTIF+', 'SMS Partner', 'SMS.to', 'TextMe', 'Twilio'];
