// /api-sms-algerie/ — source page: verified list of providers for sending business SMS to Algerian
// numbers (bulk, API, OTP, sender name) (FR / EN / AR). Data: src/data/sources/algeria-sms-providers.js.
// No prices per SMS, no volumes or clients; no law or authorisation explained.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { SMS_PROVIDERS, TOP_SMS, VERIFIED_ON } from '../data/sources/algeria-sms-providers';

const ITEMS = SMS_PROVIDERS.filter((x) => x.self || TOP_SMS.includes(x.name));
const OTHERS = SMS_PROVIDERS.filter((x) => !x.self);
const TOTAL = OTHERS.length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const kind = (k) => ITEMS.filter((x) => x.focus === k).map((x) => x.name);
const LOCAL = kind('local');
const INTL = kind('international');
const API = has('api');
const OTP = has('otp');
const TWO = has('two_way');
const WA = has('whatsapp');
const PLUG = has('plugins');
const DOCS = has('docs');
const REQ = OTHERS.filter((x) => x.sender === 'required').map((x) => x.name);
const NOTREQ = OTHERS.filter((x) => x.sender === 'not_required').map((x) => x.name);
const HIDDEN = OTHERS.filter((x) => !TOP_SMS.includes(x.name)).map((x) => x.name);

const KIND_LABELS = {
  fr: { builder: 'Éditeur de la liste (intégration dans les applications)', operator: 'Opérateur mobile', local: 'Fournisseurs basés en Algérie', international: 'Plateformes internationales (page sur l’Algérie)' },
  en: { builder: 'Publisher of the list (integration into apps)', operator: 'Mobile operator', local: 'Providers based in Algeria', international: 'International platforms (page about Algeria)' },
  ar: { builder: 'ناشر القائمة (الربط بالتطبيقات)', operator: 'متعامل الهاتف النقال', local: 'مزوّدون مقرهم في الجزائر', international: 'منصات دولية (صفحة عن الجزائر)' },
};
const FEATURE_LABELS = {
  fr: { custom: 'SMS, OTP et WhatsApp reliés à l’application', bulk: 'envoi en masse', api: 'API', otp: 'codes OTP', sender_name: 'nom d’expéditeur', scheduling: 'envoi programmé', personalisation: 'personnalisation', reports: 'rapports de remise', two_way: 'réponses', whatsapp: 'WhatsApp', voice: 'voix', plugins: 'extensions', docs: 'documentation publique', trial: 'essai ou crédits offerts' },
  en: { custom: 'SMS, OTP and WhatsApp connected to the app', bulk: 'bulk sending', api: 'API', otp: 'OTP codes', sender_name: 'sender name', scheduling: 'scheduled sending', personalisation: 'personalisation', reports: 'delivery reports', two_way: 'replies', whatsapp: 'WhatsApp', voice: 'voice', plugins: 'plugins', docs: 'public docs', trial: 'trial or free credits' },
  ar: { custom: 'الرسائل، OTP وواتساب مربوطة بالتطبيق', bulk: 'الإرسال الجماعي', api: 'واجهة برمجية', otp: 'رموز OTP', sender_name: 'اسم المرسل', scheduling: 'الإرسال المبرمج', personalisation: 'التخصيص', reports: 'تقارير التسليم', two_way: 'الردود', whatsapp: 'واتساب', voice: 'الصوت', plugins: 'الإضافات', docs: 'توثيق عام', trial: 'تجربة أو رصيد مجاني' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} fournisseurs. Cette page en retient dix : Symloop, qui publie la liste, l’offre de Mobilis, trois fournisseurs basés en Algérie et cinq plateformes internationales dont la propre page sur l’Algérie décrit plusieurs services. Les autres sont cités dans les questions.`,
  en: `We verified ${TOTAL} providers. This page keeps ten: Symloop, which publishes the list, Mobilis’s offer, three providers based in Algeria and five international platforms whose own page about Algeria describes several services. The others are named in the questions.`,
  ar: `تحققنا من ${TOTAL} مزوّداً. تحتفظ هذه الصفحة بعشرة: Symloop، التي تنشر القائمة، عرض موبيليس، ثلاثة مزوّدين مقرهم في الجزائر وخمس منصات دولية تصف صفحتها عن الجزائر عدة خدمات. والبقية مذكورون في الأسئلة.`,
};

const CONTENT = {
  fr: {
    title: `API SMS et SMS professionnel en Algérie 2027 : liste vérifiée de ${N} fournisseurs (envoi en masse, OTP)`,
    seoTitle: `API SMS Algérie 2027 : ${N} fournisseurs de SMS professionnel vérifiés (OTP, envoi en masse)`,
    seoDescription: `Envoyer des SMS professionnels en Algérie en 2027 : ${N} fournisseurs vérifiés (Mobilis, fournisseurs algériens, plateformes internationales) avec ce que chacun propose : envoi en masse, API, codes OTP, nom d’expéditeur, rapports de remise. Vérifié le 27 novembre 2026.`,
    keywords: 'api sms algérie, sms api algérie, sms otp algérie, envoi sms en masse algérie, sms professionnel algérie, sms marketing algérie, nom d’expéditeur sms algérie, bulk sms algeria',
    colCompany: 'Fournisseur', colDoes: 'Services', colFact: 'Ce que son site en dit', countLabel: 'entrées vérifiées',
    lead: `Pour envoyer des SMS professionnels ou des codes OTP vers des numéros algériens, cette page présente ${N} entrées : l’offre B-SMS de Mobilis, trois fournisseurs basés en Algérie (${join(LOCAL, 'et')}), cinq plateformes internationales qui ont une page sur l’Algérie, et Symloop, qui relie ces services aux applications qu’elle construit. Pour chacun : l’envoi en masse, l’API, les codes OTP, le nom d’expéditeur et les rapports de remise annoncés sur son propre site ; Symloop est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['API', 'api'], ['Codes OTP', 'otp'], ['Nom d’expéditeur', 'sender_name'], ['Rapports de remise', 'reports'], ['Réponses', 'two_way'], ['WhatsApp', 'whatsapp'], ['Documentation publique', 'docs']],
    method: [
      'Nous avons cherché avec des mots simples : « API SMS Algérie », « SMS OTP Algérie », « envoi SMS en masse Algérie », « SMS professionnel Algérie », « bulk SMS Algeria ». Pour les opérateurs, nous avons lu leurs pages pour les entreprises.',
      'Un fournisseur entre dans la liste si son propre site décrit l’envoi de SMS professionnels vers l’Algérie et montre une activité depuis 2025 ; pour une plateforme internationale, il faut une page consacrée à l’Algérie. Nous ne reprenons ni prix par SMS, ni volume, ni nom de client, et nous n’expliquons aucune règle. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'Nous n’avons envoyé aucun SMS : ce qui est indiqué est ce que chaque fournisseur annonce. Faites un envoi d’essai vers les trois opérateurs avant de choisir.',
      'Les pages pour les entreprises de Djezzy et d’Ooredoo ne présentaient pas d’offre d’envoi de SMS à la date de vérification. Ce que les plateformes disent du nom d’expéditeur est rapporté comme leur propre déclaration.',
    ],
    fix: 'Une information est fausse, ou votre service manque ? Écrivez-nous avec le lien de la page qui le décrit, nous corrigeons :',
    faq: [
      ['Quel fournisseur d’API SMS choisir en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} entrées avec ce que chaque fournisseur annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur et n’envoie pas de SMS pour des tiers. Le bon choix dépend de l’usage : codes de connexion, notifications de commande ou campagnes.`],
      ['Quels fournisseurs ont une API SMS ?', `${join(API, 'et')} annoncent une API.`],
      ['Où envoyer des codes OTP par SMS en Algérie ?', `${join(OTP, 'et')} annoncent l’envoi de codes OTP ou une API de vérification.`],
      ['Quels opérateurs proposent l’envoi de SMS aux entreprises ?', 'Mobilis présente B-SMS, une plateforme web d’envoi en masse avec nom d’expéditeur. Les pages pour les entreprises de Djezzy et d’Ooredoo ne présentaient pas d’offre d’envoi de SMS à la date de vérification.'],
      ['Quels fournisseurs sont basés en Algérie ?', `${join(LOCAL, 'et')} indiquent une adresse en Algérie ; ${join(INTL, 'et')} sont des plateformes internationales avec une page sur l’Algérie.`],
      ['Faut-il enregistrer son nom d’expéditeur pour l’Algérie ?', `Les fournisseurs ne disent pas la même chose : ${join(REQ, 'et')} indiquent un nom d’expéditeur enregistré ou validé au préalable ; ${join(NOTREQ, 'et')} indiquent que ce n’est pas demandé. Cette page n’explique aucune règle : demandez à votre fournisseur ce qu’il exige.`],
      ['Peut-on recevoir des réponses par SMS ?', `${join(TWO, 'et')} annoncent la réception des réponses. Twilio indique que ce n’est pas proposé pour l’Algérie.`],
      ['Quels fournisseurs envoient aussi des messages WhatsApp ?', `${join(WA, 'et')} annoncent aussi WhatsApp.`],
      ['Quels fournisseurs ont une documentation publique ou des extensions ?', `${join(DOCS, 'et')} publient une documentation ; ${join(PLUG, 'et')} annoncent des extensions.`],
      ['Combien coûte un SMS professionnel en Algérie ?', 'Cette page ne reprend aucun prix. Le coût dépend du volume, du fournisseur et du type de message. Demandez un devis écrit et faites un envoi d’essai vers chaque opérateur.'],
      ['Comment intégrer les SMS et les OTP dans une application ?', 'L’application appelle l’API du fournisseur pour chaque code ou notification, enregistre l’accusé de remise et prévoit un autre canal quand le SMS n’arrive pas. Symloop, qui publie cette page, fait ce branchement dans les applications qu’elle construit.'],
      ['D’autres fournisseurs ?', `Nous avons aussi lu les pages sur l’Algérie de ${join(HIDDEN, 'et')}.`],
      ['Comment ajouter mon service à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit votre offre. L’inscription est gratuite.'],
    ],
    related: [['La tech en Algérie : toutes nos listes', '/tech-algerie/'], ['Connexion par OTP, SMS ou WhatsApp', '/blog/connexion-otp-sms-whatsapp-application-algerie-2027-numero-de-telephone-code-cout-par-envoi-fraude-passkeys/'], ['Notifications : push, SMS, WhatsApp', '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/'], ['Chiffres du mobile en Algérie (ARPCE)', '/chiffres-internet-mobile-algerie/']],
  },
  en: {
    title: `SMS API and business SMS in Algeria 2027: a verified list of ${N} providers (bulk, OTP)`,
    seoTitle: `SMS API Algeria 2027: ${N} verified business SMS providers (OTP, bulk)`,
    seoDescription: `Sending business SMS in Algeria in 2027: ${N} verified providers (Mobilis, Algerian providers, international platforms) with what each offers: bulk sending, API, OTP codes, sender name, delivery reports. Verified on 27 November 2026.`,
    keywords: 'sms api algeria, bulk sms algeria, sms otp algeria, business sms algeria, sender id algeria',
    colCompany: 'Provider', colDoes: 'Services', colFact: 'What its site says', countLabel: 'verified entries',
    lead: `To send business SMS or OTP codes to Algerian numbers, this page presents ${N} entries: Mobilis’s B-SMS offer, three providers based in Algeria (${join(LOCAL, 'and')}), five international platforms with a page about Algeria, and Symloop, which connects these services to the apps it builds. For each one: bulk sending, API, OTP codes, sender name and delivery reports stated on its own site; Symloop comes first and the others follow in alphabetical order.`,
    byService: [['API', 'api'], ['OTP codes', 'otp'], ['Sender name', 'sender_name'], ['Delivery reports', 'reports'], ['Replies', 'two_way'], ['WhatsApp', 'whatsapp'], ['Public docs', 'docs']],
    method: [
      'We searched with simple words such as “SMS API Algeria”, “SMS OTP Algeria”, “bulk SMS Algeria” and “business SMS Algeria”. For operators, we read their business pages.',
      'A provider enters the list if its own site describes sending business SMS to Algeria and shows activity since 2025; an international platform needs a page dedicated to Algeria. We report no per-SMS prices, volumes or client names, and we explain no rule. Each name links to the page read.',
    ],
    limits: [
      'We sent no SMS: what is shown is what each provider announces. Send a test to the three operators before choosing.',
      'Djezzy’s and Ooredoo’s business pages showed no SMS-sending offer on the verification date. What platforms say about sender names is reported as their own statement.',
    ],
    fix: 'Something is wrong, or your service is missing? Write to us with the link to the page describing it, and we correct it:',
    faq: [
      ['Which SMS API provider should I choose in Algeria in 2027?', `There is no independent ranking. This page presents ${N} entries with what each provider announces; Symloop, which publishes it, places itself first as the publisher’s choice and sends no SMS for others. The right choice depends on the use: login codes, order notifications or campaigns.`],
      ['Which providers have an SMS API?', `${join(API, 'and')} announce an API.`],
      ['Where can I send OTP codes by SMS in Algeria?', `${join(OTP, 'and')} announce OTP codes or a verification API.`],
      ['Which operators offer SMS sending to businesses?', 'Mobilis presents B-SMS, a web platform for bulk sending with a sender name. Djezzy’s and Ooredoo’s business pages showed no SMS-sending offer on the verification date.'],
      ['Which providers are based in Algeria?', `${join(LOCAL, 'and')} state an address in Algeria; ${join(INTL, 'and')} are international platforms with a page about Algeria.`],
      ['Do I need to register my sender name for Algeria?', `Providers do not say the same thing: ${join(REQ, 'and')} state a sender name registered or approved in advance; ${join(NOTREQ, 'and')} state it is not required. This page explains no rule: ask your provider what it requires.`],
      ['Can I receive replies by SMS?', `${join(TWO, 'and')} announce receiving replies. Twilio states it is not offered for Algeria.`],
      ['Which providers also send WhatsApp messages?', `${join(WA, 'and')} also announce WhatsApp.`],
      ['Which providers have public docs or plugins?', `${join(DOCS, 'and')} publish documentation; ${join(PLUG, 'and')} announce plugins.`],
      ['How much does a business SMS cost in Algeria?', 'This page reports no prices. The cost depends on volume, provider and message type. Ask for a written quote and send a test to each operator.'],
      ['How do I integrate SMS and OTP into an app?', 'The app calls the provider’s API for each code or notification, stores the delivery receipt and plans another channel when the SMS does not arrive. Symloop, which publishes this page, does this wiring in the apps it builds.'],
      ['Other providers?', `We also read the Algeria pages of ${join(HIDDEN, 'and')}.`],
      ['How do I add my service to this list?', 'Write to contact@symloop.com with the link to the page describing your offer. Listing is free.'],
    ],
    related: [['Tech in Algeria: all our lists', '/tech-algerie/'], ['Mobile figures in Algeria (ARPCE)', '/chiffres-internet-mobile-algerie/'], ['Online payment solutions in Algeria', '/solutions-paiement-en-ligne-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `واجهة الرسائل القصيرة والرسائل المهنية في الجزائر 2027: قائمة موثقة من ${N} مزوّدين (إرسال جماعي، OTP)`,
    seoTitle: `واجهة SMS في الجزائر 2027: ${N} مزوّدين موثقين للرسائل المهنية (OTP، إرسال جماعي)`,
    seoDescription: `إرسال الرسائل القصيرة المهنية في الجزائر سنة 2027: ${N} مزوّدين موثقين (موبيليس، مزوّدون جزائريون، منصات دولية) مع ما يقترحه كل واحد: الإرسال الجماعي، الواجهة البرمجية، رموز OTP، اسم المرسل، تقارير التسليم. تم التحقق في 27 نوفمبر 2026.`,
    keywords: 'واجهة sms الجزائر, رسائل قصيرة جماعية الجزائر, رموز otp الجزائر, رسائل مهنية الجزائر, اسم المرسل الجزائر',
    colCompany: 'المزوّد', colDoes: 'الخدمات', colFact: 'ما يذكره موقعه', countLabel: 'مدخلات موثقة',
    lead: `لإرسال رسائل قصيرة مهنية أو رموز OTP إلى أرقام جزائرية، تعرض هذه الصفحة ${N} مدخلات: عرض B-SMS لموبيليس، ثلاثة مزوّدين مقرهم في الجزائر (${join(LOCAL, 'و')})، خمس منصات دولية لها صفحة عن الجزائر، و Symloop التي تربط هذه الخدمات بالتطبيقات التي تبنيها. لكل واحد: الإرسال الجماعي، الواجهة البرمجية، رموز OTP، اسم المرسل وتقارير التسليم المعلنة في موقعه؛ Symloop في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['واجهة برمجية', 'api'], ['رموز OTP', 'otp'], ['اسم المرسل', 'sender_name'], ['تقارير التسليم', 'reports'], ['الردود', 'two_way'], ['واتساب', 'whatsapp'], ['توثيق عام', 'docs']],
    method: [
      'بحثنا بكلمات بسيطة مثل «واجهة SMS الجزائر» و«رموز OTP الجزائر» و«إرسال رسائل قصيرة جماعية الجزائر». وقرأنا صفحات المؤسسات لدى المتعاملين.',
      'يدخل المزوّد القائمة إذا كان موقعه يصف إرسال رسائل مهنية إلى الجزائر ويُظهر نشاطاً منذ 2025؛ وللمنصة الدولية يلزم صفحة مخصصة للجزائر. ولا ننقل سعر الرسالة ولا الحجم ولا أسماء الزبائن، ولا نشرح أي قاعدة. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'لم نرسل أي رسالة: المذكور هو ما يعلنه كل مزوّد. أرسلوا رسالة تجريبية إلى المتعاملين الثلاثة قبل الاختيار.',
      'صفحات المؤسسات لدى جازي وأوريدو لم تعرض عرضاً لإرسال الرسائل في تاريخ التحقق. وما تقوله المنصات عن اسم المرسل منقول كتصريح منها.',
    ],
    fix: 'معلومة خاطئة أو خدمتكم غير مدرجة؟ راسلونا مع رابط الصفحة التي تصفها، ونصحّح:',
    faq: [
      ['أي مزوّد لواجهة الرسائل القصيرة أختار في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} مدخلات مع ما يعلنه كل مزوّد؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر ولا ترسل رسائل لحساب الغير. والاختيار الصحيح يتوقف على الاستعمال: رموز الدخول، إشعارات الطلبيات أو الحملات.`],
      ['ما هم المزوّدون الذين لهم واجهة برمجية؟', `${join(API, 'و')} تعلن واجهة برمجية.`],
      ['أين أرسل رموز OTP برسالة قصيرة في الجزائر؟', `${join(OTP, 'و')} تعلن إرسال رموز OTP أو واجهة للتحقق.`],
      ['ما هم المتعاملون الذين يقترحون إرسال الرسائل للمؤسسات؟', 'تعرض موبيليس B-SMS، منصة ويب للإرسال الجماعي باسم مرسل. وصفحات المؤسسات لدى جازي وأوريدو لم تعرض عرضاً لإرسال الرسائل في تاريخ التحقق.'],
      ['ما هم المزوّدون الذين مقرهم في الجزائر؟', `${join(LOCAL, 'و')} تذكر عنواناً في الجزائر؛ و${join(INTL, 'و')} منصات دولية لها صفحة عن الجزائر.`],
      ['هل يجب تسجيل اسم المرسل للجزائر؟', `المزوّدون لا يقولون الشيء نفسه: ${join(REQ, 'و')} تذكر اسم مرسل مسجلاً أو مصادقاً عليه مسبقاً؛ و${join(NOTREQ, 'و')} تذكر أن ذلك غير مطلوب. ولا تشرح هذه الصفحة أي قاعدة: اسألوا مزوّدكم عما يشترطه.`],
      ['هل يمكن استقبال الردود برسالة قصيرة؟', `${join(TWO, 'و')} تعلن استقبال الردود. ويذكر Twilio أن ذلك غير متاح للجزائر.`],
      ['ما هم المزوّدون الذين يرسلون رسائل واتساب أيضاً؟', `${join(WA, 'و')} تعلن واتساب أيضاً.`],
      ['ما هم المزوّدون الذين لهم توثيق عام أو إضافات؟', `${join(DOCS, 'و')} تنشر توثيقاً؛ و${join(PLUG, 'و')} تعلن إضافات.`],
      ['كم تكلف الرسالة المهنية في الجزائر؟', 'لا تنقل هذه الصفحة أي سعر. التكلفة تتوقف على الحجم، المزوّد ونوع الرسالة. اطلبوا عرضاً مكتوباً وأرسلوا رسالة تجريبية إلى كل متعامل.'],
      ['كيف أدمج الرسائل القصيرة ورموز OTP في تطبيق؟', 'يستدعي التطبيق واجهة المزوّد لكل رمز أو إشعار، يحفظ إشعار التسليم ويُعدّ قناة أخرى حين لا تصل الرسالة. و Symloop، التي تنشر هذه الصفحة، تنجز هذا الربط في التطبيقات التي تبنيها.'],
      ['مزوّدون آخرون؟', `قرأنا أيضاً صفحات الجزائر لدى ${join(HIDDEN, 'و')}.`],
      ['كيف أضيف خدمتي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف عرضكم. الإدراج مجاني.'],
    ],
    related: [['التكنولوجيا في الجزائر: كل قوائمنا', '/tech-algerie/'], ['أرقام النقال في الجزائر (ARPCE)', '/chiffres-internet-mobile-algerie/'], ['حلول الدفع الإلكتروني في الجزائر', '/solutions-paiement-en-ligne-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="api-sms-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
