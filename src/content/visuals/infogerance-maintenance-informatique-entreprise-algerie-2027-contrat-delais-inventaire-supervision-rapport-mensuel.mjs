import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { mois, rapport, STRINGS as SC } from './custom/infogerance.mjs';
export const slug = 'infogerance-maintenance-informatique-entreprise-algerie-2027-contrat-delais-inventaire-supervision-rapport-mensuel';
const T = {
  fr: {
    cover: { eyebrow: 'Infogérance et maintenance informatique · Algérie · 2027', title: ['Infogérance et maintenance', 'en Algérie : surveiller, entretenir'], subtitle: 'Inventaire, supervision, entretien fait le soir, délais écrits par priorité, rapport d’une page par mois', left: { label: 'Tout repose sur une personne', sub: 'on paie à la panne, et elles reviennent' }, right: { label: 'Une page par mois', sub: 'ce qui a été fait, évité, prévu' } },
    situations: { title: 'Six situations réelles, et ce que l’infogérance doit faire', columns: ['Ce qui se passe', 'Ce que l’infogérance doit faire'], rows: [
      { label: 'Tout repose sur une seule personne', cells: ['Quand elle ne répond pas, tout attend', 'une équipe, un numéro, des délais écrits, une documentation que l’entreprise détient'] },
      { label: 'On paie à la panne, et elles reviennent', cells: ['Personne n’est payé pour qu’il n’y en ait pas', 'forfait mensuel, supervision, entretien fait le soir, rapport de ce qui a été évité'] },
      { label: 'Personne ne sait ce qu’on a', cells: ['Ni les machines, ni les licences, ni les garanties', 'inventaire tenu à jour, âge des postes, échéances à 90 jours, plan de renouvellement'] },
      { label: 'Les mots de passe sont chez le technicien', cells: ['S’il part, il part avec les clés', 'coffre de mots de passe à l’entreprise, comptes nommés, accès révocable'] },
      { label: 'Les mises à jour tombent en pleine journée', cells: ['Ou ne sont jamais faites', 'mises à jour planifiées le soir, postes hors support repérés et remplacés'] },
      { label: 'On découvre la panne par un client', cells: ['Aucune alerte, aucun tableau', 'alertes sur disque, sauvegarde, lien et onduleur, traitées avant l’appel'] },
    ], caption: 'Figure 1 · Les trois premières lignes se règlent par une équipe avec des délais écrits, un forfait qui paie la prévention et un inventaire tenu à jour ; les trois suivantes par un coffre de mots de passe à l’entreprise, des mises à jour planifiées et des alertes traitées avant l’appel. Aucune ne se règle par un dépanneur plus rapide.', alt: 'Matrice de six situations : tout repose sur une personne, on paie à la panne, personne ne sait ce qu’on a, mots de passe chez le technicien, mises à jour en pleine journée, panne découverte par un client ; ce qui se passe et ce que l’infogérance doit faire.' },
    mois: { caption: 'Figure 2 · Le même mois, sur les mêmes machines, tenu de deux façons. À la panne : cinq arrêts pour dix-neuf heures, et une sauvegarde en échec depuis trois semaines découverte par hasard. En infogérance : neuf gestes faits la veille ou le soir, deux incidents courts, deux heures d’arrêt. Chaque barre est un arrêt et sa hauteur le nombre d’heures ; chaque losange est un geste préventif. Incidents et durées sont un exemple construit ; les vôtres se mesurent en les notant pendant un mois.' },
    couches: { title: 'Une infogérance de PME, en cinq couches', layers: [
      { label: 'Inventaire', items: [{ name: 'Postes, serveurs, réseau, comptes, licences, garanties et échéances, tenus à jour dans un seul endroit', sub: 'on ne peut pas entretenir ce qu’on ne connaît pas' }] },
      { label: 'Supervision', items: [{ name: 'Un agent sur chaque machine : disque, sauvegarde, mises à jour, lien internet, onduleur ; alertes', sub: 'le prestataire voit le problème avant celui qui l’utilise' }] },
      { label: 'Entretien', items: [{ name: 'Mises à jour posées le soir, sauvegardes vérifiées chaque jour, restauration essayée, comptes revus', sub: 'ce qui est fait la veille n’est pas une panne le lendemain', accent: true }] },
      { label: 'Assistance', items: [{ name: 'Un numéro et une adresse, des demandes suivies, des délais écrits par priorité, à distance puis sur site', sub: 'chaque demande a un numéro, une heure et une issue' }] },
      { label: 'Pilotage', items: [{ name: 'Rapport d’une page par mois, revue avec le gérant, plan de renouvellement, dossier et mots de passe à l’entreprise', sub: 'l’entreprise peut changer de prestataire sans tout redécouvrir' }] },
    ], caption: 'Figure 3 · La couche accentuée est celle de l’entretien : c’est le travail fait le soir, que personne ne voit, qui supprime les pannes du lendemain. L’inventaire et la supervision, au-dessus, disent quoi entretenir et quand ; l’assistance et le pilotage, en dessous, traitent ce qui reste et le montrent au gérant.', alt: 'Cinq couches : inventaire ; supervision ; entretien (accentuée) ; assistance ; pilotage.' },
    rapport: { caption: 'Figure 4 · La page que le gérant reçoit chaque mois : vingt-huit postes sur trente à jour, les sauvegardes vérifiées chaque jour et une restauration essayée en trois heures quarante, trente-quatre demandes dont trente-deux traitées dans les délais écrits, tous les comptes protégés, neuf alertes sur onze traitées avant qu’un utilisateur n’appelle, quatre postes à remplacer et deux échéances à quatre-vingt-dix jours. Elle se termine par les décisions à prendre. Chiffres et dates sont un exemple construit.' },
    calendrier: { title: 'Une prise en charge en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Inventaire et état des lieux', note: 'machines, comptes, licences, sauvegardes, mots de passe récupérés et mis au coffre, essai de restauration ; sans rien changer', from: 0, to: 1 },
      { label: 'Remise à niveau', note: 'mises à jour en retard, anciens comptes fermés, double vérification, copie hors d’atteinte, postes hors support listés', from: 1, to: 2, accent: true },
      { label: 'Supervision et assistance', note: 'agents installés, alertes réglées, numéro et adresse d’assistance, délais par priorité écrits', from: 2, to: 3 },
      { label: 'Routine et premier rapport', note: 'entretien du soir, premières demandes suivies, rapport du mois, plan de renouvellement de l’année', from: 3, to: 4 },
    ], caption: 'Figure 5 · Quatre semaines dans l’exemple, la première sans rien changer : on relève ce qui existe, on récupère les mots de passe, on essaie une restauration. La semaine accentuée est la remise à niveau, parce qu’une supervision posée sur un parc en désordre ne fait que sonner. La reprise se fait avec la personne qui s’en occupait, pas contre elle.', alt: 'Calendrier de quatre semaines : inventaire et état des lieux, remise à niveau (accentuée), supervision et assistance, routine et premier rapport.' },
    etapes: { title: 'Six questions avant de signer', items: [
      { label: 'Qu’est-ce qui est couvert', sub: 'postes, serveurs, réseau, comptes, sites' },
      { label: 'En combien de temps', sub: 'délais écrits par priorité, heures couvertes', accent: true },
      { label: 'Qu’est-ce qui est préventif', sub: 'mises à jour, sauvegardes, alertes' },
      { label: 'Que reçoit-on chaque mois', sub: 'rapport d’une page, revue avec le gérant' },
      { label: 'À qui sont les clés', sub: 'dossier et mots de passe à l’entreprise' },
      { label: 'Comment on se quitte', sub: 'préavis, remise du dossier, accès fermés' },
    ], caption: 'Figure 6 · La question accentuée est la deuxième : un délai qui n’est pas écrit n’existe pas, et il s’écrit par priorité, prise en charge puis rétablissement. Les cinq autres disent ce qui est couvert, ce qui est fait sans qu’on le demande, ce qu’on reçoit chaque mois, à qui appartiennent le dossier et les mots de passe, et comment on se sépare.', alt: 'Six questions avant de signer : ce qui est couvert, en combien de temps (accentuée), ce qui est préventif, ce qu’on reçoit chaque mois, à qui sont les clés, comment on se quitte.' },
  },
  en: {
    cover: { eyebrow: 'Managed IT and maintenance · Algeria · 2027', title: ['Managed IT and maintenance', 'in Algeria: watch, maintain, report'], subtitle: 'Inventory, monitoring, maintenance done in the evening, response times written by priority, a one-page monthly report', left: { label: 'Everything rests on one person', sub: 'paying per breakdown, and they return' }, right: { label: 'One page a month', sub: 'what was done, avoided, planned' } },
    situations: { title: 'Six real situations, and what managed IT must do', columns: ['What happens', 'What managed IT must do'], rows: [
      { label: 'Everything rests on one person', cells: ['When they do not answer, everything waits', 'a team, one number, written response times, documentation the company holds'] },
      { label: 'We pay per breakdown, and they come back', cells: ['Nobody is paid for there to be none', 'monthly fee, monitoring, evening maintenance, a report of what was avoided'] },
      { label: 'Nobody knows what we have', cells: ['Neither the machines, nor licences, nor warranties', 'inventory kept up to date, age of PCs, renewals at 90 days, replacement plan'] },
      { label: 'The passwords are with the technician', cells: ['If they leave, they leave with the keys', 'password vault held by the company, named accounts, revocable access'] },
      { label: 'Updates land in the middle of the day', cells: ['Or are never done', 'updates planned for the evening; out-of-support PCs identified and replaced'] },
      { label: 'A customer tells us about the outage', cells: ['No alert, no board', 'alerts on disk, backup, link and UPS, handled before anyone calls'] },
    ], caption: 'Figure 1 · The first three rows are settled by a team with written response times, a fee that pays for prevention and an inventory kept up to date; the next three by a password vault held by the company, planned updates and alerts handled before the call. None is settled by a faster repair technician.', alt: 'Matrix of six situations: everything rests on one person, paying per breakdown, nobody knows what we have, passwords with the technician, updates in the middle of the day, outage reported by a customer; what happens and what managed IT must do.' },
    mois: { caption: 'Figure 2 · The same month, on the same machines, run two ways. Break/fix: five outages for nineteen hours, and a backup failing for three weeks found by chance. Managed: nine actions done the day before or in the evening, two short incidents, two hours stopped. Each bar is an outage and its height the number of hours; each diamond is a preventive action. Incidents and durations are a constructed example; yours are measured by noting them for a month.' },
    couches: { title: 'Managed IT for a mid-sized company, in five layers', layers: [
      { label: 'Inventory', items: [{ name: 'Workstations, servers, network, accounts, licences, warranties and renewals, kept up to date in one place', sub: 'you cannot maintain what you do not know' }] },
      { label: 'Monitoring', items: [{ name: 'An agent on each machine: disk, backup, updates, internet link, UPS; alerts', sub: 'the provider sees the problem before the person using it' }] },
      { label: 'Maintenance', items: [{ name: 'Updates applied in the evening, backups verified daily, restore tried, accounts reviewed', sub: 'what is done the day before is not a breakdown the next day', accent: true }] },
      { label: 'Support', items: [{ name: 'One number and one address, tracked requests, response times written by priority, remote then on site', sub: 'each request has a number, a time and an outcome' }] },
      { label: 'Steering', items: [{ name: 'One-page monthly report, review with the manager, replacement plan, file and passwords held by the company', sub: 'the company can change provider without rediscovering everything' }] },
    ], caption: 'Figure 3 · The accented layer is maintenance: the work done in the evening, which nobody sees, is what removes the next day’s breakdowns. Inventory and monitoring, above, say what to maintain and when; support and steering, below, handle what is left and show it to the manager.', alt: 'Five layers: inventory; monitoring; maintenance (accented); support; steering.' },
    rapport: { caption: 'Figure 4 · The page the manager receives each month: twenty-eight workstations out of thirty up to date, backups verified every day and a restore tried in three hours forty, thirty-four requests of which thirty-two handled within the written times, every account protected, nine alerts out of eleven handled before a user called, four workstations to replace and two renewals within ninety days. It ends with the decisions to take. Figures and dates are a constructed example.' },
    calendrier: { title: 'Taking over a company’s IT in 2027, in weeks', unit: 'wk', items: [
      { label: 'Inventory and stock-take', note: 'machines, accounts, licences, backups, passwords recovered and put in the vault, restore trial; nothing changed', from: 0, to: 1 },
      { label: 'Bringing up to standard', note: 'overdue updates, old accounts closed, two-step sign-in, out-of-reach copy, out-of-support PCs listed', from: 1, to: 2, accent: true },
      { label: 'Monitoring and support', note: 'agents installed, alerts tuned, support number and address, response times by priority written', from: 2, to: 3 },
      { label: 'Routine and first report', note: 'evening maintenance, first requests tracked, monthly report, replacement plan for the year', from: 3, to: 4 },
    ], caption: 'Figure 5 · Four weeks in the example, the first with nothing changed: what exists is recorded, passwords are recovered, a restore is tried. The accented week is bringing things up to standard, because monitoring placed on a disorderly fleet only rings. The takeover is done with the person who looked after it, not against them.', alt: 'Four-week calendar: inventory and stock-take, bringing up to standard (accented), monitoring and support, routine and first report.' },
    etapes: { title: 'Six questions before signing', items: [
      { label: 'What is covered', sub: 'workstations, servers, network, accounts, sites' },
      { label: 'How fast', sub: 'written times by priority, hours covered', accent: true },
      { label: 'What is preventive', sub: 'updates, backups, alerts' },
      { label: 'What we get each month', sub: 'one-page report, review with the manager' },
      { label: 'Who holds the keys', sub: 'file and passwords with the company' },
      { label: 'How we part', sub: 'notice, handover of the file, access closed' },
    ], caption: 'Figure 6 · The accented question is the second: a response time that is not written down does not exist, and it is written by priority, taking charge then restoring. The other five say what is covered, what is done without being asked, what is received each month, who owns the file and the passwords, and how the parties separate.', alt: 'Six questions before signing: what is covered, how fast (accented), what is preventive, what we get each month, who holds the keys, how we part.' },
  },
  ar: {
    cover: { eyebrow: 'تسيير وصيانة الإعلام الآلي · الجزائر · 2027', title: ['صيانة الإعلام الآلي وتسييره', 'في الجزائر: مراقبة وصيانة وتقرير'], subtitle: 'جرد، مراقبة، صيانة تُنجز في المساء، آجال مكتوبة حسب الأولوية، وتقرير من صفحة كل شهر', left: { label: 'كل شيء يقوم على شخص واحد', sub: 'ندفع عند العطل، والأعطال تعود' }, right: { label: 'صفحة واحدة في الشهر', sub: 'ما أُنجز، ما جُنِّب، وما هو قادم' } },
    situations: { title: 'ست حالات واقعية، وما يجب أن يفعله التسيير المنتظم', columns: ['ما يحدث', 'ما يجب أن يفعله التسيير المنتظم'], rows: [
      { label: 'كل شيء يقوم على شخص واحد', cells: ['حين لا يجيب ينتظر كل شيء', 'فريق، رقم واحد، آجال مكتوبة، ووثائق تملكها المؤسسة'] },
      { label: 'ندفع عند العطل، والأعطال تعود', cells: ['لا أحد يُدفع له لكي لا تكون', 'مبلغ شهري، مراقبة، صيانة في المساء، وتقرير بما جُنِّب'] },
      { label: 'لا أحد يعرف ما عندنا', cells: ['لا الأجهزة ولا الرخص ولا الضمانات', 'جرد محدَّث، عمر الحواسيب، آجال 90 يوماً، ومخطط تجديد'] },
      { label: 'كلمات المرور عند التقني', cells: ['إذا غادر غادر بالمفاتيح', 'خزنة كلمات مرور عند المؤسسة، حسابات باسمها، ودخول يُسحب'] },
      { label: 'التحديثات تنزل في وسط النهار', cells: ['أو لا تُنجز أبداً', 'تحديثات مبرمجة في المساء؛ والحواسيب خارج الدعم تُحدَّد وتُستبدل'] },
      { label: 'نعرف العطل من زبون', cells: ['لا تنبيه ولا لوحة', 'تنبيهات على القرص والنسخة والخط ومزوّد الطاقة، تُعالَج قبل الاتصال'] },
    ], caption: 'الشكل 1 · السطور الثلاثة الأولى تُحَل بفريق له آجال مكتوبة، ومبلغ يدفع الوقاية، وجرد محدَّث؛ والثلاثة التالية بخزنة كلمات مرور عند المؤسسة، وتحديثات مبرمجة، وتنبيهات تُعالَج قبل الاتصال. لا يُحَل أي منها بمصلِّح أسرع.', alt: 'مصفوفة ست حالات: كل شيء يقوم على شخص، الدفع عند العطل، لا أحد يعرف ما عندنا، كلمات المرور عند التقني، تحديثات في وسط النهار، عطل يُعرف من زبون؛ ما يحدث وما يجب أن يفعله التسيير المنتظم.' },
    mois: { caption: 'الشكل 2 · الشهر نفسه، على الأجهزة نفسها، بطريقتين. عند العطل: خمسة توقفات مجموعها تسع عشرة ساعة، ونسخة احتياطية فاشلة منذ ثلاثة أسابيع اكتُشفت صدفة. بالتسيير المنتظم: تسع حركات أُنجزت في اليوم السابق أو في المساء، عطلان قصيران، وساعتان من التوقف. كل عمود توقف وارتفاعه عدد الساعات؛ وكل معيَّن حركة وقائية. الأعطال والمدد مثال مركَّب؛ وأعطالكم تُقاس بتدوينها شهراً.' },
    couches: { title: 'تسيير الإعلام الآلي لمؤسسة متوسطة، في خمس طبقات', layers: [
      { label: 'الجرد', items: [{ name: 'الحواسيب، الخوادم، الشبكة، الحسابات، الرخص، الضمانات والآجال، محدَّثة في مكان واحد', sub: 'لا يمكن صيانة ما لا نعرفه' }] },
      { label: 'المراقبة', items: [{ name: 'برنامج صغير على كل جهاز: القرص، النسخة، التحديثات، خط الإنترنت، مزوّد الطاقة؛ وتنبيهات', sub: 'المتعهّد يرى المشكلة قبل من يستعمل الجهاز' }] },
      { label: 'الصيانة', items: [{ name: 'تحديثات في المساء، نسخ احتياطية متحقَّق منها كل يوم، استرجاع مجرَّب، وحسابات مراجَعة', sub: 'ما يُنجز في اليوم السابق ليس عطلاً في الغد', accent: true }] },
      { label: 'المساعدة', items: [{ name: 'رقم وعنوان، طلبات متابَعة، آجال مكتوبة حسب الأولوية، عن بعد ثم في المكان', sub: 'لكل طلب رقم وساعة ونتيجة' }] },
      { label: 'القيادة', items: [{ name: 'تقرير من صفحة كل شهر، مراجعة مع المسيّر، مخطط تجديد، والملف وكلمات المرور عند المؤسسة', sub: 'المؤسسة تستطيع تغيير المتعهّد دون اكتشاف كل شيء من جديد' }] },
    ], caption: 'الشكل 3 · الطبقة المبرزة هي الصيانة: العمل الذي يُنجز في المساء ولا يراه أحد هو الذي يلغي أعطال الغد. الجرد والمراقبة، فوقها، يقولان ماذا يُصان ومتى؛ والمساعدة والقيادة، تحتها، تعالجان ما يبقى وتُظهرانه للمسيّر.', alt: 'خمس طبقات: الجرد؛ المراقبة؛ الصيانة (مبرزة)؛ المساعدة؛ القيادة.' },
    rapport: { caption: 'الشكل 4 · الصفحة التي يتلقاها المسيّر كل شهر: ثمانية وعشرون حاسوباً من ثلاثين محدَّثة، نسخ احتياطية متحقَّق منها كل يوم واسترجاع مجرَّب في ثلاث ساعات وأربعين دقيقة، أربعة وثلاثون طلباً منها اثنان وثلاثون في الآجال المكتوبة، كل الحسابات محمية، تسعة تنبيهات من أحد عشر عولجت قبل أن يتصل مستعمل، أربعة حواسيب تُستبدل وأجلان خلال تسعين يوماً. وتنتهي بالقرارات التي تُتخذ. الأرقام والتواريخ مثال مركَّب.' },
    calendrier: { title: 'تسلّم معلوماتية مؤسسة سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'الجرد ومعاينة الوضع', note: 'الأجهزة، الحسابات، الرخص، النسخ، استرجاع كلمات المرور ووضعها في الخزنة، وتجربة استرجاع؛ دون تغيير شيء', from: 0, to: 1 },
      { label: 'إعادة التأهيل', note: 'التحديثات المتأخرة، إغلاق الحسابات القديمة، التحقق بخطوتين، نسخة بعيدة عن المتناول، وقائمة الحواسيب خارج الدعم', from: 1, to: 2, accent: true },
      { label: 'المراقبة والمساعدة', note: 'تثبيت برامج المراقبة، ضبط التنبيهات، رقم وعنوان المساعدة، وكتابة الآجال حسب الأولوية', from: 2, to: 3 },
      { label: 'الروتين وأول تقرير', note: 'صيانة المساء، متابعة أولى الطلبات، تقرير الشهر، ومخطط تجديد السنة', from: 3, to: 4 },
    ], caption: 'الشكل 5 · أربعة أسابيع في المثال، الأول دون تغيير شيء: يُسجَّل ما هو موجود، وتُسترجع كلمات المرور، ويُجرَّب استرجاع. الأسبوع المبرز هو إعادة التأهيل، لأن مراقبة توضع على حظيرة غير مرتَّبة لا تفعل إلا الرنين. والتسلّم يتم مع الشخص الذي كان يتكفل بها، لا ضده.', alt: 'تقويم أربعة أسابيع: الجرد ومعاينة الوضع، إعادة التأهيل (مبرز)، المراقبة والمساعدة، الروتين وأول تقرير.' },
    etapes: { title: 'ستة أسئلة قبل التوقيع', items: [
      { label: 'ماذا يشمل العقد', sub: 'الحواسيب، الخوادم، الشبكة، الحسابات، المواقع' },
      { label: 'في كم من الوقت', sub: 'آجال مكتوبة حسب الأولوية، والساعات المغطاة', accent: true },
      { label: 'ما هو الوقائي', sub: 'التحديثات، النسخ الاحتياطية، التنبيهات' },
      { label: 'ماذا نتلقى كل شهر', sub: 'تقرير من صفحة، ومراجعة مع المسيّر' },
      { label: 'لمن المفاتيح', sub: 'الملف وكلمات المرور عند المؤسسة' },
      { label: 'كيف نفترق', sub: 'إشعار مسبق، تسليم الملف، وإغلاق المداخل' },
    ], caption: 'الشكل 6 · السؤال المبرز هو الثاني: الأجل غير المكتوب غير موجود، ويُكتب حسب الأولوية، التكفل ثم الإصلاح. والخمسة الأخرى تقول ما يشمله العقد، وما يُنجز دون طلب، وما يُتلقى كل شهر، ولمن الملف وكلمات المرور، وكيف يفترق الطرفان.', alt: 'ستة أسئلة قبل التوقيع: ماذا يشمل العقد، في كم من الوقت (مبرز)، ما هو الوقائي، ماذا نتلقى كل شهر، لمن المفاتيح، كيف نفترق.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      mois: { svg: mois(e.mois, rtl), caption: t.mois.caption, alt: e.mois.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      rapport: { svg: rapport(e.rapport, rtl), caption: t.rapport.caption, alt: e.rapport.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 4, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
    },
  };
}
