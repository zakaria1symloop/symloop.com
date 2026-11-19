import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { quantite, pose, STRINGS as SC } from './custom/imprimerie.mjs';
export const slug = 'logiciel-imprimerie-algerie-2027-devis-d-impression-prix-par-quantite-bon-a-tirer-dossier-de-fabrication-planning-des-machines-stock-papier';
const T = {
  fr: {
    cover: { eyebrow: 'Logiciel imprimerie · Algérie · 2027', title: ['Logiciel imprimerie', 'du devis au bon de livraison'], subtitle: 'Prix calculé par quantité, poses sur la feuille, bon à tirer validé, dossier de fabrication, planning', left: { label: 'Devis de mémoire', sub: 'un prix par habitude' }, right: { label: 'Prix calculé', sub: 'procédé, poses, papier' } },
    commande: { title: 'La vie d’une commande d’impression, en six temps', items: [
      { label: 'Demande', sub: 'format, papier, quantités, finition, date' },
      { label: 'Devis', sub: 'procédé, poses, prix par quantité' },
      { label: 'Bon à tirer', sub: 'épreuve validée par le client, datée', accent: true },
      { label: 'Impression', sub: 'dossier de fabrication, machine, papier' },
      { label: 'Façonnage', sub: 'coupe, pliage, agrafage, pelliculage' },
      { label: 'Livraison', sub: 'bon signé, facture, fichiers gardés' },
    ], caption: 'Figure 1 · Six temps. Le temps accentué est le bon à tirer : l’épreuve que le client valide avant l’impression. Tant qu’il n’est pas donné, rien ne part en machine ; une fois donné, il dit qui a approuvé quoi, et quand.', alt: 'Six temps : demande, devis, bon à tirer (accentué), impression, façonnage, livraison.' },
    quantite: { caption: 'Figure 2 · Le coût total d’un même flyer en offset et en numérique : les deux droites se croisent vers 1 313 exemplaires. Montants fictifs.' },
    couches: { title: 'Ce que tient un logiciel d’imprimerie, en cinq couches', layers: [
      { label: 'Devis', items: [{ name: 'Le devis : format, papier, couleurs, finition, et un prix calculé pour chaque quantité', sub: 'le moteur de prix' }] },
      { label: 'Dossier', items: [{ name: 'Le dossier de fabrication : une fiche par commande, avec fichiers, épreuve validée, consignes', sub: 'ce que l’atelier suit, du devis à la livraison', accent: true }] },
      { label: 'Planning', items: [{ name: 'Le planning : chaque commande sur une machine, à une date, avec ses étapes de façonnage', sub: 'qui imprime quoi, et quand' }] },
      { label: 'Papier', items: [{ name: 'Le papier et les consommables : stock par format et par grammage, réservé à la commande', sub: 'ce qu’il faut commander avant de promettre' }] },
      { label: 'Clients', items: [{ name: 'Les clients : commandes passées, fichiers gardés, recommande en un geste, factures', sub: 'la recommande sans tout redemander' }] },
    ], caption: 'Figure 3 · Cinq couches. La couche accentuée est le dossier de fabrication : la fiche unique qui accompagne la commande, que tout le monde lit, et qui remplace le bout de papier agrafé au fichier.', alt: 'Cinq couches : le devis ; le dossier de fabrication (accentuée) ; le planning ; le papier et les consommables ; les clients.' },
    travaux: { title: 'Six familles de travaux : ce qui fait le prix, ce que le devis demande', columns: ['Ce qui fait le prix', 'Ce que le devis demande'], rows: [
      { label: 'Cartes de visite, flyers', cells: ['la quantité et le nombre de poses', 'format, papier, recto ou recto verso'] },
      { label: 'Brochures, catalogues', cells: ['le nombre de pages et la reliure', 'pages, couverture, agrafé ou dos collé'] },
      { label: 'Carnets, liasses', cells: ['les feuillets et la numérotation', 'exemplaires par liasse, numéro de départ'] },
      { label: 'Étiquettes, emballages', cells: ['la découpe et le support', 'forme, matière, rouleau ou planche'] },
      { label: 'Affiches, bâches, enseignes', cells: ['la surface et la finition', 'dimensions, œillets, pose ou non'] },
      { label: 'Objets et textile marqués', cells: ['le marquage et les couleurs', 'support, emplacement, quantité par taille'] },
    ], caption: 'Figure 4 · Six familles de travaux. Chacune a sa façon de se chiffrer : un devis unique à champs libres ne convient à aucune. Le logiciel pose, pour chaque famille, les seules questions qui changent le prix.', alt: 'Matrice de six familles de travaux : cartes de visite et flyers, brochures et catalogues, carnets et liasses, étiquettes et emballages, affiches, bâches et enseignes, objets et textile marqués ; pour chacune, ce qui fait le prix et ce que le devis doit demander.' },
    pose: { caption: 'Figure 5 · Le même flyer A6 sur la même feuille : 4 poses couché, 6 poses debout, soit 750 ou 500 feuilles pour 3 000 exemplaires. Exemple construit.' },
    calendrier: { title: 'Sept semaines pour un atelier suivi du devis à la livraison', unit: 'sem.', items: [
      { label: 'Relevé', note: 'vos travaux types, vos machines, vos papiers, votre façon de chiffrer aujourd’hui', from: 0, to: 1, accent: true },
      { label: 'Moteur de prix', note: 'procédés, frais fixes, coût à l’exemplaire, poses, finitions', from: 1, to: 3 },
      { label: 'Dossier et bon à tirer', note: 'fiche de fabrication, fichiers, épreuve envoyée et validée en ligne', from: 2, to: 4 },
      { label: 'Planning', note: 'machines, étapes, dates promises, charge de la semaine', from: 3, to: 5 },
      { label: 'Papier', note: 'stock par format et grammage, réservation, commande au fournisseur', from: 4, to: 6 },
      { label: 'Clients et recommande', note: 'historique, fichiers gardés, recommande, livraison et facture', from: 5, to: 7 },
    ], caption: 'Figure 6 · Sept semaines dans l’exemple, relevé compris. La période accentuée est la première : on lit vos devis passés pour en tirer les règles de prix. Durées indicatives d’un exemple construit.', alt: 'Calendrier de sept semaines : relevé (accentué), moteur de prix, dossier et bon à tirer, planning, papier, clients et recommande.' },
  },
  en: {
    cover: { eyebrow: 'Print shop software · Algeria · 2027', title: ['Print shop software', 'from quote to delivery note'], subtitle: 'Price calculated per quantity, layout on the sheet, approved proof, job ticket, schedule', left: { label: 'Quote from memory', sub: 'a price out of habit' }, right: { label: 'Calculated price', sub: 'process, layout, paper' } },
    commande: { title: 'The life of a print order, in six steps', items: [
      { label: 'Request', sub: 'format, paper, quantities, finish, date' },
      { label: 'Quote', sub: 'process, layout, price per quantity' },
      { label: 'Proof approval', sub: 'proof approved by the client, dated', accent: true },
      { label: 'Printing', sub: 'job ticket, press, paper' },
      { label: 'Finishing', sub: 'cutting, folding, stapling, laminating' },
      { label: 'Delivery', sub: 'signed note, invoice, files kept' },
    ], caption: 'Figure 1 · Six steps. The accented step is proof approval: the proof the client signs off before printing. Until it is given, nothing goes to press; once given, it says who approved what, and when.', alt: 'Six steps: request, quote, proof approval (accented), printing, finishing, delivery.' },
    quantite: { caption: 'Figure 2 · The total cost of the same flyer in offset and in digital: the two lines cross at about 1,313 copies. Fictitious amounts.' },
    couches: { title: 'What print shop software holds, in five layers', layers: [
      { label: 'Quote', items: [{ name: 'The quote: format, paper, colours, finish, and a price calculated for each quantity', sub: 'the pricing engine' }] },
      { label: 'Job ticket', items: [{ name: 'The job ticket: one record per order, with files, approved proof, instructions', sub: 'what the workshop follows, from quote to delivery', accent: true }] },
      { label: 'Schedule', items: [{ name: 'The schedule: each order on a press, on a date, with its finishing steps', sub: 'who prints what, and when' }] },
      { label: 'Paper', items: [{ name: 'Paper and consumables: stock by format and by grammage, reserved for the order', sub: 'what must be ordered before promising' }] },
      { label: 'Clients', items: [{ name: 'The clients: past orders, files kept, reorder in one gesture, invoices', sub: 'reordering without asking for everything again' }] },
    ], caption: 'Figure 3 · Five layers. The accented layer is the job ticket: the single record that travels with the order, that everyone reads, and that replaces the scrap of paper stapled to the file.', alt: 'Five layers: the quote; the job ticket (accented); the schedule; paper and consumables; the clients.' },
    travaux: { title: 'Six families of jobs: what drives the price, what the quote asks', columns: ['What drives the price', 'What the quote asks'], rows: [
      { label: 'Business cards, flyers', cells: ['the quantity and how many fit a sheet', 'format, paper, one or two sides'] },
      { label: 'Brochures, catalogues', cells: ['the page count and the binding', 'pages, cover, stapled or glued spine'] },
      { label: 'Pads, multi-part forms', cells: ['the leaves and the numbering', 'copies per set, starting number'] },
      { label: 'Labels, packaging', cells: ['the die cut and the material', 'shape, material, roll or sheet'] },
      { label: 'Posters, banners, signs', cells: ['the surface and the finish', 'dimensions, eyelets, installed or not'] },
      { label: 'Branded objects and textiles', cells: ['the marking and the colours', 'item, position, quantity per size'] },
    ], caption: 'Figure 4 · Six families of jobs. Each has its own way of being costed: a single free-text quote form fits none of them. For each family, the software asks only the questions that change the price.', alt: 'Matrix of six families of jobs: business cards and flyers, brochures and catalogues, pads and multi-part forms, labels and packaging, posters, banners and signs, branded objects and textiles; for each, what drives the price and what the quote must ask.' },
    pose: { caption: 'Figure 5 · The same A6 flyer on the same sheet: 4-up on its side, 6-up upright, that is 750 or 500 sheets for 3,000 copies. Constructed example.' },
    calendrier: { title: 'Seven weeks for a workshop followed from quote to delivery', unit: 'wk', items: [
      { label: 'Survey', note: 'your typical jobs, your presses, your papers, how you cost today', from: 0, to: 1, accent: true },
      { label: 'Pricing engine', note: 'processes, fixed costs, cost per copy, layout, finishes', from: 1, to: 3 },
      { label: 'Job ticket and proof', note: 'job record, files, proof sent and approved online', from: 2, to: 4 },
      { label: 'Schedule', note: 'presses, steps, promised dates, load of the week', from: 3, to: 5 },
      { label: 'Paper', note: 'stock by format and grammage, reservation, supplier order', from: 4, to: 6 },
      { label: 'Clients and reorders', note: 'history, files kept, reorder, delivery and invoice', from: 5, to: 7 },
    ], caption: 'Figure 6 · Seven weeks in the example, survey included. The accented period is the first: reading your past quotes to draw the pricing rules from them. Indicative durations of a constructed example.', alt: 'Seven-week calendar: survey (accented), pricing engine, job ticket and proof, schedule, paper, clients and reorders.' },
  },
  ar: {
    cover: { eyebrow: 'برنامج المطبعة · الجزائر · 2027', title: ['برنامج المطبعة', 'من عرض السعر إلى وصل التسليم'], subtitle: 'سعر محسوب لكل كمية، توضيب على الورقة، موافقة على الطبع، ملف تصنيع، وتخطيط للآلات', left: { label: 'عرض سعر من الذاكرة', sub: 'سعر بالعادة' }, right: { label: 'سعر محسوب', sub: 'الطريقة، التوضيب، والورق' } },
    commande: { title: 'حياة طلبية طباعة، في ست مراحل', items: [
      { label: 'الطلب', sub: 'القياس، الورق، الكميات، التشطيب، والتاريخ' },
      { label: 'عرض السعر', sub: 'الطريقة، التوضيب، وسعر لكل كمية' },
      { label: 'الموافقة على الطبع', sub: 'نموذج يصادق عليه الزبون، مؤرَّخ', accent: true },
      { label: 'الطباعة', sub: 'ملف التصنيع، الآلة، والورق' },
      { label: 'التشطيب', sub: 'قص، طيّ، تدبيس، وتغليف' },
      { label: 'التسليم', sub: 'وصل موقَّع، فاتورة، وملفات محفوظة' },
    ], caption: 'الشكل 1 · ست مراحل. المرحلة المبرزة هي الموافقة على الطبع: النموذج الذي يصادق عليه الزبون قبل الطباعة. ما دامت لم تُعطَ، لا شيء يذهب إلى الآلة؛ وحين تُعطى، تقول من وافق على ماذا، ومتى.', alt: 'ست مراحل: الطلب، عرض السعر، الموافقة على الطبع (مبرزة)، الطباعة، التشطيب، والتسليم.' },
    quantite: { caption: 'الشكل 2 · الكلفة الإجمالية للمطوية نفسها بالأوفست وبالرقمي: الخطان يتقاطعان قرب 1313 نسخة. مبالغ خيالية.' },
    couches: { title: 'ما يمسكه برنامج المطبعة، في خمس طبقات', layers: [
      { label: 'عرض السعر', items: [{ name: 'عرض السعر: القياس، الورق، الألوان، التشطيب، وسعر محسوب لكل كمية', sub: 'محرّك الأسعار' }] },
      { label: 'الملف', items: [{ name: 'ملف التصنيع: بطاقة لكل طلبية، مع الملفات، النموذج المصادَق عليه، والتعليمات', sub: 'ما تتابعه الورشة، من عرض السعر إلى التسليم', accent: true }] },
      { label: 'التخطيط', items: [{ name: 'التخطيط: كل طلبية على آلة، في تاريخ، مع مراحل تشطيبها', sub: 'من يطبع ماذا، ومتى' }] },
      { label: 'الورق', items: [{ name: 'الورق والمستهلكات: مخزون حسب القياس والوزن، محجوز للطلبية', sub: 'ما يجب طلبه قبل الوعد' }] },
      { label: 'الزبائن', items: [{ name: 'الزبائن: الطلبيات السابقة، الملفات المحفوظة، إعادة الطلب بحركة واحدة، والفواتير', sub: 'إعادة الطلب دون السؤال عن كل شيء من جديد' }] },
    ], caption: 'الشكل 3 · خمس طبقات. الطبقة المبرزة هي ملف التصنيع: البطاقة الوحيدة التي ترافق الطلبية، يقرؤها الجميع، وتعوّض قصاصة الورق المدبَّسة مع الملف.', alt: 'خمس طبقات: عرض السعر؛ ملف التصنيع (مبرزة)؛ التخطيط؛ الورق والمستهلكات؛ والزبائن.' },
    travaux: { title: 'ست عائلات من الأشغال: ما يصنع السعر، وما يسأل عنه عرض السعر', columns: ['ما يصنع السعر', 'ما يسأل عنه عرض السعر'], rows: [
      { label: 'بطاقات الزيارة والمطويات', cells: ['الكمية وعدد النسخ في الورقة', 'القياس، الورق، وجه أو وجهان'] },
      { label: 'الكتيّبات والكتالوغات', cells: ['عدد الصفحات والتجليد', 'الصفحات، الغلاف، تدبيس أو لصق'] },
      { label: 'الدفاتر والوصولات المتعددة النسخ', cells: ['الأوراق والترقيم', 'عدد النسخ في المجموعة، ورقم البداية'] },
      { label: 'الملصقات والتغليف', cells: ['القص بالقالب والمادة', 'الشكل، المادة، لفّة أو ورقة'] },
      { label: 'اللافتات والإعلانات الكبيرة', cells: ['المساحة والتشطيب', 'الأبعاد، الحلقات، مع التركيب أو دونه'] },
      { label: 'الأغراض والأقمشة المطبوعة', cells: ['طريقة الطبع والألوان', 'الغرض، الموضع، والكمية لكل مقاس'] },
    ], caption: 'الشكل 4 · ست عائلات من الأشغال. لكل واحدة طريقتها في التسعير: استمارة واحدة بخانات حرة لا تناسب أياً منها. والبرنامج يطرح، لكل عائلة، الأسئلة التي تغيّر السعر فقط.', alt: 'مصفوفة من ست عائلات من الأشغال: بطاقات الزيارة والمطويات، الكتيّبات والكتالوغات، الدفاتر والوصولات، الملصقات والتغليف، اللافتات والإعلانات الكبيرة، والأغراض والأقمشة المطبوعة؛ ولكل واحدة، ما يصنع السعر وما يسأل عنه عرض السعر.' },
    pose: { caption: 'الشكل 5 · المطوية نفسها على الورقة نفسها: 4 نسخ مستلقية، 6 نسخ واقفة، أي 750 أو 500 ورقة لـ3000 نسخة. مثال مركَّب.' },
    calendrier: { title: 'سبعة أسابيع لورشة متابَعة من عرض السعر إلى التسليم', unit: 'أسبوع', items: [
      { label: 'المعاينة', note: 'أشغالكم المعتادة، آلاتكم، أوراقكم، وطريقتكم في التسعير اليوم', from: 0, to: 1, accent: true },
      { label: 'محرّك الأسعار', note: 'الطرق، المصاريف الثابتة، كلفة النسخة، التوضيب، والتشطيبات', from: 1, to: 3 },
      { label: 'الملف والموافقة', note: 'بطاقة التصنيع، الملفات، ونموذج يُرسَل ويُصادَق عليه عبر الإنترنت', from: 2, to: 4 },
      { label: 'التخطيط', note: 'الآلات، المراحل، التواريخ الموعودة، وحِمل الأسبوع', from: 3, to: 5 },
      { label: 'الورق', note: 'مخزون حسب القياس والوزن، الحجز، والطلب من المورّد', from: 4, to: 6 },
      { label: 'الزبائن وإعادة الطلب', note: 'السجل، الملفات المحفوظة، إعادة الطلب، التسليم والفاتورة', from: 5, to: 7 },
    ], caption: 'الشكل 6 · سبعة أسابيع في المثال، المعاينة منها. الفترة المبرزة هي الأولى: قراءة عروض أسعاركم السابقة لاستخراج قواعد السعر منها. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من سبعة أسابيع: المعاينة (مبرزة)، محرّك الأسعار، الملف والموافقة، التخطيط، الورق، ثم الزبائن وإعادة الطلب.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      commande: { svg: steps({ title: t.commande.title, steps: t.commande.items, arrows: true, rtl }), caption: t.commande.caption, alt: t.commande.alt },
      quantite: { svg: quantite(e.quantite, rtl), caption: t.quantite.caption, alt: e.quantite.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      travaux: { svg: matrix({ title: t.travaux.title, columns: t.travaux.columns, rows: t.travaux.rows, rtl }), caption: t.travaux.caption, alt: t.travaux.alt },
      pose: { svg: pose(e.pose, rtl), caption: t.pose.caption, alt: e.pose.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 7, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
