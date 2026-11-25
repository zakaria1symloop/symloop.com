// /logiciels-cabinet-medical-algerie/ — source page: verified list of software for medical
// practices, dental practices, clinics and laboratories in Algeria (FR / EN / AR).
// Data: src/data/sources/algeria-medical-software.js. No prices, no medical advice, and no
// statement of any health-data or social-security rule.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { MEDICAL_SOFTWARE, TOP_MEDICAL, BOOKING_PLATFORMS, VERIFIED_ON } from '../data/sources/algeria-medical-software';

// ten per list: the publisher and nine products (rule in SELECTION below)
const ITEMS = MEDICAL_SOFTWARE.filter((x) => x.self || TOP_MEDICAL.includes(x.name));
const TOTAL = MEDICAL_SOFTWARE.filter((x) => !x.self).length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
// answered from the whole verified dataset
const all = (key) => MEDICAL_SOFTWARE.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const PRACTICE = has('for_practice');
const DENTAL_CHART = all('dental_chart');
const CLINIC = all('for_clinic');
const LAB = all('for_lab');
const BOOKING = has('online_booking');
const TRIAL = has('trial');
const PLATFORMS = BOOKING_PLATFORMS.map((x) => x.name);

const KIND_LABELS = {
  fr: { custom: 'Sur mesure', practice: 'Cabinets médicaux', dental: 'Cabinets dentaires', clinic: 'Cliniques', lab: 'Laboratoires' },
  en: { custom: 'Custom-built', practice: 'Medical practices', dental: 'Dental practices', clinic: 'Clinics', lab: 'Laboratories' },
  ar: { custom: 'على المقاس', practice: 'العيادات الطبية', dental: 'عيادات الأسنان', clinic: 'العيادات الاستشفائية', lab: 'المخابر' },
};
const FEATURE_LABELS = {
  fr: { custom: 'fonctions définies avec l’établissement', for_practice: 'cabinets médicaux', for_dental: 'cabinets dentaires', for_clinic: 'cliniques', for_lab: 'laboratoires d’analyses', for_imaging: 'centres d’imagerie', records: 'dossier patient', appointments: 'agenda et rendez-vous', prescriptions: 'ordonnances', billing: 'facturation et caisse', cnas: 'part CNAS mentionnée (selon son site)', dental_chart: 'schéma dentaire', imaging: 'images et radios', lab_results: 'résultats d’analyses', stock: 'stock', reminders: 'rappels aux patients', online_booking: 'rendez-vous en ligne', teleconsult: 'consultation vidéo', reports: 'statistiques', multi_site: 'plusieurs sites', mobile: 'application mobile', ai: 'fonction IA', offline: 'fonctionne sans internet', trial: 'démo, essai ou version gratuite' },
  en: { custom: 'features defined with the organisation', for_practice: 'medical practices', for_dental: 'dental practices', for_clinic: 'clinics', for_lab: 'analysis laboratories', for_imaging: 'imaging centres', records: 'patient records', appointments: 'agenda and appointments', prescriptions: 'prescriptions', billing: 'billing and till', cnas: 'CNAS share mentioned (per its site)', dental_chart: 'dental chart', imaging: 'images and X-rays', lab_results: 'lab results', stock: 'stock', reminders: 'patient reminders', online_booking: 'online booking', teleconsult: 'video consultation', reports: 'statistics', multi_site: 'several sites', mobile: 'mobile app', ai: 'AI feature', offline: 'works without internet', trial: 'demo, free trial or free version' },
  ar: { custom: 'وظائف تُحدَّد مع المؤسسة', for_practice: 'العيادات الطبية', for_dental: 'عيادات الأسنان', for_clinic: 'العيادات الاستشفائية', for_lab: 'مخابر التحاليل', for_imaging: 'مراكز التصوير', records: 'ملف المريض', appointments: 'الأجندة والمواعيد', prescriptions: 'الوصفات', billing: 'الفوترة والصندوق', cnas: 'حصة CNAS مذكورة (حسب موقعه)', dental_chart: 'مخطط الأسنان', imaging: 'الصور والأشعة', lab_results: 'نتائج التحاليل', stock: 'المخزون', reminders: 'تذكير المرضى', online_booking: 'حجز المواعيد عبر الإنترنت', teleconsult: 'استشارة بالفيديو', reports: 'الإحصائيات', multi_site: 'عدة مواقع', mobile: 'تطبيق جوال', ai: 'وظيفة بالذكاء الاصطناعي', offline: 'يعمل دون إنترنت', trial: 'نسخة تجريبية أو مجانية' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} logiciels pour cabinets, cliniques et laboratoires. Cette page en retient dix : Symloop, qui publie la liste et construit du sur-mesure, les huit logiciels qui ont une page consacrée à la santé et dont l’éditeur indique sa ville en Algérie (un par éditeur) et, comme aucun logiciel dentaire n’indique sa ville, celui dont le site annonce un essai gratuit.`,
  en: `We verified ${TOTAL} products for practices, clinics and laboratories. This page keeps ten: Symloop, which publishes the list and builds custom software, the eight products with a page dedicated to healthcare whose publisher states its city in Algeria (one per publisher) and, since no dental product states a city, the one whose site announces a free trial.`,
  ar: `تحققنا من ${TOTAL} برنامجاً للعيادات والمخابر. تحتفظ هذه الصفحة بعشرة: Symloop، التي تنشر القائمة وتبني على المقاس، والبرامج الثمانية التي لها صفحة خاصة بالصحة ويذكر ناشرها مدينته في الجزائر (واحد لكل ناشر)، وبما أن لا برنامج أسنان يذكر مدينته، البرنامج الذي يعلن موقعه تجربة مجانية.`,
};

const CONTENT = {
  fr: {
    title: `Meilleurs logiciels de cabinet médical, dentaire et de clinique en Algérie 2027 : liste vérifiée de ${N} solutions`,
    seoTitle: `Meilleurs logiciels de cabinet médical et dentaire en Algérie 2027 (${N} vérifiés)`,
    seoDescription: `Logiciels de gestion de cabinet médical, de cabinet dentaire, de clinique et de laboratoire en Algérie en 2027 : ${N} solutions vérifiées avec l’éditeur, la ville, les fonctions (dossier patient, agenda, ordonnances, facturation, schéma dentaire, résultats d’analyses) et le mode d’accès. Vérifié le 26 novembre 2026.`,
    keywords: 'meilleur logiciel cabinet médical algérie 2027, logiciel gestion cabinet médical algérie, logiciel gestion cabinet dentaire algérie, logiciel dentaire algérie, logiciel de gestion clinique algérie, logiciel pour laboratoire d’analyse médicale algérie',
    colCompany: 'Logiciel', colDoes: 'Pour qui, fonctions et mode d’accès', colFact: 'Ce que son site en dit',
    lead: `Cette page présente ${N} solutions pour gérer un cabinet médical, un cabinet dentaire, une clinique ou un laboratoire d’analyses en Algérie : neuf logiciels vendus pour l’Algérie et Symloop, qui construit des logiciels et des applications sur mesure. Pour chacune : l’éditeur, la ville quand il l’indique, le public visé, les fonctions et le mode d’accès, relevés sur son propre site ; Symloop, qui publie la liste, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Pour cabinets médicaux', 'for_practice'], ['Pour cabinets dentaires', 'for_dental'], ['Pour cliniques', 'for_clinic'], ['Pour laboratoires d’analyses', 'for_lab'], ['Pour centres d’imagerie', 'for_imaging'], ['Avec la prise de rendez-vous en ligne', 'online_booking'], ['Avec les ordonnances', 'prescriptions'], ['Indiquent une démo, un essai ou une version gratuite', 'trial']],
    method: [
      'Nous avons cherché avec des mots simples : « logiciel gestion cabinet médical Algérie », « logiciel cabinet dentaire Algérie », « logiciel de gestion clinique Algérie », « logiciel laboratoire d’analyses Algérie ».',
      'Un logiciel entre dans la liste s’il a une page consacrée à la santé, si cette page s’ouvre et s’il est édité ou vendu pour l’Algérie. Le public visé, les fonctions et le mode d’accès sont ceux que le site indique. Nous ne reprenons aucun prix et aucun nom de praticien. Le lien de chaque nom mène à la page du logiciel.',
    ],
    limits: [
      'La liste n’est pas complète, et les fonctions sont celles que chaque éditeur annonce : nous n’avons installé ni testé aucun de ces logiciels. Demandez une démonstration avant de choisir.',
      'Cette page n’est pas un avis médical et ne dit pas si un logiciel est conforme à une règle sur les données de santé ou la sécurité sociale : posez la question à l’éditeur et aux organismes concernés, notamment sur l’endroit où les données des patients sont conservées.',
    ],
    fix: 'Une information est fausse, ou votre logiciel manque ? Écrivez-nous avec le lien de la page qui le décrit, nous corrigeons :',
    faq: [
      ['Quel est le meilleur logiciel de gestion de cabinet médical en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} solutions avec ce que chaque éditeur annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur. Parmi elles, ${join(PRACTICE, 'et')} s’adressent aux cabinets médicaux. Le bon choix dépend de la spécialité, du nombre de praticiens et du mode d’accès voulu.`],
      ['Quel logiciel pour un cabinet dentaire en Algérie ?', `Parmi les logiciels que nous avons vérifiés, ${join(DENTAL_CHART, 'et')} annoncent un schéma dentaire. Almawarid Health a aussi une page pour les cabinets dentaires, sans schéma dentaire annoncé.`],
      ['Quel logiciel pour une clinique en Algérie ?', `Parmi les logiciels que nous avons vérifiés, ${join(CLINIC, 'et')} s’adressent aux cliniques.`],
      ['Quel logiciel pour un laboratoire d’analyses médicales en Algérie ?', `Parmi les logiciels que nous avons vérifiés, ${join(LAB, 'et')} annoncent une offre pour les laboratoires d’analyses.`],
      ['Quels logiciels de cabinet permettent la prise de rendez-vous en ligne ?', `${join(BOOKING, 'et')} annoncent la prise de rendez-vous en ligne par les patients.`],
      ['Où prendre rendez-vous chez un médecin en ligne en Algérie ?', `Ce sont des plateformes pour les patients, distinctes des logiciels de cabinet : ${join(PLATFORMS, 'et')} proposent sur leur site la recherche de praticiens et la prise de rendez-vous en ligne.`],
      ['Peut-on essayer un logiciel médical avant de l’acheter ?', `${join(TRIAL, 'et')} indiquent sur leur site une démo à télécharger, un essai ou une version gratuite. Les autres éditeurs proposent une démonstration sur demande ou ne le précisent pas.`],
      ['Logiciel prêt à l’emploi ou logiciel sur mesure ?', 'Un logiciel de cabinet prêt à l’emploi couvre le travail courant d’un praticien. Le sur-mesure se justifie pour un besoin qu’aucun produit ne couvre, par exemple relier plusieurs sites, un portail pour les patients ou des outils déjà en place.'],
      ['Comment ajouter mon logiciel à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit votre logiciel. L’inscription est gratuite.'],
    ],
    related: [['Meilleurs logiciels de pharmacie en Algérie', '/logiciels-pharmacie-algerie/'], ['Meilleurs logiciels ERP en Algérie', '/logiciels-erp-algerie/'], ['Meilleures entreprises informatiques en Algérie', '/entreprises-informatiques-algerie/'], ['Nous contacter', '/contact/']],
  },
  en: {
    title: `Best medical practice, dental and clinic software in Algeria 2027: a verified list of ${N} solutions`,
    seoTitle: `Best medical and dental practice software in Algeria 2027 (${N} verified)`,
    seoDescription: `Software for medical practices, dental practices, clinics and laboratories in Algeria in 2027: ${N} verified solutions with the publisher, city, features (patient records, agenda, prescriptions, billing, dental chart, lab results) and how it is accessed. Verified on 26 November 2026.`,
    keywords: 'best medical practice software algeria 2027, medical practice software algeria, dental practice software algeria, dental software algeria, clinic management software algeria, laboratory software algeria',
    colCompany: 'Software', colDoes: 'For whom, features and access', colFact: 'What its site says',
    lead: `This page presents ${N} solutions for running a medical practice, a dental practice, a clinic or an analysis laboratory in Algeria: nine products sold for Algeria and Symloop, which builds custom software and apps. For each one: the publisher, the city when it is stated, the intended users, the features and how it is accessed, read on its own website; Symloop, which publishes the list, comes first and the others follow in alphabetical order.`,
    byService: [['For medical practices', 'for_practice'], ['For dental practices', 'for_dental'], ['For clinics', 'for_clinic'], ['For analysis laboratories', 'for_lab'], ['For imaging centres', 'for_imaging'], ['With online booking', 'online_booking'], ['With prescriptions', 'prescriptions'], ['State a demo, free trial or free version', 'trial']],
    method: [
      'We searched with simple words such as “medical practice software Algeria”, “dental practice software Algeria”, “clinic management software Algeria” and “laboratory software Algeria”.',
      'A product enters the list if it has a page dedicated to healthcare, that page loads, and it is published or sold for Algeria. The intended users, the features and the access mode are those the site states. We report no prices and no practitioner names. Each name links to the product’s page.',
    ],
    limits: [
      'The list is not complete, and the features are those each publisher announces: we have not installed or tested any of these products. Ask for a demo before choosing.',
      'This page is not medical advice and does not say whether a product complies with any health-data or social-security rule: ask the publisher and the bodies concerned, in particular about where patient data is kept.',
    ],
    fix: 'Something is wrong, or your product is missing? Write to us with the link to the page describing it, and we correct it:',
    faq: [
      ['What is the best medical practice software in Algeria in 2027?', `There is no independent ranking. This page presents ${N} solutions with what each publisher announces; Symloop, which publishes it, places itself first as the publisher’s choice. Among them, ${join(PRACTICE, 'and')} address medical practices. The right choice depends on the specialty, the number of practitioners and the access mode you want.`],
      ['Which software for a dental practice in Algeria?', `Among the products we verified, ${join(DENTAL_CHART, 'and')} announce a dental chart. Almawarid Health also has a page for dental practices, with no dental chart announced.`],
      ['Which software for a clinic in Algeria?', `Among the products we verified, ${join(CLINIC, 'and')} address clinics.`],
      ['Which software for a medical analysis laboratory in Algeria?', `Among the products we verified, ${join(LAB, 'and')} announce an offer for analysis laboratories.`],
      ['Which practice software lets patients book online?', `${join(BOOKING, 'and')} announce online booking by patients.`],
      ['Where can I book a doctor’s appointment online in Algeria?', `These are platforms for patients, distinct from practice software: ${join(PLATFORMS, 'and')} offer practitioner search and online booking on their sites.`],
      ['Can I try medical software before buying it?', `${join(TRIAL, 'and')} state a downloadable demo, a free trial or a free version on their sites. The other publishers offer a demonstration on request or do not say.`],
      ['Ready-made software or custom software?', 'Ready-made practice software covers a practitioner’s everyday work. Custom software is justified for a need no product covers, for example connecting several sites, a patient portal or tools already in place.'],
      ['How do I add my software to this list?', 'Write to contact@symloop.com with the link to the page describing your software. Listing is free.'],
    ],
    related: [['Best pharmacy software in Algeria', '/logiciels-pharmacie-algerie/'], ['Best ERP software in Algeria', '/logiciels-erp-algerie/'], ['Best IT companies in Algeria', '/entreprises-informatiques-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `أفضل برامج تسيير العيادات الطبية وعيادات الأسنان في الجزائر 2027: قائمة موثقة من ${N} حلول`,
    seoTitle: `أفضل برامج العيادات الطبية وعيادات الأسنان في الجزائر 2027 (${N} حلول موثقة)`,
    seoDescription: `برامج تسيير العيادات الطبية، عيادات الأسنان، العيادات الاستشفائية والمخابر في الجزائر سنة 2027: ${N} حلول موثقة مع الناشر، المدينة، الوظائف (ملف المريض، الأجندة، الوصفات، الفوترة، مخطط الأسنان، نتائج التحاليل) وطريقة الاستعمال. تم التحقق في 26 نوفمبر 2026.`,
    keywords: 'أفضل برنامج تسيير عيادة طبية الجزائر 2027, برنامج تسيير عيادة طبية الجزائر, برنامج عيادة أسنان الجزائر, برنامج تسيير عيادة الجزائر, برنامج مخبر تحاليل الجزائر',
    colCompany: 'البرنامج', colDoes: 'لمن، الوظائف وطريقة الاستعمال', colFact: 'ما يذكره موقعه',
    lead: `تعرض هذه الصفحة ${N} حلول لتسيير عيادة طبية، عيادة أسنان، عيادة استشفائية أو مخبر تحاليل في الجزائر: تسعة برامج مبيعة للجزائر و Symloop التي تبني برمجيات وتطبيقات على المقاس. لكل واحد: الناشر، المدينة حين يذكرها، الفئة المستهدفة، الوظائف وطريقة الاستعمال، مأخوذة من موقعه؛ Symloop، ناشرة القائمة، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['للعيادات الطبية', 'for_practice'], ['لعيادات الأسنان', 'for_dental'], ['للعيادات الاستشفائية', 'for_clinic'], ['لمخابر التحاليل', 'for_lab'], ['لمراكز التصوير', 'for_imaging'], ['بحجز المواعيد عبر الإنترنت', 'online_booking'], ['بالوصفات', 'prescriptions'], ['تذكر نسخة تجريبية أو مجانية', 'trial']],
    method: [
      'بحثنا بكلمات بسيطة مثل «برنامج تسيير عيادة طبية الجزائر» و«برنامج عيادة أسنان الجزائر» و«برنامج مخبر تحاليل الجزائر».',
      'يدخل البرنامج القائمة إذا كانت له صفحة خاصة بالصحة، وكانت هذه الصفحة تفتح، وكان منشوراً أو مبيعاً للجزائر. الفئة المستهدفة، الوظائف وطريقة الاستعمال هي ما يذكره الموقع. ولا ننقل أي سعر ولا أي اسم ممارس. ورابط كل اسم يؤدي إلى صفحة البرنامج.',
    ],
    limits: [
      'القائمة غير كاملة، والوظائف هي ما يعلنه كل ناشر: لم نثبّت ولم نختبر أياً من هذه البرامج. اطلبوا عرضاً تجريبياً قبل الاختيار.',
      'هذه الصفحة ليست رأياً طبياً ولا تذكر هل البرنامج مطابق لقاعدة تخص البيانات الصحية أو الضمان الاجتماعي: اسألوا الناشر والهيئات المعنية، خاصة عن مكان حفظ بيانات المرضى.',
    ],
    fix: 'معلومة خاطئة أو برنامجكم غير مدرج؟ راسلونا مع رابط الصفحة التي تصفه، ونصحّح:',
    faq: [
      ['ما هو أفضل برنامج لتسيير العيادة الطبية في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} حلول مع ما يعلنه كل ناشر؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر. ومن بينها، ${join(PRACTICE, 'و')} موجهة للعيادات الطبية. والاختيار الصحيح يتوقف على التخصص، عدد الممارسين وطريقة الاستعمال المطلوبة.`],
      ['أي برنامج لعيادة أسنان في الجزائر؟', `من بين البرامج التي تحققنا منها، ${join(DENTAL_CHART, 'و')} تعلن مخططاً للأسنان. ولـ Almawarid Health أيضاً صفحة لعيادات الأسنان، دون إعلان مخطط أسنان.`],
      ['أي برنامج لعيادة استشفائية في الجزائر؟', `من بين البرامج التي تحققنا منها، ${join(CLINIC, 'و')} موجهة للعيادات الاستشفائية.`],
      ['أي برنامج لمخبر تحاليل طبية في الجزائر؟', `من بين البرامج التي تحققنا منها، ${join(LAB, 'و')} تعلن عرضاً لمخابر التحاليل.`],
      ['ما هي برامج العيادات التي تسمح بحجز المواعيد عبر الإنترنت؟', `${join(BOOKING, 'و')} تعلن حجز المواعيد عبر الإنترنت من طرف المرضى.`],
      ['أين أحجز موعداً عند طبيب عبر الإنترنت في الجزائر؟', `هذه منصات للمرضى، مختلفة عن برامج العيادات: ${join(PLATFORMS, 'و')} تقترح في مواقعها البحث عن الممارسين وحجز المواعيد عبر الإنترنت.`],
      ['هل يمكن تجربة برنامج طبي قبل شرائه؟', `${join(TRIAL, 'و')} تذكر في مواقعها نسخة تجريبية للتحميل، تجربة مجانية أو نسخة مجانية. والناشرون الآخرون يقترحون عرضاً عند الطلب أو لا يحددون ذلك.`],
      ['برنامج جاهز أم برنامج على المقاس؟', 'برنامج العيادة الجاهز يغطي العمل اليومي للممارس. والبرنامج على المقاس مبرَّر لحاجة لا يغطيها أي منتج، مثل ربط عدة مواقع، بوابة للمرضى أو أدوات موجودة.'],
      ['كيف أضيف برنامجي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف برنامجكم. الإدراج مجاني.'],
    ],
    related: [['أفضل برامج تسيير الصيدليات في الجزائر', '/logiciels-pharmacie-algerie/'], ['أفضل برامج ERP في الجزائر', '/logiciels-erp-algerie/'], ['أفضل شركات المعلوماتية في الجزائر', '/entreprises-informatiques-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="logiciels-cabinet-medical-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={[]} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
