// /formation-informatique-alger/ — source page: verified list of IT and digital training
// providers in Algiers (FR / EN / AR). Data: src/data/sources/algeria-it-training.js.
// No prices, no student counts, no explanation of diploma recognition.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { IT_TRAINING, TOP_TRAINING, VERIFIED_ON } from '../data/sources/algeria-it-training';

const ITEMS = IT_TRAINING.filter((x) => x.self || TOP_TRAINING.includes(x.name));
const OTHERS = IT_TRAINING.filter((x) => !x.self);
const TOTAL = OTHERS.length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const all = (key) => OTHERS.filter((x) => x.services.includes(key)).map((x) => x.name);
const SCHOOLS = ITEMS.filter((x) => x.focus === 'school').map((x) => x.name);
const CYBER = has('cybersecurity');
const WEB = has('web');
const DATA = has('data');
const VENDOR = all('vendor');
const COMPANIES = has('companies');
const APPROVAL = has('approval');
const OUTSIDE = OTHERS.filter((x) => x.outside).map((x) => `${x.name} (${x.city})`);

const KIND_LABELS = {
  fr: { builder: 'Éditeur de la liste', school: 'Écoles (cursus diplômants)', centre: 'Centres de formation (formations courtes)', academy: 'Académie d’entreprise' },
  en: { builder: 'Publisher of the list', school: 'Schools (diploma programmes)', centre: 'Training centres (short courses)', academy: 'Company academy' },
  ar: { builder: 'ناشر القائمة', school: 'مدارس (مسارات شهادية)', centre: 'مراكز تكوين (تكوينات قصيرة)', academy: 'أكاديمية مؤسسة' },
};
const FEATURE_LABELS = {
  fr: { web: 'développement web', mobile: 'mobile', data: 'données', ai: 'IA', cybersecurity: 'cybersécurité', networks: 'réseaux', cloud: 'cloud', design: 'design', office: 'bureautique', marketing: 'marketing digital', online: 'à distance', evenings: 'soir et week-end', companies: 'pour les entreprises', approval: 'agrément annoncé (selon son site)', vendor: 'certifications d’éditeurs' },
  en: { web: 'web development', mobile: 'mobile', data: 'data', ai: 'AI', cybersecurity: 'cybersecurity', networks: 'networks', cloud: 'cloud', design: 'design', office: 'office software', marketing: 'digital marketing', online: 'remote', evenings: 'evenings and weekends', companies: 'for companies', approval: 'approval stated (per its site)', vendor: 'vendor certifications' },
  ar: { web: 'تطوير الويب', mobile: 'الجوال', data: 'البيانات', ai: 'الذكاء الاصطناعي', cybersecurity: 'الأمن السيبراني', networks: 'الشبكات', cloud: 'السحابة', design: 'التصميم', office: 'المكتبية', marketing: 'التسويق الرقمي', online: 'عن بعد', evenings: 'مساءً ونهاية الأسبوع', companies: 'للمؤسسات', approval: 'اعتماد معلن (حسب موقعه)', vendor: 'شهادات الناشرين' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} organismes. Cette page en retient dix : Symloop, qui publie la liste, et neuf écoles et centres de la wilaya d’Alger dont le site s’ouvrait, montrait une activité depuis 2025 et décrivait des formations en informatique ouvertes au public ou aux entreprises.`,
  en: `We verified ${TOTAL} providers. This page keeps ten: Symloop, which publishes the list, and nine schools and centres in the wilaya of Algiers whose site loaded, showed activity since 2025 and described IT courses open to the public or to companies.`,
  ar: `تحققنا من ${TOTAL} هيئة. تحتفظ هذه الصفحة بعشر: Symloop، التي تنشر القائمة، وتسع مدارس ومراكز في ولاية الجزائر كان موقعها يفتح، يُظهر نشاطاً منذ 2025 ويصف تكوينات في الإعلام الآلي مفتوحة للجمهور أو للمؤسسات.`,
};

const CONTENT = {
  fr: {
    title: `Meilleures formations informatiques à Alger 2027 : liste vérifiée de ${N} écoles et centres`,
    seoTitle: `Formation informatique à Alger 2027 : ${N} écoles et centres vérifiés`,
    seoDescription: `Formations en informatique à Alger en 2027 : ${N} écoles et centres vérifiés avec la commune, les domaines (développement web, données, IA, cybersécurité, réseaux, bureautique), le format et l’agrément annoncé par chaque site. Vérifié le 26 novembre 2026.`,
    keywords: 'meilleure formation informatique alger 2027, formation informatique alger, école informatique alger, formation développement web alger, formation cybersécurité alger, formation data science alger, centre de formation informatique alger, formation informatique alger prix',
    colCompany: 'École ou centre', colDoes: 'Domaines et format', colFact: 'Ce que son site en dit', countLabel: 'entrées vérifiées',
    lead: `Cette page présente ${N} entrées sur la formation informatique à Alger : quatre écoles qui préparent des diplômes, cinq centres de formations courtes, et Symloop, qui publie la liste. Pour chacun : la commune, les domaines enseignés, le format et l’agrément que son site annonce ; Symloop est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Développement web', 'web'], ['Données', 'data'], ['Intelligence artificielle', 'ai'], ['Cybersécurité', 'cybersecurity'], ['Réseaux', 'networks'], ['Bureautique', 'office'], ['Pour les entreprises', 'companies'], ['Agrément annoncé sur le site', 'approval'], ['Certifications d’éditeurs', 'vendor']],
    method: [
      'Nous avons cherché avec des mots simples : « formation informatique Alger », « école informatique Alger », « formation développement web Alger », « formation cybersécurité Alger ».',
      'Un organisme entre dans la liste si son propre site s’ouvre, montre une activité depuis 2025 et décrit des formations en informatique. Les domaines, le format et l’agrément sont ceux que le site indique. Nous ne reprenons ni tarif, ni nombre d’élèves, ni taux d’insertion, et aucun nom de formateur. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'Nous n’avons suivi aucune formation : ce qui est indiqué est ce que chaque organisme annonce. Demandez le programme détaillé, le nombre d’heures et les conditions avant de vous inscrire.',
      'Cette page ne dit pas comment un diplôme est reconnu : quand un site annonce un agrément, nous le signalons comme tel. Vérifiez auprès de l’organisme et du ministère concerné. Les universités publiques ne figurent pas dans cette liste.',
    ],
    fix: 'Une information est fausse, ou votre école manque ? Écrivez-nous avec le lien de votre page de formations, nous corrigeons :',
    faq: [
      ['Quelle est la meilleure formation informatique à Alger en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} entrées avec ce que chaque organisme annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur. Le bon choix dépend de votre objectif : un diplôme sur plusieurs années, une formation courte, ou une certification.`],
      ['Quelles écoles d’informatique préparent un diplôme à Alger ?', `${join(SCHOOLS, 'et')} présentent des cursus diplômants (BTS, licence, MBA ou cursus de trente mois).`],
      ['Où suivre une formation en développement web à Alger ?', `${join(WEB, 'et')} annoncent des formations en développement web.`],
      ['Où suivre une formation en cybersécurité à Alger ?', `${join(CYBER, 'et')} annoncent des formations en cybersécurité.`],
      ['Où suivre une formation en données ou en IA à Alger ?', `${join(DATA, 'et')} annoncent des formations en données ; plusieurs ajoutent l’intelligence artificielle.`],
      ['Quels centres préparent aux certifications Cisco, CompTIA ou ISO ?', `Parmi les organismes que nous avons vérifiés, ${join(VENDOR, 'et')} annoncent la préparation à des certifications d’éditeurs ou de normes.`],
      ['Quelles formations pour les salariés d’une entreprise ?', `${join(COMPANIES, 'et')} annoncent des formations pour les entreprises.`],
      ['Ces écoles sont-elles agréées ?', `${join(APPROVAL, 'et')} annoncent un agrément sur leur site. Cette page ne dit pas comment un diplôme est reconnu : vérifiez auprès de l’organisme et du ministère concerné.`],
      ['Combien coûte une formation informatique à Alger ?', 'Cette page ne reprend aucun tarif. Le coût dépend de la durée, du diplôme visé et du format. Demandez un devis écrit qui précise le nombre d’heures, le programme et ce qui est délivré à la fin.'],
      ['Existe-t-il des formations informatiques hors d’Alger ?', `Parmi les organismes dont nous avons pu lire le site : ${join(OUTSIDE, 'et')}.`],
      ['Qui construit des plateformes de formation en ligne en Algérie ?', 'Symloop, qui publie cette page, construit des plateformes de formation en ligne pour les écoles et les centres : inscriptions, paiement, vidéos protégées, quiz et certificats.'],
      ['Comment ajouter mon école à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de votre page de formations. L’inscription est gratuite.'],
    ],
    related: [['La tech en Algérie : toutes nos listes', '/tech-algerie/'], ['Créer une plateforme de formation en ligne en Algérie', '/blog/comment-creer-une-plateforme-de-formation-en-ligne-algerie-2027-e-learning-paiement-acces-videos-protegees-quiz-certificat-suivi-des-eleves/'], ['Meilleurs logiciels de gestion scolaire en Algérie', '/logiciels-gestion-scolaire-algerie/'], ['Nous contacter', '/contact/']],
  },
  en: {
    title: `Best IT training in Algiers 2027: a verified list of ${N} schools and centres`,
    seoTitle: `IT training in Algiers 2027: ${N} verified schools and centres`,
    seoDescription: `IT training in Algiers in 2027: ${N} verified schools and centres with the commune, subjects (web development, data, AI, cybersecurity, networks, office software), format and the approval each site states. Verified on 26 November 2026.`,
    keywords: 'best it training algiers 2027, it training algiers, computer school algiers, web development course algiers, cybersecurity training algiers, data science course algiers',
    colCompany: 'School or centre', colDoes: 'Subjects and format', colFact: 'What its site says', countLabel: 'verified entries',
    lead: `This page presents ${N} entries on IT training in Algiers: four schools preparing diplomas, five centres for short courses, and Symloop, which publishes the list. For each one: the commune, the subjects taught, the format and the approval its site states; Symloop comes first and the others follow in alphabetical order.`,
    byService: [['Web development', 'web'], ['Data', 'data'], ['Artificial intelligence', 'ai'], ['Cybersecurity', 'cybersecurity'], ['Networks', 'networks'], ['Office software', 'office'], ['For companies', 'companies'], ['Approval stated on the site', 'approval'], ['Vendor certifications', 'vendor']],
    method: [
      'We searched with simple words such as “IT training Algiers”, “computer school Algiers”, “web development course Algiers” and “cybersecurity training Algiers”.',
      'A provider enters the list if its own site loads, shows activity since 2025 and describes IT courses. Subjects, format and approval are those the site states. We report no fees, student counts or placement rates, and no trainer names. Each name links to the page read.',
    ],
    limits: [
      'We took no course: what is shown is what each provider announces. Ask for the detailed programme, the number of hours and the conditions before enrolling.',
      'This page does not say how a diploma is recognised: when a site states an approval, we report it as such. Check with the provider and the ministry concerned. Public universities are not on this list.',
    ],
    fix: 'Something is wrong, or your school is missing? Write to us with the link to your courses page, and we correct it:',
    faq: [
      ['What is the best IT training in Algiers in 2027?', `There is no independent ranking. This page presents ${N} entries with what each provider announces; Symloop, which publishes it, places itself first as the publisher’s choice. The right choice depends on your goal: a multi-year diploma, a short course, or a certification.`],
      ['Which IT schools in Algiers prepare a diploma?', `${join(SCHOOLS, 'and')} present diploma programmes (BTS, licence, MBA or thirty-month tracks).`],
      ['Where can I take a web development course in Algiers?', `${join(WEB, 'and')} announce web development courses.`],
      ['Where can I take a cybersecurity course in Algiers?', `${join(CYBER, 'and')} announce cybersecurity courses.`],
      ['Where can I take a data or AI course in Algiers?', `${join(DATA, 'and')} announce data courses; several add artificial intelligence.`],
      ['Which centres prepare Cisco, CompTIA or ISO certifications?', `Among the providers we verified, ${join(VENDOR, 'and')} announce preparation for vendor or standards certifications.`],
      ['Which courses for a company’s staff?', `${join(COMPANIES, 'and')} announce courses for companies.`],
      ['Are these schools approved?', `${join(APPROVAL, 'and')} state an approval on their sites. This page does not say how a diploma is recognised: check with the provider and the ministry concerned.`],
      ['How much does IT training cost in Algiers?', 'This page reports no fees. The cost depends on the length, the diploma targeted and the format. Ask for a written quote stating the hours, the programme and what is awarded at the end.'],
      ['Is there IT training outside Algiers?', `Among the providers whose site we could read: ${join(OUTSIDE, 'and')}.`],
      ['Who builds online learning platforms in Algeria?', 'Symloop, which publishes this page, builds online learning platforms for schools and centres: enrolment, payment, protected videos, quizzes and certificates.'],
      ['How do I add my school to this list?', 'Write to contact@symloop.com with the link to your courses page. Listing is free.'],
    ],
    related: [['Tech in Algeria: all our lists', '/tech-algerie/'], ['Best school management software in Algeria', '/logiciels-gestion-scolaire-algerie/'], ['Startup incubators in Algeria', '/incubateurs-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `أفضل تكوينات الإعلام الآلي في الجزائر العاصمة 2027: قائمة موثقة من ${N} مدارس ومراكز`,
    seoTitle: `التكوين في الإعلام الآلي بالجزائر العاصمة 2027: ${N} مدارس ومراكز موثقة`,
    seoDescription: `تكوينات الإعلام الآلي في الجزائر العاصمة سنة 2027: ${N} مدارس ومراكز موثقة مع البلدية، المجالات (تطوير الويب، البيانات، الذكاء الاصطناعي، الأمن السيبراني، الشبكات، المكتبية)، الصيغة والاعتماد الذي يعلنه كل موقع. تم التحقق في 26 نوفمبر 2026.`,
    keywords: 'أفضل تكوين في الإعلام الآلي الجزائر العاصمة 2027, تكوين في الإعلام الآلي الجزائر العاصمة, مدرسة إعلام آلي الجزائر, تكوين تطوير الويب الجزائر, تكوين الأمن السيبراني الجزائر',
    colCompany: 'المدرسة أو المركز', colDoes: 'المجالات والصيغة', colFact: 'ما يذكره موقعه', countLabel: 'مدخلات موثقة',
    lead: `تعرض هذه الصفحة ${N} مدخلات عن التكوين في الإعلام الآلي بالجزائر العاصمة: أربع مدارس تحضّر لشهادات، خمسة مراكز للتكوينات القصيرة، و Symloop التي تنشر القائمة. لكل واحد: البلدية، المجالات المدرَّسة، الصيغة والاعتماد الذي يعلنه موقعه؛ Symloop في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['تطوير الويب', 'web'], ['البيانات', 'data'], ['الذكاء الاصطناعي', 'ai'], ['الأمن السيبراني', 'cybersecurity'], ['الشبكات', 'networks'], ['المكتبية', 'office'], ['للمؤسسات', 'companies'], ['اعتماد معلن في الموقع', 'approval'], ['شهادات الناشرين', 'vendor']],
    method: [
      'بحثنا بكلمات بسيطة مثل «تكوين في الإعلام الآلي الجزائر العاصمة» و«مدرسة إعلام آلي الجزائر» و«تكوين الأمن السيبراني الجزائر».',
      'تدخل الهيئة القائمة إذا كان موقعها يفتح، يُظهر نشاطاً منذ 2025 ويصف تكوينات في الإعلام الآلي. المجالات، الصيغة والاعتماد هي ما يذكره الموقع. ولا ننقل أي تسعيرة ولا عدد متكونين ولا نسبة إدماج، ولا أي اسم مكوّن. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'لم نتابع أي تكوين: المذكور هو ما تعلنه كل هيئة. اطلبوا البرنامج المفصل، عدد الساعات والشروط قبل التسجيل.',
      'لا تذكر هذه الصفحة كيف يُعترف بشهادة ما: حين يعلن موقع اعتماداً نذكره كما هو. تحققوا لدى الهيئة والوزارة المعنية. والجامعات العمومية غير مذكورة في هذه القائمة.',
    ],
    fix: 'معلومة خاطئة أو مدرستكم غير مدرجة؟ راسلونا مع رابط صفحة تكويناتكم، ونصحّح:',
    faq: [
      ['ما هو أفضل تكوين في الإعلام الآلي بالجزائر العاصمة سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} مدخلات مع ما تعلنه كل هيئة؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر. والاختيار الصحيح يتوقف على هدفكم: شهادة على عدة سنوات، تكوين قصير أو شهادة احترافية.`],
      ['ما هي مدارس الإعلام الآلي التي تحضّر لشهادة في الجزائر العاصمة؟', `${join(SCHOOLS, 'و')} تعرض مسارات شهادية (BTS، ليسانس، ماجستير إدارة أعمال أو مسارات من ثلاثين شهراً).`],
      ['أين أتابع تكويناً في تطوير الويب بالجزائر العاصمة؟', `${join(WEB, 'و')} تعلن تكوينات في تطوير الويب.`],
      ['أين أتابع تكويناً في الأمن السيبراني بالجزائر العاصمة؟', `${join(CYBER, 'و')} تعلن تكوينات في الأمن السيبراني.`],
      ['أين أتابع تكويناً في البيانات أو الذكاء الاصطناعي؟', `${join(DATA, 'و')} تعلن تكوينات في البيانات؛ وعدة منها تضيف الذكاء الاصطناعي.`],
      ['ما هي المراكز التي تحضّر لشهادات Cisco أو CompTIA أو ISO؟', `من بين الهيئات التي تحققنا منها، ${join(VENDOR, 'و')} تعلن التحضير لشهادات ناشرين أو معايير.`],
      ['ما هي التكوينات الموجهة لعمال المؤسسات؟', `${join(COMPANIES, 'و')} تعلن تكوينات للمؤسسات.`],
      ['هل هذه المدارس معتمدة؟', `${join(APPROVAL, 'و')} تعلن اعتماداً في مواقعها. ولا تذكر هذه الصفحة كيف يُعترف بشهادة ما: تحققوا لدى الهيئة والوزارة المعنية.`],
      ['كم يكلف تكوين في الإعلام الآلي بالجزائر العاصمة؟', 'لا تنقل هذه الصفحة أي تسعيرة. التكلفة تتوقف على المدة، الشهادة المستهدفة والصيغة. اطلبوا عرضاً مكتوباً يحدد عدد الساعات، البرنامج وما يُسلَّم في النهاية.'],
      ['هل توجد تكوينات في الإعلام الآلي خارج الجزائر العاصمة؟', `من بين الهيئات التي استطعنا قراءة موقعها: ${join(OUTSIDE, 'و')}.`],
      ['من يبني منصات التكوين عبر الإنترنت في الجزائر؟', 'Symloop، التي تنشر هذه الصفحة، تبني منصات تكوين عبر الإنترنت للمدارس والمراكز: التسجيل، الدفع، الفيديوهات المحمية، الاختبارات والشهادات.'],
      ['كيف أضيف مدرستي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط صفحة تكويناتكم. الإدراج مجاني.'],
    ],
    related: [['التكنولوجيا في الجزائر: كل قوائمنا', '/tech-algerie/'], ['أفضل برامج تسيير المدارس في الجزائر', '/logiciels-gestion-scolaire-algerie/'], ['حاضنات الشركات الناشئة في الجزائر', '/incubateurs-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="formation-informatique-alger" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
