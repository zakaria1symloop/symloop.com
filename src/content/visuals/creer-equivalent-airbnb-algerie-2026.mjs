import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'creer-equivalent-airbnb-algerie-2026';

const T = {
  fr: {
    cover: { eyebrow: 'Vu en France, à construire en Algérie · 03', title: ['Airbnb en Algérie :', 'la demande existe,', 'la plateforme non.'], subtitle: 'Pourquoi le modèle ne marche pas tel quel, qui loue vraiment, et comment construire la plateforme de location saisonnière qui tient.', left: { label: 'Airbnb · France', sub: 'paiement, confiance, avis' }, right: { label: 'Algérie', sub: 'Facebook, cash, confiance orale' }, note: 'Série fondateurs' },
    market: { title: 'Comment se loue un appartement de vacances en Algérie en 2026', columns: ['Part du marché', 'Ce qui manque'], rows: [
      { label: 'Groupes Facebook et bouche-à-oreille', cells: [2, 'Vérification, paiement, recours'] },
      { label: 'Ouedkniss et annonces classées', cells: [2, 'Disponibilités, réservation, avis'] },
      { label: 'Agences immobilières locales', cells: [1, 'Couverture, prix de la commission'] },
      { label: 'Airbnb et Booking', cells: [1, 'Versement des hôtes algériens, paiement en dinars'] },
      { label: 'Plateformes locales récentes', cells: [0, 'Densité d’offre, notoriété'] },
    ], legend: '●  majoritaire      ◐  partiel      ○  marginal', caption: 'Figure 1 · La location existe et elle est massive l’été. Ce qui manque n’est pas l’offre, c’est la confiance et le paiement.', alt: 'Comment se loue un appartement de vacances en Algérie en 2026 : groupes Facebook et Ouedkniss majoritaires, agences partielles, Airbnb et Booking limités par le versement des hôtes, plateformes locales marginales.' },
    changes: { title: 'Ce qui change entre Airbnb et la version algérienne', columns: ['Modèle Airbnb', 'Version algérienne'], rows: [
      { label: 'Paiement du voyageur', cells: ['Carte, à la réservation, plateforme encaisse', 'Acompte CIB ou Edahabia, solde sur place'] },
      { label: 'Versement à l’hôte', cells: ['Virement international après l’arrivée', 'Virement en dinars ou CIB, dans le pays'] },
      { label: 'Voyageur de la diaspora', cells: ['Même carte, même compte', 'Paie depuis la France : entité et prestataire hors Algérie à cadrer'] },
      { label: 'Confiance', cells: ['Avis, photos vérifiées, assurance', 'Identité par téléphone et pièce, visite, caution, avis'] },
      { label: 'Cadre légal', cells: ['Déclaration en mairie, 120 jours', 'Loi 99-06 tourisme, déclaration des étrangers, assurance, fiscalité'] },
      { label: 'Saisonnalité', cells: ['Étalée sur l’année', 'Juin à septembre, Aïd, vacances scolaires'] },
    ], highlight: 1, caption: 'Figure 2 · Le paiement est le vrai produit. Les photos et la carte ne sont que la vitrine.', alt: 'Comparaison du modèle Airbnb et de sa version algérienne : acompte CIB Edahabia et solde sur place, versement en dinars, voyageur de la diaspora payant depuis la France, confiance par identité et caution, loi 99-06, saisonnalité estivale.' },
    architecture: { title: 'Architecture d’une plateforme de location saisonnière algérienne', layers: [
      { label: 'Voyageurs', items: [{ name: 'Application et site', sub: 'recherche par ville, plage, dates, AR et FR' }, { name: 'Réservation avec acompte', sub: 'CIB, Edahabia, ou carte étrangère via entité hors Algérie' }] },
      { label: 'Hôtes', items: [{ name: 'Application hôte', sub: 'calendrier, prix par saison, messages' }, { name: 'Vérification', sub: 'téléphone, pièce d’identité, visite du logement' }] },
      { label: 'Cœur', items: [{ name: 'Calendrier et tarification', sub: 'une seule source de disponibilité', accent: true }, { name: 'Caution et litiges', sub: 'règles écrites, équipe de médiation' }] },
      { label: 'Paiement', items: [{ name: 'Encaissement acompte', sub: 'SATIM pour les cartes algériennes' }, { name: 'Versement hôte', sub: 'virement en dinars, délai après l’arrivée' }] },
      { label: 'Données', items: [{ name: 'Backend, PostgreSQL, cartes', sub: 'hébergement conforme loi 18-07' }] },
    ], caption: 'Figure 3 · Le calendrier unique et le flux d’acompte et de versement sont le produit. Le reste est une application immobilière classique.', alt: 'Architecture d’une plateforme de location saisonnière en Algérie : application voyageur avec acompte CIB Edahabia, application hôte avec vérification, calendrier et tarification, caution et litiges, encaissement SATIM et versement en dinars, backend conforme loi 18-07.' },
    timeline: { title: 'Une ville balnéaire, cent logements vérifiés, un été', unit: 'semaines', items: [
      { label: 'Cadrage', note: 'ville pilote, règles d’acompte et de caution, cadre légal', from: 0, to: 2 },
      { label: 'Design', note: 'voyageur et hôte, AR et FR, sur téléphone', from: 2, to: 5 },
      { label: 'Développement', note: 'calendrier, réservation, paiement, hôte', from: 5, to: 15 },
      { label: 'Recrutement des hôtes', note: 'cent logements visités et vérifiés, hors saison', from: 10, to: 18 },
      { label: 'Première saison', note: 'ouverture avant juin, équipe de médiation en place', from: 18, to: 26, accent: true },
    ], caption: 'Figure 4 · On recrute les hôtes pendant le développement, hors saison. Ouvrir en juillet avec dix logements, c’est ouvrir pour rien.', alt: 'Calendrier en semaines : cadrage 0 à 2, design 2 à 5, développement 5 à 15, recrutement des hôtes 10 à 18, première saison 18 à 26.' },
  },
  en: {
    cover: { eyebrow: 'Seen in France, to be built in Algeria · 03', title: ['Airbnb in Algeria:', 'the demand exists,', 'the platform does not.'], subtitle: 'Why the model does not work as is, who really rents, and how to build the short-term rental platform that lasts.', left: { label: 'Airbnb · France', sub: 'payment, trust, reviews' }, right: { label: 'Algeria', sub: 'Facebook, cash, spoken trust' }, note: 'Founder series' },
    market: { title: 'How a holiday flat gets rented in Algeria in 2026', columns: ['Market share', 'What is missing'], rows: [
      { label: 'Facebook groups and word of mouth', cells: [2, 'Verification, payment, recourse'] },
      { label: 'Ouedkniss and classified ads', cells: [2, 'Availability, booking, reviews'] },
      { label: 'Local real-estate agencies', cells: [1, 'Coverage, commission price'] },
      { label: 'Airbnb and Booking', cells: [1, 'Payouts to Algerian hosts, payment in dinars'] },
      { label: 'Recent local platforms', cells: [0, 'Supply density, awareness'] },
    ], legend: '●  majority      ◐  partial      ○  marginal', caption: 'Figure 1 · Renting exists and it is massive in summer. What is missing is not supply, it is trust and payment.', alt: 'How a holiday flat gets rented in Algeria in 2026: Facebook groups and Ouedkniss dominate, agencies partial, Airbnb and Booking limited by host payouts, local platforms marginal.' },
    changes: { title: 'What changes between Airbnb and the Algerian version', columns: ['Airbnb model', 'Algerian version'], rows: [
      { label: 'Guest payment', cells: ['Card, at booking, platform collects', 'CIB or Edahabia deposit, balance on arrival'] },
      { label: 'Host payout', cells: ['International transfer after check-in', 'Transfer in dinars or CIB, inside the country'] },
      { label: 'Diaspora guest', cells: ['Same card, same account', 'Pays from France: entity and provider outside Algeria to frame'] },
      { label: 'Trust', cells: ['Reviews, verified photos, insurance', 'Identity by phone and ID, visit, security deposit, reviews'] },
      { label: 'Legal frame', cells: ['Town hall declaration, 120 days', 'Law 99-06 tourism, foreign guest declaration, insurance, tax'] },
      { label: 'Seasonality', cells: ['Spread over the year', 'June to September, Eid, school holidays'] },
    ], highlight: 1, caption: 'Figure 2 · Payment is the real product. Photos and the map are only the shop window.', alt: 'Comparison of the Airbnb model and its Algerian version: CIB Edahabia deposit and balance on arrival, payout in dinars, diaspora guest paying from France, trust through identity and deposit, Law 99-06, summer seasonality.' },
    architecture: { title: 'Architecture of an Algerian short-term rental platform', layers: [
      { label: 'Guests', items: [{ name: 'App and website', sub: 'search by city, beach, dates, AR and FR' }, { name: 'Booking with deposit', sub: 'CIB, Edahabia, or foreign card via an entity outside Algeria' }] },
      { label: 'Hosts', items: [{ name: 'Host app', sub: 'calendar, seasonal prices, messages' }, { name: 'Verification', sub: 'phone, ID document, visit of the property' }] },
      { label: 'Core', items: [{ name: 'Calendar and pricing', sub: 'one source of availability', accent: true }, { name: 'Security deposit and disputes', sub: 'written rules, mediation team' }] },
      { label: 'Payment', items: [{ name: 'Deposit collection', sub: 'SATIM for Algerian cards' }, { name: 'Host payout', sub: 'transfer in dinars, delay after check-in' }] },
      { label: 'Data', items: [{ name: 'Backend, PostgreSQL, maps', sub: 'Law 18-07 compliant hosting' }] },
    ], caption: 'Figure 3 · The single calendar and the deposit-and-payout flow are the product. The rest is a classic real-estate app.', alt: 'Architecture of a short-term rental platform in Algeria: guest app with CIB Edahabia deposit, host app with verification, calendar and pricing, deposit and disputes, SATIM collection and payout in dinars, Law 18-07 compliant backend.' },
    timeline: { title: 'One seaside city, one hundred verified homes, one summer', unit: 'weeks', items: [
      { label: 'Scoping', note: 'pilot city, deposit and security rules, legal frame', from: 0, to: 2 },
      { label: 'Design', note: 'guest and host, AR and FR, on a phone', from: 2, to: 5 },
      { label: 'Development', note: 'calendar, booking, payment, host', from: 5, to: 15 },
      { label: 'Host recruitment', note: 'one hundred homes visited and verified, off season', from: 10, to: 18 },
      { label: 'First season', note: 'open before June, mediation team in place', from: 18, to: 26, accent: true },
    ], caption: 'Figure 4 · Hosts are recruited during development, off season. Opening in July with ten homes is opening for nothing.', alt: 'Timeline in weeks: scoping 0 to 2, design 2 to 5, development 5 to 15, host recruitment 10 to 18, first season 18 to 26.' },
  },
  ar: {
    cover: { eyebrow: 'رأيته في فرنسا، ابنِه في الجزائر · 03', title: ['Airbnb في الجزائر:', 'الطلب موجود،', 'المنصة لا.'], subtitle: 'لماذا لا يعمل النموذج كما هو، من يؤجّر فعلاً، وكيف تبني منصة الإيجار الموسمي التي تصمد.', left: { label: 'Airbnb · فرنسا', sub: 'دفع، ثقة، تقييمات' }, right: { label: 'الجزائر', sub: 'فيسبوك، نقد، ثقة شفوية' }, note: 'سلسلة المؤسسين' },
    market: { title: 'كيف تُؤجَّر شقة عطلة في الجزائر في 2026', columns: ['حصة السوق', 'ما ينقص'], rows: [
      { label: 'مجموعات فيسبوك والتوصية الشفوية', cells: [2, 'التحقق، الدفع، الطعن'] },
      { label: 'Ouedkniss والإعلانات المبوّبة', cells: [2, 'التوفر، الحجز، التقييمات'] },
      { label: 'الوكالات العقارية المحلية', cells: [1, 'التغطية، سعر العمولة'] },
      { label: 'Airbnb وBooking', cells: [1, 'تحويل الأموال للمضيفين الجزائريين، الدفع بالدينار'] },
      { label: 'منصات محلية حديثة', cells: [0, 'كثافة العرض، الشهرة'] },
    ], legend: '●  الأغلبية      ◐  جزئي      ○  هامشي', caption: 'الشكل 1 · الإيجار موجود وهو ضخم صيفاً. ما ينقص ليس العرض بل الثقة والدفع.', alt: 'كيف تُؤجَّر شقة عطلة في الجزائر في 2026.' },
    changes: { title: 'ما يتغير بين Airbnb والنسخة الجزائرية', columns: ['نموذج Airbnb', 'النسخة الجزائرية'], rows: [
      { label: 'دفع المسافر', cells: ['بطاقة عند الحجز، المنصة تقبض', 'عربون CIB أو الذهبية، الباقي في المكان'] },
      { label: 'تحويل الأموال للمضيف', cells: ['تحويل دولي بعد الوصول', 'تحويل بالدينار أو CIB داخل البلاد'] },
      { label: 'مسافر من الجالية', cells: ['نفس البطاقة ونفس الحساب', 'يدفع من فرنسا: كيان ومزوّد خارج الجزائر يجب تأطيرهما'] },
      { label: 'الثقة', cells: ['تقييمات، صور موثّقة، تأمين', 'هوية بالهاتف والوثيقة، زيارة، كفالة، تقييمات'] },
      { label: 'الإطار القانوني', cells: ['تصريح في البلدية، 120 يوماً', 'قانون 99-06 للسياحة، التصريح بالأجانب، تأمين، ضرائب'] },
      { label: 'الموسمية', cells: ['موزّعة على السنة', 'جوان إلى سبتمبر، العيد، العطل المدرسية'] },
    ], highlight: 1, caption: 'الشكل 2 · الدفع هو المنتج الحقيقي. الصور والخريطة مجرد واجهة.', alt: 'مقارنة نموذج Airbnb ونسخته الجزائرية.' },
    architecture: { title: 'بنية منصة إيجار موسمي جزائرية', layers: [
      { label: 'المسافرون', items: [{ name: 'تطبيق وموقع', sub: 'بحث بالمدينة والشاطئ والتواريخ، عربي وفرنسي' }, { name: 'حجز بعربون', sub: 'CIB، الذهبية، أو بطاقة أجنبية عبر كيان خارج الجزائر' }] },
      { label: 'المضيفون', items: [{ name: 'تطبيق المضيف', sub: 'تقويم، أسعار موسمية، رسائل' }, { name: 'التحقق', sub: 'هاتف، وثيقة هوية، زيارة السكن' }] },
      { label: 'القلب', items: [{ name: 'التقويم والتسعير', sub: 'مصدر واحد للتوفر', accent: true }, { name: 'الكفالة والنزاعات', sub: 'قواعد مكتوبة، فريق وساطة' }] },
      { label: 'الدفع', items: [{ name: 'قبض العربون', sub: 'SATIM للبطاقات الجزائرية' }, { name: 'تحويل للمضيف', sub: 'تحويل بالدينار بعد الوصول بمهلة' }] },
      { label: 'البيانات', items: [{ name: 'خلفية، PostgreSQL، خرائط', sub: 'استضافة مطابقة للقانون 18-07' }] },
    ], caption: 'الشكل 3 · التقويم الواحد وتدفق العربون والتحويل هما المنتج. الباقي تطبيق عقاري كلاسيكي.', alt: 'بنية منصة إيجار موسمي في الجزائر.' },
    timeline: { title: 'مدينة ساحلية واحدة، مئة سكن موثّق، صيف واحد', unit: 'أسابيع', items: [
      { label: 'التأطير', note: 'المدينة التجريبية، قواعد العربون والكفالة، الإطار القانوني', from: 0, to: 2 },
      { label: 'التصميم', note: 'المسافر والمضيف، عربي وفرنسي، على الهاتف', from: 2, to: 5 },
      { label: 'التطوير', note: 'تقويم، حجز، دفع، مضيف', from: 5, to: 15 },
      { label: 'استقطاب المضيفين', note: 'مئة سكن مُزار وموثّق خارج الموسم', from: 10, to: 18 },
      { label: 'الموسم الأول', note: 'افتتاح قبل جوان، فريق الوساطة جاهز', from: 18, to: 26, accent: true },
    ], caption: 'الشكل 4 · يُستقطب المضيفون أثناء التطوير خارج الموسم. الافتتاح في جويلية بعشرة مساكن افتتاح بلا جدوى.', alt: 'جدول زمني بالأسابيع.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      market: { svg: matrix({ title: t.market.title, columns: t.market.columns, rows: t.market.rows, legend: t.market.legend, rtl }), caption: t.market.caption, alt: t.market.alt },
      changes: { svg: matrix({ title: t.changes.title, columns: t.changes.columns, rows: t.changes.rows, highlight: t.changes.highlight, rtl }), caption: t.changes.caption, alt: t.changes.alt },
      architecture: { svg: layers({ title: t.architecture.title, layers: t.architecture.layers, rtl }), caption: t.architecture.caption, alt: t.architecture.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 28, tick: 4, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
    },
  };
}
