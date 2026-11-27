import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { entonnoir, argent, STRINGS as SC } from './custom/ecommerce.mjs';
export const slug = 'comment-creer-un-site-e-commerce-en-algerie-2027-paiement-a-la-livraison-livraison-par-wilaya-confirmation-retours-plateforme-ou-sur-mesure';
const T = {
  fr: {
    cover: { eyebrow: 'Site e-commerce · Algérie · 2027', title: ['Créer un site e-commerce', 'la commande, puis l’argent'], subtitle: 'Catalogue, panier court, confirmation, paiement à la livraison ou par carte, tarif par wilaya, retours', left: { label: 'Commandes passées', sub: '240 par mois' }, right: { label: 'Livrées et payées', sub: '135, puis 179' } },
    entonnoir: { caption: 'Figure 1 · Un mois d’une boutique en ligne, étape par étape. Sur 240 commandes passées, 135 finissent livrées et payées : près d’une sur deux se perd après le clic, à la confirmation puis à la livraison. Deux corrections, l’appel dans l’heure et les frais annoncés avant, en ramènent 44. Visites, taux et gains sont un exemple construit.' },
    couches: { title: 'Un site e-commerce, en cinq couches', layers: [
      { label: 'Catalogue', items: [{ name: 'Fiches claires, variantes, photos légères, stock réel par produit, prix et disponibilité à jour', sub: 'on ne vend pas ce qu’on n’a plus' }] },
      { label: 'Commande', items: [{ name: 'Panier court, sans compte obligatoire, numéro de téléphone comme identifiant, frais affichés avant de valider', sub: 'trois écrans, pas sept' }] },
      { label: 'Paiement', items: [{ name: 'À la livraison d’abord, carte CIB ou Edahabia ensuite, acompte pour les commandes à risque', sub: 'le client choisit, vous encaissez' }] },
      { label: 'Livraison', items: [{ name: 'Tarif et délai par wilaya, plusieurs transporteurs, étiquette imprimée, suivi, versements rapprochés', sub: 'c’est ici que la commande devient de l’argent', accent: true }] },
      { label: 'Après-vente', items: [{ name: 'Confirmation dans l’heure, rappel le jour de la livraison, retours, relance des paniers', sub: 'moins de refus à la porte' }] },
    ], caption: 'Figure 2 · La couche accentuée est la livraison : tarif connu avant de commander, plusieurs transporteurs, et un rapprochement de leurs versements. Le catalogue et la commande font venir la vente ; le paiement, la livraison et l’après-vente la font aboutir.', alt: 'Cinq couches : catalogue ; commande ; paiement ; livraison (accentuée) ; après-vente.' },
    choix: { title: 'Cinq façons de vendre en ligne', columns: ['Ce que vous y gagnez', 'Ce qu’il faut vérifier'], rows: [
      { label: 'Les réseaux sociaux seuls', cells: ['démarrer sans site, là où sont déjà vos clients', 'commandes dans les messages, ni stock ni mesure'] },
      { label: 'Une plateforme hébergée', cells: ['en ligne en quelques jours, entretien compris', 'paiement local, tarifs par wilaya, abonnement souvent en devises'] },
      { label: 'WordPress et une extension boutique', cells: ['le site vous appartient, beaucoup de modules', 'mises à jour, sécurité, vitesse, quelqu’un pour l’entretenir'] },
      { label: 'Une marketplace existante', cells: ['des visiteurs dès le premier jour', 'commission, règles imposées, clients qui ne sont pas les vôtres'] },
      { label: 'Un site sur mesure', cells: ['vos règles : stock réel, confirmation, transporteurs, caisse', 'se justifie quand le volume ou le métier dépasse les modules'] },
    ], caption: 'Figure 3 · Cinq façons de vendre en ligne, de la plus simple à la plus construite. Aucune n’est la bonne pour tout le monde : on commence souvent par la première, et l’on change quand les commandes se perdent dans les messages ou que les modules ne suivent plus votre métier.', alt: 'Matrice de cinq façons de vendre en ligne, avec ce qu’on y gagne et ce qu’il faut vérifier : réseaux sociaux seuls, plateforme hébergée, WordPress avec une extension boutique, marketplace, site sur mesure.' },
    ordre: { title: 'Construire dans cet ordre', items: [
      { label: 'Mesurer', sub: 'ventes, wilayas, retours d’aujourd’hui', accent: true },
      { label: 'Catalogue', sub: 'fiches, variantes, stock réel' },
      { label: 'Commande', sub: 'panier court, confirmation' },
      { label: 'Livraison', sub: 'transporteurs, tarifs, suivi' },
      { label: 'Paiement en ligne', sub: 'carte, en plus de la livraison' },
      { label: 'Acquisition', sub: 'publicité, référencement' },
    ], caption: 'Figure 4 · Le temps accentué est le premier : mesurer ce que vous vendez déjà, vers quelles wilayas, avec combien de retours. La publicité vient en dernier : elle amène des visiteurs dans un entonnoir, et ne rapporte que s’il ne fuit plus.', alt: 'Six temps : mesurer (accentué), catalogue, commande, livraison, paiement en ligne, acquisition.' },
    argent: { caption: 'Figure 5 · Dix jours de la vie d’une commande. Le colis est livré au troisième jour ; l’argent d’une commande payée à la livraison n’arrive qu’au dixième, après être passé par le livreur puis par le transporteur. Un colis refusé revient au sixième jour, deux trajets payés. Délais inventés pour un exemple construit.' },
    calendrier: { title: 'Dix semaines jusqu’à la première commande livrée', unit: 'sem.', items: [
      { label: 'Mesure et catalogue', note: 'ventes actuelles, wilayas servies, retours, puis fiches, variantes, photos et stock réel', from: 0, to: 3 },
      { label: 'Commande et confirmation', note: 'panier court, téléphone comme identifiant, frais avant validation, appel ou message dans l’heure', from: 2, to: 5 },
      { label: 'Livraison et transporteurs', note: 'tarif et délai par wilaya, étiquettes, suivi, retours, rapprochement des versements', from: 4, to: 7, accent: true },
      { label: 'Paiement en ligne', note: 'dossier auprès de la banque, page de paiement, essais, confirmation automatique', from: 5, to: 9 },
      { label: 'Ouverture et réglages', note: 'premières commandes réelles, cinq taux suivis chaque semaine, puis publicité', from: 8, to: 10 },
    ], caption: 'Figure 6 · Dix semaines dans l’exemple. La période accentuée est la livraison : trois semaines pour les tarifs par wilaya, les transporteurs et le rapprochement. Le paiement par carte se prépare en parallèle, parce que le dossier bancaire a son propre délai. Durées indicatives d’un exemple construit.', alt: 'Calendrier de dix semaines : mesure et catalogue, commande et confirmation, livraison et transporteurs (accentué, trois semaines), paiement en ligne, ouverture et réglages.' },
  },
  en: {
    cover: { eyebrow: 'E-commerce site · Algeria · 2027', title: ['Creating an e-commerce site', 'the order, then the money'], subtitle: 'Catalogue, short basket, confirmation, cash on delivery or card, fee per wilaya, returns', left: { label: 'Orders placed', sub: '240 a month' }, right: { label: 'Delivered and paid', sub: '135, then 179' } },
    entonnoir: { caption: 'Figure 1 · One month of an online shop, step by step. Out of 240 orders placed, 135 end up delivered and paid: nearly one in two is lost after the click, at confirmation then at delivery. Two fixes, the call within the hour and the fees announced beforehand, bring 44 back. Visits, rates and gains are a constructed example.' },
    couches: { title: 'An e-commerce site, in five layers', layers: [
      { label: 'Catalogue', items: [{ name: 'Clear pages, variants, light photos, real stock per product, price and availability up to date', sub: 'you do not sell what you no longer have' }] },
      { label: 'Order', items: [{ name: 'Short basket, no compulsory account, phone number as the identifier, fees shown before confirming', sub: 'three screens, not seven' }] },
      { label: 'Payment', items: [{ name: 'Cash on delivery first, CIB or Edahabia card next, a deposit for risky orders', sub: 'the customer chooses, you collect' }] },
      { label: 'Delivery', items: [{ name: 'Fee and time per wilaya, several carriers, printed label, tracking, payouts reconciled', sub: 'this is where the order becomes money', accent: true }] },
      { label: 'After-sales', items: [{ name: 'Confirmation within the hour, reminder on delivery day, returns, basket follow-up', sub: 'fewer refusals at the door' }] },
    ], caption: 'Figure 2 · The accented layer is delivery: a fee known before ordering, several carriers, and a reconciliation of their payouts. The catalogue and the order bring the sale in; payment, delivery and after-sales see it through.', alt: 'Five layers: catalogue; order; payment; delivery (accented); after-sales.' },
    choix: { title: 'Five ways to sell online', columns: ['What you gain', 'What to check'], rows: [
      { label: 'Social networks alone', cells: ['start without a site, where your customers already are', 'orders in the messages, no stock, no measurement'] },
      { label: 'A hosted platform', cells: ['online in a few days, upkeep included', 'local payment, fees per wilaya, subscription often in foreign currency'] },
      { label: 'WordPress and a shop plugin', cells: ['the site is yours, many modules', 'updates, security, speed, someone to maintain it'] },
      { label: 'An existing marketplace', cells: ['visitors from the first day', 'commission, imposed rules, customers who are not yours'] },
      { label: 'A custom-built site', cells: ['your rules: real stock, confirmation, carriers, till', 'justified when volume or the trade outgrows the modules'] },
    ], caption: 'Figure 3 · Five ways to sell online, from the simplest to the most built. None is right for everyone: people often start with the first, and change when orders get lost in the messages or the modules no longer follow the trade.', alt: 'Matrix of five ways to sell online, with what you gain and what to check: social networks alone, hosted platform, WordPress with a shop plugin, marketplace, custom-built site.' },
    ordre: { title: 'Build in this order', items: [
      { label: 'Measure', sub: 'today’s sales, wilayas, returns', accent: true },
      { label: 'Catalogue', sub: 'pages, variants, real stock' },
      { label: 'Order', sub: 'short basket, confirmation' },
      { label: 'Delivery', sub: 'carriers, fees, tracking' },
      { label: 'Online payment', sub: 'card, on top of delivery' },
      { label: 'Acquisition', sub: 'advertising, search' },
    ], caption: 'Figure 4 · The accented step is the first: measure what you already sell, to which wilayas, with how many returns. Advertising comes last: it brings visitors into a funnel, and only pays once the funnel no longer leaks.', alt: 'Six steps: measure (accented), catalogue, order, delivery, online payment, acquisition.' },
    argent: { caption: 'Figure 5 · Ten days in the life of an order. The parcel is delivered on the third day; the money of a cash-on-delivery order only arrives on the tenth, after passing through the driver and then the carrier. A refused parcel comes back on the sixth day, two trips paid. Delays invented for a constructed example.' },
    calendrier: { title: 'Ten weeks to the first delivered order', unit: 'wk', items: [
      { label: 'Measurement and catalogue', note: 'current sales, wilayas served, returns, then pages, variants, photos and real stock', from: 0, to: 3 },
      { label: 'Order and confirmation', note: 'short basket, phone as the identifier, fees before confirming, call or message within the hour', from: 2, to: 5 },
      { label: 'Delivery and carriers', note: 'fee and time per wilaya, labels, tracking, returns, reconciliation of payouts', from: 4, to: 7, accent: true },
      { label: 'Online payment', note: 'file with the bank, payment page, trials, automatic confirmation', from: 5, to: 9 },
      { label: 'Opening and tuning', note: 'first real orders, five rates followed every week, then advertising', from: 8, to: 10 },
    ], caption: 'Figure 6 · Ten weeks in the example. The accented period is delivery: three weeks for the fees per wilaya, the carriers and the reconciliation. Card payment is prepared in parallel, because the bank file has its own timing. Indicative durations from a constructed example.', alt: 'Ten-week calendar: measurement and catalogue, order and confirmation, delivery and carriers (accented, three weeks), online payment, opening and tuning.' },
  },
  ar: {
    cover: { eyebrow: 'موقع تجارة إلكترونية · الجزائر · 2027', title: ['إنشاء موقع تجارة إلكترونية', 'الطلبية، ثم المال'], subtitle: 'فهرس، سلة قصيرة، تأكيد، دفع عند التسليم أو بالبطاقة، تسعيرة لكل ولاية، وإرجاع', left: { label: 'طلبيات مسجَّلة', sub: '240 في الشهر' }, right: { label: 'مسلَّمة ومدفوعة', sub: '135، ثم 179' } },
    entonnoir: { caption: 'الشكل 1 · شهر من متجر إلكتروني، مرحلة بمرحلة. من 240 طلبية، 135 تنتهي مسلَّمة ومدفوعة: نحو واحدة من اثنتين تضيع بعد النقرة، عند التأكيد ثم عند التسليم. وتصحيحان، الاتصال خلال الساعة وإعلان المصاريف مسبقاً، يستعيدان 44. الزيارات والنسب والأرباح مثال مركَّب.' },
    couches: { title: 'موقع تجارة إلكترونية، في خمس طبقات', layers: [
      { label: 'الفهرس', items: [{ name: 'بطاقات واضحة، متغيّرات، صور خفيفة، مخزون حقيقي لكل منتَج، وسعر وتوفّر محدَّثان', sub: 'لا نبيع ما لم يعد عندنا' }] },
      { label: 'الطلبية', items: [{ name: 'سلة قصيرة، دون حساب إجباري، رقم الهاتف كمعرّف، ومصاريف معروضة قبل التأكيد', sub: 'ثلاث شاشات، لا سبع' }] },
      { label: 'الدفع', items: [{ name: 'عند التسليم أولاً، ثم بطاقة CIB أو Edahabia، وتسبيق للطلبيات الخطرة', sub: 'الزبون يختار، وأنتم تقبضون' }] },
      { label: 'التوصيل', items: [{ name: 'تسعيرة وأجل لكل ولاية، عدة ناقلين، ملصق مطبوع، تتبّع، ومطابقة للمصروفات', sub: 'هنا تصير الطلبية مالاً', accent: true }] },
      { label: 'ما بعد البيع', items: [{ name: 'تأكيد خلال الساعة، تذكير يوم التسليم، إرجاع، ومتابعة السلال', sub: 'رفض أقل عند الباب' }] },
    ], caption: 'الشكل 2 · الطبقة المبرزة هي التوصيل: تسعيرة معروفة قبل الطلب، عدة ناقلين، ومطابقة لما يصرفونه. الفهرس والطلبية يأتيان بالبيع؛ والدفع والتوصيل وما بعد البيع يوصلونه إلى نهايته.', alt: 'خمس طبقات: الفهرس؛ الطلبية؛ الدفع؛ التوصيل (مبرزة)؛ ما بعد البيع.' },
    choix: { title: 'خمس طرق للبيع على الإنترنت', columns: ['ما تربحونه', 'ما يجب التحقق منه'], rows: [
      { label: 'شبكات التواصل وحدها', cells: ['البدء دون موقع، حيث زبائنكم أصلاً', 'طلبيات في الرسائل، لا مخزون ولا قياس'] },
      { label: 'منصة مستضافة', cells: ['على الخط في بضعة أيام، والصيانة ضمنها', 'الدفع المحلي، تسعيرات الولايات، واشتراك بالعملة الصعبة غالباً'] },
      { label: 'ووردبريس وإضافة متجر', cells: ['الموقع ملككم، وإضافات كثيرة', 'تحديثات، أمن، سرعة، وشخص يصونه'] },
      { label: 'سوق إلكترونية موجودة', cells: ['زوّار من اليوم الأول', 'عمولة، قواعد مفروضة، وزبائن ليسوا زبائنكم'] },
      { label: 'موقع على المقاس', cells: ['قواعدكم: مخزون حقيقي، تأكيد، ناقلون، وصندوق', 'يُبرَّر حين يتجاوز الحجم أو المهنة الإضافات'] },
    ], caption: 'الشكل 3 · خمس طرق للبيع على الإنترنت، من الأبسط إلى الأكثر بناءً. ولا واحدة تصلح للجميع: نبدأ غالباً بالأولى، ونغيّر حين تضيع الطلبيات في الرسائل أو لا تعود الإضافات تتبع مهنتكم.', alt: 'مصفوفة خمس طرق للبيع على الإنترنت، مع ما نربحه وما يجب التحقق منه: شبكات التواصل وحدها، منصة مستضافة، ووردبريس مع إضافة متجر، سوق إلكترونية، وموقع على المقاس.' },
    ordre: { title: 'البناء بهذا الترتيب', items: [
      { label: 'القياس', sub: 'مبيعات اليوم، الولايات، والإرجاع', accent: true },
      { label: 'الفهرس', sub: 'بطاقات، متغيّرات، مخزون حقيقي' },
      { label: 'الطلبية', sub: 'سلة قصيرة، وتأكيد' },
      { label: 'التوصيل', sub: 'ناقلون، تسعيرات، وتتبّع' },
      { label: 'الدفع الإلكتروني', sub: 'البطاقة، إضافة إلى التسليم' },
      { label: 'جلب الزبائن', sub: 'إشهار، وظهور في البحث' },
    ], caption: 'الشكل 4 · المرحلة المبرزة هي الأولى: قياس ما تبيعونه أصلاً، نحو أي ولايات، وبكم إرجاعاً. والإشهار يأتي آخراً: يأتي بزوّار إلى قمع، ولا ينفع إلا حين لا يعود القمع يتسرّب.', alt: 'ست مراحل: القياس (مبرزة)، الفهرس، الطلبية، التوصيل، الدفع الإلكتروني، جلب الزبائن.' },
    argent: { caption: 'الشكل 5 · عشرة أيام من عمر طلبية. الطرد يُسلَّم في اليوم الثالث؛ ومال الطلبية المدفوعة عند التسليم لا يصل إلا في العاشر، بعد المرور بالموصِّل ثم بالناقل. والطرد المرفوض يعود في اليوم السادس، برحلتين مدفوعتين. آجال مخترَعة لمثال مركَّب.' },
    calendrier: { title: 'عشرة أسابيع إلى أول طلبية مسلَّمة', unit: 'أسبوع', items: [
      { label: 'القياس والفهرس', note: 'المبيعات الحالية، الولايات المخدومة، الإرجاع، ثم البطاقات والمتغيّرات والصور والمخزون الحقيقي', from: 0, to: 3 },
      { label: 'الطلبية والتأكيد', note: 'سلة قصيرة، الهاتف كمعرّف، مصاريف قبل التأكيد، واتصال أو رسالة خلال الساعة', from: 2, to: 5 },
      { label: 'التوصيل والناقلون', note: 'تسعيرة وأجل لكل ولاية، ملصقات، تتبّع، إرجاع، ومطابقة المصروفات', from: 4, to: 7, accent: true },
      { label: 'الدفع الإلكتروني', note: 'ملف لدى البنك، صفحة دفع، تجارب، وتأكيد آلي', from: 5, to: 9 },
      { label: 'الفتح والضبط', note: 'أولى الطلبيات الحقيقية، خمس نسب تُتابَع كل أسبوع، ثم الإشهار', from: 8, to: 10 },
    ], caption: 'الشكل 6 · عشرة أسابيع في المثال. الفترة المبرزة هي التوصيل: ثلاثة أسابيع لتسعيرات الولايات والناقلين والمطابقة. والدفع بالبطاقة يُحضَّر بالتوازي، لأن للملف البنكي أجله الخاص. مدد تقريبية لمثال مركَّب.', alt: 'تقويم عشرة أسابيع: القياس والفهرس، الطلبية والتأكيد، التوصيل والناقلون (مبرزة، ثلاثة أسابيع)، الدفع الإلكتروني، الفتح والضبط.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      entonnoir: { svg: entonnoir(e.entonnoir, rtl), caption: t.entonnoir.caption, alt: e.entonnoir.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      choix: { svg: matrix({ title: t.choix.title, columns: t.choix.columns, rows: t.choix.rows, rtl }), caption: t.choix.caption, alt: t.choix.alt },
      ordre: { svg: steps({ title: t.ordre.title, steps: t.ordre.items, arrows: true, rtl }), caption: t.ordre.caption, alt: t.ordre.alt },
      argent: { svg: argent(e.argent, rtl), caption: t.argent.caption, alt: e.argent.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 10, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
