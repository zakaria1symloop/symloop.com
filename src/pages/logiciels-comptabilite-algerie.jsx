// /logiciels-comptabilite-algerie/ — source page: verified list of accounting software available
// in Algeria (FR / EN / AR). Data: src/data/sources/algeria-accounting-software.js.
// No prices, no statement of any accounting, tax or legal rule.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { ACCOUNTING, TOP_ACCOUNTING, VERIFIED_ON } from '../data/sources/algeria-accounting-software';

const ITEMS = ACCOUNTING.filter((x) => x.self || TOP_ACCOUNTING.includes(x.name));
const OTHERS = ACCOUNTING.filter((x) => !x.self);
const TOTAL = OTHERS.length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const on = (...keys) => ITEMS.filter((x) => (x.platforms || []).some((p) => keys.includes(p))).map((x) => x.name);
const kind = (k) => ITEMS.filter((x) => x.focus === k).length;
const TRIAL = has('trial');
const ONLINE = on('web', 'cloud');
const WINDOWS = on('windows');
const NETWORK = has('network');
const BANK = has('bank');
const ASSETS = has('assets');
const ANALYTIC = has('analytic');
const MULTI = has('multi_company');
const LINKED = has('invoicing_link');
const FIRMS = has('firms');
const ARABIC = has('arabic');
const SCF = has('scf_mentioned');

const KIND_LABELS = {
  fr: { builder: 'Sur mesure, relié au logiciel comptable', accounting: 'Logiciels de comptabilité', suite: 'Suites de gestion avec module comptable' },
  en: { builder: 'Custom-built, connected to the accounting software', accounting: 'Accounting software', suite: 'Management suites with an accounting module' },
  ar: { builder: 'على المقاس، مربوط ببرنامج المحاسبة', accounting: 'برامج المحاسبة', suite: 'مجموعات تسيير مع وحدة محاسبة' },
};
const FEATURE_LABELS = {
  fr: { custom: 'ventes, achats, stock et caisse reliés à la comptabilité', journals: 'journaux', ledger: 'grand livre', balance: 'balance', statements: 'états financiers', bank: 'rapprochement bancaire', assets: 'immobilisations', analytic: 'analytique', multi_company: 'plusieurs sociétés', multi_year: 'plusieurs exercices', import_export: 'import et export', invoicing_link: 'relié à la facturation', network: 'réseau local multi-poste', firms: 'pour cabinets comptables', trial: 'gratuit, essai ou démo', scf_mentioned: 'SCF mentionné', forms_mentioned: 'déclarations mentionnées', arabic: 'en arabe' },
  en: { custom: 'sales, purchases, stock and till connected to accounting', journals: 'journals', ledger: 'general ledger', balance: 'trial balance', statements: 'financial statements', bank: 'bank reconciliation', assets: 'fixed assets', analytic: 'analytic', multi_company: 'several companies', multi_year: 'several fiscal years', import_export: 'import and export', invoicing_link: 'linked to invoicing', network: 'local network, several users', firms: 'for accounting firms', trial: 'free, trial or demo', scf_mentioned: 'SCF mentioned', forms_mentioned: 'tax forms mentioned', arabic: 'in Arabic' },
  ar: { custom: 'المبيعات، المشتريات، المخزون والصندوق مربوطة بالمحاسبة', journals: 'اليوميات', ledger: 'الدفتر الكبير', balance: 'ميزان المراجعة', statements: 'القوائم المالية', bank: 'التقارب البنكي', assets: 'التثبيتات', analytic: 'التحليلية', multi_company: 'عدة شركات', multi_year: 'عدة سنوات مالية', import_export: 'الاستيراد والتصدير', invoicing_link: 'مربوط بالفوترة', network: 'شبكة محلية لعدة مستخدمين', firms: 'لمكاتب المحاسبة', trial: 'مجاني، تجريبي أو عرض', scf_mentioned: 'النظام المحاسبي المالي مذكور', forms_mentioned: 'التصريحات مذكورة', arabic: 'بالعربية' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} logiciels dont la page décrit la comptabilité, indique un lien avec l’Algérie et montre une activité depuis 2025 ; tous figurent ici, avec Symloop, qui publie la liste. Les logiciels dont le site ne s’ouvrait pas ou n’avait rien de daté depuis 2025 ne sont pas cités.`,
  en: `We verified ${TOTAL} products whose page describes accounting, states a link to Algeria and shows activity since 2025; all of them are here, with Symloop, which publishes the list. Products whose site did not load or had nothing dated since 2025 are not named.`,
  ar: `تحققنا من ${TOTAL} برامج تصف صفحتها المحاسبة، تذكر صلة بالجزائر وتُظهر نشاطاً منذ 2025؛ وكلها مذكورة هنا، مع Symloop التي تنشر القائمة. والبرامج التي لم يفتح موقعها أو لم يكن فيه شيء مؤرخ منذ 2025 غير مذكورة.`,
};

const CONTENT = {
  fr: {
    title: `Meilleurs logiciels de comptabilité en Algérie 2027 : liste vérifiée de ${N} solutions`,
    seoTitle: `Logiciels de comptabilité en Algérie 2027 : ${N} solutions vérifiées (Windows, réseau, en ligne)`,
    seoDescription: `Logiciels de comptabilité en Algérie en 2027 : ${N} solutions vérifiées avec les fonctions (journaux, grand livre, balance, états financiers, rapprochement bancaire, immobilisations), l’accès (Windows, réseau, en ligne) et l’essai ou la démo annoncés. Vérifié le 26 novembre 2026.`,
    keywords: 'meilleur logiciel comptabilité algérie 2027, logiciel comptabilité algérie, logiciel comptabilité algérie gratuit, logiciel comptable scf algérie, logiciel comptabilité générale algérie, logiciel cabinet comptable algérie, برنامج المحاسبة الجزائر',
    colCompany: 'Logiciel', colDoes: 'Fonctions et accès', colFact: 'Ce que son site en dit', countLabel: 'entrées vérifiées',
    lead: `Cette page présente ${N} solutions de comptabilité en Algérie : ${kind('accounting')} logiciels de comptabilité, ${kind('suite')} suites de gestion avec un module comptable, et Symloop, qui relie ses logiciels sur mesure au logiciel comptable. Pour chacun : les fonctions, l’accès (Windows, réseau, en ligne) et l’essai annoncé, relevés sur son propre site ; Symloop, qui publie la liste, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['États financiers', 'statements'], ['Rapprochement bancaire', 'bank'], ['Immobilisations', 'assets'], ['Analytique', 'analytic'], ['Plusieurs sociétés', 'multi_company'], ['Relié à la facturation', 'invoicing_link'], ['Pour cabinets comptables', 'firms'], ['Gratuit, essai ou démo (selon le site)', 'trial']],
    method: [
      'Nous avons cherché avec des mots simples : « logiciel comptabilité Algérie », « logiciel comptabilité Algérie gratuit », « logiciel comptable SCF Algérie », « برنامج المحاسبة الجزائر ».',
      'Un logiciel entre dans la liste si sa page décrit la comptabilité (journaux, grand livre, balance ou états financiers), s’ouvre, indique un lien avec l’Algérie et montre une activité depuis 2025. Quand un site mentionne le SCF ou des déclarations, nous le signalons seulement. Nous ne reprenons aucun prix. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'Nous n’avons installé ni testé aucun de ces logiciels : ce qui est indiqué est ce que chaque éditeur annonce. Demandez une démonstration avec vos propres données et l’avis de votre comptable avant de choisir.',
      'Cette page ne dit pas si un logiciel respecte une règle comptable ou fiscale. Plusieurs logiciels connus ne figurent pas ici parce que leur site ne s’ouvrait pas ou n’avait rien de daté depuis 2025 à la date de vérification.',
    ],
    fix: 'Une information est fausse, ou votre logiciel manque ? Écrivez-nous avec le lien de la page qui le décrit, nous corrigeons :',
    faq: [
      ['Quel est le meilleur logiciel de comptabilité en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} entrées avec ce que chaque éditeur annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur et ne vend pas de logiciel de comptabilité. Le bon choix dépend du nombre de sociétés, du nombre de postes et du lien avec votre facturation.`],
      ['Existe-t-il un logiciel de comptabilité gratuit en Algérie ?', `${join(TRIAL, 'et')} indiquent sur leur site une version gratuite, un essai ou une démonstration. Les conditions changent d’un éditeur à l’autre : lisez-les sur la page du logiciel.`],
      ['Quels logiciels de comptabilité fonctionnent en ligne ?', `${join(ONLINE, 'et')} indiquent un accès en ligne ou par navigateur.`],
      ['Quels logiciels fonctionnent sous Windows ou en réseau local ?', `${join(WINDOWS, 'et')} indiquent une installation sous Windows ; ${join(NETWORK, 'et')} annoncent une version en réseau local pour plusieurs postes.`],
      ['Quels logiciels font le rapprochement bancaire et les immobilisations ?', `${join(BANK, 'et')} annoncent le rapprochement bancaire ; ${join(ASSETS, 'et')} annoncent la gestion des immobilisations.`],
      ['Quels logiciels gèrent la comptabilité analytique ?', `${join(ANALYTIC, 'et')} annoncent la comptabilité analytique.`],
      ['Quel logiciel pour un cabinet comptable ou plusieurs sociétés ?', `${join(FIRMS, 'et')} se présentent comme conçus pour les cabinets comptables ; ${join(MULTI, 'et')} annoncent la gestion de plusieurs sociétés.`],
      ['Quels logiciels passent les factures en écritures automatiquement ?', `${join(LINKED, 'et')} indiquent un lien entre la facturation (ou le logiciel commercial) et la comptabilité.`],
      ['Quels logiciels mentionnent le SCF ou existent en arabe ?', `${join(SCF, 'et')} mentionnent le SCF sur leur site ; ${join(ARABIC, 'et')} indiquent l’arabe. Cette page n’explique pas le SCF : demandez à votre comptable.`],
      ['Combien coûte un logiciel de comptabilité en Algérie ?', 'Cette page ne reprend aucun prix. Le coût dépend du nombre de postes, de sociétés et de modules. Demandez un devis écrit qui précise la licence, les mises à jour et l’assistance.'],
      ['Mon logiciel de gestion peut-il alimenter ma comptabilité ?', 'Oui, quand il exporte les ventes, les achats et les encaissements dans un format que le logiciel comptable importe, ou par API. Symloop, qui publie cette page, construit des logiciels de gestion sur mesure reliés ainsi au logiciel comptable existant.'],
      ['Comment ajouter mon logiciel à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit votre logiciel. L’inscription est gratuite.'],
    ],
    related: [['La tech en Algérie : toutes nos listes', '/tech-algerie/'], ['Logiciel de comptabilité en Algérie : le guide', '/blog/logiciel-comptabilite-algerie-2024/'], ['Relier un logiciel existant par API : comptabilité, ERP, caisse', '/blog/integrer-logiciel-existant-api-algerie-2027-comptabilite-erp-caisse-webhooks-exports-sans-api/'], ['Meilleurs logiciels de facturation en Algérie', '/logiciels-facturation-algerie/']],
  },
  en: {
    title: `Best accounting software in Algeria 2027: a verified list of ${N} solutions`,
    seoTitle: `Accounting software in Algeria 2027: ${N} verified solutions (Windows, network, online)`,
    seoDescription: `Accounting software in Algeria in 2027: ${N} verified solutions with the features (journals, general ledger, trial balance, financial statements, bank reconciliation, fixed assets), access (Windows, network, online) and the trial or demo each states. Verified on 26 November 2026.`,
    keywords: 'best accounting software algeria 2027, accounting software algeria, free accounting software algeria, scf accounting software algeria, accounting firm software algeria',
    colCompany: 'Software', colDoes: 'Features and access', colFact: 'What its site says', countLabel: 'verified entries',
    lead: `This page presents ${N} accounting solutions in Algeria: ${kind('accounting')} accounting products, ${kind('suite')} management suites with an accounting module, and Symloop, which connects its custom software to the accounting software. For each one: the features, access (Windows, network, online) and the trial it states, read on its own website; Symloop, which publishes the list, comes first and the others follow in alphabetical order.`,
    byService: [['Financial statements', 'statements'], ['Bank reconciliation', 'bank'], ['Fixed assets', 'assets'], ['Analytic', 'analytic'], ['Several companies', 'multi_company'], ['Linked to invoicing', 'invoicing_link'], ['For accounting firms', 'firms'], ['Free, trial or demo (per the site)', 'trial']],
    method: [
      'We searched with simple words such as “accounting software Algeria”, “free accounting software Algeria” and “SCF accounting software Algeria”.',
      'A product enters the list if its page describes accounting (journals, general ledger, trial balance or financial statements), loads, states a link to Algeria and shows activity since 2025. When a site mentions the SCF or tax forms, we only report it. We report no prices. Each name links to the page read.',
    ],
    limits: [
      'We installed and tested none of these products: what is shown is what each publisher announces. Ask for a demonstration with your own data and your accountant’s opinion before choosing.',
      'This page does not say whether a product complies with any accounting or tax rule. Several well-known products are not here because their site did not load or had nothing dated since 2025 on the verification date.',
    ],
    fix: 'Something is wrong, or your product is missing? Write to us with the link to the page describing it, and we correct it:',
    faq: [
      ['What is the best accounting software in Algeria in 2027?', `There is no independent ranking. This page presents ${N} entries with what each publisher announces; Symloop, which publishes it, places itself first as the publisher’s choice and does not sell accounting software. The right choice depends on the number of companies, the number of users and the link with your invoicing.`],
      ['Is there free accounting software in Algeria?', `${join(TRIAL, 'and')} state a free version, a trial or a demonstration on their sites. Conditions differ from one publisher to another: read them on the product’s page.`],
      ['Which accounting software works online?', `${join(ONLINE, 'and')} state online or browser access.`],
      ['Which products run on Windows or on a local network?', `${join(WINDOWS, 'and')} state a Windows installation; ${join(NETWORK, 'and')} announce a local-network edition for several users.`],
      ['Which products do bank reconciliation and fixed assets?', `${join(BANK, 'and')} announce bank reconciliation; ${join(ASSETS, 'and')} announce fixed-asset management.`],
      ['Which products handle analytic accounting?', `${join(ANALYTIC, 'and')} announce analytic accounting.`],
      ['Which software for an accounting firm or several companies?', `${join(FIRMS, 'and')} present themselves as designed for accounting firms; ${join(MULTI, 'and')} announce several companies.`],
      ['Which products post invoices as entries automatically?', `${join(LINKED, 'and')} state a link between invoicing (or the commercial software) and accounting.`],
      ['Which products mention the SCF or exist in Arabic?', `${join(SCF, 'and')} mention the SCF on their sites; ${join(ARABIC, 'and')} state Arabic. This page does not explain the SCF: ask your accountant.`],
      ['How much does accounting software cost in Algeria?', 'This page reports no prices. The cost depends on the number of users, companies and modules. Ask for a written quote stating the licence, updates and support.'],
      ['Can my management software feed my accounting?', 'Yes, when it exports sales, purchases and payments in a format the accounting software imports, or through an API. Symloop, which publishes this page, builds custom management software connected that way to the existing accounting software.'],
      ['How do I add my software to this list?', 'Write to contact@symloop.com with the link to the page describing your software. Listing is free.'],
    ],
    related: [['Tech in Algeria: all our lists', '/tech-algerie/'], ['Best invoicing software in Algeria', '/logiciels-facturation-algerie/'], ['Best ERP software in Algeria', '/logiciels-erp-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `أفضل برامج المحاسبة في الجزائر 2027: قائمة موثقة من ${N} حلول`,
    seoTitle: `برامج المحاسبة في الجزائر 2027: ${N} حلول موثقة (ويندوز، شبكة، عبر الإنترنت)`,
    seoDescription: `برامج المحاسبة في الجزائر سنة 2027: ${N} حلول موثقة مع الوظائف (اليوميات، الدفتر الكبير، ميزان المراجعة، القوائم المالية، التقارب البنكي، التثبيتات)، طريقة الاستعمال (ويندوز، شبكة، عبر الإنترنت) والتجربة أو العرض المعلن. تم التحقق في 26 نوفمبر 2026.`,
    keywords: 'أفضل برنامج محاسبة الجزائر 2027, برنامج المحاسبة الجزائر, برنامج محاسبة مجاني الجزائر, برنامج محاسبة النظام المحاسبي المالي, برنامج مكتب محاسبة الجزائر',
    colCompany: 'البرنامج', colDoes: 'الوظائف وطريقة الاستعمال', colFact: 'ما يذكره موقعه', countLabel: 'مدخلات موثقة',
    lead: `تعرض هذه الصفحة ${N} حلول للمحاسبة في الجزائر: برامج محاسبة، مجموعات تسيير مع وحدة محاسبة، و Symloop التي تربط برمجياتها على المقاس ببرنامج المحاسبة. لكل واحد: الوظائف، طريقة الاستعمال (ويندوز، شبكة، عبر الإنترنت) والتجربة المعلنة، مأخوذة من موقعه؛ Symloop، ناشرة القائمة، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['القوائم المالية', 'statements'], ['التقارب البنكي', 'bank'], ['التثبيتات', 'assets'], ['التحليلية', 'analytic'], ['عدة شركات', 'multi_company'], ['مربوط بالفوترة', 'invoicing_link'], ['لمكاتب المحاسبة', 'firms'], ['مجاني، تجريبي أو عرض (حسب الموقع)', 'trial']],
    method: [
      'بحثنا بكلمات بسيطة مثل «برنامج المحاسبة الجزائر» و«برنامج محاسبة مجاني الجزائر» و«برنامج محاسبة SCF الجزائر».',
      'يدخل البرنامج القائمة إذا كانت صفحته تصف المحاسبة (اليوميات، الدفتر الكبير، ميزان المراجعة أو القوائم المالية)، تفتح، تذكر صلة بالجزائر وتُظهر نشاطاً منذ 2025. وحين يذكر موقع النظام المحاسبي المالي أو التصريحات نشير إلى ذلك فقط. ولا ننقل أي سعر. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'لم نثبّت ولم نختبر أياً من هذه البرامج: المذكور هو ما يعلنه كل ناشر. اطلبوا عرضاً تطبيقياً ببياناتكم ورأي محاسبكم قبل الاختيار.',
      'لا تذكر هذه الصفحة هل يحترم برنامج ما قاعدة محاسبية أو جبائية. وعدة برامج معروفة غير مذكورة لأن موقعها لم يفتح أو لم يكن فيه شيء مؤرخ منذ 2025 في تاريخ التحقق.',
    ],
    fix: 'معلومة خاطئة أو برنامجكم غير مدرج؟ راسلونا مع رابط الصفحة التي تصفه، ونصحّح:',
    faq: [
      ['ما هو أفضل برنامج محاسبة في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} مدخلات مع ما يعلنه كل ناشر؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر ولا تبيع برنامج محاسبة. والاختيار الصحيح يتوقف على عدد الشركات، عدد المستخدمين والصلة بالفوترة.`],
      ['هل يوجد برنامج محاسبة مجاني في الجزائر؟', `${join(TRIAL, 'و')} تذكر في مواقعها نسخة مجانية، تجربة أو عرضاً. والشروط تختلف من ناشر إلى آخر: اقرؤوها في صفحة البرنامج.`],
      ['ما هي برامج المحاسبة التي تعمل عبر الإنترنت؟', `${join(ONLINE, 'و')} تذكر استعمالاً عبر الإنترنت أو المتصفح.`],
      ['ما هي البرامج التي تعمل على ويندوز أو في شبكة محلية؟', `${join(WINDOWS, 'و')} تذكر التثبيت على ويندوز؛ و${join(NETWORK, 'و')} تعلن نسخة شبكية لعدة مستخدمين.`],
      ['ما هي البرامج التي تنجز التقارب البنكي والتثبيتات؟', `${join(BANK, 'و')} تعلن التقارب البنكي؛ و${join(ASSETS, 'و')} تعلن تسيير التثبيتات.`],
      ['ما هي البرامج التي تسيّر المحاسبة التحليلية؟', `${join(ANALYTIC, 'و')} تعلن المحاسبة التحليلية.`],
      ['أي برنامج لمكتب محاسبة أو لعدة شركات؟', `${join(FIRMS, 'و')} تقدّم نفسها كمصممة لمكاتب المحاسبة؛ و${join(MULTI, 'و')} تعلن تسيير عدة شركات.`],
      ['ما هي البرامج التي تحوّل الفواتير إلى قيود تلقائياً؟', `${join(LINKED, 'و')} تذكر صلة بين الفوترة (أو البرنامج التجاري) والمحاسبة.`],
      ['ما هي البرامج التي تذكر النظام المحاسبي المالي أو تتوفر بالعربية؟', `${join(SCF, 'و')} تذكر النظام المحاسبي المالي في مواقعها؛ و${join(ARABIC, 'و')} تذكر العربية. ولا تشرح هذه الصفحة هذا النظام: اسألوا محاسبكم.`],
      ['كم يكلف برنامج محاسبة في الجزائر؟', 'لا تنقل هذه الصفحة أي سعر. التكلفة تتوقف على عدد المستخدمين والشركات والوحدات. اطلبوا عرضاً مكتوباً يحدد الرخصة، التحديثات والمساعدة.'],
      ['هل يمكن لبرنامج التسيير أن يغذّي المحاسبة؟', 'نعم، حين يصدّر المبيعات والمشتريات والتحصيلات بصيغة يستوردها برنامج المحاسبة، أو عبر API. و Symloop، التي تنشر هذه الصفحة، تبني برمجيات تسيير على المقاس مربوطة هكذا ببرنامج المحاسبة الموجود.'],
      ['كيف أضيف برنامجي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف برنامجكم. الإدراج مجاني.'],
    ],
    related: [['التكنولوجيا في الجزائر: كل قوائمنا', '/tech-algerie/'], ['أفضل برامج الفوترة في الجزائر', '/logiciels-facturation-algerie/'], ['أفضل برامج ERP في الجزائر', '/logiciels-erp-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="logiciels-comptabilite-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
