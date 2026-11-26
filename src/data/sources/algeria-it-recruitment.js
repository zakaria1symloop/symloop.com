// Verified dataset: where IT jobs in Algeria are advertised and recruited (job sites, talent
// platforms, recruitment firms, the public employment service).
//
// Method: each fact below was read on the organisation's own website on the date in VERIFIED_ON;
// `url` is the page read (IT category or recruitment services). What a site does not state is
// left out. Fees, salaries, numbers of ads, candidates or companies are never reported, no person
// is named, and no labour-law rule is stated. No ranking.
// To correct or add an entry: contact@symloop.com.
//
// focus:    builder | job_board | talent_platform | agency | public
// services: it_category (IT category or filter), it_search (IT ads found by search), internships,
//           cv_database (employers search CVs), employer_posting, headhunting, assessment (tests),
//           outsourcing (staff placed at the client), freelance, mobile_app, job_alerts
// Entries without a `note` are verified but not shown on the page (ten per list).

export const VERIFIED_ON = '2026-11-26';

export const IT_RECRUITMENT = [
  { name: 'Symloop', url: 'https://symloop.com/recrutement/', focus: 'builder', self: true, services: ['employer_posting', 'custom'],
    note: { fr: 'Éditeur de cette liste. Société de logiciel à Alger et à Sétif dont la page carrières présente ses postes et reçoit les candidatures avec CV en ligne ; elle construit aussi des logiciels de recrutement sur mesure pour les entreprises.', en: 'Publisher of this list. A software company in Algiers and Sétif whose careers page presents its openings and takes applications with a CV online; it also builds custom recruitment software for companies.', ar: 'ناشر هذه القائمة. شركة برمجيات في الجزائر العاصمة وسطيف تعرض صفحة التوظيف لديها مناصبها وتستقبل الترشحات مع السيرة الذاتية عبر الإنترنت؛ وتبني أيضاً برمجيات توظيف على المقاس للمؤسسات.' } },
  { name: 'Bayt.com', url: 'https://www.bayt.com/en/algeria/jobs/', focus: 'job_board', services: ['it_search', 'mobile_app'],
    note: { fr: 'Page Algérie du site d’emploi Bayt, dont les annonces comprennent des postes d’ingénierie logicielle et de produit technique en Algérie ; une application mobile est proposée.', en: 'Algeria page of the Bayt job site, whose ads include software engineering and technical product roles in Algeria; a mobile app is offered.', ar: 'صفحة الجزائر في موقع التوظيف Bayt، تشمل إعلاناتها مناصب في هندسة البرمجيات والمنتجات التقنية في الجزائر؛ ويُقترح تطبيق للهاتف.' } },
  { name: 'DZfreelance', url: 'https://www.dzfreelance.com/freelances?lang=fr', focus: 'talent_platform', services: ['it_category', 'freelance', 'employer_posting', 'cv_database'],
    note: { fr: 'Plateforme de freelances en informatique en Algérie : les entreprises décrivent une mission ou consultent un annuaire public de profils (développement, réseaux, cloud, données, cybersécurité).', en: 'Platform for IT freelancers in Algeria: companies describe a mission or browse a public directory of profiles (development, networks, cloud, data, cybersecurity).', ar: 'منصة للمستقلين في المعلوماتية في الجزائر: تصف المؤسسات مهمة أو تتصفح دليلاً عاماً للملفات (التطوير، الشبكات، السحابة، البيانات، الأمن السيبراني).' } },
  { name: 'Emploitic', by: 'Emploitic SPA', url: 'https://www.emploitic.com/offres-d-emploi?profession=a0d04378f37973ffa3b2aa8b3e27a3f0a98de06d', focus: 'job_board', services: ['it_category', 'employer_posting', 'cv_database', 'assessment', 'headhunting'],
    note: { fr: 'Site d’emploi algérien basé à Draria, avec une catégorie « Informatique, Systèmes d’Information, Internet » ; son espace recruteurs annonce la publication d’offres, une CVthèque, des tests et un lien vers la chasse de têtes.', en: 'Algerian job site based in Draria, with an “IT, Information Systems, Internet” category; its recruiter area lists job posting, a CV database, tests and a link to headhunting.', ar: 'موقع توظيف جزائري مقره الدرارية، بفئة «المعلوماتية، أنظمة المعلومات، الإنترنت»؛ ويعلن فضاء المُوظِّفين نشر العروض، قاعدة سير ذاتية، اختبارات ورابطاً نحو البحث عن الكفاءات.' } },
  { name: 'ITTalents DZ Pro', url: 'https://ittalentsdzpro.com/', focus: 'talent_platform', services: ['employer_posting', 'cv_database', 'internships', 'freelance'],
    note: { fr: 'Se présente comme une plateforme de talents en informatique en Algérie, avec publication d’offres, annuaire de talents, stages et missions en freelance.', en: 'Presents itself as an IT talent platform in Algeria, with job posting, a talent directory, internships and freelance missions.', ar: 'تقدّم نفسها كمنصة للكفاءات في المعلوماتية في الجزائر، مع نشر العروض، دليل الكفاءات، التربصات والمهام الحرة.' } },
  { name: 'Pentabell', url: 'https://www.pentabell.com/ultimate-guide-to-hiring-employees-in-algeria/', focus: 'agency', services: ['headhunting', 'outsourcing'],
    note: { fr: 'Cabinet de recrutement et de mise à disposition de personnel basé à Paris, dont le site indique un bureau à Hydra (Alger) et cite l’informatique et les télécoms parmi les secteurs servis en Algérie.', en: 'Recruitment and staffing firm based in Paris, whose site states an office in Hydra (Algiers) and names IT and telecom among the industries it serves in Algeria.', ar: 'مكتب توظيف ووضع الموظفين تحت التصرف مقره باريس، يذكر موقعه مكتباً في حيدرة (الجزائر العاصمة) ويذكر المعلوماتية والاتصالات بين القطاعات التي يخدمها في الجزائر.' } },
  { name: 'Talantys', url: 'https://talantys.com/', focus: 'job_board', services: ['it_category', 'employer_posting', 'job_alerts', 'freelance'],
    note: { fr: 'Portail de recrutement algérien qui rapproche les CV des besoins des employeurs avec l’IA, selon son site ; il cite le secteur « Technologie & IT » et propose un espace freelance.', en: 'Algerian recruitment portal that matches CVs with employer needs using AI, per its site; it names a “Technology & IT” sector and offers a freelance area.', ar: 'بوابة توظيف جزائرية تقارب بين السير الذاتية واحتياجات المُوظِّفين بالذكاء الاصطناعي حسب موقعها؛ وتذكر قطاع «التكنولوجيا والمعلوماتية» وتقترح فضاءً للمستقلين.' } },
  { name: 'Talent.com Algérie', url: 'https://dz.talent.com/jobs?l=Algeria&k=informatique', focus: 'job_board', services: ['it_search'],
    note: { fr: 'Édition algérienne de Talent.com ; une recherche « informatique » renvoie des annonces en informatique situées à Alger.', en: 'Algerian edition of Talent.com; a search for “informatique” returns IT ads located in Algiers.', ar: 'النسخة الجزائرية من Talent.com؛ والبحث عن «informatique» يُظهر إعلانات في المعلوماتية في الجزائر العاصمة.' } },
  { name: 'Tanqeeb Algérie', url: 'https://algerie.tanqeeb.com/ar', focus: 'job_board', services: ['it_category', 'employer_posting', 'cv_database', 'mobile_app'],
    note: { fr: 'Section Algérie du site d’emploi Tanqeeb, avec une catégorie d’emplois en technologies de l’information et ses sous-catégories ; les employeurs peuvent publier et rechercher des candidats.', en: 'Algeria section of the Tanqeeb job site, with an IT jobs category and sub-categories; employers can post jobs and search candidates.', ar: 'قسم الجزائر في موقع التوظيف تنقيب، بفئة وظائف تقنية المعلومات وفئاتها الفرعية؛ ويمكن للمُوظِّفين النشر والبحث عن المترشحين.' } },
  { name: 'Trust Me', url: 'https://www.trustme.work/en', focus: 'job_board', services: ['it_category', 'employer_posting'],
    note: { fr: 'Site d’emploi limité aux métiers de l’informatique en Algérie, avec des offres à Alger, Oran et Constantine et un bouton pour publier une offre.', en: 'Job site limited to IT roles in Algeria, with offers in Algiers, Oran and Constantine and a button to publish a job offer.', ar: 'موقع توظيف مقتصر على مهن المعلوماتية في الجزائر، بعروض في الجزائر العاصمة، وهران وقسنطينة وزر لنشر عرض عمل.' } },
  // verified, not shown on the page (named in the FAQ)
  { name: 'Emploi Partner', url: 'https://www.emploipartner.com/', focus: 'job_board', services: ['employer_posting', 'assessment', 'outsourcing'] },
  { name: 'ANEM Wassit Online', by: 'Agence Nationale de l’Emploi', url: 'https://wassitonline.anem.dz/', focus: 'public', services: ['employer_posting'] },
];

// The nine shown beside the publisher: sites whose page loaded and showed IT ads, an IT category
// or IT profiles in Algeria, with activity since 2025.
export const TOP_IT_RECRUITMENT = ['Bayt.com', 'DZfreelance', 'Emploitic', 'ITTalents DZ Pro', 'Pentabell', 'Talantys', 'Talent.com Algérie', 'Tanqeeb Algérie', 'Trust Me'];
