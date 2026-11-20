import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { plan, cycle, STRINGS as SC } from './custom/tresorerie.mjs';
export const slug = 'comment-gerer-la-tresorerie-d-une-entreprise-algerie-2027-rentable-et-compte-vide-plan-sur-13-semaines-echeances-clients-fournisseurs-cycle';
const T = {
  fr: {
    cover: { eyebrow: 'Trésorerie · Algérie · 2027', title: ['Gérer la trésorerie de l’entreprise', 'rentable, et le compte est vide'], subtitle: 'Un plan sur treize semaines, les échéances clients et fournisseurs, le cycle qui immobilise l’argent', left: { label: 'Le relevé de banque', sub: 'ce qui s’est passé' }, right: { label: 'Le plan de trésorerie', sub: 'ce qui va se passer' } },
    raisons: { title: 'Six raisons pour lesquelles une entreprise rentable manque d’argent', columns: ['Ce qui se passe', 'Ce que le plan montre'], rows: [
      { label: 'Les clients paient plus tard que prévu', cells: ['une facture à 30 jours encaissée à 70', 'l’encaissement à sa date probable'] },
      { label: 'Le stock a grossi', cells: ['on a acheté pour trois mois de ventes', 'les jours de stock, par famille'] },
      { label: 'Les fournisseurs sont payés trop tôt', cells: ['au comptant, alors qu’un délai existe', 'chaque échéance, à sa date'] },
      { label: 'Plusieurs sorties tombent la même semaine', cells: ['loyer, équipe, fournisseur, tout ensemble', 'le creux, six semaines avant'] },
      { label: 'L’activité grandit vite', cells: ['plus de ventes, donc plus de crédit accordé', 'le besoin d’argent qui suit les ventes'] },
      { label: 'Un gros achat est payé d’un coup', cells: ['un véhicule, une machine, un local', 'son effet sur les treize semaines'] },
    ], caption: 'Figure 1 · Six raisons courantes. Aucune n’est une perte : dans chacune, l’argent existe, mais il est ailleurs, ou il arrivera plus tard. La colonne de droite dit ce qu’un plan de trésorerie fait apparaître.', alt: 'Matrice de six raisons : les clients paient plus tard que prévu, le stock a grossi, les fournisseurs sont payés trop tôt, plusieurs sorties tombent la même semaine, l’activité grandit vite, un gros achat est payé d’un coup ; pour chacune, ce qui se passe et ce que le plan montre.' },
    temps: { title: 'Tenir un plan de trésorerie, en six temps', items: [
      { label: 'Solde de départ', sub: 'banque et caisse, rapprochés' },
      { label: 'Encaissements', sub: 'chaque facture, à sa date probable' },
      { label: 'Décaissements', sub: 'fournisseurs, équipe, loyers, à leur date' },
      { label: 'Solde par semaine', sub: 'treize semaines, un plancher', accent: true },
      { label: 'Décisions', sub: 'relancer, décaler, étaler' },
      { label: 'Mise à jour', sub: 'chaque semaine, prévu contre réel' },
    ], caption: 'Figure 2 · Six temps. Le temps accentué est le quatrième : le solde par semaine, sur treize semaines, face à un plancher. Les trois premiers le préparent ; les deux derniers s’en servent.', alt: 'Six temps : solde de départ, encaissements, décaissements, solde par semaine (accentué), décisions, mise à jour.' },
    plan: { caption: 'Figure 3 · Treize semaines, en milliers de dinars. Sans rien changer, le solde passe sous zéro en semaine 7. Vu en semaine 1, le creux laisse le temps de relancer un client et de décaler une commande : le solde ne descend plus sous 600. Exemple construit.' },
    couches: { title: 'Ce que le logiciel tient, en cinq couches', layers: [
      { label: 'Soldes', items: [{ name: 'Les soldes : banque et caisse, rapprochés avec les écritures, à la date du jour', sub: 'le point de départ, sans approximation' }] },
      { label: 'Entrées', items: [{ name: 'Les encaissements attendus : chaque facture client, son échéance et sa date probable de paiement', sub: 'la date probable n’est pas l’échéance', accent: true }] },
      { label: 'Sorties', items: [{ name: 'Les décaissements prévus : factures fournisseurs, commandes engagées, sorties fixes du mois', sub: 'ce qui est déjà décidé, même sans facture' }] },
      { label: 'Scénarios', items: [{ name: 'Les scénarios : un retard, un report, un gros achat, et leur effet sur les treize semaines', sub: 'essayer une décision avant de la prendre' }] },
      { label: 'Lecture', items: [{ name: 'La lecture : le solde par semaine, le plancher, le prévu contre le réel', sub: 'un écran, lu le même jour chaque semaine' }] },
    ], caption: 'Figure 4 · Cinq couches. La couche accentuée est celle des encaissements attendus : une facture a une échéance, et un client a une habitude. C’est l’habitude qui remplit le compte.', alt: 'Cinq couches : les soldes ; les encaissements attendus (accentuée) ; les décaissements prévus ; les scénarios ; la lecture.' },
    cycle: { caption: 'Figure 5 · Le cycle de l’argent. Aujourd’hui, 75 jours séparent le paiement du fournisseur de l’encaissement du client ; après trois réglages, 35. Exemple construit.' },
    calendrier: { title: 'Cinq semaines pour un plan de trésorerie tenu chaque semaine', unit: 'sem.', items: [
      { label: 'Relevé', note: 'comptes et caisses, factures clients et fournisseurs ouvertes, sorties fixes, habitudes de paiement', from: 0, to: 1, accent: true },
      { label: 'Soldes et rapprochement', note: 'relevés de banque importés, écritures rapprochées, solde du jour fiable', from: 1, to: 2 },
      { label: 'Encaissements', note: 'échéance et date probable par client, d’après ses paiements passés', from: 1, to: 3 },
      { label: 'Décaissements', note: 'factures fournisseurs, commandes engagées, sorties fixes à leur date', from: 2, to: 4 },
      { label: 'Plan et scénarios', note: 'solde sur treize semaines, plancher, essai d’un retard ou d’un report', from: 3, to: 5 },
      { label: 'Première lecture', note: 'lue avec le gérant, puis chaque semaine : prévu contre réel', from: 4, to: 5 },
    ], caption: 'Figure 6 · Cinq semaines dans l’exemple. La période accentuée est la première : on liste les comptes, les factures ouvertes et les habitudes de paiement. Durées indicatives d’un exemple construit.', alt: 'Calendrier de cinq semaines : relevé (accentué), soldes et rapprochement, encaissements, décaissements, plan et scénarios, première lecture.' },
  },
  en: {
    cover: { eyebrow: 'Cash management · Algeria · 2027', title: ['Managing the company’s cash', 'profitable, and the account is empty'], subtitle: 'A thirteen-week plan, customer and supplier due dates, and the cycle that ties money up', left: { label: 'The bank statement', sub: 'what happened' }, right: { label: 'The cash plan', sub: 'what is going to happen' } },
    raisons: { title: 'Six reasons why a profitable company runs short of cash', columns: ['What is happening', 'What the plan shows'], rows: [
      { label: 'Customers pay later than planned', cells: ['a 30-day invoice collected at 70', 'the receipt at its likely date'] },
      { label: 'Stock has grown', cells: ['three months of sales were bought', 'days of stock, per family'] },
      { label: 'Suppliers are paid too early', cells: ['in cash, although terms exist', 'each due date, on its date'] },
      { label: 'Several payments fall in the same week', cells: ['rent, team, supplier, all together', 'the dip, six weeks ahead'] },
      { label: 'The business is growing fast', cells: ['more sales, so more credit granted', 'the need for cash that follows sales'] },
      { label: 'A big purchase is paid in one go', cells: ['a vehicle, a machine, premises', 'its effect on the thirteen weeks'] },
    ], caption: 'Figure 1 · Six common reasons. None is a loss: in each one, the money exists, but it is elsewhere, or it will arrive later. The right-hand column says what a cash plan brings to light.', alt: 'Matrix of six reasons: customers pay later than planned, stock has grown, suppliers are paid too early, several payments fall in the same week, the business is growing fast, a big purchase is paid in one go; for each, what is happening and what the plan shows.' },
    temps: { title: 'Keeping a cash plan, in six steps', items: [
      { label: 'Opening balance', sub: 'bank and cash, reconciled' },
      { label: 'Receipts', sub: 'each invoice, at its likely date' },
      { label: 'Payments', sub: 'suppliers, team, rents, on their date' },
      { label: 'Balance per week', sub: 'thirteen weeks, one floor', accent: true },
      { label: 'Decisions', sub: 'chase, move, spread' },
      { label: 'Update', sub: 'every week, forecast against actual' },
    ], caption: 'Figure 2 · Six steps. The accented step is the fourth: the balance per week, over thirteen weeks, against a floor. The first three prepare it; the last two use it.', alt: 'Six steps: opening balance, receipts, payments, balance per week (accented), decisions, update.' },
    plan: { caption: 'Figure 3 · Thirteen weeks, in thousands of dinars. With nothing changed, the balance goes below zero in week 7. Seen in week 1, the dip leaves time to chase one customer and move one order: the balance no longer goes below 600. Constructed example.' },
    couches: { title: 'What the software holds, in five layers', layers: [
      { label: 'Balances', items: [{ name: 'The balances: bank and cash, reconciled with the entries, as of today', sub: 'the starting point, with no approximation' }] },
      { label: 'Money in', items: [{ name: 'Expected receipts: each customer invoice, its due date and its likely payment date', sub: 'the likely date is not the due date', accent: true }] },
      { label: 'Money out', items: [{ name: 'Planned payments: supplier invoices, committed orders, the month’s fixed outgoings', sub: 'what is already decided, even with no invoice' }] },
      { label: 'Scenarios', items: [{ name: 'The scenarios: a delay, a postponement, a big purchase, and their effect on the thirteen weeks', sub: 'trying a decision before taking it' }] },
      { label: 'Reading', items: [{ name: 'The reading: the balance per week, the floor, forecast against actual', sub: 'one screen, read the same day every week' }] },
    ], caption: 'Figure 4 · Five layers. The accented layer is expected receipts: an invoice has a due date, and a customer has a habit. It is the habit that fills the account.', alt: 'Five layers: the balances; expected receipts (accented); planned payments; the scenarios; the reading.' },
    cycle: { caption: 'Figure 5 · The cash cycle. Today, 75 days separate paying the supplier from collecting from the customer; after three adjustments, 35. Constructed example.' },
    calendrier: { title: 'Five weeks for a cash plan kept every week', unit: 'wk', items: [
      { label: 'Survey', note: 'accounts and tills, open customer and supplier invoices, fixed outgoings, payment habits', from: 0, to: 1, accent: true },
      { label: 'Balances and reconciliation', note: 'bank statements imported, entries reconciled, a reliable balance for today', from: 1, to: 2 },
      { label: 'Receipts', note: 'due date and likely date per customer, from their past payments', from: 1, to: 3 },
      { label: 'Payments', note: 'supplier invoices, committed orders, fixed outgoings on their date', from: 2, to: 4 },
      { label: 'Plan and scenarios', note: 'balance over thirteen weeks, floor, trying a delay or a postponement', from: 3, to: 5 },
      { label: 'First reading', note: 'read with the manager, then every week: forecast against actual', from: 4, to: 5 },
    ], caption: 'Figure 6 · Five weeks in the example. The accented period is the first: listing the accounts, the open invoices and the payment habits. Indicative durations of a constructed example.', alt: 'Five-week calendar: survey (accented), balances and reconciliation, receipts, payments, plan and scenarios, first reading.' },
  },
  ar: {
    cover: { eyebrow: 'الخزينة · الجزائر · 2027', title: ['تسيير خزينة المؤسسة', 'مربحة، والحساب فارغ'], subtitle: 'مخطط على ثلاثة عشر أسبوعاً، استحقاقات الزبائن والمورّدين، والدورة التي تجمّد المال', left: { label: 'كشف البنك', sub: 'ما حدث' }, right: { label: 'مخطط الخزينة', sub: 'ما سيحدث' } },
    raisons: { title: 'ستة أسباب تجعل مؤسسة مربحة ينقصها المال', columns: ['ما يحدث', 'ما يُظهره المخطط'], rows: [
      { label: 'الزبائن يدفعون أبعد من المتوقع', cells: ['فاتورة بأجل 30 يوماً تُحصَّل في 70', 'التحصيل في تاريخه المرجَّح'] },
      { label: 'المخزون كبر', cells: ['اشترينا ما يكفي لثلاثة أشهر من البيع', 'أيام المخزون، حسب الصنف'] },
      { label: 'المورّدون يُدفع لهم مبكراً', cells: ['نقداً، مع أن أجلاً موجود', 'كل استحقاق، في تاريخه'] },
      { label: 'عدة مدفوعات تقع في الأسبوع نفسه', cells: ['إيجار، فريق، ومورّد، كلها معاً', 'الهبوط، قبل ستة أسابيع'] },
      { label: 'النشاط يكبر بسرعة', cells: ['مبيعات أكثر، أي آجال ممنوحة أكثر', 'الحاجة إلى المال التي تتبع المبيعات'] },
      { label: 'شراء كبير يُدفع دفعة واحدة', cells: ['مركبة، آلة، أو محل', 'أثره على الأسابيع الثلاثة عشر'] },
    ], caption: 'الشكل 1 · ستة أسباب شائعة. لا واحد منها خسارة: في كل واحد، المال موجود، لكنه في مكان آخر، أو سيصل لاحقاً. والعمود الآخر يقول ما يُظهره مخطط الخزينة.', alt: 'مصفوفة من ستة أسباب: الزبائن يدفعون أبعد من المتوقع، المخزون كبر، المورّدون يُدفع لهم مبكراً، عدة مدفوعات تقع في الأسبوع نفسه، النشاط يكبر بسرعة، وشراء كبير يُدفع دفعة واحدة؛ ولكل واحد، ما يحدث وما يُظهره المخطط.' },
    temps: { title: 'مسك مخطط الخزينة، في ست مراحل', items: [
      { label: 'رصيد البداية', sub: 'البنك والصندوق، مطابَقان' },
      { label: 'المقبوضات', sub: 'كل فاتورة، في تاريخها المرجَّح' },
      { label: 'المدفوعات', sub: 'مورّدون، فريق، إيجارات، في تاريخها' },
      { label: 'الرصيد لكل أسبوع', sub: 'ثلاثة عشر أسبوعاً، وحد أدنى', accent: true },
      { label: 'القرارات', sub: 'تذكير، تأجيل، وتقسيط' },
      { label: 'التحديث', sub: 'كل أسبوع، المتوقَّع مقابل الفعلي' },
    ], caption: 'الشكل 2 · ست مراحل. المرحلة المبرزة هي الرابعة: الرصيد لكل أسبوع، على ثلاثة عشر أسبوعاً، أمام حد أدنى. الثلاث الأولى تحضّره؛ والأخيرتان تستعملانه.', alt: 'ست مراحل: رصيد البداية، المقبوضات، المدفوعات، الرصيد لكل أسبوع (مبرزة)، القرارات، والتحديث.' },
    plan: { caption: 'الشكل 3 · ثلاثة عشر أسبوعاً، بآلاف الدنانير. دون تغيير شيء، ينزل الرصيد تحت الصفر في الأسبوع 7. وإذا رُئي في الأسبوع 1، ترك الهبوط الوقت لتذكير زبون وتأجيل طلبية: فلا ينزل الرصيد تحت 600. مثال مركَّب.' },
    couches: { title: 'ما يمسكه البرنامج، في خمس طبقات', layers: [
      { label: 'الأرصدة', items: [{ name: 'الأرصدة: البنك والصندوق، مطابَقة مع القيود، بتاريخ اليوم', sub: 'نقطة البداية، دون تقريب' }] },
      { label: 'الداخل', items: [{ name: 'المقبوضات المنتظرة: كل فاتورة زبون، استحقاقها، وتاريخ دفعها المرجَّح', sub: 'التاريخ المرجَّح ليس تاريخ الاستحقاق', accent: true }] },
      { label: 'الخارج', items: [{ name: 'المدفوعات المتوقعة: فواتير المورّدين، الطلبيات الملتزَم بها، والمدفوعات الثابتة للشهر', sub: 'ما تقرر من قبل، حتى دون فاتورة' }] },
      { label: 'الفرضيات', items: [{ name: 'الفرضيات: تأخر، تأجيل، أو شراء كبير، وأثرها على الأسابيع الثلاثة عشر', sub: 'تجربة قرار قبل اتخاذه' }] },
      { label: 'القراءة', items: [{ name: 'القراءة: الرصيد لكل أسبوع، الحد الأدنى، والمتوقَّع مقابل الفعلي', sub: 'شاشة واحدة، تُقرأ في اليوم نفسه كل أسبوع' }] },
    ], caption: 'الشكل 4 · خمس طبقات. الطبقة المبرزة هي المقبوضات المنتظرة: للفاتورة استحقاق، وللزبون عادة. والعادة هي التي تملأ الحساب.', alt: 'خمس طبقات: الأرصدة؛ المقبوضات المنتظرة (مبرزة)؛ المدفوعات المتوقعة؛ الفرضيات؛ والقراءة.' },
    cycle: { caption: 'الشكل 5 · دورة النقد. اليوم، 75 يوماً تفصل الدفع للمورّد عن تحصيل الزبون؛ وبعد ثلاثة تعديلات، 35. مثال مركَّب.' },
    calendrier: { title: 'خمسة أسابيع لمخطط خزينة يُمسك كل أسبوع', unit: 'أسبوع', items: [
      { label: 'المعاينة', note: 'الحسابات والصناديق، فواتير الزبائن والمورّدين المفتوحة، المدفوعات الثابتة، وعادات الدفع', from: 0, to: 1, accent: true },
      { label: 'الأرصدة والمطابقة', note: 'كشوف البنك مستوردة، القيود مطابَقة، ورصيد اليوم موثوق', from: 1, to: 2 },
      { label: 'المقبوضات', note: 'الاستحقاق والتاريخ المرجَّح لكل زبون، حسب مدفوعاته السابقة', from: 1, to: 3 },
      { label: 'المدفوعات', note: 'فواتير المورّدين، الطلبيات الملتزَم بها، والمدفوعات الثابتة في تاريخها', from: 2, to: 4 },
      { label: 'المخطط والفرضيات', note: 'الرصيد على ثلاثة عشر أسبوعاً، الحد الأدنى، وتجربة تأخر أو تأجيل', from: 3, to: 5 },
      { label: 'القراءة الأولى', note: 'تُقرأ مع المسيّر، ثم كل أسبوع: المتوقَّع مقابل الفعلي', from: 4, to: 5 },
    ], caption: 'الشكل 6 · خمسة أسابيع في المثال. الفترة المبرزة هي الأولى: جرد الحسابات، الفواتير المفتوحة، وعادات الدفع. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من خمسة أسابيع: المعاينة (مبرزة)، الأرصدة والمطابقة، المقبوضات، المدفوعات، المخطط والفرضيات، ثم القراءة الأولى.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      raisons: { svg: matrix({ title: t.raisons.title, columns: t.raisons.columns, rows: t.raisons.rows, rtl }), caption: t.raisons.caption, alt: t.raisons.alt },
      temps: { svg: steps({ title: t.temps.title, steps: t.temps.items, arrows: true, rtl }), caption: t.temps.caption, alt: t.temps.alt },
      plan: { svg: plan(e.plan, rtl), caption: t.plan.caption, alt: e.plan.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      cycle: { svg: cycle(e.cycle, rtl), caption: t.cycle.caption, alt: e.cycle.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 5, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
