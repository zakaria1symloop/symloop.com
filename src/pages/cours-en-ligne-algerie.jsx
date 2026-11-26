// /cours-en-ligne-algerie/ — source page: verified list of online course platforms in Algeria
// (FR / EN / AR). Data: src/data/sources/algeria-online-courses.js.
// No prices, counts, success rates or teacher names; nothing on diploma recognition.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { ONLINE_COURSES, TOP_ONLINE_COURSES, VERIFIED_ON } from '../data/sources/algeria-online-courses';

const ITEMS = ONLINE_COURSES.filter((x) => x.self || TOP_ONLINE_COURSES.includes(x.name));
const OTHERS = ONLINE_COURSES.filter((x) => !x.self);
const TOTAL = OTHERS.length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const all = (key) => OTHERS.filter((x) => x.services.includes(key)).map((x) => x.name);
const kind = (k) => ITEMS.filter((x) => x.focus === k).map((x) => x.name);
const on = (p) => ITEMS.filter((x) => (x.platforms || []).includes(p)).map((x) => x.name);
const BAC = all('exam_prep');
const FREE = has('free_content');
const LIVE = has('live_classes');
const VIDEO = has('video_lessons');
const DZD = has('dinar_payment');
const QUIZ = has('quizzes');
const PUBLIC = kind('public');
const UNIV = kind('university');
const SCHOOL = kind('school_support');
const ANDROID = on('android');
const HIDDEN = OTHERS.filter((x) => !TOP_ONLINE_COURSES.includes(x.name)).map((x) => x.name);

const KIND_LABELS = {
  fr: { builder: 'Éditeur de la liste (construit des plateformes)', school_support: 'Soutien scolaire en ligne (jusqu’au BEM et au BAC)', public: 'Plateformes publiques d’enseignement à distance', university: 'Plateformes en ligne des universités', professional: 'Cours professionnels en ligne' },
  en: { builder: 'Publisher of the list (builds platforms)', school_support: 'Online school support (up to BEM and BAC)', public: 'Public distance-learning platforms', university: 'University online platforms', professional: 'Professional online courses' },
  ar: { builder: 'ناشر القائمة (يبني المنصات)', school_support: 'الدعم المدرسي عبر الإنترنت (حتى شهادة التعليم المتوسط والبكالوريا)', public: 'المنصات العمومية للتعليم عن بعد', university: 'منصات الجامعات عبر الإنترنت', professional: 'دروس مهنية عبر الإنترنت' },
};
const FEATURE_LABELS = {
  fr: { custom: 'plateformes de cours avec paiement, vidéos, quiz', video_lessons: 'vidéos', live_classes: 'cours en direct', quizzes: 'quiz', exercises: 'exercices', tutoring: 'séances privées', certificates: 'certificats ou diplômes', exam_prep: 'préparation BEM ou BAC', languages: 'langues', it_skills: 'informatique', app: 'application', free_content: 'partie gratuite', dinar_payment: 'paiement en dinars', arabic_content: 'en arabe', french_content: 'en français' },
  en: { custom: 'course platforms with payment, videos, quizzes', video_lessons: 'videos', live_classes: 'live classes', quizzes: 'quizzes', exercises: 'exercises', tutoring: 'private sessions', certificates: 'certificates or degrees', exam_prep: 'BEM or BAC preparation', languages: 'languages', it_skills: 'IT', app: 'app', free_content: 'free part', dinar_payment: 'payment in dinars', arabic_content: 'in Arabic', french_content: 'in French' },
  ar: { custom: 'منصات دروس بالدفع، الفيديو، الاختبارات', video_lessons: 'فيديوهات', live_classes: 'حصص مباشرة', quizzes: 'اختبارات', exercises: 'تمارين', tutoring: 'حصص خاصة', certificates: 'شهادات', exam_prep: 'التحضير للمتوسط أو البكالوريا', languages: 'اللغات', it_skills: 'المعلوماتية', app: 'تطبيق', free_content: 'جزء مجاني', dinar_payment: 'الدفع بالدينار', arabic_content: 'بالعربية', french_content: 'بالفرنسية' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} plateformes. Cette page en retient dix : Symloop, qui publie la liste, et neuf plateformes dont le propre site s’ouvrait, décrivait des cours en ligne et montrait une activité depuis 2025.`,
  en: `We verified ${TOTAL} platforms. This page keeps ten: Symloop, which publishes the list, and nine platforms whose own site loaded, described online courses and showed activity since 2025.`,
  ar: `تحققنا من ${TOTAL} منصة. تحتفظ هذه الصفحة بعشر: Symloop، التي تنشر القائمة، وتسع منصات كان موقعها يفتح، يصف دروساً عبر الإنترنت ويُظهر نشاطاً منذ 2025.`,
};

const CONTENT = {
  fr: {
    title: `Cours en ligne en Algérie 2027 : liste vérifiée de ${N} plateformes (BEM, BAC, université, formation)`,
    seoTitle: `Cours en ligne en Algérie 2027 : ${N} plateformes vérifiées (BAC, BEM, université)`,
    seoDescription: `Cours en ligne en Algérie en 2027 : ${N} plateformes vérifiées pour le soutien scolaire jusqu’au BEM et au BAC, les universités, l’enseignement à distance public et la formation, avec le format (vidéos, direct, quiz), la partie gratuite et le paiement en dinars annoncés. Vérifié le 26 novembre 2026.`,
    keywords: 'cours en ligne algérie 2027, cours en ligne algérie, plateforme e-learning algérie, cours en ligne bac algérie, soutien scolaire en ligne algérie, cours en ligne bem, enseignement à distance algérie, دروس اونلاين الجزائر',
    colCompany: 'Plateforme', colDoes: 'Format et contenu', colFact: 'Ce que son site en dit', countLabel: 'entrées vérifiées',
    lead: `Pour suivre des cours en ligne en Algérie, cette page présente ${N} entrées : ${SCHOOL.length} plateformes de soutien scolaire jusqu’au BEM et au BAC, ${PUBLIC.length} plateformes publiques d’enseignement à distance, ${UNIV.length} plateformes d’universités, une école du numérique, et Symloop, qui construit ces plateformes pour les écoles. Pour chacune : le format (vidéos, cours en direct, quiz), les niveaux, la partie gratuite et le paiement en dinars annoncés sur son propre site ; Symloop est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Préparation BEM ou BAC', 'exam_prep'], ['Vidéos', 'video_lessons'], ['Cours en direct', 'live_classes'], ['Quiz', 'quizzes'], ['Partie gratuite', 'free_content'], ['Paiement en dinars', 'dinar_payment']],
    method: [
      'Nous avons cherché avec des mots simples : « cours en ligne Algérie », « plateforme e-learning Algérie », « cours en ligne BAC Algérie », « soutien scolaire en ligne Algérie », « دروس اونلاين بكالوريا الجزائر ». Les annuaires et la presse ont servi de pistes.',
      'Une plateforme entre dans la liste si son propre site (ou sa fiche App Store) décrit des cours suivis en ligne et montre une activité depuis 2025. Nous ne reprenons ni prix, ni nombre d’élèves, d’enseignants ou de vidéos, ni taux de réussite, et aucun nom d’enseignant. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'Nous n’avons suivi aucun cours : ce qui est indiqué est ce que chaque plateforme annonce. Essayez la partie gratuite ou demandez un accès d’essai avant de payer.',
      'Cette page ne dit pas comment un diplôme ou une certification est reconnu. Plusieurs plateformes connues ne s’ouvraient pas pour nous ou ne proposaient que des documents à télécharger : elles ne figurent pas ici. Les écoles et centres de formation sur place sont dans notre liste des formations informatiques à Alger.',
    ],
    fix: 'Une information est fausse, ou votre plateforme manque ? Écrivez-nous avec le lien de la page qui décrit vos cours, nous corrigeons :',
    faq: [
      ['Quelle est la meilleure plateforme de cours en ligne en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} entrées avec ce que chaque plateforme annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur et ne vend pas de cours. Le bon choix dépend du niveau, de la matière et du format préféré (vidéos, direct ou exercices).`],
      ['Où trouver des cours en ligne pour le BAC ou le BEM ?', `${join(BAC, 'et')} annoncent la préparation au BEM ou au BAC.`],
      ['Existe-t-il des cours en ligne gratuits en Algérie ?', `${join(FREE, 'et')} indiquent une partie gratuite ; ${join(PUBLIC, 'et')} sont des plateformes publiques.`],
      ['Quelles plateformes proposent des cours en direct ?', `${join(LIVE, 'et')} annoncent des cours ou des séances en direct.`],
      ['Quelles plateformes proposent des leçons en vidéo ?', `${join(VIDEO, 'et')} annoncent des leçons en vidéo. Oustad indique ne pas proposer de vidéos.`],
      ['Quelles plateformes ont des quiz et des exercices corrigés ?', `${join(QUIZ, 'et')} annoncent des quiz.`],
      ['Peut-on payer en dinars, par BaridiMob ou CCP ?', `${join(DZD, 'et')} indiquent un paiement en dinars, par BaridiMob, par CCP ou par codes vendus en points de vente.`],
      ['Existe-t-il un enseignement à distance public ?', `${join(PUBLIC, 'et')} sont des organismes publics dont le site décrit l’enseignement à distance ; plusieurs universités ont leur propre plateforme, comme ${join(UNIV, 'et')}.`],
      ['Quelles plateformes ont une application mobile ?', `${join(ANDROID, 'et')} indiquent une application Android ; Zed Academy et Oustad indiquent aussi une application iPhone.`],
      ['Combien coûtent les cours en ligne en Algérie ?', 'Cette page ne reprend aucun prix. Le coût dépend du niveau, de la durée et du format. Lisez les formules sur le site de chaque plateforme.'],
      ['Comment créer sa propre plateforme de cours en ligne en Algérie ?', 'Il faut des comptes élèves, le paiement (CIB, Edahabia, BaridiMob ou codes), des vidéos protégées contre le partage, des quiz et le suivi de chaque élève. Symloop, qui publie cette page, construit ce type de plateforme pour les écoles et les centres.'],
      ['D’autres plateformes ?', `Nous avons aussi vérifié ${join(HIDDEN, 'et')}, dont les informations viennent surtout d’une fiche d’application ou d’une page sans date lisible.`],
      ['Comment ajouter ma plateforme à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit vos cours. L’inscription est gratuite.'],
    ],
    related: [['La tech en Algérie : toutes nos listes', '/tech-algerie/'], ['Créer une plateforme de formation en ligne', '/blog/comment-creer-une-plateforme-de-formation-en-ligne-algerie-2027-e-learning-paiement-acces-videos-protegees-quiz-certificat-suivi-des-eleves/'], ['Créer une plateforme de soutien scolaire (BAC, diaspora)', '/blog/creer-plateforme-cours-soutien-scolaire-algerie-2027-bac-cours-arabe-diaspora/'], ['Formations informatiques à Alger', '/formation-informatique-alger/']],
  },
  en: {
    title: `Online courses in Algeria 2027: a verified list of ${N} platforms (BEM, BAC, university, training)`,
    seoTitle: `Online courses in Algeria 2027: ${N} verified platforms (BAC, BEM, university)`,
    seoDescription: `Online courses in Algeria in 2027: ${N} verified platforms for school support up to BEM and BAC, universities, public distance learning and training, with the format (videos, live, quizzes), the free part and payment in dinars each states. Verified on 26 November 2026.`,
    keywords: 'online courses algeria 2027, e-learning platform algeria, bac online courses algeria, online tutoring algeria, distance learning algeria',
    colCompany: 'Platform', colDoes: 'Format and content', colFact: 'What its site says', countLabel: 'verified entries',
    lead: `To take online courses in Algeria, this page presents ${N} entries: ${SCHOOL.length} school-support platforms up to BEM and BAC, ${PUBLIC.length} public distance-learning platforms, ${UNIV.length} university platforms, a tech school, and Symloop, which builds these platforms for schools. For each one: the format (videos, live classes, quizzes), the levels, the free part and payment in dinars stated on its own site; Symloop comes first and the others follow in alphabetical order.`,
    byService: [['BEM or BAC preparation', 'exam_prep'], ['Videos', 'video_lessons'], ['Live classes', 'live_classes'], ['Quizzes', 'quizzes'], ['Free part', 'free_content'], ['Payment in dinars', 'dinar_payment']],
    method: [
      'We searched with simple words such as “online courses Algeria”, “e-learning platform Algeria”, “BAC online courses Algeria” and “online school support Algeria”. Directories and press were leads.',
      'A platform enters the list if its own site (or App Store listing) describes courses taken online and shows activity since 2025. We report no prices, numbers of students, teachers or videos, success rates, and no teacher names. Each name links to the page read.',
    ],
    limits: [
      'We took no course: what is shown is what each platform announces. Try the free part or ask for a trial access before paying.',
      'This page does not say how a degree or certificate is recognised. Several known platforms did not load for us or offered only documents to download: they are not here. Schools and centres with classes on site are on our list of IT training in Algiers.',
    ],
    fix: 'Something is wrong, or your platform is missing? Write to us with the link to the page describing your courses, and we correct it:',
    faq: [
      ['What is the best online course platform in Algeria in 2027?', `There is no independent ranking. This page presents ${N} entries with what each platform announces; Symloop, which publishes it, places itself first as the publisher’s choice and sells no courses. The right choice depends on the level, the subject and the preferred format (videos, live or exercises).`],
      ['Where can I find online courses for the BAC or BEM?', `${join(BAC, 'and')} announce BEM or BAC preparation.`],
      ['Are there free online courses in Algeria?', `${join(FREE, 'and')} state a free part; ${join(PUBLIC, 'and')} are public platforms.`],
      ['Which platforms offer live classes?', `${join(LIVE, 'and')} announce live classes or sessions.`],
      ['Which platforms offer video lessons?', `${join(VIDEO, 'and')} announce video lessons. Oustad states it has no videos.`],
      ['Which platforms have quizzes and corrected exercises?', `${join(QUIZ, 'and')} announce quizzes.`],
      ['Can I pay in dinars, by BaridiMob or CCP?', `${join(DZD, 'and')} state payment in dinars, by BaridiMob, by CCP or with codes sold at sales points.`],
      ['Is there public distance learning?', `${join(PUBLIC, 'and')} are public bodies whose site describes distance learning; several universities have their own platform, such as ${join(UNIV, 'and')}.`],
      ['Which platforms have a mobile app?', `${join(ANDROID, 'and')} state an Android app; Zed Academy and Oustad also state an iPhone app.`],
      ['How much do online courses cost in Algeria?', 'This page reports no prices. The cost depends on the level, the length and the format. Read the plans on each platform’s site.'],
      ['How do I build my own online course platform in Algeria?', 'It takes student accounts, payment (CIB, Edahabia, BaridiMob or codes), videos protected against sharing, quizzes and tracking of each student. Symloop, which publishes this page, builds this kind of platform for schools and centres.'],
      ['Other platforms?', `We also verified ${join(HIDDEN, 'and')}, whose details come mainly from an app listing or a page with no readable date.`],
      ['How do I add my platform to this list?', 'Write to contact@symloop.com with the link to the page describing your courses. Listing is free.'],
    ],
    related: [['Tech in Algeria: all our lists', '/tech-algerie/'], ['IT training in Algiers', '/formation-informatique-alger/'], ['School management software in Algeria', '/logiciels-gestion-scolaire-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `الدروس عبر الإنترنت في الجزائر 2027: قائمة موثقة من ${N} منصات (المتوسط، البكالوريا، الجامعة، التكوين)`,
    seoTitle: `الدروس عبر الإنترنت في الجزائر 2027: ${N} منصات موثقة (البكالوريا، المتوسط، الجامعة)`,
    seoDescription: `الدروس عبر الإنترنت في الجزائر سنة 2027: ${N} منصات موثقة للدعم المدرسي حتى شهادة التعليم المتوسط والبكالوريا، الجامعات، التعليم العمومي عن بعد والتكوين، مع الصيغة (فيديو، مباشر، اختبارات)، الجزء المجاني والدفع بالدينار المعلنة. تم التحقق في 26 نوفمبر 2026.`,
    keywords: 'دروس اونلاين الجزائر 2027, الدروس عبر الإنترنت الجزائر, منصة تعليم إلكتروني الجزائر, دروس البكالوريا اونلاين, الدعم المدرسي عبر الإنترنت الجزائر, التعليم عن بعد الجزائر',
    colCompany: 'المنصة', colDoes: 'الصيغة والمحتوى', colFact: 'ما يذكره موقعها', countLabel: 'مدخلات موثقة',
    lead: `لمتابعة دروس عبر الإنترنت في الجزائر، تعرض هذه الصفحة ${N} مدخلات: منصات للدعم المدرسي حتى شهادة التعليم المتوسط والبكالوريا، منصات عمومية للتعليم عن بعد، منصات للجامعات، مدرسة رقمية، و Symloop التي تبني هذه المنصات للمدارس. لكل واحدة: الصيغة (فيديو، حصص مباشرة، اختبارات)، المستويات، الجزء المجاني والدفع بالدينار المعلنة في موقعها؛ Symloop في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['التحضير للمتوسط أو البكالوريا', 'exam_prep'], ['فيديوهات', 'video_lessons'], ['حصص مباشرة', 'live_classes'], ['اختبارات', 'quizzes'], ['جزء مجاني', 'free_content'], ['الدفع بالدينار', 'dinar_payment']],
    method: [
      'بحثنا بكلمات بسيطة مثل «دروس اونلاين الجزائر» و«منصة تعليم إلكتروني الجزائر» و«دروس اونلاين بكالوريا الجزائر» و«الدعم المدرسي عبر الإنترنت». واستُعملت الأدلة والصحافة كمؤشرات.',
      'تدخل المنصة القائمة إذا كان موقعها (أو صفحتها في App Store) يصف دروساً تُتابَع عبر الإنترنت ويُظهر نشاطاً منذ 2025. ولا ننقل أي سعر ولا عدد تلاميذ أو أساتذة أو فيديوهات ولا نسب نجاح ولا اسم أي أستاذ. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'لم نتابع أي درس: المذكور هو ما تعلنه كل منصة. جرّبوا الجزء المجاني أو اطلبوا دخولاً تجريبياً قبل الدفع.',
      'لا تذكر هذه الصفحة كيف يُعترف بشهادة ما. وعدة منصات معروفة لم تفتح لنا أو لم تقترح سوى وثائق للتحميل: فهي غير مذكورة. والمدارس والمراكز الحضورية في قائمتنا لتكوينات الإعلام الآلي بالجزائر العاصمة.',
    ],
    fix: 'معلومة خاطئة أو منصتكم غير مدرجة؟ راسلونا مع رابط الصفحة التي تصف دروسكم، ونصحّح:',
    faq: [
      ['ما هي أفضل منصة دروس عبر الإنترنت في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} مدخلات مع ما تعلنه كل منصة؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر ولا تبيع دروساً. والاختيار الصحيح يتوقف على المستوى، المادة والصيغة المفضلة (فيديو، مباشر أو تمارين).`],
      ['أين أجد دروساً عبر الإنترنت للبكالوريا أو المتوسط؟', `${join(BAC, 'و')} تعلن التحضير لشهادة التعليم المتوسط أو البكالوريا.`],
      ['هل توجد دروس مجانية عبر الإنترنت في الجزائر؟', `${join(FREE, 'و')} تذكر جزءاً مجانياً؛ و${join(PUBLIC, 'و')} منصات عمومية.`],
      ['ما هي المنصات التي تقترح حصصاً مباشرة؟', `${join(LIVE, 'و')} تعلن دروساً أو حصصاً مباشرة.`],
      ['ما هي المنصات التي تقترح دروساً بالفيديو؟', `${join(VIDEO, 'و')} تعلن دروساً بالفيديو. ويذكر Oustad أنه لا يقترح فيديوهات.`],
      ['ما هي المنصات التي فيها اختبارات وتمارين مصححة؟', `${join(QUIZ, 'و')} تعلن اختبارات.`],
      ['هل يمكن الدفع بالدينار، ببريدي موب أو CCP؟', `${join(DZD, 'و')} تذكر الدفع بالدينار، ببريدي موب، بـ CCP أو برموز تُباع في نقاط البيع.`],
      ['هل يوجد تعليم عمومي عن بعد؟', `${join(PUBLIC, 'و')} هيئات عمومية يصف موقعها التعليم عن بعد؛ ولعدة جامعات منصتها الخاصة، مثل ${join(UNIV, 'و')}.`],
      ['ما هي المنصات التي لها تطبيق للهاتف؟', `${join(ANDROID, 'و')} تذكر تطبيق أندرويد؛ ويذكر Zed Academy و Oustad أيضاً تطبيق آيفون.`],
      ['كم تكلف الدروس عبر الإنترنت في الجزائر؟', 'لا تنقل هذه الصفحة أي سعر. التكلفة تتوقف على المستوى، المدة والصيغة. اقرؤوا العروض في موقع كل منصة.'],
      ['كيف أنشئ منصتي الخاصة للدروس عبر الإنترنت في الجزائر؟', 'يلزم حسابات للتلاميذ، الدفع (CIB، الذهبية، بريدي موب أو رموز)، فيديوهات محمية من المشاركة، اختبارات ومتابعة كل تلميذ. و Symloop، التي تنشر هذه الصفحة، تبني هذا النوع من المنصات للمدارس والمراكز.'],
      ['منصات أخرى؟', `تحققنا أيضاً من ${join(HIDDEN, 'و')}، التي تأتي معلوماتها أساساً من صفحة تطبيق أو صفحة دون تاريخ مقروء.`],
      ['كيف أضيف منصتي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف دروسكم. الإدراج مجاني.'],
    ],
    related: [['التكنولوجيا في الجزائر: كل قوائمنا', '/tech-algerie/'], ['تكوينات الإعلام الآلي في الجزائر العاصمة', '/formation-informatique-alger/'], ['برامج تسيير المدارس في الجزائر', '/logiciels-gestion-scolaire-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="cours-en-ligne-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
