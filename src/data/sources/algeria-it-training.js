// Verified dataset: IT and digital training providers in Algiers (and five in other cities).
//
// Method: each fact below was read on the provider's own website on the date in VERIFIED_ON;
// `url` is the page that describes the courses. What a site does not state is left out. Prices,
// fees, student counts, placement rates and salaries are never reported, no trainer is named,
// and nothing here explains how a diploma is recognised: `approval` only records that the
// provider's own site states an approval. No ranking. To correct or add an entry:
// contact@symloop.com.
//
// focus:    builder | school (diploma or multi-month programmes) | centre (short courses and
//           certifications) | academy (training run by a company)
// city:     commune as the site states it (shown as written)
// services: topics (web, mobile, data, ai, cybersecurity, networks, cloud, design, office,
//           marketing), formats (online, evenings, companies) and approval / vendor (prepares
//           vendor certifications such as Cisco, CompTIA, PECB)
// Entries without a `note` are verified but not shown on the page (ten per list).

export const VERIFIED_ON = '2026-11-26';

export const IT_TRAINING = [
  { name: 'Symloop', url: 'https://symloop.com/learning/', city: 'alger', focus: 'builder', self: true, services: ['web', 'mobile', 'ai'],
    note: { fr: 'Éditeur de cette liste. Société de logiciel dont la page Symloop Academy présente des formations en développement web, mobile, back-end, IoT et IA, avec des projets pratiques ; elle construit aussi des plateformes de formation en ligne pour les écoles.', en: 'Publisher of this list. A software company whose Symloop Academy page presents courses in web, mobile, back-end, IoT and AI development, with practical projects; it also builds online learning platforms for schools.', ar: 'ناشر هذه القائمة. شركة برمجيات تعرض صفحتها Symloop Academy تكوينات في تطوير الويب، الجوال، الخوادم، إنترنت الأشياء والذكاء الاصطناعي، بمشاريع تطبيقية؛ وتبني أيضاً منصات تكوين عبر الإنترنت للمدارس.' } },
  { name: 'Alcodefi', url: 'https://www.alcodefi.com/product/details/id/273', city: 'Rouiba', focus: 'centre', services: ['data', 'office', 'cybersecurity', 'companies'],
    note: { fr: 'Organisme de formation pour les entreprises et les banques qui annonce des sessions inter-entreprises en Power BI, en tableaux de bord Excel et en ISO 27001 Lead Auditor.', en: 'Training provider for companies and banks announcing inter-company sessions in Power BI, Excel dashboards and ISO 27001 Lead Auditor.', ar: 'هيئة تكوين للمؤسسات والبنوك تعلن دورات بين المؤسسات في Power BI، لوحات القيادة على Excel و ISO 27001 Lead Auditor.' } },
  { name: 'BrainerX', url: 'https://www.brainerx.com/', city: 'Alger Centre', focus: 'centre', services: ['ai', 'cybersecurity', 'web', 'mobile', 'design', 'marketing', 'vendor'],
    note: { fr: 'Le site énumère des formations en IA, en cybersécurité, en développement web et mobile et en UI/UX ; sa formation en cybersécurité indique la préparation à la certification CompTIA Security+. Il cite aussi Constantine et Oran.', en: 'The site lists courses in AI, cybersecurity, web and mobile development and UI/UX; its cybersecurity course states CompTIA Security+ preparation. It also names Constantine and Oran.', ar: 'يذكر الموقع تكوينات في الذكاء الاصطناعي، الأمن السيبراني، تطوير الويب والجوال و UI/UX؛ ويذكر تكوين الأمن السيبراني التحضير لشهادة CompTIA Security+. ويذكر أيضاً قسنطينة ووهران.' } },
  { name: 'CETI', url: 'https://ceti.dz/domaine-it/', city: 'Birkhadem', focus: 'centre', services: ['office', 'web', 'ai', 'networks', 'cybersecurity', 'approval'],
    note: { fr: 'Le site présente un centre agréé selon lui, dont le domaine informatique couvre la bureautique, le développement web et d’applications, l’IA, les systèmes et réseaux et la cybersécurité.', en: 'The site presents a centre it describes as state-approved, whose IT area covers office software, web and application development, AI, systems and networks, and cybersecurity.', ar: 'يقدّم الموقع مركزاً معتمداً حسب قوله، يغطي مجاله المعلوماتي المكتبية، تطوير الويب والتطبيقات، الذكاء الاصطناعي، الأنظمة والشبكات والأمن السيبراني.' } },
  { name: 'Code213', url: 'https://code213.tech/fr', city: 'Val d’Hydra', focus: 'school', services: ['web', 'data', 'ai', 'cybersecurity', 'marketing', 'office', 'online', 'companies', 'approval'],
    note: { fr: 'Le site cite un agrément du ministère de la Formation professionnelle et énumère des BTS en science des données, cybersécurité, développement full stack et marketing, des bootcamps et des formations pour les entreprises.', en: 'The site cites a vocational training ministry approval and lists BTS tracks in data science, cybersecurity, full-stack development and marketing, plus bootcamps and corporate training.', ar: 'يذكر الموقع اعتماداً من وزارة التكوين المهني ويعدّد شهادات BTS في علم البيانات، الأمن السيبراني، التطوير الشامل والتسويق، إضافة إلى دورات مكثفة وتكوينات للمؤسسات.' } },
  { name: 'IFAG Higher Institute', url: 'https://ifag.edu.dz/licence-en-informatique/', city: 'Hydra', focus: 'school', services: ['web', 'mobile', 'data', 'ai', 'cybersecurity', 'cloud', 'networks', 'approval'],
    note: { fr: 'Institut supérieur privé qui cite une reconnaissance du ministère de l’Enseignement supérieur et présente une licence en informatique sur trois ans : programmation, réseaux, cybersécurité, IA et cloud.', en: 'Private higher institute citing higher education ministry recognition, presenting a three-year computing licence: programming, networks, cybersecurity, AI and cloud.', ar: 'معهد عالٍ خاص يذكر اعترافاً من وزارة التعليم العالي ويعرض ليسانس في الإعلام الآلي على ثلاث سنوات: البرمجة، الشبكات، الأمن السيبراني، الذكاء الاصطناعي والسحابة.' } },
  { name: 'Inet Academy', url: 'https://inet.dz/inet-academy/', city: 'Hydra', focus: 'centre', services: ['cybersecurity', 'approval', 'vendor'],
    note: { fr: 'Le site présente un centre de cybersécurité agréé selon lui et partenaire PECB, avec des formations ISO 27001 et 22301, SOC, tests d’intrusion et investigation numérique.', en: 'The site presents a cybersecurity centre it describes as approved and a PECB partner, with ISO 27001 and 22301, SOC, penetration testing and digital forensics courses.', ar: 'يقدّم الموقع مركزاً للأمن السيبراني معتمداً حسب قوله وشريكاً لـ PECB، بتكوينات ISO 27001 و 22301، مراكز العمليات الأمنية، اختبارات الاختراق والتحقيق الرقمي.' } },
  { name: 'INSAG', url: 'https://insag.edu.dz/', city: 'Hydra', focus: 'school', services: ['marketing', 'ai', 'online', 'companies', 'approval'],
    note: { fr: 'École de management dont le site présente un MBA en transformation digitale et e-business et un programme exécutif en marketing digital, e-commerce et IA ; elle cite aussi Constantine.', en: 'Business school whose site presents an MBA in digital transformation and e-business and an executive programme in digital marketing, e-commerce and AI; it also names Constantine.', ar: 'مدرسة تسيير يعرض موقعها ماجستير إدارة أعمال في التحول الرقمي والأعمال الإلكترونية وبرنامجاً للإطارات في التسويق الرقمي، التجارة الإلكترونية والذكاء الاصطناعي؛ وتذكر أيضاً قسنطينة.' } },
  { name: 'INSIM', url: 'https://insim.dz/informatique/', city: 'Chéraga', focus: 'school', services: ['web', 'mobile', 'networks', 'cybersecurity', 'data', 'approval'],
    note: { fr: 'Le site décrit des cursus diplômants de trente mois en développement web et mobile, en administration et sécurité des réseaux et en bases de données, avec un stage de six mois.', en: 'The site describes thirty-month diploma tracks in web and mobile development, network administration and security, and databases, including a six-month internship.', ar: 'يصف الموقع مسارات شهادية مدتها ثلاثون شهراً في تطوير الويب والجوال، إدارة وأمن الشبكات وقواعد البيانات، مع تربص لستة أشهر.' } },
  { name: 'Royal School', url: 'http://www.royalschool.dz/formation/informatique.php', city: 'Bab Ezzouar', focus: 'centre', services: ['web', 'networks', 'cybersecurity', 'data', 'office', 'design', 'companies'],
    note: { fr: 'Le catalogue énumère des formations courtes en serveurs, réseaux, bases de données, informatique décisionnelle, programmation, web et bureautique, en sessions inter-entreprises ; le site cite aussi Ouargla.', en: 'The catalogue lists short courses in servers, networks, databases, business intelligence, programming, web and office software, as inter-company sessions; the site also names Ouargla.', ar: 'يعدّد الكتالوغ تكوينات قصيرة في الخوادم، الشبكات، قواعد البيانات، ذكاء الأعمال، البرمجة، الويب والمكتبية، في دورات بين المؤسسات؛ ويذكر الموقع أيضاً ورقلة.' } },
  // verified, not shown on the page (named in the FAQ)
  { name: 'INSIM SUP', url: 'https://www.insimsup.dz/', city: 'El Biar', focus: 'school', services: ['data', 'ai', 'approval'] },
  { name: 'BADIS AI', url: 'https://badis.ai/formation-intelligence-artificielle', city: 'Sidi Abdellah', focus: 'academy', services: ['ai', 'data', 'online', 'companies'] },
  { name: 'Ecole Winner Software', url: 'https://www.ecole-winner.com/', city: 'Oran', focus: 'school', outside: true, services: ['networks', 'web', 'mobile', 'design', 'office', 'data', 'marketing', 'online', 'approval', 'vendor'] },
  { name: 'IFD Oran', url: 'https://www.ifdoran.net/', city: 'Oran', focus: 'centre', outside: true, services: ['office', 'data', 'web', 'networks', 'cybersecurity', 'cloud', 'design', 'online', 'vendor'] },
  { name: 'Nova Digital Academy', url: 'https://novadigitalacademy.dz/', city: 'Tizi Ouzou', focus: 'school', outside: true, services: ['cybersecurity', 'marketing', 'web', 'ai', 'design', 'office', 'companies', 'approval'] },
  { name: 'Cyber Tech Academy', url: 'https://ctadz.org/', city: 'Tipaza', focus: 'centre', outside: true, services: ['office', 'cybersecurity', 'data', 'web', 'ai', 'networks', 'cloud', 'evenings', 'vendor'] },
  { name: 'New Skills Generation', url: 'https://www.new-skills-generation.dz/formation/', city: 'Tizi Ouzou', focus: 'centre', outside: true, services: ['office', 'networks', 'data', 'ai', 'marketing', 'web', 'design'] },
];

// The nine shown beside the publisher: providers in the wilaya of Algiers whose site loaded,
// shows activity since 2025 and describes IT courses open to the public or to companies.
export const TOP_TRAINING = ['Alcodefi', 'BrainerX', 'CETI', 'Code213', 'IFAG Higher Institute', 'Inet Academy', 'INSAG', 'INSIM', 'Royal School'];
