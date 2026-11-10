import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { ledger, aging, STRINGS as RC } from './custom/receivables.mjs';
export const slug = 'le-client-doit-400-000-dinars-personne-ne-sait-depuis-quand-credit-client-application-algerie-2027-lettrage-cheques-relances-plafond';
const T = {
  fr: {
    cover: { eyebrow: 'Crédit client · Encours · Relances · 2027', title: ['« Le client doit', '400 000 dinars, et personne', 'ne sait depuis quand »'], subtitle: 'Ce qu’on construit pour tenir le crédit client : compte par client, lettrage, chèques, retards, relances, plafond', left: { label: 'Un carnet et une mémoire', sub: 'et un total que personne ne connaît' }, right: { label: 'Un compte, une liste, un plafond', sub: 'et le gérant qui sait à 8 h' } },
    compte: { caption: 'Figure 1 · Le compte d’un client au 10 novembre. À gauche, les pièces : trois factures avec leur échéance, un encaissement en espèces, un avoir lié à une facture, un chèque remis en banque mais pas encore encaissé. À droite, le lettrage : chaque encaissement est affecté à des factures précises, et chaque facture connaît son restant ; le chèque solde deux factures sous réserve, et son rejet les rouvrirait. En bas, le solde comptable et l’exposition réelle, chèque en attente réintégré, comparée au plafond : la commande du jour le dépasserait et demande une approbation. Montants et pièces sont un exemple construit.' },
    retards: { caption: 'Figure 2 · Le tableau des retards au 10 novembre, six clients sur quatre-vingt-quatre. L’âge se compte depuis l’échéance, pas depuis la facture ; les tranches au-delà de soixante jours sont en accent. Sous chaque nom, l’état de la relance que l’application exécute : rappel avant échéance envoyé, appel prévu, commandes bloquées, litige remis au gérant. La tuile calcule le délai moyen de paiement, encours divisé par les ventes à crédit par jour, recalculé chaque nuit. Clients et montants sont un exemple construit.' },
    couches: { title: 'Le crédit client, en cinq couches', layers: [
      { label: 'Compte client', items: [{ name: 'Une écriture par pièce : facture, avoir, encaissement, chèque, remise ; jamais un solde modifié à la main', sub: 'le solde est la somme des écritures, pas un champ' }] },
      { label: 'Lettrage', items: [{ name: 'Chaque encaissement affecté à des factures précises, restant par facture ; affectation proposée, confirmée au comptoir', sub: 'un acompte reste non lettré jusqu’à la facture', accent: true }] },
      { label: 'Chèques et états', items: [{ name: 'Chèque reçu, remis, encaissé ou rejeté ; le lettrage est conditionnel jusqu’à l’encaissement ; le rejet rouvre les factures', sub: 'un chèque remis compte dans l’exposition' }] },
      { label: 'Âge et relances', items: [{ name: 'Tranches d’âge depuis l’échéance ; séquence de relance écrite par le gérant, exécutée par l’application, arrêtée par un paiement', sub: 'WhatsApp puis appel puis blocage puis gérant' }] },
      { label: 'Plafond et blocage', items: [{ name: 'Plafond par client comparé à l’exposition au moment de la commande ; dépassement bloqué ou soumis à approbation nommée', sub: 'le commercial voit la raison et le montant manquant' }] },
    ], caption: 'Figure 3 · La couche accentuée est celle qui transforme un solde en liste : sans lettrage, on sait combien le client doit, pas depuis quand ni pour quoi, et aucune relance ne peut dire quelle facture elle réclame. Les quatre autres couches tiennent la vérité des pièces, la vie des chèques, l’âge des retards et la décision au moment de la commande.', alt: 'Cinq couches : compte client, lettrage (accentuée), chèques et états, âge et relances, plafond et blocage.' },
    etapes: { title: 'La séquence de relance, en six temps', items: [
      { label: 'J-3 · rappel', sub: 'WhatsApp ou SMS : montant, échéance, factures concernées, lien de paiement' },
      { label: 'J+1 · échue', sub: 'facture passée en retard ; message court ; état visible du commercial' },
      { label: 'J+7 · appel', sub: 'tâche d’appel au commercial ; résultat saisi : promesse datée ou litige', accent: true },
      { label: 'J+15 · blocage', sub: 'nouvelles commandes bloquées ou à approuver ; relevé envoyé' },
      { label: 'J+30 · gérant', sub: 'dossier remis au gérant avec le relevé, les promesses et les échanges' },
      { label: 'Paiement ou litige', sub: 'la séquence s’arrête d’elle-même ; un litige la met en pause' },
    ], caption: 'Figure 4 · Les délais sont ceux d’une entreprise type et se règlent par le gérant, pas dans le code. L’étape accentuée est la seule où un humain intervient avant le gérant : l’appel du commercial, dont le résultat est saisi comme une promesse datée ou un litige, parce qu’une promesse non datée n’existe pas. Chaque étape sait quelles factures elle réclame, grâce au lettrage.', alt: 'Six temps : J-3 rappel, J+1 échue, J+7 appel (accentué), J+15 blocage, J+30 gérant, paiement ou litige.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Le client doit 400 000 et conteste', cells: ['Personne ne sait quelles factures ; on négocie un forfait', 'relevé par facture avec restant ; lettrage visible ; relevé envoyé'] },
      { label: 'Le chèque est revenu impayé', cells: ['La facture était « payée » ; le rejet est découvert au mois', 'lettrage conditionnel ; rejet rouvre les factures ; relance repart'] },
      { label: 'Le commercial livre un client bloqué', cells: ['Le plafond est dépassé depuis un mois ; personne ne l’a vu', 'exposition comparée au plafond à la commande ; approbation nommée'] },
      { label: 'Le client paie un acompte « pour le compte »', cells: ['50 000 encaissés, affectés nulle part ; le solde est faux', 'encaissement non lettré, visible ; affectation à la facture suivante'] },
      { label: 'Trois clients relancés deux fois, dix jamais', cells: ['La relance dépend de l’humeur ; les gros clients sont épargnés', 'séquence écrite, exécutée la nuit ; exceptions décidées par le gérant'] },
      { label: 'Le comptable redemande l’encours', cells: ['Un fichier refait chaque mois, différent du précédent', 'balance âgée datée, exportée ; écritures envoyées à la comptabilité'] },
    ], caption: 'Figure 5 · Les trois premières lignes se règlent par le lettrage, les états du chèque et le plafond comparé à l’exposition ; les trois suivantes par l’encaissement non lettré visible, la séquence exécutée par l’application et la balance âgée exportée. Aucune ne se règle par un meilleur carnet.', alt: 'Matrice de six situations : contestation d’un solde, chèque impayé, client bloqué livré, acompte non affecté, relances inégales, encours redemandé ; ce qui se passe et ce que l’application fait.' },
    calendrier: { title: 'Tenir le crédit client en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles', note: 'conditions par client, plafonds, séquence de relance et ses délais, qui approuve un dépassement ; écrites avec le gérant et le comptable', from: 0, to: 1 },
      { label: 'Compte et lettrage', note: 'écritures par pièce, affectation des encaissements, restant par facture, relevé bilingue', from: 1, to: 3, accent: true },
      { label: 'Chèques', note: 'états reçu, remis, encaissé, rejeté ; lettrage conditionnel ; rejet rouvre et relance', from: 3, to: 4 },
      { label: 'Reprise', note: 'soldes d’ouverture par client, pièces ouvertes, encaissements non lettrés à affecter', from: 4, to: 5 },
      { label: 'Relances et plafond', note: 'séquence exécutée la nuit, tâches d’appel, blocage à la commande, approbations', from: 5, to: 6 },
      { label: 'Mesure', note: 'délai moyen, encours par tranche, promesses tenues, export comptable, revue du lundi', from: 6, to: 7 },
    ], caption: 'Figure 6 · Sept semaines, la première sans code : les conditions par client, les plafonds et la séquence de relance sont des décisions du gérant, et le comptable dit comment les écritures doivent sortir. Les deux semaines accentuées sont le compte et le lettrage, parce que tout le reste, relances, plafond, balance âgée, en dépend.', alt: 'Frise de sept semaines : règles, compte et lettrage (accentué, deux semaines), chèques, reprise, relances et plafond, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Customer credit · Receivables · Reminders · 2027', title: ['“The customer owes', '400,000 dinars, and nobody', 'knows since when”'], subtitle: 'What gets built to hold customer credit: account per customer, allocation, cheques, overdues, reminders, limit', left: { label: 'A notebook and a memory', sub: 'and a total nobody knows' }, right: { label: 'An account, a list, a limit', sub: 'and a manager who knows at 8:00' } },
    compte: { caption: 'Figure 1 · One customer’s account on 10 November. On the left, the documents: three invoices with their due dates, a cash receipt, a credit note linked to an invoice, a cheque deposited but not yet cleared. On the right, the allocation: every receipt is assigned to specific invoices, and every invoice knows its remaining amount; the cheque settles two invoices conditionally, and a bounce would reopen them. At the bottom, the book balance and the real exposure, pending cheque added back, compared with the limit: today’s order would exceed it and requires approval. Amounts and documents are a constructed example.' },
    retards: { caption: 'Figure 2 · The overdue board on 10 November, six customers out of eighty-four. Age is counted from the due date, not the invoice date; buckets beyond sixty days are accented. Under each name, the state of the reminder the application runs: pre-due reminder sent, call planned, orders blocked, dispute handed to the manager. The tile computes the average collection time, receivables divided by credit sales per day, recomputed every night. Customers and amounts are a constructed example.' },
    couches: { title: 'Customer credit, in five layers', layers: [
      { label: 'Customer account', items: [{ name: 'One entry per document: invoice, credit note, receipt, cheque, discount; never a balance edited by hand', sub: 'the balance is the sum of entries, not a field' }] },
      { label: 'Allocation', items: [{ name: 'Every receipt assigned to specific invoices, remaining per invoice; allocation proposed, confirmed at the counter', sub: 'a deposit stays unallocated until the invoice', accent: true }] },
      { label: 'Cheques and states', items: [{ name: 'Cheque received, deposited, cleared or bounced; allocation is conditional until clearing; a bounce reopens invoices', sub: 'a deposited cheque counts in exposure' }] },
      { label: 'Age and reminders', items: [{ name: 'Age buckets from the due date; reminder sequence written by the manager, run by the application, stopped by a payment', sub: 'WhatsApp, then call, then block, then manager' }] },
      { label: 'Limit and blocking', items: [{ name: 'Limit per customer compared with exposure at order time; overrun blocked or sent to a named approver', sub: 'the rep sees the reason and the missing amount' }] },
    ], caption: 'Figure 3 · The accented layer is what turns a balance into a list: without allocation, you know how much the customer owes, not since when nor for what, and no reminder can say which invoice it is claiming. The other four layers hold the truth of documents, the life of cheques, the age of overdues and the decision at order time.', alt: 'Five layers: customer account, allocation (accented), cheques and states, age and reminders, limit and blocking.' },
    etapes: { title: 'The reminder sequence, in six beats', items: [
      { label: 'D-3 · reminder', sub: 'WhatsApp or SMS: amount, due date, invoices concerned, payment link' },
      { label: 'D+1 · overdue', sub: 'invoice marked late; short message; state visible to the rep' },
      { label: 'D+7 · call', sub: 'call task for the rep; outcome entered: dated promise or dispute', accent: true },
      { label: 'D+15 · block', sub: 'new orders blocked or sent for approval; statement sent' },
      { label: 'D+30 · manager', sub: 'file handed to the manager with statement, promises and exchanges' },
      { label: 'Payment or dispute', sub: 'the sequence stops by itself; a dispute pauses it' },
    ], caption: 'Figure 4 · The delays are those of a typical company and are set by the manager, not in code. The accented step is the only one where a human acts before the manager: the rep’s call, whose outcome is entered as a dated promise or a dispute, because an undated promise does not exist. Every step knows which invoices it is claiming, thanks to allocation.', alt: 'Six beats: D-3 reminder, D+1 overdue, D+7 call (accented), D+15 block, D+30 manager, payment or dispute.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'The customer owes 400,000 and disputes it', cells: ['Nobody knows which invoices; a lump sum is negotiated', 'statement per invoice with remaining; visible allocation; statement sent'] },
      { label: 'The cheque bounced', cells: ['The invoice was “paid”; the bounce is found at month end', 'conditional allocation; bounce reopens invoices; reminder restarts'] },
      { label: 'The rep delivers a blocked customer', cells: ['The limit has been exceeded for a month; nobody saw it', 'exposure compared with limit at order; named approval'] },
      { label: 'The customer pays a deposit “on account”', cells: ['50,000 collected, assigned nowhere; the balance is wrong', 'unallocated receipt, visible; assigned to the next invoice'] },
      { label: 'Three customers chased twice, ten never', cells: ['Reminders depend on mood; big customers are spared', 'written sequence, run at night; exceptions decided by the manager'] },
      { label: 'The accountant asks for receivables again', cells: ['A file redone every month, different from the last', 'dated ageing report, exported; entries sent to accounting'] },
    ], caption: 'Figure 5 · The first three rows are settled by allocation, cheque states and the limit compared with exposure; the next three by the visible unallocated receipt, the sequence run by the application and the exported ageing report. None is settled by a better notebook.', alt: 'Matrix of six situations: disputed balance, bounced cheque, blocked customer delivered, unassigned deposit, uneven reminders, receivables asked again; what happens and what the application does.' },
    calendrier: { title: 'Holding customer credit in 2027, in weeks', unit: 'wk', items: [
      { label: 'Rules', note: 'terms per customer, limits, reminder sequence and its delays, who approves an overrun; written with the manager and the accountant', from: 0, to: 1 },
      { label: 'Account and allocation', note: 'entries per document, assignment of receipts, remaining per invoice, bilingual statement', from: 1, to: 3, accent: true },
      { label: 'Cheques', note: 'states received, deposited, cleared, bounced; conditional allocation; bounce reopens and reminds', from: 3, to: 4 },
      { label: 'Take-over', note: 'opening balances per customer, open documents, unallocated receipts to assign', from: 4, to: 5 },
      { label: 'Reminders and limit', note: 'sequence run at night, call tasks, blocking at order, approvals', from: 5, to: 6 },
      { label: 'Measurement', note: 'average collection time, receivables per bucket, promises kept, accounting export, Monday review', from: 6, to: 7 },
    ], caption: 'Figure 6 · Seven weeks, the first without code: terms per customer, limits and the reminder sequence are the manager’s decisions, and the accountant says how entries must come out. The two accented weeks are the account and allocation, because everything else, reminders, limit, ageing report, depends on them.', alt: 'Seven-week timeline: rules, account and allocation (accented, two weeks), cheques, take-over, reminders and limit, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'ائتمان الزبائن · ذمم · تذكيرات · 2027', title: ['«الزبون مدين', 'بـ 400,000 دينار، ولا أحد', 'يعرف منذ متى»'], subtitle: 'ما يُبنى لضبط ائتمان الزبائن: حساب لكل زبون، تسوية، شيكات، تأخيرات، تذكيرات، سقف', left: { label: 'دفتر وذاكرة', sub: 'ومجموع لا يعرفه أحد' }, right: { label: 'حساب، قائمة، سقف', sub: 'ومسيّر يعرف عند 08:00' } },
    compte: { caption: 'الشكل 1 · حساب زبون واحد في 10 نوفمبر. على جانب، المستندات: ثلاث فواتير بآجالها، تحصيل نقدي، إشعار دائن مرتبط بفاتورة، شيك مودَع في البنك لم يُحصَّل بعد. على الجانب الآخر، التسوية: كل تحصيل يُخصص لفواتير محددة، وكل فاتورة تعرف متبقيها؛ الشيك يسدّد فاتورتين رهن التحصيل، ورفضه يعيد فتحهما. في الأسفل الرصيد الدفتري والتعرّض الحقيقي بإعادة إدراج الشيك المعلّق مقارنةً بالسقف: طلبية اليوم تتجاوزه وتتطلب موافقة. والمبالغ والمستندات مثال مبني.' },
    retards: { caption: 'الشكل 2 · لوحة التأخيرات في 10 نوفمبر، ستة زبائن من أربعة وثمانين. يُحسب العمر من تاريخ الاستحقاق لا من تاريخ الفاتورة؛ والشرائح بعد ستين يوماً مميزة. تحت كل اسم حالة التذكير الذي ينفذه التطبيق: تذكير قبل الاستحقاق مرسَل، مكالمة مقررة، طلبيات محجوبة، نزاع مُحال إلى المسيّر. والبطاقة تحسب متوسط مدة التحصيل، الذمم مقسومة على مبيعات الائتمان اليومية، ويُعاد حسابه كل ليلة. والزبائن والمبالغ مثال مبني.' },
    couches: { title: 'ائتمان الزبائن، في خمس طبقات', layers: [
      { label: 'حساب الزبون', items: [{ name: 'قيد لكل مستند: فاتورة، إشعار دائن، تحصيل، شيك، خصم؛ لا رصيد يُعدَّل يدوياً أبداً', sub: 'الرصيد مجموع القيود لا حقل' }] },
      { label: 'التسوية', items: [{ name: 'كل تحصيل يُخصص لفواتير محددة، متبقٍّ لكل فاتورة؛ تخصيص مقترح يُؤكَّد عند الشباك', sub: 'العربون يبقى غير مسوّى حتى الفاتورة', accent: true }] },
      { label: 'الشيكات وحالاتها', items: [{ name: 'شيك مستلَم، مودَع، محصَّل أو مرفوض؛ التسوية مشروطة حتى التحصيل؛ الرفض يعيد فتح الفواتير', sub: 'الشيك المودَع يُحسب في التعرّض' }] },
      { label: 'العمر والتذكيرات', items: [{ name: 'شرائح عمرية من الاستحقاق؛ تسلسل تذكير يكتبه المسيّر وينفذه التطبيق ويوقفه الدفع', sub: 'WhatsApp ثم مكالمة ثم حجب ثم المسيّر' }] },
      { label: 'السقف والحجب', items: [{ name: 'سقف لكل زبون يُقارَن بالتعرّض لحظة الطلب؛ التجاوز محجوب أو يُرفع لموافق مسمّى', sub: 'المندوب يرى السبب والمبلغ الناقص' }] },
    ], caption: 'الشكل 3 · الطبقة المميزة هي ما يحوّل الرصيد إلى قائمة: بلا تسوية نعرف كم يدين الزبون، لا منذ متى ولا عن ماذا، ولا يستطيع تذكير أن يقول أي فاتورة يطالب بها. والطبقات الأربع الأخرى تحفظ حقيقة المستندات وحياة الشيكات وعمر التأخيرات والقرار لحظة الطلب.', alt: 'خمس طبقات: حساب الزبون، التسوية (مميزة)، الشيكات وحالاتها، العمر والتذكيرات، السقف والحجب.' },
    etapes: { title: 'تسلسل التذكير، في ستة أوقات', items: [
      { label: 'ي-3 · تذكير', sub: 'WhatsApp أو SMS: المبلغ، الأجل، الفواتير المعنية، رابط دفع' },
      { label: 'ي+1 · مستحقة', sub: 'الفاتورة تصير متأخرة؛ رسالة قصيرة؛ حالة يراها المندوب' },
      { label: 'ي+7 · مكالمة', sub: 'مهمة اتصال للمندوب؛ النتيجة تُدخَل: وعد مؤرَّخ أو نزاع', accent: true },
      { label: 'ي+15 · حجب', sub: 'الطلبيات الجديدة محجوبة أو للموافقة؛ كشف مرسَل' },
      { label: 'ي+30 · المسيّر', sub: 'الملف يُحال إلى المسيّر مع الكشف والوعود والمراسلات' },
      { label: 'دفع أو نزاع', sub: 'التسلسل يتوقف من تلقاء نفسه؛ النزاع يعلّقه' },
    ], caption: 'الشكل 4 · الآجال آجال شركة نموذجية ويحددها المسيّر لا الكود. والخطوة المميزة هي الوحيدة التي يتدخل فيها إنسان قبل المسيّر: مكالمة المندوب التي تُدخَل نتيجتها وعداً مؤرَّخاً أو نزاعاً، لأن الوعد بلا تاريخ لا وجود له. وكل خطوة تعرف أي فواتير تطالب بها بفضل التسوية.', alt: 'ستة أوقات: ي-3 تذكير، ي+1 مستحقة، ي+7 مكالمة (مميزة)، ي+15 حجب، ي+30 المسيّر، دفع أو نزاع.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'الزبون مدين بـ 400,000 ويعترض', cells: ['لا أحد يعرف أي فواتير؛ يُتفاوض على مبلغ جزافي', 'كشف لكل فاتورة بالمتبقي؛ تسوية مرئية؛ كشف مرسَل'] },
      { label: 'الشيك عاد مرفوضاً', cells: ['كانت الفاتورة «مدفوعة»؛ الرفض يُكتشف في الشهر', 'تسوية مشروطة؛ الرفض يعيد فتح الفواتير؛ التذكير يعود'] },
      { label: 'المندوب يسلّم زبوناً محجوباً', cells: ['السقف متجاوَز منذ شهر؛ لا أحد رآه', 'التعرّض يُقارَن بالسقف عند الطلب؛ موافقة مسمّاة'] },
      { label: 'الزبون يدفع عربوناً «على الحساب»', cells: ['50,000 محصَّلة غير مخصصة؛ الرصيد خاطئ', 'تحصيل غير مسوّى مرئي؛ يُخصص للفاتورة التالية'] },
      { label: 'ثلاثة زبائن ذُكّروا مرتين، عشرة أبداً', cells: ['التذكير يتبع المزاج؛ الكبار مستثنون', 'تسلسل مكتوب يُنفَّذ ليلاً؛ الاستثناءات يقررها المسيّر'] },
      { label: 'المحاسب يطلب الذمم من جديد', cells: ['ملف يُعاد كل شهر ويختلف عن السابق', 'ميزان أعمار مؤرَّخ مُصدَّر؛ قيود تُرسل إلى المحاسبة'] },
    ], caption: 'الشكل 5 · الأسطر الثلاثة الأولى تُحل بالتسوية وحالات الشيك والسقف المقارَن بالتعرّض؛ والثلاثة التالية بالتحصيل غير المسوّى المرئي والتسلسل الذي ينفذه التطبيق وميزان الأعمار المُصدَّر. ولا واحد يُحل بدفتر أفضل.', alt: 'مصفوفة ست حالات: رصيد معترَض عليه، شيك مرفوض، زبون محجوب مسلَّم، عربون غير مخصص، تذكيرات غير متساوية، ذمم مطلوبة من جديد؛ ما يحدث وما يفعله التطبيق.' },
    calendrier: { title: 'ضبط ائتمان الزبائن سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القواعد', note: 'شروط لكل زبون، سقوف، تسلسل التذكير وآجاله، من يوافق على التجاوز؛ تُكتب مع المسيّر والمحاسب', from: 0, to: 1 },
      { label: 'الحساب والتسوية', note: 'قيود لكل مستند، تخصيص التحصيلات، متبقٍّ لكل فاتورة، كشف ثنائي اللغة', from: 1, to: 3, accent: true },
      { label: 'الشيكات', note: 'حالات مستلَم، مودَع، محصَّل، مرفوض؛ تسوية مشروطة؛ الرفض يعيد الفتح ويذكّر', from: 3, to: 4 },
      { label: 'الاستلام', note: 'أرصدة افتتاحية لكل زبون، مستندات مفتوحة، تحصيلات غير مسوّاة للتخصيص', from: 4, to: 5 },
      { label: 'التذكيرات والسقف', note: 'تسلسل يُنفَّذ ليلاً، مهام اتصال، حجب عند الطلب، موافقات', from: 5, to: 6 },
      { label: 'القياس', note: 'متوسط التحصيل، ذمم لكل شريحة، وعود موفّى بها، تصدير محاسبي، مراجعة الاثنين', from: 6, to: 7 },
    ], caption: 'الشكل 6 · سبعة أسابيع، الأول بلا كود: شروط كل زبون والسقوف وتسلسل التذكير قرارات المسيّر، والمحاسب يقول كيف يجب أن تخرج القيود. والأسبوعان المميزان هما الحساب والتسوية، لأن كل ما عداهما، التذكيرات والسقف وميزان الأعمار، يتوقف عليهما.', alt: 'خط زمني من سبعة أسابيع: القواعد، الحساب والتسوية (مميز، أسبوعان)، الشيكات، الاستلام، التذكيرات والسقف، القياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = RC[locale] || RC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      compte: { svg: ledger(e.ledger, rtl), caption: t.compte.caption, alt: e.ledger.alt },
      retards: { svg: aging(e.aging, rtl), caption: t.retards.caption, alt: e.aging.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 7, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
