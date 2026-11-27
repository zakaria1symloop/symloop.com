import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { revient, anciennete, STRINGS as SC } from './custom/showroom.mjs';
export const slug = 'logiciel-gestion-showroom-automobile-algerie-2027-fiche-par-chassis-prix-de-revient-reservations-versements-jours-en-stock-marge-par-vehicule';
const T = {
  fr: {
    cover: { eyebrow: 'Showroom automobile · Algérie · 2027', title: ['Logiciel de showroom automobile :', 'la marge réelle, véhicule par véhicule'], subtitle: 'Fiche par numéro de châssis, prix de revient, réservations, versements, jours en stock, livraison', left: { label: 'Vendu après 130 jours', sub: '35 000 DA de marge' }, right: { label: 'Vendu en 20 jours', sub: '160 000 DA de marge' } },
    vente: { title: 'Une vente, en six temps', items: [
      { label: 'Entrée en stock', sub: 'châssis, prix d’achat, photos, emplacement' },
      { label: 'Préparation', sub: 'chaque frais rattaché au véhicule' },
      { label: 'Mise en vente', sub: 'prix affiché, remise maximale connue' },
      { label: 'Réservation', sub: 'acompte, date limite, un seul client', accent: true },
      { label: 'Versements', sub: 'reçus, solde restant, relances' },
      { label: 'Livraison', sub: 'dossier complet, remise des clés' },
    ], caption: 'Figure 1 · Six temps. Le temps accentué est la réservation : c’est là qu’un véhicule est promis à un client, et c’est là qu’il ne doit l’être qu’une fois.', alt: 'Six temps : entrée en stock, préparation, mise en vente, réservation (accentuée), versements, livraison.' },
    revient: { caption: 'Figure 2 · Deux véhicules achetés 2 900 000 dinars et affichés 3 250 000 : l’un laisse 160 000 dinars de marge réelle, l’autre 35 000. Prix, frais et remises fictifs.' },
    couches: { title: 'Ce qu’il y a dans un logiciel de showroom, en cinq couches', layers: [
      { label: 'Véhicules', items: [{ name: 'La fiche véhicule : numéro de châssis, marque, modèle, année, kilométrage, couleur, photos, emplacement', sub: 'un véhicule, une fiche' }] },
      { label: 'Revient', items: [{ name: 'Le prix de revient : le prix d’achat, plus chaque frais rattaché au châssis, transport, préparation, pièces', sub: 'ce que le véhicule a vraiment coûté', accent: true }] },
      { label: 'Ventes', items: [{ name: 'Les réservations et les versements : acompte, date limite, reçus, solde restant, un seul client par véhicule', sub: 'qui a payé quoi, pour quel véhicule' }] },
      { label: 'Dossier', items: [{ name: 'Le dossier : les pièces du véhicule et de la vente dans une liste à cocher, et la livraison une fois complète', sub: 'rien ne sort incomplet' }] },
      { label: 'Chiffres', items: [{ name: 'Les chiffres : jours en stock, marge par véhicule, valeur du stock, ventes par commercial', sub: 'ce que le stock rapporte et ce qu’il immobilise' }] },
    ], caption: 'Figure 3 · Cinq couches. La couche accentuée est le prix de revient : sans lui, la marge par véhicule et la remise acceptable ne sont que des impressions.', alt: 'Cinq couches : la fiche véhicule ; le prix de revient (accentué) ; les réservations et les versements ; le dossier ; les chiffres.' },
    anciennete: { caption: 'Figure 4 · Quarante véhicules selon leurs jours en stock : 8 ont plus de 90 jours et immobilisent 24 800 000 dinars, un cinquième du stock. Valeurs fictives.' },
    calendrier: { title: 'Sept semaines, en reprenant le stock présent', unit: 'sem.', items: [
      { label: 'Cadrage', note: 'vos véhicules, vos frais habituels, vos règles de réservation, les pièces d’un dossier', from: 0, to: 1, accent: true },
      { label: 'Fiches et reprise du stock', note: 'saisie par numéro de châssis, photos, emplacement, date d’entrée réelle', from: 1, to: 3 },
      { label: 'Prix de revient', note: 'frais rattachés au véhicule, remise maximale, marge avant la vente', from: 2, to: 4 },
      { label: 'Réservations et versements', note: 'acompte, date limite, reçus, solde, relances', from: 3, to: 5 },
      { label: 'Dossier et livraison', note: 'liste à cocher des pièces, bon de livraison, archivage', from: 4, to: 6 },
      { label: 'Tableau de bord et mise en service', note: 'jours en stock, marge par véhicule, formation de l’équipe', from: 5, to: 7 },
    ], caption: 'Figure 5 · Sept semaines dans l’exemple. La période accentuée est la première ; le stock présent est repris véhicule par véhicule, avec les frais déjà engagés quand ils sont connus. Durées indicatives d’un exemple construit.', alt: 'Calendrier de sept semaines : cadrage (accentué), fiches et reprise du stock, prix de revient, réservations et versements, dossier et livraison, tableau de bord et mise en service.' },
    tailles: { title: 'D’un seul parc à plusieurs showrooms : ce qui change', columns: ['Ce qui change', 'Ce que le logiciel ajoute'], rows: [
      { label: 'Un showroom, un seul parc', cells: ['tout le stock est sous les yeux', 'prix de revient, réservations, versements'] },
      { label: 'Un showroom et un dépôt', cells: ['on ne sait plus où est chaque véhicule', 'emplacement par véhicule, transferts tracés'] },
      { label: 'Plusieurs showrooms', cells: ['le même véhicule est proposé à deux endroits', 'stock commun, réservation visible partout'] },
      { label: 'Des reprises et de l’occasion', cells: ['chaque véhicule a son histoire et ses frais', 'reprise liée à la vente, frais de remise en état'] },
      { label: 'Du dépôt-vente', cells: ['le véhicule appartient à un tiers', 'compte du déposant, commission, reversement'] },
    ], caption: 'Figure 6 · Cinq situations. La fiche par numéro de châssis sert partout ; ce qui change, c’est le nombre de lieux où se trouve le stock, et à qui appartient le véhicule.', alt: 'Matrice de cinq situations : un seul parc, un showroom et un dépôt, plusieurs showrooms, des reprises et de l’occasion, du dépôt-vente ; pour chacune, ce qui change et ce que le logiciel ajoute.' },
  },
  en: {
    cover: { eyebrow: 'Car showroom · Algeria · 2027', title: ['Car showroom software:', 'the real margin, vehicle by vehicle'], subtitle: 'A record per chassis number, cost price, reservations, payments, days in stock, delivery', left: { label: 'Sold after 130 days', sub: 'DA 35,000 of margin' }, right: { label: 'Sold in 20 days', sub: 'DA 160,000 of margin' } },
    vente: { title: 'A sale, in six steps', items: [
      { label: 'Stock entry', sub: 'chassis, purchase price, photos, location' },
      { label: 'Preparation', sub: 'every cost attached to the vehicle' },
      { label: 'Put on sale', sub: 'listed price, known maximum discount' },
      { label: 'Reservation', sub: 'deposit, deadline, one customer only', accent: true },
      { label: 'Payments', sub: 'receipts, balance due, reminders' },
      { label: 'Delivery', sub: 'complete file, keys handed over' },
    ], caption: 'Figure 1 · Six steps. The accented step is the reservation: that is where a vehicle is promised to a customer, and where it must be promised only once.', alt: 'Six steps: stock entry, preparation, put on sale, reservation (accented), payments, delivery.' },
    revient: { caption: 'Figure 2 · Two vehicles bought at 2,900,000 dinars and listed at 3,250,000: one leaves 160,000 dinars of real margin, the other 35,000. Fictitious prices, costs and discounts.' },
    couches: { title: 'What is inside showroom software, in five layers', layers: [
      { label: 'Vehicles', items: [{ name: 'The vehicle record: chassis number, make, model, year, mileage, colour, photos, location', sub: 'one vehicle, one record' }] },
      { label: 'Cost price', items: [{ name: 'The cost price: the purchase price, plus every cost attached to the chassis, transport, preparation, parts', sub: 'what the vehicle really cost', accent: true }] },
      { label: 'Sales', items: [{ name: 'Reservations and payments: deposit, deadline, receipts, balance due, one customer per vehicle', sub: 'who paid what, for which vehicle' }] },
      { label: 'File', items: [{ name: 'The file: the vehicle’s and the sale’s documents in a checklist, and delivery once it is complete', sub: 'nothing leaves incomplete' }] },
      { label: 'Figures', items: [{ name: 'The figures: days in stock, margin per vehicle, stock value, sales per salesperson', sub: 'what the stock earns and what it ties up' }] },
    ], caption: 'Figure 3 · Five layers. The accented layer is the cost price: without it, the margin per vehicle and the acceptable discount are only impressions.', alt: 'Five layers: the vehicle record; the cost price (accented); reservations and payments; the file; the figures.' },
    anciennete: { caption: 'Figure 4 · Forty vehicles by their days in stock: 8 are over 90 days old and tie up 24,800,000 dinars, a fifth of the stock. Fictitious values.' },
    calendrier: { title: 'Seven weeks, taking over the stock on hand', unit: 'wk', items: [
      { label: 'Scoping', note: 'your vehicles, your usual costs, your reservation rules, the documents of a file', from: 0, to: 1, accent: true },
      { label: 'Records and stock take-over', note: 'entry by chassis number, photos, location, real entry date', from: 1, to: 3 },
      { label: 'Cost price', note: 'costs attached to the vehicle, maximum discount, margin before the sale', from: 2, to: 4 },
      { label: 'Reservations and payments', note: 'deposit, deadline, receipts, balance, reminders', from: 3, to: 5 },
      { label: 'File and delivery', note: 'document checklist, delivery note, archiving', from: 4, to: 6 },
      { label: 'Dashboard and go-live', note: 'days in stock, margin per vehicle, team training', from: 5, to: 7 },
    ], caption: 'Figure 5 · Seven weeks in the example. The accented period is the first; the stock on hand is taken over vehicle by vehicle, with the costs already incurred when they are known. Indicative durations of a constructed example.', alt: 'Seven-week calendar: scoping (accented), records and stock take-over, cost price, reservations and payments, file and delivery, dashboard and go-live.' },
    tailles: { title: 'From a single lot to several showrooms: what changes', columns: ['What changes', 'What the software adds'], rows: [
      { label: 'One showroom, a single lot', cells: ['the whole stock is in plain sight', 'cost price, reservations, payments'] },
      { label: 'A showroom and a depot', cells: ['nobody knows where each vehicle is', 'location per vehicle, traced transfers'] },
      { label: 'Several showrooms', cells: ['the same vehicle is offered in two places', 'shared stock, reservation visible everywhere'] },
      { label: 'Trade-ins and used vehicles', cells: ['each vehicle has its history and its costs', 'trade-in linked to the sale, reconditioning costs'] },
      { label: 'Consignment sales', cells: ['the vehicle belongs to a third party', 'consignor’s account, commission, payout'] },
    ], caption: 'Figure 6 · Five situations. The record per chassis number serves everywhere; what changes is the number of places where the stock sits, and who owns the vehicle.', alt: 'Matrix of five situations: a single lot, a showroom and a depot, several showrooms, trade-ins and used vehicles, consignment sales; for each, what changes and what the software adds.' },
  },
  ar: {
    cover: { eyebrow: 'معرض السيارات · الجزائر · 2027', title: ['برنامج معرض السيارات:', 'الهامش الحقيقي، سيارة بسيارة'], subtitle: 'بطاقة برقم الهيكل، سعر التكلفة، الحجوزات، الدفعات، الأيام في المخزون، والتسليم', left: { label: 'بيعت بعد 130 يوماً', sub: '⁦35 000⁩ دج هامشاً' }, right: { label: 'بيعت في 20 يوماً', sub: '⁦160 000⁩ دج هامشاً' } },
    vente: { title: 'بيع، في ست مراحل', items: [
      { label: 'دخول المخزون', sub: 'الهيكل، سعر الشراء، الصور، والموقع' },
      { label: 'التحضير', sub: 'كل مصروف مربوط بالسيارة' },
      { label: 'العرض للبيع', sub: 'السعر المعروض، وأقصى تخفيض معروف' },
      { label: 'الحجز', sub: 'عربون، أجل، وزبون واحد فقط', accent: true },
      { label: 'الدفعات', sub: 'وصولات، الباقي، وتذكير' },
      { label: 'التسليم', sub: 'ملف كامل، وتسليم المفاتيح' },
    ], caption: 'الشكل 1 · ست مراحل. المرحلة المبرزة هي الحجز: فيها تُوعَد السيارة لزبون، وفيها يجب ألا تُوعَد إلا مرة واحدة.', alt: 'ست مراحل: دخول المخزون، التحضير، العرض للبيع، الحجز (مبرز)، الدفعات، والتسليم.' },
    revient: { caption: 'الشكل 2 · سيارتان اشتُريتا وعُرضتا بالسعر نفسه: واحدة تترك 160 ألف دينار هامشاً حقيقياً، والأخرى 35 ألفاً. أسعار ومصاريف وتخفيضات خيالية.' },
    couches: { title: 'ما يوجد في برنامج معرض السيارات، في خمس طبقات', layers: [
      { label: 'السيارات', items: [{ name: 'بطاقة السيارة: رقم الهيكل، العلامة، الطراز، السنة، العدّاد، اللون، الصور، والموقع', sub: 'سيارة واحدة، بطاقة واحدة' }] },
      { label: 'التكلفة', items: [{ name: 'سعر التكلفة: سعر الشراء، زائد كل مصروف مربوط بالهيكل، النقل، التحضير، والقطع', sub: 'ما كلّفته السيارة فعلاً', accent: true }] },
      { label: 'المبيعات', items: [{ name: 'الحجوزات والدفعات: العربون، الأجل، الوصولات، الباقي، وزبون واحد لكل سيارة', sub: 'من دفع ماذا، ولأي سيارة' }] },
      { label: 'الملف', items: [{ name: 'الملف: وثائق السيارة والبيع في قائمة تأشير، والتسليم حين يكتمل', sub: 'لا شيء يخرج ناقصاً' }] },
      { label: 'الأرقام', items: [{ name: 'الأرقام: الأيام في المخزون، الهامش لكل سيارة، قيمة المخزون، والمبيعات لكل بائع', sub: 'ما يربحه المخزون وما يجمّده' }] },
    ], caption: 'الشكل 3 · خمس طبقات. الطبقة المبرزة هي سعر التكلفة: دونه، الهامش لكل سيارة والتخفيض المقبول ليسا إلا انطباعات.', alt: 'خمس طبقات: بطاقة السيارة؛ سعر التكلفة (مبرز)؛ الحجوزات والدفعات؛ الملف؛ والأرقام.' },
    anciennete: { caption: 'الشكل 4 · أربعون سيارة حسب أيامها في المخزون: 8 منها تجاوزت 90 يوماً وتجمّد 24,8 مليون دينار، خُمس المخزون. قيم خيالية.' },
    calendrier: { title: 'سبعة أسابيع، مع إدخال المخزون الحاضر', unit: 'أسبوع', items: [
      { label: 'التأطير', note: 'سياراتكم، مصاريفكم المعتادة، قواعد الحجز عندكم، ووثائق الملف', from: 0, to: 1, accent: true },
      { label: 'البطاقات وإدخال المخزون', note: 'إدخال برقم الهيكل، الصور، الموقع، وتاريخ الدخول الفعلي', from: 1, to: 3 },
      { label: 'سعر التكلفة', note: 'مصاريف مربوطة بالسيارة، أقصى تخفيض، والهامش قبل البيع', from: 2, to: 4 },
      { label: 'الحجوزات والدفعات', note: 'العربون، الأجل، الوصولات، الباقي، والتذكير', from: 3, to: 5 },
      { label: 'الملف والتسليم', note: 'قائمة تأشير للوثائق، وصل التسليم، والأرشفة', from: 4, to: 6 },
      { label: 'لوحة القيادة والتشغيل', note: 'الأيام في المخزون، الهامش لكل سيارة، وتكوين الفريق', from: 5, to: 7 },
    ], caption: 'الشكل 5 · سبعة أسابيع في المثال. الفترة المبرزة هي الأولى؛ والمخزون الحاضر يُدخَل سيارة بسيارة، مع المصاريف المنفقة من قبل حين تُعرف. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من سبعة أسابيع: التأطير (مبرز)، البطاقات وإدخال المخزون، سعر التكلفة، الحجوزات والدفعات، الملف والتسليم، ثم لوحة القيادة والتشغيل.' },
    tailles: { title: 'من حظيرة واحدة إلى عدة معارض: ما يتغيّر', columns: ['ما يتغيّر', 'ما يضيفه البرنامج'], rows: [
      { label: 'معرض واحد، وحظيرة واحدة', cells: ['كل المخزون أمام العين', 'سعر التكلفة، الحجوزات، والدفعات'] },
      { label: 'معرض ومستودع', cells: ['لا يُعرف أين توجد كل سيارة', 'موقع لكل سيارة، وتحويلات موثَّقة'] },
      { label: 'عدة معارض', cells: ['السيارة نفسها تُعرض في مكانين', 'مخزون مشترك، وحجز يُرى في كل مكان'] },
      { label: 'استبدال وسيارات مستعملة', cells: ['لكل سيارة تاريخها ومصاريفها', 'السيارة المأخوذة مربوطة بالبيع، ومصاريف التهيئة'] },
      { label: 'بيع لحساب الغير', cells: ['السيارة ملك لطرف آخر', 'حساب المودِع، العمولة، والتحويل له'] },
    ], caption: 'الشكل 6 · خمس حالات. البطاقة برقم الهيكل تخدم في كل مكان؛ وما يتغيّر هو عدد الأماكن التي يوجد فيها المخزون، ومن يملك السيارة.', alt: 'مصفوفة من خمس حالات: حظيرة واحدة، معرض ومستودع، عدة معارض، استبدال وسيارات مستعملة، وبيع لحساب الغير؛ ولكل واحدة، ما يتغيّر وما يضيفه البرنامج.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      vente: { svg: steps({ title: t.vente.title, steps: t.vente.items, arrows: true, rtl }), caption: t.vente.caption, alt: t.vente.alt },
      revient: { svg: revient(e.revient, rtl), caption: t.revient.caption, alt: e.revient.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      anciennete: { svg: anciennete(e.anciennete, rtl), caption: t.anciennete.caption, alt: e.anciennete.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 7, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      tailles: { svg: matrix({ title: t.tailles.title, columns: t.tailles.columns, rows: t.tailles.rows, rtl }), caption: t.tailles.caption, alt: t.tailles.alt },
    },
  };
}
