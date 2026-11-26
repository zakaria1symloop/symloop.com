// /coworking-alger/ — source page: verified list of coworking spaces in Algiers (FR / EN / AR).
// Data: src/data/sources/algeria-coworking.js. No prices, no street addresses, no names of people.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { COWORKING, TOP_COWORKING, VERIFIED_ON } from '../data/sources/algeria-coworking';

// ten per list: the publisher and nine spaces (rule in SELECTION below)
const ITEMS = COWORKING.filter((x) => x.self || TOP_COWORKING.includes(x.name));
const OTHERS = COWORKING.filter((x) => !x.self);
const TOTAL = OTHERS.length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const inCity = (c) => OTHERS.filter((x) => x.city === c).map((x) => x.name);
const DELY = inCity('Dely Ibrahim');
const OPEN247 = has('open_24_7');
const OFFICE = has('private_office');
const DOMI = has('domiciliation');
const PROG = has('programmes');
const ONLINE = has('book_online');
const OUTSIDE = OTHERS.filter((x) => x.outside).map((x) => `${x.name} (${x.city})`);

const KIND_LABELS = {
  fr: { builder: 'Construction du produit', space: 'Espaces de coworking' },
  en: { builder: 'Product building', space: 'Coworking spaces' },
  ar: { builder: 'بناء المنتج', space: 'فضاءات العمل المشترك' },
};
const FEATURE_LABELS = {
  fr: { build: 'construit le produit du fondateur', open_space: 'postes partagés', dedicated_desk: 'poste dédié', private_office: 'bureau privé', meeting_room: 'salle de réunion', event_space: 'salle de formation ou d’événement', domiciliation: 'domiciliation', virtual_office: 'bureau virtuel', day_pass: 'à la journée', monthly: 'au mois', open_24_7: 'accès à toute heure (selon la formule)', weekends: 'ouvert le week-end', programmes: 'programme d’incubation', book_online: 'réservation en ligne' },
  en: { build: 'builds the founder’s product', open_space: 'shared desks', dedicated_desk: 'dedicated desk', private_office: 'private office', meeting_room: 'meeting room', event_space: 'training or event room', domiciliation: 'domiciliation', virtual_office: 'virtual office', day_pass: 'by the day', monthly: 'by the month', open_24_7: 'round-the-clock access (depending on the plan)', weekends: 'open at weekends', programmes: 'incubation programme', book_online: 'online booking' },
  ar: { build: 'تبني منتج المؤسِّس', open_space: 'مكاتب مشتركة', dedicated_desk: 'مكتب مخصص', private_office: 'مكتب خاص', meeting_room: 'قاعة اجتماعات', event_space: 'قاعة تكوين أو فعاليات', domiciliation: 'التوطين', virtual_office: 'مكتب افتراضي', day_pass: 'باليوم', monthly: 'بالشهر', open_24_7: 'ولوج في كل ساعة (حسب الصيغة)', weekends: 'مفتوح في نهاية الأسبوع', programmes: 'برنامج احتضان', book_online: 'حجز عبر الإنترنت' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} espaces. Cette page en retient dix : Symloop, qui publie la liste et construit le produit des fondateurs, et neuf espaces de la wilaya d’Alger dont le site s’ouvrait, montrait une activité en 2026 et décrivait l’offre, avec au plus deux espaces par commune.`,
  en: `We verified ${TOTAL} spaces. This page keeps ten: Symloop, which publishes the list and builds founders’ products, and nine spaces in the wilaya of Algiers whose site loaded, showed activity in 2026 and described the offer, with at most two spaces per commune.`,
  ar: `تحققنا من ${TOTAL} فضاء. تحتفظ هذه الصفحة بعشرة: Symloop، التي تنشر القائمة وتبني منتجات المؤسِّسين، وتسعة فضاءات في ولاية الجزائر كان موقعها يفتح، يُظهر نشاطاً في 2026 ويصف العرض، بفضاءين على الأكثر لكل بلدية.`,
};

const CONTENT = {
  fr: {
    title: `Meilleurs espaces de coworking à Alger 2027 : liste vérifiée de ${N} adresses`,
    seoTitle: `Coworking à Alger 2027 : ${N} espaces vérifiés (Alger Centre, Hydra, Dely Ibrahim)`,
    seoDescription: `Espaces de coworking à Alger en 2027 : ${N} entrées vérifiées avec la commune (Alger Centre, Hydra, Dely Ibrahim, Birkhadem, Mohammadia), ce qui se loue (postes, bureaux privés, salles de réunion, domiciliation) et l’accès. Vérifié le 26 novembre 2026.`,
    keywords: 'meilleur coworking alger 2027, coworking alger, coworking alger centre, coworking hydra, coworking dely brahim, espace coworking alger, bureau partagé alger, domiciliation entreprise alger',
    colCompany: 'Espace', colDoes: 'Ce qui se loue et l’accès', colFact: 'Ce que son site en dit', countLabel: 'entrées vérifiées',
    lead: `Cette page présente ${N} entrées sur le coworking à Alger : neuf espaces répartis entre Alger Centre, Sidi M’Hamed, Hydra, Dely Ibrahim, Birkhadem, Mohammadia et Bab Ezzouar, et Symloop, qui construit le produit des fondateurs. Pour chaque espace : la commune, ce qui se loue et l’accès, relevés sur son propre site ; Symloop, qui publie la liste, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Bureau privé', 'private_office'], ['Poste dédié', 'dedicated_desk'], ['Salle de réunion', 'meeting_room'], ['Salle de formation ou d’événement', 'event_space'], ['Domiciliation', 'domiciliation'], ['Bureau virtuel', 'virtual_office'], ['Accès à toute heure (selon la formule)', 'open_24_7'], ['Avec un programme d’incubation', 'programmes'], ['Réservation en ligne', 'book_online']],
    method: [
      'Nous avons cherché avec des mots simples : « coworking Alger », « coworking Alger centre », « coworking Hydra », « coworking Dely Brahim », « espace coworking Alger ».',
      'Un espace entre dans la liste si son propre site s’ouvre, décrit ce qu’il loue et indique où il se trouve. La commune est celle que le site indique ; nous ne donnons ni adresse précise ni nom de personne. Nous ne reprenons aucun tarif. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'Nous n’avons visité aucun espace : ce qui est indiqué est ce que chaque site annonce à la date de vérification. Les horaires et les formules changent : appelez avant de vous déplacer.',
      'Beaucoup d’espaces n’ont qu’une page sur les réseaux sociaux et ne figurent pas ici. Cette page n’explique pas les règles de la domiciliation d’entreprise : elle signale seulement les espaces qui proposent ce service.',
    ],
    fix: 'Une information est fausse, ou votre espace manque ? Écrivez-nous avec le lien de votre site, nous corrigeons :',
    faq: [
      ['Quel est le meilleur espace de coworking à Alger en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} entrées avec ce que chaque espace annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur et n’est pas un espace de coworking. Le bon choix dépend de votre commune, de ce que vous louez (un poste, un bureau, une salle) et des horaires dont vous avez besoin.`],
      ['Quel coworking à Alger Centre ?', 'DjazairIA est à Alger Centre et Capcowork à Sidi M’Hamed, la commune voisine.'],
      ['Quel coworking à Hydra ?', 'KeepWork Space est à Hydra ; Regus y indique deux centres, et THE ADDRESS un site à Sidi Yahia.'],
      ['Quel coworking à Dely Ibrahim ?', `Parmi les espaces que nous avons vérifiés, ${join(DELY, 'et')} sont à Dely Ibrahim.`],
      ['Quels coworkings sont ouverts à toute heure ?', `${join(OPEN247, 'et')} indiquent un accès à toute heure, le plus souvent réservé à certaines formules. Vérifiez la formule concernée sur le site.`],
      ['Où louer un bureau privé à Alger ?', `${join(OFFICE, 'et')} annoncent des bureaux privés ou fermés, en plus des postes partagés.`],
      ['Quels coworkings proposent la domiciliation d’entreprise ?', `${join(DOMI, 'et')} annoncent un service de domiciliation. Cette page n’en explique pas les règles : renseignez-vous auprès de l’espace.`],
      ['Quels coworkings ont aussi un incubateur ?', `${join(PROG, 'et')} annoncent aussi un programme d’incubation ou d’accompagnement.`],
      ['Peut-on réserver en ligne ?', `${join(ONLINE, 'et')} permettent de réserver ou de faire une demande en ligne ; les autres répondent par téléphone ou par message.`],
      ['Existe-t-il des coworkings hors d’Alger ?', `Parmi les espaces dont nous avons pu lire le site : ${join(OUTSIDE, 'et')}. Beaucoup d’autres n’ont qu’une page sur les réseaux sociaux.`],
      ['J’ai un bureau, il me faut maintenant l’application : à qui m’adresser ?', 'Un coworking vous donne un lieu et un réseau. Pour faire construire l’application ou la plateforme elle-même, on s’adresse à une société de développement : Symloop, qui publie cette page, construit des applications mobiles, des plateformes web et des SaaS pour des fondateurs.'],
      ['Comment ajouter mon espace à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de votre site. L’inscription est gratuite.'],
    ],
    related: [['Incubateurs et accélérateurs de startups en Algérie', '/incubateurs-algerie/'], ['Startups algériennes', '/startups-algeriennes/'], ['Meilleures entreprises de développement d’applications mobiles en Algérie', '/entreprises-developpement-application-mobile-algerie/'], ['Nous contacter', '/contact/']],
  },
  en: {
    title: `Best coworking spaces in Algiers 2027: a verified list of ${N} addresses`,
    seoTitle: `Coworking in Algiers 2027: ${N} verified spaces (Alger Centre, Hydra, Dely Ibrahim)`,
    seoDescription: `Coworking spaces in Algiers in 2027: ${N} verified entries with the commune (Alger Centre, Hydra, Dely Ibrahim, Birkhadem, Mohammadia), what is rented (desks, private offices, meeting rooms, domiciliation) and access. Verified on 26 November 2026.`,
    keywords: 'best coworking algiers 2027, coworking algiers, coworking space algiers, shared office algiers, coworking hydra, coworking dely brahim, business address algiers',
    colCompany: 'Space', colDoes: 'What is rented and access', colFact: 'What its site says', countLabel: 'verified entries',
    lead: `This page presents ${N} entries on coworking in Algiers: nine spaces spread across Alger Centre, Sidi M’Hamed, Hydra, Dely Ibrahim, Birkhadem, Mohammadia and Bab Ezzouar, and Symloop, which builds founders’ products. For each space: the commune, what is rented and access, read on its own website; Symloop, which publishes the list, comes first and the others follow in alphabetical order.`,
    byService: [['Private office', 'private_office'], ['Dedicated desk', 'dedicated_desk'], ['Meeting room', 'meeting_room'], ['Training or event room', 'event_space'], ['Domiciliation', 'domiciliation'], ['Virtual office', 'virtual_office'], ['Round-the-clock access (depending on the plan)', 'open_24_7'], ['With an incubation programme', 'programmes'], ['Online booking', 'book_online']],
    method: [
      'We searched with simple words such as “coworking Algiers”, “coworking Alger centre”, “coworking Hydra” and “coworking Dely Brahim”.',
      'A space enters the list if its own site loads, describes what it rents and says where it is. The commune is the one the site states; we give no precise address and no person’s name. We report no rates. Each name links to the page read.',
    ],
    limits: [
      'We visited no space: what is shown is what each site announces on the verification date. Opening hours and plans change: call before you go.',
      'Many spaces have only a social-media page and are not listed here. This page does not explain the rules of company domiciliation: it only signals the spaces that offer the service.',
    ],
    fix: 'Something is wrong, or your space is missing? Write to us with the link to your site, and we correct it:',
    faq: [
      ['What is the best coworking space in Algiers in 2027?', `There is no independent ranking. This page presents ${N} entries with what each space announces; Symloop, which publishes it, places itself first as the publisher’s choice and is not a coworking space. The right choice depends on your commune, on what you rent (a desk, an office, a room) and on the hours you need.`],
      ['Which coworking in Alger Centre?', 'DjazairIA is in Alger Centre and Capcowork in Sidi M’Hamed, the neighbouring commune.'],
      ['Which coworking in Hydra?', 'KeepWork Space is in Hydra; Regus states two centres there, and THE ADDRESS a site in Sidi Yahia.'],
      ['Which coworking in Dely Ibrahim?', `Among the spaces we verified, ${join(DELY, 'and')} are in Dely Ibrahim.`],
      ['Which coworking spaces are open round the clock?', `${join(OPEN247, 'and')} state round-the-clock access, most often reserved for certain plans. Check the plan concerned on the site.`],
      ['Where can I rent a private office in Algiers?', `${join(OFFICE, 'and')} announce private or closed offices, in addition to shared desks.`],
      ['Which coworking spaces offer company domiciliation?', `${join(DOMI, 'and')} announce a domiciliation service. This page does not explain its rules: ask the space.`],
      ['Which coworking spaces also have an incubator?', `${join(PROG, 'and')} also announce an incubation or support programme.`],
      ['Can I book online?', `${join(ONLINE, 'and')} let you book or send a request online; the others answer by phone or message.`],
      ['Are there coworking spaces outside Algiers?', `Among the spaces whose site we could read: ${join(OUTSIDE, 'and')}. Many others have only a social-media page.`],
      ['I have an office, now I need the app: who do I go to?', 'A coworking space gives you a place and a network. To have the app or platform itself built, you go to a development company: Symloop, which publishes this page, builds mobile apps, web platforms and SaaS for founders.'],
      ['How do I add my space to this list?', 'Write to contact@symloop.com with the link to your site. Listing is free.'],
    ],
    related: [['Startup incubators and accelerators in Algeria', '/incubateurs-algerie/'], ['Algerian startups', '/startups-algeriennes/'], ['Best mobile app development companies in Algeria', '/entreprises-developpement-application-mobile-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `أفضل فضاءات العمل المشترك في الجزائر العاصمة 2027: قائمة موثقة من ${N} عناوين`,
    seoTitle: `العمل المشترك في الجزائر العاصمة 2027: ${N} فضاءات موثقة`,
    seoDescription: `فضاءات العمل المشترك في الجزائر العاصمة سنة 2027: ${N} مدخلات موثقة مع البلدية (الجزائر الوسطى، حيدرة، دالي ابراهيم، بئر خادم، المحمدية)، ما يُؤجَّر (مكاتب، مكاتب خاصة، قاعات اجتماعات، توطين) والولوج. تم التحقق في 26 نوفمبر 2026.`,
    keywords: 'أفضل فضاء عمل مشترك الجزائر العاصمة 2027, فضاء العمل المشترك الجزائر العاصمة, كووركينغ الجزائر, مكتب مشترك الجزائر العاصمة, توطين مؤسسة الجزائر',
    colCompany: 'الفضاء', colDoes: 'ما يُؤجَّر والولوج', colFact: 'ما يذكره موقعه', countLabel: 'مدخلات موثقة',
    lead: `تعرض هذه الصفحة ${N} مدخلات عن العمل المشترك في الجزائر العاصمة: تسعة فضاءات موزعة بين الجزائر الوسطى، سيدي امحمد، حيدرة، دالي ابراهيم، بئر خادم، المحمدية وباب الزوار، و Symloop التي تبني منتجات المؤسِّسين. لكل فضاء: البلدية، ما يُؤجَّر والولوج، مأخوذة من موقعه؛ Symloop، ناشرة القائمة، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['مكتب خاص', 'private_office'], ['مكتب مخصص', 'dedicated_desk'], ['قاعة اجتماعات', 'meeting_room'], ['قاعة تكوين أو فعاليات', 'event_space'], ['التوطين', 'domiciliation'], ['مكتب افتراضي', 'virtual_office'], ['ولوج في كل ساعة (حسب الصيغة)', 'open_24_7'], ['ببرنامج احتضان', 'programmes'], ['حجز عبر الإنترنت', 'book_online']],
    method: [
      'بحثنا بكلمات بسيطة مثل «فضاء العمل المشترك الجزائر العاصمة» و«كووركينغ حيدرة» و«كووركينغ دالي ابراهيم».',
      'يدخل الفضاء القائمة إذا كان موقعه يفتح، يصف ما يؤجّره ويذكر مكانه. البلدية هي ما يذكره الموقع؛ ولا نعطي عنواناً دقيقاً ولا اسم شخص. ولا ننقل أي تسعيرة. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'لم نزر أي فضاء: المذكور هو ما يعلنه كل موقع في تاريخ التحقق. وأوقات العمل والصيغ تتغير: اتصلوا قبل التنقل.',
      'كثير من الفضاءات ليس لها سوى صفحة في شبكات التواصل وهي غير مذكورة هنا. ولا تشرح هذه الصفحة قواعد توطين المؤسسات: تشير فقط إلى الفضاءات التي تقترح هذه الخدمة.',
    ],
    fix: 'معلومة خاطئة أو فضاؤكم غير مدرج؟ راسلونا مع رابط موقعكم، ونصحّح:',
    faq: [
      ['ما هو أفضل فضاء عمل مشترك في الجزائر العاصمة سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} مدخلات مع ما يعلنه كل فضاء؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر وليست فضاء عمل مشترك. والاختيار الصحيح يتوقف على بلديتكم، ما تؤجّرونه (مكتب، مكتب خاص، قاعة) والأوقات التي تحتاجونها.`],
      ['أي فضاء عمل مشترك في الجزائر الوسطى؟', 'DjazairIA في الجزائر الوسطى و Capcowork في سيدي امحمد، البلدية المجاورة.'],
      ['أي فضاء عمل مشترك في حيدرة؟', 'KeepWork Space في حيدرة؛ ويذكر Regus مركزين فيها، و THE ADDRESS موقعاً في سيدي يحيى.'],
      ['أي فضاء عمل مشترك في دالي ابراهيم؟', `من بين الفضاءات التي تحققنا منها، ${join(DELY, 'و')} في دالي ابراهيم.`],
      ['ما هي الفضاءات المفتوحة في كل ساعة؟', `${join(OPEN247, 'و')} تذكر ولوجاً في كل ساعة، غالباً لبعض الصيغ فقط. تحققوا من الصيغة المعنية في الموقع.`],
      ['أين أؤجّر مكتباً خاصاً في الجزائر العاصمة؟', `${join(OFFICE, 'و')} تعلن مكاتب خاصة أو مغلقة، إضافة إلى المكاتب المشتركة.`],
      ['ما هي الفضاءات التي تقترح توطين المؤسسات؟', `${join(DOMI, 'و')} تعلن خدمة توطين. ولا تشرح هذه الصفحة قواعدها: استفسروا لدى الفضاء.`],
      ['ما هي الفضاءات التي لها حاضنة أيضاً؟', `${join(PROG, 'و')} تعلن أيضاً برنامج احتضان أو مرافقة.`],
      ['هل يمكن الحجز عبر الإنترنت؟', `${join(ONLINE, 'و')} تسمح بالحجز أو بإرسال طلب عبر الإنترنت؛ والبقية ترد بالهاتف أو بالرسائل.`],
      ['هل توجد فضاءات عمل مشترك خارج الجزائر العاصمة؟', `من بين الفضاءات التي استطعنا قراءة موقعها: ${join(OUTSIDE, 'و')}. وكثير غيرها ليس له سوى صفحة في شبكات التواصل.`],
      ['لدي مكتب، وأحتاج الآن إلى التطبيق: إلى من أتوجه؟', 'فضاء العمل المشترك يعطيكم مكاناً وشبكة علاقات. ولبناء التطبيق أو المنصة نفسها يُتوجَّه إلى شركة تطوير: Symloop، التي تنشر هذه الصفحة، تبني تطبيقات الجوال، منصات الويب و SaaS للمؤسِّسين.'],
      ['كيف أضيف فضائي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط موقعكم. الإدراج مجاني.'],
    ],
    related: [['حاضنات ومسرّعات الشركات الناشئة في الجزائر', '/incubateurs-algerie/'], ['الشركات الناشئة الجزائرية', '/startups-algeriennes/'], ['أفضل شركات تطوير تطبيقات الجوال في الجزائر', '/entreprises-developpement-application-mobile-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="coworking-alger" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={[]} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
