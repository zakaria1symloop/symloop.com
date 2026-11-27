import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { grille, saison, STRINGS as SC } from './custom/boutique.mjs';
export const slug = 'logiciel-boutique-pret-a-porter-magasin-de-vetements-algerie-2027-stock-par-taille-et-couleur-echanges-mise-de-cote-instagram-fin-de-saison';
const T = {
  fr: {
    cover: { eyebrow: 'Logiciel boutique · Algérie · 2027', title: ['Logiciel boutique de prêt-à-porter', 'le stock par taille et par couleur'], subtitle: 'Un seul stock pour la boutique et Instagram, échanges, mises de côté, réassort par taille, fin de saison', left: { label: '58 pièces en stock', sub: 'compté par modèle' }, right: { label: 'Le 40 noir manque', sub: 'compté par taille' } },
    piece: { title: 'La vie d’une pièce, en six temps', items: [
      { label: 'Réception', sub: 'étiquetée : modèle, taille, couleur' },
      { label: 'Rayon et réserve', sub: 'une place connue, par boutique' },
      { label: 'Vente', sub: 'boutique ou Instagram, un seul stock', accent: true },
      { label: 'Échange', sub: 'retour en stock, avoir tracé' },
      { label: 'Réassort', sub: 'les tailles demandées, pas la moyenne' },
      { label: 'Fin de saison', sub: 'démarque décidée à mi-saison' },
    ], caption: 'Figure 1 · Six temps dans la vie d’une pièce. Le temps accentué est la vente : la boutique et la page Instagram puisent dans le même stock, sinon la même pièce est vendue deux fois.', alt: 'Six temps : réception, rayon et réserve, vente (accentuée), échange, réassort, fin de saison.' },
    couches: { title: 'Ce que le logiciel tient, en cinq couches', layers: [
      { label: 'Modèles', items: [{ name: 'Le modèle et sa grille : une fiche, des tailles et des couleurs, un code-barres par case', sub: 'ce qui se vend, tel qu’il se vend', accent: true }] },
      { label: 'Stock', items: [{ name: 'Le stock par boutique et par réserve, case par case, avec les transferts entre boutiques', sub: 'le 40 noir existe : il est ailleurs' }] },
      { label: 'Caisse', items: [{ name: 'La caisse : ventes, échanges, avoirs, mises de côté avec acompte et date limite', sub: 'tout ce qui se passe au comptoir' }] },
      { label: 'Clientes', items: [{ name: 'Les clientes : un téléphone, des tailles, des achats, des demandes non servies', sub: 'prévenir quand la taille revient' }] },
      { label: 'Saison', items: [{ name: 'La saison : écoulement par modèle, réassort par taille, démarque décidée à temps', sub: 'ce qui reste à la fin se décide à mi-saison' }] },
    ], caption: 'Figure 2 · Cinq couches. La couche accentuée est celle du modèle et de sa grille : un vêtement n’est pas un article, c’est un tableau de tailles et de couleurs. Tout le reste s’appuie sur ce tableau.', alt: 'Cinq couches : le modèle et sa grille (accentuée) ; le stock par boutique ; la caisse ; les clientes ; la saison.' },
    grille: { caption: 'Figure 3 · La grille d’un modèle : 58 pièces en stock, mais six cases vides dans les tailles les plus demandées, et 34 pièces qui dorment en 44 et 46. Exemple construit.' },
    comptoir: { title: 'Six situations du comptoir, aujourd’hui et avec le logiciel', columns: ['Aujourd’hui', 'Avec le logiciel'], rows: [
      { label: 'Une cliente demande le 40 en noir', cells: ['on cherche en réserve, puis on dit non', 'il est à l’autre boutique : réservé pour elle'] },
      { label: 'Une commande arrive par Instagram', cells: ['la pièce vient d’être vendue en boutique', 'un seul stock : la pièce est retenue'] },
      { label: 'Une cliente échange une robe', cells: ['un papier agrafé, un stock devenu faux', 'retour en stock, avoir ou échange tracé'] },
      { label: 'Une pièce est mise de côté', cells: ['un sac sous le comptoir, sans date', 'réservée avec acompte et date limite'] },
      { label: 'Le réassort part chez le fournisseur', cells: ['on recommande ce qu’on croit vendre', 'tailles vendues et tailles demandées'] },
      { label: 'La saison se termine', cells: ['on démarque tout, trop tard', 'modèles lents repérés à mi-saison'] },
    ], caption: 'Figure 4 · Six situations de tous les jours. La colonne du milieu est ce qui se passe avec un cahier ou une caisse simple ; celle de droite, ce que permet un stock tenu par taille et par couleur, partagé entre la boutique et la vente en ligne.', alt: 'Matrice de six situations : une cliente demande le 40 en noir, une commande arrive par Instagram, une cliente échange une robe, une pièce est mise de côté, le réassort part chez le fournisseur, la saison se termine ; pour chacune, ce qui se passe aujourd’hui et avec le logiciel.' },
    saison: { caption: 'Figure 5 · Une collection de 400 pièces. Sans décision, 120 pièces restent à la fin ; avec une démarque décidée à la semaine 6 sur les modèles lents, 40. Courbes fictives d’un exemple construit.' },
    calendrier: { title: 'Six semaines pour une boutique tenue par taille et par couleur', unit: 'sem.', items: [
      { label: 'Relevé', note: 'modèles en vente, façon de noter tailles et couleurs, caisse, page Instagram, deuxième boutique', from: 0, to: 1, accent: true },
      { label: 'Modèles et grilles', note: 'une fiche par modèle, sa grille, un code-barres par case, étiquettes imprimées', from: 1, to: 3 },
      { label: 'Stock de départ', note: 'inventaire par taille et par couleur, boutique et réserve', from: 2, to: 3 },
      { label: 'Caisse', note: 'ventes au scan, échanges, avoirs, mises de côté, clôture du soir', from: 3, to: 5 },
      { label: 'Vente en ligne', note: 'commandes Instagram et WhatsApp saisies sur le même stock, pièce retenue', from: 4, to: 6 },
      { label: 'Lecture de saison', note: 'écoulement par modèle, tailles demandées, liste de réassort', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines dans l’exemple, pour une boutique de quelques centaines de modèles. La période accentuée est la première : on regarde comment tailles et couleurs sont notées aujourd’hui. Durées indicatives d’un exemple construit.', alt: 'Calendrier de six semaines : relevé (accentué), modèles et grilles, stock de départ, caisse, vente en ligne, lecture de saison.' },
  },
  en: {
    cover: { eyebrow: 'Boutique software · Algeria · 2027', title: ['Clothing shop software', 'stock per size and per colour'], subtitle: 'One stock for the shop and Instagram, exchanges, items put aside, reordering by size, end of season', left: { label: '58 pieces in stock', sub: 'counted per model' }, right: { label: 'Black 40 is missing', sub: 'counted per size' } },
    piece: { title: 'The life of one piece, in six steps', items: [
      { label: 'Reception', sub: 'labelled: model, size, colour' },
      { label: 'Shelf and stockroom', sub: 'a known place, per shop' },
      { label: 'Sale', sub: 'shop or Instagram, one single stock', accent: true },
      { label: 'Exchange', sub: 'back in stock, credit traced' },
      { label: 'Reorder', sub: 'the sizes asked for, not the average' },
      { label: 'End of season', sub: 'markdown decided at mid-season' },
    ], caption: 'Figure 1 · Six steps in the life of one piece. The accented step is the sale: the shop and the Instagram page draw on the same stock, otherwise the same piece is sold twice.', alt: 'Six steps: reception, shelf and stockroom, sale (accented), exchange, reorder, end of season.' },
    couches: { title: 'What the software holds, in five layers', layers: [
      { label: 'Models', items: [{ name: 'The model and its grid: one record, sizes and colours, one barcode per cell', sub: 'what is sold, the way it is sold', accent: true }] },
      { label: 'Stock', items: [{ name: 'Stock per shop and per stockroom, cell by cell, with transfers between shops', sub: 'the black 40 exists: it is elsewhere' }] },
      { label: 'Till', items: [{ name: 'The till: sales, exchanges, credit notes, items put aside with a deposit and a deadline', sub: 'everything that happens at the counter' }] },
      { label: 'Customers', items: [{ name: 'Customers: a phone number, sizes, purchases, requests not served', sub: 'tell them when the size is back' }] },
      { label: 'Season', items: [{ name: 'The season: sell-through per model, reordering by size, markdown decided in time', sub: 'what is left at the end is decided at mid-season' }] },
    ], caption: 'Figure 2 · Five layers. The accented layer is the model and its grid: a garment is not an item, it is a table of sizes and colours. Everything else rests on that table.', alt: 'Five layers: the model and its grid (accented); stock per shop; the till; customers; the season.' },
    grille: { caption: 'Figure 3 · One model’s grid: 58 pieces in stock, but six empty cells in the most requested sizes, and 34 pieces sleeping in 44 and 46. Constructed example.' },
    comptoir: { title: 'Six situations at the counter, today and with the software', columns: ['Today', 'With the software'], rows: [
      { label: 'A customer asks for the 40 in black', cells: ['you search the stockroom, then say no', 'it is in the other shop: reserved for her'] },
      { label: 'An order arrives through Instagram', cells: ['the piece has just been sold in the shop', 'one single stock: the piece is held'] },
      { label: 'A customer exchanges a dress', cells: ['a stapled slip, a stock gone wrong', 'back in stock, credit or exchange traced'] },
      { label: 'A piece is put aside', cells: ['a bag under the counter, with no date', 'reserved with a deposit and a deadline'] },
      { label: 'The reorder goes to the supplier', cells: ['you reorder what you believe sells', 'sizes sold and sizes asked for'] },
      { label: 'The season ends', cells: ['everything is marked down, too late', 'slow models spotted at mid-season'] },
    ], caption: 'Figure 4 · Six everyday situations. The middle column is what happens with a notebook or a simple till; the right-hand one, what a stock kept per size and colour, shared between the shop and online sales, makes possible.', alt: 'Matrix of six situations: a customer asks for the 40 in black, an order arrives through Instagram, a customer exchanges a dress, a piece is put aside, the reorder goes to the supplier, the season ends; for each, what happens today and with the software.' },
    saison: { caption: 'Figure 5 · A 400-piece collection. With no decision, 120 pieces remain at the end; with a markdown decided at week 6 on the slow models, 40. Fictitious curves of a constructed example.' },
    calendrier: { title: 'Six weeks for a shop run by size and by colour', unit: 'wk', items: [
      { label: 'Survey', note: 'models on sale, how sizes and colours are noted, till, Instagram page, second shop', from: 0, to: 1, accent: true },
      { label: 'Models and grids', note: 'one record per model, its grid, one barcode per cell, labels printed', from: 1, to: 3 },
      { label: 'Opening stock', note: 'stocktake by size and colour, shop and stockroom', from: 2, to: 3 },
      { label: 'Till', note: 'sales by scan, exchanges, credit notes, items put aside, evening closing', from: 3, to: 5 },
      { label: 'Online sales', note: 'Instagram and WhatsApp orders entered on the same stock, piece held', from: 4, to: 6 },
      { label: 'Season reading', note: 'sell-through per model, sizes asked for, reorder list', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks in the example, for a shop of a few hundred models. The accented period is the first: looking at how sizes and colours are noted today. Indicative durations of a constructed example.', alt: 'Six-week calendar: survey (accented), models and grids, opening stock, till, online sales, season reading.' },
  },
  ar: {
    cover: { eyebrow: 'برنامج محل الملابس · الجزائر · 2027', title: ['برنامج محل الملابس الجاهزة', 'المخزون حسب المقاس واللون'], subtitle: 'مخزون واحد للمحل وإنستغرام، التبديل، حجز القطع، إعادة التموين حسب المقاس، ونهاية الموسم', left: { label: '58 قطعة في المخزون', sub: 'معدودة حسب الموديل' }, right: { label: 'المقاس 40 أسود ناقص', sub: 'معدودة حسب المقاس' } },
    piece: { title: 'حياة قطعة واحدة، في ست مراحل', items: [
      { label: 'الاستلام', sub: 'بملصق: الموديل، المقاس، واللون' },
      { label: 'الرف والمخزن', sub: 'مكان معروف، لكل محل' },
      { label: 'البيع', sub: 'المحل أو إنستغرام، مخزون واحد', accent: true },
      { label: 'التبديل', sub: 'عودة إلى المخزون، ورصيد مسجَّل' },
      { label: 'إعادة التموين', sub: 'المقاسات المطلوبة، لا المتوسط' },
      { label: 'نهاية الموسم', sub: 'تخفيض يُقرَّر في منتصف الموسم' },
    ], caption: 'الشكل 1 · ست مراحل في حياة قطعة. المرحلة المبرزة هي البيع: المحل وصفحة إنستغرام يأخذان من المخزون نفسه، وإلا بيعت القطعة نفسها مرتين.', alt: 'ست مراحل: الاستلام، الرف والمخزن، البيع (مبرزة)، التبديل، إعادة التموين، ونهاية الموسم.' },
    couches: { title: 'ما يمسكه البرنامج، في خمس طبقات', layers: [
      { label: 'الموديلات', items: [{ name: 'الموديل وشبكته: بطاقة واحدة، مقاسات وألوان، ورمز شريطي لكل خانة', sub: 'ما يُباع، كما يُباع', accent: true }] },
      { label: 'المخزون', items: [{ name: 'المخزون لكل محل ولكل مخزن، خانة بخانة، مع التحويلات بين المحلات', sub: 'المقاس 40 الأسود موجود: هو في مكان آخر' }] },
      { label: 'الصندوق', items: [{ name: 'الصندوق: المبيعات، التبديل، الأرصدة، وحجز القطع بعربون وتاريخ أقصى', sub: 'كل ما يجري عند الصندوق' }] },
      { label: 'الزبونات', items: [{ name: 'الزبونات: رقم هاتف، مقاسات، مشتريات، وطلبات لم تُلبَّ', sub: 'الإعلام حين يعود المقاس' }] },
      { label: 'الموسم', items: [{ name: 'الموسم: التصريف لكل موديل، إعادة التموين حسب المقاس، وتخفيض يُقرَّر في وقته', sub: 'ما يبقى في النهاية يُقرَّر في منتصف الموسم' }] },
    ], caption: 'الشكل 2 · خمس طبقات. الطبقة المبرزة هي الموديل وشبكته: اللباس ليس سلعة واحدة، هو جدول من مقاسات وألوان. وكل الباقي يقوم على هذا الجدول.', alt: 'خمس طبقات: الموديل وشبكته (مبرزة)؛ المخزون لكل محل؛ الصندوق؛ الزبونات؛ والموسم.' },
    grille: { caption: 'الشكل 3 · شبكة موديل واحد: 58 قطعة في المخزون، لكن ست خانات فارغة في المقاسات الأكثر طلباً، و34 قطعة نائمة في 44 و46. مثال مركَّب.' },
    comptoir: { title: 'ست حالات عند الصندوق، اليوم ومع البرنامج', columns: ['اليوم', 'مع البرنامج'], rows: [
      { label: 'زبونة تطلب المقاس 40 بالأسود', cells: ['نبحث في المخزن، ثم نقول لا', 'هو في المحل الآخر: محجوز لها'] },
      { label: 'طلبية تصل عبر إنستغرام', cells: ['القطعة بيعت للتو في المحل', 'مخزون واحد: القطعة محتجزة'] },
      { label: 'زبونة تبدّل فستاناً', cells: ['ورقة مثبَّتة، ومخزون صار خاطئاً', 'عودة إلى المخزون، ورصيد أو تبديل مسجَّل'] },
      { label: 'قطعة تُحجز لزبونة', cells: ['كيس تحت الصندوق، دون تاريخ', 'محجوزة بعربون وتاريخ أقصى'] },
      { label: 'طلب التموين يذهب إلى المورّد', cells: ['نعيد طلب ما نظن أنه يُباع', 'المقاسات المبيعة والمقاسات المطلوبة'] },
      { label: 'الموسم ينتهي', cells: ['نخفّض كل شيء، بعد فوات الأوان', 'الموديلات البطيئة تُرصد في منتصف الموسم'] },
    ], caption: 'الشكل 4 · ست حالات من كل يوم. العمود الأوسط هو ما يحدث بدفتر أو صندوق بسيط؛ والآخر، ما يتيحه مخزون يُمسك حسب المقاس واللون، مشترك بين المحل والبيع على الإنترنت.', alt: 'مصفوفة من ست حالات: زبونة تطلب المقاس 40 بالأسود، طلبية تصل عبر إنستغرام، زبونة تبدّل فستاناً، قطعة تُحجز، طلب التموين يذهب إلى المورّد، والموسم ينتهي؛ ولكل واحدة، ما يحدث اليوم ومع البرنامج.' },
    saison: { caption: 'الشكل 5 · تشكيلة من 400 قطعة. دون قرار، تبقى 120 قطعة في النهاية؛ وبتخفيض يُقرَّر في الأسبوع 6 على الموديلات البطيئة، 40. منحنيات خيالية لمثال مركَّب.' },
    calendrier: { title: 'ستة أسابيع لمحل يُمسك حسب المقاس واللون', unit: 'أسبوع', items: [
      { label: 'المعاينة', note: 'الموديلات المعروضة، طريقة تسجيل المقاسات والألوان، الصندوق، صفحة إنستغرام، والمحل الثاني', from: 0, to: 1, accent: true },
      { label: 'الموديلات والشبكات', note: 'بطاقة لكل موديل، شبكته، رمز شريطي لكل خانة، وملصقات مطبوعة', from: 1, to: 3 },
      { label: 'مخزون البداية', note: 'جرد حسب المقاس واللون، في المحل والمخزن', from: 2, to: 3 },
      { label: 'الصندوق', note: 'بيع بالمسح، تبديل، أرصدة، حجز قطع، وإغلاق المساء', from: 3, to: 5 },
      { label: 'البيع على الإنترنت', note: 'طلبيات إنستغرام وواتساب تُدخَل على المخزون نفسه، والقطعة محتجزة', from: 4, to: 6 },
      { label: 'قراءة الموسم', note: 'التصريف لكل موديل، المقاسات المطلوبة، وقائمة إعادة التموين', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع في المثال، لمحل من بضع مئات من الموديلات. الفترة المبرزة هي الأولى: النظر في طريقة تسجيل المقاسات والألوان اليوم. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من ستة أسابيع: المعاينة (مبرزة)، الموديلات والشبكات، مخزون البداية، الصندوق، البيع على الإنترنت، ثم قراءة الموسم.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      piece: { svg: steps({ title: t.piece.title, steps: t.piece.items, arrows: true, rtl }), caption: t.piece.caption, alt: t.piece.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      grille: { svg: grille(e.grille, rtl), caption: t.grille.caption, alt: e.grille.alt },
      comptoir: { svg: matrix({ title: t.comptoir.title, columns: t.comptoir.columns, rows: t.comptoir.rows, rtl }), caption: t.comptoir.caption, alt: t.comptoir.alt },
      saison: { svg: saison(e.saison, rtl), caption: t.saison.caption, alt: e.saison.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
