import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { rentree, liste, STRINGS as SC } from './custom/librairie.mjs';
export const slug = 'logiciel-librairie-papeterie-algerie-2027-rentree-scolaire-listes-de-fournitures-en-kits-manuels-commandes-clients-invendus-stock-par-saison';
const T = {
  fr: {
    cover: { eyebrow: 'Librairie-papeterie · Algérie · 2027', title: ['Logiciel de librairie-papeterie', 'pour tenir la rentrée'], subtitle: 'Rentrée scolaire, listes en kits, manuels, commandes clients, invendus, stock par saison', left: { label: '12 recherches', sub: 'pour une seule liste' }, right: { label: '1 scan', sub: 'la liste entière' } },
    couches: { title: 'Ce qu’il y a dans un logiciel de librairie-papeterie, en cinq couches', layers: [
      { label: 'Articles', items: [{ name: 'Les articles : livres par ISBN, fournitures par code-barres, familles, niveaux scolaires, équivalents', sub: 'un article, une fiche, un code' }] },
      { label: 'Listes', items: [{ name: 'Les listes scolaires : par école et par niveau, saisies une fois, vendues en kit, préparées d’avance', sub: 'ce qui fait la rentrée', accent: true }] },
      { label: 'Caisse', items: [{ name: 'La caisse : scan, kit ajouté d’un geste, remplacement proposé, ticket, file qui avance', sub: 'le comptoir, en septembre' }] },
      { label: 'Commandes', items: [{ name: 'Les commandes clients : titre réservé, commande au distributeur, message à l’arrivée, retrait', sub: 'le livre qu’on n’a pas en rayon' }] },
      { label: 'Saison', items: [{ name: 'La saison : commande de juin, réassort, ventes par semaine, invendus comptés à la fin', sub: 'ce qu’on achète une fois par an' }] },
    ], caption: 'Figure 1 · Cinq couches. La couche accentuée est celle des listes scolaires : c’est elle qui relie ce que les écoles demandent, ce que le magasin commande en juin et ce que la caisse vend en septembre.', alt: 'Cinq couches : les articles ; les listes scolaires (accentuées) ; la caisse ; les commandes clients ; la saison.' },
    familles: { title: 'Cinq familles dans le même magasin : comment elles se vendent, ce qu’il faut suivre', columns: ['Comment ça se vend', 'Ce que le logiciel suit'], rows: [
      { label: 'Les fournitures scolaires', cells: ['six semaines par an, par listes', 'listes, kits, commande de saison, restes'] },
      { label: 'Les manuels et le parascolaire', cells: ['par niveau, un titre précis, à la rentrée', 'ISBN, édition, quantités par niveau'] },
      { label: 'Les livres', cells: ['un exemplaire par titre, toute l’année', 'titre par titre, commandes clients, rotation'] },
      { label: 'La papeterie de bureau', cells: ['toute l’année, à des entreprises', 'comptes clients, bons de livraison, relevés'] },
      { label: 'Les services', cells: ['photocopies, impressions, reliures', 'compteurs, tarifs par quantité, caisse'] },
    ], caption: 'Figure 2 · Cinq familles sous le même toit. Elles n’ont ni le même rythme ni le même risque : un logiciel de caisse générique les traite toutes comme des articles ; un logiciel de librairie-papeterie suit chacune comme elle se vend.', alt: 'Matrice de cinq familles vendues dans une librairie-papeterie : les fournitures scolaires, les manuels et le parascolaire, les livres, la papeterie de bureau, les services ; pour chacune, comment elle se vend et ce que le logiciel suit.' },
    commande: { title: 'Une commande client, en six temps', items: [
      { label: 'Demande', sub: 'titre cherché par ISBN ou par nom' },
      { label: 'Réservation', sub: 'nom, téléphone, acompte éventuel' },
      { label: 'Commande', sub: 'groupée par distributeur' },
      { label: 'Réception', sub: 'le livre est rattaché à sa commande', accent: true },
      { label: 'Message', sub: '« votre livre est arrivé »' },
      { label: 'Retrait', sub: 'vendu, ou remis en rayon après un délai' },
    ], caption: 'Figure 3 · Six temps. Le temps accentué est la réception : c’est là que le livre commandé se perd, rangé en rayon et vendu à quelqu’un d’autre, si rien ne le rattache à la personne qui l’attend.', alt: 'Six temps : demande, réservation, commande, réception (accentuée), message, retrait.' },
    rentree: { caption: 'Figure 4 · Les ventes de fournitures sur cinquante-deux semaines, en indice : six semaines font 44 % de l’année. La commande de saison se passe trois mois avant le pic. Indice fictif.' },
    liste: { caption: 'Figure 5 · Une liste de 12 lignes et 33 articles vendue d’un scan : 9 lignes en stock, 2 remplacées, 1 en commande. Avec 96 élèves, la même liste se vend 96 fois. Exemple construit.' },
    calendrier: { title: 'Huit semaines, à terminer avant juin', unit: 'sem.', items: [
      { label: 'Cadrage', note: 'les familles, les écoles du quartier, les distributeurs, les ventes de la dernière rentrée', from: 0, to: 1, accent: true },
      { label: 'Articles et codes', note: 'reprise des articles, ISBN et codes-barres, familles, niveaux, équivalents', from: 1, to: 3 },
      { label: 'Caisse', note: 'scan, ticket, remplacement proposé, clôture, usage hors connexion', from: 2, to: 5 },
      { label: 'Listes et kits', note: 'listes par école et par niveau, kit ajouté d’un scan, préparation d’avance', from: 3, to: 6 },
      { label: 'Commandes clients', note: 'réservation, commande groupée, message à l’arrivée, retrait', from: 4, to: 7 },
      { label: 'Saison et mise en service', note: 'commande de saison proposée, ventes par semaine, formation, premières ventes réelles', from: 6, to: 8 },
    ], caption: 'Figure 6 · Huit semaines dans l’exemple. La période accentuée est la première ; l’ensemble se termine avant juin, pour que les listes soient saisies et la commande de saison préparée dans le logiciel. Durées indicatives d’un exemple construit.', alt: 'Calendrier de huit semaines : cadrage (accentué), articles et codes, caisse, listes et kits, commandes clients, saison et mise en service.' },
  },
  en: {
    cover: { eyebrow: 'Bookshop & stationery · Algeria · 2027', title: ['Bookshop and stationery software', 'that holds through back-to-school'], subtitle: 'Back-to-school, lists as kits, textbooks, customer orders, unsold stock, stock by season', left: { label: '12 searches', sub: 'for a single list' }, right: { label: '1 scan', sub: 'the whole list' } },
    couches: { title: 'What is inside bookshop and stationery software, in five layers', layers: [
      { label: 'Items', items: [{ name: 'The items: books by ISBN, supplies by barcode, families, school years, equivalents', sub: 'one item, one record, one code' }] },
      { label: 'Lists', items: [{ name: 'The school lists: per school and per year group, entered once, sold as a kit, prepared in advance', sub: 'what makes the season', accent: true }] },
      { label: 'Till', items: [{ name: 'The till: scan, kit added in one gesture, replacement offered, ticket, a queue that moves', sub: 'the counter, in September' }] },
      { label: 'Orders', items: [{ name: 'Customer orders: title reserved, order to the distributor, message on arrival, collection', sub: 'the book that is not on the shelf' }] },
      { label: 'Season', items: [{ name: 'The season: June order, top-up, sales per week, unsold items counted at the end', sub: 'what is bought once a year' }] },
    ], caption: 'Figure 1 · Five layers. The accented layer is the school lists: it links what schools ask for, what the shop orders in June and what the till sells in September.', alt: 'Five layers: the items; the school lists (accented); the till; customer orders; the season.' },
    familles: { title: 'Five families in the same shop: how they sell, what has to be tracked', columns: ['How it sells', 'What the software tracks'], rows: [
      { label: 'School supplies', cells: ['six weeks a year, by lists', 'lists, kits, season order, leftovers'] },
      { label: 'Textbooks and study guides', cells: ['by year group, one exact title, in season', 'ISBN, edition, quantities per year group'] },
      { label: 'Books', cells: ['one copy per title, all year', 'title by title, customer orders, turnover'] },
      { label: 'Office stationery', cells: ['all year, to companies', 'customer accounts, delivery notes, statements'] },
      { label: 'Services', cells: ['photocopies, printing, binding', 'counters, prices by quantity, till'] },
    ], caption: 'Figure 2 · Five families under one roof. They share neither rhythm nor risk: generic till software treats them all as items; bookshop and stationery software tracks each the way it sells.', alt: 'Matrix of five families sold in a bookshop and stationery shop: school supplies, textbooks and study guides, books, office stationery, services; for each, how it sells and what the software tracks.' },
    commande: { title: 'A customer order, in six steps', items: [
      { label: 'Request', sub: 'title found by ISBN or by name' },
      { label: 'Reservation', sub: 'name, phone, optional deposit' },
      { label: 'Order', sub: 'grouped per distributor' },
      { label: 'Receipt', sub: 'the book is tied to its order', accent: true },
      { label: 'Message', sub: '“your book has arrived”' },
      { label: 'Collection', sub: 'sold, or back on the shelf after a delay' },
    ], caption: 'Figure 3 · Six steps. The accented step is receipt: that is where the ordered book gets lost, shelved and sold to someone else, if nothing ties it to the person waiting for it.', alt: 'Six steps: request, reservation, order, receipt (accented), message, collection.' },
    rentree: { caption: 'Figure 4 · Supply sales over fifty-two weeks, as an index: six weeks make 44% of the year. The season’s order is placed three months before the peak. Fictitious index.' },
    liste: { caption: 'Figure 5 · A list of 12 lines and 33 items sold with one scan: 9 lines in stock, 2 replaced, 1 on order. With 96 pupils, the same list is sold 96 times. Constructed example.' },
    calendrier: { title: 'Eight weeks, to finish before June', unit: 'wk', items: [
      { label: 'Scoping', note: 'the families, the neighbourhood schools, the distributors, last season’s sales', from: 0, to: 1, accent: true },
      { label: 'Items and codes', note: 'taking over the items, ISBN and barcodes, families, year groups, equivalents', from: 1, to: 3 },
      { label: 'Till', note: 'scan, ticket, replacement offered, closing, use without a connection', from: 2, to: 5 },
      { label: 'Lists and kits', note: 'lists per school and per year group, kit added with one scan, preparation in advance', from: 3, to: 6 },
      { label: 'Customer orders', note: 'reservation, grouped order, message on arrival, collection', from: 4, to: 7 },
      { label: 'Season and go-live', note: 'season order proposed, sales per week, training, first real sales', from: 6, to: 8 },
    ], caption: 'Figure 6 · Eight weeks in the example. The accented period is the first; the whole finishes before June, so that the lists are entered and the season’s order prepared in the software. Indicative durations of a constructed example.', alt: 'Eight-week calendar: scoping (accented), items and codes, till, lists and kits, customer orders, season and go-live.' },
  },
  ar: {
    cover: { eyebrow: 'مكتبة ووراقة · الجزائر · 2027', title: ['برنامج المكتبة والوراقة', 'ليصمد في الدخول المدرسي'], subtitle: 'الدخول المدرسي، القوائم في حزم، الكتب المدرسية، طلبيات الزبائن، ما لم يُبع، والمخزون حسب الموسم', left: { label: '12 بحثاً', sub: 'لقائمة واحدة' }, right: { label: 'مسح واحد', sub: 'القائمة كلها' } },
    couches: { title: 'ما يوجد في برنامج مكتبة ووراقة، في خمس طبقات', layers: [
      { label: 'السلع', items: [{ name: 'السلع: الكتب برقم ISBN، اللوازم بالرمز الشريطي، العائلات، المستويات الدراسية، والمعادِلات', sub: 'سلعة، بطاقة، ورمز' }] },
      { label: 'القوائم', items: [{ name: 'القوائم المدرسية: لكل مدرسة ولكل مستوى، تُدخَل مرة واحدة، تُباع في حزمة، وتُحضَّر مسبقاً', sub: 'ما يصنع الدخول المدرسي', accent: true }] },
      { label: 'الصندوق', items: [{ name: 'الصندوق: مسح، حزمة تُضاف بحركة واحدة، بديل يُقترح، تذكرة، وطابور يتقدّم', sub: 'المنضدة، في سبتمبر' }] },
      { label: 'الطلبيات', items: [{ name: 'طلبيات الزبائن: عنوان محجوز، طلبية إلى الموزّع، رسالة عند الوصول، واستلام', sub: 'الكتاب الذي ليس على الرف' }] },
      { label: 'الموسم', items: [{ name: 'الموسم: طلبية جوان، إعادة التموين، المبيعات في الأسبوع، وما لم يُبع يُعدّ في النهاية', sub: 'ما يُشترى مرة في السنة' }] },
    ], caption: 'الشكل 1 · خمس طبقات. الطبقة المبرزة هي القوائم المدرسية: هي التي تربط ما تطلبه المدارس، ما يطلبه المحل في جوان، وما يبيعه الصندوق في سبتمبر.', alt: 'خمس طبقات: السلع؛ القوائم المدرسية (مبرزة)؛ الصندوق؛ طلبيات الزبائن؛ والموسم.' },
    familles: { title: 'خمس عائلات في المحل نفسه: كيف تُباع، وما يجب تتبّعه', columns: ['كيف تُباع', 'ما يتتبّعه البرنامج'], rows: [
      { label: 'اللوازم المدرسية', cells: ['ستة أسابيع في السنة، بالقوائم', 'القوائم، الحزم، طلبية الموسم، والباقي'] },
      { label: 'الكتب المدرسية وشبه المدرسية', cells: ['حسب المستوى، عنوان محدَّد، في الدخول', 'ISBN، الطبعة، والكميات لكل مستوى'] },
      { label: 'الكتب', cells: ['نسخة لكل عنوان، طوال السنة', 'عنواناً بعنوان، طلبيات الزبائن، والدوران'] },
      { label: 'وراقة المكاتب', cells: ['طوال السنة، للمؤسسات', 'حسابات الزبائن، وصولات التسليم، والكشوف'] },
      { label: 'الخدمات', cells: ['نسخ، طباعة، وتجليد', 'عدّادات، أسعار حسب الكمية، وصندوق'] },
    ], caption: 'الشكل 2 · خمس عائلات تحت سقف واحد. لا الإيقاع نفسه ولا الخطر نفسه: برنامج صندوق عام يعاملها كلها كسلع؛ وبرنامج المكتبة والوراقة يتتبّع كل واحدة كما تُباع.', alt: 'مصفوفة من خمس عائلات تُباع في مكتبة ووراقة: اللوازم المدرسية، الكتب المدرسية وشبه المدرسية، الكتب، وراقة المكاتب، والخدمات؛ ولكل واحدة، كيف تُباع وما يتتبّعه البرنامج.' },
    commande: { title: 'طلبية زبون، في ست مراحل', items: [
      { label: 'الطلب', sub: 'عنوان يُبحث عنه بالرقم أو بالاسم' },
      { label: 'الحجز', sub: 'الاسم، الهاتف، وعربون إن وُجد' },
      { label: 'الطلبية', sub: 'مجمَّعة لكل موزّع' },
      { label: 'الوصول', sub: 'الكتاب يُربط بطلبيته', accent: true },
      { label: 'الرسالة', sub: '«كتابكم وصل»' },
      { label: 'الاستلام', sub: 'يُباع، أو يعود إلى الرف بعد أجل' },
    ], caption: 'الشكل 3 · ست مراحل. المرحلة المبرزة هي الوصول: هناك يضيع الكتاب المطلوب، يُرتَّب على الرف ويُباع لغير صاحبه، إذا لم يربطه شيء بمن ينتظره.', alt: 'ست مراحل: الطلب، الحجز، الطلبية، الوصول (مبرزة)، الرسالة، والاستلام.' },
    rentree: { caption: 'الشكل 4 · مبيعات اللوازم على اثنين وخمسين أسبوعاً، بمؤشر: ستة أسابيع تصنع 44 بالمئة من السنة. وطلبية الموسم تُبرم قبل القمة بثلاثة أشهر. مؤشر خيالي.' },
    liste: { caption: 'الشكل 5 · قائمة من 12 سطراً و33 سلعة تُباع بمسح واحد: 9 أسطر في المخزون، سطران عُوّضا، وسطر في الطلب. وبـ96 تلميذاً، تُباع القائمة نفسها 96 مرة. مثال مركَّب.' },
    calendrier: { title: 'ثمانية أسابيع، تنتهي قبل جوان', unit: 'أسبوع', items: [
      { label: 'التأطير', note: 'العائلات، مدارس الحي، الموزّعون، ومبيعات الدخول الأخير', from: 0, to: 1, accent: true },
      { label: 'السلع والرموز', note: 'استرجاع السلع، أرقام ISBN والرموز الشريطية، العائلات، المستويات، والمعادِلات', from: 1, to: 3 },
      { label: 'الصندوق', note: 'مسح، تذكرة، بديل يُقترح، إغلاق، وعمل دون اتصال', from: 2, to: 5 },
      { label: 'القوائم والحزم', note: 'قوائم لكل مدرسة ولكل مستوى، حزمة تُضاف بمسح واحد، وتحضير مسبق', from: 3, to: 6 },
      { label: 'طلبيات الزبائن', note: 'حجز، طلبية مجمَّعة، رسالة عند الوصول، واستلام', from: 4, to: 7 },
      { label: 'الموسم والتشغيل', note: 'طلبية موسم مقترحة، المبيعات في الأسبوع، تكوين، وأولى المبيعات الحقيقية', from: 6, to: 8 },
    ], caption: 'الشكل 6 · ثمانية أسابيع في المثال. الفترة المبرزة هي الأولى؛ والكل ينتهي قبل جوان، لتُدخَل القوائم وتُحضَّر طلبية الموسم في البرنامج. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من ثمانية أسابيع: التأطير (مبرزة)، السلع والرموز، الصندوق، القوائم والحزم، طلبيات الزبائن، ثم الموسم والتشغيل.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      familles: { svg: matrix({ title: t.familles.title, columns: t.familles.columns, rows: t.familles.rows, rtl }), caption: t.familles.caption, alt: t.familles.alt },
      commande: { svg: steps({ title: t.commande.title, steps: t.commande.items, arrows: true, rtl }), caption: t.commande.caption, alt: t.commande.alt },
      rentree: { svg: rentree(e.rentree, rtl), caption: t.rentree.caption, alt: e.rentree.alt },
      liste: { svg: liste(e.liste, rtl), caption: t.liste.caption, alt: e.liste.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 8, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
