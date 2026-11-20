import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { journee, jauges, STRINGS as SC } from './custom/serveur.mjs';
export const slug = 'serveur-lent-entreprise-algerie-2027-logiciel-qui-rame-le-matin-memoire-disques-sauvegarde-en-pleine-journee-mesurer-avant-de-remplacer';
const T = {
  fr: {
    cover: { eyebrow: 'Serveur d’entreprise · Algérie · 2027', title: ['Serveur lent en entreprise', 'mesurer avant de remplacer'], subtitle: 'Tâches en pleine journée, mémoire, disques, base qui grossit, système en fin de support, dans cet ordre', left: { label: 'Le logiciel rame le matin', sub: '40 secondes pour enregistrer un bon' }, right: { label: 'Quatre ressources mesurées', sub: 'régler, renforcer ou remplacer' } },
    journee: { caption: 'Figure 1 · La journée du serveur, de 7 heures à 19 heures. La sauvegarde, l’analyse antivirus complète et un rapport de la comptabilité se superposent entre 9 h 30 et 11 h 30, pendant que l’équipe travaille. Le temps nécessaire pour enregistrer un bon passe alors de 3 secondes à 14, 38, 40 puis 22, et retombe à 3 le reste de la journée. Horaires et durées sont un exemple construit : les vôtres se lisent dans le planificateur de tâches du serveur.' },
    jauges: { caption: 'Figure 2 · Les quatre ressources du même serveur, relevées à 10 h 15 et à 15 heures. Au pire moment, le processeur n’est qu’à 38 % ; la mémoire est à 97 % et le disque occupé à 100 %, avec 180 millisecondes par opération au lieu de 9. Le réseau n’y est pour rien. En bas, la base de données : 9,4 Go, pour une limite de 10 Go dans l’édition Express de SQL Server. Les valeurs sont un exemple construit.' },
    causes: { title: 'Six causes fréquentes, et comment les reconnaître', columns: ['Le signe', 'Ce qu’on fait'], rows: [
      { label: 'Des tâches lourdes en pleine journée', cells: ['lent à heures fixes, rapide le reste du temps', 'sauvegarde, antivirus et rapports déplacés hors des heures de travail'] },
      { label: 'Pas assez de mémoire', cells: ['mémoire au plafond, disque qui travaille sans arrêt', 'mémoire ajoutée, ou rôles séparés sur deux machines'] },
      { label: 'Des disques durs mécaniques', cells: ['disque occupé à 100 %, processeur au repos', 'système et base passés sur disques SSD en miroir'] },
      { label: 'Une base qui a grossi', cells: ['de plus en plus lent d’année en année', 'index, archivage des vieilles années, édition adaptée à la taille'] },
      { label: 'Trop de rôles sur une machine', cells: ['fichiers, base et bureaux à distance ensemble', 'un rôle par machine ou par machine virtuelle'] },
      { label: 'Le serveur n’y est pour rien', cells: ['lent à l’agence, rapide au siège', 'liaison entre sites, poste ou réseau à regarder d’abord'] },
    ], caption: 'Figure 3 · Chaque cause a un signe qui la trahit, et ce signe se lit sans rien démonter. Les trois premières lignes sont celles de l’exemple. La dernière rappelle que le serveur est souvent accusé à la place d’une liaison, d’un poste ou d’un réseau Wi-Fi.', alt: 'Matrice de six causes de lenteur : tâches lourdes en pleine journée, mémoire insuffisante, disques durs mécaniques, base qui a grossi, trop de rôles sur une machine, serveur hors de cause ; le signe et ce qu’on fait.' },
    verifications: { title: 'Six vérifications avant d’acheter un serveur', items: [
      { label: 'Les heures', sub: 'quand cela rame, et pour qui' },
      { label: 'Les tâches', sub: 'ce qui est planifié à ces heures', accent: true },
      { label: 'Les quatre jauges', sub: 'processeur, mémoire, disque, réseau' },
      { label: 'La base', sub: 'taille, édition, entretien' },
      { label: 'Le système', sub: 'version, fin de support, âge' },
      { label: 'La décision', sub: 'régler, renforcer ou remplacer' },
    ], caption: 'Figure 4 · La vérification accentuée est la deuxième : la liste des tâches planifiées sur le serveur, avec leur heure et leur durée, est celle qui évite le plus d’achats. Les six tiennent en une semaine de mesure et se terminent par une décision écrite.', alt: 'Six vérifications : les heures, les tâches (accentuée), les quatre jauges, la base, le système, la décision.' },
    couches: { title: 'Un serveur qui répond, en cinq couches', layers: [
      { label: 'Matériel', items: [{ name: 'Mémoire suffisante, disques SSD en miroir, alimentation protégée par un onduleur, machine encore sous garantie', sub: 'une grappe de disques dégradée ralentit tout jusqu’au remplacement du disque' }] },
      { label: 'Système', items: [{ name: 'Une version encore supportée par son éditeur, des mises à jour posées le soir, un rôle par machine', sub: 'Windows Server 2016 sort du support étendu le 12 janvier 2027' }] },
      { label: 'Données', items: [{ name: 'Une base entretenue, avec ses index, ses vieilles années archivées, une taille suivie, une édition adaptée', sub: 'l’édition Express s’arrête à 10 Go par base et 1 410 Mo de mémoire' }] },
      { label: 'Planification', items: [{ name: 'Sauvegardes, analyses antivirus et rapports lourds en dehors des heures de travail, sans se chevaucher', sub: 'c’est le réglage qui ne demande aucun achat', accent: true }] },
      { label: 'Mesure', items: [{ name: 'Relevé continu des quatre ressources, alerte au dépassement, courbe de la semaine lue chaque mois', sub: 'on sait pourquoi c’est lent avant que quelqu’un appelle' }] },
    ], caption: 'Figure 5 · La couche accentuée est la planification : déplacer ce qui est lourd hors des heures de travail ne demande aucun achat. Le matériel, le système et les données, au-dessus, se renforcent ou se remplacent ; la mesure, en dessous, dit laquelle des quatre autres couches est en cause.', alt: 'Cinq couches : matériel ; système ; données ; planification (accentuée) ; mesure.' },
    calendrier: { title: 'Retrouver un serveur rapide en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Mesurer', note: 'quatre ressources relevées pendant une semaine, heures de lenteur notées, tâches planifiées listées, taille et édition de la base', from: 0, to: 1 },
      { label: 'Régler', note: 'tâches lourdes déplacées le soir, exclusions de l’antivirus sur la base, index, archivage, mises à jour en retard', from: 1, to: 2, accent: true },
      { label: 'Renforcer ou remplacer', note: 'mémoire et disques SSD si la machine le vaut, sinon nouveau serveur ou hébergement, migration essayée puis faite', from: 2, to: 3 },
    ], caption: 'Figure 6 · Trois semaines dans l’exemple, la première sans rien changer. La semaine accentuée est celle des réglages, qui ramène le pire moment de quarante secondes à douze sans achat. La troisième dépend de l’âge de la machine et de la date de fin de support de son système.', alt: 'Calendrier de trois semaines : mesurer, régler (accentué), renforcer ou remplacer.' },
  },
  en: {
    cover: { eyebrow: 'Company server · Algeria · 2027', title: ['A slow company server', 'measure before replacing'], subtitle: 'Daytime tasks, memory, disks, a database that has grown, a system near end of support, in that order', left: { label: 'Slow every morning', sub: '40 seconds to save a delivery note' }, right: { label: 'Four resources measured', sub: 'tune, reinforce or replace' } },
    journee: { caption: 'Figure 1 · The server’s day, from 7:00 to 19:00. The backup, the full antivirus scan and an accounting report overlap between 9:30 and 11:30, while the team is working. The time needed to save a delivery note then goes from 3 seconds to 14, 38, 40 and 22, and falls back to 3 for the rest of the day. Times and durations are a constructed example: yours are read in the server’s task scheduler.' },
    jauges: { caption: 'Figure 2 · The four resources of the same server, read at 10:15 and at 15:00. At the worst moment the processor is only at 38 %; memory is at 97 % and the disk is busy 100 % of the time, with 180 milliseconds per operation instead of 9. The network is not involved. At the bottom, the database: 9.4 GB, against a 10 GB limit in SQL Server Express. The values are a constructed example.' },
    causes: { title: 'Six common causes, and how to recognise them', columns: ['The sign', 'What is done'], rows: [
      { label: 'Heavy tasks in the middle of the day', cells: ['slow at fixed hours, fast the rest of the time', 'backup, antivirus and reports moved outside working hours'] },
      { label: 'Not enough memory', cells: ['memory at the ceiling, disk working non-stop', 'memory added, or roles split across two machines'] },
      { label: 'Mechanical hard disks', cells: ['disk busy at 100 %, processor idle', 'system and database moved to mirrored SSDs'] },
      { label: 'A database that has grown', cells: ['slower and slower, year after year', 'indexes, old years archived, an edition suited to its size'] },
      { label: 'Too many roles on one machine', cells: ['files, database and remote desktops together', 'one role per machine or per virtual machine'] },
      { label: 'The server is not to blame', cells: ['slow at the branch, fast at head office', 'look first at the link between sites, the PC or the network'] },
    ], caption: 'Figure 3 · Each cause has a sign that gives it away, and that sign can be read without taking anything apart. The first three rows are those of the example. The last is a reminder that the server is often blamed in place of a link, a workstation or a Wi-Fi network.', alt: 'Matrix of six causes of slowness: heavy daytime tasks, insufficient memory, mechanical disks, a database that has grown, too many roles on one machine, server not to blame; the sign and what is done.' },
    verifications: { title: 'Six checks before buying a server', items: [
      { label: 'The hours', sub: 'when it crawls, and for whom' },
      { label: 'The tasks', sub: 'what is scheduled at those hours', accent: true },
      { label: 'The four gauges', sub: 'processor, memory, disk, network' },
      { label: 'The database', sub: 'size, edition, upkeep' },
      { label: 'The system', sub: 'version, end of support, age' },
      { label: 'The decision', sub: 'tune, reinforce or replace' },
    ], caption: 'Figure 4 · The accented check is the second: the list of tasks scheduled on the server, with their time and duration, is the one that avoids the most purchases. The six fit in one week of measuring and end with a written decision.', alt: 'Six checks: the hours, the tasks (accented), the four gauges, the database, the system, the decision.' },
    couches: { title: 'A server that responds, in five layers', layers: [
      { label: 'Hardware', items: [{ name: 'Enough memory, mirrored SSDs, power protected by a UPS, a machine still under warranty', sub: 'a degraded disk array slows everything down until the disk is replaced' }] },
      { label: 'System', items: [{ name: 'A version still supported by its vendor, updates applied in the evening, one role per machine', sub: 'Windows Server 2016 leaves extended support on 12 January 2027' }] },
      { label: 'Data', items: [{ name: 'A maintained database, with its indexes, old years archived, its size tracked, an edition that fits', sub: 'the Express edition stops at 10 GB per database and 1,410 MB of memory' }] },
      { label: 'Scheduling', items: [{ name: 'Backups, antivirus scans and heavy reports outside working hours, without overlapping', sub: 'it is the setting that requires no purchase', accent: true }] },
      { label: 'Measurement', items: [{ name: 'Continuous reading of the four resources, an alert on overrun, the week’s curve read every month', sub: 'you know why it is slow before anyone calls' }] },
    ], caption: 'Figure 5 · The accented layer is scheduling: moving what is heavy outside working hours requires no purchase. Hardware, system and data, above, are reinforced or replaced; measurement, below, says which of the other four layers is at fault.', alt: 'Five layers: hardware; system; data; scheduling (accented); measurement.' },
    calendrier: { title: 'Getting a fast server back in 2027, in weeks', unit: 'wk', items: [
      { label: 'Measure', note: 'four resources read for a week, slow hours noted, scheduled tasks listed, size and edition of the database', from: 0, to: 1 },
      { label: 'Tune', note: 'heavy tasks moved to the evening, antivirus exclusions on the database, indexes, archiving, overdue updates', from: 1, to: 2, accent: true },
      { label: 'Reinforce or replace', note: 'memory and SSDs if the machine is worth it, otherwise a new server or hosting, migration rehearsed then done', from: 2, to: 3 },
    ], caption: 'Figure 6 · Three weeks in the example, the first with nothing changed. The accented week is tuning, which brings the worst moment from forty seconds to twelve with no purchase. The third depends on the age of the machine and on its system’s end-of-support date.', alt: 'Three-week calendar: measure, tune (accented), reinforce or replace.' },
  },
  ar: {
    cover: { eyebrow: 'خادم المؤسسة · الجزائر · 2027', title: ['خادم بطيء في المؤسسة', 'القياس قبل التعويض'], subtitle: 'مهام في وسط النهار، الذاكرة، الأقراص، قاعدة كبرت، ونظام يقترب من نهاية الدعم، بهذا الترتيب', left: { label: 'البرنامج يتثاقل كل صباح', sub: '40 ثانية لتسجيل وصل' }, right: { label: 'أربعة موارد مَقيسة', sub: 'ضبط، أو تقوية، أو تعويض' } },
    journee: { caption: 'الشكل 1 · يوم الخادم، من السابعة صباحاً إلى السابعة مساءً. النسخ الاحتياطي والفحص الكامل لمضاد الفيروسات وتقرير للمحاسبة تتراكب بين التاسعة والنصف والحادية عشرة والنصف، والفريق يعمل. فينتقل الوقت اللازم لتسجيل وصل من 3 ثوانٍ إلى 14 ثم 38 ثم 40 ثم 22، ويعود إلى 3 باقي اليوم. الأوقات والمدد مثال مركَّب: وأوقاتكم تُقرأ في مجدوِل المهام على الخادم.' },
    jauges: { caption: 'الشكل 2 · الموارد الأربعة للخادم نفسه، مقروءة على العاشرة والربع وعلى الثالثة بعد الظهر. في أسوأ لحظة، المعالج عند 38 بالمئة فقط؛ والذاكرة عند 97 بالمئة والقرص مشغول 100 بالمئة، مع 180 ميلي ثانية لكل عملية بدل 9. والشبكة لا دخل لها. وفي الأسفل قاعدة البيانات: 9,4 غيغا، مقابل حد 10 غيغا في طبعة ⁦SQL Server Express⁩. القيم مثال مركَّب.' },
    causes: { title: 'ستة أسباب متكررة، وكيف نتعرّف عليها', columns: ['العلامة', 'ما نفعله'], rows: [
      { label: 'مهام ثقيلة في وسط النهار', cells: ['بطيء في ساعات ثابتة، سريع باقي الوقت', 'نقل النسخ ومضاد الفيروسات والتقارير خارج ساعات العمل'] },
      { label: 'ذاكرة غير كافية', cells: ['الذاكرة عند السقف، والقرص يشتغل دون توقف', 'إضافة ذاكرة، أو فصل الأدوار على جهازين'] },
      { label: 'أقراص صلبة ميكانيكية', cells: ['القرص مشغول 100 بالمئة والمعالج في راحة', 'نقل النظام والقاعدة إلى قرصَي SSD متطابقين'] },
      { label: 'قاعدة بيانات كبرت', cells: ['أبطأ فأبطأ، سنة بعد سنة', 'فهارس، أرشفة السنوات القديمة، وطبعة تناسب الحجم'] },
      { label: 'أدوار كثيرة على جهاز واحد', cells: ['الملفات والقاعدة والمكاتب عن بعد معاً', 'دور واحد لكل جهاز أو لكل جهاز افتراضي'] },
      { label: 'الخادم لا دخل له', cells: ['بطيء في الوكالة، سريع في المقر', 'يُنظر أولاً في الربط بين المواقع أو الحاسوب أو الشبكة'] },
    ], caption: 'الشكل 3 · لكل سبب علامة تكشفه، وهذه العلامة تُقرأ دون تفكيك شيء. السطور الثلاثة الأولى هي سطور المثال. والأخير يذكّر بأن الخادم يُتَّهم كثيراً مكان ربط أو حاسوب أو شبكة واي فاي.', alt: 'مصفوفة ستة أسباب للبطء: مهام ثقيلة في النهار، ذاكرة غير كافية، أقراص ميكانيكية، قاعدة كبرت، أدوار كثيرة على جهاز واحد، خادم لا دخل له؛ العلامة وما نفعله.' },
    verifications: { title: 'ست معاينات قبل شراء خادم', items: [
      { label: 'الساعات', sub: 'متى يتثاقل، ولمن' },
      { label: 'المهام', sub: 'ما هو مجدوَل في هذه الساعات', accent: true },
      { label: 'العدادات الأربعة', sub: 'المعالج، الذاكرة، القرص، الشبكة' },
      { label: 'القاعدة', sub: 'الحجم، الطبعة، الصيانة' },
      { label: 'النظام', sub: 'النسخة، نهاية الدعم، العمر' },
      { label: 'القرار', sub: 'ضبط، أو تقوية، أو تعويض' },
    ], caption: 'الشكل 4 · المعاينة المبرزة هي الثانية: قائمة المهام المجدوَلة على الخادم، بساعتها ومدتها، هي التي تجنّب أكثر المشتريات. والست تسعها أسبوع من القياس وتنتهي بقرار مكتوب.', alt: 'ست معاينات: الساعات، المهام (مبرزة)، العدادات الأربعة، القاعدة، النظام، القرار.' },
    couches: { title: 'خادم يستجيب، في خمس طبقات', layers: [
      { label: 'العتاد', items: [{ name: 'ذاكرة كافية، قرصا SSD متطابقان، تغذية محمية بمموِّج، وجهاز ما زال تحت الضمان', sub: 'مجموعة أقراص فيها قرص معطَّل تُبطئ كل شيء حتى يُعوَّض' }] },
      { label: 'النظام', items: [{ name: 'نسخة ما زال ناشرها يدعمها، تحديثات تُنصَّب في المساء، ودور واحد لكل جهاز', sub: 'نسخة ⁦Windows Server 2016⁩ تخرج من الدعم الممدَّد يوم 12 جانفي 2027' }] },
      { label: 'البيانات', items: [{ name: 'قاعدة مصانة، بفهارسها، وسنواتها القديمة مؤرشفة، وحجم متابَع، وطبعة مناسبة', sub: 'الطبعة المجانية تقف عند 10 غيغا للقاعدة و⁦1 410⁩ ميغا من الذاكرة' }] },
      { label: 'الجدولة', items: [{ name: 'النسخ الاحتياطي وفحص مضاد الفيروسات والتقارير الثقيلة خارج ساعات العمل، دون تراكب', sub: 'هذا هو الإعداد الذي لا يتطلب أي شراء', accent: true }] },
      { label: 'القياس', items: [{ name: 'قراءة متواصلة للموارد الأربعة، تنبيه عند التجاوز، ومنحنى الأسبوع يُقرأ كل شهر', sub: 'نعرف لماذا هو بطيء قبل أن يتصل أحد' }] },
    ], caption: 'الشكل 5 · الطبقة المبرزة هي الجدولة: نقل ما هو ثقيل خارج ساعات العمل لا يتطلب أي شراء. العتاد والنظام والبيانات، فوقها، تُقوَّى أو تُعوَّض؛ والقياس، تحتها، يقول أي الطبقات الأربع الأخرى هي المعنية.', alt: 'خمس طبقات: العتاد؛ النظام؛ البيانات؛ الجدولة (مبرزة)؛ القياس.' },
    calendrier: { title: 'استرجاع خادم سريع سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القياس', note: 'قراءة الموارد الأربعة أسبوعاً، تدوين ساعات البطء، جرد المهام المجدوَلة، وحجم القاعدة وطبعتها', from: 0, to: 1 },
      { label: 'الضبط', note: 'نقل المهام الثقيلة إلى المساء، استثناءات مضاد الفيروسات على القاعدة، الفهارس، الأرشفة، والتحديثات المتأخرة', from: 1, to: 2, accent: true },
      { label: 'التقوية أو التعويض', note: 'ذاكرة وأقراص SSD إن كان الجهاز يستحق، وإلا خادم جديد أو استضافة، وترحيل يُجرَّب ثم يُنجز', from: 2, to: 3 },
    ], caption: 'الشكل 6 · ثلاثة أسابيع في المثال، الأول دون تغيير شيء. الأسبوع المبرز هو الضبط، وهو ينزل بأسوأ لحظة من أربعين ثانية إلى اثنتي عشرة دون شراء. والثالث يتوقف على عمر الجهاز وتاريخ نهاية دعم نظامه.', alt: 'تقويم ثلاثة أسابيع: القياس، الضبط (مبرز)، التقوية أو التعويض.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      journee: { svg: journee(e.journee, rtl), caption: t.journee.caption, alt: e.journee.alt },
      jauges: { svg: jauges(e.jauges, rtl), caption: t.jauges.caption, alt: e.jauges.alt },
      causes: { svg: matrix({ title: t.causes.title, columns: t.causes.columns, rows: t.causes.rows, rtl }), caption: t.causes.caption, alt: t.causes.alt },
      verifications: { svg: steps({ title: t.verifications.title, steps: t.verifications.items, arrows: true, rtl }), caption: t.verifications.caption, alt: t.verifications.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 3, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
