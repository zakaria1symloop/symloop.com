import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { courbe, ouvrage, STRINGS as SC } from './custom/batiment.mjs';
export const slug = 'logiciel-entreprise-batiment-btp-algerie-2027-devis-metre-suivi-de-chantier-situations-de-travaux-achats-pointage-marge-par-chantier';
const T = {
  fr: {
    cover: { eyebrow: 'Logiciel bâtiment et BTP · Algérie · 2027', title: ['Logiciel entreprise de bâtiment', 'la marge de chaque chantier'], subtitle: 'Devis par ouvrage, budget par lot, achats et pointage par chantier, situations de travaux, marge projetée', left: { label: 'La perte, à la fin', sub: 'on la découvre au dernier décompte' }, right: { label: 'La marge, chaque semaine', sub: 'par chantier et par lot' } },
    courbe: { caption: 'Figure 1 · Un chantier de vingt semaines, lu à la neuvième. Il était prévu 3,83 millions de dinars de travaux ; 3,60 millions ont été réalisés, soit 40 % du budget de coût de 9,0 millions ; 4,10 millions ont été dépensés, soit 45,6 %. Prolongée au même rythme, la dépense atteint 10,25 millions à la fin, à peu près le prix du marché, 10,2 millions : la marge prévue de 1,2 million disparaît. Les montants sont un exemple construit.' },
    situations: { title: 'Six situations réelles, et ce que le logiciel doit faire', columns: ['Ce qui se passe', 'Ce que le logiciel doit faire'], rows: [
      { label: 'Je découvre la perte à la fin du chantier', cells: ['Aucun budget à comparer aux dépenses', 'budget par lot tiré du devis, dépenses rattachées, marge projetée chaque semaine'] },
      { label: 'Mes devis sont faits de mémoire', cells: ['Des prix au mètre carré recopiés', 'bibliothèque d’ouvrages décomposés, quantités du métré, coefficient écrit'] },
      { label: 'Le ciment est commandé trois fois', cells: ['Chaque chef de chantier appelle le fournisseur', 'demande du chantier, commande, réception sur site, quantité comparée au budget'] },
      { label: 'Les situations de travaux partent en retard', cells: ['Quantités relevées sur papier, recalculées', 'quantités saisies sur le chantier, cumul et retenues calculés, situation en un jour'] },
      { label: 'Je ne sais pas qui était sur quel chantier', cells: ['Un cahier de pointage par chef d’équipe', 'pointage par chantier et par lot, depuis le téléphone, heures valorisées'] },
      { label: 'Le client conteste ce qui a été fait', cells: ['Aucune trace datée', 'journal de chantier, photos datées, quantités validées par les deux parties'] },
    ], caption: 'Figure 2 · Les deux premières lignes concernent le prix : on ne sait pas ce qu’un chantier devait coûter. Les trois suivantes concernent l’exécution : achats, heures et quantités ne sont rattachés à rien. La dernière concerne la preuve. Aucune ne se règle avec un tableur de plus.', alt: 'Matrice de six situations : perte découverte à la fin, devis faits de mémoire, ciment commandé trois fois, situations en retard, pointage inconnu par chantier, travaux contestés ; ce qui se passe et ce que le logiciel doit faire.' },
    ouvrage: { caption: 'Figure 3 · Le prix d’un mètre carré de mur, décomposé : 1 150 dinars de matériaux, 620 de main-d’œuvre, 80 de matériel, soit 1 850 de déboursé sec ; puis les frais de chantier, les frais généraux et la marge, pour 2 553 dinars, un coefficient de 1,38. La barre du bas montre le même ouvrage quand le maçon pose 6 mètres carrés par jour au lieu de 8 : la main-d’œuvre grossit, la marge tombe de 296 à 89 dinars. Les montants sont un exemple construit, pas des prix de marché.' },
    etapes: { title: 'Une situation de travaux, en six temps', items: [
      { label: 'Constater', sub: 'les quantités faites, ouvrage par ouvrage' },
      { label: 'Valoriser', sub: 'aux prix du marché signé' },
      { label: 'Cumuler', sub: 'déduire les situations précédentes', accent: true },
      { label: 'Retenir', sub: 'avances et retenues prévues au marché' },
      { label: 'Faire valider', sub: 'par le client ou son représentant' },
      { label: 'Encaisser', sub: 'facture, échéance, relance' },
    ], caption: 'Figure 4 · Le temps accentué est le cumul : une situation porte sur tout ce qui a été fait depuis le début, et l’on en déduit les situations précédentes. C’est ce calcul, refait à la main chaque mois, qui produit les oublis et les doubles facturations. Les retenues et les avances sont celles de votre marché.', alt: 'Six temps d’une situation de travaux : constater, valoriser, cumuler (accentué), retenir, faire valider, encaisser.' },
    couches: { title: 'Un logiciel de bâtiment, en cinq couches', layers: [
      { label: 'Étude de prix', items: [{ name: 'Bibliothèque d’ouvrages décomposés en matériaux, main-d’œuvre et matériel, métré, coefficient, devis', sub: 'le prix se construit à partir de ce que l’ouvrage consomme' }] },
      { label: 'Budget de chantier', items: [{ name: 'Le devis signé devient un budget par lot, avec ses quantités, ses heures, ses matériaux et sa sous-traitance', sub: 'c’est la référence à laquelle tout le reste est comparé', accent: true }] },
      { label: 'Exécution', items: [{ name: 'Achats, livraisons, pointage, matériel et sous-traitants rattachés au chantier et au lot, le jour même', sub: 'saisis sur le chantier, depuis le téléphone, même sans réseau' }] },
      { label: 'Situations', items: [{ name: 'Quantités réalisées, cumul, retenues et avances prévues au marché, facture, échéance, encaissement', sub: 'ce qui est fait est facturé dans le mois, pas trois mois après' }] },
      { label: 'Pilotage', items: [{ name: 'Avancement contre dépense par chantier et par lot, marge projetée, trésorerie des semaines à venir', sub: 'la dérive se voit quand il reste du temps pour la corriger' }] },
    ], caption: 'Figure 5 · La couche accentuée est le budget de chantier : le devis signé, transformé en quantités, en heures et en matériaux par lot. L’étude de prix, au-dessus, le fabrique ; l’exécution et les situations, en dessous, s’y comparent ; le pilotage lit l’écart.', alt: 'Cinq couches : étude de prix ; budget de chantier (accentuée) ; exécution ; situations ; pilotage.' },
    calendrier: { title: 'Un logiciel de bâtiment en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Ouvrages et chantiers', note: 'bibliothèque des ouvrages les plus fréquents avec leurs décompositions, liste des chantiers en cours, sans rien installer', from: 0, to: 1 },
      { label: 'Budgets', note: 'chaque chantier ouvert reçoit son budget par lot, reconstitué depuis le devis signé, et son avancement à ce jour', from: 1, to: 2, accent: true },
      { label: 'Achats et pointage', note: 'demandes, commandes et réceptions par chantier, pointage par lot sur téléphone, deux chantiers pilotes', from: 2, to: 3 },
      { label: 'Situations', note: 'quantités saisies sur site, première situation de travaux sortie du logiciel, suivi des encaissements', from: 3, to: 4 },
      { label: 'Tableau du gérant', note: 'avancement contre dépense, marge projetée par chantier, trésorerie des huit semaines à venir', from: 4, to: 5 },
    ], caption: 'Figure 6 · Cinq semaines dans l’exemple, la première sans rien installer. La semaine accentuée est celle des budgets : chaque chantier en cours reçoit le sien, et c’est le moment où l’on apprend, pour chacun, s’il gagne ou s’il perd.', alt: 'Calendrier de cinq semaines : ouvrages et chantiers, budgets (accentué), achats et pointage, situations, tableau du gérant.' },
  },
  en: {
    cover: { eyebrow: 'Construction software · Algeria · 2027', title: ['Construction company software', 'the margin of every site'], subtitle: 'Quotation by item, budget by trade, purchases and timekeeping per site, progress claims, projected margin', left: { label: 'The loss, at the end', sub: 'found at the final account' }, right: { label: 'The margin, every week', sub: 'per site and per trade' } },
    courbe: { caption: 'Figure 1 · A twenty-week site, read at week nine. 3.83 million dinars of work was planned; 3.60 million has been done, 40 % of the 9.0 million cost budget; 4.10 million has been spent, 45.6 %. Extended at the same rate, spending reaches 10.25 million at the end, about the contract price of 10.2 million: the planned margin of 1.2 million disappears. The amounts are a constructed example.' },
    situations: { title: 'Six real situations, and what the software must do', columns: ['What happens', 'What the software must do'], rows: [
      { label: 'I find the loss at the end of the site', cells: ['No budget to compare spending with', 'budget by trade taken from the quotation, spending booked, weekly margin'] },
      { label: 'My quotations are made from memory', cells: ['Prices per square metre copied over', 'library of items broken down, measured quantities, a written coefficient'] },
      { label: 'Cement is ordered three times', cells: ['Each site manager phones the supplier', 'site request, order, receipt on site, quantity compared with the budget'] },
      { label: 'Progress claims go out late', cells: ['Quantities noted on paper, recalculated', 'quantities entered on site, running total and retentions calculated'] },
      { label: 'I do not know who was on which site', cells: ['One timekeeping notebook per foreman', 'timekeeping per site and per trade, from the phone, hours valued'] },
      { label: 'The client disputes what was done', cells: ['No dated record', 'site diary, dated photos, quantities approved by both parties'] },
    ], caption: 'Figure 2 · The first two rows concern price: nobody knows what a site was supposed to cost. The next three concern execution: purchases, hours and quantities are booked to nothing. The last concerns proof. None is solved with one more spreadsheet.', alt: 'Matrix of six situations: loss found at the end, quotations made from memory, cement ordered three times, late progress claims, unknown timekeeping per site, disputed work; what happens and what the software must do.' },
    ouvrage: { caption: 'Figure 3 · The price of one square metre of wall, broken down: 1,150 dinars of materials, 620 of labour, 80 of equipment, that is 1,850 of direct cost; then site costs, overheads and margin, for 2,553 dinars, a coefficient of 1.38. The lower bar shows the same item when the mason lays 6 square metres a day instead of 8: labour grows, the margin falls from 296 to 89 dinars. The amounts are a constructed example, not market prices.' },
    etapes: { title: 'A progress claim, in six steps', items: [
      { label: 'Record', sub: 'the quantities done, item by item' },
      { label: 'Value', sub: 'at the prices of the signed contract' },
      { label: 'Accumulate', sub: 'deduct the previous claims', accent: true },
      { label: 'Withhold', sub: 'advances and retentions set by the contract' },
      { label: 'Get approval', sub: 'from the client or their representative' },
      { label: 'Collect', sub: 'invoice, due date, reminder' },
    ], caption: 'Figure 4 · The accented step is the running total: a claim covers everything done since the start, and the previous claims are deducted from it. That calculation, redone by hand every month, is what produces omissions and double billing. Retentions and advances are those of your contract.', alt: 'Six steps of a progress claim: record, value, accumulate (accented), withhold, get approval, collect.' },
    couches: { title: 'Construction software, in five layers', layers: [
      { label: 'Pricing', items: [{ name: 'Library of items broken down into materials, labour and equipment, measurement, coefficient, quotation', sub: 'the price is built from what the item consumes' }] },
      { label: 'Site budget', items: [{ name: 'The signed quotation becomes a budget by trade, with its quantities, hours, materials and subcontracting', sub: 'it is the reference everything else is compared with', accent: true }] },
      { label: 'Execution', items: [{ name: 'Purchases, deliveries, timekeeping, equipment and subcontractors booked to the site and trade, the same day', sub: 'entered on site, from the phone, even with no network' }] },
      { label: 'Claims', items: [{ name: 'Quantities done, running total, retentions and advances set by the contract, invoice, due date, collection', sub: 'what is done is billed within the month, not three months later' }] },
      { label: 'Steering', items: [{ name: 'Progress against spending per site and per trade, projected margin, cash for the coming weeks', sub: 'the drift shows while there is still time to correct it' }] },
    ], caption: 'Figure 5 · The accented layer is the site budget: the signed quotation, turned into quantities, hours and materials by trade. Pricing, above, produces it; execution and claims, below, are compared with it; steering reads the gap.', alt: 'Five layers: pricing; site budget (accented); execution; claims; steering.' },
    calendrier: { title: 'Construction software in 2027, in weeks', unit: 'wk', items: [
      { label: 'Items and sites', note: 'library of the most frequent items with their breakdowns, list of sites in progress, nothing installed yet', from: 0, to: 1 },
      { label: 'Budgets', note: 'each open site gets its budget by trade, rebuilt from the signed quotation, and its progress to date', from: 1, to: 2, accent: true },
      { label: 'Purchases and timekeeping', note: 'requests, orders and receipts per site, timekeeping by trade on the phone, two pilot sites', from: 2, to: 3 },
      { label: 'Claims', note: 'quantities entered on site, first progress claim produced by the software, collections followed', from: 3, to: 4 },
      { label: 'Manager’s board', note: 'progress against spending, projected margin per site, cash for the next eight weeks', from: 4, to: 5 },
    ], caption: 'Figure 6 · Five weeks in the example, the first with nothing installed. The accented week is budgets: each site in progress gets its own, and that is when you learn, for each one, whether it is making or losing money.', alt: 'Five-week calendar: items and sites, budgets (accented), purchases and timekeeping, claims, manager’s board.' },
  },
  ar: {
    cover: { eyebrow: 'برنامج مؤسسات البناء · الجزائر · 2027', title: ['برنامج مؤسسة البناء', 'هامش كل ورشة'], subtitle: 'عرض سعر بالأعمال، ميزانية بالحصص، مشتريات وتسجيل حضور لكل ورشة، وضعيات الأشغال، وهامش متوقَّع', left: { label: 'الخسارة، في النهاية', sub: 'تُكتشف عند الكشف الأخير' }, right: { label: 'الهامش، كل أسبوع', sub: 'لكل ورشة ولكل حصة' } },
    courbe: { caption: 'الشكل 1 · ورشة من عشرين أسبوعاً، مقروءة في التاسع. كان مبرمجاً 3,83 مليون دينار من الأشغال؛ أُنجز 3,60 مليون، أي 40 بالمئة من ميزانية التكلفة البالغة 9,0 مليون؛ وصُرف 4,10 مليون، أي 45,6 بالمئة. وإذا استمر الصرف بالوتيرة نفسها يبلغ 10,25 مليون في النهاية، أي سعر الصفقة تقريباً، 10,2 مليون: الهامش المبرمج بـ 1,2 مليون يختفي. المبالغ مثال مركَّب.' },
    situations: { title: 'ست حالات واقعية، وما يجب أن يفعله البرنامج', columns: ['ما يحدث', 'ما يجب أن يفعله البرنامج'], rows: [
      { label: 'أكتشف الخسارة عند نهاية الورشة', cells: ['لا ميزانية تُقارَن بها المصاريف', 'ميزانية بالحصص من عرض السعر، مصاريف مربوطة بها، وهامش كل أسبوع'] },
      { label: 'عروض أسعاري تُعدّ من الذاكرة', cells: ['أسعار المتر المربع تُنسخ', 'مكتبة أعمال مفصَّلة، كميات محسوبة، ومعامل مكتوب'] },
      { label: 'الإسمنت يُطلب ثلاث مرات', cells: ['كل رئيس ورشة يتصل بالمورِّد', 'طلب من الورشة، طلبية، استلام في الموقع، وكمية تُقارَن بالميزانية'] },
      { label: 'وضعيات الأشغال تخرج متأخرة', cells: ['كميات تُدوَّن على الورق ثم يُعاد حسابها', 'كميات تُدخَل في الورشة، والمجموع والاقتطاعات تُحسب آلياً'] },
      { label: 'لا أعرف من كان في أي ورشة', cells: ['دفتر حضور لكل رئيس فرقة', 'تسجيل الحضور لكل ورشة وحصة، من الهاتف، وساعات مقوَّمة'] },
      { label: 'الزبون ينازع في ما أُنجز', cells: ['لا أثر مؤرَّخ', 'يومية الورشة، صور مؤرَّخة، وكميات يصادق عليها الطرفان'] },
    ], caption: 'الشكل 2 · السطران الأولان يخصان السعر: لا يُعرف كم كان يجب أن تكلّف الورشة. والثلاثة التالية تخص التنفيذ: المشتريات والساعات والكميات غير مربوطة بشيء. والأخير يخص الإثبات. لا يُحَل أي منها بجدول إضافي.', alt: 'مصفوفة ست حالات: خسارة تُكتشف في النهاية، عروض أسعار من الذاكرة، إسمنت يُطلب ثلاث مرات، وضعيات متأخرة، حضور مجهول حسب الورشة، أشغال متنازَع عليها؛ ما يحدث وما يجب أن يفعله البرنامج.' },
    ouvrage: { caption: 'الشكل 3 · سعر متر مربع من الجدار، مفصَّلاً: 1 150 ديناراً من المواد، 620 من اليد العاملة، 80 من العتاد، أي 1 850 من التكلفة المباشرة؛ ثم مصاريف الورشة والمصاريف العامة والهامش، ليبلغ 2 553 ديناراً، بمعامل 1,38. والشريط السفلي يبيّن العمل نفسه حين يضع البنّاء 6 أمتار مربعة في اليوم بدل 8: اليد العاملة تكبر، والهامش ينزل من 296 إلى 89 ديناراً. المبالغ مثال مركَّب، وليست أسعار السوق.' },
    etapes: { title: 'وضعية الأشغال، في ست مراحل', items: [
      { label: 'المعاينة', sub: 'الكميات المنجَزة، عملاً عملاً' },
      { label: 'التقويم', sub: 'بأسعار الصفقة الموقَّعة' },
      { label: 'الجمع', sub: 'خصم الوضعيات السابقة', accent: true },
      { label: 'الاقتطاع', sub: 'التسبيقات والاقتطاعات المنصوص عليها' },
      { label: 'المصادقة', sub: 'من الزبون أو ممثله' },
      { label: 'التحصيل', sub: 'فاتورة، أجل، متابعة' },
    ], caption: 'الشكل 4 · المرحلة المبرزة هي الجمع: الوضعية تشمل كل ما أُنجز منذ البداية، وتُخصم منها الوضعيات السابقة. وهذا الحساب، حين يُعاد باليد كل شهر، هو الذي ينتج النسيان والفوترة المزدوجة. والاقتطاعات والتسبيقات هي ما تنص عليه صفقتكم.', alt: 'ست مراحل لوضعية الأشغال: المعاينة، التقويم، الجمع (مبرز)، الاقتطاع، المصادقة، التحصيل.' },
    couches: { title: 'برنامج البناء، في خمس طبقات', layers: [
      { label: 'دراسة الأسعار', items: [{ name: 'مكتبة أعمال مفصَّلة إلى مواد ويد عاملة وعتاد، حساب الكميات، المعامل، وعرض السعر', sub: 'السعر يُبنى مما يستهلكه العمل' }] },
      { label: 'ميزانية الورشة', items: [{ name: 'عرض السعر الموقَّع يصير ميزانية بالحصص، بكمياتها وساعاتها وموادها ومناولتها', sub: 'هي المرجع الذي يُقارَن به كل الباقي', accent: true }] },
      { label: 'التنفيذ', items: [{ name: 'المشتريات، التسليمات، الحضور، العتاد والمناولون مربوطة بالورشة والحصة، في اليوم نفسه', sub: 'تُدخَل في الورشة، من الهاتف، حتى دون شبكة' }] },
      { label: 'الوضعيات', items: [{ name: 'الكميات المنجَزة، المجموع، الاقتطاعات والتسبيقات المنصوص عليها، الفاتورة، الأجل، والتحصيل', sub: 'ما أُنجز يُفوتَر في الشهر، لا بعد ثلاثة أشهر' }] },
      { label: 'القيادة', items: [{ name: 'التقدّم مقابل الصرف لكل ورشة وحصة، هامش متوقَّع، وخزينة الأسابيع القادمة', sub: 'الانحراف يُرى حين يبقى وقت لتصحيحه' }] },
    ], caption: 'الشكل 5 · الطبقة المبرزة هي ميزانية الورشة: عرض السعر الموقَّع، محوَّلاً إلى كميات وساعات ومواد حسب الحصة. دراسة الأسعار، فوقها، تصنعها؛ والتنفيذ والوضعيات، تحتها، تُقارَن بها؛ والقيادة تقرأ الفرق.', alt: 'خمس طبقات: دراسة الأسعار؛ ميزانية الورشة (مبرزة)؛ التنفيذ؛ الوضعيات؛ القيادة.' },
    calendrier: { title: 'برنامج البناء سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'الأعمال والورشات', note: 'مكتبة الأعمال الأكثر تكراراً بتفصيلها، وقائمة الورشات الجارية، دون تنصيب شيء', from: 0, to: 1 },
      { label: 'الميزانيات', note: 'كل ورشة مفتوحة تتلقى ميزانيتها بالحصص، مُعادة من عرض السعر الموقَّع، وتقدّمها إلى اليوم', from: 1, to: 2, accent: true },
      { label: 'المشتريات والحضور', note: 'طلبات وطلبيات واستلامات لكل ورشة، حضور حسب الحصة على الهاتف، في ورشتين تجريبيتين', from: 2, to: 3 },
      { label: 'الوضعيات', note: 'كميات تُدخَل في الموقع، أول وضعية أشغال تخرج من البرنامج، ومتابعة التحصيلات', from: 3, to: 4 },
      { label: 'لوحة المسيّر', note: 'التقدّم مقابل الصرف، الهامش المتوقَّع لكل ورشة، وخزينة الأسابيع الثمانية القادمة', from: 4, to: 5 },
    ], caption: 'الشكل 6 · خمسة أسابيع في المثال، الأول دون تنصيب شيء. الأسبوع المبرز هو أسبوع الميزانيات: كل ورشة جارية تتلقى ميزانيتها، وعندها يُعرف، لكل واحدة، إن كانت تربح أو تخسر.', alt: 'تقويم خمسة أسابيع: الأعمال والورشات، الميزانيات (مبرز)، المشتريات والحضور، الوضعيات، لوحة المسيّر.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      courbe: { svg: courbe(e.courbe, rtl), caption: t.courbe.caption, alt: e.courbe.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      ouvrage: { svg: ouvrage(e.ouvrage, rtl), caption: t.ouvrage.caption, alt: e.ouvrage.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 5, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
