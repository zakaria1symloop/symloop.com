// /logiciels-erp-algerie/ — source page: verified list of ERP and business management software
// in Algeria (FR / EN / AR). Data: src/data/sources/algeria-erp-software.js. No prices.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { ERP_SOFTWARE, TOP_ERP, VERIFIED_ON } from '../data/sources/algeria-erp-software';

// ten per list: the publisher and nine products (rule in SELECTION below)
const ITEMS = ERP_SOFTWARE.filter((x) => x.self || TOP_ERP.includes(x.name));
const TOTAL = ERP_SOFTWARE.filter((x) => !x.self).length;
const N = ITEMS.length;
const CITIES = new Set(ITEMS.map((x) => x.city)).size;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const ACCOUNTING = has('accounting');
const DISTRIBUTION = has('distribution');
const PRODUCTION = has('production');
const CLOUD = ITEMS.filter((x) => (x.platforms || []).some((p) => p === 'cloud' || p === 'web')).map((x) => x.name);
const ODOO = ERP_SOFTWARE.filter((x) => x.product === 'Odoo').map((x) => x.name);

const KIND_LABELS = {
  fr: { custom: 'Sur mesure', publisher: 'Logiciels d’éditeurs algériens', integrator: 'Intégrateurs' },
  en: { custom: 'Custom-built', publisher: 'Software from Algerian publishers', integrator: 'Integrators' },
  ar: { custom: 'على المقاس', publisher: 'برمجيات ناشرين جزائريين', integrator: 'مُدمِجون' },
};
const MODULE_LABELS = {
  fr: { custom: 'modules définis avec l’entreprise', sales: 'ventes et facturation', stock: 'stock', purchasing: 'achats', accounting: 'comptabilité', payroll: 'paie et RH', production: 'production', pos: 'caisse (point de vente)', distribution: 'distribution et tournées', crm: 'CRM', projects: 'projets', reporting: 'tableaux de bord', ecommerce: 'vente en ligne' },
  en: { custom: 'modules defined with the company', sales: 'sales and invoicing', stock: 'stock', purchasing: 'purchasing', accounting: 'accounting', payroll: 'payroll and HR', production: 'production', pos: 'point of sale', distribution: 'distribution and routes', crm: 'CRM', projects: 'projects', reporting: 'dashboards', ecommerce: 'online sales' },
  ar: { custom: 'وحدات تُحدَّد مع المؤسسة', sales: 'المبيعات والفوترة', stock: 'المخزون', purchasing: 'المشتريات', accounting: 'المحاسبة', payroll: 'الأجور والموارد البشرية', production: 'الإنتاج', pos: 'نقطة البيع', distribution: 'التوزيع والجولات', crm: 'CRM', projects: 'المشاريع', reporting: 'لوحات القيادة', ecommerce: 'البيع عبر الإنترنت' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} logiciels et intégrateurs. Cette page en retient dix : Symloop, qui publie la liste et construit du sur-mesure, et neuf logiciels d’éditeurs algériens dont la page produit décrit les modules, un par éditeur.`,
  en: `We verified ${TOTAL} products and integrators. This page keeps ten: Symloop, which publishes the list and builds custom software, and nine products from Algerian publishers whose product page describes the modules, one per publisher.`,
  ar: `تحققنا من ${TOTAL} برنامجاً ومُدمِجاً. تحتفظ هذه الصفحة بعشرة: Symloop، التي تنشر القائمة وتبني على المقاس، وتسعة برامج لناشرين جزائريين تصف صفحة المنتج وحداتها، واحد لكل ناشر.`,
};

const CONTENT = {
  fr: {
    title: `Meilleurs logiciels ERP en Algérie 2027 : liste vérifiée de ${N} logiciels de gestion d’entreprise`,
    seoTitle: `Meilleurs logiciels ERP en Algérie 2027 (${N} logiciels de gestion vérifiés)`,
    seoDescription: `Logiciels ERP et de gestion commerciale en Algérie en 2027 : ${N} solutions vérifiées avec l’éditeur, la ville, les modules (ventes, stock, achats, comptabilité, paie, production, caisse, distribution) et le mode d’accès. Vérifié le 25 novembre 2026.`,
    keywords: 'meilleur logiciel erp algérie 2027, logiciel erp algérie, erp algérien, logiciel de gestion commerciale algérie, logiciel gestion de stock algérie, logiciel comptabilité algérie, intégrateur odoo algérie',
    colCompany: 'Logiciel', colDoes: 'Modules et mode d’accès', colFact: 'Ce que son site en dit',
    lead: `Cette page présente ${N} solutions de gestion d’entreprise disponibles en Algérie : neuf logiciels ERP ou de gestion commerciale d’éditeurs algériens, dans ${CITIES} villes, et Symloop, qui construit des logiciels de gestion sur mesure. Pour chacune : l’éditeur, la ville, les modules et le mode d’accès, relevés sur son propre site ; Symloop, qui publie la liste, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Avec la comptabilité', 'accounting'], ['Avec la paie et les RH', 'payroll'], ['Avec la production', 'production'], ['Avec la caisse (point de vente)', 'pos'], ['Avec la distribution et les tournées', 'distribution'], ['Avec un CRM', 'crm']],
    method: [
      'Nous avons cherché avec des mots simples : « logiciel ERP Algérie », « logiciel de gestion commerciale Algérie », « logiciel gestion de stock Algérie », « intégrateur Odoo Algérie ».',
      'Un logiciel entre dans la liste s’il est édité par une société algérienne et si la page qui le décrit s’ouvre. Les modules et le mode d’accès sont ceux que le site indique ; nous ne reprenons aucun prix. Le lien de chaque nom mène à la page du logiciel.',
    ],
    limits: [
      'La liste n’est pas complète, et les modules sont ceux que chaque éditeur annonce : nous n’avons installé ni testé aucun de ces logiciels. Demandez une démonstration sur vos propres données avant de choisir.',
      'Cette page ne dit pas si un logiciel est conforme à une règle comptable, fiscale ou sociale : posez la question à l’éditeur et à votre comptable.',
    ],
    fix: 'Une information est fausse, ou votre logiciel manque ? Écrivez-nous avec le lien de la page qui le décrit, nous corrigeons :',
    faq: [
      ['Quel est le meilleur logiciel ERP en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} solutions avec ce que chaque éditeur annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur. Le bon choix dépend des modules dont vous avez besoin (comptabilité, paie, production, caisse), du nombre de sites, et du mode d’accès voulu, en ligne ou installé chez vous.`],
      ['Quels logiciels ERP algériens incluent la comptabilité ?', `Parmi les logiciels de cette page, ${join(ACCOUNTING, 'et')} annoncent un module de comptabilité.`],
      ['Quel logiciel pour un grossiste ou une société de distribution en Algérie ?', `${join(DISTRIBUTION, 'et')} annoncent des fonctions de distribution : vente en tournée, livraisons ou force de vente.`],
      ['Quels logiciels de gestion sont accessibles en ligne ?', `${join(CLOUD, 'et')} indiquent un accès en ligne (cloud ou navigateur). Les autres sont installés sur les postes de l’entreprise ou ne précisent pas le mode d’accès.`],
      ['Qui intègre Odoo en Algérie ?', `Parmi les sociétés que nous avons vérifiées, ${join(ODOO, 'et')} indiquent sur leur site qu’elles installent et adaptent Odoo.`],
      ['ERP prêt à l’emploi, Odoo ou logiciel sur mesure ?', 'Un ERP prêt à l’emploi convient quand l’entreprise travaille comme le logiciel le prévoit. Odoo s’adapte davantage, avec un intégrateur. Le sur-mesure se justifie quand le métier a des règles qu’aucun produit ne couvre, ou quand il faut relier plusieurs logiciels déjà en place.'],
      ['Comment ajouter mon logiciel à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit votre logiciel. L’inscription est gratuite.'],
    ],
    related: [['Meilleures entreprises informatiques en Algérie', '/entreprises-informatiques-algerie/'], ['Meilleurs logiciels de gestion scolaire en Algérie', '/logiciels-gestion-scolaire-algerie/'], ['Solutions de paiement en ligne en Algérie', '/solutions-paiement-en-ligne-algerie/'], ['Nous contacter', '/contact/']],
  },
  en: {
    title: `Best ERP software in Algeria 2027: a verified list of ${N} business management solutions`,
    seoTitle: `Best ERP software in Algeria 2027 (${N} verified solutions)`,
    seoDescription: `ERP and business management software in Algeria in 2027: ${N} verified solutions with the publisher, city, modules (sales, stock, purchasing, accounting, payroll, production, point of sale, distribution) and how it is accessed. Verified on 25 November 2026.`,
    keywords: 'best erp software algeria 2027, erp software algeria, algerian erp, business management software algeria, inventory software algeria, accounting software algeria, odoo integrator algeria',
    colCompany: 'Software', colDoes: 'Modules and access', colFact: 'What its site says',
    lead: `This page presents ${N} business management solutions available in Algeria: nine ERP or commercial management products from Algerian publishers, in ${CITIES} cities, and Symloop, which builds custom management software. For each one: the publisher, the city, the modules and how it is accessed, read on its own website; Symloop, which publishes the list, comes first and the others follow in alphabetical order.`,
    byService: [['With accounting', 'accounting'], ['With payroll and HR', 'payroll'], ['With production', 'production'], ['With point of sale', 'pos'], ['With distribution and routes', 'distribution'], ['With a CRM', 'crm']],
    method: [
      'We searched with simple words such as “ERP software Algeria”, “business management software Algeria”, “inventory software Algeria” and “Odoo integrator Algeria”.',
      'A product enters the list if it is published by an Algerian company and the page describing it loads. The modules and the access mode are those the site states; we report no prices. Each name links to the product’s page.',
    ],
    limits: [
      'The list is not complete, and the modules are those each publisher announces: we have not installed or tested any of these products. Ask for a demo on your own data before choosing.',
      'This page does not say whether a product complies with any accounting, tax or labour rule: ask the publisher and your accountant.',
    ],
    fix: 'Something is wrong, or your product is missing? Write to us with the link to the page describing it, and we correct it:',
    faq: [
      ['What is the best ERP software in Algeria in 2027?', `There is no independent ranking. This page presents ${N} solutions with what each publisher announces; Symloop, which publishes it, places itself first as the publisher’s choice. The right choice depends on the modules you need (accounting, payroll, production, point of sale), the number of sites, and whether you want it online or installed on your premises.`],
      ['Which Algerian ERP products include accounting?', `Among the products on this page, ${join(ACCOUNTING, 'and')} announce an accounting module.`],
      ['Which software for a wholesaler or a distribution company in Algeria?', `${join(DISTRIBUTION, 'and')} announce distribution functions: route sales, deliveries or sales force.`],
      ['Which management software can be used online?', `${join(CLOUD, 'and')} state online access (cloud or browser). The others are installed on the company’s computers or do not state the access mode.`],
      ['Who integrates Odoo in Algeria?', `Among the companies we verified, ${join(ODOO, 'and')} state on their sites that they install and adapt Odoo.`],
      ['Ready-made ERP, Odoo or custom software?', 'A ready-made ERP suits a company that works the way the product expects. Odoo adapts further, with an integrator. Custom software is justified when the business has rules no product covers, or when several existing tools must be connected.'],
      ['How do I add my software to this list?', 'Write to contact@symloop.com with the link to the page describing your software. Listing is free.'],
    ],
    related: [['Best IT companies in Algeria', '/entreprises-informatiques-algerie/'], ['Best school management software in Algeria', '/logiciels-gestion-scolaire-algerie/'], ['Online payment solutions in Algeria', '/solutions-paiement-en-ligne-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `أفضل برامج ERP في الجزائر 2027: قائمة موثقة من ${N} حلول لتسيير المؤسسات`,
    seoTitle: `أفضل برامج ERP في الجزائر 2027 (${N} حلول موثقة)`,
    seoDescription: `برامج ERP والتسيير التجاري في الجزائر سنة 2027: ${N} حلول موثقة مع الناشر، المدينة، الوحدات (المبيعات، المخزون، المشتريات، المحاسبة، الأجور، الإنتاج، نقطة البيع، التوزيع) وطريقة الاستعمال. تم التحقق في 25 نوفمبر 2026.`,
    keywords: 'أفضل برنامج ERP الجزائر 2027, برنامج ERP الجزائر, برنامج تسيير تجاري الجزائر, برنامج تسيير المخزون الجزائر, برنامج محاسبة الجزائر, Odoo الجزائر',
    colCompany: 'البرنامج', colDoes: 'الوحدات وطريقة الاستعمال', colFact: 'ما يذكره موقعه',
    lead: `تعرض هذه الصفحة ${N} حلول لتسيير المؤسسات متوفرة في الجزائر: تسعة برامج ERP أو تسيير تجاري لناشرين جزائريين، في ${CITIES} مدن، و Symloop التي تبني برمجيات تسيير على المقاس. لكل واحد: الناشر، المدينة، الوحدات وطريقة الاستعمال، مأخوذة من موقعه؛ Symloop، ناشرة القائمة، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['بالمحاسبة', 'accounting'], ['بالأجور والموارد البشرية', 'payroll'], ['بالإنتاج', 'production'], ['بنقطة البيع', 'pos'], ['بالتوزيع والجولات', 'distribution'], ['بـ CRM', 'crm']],
    method: [
      'بحثنا بكلمات بسيطة مثل «برنامج ERP الجزائر» و«برنامج تسيير تجاري الجزائر» و«برنامج تسيير المخزون الجزائر».',
      'يدخل البرنامج القائمة إذا كان ناشره شركة جزائرية وكانت الصفحة التي تصفه تفتح. الوحدات وطريقة الاستعمال هي ما يذكره الموقع؛ ولا ننقل أي سعر. ورابط كل اسم يؤدي إلى صفحة البرنامج.',
    ],
    limits: [
      'القائمة غير كاملة، والوحدات هي ما يعلنه كل ناشر: لم نثبّت ولم نختبر أياً من هذه البرامج. اطلبوا عرضاً تجريبياً على بياناتكم قبل الاختيار.',
      'لا تذكر هذه الصفحة هل يطابق برنامج ما قاعدة محاسبية أو جبائية أو اجتماعية: اسألوا الناشر ومحاسبكم.',
    ],
    fix: 'معلومة خاطئة أو برنامجكم غير مدرج؟ راسلونا مع رابط الصفحة التي تصفه، ونصحّح:',
    faq: [
      ['ما هو أفضل برنامج ERP في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} حلول مع ما يعلنه كل ناشر؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر. والاختيار الصحيح يتوقف على الوحدات التي تحتاجونها (المحاسبة، الأجور، الإنتاج، نقطة البيع)، عدد المواقع، وطريقة الاستعمال المطلوبة، عبر الإنترنت أو مثبتاً عندكم.`],
      ['ما هي برامج ERP الجزائرية التي تضم المحاسبة؟', `من بين برامج هذه الصفحة، ${join(ACCOUNTING, 'و')} تعلن وحدة للمحاسبة.`],
      ['أي برنامج لتاجر جملة أو شركة توزيع في الجزائر؟', `${join(DISTRIBUTION, 'و')} تعلن وظائف للتوزيع: البيع المتنقل، التوصيل أو قوة البيع.`],
      ['ما هي برامج التسيير المتاحة عبر الإنترنت؟', `${join(CLOUD, 'و')} تذكر استعمالاً عبر الإنترنت (سحابة أو متصفح). والبقية تُثبَّت على حواسيب المؤسسة أو لا تحدد طريقة الاستعمال.`],
      ['من يدمج Odoo في الجزائر؟', `من بين الشركات التي تحققنا منها، ${join(ODOO, 'و')} تذكر في مواقعها أنها تثبّت Odoo وتكيّفه.`],
      ['ERP جاهز، Odoo أم برنامج على المقاس؟', 'ERP الجاهز يناسب المؤسسة التي تعمل كما يتوقعه البرنامج. و Odoo يتكيف أكثر، مع مُدمِج. والبرنامج على المقاس مبرَّر حين تكون للمهنة قواعد لا يغطيها أي منتج، أو حين يجب ربط عدة برامج موجودة.'],
      ['كيف أضيف برنامجي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف برنامجكم. الإدراج مجاني.'],
    ],
    related: [['أفضل شركات المعلوماتية في الجزائر', '/entreprises-informatiques-algerie/'], ['أفضل برامج تسيير المدارس في الجزائر', '/logiciels-gestion-scolaire-algerie/'], ['حلول الدفع الإلكتروني في الجزائر', '/solutions-paiement-en-ligne-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="logiciels-erp-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={MODULE_LABELS} selectionNote={SELECTION} groups={['city']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
