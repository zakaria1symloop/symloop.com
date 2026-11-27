import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { cascade, seuil, STRINGS as SC } from './custom/rentabilite.mjs';
export const slug = 'comment-savoir-si-mon-entreprise-est-rentable-algerie-2027-le-chiffre-d-affaires-monte-il-ne-reste-rien-prix-de-revient-marge-par-client-seuil';
const T = {
  fr: {
    cover: { eyebrow: 'Rentabilité · Algérie · 2027', title: ['Mon entreprise est-elle rentable ?', 'le chiffre monte, il ne reste rien'], subtitle: 'De la marge brute au résultat du mois : remises, livraison, retours, charges fixes, le seuil à dépasser', left: { label: '30 % de marge brute', sub: 'ce que le logiciel affiche' }, right: { label: '2 % de résultat', sub: 'ce qui reste vraiment' } },
    cascade: { caption: 'Figure 1 · Un mois, en milliers de dinars. 12 000 de chiffre d’affaires, 3 600 de marge brute, puis remises, livraison et retours : 2 400. Après 2 150 de charges fixes, il reste 250. Exemple construit ; résultat de gestion.' },
    couches: { title: 'Ce qu’il faut enregistrer pour le savoir, en cinq couches', layers: [
      { label: 'Ventes', items: [{ name: 'Les ventes avec leur coût : le prix vendu et le coût d’achat sur chaque ligne', sub: 'la marge brute, ligne par ligne' }] },
      { label: 'Coûts directs', items: [{ name: 'Les coûts directs rattachés : la remise sur la ligne, la livraison sur la commande, le retour sur l’avoir', sub: 'ce que la marge brute ne voit pas', accent: true }] },
      { label: 'Charges fixes', items: [{ name: 'Les charges fixes du mois : loyers, équipe, véhicules, abonnements, saisies une fois par mois', sub: 'le montant à couvrir avant de gagner un dinar' }] },
      { label: 'Règles', items: [{ name: 'Les règles de répartition : écrites, visibles, les mêmes chaque mois', sub: 'sinon chaque réunion refait le calcul' }] },
      { label: 'Lectures', items: [{ name: 'Les lectures : la cascade du mois, la marge par client et par produit, le seuil', sub: 'trois écrans, lus à date fixe' }] },
    ], caption: 'Figure 2 · Cinq couches. La couche accentuée est celle des coûts directs : ils existent déjà dans l’entreprise, sur des bons, des avoirs et des factures de transport, mais rattachés à rien. Les relier à la vente est ce qui fait passer de la marge brute au résultat.', alt: 'Cinq couches : les ventes avec leur coût ; les coûts directs rattachés (accentuée) ; les charges fixes du mois ; les règles de répartition ; les lectures.' },
    temps: { title: 'Savoir si l’on est rentable, en six temps', items: [
      { label: 'Coût sur la ligne', sub: 'prix vendu et coût d’achat' },
      { label: 'Coûts directs', sub: 'remise, livraison, retour', accent: true },
      { label: 'Charges fixes', sub: 'la liste du mois, datée' },
      { label: 'Marge par axe', sub: 'client, produit, activité' },
      { label: 'Seuil du mois', sub: 'charges fixes ÷ taux' },
      { label: 'Lecture à date fixe', sub: 'chaque mois, les mêmes écrans' },
    ], caption: 'Figure 3 · Six temps. Le temps accentué est le deuxième : rattacher remises, livraison et retours à la vente. C’est le plus long, et celui qui change le plus la lecture.', alt: 'Six temps : coût sur la ligne, coûts directs (accentué), charges fixes, marge par axe, seuil du mois, lecture à date fixe.' },
    raisons: { title: 'Six raisons pour lesquelles le chiffre monte et le résultat non', columns: ['Ce qui se passe', 'Ce qu’il faut mesurer'], rows: [
      { label: 'On vend plus de ce qui marge le moins', cells: ['le mélange des ventes se déplace', 'la marge par produit, chaque mois'] },
      { label: 'Les remises grossissent', cells: ['accordées une à une, jamais additionnées', 'la remise moyenne par vendeur et par client'] },
      { label: 'Livrer coûte plus qu’avant', cells: ['petites commandes, tournées plus longues', 'le coût de livraison par commande'] },
      { label: 'Un gros client coûte cher à servir', cells: ['délais de paiement, retours, exigences', 'la marge par client après coûts directs'] },
      { label: 'Les charges fixes ont monté', cells: ['un local, un véhicule, une équipe de plus', 'le seuil de rentabilité, recalculé'] },
      { label: 'Le résultat est là, pas l’argent', cells: ['le stock et les créances l’absorbent', 'ce qui est vendu, livré, puis encaissé'] },
    ], caption: 'Figure 4 · Six raisons courantes. Aucune ne se voit dans le chiffre d’affaires, et la plupart ne se voient pas dans la marge brute. La colonne de droite dit quoi mesurer pour savoir laquelle joue chez vous.', alt: 'Matrice de six raisons : on vend plus de ce qui marge le moins, les remises grossissent, livrer coûte plus, un gros client coûte cher à servir, les charges fixes ont monté, le résultat est là mais pas l’argent ; pour chacune, ce qui se passe et ce qu’il faut mesurer.' },
    seuil: { caption: 'Figure 5 · Six mois face au seuil. Avec 2 150 de charges fixes et 20 % de marge après coûts directs, il faut 10 750 de chiffre d’affaires pour ne rien perdre. Trois mois sur six sont en dessous. Exemple construit.' },
    calendrier: { title: 'Six semaines pour une cascade lue chaque mois', unit: 'sem.', items: [
      { label: 'Relevé', note: 'ce que les ventes enregistrent déjà : coût, remise, client ; la liste des charges fixes', from: 0, to: 1, accent: true },
      { label: 'Coût sur les lignes', note: 'coût d’achat porté sur chaque ligne de vente, y compris sur le passé quand il se retrouve', from: 1, to: 3 },
      { label: 'Coûts directs', note: 'livraison rattachée à la commande, retours et avoirs reliés à la vente d’origine', from: 2, to: 4 },
      { label: 'Charges et règles', note: 'charges fixes saisies par mois et par activité, règles de répartition écrites', from: 3, to: 5 },
      { label: 'Lectures', note: 'cascade du mois, marge par client et par produit, seuil et avance sur le seuil', from: 4, to: 6 },
      { label: 'Première lecture', note: 'lue avec le gérant, chiffres vérifiés ligne par ligne avant d’être crus', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines dans l’exemple. La période accentuée est la première : on regarde ce que les ventes enregistrent déjà. La première cascade est lue avec le gérant, puis chaque mois à date fixe. Durées indicatives d’un exemple construit.', alt: 'Calendrier de six semaines : relevé (accentué), coût sur les lignes, coûts directs, charges et règles, lectures, première lecture.' },
  },
  en: {
    cover: { eyebrow: 'Profitability · Algeria · 2027', title: ['Is my company profitable?', 'revenue rises, nothing is left'], subtitle: 'From gross margin to the month’s result: discounts, delivery, returns, fixed costs, and the line to cross', left: { label: '30% gross margin', sub: 'what the software displays' }, right: { label: '2% result', sub: 'what really remains' } },
    cascade: { caption: 'Figure 1 · One month, in thousands of dinars. 12,000 of revenue, 3,600 of gross margin, then discounts, delivery and returns: 2,400. After 2,150 of fixed costs, 250 remain. Constructed example; management result.' },
    couches: { title: 'What must be recorded to know it, in five layers', layers: [
      { label: 'Sales', items: [{ name: 'Sales with their cost: the price sold and the purchase cost on every line', sub: 'gross margin, line by line' }] },
      { label: 'Direct costs', items: [{ name: 'Direct costs attached: the discount on the line, delivery on the order, the return on the credit note', sub: 'what gross margin does not see', accent: true }] },
      { label: 'Fixed costs', items: [{ name: 'The month’s fixed costs: rents, team, vehicles, subscriptions, entered once a month', sub: 'the amount to cover before earning one dinar' }] },
      { label: 'Rules', items: [{ name: 'The allocation rules: written, visible, the same every month', sub: 'otherwise every meeting redoes the calculation' }] },
      { label: 'Readings', items: [{ name: 'The readings: the month’s cascade, margin per customer and per product, the break-even point', sub: 'three screens, read on a fixed date' }] },
    ], caption: 'Figure 2 · Five layers. The accented layer is direct costs: they already exist in the company, on delivery notes, credit notes and transport invoices, but attached to nothing. Linking them to the sale is what takes you from gross margin to the result.', alt: 'Five layers: sales with their cost; direct costs attached (accented); the month’s fixed costs; the allocation rules; the readings.' },
    temps: { title: 'Knowing whether you are profitable, in six steps', items: [
      { label: 'Cost on the line', sub: 'price sold and purchase cost' },
      { label: 'Direct costs', sub: 'discount, delivery, return', accent: true },
      { label: 'Fixed costs', sub: 'the month’s list, dated' },
      { label: 'Margin per axis', sub: 'customer, product, activity' },
      { label: 'The month’s line', sub: 'fixed costs ÷ rate' },
      { label: 'Fixed-date reading', sub: 'every month, the same screens' },
    ], caption: 'Figure 3 · Six steps. The accented step is the second: attaching discounts, delivery and returns to the sale. It is the longest, and the one that changes the reading most.', alt: 'Six steps: cost on the line, direct costs (accented), fixed costs, margin per axis, the month’s break-even line, fixed-date reading.' },
    raisons: { title: 'Six reasons why revenue rises and the result does not', columns: ['What is happening', 'What to measure'], rows: [
      { label: 'You sell more of what earns least', cells: ['the sales mix is shifting', 'margin per product, every month'] },
      { label: 'Discounts are growing', cells: ['granted one by one, never added up', 'average discount per seller and per customer'] },
      { label: 'Delivering costs more than before', cells: ['small orders, longer rounds', 'delivery cost per order'] },
      { label: 'A big customer is costly to serve', cells: ['payment terms, returns, demands', 'margin per customer after direct costs'] },
      { label: 'Fixed costs have gone up', cells: ['one more site, vehicle or team', 'the break-even point, recalculated'] },
      { label: 'The result is there, not the cash', cells: ['stock and receivables absorb it', 'what is sold, delivered, then collected'] },
    ], caption: 'Figure 4 · Six common reasons. None shows in revenue, and most do not show in gross margin. The right-hand column says what to measure to know which one is at play in your company.', alt: 'Matrix of six reasons: you sell more of what earns least, discounts are growing, delivering costs more, a big customer is costly to serve, fixed costs have gone up, the result is there but not the cash; for each, what is happening and what to measure.' },
    seuil: { caption: 'Figure 5 · Six months against the break-even point. With 2,150 of fixed costs and a 20% margin after direct costs, 10,750 of revenue is needed to lose nothing. Three months out of six are under it. Constructed example.' },
    calendrier: { title: 'Six weeks for a cascade read every month', unit: 'wk', items: [
      { label: 'Survey', note: 'what sales already record: cost, discount, customer; the list of fixed costs', from: 0, to: 1, accent: true },
      { label: 'Cost on the lines', note: 'purchase cost carried on every sales line, including the past where it can be found', from: 1, to: 3 },
      { label: 'Direct costs', note: 'delivery attached to the order, returns and credit notes linked to the original sale', from: 2, to: 4 },
      { label: 'Costs and rules', note: 'fixed costs entered per month and per activity, allocation rules written down', from: 3, to: 5 },
      { label: 'Readings', note: 'the month’s cascade, margin per customer and per product, break-even and lead over it', from: 4, to: 6 },
      { label: 'First reading', note: 'read with the manager, figures checked line by line before being believed', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks in the example. The accented period is the first: looking at what sales already record. The first cascade is read with the manager, then every month on a fixed date. Indicative durations of a constructed example.', alt: 'Six-week calendar: survey (accented), cost on the lines, direct costs, costs and rules, readings, first reading.' },
  },
  ar: {
    cover: { eyebrow: 'المردودية · الجزائر · 2027', title: ['هل مؤسستي مربحة؟', 'الرقم يرتفع ولا يبقى شيء'], subtitle: 'من الهامش الإجمالي إلى نتيجة الشهر: التخفيضات، التوصيل، المرتجعات، الأعباء الثابتة، والعتبة', left: { label: 'هامش إجمالي 30 %', sub: 'ما يعرضه البرنامج' }, right: { label: 'نتيجة 2 %', sub: 'ما يبقى فعلاً' } },
    cascade: { caption: 'الشكل 1 · شهر واحد، بآلاف الدنانير. 12 000 من رقم الأعمال، 3600 من الهامش الإجمالي، ثم التخفيضات والتوصيل والمرتجعات: 2400. وبعد 2150 من الأعباء الثابتة، يبقى 250. مثال مركَّب؛ نتيجة تسيير.' },
    couches: { title: 'ما يجب تسجيله لمعرفة ذلك، في خمس طبقات', layers: [
      { label: 'المبيعات', items: [{ name: 'المبيعات مع كلفتها: سعر البيع وكلفة الشراء على كل سطر', sub: 'الهامش الإجمالي، سطراً بسطر' }] },
      { label: 'المباشرة', items: [{ name: 'التكاليف المباشرة المربوطة: التخفيض على السطر، التوصيل على الطلبية، والمرتجع على إشعار الدائن', sub: 'ما لا يراه الهامش الإجمالي', accent: true }] },
      { label: 'الثابتة', items: [{ name: 'الأعباء الثابتة للشهر: الإيجارات، الفريق، المركبات، والاشتراكات، تُدخَل مرة في الشهر', sub: 'المبلغ الواجب تغطيته قبل ربح دينار واحد' }] },
      { label: 'القواعد', items: [{ name: 'قواعد التوزيع: مكتوبة، ظاهرة، وهي نفسها كل شهر', sub: 'وإلا أعاد كل اجتماع الحساب' }] },
      { label: 'القراءات', items: [{ name: 'القراءات: شلال الشهر، الهامش لكل زبون ولكل منتج، والعتبة', sub: 'ثلاث شاشات، تُقرأ في تاريخ ثابت' }] },
    ], caption: 'الشكل 2 · خمس طبقات. الطبقة المبرزة هي التكاليف المباشرة: هي موجودة من قبل في المؤسسة، على وصولات وإشعارات دائن وفواتير نقل، لكنها غير مربوطة بشيء. وربطها بالبيع هو ما ينقل من الهامش الإجمالي إلى النتيجة.', alt: 'خمس طبقات: المبيعات مع كلفتها؛ التكاليف المباشرة المربوطة (مبرزة)؛ الأعباء الثابتة للشهر؛ قواعد التوزيع؛ والقراءات.' },
    temps: { title: 'معرفة هل نحن مربحون، في ست مراحل', items: [
      { label: 'الكلفة على السطر', sub: 'سعر البيع وكلفة الشراء' },
      { label: 'التكاليف المباشرة', sub: 'تخفيض، توصيل، ومرتجع', accent: true },
      { label: 'الأعباء الثابتة', sub: 'قائمة الشهر، مؤرَّخة' },
      { label: 'الهامش حسب المحور', sub: 'زبون، منتج، ونشاط' },
      { label: 'عتبة الشهر', sub: 'الأعباء الثابتة ÷ النسبة' },
      { label: 'قراءة بتاريخ ثابت', sub: 'كل شهر، الشاشات نفسها' },
    ], caption: 'الشكل 3 · ست مراحل. المرحلة المبرزة هي الثانية: ربط التخفيضات والتوصيل والمرتجعات بالبيع. وهي الأطول، والتي تغيّر القراءة أكثر من غيرها.', alt: 'ست مراحل: الكلفة على السطر، التكاليف المباشرة (مبرزة)، الأعباء الثابتة، الهامش حسب المحور، عتبة الشهر، وقراءة بتاريخ ثابت.' },
    raisons: { title: 'ستة أسباب تجعل الرقم يرتفع والنتيجة لا', columns: ['ما يحدث', 'ما يجب قياسه'], rows: [
      { label: 'نبيع أكثر مما هامشه أضعف', cells: ['خليط المبيعات يتحول', 'الهامش لكل منتج، كل شهر'] },
      { label: 'التخفيضات تكبر', cells: ['تُمنح واحدة واحدة، ولا تُجمع أبداً', 'متوسط التخفيض لكل بائع ولكل زبون'] },
      { label: 'التوصيل يكلّف أكثر من قبل', cells: ['طلبيات صغيرة، وجولات أطول', 'كلفة التوصيل لكل طلبية'] },
      { label: 'زبون كبير خدمته مكلفة', cells: ['آجال الدفع، المرتجعات، والمطالب', 'الهامش لكل زبون بعد التكاليف المباشرة'] },
      { label: 'الأعباء الثابتة ارتفعت', cells: ['محل، مركبة، أو فريق إضافي', 'عتبة المردودية، محسوبة من جديد'] },
      { label: 'النتيجة موجودة، والمال لا', cells: ['المخزون والديون تمتصّها', 'ما بيع، ثم سُلّم، ثم حُصّل'] },
    ], caption: 'الشكل 4 · ستة أسباب شائعة. لا واحد منها يُرى في رقم الأعمال، وأغلبها لا يُرى في الهامش الإجمالي. والعمود الآخر يقول ماذا يُقاس لمعرفة أيها يعمل عندكم.', alt: 'مصفوفة من ستة أسباب: نبيع أكثر مما هامشه أضعف، التخفيضات تكبر، التوصيل يكلّف أكثر، زبون كبير خدمته مكلفة، الأعباء الثابتة ارتفعت، والنتيجة موجودة والمال لا؛ ولكل واحد، ما يحدث وما يجب قياسه.' },
    seuil: { caption: 'الشكل 5 · ستة أشهر أمام العتبة. بـ 2150 من الأعباء الثابتة و20 بالمئة من الهامش بعد التكاليف المباشرة، يلزم 10 750 من رقم الأعمال حتى لا نخسر شيئاً. ثلاثة أشهر من ستة تحتها. مثال مركَّب.' },
    calendrier: { title: 'ستة أسابيع لشلال يُقرأ كل شهر', unit: 'أسبوع', items: [
      { label: 'المعاينة', note: 'ما تسجّله المبيعات من قبل: الكلفة، التخفيض، والزبون؛ وقائمة الأعباء الثابتة', from: 0, to: 1, accent: true },
      { label: 'الكلفة على الأسطر', note: 'كلفة الشراء على كل سطر بيع، حتى في الماضي حين يُعثر عليها', from: 1, to: 3 },
      { label: 'التكاليف المباشرة', note: 'التوصيل مربوط بالطلبية، والمرتجعات وإشعارات الدائن مربوطة بالبيع الأصلي', from: 2, to: 4 },
      { label: 'الأعباء والقواعد', note: 'الأعباء الثابتة تُدخَل لكل شهر ولكل نشاط، وقواعد التوزيع مكتوبة', from: 3, to: 5 },
      { label: 'القراءات', note: 'شلال الشهر، الهامش لكل زبون ولكل منتج، العتبة والتقدم عليها', from: 4, to: 6 },
      { label: 'القراءة الأولى', note: 'تُقرأ مع المسيّر، والأرقام تُراجَع سطراً بسطر قبل أن تُصدَّق', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع في المثال. الفترة المبرزة هي الأولى: النظر في ما تسجّله المبيعات من قبل. الشلال الأول يُقرأ مع المسيّر، ثم كل شهر في تاريخ ثابت. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من ستة أسابيع: المعاينة (مبرزة)، الكلفة على الأسطر، التكاليف المباشرة، الأعباء والقواعد، القراءات، ثم القراءة الأولى.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      cascade: { svg: cascade(e.cascade, rtl), caption: t.cascade.caption, alt: e.cascade.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      temps: { svg: steps({ title: t.temps.title, steps: t.temps.items, arrows: true, rtl }), caption: t.temps.caption, alt: t.temps.alt },
      raisons: { svg: matrix({ title: t.raisons.title, columns: t.raisons.columns, rows: t.raisons.rows, rtl }), caption: t.raisons.caption, alt: t.raisons.alt },
      seuil: { svg: seuil(e.seuil, rtl), caption: t.seuil.caption, alt: e.seuil.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
