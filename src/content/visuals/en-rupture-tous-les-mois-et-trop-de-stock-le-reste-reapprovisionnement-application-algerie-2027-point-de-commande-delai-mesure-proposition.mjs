import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { rop, proposal, STRINGS as RP } from './custom/replenish.mjs';
export const slug = 'en-rupture-tous-les-mois-et-trop-de-stock-le-reste-reapprovisionnement-application-algerie-2027-point-de-commande-delai-mesure-proposition';
const T = {
  fr: {
    cover: { eyebrow: 'Réapprovisionnement · Achats · Fournisseurs · 2027', title: ['« En rupture', 'tous les mois,', 'et trop de stock le reste »'], subtitle: 'Ce qu’on construit pour commander au bon moment : consommation lue, délai mesuré, point de commande, proposition par fournisseur, décision', left: { label: 'Le gérant commande de tête', sub: 'et le camion arrive trop tard ou trop plein' }, right: { label: 'Une proposition chaque nuit', sub: 'et une décision ligne par ligne' } },
    point: { caption: 'Figure 1 · Un produit à un dépôt : huit semaines de sorties lues dans le journal des mouvements donnent une consommation moyenne ; le délai fournisseur est la médiane des dernières réceptions, pas sa promesse ; le point de commande est la consommation pendant ce délai plus un stock de sécurité fixé par le gérant. La projection du disponible croise ce point le 16 novembre : c’est la date de commande, et la quantité couvre quatre semaines au-delà, arrondie au carton. Produit, ventes et seuils sont un exemple construit.' },
    cycle: { title: 'Le cycle de réapprovisionnement, en six temps', items: [
      { label: 'Lire la consommation', sub: 'sorties du journal par produit et dépôt ; semaines récentes pondérées' },
      { label: 'Mesurer le délai', sub: 'commande → réception, médiane par fournisseur ; pas la promesse' },
      { label: 'Calculer le point', sub: 'consommation pendant le délai + sécurité ; comparé au disponible', accent: true },
      { label: 'Proposer', sub: 'chaque nuit, par fournisseur ; quantité, arrondi, minimum, budget' },
      { label: 'Décider et envoyer', sub: 'ligne par ligne ; écart noté ; bon de commande numéroté' },
      { label: 'Recevoir et apprendre', sub: 'réception attendue, scan, écart ; le délai réel nourrit le suivant' },
    ], caption: 'Figure 2 · L’étape accentuée est le calcul : il compare le disponible, stock moins réservé plus en commande, au point de commande, chaque nuit, pour chaque produit et chaque dépôt. Les deux premières étapes lisent des données qui existent déjà, le journal des mouvements et les réceptions ; la dernière referme la boucle : le délai réel de cette réception corrige le délai de la prochaine proposition.', alt: 'Six temps : lire la consommation, mesurer le délai, calculer le point (accentué), proposer, décider et envoyer, recevoir et apprendre.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Rupture du produit qui tourne le plus', cells: ['On s’en aperçoit au comptoir ; dix jours sans vente', 'point de commande sur le disponible ; proposition avant la rupture'] },
      { label: 'Trop de stock du produit qui tourne peu', cells: ['Commandé « comme d’habitude » ; six mois de couverture', 'quantité par couverture écrite ; couverture affichée par ligne'] },
      { label: 'Le fournisseur promet 5 jours, livre en 12', cells: ['Point de commande calculé sur 5 ; rupture chaque fois', 'délai mesuré sur les réceptions ; médiane par fournisseur'] },
      { label: 'Le minimum de commande n’est pas atteint', cells: ['Commande refusée ; on rajoute n’importe quoi', 'minimum sur la fiche fournisseur ; lignes proposées pour l’atteindre'] },
      { label: 'Promotion la semaine prochaine', cells: ['Consommation moyenne fausse ; rupture pendant la promo', 'événement saisi par le gérant ; consommation prévue ajustée'] },
      { label: 'Personne ne sait ce qui est en commande', cells: ['Commandé deux fois ; ou pas du tout', 'en commande compte dans le disponible ; réception attendue visible'] },
    ], caption: 'Figure 3 · Les trois premières lignes se règlent par le point de commande sur le disponible, la quantité par couverture et le délai mesuré ; les trois suivantes par la fiche fournisseur, les événements saisis et l’en-commande visible. Aucune ne se règle par un gérant qui a plus de mémoire.', alt: 'Matrice de six situations : rupture du produit phare, surstock, délai promis et délai réel, minimum non atteint, promotion, en-commande inconnu ; ce qui se passe et ce que l’application fait.' },
    proposition: { caption: 'Figure 4 · La proposition du lundi pour un fournisseur : six lignes avec disponible, point, quantité proposée, arrondi au conditionnement, couverture après livraison, montant et décision du gérant. Une ligne est réduite parce qu’une promotion se termine, une est retirée parce que le produit est en fin de vie, et chaque écart est noté avec sa raison. Le minimum du fournisseur, le total, la livraison attendue et le budget sont vérifiés avant l’envoi. Quantités et montants sont un exemple construit.' },
    couches: { title: 'Le réapprovisionnement, en cinq couches', layers: [
      { label: 'Données', items: [{ name: 'Journal des mouvements, réservations, commandes ouvertes, réceptions datées ; fiche fournisseur : délai, minimum, conditionnement', sub: 'rien n’est saisi deux fois : tout existe déjà' }] },
      { label: 'Consommation et délai', items: [{ name: 'Sorties par produit et dépôt sur une fenêtre écrite, récentes pondérées ; délai médian par fournisseur sur les réceptions', sub: 'mesuré, pas promis ; recalculé chaque nuit', accent: true }] },
      { label: 'Règles', items: [{ name: 'Stock de sécurité, période de couverture, événements à venir, budget ; par catégorie ou par produit, écrits par le gérant', sub: 'une règle est un paramètre, pas une ligne de code' }] },
      { label: 'Proposition', items: [{ name: 'Point de commande comparé au disponible ; quantité, arrondi, minimum ; groupée par fournisseur ; décision ligne par ligne', sub: 'le gérant décide, l’application calcule' }] },
      { label: 'Commande et boucle', items: [{ name: 'Bon de commande envoyé, réception attendue, scan, écart ; délai réel réinjecté ; ruptures et surstocks mesurés', sub: 'chaque réception rend la prochaine proposition plus juste' }] },
    ], caption: 'Figure 5 · La couche accentuée est celle qui remplace la mémoire du gérant par des mesures : la consommation lue dans le journal et le délai mesuré sur les réceptions. Les règles, sécurité, couverture, budget, restent les siennes et se changent sans développement ; la proposition et la commande sont les mêmes documents que ceux du guide sur le stock, avec une date de plus.', alt: 'Cinq couches : données, consommation et délai (accentuée), règles, proposition, commande et boucle.' },
    calendrier: { title: 'Automatiser le réapprovisionnement en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles', note: 'catégories suivies, stock de sécurité, périodes de couverture, budget, fiches fournisseurs ; avec le gérant et l’acheteur', from: 0, to: 1 },
      { label: 'Consommation et délai', note: 'lecture du journal, fenêtre et pondération, délai médian par fournisseur depuis les réceptions passées', from: 1, to: 2 },
      { label: 'Proposition', note: 'point de commande, disponible, quantité, arrondi, minimum, groupement par fournisseur, écran de décision', from: 2, to: 4, accent: true },
      { label: 'Commande et réception', note: 'bon de commande numéroté et envoyé, réception attendue, scan, écarts, délai réel réinjecté', from: 4, to: 5 },
      { label: 'Événements', note: 'promotions, fermetures, saison ; consommation prévue ajustée ; fin de vie exclue', from: 5, to: 6 },
      { label: 'Mesure', note: 'ruptures, jours de couverture, surstock, écarts de délai par fournisseur, revue du lundi', from: 6, to: 7 },
    ], caption: 'Figure 6 · Sept semaines, la première sans code : les stocks de sécurité, les couvertures et le budget sont des décisions du gérant et de l’acheteur. Les deux semaines accentuées sont la proposition, parce que c’est l’écran que le gérant ouvre chaque lundi ; les données qu’elle lit existent déjà dans le journal des mouvements et les réceptions du guide sur le stock et du guide sur les lots.', alt: 'Frise de sept semaines : règles, consommation et délai, proposition (accentué, deux semaines), commande et réception, événements, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Replenishment · Purchasing · Suppliers · 2027', title: ['“Out of stock', 'every month,', 'too much the rest”'], subtitle: 'What gets built to order at the right time: consumption read, lead time measured, reorder point, proposal per supplier, decision', left: { label: 'The manager orders from memory', sub: 'and the truck comes too late or too full' }, right: { label: 'A proposal every night', sub: 'and a decision line by line' } },
    point: { caption: 'Figure 1 · One product at one depot: eight weeks of issues read from the movement ledger give an average consumption; the supplier lead time is the median of the last receptions, not its promise; the reorder point is consumption during that lead time plus a safety stock set by the manager. The projection of available stock crosses that point on 16 November: that is the order date, and the quantity covers four more weeks, rounded to the case. Product, sales and thresholds are a constructed example.' },
    cycle: { title: 'The replenishment cycle, in six beats', items: [
      { label: 'Read consumption', sub: 'ledger issues per product and depot; recent weeks weighted' },
      { label: 'Measure lead time', sub: 'order → reception, median per supplier; not the promise' },
      { label: 'Compute the point', sub: 'consumption during lead time + safety; compared with available', accent: true },
      { label: 'Propose', sub: 'every night, per supplier; quantity, rounding, minimum, budget' },
      { label: 'Decide and send', sub: 'line by line; deviation recorded; numbered purchase order' },
      { label: 'Receive and learn', sub: 'expected reception, scan, gap; the real lead time feeds the next' },
    ], caption: 'Figure 2 · The accented beat is the computation: it compares available, stock minus reserved plus on order, with the reorder point, every night, for every product and depot. The first two beats read data that already exist, the movement ledger and receptions; the last closes the loop: this reception’s real lead time corrects the next proposal’s lead time.', alt: 'Six beats: read consumption, measure lead time, compute the point (accented), propose, decide and send, receive and learn.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'Out of stock on the fastest mover', cells: ['Noticed at the counter; ten days without sales', 'reorder point on available; proposal before the stock-out'] },
      { label: 'Too much stock on the slow mover', cells: ['Ordered “as usual”; six months of cover', 'quantity by written cover; cover shown per line'] },
      { label: 'The supplier promises 5 days, delivers in 12', cells: ['Reorder point computed on 5; stock-out every time', 'lead time measured on receptions; median per supplier'] },
      { label: 'Minimum order not reached', cells: ['Order refused; anything is added', 'minimum on the supplier record; lines proposed to reach it'] },
      { label: 'Promotion next week', cells: ['Average consumption wrong; stock-out during the promo', 'event entered by the manager; expected consumption adjusted'] },
      { label: 'Nobody knows what is on order', cells: ['Ordered twice; or not at all', 'on order counts in available; expected reception visible'] },
    ], caption: 'Figure 3 · The first three rows are settled by the reorder point on available, the quantity by cover and the measured lead time; the next three by the supplier record, entered events and visible on-order. None is settled by a manager with a better memory.', alt: 'Matrix of six situations: stock-out on the best seller, overstock, promised vs real lead time, minimum not reached, promotion, unknown on-order; what happens and what the application does.' },
    proposition: { caption: 'Figure 4 · Monday’s proposal for one supplier: six lines with available, point, proposed quantity, packaging rounding, cover after delivery, amount and the manager’s decision. One line is cut because a promotion ends, one is removed because the product is end of life, and every deviation is recorded with its reason. The supplier’s minimum, the total, the expected delivery and the budget are checked before sending. Quantities and amounts are a constructed example.' },
    couches: { title: 'Replenishment, in five layers', layers: [
      { label: 'Data', items: [{ name: 'Movement ledger, reservations, open orders, dated receptions; supplier record: lead time, minimum, packaging', sub: 'nothing is entered twice: everything already exists' }] },
      { label: 'Consumption and lead time', items: [{ name: 'Issues per product and depot over a written window, recent ones weighted; median lead time per supplier from receptions', sub: 'measured, not promised; recomputed every night', accent: true }] },
      { label: 'Rules', items: [{ name: 'Safety stock, cover period, upcoming events, budget; per category or per product, written by the manager', sub: 'a rule is a parameter, not a line of code' }] },
      { label: 'Proposal', items: [{ name: 'Reorder point compared with available; quantity, rounding, minimum; grouped by supplier; decision line by line', sub: 'the manager decides, the application computes' }] },
      { label: 'Order and loop', items: [{ name: 'Purchase order sent, expected reception, scan, gap; real lead time fed back; stock-outs and overstock measured', sub: 'every reception makes the next proposal fairer' }] },
    ], caption: 'Figure 5 · The accented layer is what replaces the manager’s memory with measures: consumption read from the ledger and lead time measured on receptions. The rules, safety, cover, budget, remain theirs and change without development; the proposal and the order are the same documents as in the stock guide, with one more date.', alt: 'Five layers: data, consumption and lead time (accented), rules, proposal, order and loop.' },
    calendrier: { title: 'Automating replenishment in 2027, in weeks', unit: 'wk', items: [
      { label: 'Rules', note: 'tracked categories, safety stock, cover periods, budget, supplier records; with the manager and the buyer', from: 0, to: 1 },
      { label: 'Consumption and lead time', note: 'ledger reading, window and weighting, median lead time per supplier from past receptions', from: 1, to: 2 },
      { label: 'Proposal', note: 'reorder point, available, quantity, rounding, minimum, grouping by supplier, decision screen', from: 2, to: 4, accent: true },
      { label: 'Order and reception', note: 'numbered purchase order sent, expected reception, scan, gaps, real lead time fed back', from: 4, to: 5 },
      { label: 'Events', note: 'promotions, closures, season; expected consumption adjusted; end of life excluded', from: 5, to: 6 },
      { label: 'Measurement', note: 'stock-outs, days of cover, overstock, lead-time gaps per supplier, Monday review', from: 6, to: 7 },
    ], caption: 'Figure 6 · Seven weeks, the first without code: safety stocks, covers and the budget are decisions of the manager and the buyer. The two accented weeks are the proposal, because it is the screen the manager opens every Monday; the data it reads already exist in the movement ledger and receptions of the stock guide and the lots guide.', alt: 'Seven-week timeline: rules, consumption and lead time, proposal (accented, two weeks), order and reception, events, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'إعادة التموين · مشتريات · موردون · 2027', title: ['«نفاد', 'كل شهر،', 'وفائض بقية الوقت»'], subtitle: 'ما يُبنى للطلب في الوقت الصحيح: استهلاك مقروء، مهلة مقيسة، نقطة إعادة طلب، اقتراح لكل مورد، قرار', left: { label: 'المسيّر يطلب من الذاكرة', sub: 'والشاحنة تصل متأخرة أو ممتلئة أكثر من اللازم' }, right: { label: 'اقتراح كل ليلة', sub: 'وقرار سطراً سطراً' } },
    point: { caption: 'الشكل 1 · منتج واحد في مستودع واحد: ثمانية أسابيع من الخروج تُقرأ من سجل الحركات تعطي استهلاكاً متوسطاً؛ ومهلة المورد وسيط آخر الاستلامات لا وعده؛ ونقطة إعادة الطلب الاستهلاك خلال تلك المهلة زائد مخزون أمان يحدده المسيّر. ويتقاطع إسقاط المتاح مع تلك النقطة في 16 نوفمبر: ذلك تاريخ الطلب، والكمية تغطي أربعة أسابيع إضافية مقرَّبة إلى الكرتون. والمنتج والمبيعات والعتبات مثال مبني.' },
    cycle: { title: 'دورة إعادة التموين، في ستة أوقات', items: [
      { label: 'قراءة الاستهلاك', sub: 'خروج السجل لكل منتج ومستودع؛ الأسابيع الأخيرة مرجَّحة' },
      { label: 'قياس المهلة', sub: 'طلب ← استلام، وسيط لكل مورد؛ لا الوعد' },
      { label: 'حساب النقطة', sub: 'الاستهلاك خلال المهلة + الأمان؛ مقارَن بالمتاح', accent: true },
      { label: 'الاقتراح', sub: 'كل ليلة، لكل مورد؛ كمية، تقريب، حد أدنى، ميزانية' },
      { label: 'القرار والإرسال', sub: 'سطراً سطراً؛ انحراف مسجَّل؛ أمر شراء مرقَّم' },
      { label: 'الاستلام والتعلم', sub: 'استلام متوقع، مسح، فارق؛ المهلة الحقيقية تغذي التالي' },
    ], caption: 'الشكل 2 · الوقت المميز هو الحساب: يقارن المتاح، المخزون ناقص المحجوز زائد المطلوب، بنقطة إعادة الطلب، كل ليلة، لكل منتج ومستودع. والوقتان الأولان يقرآن بيانات موجودة أصلاً، سجل الحركات والاستلامات؛ والأخير يغلق الحلقة: المهلة الحقيقية لهذا الاستلام تصحّح مهلة الاقتراح التالي.', alt: 'ستة أوقات: قراءة الاستهلاك، قياس المهلة، حساب النقطة (مميز)، الاقتراح، القرار والإرسال، الاستلام والتعلم.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'نفاد المنتج الأكثر دوراناً', cells: ['يُلاحَظ عند الشباك؛ عشرة أيام بلا بيع', 'نقطة إعادة طلب على المتاح؛ اقتراح قبل النفاد'] },
      { label: 'فائض المنتج قليل الدوران', cells: ['طُلب «كالعادة»؛ ستة أشهر تغطية', 'كمية بتغطية مكتوبة؛ التغطية معروضة لكل سطر'] },
      { label: 'المورد يعد بـ 5 أيام ويسلّم في 12', cells: ['نقطة محسوبة على 5؛ نفاد كل مرة', 'مهلة مقيسة على الاستلامات؛ وسيط لكل مورد'] },
      { label: 'الحد الأدنى للطلب لم يُبلغ', cells: ['طلبية مرفوضة؛ يُضاف أي شيء', 'الحد الأدنى على بطاقة المورد؛ أسطر مقترحة لبلوغه'] },
      { label: 'ترويج الأسبوع المقبل', cells: ['استهلاك متوسط خاطئ؛ نفاد أثناء الترويج', 'حدث يدخله المسيّر؛ استهلاك متوقع معدَّل'] },
      { label: 'لا أحد يعرف ما هو مطلوب', cells: ['طُلب مرتين؛ أو لم يُطلب', 'المطلوب يُحسب في المتاح؛ الاستلام المتوقع مرئي'] },
    ], caption: 'الشكل 3 · الأسطر الثلاثة الأولى تُحل بنقطة إعادة الطلب على المتاح والكمية بالتغطية والمهلة المقيسة؛ والثلاثة التالية ببطاقة المورد والأحداث المدخَلة والمطلوب المرئي. ولا واحد يُحل بمسيّر أقوى ذاكرة.', alt: 'مصفوفة ست حالات: نفاد المنتج الرائج، فائض، مهلة موعودة ومهلة حقيقية، حد أدنى غير مبلوغ، ترويج، مطلوب مجهول؛ ما يحدث وما يفعله التطبيق.' },
    proposition: { caption: 'الشكل 4 · اقتراح الاثنين لمورد واحد: ستة أسطر بالمتاح والنقطة والكمية المقترحة والتقريب إلى التعبئة والتغطية بعد التسليم والمبلغ وقرار المسيّر. سطر مخفَّض لأن ترويجاً ينتهي، وسطر محذوف لأن المنتج في نهاية عمره، وكل انحراف يُسجَّل بسببه. ويُفحص الحد الأدنى للمورد والمجموع والتسليم المتوقع والميزانية قبل الإرسال. والكميات والمبالغ مثال مبني.' },
    couches: { title: 'إعادة التموين، في خمس طبقات', layers: [
      { label: 'البيانات', items: [{ name: 'سجل الحركات، الحجوزات، طلبيات الموردين المفتوحة، استلامات مؤرَّخة؛ بطاقة المورد: مهلة، حد أدنى، تعبئة', sub: 'لا شيء يُدخَل مرتين: كل شيء موجود أصلاً' }] },
      { label: 'الاستهلاك والمهلة', items: [{ name: 'خروج لكل منتج ومستودع على نافذة مكتوبة، الأخيرة مرجَّحة؛ مهلة وسيطة لكل مورد من الاستلامات', sub: 'مقيسة لا موعودة؛ تُعاد كل ليلة', accent: true }] },
      { label: 'القواعد', items: [{ name: 'مخزون أمان، فترة تغطية، أحداث قادمة، ميزانية؛ لكل فئة أو منتج، يكتبها المسيّر', sub: 'القاعدة معيار لا سطر كود' }] },
      { label: 'الاقتراح', items: [{ name: 'نقطة إعادة الطلب مقارَنة بالمتاح؛ كمية، تقريب، حد أدنى؛ مجمَّع حسب المورد؛ قرار سطراً سطراً', sub: 'المسيّر يقرر والتطبيق يحسب' }] },
      { label: 'الطلبية والحلقة', items: [{ name: 'أمر شراء مرسَل، استلام متوقع، مسح، فارق؛ مهلة حقيقية معادة؛ نفادات وفوائض مقيسة', sub: 'كل استلام يجعل الاقتراح التالي أعدل' }] },
    ], caption: 'الشكل 5 · الطبقة المميزة هي ما يستبدل بذاكرة المسيّر قياسات: الاستهلاك المقروء من السجل والمهلة المقيسة على الاستلامات. والقواعد، أمان وتغطية وميزانية، تبقى له وتتغير بلا تطوير؛ والاقتراح والطلبية هما مستندا دليل المخزون نفسهما بتاريخ إضافي.', alt: 'خمس طبقات: البيانات، الاستهلاك والمهلة (مميزة)، القواعد، الاقتراح، الطلبية والحلقة.' },
    calendrier: { title: 'أتمتة إعادة التموين سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القواعد', note: 'الفئات المتتبَّعة، مخزون الأمان، فترات التغطية، الميزانية، بطاقات الموردين؛ مع المسيّر والمشتري', from: 0, to: 1 },
      { label: 'الاستهلاك والمهلة', note: 'قراءة السجل، نافذة وترجيح، مهلة وسيطة لكل مورد من الاستلامات الماضية', from: 1, to: 2 },
      { label: 'الاقتراح', note: 'نقطة إعادة الطلب، المتاح، الكمية، التقريب، الحد الأدنى، التجميع حسب المورد، شاشة القرار', from: 2, to: 4, accent: true },
      { label: 'الطلبية والاستلام', note: 'أمر شراء مرقَّم مرسَل، استلام متوقع، مسح، فوارق، مهلة حقيقية معادة', from: 4, to: 5 },
      { label: 'الأحداث', note: 'ترويجات، إغلاقات، موسم؛ استهلاك متوقع معدَّل؛ نهاية العمر مستبعَدة', from: 5, to: 6 },
      { label: 'القياس', note: 'نفادات، أيام تغطية، فائض، فوارق المهلة لكل مورد، مراجعة الاثنين', from: 6, to: 7 },
    ], caption: 'الشكل 6 · سبعة أسابيع، الأول بلا كود: مخازن الأمان والتغطيات والميزانية قرارات المسيّر والمشتري. والأسبوعان المميزان هما الاقتراح لأنه الشاشة التي يفتحها المسيّر كل اثنين؛ والبيانات التي يقرؤها موجودة أصلاً في سجل الحركات والاستلامات من دليل المخزون ودليل الدفعات.', alt: 'خط زمني من سبعة أسابيع: القواعد، الاستهلاك والمهلة، الاقتراح (مميز، أسبوعان)، الطلبية والاستلام، الأحداث، القياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = RP[locale] || RP.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      point: { svg: rop(e.rop, rtl), caption: t.point.caption, alt: e.rop.alt },
      cycle: { svg: steps({ title: t.cycle.title, steps: t.cycle.items, arrows: true, rtl }), caption: t.cycle.caption, alt: t.cycle.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      proposition: { svg: proposal(e.proposal, rtl), caption: t.proposition.caption, alt: e.proposal.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 7, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
