import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { references, manquees, STRINGS as SC } from './custom/piecesauto.mjs';
export const slug = 'logiciel-pieces-auto-algerie-2027-magasin-pieces-detachees-recherche-par-vehicule-references-equivalentes-emplacements-demandes-non-servies';
const T = {
  fr: {
    cover: { eyebrow: 'Pièces auto · Algérie · 2027', title: ['Logiciel pièces auto', 'la bonne pièce, sous tous ses noms'], subtitle: 'Recherche par véhicule, références équivalentes, stock par emplacement, demandes non servies', left: { label: '« On ne l’a pas »', sub: 'elle est en rayon, sous un autre nom' }, right: { label: 'Neuf en stock', sub: 'deux marques, deux cases' } },
    references: { caption: 'Figure 1 · Un client demande des plaquettes de frein avant pour une citadine de 2015. La référence du constructeur est à zéro, mais la même pièce existe sous quatre références équivalentes : deux sont en rayon, neuf pièces en tout, dans deux cases. Sans le lien entre les références, le vendeur répond « on ne l’a pas ». Le numéro de châssis, dix-sept caractères, lève le doute sur la version du véhicule. Véhicule, références, stocks et prix sont un exemple construit.' },
    service: { title: 'Servir un client au comptoir, en six temps', items: [
      { label: 'Identifier', sub: 'marque, modèle, année, moteur, ou châssis' },
      { label: 'Trouver la pièce', sub: 'par famille : freinage, filtration, distribution' },
      { label: 'Élargir', sub: 'à toutes les références équivalentes', accent: true },
      { label: 'Proposer', sub: 'deux qualités, deux prix, en stock' },
      { label: 'Sortir du rayon', sub: 'la case indiquée, la pièce vérifiée' },
      { label: 'Noter', sub: 'la demande, quand on répond non' },
    ], caption: 'Figure 2 · Le temps accentué est le troisième : c’est l’élargissement aux références équivalentes qui change la réponse. Le dernier temps n’existe dans aucune caisse ordinaire : quand la réponse est non, la demande est notée avec le véhicule, et c’est elle qui préparera l’achat.', alt: 'Six temps : identifier, trouver la pièce, élargir (accentué), proposer, sortir du rayon, noter.' },
    fiche: { title: 'Ce que la fiche d’une pièce doit porter', columns: ['À quoi ça sert', 'Sans cela'], rows: [
      { label: 'Références équivalentes', cells: ['trouver la pièce quelle que soit la référence demandée', 'on répond non alors qu’elle est en rayon'] },
      { label: 'Véhicules compatibles', cells: ['chercher par marque, modèle, année et moteur', 'tout repose sur la mémoire d’un vendeur'] },
      { label: 'Qualité et marque', cells: ['proposer la pièce d’origine ou une pièce de rechange', 'un seul prix à annoncer, à prendre ou à laisser'] },
      { label: 'Emplacement', cells: ['allée, étagère, case : la pièce sort en une minute', 'on cherche dans trois rayons, le client attend'] },
      { label: 'Fournisseur et délai', cells: ['dire au client quand la pièce peut arriver', '« repassez la semaine prochaine », sans date'] },
      { label: 'Retour et garantie', cells: ['savoir si la pièce se reprend, et jusqu’à quand', 'des pièces rendues qui dorment sous le comptoir'] },
    ], caption: 'Figure 3 · Six informations par pièce. Les trois premières font trouver la pièce ; les trois suivantes font tenir la promesse faite au client. Aucune n’est compliquée ; ce qui manque, dans la plupart des magasins, c’est qu’elles soient écrites quelque part plutôt que sues par une seule personne.', alt: 'Matrice de six informations que la fiche d’une pièce doit porter, avec leur utilité et ce qui se passe sans elles : références équivalentes, véhicules compatibles, qualité et marque, emplacement, fournisseur et délai, retour et garantie.' },
    manquees: { caption: 'Figure 4 · Un mois de demandes sur cinq références. Sur 150 demandes, 126 sont servies : le taux de service est de 84 %. Les 24 demandes manquées, invisibles dans les ventes, représentent 247 200 DA, dont 148 000 pour huit kits de distribution que le magasin ne tient presque pas. Quantités et prix sont un exemple construit, pas des prix de marché.' },
    couches: { title: 'Un logiciel de pièces auto, en cinq couches', layers: [
      { label: 'Catalogue', items: [{ name: 'Véhicules, familles de pièces, références du constructeur et équivalentes, reliées entre elles', sub: 'chercher par véhicule ou par n’importe quelle référence donne la même réponse', accent: true }] },
      { label: 'Stock et emplacements', items: [{ name: 'Quantité par référence et par case, réservations, inventaire tournant par allée', sub: 'la pièce trouvée à l’écran se trouve aussi sur l’étagère' }] },
      { label: 'Comptoir et application', items: [{ name: 'Vente, devis, compte des mécaniciens, application où le garage envoie sa demande et sa photo', sub: 'le garage sait avant de se déplacer si la pièce est là' }] },
      { label: 'Retours et garantie', items: [{ name: 'Retour rattaché à la vente, motif, remise en rayon ou renvoi au fournisseur, ancienne pièce reprise', sub: 'les pièces rendues ne dorment plus sous le comptoir' }] },
      { label: 'Achats et demandes', items: [{ name: 'Demandes non servies, ventes par référence, seuils, commandes par fournisseur, prix de revient', sub: 'on achète ce qui est demandé, pas ce qui s’est toujours acheté' }] },
    ], caption: 'Figure 5 · La couche accentuée est le catalogue : sans le lien entre véhicules et références, les quatre autres ne font que gérer des articles. Avec lui, le stock, le comptoir, les retours et les achats parlent tous de la même pièce, quel que soit le nom sous lequel elle est entrée.', alt: 'Cinq couches : catalogue (accentuée) ; stock et emplacements ; comptoir et application ; retours et garantie ; achats et demandes.' },
    calendrier: { title: 'Un magasin de pièces équipé en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Catalogue de départ', note: 'familles, véhicules les plus courants chez vos clients, références et équivalences des deux cents pièces qui tournent le plus', from: 0, to: 2, accent: true },
      { label: 'Emplacements', note: 'allées, étagères et cases étiquetées, chaque référence rangée et rattachée à sa case', from: 2, to: 3 },
      { label: 'Stock de départ', note: 'comptage par allée, saisi par référence et par case, pièces sans référence identifiées ou mises de côté', from: 3, to: 4 },
      { label: 'Comptoir', note: 'recherche par véhicule, ventes, retours et demandes non servies, en parallèle de l’ancienne méthode', from: 4, to: 5 },
      { label: 'Achats et application', note: 'première liste d’achat tirée des demandes, comptes des mécaniciens, application des garages', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines dans l’exemple. La période accentuée est celle du catalogue de départ : deux semaines pour les deux cents pièces qui tournent le plus et leurs équivalences ; le reste du catalogue entre au fil des ventes et des réceptions.', alt: 'Calendrier de six semaines : catalogue de départ (accentué, deux semaines), emplacements, stock de départ, comptoir, achats et application.' },
  },
  en: {
    cover: { eyebrow: 'Auto parts · Algeria · 2027', title: ['Auto parts software', 'the right part, under all its names'], subtitle: 'Search by vehicle, equivalent references, stock by location, unserved requests', left: { label: '“We don’t have it”', sub: 'it is on the shelf, under another name' }, right: { label: 'Nine in stock', sub: 'two brands, two bins' } },
    references: { caption: 'Figure 1 · A customer asks for front brake pads for a 2015 city car. The manufacturer’s reference is at zero, but the same part exists under four equivalent references: two are on the shelf, nine parts in all, in two bins. Without the link between references, the salesperson answers “we don’t have it”. The chassis number, seventeen characters, settles the doubt about the vehicle version. Vehicle, references, stock and prices are a constructed example.' },
    service: { title: 'Serving a customer at the counter, in six steps', items: [
      { label: 'Identify', sub: 'make, model, year, engine, or chassis number' },
      { label: 'Find the part', sub: 'by family: braking, filtration, timing' },
      { label: 'Widen', sub: 'to all equivalent references', accent: true },
      { label: 'Offer', sub: 'two qualities, two prices, in stock' },
      { label: 'Pick from the shelf', sub: 'the bin shown, the part checked' },
      { label: 'Note', sub: 'the request, when the answer is no' },
    ], caption: 'Figure 2 · The accented step is the third: widening to the equivalent references is what changes the answer. The last step exists in no ordinary till: when the answer is no, the request is noted with the vehicle, and it is what will prepare the purchase.', alt: 'Six steps: identify, find the part, widen (accented), offer, pick from the shelf, note.' },
    fiche: { title: 'What a part record must carry', columns: ['What it is for', 'Without it'], rows: [
      { label: 'Equivalent references', cells: ['find the part whatever reference is asked for', 'you say no while it sits on the shelf'] },
      { label: 'Compatible vehicles', cells: ['search by make, model, year and engine', 'everything rests on one salesperson’s memory'] },
      { label: 'Quality and brand', cells: ['offer the original part or a replacement part', 'a single price to quote, take it or leave it'] },
      { label: 'Location', cells: ['aisle, shelf, bin: the part is out in a minute', 'three aisles searched while the customer waits'] },
      { label: 'Supplier and lead time', cells: ['tell the customer when the part can arrive', '“come back next week”, with no date'] },
      { label: 'Return and warranty', cells: ['know whether the part is taken back, and until when', 'returned parts sleeping under the counter'] },
    ], caption: 'Figure 3 · Six pieces of information per part. The first three get the part found; the next three keep the promise made to the customer. None is complicated; what is missing, in most stores, is that they are written down somewhere rather than known by one person.', alt: 'Matrix of six pieces of information a part record must carry, with their use and what happens without them: equivalent references, compatible vehicles, quality and brand, location, supplier and lead time, return and warranty.' },
    manquees: { caption: 'Figure 4 · One month of requests on five references. Out of 150 requests, 126 are served: the fill rate is 84 %. The 24 missed requests, invisible in the sales, amount to 247,200 DZD, of which 148,000 for eight timing kits the store hardly stocks. Quantities and prices are a constructed example, not market prices.' },
    couches: { title: 'Auto parts software, in five layers', layers: [
      { label: 'Catalogue', items: [{ name: 'Vehicles, part families, manufacturer and equivalent references, linked to each other', sub: 'searching by vehicle or by any reference gives the same answer', accent: true }] },
      { label: 'Stock and locations', items: [{ name: 'Quantity per reference and per bin, reservations, cycle counting by aisle', sub: 'the part found on screen is also found on the shelf' }] },
      { label: 'Counter and app', items: [{ name: 'Sale, quotation, mechanics’ accounts, an app where the garage sends its request and its photo', sub: 'the garage knows before travelling whether the part is there' }] },
      { label: 'Returns and warranty', items: [{ name: 'Return tied to the sale, reason, back on the shelf or back to the supplier, old part taken in', sub: 'returned parts no longer sleep under the counter' }] },
      { label: 'Purchasing and requests', items: [{ name: 'Unserved requests, sales per reference, thresholds, orders per supplier, cost price', sub: 'you buy what is asked for, not what has always been bought' }] },
    ], caption: 'Figure 5 · The accented layer is the catalogue: without the link between vehicles and references, the other four only manage items. With it, stock, counter, returns and purchasing all talk about the same part, whatever name it came in under.', alt: 'Five layers: catalogue (accented); stock and locations; counter and app; returns and warranty; purchasing and requests.' },
    calendrier: { title: 'A parts store equipped in 2027, in weeks', unit: 'wk', items: [
      { label: 'Starting catalogue', note: 'families, the vehicles most common among your customers, references and equivalences of the two hundred fastest-moving parts', from: 0, to: 2, accent: true },
      { label: 'Locations', note: 'aisles, shelves and bins labelled, every reference put away and tied to its bin', from: 2, to: 3 },
      { label: 'Opening stock', note: 'count by aisle, entered per reference and per bin, parts without a reference identified or set aside', from: 3, to: 4 },
      { label: 'Counter', note: 'search by vehicle, sales, returns and unserved requests, alongside the old method', from: 4, to: 5 },
      { label: 'Purchasing and app', note: 'first purchase list drawn from the requests, mechanics’ accounts, the garages’ app', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks in the example. The accented period is the starting catalogue: two weeks for the two hundred fastest-moving parts and their equivalences; the rest of the catalogue comes in with sales and receipts.', alt: 'Six-week calendar: starting catalogue (accented, two weeks), locations, opening stock, counter, purchasing and app.' },
  },
  ar: {
    cover: { eyebrow: 'قطع غيار السيارات · الجزائر · 2027', title: ['برنامج قطع غيار السيارات', 'القطعة الصحيحة، بكل أسمائها'], subtitle: 'بحث حسب السيارة، مراجع مكافئة، مخزون حسب الموضع، وطلبات غير مسلَّمة', left: { label: '«ليست عندنا»', sub: 'هي على الرفّ، باسم آخر' }, right: { label: 'تسع في المخزون', sub: 'علامتان، خانتان' } },
    references: { caption: 'الشكل 1 · زبون يطلب صفائح فرامل أمامية لسيارة مدينة من سنة 2015. مرجع الصانع عند الصفر، لكن القطعة نفسها موجودة بأربعة مراجع مكافئة: اثنان على الرفّ، تسع قطع في المجموع، في خانتين. ودون الربط بين المراجع يجيب البائع «ليست عندنا». ورقم الهيكل، سبعة عشر حرفاً ورقماً، يرفع الشك حول نسخة السيارة. السيارة والمراجع والمخزون والأسعار مثال مركَّب.' },
    service: { title: 'خدمة زبون في المحل، في ست مراحل', items: [
      { label: 'التعرّف', sub: 'العلامة، الطراز، السنة، المحرك، أو رقم الهيكل' },
      { label: 'إيجاد القطعة', sub: 'حسب العائلة: الفرملة، التصفية، التوزيع' },
      { label: 'التوسيع', sub: 'إلى كل المراجع المكافئة', accent: true },
      { label: 'الاقتراح', sub: 'نوعيتان، سعران، في المخزون' },
      { label: 'الإخراج من الرفّ', sub: 'الخانة المبيَّنة، والقطعة مراقَبة' },
      { label: 'التسجيل', sub: 'الطلب، حين نجيب بلا' },
    ], caption: 'الشكل 2 · المرحلة المبرزة هي الثالثة: التوسيع إلى المراجع المكافئة هو ما يغيّر الجواب. والمرحلة الأخيرة لا توجد في أي صندوق عادي: حين يكون الجواب لا، يُسجَّل الطلب مع السيارة، وهو ما سيحضّر الشراء.', alt: 'ست مراحل: التعرّف، إيجاد القطعة، التوسيع (مبرزة)، الاقتراح، الإخراج من الرفّ، التسجيل.' },
    fiche: { title: 'ما يجب أن تحمله بطاقة القطعة', columns: ['ما فائدته', 'من دونه'], rows: [
      { label: 'المراجع المكافئة', cells: ['إيجاد القطعة مهما كان المرجع المطلوب', 'نجيب بلا وهي على الرفّ'] },
      { label: 'السيارات المتوافقة', cells: ['البحث بالعلامة والطراز والسنة والمحرك', 'كل شيء يقوم على ذاكرة بائع واحد'] },
      { label: 'النوعية والعلامة', cells: ['اقتراح القطعة الأصلية أو قطعة بديلة', 'سعر واحد يُعلَن، خذه أو اتركه'] },
      { label: 'الموضع', cells: ['ممرّ، رفّ، خانة: القطعة تخرج في دقيقة', 'نبحث في ثلاثة رفوف، والزبون ينتظر'] },
      { label: 'المورِّد والأجل', cells: ['إخبار الزبون متى يمكن أن تصل القطعة', '«عُد الأسبوع المقبل»، دون تاريخ'] },
      { label: 'الإرجاع والضمان', cells: ['معرفة هل تُستردّ القطعة، وإلى متى', 'قطع مرجَعة نائمة تحت المنضدة'] },
    ], caption: 'الشكل 3 · ست معلومات لكل قطعة. الثلاث الأولى تجعل القطعة تُوجَد؛ والثلاث الموالية تجعل الوعد المقدَّم للزبون يُحترَم. ولا واحدة منها معقَّدة؛ وما ينقص، في أغلب المحلات، أن تكون مكتوبة في مكان ما بدل أن يعرفها شخص واحد.', alt: 'مصفوفة ست معلومات يجب أن تحملها بطاقة القطعة، مع فائدتها وما يحدث من دونها: المراجع المكافئة، السيارات المتوافقة، النوعية والعلامة، الموضع، المورِّد والأجل، الإرجاع والضمان.' },
    manquees: { caption: 'الشكل 4 · شهر من الطلبات على خمسة مراجع. من 150 طلباً، 126 مسلَّمة: نسبة الخدمة 84 بالمئة. والطلبات الأربعة والعشرون الضائعة، التي لا تظهر في المبيعات، تمثّل 247200 دج، منها 148 ألفاً لثمانية أطقم توزيع يكاد المحل لا يمسكها. الكميات والأسعار مثال مركَّب، وليست أسعار السوق.' },
    couches: { title: 'برنامج قطع غيار السيارات، في خمس طبقات', layers: [
      { label: 'الفهرس', items: [{ name: 'السيارات، عائلات القطع، مراجع الصانع والمراجع المكافئة، مربوطة ببعضها', sub: 'البحث بالسيارة أو بأي مرجع يعطي الجواب نفسه', accent: true }] },
      { label: 'المخزون والمواضع', items: [{ name: 'الكمية لكل مرجع ولكل خانة، الحجز، والجرد الدوري حسب الممرّ', sub: 'القطعة التي تُوجَد على الشاشة تُوجَد كذلك على الرفّ' }] },
      { label: 'المحل والتطبيق', items: [{ name: 'بيع، عرض سعر، حساب الميكانيكيين، وتطبيق ترسل منه الورشة طلبها وصورتها', sub: 'الورشة تعرف قبل التنقل هل القطعة موجودة' }] },
      { label: 'الإرجاع والضمان', items: [{ name: 'إرجاع مربوط بالبيع، سبب، عودة إلى الرفّ أو إلى المورِّد، واسترداد القطعة القديمة', sub: 'القطع المرجَعة لم تعد تنام تحت المنضدة' }] },
      { label: 'الشراء والطلبات', items: [{ name: 'الطلبات غير المسلَّمة، المبيعات لكل مرجع، العتبات، الطلبيات لكل مورِّد، وسعر التكلفة', sub: 'نشتري ما يُطلَب، لا ما اعتدنا شراءه' }] },
    ], caption: 'الشكل 5 · الطبقة المبرزة هي الفهرس: دون الربط بين السيارات والمراجع، لا تفعل الأربع الأخرى إلا تسيير أصناف. ومعه، المخزون والمحل والإرجاع والشراء تتكلم كلها عن القطعة نفسها، مهما كان الاسم الذي دخلت به.', alt: 'خمس طبقات: الفهرس (مبرزة)؛ المخزون والمواضع؛ المحل والتطبيق؛ الإرجاع والضمان؛ الشراء والطلبات.' },
    calendrier: { title: 'محل قطع غيار مجهَّز سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'فهرس البداية', note: 'العائلات، السيارات الأكثر شيوعاً عند زبائنكم، ومراجع ومكافئات المئتي قطعة الأكثر دوراناً', from: 0, to: 2, accent: true },
      { label: 'المواضع', note: 'ممرّات ورفوف وخانات بملصقات، وكل مرجع مرتَّب ومربوط بخانته', from: 2, to: 3 },
      { label: 'مخزون البداية', note: 'عدّ حسب الممرّ، يُدخَل لكل مرجع ولكل خانة، والقطع التي بلا مرجع تُعرَّف أو تُوضع جانباً', from: 3, to: 4 },
      { label: 'المحل', note: 'بحث حسب السيارة، مبيعات، إرجاع وطلبات غير مسلَّمة، بالتوازي مع الطريقة القديمة', from: 4, to: 5 },
      { label: 'الشراء والتطبيق', note: 'أول قائمة شراء مأخوذة من الطلبات، حسابات الميكانيكيين، وتطبيق الورشات', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع في المثال. الفترة المبرزة هي فهرس البداية: أسبوعان للمئتي قطعة الأكثر دوراناً ومكافئاتها؛ وباقي الفهرس يدخل مع المبيعات والاستلامات.', alt: 'تقويم ستة أسابيع: فهرس البداية (مبرز، أسبوعان)، المواضع، مخزون البداية، المحل، الشراء والتطبيق.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      references: { svg: references(e.references, rtl), caption: t.references.caption, alt: e.references.alt },
      service: { svg: steps({ title: t.service.title, steps: t.service.items, arrows: true, rtl }), caption: t.service.caption, alt: t.service.alt },
      fiche: { svg: matrix({ title: t.fiche.title, columns: t.fiche.columns, rows: t.fiche.rows, rtl }), caption: t.fiche.caption, alt: t.fiche.alt },
      manquees: { svg: manquees(e.manquees, rtl), caption: t.manquees.caption, alt: e.manquees.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
