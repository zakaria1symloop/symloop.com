import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { versions, demande, STRINGS as SC } from './custom/catalogue.mjs';
export const slug = 'comment-creer-un-catalogue-en-ligne-en-algerie-2027-catalogue-pdf-jamais-a-jour-fiches-produits-prix-par-client-demande-de-devis-sans-boutique';
const T = {
  fr: {
    cover: { eyebrow: 'Catalogue en ligne · Algérie · 2027', title: ['Créer un catalogue en ligne', 'toujours à jour'], subtitle: 'Une seule base de produits, des fiches complètes, un prix par client, une demande de devis, sans boutique', left: { label: 'Un PDF de 80 pages', sub: 'six versions en circulation' }, right: { label: 'Un seul lien', sub: 'le prix et le stock du jour' } },
    couches: { title: 'Un catalogue en ligne, en cinq couches', layers: [
      { label: 'Base', items: [{ name: 'Une seule base de produits : une fiche par référence, corrigée à un seul endroit', sub: 'la page, le PDF et le lien lisent la même source', accent: true }] },
      { label: 'Images', items: [{ name: 'Des photos prises de la même façon, légères, rattachées à la référence et non au fichier', sub: 'une photo manquante se voit dans un rapport' }] },
      { label: 'Recherche', items: [{ name: 'Une recherche dans les mots du client, en français et en arabe, et des filtres par attribut', sub: 'calibre, dimension, matière, marque' }] },
      { label: 'Prix', items: [{ name: 'Un prix public, un prix par groupe de clients après connexion, ou « sur demande », et la disponibilité', sub: 'le choix se fait famille par famille' }] },
      { label: 'Sorties', items: [{ name: 'La page web, le PDF généré à la demande, le lien et le code QR par produit, la demande de devis', sub: 'tout sort de la base du jour' }] },
    ], caption: 'Figure 1 · La couche accentuée est la première : une seule base de produits. Tout le reste en sort : les images, la recherche, les prix, et les sorties que voit le client. Un catalogue en ligne n’est pas un PDF déposé sur un site ; c’est l’endroit unique où l’on corrige, et d’où le PDF lui-même est fabriqué.', alt: 'Cinq couches : base de produits (accentuée) ; images ; recherche ; prix et disponibilité ; sorties.' },
    versions: { caption: 'Figure 2 · Le même catalogue, six mois plus tard. À gauche, le PDF envoyé par message : six versions sont sorties, et sur quarante clients neuf ont la version en cours. À droite, le catalogue en ligne : un seul lien, quarante clients sur la version du jour. Exemple construit.' },
    fiche: { title: 'Une fiche produit, champ par champ', columns: ['Ce qu’on y met', 'Ce que ça permet'], rows: [
      { label: 'La référence', cells: ['un code unique et stable, et le code-barres s’il existe', 'retrouver, commander et facturer le même article'] },
      { label: 'Le titre', cells: ['le nom que dit le client, en français et en arabe', 'être trouvé par la recherche, et sur Google'] },
      { label: 'Les photos', cells: ['deux ou trois, même fond, même cadrage, fichier léger', 'reconnaître le produit sans appeler'] },
      { label: 'Les attributs', cells: ['trois à six par famille : calibre, dimension, matière', 'filtrer mille références en trois clics'] },
      { label: 'L’unité de vente', cells: ['à la pièce, au carton, à la couronne ; minimum de commande', 'une demande de devis sans malentendu'] },
      { label: 'Le prix et la disponibilité', cells: ['une règle par groupe de clients ; en stock, sur commande, arrêté', 'ne plus promettre ce qu’on n’a pas'] },
    ], caption: 'Figure 3 · Six champs. Chacun a une raison d’être : la référence relie le catalogue au stock et à la facture, le titre et les attributs font marcher la recherche et les filtres, l’unité de vente évite les malentendus, la règle de prix dit qui voit quoi. Une fiche est dite complète quand les six sont remplis.', alt: 'Matrice de six champs d’une fiche produit : la référence, le titre, les photos, les attributs, l’unité de vente, le prix et la disponibilité ; pour chacun, ce qu’on y met et ce que cela permet.' },
    demande: { caption: 'Figure 4 · De la recherche à la demande de devis. Le client cherche et filtre, compose une liste avec des quantités, et le commercial reçoit une demande écrite, avec le compte client, les références et les quantités. Ni panier ni paiement : une demande que le commercial transforme en devis. Exemple construit, références fictives.' },
    calendrier: { title: 'Six semaines, du tri des références à l’ouverture', unit: 'sem.', items: [
      { label: 'Tri des références', note: 'les références qui font l’essentiel des ventes ; familles et attributs décidés', from: 0, to: 1, accent: true },
      { label: 'Fiches et photos', note: 'titres dans les deux langues, attributs, unité de vente ; photos au même cadrage', from: 1, to: 4 },
      { label: 'Base et recherche', note: 'import depuis le tableur ou le logiciel, recherche, filtres par famille', from: 1, to: 3 },
      { label: 'Prix et disponibilité', note: 'règles de prix par groupe de clients, états de stock, branchement sur le logiciel', from: 2, to: 4 },
      { label: 'Liste et devis', note: 'liste avec quantités, demande reçue par le commercial, PDF généré à la demande', from: 3, to: 5 },
      { label: 'Ouverture et mesure', note: 'lien envoyé aux clients, codes QR, recherches sans résultat relues chaque semaine', from: 4, to: 6 },
    ], caption: 'Figure 5 · Six semaines dans l’exemple. La période accentuée est la première : le tri, pour ne mettre en ligne d’abord que les références qui font l’essentiel des ventes. Les fiches et les photos prennent le plus de temps ; les références restantes entrent ensuite, famille par famille. Durées indicatives d’un exemple construit.', alt: 'Calendrier de six semaines : tri des références (accentué, une semaine), fiches et photos, base et recherche, prix et disponibilité, liste et devis, ouverture et mesure.' },
    gestes: { title: 'Tenir le catalogue à jour : six gestes', items: [
      { label: 'Créer', sub: 'la fiche avant la première vente' },
      { label: 'Corriger', sub: 'un prix, une fois, à la source', accent: true },
      { label: 'Marquer', sub: 'en stock, sur commande, arrêté' },
      { label: 'Photographier', sub: 'chaque nouveauté, même cadrage' },
      { label: 'Relire', sub: 'les recherches sans résultat' },
      { label: 'Retirer', sub: 'sans casser les liens envoyés' },
    ], caption: 'Figure 6 · Le geste accentué est celui que le PDF ne permettait pas : corriger un prix une seule fois, à la source. Les cinq autres ont chacun un responsable. Sans eux, un catalogue en ligne vieillit comme un PDF, simplement moins visiblement.', alt: 'Six gestes : créer, corriger (accentué), marquer, photographier, relire, retirer.' },
  },
  en: {
    cover: { eyebrow: 'Online catalogue · Algeria · 2027', title: ['Building an online catalogue', 'that stays up to date'], subtitle: 'A single product base, complete sheets, a price per customer, a quote request, without a shop', left: { label: 'An 80-page PDF', sub: 'six versions in circulation' }, right: { label: 'A single link', sub: 'today’s price and stock' } },
    couches: { title: 'An online catalogue, in five layers', layers: [
      { label: 'Base', items: [{ name: 'A single product base: one sheet per reference, corrected in one place only', sub: 'the page, the PDF and the link read the same source', accent: true }] },
      { label: 'Images', items: [{ name: 'Photos taken the same way, light, attached to the reference and not to the file', sub: 'a missing photo shows up in a report' }] },
      { label: 'Search', items: [{ name: 'A search in the customer’s words, in French and in Arabic, and filters by attribute', sub: 'rating, size, material, brand' }] },
      { label: 'Price', items: [{ name: 'A public price, a price per customer group after sign-in, or “on request”, and availability', sub: 'the choice is made family by family' }] },
      { label: 'Outputs', items: [{ name: 'The web page, the PDF generated on demand, the link and QR code per product, the quote request', sub: 'everything comes out of today’s base' }] },
    ], caption: 'Figure 1 · The accented layer is the first: a single product base. Everything else comes out of it: images, search, prices, and the outputs the customer sees. An online catalogue is not a PDF placed on a site; it is the one place where you correct, and from which the PDF itself is made.', alt: 'Five layers: product base (accented); images; search; price and availability; outputs.' },
    versions: { caption: 'Figure 2 · The same catalogue, six months later. On the left, the PDF sent by message: six versions came out, and of forty customers nine have the current one. On the right, the online catalogue: a single link, forty customers on today’s version. Constructed example.' },
    fiche: { title: 'A product sheet, field by field', columns: ['What goes in it', 'What it allows'], rows: [
      { label: 'The reference', cells: ['a unique, stable code, and the barcode if there is one', 'finding, ordering and invoicing the same item'] },
      { label: 'The title', cells: ['the name the customer says, in French and in Arabic', 'being found by the search, and on Google'] },
      { label: 'The photos', cells: ['two or three, same background, same framing, light file', 'recognising the product without calling'] },
      { label: 'The attributes', cells: ['three to six per family: rating, size, material', 'filtering a thousand references in three clicks'] },
      { label: 'The unit of sale', cells: ['by the piece, the box, the coil; minimum order', 'a quote request with no misunderstanding'] },
      { label: 'Price and availability', cells: ['a rule per customer group; in stock, on order, discontinued', 'no longer promising what you do not have'] },
    ], caption: 'Figure 3 · Six fields. Each has a reason: the reference links the catalogue to stock and to the invoice, the title and the attributes make search and filters work, the unit of sale avoids misunderstandings, the price rule says who sees what. A sheet is called complete when all six are filled in.', alt: 'Matrix of six fields of a product sheet: the reference, the title, the photos, the attributes, the unit of sale, price and availability; for each, what goes in it and what it allows.' },
    demande: { caption: 'Figure 4 · From the search to the quote request. The customer searches and filters, builds a list with quantities, and the sales rep receives a written request, with the customer account, the references and the quantities. No basket, no payment: a request the sales rep turns into a quote. Constructed example, fictitious references.' },
    calendrier: { title: 'Six weeks, from sorting the references to opening', unit: 'wk', items: [
      { label: 'Sorting references', note: 'the references that make most of the sales; families and attributes decided', from: 0, to: 1, accent: true },
      { label: 'Sheets and photos', note: 'titles in both languages, attributes, unit of sale; photos with the same framing', from: 1, to: 4 },
      { label: 'Base and search', note: 'import from the spreadsheet or the software, search, filters per family', from: 1, to: 3 },
      { label: 'Price, availability', note: 'price rules per customer group, stock states, connection to the software', from: 2, to: 4 },
      { label: 'List and quote', note: 'list with quantities, request received by the sales rep, PDF generated on demand', from: 3, to: 5 },
      { label: 'Opening, measuring', note: 'link sent to customers, QR codes, searches with no result reread every week', from: 4, to: 6 },
    ], caption: 'Figure 5 · Six weeks in the example. The accented period is the first: sorting, so as to put online first only the references that make most of the sales. Sheets and photos take the most time; the remaining references come in afterwards, family by family. Indicative durations from a constructed example.', alt: 'Six-week calendar: sorting references (accented, one week), sheets and photos, base and search, price and availability, list and quote, opening and measuring.' },
    gestes: { title: 'Keeping the catalogue up to date: six actions', items: [
      { label: 'Create', sub: 'the sheet before the first sale' },
      { label: 'Correct', sub: 'a price, once, at the source', accent: true },
      { label: 'Mark', sub: 'in stock, on order, discontinued' },
      { label: 'Photograph', sub: 'each new item, same framing' },
      { label: 'Reread', sub: 'the searches with no result' },
      { label: 'Withdraw', sub: 'without breaking links sent' },
    ], caption: 'Figure 6 · The accented action is the one the PDF did not allow: correcting a price once only, at the source. The other five each have someone in charge. Without them, an online catalogue ages like a PDF, only less visibly.', alt: 'Six actions: create, correct (accented), mark, photograph, reread, withdraw.' },
  },
  ar: {
    cover: { eyebrow: 'الفهرس على الخط · الجزائر · 2027', title: ['إنشاء فهرس على الخط', 'محدَّث دائماً'], subtitle: 'قاعدة منتوجات واحدة، بطاقات كاملة، سعر لكل زبون، وطلب عرض سعر، دون متجر', left: { label: 'ملف من 80 صفحة', sub: 'ست نسخ متداولة' }, right: { label: 'رابط واحد', sub: 'سعر اليوم ومخزون اليوم' } },
    couches: { title: 'فهرس على الخط، في خمس طبقات', layers: [
      { label: 'القاعدة', items: [{ name: 'قاعدة منتوجات واحدة: بطاقة لكل مرجع، تُصحَّح في مكان واحد', sub: 'الصفحة والملف والرابط تقرأ المصدر نفسه', accent: true }] },
      { label: 'الصور', items: [{ name: 'صور مأخوذة بالطريقة نفسها، خفيفة، مربوطة بالمرجع لا بالملف', sub: 'الصورة الناقصة تظهر في تقرير' }] },
      { label: 'البحث', items: [{ name: 'بحث بكلمات الزبون، بالفرنسية والعربية، وفرز حسب الخصائص', sub: 'العيار، المقاس، المادة، والعلامة' }] },
      { label: 'السعر', items: [{ name: 'سعر علني، سعر لكل مجموعة زبائن بعد الدخول، أو «عند الطلب»، مع التوفر', sub: 'الاختيار يتم عائلة بعد عائلة' }] },
      { label: 'المخارج', items: [{ name: 'صفحة الويب، الملف المولَّد عند الطلب، الرابط ورمز الاستجابة لكل منتوج، وطلب عرض السعر', sub: 'الكل يخرج من قاعدة اليوم' }] },
    ], caption: 'الشكل 1 · الطبقة المبرزة هي الأولى: قاعدة منتوجات واحدة. وكل الباقي يخرج منها: الصور، البحث، الأسعار، والمخارج التي يراها الزبون. الفهرس على الخط ليس ملفاً موضوعاً على موقع؛ هو المكان الوحيد الذي يُصحَّح فيه، ومنه يُصنع الملف نفسه.', alt: 'خمس طبقات: قاعدة المنتوجات (مبرزة)؛ الصور؛ البحث؛ السعر والتوفر؛ المخارج.' },
    versions: { caption: 'الشكل 2 · الفهرس نفسه، بعد ستة أشهر. على جهة، الملف المرسَل برسالة: صدرت ست نسخ، ومن أربعين زبوناً تسعة عندهم النسخة الحالية. وعلى الجهة الأخرى، الفهرس على الخط: رابط واحد، وأربعون زبوناً على نسخة اليوم. مثال مركَّب.' },
    fiche: { title: 'بطاقة المنتوج، حقلاً بعد حقل', columns: ['ما يوضع فيه', 'ما يسمح به'], rows: [
      { label: 'المرجع', cells: ['رمز وحيد وثابت، والرمز الشريطي إن وُجد', 'إيجاد المادة نفسها، طلبها، وفوترتها'] },
      { label: 'العنوان', cells: ['الاسم الذي يقوله الزبون، بالفرنسية والعربية', 'أن يجده البحث، وغوغل'] },
      { label: 'الصور', cells: ['اثنتان أو ثلاث، بالخلفية نفسها والتأطير نفسه، وملف خفيف', 'التعرّف على المنتوج دون مكالمة'] },
      { label: 'الخصائص', cells: ['من ثلاث إلى ست لكل عائلة: العيار، المقاس، المادة', 'فرز ألف مرجع في ثلاث نقرات'] },
      { label: 'وحدة البيع', cells: ['بالقطعة، بالعلبة، باللفّة؛ والحد الأدنى للطلب', 'طلب عرض سعر دون سوء فهم'] },
      { label: 'السعر والتوفر', cells: ['قاعدة لكل مجموعة زبائن؛ متوفر، عند الطلب، أو موقوف', 'ألّا نَعِد بما ليس عندنا'] },
    ], caption: 'الشكل 3 · ستة حقول. ولكل واحد سبب: المرجع يربط الفهرس بالمخزون والفاتورة، العنوان والخصائص يُشغّلان البحث والفرز، وحدة البيع تجنّب سوء الفهم، وقاعدة السعر تقول من يرى ماذا. والبطاقة تُسمّى كاملة حين تُملأ الستة.', alt: 'مصفوفة ستة حقول في بطاقة المنتوج: المرجع، العنوان، الصور، الخصائص، وحدة البيع، السعر والتوفر؛ ولكل واحد ما يوضع فيه وما يسمح به.' },
    demande: { caption: 'الشكل 4 · من البحث إلى طلب عرض السعر. الزبون يبحث ويفرز، يكوّن قائمة بالكميات، والمندوب يستلم طلباً مكتوباً، بحساب الزبون والمراجع والكميات. لا سلّة ولا دفع: طلب يحوّله المندوب إلى عرض سعر. مثال مركَّب، بمراجع خيالية.' },
    calendrier: { title: 'ستة أسابيع، من فرز المراجع إلى الفتح', unit: 'أسبوع', items: [
      { label: 'فرز المراجع', note: 'المراجع التي تصنع أغلب المبيعات؛ وتحديد العائلات والخصائص', from: 0, to: 1, accent: true },
      { label: 'البطاقات والصور', note: 'العناوين باللغتين، الخصائص، وحدة البيع؛ وصور بالتأطير نفسه', from: 1, to: 4 },
      { label: 'القاعدة والبحث', note: 'الاستيراد من الجدول أو البرنامج، البحث، والفرز حسب العائلة', from: 1, to: 3 },
      { label: 'السعر والتوفر', note: 'قواعد السعر لكل مجموعة زبائن، حالات المخزون، والربط بالبرنامج', from: 2, to: 4 },
      { label: 'القائمة وعرض السعر', note: 'قائمة بالكميات، طلب يستلمه المندوب، وملف يُولَّد عند الطلب', from: 3, to: 5 },
      { label: 'الفتح والقياس', note: 'الرابط مرسَل للزبائن، رموز الاستجابة، والبحث دون نتيجة يُراجَع كل أسبوع', from: 4, to: 6 },
    ], caption: 'الشكل 5 · ستة أسابيع في المثال. الفترة المبرزة هي الأولى: الفرز، حتى لا يوضع على الخط أولاً إلا المراجع التي تصنع أغلب المبيعات. والبطاقات والصور تأخذ أكثر الوقت؛ والمراجع الباقية تدخل بعدها، عائلة بعد عائلة. مدد تقريبية لمثال مركَّب.', alt: 'تقويم ستة أسابيع: فرز المراجع (مبرزة، أسبوع)، البطاقات والصور، القاعدة والبحث، السعر والتوفر، القائمة وعرض السعر، الفتح والقياس.' },
    gestes: { title: 'إبقاء الفهرس محدَّثاً: ستة أفعال', items: [
      { label: 'الإنشاء', sub: 'البطاقة قبل أول بيع' },
      { label: 'التصحيح', sub: 'سعر، مرة واحدة، في المصدر', accent: true },
      { label: 'التأشير', sub: 'متوفر، عند الطلب، أو موقوف' },
      { label: 'التصوير', sub: 'كل جديد، بالتأطير نفسه' },
      { label: 'المراجعة', sub: 'البحث الذي لم يعط نتيجة' },
      { label: 'السحب', sub: 'دون كسر الروابط المرسَلة' },
    ], caption: 'الشكل 6 · الفعل المبرز هو الذي لم يكن الملف يسمح به: تصحيح سعر مرة واحدة، في المصدر. وللخمسة الأخرى مسؤول لكل واحد. ودونهم، الفهرس على الخط يشيخ مثل الملف، لكن بشكل أقل ظهوراً.', alt: 'ستة أفعال: الإنشاء، التصحيح (مبرز)، التأشير، التصوير، المراجعة، السحب.' },
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
      versions: { svg: versions(e.versions, rtl), caption: t.versions.caption, alt: e.versions.alt },
      fiche: { svg: matrix({ title: t.fiche.title, columns: t.fiche.columns, rows: t.fiche.rows, rtl }), caption: t.fiche.caption, alt: t.fiche.alt },
      demande: { svg: demande(e.demande, rtl), caption: t.demande.caption, alt: e.demande.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      gestes: { svg: steps({ title: t.gestes.title, steps: t.gestes.items, arrows: true, rtl }), caption: t.gestes.caption, alt: t.gestes.alt },
    },
  };
}
