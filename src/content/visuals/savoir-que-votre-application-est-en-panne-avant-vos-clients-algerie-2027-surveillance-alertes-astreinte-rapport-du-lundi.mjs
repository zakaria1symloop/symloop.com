import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { night, month, STRINGS as OB } from './custom/observability.mjs';
export const slug = 'savoir-que-votre-application-est-en-panne-avant-vos-clients-algerie-2027-surveillance-alertes-astreinte-rapport-du-lundi';
const T = {
  fr: {
    cover: { eyebrow: 'Surveillance · Alertes · Astreinte · 2027', title: ['« J’ai appris la panne', 'par un client,', 'sur WhatsApp »'], subtitle: 'Ce qu’on construit pour savoir qu’une application est en panne avant ses clients : quatre signaux mesurés, des sondes depuis Alger et Paris, des seuils écrits avant la mise en ligne, un téléphone qui sonne sur le symptôme et jamais pour rien, un document d’intervention, un budget d’erreur par mois et le rapport du lundi', left: { label: 'Le serveur « répond au ping »', sub: 'et les paiements échouent depuis une heure' }, right: { label: 'Quatre signaux, des seuils, une astreinte', sub: 'le client ne voit qu’un autre mode de paiement' } },
    signaux: { title: 'Ce qu’on mesure, et où ça sonne', columns: ['Ce qu’on mesure', 'Seuil d’alerte par défaut, et où il arrive'], rows: [
      { label: 'Erreurs', cells: ['part des requêtes en échec, par écran et par fonction : paiement, connexion, commande', 'au-dessus de 2 % sur 5 minutes pour une fonction critique → téléphone d’astreinte ; au-dessus de 0,5 % → canal de l’équipe'] },
      { label: 'Latence', cells: ['temps de réponse au 99e percentile, pas la moyenne, par route d’API', 'au-dessus de 3 000 ms sur 5 minutes → canal ; au-dessus de 10 s ou délais dépassés → téléphone'] },
      { label: 'Trafic', cells: ['requêtes et utilisateurs par minute, commandes par heure, comparés à la même heure la semaine passée', 'chute de plus de moitié pendant 15 minutes aux heures ouvrées → téléphone ; c’est souvent le seul signe d’une panne en amont'] },
      { label: 'Saturation', cells: ['disque, mémoire, connexions à la base, file d’attente des tâches', 'disque au-dessus de 80 % → canal, 90 % → téléphone ; file qui grossit 10 minutes de suite → canal'] },
      { label: 'Sondes externes', cells: ['une requête complète toutes les minutes depuis Alger et depuis Paris : page, connexion, lecture d’une commande', 'deux échecs consécutifs depuis les deux villes → téléphone ; depuis une seule → canal, c’est le réseau local'] },
      { label: 'Métier', cells: ['commandes payées par heure, messages WhatsApp envoyés, exports réussis', 'zéro commande payée pendant une heure ouvrée → téléphone ; c’est l’alerte que le gérant comprend'] },
    ], caption: 'Figure 1 · Les quatre premières lignes sont les « quatre signaux d’or » que les équipes de fiabilité recommandent de mesurer ; les deux dernières sont celles que nous ajoutons toujours, parce qu’un serveur qui répond au ping peut refuser tous les paiements depuis une heure. Les seuils sont ceux que nous écrivons par défaut ; ils se discutent la première semaine.', alt: 'Matrice de six signaux : erreurs, latence, trafic, saturation, sondes externes, métier ; ce qu’on mesure et le seuil par défaut avec sa destination.' },
    nuit: { caption: 'Figure 2 · L’alerte a sonné sur le symptôme, deux pour cent d’erreurs de paiement sur cinq minutes, deux minutes après le début de la panne chez le fournisseur ; la cause a été lue dans les journaux, et la parade, proposer le paiement à la livraison par un drapeau, n’a demandé aucun déploiement. Les clients de 2 h 27 ont vu un autre mode de paiement, pas une erreur. Exemple construit.' },
    couches: { title: 'La surveillance d’une application, en cinq couches', layers: [
      { label: 'Sondes externes', items: [{ name: 'Une requête complète toutes les minutes depuis Alger et depuis Paris, qui fait ce qu’un client fait : ouvrir, se connecter, lire une commande', sub: 'la seule couche qui voit ce que les clients voient, réseau compris' }] },
      { label: 'Application', items: [{ name: 'Journaux structurés avec un identifiant par requête, erreurs regroupées par cause avec leur fréquence, traces du parcours d’une requête à travers les services', sub: 'c’est ici qu’on lit « pourquoi » quand les sondes disent « quoi »' }] },
      { label: 'Infrastructure', items: [{ name: 'Processeur, mémoire, disque, connexions à la base, file d’attente des tâches, certificats et domaine qui expirent', sub: 'les pannes de samedi soir viennent presque toutes d’ici : disque plein, certificat expiré, file bloquée' }] },
      { label: 'Alertes et astreinte', items: [{ name: 'Seuils écrits par signal, destination par gravité : téléphone, canal de l’équipe ou rapport ; une personne d’astreinte nommée, un document d’intervention par alerte', sub: 'toute alerte qui réveille doit demander une action ; sinon elle rejoint le rapport', accent: true }] },
      { label: 'Rapport', items: [{ name: 'Le lundi : disponibilité du mois face à l’objectif, incidents et durées, actions ouvertes, bruit des alertes', sub: 'ce que le gérant lit en deux minutes, et ce qu’on relit chaque mois pour abaisser ou relever les seuils' }] },
    ], caption: 'Figure 3 · La couche accentuée est celle qui sépare la surveillance de la décoration : des graphiques que personne ne regarde ne réveillent personne. Une alerte est une phrase, un seuil, une destination et un document d’intervention ; et chaque alerte qui a sonné pour rien est retirée au rapport suivant.', alt: 'Cinq couches : sondes externes, application, infrastructure, alertes et astreinte (accentuée), rapport.' },
    mois: { caption: 'Figure 4 · Le contrat dit 99,5 %, soit trois heures trente-six d’indisponibilité tolérée par mois ; le mois en a consommé une heure cinquante-deux, en deux incidents. Le second a duré trop longtemps parce que l’alerte de saturation du disque a sonné quand il était déjà plein : le seuil passe de 90 à 80 %, et c’est l’action du rapport. Exemple construit.' },
    astreinte: { title: 'Quand le téléphone sonne, en six étapes', items: [
      { label: 'Le téléphone sonne', sub: 'symptôme et seuil écrits ; l’alerte dit quoi, depuis quand, quel document' },
      { label: 'Accusé en cinq minutes', sub: 'sinon la seconde personne est appelée ; l’heure est notée' },
      { label: 'Document d’intervention', sub: 'une page par alerte : où regarder, quoi vérifier, quelles parades', accent: true },
      { label: 'Parade, pas correctif', sub: 'drapeau, bascule, redémarrage, remise en file ; le symptôme d’abord' },
      { label: 'Dire ce qui se passe', sub: 'bandeau dans l’application, message au gérant ; deux lignes' },
      { label: 'Correctif et revue', sub: 'correctif en journée par le chemin normal ; revue du lundi sans blâme' },
    ], caption: 'Figure 5 · La troisième étape est celle qui fait la différence à trois heures du matin : personne ne réfléchit bien à cette heure-là, et le document d’intervention a été écrit à quatorze heures, au calme, pour chaque alerte qui peut réveiller. La quatrième dit l’ordre : faire cesser le symptôme d’abord, comprendre ensuite.', alt: 'Six étapes : le téléphone sonne, accusé en cinq minutes, document d’intervention (accentué), parade, dire ce qui se passe, correctif et revue.' },
    calendrier: { title: 'Mettre une application sous surveillance en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Ce qu’on surveille et l’objectif', note: 'fonctions critiques nommées, objectif de disponibilité écrit, seuils par signal, qui est d’astreinte', from: 0, to: 1 },
      { label: 'Sondes et santé', note: 'sondes externes depuis Alger et Paris toutes les minutes ; vérification de santé de chaque service', from: 1, to: 2 },
      { label: 'Journaux, erreurs, traces', note: 'journaux structurés avec identifiant de requête, erreurs regroupées, traces ; rétention écrite', from: 2, to: 3 },
      { label: 'Alertes et documents', note: 'seuils et destinations, téléphone ou canal ; un document d’intervention par alerte qui réveille', from: 3, to: 4, accent: true },
      { label: 'Panne provoquée', note: 'on coupe la base, on remplit le disque, on arrête la passerelle : chaque alerte doit sonner, chaque document doit servir', from: 4, to: 5 },
      { label: 'Rapport du lundi', note: 'disponibilité, incidents, actions, bruit ; revue mensuelle des seuils ; le gérant le lit en deux minutes', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines, et la cinquième est celle qu’on saute toujours : provoquer les pannes pour vérifier que les alertes sonnent et que les documents servent. Une surveillance qu’on n’a jamais vue sonner est une hypothèse, comme une sauvegarde qu’on n’a jamais restaurée.', alt: 'Frise de six semaines : ce qu’on surveille, sondes et santé, journaux et traces, alertes et documents (accentué), panne provoquée, rapport du lundi.' },
  },
  en: {
    cover: { eyebrow: 'Monitoring · Alerts · On-call · 2027', title: ['“I learnt about the', 'outage from a customer,', 'on WhatsApp”'], subtitle: 'What gets built to know an application is down before its customers do: four measured signals, probes from Algiers and Paris, thresholds written before launch, a phone that rings on the symptom and never for nothing, a runbook, a monthly error budget and the Monday report', left: { label: 'The server “answers the ping”', sub: 'and payments have been failing for an hour' }, right: { label: 'Four signals, thresholds, on-call', sub: 'the customer only sees another payment method' } },
    signaux: { title: 'What is measured, and where it rings', columns: ['What is measured', 'Default alert threshold, and where it goes'], rows: [
      { label: 'Errors', cells: ['share of failed requests, per screen and per function: payment, login, order', 'above 2 % over 5 minutes for a critical function → on-call phone; above 0.5 % → team channel'] },
      { label: 'Latency', cells: ['response time at the 99th percentile, not the average, per API route', 'above 3,000 ms over 5 minutes → channel; above 10 s or timeouts → phone'] },
      { label: 'Traffic', cells: ['requests and users per minute, orders per hour, compared with the same hour last week', 'drop of more than half for 15 minutes in business hours → phone; it is often the only sign of an upstream outage'] },
      { label: 'Saturation', cells: ['disk, memory, database connections, task queue', 'disk above 80 % → channel, 90 % → phone; queue growing for 10 minutes straight → channel'] },
      { label: 'External probes', cells: ['one full request every minute from Algiers and from Paris: page, login, reading an order', 'two consecutive failures from both cities → phone; from one only → channel, it is the local network'] },
      { label: 'Business', cells: ['paid orders per hour, WhatsApp messages sent, successful exports', 'zero paid orders during a business hour → phone; it is the alert the manager understands'] },
    ], caption: 'Figure 1 · The first four rows are the “four golden signals” reliability teams recommend measuring; the last two are the ones we always add, because a server that answers the ping can have refused every payment for an hour. The thresholds are the ones we write by default; they are discussed in week one.', alt: 'Matrix of six signals: errors, latency, traffic, saturation, external probes, business; what is measured and the default threshold with its destination.' },
    nuit: { caption: 'Figure 2 · The alert fired on the symptom, two percent payment errors over five minutes, two minutes after the provider’s outage began; the cause was read in the logs, and the workaround, offering cash on delivery through a flag, needed no deployment. The 2:27 customers saw another payment method, not an error. Constructed example.' },
    couches: { title: 'Monitoring an application, in five layers', layers: [
      { label: 'External probes', items: [{ name: 'One full request every minute from Algiers and from Paris, doing what a customer does: open, log in, read an order', sub: 'the only layer that sees what customers see, network included' }] },
      { label: 'Application', items: [{ name: 'Structured logs with an id per request, errors grouped by cause with their frequency, traces of a request’s path across services', sub: 'this is where you read “why” when the probes say “what”' }] },
      { label: 'Infrastructure', items: [{ name: 'CPU, memory, disk, database connections, task queue, expiring certificates and domain', sub: 'Saturday-night outages almost all come from here: full disk, expired certificate, stuck queue' }] },
      { label: 'Alerts and on-call', items: [{ name: 'Thresholds written per signal, destination per severity: phone, team channel or report; a named on-call person, one runbook per alert', sub: 'every alert that wakes someone must demand an action; otherwise it joins the report', accent: true }] },
      { label: 'Report', items: [{ name: 'On Monday: the month’s availability against the objective, incidents and durations, open actions, alert noise', sub: 'what the manager reads in two minutes, and what is reread monthly to lower or raise thresholds' }] },
    ], caption: 'Figure 3 · The accented layer is what separates monitoring from decoration: charts nobody looks at wake nobody. An alert is a sentence, a threshold, a destination and a runbook; and every alert that rang for nothing is removed at the next report.', alt: 'Five layers: external probes, application, infrastructure, alerts and on-call (accented), report.' },
    mois: { caption: 'Figure 4 · The contract says 99.5 %, that is three hours thirty-six of tolerated downtime per month; the month consumed one hour fifty-two, in two incidents. The second lasted too long because the disk saturation alert rang when it was already full: the threshold goes from 90 to 80 %, and that is the report’s action. Constructed example.' },
    astreinte: { title: 'When the phone rings, in six steps', items: [
      { label: 'The phone rings', sub: 'written symptom and threshold; the alert says what, since when, which runbook' },
      { label: 'Acknowledged in five minutes', sub: 'otherwise the second person is called; the time is noted' },
      { label: 'Runbook', sub: 'one page per alert: where to look, what to check, which workarounds', accent: true },
      { label: 'Workaround, not fix', sub: 'flag, failover, restart, re-queue; the symptom first' },
      { label: 'Say what is happening', sub: 'banner in the app, message to the manager; two lines' },
      { label: 'Fix and review', sub: 'fix in daytime by the normal path; blameless Monday review' },
    ], caption: 'Figure 5 · The third step is the one that makes the difference at three in the morning: nobody thinks well at that hour, and the runbook was written at two in the afternoon, calmly, for every alert that can wake someone. The fourth sets the order: stop the symptom first, understand afterwards.', alt: 'Six steps: the phone rings, acknowledged in five minutes, runbook (accented), workaround, say what is happening, fix and review.' },
    calendrier: { title: 'Putting an application under monitoring in 2027, in weeks', unit: 'wk', items: [
      { label: 'What is monitored and the objective', note: 'critical functions named, availability objective written, thresholds per signal, who is on call', from: 0, to: 1 },
      { label: 'Probes and health', note: 'external probes from Algiers and Paris every minute; health check of every service', from: 1, to: 2 },
      { label: 'Logs, errors, traces', note: 'structured logs with request id, grouped errors, traces; retention written', from: 2, to: 3 },
      { label: 'Alerts and runbooks', note: 'thresholds and destinations, phone or channel; one runbook per alert that wakes someone', from: 3, to: 4, accent: true },
      { label: 'Induced failure', note: 'cut the database, fill the disk, stop the gateway: every alert must ring, every runbook must serve', from: 4, to: 5 },
      { label: 'Monday report', note: 'availability, incidents, actions, noise; monthly threshold review; the manager reads it in two minutes', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks, and the fifth is the one always skipped: inducing failures to check that alerts ring and runbooks serve. Monitoring never seen ringing is a hypothesis, like a backup never restored.', alt: 'Six-week timeline: what is monitored, probes and health, logs and traces, alerts and runbooks (accented), induced failure, Monday report.' },
  },
  ar: {
    cover: { eyebrow: 'مراقبة · تنبيهات · مناوبة · 2027', title: ['«عرفت بالعطل', 'من زبون،', 'على WhatsApp»'], subtitle: 'ما يُبنى لمعرفة أن التطبيق معطَّل قبل زبائنه: أربع إشارات مقيسة، مسابر من الجزائر العاصمة وباريس، عتبات تُكتب قبل الإطلاق، هاتف يرن على العَرَض ولا يرن لغير شيء أبداً، مستند تدخل، ميزانية خطأ شهرية وتقرير الاثنين', left: { label: 'الخادم «يرد على الـ ping»', sub: 'والدفعات تفشل منذ ساعة' }, right: { label: 'أربع إشارات، عتبات، مناوبة', sub: 'الزبون لا يرى إلا طريقة دفع أخرى' } },
    signaux: { title: 'ما يُقاس، وأين يرن', columns: ['ما يُقاس', 'عتبة التنبيه الافتراضية، وأين تصل'], rows: [
      { label: 'الأخطاء', cells: ['حصة الطلبات الفاشلة، لكل شاشة ووظيفة: دفع، تسجيل دخول، طلبية', 'فوق 2 % على 5 دقائق لوظيفة حرجة ← هاتف المناوبة؛ فوق 0,5 % ← قناة الفريق'] },
      { label: 'الكمونية', cells: ['زمن الرد عند المئين 99 لا المتوسط، لكل مسار واجهة', 'فوق 3 000 م.ث على 5 دقائق ← القناة؛ فوق 10 ث أو مهل منتهية ← الهاتف'] },
      { label: 'الحركة', cells: ['الطلبات والمستعملون في الدقيقة، الطلبيات في الساعة، مقارنةً بالساعة نفسها من الأسبوع الماضي', 'هبوط بأكثر من النصف 15 دقيقة في ساعات العمل ← الهاتف؛ وغالباً هو العلامة الوحيدة لعطل في الأعلى'] },
      { label: 'التشبع', cells: ['القرص، الذاكرة، اتصالات القاعدة، طابور المهام', 'قرص فوق 80 % ← القناة، 90 % ← الهاتف؛ طابور يكبر 10 دقائق متتالية ← القناة'] },
      { label: 'مسابر خارجية', cells: ['طلب كامل كل دقيقة من الجزائر العاصمة ومن باريس: صفحة، تسجيل دخول، قراءة طلبية', 'فشلان متتاليان من المدينتين ← الهاتف؛ من واحدة فقط ← القناة، إنها الشبكة المحلية'] },
      { label: 'العمل', cells: ['طلبيات مدفوعة في الساعة، رسائل WhatsApp مرسلة، تصديرات ناجحة', 'صفر طلبية مدفوعة خلال ساعة عمل ← الهاتف؛ وهو التنبيه الذي يفهمه المسيّر'] },
    ], caption: 'الشكل 1 · السطور الأربعة الأولى هي «الإشارات الذهبية الأربع» التي توصي فرق الموثوقية بقياسها؛ والأخيران هما ما نضيفه دائماً، لأن خادماً يرد على الـ ping قد يكون رفض كل الدفعات منذ ساعة. والعتبات هي ما نكتبه افتراضياً؛ وتُناقش في الأسبوع الأول.', alt: 'مصفوفة ست إشارات: الأخطاء، الكمونية، الحركة، التشبع، مسابر خارجية، العمل؛ ما يُقاس والعتبة الافتراضية ووجهتها.' },
    nuit: { caption: 'الشكل 2 · رن التنبيه على العَرَض، اثنان في المئة أخطاء دفع على خمس دقائق، بعد دقيقتين من بداية العطل عند المزوّد؛ قُرئ السبب في السجلات، والحل، اقتراح الدفع عند التسليم بعلم، لم يتطلب أي نشر. رأى زبائن 2:27 طريقة دفع أخرى لا خطأ. مثال مبني.' },
    couches: { title: 'مراقبة تطبيق، في خمس طبقات', layers: [
      { label: 'مسابر خارجية', items: [{ name: 'طلب كامل كل دقيقة من الجزائر العاصمة ومن باريس، يفعل ما يفعله الزبون: يفتح، يسجّل الدخول، يقرأ طلبية', sub: 'الطبقة الوحيدة التي ترى ما يراه الزبائن، بما فيه الشبكة' }] },
      { label: 'التطبيق', items: [{ name: 'سجلات منظَّمة بمعرّف لكل طلب، أخطاء مجمَّعة حسب السبب بتواترها، تتبع مسار الطلب عبر الخدمات', sub: 'هنا نقرأ «لماذا» حين تقول المسابر «ماذا»' }] },
      { label: 'البنية التحتية', items: [{ name: 'المعالج، الذاكرة، القرص، اتصالات القاعدة، طابور المهام، الشهادات والنطاق المنتهية', sub: 'أعطال مساء السبت تأتي كلها تقريباً من هنا: قرص ممتلئ، شهادة منتهية، طابور عالق' }] },
      { label: 'التنبيهات والمناوبة', items: [{ name: 'عتبات مكتوبة لكل إشارة، وجهة حسب الخطورة: هاتف أو قناة الفريق أو تقرير؛ شخص مناوب مسمّى، مستند تدخل لكل تنبيه', sub: 'كل تنبيه يوقظ يجب أن يطلب فعلاً؛ وإلا انضم إلى التقرير', accent: true }] },
      { label: 'التقرير', items: [{ name: 'يوم الاثنين: توفر الشهر مقابل الهدف، الحوادث ومددها، الإجراءات المفتوحة، ضجيج التنبيهات', sub: 'ما يقرؤه المسيّر في دقيقتين، وما يُعاد قراءته شهرياً لخفض العتبات أو رفعها' }] },
    ], caption: 'الشكل 3 · الطبقة المميزة هي التي تفصل المراقبة عن الزينة: رسوم بيانية لا ينظر إليها أحد لا توقظ أحداً. التنبيه جملة وعتبة ووجهة ومستند تدخل؛ وكل تنبيه رن لغير شيء يُزال في التقرير التالي.', alt: 'خمس طبقات: مسابر خارجية، التطبيق، البنية التحتية، التنبيهات والمناوبة (مميزة)، التقرير.' },
    mois: { caption: 'الشكل 4 · يقول العقد 99,5 %، أي ثلاث ساعات وست وثلاثون دقيقة من التوقف المسموح في الشهر؛ استهلك الشهر ساعة واثنتين وخمسين دقيقة في حادثين. دام الثاني طويلاً لأن تنبيه تشبع القرص رن وهو ممتلئ أصلاً: تنتقل العتبة من 90 إلى 80 %، وهذا إجراء التقرير. مثال مبني.' },
    astreinte: { title: 'حين يرن الهاتف، في ست خطوات', items: [
      { label: 'الهاتف يرن', sub: 'عَرَض وعتبة مكتوبان؛ التنبيه يقول ماذا ومنذ متى وأي مستند' },
      { label: 'إقرار في خمس دقائق', sub: 'وإلا يُتصل بالشخص الثاني؛ يُدوَّن الوقت' },
      { label: 'مستند التدخل', sub: 'صفحة لكل تنبيه: أين ننظر، ماذا نتحقق، أي حلول موجودة', accent: true },
      { label: 'حل مؤقت لا تصحيح', sub: 'علم، تحويل، إعادة تشغيل، إعادة إلى الطابور؛ إيقاف العَرَض أولاً' },
      { label: 'قول ما يحدث', sub: 'شريط في التطبيق، رسالة للمسيّر؛ سطران لا رواية' },
      { label: 'تصحيح ومراجعة', sub: 'تصحيح نهاراً بالمسار العادي؛ مراجعة الاثنين بلا لوم' },
    ], caption: 'الشكل 5 · الخطوة الثالثة هي التي تصنع الفارق في الثالثة فجراً: لا أحد يفكر جيداً في تلك الساعة، ومستند التدخل كُتب في الثانية ظهراً بهدوء لكل تنبيه يمكن أن يوقظ. والرابعة تقول الترتيب: إيقاف العَرَض أولاً، والفهم بعده.', alt: 'ست خطوات: الهاتف يرن، إقرار في خمس دقائق، مستند التدخل (مميز)، حل مؤقت، قول ما يحدث، تصحيح ومراجعة.' },
    calendrier: { title: 'وضع تطبيق تحت المراقبة سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'ما نراقب والهدف', note: 'وظائف حرجة مسمّاة، هدف توفر مكتوب، عتبات لكل إشارة، من في المناوبة', from: 0, to: 1 },
      { label: 'مسابر وصحة', note: 'مسابر خارجية من الجزائر العاصمة وباريس كل دقيقة؛ فحص صحة كل خدمة', from: 1, to: 2 },
      { label: 'سجلات، أخطاء، تتبع', note: 'سجلات منظَّمة بمعرّف طلب، أخطاء مجمَّعة، تتبع؛ احتفاظ مكتوب', from: 2, to: 3 },
      { label: 'تنبيهات ومستندات', note: 'عتبات ووجهات، هاتف أو قناة؛ مستند تدخل لكل تنبيه يوقظ', from: 3, to: 4, accent: true },
      { label: 'عطل مفتعَل', note: 'نقطع القاعدة، نملأ القرص، نوقف البوابة: كل تنبيه يجب أن يرن، وكل مستند يجب أن ينفع', from: 4, to: 5 },
      { label: 'تقرير الاثنين', note: 'التوفر، الحوادث، الإجراءات، الضجيج؛ مراجعة شهرية للعتبات؛ يقرؤه المسيّر في دقيقتين', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع، والخامس هو الذي يُتخطى دائماً: افتعال الأعطال للتحقق من أن التنبيهات ترن وأن المستندات تنفع. مراقبة لم نرَها ترن قط فرضية، كنسخة احتياطية لم تُستعد قط.', alt: 'خط زمني من ستة أسابيع: ما نراقب، مسابر وصحة، سجلات وتتبع، تنبيهات ومستندات (مميزة)، عطل مفتعَل، تقرير الاثنين.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = OB[locale] || OB.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      signaux: { svg: matrix({ title: t.signaux.title, columns: t.signaux.columns, rows: t.signaux.rows, rtl }), caption: t.signaux.caption, alt: t.signaux.alt },
      nuit: { svg: night(e.night, rtl), caption: t.nuit.caption, alt: e.night.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      mois: { svg: month(e.month, rtl), caption: t.mois.caption, alt: e.month.alt },
      astreinte: { svg: steps({ title: t.astreinte.title, steps: t.astreinte.items, arrows: true, rtl }), caption: t.astreinte.caption, alt: t.astreinte.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
