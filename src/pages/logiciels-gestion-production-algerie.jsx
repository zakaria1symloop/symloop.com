// /logiciels-gestion-production-algerie/ — source page: verified list of production management
// software (GPAO, MES) in Algeria (FR / EN / AR). Data: src/data/sources/algeria-production-software.js.
// No prices, no client names or counts.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { PRODUCTION, TOP_PRODUCTION, VERIFIED_ON } from '../data/sources/algeria-production-software';

const ITEMS = PRODUCTION.filter((x) => x.self || TOP_PRODUCTION.includes(x.name));
const OTHERS = PRODUCTION.filter((x) => !x.self);
const TOTAL = OTHERS.length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const LOTS = has('lots');
const DOWN = has('downtime');
const SHOP = has('shop_floor');
const MRP = has('mrp');
const COST = has('costing');
const QUALITY = has('quality');
const MAINT = has('maintenance');
const OEE = has('oee');
const TRIAL = has('trial');
const HIDDEN = OTHERS.filter((x) => !TOP_PRODUCTION.includes(x.name)).map((x) => x.name);

const KIND_LABELS = {
  fr: { builder: 'Sur mesure', gpao: 'GPAO et modules de production d’éditeurs algériens', mes: 'Système d’atelier (MES)', partner: 'ERP international par un partenaire algérien' },
  en: { builder: 'Custom-built', gpao: 'GPAO and production modules by Algerian publishers', mes: 'Shop-floor system (MES)', partner: 'International ERP through an Algerian partner' },
  ar: { builder: 'على المقاس', gpao: 'برامج ووحدات تسيير الإنتاج لناشرين جزائريين', mes: 'نظام الورشة (MES)', partner: 'ERP دولي عبر شريك جزائري' },
};
const FEATURE_LABELS = {
  fr: { custom: 'ordres, saisie au poste, arrêts, lots, coût', bom: 'nomenclatures', work_orders: 'ordres de fabrication', planning: 'planification', shop_floor: 'saisie à l’atelier', downtime: 'arrêts machine', raw_materials: 'matières premières', lots: 'traçabilité des lots', quality: 'qualité', costing: 'coût de revient', maintenance: 'maintenance', oee: 'TRS', stock: 'stock', mrp: 'calcul des besoins', reports: 'rapports', trial: 'essai ou démo' },
  en: { custom: 'orders, workstation entry, stops, lots, cost', bom: 'bills of materials', work_orders: 'manufacturing orders', planning: 'planning', shop_floor: 'shop-floor entry', downtime: 'machine stops', raw_materials: 'raw materials', lots: 'lot traceability', quality: 'quality', costing: 'production cost', maintenance: 'maintenance', oee: 'OEE', stock: 'stock', mrp: 'requirements planning', reports: 'reports', trial: 'trial or demo' },
  ar: { custom: 'الأوامر، الإدخال عند المنصب، التوقفات، الدفعات، التكلفة', bom: 'التشكيلات', work_orders: 'أوامر التصنيع', planning: 'التخطيط', shop_floor: 'الإدخال في الورشة', downtime: 'توقفات الآلات', raw_materials: 'المواد الأولية', lots: 'تتبع الدفعات', quality: 'الجودة', costing: 'سعر التكلفة', maintenance: 'الصيانة', oee: 'مردود التجهيزات', stock: 'المخزون', mrp: 'حساب الاحتياجات', reports: 'التقارير', trial: 'تجربة أو عرض' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} logiciels. Cette page en retient dix : Symloop, qui publie la liste, et neuf logiciels dont la page décrit en détail plusieurs fonctions de production, indique un lien avec l’Algérie et montre une activité depuis 2025. Les trois autres sont cités dans les questions.`,
  en: `We verified ${TOTAL} products. This page keeps ten: Symloop, which publishes the list, and nine products whose page describes several production features in detail, states a link to Algeria and shows activity since 2025. The other three are named in the questions.`,
  ar: `تحققنا من ${TOTAL} برنامجاً. تحتفظ هذه الصفحة بعشرة: Symloop، التي تنشر القائمة، وتسعة برامج تصف صفحتها بالتفصيل عدة وظائف للإنتاج، تذكر صلة بالجزائر وتُظهر نشاطاً منذ 2025. والثلاثة الأخرى مذكورة في الأسئلة.`,
};

const CONTENT = {
  fr: {
    title: `Logiciels de gestion de production en Algérie 2027 : liste vérifiée de ${N} solutions (GPAO, MES)`,
    seoTitle: `Logiciel de gestion de production Algérie 2027 : ${N} GPAO vérifiées`,
    seoDescription: `Logiciels de gestion de production (GPAO, MES) en Algérie en 2027 : ${N} solutions vérifiées avec les fonctions (nomenclatures, ordres de fabrication, planification, saisie à l’atelier, arrêts machine, traçabilité des lots, coût de revient, TRS) annoncées sur leur site. Vérifié le 27 novembre 2026.`,
    keywords: 'logiciel gestion de production algérie, logiciel production algérie, gpao algérie, erp industriel algérie, logiciel ordre de fabrication algérie, traçabilité des lots algérie, mes algérie, برنامج تسيير الإنتاج الجزائر',
    colCompany: 'Logiciel', colDoes: 'Fonctions de production', colFact: 'Ce que son site en dit', countLabel: 'entrées vérifiées',
    lead: `Pour gérer la production d’une usine ou d’un atelier en Algérie, cette page présente ${N} solutions : sept GPAO ou modules de production d’éditeurs algériens, un système d’atelier (MES), un ERP international proposé par un intégrateur algérien, et Symloop, qui construit des logiciels de production sur mesure. Pour chacune : les fonctions annoncées sur son propre site (nomenclatures, ordres de fabrication, arrêts machine, lots, coût de revient) ; Symloop, qui publie la liste, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Traçabilité des lots', 'lots'], ['Saisie à l’atelier', 'shop_floor'], ['Arrêts machine', 'downtime'], ['Calcul des besoins', 'mrp'], ['Qualité', 'quality'], ['Maintenance', 'maintenance'], ['Essai ou démo (selon le site)', 'trial']],
    method: [
      'Nous avons cherché avec des mots simples : « logiciel gestion de production Algérie », « GPAO Algérie », « ERP industriel Algérie », « logiciel ordre de fabrication Algérie », « برنامج تسيير الإنتاج الجزائر ».',
      'Un logiciel entre dans la liste si sa page décrit plusieurs fonctions de production, s’ouvre, indique un lien avec l’Algérie et montre une activité depuis 2025 ; un ERP international n’entre que par la page d’un partenaire algérien. Nous ne reprenons ni prix, ni nombre de clients ou d’usines, ni nom de client. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'Nous n’avons installé ni testé aucun de ces logiciels : ce qui est indiqué est ce que chaque éditeur annonce. Faites une démonstration avec une de vos nomenclatures et un ordre de fabrication réel avant de choisir.',
      'Les intégrateurs Odoo sont sur notre page Odoo en Algérie. Plusieurs logiciels connus n’avaient rien de daté depuis 2025 ou ne décrivaient pas de fonctions de production sur leur page.',
    ],
    fix: 'Une information est fausse, ou votre logiciel manque ? Écrivez-nous avec le lien de la page qui le décrit, nous corrigeons :',
    faq: [
      ['Quel est le meilleur logiciel de gestion de production en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} entrées avec ce que chaque éditeur annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur et ne vend pas de GPAO prête à l’emploi. Le bon choix dépend du type de fabrication (recettes, assemblage, à la commande) et du besoin de suivi à l’atelier.`],
      ['Quels logiciels assurent la traçabilité des lots ?', `${join(LOTS, 'et')} annoncent la traçabilité des lots.`],
      ['Quels logiciels enregistrent les arrêts machine ?', `${join(DOWN, 'et')} annoncent l’enregistrement des arrêts.`],
      ['Quels logiciels permettent la saisie directement à l’atelier ?', `${join(SHOP, 'et')} annoncent une saisie à l’atelier ou au poste.`],
      ['Quels logiciels calculent les besoins en matières ?', `${join(MRP, 'et')} annoncent un calcul des besoins ou des propositions d’achat.`],
      ['Quels logiciels calculent le coût de revient ?', `${join(COST, 'et')} annoncent le calcul du coût de production.`],
      ['Quels logiciels gèrent la qualité et la maintenance ?', `${join(QUALITY, 'et')} annoncent la qualité ; ${join(MAINT, 'et')} annoncent la maintenance.`],
      ['Quel logiciel calcule le TRS (OEE) ?', `Le calcul du TRS est annoncé par ${join(OEE, 'et')}.`],
      ['Existe-t-il un essai ou une démo ?', `${join(TRIAL, 'et')} indiquent un essai, une démo ou une version gratuite.`],
      ['Peut-on utiliser SAP, Sage ou Microsoft en Algérie pour la production ?', 'HALKORB présente Microsoft Dynamics 365 Business Central avec la fabrication ; MEGA MES indique recevoir les ordres depuis SAP. Nous n’avons pas trouvé de page d’un partenaire algérien de Sage ou de SAP décrivant la production et datée de 2025 ou après.'],
      ['Combien coûte un logiciel de gestion de production ?', 'Cette page ne reprend aucun prix. Le coût dépend du nombre de lignes, d’utilisateurs et de modules. Demandez un devis écrit qui précise l’installation, la reprise des nomenclatures, la formation et l’assistance.'],
      ['GPAO prête à l’emploi ou logiciel sur mesure ?', 'Une GPAO prête à l’emploi convient quand la fabrication suit des recettes ou des gammes courantes. Le sur-mesure se justifie quand il faut suivre des arrêts par cause sur des machines précises, une saisie au poste adaptée aux opérateurs ou un lien avec un logiciel déjà en place. Symloop, qui publie cette page, construit ce type de logiciel.'],
      ['D’autres logiciels ?', `Nous avons aussi vérifié ${join(HIDDEN, 'et')}, dont la page décrit moins de fonctions de production.`],
      ['Comment ajouter mon logiciel à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit votre logiciel. L’inscription est gratuite.'],
    ],
    related: [['La tech en Algérie : toutes nos listes', '/tech-algerie/'], ['GPAO : suivi d’atelier, arrêts machine, TRS', '/blog/logiciel-de-gestion-de-production-gpao-algerie-2027-suivi-d-atelier-au-poste-arrets-machine-par-cause-trs-en-cours-ordres-de-fabrication/'], ['Agroalimentaire : traçabilité des lots', '/blog/logiciel-agroalimentaire-algerie-2027-tracabilite-des-lots-de-la-matiere-a-la-palette-rappel-rendement-controles-qualite-dlc-erp-production/'], ['Meilleurs logiciels ERP en Algérie', '/logiciels-erp-algerie/']],
  },
  en: {
    title: `Production management software in Algeria 2027: a verified list of ${N} solutions (GPAO, MES)`,
    seoTitle: `Production management software Algeria 2027: ${N} verified solutions`,
    seoDescription: `Production management software (GPAO, MES) in Algeria in 2027: ${N} verified solutions with the features (BOMs, manufacturing orders, planning, shop-floor entry, machine stops, lot traceability, production cost, OEE) stated on their sites. Verified on 27 November 2026.`,
    keywords: 'production management software algeria, manufacturing software algeria, mrp algeria, mes algeria, lot traceability algeria',
    colCompany: 'Software', colDoes: 'Production features', colFact: 'What its site says', countLabel: 'verified entries',
    lead: `To manage production in a plant or workshop in Algeria, this page presents ${N} solutions: seven GPAO products or production modules by Algerian publishers, a shop-floor system (MES), an international ERP offered by an Algerian integrator, and Symloop, which builds custom production software. For each one: the features stated on its own site (BOMs, manufacturing orders, machine stops, lots, production cost); Symloop, which publishes the list, comes first and the others follow in alphabetical order.`,
    byService: [['Lot traceability', 'lots'], ['Shop-floor entry', 'shop_floor'], ['Machine stops', 'downtime'], ['Requirements planning', 'mrp'], ['Quality', 'quality'], ['Maintenance', 'maintenance'], ['Trial or demo (per the site)', 'trial']],
    method: [
      'We searched with simple words such as “production management software Algeria”, “GPAO Algeria”, “industrial ERP Algeria” and “manufacturing order software Algeria”.',
      'A product enters the list if its page describes several production features, loads, states a link to Algeria and shows activity since 2025; an international ERP enters only through an Algerian partner’s page. We report no prices, client or plant counts or client names. Each name links to the page read.',
    ],
    limits: [
      'We installed and tested none of these products: what is shown is what each publisher announces. Run a demo with one of your BOMs and a real manufacturing order before choosing.',
      'Odoo integrators are on our Odoo in Algeria page. Several known products had nothing dated since 2025 or described no production features on their page.',
    ],
    fix: 'Something is wrong, or your product is missing? Write to us with the link to the page describing it, and we correct it:',
    faq: [
      ['What is the best production management software in Algeria in 2027?', `There is no independent ranking. This page presents ${N} entries with what each publisher announces; Symloop, which publishes it, places itself first as the publisher’s choice and sells no ready-made GPAO. The right choice depends on the type of manufacturing (recipes, assembly, made to order) and the need for shop-floor tracking.`],
      ['Which software ensures lot traceability?', `${join(LOTS, 'and')} announce lot traceability.`],
      ['Which software records machine stops?', `${join(DOWN, 'and')} announce stop recording.`],
      ['Which software allows entry directly on the shop floor?', `${join(SHOP, 'and')} announce shop-floor or workstation entry.`],
      ['Which software calculates material requirements?', `${join(MRP, 'and')} announce requirements planning or purchase proposals.`],
      ['Which software calculates production cost?', `${join(COST, 'and')} announce production cost calculation.`],
      ['Which software handles quality and maintenance?', `${join(QUALITY, 'and')} announce quality; ${join(MAINT, 'and')} announce maintenance.`],
      ['Which software calculates OEE?', `OEE calculation is announced by ${join(OEE, 'and')}.`],
      ['Is there a trial or demo?', `${join(TRIAL, 'and')} state a trial, a demo or a free version.`],
      ['Can SAP, Sage or Microsoft be used in Algeria for production?', 'HALKORB presents Microsoft Dynamics 365 Business Central with manufacturing; MEGA MES states it receives orders from SAP. We found no page by an Algerian Sage or SAP partner describing production and dated 2025 or later.'],
      ['How much does production management software cost?', 'This page reports no prices. The cost depends on the number of lines, users and modules. Ask for a written quote stating installation, BOM import, training and support.'],
      ['Ready-made GPAO or custom software?', 'Ready-made GPAO suits manufacturing that follows common recipes or routings. Custom software is justified for tracking stops by cause on specific machines, workstation entry suited to operators, or a link with software already in place. Symloop, which publishes this page, builds this kind of software.'],
      ['Other products?', `We also verified ${join(HIDDEN, 'and')}, whose page describes fewer production features.`],
      ['How do I add my software to this list?', 'Write to contact@symloop.com with the link to the page describing your software. Listing is free.'],
    ],
    related: [['Tech in Algeria: all our lists', '/tech-algerie/'], ['Best ERP software in Algeria', '/logiciels-erp-algerie/'], ['Stock and point-of-sale software in Algeria', '/logiciels-gestion-de-stock-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `برامج تسيير الإنتاج في الجزائر 2027: قائمة موثقة من ${N} حلول (GPAO، MES)`,
    seoTitle: `برنامج تسيير الإنتاج في الجزائر 2027: ${N} حلول موثقة`,
    seoDescription: `برامج تسيير الإنتاج (GPAO، MES) في الجزائر سنة 2027: ${N} حلول موثقة مع الوظائف (التشكيلات، أوامر التصنيع، التخطيط، الإدخال في الورشة، توقفات الآلات، تتبع الدفعات، سعر التكلفة، مردود التجهيزات) المعلنة في مواقعها. تم التحقق في 27 نوفمبر 2026.`,
    keywords: 'برنامج تسيير الإنتاج الجزائر, برنامج إنتاج الجزائر, GPAO الجزائر, ERP صناعي الجزائر, تتبع الدفعات الجزائر',
    colCompany: 'البرنامج', colDoes: 'وظائف الإنتاج', colFact: 'ما يذكره موقعه', countLabel: 'مدخلات موثقة',
    lead: `لتسيير إنتاج مصنع أو ورشة في الجزائر، تعرض هذه الصفحة ${N} حلول: سبعة برامج أو وحدات تسيير إنتاج لناشرين جزائريين، نظام ورشة (MES)، ERP دولي يقترحه مُدمِج جزائري، و Symloop التي تبني برمجيات إنتاج على المقاس. لكل واحد: الوظائف المعلنة في موقعه (التشكيلات، أوامر التصنيع، توقفات الآلات، الدفعات، سعر التكلفة)؛ Symloop، ناشرة القائمة، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['تتبع الدفعات', 'lots'], ['الإدخال في الورشة', 'shop_floor'], ['توقفات الآلات', 'downtime'], ['حساب الاحتياجات', 'mrp'], ['الجودة', 'quality'], ['الصيانة', 'maintenance'], ['تجربة أو عرض (حسب الموقع)', 'trial']],
    method: [
      'بحثنا بكلمات بسيطة مثل «برنامج تسيير الإنتاج الجزائر» و«logiciel gestion de production Algérie» و«GPAO Algérie».',
      'يدخل البرنامج القائمة إذا كانت صفحته تصف عدة وظائف للإنتاج، تفتح، تذكر صلة بالجزائر وتُظهر نشاطاً منذ 2025؛ ولا يدخل ERP دولي إلا عبر صفحة شريك جزائري. ولا ننقل أي سعر ولا عدد زبائن أو مصانع ولا أسماء الزبائن. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'لم نثبّت ولم نختبر أياً من هذه البرامج: المذكور هو ما يعلنه كل ناشر. أجروا عرضاً تطبيقياً بإحدى تشكيلاتكم وأمر تصنيع حقيقي قبل الاختيار.',
      'مُدمِجو Odoo في صفحتنا عن Odoo في الجزائر. وعدة برامج معروفة لم يكن فيها شيء مؤرخ منذ 2025 أو لم تصف وظائف إنتاج في صفحتها.',
    ],
    fix: 'معلومة خاطئة أو برنامجكم غير مدرج؟ راسلونا مع رابط الصفحة التي تصفه، ونصحّح:',
    faq: [
      ['ما هو أفضل برنامج لتسيير الإنتاج في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} مدخلات مع ما يعلنه كل ناشر؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر ولا تبيع برنامجاً جاهزاً. والاختيار الصحيح يتوقف على نوع التصنيع (وصفات، تجميع، حسب الطلب) والحاجة إلى المتابعة في الورشة.`],
      ['ما هي البرامج التي تضمن تتبع الدفعات؟', `${join(LOTS, 'و')} تعلن تتبع الدفعات.`],
      ['ما هي البرامج التي تسجل توقفات الآلات؟', `${join(DOWN, 'و')} تعلن تسجيل التوقفات.`],
      ['ما هي البرامج التي تسمح بالإدخال مباشرة في الورشة؟', `${join(SHOP, 'و')} تعلن الإدخال في الورشة أو عند المنصب.`],
      ['ما هي البرامج التي تحسب احتياجات المواد؟', `${join(MRP, 'و')} تعلن حساب الاحتياجات أو اقتراحات الشراء.`],
      ['ما هي البرامج التي تحسب سعر التكلفة؟', `${join(COST, 'و')} تعلن حساب تكلفة الإنتاج.`],
      ['ما هي البرامج التي تسيّر الجودة والصيانة؟', `${join(QUALITY, 'و')} تعلن الجودة؛ و${join(MAINT, 'و')} تعلن الصيانة.`],
      ['أي برنامج يحسب مردود التجهيزات (OEE)؟', `يُعلَن حساب مردود التجهيزات في: ${join(OEE, 'و')}.`],
      ['هل توجد تجربة أو عرض؟', `${join(TRIAL, 'و')} تذكر تجربة أو عرضاً أو نسخة مجانية.`],
      ['هل يمكن استعمال SAP أو Sage أو Microsoft للإنتاج في الجزائر؟', 'يعرض HALKORB برنامج Microsoft Dynamics 365 Business Central مع التصنيع؛ ويذكر MEGA MES أنه يستقبل الأوامر من SAP. ولم نجد صفحة لشريك جزائري لـ Sage أو SAP تصف الإنتاج ومؤرخة من 2025 فما بعد.'],
      ['كم يكلف برنامج تسيير الإنتاج؟', 'لا تنقل هذه الصفحة أي سعر. التكلفة تتوقف على عدد الخطوط والمستخدمين والوحدات. اطلبوا عرضاً مكتوباً يحدد التثبيت، نقل التشكيلات، التكوين والمساعدة.'],
      ['برنامج جاهز أم على المقاس؟', 'البرنامج الجاهز يناسب التصنيع الذي يتبع وصفات أو مسارات شائعة. والبرنامج على المقاس مبرَّر لمتابعة التوقفات حسب السبب على آلات محددة، أو إدخال عند المنصب يناسب العمال، أو ربط ببرنامج موجود. و Symloop، التي تنشر هذه الصفحة، تبني هذا النوع من البرمجيات.'],
      ['برامج أخرى؟', `تحققنا أيضاً من ${join(HIDDEN, 'و')}، التي تصف صفحتها وظائف إنتاج أقل.`],
      ['كيف أضيف برنامجي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف برنامجكم. الإدراج مجاني.'],
    ],
    related: [['التكنولوجيا في الجزائر: كل قوائمنا', '/tech-algerie/'], ['أفضل برامج ERP في الجزائر', '/logiciels-erp-algerie/'], ['برامج المخزون ونقطة البيع', '/logiciels-gestion-de-stock-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="logiciels-gestion-production-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
