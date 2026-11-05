import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele';

const T = {
  fr: {
    cover: { eyebrow: 'Problème · Plateforme de mise en relation', title: ['Une marketplace', 'en Algérie en 2027 :', 'comment l’argent circule.'], subtitle: 'Ce que le PLF 2027 impose aux plateformes, le circuit de l’argent entre client, plateforme et vendeur, les modèles de revenu qui tiennent, et le calendrier pour lancer une ville, une catégorie.', left: { label: 'Aujourd’hui', sub: 'un groupe Facebook, des vendeurs, zéro commission' }, right: { label: 'Fin 2027', sub: 'paiement séquestré, commission facturée' }, note: 'Algérie · 2027' },
    money: { title: 'Comment l’argent circule dans une marketplace algérienne', items: [
      { n: '01', label: 'Le client paie la plateforme', sub: 'Carte CIB/Edahabia, QR DZMobPay, ou espèces à la livraison enregistrées. Jamais le vendeur directement.' },
      { n: '02', label: 'La plateforme garde l’argent', sub: 'Séquestre jusqu’à la livraison ou le rendez-vous. Facture de commission avec TVA émise au vendeur.', accent: true },
      { n: '03', label: 'Le vendeur livre, le client confirme', sub: 'Confirmation dans l’application, ou délai automatique. Litige ouvert si problème, argent bloqué.' },
      { n: '04', label: 'La plateforme reverse', sub: 'Virement au vendeur à J+2 ou J+7, commission déduite. Relevé mensuel, déclaration annuelle au fisc.' },
    ], caption: 'Figure 1 · La marketplace qui laisse le client payer le vendeur directement n’a ni commission, ni données, ni raison d’exister.', alt: 'Quatre étapes : le client paie la plateforme, la plateforme garde l’argent en séquestre et facture la commission avec TVA, le vendeur livre et le client confirme, la plateforme reverse au vendeur commission déduite.' },
    revenue: { title: 'Les modèles de revenu, et lesquels tiennent en Algérie', columns: ['Tient ?', 'À quelle condition'], rows: [
      { label: 'Commission sur chaque transaction', cells: [2, 'Le paiement passe par la plateforme ; sinon les deux parties se contournent'] },
      { label: 'Abonnement vendeur professionnel', cells: [2, 'Vendeurs pros qui vivent de la plateforme : agences, cabinets, boutiques'] },
      { label: 'Mise en avant payée, annonces premium', cells: [2, 'Du trafic d’abord ; c’est le modèle qui a fait les grands sites d’annonces'] },
      { label: 'Lead payé, devis mis en relation', cells: [1, 'B2B et services à forte valeur : travaux, équipement, assurance'] },
      { label: 'Frais de service côté client', cells: [1, 'Faible et visible ; au-delà, le client passe par WhatsApp'] },
      { label: 'Publicité', cells: [0, 'Rien avant des centaines de milliers de visites par mois'] },
    ], legend: '●  tient      ◐  parfois      ○  ne tient pas au départ', caption: 'Figure 2 · Commission et abonnement vendeur exigent que l’argent passe par vous. La mise en avant payée exige du trafic. Choisissez un modèle au lancement, pas trois.', alt: 'Matrice des modèles de revenu d’une marketplace en Algérie : commission, abonnement vendeur et mise en avant payée tiennent ; lead payé et frais de service parfois ; publicité ne tient pas au départ.' },
    inside: { title: 'Ce qu’il y a dans une plateforme de mise en relation', layers: [
      { label: 'Deux faces', items: [{ name: 'Application client', sub: 'recherche, commande ou réservation, paiement, suivi, AR/FR', accent: true }, { name: 'Application ou portail vendeur', sub: 'annonces, commandes, agenda, relevés, reversements' }] },
      { label: 'Confiance', items: [{ name: 'Vérification des vendeurs', sub: 'identité, registre, premier contrôle humain' }, { name: 'Avis et litiges', sub: 'avis après transaction, argent bloqué pendant le litige' }] },
      { label: 'Argent', items: [{ name: 'Encaissement et séquestre', sub: 'CIB/Edahabia, QR, COD enregistré' }, { name: 'Commission facturée, TVA', sub: 'facture au vendeur à chaque transaction' }, { name: 'Reversements', sub: 'virements groupés, relevés mensuels' }] },
      { label: 'Opérations', items: [{ name: 'Support AR/FR/darija', sub: 'humain puis IA sur vos règles' }, { name: 'Logistique si biens', sub: 'transporteurs, COD, retours' }] },
      { label: 'Conformité', items: [{ name: 'Plateforme identifiée au fisc, déclaration annuelle', sub: 'PLF 2027 ; données loi 18-07' }] },
    ], caption: 'Figure 3 · Les deux applications sont la partie visible. La confiance et l’argent sont ce que les vendeurs paient.', alt: 'Cinq couches : application client et portail vendeur ; vérification, avis et litiges ; encaissement, séquestre, commission facturée, reversements ; support et logistique ; conformité fiscale PLF 2027 et loi 18-07.' },
    timeline: { title: 'Lancer en 2027 : une ville, une catégorie', unit: 'mois', items: [
      { label: 'Cadrage et trente vendeurs recrutés à la main', note: 'avant toute ligne de code', from: 0, to: 2 },
      { label: 'Société, web-marchand, identification fiscale', note: 'banque et GIE Monétique, plateforme déclarée', from: 0, to: 3 },
      { label: 'Développement des deux faces et du séquestre', note: 'client, vendeur, encaissement, reversements', from: 2, to: 6 },
      { label: 'Pilote : une ville, une catégorie', note: 'trente vendeurs, transactions réelles, litiges réels', from: 6, to: 8 },
      { label: 'Deuxième catégorie ou deuxième ville', note: 'seulement si le pilote reverse de l’argent chaque semaine', from: 8, to: 9, accent: true },
    ], caption: 'Figure 4 · Les trente premiers vendeurs se recrutent avant le code. Une marketplace vide le jour du lancement ne se remplit jamais.', alt: 'Calendrier en mois : cadrage et vendeurs 0 à 2, société et identification 0 à 3, développement 2 à 6, pilote 6 à 8, extension 8 à 9.' },
  },
  en: {
    cover: { eyebrow: 'Problem · Marketplace platform', title: ['A marketplace', 'in Algeria in 2027:', 'how the money flows.'], subtitle: 'What the 2027 finance bill imposes on platforms, the money circuit between customer, platform and seller, the revenue models that hold, and the calendar to launch one city, one category.', left: { label: 'Today', sub: 'a Facebook group, sellers, zero commission' }, right: { label: 'End of 2027', sub: 'escrowed payment, invoiced commission' }, note: 'Algeria · 2027' },
    money: { title: 'How money flows in an Algerian marketplace', items: [
      { n: '01', label: 'The customer pays the platform', sub: 'CIB/Edahabia card, QR DZMobPay, or recorded cash on delivery. Never the seller directly.' },
      { n: '02', label: 'The platform holds the money', sub: 'Escrow until delivery or appointment. Commission invoice with VAT issued to the seller.', accent: true },
      { n: '03', label: 'The seller delivers, the customer confirms', sub: 'Confirmation in the app, or automatic delay. Dispute opened if a problem, money frozen.' },
      { n: '04', label: 'The platform pays out', sub: 'Transfer to the seller at D+2 or D+7, commission deducted. Monthly statement, annual tax declaration.' },
    ], caption: 'Figure 1 · A marketplace that lets the customer pay the seller directly has no commission, no data and no reason to exist.', alt: 'Four steps: the customer pays the platform, the platform holds the money in escrow and invoices the commission with VAT, the seller delivers and the customer confirms, the platform pays out to the seller minus commission.' },
    revenue: { title: 'Revenue models, and which ones hold in Algeria', columns: ['Holds?', 'Under what condition'], rows: [
      { label: 'Commission on each transaction', cells: [2, 'Payment goes through the platform; otherwise both sides bypass you'] },
      { label: 'Professional seller subscription', cells: [2, 'Pro sellers who live off the platform: agencies, practices, shops'] },
      { label: 'Paid promotion, premium listings', cells: [2, 'Traffic first; it is the model that built the big classifieds sites'] },
      { label: 'Paid lead, matched quotes', cells: [1, 'B2B and high-value services: works, equipment, insurance'] },
      { label: 'Customer-side service fee', cells: [1, 'Low and visible; beyond that the customer moves to WhatsApp'] },
      { label: 'Advertising', cells: [0, 'Nothing before hundreds of thousands of visits a month'] },
    ], legend: '●  holds      ◐  sometimes      ○  does not hold at launch', caption: 'Figure 2 · Commission and seller subscription require the money to go through you. Paid promotion requires traffic. Pick one model at launch, not three.', alt: 'Matrix of marketplace revenue models in Algeria: commission, seller subscription and paid promotion hold; paid lead and service fee sometimes; advertising does not hold at launch.' },
    inside: { title: 'What is inside a marketplace platform', layers: [
      { label: 'Two sides', items: [{ name: 'Customer app', sub: 'search, order or booking, payment, tracking, AR/FR', accent: true }, { name: 'Seller app or portal', sub: 'listings, orders, calendar, statements, payouts' }] },
      { label: 'Trust', items: [{ name: 'Seller verification', sub: 'identity, register, first human check' }, { name: 'Reviews and disputes', sub: 'review after transaction, money frozen during dispute' }] },
      { label: 'Money', items: [{ name: 'Collection and escrow', sub: 'CIB/Edahabia, QR, recorded COD' }, { name: 'Invoiced commission, VAT', sub: 'invoice to the seller on each transaction' }, { name: 'Payouts', sub: 'batched transfers, monthly statements' }] },
      { label: 'Operations', items: [{ name: 'AR/FR/darija support', sub: 'human then AI on your rules' }, { name: 'Logistics if goods', sub: 'carriers, COD, returns' }] },
      { label: 'Compliance', items: [{ name: 'Platform registered with the tax administration, annual declaration', sub: '2027 finance bill; Law 18-07 data' }] },
    ], caption: 'Figure 3 · The two apps are the visible part. Trust and money are what sellers pay for.', alt: 'Five layers: customer app and seller portal; verification, reviews and disputes; collection, escrow, invoiced commission, payouts; support and logistics; tax compliance under the 2027 finance bill and Law 18-07.' },
    timeline: { title: 'Launching in 2027: one city, one category', unit: 'months', items: [
      { label: 'Scoping and thirty sellers recruited by hand', note: 'before any line of code', from: 0, to: 2 },
      { label: 'Company, merchant status, tax registration', note: 'bank and GIE Monétique, platform declared', from: 0, to: 3 },
      { label: 'Development of both sides and escrow', note: 'customer, seller, collection, payouts', from: 2, to: 6 },
      { label: 'Pilot: one city, one category', note: 'thirty sellers, real transactions, real disputes', from: 6, to: 8 },
      { label: 'Second category or second city', note: 'only if the pilot pays out money every week', from: 8, to: 9, accent: true },
    ], caption: 'Figure 4 · The first thirty sellers are recruited before the code. A marketplace empty on launch day never fills up.', alt: 'Timeline in months: scoping and sellers 0 to 2, company and registration 0 to 3, development 2 to 6, pilot 6 to 8, extension 8 to 9.' },
  },
  ar: {
    cover: { eyebrow: 'مشكلة · منصة وساطة', title: ['سوق إلكترونية', 'في الجزائر سنة 2027:', 'كيف يتحرك المال.'], subtitle: 'ما يفرضه مشروع قانون المالية 2027 على المنصات، دورة المال بين الزبون والمنصة والبائع، نماذج الإيراد التي تصمد، والجدول لإطلاق مدينة واحدة وفئة واحدة.', left: { label: 'اليوم', sub: 'مجموعة فيسبوك، بائعون، صفر عمولة' }, right: { label: 'نهاية 2027', sub: 'دفع محجوز، عمولة مفوترة' }, note: 'الجزائر · 2027' },
    money: { title: 'كيف يتحرك المال في سوق إلكترونية جزائرية', items: [
      { n: '01', label: 'الزبون يدفع للمنصة', sub: 'بطاقة CIB/الذهبية، QR DZMobPay، أو نقد عند الاستلام مسجَّل. أبداً للبائع مباشرة.' },
      { n: '02', label: 'المنصة تحتفظ بالمال', sub: 'حجز حتى التسليم أو الموعد. فاتورة عمولة بـTVA تصدر للبائع.', accent: true },
      { n: '03', label: 'البائع يسلّم، الزبون يؤكد', sub: 'تأكيد في التطبيق أو مهلة تلقائية. نزاع يُفتح عند مشكلة، والمال مجمَّد.' },
      { n: '04', label: 'المنصة تحوّل', sub: 'تحويل للبائع في ي+2 أو ي+7 بعد خصم العمولة. كشف شهري، تصريح سنوي للضرائب.' },
    ], caption: 'الشكل 1 · السوق التي تترك الزبون يدفع للبائع مباشرة لا عمولة لها ولا بيانات ولا سبب لوجودها.', alt: 'أربع خطوات لدورة المال في سوق إلكترونية جزائرية.' },
    revenue: { title: 'نماذج الإيراد، وأيها يصمد في الجزائر', columns: ['يصمد؟', 'بأي شرط'], rows: [
      { label: 'عمولة على كل معاملة', cells: [2, 'الدفع يمر عبر المنصة؛ وإلا تجاوزك الطرفان'] },
      { label: 'اشتراك بائع محترف', cells: [2, 'بائعون محترفون يعيشون من المنصة: وكالات، عيادات، محلات'] },
      { label: 'إبراز مدفوع، إعلانات مميزة', cells: [2, 'الزيارات أولاً؛ هو النموذج الذي صنع مواقع الإعلانات الكبرى'] },
      { label: 'عميل محتمل مدفوع، طلبات تسعير', cells: [1, 'B2B وخدمات عالية القيمة: أشغال، تجهيزات، تأمين'] },
      { label: 'رسوم خدمة على الزبون', cells: [1, 'منخفضة ومرئية؛ فوق ذلك ينتقل الزبون إلى واتساب'] },
      { label: 'إعلانات', cells: [0, 'لا شيء قبل مئات آلاف الزيارات شهرياً'] },
    ], legend: '●  يصمد      ◐  أحياناً      ○  لا يصمد في البداية', caption: 'الشكل 2 · العمولة واشتراك البائع يتطلبان أن يمر المال عبرك. الإبراز المدفوع يتطلب زيارات. اختر نموذجاً واحداً عند الإطلاق لا ثلاثة.', alt: 'مصفوفة نماذج إيراد سوق إلكترونية في الجزائر.' },
    inside: { title: 'ما داخل منصة وساطة', layers: [
      { label: 'وجهان', items: [{ name: 'تطبيق الزبون', sub: 'بحث، طلب أو حجز، دفع، متابعة، عربي/فرنسي', accent: true }, { name: 'تطبيق أو بوابة البائع', sub: 'إعلانات، طلبات، أجندة، كشوف، تحويلات' }] },
      { label: 'الثقة', items: [{ name: 'التحقق من البائعين', sub: 'هوية، سجل، مراقبة بشرية أولى' }, { name: 'تقييمات ونزاعات', sub: 'تقييم بعد المعاملة، مال مجمَّد أثناء النزاع' }] },
      { label: 'المال', items: [{ name: 'تحصيل وحجز', sub: 'CIB/الذهبية، QR، دفع عند الاستلام مسجَّل' }, { name: 'عمولة مفوترة، TVA', sub: 'فاتورة للبائع في كل معاملة' }, { name: 'تحويلات', sub: 'تحويلات مجمَّعة، كشوف شهرية' }] },
      { label: 'العمليات', items: [{ name: 'دعم عربي/فرنسي/دارجة', sub: 'بشري ثم ذكاء اصطناعي على قواعدك' }, { name: 'لوجستيك إن كانت سلعاً', sub: 'ناقلون، دفع عند الاستلام، مرتجعات' }] },
      { label: 'الامتثال', items: [{ name: 'منصة معرَّفة لدى الضرائب، تصريح سنوي', sub: 'مشروع قانون المالية 2027؛ بيانات القانون 18-07' }] },
    ], caption: 'الشكل 3 · التطبيقان هما الجزء المرئي. الثقة والمال هما ما يدفع البائعون مقابله.', alt: 'خمس طبقات لمنصة وساطة في الجزائر.' },
    timeline: { title: 'الإطلاق في 2027: مدينة واحدة، فئة واحدة', unit: 'أشهر', items: [
      { label: 'التأطير وثلاثون بائعاً مجنَّدون يدوياً', note: 'قبل أي سطر كود', from: 0, to: 2 },
      { label: 'الشركة، التاجر الإلكتروني، التعريف الضريبي', note: 'البنك وGIE Monétique، المنصة مصرَّح بها', from: 0, to: 3 },
      { label: 'تطوير الوجهين والحجز', note: 'زبون، بائع، تحصيل، تحويلات', from: 2, to: 6 },
      { label: 'تجربة: مدينة واحدة، فئة واحدة', note: 'ثلاثون بائعاً، معاملات حقيقية، نزاعات حقيقية', from: 6, to: 8 },
      { label: 'فئة ثانية أو مدينة ثانية', note: 'فقط إن كانت التجربة تحوّل المال كل أسبوع', from: 8, to: 9, accent: true },
    ], caption: 'الشكل 4 · يُجنَّد البائعون الثلاثون الأوائل قبل الكود. سوق فارغة يوم الإطلاق لا تمتلئ أبداً.', alt: 'جدول زمني بالأشهر لإطلاق سوق إلكترونية في 2027.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      money: { svg: steps({ title: t.money.title, steps: t.money.items, arrows: true, rtl }), caption: t.money.caption, alt: t.money.alt },
      revenue: { svg: matrix({ title: t.revenue.title, columns: t.revenue.columns, rows: t.revenue.rows, legend: t.revenue.legend, rtl }), caption: t.revenue.caption, alt: t.revenue.alt },
      inside: { svg: layers({ title: t.inside.title, layers: t.inside.layers, rtl }), caption: t.inside.caption, alt: t.inside.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 9, tick: 1, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
    },
  };
}
