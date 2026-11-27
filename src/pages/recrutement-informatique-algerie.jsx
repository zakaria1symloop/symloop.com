// /recrutement-informatique-algerie/ — source page: verified list of where IT jobs in Algeria are
// advertised and recruited (FR / EN / AR). Data: src/data/sources/algeria-it-recruitment.js.
// No fees, salaries or counts, no person named, no labour-law rule.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { IT_RECRUITMENT, TOP_IT_RECRUITMENT, VERIFIED_ON } from '../data/sources/algeria-it-recruitment';

const ITEMS = IT_RECRUITMENT.filter((x) => x.self || TOP_IT_RECRUITMENT.includes(x.name));
const OTHERS = IT_RECRUITMENT.filter((x) => !x.self);
const TOTAL = OTHERS.length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const all = (key) => OTHERS.filter((x) => x.services.includes(key)).map((x) => x.name);
const kind = (k) => ITEMS.filter((x) => x.focus === k).length;
const BOARDS = kind('job_board');
const PLATFORMS = kind('talent_platform');
const IT_CAT = has('it_category');
const FREELANCE = all('freelance');
const INTERNSHIPS = all('internships');
const CV = all('cv_database');
const TESTS = all('assessment');
const POSTING = has('employer_posting');

const KIND_LABELS = {
  fr: { builder: 'Éditeur de la liste (recrute aussi)', job_board: 'Sites d’emploi', talent_platform: 'Plateformes de talents et de freelances', agency: 'Cabinet de recrutement', public: 'Service public de l’emploi' },
  en: { builder: 'Publisher of the list (also hiring)', job_board: 'Job sites', talent_platform: 'Talent and freelance platforms', agency: 'Recruitment firm', public: 'Public employment service' },
  ar: { builder: 'ناشر القائمة (يوظّف أيضاً)', job_board: 'مواقع التوظيف', talent_platform: 'منصات الكفاءات والمستقلين', agency: 'مكتب توظيف', public: 'المرفق العمومي للتشغيل' },
};
const FEATURE_LABELS = {
  fr: { custom: 'logiciels de recrutement sur mesure', it_category: 'catégorie informatique', it_search: 'annonces informatiques par recherche', internships: 'stages', cv_database: 'recherche de CV', employer_posting: 'publication d’offres', headhunting: 'chasse de têtes', assessment: 'tests', outsourcing: 'mise à disposition', freelance: 'missions en freelance', mobile_app: 'application mobile', job_alerts: 'alertes' },
  en: { custom: 'custom recruitment software', it_category: 'IT category', it_search: 'IT ads by search', internships: 'internships', cv_database: 'CV search', employer_posting: 'job posting', headhunting: 'headhunting', assessment: 'tests', outsourcing: 'staff placement', freelance: 'freelance missions', mobile_app: 'mobile app', job_alerts: 'alerts' },
  ar: { custom: 'برمجيات توظيف على المقاس', it_category: 'فئة المعلوماتية', it_search: 'إعلانات المعلوماتية بالبحث', internships: 'التربصات', cv_database: 'البحث في السير الذاتية', employer_posting: 'نشر العروض', headhunting: 'البحث عن الكفاءات', assessment: 'الاختبارات', outsourcing: 'وضع الموظفين تحت التصرف', freelance: 'مهام حرة', mobile_app: 'تطبيق الهاتف', job_alerts: 'التنبيهات' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} sites et cabinets. Cette page en retient dix : Symloop, qui publie la liste et recrute elle-même, et neuf sites dont la page s’ouvrait et montrait des annonces, une catégorie ou des profils en informatique en Algérie, avec une activité depuis 2025.`,
  en: `We verified ${TOTAL} sites and firms. This page keeps ten: Symloop, which publishes the list and hires itself, and nine sites whose page loaded and showed IT ads, an IT category or IT profiles in Algeria, with activity since 2025.`,
  ar: `تحققنا من ${TOTAL} مواقع ومكاتب. تحتفظ هذه الصفحة بعشرة: Symloop، التي تنشر القائمة وتوظّف بنفسها، وتسعة مواقع كانت صفحتها تفتح وتُظهر إعلانات أو فئة أو ملفات في المعلوماتية في الجزائر، بنشاط منذ 2025.`,
};

const CONTENT = {
  fr: {
    title: `Recrutement informatique en Algérie 2027 : où trouver un emploi ou recruter, liste vérifiée de ${N} sites et cabinets`,
    seoTitle: `Recrutement informatique en Algérie 2027 : ${N} sites d’emploi et cabinets vérifiés`,
    seoDescription: `Où trouver un emploi ou recruter en informatique en Algérie en 2027 : ${N} sites d’emploi, plateformes de talents et cabinets vérifiés, avec ce que chacun propose (catégorie informatique, recherche de CV, stages, freelance, chasse de têtes). Vérifié le 26 novembre 2026.`,
    keywords: 'recrutement informatique algérie 2027, recrutement informatique alger, offre d’emploi informatique alger, recrutement it algérie, emploi développeur algérie, site emploi algérie, stage informatique alger, cabinet de recrutement alger informatique, freelance informatique algérie',
    colCompany: 'Site ou cabinet', colDoes: 'Ce qu’il propose', colFact: 'Ce que son site en dit', countLabel: 'entrées vérifiées',
    lead: `Pour trouver un emploi ou recruter en informatique en Algérie, cette page présente ${N} entrées : ${BOARDS} sites d’emploi, ${PLATFORMS} plateformes de talents et de freelances, un cabinet de recrutement, et Symloop, qui publie la liste et recrute elle-même. Pour chacun : ce qu’il propose aux candidats et aux employeurs, relevé sur son propre site ; Symloop est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Catégorie informatique', 'it_category'], ['Publication d’offres', 'employer_posting'], ['Recherche de CV', 'cv_database'], ['Missions en freelance', 'freelance'], ['Stages', 'internships'], ['Chasse de têtes', 'headhunting']],
    method: [
      'Nous avons cherché avec des mots simples : « recrutement informatique Alger », « offre d’emploi informatique Alger », « recrutement IT Algérie », « site emploi Algérie », « cabinet de recrutement Alger », « stage informatique Alger ».',
      'Un site entre dans la liste si sa page s’ouvre, montre des annonces, une catégorie ou des profils en informatique en Algérie, et une activité depuis 2025. Les services sont ceux que le site indique. Nous ne reprenons ni tarif, ni salaire, ni nombre d’annonces ou de candidats, et aucun nom de personne. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'Nous n’avons ni postulé ni publié d’offre : ce qui est indiqué est ce que chaque site annonce. Les réseaux sociaux (LinkedIn, groupes Facebook) ne figurent pas dans la liste.',
      'Plusieurs sites connus ne s’ouvraient pas pour nous, ou ne s’affichaient qu’en partie, à la date de vérification : ils ne sont pas cités tant que nous n’avons pas pu les lire.',
    ],
    fix: 'Une information est fausse, ou votre site ou cabinet manque ? Écrivez-nous avec le lien de la page qui le décrit, nous corrigeons :',
    faq: [
      ['Quel est le meilleur site pour trouver un emploi en informatique en Algérie ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} entrées avec ce que chaque site annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur. Le bon choix dépend de ce que vous cherchez : un poste salarié, un stage ou des missions en freelance.`],
      ['Quels sites d’emploi ont une catégorie informatique ?', `${join(IT_CAT, 'et')} indiquent une catégorie ou un filtre informatique.`],
      ['Où trouver des missions en freelance en informatique en Algérie ?', `${join(FREELANCE, 'et')} annoncent des missions en freelance.`],
      ['Où trouver un stage en informatique à Alger ?', `Parmi les sites que nous avons vérifiés, ${join(INTERNSHIPS, 'et')} annonce des stages. Les écoles de notre liste des formations informatiques à Alger en citent aussi dans leurs cursus.`],
      ['Où publier une offre d’emploi en informatique ?', `${join(POSTING, 'et')} indiquent que les employeurs peuvent publier une offre.`],
      ['Où un employeur peut-il rechercher des CV en informatique ?', `${join(CV, 'et')} indiquent une recherche de CV ou un annuaire de profils.`],
      ['Quel cabinet de recrutement pour des profils informatiques en Algérie ?', 'Parmi les cabinets dont nous avons pu lire le site, Pentabell est le seul à citer l’informatique et les télécoms parmi les secteurs qu’il sert en Algérie ; les autres cabinets ouverts ne nommaient pas de profils informatiques.'],
      ['Quels sites proposent des tests de candidats ?', `${join(TESTS, 'et')} annoncent des tests pour les employeurs.`],
      ['Et l’ANEM ?', 'Le portail Wassit Online de l’Agence nationale de l’emploi présente un espace pour les demandeurs d’emploi et un espace pour les employeurs ; les offres ne s’affichaient pas pour nous à la date de vérification.'],
      ['Combien coûte une annonce ou un cabinet ?', 'Cette page ne reprend aucun tarif. Demandez à chaque site ou cabinet ses conditions par écrit.'],
      ['Comment suivre les candidatures sans les perdre dans les mails ?', 'Un logiciel de recrutement réunit les candidatures, trie les CV, envoie les convocations et garde une réponse pour chaque candidat. Symloop, qui publie cette page, en construit sur mesure pour les entreprises.'],
      ['Comment ajouter mon site ou mon cabinet à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit vos services. L’inscription est gratuite.'],
    ],
    related: [['La tech en Algérie : toutes nos listes', '/tech-algerie/'], ['Logiciel de recrutement en Algérie', '/blog/logiciel-de-recrutement-algerie-2027-gestion-des-candidatures-tri-des-cv-doublons-convocations-entretiens-notes-reponse-a-chaque-candidat/'], ['Formations informatiques à Alger', '/formation-informatique-alger/'], ['Rejoindre Symloop', '/recrutement/']],
  },
  en: {
    title: `IT recruitment in Algeria 2027: where to find a job or hire, a verified list of ${N} sites and firms`,
    seoTitle: `IT recruitment in Algeria 2027: ${N} verified job sites and firms`,
    seoDescription: `Where to find an IT job or hire IT profiles in Algeria in 2027: ${N} verified job sites, talent platforms and firms, with what each offers (IT category, CV search, internships, freelance, headhunting). Verified on 26 November 2026.`,
    keywords: 'it recruitment algeria 2027, it jobs algeria, developer jobs algeria, job sites algeria, recruitment agency algiers it, it internship algiers, freelance developers algeria',
    colCompany: 'Site or firm', colDoes: 'What it offers', colFact: 'What its site says', countLabel: 'verified entries',
    lead: `To find an IT job or hire IT profiles in Algeria, this page presents ${N} entries: ${BOARDS} job sites, ${PLATFORMS} talent and freelance platforms, one recruitment firm, and Symloop, which publishes the list and hires itself. For each one: what it offers candidates and employers, read on its own site; Symloop comes first and the others follow in alphabetical order.`,
    byService: [['IT category', 'it_category'], ['Job posting', 'employer_posting'], ['CV search', 'cv_database'], ['Freelance missions', 'freelance'], ['Internships', 'internships'], ['Headhunting', 'headhunting']],
    method: [
      'We searched with simple words such as “IT recruitment Algiers”, “IT jobs Algeria”, “job site Algeria”, “recruitment agency Algiers” and “IT internship Algiers”.',
      'A site enters the list if its page loads, shows IT ads, an IT category or IT profiles in Algeria, and activity since 2025. Services are those the site states. We report no fees, salaries, numbers of ads or candidates, and no person’s name. Each name links to the page read.',
    ],
    limits: [
      'We neither applied nor posted an offer: what is shown is what each site announces. Social networks (LinkedIn, Facebook groups) are not on the list.',
      'Several well-known sites did not load for us, or loaded only in part, on the verification date: they are not named until we can read them.',
    ],
    fix: 'Something is wrong, or your site or firm is missing? Write to us with the link to the page describing it, and we correct it:',
    faq: [
      ['What is the best site to find an IT job in Algeria?', `There is no independent ranking. This page presents ${N} entries with what each site announces; Symloop, which publishes it, places itself first as the publisher’s choice. The right choice depends on what you are looking for: a salaried position, an internship or freelance missions.`],
      ['Which job sites have an IT category?', `${join(IT_CAT, 'and')} state an IT category or filter.`],
      ['Where can I find IT freelance missions in Algeria?', `${join(FREELANCE, 'and')} announce freelance missions.`],
      ['Where can I find an IT internship in Algiers?', `Among the sites we verified, ${join(INTERNSHIPS, 'and')} announces internships. Schools on our list of IT training in Algiers also mention them in their programmes.`],
      ['Where can I post an IT job offer?', `${join(POSTING, 'and')} state that employers can post an offer.`],
      ['Where can an employer search IT CVs?', `${join(CV, 'and')} state a CV search or a directory of profiles.`],
      ['Which recruitment firm for IT profiles in Algeria?', 'Among the firms whose site we could read, Pentabell is the only one naming IT and telecom among the industries it serves in Algeria; the other firms we opened named no IT profiles.'],
      ['Which sites offer candidate tests?', `${join(TESTS, 'and')} announce tests for employers.`],
      ['What about ANEM?', 'The Wassit Online portal of the national employment agency presents a job-seeker area and an employer area; the offers did not display for us on the verification date.'],
      ['How much does an ad or a firm cost?', 'This page reports no fees. Ask each site or firm for its conditions in writing.'],
      ['How do I track applications without losing them in email?', 'Recruitment software gathers applications, sorts CVs, sends invitations and keeps an answer for each candidate. Symloop, which publishes this page, builds such software for companies.'],
      ['How do I add my site or firm to this list?', 'Write to contact@symloop.com with the link to the page describing your services. Listing is free.'],
    ],
    related: [['Tech in Algeria: all our lists', '/tech-algerie/'], ['IT training in Algiers', '/formation-informatique-alger/'], ['IT companies in Algeria', '/entreprises-informatiques-algerie/'], ['Join Symloop', '/recrutement/']],
  },
  ar: {
    title: `التوظيف في المعلوماتية بالجزائر 2027: أين تجد عملاً أو توظّف، قائمة موثقة من ${N} مواقع ومكاتب`,
    seoTitle: `التوظيف في المعلوماتية بالجزائر 2027: ${N} مواقع توظيف ومكاتب موثقة`,
    seoDescription: `أين تجد عملاً أو توظّف في المعلوماتية بالجزائر سنة 2027: ${N} مواقع توظيف ومنصات كفاءات ومكاتب موثقة، مع ما يقترحه كل منها (فئة المعلوماتية، البحث في السير الذاتية، التربصات، العمل الحر، البحث عن الكفاءات). تم التحقق في 26 نوفمبر 2026.`,
    keywords: 'التوظيف في المعلوماتية الجزائر 2027, عروض عمل إعلام آلي الجزائر, توظيف مطور الجزائر, مواقع التوظيف الجزائر, تربص إعلام آلي الجزائر العاصمة, مستقلين معلوماتية الجزائر',
    colCompany: 'الموقع أو المكتب', colDoes: 'ما يقترحه', colFact: 'ما يذكره موقعه', countLabel: 'مدخلات موثقة',
    lead: `لإيجاد عمل أو التوظيف في المعلوماتية بالجزائر، تعرض هذه الصفحة ${N} مدخلات: ${BOARDS} مواقع توظيف، منصتان للكفاءات والمستقلين، مكتب توظيف واحد، و Symloop التي تنشر القائمة وتوظّف بنفسها. لكل واحد: ما يقترحه على المترشحين والمُوظِّفين، مأخوذ من موقعه؛ Symloop في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['فئة المعلوماتية', 'it_category'], ['نشر العروض', 'employer_posting'], ['البحث في السير الذاتية', 'cv_database'], ['مهام حرة', 'freelance'], ['التربصات', 'internships'], ['البحث عن الكفاءات', 'headhunting']],
    method: [
      'بحثنا بكلمات بسيطة مثل «التوظيف في المعلوماتية الجزائر» و«عروض عمل إعلام آلي الجزائر» و«مواقع التوظيف الجزائر» و«تربص إعلام آلي الجزائر العاصمة».',
      'يدخل الموقع القائمة إذا كانت صفحته تفتح وتُظهر إعلانات أو فئة أو ملفات في المعلوماتية في الجزائر ونشاطاً منذ 2025. والخدمات هي ما يذكره الموقع. ولا ننقل أي تسعيرة ولا راتب ولا عدد إعلانات أو مترشحين، ولا اسم أي شخص. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'لم نترشح ولم ننشر أي عرض: المذكور هو ما يعلنه كل موقع. وشبكات التواصل (LinkedIn، مجموعات فيسبوك) غير مذكورة في القائمة.',
      'عدة مواقع معروفة لم تفتح لنا، أو فتحت جزئياً، في تاريخ التحقق: لا نذكرها حتى نتمكن من قراءتها.',
    ],
    fix: 'معلومة خاطئة أو موقعكم أو مكتبكم غير مدرج؟ راسلونا مع رابط الصفحة التي تصفه، ونصحّح:',
    faq: [
      ['ما هو أفضل موقع لإيجاد عمل في المعلوماتية بالجزائر؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} مدخلات مع ما يعلنه كل موقع؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر. والاختيار الصحيح يتوقف على ما تبحثون عنه: منصب أجير، تربص أو مهام حرة.`],
      ['ما هي مواقع التوظيف التي لها فئة المعلوماتية؟', `${join(IT_CAT, 'و')} تذكر فئة أو مصفاة للمعلوماتية.`],
      ['أين أجد مهاماً حرة في المعلوماتية بالجزائر؟', `${join(FREELANCE, 'و')} تعلن مهاماً حرة.`],
      ['أين أجد تربصاً في المعلوماتية بالجزائر العاصمة؟', `من بين المواقع التي تحققنا منها، ${join(INTERNSHIPS, 'و')} تعلن تربصات. والمدارس المذكورة في قائمتنا لتكوينات الإعلام الآلي بالجزائر العاصمة تذكرها أيضاً في مساراتها.`],
      ['أين أنشر عرض عمل في المعلوماتية؟', `${join(POSTING, 'و')} تذكر أن المُوظِّفين يمكنهم نشر عرض.`],
      ['أين يبحث المُوظِّف عن سير ذاتية في المعلوماتية؟', `${join(CV, 'و')} تذكر بحثاً في السير الذاتية أو دليلاً للملفات.`],
      ['أي مكتب توظيف لملفات المعلوماتية في الجزائر؟', 'من بين المكاتب التي استطعنا قراءة موقعها، Pentabell هو الوحيد الذي يذكر المعلوماتية والاتصالات بين القطاعات التي يخدمها في الجزائر؛ والمكاتب الأخرى التي فتحناها لم تذكر ملفات في المعلوماتية.'],
      ['ما هي المواقع التي تقترح اختبارات للمترشحين؟', `${join(TESTS, 'و')} تعلن اختبارات للمُوظِّفين.`],
      ['وماذا عن ANEM؟', 'تعرض بوابة وسيط أونلاين التابعة للوكالة الوطنية للتشغيل فضاءً لطالبي العمل وفضاءً للمُوظِّفين؛ ولم تظهر لنا العروض في تاريخ التحقق.'],
      ['كم يكلف إعلان أو مكتب توظيف؟', 'لا تنقل هذه الصفحة أي تسعيرة. اطلبوا من كل موقع أو مكتب شروطه كتابياً.'],
      ['كيف أتابع الترشحات دون أن تضيع في البريد؟', 'برنامج التوظيف يجمع الترشحات، يفرز السير الذاتية، يرسل الاستدعاءات ويحفظ رداً لكل مترشح. و Symloop، التي تنشر هذه الصفحة، تبني مثله على المقاس للمؤسسات.'],
      ['كيف أضيف موقعي أو مكتبي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف خدماتكم. الإدراج مجاني.'],
    ],
    related: [['التكنولوجيا في الجزائر: كل قوائمنا', '/tech-algerie/'], ['تكوينات الإعلام الآلي في الجزائر العاصمة', '/formation-informatique-alger/'], ['شركات المعلوماتية في الجزائر', '/entreprises-informatiques-algerie/'], ['انضم إلى Symloop', '/recrutement/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="recrutement-informatique-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded hideCity />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
