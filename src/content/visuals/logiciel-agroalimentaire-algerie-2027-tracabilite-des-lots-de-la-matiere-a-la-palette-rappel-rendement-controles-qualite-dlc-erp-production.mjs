import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { genealogie, bilan, STRINGS as SC } from './custom/agro.mjs';
export const slug = 'logiciel-agroalimentaire-algerie-2027-tracabilite-des-lots-de-la-matiere-a-la-palette-rappel-rendement-controles-qualite-dlc-erp-production';
const T = {
  fr: {
    cover: { eyebrow: 'Logiciel agroalimentaire · Algérie · 2027', title: ['Logiciel agroalimentaire', 'du lot de matière à la palette'], subtitle: 'Traçabilité des lots dans les deux sens, bilan matière, contrôles aux points critiques, dates, rappel', left: { label: 'Deux jours de cahiers', sub: 'pour retrouver un lot' }, right: { label: 'Un écran', sub: 'huit palettes, cinq clients' } },
    couches: { title: 'Ce que le logiciel tient, en cinq couches', layers: [
      { label: 'Recettes', items: [{ name: 'Les recettes : ingrédients, quantités, freinte prévue, allergènes, une version par changement', sub: 'la référence de chaque fabrication' }] },
      { label: 'Lots', items: [{ name: 'Les lots : matière, semi-fini, produit fini, et le lien entre eux à chaque pesée', sub: 'la généalogie, dans les deux sens', accent: true }] },
      { label: 'Production', items: [{ name: 'La production : ordres de fabrication, lignes, équipes, consommations, bilan matière', sub: 'ce qui est entré, ce qui est sorti' }] },
      { label: 'Qualité', items: [{ name: 'La qualité : contrôles aux points critiques, mesures, non-conformités, blocage et libération', sub: 'chaque mesure, datée, par opérateur' }] },
      { label: 'Stock', items: [{ name: 'Le stock et l’expédition : dates limites, sorties par date, palettes, clients livrés', sub: 'ce qui part, vers qui, quand' }] },
    ], caption: 'Figure 1 · Cinq couches. La couche accentuée est celle des lots : c’est le lien entre un lot de matière et un lot de produit, pris à chaque pesée, qui rend tout le reste possible : le rappel, le bilan, la preuve.', alt: 'Cinq couches : les recettes ; les lots (accentuée) ; la production ; la qualité ; le stock et l’expédition.' },
    flux: { title: 'Du lot de matière à la palette, en six temps', items: [
      { label: 'Réception', sub: 'lot fournisseur, contrôle, quarantaine' },
      { label: 'Pesée', sub: 'matière scannée, quantité notée', accent: true },
      { label: 'Fabrication', sub: 'ordre, ligne, équipe, recette' },
      { label: 'Contrôle', sub: 'points critiques, mesures' },
      { label: 'Conditionnement', sub: 'lot, date limite, étiquette' },
      { label: 'Expédition', sub: 'palette, client, date' },
    ], caption: 'Figure 2 · Six temps. Le temps accentué est la pesée : c’est le moment où un lot de matière entre dans un lot de production. Si le lien n’est pas pris là, d’un scan, il ne peut plus être reconstitué.', alt: 'Six temps : réception, pesée (accentuée), fabrication, contrôle, conditionnement, expédition.' },
    genealogie: { caption: 'Figure 3 · Un lot de concentré de tomate entré dans trois lots de production, quatorze palettes : six bloquées en stock, huit chez cinq clients. Exemple construit.' },
    bilan: { caption: 'Figure 4 · Le bilan matière d’un lot (912 kg de produit conforme pour 1 000 kg entrés) et le rendement de six lots successifs sur la même ligne, de 93,1 % à 89,6 %. Quantités fictives.' },
    crise: { title: 'Six questions d’un jour de crise, sans et avec le logiciel', columns: ['Sans', 'Avec'], rows: [
      { label: 'Où est parti ce lot de produit fini ?', cells: ['on rappelle tous les clients du mois', 'les palettes, les clients, les dates'] },
      { label: 'Quelle matière est dans ce lot ?', cells: ['on cherche dans les fiches de pesée', 'les lots de matière, pesée par pesée'] },
      { label: 'Ce lot a-t-il passé ses contrôles ?', cells: ['une fiche papier, parfois remplie après', 'chaque mesure, datée, par opérateur'] },
      { label: 'Pourquoi le rendement baisse-t-il ?', cells: ['on le découvre à l’inventaire', 'le bilan matière, lot par lot'] },
      { label: 'Que reste-t-il de ce lot en stock ?', cells: ['on compte les palettes à la main', 'bloqué d’un geste, où qu’il soit'] },
      { label: 'Quelle version de recette a servi ?', cells: ['celle du classeur, en principe', 'la version liée à l’ordre de fabrication'] },
    ], caption: 'Figure 5 · Six questions que l’on se pose un jour de réclamation ou d’alerte fournisseur. La colonne du milieu est la réponse avec des cahiers ; celle de droite, avec des lots reliés entre eux.', alt: 'Matrice de six questions : où est parti ce lot de produit fini, quelle matière est dans ce lot, a-t-il passé ses contrôles, pourquoi le rendement baisse, que reste-t-il en stock, quelle version de recette a servi ; pour chacune, la réponse sans et avec le logiciel.' },
    calendrier: { title: 'Huit semaines pour une ligne tracée de bout en bout', unit: 'sem.', items: [
      { label: 'Relevé', note: 'recettes, fiches de pesée, fiches de contrôle, étiquettes, façon de numéroter les lots', from: 0, to: 1, accent: true },
      { label: 'Recettes et articles', note: 'recettes versionnées, freinte prévue, allergènes, articles et unités', from: 1, to: 3 },
      { label: 'Réception et lots', note: 'lot fournisseur, étiquette interne, contrôle, quarantaine, libération', from: 2, to: 4 },
      { label: 'Fabrication et pesées', note: 'ordre de fabrication, scan de chaque matière, quantités, bilan matière', from: 3, to: 6 },
      { label: 'Contrôles', note: 'points critiques sur tablette, limites, alerte, non-conformité', from: 4, to: 7 },
      { label: 'Expédition et exercice', note: 'palettes et clients, puis un exercice de rappel chronométré', from: 6, to: 8 },
    ], caption: 'Figure 6 · Huit semaines dans l’exemple, pour une ligne et une famille de produits. La période accentuée est la première : on lit les fiches que l’usine remplit déjà. Le dernier jalon est un exercice de rappel. Durées indicatives d’un exemple construit.', alt: 'Calendrier de huit semaines : relevé (accentué), recettes et articles, réception et lots, fabrication et pesées, contrôles, expédition et exercice de rappel.' },
  },
  en: {
    cover: { eyebrow: 'Food industry software · Algeria · 2027', title: ['Food manufacturing software', 'from the raw lot to the pallet'], subtitle: 'Lot traceability in both directions, mass balance, checks at critical points, dates, recall', left: { label: 'Two days of notebooks', sub: 'to find one lot' }, right: { label: 'One screen', sub: 'eight pallets, five customers' } },
    couches: { title: 'What the software holds, in five layers', layers: [
      { label: 'Recipes', items: [{ name: 'The recipes: ingredients, quantities, planned loss, allergens, one version per change', sub: 'the reference of every production run' }] },
      { label: 'Lots', items: [{ name: 'The lots: raw material, semi-finished, finished product, and the link between them at each weighing', sub: 'the genealogy, in both directions', accent: true }] },
      { label: 'Production', items: [{ name: 'Production: production orders, lines, shifts, consumption, mass balance', sub: 'what went in, what came out' }] },
      { label: 'Quality', items: [{ name: 'Quality: checks at critical points, measurements, non-conformities, hold and release', sub: 'every measurement, dated, by operator' }] },
      { label: 'Stock', items: [{ name: 'Stock and shipping: expiry dates, picking by date, pallets, customers delivered', sub: 'what leaves, to whom, when' }] },
    ], caption: 'Figure 1 · Five layers. The accented layer is the lots: it is the link between a lot of material and a lot of product, taken at each weighing, that makes everything else possible: the recall, the balance, the proof.', alt: 'Five layers: the recipes; the lots (accented); production; quality; stock and shipping.' },
    flux: { title: 'From the raw lot to the pallet, in six steps', items: [
      { label: 'Reception', sub: 'supplier lot, check, quarantine' },
      { label: 'Weighing', sub: 'material scanned, quantity noted', accent: true },
      { label: 'Production', sub: 'order, line, shift, recipe' },
      { label: 'Check', sub: 'critical points, measurements' },
      { label: 'Packing', sub: 'lot, expiry date, label' },
      { label: 'Shipping', sub: 'pallet, customer, date' },
    ], caption: 'Figure 2 · Six steps. The accented step is weighing: it is the moment a lot of material enters a production lot. If the link is not taken there, with one scan, it can no longer be reconstructed.', alt: 'Six steps: reception, weighing (accented), production, check, packing, shipping.' },
    genealogie: { caption: 'Figure 3 · One lot of tomato concentrate that went into three production lots, fourteen pallets: six blocked in stock, eight at five customers. Constructed example.' },
    bilan: { caption: 'Figure 4 · One lot’s mass balance (912 kg of conforming product for 1,000 kg in) and the yield of six successive lots on the same line, from 93.1% to 89.6%. Fictitious quantities.' },
    crise: { title: 'Six questions on a crisis day, without and with the software', columns: ['Without', 'With'], rows: [
      { label: 'Where did this finished lot go?', cells: ['you call every customer of the month', 'the pallets, the customers, the dates'] },
      { label: 'Which material is in this lot?', cells: ['you search the weighing sheets', 'the material lots, weighing by weighing'] },
      { label: 'Did this lot pass its checks?', cells: ['a paper sheet, sometimes filled in later', 'every measurement, dated, by operator'] },
      { label: 'Why is the yield falling?', cells: ['you find out at stocktake', 'the mass balance, lot by lot'] },
      { label: 'What is left of this lot in stock?', cells: ['you count pallets by hand', 'blocked in one gesture, wherever it is'] },
      { label: 'Which version of the recipe was used?', cells: ['the one in the binder, in principle', 'the version tied to the production order'] },
    ], caption: 'Figure 5 · Six questions asked on the day of a complaint or a supplier alert. The middle column is the answer with notebooks; the right-hand one, with lots linked to one another.', alt: 'Matrix of six questions: where did this finished lot go, which material is in this lot, did it pass its checks, why is the yield falling, what is left in stock, which version of the recipe was used; for each, the answer without and with the software.' },
    calendrier: { title: 'Eight weeks for one line traced from end to end', unit: 'wk', items: [
      { label: 'Survey', note: 'recipes, weighing sheets, check sheets, labels, how lots are numbered', from: 0, to: 1, accent: true },
      { label: 'Recipes and items', note: 'versioned recipes, planned loss, allergens, items and units', from: 1, to: 3 },
      { label: 'Reception and lots', note: 'supplier lot, internal label, check, quarantine, release', from: 2, to: 4 },
      { label: 'Production and weighing', note: 'production order, scan of each material, quantities, mass balance', from: 3, to: 6 },
      { label: 'Checks', note: 'critical points on a tablet, limits, alert, non-conformity', from: 4, to: 7 },
      { label: 'Shipping and drill', note: 'pallets and customers, then a timed recall drill', from: 6, to: 8 },
    ], caption: 'Figure 6 · Eight weeks in the example, for one line and one product family. The accented period is the first: reading the sheets the plant already fills in. The last milestone is a recall drill. Indicative durations of a constructed example.', alt: 'Eight-week calendar: survey (accented), recipes and items, reception and lots, production and weighing, checks, shipping and recall drill.' },
  },
  ar: {
    cover: { eyebrow: 'برنامج الصناعة الغذائية · الجزائر · 2027', title: ['برنامج الصناعة الغذائية', 'من حصة المادة إلى المنصّة'], subtitle: 'تتبّع الحصص في الاتجاهين، حصيلة المادة، مراقبات النقاط الحرجة، التواريخ، والسحب', left: { label: 'يومان من الدفاتر', sub: 'للعثور على حصة' }, right: { label: 'شاشة واحدة', sub: 'ثماني منصّات، خمسة زبائن' } },
    couches: { title: 'ما يمسكه البرنامج، في خمس طبقات', layers: [
      { label: 'الوصفات', items: [{ name: 'الوصفات: المكوّنات، الكميات، الفاقد المتوقَّع، مسبّبات الحساسية، ونسخة لكل تغيير', sub: 'مرجع كل تصنيع' }] },
      { label: 'الحصص', items: [{ name: 'الحصص: مادة أولية، نصف مصنَّع، ومنتوج نهائي، والرابط بينها عند كل وزن', sub: 'النسب، في الاتجاهين', accent: true }] },
      { label: 'الإنتاج', items: [{ name: 'الإنتاج: أوامر التصنيع، الخطوط، الفرق، الاستهلاكات، وحصيلة المادة', sub: 'ما دخل، وما خرج' }] },
      { label: 'الجودة', items: [{ name: 'الجودة: مراقبات النقاط الحرجة، القياسات، حالات عدم المطابقة، الحجز والتحرير', sub: 'كل قياس، مؤرَّخ، باسم عامل' }] },
      { label: 'المخزون', items: [{ name: 'المخزون والإرسال: تواريخ الصلاحية، الإخراج حسب التاريخ، المنصّات، والزبائن المسلَّم لهم', sub: 'ما يغادر، إلى من، ومتى' }] },
    ], caption: 'الشكل 1 · خمس طبقات. الطبقة المبرزة هي الحصص: الرابط بين حصة مادة وحصة منتوج، يُؤخذ عند كل وزن، هو ما يجعل كل الباقي ممكناً: السحب، الحصيلة، والدليل.', alt: 'خمس طبقات: الوصفات؛ الحصص (مبرزة)؛ الإنتاج؛ الجودة؛ والمخزون والإرسال.' },
    flux: { title: 'من حصة المادة إلى المنصّة، في ست مراحل', items: [
      { label: 'الاستلام', sub: 'حصة المورّد، مراقبة، وحجر' },
      { label: 'الوزن', sub: 'المادة تُمسح، والكمية تُسجَّل', accent: true },
      { label: 'التصنيع', sub: 'أمر، خط، فرقة، ووصفة' },
      { label: 'المراقبة', sub: 'نقاط حرجة وقياسات' },
      { label: 'التعبئة', sub: 'حصة، تاريخ صلاحية، وملصق' },
      { label: 'الإرسال', sub: 'منصّة، زبون، وتاريخ' },
    ], caption: 'الشكل 2 · ست مراحل. المرحلة المبرزة هي الوزن: هي اللحظة التي تدخل فيها حصة مادة في حصة إنتاج. وإذا لم يُؤخذ الرابط هناك، بمسح واحد، لم يعد ممكناً استرجاعه.', alt: 'ست مراحل: الاستلام، الوزن (مبرزة)، التصنيع، المراقبة، التعبئة، والإرسال.' },
    genealogie: { caption: 'الشكل 3 · حصة من معجون الطماطم دخلت في ثلاث حصص إنتاج، أربع عشرة منصّة: ست محجوزة في المخزون، وثماني عند خمسة زبائن. مثال مركَّب.' },
    bilan: { caption: 'الشكل 4 · حصيلة المادة لحصة (912 كلغ من المنتوج المطابق مقابل 1000 كلغ داخلة) ومردود ست حصص متتالية على الخط نفسه، من 93,1 إلى 89,6 بالمئة. كميات خيالية.' },
    crise: { title: 'ستة أسئلة في يوم أزمة، دون البرنامج ومعه', columns: ['دونه', 'معه'], rows: [
      { label: 'أين ذهبت هذه الحصة من المنتوج؟', cells: ['نتصل بكل زبائن الشهر', 'المنصّات، الزبائن، والتواريخ'] },
      { label: 'أي مادة في هذه الحصة؟', cells: ['نبحث في أوراق الوزن', 'حصص المادة، وزناً بوزن'] },
      { label: 'هل اجتازت هذه الحصة مراقباتها؟', cells: ['ورقة، تُملأ أحياناً بعد حين', 'كل قياس، مؤرَّخ، باسم عامل'] },
      { label: 'لماذا ينزل المردود؟', cells: ['نكتشفه عند الجرد', 'حصيلة المادة، حصة بحصة'] },
      { label: 'ماذا بقي من هذه الحصة في المخزون؟', cells: ['نعدّ المنصّات باليد', 'تُحجز بحركة واحدة، أينما كانت'] },
      { label: 'أي نسخة من الوصفة استُعملت؟', cells: ['التي في الملف، مبدئياً', 'النسخة المربوطة بأمر التصنيع'] },
    ], caption: 'الشكل 5 · ستة أسئلة تُطرح يوم شكوى أو تنبيه من مورّد. العمود الأوسط هو الجواب بالدفاتر؛ والآخر، بحصص مربوط بعضها ببعض.', alt: 'مصفوفة من ستة أسئلة: أين ذهبت حصة المنتوج، أي مادة فيها، هل اجتازت مراقباتها، لماذا ينزل المردود، ماذا بقي في المخزون، وأي نسخة من الوصفة استُعملت؛ ولكل واحد، الجواب دون البرنامج ومعه.' },
    calendrier: { title: 'ثمانية أسابيع لخط متتبَّع من أوله إلى آخره', unit: 'أسبوع', items: [
      { label: 'المعاينة', note: 'الوصفات، أوراق الوزن، أوراق المراقبة، الملصقات، وطريقة ترقيم الحصص', from: 0, to: 1, accent: true },
      { label: 'الوصفات والسلع', note: 'وصفات بنسخ، الفاقد المتوقَّع، مسبّبات الحساسية، السلع والوحدات', from: 1, to: 3 },
      { label: 'الاستلام والحصص', note: 'حصة المورّد، ملصق داخلي، مراقبة، حجر، ثم تحرير', from: 2, to: 4 },
      { label: 'التصنيع والوزن', note: 'أمر التصنيع، مسح كل مادة، الكميات، وحصيلة المادة', from: 3, to: 6 },
      { label: 'المراقبات', note: 'النقاط الحرجة على اللوحة، الحدود، التنبيه، وعدم المطابقة', from: 4, to: 7 },
      { label: 'الإرسال والتمرين', note: 'المنصّات والزبائن، ثم تمرين سحب موقوت', from: 6, to: 8 },
    ], caption: 'الشكل 6 · ثمانية أسابيع في المثال، لخط واحد وصنف واحد من المنتجات. الفترة المبرزة هي الأولى: قراءة الأوراق التي يملؤها المصنع من قبل. وآخر محطة تمرين سحب. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من ثمانية أسابيع: المعاينة (مبرزة)، الوصفات والسلع، الاستلام والحصص، التصنيع والوزن، المراقبات، ثم الإرسال وتمرين السحب.' },
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
      flux: { svg: steps({ title: t.flux.title, steps: t.flux.items, arrows: true, rtl }), caption: t.flux.caption, alt: t.flux.alt },
      genealogie: { svg: genealogie(e.genealogie, rtl), caption: t.genealogie.caption, alt: e.genealogie.alt },
      bilan: { svg: bilan(e.bilan, rtl), caption: t.bilan.caption, alt: e.bilan.alt },
      crise: { svg: matrix({ title: t.crise.title, columns: t.crise.columns, rows: t.crise.rows, rtl }), caption: t.crise.caption, alt: t.crise.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 8, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
