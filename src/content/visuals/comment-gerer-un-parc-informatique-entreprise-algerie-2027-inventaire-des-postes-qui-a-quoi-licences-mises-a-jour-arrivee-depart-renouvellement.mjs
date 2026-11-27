import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { registre, ages, STRINGS as SC } from './custom/parc.mjs';
export const slug = 'comment-gerer-un-parc-informatique-entreprise-algerie-2027-inventaire-des-postes-qui-a-quoi-licences-mises-a-jour-arrivee-depart-renouvellement';
const T = {
  fr: {
    cover: { eyebrow: 'Parc informatique · Algérie · 2027', title: ['Gérer un parc informatique', 'savoir ce qu’on a, et qui l’a'], subtitle: 'Un registre, une installation type, des mises à jour, des licences comptées, un cinquième renouvelé par an', left: { label: 'Personne ne sait', sub: 'combien, ni qui a quoi' }, right: { label: 'Un registre', sub: 'une ligne par poste' } },
    registre: { caption: 'Figure 1 · Quarante carrés, un par poste, le jour du premier relevé. Vingt et un sont en ordre ; sept ont un système qui n’est plus suivi, cinq sont en retard de mise à jour, quatre n’ont pas d’utilisateur connu, trois portables ne sont pas chiffrés. Dix-neuf postes sur quarante demandent une action. Parc et répartition sont un exemple construit.' },
    couches: { title: 'Gérer un parc, en cinq couches', layers: [
      { label: 'Inventaire', items: [{ name: 'Une ligne par machine : numéro, utilisateur, âge, système, dernière mise à jour, relevés par un agent', sub: 'on sait ce qu’on a, et qui l’a', accent: true }] },
      { label: 'Installation type', items: [{ name: 'Une configuration par métier : mêmes logiciels, mêmes réglages, un poste prêt en deux heures', sub: 'un poste se remplace sans tout refaire à la main' }] },
      { label: 'Mises à jour', items: [{ name: 'Correctifs du système et des logiciels poussés chaque mois, postes en retard signalés', sub: 'aucun poste oublié pendant un an' }] },
      { label: 'Licences', items: [{ name: 'Nombre payé, nombre installé, nombre utilisé, dates d’échéance, comptes des partants récupérés', sub: 'ni bandeau rouge, ni licence payée pour personne' }] },
      { label: 'Sécurité', items: [{ name: 'Portables chiffrés, comptes nominatifs, pas d’administrateur local, effacement à distance', sub: 'un portable perdu n’est qu’un portable perdu' }] },
    ], caption: 'Figure 2 · La couche accentuée est la première : l’inventaire, sans lequel les quatre autres travaillent à l’aveugle. L’installation type rend un poste remplaçable ; les mises à jour et les licences se suivent poste par poste ; la sécurité fait qu’une machine perdue ne livre pas ses données.', alt: 'Cinq couches : inventaire (accentuée) ; installation type ; mises à jour ; licences ; sécurité.' },
    vie: { title: 'Six moments dans la vie d’un poste', columns: ['Ce qu’on fait', 'Ce qu’on note'], rows: [
      { label: 'L’achat', cells: ['installation type, étiquette collée', 'numéro, date d’achat, garantie, fournisseur'] },
      { label: 'L’attribution', cells: ['remis à une personne, avec ses comptes', 'qui l’a, depuis quand, pour quel poste de travail'] },
      { label: 'La mise à jour', cells: ['correctifs du système et des logiciels, chaque mois', 'date du dernier passage, postes en retard'] },
      { label: 'La panne', cells: ['diagnostic, poste de prêt, réparation ou remplacement', 'nature, durée d’arrêt, pièce changée'] },
      { label: 'Le départ de l’employé', cells: ['poste rendu, comptes fermés, données transmises', 'date de retour, état, prochain utilisateur'] },
      { label: 'La fin de vie', cells: ['données effacées, licences récupérées', 'date de sortie, preuve d’effacement, destination'] },
    ], caption: 'Figure 3 · Six moments, de l’achat à la fin de vie. À chacun correspond un geste et une ligne dans le registre : c’est la seconde colonne qui manque souvent, et c’est elle qui permet de répondre à « combien de postes, et qui a quoi ».', alt: 'Matrice de six moments dans la vie d’un poste, avec ce qu’on fait et ce qu’on note : achat, attribution, mise à jour, panne, départ de l’employé, fin de vie.' },
    ages: { caption: 'Figure 4 · À gauche, l’âge des quarante postes : douze ont dépassé cinq ans. À droite, le nombre de postes de plus de cinq ans au début de chaque année, si l’on remplace chaque année les huit plus anciens : le retard se résorbe en cinq ans, sans année noire. Âges inventés ; aucun prix de matériel n’est donné.' },
    mouvements: { title: 'L’arrivée et le départ d’un employé, en six temps', items: [
      { label: 'Annonce', sub: 'cinq jours avant, avec le métier', accent: true },
      { label: 'Poste préparé', sub: 'installation type, étiquette' },
      { label: 'Comptes créés', sub: 'messagerie, applications, droits' },
      { label: 'Remise', sub: 'signature, registre mis à jour' },
      { label: 'Départ annoncé', sub: 'liste de ce qu’il détient' },
      { label: 'Retour', sub: 'poste rendu, comptes fermés' },
    ], caption: 'Figure 5 · Le temps accentué est le premier : l’annonce, cinq jours avant, sans laquelle le nouvel employé attend son poste trois jours. Les trois suivants préparent l’arrivée ; les deux derniers ferment le départ, le jour même.', alt: 'Six temps : annonce (accentué), poste préparé, comptes créés, remise, départ annoncé, retour.' },
    calendrier: { title: 'Six semaines pour reprendre la main', unit: 'sem.', items: [
      { label: 'Relevé et étiquetage', note: 'agent installé sur chaque poste, étiquettes collées, premier registre, liste des écarts', from: 0, to: 1, accent: true },
      { label: 'Urgences', note: 'systèmes hors support, portables non chiffrés, comptes d’anciens employés, postes sans utilisateur', from: 1, to: 2 },
      { label: 'Installation type', note: 'une configuration par métier, essayée sur trois postes, puis utilisée pour chaque nouveau poste', from: 1, to: 3 },
      { label: 'Mises à jour et licences', note: 'correctifs poussés chaque mois, licences comptées, celles des partants récupérées', from: 2, to: 5 },
      { label: 'Arrivées, départs, renouvellement', note: 'procédure écrite, poste de prêt, plan de remplacement par cinquièmes', from: 4, to: 6 },
    ], caption: 'Figure 6 · Six semaines dans l’exemple, pour quarante postes. La période accentuée est la première : une semaine pour relever et étiqueter, après laquelle on sait par où commencer. Les urgences se traitent dès la deuxième semaine ; le reste devient un entretien mensuel. Durées indicatives d’un exemple construit.', alt: 'Calendrier de six semaines : relevé et étiquetage (accentué, une semaine), urgences, installation type, mises à jour et licences, arrivées, départs et renouvellement.' },
  },
  en: {
    cover: { eyebrow: 'IT fleet · Algeria · 2027', title: ['Managing a fleet of computers', 'knowing what you have, and who has it'], subtitle: 'A register, a standard build, updates, licences counted, a renewal by fifths', left: { label: 'Nobody knows', sub: 'how many, or who has what' }, right: { label: 'A register', sub: 'one line per machine' } },
    registre: { caption: 'Figure 1 · Forty squares, one per machine, on the day of the first inventory. Twenty-one are in order; seven run a system that is no longer supported, five are late on updates, four have no known user, three laptops are not encrypted. Nineteen machines out of forty need an action. Fleet and breakdown are a constructed example.' },
    couches: { title: 'Managing a fleet, in five layers', layers: [
      { label: 'Inventory', items: [{ name: 'One line per machine: number, user, age, system, last update, read by an agent', sub: 'you know what you have, and who has it', accent: true }] },
      { label: 'Standard build', items: [{ name: 'One configuration per job: same software, same settings, a machine ready in two hours', sub: 'a machine is replaced without redoing everything by hand' }] },
      { label: 'Updates', items: [{ name: 'System and software fixes pushed every month, late machines flagged', sub: 'no machine forgotten for a year' }] },
      { label: 'Licences', items: [{ name: 'Number paid, number installed, number used, due dates, leavers’ accounts taken back', sub: 'no red banner, no licence paid for nobody' }] },
      { label: 'Security', items: [{ name: 'Laptops encrypted, named accounts, no local administrator, remote wipe', sub: 'a lost laptop is only a lost laptop' }] },
    ], caption: 'Figure 2 · The accented layer is the first: the inventory, without which the other four work blind. The standard build makes a machine replaceable; updates and licences are followed machine by machine; security means a lost machine does not give up its data.', alt: 'Five layers: inventory (accented); standard build; updates; licences; security.' },
    vie: { title: 'Six moments in the life of a machine', columns: ['What is done', 'What is noted'], rows: [
      { label: 'Purchase', cells: ['standard build, label stuck on', 'number, purchase date, warranty, supplier'] },
      { label: 'Assignment', cells: ['handed to a person, with their accounts', 'who has it, since when, for which job'] },
      { label: 'Update', cells: ['system and software fixes, every month', 'date of the last run, machines running late'] },
      { label: 'Breakdown', cells: ['diagnosis, loan machine, repair or replacement', 'nature, downtime, part changed'] },
      { label: 'The employee leaves', cells: ['machine returned, accounts closed, data handed over', 'return date, condition, next user'] },
      { label: 'End of life', cells: ['data wiped, licences taken back', 'date of removal, proof of wiping, destination'] },
    ], caption: 'Figure 3 · Six moments, from purchase to end of life. Each has an action and a line in the register: it is the second column that is often missing, and it is what lets you answer “how many machines, and who has what”.', alt: 'Matrix of six moments in the life of a machine, with what is done and what is noted: purchase, assignment, update, breakdown, the employee leaves, end of life.' },
    ages: { caption: 'Figure 4 · On the left, the age of the forty machines: twelve are over five years old. On the right, the number of machines over five years old at the start of each year, if the eight oldest are replaced every year: the backlog is absorbed in five years, with no black year. Invented ages; no hardware price is given.' },
    mouvements: { title: 'An employee arrives and leaves, in six steps', items: [
      { label: 'Notice', sub: 'five days before, with the job', accent: true },
      { label: 'Machine prepared', sub: 'standard build, label' },
      { label: 'Accounts created', sub: 'email, applications, rights' },
      { label: 'Handover', sub: 'signature, register updated' },
      { label: 'Departure announced', sub: 'list of what they hold' },
      { label: 'Return', sub: 'machine back, accounts closed' },
    ], caption: 'Figure 5 · The accented step is the first: the notice, five days before, without which the new employee waits three days for a machine. The next three prepare the arrival; the last two close the departure, on the day itself.', alt: 'Six steps: notice (accented), machine prepared, accounts created, handover, departure announced, return.' },
    calendrier: { title: 'Six weeks to take back control', unit: 'wk', items: [
      { label: 'Inventory and labelling', note: 'agent installed on every machine, labels stuck on, first register, list of gaps', from: 0, to: 1, accent: true },
      { label: 'Urgent items', note: 'systems out of support, unencrypted laptops, former employees’ accounts, machines with no user', from: 1, to: 2 },
      { label: 'Standard build', note: 'one configuration per job, tried on three machines, then used for every new machine', from: 1, to: 3 },
      { label: 'Updates and licences', note: 'fixes pushed every month, licences counted, leavers’ licences taken back', from: 2, to: 5 },
      { label: 'Arrivals, departures, renewal', note: 'written procedure, loan machine, replacement plan by fifths', from: 4, to: 6 },
    ], caption: 'Figure 6 · Six weeks in the example, for forty machines. The accented period is the first: one week to inventory and label, after which you know where to start. Urgent items are handled from the second week; the rest becomes monthly upkeep. Indicative durations from a constructed example.', alt: 'Six-week calendar: inventory and labelling (accented, one week), urgent items, standard build, updates and licences, arrivals, departures and renewal.' },
  },
  ar: {
    cover: { eyebrow: 'حظيرة الحواسيب · الجزائر · 2027', title: ['تسيير حظيرة الحواسيب', 'معرفة ما عندنا، ومن يحوزه'], subtitle: 'سجل، تنصيب نموذجي، تحديثات، رخص معدودة، وتجديد بالأخماس', left: { label: 'لا أحد يعرف', sub: 'كم، ولا من عنده ماذا' }, right: { label: 'سجل', sub: 'سطر لكل حاسوب' } },
    registre: { caption: 'الشكل 1 · أربعون مربعاً، واحد لكل حاسوب، يوم الجرد الأول. واحد وعشرون في حالة سليمة؛ سبعة بنظام لم يعد متابَعاً، خمسة متأخرة في التحديث، أربعة دون مستعمل معروف، وثلاثة محمولة غير مشفَّرة. تسعة عشر حاسوباً من أربعين تتطلب إجراءً. الحظيرة والتوزيع مثال مركَّب.' },
    couches: { title: 'تسيير حظيرة، في خمس طبقات', layers: [
      { label: 'الجرد', items: [{ name: 'سطر لكل حاسوب: الرقم، المستعمل، العمر، النظام، وآخر تحديث، يقرؤها برنامج منصَّب', sub: 'نعرف ما عندنا، ومن يحوزه', accent: true }] },
      { label: 'التنصيب النموذجي', items: [{ name: 'إعداد لكل مهنة: البرامج نفسها، الضبط نفسه، وحاسوب جاهز في ساعتين', sub: 'يُعوَّض الحاسوب دون إعادة كل شيء باليد' }] },
      { label: 'التحديثات', items: [{ name: 'تصحيحات النظام والبرامج تُدفع كل شهر، والحواسيب المتأخرة يُنبَّه إليها', sub: 'لا حاسوب منسي طوال سنة' }] },
      { label: 'الرخص', items: [{ name: 'العدد المدفوع، المنصَّب، والمستعمَل، تواريخ الآجال، وحسابات المغادرين مستعادة', sub: 'لا شريط أحمر، ولا رخصة مدفوعة لا لأحد' }] },
      { label: 'الأمن', items: [{ name: 'محمولة مشفَّرة، حسابات اسمية، لا مسؤول محلي، ومحو عن بعد', sub: 'المحمول الضائع ليس إلا محمولاً ضائعاً' }] },
    ], caption: 'الشكل 2 · الطبقة المبرزة هي الأولى: الجرد، ودونه تعمل الأربع الأخرى عمياء. التنصيب النموذجي يجعل الحاسوب قابلاً للتعويض؛ والتحديثات والرخص تُتابَع حاسوباً حاسوباً؛ والأمن يجعل الحاسوب الضائع لا يسلّم بياناته.', alt: 'خمس طبقات: الجرد (مبرزة)؛ التنصيب النموذجي؛ التحديثات؛ الرخص؛ الأمن.' },
    vie: { title: 'ست لحظات في حياة حاسوب', columns: ['ما نفعله', 'ما نسجّله'], rows: [
      { label: 'الشراء', cells: ['تنصيب نموذجي، وملصق يوضع', 'الرقم، تاريخ الشراء، الضمان، والمورّد'] },
      { label: 'الإسناد', cells: ['يُسلَّم لشخص، مع حساباته', 'من يحوزه، منذ متى، ولأي منصب'] },
      { label: 'التحديث', cells: ['تصحيحات النظام والبرامج، كل شهر', 'تاريخ آخر مرور، والحواسيب المتأخرة'] },
      { label: 'العطل', cells: ['تشخيص، حاسوب إعارة، إصلاح أو تعويض', 'نوعه، مدة التوقف، والقطعة المغيَّرة'] },
      { label: 'مغادرة العامل', cells: ['حاسوب يُعاد، حسابات تُغلق، وبيانات تُسلَّم', 'تاريخ الإعادة، الحالة، والمستعمل القادم'] },
      { label: 'نهاية العمر', cells: ['بيانات تُمحى، ورخص تُستعاد', 'تاريخ الخروج، دليل المحو، والوجهة'] },
    ], caption: 'الشكل 3 · ست لحظات، من الشراء إلى نهاية العمر. لكل واحدة حركة وسطر في السجل: والعمود الثاني هو الذي ينقص غالباً، وهو الذي يسمح بالجواب عن «كم حاسوباً، ومن عنده ماذا».', alt: 'مصفوفة ست لحظات في حياة حاسوب، مع ما نفعله وما نسجّله: الشراء، الإسناد، التحديث، العطل، مغادرة العامل، ونهاية العمر.' },
    ages: { caption: 'الشكل 4 · على اليمين، عمر الحواسيب الأربعين: اثنا عشر تجاوزت خمس سنوات. وعلى اليسار، عدد الحواسيب التي تجاوزت خمس سنوات في بداية كل سنة، إذا استُبدلت كل سنة الثمانية الأقدم: التأخر يُمتصّ في خمس سنوات، دون سنة سوداء. أعمار مخترَعة؛ ولا يُعطى أي سعر للعتاد.' },
    mouvements: { title: 'قدوم عامل ومغادرته، في ست مراحل', items: [
      { label: 'الإعلام', sub: 'خمسة أيام قبل، مع المهنة', accent: true },
      { label: 'حاسوب محضَّر', sub: 'تنصيب نموذجي، وملصق' },
      { label: 'حسابات منشأة', sub: 'البريد، التطبيقات، والصلاحيات' },
      { label: 'التسليم', sub: 'توقيع، وسجل محدَّث' },
      { label: 'مغادرة معلَنة', sub: 'قائمة ما يحوزه' },
      { label: 'الإعادة', sub: 'حاسوب يُعاد، وحسابات تُغلق' },
    ], caption: 'الشكل 5 · المرحلة المبرزة هي الأولى: الإعلام، خمسة أيام قبل، ودونه ينتظر العامل الجديد حاسوبه ثلاثة أيام. والثلاث الموالية تحضّر القدوم؛ والأخيرتان تغلقان المغادرة، في اليوم نفسه.', alt: 'ست مراحل: الإعلام (مبرزة)، حاسوب محضَّر، حسابات منشأة، التسليم، مغادرة معلَنة، الإعادة.' },
    calendrier: { title: 'ستة أسابيع لاستعادة التحكّم', unit: 'أسبوع', items: [
      { label: 'الجرد والملصقات', note: 'برنامج منصَّب على كل حاسوب، ملصقات توضع، سجل أول، وقائمة الفوارق', from: 0, to: 1, accent: true },
      { label: 'المستعجل', note: 'أنظمة خارج الدعم، محمولة غير مشفَّرة، حسابات عمّال سابقين، وحواسيب دون مستعمل', from: 1, to: 2 },
      { label: 'التنصيب النموذجي', note: 'إعداد لكل مهنة، يُجرَّب على ثلاثة حواسيب، ثم يُستعمل لكل حاسوب جديد', from: 1, to: 3 },
      { label: 'التحديثات والرخص', note: 'تصحيحات تُدفع كل شهر، رخص تُعدّ، ورخص المغادرين تُستعاد', from: 2, to: 5 },
      { label: 'القدوم، المغادرة، والتجديد', note: 'إجراء مكتوب، حاسوب إعارة، ومخطط استبدال بالأخماس', from: 4, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع في المثال، لأربعين حاسوباً. الفترة المبرزة هي الأولى: أسبوع للجرد والملصقات، نعرف بعده من أين نبدأ. والمستعجل يُعالَج من الأسبوع الثاني؛ والباقي يصير صيانة شهرية. مدد تقريبية لمثال مركَّب.', alt: 'تقويم ستة أسابيع: الجرد والملصقات (مبرزة، أسبوع)، المستعجل، التنصيب النموذجي، التحديثات والرخص، القدوم والمغادرة والتجديد.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      registre: { svg: registre(e.registre, rtl), caption: t.registre.caption, alt: e.registre.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      vie: { svg: matrix({ title: t.vie.title, columns: t.vie.columns, rows: t.vie.rows, rtl }), caption: t.vie.caption, alt: t.vie.alt },
      ages: { svg: ages(e.ages, rtl), caption: t.ages.caption, alt: e.ages.alt },
      mouvements: { svg: steps({ title: t.mouvements.title, steps: t.mouvements.items, arrows: true, rtl }), caption: t.mouvements.caption, alt: t.mouvements.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
