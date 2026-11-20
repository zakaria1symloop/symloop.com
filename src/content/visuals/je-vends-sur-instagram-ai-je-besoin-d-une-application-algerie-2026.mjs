import { cover, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'je-vends-sur-instagram-ai-je-besoin-d-une-application-algerie-2026';

const T = {
  fr: {
    cover: { eyebrow: 'Problème · Vente en ligne', title: ['Je vends sur Instagram.', 'Ai-je besoin', 'd’une application ?'], subtitle: 'La plupart du temps, non. Ce qu’il faut à la place, à quel volume un site de commande devient rentable, et les trois cas où l’application se justifie.', left: { label: 'Aujourd’hui', sub: 'DM, WhatsApp, un cahier' }, right: { label: 'Palier suivant', sub: 'un lien de commande, pas une app' }, note: 'Algérie · 2026' },
    compare: { title: 'Boutique Instagram, site de commande, application : ce que chacun apporte', columns: ['Instagram + WhatsApp', 'Site de commande léger', 'Application mobile'], rows: [
      { label: 'Coût de départ', cells: ['Zéro', 'Catégorie site e-commerce', 'Catégorie 2 ou 3 de la grille apps'] },
      { label: 'Effort demandé au client', cells: ['Écrire un message', 'Cliquer un lien, trois écrans', 'Installer, créer un compte'] },
      { label: 'Commande sans vous', cells: [0, 2, 2] },
      { label: 'Frais de livraison par wilaya, automatiques', cells: [0, 2, 2] },
      { label: 'Paiement CIB et Edahabia', cells: [0, 2, 2] },
      { label: 'Stock et commandes au même endroit', cells: [0, 2, 2] },
      { label: 'Notifications et fidélité', cells: [1, 1, 2] },
      { label: 'Le bon choix quand', cells: ['Moins de 30 commandes par semaine', '30 à 300 commandes par semaine', 'Réachat fréquent, marque établie'] },
    ], highlight: 1, legend: '●  oui      ◐  partiel      ○  non', caption: 'Figure 1 · Le site de commande donne presque tout ce que l’application donne, sans demander au client d’installer quoi que ce soit.', alt: 'Comparaison entre vendre sur Instagram et WhatsApp, un site de commande léger et une application mobile : coût, effort client, commande autonome, livraison, paiement, stock, fidélité, et quand choisir chacun.' },
    platform: { title: 'Ce qu’un site de commande léger contient', layers: [
      { label: 'Clients', items: [{ name: 'Page produit pensée pour le téléphone', sub: 'photos, prix, tailles, dispo, AR et FR' }, { name: 'Commande sans compte', sub: 'nom, téléphone, wilaya, commune, article' }] },
      { label: 'Commande', items: [{ name: 'Frais de livraison par wilaya', sub: 'calculés automatiquement, domicile ou point relais' }, { name: 'Confirmation WhatsApp', sub: 'automatique, puis appel si besoin', accent: true }] },
      { label: 'Livraison', items: [{ name: 'Yalidine ou ZR Express intégré', sub: 'bordereau, suivi, retours' }] },
      { label: 'Paiement', items: [{ name: 'Paiement à la livraison', sub: 'par défaut' }, { name: 'CIB et Edahabia', sub: 'option, quand le volume le justifie' }] },
      { label: 'Gestion', items: [{ name: 'Stock, commandes, statistiques', sub: 'un seul écran, sur votre téléphone' }] },
    ], caption: 'Figure 2 · Instagram reste la vitrine. Le site devient la caisse et la mémoire des commandes.', alt: 'Architecture d’un site de commande léger pour une boutique Instagram en Algérie : page produit mobile, commande sans compte, frais par wilaya, confirmation WhatsApp, Yalidine ou ZR Express, paiement à la livraison et CIB Edahabia en option, gestion du stock.' },
    ai: { title: 'Où l’IA aide une boutique Instagram, et où c’est un gadget', columns: ['Gain réel', 'Prérequis'], rows: [
      { label: 'Répondre aux DM prix et disponibilité, 24h/24', cells: [2, 'Catalogue et stock à jour'] },
      { label: 'Relancer les commandes non confirmées par WhatsApp', cells: [2, 'Commandes enregistrées, pas dans un cahier'] },
      { label: 'Rédiger les fiches produit en arabe et en français', cells: [1, 'Photos et caractéristiques complètes'] },
      { label: 'Prévoir le stock', cells: [0, 'Six mois d’historique de ventes'] },
      { label: 'Générer des photos produit', cells: [0, 'Risque : le client reçoit autre chose que la photo'] },
    ], legend: '●  gain fort      ◐  gain moyen      ○  pas encore, ou risqué', caption: 'Figure 3 · Les deux usages qui paient traitent la vraie fuite : le message resté sans réponse et la commande jamais confirmée.', alt: 'Usages de l’IA pour une boutique Instagram classés par gain : réponses aux DM et relances WhatsApp forts, fiches produit moyen, prévision de stock et images générées faibles ou risqués.' },
    timeline: { title: 'Du cahier au site de commande en six semaines', unit: 'semaines', items: [
      { label: 'Cadrage', note: 'catalogue, wilayas livrées, règles de confirmation', from: 0, to: 1 },
      { label: 'Design', note: 'page produit et commande, sur votre téléphone', from: 1, to: 2 },
      { label: 'Développement', note: 'catalogue, commande, admin', from: 2, to: 5 },
      { label: 'Livraison et paiement', note: 'Yalidine ou ZR Express, CIB en option', from: 4, to: 5 },
      { label: 'Lancement', note: 'lien en bio Instagram, premières commandes', from: 5, to: 6, accent: true },
    ], caption: 'Figure 4 · Six semaines. Le lien remplace le « envoyez-moi un message » en bio.', alt: 'Calendrier en semaines : cadrage 0 à 1, design 1 à 2, développement 2 à 5, livraison et paiement 4 à 5, lancement 5 à 6.' },
  },
  en: {
    cover: { eyebrow: 'Problem · Online selling', title: ['I sell on Instagram.', 'Do I need', 'an app?'], subtitle: 'Most of the time, no. What you need instead, at what volume an ordering site pays off, and the three cases where an app is justified.', left: { label: 'Today', sub: 'DMs, WhatsApp, a notebook' }, right: { label: 'Next tier', sub: 'an ordering link, not an app' }, note: 'Algeria · 2026' },
    compare: { title: 'Instagram shop, ordering site, app: what each one brings', columns: ['Instagram + WhatsApp', 'Light ordering site', 'Mobile app'], rows: [
      { label: 'Starting cost', cells: ['Zero', 'E-commerce site category', 'Category 2 or 3 of the app grid'] },
      { label: 'Effort asked of the customer', cells: ['Write a message', 'Tap a link, three screens', 'Install, create an account'] },
      { label: 'Ordering without you', cells: [0, 2, 2] },
      { label: 'Automatic delivery fees by wilaya', cells: [0, 2, 2] },
      { label: 'CIB and Edahabia payment', cells: [0, 2, 2] },
      { label: 'Stock and orders in one place', cells: [0, 2, 2] },
      { label: 'Notifications and loyalty', cells: [1, 1, 2] },
      { label: 'The right choice when', cells: ['Under 30 orders a week', '30 to 300 orders a week', 'Frequent repurchase, established brand'] },
    ], highlight: 1, legend: '●  yes      ◐  partial      ○  no', caption: 'Figure 1 · The ordering site gives almost everything the app gives, without asking the customer to install anything.', alt: 'Comparison between selling on Instagram and WhatsApp, a light ordering site and a mobile app: cost, customer effort, autonomous ordering, delivery, payment, stock, loyalty, and when to choose each.' },
    platform: { title: 'What a light ordering site contains', layers: [
      { label: 'Customers', items: [{ name: 'Product page built for the phone', sub: 'photos, price, sizes, availability, AR and FR' }, { name: 'Ordering without an account', sub: 'name, phone, wilaya, commune, item' }] },
      { label: 'Order', items: [{ name: 'Delivery fees by wilaya', sub: 'computed automatically, home or pickup point' }, { name: 'WhatsApp confirmation', sub: 'automatic, then a call if needed', accent: true }] },
      { label: 'Delivery', items: [{ name: 'Yalidine or ZR Express integrated', sub: 'label, tracking, returns' }] },
      { label: 'Payment', items: [{ name: 'Cash on delivery', sub: 'by default' }, { name: 'CIB and Edahabia', sub: 'option, when volume justifies it' }] },
      { label: 'Management', items: [{ name: 'Stock, orders, statistics', sub: 'one screen, on your phone' }] },
    ], caption: 'Figure 2 · Instagram stays the shop window. The site becomes the till and the memory of orders.', alt: 'Architecture of a light ordering site for an Instagram shop in Algeria: mobile product page, ordering without account, fees by wilaya, WhatsApp confirmation, Yalidine or ZR Express, cash on delivery and optional CIB Edahabia, stock management.' },
    ai: { title: 'Where AI helps an Instagram shop, and where it is a gimmick', columns: ['Real gain', 'Prerequisite'], rows: [
      { label: 'Answering price and availability DMs, 24/7', cells: [2, 'Catalogue and stock kept up to date'] },
      { label: 'Following up unconfirmed orders on WhatsApp', cells: [2, 'Orders recorded, not in a notebook'] },
      { label: 'Writing product sheets in Arabic and French', cells: [1, 'Complete photos and specifications'] },
      { label: 'Forecasting stock', cells: [0, 'Six months of sales history'] },
      { label: 'Generating product photos', cells: [0, 'Risk: the customer receives something else than the photo'] },
    ], legend: '●  strong gain      ◐  medium gain      ○  not yet, or risky', caption: 'Figure 3 · The two uses that pay address the real leak: the unanswered message and the order never confirmed.', alt: 'AI uses for an Instagram shop ranked by gain: DM replies and WhatsApp follow-ups strong, product sheets medium, stock forecasting and generated images weak or risky.' },
    timeline: { title: 'From the notebook to an ordering site in six weeks', unit: 'weeks', items: [
      { label: 'Scoping', note: 'catalogue, delivered wilayas, confirmation rules', from: 0, to: 1 },
      { label: 'Design', note: 'product and ordering pages, on your phone', from: 1, to: 2 },
      { label: 'Development', note: 'catalogue, ordering, admin', from: 2, to: 5 },
      { label: 'Delivery and payment', note: 'Yalidine or ZR Express, CIB as an option', from: 4, to: 5 },
      { label: 'Launch', note: 'link in the Instagram bio, first orders', from: 5, to: 6, accent: true },
    ], caption: 'Figure 4 · Six weeks. The link replaces "send me a message" in the bio.', alt: 'Timeline in weeks: scoping 0 to 1, design 1 to 2, development 2 to 5, delivery and payment 4 to 5, launch 5 to 6.' },
  },
  ar: {
    cover: { eyebrow: 'مشكلة · البيع عبر الإنترنت', title: ['أبيع على إنستغرام.', 'هل أحتاج', 'تطبيقاً؟'], subtitle: 'في أغلب الأحيان، لا. ما تحتاجه بدلاً منه، عند أي حجم يصبح موقع الطلب مربحاً، والحالات الثلاث التي يُبرَّر فيها التطبيق.', left: { label: 'اليوم', sub: 'رسائل، واتساب، دفتر' }, right: { label: 'الدرجة التالية', sub: 'رابط طلب، لا تطبيق' }, note: 'الجزائر · 2026' },
    compare: { title: 'متجر إنستغرام، موقع طلب، تطبيق: ما يقدّمه كل منها', columns: ['إنستغرام + واتساب', 'موقع طلب خفيف', 'تطبيق جوال'], rows: [
      { label: 'تكلفة البداية', cells: ['صفر', 'فئة موقع التجارة الإلكترونية', 'الفئة 2 أو 3 من شبكة التطبيقات'] },
      { label: 'الجهد المطلوب من العميل', cells: ['كتابة رسالة', 'نقر رابط، ثلاث شاشات', 'تثبيت وإنشاء حساب'] },
      { label: 'الطلب بدونك', cells: [0, 2, 2] },
      { label: 'رسوم توصيل تلقائية حسب الولاية', cells: [0, 2, 2] },
      { label: 'الدفع CIB والذهبية', cells: [0, 2, 2] },
      { label: 'المخزون والطلبات في مكان واحد', cells: [0, 2, 2] },
      { label: 'إشعارات وولاء', cells: [1, 1, 2] },
      { label: 'الخيار الصحيح عندما', cells: ['أقل من 30 طلباً أسبوعياً', '30 إلى 300 طلب أسبوعياً', 'إعادة شراء متكررة، علامة راسخة'] },
    ], highlight: 1, legend: '●  نعم      ◐  جزئي      ○  لا', caption: 'الشكل 1 · موقع الطلب يعطي تقريباً كل ما يعطيه التطبيق، دون أن يطلب من العميل تثبيت أي شيء.', alt: 'مقارنة بين البيع على إنستغرام وواتساب وموقع طلب خفيف وتطبيق جوال.' },
    platform: { title: 'ما يحتويه موقع الطلب الخفيف', layers: [
      { label: 'العملاء', items: [{ name: 'صفحة منتج مصممة للهاتف', sub: 'صور، سعر، مقاسات، توفر، عربي وفرنسي' }, { name: 'طلب بدون حساب', sub: 'اسم، هاتف، ولاية، بلدية، منتج' }] },
      { label: 'الطلب', items: [{ name: 'رسوم التوصيل حسب الولاية', sub: 'تُحسب تلقائياً، منزل أو نقطة استلام' }, { name: 'تأكيد عبر واتساب', sub: 'تلقائي، ثم مكالمة عند الحاجة', accent: true }] },
      { label: 'التوصيل', items: [{ name: 'Yalidine أو ZR Express مدمج', sub: 'وصل، تتبع، إرجاع' }] },
      { label: 'الدفع', items: [{ name: 'الدفع عند التسليم', sub: 'افتراضياً' }, { name: 'CIB والذهبية', sub: 'اختياري عندما يبرر الحجم' }] },
      { label: 'التسيير', items: [{ name: 'مخزون، طلبات، إحصائيات', sub: 'شاشة واحدة على هاتفك' }] },
    ], caption: 'الشكل 2 · يبقى إنستغرام الواجهة. ويصبح الموقع الصندوق وذاكرة الطلبات.', alt: 'بنية موقع طلب خفيف لمتجر إنستغرام في الجزائر.' },
    ai: { title: 'أين يساعد الذكاء الاصطناعي متجر إنستغرام، وأين هو مجرد زينة', columns: ['الفائدة الحقيقية', 'الشرط المسبق'], rows: [
      { label: 'الرد على رسائل السعر والتوفر على مدار الساعة', cells: [2, 'كتالوج ومخزون محدّثان'] },
      { label: 'متابعة الطلبات غير المؤكدة عبر واتساب', cells: [2, 'طلبات مسجّلة، لا في دفتر'] },
      { label: 'كتابة بطاقات المنتجات بالعربية والفرنسية', cells: [1, 'صور ومواصفات كاملة'] },
      { label: 'توقّع المخزون', cells: [0, 'ستة أشهر من سجل المبيعات'] },
      { label: 'توليد صور المنتجات', cells: [0, 'خطر: يستلم العميل شيئاً غير الصورة'] },
    ], legend: '●  فائدة قوية      ◐  متوسطة      ○  ليس بعد أو محفوف بالمخاطر', caption: 'الشكل 3 · الاستخدامان المجديان يعالجان التسرب الحقيقي: الرسالة بلا جواب والطلب الذي لم يُؤكَّد.', alt: 'استخدامات الذكاء الاصطناعي لمتجر إنستغرام حسب الفائدة.' },
    timeline: { title: 'من الدفتر إلى موقع الطلب في ستة أسابيع', unit: 'أسابيع', items: [
      { label: 'التأطير', note: 'الكتالوج، الولايات المخدومة، قواعد التأكيد', from: 0, to: 1 },
      { label: 'التصميم', note: 'صفحة المنتج والطلب، على هاتفك', from: 1, to: 2 },
      { label: 'التطوير', note: 'كتالوج، طلب، إدارة', from: 2, to: 5 },
      { label: 'التوصيل والدفع', note: 'Yalidine أو ZR Express، CIB اختياري', from: 4, to: 5 },
      { label: 'الإطلاق', note: 'رابط في بيو إنستغرام، أول الطلبات', from: 5, to: 6, accent: true },
    ], caption: 'الشكل 4 · ستة أسابيع. يحل الرابط محل «أرسل لي رسالة» في البيو.', alt: 'جدول زمني بالأسابيع.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      compare: { svg: matrix({ title: t.compare.title, columns: t.compare.columns, rows: t.compare.rows, highlight: t.compare.highlight, legend: t.compare.legend, rtl }), caption: t.compare.caption, alt: t.compare.alt },
      platform: { svg: layers({ title: t.platform.title, layers: t.platform.layers, rtl }), caption: t.platform.caption, alt: t.platform.alt },
      ai: { svg: matrix({ title: t.ai.title, columns: t.ai.columns, rows: t.ai.rows, legend: t.ai.legend, rtl }), caption: t.ai.caption, alt: t.ai.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 6, tick: 1, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
    },
  };
}
