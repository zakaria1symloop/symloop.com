import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'plateforme-livraison-transport-algerie-2027-livreurs-cod-retours';

const T = {
  fr: {
    cover: { eyebrow: 'Problème · Livraison et transport', title: ['Une plateforme de', 'livraison en Algérie en 2027 :', 'livreurs, COD, retours.'], subtitle: 'Le parcours d’un colis payé à la livraison et les quatre endroits où l’argent se perd, ce que chaque acteur attend, la pile à construire, et le calendrier pour une wilaya pilote.', left: { label: 'Aujourd’hui', sub: 'papier, COD en espèces, retours subis' }, right: { label: 'Fin 2027', sub: 'tournées scannées, COD tracé, versements J+3' }, note: 'Algérie · 2027' },
    parcel: { title: 'Le parcours d’un colis COD, et où l’argent se perd', items: [
      { n: '01', label: 'Commande confirmée, ou pas', sub: 'Numéro faux, client qui ne répond pas, commande impulsive. Un colis non confirmé est déjà à moitié refusé.' },
      { n: '02', label: 'Ramassage et tri', sub: 'Étiquette, poids, wilaya, hub. Un colis mal trié perd deux jours et arrive quand le client n’en veut plus.' },
      { n: '03', label: 'Tentative de livraison', sub: 'Client injoignable, absent, refus à la porte. Chaque tentative coûte ; la deuxième coûte autant que la première.', accent: true },
      { n: '04', label: 'Encaissement ou retour', sub: 'COD remis au livreur, versé à l’e-commerçant à J+3 ou J+15. Retour transporté, facturé, parfois perdu.' },
    ], caption: 'Figure 1 · Le refus se décide à l’étape 1 et se paie à l’étape 3. Une plateforme qui ne voit que l’étape 3 subit ; une plateforme qui agit à l’étape 1 réduit.', alt: 'Quatre étapes du parcours d’un colis payé à la livraison : confirmation, ramassage et tri, tentative de livraison, encaissement ou retour, avec les pertes à chaque étape.' },
    actors: { title: 'Ce que chaque acteur attend de la plateforme', columns: ['Ce qu’il attend', 'Ce qui le fait partir'], rows: [
      { label: 'E-commerçant', cells: ['Suivi en temps réel, taux de refus par wilaya, versement COD rapide', 'Un versement en retard ou un colis perdu sans explication'] },
      { label: 'Livreur', cells: ['Tournée dans l’ordre, hors-ligne, preuve en deux gestes, paie juste', 'Une application qui tourne dans le vide sans réseau'] },
      { label: 'Dispatch et agences', cells: ['Affectation automatique, incidents visibles, retours tracés', 'Un tableau Excel par agence et le téléphone qui sonne'] },
      { label: 'Client final', cells: ['SMS ou WhatsApp avec le créneau, paiement carte ou QR à la porte', 'Un livreur qui appelle trois fois et ne vient pas'] },
      { label: 'Direction', cells: ['Marge par colis, trésorerie COD, retours en pourcentage', 'Découvrir la marge en fin de mois'] },
      { label: 'Fisc, en 2027', cells: ['Encaissements électroniques tracés, factures conformes', 'Du COD en espèces sans trace'] },
    ], caption: 'Figure 2 · Six acteurs, un seul système. Le e-commerçant paie pour la colonne de gauche ; la colonne de droite est ce qui le fait changer de transporteur.', alt: 'Matrice des attentes de six acteurs d’une plateforme de livraison : e-commerçant, livreur, dispatch, client final, direction, fisc.' },
    stack: { title: 'La pile d’une plateforme de livraison en 2027', layers: [
      { label: 'Clients', items: [{ name: 'Portail e-commerçant', sub: 'dépôt de colis, import boutique, suivi, versements, taux de refus', accent: true }, { name: 'Client final', sub: 'SMS et WhatsApp de suivi, créneau, confirmation' }] },
      { label: 'Terrain', items: [{ name: 'Application livreur hors-ligne', sub: 'tournée, scan, preuve, COD saisi, incidents' }, { name: 'Paiement à la porte', sub: 'carte par SoftPos, QR DZMobPay, espèces enregistrées' }] },
      { label: 'Dispatch', items: [{ name: 'Back-office', sub: 'hubs, affectation, tri, retours, incidents' }] },
      { label: 'Argent', items: [{ name: 'COD encaissé et versé', sub: 'versements groupés aux e-commerçants, relevés' }, { name: 'Facture transport et frais de retour', sub: 'conforme, TVA, par e-commerçant' }] },
      { label: 'Données et IA', items: [{ name: 'Confirmation automatisée AR/FR, prédiction de refus', sub: 'une base, hébergement loi 18-07' }] },
    ], caption: 'Figure 3 · Le portail e-commerçant est ce qui se vend. L’application livreur hors-ligne est ce qui fait que les chiffres du portail sont vrais.', alt: 'Cinq couches : portail e-commerçant et suivi client ; application livreur hors-ligne et paiement à la porte ; back-office de dispatch ; COD encaissé et versé, factures ; données et IA.' },
    timeline: { title: 'Huit mois : une wilaya pilote avant le réseau', unit: 'mois', items: [
      { label: 'Cadrage avec cinq e-commerçants', note: 'les règles réelles de tri, de COD et de retour', from: 0, to: 1 },
      { label: 'Application livreur : tournée, scan, COD', note: 'hors-ligne, testée sur les téléphones des livreurs', from: 1, to: 4 },
      { label: 'Portail e-commerçant et versements COD', note: 'import boutique, suivi, relevés, facture', from: 3, to: 6 },
      { label: 'Pilote : une wilaya, cinq e-commerçants', note: 'taux de refus et délai de versement mesurés', from: 6, to: 7 },
      { label: 'Paiement à la porte et confirmation IA', note: 'SoftPos, QR, confirmation automatisée ; puis le réseau', from: 7, to: 8, accent: true },
    ], caption: 'Figure 4 · L’application livreur se construit avant le portail : des chiffres de suivi sans scan sur le terrain sont des chiffres inventés.', alt: 'Calendrier en mois : cadrage 0 à 1, application livreur 1 à 4, portail et versements 3 à 6, pilote 6 à 7, paiement à la porte et IA 7 à 8.' },
  },
  en: {
    cover: { eyebrow: 'Problem · Delivery and transport', title: ['A delivery platform', 'in Algeria in 2027:', 'couriers, COD, returns.'], subtitle: 'The journey of a cash-on-delivery parcel and the four places where money leaks, what each actor expects, the stack to build, and the calendar for a pilot wilaya.', left: { label: 'Today', sub: 'paper sheets, cash COD, returns suffered' }, right: { label: 'End of 2027', sub: 'scanned rounds, traced COD, D+3 payouts' }, note: 'Algeria · 2027' },
    parcel: { title: 'The journey of a COD parcel, and where the money leaks', items: [
      { n: '01', label: 'Order confirmed, or not', sub: 'Wrong number, customer who does not answer, impulse order. An unconfirmed parcel is already half refused.' },
      { n: '02', label: 'Pickup and sorting', sub: 'Label, weight, wilaya, hub. A mis-sorted parcel loses two days and arrives when the customer no longer wants it.' },
      { n: '03', label: 'Delivery attempt', sub: 'Customer unreachable, absent, refusal at the door. Every attempt costs; the second costs as much as the first.', accent: true },
      { n: '04', label: 'Collection or return', sub: 'COD handed to the courier, paid to the e-merchant at D+3 or D+15. Return carried, invoiced, sometimes lost.' },
    ], caption: 'Figure 1 · The refusal is decided at step 1 and paid for at step 3. A platform that only sees step 3 suffers; a platform that acts at step 1 reduces.', alt: 'Four steps of a cash-on-delivery parcel: confirmation, pickup and sorting, delivery attempt, collection or return, with losses at each step.' },
    actors: { title: 'What each actor expects from the platform', columns: ['What they expect', 'What makes them leave'], rows: [
      { label: 'E-merchant', cells: ['Real-time tracking, refusal rate by wilaya, fast COD payout', 'A late payout or a lost parcel with no explanation'] },
      { label: 'Courier', cells: ['Round in order, offline, proof in two taps, fair pay', 'An app that spins without network'] },
      { label: 'Dispatch and agencies', cells: ['Automatic assignment, visible incidents, traced returns', 'One Excel sheet per agency and a ringing phone'] },
      { label: 'End customer', cells: ['SMS or WhatsApp with the slot, card or QR payment at the door', 'A courier who calls three times and does not come'] },
      { label: 'Management', cells: ['Margin per parcel, COD cash position, returns as a percentage', 'Discovering the margin at month end'] },
      { label: 'Tax administration, in 2027', cells: ['Traced electronic collection, compliant invoices', 'Cash COD with no trace'] },
    ], caption: 'Figure 2 · Six actors, one system. The e-merchant pays for the left column; the right column is what makes them switch carrier.', alt: 'Matrix of the expectations of six actors of a delivery platform: e-merchant, courier, dispatch, end customer, management, tax administration.' },
    stack: { title: 'The stack of a delivery platform in 2027', layers: [
      { label: 'Customers', items: [{ name: 'E-merchant portal', sub: 'parcel drop, shop import, tracking, payouts, refusal rate', accent: true }, { name: 'End customer', sub: 'SMS and WhatsApp tracking, slot, confirmation' }] },
      { label: 'Field', items: [{ name: 'Offline courier app', sub: 'round, scan, proof, COD entered, incidents' }, { name: 'Payment at the door', sub: 'card via SoftPos, QR DZMobPay, recorded cash' }] },
      { label: 'Dispatch', items: [{ name: 'Back-office', sub: 'hubs, assignment, sorting, returns, incidents' }] },
      { label: 'Money', items: [{ name: 'COD collected and paid out', sub: 'batched payouts to e-merchants, statements' }, { name: 'Transport invoice and return fees', sub: 'compliant, VAT, per e-merchant' }] },
      { label: 'Data and AI', items: [{ name: 'Automated AR/FR confirmation, refusal prediction', sub: 'one base, Law 18-07 hosting' }] },
    ], caption: 'Figure 3 · The e-merchant portal is what sells. The offline courier app is what makes the portal’s numbers true.', alt: 'Five layers: e-merchant portal and customer tracking; offline courier app and payment at the door; dispatch back-office; COD collected and paid out, invoices; data and AI.' },
    timeline: { title: 'Eight months: one pilot wilaya before the network', unit: 'months', items: [
      { label: 'Scoping with five e-merchants', note: 'the real rules of sorting, COD and returns', from: 0, to: 1 },
      { label: 'Courier app: round, scan, COD', note: 'offline, tested on the couriers’ own phones', from: 1, to: 4 },
      { label: 'E-merchant portal and COD payouts', note: 'shop import, tracking, statements, invoice', from: 3, to: 6 },
      { label: 'Pilot: one wilaya, five e-merchants', note: 'refusal rate and payout delay measured', from: 6, to: 7 },
      { label: 'Payment at the door and AI confirmation', note: 'SoftPos, QR, automated confirmation; then the network', from: 7, to: 8, accent: true },
    ], caption: 'Figure 4 · The courier app is built before the portal: tracking numbers without field scans are made-up numbers.', alt: 'Timeline in months: scoping 0 to 1, courier app 1 to 4, portal and payouts 3 to 6, pilot 6 to 7, payment at the door and AI 7 to 8.' },
  },
  ar: {
    cover: { eyebrow: 'مشكلة · التوصيل والنقل', title: ['منصة توصيل', 'في الجزائر سنة 2027:', 'موصّلون، دفع عند الاستلام، مرتجعات.'], subtitle: 'مسار طرد مدفوع عند الاستلام والمواضع الأربعة التي يضيع فيها المال، ما ينتظره كل طرف، الطبقات التي تُبنى، والجدول لولاية تجريبية.', left: { label: 'اليوم', sub: 'أوراق جولات، دفع نقدي، مرتجعات مفروضة' }, right: { label: 'نهاية 2027', sub: 'جولات ممسوحة، دفع متتبَّع، تحويلات ي+3' }, note: 'الجزائر · 2027' },
    parcel: { title: 'مسار طرد مدفوع عند الاستلام، وأين يضيع المال', items: [
      { n: '01', label: 'طلب مؤكد، أو لا', sub: 'رقم خاطئ، زبون لا يجيب، طلب اندفاعي. الطرد غير المؤكد مرفوض نصفياً أصلاً.' },
      { n: '02', label: 'الجمع والفرز', sub: 'ملصق، وزن، ولاية، محور. الطرد المفروز خطأ يخسر يومين ويصل حين لم يعد الزبون يريده.' },
      { n: '03', label: 'محاولة التسليم', sub: 'زبون لا يُطال، غائب، رفض عند الباب. كل محاولة تكلّف؛ والثانية تكلّف كالأولى.', accent: true },
      { n: '04', label: 'التحصيل أو الإرجاع', sub: 'المبلغ يُسلَّم للموصّل ويُحوَّل للتاجر في ي+3 أو ي+15. المرتجع يُنقل ويُفوتر وأحياناً يضيع.' },
    ], caption: 'الشكل 1 · يُقرَّر الرفض في الخطوة 1 ويُدفع ثمنه في الخطوة 3. منصة لا ترى إلا الخطوة 3 تعاني؛ ومنصة تتصرف في الخطوة 1 تقلّل.', alt: 'أربع خطوات لمسار طرد مدفوع عند الاستلام مع الخسائر في كل خطوة.' },
    actors: { title: 'ما ينتظره كل طرف من المنصة', columns: ['ما ينتظره', 'ما يجعله يغادر'], rows: [
      { label: 'التاجر الإلكتروني', cells: ['تتبع آني، نسبة رفض حسب الولاية، تحويل سريع للمبالغ', 'تحويل متأخر أو طرد ضائع بلا تفسير'] },
      { label: 'الموصّل', cells: ['جولة مرتبة، دون اتصال، إثبات بلمستين، أجر عادل', 'تطبيق يدور فارغاً بلا شبكة'] },
      { label: 'التوزيع والوكالات', cells: ['تعيين تلقائي، حوادث مرئية، مرتجعات متتبَّعة', 'جدول إكسل لكل وكالة وهاتف يرن'] },
      { label: 'الزبون النهائي', cells: ['رسالة SMS أو واتساب بالموعد، دفع بالبطاقة أو QR عند الباب', 'موصّل يتصل ثلاث مرات ولا يأتي'] },
      { label: 'الإدارة', cells: ['هامش لكل طرد، سيولة المبالغ المحصَّلة، مرتجعات بالنسبة', 'اكتشاف الهامش آخر الشهر'] },
      { label: 'الضرائب، في 2027', cells: ['تحصيل إلكتروني متتبَّع، فواتير مطابقة', 'دفع نقدي عند الاستلام بلا أثر'] },
    ], caption: 'الشكل 2 · ستة أطراف ونظام واحد. يدفع التاجر الإلكتروني مقابل العمود الأيمن؛ والعمود الأيسر هو ما يجعله يغيّر الناقل.', alt: 'مصفوفة توقعات ستة أطراف من منصة توصيل.' },
    stack: { title: 'طبقات منصة توصيل في 2027', layers: [
      { label: 'الزبائن', items: [{ name: 'بوابة التاجر الإلكتروني', sub: 'إيداع طرود، استيراد المتجر، تتبع، تحويلات، نسبة الرفض', accent: true }, { name: 'الزبون النهائي', sub: 'SMS وواتساب للتتبع، موعد، تأكيد' }] },
      { label: 'الميدان', items: [{ name: 'تطبيق موصّل دون اتصال', sub: 'جولة، مسح، إثبات، مبلغ مُدخَل، حوادث' }, { name: 'دفع عند الباب', sub: 'بطاقة عبر SoftPos، QR DZMobPay، نقد مسجَّل' }] },
      { label: 'التوزيع', items: [{ name: 'مكتب خلفي', sub: 'محاور، تعيين، فرز، مرتجعات، حوادث' }] },
      { label: 'المال', items: [{ name: 'مبالغ محصَّلة ومحوَّلة', sub: 'تحويلات مجمَّعة للتجار، كشوف' }, { name: 'فاتورة النقل ورسوم الإرجاع', sub: 'مطابقة، TVA، لكل تاجر' }] },
      { label: 'البيانات والذكاء الاصطناعي', items: [{ name: 'تأكيد آلي عربي/فرنسي، توقّع الرفض', sub: 'قاعدة واحدة، استضافة القانون 18-07' }] },
    ], caption: 'الشكل 3 · بوابة التاجر هي ما يُباع. تطبيق الموصّل دون اتصال هو ما يجعل أرقام البوابة صحيحة.', alt: 'خمس طبقات لمنصة توصيل في الجزائر 2027.' },
    timeline: { title: 'ثمانية أشهر: ولاية تجريبية قبل الشبكة', unit: 'أشهر', items: [
      { label: 'تأطير مع خمسة تجار', note: 'القواعد الحقيقية للفرز والدفع عند الاستلام والإرجاع', from: 0, to: 1 },
      { label: 'تطبيق الموصّل: جولة، مسح، مبلغ', note: 'دون اتصال، مختبَر على هواتف الموصّلين', from: 1, to: 4 },
      { label: 'بوابة التاجر وتحويلات المبالغ', note: 'استيراد المتجر، تتبع، كشوف، فاتورة', from: 3, to: 6 },
      { label: 'تجربة: ولاية واحدة، خمسة تجار', note: 'قياس نسبة الرفض وأجل التحويل', from: 6, to: 7 },
      { label: 'دفع عند الباب وتأكيد بالذكاء الاصطناعي', note: 'SoftPos، QR، تأكيد آلي؛ ثم الشبكة', from: 7, to: 8, accent: true },
    ], caption: 'الشكل 4 · يُبنى تطبيق الموصّل قبل البوابة: أرقام تتبع بلا مسح في الميدان أرقام مختلَقة.', alt: 'جدول زمني بالأشهر لإطلاق منصة توصيل في 2027.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      parcel: { svg: steps({ title: t.parcel.title, steps: t.parcel.items, arrows: true, rtl }), caption: t.parcel.caption, alt: t.parcel.alt },
      actors: { svg: matrix({ title: t.actors.title, columns: t.actors.columns, rows: t.actors.rows, rtl }), caption: t.actors.caption, alt: t.actors.alt },
      stack: { svg: layers({ title: t.stack.title, layers: t.stack.layers, rtl }), caption: t.stack.caption, alt: t.stack.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 8, tick: 1, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
    },
  };
}
