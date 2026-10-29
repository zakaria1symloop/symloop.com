import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'apres-jumia-creer-marketplace-ecommerce-algerie-2027-verticale-logistique-paiement';

const T = {
  fr: {
    cover: { eyebrow: 'Série · Vu en France, à construire en Algérie · #07', title: ['Après Jumia :', 'la marketplace e-commerce', 'en Algérie en 2027.'], subtitle: 'Pourquoi le modèle généraliste n’a pas tenu, ce qu’une marketplace verticale change, les quatre verticales où elle tient, la pile à construire, et le calendrier.', left: { label: 'Mars 2026', sub: 'le généraliste ferme, retour à Instagram' }, right: { label: 'Fin 2027', sub: 'une verticale, vendeurs vérifiés, livraison maîtrisée' }, note: 'Algérie · 2027' },
    why: { title: 'Pourquoi le généraliste n’a pas tenu, et ce que la verticale change', columns: ['Marketplace généraliste', 'Marketplace verticale'], rows: [
      { label: 'Paiement', cells: ['Espèces à la livraison, refus fréquents, trésorerie lourde', 'Acompte ou paiement électronique, refus réduit à la source'] },
      { label: 'Logistique', cells: ['Tout le pays, tous les produits, des hubs partout', 'Une catégorie, une ville au départ, des transporteurs partenaires'] },
      { label: 'Catalogue', cells: ['Des milliers de vendeurs, des fiches inégales, des contrefaçons', 'Vendeurs vérifiés, fiches normalisées, garantie'] },
      { label: 'Acquisition', cells: ['Publicité massive face aux géants chinois', 'Une communauté métier, des achats qui se répètent'] },
      { label: 'Marge', cells: ['Commission faible sur des produits génériques', 'Commission et services : livraison, financement, garantie, SAV'] },
      { label: 'Cadre 2027', cells: ['Plateformes étrangères désormais soumises à identification et TVA', 'Plateforme locale conforme dès le premier jour'] },
    ], caption: 'Figure 1 · Le généraliste perd sur chaque ligne parce qu’il doit tout faire partout. La verticale gagne parce qu’elle choisit.', alt: 'Matrice comparant marketplace généraliste et verticale sur six lignes : paiement, logistique, catalogue, acquisition, marge, cadre 2027.' },
    verticals: { title: 'Quatre verticales où une marketplace tient en Algérie en 2027', items: [
      { n: 'A', label: 'Pièces auto et équipement', sub: 'Catalogue technique par véhicule, vendeurs professionnels, garagistes comme acheteurs récurrents.' },
      { n: 'B', label: 'Matériaux et outillage', sub: 'Artisans et entrepreneurs qui commandent chaque semaine, livraison lourde organisée, crédit fournisseur.' },
      { n: 'C', label: 'Parapharmacie et santé', sub: 'Officines vérifiées, produits réglementés, livraison contrôlée, ordonnance quand il le faut.', accent: true },
      { n: 'D', label: 'Électroménager reconditionné', sub: 'Garantie, SAV, paiement échelonné : ce que le généraliste ne pouvait pas promettre.' },
    ], caption: 'Figure 2 · Le point commun : un acheteur professionnel ou récurrent, un produit qui exige une garantie, une logistique qui se maîtrise.', alt: 'Quatre verticales : pièces auto et équipement, matériaux et outillage, parapharmacie et santé, électroménager reconditionné.' },
    stack: { title: 'La pile d’une marketplace verticale, après Jumia', layers: [
      { label: 'Acheteurs', items: [{ name: 'Application et site, AR/FR', sub: 'catalogue normalisé, prix TTC, avis vérifiés', accent: true }] },
      { label: 'Vendeurs vérifiés', items: [{ name: 'Extranet vendeur', sub: 'stock, commandes, relevés, factures' }, { name: 'Vérification', sub: 'registre, identité, premier contrôle humain' }] },
      { label: 'Paiement', items: [{ name: 'CIB, Edahabia, QR', sub: 'séquestre jusqu’à la livraison' }, { name: 'Acompte ou COD enregistré', sub: 'pour réduire le refus à la source' }] },
      { label: 'Logistique', items: [{ name: 'Transporteurs partenaires', sub: 'confirmation, suivi, retours, paiement à la porte' }] },
      { label: 'Conformité et IA', items: [{ name: 'PLF 2027, loi 18-07, prédiction de refus, support', sub: 'plateforme identifiée, commissions avec TVA' }] },
    ], caption: 'Figure 3 · Les deux couches qui ont coulé le généraliste, paiement et logistique, sont celles qu’une verticale peut maîtriser parce qu’elle est petite.', alt: 'Cinq couches : acheteurs, vendeurs vérifiés, paiement avec séquestre et acompte, logistique partenaire, conformité et IA.' },
    timeline: { title: 'Neuf mois : une verticale, une ville', unit: 'mois', items: [
      { label: 'Choix de la verticale, cinquante vendeurs', note: 'recrutés à la main, avant le code', from: 0, to: 2 },
      { label: 'Paiement et transporteurs partenaires', note: 'web-marchand, séquestre, contrats de livraison', from: 1, to: 4 },
      { label: 'Développement des deux faces', note: 'acheteur, vendeur, catalogue normalisé', from: 2, to: 6 },
      { label: 'Pilote : Alger, une catégorie', note: 'refus, délais et litiges mesurés chaque semaine', from: 6, to: 8 },
      { label: 'Deuxième ville ou deuxième catégorie', note: 'seulement si le pilote tient ses chiffres', from: 8, to: 9, accent: true },
    ], caption: 'Figure 4 · Les cinquante vendeurs se recrutent avant le code, et les transporteurs se contractent avant le pilote.', alt: 'Calendrier en mois : verticale et vendeurs 0 à 2, paiement et transporteurs 1 à 4, développement 2 à 6, pilote 6 à 8, extension 8 à 9.' },
  },
  en: {
    cover: { eyebrow: 'Series · Seen in France, to build in Algeria · #07', title: ['After Jumia:', 'the e-commerce marketplace', 'in Algeria in 2027.'], subtitle: 'Why the generalist model did not hold, what a vertical marketplace changes, the four verticals where it holds, the stack to build, and the calendar.', left: { label: 'March 2026', sub: 'the generalist closes, back to Instagram' }, right: { label: 'End of 2027', sub: 'one vertical, verified sellers, delivery under control' }, note: 'Algeria · 2027' },
    why: { title: 'Why the generalist did not hold, and what the vertical changes', columns: ['Generalist marketplace', 'Vertical marketplace'], rows: [
      { label: 'Payment', cells: ['Cash on delivery, frequent refusals, heavy cash position', 'Deposit or electronic payment, refusal reduced at the source'] },
      { label: 'Logistics', cells: ['The whole country, every product, hubs everywhere', 'One category, one city at first, partner carriers'] },
      { label: 'Catalogue', cells: ['Thousands of sellers, uneven listings, counterfeits', 'Verified sellers, standardised listings, warranty'] },
      { label: 'Acquisition', cells: ['Massive advertising against the Chinese giants', 'A trade community, purchases that repeat'] },
      { label: 'Margin', cells: ['Low commission on generic products', 'Commission plus services: delivery, financing, warranty, after-sales'] },
      { label: '2027 framework', cells: ['Foreign platforms now subject to registration and VAT', 'Local platform compliant from day one'] },
    ], caption: 'Figure 1 · The generalist loses on every line because it has to do everything everywhere. The vertical wins because it chooses.', alt: 'Matrix comparing generalist and vertical marketplaces on six rows: payment, logistics, catalogue, acquisition, margin, 2027 framework.' },
    verticals: { title: 'Four verticals where a marketplace holds in Algeria in 2027', items: [
      { n: 'A', label: 'Auto parts and equipment', sub: 'Technical catalogue by vehicle, professional sellers, garages as recurring buyers.' },
      { n: 'B', label: 'Building materials and tools', sub: 'Tradespeople and contractors ordering every week, heavy delivery organised, supplier credit.' },
      { n: 'C', label: 'Parapharmacy and health', sub: 'Verified pharmacies, regulated products, controlled delivery, prescription when required.', accent: true },
      { n: 'D', label: 'Refurbished appliances', sub: 'Warranty, after-sales, instalment payment: what the generalist could not promise.' },
    ], caption: 'Figure 2 · The common point: a professional or recurring buyer, a product that demands a warranty, logistics that can be mastered.', alt: 'Four verticals: auto parts and equipment, building materials and tools, parapharmacy and health, refurbished appliances.' },
    stack: { title: 'The stack of a vertical marketplace, after Jumia', layers: [
      { label: 'Buyers', items: [{ name: 'App and site, AR/FR', sub: 'standardised catalogue, prices incl. tax, verified reviews', accent: true }] },
      { label: 'Verified sellers', items: [{ name: 'Seller extranet', sub: 'stock, orders, statements, invoices' }, { name: 'Verification', sub: 'register, identity, first human check' }] },
      { label: 'Payment', items: [{ name: 'CIB, Edahabia, QR', sub: 'escrow until delivery' }, { name: 'Deposit or recorded COD', sub: 'to reduce refusal at the source' }] },
      { label: 'Logistics', items: [{ name: 'Partner carriers', sub: 'confirmation, tracking, returns, payment at the door' }] },
      { label: 'Compliance and AI', items: [{ name: '2027 finance bill, Law 18-07, refusal prediction, support', sub: 'registered platform, commissions with VAT' }] },
    ], caption: 'Figure 3 · The two layers that sank the generalist, payment and logistics, are the ones a vertical can master because it is small.', alt: 'Five layers: buyers, verified sellers, payment with escrow and deposit, partner logistics, compliance and AI.' },
    timeline: { title: 'Nine months: one vertical, one city', unit: 'months', items: [
      { label: 'Vertical choice, fifty sellers', note: 'recruited by hand, before the code', from: 0, to: 2 },
      { label: 'Payment and partner carriers', note: 'merchant status, escrow, delivery contracts', from: 1, to: 4 },
      { label: 'Development of both sides', note: 'buyer, seller, standardised catalogue', from: 2, to: 6 },
      { label: 'Pilot: Algiers, one category', note: 'refusals, delays and disputes measured weekly', from: 6, to: 8 },
      { label: 'Second city or second category', note: 'only if the pilot holds its numbers', from: 8, to: 9, accent: true },
    ], caption: 'Figure 4 · The fifty sellers are recruited before the code, and the carriers are contracted before the pilot.', alt: 'Timeline in months: vertical and sellers 0 to 2, payment and carriers 1 to 4, development 2 to 6, pilot 6 to 8, extension 8 to 9.' },
  },
  ar: {
    cover: { eyebrow: 'سلسلة · رأيناه في فرنسا، نبنيه في الجزائر · #07', title: ['بعد جوميا:', 'سوق التجارة الإلكترونية', 'في الجزائر سنة 2027.'], subtitle: 'لماذا لم يصمد النموذج العام، ما تغيّره السوق المتخصصة، المجالات الأربعة التي تصمد فيها، الطبقات التي تُبنى، والجدول.', left: { label: 'مارس 2026', sub: 'السوق العامة تغلق، عودة إلى إنستغرام' }, right: { label: 'نهاية 2027', sub: 'مجال واحد، بائعون متحقَّق منهم، توصيل مضبوط' }, note: 'الجزائر · 2027' },
    why: { title: 'لماذا لم تصمد السوق العامة، وما تغيّره المتخصصة', columns: ['سوق عامة', 'سوق متخصصة'], rows: [
      { label: 'الدفع', cells: ['نقد عند الاستلام، رفض متكرر، سيولة ثقيلة', 'عربون أو دفع إلكتروني، رفض مقلَّل من المصدر'] },
      { label: 'اللوجستيك', cells: ['كل البلد، كل المنتجات، محاور في كل مكان', 'فئة واحدة، مدينة واحدة في البداية، ناقلون شركاء'] },
      { label: 'الكتالوج', cells: ['آلاف البائعين، بطاقات متفاوتة، تقليد', 'بائعون متحقَّق منهم، بطاقات موحَّدة، ضمان'] },
      { label: 'الاكتساب', cells: ['إعلانات ضخمة في مواجهة العمالقة الصينيين', 'مجتمع مهني، مشتريات تتكرر'] },
      { label: 'الهامش', cells: ['عمولة ضعيفة على منتجات عامة', 'عمولة وخدمات: توصيل، تمويل، ضمان، خدمة ما بعد البيع'] },
      { label: 'إطار 2027', cells: ['منصات أجنبية باتت خاضعة للتعريف وTVA', 'منصة محلية مطابقة منذ اليوم الأول'] },
    ], caption: 'الشكل 1 · تخسر السوق العامة في كل سطر لأنها مضطرة لفعل كل شيء في كل مكان. وتربح المتخصصة لأنها تختار.', alt: 'مصفوفة تقارن السوق العامة بالمتخصصة في ستة أسطر.' },
    verticals: { title: 'أربعة مجالات تصمد فيها سوق إلكترونية في الجزائر 2027', items: [
      { n: 'أ', label: 'قطع غيار السيارات والتجهيزات', sub: 'كتالوج تقني حسب المركبة، بائعون محترفون، ميكانيكيون كمشترين متكررين.' },
      { n: 'ب', label: 'مواد البناء والعدد', sub: 'حرفيون ومقاولون يطلبون كل أسبوع، توصيل ثقيل منظَّم، ائتمان مورّد.' },
      { n: 'ج', label: 'شبه الصيدلة والصحة', sub: 'صيدليات متحقَّق منها، منتجات منظَّمة، توصيل مراقَب، وصفة عند الحاجة.', accent: true },
      { n: 'د', label: 'أجهزة كهرومنزلية مجدَّدة', sub: 'ضمان، خدمة ما بعد البيع، دفع بالتقسيط: ما لم تستطع السوق العامة الوعد به.' },
    ], caption: 'الشكل 2 · القاسم المشترك: مشترٍ محترف أو متكرر، منتج يتطلب ضماناً، لوجستيك يمكن ضبطه.', alt: 'أربعة مجالات لسوق إلكترونية متخصصة في الجزائر.' },
    stack: { title: 'طبقات سوق متخصصة، بعد جوميا', layers: [
      { label: 'المشترون', items: [{ name: 'تطبيق وموقع، عربي/فرنسي', sub: 'كتالوج موحَّد، أسعار شاملة، تقييمات موثَّقة', accent: true }] },
      { label: 'بائعون متحقَّق منهم', items: [{ name: 'بوابة البائع', sub: 'مخزون، طلبات، كشوف، فواتير' }, { name: 'التحقق', sub: 'سجل، هوية، مراقبة بشرية أولى' }] },
      { label: 'الدفع', items: [{ name: 'CIB، الذهبية، QR', sub: 'حجز حتى التسليم' }, { name: 'عربون أو دفع عند الاستلام مسجَّل', sub: 'لتقليل الرفض من المصدر' }] },
      { label: 'اللوجستيك', items: [{ name: 'ناقلون شركاء', sub: 'تأكيد، تتبع، مرتجعات، دفع عند الباب' }] },
      { label: 'الامتثال والذكاء الاصطناعي', items: [{ name: 'قانون المالية 2027، القانون 18-07، توقّع الرفض، دعم', sub: 'منصة معرَّفة، عمولات بـTVA' }] },
    ], caption: 'الشكل 3 · الطبقتان اللتان أغرقتا السوق العامة، الدفع واللوجستيك، هما ما تستطيع المتخصصة ضبطه لأنها صغيرة.', alt: 'خمس طبقات لسوق متخصصة.' },
    timeline: { title: 'تسعة أشهر: مجال واحد، مدينة واحدة', unit: 'أشهر', items: [
      { label: 'اختيار المجال، خمسون بائعاً', note: 'مجنَّدون يدوياً قبل الكود', from: 0, to: 2 },
      { label: 'الدفع والناقلون الشركاء', note: 'تاجر إلكتروني، حجز، عقود توصيل', from: 1, to: 4 },
      { label: 'تطوير الوجهين', note: 'مشترٍ، بائع، كتالوج موحَّد', from: 2, to: 6 },
      { label: 'تجربة: الجزائر العاصمة، فئة واحدة', note: 'رفض وآجال ونزاعات تُقاس كل أسبوع', from: 6, to: 8 },
      { label: 'مدينة ثانية أو فئة ثانية', note: 'فقط إن حافظت التجربة على أرقامها', from: 8, to: 9, accent: true },
    ], caption: 'الشكل 4 · يُجنَّد البائعون الخمسون قبل الكود، ويُتعاقد مع الناقلين قبل التجربة.', alt: 'جدول زمني بالأشهر لإطلاق سوق متخصصة في 2027.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      why: { svg: matrix({ title: t.why.title, columns: t.why.columns, rows: t.why.rows, highlight: 1, rtl }), caption: t.why.caption, alt: t.why.alt },
      verticals: { svg: steps({ title: t.verticals.title, steps: t.verticals.items, arrows: false, rtl }), caption: t.verticals.caption, alt: t.verticals.alt },
      stack: { svg: layers({ title: t.stack.title, layers: t.stack.layers, rtl }), caption: t.stack.caption, alt: t.stack.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 9, tick: 1, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
    },
  };
}
