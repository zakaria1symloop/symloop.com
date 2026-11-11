import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { journee, gerant, STRINGS as SC } from './custom/creche.mjs';
export const slug = 'logiciel-creche-algerie-2027-inscriptions-pointage-mensualites-journal-parents-liste-d-attente';
const T = {
  fr: {
    cover: { eyebrow: 'Logiciel crèche · Algérie · 2027', title: ['Logiciel crèche en Algérie :', 'pointage, journal, mensualités'], subtitle: 'Ce qu’on construit pour une crèche : dossier enfant, journée saisie hors ligne, parents sur WhatsApp, mensualités encaissées, liste d’attente', left: { label: 'Trois cahiers et des appels', sub: '« il a mangé ? » chaque soir à l’accueil' }, right: { label: 'Une tablette par section', sub: 'journal envoyé, mensualité rappelée' } },
    couches: { title: 'Un logiciel de crèche, en cinq couches', layers: [
      { label: 'Dossier enfant', items: [{ name: 'Inscription, section, fiche santé et allergies, personnes autorisées avec photo, consentements, documents', sub: 'tout ce qui doit être su avant le premier jour' }] },
      { label: 'Journée', items: [{ name: 'Pointage à la porte, repas, sieste, soins, photos ; saisis sur la tablette de la section, sans réseau', sub: 'la journée est écrite au moment où elle se passe' }] },
      { label: 'Parents', items: [{ name: 'Journal du soir par WhatsApp puis application ; agent qui répond depuis le journal ; remise à une personne autorisée', sub: 'le parent lit, il n’appelle plus' }] },
      { label: 'Mensualités', items: [{ name: 'Facturées le 1er, encaissées à l’accueil avec reçu, rappel automatique, règlement depuis la France possible', sub: 'chaque dinar a un reçu, chaque retard un rappel', accent: true }] },
      { label: 'Direction', items: [{ name: 'Places, inscrits, présents, liste d’attente, équipe du jour contre les seuils écrits, export comptable', sub: 'le gérant lit, il ne compte plus' }] },
    ], caption: 'Figure 2 · La couche accentuée est celle des mensualités : facturées le premier du mois, encaissées à l’accueil avec un reçu envoyé au parent, rappelées automatiquement, réglables depuis la France. C’est la couche qui paie les quatre autres. Le dossier enfant au-dessus est ce que la journée et les parents lisent ; la direction en bas n’est qu’une lecture.', alt: 'Cinq couches : dossier enfant, journée, parents, mensualités (accentuée), direction.' },
    journee: { caption: 'Figure 1 · Une journée d’un enfant de la section Moyens, du pointage à 8h12 au journal envoyé à 17h10. Les six événements du matin sont saisis sans réseau sur la tablette de la section et envoyés à 12h04 au retour du réseau, sans doublon ni perte parce que chaque événement porte un identifiant unique. Le parent lit le journal le soir, et l’agent WhatsApp répond à « il a mangé ? » depuis ce journal, jamais de mémoire. Enfant, horaires et chiffres sont un exemple construit.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: '« Il a mangé ? » chaque soir', cells: ['L’accueil répond de mémoire', 'journal du jour envoyé à 17h10 ; agent WhatsApp qui répond depuis le journal'] },
      { label: 'Un oncle vient chercher l’enfant', cells: ['Personne ne sait s’il est autorisé', 'personnes autorisées avec photo au dossier ; remise saisie avec le nom'] },
      { label: 'L’allergie oubliée au repas', cells: ['La fiche est dans un classeur', 'allergies affichées sur la tablette au moment du repas, pour cet enfant'] },
      { label: 'Mensualités payées en retard', cells: ['Le gérant appelle 12 parents', 'rappel WhatsApp automatique le 11 ; reçu pour chaque espèce ; reste 5 appels'] },
      { label: 'Une place se libère', cells: ['On ne sait plus qui attend', 'liste d’attente par section et par date ; proposition envoyée, délai de réponse'] },
      { label: 'La tablette n’a pas de réseau', cells: ['On note sur un papier', 'saisie hors ligne, file d’attente, envoi au retour, identifiant unique'] },
    ], caption: 'Figure 3 · Les trois premières lignes se règlent par le dossier enfant et la journée saisie ; les trois suivantes par les mensualités, la liste d’attente et la saisie hors ligne. Aucune ne se règle par une puéricultrice de plus à l’accueil.', alt: 'Matrice de six situations : question du soir, personne non autorisée, allergie, mensualités en retard, place libérée, pas de réseau ; ce qui se passe et ce que l’application fait.' },
    gerant: { caption: 'Figure 4 · Le tableau du gérant : par section, les places qu’il a écrites, les inscrits, les présents du jour et la liste d’attente ; pour le mois, les mensualités facturées, encaissées au dix, rappelées le onze, et celles qui restent ; pour la journée, l’équipe pointée contre le seuil qu’il a écrit, avec une alerte quand une section passe dessous. Sections, prix et chiffres sont un exemple construit ; les seuils d’encadrement sont ceux du gérant, pas ceux du guide.' },
    etapes: { title: 'Mettre une crèche sous logiciel, en six temps', items: [
      { label: 'Écrire les règles', sub: 'sections, places, seuils d’équipe, mensualité, rappel, consentements' },
      { label: 'Reprendre les dossiers', sub: 'enfants, fiches santé, personnes autorisées, photos' },
      { label: 'Pointer et saisir', sub: 'tablette par section ; hors ligne ; repas, sieste, soins', accent: true },
      { label: 'Envoyer le journal', sub: 'WhatsApp le soir ; agent qui répond ; application ensuite' },
      { label: 'Encaisser et rappeler', sub: 'reçu par paiement ; rappel automatique ; depuis la France' },
      { label: 'Lire le tableau', sub: 'places, présents, attente, équipe, export comptable' },
    ], caption: 'Figure 5 · Le temps accentué est le pointage et la saisie : tout ce que le parent lit et tout ce que le gérant mesure vient de ce que l’équipe saisit sur la tablette au moment où ça se passe. Avant, les règles et les dossiers ; après, le journal, les mensualités et le tableau ne sont que des lectures.', alt: 'Six temps : écrire les règles, reprendre les dossiers, pointer et saisir (accentué), envoyer le journal, encaisser et rappeler, lire le tableau.' },
    calendrier: { title: 'Un logiciel de crèche en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles et dossiers', note: 'sections, places, seuils, mensualité, consentements ; reprise des dossiers enfants avec la direction', from: 0, to: 1 },
      { label: 'Journée hors ligne', note: 'tablette par section, pointage, repas, sieste, soins, photos ; base locale, file, identifiant unique', from: 1, to: 3, accent: true },
      { label: 'Parents', note: 'journal du soir par WhatsApp, personnes autorisées, agent qui répond depuis le journal', from: 3, to: 4 },
      { label: 'Mensualités', note: 'facturation, encaissement avec reçu, rappel automatique, règlement depuis la France, export', from: 4, to: 5 },
      { label: 'Direction', note: 'tableau places, présents, attente, équipe ; liste d’attente ; alertes', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines, la première sans code : les sections, les places, les seuils d’équipe et la mensualité sont les décisions de la direction. Les deux semaines accentuées sont la journée hors ligne, parce que le journal, les mensualités et le tableau ne sont que des lectures de ce que l’équipe saisit.', alt: 'Calendrier de six semaines : règles et dossiers, journée hors ligne (accentuée, deux semaines), parents, mensualités, direction.' },
  },
  en: {
    cover: { eyebrow: 'Nursery software · Algeria · 2027', title: ['Nursery software in Algeria:', 'check-in, journal, fees'], subtitle: 'What gets built for a nursery: child file, day entered offline, parents on WhatsApp, fees collected, waiting list', left: { label: 'Three notebooks and phone calls', sub: '“did he eat?” every evening at the desk' }, right: { label: 'One tablet per section', sub: 'journal sent, fee reminded' } },
    couches: { title: 'Nursery software, in five layers', layers: [
      { label: 'Child file', items: [{ name: 'Enrolment, section, health sheet and allergies, authorised persons with photo, consents, documents', sub: 'everything that must be known before day one' }] },
      { label: 'The day', items: [{ name: 'Door check-in, meals, nap, care, photos; entered on the section’s tablet, without network', sub: 'the day is written as it happens' }] },
      { label: 'Parents', items: [{ name: 'Evening journal by WhatsApp then app; agent answering from the journal; hand-over to an authorised person', sub: 'the parent reads, and stops calling' }] },
      { label: 'Fees', items: [{ name: 'Invoiced on the 1st, collected at the desk with receipt, automatic reminder, payment from France possible', sub: 'every dinar has a receipt, every delay a reminder', accent: true }] },
      { label: 'Management', items: [{ name: 'Places, enrolled, present, waiting list, today’s staff against written thresholds, accounting export', sub: 'the manager reads, and stops counting' }] },
    ], caption: 'Figure 2 · The accented layer is fees: invoiced on the first of the month, collected at the desk with a receipt sent to the parent, reminded automatically, payable from France. It is the layer that pays for the other four. The child file above is what the day and the parents read; management at the bottom is only a reading.', alt: 'Five layers: child file, the day, parents, fees (accented), management.' },
    journee: { caption: 'Figure 1 · One child’s day in the Middle section, from check-in at 8:12 to the journal sent at 17:10. The six morning events are entered without network on the section’s tablet and sent at 12:04 when the network returns, without duplicate or loss because each event carries a unique id. The parent reads the journal in the evening, and the WhatsApp agent answers “did he eat?” from that journal, never from memory. Child, times and figures are a constructed example.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: '“Did he eat?” every evening', cells: ['The desk answers from memory', 'day journal sent at 17:10; WhatsApp agent answering from the journal'] },
      { label: 'An uncle comes to collect the child', cells: ['Nobody knows if he is authorised', 'authorised persons with photo on file; hand-over entered with the name'] },
      { label: 'The allergy forgotten at meal time', cells: ['The sheet is in a binder', 'allergies shown on the tablet at meal time, for that child'] },
      { label: 'Fees paid late', cells: ['The manager calls 12 parents', 'automatic WhatsApp reminder on the 11th; receipt for every cash payment; 5 calls remain'] },
      { label: 'A place frees up', cells: ['Nobody remembers who is waiting', 'waiting list per section and date; offer sent, reply deadline'] },
      { label: 'The tablet has no network', cells: ['Notes on a piece of paper', 'offline entry, queue, sent on return, unique id'] },
    ], caption: 'Figure 3 · The first three rows are settled by the child file and the entered day; the next three by fees, the waiting list and offline entry. None is settled by one more nursery nurse at the desk.', alt: 'Matrix of six situations: evening question, unauthorised person, allergy, late fees, freed place, no network; what happens and what the application does.' },
    gerant: { caption: 'Figure 4 · The manager’s board: per section, the places they wrote, enrolled, present today and the waiting list; for the month, fees invoiced, collected by the tenth, reminded on the eleventh, and those remaining; for the day, staff checked in against the threshold they wrote, with an alert when a section drops below. Sections, prices and figures are a constructed example; staffing thresholds are the manager’s, not the guide’s.' },
    etapes: { title: 'Putting a nursery under software, in six beats', items: [
      { label: 'Write the rules', sub: 'sections, places, staff thresholds, fee, reminder, consents' },
      { label: 'Take over the files', sub: 'children, health sheets, authorised persons, photos' },
      { label: 'Check in and enter', sub: 'tablet per section; offline; meals, nap, care', accent: true },
      { label: 'Send the journal', sub: 'WhatsApp in the evening; answering agent; app later' },
      { label: 'Collect and remind', sub: 'receipt per payment; automatic reminder; from France' },
      { label: 'Read the board', sub: 'places, present, waiting, staff, accounting export' },
    ], caption: 'Figure 5 · The accented beat is check-in and entry: everything the parent reads and everything the manager measures comes from what the team enters on the tablet as it happens. Before it, rules and files; after it, the journal, fees and the board are only readings.', alt: 'Six beats: write the rules, take over the files, check in and enter (accented), send the journal, collect and remind, read the board.' },
    calendrier: { title: 'Nursery software in 2027, in weeks', unit: 'wk', items: [
      { label: 'Rules and files', note: 'sections, places, thresholds, fee, consents; child files taken over with management', from: 0, to: 1 },
      { label: 'Offline day', note: 'tablet per section, check-in, meals, nap, care, photos; local database, queue, unique id', from: 1, to: 3, accent: true },
      { label: 'Parents', note: 'evening journal by WhatsApp, authorised persons, agent answering from the journal', from: 3, to: 4 },
      { label: 'Fees', note: 'invoicing, collection with receipt, automatic reminder, payment from France, export', from: 4, to: 5 },
      { label: 'Management', note: 'board of places, present, waiting, staff; waiting list; alerts', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks, the first without code: sections, places, staff thresholds and the fee are management’s decisions. The two accented weeks are the offline day, because the journal, fees and the board are only readings of what the team enters.', alt: 'Six-week timeline: rules and files, offline day (accented, two weeks), parents, fees, management.' },
  },
  ar: {
    cover: { eyebrow: 'برنامج روضة · الجزائر · 2027', title: ['برنامج روضة أطفال في الجزائر:', 'تسجيل الوصول، اليوميات، الاشتراكات'], subtitle: 'ما يُبنى لروضة: ملف الطفل، يوم يُدخل دون شبكة، الوالدون على واتساب، اشتراكات محصَّلة، قائمة انتظار', left: { label: 'ثلاثة دفاتر ومكالمات', sub: '«هل أكل؟» كل مساء في الاستقبال' }, right: { label: 'لوحة لكل قسم', sub: 'يوميات مرسَلة، اشتراك مذكَّر به' } },
    couches: { title: 'برنامج روضة أطفال، في خمس طبقات', layers: [
      { label: 'ملف الطفل', items: [{ name: 'التسجيل، القسم، بطاقة الصحة والحساسيات، الأشخاص المخوَّلون بصورة، الموافقات، الوثائق', sub: 'كل ما يجب أن يُعرف قبل اليوم الأول' }] },
      { label: 'اليوم', items: [{ name: 'تسجيل عند الباب، وجبات، قيلولة، عناية، صور؛ تُدخل على لوحة القسم، دون شبكة', sub: 'يُكتب اليوم لحظة حدوثه' }] },
      { label: 'الوالدون', items: [{ name: 'يوميات المساء عبر واتساب ثم التطبيق؛ وكيل يجيب من اليوميات؛ تسليم لشخص مخوَّل', sub: 'يقرأ الوالد، ولا يتصل بعد اليوم' }] },
      { label: 'الاشتراكات الشهرية', items: [{ name: 'تُفوتر في الأول، تُحصَّل في الاستقبال بوصل، تذكير تلقائي، دفع من فرنسا ممكن', sub: 'لكل دينار وصل، ولكل تأخر تذكير', accent: true }] },
      { label: 'الإدارة', items: [{ name: 'الأماكن، المسجَّلون، الحاضرون، قائمة الانتظار، فريق اليوم مقابل العتبات المكتوبة، تصدير محاسبي', sub: 'يقرأ المسيّر، ولا يعدّ بعد اليوم' }] },
    ], caption: 'الشكل 2 · الطبقة المبرزة هي الاشتراكات الشهرية: تُفوتر في أول الشهر، تُحصَّل في الاستقبال بوصل يُرسل للوالد، يُذكَّر بها تلقائياً، وتُدفع من فرنسا. هي الطبقة التي تدفع ثمن الطبقات الأربع الأخرى. ملف الطفل فوقها هو ما يقرؤه اليوم والوالدون؛ والإدارة في الأسفل مجرد قراءة.', alt: 'خمس طبقات: ملف الطفل، اليوم، الوالدون، الاشتراكات الشهرية (مبرزة)، الإدارة.' },
    journee: { caption: 'الشكل 1 · يوم طفل في قسم المتوسطين، من تسجيل الوصول على 8:12 إلى اليوميات المرسَلة على 17:10. أحداث الصباح الستة تُدخل دون شبكة على لوحة القسم وتُرسل على 12:04 عند عودة الشبكة، دون تكرار ولا ضياع لأن لكل حدث معرّفاً فريداً. يقرأ الوالد اليوميات مساءً، ويجيب وكيل واتساب عن «هل أكل؟» من هذه اليوميات، لا من الذاكرة أبداً. الطفل والأوقات والأرقام مثال مبني.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: '«هل أكل؟» كل مساء', cells: ['يجيب الاستقبال من الذاكرة', 'يوميات اليوم تُرسل على 17:10؛ وكيل واتساب يجيب من اليوميات'] },
      { label: 'عمّ يأتي لأخذ الطفل', cells: ['لا أحد يعرف إن كان مخوَّلاً', 'أشخاص مخوَّلون بصورة في الملف؛ تسليم يُدخل بالاسم'] },
      { label: 'الحساسية المنسية عند الوجبة', cells: ['البطاقة في مصنّف', 'الحساسيات تُعرض على اللوحة وقت الوجبة، لهذا الطفل'] },
      { label: 'اشتراكات مدفوعة متأخرة', cells: ['يتصل المسيّر بـ12 والداً', 'تذكير واتساب تلقائي في الحادي عشر؛ وصل لكل نقد؛ تبقى 5 مكالمات'] },
      { label: 'مكان يشغر', cells: ['لم يعد أحد يعرف من ينتظر', 'قائمة انتظار لكل قسم وبالتاريخ؛ عرض يُرسل، أجل للرد'] },
      { label: 'اللوحة بلا شبكة', cells: ['يُكتب على ورقة', 'إدخال دون شبكة، طابور، إرسال عند العودة، معرّف فريد'] },
    ], caption: 'الشكل 3 · الصفوف الثلاثة الأولى تُحل بملف الطفل واليوم المُدخل؛ والثلاثة التالية بالاشتراكات وقائمة الانتظار والإدخال دون شبكة. لا واحدة منها تُحل بمربية إضافية في الاستقبال.', alt: 'مصفوفة ست حالات: سؤال المساء، شخص غير مخوَّل، حساسية، اشتراكات متأخرة، مكان شاغر، لا شبكة؛ ما يحدث وما يفعله التطبيق.' },
    gerant: { caption: 'الشكل 4 · لوحة المسيّر: لكل قسم، الأماكن التي كتبها، المسجَّلون، حاضرو اليوم وقائمة الانتظار؛ للشهر، الاشتراكات المفوترة، المحصَّلة إلى العاشر، المذكَّر بها في الحادي عشر، والمتبقية؛ لليوم، الفريق المسجَّل مقابل العتبة التي كتبها، مع تنبيه حين ينزل قسم تحتها. الأقسام والأسعار والأرقام مثال مبني؛ عتبات التأطير هي عتبات المسيّر، لا عتبات الدليل.' },
    etapes: { title: 'وضع روضة تحت برنامج، في ستة أوقات', items: [
      { label: 'كتابة القواعد', sub: 'الأقسام، الأماكن، عتبات الفريق، الاشتراك، التذكير، الموافقات' },
      { label: 'استعادة الملفات', sub: 'الأطفال، بطاقات الصحة، الأشخاص المخوَّلون، الصور' },
      { label: 'التسجيل والإدخال', sub: 'لوحة لكل قسم؛ دون شبكة؛ وجبات، قيلولة، عناية', accent: true },
      { label: 'إرسال اليوميات', sub: 'واتساب مساءً؛ وكيل يجيب؛ التطبيق لاحقاً' },
      { label: 'التحصيل والتذكير', sub: 'وصل لكل دفع؛ تذكير تلقائي؛ من فرنسا' },
      { label: 'قراءة اللوحة', sub: 'أماكن، حاضرون، انتظار، فريق، تصدير محاسبي' },
    ], caption: 'الشكل 5 · الوقت المبرز هو التسجيل والإدخال: كل ما يقرؤه الوالد وكل ما يقيسه المسيّر يأتي مما يُدخله الفريق على اللوحة لحظة حدوثه. قبله القواعد والملفات؛ وبعده اليوميات والاشتراكات واللوحة مجرد قراءات.', alt: 'ستة أوقات: كتابة القواعد، استعادة الملفات، التسجيل والإدخال (مبرز)، إرسال اليوميات، التحصيل والتذكير، قراءة اللوحة.' },
    calendrier: { title: 'برنامج روضة أطفال سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القواعد والملفات', note: 'الأقسام، الأماكن، العتبات، الاشتراك، الموافقات؛ استعادة ملفات الأطفال مع الإدارة', from: 0, to: 1 },
      { label: 'اليوم دون شبكة', note: 'لوحة لكل قسم، تسجيل الوصول، وجبات، قيلولة، عناية، صور؛ قاعدة محلية، طابور، معرّف فريد', from: 1, to: 3, accent: true },
      { label: 'الوالدون', note: 'يوميات المساء عبر واتساب، الأشخاص المخوَّلون، وكيل يجيب من اليوميات', from: 3, to: 4 },
      { label: 'الاشتراكات', note: 'الفوترة، التحصيل بوصل، التذكير التلقائي، الدفع من فرنسا، التصدير', from: 4, to: 5 },
      { label: 'الإدارة', note: 'لوحة الأماكن والحاضرين والانتظار والفريق؛ قائمة الانتظار؛ تنبيهات', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع، الأول دون كود: الأقسام والأماكن وعتبات الفريق والاشتراك قرارات الإدارة. الأسبوعان المبرزان هما اليوم دون شبكة، لأن اليوميات والاشتراكات واللوحة مجرد قراءات لما يُدخله الفريق.', alt: 'تقويم ستة أسابيع: القواعد والملفات، اليوم دون شبكة (مبرز، أسبوعان)، الوالدون، الاشتراكات، الإدارة.' },
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
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      gerant: { svg: gerant(e.gerant, rtl), caption: t.gerant.caption, alt: e.gerant.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
