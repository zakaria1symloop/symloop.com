import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { formules, lien, STRINGS as SC } from './custom/datacenter.mjs';
export const slug = 'data-center-algerie-2027-serveur-d-entreprise-dans-un-placard-colocation-housing-serveur-loue-ou-virtuel-disponibilite-second-lien-internet';
const T = {
  fr: {
    cover: { eyebrow: 'Data center · Algérie · 2027', title: ['Data center en Algérie', 'sortir le serveur du placard'], subtitle: 'Ce qu’on loue vraiment, le taux traduit en heures, et le second lien à prévoir avant de déménager', left: { label: 'Au bureau', sub: 'un placard, une prise, un lien' }, right: { label: 'Au centre de données', sub: 'courant, froid, accès, liaisons' } },
    bureau: { title: 'Le serveur au bureau ou au centre de données : six points', columns: ['Au bureau, dans un placard', 'Dans un centre de données'], rows: [
      { label: 'Le courant', cells: ['une prise, un onduleur qui tient quelques minutes', 'deux arrivées, des onduleurs, des groupes de secours'] },
      { label: 'Le froid', cells: ['la climatisation du bureau, coupée le soir', 'un froid continu, une température surveillée'] },
      { label: 'L’accès', cells: ['une porte, tout le monde passe devant', 'accès contrôlé, visites consignées'] },
      { label: 'Les liaisons', cells: ['un seul lien, celui du bureau', 'plusieurs opérateurs dans le même bâtiment'] },
      { label: 'La panne de nuit', cells: ['on la découvre le matin en arrivant', 'une équipe sur place : demandez ses horaires'] },
      { label: 'Ce qui reste à vous', cells: ['tout : machine, système, sauvegardes', 'le système, les données, les sauvegardes'] },
    ], caption: 'Figure 1 · Six points. La colonne de droite décrit ce qu’on attend d’un centre de données : chaque ligne est une question à poser, pas une promesse. La dernière ligne ne change pas : le système, les données et les sauvegardes restent à votre charge.', alt: 'Matrice de six points : le courant, le froid, l’accès, les liaisons, la panne de nuit, ce qui reste à vous ; pour chacun, le serveur au bureau dans un placard et le serveur dans un centre de données.' },
    decider: { title: 'Sortir le serveur du bureau : décider en six temps', items: [
      { label: 'Compter', sub: 'les heures d’arrêt de l’an dernier' },
      { label: 'Lister', sub: 'qui utilise le serveur, et d’où' },
      { label: 'Mesurer', sub: 'le lien du bureau, deux semaines', accent: true },
      { label: 'Choisir', sub: 'colocation, serveur loué ou virtuel' },
      { label: 'Demander', sub: 'par écrit : taux, courant, accès, sortie' },
      { label: 'Déménager', sub: 'un week-end, retour possible' },
    ], caption: 'Figure 2 · Le temps accentué est le troisième : mesurer le lien du bureau. On ne décide pas sur une impression, mais sur trois comptes : les heures d’arrêt de l’an dernier, les utilisateurs par site, et la tenue du lien pendant deux semaines.', alt: 'Six temps : compter, lister, mesurer (accentué), choisir, demander, déménager.' },
    fournit: { title: 'Ce qu’un centre de données fournit, en cinq couches', layers: [
      { label: 'Bâtiment', items: [{ name: 'Un bâtiment fait pour cela : accès contrôlé, visites consignées, détection d’incendie', sub: 'personne n’y entre par hasard' }] },
      { label: 'Courant', items: [{ name: 'Un courant qui ne s’arrête pas : deux arrivées, des onduleurs, des groupes qui prennent le relais', sub: 'la raison pour laquelle on quitte le placard', accent: true }] },
      { label: 'Froid', items: [{ name: 'Un froid continu : température et humidité tenues, jour et nuit, été compris', sub: 'la fiabilité des machines en dépend' }] },
      { label: 'Liaisons', items: [{ name: 'Plusieurs liaisons : des opérateurs différents dans le même bâtiment, un débit garanti', sub: 'la sortie vers internet ne tient pas à un seul câble' }] },
      { label: 'Exploitation', items: [{ name: 'Une équipe : surveillance, et des gestes sur place à votre demande, redémarrer, changer un disque', sub: 'demandez les horaires et le délai' }] },
    ], caption: 'Figure 3 · La couche accentuée est le courant : c’est elle qui fait quitter le placard. Chaque couche se vérifie par une question écrite, et le taux de disponibilité annoncé se traduit en heures : 99,99 % par an, c’est 53 minutes d’arrêt.', alt: 'Cinq couches : bâtiment ; courant (accentuée) ; froid ; liaisons ; exploitation.' },
    formules: { caption: 'Figure 4 · Quatre façons de faire tourner le même serveur. En accent, ce qui reste à votre charge. La colocation vous laisse la machine ; le serveur loué et le serveur virtuel la confient à l’opérateur. Les sauvegardes, les logiciels et le système restent à vous dans les quatre cas, sauf service ajouté au contrat.' },
    lien: { caption: 'Figure 5 · Le même serveur, avant et après. Au siège, une coupure de courant arrête les 38 postes. Au centre de données, elle n’arrête plus les agences, mais une coupure d’internet au siège arrête ses trente postes : d’où le second lien, d’un autre opérateur. Exemple construit.' },
    calendrier: { title: 'Six semaines, du compte au déménagement', unit: 'sem.', items: [
      { label: 'Compter et mesurer', note: 'heures d’arrêt de l’an dernier, utilisateurs par site, lien du siège mesuré deux semaines', from: 0, to: 2, accent: true },
      { label: 'Choisir et demander', note: 'formule retenue, questions écrites envoyées, réponses comparées ligne par ligne', from: 1, to: 3 },
      { label: 'Doubler le lien', note: 'second lien d’un autre opérateur, tunnel chiffré vers le centre, bascule essayée', from: 2, to: 4 },
      { label: 'Répéter', note: 'une copie du serveur installée au centre, cinq utilisateurs y travaillent une semaine', from: 3, to: 4 },
      { label: 'Déménager', note: 'un week-end : dernière copie, bascule, l’ancien serveur gardé intact', from: 4, to: 5 },
      { label: 'Vérifier', note: 'une sauvegarde restaurée pour essai, les heures d’arrêt comptées de nouveau, le placard vidé', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines dans l’exemple. La période accentuée est la première : compter et mesurer, avant de demander le moindre devis. Le déménagement lui-même tient en un week-end ; l’ancien serveur reste intact une semaine. Durées indicatives d’un exemple construit.', alt: 'Calendrier de six semaines : compter et mesurer (accentué), choisir et demander, doubler le lien, répéter, déménager, vérifier.' },
  },
  en: {
    cover: { eyebrow: 'Data center · Algeria · 2027', title: ['Data center in Algeria', 'getting the server out of the cupboard'], subtitle: 'What you really rent, the rate turned into hours, and the second link to plan before moving', left: { label: 'At the office', sub: 'a cupboard, a socket, one link' }, right: { label: 'In the data center', sub: 'power, cooling, access, links' } },
    bureau: { title: 'The server at the office or in a data center: six points', columns: ['At the office, in a cupboard', 'In a data center'], rows: [
      { label: 'Power', cells: ['one socket, a battery unit that lasts minutes', 'two feeds, battery units, standby generators'] },
      { label: 'Cooling', cells: ['the office air conditioning, off at night', 'continuous cooling, a monitored temperature'] },
      { label: 'Access', cells: ['a door, everyone walks past it', 'controlled access, visits logged'] },
      { label: 'Links', cells: ['a single link, the office one', 'several operators in the same building'] },
      { label: 'The failure at night', cells: ['found in the morning on arrival', 'a team on site: ask for its hours'] },
      { label: 'What stays with you', cells: ['everything: machine, system, backups', 'the system, the data, the backups'] },
    ], caption: 'Figure 1 · Six points. The right-hand column describes what is expected of a data center: each row is a question to ask, not a promise. The last row does not change: the system, the data and the backups stay with you.', alt: 'Matrix of six points: power, cooling, access, links, the failure at night, what stays with you; for each, the server at the office in a cupboard and the server in a data center.' },
    decider: { title: 'Taking the server out of the office: deciding in six steps', items: [
      { label: 'Count', sub: 'last year’s hours of downtime' },
      { label: 'List', sub: 'who uses the server, and from where' },
      { label: 'Measure', sub: 'the office link, for two weeks', accent: true },
      { label: 'Choose', sub: 'colocation, rented or virtual server' },
      { label: 'Ask', sub: 'in writing: rate, power, access, exit' },
      { label: 'Move', sub: 'one weekend, a way back kept' },
    ], caption: 'Figure 2 · The accented step is the third: measure the office link. The decision is not made on an impression, but on three counts: last year’s hours of downtime, the users per site, and how the link holds over two weeks.', alt: 'Six steps: count, list, measure (accented), choose, ask, move.' },
    fournit: { title: 'What a data center provides, in five layers', layers: [
      { label: 'Building', items: [{ name: 'A building made for it: controlled access, visits logged, fire detection', sub: 'nobody walks in by chance' }] },
      { label: 'Power', items: [{ name: 'Power that does not stop: two feeds, battery units, generators that take over', sub: 'the reason for leaving the cupboard', accent: true }] },
      { label: 'Cooling', items: [{ name: 'Continuous cooling: temperature and humidity held, day and night, summer included', sub: 'the reliability of the machines depends on it' }] },
      { label: 'Links', items: [{ name: 'Several links: different operators in the same building, a guaranteed speed', sub: 'the way out to the internet does not hang on one cable' }] },
      { label: 'Operations', items: [{ name: 'A team: monitoring, and hands on site at your request, restart, change a disk', sub: 'ask for the hours and the delay' }] },
    ], caption: 'Figure 3 · The accented layer is power: it is the one that makes companies leave the cupboard. Each layer is checked with a written question, and the availability rate announced is turned into hours: 99.99% a year is 53 minutes of downtime.', alt: 'Five layers: building; power (accented); cooling; links; operations.' },
    formules: { caption: 'Figure 4 · Four ways of running the same server. Accented, what stays with you. Colocation leaves you the machine; the rented server and the virtual server hand it to the operator. Backups, software and the system stay with you in all four cases, unless a service is added to the contract.' },
    lien: { caption: 'Figure 5 · The same server, before and after. At head office, a power cut stops all 38 computers. In the data center, it no longer stops the branches, but an internet cut at head office stops its thirty computers: hence the second link, from another operator. Constructed example.' },
    calendrier: { title: 'Six weeks, from the count to the move', unit: 'wk', items: [
      { label: 'Count and measure', note: 'last year’s hours of downtime, users per site, the head-office link measured for two weeks', from: 0, to: 2, accent: true },
      { label: 'Choose and ask', note: 'the option retained, written questions sent, answers compared line by line', from: 1, to: 3 },
      { label: 'Double the link', note: 'a second link from another operator, an encrypted tunnel to the centre, the switch tested', from: 2, to: 4 },
      { label: 'Rehearse', note: 'a copy of the server installed in the centre, five users work on it for a week', from: 3, to: 4 },
      { label: 'Move', note: 'one weekend: last copy, switch, the old server kept intact', from: 4, to: 5 },
      { label: 'Check', note: 'a backup restored as a test, the hours of downtime counted again, the cupboard emptied', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks in the example. The accented period is the first: count and measure, before asking for any quote. The move itself fits in a weekend; the old server stays intact for a week. Indicative durations of a constructed example.', alt: 'Six-week calendar: count and measure (accented), choose and ask, double the link, rehearse, move, check.' },
  },
  ar: {
    cover: { eyebrow: 'مركز البيانات · الجزائر · 2027', title: ['مركز بيانات في الجزائر', 'إخراج الخادم من خزانة المكتب'], subtitle: 'ما يُستأجَر فعلاً، النسبة محوَّلة إلى ساعات، والخط الثاني الذي يُحضَّر قبل النقل', left: { label: 'في المكتب', sub: 'خزانة، مأخذ، وخط واحد' }, right: { label: 'في مركز البيانات', sub: 'كهرباء، تبريد، دخول، وخطوط' } },
    bureau: { title: 'الخادم في المكتب أم في مركز البيانات: ست نقاط', columns: ['في المكتب، داخل خزانة', 'في مركز بيانات'], rows: [
      { label: 'الكهرباء', cells: ['مأخذ واحد، ومموّج يصمد بضع دقائق', 'تغذيتان، مموّجات، ومولّدات احتياطية'] },
      { label: 'التبريد', cells: ['مكيّف المكتب، يُطفأ مساءً', 'تبريد متواصل، وحرارة مراقَبة'] },
      { label: 'الدخول', cells: ['باب، والجميع يمر أمامه', 'دخول مراقَب، وزيارات مسجَّلة'] },
      { label: 'الخطوط', cells: ['خط واحد، خط المكتب', 'عدة متعاملين في المبنى نفسه'] },
      { label: 'العطل الليلي', cells: ['يُكتشف صباحاً عند الوصول', 'فريق في عين المكان: اسألوا عن أوقاته'] },
      { label: 'ما يبقى عليكم', cells: ['الكل: الآلة، النظام، والنسخ', 'النظام، البيانات، والنسخ الاحتياطية'] },
    ], caption: 'الشكل 1 · ست نقاط. العمود الثاني يصف ما يُنتظر من مركز بيانات: كل سطر سؤال يُطرح، لا وعد. والسطر الأخير لا يتغير: النظام والبيانات والنسخ الاحتياطية تبقى على عاتقكم.', alt: 'مصفوفة من ست نقاط: الكهرباء، التبريد، الدخول، الخطوط، العطل الليلي، وما يبقى عليكم؛ ولكل واحدة، الخادم في المكتب داخل خزانة والخادم في مركز بيانات.' },
    decider: { title: 'إخراج الخادم من المكتب: القرار في ست مراحل', items: [
      { label: 'العدّ', sub: 'ساعات التوقف في السنة الماضية' },
      { label: 'الجرد', sub: 'من يستعمل الخادم، ومن أين' },
      { label: 'القياس', sub: 'خط المكتب، مدة أسبوعين', accent: true },
      { label: 'الاختيار', sub: 'إيواء، خادم مؤجَّر، أو افتراضي' },
      { label: 'السؤال', sub: 'كتابياً: النسبة، الكهرباء، الدخول، الخروج' },
      { label: 'النقل', sub: 'في نهاية أسبوع، مع إمكانية الرجوع' },
    ], caption: 'الشكل 2 · المرحلة المبرزة هي الثالثة: قياس خط المكتب. القرار لا يُبنى على انطباع، بل على ثلاثة حسابات: ساعات التوقف في السنة الماضية، المستعملون حسب الموقع، وصمود الخط مدة أسبوعين.', alt: 'ست مراحل: العدّ، الجرد، القياس (مبرزة)، الاختيار، السؤال، والنقل.' },
    fournit: { title: 'ما يوفّره مركز البيانات، في خمس طبقات', layers: [
      { label: 'المبنى', items: [{ name: 'مبنى مهيَّأ لذلك: دخول مراقَب، زيارات مسجَّلة، وكشف للحرائق', sub: 'لا أحد يدخله صدفة' }] },
      { label: 'الكهرباء', items: [{ name: 'كهرباء لا تتوقف: تغذيتان، مموّجات، ومولّدات تأخذ المشعل', sub: 'السبب الذي من أجله تُترك الخزانة', accent: true }] },
      { label: 'التبريد', items: [{ name: 'تبريد متواصل: حرارة ورطوبة مضبوطتان، ليلاً ونهاراً، والصيف كذلك', sub: 'موثوقية الآلات تتوقف عليه' }] },
      { label: 'الخطوط', items: [{ name: 'عدة خطوط: متعاملون مختلفون في المبنى نفسه، وصبيب مضمون', sub: 'الخروج نحو الإنترنت لا يتوقف على كابل واحد' }] },
      { label: 'الاستغلال', items: [{ name: 'فريق: مراقبة، وتدخلات في عين المكان بطلبكم، إعادة تشغيل أو تغيير قرص', sub: 'اسألوا عن الأوقات والأجل' }] },
    ], caption: 'الشكل 3 · الطبقة المبرزة هي الكهرباء: هي التي تجعل المؤسسات تترك الخزانة. وكل طبقة تُراجَع بسؤال مكتوب، ونسبة التوفر المعلنة تُحوَّل إلى ساعات: ⁦99.99%⁩ في السنة تعني 53 دقيقة توقف.', alt: 'خمس طبقات: المبنى؛ الكهرباء (مبرزة)؛ التبريد؛ الخطوط؛ والاستغلال.' },
    formules: { caption: 'الشكل 4 · أربع طرق لتشغيل الخادم نفسه. المبرز هو ما يبقى على عاتقكم. الإيواء يترك لكم الآلة؛ والخادم المؤجَّر والخادم الافتراضي يسلّمانها للمتعامل. والنسخ الاحتياطية والبرامج والنظام تبقى عليكم في الصيغ الأربع، إلا بخدمة مضافة في العقد.' },
    lien: { caption: 'الشكل 5 · الخادم نفسه، قبل وبعد. في المقر، انقطاع الكهرباء يوقف الحواسيب الـ 38. وفي مركز البيانات، لم يعد يوقف الوكالتين، لكن انقطاع الإنترنت في المقر يوقف حواسيبه الثلاثين: ومن هنا الخط الثاني، من متعامل آخر. مثال مركَّب.' },
    calendrier: { title: 'ستة أسابيع، من العدّ إلى النقل', unit: 'أسبوع', items: [
      { label: 'العدّ والقياس', note: 'ساعات التوقف في السنة الماضية، المستعملون حسب الموقع، وخط المقر مقيساً أسبوعين', from: 0, to: 2, accent: true },
      { label: 'الاختيار والسؤال', note: 'الصيغة المختارة، الأسئلة المكتوبة مرسَلة، والأجوبة مقارَنة سطراً بسطر', from: 1, to: 3 },
      { label: 'مضاعفة الخط', note: 'خط ثانٍ من متعامل آخر، نفق مشفَّر نحو المركز، والتبديل مجرَّب', from: 2, to: 4 },
      { label: 'التجربة', note: 'نسخة من الخادم موضوعة في المركز، وخمسة مستعملين يعملون عليها أسبوعاً', from: 3, to: 4 },
      { label: 'النقل', note: 'في نهاية أسبوع: آخر نسخة، التبديل، والخادم القديم محفوظ كما هو', from: 4, to: 5 },
      { label: 'المراجعة', note: 'نسخة احتياطية مسترجَعة للتجربة، ساعات التوقف معدودة من جديد، والخزانة مفرَّغة', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع في المثال. الفترة المبرزة هي الأولى: العدّ والقياس، قبل طلب أي عرض سعر. والنقل نفسه يتم في نهاية أسبوع؛ والخادم القديم يبقى كما هو أسبوعاً. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من ستة أسابيع: العدّ والقياس (مبرزة)، الاختيار والسؤال، مضاعفة الخط، التجربة، النقل، والمراجعة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      bureau: { svg: matrix({ title: t.bureau.title, columns: t.bureau.columns, rows: t.bureau.rows, rtl }), caption: t.bureau.caption, alt: t.bureau.alt },
      decider: { svg: steps({ title: t.decider.title, steps: t.decider.items, arrows: true, rtl }), caption: t.decider.caption, alt: t.decider.alt },
      fournit: { svg: layers({ title: t.fournit.title, layers: t.fournit.layers, rtl }), caption: t.fournit.caption, alt: t.fournit.alt },
      formules: { svg: formules(e.formules, rtl), caption: t.formules.caption, alt: e.formules.alt },
      lien: { svg: lien(e.lien, rtl), caption: t.lien.caption, alt: e.lien.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
