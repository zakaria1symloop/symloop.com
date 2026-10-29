import { cover, stats, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier';

const T = {
  fr: {
    cover: { eyebrow: 'Problème · SaaS et abonnements', title: ['Lancer un SaaS', 'en Algérie en 2027 :', 'qui paie, comment, quand.'], subtitle: 'Les entreprises algériennes paient-elles des abonnements, comment encaisser sans carte internationale, et le calendrier à rebours pour être en ligne au printemps 2027.', left: { label: 'Fin 2026', sub: 'une idée, un secteur, zéro client payant' }, right: { label: 'Printemps 2027', sub: 'dix clients payants, facture légale, encaissement en dinars' }, note: 'Algérie · 2027' },
    market: { title: 'Ce qui a changé côté paiement, en chiffres (GIE Monétique, S1 2026)', items: [
      { value: '1 004', label: 'web-marchands actifs fin juin 2026, +55 % en un an' },
      { value: '15,4 M', label: 'transactions en ligne au 1er semestre 2026, +52 %' },
      { value: '23 M', label: 'cartes en circulation : 19 M Edahabia, 4 M CIB' },
      { value: '−10 %', label: 'd’impôt (PLF 2027) si 50 % des encaissements sont électroniques', accent: true },
    ], caption: 'Figure 1 · L’obstacle « personne ne paie en ligne » a reculé. En 2027, le projet de loi de finances récompense même les commerçants qui encaissent électroniquement.', alt: 'Quatre chiffres : 1 004 web-marchands fin juin 2026, 15,4 millions de transactions en ligne au premier semestre 2026, 23 millions de cartes dont 19 millions Edahabia et 4 millions CIB, réduction d’impôt de 10 % prévue par le PLF 2027 pour les contribuables dont la moitié des encaissements est électronique.' },
    who: { title: 'Qui paie un abonnement en Algérie, et qui ne paiera pas', columns: ['Chance de payer', 'Pourquoi'], rows: [
      { label: 'Pharmacies, cliniques, cabinets', cells: [2, 'Perte mesurable chaque mois (péremption, impayés), budget existant'] },
      { label: 'Écoles privées et centres de formation', cells: [2, 'Rentrée datée, parents qui exigent une application'] },
      { label: 'Agences immobilières et transport', cells: [2, 'Équipes terrain, chiffre d’affaires qui dépend de la réactivité'] },
      { label: 'Restaurants et commerces de détail', cells: [1, 'Paient un outil de caisse, rarement un deuxième abonnement'] },
      { label: 'Vendeurs Instagram, micro-commerçants', cells: [0, 'Zéro budget logiciel, WhatsApp suffit tant que le volume est faible'] },
      { label: 'Grands comptes et filiales', cells: [1, 'Paient, mais en projet sur mesure et en appel d’offres, pas en abonnement'] },
    ], legend: '●  paie un abonnement      ◐  parfois      ○  ne paie pas', caption: 'Figure 2 · Un SaaS algérien se vend à ceux qui perdent de l’argent chaque mois sans lui, pas à ceux qui trouveraient ça pratique.', alt: 'Matrice des segments : pharmacies, cliniques, écoles privées, agences immobilières et transport paient un abonnement ; restaurants, commerces et grands comptes parfois ; vendeurs Instagram et micro-commerçants ne paient pas.' },
    stack: { title: 'La pile d’un SaaS algérien qui encaisse vraiment', layers: [
      { label: 'Produit', items: [{ name: 'Web + application mobile', sub: 'le patron sur mobile, l’équipe sur web, arabe et français', accent: true }, { name: 'Un seul métier au départ', sub: 'la douleur chiffrée du segment choisi, rien d’autre' }] },
      { label: 'Encaissement', items: [{ name: 'Annuel d’avance', sub: 'virement ou CIB/Edahabia, remise 2 mois, trésorerie dès J1' }, { name: 'Mensuel CIB/Edahabia', sub: 'statut web-marchand via votre banque et le GIE Monétique' }, { name: 'Espèces via revendeurs', sub: 'codes d’activation vendus par des partenaires en wilaya' }] },
      { label: 'Facturation', items: [{ name: 'Facture conforme, TVA, dinars', sub: 'registre de commerce, NIF, numérotation ; prérequis des clients formels' }, { name: 'Relance et suspension douce', sub: 'rappel J-7, J+3, lecture seule à J+15, jamais de coupure brutale' }] },
      { label: 'Hébergement et données', items: [{ name: 'Cloud local ou étranger documenté', sub: 'loi 18-07, sauvegardes, qui accède à quoi' }] },
      { label: 'Adoption', items: [{ name: 'Onboarding humain', sub: 'une heure par client, données reprises à sa place, WhatsApp de support' }] },
    ], caption: 'Figure 3 · Le produit est un cinquième du travail. Ce qui fait vivre un SaaS en Algérie, c’est l’encaissement, la facture et l’onboarding.', alt: 'Pile en cinq couches : produit web et mobile centré sur un métier ; encaissement annuel d’avance, mensuel CIB/Edahabia, espèces via revendeurs ; facturation conforme avec relance douce ; hébergement documenté loi 18-07 ; onboarding humain.' },
    timeline: { title: 'À rebours : en ligne et payé au printemps 2027', unit: 'mois', items: [
      { label: 'Choix du segment, 20 entretiens', note: 'novembre 2026 : la douleur chiffrée, le prix accepté', from: 0, to: 1 },
      { label: 'Statut web-marchand et société', note: 'banque, GIE Monétique, registre, label startup', from: 0, to: 3 },
      { label: 'Développement du cœur', note: 'web + mobile, un métier, facturation intégrée', from: 1, to: 5 },
      { label: 'Dix clients pilotes payants', note: 'annuel d’avance, onboarding à la main', from: 4, to: 6 },
      { label: 'Lancement et revendeurs', note: 'avril à juin 2027 : mensuel ouvert, premières wilayas', from: 6, to: 8, accent: true },
    ], caption: 'Figure 4 · La démarche web-marchand commence le même jour que les entretiens, pas après le produit : c’est elle qui prend le plus de temps.', alt: 'Calendrier en mois à partir de novembre 2026 : entretiens 0 à 1, statut web-marchand et société 0 à 3, développement 1 à 5, dix pilotes payants 4 à 6, lancement et revendeurs 6 à 8.' },
  },
  en: {
    cover: { eyebrow: 'Problem · SaaS and subscriptions', title: ['Launching a SaaS', 'in Algeria in 2027:', 'who pays, how, when.'], subtitle: 'Do Algerian companies pay subscriptions, how to collect without an international card, and the countdown to be live by spring 2027.', left: { label: 'End of 2026', sub: 'an idea, a sector, zero paying customers' }, right: { label: 'Spring 2027', sub: 'ten paying customers, legal invoices, payments in dinars' }, note: 'Algeria · 2027' },
    market: { title: 'What changed on the payment side, in numbers (GIE Monétique, H1 2026)', items: [
      { value: '1,004', label: 'active online merchants at end of June 2026, +55% in a year' },
      { value: '15.4M', label: 'online transactions in the first half of 2026, +52%' },
      { value: '23M', label: 'cards in circulation: 19M Edahabia, 4M CIB' },
      { value: '−10%', label: 'tax (2027 finance bill) if half of receipts are electronic', accent: true },
    ], caption: 'Figure 1 · The “nobody pays online” objection has receded. In 2027 the finance bill even rewards merchants who collect electronically.', alt: 'Four figures: 1,004 online merchants at end of June 2026, 15.4 million online transactions in H1 2026, 23 million cards including 19 million Edahabia and 4 million CIB, 10% tax reduction planned by the 2027 finance bill for taxpayers with half their receipts electronic.' },
    who: { title: 'Who pays a subscription in Algeria, and who will not', columns: ['Chance of paying', 'Why'], rows: [
      { label: 'Pharmacies, clinics, practices', cells: [2, 'Measurable monthly loss (expiry, unpaid bills), budget exists'] },
      { label: 'Private schools and training centres', cells: [2, 'A dated September, parents demanding an app'] },
      { label: 'Real-estate agencies and transport', cells: [2, 'Field teams, revenue that depends on responsiveness'] },
      { label: 'Restaurants and retail', cells: [1, 'Pay for a till, rarely a second subscription'] },
      { label: 'Instagram sellers, micro-merchants', cells: [0, 'Zero software budget, WhatsApp is enough at low volume'] },
      { label: 'Large accounts and subsidiaries', cells: [1, 'Pay, but as a custom project and a tender, not a subscription'] },
    ], legend: '●  pays a subscription      ◐  sometimes      ○  does not pay', caption: 'Figure 2 · An Algerian SaaS sells to those who lose money every month without it, not to those who would find it convenient.', alt: 'Segment matrix: pharmacies, clinics, private schools, real-estate agencies and transport pay a subscription; restaurants, retail and large accounts sometimes; Instagram sellers and micro-merchants do not.' },
    stack: { title: 'The stack of an Algerian SaaS that actually collects', layers: [
      { label: 'Product', items: [{ name: 'Web + mobile app', sub: 'the owner on mobile, the team on web, Arabic and French', accent: true }, { name: 'One trade at first', sub: 'the chosen segment’s quantified pain, nothing else' }] },
      { label: 'Collection', items: [{ name: 'Annual upfront', sub: 'transfer or CIB/Edahabia, two months off, cash from day one' }, { name: 'Monthly CIB/Edahabia', sub: 'online-merchant status via your bank and GIE Monétique' }, { name: 'Cash via resellers', sub: 'activation codes sold by partners in each wilaya' }] },
      { label: 'Invoicing', items: [{ name: 'Compliant invoice, VAT, dinars', sub: 'trade register, tax ID, numbering; prerequisite for formal customers' }, { name: 'Reminders and soft suspension', sub: 'D-7, D+3, read-only at D+15, never a hard cut' }] },
      { label: 'Hosting and data', items: [{ name: 'Local or foreign cloud, documented', sub: 'Law 18-07, backups, who accesses what' }] },
      { label: 'Adoption', items: [{ name: 'Human onboarding', sub: 'one hour per customer, data imported for them, WhatsApp support' }] },
    ], caption: 'Figure 3 · The product is a fifth of the work. What keeps a SaaS alive in Algeria is collection, invoicing and onboarding.', alt: 'Five-layer stack: web and mobile product focused on one trade; annual upfront, monthly CIB/Edahabia and cash via resellers; compliant invoicing with soft reminders; documented hosting under Law 18-07; human onboarding.' },
    timeline: { title: 'Countdown: live and paid by spring 2027', unit: 'months', items: [
      { label: 'Segment choice, 20 interviews', note: 'November 2026: quantified pain, accepted price', from: 0, to: 1 },
      { label: 'Online-merchant status and company', note: 'bank, GIE Monétique, register, startup label', from: 0, to: 3 },
      { label: 'Core development', note: 'web + mobile, one trade, built-in invoicing', from: 1, to: 5 },
      { label: 'Ten paying pilots', note: 'annual upfront, onboarding by hand', from: 4, to: 6 },
      { label: 'Launch and resellers', note: 'April to June 2027: monthly open, first wilayas', from: 6, to: 8, accent: true },
    ], caption: 'Figure 4 · The online-merchant process starts the same day as the interviews, not after the product: it is the longest item.', alt: 'Timeline in months from November 2026: interviews 0 to 1, merchant status and company 0 to 3, development 1 to 5, ten paying pilots 4 to 6, launch and resellers 6 to 8.' },
  },
  ar: {
    cover: { eyebrow: 'مشكلة · SaaS والاشتراكات', title: ['إطلاق SaaS', 'في الجزائر سنة 2027:', 'من يدفع، كيف، متى.'], subtitle: 'هل تدفع الشركات الجزائرية اشتراكات، كيف تحصّل بلا بطاقة دولية، والعد التنازلي لتكون على الخط في ربيع 2027.', left: { label: 'نهاية 2026', sub: 'فكرة، قطاع، صفر زبون يدفع' }, right: { label: 'ربيع 2027', sub: 'عشرة زبائن يدفعون، فاتورة قانونية، تحصيل بالدينار' }, note: 'الجزائر · 2027' },
    market: { title: 'ما تغيّر في الدفع، بالأرقام (GIE Monétique، السداسي الأول 2026)', items: [
      { value: '1 004', label: 'تاجر إلكتروني نشط نهاية جوان 2026، +55 % في سنة' },
      { value: '15,4 م', label: 'معاملة عبر الإنترنت في السداسي الأول 2026، +52 %' },
      { value: '23 م', label: 'بطاقة متداولة: 19 م الذهبية و4 م CIB' },
      { value: '−10 %', label: 'من الضريبة (PLF 2027) إن كان نصف التحصيل إلكترونياً', accent: true },
    ], caption: 'الشكل 1 · تراجعت حجة «لا أحد يدفع عبر الإنترنت». وفي 2027 يكافئ مشروع قانون المالية حتى التجار الذين يحصّلون إلكترونياً.', alt: 'أربعة أرقام عن الدفع الإلكتروني في الجزائر.' },
    who: { title: 'من يدفع اشتراكاً في الجزائر، ومن لن يدفع', columns: ['حظ الدفع', 'لماذا'], rows: [
      { label: 'صيدليات، عيادات، مكاتب', cells: [2, 'خسارة شهرية قابلة للقياس (انتهاء صلاحية، ديون)، ميزانية موجودة'] },
      { label: 'مدارس خاصة ومراكز تكوين', cells: [2, 'دخول مدرسي بتاريخ، أولياء يطالبون بتطبيق'] },
      { label: 'وكالات عقارية ونقل', cells: [2, 'فرق ميدانية، رقم أعمال يعتمد على سرعة الرد'] },
      { label: 'مطاعم وتجارة تجزئة', cells: [1, 'يدفعون لأداة صندوق، نادراً لاشتراك ثانٍ'] },
      { label: 'بائعو إنستغرام وصغار التجار', cells: [0, 'لا ميزانية للبرمجيات، واتساب يكفي ما دام الحجم صغيراً'] },
      { label: 'الحسابات الكبرى والفروع', cells: [1, 'يدفعون، لكن كمشروع مخصص ومناقصة، لا كاشتراك'] },
    ], legend: '●  يدفع اشتراكاً      ◐  أحياناً      ○  لا يدفع', caption: 'الشكل 2 · يُباع SaaS الجزائري لمن يخسر المال كل شهر بدونه، لا لمن يجده عملياً.', alt: 'مصفوفة القطاعات حسب حظ دفع الاشتراك.' },
    stack: { title: 'طبقات SaaS جزائري يحصّل فعلاً', layers: [
      { label: 'المنتج', items: [{ name: 'ويب + تطبيق جوّال', sub: 'المسيّر على الجوّال، الفريق على الويب، عربي وفرنسي', accent: true }, { name: 'مهنة واحدة في البداية', sub: 'الألم المقيَّس للقطاع المختار، لا غير' }] },
      { label: 'التحصيل', items: [{ name: 'سنوي مسبق', sub: 'تحويل أو CIB/الذهبية، خصم شهرين، سيولة من اليوم الأول' }, { name: 'شهري CIB/الذهبية', sub: 'صفة تاجر إلكتروني عبر بنكك وGIE Monétique' }, { name: 'نقد عبر موزعين', sub: 'رموز تفعيل يبيعها شركاء في الولايات' }] },
      { label: 'الفوترة', items: [{ name: 'فاتورة مطابقة، TVA، دينار', sub: 'سجل تجاري، NIF، ترقيم؛ شرط الزبائن الرسميين' }, { name: 'تذكير وتعليق لطيف', sub: 'ي-7، ي+3، قراءة فقط عند ي+15، لا قطع مفاجئ أبداً' }] },
      { label: 'الاستضافة والبيانات', items: [{ name: 'سحابة محلية أو أجنبية موثّقة', sub: 'القانون 18-07، نسخ احتياطية، من يصل إلى ماذا' }] },
      { label: 'التبنّي', items: [{ name: 'مرافقة بشرية', sub: 'ساعة لكل زبون، استرجاع بياناته بدلاً عنه، دعم واتساب' }] },
    ], caption: 'الشكل 3 · المنتج خُمس العمل. ما يُبقي SaaS حياً في الجزائر هو التحصيل والفاتورة والمرافقة.', alt: 'طبقات SaaS جزائري: منتج، تحصيل، فوترة، استضافة، تبنّي.' },
    timeline: { title: 'عدّ تنازلي: على الخط ومدفوع في ربيع 2027', unit: 'أشهر', items: [
      { label: 'اختيار القطاع، 20 مقابلة', note: 'نوفمبر 2026: الألم المقيَّس، السعر المقبول', from: 0, to: 1 },
      { label: 'صفة التاجر الإلكتروني والشركة', note: 'بنك، GIE Monétique، سجل، علامة ستارت-أب', from: 0, to: 3 },
      { label: 'تطوير النواة', note: 'ويب + جوّال، مهنة واحدة، فوترة مدمجة', from: 1, to: 5 },
      { label: 'عشرة زبائن تجريبيين يدفعون', note: 'سنوي مسبق، مرافقة يدوية', from: 4, to: 6 },
      { label: 'الإطلاق والموزعون', note: 'أفريل إلى جوان 2027: الشهري مفتوح، أولى الولايات', from: 6, to: 8, accent: true },
    ], caption: 'الشكل 4 · تبدأ إجراءات التاجر الإلكتروني في نفس يوم المقابلات، لا بعد المنتج: فهي الأطول.', alt: 'جدول زمني بالأشهر من نوفمبر 2026 إلى ربيع 2027.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      market: { svg: stats({ title: t.market.title, items: t.market.items, rtl }), caption: t.market.caption, alt: t.market.alt },
      who: { svg: matrix({ title: t.who.title, columns: t.who.columns, rows: t.who.rows, legend: t.who.legend, rtl }), caption: t.who.caption, alt: t.who.alt },
      stack: { svg: layers({ title: t.stack.title, layers: t.stack.layers, rtl }), caption: t.stack.caption, alt: t.stack.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 8, tick: 1, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
    },
  };
}
