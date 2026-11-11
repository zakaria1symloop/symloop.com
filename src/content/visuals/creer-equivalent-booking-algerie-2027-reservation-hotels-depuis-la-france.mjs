import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france';

const T = {
  fr: {
    cover: { eyebrow: 'Série · Vu en France, à construire en Algérie · #06', title: ['Booking en Algérie', 'en 2027 : réserver', 'depuis la France, payer sur place.'], subtitle: 'Le parcours d’une réservation faite depuis la France, qui réserve et comment il paie, la pile à deux pays, et le calendrier pour ouvrir avant l’été 2027.', left: { label: 'Aujourd’hui', sub: 'appel, WhatsApp, « on verra à l’arrivée »' }, right: { label: 'Été 2027', sub: 'réservation garantie, hôtel payé, avis vérifiés' }, note: 'Algérie · France · 2027' },
    journey: { title: 'Le parcours d’une réservation faite depuis la France', items: [
      { n: '01', label: 'Recherche, en mai, depuis Lyon', sub: 'Hôtel ou location à Béjaïa pour août. Photos, prix en euros et en dinars, avis de l’an dernier.' },
      { n: '02', label: 'Réservation garantie', sub: 'Acompte par carte internationale ou garantie de la plateforme. Confirmation ferme, pas « on verra ».', accent: true },
      { n: '03', label: 'Arrivée et séjour', sub: 'Check-in avec le code de réservation. Solde payé sur place en dinars : CIB, Edahabia, espèces.' },
      { n: '04', label: 'Reversement et avis', sub: 'L’hôtel reçoit son relevé, la commission est facturée. L’avis vérifié nourrit l’été suivant.' },
    ], caption: 'Figure 1 · L’étape 2 est celle qui manque en Algérie : une réservation sans garantie n’est pas une réservation, et l’hôtel le sait aussi bien que le voyageur.', alt: 'Quatre étapes d’une réservation depuis la France : recherche, réservation garantie, arrivée et séjour avec solde en dinars, reversement et avis.' },
    who: { title: 'Qui réserve, comment il paie, ce qu’il exige', columns: ['Comment il paie', 'Ce qu’il exige'], rows: [
      { label: 'La diaspora, en été', cells: ['Carte internationale pour l’acompte, dinars sur place', 'Une confirmation ferme deux mois avant, en français'] },
      { label: 'Le touriste national', cells: ['Sur place, CIB ou Edahabia, parfois espèces', 'Réserver tard, annuler facilement, des prix en dinars'] },
      { label: 'Le voyageur d’affaires', cells: ['Virement, facture au nom de l’entreprise', 'Facture conforme, séjour modifiable, réception qui répond'] },
      { label: 'L’hôtel', cells: ['Encaisse le solde sur place, reçoit un relevé', 'Acompte garanti, moins de non-présentations, remplissage hors saison'] },
      { label: 'La location meublée', cells: ['Veut être payée avant l’arrivée', 'Un voyageur vérifié et une caution'] },
      { label: 'Le fisc, en 2027', cells: ['Commissions avec TVA, déclaration annuelle', 'Une plateforme identifiée, des encaissements tracés'] },
    ], caption: 'Figure 2 · La diaspora paie l’acompte en euros et le solde en dinars. C’est ce double circuit, pas le site, qui fait la plateforme.', alt: 'Matrice des voyageurs et acteurs d’une plateforme de réservation en Algérie : diaspora, touriste national, voyageur d’affaires, hôtel, location meublée, fisc, avec comment chacun paie et ce qu’il exige.' },
    stack: { title: 'La pile d’une plateforme de réservation à deux pays', layers: [
      { label: 'Voyageurs', items: [{ name: 'Site et application, FR et AR', sub: 'recherche, dates, prix dans les deux monnaies, confirmation', accent: true }] },
      { label: 'Paiement', items: [{ name: 'Côté France : acompte en euros', sub: 'entité française, carte internationale ; réglementation des changes à valider' }, { name: 'Côté Algérie : solde en dinars', sub: 'CIB, Edahabia, QR, espèces enregistrées à l’hôtel' }] },
      { label: 'Hôtels et hôtes', items: [{ name: 'Extranet', sub: 'disponibilités, prix, confirmations, relevés' }, { name: 'Connexion aux canaux existants', sub: 'pour éviter la double réservation' }] },
      { label: 'Confiance', items: [{ name: 'Avis vérifiés', sub: 'après séjour réel uniquement' }, { name: 'Annulation et litiges', sub: 'règles écrites, support AR/FR' }] },
      { label: 'Conformité', items: [{ name: 'Plateforme identifiée au fisc, TVA sur commissions', sub: 'PLF 2027 ; données loi 18-07 ; obligations hôtelières' }] },
    ], caption: 'Figure 3 · Deux entités, deux monnaies, un seul calendrier de disponibilités. La couche paiement est la raison d’exister de la plateforme.', alt: 'Cinq couches : voyageurs ; paiement côté France en euros et côté Algérie en dinars ; extranet hôtels ; confiance ; conformité.' },
    timeline: { title: 'Ouvrir avant l’été 2027', unit: 'mois', items: [
      { label: 'Cadrage avec vingt hôtels d’une ville', note: 'janvier-février : leurs règles d’acompte, d’annulation, de prix', from: 0, to: 2 },
      { label: 'Extranet hôtels et disponibilités', note: 'calendrier, prix, confirmations, relevés', from: 2, to: 5 },
      { label: 'Site voyageur et double paiement', note: 'euros côté France, dinars côté Algérie, web-marchand', from: 3, to: 6 },
      { label: 'Ouverture : mai 2027', note: 'une ville, vingt hôtels, la diaspora réserve pour août', from: 6, to: 7, accent: true },
      { label: 'Été : premiers séjours, premiers avis', note: 'juillet-août ; deuxième ville en septembre', from: 7, to: 9 },
    ], caption: 'Figure 4 · La diaspora réserve août en mai. Une plateforme ouverte en juillet a raté sa première saison.', alt: 'Calendrier en mois : cadrage 0 à 2, extranet 2 à 5, site et paiement 3 à 6, ouverture en mai 6 à 7, été 7 à 9.' },
  },
  en: {
    cover: { eyebrow: 'Series · Seen in France, to build in Algeria · #06', title: ['Booking in Algeria', 'in 2027: book from', 'France, pay on site.'], subtitle: 'The journey of a booking made from France, who books and how they pay, the two-country stack, and the calendar to open before summer 2027.', left: { label: 'Today', sub: 'a call, WhatsApp, “we’ll see on arrival”' }, right: { label: 'Summer 2027', sub: 'guaranteed booking, hotel paid, verified reviews' }, note: 'Algeria · France · 2027' },
    journey: { title: 'The journey of a booking made from France', items: [
      { n: '01', label: 'Search, in May, from Lyon', sub: 'A hotel or rental in Béjaïa for August. Photos, prices in euros and dinars, last year’s reviews.' },
      { n: '02', label: 'Guaranteed booking', sub: 'Deposit by international card or a platform guarantee. Firm confirmation, not “we’ll see”.', accent: true },
      { n: '03', label: 'Arrival and stay', sub: 'Check-in with the booking code. Balance paid on site in dinars: CIB, Edahabia, cash.' },
      { n: '04', label: 'Payout and review', sub: 'The hotel gets its statement, the commission is invoiced. The verified review feeds next summer.' },
    ], caption: 'Figure 1 · Step 2 is the one missing in Algeria: a booking without a guarantee is not a booking, and the hotel knows it as well as the traveller.', alt: 'Four steps of a booking from France: search, guaranteed booking, arrival and stay with balance in dinars, payout and review.' },
    who: { title: 'Who books, how they pay, what they demand', columns: ['How they pay', 'What they demand'], rows: [
      { label: 'The diaspora, in summer', cells: ['International card for the deposit, dinars on site', 'A firm confirmation two months ahead, in French'] },
      { label: 'The domestic tourist', cells: ['On site, CIB or Edahabia, sometimes cash', 'Booking late, easy cancellation, prices in dinars'] },
      { label: 'The business traveller', cells: ['Transfer, invoice in the company’s name', 'Compliant invoice, changeable stay, a reception that answers'] },
      { label: 'The hotel', cells: ['Collects the balance on site, receives a statement', 'A guaranteed deposit, fewer no-shows, off-season occupancy'] },
      { label: 'The furnished rental', cells: ['Wants to be paid before arrival', 'A verified traveller and a deposit'] },
      { label: 'The tax administration, in 2027', cells: ['Commissions with VAT, annual declaration', 'A registered platform, traced collections'] },
    ], caption: 'Figure 2 · The diaspora pays the deposit in euros and the balance in dinars. That double circuit, not the website, is what makes the platform.', alt: 'Matrix of travellers and actors of a booking platform in Algeria: diaspora, domestic tourist, business traveller, hotel, furnished rental, tax administration, with how each pays and what they demand.' },
    stack: { title: 'The stack of a two-country booking platform', layers: [
      { label: 'Travellers', items: [{ name: 'Site and app, FR and AR', sub: 'search, dates, prices in both currencies, confirmation', accent: true }] },
      { label: 'Payment', items: [{ name: 'France side: deposit in euros', sub: 'French entity, international card; exchange regulation to validate' }, { name: 'Algeria side: balance in dinars', sub: 'CIB, Edahabia, QR, cash recorded at the hotel' }] },
      { label: 'Hotels and hosts', items: [{ name: 'Extranet', sub: 'availability, prices, confirmations, statements' }, { name: 'Connection to existing channels', sub: 'to avoid double bookings' }] },
      { label: 'Trust', items: [{ name: 'Verified reviews', sub: 'after a real stay only' }, { name: 'Cancellation and disputes', sub: 'written rules, AR/FR support' }] },
      { label: 'Compliance', items: [{ name: 'Platform registered with the tax administration, VAT on commissions', sub: '2027 finance bill; Law 18-07 data; hotel obligations' }] },
    ], caption: 'Figure 3 · Two entities, two currencies, one availability calendar. The payment layer is the platform’s reason to exist.', alt: 'Five layers: travellers; payment on the France side in euros and on the Algeria side in dinars; hotel extranet; trust; compliance.' },
    timeline: { title: 'Opening before summer 2027', unit: 'months', items: [
      { label: 'Scoping with twenty hotels in one city', note: 'January-February: their deposit, cancellation and pricing rules', from: 0, to: 2 },
      { label: 'Hotel extranet and availability', note: 'calendar, prices, confirmations, statements', from: 2, to: 5 },
      { label: 'Traveller site and double payment', note: 'euros on the France side, dinars on the Algeria side, merchant status', from: 3, to: 6 },
      { label: 'Opening: May 2027', note: 'one city, twenty hotels, the diaspora books for August', from: 6, to: 7, accent: true },
      { label: 'Summer: first stays, first reviews', note: 'July-August; second city in September', from: 7, to: 9 },
    ], caption: 'Figure 4 · The diaspora books August in May. A platform that opens in July has missed its first season.', alt: 'Timeline in months: scoping 0 to 2, extranet 2 to 5, site and payment 3 to 6, opening in May 6 to 7, summer 7 to 9.' },
  },
  ar: {
    cover: { eyebrow: 'سلسلة · رأيناه في فرنسا، نبنيه في الجزائر · #06', title: ['بوكينغ في الجزائر', 'سنة 2027: احجز من', 'فرنسا، ادفع في المكان.'], subtitle: 'مسار حجز يُجرى من فرنسا، من يحجز وكيف يدفع، طبقات منصة ببلدين، والجدول للافتتاح قبل صيف 2027.', left: { label: 'اليوم', sub: 'مكالمة، واتساب، «نرى عند الوصول»' }, right: { label: 'صيف 2027', sub: 'حجز مضمون، فندق مدفوع، تقييمات موثَّقة' }, note: 'الجزائر · فرنسا · 2027' },
    journey: { title: 'مسار حجز يُجرى من فرنسا', items: [
      { n: '01', label: 'بحث في ماي من ليون', sub: 'فندق أو شقة في بجاية لشهر أوت. صور، أسعار باليورو والدينار، تقييمات السنة الماضية.' },
      { n: '02', label: 'حجز مضمون', sub: 'عربون ببطاقة دولية أو ضمان من المنصة. تأكيد نهائي لا «نرى».', accent: true },
      { n: '03', label: 'الوصول والإقامة', sub: 'تسجيل الدخول برمز الحجز. الباقي يُدفع في المكان بالدينار: CIB، الذهبية، نقد.' },
      { n: '04', label: 'التحويل والتقييم', sub: 'يتلقى الفندق كشفه وتُفوتر العمولة. التقييم الموثَّق يغذّي الصيف التالي.' },
    ], caption: 'الشكل 1 · الخطوة 2 هي الناقصة في الجزائر: حجز بلا ضمان ليس حجزاً، والفندق يعرف ذلك كما يعرفه المسافر.', alt: 'أربع خطوات لحجز من فرنسا: بحث، حجز مضمون، وصول وإقامة، تحويل وتقييم.' },
    who: { title: 'من يحجز، كيف يدفع، ماذا يشترط', columns: ['كيف يدفع', 'ماذا يشترط'], rows: [
      { label: 'الجالية في الصيف', cells: ['بطاقة دولية للعربون، دينار في المكان', 'تأكيد نهائي قبل شهرين، بالفرنسية'] },
      { label: 'السائح المحلي', cells: ['في المكان، CIB أو الذهبية، أحياناً نقد', 'حجز متأخر، إلغاء سهل، أسعار بالدينار'] },
      { label: 'مسافر الأعمال', cells: ['تحويل، فاتورة باسم الشركة', 'فاتورة مطابقة، إقامة قابلة للتعديل، استقبال يجيب'] },
      { label: 'الفندق', cells: ['يحصّل الباقي في المكان، يتلقى كشفاً', 'عربون مضمون، غيابات أقل، امتلاء خارج الموسم'] },
      { label: 'الشقة المفروشة', cells: ['تريد الدفع قبل الوصول', 'مسافر متحقَّق منه وكفالة'] },
      { label: 'الضرائب، في 2027', cells: ['عمولات بـTVA، تصريح سنوي', 'منصة معرَّفة، تحصيلات متتبَّعة'] },
    ], caption: 'الشكل 2 · تدفع الجالية العربون باليورو والباقي بالدينار. هذه الدورة المزدوجة، لا الموقع، هي ما يصنع المنصة.', alt: 'مصفوفة المسافرين والأطراف في منصة حجز بالجزائر.' },
    stack: { title: 'طبقات منصة حجز ببلدين', layers: [
      { label: 'المسافرون', items: [{ name: 'موقع وتطبيق، فرنسي وعربي', sub: 'بحث، تواريخ، أسعار بالعملتين، تأكيد', accent: true }] },
      { label: 'الدفع', items: [{ name: 'جهة فرنسا: عربون باليورو', sub: 'كيان فرنسي، بطاقة دولية؛ تنظيم الصرف يُتحقق منه' }, { name: 'جهة الجزائر: الباقي بالدينار', sub: 'CIB، الذهبية، QR، نقد مسجَّل في الفندق' }] },
      { label: 'الفنادق والمضيفون', items: [{ name: 'بوابة الفندق', sub: 'توفر، أسعار، تأكيدات، كشوف' }, { name: 'ربط بالقنوات الموجودة', sub: 'لتفادي الحجز المزدوج' }] },
      { label: 'الثقة', items: [{ name: 'تقييمات موثَّقة', sub: 'بعد إقامة حقيقية فقط' }, { name: 'إلغاء ونزاعات', sub: 'قواعد مكتوبة، دعم عربي/فرنسي' }] },
      { label: 'الامتثال', items: [{ name: 'منصة معرَّفة لدى الضرائب، TVA على العمولات', sub: 'مشروع قانون المالية 2027؛ بيانات القانون 18-07؛ التزامات الفنادق' }] },
    ], caption: 'الشكل 3 · كيانان وعملتان وتقويم توفر واحد. طبقة الدفع هي سبب وجود المنصة.', alt: 'خمس طبقات لمنصة حجز ببلدين.' },
    timeline: { title: 'الافتتاح قبل صيف 2027', unit: 'أشهر', items: [
      { label: 'تأطير مع عشرين فندقاً في مدينة', note: 'جانفي-فيفري: قواعدهم للعربون والإلغاء والأسعار', from: 0, to: 2 },
      { label: 'بوابة الفنادق والتوفر', note: 'تقويم، أسعار، تأكيدات، كشوف', from: 2, to: 5 },
      { label: 'موقع المسافر والدفع المزدوج', note: 'يورو جهة فرنسا، دينار جهة الجزائر، تاجر إلكتروني', from: 3, to: 6 },
      { label: 'الافتتاح: ماي 2027', note: 'مدينة واحدة، عشرون فندقاً، الجالية تحجز لأوت', from: 6, to: 7, accent: true },
      { label: 'الصيف: أولى الإقامات، أولى التقييمات', note: 'جويلية-أوت؛ مدينة ثانية في سبتمبر', from: 7, to: 9 },
    ], caption: 'الشكل 4 · تحجز الجالية أوت في ماي. منصة تفتح في جويلية فاتها موسمها الأول.', alt: 'جدول زمني بالأشهر لافتتاح منصة حجز قبل صيف 2027.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      journey: { svg: steps({ title: t.journey.title, steps: t.journey.items, arrows: true, rtl }), caption: t.journey.caption, alt: t.journey.alt },
      who: { svg: matrix({ title: t.who.title, columns: t.who.columns, rows: t.who.rows, rtl }), caption: t.who.caption, alt: t.who.alt },
      stack: { svg: layers({ title: t.stack.title, layers: t.stack.layers, rtl }), caption: t.stack.caption, alt: t.stack.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 9, tick: 1, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
    },
  };
}
