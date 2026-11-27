import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'creer-equivalent-uber-blablacar-algerie-2026';

const T = {
  fr: {
    cover: { eyebrow: 'Vu en France, à construire en Algérie · 05', title: ['Uber est déjà', 'en Algérie, trois fois.', 'Pas le reste du transport.'], subtitle: 'Le VTC urbain est pris par Yassir, Heetch et inDrive. L’intercité, le transport d’entreprise et le transport spécialisé restent à construire.', left: { label: 'Uber · BlaBlaCar · France', sub: 'VTC, covoiturage, paiement en ligne' }, right: { label: 'Algérie', sub: 'VTC pris, le reste au téléphone' }, note: 'Série fondateurs' },
    market: { title: 'Ce qui est servi par application en Algérie en 2026, et ce qui reste au téléphone', columns: ['Couverture par application', 'Ce qui manque'], rows: [
      { label: 'VTC urbain à Alger, Oran, Constantine', cells: [2, 'Rien d’essentiel : Yassir, Heetch, inDrive, Yango'] },
      { label: 'VTC dans les villes moyennes', cells: [1, 'Densité de chauffeurs, temps d’attente'] },
      { label: 'Trajets intercités réservés à l’avance', cells: [1, 'inDrive a ouvert l’inter-wilayas fin 2025 ; réservation, siège et acompte restent rares'] },
      { label: 'Transport d’entreprise : navettes employés, comptes B2B', cells: [0, 'Facturation mensuelle, planning, preuve de trajet'] },
      { label: 'Transport spécialisé : scolaire, PMR, médical', cells: [0, 'Application parents ou famille, chauffeurs formés, régularité'] },
      { label: 'Transferts aéroport prépayés depuis l’étranger', cells: [0, 'Paiement en euros, chauffeur confirmé avant l’atterrissage'] },
    ], legend: '●  servi      ◐  partiel      ○  au téléphone', caption: 'Figure 1 · Copier Uber à Alger, c’est arriver quatrième. Les trois dernières lignes n’ont pas encore de produit.', alt: 'Couverture du transport par application en Algérie en 2026 : VTC urbain servi, villes moyennes et intercité partiels, transport d’entreprise, spécialisé et transferts aéroport encore au téléphone.' },
    positions: { title: 'Trois produits encore ouverts', items: [
      { label: 'Le transport d’entreprise', sub: 'Navettes d’employés, déplacements professionnels, comptes B2B avec facture mensuelle et preuve de trajet. Le client est l’entreprise, pas le passager.', accent: true },
      { label: 'Le transport spécialisé', sub: 'Scolaire avec application pour les parents, personnes à mobilité réduite, transport médical. Régularité, chauffeurs formés, confiance des familles.' },
      { label: 'L’intercité réservé', sub: 'Siège réservé, heure fixe, acompte en ligne, chauffeur vérifié. Le modèle BlaBlaCar avec des professionnels plutôt que des particuliers.' },
    ], caption: 'Figure 2 · Aucun des trois ne dépend d’une flotte de milliers de chauffeurs. Chacun se lance avec vingt véhicules et des clients qui paient à l’avance.', alt: 'Trois produits de transport encore ouverts en Algérie : transport d’entreprise B2B, transport spécialisé scolaire et PMR, intercité réservé.' },
    architecture: { title: 'Architecture d’une plateforme de transport B2B ou spécialisé', layers: [
      { label: 'Passagers et familles', items: [{ name: 'Application passager', sub: 'réservation, suivi en direct, AR et FR' }, { name: 'Application parents ou famille', sub: 'départ, arrivée, chauffeur du jour' }] },
      { label: 'Chauffeurs', items: [{ name: 'Application chauffeur', sub: 'tournées, pointage, incidents, hors connexion' }] },
      { label: 'Cœur', items: [{ name: 'Planning et dispatch', sub: 'tournées récurrentes, remplacements, retards', accent: true }, { name: 'Comptes clients B2B', sub: 'sites, employés autorisés, règles, plafonds' }] },
      { label: 'Argent', items: [{ name: 'Facturation mensuelle', sub: 'par entreprise, par site, export comptable' }, { name: 'Paiement', sub: 'virement, CIB, Edahabia, euros depuis l’étranger via entité dédiée' }] },
      { label: 'Données', items: [{ name: 'Backend, PostgreSQL, cartes', sub: 'hébergement conforme loi 18-07' }] },
    ], caption: 'Figure 3 · Le produit, c’est le planning récurrent et la facture mensuelle. L’application passager n’est que la vitrine.', alt: 'Architecture d’une plateforme de transport B2B ou spécialisé : application passager et famille, application chauffeur, planning et dispatch, comptes B2B, facturation mensuelle, paiements, backend conforme loi 18-07.' },
    timeline: { title: 'Vingt véhicules, trois clients entreprises, un trimestre', unit: 'semaines', items: [
      { label: 'Cadrage', note: 'segment, règles de planning, contrat type', from: 0, to: 2 },
      { label: 'Design', note: 'passager, chauffeur, back-office, AR et FR', from: 2, to: 4 },
      { label: 'Développement', note: 'planning, dispatch, comptes B2B, facturation', from: 4, to: 12 },
      { label: 'Signature des premiers clients', note: 'trois entreprises ou deux écoles, pendant le développement', from: 6, to: 12 },
      { label: 'Exploitation', note: 'vingt véhicules, première facture mensuelle', from: 12, to: 16, accent: true },
    ], caption: 'Figure 4 · Les clients se signent pendant le développement. On ne lance pas une flotte sans contrat.', alt: 'Calendrier en semaines : cadrage 0 à 2, design 2 à 4, développement 4 à 12, signature des premiers clients 6 à 12, exploitation 12 à 16.' },
  },
  en: {
    cover: { eyebrow: 'Seen in France, to be built in Algeria · 05', title: ['Uber is already', 'in Algeria, three times.', 'The rest of transport is not.'], subtitle: 'Urban ride-hailing is taken by Yassir, Heetch and inDrive. Intercity, corporate transport and specialised transport remain to be built.', left: { label: 'Uber · BlaBlaCar · France', sub: 'ride-hailing, carpooling, online payment' }, right: { label: 'Algeria', sub: 'ride-hailing taken, the rest by phone' }, note: 'Founder series' },
    market: { title: 'What is served by app in Algeria in 2026, and what remains by phone', columns: ['App coverage', 'What is missing'], rows: [
      { label: 'Urban ride-hailing in Algiers, Oran, Constantine', cells: [2, 'Nothing essential: Yassir, Heetch, inDrive, Yango'] },
      { label: 'Ride-hailing in mid-sized cities', cells: [1, 'Driver density, waiting times'] },
      { label: 'Intercity trips booked in advance', cells: [1, 'inDrive opened inter-wilaya trips at the end of 2025; booking, seat and deposit remain rare'] },
      { label: 'Corporate transport: employee shuttles, B2B accounts', cells: [0, 'Monthly invoicing, planning, proof of trip'] },
      { label: 'Specialised transport: school, reduced mobility, medical', cells: [0, 'Parent or family app, trained drivers, regularity'] },
      { label: 'Airport transfers prepaid from abroad', cells: [0, 'Payment in euros, driver confirmed before landing'] },
    ], legend: '●  served      ◐  partial      ○  by phone', caption: 'Figure 1 · Copying Uber in Algiers means arriving fourth. The last three rows have no product yet.', alt: 'App coverage of transport in Algeria in 2026: urban ride-hailing served, mid-sized cities and intercity partial, corporate, specialised and airport transfers still by phone.' },
    positions: { title: 'Three products still open', items: [
      { label: 'Corporate transport', sub: 'Employee shuttles, business trips, B2B accounts with monthly invoice and proof of trip. The customer is the company, not the passenger.', accent: true },
      { label: 'Specialised transport', sub: 'School with a parent app, reduced mobility, medical transport. Regularity, trained drivers, family trust.' },
      { label: 'Booked intercity', sub: 'Reserved seat, fixed time, online deposit, verified driver. The BlaBlaCar model with professionals rather than individuals.' },
    ], caption: 'Figure 2 · None of the three depends on a fleet of thousands of drivers. Each launches with twenty vehicles and customers who pay in advance.', alt: 'Three transport products still open in Algeria: B2B corporate transport, specialised school and reduced-mobility transport, booked intercity.' },
    architecture: { title: 'Architecture of a B2B or specialised transport platform', layers: [
      { label: 'Passengers and families', items: [{ name: 'Passenger app', sub: 'booking, live tracking, AR and FR' }, { name: 'Parent or family app', sub: 'departure, arrival, today’s driver' }] },
      { label: 'Drivers', items: [{ name: 'Driver app', sub: 'routes, clock-in, incidents, offline' }] },
      { label: 'Core', items: [{ name: 'Planning and dispatch', sub: 'recurring routes, replacements, delays', accent: true }, { name: 'B2B customer accounts', sub: 'sites, authorised employees, rules, caps' }] },
      { label: 'Money', items: [{ name: 'Monthly invoicing', sub: 'per company, per site, accounting export' }, { name: 'Payment', sub: 'transfer, CIB, Edahabia, euros from abroad via a dedicated entity' }] },
      { label: 'Data', items: [{ name: 'Backend, PostgreSQL, maps', sub: 'Law 18-07 compliant hosting' }] },
    ], caption: 'Figure 3 · The product is the recurring schedule and the monthly invoice. The passenger app is only the shop window.', alt: 'Architecture of a B2B or specialised transport platform: passenger and family apps, driver app, planning and dispatch, B2B accounts, monthly invoicing, payments, Law 18-07 compliant backend.' },
    timeline: { title: 'Twenty vehicles, three corporate customers, one quarter', unit: 'weeks', items: [
      { label: 'Scoping', note: 'segment, planning rules, standard contract', from: 0, to: 2 },
      { label: 'Design', note: 'passenger, driver, back-office, AR and FR', from: 2, to: 4 },
      { label: 'Development', note: 'planning, dispatch, B2B accounts, invoicing', from: 4, to: 12 },
      { label: 'Signing first customers', note: 'three companies or two schools, during development', from: 6, to: 12 },
      { label: 'Operations', note: 'twenty vehicles, first monthly invoice', from: 12, to: 16, accent: true },
    ], caption: 'Figure 4 · Customers are signed during development. You do not launch a fleet without a contract.', alt: 'Timeline in weeks: scoping 0 to 2, design 2 to 4, development 4 to 12, signing first customers 6 to 12, operations 12 to 16.' },
  },
  ar: {
    cover: { eyebrow: 'رأيته في فرنسا، ابنِه في الجزائر · 05', title: ['Uber موجود أصلاً', 'في الجزائر، ثلاث مرات.', 'باقي النقل لا.'], subtitle: 'النقل الحضري بالتطبيق أخذه Yassir وHeetch وinDrive. ما بين المدن ونقل الشركات والنقل المتخصص ما زالت للبناء.', left: { label: 'Uber · BlaBlaCar · فرنسا', sub: 'نقل، مشاركة رحلات، دفع إلكتروني' }, right: { label: 'الجزائر', sub: 'النقل الحضري مأخوذ، الباقي بالهاتف' }, note: 'سلسلة المؤسسين' },
    market: { title: 'ما تخدمه التطبيقات في الجزائر في 2026، وما يبقى بالهاتف', columns: ['التغطية بالتطبيق', 'ما ينقص'], rows: [
      { label: 'النقل الحضري في الجزائر ووهران وقسنطينة', cells: [2, 'لا شيء أساسي: Yassir وHeetch وinDrive وYango'] },
      { label: 'النقل في المدن المتوسطة', cells: [1, 'كثافة السائقين، أوقات الانتظار'] },
      { label: 'رحلات بين المدن محجوزة مسبقاً', cells: [1, 'فتح inDrive الرحلات بين الولايات نهاية 2025؛ الحجز والمقعد والعربون ما زالت نادرة'] },
      { label: 'نقل الشركات: حافلات الموظفين، حسابات B2B', cells: [0, 'فوترة شهرية، تخطيط، إثبات الرحلة'] },
      { label: 'النقل المتخصص: مدرسي، ذوو الحركة المحدودة، طبي', cells: [0, 'تطبيق للأولياء أو العائلة، سائقون مدرّبون، انتظام'] },
      { label: 'نقل المطار المدفوع مسبقاً من الخارج', cells: [0, 'دفع باليورو، سائق مؤكد قبل الهبوط'] },
    ], legend: '●  مخدوم      ◐  جزئي      ○  بالهاتف', caption: 'الشكل 1 · نسخ Uber في العاصمة يعني الوصول رابعاً. الأسطر الثلاثة الأخيرة لا منتج لها بعد.', alt: 'تغطية النقل بالتطبيقات في الجزائر في 2026.' },
    positions: { title: 'ثلاثة منتجات ما زالت مفتوحة', items: [
      { label: 'نقل الشركات', sub: 'حافلات الموظفين، التنقلات المهنية، حسابات B2B بفاتورة شهرية وإثبات رحلة. العميل هو الشركة لا الراكب.', accent: true },
      { label: 'النقل المتخصص', sub: 'مدرسي بتطبيق للأولياء، ذوو الحركة المحدودة، نقل طبي. انتظام، سائقون مدرّبون، ثقة العائلات.' },
      { label: 'ما بين المدن المحجوز', sub: 'مقعد محجوز، وقت ثابت، عربون إلكتروني، سائق موثّق. نموذج BlaBlaCar بمحترفين بدل الأفراد.' },
    ], caption: 'الشكل 2 · لا أحد من الثلاثة يعتمد على أسطول من آلاف السائقين. كل واحد ينطلق بعشرين مركبة وعملاء يدفعون مسبقاً.', alt: 'ثلاثة منتجات نقل ما زالت مفتوحة في الجزائر.' },
    architecture: { title: 'بنية منصة نقل B2B أو متخصص', layers: [
      { label: 'الركاب والعائلات', items: [{ name: 'تطبيق الراكب', sub: 'حجز، تتبع مباشر، عربي وفرنسي' }, { name: 'تطبيق الأولياء أو العائلة', sub: 'الانطلاق، الوصول، سائق اليوم' }] },
      { label: 'السائقون', items: [{ name: 'تطبيق السائق', sub: 'جولات، حضور، حوادث، دون اتصال' }] },
      { label: 'القلب', items: [{ name: 'التخطيط والتوزيع', sub: 'جولات متكررة، بدائل، تأخيرات', accent: true }, { name: 'حسابات عملاء B2B', sub: 'مواقع، موظفون مرخصون، قواعد، سقوف' }] },
      { label: 'المال', items: [{ name: 'فوترة شهرية', sub: 'لكل شركة ولكل موقع، تصدير محاسبي' }, { name: 'الدفع', sub: 'تحويل، CIB، الذهبية، يورو من الخارج عبر كيان مخصص' }] },
      { label: 'البيانات', items: [{ name: 'خلفية، PostgreSQL، خرائط', sub: 'استضافة مطابقة للقانون 18-07' }] },
    ], caption: 'الشكل 3 · المنتج هو الجدول المتكرر والفاتورة الشهرية. تطبيق الراكب مجرد واجهة.', alt: 'بنية منصة نقل B2B أو متخصص.' },
    timeline: { title: 'عشرون مركبة، ثلاثة عملاء شركات، فصل واحد', unit: 'أسابيع', items: [
      { label: 'التأطير', note: 'القطاع، قواعد التخطيط، عقد نموذجي', from: 0, to: 2 },
      { label: 'التصميم', note: 'راكب، سائق، إدارة خلفية، عربي وفرنسي', from: 2, to: 4 },
      { label: 'التطوير', note: 'تخطيط، توزيع، حسابات B2B، فوترة', from: 4, to: 12 },
      { label: 'توقيع أول العملاء', note: 'ثلاث شركات أو مدرستان أثناء التطوير', from: 6, to: 12 },
      { label: 'الاستغلال', note: 'عشرون مركبة، أول فاتورة شهرية', from: 12, to: 16, accent: true },
    ], caption: 'الشكل 4 · يُوقَّع العملاء أثناء التطوير. لا يُطلق أسطول بلا عقد.', alt: 'جدول زمني بالأسابيع.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      market: { svg: matrix({ title: t.market.title, columns: t.market.columns, rows: t.market.rows, legend: t.market.legend, rtl }), caption: t.market.caption, alt: t.market.alt },
      positions: { svg: steps({ title: t.positions.title, steps: t.positions.items, arrows: false, rtl }), caption: t.positions.caption, alt: t.positions.alt },
      architecture: { svg: layers({ title: t.architecture.title, layers: t.architecture.layers, rtl }), caption: t.architecture.caption, alt: t.architecture.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 16, tick: 2, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
    },
  };
}
