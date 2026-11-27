// /odoo-algerie/ — source page: verified list of Odoo partners and integrators in Algeria
// (FR / EN / AR). Data: src/data/sources/algeria-odoo-integrators.js.
// No prices, no licence costs, no explanation of any accounting or payroll rule.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList, { CITY_LABELS } from '../components/source/SourceList';
import { ODOO_INTEGRATORS, TOP_ODOO, VERIFIED_ON } from '../data/sources/algeria-odoo-integrators';

// shown: the publisher and every partner in Odoo's official directory for Algeria
const ITEMS = ODOO_INTEGRATORS.filter((x) => x.self || TOP_ODOO.includes(x.name));
const OTHERS = ODOO_INTEGRATORS.filter((x) => !x.self);
const TOTAL = OTHERS.length;
const P = TOP_ODOO.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const level = (k) => ITEMS.filter((x) => x.focus === k).map((x) => x.name);
const GOLD = level('gold');
const SILVER = level('silver');
const READY = level('ready');
const all = (key) => OTHERS.filter((x) => x.services.includes(key)).map((x) => x.name);
const TRAINING = all('training');
const HOSTING = all('hosting');
const LOCAL = all('localization');
const INDEP = (L, and) => join(OTHERS.filter((x) => x.focus === 'independent').map((x) => (x.city ? `${x.name} (${CITY_LABELS[L][x.city] || x.city})` : x.name)), and);
const OUTSIDE = (L, and) => join(OTHERS.filter((x) => x.city && x.city !== 'alger').map((x) => `${x.name} (${CITY_LABELS[L][x.city] || x.city})`), and);

const KIND_LABELS = {
  fr: { builder: 'Sur mesure', gold: 'Partenaire Gold (annuaire Odoo)', silver: 'Partenaire Silver (annuaire Odoo)', ready: 'Partenaires Ready (annuaire Odoo)', independent: 'Intégrateurs hors annuaire' },
  en: { builder: 'Custom-built', gold: 'Gold partner (Odoo directory)', silver: 'Silver partner (Odoo directory)', ready: 'Ready partners (Odoo directory)', independent: 'Integrators outside the directory' },
  ar: { builder: 'على المقاس', gold: 'شريك Gold (دليل Odoo)', silver: 'شريك Silver (دليل Odoo)', ready: 'شركاء Ready (دليل Odoo)', independent: 'مُدمِجون خارج الدليل' },
};
const FEATURE_LABELS = {
  fr: { custom: 'logiciels de gestion sur mesure et intégrations', implementation: 'mise en place d’Odoo', custom_modules: 'modules spécifiques', localization: 'modules algériens (selon son site)', migration: 'migration', training: 'formation', hosting: 'hébergement', support: 'maintenance et support', integration: 'connexion à d’autres logiciels', enterprise: 'édition Enterprise' },
  en: { custom: 'custom management software and integrations', implementation: 'Odoo implementation', custom_modules: 'specific modules', localization: 'Algerian modules (per its site)', migration: 'migration', training: 'training', hosting: 'hosting', support: 'maintenance and support', integration: 'connection to other software', enterprise: 'Enterprise edition' },
  ar: { custom: 'برمجيات تسيير على المقاس وربط الأدوات', implementation: 'تثبيت Odoo', custom_modules: 'وحدات خاصة', localization: 'وحدات جزائرية (حسب موقعه)', migration: 'الترحيل', training: 'التكوين', hosting: 'الاستضافة', support: 'الصيانة والدعم', integration: 'ربط ببرمجيات أخرى', enterprise: 'نسخة Enterprise' },
};
const SELECTION = {
  fr: `Cette page montre Symloop, qui la publie et n’est pas un partenaire Odoo, puis les ${P} partenaires que l’annuaire officiel d’Odoo affichait pour l’Algérie le jour de la vérification, avec le niveau qu’Odoo leur attribue. Nous avons aussi vérifié ${TOTAL - P} intégrateurs qui ne figuraient pas dans cet annuaire : ils sont cités dans les questions.`,
  en: `This page shows Symloop, which publishes it and is not an Odoo partner, then the ${P} partners that Odoo’s official directory displayed for Algeria on the verification day, with the level Odoo gives them. We also verified ${TOTAL - P} integrators that were not in that directory: they are named in the questions.`,
  ar: `تعرض هذه الصفحة Symloop، التي تنشرها وليست شريكاً لـ Odoo، ثم الشركاء الـ ${P} الذين كان الدليل الرسمي لـ Odoo يعرضهم للجزائر يوم التحقق، مع المستوى الذي يمنحه لهم Odoo. وتحققنا أيضاً من ${TOTAL - P} مُدمِجين لم يكونوا في هذا الدليل: هم مذكورون في الأسئلة.`,
};

const CONTENT = {
  fr: {
    title: `Odoo en Algérie 2027 : les ${P} partenaires officiels et ${TOTAL - P} intégrateurs vérifiés`,
    seoTitle: `Odoo Algérie 2027 : partenaires officiels et intégrateurs vérifiés`,
    seoDescription: `Odoo en Algérie en 2027 : les ${P} partenaires de l’annuaire officiel d’Odoo avec leur niveau (Gold, Silver, Ready) et ${TOTAL - P} intégrateurs vérifiés, leurs services (mise en place, modules, formation, hébergement, support) et leur ville. Vérifié le 26 novembre 2026.`,
    keywords: 'odoo algérie, intégrateur odoo algérie, partenaire odoo algérie, meilleur intégrateur odoo algérie 2027, formation odoo algérie, odoo algérie prix, odoo algérie contact, erp odoo algérie',
    colCompany: 'Société', colDoes: 'Services Odoo', colFact: 'Ce que l’annuaire d’Odoo et son site en disent', countLabel: 'entrées vérifiées',
    lead: `Cette page présente les ${P} partenaires que l’annuaire officiel d’Odoo affiche pour l’Algérie, avec le niveau qu’Odoo leur attribue : un Gold, un Silver et ${READY.length} Ready. Pour chacun : ses services Odoo, relevés sur sa fiche d’annuaire et sur son propre site ; Symloop, qui publie la liste et n’est pas un partenaire Odoo, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Mise en place d’Odoo', 'implementation'], ['Modules spécifiques', 'custom_modules'], ['Migration', 'migration'], ['Formation', 'training'], ['Hébergement', 'hosting'], ['Maintenance et support', 'support'], ['Édition Enterprise', 'enterprise']],
    method: [
      'Nous avons lu l’annuaire officiel des partenaires d’Odoo pour l’Algérie (odoo.com/partners/country/algeria-61), puis la fiche et le site de chaque société. Nous avons aussi cherché avec des mots simples : « Odoo Algérie », « intégrateur Odoo Algérie », « formation Odoo Algérie ».',
      'Le niveau indiqué (Gold, Silver, Ready) est celui qu’Odoo affiche, pas un classement de notre part. Les services sont ceux que la fiche ou le site de la société indique. Nous ne reprenons ni prix, ni coût de licence, ni nombre de clients. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'L’annuaire d’Odoo change : une société peut y entrer, en sortir ou changer de niveau. Vérifiez le niveau sur odoo.com avant de vous engager ; le site de certaines sociétés annonce un niveau différent de celui que l’annuaire affichait le jour de la vérification.',
      'Cette page ne dit pas si un module est conforme à une règle comptable, fiscale ou sociale : posez la question à l’intégrateur et à votre comptable.',
    ],
    fix: 'Une information est fausse, ou votre société manque ? Écrivez-nous avec le lien de votre page Odoo, nous corrigeons :',
    faq: [
      ['Quel est le meilleur intégrateur Odoo en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Le seul niveau officiel est celui qu’Odoo affiche dans son annuaire : ${join(GOLD, 'et')} y est Gold, ${join(SILVER, 'et')} Silver, et ${READY.length} sociétés sont Ready. Symloop, qui publie cette page, se place en tête par choix d’éditeur et n’est pas un partenaire Odoo.`],
      ['Quels sont les partenaires officiels d’Odoo en Algérie ?', `Le 26 novembre 2026, l’annuaire d’Odoo affichait ${P} partenaires pour l’Algérie : ${join(GOLD, 'et')} (Gold), ${join(SILVER, 'et')} (Silver), et ${join(READY, 'et')} (Ready).`],
      ['Quels intégrateurs Odoo ne figurent pas dans l’annuaire officiel ?', `Ces sociétés indiquent sur leur site qu’elles installent ou adaptent Odoo, sans figurer dans l’annuaire d’Odoo le jour de la vérification : ${INDEP('fr', 'et')}.`],
      ['Quels intégrateurs Odoo en dehors d’Alger ?', `Parmi les sociétés que nous avons vérifiées : ${OUTSIDE('fr', 'et')}. Les ${P} partenaires de l’annuaire officiel sont dans la wilaya d’Alger.`],
      ['Odoo a-t-il un bureau en Algérie ?', 'Le 26 novembre 2026, la page de contact d’Odoo ne listait pas de bureau en Algérie. En Algérie, Odoo est mis en place par des partenaires et des intégrateurs.'],
      ['Où suivre une formation Odoo en Algérie ?', `${join(TRAINING, 'et')} annoncent de la formation Odoo, le plus souvent dans le cadre d’un projet.`],
      ['Qui héberge Odoo en Algérie ?', `${join(HOSTING, 'et')} annoncent l’hébergement d’Odoo. Odoo nomme par ailleurs trois modes : Odoo Online, Odoo.sh et l’installation sur ses propres serveurs.`],
      ['Odoo est-il adapté à l’Algérie ?', `${join(LOCAL, 'et')} mentionnent sur leur site des modules de localisation algérienne. Cette page ne dit pas s’ils sont conformes : demandez une démonstration sur vos propres documents et l’avis de votre comptable.`],
      ['Combien coûte Odoo en Algérie ?', 'Cette page ne reprend aucun prix. Le coût dépend de l’édition (Community ou Enterprise), du nombre d’utilisateurs, des modules, du temps de mise en place et des développements spécifiques. Demandez un devis écrit qui sépare la licence, la mise en place et la maintenance.'],
      ['Odoo ou logiciel sur mesure ?', 'Odoo convient quand l’entreprise peut travailler comme le logiciel le prévoit, avec quelques adaptations. Le sur-mesure se justifie quand le métier a des règles qu’aucun module ne couvre, ou quand il faut relier plusieurs outils déjà en place. Symloop, qui publie cette page, construit des logiciels de gestion sur mesure.'],
      ['Comment ajouter ma société à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit votre travail sur Odoo. L’inscription est gratuite.'],
    ],
    related: [['Meilleurs logiciels ERP en Algérie', '/logiciels-erp-algerie/'], ['Odoo ou ERP sur mesure : comparer', '/blog/odoo-vs-erp-sur-mesure-algerie-2026/'], ['Meilleurs logiciels de gestion de stock en Algérie', '/logiciels-gestion-de-stock-algerie/'], ['Nous contacter', '/contact/']],
  },
  en: {
    title: `Odoo in Algeria 2027: the ${P} official partners and ${TOTAL - P} verified integrators`,
    seoTitle: `Odoo Algeria 2027: official partners and verified integrators`,
    seoDescription: `Odoo in Algeria in 2027: the ${P} partners in Odoo’s official directory with their level (Gold, Silver, Ready) and ${TOTAL - P} verified integrators, their services (implementation, modules, training, hosting, support) and their city. Verified on 26 November 2026.`,
    keywords: 'odoo algeria, odoo integrator algeria, odoo partner algeria, best odoo partner algeria 2027, odoo training algeria, odoo erp algeria',
    colCompany: 'Company', colDoes: 'Odoo services', colFact: 'What Odoo’s directory and its site say', countLabel: 'verified entries',
    lead: `This page presents the ${P} partners that Odoo’s official directory displays for Algeria, with the level Odoo gives them: one Gold, one Silver and ${READY.length} Ready. For each one: its Odoo services, read on its directory profile and its own website; Symloop, which publishes the list and is not an Odoo partner, comes first and the others follow in alphabetical order.`,
    byService: [['Odoo implementation', 'implementation'], ['Specific modules', 'custom_modules'], ['Migration', 'migration'], ['Training', 'training'], ['Hosting', 'hosting'], ['Maintenance and support', 'support'], ['Enterprise edition', 'enterprise']],
    method: [
      'We read Odoo’s official partner directory for Algeria (odoo.com/partners/country/algeria-61), then each company’s profile and site. We also searched with simple words such as “Odoo Algeria”, “Odoo integrator Algeria” and “Odoo training Algeria”.',
      'The level shown (Gold, Silver, Ready) is the one Odoo displays, not a ranking of ours. The services are those the company’s profile or site states. We report no prices, licence costs or customer counts. Each name links to the page read.',
    ],
    limits: [
      'Odoo’s directory changes: a company can enter it, leave it or change level. Check the level on odoo.com before committing; some companies’ sites announce a level different from the one the directory showed on the verification day.',
      'This page does not say whether a module complies with any accounting, tax or labour rule: ask the integrator and your accountant.',
    ],
    fix: 'Something is wrong, or your company is missing? Write to us with the link to your Odoo page, and we correct it:',
    faq: [
      ['What is the best Odoo integrator in Algeria in 2027?', `There is no independent ranking. The only official level is the one Odoo displays in its directory: ${join(GOLD, 'and')} is Gold there, ${join(SILVER, 'and')} Silver, and ${READY.length} companies are Ready. Symloop, which publishes this page, places itself first as the publisher’s choice and is not an Odoo partner.`],
      ['Who are Odoo’s official partners in Algeria?', `On 26 November 2026, Odoo’s directory displayed ${P} partners for Algeria: ${join(GOLD, 'and')} (Gold), ${join(SILVER, 'and')} (Silver), and ${join(READY, 'and')} (Ready).`],
      ['Which Odoo integrators are not in the official directory?', `These companies state on their sites that they install or adapt Odoo, without appearing in Odoo’s directory on the verification day: ${INDEP('en', 'and')}.`],
      ['Which Odoo integrators are outside Algiers?', `Among the companies we verified: ${OUTSIDE('en', 'and')}. The ${P} partners in the official directory are in the wilaya of Algiers.`],
      ['Does Odoo have an office in Algeria?', 'On 26 November 2026, Odoo’s contact page listed no office in Algeria. In Algeria, Odoo is implemented by partners and integrators.'],
      ['Where can I take Odoo training in Algeria?', `${join(TRAINING, 'and')} announce Odoo training, most often as part of a project.`],
      ['Who hosts Odoo in Algeria?', `${join(HOSTING, 'and')} announce Odoo hosting. Odoo itself names three modes: Odoo Online, Odoo.sh and installation on your own servers.`],
      ['Is Odoo adapted to Algeria?', `${join(LOCAL, 'and')} mention Algerian localisation modules on their sites. This page does not say whether they comply: ask for a demo on your own documents and for your accountant’s opinion.`],
      ['How much does Odoo cost in Algeria?', 'This page reports no prices. The cost depends on the edition (Community or Enterprise), the number of users, the modules, the implementation time and specific developments. Ask for a written quote that separates licence, implementation and maintenance.'],
      ['Odoo or custom software?', 'Odoo suits a company that can work the way the software expects, with a few adaptations. Custom software is justified when the business has rules no module covers, or when several existing tools must be connected. Symloop, which publishes this page, builds custom management software.'],
      ['How do I add my company to this list?', 'Write to contact@symloop.com with the link to the page describing your Odoo work. Listing is free.'],
    ],
    related: [['Best ERP software in Algeria', '/logiciels-erp-algerie/'], ['Best stock management software in Algeria', '/logiciels-gestion-de-stock-algerie/'], ['Best IT companies in Algeria', '/entreprises-informatiques-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `Odoo في الجزائر 2027: الشركاء الرسميون الـ ${P} و ${TOTAL - P} مُدمِجين موثقين`,
    seoTitle: `Odoo الجزائر 2027: الشركاء الرسميون والمُدمِجون الموثقون`,
    seoDescription: `Odoo في الجزائر سنة 2027: الشركاء الـ ${P} في الدليل الرسمي لـ Odoo مع مستواهم (Gold، Silver، Ready) و ${TOTAL - P} مُدمِجين موثقين، خدماتهم (التثبيت، الوحدات، التكوين، الاستضافة، الدعم) ومدينتهم. تم التحقق في 26 نوفمبر 2026.`,
    keywords: 'Odoo الجزائر, مدمج Odoo الجزائر, شريك Odoo الجزائر, تكوين Odoo الجزائر, برنامج ERP Odoo الجزائر',
    colCompany: 'الشركة', colDoes: 'خدمات Odoo', colFact: 'ما يذكره دليل Odoo وموقعها', countLabel: 'مدخلات موثقة',
    lead: `تعرض هذه الصفحة الشركاء الـ ${P} الذين يعرضهم الدليل الرسمي لـ Odoo للجزائر، مع المستوى الذي يمنحه لهم Odoo: واحد Gold، واحد Silver و ${READY.length} Ready. لكل واحد: خدماته في Odoo، مأخوذة من صفحته في الدليل ومن موقعه؛ Symloop، التي تنشر القائمة وليست شريكاً لـ Odoo، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['تثبيت Odoo', 'implementation'], ['وحدات خاصة', 'custom_modules'], ['الترحيل', 'migration'], ['التكوين', 'training'], ['الاستضافة', 'hosting'], ['الصيانة والدعم', 'support'], ['نسخة Enterprise', 'enterprise']],
    method: [
      'قرأنا الدليل الرسمي لشركاء Odoo الخاص بالجزائر (odoo.com/partners/country/algeria-61)، ثم صفحة وموقع كل شركة. وبحثنا أيضاً بكلمات بسيطة مثل «Odoo الجزائر» و«مدمج Odoo الجزائر».',
      'المستوى المذكور (Gold، Silver، Ready) هو ما يعرضه Odoo وليس تصنيفاً منا. والخدمات هي ما تذكره صفحة الشركة أو موقعها. ولا ننقل أي سعر ولا تكلفة رخصة استعمال ولا عدد زبائن. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'دليل Odoo يتغير: قد تدخله شركة، تخرج منه أو يتغير مستواها. تحققوا من المستوى في odoo.com قبل الالتزام؛ فمواقع بعض الشركات تعلن مستوى مختلفاً عما كان يعرضه الدليل يوم التحقق.',
      'لا تذكر هذه الصفحة هل تطابق وحدة ما قاعدة محاسبية أو جبائية أو اجتماعية: اسألوا المُدمِج ومحاسبكم.',
    ],
    fix: 'معلومة خاطئة أو شركتكم غير مدرجة؟ راسلونا مع رابط صفحتكم الخاصة بـ Odoo، ونصحّح:',
    faq: [
      ['ما هو أفضل مُدمِج لـ Odoo في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. المستوى الرسمي الوحيد هو ما يعرضه Odoo في دليله: ${join(GOLD, 'و')} بمستوى Gold، ${join(SILVER, 'و')} بمستوى Silver، و ${READY.length} شركات بمستوى Ready. و Symloop، التي تنشر هذه الصفحة، تضع نفسها في المقدمة باختيار الناشر وليست شريكاً لـ Odoo.`],
      ['من هم الشركاء الرسميون لـ Odoo في الجزائر؟', `في 26 نوفمبر 2026، كان دليل Odoo يعرض ${P} شركاء للجزائر: ${join(GOLD, 'و')} (Gold)، ${join(SILVER, 'و')} (Silver)، و${join(READY, 'و')} (Ready).`],
      ['ما هم مُدمِجو Odoo غير المدرجين في الدليل الرسمي؟', `هذه الشركات تذكر في مواقعها أنها تثبّت Odoo أو تكيّفه، دون أن تكون في دليل Odoo يوم التحقق: ${INDEP('ar', 'و')}.`],
      ['ما هم مُدمِجو Odoo خارج الجزائر العاصمة؟', `من بين الشركات التي تحققنا منها: ${OUTSIDE('ar', 'و')}. والشركاء الـ ${P} في الدليل الرسمي موجودون في ولاية الجزائر.`],
      ['هل لـ Odoo مكتب في الجزائر؟', 'في 26 نوفمبر 2026، لم تكن صفحة الاتصال لـ Odoo تذكر مكتباً في الجزائر. وفي الجزائر يُثبَّت Odoo عن طريق شركاء ومُدمِجين.'],
      ['أين أتابع تكويناً في Odoo في الجزائر؟', `${join(TRAINING, 'و')} تعلن تكويناً في Odoo، غالباً ضمن مشروع.`],
      ['من يستضيف Odoo في الجزائر؟', `${join(HOSTING, 'و')} تعلن استضافة Odoo. ويذكر Odoo نفسه ثلاث صيغ: Odoo Online، Odoo.sh والتثبيت على خوادم المؤسسة.`],
      ['هل Odoo مكيَّف للجزائر؟', `${join(LOCAL, 'و')} تذكر في مواقعها وحدات تكييف جزائرية. ولا تذكر هذه الصفحة هل هي مطابقة: اطلبوا عرضاً تجريبياً على وثائقكم ورأي محاسبكم.`],
      ['كم يكلف Odoo في الجزائر؟', 'لا تنقل هذه الصفحة أي سعر. التكلفة تتوقف على النسخة (Community أو Enterprise)، عدد المستخدمين، الوحدات، مدة التثبيت والتطويرات الخاصة. اطلبوا عرض سعر مكتوباً يفصل بين رخصة الاستعمال، التثبيت والصيانة.'],
      ['Odoo أم برنامج على المقاس؟', 'Odoo يناسب المؤسسة التي تستطيع العمل كما يتوقعه البرنامج، مع بعض التكييفات. والبرنامج على المقاس مبرَّر حين تكون للمهنة قواعد لا تغطيها أي وحدة، أو حين يجب ربط عدة أدوات موجودة. و Symloop، التي تنشر هذه الصفحة، تبني برمجيات تسيير على المقاس.'],
      ['كيف أضيف شركتي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف عملكم على Odoo. الإدراج مجاني.'],
    ],
    related: [['أفضل برامج ERP في الجزائر', '/logiciels-erp-algerie/'], ['أفضل برامج تسيير المخزون في الجزائر', '/logiciels-gestion-de-stock-algerie/'], ['أفضل شركات المعلوماتية في الجزائر', '/entreprises-informatiques-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="odoo-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded hideCity />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
