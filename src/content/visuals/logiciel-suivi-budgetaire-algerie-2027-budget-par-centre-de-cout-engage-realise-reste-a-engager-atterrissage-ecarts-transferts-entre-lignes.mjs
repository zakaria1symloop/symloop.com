import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { ligne, pont, STRINGS as SC } from './custom/budget.mjs';
export const slug = 'logiciel-suivi-budgetaire-algerie-2027-budget-par-centre-de-cout-engage-realise-reste-a-engager-atterrissage-ecarts-transferts-entre-lignes';
const T = {
  fr: {
    cover: { eyebrow: 'Suivi budgétaire · Algérie · 2027', title: ['Logiciel de suivi budgétaire :', 'savoir en août où finira l’année'], subtitle: 'Budget par centre de coût, engagé, réalisé, reste à engager, atterrissage, écarts, transferts', left: { label: 'Budget voté', sub: '240 millions de dinars' }, right: { label: 'Atterrissage', sub: '265, connu fin août' } },
    depense: { title: 'Une dépense, en six temps', items: [
      { label: 'Besoin', sub: 'une demande, rattachée à une ligne du budget' },
      { label: 'Engagement', sub: 'la commande est passée : le budget est consommé', accent: true },
      { label: 'Réception', sub: 'la livraison ou le service est constaté' },
      { label: 'Facture', sub: 'comptabilisée : l’engagé devient du réalisé' },
      { label: 'Paiement', sub: 'la trésorerie sort, à l’échéance' },
      { label: 'Clôture du mois', sub: 'écarts expliqués, atterrissage mis à jour' },
    ], caption: 'Figure 1 · Six temps. Le temps accentué est l’engagement : le budget est consommé le jour où la commande est passée, pas le jour où la facture arrive.', alt: 'Six temps : besoin, engagement (accentué), réception, facture, paiement, clôture du mois.' },
    ligne: { caption: 'Figure 2 · Une ligne de 30 millions, fin août : 73 % si l’on ne compte que le facturé, 110 % avec les commandes signées, 130 % avec les besoins prévus d’ici décembre. Montants fictifs.' },
    pont: { caption: 'Figure 3 · De 240 millions votés à 265 prévus : maintenance +9, production +8, logistique +7, commercial +1, informatique +1, administration −1. Montants fictifs.' },
    situations: { title: 'Cinq situations, et ce que le suivi change', columns: ['Avec des tableurs', 'Avec le suivi budgétaire'], rows: [
      { label: 'Le dépassement se découvre en octobre', cells: ['on ne compare que le facturé au budget', 'engagé et atterrissage visibles chaque mois'] },
      { label: '« C’est prévu au budget »', cells: ['personne ne peut le vérifier sur le moment', 'le reste à engager de la ligne, à la demande'] },
      { label: 'Un transfert entre deux lignes', cells: ['décidé au téléphone, noté nulle part', 'demandé, approuvé, tracé, les deux lignes à jour'] },
      { label: 'Quatorze fichiers pour bâtir le budget', cells: ['des versions qui se croisent, des semaines de consolidation', 'une saisie par centre, des versions, un total à jour'] },
      { label: 'La prévision de fin d’année', cells: ['faite une fois, jamais revue', 'recalculée à chaque clôture mensuelle'] },
    ], caption: 'Figure 4 · Cinq situations. Dans chacune, le tableur montre le passé comptabilisé ; le suivi montre ce qui est déjà décidé et où la ligne finira.', alt: 'Matrice de cinq situations : dépassement découvert en octobre, dépense dite prévue au budget, transfert entre lignes, quatorze fichiers pour bâtir le budget, prévision de fin d’année ; pour chacune, avec des tableurs et avec le suivi budgétaire.' },
    calendrier: { title: 'Onze semaines, en commençant par l’an dernier', unit: 'sem.', items: [
      { label: 'Budget et réalisé de l’an dernier', note: 'ligne par ligne : ce qui a dérapé, et le mois où on l’a su', from: 0, to: 2, accent: true },
      { label: 'Plan des lignes', note: 'centres de coût, natures de dépense, correspondance avec les comptes', from: 1, to: 3 },
      { label: 'Engagés', note: 'commandes et contrats rattachés à une ligne, depuis vos achats', from: 2, to: 6 },
      { label: 'Réalisé', note: 'import mensuel de la comptabilité, rapprochement avec l’engagé', from: 4, to: 7 },
      { label: 'Atterrissage et alertes', note: 'reste à faire par ligne, seuils à 80 et 100 %, écarts expliqués', from: 6, to: 9 },
      { label: 'Construction du budget suivant', note: 'saisie par centre, versions, arbitrage, vote', from: 8, to: 11 },
    ], caption: 'Figure 5 · Onze semaines dans l’exemple. La période accentuée est la première : le budget et le réalisé de l’an dernier disent où regarder. Durées indicatives d’un exemple construit.', alt: 'Calendrier de onze semaines : budget et réalisé de l’an dernier (accentué), plan des lignes, engagés, réalisé, atterrissage et alertes, construction du budget suivant.' },
    couches: { title: 'Ce qu’il y a dans le logiciel, en cinq couches', layers: [
      { label: 'Lignes', items: [{ name: 'Les lignes : centres de coût, natures de dépense, répartition par mois, une personne responsable', sub: 'le budget voté, ligne par ligne' }] },
      { label: 'Engagé', items: [{ name: 'L’engagé : commandes et contrats rattachés à une ligne dès qu’ils sont passés, pas encore facturés', sub: 'ce qui est déjà décidé', accent: true }] },
      { label: 'Réalisé', items: [{ name: 'Le réalisé : factures importées de la comptabilité, rapprochées de leur engagement', sub: 'ce qui est comptabilisé' }] },
      { label: 'Atterrissage', items: [{ name: 'L’atterrissage : reste à faire par ligne, mis à jour à chaque clôture, écarts expliqués', sub: 'où la ligne finira' }] },
      { label: 'Règles', items: [{ name: 'Les règles : seuils d’alerte, transferts entre lignes avec approbation, versions du budget, journal', sub: 'qui a décidé quoi, et quand' }] },
    ], caption: 'Figure 6 · Cinq couches. La couche accentuée est l’engagé : c’est la colonne que le tableur de l’exemple n’avait pas.', alt: 'Cinq couches : les lignes ; l’engagé (accentué) ; le réalisé ; l’atterrissage ; les règles.' },
  },
  en: {
    cover: { eyebrow: 'Budget tracking · Algeria · 2027', title: ['Budget tracking software:', 'knowing in August where the year ends'], subtitle: 'Budget by cost centre, committed, actual, left to commit, year-end forecast, variances, transfers', left: { label: 'Voted budget', sub: '240 million dinars' }, right: { label: 'Year-end forecast', sub: '265, known in August' } },
    depense: { title: 'An expense, in six steps', items: [
      { label: 'Need', sub: 'a request, tied to a line of the budget' },
      { label: 'Commitment', sub: 'the order is placed: the budget is consumed', accent: true },
      { label: 'Receipt', sub: 'the delivery or the service is confirmed' },
      { label: 'Invoice', sub: 'booked: the commitment becomes actual' },
      { label: 'Payment', sub: 'cash goes out, at the due date' },
      { label: 'Month-end close', sub: 'variances explained, forecast updated' },
    ], caption: 'Figure 1 · Six steps. The accented step is the commitment: the budget is consumed the day the order is placed, not the day the invoice arrives.', alt: 'Six steps: need, commitment (accented), receipt, invoice, payment, month-end close.' },
    ligne: { caption: 'Figure 2 · A line of 30 million at the end of August: 73% counting only what is invoiced, 110% with the orders signed, 130% with the needs planned until December. Fictitious amounts.' },
    pont: { caption: 'Figure 3 · From 240 million voted to 265 forecast: maintenance +9, production +8, logistics +7, sales +1, IT +1, administration −1. Fictitious amounts.' },
    situations: { title: 'Five situations, and what tracking changes', columns: ['With spreadsheets', 'With budget tracking'], rows: [
      { label: 'The overrun is discovered in October', cells: ['only invoiced amounts are compared with the budget', 'commitments and forecast visible every month'] },
      { label: '“It is in the budget”', cells: ['nobody can check it on the spot', 'what is left to commit on the line, on request'] },
      { label: 'A transfer between two lines', cells: ['decided on the phone, recorded nowhere', 'requested, approved, recorded, both lines up to date'] },
      { label: 'Fourteen files to build the budget', cells: ['versions that cross, weeks of consolidation', 'one entry per centre, versions, a total up to date'] },
      { label: 'The year-end forecast', cells: ['done once, never revised', 'recomputed at each month-end close'] },
    ], caption: 'Figure 4 · Five situations. In each one, the spreadsheet shows the booked past; tracking shows what is already decided and where the line will end.', alt: 'Matrix of five situations: overrun discovered in October, an expense said to be in the budget, a transfer between lines, fourteen files to build the budget, the year-end forecast; for each, with spreadsheets and with budget tracking.' },
    calendrier: { title: 'Eleven weeks, starting from last year', unit: 'wk', items: [
      { label: 'Last year’s budget and actuals', note: 'line by line: what slipped, and the month it was known', from: 0, to: 2, accent: true },
      { label: 'Plan of lines', note: 'cost centres, kinds of expense, mapping to the accounts', from: 1, to: 3 },
      { label: 'Commitments', note: 'orders and contracts tied to a line, from your purchasing', from: 2, to: 6 },
      { label: 'Actuals', note: 'monthly import from accounting, matched with commitments', from: 4, to: 7 },
      { label: 'Forecast and alerts', note: 'remaining spend per line, thresholds at 80 and 100%, variances explained', from: 6, to: 9 },
      { label: 'Building next year’s budget', note: 'entry per centre, versions, arbitration, vote', from: 8, to: 11 },
    ], caption: 'Figure 5 · Eleven weeks in the example. The accented period is the first: last year’s budget and actuals say where to look. Indicative durations of a constructed example.', alt: 'Eleven-week calendar: last year’s budget and actuals (accented), plan of lines, commitments, actuals, forecast and alerts, building next year’s budget.' },
    couches: { title: 'What is inside the software, in five layers', layers: [
      { label: 'Lines', items: [{ name: 'The lines: cost centres, kinds of expense, monthly phasing, a person in charge', sub: 'the voted budget, line by line' }] },
      { label: 'Committed', items: [{ name: 'Commitments: orders and contracts tied to a line as soon as they are placed, not yet invoiced', sub: 'what is already decided', accent: true }] },
      { label: 'Actual', items: [{ name: 'Actuals: invoices imported from accounting, matched with their commitment', sub: 'what is booked' }] },
      { label: 'Forecast', items: [{ name: 'The forecast: remaining spend per line, updated at each close, variances explained', sub: 'where the line will end' }] },
      { label: 'Rules', items: [{ name: 'The rules: alert thresholds, transfers between lines with approval, budget versions, log', sub: 'who decided what, and when' }] },
    ], caption: 'Figure 6 · Five layers. The accented layer is commitments: it is the column the spreadsheet in the example did not have.', alt: 'Five layers: the lines; commitments (accented); actuals; the forecast; the rules.' },
  },
  ar: {
    cover: { eyebrow: 'متابعة الميزانية · الجزائر · 2027', title: ['برنامج متابعة الميزانية:', 'أن نعرف في أوت أين تنتهي السنة'], subtitle: 'ميزانية حسب مركز الكلفة، الملتزَم به، المنجَز، الباقي، توقع نهاية السنة، الفوارق، والتحويلات', left: { label: 'الميزانية', sub: '240 مليون دينار' }, right: { label: 'توقع نهاية السنة', sub: '265، معروف في نهاية أوت' } },
    depense: { title: 'نفقة، في ست مراحل', items: [
      { label: 'الحاجة', sub: 'طلب، مربوط ببند من الميزانية' },
      { label: 'الالتزام', sub: 'الطلبية صدرت: الميزانية استُهلكت', accent: true },
      { label: 'الاستلام', sub: 'التسليم أو الخدمة مُعايَن' },
      { label: 'الفاتورة', sub: 'سُجّلت: الملتزَم به يصير منجَزاً' },
      { label: 'الدفع', sub: 'الخزينة تخرج، عند الأجل' },
      { label: 'إقفال الشهر', sub: 'فوارق مشروحة، وتوقع محدَّث' },
    ], caption: 'الشكل 1 · ست مراحل. المرحلة المبرزة هي الالتزام: الميزانية تُستهلَك يوم صدور الطلبية، لا يوم وصول الفاتورة.', alt: 'ست مراحل: الحاجة، الالتزام (مبرز)، الاستلام، الفاتورة، الدفع، وإقفال الشهر.' },
    ligne: { caption: 'الشكل 2 · بند من 30 مليوناً في نهاية أوت: 73 بالمئة إذا حُسب المفوتَر فقط، 110 بالمئة مع الطلبيات الموقَّعة، و130 بالمئة مع الحاجات المتوقعة حتى ديسمبر. مبالغ خيالية.' },
    pont: { caption: 'الشكل 3 · من 240 مليوناً مصادَق عليها إلى 265 متوقعة: الصيانة زائد 9، الإنتاج زائد 8، اللوجستيك زائد 7، التجاري زائد 1، الإعلام الآلي زائد 1، والإدارة ناقص 1. مبالغ خيالية.' },
    situations: { title: 'خمس حالات، وما تغيّره المتابعة', columns: ['مع الجداول', 'مع متابعة الميزانية'], rows: [
      { label: 'التجاوز يُكتشَف في أكتوبر', cells: ['لا يُقارَن بالميزانية إلا المفوتَر', 'الملتزَم به والتوقع مرئيان كل شهر'] },
      { label: '«هذا متوقع في الميزانية»', cells: ['لا أحد يستطيع التحقق في الحين', 'الباقي للالتزام في البند، عند الطلب'] },
      { label: 'تحويل بين بندين', cells: ['تقرّر بالهاتف، ولم يُسجَّل في أي مكان', 'مطلوب، مصادَق عليه، مسجَّل، والبندان محدَّثان'] },
      { label: 'أربعة عشر ملفاً لبناء الميزانية', cells: ['نسخ تتقاطع، وأسابيع من التجميع', 'إدخال لكل مركز، نسخ، ومجموع محدَّث'] },
      { label: 'توقع نهاية السنة', cells: ['يُنجَز مرة واحدة، ولا يُراجَع', 'يُعاد حسابه عند كل إقفال شهري'] },
    ], caption: 'الشكل 4 · خمس حالات. في كل واحدة، الجدول يُظهر الماضي المسجَّل؛ والمتابعة تُظهر ما تقرّر من قبل وأين سينتهي البند.', alt: 'مصفوفة من خمس حالات: تجاوز يُكتشَف في أكتوبر، نفقة يُقال إنها متوقعة في الميزانية، تحويل بين بندين، أربعة عشر ملفاً لبناء الميزانية، وتوقع نهاية السنة؛ ولكل واحدة مع الجداول ومع متابعة الميزانية.' },
    calendrier: { title: 'أحد عشر أسبوعاً، بدءاً بالسنة الماضية', unit: 'أسبوع', items: [
      { label: 'ميزانية السنة الماضية ومنجَزها', note: 'بنداً ببند: ما الذي انحرف، وفي أي شهر عُرف', from: 0, to: 2, accent: true },
      { label: 'مخطط البنود', note: 'مراكز الكلفة، طبيعة النفقات، والمطابقة مع الحسابات', from: 1, to: 3 },
      { label: 'الملتزَم به', note: 'طلبيات وعقود مربوطة ببند، انطلاقاً من مشترياتكم', from: 2, to: 6 },
      { label: 'المنجَز', note: 'استيراد شهري من المحاسبة، ومقاربة مع الملتزَم به', from: 4, to: 7 },
      { label: 'التوقع والتنبيهات', note: 'الباقي إنجازه لكل بند، عتبتان عند 80 و100 بالمئة، وفوارق مشروحة', from: 6, to: 9 },
      { label: 'بناء الميزانية القادمة', note: 'إدخال لكل مركز، نسخ، تحكيم، ومصادقة', from: 8, to: 11 },
    ], caption: 'الشكل 5 · أحد عشر أسبوعاً في المثال. الفترة المبرزة هي الأولى: ميزانية السنة الماضية ومنجَزها يقولان أين ننظر. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من أحد عشر أسبوعاً: ميزانية السنة الماضية ومنجَزها (مبرزة)، مخطط البنود، الملتزَم به، المنجَز، التوقع والتنبيهات، وبناء الميزانية القادمة.' },
    couches: { title: 'ما يوجد في البرنامج، في خمس طبقات', layers: [
      { label: 'البنود', items: [{ name: 'البنود: مراكز الكلفة، طبيعة النفقات، التوزيع الشهري، وشخص مسؤول', sub: 'الميزانية المصادَق عليها، بنداً ببند' }] },
      { label: 'الملتزَم به', items: [{ name: 'الملتزَم به: طلبيات وعقود مربوطة ببند فور صدورها، وغير مفوتَرة بعد', sub: 'ما تقرّر من قبل', accent: true }] },
      { label: 'المنجَز', items: [{ name: 'المنجَز: فواتير مستوردة من المحاسبة، مقارَبة مع التزامها', sub: 'ما سُجّل' }] },
      { label: 'التوقع', items: [{ name: 'توقع نهاية السنة: الباقي إنجازه لكل بند، محدَّث عند كل إقفال، وفوارق مشروحة', sub: 'أين سينتهي البند' }] },
      { label: 'القواعد', items: [{ name: 'القواعد: عتبات التنبيه، تحويلات بين البنود بمصادقة، نسخ الميزانية، والسجل', sub: 'من قرّر ماذا، ومتى' }] },
    ], caption: 'الشكل 6 · خمس طبقات. الطبقة المبرزة هي الملتزَم به: هو العمود الذي لم يكن في جدول المثال.', alt: 'خمس طبقات: البنود؛ الملتزَم به (مبرز)؛ المنجَز؛ التوقع؛ والقواعد.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      depense: { svg: steps({ title: t.depense.title, steps: t.depense.items, arrows: true, rtl }), caption: t.depense.caption, alt: t.depense.alt },
      ligne: { svg: ligne(e.ligne, rtl), caption: t.ligne.caption, alt: e.ligne.alt },
      pont: { svg: pont(e.pont, rtl), caption: t.pont.caption, alt: e.pont.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 11, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
    },
  };
}
