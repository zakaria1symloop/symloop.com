// /logiciels-rh-algerie/ — source page: verified list of HR software in Algeria (FR / EN / AR).
// Data: src/data/sources/algeria-hr-software.js. No prices; no labour, payroll or social-security
// rule is stated or explained.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { HR_SOFTWARE, TOP_HR, VERIFIED_ON } from '../data/sources/algeria-hr-software';

const ITEMS = HR_SOFTWARE.filter((x) => x.self || TOP_HR.includes(x.name));
const OTHERS = HR_SOFTWARE.filter((x) => !x.self);
const TOTAL = OTHERS.length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const on = (...p) => ITEMS.filter((x) => (x.platforms || []).some((k) => p.includes(k))).map((x) => x.name);
const TRIAL = has('trial');
const LEAVE = has('leave');
const DEVICES = has('attendance_devices');
const ATTEND = has('attendance');
const RECRUIT = has('recruitment');
const EVAL = has('evaluation');
const TRAINING = has('training');
const SELF = has('self_service');
const PLANNING = has('planning');
const PAYROLL = has('payroll_module');
const ONLINE = on('web', 'cloud');
const ANDROID = on('android');
const HIDDEN = OTHERS.filter((x) => !TOP_HR.includes(x.name)).map((x) => x.name);

const KIND_LABELS = {
  fr: { builder: 'Sur mesure', payroll_hr: 'Logiciels RH avec module de paie', hr: 'Module ou logiciel RH' },
  en: { builder: 'Custom-built', payroll_hr: 'HR software with a payroll module', hr: 'HR module or software' },
  ar: { builder: 'على المقاس', payroll_hr: 'برامج موارد بشرية مع وحدة أجور', hr: 'وحدة أو برنامج موارد بشرية' },
};
const FEATURE_LABELS = {
  fr: { custom: 'dossiers, congés, pointage, planning, recrutement', employee_records: 'dossiers du personnel', contracts: 'contrats', leave: 'congés et absences', attendance: 'pointage', attendance_devices: 'pointeuses biométriques', planning: 'planning', recruitment: 'recrutement', training: 'formation', evaluation: 'évaluation', payroll_module: 'module de paie', self_service: 'espace employé', mobile: 'application mobile', reports: 'rapports', multi_company: 'plusieurs sociétés', documents: 'documents RH', trial: 'gratuit, essai ou démo', cnas_mentioned: 'CNAS mentionnée' },
  en: { custom: 'files, leave, attendance, planning, recruitment', employee_records: 'employee files', contracts: 'contracts', leave: 'leave and absences', attendance: 'attendance', attendance_devices: 'biometric time clocks', planning: 'planning', recruitment: 'recruitment', training: 'training', evaluation: 'evaluation', payroll_module: 'payroll module', self_service: 'employee space', mobile: 'mobile app', reports: 'reports', multi_company: 'several companies', documents: 'HR documents', trial: 'free, trial or demo', cnas_mentioned: 'CNAS mentioned' },
  ar: { custom: 'الملفات، العطل، الحضور، التخطيط، التوظيف', employee_records: 'ملفات المستخدمين', contracts: 'العقود', leave: 'العطل والغيابات', attendance: 'الحضور', attendance_devices: 'أجهزة التوقيت البيومترية', planning: 'التخطيط', recruitment: 'التوظيف', training: 'التكوين', evaluation: 'التقييم', payroll_module: 'وحدة الأجور', self_service: 'فضاء المستخدم', mobile: 'تطبيق الهاتف', reports: 'التقارير', multi_company: 'عدة شركات', documents: 'وثائق الموارد البشرية', trial: 'مجاني، تجريبي أو عرض', cnas_mentioned: 'CNAS مذكورة' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} logiciels. Cette page en retient dix : Symloop, qui publie la liste, et neuf logiciels dont la page décrit plusieurs fonctions RH, indique un lien avec l’Algérie et montre une activité depuis 2025.`,
  en: `We verified ${TOTAL} products. This page keeps ten: Symloop, which publishes the list, and nine products whose page describes several HR features, states a link to Algeria and shows activity since 2025.`,
  ar: `تحققنا من ${TOTAL} برامج. تحتفظ هذه الصفحة بعشرة: Symloop، التي تنشر القائمة، وتسعة برامج تصف صفحتها عدة وظائف للموارد البشرية، تذكر صلة بالجزائر وتُظهر نشاطاً منذ 2025.`,
};

const CONTENT = {
  fr: {
    title: `Meilleurs logiciels RH en Algérie 2027 : liste vérifiée de ${N} solutions (congés, pointage, recrutement)`,
    seoTitle: `Logiciel RH en Algérie 2027 : ${N} solutions vérifiées (congés, pointage, paie)`,
    seoDescription: `Logiciels RH en Algérie en 2027 : ${N} solutions vérifiées avec les fonctions (dossiers du personnel, contrats, congés, pointage et pointeuses, planning, recrutement, formation, évaluation, espace employé), l’accès et l’essai annoncés. Vérifié le 26 novembre 2026.`,
    keywords: 'meilleur logiciel rh algérie 2027, logiciel rh algérie, logiciel rh algérie gratuit, logiciel grh algérie, logiciel gestion du personnel algérie, logiciel gestion des congés algérie, logiciel pointage algérie, برنامج تسيير الموارد البشرية الجزائر',
    colCompany: 'Logiciel', colDoes: 'Fonctions RH', colFact: 'Ce que son site en dit', countLabel: 'entrées vérifiées',
    lead: `Cette page présente ${N} solutions RH en Algérie : huit logiciels RH avec un module de paie, un module RH, et Symloop, qui construit des outils RH sur mesure. Pour chacun : les fonctions RH (dossiers, contrats, congés, pointage, planning, recrutement, formation, évaluation), l’accès et l’essai annoncés sur son propre site ; Symloop, qui publie la liste, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Congés et absences', 'leave'], ['Pointeuses biométriques', 'attendance_devices'], ['Planning', 'planning'], ['Recrutement', 'recruitment'], ['Formation', 'training'], ['Évaluation', 'evaluation'], ['Espace employé', 'self_service'], ['Gratuit, essai ou démo (selon le site)', 'trial']],
    method: [
      'Nous avons cherché avec des mots simples : « logiciel RH Algérie », « logiciel GRH Algérie », « logiciel gestion du personnel Algérie », « logiciel gestion des congés Algérie », « برنامج تسيير الموارد البشرية الجزائر ».',
      'Un logiciel entre dans la liste si sa page décrit plusieurs fonctions RH, s’ouvre, indique un lien avec l’Algérie et montre une activité depuis 2025. Quand un logiciel a un module de paie ou cite la CNAS, nous le signalons seulement : cette page n’explique aucune règle de paie, de travail ou de sécurité sociale. Nous ne reprenons aucun prix. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'Nous n’avons installé ni testé aucun de ces logiciels : ce qui est indiqué est ce que chaque éditeur annonce. Demandez une démonstration avec vos propres données, vos types de contrats et vos pointeuses avant de choisir.',
      'Les sites d’emploi et cabinets de recrutement sont sur notre page du recrutement informatique ; les intégrateurs Odoo sur notre page Odoo.',
    ],
    fix: 'Une information est fausse, ou votre logiciel manque ? Écrivez-nous avec le lien de la page qui le décrit, nous corrigeons :',
    faq: [
      ['Quel est le meilleur logiciel RH en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} entrées avec ce que chaque éditeur annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur et ne vend pas de logiciel RH prêt à l’emploi. Le bon choix dépend de l’effectif, du nombre de sites, des pointeuses en place et du besoin de paie.`],
      ['Existe-t-il un logiciel RH gratuit en Algérie ?', `${join(TRIAL, 'et')} indiquent sur leur site une version gratuite, un essai ou une démonstration. Les conditions changent d’un éditeur à l’autre.`],
      ['Quel logiciel pour gérer les congés et les absences ?', `${join(LEAVE, 'et')} annoncent la gestion des congés et des absences.`],
      ['Quel logiciel se connecte aux pointeuses biométriques ?', `${join(DEVICES, 'et')} annoncent la connexion à des pointeuses biométriques (ZKTeco ou autres) ; ${join(ATTEND, 'et')} annoncent le pointage.`],
      ['Quels logiciels gèrent le planning des équipes ?', `${join(PLANNING, 'et')} annoncent le planning.`],
      ['Quels logiciels gèrent le recrutement, la formation et l’évaluation ?', `${join(RECRUIT, 'et')} annoncent le recrutement ; ${join(TRAINING, 'et')} la formation ; ${join(EVAL, 'et')} l’évaluation.`],
      ['Quels logiciels ont un espace ou une application pour les employés ?', `${join(SELF, 'et')} annoncent un espace employé ; ${join(ANDROID, 'et')} indiquent une application Android.`],
      ['Quels logiciels RH fonctionnent en ligne ?', `${join(ONLINE, 'et')} indiquent un accès en ligne.`],
      ['Ces logiciels font-ils aussi la paie ?', `${join(PAYROLL, 'et')} indiquent un module de paie. Cette page n’explique pas la paie : demandez à l’éditeur et à votre comptable.`],
      ['Combien coûte un logiciel RH en Algérie ?', 'Cette page ne reprend aucun prix. Le coût dépend de l’effectif, des modules et de l’accès. Demandez un devis écrit qui précise la licence ou l’abonnement, l’installation des pointeuses et l’assistance.'],
      ['Logiciel RH prêt à l’emploi ou sur mesure ?', 'Un logiciel prêt à l’emploi convient quand les congés, le pointage et les contrats suivent des cas courants. Le sur-mesure se justifie avec des horaires en rotation, plusieurs sites, des primes propres à l’entreprise ou un lien à faire avec un autre logiciel. Symloop, qui publie cette page, construit ce type d’outil.'],
      ['D’autres logiciels ?', `Nous avons aussi vérifié ${join(HIDDEN, 'et')}, dont la page décrit peu de fonctions RH.`],
      ['Comment ajouter mon logiciel à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit votre logiciel. L’inscription est gratuite.'],
    ],
    related: [['La tech en Algérie : toutes nos listes', '/tech-algerie/'], ['Logiciel RH en Algérie : le guide', '/blog/logiciel-rh-algerie-2024/'], ['Pointeuse biométrique et logiciel de présence', '/blog/pointeuse-biometrique-logiciel-presence-algerie-2027-controle-d-acces-pointage-mobile-releve-d-heures-sans-ressaisie/'], ['Planning des équipes : qui travaille demain', '/blog/personne-ne-sait-qui-travaille-demain-planning-des-equipes-application-algerie-2027-besoins-par-creneau-contraintes-echanges-pointage/']],
  },
  en: {
    title: `Best HR software in Algeria 2027: a verified list of ${N} solutions (leave, attendance, recruitment)`,
    seoTitle: `HR software in Algeria 2027: ${N} verified solutions (leave, attendance, payroll)`,
    seoDescription: `HR software in Algeria in 2027: ${N} verified solutions with the features (employee files, contracts, leave, attendance and time clocks, planning, recruitment, training, evaluation, employee space), access and trial each states. Verified on 26 November 2026.`,
    keywords: 'best hr software algeria 2027, hr software algeria, free hr software algeria, leave management software algeria, attendance software algeria, hris algeria',
    colCompany: 'Software', colDoes: 'HR features', colFact: 'What its site says', countLabel: 'verified entries',
    lead: `This page presents ${N} HR solutions in Algeria: eight HR products with a payroll module, one HR module, and Symloop, which builds custom HR tools. For each one: the HR features (files, contracts, leave, attendance, planning, recruitment, training, evaluation), access and trial stated on its own site; Symloop, which publishes the list, comes first and the others follow in alphabetical order.`,
    byService: [['Leave and absences', 'leave'], ['Biometric time clocks', 'attendance_devices'], ['Planning', 'planning'], ['Recruitment', 'recruitment'], ['Training', 'training'], ['Evaluation', 'evaluation'], ['Employee space', 'self_service'], ['Free, trial or demo (per the site)', 'trial']],
    method: [
      'We searched with simple words such as “HR software Algeria”, “personnel management software Algeria” and “leave management software Algeria”.',
      'A product enters the list if its page describes several HR features, loads, states a link to Algeria and shows activity since 2025. When a product has a payroll module or names the CNAS, we only report it: this page explains no payroll, labour or social-security rule. We report no prices. Each name links to the page read.',
    ],
    limits: [
      'We installed and tested none of these products: what is shown is what each publisher announces. Ask for a demonstration with your own data, contract types and time clocks before choosing.',
      'Job sites and recruitment firms are on our IT recruitment page; Odoo integrators on our Odoo page.',
    ],
    fix: 'Something is wrong, or your product is missing? Write to us with the link to the page describing it, and we correct it:',
    faq: [
      ['What is the best HR software in Algeria in 2027?', `There is no independent ranking. This page presents ${N} entries with what each publisher announces; Symloop, which publishes it, places itself first as the publisher’s choice and sells no ready-made HR software. The right choice depends on headcount, number of sites, the time clocks in place and the payroll need.`],
      ['Is there free HR software in Algeria?', `${join(TRIAL, 'and')} state a free version, a trial or a demonstration on their sites. Conditions differ from one publisher to another.`],
      ['Which software manages leave and absences?', `${join(LEAVE, 'and')} announce leave and absence management.`],
      ['Which software connects to biometric time clocks?', `${join(DEVICES, 'and')} announce connection to biometric time clocks (ZKTeco or others); ${join(ATTEND, 'and')} announce attendance tracking.`],
      ['Which products manage team planning?', `${join(PLANNING, 'and')} announce planning.`],
      ['Which products handle recruitment, training and evaluation?', `${join(RECRUIT, 'and')} announce recruitment; ${join(TRAINING, 'and')} training; ${join(EVAL, 'and')} evaluation.`],
      ['Which products have an employee space or app?', `${join(SELF, 'and')} announce an employee space; ${join(ANDROID, 'and')} state an Android app.`],
      ['Which HR software works online?', `${join(ONLINE, 'and')} state online access.`],
      ['Do these products also do payroll?', `${join(PAYROLL, 'and')} state a payroll module. This page does not explain payroll: ask the publisher and your accountant.`],
      ['How much does HR software cost in Algeria?', 'This page reports no prices. The cost depends on headcount, modules and access. Ask for a written quote stating the licence or subscription, time-clock installation and support.'],
      ['Ready-made or custom HR software?', 'Ready-made software suits leave, attendance and contracts that follow common cases. Custom software is justified with rotating schedules, several sites, company-specific bonuses or a link to another system. Symloop, which publishes this page, builds this kind of tool.'],
      ['Other products?', `We also verified ${join(HIDDEN, 'and')}, whose page describes few HR features.`],
      ['How do I add my software to this list?', 'Write to contact@symloop.com with the link to the page describing your software. Listing is free.'],
    ],
    related: [['Tech in Algeria: all our lists', '/tech-algerie/'], ['IT recruitment in Algeria', '/recrutement-informatique-algerie/'], ['Accounting software in Algeria', '/logiciels-comptabilite-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `أفضل برامج الموارد البشرية في الجزائر 2027: قائمة موثقة من ${N} حلول (العطل، الحضور، التوظيف)`,
    seoTitle: `برنامج الموارد البشرية في الجزائر 2027: ${N} حلول موثقة (العطل، الحضور، الأجور)`,
    seoDescription: `برامج الموارد البشرية في الجزائر سنة 2027: ${N} حلول موثقة مع الوظائف (ملفات المستخدمين، العقود، العطل، الحضور وأجهزة التوقيت، التخطيط، التوظيف، التكوين، التقييم، فضاء المستخدم)، طريقة الاستعمال والتجربة المعلنة. تم التحقق في 26 نوفمبر 2026.`,
    keywords: 'أفضل برنامج موارد بشرية الجزائر 2027, برنامج تسيير الموارد البشرية الجزائر, برنامج تسيير العطل, برنامج الحضور والغياب الجزائر, برنامج موارد بشرية مجاني',
    colCompany: 'البرنامج', colDoes: 'وظائف الموارد البشرية', colFact: 'ما يذكره موقعه', countLabel: 'مدخلات موثقة',
    lead: `تعرض هذه الصفحة ${N} حلول للموارد البشرية في الجزائر: ثمانية برامج موارد بشرية مع وحدة أجور، وحدة موارد بشرية، و Symloop التي تبني أدوات موارد بشرية على المقاس. لكل واحد: وظائف الموارد البشرية (الملفات، العقود، العطل، الحضور، التخطيط، التوظيف، التكوين، التقييم)، طريقة الاستعمال والتجربة المعلنة في موقعه؛ Symloop، ناشرة القائمة، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['العطل والغيابات', 'leave'], ['أجهزة التوقيت البيومترية', 'attendance_devices'], ['التخطيط', 'planning'], ['التوظيف', 'recruitment'], ['التكوين', 'training'], ['التقييم', 'evaluation'], ['فضاء المستخدم', 'self_service'], ['مجاني، تجريبي أو عرض (حسب الموقع)', 'trial']],
    method: [
      'بحثنا بكلمات بسيطة مثل «برنامج تسيير الموارد البشرية الجزائر» و«logiciel RH Algérie» و«برنامج تسيير العطل».',
      'يدخل البرنامج القائمة إذا كانت صفحته تصف عدة وظائف للموارد البشرية، تفتح، تذكر صلة بالجزائر وتُظهر نشاطاً منذ 2025. وحين يملك البرنامج وحدة أجور أو يذكر CNAS نشير إلى ذلك فقط: ولا تشرح هذه الصفحة أي قاعدة للأجور أو العمل أو الضمان الاجتماعي. ولا ننقل أي سعر. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'لم نثبّت ولم نختبر أياً من هذه البرامج: المذكور هو ما يعلنه كل ناشر. اطلبوا عرضاً تطبيقياً ببياناتكم وأنواع عقودكم وأجهزة التوقيت لديكم قبل الاختيار.',
      'مواقع التوظيف ومكاتبه في صفحتنا عن التوظيف في المعلوماتية؛ ومُدمِجو Odoo في صفحتنا عن Odoo.',
    ],
    fix: 'معلومة خاطئة أو برنامجكم غير مدرج؟ راسلونا مع رابط الصفحة التي تصفه، ونصحّح:',
    faq: [
      ['ما هو أفضل برنامج موارد بشرية في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} مدخلات مع ما يعلنه كل ناشر؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر ولا تبيع برنامجاً جاهزاً. والاختيار الصحيح يتوقف على عدد المستخدمين، عدد المواقع، أجهزة التوقيت الموجودة والحاجة إلى الأجور.`],
      ['هل يوجد برنامج موارد بشرية مجاني في الجزائر؟', `${join(TRIAL, 'و')} تذكر في مواقعها نسخة مجانية، تجربة أو عرضاً. والشروط تختلف من ناشر إلى آخر.`],
      ['أي برنامج لتسيير العطل والغيابات؟', `${join(LEAVE, 'و')} تعلن تسيير العطل والغيابات.`],
      ['أي برنامج يرتبط بأجهزة التوقيت البيومترية؟', `${join(DEVICES, 'و')} تعلن الربط بأجهزة توقيت بيومترية (ZKTeco أو غيرها)؛ و${join(ATTEND, 'و')} تعلن تسجيل الحضور.`],
      ['ما هي البرامج التي تسيّر تخطيط الفرق؟', `${join(PLANNING, 'و')} تعلن التخطيط.`],
      ['ما هي البرامج التي تسيّر التوظيف والتكوين والتقييم؟', `${join(RECRUIT, 'و')} تعلن التوظيف؛ و${join(TRAINING, 'و')} التكوين؛ و${join(EVAL, 'و')} التقييم.`],
      ['ما هي البرامج التي لها فضاء أو تطبيق للمستخدمين؟', `${join(SELF, 'و')} تعلن فضاءً للمستخدم؛ و${join(ANDROID, 'و')} تذكر تطبيق أندرويد.`],
      ['ما هي برامج الموارد البشرية التي تعمل عبر الإنترنت؟', `${join(ONLINE, 'و')} تذكر استعمالاً عبر الإنترنت.`],
      ['هل تنجز هذه البرامج الأجور أيضاً؟', `${join(PAYROLL, 'و')} تذكر وحدة أجور. ولا تشرح هذه الصفحة الأجور: اسألوا الناشر ومحاسبكم.`],
      ['كم يكلف برنامج موارد بشرية في الجزائر؟', 'لا تنقل هذه الصفحة أي سعر. التكلفة تتوقف على عدد المستخدمين والوحدات وطريقة الاستعمال. اطلبوا عرضاً مكتوباً يحدد الرخصة أو الاشتراك، تركيب أجهزة التوقيت والمساعدة.'],
      ['برنامج جاهز أم على المقاس؟', 'البرنامج الجاهز يناسب العطل والحضور والعقود التي تتبع حالات شائعة. والبرنامج على المقاس مبرَّر مع أوقات عمل بالتناوب، عدة مواقع، منح خاصة بالمؤسسة أو ربط ببرنامج آخر. و Symloop، التي تنشر هذه الصفحة، تبني هذا النوع من الأدوات.'],
      ['برامج أخرى؟', `تحققنا أيضاً من ${join(HIDDEN, 'و')}، التي تصف صفحتها وظائف قليلة للموارد البشرية.`],
      ['كيف أضيف برنامجي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف برنامجكم. الإدراج مجاني.'],
    ],
    related: [['التكنولوجيا في الجزائر: كل قوائمنا', '/tech-algerie/'], ['التوظيف في المعلوماتية بالجزائر', '/recrutement-informatique-algerie/'], ['برامج المحاسبة في الجزائر', '/logiciels-comptabilite-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="logiciels-rh-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
