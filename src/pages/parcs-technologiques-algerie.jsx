// /parcs-technologiques-algerie/ — sourced list: technology parks and incubators run by the ANPT in
// Algeria, including the Sidi Abdellah cyberparc (FR / EN / AR).
// Data: src/data/sources/algeria-technology-parks.js. ANPT pages read in dated archive copies.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { PARKS, ARCHIVE_DATES, STEPS_URL, VERIFIED_ON } from '../data/sources/algeria-technology-parks';

const N = PARKS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const kind = (k) => PARKS.filter((x) => x.focus === k).map((x) => x.name);
const INCUB = kind('incubator');
const PROJECTS = kind('project');

const KIND_LABELS = {
  fr: { technoparc: 'Technoparc en activité', incubator: 'Incubateurs de l’ANPT', project: 'Technoparcs régionaux en projet' },
  en: { technoparc: 'Operating technology park', incubator: 'ANPT incubators', project: 'Regional technology parks in project' },
  ar: { technoparc: 'حظيرة تكنولوجية في النشاط', incubator: 'حاضنات ANPT', project: 'حظائر تكنولوجية جهوية قيد المشروع' },
};
const FEATURE_LABELS = {
  fr: { offices: 'bureaux', incubator: 'incubateur', training: 'formation', events: 'salles de conférence', domiciliation: 'domiciliation', in_project: 'projet d’infrastructure de l’ANPT' },
  en: { offices: 'offices', incubator: 'incubator', training: 'training', events: 'conference halls', domiciliation: 'business address', in_project: 'ANPT infrastructure project' },
  ar: { offices: 'مكاتب', incubator: 'حاضنة', training: 'تكوين', events: 'قاعات مؤتمرات', domiciliation: 'التوطين', in_project: 'مشروع بنية تحتية لـ ANPT' },
};
const SELECTION = {
  fr: `Cette page reprend les ${N} sites que l’ANPT présente sur son propre site : un technoparc, trois incubateurs et trois technoparcs régionaux classés parmi ses projets d’infrastructure. Le site anpt.dz ne répondait pas le 27 novembre 2026 : ses pages ont été lues dans des copies d’archive datées de ${ARCHIVE_DATES.fr}, et chaque lien mène à la copie lue. Symloop, qui publie la page, ne gère aucun parc.`,
  en: `This page lists the ${N} sites the ANPT presents on its own website: one technology park, three incubators and three regional technology parks listed among its infrastructure projects. anpt.dz did not respond on 27 November 2026: its pages were read in archive copies dated ${ARCHIVE_DATES.en}, and each link leads to the copy read. Symloop, which publishes the page, runs no park.`,
  ar: `تذكر هذه الصفحة المواقع الـ ${N} التي تعرضها ANPT في موقعها: حظيرة تكنولوجية، ثلاث حاضنات وثلاث حظائر جهوية مصنفة ضمن مشاريع البنية التحتية. ولم يستجب موقع anpt.dz يوم 27 نوفمبر 2026: فقُرئت صفحاته في نسخ أرشيفية مؤرخة من ${ARCHIVE_DATES.ar}، ورابط كل اسم يؤدي إلى النسخة المقروءة. و Symloop، التي تنشر الصفحة، لا تسيّر أي حظيرة.`,
};

const CONTENT = {
  fr: {
    title: 'Parcs technologiques en Algérie 2027 : le cyberparc de Sidi Abdellah, les incubateurs et les technoparcs régionaux de l’ANPT',
    seoTitle: 'Cyberparc Sidi Abdellah et parcs technologiques en Algérie (ANPT) 2027',
    seoDescription: `Les parcs technologiques en Algérie selon l’ANPT : le technoparc (cyberparc) de Sidi Abdellah à Rahmania, les incubateurs d’Oran et de Bordj Bou Arreridj, et les technoparcs régionaux d’Oran, Annaba et Ouargla en projet. Services annoncés et adresse de chaque site.`,
    keywords: 'cyberparc sidi abdellah, cyber parc sidi abdellah, anpt cyberparc sidi abdellah, anpt algérie, parcs technologiques algérie, technoparc algérie, technoparc oran, technoparc annaba, technoparc ouargla, incubateur anpt',
    colCompany: 'Site', colDoes: 'Type et services', colFact: 'Ce que la page de l’ANPT en dit', countLabel: 'sites de l’ANPT',
    lead: `L’ANPT, l’agence publique des parcs technologiques, présente ${N} sites en Algérie : le technoparc de Sidi Abdellah à Rahmania (Alger), appelé aussi cyberparc, qui accueille des entreprises du numérique, trois incubateurs à Oran et à Bordj Bou Arreridj, et trois technoparcs régionaux à Oran, Annaba et Ouargla classés parmi ses projets. Pour chaque site : l’adresse et les services indiqués sur la page de l’ANPT.`,
    byService: [['Bureaux', 'offices'], ['Incubateur', 'incubator'], ['Formation', 'training']],
    method: [
      'Nous avons cherché avec des mots simples : « cyberparc Sidi Abdellah », « ANPT Algérie », « technoparc Algérie », « parc technologique Algérie ». Les articles de presse ont servi de pistes ; les faits viennent des pages de l’ANPT.',
      'Nous ne reprenons ni loyer, ni surface, ni montant d’investissement, ni nombre ou nom d’entreprises hébergées, et n’expliquons aucune condition d’admission. Le statut « en projet » est celui de la page d’accueil de l’ANPT, qui range ces technoparcs dans ses projets d’infrastructure.',
    ],
    limits: [
      'Le site de l’ANPT ne répondait pas à la date de vérification : les informations peuvent avoir changé depuis les copies lues. Le site du ministère n’a pas pu être lu non plus.',
      'Cette page ne donne pas d’avis sur les parcs. Les incubateurs privés et universitaires qui ne relèvent pas de l’ANPT sont sur notre page des incubateurs.',
    ],
    fix: 'Une information a changé ? Écrivez-nous avec le lien de la page officielle, nous corrigeons :',
    faq: [
      ['Qu’est-ce que le cyberparc de Sidi Abdellah ?', 'C’est le technoparc de Sidi Abdellah, géré par l’ANPT à Rahmania (wilaya d’Alger). La page de l’ANPT le décrit comme accueillant des entreprises du numérique, avec un incubateur, un immeuble de bureaux à plusieurs locataires, des salles de formation et des salles de conférence.'],
      ['Où se trouve le cyberparc de Sidi Abdellah ?', 'À Rahmania (Sidi Abdellah), dans la wilaya d’Alger, selon la page de l’ANPT.'],
      ['Quels sont les parcs technologiques en Algérie ?', `L’ANPT présente ${N} sites : ${join(PARKS.map((x) => x.name), 'et')}.`],
      ['Quels incubateurs gère l’ANPT ?', `${join(INCUB, 'et')}, en plus de l’incubateur du technoparc de Sidi Abdellah.`],
      ['Les technoparcs d’Oran, d’Annaba et d’Ouargla sont-ils ouverts ?', `La page d’accueil de l’ANPT range ${join(PROJECTS, 'et')} parmi ses projets d’infrastructure, et leurs pages ne disent pas que des entreprises y sont installées. Pour Ouargla, la dernière annonce datée de l’ANPT remonte à janvier 2020.`],
      ['Qu’est-ce que l’ANPT ?', 'L’Agence nationale de promotion et de développement des parcs technologiques. Son site la présente comme une entreprise publique à caractère industriel et commercial créée en 2004, sous la tutelle du ministère de la Poste et des Télécommunications, basée à Sidi Abdellah et chargée de développer les parcs technologiques.'],
      ['Comment s’installer au cyberparc ou dans un incubateur de l’ANPT ?', `L’ANPT publie une page sur les démarches de création d’entreprise, qui comprend le cas de ses incubateurs (${STEPS_URL}). Cette page ne résume pas ces démarches : contactez l’ANPT.`],
      ['Combien coûte un bureau au cyberparc de Sidi Abdellah ?', 'Cette page ne reprend aucun loyer. Demandez les conditions à l’ANPT.'],
      ['Que vaut le cyberparc de Sidi Abdellah ?', 'Cette page ne donne pas d’avis : elle reprend ce que l’ANPT écrit sur chaque site. Pour un retour d’expérience, demandez aux entreprises qui y sont installées.'],
      ['Quels autres lieux pour une startup tech en Algérie ?', 'Nos pages sur les incubateurs et accélérateurs, sur les espaces de coworking à Alger et sur les startups algériennes listent d’autres lieux et acteurs, chacun vérifié sur son propre site.'],
    ],
    related: [['La tech en Algérie : toutes nos listes', '/tech-algerie/'], ['Incubateurs et accélérateurs de startups', '/incubateurs-algerie/'], ['Espaces de coworking à Alger', '/coworking-alger/'], ['Data centers en Algérie', '/data-centers-algerie/']],
  },
  en: {
    title: 'Technology parks in Algeria 2027: the Sidi Abdellah cyberparc, the ANPT incubators and regional technology parks',
    seoTitle: 'Sidi Abdellah cyberparc and technology parks in Algeria (ANPT) 2027',
    seoDescription: 'Technology parks in Algeria according to the ANPT: the Sidi Abdellah technology park (cyberparc) in Rahmania, the Oran and Bordj Bou Arreridj incubators, and the regional technology parks of Oran, Annaba and Ouargla in project. Services and address of each site.',
    keywords: 'sidi abdellah cyberparc, cyber park algiers, anpt algeria, technology parks algeria, technopark algeria, anpt incubator',
    colCompany: 'Site', colDoes: 'Type and services', colFact: 'What the ANPT page says', countLabel: 'ANPT sites',
    lead: `The ANPT, the public technology-park agency, presents ${N} sites in Algeria: the Sidi Abdellah technology park in Rahmania (Algiers), also called the cyberparc, which hosts digital companies, three incubators in Oran and Bordj Bou Arreridj, and three regional technology parks in Oran, Annaba and Ouargla listed among its projects. For each site: the address and the services stated on the ANPT page.`,
    byService: [['Offices', 'offices'], ['Incubator', 'incubator'], ['Training', 'training']],
    method: [
      'We searched with simple words such as “Sidi Abdellah cyberparc”, “ANPT Algeria”, “technology park Algeria”. Press articles were leads; the facts come from the ANPT’s pages.',
      'We report no rent, surface area, investment amount, number or names of hosted companies, and explain no admission condition. The “in project” status is the one on the ANPT home page, which lists these parks among its infrastructure projects.',
    ],
    limits: [
      'The ANPT site did not respond on the verification date: details may have changed since the copies read. The ministry site could not be read either.',
      'This page gives no opinion on the parks. Private and university incubators outside the ANPT are on our incubators page.',
    ],
    fix: 'Something has changed? Write to us with the link to the official page, and we correct it:',
    faq: [
      ['What is the Sidi Abdellah cyberparc?', 'It is the Sidi Abdellah technology park, run by the ANPT in Rahmania (wilaya of Algiers). The ANPT page describes it as hosting digital companies, with an incubator, a multi-tenant office building, training rooms and conference halls.'],
      ['Where is the Sidi Abdellah cyberparc?', 'In Rahmania (Sidi Abdellah), in the wilaya of Algiers, according to the ANPT page.'],
      ['Which technology parks are there in Algeria?', `The ANPT presents ${N} sites: ${join(PARKS.map((x) => x.name), 'and')}.`],
      ['Which incubators does the ANPT run?', `${join(INCUB, 'and')}, in addition to the incubator of the Sidi Abdellah technology park.`],
      ['Are the Oran, Annaba and Ouargla technology parks open?', `The ANPT home page lists ${join(PROJECTS, 'and')} among its infrastructure projects, and their pages do not say companies are hosted there. For Ouargla, the ANPT’s latest dated notice is from January 2020.`],
      ['What is the ANPT?', 'The national agency for the promotion and development of technology parks. Its site presents it as a public industrial and commercial enterprise created in 2004, under the Post and Telecommunications ministry, based at Sidi Abdellah and tasked with developing technology parks.'],
      ['How do I set up at the cyberparc or in an ANPT incubator?', `The ANPT publishes a page on company-creation steps, including the case of its incubators (${STEPS_URL}). This page does not summarise those steps: contact the ANPT.`],
      ['How much does an office at the Sidi Abdellah cyberparc cost?', 'This page reports no rent. Ask the ANPT for its conditions.'],
      ['Is the Sidi Abdellah cyberparc any good?', 'This page gives no opinion: it reports what the ANPT writes about each site. For first-hand feedback, ask the companies based there.'],
      ['Which other places for a tech startup in Algeria?', 'Our pages on incubators and accelerators, coworking spaces in Algiers and Algerian startups list other places and players, each verified on its own site.'],
    ],
    related: [['Tech in Algeria: all our lists', '/tech-algerie/'], ['Startup incubators and accelerators', '/incubateurs-algerie/'], ['Coworking spaces in Algiers', '/coworking-alger/'], ['Data centers in Algeria', '/data-centers-algerie/']],
  },
  ar: {
    title: 'الحظائر التكنولوجية في الجزائر 2027: الحظيرة السيبرانية لسيدي عبد الله، حاضنات ANPT والحظائر الجهوية',
    seoTitle: 'الحظيرة السيبرانية سيدي عبد الله والحظائر التكنولوجية في الجزائر (ANPT) 2027',
    seoDescription: 'الحظائر التكنولوجية في الجزائر حسب ANPT: الحظيرة التكنولوجية (السيبرانية) لسيدي عبد الله في الرحمانية، حاضنتا وهران وبرج بوعريريج، والحظائر الجهوية لوهران وعنابة وورقلة قيد المشروع. الخدمات المعلنة وعنوان كل موقع.',
    keywords: 'الحظيرة السيبرانية سيدي عبد الله, سايبر بارك سيدي عبد الله, ANPT الجزائر, الحظائر التكنولوجية الجزائر, حاضنة ANPT',
    colCompany: 'الموقع', colDoes: 'النوع والخدمات', colFact: 'ما تذكره صفحة ANPT', countLabel: 'مواقع ANPT',
    lead: `تعرض ANPT، الوكالة العمومية للحظائر التكنولوجية، ${N} مواقع في الجزائر: الحظيرة التكنولوجية لسيدي عبد الله في الرحمانية (الجزائر العاصمة)، المسماة أيضاً الحظيرة السيبرانية، التي تستقبل مؤسسات الرقمنة، ثلاث حاضنات في وهران وبرج بوعريريج، وثلاث حظائر جهوية في وهران وعنابة وورقلة مصنفة ضمن مشاريعها. لكل موقع: العنوان والخدمات المذكورة في صفحة ANPT.`,
    byService: [['مكاتب', 'offices'], ['حاضنة', 'incubator'], ['تكوين', 'training']],
    method: [
      'بحثنا بكلمات بسيطة مثل «الحظيرة السيبرانية سيدي عبد الله» و«ANPT الجزائر» و«الحظائر التكنولوجية الجزائر». واستُعملت المقالات الصحفية كمؤشرات؛ والمعلومات من صفحات ANPT.',
      'لا ننقل أي إيجار ولا مساحة ولا مبلغ استثمار ولا عدد أو أسماء المؤسسات المقيمة، ولا نشرح أي شرط قبول. ووصف «قيد المشروع» هو ما في الصفحة الرئيسية لـ ANPT التي تصنّف هذه الحظائر ضمن مشاريع البنية التحتية.',
    ],
    limits: [
      'لم يستجب موقع ANPT في تاريخ التحقق: قد تكون المعلومات تغيّرت منذ النسخ المقروءة. ولم نتمكن من قراءة موقع الوزارة أيضاً.',
      'لا تقدّم هذه الصفحة رأياً في الحظائر. والحاضنات الخاصة والجامعية خارج ANPT في صفحتنا عن الحاضنات.',
    ],
    fix: 'تغيّرت معلومة؟ راسلونا مع رابط الصفحة الرسمية، ونصحّح:',
    faq: [
      ['ما هي الحظيرة السيبرانية لسيدي عبد الله؟', 'هي الحظيرة التكنولوجية لسيدي عبد الله التي تسيّرها ANPT في الرحمانية (ولاية الجزائر). وتصفها صفحة ANPT بأنها تستقبل مؤسسات الرقمنة، بحاضنة، عمارة مكاتب لعدة مستأجرين، قاعات تكوين وقاعات مؤتمرات.'],
      ['أين توجد الحظيرة السيبرانية لسيدي عبد الله؟', 'في الرحمانية (سيدي عبد الله)، بولاية الجزائر، حسب صفحة ANPT.'],
      ['ما هي الحظائر التكنولوجية في الجزائر؟', `تعرض ANPT ‏${N} مواقع: ${join(PARKS.map((x) => x.name), 'و')}.`],
      ['ما هي الحاضنات التي تسيّرها ANPT؟', `${join(INCUB, 'و')}، إضافة إلى حاضنة الحظيرة التكنولوجية لسيدي عبد الله.`],
      ['هل حظائر وهران وعنابة وورقلة مفتوحة؟', `تصنّف الصفحة الرئيسية لـ ANPT ‏${join(PROJECTS, 'و')} ضمن مشاريع البنية التحتية، ولا تذكر صفحاتها أن مؤسسات تقيم فيها. وبالنسبة لورقلة، يعود آخر إعلان مؤرخ لـ ANPT إلى جانفي 2020.`],
      ['ما هي ANPT؟', 'الوكالة الوطنية لترقية وتطوير الحظائر التكنولوجية. ويقدّمها موقعها كمؤسسة عمومية ذات طابع صناعي وتجاري أُنشئت سنة 2004، تحت وصاية وزارة البريد والمواصلات، مقرها سيدي عبد الله ومكلفة بتطوير الحظائر التكنولوجية.'],
      ['كيف أستقر في الحظيرة السيبرانية أو في حاضنة لـ ANPT؟', `تنشر ANPT صفحة عن إجراءات إنشاء المؤسسة، تتضمن حالة حاضناتها (${STEPS_URL}). ولا تلخص هذه الصفحة تلك الإجراءات: اتصلوا بـ ANPT.`],
      ['كم يكلف مكتب في الحظيرة السيبرانية لسيدي عبد الله؟', 'لا تنقل هذه الصفحة أي إيجار. اطلبوا الشروط من ANPT.'],
      ['ما رأيكم في الحظيرة السيبرانية لسيدي عبد الله؟', 'لا تقدّم هذه الصفحة رأياً: تنقل ما تكتبه ANPT عن كل موقع. ولتجربة مباشرة، اسألوا المؤسسات المقيمة فيها.'],
      ['ما هي الأماكن الأخرى لشركة ناشئة تقنية في الجزائر؟', 'صفحاتنا عن الحاضنات والمسرّعات، فضاءات العمل المشترك في الجزائر العاصمة والشركات الناشئة الجزائرية تذكر أماكن وفاعلين آخرين، كل منهم موثق في موقعه.'],
    ],
    related: [['التكنولوجيا في الجزائر: كل قوائمنا', '/tech-algerie/'], ['حاضنات ومسرّعات الشركات الناشئة', '/incubateurs-algerie/'], ['فضاءات العمل المشترك في الجزائر العاصمة', '/coworking-alger/'], ['مراكز البيانات في الجزائر', '/data-centers-algerie/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="parcs-technologiques-algerie" content={CONTENT} items={PARKS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
