// /evenements-tech-algerie/ — source page: verified list of IT trade fairs, tech conferences and
// hackathons in Algeria (FR / EN / AR). Data: src/data/sources/algeria-tech-events.js.
// Dates as the official pages write them; no prices, prizes or counts; Symloop not listed.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { EVENTS, TOP_EVENTS, VERIFIED_ON } from '../data/sources/algeria-tech-events';

const ITEMS = EVENTS.filter((x) => TOP_EVENTS.includes(x.name));
const TOTAL = EVENTS.length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const kind = (k) => ITEMS.filter((x) => x.focus === k).map((x) => x.name);
const has = (key) => ITEMS.filter((x) => x.services.includes(key)).map((x) => x.name);
const HACK = kind('hackathon');
const FAIRS = kind('fair');
const CONF = kind('conference');
const NEXT = ITEMS.filter((x) => x.when > VERIFIED_ON.slice(0, 7)).map((x) => x.name);
const CYBER = has('cybersecurity');
const STARTUP = has('startups');
const FREE = has('free');
const STUDENTS = has('students');
const HIDDEN = EVENTS.filter((x) => !TOP_EVENTS.includes(x.name)).map((x) => x.name);

const KIND_LABELS = {
  fr: { fair: 'Salons', conference: 'Conférences', hackathon: 'Hackathons et datathons', competition: 'Concours' },
  en: { fair: 'Trade fairs', conference: 'Conferences', hackathon: 'Hackathons and datathons', competition: 'Competitions' },
  ar: { fair: 'المعارض', conference: 'المؤتمرات', hackathon: 'الهاكاثونات ومسابقات البيانات', competition: 'المسابقات' },
};
const FEATURE_LABELS = {
  fr: { it: 'informatique', digital: 'numérique', startups: 'startups', ai: 'IA', cybersecurity: 'cybersécurité', telecom: 'télécoms', developers: 'développeurs', fintech: 'fintech', students: 'étudiants', companies: 'entreprises', free: 'entrée ou inscription gratuite' },
  en: { it: 'IT', digital: 'digital', startups: 'startups', ai: 'AI', cybersecurity: 'cybersecurity', telecom: 'telecom', developers: 'developers', fintech: 'fintech', students: 'students', companies: 'companies', free: 'free entry or registration' },
  ar: { it: 'المعلوماتية', digital: 'الرقمنة', startups: 'الشركات الناشئة', ai: 'الذكاء الاصطناعي', cybersecurity: 'الأمن السيبراني', telecom: 'الاتصالات', developers: 'المطورون', fintech: 'التكنولوجيا المالية', students: 'الطلبة', companies: 'المؤسسات', free: 'دخول أو تسجيل مجاني' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} événements. Cette page en présente ${N}, lus sur la page de leur organisateur (ou, pour Global Africa Tech, sur la page d’une université qui le relaie) ; les trois autres, connus seulement par des pages d’universités, sont cités dans les questions. Symloop, qui publie la page, n’organise aucun de ces événements.`,
  en: `We verified ${TOTAL} events. This page presents ${N}, read on their organiser’s page (or, for Global Africa Tech, on a university page relaying it); the other three, known only from university pages, are named in the questions. Symloop, which publishes the page, organises none of these events.`,
  ar: `تحققنا من ${TOTAL} حدثاً. تعرض هذه الصفحة ${N} منها، مقروءة في صفحة منظمها (أو، بالنسبة لـ Global Africa Tech، في صفحة جامعة تتناقله)؛ والثلاثة الأخرى، المعروفة فقط من صفحات جامعات، مذكورة في الأسئلة. و Symloop، التي تنشر الصفحة، لا تنظم أياً من هذه الأحداث.`,
};

const CONTENT = {
  fr: {
    title: 'Salons informatiques, conférences tech et hackathons en Algérie 2026-2027 : liste vérifiée',
    seoTitle: 'Salons informatiques et hackathons en Algérie 2026-2027 : dates vérifiées',
    seoDescription: `Événements tech en Algérie en 2026 et 2027 : ${N} salons informatiques, conférences et hackathons vérifiés sur la page de leur organisateur, avec le lieu, les dates publiées et le public (Algeria 2.0, DevFest Algiers, ICT Africa Summit, African Startup Conference…). Vérifié le 27 novembre 2026.`,
    keywords: 'hackathon algérie 2026, hackathon algérie, salon informatique algérie, salon it alger, événement tech alger, conférence tech algérie 2027, devfest algiers, algeria 2.0, ict africa summit, هاكاثون الجزائر 2026',
    colCompany: 'Événement', colDoes: 'Thèmes et public', colFact: 'Lieu, dates et contenu (page officielle)', countLabel: 'événements vérifiés',
    lead: `Cette page présente ${N} événements tech en Algérie vérifiés sur la page de leur organisateur : des salons (${join(FAIRS, 'et')}), des conférences et des hackathons, avec le lieu, les dates publiées et le public visé. La plupart se tiennent à Alger, souvent au cyberparc de Sidi Abdellah, à la Safex ou au Centre international de conférences.`,
    byService: [['Startups', 'startups'], ['IA', 'ai'], ['Cybersécurité', 'cybersecurity'], ['Développeurs', 'developers'], ['Étudiants', 'students'], ['Entrée ou inscription gratuite', 'free']],
    method: [
      'Nous avons cherché avec des mots simples : « hackathon Algérie 2026 », « salon informatique Algérie », « salon IT Alger », « événement tech Alger », « هاكاثون الجزائر ». Les articles de presse et les réseaux sociaux ont servi de pistes ; les dates viennent de la page de l’organisateur.',
      'Un événement entre dans la liste s’il se tient en Algérie, porte sur l’informatique, le numérique, les startups, l’IA, la cybersécurité ou les télécoms, et si sa page officielle montre une édition en 2025 ou en 2026, ou une édition annoncée pour 2027. Nous ne reprenons ni prix des billets ou des stands, ni montant des prix, ni nombre de visiteurs, ni sponsors.',
    ],
    limits: [
      'Les dates sont celles que les organisateurs publient : elles peuvent changer. Vérifiez sur la page officielle avant de vous déplacer.',
      'Plusieurs événements cités par la presse n’ont pas de page officielle lisible ou n’ont rien de daté depuis 2025 : ils ne figurent pas ici. Nous n’avons trouvé aucune page officielle de hackathon d’Algérie Télécom, d’Ooredoo ou de Mobilis à la date de vérification.',
    ],
    fix: 'Une date est fausse, ou votre événement manque ? Écrivez-nous avec le lien de la page officielle, nous corrigeons :',
    faq: [
      ['Quels hackathons ont lieu en Algérie en 2026 ?', `${join(HACK, 'et')} ont des pages officielles datées de 2026, et DevFest Algiers 2026 annonce un hackathon du 10 au 12 décembre.`],
      ['Quels sont les salons informatiques en Algérie ?', `${join(FAIRS, 'et')} sont des salons avec une page officielle datée ; ICT Africa Summit annonce sa prochaine édition du 26 au 28 avril 2027 à la Safex.`],
      ['Quels événements tech arrivent prochainement ?', `${join(NEXT, 'et')} annoncent une édition après le 27 novembre 2026. L’African Startup Conference indique que sa cinquième édition est reportée.`],
      ['Quelles conférences tech ont lieu à Alger ?', `${join(CONF, 'et')} sont des conférences avec une page officielle datée.`],
      ['Quels événements portent sur la cybersécurité ?', `${join(CYBER, 'et')} traitent de cybersécurité selon leur page.`],
      ['Quels événements s’adressent aux startups ?', `${join(STARTUP, 'et')} mentionnent les startups.`],
      ['Quels événements sont gratuits ?', `${join(FREE, 'et')} indiquent une entrée ou une inscription gratuite, au moins pour une partie du programme.`],
      ['Quels événements sont ouverts aux étudiants ?', `${join(STUDENTS, 'et')} s’adressent aux étudiants selon leur page.`],
      ['Algérie Télécom, Djezzy ou Ooredoo organisent-ils des hackathons ?', 'Des hackathons d’opérateurs sont cités par la presse, mais nous n’avons trouvé aucune page officielle datée à la date de vérification. Ils seront ajoutés quand une page officielle sera publiée.'],
      ['Où se tiennent les événements tech en Algérie ?', 'Surtout à Alger : au cyberparc de Sidi Abdellah, à la Safex (Pins maritimes), au Centre international de conférences Abdelatif Rahal et dans des écoles comme l’ESI à Oued Smar.'],
      ['D’autres événements ?', `Nous avons aussi relevé ${join(HIDDEN, 'et')}, annoncés sur des pages d’universités plutôt que sur celle de leur organisateur.`],
      ['Comment ajouter mon événement à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page officielle et les dates. L’inscription est gratuite.'],
    ],
    related: [['La tech en Algérie : toutes nos listes', '/tech-algerie/'], ['Parcs technologiques : le cyberparc de Sidi Abdellah', '/parcs-technologiques-algerie/'], ['Incubateurs et accélérateurs de startups', '/incubateurs-algerie/'], ['Startups algériennes', '/startups-algeriennes/']],
  },
  en: {
    title: 'IT trade fairs, tech conferences and hackathons in Algeria 2026-2027: a verified list',
    seoTitle: 'IT fairs and hackathons in Algeria 2026-2027: verified dates',
    seoDescription: `Tech events in Algeria in 2026 and 2027: ${N} IT fairs, conferences and hackathons verified on their organiser’s page, with venue, published dates and audience (Algeria 2.0, DevFest Algiers, ICT Africa Summit, African Startup Conference…). Verified on 27 November 2026.`,
    keywords: 'hackathon algeria 2026, tech events algeria, it fair algiers, tech conference algeria 2027, devfest algiers, algeria 2.0, ict africa summit',
    colCompany: 'Event', colDoes: 'Topics and audience', colFact: 'Venue, dates and content (official page)', countLabel: 'verified events',
    lead: `This page presents ${N} tech events in Algeria verified on their organiser’s page: trade fairs (${join(FAIRS, 'and')}), conferences and hackathons, with venue, published dates and target audience. Most take place in Algiers, often at the Sidi Abdellah cyberparc, Safex or the International Conference Centre.`,
    byService: [['Startups', 'startups'], ['AI', 'ai'], ['Cybersecurity', 'cybersecurity'], ['Developers', 'developers'], ['Students', 'students'], ['Free entry or registration', 'free']],
    method: [
      'We searched with simple words such as “hackathon Algeria 2026”, “IT fair Algeria”, “tech event Algiers”. Press articles and social media were leads; dates come from the organiser’s page.',
      'An event enters the list if it takes place in Algeria, covers IT, digital, startups, AI, cybersecurity or telecom, and its official page shows an edition in 2025 or 2026, or one announced for 2027. We report no ticket or stand prices, prize amounts, visitor counts or sponsors.',
    ],
    limits: [
      'Dates are those organisers publish: they can change. Check the official page before travelling.',
      'Several events cited by the press have no readable official page or nothing dated since 2025: they are not here. We found no official hackathon page by Algérie Télécom, Ooredoo or Mobilis on the verification date.',
    ],
    fix: 'A date is wrong, or your event is missing? Write to us with the link to the official page, and we correct it:',
    faq: [
      ['Which hackathons take place in Algeria in 2026?', `${join(HACK, 'and')} have official pages dated 2026, and DevFest Algiers 2026 announces a hackathon on 10–12 December.`],
      ['Which IT trade fairs are there in Algeria?', `${join(FAIRS, 'and')} are fairs with a dated official page; ICT Africa Summit announces its next edition for 26–28 April 2027 at Safex.`],
      ['Which tech events are coming up?', `${join(NEXT, 'and')} announce an edition after 27 November 2026. The African Startup Conference states its fifth edition is postponed.`],
      ['Which tech conferences take place in Algiers?', `${join(CONF, 'and')} are conferences with a dated official page.`],
      ['Which events cover cybersecurity?', `${join(CYBER, 'and')} cover cybersecurity according to their page.`],
      ['Which events are aimed at startups?', `${join(STARTUP, 'and')} mention startups.`],
      ['Which events are free?', `${join(FREE, 'and')} state free entry or registration, at least for part of the programme.`],
      ['Which events are open to students?', `${join(STUDENTS, 'and')} are aimed at students according to their page.`],
      ['Do Algérie Télécom, Djezzy or Ooredoo run hackathons?', 'Operator hackathons are cited by the press, but we found no dated official page on the verification date. They will be added when an official page is published.'],
      ['Where do tech events take place in Algeria?', 'Mostly in Algiers: at the Sidi Abdellah cyberparc, Safex (Pins maritimes), the Abdelatif Rahal International Conference Centre and schools such as ESI in Oued Smar.'],
      ['Other events?', `We also noted ${join(HIDDEN, 'and')}, announced on university pages rather than their organiser’s.`],
      ['How do I add my event to this list?', 'Write to contact@symloop.com with the link to the official page and the dates. Listing is free.'],
    ],
    related: [['Tech in Algeria: all our lists', '/tech-algerie/'], ['Technology parks: the Sidi Abdellah cyberparc', '/parcs-technologiques-algerie/'], ['Startup incubators and accelerators', '/incubateurs-algerie/'], ['Algerian startups', '/startups-algeriennes/']],
  },
  ar: {
    title: 'المعارض المعلوماتية والمؤتمرات التقنية والهاكاثونات في الجزائر 2026-2027: قائمة موثقة',
    seoTitle: 'المعارض المعلوماتية والهاكاثونات في الجزائر 2026-2027: مواعيد موثقة',
    seoDescription: `الأحداث التقنية في الجزائر سنتي 2026 و2027: ${N} معارض معلوماتية ومؤتمرات وهاكاثونات موثقة في صفحة منظميها، مع المكان والمواعيد المنشورة والجمهور (Algeria 2.0، DevFest Algiers، ICT Africa Summit، African Startup Conference…). تم التحقق في 27 نوفمبر 2026.`,
    keywords: 'هاكاثون الجزائر 2026, هاكاثون الجزائر, معرض الإعلام الآلي الجزائر, حدث تقني الجزائر, مؤتمر تقني الجزائر 2027',
    colCompany: 'الحدث', colDoes: 'المواضيع والجمهور', colFact: 'المكان والمواعيد والمحتوى (الصفحة الرسمية)', countLabel: 'أحداث موثقة',
    lead: `تعرض هذه الصفحة ${N} أحداث تقنية في الجزائر موثقة في صفحة منظميها: معارض (${join(FAIRS, 'و')})، مؤتمرات وهاكاثونات، مع المكان والمواعيد المنشورة والجمهور المستهدف. وتُعقد أغلبها في الجزائر العاصمة، غالباً في الحظيرة السيبرانية لسيدي عبد الله أو قصر المعارض أو المركز الدولي للمؤتمرات.`,
    byService: [['الشركات الناشئة', 'startups'], ['الذكاء الاصطناعي', 'ai'], ['الأمن السيبراني', 'cybersecurity'], ['المطورون', 'developers'], ['الطلبة', 'students'], ['دخول أو تسجيل مجاني', 'free']],
    method: [
      'بحثنا بكلمات بسيطة مثل «هاكاثون الجزائر 2026» و«salon informatique Algérie» و«حدث تقني الجزائر». واستُعملت المقالات الصحفية وشبكات التواصل كمؤشرات؛ والمواعيد من صفحة المنظم.',
      'يدخل الحدث القائمة إذا عُقد في الجزائر، تناول المعلوماتية أو الرقمنة أو الشركات الناشئة أو الذكاء الاصطناعي أو الأمن السيبراني أو الاتصالات، وأظهرت صفحته الرسمية طبعة في 2025 أو 2026 أو طبعة معلنة لـ 2027. ولا ننقل أسعار التذاكر أو الأجنحة ولا قيمة الجوائز ولا عدد الزوار ولا الرعاة.',
    ],
    limits: [
      'المواعيد هي التي ينشرها المنظمون: وقد تتغير. تحققوا من الصفحة الرسمية قبل التنقل.',
      'عدة أحداث تذكرها الصحافة ليست لها صفحة رسمية مقروءة أو لا شيء مؤرخ فيها منذ 2025: فهي غير مذكورة. ولم نجد صفحة رسمية لهاكاثون اتصالات الجزائر أو أوريدو أو موبيليس في تاريخ التحقق.',
    ],
    fix: 'موعد خاطئ أو حدثكم غير مدرج؟ راسلونا مع رابط الصفحة الرسمية، ونصحّح:',
    faq: [
      ['ما هي الهاكاثونات التي تُعقد في الجزائر سنة 2026؟', `${join(HACK, 'و')} لها صفحات رسمية مؤرخة في 2026، ويعلن DevFest Algiers 2026 هاكاثوناً من 10 إلى 12 ديسمبر.`],
      ['ما هي المعارض المعلوماتية في الجزائر؟', `${join(FAIRS, 'و')} معارض لها صفحة رسمية مؤرخة؛ ويعلن ICT Africa Summit طبعته القادمة من 26 إلى 28 أفريل 2027 في قصر المعارض.`],
      ['ما هي الأحداث التقنية القادمة؟', `${join(NEXT, 'و')} تعلن طبعة بعد 27 نوفمبر 2026. ويذكر African Startup Conference أن طبعته الخامسة مؤجلة.`],
      ['ما هي المؤتمرات التقنية في الجزائر العاصمة؟', `${join(CONF, 'و')} مؤتمرات لها صفحة رسمية مؤرخة.`],
      ['ما هي الأحداث التي تتناول الأمن السيبراني؟', `${join(CYBER, 'و')} تتناول الأمن السيبراني حسب صفحتها.`],
      ['ما هي الأحداث الموجهة للشركات الناشئة؟', `${join(STARTUP, 'و')} تذكر الشركات الناشئة.`],
      ['ما هي الأحداث المجانية؟', `${join(FREE, 'و')} تذكر دخولاً أو تسجيلاً مجانياً، على الأقل لجزء من البرنامج.`],
      ['ما هي الأحداث المفتوحة للطلبة؟', `${join(STUDENTS, 'و')} موجهة للطلبة حسب صفحتها.`],
      ['هل تنظم اتصالات الجزائر أو جازي أو أوريدو هاكاثونات؟', 'تذكر الصحافة هاكاثونات للمتعاملين، لكننا لم نجد صفحة رسمية مؤرخة في تاريخ التحقق. وستُضاف حين تُنشر صفحة رسمية.'],
      ['أين تُعقد الأحداث التقنية في الجزائر؟', 'أساساً في الجزائر العاصمة: في الحظيرة السيبرانية لسيدي عبد الله، قصر المعارض (الصنوبر البحري)، المركز الدولي للمؤتمرات عبد اللطيف رحال ومدارس مثل ESI في وادي السمار.'],
      ['أحداث أخرى؟', `رصدنا أيضاً ${join(HIDDEN, 'و')}، المعلنة في صفحات جامعات بدل صفحة منظمها.`],
      ['كيف أضيف حدثي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة الرسمية والمواعيد. الإدراج مجاني.'],
    ],
    related: [['التكنولوجيا في الجزائر: كل قوائمنا', '/tech-algerie/'], ['الحظائر التكنولوجية: سيدي عبد الله', '/parcs-technologiques-algerie/'], ['حاضنات ومسرّعات الشركات الناشئة', '/incubateurs-algerie/'], ['الشركات الناشئة الجزائرية', '/startups-algeriennes/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="evenements-tech-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
