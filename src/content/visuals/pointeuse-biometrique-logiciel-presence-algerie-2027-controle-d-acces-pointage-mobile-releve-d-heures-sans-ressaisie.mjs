import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { semaine, circuit, STRINGS as SC } from './custom/presence.mjs';
export const slug = 'pointeuse-biometrique-logiciel-presence-algerie-2027-controle-d-acces-pointage-mobile-releve-d-heures-sans-ressaisie';
const T = {
  fr: {
    cover: { eyebrow: 'Pointeuse et logiciel de présence · Algérie · 2027', title: ['Pointeuse biométrique et présence', 'en Algérie : du doigt au relevé'], subtitle: 'Terminal à l’entrée, téléphone pour le terrain, anomalies traitées avec un motif, relevé exporté vers la paie', left: { label: 'Pointages recopiés à la main', sub: 'deux jours de ressaisie par mois' }, right: { label: 'Un relevé sans ressaisie', sub: 'on ne traite que les exceptions' } },
    semaine: { caption: 'Figure 1 · Une semaine de présence pour huit personnes sur trois sites, telle que le responsable la voit : les journées à l’heure, deux retards, deux sorties manquantes, une absence non prévue, les repos prévus et les pointages faits au téléphone par les équipes de terrain. Sur quarante-cinq journées attendues, quarante passent au relevé sans que personne n’y touche ; cinq arrivent devant le responsable avec leur question. Noms, heures et tolérance sont un exemple construit ; les règles sont celles que l’entreprise écrit.' },
    situations: { title: 'Six situations réelles, et ce que la pointeuse doit faire', columns: ['Ce qui se passe', 'Ce que la pointeuse doit faire'], rows: [
      { label: 'On recopie la pointeuse dans Excel', cells: ['Le terminal sort un fichier, quelqu’un le retape', 'pointages reçus directement, rattachés au planning, relevé produit sans ressaisie'] },
      { label: 'Un collègue pointe pour un autre', cells: ['Un badge ou un code se prête', 'empreinte ou visage au terminal, photo au pointage mobile, écarts signalés'] },
      { label: 'Les oublis se règlent de mémoire à la fin du mois', cells: ['Personne ne sait plus qui était là le 4', 'anomalie signalée le lendemain, corrigée avec un motif par le responsable'] },
      { label: 'Les équipes de terrain ne pointent nulle part', cells: ['Commerciaux et chauffeurs hors du relevé', 'pointage au téléphone avec position, même grille, même règle que le terminal'] },
      { label: 'Chaque site a sa pointeuse et son fichier', cells: ['Trois terminaux, trois exports, trois formats', 'tous les terminaux vers un seul logiciel, un salarié enrôlé une fois'] },
      { label: 'Un ancien salarié entre encore', cells: ['Son empreinte est restée dans le terminal', 'départ saisi une fois, accès et pointage retirés partout le jour même'] },
    ], caption: 'Figure 2 · Les trois premières lignes se règlent par des pointages reçus sans ressaisie, une identification qui ne se prête pas et des anomalies traitées le lendemain ; les trois suivantes par le pointage mobile, un seul logiciel pour tous les sites et un départ saisi une fois. Aucune ne se règle par un terminal plus récent posé au même endroit.', alt: 'Matrice de six situations : pointeuse recopiée dans un tableur, collègue qui pointe pour un autre, oublis réglés en fin de mois, équipes de terrain sans pointage, un fichier par site, ancien salarié qui entre encore ; ce qui se passe et ce que la pointeuse doit faire.' },
    couches: { title: 'Une pointeuse reliée au logiciel, en cinq couches', layers: [
      { label: 'Terminaux et téléphone', items: [{ name: 'Terminal à empreinte, badge ou visage à l’entrée ; pointage au téléphone avec position pour le terrain', sub: 'le terminal garde ses pointages sans réseau et les renvoie au retour' }] },
      { label: 'Identité', items: [{ name: 'Chaque salarié enrôlé une fois, relié à sa fiche ; empreinte gardée sous forme de gabarit ; retiré partout au départ', sub: 'une donnée sensible : qui y accède et combien de temps se décide avec votre conseil' }] },
      { label: 'Planning et règles', items: [{ name: 'Horaires par équipe et par jour, repos, congés ; tolérances et arrondis écrits par l’entreprise', sub: 'le logiciel applique les règles, il ne les invente pas' }] },
      { label: 'Anomalies', items: [{ name: 'Oubli, retard, absence non prévue, pointage hors zone : signalés le lendemain, corrigés avec un motif', sub: 'on ne traite que les exceptions ; chaque correction a un nom et une date', accent: true }] },
      { label: 'Relevé et sorties', items: [{ name: 'Relevé du mois validé puis figé, export vers la paie, tableau du gérant, journal des accès', sub: 'la paie reprend le relevé sans le retaper' }] },
    ], caption: 'Figure 3 · La couche accentuée est celle des anomalies : c’est elle qui fait la différence entre une pointeuse qu’on recopie et un relevé qui se produit seul. Les terminaux, l’identité et le planning, au-dessus, fournissent les pointages et ce à quoi les comparer ; le relevé, en dessous, n’est que le résultat une fois les exceptions traitées.', alt: 'Cinq couches : terminaux et téléphone ; identité ; planning et règles ; anomalies (accentuée) ; relevé et sorties.' },
    circuit: { caption: 'Figure 4 · Trois façons de pointer, un seul logiciel : le terminal du siège, qui ouvre aussi la porte, celui du dépôt au tourniquet, et le téléphone des commerciaux et des chauffeurs. Le logiciel retient l’heure du terminal, rattache chaque pointage au planning du jour, écarte les doublons, signale les anomalies et garde le journal des corrections. Il en sort le relevé du mois que la paie reprend, le tableau du gérant et le journal des accès. Dans l’exemple, mille quatre cent huit journées par mois, dont quarante-deux à traiter. Effectifs et volumes sont un exemple construit.' },
    calendrier: { title: 'Une pointeuse reliée au logiciel en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Relevé et règles', note: 'sites, équipes, horaires, qui pointe où, règles de l’entreprise écrites, terminaux existants et leur connexion ; sans rien poser', from: 0, to: 1 },
      { label: 'Terminaux et enrôlement', note: 'terminaux reliés au réseau, salariés enrôlés une fois, pointage mobile installé, essai avec une équipe', from: 1, to: 2 },
      { label: 'Planning et anomalies', note: 'horaires saisis, anomalies signalées et corrigées avec motif, un mois en double avec l’ancien tableur', from: 2, to: 3, accent: true },
      { label: 'Relevé et paie', note: 'relevé validé et figé, export vers la paie, tableau du gérant, accès reliés aux départs', from: 3, to: 4 },
    ], caption: 'Figure 5 · Quatre semaines dans l’exemple, la première sans rien poser : qui pointe où et selon quelles règles sont des décisions de l’entreprise. La semaine accentuée est celle du planning et des anomalies, parce que c’est le traitement des exceptions qui supprime la ressaisie. Le premier mois se fait en double avec l’ancien tableur, et l’on compare les deux relevés avant de l’abandonner.', alt: 'Calendrier de quatre semaines : relevé et règles, terminaux et enrôlement, planning et anomalies (accentué), relevé et paie.' },
    etapes: { title: 'Six questions avant d’acheter un terminal', items: [
      { label: 'Qui pointe où', sub: 'bureau, dépôt, terrain, combien par entrée' },
      { label: 'Comment on s’identifie', sub: 'empreinte, badge, visage, téléphone' },
      { label: 'Le terminal envoie-t-il', sub: 'ses pointages seul vers un serveur', accent: true },
      { label: 'Que fait-il sans réseau', sub: 'garder, puis renvoyer dans l’ordre' },
      { label: 'Ouvre-t-il une porte', sub: 'gâche, tourniquet, coupure de courant' },
      { label: 'Où va le relevé', sub: 'vers quelle paie, sous quel format' },
    ], caption: 'Figure 6 · La question accentuée est la troisième : un terminal qui n’envoie pas seul ses pointages vers un serveur oblige quelqu’un à aller les chercher, et c’est là que commence la ressaisie. Les cinq autres décrivent l’installation : qui pointe où, comment on s’identifie, ce qui se passe sans réseau, si le terminal commande une porte, et où va le relevé à la fin du mois.', alt: 'Six questions avant d’acheter un terminal : qui pointe où, comment on s’identifie, le terminal envoie-t-il ses pointages seul (accentuée), que fait-il sans réseau, ouvre-t-il une porte, où va le relevé.' },
  },
  en: {
    cover: { eyebrow: 'Time clock and attendance software · Algeria · 2027', title: ['Biometric time clock, attendance', 'in Algeria: from finger to timesheet'], subtitle: 'A terminal at the door, the phone for the field, anomalies settled with a reason, a timesheet exported to payroll', left: { label: 'Clock-ins retyped by hand', sub: 'two days of retyping a month' }, right: { label: 'A timesheet with no retyping', sub: 'only the exceptions are handled' } },
    semaine: { caption: 'Figure 1 · One week of attendance for eight people on three sites, as the manager sees it: days on time, two late arrivals, two missing clock-outs, one unplanned absence, planned days off and the punches made by phone by field teams. Out of forty-five expected days, forty go to the timesheet without anyone touching them; five reach the manager with their question. Names, times and tolerance are a constructed example; the rules are those the company writes.' },
    situations: { title: 'Six real situations, and what the time clock must do', columns: ['What happens', 'What the time clock must do'], rows: [
      { label: 'We retype the time clock into Excel', cells: ['The terminal produces a file, someone retypes it', 'punches received directly, matched to the schedule, timesheet with no retyping'] },
      { label: 'A colleague clocks in for another', cells: ['A badge or a code gets lent', 'fingerprint or face at the terminal; photo on mobile punch; gaps flagged'] },
      { label: 'Forgotten punches are fixed from memory at month end', cells: ['Nobody remembers who was there on the 4th', 'anomaly flagged the next day, corrected with a reason by the manager'] },
      { label: 'Field teams do not clock in anywhere', cells: ['Salespeople and drivers outside the timesheet', 'phone punch with position; same grid, same rule as the terminal'] },
      { label: 'Each site has its own clock and its own file', cells: ['Three terminals, three exports, three formats', 'every terminal to one software; an employee enrolled once'] },
      { label: 'A former employee can still get in', cells: ['Their fingerprint stayed in the terminal', 'departure entered once; access and clock-in removed everywhere that day'] },
    ], caption: 'Figure 2 · The first three rows are settled by punches received with no retyping, an identification that cannot be lent and anomalies handled the next day; the next three by mobile punching, one software for every site and a departure entered once. None is settled by a newer terminal fixed in the same place.', alt: 'Matrix of six situations: time clock retyped into a spreadsheet, colleague clocking in for another, forgotten punches fixed at month end, field teams with no clock-in, one file per site, former employee still getting in; what happens and what the time clock must do.' },
    couches: { title: 'A time clock linked to software, in five layers', layers: [
      { label: 'Terminals and phone', items: [{ name: 'Fingerprint, badge or face terminal at the door; phone punch with position for the field', sub: 'the terminal keeps its punches when offline and resends them on return' }] },
      { label: 'Identity', items: [{ name: 'Each employee enrolled once, tied to their record; fingerprint kept as a template; removed everywhere on leaving', sub: 'sensitive data: who can access it and for how long is decided with your adviser' }] },
      { label: 'Schedule and rules', items: [{ name: 'Hours per team and per day, days off, leave; tolerances and rounding written by the company', sub: 'the software applies the rules, it does not invent them' }] },
      { label: 'Anomalies', items: [{ name: 'Forgotten punch, lateness, unplanned absence, out-of-zone punch: flagged the next day, corrected with a reason', sub: 'only exceptions are handled; every correction has a name and a date', accent: true }] },
      { label: 'Timesheet and outputs', items: [{ name: 'Monthly timesheet approved then frozen, export to payroll, manager’s board, access log', sub: 'payroll takes the timesheet over without retyping it' }] },
    ], caption: 'Figure 3 · The accented layer is anomalies: it is the difference between a time clock that gets retyped and a timesheet that produces itself. Terminals, identity and the schedule, above, supply the punches and what to compare them with; the timesheet, below, is only the result once exceptions are settled.', alt: 'Five layers: terminals and phone; identity; schedule and rules; anomalies (accented); timesheet and outputs.' },
    circuit: { caption: 'Figure 4 · Three ways to clock in, one software: the head-office terminal, which also opens the door, the warehouse one at the turnstile, and the phone of salespeople and drivers. The software keeps the terminal’s time, matches each punch to the day’s schedule, removes duplicates, flags anomalies and keeps the log of corrections. Out come the monthly timesheet payroll takes over, the manager’s board and the access log. In the example, one thousand four hundred and eight days a month, forty-two of them to settle. Headcounts and volumes are a constructed example.' },
    calendrier: { title: 'A time clock linked to software in 2027, in weeks', unit: 'wk', items: [
      { label: 'Survey and rules', note: 'sites, teams, hours, who clocks in where, company rules written down, existing terminals and how they connect; nothing installed', from: 0, to: 1 },
      { label: 'Terminals and enrolment', note: 'terminals on the network, employees enrolled once, mobile punch installed, trial with one team', from: 1, to: 2 },
      { label: 'Schedule and anomalies', note: 'hours entered, anomalies flagged and corrected with a reason, one month run in parallel with the old spreadsheet', from: 2, to: 3, accent: true },
      { label: 'Timesheet and payroll', note: 'timesheet approved and frozen, export to payroll, manager’s board, access tied to leavers', from: 3, to: 4 },
    ], caption: 'Figure 5 · Four weeks in the example, the first with nothing installed: who clocks in where and under which rules are the company’s decisions. The accented week is schedule and anomalies, because handling exceptions is what removes the retyping. The first month runs in parallel with the old spreadsheet, and the two timesheets are compared before it is dropped.', alt: 'Four-week calendar: survey and rules, terminals and enrolment, schedule and anomalies (accented), timesheet and payroll.' },
    etapes: { title: 'Six questions before buying a terminal', items: [
      { label: 'Who clocks in where', sub: 'office, warehouse, field, how many per door' },
      { label: 'How people identify', sub: 'fingerprint, badge, face, phone' },
      { label: 'Does it send punches', sub: 'by itself to a server', accent: true },
      { label: 'What it does offline', sub: 'keep, then resend in order' },
      { label: 'Does it open a door', sub: 'strike, turnstile, power cut' },
      { label: 'Where the timesheet goes', sub: 'to which payroll, in which format' },
    ], caption: 'Figure 6 · The accented question is the third: a terminal that does not send its punches to a server by itself forces someone to go and fetch them, and that is where retyping begins. The other five describe the installation: who clocks in where, how people identify, what happens offline, whether the terminal controls a door, and where the timesheet goes at month end.', alt: 'Six questions before buying a terminal: who clocks in where, how people identify, does it send punches by itself (accented), what it does offline, does it open a door, where the timesheet goes.' },
  },
  ar: {
    cover: { eyebrow: 'جهاز البصمة وبرنامج الحضور · الجزائر · 2027', title: ['جهاز البصمة وبرنامج الحضور', 'في الجزائر: من الإصبع إلى الكشف'], subtitle: 'جهاز عند المدخل، هاتف للميدان، حالات شاذة تُعالَج بسبب، وكشف يُصدَّر إلى الأجور', left: { label: 'بصمات تُنقل باليد', sub: 'يومان من إعادة الإدخال كل شهر' }, right: { label: 'كشف دون إعادة إدخال', sub: 'لا تُعالَج إلا الاستثناءات' } },
    semaine: { caption: 'الشكل 1 · أسبوع من الحضور لثمانية أشخاص على ثلاثة مواقع، كما يراه المسؤول: الأيام في الوقت، تأخران، خروجان ناقصان، غياب غير مبرمج، أيام الراحة المبرمجة، والبصمات التي أجرتها الفرق الميدانية بالهاتف. من خمسة وأربعين يوماً منتظراً، أربعون تدخل الكشف دون أن يلمسها أحد؛ وخمسة تصل إلى المسؤول ومعها سؤالها. الأسماء والأوقات والتسامح مثال مركَّب؛ والقواعد هي التي تكتبها المؤسسة.' },
    situations: { title: 'ست حالات واقعية، وما يجب أن يفعله جهاز البصمة', columns: ['ما يحدث', 'ما يجب أن يفعله جهاز البصمة'], rows: [
      { label: 'ننقل بيانات الجهاز إلى جدول', cells: ['الجهاز يُخرج ملفاً وأحدهم يعيد كتابته', 'بصمات تصل مباشرة، تُربط بالبرنامج الزمني، وكشف دون إعادة إدخال'] },
      { label: 'زميل يبصم مكان آخر', cells: ['البطاقة أو الرمز يُعاران', 'بصمة أو وجه عند الجهاز؛ صورة عند البصم بالهاتف؛ والفوارق تُبلَّغ'] },
      { label: 'النسيان يُسوّى من الذاكرة آخر الشهر', cells: ['لا أحد يتذكر من كان حاضراً يوم 4', 'الحالة تُبلَّغ في الغد، ويصحّحها المسؤول بسبب'] },
      { label: 'الفرق الميدانية لا تبصم في أي مكان', cells: ['بائعون وسائقون خارج الكشف', 'بصم بالهاتف مع الموقع؛ الشبكة نفسها والقاعدة نفسها'] },
      { label: 'لكل موقع جهازه وملفه', cells: ['ثلاثة أجهزة، ثلاثة ملفات، ثلاث صيغ', 'كل الأجهزة نحو برنامج واحد؛ والعامل يُسجَّل مرة واحدة'] },
      { label: 'عامل سابق ما زال يدخل', cells: ['بصمته بقيت في الجهاز', 'المغادرة تُدخَل مرة؛ والدخول والبصم يُسحبان في اليوم نفسه'] },
    ], caption: 'الشكل 2 · السطور الثلاثة الأولى تُحَل ببصمات تصل دون إعادة إدخال، وتعريف لا يُعار، وحالات شاذة تُعالَج في الغد؛ والثلاثة التالية بالبصم بالهاتف، وبرنامج واحد لكل المواقع، ومغادرة تُدخَل مرة واحدة. لا يُحَل أي منها بجهاز أحدث يوضع في المكان نفسه.', alt: 'مصفوفة ست حالات: بيانات الجهاز تُنقل إلى جدول، زميل يبصم مكان آخر، نسيان يُسوّى آخر الشهر، فرق ميدانية دون بصم، ملف لكل موقع، عامل سابق ما زال يدخل؛ ما يحدث وما يجب أن يفعله جهاز البصمة.' },
    couches: { title: 'جهاز بصمة مربوط بالبرنامج، في خمس طبقات', layers: [
      { label: 'الأجهزة والهاتف', items: [{ name: 'جهاز بالبصمة أو البطاقة أو الوجه عند المدخل؛ وبصم بالهاتف مع الموقع للميدان', sub: 'الجهاز يحفظ بصماته دون شبكة ويعيد إرسالها عند العودة' }] },
      { label: 'الهوية', items: [{ name: 'كل عامل يُسجَّل مرة واحدة ويُربط ببطاقته؛ البصمة تُحفظ كقالب؛ ويُحذف من كل مكان عند المغادرة', sub: 'معطى حساس: من يبلغه وكم يُحفظ يُقرَّر مع مستشاركم' }] },
      { label: 'البرنامج الزمني والقواعد', items: [{ name: 'التوقيت لكل فريق ولكل يوم، الراحة، العطل؛ والتسامح والتقريب تكتبهما المؤسسة', sub: 'البرنامج يطبّق القواعد ولا يخترعها' }] },
      { label: 'الحالات الشاذة', items: [{ name: 'نسيان، تأخر، غياب غير مبرمج، بصم خارج المنطقة: تُبلَّغ في الغد وتُصحَّح بسبب', sub: 'لا تُعالَج إلا الاستثناءات؛ ولكل تصحيح اسم وتاريخ', accent: true }] },
      { label: 'الكشف والمخرجات', items: [{ name: 'كشف الشهر يُصادَق عليه ثم يُجمَّد، تصدير إلى الأجور، لوحة المسيّر، وسجل الدخول', sub: 'مصلحة الأجور تأخذ الكشف دون إعادة كتابته' }] },
    ], caption: 'الشكل 3 · الطبقة المبرزة هي الحالات الشاذة: هي الفرق بين جهاز تُنقل بياناته باليد وكشف يُنتَج وحده. الأجهزة والهوية والبرنامج الزمني، فوقها، توفّر البصمات وما تُقارَن به؛ والكشف، تحتها، ليس إلا النتيجة بعد معالجة الاستثناءات.', alt: 'خمس طبقات: الأجهزة والهاتف؛ الهوية؛ البرنامج الزمني والقواعد؛ الحالات الشاذة (مبرزة)؛ الكشف والمخرجات.' },
    circuit: { caption: 'الشكل 4 · ثلاث طرق للبصم وبرنامج واحد: جهاز المقر الذي يفتح الباب أيضاً، وجهاز المستودع عند البوابة الدوّارة، وهاتف البائعين والسائقين. البرنامج يعتمد وقت الجهاز، ويربط كل بصمة بالبرنامج الزمني لليوم، ويحذف المكرَّر، ويبلّغ الحالات الشاذة، ويحفظ سجل التصحيحات. ويخرج منه كشف الشهر الذي تأخذه مصلحة الأجور، ولوحة المسيّر، وسجل الدخول. في المثال، ألف وأربعمئة وثمانية أيام في الشهر، منها اثنان وأربعون تُعالَج. الأعداد والأحجام مثال مركَّب.' },
    calendrier: { title: 'جهاز بصمة مربوط بالبرنامج سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'المعاينة والقواعد', note: 'المواقع، الفرق، التوقيت، من يبصم أين، قواعد المؤسسة مكتوبة، الأجهزة الموجودة وطريقة ربطها؛ دون تركيب شيء', from: 0, to: 1 },
      { label: 'الأجهزة والتسجيل', note: 'ربط الأجهزة بالشبكة، تسجيل العمال مرة واحدة، تثبيت البصم بالهاتف، وتجربة مع فريق', from: 1, to: 2 },
      { label: 'البرنامج الزمني والحالات الشاذة', note: 'إدخال التوقيت، تبليغ الحالات وتصحيحها بسبب، وشهر بالتوازي مع الجدول القديم', from: 2, to: 3, accent: true },
      { label: 'الكشف والأجور', note: 'كشف مصادَق عليه ومجمَّد، تصدير إلى الأجور، لوحة المسيّر، وربط الدخول بالمغادرات', from: 3, to: 4 },
    ], caption: 'الشكل 5 · أربعة أسابيع في المثال، الأول دون تركيب شيء: من يبصم أين ووفق أي قواعد قرارات المؤسسة. الأسبوع المبرز هو البرنامج الزمني والحالات الشاذة، لأن معالجة الاستثناءات هي التي تلغي إعادة الإدخال. والشهر الأول يتم بالتوازي مع الجدول القديم، ويُقارَن الكشفان قبل التخلي عنه.', alt: 'تقويم أربعة أسابيع: المعاينة والقواعد، الأجهزة والتسجيل، البرنامج الزمني والحالات الشاذة (مبرز)، الكشف والأجور.' },
    etapes: { title: 'ستة أسئلة قبل شراء جهاز', items: [
      { label: 'من يبصم أين', sub: 'المكتب، المستودع، الميدان، وكم عند كل مدخل' },
      { label: 'كيف يُعرَّف الشخص', sub: 'بصمة، بطاقة، وجه، هاتف' },
      { label: 'هل يرسل الجهاز', sub: 'بصماته وحده نحو خادم', accent: true },
      { label: 'ماذا يفعل دون شبكة', sub: 'يحفظ ثم يعيد الإرسال بالترتيب' },
      { label: 'هل يفتح باباً', sub: 'قفل، بوابة دوّارة، انقطاع الكهرباء' },
      { label: 'أين يذهب الكشف', sub: 'نحو أي برنامج أجور وبأي صيغة' },
    ], caption: 'الشكل 6 · السؤال المبرز هو الثالث: الجهاز الذي لا يرسل بصماته وحده نحو خادم يُجبر أحداً على الذهاب لجلبها، ومن هنا تبدأ إعادة الإدخال. الخمسة الأخرى تصف التركيب: من يبصم أين، كيف يُعرَّف الشخص، ما يحدث دون شبكة، هل يتحكم الجهاز في باب، وأين يذهب الكشف آخر الشهر.', alt: 'ستة أسئلة قبل شراء جهاز: من يبصم أين، كيف يُعرَّف الشخص، هل يرسل الجهاز بصماته وحده (مبرز)، ماذا يفعل دون شبكة، هل يفتح باباً، أين يذهب الكشف.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      semaine: { svg: semaine(e.semaine, rtl), caption: t.semaine.caption, alt: e.semaine.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      circuit: { svg: circuit(e.circuit, rtl), caption: t.circuit.caption, alt: e.circuit.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 4, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
    },
  };
}
