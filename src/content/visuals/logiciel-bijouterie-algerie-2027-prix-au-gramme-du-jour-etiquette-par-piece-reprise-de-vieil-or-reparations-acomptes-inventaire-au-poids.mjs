import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { etiquette, plateau, STRINGS as SC } from './custom/bijouterie.mjs';
export const slug = 'logiciel-bijouterie-algerie-2027-prix-au-gramme-du-jour-etiquette-par-piece-reprise-de-vieil-or-reparations-acomptes-inventaire-au-poids';
const T = {
  fr: {
    cover: { eyebrow: 'Logiciel bijouterie · Algérie · 2027', title: ['Logiciel bijouterie', 'à la pièce et au gramme'], subtitle: 'Prix du gramme du jour, étiquette par pièce, reprise de vieil or, acomptes, réparations, inventaire', left: { label: 'Mille étiquettes', sub: 'à refaire quand l’or bouge' }, right: { label: 'Un prix du gramme', sub: 'tout se recalcule' } },
    couches: { title: 'Ce que tient un logiciel de bijouterie, en cinq couches', layers: [
      { label: 'Pièces', items: [{ name: 'La pièce : une fiche par bijou, avec son poids, son titre, sa façon, sa photo et son étiquette', sub: 'le stock se compte en pièces et en grammes', accent: true }] },
      { label: 'Prix', items: [{ name: 'Le prix du jour : un prix du gramme par titre, saisi le matin, appliqué à toutes les pièces', sub: 'un chiffre à changer, pas mille étiquettes' }] },
      { label: 'Comptoir', items: [{ name: 'Le comptoir : vente, reprise de vieil or pesée, acompte, commande, échange', sub: 'tout ce qui se passe devant le client' }] },
      { label: 'Atelier', items: [{ name: 'L’atelier : réparations, commandes sur mesure, pièces confiées, chacune avec son reçu', sub: 'ce qui n’appartient pas à la boutique' }] },
      { label: 'Contrôle', items: [{ name: 'Le contrôle : inventaire par plateau au scan et au poids, valeur du stock au cours du jour', sub: 'ce qu’on vérifie chaque matin' }] },
    ], caption: 'Figure 1 · Cinq couches. La couche accentuée est la pièce : en bijouterie, deux bagues du même modèle n’ont pas le même poids, donc pas le même prix. Le logiciel suit chaque pièce, pas un « article » en quantité.', alt: 'Cinq couches : la pièce (accentuée) ; le prix du jour ; le comptoir ; l’atelier ; le contrôle.' },
    etiquette: { caption: 'Figure 2 · Un bracelet de 12,4 g : 279 000 DA au prix du gramme du jour, contre 260 400 sur une étiquette écrite un mois plus tôt. Prix fictifs.' },
    vente: { title: 'Une vente avec reprise de vieil or, en six temps', items: [
      { label: 'Scan', sub: 'la pièce, son poids, sa façon' },
      { label: 'Prix du jour', sub: 'calculé, affiché, expliqué' },
      { label: 'Reprise', sub: 'le vieil or pesé, son titre, sa valeur', accent: true },
      { label: 'Règlement', sub: 'le solde, un acompte ou le tout' },
      { label: 'Reçu', sub: 'poids, titre, prix du gramme, façon' },
      { label: 'Stock', sub: 'la pièce sort, le vieil or entre' },
    ], caption: 'Figure 3 · Six temps. Le temps accentué est la reprise : le vieil or que la cliente ou le client apporte est pesé, son titre noté, sa valeur déduite. C’est une entrée de stock autant qu’un mode de paiement, et le carnet la perd presque toujours.', alt: 'Six temps : scan, prix du jour, reprise (accentuée), règlement, reçu, stock.' },
    plateau: { caption: 'Figure 4 · Un plateau de 24 bagues compté au scan et au poids : 23 pièces et 178,1 g trouvés, une pièce de 8,3 g identifiée comme manquante. Exemple construit.' },
    comptoir: { title: 'Six situations du comptoir : ce qui se perd, ce que garde le logiciel', columns: ['Ce qui se perd', 'Ce que garde le logiciel'], rows: [
      { label: 'Un acompte versé sur une parure', cells: ['le prix du jour de la réservation', 'la règle écrite : prix figé ou recalculé'] },
      { label: 'Un collier laissé en réparation', cells: ['le poids à l’entrée, l’état', 'reçu, poids, photo, date promise'] },
      { label: 'Des pièces confiées par un fournisseur', cells: ['ce qui est à lui, ce qui est à vous', 'un stock à part : vendu, donc à lui régler'] },
      { label: 'Une reprise de vieil or', cells: ['le poids et le titre repris', 'pesée, titre, valeur, entrée en stock'] },
      { label: 'Une commande sur mesure', cells: ['le dessin, le poids estimé, l’acompte', 'fiche, étapes, poids final, solde'] },
      { label: 'L’or bouge de 3 % en une semaine', cells: ['les étiquettes à refaire une à une', 'un prix du gramme, tout se recalcule'] },
    ], caption: 'Figure 5 · Six situations. Aucune n’est une vente simple, et c’est pour cela qu’une caisse de commerce ordinaire ne suffit pas : elle sait vendre un article à un prix, pas tenir un poids, un titre et une promesse.', alt: 'Matrice de six situations du comptoir : un acompte sur une parure, un collier en réparation, des pièces confiées par un fournisseur, une reprise de vieil or, une commande sur mesure, l’or qui bouge de 3 % en une semaine ; pour chacune, ce qui se perd et ce que garde le logiciel.' },
    calendrier: { title: 'Six semaines pour une boutique tenue à la pièce et au gramme', unit: 'sem.', items: [
      { label: 'Relevé', note: 'vos pièces, vos titres, votre façon de fixer le prix, vos carnets d’acomptes et de réparations', from: 0, to: 1, accent: true },
      { label: 'Fiches et étiquettes', note: 'une fiche par pièce, pesée, photo, étiquette à scanner', from: 1, to: 3 },
      { label: 'Prix du jour et caisse', note: 'prix du gramme par titre, calcul à la vente, reçu détaillé', from: 2, to: 4 },
      { label: 'Reprises, acomptes, atelier', note: 'vieil or pesé, acomptes, commandes sur mesure, réparations', from: 3, to: 5 },
      { label: 'Inventaire', note: 'plateau par plateau, au scan et au poids, valeur du stock', from: 4, to: 6 },
    ], caption: 'Figure 6 · Six semaines dans l’exemple, relevé compris. La période accentuée est la première : on lit vos carnets pour reprendre vos règles telles qu’elles sont. La mise en fiche des pièces se fait plateau par plateau, boutique ouverte. Durées indicatives d’un exemple construit.', alt: 'Calendrier de six semaines : relevé (accentué), fiches et étiquettes, prix du jour et caisse, reprises, acomptes et atelier, inventaire.' },
  },
  en: {
    cover: { eyebrow: 'Jewellery shop software · Algeria · 2027', title: ['Jewellery shop software', 'by the piece and by the gram'], subtitle: 'Gram price of the day, a tag per piece, old gold trade-in, deposits, repairs, stock counts', left: { label: 'A thousand tags', sub: 'to redo when gold moves' }, right: { label: 'One gram price', sub: 'everything recalculates' } },
    couches: { title: 'What jewellery shop software holds, in five layers', layers: [
      { label: 'Pieces', items: [{ name: 'The piece: one record per item, with its weight, fineness, making charge, photo and tag', sub: 'stock is counted in pieces and in grams', accent: true }] },
      { label: 'Price', items: [{ name: 'The price of the day: one gram price per fineness, entered in the morning, applied to every piece', sub: 'one figure to change, not a thousand tags' }] },
      { label: 'Counter', items: [{ name: 'The counter: sale, weighed old gold trade-in, deposit, order, exchange', sub: 'everything that happens in front of the customer' }] },
      { label: 'Workshop', items: [{ name: 'The workshop: repairs, custom orders, pieces left in your care, each with its receipt', sub: 'what does not belong to the shop' }] },
      { label: 'Control', items: [{ name: 'Control: counts per tray by scan and by weight, stock value at the day’s price', sub: 'what is checked every morning' }] },
    ], caption: 'Figure 1 · Five layers. The accented layer is the piece: in jewellery, two rings of the same model do not weigh the same, so they do not cost the same. The software follows each piece, not an “item” in a quantity.', alt: 'Five layers: the piece (accented); the price of the day; the counter; the workshop; control.' },
    etiquette: { caption: 'Figure 2 · A 12.4 g bracelet: DA 279,000 at the gram price of the day, against 260,400 on a tag written a month earlier. Fictitious prices.' },
    vente: { title: 'A sale with old gold traded in, in six steps', items: [
      { label: 'Scan', sub: 'the piece, its weight, its making charge' },
      { label: 'Price of the day', sub: 'calculated, shown, explained' },
      { label: 'Trade-in', sub: 'old gold weighed, its fineness, its value', accent: true },
      { label: 'Payment', sub: 'the balance, a deposit or all of it' },
      { label: 'Receipt', sub: 'weight, fineness, gram price, making' },
      { label: 'Stock', sub: 'the piece goes out, the old gold comes in' },
    ], caption: 'Figure 3 · Six steps. The accented step is the trade-in: the old gold the customer brings is weighed, its fineness noted, its value deducted. It is a stock entry as much as a means of payment, and the notebook almost always loses it.', alt: 'Six steps: scan, price of the day, trade-in (accented), payment, receipt, stock.' },
    plateau: { caption: 'Figure 4 · A tray of 24 rings counted by scan and by weight: 23 pieces and 178.1 g found, one piece of 8.3 g identified as missing. Constructed example.' },
    comptoir: { title: 'Six situations at the counter: what gets lost, what the software keeps', columns: ['What gets lost', 'What the software keeps'], rows: [
      { label: 'A deposit paid on a set', cells: ['the price on the day it was reserved', 'the written rule: price fixed or recalculated'] },
      { label: 'A necklace left for repair', cells: ['its weight on arrival, its condition', 'receipt, weight, photo, promised date'] },
      { label: 'Pieces left by a supplier on consignment', cells: ['what is theirs, what is yours', 'a separate stock: sold, so owed to them'] },
      { label: 'Old gold traded in', cells: ['the weight and fineness taken back', 'weighing, fineness, value, stock entry'] },
      { label: 'A custom order', cells: ['the drawing, estimated weight, deposit', 'record, stages, final weight, balance'] },
      { label: 'Gold moves 3% in a week', cells: ['tags to be redone one by one', 'one gram price, everything recalculates'] },
    ], caption: 'Figure 5 · Six situations. None is a simple sale, which is why an ordinary shop till is not enough: it can sell an item at a price, not keep track of a weight, a fineness and a promise.', alt: 'Matrix of six situations at the counter: a deposit on a set, a necklace left for repair, pieces left by a supplier on consignment, old gold traded in, a custom order, gold moving 3% in a week; for each, what gets lost and what the software keeps.' },
    calendrier: { title: 'Six weeks for a shop run by the piece and by the gram', unit: 'wk', items: [
      { label: 'Survey', note: 'your pieces, your finenesses, how you set the price, your deposit and repair notebooks', from: 0, to: 1, accent: true },
      { label: 'Records and tags', note: 'one record per piece, weighed, photographed, with a tag to scan', from: 1, to: 3 },
      { label: 'Day price and till', note: 'gram price per fineness, calculation at the sale, detailed receipt', from: 2, to: 4 },
      { label: 'Trade-ins, deposits, workshop', note: 'old gold weighed, deposits, custom orders, repairs', from: 3, to: 5 },
      { label: 'Stock count', note: 'tray by tray, by scan and by weight, stock value', from: 4, to: 6 },
    ], caption: 'Figure 6 · Six weeks in the example, survey included. The accented period is the first: reading your notebooks to take over your rules as they are. Pieces are recorded tray by tray, with the shop open. Indicative durations of a constructed example.', alt: 'Six-week calendar: survey (accented), records and tags, day price and till, trade-ins, deposits and workshop, stock count.' },
  },
  ar: {
    cover: { eyebrow: 'برنامج محل المجوهرات · الجزائر · 2027', title: ['برنامج محل المجوهرات', 'بالقطعة وبالغرام'], subtitle: 'سعر غرام اليوم، ملصق لكل قطعة، استرجاع الذهب القديم، العربون، التصليح، والجرد', left: { label: 'ألف ملصق', sub: 'تُعاد حين يتحرك الذهب' }, right: { label: 'سعر غرام واحد', sub: 'وكل شيء يُعاد حسابه' } },
    couches: { title: 'ما يمسكه برنامج محل المجوهرات، في خمس طبقات', layers: [
      { label: 'القطع', items: [{ name: 'القطعة: بطاقة لكل حلية، بوزنها، عيارها، صنعتها، صورتها، وملصقها', sub: 'المخزون يُعدّ بالقطع وبالغرامات', accent: true }] },
      { label: 'السعر', items: [{ name: 'سعر اليوم: سعر غرام لكل عيار، يُدخَل في الصباح، ويُطبَّق على كل القطع', sub: 'رقم واحد يُغيَّر، لا ألف ملصق' }] },
      { label: 'المنضدة', items: [{ name: 'المنضدة: بيع، استرجاع ذهب قديم موزون، عربون، طلبية، وتبديل', sub: 'كل ما يجري أمام الزبون' }] },
      { label: 'الورشة', items: [{ name: 'الورشة: تصليحات، طلبيات على المقاس، وقطع مودَعة، لكل واحدة وصلها', sub: 'ما ليس ملكاً للمحل' }] },
      { label: 'المراقبة', items: [{ name: 'المراقبة: جرد لكل صينية بالمسح وبالوزن، وقيمة المخزون بسعر اليوم', sub: 'ما يُراجَع كل صباح' }] },
    ], caption: 'الشكل 1 · خمس طبقات. الطبقة المبرزة هي القطعة: في المجوهرات، خاتمان من الموديل نفسه ليس لهما الوزن نفسه، فليس لهما السعر نفسه. والبرنامج يتابع كل قطعة، لا «سلعة» بكمية.', alt: 'خمس طبقات: القطعة (مبرزة)؛ سعر اليوم؛ المنضدة؛ الورشة؛ والمراقبة.' },
    etiquette: { caption: 'الشكل 2 · سوار من 12,4 غراماً: 279000 دج بسعر غرام اليوم، مقابل 260400 على ملصق كُتب قبل شهر. أسعار خيالية.' },
    vente: { title: 'بيع مع استرجاع ذهب قديم، في ست مراحل', items: [
      { label: 'المسح', sub: 'القطعة، وزنها، وصنعتها' },
      { label: 'سعر اليوم', sub: 'محسوب، معروض، ومشروح' },
      { label: 'الاسترجاع', sub: 'الذهب القديم موزوناً، عياره، وقيمته', accent: true },
      { label: 'الدفع', sub: 'الباقي، عربون، أو الكل' },
      { label: 'الوصل', sub: 'الوزن، العيار، سعر الغرام، والصنعة' },
      { label: 'المخزون', sub: 'القطعة تخرج، والذهب القديم يدخل' },
    ], caption: 'الشكل 3 · ست مراحل. المرحلة المبرزة هي الاسترجاع: الذهب القديم الذي يأتي به الزبون يوزَن، يُسجَّل عياره، وتُطرح قيمته. هو دخول إلى المخزون بقدر ما هو وسيلة دفع، والدفتر يضيّعه في الغالب.', alt: 'ست مراحل: المسح، سعر اليوم، الاسترجاع (مبرزة)، الدفع، الوصل، والمخزون.' },
    plateau: { caption: 'الشكل 4 · صينية من 24 خاتماً تُعدّ بالمسح وبالوزن: 23 قطعة و178,1 غراماً وُجدت، وقطعة من 8,3 غرامات عُرّفت ناقصة. مثال مركَّب.' },
    comptoir: { title: 'ست حالات عند المنضدة: ما يضيع، وما يحفظه البرنامج', columns: ['ما يضيع', 'ما يحفظه البرنامج'], rows: [
      { label: 'عربون يُدفع على طقم', cells: ['سعر يوم الحجز', 'القاعدة مكتوبة: سعر ثابت أو يُعاد حسابه'] },
      { label: 'عقد يُترك للتصليح', cells: ['وزنه عند الدخول، وحالته', 'وصل، وزن، صورة، وتاريخ موعود'] },
      { label: 'قطع أودعها مورّد', cells: ['ما هو له، وما هو لكم', 'مخزون منفصل: بيع، فيُسدَّد له'] },
      { label: 'استرجاع ذهب قديم', cells: ['الوزن والعيار المسترجَعان', 'وزن، عيار، قيمة، ودخول إلى المخزون'] },
      { label: 'طلبية على المقاس', cells: ['الرسم، الوزن المقدَّر، والعربون', 'بطاقة، مراحل، وزن نهائي، وباقٍ'] },
      { label: 'الذهب يتحرك 3 بالمئة في أسبوع', cells: ['ملصقات تُعاد واحداً واحداً', 'سعر غرام واحد، وكل شيء يُعاد حسابه'] },
    ], caption: 'الشكل 5 · ست حالات. لا واحدة منها بيع بسيط، ولهذا لا يكفي صندوق محل عادي: هو يعرف بيع سلعة بسعر، لا مسك وزن وعيار ووعد.', alt: 'مصفوفة من ست حالات عند المنضدة: عربون على طقم، عقد يُترك للتصليح، قطع أودعها مورّد، استرجاع ذهب قديم، طلبية على المقاس، والذهب يتحرك 3 بالمئة في أسبوع؛ ولكل واحدة، ما يضيع وما يحفظه البرنامج.' },
    calendrier: { title: 'ستة أسابيع لمحل يُمسك بالقطعة وبالغرام', unit: 'أسبوع', items: [
      { label: 'المعاينة', note: 'قطعكم، عياراتكم، طريقتكم في تحديد السعر، ودفاتر العربون والتصليح', from: 0, to: 1, accent: true },
      { label: 'البطاقات والملصقات', note: 'بطاقة لكل قطعة، موزونة، مصوَّرة، وبملصق يُمسح', from: 1, to: 3 },
      { label: 'سعر اليوم والصندوق', note: 'سعر غرام لكل عيار، حساب عند البيع، ووصل مفصَّل', from: 2, to: 4 },
      { label: 'الاسترجاع، العربون، والورشة', note: 'ذهب قديم موزون، عربون، طلبيات على المقاس، وتصليحات', from: 3, to: 5 },
      { label: 'الجرد', note: 'صينية بصينية، بالمسح وبالوزن، وقيمة المخزون', from: 4, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع في المثال، المعاينة منها. الفترة المبرزة هي الأولى: قراءة دفاتركم لأخذ قواعدكم كما هي. وتسجيل القطع يجري صينية بصينية، والمحل مفتوح. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من ستة أسابيع: المعاينة (مبرزة)، البطاقات والملصقات، سعر اليوم والصندوق، الاسترجاع والعربون والورشة، ثم الجرد.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      etiquette: { svg: etiquette(e.etiquette, rtl), caption: t.etiquette.caption, alt: e.etiquette.alt },
      vente: { svg: steps({ title: t.vente.title, steps: t.vente.items, arrows: true, rtl }), caption: t.vente.caption, alt: t.vente.alt },
      plateau: { svg: plateau(e.plateau, rtl), caption: t.plateau.caption, alt: e.plateau.alt },
      comptoir: { svg: matrix({ title: t.comptoir.title, columns: t.comptoir.columns, rows: t.comptoir.rows, rtl }), caption: t.comptoir.caption, alt: t.comptoir.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
