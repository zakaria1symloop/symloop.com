// /logiciels-gestion-scolaire-algerie/ — source page: verified list of school management software
// available in Algeria (FR / EN / AR). Data: src/data/sources/algeria-school-software.js.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { SCHOOL_SOFTWARE, TOP_SCHOOL, VERIFIED_ON } from '../data/sources/algeria-school-software';

// ten per list: the publisher and nine products (rule in SELECTION below)
const ITEMS = SCHOOL_SOFTWARE.filter((x) => x.self || TOP_SCHOOL.includes(x.name));
const TOTAL = SCHOOL_SOFTWARE.filter((x) => !x.self).length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const NURSERY = SCHOOL_SOFTWARE.filter((x) => x.focus === 'nursery' && !x.foreign).map((x) => x.name);
const PARENTS = ITEMS.filter((x) => (x.services || []).includes('parents')).map((x) => x.name);
const MOBILE = ITEMS.filter((x) => (x.platforms || []).some((p) => p === 'android' || p === 'ios')).map((x) => x.name);

const KIND_LABELS = {
  fr: { school: 'Écoles privées (primaire, moyen, secondaire)', nursery: 'Crèches et jardins d’enfants', training: 'Centres de formation', multi: 'Plusieurs types d’établissements' },
  en: { school: 'Private schools (primary, middle, secondary)', nursery: 'Nurseries and kindergartens', training: 'Training centres', multi: 'Several kinds of institution' },
  ar: { school: 'المدارس الخاصة (ابتدائي، متوسط، ثانوي)', nursery: 'دور الحضانة ورياض الأطفال', training: 'مراكز التكوين', multi: 'عدة أنواع من المؤسسات' },
};
const MODULE_LABELS = {
  fr: { custom: 'modules définis avec l’établissement', enrolment: 'inscriptions', fees: 'frais et paiements', attendance: 'présences', grades: 'notes et bulletins', timetable: 'emplois du temps', parents: 'espace ou application parents', staff: 'personnel et enseignants', transport: 'transport', canteen: 'cantine', library: 'bibliothèque', messaging: 'SMS et notifications', accounting: 'comptabilité' },
  en: { custom: 'modules defined with the institution', enrolment: 'enrolment', fees: 'fees and payments', attendance: 'attendance', grades: 'grades and report cards', timetable: 'timetables', parents: 'parent portal or app', staff: 'staff and teachers', transport: 'transport', canteen: 'canteen', library: 'library', messaging: 'SMS and notifications', accounting: 'accounting' },
  ar: { custom: 'وحدات تُحدَّد مع المؤسسة', enrolment: 'التسجيلات', fees: 'الرسوم والمدفوعات', attendance: 'الحضور', grades: 'العلامات وكشوف النقاط', timetable: 'جداول التوقيت', parents: 'فضاء أو تطبيق للأولياء', staff: 'العمال والأساتذة', transport: 'النقل', canteen: 'المطعم', library: 'المكتبة', messaging: 'رسائل قصيرة وإشعارات', accounting: 'المحاسبة' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} logiciels. Cette page en retient dix solutions : Symloop, qui publie la liste et construit du sur-mesure, et neuf logiciels d’éditeurs algériens, un par éditeur, qui couvrent l’école, la crèche et le centre de formation.`,
  en: `We verified ${TOTAL} products. This page keeps ten solutions: Symloop, which publishes the list and builds custom software, and nine products from Algerian publishers, one per publisher, covering schools, nurseries and training centres.`,
  ar: `تحققنا من ${TOTAL} برنامجاً. تحتفظ هذه الصفحة بعشرة حلول: Symloop، التي تنشر القائمة وتبني على المقاس، وتسعة برامج لناشرين جزائريين، واحد لكل ناشر، تغطي المدرسة ودار الحضانة ومركز التكوين.`,
};

const CONTENT = {
  fr: {
    title: `Meilleurs logiciels de gestion scolaire en Algérie 2027 : liste vérifiée de ${N} solutions pour écoles privées, crèches et centres de formation`,
    seoTitle: `Meilleurs logiciels de gestion scolaire en Algérie 2027 (${N} solutions vérifiées)`,
    seoDescription: `Logiciels de gestion d’école en Algérie en 2027 : ${N} solutions vérifiées pour écoles privées, crèches et centres de formation, avec l’éditeur, la ville, les modules (inscriptions, paiements, présences, notes, espace parents) et les plateformes. Vérifié le 25 novembre 2026.`,
    keywords: 'meilleur logiciel gestion scolaire algérie 2027, logiciel gestion école algérie, logiciel gestion scolaire algérie, logiciel école privée algérie, logiciel crèche algérie, logiciel centre de formation algérie, application gestion scolaire algérie',
    colCompany: 'Logiciel', colDoes: 'Modules et plateformes', colFact: 'Ce que son site en dit',
    lead: `Cette page présente ${N} solutions de gestion scolaire disponibles en Algérie pour les écoles privées, les crèches et les centres de formation : neuf logiciels d’éditeurs algériens, et Symloop, qui construit des logiciels scolaires sur mesure. Pour chacune : l’éditeur, la ville, les modules et les plateformes, relevés sur son propre site ; Symloop, qui publie la liste, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Avec un espace ou une application pour les parents', 'parents'], ['Avec les notes et les bulletins', 'grades'], ['Avec les frais et les paiements', 'fees'], ['Avec les emplois du temps', 'timetable'], ['Avec les SMS ou les notifications', 'messaging']],
    method: [
      'Nous avons cherché avec des mots simples : « logiciel gestion école Algérie », « logiciel école privée Algérie », « logiciel crèche Algérie », « logiciel centre de formation Algérie ».',
      'Un logiciel entre dans la liste s’il est édité par une société algérienne ou vendu explicitement pour l’Algérie, et si la page qui le décrit s’ouvre. Les modules et les plateformes sont ceux que le site indique ; nous ne reprenons aucun prix. Le lien de chaque nom mène à la page du logiciel.',
    ],
    limits: [
      'La liste n’est pas complète. Plusieurs logiciels souvent cités n’y figurent pas parce que leur site ne s’ouvre plus ou n’indique aucun lien avec l’Algérie.',
      'Les modules sont ceux que chaque éditeur annonce. Nous n’avons installé ni testé aucun de ces logiciels : demandez une démonstration avant de choisir.',
    ],
    fix: 'Une information est fausse, ou votre logiciel manque ? Écrivez-nous avec le lien de la page qui le décrit, nous corrigeons :',
    faq: [
      ['Quel est le meilleur logiciel de gestion scolaire en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} solutions avec ce que chaque éditeur annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur. Le bon choix dépend de votre établissement : école, crèche ou centre de formation, besoin d’une application pour les parents, travail en ligne ou sur un seul ordinateur.`],
      ['Quel logiciel pour une crèche en Algérie ?', `Parmi les logiciels que nous avons vérifiés, ${join(NURSERY, 'et')} sont conçus pour les crèches et les jardins d’enfants.`],
      ['Quels logiciels scolaires proposent une application ou un espace pour les parents ?', `${join(PARENTS, 'et')} annoncent un espace ou une application pour les parents. ${join(MOBILE, 'et')} indiquent une application mobile.`],
      ['Faut-il un logiciel prêt à l’emploi ou un logiciel sur mesure ?', 'Un logiciel prêt à l’emploi convient quand l’établissement fonctionne comme le logiciel le prévoit : il s’installe vite. Le sur-mesure se justifie quand l’établissement a plusieurs sites, des règles de paiement particulières ou des outils à relier, et qu’aucun produit ne s’y adapte.'],
      ['Comment ajouter mon logiciel à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit votre logiciel. L’inscription est gratuite.'],
    ],
    related: [['Logiciel de gestion scolaire : ce qu’il doit faire', '/blog/logiciel-ecole-gestion-scolaire-algerie-2026/'], ['Meilleures entreprises informatiques en Algérie', '/entreprises-informatiques-algerie/'], ['Startups algériennes', '/startups-algeriennes/'], ['Nous contacter', '/contact/']],
  },
  en: {
    title: `Best school management software in Algeria 2027: a verified list of ${N} solutions for private schools, nurseries and training centres`,
    seoTitle: `Best school management software in Algeria 2027 (${N} verified solutions)`,
    seoDescription: `School management software in Algeria in 2027: ${N} verified solutions for private schools, nurseries and training centres, with the publisher, city, modules (enrolment, payments, attendance, grades, parent portal) and platforms. Verified on 25 November 2026.`,
    keywords: 'best school management software algeria 2027, school management software algeria, private school software algeria, nursery software algeria, training centre software algeria',
    colCompany: 'Software', colDoes: 'Modules and platforms', colFact: 'What its site says',
    lead: `This page presents ${N} school management solutions available in Algeria for private schools, nurseries and training centres: nine products from Algerian publishers, and Symloop, which builds custom school software. For each one: the publisher, the city, the modules and the platforms, read on its own website; Symloop, which publishes the list, comes first and the others follow in alphabetical order.`,
    byService: [['With a parent portal or app', 'parents'], ['With grades and report cards', 'grades'], ['With fees and payments', 'fees'], ['With timetables', 'timetable'], ['With SMS or notifications', 'messaging']],
    method: [
      'We searched with simple words such as “school management software Algeria”, “private school software Algeria” and “nursery software Algeria”.',
      'A product enters the list if it is published by an Algerian company or explicitly sold for Algeria, and if the page describing it loads. The modules and platforms are those the site states; we report no prices. Each name links to the product’s page.',
    ],
    limits: [
      'The list is not complete. Several often-cited products are missing because their site no longer loads or states no link with Algeria.',
      'The modules are those each publisher announces. We have not installed or tested any of these products: ask for a demo before choosing.',
    ],
    fix: 'Something is wrong, or your product is missing? Write to us with the link to the page describing it, and we correct it:',
    faq: [
      ['What is the best school management software in Algeria in 2027?', `There is no independent ranking. This page presents ${N} solutions with what each publisher announces; Symloop, which publishes it, places itself first as the publisher’s choice. The right choice depends on your institution: school, nursery or training centre, whether you need an app for parents, online use or a single computer.`],
      ['Which software for a nursery in Algeria?', `Among the products we verified, ${join(NURSERY, 'and')} are designed for nurseries and kindergartens.`],
      ['Which school software offers an app or a portal for parents?', `${join(PARENTS, 'and')} announce a portal or an app for parents. ${join(MOBILE, 'and')} state a mobile app.`],
      ['Ready-made software or custom software?', 'Ready-made software suits an institution that works the way the product expects: it is quick to set up. Custom software is justified when the institution has several sites, special payment rules or tools to connect, and no product fits.'],
      ['How do I add my software to this list?', 'Write to contact@symloop.com with the link to the page describing your software. Listing is free.'],
    ],
    related: [['School management software: what it must do', '/blog/logiciel-ecole-gestion-scolaire-algerie-2026/'], ['Best IT companies in Algeria', '/entreprises-informatiques-algerie/'], ['Algerian startups', '/startups-algeriennes/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `أفضل برامج تسيير المدارس في الجزائر 2027: قائمة موثقة من ${N} حلول للمدارس الخاصة ودور الحضانة ومراكز التكوين`,
    seoTitle: `أفضل برامج تسيير المدارس في الجزائر 2027 (${N} حلول موثقة)`,
    seoDescription: `برامج تسيير المدارس في الجزائر سنة 2027: ${N} حلول موثقة للمدارس الخاصة ودور الحضانة ومراكز التكوين، مع الناشر، المدينة، الوحدات (التسجيلات، المدفوعات، الحضور، العلامات، فضاء الأولياء) والمنصات. تم التحقق في 25 نوفمبر 2026.`,
    keywords: 'أفضل برنامج تسيير مدرسة الجزائر 2027, برنامج تسيير مدرسة خاصة الجزائر, برنامج تسيير المدارس الجزائر, برنامج تسيير روضة الجزائر, برنامج تسيير مركز تكوين الجزائر',
    colCompany: 'البرنامج', colDoes: 'الوحدات والمنصات', colFact: 'ما يذكره موقعه',
    lead: `تعرض هذه الصفحة ${N} حلول لتسيير المدارس متوفرة في الجزائر للمدارس الخاصة ودور الحضانة ومراكز التكوين: تسعة برامج لناشرين جزائريين، و Symloop التي تبني برمجيات مدرسية على المقاس. لكل واحد: الناشر، المدينة، الوحدات والمنصات، مأخوذة من موقعه؛ Symloop، ناشرة القائمة، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['بفضاء أو تطبيق للأولياء', 'parents'], ['بالعلامات وكشوف النقاط', 'grades'], ['بالرسوم والمدفوعات', 'fees'], ['بجداول التوقيت', 'timetable'], ['برسائل قصيرة أو إشعارات', 'messaging']],
    method: [
      'بحثنا بكلمات بسيطة مثل «برنامج تسيير مدرسة خاصة الجزائر» و«برنامج تسيير روضة الجزائر» و«برنامج تسيير مركز تكوين الجزائر».',
      'يدخل البرنامج القائمة إذا كان ناشره شركة جزائرية أو كان يُباع صراحة للجزائر، وكانت الصفحة التي تصفه تفتح. الوحدات والمنصات هي ما يذكره الموقع؛ ولا ننقل أي سعر. ورابط كل اسم يؤدي إلى صفحة البرنامج.',
    ],
    limits: [
      'القائمة غير كاملة. برامج كثيرة التداول غير مدرجة لأن موقعها لم يعد يفتح أو لا يذكر أي صلة بالجزائر.',
      'الوحدات هي ما يعلنه كل ناشر. لم نثبّت ولم نختبر أياً من هذه البرامج: اطلبوا عرضاً تجريبياً قبل الاختيار.',
    ],
    fix: 'معلومة خاطئة أو برنامجكم غير مدرج؟ راسلونا مع رابط الصفحة التي تصفه، ونصحّح:',
    faq: [
      ['ما هو أفضل برنامج لتسيير المدارس في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} حلول مع ما يعلنه كل ناشر؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر. والاختيار الصحيح يتوقف على مؤسستكم: مدرسة أو دار حضانة أو مركز تكوين، الحاجة إلى تطبيق للأولياء، العمل عبر الإنترنت أو على حاسوب واحد.`],
      ['أي برنامج لدار حضانة في الجزائر؟', `من بين البرامج التي تحققنا منها، ${join(NURSERY, 'و')} مصممة لدور الحضانة ورياض الأطفال.`],
      ['ما هي البرامج المدرسية التي تقترح تطبيقاً أو فضاءً للأولياء؟', `${join(PARENTS, 'و')} تعلن فضاءً أو تطبيقاً للأولياء. و${join(MOBILE, 'و')} تذكر تطبيقاً للجوال.`],
      ['برنامج جاهز أم برنامج على المقاس؟', 'البرنامج الجاهز يناسب المؤسسة التي تعمل كما يتوقعه البرنامج: يُثبَّت بسرعة. والبرنامج على المقاس مبرَّر حين تكون للمؤسسة عدة مواقع أو قواعد دفع خاصة أو أدوات يجب ربطها، ولا يناسبها أي منتج.'],
      ['كيف أضيف برنامجي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف برنامجكم. الإدراج مجاني.'],
    ],
    related: [['برنامج تسيير المدارس: ما يجب أن يقوم به', '/blog/logiciel-ecole-gestion-scolaire-algerie-2026/'], ['أفضل شركات المعلوماتية في الجزائر', '/entreprises-informatiques-algerie/'], ['الشركات الناشئة الجزائرية', '/startups-algeriennes/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="logiciels-gestion-scolaire-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={MODULE_LABELS} selectionNote={SELECTION} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
