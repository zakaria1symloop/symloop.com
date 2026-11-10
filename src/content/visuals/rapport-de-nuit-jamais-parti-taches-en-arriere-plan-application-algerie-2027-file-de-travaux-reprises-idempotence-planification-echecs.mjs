import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { attempts, night, STRINGS as JB } from './custom/jobs.mjs';
export const slug = 'rapport-de-nuit-jamais-parti-taches-en-arriere-plan-application-algerie-2027-file-de-travaux-reprises-idempotence-planification-echecs';
const T = {
  fr: {
    cover: { eyebrow: 'Arrière-plan · Files · Planification · 2027', title: ['« Le rapport de nuit', 'n’est jamais parti,', 'et personne ne l’a su »'], subtitle: 'Ce qu’on construit pour que les envois, les exports, les recalculs et les rapports tournent sans qu’on les regarde : une file de travaux, un verrou par tâche, des reprises espacées, une clé contre les doublons, une file des échecs lue par un humain, et une rattrapeuse quand le serveur redémarre', left: { label: 'Un script lancé à minuit', sub: 'qui tombe en silence' }, right: { label: 'Une file qui reprend', sub: 'et une alerte quand elle n’y arrive pas' } },
    couches: { title: 'Des tâches en arrière-plan qui tiennent, en cinq couches', layers: [
      { label: 'Demandes', items: [{ name: 'Tout ce qui ne doit pas bloquer l’écran : envois, exports, recalculs, rapports, relances ; une tâche avec priorité et échéance', sub: 'l’écran répond en une seconde ; la tâche fait le travail derrière' }] },
      { label: 'File de travaux', items: [{ name: 'Table de tâches dans la base : état, priorité, échéance, charge, clé, tentatives, bail ; des exécutants prennent la suivante', sub: 'la file est dans la base, sauvegardée avec elle, visible dans l’application' }] },
      { label: 'Exécution', items: [{ name: 'Verrou avec bail de quelques minutes, durée maximale, bail renouvelé ou relâché si l’exécutant meurt ; jamais deux sur la même', sub: 'le verrou est tenu par la base de données, pas par l’espoir' }] },
      { label: 'Reprises et échecs', items: [{ name: 'Échec → attente qui double, tirée au hasard, plafonnée ; clé pour ne pas refaire le fait ; dernier essai → file des échecs et alerte', sub: 'rien n’est perdu, rien n’est rejoué à l’infini, et un humain lit la file des échecs', accent: true }] },
      { label: 'Planification et mesure', items: [{ name: 'Heure fixe avec rattrapeuse au démarrage, débit lissé, journal de ce qui a tourné, tableau des retards et échecs, alerte', sub: 'à 7 h, le gérant sait ce qui a tourné cette nuit et ce qui n’a pas tourné' }] },
    ], caption: 'Figure 1 · La couche accentuée est celle qui distingue une file de travaux d’un script lancé à minuit : l’échec y est un état prévu, avec une attente, une clé et une sortie. Sans elle, une coupure du fournisseur SMS à 6 h 30 fait perdre les rappels du jour, ou les envoie deux fois.', alt: 'Cinq couches : demandes, file de travaux, exécution, reprises et échecs (accentuée), planification et mesure.' },
    etapes: { title: 'Ce qu’une tâche doit savoir faire, en six points', items: [
      { label: 'Être petite', sub: '1 200 envois = 12 tâches de 100 ; un export = lots ; une tâche courte reprend vite' },
      { label: 'Porter sa clé', sub: 'idempotence : la même tâche deux fois = une fois' },
      { label: 'Se verrouiller', sub: 'bail renouvelé ; relâché si l’exécutant meurt', accent: true },
      { label: 'Échouer proprement', sub: 'cause écrite ; attente qui double, hasard, plafond' },
      { label: 'Respecter un débit', sub: '1 message par seconde ; 9 lots d’export ; pas de rafale' },
      { label: 'Laisser une trace', sub: 'début, fin, résultat, tentatives ; lisible par le gérant' },
    ], caption: 'Figure 2 · Le troisième point est accentué parce que c’est celui qui évite le pire : deux exécutants qui prennent la même tâche et envoient deux fois. Le premier point est celui qui rend tous les autres faciles : une tâche de cent envois reprend en dix secondes, une tâche de mille deux cents reprend en deux minutes et refait ce qui était fait.', alt: 'Six points : être petite, porter sa clé, se verrouiller (accentué), échouer proprement, respecter un débit, laisser une trace.' },
    tentatives: { caption: 'Figure 3 · Une tâche « envoyer 1 200 rappels » échoue trois fois parce que le fournisseur est indisponible, puis réussit à la quatrième tentative ; les attentes doublent et sont tirées au hasard dans une fenêtre, pour que mille tâches en échec ne repartent pas toutes à la même seconde, et sont plafonnées. Les 380 messages partis à la première tentative ne repartent pas, grâce à la clé d’idempotence. Après le dernier essai, la tâche irait dans la file des échecs avec une alerte. Les durées sont un exemple construit.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Le rapport de nuit n’est pas parti', cells: ['Le serveur a redémarré à 2 h 04 ; le script de 2 h n’a pas tourné ; personne ne l’a su', 'rattrapeuse au démarrage : les tâches manquées sont reprises ; alerte sinon'] },
      { label: 'Les SMS sont partis deux fois', cells: ['Deux serveurs ont lancé le même envoi ; 1 200 clients, deux rappels chacun', 'verrou avec bail dans la base ; clé d’idempotence par message'] },
      { label: 'L’export plante à la moitié', cells: ['50 000 lignes, le navigateur attend, la connexion coupe, tout est perdu', 'tâche en arrière-plan par lots ; fichier déposé ; lien envoyé ; reprise au lot'] },
      { label: 'Le fournisseur SMS est tombé', cells: ['Les 1 200 rappels ont échoué à 6 h 30 ; personne n’a réessayé', 'reprises à 30 s, 2 min, 8 min avec hasard ; file des échecs après le plafond'] },
      { label: 'L’envoi s’est fait couper', cells: ['1 200 messages en dix secondes ; le fournisseur a bloqué le compte', 'débit lissé : lots de 100, un message par seconde, selon le fournisseur'] },
      { label: 'Une tâche tourne depuis trois heures', cells: ['Un recalcul bloqué tient la file ; tout attend derrière', 'durée maximale ; bail expiré → tâche relâchée, marquée ; la file avance'] },
    ], caption: 'Figure 4 · Les deux premières lignes se règlent par la rattrapeuse et par le verrou ; les deux suivantes par les lots et les reprises ; les deux dernières par le débit et la durée maximale. Aucune ne se règle par un développeur qui se lève la nuit.', alt: 'Matrice de six situations : rapport de nuit non parti, SMS partis deux fois, export planté, fournisseur SMS tombé, envoi coupé, tâche bloquée ; ce qui se passe et ce que l’application fait.' },
    nuit: { caption: 'Figure 5 · La nuit d’un serveur, sur deux exécutants : la sauvegarde tient le verrou « base » et le nettoyage attend ; l’export comptable part par lots ; le rapport du lundi est manqué par un redémarrage à 2 h 04 et repris par la rattrapeuse à 2 h 15 ; les 1 200 rappels de rendez-vous partent à 6 h 30 en lots de cent, un message par seconde ; le rapport part à 7 h avec ce qui a tourné. Les horaires sont un exemple construit.' },
    calendrier: { title: 'Des tâches en arrière-plan qui tiennent en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Inventaire des tâches', note: 'tout ce qui tourne sans écran : envois, exports, recalculs, rapports, relances ; priorité, échéance, débit, durée max, qui est alerté ; signés', from: 0, to: 1 },
      { label: 'File et exécutants', note: 'table de tâches dans la base, exécutants, verrou avec bail, durée maximale, tableau des tâches dans l’application', from: 1, to: 2 },
      { label: 'Reprises et échecs', note: 'barème d’attente avec hasard et plafond, clé d’idempotence, file des échecs, alerte, relance manuelle', from: 2, to: 3, accent: true },
      { label: 'Planification', note: 'tâches à heure fixe, rattrapeuse au démarrage, verrous entre tâches, débit lissé pour les envois', from: 3, to: 4 },
      { label: 'Migration des scripts', note: 'les scripts de nuit existants deviennent des tâches, un par un, avec leur journal ; les envois passent par la file', from: 4, to: 5 },
      { label: 'Mesure', note: 'journal du matin, tâches en retard et en échec, taille de la file, première cause d’échec de la semaine', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines, et la première sans code : l’inventaire de tout ce qui tourne sans écran est ce que personne n’a jamais écrit, et c’est ce qui dit combien de tâches, quels débits et qui est alerté. La troisième semaine est accentuée parce que les reprises et la file des échecs sont ce qui fait qu’une panne du fournisseur est un retard et pas une perte.', alt: 'Frise de six semaines : inventaire des tâches, file et exécutants, reprises et échecs (accentué), planification, migration des scripts, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Background · Queues · Scheduling · 2027', title: ['“The night report', 'never left, and', 'nobody knew”'], subtitle: 'What gets built so that sends, exports, recomputes and reports run without being watched: a work queue, a lock per task, spaced retries, a key against duplicates, a failure queue read by a human, and a catch-up when the server restarts', left: { label: 'A script launched at midnight', sub: 'that fails in silence' }, right: { label: 'A queue that retries', sub: 'and an alert when it cannot' } },
    couches: { title: 'Background tasks that hold, in five layers', layers: [
      { label: 'Requests', items: [{ name: 'Everything that must not block the screen: sends, exports, recomputes, reports, reminders; a task with priority and due time', sub: 'the screen answers in a second; the task does the work behind' }] },
      { label: 'Work queue', items: [{ name: 'Task table in the database: state, priority, due time, payload, idempotency key, attempts, lease; workers take the next one', sub: 'the queue is in the database, backed up with it, visible in the application' }] },
      { label: 'Execution', items: [{ name: 'Lock with a lease of a few minutes, maximum duration, lease renewed or released if the worker dies; never two on the same', sub: 'the lock is held by the database, not by hope' }] },
      { label: 'Retries and failures', items: [{ name: 'Failure → wait that doubles, drawn at random, capped; key so the done part is not redone; last attempt → failure queue and alert', sub: 'nothing is lost, nothing is replayed forever, and a human reads the failure queue', accent: true }] },
      { label: 'Scheduling and measurement', items: [{ name: 'Fixed time with start-up catch-up, smoothed rate, log of what ran, board of late and failed tasks, alert', sub: 'at 7:00, the manager knows what ran tonight and what did not' }] },
    ], caption: 'Figure 1 · The accented layer is what distinguishes a work queue from a script launched at midnight: failure there is a planned state, with a wait, a key and an exit. Without it, an SMS provider outage at 06:30 loses the day’s reminders, or sends them twice.', alt: 'Five layers: requests, work queue, execution, retries and failures (accented), scheduling and measurement.' },
    etapes: { title: 'What a task must be able to do, in six points', items: [
      { label: 'Be small', sub: '1,200 sends = 12 tasks of 100; an export = batches; a short task retries fast' },
      { label: 'Carry its key', sub: 'idempotency: the same task twice = once' },
      { label: 'Lock itself', sub: 'lease renewed; released if the worker dies', accent: true },
      { label: 'Fail cleanly', sub: 'cause written; wait that doubles, random, capped' },
      { label: 'Respect a rate', sub: '1 message per second; 9 export batches; no burst' },
      { label: 'Leave a trace', sub: 'start, end, outcome, attempts; readable by the manager' },
    ], caption: 'Figure 2 · The third point is accented because it avoids the worst: two workers taking the same task and sending twice. The first point is what makes all the others easy: a task of a hundred sends retries in ten seconds, a task of twelve hundred retries in two minutes and redoes what was done.', alt: 'Six points: be small, carry its key, lock itself (accented), fail cleanly, respect a rate, leave a trace.' },
    tentatives: { caption: 'Figure 3 · A task “send 1,200 reminders” fails three times because the provider is unavailable, then succeeds at the fourth attempt; waits double and are drawn at random within a window, so that a thousand failed tasks do not all restart at the same second, and are capped. The 380 messages sent at the first attempt do not leave again, thanks to the idempotency key. After the last attempt, the task would go to the failure queue with an alert. Durations are a constructed example.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'The night report did not leave', cells: ['The server restarted at 02:04; the 02:00 script did not run; nobody knew', 'start-up catch-up: missed tasks are rerun; alert otherwise'] },
      { label: 'SMS went out twice', cells: ['Two servers launched the same send; 1,200 customers, two reminders each', 'lock with lease in the database; idempotency key per message'] },
      { label: 'The export crashes halfway', cells: ['50,000 rows, the browser waits, the connection drops, all is lost', 'background task in batches; file stored; link sent; resume at the batch'] },
      { label: 'The SMS provider went down', cells: ['The 1,200 reminders failed at 06:30; nobody retried', 'retries at 30 s, 2 min, 8 min with jitter; failure queue after the cap'] },
      { label: 'The send got cut off', cells: ['1,200 messages in ten seconds; the provider blocked the account', 'smoothed rate: batches of 100, one message per second, per the provider'] },
      { label: 'A task has run for three hours', cells: ['A stuck recompute holds the queue; everything waits behind', 'maximum duration; expired lease → task released, flagged; the queue moves'] },
    ], caption: 'Figure 4 · The first two rows are settled by the catch-up and the lock; the next two by batches and retries; the last two by the rate and the maximum duration. None is settled by a developer getting up at night.', alt: 'Matrix of six situations: night report not sent, SMS sent twice, export crashed, SMS provider down, send cut off, stuck task; what happens and what the application does.' },
    nuit: { caption: 'Figure 5 · A server’s night, on two workers: the backup holds the “database” lock and the cleanup waits; the accounting export leaves in batches; the Monday report is missed by a restart at 02:04 and caught up at 02:15; the 1,200 appointment reminders leave at 06:30 in batches of one hundred, one message per second; the report leaves at 07:00 with what ran. Times are a constructed example.' },
    calendrier: { title: 'Background tasks that hold in 2027, in weeks', unit: 'wk', items: [
      { label: 'Task inventory', note: 'everything that runs without a screen: sends, exports, recomputes, reports, reminders; priority, due time, rate, max duration, who is alerted; signed', from: 0, to: 1 },
      { label: 'Queue and workers', note: 'task table in the database, workers, lock with lease, maximum duration, task board in the application', from: 1, to: 2 },
      { label: 'Retries and failures', note: 'wait schedule with jitter and cap, idempotency key, failure queue, alert, manual retry', from: 2, to: 3, accent: true },
      { label: 'Scheduling', note: 'fixed-time tasks, start-up catch-up, locks between tasks, smoothed rate for sends', from: 3, to: 4 },
      { label: 'Script migration', note: 'existing night scripts become tasks, one by one, with their log; sends go through the queue', from: 4, to: 5 },
      { label: 'Measurement', note: 'morning log, late and failed tasks, queue size, first failure cause of the week', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks, and the first without code: the inventory of everything that runs without a screen is what nobody ever wrote, and it says how many tasks, which rates and who is alerted. The third week is accented because retries and the failure queue are what make a provider outage a delay and not a loss.', alt: 'Six-week timeline: task inventory, queue and workers, retries and failures (accented), scheduling, script migration, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'خلفية · طوابير · جدولة · 2027', title: ['«تقرير الليل', 'لم ينطلق أبداً،', 'ولا أحد علم»'], subtitle: 'ما يُبنى كي تعمل الإرسالات والتصديرات وإعادة الحسابات والتقارير دون أن نراقبها: طابور عمل، قفل لكل مهمة، إعادات متباعدة، مفتاح ضد التكرار، طابور إخفاقات يقرؤه إنسان، ومستدرِك حين يعيد الخادم التشغيل', left: { label: 'نص برمجي يُطلق في منتصف الليل', sub: 'ويسقط بصمت' }, right: { label: 'طابور يعيد المحاولة', sub: 'وتنبيه حين لا يفلح' } },
    couches: { title: 'مهام خلفية تصمد، في خمس طبقات', layers: [
      { label: 'الطلبات', items: [{ name: 'كل ما يجب ألا يعطّل الشاشة: إرسالات، تصديرات، إعادة حسابات، تقارير، تذكيرات؛ كل طلب = مهمة بأولوية واستحقاق', sub: 'الشاشة تجيب في ثانية؛ والمهمة تنجز العمل خلفها' }] },
      { label: 'طابور العمل', items: [{ name: 'جدول مهام في القاعدة: حالة، أولوية، استحقاق، حمولة، مفتاح عدم تكرار، محاولات، عقد؛ منفّذون يأخذون التالية', sub: 'الطابور في القاعدة، يُنسخ معها، ظاهر في التطبيق' }] },
      { label: 'التنفيذ', items: [{ name: 'قفل بعقد بضع دقائق، مدة قصوى، عقد يُجدَّد ما دام يتقدم، يُحرَّر إن مات المنفّذ؛ لا اثنان على المهمة نفسها أبداً', sub: 'القفل تمسكه قاعدة البيانات لا الأمل' }] },
      { label: 'الإعادات والإخفاقات', items: [{ name: 'إخفاق ← انتظار يتضاعف، مسحوب عشوائياً، مسقوف؛ مفتاح كي لا يُعاد المنجَز؛ آخر محاولة ← طابور إخفاقات وتنبيه', sub: 'لا شيء يضيع، ولا شيء يُعاد إلى ما لا نهاية، وإنسان يقرأ طابور الإخفاقات', accent: true }] },
      { label: 'الجدولة والقياس', items: [{ name: 'ساعة ثابتة بمستدرِك عند الإقلاع، معدل ممهَّد، سجل ما عمل، لوحة المتأخر والمخفق، تنبيه إن كبر الطابور', sub: 'عند 07:00 يعرف المسيّر ما عمل هذه الليلة وما لم يعمل' }] },
    ], caption: 'الشكل 1 · الطبقة المميزة هي ما يميّز طابور عمل عن نص برمجي يُطلق في منتصف الليل: الإخفاق فيها حالة متوقَّعة بانتظار ومفتاح ومخرج. وبدونها يُضيع انقطاع مزوّد SMS عند 06:30 تذكيرات اليوم أو يرسلها مرتين.', alt: 'خمس طبقات: الطلبات، طابور العمل، التنفيذ، الإعادات والإخفاقات (مميزة)، الجدولة والقياس.' },
    etapes: { title: 'ما يجب أن تجيده المهمة، في ست نقاط', items: [
      { label: 'أن تكون صغيرة', sub: '1200 إرسال = 12 مهمة من 100؛ تصدير = دفعات؛ مهمة قصيرة تُعاد بسرعة' },
      { label: 'أن تحمل مفتاحها', sub: 'عدم التكرار: المهمة نفسها مرتين = مرة' },
      { label: 'أن تقفل نفسها', sub: 'عقد يُجدَّد؛ يُحرَّر إن مات المنفّذ', accent: true },
      { label: 'أن تخفق بنظافة', sub: 'سبب مكتوب؛ انتظار يتضاعف، عشوائية، سقف' },
      { label: 'أن تحترم معدلاً', sub: 'رسالة في الثانية؛ 9 دفعات تصدير؛ لا دفقة' },
      { label: 'أن تترك أثراً', sub: 'بداية، نهاية، نتيجة، محاولات؛ يقرؤه المسيّر' },
    ], caption: 'الشكل 2 · النقطة الثالثة مميزة لأنها تجنّب الأسوأ: منفّذان يأخذان المهمة نفسها ويرسلان مرتين. والنقطة الأولى هي ما يجعل الباقي سهلاً: مهمة من مئة إرسال تُعاد في عشر ثوانٍ، ومهمة من ألف ومئتين تُعاد في دقيقتين وتعيد ما أُنجز.', alt: 'ست نقاط: أن تكون صغيرة، أن تحمل مفتاحها، أن تقفل نفسها (مميزة)، أن تخفق بنظافة، أن تحترم معدلاً، أن تترك أثراً.' },
    tentatives: { caption: 'الشكل 3 · مهمة «إرسال 1200 تذكير» تخفق ثلاث مرات لأن المزوّد غير متاح ثم تنجح في المحاولة الرابعة؛ تتضاعف الانتظارات وتُسحب عشوائياً في نافذة كي لا تنطلق ألف مهمة مخفقة في الثانية نفسها، وهي مسقوفة. والرسائل الـ 380 التي خرجت في المحاولة الأولى لا تخرج ثانية بفضل مفتاح عدم التكرار. وبعد آخر محاولة تذهب المهمة إلى طابور الإخفاقات بتنبيه. والمدد مثال مبني.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'تقرير الليل لم ينطلق', cells: ['أعاد الخادم التشغيل عند 02:04؛ نص الساعة 02:00 لم يعمل؛ لا أحد علم', 'مستدرِك عند الإقلاع: المهام الفائتة تُعاد؛ تنبيه وإلا'] },
      { label: 'الرسائل خرجت مرتين', cells: ['أطلق خادمان الإرسال نفسه؛ 1200 زبون، تذكيران لكل منهم', 'قفل بعقد في القاعدة؛ مفتاح عدم تكرار لكل رسالة'] },
      { label: 'التصدير يسقط في المنتصف', cells: ['50000 سطر، المتصفح ينتظر، الاتصال ينقطع، كل شيء يضيع', 'مهمة خلفية بدفعات؛ ملف مودَع؛ رابط مرسل؛ استئناف عند الدفعة'] },
      { label: 'مزوّد SMS سقط', cells: ['أخفقت الـ 1200 تذكير عند 06:30؛ لا أحد أعاد المحاولة', 'إعادات عند 30 ث و2 د و8 د بعشوائية؛ طابور إخفاقات بعد السقف'] },
      { label: 'الإرسال قُطع', cells: ['1200 رسالة في عشر ثوانٍ؛ المزوّد حجب الحساب', 'معدل ممهَّد: دفعات من 100، رسالة في الثانية، حسب المزوّد'] },
      { label: 'مهمة تعمل منذ ثلاث ساعات', cells: ['إعادة حساب عالقة تمسك الطابور؛ كل شيء ينتظر خلفها', 'مدة قصوى؛ عقد منتهٍ ← مهمة محرَّرة، موسومة؛ الطابور يتقدم'] },
    ], caption: 'الشكل 4 · السطران الأولان يُحلان بالمستدرِك والقفل؛ والتاليان بالدفعات والإعادات؛ والأخيران بالمعدل والمدة القصوى. ولا واحد يُحل بمطوّر ينهض ليلاً.', alt: 'مصفوفة ست حالات: تقرير الليل لم ينطلق، رسائل خرجت مرتين، تصدير ساقط، مزوّد SMS ساقط، إرسال مقطوع، مهمة عالقة؛ ما يحدث وما يفعله التطبيق.' },
    nuit: { caption: 'الشكل 5 · ليلة خادم على منفّذين: النسخ الاحتياطي يمسك قفل «القاعدة» والتنظيف ينتظر؛ التصدير المحاسبي ينطلق بدفعات؛ تقرير الاثنين يفوت بإعادة تشغيل عند 02:04 ويستدركه المستدرِك عند 02:15؛ تذكيرات المواعيد الـ 1200 تنطلق عند 06:30 بدفعات من مئة، رسالة في الثانية؛ والتقرير ينطلق عند 07:00 بما عمل. والأوقات مثال مبني.' },
    calendrier: { title: 'مهام خلفية تصمد سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'جرد المهام', note: 'كل ما يعمل بلا شاشة: إرسالات، تصديرات، إعادة حسابات، تقارير، تذكيرات؛ أولوية، استحقاق، معدل، مدة قصوى، من يُنبَّه؛ موقَّعة', from: 0, to: 1 },
      { label: 'الطابور والمنفّذون', note: 'جدول مهام في القاعدة، منفّذون، قفل بعقد، مدة قصوى، لوحة المهام في التطبيق', from: 1, to: 2 },
      { label: 'الإعادات والإخفاقات', note: 'جدول انتظار بعشوائية وسقف، مفتاح عدم تكرار، طابور إخفاقات، تنبيه، إعادة يدوية', from: 2, to: 3, accent: true },
      { label: 'الجدولة', note: 'مهام بساعة ثابتة، مستدرِك عند الإقلاع، أقفال بين المهام، معدل ممهَّد للإرسالات', from: 3, to: 4 },
      { label: 'ترحيل النصوص', note: 'نصوص الليل الموجودة تصير مهاماً واحدةً واحدة بسجلها؛ الإرسالات تمر بالطابور', from: 4, to: 5 },
      { label: 'القياس', note: 'سجل الصباح، مهام متأخرة ومخفقة، حجم الطابور، سبب الإخفاق الأول للأسبوع', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع، والأول بلا كود: جرد كل ما يعمل بلا شاشة هو ما لم يكتبه أحد قط، وهو ما يقول كم مهمة وأي معدلات ومن يُنبَّه. والأسبوع الثالث مميز لأن الإعادات وطابور الإخفاقات هما ما يجعل انقطاع المزوّد تأخراً لا خسارة.', alt: 'خط زمني من ستة أسابيع: جرد المهام، الطابور والمنفّذون، الإعادات والإخفاقات (مميز)، الجدولة، ترحيل النصوص، القياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = JB[locale] || JB.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      tentatives: { svg: attempts(e.attempts, rtl), caption: t.tentatives.caption, alt: e.attempts.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      nuit: { svg: night(e.night, rtl), caption: t.nuit.caption, alt: e.night.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
