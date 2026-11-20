import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { planning, revpar, STRINGS as SC } from './custom/hotel.mjs';
export const slug = 'logiciel-de-gestion-hoteliere-algerie-2027-planning-des-chambres-reservations-sans-double-vente-arrivees-departs-menage-cloture-de-nuit';
const T = {
  fr: {
    cover: { eyebrow: 'Gestion hôtelière · Algérie · 2027', title: ['Logiciel de gestion hôtelière :', 'une chambre, une nuit, un seul client'], subtitle: 'Planning des chambres, réservations de tous les canaux, arrivées, départs, étages, clôture de nuit', left: { label: '90 % occupé', sub: '7 200 DA par chambre' }, right: { label: '77 % occupé', sub: '7 757 DA par chambre' } },
    couches: { title: 'Ce qu’il y a dans un logiciel de gestion hôtelière, en cinq couches', layers: [
      { label: 'Planning', items: [{ name: 'Le planning : chambres, types, tarifs par période, réservations de tous les canaux sur un seul tableau', sub: 'ce qui est vendu, et ce qui reste', accent: true }] },
      { label: 'Réception', items: [{ name: 'La réception : arrivées et départs du jour, fiche du client, attribution de la chambre, clés', sub: 'ce qui se passe au comptoir' }] },
      { label: 'Compte client', items: [{ name: 'Le compte du client : nuitées, restaurant, extras, acomptes, facture au départ', sub: 'ce qui est dû, et ce qui est payé' }] },
      { label: 'Étages', items: [{ name: 'Les étages : chambres à faire, en cours, prêtes, hors service, signalées depuis le téléphone', sub: 'ce que voit le service de chambres' }] },
      { label: 'Clôture', items: [{ name: 'La clôture : recettes du jour, occupation, prix moyen, recette par chambre disponible', sub: 'ce que la direction lit le matin' }] },
    ], caption: 'Figure 1 · Cinq couches. La couche accentuée est le planning : c’est l’inventaire de l’hôtel, et il se périme chaque soir. Tout le reste part de lui.', alt: 'Cinq couches : le planning (accentué) ; la réception ; le compte du client ; les étages ; la clôture.' },
    planning: { caption: 'Figure 2 · Huit chambres sur quatorze nuits : 97 nuitées vendues sur 112, et cinq nuits isolées entre deux séjours. Exemple construit.' },
    revpar: { caption: 'Figure 3 · Deux semaines d’un hôtel de 40 chambres : 77 % d’occupation à 10 056 DA rapportent plus que 90 % à 8 000 DA. Prix fictifs.' },
    canaux: { title: 'Cinq canaux de réservation : comment la réservation entre, ce qu’on suit', columns: ['Comment elle entre', 'Ce qu’on suit'], rows: [
      { label: 'Le téléphone et le message', cells: ['saisie par la réception, en direct', 'acompte demandé, confirmation envoyée'] },
      { label: 'Le comptoir', cells: ['client sur place, chambre attribuée', 'pièce d’identité, paiement à l’arrivée'] },
      { label: 'Les agences et les entreprises', cells: ['bon de commande, liste de noms', 'tarif négocié, compte à facturer'] },
      { label: 'Le site de l’hôtel', cells: ['réservation en ligne, sans intermédiaire', 'paiement ou garantie, annulation'] },
      { label: 'Les plateformes de réservation', cells: ['disponibilités envoyées, réservations reçues', 'commission, écarts de disponibilité'] },
    ], caption: 'Figure 4 · Cinq canaux, un seul planning. Le risque n’est pas d’avoir plusieurs canaux : c’est que chacun ait son propre cahier, et que la même chambre soit vendue deux fois.', alt: 'Matrice de cinq canaux de réservation : le téléphone et le message, le comptoir, les agences et les entreprises, le site de l’hôtel, les plateformes de réservation ; pour chacun, comment la réservation entre et ce qu’on suit.' },
    sejour: { title: 'Un séjour, en six temps', items: [
      { label: 'Réservation', sub: 'dates, type de chambre, tarif, acompte' },
      { label: 'Arrivée', sub: 'fiche du client, chambre attribuée' },
      { label: 'Séjour', sub: 'extras portés sur le compte', accent: true },
      { label: 'Départ', sub: 'facture, solde, chambre libérée' },
      { label: 'Remise en état', sub: 'à faire, en cours, prête' },
      { label: 'Clôture', sub: 'la nuit est comptée' },
    ], caption: 'Figure 5 · Six temps. Le temps accentué est le séjour : chaque repas, chaque service doit arriver sur le compte du client avant son départ, pas après.', alt: 'Six temps : réservation, arrivée, séjour (accentué), départ, remise en état, clôture.' },
    calendrier: { title: 'Huit semaines pour un hôtel', unit: 'sem.', items: [
      { label: 'Cadrage', note: 'les chambres et leurs types, les tarifs par période, les canaux, ce qui existe déjà', from: 0, to: 1, accent: true },
      { label: 'Planning et réservations', note: 'tableau des chambres, tarifs, acomptes, confirmations', from: 1, to: 4 },
      { label: 'Réception', note: 'arrivées, départs, fiche du client, attribution, changement de chambre', from: 2, to: 5 },
      { label: 'Compte client et facture', note: 'nuitées, extras du restaurant et des services, encaissements, facture', from: 3, to: 6 },
      { label: 'Étages', note: 'état des chambres sur téléphone, signalements, chambres hors service', from: 4, to: 7 },
      { label: 'Clôture et mise en service', note: 'clôture de nuit, indicateurs, formation de la réception, première semaine réelle', from: 6, to: 8 },
    ], caption: 'Figure 6 · Huit semaines dans l’exemple, pour un hôtel. La période accentuée est la première : on fixe les types de chambres et les périodes tarifaires avant tout, parce que le planning en dépend. Durées indicatives d’un exemple construit.', alt: 'Calendrier de huit semaines : cadrage (accentué), planning et réservations, réception, compte client et facture, étages, clôture et mise en service.' },
  },
  en: {
    cover: { eyebrow: 'Hotel management · Algeria · 2027', title: ['Hotel management software:', 'one room, one night, one guest'], subtitle: 'Room planning, reservations from every channel, arrivals, departures, housekeeping, night closing', left: { label: '90% occupied', sub: 'DA 7,200 per room' }, right: { label: '77% occupied', sub: 'DA 7,757 per room' } },
    couches: { title: 'What is inside hotel management software, in five layers', layers: [
      { label: 'Planning', items: [{ name: 'The planning board: rooms, types, rates by period, reservations from every channel on one board', sub: 'what is sold, and what is left', accent: true }] },
      { label: 'Reception', items: [{ name: 'Reception: the day’s arrivals and departures, the guest record, room assignment, keys', sub: 'what happens at the desk' }] },
      { label: 'Guest account', items: [{ name: 'The guest account: room-nights, restaurant, extras, deposits, invoice at departure', sub: 'what is owed, and what is paid' }] },
      { label: 'Housekeeping', items: [{ name: 'Housekeeping: rooms to do, in progress, ready, out of order, reported from the phone', sub: 'what the room staff see' }] },
      { label: 'Closing', items: [{ name: 'Closing: the day’s takings, occupancy, average price, revenue per available room', sub: 'what management reads in the morning' }] },
    ], caption: 'Figure 1 · Five layers. The accented layer is the planning board: it is the hotel’s inventory, and it expires every evening. Everything else starts from it.', alt: 'Five layers: the planning board (accented); reception; the guest account; housekeeping; closing.' },
    planning: { caption: 'Figure 2 · Eight rooms over fourteen nights: 97 room-nights sold out of 112, and five nights isolated between two stays. Constructed example.' },
    revpar: { caption: 'Figure 3 · Two weeks of a 40-room hotel: 77% occupancy at DA 10,056 earns more than 90% at DA 8,000. Fictitious prices.' },
    canaux: { title: 'Five booking channels: how the reservation comes in, what is tracked', columns: ['How it comes in', 'What is tracked'], rows: [
      { label: 'Phone and messages', cells: ['entered by reception, live', 'deposit requested, confirmation sent'] },
      { label: 'The desk', cells: ['guest on the spot, room assigned', 'identity document, payment on arrival'] },
      { label: 'Agencies and companies', cells: ['purchase order, list of names', 'negotiated rate, account to invoice'] },
      { label: 'The hotel’s own website', cells: ['online booking, no intermediary', 'payment or guarantee, cancellation'] },
      { label: 'Booking platforms', cells: ['availability sent, reservations received', 'commission, availability gaps'] },
    ], caption: 'Figure 4 · Five channels, a single board. The risk is not having several channels: it is each one having its own ledger, and the same room being sold twice.', alt: 'Matrix of five booking channels: phone and messages, the desk, agencies and companies, the hotel’s own website, booking platforms; for each, how the reservation comes in and what is tracked.' },
    sejour: { title: 'A stay, in six steps', items: [
      { label: 'Reservation', sub: 'dates, room type, rate, deposit' },
      { label: 'Arrival', sub: 'guest record, room assigned' },
      { label: 'Stay', sub: 'extras posted to the account', accent: true },
      { label: 'Departure', sub: 'invoice, balance, room released' },
      { label: 'Turnaround', sub: 'to do, in progress, ready' },
      { label: 'Closing', sub: 'the night is counted' },
    ], caption: 'Figure 5 · Six steps. The accented step is the stay: every meal, every service has to reach the guest’s account before departure, not after.', alt: 'Six steps: reservation, arrival, stay (accented), departure, turnaround, closing.' },
    calendrier: { title: 'Eight weeks for a hotel', unit: 'wk', items: [
      { label: 'Scoping', note: 'the rooms and their types, rates by period, the channels, what already exists', from: 0, to: 1, accent: true },
      { label: 'Planning and reservations', note: 'room board, rates, deposits, confirmations', from: 1, to: 4 },
      { label: 'Reception', note: 'arrivals, departures, guest record, assignment, room change', from: 2, to: 5 },
      { label: 'Guest account and invoice', note: 'room-nights, restaurant and service extras, payments, invoice', from: 3, to: 6 },
      { label: 'Housekeeping', note: 'room status on the phone, reports, rooms out of order', from: 4, to: 7 },
      { label: 'Closing and go-live', note: 'night closing, indicators, reception training, first real week', from: 6, to: 8 },
    ], caption: 'Figure 6 · Eight weeks in the example, for one hotel. The accented period is the first: room types and rate periods are fixed before anything else, because the planning board depends on them. Indicative durations of a constructed example.', alt: 'Eight-week calendar: scoping (accented), planning and reservations, reception, guest account and invoice, housekeeping, closing and go-live.' },
  },
  ar: {
    cover: { eyebrow: 'تسيير الفنادق · الجزائر · 2027', title: ['برنامج تسيير الفندق:', 'غرفة، ليلة، ونزيل واحد'], subtitle: 'مخطط الغرف، الحجوزات من كل القنوات، الوصول، المغادرة، الطوابق، وإغلاق الليلة', left: { label: 'إشغال 90 بالمئة', sub: '⁦7 200⁩ دج للغرفة' }, right: { label: 'إشغال 77 بالمئة', sub: '⁦7 757⁩ دج للغرفة' } },
    couches: { title: 'ما يوجد في برنامج تسيير الفندق، في خمس طبقات', layers: [
      { label: 'المخطط', items: [{ name: 'المخطط: الغرف، أنواعها، الأسعار حسب الفترة، وحجوزات كل القنوات على لوحة واحدة', sub: 'ما بيع، وما بقي', accent: true }] },
      { label: 'الاستقبال', items: [{ name: 'الاستقبال: وصول ومغادرة اليوم، بطاقة النزيل، إسناد الغرفة، والمفاتيح', sub: 'ما يجري عند المنضدة' }] },
      { label: 'حساب النزيل', items: [{ name: 'حساب النزيل: الليالي، المطعم، الإضافات، العرابين، والفاتورة عند المغادرة', sub: 'ما هو مستحق، وما دُفع' }] },
      { label: 'الطوابق', items: [{ name: 'الطوابق: غرف للتحضير، جارية، جاهزة، خارج الخدمة، ومبلَّغ عنها من الهاتف', sub: 'ما يراه عمال الغرف' }] },
      { label: 'الإغلاق', items: [{ name: 'الإغلاق: مداخيل اليوم، الإشغال، متوسط السعر، والمدخول لكل غرفة متاحة', sub: 'ما تقرؤه الإدارة صباحاً' }] },
    ], caption: 'الشكل 1 · خمس طبقات. الطبقة المبرزة هي المخطط: هو مخزون الفندق، وينتهي كل مساء. وكل الباقي ينطلق منه.', alt: 'خمس طبقات: المخطط (مبرز)؛ الاستقبال؛ حساب النزيل؛ الطوابق؛ والإغلاق.' },
    planning: { caption: 'الشكل 2 · ثماني غرف على أربع عشرة ليلة: 97 ليلة مباعة من 112، وخمس ليالٍ معزولة بين إقامتين. مثال مركَّب.' },
    revpar: { caption: 'الشكل 3 · أسبوعان لفندق من 40 غرفة: إشغال بنسبة 77 بالمئة بمتوسط 10056 ديناراً يربح أكثر من 90 بالمئة بمتوسط 8000 دينار. أسعار خيالية.' },
    canaux: { title: 'خمس قنوات للحجز: كيف يدخل الحجز، وما يُتابَع', columns: ['كيف يدخل', 'ما يُتابَع'], rows: [
      { label: 'الهاتف والرسائل', cells: ['يُدخله الاستقبال، مباشرة', 'عربون مطلوب، وتأكيد مرسَل'] },
      { label: 'المنضدة', cells: ['نزيل في المكان، وغرفة تُسنَد', 'وثيقة الهوية، والدفع عند الوصول'] },
      { label: 'الوكالات والمؤسسات', cells: ['سند طلب، وقائمة أسماء', 'سعر متفاوَض عليه، وحساب يُفوتَر'] },
      { label: 'موقع الفندق', cells: ['حجز عبر الإنترنت، دون وسيط', 'دفع أو ضمان، وإلغاء'] },
      { label: 'منصات الحجز', cells: ['توافر مرسَل، وحجوزات مستلَمة', 'عمولة، وفروق التوافر'] },
    ], caption: 'الشكل 4 · خمس قنوات، ومخطط واحد. الخطر ليس في تعدد القنوات: بل في أن يكون لكل واحدة دفترها، وأن تُباع الغرفة نفسها مرتين.', alt: 'مصفوفة من خمس قنوات للحجز: الهاتف والرسائل، المنضدة، الوكالات والمؤسسات، موقع الفندق، ومنصات الحجز؛ ولكل واحدة، كيف يدخل الحجز وما يُتابَع.' },
    sejour: { title: 'إقامة، في ست مراحل', items: [
      { label: 'الحجز', sub: 'التواريخ، نوع الغرفة، السعر، والعربون' },
      { label: 'الوصول', sub: 'بطاقة النزيل، وغرفة تُسنَد' },
      { label: 'الإقامة', sub: 'الإضافات تُحمَل على الحساب', accent: true },
      { label: 'المغادرة', sub: 'فاتورة، رصيد، وغرفة تُحرَّر' },
      { label: 'إعادة التهيئة', sub: 'للتحضير، جارية، ثم جاهزة' },
      { label: 'الإغلاق', sub: 'الليلة تُحسب' },
    ], caption: 'الشكل 5 · ست مراحل. المرحلة المبرزة هي الإقامة: كل وجبة وكل خدمة يجب أن تصل إلى حساب النزيل قبل مغادرته، لا بعدها.', alt: 'ست مراحل: الحجز، الوصول، الإقامة (مبرزة)، المغادرة، إعادة التهيئة، والإغلاق.' },
    calendrier: { title: 'ثمانية أسابيع لفندق', unit: 'أسبوع', items: [
      { label: 'التأطير', note: 'الغرف وأنواعها، الأسعار حسب الفترة، القنوات، وما هو موجود', from: 0, to: 1, accent: true },
      { label: 'المخطط والحجوزات', note: 'لوحة الغرف، الأسعار، العرابين، والتأكيدات', from: 1, to: 4 },
      { label: 'الاستقبال', note: 'الوصول، المغادرة، بطاقة النزيل، الإسناد، وتغيير الغرفة', from: 2, to: 5 },
      { label: 'حساب النزيل والفاتورة', note: 'الليالي، إضافات المطعم والخدمات، التحصيلات، والفاتورة', from: 3, to: 6 },
      { label: 'الطوابق', note: 'حالة الغرف على الهاتف، التبليغات، والغرف خارج الخدمة', from: 4, to: 7 },
      { label: 'الإغلاق والتشغيل', note: 'إغلاق الليلة، المؤشرات، تكوين الاستقبال، وأول أسبوع حقيقي', from: 6, to: 8 },
    ], caption: 'الشكل 6 · ثمانية أسابيع في المثال، لفندق واحد. الفترة المبرزة هي الأولى: تُحدَّد أنواع الغرف والفترات السعرية قبل كل شيء، لأن المخطط يتوقف عليها. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من ثمانية أسابيع: التأطير (مبرز)، المخطط والحجوزات، الاستقبال، حساب النزيل والفاتورة، الطوابق، ثم الإغلاق والتشغيل.' },
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
      planning: { svg: planning(e.planning, rtl), caption: t.planning.caption, alt: e.planning.alt },
      revpar: { svg: revpar(e.revpar, rtl), caption: t.revpar.caption, alt: e.revpar.alt },
      canaux: { svg: matrix({ title: t.canaux.title, columns: t.canaux.columns, rows: t.canaux.rows, rtl }), caption: t.canaux.caption, alt: t.canaux.alt },
      sejour: { svg: steps({ title: t.sejour.title, steps: t.sejour.items, arrows: true, rtl }), caption: t.sejour.caption, alt: t.sejour.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 8, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
