// /logiciels-crm-algerie/ — source page: verified list of CRM software in Algeria (FR / EN / AR).
// Data: src/data/sources/algeria-crm-software.js. No prices, no client names or counts.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { CRM_SOFTWARE, TOP_CRM, VERIFIED_ON } from '../data/sources/algeria-crm-software';

const ITEMS = CRM_SOFTWARE.filter((x) => x.self || TOP_CRM.includes(x.name));
const OTHERS = CRM_SOFTWARE.filter((x) => !x.self);
const TOTAL = OTHERS.length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const kind = (k) => ITEMS.filter((x) => x.focus === k).map((x) => x.name);
const TRIAL = has('trial');
const WHATSAPP = has('whatsapp');
const FIELD = has('field_sales');
const TICKETS = has('tickets');
const QUOTES = has('quotes');
const MOBILE = has('mobile');
const API = has('api');
const REAL = kind('real_estate');
const HIDDEN = OTHERS.filter((x) => !TOP_CRM.includes(x.name)).map((x) => x.name);

const KIND_LABELS = {
  fr: { builder: 'Sur mesure', crm: 'CRM généralistes', real_estate: 'CRM pour l’immobilier', call_center: 'Centre d’appels avec CRM', suite: 'Module CRM d’une suite de gestion' },
  en: { builder: 'Custom-built', crm: 'General CRMs', real_estate: 'CRMs for real estate', call_center: 'Call centre with CRM', suite: 'CRM module of a management suite' },
  ar: { builder: 'على المقاس', crm: 'أنظمة CRM عامة', real_estate: 'أنظمة CRM للعقار', call_center: 'مركز اتصال مع CRM', suite: 'وحدة CRM ضمن مجموعة تسيير' },
};
const FEATURE_LABELS = {
  fr: { custom: 'portefeuille, pipeline, relances, devis, commerciaux', contacts: 'contacts', leads: 'prospects', pipeline: 'pipeline', follow_ups: 'relances', quotes: 'devis', invoicing: 'factures', tickets: 'tickets SAV', campaigns: 'campagnes', whatsapp: 'WhatsApp', call_center: 'téléphonie', mobile: 'mobile', reports: 'rapports', api: 'API', field_sales: 'commerciaux terrain', trial: 'gratuit, essai ou démo' },
  en: { custom: 'portfolio, pipeline, follow-ups, quotes, reps', contacts: 'contacts', leads: 'prospects', pipeline: 'pipeline', follow_ups: 'follow-ups', quotes: 'quotes', invoicing: 'invoices', tickets: 'support tickets', campaigns: 'campaigns', whatsapp: 'WhatsApp', call_center: 'telephony', mobile: 'mobile', reports: 'reports', api: 'API', field_sales: 'field sales reps', trial: 'free, trial or demo' },
  ar: { custom: 'المحفظة، المسار، المتابعات، العروض، المندوبون', contacts: 'جهات الاتصال', leads: 'الزبائن المحتملون', pipeline: 'مسار البيع', follow_ups: 'المتابعات', quotes: 'عروض الأسعار', invoicing: 'الفواتير', tickets: 'تذاكر ما بعد البيع', campaigns: 'الحملات', whatsapp: 'واتساب', call_center: 'الهاتف', mobile: 'الهاتف النقال', reports: 'التقارير', api: 'واجهة برمجية', field_sales: 'المندوبون الميدانيون', trial: 'مجاني، تجريبي أو عرض' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} logiciels. Cette page en retient dix : Symloop, qui publie la liste, et neuf logiciels dont la page décrit des fonctions CRM, indique un lien avec l’Algérie et montre une activité depuis 2025.`,
  en: `We verified ${TOTAL} products. This page keeps ten: Symloop, which publishes the list, and nine products whose page describes CRM features, states a link to Algeria and shows activity since 2025.`,
  ar: `تحققنا من ${TOTAL} برنامجاً. تحتفظ هذه الصفحة بعشرة: Symloop، التي تنشر القائمة، وتسعة برامج تصف صفحتها وظائف CRM، تذكر صلة بالجزائر وتُظهر نشاطاً منذ 2025.`,
};

const CONTENT = {
  fr: {
    title: `Meilleurs logiciels CRM en Algérie 2027 : liste vérifiée de ${N} solutions (prospects, relances, WhatsApp)`,
    seoTitle: `Logiciel CRM en Algérie 2027 : ${N} solutions vérifiées (pipeline, relances, WhatsApp)`,
    seoDescription: `Logiciels CRM en Algérie en 2027 : ${N} solutions vérifiées avec les fonctions (contacts, prospects, pipeline, relances, devis, tickets, WhatsApp, commerciaux terrain), l’accès et l’essai annoncés sur leur site. Vérifié le 26 novembre 2026.`,
    keywords: 'meilleur logiciel crm algérie 2027, logiciel crm algérie, crm algérie, crm algérien, gestion relation client algérie, crm immobilier algérie, crm whatsapp algérie, برنامج إدارة علاقات العملاء الجزائر',
    colCompany: 'Logiciel', colDoes: 'Fonctions CRM', colFact: 'Ce que son site en dit', countLabel: 'entrées vérifiées',
    lead: `Cette page présente ${N} solutions CRM en Algérie : des CRM généralistes, trois CRM pour l’immobilier, une plateforme de centre d’appels, deux modules CRM de suites de gestion, et Symloop, qui construit des CRM sur mesure. Pour chacun : les fonctions (prospects, pipeline, relances, devis, tickets, WhatsApp), l’accès et l’essai annoncés sur son propre site ; Symloop, qui publie la liste, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Relances', 'follow_ups'], ['Devis', 'quotes'], ['Tickets SAV', 'tickets'], ['WhatsApp', 'whatsapp'], ['Commerciaux terrain', 'field_sales'], ['API', 'api'], ['Gratuit, essai ou démo (selon le site)', 'trial']],
    method: [
      'Nous avons cherché avec des mots simples : « logiciel CRM Algérie », « CRM Algérie », « gestion relation client Algérie logiciel », « partenaire Zoho Algérie », « partenaire Bitrix24 Algérie », « برنامج إدارة علاقات العملاء الجزائر ».',
      'Un logiciel entre dans la liste si sa page décrit des fonctions CRM, s’ouvre, indique un lien avec l’Algérie et montre une activité depuis 2025. Nous n’avons trouvé aucune société algérienne dont le site se déclare partenaire de Zoho, Bitrix24, HubSpot, Salesforce ou Dynamics. Nous ne reprenons ni prix, ni nombre de clients, ni nom de client. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'Nous n’avons testé aucun de ces logiciels : ce qui est indiqué est ce que chaque éditeur annonce. Demandez une démonstration avec vos propres étapes de vente avant de choisir.',
      'Les intégrateurs Odoo sont sur notre page Odoo en Algérie. Les agences qui construisent un CRM sans produit à vendre ne figurent pas ici.',
    ],
    fix: 'Une information est fausse, ou votre logiciel manque ? Écrivez-nous avec le lien de la page qui le décrit, nous corrigeons :',
    faq: [
      ['Quel est le meilleur logiciel CRM en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} entrées avec ce que chaque éditeur annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur et ne vend pas de CRM prêt à l’emploi. Le bon choix dépend de votre façon de vendre : demandes entrantes, commerciaux sur le terrain, centre d’appels ou immobilier.`],
      ['Existe-t-il un CRM gratuit ou à l’essai en Algérie ?', `${join(TRIAL, 'et')} indiquent une version gratuite, un essai ou une démonstration.`],
      ['Quels CRM sont reliés à WhatsApp ?', `${join(WHATSAPP, 'et')} annoncent un lien avec WhatsApp.`],
      ['Quel CRM pour une agence ou un promoteur immobilier ?', `${join(REAL, 'et')} se présentent comme des CRM pour l’immobilier.`],
      ['Quel CRM pour des commerciaux sur le terrain ?', `${join(FIELD, 'et')} annoncent le suivi des commerciaux sur le terrain ; ${join(MOBILE, 'et')} annoncent un accès mobile.`],
      ['Quels CRM gèrent le service client (tickets) ?', `${join(TICKETS, 'et')} annoncent des tickets ; Call360 se présente comme une plateforme de centre d’appels avec fiche client.`],
      ['Quels CRM font aussi les devis ?', `${join(QUOTES, 'et')} annoncent les devis, directement ou par un module de la même suite.`],
      ['Quels CRM ont une API ?', `${join(API, 'et')} annoncent une API.`],
      ['Peut-on utiliser Zoho, HubSpot ou Salesforce en Algérie ?', 'Ces CRM sont accessibles en ligne, mais nous n’avons trouvé aucune société algérienne dont le site se déclare leur partenaire officiel. Cette page ne liste que des offres décrites sur un site lié à l’Algérie.'],
      ['Combien coûte un CRM en Algérie ?', 'Cette page ne reprend aucun prix. Le coût dépend du nombre d’utilisateurs, des modules et de l’accès. Demandez un devis écrit qui précise l’abonnement, la reprise de vos contacts et l’assistance.'],
      ['CRM prêt à l’emploi ou CRM sur mesure ?', 'Un CRM prêt à l’emploi convient quand vos étapes de vente sont courantes. Le sur-mesure se justifie quand les demandes arrivent de plusieurs canaux (site, WhatsApp, appels), que les commerciaux ont des règles propres ou que le CRM doit se relier au stock et à la facturation. Symloop, qui publie cette page, construit ce type de CRM.'],
      ['D’autres logiciels ?', `Nous avons aussi vérifié ${join(HIDDEN, 'et')}, dont la page n’affiche pas de date récente ou ne se déclare pas partenaire officiel.`],
      ['Comment ajouter mon CRM à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit votre logiciel. L’inscription est gratuite.'],
    ],
    related: [['La tech en Algérie : toutes nos listes', '/tech-algerie/'], ['Logiciel CRM : portefeuille, pipeline, relances, devis', '/blog/logiciel-crm-algerie-2027-portefeuille-clients-pipeline-relances-devis-prevision-commerciaux/'], ['Logiciel CRM en Algérie : le guide', '/blog/logiciel-crm-algerie-2024/'], ['Odoo en Algérie', '/odoo-algerie/']],
  },
  en: {
    title: `Best CRM software in Algeria 2027: a verified list of ${N} solutions (prospects, follow-ups, WhatsApp)`,
    seoTitle: `CRM software in Algeria 2027: ${N} verified solutions (pipeline, follow-ups, WhatsApp)`,
    seoDescription: `CRM software in Algeria in 2027: ${N} verified solutions with the features (contacts, prospects, pipeline, follow-ups, quotes, tickets, WhatsApp, field sales reps), access and trial stated on their sites. Verified on 26 November 2026.`,
    keywords: 'best crm software algeria 2027, crm algeria, algerian crm, customer relationship management algeria, real estate crm algeria, whatsapp crm algeria',
    colCompany: 'Software', colDoes: 'CRM features', colFact: 'What its site says', countLabel: 'verified entries',
    lead: `This page presents ${N} CRM solutions in Algeria: general CRMs, three CRMs for real estate, a call-centre platform, two CRM modules of management suites, and Symloop, which builds custom CRMs. For each one: the features (prospects, pipeline, follow-ups, quotes, tickets, WhatsApp), access and trial stated on its own site; Symloop, which publishes the list, comes first and the others follow in alphabetical order.`,
    byService: [['Follow-ups', 'follow_ups'], ['Quotes', 'quotes'], ['Support tickets', 'tickets'], ['WhatsApp', 'whatsapp'], ['Field sales reps', 'field_sales'], ['API', 'api'], ['Free, trial or demo (per the site)', 'trial']],
    method: [
      'We searched with simple words such as “CRM software Algeria”, “CRM Algeria”, “Zoho partner Algeria” and “Bitrix24 partner Algeria”.',
      'A product enters the list if its page describes CRM features, loads, states a link to Algeria and shows activity since 2025. We found no Algerian company whose site declares itself a partner of Zoho, Bitrix24, HubSpot, Salesforce or Dynamics. We report no prices, client counts or client names. Each name links to the page read.',
    ],
    limits: [
      'We tested none of these products: what is shown is what each publisher announces. Ask for a demonstration with your own sales stages before choosing.',
      'Odoo integrators are on our Odoo in Algeria page. Agencies that build a CRM without a product to sell are not here.',
    ],
    fix: 'Something is wrong, or your product is missing? Write to us with the link to the page describing it, and we correct it:',
    faq: [
      ['What is the best CRM software in Algeria in 2027?', `There is no independent ranking. This page presents ${N} entries with what each publisher announces; Symloop, which publishes it, places itself first as the publisher’s choice and sells no ready-made CRM. The right choice depends on how you sell: inbound requests, field reps, call centre or real estate.`],
      ['Is there a free or trial CRM in Algeria?', `${join(TRIAL, 'and')} state a free version, a trial or a demonstration.`],
      ['Which CRMs connect to WhatsApp?', `${join(WHATSAPP, 'and')} announce a WhatsApp connection.`],
      ['Which CRM for a property agency or developer?', `${join(REAL, 'and')} present themselves as CRMs for real estate.`],
      ['Which CRM for field sales reps?', `${join(FIELD, 'and')} announce field sales tracking; ${join(MOBILE, 'and')} announce mobile access.`],
      ['Which CRMs handle customer service (tickets)?', `${join(TICKETS, 'and')} announce tickets; Call360 presents itself as a call-centre platform with a customer record.`],
      ['Which CRMs also do quotes?', `${join(QUOTES, 'and')} announce quotes, directly or through a module of the same suite.`],
      ['Which CRMs have an API?', `${join(API, 'and')} announce an API.`],
      ['Can I use Zoho, HubSpot or Salesforce in Algeria?', 'These CRMs are available online, but we found no Algerian company whose site declares itself their official partner. This page lists only offers described on a site linked to Algeria.'],
      ['How much does a CRM cost in Algeria?', 'This page reports no prices. The cost depends on users, modules and access. Ask for a written quote stating the subscription, the import of your contacts and support.'],
      ['Ready-made or custom CRM?', 'A ready-made CRM suits common sales stages. Custom software is justified when requests arrive from several channels (website, WhatsApp, calls), reps follow their own rules or the CRM must connect to stock and invoicing. Symloop, which publishes this page, builds this kind of CRM.'],
      ['Other products?', `We also verified ${join(HIDDEN, 'and')}, whose page shows no recent date or does not declare an official partnership.`],
      ['How do I add my CRM to this list?', 'Write to contact@symloop.com with the link to the page describing your software. Listing is free.'],
    ],
    related: [['Tech in Algeria: all our lists', '/tech-algerie/'], ['Odoo in Algeria', '/odoo-algerie/'], ['Invoicing software in Algeria', '/logiciels-facturation-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `أفضل برامج CRM في الجزائر 2027: قائمة موثقة من ${N} حلول (الزبائن المحتملون، المتابعات، واتساب)`,
    seoTitle: `برنامج CRM في الجزائر 2027: ${N} حلول موثقة (مسار البيع، المتابعات، واتساب)`,
    seoDescription: `برامج إدارة علاقات العملاء في الجزائر سنة 2027: ${N} حلول موثقة مع الوظائف (جهات الاتصال، الزبائن المحتملون، مسار البيع، المتابعات، عروض الأسعار، التذاكر، واتساب، المندوبون الميدانيون)، طريقة الاستعمال والتجربة المعلنة. تم التحقق في 26 نوفمبر 2026.`,
    keywords: 'أفضل برنامج CRM الجزائر 2027, برنامج إدارة علاقات العملاء الجزائر, CRM جزائري, CRM العقار الجزائر, CRM واتساب',
    colCompany: 'البرنامج', colDoes: 'وظائف CRM', colFact: 'ما يذكره موقعه', countLabel: 'مدخلات موثقة',
    lead: `تعرض هذه الصفحة ${N} حلول CRM في الجزائر: أنظمة عامة، ثلاثة أنظمة للعقار، منصة مركز اتصال، وحدتا CRM ضمن مجموعات تسيير، و Symloop التي تبني أنظمة CRM على المقاس. لكل واحد: الوظائف (الزبائن المحتملون، مسار البيع، المتابعات، عروض الأسعار، التذاكر، واتساب)، طريقة الاستعمال والتجربة المعلنة في موقعه؛ Symloop، ناشرة القائمة، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['المتابعات', 'follow_ups'], ['عروض الأسعار', 'quotes'], ['تذاكر ما بعد البيع', 'tickets'], ['واتساب', 'whatsapp'], ['المندوبون الميدانيون', 'field_sales'], ['واجهة برمجية', 'api'], ['مجاني، تجريبي أو عرض (حسب الموقع)', 'trial']],
    method: [
      'بحثنا بكلمات بسيطة مثل «برنامج إدارة علاقات العملاء الجزائر» و«logiciel CRM Algérie» و«partenaire Zoho Algérie».',
      'يدخل البرنامج القائمة إذا كانت صفحته تصف وظائف CRM، تفتح، تذكر صلة بالجزائر وتُظهر نشاطاً منذ 2025. ولم نجد أي شركة جزائرية يعلن موقعها أنها شريك لـ Zoho أو Bitrix24 أو HubSpot أو Salesforce أو Dynamics. ولا ننقل أي سعر ولا عدد زبائن ولا أسماءهم. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'لم نختبر أياً من هذه البرامج: المذكور هو ما يعلنه كل ناشر. اطلبوا عرضاً تطبيقياً بمراحل البيع الخاصة بكم قبل الاختيار.',
      'مُدمِجو Odoo في صفحتنا عن Odoo في الجزائر. والوكالات التي تبني CRM دون منتج تبيعه غير مذكورة هنا.',
    ],
    fix: 'معلومة خاطئة أو برنامجكم غير مدرج؟ راسلونا مع رابط الصفحة التي تصفه، ونصحّح:',
    faq: [
      ['ما هو أفضل برنامج CRM في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} مدخلات مع ما يعلنه كل ناشر؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر ولا تبيع CRM جاهزاً. والاختيار الصحيح يتوقف على طريقة بيعكم: طلبات واردة، مندوبون ميدانيون، مركز اتصال أو عقار.`],
      ['هل يوجد CRM مجاني أو تجريبي في الجزائر؟', `${join(TRIAL, 'و')} تذكر نسخة مجانية، تجربة أو عرضاً.`],
      ['ما هي أنظمة CRM المربوطة بواتساب؟', `${join(WHATSAPP, 'و')} تعلن الربط بواتساب.`],
      ['أي CRM لوكالة أو مرقّ عقاري؟', `${join(REAL, 'و')} تقدّم نفسها كأنظمة CRM للعقار.`],
      ['أي CRM للمندوبين الميدانيين؟', `${join(FIELD, 'و')} تعلن متابعة المندوبين الميدانيين؛ و${join(MOBILE, 'و')} تعلن الدخول عبر الهاتف.`],
      ['ما هي أنظمة CRM التي تسيّر خدمة الزبائن (التذاكر)؟', `${join(TICKETS, 'و')} تعلن التذاكر؛ ويقدّم Call360 نفسه كمنصة مركز اتصال ببطاقة زبون.`],
      ['ما هي أنظمة CRM التي تنجز عروض الأسعار أيضاً؟', `${join(QUOTES, 'و')} تعلن عروض الأسعار، مباشرة أو عبر وحدة من المجموعة نفسها.`],
      ['ما هي أنظمة CRM التي لها واجهة برمجية؟', `${join(API, 'و')} تعلن واجهة برمجية.`],
      ['هل يمكن استعمال Zoho أو HubSpot أو Salesforce في الجزائر؟', 'هذه الأنظمة متاحة عبر الإنترنت، لكننا لم نجد أي شركة جزائرية يعلن موقعها أنها شريكها الرسمي. ولا تذكر هذه الصفحة إلا العروض الموصوفة في موقع مرتبط بالجزائر.'],
      ['كم يكلف CRM في الجزائر؟', 'لا تنقل هذه الصفحة أي سعر. التكلفة تتوقف على عدد المستخدمين، الوحدات وطريقة الاستعمال. اطلبوا عرضاً مكتوباً يحدد الاشتراك، نقل جهات اتصالكم والمساعدة.'],
      ['CRM جاهز أم على المقاس؟', 'CRM الجاهز يناسب مراحل البيع الشائعة. والبرنامج على المقاس مبرَّر حين تأتي الطلبات من عدة قنوات (الموقع، واتساب، المكالمات)، أو للمندوبين قواعد خاصة، أو يجب ربط CRM بالمخزون والفوترة. و Symloop، التي تنشر هذه الصفحة، تبني هذا النوع من الأنظمة.'],
      ['برامج أخرى؟', `تحققنا أيضاً من ${join(HIDDEN, 'و')}، التي لا تُظهر صفحتها تاريخاً حديثاً أو لا تعلن شراكة رسمية.`],
      ['كيف أضيف برنامجي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف برنامجكم. الإدراج مجاني.'],
    ],
    related: [['التكنولوجيا في الجزائر: كل قوائمنا', '/tech-algerie/'], ['Odoo في الجزائر', '/odoo-algerie/'], ['برامج الفوترة في الجزائر', '/logiciels-facturation-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="logiciels-crm-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
