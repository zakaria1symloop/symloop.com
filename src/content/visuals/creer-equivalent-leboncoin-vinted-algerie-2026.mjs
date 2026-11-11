import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'creer-equivalent-leboncoin-vinted-algerie-2026';

const T = {
  fr: {
    cover: { eyebrow: 'Vu en France, à construire en Algérie · 04', title: ['Leboncoin existe déjà', 'en Algérie.', 'Il s’appelle Ouedkniss.'], subtitle: 'Ce qu’Ouedkniss a gagné, ce qu’il ne fait pas, et les trois produits encore ouverts : la seconde main avec livraison, la verticale vérifiée, les outils des vendeurs pro.', left: { label: 'Leboncoin · Vinted', sub: 'annonce + paiement + livraison' }, right: { label: 'Ouedkniss', sub: 'annonce, puis téléphone' }, note: 'Série fondateurs' },
    market: { title: 'Ce qu’Ouedkniss fait, et ce qu’il laisse au téléphone', columns: ['Ouedkniss', 'Leboncoin', 'Vinted'], rows: [
      { label: 'Publier une annonce, être trouvé', cells: [2, 2, 2] },
      { label: 'Discuter avec l’acheteur dans l’application', cells: [1, 2, 2] },
      { label: 'Payer dans l’application, argent bloqué jusqu’à réception', cells: [0, 2, 2] },
      { label: 'Livraison intégrée avec étiquette et suivi', cells: [0, 2, 2] },
      { label: 'Retour et litige gérés par la plateforme', cells: [0, 1, 2] },
      { label: 'Vérification du vendeur et avis', cells: [1, 2, 2] },
      { label: 'Outils pour les vendeurs professionnels', cells: [2, 2, 1] },
    ], legend: '●  oui      ◐  partiel      ○  non', caption: 'Figure 1 · Ouedkniss a gagné la découverte. Tout ce qui suit le premier message se passe encore au téléphone, en espèces, sans recours.', alt: 'Comparaison d’Ouedkniss, Leboncoin et Vinted : Ouedkniss couvre la publication et la découverte, pas le paiement protégé, la livraison intégrée, les retours et litiges.' },
    positions: { title: 'Trois produits encore ouverts', items: [
      { label: 'La seconde main avec livraison et paiement protégé', sub: 'Vêtements, chaussures, puériculture, téléphones. L’acheteur paie un acompte ou le total, l’argent est libéré à la réception, Yalidine livre. Le modèle Vinted, limité à des catégories qui voyagent bien.', accent: true },
      { label: 'La verticale vérifiée', sub: 'Voitures d’occasion avec inspection, immobilier avec visite, électroménager avec test. Vous vendez la vérification, pas l’annonce.' },
      { label: 'Les outils des vendeurs pro', sub: 'Ceux qui vendent déjà sur Ouedkniss, Facebook et Instagram : gestion des annonces, réponses automatiques, stock, commandes, livraison. Vous ne concurrencez pas Ouedkniss, vous l’équipez.' },
    ], caption: 'Figure 2 · Aucun des trois ne combat Ouedkniss sur son terrain. Chacun prend ce qu’il laisse au téléphone.', alt: 'Trois produits ouverts face à Ouedkniss : seconde main avec livraison et paiement protégé, verticale vérifiée, outils des vendeurs professionnels.' },
    flow: { title: 'Le parcours d’une vente de seconde main avec paiement protégé', items: [
      { label: 'Annonce', sub: 'Photos, taille, état, prix. Catégories limitées à ce qui voyage bien.' },
      { label: 'Paiement protégé', sub: 'Acompte ou total en CIB ou Edahabia, ou espèces au relais. L’argent n’est pas versé au vendeur.' },
      { label: 'Étiquette et dépôt', sub: 'Yalidine ou ZR Express, étiquette générée, dépôt en agence ou enlèvement.' },
      { label: 'Réception et contrôle', sub: 'L’acheteur a 48 heures pour signaler un problème avec photo.' },
      { label: 'Libération des fonds', sub: 'Virement ou CIB au vendeur. Litige tranché par la plateforme sur photos.', accent: true },
    ], caption: 'Figure 3 · Le produit, c’est l’argent bloqué entre l’étape 2 et l’étape 5. Les photos et la recherche sont la vitrine.', alt: 'Les cinq étapes d’une vente de seconde main avec paiement protégé : annonce, paiement bloqué, étiquette et dépôt, réception et contrôle, libération des fonds.' },
    timeline: { title: 'Une catégorie, une ville, trois mois', unit: 'semaines', items: [
      { label: 'Cadrage', note: 'catégorie de départ, règles de litige, transporteur', from: 0, to: 2 },
      { label: 'Design', note: 'vendre en trois écrans, acheter en trois écrans, AR et FR', from: 2, to: 4 },
      { label: 'Développement', note: 'annonces, paiement bloqué, étiquettes, litiges', from: 4, to: 12 },
      { label: 'Recrutement des vendeurs', note: 'cent vendeuses actives sur Instagram, une ville', from: 8, to: 14 },
      { label: 'Ouverture', note: 'une catégorie, premières transactions, médiation', from: 14, to: 18, accent: true },
    ], caption: 'Figure 4 · Une catégorie et une ville avant d’étendre. La seconde main vit de la densité : cent vendeuses actives valent mieux que dix mille annonces mortes.', alt: 'Calendrier en semaines : cadrage 0 à 2, design 2 à 4, développement 4 à 12, recrutement des vendeurs 8 à 14, ouverture 14 à 18.' },
  },
  en: {
    cover: { eyebrow: 'Seen in France, to be built in Algeria · 04', title: ['Leboncoin already exists', 'in Algeria.', 'It is called Ouedkniss.'], subtitle: 'What Ouedkniss won, what it does not do, and the three products still open: second-hand with delivery, the verified vertical, tools for pro sellers.', left: { label: 'Leboncoin · Vinted', sub: 'listing + payment + delivery' }, right: { label: 'Ouedkniss', sub: 'listing, then the phone' }, note: 'Founder series' },
    market: { title: 'What Ouedkniss does, and what it leaves to the phone', columns: ['Ouedkniss', 'Leboncoin', 'Vinted'], rows: [
      { label: 'Post a listing, get found', cells: [2, 2, 2] },
      { label: 'Chat with the buyer in the app', cells: [1, 2, 2] },
      { label: 'Pay in the app, money held until receipt', cells: [0, 2, 2] },
      { label: 'Integrated delivery with label and tracking', cells: [0, 2, 2] },
      { label: 'Returns and disputes handled by the platform', cells: [0, 1, 2] },
      { label: 'Seller verification and reviews', cells: [1, 2, 2] },
      { label: 'Tools for professional sellers', cells: [2, 2, 1] },
    ], legend: '●  yes      ◐  partial      ○  no', caption: 'Figure 1 · Ouedkniss won discovery. Everything after the first message still happens by phone, in cash, with no recourse.', alt: 'Comparison of Ouedkniss, Leboncoin and Vinted: Ouedkniss covers listing and discovery, not protected payment, integrated delivery, returns and disputes.' },
    positions: { title: 'Three products still open', items: [
      { label: 'Second-hand with delivery and protected payment', sub: 'Clothes, shoes, baby gear, phones. The buyer pays a deposit or the total, money is released on receipt, Yalidine delivers. The Vinted model, limited to categories that ship well.', accent: true },
      { label: 'The verified vertical', sub: 'Used cars with inspection, real estate with a visit, appliances with a test. You sell the verification, not the listing.' },
      { label: 'Tools for pro sellers', sub: 'Those already selling on Ouedkniss, Facebook and Instagram: listing management, auto-replies, stock, orders, delivery. You do not compete with Ouedkniss, you equip it.' },
    ], caption: 'Figure 2 · None of the three fights Ouedkniss on its ground. Each takes what it leaves to the phone.', alt: 'Three open products next to Ouedkniss: second-hand with delivery and protected payment, verified vertical, tools for professional sellers.' },
    flow: { title: 'The journey of a second-hand sale with protected payment', items: [
      { label: 'Listing', sub: 'Photos, size, condition, price. Categories limited to what ships well.' },
      { label: 'Protected payment', sub: 'Deposit or total by CIB or Edahabia, or cash at the pickup point. Money is not paid to the seller.' },
      { label: 'Label and drop-off', sub: 'Yalidine or ZR Express, generated label, drop at an agency or pickup.' },
      { label: 'Receipt and check', sub: 'The buyer has 48 hours to report a problem with a photo.' },
      { label: 'Funds released', sub: 'Transfer or CIB to the seller. Dispute settled by the platform on photos.', accent: true },
    ], caption: 'Figure 3 · The product is the money held between step 2 and step 5. Photos and search are the shop window.', alt: 'The five steps of a second-hand sale with protected payment: listing, held payment, label and drop-off, receipt and check, funds released.' },
    timeline: { title: 'One category, one city, three months', unit: 'weeks', items: [
      { label: 'Scoping', note: 'starting category, dispute rules, carrier', from: 0, to: 2 },
      { label: 'Design', note: 'sell in three screens, buy in three screens, AR and FR', from: 2, to: 4 },
      { label: 'Development', note: 'listings, held payment, labels, disputes', from: 4, to: 12 },
      { label: 'Seller recruitment', note: 'one hundred active Instagram sellers, one city', from: 8, to: 14 },
      { label: 'Opening', note: 'one category, first transactions, mediation', from: 14, to: 18, accent: true },
    ], caption: 'Figure 4 · One category and one city before expanding. Second-hand lives on density: one hundred active sellers beat ten thousand dead listings.', alt: 'Timeline in weeks: scoping 0 to 2, design 2 to 4, development 4 to 12, seller recruitment 8 to 14, opening 14 to 18.' },
  },
  ar: {
    cover: { eyebrow: 'رأيته في فرنسا، ابنِه في الجزائر · 04', title: ['Leboncoin موجود أصلاً', 'في الجزائر.', 'اسمه Ouedkniss.'], subtitle: 'ما ربحه Ouedkniss، ما لا يفعله، والمنتجات الثلاثة التي ما زالت مفتوحة: المستعمل مع التوصيل، العمودي الموثّق، أدوات البائعين المحترفين.', left: { label: 'Leboncoin · Vinted', sub: 'إعلان + دفع + توصيل' }, right: { label: 'Ouedkniss', sub: 'إعلان، ثم الهاتف' }, note: 'سلسلة المؤسسين' },
    market: { title: 'ما يفعله Ouedkniss، وما يتركه للهاتف', columns: ['Ouedkniss', 'Leboncoin', 'Vinted'], rows: [
      { label: 'نشر إعلان والظهور', cells: [2, 2, 2] },
      { label: 'محادثة المشتري داخل التطبيق', cells: [1, 2, 2] },
      { label: 'الدفع داخل التطبيق مع حجز المال حتى الاستلام', cells: [0, 2, 2] },
      { label: 'توصيل مدمج بوصل وتتبع', cells: [0, 2, 2] },
      { label: 'إرجاع ونزاعات تديرها المنصة', cells: [0, 1, 2] },
      { label: 'التحقق من البائع والتقييمات', cells: [1, 2, 2] },
      { label: 'أدوات للبائعين المحترفين', cells: [2, 2, 1] },
    ], legend: '●  نعم      ◐  جزئي      ○  لا', caption: 'الشكل 1 · ربح Ouedkniss الاكتشاف. كل ما يلي الرسالة الأولى ما زال يتم بالهاتف ونقداً وبلا طعن.', alt: 'مقارنة Ouedkniss وLeboncoin وVinted.' },
    positions: { title: 'ثلاثة منتجات ما زالت مفتوحة', items: [
      { label: 'المستعمل مع التوصيل والدفع المحمي', sub: 'ملابس، أحذية، مستلزمات أطفال، هواتف. يدفع المشتري عربوناً أو الإجمالي، يُحرَّر المال عند الاستلام، يوصّل Yalidine. نموذج Vinted محصوراً في فئات تُشحن جيداً.', accent: true },
      { label: 'العمودي الموثّق', sub: 'سيارات مستعملة بفحص، عقار بزيارة، أجهزة بتجربة. تبيع التحقق لا الإعلان.' },
      { label: 'أدوات البائعين المحترفين', sub: 'من يبيعون أصلاً على Ouedkniss وفيسبوك وإنستغرام: إدارة الإعلانات، ردود تلقائية، مخزون، طلبات، توصيل. لا تنافس Ouedkniss بل تجهّزه.' },
    ], caption: 'الشكل 2 · لا أحد من الثلاثة يقاتل Ouedkniss في ميدانه. كل واحد يأخذ ما يتركه للهاتف.', alt: 'ثلاثة منتجات مفتوحة إلى جانب Ouedkniss.' },
    flow: { title: 'مسار بيع مستعمل بدفع محمي', items: [
      { label: 'الإعلان', sub: 'صور، مقاس، حالة، سعر. فئات محصورة فيما يُشحن جيداً.' },
      { label: 'دفع محمي', sub: 'عربون أو إجمالي بـCIB أو الذهبية، أو نقداً في نقطة الاستلام. لا يُدفع المال للبائع.' },
      { label: 'وصل وإيداع', sub: 'Yalidine أو ZR Express، وصل مولّد، إيداع في وكالة أو استلام.' },
      { label: 'استلام وفحص', sub: 'للمشتري 48 ساعة للإبلاغ عن مشكلة بصورة.' },
      { label: 'تحرير الأموال', sub: 'تحويل أو CIB للبائع. النزاع تفصله المنصة على الصور.', accent: true },
    ], caption: 'الشكل 3 · المنتج هو المال المحجوز بين الخطوة 2 والخطوة 5. الصور والبحث واجهة.', alt: 'الخطوات الخمس لبيع مستعمل بدفع محمي.' },
    timeline: { title: 'فئة واحدة، مدينة واحدة، ثلاثة أشهر', unit: 'أسابيع', items: [
      { label: 'التأطير', note: 'فئة البداية، قواعد النزاع، الناقل', from: 0, to: 2 },
      { label: 'التصميم', note: 'البيع في ثلاث شاشات والشراء في ثلاث، عربي وفرنسي', from: 2, to: 4 },
      { label: 'التطوير', note: 'إعلانات، دفع محجوز، وصولات، نزاعات', from: 4, to: 12 },
      { label: 'استقطاب البائعات', note: 'مئة بائعة نشطة على إنستغرام، مدينة واحدة', from: 8, to: 14 },
      { label: 'الافتتاح', note: 'فئة واحدة، أولى المعاملات، وساطة', from: 14, to: 18, accent: true },
    ], caption: 'الشكل 4 · فئة ومدينة قبل التوسع. المستعمل يعيش على الكثافة: مئة بائعة نشطة أفضل من عشرة آلاف إعلان ميت.', alt: 'جدول زمني بالأسابيع.' },
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
      flow: { svg: steps({ title: t.flow.title, steps: t.flow.items, arrows: true, rtl }), caption: t.flow.caption, alt: t.flow.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 18, tick: 2, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
    },
  };
}
